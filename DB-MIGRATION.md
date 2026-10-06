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
      `/api/signup`, `/api/login`, `/api/logout`. Every `/api/*` call needs a logged-in account and
      only touches that account's rows.
- [x] `public/app.js`: the browser no longer keeps its own copy of progress; Mark complete reports an
      error if the save fails; ink saves to the server (debounced) at one decimal place; the first load
      after deploy uploads and then deletes the old localStorage progress and ink.
- [x] `progress-sync.mjs pull|push` added, the five skills call it, and CLAUDE.md is updated.
- [x] Seeded from progress.json (177 courses, settings) under user_id `jacob`. Tested locally with throwaway
      users: rescue import, Mark complete → Library, ink save and restore, sign-up with right and wrong
      invite code, duplicate username, log out and back in, two accounts not seeing each other's progress.
- [x] Accounts instead of a shared passcode (Jacob's call, 2026-10-06): username + password (scrypt),
      sessions in the database, httpOnly cookie. Sign-up requires `SIGNUP_CODE` so strangers can't spend the API key.

## To deploy (Jacob)
1. In Vercel → Project → Settings → Environment Variables, add `SIGNUP_CODE` (an invite code to share).
2. Push `main` so Vercel redeploys.
3. On the iPad: "Create an account" with username **`jacob`**. Existing data is stored under that id.
   The first load after logging in uploads what's left in localStorage, so do this on your own iPad
   before anyone else logs in there. Then re-mark the lesson that didn't save.
4. Your sister: same screen, her own username, plus the invite code.
5. Check: `node progress-sync.mjs pull` should show the iPad's completions.

## Follow-ups (not urgent)
- `pendingReviews` and `pendingQuizzes` in server.js are in-memory Maps. On serverless, a review or quiz
  can expire if the grade request lands on a different instance than the one that generated the
  question. Move them into a `pending` table if "quiz expired" errors show up.
- Going public: accounts exist; what's left is password reset (there's no email, so for now reset by
  hand in the database), rate limits, and deciding who pays for grading (every user's grades bill Jacob's key).
- The `/new-course` skill still caps active courses at `settings.max_active_courses` (2); raise it if
  that limit is no longer wanted.
