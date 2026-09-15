# Philosophy, Politics & Society, and Catholic Theology — build brief

Written 2026-09-15, when the deferred "Humanities" placeholder (two syllabus-only
courses) was replaced by three real fields. This exists for the same reason
[CS-BUILD-BRIEF.md](CS-BUILD-BRIEF.md) does: these fields raise a pedagogical question
the STEM fields never did, and the answer should be settled once, not re-derived per
course. **Read this before writing any syllabus or lesson in these three fields.**

## The question

The practice model is 2–3 short problems per lesson with a worked-solution key,
self-graded from a `<details>` block or graded by the Claude API. The key assumes a
right answer. Most problems in philosophy and political theory don't have one:
"Is Rawls right?" has no answer key.

The failure modes are opposite and both bad:

- **Grade the verdict.** The key quietly takes a side, and Jacob gets marked down for
  disagreeing with Nozick. It trains agreement, not thinking.
- **Grade nothing.** "Any thoughtful answer is fine." Unfalsifiable, so it trains nothing.

## The answer

**Every problem declares its kind, and the kind fixes what is graded.**

| Kind | Asks | Graded on | Strictness |
|---|---|---|---|
| **Exegetical** | What does the text / principle / doctrine actually say or imply? What did Trent define? What does Mill's principle forbid? | Accuracy | **Strict.** There is a right answer. |
| **Evaluative** | Is the argument sound? Is the policy justified? Who wins? | The required argumentative moves | **Verdict-neutral.** Any conclusion passes if the moves are made. |
| **Apologetic** | Defend the Catholic position against a named alternative | Fidelity to the opposing view **and** the quality of the reply | The stance is set by the task, not by the grader's preference. |
| **Formal** | Compute, prove, solve the model | As in any math course | Unchanged. |

A single problem may have parts of different kinds; label each part.

The rule that makes evaluative grading work: **a must-hit move is something either
side has to do.** "State the strongest objection and say whether it generalizes" is a
move. "Conclude that the objection proves too much" is a verdict, and never belongs in
a rubric.

## Eight problem archetypes

Every non-formal problem is one of these. Aim for at least three different archetypes
per module.

1. **Reconstruct.** Put a passage or position into numbered premises and a conclusion;
   flag the weakest premise. *(Exegetical, then a small evaluative step.)*
2. **Counterexample.** Build a case where a principle gives the wrong verdict, or show an
   argument form is invalid. The hardest type to fake. *(Evaluative.)*
3. **Apply to a hard case.** Run a principle on a novel case, reach a verdict, and say
   where the principle stops determining one. *(Exegetical + evaluative.)*
4. **Diagnose.** Given an invented op-ed paragraph, speech or policy memo, name the concept
   or question actually doing the work. *(Exegetical.)*
5. **Find the crux.** Two positions disagree; name the single premise one side must deny,
   and say what evidence or argument would move it. *(Exegetical.)*
6. **Steelman and reply.** The best objection, then the best response, in 150 words or
   fewer. *(Evaluative, or Apologetic in the apologetics courses.)*
7. **Close reading.** A short public-domain passage: which interpretation does the text
   support, and which words decide it? The workhorse for history, scripture and the
   Fathers. *(Exegetical.)*
8. **Formal model.** Social choice, political economy, decision theory, the economics of
   debt: ordinary math problems. *(Formal.)*

**Invented material only for archetype 4.** Op-eds, speeches and memos are written
fresh for the problem. Never attribute an invented quotation to a real person.

## Answer format

Keep answers bounded, which is what keeps them to ~5 minutes and gradeable:

- **Numbered premises** for reconstructions (P1, P2, … ∴ C).
- **150 words or fewer** for everything prose, and say so in the problem statement.
- A one-line **verdict** where one is asked for, separate from the reasoning.
- Handwritten photos are fine, as everywhere else.

Longer writing (a 300–500-word argued essay) is reserved for boss problems and quiz
synthesis problems, never for lesson problems.

## The solution key is a rubric plus a model answer

Every solution in the `<details>` block has this shape:

```markdown
**P2** *(Exegetical (a) · Evaluative (b))*

**Must hit, strict (a):** …
**Must hit, any verdict (b):** …
**Wrong turns:** … (the one or two mistakes a smart reader actually makes)
**Model answer:** … (one good answer, labelled as one of several acceptable ones when the part is evaluative)
```

Worked example:

> **P2 (🟡)** A city bans sugary drinks over 16 oz "to protect people from themselves."
> (a) Is this soft or hard paternalism, and does Mill's harm principle, as stated, permit
> it? (b) Defenders reply that public health-care costs make the harm other-regarding.
> Is that a good escape? 150 words for (b).
>
> **Must hit, strict (a):** hard paternalism — it overrides informed adult choice rather
> than correcting ignorance or compulsion; the harm is self-regarding, so the principle
> as stated forbids the ban.
> **Must hit, any verdict (b):** state the escape precisely (costs shifted to others make
> the act other-regarding); test whether it generalizes. If it does, say what that does to
> the harm principle. If you think it doesn't, say what limits it.
> **Wrong turns:** calling it soft paternalism because "people don't know the risks" — the
> ban binds the fully informed too. Treating (b) as settled by (a).
> **Model answer (b), one of several:** …

Self-grading works off the same checklist, which is why the key is structured, not
prose.

## Field-specific stance

### Philosophy and Politics & Society: verdict-neutral

Present every major position at the strength its best defenders would recognize.
Lessons may say where the professional consensus sits ("most philosophers of mind now
reject Cartesian dualism") when that is an accurate report, but must not argue for it
in the voice of the lesson. Religious and secular positions get the same treatment.

### Catholic Theology: taught from within the tradition, with authority marked

The field teaches Catholic theology on its own terms — what the Church teaches, why,
and how it came to be taught — not a comparative survey. Two disciplines make that
rigorous instead of preachy:

**1. Mark the level of authority.** Any doctrinal claim whose weight matters carries its
theological note. Use a consistent ladder, owned by `fundamental-theology`:

| Level | Example |
|---|---|
| Defined dogma (*de fide*) | the hypostatic union (Chalcedon); the Immaculate Conception (1854) |
| Definitive teaching (to be held) | reserved priestly ordination (*Ordinatio Sacerdotalis*, 1994) |
| Authentic ordinary magisterium (religious submission) | the principle of subsidiarity (*Quadragesimo Anno*, 1931) |
| Theologically certain / common teaching | many conclusions of the manuals |
| Freely disputed among Catholics | Thomist vs Molinist accounts of grace; the fate of unbaptized infants |

The refined ladder, with the assent each level requires and what denying it amounts to, lives
in the Notes of [`fundamental-theology`](courses/fundamental-theology/syllabus.md); where the
two differ, that syllabus wins.

Overstating a level is an **exegetical error**, graded strictly. Freely disputed
questions inside Catholic theology are **evaluative** problems — the student may take
either school's side.

**2. Cite the way the tradition cites.** Scripture by book/chapter/verse; the Catechism
by paragraph (CCC 1987); Denzinger–Hünermann by number (DH 1520); Aquinas by part,
question, article (ST I-II q.109 a.2); councils and encyclicals by name and section.
Every citation is a lookup Jacob can follow; the reference card carries the tables.

### Apologetics: represent the other side at its best

`apologetics-foundations` and `apologetics-catholic-claims` argue for Catholic positions,
openly. The discipline that keeps them honest:

- **Every opposing view is stated as its own best defenders state it,** citing them —
  e.g. Orthodox objections to papal primacy as Orthodox theologians frame them, justification
  by faith as the Lutheran confessions (Book of Concord) state it, Islamic Christology from
  the Qur'an and classical Muslim theologians, atheism from its strongest philosophers.
- **Every apologetic problem makes the student state the opposing view first,** and that
  statement is graded (strictly, as exegesis) before the reply is.
- **Concede what is true.** Where the historical record is genuinely hard for the Catholic
  position (e.g. the early development of the papacy), say so and show how Catholic
  theologians actually handle it.
- Tone is respectful throughout. No caricature, no triumphalism; Judaism and Islam in
  particular are treated as living traditions with serious thinkers.

## Primary sources and copyright

- **Quote freely from public-domain texts:** Plato, Aristotle, the Stoics, Augustine,
  Aquinas (English Dominican Province translation, 1920s), Hobbes, Locke, Rousseau, Hume,
  Kant, Mill, Marx, Tocqueville, Newman; the Church Fathers (Schaff's *Nicene and
  Post-Nicene Fathers*); scripture in the **Douay–Rheims (Challoner)** translation, or the
  lesson's own close translation of the Greek/Hebrew when a word is the point; pre-1930
  papal documents (e.g. *Rerum Novarum*, 1891) in public-domain translations.
- **Paraphrase modern copyrighted works** (Rawls, Nozick, Sen, Plantinga, modern
  encyclicals and conciliar translations, modern Bible translations). At most a short
  phrase in quotation marks, attributed; otherwise summarize and cite the section.
- Close-reading problems (archetype 7) use public-domain passages only, ≤150 words.
- **Where only the original is public domain** (Husserl, Heidegger, Scheler, Stein, Simmel, and
  conciliar Latin), a lesson may publish its **own translation of ≤150 words** from an original
  published in 1930 or earlier, marked as the lesson's translation. Never translate from a
  copyrighted modern translation; paraphrase instead when a text's status is unclear.
- A lesson may add a `## Source` section after "The idea" holding the passage it reads
  closely. This is an addition to the lesson template, not a replacement.

## Lesson template adaptations

Sections may be renamed, none dropped (per CLAUDE.md):

| Template section | In these fields |
|---|---|
| The formal version | **The argument** — numbered premises and conclusion, or the doctrine in its defining text, each followed by "In words: …". Formal courses keep math. |
| Picture | **Argument map** (Mermaid: premises → conclusion, objections as dashed edges), a **timeline**, a **map of positions** (2×2 of views), or a spatial model for formal courses. If none earns its place, **The case** — a fully worked concrete instance. |
| Worked examples | Example 1: run the argument or principle on a clean case. Example 2: a hard case where it strains. |
| Watch out | Misreadings, conflations (negative vs positive liberty), and overstated authority levels. |

Math is allowed wherever it helps (decision theory, social choice, economics of debt) and
follows the usual KaTeX rules. Prose lessons with no math are normal.

## Reference card shape

Same template ([templates/reference-template.md](templates/reference-template.md)),
re-labelled:

| Template section | In these fields |
|---|---|
| Notation | **Terms** — technical vocabulary in first-appearance order (*ousia*, *hypostasis*, *jus in bello*, veil of ignorance) |
| Definitions | **Positions and distinctions** — one `###` per position or distinction, plain-English line first, then the canonical statement, then the lesson |
| Formulas and rules | **Arguments** — the canonical arguments as numbered-premise skeletons (the Five Ways, the original position, Hobbes's route to the sovereign); **Thinkers and texts** — who, when, key work, one-line thesis; for theology, **Authority and citations** — the levels table and how to read DH/CCC/ST references |
| Assumed, not taught here | Unchanged — every ceded topic points at its owner |
| Pitfalls | Unchanged |

Because quizzes are open book, the card makes recall problems pointless by design: it
holds every position and argument skeleton. Problems must make the student *use* them.

**Heading slugs:** ASCII hyphens only in `###` headings (an en-dash kills the anchor —
see the machine-learning note in the prep workflow). Avoid Greek letters and diacritics in
headings too; put *ousia* in the body, not the heading.

## Topic ownership

One owner per topic; everyone else cites. Confirm against built lessons before writing
each syllabus — this table is the plan, not proof.

| Topic | Owner | Cites it |
|---|---|---|
| Formal logic (propositional, first-order, completeness) | `mathematical-logic` (built) | philosophical-method, philosophy-of-language-and-logic |
| Argument reconstruction, informal validity, thought experiments | `philosophical-method` | everything in the three fields |
| Arrow's theorem, proof via decisive coalitions | `grad-game-theory` 5.1 (built) | social-choice (goes further: May, Sen's liberal paradox, judgment aggregation, jury theorem, apportionment), political-philosophy |
| Utilitarianism as a moral theory | `ethics` | political-philosophy (as a theory of justice only) |
| Natural law as ethical theory | `ethics` | moral-theology, philosophy-of-law |
| Arguments for God, the problem of evil, miracles | `philosophy-of-religion` | apologetics-foundations, thomistic-synthesis |
| Aquinas: survey | `ancient-medieval-philosophy` | — |
| Aquinas: metaphysics and method in depth | `thomistic-synthesis` | the dogmatic courses |
| Augustine, Aquinas, Marx, Tocqueville as political theorists | `history-of-political-thought` | catholic-social-teaching, social-theory |
| Marx's and Weber's sociology | `social-theory` | — |
| Council history (events, politics) | `church-history` | christology, trinity-and-god (doctrine) |
| Levels of doctrinal authority | `fundamental-theology` | every Catholic Theology course |
| Church teaching on state, property, labor, war | `catholic-social-teaching` | political-philosophy (as one position) |
| Wojtyła's personalism | `phenomenology-and-personalism` | moral-theology |
| Public goods, Samuelson condition, optimal taxation | `public-economics` | political-economy |
| Ricardian equivalence (3.4), the r < n rollover knife-edge | `grad-macro` (built) | economics-of-debt |
| Usury: doctrine and its development | `theology-of-debt` | philosophy-of-debt, history-of-debt |
| Usury: moral argument, secular | `philosophy-of-debt` | — |
| Sovereign default models, debt overhang, debt-deflation | `economics-of-debt` | history-of-debt |
| Debt's institutional history (clean slates → 2008) | `history-of-debt` | the other three debt courses |

## The debt thread

A cross-field series Jacob asked for (2026-09-15). Four courses, one per field, with
`history-of-debt` as the shared entry point:

| id | Field | Tier | Owns |
|---|---|---|---|
| `history-of-debt` | Politics & Society | 1 | Mesopotamian clean slates, Solon, Roman *nexum*, medieval credit, the English financial revolution and credible commitment, Hamilton's assumption, sovereign default history, debt bondage, war debts and reparations, the Latin American crisis, Jubilee 2000, 2008, the Eurozone |
| `philosophy-of-debt` | Philosophy | 2 | Promising and what is owed; Aristotle on the sterility of money; the justice of interest; Nietzsche's *Schuld*; Graeber's thesis examined; moral hazard vs forgiveness; intergenerational debt (Jefferson–Madison); odious debt and collective responsibility |
| `theology-of-debt` | Catholic Theology | 2 | Sabbatical year and Jubilee; debt slavery and the prophets; Nehemiah 5; "forgive us our debts"; sin as debt (from the Second Temple period to Anselm); Colossians 2:14; the treasury of merit; usury from Lateran III to *Vix Pervenit* and the nineteenth-century responses; debt in modern Catholic social teaching |
| `economics-of-debt` | Economics & Finance | 2 | Credit rationing, Modigliani–Miller, debt overhang, Fisher and Minsky, Kiyotaki–Moore, the leverage cycle, household debt, r − g sustainability, sovereign default (Eaton–Gersovitz, Bulow–Rogoff) |

Each course's syllabus names the other three in its Goal and links them in Notes.
Cross-course lessons are where the thread earns its keep — e.g. the Jubilee read three
ways (as law, as theology, as a credible debt-relief mechanism).

## Two app changes before the first lesson ships

The server prompts are written for a math curriculum and will mis-grade prose:

1. **`GRADER_SYSTEM`** ([server.js](server.js)) says "right answer and sound reasoning" and
   "read handwritten math." Add a clause, applied when the course's roadmap field is
   Philosophy, Politics & Society or Catholic Theology: *grade each part by its declared
   kind (exegetical strict; evaluative on must-hit moves regardless of verdict; apologetic
   on fidelity to the opposing view and then the reply); never mark down a conclusion the
   rubric does not require.* The rubric in the lesson's `<details>` block is already in
   the prompt, since the grader gets the whole lesson.
2. **Review and quiz generators** say "math curriculum" and "$...$ LaTeX." For these fields,
   swap in: *write problems from the eight archetypes, declare each part's kind, bound
   answers at 150 words, and write the solution as a rubric plus a model answer.* Keep the
   `OPEN_BOOK` clause, extended to name positions, argument skeletons and doctrinal texts
   as things the card already holds.

Both are small, cost nothing extra per call, and must land before `philosophical-method`
ships.

## Build order

**Phase 1 — pilot: `philosophical-method` (~12 lessons).** No prerequisites, and it
exercises every archetype except close reading and formal. If the rubric model feels wrong
here it will be wrong in 45 courses. **Stop after this and report before continuing.**
Land the two app changes as part of this phase.

**Phase 2 — the roots.** Courses with no prerequisites in the new fields, each of which
unblocks a spine: `ethics`, `fundamental-theology`, `political-institutions`,
`history-of-debt`, `church-history`, `history-of-political-thought`, `social-theory`.

**Phase 3 — the spines.** Philosophy: `ancient-medieval-philosophy`, `metaphysics`,
`epistemology`, `modern-philosophy`, `decision-theory`. Politics: `political-philosophy`
(rewrite), `social-choice`, `comparative-politics`, `international-relations`,
`constitutional-law`. Theology: `old-testament`, `new-testament`, `patristics`.

**Phase 4 — Tier 2, in prerequisite order.** `thomistic-synthesis` early, since the whole
dogmatic sequence waits on it. `political-economy` gets its syllabus rewritten against
`social-choice` and `public-economics` before it is built.

Full scope: see the field tables in [ROADMAP.md](ROADMAP.md) and Phase 11 of
[EXPANSION.md](EXPANSION.md).
