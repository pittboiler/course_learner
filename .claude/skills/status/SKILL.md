---
name: status
description: Show learning progress — courses, streak, due reviews, weak spots. Use when Jacob says /status, "where am I", or "how am I doing".
---

# /status

1. Read `progress/progress.json` and the active courses' syllabi.
2. Report concisely in chat:
   - Per active course: lessons done / total, current module, Dangerous Checklist items plausibly earned so far.
   - Review queue: items due today, next due date, any concept missed twice or more (call these out as "shaky").
   - Study log: sessions this week, current streak of distinct study days.
   - Suggested next action (one line): the single best use of the next 15 minutes.
3. If Jacob asks for a visual dashboard, load the `dataviz` skill and render one with show_widget; otherwise text only.
