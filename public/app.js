const $app = document.getElementById("app");
let STATE = null;

// Keep marked's hands off math: without this, markdown escape rules eat
// backslashes inside $...$ / $$...$$ (\, \$ \{ ...) before KaTeX runs.
const escHtml = (s) =>
  s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
marked.use({
  extensions: [
    {
      name: "mathBlock",
      level: "block",
      start(src) { const i = src.indexOf("$$"); return i < 0 ? undefined : i; },
      tokenizer(src) {
        const m = /^\$\$([\s\S]+?)\$\$/.exec(src);
        if (m) return { type: "mathBlock", raw: m[0], text: m[1] };
      },
      renderer(t) { return `<p>$$${escHtml(t.text)}$$</p>\n`; },
    },
    {
      name: "mathInline",
      level: "inline",
      start(src) { const i = src.indexOf("$"); return i < 0 ? undefined : i; },
      tokenizer(src) {
        if (src.startsWith("$$")) return; // block form handles these
        const m = /^\$([^$\n]+?)\$/.exec(src);
        if (m) return { type: "mathInline", raw: m[0], text: m[1] };
      },
      renderer(t) { return `$${escHtml(t.text)}$`; },
    },
  ],
});

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const TIER_NAMES = { 0: "Tier 0 · Refreshers", 1: "Tier 1 · Bridges", 2: "Tier 2 · Destinations" };

async function loadState() {
  STATE = await (await fetch("/api/state")).json();
}

function courseInfo(id) {
  return STATE.roadmap.courses.find((c) => c.id === id);
}
function doneCount(id) {
  return Object.keys(STATE.progress.courses[id]?.lessons || {}).length;
}
function pctDone(id) {
  const info = courseInfo(id);
  const total = info ? info.lessons_estimate : 1;
  return Math.min(100, Math.round((100 * doneCount(id)) / total));
}
function courseStatus(c) {
  if (doneCount(c.id) > 0) return "active";
  if (STATE.courses[c.id]?.hasSyllabus) return "ready";
  return c.prereqs.every((p) => pctDone(p) >= 60) ? "ready" : "locked";
}
function streakDays() {
  const days = [...new Set(STATE.progress.log.map((e) => e.date))].sort().reverse();
  if (!days.length) return 0;
  let streak = 0;
  let cursor = new Date(STATE.today + "T00:00:00");
  for (const d of days) {
    const diff = Math.round((cursor - new Date(d + "T00:00:00")) / 86400000);
    if (diff <= 1) { streak++; cursor = new Date(d + "T00:00:00"); }
    else break;
  }
  return streak;
}

/* ---------- views ---------- */

function renderDashboard() {
  const active = STATE.roadmap.courses.filter((c) => doneCount(c.id) > 0);
  const due = STATE.progress.review_queue.filter((r) => r.due <= STATE.today).length;
  const week = STATE.progress.log.filter(
    (e) => (new Date(STATE.today) - new Date(e.date)) / 86400000 < 7
  ).length;

  let next = "Open the Library and start a course.";
  if (due > 0) next = `You have ${due} review item${due > 1 ? "s" : ""} due — <a href="#/review">start a review</a>.`;
  else if (active.length) {
    const c = active[0];
    next = `Continue ${c.title} — lesson ${doneCount(c.id) + 1} of ~${c.lessons_estimate}.`;
  }

  $app.innerHTML = `
    <h1>Dashboard</h1>
    <p class="muted">${next}</p>
    <div class="stat-row">
      <div class="stat"><div class="num">${streakDays()}</div><div class="lbl">day streak</div></div>
      <div class="stat"><div class="num">${week}</div><div class="lbl">sessions this week</div></div>
      <div class="stat"><div class="num">${due}</div><div class="lbl">reviews due</div></div>
      <div class="stat"><div class="num">${active.length}</div><div class="lbl">active courses</div></div>
    </div>
    <h2>Active courses</h2>
    ${
      active.length
        ? `<div class="grid">${active.map(cardHTML).join("")}</div>`
        : `<p class="muted">No active courses yet — pick one in the <a href="#/library">Library</a>.</p>`
    }
  `;
}

function cardHTML(c) {
  const status = courseStatus(c);
  const done = doneCount(c.id);
  const badge = { active: "In progress", ready: "Ready", locked: "Locked" }[status];
  return `
    <a class="card ${status === "locked" ? "locked" : ""}" href="#/course/${c.id}">
      <div class="title">${esc(c.title)}</div>
      <span class="badge ${status}">${badge}</span>
      <div class="blurb">${esc(c.blurb)}</div>
      <div class="muted" style="font-size:12px">${done} / ~${c.lessons_estimate} lessons</div>
      <div class="bar"><div style="width:${pctDone(c.id)}%"></div></div>
    </a>`;
}

function renderLibrary() {
  const tiers = [0, 1, 2];
  $app.innerHTML = `
    <h1>Library</h1>
    <p class="muted">Courses unlock when each prerequisite is ~60% complete. To stand one up, run <code>/new-course &lt;id&gt;</code> in Claude Code.</p>
    ${tiers
      .map((t) => {
        const cs = STATE.roadmap.courses.filter((c) => c.tier === t);
        return `<h2>${TIER_NAMES[t]}</h2><div class="grid">${cs.map(cardHTML).join("")}</div>`;
      })
      .join("")}
  `;
}

function fixAssetPaths(html, courseId) {
  html = html.replaceAll('src="assets/', `src="/content/${courseId}/lessons/assets/`);
  // Rewrite relative markdown links to SPA hash routes so they navigate (marked leaves
  // relative hrefs untouched, and a bare "01-02-foo.md" would otherwise 404 in the SPA).
  return html.replace(/href="([^"]+)"/g, (whole, href) => {
    if (/^(#|https?:|mailto:)/.test(href)) return whole; // already a route / external
    const path = href.split("#")[0];
    let m;
    if ((m = path.match(/^(?:\.\.\/)+([a-z0-9-]+)\/lessons\/(.+\.md)$/)))
      return `href="#/lesson/${m[1]}/${m[2]}"`; // cross-course lesson
    if ((m = path.match(/^(?:\.\.\/)+([a-z0-9-]+)\/syllabus\.md$/)))
      return `href="#/course/${m[1]}"`; // cross-course syllabus
    if (/^\.\.\/syllabus\.md$/.test(path)) return `href="#/course/${courseId}"`; // this course's syllabus
    if (/^\d\d-\d\d-[a-z0-9-]+\.md$/.test(path))
      return `href="#/lesson/${courseId}/${path}"`; // bare sibling lesson
    return whole; // leave anything else (e.g. assets/…) untouched
  });
}

function renderMath(el) {
  if (window.renderMathInElement) {
    renderMathInElement(el, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    });
  }
}

async function renderCourse(id) {
  const info = courseInfo(id);
  const created = STATE.courses[id];
  if (!info) return ($app.innerHTML = `<p>Unknown course.</p>`);

  let syllabusHTML = `<p class="muted">Not started yet — run <code>/new-course ${id}</code> in Claude Code to generate the syllabus.</p>`;
  if (created?.hasSyllabus) {
    const md = await (await fetch(`/content/${id}/syllabus.md`)).text();
    syllabusHTML = `<div class="md">${fixAssetPaths(marked.parse(md), id)}</div>`;
  }

  const lessons = created?.lessons || [];
  const completed = STATE.progress.courses[id]?.lessons || {};
  const lessonItems = lessons
    .map((f) => {
      const lessonId = f.slice(0, 5); // "01-01"
      const done = !!completed[lessonId];
      const title = f.replace(/\.md$/, "").slice(6).replaceAll("-", " ");
      return `<li><span class="check">${done ? "✅" : "⬜️"}</span>
        <a href="#/lesson/${id}/${encodeURIComponent(f)}">${lessonId} · ${esc(title)}</a></li>`;
    })
    .join("");

  $app.innerHTML = `
    <div class="crumbs"><a href="#/library">Library</a> ›</div>
    <h1>${esc(info.title)}</h1>
    <div class="bar" style="max-width:340px"><div style="width:${pctDone(id)}%"></div></div>
    ${lessons.length ? `<h2>Lessons</h2><ul class="lesson-list">${lessonItems}</ul>` : ""}
    ${quizSectionHTML(id)}
    <h2>Syllabus</h2>
    ${syllabusHTML}
  `;
  renderMath($app);
}

async function renderLesson(courseId, file) {
  const md = await (await fetch(`/content/${courseId}/lessons/${file}`)).text();
  const lessonId = file.slice(0, 5);
  const done = STATE.progress.courses[courseId]?.lessons?.[lessonId];

  $app.innerHTML = `
    <div class="crumbs"><a href="#/library">Library</a> › <a href="#/course/${courseId}">${esc(
      courseInfo(courseId)?.title || courseId
    )}</a> ›</div>
    <div class="toolbar"><button id="print-lesson" title="Print or save as PDF">🖨 Print / PDF</button></div>
    <div class="md">${fixAssetPaths(marked.parse(md), courseId)}</div>
    <div class="complete-box ${done ? "done" : ""}" id="complete-box">
      ${
        done
          ? `<span>✅ Completed ${done.completed} — confidence ${done.self_rating}/5</span>`
          : `<span><strong>Done with this lesson?</strong> Rate your confidence:</span>
             <select id="rating">
               <option value="1">1 — lost</option><option value="2">2 — shaky</option>
               <option value="3" selected>3 — okay</option><option value="4">4 — solid</option>
               <option value="5">5 — nailed it</option>
             </select>
             <button class="primary" id="mark-done">Mark complete</button>`
      }
    </div>
  `;
  renderMath($app);

  document.getElementById("print-lesson").onclick = () => window.print();

  // A grader bound to one problem label ("P1"/"P2"/"P3"/"Flashback").
  const gradeOne = (problem) => async (answer, fb) => {
    const result = await postJSON("/api/grade", { course: courseId, lesson: file, problem, ...answer });
    fb.innerHTML = feedbackHTML(result);
    renderMath(fb);
  };

  // Put a collapsible writing workspace directly under each problem so the
  // problem stays in view while you solve it. Fall back to one selector-based
  // box if the problems can't be located.
  const mdEl = $app.querySelector(".md");
  if (attachProblemWorkspaces(mdEl, gradeOne) === 0) {
    const box = document.createElement("div");
    box.className = "grade-box";
    box.innerHTML =
      `<div><strong>Get a problem graded</strong> <span class="muted">— by Claude, including photos of handwritten work</span></div>
      <label>Problem: <select id="grade-problem"><option>P1</option><option>P2</option><option>P3</option><option>Flashback</option></select></label>
      ${answerFormHTML("grade", "Grade it")}`;
    $app.appendChild(box);
    wireAnswerForm("grade", (answer, fb) =>
      gradeOne(document.getElementById("grade-problem").value)(answer, fb)
    );
  }

  const btn = document.getElementById("mark-done");
  if (btn)
    btn.onclick = async () => {
      const self_rating = Number(document.getElementById("rating").value);
      const r = await fetch("/api/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ course: courseId, lesson: lessonId, self_rating }),
      });
      const { review_due } = await r.json();
      await loadState();
      document.getElementById("complete-box").className = "complete-box done";
      document.getElementById("complete-box").innerHTML =
        `<span>✅ Recorded — a review of this material is queued for ${review_due}.</span>`;
    };
}

/* ---------- Claude-graded practice ---------- */

// iPad photos are often HEIC and huge — decode in-browser, scale, re-encode as JPEG
async function fileToJpegBase64(file, maxDim = 1568) {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise((ok, err) => {
      const i = new Image();
      i.onload = () => ok(i);
      i.onerror = err;
      i.src = url;
    });
    const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(img.width * scale);
    canvas.height = Math.round(img.height * scale);
    canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.85).split(",")[1];
  } finally {
    URL.revokeObjectURL(url);
  }
}

const VERDICT_LABEL = {
  correct: "✅ Correct",
  partial: "🟡 Partially there",
  incorrect: "❌ Not yet",
};

/* Apple Pencil handwriting pad: tall "paper" pages you can add to (roomy for
   proofs). Finger scrolls (touch-action: pan-y); pen/mouse draw. Each written
   page exports as its own JPEG so multi-page work stays legible for grading. */
const INK_PAGE_H = 640; // CSS px per page
const INK_COLOR = "#111827"; // dark ink on a white page, independent of app theme

function createInkPad(mount) {
  const pages = []; // { canvas, ctx, strokes:[{pts:[{x,y,w}]}] }
  const order = []; // pages in stroke order, for global undo

  const wrap = document.createElement("div");
  wrap.className = "inkpad";
  wrap.innerHTML = `
    <div class="ink-toolbar">
      <span class="ink-hint">✍️ Write your answer with Apple Pencil — add pages for long proofs</span>
      <span class="ink-tools">
        <button type="button" data-act="undo">↶ Undo</button>
        <button type="button" data-act="clear">🗑 Clear</button>
        <button type="button" data-act="add">➕ Add page</button>
      </span>
    </div>
    <div class="ink-pages"></div>`;
  mount.replaceWith(wrap);
  const pagesEl = wrap.querySelector(".ink-pages");

  const dpr = () => Math.min(window.devicePixelRatio || 1, 2.5);

  function sizePage(page) {
    const r = dpr();
    const w = pagesEl.clientWidth || 800;
    page.canvas.width = Math.round(w * r);
    page.canvas.height = Math.round(INK_PAGE_H * r);
    page.canvas.style.height = INK_PAGE_H + "px";
    const ctx = page.canvas.getContext("2d");
    ctx.setTransform(r, 0, 0, r, 0, 0);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    page.ctx = ctx;
    redraw(page);
  }

  function redraw(page) {
    const ctx = page.ctx;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = "#ffffff"; // white paper → clean JPEG background
    ctx.fillRect(0, 0, page.canvas.width, page.canvas.height);
    ctx.restore();
    ctx.strokeStyle = INK_COLOR;
    ctx.fillStyle = INK_COLOR;
    for (const s of page.strokes) {
      if (s.pts.length < 2) {
        const p = s.pts[0];
        ctx.beginPath();
        ctx.arc(p.x, p.y, (p.w || 2) / 2, 0, 2 * Math.PI);
        ctx.fill();
        continue;
      }
      for (let i = 1; i < s.pts.length; i++) {
        ctx.beginPath();
        ctx.lineWidth = s.pts[i].w;
        ctx.moveTo(s.pts[i - 1].x, s.pts[i - 1].y);
        ctx.lineTo(s.pts[i].x, s.pts[i].y);
        ctx.stroke();
      }
    }
  }

  function attachPointer(page) {
    const c = page.canvas;
    let cur = null;
    const at = (e) => {
      const r = c.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const lineW = (e) =>
      e.pointerType === "pen" ? 0.9 + (e.pressure > 0 ? e.pressure : 0.4) * 3.1 : 2.2;
    c.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "pen" && e.pointerType !== "mouse") return; // finger = scroll
      e.preventDefault();
      try { c.setPointerCapture(e.pointerId); } catch {}
      try { window.getSelection()?.removeAllRanges(); } catch {} // drop any stray text highlight
      const { x, y } = at(e);
      const w = lineW(e);
      cur = { pts: [{ x, y, w }] };
      page.strokes.push(cur);
      order.push(page);
      const ctx = page.ctx;
      ctx.strokeStyle = INK_COLOR;
      ctx.fillStyle = INK_COLOR;
      ctx.beginPath();
      ctx.arc(x, y, w / 2, 0, 2 * Math.PI);
      ctx.fill();
    });
    c.addEventListener("pointermove", (e) => {
      if (!cur) return;
      e.preventDefault();
      const { x, y } = at(e);
      const w = lineW(e);
      const prev = cur.pts[cur.pts.length - 1];
      cur.pts.push({ x, y, w });
      const ctx = page.ctx;
      ctx.strokeStyle = INK_COLOR;
      ctx.lineWidth = w;
      ctx.beginPath();
      ctx.moveTo(prev.x, prev.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    });
    const end = () => (cur = null);
    c.addEventListener("pointerup", end);
    c.addEventListener("pointercancel", end);
    c.addEventListener("selectstart", (e) => e.preventDefault()); // no highlight from pen contact
  }

  function addPage() {
    const canvas = document.createElement("canvas");
    canvas.className = "ink-canvas";
    const page = { canvas, ctx: null, strokes: [] };
    pagesEl.appendChild(canvas);
    sizePage(page);
    attachPointer(page);
    pages.push(page);
    return page;
  }

  wrap.querySelector(".ink-toolbar").addEventListener("click", (e) => {
    const act = e.target.closest("button")?.dataset.act;
    if (act === "undo") {
      const page = order.pop();
      if (page) {
        page.strokes.pop();
        redraw(page);
      }
    } else if (act === "clear") {
      pages.forEach((p) => {
        p.strokes.length = 0;
        redraw(p);
      });
      order.length = 0;
    } else if (act === "add") {
      addPage().canvas.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  });

  // Rebuild backing stores on orientation/resize; strokes are in CSS coords.
  let rw;
  const onResize = () => {
    if (!document.body.contains(wrap)) return window.removeEventListener("resize", onResize);
    clearTimeout(rw);
    rw = setTimeout(() => pages.forEach(sizePage), 150);
  };
  window.addEventListener("resize", onResize);

  addPage();

  return {
    hasInk: () => pages.some((p) => p.strokes.length),
    exportPages: () => pages.filter((p) => p.strokes.length).map((p) => canvasToJpegBase64(p.canvas)),
  };
}

function canvasToJpegBase64(canvas, maxDim = 1500) {
  let src = canvas;
  const big = Math.max(canvas.width, canvas.height);
  if (big > maxDim) {
    const s = maxDim / big;
    const t = document.createElement("canvas");
    t.width = Math.round(canvas.width * s);
    t.height = Math.round(canvas.height * s);
    const ctx = t.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, t.width, t.height);
    ctx.drawImage(canvas, 0, 0, t.width, t.height);
    src = t;
  }
  return src.toDataURL("image/jpeg", 0.9).split(",")[1];
}

function answerFormHTML(idPrefix, buttonLabel) {
  return `
    <div class="ink-mount" id="${idPrefix}-ink"></div>
    <details class="type-answer">
      <summary>⌨︎ Type instead / add a note</summary>
      <textarea id="${idPrefix}-text" rows="3" placeholder="Type your answer or a note (optional)."></textarea>
    </details>
    <div class="answer-actions">
      <label class="file-label">📷 Photo
        <input type="file" id="${idPrefix}-photo" accept="image/*" hidden />
      </label>
      <span id="${idPrefix}-photo-name" class="muted"></span>
      <button class="primary" id="${idPrefix}-submit">${buttonLabel}</button>
    </div>
    <div id="${idPrefix}-feedback"></div>`;
}

function wireAnswerForm(idPrefix, onSubmit) {
  const pad = createInkPad(document.getElementById(`${idPrefix}-ink`));
  const photoInput = document.getElementById(`${idPrefix}-photo`);
  photoInput.onchange = () => {
    document.getElementById(`${idPrefix}-photo-name`).textContent = photoInput.files[0]?.name || "";
  };
  const btn = document.getElementById(`${idPrefix}-submit`);
  btn.onclick = async () => {
    const answer_text = (document.getElementById(`${idPrefix}-text`)?.value || "").trim();
    const file = photoInput.files[0];
    const images = pad.exportPages();
    const fb = document.getElementById(`${idPrefix}-feedback`);
    if (!answer_text && !images.length && !file) {
      fb.innerHTML = `<p class="muted">Write your answer on the pad, type it, or attach a photo first.</p>`;
      return;
    }
    btn.disabled = true;
    fb.innerHTML = `<p class="muted">Grading… (10–30s)</p>`;
    try {
      if (file) images.push(await fileToJpegBase64(file));
      await onSubmit({ answer_text, images }, fb);
    } catch (e) {
      fb.innerHTML = `<p class="error">${esc(e.message)}</p>`;
    } finally {
      btn.disabled = false;
    }
  };
}

/* Inject a collapsible Apple-Pencil workspace right under each problem (P1/P2/P3
   and the Flashback), each wired to grade that specific problem. Built lazily on
   first open so the canvas sizes to a visible width. Returns how many it added. */
function attachProblemWorkspaces(mdEl, gradeOne) {
  if (!mdEl) return 0;
  const spots = [];
  let inProblems = false;
  for (const el of [...mdEl.children]) {
    if (el.tagName === "H2") inProblems = /problem/i.test(el.textContent);
    if (inProblems && el.tagName === "P") {
      const strong = el.querySelector("strong");
      const m = strong && strong.textContent.trim().match(/^P(\d)\b/);
      if (m) spots.push({ label: "P" + m[1], after: el });
    }
  }
  // The Flashback retrieval problem: first paragraph under the Flashback heading.
  const fbH = [...mdEl.querySelectorAll("h2")].find((h) => /flashback/i.test(h.textContent));
  if (fbH) {
    let n = fbH.nextElementSibling;
    while (n && n.tagName !== "P") n = n.nextElementSibling;
    if (n) spots.push({ label: "Flashback", after: n });
  }
  for (const { label, after } of spots) {
    const d = document.createElement("details");
    d.className = "work-drawer";
    const idPrefix = "work-" + label;
    d.innerHTML = `<summary>✍︎ Work on ${label} — write, type, or snap a photo</summary><div class="work-body"></div>`;
    after.insertAdjacentElement("afterend", d);
    let built = false;
    d.addEventListener("toggle", () => {
      if (!d.open || built) return; // build once, when first shown (canvas needs a visible width)
      built = true;
      d.querySelector(".work-body").innerHTML = answerFormHTML(idPrefix, "Grade it");
      wireAnswerForm(idPrefix, gradeOne(label));
    });
  }
  return spots.length;
}

function feedbackHTML(result, extraMd = "") {
  return `
    <div class="feedback ${result.verdict}">
      <div class="verdict">${VERDICT_LABEL[result.verdict] || result.verdict}</div>
      <div class="md-inline">${marked.parse(result.feedback || "")}</div>
      ${extraMd ? `<details><summary>Full solution</summary><div class="md-inline">${marked.parse(extraMd)}</div></details>` : ""}
    </div>`;
}

async function postJSON(url, body) {
  const r = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await r.json();
  if (!r.ok) throw new Error(data.error || `Request failed (${r.status})`);
  return data;
}

/* Checkpoint quizzes: Tier 0 courses get 2 (mid + final), Tier 1/2 get 3 (thirds) */
function quizCheckpoints(courseId) {
  const m = STATE.courses[courseId]?.moduleCount || 0;
  if (m < 2) return [];
  const tier = courseInfo(courseId)?.tier ?? 0;
  const marks = tier === 0
    ? [Math.ceil(m / 2), m]
    : [Math.max(1, Math.round(m / 3)), Math.round((2 * m) / 3), m];
  return [...new Set(marks)].sort((a, b) => a - b);
}

function quizUnlocked(courseId, throughModule) {
  const created = STATE.courses[courseId];
  const completed = STATE.progress.courses[courseId]?.lessons || {};
  const covered = (created?.lessons || []).filter(
    (f) => parseInt(f.slice(0, 2), 10) <= throughModule
  );
  const hasCheckpointLessons = covered.some(
    (f) => parseInt(f.slice(0, 2), 10) === throughModule
  );
  return hasCheckpointLessons && covered.every((f) => !!completed[f.slice(0, 5)]);
}

function lastQuizAttempt(courseId, quizNum) {
  const entries = STATE.progress.log.filter(
    (e) => e.type === "quiz" && e.course === courseId && e.quiz === quizNum
  );
  if (!entries.length) return null;
  const lastDate = entries[entries.length - 1].date;
  const latest = entries.filter((e) => e.date === lastDate);
  return {
    date: lastDate,
    correct: latest.filter((e) => e.verdict === "correct").length,
    total: latest[latest.length - 1].of || latest.length,
  };
}

function quizSectionHTML(courseId) {
  const marks = quizCheckpoints(courseId);
  if (!marks.length) return "";
  const items = marks
    .map((m, i) => {
      const n = i + 1;
      const unlocked = quizUnlocked(courseId, m);
      const last = lastQuizAttempt(courseId, n);
      const label = m === marks[marks.length - 1] ? "Final quiz" : `Checkpoint quiz ${n}`;
      const scoreNote = last
        ? ` <span class="muted">· last attempt ${last.correct}/${last.total} on ${last.date}</span>`
        : "";
      return `<li>
        <span class="check">${unlocked ? "🧭" : "🔒"}</span>
        ${
          unlocked
            ? `<a href="#/quiz/${courseId}/${n}/${m}">${label}</a> <span class="muted">covers modules 1–${m}, generated fresh</span>${scoreNote}`
            : `<span class="muted">${label} — unlocks after completing module ${m}</span>`
        }
      </li>`;
    })
    .join("");
  return `<h2>Quizzes</h2><ul class="lesson-list">${items}</ul>`;
}

async function renderQuiz(courseId, quizNum, throughModule) {
  const title = courseInfo(courseId)?.title || courseId;
  $app.innerHTML = `
    <div class="crumbs"><a href="#/course/${courseId}">${esc(title)}</a> ›</div>
    <h1>Quiz ${quizNum}</h1>
    <p class="muted">5 fresh problems covering modules 1–${throughModule}, weighted toward anything you've been missing. Writing the quiz… (~30s)</p>`;
  let quiz;
  try {
    quiz = await postJSON("/api/quiz/start", {
      course: courseId,
      quiz: Number(quizNum),
      through_module: Number(throughModule),
    });
  } catch (e) {
    $app.innerHTML += `<p class="error">${esc(e.message)}</p>`;
    return;
  }
  let i = 0;
  let correct = 0;

  function showProblem() {
    if (i >= quiz.questions.length) {
      $app.innerHTML = `
        <div class="crumbs"><a href="#/course/${courseId}">${esc(title)}</a> ›</div>
        <h1>Quiz ${quizNum} — done</h1>
        <div class="feedback ${correct >= 4 ? "correct" : correct >= 3 ? "partial" : "incorrect"}">
          <div class="verdict">${correct} / ${quiz.questions.length} correct</div>
          <p>${
            correct >= 4
              ? "Dangerous. Keep moving."
              : "Missed problems have been queued for review — they'll come back tomorrow."
          }</p>
        </div>`;
      return;
    }
    $app.innerHTML = `
      <div class="crumbs"><a href="#/course/${courseId}">${esc(title)}</a> ›</div>
      <h1>Quiz ${quizNum}</h1>
      <p class="muted">Problem ${i + 1} of ${quiz.questions.length}</p>
      <div class="md">${marked.parse(quiz.questions[i])}</div>
      <div class="grade-box">${answerFormHTML("quiz", "Submit answer")}</div>`;
    renderMath($app);
    wireAnswerForm("quiz", async (answer, fb) => {
      const result = await postJSON("/api/quiz/grade", { id: quiz.id, index: i, ...answer });
      if (result.verdict === "correct") correct++;
      fb.innerHTML =
        feedbackHTML(result, result.solution) +
        `<button class="primary" id="quiz-next" style="margin-top:10px">${
          i + 1 < quiz.questions.length ? "Next problem →" : "Finish"
        }</button>`;
      renderMath(fb);
      document.getElementById("quiz-next").onclick = () => { i++; showProblem(); };
    });
  }
  showProblem();
}

function renderReview() {
  const due = STATE.progress.review_queue.filter((r) => r.due <= STATE.today);
  if (!due.length) {
    const next = STATE.progress.review_queue.map((r) => r.due).sort()[0];
    $app.innerHTML = `<h1>Review</h1>
      <p class="muted">Nothing due today. ${next ? `Next review: ${next}.` : "Complete lessons to build your review queue."}</p>`;
    return;
  }
  let i = 0;
  $app.innerHTML = `<h1>Review</h1><p class="muted">${due.length} item${due.length > 1 ? "s" : ""} due.</p><div id="review-area"></div>`;
  const area = document.getElementById("review-area");

  async function nextItem() {
    if (i >= due.length) {
      area.innerHTML = `<div class="feedback correct"><div class="verdict">🎉 Review session done</div></div>`;
      return;
    }
    const item = due[i];
    const label = `${courseInfo(item.course)?.title || item.course} · lesson ${item.lesson}`;
    area.innerHTML = `<p class="muted">Item ${i + 1} of ${due.length} — ${esc(label)}</p><p class="muted">Writing a fresh problem…</p>`;
    try {
      const { id, question } = await postJSON("/api/review/question", { item });
      area.innerHTML = `
        <p class="muted">Item ${i + 1} of ${due.length} — ${esc(label)}</p>
        <div class="md">${marked.parse(question)}</div>
        <div class="grade-box">${answerFormHTML("rev", "Submit answer")}</div>`;
      renderMath(area);
      wireAnswerForm("rev", async (answer, fb) => {
        const result = await postJSON("/api/review/grade", { id, ...answer });
        fb.innerHTML =
          feedbackHTML(result, result.solution) +
          `<button class="primary" id="rev-next" style="margin-top:10px">Next item →</button>`;
        renderMath(fb);
        document.getElementById("rev-next").onclick = async () => {
          await loadState();
          i++;
          nextItem();
        };
      });
    } catch (e) {
      area.innerHTML += `<p class="error">${esc(e.message)}</p>`;
    }
  }
  nextItem();
}

/* ---------- router ---------- */

async function route() {
  await loadState();
  const hash = location.hash || "#/";
  const parts = hash.slice(2).split("/").filter(Boolean);
  if (parts.length === 0) return renderDashboard();
  if (parts[0] === "library") return renderLibrary();
  if (parts[0] === "review") return renderReview();
  if (parts[0] === "quiz" && parts[3]) return renderQuiz(parts[1], parts[2], parts[3]);
  if (parts[0] === "course" && parts[1]) return renderCourse(parts[1]);
  if (parts[0] === "lesson" && parts[1] && parts[2])
    return renderLesson(parts[1], decodeURIComponent(parts[2]));
  renderDashboard();
}

// Solutions live in <details> blocks, which don't print when collapsed —
// open them for the print run, then restore
window.addEventListener("beforeprint", () => {
  document.querySelectorAll("details:not([open])").forEach((d) => {
    d.dataset.printOpened = "1";
    d.open = true;
  });
});
window.addEventListener("afterprint", () => {
  document.querySelectorAll("details[data-print-opened]").forEach((d) => {
    d.open = false;
    delete d.dataset.printOpened;
  });
});

window.addEventListener("hashchange", route);
route();

// PWA: offline shell + "Add to Home Screen" as an app
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () =>
    navigator.serviceWorker.register("/service-worker.js").catch(() => {})
  );
}
