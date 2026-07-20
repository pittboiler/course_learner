---
name: new-course
description: Stand up a new course — generate its syllabus from the roadmap and activate it. Use when Jacob says /new-course, "start <course>", or "set up <course>".
---

# /new-course <course-id>

Generate a course's stable spine. Read CLAUDE.md conventions first if not already in context.

1. Validate the id against ROADMAP.md (if it's not there, propose adding it to the roadmap first — tier, prereqs, then proceed). Check prereqs against progress.json; if a prereq course is below ~60% complete, warn but let Jacob decide.
2. Think hard about scope before writing: the goal is "enough to be dangerous", not comprehensiveness. Decide what to deliberately skip and say so in the Goal section.
3. Write `courses/<course-id>/syllabus.md` following `templates/syllabus-template.md`:
   - **Dangerous Checklist**: 8–12 concrete can-do statements (verbs: compute, prove, model, explain, estimate).
   - Modules of 3–6 lessons; each lesson row gets a one-line goal and 2–4 key concepts, sized so its lesson fits 15 minutes (split rather than cram).
   - One boss problem description per module (a scenario combining the module's lessons — the actual problem is generated when reached).
   - Lesson counts should land near the ROADMAP.md estimate; if you deviate by >25%, note why.
   - Order lessons so each builds on the previous; front-load whatever downstream courses need soonest.
4. Register in progress.json: `courses.<id> = {"status": "active", "started": "<date>", "lessons": {}}`. If this would exceed `settings.max_active_courses`, ask which course to pause.
5. Present the syllabus summary in chat (modules + checklist) and ask if Jacob wants to adjust before it's locked. The syllabus is stable once accepted — later changes get a dated note at the bottom of the file.
