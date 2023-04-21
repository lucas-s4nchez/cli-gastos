import * as fs from "node:fs";

const path = "./src/db/db.json";

export const saveDB = (data) => {
  fs.writeFileSync(path, data);
};

export const loadDB = () => {
  if (!fs.existsSync(path)) return [];

  const info = fs.readFileSync(path, { encoding: "utf-8" });
  const data = JSON.parse(info);
  return data;
};
