# Reference Cards — build plan

One **reference card per course**: the shelf of facts, symbols, and formulas that
course's lessons stand on. It exists because a Tier 0 refresher is *allowed* to
assume you once knew $\frac{d}{dx}\sin x = \cos x$ — but not allowed to leave it
unfindable. (Today calc-refresher never states it anywhere; lesson 1.2 uses it in
its first worked example.)

Design goal, in one line: **anything a lesson assumes is one tap away, without
leaving the lesson or losing your handwriting.**

**Status: complete (2026-08-19).** All 85 courses with lessons have a reference
card; `node lint-lessons.cjs` reports 0 problems across 1,874 markdown files.

### Decisions (locked)

| | |
|---|---|
| **Scope** | One card per **course**, covering every lesson in it. Not one file per lesson. |
| **Master glossary** | Deferred. Cards are per course; a build step can merge them later. |
| **Availability** | **Open book everywhere** — lessons, review, and quizzes. |
| **What quizzes test** | Understanding, never recall. If a card lookup answers the question, it's the wrong question. |
| **Pitfalls section** | Included — the value is having them summarized in one place. |

---

## 1. The file

`courses/<course-id>/reference.md` — markdown, like everything else here. Not
JSON: it renders through the same `parseMd` + KaTeX pipeline, diffs cleanly, and
can be hand-edited when a card is wrong. A merge step can parse it into JSON for
a master glossary later.

Sectioned by **kind**, not by module — mid-problem you're looking for "what's the
formula", not "which week was it in". Every entry is tagged with the lesson that
introduced it, so the card doubles as an index.

Fixed section order (a card omits a section only if it would be empty):

1. **Notation** — a symbol table. What it means in one line, first lesson used.
2. **Definitions** — `###` per term: plain-English line, then the formal statement.
3. **Formulas and rules** — the tables you'd otherwise go hunting for.
4. **Assumed, not taught here** — prerequisite facts the course uses without
   deriving, each pointing at the course that *does* teach it.
5. **Pitfalls** — the lessons' "Watch out" traps, deduped and compressed to one
   line each, grouped by theme rather than by lesson.

```markdown
# Calculus Refresher · Reference Card

> Open book — this card is meant to be open while you work. Quizzes included.

## Notation
| Symbol | Means | First used |
|---|---|---|
| $f'(x)$ | derivative of $f$ at $x$ — sensitivity of output to a nudge in input | [1.1](lessons/01-01-derivative-as-sensitivity.md) |

## Definitions
### Derivative
The limit of the average rate of change as the interval shrinks to nothing.
$$f'(x) = \lim_{h\to 0}\frac{f(x+h)-f(x)}{h}$$
*Introduced:* [1.1](lessons/01-01-derivative-as-sensitivity.md)

## Formulas and rules
### Derivatives of the standard functions
| $f$ | $f'$ |
|---|---|
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
*Used from* [1.2](lessons/01-02-differentiation-rules.md) *onward; derived in*
[precalculus 3.1](../precalculus/lessons/03-01-trig-functions-for-calculus.md)

## Assumed, not taught here
| Fact | Where it's taught |
|---|---|
| $\frac{d}{dx}\sin x = \cos x$ | [precalculus 3.1](../precalculus/lessons/03-01-trig-functions-for-calculus.md) |

## Pitfalls
### Chain rule
- The inner derivative is the part everyone drops — $\frac{d}{dx}\sin 3x$ is
  $3\cos 3x$, not $\cos 3x$. *(from [1.2](lessons/01-02-differentiation-rules.md))*
```

**Anchors** are auto-slugged from `###` heading text (`### Chain rule` →
`#chain-rule`). No custom syntax; renaming a heading breaks inbound links, which
the linter (§5) catches.

**The "Assumed, not taught here" section is the load-bearing one.** It is the
formal answer to "is it appropriate for a refresher to assume this?" — yes, if
and only if the assumption is listed there with a pointer to where it's taught.

---

## 2. How you reach it mid-problem

**The drawer.** A button pinned in the lesson, review, and quiz views opens the
card as an overlay — right-hand slide-over on desktop, bottom sheet on iPad — over
whatever you're doing, which stays exactly where it was.

Requirements that fall out of how you actually study:

- **It must not re-render the lesson.** The ink pads hold live canvas state; the
  drawer is built once per course and toggled, never re-mounted. Opening it must
  not collapse an open work drawer.
- **Sticky search** filtering entries by heading and body — with 60+ entries,
  scrolling is not "easily reference".
- **Remembers scroll position** per course within a session.
- **Fetched once, cached** in memory. Offline is already handled: `/content/*` is
  stale-while-revalidate in the service worker, so a card you've opened once is
  available on the iPad offline. Pre-warm the fetch when a lesson loads so it's
  cached before you need it.
- `Esc` / tap-outside closes.

**Explicit links.** A lesson writes `[chain rule](../reference.md#chain-rule)`.
The app already rewrites relative markdown links into SPA routes
([app.js:231](public/app.js:231)); it grows one more case that opens the drawer at
that anchor instead of navigating away.

Server-side this is nearly free: `courses/` is already statically mounted at
`/content`, so the card is fetchable today. `scanCourses()`
([server.js:50](server.js:50)) adds a `hasReference` flag so the UI knows whether
to show the button.

---

## 3. Open book changes what a quiz asks

Making the card available during quizzes is only coherent if quizzes stop asking
things the card answers. Two prompts need an explicit clause:

- **Quiz synthesis** ([server.js:381](server.js:381)) — add: the student has the
  course's reference card open. Never ask for a definition, a formula statement,
  or a symbol's meaning. Every problem must require *using* the machinery on a
  situation the card doesn't cover.
- **Review generation** ([server.js:229](server.js:229)) — same clause. A spaced
  review that can be answered by lookup measures nothing about retention of
  understanding.

Both prompts already push toward application; this makes it a hard constraint
rather than a tendency. Worth doing in the same pass as the drawer, since it's
the thing that keeps quiz scores meaningful.

---

## 4. Generation

**Cards are generated *from* the lessons**, never independently — so a card can't
claim a definition the lessons don't use, or miss one they do.

**Retrofit (one-time).** 85 courses currently have lessons; 1,656 lesson files
total. One subagent per course reads that course's syllabus + every lesson and
emits `reference.md`, then a review pass checks each card against §5's linter and
against the format. Batched by field so one failure doesn't take down the run.
This is Claude Code batch work on the subscription — no API billing.

**Forward (`/prep`).** After a `/prep` batch writes lessons, a final step in the
same run updates that course's card: new definitions, formulas, notation, and any
newly-assumed prerequisite. Must be **idempotent** — a re-run dedupes by heading
slug instead of appending a second copy.
Skill file: [.claude/skills/prep/SKILL.md](.claude/skills/prep/SKILL.md).

**Seeding (`/new-course`).** The syllabus generator already knows the course's
prereqs, so it stubs the card with an "Assumed, not taught here" section derived
from them, before any lesson exists.
Skill file: [.claude/skills/new-course/SKILL.md](.claude/skills/new-course/SKILL.md).

---

## 5. Linting

`node lint-lessons.cjs` (project root) — runs the app's real markdown pipeline, so
it can't drift from what the browser does. All four checks are **built**, and the
library is at zero problems across 1,798 files:

- stray `$` that escapes its math span
- relative links that don't resolve to a file
- `reference.md#anchor` links whose anchor doesn't exist
- **coverage:** every lesson file is cited by at least one card entry — this is
  what enforces "every lesson" without making lessons declare their own terms

It supersedes the throwaway `katex-check-render.cjs`. It does *not* replace the
per-course KaTeX expression checkers (`katex-check-*.cjs`), which verify that each
formula compiles — run both.

---

## 6. Conventions to add to CLAUDE.md

- A Tier 0 refresher **may** use a prerequisite fact without deriving it, and
  **must** list it in the card's "Assumed, not taught here" with a pointer to
  where it's taught. Tier 1–2 cards are mostly definitions and notation instead.
- Lessons **link to** the card; they never inline it. The 15-minute budget is
  unchanged by this feature.
- Card entries follow the intuition-first rule: one plain-English line before any
  formula.
- Quizzes and reviews are open-book and therefore never test recall (§3).

---

## 7. Execution order

**Step 0 — format proof. ✅** [templates/reference-template.md](templates/reference-template.md)
and [courses/calc-refresher/reference.md](courses/calc-refresher/reference.md):
42 entries, 288 formulas (all render), all 15 lessons cited, and the trig
derivatives now appear both in the derivative table and under "Assumed, not taught
here".

**Step 1 — the drawer. ✅** `hasReference` in `scanCourses()`; drawer on
`document.body` in `app.js`; button in lesson, review and quiz views; entry
search; anchor deep-links from lesson prose.
*Verified:* with strokes on an ink pad, opening and closing the card left the
pixel count identical and the work drawer open.

**Step 2 — quiz and review prompts. ✅** The §3 clause is the `OPEN_BOOK` constant
in [server.js](server.js), appended to both system prompts. The quiz view now says
so out loud ("Open book — the reference card is fair game").

**Step 3 — retrofit. ✅** All 85 courses, 1,656 lesson files. One subagent per
course, in waves under the 20-concurrent cap. Three interruptions (session limit,
weekly limit, machine sleep) killed agents mid-run; in each case most had already
written their file, so recovery meant checking disk rather than trusting the
failure notices, then relaunching only the genuinely missing.

**Step 4 — wire in. ✅** `/prep` gained a card-update step and a lint step,
`/new-course` gained a card stub seeded from prereqs, `lint-lessons.cjs` has all
four checks, and CLAUDE.md carries the conventions from §6.

Steps 0–2 are what change how studying feels, and are worth doing in one sitting.
Step 3 is bulk generation and can run in the background afterward.


---

## What the retrofit found: facts the library uses but never teaches

Every card documents its own assumptions, and where a fact had no home the card
states it outright. These are the cases where the honest fix is a **lesson**, not
a card entry. Ordered by how soon the study path hits them.

**Closed (2026-08-20).** Every row that blocked the Tier 0 path now has a lesson:

| Gap | New lesson |
|---|---|
| **Cross product** and the right-hand rule | [linalg-refresher 1.4](courses/linalg-refresher/lessons/01-04-cross-product-and-orientation.md) |
| **Complex numbers** | [precalculus 2.4](courses/precalculus/lessons/02-04-complex-numbers.md) |
| **Polynomial long division** | [algebra-foundations 3.3](courses/algebra-foundations/lessons/03-03-polynomial-division.md) |
| **Inverse-trig restricted ranges** | [trigonometry 1.3](courses/trigonometry/lessons/01-03-inverse-trig-and-ranges.md) |
| **Exact ODEs** | [ode-refresher 1.4](courses/ode-refresher/lessons/01-04-exact-equations.md) |
| **Variation of parameters** | [ode-refresher 2.4](courses/ode-refresher/lessons/02-04-variation-of-parameters.md) |
| **The $t$-distribution and the $n-1$ divisor** | [prob-stat-refresher 4.4](courses/prob-stat-refresher/lessons/04-04-sampling-distributions-t-and-chi-square.md) |

Each one also retargeted the "no course teaches this" rows that pointed at it —
statics, mechanics-refresher, em-refresher, engineering-dynamics and calc-refresher
for the cross product; algebra-foundations, linalg-refresher and ode-refresher for
complex numbers; precalculus for polynomial division.

**Triangle angle sum and the special-triangle ratios** remain on the geometry card
only — the geometry course uses them from 2.1 onward and no lesson states them.

**Later, but real:** order statistics (game-theory 3.2, grad-game-theory) · LP
duality (grad-game-theory) · Larmor radiation (quantum-mechanics 1.1) · Landau
levels (condensed-matter 5.6) · magnetic vector potential (relativity 3.5) ·
Arzelà–Ascoli (functional-analysis 4.2) · the Ergun equation (reaction-engineering
2.4) · the TOV equation (astrophysics 4.2) · Saha ionization and the Thomson
cross-section (astrophysics) · structure of f.g. abelian groups (algebraic-topology)
· Ext/Hom and the snake lemma (algebraic-topology) · the matrix exponential
(representation-theory 4.2) · Noether normalization, Nakayama, Gröbner bases
(algebraic-geometry) · the Jordan curve theorem (dynamical-systems 2.4) ·
Kolmogorov extension (stochastic-calculus 1.1) · sum-to-product identities
(waves-optics 2.3) · the cold-plasma dielectric tensor (plasma-physics 4.1) ·
Stirling and the standard Gaussian/ζ integrals (stat-mech, used constantly).

**Prereq edges — declared (2026-08-20).** `roadmap.json` and `ROADMAP.md` now carry
the Foundations chain the lessons actually depend on: arithmetic → algebra →
geometry → trigonometry → precalculus → {calc-refresher, linalg-refresher}, plus
discrete-math-intro → {proofs-primer, discrete-mathematics} and algebra →
general-chemistry. Verified acyclic; calc-refresher ↔ linalg-refresher is
deliberately left undeclared in both directions, since each card cites the other.
A "Locked" card is now dimmed but still readable — the edges describe intended
order, not permission. `lessons_estimate` was also reconciled with the real lesson
count for every built course (11 were stale).
