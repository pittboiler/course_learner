# Computer Science field — build brief

Written 2026-09-01, after finishing `planetary-science`. This exists because the CS
field raises a pedagogical question the other nine fields did not, and the answer
should be settled once and recorded rather than re-derived per course.

## The question

The platform's practice model is 2–3 pencil-and-paper problems per lesson, self-graded
from a `<details>` block in the web app, or graded conversationally by `/learn` (which
accepts photos of handwritten work). **There is no code execution anywhere in the stack** —
no REPL, no test runner, no sandbox.

Jacob's objection, and it is a fair one: drilling "write the implementation" is low-value
now, because that is precisely what LLMs commoditized.

## The answer

**Teach CS analytically. Practice judgement, not production.**

LLMs commoditized *producing* an implementation. They made *judging* one considerably more
valuable — you now read far more code you did not write than code you did, and the binding
skill is spotting the accidental quadratic, the race, the greedy that is subtly wrong, the
missing index. That is analysis, it is pencil-and-paper, and it is what this platform is
already good at.

This is not a retrofit. The syllabi already assume it. `algorithms` opens:

> "Learn to design an algorithm, *prove* it correct, and *prove* how fast it runs — the
> three moves that separate an algorithmist from a coder... Code is language-agnostic
> pseudocode; the point is always the idea, not the syntax."

and its Boss problem 1 is "solve three recurrences with the master theorem, then prove no
comparison sort beats $n\log n$" — the register of a physics lesson. `programming-foundations`
likewise "deliberately skips language-specific syntax."

## Six problem archetypes

Every CS problem should be one of these. None requires running code.

1. **Cost derivation** — recurrences, amortized bounds, cache-miss and capacity math.
   Structurally identical to a physics problem.
2. **Hand-trace** — run Dijkstra and show the heap after each pop; insert into a B-tree and
   draw the split. Unique correct answers; the SVG convention already draws graphs and trees.
3. **Counterexample construction** — "this greedy is wrong, break it." Highest-value and the
   hardest to fake.
4. **Proof and invariant** — exchange arguments, loop invariants, termination. Handwritten,
   photographed, graded by `/learn`.
5. **Reduction and impossibility** — 3-SAT reductions, undecidability, FLP, CAP. Knowing what
   *cannot* be done is where LLMs are weakest and the time saved is largest.
6. **Design under constraint** — "1B rows at 200 bytes, 10K QPS: does it fit in RAM, and what
   breaks first?" Back-of-envelope with a defensible answer.

Worked example of the shift. Not *"implement interval scheduling"* but:

> Here's a greedy that picks the shortest interval first. Construct a three-interval
> counterexample where it loses to optimal, then state the exchange argument that makes
> earliest-finish-time correct.

Verifiable, about five minutes, and not something you would hand to an LLM without already
knowing the answer.

## Fit varies — re-scope where it is weak

| fit | courses |
|---|---|
| **Strong** (analysis-native) | theory-of-computation, algorithms, computational-complexity, cryptography, quantum-computing, machine-learning, computer-architecture |
| **Good** (mostly analytical) | databases (query plans, normalization, serializability schedules), computer-networks (window math, protocol traces), distributed-systems (impossibility results, quorum math), programming-languages (type derivations and operational semantics *are* proof trees), deep-learning (backprop by hand, initialization scaling) |
| **Weak — needs deliberate re-scoping** | `programming-foundations` 1.1–1.3 (genuinely about writing and tracing code), `operating-systems` mechanism-description lessons, `computer-graphics` shader work |

For the weak cases, prefer hand-tracing and cost reasoning over description, and say so in a
dated syllabus revision note if the module structure changes.

## Build order

**Phase 1 — pilot: `theory-of-computation` (16 lessons).** Unblocked today
(`discrete-mathematics` is built). The purest case: automata, the pumping lemma,
undecidability — a math course wearing a CS hat. If the practice model feels wrong here it
will be wrong everywhere, and you have spent 16 lessons finding out. **Stop after this and
report before continuing.**

**Phase 2 — `algorithms` (20).** Cited **153 times across 34 built courses**, by far the
largest dangling-reference debt in the library, and the gate on `cryptography`,
`programming-languages` and `computational-biology`.

Note the prereq graph loosens under this framing. `algorithms` lists `programming-foundations`
for "coding fluency," but a pseudocode-and-proofs course leans on `discrete-mathematics`
(built) instead. **`algorithms` may jump ahead of the root.**

**Phase 3 — the rest.** Also unblocked right now without the root: `computer-architecture`
(needs `digital-logic` ✓), `machine-learning` (`linalg-refresher`, `prob-stat-refresher`,
`convex-optimization` ✓), `quantum-computing` (`linalg-refresher`, `quantum-mechanics` ✓).

Full field: 16 courses, ~312 lessons.

| tier | course | est |
|---|---|---|
| 0 | programming-foundations | 15 |
| 1 | algorithms | 20 |
| 1 | computer-architecture | 20 |
| 1 | computer-networks | 16 |
| 1 | databases | 19 |
| 1 | operating-systems | 20 |
| 1 | theory-of-computation | 16 |
| 2 | computational-complexity | 18 |
| 2 | computer-graphics | 20 |
| 2 | cryptography | 21 |
| 2 | deep-learning | 22 |
| 2 | distributed-systems | 25 (built 2026-09-10; syllabus extended from 20) |
| 2 | machine-learning | 23 |
| 2 | programming-languages | 21 |
| 2 | quantum-computing | 20 |
| 2 | reinforcement-learning | 21 |

## Two things to handle before the first lesson ships

1. **The app has no `.md pre` styling.** Verified in-browser: `<pre>` renders monospace but
   with a transparent background and `overflow-x: visible`, so a wide pseudocode block will
   spill out of the layout on the iPad. Add something like
   `.md pre { background: var(--bg); padding: 10px 12px; border-radius: 6px; overflow-x: auto; }`
   to `public/styles.css` near the existing `.md code` rule (~line 140), and bump the
   `CACHE` version in `public/service-worker.js`. Verify with a long pseudocode line.

2. **`machine-learning` and `statistical-learning` overlap heavily**, and
   `statistical-learning` (Economics & Finance, unbuilt, cited 84 times across 9 courses) is
   also in the queue. Declare the split **before** building either, per the one-owner rule —
   roughly, statistical-learning owns inference and theory, machine-learning owns methods and
   engineering. Put it in both syllabi's scope tables.

## Flexibility

The archetypes and the analytical framing are the fixed part. Everything else is adjustable
and *should* be adjusted where a course argues for it:

- Re-scope a syllabus if a module fights the format — extend, split or re-aim it, and record
  the change in a dated revision note at the foot of the syllabus (the `geology` and
  `atmospheric-science` precedent).
- Vary the archetype mix per course. `theory-of-computation` will be mostly proofs and
  reductions; `computer-architecture` mostly cost derivation; `databases` mostly hand-trace.
- If a lesson genuinely needs a code fence, use one — 31 built lessons already do, and they
  render — but keep it pseudocode and keep lines short until the CSS fix above is in.
- **Report what the format could not absorb.** If some topic resists analytical treatment,
  say so plainly rather than padding it; that is a finding, not a failure.
