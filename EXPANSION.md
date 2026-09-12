# Library Expansion Plan

A phased plan for growing the library from ~36 math/physics/econ courses into a
field-segmented STEM library. This is the **build queue** — pull from it "from
time to time." Check boxes as courses are stood up. No syllabi are written until
a course's phase comes up.

**Priority order (Jacob, Aug 2026):** Fields **1, 2, 4, 6** first, then most of
the rest. Political economy / philosophy and the theology track are deferred.

---

## The field layer

Today the library is organized by **tier** only (0 → 1 → 2). As it grows past a
handful of subjects, **field** becomes the primary shelf and tier becomes the
difficulty axis *within* a field. This is a small, additive schema change.

**Fields:**

| # | Field | Status |
|---|---|---|
| 1 | Foundations | new — **priority** |
| 2 | Mathematics | large existing base — **priority** for expansion |
| 3 | Computer Science & Computation | new |
| 4 | Physics | large existing base — **priority** for expansion |
| 5 | Chemistry | new |
| 6 | Engineering | new — **priority** (nuclear = flagship) |
| 7 | Earth, Atmosphere & Space | new |
| 8 | Life Sciences | new |
| 9 | Economics, Finance & Quant Social | existing |
| 10 | Humanities | existing — deferred |

**Existing 36 courses → field assignment** (applied in Phase 0):

- **Mathematics:** proofs-primer, calc-refresher, linalg-refresher, ode-refresher,
  prob-stat-refresher, probability-theory, real-analysis, complex-analysis,
  topology, pdes, functional-analysis, differential-geometry, abstract-algebra,
  dynamical-systems, stochastic-calculus, information-theory, representation-theory
- **Physics:** mechanics-refresher, em-refresher, analytical-mechanics,
  quantum-mechanics, stat-mech, relativity, astrophysics, qft, fluid-dynamics
- **Economics/Finance:** game-theory-refresher, micro-refresher, grad-game-theory,
  grad-micro, grad-macro, econometrics, mathematical-finance, statistical-learning
- **Humanities:** political-philosophy, political-economy

---

## Phase 0 — Formalize the field layer (infrastructure, no lessons)

One session. Do this **before** adding new courses so everything lands in the
right shelf from the start.

- [x] Add a `"field"` key to every course object in [roadmap.json](roadmap.json)
      (36 existing + all new as they're added).
- [x] Restructure [ROADMAP.md](ROADMAP.md) so courses group under field headings
      (keep the tier column). Keep the two files in sync (per CLAUDE.md).
- [x] Add a `> Field · <name>` line to the syllabus header block (template + a
      one-time backfill of existing syllabi). *(template + new Foundations syllabi
      carry it; existing 36 syllabi not yet backfilled — cosmetic, header line only.)*
- [x] Update the web app **Library** page (`public/app.js`) to group by
      field, with tier as a sub-sort. Progress schema unchanged.

*Estimate: ~1 sitting. Pure infra — no `/prep`, no API cost.*

---

## Build queue (priority fields first)

Lesson estimates use the house scale: **F** ≈ 6–8, **Tier 0** ≈ 10–12,
**Tier 1** ≈ 16–24, **Tier 2** ≈ 20–34. Every course below has its prerequisites
**already satisfied** by the existing library unless noted. Per-course flow:
`/new-course <id>` (writes the syllabus) → `/prep <id>` (fans out all lessons).

### Phase 1 — Foundations (Field 1) · 6 courses · ~51 lessons

The bottom of the ladder. No prereqs; fast to build; completes the on-ramp below
Tier 0.

- [x] `arithmetic-number-sense` — Arithmetic & Number Sense (F, 8) — **lessons ✓** (prepped 2026-08-04)
- [x] `algebra-foundations` — Algebra I & II (F, 12) — **lessons ✓** (prepped 2026-08-04)
- [x] `geometry` — Euclidean Geometry (F, 11) — **lessons ✓** (prepped 2026-08-04; 11 SVG figures)
- [x] `trigonometry` — Trigonometry (F, 8) — **lessons ✓** (prepped 2026-08-04; 8 SVG figures, dark-on-paper)
- [x] `precalculus` — Precalculus (F, 12) — **lessons ✓** (prepped 2026-08-04; 11 SVG figures + limits doorway)
- [x] `discrete-math-intro` — Discrete Math for Beginners (F, 8) — **lessons ✓** (prepped 2026-08-04; 7 SVG + truth tables)

### Phase 2 — Mathematics expansion (Field 2) · 8 courses · ~124 lessons

Prereqs met by proofs-primer / calc / linalg / real-analysis ✓.

- [x] `discrete-mathematics` — Discrete Mathematics (0, 16) — **lessons ✓** (prepped 2026-08-04; 9 SVG + 7 worked instances)
- [x] `number-theory` — Number Theory (1, 19) — **lessons ✓** (prepped 2026-08-04; 4 SVG + 15 worked instances)
- [~] `graph-theory` — Graph Theory (1, 18) — syllabus ✓, lessons pending
- [~] `combinatorics` — Enumerative & Algebraic Combinatorics (1, 15) — syllabus ✓, lessons pending
- [~] `numerical-analysis` — Numerical Analysis (1, 23) — syllabus ✓, lessons pending
- [~] `convex-optimization` — Convex Optimization (1, 18) — syllabus ✓, lessons pending
- [~] `fourier-analysis` — Fourier & Harmonic Analysis (1, 14) — syllabus ✓, lessons pending
- [~] `mathematical-logic` — Logic & Set Theory (1, 18) — syllabus ✓, lessons pending

### Phase 3 — Physics breadth (Field 4) · 9 courses · ~190 lessons

*Wave A* needs only calc/ode ✓; *Wave B* needs quantum-mechanics / stat-mech ✓.

- [x] `waves-optics` — Waves & Optics (0, 14) — **lessons ✓** (14)
- [x] `thermodynamics-physics` — Classical Thermodynamics (0, 11) — **lessons ✓** (11)
- [x] `mathematical-methods-physics` — Mathematical Methods for Physics (1, 21) — **lessons ✓** (21)
- [x] `nuclear-particle-physics` — Nuclear & Particle Physics (2, 25) — **lessons ✓** (25)
- [x] `condensed-matter` — Condensed Matter / Solid State (2, 28) — **lessons ✓** (28)
- [x] `plasma-physics` — Plasma Physics (2, 22) — **lessons ✓** (22) → **unlocks fusion in Phase 5**
- [x] `biophysics` — Biophysics (2, 21) — **lessons ✓** (21)
- [x] `photonics-quantum-optics` — Quantum Optics & Photonics (2, 20) — **lessons ✓** (prepped 2026-08-10, 20)

**Physics breadth complete** (2026-08-10): all 8 remaining Phase-3 physics courses are prepped. Together with `cosmology` (Phase 9, prepped 2026-08-10) this closes the physics track.

### Phase 4 — Engineering core (Field 6, Shelf A) · 7 courses · ~116 lessons

The shared engineering foundation. Prereqs met by calc / ode / mechanics ✓.
**Gates the nuclear and breadth shelves below.**

- [x] `statics` — Statics (0, ~10) — **lessons ✓** (prepped 2026-08-20, 15 lessons)
- [x] `engineering-dynamics` — Dynamics (0, ~12) — **lessons ✓** (prepped 2026-08-20, 13 lessons)
- [x] `mechanics-of-materials` — Mechanics of Materials (1, ~18) — **lessons ✓** (prepped 2026-08-14, 18) → unlocks structural-analysis
- [x] `engineering-thermodynamics` — Engineering Thermodynamics (1, ~18) — **lessons ✓** (prepped 2026-08-14, 19)
- [x] `heat-transfer` — Heat Transfer (1, ~18) — **lessons ✓** (prepped 2026-08-14, 19) → unblocks reactor thermal-hydraulics
- [x] `control-systems` — Control Systems (1, ~20) — **lessons ✓** (prepped 2026-08-20, 22 lessons) → unblocks `robotics`
- [x] `signals-systems` — Signals & Systems (1, ~20) — **lessons ✓** (prepped 2026-08-20, 21 lessons) → unblocks `communications`

### Phase 5 — Nuclear Engineering flagship (Field 6, Shelf B) · 7 courses · ~144 lessons

The headline new field. Internal ordering matters. External prereqs: heat-transfer
(Phase 4), plasma-physics (Phase 3), and materials-science (build early in Phase 6,
or fold a light version in). Build `intro-nuclear-engineering` **first**.

- [x] `intro-nuclear-engineering` — Intro to Nuclear Engineering & Radiation (1, ~18) — **lessons ✓** (prepped 2026-08-20, 18 lessons)
- [x] `reactor-physics` — Reactor Physics & Neutron Transport (2, ~24) *(needs intro + pdes ✓)* — **lessons ✓** (prepped 2026-08-20, 25 lessons)
- [x] `reactor-thermal-hydraulics` — Reactor Thermal-Hydraulics (2, ~22) — **lessons ✓** (prepped 2026-08-14, 22) → **completes the nuclear flagship (all 7 nuclear courses done)**
- [x] `nuclear-materials` — Nuclear Materials (2, ~20) — **lessons ✓** (prepped 2026-08-13, 21) → **completes the nuclear shelf**
- [x] `radiation-detection-shielding` — Radiation Detection & Shielding (2, ~20) — **lessons ✓** (prepped 2026-08-20, 20 lessons)
- [x] `fusion-plasma` — Fusion & Plasma Engineering (2, ~22) *(needs plasma-physics)* — **lessons ✓** (prepped 2026-08-20, 22 lessons)
- [x] `nuclear-fuel-cycle` — Nuclear Fuel Cycle & Policy (2, ~18) — **lessons ✓** (prepped 2026-08-20, 19 lessons)

### Phase 6 — Engineering breadth (Field 6, Shelves C & D) · 15 courses · ~350 lessons — **COMPLETE (2026-08-25)**

Build `materials-science` early (it back-fills Phase 5's `nuclear-materials`).

- [x] `materials-science` — Materials Science & Engineering (1, ~18) — **lessons ✓** (prepped 2026-08-13, 19)
- [x] `circuits` — Circuit Analysis (0, ~12) — **lessons ✓** (prepped 2026-08-20, 14 lessons)
- [x] `electronics` — Electronics & Semiconductors (1, ~18) — **lessons ✓** (prepped 2026-08-20, 18 lessons) → unblocks `semiconductor-devices`
- [x] `digital-logic` — Digital Logic Design (1, ~16) — **lessons ✓** (prepped 2026-08-20, 17 lessons) → unblocks `computer-architecture` (CS)
- [x] `communications` — Communication Systems (2, ~22) *(bridges information-theory ✓)* — **lessons ✓** (prepped 2026-08-25, 22)
- [x] `power-systems` — Power Systems (2, ~22) — **lessons ✓** (prepped 2026-08-25, 21)
- [x] `semiconductor-devices` — Semiconductor Devices (2, ~20) — **lessons ✓** (prepped 2026-08-25, 19)
- [x] `structural-analysis` — Structural Analysis (1, ~18) — **lessons ✓** (prepped 2026-08-14, 18) → **completes the mechanical spine (Block 2)**
- [x] `aerodynamics` — Aerodynamics (2, ~22) *(needs fluid-dynamics ✓)* — **lessons ✓** (prepped 2026-08-25, 19)
- [x] `orbital-mechanics` — Astrodynamics (2, ~20) *(bridges astrophysics ✓)* — **lessons ✓** (prepped 2026-08-25, 20)
- [x] `propulsion` — Propulsion (2, ~20) — **lessons ✓** (prepped 2026-08-25, 19)
- [x] `robotics` — Robotics & Kinematics (2, ~22) *(needs control-systems + linalg ✓)* — **lessons ✓** (prepped 2026-08-25, 22)
- [x] `transport-phenomena` — Transport Phenomena (2, ~24) — **lessons ✓** (prepped 2026-08-14, 25) → Block 3 (thermal/fluids) started
- [x] `reaction-engineering` — Chemical Reaction Engineering (2, ~22) — **lessons ✓** (prepped 2026-08-14, 23)
- [x] `operations-research` — Operations Research (1, ~18) — **lessons ✓** (prepped 2026-08-20, 16 lessons; syllabus trimmed 20→16 to defer LP/duality theory to `convex-optimization` and network algorithms to `graph-theory`)

---

## Later phases ("most of the rest")

Lower priority but on the map. Sequenced so each field's roots come first.

### Phase 7 — Computer Science (Field 3) · ~16 courses

Mostly prereq-light; a strong greenfield. Pedagogy is settled in `CS-BUILD-BRIEF.md` —
CS is taught **analytically** against six problem archetypes, because the platform runs no code.

**Status (2026-09-11): 13 of 16 built.** Done: `programming-foundations` (15), `algorithms` (20),
`theory-of-computation` (16), `computer-architecture` (20), `operating-systems` (20),
`computer-networks` (16), `databases` (25), `machine-learning` (23), `distributed-systems` (25),
`cryptography` (21), `deep-learning` (22), `quantum-computing` (**34** — syllabus deepened from 20
at Jacob's request; see the revision note in its syllabus), `computational-complexity` (**28** —
syllabus rebuilt from 18; the original taught no hierarchy theorems despite two courses promising
them, four lessons restated `algorithms` Module 4, and counting and fine-grained complexity were
absent entirely. See the revision note in its syllabus). Remaining, all with prerequisites already
built so none is blocked: `programming-languages` (21), `reinforcement-learning` (21),
`computer-graphics` (20).

`programming-foundations` (0) → `algorithms` (1) → `theory-of-computation` (1),
`computer-architecture` (1), `operating-systems` (1), `computer-networks` (1),
`databases` (1), `computational-complexity` (2), `programming-languages` (2),
`cryptography` (2), `distributed-systems` (2), `machine-learning` (2),
`deep-learning` (2), `reinforcement-learning` (2), `computer-graphics` (2),
`quantum-computing` (2) *(bridges quantum-mechanics ✓)*.

### Phase 8 — Chemistry (Field 5) · ~9 courses

Root is `general-chemistry`; physical/quantum chem lean on quantum-mechanics ✓.

**In progress (2026-08-10):** building the field in dependency order — done so far: `general-chemistry` **lessons ✓** (16), `organic-chemistry` **lessons ✓** (23), `physical-chemistry` **lessons ✓** (24), `inorganic-chemistry` **lessons ✓** (18), `analytical-chemistry` **lessons ✓** (17), `quantum-chemistry` **lessons ✓** (21), `electrochemistry` **lessons ✓** (18). **All 9 chemistry courses done (176 lessons)** — `biochemistry` (21) and `polymer-chemistry` (18) completed the field. Note: the study app now loads the KaTeX **mhchem** extension (`\ce{}`) — enabled 2026-08-10 for the chemistry field, verified rendering in-app.

`general-chemistry` (0) → `organic-chemistry` (1) → `physical-chemistry` (2),
`quantum-chemistry` (2), `inorganic-chemistry` (1), `analytical-chemistry` (1),
`biochemistry` (2), `electrochemistry` (2), `polymer-chemistry` (2).

### Phase 9 — Earth/Space (Field 7) + Life Sciences (Field 8) · ~16 courses

Earth/Space: `geology` (0), `atmospheric-science` (1), `geophysics` (2),
`climate-science` (2), `oceanography` (2), `planetary-science` (2),
`cosmology` (2, deep dive past astrophysics ✓) — **lessons ✓** (prepped 2026-08-10, 20).

Life: `general-biology` (0) — **lessons ✓** (prepped 2026-08-25, 17) → unblocks
`molecular-cell-biology` (1), `genetics` (1), `evolution-ecology` (1),
`physiology` (1); then `neuroscience` (2), `systems-biology` (2), `immunology` (2)
behind molecular-cell-biology. `computational-biology` (2) also needs `algorithms`,
which is in the deferred CS field, so it stays blocked for now.

### Phase 10 — Deferred / fill-in

Math Tier 2: `measure-theory`, `algebraic-topology`, `algebraic-geometry`,
`category-theory`. Econ extras: `time-series`, `industrial-organization`,
`behavioral-economics`, `market-design`. Humanities/theology track + resume
political-economy / political-philosophy. Philosophy of science, ethics &
decision theory.

---

## Scale & cadence

- **Total new candidate courses:** ~90 across all phases; **priority fields 1/2/4/6
  alone: ~52 courses, ~975 lessons.** This is a multi-year library — the point is
  a queue you draw from, not a deadline.
- **Unit of progress:** one course = one `/prep` session (fan-out subagents per the
  prep workflow). A phase is a themed batch you finish over several sittings.
- **Cost:** `/prep` and `/new-course` are Claude Code content generation, covered by
  the subscription. No per-course API estimate needed. (App-side graded practice
  still bills the API as usual.)
- **Suggested rhythm:** finish Phase 0 once; then knock out Phase 1 (fast, no
  prereqs) to prove the field-layer end to end in the app; then work Phases 2→6 in
  order, picking whichever course in the current phase you're most curious about.

## Progress

- **Phase 0 — complete (2026-08-04):** field layer live. `field` on all 42 courses in
  roadmap.json; ROADMAP.md regrouped by field; syllabus template carries the Field header;
  the app Library shelves by field with tier tags. (Existing 36 syllabi headers not backfilled
  — cosmetic only.)
- **Phase 1 — syllabi written (2026-08-04):** all 6 Foundations syllabi generated, validated,
  and registered in progress.json (status `available`).
- **Phase 1 — LESSONS PREPPED (2026-08-04): all 6 Foundations courses fully built** (arithmetic 8,
  algebra 12, geometry 11, trig 8, precalculus 12, discrete-intro 8 = **59 lesson files** with SVG
  figures, flashbacks, and full worked solutions). Also shipped a CSS fix (`.md img` on a light
  "paper" card) so SVG figures stay legible in both themes + print. **Phase 1 is done.**
- **Phase 2 — syllabi written (2026-08-04):** all 8 Mathematics-expansion syllabi generated,
  validated, and registered (~141 lessons planned).
- **Phase 3 — syllabi written (2026-08-04):** all 9 Physics-breadth syllabi generated,
  validated, and registered (~179 lessons planned).
- **Phases 4–9 + Phase-10 math — syllabi written (2026-08-04):** all 74 remaining STEM
  syllabi generated, validated, and registered — Engineering (29, incl. the nuclear shelf),
  Computer Science (16), Chemistry (9), Earth & Space (6), cosmology (Physics, 1),
  Life Sciences (9), Mathematics Tier-2 (4). ~1,449 lessons planned.
- **Library now holds 132 courses across 10 fields** (Foundations 6, Mathematics 29,
  Computer Science 16, Physics 18, Chemistry 9, Engineering 29, Earth & Space 6,
  Life Sciences 9, Economics & Finance 8, Humanities 2). Every course has a syllabus.
- **Lessons built: 97 of 132 courses, 1,899 lessons (2026-08-25).** All four priority
  fields are finished — Foundations, Mathematics, Physics, and Engineering (Phase 6 closed 2026-08-25). Chemistry is finished too.
  Remaining: Computer Science 16, Life Sciences 9, Earth & Space 6, Economics 2,
  Humanities 2 (deferred) — about 709 lessons.
- **Still deferred** (Phase-10 non-STEM): econ extras (time-series, IO, behavioral,
  market-design), humanities/theology, philosophy of science, ethics & decision theory.
- **Next (2026-08-25):** the priority fields are done, so the queue moves to
  "most of the rest." Two coherent blocks, each with a single root that unblocks
  the field:
  - **Phase 7 — Computer Science** (16 courses, ~312 lessons). Root:
    `programming-foundations`, which alone unblocks 5 more. Then `algorithms`,
    `theory-of-computation`, `computer-architecture` (already unblocked by
    `digital-logic` ✓). `machine-learning` and `quantum-computing` are unblocked
    right now and could jump the queue.
  - **Phase 9 Life half — Life Sciences** (9 courses, ~172 lessons). Root:
    `general-biology` → `molecular-cell-biology`, which between them unblock the
    whole field.
  - Smaller fill-ins that are unblocked today: `geology`, `atmospheric-science`,
    `planetary-science` (Earth & Space); `econometrics`, `statistical-learning`
    (Economics).
