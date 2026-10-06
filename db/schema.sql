-- Learner progress store (Neon Postgres). Every table is keyed by user_id so the
-- app can go multi-user later without a data migration; today it's just 'jacob'.
-- Idempotent: safe to re-run (node db/migrate.mjs).

create table if not exists settings (
  user_id text primary key,
  data    jsonb not null
);

-- progress.courses.<id> minus its lessons: status ("active"/"paused"/…) and start date
create table if not exists user_courses (
  user_id text not null,
  course  text not null,
  status  text not null default 'active',
  started date,
  primary key (user_id, course)
);

-- progress.courses.<id>.lessons.<NN-MM>
create table if not exists completions (
  user_id       text not null,
  course        text not null,
  lesson        text not null,
  completed     date not null,
  self_rating   int,
  problems      jsonb,
  weak_concepts jsonb not null default '[]',
  primary key (user_id, course, lesson)
);

-- progress.review_queue
create table if not exists review_items (
  id      bigserial primary key,
  user_id text not null,
  course  text not null,
  lesson  text not null,
  concept text,
  rating  int,
  streak  int not null default 0,
  due     date not null
);
create index if not exists review_items_user_due on review_items (user_id, due);

-- progress.log — append-only; `data` is the original log entry verbatim
create table if not exists events (
  id      bigserial primary key,
  user_id text not null,
  at      timestamptz not null default now(),
  date    date not null,
  type    text not null,
  course  text,
  lesson  text,
  data    jsonb not null
);
create index if not exists events_user_course on events (user_id, course, id);

-- Handwriting pads: one row per problem pad (key = "<course>:<file>:<label>")
create table if not exists ink (
  user_id    text not null,
  key        text not null,
  strokes    jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, key)
);
