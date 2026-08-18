# Discrete Mathematics · Lesson 1.1: Propositional logic & Boolean algebra

> ⏱ ~15 min · Module 1: Logic & Proof · Builds on: nothing (course start) · Unlocks: 1.2 (predicate logic: quantifiers & negation)

## Why this matters

Every definition, theorem, and proof you meet from here on is a sentence in a formal language — and this is that language's grammar. Get it wrong and you'll "prove" things that are false, or fail to see that two ugly-looking conditions are secretly the same. The payoff is immediate and everywhere: it's the algebra a compiler runs on your `if` conditions, the logic a database uses to plan a `WHERE` clause, and the circuit theory behind every AND/OR gate in a chip. Master propositions now and the next three lessons — quantifiers, proof, induction — are just this idea with more furniture.

## The idea

A **proposition** is any statement that is definitely true or definitely false — no maybes. "$7$ is prime" (true), "$2+2=5$" (false). Not propositions: "$x>3$" (depends on $x$), "close the door" (a command).

You build big propositions out of small ones with five **connectives**, and the meaning of a compound is fixed entirely by the truth values of its parts — nothing else. That's the whole game: logic here is *bookkeeping over true/false*, exactly like arithmetic is bookkeeping over numbers. Once you accept that "$P \to Q$" means nothing more than a specific true/false pattern, every apparent subtlety dissolves into a table you can fill in.

## The formal version

Let $P, Q$ be propositions. The five connectives, with their plain-English reading:

- **Negation** $\lnot P$ — "not $P$": flips the truth value.
- **Conjunction** $P \land Q$ — "$P$ and $Q$": true only when **both** hold.
- **Disjunction** $P \lor Q$ — "$P$ or $Q$": true when **at least one** holds (inclusive or — both counts).
- **Conditional** $P \to Q$ — "if $P$ then $Q$": false in exactly one case, when $P$ is true but $Q$ is false. Here $P$ is the **hypothesis**, $Q$ the **conclusion**.
- **Biconditional** $P \leftrightarrow Q$ — "$P$ if and only if $Q$": true when $P$ and $Q$ have the **same** truth value.

The defining tables (T = true, F = false):

| $P$ | $Q$ | $\lnot P$ | $P\land Q$ | $P\lor Q$ | $P\to Q$ | $P\leftrightarrow Q$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| T | T | F | T | T | T | T |
| T | F | F | F | T | F | F |
| F | T | T | F | T | T | F |
| F | F | T | F | F | T | T |

In words: read each row as "given these inputs, here's the output." The one row worth memorizing is $P\to Q$ being **false only in row 2** — a promise "if $P$ then $Q$" is broken only when you had $P$ and yet $Q$ failed.

A compound proposition true in **every** row is a **tautology** (e.g. $P \lor \lnot P$); one false in every row is a **contradiction** (e.g. $P \land \lnot P$). Two propositions are **logically equivalent**, written $A \equiv B$, when they have identical truth-table columns — same output in every row. Equivalently, $A\equiv B$ exactly when $A \leftrightarrow B$ is a tautology.

The conditional comes with three relatives, easy to confuse:

- **Contrapositive** of $P\to Q$: $\ \lnot Q \to \lnot P$. **Always equivalent** to the original — same column.
- **Converse**: $\ Q \to P$. **Not** equivalent in general.
- **Inverse**: $\ \lnot P \to \lnot Q$. Also not equivalent — but it *is* equivalent to the converse (it's the converse's contrapositive).

Finally, the **Boolean laws** — the algebra of $\land, \lor, \lnot$. Write $\mathbf T$ for a tautology (always true) and $\mathbf F$ for a contradiction. Each law comes in an "and/or" dual pair:

| Law | With $\land$ | With $\lor$ |
|---|---|---|
| Identity | $P\land \mathbf T \equiv P$ | $P\lor \mathbf F \equiv P$ |
| Domination | $P\land \mathbf F \equiv \mathbf F$ | $P\lor \mathbf T \equiv \mathbf T$ |
| Complement | $P\land\lnot P \equiv \mathbf F$ | $P\lor\lnot P \equiv \mathbf T$ |
| Distributive | $P\land(Q\lor R)\equiv(P\land Q)\lor(P\land R)$ | $P\lor(Q\land R)\equiv(P\lor Q)\land(P\lor R)$ |
| Absorption | $P\land(P\lor Q)\equiv P$ | $P\lor(P\land Q)\equiv P$ |
| De Morgan | $\lnot(P\land Q)\equiv\lnot P\lor\lnot Q$ | $\lnot(P\lor Q)\equiv\lnot P\land\lnot Q$ |

In words: **De Morgan** is the one you'll reach for constantly — "not (both)" = "either not," and "not (either)" = "not both." It's how you push a negation *inward* past an and/or, flipping the connective as it passes. Two more workhorses: $P\to Q \equiv \lnot P \lor Q$ (rewrites any conditional without an arrow), and double negation $\lnot\lnot P \equiv P$.

## Concrete instance

Claim: $\lnot(P\to Q)\equiv P\land\lnot Q$ — "the only way to break *if $P$ then $Q$* is to have $P$ but not $Q$." Build both sides column by column and compare.

| $P$ | $Q$ | $P\to Q$ | $\lnot(P\to Q)$ | $\lnot Q$ | $P\land\lnot Q$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| T | T | T | **F** | F | **F** |
| T | F | F | **T** | T | **T** |
| F | T | T | **F** | F | **F** |
| F | F | T | **F** | T | **F** |

Reading the two bold columns top to bottom: $\lnot(P\to Q)$ gives $\text{F},\text{T},\text{F},\text{F}$, and $P\land\lnot Q$ gives $\text{F},\text{T},\text{F},\text{F}$. Every row agrees, so the columns are identical and $\lnot(P\to Q)\equiv P\land\lnot Q$. $\blacksquare$

Notice how we *derived* the middle columns before comparing: $P\to Q$ from its definition, then $\lnot(P\to Q)$ by flipping it, then $\lnot Q$, then $P\land\lnot Q$ by taking "both." That column-by-column discipline is the entire method for proving any equivalence.

## Worked examples

**Example 1 (mechanical — is it a tautology?).** Test whether $(P\to Q)\lor(Q\to P)$ is a tautology. Tabulate:

| $P$ | $Q$ | $P\to Q$ | $Q\to P$ | $(P\to Q)\lor(Q\to P)$ |
|:-:|:-:|:-:|:-:|:-:|
| T | T | T | T | T |
| T | F | F | T | T |
| F | T | T | F | T |
| F | F | T | T | T |

The final column is all T, so **yes, it's a tautology**. It says something slightly surprising: for *any* two propositions, at least one of "if $P$ then $Q$" / "if $Q$ then $P$" must hold. That's a quirk of the material conditional — a false hypothesis makes a conditional vacuously true, and you can never have both $P,\lnot Q$ *and* $Q,\lnot P$ at once.

**Example 2 (why you'd care — simplify a filter).** A support dashboard shows a ticket when `(open AND urgent) OR (open AND NOT urgent)`. Let $P$ = "open," $Q$ = "urgent." Simplify with Boolean laws instead of guessing:

$$(P\land Q)\lor(P\land\lnot Q) \;\equiv\; P\land(Q\lor\lnot Q) \;\equiv\; P\land\mathbf T \;\equiv\; P.$$

Step 1 factors out $P$ (distributive law, read right-to-left); step 2 uses complement ($Q\lor\lnot Q\equiv\mathbf T$); step 3 uses identity. The two-clause filter was just "**show open tickets**" — urgency never mattered. That's not a toy: query planners and compilers run exactly this simplification to skip work, and spotting it by eye saves you from testing dead branches.

## Watch out

- You might think $P\to Q$ asserts that $P$ *causes* $Q$, or that $P$ is even true. It asserts neither — it's a bare promise about truth values, and it's **vacuously true whenever $P$ is false**. "If the moon is cheese, then $1=1$" is a true conditional.
- You might think the converse $Q\to P$ restates the original. It doesn't — "if it rains, the ground is wet" does not give you "if the ground is wet, it rained" (someone ran a sprinkler). The **contrapositive** $\lnot Q\to\lnot P$ is the one you can always swap in for free.
- You might think "$P$ or $Q$" excludes "both." In logic $\lor$ is **inclusive** — true when both hold. If you truly mean exactly one, that's a different connective (exclusive or), which you'd have to build.
- De Morgan trap: $\lnot(P\land Q)$ is $\lnot P\lor\lnot Q$, **not** $\lnot P\land\lnot Q$. The connective *flips* when the negation moves inside. Dropping that flip is the single most common logic error.

## One-liner

> A compound proposition is nothing but its truth-table column, so "equivalent" just means "same column" — and Boolean laws let you rewrite that column without ever drawing it.

## Problems

**P1 (🟢)** Build the truth table for $(P\land Q)\to P$ and state whether it is a tautology, a contradiction, or neither.

**P2 (🟡)** Simplify $\lnot(\lnot P\lor Q)\lor(P\land Q)$ to a single literal using De Morgan and the Boolean laws. Name each law you use.

**P3 (🔴, optional)** A SQL `WHERE` clause reads `(A AND B) OR (A AND NOT B) OR (NOT A AND B)`. Simplify it to the smallest equivalent expression using Boolean laws, then confirm your answer with a truth table. (This is the kind of rewrite a query optimizer does automatically.)

<details>
<summary>Solutions</summary>

**P1**

| $P$ | $Q$ | $P\land Q$ | $(P\land Q)\to P$ |
|:-:|:-:|:-:|:-:|
| T | T | T | T |
| T | F | F | T |
| F | T | F | T |
| F | F | F | T |

Every row is T, so $(P\land Q)\to P$ is a **tautology**. Intuitively: if both $P$ and $Q$ hold, then certainly $P$ holds — the conclusion is contained in the hypothesis, so the promise can never be broken.

**P2** Work from the inside out:

$$\lnot(\lnot P\lor Q)\lor(P\land Q) \;\equiv\; (\lnot\lnot P\land\lnot Q)\lor(P\land Q) \quad\text{(De Morgan)}$$
$$\equiv\; (P\land\lnot Q)\lor(P\land Q) \quad\text{(double negation)}$$
$$\equiv\; P\land(\lnot Q\lor Q) \quad\text{(distributive, factoring out }P\text{)}$$
$$\equiv\; P\land\mathbf T \quad\text{(complement)}$$
$$\equiv\; P. \quad\text{(identity)}$$

The whole expression collapses to just $\boxed{P}$.

**P3** Let the clause be $(A\land B)\lor(A\land\lnot B)\lor(\lnot A\land B)$. Combine the first two terms (distributive, then complement and identity):

$$(A\land B)\lor(A\land\lnot B) \;\equiv\; A\land(B\lor\lnot B) \;\equiv\; A\land\mathbf T \;\equiv\; A.$$

So the clause is $A\lor(\lnot A\land B)$. Apply the redundancy/absorption identity $A\lor(\lnot A\land B)\equiv A\lor B$ (distribute: $(A\lor\lnot A)\land(A\lor B)\equiv\mathbf T\land(A\lor B)\equiv A\lor B$). The clause simplifies to $\boxed{A\lor B}$ — "show a row when $A$ or $B$ (or both)." Confirm:

| $A$ | $B$ | original | $A\lor B$ |
|:-:|:-:|:-:|:-:|
| T | T | T | T |
| T | F | T | T |
| F | T | T | T |
| F | F | F | F |

Columns match, so the three-clause filter was just $A\lor B$ all along.

</details>

## Flashback

*(None — course start.)*

## Connections

- **Forward (1.2):** predicate logic adds "for all" ($\forall$) and "there exists" ($\exists$) on top of these connectives; negating a quantified statement is powered by De Morgan run at scale ($\lnot\forall = \exists\lnot$), so nail De Morgan here first.
- **Forward (1.3):** every step in a proof is licensed by a logical equivalence or a tautology like $(P\land Q)\to P$ — proof techniques are these rules applied deliberately. The contrapositive from this lesson *is* the method of proof by contrapositive.
- **Forward (2.1):** the set laws (union/intersection/complement) are the Boolean laws in disguise — De Morgan for sets, distributivity for sets, the works. You're learning that algebra twice; recognize it the second time.
- **Sideways (`digital-logic`):** $\land,\lor,\lnot$ are the AND, OR, NOT gates; simplifying a Boolean expression (Example 2, P2, P3) is literally minimizing a circuit's gate count.
- **Sideways (CS / databases):** a SQL `WHERE` clause is a proposition over row predicates, and the query optimizer simplifies it with exactly the laws in P3 — fewer conditions, less work per row.
