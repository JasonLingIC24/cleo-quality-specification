import ExcelJS from "exceljs";

import type { TestSpecification } from "@cleo-quality-specification/test-specification";

export async function generateWorkbook(
  specification: TestSpecification,
): Promise<ExcelJS.Workbook> {
  const workbook = new ExcelJS.Workbook();

  workbook.creator = "cleo-quality-specification";

  workbook.created = new Date();

  /*
   * ============================================================
   * LOOKUP SHEET
   * ============================================================
   */

  const listSheet = workbook.addWorksheet("_lists");

  listSheet.state = "veryHidden";

  listSheet.getCell("A1").value = "Not Run";
  listSheet.getCell("A2").value = "Pass";
  listSheet.getCell("A3").value = "Fail";
  listSheet.getCell("A4").value = "N/A";

  listSheet.getCell("B1").value = "Manual";
  listSheet.getCell("B2").value = "Cypress";

  /*
   * ============================================================
   * FEATURE SHEET
   * ============================================================
   */

  const sheet = workbook.addWorksheet(specification.jiraKey);

  sheet.columns = [
    { width: 20 }, // Test Case ID
    { width: 40 }, // Scenario
    { width: 45 }, // GIVEN
    { width: 45 }, // WHEN
    { width: 45 }, // THEN
    { width: 20 }, // Test Data
    { width: 12 }, // Result
    { width: 12 }, // Environment
    { width: 35 }, // Tester Notes
    { width: 25 }, // Evidence
  ];

  /*
   * ============================================================
   * METADATA
   * ============================================================
   */

  addMetadataRow(sheet, "Feature", specification.summary);
  addMetadataRow(sheet, "Feature ID", {
    text: specification.jiraKey,
    hyperlink: `https://cleosystems.atlassian.net/browse/${specification.jiraKey}`,
  });
  addMetadataRow(sheet, "Domain", "");
  addMetadataRow(sheet, "Tags", "@manual");
  addMetadataRow(sheet, "Product", "Elevate");
  addMetadataRow(sheet, "Version", "");
  addMetadataRow(sheet, "Environment", "Staging");
  addMetadataRow(
    sheet,
    "Scenario Count",
    String(specification.scenarios.length),
  );

  addMetadataRow(
    sheet,
    "Assertion Count",
    String(
      specification.scenarios.reduce(
        (total, scenario) => total + scenario.expectedResults.length,
        0,
      ),
    ),
  );
  addMetadataRow(
    sheet,
    "Generated At",
    new Date().toLocaleString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }),
  );

  if (specification.background && specification.background.length > 0) {
    addMetadataRow(
      sheet,
      "Preconditions",
      specification.background.map((step) => `• ${step}`).join("\n"),
    );
    autoHeight(sheet.getRow(sheet.rowCount));
  }

  sheet.addRow([]);
  /*
   * ============================================================
   * HEADER
   * ============================================================
   */

  const headerRow = sheet.addRow([
    "Test Case ID",
    "Scenario",
    "GIVEN",
    "WHEN",
    "THEN",
    "Test Data",
    "Result",
    "Environment",
    "Test Notes",
    "Evidence",
  ]);

  styleHeaderRow(headerRow);

  sheet.autoFilter = {
    from: {
      row: headerRow.number,
      column: 1,
    },
    to: {
      row: headerRow.number,
      column: 10,
    },
  };

  sheet.views = [
    {
      state: "frozen",
      ySplit: headerRow.number,
    },
  ];

  /*
   * ============================================================
   * SCENARIOS
   * ============================================================
   */
  specification.scenarios.forEach((scenario) => {
    const givenCell = buildRichSteps("GIVEN", scenario.preconditions);

    const whenCell = buildRichSteps("WHEN", scenario.actions);

    scenario.expectedResults.forEach((expectedResult, index) => {
      const firstRow = index === 0;

      const thenCell = {
        richText: [
          {
            text: firstRow ? "THEN " : "AND ",
            font: {
              bold: true,
            },
          },
          {
            text: expectedResult.text,
          },
        ],
      };

      const row = sheet.addRow([
        expectedResult.id,
        firstRow ? scenario.title : "",
        firstRow ? givenCell : "",
        firstRow ? whenCell : "",
        thenCell,
        "",
        "Not Run",
        "Manual",
        "",
        "",
      ]);

      styleScenarioRow(row);
      applyExecutionDropdowns(row);

      autoHeight(row);
    });

    addScenarioEndRow(sheet, "", "");
  });

  return workbook;
}

/*
 * ============================================================
 * HELPERS
 * ============================================================
 */

function styleHeaderRow(headerRow: ExcelJS.Row) {
  headerRow.eachCell((cell) => {
    cell.font = { bold: true };
    cell.font.name = "Nunito Sans";
    cell.font.size = 10;
    cell.fill = solid("FFD9E1F2");
    cell.border = thinBorder();
    cell.alignment = { vertical: "middle", horizontal: "left", indent: 1 };
  });

  headerRow.height = 30;

  [6, 7, 8].forEach((col) => {
    headerRow.getCell(col).alignment = {
      vertical: "middle",
      horizontal: "center",
    };
  });
}

function thinBorder(): Partial<ExcelJS.Borders> {
  return {
    top: { style: "thin" },
    bottom: { style: "thin" },
    left: { style: "thin" },
    right: { style: "thin" },
  };
}

function addMetadataRow(
  sheet: ExcelJS.Worksheet,
  label: string,
  value: string | ExcelJS.CellValue,
) {
  const row = sheet.addRow([label, value, ""]);

  // Merge B + C
  sheet.mergeCells(`B${row.number}:C${row.number}`);

  const colA = row.getCell(1);
  colA.font = { name: "Nunito Sans", size: 10, bold: true };

  // Alignment for BOTH cells
  colA.alignment = {
    horizontal: "left",
    vertical: "middle",
  };

  colA.border = metadataBorder();
  colA.fill = solid("FFD9E1F2");

  const colB = row.getCell(2);
  if (typeof value === "object" && value !== null && "hyperlink" in value) {
    colB.font = {
      name: "Nunito Sans",
      size: 10,
      color: {
        argb: "FF0563C1",
      },
      underline: true,
    };
  }

  colB.alignment = {
    wrapText: true,
    horizontal: "left",
    vertical: "middle",
  };
  colB.fill = solid("FFF2F2F2");

  const textValue = typeof value === "string" ? value : String(value ?? "");

  const lineCount = textValue.split("\n").length;

  row.height = Math.max(20, lineCount * 18);
}

function addScenarioEndRow(
  sheet: ExcelJS.Worksheet,
  label: string,
  value: string,
) {
  const row = sheet.addRow([label, value, ""]);

  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((col) => {
    row.getCell(col).fill = solid("FFBFBFBF");
  });

  row.height = 1.5;
}

function styleScenarioRow(row: ExcelJS.Row) {
  row.eachCell((cell, colNumber) => {
    cell.font = { name: "Nunito Sans", size: 10 };

    cell.alignment = {
      vertical: "top",
      horizontal: "left",
      wrapText: true,
    };

    switch (colNumber) {
      case 1: // TestCase ID Column
        cell.alignment = {
          vertical: "top",
          horizontal: "center",
          wrapText: true,
        };
        cell.font.bold = true;
        cell.border = metadataBorder();
        cell.fill = solid("FFD9D9D9");
        break;
      case 2: // Scenario Column
        cell.fill = solid("FFD9D9D9");
        cell.alignment = {
          vertical: "top",
          horizontal: "left",
          wrapText: true,
          indent: 1,
        };
        break;
      case 3: // GIVEN
        cell.fill = solid("FFDEEAF6");
        break;
      case 4: // WHEN
        cell.fill = solid("FFFFF2CC");
        break;
      case 5: // THEN / AND
        if (!row.getCell(1).value) {
          cell.fill = solid("FFEAF6E5");
        } else {
          cell.fill = solid("FFDFF0D8");
        }
        break;
    }
  });
}

function applyExecutionDropdowns(row: ExcelJS.Row) {
  const resultCell = row.getCell(7);

  resultCell.dataValidation = {
    type: "list",
    allowBlank: true,
    formulae: ["_lists!$A$1:$A$4"],
  };

  resultCell.fill = solid("FFD9D9D9"); // mid grey FFBFBFBF orange FFFABF8F

  resultCell.alignment = {
    horizontal: "center",
    vertical: "middle",
  };

  const envCell = row.getCell(8);

  envCell.dataValidation = {
    type: "list",
    allowBlank: true,
    formulae: ["_lists!$B$1:$B$2"],
  };

  envCell.alignment = {
    horizontal: "center",
    vertical: "middle",
  };

  const env = String(envCell.value ?? "").toLowerCase();

  if (env.toLowerCase() === "cypress") {
    envCell.fill = solid("FF0070C0");

    envCell.font = {
      color: {
        argb: "FFFFFFFF",
      },
      size: 10,
      name: "Nunito Sans",
    };
  } else {
    envCell.fill = solid("FFFABF8F");
  }
}

function autoHeight(row: ExcelJS.Row) {
  let maxLines = 1;

  row.eachCell({ includeEmpty: true }, (cell) => {
    let text = "";

    if (typeof cell.value === "string") {
      text = cell.value;
    } else if (
      cell.value &&
      typeof cell.value === "object" &&
      "richText" in cell.value
    ) {
      text = cell.value.richText.map((r: any) => r.text).join("");
    }

    const columnWidth = row.worksheet.getColumn(cell.col).width ?? 20;

    /*
     * Explicit line breaks
     */

    const explicitLines = text.split("\n").length + 1;

    /*
     * Excel wrapping approximation
     */

    const wrappedLines = Math.ceil(text.length / (columnWidth * 1.2));

    maxLines = Math.max(maxLines, explicitLines, wrappedLines);
  });

  row.height = Math.max(20, maxLines * 20);
}

function solid(argb: string): ExcelJS.FillPattern {
  return {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb },
  };
}

function metadataBorder(): Partial<ExcelJS.Borders> {
  return {
    right: {
      style: "thin",
      color: { argb: "FFBFBFBF" }, // ✅ mid grey
    },
  };
}

function buildRichSteps(
  firstKeyword: string,
  steps: string[],
): ExcelJS.CellRichTextValue {
  const richText: ExcelJS.RichText[] = [];

  steps.forEach((step, index) => {
    if (index > 0) {
      richText.push({
        text: "\n",
      });

      richText.push({
        text: "    • ",
      });
    }

    richText.push({
      text: index === 0 ? `${firstKeyword} ` : "AND ",
      font: {
        bold: true,
        name: "Nunito Sans",
        size: 10,
      },
    });

    richText.push({
      text: step,
      font: {
        name: "Nunito Sans",
        size: 10,
      },
    });
  });

  return {
    richText,
  };
}
