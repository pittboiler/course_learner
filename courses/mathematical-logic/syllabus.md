# Logic & Set Theory — Syllabus

> Mathematics · Tier 1 · ~18 lessons · Prereqs: [proofs-primer](../proofs-primer/syllabus.md) · Roadmap id: `mathematical-logic`

## Goal

This course makes the machinery you've been *using* into the machinery you can *reason about*: what a proof is as a formal object, what "true in a structure" means, and what set theory rests on. You'll build propositional and first-order logic from syntax up, prove soundness and Gödel's completeness theorem, watch naive set theory collapse under Russell's paradox and rebuild it as ZFC, then climb into the transfinite — ordinals, cardinals, Cantor's theorem, and the Axiom of Choice with its equivalents. It closes with a careful *statement* of Gödel's incompleteness theorems and undecidability. It deliberately skips a full proof of incompleteness, deep model theory, and the proof-theory / type-theory machinery — you'll know exactly what those theorems say and why they matter, not how every gear turns.

## Dangerous Checklist

When you finish, you can:

- [ ] Build a truth table and decide whether a propositional formula is a tautology, contradiction, or contingent
- [ ] Prove a propositional sequent inside a formal proof system and explain what its completeness theorem buys you
- [ ] Translate an English argument into first-order logic, getting the quantifier scope and order right
- [ ] Define a first-order structure and check whether a given sentence is satisfied in it
- [ ] State soundness and Gödel's completeness theorem and say precisely what each direction claims
- [ ] Derive Russell's paradox and explain which naive assumption it kills
- [ ] Name each ZFC axiom and justify what breaks if you drop it
- [ ] Prove basic facts about orderings and run an argument by transfinite induction on the ordinals
- [ ] Prove Cantor's theorem and use diagonalization to show a set is uncountable
- [ ] Compare infinite cardinalities and state the Continuum Hypothesis and its independence
- [ ] Move between the Axiom of Choice, Zorn's lemma, and the well-ordering theorem, and apply Zorn to produce a maximal object
- [ ] State both of Gödel's incompleteness theorems and explain why no consistent, sufficiently strong system can prove its own consistency

## Modules

### Module 1: Propositional Logic

The smallest complete logic: formulas built from atoms and connectives, meaning given by truth tables, and a proof system that reaches every truth.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Syntax & Connectives | Parse and build well-formed propositional formulas | atoms, connectives, well-formed formulas, recursion on structure |
| 1.2 | Semantics & Truth Tables | Evaluate any formula under a valuation and classify it | valuations, truth tables, tautology, contradiction, satisfiability |
| 1.3 | Entailment & Equivalence | Decide semantic consequence and rewrite to normal forms | logical equivalence, entailment $\models$, CNF/DNF, functional completeness |
| 1.4 | A Proof System & Its Completeness | Derive tautologies formally and state soundness + completeness | proof system, derivability $\vdash$, soundness, completeness, compactness (statement) |

**Boss problem 1:** Given the connective set $\{\to, \neg\}$, prove it is functionally complete by expressing $\land$, $\lor$, and $\leftrightarrow$ using only those two, verify each by truth table, then take one of your expressions and derive it formally in the proof system from Lesson 1.4 — closing the loop from semantics ($\models$) to syntax ($\vdash$).

### Module 2: First-Order Logic, Models & Completeness

Add quantifiers, objects, and relations — then the payoff: a syntactic proof system that captures exactly the sentences true in every structure.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Quantifiers & Syntax | Read and write first-order formulas with correct variable binding | predicates, functions, terms, $\forall$/$\exists$, free vs. bound variables, scope |
| 2.2 | Structures & Satisfaction | Interpret a language in a structure and evaluate satisfaction | signature, structure/model, assignment, Tarski's satisfaction definition |
| 2.3 | Translation & Quantifier Order | Formalize natural-language arguments and expose $\forall\exists$ vs. $\exists\forall$ | domain of discourse, quantifier order, negating quantifiers, common pitfalls |
| 2.4 | Soundness & Gödel's Completeness Theorem | State and use soundness, completeness, and compactness for FOL | soundness, Gödel's completeness theorem, compactness, Löwenheim–Skolem (taste) |

**Boss problem 2:** Take the first-order sentence "every element has an inverse" over a group signature. (a) Write it formally, getting the quantifier order right. (b) Exhibit one structure that satisfies it and one that doesn't, checking satisfaction explicitly. (c) Use the compactness theorem to argue that if a set of sentences has arbitrarily large finite models, it has an infinite model — and say in one sentence why compactness is really completeness in disguise.

### Module 3: From Paradox to ZFC

Naive "any property defines a set" self-destructs; the fix is a short list of carefully chosen axioms. This module is *why each axiom exists*, not axiom-worship.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Naive Sets & Russell's Paradox | Derive the contradiction and diagnose the guilty assumption | naive comprehension, Russell's set, why unrestricted comprehension fails |
| 3.2 | Building Up: Extensionality to Power Set | Justify the axioms that say what sets are and how to grow them | extensionality, pairing, union, power set, separation (restricted comprehension) |
| 3.3 | Infinity, Replacement & Foundation | Add the axioms that give infinite sets and a well-founded universe | axiom of infinity, replacement, foundation/regularity, the cumulative hierarchy $V_\alpha$ |
| 3.4 | The Axiom of Choice & Its Equivalents | State AC and prove its equivalence with Zorn and well-ordering | axiom of choice, choice functions, Zorn's lemma, well-ordering theorem |

**Boss problem 3:** (a) Prove that no set is a member of itself, citing exactly which axiom you use. (b) Give a concrete, non-tautological existence result that needs the Axiom of Choice (e.g., every vector space has a basis, or a set with no choice-free selection), and show where a Zorn's-lemma argument invokes maximality. State plainly which step would fail in ZF without Choice. This thread — Zorn producing maximal objects — is the same one you'll use in [topology](../topology/syllabus.md) and [real-analysis](../real-analysis/syllabus.md).

### Module 4: Ordinals, Cardinals & the Infinite

Counting past infinity. Well-orderings give the ordinals; equinumerosity gives the cardinals; diagonalization proves there is more than one infinity.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Relations, Orderings & Well-Ordering | Classify order relations and recognize well-ordered sets | relations, partial/total orders, well-ordering, order isomorphism |
| 4.2 | Ordinals & Transfinite Induction | Run inductions and definitions that pass through limit stages | ordinals, successor vs. limit, transfinite induction & recursion |
| 4.3 | Cardinals & Cantor's Theorem | Compare sizes of infinite sets and prove $|A| < |\mathcal{P}(A)|$ | cardinality, countable vs. uncountable, Cantor's diagonal argument, Cantor–Schröder–Bernstein |
| 4.4 | The Continuum & Cardinal Arithmetic | Situate $\aleph_0$, $2^{\aleph_0}$, and the Continuum Hypothesis | $\aleph$ numbers, $2^{\aleph_0}$, cardinal arithmetic, Continuum Hypothesis & its independence |

**Boss problem 4:** (a) Prove $\mathbb{R}$ is uncountable by diagonalization, being explicit about how the constructed element differs from every listed one. (b) Show $|\mathcal{P}(\mathbb{N})| = |\mathbb{R}|$ by exhibiting maps both ways and invoking Cantor–Schröder–Bernstein. (c) State the Continuum Hypothesis in terms of your answer and say, in one sentence, what "independent of ZFC" means for it.

### Module 5: Incompleteness & Undecidability (a taste)

The limits of the whole enterprise. No proof marathon — the goal is to state Gödel's theorems precisely, feel *why* they're true, and understand the fallout.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Coding, Diagonalization & the First Incompleteness Theorem | State the first theorem and sketch the self-reference behind it | arithmetization / Gödel numbering, representability, the diagonal lemma, "this sentence is unprovable" |
| 5.2 | The Second Theorem & (Un)decidability | State the second theorem and connect logic to computation | consistency unprovable-in-system, decidability, the Entscheidungsproblem, halting-problem link |

**Boss problem 5:** In your own words and with no appeal to the machinery you haven't built, explain to a skeptical friend (a) what the first incompleteness theorem asserts about any consistent, sufficiently strong, effectively axiomatized system, (b) why the second theorem follows in spirit from the first, and (c) one concrete consequence — mathematical or computational — of a genuine undecidable statement. Point out where the same diagonalization idea appeared earlier in this course (Cantor, 4.3) and where it will reappear in the future CS course [theory-of-computation](../theory-of-computation/syllabus.md).

## Sources of truth

- Enderton, *A Mathematical Introduction to Logic* — for propositional/first-order syntax, semantics, and the completeness theorem.
- Enderton, *Elements of Set Theory* (or Halmos, *Naive Set Theory*) — for the ZFC axioms, ordinals, and cardinals.
- Goldstern & Judah, *The Incompleteness Phenomenon* — for the statement-level treatment of Gödel's theorems.
- Notation and rigor level follow `proofs-primer`; lessons are self-contained, so these are for the curious.
