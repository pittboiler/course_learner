# Discrete Mathematics · Lesson 1.2: Predicate logic — quantifiers & negation

> ⏱ ~15 min · Module 1: Logic & Proof · Builds on: 1.1 (propositional logic & Boolean algebra) · Unlocks: 1.3 (proof techniques)

## Why this matters

Propositional logic (Lesson 1.1) can say "it is raining" but not "*every* even number is a sum of two primes." The moment a statement talks about *all* or *some* elements of a set, you need quantifiers — and essentially every definition in higher math is a stack of them. "Continuous," "injective," "convergent," "subset": each is a nested $\forall\dots\exists\dots$ waiting to be unpacked. And every proof begins the same way: **read the quantified statement, and to disprove it, negate it correctly.** Get the negation wrong and you'll try to prove the wrong thing.

## The idea

A **predicate** is a sentence with a blank in it: "$\_\_$ is prime," or "$x > 5$." On its own it has no truth value — "$x > 5$" is neither true nor false until you say what $x$ is and where it lives. Fill the blank ($x = 7$) and it becomes a proposition (true). The blank ranges over a **domain** — the set of things we're allowed to plug in.

Quantifiers turn a predicate into a single claim about the whole domain:

- $\forall$ ("for all") — the predicate holds for *every* element. A claim of universal law.
- $\exists$ ("there exists") — the predicate holds for *at least one* element. A claim that a witness exists.

Two reflexes are worth burning in now. First: **to kill a "for all," you need just one counterexample; to kill a "there exists," you must rule out everyone.** Second: negation flips the world — "not everyone passed" means "someone failed," and "no one is immortal" means "everyone is mortal." That flip is the whole engine of this lesson.

## The formal version

Let $P(x)$ be a predicate over a domain $D$ (the set $x$ ranges over).

$$\forall x\in D,\ P(x) \qquad\text{and}\qquad \exists x\in D,\ P(x)$$

**In words:** $\forall x\in D,\,P(x)$ says "$P$ is true for every $x$ in $D$"; $\exists x\in D,\,P(x)$ says "$P$ is true for at least one $x$ in $D$." Here $\in$ is set membership, and the domain matters: $\exists x,\ x^2=2$ is *false* over $\mathbb{N}$ (the naturals) but *true* over $\mathbb{R}$ (the reals).

**Negation — the one rule you actually memorize:**

$$\lnot\,\forall x\,P(x) \equiv \exists x\,\lnot P(x), \qquad \lnot\,\exists x\,P(x) \equiv \forall x\,\lnot P(x).$$

**In words:** the negation of "all $x$ satisfy $P$" is "some $x$ fails $P$"; the negation of "some $x$ satisfies $P$" is "every $x$ fails $P$." For a nested statement, apply this left to right: **flip every quantifier ($\forall\leftrightarrow\exists$) and negate the innermost core.** So

$$\lnot\,\big[\,\forall x\,\exists y\,P(x,y)\,\big] \;\equiv\; \exists x\,\forall y\,\lnot P(x,y).$$

**Bound vs. free variables.** In $\exists y\,(y>x)$, the $y$ is *bound* — a quantifier owns it, and its name is a placeholder ($\exists z\,(z>x)$ means the same thing). But $x$ is *free*: the statement's truth still depends on $x$, so it's really a predicate in $x$, not yet a proposition. A statement with no free variables is a genuine claim you can call true or false. Unpacking a definition = making sure you know which variables are bound and which you're free to choose.

**Why quantifier order matters.** $\forall x\,\exists y$ and $\exists y\,\forall x$ are *not* the same claim:

- $\forall x\,\exists y\,(y>x)$ — "for each $x$, there is a $y$ bigger than it." The $y$ is chosen *after* seeing $x$, so it may depend on $x$. (True over $\mathbb{R}$: take $y=x+1$.)
- $\exists y\,\forall x\,(y>x)$ — "there is one $y$ bigger than *every* $x$." A single $y$ must work for all $x$ at once. (False over $\mathbb{R}$: no real number exceeds every real number.)

Swapping $\forall\exists\to\exists\forall$ demands a single universal witness where before each case got its own — a strictly stronger, often false, claim.

## Concrete instance

Take the statement over the reals $\mathbb{R}$:

$$S:\quad \forall x\,\exists y\,(y > x).$$

**Read it.** "For every real $x$, there exists a real $y$ with $y>x$" — every number has something bigger. Choosing $y=x+1$ works for each $x$, so **$S$ is true.**

**Negate it, step by step.** Flip each quantifier and negate the core $y>x$ (whose negation is $y\le x$):

$$\lnot S \equiv \lnot\,\forall x\,\exists y\,(y>x) \equiv \exists x\,\lnot\,\exists y\,(y>x) \equiv \exists x\,\forall y\,\lnot(y>x) \equiv \exists x\,\forall y\,(y\le x).$$

**Read the negation.** "There is a real $x$ such that every real $y$ satisfies $y\le x$" — some number is $\ge$ everything, i.e. a largest real number.

**Which is true?** Exactly one of a statement and its negation is true, and we already saw $S$ is true. So $\lnot S$ is **false** — and the one-line reason is a *counterexample to the existence claim*: whatever candidate largest number $x$ you name, $x+1 > x$ violates "$\forall y\,(y\le x)$." No largest real exists.

## Worked examples

**Example 1 (mechanical — negate and read).** Domain $\mathbb{N}=\{0,1,2,\dots\}$. Negate

$$\forall n\in\mathbb{N},\ (n\text{ is even} \to n^2\text{ is even}).$$

Flip $\forall\to\exists$ and negate the core. The core is an implication $A\to B$; recall from Lesson 1.1 that $\lnot(A\to B)\equiv A\land\lnot B$. So:

$$\exists n\in\mathbb{N},\ (n\text{ is even} \ \land\ n^2\text{ is not even}).$$

**In words:** "there is an even number whose square is odd." That's exactly what you'd have to exhibit to refute the original — and you can't, because the original is true, so its negation is false and no such $n$ exists.

**Example 2 (why you'd care — order in a real definition).** A function $f:\mathbb{R}\to\mathbb{R}$ is **bounded above** iff

$$\exists M\in\mathbb{R},\ \forall x\in\mathbb{R},\ f(x)\le M.$$

The $\exists\forall$ order is the whole content: *one* ceiling $M$ must cap the function at *every* input. Swap to $\forall x\,\exists M\,(f(x)\le M)$ and you get a trivially true statement (for each $x$, just take $M=f(x)$) that says nothing. To claim $f$ is *not* bounded above, negate the real definition — flip both quantifiers, negate $f(x)\le M$:

$$\forall M\in\mathbb{R},\ \exists x\in\mathbb{R},\ f(x) > M.$$

"For every proposed ceiling $M$, some input pokes above it." For $f(x)=x$, given any $M$ take $x=M+1$: this is a template you'll reuse constantly in `real-analysis` and `calc-refresher`.

## Watch out

- **You might think** $\lnot\forall x\,P(x)$ means "$\forall x\,\lnot P(x)$" ("nobody satisfies $P$"). **Actually** it's $\exists x\,\lnot P(x)$ ("*somebody* fails $P$"). "Not all politicians are honest" does **not** mean "all politicians are dishonest" — it means at least one isn't.
- **You might think** you can freely swap $\forall x\,\exists y$ to $\exists y\,\forall x$. **Actually** $\forall x\,\exists y$ lets $y$ depend on $x$; $\exists y\,\forall x$ demands one $y$ that works for all $x$ simultaneously — strictly stronger, and usually false when the first is true.
- **You might think** every quantified statement is true-or-false as written. **Actually** if a variable is left *free* (unquantified), you have a predicate, not a proposition — its truth still depends on the free variable. Check that nothing is dangling before you call something "true."

## One-liner

> To negate a quantified statement, march through it flipping every $\forall\!\leftrightarrow\!\exists$ and negate the core — and remember one counterexample slays a "for all," while a "there exists" dies only when everyone fails.

## Problems

**P1 (🟢)** Domain $\mathbb{R}$. Write the negation of each, simplified so that $\lnot$ sits only on the core predicate, then say whether the *original* is true or false:
(a) $\forall x\,(x^2 \ge 0)$  (b) $\exists x\,(x^2 = -1)$.

**P2 (🟡)** Domain $\mathbb{R}$. Consider $\forall x\,\exists y\,(x + y = 0)$ and $\exists y\,\forall x\,(x + y = 0)$. Translate each into plain English, decide the truth value of each, and explain in one line why the order changes the answer.

**P3 (🔴, optional)** A sequence $(a_n)$ of reals *converges to* $L$ iff $\forall \varepsilon > 0,\ \exists N\in\mathbb{N},\ \forall n\ge N,\ |a_n - L| < \varepsilon$. Write the full negation of "$(a_n)$ converges to $L$," pushing $\lnot$ all the way in. (This is the definition of "$(a_n)$ does not converge to $L$" you'll prove things with in analysis.)

<details>
<summary>Solutions</summary>

**P1**
(a) $\lnot\forall x\,(x^2\ge 0)\equiv \exists x\,(x^2 < 0)$ — "some real has a negative square." The original is **true** (every real square is $\ge 0$), so this negation is false: no such $x$ exists.
(b) $\lnot\exists x\,(x^2=-1)\equiv \forall x\,(x^2\ne -1)$ — "every real has square $\ne -1$." The original $\exists x\,(x^2=-1)$ is **false** over $\mathbb{R}$ (no real squares to $-1$), so its negation is true.

**P2**
- $\forall x\,\exists y\,(x+y=0)$: "every real $x$ has an additive inverse" — pick $y=-x$ after seeing $x$. **True.**
- $\exists y\,\forall x\,(x+y=0)$: "there is a single $y$ that is the inverse of *every* $x$ at once." **False** — that one $y$ would need $x+y=0$ for all $x$, forcing $y=-x$ simultaneously for every $x$, impossible (e.g. it can't equal both $-1$ and $-2$).
- Order: in the first, $y$ is chosen *after* $x$, so it may depend on $x$; in the second, $y$ is fixed *before* $x$ ranges, so one witness must serve all $x$. Same predicate, opposite truth values — order is not decoration.

**P3** Flip all three quantifiers in turn and negate the core $|a_n - L| < \varepsilon$, whose negation is $|a_n - L|\ge\varepsilon$:
$$\lnot\big[\forall\varepsilon>0\,\exists N\,\forall n\ge N\,(|a_n-L|<\varepsilon)\big] \equiv \exists\varepsilon>0,\ \forall N\in\mathbb{N},\ \exists n\ge N,\ |a_n - L|\ge\varepsilon.$$
**In words:** there is a fixed tolerance $\varepsilon>0$ such that no matter how far out you go (any $N$), the sequence still jumps at least $\varepsilon$ away from $L$ at some later index $n\ge N$ — it never settles inside the $\varepsilon$-band for good.

</details>

## Flashback

*(None — course start; flashbacks begin at Lesson 1.3.)*

## Connections

- **Backward:** the core predicates here are combined with the connectives $\land,\lor,\lnot,\to$ from Lesson 1.1 — and negating a quantified implication reuses $\lnot(A\to B)\equiv A\land\lnot B$ directly (Example 1).
- **Forward:** Lessons 1.3–1.4 open *every* proof by unpacking a quantified definition — a direct proof of $\forall x\,P(x)$ fixes an arbitrary $x$ and argues $P(x)$; disproving one hunts for the counterexample this lesson taught you to name. In Module 2, "subset" ($\forall x\,(x\in A\to x\in B)$) and "injective" ($\forall a\,\forall b\,(f(a)=f(b)\to a=b)$) are nested quantifiers you'll prove and negate by exactly this machinery.
- **Sideways:** this is the notation of formal specifications and of `mathematical-logic`; "bounded above" (Example 2) and the convergence definition (P3) are the $\exists\forall$ / $\forall\exists\forall$ statements that `real-analysis` and `calc-refresher` are built on.
