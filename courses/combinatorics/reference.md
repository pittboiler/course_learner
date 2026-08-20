# Enumerative & Algebraic Combinatorics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Combinatorics is one question — *how many?* — answered by four rules, a chart
that classifies "put things in slots," and three machines for the hard cases:
inclusion–exclusion (count what avoids everything), generating functions (let
algebra do the counting), and the bijection (prove two counts equal without
computing either). The tables below are the ones you'd otherwise re-derive
mid-problem: which formula a selection needs, what an operation on a sequence
does to its series, and which proof technique cracks which identity.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $[n]$ | the set $\{1,2,\dots,n\}$ | [1.3](lessons/01-03-inclusion-exclusion.md) |
| $n^{\underline{k}}$ | falling factorial $n(n-1)\cdots(n-k+1)$ — "$n$ things, $k$ slots, no reuse" | [1.1](lessons/01-01-four-rules-twelvefold-way.md) |
| $x^{\overline{n}}$ | rising factorial $x(x+1)\cdots(x+n-1)$ | [2.1](lessons/02-01-permutations-cycle-structure.md) |
| $\binom{n}{k}$ | number of $k$-element subsets of an $n$-set | [1.1](lessons/01-01-four-rules-twelvefold-way.md) |
| $\binom{n}{k_1,\dots,k_m}$ | multinomial — deal $n$ distinct objects into labeled bins of sizes $k_i$ | [1.2](lessons/01-02-binomial-multinomial-coefficients.md) |
| $A_S = \bigcap_{i\in S}A_i$ | objects having *all* the bad properties indexed by $S$ (with $A_\varnothing = U$) | [1.3](lessons/01-03-inclusion-exclusion.md) |
| $!n$, $D_n$ | number of derangements of $n$ elements (permutations with no fixed point) | [1.3](lessons/01-03-inclusion-exclusion.md) |
| $\operatorname{Surj}(n,k)$ | number of onto functions from an $n$-set to a $k$-set | [1.3](lessons/01-03-inclusion-exclusion.md) |
| $S_n$ | the group of all permutations of $[n]$ | [2.1](lessons/02-01-permutations-cycle-structure.md) |
| $(a_1\,a_2\cdots a_\ell)$ | a cycle: $a_1\mapsto a_2\mapsto\cdots\mapsto a_\ell\mapsto a_1$, everything else fixed | [2.1](lessons/02-01-permutations-cycle-structure.md) |
| $c(n,k)$ | unsigned Stirling number of the first kind — permutations of $[n]$ with $k$ cycles | [2.1](lessons/02-01-permutations-cycle-structure.md) |
| $s(n,k)$ | *signed* Stirling first kind, $s(n,k)=(-1)^{n-k}c(n,k)$ | [2.1](lessons/02-01-permutations-cycle-structure.md) |
| $\lambda\vdash n$ | $\lambda$ is a partition of $n$ (parts weakly decreasing, summing to $n$) | [2.1](lessons/02-01-permutations-cycle-structure.md) |
| $1^{m_1}2^{m_2}\cdots$ | exponential form of a cycle type: $m_i$ cycles of length $i$ | [2.1](lessons/02-01-permutations-cycle-structure.md) |
| $H_m$ | harmonic number $\sum_{j=1}^{m}1/j$ | [2.1](lessons/02-01-permutations-cycle-structure.md) |
| $S(n,k)$ | Stirling number of the second kind — set partitions of $[n]$ into $k$ blocks | [2.2](lessons/02-02-set-partitions-stirling-bell.md) |
| $B_n$ | Bell number — *all* set partitions of $[n]$ (**not** the Boolean lattice $B_n$ of 5.1) | [2.2](lessons/02-02-set-partitions-stirling-bell.md) |
| $p(n)$ | partition function — integer partitions of $n$ | [2.3](lessons/02-03-integer-partitions-ferrers.md) |
| $\lambda'$ | conjugate partition — transpose of $\lambda$'s Ferrers diagram | [2.3](lessons/02-03-integer-partitions-ferrers.md) |
| $A(x)=\sum a_nx^n$ | ordinary generating function (OGF) of the sequence $(a_n)$ | [3.1](lessons/03-01-ordinary-generating-functions.md) |
| $[x^n]A(x)$ | coefficient extraction — "open drawer $n$," giving $a_n$ | [3.1](lessons/03-01-ordinary-generating-functions.md) |
| $\mathbb{R}[[x]]$ | the ring of formal power series — no convergence, $x$ is a marker | [3.1](lessons/03-01-ordinary-generating-functions.md) |
| $\binom{\alpha}{n}$ | generalized binomial coefficient, $\alpha$ any real | [3.1](lessons/03-01-ordinary-generating-functions.md) |
| $C_n$ | Catalan number $\frac{1}{n+1}\binom{2n}{n}$ | [3.2](lessons/03-02-recurrences-generating-functions.md) |
| $\hat A(x)=\sum a_n\frac{x^n}{n!}$ | exponential generating function (EGF); the hat marks the carrier | [3.3](lessons/03-03-exponential-generating-functions.md) |
| $S\mathbin{\triangle}\{1\}$ | symmetric difference — here, "toggle whether $1$ is in $S$" | [4.1](lessons/04-01-bijective-proof.md) |
| $\operatorname{Fix}(\varphi)$ | fixed points of an involution, $\{x:\varphi(x)=x\}$ | [4.1](lessons/04-01-bijective-proof.md) |
| $\lceil x\rceil$ | ceiling — least integer $\ge x$ | [4.2](lessons/04-02-pigeonhole.md) |
| $K_n$ | complete graph on $n$ vertices (every pair joined) | [4.3](lessons/04-03-ramsey-theory.md) |
| $R(s,t)$ | Ramsey number — least $n$ forcing a red $K_s$ or a blue $K_t$ | [4.3](lessons/04-03-ramsey-theory.md) |
| $x\lessdot y$ | $y$ **covers** $x$: $x<y$ with nothing squeezed between | [5.1](lessons/05-01-posets-lattices-chains-antichains.md) |
| $x\wedge y$, $x\vee y$ | meet (greatest lower bound) and join (least upper bound) | [5.1](lessons/05-01-posets-lattices-chains-antichains.md) |
| $B_n$, $D_n$ | Boolean lattice (subsets under $\subseteq$) and divisor lattice (divisors under $\mid$) | [5.1](lessons/05-01-posets-lattices-chains-antichains.md) |
| $[x,y]$ | the interval $\{z: x\le z\le y\}$ of a poset | [5.2](lessons/05-02-mobius-inversion.md) |
| $\mu(x,y)$, $\zeta$, $\delta$ | Möbius, zeta, and delta functions of the incidence algebra | [5.2](lessons/05-02-mobius-inversion.md) |
| $[\,x=y\,]$ | Iverson bracket — $1$ if the statement holds, else $0$ | [5.2](lessons/05-02-mobius-inversion.md) |
| $e_k,\ h_k,\ p_k,\ m_\lambda,\ s_\lambda$ | elementary, complete, power-sum, monomial, and Schur symmetric functions | [5.3](lessons/05-03-symmetric-functions.md) |

## Definitions

### Binomial coefficient

The number of ways to pick $k$ things out of $n$ when order doesn't matter and
nothing repeats. Carry the *meaning*, not the factorials.

$$\binom{n}{k}=\frac{n^{\underline k}}{k!}=\frac{n!}{k!\,(n-k)!},\qquad \binom{n}{k}=0 \text{ for } k<0 \text{ or } k>n$$

*Introduced:* [1.1](lessons/01-01-four-rules-twelvefold-way.md), developed in [1.2](lessons/01-02-binomial-multinomial-coefficients.md)

### Multinomial coefficient

Deal $n$ distinct objects into $m$ **labeled** bins with prescribed sizes. The
binomial coefficient is the two-bin case.

$$\binom{n}{k_1,\dots,k_m}=\frac{n!}{k_1!\cdots k_m!},\qquad k_1+\cdots+k_m=n$$

*Introduced:* [1.2](lessons/01-02-binomial-multinomial-coefficients.md)

### Composition

An **ordered** tuple of integers summing to $n$ — order matters, unlike a
partition. *Weak* allows zero parts, *strong* demands every part $\ge 1$.

$$\#\text{weak into }k\text{ parts}=\binom{n+k-1}{k-1},\qquad \#\text{strong}=\binom{n-1}{k-1}$$

*Introduced:* [1.2](lessons/01-02-binomial-multinomial-coefficients.md)

### Derangement

A permutation that moves everything — nobody gets their own hat back.

$$!n=\sum_{j=0}^{n}(-1)^j\binom{n}{j}(n-j)!=n!\sum_{k=0}^{n}\frac{(-1)^k}{k!}\approx \frac{n!}{e}$$

*Introduced:* [1.3](lessons/01-03-inclusion-exclusion.md)

### Cycle type

The multiset of cycle lengths of a permutation, written as a partition of $n$.
It is the *only* thing conjugation preserves, so it is a complete invariant of
"same shape": conjugacy classes of $S_n$ $=$ partitions of $n$.

*Introduced:* [2.1](lessons/02-01-permutations-cycle-structure.md)

### Stirling numbers of the first kind

$c(n,k)$ counts permutations of $[n]$ with exactly $k$ cycles, fixed points
included. Cycles remember a cyclic order that blocks of a set partition do not,
which is why $c(n,k)\ge S(n,k)$ — a block of size $m$ winds into $(m-1)!$ cycles.

*Introduced:* [2.1](lessons/02-01-permutations-cycle-structure.md)

### Stirling numbers of the second kind

$S(n,k)$ counts the ways to seat $n$ distinguishable people at $k$ identical,
nonempty tables. Blocks are unordered and no block may be empty.

$$S(n,k)=\frac{1}{k!}\sum_{i=0}^{k}(-1)^i\binom{k}{i}(k-i)^n=\frac{\operatorname{Surj}(n,k)}{k!}$$

*Introduced:* [2.2](lessons/02-02-set-partitions-stirling-bell.md)

### Bell number

All set partitions of $[n]$, any number of blocks — equivalently, all
equivalence relations on an $n$-element set.

$$B_n=\sum_{k=0}^{n}S(n,k)$$

*Introduced:* [2.2](lessons/02-02-set-partitions-stirling-bell.md)

### Integer partition

A way to write $n$ as an **unordered** sum of positive parts, listed
nonincreasing. Labels are gone: only the multiset of sizes survives.

$$\lambda=(\lambda_1\ge\cdots\ge\lambda_r\ge 1),\quad \sum_i\lambda_i=n,\qquad p(n)=\#\{\lambda\vdash n\}$$

*Introduced:* [2.3](lessons/02-03-integer-partitions-ferrers.md)

### Ferrers diagram

The partition drawn as left-justified rows of dots, $\lambda_i$ dots in row $i$.
The picture is the point: it can be transposed.

*Introduced:* [2.3](lessons/02-03-integer-partitions-ferrers.md)

### Conjugate partition

Flip the Ferrers diagram across its main diagonal — rows become columns. It is
an involution, so it is a bijection from partitions of $n$ to themselves.

$$\lambda'_j=\#\{\,i:\lambda_i\ge j\,\},\qquad (\lambda')'=\lambda$$

*Introduced:* [2.3](lessons/02-03-integer-partitions-ferrers.md)

### Ordinary generating function

A clothesline: hang the count $a_n$ on the peg $x^n$ and the whole sequence
becomes one object. Nobody ever plugs a number into $x$.

$$A(x)=\sum_{n\ge 0}a_nx^n,\qquad [x^n]A(x)=a_n$$

*Introduced:* [3.1](lessons/03-01-ordinary-generating-functions.md)

### Formal power series

A series manipulated coefficient-by-coefficient with no notion of limit — each
coefficient of a product is a *finite* sum, so convergence never arises. A
series is invertible exactly when $a_0\ne 0$.

*Introduced:* [3.1](lessons/03-01-ordinary-generating-functions.md)

### Exponential generating function

Same counts, hung on $x^n/n!$ instead — the $n!$ is a divisor built into the
carrier so that multiplying series **deals out the labels** automatically. Use
it when your objects are labeled.

$$\hat A(x)=\sum_{n\ge0}a_n\frac{x^n}{n!},\qquad a_n=n!\,[x^n]\hat A(x)$$

*Introduced:* [3.3](lessons/03-03-exponential-generating-functions.md)

### Catalan number

The count shared by an entire zoo of objects — the answer whenever a structure
splits at a root into a left and a right piece of the same kind.

$$C_n=\frac{1}{n+1}\binom{2n}{n}=\binom{2n}{n}-\binom{2n}{n-1},\qquad C_{n+1}=\sum_{i=0}^{n}C_iC_{n-i}$$

*Introduced:* [3.2](lessons/03-02-recurrences-generating-functions.md), zoo in [4.1](lessons/04-01-bijective-proof.md)

### Dyck path

A lattice path from $(0,0)$ to $(n,n)$ of unit East and North steps that never
rises above the diagonal — equivalently a mountain range that never dips below
the ground, equivalently a balanced parenthesis string. Counted by $C_n$.

*Introduced:* [4.1](lessons/04-01-bijective-proof.md)

### Bijection principle

Two finite sets have the same size exactly when you can pair them off perfectly.
To *use* it, exhibit $f$ **and** its inverse — an injection alone only gives
$|A|\le|B|$.

*Introduced:* [1.1](lessons/01-01-four-rules-twelvefold-way.md), sharpened in [4.1](lessons/04-01-bijective-proof.md)

### Sign-reversing involution

A self-inverse map that flips the sign of everything it actually moves, so all
those pairs cancel in a signed sum and only the fixed points survive.

$$\varphi(\varphi(x))=x,\qquad \sum_{x\in X}\operatorname{sgn}(x)=\sum_{x\in\operatorname{Fix}(\varphi)}\operatorname{sgn}(x)$$

*Introduced:* [4.1](lessons/04-01-bijective-proof.md)

### Ramsey number

The crowd size at which disorder becomes impossible: the least $n$ such that
*every* red/blue coloring of $K_n$ contains a red $K_s$ or a blue $K_t$. The two
colors have **separate** targets.

*Introduced:* [4.3](lessons/04-03-ramsey-theory.md)

### Poset

A set with a reflexive, antisymmetric, transitive relation $\le$ — a hierarchy
in which some pairs are ordered and some are simply incomparable.

*Introduced:* [5.1](lessons/05-01-posets-lattices-chains-antichains.md)

### Chain and antichain

A **chain** is a totally ordered subset (a straight climb); an **antichain** is a
set of pairwise incomparable elements (a flat slice). Longest chain $=$
**height**, largest antichain $=$ **width**. A chain and an antichain meet in at
most one element.

*Introduced:* [5.1](lessons/05-01-posets-lattices-chains-antichains.md)

### Lattice

A poset in which *every* pair has both a meet and a join. Not automatic: two
incomparable maximal elements have no upper bound at all.

$$B_n:\ A\wedge B=A\cap B,\ A\vee B=A\cup B \qquad D_n:\ a\wedge b=\gcd(a,b),\ a\vee b=\operatorname{lcm}(a,b)$$

*Introduced:* [5.1](lessons/05-01-posets-lattices-chains-antichains.md)

### Incidence algebra

Functions $\alpha(x,y)$ labeling the intervals of a poset, multiplied by
splitting each interval at every midpoint.

$$(\alpha*\beta)(x,y)=\sum_{x\le z\le y}\alpha(x,z)\,\beta(z,y),\qquad \delta(x,y)=[\,x=y\,]$$

*Introduced:* [5.2](lessons/05-02-mobius-inversion.md)

### Möbius function of a poset

The correct "difference operator" for a tangled order: the weights are *forced*,
not chosen, by demanding that they cancel over every interval bigger than a point.

$$\sum_{x\le z\le y}\mu(x,z)=[\,x=y\,],\qquad \mu(x,x)=1,\quad \mu(x,y)=-\!\!\sum_{x\le z<y}\mu(x,z)$$

*Introduced:* [5.2](lessons/05-02-mobius-inversion.md)

### Symmetric function

A polynomial unchanged by every permutation of its variables — it cares about
the multiset of values, never the names. Fix degree $n$ and each classical basis
has one member per partition $\lambda\vdash n$, so dimension $p(n)$.

*Introduced:* [5.3](lessons/05-03-symmetric-functions.md)

### Schur function

The generating function of tableaux: fill $\lambda$'s Young diagram with
positive integers increasing weakly along rows and strictly down columns (an
**SSYT**), weight each filling by $x^T=\prod_i x_i^{\#i\text{'s in }T}$, and sum.

$$s_\lambda=\sum_{T\ \mathrm{SSYT}(\lambda)}x^T,\qquad s_{(n)}=h_n,\qquad s_{(1^n)}=e_n$$

*Introduced:* [5.3](lessons/05-03-symmetric-functions.md)

## Formulas and rules

### The four counting rules

| Rule | When | Statement |
|---|---|---|
| **Sum** | disjoint cases ("this **or** that") | $\lvert A_1\cup\cdots\cup A_m\rvert=\sum_i\lvert A_i\rvert$ for pairwise disjoint $A_i$ |
| **Product** | successive independent choices ("this **and** then that") | $n_1n_2\cdots n_k$, provided step $i$ always has $n_i$ options |
| **Bijection** | a hard set matches an easy one | a bijection $A\to B$ gives $\lvert A\rvert=\lvert B\rvert$ |
| **Division** | a *uniform* $d$-to-1 overcount | $\lvert B\rvert=\lvert A\rvert/d$ |

*From* [1.1](lessons/01-01-four-rules-twelvefold-way.md)

### Which count do I use

Select $k$ items from $n$ distinct options. Two switches — does order matter,
may you repeat — settle it.

| | **no repetition** | **repetition allowed** |
|---|---|---|
| **order matters** | $n^{\underline k}=\dfrac{n!}{(n-k)!}$ — gold/silver/bronze from $8$ sprinters: $8\cdot7\cdot6=336$ | $n^k$ — a $4$-digit PIN over $6$ digits: $6^4=1296$ |
| **order irrelevant** | $\dbinom{n}{k}$ — a committee of $3$ from $8$: $\binom83=56$ | $\dbinom{n+k-1}{k}=\dbinom{n+k-1}{n-1}$ — $10$ identical coins to $4$ children: $\binom{13}{3}=286$ |

The third switch — **are the boxes distinguishable?** — is what the twelvefold
way adds. Ordered-with-repetition and unordered-with-repetition are the same two
formulas as "distinct balls / identical balls into *labeled* boxes"; identical
boxes sends you into Stirling and partition territory.

*From* [1.1](lessons/01-01-four-rules-twelvefold-way.md) *and* [1.2](lessons/01-02-binomial-multinomial-coefficients.md)

### The twelvefold way

Model the problem as a function $f$ from $k$ **balls** (domain) to $n$ **boxes**
(codomain). "At most one ball per box" $=$ injective; "no box empty" $=$
surjective. Pick the row and the column; the cell is your formula.

| balls / boxes | any $f$ | injective | surjective |
|---|---|---|---|
| distinct / distinct | $n^k$ | $n^{\underline k}$ | $n!\,S(k,n)$ |
| identical / distinct | $\binom{n+k-1}{k}$ | $\binom{n}{k}$ | $\binom{k-1}{n-1}$ |
| distinct / identical | $\sum_{j=1}^{n}S(k,j)$ | $[\,k\le n\,]$ | $S(k,n)$ |
| identical / identical | partitions of $k$ into $\le n$ parts | $[\,k\le n\,]$ | partitions of $k$ into exactly $n$ parts |

Physics reads the top rows: Maxwell–Boltzmann $=n^k$, Fermi–Dirac $=\binom nk$
(Pauli forbids doubling up), Bose–Einstein $=\binom{n+k-1}{k}$ (stars and bars).

*From* [1.1](lessons/01-01-four-rules-twelvefold-way.md); the Stirling cells are earned in [2.2](lessons/02-02-set-partitions-stirling-bell.md), the partition cells in [2.3](lessons/02-03-integer-partitions-ferrers.md)

### Standard identities, and what cracks each

Every identity here has more than one proof; the last column says which lens is
*fastest*, and the course wants all three in your hands.

| Identity | Yields to |
|---|---|
| $\binom{n}{k}=\binom{n}{n-k}$ | bijection — choosing what you keep *is* choosing what you discard |
| $\binom{n}{k}=\binom{n-1}{k-1}+\binom{n-1}{k}$ (Pascal) | condition on one distinguished element: is $n$ in or out? |
| $(x+y)^n=\sum_{k}\binom nk x^ky^{n-k}$ (binomial theorem) | double counting — which $k$ of the $n$ factors donated an $x$? |
| $\sum_{k}\binom nk=2^n$ | all three: set $x=y=1$; count subsets by size; or induct with Pascal |
| $\sum_{k}(-1)^k\binom nk=0$ $(n\ge1)$ | algebra $(1-1)^n$, or a sign-reversing involution (toggle element $1$) |
| $\binom{m+n}{k}=\sum_j\binom mj\binom n{k-j}$ (Vandermonde) | double counting ($m$ men, $n$ women), or convolution $[x^k](1+x)^m(1+x)^n$ |
| $\sum_k\binom nk^2=\binom{2n}{n}$ | Vandermonde at $m=n$, then symmetry on the second factor |
| $\sum_{i=r}^{n}\binom ir=\binom{n+1}{r+1}$ (hockey stick) | telescope Pascal: $\binom ir=\binom{i+1}{r+1}-\binom{i}{r+1}$ |
| $\sum_{i=0}^{n}\binom{i+r-1}{r-1}=\binom{n+r}{r}$ (hockey stick, OGF form) | multiply by $\frac{1}{1-x}$ — that operation *is* "take partial sums" |
| $\binom{2n}{n-1}=\frac{n}{n+1}\binom{2n}{n}$ | factorials; it is the step that turns reflection into $C_n$ |
| $\binom{n}{k_1,\dots,k_m}=\binom{n}{k_1}\binom{n-k_1}{k_2}\cdots$ | telescoping product of binomials |

*From* [1.2](lessons/01-02-binomial-multinomial-coefficients.md), [3.1](lessons/03-01-ordinary-generating-functions.md), [4.1](lessons/04-01-bijective-proof.md)

### Inclusion–exclusion

Count the *overlaps* of the bad properties — those are easy — and alternate signs
until every object is counted exactly once.

$$\text{union:}\quad \Bigl\lvert\bigcup_{i=1}^{n}A_i\Bigr\rvert=\sum_{\varnothing\ne S\subseteq[n]}(-1)^{\lvert S\rvert-1}\lvert A_S\rvert$$

$$\text{sieve (none of the properties):}\quad \bigl\lvert\overline{A_1}\cap\cdots\cap\overline{A_n}\bigr\rvert=\sum_{S\subseteq[n]}(-1)^{\lvert S\rvert}\lvert A_S\rvert$$

The engine is one cancellation: an object in exactly $m\ge1$ of the sets
contributes $\sum_k(-1)^k\binom mk=(1-1)^m=0$. When $\lvert A_S\rvert$ depends
only on $j=\lvert S\rvert$, the $2^n$ terms collapse to $\sum_j\binom nj(\cdots)$
— spotting that symmetry is the whole game.

| Count | Formula |
|---|---|
| surjections $[n]\twoheadrightarrow[k]$ | $\operatorname{Surj}(n,k)=\sum_{j=0}^{k}(-1)^j\binom kj(k-j)^n=k!\,S(n,k)$ |
| derangements | $!n=\sum_{j=0}^{n}(-1)^j\binom nj(n-j)!$, recurrence $D_n=(n-1)(D_{n-1}+D_{n-2})$ |
| Euler's totient | $\varphi(n)=n\prod_{p\mid n}\bigl(1-\tfrac1p\bigr)$ — the sieve with "divisible by $p$" as the bad properties |

*From* [1.3](lessons/01-03-inclusion-exclusion.md)

### Permutations by cycle structure

$$c(n,k)=c(n-1,k-1)+(n-1)\,c(n-1,k),\qquad \sum_{k}c(n,k)=n!$$

$$\sum_{k}c(n,k)\,x^k=x^{\overline n}=x(x+1)\cdots(x+n-1),\qquad \sum_k s(n,k)x^k=x^{\underline n}$$

| Fact | Value |
|---|---|
| permutations of cycle type $1^{m_1}2^{m_2}\cdots$ | $\dfrac{n!}{\prod_i i^{m_i}\,m_i!}$ (the size of that conjugacy class) |
| single $n$-cycles | $c(n,1)=(n-1)!$ |
| two cycles | $c(n,2)=(n-1)!\,H_{n-1}$ |
| sign of a permutation | $\operatorname{sgn}(\sigma)=(-1)^{n-k}$, $k=$ number of cycles |
| rows $c(n,k)$, $n=1..5$ | $1$ · $1,1$ · $2,3,1$ · $6,11,6,1$ · $24,50,35,10,1$ |

*From* [2.1](lessons/02-01-permutations-cycle-structure.md)

### Set partitions: Stirling & Bell

$$S(n,k)=k\,S(n-1,k)+S(n-1,k-1),\qquad B_{n+1}=\sum_{j=0}^{n}\binom nj B_j$$

| Fact | Value |
|---|---|
| boundaries | $S(n,1)=S(n,n)=1$, $S(0,0)=1$, $S(n,0)=0$ for $n\ge1$ |
| two blocks | $S(n,2)=2^{n-1}-1$ |
| rows $S(n,k)$, $n=1..5$ | $1$ · $1,1$ · $1,3,1$ · $1,7,6,1$ · $1,15,25,10,1$ |
| Bell numbers $B_0,\dots,B_7$ | $1,1,2,5,15,52,203,877$ |
| derangements $!0,\dots,!6$ | $1,0,1,2,9,44,265$ |

*From* [2.2](lessons/02-02-set-partitions-stirling-bell.md) *and* [1.3](lessons/01-03-inclusion-exclusion.md)

### Integer partitions

**Conjugation theorem** (transpose the diagram, swap the two statistics):

- partitions of $n$ into **at most $k$ parts** $=$ partitions into **parts each $\le k$**;
- partitions with **largest part exactly $k$** $=$ partitions with **exactly $k$ parts**.

**Euler's theorem.** Distinct parts and odd parts are equinumerous, because
$1+x^k=\frac{1-x^{2k}}{1-x^k}$ telescopes one product onto the other:

$$\prod_{k\ge1}(1+x^k)=\prod_{k\ge1}\frac{1}{1-x^{2k-1}}$$

| Object | Generating function |
|---|---|
| all partitions | $\sum_n p(n)x^n=\prod_{k\ge1}\dfrac{1}{1-x^k}$ |
| distinct parts | $\prod_{k\ge1}(1+x^k)$ |
| odd parts | $\prod_{k\ge1}\dfrac{1}{1-x^{2k-1}}$ |
| $p(0),\dots,p(10)$ | $1,1,2,3,5,7,11,15,22,30,42$ |

Self-conjugate partitions of $n$ biject with partitions into distinct odd parts.

*From* [2.3](lessons/02-03-integer-partitions-ferrers.md) *and* [3.1](lessons/03-01-ordinary-generating-functions.md)

### The generating-function dictionary

What you do to a sequence, and what that does to its series. This table is the
reason generating functions replace cleverness with bookkeeping.

| Operation on the sequence | OGF $A(x)=\sum a_nx^n$ | EGF $\hat A(x)=\sum a_n\frac{x^n}{n!}$ |
|---|---|---|
| $a_n+b_n$ (do this **or** that) | $A+B$ | $\hat A+\hat B$ |
| shift up: $a_{n-1}$ (prepend a $0$) | $x\,A(x)$ | $\int_0^x\hat A$ |
| shift down: $a_{n+1}$ | $\dfrac{A(x)-a_0}{x}$ | $\hat A'(x)$ |
| combine two structures | $A\cdot B$: plain convolution $\sum_i a_ib_{n-i}$ | $\hat A\hat B$: **binomial** convolution $\sum_k\binom nk a_kb_{n-k}$ |
| partial sums $\sum_{i\le n}a_i$ | $\dfrac{A(x)}{1-x}$ | — |
| rescale $c^na_n$ | $A(cx)$ | $\hat A(cx)$ |
| weight by size, $n\,a_n$ | $x\,A'(x)$ | $x\,\hat A'(x)$ |
| any number of pieces, **ordered** | $\dfrac{1}{1-C(x)}$ | $\dfrac{1}{1-\hat C(x)}$ |
| any number of pieces, **unordered** (labeled) | — | $\exp\bigl(\hat C(x)\bigr)$ (the exponential formula) |

Choose the carrier by asking "are my objects labeled?" — unlabeled piles take
OGFs, name-tagged objects take EGFs. Using the wrong one miscounts by exactly
the $\binom nk$ factors.

*From* [3.1](lessons/03-01-ordinary-generating-functions.md), [3.2](lessons/03-02-recurrences-generating-functions.md), [3.3](lessons/03-03-exponential-generating-functions.md)

### The series library

| Series | Sequence it carries |
|---|---|
| $\dfrac{1}{1-x}=\sum_{n\ge0}x^n$ | OGF of all-ones — the catalog of one nonnegative integer |
| $\dfrac{1}{1-cx}=\sum_{n\ge0}c^nx^n$ | OGF of $c^n$ |
| $\dfrac{1}{(1-x)^k}=\sum_{n\ge0}\binom{n+k-1}{k-1}x^n$ | stars and bars — the workhorse coefficient |
| $(1+x)^{\alpha}=\sum_{n\ge0}\binom{\alpha}{n}x^n$ | Newton's generalized binomial series, any real $\alpha$ |
| $1+x+\cdots+x^m=\dfrac{1-x^{m+1}}{1-x}$ | a **bounded** variable's catalog; the numerator is the sieve |
| $\sum_{n\ge0}nx^n=\dfrac{x}{(1-x)^2}$ | OGF of $n$ |
| $\dfrac{x}{1-x-x^2}$ | Fibonacci; $F_n=\frac{1}{\sqrt5}(\varphi^n-\psi^n)$ with $\varphi,\psi=\frac{1\pm\sqrt5}{2}$ |
| $\dfrac{1-\sqrt{1-4x}}{2x}$ | Catalan; $C_0,\dots,C_7=1,1,2,5,14,42,132,429$ |
| $e^x$ | **EGF** of all-ones — a labeled set; $e^x-1$ is a nonempty one |
| $\dfrac{1}{1-x}$ as an EGF | permutations ($a_n=n!$) — same series, different carrier |
| $\dfrac{e^{-x}}{1-x}$ | **EGF** of derangements |
| $e^{\,e^x-1}$ | **EGF** of Bell numbers; $\dfrac{(e^x-1)^k}{k!}$ is the EGF of $S(n,k)$ |
| $\log\dfrac{1}{1-x}$ | **EGF** of cycles; $\exp$ of it is $\frac1{1-x}$, all permutations |

*From* [3.1](lessons/03-01-ordinary-generating-functions.md), [3.2](lessons/03-02-recurrences-generating-functions.md), [3.3](lessons/03-03-exponential-generating-functions.md)

### Solving a recurrence with a generating function

1. **Multiply** the recurrence by $x^n$ and **sum over exactly the range where it holds** (Fibonacci's holds for $n\ge2$, not $n\ge0$).
2. **Recognize** each shifted sum: $\sum_{n\ge n_0}a_{n-j}x^n=x^j\bigl(A(x)-\sum_{m<n_0-j}a_mx^m\bigr)$. The subtracted low-order terms *are* the initial conditions.
3. **Solve** the algebraic equation for $A(x)$.
4. **Expand** and read off $a_n=[x^n]A(x)$.

| Recurrence shape | What $A(x)$ becomes | How to expand |
|---|---|---|
| linear, constant coefficients, order $d$ | rational $\dfrac{P(x)}{1-c_1x-\cdots-c_dx^d}$ | partial fractions; distinct roots give $a_n=\sum_iK_i\rho_i^{\,n}$ |
| linear with a **repeated** root $\rho$ of multiplicity $m$ | a factor $\dfrac{1}{(1-\rho x)^m}$ | coefficients $\binom{n+m-1}{m-1}\rho^n$ — polynomial in $n$ times $\rho^n$ |
| convolution $\sum_i a_ia_{n-i}$ | quadratic in $A(x)$ | quadratic formula, then generalized binomial; keep the root finite at $x=0$ |

The reciprocal roots $\rho_i$ are the **characteristic roots** — the discrete twin
of an ODE's $e^{\lambda t}$, repeated roots included ($t\,e^{\lambda t}$ becomes
polynomial-times-power).

*From* [3.2](lessons/03-02-recurrences-generating-functions.md)

### The Catalan zoo

$C_n$ counts, among others: balanced parenthesizations of length $2n$; Dyck
paths of semilength $n$; triangulations of a convex $(n+2)$-gon; binary trees
with $n$ nodes. Each pair is linked by a bijection you can draw, and all satisfy
the same split-at-the-root recurrence.

**Reflection principle.** Bad paths (those dipping to $-1$) reflect after their
first touch of $y=-1$ into *all* paths to $(2n,-2)$, so
$C_n=\binom{2n}{n}-\binom{2n}{n-1}$. The same fold counts ballot sequences and
computes hitting probabilities for a random walk with a barrier.

*From* [4.1](lessons/04-01-bijective-proof.md) *and* [3.2](lessons/03-02-recurrences-generating-functions.md)

### Pigeonhole

| Form | Statement |
|---|---|
| basic | $n+1$ objects into $n$ boxes force a box with $\ge 2$ |
| generalized | $N$ objects into $n$ boxes force a box with $\ge\lceil N/n\rceil$ |
| averaging | some $x_i\ge$ the mean and some $x_j\le$ the mean |
| Erdős–Szekeres | any $mn+1$ distinct reals contain an increasing subsequence of length $m+1$ **or** a decreasing one of length $n+1$ |

The art is the *modeling*, not the statement: the win is usually a clever choice
of holes (acquaintance-counts, prefix sums mod $n$, the odd part of $2^km$) —
and when the direct setup gives "$n$ into $n$," look for a reason to delete one
box.

*From* [4.2](lessons/04-02-pigeonhole.md)

### Ramsey numbers

$$R(s,t)\le R(s-1,t)+R(s,t-1),\qquad R(s,t)\le\binom{s+t-2}{s-1}$$

| Fact | Value |
|---|---|
| symmetry, base cases | $R(s,t)=R(t,s)$, $R(s,2)=R(2,s)=s$ |
| the party number | $R(3,3)=6$ — upper: fix a vertex, $\lceil 5/2\rceil=3$ edges share a color; lower: red pentagon, blue pentagram on $K_5$ |
| known values | $R(3,4)=9$, $R(4,4)=18$, $R(5,5)\in[43,48]$ |

Proving $R(s,t)=n$ is always **two** obligations: $n$ suffices, and $n-1$ fails
via an explicit coloring.

*From* [4.3](lessons/04-03-ramsey-theory.md)

### Poset theorems

| Theorem | Statement |
|---|---|
| **Dilworth** | minimum number of **chains** covering the poset $=$ **width** (largest antichain) |
| **Mirsky** (dual) | minimum number of **antichains** covering the poset $=$ **height** (longest chain) |
| **Sperner** | the largest antichain in $B_n$ has size $\binom{n}{\lfloor n/2\rfloor}$ — the middle layer |
| easy half of Dilworth | a chain meets an antichain at most once, so a chain cover needs $\ge w$ chains |

Erdős–Szekeres is Mirsky in disguise: order the indices by $i\preceq j\iff i\le j$
and $a_i\le a_j$; chains are increasing subsequences, antichains are decreasing
ones, and $\le r$ antichains of size $\le s$ hold at most $rs$ indices.

*From* [5.1](lessons/05-01-posets-lattices-chains-antichains.md) *and* [4.2](lessons/04-02-pigeonhole.md)

### Möbius inversion

$$g(x)=\sum_{y\le x}f(y)\quad\Longleftrightarrow\quad f(x)=\sum_{y\le x}\mu(y,x)\,g(y)$$

*In words:* un-summing over a poset. $\mu$ depends **only on the interval**
$[x,y]$, never on the rest of the poset.

| Poset | Möbius function | What inversion becomes |
|---|---|---|
| Boolean lattice $B_n$ | $\mu(\varnothing,S)=(-1)^{\lvert S\rvert}$ | inclusion–exclusion — the signs you memorized |
| divisor lattice $D_n$ | $\mu(a,b)=\mu(b/a)$, the classical $\mu$ | $g(n)=\sum_{d\mid n}f(d)\iff f(n)=\sum_{d\mid n}\mu(n/d)g(d)$ |
| a chain | $\mu(c_i,c_i)=1$, $\mu(c_i,c_{i+1})=-1$, else $0$ | why $\mu(p^k)=0$ for $k\ge2$ (a prime power's divisors form a chain) |
| partition lattice | takes values like $\pm2$ | the $0,\pm1$ pattern is *not* universal |

Worked instance: $\varphi$ inverts $\sum_{d\mid n}\varphi(d)=n$ into
$\varphi(n)=\sum_{e\mid n}\mu(e)\,\frac{n}{e}$, giving $\varphi(12)=4$.

*From* [5.2](lessons/05-02-mobius-inversion.md)

### Symmetric functions

| Basis | Built from | Rule |
|---|---|---|
| monomial $m_\lambda$ | all distinct monomials with exponent multiset $\lambda$ | — |
| elementary $e_k$ | $\sum_{i_1<\cdots<i_k}x_{i_1}\cdots x_{i_k}$ | $k$ **distinct** variables |
| complete $h_k$ | $\sum_{i_1\le\cdots\le i_k}x_{i_1}\cdots x_{i_k}$ | $k$ variables **with repetition** |
| power sum $p_k$ | $\sum_i x_i^k$ | — |
| Schur $s_\lambda$ | $\sum_T x^T$ over SSYT of shape $\lambda$ | the well-behaved one |

**Fundamental theorem.** Every symmetric polynomial is a *unique* polynomial in
$e_1,e_2,\dots$ — uniqueness is what lets you prove an identity by checking it on
the $e_k$ alone. (Vieta is the case where the $e_k$ are the coefficients of
$\prod_i(t-x_i)$.)

**Newton's identities.** $p_k=e_1p_{k-1}-e_2p_{k-2}+\cdots+(-1)^{k-1}k\,e_k$; the
first unwindings are $p_1=e_1$, $p_2=e_1^2-2e_2$, $p_3=e_1^3-3e_1e_2+3e_3$. The
mirror recursion $h_n=\sum_{i=1}^{n}(-1)^{i-1}e_ih_{n-i}$ is the algebraic heart
of "distinct vs. unrestricted" dualities.

**Hook-length formula.** The number of *standard* Young tableaux of shape
$\lambda\vdash n$ is $n!$ divided by the product of the hook lengths — e.g.
$5!/(4\cdot3\cdot1\cdot2\cdot1)=5$ for $\lambda=(3,2)$. The number of SSYT of
shape $\lambda$ with entries in $[n]$ is the dimension of the corresponding
$GL_n$-irrep.

*From* [5.3](lessons/05-03-symmetric-functions.md)

## Assumed, not taught here

This is a Tier 1 course built on `proofs-primer`; it uses the following without
deriving them.

| Fact | Where it's taught |
|---|---|
| Injective / surjective / bijective, and inverses as certificates | [proofs-primer 3.2](../proofs-primer/lessons/03-02-functions-injective-surjective-bijective.md) |
| Sets, subsets, complements, the element method | [proofs-primer 3.1](../proofs-primer/lessons/03-01-sets-and-element-method.md) |
| Induction and strong induction (every recurrence proof here) | [proofs-primer 3.3](../proofs-primer/lessons/03-03-induction.md) |
| Proof by contradiction (pigeonhole, Erdős–Szekeres, Mirsky) | [proofs-primer 2.2](../proofs-primer/lessons/02-02-contrapositive-and-contradiction.md) |
| A set partition **is** an equivalence relation; partial orders as relations | [discrete-mathematics 2.2](../discrete-mathematics/lessons/02-02-relations-equivalence-and-order.md) |
| Divisibility, the division algorithm, $\lfloor N/d\rfloor$ as a count of multiples | [number-theory 1.1](../number-theory/lessons/01-01-divisibility-and-the-division-algorithm.md) |
| Unique factorization, $\gcd$ and $\operatorname{lcm}$, the $2^k m$ split | [number-theory 1.3](../number-theory/lessons/01-03-primes-and-the-fundamental-theorem.md), [1.2](../number-theory/lessons/01-02-euclidean-algorithm-and-bezout.md) |
| The classical Möbius function $\mu(d)$ and divisor-sum inversion | [number-theory 4.1](../number-theory/lessons/04-01-arithmetic-functions-and-mobius-inversion.md) |
| Euler's totient $\varphi$ and $\sum_{d\mid n}\varphi(d)=n$ | [number-theory 3.2](../number-theory/lessons/03-02-euler-totient-and-theorem.md) |
| Partial fractions (the expansion step of every linear recurrence) | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md) |
| $e^x=\sum x^n/n!$ and the analytic binomial series (used formally here) | [calc-refresher 3.2](../calc-refresher/lessons/03-02-power-and-taylor-series.md) |
| Geometric series $\frac{a}{1-r}$; sigma notation and index shifting | [precalculus 3.3](../precalculus/lessons/03-03-series-and-infinite-geometric-sum.md), [3.2](../precalculus/lessons/03-02-sequences-and-sigma-notation.md) |
| $S_n$ as a group; conjugation and conjugacy classes | [abstract-algebra 1.3](../abstract-algebra/lessons/01-03-dihedral-symmetric-groups.md), [2.5](../abstract-algebra/lessons/02-05-orbits-stabilizers-conjugacy.md) |
| Rings and polynomial rings (the home of $\mathbb{R}[[x]]$ and of symmetric functions) | [abstract-algebra 3.4](../abstract-algebra/lessons/03-04-polynomial-rings.md) |
| Permutation sign as the alternating factor in the determinant | [linalg-refresher 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| "Basis" and "dimension" (each symmetric-function family is a basis) | [linalg-refresher 1.2](../linalg-refresher/lessons/01-02-linear-independence-basis-dimension.md) |
| Complete graphs, cliques, vertex degree | [graph-theory 1.1](../graph-theory/lessons/01-01-degree-and-handshake-lemma.md); Ramsey again in [5.3](../graph-theory/lessons/05-03-extremal-ramsey.md) |

## Pitfalls

### Setting a count up

- Order mattering is a **modeling choice**, not a fact about the objects — a podium is ordered, a committee isn't. State it before reaching for a formula. *([1.1](lessons/01-01-four-rules-twelvefold-way.md))*
- Divide by $k!$ only when the overcount is **uniform**; objects with internal symmetry are overcounted less, and naive division is wrong. *([1.1](lessons/01-01-four-rules-twelvefold-way.md))*
- "Balls in boxes" and "functions" are the same problem: ball $=$ domain element, box $=$ image, "no doubling up" $=$ injective, "no box empty" $=$ surjective. Translate before formulating. *([1.1](lessons/01-01-four-rules-twelvefold-way.md))*
- Weak compositions (parts $\ge0$) give $\binom{n+k-1}{k-1}$; strong (parts $\ge1$) give $\binom{n-1}{k-1}$. Decide whether empty parts are legal first. *([1.2](lessons/01-02-binomial-multinomial-coefficients.md))*
- For small binomials use Pascal's triangle, not factorials — $\binom63=20$ with no $720$ in sight. *([1.2](lessons/01-02-binomial-multinomial-coefficients.md))*
- The convention $\binom nk=0$ outside $0\le k\le n$ is what makes sums like Vandermonde's automatically finite; don't fuss over limits. *([1.2](lessons/01-02-binomial-multinomial-coefficients.md))*

### Inclusion–exclusion

- The formula is **unconditional**: write *every* pairwise, triple, … term. An empty intersection contributes $0$; you never decide term-by-term. *([1.3](lessons/01-03-inclusion-exclusion.md))*
- Union form carries $(-1)^{\lvert S\rvert-1}$, sieve form carries $(-1)^{\lvert S\rvert}$ **and** the $+\lvert U\rvert$ term. Mixing them is the number-one sign error — decide up front which you're computing. *([1.3](lessons/01-03-inclusion-exclusion.md))*

### Permutations and partitions

- Cycle *notation* isn't unique (rotate the entries, reorder the disjoint factors); the *decomposition* is. Dropped fixed points must be recovered from $n$. *([2.1](lessons/02-01-permutations-cycle-structure.md))*
- A disjoint-cycle decomposition is not a composition of overlapping cycles: $(1\,2)(2\,3)$ must be applied in order and simplifies to $(1\,2\,3)$. *([2.1](lessons/02-01-permutations-cycle-structure.md))*
- Unsigned $c(n,k)$ sits in the *rising* factorial; signed $s(n,k)=(-1)^{n-k}c(n,k)$ sits in the *falling* one. Don't quote one for the other. *([2.1](lessons/02-01-permutations-cycle-structure.md))*
- Three different "partition" objects: $c(n,k)$ counts cycles, $S(n,k)$ counts blocks (no cyclic order — hence $c\ge S$), $p(n)$ counts sizes with the labels erased ($B_3=5$ but $p(3)=3$). *([2.1](lessons/02-01-permutations-cycle-structure.md), [2.2](lessons/02-02-set-partitions-stirling-bell.md), [2.3](lessons/02-03-integer-partitions-ferrers.md))*
- Blocks are unordered: $S(3,2)=3$, not $6$. If you multiply by $k!$ you have moved to surjections (labeled boxes) — that factor is exactly the bridge. *([2.2](lessons/02-02-set-partitions-stirling-bell.md))*
- Nonempty is not optional in $S(n,k)$; empty blocks are precisely what the sieve removes in the closed form. *([2.2](lessons/02-02-set-partitions-stirling-bell.md))*
- An integer partition is unordered — $(3,1)$ and $(1,3)$ are the same partition but different compositions, which is why $p(n)$ is far below $2^{n-1}$ and has no elementary closed form. *([2.3](lessons/02-03-integer-partitions-ferrers.md))*
- Conjugation is *only* transposing the picture. If you're doing arithmetic, stop and reflect the diagram. *([2.3](lessons/02-03-integer-partitions-ferrers.md))*

### Generating functions

- $\frac{1}{1-x}=\sum x^n$ needs no convergence caveat here — it is the coefficient-wise statement $(1-x)\sum x^n=1$. Plugging in a number is beside the point. *([3.1](lessons/03-01-ordinary-generating-functions.md))*
- The product of two series is the **convolution**, not the termwise product: drawer $n$ of $AB$ mixes many drawers of each. That mixing *is* the combinatorics. *([3.1](lessons/03-01-ordinary-generating-functions.md))*
- You may divide by $A(x)$ only when $a_0\ne0$; and when using $(1-x)^{-k}$, the $(-1)^n$ from $(-x)^n$ must cancel the one from $\binom{-k}{n}$ or your count comes out alternating. *([3.1](lessons/03-01-ordinary-generating-functions.md))*
- Sum a recurrence over exactly the range where it **holds** — the missing low-order terms are the initial conditions, and getting the range wrong corrupts the numerator. *([3.2](lessons/03-02-recurrences-generating-functions.md))*
- Only one root of a quadratic OGF equation is a power series; test finiteness at $x=0$ and discard the one behaving like $1/x$. *([3.2](lessons/03-02-recurrences-generating-functions.md))*
- A repeated characteristic root breaks the clean $\sum K_i\rho_i^n$ pattern, giving a polynomial in $n$ times $\rho^n$. *([3.2](lessons/03-02-recurrences-generating-functions.md))*
- OGF product $\ne$ EGF product: plain convolution vs. binomial convolution. Pick the carrier by asking whether the objects are labeled. *([3.3](lessons/03-03-exponential-generating-functions.md))*
- The $n!$ in $x^n/n!$ is part of the **carrier**, not the count — recover $a_n$ as $n!\,[x^n]\hat A(x)$. *([3.3](lessons/03-03-exponential-generating-functions.md))*
- Labeled assemblies of unordered pieces use $\exp(\hat C)$; $\frac{1}{1-\hat C}$ is for genuinely **ordered** lists of pieces. *([3.3](lessons/03-03-exponential-generating-functions.md))*

### Bijections, pigeonhole, Ramsey

- An injection $A\to B$ gives only $\lvert A\rvert\le\lvert B\rvert$. Half a bijection is an inequality; exhibit the inverse. *([4.1](lessons/04-01-bijective-proof.md))*
- Only a **sign-reversing** involution cancels a signed sum, and only on its non-fixed elements — a correct proof ends by counting $\operatorname{Fix}(\varphi)$, not by declaring the sum zero. *([4.1](lessons/04-01-bijective-proof.md))*
- "Both are $5$ at $n=3$" is evidence, not a bijection. Write the rule down. *([4.1](lessons/04-01-bijective-proof.md))*
- $\lceil N/n\rceil$ pins the maximum, it doesn't promise a *big* box; the content is only "you can't keep everyone below it." *([4.2](lessons/04-02-pigeonhole.md))*
- Erdős–Szekeres promises one of the two monotone runs, not both. *([4.2](lessons/04-02-pigeonhole.md))*
- $R(s,t)$ locks clique size to color — a red $K_s$ **or** a blue $K_t$; they collapse into one statement only when $s=t$. *([4.3](lessons/04-03-ramsey-theory.md))*
- The $K_6$ argument is half of $R(3,3)=6$; without the $K_5$ pentagon/pentagram construction you have only proved $\le$. *([4.3](lessons/04-03-ramsey-theory.md))*

### Posets and Möbius inversion

- A Hasse diagram draws **covers** only. In $a\lessdot b\lessdot c$ there is no segment from $a$ to $c$, yet $a<c$ — that pair is a chain, not an antichain. *([5.1](lessons/05-01-posets-lattices-chains-antichains.md))*
- Maximal $\ne$ maximum: a poset routinely has several maximal elements and no top at all — and then no joins, so it is not a lattice. *([5.1](lessons/05-01-posets-lattices-chains-antichains.md))*
- Dilworth pairs **width** with a chain cover; Mirsky pairs **height** with an antichain cover. Cross the wires and you will "prove" false bounds. *([5.1](lessons/05-01-posets-lattices-chains-antichains.md))*
- $\mu$ depends only on the interval $[x,y]$, so order-isomorphic intervals have identical $\mu$ — which is why $\mu(a,b)$ in a divisor lattice sees only $b/a$. *([5.2](lessons/05-02-mobius-inversion.md))*
- $\mu\in\{0,\pm1\}$ is special to Boolean and divisor lattices, not a law. *([5.2](lessons/05-02-mobius-inversion.md))*
- Down-set and up-set inversion are genuinely different; say which end you are summing from. *([5.2](lessons/05-02-mobius-inversion.md))*

### Symmetric functions

- $e_k$ forbids repeated variables, $h_k$ allows them — the same distinct-vs-repetition fork as $\binom nk$ vs. stars and bars, and why $s_{(1^n)}=e_n$ while $s_{(n)}=h_n$. *([5.3](lessons/05-03-symmetric-functions.md))*
- The fundamental theorem includes **uniqueness**; that is what licenses proving an identity by checking it on the $e_k$. *([5.3](lessons/05-03-symmetric-functions.md))*
- A Schur function's symmetry is *not* obvious from the tableau sum — take it as stated. And $(1^n)$ is exponential shorthand for a single column of $n$ boxes, not a typo. *([5.3](lessons/05-03-symmetric-functions.md))*
