---
name: review
description: Run a short spaced-repetition quiz from the review queue. Use when Jacob says /review, "quiz me", or "review session".
---

# /review

A ~5-minute retrieval session. Read CLAUDE.md conventions first if not already in context.

1. Read `progress/progress.json`. Collect review-queue items with `due <= today`, oldest first. Take up to 5 (mix courses when possible). If none are due, say so, show the next due date, and offer to pull the 3 weakest concepts anyway.
2. For each item, write a **fresh variant** problem testing the same concept (look up the source lesson file for context; never reuse a problem verbatim). Administer one at a time; wait for the answer before grading.
3. Grade as in /learn (generous on arithmetic, strict on concepts). Briefly re-teach anything missed — two or three sentences plus the key step, not a full lesson.
4. Update progress.json per item:
   - correct → reschedule at the next-longer interval in `settings.review_intervals_days` (item stores its current rating; bump it by 1, cap 5). After two consecutive correct at rating 5, retire the item.
   - wrong → reset to the 1-day interval, decrement rating (floor 1), and add/update the concept in the source lesson's `weak_concepts`.
   - Append a `{"type": "review"}` entry to `log`.
5. Close with the score (e.g. 4/5) and what's due next.
