import express from "express";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";
import Anthropic from "@anthropic-ai/sdk";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PROGRESS_PATH = path.join(ROOT, "progress", "progress.json");
const COURSES_DIR = path.join(ROOT, "courses");
const MODEL = "claude-opus-4-8";

// API key: env var, or a git-ignored .anthropic_key file in the project root
const KEY_FILE = path.join(ROOT, ".anthropic_key");
if (!process.env.ANTHROPIC_API_KEY && fs.existsSync(KEY_FILE)) {
  // Ignore comment lines and whitespace; only accept a real-looking key so the
  // placeholder file doesn't get sent to the API as a credential
  const key = fs
    .readFileSync(KEY_FILE, "utf8")
    .split("\n")
    .map((l) => l.trim())
    .find((l) => l.startsWith("sk-ant-"));
  if (key) process.env.ANTHROPIC_API_KEY = key;
}
const anthropic = new Anthropic();
const NO_KEY_MSG =
  "No Anthropic API key found. Put it in a .anthropic_key file in the project root (git-ignored) or set ANTHROPIC_API_KEY.";

const app = express();
app.use(express.json({ limit: "25mb" }));
app.use(express.static(path.join(ROOT, "public")));
app.use("/vendor/katex", express.static(path.join(ROOT, "node_modules/katex/dist")));
app.use("/vendor/marked", express.static(path.join(ROOT, "node_modules/marked")));
// Lesson markdown + SVG assets are served straight from the courses tree
app.use("/content", express.static(COURSES_DIR));

const readJSON = (p) => JSON.parse(fs.readFileSync(p, "utf8"));
// Best-effort: on a read-only serverless filesystem (Vercel, /var/task) this write
// throws EROFS. Persistence there lives client-side (localStorage), so we must not
// fail the request — the grade/quiz/review result has already been produced.
const writeProgress = (data) => {
  try {
    fs.writeFileSync(PROGRESS_PATH, JSON.stringify(data, null, 2) + "\n");
  } catch (e) {
    if (e.code !== "EROFS" && e.code !== "EACCES")
      console.warn("progress write failed:", e.message);
  }
};

// Scan the courses directory for created courses and their lesson files
function scanCourses() {
  const out = {};
  if (!fs.existsSync(COURSES_DIR)) return out;
  for (const id of fs.readdirSync(COURSES_DIR)) {
    const dir = path.join(COURSES_DIR, id);
    if (!fs.statSync(dir).isDirectory()) continue;
    const syllabusPath = path.join(dir, "syllabus.md");
    const hasSyllabus = fs.existsSync(syllabusPath);
    // Per-course reference card (open book, including during quizzes)
    const hasReference = fs.existsSync(path.join(dir, "reference.md"));
    const lessonsDir = path.join(dir, "lessons");
    const lessons = fs.existsSync(lessonsDir)
      ? fs.readdirSync(lessonsDir).filter((f) => f.endsWith(".md")).sort()
      : [];
    // Module count drives quiz checkpoint placement
    const moduleCount = hasSyllabus
      ? (fs.readFileSync(syllabusPath, "utf8").match(/^### Module \d+/gm) || []).length
      : 0;
    out[id] = { hasSyllabus, hasReference, lessons, moduleCount };
  }
  return out;
}

// Everything the frontend needs in one call
app.get("/api/state", (_req, res) => {
  res.json({
    roadmap: readJSON(path.join(ROOT, "roadmap.json")),
    progress: readJSON(PROGRESS_PATH),
    courses: scanCourses(),
    today: new Date().toISOString().slice(0, 10),
  });
});

// Record a lesson completion; keeps the same progress.json shape the /learn skill writes
app.post("/api/complete", (req, res) => {
  const { course, lesson, self_rating, problems, weak_concepts } = req.body || {};
  if (!course || !lesson || !self_rating) {
    return res.status(400).json({ error: "course, lesson, self_rating required" });
  }
  const progress = readJSON(PROGRESS_PATH);
  const today = new Date().toISOString().slice(0, 10);

  progress.courses[course] ||= { status: "active", started: today, lessons: {} };
  progress.courses[course].lessons[lesson] = {
    completed: today,
    self_rating,
    problems: problems || null,
    weak_concepts: weak_concepts || [],
  };
  progress.log.push({ date: today, course, lesson, type: "lesson", source: "webapp" });

  const intervals = progress.settings.review_intervals_days || {};
  const days = intervals[String(self_rating)] || 5;
  const due = new Date(Date.now() + days * 86400000).toISOString().slice(0, 10);
  progress.review_queue.push({ course, lesson, rating: self_rating, due });

  writeProgress(progress);
  res.json({ ok: true, review_due: due });
});

/* The student studies open book: the course's reference card (definitions,
   formula tables, notation, pitfalls) is available in the app during lessons,
   review AND quizzes. So generated problems must be unanswerable by lookup —
   what's being measured is whether he can USE the machinery, not recall it. */
const OPEN_BOOK =
  "The student has the course's reference card open while answering — it lists every definition, formula, symbol and standard result from the course. NEVER ask for a definition, a formula statement, a symbol's meaning, or anything else a lookup would answer. Every problem must require applying the machinery to a concrete situation the card does not cover: compute something, decide which tool applies and why, interpret a result, or find the flaw in a plausible-looking argument.";

/* ---------- Claude-graded practice ---------- */

function lessonPath(course, file) {
  // basename() blocks path traversal from client-supplied names
  return path.join(COURSES_DIR, path.basename(course), "lessons", path.basename(file));
}

// Accepts either a single base64 JPEG (legacy `image`) or an array (`images`)
// — the handwriting pad submits one image per written page.
function userContent(text, imagesOrImage) {
  const list = Array.isArray(imagesOrImage)
    ? imagesOrImage
    : imagesOrImage
    ? [imagesOrImage]
    : [];
  const content = [{ type: "text", text }];
  for (const data of list) {
    content.push({
      type: "image",
      source: { type: "base64", media_type: "image/jpeg", data },
    });
  }
  return content;
}

const GRADE_SCHEMA = {
  type: "json_schema",
  schema: {
    type: "object",
    properties: {
      verdict: { type: "string", enum: ["correct", "partial", "incorrect"] },
      feedback: { type: "string" },
      weak_concepts: { type: "array", items: { type: "string" } },
    },
    required: ["verdict", "feedback", "weak_concepts"],
    additionalProperties: false,
  },
};

const GRADER_SYSTEM = `You are a sharp, warm grad-student TA grading one problem from a 15-minute self-study lesson. The student's answer may be typed, a photo of handwritten work, or both — read handwritten math carefully.
Grade generously on arithmetic slips, strictly on concepts. "correct" = right answer and sound reasoning (minor arithmetic slips allowed if flagged in feedback). "partial" = right idea with a real gap, or right answer with unjustified reasoning. "incorrect" = wrong approach or conclusion.
Feedback: 2-6 sentences, markdown with $...$ LaTeX. Name what was done well, then the precise gap and the key step to fix it. Never just restate the solution key.
weak_concepts: 0-3 short concept tags (e.g. "chain rule", "one-sided limits") ONLY for genuine conceptual gaps — empty for correct answers with minor slips.`;

app.post("/api/grade", async (req, res) => {
  try {
    const { course, lesson, problem, answer_text, image, images } = req.body || {};
    const imgs = Array.isArray(images) ? images : image ? [image] : [];
    if (!course || !lesson || !problem || (!answer_text && !imgs.length)) {
      return res.status(400).json({ error: "course, lesson, problem, and an answer required" });
    }
    if (!process.env.ANTHROPIC_API_KEY) return res.status(503).json({ error: NO_KEY_MSG });

    const lessonMd = fs.readFileSync(lessonPath(course, lesson), "utf8");
    const prompt = `<lesson>\n${lessonMd}\n</lesson>\n\nThe student is answering: ${problem}.\n\nStudent's answer (typed portion, may be empty if the work is in the attached handwriting image(s)):\n${answer_text || "(see attached handwritten pages)"}`;

    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 1500,
      system: GRADER_SYSTEM,
      output_config: { format: GRADE_SCHEMA },
      messages: [{ role: "user", content: userContent(prompt, imgs) }],
    });
    if (response.stop_reason === "refusal") {
      return res.status(502).json({ error: "The grader declined this request — try rephrasing." });
    }
    const result = JSON.parse(response.content.find((b) => b.type === "text").text);

    // Log the grade so /prep and /status can see practice history
    const progress = readJSON(PROGRESS_PATH);
    progress.log.push({
      date: new Date().toISOString().slice(0, 10),
      course,
      lesson: lesson.slice(0, 5),
      problem,
      verdict: result.verdict,
      weak_concepts: result.weak_concepts,
      type: "grade",
      source: "webapp",
    });
    writeProgress(progress);

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

/* Review flow: generate a fresh variant for a due item, then grade the answer */

const pendingReviews = new Map(); // id -> { item, question, solution }

const QUESTION_SCHEMA = {
  type: "json_schema",
  schema: {
    type: "object",
    properties: {
      question: { type: "string" },
      solution: { type: "string" },
    },
    required: ["question", "solution"],
    additionalProperties: false,
  },
};

app.post("/api/review/question", async (req, res) => {
  try {
    const { item } = req.body || {}; // a review_queue entry: {course, lesson, ...}
    if (!item?.course || !item?.lesson) return res.status(400).json({ error: "item required" });
    if (!process.env.ANTHROPIC_API_KEY) return res.status(503).json({ error: NO_KEY_MSG });

    const dir = path.join(COURSES_DIR, path.basename(item.course), "lessons");
    const file = fs.readdirSync(dir).find((f) => f.startsWith(item.lesson));
    if (!file) return res.status(404).json({ error: "source lesson not found" });
    const lessonMd = fs.readFileSync(path.join(dir, file), "utf8");

    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 1500,
      system:
        "You write spaced-repetition retrieval problems for a self-study math curriculum. Given a lesson, produce ONE fresh problem testing its central concept — a variant, never a verbatim copy of a lesson problem. Solvable in ~3 minutes. Use markdown with $...$ LaTeX. The solution must be fully worked. " +
        OPEN_BOOK,
      output_config: { format: QUESTION_SCHEMA },
      messages: [
        {
          role: "user",
          content: `<lesson>\n${lessonMd}\n</lesson>\n\nConcept focus (if any): ${item.concept || "the lesson's central concept"}. Write the review problem.`,
        },
      ],
    });
    if (response.stop_reason === "refusal") {
      return res.status(502).json({ error: "Question generation declined — try again." });
    }
    const q = JSON.parse(response.content.find((b) => b.type === "text").text);
    const id = crypto.randomUUID();
    pendingReviews.set(id, { item, ...q });
    res.json({ id, question: q.question });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/review/grade", async (req, res) => {
  try {
    const { id, answer_text, image, images } = req.body || {};
    const imgs = Array.isArray(images) ? images : image ? [image] : [];
    const pending = pendingReviews.get(id);
    if (!pending) return res.status(404).json({ error: "review expired — start again" });
    if (!process.env.ANTHROPIC_API_KEY) return res.status(503).json({ error: NO_KEY_MSG });

    const prompt = `<problem>\n${pending.question}\n</problem>\n\n<reference_solution>\n${pending.solution}\n</reference_solution>\n\nThe student is answering the problem above. Student's answer (typed portion, may be empty if the work is in the attached handwriting image(s)):\n${answer_text || "(see attached handwritten pages)"}`;

    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 1200,
      system: GRADER_SYSTEM,
      output_config: { format: GRADE_SCHEMA },
      messages: [{ role: "user", content: userContent(prompt, imgs) }],
    });
    if (response.stop_reason === "refusal") {
      return res.status(502).json({ error: "The grader declined this request — try again." });
    }
    const result = JSON.parse(response.content.find((b) => b.type === "text").text);
    pendingReviews.delete(id);

    // Reschedule the queue item
    const progress = readJSON(PROGRESS_PATH);
    const { item } = pending;
    const idx = progress.review_queue.findIndex(
      (r) => r.course === item.course && r.lesson === item.lesson && r.due === item.due
    );
    const today = new Date().toISOString().slice(0, 10);
    const intervals = progress.settings.review_intervals_days || {};
    if (idx !== -1) {
      const entry = progress.review_queue[idx];
      if (result.verdict === "correct") {
        entry.rating = Math.min(5, (entry.rating || 3) + 1);
        entry.streak = (entry.streak || 0) + 1;
        if (entry.rating === 5 && entry.streak >= 2) {
          progress.review_queue.splice(idx, 1); // retired
        } else {
          entry.due = new Date(Date.now() + (intervals[String(entry.rating)] || 5) * 86400000)
            .toISOString().slice(0, 10);
        }
      } else {
        entry.rating = Math.max(1, (entry.rating || 3) - (result.verdict === "incorrect" ? 1 : 0));
        entry.streak = 0;
        entry.due = new Date(Date.now() + (result.verdict === "incorrect" ? 1 : 2) * 86400000)
          .toISOString().slice(0, 10);
      }
    }
    progress.log.push({
      date: today,
      course: item.course,
      lesson: item.lesson,
      verdict: result.verdict,
      weak_concepts: result.weak_concepts,
      type: "review",
      source: "webapp",
    });
    writeProgress(progress);

    res.json({ ...result, solution: pending.solution });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

/* Checkpoint quizzes: generated just-in-time, weighted by recent grading history */

const pendingQuizzes = new Map(); // id -> { course, quiz, problems: [{question, solution, source_lesson}] }

const QUIZ_SCHEMA = {
  type: "json_schema",
  schema: {
    type: "object",
    properties: {
      problems: {
        type: "array",
        items: {
          type: "object",
          properties: {
            question: { type: "string" },
            solution: { type: "string" },
            source_lesson: { type: "string" },
          },
          required: ["question", "solution", "source_lesson"],
          additionalProperties: false,
        },
      },
    },
    required: ["problems"],
    additionalProperties: false,
  },
};

app.post("/api/quiz/start", async (req, res) => {
  try {
    const { course, quiz, through_module } = req.body || {};
    if (!course || !quiz || !through_module) {
      return res.status(400).json({ error: "course, quiz, through_module required" });
    }
    if (!process.env.ANTHROPIC_API_KEY) return res.status(503).json({ error: NO_KEY_MSG });

    const dir = path.join(COURSES_DIR, path.basename(course), "lessons");
    const covered = fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".md") && parseInt(f.slice(0, 2), 10) <= through_module)
      .sort();
    if (!covered.length) return res.status(404).json({ error: "no lessons found for this quiz" });

    const lessonsBlock = covered
      .map((f) => `<lesson id="${f.slice(0, 5)}">\n${fs.readFileSync(path.join(dir, f), "utf8")}\n</lesson>`)
      .join("\n\n");

    // Recent misses for this course, from in-app grades and reviews
    const progress = readJSON(PROGRESS_PATH);
    const weak = [
      ...new Set(
        progress.log
          .filter((e) => e.course === course && ["grade", "review", "quiz"].includes(e.type))
          .slice(-30)
          .filter((e) => e.verdict && e.verdict !== "correct")
          .flatMap((e) => e.weak_concepts || [])
      ),
    ];

    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 6000,
      system: `You write checkpoint quizzes for a self-paced math curriculum. Given the covered lessons, produce exactly 5 problems: breadth across the covered modules, ramping from direct application to synthesis (the last problem should combine at least two lessons — the syllabus's boss problems are good inspiration). All problems must be fresh — never verbatim copies of lesson problems. Each solvable in ~4 minutes, markdown with $...$ LaTeX, fully worked solutions. Tag each problem with the single most relevant source lesson id (e.g. "01-03"). If the student has documented weak concepts, target 1-2 problems at them. ${OPEN_BOOK}`,
      output_config: { format: QUIZ_SCHEMA },
      messages: [
        {
          role: "user",
          content: `${lessonsBlock}\n\nDocumented weak concepts: ${weak.length ? weak.join(", ") : "none recorded"}.\n\nWrite the quiz.`,
        },
      ],
    });
    if (response.stop_reason === "refusal") {
      return res.status(502).json({ error: "Quiz generation declined — try again." });
    }
    const { problems } = JSON.parse(response.content.find((b) => b.type === "text").text);
    const id = crypto.randomUUID();
    pendingQuizzes.set(id, { course, quiz, problems });
    res.json({ id, questions: problems.map((p) => p.question) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/quiz/grade", async (req, res) => {
  try {
    const { id, index, answer_text, image, images } = req.body || {};
    const imgs = Array.isArray(images) ? images : image ? [image] : [];
    const pending = pendingQuizzes.get(id);
    const problem = pending?.problems?.[index];
    if (!problem) return res.status(404).json({ error: "quiz expired — start again" });
    if (!process.env.ANTHROPIC_API_KEY) return res.status(503).json({ error: NO_KEY_MSG });

    const prompt = `<problem>\n${problem.question}\n</problem>\n\n<reference_solution>\n${problem.solution}\n</reference_solution>\n\nThe student is answering the problem above. Student's answer (typed portion, may be empty if the work is in the attached handwriting image(s)):\n${answer_text || "(see attached handwritten pages)"}`;

    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 1200,
      system: GRADER_SYSTEM,
      output_config: { format: GRADE_SCHEMA },
      messages: [{ role: "user", content: userContent(prompt, imgs) }],
    });
    if (response.stop_reason === "refusal") {
      return res.status(502).json({ error: "The grader declined this request — try again." });
    }
    const result = JSON.parse(response.content.find((b) => b.type === "text").text);

    const progress = readJSON(PROGRESS_PATH);
    const today = new Date().toISOString().slice(0, 10);
    progress.log.push({
      date: today,
      course: pending.course,
      quiz: pending.quiz,
      problem: index + 1,
      of: pending.problems.length,
      lesson: problem.source_lesson,
      verdict: result.verdict,
      weak_concepts: result.weak_concepts,
      type: "quiz",
      source: "webapp",
    });
    // A quiz miss puts its source lesson back in the review rotation
    if (result.verdict !== "correct") {
      progress.review_queue.push({
        course: pending.course,
        lesson: problem.source_lesson,
        concept: result.weak_concepts?.[0],
        rating: 2,
        due: new Date(Date.now() + 86400000).toISOString().slice(0, 10),
      });
    }
    writeProgress(progress);

    if (index === pending.problems.length - 1) pendingQuizzes.delete(id);
    res.json({ ...result, solution: problem.solution });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 4321;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`learner app on http://localhost:${PORT} (reachable on your LAN for iPad use)`)
);
