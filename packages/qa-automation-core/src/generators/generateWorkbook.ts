import ExcelJS from "exceljs";

import type { TestSpecification } from "@qa-automation/test-specification";

export async function generateWorkbook(
  specification: TestSpecification,
): Promise<ExcelJS.Workbook> {
  const workbook = new ExcelJS.Workbook();

  workbook.creator = "qa-automation";

  workbook.created = new Date();

  /*
   * ============================================================
   * LOOKUP SHEET
   * ============================================================
   */

  const listSheet = workbook.addWorksheet("_lists");

  listSheet.state = "veryHidden";

  listSheet.getCell("A1").value = "Pass";

  listSheet.getCell("A2").value = "Fail";

  listSheet.getCell("A3").value = "N/A";

  listSheet.getCell("B1").value = "Manual";

  listSheet.getCell("B2").value = "Cypress";

  /*
   * ============================================================
   * FEATURE SHEET
   * ============================================================
   */

  const sheet = workbook.addWorksheet(specification.summary.substring(0, 31));

  sheet.columns = [
    { width: 22 }, // Label
    //{ width: 20 }, // Requirement
    { width: 40 }, // Scenario
    { width: 50 }, // GIVEN
    { width: 50 }, // WHEN
    { width: 50 }, // THEN
    { width: 25 }, // Test Data
    { width: 12 }, // Result
    { width: 12 }, // Environment
    { width: 30 }, // Evidence
  ];

  /*
   * ============================================================
   * METADATA
   * ============================================================
   */

  addMetadataRow(sheet, "Feature", specification.summary);

  addMetadataRow(sheet, "Feature ID", specification.jiraKey);

  addMetadataRow(sheet, "Parent Story", specification.parentStoryKey ?? "");

  addMetadataRow(
    sheet,
    "Generated At",
    new Date().toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }),
  );

  addMetadataRow(
    sheet,
    "Scenario Count",
    String(specification.scenarios.length),
  );

  addMetadataRow(sheet, "Source", specification.metadata.sourceType);

  addMetadataRow(
    sheet,
    "Generator Version",
    specification.metadata.generatorVersion,
  );

  if (specification.background && specification.background.length > 0) {
    addMetadataRow(sheet, "Preconditions", specification.background.join("\n"));
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
    "Evidence",
  ]);

  styleHeaderRow(headerRow);

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
    const givenCell = {
      richText: [
        {
          text: "GIVEN ",
          font: {
            bold: true,
          },
        },
        {
          text: cleanText(scenario.preconditions.join("\n")),
        },
      ],
    };

    const whenCell = {
      richText: [
        {
          text: "WHEN ",
          font: {
            bold: true,
          },
        },
        {
          text: cleanText(scenario.actions.join("\n")),
        },
      ],
    };

    const thenCell = {
      richText: [
        {
          text: "THEN ",
          font: {
            bold: true,
          },
        },
        {
          text: cleanText(scenario.expectedResults.join("\n")),
        },
      ],
    };

    const row = sheet.addRow([
      scenario.id,
      scenario.title,
      givenCell,
      whenCell,
      thenCell,
      "Test Data",
      "N/A",
      "Manual",
      "",
    ]);

    /*
     * Test Case ID
     */

    row.getCell(1).alignment = {
      horizontal: "center",
      vertical: "middle",
    };

    /*
     * Scenario
     */

    row.getCell(2).font = {
      bold: true,
      size: 10,
      name: "Nunito Sans",
    };

    styleScenarioRow(row);

    applyExecutionDropdowns(row);

    autoHeight(row);
  });

  /*
   * ============================================================
   * EXECUTION SUMMARY
   * ============================================================
   */

  addExecutionSummarySheet(workbook);

  return workbook;
}

/*
 * ============================================================
 * HELPERS
 * ============================================================
 */

function sheetRef(name: string) {
  return `'${name.replace(/'/g, "''")}'`;
}

function addExecutionSummarySheet(workbook: ExcelJS.Workbook) {
  const sheet = workbook.addWorksheet("Execution Summary");

  sheet.addRow(["Execution Summary"]);
  sheet.getRow(1).font = { bold: true, size: 16 };

  sheet.addRow([]);
  sheet.addRow(["Metric", "Value"]);
  const headerRow = sheet.getRow(3);

  headerRow.eachCell((cell) => {
    cell.font = {
      bold: true,
      size: 10,
      name: "Nunito Sans",
    };

    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFD9E1F2" },
    };

    cell.border = {
      top: { style: "thin" },
      bottom: { style: "thin" },
      left: { style: "thin" },
      right: { style: "thin" },
    };

    cell.alignment = {
      vertical: "middle",
      horizontal: "left",
    };
  });

  headerRow.height = 30;

  sheet.addRow(["Total Tests", { formula: "SUM(B8:B100)" }]);
  sheet.addRow(["Passed", { formula: "SUM(C8:C100)" }]);
  sheet.addRow(["Failed", { formula: "SUM(D8:D100)" }]);

  const passRow = sheet.addRow(["Pass %", { formula: "IFERROR(C4/B4,0)" }]);

  passRow.getCell(2).numFmt = "0.00%";
  sheet.addRow([]);
  sheet.addRow(["Feature", "Total Tests", "Passed", "Failed", "Pass %"]);

  for (const ws of workbook.worksheets) {
    if (ws.name === "Execution Summary" || ws.name === "_lists") continue;

    const sheetName = sheetRef(ws.name);

    const passFormula = `COUNTIF(${sheetName}!G:G,"Pass")`;
    const failFormula = `COUNTIF(${sheetName}!G:G,"Fail")`;
    const totalFormula = `${passFormula}+${failFormula}+COUNTIF(${sheetName}!G:G,"N/A")`;

    const row = sheet.addRow([
      ws.name,
      { formula: totalFormula },
      { formula: passFormula },
      { formula: failFormula },
      { formula: `IFERROR(${passFormula}/(${totalFormula}),0)` },
    ]);
    row.eachCell((cell) => {
      cell.font = { name: "Nunito Sans", size: 10 };

      cell.border = {
        top: { style: "thin" },
        bottom: { style: "thin" },
        left: { style: "thin" },
        right: { style: "thin" },
      };

      cell.alignment = {
        vertical: "middle",
        horizontal: "center",
      };
    });
    row.getCell(3).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFDFF0D8" },
    };
    row.getCell(4).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFFCE4D6" },
    };

    row.getCell(5).numFmt = "0.00%";
    sheet.columns = [
      { width: 30 }, // Feature
      { width: 12 }, // Total Test
      { width: 12 }, // Pass
      { width: 12 }, // Fail
      { width: 12 }, // Pass %
    ];
  }
}

function cleanText(input: string): string {
  return (
    (input || "")

      // ✅ remove wrapping quotes/backticks
      .replace(/^["'`]+|["'`]+$/g, "")

      // ✅ join concatenated strings: "foo" + "bar"
      .replace(/["'`]\s*\+\s*["'`]/g, " ")

      // ✅ normalize multi-line template literals
      .replace(/\n\s*/g, " ")

      // ✅ fix template variables ${x} → {x}
      .replace(/\$\{\$?\{?([\w\.]+)\}?/g, (_, v: string) => {
        return `{${v.split(".").pop()}}`;
      })

      // ✅ remove TC IDs like [PAT-XXX]
      .replace(/\[[^\]]+\]\s*/, "")

      // ✅ clean broken quotes
      .replace(/^"+|"+$/g, "")

      // ✅ collapse whitespace
      .replace(/\s+/g, " ")

      .trim()
  );
}

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
  value: string,
) {
  const row = sheet.addRow([label, value, ""]);

  // ✅ merge B + C + D
  sheet.mergeCells(`B${row.number}:D${row.number}`);

  // ✅ styling
  row.getCell(1).font = { bold: true };

  // ✅ alignment for BOTH cells
  row.getCell(1).alignment = {
    horizontal: "left",
    vertical: "middle",
  };
  row.getCell(1).border = metadataBorder();

  row.getCell(2).alignment = {
    wrapText: true,
    horizontal: "left",
    vertical: "middle",
  };

  // ✅ background (optional but matches your style)
  row.getCell(1).fill = solid("FFD9E1F2");
  //row.getCell(2).fill = solid("FFD9E1F2");
  row.getCell(2).fill = solid("FFF2F2F2");

  // ✅ row height
  //row.height = 20;
  autoHeight(row);
}

function styleScenarioRow(row: ExcelJS.Row) {
  [1].forEach((col) => {
    row.getCell(col).alignment = {
      vertical: "middle",
      horizontal: "center",
      wrapText: true,
    };
    row.getCell(col).font = { size: 10, name: "Nunito Sans", bold: true };
    row.getCell(col).fill = solid("FFD9D9D9");
  });

  row.getCell(1).border = metadataBorder();

  [2].forEach((col) => {
    row.getCell(col).alignment = {
      vertical: "top",
      horizontal: "left",
      wrapText: true,
    };
    row.getCell(col).font = { size: 10, name: "Nunito Sans", bold: true };
    row.getCell(col).fill = solid("FFD9D9D9");
  });

  row.getCell(3).fill = solid("FFDEEAF6"); // GIVEN = blue
  row.getCell(4).fill = solid("FFFFF2CC"); // WHEN = yellow
  row.getCell(5).fill = solid("FFDFF0D8"); // THEN = green

  [2, 3, 4, 5].forEach((col) => {
    row.getCell(col).alignment = {
      ...(row.getCell(col).alignment || {
        vertical: "top",
        horizontal: "left",
        indent: 1,
      }),
      wrapText: true,
    };
    row.getCell(col).font = { size: 10, name: "Nunito Sans" };
  });
  // row.eachCell((cell) => {
  //   cell.font = {
  //     size: 10,
  //     name: "Nunito Sans",
  //   };

  //   cell.alignment = {
  //     vertical: "top",
  //     wrapText: true,
  //   };
  // });

  // /*
  //  * Test Case ID
  //  */

  // row.getCell(1).fill = solid("FFD9D9D9");

  // /*
  //  * Requirement
  //  */

  // // row.getCell(2).fill = solid("FFD9D9D9");

  // /*
  //  * Scenario
  //  */

  // row.getCell(2).fill = solid("FFD9D9D9");

  // /*
  //  * GIVEN
  //  */

  // row.getCell(3).fill = solid("FFDEEAF6");

  // /*
  //  * WHEN
  //  */

  // row.getCell(4).fill = solid("FFFFF2CC");

  // /*
  //  * THEN
  //  */

  // row.getCell(5).fill = solid("FFDFF0D8");

  // /*
  //  * Examples
  //  */

  // row.getCell(6).fill = solid("FFF2F2F2");
}

function applyExecutionDropdowns(row: ExcelJS.Row) {
  const resultCell = row.getCell(7);

  resultCell.dataValidation = {
    type: "list",
    allowBlank: true,
    formulae: ["_lists!$A$1:$A$3"],
  };

  resultCell.fill = solid("FFFABF8F");

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

function autoHeight(row: ExcelJS.Row, baseWidth = 100) {
  // tweak if needsed
  // const approxCharsPerLine = colWidth * 1.2;
  // row.height = maxLines * 15;
  // EffectChangeTighter rows * 14
  // More spacing * 16
  // Earlier wrappingcolWidth * 1.0

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
      text = cell.value.richText
        .map((r: any) => r.text)
        .join(" ")
        .replace(/\n/g, " ");
    }

    // ✅ estimate wrapping (based on column width)
    const colWidth = cell.col
      ? row.worksheet.getColumn(cell.col).width || 20
      : 20;

    const approxCharsPerLine = colWidth * 1.0; // tuning factor
    const lines = Math.ceil(text.length / approxCharsPerLine);

    maxLines = Math.max(maxLines, lines);
  });

  row.height = Math.max(20, maxLines * 15); // 12px per line
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
