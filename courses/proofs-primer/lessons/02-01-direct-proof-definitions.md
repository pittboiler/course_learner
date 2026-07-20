# How to Read & Write Proofs · Lesson 2.1: Direct proof: unpacking definitions

> ⏱ ~15 min · Module 2: Core proof techniques · Builds on: [1.1 Statements, connectives, and implication](01-01-statements-connectives-implication.md) · Unlocks: 2.2 (contrapositive and contradiction)

## Why this matters

Almost every theorem you'll ever prove has the shape "if $P$, then $Q$" — and the workhorse way to prove it is the *direct proof*: assume $P$, and walk forward to $Q$ one honest step at a time. This is the pattern behind nearly everything in `real-analysis` and `topology`, and it's the one you reach for first before anything cleverer. The whole skill turns on a single move most people skip: **replacing a word by its definition**. "Even," "divides," "rational" are not vibes — each is a compact equation waiting to be unpacked, and the proof is what you find once you unpack it.

## The idea

A direct proof of "$P \implies Q$" is a road trip with a fixed start and a fixed destination. The start is $P$ — you're *allowed to assume it*, for free. The destination is $Q$. Your job is to lay down a road between them where every step is either a definition, a known fact, or legal algebra.

The engine — the thing that actually moves you — is **unfolding definitions into equations**. "$n$ is even" is a fact about $n$ you can't compute with. But its definition, "$n = 2k$ for some integer $k$," is an *equation* you can add, multiply, and rearrange. So the rhythm of a direct proof is almost mechanical:

> **translate the hypothesis into an equation → do algebra → translate the result back into the language of the conclusion.**

You assume the hypothesis, rewrite each of its words as the equation it stands for, push symbols around until the target shape appears, and then read that shape back as the conclusion. That's it. The cleverness, when a proof needs any, is only in *which* algebra — the skeleton is always the same.

## The formal version

Here are the definitions that power this lesson. Each is a word on the left and an equation on the right — the right side is the usable form.

**Even / odd.** An integer $n$ is **even** if $n = 2k$ for some integer $k$; it is **odd** if $n = 2k+1$ for some integer $k$.
In words: even means "exactly twice some whole number," odd means "one more than that."

**Divisibility.** For integers $a$ and $b$, we say $a$ **divides** $b$, written $a \mid b$, if $b = ak$ for some integer $k$.
In words: $a \mid b$ means $b$ is a whole number of copies of $a$ — no remainder. (Note $a \mid b$ is a *claim*, true or false; $\tfrac{b}{a}$ is a *number*. Don't confuse the two.)

**Rational.** A real number $x$ is **rational** if $x = \dfrac{p}{q}$ for some integers $p, q$ with $q \neq 0$.
In words: rational means "expressible as one integer over another."

**The direct-proof skeleton.** To prove $P \implies Q$:

$$\underbrace{\text{Assume } P.}_{\text{free hypothesis}} \;\longrightarrow\; \underbrace{\text{unfold } P \text{ into equations}}_{\text{definitions}} \;\longrightarrow\; \underbrace{\text{manipulate forward}}_{\text{algebra}} \;\longrightarrow\; \underbrace{\text{arrive at } Q.}_{\blacksquare}$$

In words: you never assume $Q$ — that's the sin of circular reasoning. You start from $P$, and $Q$ has to *fall out the far end* on its own.

**Proof-writing hygiene** — the habits that separate a proof from a scribble:

- **Introduce every variable with "Let…".** If a $k$ appears, the reader must already know what it is: "Let $k$ be the integer with $n = 2k$."
- **Quantify honestly.** "$n = 2k$ for *some* integer $k$" (existence) is very different from "for *all* $k$." Say which.
- **Never assume what you're proving.** If $Q$ shows up as a step in your reasoning rather than as the last line, the proof is circular and worthless.
- **Close with $\blacksquare$** (or "QED") so the reader knows you've reached the destination, not just paused.

## Concrete instance

The model proof, in full, annotated steps. Watch every hygiene rule fire.

> **Claim.** The sum of two even integers is even.

**Proof.**

*Given / to show.* We are given two even integers; call them $m$ and $n$. We must show that $m + n$ is even — that is, that $m+n = 2(\text{some integer})$.

*Unfold the hypotheses into equations.* Since $m$ is even, by definition $m = 2a$ for some integer $a$. Since $n$ is even, $n = 2b$ for some integer $b$. (Two separate witnesses — $a$ and $b$ — because there's no reason $m$ and $n$ are twice the *same* number. Naming them the same would be a bug.)

*Manipulate forward.* Add the two equations and factor:

$$m + n = 2a + 2b = 2(a + b).$$

*Translate back.* Let $c = a + b$. Since $a$ and $b$ are integers, $c$ is an integer, and $m + n = 2c$. By the definition of even, $m + n$ is even. $\blacksquare$

Notice what happened: the word "even" got unfolded into an equation at the top, we did one line of algebra (factor out the 2), and then we *read the shape $2c$ back* as the word "even." Translate → algebra → translate. Every symbol was introduced before use; we never once wrote down "$m+n$ is even" as an assumption. That's a complete, honest proof.

## Worked examples

**Example 1 (mechanical — even times anything).**

> **Claim.** If $n$ is an even integer, then $3n$ is even.

**Proof.** Let $n$ be an even integer, so $n = 2k$ for some integer $k$. Then

$$3n = 3(2k) = 2(3k).$$

Let $j = 3k$, an integer. Then $3n = 2j$, so $3n$ is even. $\blacksquare$

The entire subject in miniature: unfold ($n = 2k$), algebra (regroup the factor of 2), refold ($3n = 2j$).

**Example 2 (why you'd care — the shape of a real theorem).**

> **Claim.** If $a \mid b$, then $a \mid 5b$.

**Proof.** Assume $a \mid b$. By definition, $b = ak$ for some integer $k$. Multiply both sides by $5$:

$$5b = 5(ak) = a(5k).$$

Let $m = 5k$, an integer. Then $5b = am$, so by definition $a \mid 5b$. $\blacksquare$

This is the template for a huge family of number-theory facts — and note the proof never computed a single number. It manipulated the *defining equation*. That's the leverage definitions give you: you prove statements about *all* integers at once, without ever picking a specific one.

## Watch out

- You might think you can reuse one letter for two witnesses. If $m$ and $n$ are both even, writing $m = 2k$ **and** $n = 2k$ secretly forces $m = n$ — you've proved a much weaker claim. Give each its own name ($m=2a$, $n=2b$).
- You might think stating the goal counts as progress. Writing "we want to show $m+n$ is even" at the top is fine as *signposting*, but if "$m+n$ is even" ever appears as a *justified step*, you've assumed the conclusion — the argument is circular. The conclusion must be earned as the last line.
- You might think $a \mid b$ and $\tfrac{b}{a}$ are interchangeable. "$a \mid b$" is a true/false statement ("$b = ak$ for some integer $k$"); "$\tfrac{b}{a}$" is a number that may not even be an integer. Proofs live on the definitional side — always convert $a \mid b$ to the equation $b = ak$ before doing anything.

## One-liner

> A direct proof is: assume the hypothesis, replace every word by the equation it stands for, do algebra until the conclusion's shape appears, then read it back — and never write the conclusion down until it's earned.

## Problems

**P1 (🟢)** Prove that the product of two odd integers is odd.

**P2 (🟡)** Prove that divisibility is transitive: for integers $a, b, c$, if $a \mid b$ and $b \mid c$, then $a \mid c$.

**P3 (🔴, optional)** Prove *directly* (no induction) that for every positive integer $n$,

$$1 + 2 + \cdots + n = \frac{n(n+1)}{2}.$$

Use Gauss's pairing trick. (This is the theorem 3.3 will re-prove by induction — worth meeting first as a piece of pure algebra.)

<details>
<summary>Solutions</summary>

**P1.** *Given:* two odd integers; *to show:* their product is odd (i.e., of the form $2(\text{integer})+1$).

Let $m$ and $n$ be odd integers. By definition, $m = 2a + 1$ and $n = 2b + 1$ for some integers $a$ and $b$. Then

$$mn = (2a+1)(2b+1) = 4ab + 2a + 2b + 1 = 2(2ab + a + b) + 1.$$

Let $c = 2ab + a + b$, which is an integer (sums and products of integers are integers). Then $mn = 2c + 1$, so by definition $mn$ is odd. $\blacksquare$

**P2.** *Given:* $a \mid b$ and $b \mid c$; *to show:* $a \mid c$ (i.e., $c = a\cdot(\text{integer})$).

Assume $a \mid b$ and $b \mid c$. By the definition of divisibility, $b = ak$ for some integer $k$, and $c = b m$ for some integer $m$. Substitute the first equation into the second:

$$c = b m = (ak)m = a(km).$$

Let $j = km$, an integer. Then $c = aj$, so by definition $a \mid c$. $\blacksquare$

(This is exactly the "$c = a(km)$" chain you'll see again for transitivity of $\le$, of set inclusion, and of "$\implies$" itself — transitivity is always "substitute one witness into the other.")

**P3.** *To show:* $S := 1 + 2 + \cdots + n$ equals $\tfrac{n(n+1)}{2}$, for any positive integer $n$.

Write the sum forwards and backwards:

$$
\begin{aligned}
S &= 1 + 2 + \cdots + (n-1) + n, \\
S &= n + (n-1) + \cdots + 2 + 1.
\end{aligned}
$$

Add the two equations *term by term*. Each of the $n$ vertical pairs sums to $n+1$ (the first pair is $1+n$, the second is $2 + (n-1)$, and so on — each step adds $1$ to the top and subtracts $1$ from the bottom, leaving the total fixed). There are $n$ such pairs, so

$$2S = \underbrace{(n+1) + (n+1) + \cdots + (n+1)}_{n \text{ terms}} = n(n+1).$$

Dividing by $2$ gives $S = \dfrac{n(n+1)}{2}$. $\blacksquare$

This is a genuine direct proof — pure algebra on the defining sum, no assumed conclusion. Induction (3.3) will give a second, more mechanical route to the same identity; keep both in mind, because they illustrate two different *styles* of argument for one fact.

</details>

## Flashback

**From Lesson 1.1 (Statements, connectives, and implication):** Consider the statement

> "If $n$ is prime and $n > 2$, then $n$ is odd."

Write its **contrapositive** and its **converse**. Which one is logically equivalent to the original? For the other, give a specific counterexample showing it can fail.

<details>
<summary>Solution</summary>

The statement has the form $(P \land R) \implies Q$ with $P$ = "$n$ is prime," $R$ = "$n > 2$," $Q$ = "$n$ is odd."

**Contrapositive** ($\lnot Q \implies \lnot(P \land R)$). Negating the hypothesis uses De Morgan: $\lnot(P \land R) \equiv \lnot P \lor \lnot R$. So:

> "If $n$ is even, then $n$ is not prime **or** $n \le 2$."

This is **logically equivalent** to the original — an implication and its contrapositive always share a truth value.

**Converse** ($Q \implies (P \land R)$):

> "If $n$ is odd, then $n$ is prime and $n > 2$."

This is **not** equivalent, and it's false: take $n = 9$. It's odd, but $9 = 3 \times 3$ is not prime, so the hypothesis holds while the conclusion fails. One counterexample is enough to sink it. $\blacksquare$

</details>

## Connections

- **Backward:** this lesson is [1.1](01-01-statements-connectives-implication.md)'s "$P \implies Q$" turned from a truth-table object into a *thing you build*. The truth table told you $P \implies Q$ is only in danger when $P$ is true and $Q$ is false; the direct proof simply assumes $P$ true and forces $Q$ true, closing that one gap.
- **Forward:** [2.2](02-02-contrapositive-and-contradiction.md) is what you do when the forward road is blocked — you'll prove the contrapositive (this lesson's Flashback shows why that's legal) or assume $Q$ false and derive a contradiction. Same definitions, different route.
- **Sideways (number → induction):** P3's Gauss identity reappears in [3.3](03-03-induction.md) as the flagship induction example — meeting it here as algebra, there as induction, is the fastest way to feel what induction actually buys you.
