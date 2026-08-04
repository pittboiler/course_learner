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

- [~] `arithmetic-number-sense` — Arithmetic & Number Sense (F, 8) — syllabus ✓, lessons pending
- [~] `algebra-foundations` — Algebra I & II (F, 12) — syllabus ✓, lessons pending
- [~] `geometry` — Euclidean Geometry (F, 11) — syllabus ✓, lessons pending
- [~] `trigonometry` — Trigonometry (F, 8) — syllabus ✓, lessons pending
- [~] `precalculus` — Precalculus (F, 12) — syllabus ✓, lessons pending
- [~] `discrete-math-intro` — Discrete Math for Beginners (F, 8) — syllabus ✓, lessons pending

### Phase 2 — Mathematics expansion (Field 2) · 8 courses · ~124 lessons

Prereqs met by proofs-primer / calc / linalg / real-analysis ✓.

- [~] `discrete-mathematics` — Discrete Mathematics (0, 16) — syllabus ✓, lessons pending
- [~] `number-theory` — Number Theory (1, 19) — syllabus ✓, lessons pending
- [~] `graph-theory` — Graph Theory (1, 18) — syllabus ✓, lessons pending
- [~] `combinatorics` — Enumerative & Algebraic Combinatorics (1, 15) — syllabus ✓, lessons pending
- [~] `numerical-analysis` — Numerical Analysis (1, 23) — syllabus ✓, lessons pending
- [~] `convex-optimization` — Convex Optimization (1, 18) — syllabus ✓, lessons pending
- [~] `fourier-analysis` — Fourier & Harmonic Analysis (1, 14) — syllabus ✓, lessons pending
- [~] `mathematical-logic` — Logic & Set Theory (1, 18) — syllabus ✓, lessons pending

### Phase 3 — Physics breadth (Field 4) · 9 courses · ~190 lessons

*Wave A* needs only calc/ode ✓; *Wave B* needs quantum-mechanics / stat-mech ✓.

- [~] `waves-optics` — Waves & Optics (0, 14) — syllabus ✓, lessons pending
- [~] `thermodynamics-physics` — Classical Thermodynamics (0, 11) — syllabus ✓, lessons pending
- [~] `mathematical-methods-physics` — Mathematical Methods for Physics (1, 21) — syllabus ✓, lessons pending
- [~] `computational-physics` — Computational Physics (1, 17) — syllabus ✓, lessons pending
- [~] `nuclear-particle-physics` — Nuclear & Particle Physics (2, 25) — syllabus ✓, lessons pending
- [~] `condensed-matter` — Condensed Matter / Solid State (2, 28) — syllabus ✓, lessons pending
- [~] `plasma-physics` — Plasma Physics (2, 22) — syllabus ✓, lessons pending → **unlocks fusion in Phase 5**
- [~] `biophysics` — Biophysics (2, 21) — syllabus ✓, lessons pending
- [~] `photonics-quantum-optics` — Quantum Optics & Photonics (2, 20) — syllabus ✓, lessons pending

### Phase 4 — Engineering core (Field 6, Shelf A) · 7 courses · ~116 lessons

The shared engineering foundation. Prereqs met by calc / ode / mechanics ✓.
**Gates the nuclear and breadth shelves below.**

- [ ] `statics` — Statics (0, ~10)
- [ ] `engineering-dynamics` — Dynamics (0, ~12)
- [ ] `mechanics-of-materials` — Mechanics of Materials (1, ~18)
- [ ] `engineering-thermodynamics` — Engineering Thermodynamics (1, ~18)
- [ ] `heat-transfer` — Heat Transfer (1, ~18) → **needed by reactor thermal-hydraulics**
- [ ] `control-systems` — Control Systems (1, ~20)
- [ ] `signals-systems` — Signals & Systems (1, ~20)

### Phase 5 — Nuclear Engineering flagship (Field 6, Shelf B) · 7 courses · ~144 lessons

The headline new field. Internal ordering matters. External prereqs: heat-transfer
(Phase 4), plasma-physics (Phase 3), and materials-science (build early in Phase 6,
or fold a light version in). Build `intro-nuclear-engineering` **first**.

- [ ] `intro-nuclear-engineering` — Intro to Nuclear Engineering & Radiation (1, ~18)
- [ ] `reactor-physics` — Reactor Physics & Neutron Transport (2, ~24) *(needs intro + pdes ✓)*
- [ ] `reactor-thermal-hydraulics` — Reactor Thermal-Hydraulics (2, ~22) *(needs heat-transfer + fluid-dynamics ✓)*
- [ ] `nuclear-materials` — Nuclear Materials (2, ~20) *(needs materials-science)*
- [ ] `radiation-detection-shielding` — Radiation Detection & Shielding (2, ~20)
- [ ] `fusion-plasma` — Fusion & Plasma Engineering (2, ~22) *(needs plasma-physics)*
- [ ] `nuclear-fuel-cycle` — Nuclear Fuel Cycle & Policy (2, ~18)

### Phase 6 — Engineering breadth (Field 6, Shelves C & D) · 15 courses · ~350 lessons

Build `materials-science` early (it back-fills Phase 5's `nuclear-materials`).

- [ ] `materials-science` — Materials Science & Engineering (1, ~18)
- [ ] `circuits` — Circuit Analysis (0, ~12)
- [ ] `electronics` — Electronics & Semiconductors (1, ~18)
- [ ] `digital-logic` — Digital Logic Design (1, ~16)
- [ ] `communications` — Communication Systems (2, ~22) *(bridges information-theory ✓)*
- [ ] `power-systems` — Power Systems (2, ~22)
- [ ] `semiconductor-devices` — Semiconductor Devices (2, ~20)
- [ ] `structural-analysis` — Structural Analysis (1, ~18)
- [ ] `aerodynamics` — Aerodynamics (2, ~22) *(needs fluid-dynamics ✓)*
- [ ] `orbital-mechanics` — Astrodynamics (2, ~20) *(bridges astrophysics ✓)*
- [ ] `propulsion` — Propulsion (2, ~20)
- [ ] `robotics` — Robotics & Kinematics (2, ~22) *(needs control-systems + linalg ✓)*
- [ ] `transport-phenomena` — Transport Phenomena (2, ~24)
- [ ] `reaction-engineering` — Chemical Reaction Engineering (2, ~22)
- [ ] `operations-research` — Operations Research (1, ~18)

---

## Later phases ("most of the rest")

Lower priority but on the map. Sequenced so each field's roots come first.

### Phase 7 — Computer Science (Field 3) · ~16 courses

Mostly prereq-light; a strong greenfield.

`programming-foundations` (0) → `algorithms` (1) → `theory-of-computation` (1),
`computer-architecture` (1), `operating-systems` (1), `computer-networks` (1),
`databases` (1), `computational-complexity` (2), `programming-languages` (2),
`cryptography` (2), `distributed-systems` (2), `machine-learning` (2),
`deep-learning` (2), `reinforcement-learning` (2), `computer-graphics` (2),
`quantum-computing` (2) *(bridges quantum-mechanics ✓)*.

### Phase 8 — Chemistry (Field 5) · ~9 courses

Root is `general-chemistry`; physical/quantum chem lean on quantum-mechanics ✓.

`general-chemistry` (0) → `organic-chemistry` (1) → `physical-chemistry` (2),
`quantum-chemistry` (2), `inorganic-chemistry` (1), `analytical-chemistry` (1),
`biochemistry` (2), `electrochemistry` (2), `polymer-chemistry` (2).

### Phase 9 — Earth/Space (Field 7) + Life Sciences (Field 8) · ~16 courses

Earth/Space: `geology` (0), `atmospheric-science` (1), `geophysics` (2),
`climate-science` (2), `oceanography` (2), `planetary-science` (2),
`cosmology` (2, deep dive past astrophysics ✓).

Life: `general-biology` (0), `molecular-cell-biology` (1), `genetics` (1),
`evolution-ecology` (1), `physiology` (1), `neuroscience` (2),
`computational-biology` (2), `systems-biology` (2), `immunology` (2).

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
- **Phase 2 — syllabi written (2026-08-04):** all 8 Mathematics-expansion syllabi generated,
  validated, and registered (~141 lessons planned).
- **Phase 3 — syllabi written (2026-08-04):** all 9 Physics-breadth syllabi generated,
  validated, and registered (~179 lessons planned).
- **Phases 4–9 + Phase-10 math — syllabi written (2026-08-04):** all 74 remaining STEM
  syllabi generated, validated, and registered — Engineering (29, incl. the nuclear shelf),
  Computer Science (16), Chemistry (9), Earth & Space (6), cosmology (Physics, 1),
  Life Sciences (9), Mathematics Tier-2 (4). ~1,449 lessons planned.
- **Library now holds 133 courses across 10 fields** (Foundations 6, Mathematics 29,
  Computer Science 16, Physics 19, Chemistry 9, Engineering 29, Earth & Space 6,
  Life Sciences 9, Economics & Finance 8, Humanities 2). Every course has a syllabus;
  **none have lessons yet.**
- **Still deferred** (Phase-10 non-STEM): econ extras (time-series, IO, behavioral,
  market-design), humanities/theology, philosophy of science, ethics & decision theory.
- **Next:** `/prep` any standing course to build its lessons. Suggested first builds:
  Foundations (fast), then `algebra-foundations` → the refresher spine, or dive into the
  `intro-nuclear-engineering` → nuclear shelf once its physics prereqs are prepped.
