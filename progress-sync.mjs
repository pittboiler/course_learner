/* Bridge between the database (source of truth) and progress/progress.json (what
   the skills read and edit).
     node progress-sync.mjs pull   DB -> progress.json   (run BEFORE reading progress)
     node progress-sync.mjs push   progress.json -> DB   (run AFTER editing progress)
   push makes the file's review_queue authoritative, upserts completions, and adds
   log entries the DB doesn't have yet — so always pull first, edit, then push. */
import fs from "fs";
import { getProgress, mergeProgress } from "./db/db.js";

const FILE = new URL("./progress/progress.json", import.meta.url);
const cmd = process.argv[2];

if (cmd === "pull") {
  const p = await getProgress();
  fs.writeFileSync(FILE, JSON.stringify(p, null, 2) + "\n");
  const lessons = Object.values(p.courses).reduce((n, c) => n + Object.keys(c.lessons).length, 0);
  console.log(`pulled: ${Object.keys(p.courses).length} courses, ${lessons} completed lessons, ` +
    `${p.review_queue.length} review items, ${p.log.length} log entries`);
} else if (cmd === "push") {
  const p = JSON.parse(fs.readFileSync(FILE, "utf8"));
  const n = await mergeProgress(p, { replaceQueue: true });
  console.log(`pushed (${n} statements)`);
} else {
  console.error("usage: node progress-sync.mjs pull|push");
  process.exit(1);
}
