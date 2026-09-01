// scan-figures.cjs <course-id> [<course-id> ...]
//
// Three figure checks that lint-lessons.cjs and katex-check.cjs both miss:
//   1. Image alt text containing an unbalanced [ or ] — CommonMark then emits plain
//      text with no <img>, so the figure silently vanishes. Math-heavy alt text
//      (interval notation, matrix literals) hits this constantly.
//   2. SVG colours outside the theme-safe palette. The app renders on a dark card,
//      so #000/#fff/black/white/currentColor are all wrong.
//   3. SVG <text> that runs past the viewBox and is silently clipped. Measured with
//      Helvetica AFM advance widths, so no browser is needed. Coordinates inside a
//      transformed <g> cannot be resolved here, so files containing one are reported
//      as CHECK (eyeball it) rather than counted as a problem.
const fs = require('fs'), path = require('path');
const { marked } = require('marked');

const courses = process.argv.slice(2);
if (!courses.length) { console.error('usage: node scan-figures.cjs <course-id> [...]'); process.exit(2); }

// --- Helvetica advance widths /1000 ---
const W = {' ':278,'!':278,'"':355,'#':556,'$':556,'%':889,'&':667,"'":191,'(':333,')':333,'*':389,'+':584,',':278,'-':333,'.':278,'/':278,':':278,';':278,'<':584,'=':584,'>':584,'?':556,'@':1015,'[':278,']':278,'^':469,'_':556,'`':333,'{':334,'|':260,'}':334,'~':584};
for (let c = 48; c <= 57; c++) W[String.fromCharCode(c)] = 556;
Object.assign(W, {A:667,B:667,C:722,D:722,E:667,F:611,G:778,H:722,I:278,J:500,K:667,L:556,M:833,N:722,O:778,P:667,Q:778,R:722,S:667,T:611,U:722,V:667,W:944,X:667,Y:667,Z:611});
Object.assign(W, {a:556,b:556,c:500,d:556,e:556,f:278,g:556,h:556,i:222,j:222,k:500,l:222,m:833,n:556,o:556,p:556,q:556,r:333,s:500,t:278,u:556,v:500,w:722,x:500,y:500,z:500});

const decode = s => s
  .replace(/&#(\d+);/g, (m, d) => String.fromCharCode(+d))
  .replace(/&#x([0-9a-f]+);/gi, (m, d) => String.fromCharCode(parseInt(d, 16)))
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const textWidth = (t, size) => [...t].reduce((w, ch) => w + (W[ch] !== undefined ? W[ch] : 600), 0) / 1000 * size;

// font-size in effect at a given offset: nearest enclosing <g font-size="...">, else the default
function sizeAt(s, at, defSize) {
  let size = defSize;
  const stack = [];
  const re = /<g\b([^>]*)>|<\/g>/g;
  let m;
  while ((m = re.exec(s)) && m.index < at) {
    if (m[0] === '</g>') stack.pop();
    else stack.push((m[1].match(/font-size="([\d.]+)"/) || [])[1]);
  }
  for (let i = stack.length - 1; i >= 0; i--) if (stack[i] !== undefined) { size = parseFloat(stack[i]); break; }
  return size;
}

let total = 0;
for (const course of courses) {
  let bad = 0;
  const dir = `courses/${course}/lessons`;
  if (!fs.existsSync(dir)) { console.log(`=== ${course}: no lessons directory ===`); continue; }

  // 1. figures that fail to render
  for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.md'))) {
    const src = fs.readFileSync(path.join(dir, f), 'utf8');
    const refs = (src.match(/\(assets\/[^)]+\)/g) || []).length;
    const imgs = (marked.parse(src).match(/<img /g) || []).length;
    if (imgs !== refs) { console.log(`IMG ${course}/${f}: ${refs} asset refs but ${imgs} <img> — check alt-text brackets`); bad++; }
  }

  const adir = path.join(dir, 'assets');
  if (!fs.existsSync(adir)) { console.log(bad ? `=== ${course}: ${bad} problem(s) ===` : `=== ${course}: figures clean ===`); total += bad; continue; }

  for (const f of fs.readdirSync(adir).filter(x => x.endsWith('.svg'))) {
    const s = fs.readFileSync(path.join(adir, f), 'utf8');

    const vb = s.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
    if (!vb) continue;
    const VW = parseFloat(vb[1]), VH = parseFloat(vb[2]);

    // 2. palette. Two acceptable styles: the current theme-safe one (grey/blue/coral,
    //    no background), and the legacy one (dark ink over a full-canvas light rect).
    //    The bug is dark ink with no such rect — it renders invisibly on the dark card.
    const bgRect = [...s.matchAll(/<rect\b([^>]*)>/g)].some(r => {
      const a = r[1];
      const w = parseFloat((a.match(/\bwidth="([\d.]+)"/) || [])[1]);
      const h = parseFloat((a.match(/\bheight="([\d.]+)"/) || [])[1]);
      const x = parseFloat((a.match(/\bx="(-?[\d.]+)"/) || [0, 0])[1]);
      const y = parseFloat((a.match(/\by="(-?[\d.]+)"/) || [0, 0])[1]);
      if (!(w >= VW - 1 && h >= VH - 1 && x <= 0.5 && y <= 0.5)) return false;
      const f = (a.match(/fill="#([0-9a-f]{3}|[0-9a-f]{6})"/i) || [])[1];
      if (!f) return /fill="white"/i.test(a);
      const hex = f.length === 3 ? [...f].map(c => c + c).join('') : f;
      const [R, G, B] = [0, 2, 4].map(i => parseInt(hex.slice(i, i + 2), 16));
      return (0.2126 * R + 0.7152 * G + 0.0722 * B) > 190;   // any light canvas, not just pure white
    });
    const darkInk = s.match(/#000{1,3}\b|#111|#222|#333|"black"|:black/gi);
    if (darkInk && !bgRect) { console.log(`DARK-ON-DARK ${course}/${f}: ${[...new Set(darkInk)].join(', ')} with no full-canvas light rect`); bad++; }
    if (/currentColor/i.test(s)) { console.log(`PALETTE ${course}/${f}: currentColor does not resolve in the app`); bad++; }

    // 3. clipped text
    const defSize = parseFloat((s.match(/font-size="([\d.]+)"/) || [0, 13])[1]);
    const grouped = /<g[^>]*transform=/i.test(s);
    for (const m of s.matchAll(/<text([^>]*)>([\s\S]*?)<\/text>/g)) {
      const attrs = m[1], txt = decode(m[2].replace(/<[^>]*>/g, ''));   // strip nested tspans
      if (/transform=/.test(attrs)) continue;   // rotated axis labels: geometry check does not apply
      const x = parseFloat((attrs.match(/\bx="(-?[\d.]+)"/) || [0, 0])[1]);
      const y = parseFloat((attrs.match(/\by="(-?[\d.]+)"/) || [0, 0])[1]);
      const size = parseFloat((attrs.match(/font-size="([\d.]+)"/) || [0, sizeAt(s, m.index, defSize)])[1]);
      const anchor = (attrs.match(/text-anchor="(\w+)"/) || [0, 'start'])[1];
      const w = textWidth(txt, size);
      let x0 = x, x1 = x + w;
      if (anchor === 'middle') { x0 = x - w / 2; x1 = x + w / 2; }
      if (anchor === 'end') { x0 = x - w; x1 = x; }
      if (x1 > VW - 2 || x0 < 0 || y > VH - 1 || y < 8) {
        console.log(`${grouped ? 'CHECK  ' : 'CLIPPED'} ${course}/${f}: x ${x0.toFixed(0)}..${x1.toFixed(0)}, y ${y} (viewBox ${VW}x${VH}) "${txt.slice(0, 50)}"`);
        if (!grouped) bad++;
      }
    }
  }
  console.log(bad ? `=== ${course}: ${bad} figure problem(s) ===` : `=== ${course}: figures clean ===`);
  total += bad;
}
process.exit(total ? 1 : 0);
