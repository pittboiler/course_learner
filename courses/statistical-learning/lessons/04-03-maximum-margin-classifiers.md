# Statistical Learning Theory · Lesson 4.3: Maximum-margin classifiers

> ⏱ ~15 min · Module 4: Kernels and margins · Builds on: [4.1 (feature maps and the kernel trick)](04-01-feature-maps-and-the-kernel-trick.md), [3.5 (Rademacher complexity)](03-05-rademacher-complexity.md) · Unlocks: 4.4 (support vector machines), 5.5 (why deep learning generalizes)

## Why this matters

[Lesson 4.1](04-01-feature-maps-and-the-kernel-trick.md) ended on a bill we could not pay. A feature map buys nonlinear boundaries for free computationally, but affine separators in $\mathbb R^D$ have VC dimension $D+1$, so [3.4's](03-04-vc-bounds-and-sample-complexity.md) sample-complexity bound gets worse with every feature you add — and for the RBF kernel, where $D = \infty$, it says nothing at all. Read literally, classical theory has no opinion about the most successful classifier of the 1990s.

There are two ways out and only one of them is honest. The dishonest one is to decide the bound does not apply. The honest one is to notice that **we measured capacity with the wrong ruler**. Dimension counts how many knobs a class has. It does not count how many *distinguishable settings* those knobs have once you insist the classifier keep its distance from the data — and that second count is what generalization actually depends on.

This lesson proves that. Then it does the thing a theory course owes you: it checks the new ruler against the old one on real numbers, and reports that the new ruler is sometimes **worse**.

## The idea

Imagine you must draw the separating boundary with a **fat pencil** of width $2\gamma$, and every data point has to stay off the ink. On a page of radius $R$, how many essentially different strokes are there?

Not many. A fat stroke that clears all the points cannot be nudged very far before it hits one; strokes that differ by less than a pencil-width are the same classifier as far as any point is concerned. So the fat pencil *quantizes* the space of boundaries, and the number of distinguishable strokes is governed by how many pencil-widths fit across the page — roughly $R/\gamma$ — and **not at all by how many dimensions the page has**.

A thin pencil ($\gamma \to 0$) draws arbitrarily many distinguishable strokes: infinite capacity, no guarantee. That is the whole story in one sentence:

> Demanding a margin is not a preference for tidy boundaries — it is a **restriction of the hypothesis class**, and the amount of restriction is set by the data's radius relative to the margin.

Everything below is that sentence with a proof attached.

## The formal version

**The setup, in one paragraph, because it belongs to the sibling.** Data $(x_i, y_i)$ with $y_i \in \{-1,+1\}$, classifier $\operatorname{sign}(w^\top x)$, [geometric margin](../reference.md#geometric-margin) $\gamma_i = y_i w^\top x_i / \lVert w\rVert$ and $\gamma = \min_i \gamma_i$; the canonical scaling sets $\min_i y_i w^\top x_i = 1$, so $\gamma = 1/\lVert w\rVert$ and maximising the margin is the convex QP $\min \tfrac12\lVert w\rVert^2$. All of that — the corridor picture, the scaling, the QP, support vectors — is [`machine-learning` 2.2](../../machine-learning/lessons/02-02-maximum-margin-classifiers.md), and this lesson assumes it. Two conventions for what follows: separators pass **through the origin** (a bias $b$ is handled by appending a constant coordinate to every $x$, which inflates $R$ — see Watch out), and $R = \max_i \lVert x_i\rVert$.

**Theorem (margin capacity).** Let every $x_i$ satisfy $\lVert x_i\rVert \le R$ and let $\mathcal F = \{x \mapsto w^\top x : \lVert w\rVert \le 1\}$. Then no set of more than $R^2/\gamma^2$ points can be **$\gamma$-shattered** by $\mathcal F$ — that is, realising all $2^m$ sign patterns *with margin at least $\gamma$ every time* forces
$$m \ \le\ \frac{R^2}{\gamma^2}.$$

*In words:* a margin-$\gamma$ linear class on radius-$R$ data behaves like a class with about $R^2/\gamma^2$ parameters, **whatever $d$ is**. Compare [3.3](03-03-shattering-and-the-vc-dimension.md), where shattering meant "get the signs right"; here it means "get the signs right with room to spare," and the extra demand is what makes the count finite.

**Proof.** The idea in one sentence: a $\gamma$-shattering witness must correlate strongly with *every* sign pattern, but a bounded vector cannot correlate strongly with a random one, and the tension between those two facts pins $m$.

Suppose $x_1,\dots,x_m$ are $\gamma$-shattered: for every $\sigma \in \{\pm1\}^m$ there is $w_\sigma$ with $\lVert w_\sigma\rVert \le 1$ and $\sigma_i\, w_\sigma^\top x_i \ge \gamma$ for all $i$. Sum over $i$ and apply Cauchy–Schwarz:
$$m\gamma \ \le\ \sum_i \sigma_i\, w_\sigma^\top x_i \ =\ w_\sigma^\top\!\Bigl(\sum_i \sigma_i x_i\Bigr) \ \le\ \Bigl\lVert \sum_i \sigma_i x_i \Bigr\rVert .$$
This holds for every $\sigma$, so it holds in expectation over a uniform random $\sigma$. Now bound that expectation by Jensen and expand, using $\mathbb E[\sigma_i\sigma_j] = 0$ for $i \ne j$ so all cross terms die:
$$\mathbb E_\sigma\Bigl\lVert \sum_i \sigma_i x_i \Bigr\rVert \ \le\ \sqrt{\mathbb E_\sigma\Bigl\lVert \sum_i \sigma_i x_i \Bigr\rVert^2} \ =\ \sqrt{\sum_i \lVert x_i\rVert^2} \ \le\ R\sqrt m .$$
Chaining them gives $m\gamma \le R\sqrt m$, so $\sqrt m \le R/\gamma$ and $m \le R^2/\gamma^2$. $\blacksquare$

**The same three lines, read as a generalization bound.** Those two displays *are* the [empirical Rademacher complexity](../reference.md#rademacher-complexity) computation from [3.5](03-05-rademacher-complexity.md). For $\mathcal F_B = \{x \mapsto w^\top x : \lVert w\rVert \le B\}$, taking the supremum over $w$ in the definition is exactly the Cauchy–Schwarz step made tight, so
$$\hat{\mathfrak R}_S(\mathcal F_B) \ =\ \frac{B}{n}\,\mathbb E_\sigma\Bigl\lVert \sum_i \sigma_i x_i \Bigr\rVert \ \le\ \frac{BR}{\sqrt n}.$$
Set $B = 1$. The **margin loss** $\phi_\gamma(z) = \min(1, \max(0, 1 - z/\gamma))$ is $1/\gamma$-Lipschitz and upper-bounds the 0-1 loss, so Talagrand's contraction lemma costs a factor $1/\gamma$ and 3.5's bound becomes the [margin bound](../reference.md#margin-bound):
$$R(h)\ \le\ \hat R^\gamma_S(h)\ +\ \frac{2R}{\gamma\sqrt n}\ +\ 3\sqrt{\frac{\ln(2/\delta)}{2n}},$$
where $\hat R^\gamma_S(h)$ is the fraction of training points with margin below $\gamma$ — zero on separable data at the achieved margin. (The contraction lemma is stated, not proved, here.)

Now stare at the middle term rewritten:
$$\frac{2R}{\gamma\sqrt n} \ =\ 2\sqrt{\frac{R^2/\gamma^2}{n}} \qquad\text{against a VC bound's}\qquad \sqrt{\frac{d_{\mathrm{VC}}}{n}}.$$
**$R^2/\gamma^2$ sits exactly where the dimension sits, and $d$ appears nowhere.** That is the theorem this lesson exists for.

**Scale invariance.** Replace every $x_i$ by $cx_i$ for $c>0$. Then $R \to cR$ and $\gamma \to c\gamma$, so $R^2/\gamma^2$ is unchanged — as a capacity measure must be, since rescaling your units cannot change how hard a problem is. **$\gamma$ alone is not scale-invariant**, which is why "we achieved a margin of 0.4" is not a claim about anything.

## Picture

![Two separable four-point sets drawn at the same scale, each inside a grey circle of radius R centred at the origin. The left set has a wide shaded margin band and a capacity of 1.11; the right set has a narrow band and a capacity of 5.00, against a VC dimension of 3 in both cases.](assets/04-03-fig1.svg)

Same four-point budget, same $R = \sqrt5$, same dimension $d = 2$. The only thing that differs is how much room the corridor has, and that alone moves the capacity by a factor of $4.5$. Note the right-hand panel: $5.00 > 3$, so on that data the margin bound is **worse** than counting dimensions. Hold that thought.

## Worked examples

**Example 1 (mechanical): read both numbers off the picture.**

*Left panel.* Positives $(1,2), (2,1)$; negatives $(-1,-2), (-2,-1)$. The configuration is symmetric under swapping coordinates and the maximum-margin $w$ is unique, so $w \propto (1,1)$. With $w = (1,1)/\sqrt2$ every point has margin $3/\sqrt2 \approx 2.121$, and $R = \sqrt{1^2+2^2} = \sqrt5$. Hence
$$\frac{R^2}{\gamma^2} = \frac{5}{9/2} = \frac{10}{9} \approx 1.111,$$
against $d_{\mathrm{VC}} = d + 1 = 3$ for the unrestricted class. The margin restriction has cut the effective capacity below three parameters.

*Right panel.* Same positives; negatives moved to $(1,-2), (2,-1)$. Reflecting in the horizontal axis swaps the classes, so $w \propto (0,1)$, giving $\gamma = 1$ and the same $R = \sqrt5$. Now $R^2/\gamma^2 = 5$.

Instantiate the bound at $\delta = 0.05$ on separable data ($\hat R^\gamma_S = 0$):

| capacity $R^2/\gamma^2$ | $n$ | $2\sqrt{(R^2/\gamma^2)/n}$ | $\delta$-term | risk bound |
|---|---|---|---|---|
| $10/9$ (left) | 1,000 | 0.0667 | 0.1288 | **0.196** |
| $5$ (right) | 1,000 | 0.1414 | 0.1288 | **0.270** |
| $5$ (right) | 10,000 | 0.0447 | 0.0407 | **0.085** |

Both are honest, non-vacuous statements about a class of linear separators, obtained without ever asking what $d$ is.

**Example 2 (why you'd care): the RBF lift, where $d = \infty$.**

Take the right-hand panel's four points and replace $x$ by $\phi(x)$ for the Gaussian kernel $K(x,z) = \exp(-\lVert x-z\rVert^2/2s^2)$. Two things are immediate. First, $\lVert\phi(x)\rVert^2 = K(x,x) = 1$, so in feature space $R = 1$ exactly, for any data. Second, $d = \infty$, so [3.4's](03-04-vc-bounds-and-sample-complexity.md) bound is vacuous — there is no number to report.

The margin is still computable, because [4.2's representer theorem](04-02-rkhs-and-the-representer-theorem.md) says the optimal $w$ lies in the span of the four lifted points, so it is a four-variable problem. Solving it:

| bandwidth $s$ | $\gamma$ | $R^2/\gamma^2$ |
|---|---|---|
| 0.25 | 0.5000 | 4.000 |
| 0.5 | 0.5045 | 3.929 |
| 1.0 | **0.5669** | **3.112** |
| 2.0 | 0.4435 | 5.083 |
| 4.0 | 0.2424 | 17.02 |

Finite everywhere, which is the point: **the margin bound is the only non-vacuous statement available in this regime.** But look at the two ends, because they are what makes the result trustworthy rather than magical.

*Large $s$.* All four $\phi(x_i)$ crowd into nearly the same direction, the classes become hard to tell apart, $\gamma$ collapses and the capacity blows up. Smoothing too hard is expensive, and the bound charges you for it.

*Small $s$.* Here $K \to I$: the lifted points become **orthonormal**, and then the margin can be computed in closed form. Writing $w = \sum_i c_i \phi(x_i)$ with $\lVert w\rVert = \lVert c\rVert = 1$, the constraint $y_i c_i \ge \gamma$ for all $i$ forces $1 = \sum_i c_i^2 \ge n\gamma^2$, so
$$\gamma \ \le\ \frac{1}{\sqrt n}, \qquad\text{attained at } c_i = y_i/\sqrt n,$$
which matches the table's $\gamma = 0.5$ at $n = 4$. So $R^2/\gamma^2 = n$, and the bound's complexity term is $2\sqrt{n/n} = 2$ — **vacuous, exactly as it must be.** A narrow-bandwidth RBF separates *any* labelling of any distinct points, so it is a class that fits random labels, and no honest capacity measure may certify it. The margin bound polices itself: you do not get a guarantee for lifting to infinite dimensions, you get one for **achieving a large margin after you lift**, and the second is a real empirical fact you have to earn.

## Watch out

- **You might think** a classifier reporting margin 0.4 is worse than one reporting margin 4 — **but actually** $\gamma$ alone carries no information, because multiplying every feature by 10 multiplies every margin by 10 and changes nothing. Only $R^2/\gamma^2$ is a statement about the problem. Whenever someone quotes a margin without a radius, the number is unusable.
- **You might think** the margin bound is a strict upgrade on dimension counting — **but actually** it is a different accounting that loses about as often as it wins in low dimensions. The right-hand panel has $R^2/\gamma^2 = 5$ against $d_{\mathrm{VC}} = 3$; the two datasets of P3 differ by a factor of ten while $d$ is 2 for both. Use $R^2/\gamma^2$ when $d$ is huge or infinite, which is the case it was invented for, and take **the smaller of the two bounds** the rest of the time — they are both valid, so you are entitled to.
- **You might think** you may fit the data, measure whatever $\gamma$ came out, and plug it in — **but actually** the bound as stated holds for a $\gamma$ fixed *before* seeing $S$; choosing $\gamma$ afterwards is the selection effect of [1.1](01-01-what-is-learning-loss-risk-and-erm.md) all over again. The repair is a union bound over a geometric grid of candidate margins, which costs an additive $\sqrt{\ln\ln(1/\gamma)/n}$ — small, but not zero, and dropping it is the most common way this bound gets misquoted. The same care applies to the bias: appending a constant coordinate $c$ to every $x$ turns $R^2$ into $R^2 + c^2$, so a bias is not free either.

## One-liner

> Insisting on a margin $\gamma$ on data of radius $R$ shrinks the class of linear separators to one of effective size $R^2/\gamma^2$ — the quantity that stands where the dimension stands, which is the only reason infinite-dimensional kernels have a theory at all, and which is also, in two dimensions, frequently worse than just counting the dimensions.

## Problems

**P1 (🟢)** Positives at $(2,4)$ and $(4,2)$; negatives at $(-3,-1)$ and $(-1,-3)$, with separators through the origin.

(a) Give the maximum-margin direction $w$ and the geometric margin $\gamma$. (b) Compute $R$ and $R^2/\gamma^2$. (c) Compare with $d_{\mathrm{VC}} = d+1$ for unrestricted separators in $\mathbb R^2$, and say which bound you would quote. (d) Which points are at the margin?

**P2 (🟡)** Rescaling. Let $S' = \{(cx_i, y_i)\}$ for a constant $c > 0$.

(a) Prove that the maximum-margin direction is unchanged and that $\gamma' = c\gamma$, $R' = cR$, so $R^2/\gamma^2$ is invariant. (b) Verify on the left-hand panel's data at $c = 3$. (c) A colleague reports "our margin improved from 2.1 to 6.4 after we switched the features from metres to feet." Say exactly what they have measured, and what number they should have reported instead.

**P3 (🔴)** Two datasets in $\mathbb R^2$, both with $d = 2$ and separators through the origin:

$$D_1: \ +1 \text{ at } (1,0), \ -1 \text{ at } (-1,0); \qquad D_2: \ +1 \text{ at } (3,1), \ -1 \text{ at } (3,-1).$$

(a) Compute $\gamma$, $R$ and $R^2/\gamma^2$ for each, and confirm the capacities differ by exactly a factor of 10. (b) Say which dataset margin theory calls easier. (c) Do you believe it? Describe the geometric relationship between the two datasets, and say what that tells you to do to your data before quoting a margin bound.

<details>
<summary>Solutions</summary>

**P1** (a) The configuration is invariant under swapping the two coordinates (it maps the positive pair to itself and the negative pair to itself), and the maximum-margin direction is unique because the hard-margin QP is strictly convex in $w$. A unique object fixed by the swap must lie on the swap's fixed line, so $w \propto (1,1)$; take $w = (1,1)/\sqrt2$.

Functional margins under that $w$: positives $(2+4)/\sqrt2 = (4+2)/\sqrt2 = 6/\sqrt2$; negatives $(3+1)/\sqrt2 = (1+3)/\sqrt2 = 4/\sqrt2$. So
$$\gamma \ =\ \frac{4}{\sqrt2} \ =\ 2\sqrt2 \ \approx\ 2.828 .$$

(b) The positives are the farther pair, at norm $\sqrt{20}$ against the negatives' $\sqrt{10}$:
$$R = \sqrt{20} \approx 4.472, \qquad R^2 = 20,$$
so
$$\frac{R^2}{\gamma^2} \ =\ \frac{20}{8} \ =\ 2.5 .$$

(c) $d_{\mathrm{VC}} = 3$. The margin quantity, $2.5$, is the smaller — but only just, and both are valid bounds on the same class, so quote $2.5$ while noticing that the win is negligible. In two dimensions the margin apparatus is not buying you anything you could not get by counting. (It is worth being able to say that out loud: the theory's headline result is nearly useless in the regime where you can draw the picture.)

(d) The two **negatives**, $(-3,-1)$ and $(-1,-3)$, both at margin $2\sqrt2$. The positives sit at $6/\sqrt2 = 3\sqrt2 \approx 4.243$, comfortably outside. This is the asymmetry `machine-learning` 2.2 calls support-vector status, seen from the capacity side: the margin is set by the *closest* class, so the far class contributes nothing to the bound.

**P2** (a) For any $w$, the margins on $S'$ are
$$\gamma_i' \ =\ \frac{y_i\, w^\top (c x_i)}{\lVert w\rVert} \ =\ c\,\frac{y_i\, w^\top x_i}{\lVert w\rVert} \ =\ c\,\gamma_i ,$$
so every candidate $w$ has its objective $\min_i \gamma_i$ multiplied by the same constant $c > 0$. Multiplying an objective by a positive constant does not move its argmax, so the maximiser $w^*$ is unchanged and $\gamma' = c\gamma$. And $R' = \max_i \lVert c x_i\rVert = cR$. Therefore
$$\frac{R'^2}{\gamma'^2} \ =\ \frac{c^2 R^2}{c^2\gamma^2} \ =\ \frac{R^2}{\gamma^2}. \qquad\blacksquare$$

(b) At $c = 3$ the left panel's points become $(3,6), (6,3), (-3,-6), (-6,-3)$. Still $w = (1,1)/\sqrt2$, and $\gamma' = 9/\sqrt2 \approx 6.364 = 3\gamma$; $R' = \sqrt{45} \approx 6.708 = 3\sqrt5$. Capacity $= 45/40.5 = 10/9$, identical to before. ✓

(c) They have measured a **unit conversion**. One metre is about 3.28 feet and $2.1 \times 3.28 \approx 6.9$, so the entire "improvement" is the constant $c$; $R$ grew by the same factor and the classifier is the same function of the same data. The number they should have reported is $R^2/\gamma^2$, which did not move — or, equivalently, the margin after normalising the data to a fixed radius. This is the same disease as reporting a functional margin instead of a geometric one, one level up.

**P3** (a) *$D_1$.* Any unit $w = (\cos\theta, \sin\theta)$ gives margins $\cos\theta$ on $(1,0)$ and $\cos\theta$ on $(-1,0)$ (the sign flips twice), so the minimum is maximised at $\theta = 0$: $w = (1,0)$, $\gamma = 1$. With $R = 1$,
$$\frac{R^2}{\gamma^2} \ =\ \frac{1}{1} \ =\ 1 .$$

*$D_2$.* For $w = (\cos\theta, \sin\theta)$ the two margins are $3\cos\theta + \sin\theta$ and $-(3\cos\theta - \sin\theta) = \sin\theta - 3\cos\theta$, whose minimum is $\sin\theta - 3\lvert\cos\theta\rvert \le \sin\theta \le 1$, with equality iff $\cos\theta = 0$ and $\sin\theta = 1$. So $w = (0,1)$ and $\gamma = 1$. But $R = \lVert(3,1)\rVert = \sqrt{10}$, so
$$\frac{R^2}{\gamma^2} \ =\ \frac{10}{1} \ =\ 10 ,$$
exactly ten times $D_1$'s, with $d = 2$ for both.

(b) $D_1$ — the theory says it needs about a tenth the effective capacity.

(c) **Yes, but the belief is about the hypothesis class, not about the data.** $D_2$ is $D_1$ rotated a quarter turn and then **translated** to $(3,0)$: the two points are still 2 apart, still perfectly separable, still an identical classification problem in every way a practitioner cares about.

What differs is the class. We restricted ourselves to separators **through the origin**, and $D_2$'s points sit far from the origin, so a homogeneous separator must both point the right way *and* thread a boundary through a distant origin — a genuinely more demanding requirement, and the bound is right to charge for it. The inflation is entirely in $R$, which measures distance to the origin, not the spread of the data.

The instruction that falls out: **centre your data before quoting a margin bound.** Subtracting the mean minimises $\max_i \lVert x_i\rVert$ in the way that matters and turns $R$ back into something like a radius of the data cloud rather than a distance to an arbitrary point. If you must keep a bias term, remember from Watch out that appending a constant coordinate $c$ makes $R^2 \to R^2 + c^2$ — so the choice of $c$ is a real modelling decision with a price on it, not a formality.

(The general lesson, worth more than the arithmetic: $R^2/\gamma^2$ is invariant under **scaling** but not under **translation**, and every bound has a symmetry group you should know before you trust it.)

</details>

## Flashback

**From Lesson 4.1 (feature maps and the kernel trick):** two proposed similarity functions on $\mathcal X = \mathbb R$, distinguished by a single sign:

$$K_1(x,z) = \cos(x - z), \qquad K_2(x,z) = \cos(x + z).$$

(a) Decide which is a valid kernel. For the valid one exhibit an explicit feature map $\phi$; for the other exhibit a small point set whose Gram matrix is not positive semidefinite. (b) An RBF kernel makes the feature-space dimension infinite, so $d_{\mathrm{VC}} = d + 1$ is unusable. Name the quantity that takes its place, and give its value for $R$ in an RBF feature space.

<details>
<summary>Solution</summary>

(a) **$K_1$ is a valid kernel.** The angle-subtraction identity does all the work:
$$\cos(x-z) = \cos x \cos z + \sin x \sin z = \langle \phi(x), \phi(z)\rangle, \quad \phi(x) = (\cos x, \sin x).$$
An explicit feature map into $\mathbb R^2$ exists, so every Gram matrix is $\Phi\Phi^\top$ and is automatically PSD. (Geometrically: $\phi$ wraps the line onto the unit circle, and $K_1$ is the cosine of the angle between two points on it.)

**$K_2$ is not.** Take $x_1 = 0$ and $x_2 = \pi/2$. Then
$$G = \begin{pmatrix} \cos 0 & \cos(\pi/2) \\ \cos(\pi/2) & \cos \pi \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & -1\end{pmatrix},$$
and $v^\top G v = -1 < 0$ for $v = (0,1)$. Its eigenvalues are $+1$ and $-1$, so $G$ is not PSD and by Mercer's characterisation $K_2$ is not a kernel.

The one-line reason $K_2$ was doomed: a kernel must satisfy $K(x,x) = \lVert\phi(x)\rVert^2 \ge 0$, and $K_2(x,x) = \cos 2x$ is negative for $x$ near $\pi/2$. **Check the diagonal first** — it is free and it kills most impostors. Note also that $K_1$ depends only on $x - z$ and $K_2$ does not, which is the deeper structural difference: $K_1$ is translation-invariant, and Bochner's theorem says translation-invariant kernels are exactly the Fourier transforms of non-negative measures.

(b) The replacement is $R^2/\gamma^2$, this lesson's margin capacity. In an RBF feature space $K(x,x) = \exp(0) = 1$ for every $x$, so every lifted point has $\lVert\phi(x)\rVert = 1$ and
$$R = 1, \qquad \frac{R^2}{\gamma^2} = \frac{1}{\gamma^2},$$
with $\gamma$ the margin achieved on the lifted data. The capacity is therefore entirely a fact about the margin you managed to achieve — nothing about the kernel's dimension enters, which is the only reason the RBF has a generalization theory at all.

</details>

## Connections

- **Backward:** the proof is [3.5's](03-05-rademacher-complexity.md) Rademacher computation used twice, once to count shattered sets and once to bound risk — and the "restrict the class to get a guarantee" move is [1.4's](01-04-no-free-lunch-and-inductive-bias.md) inductive bias, with a large margin as the bias. The restriction is also literally a norm penalty, exactly the shape of the [ridge penalty in 2.3](02-03-ridge-regression-and-shrinkage.md); [4.4](04-04-support-vector-machines.md) makes that identity exact.
- **Forward:** [4.4](04-04-support-vector-machines.md) shows the SVM's $\tfrac{\lambda}{2}\lVert w\rVert^2$ term *is* the purchase of this margin, so the algorithm and the bound are two views of one object. [5.5](05-05-why-does-deep-learning-generalize.md) reaches for the same escape route — a network with $10^6$ parameters and a huge normalized margin — and finds out how far it goes. Boss problem 4 in [the syllabus](../syllabus.md) makes you evaluate $R^2/\gamma^2$ against $d$ in both regimes on a fresh instance.
- **Sideways:** the quantity $R^2/\gamma^2$ appeared in this library once already, as the **perceptron mistake bound** in [`machine-learning` 2.1](../../machine-learning/lessons/02-01-the-perceptron-and-linear-separability.md) — the same ratio bounding a completely different thing, an algorithm's error count rather than a class's capacity. That is not a coincidence but a clue: both are asking how many times you can move a bounded vector by a fixed amount before you run out of ball, which is the same question [`convex-optimization`](../../convex-optimization/syllabus.md) asks about step counts.
