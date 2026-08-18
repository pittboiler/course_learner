# Logic & Set Theory · Lesson 1.3: Entailment & Equivalence

> ⏱ ~15 min · Module 1: Propositional Logic · Builds on: [Lesson 1.2](01-02-semantics-truth-tables.md) (valuations, truth tables, tautology/contradiction) · Unlocks: [Lesson 1.4](01-04-proof-system-completeness.md) (a proof system and its completeness)

## Why this matters

Lesson 1.2 gave you a way to *evaluate* a single formula. But real reasoning is about *following*: does this conclusion have to be true whenever the premises are? That relation — semantic entailment — is the target that the entire proof machinery of Lesson 1.4 is built to hit, and "soundness + completeness" will be the claim that a purely syntactic game of symbol-pushing lands on *exactly* this semantic relation and nothing else. Along the way you'll learn to rewrite any formula into a rigid **normal form** — the same move a SAT solver makes before it does anything else, and the reason a handful of connectives can express every logic gate in the chip in front of you.

## The idea

Two formulas are **equivalent** if they are interchangeable: no valuation can tell them apart. "It's not the case that it's raining and cold" and "it's not raining, or it's not cold" are the same claim about the world — that's De Morgan's law, and equivalence is just the promise that swapping one for the other never changes a truth value anywhere.

**Entailment** is one-directional. The premises $\Gamma$ *entail* $\varphi$ when every world making all of $\Gamma$ true also makes $\varphi$ true — $\varphi$ is forced, it has nowhere to be false while the premises hold. Notice the shape: entailment quantifies over valuations exactly the way a tautology does, and that's not a coincidence — a single premise entails $\varphi$ precisely when "premise $\to \varphi$" is a tautology. Entailment is a tautology wearing a premise.

Finally, **normal forms** are about standardization. Any formula, however tangled, can be beaten into a canonical shape — an AND of ORs (CNF) or an OR of ANDs (DNF) — using nothing but equivalences you already half-know. Once formulas live in a standard shape, questions about them ("is this satisfiable?") become mechanical.

## The formal version

Throughout, $\varphi, \psi, \chi$ are propositional formulas and a **valuation** $v$ assigns true/false to every atom (Lesson 1.2). Write $v \models \varphi$ for "$\varphi$ is true under $v$."

**Definition (logical equivalence).** $\varphi \equiv \psi$ means $v \models \varphi \iff v \models \psi$ for *every* valuation $v$.

*In words:* $\varphi$ and $\psi$ have identical columns in the truth table — same value in every row.

**Definition (semantic entailment).** Let $\Gamma$ be a set of formulas. Then $\Gamma \models \varphi$ ("$\Gamma$ entails $\varphi$," or "$\varphi$ is a semantic consequence of $\Gamma$") means: every valuation $v$ with $v \models \gamma$ for all $\gamma \in \Gamma$ also has $v \models \varphi$.

*In words:* there is no valuation that makes every premise true but the conclusion false. We write $\Gamma \not\models \varphi$ when such a counterexample valuation exists.

Two boundary cases sharpen the definition. When $\Gamma = \varnothing$, the condition "$v$ satisfies all of $\Gamma$" is vacuously met by every $v$, so $\varnothing \models \varphi$ means $\varphi$ is a **tautology** — usually abbreviated $\models \varphi$. And if $\Gamma$ is *unsatisfiable* (no valuation satisfies it), then $\Gamma \models \varphi$ holds for **every** $\varphi$ — vacuously, since there is no premise-satisfying valuation to check. Contradictions entail everything.

**The deduction connection.** Entailment and equivalence both range over all valuations, so it is no surprise they collapse into each other:
$$\{\psi\} \models \varphi \quad\iff\quad {}\models (\psi \to \varphi),$$
and more generally $\Gamma \cup \{\psi\} \models \varphi \iff \Gamma \models (\psi \to \varphi)$.

*In words:* "$\psi$ entails $\varphi$" and "$\psi \to \varphi$ is a tautology" are the same statement. Entailment lets you *move a premise across the turnstile* and pay for it with an implication. (This is the semantic shadow of the Deduction Theorem you'll prove syntactically, with $\vdash$ in place of $\models$, in Lesson 1.4.)

**The equivalence toolkit.** Each identity below is checkable in one truth table; memorize the shapes, not the proofs.

| Name | Equivalence |
|---|---|
| Double negation | $\neg\neg\varphi \equiv \varphi$ |
| Implication | $\varphi \to \psi \equiv \neg\varphi \lor \psi$ |
| Contrapositive | $\varphi \to \psi \equiv \neg\psi \to \neg\varphi$ |
| Biconditional | $\varphi \leftrightarrow \psi \equiv (\varphi \to \psi) \land (\psi \to \varphi)$ |
| De Morgan | $\neg(\varphi \land \psi) \equiv \neg\varphi \lor \neg\psi$;  $\neg(\varphi \lor \psi) \equiv \neg\varphi \land \neg\psi$ |
| Distributivity | $\varphi \land (\psi \lor \chi) \equiv (\varphi\land\psi)\lor(\varphi\land\chi)$;  $\varphi \lor (\psi \land \chi) \equiv (\varphi\lor\psi)\land(\varphi\lor\chi)$ |

**Definition (literals, clauses, normal forms).** A **literal** is an atom $p$ or a negated atom $\neg p$. A formula is in **conjunctive normal form (CNF)** if it is a conjunction of *clauses*, each clause a disjunction of literals — an AND of ORs, like $(p \lor \neg q) \land (\neg p \lor r)$. It is in **disjunctive normal form (DNF)** if it is a disjunction of conjunctions of literals — an OR of ANDs.

*In words:* CNF = "AND of ORs"; DNF = "OR of ANDs." Every formula is equivalent to one of each.

**Converting to CNF (three moves).** Apply the toolkit in order:
1. **Eliminate $\to$ and $\leftrightarrow$** using the implication and biconditional identities, leaving only $\neg, \land, \lor$.
2. **Push negations inward** with De Morgan and double negation until $\neg$ sits only on atoms. (The formula is now in *negation normal form*.)
3. **Distribute $\lor$ over $\land$** to pull every $\land$ to the outside. The result is CNF. (For DNF instead, distribute $\land$ over $\lor$ in step 3.)

**Definition (functional completeness).** A set of connectives is **functionally complete** if every truth function — every possible column of trues and falses over $n$ atoms — is realized by some formula using only those connectives.

**Theorem.** $\{\neg, \land, \lor\}$ is functionally complete; so are $\{\neg, \land\}$, $\{\neg, \lor\}$, and the single connective NAND ($\uparrow$, where $\varphi \uparrow \psi := \neg(\varphi \land \psi)$).

*In words:* those few gates suffice to build *any* logical behavior — the theoretical license behind a chip built entirely from NAND gates. The proof is the "Concrete instance" below.

## Concrete instance

**Part A — a completeness recipe (DNF from a truth table).** Given *any* truth function, here is a formula for it, using only $\neg, \land, \lor$. Suppose we want the function of $p, q, r$ that is true on exactly two rows:

| $p$ | $q$ | $r$ | target |
|---|---|---|---|
| T | F | T | **T** |
| F | T | F | **T** |
| *(all 6 other rows)* | | | F |

For each true row, write the conjunction of literals that pins down that row (atom if true, negation if false), then OR the rows together:
$$(p \land \neg q \land r) \;\lor\; (\neg p \land q \land \neg r).$$
This formula is true on exactly the two chosen rows and false elsewhere — read it off. Since *any* truth function is a set of true rows, this recipe always works, so $\{\neg, \land, \lor\}$ is functionally complete. (If the function is true on *no* row, use $p \land \neg p$; the empty OR is the contradiction.) This construction is exactly how you'd build DNF — the target's DNF *is* its list of satisfying rows.

**Shrinking the toolkit.** Now eliminate $\lor$ using De Morgan backwards: $\varphi \lor \psi \equiv \neg(\neg\varphi \land \neg\psi)$. So anything expressible with $\{\neg,\land,\lor\}$ is expressible with $\{\neg,\land\}$ — complete. Finally, NAND does both jobs alone:
$$\neg\varphi \equiv \varphi \uparrow \varphi, \qquad \varphi \land \psi \equiv (\varphi \uparrow \psi) \uparrow (\varphi \uparrow \psi).$$
From those two, $\neg$ and $\land$ are available, and we just saw $\{\neg,\land\}$ is complete — so $\{\uparrow\}$ is complete.

## Worked examples

**Example 1 (test an entailment by truth table).** Does $\{\,p \to q,\; q \to r\,\} \models (p \to r)$? (This is *hypothetical syllogism* — chaining implications.) List every valuation; the only rows that matter are those where **both** premises are true, and we check the conclusion there.

| $p$ | $q$ | $r$ | $p\to q$ | $q\to r$ | both prem. | $p\to r$ |
|---|---|---|---|---|---|---|
| T | T | T | T | T | ✓ | T |
| T | T | F | T | F | — | F |
| T | F | T | F | T | — | T |
| T | F | F | F | T | — | F |
| F | T | T | T | T | ✓ | T |
| F | T | F | T | F | — | T |
| F | F | T | T | T | ✓ | T |
| F | F | F | T | T | ✓ | T |

In every row where both premises hold (✓), $p \to r$ is true. No counterexample exists, so the entailment **holds**. By the deduction connection, this is the same as saying $(p\to q) \land (q\to r) \to (p\to r)$ is a tautology.

**Example 2 (convert a formula to CNF).** Put $\varphi = (p \lor q) \to (p \land r)$ into CNF.

*Step 1 — kill the arrow.* Using $A \to B \equiv \neg A \lor B$:
$$\varphi \equiv \neg(p \lor q) \lor (p \land r).$$
*Step 2 — push negation inward* (De Morgan on $\neg(p \lor q)$):
$$\equiv (\neg p \land \neg q) \lor (p \land r).$$
This is now an OR of two ANDs — that's already **DNF**. For CNF we keep going.

*Step 3 — distribute $\lor$ over $\land$.* Treat the outer $\lor$ as distributing across both conjunctions:
$$\equiv \big[(\neg p \land \neg q) \lor p\big] \;\land\; \big[(\neg p \land \neg q) \lor r\big]$$
$$\equiv (\neg p \lor p)\land(\neg q \lor p) \;\land\; (\neg p \lor r)\land(\neg q \lor r).$$
The clause $\neg p \lor p$ is a tautology, always true, so it contributes nothing to a conjunction and drops out. Final CNF:
$$\boxed{(p \lor \neg q) \land (\neg p \lor r) \land (\neg q \lor r).}$$
Sanity read of the middle clause $\neg p \lor r$: it says $p \to r$, which had better hold since $p$ forces $p \land r$ forces $r$. (Verified against $\varphi$ over all 8 valuations — they match.)

## Watch out

- **Entailment is not implication, and $\models$ is not a connective.** $\varphi \to \psi$ is a *formula* (it has a truth value in each row); $\Gamma \models \varphi$ is a *statement about all rows at once* (true or false, full stop). The deduction connection *relates* them — $\{\psi\}\models\varphi$ iff $\models(\psi\to\varphi)$ — but you may never write $\models$ *inside* a formula.
- **Distributivity has a direction that bites.** To reach CNF you distribute $\lor$ over $\land$; to reach DNF you distribute $\land$ over $\lor$. Grab the wrong one and you'll circle back to the form you started with. And distributing can blow up the size — $(a_1\land b_1)\lor\cdots\lor(a_n\land b_n)$ explodes into $2^n$ clauses in CNF. Normal forms are canonical, not always cheap.
- **"Functionally complete" is about *all* truth functions, not just the handy ones.** $\{\land, \lor\}$ feels expressive but is *not* complete: every formula built from $\land, \lor$ alone is true when all atoms are true (see P3), so it can never express $\neg p$. You need something that can *flip* a value.

## One-liner

> Entailment is a tautology with its premise moved across the turnstile; normal forms are the standard shape every formula can be beaten into with De Morgan and distributivity — and a few connectives beat out all the rest.

## Problems

**P1 (🟢)** Convert $\varphi = p \to (q \land r)$ to CNF, showing each of the three moves. Then state its DNF (it's already visible after step 1).

**P2 (🟡)** Decide whether $\{\,p \lor q,\; p \to r,\; q \to r\,\} \models r$ (this is *constructive dilemma* / proof by cases). Justify with the relevant rows of a truth table, or with a short valuation argument, and say what a counterexample *would* look like if it existed.

**P3 (🔴, optional)** Prove that $\{\land, \lor\}$ is **not** functionally complete. (Hint: consider the valuation making every atom true, and induct on formula structure to show any $\{\land,\lor\}$-formula is true there. Then find a truth function that isn't.)

<details>
<summary>Solutions</summary>

**P1** *Step 1 (eliminate $\to$):* $p \to (q \land r) \equiv \neg p \lor (q \land r)$. This is an OR of the conjunctions $\neg p$ (a one-literal conjunction) and $q \land r$, so the **DNF** is $\neg p \lor (q \land r)$.

*Step 2 (push negation inward):* $\neg$ already sits only on the atom $p$ — nothing to do.

*Step 3 (distribute $\lor$ over $\land$):* $\neg p \lor (q \land r) \equiv (\neg p \lor q) \land (\neg p \lor r)$. That is the **CNF**:
$$(\neg p \lor q) \land (\neg p \lor r).$$
(Check: both clauses say $p \to q$ and $p \to r$; together, $p \to (q \land r)$ — exactly $\varphi$. Verified over all 8 valuations.)

**P2** The entailment **holds**. Take any valuation satisfying all three premises. From $p \lor q$, at least one of $p, q$ is true. If $p$ is true, then $p \to r$ forces $r$ true. If $q$ is true, then $q \to r$ forces $r$ true. Either way $r$ is true, so no premise-satisfying valuation makes $r$ false — that is $\{p\lor q, p\to r, q\to r\} \models r$.

By truth table: among the 8 rows, the premises are all true only when $r = \text{T}$ (any row with $r=\text{F}$ fails, because $p\lor q$ needs $p$ or $q$ true, and that true atom's implication then needs $r$ true — contradiction). A counterexample *would* be a row with all three premises true yet $r$ false; the argument shows no such row exists.

**P3** Claim: every formula $\varphi$ built from atoms using only $\land$ and $\lor$ evaluates to **true** under the valuation $v_\top$ that makes every atom true. Induct on the structure of $\varphi$:
- *Base:* $\varphi$ is an atom $p$. Then $v_\top \models p$ since $v_\top$ makes all atoms true.
- *Step ($\land$):* $\varphi = \psi \land \chi$ with $v_\top \models \psi$ and $v_\top \models \chi$ by the induction hypothesis; hence $v_\top \models \psi \land \chi$.
- *Step ($\lor$):* $\varphi = \psi \lor \chi$; by hypothesis $v_\top \models \psi$ (indeed both), so $v_\top \models \psi \lor \chi$.

So *every* $\{\land,\lor\}$-formula is true at $v_\top$. But the truth function $\neg p$ is **false** at $v_\top$ (where $p$ is true). Therefore no $\{\land,\lor\}$-formula computes $\neg p$, and $\{\land,\lor\}$ is not functionally complete. $\blacksquare$

(Moral: completeness requires a connective that can *lower* a value — $\land,\lor$ are monotone, and can only preserve or raise. This is why $\neg$, or NAND which hides a $\neg$ inside, is indispensable.)

</details>

## Flashback

**From [Lesson 1.2](01-02-semantics-truth-tables.md) (semantics & truth tables):** Build the full truth table for $\varphi = (p \to q) \lor (q \to p)$ and classify it as a tautology, a contradiction, or contingent.

<details>
<summary>Solution</summary>

| $p$ | $q$ | $p \to q$ | $q \to p$ | $\varphi = (p\to q)\lor(q\to p)$ |
|---|---|---|---|---|
| T | T | T | T | T |
| T | F | F | T | T |
| F | T | T | F | T |
| F | F | T | T | T |

The final column is true in every row, so $\varphi$ is a **tautology**. Intuition: for any two propositions, at least one direction of implication must hold — an implication can only fail when its antecedent is true and consequent false, and $p, q$ can't each be the true-antecedent-false-consequent for the *other* at the same time. This is the propositional seed of *totality* — "any two things are comparable one way or the other" — which returns as a defining property of total orders in [Lesson 4.1](04-01-relations-orderings-well-ordering.md).

</details>

## Connections

- **Backward:** entailment and equivalence are both defined by quantifying over the valuations of [Lesson 1.2](01-02-semantics-truth-tables.md) — $\equiv$ is "same in every row," $\models$ is "no counterexample row." Every equivalence in the toolkit is just a one-column-matches-another truth-table check.
- **Forward:** [Lesson 1.4](01-04-proof-system-completeness.md) introduces *derivability* $\vdash$ — a syntactic cousin of $\models$ — and the **completeness theorem** states $\Gamma \vdash \varphi \iff \Gamma \models \varphi$: the symbol-pushing proof system reaches exactly the entailments you learned to spot here. The semantic deduction connection above previews the syntactic Deduction Theorem there.
- **Sideways (CS / digital logic):** functional completeness is why every logic gate — and thus every circuit — can be built from NAND alone; CNF is the input format every SAT solver and the whole complexity theory of `theory-of-computation` are phrased over. DNF-from-a-truth-table is literally how you'd synthesize a circuit from a specification.
