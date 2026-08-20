# Real Analysis · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Analysis is calculus rebuilt on one axiom: $\mathbb{R}$ has no holes. Everything
below is that axiom cashed out — sequences that must converge, sets that can't
leak, functions that must attain their max, integrals that must exist, and limits
you're finally licensed to swap. Mid-proof, the two things you actually look up
are the **exact hypotheses** of a theorem and **which mode of convergence** you're
entitled to use; both have their own sections.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\mathbb{Q}$, $\mathbb{R}\setminus\mathbb{Q}$ | the rationals (dense but full of holes) and the irrationals | [1.1](lessons/01-01-gap-in-the-rationals.md) |
| $\sup A$, $\inf A$ | lowest ceiling the set fits under; highest floor it sits on — need not belong to $A$ | [1.2](lessons/01-02-suprema-infima-completeness.md) |
| $\varepsilon$ | the challenge: an arbitrary positive tolerance handed to you first | [1.2](lessons/01-02-suprema-infima-completeness.md) |
| $N$ | your response: an index past which the promise holds (sequences) | [2.1](lessons/02-01-convergence-epsilon-n.md) |
| $\delta$ | your response: an input radius (functions) | [5.1](lessons/05-01-limits-and-continuity.md) |
| $(a_n)$, $a_n\to L$ | a sequence, and its convergence to $L$ | [2.1](lessons/02-01-convergence-epsilon-n.md) |
| $(a_{n_k})$ | a subsequence — indices $n_1<n_2<\cdots$, order kept, never stopping | [2.3](lessons/02-03-subsequences-bolzano-weierstrass.md) |
| $\limsup a_n$, $\liminf a_n$ | eventual ceiling and eventual floor: largest and smallest subsequential limit | [2.3](lessons/02-03-subsequences-bolzano-weierstrass.md) |
| $s_n=\sum_{k=1}^n a_k$ | the $n$th partial sum — the sequence a series really is | [3.1](lessons/03-01-series-and-cauchy-criterion.md) |
| $V_\varepsilon(x)=(x-\varepsilon,x+\varepsilon)$ | the $\varepsilon$-neighborhood: wiggle room of radius $\varepsilon$ around $x$ | [4.1](lessons/04-01-open-closed-limit-points.md) |
| $A^c=\mathbb{R}\setminus A$ | complement — "closed" is defined through it | [4.1](lessons/04-01-open-closed-limit-points.md) |
| $\overline{A}$ | closure: $A$ with all its escape destinations filled in | [4.1](lessons/04-01-open-closed-limit-points.md) |
| $\{U_\alpha\}_{\alpha\in A}$ | an open cover — a pile of open patches whose union swallows the set | [4.2](lessons/04-02-compactness-heine-borel.md) |
| $f(K)$ | the image $\{f(x):x\in K\}$ | [5.2](lessons/05-02-continuity-on-compact-sets.md) |
| $\varphi$, $\gamma$, $\psi$ | Carathéodory slope factors: $f(x)-f(c)=\varphi(x)(x-c)$ | [6.1](lessons/06-01-the-derivative-rigorously.md) |
| $f^{(k)}$, $P_n$, $R_n$ | $k$th derivative, degree-$n$ Taylor polynomial, its remainder | [6.3](lessons/06-03-taylor-theorem-remainder.md) |
| $\xi$ | the unknown interior point in an MVT / Taylor remainder — existential, never solved for | [6.3](lessons/06-03-taylor-theorem-remainder.md) |
| $P=\{a=x_0<\cdots<x_n=b\}$, $\Delta x_i$ | a partition of $[a,b]$ and the width $x_i-x_{i-1}$ | [7.1](lessons/07-01-darboux-sums-integrability.md) |
| $M_i$, $m_i$ | $\sup$ and $\inf$ of $f$ on the $i$th piece; $M_i-m_i$ is the **oscillation** | [7.1](lessons/07-01-darboux-sums-integrability.md) |
| $U(f,P)$, $L(f,P)$ | upper and lower Darboux sums (tall rectangles / short rectangles) | [7.1](lessons/07-01-darboux-sums-integrability.md) |
| $\overline{\int_a^b}f$, $\underline{\int_a^b}f$ | upper integral $\inf_P U$, lower integral $\sup_P L$ | [7.1](lessons/07-01-darboux-sums-integrability.md) |
| $\lVert g\rVert_\infty=\sup_{x\in D}\lvert g(x)\rvert$ | sup norm — worst-case size over the whole domain | [8.1](lessons/08-01-pointwise-vs-uniform.md) |
| $R$, $c$, $a_n$ | radius of convergence, center, coefficients of a power series | [8.3](lessons/08-03-power-series.md) |

## Definitions

### Supremum and infimum

The lowest ceiling a set fits under, and the highest floor it sits on. Neither
has to be a member; when the sup *is* a member it's the **maximum**.

$$s=\sup A \iff (a\le s\ \forall a\in A)\ \text{ and }\ (u\ \text{an upper bound}\Rightarrow s\le u)$$

*Introduced:* [1.2](lessons/01-02-suprema-infima-completeness.md)

### Completeness axiom

The one property $\mathbb{Q}$ lacks: if a nonempty set of reals has *any*
ceiling, it has a *lowest* one, and that lowest one is a real number.

$$A\neq\varnothing,\ A\subseteq\mathbb{R}\ \text{bounded above}\ \Longrightarrow\ \sup A\in\mathbb{R}\ \text{exists}$$

*Introduced:* [1.2](lessons/01-02-suprema-infima-completeness.md)

### Countable

Listable: you can write the set as an exhaustive, non-repeating list
$a_1,a_2,a_3,\dots$. Formally, finite or in bijection with $\mathbb{N}$.
Everything else is **uncountable**.

*Introduced:* [1.4](lessons/01-04-countable-and-uncountable.md)

### Convergence of a sequence

Name any tolerance, and from some index on the *entire tail* sits inside it.
$N$ is allowed to depend on $\varepsilon$ — that dependence is the whole content.

$$a_n\to L \iff \forall\varepsilon>0\ \exists N\ \forall n>N:\ \lvert a_n-L\rvert<\varepsilon$$

*Introduced:* [2.1](lessons/02-01-convergence-epsilon-n.md)

### Subsequence

Pick out some terms, keep their original order, never stop. Indices must be
strictly increasing, which forces $n_k\ge k$.

$$(a_{n_k})_{k\ge1},\qquad n_1<n_2<n_3<\cdots$$

*Introduced:* [2.3](lessons/02-03-subsequences-bolzano-weierstrass.md)

### limsup and liminf

The eventual ceiling and eventual floor of a bounded sequence — equivalently the
largest and smallest subsequential limit. The gap between them measures how much
the sequence fails to converge.

$$\limsup_{n\to\infty} a_n=\inf_N\sup_{n\ge N}a_n,\qquad \liminf_{n\to\infty} a_n=\sup_N\inf_{n\ge N}a_n$$

*Introduced:* [2.3](lessons/02-03-subsequences-bolzano-weierstrass.md)

### Cauchy sequence

The terms bunch up *with each other* — the limit never appears in the statement,
which is why this is the tool for proving a limit exists before you can name it.

$$\forall\varepsilon>0\ \exists N\ \forall m,n>N:\ \lvert a_m-a_n\rvert<\varepsilon$$

*Introduced:* [2.4](lessons/02-04-cauchy-sequences.md)

### Convergence of a series

A series *is* the sequence of its running totals. No limit of partial sums, no
sum — and the value is that limit.

$$\sum_{k=1}^\infty a_k=S \iff s_n=\sum_{k=1}^n a_k\longrightarrow S$$

*Introduced:* [3.1](lessons/03-01-series-and-cauchy-criterion.md)

### Absolute convergence

Not just the signed total but the total distance travelled is finite. This is the
order-proof kind: rearranging can't change the sum.

$$\sum \lvert a_k\rvert\ \text{converges}\quad\Longrightarrow\quad \sum a_k\ \text{converges}$$

*Introduced:* [3.3](lessons/03-03-absolute-vs-conditional.md)

### Conditional convergence

It converges only because the signs keep cancelling — the sizes alone blow up.
Fragile: the sum is a property of the *order*, not of the set of terms.

$$\sum a_k\ \text{converges but}\ \sum\lvert a_k\rvert\ \text{diverges}$$

*Introduced:* [3.3](lessons/03-03-absolute-vs-conditional.md)

### Open set

Nobody is on the edge: every point has a whole little interval of elbow room
inside the set.

$$\forall x\in A\ \exists\varepsilon>0:\ V_\varepsilon(x)\subseteq A$$

*Introduced:* [4.1](lessons/04-01-open-closed-limit-points.md)

### Closed set

Catches every limit it sneaks up on. Defined as "complement is open," but used
almost always in its sequential form.

$$A\ \text{closed}\iff A^c\ \text{open}\iff A\ \text{contains its limit points}\iff \big(a_n\in A,\ a_n\to x\Rightarrow x\in A\big)$$

*Introduced:* [4.1](lessons/04-01-open-closed-limit-points.md)

### Limit point

A point that $A$ crowds arbitrarily close to — you can't quarantine it with any
interval. It need **not** belong to $A$. A point of $A$ that isn't one is
**isolated**.

$$\forall\varepsilon>0:\ \big(V_\varepsilon(x)\setminus\{x\}\big)\cap A\neq\varnothing \iff \exists a_n\in A\setminus\{x\},\ a_n\to x$$

*Introduced:* [4.1](lessons/04-01-open-closed-limit-points.md)

### Closure

$A$ with all its escape destinations filled in — the smallest closed set
containing $A$.

$$\overline{A}=A\cup\{\text{limit points of } A\}$$

*Introduced:* [4.1](lessons/04-01-open-closed-limit-points.md)

### Compact

Finiteness for infinite sets: however you cover it with open patches, you never
actually needed more than finitely many *of those very patches*.

$$K\subseteq\bigcup_{\alpha\in A}U_\alpha\ (U_\alpha\ \text{open})\ \Longrightarrow\ \exists\ \text{finite } A'\subseteq A\ \text{with}\ K\subseteq\bigcup_{\alpha\in A'}U_\alpha$$

*Introduced:* [4.2](lessons/04-02-compactness-heine-borel.md)

### Sequentially compact

No sequence can escape: every sequence in $K$ has a subsequence converging to a
point still **inside** $K$. On $\mathbb{R}$ this is equivalent to compact.

*Introduced:* [4.2](lessons/04-02-compactness-heine-borel.md)

### Functional limit

The ε–N game replayed on the input axis. The "$0<\lvert x-c\rvert$" excludes
$x=c$ — the limit is about the approach, not the value. Requires $c$ to be a
limit point of the domain.

$$\lim_{x\to c}f(x)=L \iff \forall\varepsilon>0\ \exists\delta>0:\ 0<\lvert x-c\rvert<\delta\Rightarrow\lvert f(x)-L\rvert<\varepsilon$$

*Introduced:* [5.1](lessons/05-01-limits-and-continuity.md)

### Continuity at a point

Where the function is *heading* equals where it *is*. Equivalently, $f$ commutes
with limits there.

$$\forall\varepsilon>0\ \exists\delta>0:\ \lvert x-c\rvert<\delta\Rightarrow\lvert f(x)-f(c)\rvert<\varepsilon \iff \big(x_n\to c\Rightarrow f(x_n)\to f(c)\ \text{for every such } (x_n)\big)$$

*Introduced:* [5.1](lessons/05-01-limits-and-continuity.md)

### Uniform continuity

One $\delta$ handles the whole set — chosen before you know *where* the two
points are. A property of $f$ on a set, never at a point.

$$\forall\varepsilon>0\ \exists\delta>0\ \forall x,y\in D:\ \lvert x-y\rvert<\delta\Rightarrow\lvert f(x)-f(y)\rvert<\varepsilon$$

*Introduced:* [5.2](lessons/05-02-continuity-on-compact-sets.md)

### The derivative

The limit of secant slopes — a **two-sided** limit that either exists or doesn't.
A corner is two unequal one-sided slopes.

$$f'(c)=\lim_{x\to c}\frac{f(x)-f(c)}{x-c}=\lim_{h\to0}\frac{f(c+h)-f(c)}{h}$$

*Introduced:* [6.1](lessons/06-01-the-derivative-rigorously.md)

### Carathéodory's formulation

Package the slope as a continuous *factor* instead of a quotient — no division by
zero anywhere, which is what makes the chain-rule proof one line.

$$f(x)-f(c)=\varphi(x)(x-c),\quad \varphi\ \text{continuous at } c,\quad \varphi(c)=f'(c)$$

*Introduced:* [6.1](lessons/06-01-the-derivative-rigorously.md)

### Taylor polynomial

The unique degree-$n$ polynomial whose value and first $n$ derivatives at $a$
match $f$'s.

$$P_n(x)=\sum_{k=0}^n\frac{f^{(k)}(a)}{k!}(x-a)^k$$

*Introduced:* [6.3](lessons/06-03-taylor-theorem-remainder.md)

### Darboux sums

Trap the area between an always-too-big estimate and an always-too-small one,
built from sup and inf on each piece (which exist because $f$ is **bounded**).

$$U(f,P)=\sum_i M_i\,\Delta x_i,\qquad L(f,P)=\sum_i m_i\,\Delta x_i,\qquad M_i=\sup_{[x_{i-1},x_i]}f,\ m_i=\inf_{[x_{i-1},x_i]}f$$

*Introduced:* [7.1](lessons/07-01-darboux-sums-integrability.md)

### Riemann integrable

The vise closes: the best under-estimate and best over-estimate meet, and the one
number caught between them is the integral.

$$\underline{\int_a^b}f=\sup_P L(f,P)\ =\ \inf_P U(f,P)=\overline{\int_a^b}f\ =:\ \int_a^b f$$

*Introduced:* [7.1](lessons/07-01-darboux-sums-integrability.md)

### Measure zero

The set takes up no room: whatever length budget you're given, you can hide the
whole set under countably many intervals totalling less than that.

$$\forall\varepsilon>0\ \exists\ I_1,I_2,\dots:\ S\subseteq\bigcup_k I_k\ \text{ and }\ \sum_k\lvert I_k\rvert<\varepsilon$$

*Introduced:* [7.2](lessons/07-02-which-functions-integrable.md)

### Pointwise convergence

Freeze one $x$ first, then hunt for the cutoff. Every point may converge on its
own schedule — there is no shared deadline.

$$\forall x\in D\ \forall\varepsilon>0\ \exists N\ \forall n>N:\ \lvert f_n(x)-f(x)\rvert<\varepsilon$$

*Introduced:* [8.1](lessons/08-01-pointwise-vs-uniform.md)

### Uniform convergence

One cutoff for all points at once: past $N$ the entire graph of $f_n$ lies inside
an $\varepsilon$-tube around $f$. The quantifier $\forall x$ moved *inside*.

$$\forall\varepsilon>0\ \exists N\ \forall n>N\ \forall x\in D:\ \lvert f_n(x)-f(x)\rvert<\varepsilon \iff \lVert f_n-f\rVert_\infty\to0$$

*Introduced:* [8.1](lessons/08-01-pointwise-vs-uniform.md)

### Power series and radius of convergence

An infinite polynomial in the displacement from a center, plus the one distance
$R$ inside which it safely adds up (absolutely) and outside which it blows up.

$$\sum_{n=0}^\infty a_n(x-c)^n,\qquad \frac1R=\limsup_{n\to\infty}\lvert a_n\rvert^{1/n}$$

*Introduced:* [8.3](lessons/08-03-power-series.md)

## Formulas and rules

### The quantifier table — every ε-definition side by side

Almost every proof error in this course is a quantifier in the wrong place. Read
left to right: whatever is named first cannot depend on what comes later.

| Statement | Quantifier order | The response may depend on |
|---|---|---|
| $s=\sup A$ | $\forall\varepsilon>0\ \exists a\in A:\ a>s-\varepsilon$ (plus $s$ an upper bound) | $\varepsilon$ |
| $a_n\to L$ | $\forall\varepsilon\ \exists N\ \forall n>N$ | $\varepsilon$ |
| $a_n\not\to L$ | $\exists\varepsilon>0\ \forall N\ \exists n>N:\ \lvert a_n-L\rvert\ge\varepsilon$ | — (one stubborn $\varepsilon$) |
| $(a_n)$ Cauchy | $\forall\varepsilon\ \exists N\ \forall m,n>N$ | $\varepsilon$ |
| $f$ continuous at $c$ | $\forall\varepsilon\ \exists\delta\ \forall x$ | $\varepsilon$ **and** $c$ |
| $f$ uniformly continuous on $D$ | $\forall\varepsilon\ \exists\delta\ \forall x,y\in D$ | $\varepsilon$ only |
| $f_n\to f$ pointwise | $\forall x\ \forall\varepsilon\ \exists N\ \forall n>N$ | $\varepsilon$ **and** $x$ |
| $f_n\to f$ uniformly | $\forall\varepsilon\ \exists N\ \forall n>N\ \forall x$ | $\varepsilon$ only |

To negate: walk the quantifiers left to right, flip each ($\forall\leftrightarrow\exists$),
and negate the final inequality.

*From* [1.2](lessons/01-02-suprema-infima-completeness.md), [2.1](lessons/02-01-convergence-epsilon-n.md), [2.4](lessons/02-04-cauchy-sequences.md), [5.1](lessons/05-01-limits-and-continuity.md), [5.2](lessons/05-02-continuity-on-compact-sets.md), [8.1](lessons/08-01-pointwise-vs-uniform.md)

### What completeness buys you

One axiom, five workhorses. When a proof needs "this thing exists," it is almost
always one of these.

| Tool | Statement | Hypotheses that are load-bearing |
|---|---|---|
| Archimedean property | $\mathbb{N}$ unbounded; $\forall x>0\ \exists n:\ \tfrac1n<x$ | none — but it is what turns every $\varepsilon$ into an $N$ |
| Density of $\mathbb{Q}$ | $x<y\Rightarrow\exists q\in\mathbb{Q}:\ x<q<y$ (and an irrational too) | none |
| Nested Interval Theorem | $[a_1,b_1]\supseteq[a_2,b_2]\supseteq\cdots\Rightarrow\bigcap_n[a_n,b_n]\neq\varnothing$ | intervals **closed** and **bounded**; single point iff lengths $\to0$ |
| Monotone Convergence | increasing + bounded above $\Rightarrow$ converges to $\sup\{a_n\}$ | **both** monotone and bounded |
| Cauchy criterion | $(a_n)$ converges $\iff$ $(a_n)$ Cauchy | the $\Leftarrow$ direction *is* completeness of $\mathbb{R}$ |

*From* [1.3](lessons/01-03-consequences-of-completeness.md), [2.2](lessons/02-02-limit-laws-and-squeeze.md), [2.4](lessons/02-04-cauchy-sequences.md)

### Sequence tools

$$\text{algebra of limits:}\quad a_n\to A,\ b_n\to B\ \Rightarrow\ a_n+b_n\to A+B,\quad a_nb_n\to AB,\quad \frac{a_n}{b_n}\to\frac AB\ (B\neq0)$$

$$\text{squeeze:}\quad a_n\le b_n\le c_n \text{ eventually},\ a_n\to L,\ c_n\to L\ \Rightarrow\ b_n\to L$$

$$\text{Bolzano–Weierstrass:}\quad (a_n)\ \text{bounded}\ \Rightarrow\ \exists\ \text{convergent subsequence}$$

Also standing: convergent $\Rightarrow$ bounded (converse false); every subsequence
of a convergent sequence inherits the limit — so **two subsequences with different
limits proves divergence in one line**; and for bounded sequences,
$a_n\to L\iff\limsup a_n=\liminf a_n=L$.

*Standard $\varepsilon$ tricks:* split the budget ($\varepsilon/2$ per piece,
$\varepsilon/3$ for a three-term triangle chain); add and subtract a middle term;
bound the ugly expression above by something you can invert, then beat *that*.

*From* [2.1](lessons/02-01-convergence-epsilon-n.md), [2.2](lessons/02-02-limit-laws-and-squeeze.md), [2.3](lessons/02-03-subsequences-bolzano-weierstrass.md)

### Series: pick the test from the shape

For non-negative terms, **converges $\iff$ partial sums bounded above**. Every
test below just certifies that ceiling.

| Test | Verdict | Hypotheses |
|---|---|---|
| $n$th-term test | $a_k\not\to0\Rightarrow$ diverges | none — but it can only ever prove **divergence** |
| Cauchy criterion | converges $\iff$ every late block $\left\lvert\sum_{k=m+1}^n a_k\right\rvert<\varepsilon$ | none |
| comparison | $0\le a_k\le b_k$, $\sum b_k$ conv. $\Rightarrow \sum a_k$ conv. | $a_k,b_k\ge0$ |
| limit comparison | $a_k/b_k\to L\in(0,\infty)$ $\Rightarrow$ same fate | $a_k,b_k>0$ |
| integral test | $\sum f(k)$ and $\int_1^\infty f$ share a fate | $f$ positive, **decreasing**, continuous |
| ratio | $L=\lim a_{k+1}/a_k$: $L<1$ conv., $L>1$ div., $L=1$ **silent** | $a_k>0$ |
| root | $L=\lim\sqrt[k]{a_k}$: same trichotomy | $a_k\ge0$ |
| alternating (Leibniz) | $\sum(-1)^{k+1}b_k$ converges | $b_k\ge0$, **decreasing**, $b_k\to0$ |

**Benchmarks:** $\sum 1/k^p$ converges $\iff p>1$; $\sum_{k\ge0}ar^k=\frac{a}{1-r}$
iff $\lvert r\rvert<1$; $\sum\frac{1}{k\ln k}$ diverges but $\sum\frac{1}{k(\ln k)^2}$
converges (only the integral test is sharp enough to see that boundary).

**Which to reach for:** factorials or $c^k$ → ratio · whole term is a $k$th power
→ root · rational in $k$ → limit-compare to $1/k^p$ with $p=\deg(\text{den})-\deg(\text{num})$
· anything with $\ln k$ → integral test.

**Leibniz error bound.** With the monotone hypotheses above,
$\lvert S-S_N\rvert\le b_{N+1}$ — the error is at most the first term you dropped.

**Riemann rearrangement.** Conditionally convergent $\Rightarrow$ some rearrangement
sums to *any* prescribed $L$ (or $\pm\infty$); absolutely convergent $\Rightarrow$
**every** rearrangement gives the same sum.

*From* [3.1](lessons/03-01-series-and-cauchy-criterion.md), [3.2](lessons/03-02-convergence-tests.md), [3.3](lessons/03-03-absolute-vs-conditional.md)

### Topology of the line

$$\text{arbitrary unions of open sets are open};\qquad \textbf{finite}\ \text{intersections of open sets are open}$$
$$\text{arbitrary intersections of closed sets are closed};\qquad \textbf{finite}\ \text{unions of closed sets are closed}$$

The word *finite* is the whole content: $\bigcap_{n\ge1}(-\tfrac1n,\tfrac1n)=\{0\}$
is not open, because a min of infinitely many positive radii need not be positive.

**Heine–Borel.** $K\subseteq\mathbb{R}$ is compact $\iff$ $K$ is closed **and**
bounded $\iff$ $K$ is sequentially compact. (Special to $\mathbb{R}^n$ — the
open-cover definition is the one that generalizes.)

**Standard non-compactness witnesses:** $(0,1)$ fails via $U_n=(\tfrac1n,1)$;
$[0,\infty)$ fails via $V_n=(-1,n)$; a set missing a limit point $p$ fails via
$W_n=\{x:\lvert x-p\rvert>\tfrac1n\}$. A closed subset of a compact set is compact.

*From* [4.1](lessons/04-01-open-closed-limit-points.md), [4.2](lessons/04-02-compactness-heine-borel.md)

### Continuity: theorems and their exact hypotheses

| Theorem | Statement | Hypotheses |
|---|---|---|
| continuous image | $f(K)$ compact | $K$ compact, $f$ continuous on $K$ |
| **EVT** | $\exists c,d$ with $f(d)\le f(x)\le f(c)$ for all $x$ | $f$ continuous, domain **closed and bounded** |
| **Heine–Cantor** | $f$ is uniformly continuous on $K$ | $K$ compact, $f$ continuous on $K$ |
| **IVT** | $f(a)<\gamma<f(b)\Rightarrow\exists c\in(a,b)$ with $f(c)=\gamma$ | $f$ continuous on $[a,b]$ |
| interval image | the continuous image of an interval is an interval | $f$ continuous, domain an interval |

Combined: the continuous image of $[a,b]$ is exactly $[\min f,\max f]$.

**Sign preservation** (the lemma inside the IVT proof): if $f$ is continuous at
$c$ and $f(c)\neq\gamma$, then $f$ stays strictly on $c$'s side of $\gamma$
throughout some $V_\delta(c)$ — take $\varepsilon=\lvert f(c)-\gamma\rvert$.

**Algebra of continuity:** $f\pm g$, $fg$, $f/g$ (where $g(c)\neq0$) and $f\circ g$
are continuous — so every polynomial and rational function is continuous on its
domain with no ε–δ hunt.

*From* [5.1](lessons/05-01-limits-and-continuity.md), [5.2](lessons/05-02-continuity-on-compact-sets.md), [5.3](lessons/05-03-intermediate-value-theorem.md)

### Differentiation: theorems and their exact hypotheses

| Theorem | Statement | Hypotheses |
|---|---|---|
| differentiable $\Rightarrow$ continuous | $f'(c)$ exists $\Rightarrow f$ continuous at $c$ | converse **false** ($\lvert x\rvert$ at $0$) |
| Fermat | $f'(c)=0$ | $c$ an **interior** local extremum, $f'(c)$ exists |
| Rolle | $\exists c\in(a,b)$ with $f'(c)=0$ | cont. on $[a,b]$, diff. on $(a,b)$, $f(a)=f(b)$ |
| **MVT** | $\exists c\in(a,b)$ with $f'(c)=\dfrac{f(b)-f(a)}{b-a}$ | cont. on **closed** $[a,b]$, diff. on **open** $(a,b)$ |
| **Taylor (Lagrange)** | $f(x)=P_n(x)+\dfrac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}$ | $f$ is $n+1$ times differentiable on an open $I\ni a,x$; $\xi$ strictly between $a$ and $x$ |
| Darboux | derivatives have the intermediate-value property | $f'$ exists on the interval — so $f'$ can never *jump* |

**MVT corollaries** (all from $f(y)-f(x)=f'(c)(y-x)$):

$$f'\equiv0\ \text{on } I\Rightarrow f\ \text{constant};\qquad f'>0\Rightarrow f\ \text{strictly increasing};\qquad \lvert f'\rvert\le M\Rightarrow \lvert f(x)-f(y)\rvert\le M\lvert x-y\rvert$$

**Taylor error bound.** If $\lvert f^{(n+1)}\rvert\le M$ between $a$ and $x$, then
$\lvert R_n(x)\rvert\le\frac{M}{(n+1)!}\lvert x-a\rvert^{n+1}$. The Taylor *series*
equals $f$ exactly when $R_n(x)\to0$ — smoothness alone is not enough.

*From* [6.1](lessons/06-01-the-derivative-rigorously.md), [6.2](lessons/06-02-mean-value-theorem.md), [6.3](lessons/06-03-taylor-theorem-remainder.md), [7.3](lessons/07-03-fundamental-theorem-calculus.md)

### The Riemann integral

**Refinement lemma.** $P^*\supseteq P\Rightarrow L(f,P)\le L(f,P^*)\le U(f,P^*)\le U(f,P)$.
Consequently *every* lower sum is $\le$ *every* upper sum (pass through the common
refinement $P_1\cup P_2$).

**ε-criterion (the workhorse).** For bounded $f$ on $[a,b]$:

$$f\ \text{integrable}\iff \forall\varepsilon>0\ \exists P:\ U(f,P)-L(f,P)=\sum_i(M_i-m_i)\Delta x_i<\varepsilon$$

| Class | Integrable? | Why |
|---|---|---|
| continuous on $[a,b]$ | yes | Heine–Cantor gives one $\delta$, so $M_i-m_i<\frac{\varepsilon}{b-a}$ on **every** piece at once |
| monotone on $[a,b]$ | yes | oscillations telescope to $f(b)-f(a)$, times $\Delta x\to0$ |
| bounded, discontinuities of measure zero | yes | **Riemann–Lebesgue criterion** — this is the exact frontier |
| Dirichlet $\mathbf 1_{\mathbb{Q}}$ on $[0,1]$ | **no** | $U\equiv1$, $L\equiv0$ on every partition |

Every countable set has measure zero (cover $c_k$ by an interval of length
$\varepsilon/2^{k+1}$) — so even a dense sprinkle of jumps is forgiven.

*From* [7.1](lessons/07-01-darboux-sums-integrability.md), [7.2](lessons/07-02-which-functions-integrable.md)

### The Fundamental Theorem — what each half needs

$$\textbf{I:}\quad F(x)=\int_a^x f(t)\,dt \ \Rightarrow\ F\ \text{continuous (indeed Lipschitz)};\quad F'(x_0)=f(x_0)\ \text{at each } x_0\ \text{where } f\ \text{is \textbf{continuous}}$$

$$\textbf{II:}\quad \int_a^b f = F(b)-F(a)\quad\text{for \emph{any} } F\ \text{with } F'=f\ \text{on the interval}$$

Part I *manufactures* an antiderivative out of continuity; Part II *consumes* one
you must supply. They are not converses: a function can be integrable with no
antiderivative (a jump — blocked by Darboux), and an antiderivative can exist with
$F'$ not Riemann integrable (Volterra).

$$\text{by parts:}\quad \int_a^b uv'=\big[uv\big]_a^b-\int_a^b u'v \qquad\text{(from the product rule + II)}$$
$$\text{substitution:}\quad \int_a^b f(g(x))g'(x)\,dx=\int_{g(a)}^{g(b)}f(u)\,du \qquad\text{(chain rule + I + II; } g\in C^1,\ f\ \text{continuous)}$$

*From* [7.3](lessons/07-03-fundamental-theorem-calculus.md)

### Which convergence is this — and what it preserves

The single most-consulted table in Module 8. Read the right column as: *this is
the hypothesis you must have earned before you swap.*

| Property of $f_n$ | Passes to $f$ under **pointwise**? | Passes under **uniform**? |
|---|---|---|
| continuity | **no** — $f_n(x)=x^n$ on $[0,1]$ has a discontinuous limit | **yes** (Theorem 1, the $\varepsilon/3$ argument) |
| integrability, and $\int f_n\to\int f$ | **no** — moving spike $f_n=n$ on $(0,\tfrac1n)$ has $\int f_n=1$, $\int f=0$ | **yes**: $\left\lvert\int f_n-\int f\right\rvert\le\lVert f_n-f\rVert_\infty(b-a)$ |
| differentiability, and $f_n'\to f'$ | **no** | **not from uniform $f_n$ either** — $\frac{\sin nx}{\sqrt n}\to0$ uniformly but $f_n'(0)=\sqrt n\to\infty$ |

**Term-by-term differentiation (Theorem 3)** needs: each $f_n$ differentiable,
$f_n(x_0)$ convergent at **one** point, and $f_n'\to g$ **uniformly**. Then
$f_n\to f$ uniformly and $f'=g$. It is the *derivatives* that must converge
uniformly, never the functions.

**Tests for uniformity.**

$$\text{sup-norm test:}\quad f_n\to f\ \text{uniformly on } D\iff \lVert f_n-f\rVert_\infty=\sup_{x\in D}\lvert f_n(x)-f(x)\rvert\to0$$
$$\text{uniformly Cauchy:}\quad \forall\varepsilon\ \exists N\ \forall m,n>N\ \forall x\in D:\ \lvert f_n(x)-f_m(x)\rvert<\varepsilon \iff \text{converges uniformly to some } f$$
$$\text{Weierstrass M-test:}\quad \lvert g_k(x)\rvert\le M_k\ \forall x\in D\ \text{ and }\ \sum_k M_k<\infty\ \Longrightarrow\ \sum_k g_k\ \text{converges uniformly on } D$$

The M-test is the everyday move: it trades a hard functional question for the
numeric tests of [3.2](lessons/03-02-convergence-tests.md).

*From* [8.1](lessons/08-01-pointwise-vs-uniform.md), [8.2](lessons/08-02-what-uniform-convergence-preserves.md)

### Power series

$$\frac1R=\limsup_{n\to\infty}\lvert a_n\rvert^{1/n} \qquad\text{or, when the limit exists,}\qquad R=\lim_{n\to\infty}\left\lvert\frac{a_n}{a_{n+1}}\right\rvert$$

Conventions $\tfrac10=\infty$, $\tfrac1\infty=0$. Converges absolutely for
$\lvert x-c\rvert<R$, diverges for $\lvert x-c\rvert>R$, **endpoints are
case-by-case**.

- Uniform convergence on every **compact** $[c-r,c+r]$ with $r<R$ (M-test with $M_n=\lvert a_n\rvert r^n$) — not on the whole open interval.
- Hence continuous on $(c-R,c+R)$, and differentiable and integrable **term by term**, with the same $R$ each time (since $n^{1/n}\to1$).
- Infinitely differentiable inside $R$, and $a_n=f^{(n)}(c)/n!$ — a power series is its own Taylor series. Such a function is **analytic**.

$$\exp x=\sum_{n\ge0}\frac{x^n}{n!},\quad \sin x=\sum_{n\ge0}\frac{(-1)^nx^{2n+1}}{(2n+1)!},\quad \cos x=\sum_{n\ge0}\frac{(-1)^nx^{2n}}{(2n)!}\qquad (R=\infty\ \text{each})$$

Term-by-term differentiation of the first is a one-line index shift proving
$\exp'=\exp$ — no remainder bound required.

*From* [8.3](lessons/08-03-power-series.md)

### The counterexample library

Half of analysis is knowing which object kills which false claim. Keep these
loaded.

| Object | Kills the claim that… |
|---|---|
| $A=\{q\in\mathbb{Q}:q>0,\ q^2<2\}$ | a bounded set always has a least upper bound *in $\mathbb{Q}$* ([1.1](lessons/01-01-gap-in-the-rationals.md)) |
| $\{1-\tfrac1n\}$ | the sup is a member of the set ([1.2](lessons/01-02-suprema-infima-completeness.md)) |
| $(0,\tfrac1n)$ nested, empty intersection | nested-interval needs only "shrinking" ([1.3](lessons/01-03-consequences-of-completeness.md)) |
| $\mathbb{Q}$ (dense, countable) | dense implies large; countable implies sparse ([1.4](lessons/01-04-countable-and-uncountable.md)) |
| $(-1)^n$ | bounded implies convergent ([2.1](lessons/02-01-convergence-epsilon-n.md)) |
| $a_n=n,\ b_n=-n$ | you may split $\lim(a_n+b_n)$ without checking the pieces ([2.2](lessons/02-02-limit-laws-and-squeeze.md)) |
| $a_n=n$ | Bolzano–Weierstrass needs no boundedness ([2.3](lessons/02-03-subsequences-bolzano-weierstrass.md)) |
| $H_n$ (harmonic), $\sqrt n$ | $\lvert a_{n+1}-a_n\rvert\to0$ implies Cauchy ([2.4](lessons/02-04-cauchy-sequences.md), [3.1](lessons/03-01-series-and-cauchy-criterion.md)) |
| $\sum1/k$ vs $\sum1/k^2$ | the ratio/root test says anything at $L=1$ ([3.2](lessons/03-02-convergence-tests.md)) |
| alternating harmonic | convergence licenses rearrangement ([3.3](lessons/03-03-absolute-vs-conditional.md)) |
| $[0,1)$; $\mathbb{Q}$; $\mathbb{R}$ and $\varnothing$ | "closed" is the negation of "open" ([4.1](lessons/04-01-open-closed-limit-points.md)) |
| $(0,1)$ with $U_n=(\tfrac1n,1)$ | bounded alone gives compactness ([4.2](lessons/04-02-compactness-heine-borel.md)) |
| Dirichlet $\mathbf 1_{\mathbb{Q}}$ | a function must be continuous somewhere; a bounded function must be integrable ([5.1](lessons/05-01-limits-and-continuity.md), [7.1](lessons/07-01-darboux-sums-integrability.md)) |
| $1/x$ on $(0,1)$; $x^2$ on $\mathbb{R}$ | continuous implies uniformly continuous ([5.2](lessons/05-02-continuity-on-compact-sets.md)) |
| $\sin(1/x)$ with $f(0)=0$ | the intermediate-value property implies continuity ([5.3](lessons/05-03-intermediate-value-theorem.md)) |
| $\lvert x\rvert$; $x^2\sin(1/x)$ | continuous implies differentiable; $f'$ exists implies $f'$ continuous ([6.1](lessons/06-01-the-derivative-rigorously.md)) |
| $\lvert x\rvert$ on $[-1,1]$ | one interior corner is harmless to the MVT ([6.2](lessons/06-02-mean-value-theorem.md)) |
| $g(x)=e^{-1/x^2}$, $g(0)=0$ | smooth implies equal to its Taylor series ([6.3](lessons/06-03-taylor-theorem-remainder.md)) |
| Thomae's ruler function | dense discontinuities block integrability ([7.2](lessons/07-02-which-functions-integrable.md)) |
| step function on $[-1,1]$ | every integrable function has an antiderivative ([7.3](lessons/07-03-fundamental-theorem-calculus.md)) |
| $x^n$ on $[0,1]$; traveling tent | pointwise limits preserve continuity or area ([8.1](lessons/08-01-pointwise-vs-uniform.md)) |
| $\sin(nx)/\sqrt n$ | uniform convergence of $f_n$ licenses differentiating term by term ([8.2](lessons/08-02-what-uniform-convergence-preserves.md)) |
| $\sum x^n/(n3^n)$ at $x=\pm3$ | the radius decides the endpoints ([8.3](lessons/08-03-power-series.md)) |

## Assumed, not taught here

Tier 1: this course derives its own machinery but leans on two prerequisites
without re-proving them.

| Fact | Where it's taught |
|---|---|
| Triangle inequality $\lvert a+b\rvert\le\lvert a\rvert+\lvert b\rvert$ (and its reverse form) — used in almost every estimate on this card | [proofs-primer 2.3](../proofs-primer/lessons/02-03-cases-and-wlog.md) |
| Proof by contradiction and contrapositive (the shape of the $\sqrt2\notin\mathbb{Q}$, Heine–Cantor, and B–W-by-contradiction proofs) | [proofs-primer 2.2](../proofs-primer/lessons/02-02-contrapositive-and-contradiction.md) |
| Negating a quantified statement by walking left to right and flipping | [proofs-primer 1.2](../proofs-primer/lessons/01-02-quantifiers-order-negation.md) |
| Induction (bounded/monotone arguments for recursive sequences; iterated Rolle) | [proofs-primer 3.3](../proofs-primer/lessons/03-03-induction.md) |
| Bijection, injective, surjective — the entire cardinality argument runs on these | [proofs-primer 3.2](../proofs-primer/lessons/03-02-functions-injective-surjective-bijective.md) |
| Set operations, complements, De Morgan (used to dualize the open/closed algebra) | [proofs-primer 3.1](../proofs-primer/lessons/03-01-sets-and-element-method.md) |
| Derivatives of $\sin,\cos,e^x,\ln x$ and the differentiation rules as *computations* | [calc-refresher 1.2](../calc-refresher/lessons/01-02-differentiation-rules.md) |
| Antiderivatives, substitution, integration by parts, partial fractions as *techniques* | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md) |
| Improper integrals and the $\int_1^\infty x^{-p}$ $p$-test the integral test transfers | [calc-refresher 2.3](../calc-refresher/lessons/02-03-improper-integrals-and-models.md) |
| Taylor polynomials as "best local fit" (this course adds the certified remainder) | [calc-refresher 1.3](../calc-refresher/lessons/01-03-linearization-and-taylor.md) |
| Geometric and $p$-series as computational facts; the standard series library | [calc-refresher 3.1](../calc-refresher/lessons/03-01-series-convergence-tests.md), [3.2](../calc-refresher/lessons/03-02-power-and-taylor-series.md) |
| Sigma notation, index shifting, telescoping algebra | [precalculus 3.2](../precalculus/lessons/03-02-sequences-and-sigma-notation.md) |

Taken as known with no course behind them: $\left(1+\tfrac1n\right)^n\to e$,
$\sqrt[k]{k}\to1$, and $\lfloor\cdot\rfloor$ / lowest-terms divisibility facts.
Lessons [3.2](lessons/03-02-convergence-tests.md) and [8.3](lessons/08-03-power-series.md)
flag them explicitly as granted.

## Pitfalls

### Suprema and completeness

- $\sup A$ is a **boundary, not a member** — it's a maximum only when it happens to lie in $A$; "does the optimum exist?" is exactly this question. *([1.2](lessons/01-02-suprema-infima-completeness.md), [1.3](lessons/01-03-consequences-of-completeness.md))*
- Only sets that are **nonempty and bounded above** have a sup; "$\sup\mathbb{N}=+\infty$" is shorthand for unbounded, not a number the axiom hands you. *([1.2](lessons/01-02-suprema-infima-completeness.md))*
- The ε-clause must be strict and hold for **every** $\varepsilon>0$; weaken it to one small $\varepsilon$ or to $\ge s-\varepsilon$ and impostors slip through. *([1.2](lessons/01-02-suprema-infima-completeness.md))*
- Dense $\neq$ complete: $\mathbb{Q}$ has a rational between any two reals and still has holes. Dense $\neq$ large either — $\mathbb{Q}$ is countable, hence measure zero. *([1.1](lessons/01-01-gap-in-the-rationals.md), [1.3](lessons/01-03-consequences-of-completeness.md), [1.4](lessons/01-04-countable-and-uncountable.md))*
- Nested intervals need **closed and bounded**, not merely shrinking: $\bigcap(0,\tfrac1n)=\varnothing$ and $\bigcap[n,\infty)=\varnothing$. *([1.3](lessons/01-03-consequences-of-completeness.md))*
- For infinite sets "proper superset" does not mean "larger" — only a bijection decides. And in Cantor's diagonal, avoid the digits $0$ and $9$ or the $0.4999\ldots=0.5000\ldots$ ambiguity bites. *([1.4](lessons/01-04-countable-and-uncountable.md))*

### Sequences

- $N$ is a **function of $\varepsilon$**; one heroic $N$ for all tolerances is not convergence. A finite prefix is invisible — convergence is a property of the tail. *([2.1](lessons/02-01-convergence-epsilon-n.md))*
- Limit laws require **both** limits to exist first: $a_n=n,\ b_n=-n$ sums to $0$ with neither piece convergent. *([2.2](lessons/02-02-limit-laws-and-squeeze.md))*
- Monotone convergence needs monotone **and** bounded; squeeze needs the two jaws to share **the same** limit. *([2.2](lessons/02-02-limit-laws-and-squeeze.md))*
- A subsequence needs **strictly increasing** indices and must run forever — a reordering is not a subsequence. *([2.3](lessons/02-03-subsequences-bolzano-weierstrass.md))*
- Bolzano–Weierstrass needs **boundedness**; $a_n=n$ has no convergent subsequence. *([2.3](lessons/02-03-subsequences-bolzano-weierstrass.md))*
- $\limsup a_n=1$ means "close to $1$ infinitely often, eventually below $1+\varepsilon$" — a repeatable ceiling, not one spike. *([2.3](lessons/02-03-subsequences-bolzano-weierstrass.md))*
- Neighbors closing in ($\lvert a_{n+1}-a_n\rvert\to0$) is **not** Cauchy: $H_n$ and $\sqrt n$ both leak across far-apart pairs. *([2.4](lessons/02-04-cauchy-sequences.md))*
- Cauchy is intrinsic; *converging* depends on whether the limit lives in your number system. That gap is the difference between $\mathbb{Q}$ and $\mathbb{R}$. *([2.4](lessons/02-04-cauchy-sequences.md))*

### Series

- "$a_k\to0$" is the toll to enter, never the ticket: the $n$th-term test can only prove **divergence**. The harmonic series is the standing warning. *([3.1](lessons/03-01-series-and-cauchy-criterion.md))*
- Keep the two sequences apart: the **terms** $(a_k)$ and the **partial sums** $(s_n)$. Only the second converging is "the series converges." *([3.1](lessons/03-01-series-and-cauchy-criterion.md))*
- $\frac{1}{1-r}$ is a limit, valid only for $\lvert r\rvert<1$ — plugging in $r=2$ to "get" $-1$ is meaningless. *([3.1](lessons/03-01-series-and-cauchy-criterion.md))*
- $L=1$ in ratio or root is a verdict of **nothing**, not a close call — that's comparison/integral territory. *([3.2](lessons/03-02-convergence-tests.md))*
- Every test in 3.2 requires $a_k\ge0$ (signs break the monotone partial sums); the integral test additionally requires $f$ **decreasing**. *([3.2](lessons/03-02-convergence-tests.md))*
- Convergence alone does **not** license rearranging — only absolute convergence does. And "$\sum\lvert a_k\rvert$ diverges" tells you nothing about $\sum a_k$; that's the conditional case. *([3.3](lessons/03-03-absolute-vs-conditional.md))*
- Leibniz needs $b_k$ **monotonically** decreasing to $0$, and the error bound $\lvert S-S_N\rvert\le b_{N+1}$ is a consequence of that monotonicity — drop it and both die. *([3.3](lessons/03-03-absolute-vs-conditional.md))*

### Open, closed, compact

- "Closed" is not "not open": $[0,1)$ is neither, $\mathbb{R}$ and $\varnothing$ are both. Check the definition, never the negation. *([4.1](lessons/04-01-open-closed-limit-points.md))*
- A limit point need not belong to the set, and one nearby point proves nothing — **every** $\varepsilon$ must work. *([4.1](lessons/04-01-open-closed-limit-points.md))*
- Open survives arbitrary unions but only **finite** intersections (and closed is the mirror). The word *finite* is the theorem. *([4.1](lessons/04-01-open-closed-limit-points.md))*
- "Closed and bounded" is a **theorem about $\mathbb{R}$** (Heine–Borel), not the definition; memorize the open-cover version. *([4.2](lessons/04-02-compactness-heine-borel.md))*
- The finite subcover must be drawn from the **given** cover — producing some unrelated finite cover proves nothing. And closed *or* bounded alone is never enough. *([4.2](lessons/04-02-compactness-heine-borel.md))*

### Continuity

- The limit existing isn't continuity: the limit and the **value** must match (removable discontinuity otherwise). *([5.1](lessons/05-01-limits-and-continuity.md))*
- The sequential criterion quantifies over **every** $x_n\to c$: one good sequence is worthless, **one bad sequence is decisive** against continuity. *([5.1](lessons/05-01-limits-and-continuity.md))*
- $\delta$ generally depends on $c$ as well as $\varepsilon$; a single $\delta$ for the whole set is the stronger property, and uniform continuity is a property of a **set**, never of a point. *([5.1](lessons/05-01-limits-and-continuity.md), [5.2](lessons/05-02-continuity-on-compact-sets.md))*
- EVT needs **both** continuity and a closed bounded domain — drop either and the sup goes unattained. Non-compactness, not the formula, is what breaks uniform continuity too. *([5.2](lessons/05-02-continuity-on-compact-sets.md))*
- IVT is pure existence: no formula for $c$, no uniqueness, and its converse is false — $\sin(1/x)$ has the intermediate-value property while being discontinuous. *([5.3](lessons/05-03-intermediate-value-theorem.md))*

### Differentiation

- Continuity is genuinely weaker: $\lvert x\rvert$ has a corner, and Weierstrass's function is continuous everywhere and differentiable nowhere. *([6.1](lessons/06-01-the-derivative-rigorously.md))*
- $f'(c)$ is a **two-sided** limit — the one-sided slopes must exist *and agree*. And "$f'$ exists everywhere" does not mean "$f'$ is continuous" ($x^2\sin(1/x)$). *([6.1](lessons/06-01-the-derivative-rigorously.md))*
- The MVT is existence only — never burn effort solving for $c$; bound $f'$ instead. Its hypotheses are asymmetric on purpose: continuity on the **closed** interval, differentiability on the **open** one. *([6.2](lessons/06-02-mean-value-theorem.md))*
- One interior corner kills the MVT ($\lvert x\rvert$ on $[-1,1]$ has chord slope $0$ and no $c$). *([6.2](lessons/06-02-mean-value-theorem.md))*
- $\xi$ in the remainder is existential and moves with both $x$ and $n$ — bound $f^{(n+1)}$ over the interval and let $\xi$ hide inside. The remainder is the **first term you dropped**, order $n+1$. *([6.3](lessons/06-03-taylor-theorem-remainder.md))*
- Infinitely many derivatives does not give convergence to $f$: only $R_n\to0$ does ($e^{-1/x^2}$). *([6.3](lessons/06-03-taylor-theorem-remainder.md))*

### Integration

- Integrability is about the gap closing across **all** refinements; one clever partition only gives bounds $L\le\int\le U$. *([7.1](lessons/07-01-darboux-sums-integrability.md))*
- **Boundedness is a standing hypothesis** — an unbounded $f$ on $[a,b]$ isn't non-integrable, it's outside the definition (that's improper integrals). *([7.1](lessons/07-01-darboux-sums-integrability.md), [7.2](lessons/07-02-which-functions-integrable.md))*
- Darboux sums and tagged Riemann sums give the *same* theory; sup/inf just make the proofs cleaner. *([7.1](lessons/07-01-darboux-sums-integrability.md))*
- Continuity is **sufficient, not necessary**: monotone-with-jumps integrates, and so does Thomae's function with its dense discontinuities. The real frontier is measure zero, far past "finitely many." *([7.2](lessons/07-02-which-functions-integrable.md))*
- FTC II needs an antiderivative valid **everywhere** on the interval; a jump forbids one (Darboux), so an integrable function may have no antiderivative at all. *([7.3](lessons/07-03-fundamental-theorem-calculus.md))*
- FTC I makes $F$ differentiable only where $f$ is **continuous** — at a jump $F$ stays Lipschitz but $F'(x_0)$ fails to exist. And having an antiderivative does not mean it is elementary. *([7.3](lessons/07-03-fundamental-theorem-calculus.md))*

### Convergence of functions

- A pointwise limit of continuous functions can jump, and pointwise convergence gives **no right** to swap a limit past an integral or a derivative. *([8.1](lessons/08-01-pointwise-vs-uniform.md), [8.2](lessons/08-02-what-uniform-convergence-preserves.md))*
- Uniformity is decided by the **single worst point**: $\lVert f_n-f\rVert_\infty\to0$ or bust. A fixed-height bump that merely slides across the domain keeps the sup off $0$. *([8.1](lessons/08-01-pointwise-vs-uniform.md))*
- Uniform convergence is a statement about a **domain**, not a formula — $x/n$ is uniform on $[0,1]$ and only pointwise on $\mathbb{R}$. *([8.1](lessons/08-01-pointwise-vs-uniform.md))*
- Uniform convergence is **sufficient, not necessary**, for the swap; and it never licenses term-by-term differentiation — the **derivatives** must converge uniformly. *([8.2](lessons/08-02-what-uniform-convergence-preserves.md))*
- Inside the radius, everything works; **at** $\lvert x-c\rvert=R$ nothing is promised — test each endpoint by hand. Uniform convergence holds on compact $[c-r,c+r]$ with $r<R$ strictly, not on the whole open interval. *([8.3](lessons/08-03-power-series.md))*
- Convergence *at* every point of $[-1,1]$ (endpoints included) still does not give uniform convergence there; you need the M-test on the closed interval, or Abel's theorem. *([8.3](lessons/08-03-power-series.md))*
