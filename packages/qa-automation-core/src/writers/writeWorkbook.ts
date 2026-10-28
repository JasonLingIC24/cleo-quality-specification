import fs from "fs";
import path from "path";
import ExcelJS from "exceljs";

export async function writeWorkbook(
  outputDir: string,
  fileName: string,
  workbook: ExcelJS.Workbook,
): Promise<void> {
  fs.mkdirSync(outputDir, {
    recursive: true,
  });

  await workbook.xlsx.writeFile(path.join(outputDir, fileName));
}
