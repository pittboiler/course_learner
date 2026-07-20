# How to Read & Write Proofs · Lesson 2.2: Contrapositive and contradiction

> ⏱ ~15 min · Module 2: Core proof techniques · Builds on: [2.1 Direct proof: unpacking definitions](02-01-direct-proof-definitions.md), [1.1 Statements, connectives, and implication](01-01-statements-connectives-implication.md) · Unlocks: 2.3 (proof by cases and WLOG)

## Why this matters

A direct proof marches from $P$ to $Q$. But sometimes $P$ is a terrible place to stand: "if $n^2$ is even then $n$ is even" hands you a fact about $n^2$ and asks for one about $n$ — and there's no clean way to take a square root of "even." The two techniques here are your escape hatches when the front door is jammed. **Contrapositive** flips the implication so you start from the friendlier end. **Contradiction** assumes the claim is false and squeezes an impossibility out of that assumption. Between them they crack the results that built modern math — that $\sqrt2$ is irrational, that the primes never run out — and both are impossible to prove by marching straight ahead.

## The idea

Two everyday moves, dressed up.

**Contrapositive.** "If it rained, the grass is wet" says exactly the same thing as "if the grass is dry, it didn't rain." Same claim, read backwards through the negatives. So if proving the first is awkward, prove the second — you're allowed, because they are *the same statement*, not merely similar ones. You pick whichever direction gives you a concrete thing to grab.

**Contradiction.** You want to show a door is locked. Assume it's open, walk through — and fall off a cliff that can't be there. Since the walk was valid, the only lie was the assumption: the door was locked after all. In math you assume your claim is *false*, reason with total honesty, and arrive at something that cannot be (like $1$ being even, or a fraction that's simultaneously in and not in lowest terms). The false assumption is the only thing that could have poisoned the well, so it must go.

## The formal version

**Proof by contrapositive.** From [1.1](01-01-statements-connectives-implication.md), the implication $P \implies Q$ is *logically equivalent* to its contrapositive $\lnot Q \implies \lnot P$ (here $\lnot$ means "not"). So:

> To prove $P \implies Q$, it suffices to assume $\lnot Q$ and derive $\lnot P$.

In words: to show "$P$ forces $Q$," instead show "the failure of $Q$ forces the failure of $P$." Reach for it when $\lnot Q$ is a more concrete hypothesis than $P$ — classically when $Q$ is "$n$ is even/prime/rational" and its negation gives you an actual algebraic handle.

**Proof by contradiction (*reductio ad absurdum*).** To prove a statement $S$:

> Assume $\lnot S$. Derive a statement that is false — a contradiction, some $R \land \lnot R$. Conclude $S$.

In words: if assuming $S$ is false leads to nonsense, then $S$ can't be false, so it's true. When $S$ is itself an implication $P \implies Q$, its negation is $P \land \lnot Q$ (from [1.2](01-02-quantifiers-order-negation.md) — the negation of "if $P$ then $Q$" is "$P$ holds and $Q$ fails"), so you assume *both* $P$ and $\lnot Q$ and hunt for the absurdity.

A definition we'll lean on throughout: an integer $n$ is **even** if $n = 2k$ for some integer $k$, and **odd** if $n = 2k+1$ for some integer $k$; every integer is exactly one of the two.

## Concrete instance

The model proof — **"if $n^2$ is even then $n$ is even"** — done by contrapositive, because a direct assault stalls immediately: knowing $n^2 = 2k$ gives you no lawful way to conclude anything about $n$ itself.

Here $P$ is "$n^2$ is even" and $Q$ is "$n$ is even." The contrapositive $\lnot Q \implies \lnot P$ reads: **"if $n$ is odd, then $n^2$ is odd."** That version is a gift — "$n$ is odd" is a formula you can plug in and expand.

> **Claim.** For every integer $n$, if $n^2$ is even then $n$ is even.
>
> **Proof (by contrapositive).** We prove the equivalent statement: if $n$ is odd, then $n^2$ is odd. Assume $n$ is odd, so $n = 2k+1$ for some integer $k$. Then
> $$n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2\underbrace{(2k^2 + 2k)}_{\text{an integer}} + 1,$$
> which is odd (it has the form $2m+1$ with $m = 2k^2+2k \in \mathbb{Z}$). This establishes the contrapositive, hence the original claim. $\blacksquare$

Notice what we did *not* do: we never assumed $n^2$ was even and tried to fight backward. We changed which end we stood on. That single choice is the whole technique.

## Worked examples

**Example 1 (mechanical — contrapositive).** *Claim: for every integer $n$, if $5n+3$ is even then $n$ is odd.*

Standing on "$5n+3$ is even" is clumsy. Its contrapositive — "if $n$ is even, then $5n+3$ is odd" — hands us a formula for $n$.

> **Proof (by contrapositive).** Suppose $n$ is even, so $n = 2k$ for some integer $k$. Then $5n + 3 = 10k + 3 = 2(5k+1) + 1$, which is odd. This proves the contrapositive, hence the claim. $\blacksquare$

**Example 2 (why you'd care — contradiction as a closure argument).** *Claim: if $x$ is irrational and $r$ is rational, then $x + r$ is irrational.* A rational is any number expressible as $a/b$ with integers $a, b$ and $b \neq 0$; irrational means not rational. There is no way to "compute forward" from "irrational," so contradiction is the natural weapon.

> **Proof (by contradiction).** Suppose the conclusion fails: $x$ is irrational, $r$ is rational, yet $x + r$ *is* rational. The rationals are closed under subtraction, so
> $$x = (x + r) - r$$
> is a difference of two rationals, hence rational. But $x$ was assumed irrational — a contradiction ($x$ is both rational and not). Therefore $x + r$ is irrational. $\blacksquare$

This "assume the bad thing exists, watch it collapse" shape is exactly how impossibility results work everywhere: no-arbitrage arguments in finance assume a free lunch and derive one dollar equal to two; physics rules out perpetual motion the same way.

## Watch out

- **You might think contrapositive and contradiction are the same move** — both start with a "not." They're not. A contrapositive proof of $P \implies Q$ assumes *only* $\lnot Q$ and cleanly derives $\lnot P$, then stops; nothing absurd happens. A contradiction assumes $P \land \lnot Q$ (both the hypothesis *and* the negated conclusion) and needs an actual impossibility to close. Tell them apart by counting your assumptions.
- **You might dress a contrapositive as a contradiction and not notice.** If your "contradiction" proof assumes $\lnot Q$, never once uses $P$, and ends by deriving $\lnot P$ — the "contradiction" being that $\lnot P$ clashes with the hypothesis $P$ — then you wrote a contrapositive with extra steps. Strip the theatrics and present it as the cleaner contrapositive.
- **You might reach for contradiction reflexively.** It's seductive because assuming $\lnot S$ gives you a free extra hypothesis. But when a direct or contrapositive proof exists, it's shorter and less error-prone. Save contradiction for claims like "$\sqrt2$ is irrational" or "the primes are infinite," where you're proving something *doesn't* exist or *can't* happen and have nothing to march toward.

## One-liner

> Contrapositive proves $\lnot Q \Rightarrow \lnot P$ and stops; contradiction assumes $P \land \lnot Q$ and hunts for the impossible — flip when the far end is friendlier, negate when there's nothing to march toward.

## Problems

**P1 (🟢)** Prove by contrapositive: for every integer $n$, if $3n + 2$ is odd, then $n$ is odd. State explicitly which statement you're proving instead of the original.

**P2 (🟡)** Prove that $\sqrt2$ is irrational, by contradiction. (Assume $\sqrt2 = p/q$ with $p, q$ integers sharing no common factor, and derive that $p$ and $q$ are *both* even.)

**P3 (🔴, optional)** Prove Euclid's theorem: there are infinitely many primes. (Assume there are only finitely many, multiply them all together, add $1$, and ask what divides the result.)

<details>
<summary>Solutions</summary>

**P1** — *Technique: contrapositive*, because "if $3n+2$ is odd" gives no algebraic handle on $n$, but its negation does.

The contrapositive of "$3n+2$ odd $\implies$ $n$ odd" is "$n$ even $\implies$ $3n+2$ even."

> **Proof (by contrapositive).** We prove the equivalent statement: if $n$ is even, then $3n + 2$ is even. Assume $n$ is even, so $n = 2k$ for some integer $k$. Then $3n + 2 = 6k + 2 = 2(3k + 1)$, which is even. This establishes the contrapositive, hence the original claim. $\blacksquare$

**P2** — *Technique: contradiction*, since "irrational" means *no* representation as a fraction exists; you can't march toward the nonexistence of something, so you assume it exists and break it.

> **Proof (by contradiction).** Suppose, for contradiction, that $\sqrt2$ is rational. Then $\sqrt2 = \dfrac{p}{q}$ for integers $p, q$ with $q \neq 0$, and we may take the fraction in lowest terms, so $p$ and $q$ share no common factor greater than $1$. Squaring both sides and clearing the denominator:
> $$2 = \frac{p^2}{q^2} \quad\Longrightarrow\quad p^2 = 2q^2.$$
> Thus $p^2$ is even. By the model result of this lesson ($n^2$ even $\implies$ $n$ even), $p$ is even, so $p = 2m$ for some integer $m$. Substitute:
> $$(2m)^2 = 2q^2 \quad\Longrightarrow\quad 4m^2 = 2q^2 \quad\Longrightarrow\quad q^2 = 2m^2.$$
> So $q^2$ is even, and by the same result $q$ is even. But now $p$ and $q$ are *both* even — they share the factor $2$ — contradicting our choice of a fraction in lowest terms. The assumption that $\sqrt2$ is rational is therefore false, so $\sqrt2$ is irrational. $\blacksquare$
>
> (Notice this proof *used* the Concrete instance as a lemma, in both directions. That's the payoff of proving it by contrapositive first.)

**P3** — *Technique: contradiction*, again proving a nonexistence ("no largest prime / no finite complete list").

> **Proof (by contradiction).** Suppose, for contradiction, that there are only finitely many primes, and list them all: $p_1, p_2, \dots, p_n$. Consider
> $$N = p_1 p_2 \cdots p_n + 1.$$
> Since $N \geq 2$, it has at least one prime divisor $p$ (every integer greater than $1$ does). By assumption our list is complete, so $p = p_i$ for some $i$, and therefore $p$ divides the product $p_1 p_2 \cdots p_n$. But $p$ also divides $N$. Hence $p$ divides the difference
> $$N - p_1 p_2 \cdots p_n = 1.$$
> A prime is at least $2$ and cannot divide $1$ — contradiction. So no finite list can contain every prime: there are infinitely many primes. $\blacksquare$

</details>

## Flashback

**From Lesson 2.1 (Direct proof: unpacking definitions):** Recall that for integers $a, b$, we say **$a$ divides $b$** (written $a \mid b$) if $b = a\,k$ for some integer $k$. Prove *directly* that divisibility is transitive: for all integers $a, b, c$, if $a \mid b$ and $b \mid c$, then $a \mid c$.

<details>
<summary>Solution</summary>

> **Proof (direct).** Assume $a \mid b$ and $b \mid c$. Unpacking the definition, there are integers $m$ and $n$ with $b = a\,m$ and $c = b\,n$. Substitute the first into the second:
> $$c = b\,n = (a\,m)\,n = a\,(mn).$$
> Since $mn$ is an integer, $c = a \cdot (\text{integer})$, which is exactly the definition of $a \mid c$. $\blacksquare$

This is pure 2.1: expand each definition into an equation, chain the equations forward, and read off the conclusion — no flip, no contradiction needed. That's the tell that a direct proof was the right tool here.

</details>

## Connections

- **Backward:** the license to swap $P \implies Q$ for $\lnot Q \implies \lnot P$ is the equivalence proved in [1.1](01-01-statements-connectives-implication.md); knowing that the negation of $P \implies Q$ is $P \land \lnot Q$ (which contradiction relies on) comes straight from [1.2](01-02-quantifiers-order-negation.md). Contradiction also reuses [2.1](02-01-direct-proof-definitions.md)'s definition-unpacking — you just do it starting from a poisoned assumption.
- **Forward:** [2.3](02-03-cases-and-wlog.md) adds proof by cases, the third core pattern. And these two techniques are precisely what **Boss problem 2** demands: proving "$n^2$ is even $\iff$ $n$ is even" wants the contrapositive for one direction, and then $\sqrt2$'s irrationality falls out by contradiction — you've now built both halves.
- **Sideways:** contradiction is the engine of every *impossibility* theorem you'll meet later — that a limit is unique (assume two different limits, derive a contradiction), that no rational squares to $2$, that certain equilibria can't exist. Whenever a claim says something *cannot* happen, contradiction is usually the first thing to try.
