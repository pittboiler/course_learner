# {Course Name} · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

{One or two sentences: what this course's machinery is for, and what the card is
good for mid-problem. No throat-clearing.}

## Notation

{Every symbol the course uses that isn't universal, in first-appearance order.
Meaning in one plain-English line — not a restatement of the symbol.}

| Symbol | Means | First used |
|---|---|---|
| {$f'(x)$} | {derivative of $f$ at $x$ — sensitivity of output to a nudge in input} | [{1.1}](lessons/{01-01-slug}.md) |

## Definitions

{One `###` per term. The heading text is the anchor a lesson links to
(`### Chain rule` → `../reference.md#chain-rule`), so name it the way a lesson
would refer to it. Plain-English line FIRST, then the formal statement, then the
lesson that introduced it. Definitions only — put computational rules below.}

### {Term}

{One plain-English sentence.}

$${formal statement}$$

*Introduced:* [{M.N}](lessons/{NN-MM-slug}.md)

## Formulas and rules

{The tables and identities you'd otherwise go hunting through lessons for.
Group by job (differentiation / integration / series / …), not by lesson. Each
group cites the lesson(s) it comes from. Include the standard-function tables the
lessons *use* even when no lesson states them — that's the whole point.}

### {Group}

| {input} | {output} |
|---|---|
| {$\sin x$} | {$\cos x$} |

*From* [{M.N}](lessons/{NN-MM-slug}.md)

## Assumed, not taught here

{Prerequisite facts this course uses without deriving. Tier 0 refreshers will
have several; Tier 1–2 courses few. Every row must point at the course that DOES
teach it — an assumption with nowhere to look it up is a bug, not an entry.}

| Fact | Where it's taught |
|---|---|
| {$\frac{d}{dx}\sin x = \cos x$} | [{precalculus 3.1}](../{course-id}/lessons/{NN-MM-slug}.md) |

## Pitfalls

{The traps from every lesson's "Watch out", deduped and compressed to one line
each, grouped by theme rather than by lesson. If two lessons warn about the same
thing, that's one entry — the value here is that it's summarized in one place.}

### {Theme}

- {The trap, stated as the wrong belief and the correction, in one line.}
  *([{M.N}](lessons/{NN-MM-slug}.md))*

---

## Conventions

- **One card per course**, covering every lesson. The linter checks that every
  lesson file is cited somewhere on this card.
- **Intuition first**, same as lessons: a plain-English line before any formula.
- **Headings are anchors.** Renaming a `###` breaks inbound lesson links; the
  linter catches it, but prefer not to rename.
- **No prose dollar signs** — write "10 dollars", not the symbol (see CLAUDE.md).
- Length is not capped the way a lesson's is: this is a lookup surface, not a
  read-through. But every line still has to earn its place.
