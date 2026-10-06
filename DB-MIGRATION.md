# Database migration: localStorage → Neon Postgres

Status as of 2026-10-06. Delete this file once the migration is fully done.

## Why
On Vercel the filesystem is read-only, so progress lived in each browser's localStorage.
On the iPad, Safari's ~5 MB quota filled with handwriting ink that was never deleted, and
from then on every save failed silently while the app still showed "✅ Recorded". Review
rescheduling, quiz results and the grade log (which `/prep` adapts from) were never saved
on Vercel at all.

## Done (committed)
- [x] Neon database created through Vercel; `DATABASE_URL` in `.env` (git-ignored) and in Vercel.
- [x] `db/schema.sql` applied (`node db/migrate.mjs`, safe to re-run). Tables are keyed by `user_id` ('jacob').
- [x] `db/db.js` is the only module that talks to the database. `getProgress()` returns the old progress.json shape.
- [x] `server.js`: every progress read and write goes through the database; new `/api/ink`, `/api/import`,
      `/api/login`; `APP_PASSCODE` gates `/api/*` when it's set.
- [x] `public/app.js`: the browser no longer keeps its own copy of progress; Mark complete reports an
      error if the save fails; ink saves to the server (debounced) at one decimal place; the first load
      after deploy uploads and then deletes the old localStorage progress and ink.
- [x] `progress-sync.mjs pull|push` added, the five skills call it, and CLAUDE.md is updated.
- [x] Seeded from progress.json (177 courses, settings). Tested locally with a throwaway user: passcode
      gate, rescue import, Mark complete → Library, ink save and restore.

## To deploy (Jacob)
1. In Vercel → Project → Settings → Environment Variables, add `APP_PASSCODE` (any passphrase).
2. Push `main` so Vercel redeploys.
3. On the iPad, open the app and enter the passcode once. The first load uploads what's left in
   localStorage. Then re-mark the lesson that didn't save.
4. Check: `node progress-sync.mjs pull` should show the iPad's completions.

## Follow-ups (not urgent)
- `pendingReviews` and `pendingQuizzes` in server.js are in-memory Maps. On serverless, a review or quiz
  can expire if the grade request lands on a different instance than the one that generated the
  question. Move them into a `pending` table if "quiz expired" errors show up.
- Going public: replace the passcode with real accounts (Clerk / Better Auth / Neon Auth), set `USER`
  per request instead of the `LEARNER_USER` constant, and decide who pays for grading.
- The `/new-course` skill still caps active courses at `settings.max_active_courses` (2); raise it if
  that limit is no longer wanted.
