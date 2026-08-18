# Logic & Set Theory · Lesson 1.4: A Proof System & Its Completeness

> ⏱ ~15 min · Module 1: Propositional Logic · Builds on: [Lesson 1.3 (Entailment & Normal Forms)](01-03-entailment-equivalence-normal-forms.md) · Unlocks: [Lesson 2.1 (Quantifiers & Syntax)](02-01-quantifiers-syntax.md)

## Why this matters

Everything in Lesson 1.3 was **semantic**: to know that $\varphi$ follows from $\Gamma$, you checked every valuation — a truth table with $2^n$ rows. That's a search over *meanings*. But mathematics doesn't actually run truth tables; it writes **proofs** — finite chains of symbol-pushing where each step is licensed by a fixed rule, meaning never mentioned. This lesson builds that syntactic machine and then asks the two questions that justify the whole enterprise of logic: does the machine only produce truths (**soundness**), and can it produce *every* truth (**completeness**)? The answer — yes to both — is why a proof on paper is as good as a truth table, and it sets up the far deeper first-order version (Gödel's completeness theorem, [Lesson 2.4](02-04-soundness-completeness-fol.md)) and its eventual limit (incompleteness, [Lesson 5.1](05-01-incompleteness-first-theorem.md)).

## The idea

Split the world in two.

- **Semantics** (Lesson 1.3): $\Gamma \models \varphi$ means "every valuation making all of $\Gamma$ true makes $\varphi$ true." This is about *truth*. To verify it you look at all $2^n$ worlds.
- **Syntax** (this lesson): $\Gamma \vdash \varphi$ means "there is a finite formal derivation of $\varphi$ from $\Gamma$." This is about *proof*. To verify it you exhibit one derivation and check each line obeys a rule — no worlds, no meanings, just a game of symbols.

A **proof system** is nothing more than a fixed, finite rulebook for that game. I'll use **natural deduction**: a small set of rules, two per connective — one to *introduce* the connective (build it) and one to *eliminate* it (use it). The genius of the design is that the rules mirror how you actually argue: to prove "if $\varphi$ then $\psi$", you *assume* $\varphi$, derive $\psi$, then discharge the assumption. The whole system is honest by construction — but *whether it's honest, and whether it's enough*, are theorems, not design choices. Those theorems are soundness and completeness.

## The formal version

Write derivations in **Fitch style**: a numbered list of lines, where a temporary **assumption** opens an indented subproof (I mark it with `|`), and certain rules *discharge* that assumption — closing the subproof and returning to the outer level.

**The rules** (natural deduction, classical propositional logic). Greek letters $\varphi,\psi,\chi$ stand for any formulas; $\bot$ is the constant *false*.

| Connective | Introduction | Elimination |
|---|---|---|
| $\land$ | $\land$I: from $\varphi$ and $\psi$, infer $\varphi\land\psi$ | $\land$E: from $\varphi\land\psi$, infer $\varphi$ (also $\psi$) |
| $\to$ | $\to$I: if assuming $\varphi$ you derive $\psi$, discharge and infer $\varphi\to\psi$ | $\to$E (*modus ponens*): from $\varphi$ and $\varphi\to\psi$, infer $\psi$ |
| $\lor$ | $\lor$I: from $\varphi$, infer $\varphi\lor\psi$ (and $\psi\lor\varphi$) | $\lor$E (*cases*): from $\varphi\lor\psi$ and subproofs $\varphi\Rightarrow\chi$, $\psi\Rightarrow\chi$, infer $\chi$ |
| $\neg,\ \bot$ | $\neg$I: if assuming $\varphi$ you derive $\bot$, discharge and infer $\neg\varphi$ | $\neg$E: from $\varphi$ and $\neg\varphi$, infer $\bot$ |

Two more rules govern $\bot$:

- **$\bot$E (*ex falso*):** from $\bot$, infer *any* $\varphi$. (A contradiction proves everything.)
- **RAA (*reductio*):** if assuming $\neg\varphi$ you derive $\bot$, discharge and infer $\varphi$. (Proof by contradiction.)

RAA is the one rule that reaches beyond "constructive" logic: it's exactly what makes the system match the **two-valued** truth tables of Lesson 1.2 (every atom is true *or* false, no third option). Drop it and you get a strictly weaker system.

**Definition (derivability).** $\Gamma \vdash \varphi$ means there is a finite derivation ending in $\varphi$ whose only *undischarged* assumptions belong to $\Gamma$. When $\Gamma = \varnothing$ we write $\vdash \varphi$ and call $\varphi$ a **theorem**.

*In words:* $\Gamma \vdash \varphi$ says you can grind out $\varphi$ from the members of $\Gamma$ using only the rulebook — a purely mechanical fact about symbols.

Now the two theorems tying syntax to the semantics of Lesson 1.3.

**Soundness.** If $\Gamma \vdash \varphi$, then $\Gamma \models \varphi$.
*In words:* the rulebook never lies — anything you can formally derive is genuinely entailed. Proof idea: each single rule *preserves truth* (e.g. if a valuation makes $\varphi$ and $\varphi\to\psi$ true, it makes $\psi$ true), so by induction on the length of the derivation, truth flows from the assumptions to the conclusion.

**Completeness** (Post, for propositional logic). If $\Gamma \models \varphi$, then $\Gamma \vdash \varphi$.
*In words:* the rulebook is *enough* — every semantic truth has a formal proof; there are no true-but-unprovable gaps. This direction is the hard one (the standard proof shows every consistent set has a satisfying valuation).

Together, $\vdash$ and $\models$ **coincide**:
$$\Gamma \vdash \varphi \quad\Longleftrightarrow\quad \Gamma \models \varphi.$$

- **Soundness buys trust and refutation.** A derivation *certifies* entailment, so you can stop checking valuations. And to prove something is *not* provable, you needn't search all derivations — just exhibit one countermodel (a valuation making $\Gamma$ true and $\varphi$ false); soundness's contrapositive then says $\Gamma \nvdash \varphi$.
- **Completeness buys finiteness.** Semantic entailment is a statement about (possibly infinitely many) valuations; completeness converts it into a *finite* object — a proof — that a person or a machine can produce and check.

**Compactness** (corollary). A set $\Gamma$ of formulas is satisfiable **iff** every finite subset of $\Gamma$ is satisfiable.

*In words:* unsatisfiability can never be a purely "infinite" phenomenon — if a whole (possibly infinite) set of demands is contradictory, some finite handful of them already is.

*Why it follows.* One direction is trivial (a valuation satisfying $\Gamma$ satisfies each finite subset). For the other, argue the contrapositive: suppose $\Gamma$ is **un**satisfiable. Then no valuation satisfies $\Gamma$, so vacuously $\Gamma \models \bot$. By **completeness**, $\Gamma \vdash \bot$. But a derivation is a *finite* object, so it uses only finitely many undischarged assumptions $\Gamma_0 \subseteq \Gamma$; hence $\Gamma_0 \vdash \bot$, and by **soundness** $\Gamma_0 \models \bot$ — i.e. that *finite* subset $\Gamma_0$ is already unsatisfiable. Contrapositive: if every finite subset is satisfiable, so is $\Gamma$. $\blacksquare$ The entire force of compactness is "**proofs are finite**."

## Concrete instance

A fully worked derivation of the sequent $p \land q \vdash q \land p$ (conjunction commutes). Read the *Rule* column as the justification for that line.

| # | Formula | Rule |
|---|---|---|
| 1 | $p \land q$ | premise (in $\Gamma$) |
| 2 | $p$ | $\land$E, from 1 |
| 3 | $q$ | $\land$E, from 1 |
| 4 | $q \land p$ | $\land$I, from 3 and 2 |

Line 4 is $q\land p$ with no undischarged assumptions beyond $p\land q$, so $p\land q \vdash q\land p$. Notice what *didn't* happen: at no point did we ask what $p$ or $q$ *mean*. Four rule-checks, done. (By soundness we now also know $p\land q \models q\land p$ for free — no truth table needed.)

## Worked examples

**Example 1 (mechanical — a theorem from nothing).** Derive $\vdash p \to p$. The goal is an implication, so reach for $\to$I: assume the antecedent, re-derive the consequent, discharge.

| # | Formula | Rule |
|---|---|---|
| 1 | $\quad\mid p$ | assumption |
| 2 | $\quad\mid p$ | reiterate line 1 |
| 3 | $p \to p$ | $\to$I, discharging 1–2 |

The assumption on line 1 is *discharged* at line 3, so line 3 rests on nothing: $\vdash p\to p$. This is the syntactic twin of "$p\to p$ is a tautology" from Lesson 1.2 — and completeness is exactly the promise that *every* tautology has such a derivation.

**Example 2 (why you'd care — modus tollens as a subproof).** Derive $\{\,p\to q,\ \neg q\,\} \vdash \neg p$: from "if $p$ then $q$" and "not $q$", conclude "not $p$". The goal is a negation, so reach for $\neg$I: assume $p$, drive to $\bot$, discharge.

| # | Formula | Rule |
|---|---|---|
| 1 | $p \to q$ | premise |
| 2 | $\neg q$ | premise |
| 3 | $\quad\mid p$ | assumption |
| 4 | $\quad\mid q$ | $\to$E, from 1 and 3 |
| 5 | $\quad\mid \bot$ | $\neg$E, from 4 and 2 |
| 6 | $\neg p$ | $\neg$I, discharging 3–5 |

The subproof (lines 3–5) shows that assuming $p$ forces a contradiction against $\neg q$; discharging it yields $\neg p$. This is a *pattern* — a reusable law of reasoning derived once, purely syntactically. That's the payoff of a proof system: you certify inference rules by proof, then apply them forever without re-checking meanings.

## Watch out

- **You might think** $\vdash$ and $\models$ are two notations for the same thing — but they're defined in *completely different worlds*: $\vdash$ is a finite proof (syntax), $\models$ is a quantifier over all valuations (semantics). That they turn out equivalent is the *content* of soundness + completeness, not a definition. Always know which turnstile you're claiming.
- **You might think** "completeness" here is threatened by *Gödel's incompleteness* theorem — but they're different animals. **Gödel's completeness theorem** (Lesson 2.4) says first-order logic's proof rules capture all logical validities. **Gödel's incompleteness theorem** (Lesson 5.1) says a specific rich *theory* (arithmetic) can't prove all *arithmetical truths*. Propositional/first-order logic is complete; arithmetic-as-a-theory is incomplete. No contradiction.
- **You might think** compactness is obvious once stated — but it fails badly without the "finite proof" backbone. It is the workhorse behind building infinite models from finite consistency (Boss problem 2, Lesson 2.4), and it has no analogue in, say, second-order logic.

## One-liner

> $\vdash$ is proof and $\models$ is truth; soundness says proof implies truth, completeness says truth implies proof, and compactness is just the reminder that every proof is finite.

## Problems

**P1 (🟢)** Derive the sequent $\{\,p,\ p\to q,\ q\to r\,\} \vdash r$ in the natural-deduction system (hypothetical syllogism, applied). Write it line-by-line with rule justifications, then name the single semantic fact soundness lets you conclude for free.

**P2 (🟡)** Using **only** soundness (not any derivation), prove that $\{\,p\to q\,\} \nvdash q$ — i.e. you *cannot* derive $q$ from $p\to q$ alone. (Hint: contrapositive of soundness — find a valuation.)

**P3 (🔴, optional)** An infinite set $\Gamma = \{\varphi_1, \varphi_2, \varphi_3, \dots\}$ has the property that for **every** valuation $v$, at least one $\varphi_i$ is false under $v$ (so $\Gamma$ is unsatisfiable). Use **compactness** to conclude something strictly stronger and finite. State it precisely.

<details>
<summary>Solutions</summary>

**P1** Chain two modus ponens steps:

| # | Formula | Rule |
|---|---|---|
| 1 | $p$ | premise |
| 2 | $p \to q$ | premise |
| 3 | $q \to r$ | premise |
| 4 | $q$ | $\to$E, from 2 and 1 |
| 5 | $r$ | $\to$E, from 3 and 4 |

So $\{p,\ p\to q,\ q\to r\} \vdash r$. By **soundness**, this immediately gives the semantic fact $\{p,\ p\to q,\ q\to r\} \models r$ — every valuation making all three premises true makes $r$ true — with no truth table drawn.

**P2** By the contrapositive of **soundness**: if $\{p\to q\} \vdash q$ held, then $\{p\to q\} \models q$ would hold too. So it suffices to find a valuation making $p\to q$ true but $q$ false. Take $v(p) = \text{F}$, $v(q) = \text{F}$. Then $p\to q$ is $\text{F}\to\text{F} = \text{T}$ (an implication with false antecedent is true), while $q = \text{F}$. This valuation witnesses $\{p\to q\} \not\models q$, hence by soundness $\{p\to q\} \nvdash q$. $\blacksquare$ (Note we proved *unprovability* without inspecting a single derivation — that's soundness earning its keep.)

**P3** Since $\Gamma$ is unsatisfiable, by **compactness** (contrapositive form: if $\Gamma$ is unsatisfiable then some finite subset is) there is a **finite** subset $\Gamma_0 = \{\varphi_{i_1}, \dots, \varphi_{i_k}\} \subseteq \Gamma$ that is *already* unsatisfiable. Precisely: there exist finitely many indices $i_1,\dots,i_k$ such that no valuation makes all of $\varphi_{i_1},\dots,\varphi_{i_k}$ simultaneously true. The strengthening is that the contradiction is *localized* to finitely many formulas — you never need the whole infinite list to exhibit the clash.

</details>

## Flashback

**From Lesson 1.3 (Entailment & Normal Forms):** Convert $\neg(p \to q) \lor r$ into **conjunctive normal form** (a conjunction of clauses, each clause a disjunction of literals). Show each equivalence step.

<details>
<summary>Solution</summary>

Eliminate the implication, push the negation inward, then distribute.

- Rewrite the implication using $p\to q \equiv \neg p \lor q$:
$$\neg(p\to q)\lor r \;\equiv\; \neg(\neg p \lor q)\lor r.$$
- Apply De Morgan to $\neg(\neg p \lor q)$:
$$\equiv\; (\neg\neg p \land \neg q)\lor r.$$
- Cancel the double negation:
$$\equiv\; (p \land \neg q)\lor r.$$
- Distribute $\lor$ over $\land$:
$$\equiv\; (p \lor r)\land(\neg q \lor r).$$

The result $(p\lor r)\land(\neg q\lor r)$ is CNF: a conjunction of two clauses, $\{p, r\}$ and $\{\neg q, r\}$. (Sanity check on a valuation: $v(p)=\text{T}, v(q)=\text{T}, v(r)=\text{F}$ gives original $\neg(\text{T})\lor\text{F} = \text{F}$, and CNF $(\text{T})\land(\text{F}\lor\text{F}) = \text{F}$ — agree. ✓)

</details>

## Connections

- **Backward (Lesson 1.3):** entailment $\models$ was defined semantically over all valuations; this lesson gives its syntactic twin $\vdash$, and soundness + completeness prove the two agree — so the CNF/tautology facts of 1.2–1.3 all have formal proofs.
- **Forward (Lesson 2.4):** the same soundness/completeness/compactness trio is restated for *first-order* logic, where completeness is **Gödel's completeness theorem** and compactness becomes a model-building tool (arbitrarily large finite models force an infinite one — Boss problem 2). The propositional case here is the honest warm-up.
- **Forward (Lesson 5.1):** completeness ("logic proves all its validities") sits right next to its famous foil, Gödel's *incompleteness* ("arithmetic can't prove all its truths") — keep the two straight; the "Watch out" note is the whole distinction in miniature.
- **Sideways (proof habits):** the discharge-an-assumption move of $\to$I and $\neg$I is exactly conditional proof and proof-by-contradiction from [proofs-primer](../../proofs-primer/syllabus.md) — now recognized as *formal inference rules*, not just informal style.
