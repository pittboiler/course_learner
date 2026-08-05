# Discrete Math for Beginners · Lesson 1.1: Statements, connectives, and truth tables

> ⏱ ~15 min · Module 1: Logic and sets · Builds on: nothing (course start) · Unlocks: 1.2 (sets, operations, and quantifiers)

## Why this matters

Every proof you will ever read, every `if` in every program, and every circuit inside the device you're reading this on runs on the same tiny grammar: claims that are either true or false, glued together with *and*, *or*, *not*, and *if…then*. Master this grammar and mathematics stops feeling like a foreign language — a proof becomes a chain of true statements, and a bug becomes a claim that isn't as true as you thought. The one piece almost everyone gets wrong at first — what "if P then Q" *actually* asserts — is exactly the piece proofs are built from, so we pin it down hard here.

## The idea

A **proposition** is a sentence that is definitely true or definitely false — no maybes, no opinions, no questions. "$7$ is prime" is a proposition (true). "$4 > 9$" is a proposition (false). "Close the door" and "Is it raining?" are *not* propositions — they can't be judged true or false.

Now take two propositions, call them $P$ and $Q$, and snap them together like Lego:

- **AND** ($P \land Q$): true only when *both* hold. A demanding boss — everything must be right.
- **OR** ($P \lor Q$): true when *at least one* holds. The generous "or" — including the case where both are true. (This is **inclusive** or; everyday "soup or salad" often means one-or-the-other, but math's *or* always allows both.)
- **NOT** ($\lnot P$): flips true to false and back. A single toggle switch.

The trick with all of this: since each ingredient is just true/false, you can list *every possible world* in a small table and read off the answer mechanically. That table is the whole game.

## The formal version

Write $\text{T}$ for true and $\text{F}$ for false. The three basic connectives are *defined* by these tables:

| $P$ | $Q$ | $P \land Q$ | $P \lor Q$ |
|:---:|:---:|:---:|:---:|
| T | T | T | T |
| T | F | F | T |
| F | T | F | T |
| F | F | F | F |

| $P$ | $\lnot P$ |
|:---:|:---:|
| T | F |
| F | T |

In words: $\land$ needs both, $\lor$ needs at least one, $\lnot$ reverses. With $n$ basic propositions there are $2^n$ rows — one per combination of truth values — and any compound statement is fully determined by filling in its column.

The **conditional** $P \to Q$ ("if $P$ then $Q$", where $P$ is the *hypothesis* and $Q$ the *conclusion*) is the one to slow down on:

| $P$ | $Q$ | $P \to Q$ |
|:---:|:---:|:---:|
| T | T | T |
| T | F | **F** |
| F | T | T |
| F | F | T |

In words: **$P \to Q$ is false in exactly one situation — when $P$ is true but $Q$ is false** — and true in every other case. Think of it as a *promise*: "if $P$ happens, I guarantee $Q$." The only way to break the promise is for $P$ to happen and $Q$ to fail. If $P$ never happens (the bottom two rows), you never had to deliver, so the promise is unbroken — we call this **vacuously true**.

From a conditional you can build two relatives:

$$\text{converse: } Q \to P \qquad\qquad \text{contrapositive: } \lnot Q \to \lnot P$$

In words: the converse swaps hypothesis and conclusion; the contrapositive swaps *and* negates both. The headline fact of this lesson: **a conditional and its contrapositive are logically equivalent** (same truth value in every row), while the **converse is a different statement** that can disagree.

Finally, negating compounds follows **De Morgan's laws**:

$$\lnot(P \land Q) \equiv \lnot P \lor \lnot Q \qquad\qquad \lnot(P \lor Q) \equiv \lnot P \land \lnot Q$$

In words: to deny "both," admit "at least one fails"; to deny "at least one," insist "both fail." Negation turns $\land$ into $\lor$ and pushes the $\lnot$ inward. (The symbol $\equiv$ means "has the same truth table as.")

## Concrete instance

Let's *prove* the contrapositive claim by building one table row by row, for the everyday conditional **"if it is raining ($P$), then the ground is wet ($Q$)."** We need columns for $\lnot P$, $\lnot Q$, the original $P \to Q$, and the contrapositive $\lnot Q \to \lnot P$.

Start with the four possible worlds and negate each variable:

| $P$ | $Q$ | $\lnot P$ | $\lnot Q$ |
|:---:|:---:|:---:|:---:|
| T | T | F | F |
| T | F | F | T |
| F | T | T | F |
| F | F | T | T |

Now add $P \to Q$ (false only in the row T, F) and build $\lnot Q \to \lnot P$ from the $\lnot Q$ and $\lnot P$ columns — a conditional that is false only where its *own* hypothesis $\lnot Q$ is true and conclusion $\lnot P$ is false:

| $P$ | $Q$ | $\lnot P$ | $\lnot Q$ | $P \to Q$ | $\lnot Q \to \lnot P$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| T | T | F | F | T | T |
| T | F | F | T | **F** | **F** |
| F | T | T | F | T | T |
| F | F | T | T | T | T |

Read the last two columns straight down: **T, F, T, T** in both. Identical in every row, so $P \to Q \equiv \lnot Q \to \lnot P$. Concretely: "if raining then ground wet" says *exactly the same thing* as "if the ground is not wet then it is not raining" — a dry ground guarantees no rain. But the converse "if the ground is wet then it is raining" is a different claim (someone ran a sprinkler), and nothing here forces it to hold.

## Worked examples

**Example 1 (mechanical).** Build the truth table for $\lnot P \lor Q$ and compare it to $P \to Q$.

| $P$ | $Q$ | $\lnot P$ | $\lnot P \lor Q$ | $P \to Q$ |
|:---:|:---:|:---:|:---:|:---:|
| T | T | F | T | T |
| T | F | F | F | F |
| F | T | T | T | T |
| F | F | T | T | T |

The two right columns match: $\lnot P \lor Q \equiv P \to Q$. This is worth memorizing — "if $P$ then $Q$" is just "not-$P$, or $Q$." It's why the promise is unbroken whenever $P$ is false ($\lnot P$ is true, so the $\lor$ is already satisfied).

**Example 2 (why you'd care).** Negate the claim **"the login succeeds and the account is verified"** — the kind of condition guarding a piece of software. Symbolically the claim is $S \land V$. By De Morgan:

$$\lnot(S \land V) \equiv \lnot S \lor \lnot V.$$

In words: the guard *fails* exactly when the login fails **or** the account is unverified (or both). Notice the *and* flipped to *or* — a programmer who negates the condition to "login fails and account is unverified" has quietly demanded *both* failures and just shipped a security hole. This is De Morgan's law earning its keep, and it's the exact move you'll make to negate quantified statements in Lesson 1.2.

## Watch out

- You might think $P \to Q$ is false whenever $P$ is false ("the hypothesis didn't even happen!"), but actually those rows are **true** — a promise you were never called on to keep isn't broken. The *only* false row is true-hypothesis, false-conclusion.
- You might think the converse $Q \to P$ restates the original, but actually it's a **logically independent** claim. "If prime then odd" is one thing; its converse "if odd then prime" is false ($9$). Confusing a statement with its converse is the single most common logic error — proofs guard against it constantly.
- You might think negating "$P$ and $Q$" gives "not-$P$ and not-$Q$." It doesn't — De Morgan turns the *and* into an **or**: $\lnot(P \land Q) \equiv \lnot P \lor \lnot Q$. The connective changes, not just the pieces.

## One-liner

> Everything reduces to true/false, so list all $2^n$ worlds in a table — and remember an "if…then" breaks only when the hypothesis holds but the conclusion fails.

## Problems

**P1 (🟢)** Build the full truth table for $\lnot(P \lor Q)$ and, in the same table, for $\lnot P \land \lnot Q$. Do the columns match? Which law did you just verify?

**P2 (🟡)** Consider the statement **"If a number is divisible by $6$, then it is divisible by $3$."** (a) Write its converse and its contrapositive in plain English. (b) The original is true; decide whether the converse is true, giving a counterexample if not. (c) State which of the three (original / converse / contrapositive) are guaranteed to have the same truth value, and why.

**P3 (🔴, optional)** In digital logic, a **NAND** gate outputs $\lnot(P \land Q)$. (a) Build its truth table. (b) Use De Morgan to rewrite $\lnot(P \land Q)$ using only $\lnot$ and $\lor$. (c) A circuit fires an alarm unless *both* the door sensor $P$ **and** the window sensor $Q$ read "secure." Write the alarm condition as a single expression and describe in one sentence exactly when the alarm sounds.

<details>
<summary>Solutions</summary>

**P1** Build both columns side by side:

| $P$ | $Q$ | $P \lor Q$ | $\lnot(P \lor Q)$ | $\lnot P$ | $\lnot Q$ | $\lnot P \land \lnot Q$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| T | T | T | F | F | F | F |
| T | F | T | F | F | T | F |
| F | T | T | F | T | F | F |
| F | F | F | T | T | T | T |

The columns $\lnot(P \lor Q)$ and $\lnot P \land \lnot Q$ are both **F, F, F, T** — they match. This verifies De Morgan's second law, $\lnot(P \lor Q) \equiv \lnot P \land \lnot Q$: to deny "at least one," insist both fail.

**P2** (a) **Converse:** "If a number is divisible by $3$, then it is divisible by $6$." **Contrapositive:** "If a number is *not* divisible by $3$, then it is *not* divisible by $6$." (b) The converse is **false**: $3$ is divisible by $3$ but not by $6$ (also $9$, $15$, …). So the converse says something genuinely different from the original. (c) The **original and the contrapositive** are guaranteed to share a truth value — they are logically equivalent (same truth table, as shown in the Concrete instance). The converse is independent and here happens to be false while the original is true.

**P3** (a) NAND truth table:

| $P$ | $Q$ | $P \land Q$ | $\lnot(P \land Q)$ |
|:---:|:---:|:---:|:---:|
| T | T | T | F |
| T | F | F | T |
| F | T | F | T |
| F | F | F | T |

It is true in every row *except* both-true — the mirror image of AND. (b) By De Morgan, $\lnot(P \land Q) \equiv \lnot P \lor \lnot Q$. (c) With $P,Q$ meaning "secure," the alarm condition is $\lnot(P \land Q) \equiv \lnot P \lor \lnot Q$: the alarm sounds exactly when the door is *not* secure **or** the window is *not* secure (or both) — i.e. whenever any monitored point is breached, matching the NAND column being true off the all-secure row.

</details>

## Flashback

*(None — course start.)*

## Connections

- **Forward (1.2):** Sets are logic wearing different clothes — union $\cup$ mirrors *or* ($\lor$), intersection $\cap$ mirrors *and* ($\land$), and complement mirrors *not* ($\lnot$). De Morgan's laws reappear there verbatim as $(A \cup B)^c = A^c \cap B^c$, and negating "for all" / "there exists" is exactly the $\land/\lor$ flip you learned here.
- **Forward (2.2 and `proofs-primer`):** A theorem *is* an implication $P \to Q$ ("if the hypotheses, then the conclusion"), and a proof is the argument that its one false row can't happen. Proof by contrapositive — proving $\lnot Q \to \lnot P$ instead — is legitimate precisely because of the equivalence established in the Concrete instance.
- **Sideways (`digital-logic` / CS):** These connectives *are* the logic gates AND, OR, NOT, and NAND (P3). Every arithmetic circuit and every Boolean condition in code is a truth table you could, in principle, write out — and De Morgan's laws are the standard tool for simplifying both.
