# Statistical Learning Theory · Lesson 4.1: Feature maps and the kernel trick

> ⏱ ~15 min · Module 4: Kernels and margins · Builds on: [3.4 (VC bounds and sample complexity)](03-04-vc-bounds-and-sample-complexity.md), [`machine-learning` 2.4 (the kernel trick)](../../machine-learning/lessons/02-04-the-kernel-trick.md) · Unlocks: [4.2 (RKHS and the representer theorem)](04-02-rkhs-and-the-representer-theorem.md)

## Why this matters

[`machine-learning` 2.4](../../machine-learning/lessons/02-04-the-kernel-trick.md) shows you the trick and hands you the invoice: the SVM dual touches the data only through inner products, so you may replace them with $K(x_i,x_j)$ and get a curved boundary from a linear solver, at a price of one $n \times n$ Gram matrix. That lesson owns the mechanics and the cost table. Read it; none of it is repeated here.

It leaves two questions standing, and both are ours.

**First: which functions are you allowed to use?** "Replace the inner products with a similarity score" is not a definition. Some similarity scores correspond to no feature space at all, and if you feed one in, the object you are optimising is not an inner product of anything — every theorem in this module silently voids. So we need a test. The good news is that the test comes with a toolkit that lets you certify a kernel **without ever writing down the feature map**, which is the practically useful half of the theory.

**Second: what did the lift cost you?** Module 3 charges for capacity. A richer feature space is a bigger hypothesis class, and [3.4](03-04-vc-bounds-and-sample-complexity.md) says a bigger class needs more data. For the RBF kernel the feature space is infinite-dimensional, and the bound you proved two lessons ago goes to infinity. That is not a footnote — it is the honest state of the theory at this point in the course, and saying exactly what has gone wrong is what sets up 4.3.

## The idea

Start with what a feature map does, in one picture: it does not bend the boundary, it **straightens the data**. Seven points on a line, positive at the two ends and negative in the middle, cannot be split by any threshold. Send each $x$ to the pair $(x, x^2)$ and they can be split by a straight line — and pulling that line back down to the original line gives two cut points instead of one. Same data, same linear machinery, a boundary the original space could not express.

Now the reversal that makes this a subject. The learner never asks for $\phi(x)$; it asks only for $\langle \phi(x), \phi(z)\rangle$. So the feature map is not really the object of study — **the similarity function is**, and $\phi$ is a piece of scaffolding you may or may not be able to build. That invites the obvious question: hand me a symmetric function $K(x,z)$ that you invented because it feels like a good notion of similarity. Is there a $\phi$ behind it?

Remarkably, there is an exact answer, and it is checkable: **yes, exactly when every table of pairwise similarities $K$ produces is positive semidefinite.** Not "usually", not "under regularity conditions" — iff.

The catch is the word *every*. The condition quantifies over all finite sets of points, so no amount of checking sample tables can confirm a kernel; it can only refute one. That is why the working mathematician's method is different: you never verify a kernel from scratch, you **assemble** it. Sums of kernels are kernels, products of kernels are kernels, positive multiples are kernels, and limits of kernels are kernels. Given those four facts you can certify things like the RBF in five lines, with no feature map anywhere in sight — which is a good thing, because the RBF's feature map is infinite-dimensional and nobody wants to write it down.

And that last sentence is also the warning. Infinite-dimensional feature space means an enormous hypothesis class, and Module 3 does not give richness away. Holding both thoughts at once — the lift is free to compute, and it is not free to *justify* — is the whole of this lesson.

## The formal version

### 1. Feature maps and kernels

**Definition.** A [feature map](../reference.md#feature-map) is any function $\phi : \mathcal X \to \mathcal F$ into a real inner-product space $\mathcal F$. A function $K : \mathcal X \times \mathcal X \to \mathbb R$ is a **kernel** if there exists some feature map $\phi$ with

$$K(x,z) \;=\; \langle \phi(x), \phi(z)\rangle \qquad\text{for all } x, z \in \mathcal X .$$

*In words:* $K$ is a kernel when it is secretly an inner product of something. Note the existential quantifier — the definition does not name $\phi$, and the same $K$ has many feature maps of different dimensions.

Given points $x_1,\dots,x_n$, the **Gram matrix** is $G_{ij} = K(x_i,x_j)$.

### 2. The characterisation

**Theorem (positive-definiteness; Mercer, Moore–Aronszajn).** $K$ is a kernel if and only if it is symmetric and every Gram matrix it produces, on every finite set of points, is positive semidefinite.

*In words:* legitimate similarity functions are exactly the ones whose similarity tables are PSD. Nothing else is admissible, and nothing that is admissible is excluded.

*Proof of the easy direction.* Suppose $K(x,z) = \langle \phi(x),\phi(z)\rangle$. Symmetry is immediate. For any points $x_1,\dots,x_n$ and any $c \in \mathbb R^n$,

$$c^\top G\, c \;=\; \sum_{i,j} c_i c_j \langle \phi(x_i), \phi(x_j)\rangle \;=\; \Bigl\lVert \sum_i c_i \phi(x_i) \Bigr\rVert^2 \;\ge\; 0 . \qquad \blacksquare$$

One line, and it is worth seeing why: bilinearity lets you pull the sum inside the inner product, and a squared norm cannot be negative. Positive semidefiniteness is not an extra assumption imposed on kernels — it is what "inner product" *means*, transcribed.

The converse is the deep half: from a PSD $K$ alone you can manufacture a feature space. That construction is the reproducing kernel Hilbert space, and it is [4.2](04-02-rkhs-and-the-representer-theorem.md)'s entire job. Take it on credit for now.

**The quantifier is the trap.** "Every finite set" is a statement about infinitely many matrices. A single PSD Gram matrix on your training sample proves nothing. A single **non**-PSD Gram matrix, on any points you like, disproves everything. The logic is one-sided, which is why the next subsection exists.

### 3. Closure properties: certifying a kernel without a feature map

Let $K_1, K_2$ be kernels on $\mathcal X$, $a > 0$ a constant, $f : \mathcal X \to \mathbb R$ any function, and $\psi : \mathcal Z \to \mathcal X$ any map. Then all of the following are kernels:

| construction | why |
|---|---|
| $aK_1$ | scale the feature map by $\sqrt a$ |
| $K_1 + K_2$ | concatenate the two feature maps |
| $K_1 K_2$ (pointwise product) | tensor the two feature maps |
| $f(x)f(z)$ | the one-dimensional map $\phi = f$ |
| $K_1(\psi(x), \psi(z))$ | compose: use $\phi \circ \psi$ |
| $\lim_m K_m$, pointwise, when it exists | PSD survives limits |
| $p(K_1)$ for a polynomial $p$ with non-negative coefficients; $e^{K_1}$ | sums, products, scalings, limits |

*Proof of the sum.* $c^\top(G_1 + G_2)c = c^\top G_1 c + c^\top G_2 c \ge 0$. Equivalently and more usefully, stack the maps: $\phi(x) = (\phi_1(x), \phi_2(x))$ has $\langle\phi(x),\phi(z)\rangle = K_1 + K_2$.

*Proof of the product.* Write $K_1 = \sum_i \phi_i(x)\phi_i(z)$ and $K_2 = \sum_j \psi_j(x)\psi_j(z)$. Define the doubly-indexed map $\chi_{ij}(x) = \phi_i(x)\psi_j(x)$. Then

$$\sum_{i,j} \chi_{ij}(x)\chi_{ij}(z) \;=\; \Bigl(\sum_i \phi_i(x)\phi_i(z)\Bigr)\Bigl(\sum_j \psi_j(x)\psi_j(z)\Bigr) \;=\; K_1(x,z)\,K_2(x,z).$$

So the product's feature space is the tensor product of the two. (In matrix language this is the **Schur product theorem**: the entrywise product of PSD matrices is PSD.)

*Proof of the limit.* If $c^\top G_m c \ge 0$ for every $m$ and $G_m \to G$ entrywise, then $c^\top G c = \lim_m c^\top G_m c \ge 0$, since a limit of non-negative reals is non-negative.

These seven lines are the [closure toolkit](../reference.md#kernel-closure-properties), and they are how kernels are actually verified in practice. Worked example 2 uses them to certify the RBF.

### 4. What the lift costs: capacity

Here is the bill Module 3 sends. Affine separators in $\mathbb R^D$ have

$$\mathrm{VCdim} \;=\; D + 1 ,$$

so lifting into a $D$-dimensional feature space and running a linear method gives you a class of [VC dimension](../reference.md#vc-dimension) $D+1$, whatever $D$ is.

The one-dimensional example from the Picture makes this concrete. On $\mathbb R$, signed linear rules $\operatorname{sign}(ax+b)$ have VC dimension $2$. Lift by $x \mapsto (x, x^2)$ and you get $\operatorname{sign}(ax^2+bx+c)$, which is affine in $\mathbb R^2$ and so has VC dimension $3$ — and indeed it shatters any three distinct points (all eight labellings are realisable, since every subset of three ordered points is an interval or the complement of one) while failing on four, because a quadratic has at most two roots and cannot produce the alternating pattern.

Now run [3.4](03-04-vc-bounds-and-sample-complexity.md)'s realizable sample-complexity bound

$$n \;\ge\; \frac{4}{\epsilon}\Bigl(d_{\mathrm{VC}}\ln\frac{12}{\epsilon} + \ln\frac{2}{\delta}\Bigr)$$

at $\epsilon = 0.1$, $\delta = 0.05$, for linear separators in the plane against degree-2 separators in the plane:

| class | feature space | $d_{\mathrm{VC}}$ | required $n$ |
|---|---|---|---|
| linear in $\mathbb R^2$ | — | 3 | 723 |
| degree-2 in $\mathbb R^2$ | 5 monomials | 6 | 1,297 |
| degree-2 in $\mathbb R^{100}$ | 5,150 monomials | 5,151 | about $1.0 \times 10^6$ |
| RBF | infinite | $\infty$ | **the bound is vacuous** |

Read the last row honestly. Vacuous does not mean false — the theorem is still true, it simply promises nothing at any sample size. And yet RBF-kernel SVMs work, routinely, on a few hundred points. So one of two things must be wrong: either the bound is the wrong bound, or the class is the wrong class.

It is the second. You never search the whole infinite-dimensional linear class; the SVM's penalty confines the search to a ball of bounded norm, and the right capacity measure for that restricted class is not the dimension but the **margin** — the quantity $R^2/\gamma^2$ of [4.3](04-03-maximum-margin-classifiers.md), which stays finite when $D$ does not. Hold the question open until then; the answer is worth the wait.

## Picture

![Left panel, seven labelled points on a number line from minus three to three with plus labels at the two ends and minus labels at the five middle points, showing that no threshold separates them, and two dashed cut marks at minus 2.55 and 2.55. Right panel, the same points plotted at the pair x and x squared, lying on a dashed parabola, with a horizontal line at height 6.5 separating the two end points from the rest.](assets/04-01-fig1.svg)

The right panel is what the classifier sees. The boundary it finds is genuinely **flat** — a horizontal line at height $6.5$, sitting halfway between the lifted heights $4$ and $9$. Pull it back down to the original line and it becomes the pair of cut points $x = \pm\sqrt{6.5} \approx \pm 2.55$: one flat boundary upstairs, two boundary points downstairs.

Two things to notice, because they are the two halves of this lesson in miniature.

The lift **bought expressiveness**: the original class of thresholds could produce only "everything to the right of a point," and the lifted class can produce any interval and any complement of an interval. That is a strictly larger set of behaviours on the same domain. And it **cost capacity** by exactly the amount the previous section priced: VC dimension went from 2 to 3. A general line in the lifted plane is $ax^2+bx+c$, three free parameters where there were two, and 3.4's bound charges you accordingly.

## Worked examples

**Example 1 (mechanical): certify the polynomial kernel without touching $\phi$.** Claim: for any integer $m \ge 1$ and any constant $c > 0$,

$$K(x,z) \;=\; (x^\top z + c)^m$$

is a kernel on $\mathbb R^d$.

*Step 1.* $K_0(x,z) = x^\top z$ is a kernel: take $\phi = \mathrm{id}$, the identity map. This is the only feature map used anywhere in the argument.

*Step 2.* The constant function $K_c(x,z) = c$ is a kernel: take $f(x) = \sqrt c$ in the $f(x)f(z)$ row, which needs $c > 0$.

*Step 3.* $K_0 + K_c$ is a kernel by the sum row.

*Step 4.* The product of kernels is a kernel, so by induction $(K_0+K_c)^m$ is a kernel. $\blacksquare$

Four lines, no expansion, no binomial coefficients, no $\sqrt 2$ bookkeeping. Compare the alternative: to certify the same $K$ by exhibiting $\phi$ you would enumerate every monomial of degree at most $m$ in $d$ variables and get the multipliers right. At $d = 2$, $m = 2$ that is the six monomials

$$1,\ x_1,\ x_2,\ x_1^2,\ x_1x_2,\ x_2^2 ,$$

which is manageable. At $d = 50$, $m = 3$ it is $23{,}426$ of them, and the closure argument does not get one line longer. That asymmetry is the point of the toolkit.

**Example 2 (why you'd care): build the RBF out of pieces.** The [RBF kernel](../reference.md#rbf-kernel) is

$$K(x,z) \;=\; \exp\bigl(-\gamma\lVert x - z\rVert^2\bigr), \qquad \gamma > 0 .$$

Its feature space is infinite-dimensional, so "exhibit $\phi$" is not an option. Closure properties settle it in five steps.

*Step 1 — split the exponent.* Expand $\lVert x-z\rVert^2 = \lVert x\rVert^2 - 2x^\top z + \lVert z\rVert^2$, so

$$K(x,z) \;=\; \underbrace{e^{-\gamma\lVert x\rVert^2}}_{f(x)} \cdot \underbrace{e^{-\gamma\lVert z\rVert^2}}_{f(z)} \cdot \; e^{\,2\gamma\, x^\top z} .$$

*Step 2.* $x^\top z$ is a kernel, so $2\gamma\, x^\top z$ is one by positive scaling (this is where $\gamma > 0$ is used, and it is the only place).

*Step 3.* Each term of the exponential series,

$$\frac{(2\gamma)^k}{k!}\,(x^\top z)^k ,$$

is a product of $k$ copies of a kernel times a positive constant — a kernel, for every $k \ge 0$.

*Step 4.* Every partial sum $\sum_{k=0}^{m}$ is a kernel by the sum row, and the series converges pointwise, so the limit $e^{2\gamma x^\top z}$ is a kernel.

*Step 5.* Multiply by $f(x)f(z)$, itself a kernel, and the product row finishes it. $\blacksquare$

Two sanity checks, both machine-verified on six random points in $\mathbb R^3$ with $\gamma = 0.7$. The factorisation of Step 1 reproduces the RBF Gram matrix to machine precision, and the truncated series is already PSD by $k \le 2$ (smallest eigenvalue $+0.167$, against $+0.245$ for the full series) — so the argument is not a formality that only works in the limit.

What you have just proved is a statement about an infinite-dimensional space, using only finite-dimensional facts about sums and products. That is the whole reason the closure toolkit earns its place in a theory course: it converts a question about the existence of a feature map — hard, and often unanswerable by construction — into arithmetic.

## Watch out

- **You might think** a kernel is verified by checking that your training set's Gram matrix is positive semidefinite — **but actually** the theorem quantifies over *every* finite point set, so no finite number of PSD tables confirms anything. The logic runs one way only: one non-PSD table refutes a candidate for good, and a thousand PSD tables prove nothing. Certification has to be structural, which is what the closure properties are for.

- **You might think** a vacuous bound means the method does not work — **but actually** it means the *bound* has stopped saying anything, which is a fact about the theorem's hypotheses, not about the algorithm. When the RBF sends $d_{\mathrm{VC}}$ to infinity, the correct reading is "this bound was proved for the unrestricted linear class in the feature space, and that is not the class I am searching." Diagnosing which hypothesis fails is the useful skill; concluding "theory is useless here" is not.

- **You might think** a bigger feature space can only help, since it contains the smaller one and so can only fit better — **but actually** you are moving error between the two terms of [1.1](01-01-what-is-learning-loss-risk-and-erm.md)'s split, not removing it. A richer class strictly lowers the approximation error $\inf_{h\in\mathcal H}R(h)$ and strictly raises the estimation error the sample must pay for. The lift is a trade, and 3.4's bound is the exchange rate.

## One-liner

> A kernel is not a similarity score you like the look of — it is a function whose every similarity table is positive semidefinite, which you certify by assembling it from kernels rather than by exhibiting the feature map; and the space you get for free computationally is not free statistically, because dimension is capacity and the RBF's dimension is infinite.

## Problems

**P1 (🟢)** Decide, in each case, whether the proposed $K$ is a kernel, by writing the Gram matrix and testing it (leading principal minors or eigenvalues, your choice).

(a) $K(x,z) = (x^\top z)^2$ on the three points $(1,0)$, $(0,1)$, $(1,1)$ in $\mathbb R^2$.

(b) $K(x,z) = \max(x,z)$ on the points $1, 2, 3$ in $\mathbb R$. If it fails, exhibit a vector $c$ with $c^\top G c < 0$.

**P2 (🟡)** (a) Prove that the sum of two kernels is a kernel, twice: once from the positive-semidefiniteness definition, and once by exhibiting a feature map.

(b) Prove that $K(x,z) = \lVert x - z\rVert$ is **not** a kernel. Give a two-point counterexample, and then give the one-sentence structural reason that kills every function of this shape at once.

**P3 (🔴)** Degree-2 polynomial separators in the plane: the class of rules $\operatorname{sign}(q(x))$ where $q$ ranges over all real quadratics in $x_1, x_2$.

(a) Write the feature map, give its dimension, and hence the VC dimension of the class.

(b) Instantiate 3.4's realizable bound at $\epsilon = 0.1$, $\delta = 0.05$ and compare with plain linear separators in $\mathbb R^2$.

(c) An RBF kernel sends the feature-space dimension to infinity. State what the bound then says, and explain why practitioners reach for RBF kernels anyway.

<details>
<summary>Solutions</summary>

**P1** (a) With $x_1 = (1,0)$, $x_2 = (0,1)$, $x_3 = (1,1)$, the inner products are $x_1^\top x_2 = 0$, $x_1^\top x_3 = x_2^\top x_3 = 1$, $x_3^\top x_3 = 2$, and squaring gives

$$G = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 4\end{pmatrix}.$$

Leading principal minors: $1$, $1$, and $\det G = 1(4-1) - 0 + 1(0-1) = 2$. All strictly positive, so $G$ is positive **definite** — in particular PSD, consistent with $K$ being a kernel. (Eigenvalues, for the record: $0.438$, $1$, $4.562$.)

This one you can also confirm by construction, since a feature map is known: $\phi(x) = (x_1^2,\ \sqrt2\,x_1x_2,\ x_2^2)$ gives $\phi(x_1) = (1,0,0)$, $\phi(x_2) = (0,0,1)$, $\phi(x_3) = (1,\sqrt2,1)$, whose Gram matrix is exactly $G$. Note this is confirmation, not proof of kernelhood in general — the exhibited $\phi$ is what proves it, not the PSD table.

(b) $K(x,z) = \max(x,z)$ on $1,2,3$:

$$G = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 2 & 3 \\ 3 & 3 & 3\end{pmatrix}.$$

The second leading minor is $\det\begin{pmatrix}1&2\\2&2\end{pmatrix} = 2 - 4 = -2 < 0$, so $G$ is **not** PSD and $\max$ is not a kernel. Explicitly, with $c = (1,-1,0)^\top$,

$$c^\top G c = 1 - 2 - 2 + 2 = -1 < 0 .$$

(Eigenvalues: $-1.178$, $-0.339$, $7.517$ — two of the three are negative.)

Worth the contrast: $\min(x,z)$ on the positive reals **is** a kernel (its Gram matrix here has eigenvalues $0.308$, $0.643$, $5.049$; it is the covariance function of Brownian motion). Two functions of nearly identical form, opposite verdicts — which is exactly why eyeballing a similarity score is not a method.

**P2** (a) *From the definition.* Let $G_1, G_2$ be the Gram matrices of $K_1, K_2$ on any points $x_1,\dots,x_n$. The Gram matrix of $K_1+K_2$ on those points is $G_1+G_2$, and for any $c$,

$$c^\top(G_1+G_2)c \;=\; c^\top G_1 c + c^\top G_2 c \;\ge\; 0 + 0 = 0 .$$

Symmetry is inherited termwise. Since the points were arbitrary, $K_1+K_2$ is PSD on every finite set, hence a kernel.

*By feature map.* Let $K_1 = \langle\phi_1(x),\phi_1(z)\rangle$ and $K_2 = \langle\phi_2(x),\phi_2(z)\rangle$. Define the concatenation $\phi(x) = (\phi_1(x),\ \phi_2(x))$ in the direct sum $\mathcal F_1\oplus\mathcal F_2$. Then

$$\langle\phi(x),\phi(z)\rangle = \langle\phi_1(x),\phi_1(z)\rangle + \langle\phi_2(x),\phi_2(z)\rangle = K_1(x,z)+K_2(x,z).$$

The second proof is the more useful one: it tells you the feature space of a sum is the two spaces side by side, and its dimension is the sum of the dimensions.

(b) *Counterexample.* Take the two points $0$ and $1$ in $\mathbb R$. Then

$$G = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \qquad c = (1,-1)^\top, \qquad c^\top G c = -1 - 1 = -2 < 0 .$$

So $G$ is not PSD and $\lVert x-z\rVert$ is not a kernel. (With three points $0,1,2$ it fails harder: eigenvalues $-2$, $-0.732$, $2.732$.)

*The structural reason.* If $K$ is a kernel then $K(x,x) = \lVert\phi(x)\rVert^2$, so $K(x,x) = 0$ forces $\phi(x) = 0$, and then $K(x,z) = \langle 0, \phi(z)\rangle = 0$ for **every** $z$. In one sentence: **a kernel that vanishes on the diagonal at a point must vanish in that whole row.** Any distance-like function has $K(x,x) = 0$ everywhere and $K(x,z) > 0$ off the diagonal, so it is disqualified at a glance — no matrices needed. The same argument kills $\lVert x-z\rVert^2$ and every other raw distance.

**P3** (a) A general real quadratic in two variables is

$$q(x) = w_1x_1 + w_2x_2 + w_3x_1^2 + w_4x_1x_2 + w_5x_2^2 + b ,$$

so the feature map is $\phi(x) = (x_1,\ x_2,\ x_1^2,\ x_1x_2,\ x_2^2)$, of dimension $D = 5$; the sixth monomial, the constant, is the bias $b$. The class is therefore the affine separators in $\mathbb R^5$, and

$$d_{\mathrm{VC}} \;=\; D + 1 \;=\; 6 .$$

(b) With $\epsilon = 0.1$ and $\delta = 0.05$ we have $\ln(12/\epsilon) = \ln 120 = 4.7875$ and $\ln(2/\delta) = \ln 40 = 3.6889$, so the bound is $n \ge 40\,(d_{\mathrm{VC}}\cdot 4.7875 + 3.6889)$:

| class | $d_{\mathrm{VC}}$ | bound | required $n$ |
|---|---|---|---|
| linear in $\mathbb R^2$ | 3 | $40(14.3625 + 3.6889) = 722.05$ | 723 |
| degree-2 in $\mathbb R^2$ | 6 | $40(28.7249 + 3.6889) = 1296.55$ | 1,297 |

Doubling the VC dimension multiplied the requirement by $1.80$, not by $2$ — the additive $\ln(2/\delta)$ term is what keeps the ratio below the ratio of dimensions. In plain terms: buying the ability to draw conic-section boundaries in the plane costs about 575 extra labelled points at this accuracy and confidence.

(c) With $D = \infty$ the VC dimension is infinite and the right-hand side is infinite: the bound is **vacuous**, promising nothing at any finite $n$. Three things to say, in order.

*It is not false.* The theorem still holds. A vacuous bound is a true statement of the form "$n \ge \infty$ suffices," which is unhelpful rather than wrong.

*It is about the wrong class.* The bound covers the *unrestricted* class of linear separators in the feature space, and no SVM searches that class. The objective carries an $\ell_2$ penalty, which confines the solution to a norm ball; the class actually searched is a small subset of the one the bound prices.

*The right measure is the margin.* For separators of geometric margin at least $\gamma$ on data inside a ball of radius $R$, capacity is governed by $R^2/\gamma^2$ rather than by $D$ — a quantity that stays finite even when $D$ does not, and one you can compute from your actual data. That is [4.3](04-03-maximum-margin-classifiers.md), and it is the reason practitioners are not being reckless: they are relying on a guarantee this lesson has not stated yet. The honest summary of where the course stands right now is that we have a bound, it is the wrong one for this class, and we know which one replaces it.

</details>

## Flashback

**From Lesson 3.4 (VC bounds and sample complexity):** You are fitting affine separators to data in $\mathbb R^2$, in the realizable case, and you want $\epsilon = 0.05$ with $\delta = 0.10$.

(a) Give the required $n$ from the realizable VC bound. (b) A colleague engineers 18 extra features, so the data now lives in $\mathbb R^{20}$. Recompute. (c) You have exactly the number of points from part (a). State what you would have to believe about your problem to proceed with the richer class anyway, and where you would get evidence for it.

<details>
<summary>Solution</summary>

(a) Affine separators in $\mathbb R^2$ have $d_{\mathrm{VC}} = 3$. With $\ln(12/0.05) = \ln 240 = 5.4806$ and $\ln(2/0.10) = \ln 20 = 2.9957$,

$$n \;\ge\; \frac{4}{0.05}\bigl(3(5.4806) + 2.9957\bigr) = 80\,(16.4419 + 2.9957) = 1555.01 ,$$

so $n \ge 1{,}556$.

(b) Affine separators in $\mathbb R^{20}$ have $d_{\mathrm{VC}} = 21$:

$$n \;\ge\; 80\,(21(5.4806) + 2.9957) = 80\,(115.0934 + 2.9957) = 9447.13 ,$$

so $n \ge 9{,}448$ — a factor of $6.08$. Note it is not a factor of $7 = 21/3$: the $\ln(2/\delta)$ term does not scale with the dimension, so the ratio always sits below the ratio of VC dimensions.

(c) You would have to believe **the bound is not describing your situation**, and there are only a few honest ways for that to be true.

- *Your search is confined to a much smaller subclass.* If you regularize — a norm ball, a large margin, an imposed sparsity pattern — then the effective class is not all of the 21-dimensional affine family, and its capacity is smaller than $d_{\mathrm{VC}} = 21$ says. This is precisely the escape route 4.1 needs for kernels and 4.3 makes quantitative.
- *Your distribution is nowhere near the adversarial one.* The bound is distribution-free by construction ([3.1](03-01-the-pac-framework.md)'s first quantifier), so it prices the worst $\mathcal D$ in existence. A benign distribution can be learnable at a small fraction of that $n$; the bound simply is not allowed to notice.
- *You will accept a weaker guarantee.* Loosening $\epsilon$ to $0.1$ or $\delta$ to $0.2$ moves the number a lot — and $\delta$ costs only logarithmically, so trading confidence buys almost nothing while trading accuracy buys a great deal.

Where the evidence comes from: **not from the bound.** A held-out set ([1.3](01-03-overfitting-and-train-validation-test.md)) gives an unbiased, distribution-specific estimate of $R(h)$ for the single $h$ you fixed in advance, with a standard error you can compute from the held-out size alone. That is the number to act on. The VC bound's job is to rank classes by capacity and tell you the *shape* of the dependence — it was never a sample-size calculator.

</details>

## Connections

- **Backward:** the positive-semidefiniteness condition is the quadratic-form condition of [`linalg-refresher` 5.1](../../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md), and the "the algorithm only ever sees inner products" reading is [`linalg-refresher` 4.1](../../linalg-refresher/lessons/04-01-inner-products-orthogonality.md). The capacity accounting is [3.3](03-03-shattering-and-the-vc-dimension.md)'s VC dimension cashed through [3.4](03-04-vc-bounds-and-sample-complexity.md)'s bound, and the reason a richer class is not a free win is [1.1](01-01-what-is-learning-loss-risk-and-erm.md)'s split into approximation and estimation error.
- **Forward:** [4.2](04-02-rkhs-and-the-representer-theorem.md) supplies the converse this lesson took on credit — it builds the feature space that a PSD kernel guarantees, and then shows the minimiser over that infinite-dimensional space collapses to $n$ coefficients. [4.3](04-03-maximum-margin-classifiers.md) answers the capacity question left open here by replacing the dimension with $R^2/\gamma^2$, and [4.4](04-04-support-vector-machines.md) reads the whole apparatus as regularized empirical risk minimisation. Boss problem 4 in the [syllabus](../syllabus.md) is exactly the comparison of those two capacity measures on one dataset.
- **Sideways:** a kernel is precisely a **covariance function** — symmetric, and positive semidefinite on every finite set is exactly the condition a covariance matrix satisfies ([`prob-stat-refresher` 3.1](../../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md)). That is not an analogy: Gaussian-process regression and kernel ridge regression are the same mathematics read twice, once as a prior over functions and once as a penalty, which is [2.5](02-05-regularization-as-a-bayesian-prior.md)'s correspondence appearing in infinite dimensions. On the computational side, [`machine-learning` 2.4](../../machine-learning/lessons/02-04-the-kernel-trick.md) has the cost tables and the practical failure mode of a badly chosen bandwidth.
