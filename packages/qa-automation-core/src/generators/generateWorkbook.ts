import ExcelJS from "exceljs";

import type { TestSpecification } from "@qa-automation/test-specification";

export async function generateWorkbook(
  specification: TestSpecification,
): Promise<ExcelJS.Workbook> {
  const workbook = new ExcelJS.Workbook();

  workbook.creator = "qa-automation";

  workbook.created = new Date();

  const sheet = workbook.addWorksheet(specification.summary.substring(0, 31));

  sheet.addRow(["Feature", specification.summary]);

  return workbook;
}
