---
name: prep
description: Pre-generate the next batch of lessons for a course so the web app always has content ready. Use when Jacob says /prep, "generate the next module", or "stock up lessons".
---

# /prep [course-id] [n]

Batch-generate upcoming lessons (default: the rest of the current module) so Jacob can read them in the web app without a Claude session. Read CLAUDE.md conventions first if not already in context.

1. Read `progress/progress.json` and the course syllabus. Determine which upcoming lessons have no file yet in `courses/<id>/lessons/`. Default to the remainder of the current module; honor an explicit count `n`.
2. Before writing, check recent `weak_concepts` — adapt as `/learn` would. Lessons generated further ahead adapt less; that's the accepted trade-off of prepping.
3. Generate each lesson file (template + conventions in CLAUDE.md, verified solutions, SVG assets, flashbacks referencing earlier lessons). Since the web app has no chat, prepped lessons must be fully self-contained: solutions complete in the `<details>` blocks, no "we'll do this together" phrasing.
4. **Update the course's reference card** (`courses/<id>/reference.md`) in the same run — the card must cover every lesson that now exists. Follow `templates/reference-template.md`; add any new definitions, formulas, notation and pitfalls, and add any prerequisite the new lessons *use without deriving* to "Assumed, not taught here". Be idempotent: dedupe by `###` heading, don't append a second copy of an entry that's already there. If the course has no card yet, write one covering all its lessons.
5. Run `node lint-lessons.cjs` from the project root: it fails on stray `$`, broken relative links, dead `reference.md#anchor` links, and any lesson not cited by its course's card. Fix what it reports before declaring done.
6. Report which files were created. Remind Jacob that problems answered in the web app are self-graded via the solutions block; for graded/interactive practice (especially proofs — he can drag in a photo of handwritten work), use `/learn` or `/review`.
