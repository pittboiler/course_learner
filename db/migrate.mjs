// Apply db/schema.sql (idempotent). Usage: node db/migrate.mjs
import fs from "fs";
import { sql } from "./db.js";

const schema = fs.readFileSync(new URL("./schema.sql", import.meta.url), "utf8")
  .replace(/--.*$/gm, "");
for (const stmt of schema.split(";").map((s) => s.trim()).filter(Boolean)) await sql.query(stmt);
console.log("schema applied");
