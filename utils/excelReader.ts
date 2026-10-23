import * as XLSX from "xlsx";
import path from "path";
import { log } from "console";

export type loginData = {
  Username: string;
  Password: string;
  expected: string;
  run: string;
};

export function readExcel(filePath: string, sheetName: string): loginData[] {
  const fullPath = path.resolve(filePath);
  const workbook = XLSX.readFile(fullPath);

  const sheet = workbook.Sheets[sheetName];

  const data = XLSX.utils.sheet_to_json(sheet);

  return data;
}
