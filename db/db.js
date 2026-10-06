/* The only module that talks to the database. Everything above it (server.js,
   progress-sync) works in the old progress.json shape:
     { settings, courses: {id: {status, started, lessons: {NN-MM: {...}}}}, review_queue: [], log: [] }
   so the frontend and the skills didn't have to change shape when storage moved. */
import fs from "fs";
import crypto from "crypto";
import path from "path";
import { fileURLToPath } from "url";
import { neon } from "@neondatabase/serverless";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
// Locally DATABASE_URL comes from the git-ignored .env; on Vercel it's a project env var.
if (!process.env.DATABASE_URL) {
  try { process.loadEnvFile(path.join(ROOT, ".env")); } catch {}
}
if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set (.env locally, project env var on Vercel)");

export const sql = neon(process.env.DATABASE_URL);

// Default user for CLI tools (progress-sync); web requests pass the logged-in user.
export const USER = process.env.LEARNER_USER || "jacob";

const DEFAULT_SETTINGS = {
  lesson_target_minutes: 15,
  max_active_courses: 2,
  review_intervals_days: { 1: 1, 2: 2, 3: 5, 4: 10, 5: 21 },
};

const today = () => new Date().toISOString().slice(0, 10);
const inDays = (n) => new Date(Date.now() + n * 86400000).toISOString().slice(0, 10);

export async function getSettings(user = USER) {
  const [row] = await sql`select data from settings where user_id = ${user}`;
  return row?.data || DEFAULT_SETTINGS;
}

export async function getProgress(user = USER) {
  const [settings, courses, done, queue, log] = await Promise.all([
    getSettings(user),
    sql`select course, status, started::text from user_courses where user_id = ${user}`,
    sql`select course, lesson, completed::text, self_rating, problems, weak_concepts
          from completions where user_id = ${user}`,
    sql`select id, course, lesson, concept, rating, streak, due::text
          from review_items where user_id = ${user} order by due, id`,
    sql`select data from events where user_id = ${user} order by id`,
  ]);
  const p = { settings, courses: {}, review_queue: [], log: log.map((e) => e.data) };
  for (const c of courses) p.courses[c.course] = { status: c.status, started: c.started, lessons: {} };
  for (const d of done) {
    p.courses[d.course] ||= { status: "active", started: d.completed, lessons: {} };
    p.courses[d.course].lessons[d.lesson] = {
      completed: d.completed, self_rating: d.self_rating, problems: d.problems, weak_concepts: d.weak_concepts,
    };
  }
  for (const r of queue) {
    const item = { id: Number(r.id), course: r.course, lesson: r.lesson, rating: r.rating, due: r.due };
    if (r.concept) item.concept = r.concept;
    if (r.streak) item.streak = r.streak;
    p.review_queue.push(item);
  }
  return p;
}

const eventQuery = (user, e) =>
  sql`insert into events (user_id, date, type, course, lesson, data)
      values (${user}, ${e.date || today()}, ${e.type}, ${e.course ?? null}, ${e.lesson ?? null}, ${JSON.stringify(e)})`;
const reviewQuery = (user, r) =>
  sql`insert into review_items (user_id, course, lesson, concept, rating, streak, due)
      values (${user}, ${r.course}, ${r.lesson}, ${r.concept ?? null}, ${r.rating ?? null}, ${r.streak || 0}, ${r.due})`;

export const logEvent = (user, entry) => eventQuery(user, entry);
export const addReview = (user, item) => reviewQuery(user, item);

// Mark a lesson complete: completion + course activation + review item + log, atomically.
export async function recordCompletion({ course, lesson, self_rating, problems, weak_concepts }, user = USER) {
  const settings = await getSettings(user);
  const due = inDays((settings.review_intervals_days || {})[String(self_rating)] || 5);
  const d = today();
  await sql.transaction([
    sql`insert into user_courses (user_id, course, status, started) values (${user}, ${course}, 'active', ${d})
        on conflict (user_id, course) do nothing`,
    sql`insert into completions (user_id, course, lesson, completed, self_rating, problems, weak_concepts)
        values (${user}, ${course}, ${lesson}, ${d}, ${self_rating}, ${problems ? JSON.stringify(problems) : null},
                ${JSON.stringify(weak_concepts || [])})
        on conflict (user_id, course, lesson) do update
          set completed = excluded.completed, self_rating = excluded.self_rating,
              problems = excluded.problems, weak_concepts = excluded.weak_concepts`,
    reviewQuery(user, { course, lesson, rating: self_rating, due }),
    eventQuery(user, { date: d, course, lesson, type: "lesson", source: "webapp" }),
  ]);
  return due;
}

// Spaced-review outcome: promote/retire on correct, pull forward on a miss.
export async function rescheduleReview(item, verdict, user = USER) {
  const [entry] = item.id
    ? await sql`select id, rating, streak from review_items where user_id = ${user} and id = ${item.id}`
    : await sql`select id, rating, streak from review_items
                where user_id = ${user} and course = ${item.course} and lesson = ${item.lesson} and due = ${item.due}
                limit 1`;
  if (!entry) return;
  const intervals = (await getSettings(user)).review_intervals_days || {};
  let rating = entry.rating || 3, streak = entry.streak || 0, due;
  if (verdict === "correct") {
    rating = Math.min(5, rating + 1);
    streak += 1;
    if (rating === 5 && streak >= 2) {
      await sql`delete from review_items where id = ${entry.id}`; // retired
      return;
    }
    due = inDays(intervals[String(rating)] || 5);
  } else {
    rating = Math.max(1, rating - (verdict === "incorrect" ? 1 : 0));
    streak = 0;
    due = inDays(verdict === "incorrect" ? 1 : 2);
  }
  await sql`update review_items set rating = ${rating}, streak = ${streak}, due = ${due} where id = ${entry.id}`;
}

// Weak concepts from the course's last 30 graded attempts (feeds quiz generation).
export async function recentWeakConcepts(course, user = USER) {
  const rows = await sql`select data from events
    where user_id = ${user} and course = ${course} and type in ('grade', 'review', 'quiz')
    order by id desc limit 30`;
  return [...new Set(
    rows.reverse().map((r) => r.data)
      .filter((e) => e.verdict && e.verdict !== "correct")
      .flatMap((e) => e.weak_concepts || [])
  )];
}

/* ---------- handwriting ---------- */

export async function getInk(key, user = USER) {
  const [row] = await sql`select strokes from ink where user_id = ${user} and key = ${key}`;
  return row?.strokes ?? null;
}
export async function putInk(key, strokes, user = USER) {
  if (!strokes) return sql`delete from ink where user_id = ${user} and key = ${key}`;
  return sql`insert into ink (user_id, key, strokes) values (${user}, ${key}, ${JSON.stringify(strokes)})
             on conflict (user_id, key) do update set strokes = excluded.strokes, updated_at = now()`;
}

/* ---------- bulk merge (iPad rescue import, progress-sync push) ----------
   Completions upsert; events are added only if an identical entry isn't already
   stored. replaceQueue: true makes the given review_queue authoritative (a skill
   pulled, edited, and pushed); false only appends items not already queued. */
export async function mergeProgress(p, { replaceQueue = false } = {}, user = USER) {
  const qs = [];
  if (p.settings) {
    qs.push(sql`insert into settings (user_id, data) values (${user}, ${JSON.stringify(p.settings)})
                on conflict (user_id) do update set data = excluded.data`);
  }
  for (const [course, c] of Object.entries(p.courses || {})) {
    const lessons = Object.entries(c.lessons || {});
    const started = c.started || lessons.map(([, l]) => l.completed).sort()[0] || today();
    qs.push(sql`insert into user_courses (user_id, course, status, started)
                values (${user}, ${course}, ${c.status || "active"}, ${started})
                on conflict (user_id, course) do update set status = excluded.status`);
    for (const [lesson, l] of lessons) {
      qs.push(sql`insert into completions (user_id, course, lesson, completed, self_rating, problems, weak_concepts)
                  values (${user}, ${course}, ${lesson}, ${l.completed || today()}, ${l.self_rating ?? null},
                          ${l.problems ? JSON.stringify(l.problems) : null}, ${JSON.stringify(l.weak_concepts || [])})
                  on conflict (user_id, course, lesson) do update
                    set completed = excluded.completed, self_rating = excluded.self_rating,
                        problems = excluded.problems, weak_concepts = excluded.weak_concepts`);
    }
  }
  if (replaceQueue) qs.push(sql`delete from review_items where user_id = ${user}`);
  for (const r of p.review_queue || []) {
    if (replaceQueue) { qs.push(reviewQuery(user, r)); continue; }
    qs.push(sql`insert into review_items (user_id, course, lesson, concept, rating, streak, due)
                select ${user}, ${r.course}, ${r.lesson}, ${r.concept ?? null}, ${r.rating ?? null}, ${r.streak || 0}, ${r.due}
                where not exists (select 1 from review_items where user_id = ${user}
                                  and course = ${r.course} and lesson = ${r.lesson} and due = ${r.due})`);
  }
  for (const e of p.log || []) {
    const { id, ...entry } = e;
    qs.push(sql`insert into events (user_id, date, type, course, lesson, data)
                select ${user}, ${entry.date || today()}, ${entry.type || "lesson"}, ${entry.course ?? null},
                       ${entry.lesson ?? null}, ${JSON.stringify(entry)}::jsonb
                where not exists (select 1 from events where user_id = ${user} and data = ${JSON.stringify(entry)}::jsonb)`);
  }
  if (qs.length) await sql.transaction(qs);
  return qs.length;
}

/* ---------- accounts & sessions ----------
   Passwords: scrypt with a per-user salt ("salt:hash" hex). Sessions: a random
   token lives in the cookie; only its sha256 is stored. */
const SESSION_DAYS = 400;
const sha256 = (s) => crypto.createHash("sha256").update(s).digest("hex");
const scrypt = (pw, salt) => crypto.scryptSync(pw, salt, 64).toString("hex");

export const normalizeUsername = (u) => String(u || "").trim().toLowerCase();

export async function createUser(username, password) {
  const id = normalizeUsername(username);
  if (!/^[a-z0-9_-]{2,32}$/.test(id)) throw new Error("Username: 2–32 letters, numbers, - or _");
  if (String(password || "").length < 8) throw new Error("Password must be at least 8 characters");
  const salt = crypto.randomBytes(16).toString("hex");
  const rows = await sql`insert into users (id, display_name, password_hash)
    values (${id}, ${String(username).trim()}, ${`${salt}:${scrypt(password, salt)}`})
    on conflict (id) do nothing returning id`;
  if (!rows.length) throw new Error("That username is taken");
  return id;
}

export async function checkPassword(username, password) {
  const [u] = await sql`select id, password_hash from users where id = ${normalizeUsername(username)}`;
  if (!u) return null;
  const [salt, hash] = u.password_hash.split(":");
  const ok = crypto.timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(scrypt(String(password || ""), salt), "hex"));
  return ok ? u.id : null;
}

export async function createSession(userId) {
  const token = crypto.randomBytes(32).toString("hex");
  await sql`insert into sessions (token_hash, user_id, expires_at)
    values (${sha256(token)}, ${userId}, now() + make_interval(days => ${SESSION_DAYS}))`;
  return { token, maxAge: SESSION_DAYS * 86400 };
}

export async function sessionUser(token) {
  if (!token) return null;
  const [s] = await sql`select s.user_id, u.display_name from sessions s join users u on u.id = s.user_id
    where s.token_hash = ${sha256(token)} and s.expires_at > now()`;
  return s ? { id: s.user_id, name: s.display_name } : null;
}

export const deleteSession = (token) => sql`delete from sessions where token_hash = ${sha256(token || "")}`;
