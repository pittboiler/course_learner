# Logic & Set Theory · Lesson 1.2: Semantics & Truth Tables

> ⏱ ~15 min · Module 1: Propositional Logic · Builds on: [1.1 Syntax & Connectives](01-01-syntax-connectives.md) · Unlocks: [1.3 Entailment & Equivalence](01-03-entailment-equivalence-normal-forms.md)

## Why this matters

Lesson 1.1 taught you to *spell* — which strings of atoms and connectives are legal formulas. But a well-formed formula is just a shape until you give it meaning. Semantics is where meaning enters: fix what the atoms mean (true or false) and every formula built from them inherits a single, forced truth value. That machine — plug in the atoms, crank out the value — is the entire content of propositional logic's semantics, and it's what a SAT solver runs millions of times a second, what a digital circuit computes in silicon, and what lets you certify an argument as *valid* rather than merely persuasive. It's also where the notorious material conditional $\to$ trips people up, so we pin it down here for good.

## The idea

Think of a formula as a little circuit. The atoms $p, q, r, \dots$ are input switches, each either **on** ($T$) or **off** ($F$). Once you set every switch, the wiring — the connectives — determines exactly one output light: no ambiguity, no choices left. A **valuation** is just one setting of all the switches; the **truth table** is the exhaustive log of what the output does for *every* possible setting.

Because each atom is a two-way switch, $n$ distinct atoms give $2^n$ settings — 2 atoms, 4 rows; 3 atoms, 8 rows; and so on. Build that table and you know everything there is to know about the formula. Three verdicts are possible: the light is **always on** (a tautology — true no matter what), **always off** (a contradiction — false no matter what), or **sometimes on, sometimes off** (contingent). That trichotomy is the payoff of the whole lesson.

The one connective worth slowing down for is the arrow $\to$. Read $p \to q$ as a *promise*: "if $p$, then $q$." A promise is broken only in one situation — the hypothesis held but the conclusion failed. So $p \to q$ is **false exactly when $p$ is true and $q$ is false**, and true in all three other cases. In particular, a promise with a false hypothesis is never broken, so it counts as kept (true). That's not a philosophical claim about causation — it's a definition, chosen so the arrow behaves.

## The formal version

**Definition (valuation).** Let $\mathrm{At}$ be the set of atoms. A **valuation** (or **truth assignment**) is a function
$$v \colon \mathrm{At} \to \{T, F\}$$
assigning each atom a truth value. We extend $v$ to *every* formula by recursion on structure (the same "build meaning the way you built the formula" move from 1.1):

$$
\begin{aligned}
v(\neg\varphi) &= T \iff v(\varphi) = F, \\
v(\varphi \land \psi) &= T \iff v(\varphi) = T \text{ and } v(\psi) = T, \\
v(\varphi \lor \psi) &= T \iff v(\varphi) = T \text{ or } v(\psi) = T \ (\text{or both}), \\
v(\varphi \to \psi) &= F \iff v(\varphi) = T \text{ and } v(\psi) = F, \\
v(\varphi \leftrightarrow \psi) &= T \iff v(\varphi) = v(\psi).
\end{aligned}
$$

*In words:* negation flips; conjunction needs both; disjunction needs at least one (inclusive); the conditional fails only on true-hypothesis-false-conclusion; the biconditional says "same value." Every formula's value is now determined by $v$ on its atoms alone.

The base tables, once and for all:

| $\varphi$ | $\psi$ | $\neg\varphi$ | $\varphi\land\psi$ | $\varphi\lor\psi$ | $\varphi\to\psi$ | $\varphi\leftrightarrow\psi$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| T | T | F | T | T | T | T |
| T | F | F | F | T | **F** | F |
| F | T | T | F | T | T | F |
| F | F | T | F | F | T | T |

Notice the arrow's column: a single $F$, sitting exactly where hypothesis beats conclusion.

**Definition (classification).** A formula $\varphi$ is:
- a **tautology** (or **valid**) if $v(\varphi) = T$ for *every* valuation $v$;
- a **contradiction** (or **unsatisfiable**) if $v(\varphi) = F$ for *every* valuation $v$;
- **contingent** if $v(\varphi) = T$ for some valuation and $v(\varphi) = F$ for some other;
- **satisfiable** if $v(\varphi) = T$ for *at least one* valuation.

*In words:* tautologies are always-true, contradictions always-false, contingent formulas depend on the input. "Satisfiable" is the broad category — it covers tautologies *and* contingent formulas; the only unsatisfiable formulas are the contradictions.

These interlock: $\varphi$ is a tautology exactly when $\neg\varphi$ is a contradiction, and $\varphi$ is satisfiable exactly when $\neg\varphi$ is not a tautology (you'll prove this in P3). The next lesson turns "$\varphi$ is a tautology" into the entailment relation $\models$ and starts *rewriting* formulas rather than just classifying them.

## Concrete instance

**A fully worked table: is $(p \to q) \to (\neg q \to \neg p)$ a tautology?**

This is *contraposition* — the claim that "if $p$ then $q$" forces "if not $q$ then not $p$." Two atoms, so $2^2 = 4$ rows. Add a column per subformula, innermost first, and evaluate left to right; the last column is the verdict.

| $p$ | $q$ | $p\to q$ | $\neg q$ | $\neg p$ | $\neg q \to \neg p$ | $(p\to q)\to(\neg q\to\neg p)$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| T | T | T | F | F | F → F = T | T → T = **T** |
| T | F | F | T | F | T → F = F | F → F = **T** |
| F | T | T | F | T | F → T = T | T → T = **T** |
| F | F | T | T | T | T → T = T | T → T = **T** |

The final column is all $T$, so the formula is a **tautology**. Read row 2 carefully — it's the instructive one. There $p \to q$ is *false* and $\neg q \to \neg p$ is also *false*, yet the whole formula is *true*, because a conditional with a false hypothesis ($F \to F$) is true. That "false antecedent rescues the promise" move is exactly what people miss when they eyeball a conditional instead of running the table.

## Worked examples

**Example 1 (mechanical — a contingent formula).** Classify $(p \lor q) \to p$.

| $p$ | $q$ | $p\lor q$ | $(p\lor q)\to p$ |
|:-:|:-:|:-:|:-:|
| T | T | T | T → T = T |
| T | F | T | T → T = T |
| F | T | T | T → F = **F** |
| F | F | F | F → F = T |

The column is $T, T, F, T$ — true in three rows, false in one. So the formula is **contingent** (equivalently: satisfiable, but not a tautology). The lone failure, row 3, is the honest one: if $q$ is true and $p$ is false, then $p\lor q$ holds while $p$ doesn't, breaking the promise. To *classify* you needed the whole table; to prove it's *not* a tautology you only needed that single falsifying row — a shortcut we'll lean on constantly.

**Example 2 (why you'd care — certifying an argument).** An argument is **valid** when its premises can't all be true while its conclusion is false. The clean way to test this: form the conditional (premises conjoined) $\to$ (conclusion) and check whether *that* is a tautology. Take *modus ponens* — from $p$ and $p \to q$, conclude $q$ — encoded as $\big(p \land (p \to q)\big) \to q$.

| $p$ | $q$ | $p\to q$ | $p \land (p\to q)$ | $\big(p\land(p\to q)\big)\to q$ |
|:-:|:-:|:-:|:-:|:-:|
| T | T | T | T | T → T = T |
| T | F | F | F | F → F = T |
| F | T | T | F | F → T = T |
| F | F | T | F | F → F = T |

All $T$: a tautology, so modus ponens is valid — *no* valuation makes both premises true and the conclusion false. This is the entire idea behind checking arguments mechanically, and it scales: feed a solver the formula "(premises) $\land \neg$(conclusion)" and ask whether it's satisfiable — if it *isn't*, the argument is valid. Deciding satisfiability of such formulas is the SAT problem, the first problem ever proved NP-complete, which you'll meet again in [theory-of-computation](../../theory-of-computation/syllabus.md).

## Watch out

- You might think $p \to q$ asserts that $p$ *causes* or is *relevant to* $q$ — but the truth table knows nothing of relevance. "If the moon is cheese, then $2+2=4$" is **true**, because its hypothesis is false, so the promise is vacuously kept. The arrow is purely about the four input combinations, not about meaning or causation.
- You might think a formula that comes out false in some rows is a "contradiction" — but a contradiction must be false in *every* row. One false row (with at least one true row) makes it merely **contingent**. Reserve "contradiction" for the all-$F$ column.
- You might think "satisfiable" and "tautology" are the same, or that "satisfiable" and "contingent" are — neither. Satisfiable = true in *at least one* row, which *includes* tautologies. A tautology is satisfiable but not contingent; a contingent formula is satisfiable and falsifiable both. The only thing satisfiability rules out is contradiction.
- You might think $\lor$ is exclusive ("one or the other, not both") — but the logician's $\lor$ is **inclusive**: $T \lor T = T$. Exclusive-or is a different connective (it's $\neg(p \leftrightarrow q)$).

## One-liner

> Fix the atoms and every formula's value is forced; run all $2^n$ settings and the formula reveals itself as always-true (tautology), always-false (contradiction), or it-depends (contingent) — with the arrow false only when a true hypothesis meets a false conclusion.

## Problems

**P1 (🟢)** Build the full truth table for $(\neg p \lor q) \leftrightarrow (p \to q)$ and classify it (tautology / contradiction / contingent). State in one line what the result tells you about the formulas $\neg p \lor q$ and $p \to q$.

**P2 (🟡)** Is $(p \to q) \land (q \to r) \land p \land \neg r$ satisfiable? If yes, give a valuation that satisfies it; if no, classify the formula and justify *without* writing all 8 rows.

**P3 (🔴, optional)** Using only the definitions and the negation rule $v(\neg\varphi) = T \iff v(\varphi) = F$, prove: (a) $\varphi$ is a tautology if and only if $\neg\varphi$ is a contradiction; (b) $\varphi$ is satisfiable if and only if $\neg\varphi$ is not a tautology. Then use (a) to say, in one sentence, what P1's answer implies about $\neg\big((\neg p \lor q) \leftrightarrow (p \to q)\big)$.

<details>
<summary>Solutions</summary>

**P1**

| $p$ | $q$ | $\neg p$ | $\neg p \lor q$ | $p\to q$ | $(\neg p\lor q)\leftrightarrow(p\to q)$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| T | T | F | T | T | T ↔ T = T |
| T | F | F | F | F | F ↔ F = T |
| F | T | T | T | T | T ↔ T = T |
| F | F | T | T | T | T ↔ T = T |

The final column is all $T$, so the formula is a **tautology**. Since a biconditional is true exactly when its two sides agree, an all-$T$ biconditional column means $\neg p \lor q$ and $p \to q$ take the *same* value under every valuation — they are logically equivalent. (This equivalence, $p\to q \equiv \neg p \lor q$, is a workhorse of Lesson 1.3's normal forms.)

**P2** It is **not** satisfiable — it is a **contradiction**. Chase the conditionals instead of tabulating: for the conjunction to be true, every conjunct must be true. From $p$ (true) and $p \to q$ (true), the conditional's rule forces $q = T$ (if $q$ were $F$, then $p\to q$ would be $T \to F = F$). From $q = T$ and $q \to r$ (true), the same rule forces $r = T$. But the conjunct $\neg r$ demands $r = F$. No valuation can have $r$ both $T$ and $F$, so *no* valuation makes all four conjuncts true — the formula is false in all 8 rows, i.e. a contradiction.

**P3**
*(a)* ($\Rightarrow$) Suppose $\varphi$ is a tautology: $v(\varphi) = T$ for every $v$. By the negation rule, $v(\neg\varphi) = F$ for every $v$, so $\neg\varphi$ is a contradiction. ($\Leftarrow$) Suppose $\neg\varphi$ is a contradiction: $v(\neg\varphi) = F$ for every $v$. The negation rule says $v(\neg\varphi) = F \iff v(\varphi) = T$, so $v(\varphi) = T$ for every $v$; thus $\varphi$ is a tautology. $\blacksquare$

*(b)* ($\Rightarrow$) Suppose $\varphi$ is satisfiable: there is some $v_0$ with $v_0(\varphi) = T$. Then $v_0(\neg\varphi) = F$, so $\neg\varphi$ is false under at least one valuation — hence $\neg\varphi$ is not a tautology. ($\Leftarrow$) Suppose $\neg\varphi$ is not a tautology: some $v_0$ has $v_0(\neg\varphi) = F$, which means $v_0(\varphi) = T$, so $\varphi$ is satisfiable. $\blacksquare$

*Application:* P1 showed $(\neg p \lor q) \leftrightarrow (p \to q)$ is a tautology, so by (a) its negation $\neg\big((\neg p \lor q) \leftrightarrow (p \to q)\big)$ is a **contradiction** — unsatisfiable, false under all four valuations.

</details>

## Connections

- **Backward:** the recursion that defines $v$ on all formulas is the exact mirror of the recursion that *built* those formulas in [Lesson 1.1](01-01-syntax-connectives.md) — syntax gives the tree, semantics evaluates it bottom-up. Unique readability (1.1) is what guarantees each formula gets *one* value, never two.
- **Forward:** [Lesson 1.3](01-03-entailment-equivalence-normal-forms.md) promotes "is a tautology" into the entailment relation $\models$ and the equivalence $\equiv$ glimpsed in P1, then uses truth tables to justify rewriting every formula into CNF/DNF. [Lesson 1.4](01-04-proof-system-completeness.md) builds a *syntactic* proof calculus ($\vdash$) and proves it captures exactly the tautologies this lesson defines — soundness and completeness — closing the loop between $\models$ and $\vdash$.
- **Sideways (CS):** the validity-via-tautology test in Example 2 is the satisfiability question a SAT solver decides; the same trichotomy underlies digital circuit design (a formula is a combinational circuit, its truth table the spec) and reappears as the boundary of decidability in [theory-of-computation](../../theory-of-computation/syllabus.md).
