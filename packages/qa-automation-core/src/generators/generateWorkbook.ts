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
   * EXECUTION SUMMARY SHEET
   * ============================================================
   */

  const summary = workbook.addWorksheet("Execution Summary");

  summary.addRow(["Execution Summary"]);

  summary.getRow(1).font = {
    bold: true,
    size: 16,
  };

  summary.addRow([]);

  summary.addRow(["Metric", "Value"]);

  const summaryHeader = summary.getRow(3);

  summaryHeader.eachCell((cell) => {
    cell.font = {
      bold: true,
      size: 10,
      name: "Nunito Sans",
    };

    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: {
        argb: "FFD9E1F2",
      },
    };

    cell.border = thinBorder();

    cell.alignment = {
      vertical: "middle",
      horizontal: "left",
    };
  });

  summary.addRow(["Total Scenarios", specification.scenarios.length]);

  summary.columns = [{ width: 25 }, { width: 20 }];

  /*
   * ============================================================
   * FEATURE SHEET
   * ============================================================
   */

  const sheet = workbook.addWorksheet(specification.summary.substring(0, 31));

  sheet.columns = [
    { width: 18 }, // Test Case ID
    { width: 40 }, // Scenario
    { width: 50 }, // GIVEN
    { width: 50 }, // WHEN
    { width: 50 }, // THEN
    { width: 12 }, // Result
    { width: 12 }, // Environment
    { width: 30 }, // Evidence
  ];

  /*
   * ============================================================
   * METADATA
   * ============================================================
   */

  sheet.addRow(["Feature", specification.summary]);

  sheet.addRow(["Feature ID", specification.jiraKey]);

  sheet.addRow(["Generated At", specification.metadata.generatedAt]);

  sheet.addRow(["Scenario Count", specification.scenarios.length]);

  for (let rowNum = 1; rowNum <= 4; rowNum++) {
    const row = sheet.getRow(rowNum);

    row.getCell(1).font = {
      bold: true,
      size: 10,
      name: "Nunito Sans",
    };

    row.getCell(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: {
        argb: "FFD9E1F2",
      },
    };

    row.getCell(1).border = thinBorder();

    row.getCell(2).alignment = {
      vertical: "top",
      wrapText: true,
    };
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
    "Result",
    "Environment",
    "Evidence",
  ]);

  headerRow.eachCell((cell) => {
    cell.font = {
      bold: true,
      size: 10,
      name: "Nunito Sans",
    };

    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: {
        argb: "FFD9E1F2",
      },
    };

    cell.border = thinBorder();

    cell.alignment = {
      vertical: "middle",
      horizontal: "center",
    };
  });

  sheet.views = [
    {
      state: "frozen",
      ySplit: headerRow.number,
    },
  ];

  /*
   * ============================================================
   * SCENARIO ROWS
   * ============================================================
   */

  specification.scenarios.forEach((scenario) => {
    const row = sheet.addRow([
      scenario.id,

      scenario.title,

      scenario.preconditions.join("\n"),

      scenario.actions.join("\n"),

      scenario.expectedResults.join("\n"),

      "N/A",

      "Manual",

      "",
    ]);

    autoHeight(row);

    row.eachCell((cell) => {
      cell.alignment = {
        vertical: "top",
        wrapText: true,
      };

      cell.border = thinBorder();

      cell.font = {
        size: 10,
        name: "Nunito Sans",
      };
    });

    /*
     * GIVEN
     */

    row.getCell(3).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: {
        argb: "FFDEEAF6",
      },
    };

    /*
     * WHEN
     */

    row.getCell(4).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: {
        argb: "FFFFF2CC",
      },
    };

    /*
     * THEN
     */

    row.getCell(5).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: {
        argb: "FFDFF0D8",
      },
    };

    /*
     * RESULT
     */

    const resultCell = row.getCell(6);

    resultCell.alignment = {
      horizontal: "center",
      vertical: "middle",
    };

    resultCell.dataValidation = {
      type: "list",
      allowBlank: true,
      formulae: ['"Pass,Fail,N/A"'],
    };

    const resultValue = String(resultCell.value ?? "");

    switch (resultValue.toLowerCase()) {
      case "pass":
        resultCell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: {
            argb: "FFDFF0D8",
          },
        };
        break;

      case "fail":
        resultCell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: {
            argb: "FFFCE4D6",
          },
        };
        break;

      default:
        resultCell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: {
            argb: "FFFABF8F",
          },
        };
    }

    row.getCell(6).alignment = {
      horizontal: "center",
      vertical: "middle",
    };

    row.getCell(6).dataValidation = {
      type: "list",
      allowBlank: true,
      formulae: ['"Pass,Fail,N/A"'],
    };

    /*
     * ENVIRONMENT
     */

    const environmentCell = row.getCell(7);

    environmentCell.alignment = {
      horizontal: "center",
      vertical: "middle",
    };

    environmentCell.dataValidation = {
      type: "list",
      allowBlank: true,
      formulae: ['"Manual,Cypress"'],
    };

    const environmentValue = String(environmentCell.value ?? "");

    switch (environmentValue.toLowerCase()) {
      case "cypress":
        environmentCell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: {
            argb: "FF0070C0", // Blue
          },
        };
        environmentCell.font = {
          color: {
            argb: "FFFFFFFF",
          },
          size: 10,
          name: "Nunito Sans",
        };
        break;

      case "manual":
        environmentCell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: {
            argb: "FFFABF8F", // Amber
          },
        };
        break;

      default:
        environmentCell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: {
            argb: "FFFABF8F",
          },
        };
    }
  });

  return workbook;
}

/*
 * ============================================================
 * HELPERS
 * ============================================================
 */

function thinBorder(): Partial<ExcelJS.Borders> {
  return {
    top: {
      style: "thin",
    },

    bottom: {
      style: "thin",
    },

    left: {
      style: "thin",
    },

    right: {
      style: "thin",
    },
  };
}

function autoHeight(row: ExcelJS.Row) {
  let maxLines = 1;

  row.eachCell({ includeEmpty: true }, (cell) => {
    const value = String(cell.value ?? "");

    const columnWidth = row.worksheet.getColumn(cell.col).width ?? 20;

    const estimatedLines = Math.ceil(value.length / columnWidth);

    maxLines = Math.max(maxLines, estimatedLines);
  });

  row.height = Math.max(20, maxLines * 15);
}
