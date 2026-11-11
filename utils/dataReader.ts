import path from "path";
import { readCSV } from "../utils/csvReader";
import { readExcel } from "../utils/excelReader";
import fs from "fs";

export function readData(filePath: string, sheetName?: string) {
  const ext = path.extname(filePath).toLocaleLowerCase();

  switch (ext) {
    case ".csv":
      console.log(".. im reading CSV");
      return readCSV(filePath);

    case ".xlsx":
      console.log(".. im reading Excel");
      return readExcel(filePath, sheetName || "Sheet1");

    case ".json":
      console.log(".. im reading Json");
      const JSONData = fs.readFileSync(filePath, "utf8");
      return JSON.parse(JSONData);

    default:
      throw new Error(`Unsupported file type: ${ext}`);
  }
}
