# Logic & Set Theory · Lesson 4.4: The Continuum & Cardinal Arithmetic

> ⏱ ~15 min · Module 4: Ordinals, Cardinals & the Infinite · Builds on: [Lesson 4.2](04-02-ordinals-transfinite-induction.md) (ordinals, well-ordering), [Lesson 4.3](04-03-cardinals-cantors-theorem.md) (cardinality, Cantor's theorem, CSB) · Unlocks: [Lesson 5.1](05-01-incompleteness-first-theorem.md) (diagonalization returns as self-reference)

## Why this matters

Lesson 4.3 proved there is more than one infinity: $|A| < |\mathcal{P}(A)|$ always. This lesson asks the two questions that opens. First: *how do infinities add and multiply?* The answer is startlingly simple — for infinite sizes, $+$ and $\times$ do nothing, they just return the larger input. Second: is there a size *strictly between* the counting numbers and the real line? That question — the **Continuum Hypothesis** — turned out to be the most famous "we genuinely cannot answer this" in mathematics: ZFC neither proves it nor refutes it. Knowing exactly what that means, and why exponentiation ($2^\kappa$) is the one operation that actually escapes upward, is the payoff here. The self-reference machinery that made $2^{\aleph_0} > \aleph_0$ possible is the same one that will break arithmetic itself in Module 5.

## The idea

Give each set a **size label** — its cardinal. The finite labels are $0, 1, 2, \dots$. The first infinite label is $\aleph_0$ ("aleph-null"), the size of $\mathbb{N}$: anything you can list as a first, second, third, … . Because every set can be well-ordered (the well-ordering theorem, [Lesson 3.4](03-04-axiom-of-choice.md) / ordinals, [Lesson 4.2](04-02-ordinals-transfinite-induction.md)) and ordinals are themselves well-ordered, the infinite cardinals line up in a sequence with no gaps: $\aleph_0$, then a definite **next one** $\aleph_1$, then $\aleph_2$, … . There is always a next size and never a size squeezed between a cardinal and its successor.

Now two surprises. **Adding and multiplying infinities is boring.** $\aleph_0 + \aleph_0 = \aleph_0$: two countable lists interleave into one. $\aleph_0 \cdot \aleph_0 = \aleph_0$: an infinite grid can be threaded onto a single line. In general $\kappa + \lambda = \kappa \cdot \lambda = \max(\kappa, \lambda)$ once either side is infinite — no new size is ever produced.

**Exponentiation is the escape hatch.** $2^{\aleph_0}$ — the number of *subsets* of $\mathbb{N}$, equivalently the number of infinite yes/no sequences, equivalently (this is a theorem) the number of *real numbers* — is genuinely, provably larger than $\aleph_0$. Call it the **continuum**, $\mathfrak{c}$. So the real line is a strictly bigger infinity than the integers. The one question left: is $\mathfrak{c}$ the very *next* size, $\aleph_1$, or does something hide in between? That is the Continuum Hypothesis.

## The formal version

Throughout, $|A|$ is the cardinal of $A$, and $|A| \le |B|$ means there is an injection $A \hookrightarrow B$; $|A| = |B|$ means a bijection (Lesson 4.3). Cantor–Schröder–Bernstein (CSB): if $|A|\le|B|$ and $|B|\le|A|$ then $|A|=|B|$.

**Cardinal arithmetic (definitions).** For cardinals $\kappa = |A|$, $\lambda = |B|$:
$$\kappa + \lambda = |A \sqcup B|, \qquad \kappa \cdot \lambda = |A \times B|, \qquad \kappa^{\lambda} = |A^{B}|,$$
where $A \sqcup B$ is the *disjoint* union (tag the copies so they don't overlap), $A\times B$ is the set of ordered pairs, and $A^{B}$ is the set of all functions $B \to A$.

*In words:* add sizes by putting two sets side by side, multiply by forming a grid, exponentiate by counting functions.

Note $2^{\kappa} = |\{0,1\}^{A}| = |\mathcal{P}(A)|$: a subset of $A$ is exactly a function $A \to \{0,1\}$ (its indicator). So Cantor's theorem $|A| < |\mathcal{P}(A)|$ reads, in arithmetic, as:
$$\boxed{\,2^{\kappa} > \kappa \quad\text{for every cardinal } \kappa.\,}$$

**The aleph numbers.** $\aleph_0 = |\mathbb{N}|$. Since the class of cardinals is well-ordered (any nonempty collection of cardinals has a least element — they are special ordinals, Lesson 4.2), each infinite cardinal has a unique **successor cardinal**, the least one strictly greater. Write
$$\aleph_1 = \text{the least cardinal} > \aleph_0, \qquad \aleph_2 = \text{the least} > \aleph_1, \ \dots$$

*In words:* $\aleph_1$ is the smallest uncountable size — the first infinity you reach after you exhaust "listable." (Assuming AC, *every* infinite cardinal is some $\aleph_\alpha$, so this list is all of them.)

**Absorption theorem (infinite arithmetic collapses).** If $\kappa$ is infinite and $\lambda \le \kappa$ (with $\lambda \ge 1$ for the product), then
$$\kappa + \lambda = \kappa \cdot \lambda = \kappa = \max(\kappa,\lambda).$$

*In words:* against an infinite cardinal, adding or multiplying by anything no larger changes nothing. The keystone special case, proved below, is $\aleph_0 \cdot \aleph_0 = \aleph_0$.

**The continuum.** Define $\mathfrak{c} = 2^{\aleph_0} = |\mathcal{P}(\mathbb{N})|$. A theorem (sketched in Example 2) says
$$|\mathcal{P}(\mathbb{N})| = |\mathbb{R}|, \qquad\text{i.e.}\qquad \mathfrak{c} = 2^{\aleph_0} = |\mathbb{R}|.$$
By Cantor, $\mathfrak{c} = 2^{\aleph_0} > \aleph_0$: the reals are uncountable.

**Continuum Hypothesis (CH).** $\ 2^{\aleph_0} = \aleph_1$.

*In words:* $\mathfrak{c}$ is the very next size after $\aleph_0$ — there is **no** set whose size is strictly between $|\mathbb{N}|$ and $|\mathbb{R}|$.

**Independence (Gödel 1940, Cohen 1963).** CH is *independent of ZFC*: assuming ZFC is consistent, ZFC $\not\vdash$ CH and ZFC $\not\vdash \neg$CH. Gödel built a model of ZFC (the constructible universe $L$) in which CH is *true*; Cohen invented **forcing** to build a model in which CH is *false*.

*Honest one-sentence meaning:* the ZFC axioms simply do not settle the question — there are legitimate models of set theory where CH holds and others where it fails, so no proof from ZFC alone can decide it either way.

## Picture

![A vertical cardinal tower: aleph-0 at the bottom, a dashed aleph-1 rung with a question mark, then the continuum c = 2^aleph0 = |P(N)| = |R|, then 2^c = |P(R)|, then dots continuing upward. A bracket labeled "CH: is anything here?" spans the gap between aleph-0 and c.](assets/04-04-fig1.svg)

The tower climbs by power sets, each rung strictly above the last (Cantor). $\aleph_0$ sits at the bottom; $\mathfrak{c}=2^{\aleph_0}$ is the size of the reals higher up. CH is the claim that the dashed $\aleph_1$ rung — the *next* size after $\aleph_0$ — is exactly where $\mathfrak{c}$ landed, with nothing hiding in the bracketed gap.

## Worked examples

**Example 1 — $\aleph_0 \cdot \aleph_0 = \aleph_0$ (a pairing bijection).** We build a bijection $\mathbb{N}\times\mathbb{N} \to \mathbb{N}$, proving the grid is no bigger than the line. Thread the grid along its anti-diagonals: first the one point with $m+n=0$, then the two with $m+n=1$, then the three with $m+n=2$, …

| $\ (m,n)$ | index |
|---|---|
| $(0,0)$ | $0$ |
| $(1,0),(0,1)$ | $1,2$ |
| $(2,0),(1,1),(0,2)$ | $3,4,5$ |
| $(3,0),\dots,(0,3)$ | $6,7,8,9$ |

Before diagonal $m+n=k$ we have already listed $1+2+\cdots+k = \tfrac{k(k+1)}{2}$ points, and within that diagonal $(m,n)$ is the $n$-th entry. So the closed form is
$$\pi(m,n) = \frac{(m+n)(m+n+1)}{2} + n .$$
This $\pi$ is a bijection $\mathbb{N}\times\mathbb{N}\to\mathbb{N}$ (every natural number is hit exactly once, since the diagonals partition the grid and tile $\mathbb{N}$ consecutively). Hence $\aleph_0\cdot\aleph_0 = |\mathbb{N}\times\mathbb{N}| = |\mathbb{N}| = \aleph_0$. $\blacksquare$

The same "snake through the grid" idea shows $\mathbb{Q}$ is countable: every rational is a pair (numerator, denominator), so $\mathbb{Q}$ injects into $\mathbb{Z}\times\mathbb{Z}$, a countable grid.

**Example 2 — $2^{\aleph_0} > \aleph_0$ (diagonalization), and why $|\mathcal{P}(\mathbb{N})| = |\mathbb{R}|$.** Represent a subset $S\subseteq\mathbb{N}$ by its indicator sequence $\chi_S \in \{0,1\}^{\mathbb{N}}$, where $\chi_S(n)=1$ iff $n\in S$. Suppose, for contradiction, that $\mathcal{P}(\mathbb{N})$ were countable, listed as $S_0, S_1, S_2, \dots$ — equivalently rows of an infinite 0/1 table, row $i$ being $\chi_{S_i}$. Define a new sequence by **flipping the diagonal**:
$$d(n) = 1 - \chi_{S_n}(n)\quad(\text{so } d(n)\neq \chi_{S_n}(n) \text{ for every } n),$$
and let $D = \{\,n : d(n)=1\,\}$. Then $D$ differs from $S_n$ at position $n$ for *every* $n$, so $D \neq S_n$ for all $n$ — $D$ is on no row. The list was not complete: no surjection $\mathbb{N}\to\mathcal{P}(\mathbb{N})$ exists. Since $n\mapsto\{n\}$ injects $\mathbb{N}$ into $\mathcal{P}(\mathbb{N})$, we get $\aleph_0 = |\mathbb{N}| < |\mathcal{P}(\mathbb{N})| = 2^{\aleph_0}$. $\blacksquare$

*Why $|\mathcal{P}(\mathbb{N})| = |\mathbb{R}|$ (sketch via CSB).* Both inequalities:
- $|\mathcal{P}(\mathbb{N})| \le |\mathbb{R}|$: send $\chi_S$ to the real $\sum_{n\ge 0} \tfrac{2\,\chi_S(n)}{3^{\,n+1}}$ — a base-$3$ number using only digits $0$ and $2$. Distinct subsets give distinct reals (no carrying collisions, because $0/2$ expansions never coincide), so this is an injection.
- $|\mathbb{R}| \le |\mathcal{P}(\mathbb{N})|$: each real is determined by which rationals lie below it (its Dedekind cut, [Lesson 4.1](04-01-relations-orderings-well-ordering.md) territory), i.e. a subset of $\mathbb{Q}$; and $|\mathbb{Q}| = \aleph_0$, so a subset of $\mathbb{Q}$ is a subset of a countable set. This injects $\mathbb{R}$ into $\mathcal{P}(\mathbb{Q}) \cong \mathcal{P}(\mathbb{N})$.

CSB turns the two injections into a bijection. Hence $\mathfrak{c} = 2^{\aleph_0} = |\mathbb{R}|$. $\blacksquare$

## Watch out

- **You might think** CH has been "disproved" or is just unsolved-so-far. **Actually** it is *proved independent*: Gödel and Cohen showed no proof from ZFC can go either way. It is not that we haven't found the argument — there is no argument to find (short of stronger axioms).
- **You might think** infinite arithmetic works like finite arithmetic, so $2^{\aleph_0} = \aleph_0 \cdot \aleph_0 \cdot \dots$ collapses to $\aleph_0$. **Actually** the collapse rule $\kappa+\lambda=\kappa\cdot\lambda=\max$ is *only* for $+$ and $\times$. Exponentiation is exactly the operation that breaks out: $2^{\aleph_0} > \aleph_0$ by Cantor, full stop.
- **You might think** "$\aleph_1$" and "$2^{\aleph_0}$" are two names for the same thing. **Actually** $\aleph_1$ is *by definition* the next cardinal after $\aleph_0$, while $2^{\aleph_0}$ is the size of $\mathcal{P}(\mathbb{N})$. That they're equal *is* CH — a substantive, undecidable claim, not a definition. All ZFC proves for free is $\aleph_1 \le 2^{\aleph_0}$.
- **You might think** $\aleph_0 + \aleph_0 = \aleph_0$ means $\infty - \infty = 0$ or some such. **Actually** cardinal *subtraction and division are not well-defined* — from $\aleph_0 + \aleph_0 = \aleph_0 + \aleph_0$ you cannot cancel. Absorption is a one-way collapse, not a group law.

## One-liner

> For infinite sizes, adding and multiplying do nothing — only exponentiation ($2^\kappa > \kappa$) climbs — and whether the reals sit on the very next rung above $\aleph_0$ is a question the axioms refuse to answer.

## Problems

**P1 (🟢)** (a) Give an explicit bijection $\mathbb{N} \to \mathbb{Z}$, and say which arithmetic identity it witnesses. (b) Using the absorption rule, state $|\mathbb{Z}\times\mathbb{Z}|$ and justify $|\mathbb{Q}| = \aleph_0$ in one line.

**P2 (🟡)** Prove $\mathfrak{c}\cdot\mathfrak{c} = \mathfrak{c}$, i.e. $2^{\aleph_0}\cdot 2^{\aleph_0} = 2^{\aleph_0}$, using only the exponent law $2^{a}\cdot 2^{b} = 2^{a+b}$ and a result proved in this lesson. Interpret the conclusion geometrically (what does it say about the plane $\mathbb{R}^2$ versus the line $\mathbb{R}$?).

**P3 (🔴, optional)** Prove $\aleph_0^{\aleph_0} = 2^{\aleph_0}$ (the number of *sequences* of naturals equals the continuum). Squeeze it between $2^{\aleph_0}$ and $2^{\aleph_0}$ using Cantor's $\aleph_0 < 2^{\aleph_0}$, the exponent law $(2^{a})^{b} = 2^{a\cdot b}$, the worked identity $\aleph_0\cdot\aleph_0 = \aleph_0$, and CSB.

<details>
<summary>Solutions</summary>

**P1** (a) Interleave nonnegative and negative integers:
$$f(n) = \begin{cases} n/2, & n \text{ even},\\ -(n+1)/2, & n \text{ odd}. \end{cases}$$
So $0\mapsto 0,\ 1\mapsto -1,\ 2\mapsto 1,\ 3\mapsto -2,\ 4\mapsto 2,\dots$ — every integer is hit exactly once, so $f$ is a bijection. It witnesses $\aleph_0 + \aleph_0 = \aleph_0$: $\mathbb{Z}$ is the disjoint union of the naturals $\{0,1,2,\dots\}$ and the negatives $\{-1,-2,\dots\}$, each of size $\aleph_0$, yet $|\mathbb{Z}| = \aleph_0$.

(b) $|\mathbb{Z}\times\mathbb{Z}| = \aleph_0 \cdot \aleph_0 = \aleph_0$ by absorption (Example 1). And $\aleph_0 \le |\mathbb{Q}| \le |\mathbb{Z}\times\mathbb{Z}| = \aleph_0$: the lower bound because $\mathbb{N}\subseteq\mathbb{Q}$, the upper because $q\mapsto(\text{numerator},\text{denominator})$ in lowest terms injects $\mathbb{Q}\hookrightarrow\mathbb{Z}\times\mathbb{Z}$. By CSB (or just the squeeze), $|\mathbb{Q}| = \aleph_0$. $\blacksquare$

**P2** Directly:
$$2^{\aleph_0}\cdot 2^{\aleph_0} = 2^{\,\aleph_0 + \aleph_0} = 2^{\aleph_0},$$
where the first step is the exponent law $2^{a}\cdot 2^{b} = 2^{a+b}$ (concretely, a pair of functions $\mathbb{N}\to\{0,1\}$ is one function on the disjoint union $\mathbb{N}\sqcup\mathbb{N}$), and the second uses $\aleph_0 + \aleph_0 = \aleph_0$ (P1a / absorption). Since $\mathfrak{c} = 2^{\aleph_0} = |\mathbb{R}|$, this says $|\mathbb{R}\times\mathbb{R}| = |\mathbb{R}|$: **the plane has exactly as many points as the line.** (A single real can encode an ordered pair of reals — e.g. by interleaving their decimal digits.) $\blacksquare$

**P3** Two inequalities, then CSB.

Lower: $2 \le \aleph_0$, so $\{0,1\}^{\mathbb{N}}$ injects into $\mathbb{N}^{\mathbb{N}}$ (a $0/1$ sequence *is* a sequence of naturals). Thus $2^{\aleph_0} \le \aleph_0^{\aleph_0}$.

Upper: by Cantor, $\aleph_0 \le 2^{\aleph_0}$, so
$$\aleph_0^{\aleph_0} \le \bigl(2^{\aleph_0}\bigr)^{\aleph_0} = 2^{\,\aleph_0 \cdot \aleph_0} = 2^{\aleph_0},$$
using $(2^{a})^{b} = 2^{ab}$ and the worked identity $\aleph_0\cdot\aleph_0 = \aleph_0$.

Together $2^{\aleph_0} \le \aleph_0^{\aleph_0} \le 2^{\aleph_0}$, so by CSB $\aleph_0^{\aleph_0} = 2^{\aleph_0} = \mathfrak{c}$. There are exactly continuum-many sequences of natural numbers — no more than there are reals, and no fewer. $\blacksquare$

</details>

## Flashback

**From [Lesson 4.3](04-03-cardinals-cantors-theorem.md) (Cantor's theorem / diagonalization):** Prove that the open interval $(0,1) \subseteq \mathbb{R}$ is uncountable, by diagonalizing on decimal expansions. Be explicit about how your constructed number differs from every number on the list.

<details>
<summary>Solution</summary>

Suppose $(0,1)$ were countable, listed as $x_1, x_2, x_3, \dots$. Write each in decimal, $x_i = 0.d_{i1}d_{i2}d_{i3}\cdots$, choosing the non-terminating form when there's a choice (so no number is written with a tail of $9$s), which fixes a unique digit string per number. Now build a new number $y = 0.e_1 e_2 e_3\cdots$ by flipping the diagonal digit $d_{nn}$, avoiding $0$ and $9$ to dodge representation ambiguities:
$$e_n = \begin{cases} 5, & d_{nn} \neq 5,\\ 4, & d_{nn} = 5. \end{cases}$$
Then $0 < y < 1$ (its digits are all $4$s and $5$s, so it's genuinely in the interval), and for every $n$ the $n$-th digit of $y$ satisfies $e_n \neq d_{nn}$. Since $y$'s expansion has no $9$-tail, this digit disagreement means $y \neq x_n$ as *numbers*, for every $n$. So $y$ is on no row — the list omits it, contradicting completeness. Hence $(0,1)$ is uncountable. $\blacksquare$

(This is Cantor's diagonal argument again: the "flip the diagonal" move of Example 2, now on decimal digits instead of indicator bits. Because $|(0,1)| = |\mathbb{R}| = \mathfrak{c}$, it re-proves $\mathfrak{c} > \aleph_0$.)

</details>

## Connections

- **Backward:** this rests on Cantor's theorem and CSB from [Lesson 4.3](04-03-cardinals-cantors-theorem.md), and on the well-ordering of ordinals from [Lesson 4.2](04-02-ordinals-transfinite-induction.md) that guarantees a well-defined *next* cardinal $\aleph_1$. The well-ordering theorem behind "every cardinal is an aleph" is the Axiom of Choice payoff from [Lesson 3.4](03-04-axiom-of-choice.md).
- **Forward:** [Lesson 5.1](05-01-incompleteness-first-theorem.md) reuses the exact diagonal move — but now the flipped diagonal is a *sentence that says of itself "I am unprovable,"* turning Cantor's trick into Gödel's. The phenomenon of a true statement independent of the axioms (CH) also foreshadows incompleteness: axioms can leave real questions undecided.
- **Sideways (analysis):** that $|\mathbb{R}| = 2^{\aleph_0} = |\mathbb{R}^2|$ (P2) is why measure theory and topology in [real-analysis](../../real-analysis/syllabus.md) never gain "more points" by moving to the plane — cardinality can't distinguish line from plane; dimension is a *finer* invariant than size.
- **Sideways (computation):** the halting problem in [theory-of-computation](../../theory-of-computation/syllabus.md) is another diagonalization — there are $2^{\aleph_0}$ subsets of $\mathbb{N}$ but only $\aleph_0$ programs, so *most* sets of naturals are uncomputable, by pure counting.
