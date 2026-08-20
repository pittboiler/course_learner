/* Lesson + reference-card linter. Run from the project root:

     node lint-lessons.cjs [dir]        (default: courses/)

   Four checks, all of which have caught real bugs in this library:

   1. STRAY $   — a delimiter that escaped its math span. Runs the REAL pipeline:
                  stashMath() is lifted straight out of public/app.js, so this
                  can't drift from what the app does. Anything still holding a
                  '$' after marked has run will be paired with the next '$' by
                  KaTeX auto-render, swallowing the prose in between as math.
   2. LINKS     — every relative .md link resolves to a file on disk.
   3. ANCHORS   — every reference.md#anchor points at a real heading on that card.
   4. COVERAGE  — for a course that has a reference card, every one of its lesson
                  files is cited somewhere on the card. This is what enforces
                  "a card covers every lesson" without lessons declaring terms.
   5. KATEX     — every formula compiles. Catches \* in superscripts, unescaped %
                  inside math, mathtools envs KaTeX doesn't have (psmallmatrix),
                  and nested $ inside \text{}. */
const { marked } = require('marked');
const katex = require('katex');
require('katex/contrib/mhchem'); // \ce{...} in the chemistry courses — must load AFTER katex
const fs = require('fs'), path = require('path');

const appSrc = fs.readFileSync(path.join(__dirname, 'public/app.js'), 'utf8');
const from = appSrc.indexOf('const escHtml'), to = appSrc.indexOf('const esc = (s) =>');
if (from < 0 || to < 0) throw new Error('could not locate the math helpers in public/app.js');
const { stashMath } = new Function('marked', appSrc.slice(from, to) + ';return { stashMath };')(marked);

const ROOT = process.argv[2] || 'courses';
const files = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    if (f === 'node_modules' || f.startsWith('.')) continue;
    const p = path.join(d, f);
    fs.statSync(p).isDirectory() ? walk(p) : f.endsWith('.md') && files.push(p);
  }
})(ROOT);

const rel = (p) => path.relative('.', p);
const problems = { 'stray $': [], links: [], anchors: [], coverage: [], katex: [] };

/* ---- 1. stray $ (per blank-line block, so multi-line displays stay intact) ---- */
for (const file of files) {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  let block = [], start = 0, inFence = false;
  const flush = () => {
    const src = block.join('\n');
    block = [];
    if (!src.includes('$')) return;
    // KaTeX auto-render skips <code>/<pre>, so a $ in a code span is inert.
    const html = marked.parse(stashMath(src).out).replace(/<(code|pre)\b[\s\S]*?<\/\1>/g, '');
    if (!html.includes('$')) return;
    const text = html.replace(/<[^>]+>/g, '').replace(/\d+/g, ' [math] ').replace(/\s+/g, ' ').trim();
    const i = text.indexOf('$');
    problems['stray $'].push(`${rel(file)}:${start + 1}\n    ...${text.slice(Math.max(0, i - 60), i + 130)}...`);
  };
  lines.forEach((line, n) => {
    if (/^\s*```/.test(line)) inFence = !inFence;
    if (!inFence && !line.trim()) { flush(); start = n + 1; return; }
    if (!block.length) start = n;
    block.push(line);
  });
  flush();
}

/* ---- 2 + 3. links and reference anchors ---- */
const slugify = (s) => s.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
const anchorCache = new Map(); // card path -> Set of slugs
function cardAnchors(cardPath) {
  if (!anchorCache.has(cardPath)) {
    const set = new Set();
    if (fs.existsSync(cardPath))
      for (const m of fs.readFileSync(cardPath, 'utf8').matchAll(/^#{2,3}\s+(.+?)\s*$/gm))
        set.add(slugify(m[1].replace(/[*_`$\\]/g, '')));
    anchorCache.set(cardPath, set);
  }
  return anchorCache.get(cardPath);
}

for (const file of files) {
  if (file.split(path.sep).includes('templates')) continue; // scaffolds, full of {placeholders}
  // Links inside code fences / code spans are examples, not navigation.
  const src = fs.readFileSync(file, 'utf8')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`\n]*`/g, '');
  const dir = path.dirname(file);
  for (const m of src.matchAll(/\]\(([^)\s]+\.md)(#[^)\s]*)?\)/g)) {
    const [, target, hash] = m;
    // #/lesson/... and #/course/... are in-app SPA routes, not files on disk.
    if (/^(https?:|mailto:|#)/.test(target)) continue;
    const abs = path.resolve(dir, target);
    if (!fs.existsSync(abs)) { problems.links.push(`${rel(file)} → ${target}`); continue; }
    if (hash && path.basename(abs) === 'reference.md') {
      const slug = hash.slice(1);
      if (!cardAnchors(abs).has(slug))
        problems.anchors.push(`${rel(file)} → ${target}${hash}  (no such heading on that card)`);
    }
  }
}

/* ---- 4. coverage: a card must cite every lesson in its course ---- */
// Accepts either the whole courses/ tree or a single course directory, so a
// per-course run (node lint-lessons.cjs courses/calc-refresher) still checks coverage.
const courseDirs = fs.existsSync(path.join(ROOT, 'lessons'))
  ? [ROOT]
  : fs.existsSync(ROOT)
  ? fs.readdirSync(ROOT).map((id) => path.join(ROOT, id))
  : [];
{
  for (const dir of courseDirs) {
    if (!fs.statSync(dir).isDirectory()) continue;
    const card = path.join(dir, 'reference.md');
    const lessonsDir = path.join(dir, 'lessons');
    if (!fs.existsSync(card) || !fs.existsSync(lessonsDir)) continue;
    const cardSrc = fs.readFileSync(card, 'utf8');
    const missing = fs.readdirSync(lessonsDir).filter((f) => f.endsWith('.md') && !cardSrc.includes(f));
    if (missing.length)
      problems.coverage.push(`${rel(card)} cites no entry from: ${missing.join(', ')}`);
  }
}

/* ---- 5. every formula compiles ---- */
for (const file of files) {
  if (file.split(path.sep).includes('templates')) continue;
  for (const raw of stashMath(fs.readFileSync(file, 'utf8')).stash) {
    const m = /^\$\$([\s\S]+)\$\$$/.exec(raw) || /^\$([\s\S]+)\$$/.exec(raw);
    if (!m) continue; // the \$ literal placeholder, not a formula
    const body = m[1].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    try {
      katex.renderToString(body, { displayMode: raw.startsWith('$$'), throwOnError: true, strict: false });
    } catch (e) {
      problems.katex.push(`${rel(file)}\n    ${body.slice(0, 110)}\n    ${e.message.split('\n')[0]}`);
    }
  }
}

let total = 0;
for (const [name, list] of Object.entries(problems)) {
  total += list.length;
  if (!list.length) continue;
  console.log(`\n--- ${name} (${list.length}) ---`);
  for (const p of list) console.log(p);
}
console.log(`\n=== ${total} problem(s) across ${files.length} markdown files ===`);
process.exit(total ? 1 : 0);
