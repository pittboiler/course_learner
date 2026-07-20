# Real Analysis · Lesson 1.4: Countable and uncountable

> ⏱ ~15 min · Module 1: The real number system · Builds on: [1.3 Consequences of completeness](01-03-consequences-of-completeness.md) · Unlocks: Module 2 — [2.1 Convergence: the ε–N definition](02-01-convergence-epsilon-n.md)

## Why this matters

"Infinite" is not one thing. The integers and the reals are both endless, yet one of them is *strictly bigger* than the other — and the gap is not a curiosity, it's the reason a randomly chosen real number is almost surely irrational, and later the reason an entire dense set like $\mathbb{Q}$ can have "measure zero" and be safely ignored inside an integral. This lesson gives you the one tool — a bijection — that lets you compare infinities, and Cantor's argument that some infinities can't be matched.

## The idea

To decide whether two finite piles have the same number of coins, you don't count either — you pair them off, one from each, and see if anyone's left over. A perfect pairing means equal size. Cantor's move is to keep exactly this test and refuse to flinch when the piles are infinite.

So "$A$ and $B$ are the same size" means: you can pair every element of $A$ with a unique partner in $B$, using up all of $B$. A set is **countable** if it can be paired off against the counting numbers $\mathbb{N}=\{1,2,3,\dots\}$ — i.e. you can arrange it in a list $a_1, a_2, a_3, \dots$ where every element shows up exactly once. Listable = countable.

The shock is that $\mathbb{Z}$ and $\mathbb{Q}$ — which look far bigger than $\mathbb{N}$, one infinite in two directions, the other dense with fractions everywhere — are still just listable. But $\mathbb{R}$ is not. No list, however clever, can contain every real; hand Cantor your list and he hands back a number you forgot. That's a genuinely larger infinity.

## The formal version

**Cardinality via bijection.** A **bijection** $f:A\to B$ is a pairing that is one-to-one (no two inputs share an output) and onto (every element of $B$ is hit). Two sets have the **same cardinality**, written $|A|=|B|$, if such an $f$ exists.

> In words: same size means a perfect partner-matching with nobody left over on either side.

**Countable.** A set $A$ is **countable** if it is finite or there is a bijection $f:\mathbb{N}\to A$ (then it is **countably infinite**). Otherwise it is **uncountable**.

> In words: countable means you can write it as an exhaustive, non-repeating list $a_1,a_2,a_3,\dots$; uncountable means no such list can ever be complete.

**Fact (used constantly).** A countable union of countable sets is countable.

> In words: stack countably many lists and you can still thread them into one master list (walk the rows diagonally, as with $\mathbb{Q}$ below).

## Picture

![Cantor's diagonal table: a list of decimals in [0,1] with the diagonal digits flipped to build a number y missing from the list](assets/01-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — $\mathbb{Z}$ is countable).** $\mathbb{Z}$ looks like $\mathbb{N}$'s big brother: it runs off to $-\infty$ as well. But list it by *bouncing* around zero — $0, 1, -1, 2, -2, 3, -3, \dots$ — and every integer appears exactly once. As a formula, $f:\mathbb{N}\to\mathbb{Z}$,

$$f(n) = \begin{cases} n/2, & n \text{ even},\\[2pt] -(n-1)/2, & n \text{ odd}, \end{cases}$$

sends $1,2,3,4,5,\dots \mapsto 0,1,-1,2,-2,\dots$. It's a bijection, so $|\mathbb{Z}|=|\mathbb{N}|$: a set can have the same size as a proper subset of itself. That never happens for finite sets — and it's the signature of the infinite.

**Example 2 (why you'd care — $\mathbb{Q}$ is countable).** The rationals are *dense*: between any two of them sits another (you proved a version of this in [1.3](01-03-consequences-of-completeness.md)). Surely there are too many to list? No. Arrange the positive rationals $p/q$ in a grid — row $p$, column $q$ — then sweep the finite diagonals $p+q=2,3,4,\dots$, skipping any fraction not in lowest terms:

$$\tfrac{1}{1},\ \tfrac{1}{2},\ \tfrac{2}{1},\ \tfrac{1}{3},\ \tfrac{3}{1},\ \tfrac{1}{4},\ \tfrac{2}{3},\ \tfrac{3}{2},\ \tfrac{4}{1},\ \dots$$

Each diagonal is finite, so every $p/q$ is reached in finitely many steps. Toss in $0$ and interleave negatives as in Example 1, and you've listed all of $\mathbb{Q}$. Hence $|\mathbb{Q}|=|\mathbb{N}|$. (This is the "countable union of countable sets" fact in action: $\mathbb{Q}=\bigcup_{q\ge 1}\{p/q : p\in\mathbb{Z}\}$, countably many countable rows.)

**The main event — $[0,1]$ is uncountable (Cantor's diagonal).** Suppose, for contradiction, that $[0,1]$ *is* countable, so we can list every one of its numbers by their decimal expansions:

$$
\begin{aligned}
x_1 &= 0.\,d_{11}\,d_{12}\,d_{13}\,d_{14}\dots\\
x_2 &= 0.\,d_{21}\,d_{22}\,d_{23}\,d_{24}\dots\\
x_3 &= 0.\,d_{31}\,d_{32}\,d_{33}\,d_{34}\dots\\
&\ \ \vdots
\end{aligned}
$$

where $d_{nk}\in\{0,1,\dots,9\}$ is the $k$th digit of $x_n$. Now build a new number $y=0.\,e_1 e_2 e_3\dots$ by walking down the diagonal and *changing* each digit:

$$e_n = \begin{cases} 5, & d_{nn}\neq 5,\\ 4, & d_{nn}=5. \end{cases}$$

Then $y\in[0,1]$. But $y\neq x_n$ for **every** $n$: it disagrees with $x_n$ in the $n$th decimal place by construction. So $y$ is a number in $[0,1]$ that appears nowhere on the list — contradicting the claim that the list was complete. No such list exists; $[0,1]$ is uncountable. Since $[0,1]\subseteq\mathbb{R}$, $\mathbb{R}$ is uncountable too. $\blacksquare$

**Consequence — most reals are irrational.** Write $\mathbb{R}=\mathbb{Q}\cup(\mathbb{R}\setminus\mathbb{Q})$. If the irrationals $\mathbb{R}\setminus\mathbb{Q}$ were countable, then $\mathbb{R}$ would be a union of two countable sets, hence countable — false. So the irrationals are **uncountable**. The rationals, all countably many of them, are a vanishingly thin sprinkle inside an uncountable ocean: pick a real "at random" and you land on an irrational with certainty.

## Watch out

- You might think countable means "small" or "negligible," but $\mathbb{Q}$ is *dense* — arbitrarily close to every real — and still countable. Countability is about listability, not about size on the number line. (Density and cardinality are unrelated; hold them apart.)
- You might think the diagonal flip can use any replacement digit, but avoid $0$ and $9$. Decimals aren't unique — $0.4999\dots = 0.5000\dots$ — so a $y$ ending in all $9$s or all $0$s could secretly equal some $x_n$ despite differing digit-by-digit. Staying inside $\{4,5\}$ dodges the ambiguity entirely.
- You might think "$\mathbb{Z}$ has extra elements $\mathbb{N}$ lacks, so it's bigger." For infinite sets, "proper superset" does not mean "larger" — only the presence or absence of a bijection decides size, and Example 1 built one.

## One-liner

> Countable means listable — $\mathbb{Z}$ and $\mathbb{Q}$ are, $\mathbb{R}$ isn't — and Cantor's diagonal proves it by handing back a number your list forgot.

## Problems

**P1 (🟢)** Show that the set of ordered pairs $\mathbb{N}\times\mathbb{N}=\{(m,n):m,n\in\mathbb{N}\}$ is countable. (Hint: the same diagonal sweep that listed $\mathbb{Q}$ works here, with nothing to skip.)

**P2 (🟡)** The set $E$ of finite-length binary strings ($0,\ 1,\ 00,\ 01,\ 10,\ \dots$) — is it countable or uncountable? Prove your answer.

**P3 (🔴, optional)** Adapt the diagonal argument to prove that the set of **all** infinite binary sequences $\{0,1\}^{\mathbb{N}}$ (functions $\mathbb{N}\to\{0,1\}$) is uncountable — no decimals needed. Then say in one line why this is "the same theorem" as $[0,1]$ being uncountable.

<details>
<summary>Solutions</summary>

**P1** List the pairs by finite diagonals, exactly as with $\mathbb{Q}$ but keeping *every* pair (no lowest-terms skipping):

$$(1,1),\ (1,2),(2,1),\ (1,3),(2,2),(3,1),\ (1,4),(2,3),(3,2),(4,1),\ \dots$$

The diagonal $m+n=k$ contains exactly $k-1$ pairs, so it's finite; every pair $(m,n)$ sits on diagonal $m+n$ and is reached after finitely many steps. That's an exhaustive, non-repeating list, so $\mathbb{N}\times\mathbb{N}$ is countable. (Concretely, $g(m,n)=\tfrac{(m+n-1)(m+n-2)}{2}+m$ is an explicit bijection $\mathbb{N}\times\mathbb{N}\to\mathbb{N}$.) This *is* the "countable union of countable sets" engine: row $m$ is the countable set $\{(m,n):n\in\mathbb{N}\}$, and there are countably many rows.

**P2** **Countable.** Group strings by length: there are exactly $2^\ell$ strings of length $\ell$, a *finite* set for each $\ell$. So $E=\bigcup_{\ell\ge 1}\{\text{strings of length }\ell\}$ is a countable union of finite sets, hence countable. Concretely, list all length-1 strings, then all length-2, then length-3, and so on — every finite string appears after finitely many predecessors. The key is *finite* length: each block is finite, so the blocks thread into one list. (Contrast with P3, where the strings are infinitely long and no such threading survives.)

**P3** Suppose $\{0,1\}^{\mathbb{N}}$ were countable, listed as sequences $s_1,s_2,s_3,\dots$, where $s_n=(s_n(1),s_n(2),s_n(3),\dots)$ with each $s_n(k)\in\{0,1\}$. Define a new sequence $t$ by flipping the diagonal:

$$t(n) = 1 - s_n(n) \quad(\text{so } t(n)=1 \text{ if } s_n(n)=0,\ \text{else } 0).$$

Then $t\in\{0,1\}^{\mathbb{N}}$, but $t\neq s_n$ for every $n$, since they differ in coordinate $n$. So $t$ is missing from the list — contradiction. Hence $\{0,1\}^{\mathbb{N}}$ is uncountable.

*Why it's the same theorem:* a number in $[0,1]$ is essentially an infinite digit sequence, and binary digit sequences are infinite $0/1$ sequences — reading a real in binary turns Cantor's decimal diagonal into this one. (Here flipping $0\leftrightarrow 1$ is clean because we're not writing decimals, so the $0.111\dots=1.000\dots$ ambiguity only nicks a countable handful of sequences and doesn't affect the uncountability verdict.)

</details>

## Flashback

**From Lesson 1.3 (Consequences of completeness — density of $\mathbb{Q}$):** Let $\alpha\in\mathbb{R}$ be arbitrary. Using density of the rationals, prove there is a sequence of rationals $r_1,r_2,r_3,\dots$ with $r_n\to\alpha$ (i.e. for every $\varepsilon>0$, eventually $|r_n-\alpha|<\varepsilon$).

<details>
<summary>Solution</summary>

For each $n\in\mathbb{N}$, apply density of $\mathbb{Q}$ to the open interval $\left(\alpha-\tfrac{1}{n},\ \alpha+\tfrac{1}{n}\right)$: since $\alpha-\tfrac1n<\alpha+\tfrac1n$, density guarantees a rational $r_n$ with

$$\alpha-\tfrac{1}{n} < r_n < \alpha+\tfrac{1}{n}, \qquad\text{i.e.}\qquad |r_n-\alpha|<\tfrac{1}{n}.$$

Now given any $\varepsilon>0$, the Archimedean property (also from [1.3](01-03-consequences-of-completeness.md)) gives an $N$ with $\tfrac1N<\varepsilon$; for all $n\ge N$ we have $|r_n-\alpha|<\tfrac1n\le\tfrac1N<\varepsilon$. So $r_n\to\alpha$. Every real is a limit of rationals — the analytic face of density, and a preview of the ε–N convergence you formalize in [2.1](02-01-convergence-epsilon-n.md). $\blacksquare$

</details>

## Connections

- **Backward:** density of $\mathbb{Q}$ from [1.3](01-03-consequences-of-completeness.md) said rationals are *everywhere*; this lesson says there are nonetheless only *countably many* of them — the two facts coexist, and their tension (dense yet thin) is the whole point.
- **Forward:** the Flashback's "every real is a limit of rationals" becomes the ε–N definition of a limit in [2.1](02-01-convergence-epsilon-n.md), the atom of Module 2. The diagonal method itself returns whenever you must defeat *every* member of a list at once.
- **Sideways:** "$\mathbb{Q}$ is countable, hence negligible" is exactly why, in `probability-theory`, a countable set has **measure zero** and a function can be redefined on all of $\mathbb{Q}$ without changing its integral — the Riemann–Lebesgue criterion in this course's Module 7 (Lesson 7.2) leans on precisely this. The cardinality gap also underlies why `topology` distinguishes "dense" from "large."
