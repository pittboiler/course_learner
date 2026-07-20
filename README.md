# Math & Physics Learner

A personal, self-paced curriculum for re-learning math and its applications in physics and economics — from calculus refreshers to general relativity and grad micro. Lessons are ~15 minutes, generated on demand by Claude Code, and adapt to what you got wrong last week.

## Daily use — everything happens in the web app

```
node server.js        # then open http://localhost:4321
```

**From an iPad:** the server listens on the LAN — open `http://<your-mac-name>.local:4321` (find the name in macOS System Settings → General → Sharing). The Mac must be awake with the server running.

Dashboard → Library → Course → Lesson. Read lessons with rendered math, **get problems graded by Claude** (type an answer or attach a photo of handwritten work — great for proofs), mark lessons complete with a 1–5 confidence rating, and run spaced-repetition **Review** sessions with freshly generated problem variants. Grades and misses are logged and feed future lesson generation.

**Checkpoint quizzes:** each course page shows quizzes that unlock as you complete modules — refreshers get 2 (mid-course + final), Tier 1/2 courses get 3 (thirds). Quizzes are generated fresh the moment you start one — 5 problems, breadth plus synthesis, weighted toward concepts your grade history shows as shaky. Missed quiz problems automatically re-enter the review queue.

**Grading/review API setup (one-time):** put an Anthropic API key in a `.anthropic_key` file in the project root (git-ignored), or set `ANTHROPIC_API_KEY`. Costs are small: ~$0.03–0.08 per graded problem, ~$0.10–0.20 per review session on Opus 4.8.

**Claude Code** is only needed for content generation (covered by subscription, no API cost):

```
/prep               # pre-generate the next batch of lessons
/new-course <id>    # stand up a new course from the roadmap
/learn, /review     # optional: fully interactive chat versions
/status             # progress summary in chat
```

## How it's built

| Piece | Role |
|---|---|
| [ROADMAP.md](ROADMAP.md) / [roadmap.json](roadmap.json) | Course dependency graph (human + machine readable) |
| [server.js](server.js) + `public/` | The local web app (Express, marked, KaTeX) |
| `courses/<id>/syllabus.md` | Stable spine of a course: modules, lesson list, *Dangerous Checklist*, boss problems |
| `courses/<id>/lessons/` | Lessons, written just-in-time so they adapt to your progress |
| [progress/progress.json](progress/progress.json) | State: completions, ratings, weak concepts, review queue |
| `templates/` | The lesson & syllabus formats |
| [CLAUDE.md](CLAUDE.md) | Conventions Claude follows in every session |
| `.claude/skills/` | The `/learn`, `/review`, `/new-course`, `/status` skills |

**Design principles**

- **Syllabus fixed, lessons adaptive.** The spine is stable so the course goes somewhere; the flesh is generated fresh so it meets you where you are.
- **Retrieval beats rereading.** Every lesson ends with a flashback problem; `/review` runs spaced repetition with intervals set by your own confidence ratings.
- **"Dangerous" is a checklist, not a vibe.** Each course defines done-ness as concrete can-do statements.
- **Bridges are the payoff.** Courses cross-link aggressively (Lagrange multipliers in micro ↔ constrained dynamics; convexity in econ ↔ entropy in stat mech).

## Reading lessons

Lessons are markdown with LaTeX (`$...$`), rendered in the web app with KaTeX. They also read nicely in Obsidian or VS Code if you prefer. Diagrams are plain SVG files next to the lessons.

## Later ideas (not built yet)

- **Practice mode for completed courses** — an endless, on-demand problem generator for any finished course. Open questions to settle before building: pure interleaved drill vs. exam simulation vs. "dangerous checklist workout" (one problem per can-do statement); whether practice results should re-open the review queue or stay consequence-free; and cross-course synthesis problems (e.g. calc + mechanics) once both are done. The quiz machinery (`/api/quiz/*`) is ~90% of the implementation.
- Non-math tracks reusing the same machinery (political philosophy, macro)
