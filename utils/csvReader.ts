import fs from "fs";
import { parse } from "csv-parse/sync";
import path from "path";

export function readCSV(filePath: string) {
  const fullPath = path.resolve(filePath);
  console.log("filenya nih", fullPath);

  const fileContent = fs.readFileSync(fullPath);

  const record = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });
  return record;
}
