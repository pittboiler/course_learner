# Statistical Learning Theory · Lesson 3.3: Shattering and the VC dimension

> ⏱ ~15 min · Module 3: Statistical learning theory · Builds on: [3.1 (the PAC framework)](03-01-the-pac-framework.md), [3.2 (finite classes and uniform convergence)](03-02-finite-classes-and-uniform-convergence.md) · Unlocks: [3.4 (VC bounds and sample complexity)](03-04-vc-bounds-and-sample-complexity.md)

## Why this matters

[Lesson 3.2](03-02-finite-classes-and-uniform-convergence.md) proved a real theorem — every finite hypothesis class is learnable, at a price of $\ln|\mathcal H|$ — and then walked into a wall. Thresholds, intervals, half-planes, linear models, trees, networks: every class anyone actually uses is infinite. Put $|\mathcal H| = \infty$ into that bound and it says $R(h) \le \hat R_S(h) + \infty$, which is true and useless.

The wall is an artefact of the accounting, not of the problem. The union bound charged you once per *hypothesis*, and a class can have infinitely many hypotheses while having very few distinguishable *behaviours* on the data you hold. There are uncountably many intervals on the line, but on five fixed points they produce only sixteen distinct labellings — so on those five points, the class of all intervals is a class of size sixteen wearing a disguise.

This lesson builds the right currency: count behaviours on $n$ points, not hypotheses. The VC dimension is the one integer that controls that count, and [3.4](03-04-vc-bounds-and-sample-complexity.md) turns it into a guarantee. It is the step that makes Module 3 apply to anything you would ever fit.

## The idea

Fix $n$ points. Each hypothesis stamps a pattern of labels on them — a string in $\{0,1\}^n$. Two hypotheses that stamp the same pattern are *invisible* to a sample sitting on those points: no amount of data there can prefer one to the other. Charging for both, as 3.2 does, is over-billing.

So count patterns instead. For intervals on $\mathbb R$, a pattern is a contiguous run of $1$s (possibly empty), because that is all an interval can select. On five points that is $16$ patterns out of $32$; the missing ones are exactly the patterns with a gap, like $+\,-\,+$. The class is infinite and its behaviour is small.

The extreme case has a name. If a class can stamp **all** $2^n$ patterns on a particular set of $n$ points, it **shatters** that set — and that set is worthless as evidence. Whatever labels nature hands you there, some hypothesis fits perfectly, so a perfect fit tells you nothing about the world. Fitting a shattered set is the formal version of "my model explains anything".

The **VC dimension** is the largest $n$ for which the class can still pull this off. Below it the class is unconstrained; above it, the count of achievable patterns stops doubling — and Sauer's lemma says it collapses from exponential to *polynomial*, with the VC dimension as the exponent. That phase change is the entire reason infinite classes are learnable, and it is the payload of this lesson.

## The formal version

Throughout, $\mathcal H$ is a class of functions $\mathcal X \to \{0,1\}$ and $C = \{c_1,\dots,c_n\} \subseteq \mathcal X$ is a finite set of points.

**Definition (restriction).** The restriction of $\mathcal H$ to $C$ is

$$\mathcal H_C \;=\; \bigl\{\, (h(c_1), h(c_2), \dots, h(c_n)) \;:\; h \in \mathcal H \,\bigr\} \;\subseteq\; \{0,1\}^n .$$

*In words:* the set of label patterns $\mathcal H$ can paint on $C$. Note $|\mathcal H_C| \le 2^n$ always — **finite even when $\mathcal H$ is infinite**. That single observation is what rescues 3.2.

**Definition ([shattering](../reference.md#shattering)).** $\mathcal H$ **shatters** $C$ if $|\mathcal H_C| = 2^n$.

*In words:* every one of the $2^n$ ways of labelling those $n$ points is realised by some hypothesis in the class.

**Definition ([growth function](../reference.md#growth-function)).**

$$\Pi_{\mathcal H}(n) \;=\; \max_{C \subseteq \mathcal X,\ |C| = n} \bigl|\mathcal H_C\bigr| .$$

*In words:* the largest number of patterns $\mathcal H$ can produce on any $n$ points. This is the quantity that will stand in for $|\mathcal H|$ in every bound from here on.

**Definition ([VC dimension](../reference.md#vc-dimension)).**

$$\mathrm{VCdim}(\mathcal H) \;=\; \max\bigl\{\, n \;:\; \Pi_{\mathcal H}(n) = 2^n \,\bigr\},$$

with $\mathrm{VCdim}(\mathcal H) = \infty$ if the set is unbounded.

*In words:* the size of the largest set the class can label completely arbitrarily.

**The two halves of any VC computation are not symmetric, and this is where people slip.** To prove $\mathrm{VCdim}(\mathcal H) = d$ you owe two arguments:

- **Lower bound** ($\ge d$): **exhibit one** set of size $d$ and **all $2^d$** labellings of it. Existential in the set, universal in the labellings.
- **Upper bound** ($< d+1$): for **every** set of size $d+1$, name **one** labelling nobody realises. Universal in the set, existential in the labelling.

The lower bound is a construction; the upper bound is a proof about all configurations. The upper half is always the work.

**Sauer's lemma (Sauer–Shelah).** If $\mathrm{VCdim}(\mathcal H) = d < \infty$, then for every $n$

$$\Pi_{\mathcal H}(n) \;\le\; \sum_{i=0}^{d} \binom{n}{i}, \qquad\text{and for } n \ge d, \quad \sum_{i=0}^{d}\binom{n}{i} \;\le\; (n+1)^d .$$

*In words:* the moment $n$ passes the VC dimension, the number of distinguishable behaviours stops doubling and grows only like a degree-$d$ polynomial. See [Sauer's lemma](../reference.md#sauers-lemma) for the statement in card form.

Read the two sides carefully, because the jump is abrupt rather than gradual. For $n \le d$ the sum equals $2^n$ exactly and the lemma constrains nothing. At $n = d+1$ it drops strictly below $2^n$ and then falls away forever. Bounding a class by its VC dimension buys you nothing until you have more data than the class can shatter, and buys you almost everything shortly after.

The consequence, which [3.4](03-04-vc-bounds-and-sample-complexity.md) will make precise: 3.2's error term was $\sqrt{\ln|\mathcal H| / (2n)}$, infinite here. Replace $\ln|\mathcal H|$ by $\ln \Pi_{\mathcal H}(2n)$, which Sauer caps at $d\ln(2n+1)$, and the term becomes roughly

$$\sqrt{\frac{d\,\ln n}{n}} \;\longrightarrow\; 0 .$$

A logarithm beats a square root of $n$, so the bound goes to zero for any class of finite VC dimension, however large the class is as a set.

**Two traps, both near-universal.**

1. **Shattering asks for *some* set, not *every* set.** Three collinear points in the plane are *not* shattered by half-planes — you cannot label the outer two $+$ and the middle one $-$ — and yet $\mathrm{VCdim}(\text{half-planes}) = 3$, because some other triple is shattered. The definition takes a maximum over $C$; a bad configuration is irrelevant.
2. **VC dimension is not a parameter count.** The class of sine classifiers $\mathbf 1[\sin(\theta x) > 0]$, indexed by the single real parameter $\theta$, has *infinite* VC dimension: $\theta$ sets a frequency, and on points spaced at geometrically shrinking scales, $x_i = 2^{-i}$, you can dial any sign pattern you like. One real number, unbounded capacity. (Checked numerically: those points are shattered for $n$ up to $4$, and the construction continues.) Parameters are a proxy; capacity is the thing.

## Picture

![Two panels. Left: four points at the corners of a square with the two diagonals drawn crossing at a marked point X, the diagonal pair p1 and p3 labelled plus and the pair p2 and p4 labelled minus. Right: three points in a triangle with three separating lines a, b and c drawn through the plane.](assets/03-03-fig1.svg)

The right panel is the lower bound for half-planes, drawn. Three points in general position — not collinear — and a half-plane for each of the eight labellings: line $a$ cuts off the apex, line $b$ cuts off the left point, line $c$ leaves all three on one side, and their three mirror images plus the "none" half-plane finish the set. Eight labellings, eight half-planes, so the triple is shattered and $\mathrm{VCdim} \ge 3$.

The left panel is the obstruction that caps it at $3$, and the argument is one line of convexity. Take four points in convex position, label the two ends of one diagonal $+$ and the two ends of the other $-$, and let $X$ be where the diagonals cross. A half-plane containing $p_1$ and $p_3$ is convex, so it contains the whole segment $p_1p_3$ — including $X$. Its complement is also a half-plane, hence also convex, and it contains $p_2$ and $p_4$, so it contains the segment $p_2p_4$ — including $X$. A point cannot lie in a set and its complement, so this labelling is unrealisable.

Brute force over all $16$ labellings of the square confirms it: half-planes realise exactly $14$, and the two missing are precisely the diagonal splits. The other configuration of four points — one point inside the triangle of the other three — also gives $14$, with the two missing labellings being "inner point alone" and its complement. Both cases fail, which is what the upper bound needs, and that case analysis is P3.

The same result in $\mathbb R^d$: affine separators $\mathbf 1[w^\top x + b \ge 0]$ have $\mathrm{VCdim} = d+1$. The half-plane case $d = 2$ gives $3$, matching the picture. This is the hypothesis class the perceptron searches ([`machine-learning` 2.1](../../machine-learning/lessons/02-01-the-perceptron-and-linear-separability.md)); here it is an object we compute the capacity of rather than an algorithm we run.

## Worked examples

**Example 1 (mechanical): intervals on the line have VC dimension 2.** Let

$$\mathcal H = \bigl\{\, h_{a,b}(x) = \mathbf 1[a \le x \le b] \;:\; a \le b \,\bigr\}.$$

*Lower bound.* Take $C = \{1, 2\}$ and exhibit all four labellings:

| pattern on $(1,2)$ | witness |
|---|---|
| $(0,0)$ | $h_{5,6}$ |
| $(1,0)$ | $h_{0.5,\,1.5}$ |
| $(0,1)$ | $h_{1.5,\,2.5}$ |
| $(1,1)$ | $h_{0,3}$ |

So $|\mathcal H_C| = 4 = 2^2$ and $C$ is shattered: $\mathrm{VCdim} \ge 2$.

*Upper bound.* Let $x_1 < x_2 < x_3$ be **any** three distinct reals — no configuration is special here, which is what makes this direction easy. The labelling $(1,0,1)$ needs an interval $[a,b]$ with $x_1, x_3 \in [a,b]$ and $x_2 \notin [a,b]$. But $a \le x_1 < x_2 < x_3 \le b$ forces $x_2 \in [a,b]$. Contradiction. (If two of the three points coincide, no labelling separating them is realisable either.) So no $3$-set is shattered and $\mathrm{VCdim} = 2$.

*The growth function exactly.* On $n$ distinct points, an interval selects a contiguous run, and there are $n(n+1)/2$ non-empty runs plus the empty pattern:

$$\Pi_{\mathcal H}(n) \;=\; 1 + \frac{n(n+1)}{2}.$$

Check it against Sauer at $d = 2$:

$$\binom{n}{0} + \binom{n}{1} + \binom{n}{2} \;=\; 1 + n + \frac{n(n-1)}{2} \;=\; 1 + \frac{n(n+1)}{2}.$$

**Identical, for every $n$** — intervals attain Sauer's lemma with equality, so the lemma is not merely a bound here, it is the answer. At $n = 3$ both give $7 < 8$, which is the upper bound above, recounted.

The same exercise on thresholds $\mathbf 1[x \ge a]$ gives $\Pi(n) = n+1$ (a pattern is determined by how many of the sorted points are labelled $1$), so $\Pi(1) = 2$ and $\Pi(2) = 3 < 4$: $\mathrm{VCdim} = 1$, again with equality in Sauer. Keep that number; the Flashback needs it.

**Example 2 (why you'd care): watching the exponential die.** Sauer's lemma is only interesting if the collapse is fast. Tabulate the bound $\sum_{i=0}^{d}\binom{n}{i}$ against $2^n$:

| $n$ | 2 | 3 | 4 | 5 | 10 | 20 | 100 |
|---|---|---|---|---|---|---|---|
| $2^n$ | 4 | 8 | 16 | 32 | 1,024 | 1,048,576 | $1.27\times10^{30}$ |
| bound, $d = 2$ | 4 | 7 | 11 | 16 | 56 | 211 | 5,051 |
| bound, $d = 3$ | 4 | 8 | 15 | 26 | 176 | 1,351 | 166,751 |

Read the $d = 2$ row left to right. At $n = 2$ the bound is $4$, exactly $2^n$: no constraint at all, because the class shatters $2$ points and is entitled to everything. At $n = 3$ it is $7$ against $8$ — the first strict gap, and it appears exactly one point past the VC dimension. By $n = 10$ it is $56$ against $1{,}024$, and by $n = 100$ it is $5{,}051$ against a number with thirty-one digits, a ratio of about $2.5 \times 10^{26}$.

That is the whole game. A class of VC dimension $2$ behaves, on a hundred data points, like a finite class of about five thousand hypotheses — and 3.2 already told you what to pay for a finite class of five thousand: $\ln 5051 \approx 8.5$ nats, cheaper than a class of ten thousand explicitly listed rules. The infinite class was never really infinite where it counted.

Contrast the $d=3$ row: same shape, shifted. The gap opens at $n = 4$ instead of $n = 3$, and at every $n$ the bound is larger — a class with one more unit of VC dimension needs proportionally more data to be pinned down. That proportionality is linear, and [3.4](03-04-vc-bounds-and-sample-complexity.md) makes it a theorem: sample complexity grows like $d_{\mathrm{VC}}$, not like $2^{d_{\mathrm{VC}}}$ and not like the size of $\mathcal H$.

## Watch out

- **You might think** a class of VC dimension $d$ shatters every set of size $d$ — **but actually** it need only shatter one. Half-planes have $\mathrm{VCdim} = 3$ and fail on every collinear triple (they realise $6$ of the $8$ labellings there, missing "outer two $+$, middle $-$" and its complement). Because the growth function is a **maximum** over configurations, a class is credited with its best case. Conversely, when you are proving an *upper* bound, one convenient configuration proves nothing — you must handle all of them.
- **You might think** VC dimension counts parameters — **but actually** the two are unrelated in both directions. The one-parameter $\sin(\theta x)$ class has infinite VC dimension; and there are richly parameterised classes with small VC dimension, which is exactly how kernel methods survive an infinite-dimensional feature space ([4.3](04-03-maximum-margin-classifiers.md) replaces $d$ by a margin ratio for precisely this reason). Affine separators in $\mathbb R^d$ happen to have $\mathrm{VCdim} = d+1$; treat that as a coincidence of a very rigid class, not a rule.
- **You might think** infinite VC dimension is a pathology you will never meet — **but actually** the most natural class of all has it: the class of *all* functions $\mathcal X \to \{0,1\}$ on an infinite domain shatters every finite set by definition. That class is the formal content of "assume nothing about the world", and [3.4](03-04-vc-bounds-and-sample-complexity.md) will show it is not PAC learnable — which is [no free lunch](01-04-no-free-lunch-and-inductive-bias.md) restated as a statement about capacity. Inductive bias is not an unfortunate compromise; it is finite VC dimension, and it is the thing being paid for.

## One-liner

> A hypothesis class costs you what it can *do* to $n$ points, not how many hypotheses it contains — and the VC dimension is the exact point past which "what it can do" stops doubling and starts growing like a polynomial.

## Problems

**P1 (🟢)** Intervals on the line,

$$\mathcal H = \bigl\{\, h_{a,b}(x) = \mathbf 1[a \le x \le b] \;:\; a \le b \,\bigr\}.$$

(a) Exhibit a set of two points that $\mathcal H$ shatters, naming a witness hypothesis for each of the four labellings. Use a different pair from the lesson's $\{1,2\}$.
(b) Prove that $\mathcal H$ shatters no set of three points. Be explicit about the quantifier: your argument must cover every triple, not one you chose.
(c) State $\mathrm{VCdim}(\mathcal H)$ and check $\Pi_{\mathcal H}(3)$ against Sauer's bound.

**P2 (🟡)** A class $\mathcal H$ has $\mathrm{VCdim}(\mathcal H) = 3$.

(a) Evaluate the Sauer bound $\sum_{i=0}^{3}\binom{n}{i}$ at $n = 3, 4, 8, 20$ and put each next to $2^n$.
(b) At which $n$ does the bound first fall strictly below $2^n$? Prove that for a class of VC dimension $d$ this always happens at $n = d+1$ — and not before.
(c) In one or two sentences: why is that the interesting point, and what would break in [3.4](03-04-vc-bounds-and-sample-complexity.md)'s generalization bound if the growth function stayed exponential in $n$?

**P3 (🔴)** Half-planes in the plane,

$$\mathcal H = \bigl\{\, x \mapsto \mathbf 1[w^\top x + b \ge 0] \;:\; w \in \mathbb R^2 \setminus \{0\},\; b \in \mathbb R \,\bigr\}.$$

Prove $\mathrm{VCdim}(\mathcal H) = 3$.

(a) *Lower bound.* Give three specific points and, for each of the eight labellings, a specific $(w, b)$ that realises it. Then say precisely why exhibiting *one* such triple suffices, even though other triples of three points are not shattered.
(b) *Upper bound.* Show no set of four points is shattered. Split into the two possible configurations of four points in the plane and handle both; degenerate cases (three or four collinear points, repeated points) must land in one of your cases.

<details>
<summary>Solutions</summary>

**P1**

(a) Take $C = \{0, 10\}$.

| pattern on $(0,10)$ | witness |
|---|---|
| $(0,0)$ | $h_{20,30}$ — the interval misses both points |
| $(1,0)$ | $h_{-1,\,1}$ — contains $0$, not $10$ |
| $(0,1)$ | $h_{9,\,11}$ — contains $10$, not $0$ |
| $(1,1)$ | $h_{-1,\,11}$ — contains both |

All four patterns occur, so $|\mathcal H_C| = 4 = 2^2$ and $C$ is shattered.

(b) Let $C = \{x_1, x_2, x_3\}$ be **any** three points of $\mathbb R$. If two coincide, then every $h \in \mathcal H$ gives them the same label, so a labelling that separates them is unrealisable and $C$ is not shattered. Otherwise relabel so that $x_1 < x_2 < x_3$, and consider the labelling $(1,0,1)$. Realising it needs $a \le b$ with $x_1 \in [a,b]$ and $x_3 \in [a,b]$, hence $a \le x_1$ and $b \ge x_3$. But then $a \le x_1 < x_2 < x_3 \le b$, so $x_2 \in [a,b]$ and $h_{a,b}(x_2) = 1 \ne 0$. No interval realises $(1,0,1)$.

Nothing in the argument used a particular position of the points — only their order — so it covers every triple. Hence $\Pi_{\mathcal H}(3) \le 7 < 8$ and no $3$-set is shattered.

(c) Combining (a) and (b): $\mathrm{VCdim}(\mathcal H) = 2$.

The exact growth function is $\Pi_{\mathcal H}(3) = 7$: the empty pattern plus the six contiguous runs

$$\{x_1\},\ \{x_2\},\ \{x_3\},\ \{x_1,x_2\},\ \{x_2,x_3\},\ \{x_1,x_2,x_3\}.$$

Sauer at $d = 2$, $n = 3$ gives $1+3+3 = 7$. The bound is **tight** — for intervals it is attained at every $n$, by the identity in Example 1.

**P2**

(a) With $d = 3$, the bound is $1 + n + \binom{n}{2} + \binom{n}{3}$:

| $n$ | bound | $2^n$ | ratio |
|---|---|---|---|
| 3 | 8 | 8 | 1 |
| 4 | 15 | 16 | 1.07 |
| 8 | 93 | 256 | 2.75 |
| 20 | 1,351 | 1,048,576 | 776 |

(b) The bound first falls strictly below $2^n$ at $n = 4 = d+1$.

*Proof for general $d$.* Recall the binomial identity $\sum_{i=0}^{n}\binom{n}{i} = 2^n$, so

$$\sum_{i=0}^{d}\binom{n}{i} \;=\; 2^n - \sum_{i=d+1}^{n}\binom{n}{i}.$$

For $n \le d$ the second sum is empty, so the bound equals $2^n$ exactly: the lemma says nothing, correctly, since a class of VC dimension $d$ genuinely shatters some set of size $n \le d$. For $n \ge d+1$ the second sum contains at least the term $\binom{n}{n} = 1 > 0$, so the bound is strictly less than $2^n$ — and the deficit only grows with $n$. Hence the first strict gap is at exactly $n = d+1$.

(c) It is the phase change: at $n = d+1$ the class stops being able to do anything it likes, and $\Pi_{\mathcal H}(n)$ turns from exponential into a degree-$d$ polynomial. That matters because 3.4's bound charges $\ln \Pi_{\mathcal H}(2n)$ against a sample of size $n$: a polynomial growth function makes that term $O(d \ln n)$, so the error term $\sqrt{d\ln n / n} \to 0$ and the bound eventually becomes informative. If $\Pi_{\mathcal H}(n)$ stayed at $2^n$, the numerator would be $\Theta(n)$, the error term would be $\Theta(1)$, and the bound would never shrink no matter how much data you collected — which is the correct verdict, since a class that shatters every sample is not learnable at all.

**P3**

(a) *Lower bound.* Take $q_1 = (0,0)$, $q_2 = (4,0)$, $q_3 = (2,3)$ — not collinear. Writing $x = (x_1, x_2)$, here are eight half-planes, one per labelling (no point lies on any boundary line, so each complement is realised by negating $(w,b)$):

| labelled $1$ | $(w, b)$ | condition |
|---|---|---|
| none | $w = (0,-1),\ b = -1$ | $x_2 \le -1$ |
| $q_1$ | $w = (-1,0),\ b = 1$ | $x_1 \le 1$ |
| $q_2$ | $w = (1,0),\ b = -3$ | $x_1 \ge 3$ |
| $q_3$ | $w = (0,1),\ b = -1.5$ | $x_2 \ge 1.5$ |
| $q_2, q_3$ | $w = (1,0),\ b = -1$ | $x_1 \ge 1$ |
| $q_1, q_3$ | $w = (-1,0),\ b = 3$ | $x_1 \le 3$ |
| $q_1, q_2$ | $w = (0,-1),\ b = 1.5$ | $x_2 \le 1.5$ |
| all three | $w = (0,1),\ b = 1$ | $x_2 \ge -1$ |

All $8 = 2^3$ labellings appear, so $\{q_1,q_2,q_3\}$ is shattered and $\mathrm{VCdim}(\mathcal H) \ge 3$.

Exhibiting one triple suffices because the definition takes $\Pi_{\mathcal H}(3) = \max_{|C|=3}|\mathcal H_C|$ — a **maximum** over configurations. One shattered triple forces $\Pi_{\mathcal H}(3) = 8$. That collinear triples are *not* shattered is irrelevant to the lower bound; it would only matter if the definition demanded every triple, and it does not.

(b) *Upper bound.* Let $C = \{p_1,p_2,p_3,p_4\}$ be any four points of $\mathbb R^2$. First dispose of repeats: if $p_i = p_j$ for $i \ne j$, every hypothesis assigns them the same label, so any labelling separating them is unrealisable and $C$ is not shattered. Assume the four are distinct. Exactly one of two cases holds.

*Case 1: some point lies in the convex hull of the other three.* Relabel so $p_4 \in \mathrm{conv}\{p_1,p_2,p_3\}$. Consider the labelling $p_1 = p_2 = p_3 = 1$, $p_4 = 0$. A half-plane $H = \{x : w^\top x + b \ge 0\}$ is a convex set, so if it contains $p_1, p_2, p_3$ it contains their convex hull, hence $p_4$ — forcing $h(p_4) = 1$. The labelling is unrealisable.

*Case 2: no point lies in the convex hull of the other three* — the four points are in convex position. Relabel them $p_1, p_2, p_3, p_4$ in cyclic order around their hull, so that $p_1p_3$ and $p_2p_4$ are the two diagonals of a convex quadrilateral; these segments intersect at a point $X$. Consider the labelling $p_1 = p_3 = 1$, $p_2 = p_4 = 0$. Suppose some $h \in \mathcal H$ realises it, with $H = \{x : w^\top x + b \ge 0\}$. Then $p_1, p_3 \in H$, and $H$ is convex, so the segment $p_1p_3 \subseteq H$ and in particular $X \in H$. Also $p_2, p_4 \in H^c = \{x : w^\top x + b < 0\}$, which is an open half-plane and therefore also convex, so the segment $p_2p_4 \subseteq H^c$ and in particular $X \in H^c$. But $X$ cannot lie in both $H$ and its complement. Contradiction; the labelling is unrealisable.

The two cases are exhaustive — either some point is in the hull of the others or none is — and degenerate configurations land in Case 1: if $p_1, p_2, p_3$ are collinear in that order then $p_2 \in \mathrm{conv}\{p_1,p_3\} \subseteq \mathrm{conv}\{p_1,p_3,p_4\}$, and if all four are collinear the same applies to an interior one. So no $4$-set is shattered, $\Pi_{\mathcal H}(4) \le 15 < 16$, and $\mathrm{VCdim}(\mathcal H) < 4$.

Combining, $\mathrm{VCdim}(\mathcal H) = 3$. (Brute force agrees on the count: half-planes realise exactly $14$ of the $16$ labellings in *both* configurations — the missing pair being the two diagonal splits in Case 2, and "inner point alone" with its complement in Case 1. Sauer's bound of $15$ is not tight here.)

</details>

## Flashback

**From Lesson 3.1 (the PAC framework):** the threshold class $\mathcal H = \{\,\mathbf 1[x \ge a] : a \in \mathbb R\,\}$ in the realizable case, with a learner that outputs any threshold consistent with the sample. Lesson 3.1 proved that

$$n \;\ge\; \frac{1}{\epsilon}\ln\frac{1}{\delta}$$

samples suffice.

(a) How many samples does that require at $\epsilon = 0.02$, $\delta = 0.10$?
(b) 3.2's general finite-class bound says *nothing whatsoever* about this class. Say why in one sentence, name the quantity that takes over the role of $\ln|\mathcal H|$, and give $\mathrm{VCdim}$ of the threshold class — then check that the VC route predicts the same shape of dependence on $\epsilon$ that 3.1 got directly.

<details>
<summary>Solution</summary>

(a) The bound evaluates to

$$\frac{1}{0.02}\ln\frac{1}{0.10} \;=\; 50 \ln 10 \;=\; 50 \times 2.302585 \;=\; 115.13,$$

so $n = 116$ samples suffice. (For comparison, 3.1's own instance $\epsilon = \delta = 0.05$ gave $n = 60$: tightening $\epsilon$ by a factor of $2.5$ roughly doubled the requirement, while the $\delta$ change was nearly free — $\epsilon$ enters as $1/\epsilon$, $\delta$ only as $\ln(1/\delta)$.)

(b) The threshold class is **infinite** — one hypothesis per real $a$ — so $\ln|\mathcal H| = \infty$ and 3.2's bound degenerates to $R(h) \le \hat R_S(h) + \infty$. Yet 3.1 proved a perfectly good bound for exactly this class by a direct argument, which is the tension this lesson resolves.

The replacement for $\ln|\mathcal H|$ is $\ln \Pi_{\mathcal H}(2n)$, the log of the growth function, which Sauer's lemma caps at $d\ln(2n+1)$ for $d = \mathrm{VCdim}(\mathcal H)$. So the price of a class is not $\ln(\text{number of hypotheses})$ but $d_{\mathrm{VC}}\ln n$ — behaviours, not hypotheses.

For thresholds: on $n$ sorted points $x_1 < \dots < x_n$, the hypothesis $\mathbf 1[x \ge a]$ labels a *suffix* $1$, so a pattern is determined by how many points are labelled $1$: $\Pi_{\mathcal H}(n) = n+1$. That equals $2^n$ at $n = 1$ ($\Pi = 2$) and falls short at $n = 2$ ($\Pi = 3 < 4$), so $\mathrm{VCdim} = 1$.

Consistency check: with $d = 1$ the realizable VC sample complexity scales like $\tilde O(d/\epsilon) = \tilde O(1/\epsilon)$ — linear in $1/\epsilon$, logarithmic in $1/\delta$ — which is exactly the shape of 3.1's $\frac{1}{\epsilon}\ln\frac{1}{\delta}$. The general machinery recovers the hand-built bound, up to the logarithmic factors that generality costs. That agreement is the sanity check [3.4](03-04-vc-bounds-and-sample-complexity.md) is built on.

</details>

## Connections

- **Backward.** This replaces 3.2's $\ln|\mathcal H|$ — a count of hypotheses — with $\ln\Pi_{\mathcal H}(n)$, a count of behaviours; the union bound was over-billing for hypotheses no sample can tell apart. And it gives [1.4](01-04-no-free-lunch-and-inductive-bias.md) a second face: "no free lunch" is the statement that the class of all functions has infinite VC dimension, so inductive bias *is* finite capacity.
- **Forward.** [3.4](03-04-vc-bounds-and-sample-complexity.md) converts $d_{\mathrm{VC}}$ into a sample-complexity theorem — PAC learnable if and only if $d_{\mathrm{VC}} < \infty$ — and this lesson's shattering technique is what you use to compute the input. [3.5](03-05-rademacher-complexity.md) refines the idea into a distribution-aware, real-valued version, where "shatters $S$" becomes the extreme value of a Rademacher average. [4.3](04-03-maximum-margin-classifiers.md) needs the escape hatch: in an infinite-dimensional feature space $d_{\mathrm{VC}}$ is useless, and the margin replaces it. [5.5](05-05-why-does-deep-learning-generalize.md) is the honest sequel — networks with astronomically large VC dimension that generalize anyway.
- **Sideways.** Sauer's lemma is not a probabilistic result at all: it is a theorem in extremal combinatorics about set systems (the "trace" of a family on a ground set), discovered independently three times, and proved by a shifting or compression argument with no distribution in sight. The class it constrains here — affine separators — is the perceptron's hypothesis class from [`machine-learning` 2.1](../../machine-learning/lessons/02-01-the-perceptron-and-linear-separability.md); that course runs the update rule, this one measures what the class can do before any algorithm touches it.
