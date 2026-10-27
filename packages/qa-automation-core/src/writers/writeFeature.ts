import fs from "fs";
import path from "path";

export function writeFeature(
  outputDir: string,
  fileName: string,
  content: string,
): void {
  fs.mkdirSync(outputDir, {
    recursive: true,
  });

  fs.writeFileSync(
    path.join(outputDir, fileName),
    content,
    "utf8",
  );
}