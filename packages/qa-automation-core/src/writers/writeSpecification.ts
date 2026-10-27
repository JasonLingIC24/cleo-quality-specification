import fs from "fs";
import path from "path";

export function writeSpecification(
  outputDir: string,
  fileName: string,
  specification: unknown,
): void {

  fs.mkdirSync(outputDir, {
    recursive: true,
  });

  fs.writeFileSync(
    path.join(outputDir, fileName),
    JSON.stringify(
      specification,
      null,
      2,
    ),
    "utf8",
  );
}