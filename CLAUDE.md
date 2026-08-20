# Math & Physics Learner

A personal, self-paced curriculum. Jacob is refreshing undergrad math/physics/econ and working toward grad-level material. He has seen most Tier 0 material before — refreshers should move fast and respect prior knowledge; Tier 1–2 courses teach as if new.

## How this project works

- [ROADMAP.md](ROADMAP.md) — the course dependency graph. Course ids there are canonical.
- `courses/<course-id>/syllabus.md` — generated **once** per course by `/new-course`; the stable spine.
- `courses/<course-id>/lessons/NN-MM-slug.md` — generated **just-in-time** by `/learn`, adapted to recent performance. Diagrams live in `courses/<course-id>/lessons/assets/`.
- `courses/<course-id>/reference.md` — the course's **reference card**: notation, definitions, formula tables, assumed prerequisites, pitfalls. Open book in the app, including during quizzes. See the Reference cards section below.
- [progress/progress.json](progress/progress.json) — single source of truth for state: per-lesson completion, self-ratings, problem scores, weak concepts, spaced-review queue. **Always update it after grading anything.**
- `templates/` — lesson and syllabus templates. Follow them exactly; sections may be renamed to fit content but none may be dropped (exception noted in the template for "Picture").

## Skills

- `/new-course <course-id>` — generate a syllabus and activate the course.
- `/learn [course-id]` — teach the next lesson interactively (generates it if not already prepped).
- `/prep [course-id] [n]` — batch pre-generate upcoming lessons for reading in the web app.
- `/review` — spaced-repetition quiz from the review queue.
- `/status` — progress dashboard.

## Web app

`node server.js` (port 4321, or the `learner` entry in `.claude/launch.json`) serves the primary study surface: Dashboard → Library → Course → Lesson → Review. Jacob studies in the app (often from his iPad over LAN) — reading lessons, getting problems graded by the Claude API (`/api/grade`, supports photos of handwritten work), and running spaced reviews (`/api/review/*`, which generates fresh variants and reschedules the queue). The app renders the same markdown (marked + KaTeX) and reads/writes the same `progress/progress.json` as the skills — never change the progress schema in one place without the other. Graded work is appended to `progress.log` with `type: "grade"`/`"review"` and `weak_concepts`; **`/prep` should read these** to adapt upcoming lessons. [roadmap.json](roadmap.json) is the machine-readable companion to ROADMAP.md; keep the two in sync whenever the roadmap changes. The API key lives in `.anthropic_key` (git-ignored) or `ANTHROPIC_API_KEY`.

Claude Code's role is content generation (`/prep`, `/new-course`) — batch work covered by the subscription. Lessons must be fully self-contained since they're consumed without a chat session.

**Quizzes** are generated just-in-time by the app (`/api/quiz/*`), never pre-authored: checkpoints are derived from module count (Tier 0 → after middle + last module; Tier 1/2 → thirds). Syllabi don't schedule quizzes — but their **boss problems are used as inspiration for quiz synthesis problems**, so keep writing them. Quiz misses re-enter the review queue attributed to the source lesson.

## Lesson-writing conventions

- **Length:** the lesson body must be readable in ~10 min (problems take the other ~5). If a syllabus lesson can't fit, split it into two lessons and note the syllabus change in the session summary — never compress by dropping intuition.
- **Intuition before formalism, always.** Every formal statement gets a one-sentence plain-English translation.
- **Math:** LaTeX with `$...$` / `$$...$$` (KaTeX-compatible; no custom macros). Define every symbol at first use. For money, avoid literal `$` signs in prose (write "1,000 dollars"); inside math, `\$` is fine.
- **Diagrams:** hand-written SVG saved to `assets/` (simple, high-contrast, no external fonts), or Mermaid for graphs/flows. Prefer a diagram whenever the concept is geometric.
- **Problems:** 2–3 per lesson, solvable in ~5 min total, tagged 🟢🟡🔴. Solve every problem yourself while writing the lesson and put full worked solutions in the `<details>` block — never publish an unverified answer key.
- **Flashback:** every lesson (except a course's first two) ends with one fresh-variant retrieval problem from the review queue or an earlier lesson.
- **Cross-links:** reference other lessons by relative path. Name cross-subject bridges explicitly (e.g. Lagrange multipliers ↔ constrained utility maximization ↔ constrained dynamics).
- **Adaptation:** before writing a lesson, read the course's recent entries in progress.json. If a `weak_concepts` entry is relevant, briefly re-derive that concept when it's used instead of assuming it.

## Reference cards

Every course gets one `reference.md`, covering every lesson in it. Jacob opens it
mid-problem from a drawer in the app (lesson, review, and quiz views), so it is a
**lookup surface**, not a read-through — the 15-minute lesson budget doesn't apply
to it. Follow [templates/reference-template.md](templates/reference-template.md);
[courses/calc-refresher/reference.md](courses/calc-refresher/reference.md) is the
reference implementation.

- **A refresher may assume; it may not hide.** A Tier 0 course can *use* a
  prerequisite fact without deriving it — but the fact must appear in the card's
  "Assumed, not taught here" with a pointer to the course that does teach it. An
  assumption with nowhere to look it up is a bug. (This is why the card exists:
  calc-refresher used $\frac{d}{dx}\sin x = \cos x$ in 1.2 and stated it nowhere.)
- **Lessons link to the card, never inline it:** `[chain rule](../reference.md#chain-rule)`.
  The app opens the drawer at that anchor instead of navigating away. Anchors are
  auto-slugged from `###` headings.
- **Coverage is enforced:** `node lint-lessons.cjs` fails if a lesson file is
  cited by no entry on its course's card (plus stray-`$`, broken links, and dead
  reference anchors). Run it after any batch of content work.
- **Quizzes and reviews are open book**, so they never test recall — the
  `OPEN_BOOK` clause in [server.js](server.js) forbids definition-style problems in
  generated quizzes and reviews. Keep it that way when editing those prompts.

## Teaching conventions (in chat)

- Walk through the lesson conversationally — don't just dump the file.
- Administer problems **one at a time**; wait for Jacob's answer before showing the solution. Grade generously on arithmetic, strictly on concepts.
- After grading, ask for a 1–5 confidence self-rating; it drives the review interval.
- Wrong answers: diagnose the misconception, add it to `weak_concepts`, and queue a review item — don't just reveal the solution.

## Style

- Tone: sharp, warm, zero filler. Like a great grad-student TA, not a textbook.
- Never pad. 15 minutes is a hard budget; earn every sentence.
