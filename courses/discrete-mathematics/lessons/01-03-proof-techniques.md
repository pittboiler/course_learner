# Discrete Mathematics · Lesson 1.3: Proof techniques — direct, contrapositive, contradiction, cases

> ⏱ ~15 min · Module 1: Logic & Proof · Builds on: 1.1 (propositional logic & Boolean algebra) · Unlocks: 1.4 (mathematical induction & strong induction)

## Why this matters

A proof is the only currency in mathematics that everyone accepts. From here on, every definition you meet — an equivalence relation, an injective function, a prime — comes with claims *about* it, and a claim is worthless until you can argue it to the hilt. The good news: almost every proof you'll ever write is one of four moves. Learn to recognize which move a claim is asking for, and half the difficulty of "I don't know where to start" disappears.

## The idea

A proof is a chain of steps, each one either a definition, a known fact, or a logical consequence of earlier steps, ending at the thing you claimed. That's it. The art is not in the logic — the logic is mechanical — it's in **choosing an angle of attack** so the chain is short.

Most theorems have the shape "if $P$, then $Q$" ($P \Rightarrow Q$). You have exactly four standard ways to establish that:

- **Direct**: assume $P$, walk forward to $Q$.
- **Contrapositive**: assume $\lnot Q$, walk forward to $\lnot P$ (logically the same claim).
- **Contradiction**: assume $P$ *and* $\lnot Q$, and derive something impossible.
- **Cases**: split the world into exhaustive scenarios and prove $Q$ in each.

Think of them as four different doors into the same room. When one door is jammed — the forward algebra is a mess, or "$Q$" is hard to grab hold of — try another.

## The formal version

Let $P$ and $Q$ be statements. To prove the implication $P \Rightarrow Q$:

**Direct proof.** Assume $P$ is true. Using definitions and known results, deduce $Q$.
*In words:* start where the hypothesis puts you and push toward the goal.

**Contrapositive.** Prove instead $\lnot Q \Rightarrow \lnot P$. This is legitimate because the two are **logically equivalent**:
$$(P \Rightarrow Q) \equiv (\lnot Q \Rightarrow \lnot P).$$
*In words:* "if $P$ then $Q$" says the same thing as "if not $Q$ then not $P$" — the truth tables match (you'll re-derive this in the Flashback). So proving one proves the other.

**Proof by contradiction.** Assume $P \land \lnot Q$. Derive a statement $R \land \lnot R$ (an absurdity). Since a contradiction is never true, the assumption $\lnot Q$ was impossible, so $Q$ holds.
*In words:* suppose the claim fails, then show that supposition breaks reality.

**Proof by cases.** Find statements $C_1, C_2, \dots, C_k$ that are **exhaustive** ($C_1 \lor \cdots \lor C_k$ is always true). Prove $Q$ separately under each $C_i$. Then $Q$ holds unconditionally.
*In words:* if you can't argue in general, chop the situation into finitely many kinds and handle each. **WLOG** ("without loss of generality") means two cases are symmetric, so proving one silently proves the other — use it only when the symmetry is real.

## Concrete instance

Here is the most famous proof in mathematics, done by contradiction. It's the template you'll imitate.

**Theorem.** $\sqrt{2}$ is irrational.

**Proof.** Suppose, for contradiction, that $\sqrt{2}$ is rational. Then we can write
$$\sqrt{2} = \frac{p}{q}$$
with $p, q$ integers, $q \neq 0$, and the fraction in **lowest terms** — meaning $p$ and $q$ share no common factor greater than $1$. (Any fraction can be reduced to lowest terms, so this costs nothing.)

Square both sides:
$$2 = \frac{p^2}{q^2} \quad\Longrightarrow\quad p^2 = 2q^2.$$

So $p^2$ is even. But the square of an odd number is odd (odd $\times$ odd $=$ odd), so if $p^2$ is even then **$p$ is even**. Write $p = 2k$ for some integer $k$. Substitute:
$$(2k)^2 = 2q^2 \quad\Longrightarrow\quad 4k^2 = 2q^2 \quad\Longrightarrow\quad q^2 = 2k^2.$$

So $q^2$ is even, and by the same argument **$q$ is even**.

But now $p$ and $q$ are *both* even — they share the factor $2$. That contradicts our choice of $p/q$ in lowest terms. The contradiction means our starting assumption was false, so $\sqrt{2}$ is irrational. $\blacksquare$

Notice the shape: assume the negation, run clean algebra, collide with a fact you set up on purpose ("lowest terms"). That collision is the whole method.

## Worked examples

**Example 1 (direct).** *If $m$ and $n$ are both even, then $m + n$ is even.*

Assume $m$ and $n$ are even. By definition, $m = 2a$ and $n = 2b$ for integers $a, b$. Then
$$m + n = 2a + 2b = 2(a+b).$$
Since $a + b$ is an integer, $m + n$ is $2 \times (\text{integer})$, hence even. $\blacksquare$

Direct works here because "even" unpacks into an equation you can just push forward.

**Example 2 (contrapositive — why you'd care).** *If $n^2$ is even, then $n$ is even.*

Try direct: assume $n^2$ is even, so $n^2 = 2k$... and now you're stuck taking a square root, which drags in irrationals. The forward door is jammed. So flip to the contrapositive:

> Prove instead: *if $n$ is odd, then $n^2$ is odd.*

Assume $n$ is odd, so $n = 2k + 1$ for some integer $k$. Then
$$n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1,$$
which is $2 \times (\text{integer}) + 1$, hence odd. This proves the contrapositive, and therefore the original: if $n^2$ is even, $n$ is even. $\blacksquare$

This is exactly the step the $\sqrt{2}$ proof leaned on twice — now you've seen why it's true, and why contrapositive was the right door.

**Example 3 (cases + WLOG).** *For every integer $n$, the product $n(n+1)$ is even.*

Every integer is either even or odd — an exhaustive two-case split.

- *Case 1: $n$ is even.* Then $n = 2a$, so $n(n+1) = 2a(n+1)$ is even.
- *Case 2: $n$ is odd.* Then $n + 1$ is even, say $n + 1 = 2b$, so $n(n+1) = 2bn$ is even.

Both cases give an even product, and the cases are exhaustive, so $n(n+1)$ is always even. $\blacksquare$

(A WLOG example: to prove $|x + y| \le |x| + |y|$ you might say "WLOG $x \ge 0$," because negating both $x$ and $y$ leaves both sides unchanged — the symmetry is genuine, so one case really does cover its mirror.)

## Watch out

- You might think proof by contradiction and contrapositive are the same trick. They overlap but aren't: contrapositive proves $\lnot Q \Rightarrow \lnot P$ and *never mentions $P$ being true*; contradiction assumes $P \land \lnot Q$ and hunts for *any* absurdity, not necessarily $\lnot P$. If your contradiction proof ends by deriving $\lnot P$, you should have used the cleaner contrapositive.
- You might think "WLOG" is a free pass to ignore a case. It isn't — it's a *claim of symmetry* you must be able to justify. If the cases aren't genuinely interchangeable, "WLOG" is a hole in your proof.
- You might think one worked example proves a "for all" statement. It never does — a single instance is an illustration, not a proof (though a single *counterexample* does disprove a universal claim; that's Lesson 1.2's move). Cases prove universals only when the cases are **exhaustive**.

## One-liner

> Every "if $P$ then $Q$" has four doors — walk forward from $P$, walk backward from $\lnot Q$, blow it up from $P \land \lnot Q$, or split into exhaustive cases — and picking the unjammed door is most of the work.

## Problems

**P1 (🟢)** Prove directly: if $n$ is an odd integer, then $n^2 - 1$ is divisible by $4$. (Hint: write $n = 2k+1$ and factor $n^2 - 1$.)

**P2 (🟡)** Prove by contrapositive: for integers $a, b$, if $a + b$ is odd, then exactly one of $a, b$ is odd. (Contrapositive: if $a, b$ are both even or both odd, then $a + b$ is even.)

**P3 (🔴, optional)** Prove by contradiction that there is no smallest positive rational number — i.e., there is no rational $r > 0$ such that $r \le s$ for every positive rational $s$.

<details>
<summary>Solutions</summary>

**P1** Let $n = 2k + 1$ for some integer $k$. Then
$$n^2 - 1 = (2k+1)^2 - 1 = 4k^2 + 4k + 1 - 1 = 4k^2 + 4k = 4(k^2 + k).$$
Since $k^2 + k$ is an integer, $n^2 - 1 = 4 \times (\text{integer})$, so it is divisible by $4$. $\blacksquare$
(Bonus: $k^2 + k = k(k+1)$ is itself even by Example 3, so $n^2 - 1$ is in fact divisible by $8$.)

**P2** We prove the contrapositive: *if $a$ and $b$ have the same parity (both even or both odd), then $a + b$ is even.*

- *Both even:* $a = 2s$, $b = 2t$, so $a + b = 2(s + t)$, even.
- *Both odd:* $a = 2s + 1$, $b = 2t + 1$, so $a + b = 2s + 2t + 2 = 2(s + t + 1)$, even.

In both sub-cases $a + b$ is even. This establishes the contrapositive, hence the original: if $a + b$ is odd, $a$ and $b$ cannot share a parity, so exactly one of them is odd. $\blacksquare$

**P3** Suppose, for contradiction, that such a smallest positive rational $r$ exists: $r > 0$ and $r \le s$ for every positive rational $s$. Consider $r/2$. Since $r$ is rational, so is $r/2$, and since $r > 0$ we have $r/2 > 0$ — so $r/2$ is itself a positive rational. But
$$\frac{r}{2} < r$$
(because $r > 0$), so $r/2$ is a positive rational strictly smaller than $r$. This contradicts the assumption that $r$ is the smallest. Therefore no smallest positive rational exists. $\blacksquare$

</details>

## Flashback

**From Lesson 1.1 (Propositional logic & Boolean algebra):** Verify with a truth table that
$$(P \Rightarrow Q) \equiv (\lnot Q \Rightarrow \lnot P),$$
the equivalence that makes contrapositive proof legitimate. Then, as a separate check, use a Boolean law to simplify $\lnot(\lnot P \lor Q)$ to a single conjunction.

<details>
<summary>Solution</summary>

**Truth table.** Recall $X \Rightarrow Y$ is false only when $X$ is true and $Y$ is false.

| $P$ | $Q$ | $P \Rightarrow Q$ | $\lnot Q$ | $\lnot P$ | $\lnot Q \Rightarrow \lnot P$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| T | T | T | F | F | T |
| T | F | F | T | F | F |
| F | T | T | F | T | T |
| F | F | T | T | T | T |

The third and sixth columns agree in every row, so $(P \Rightarrow Q) \equiv (\lnot Q \Rightarrow \lnot P)$. A statement and its contrapositive are true in exactly the same situations — which is precisely why proving the contrapositive proves the original. $\blacksquare$

**Boolean simplification.** By De Morgan, $\lnot(\lnot P \lor Q) \equiv \lnot(\lnot P) \land \lnot Q$, and by double negation $\lnot(\lnot P) \equiv P$, giving
$$\lnot(\lnot P \lor Q) \equiv P \land \lnot Q.$$
(Worth noting: $\lnot P \lor Q$ is itself equivalent to $P \Rightarrow Q$, so this says $\lnot(P \Rightarrow Q) \equiv P \land \lnot Q$ — exactly the "assume $P$ and $\lnot Q$" setup of a proof by contradiction.)

</details>

## Connections

- **Backward:** the contrapositive's legitimacy is nothing but the logical equivalence $(P \Rightarrow Q) \equiv (\lnot Q \Rightarrow \lnot P)$ from Lesson 1.1, and "assume $P \land \lnot Q$" in a contradiction proof is the negation $\lnot(P \Rightarrow Q)$ you'll negate more of in Lesson 1.2.
- **Forward:** Lesson 1.4 adds a fifth weapon, **induction**, for claims of the form "$Q(n)$ holds for all $n$" that no single argument can reach; and `4.1 (Divisibility & primes)` reuses today's parity arguments and the $\sqrt{2}$ contradiction wholesale (Euclid's proof that primes are infinite is the same move). Deeper practice lives in `[proofs-primer](../proofs-primer/syllabus.md)` and `[real-analysis](../real-analysis/syllabus.md)`.
- **Sideways (CS):** a program-correctness argument *is* a proof — a loop invariant is proved by induction, and "this function returns the right answer for every input" is a universal claim you attack with exactly these techniques. Reasoning about code and reasoning about integers are the same skill in different costumes.
