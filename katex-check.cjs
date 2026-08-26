// Generic KaTeX expression checker: node katex-check.cjs <course-id> [<course-id>...]
// Renders every $...$ / $$...$$ span through KaTeX with throwOnError, pinpointing
// expressions the study app would fail to render. Supersedes the per-course
// katex-check-<course>.cjs one-offs.
const katex = require('katex');
require('katex/contrib/mhchem'); // required, or every \ce{} span silently "passes"
const fs = require('fs');
const path = require('path');

const ids = process.argv.slice(2);
if (!ids.length) { console.error('usage: node katex-check.cjs <course-id> [...]'); process.exit(2); }

let total = 0, errors = 0;
for (const id of ids) {
  const dir = path.join(__dirname, 'courses', id, 'lessons');
  if (!fs.existsSync(dir)) { console.error(`no lessons dir for "${id}"`); process.exit(2); }
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md')).sort();
  // the course reference card counts too - it is rendered by the same pipeline
  const targets = files.map(f => [f, path.join(dir, f)]);
  const card = path.join(__dirname, 'courses', id, 'reference.md');
  if (fs.existsSync(card)) targets.push(['reference.md', card]);

  for (const [label, full] of targets) {
    let src = fs.readFileSync(full, 'utf8');
    src = src.replace(/```[\s\S]*?```/g, ' ');
    src = src.replace(/\\\$/g, ' ');
    const exprs = [];
    src = src.replace(/\$\$([\s\S]+?)\$\$/g, (m, b) => { exprs.push({ b, d: true }); return ' '; });
    src = src.replace(/\$([^\$\n]+?)\$/g, (m, b) => { exprs.push({ b, d: false }); return ' '; });
    for (const { b, d } of exprs) {
      total++;
      try { katex.renderToString(b, { displayMode: d, throwOnError: true, strict: false }); }
      catch (e) { errors++; console.log(`\n[${id}/${label}] ${b.slice(0, 160)}\n  ${e.message.split('\n')[0]}`); }
    }
  }
}
console.log(`\n=== ${total} expressions, ${errors} error(s) ===`);
process.exit(errors ? 1 : 0);
