# Machine Learning · Lesson 2.4: The kernel trick

> ⏱ ~15 min · Module 2: Classification — margins, trees, and ensembles · Builds on: [2.3 (soft margins and the SVM dual)](02-03-soft-margins-and-the-svm-dual.md), [2.2 (maximum-margin classifiers)](02-02-maximum-margin-classifiers.md) · Unlocks: 2.5 (decision trees), and every nonlinear boundary you draw before Module 4

## Why this matters

Lesson 2.3 left you with a dual whose objective touches the data in exactly one way: through the inner products $x_i^\top x_j$. Nothing else. Not the coordinates, not the dimension, not the individual vectors — only a table of pairwise similarities.

That is a structural accident with enormous consequences. If the algorithm never asks *what* the vectors are, you can lie to it about what they are. Replace every $x_i^\top x_j$ with the inner product of some nonlinear transformation of the data, and the same solver — unchanged, still a convex quadratic program — returns a curved boundary. You get nonlinearity for free.

Except it is not free, and this lesson is mostly about the invoice. The trick buys you a feature space you could never afford to write down, and it charges you an $n \times n$ matrix in exchange. Knowing which of those two bills is the one you can pay is the whole practical skill: it is what decides, on a real dataset, whether you reach for a kernel SVM or for the linear form from 2.3 and a bigger feature engineering budget.

## The idea

Here is the situation the trick is built for. Points near the origin are one class; points in a ring around them are the other. No line separates them — you can check that in your head by looking at the four points where the rings cross the horizontal axis.

Now map every point up into three dimensions with

$$\phi(x_1, x_2) \;=\; \bigl(x_1^2,\ \sqrt2\,x_1x_2,\ x_2^2\bigr).$$

The first and third coordinates sum to $\lVert x\rVert^2$, so in the new space the plane "first coordinate plus third coordinate equals 2.5" is exactly the circle of radius $\sqrt{2.5}$ back in the plane. The rings are now separated by a **flat** boundary, and a linear SVM finds it.

So far this is just feature engineering, and feature engineering scales badly. In $d$ dimensions the analogous quadratic map has $d(d+1)/2$ coordinates; at $d = 100$ that is 5,050 numbers per point, and the cubic version is 171,700. Building $\phi(x)$ explicitly is the expensive part.

The observation that makes it a trick: **you never need $\phi(x)$, only $\phi(x)^\top\phi(z)$.** And for this $\phi$,

$$\phi(x)^\top\phi(z) = x_1^2z_1^2 + 2x_1x_2z_1z_2 + x_2^2z_2^2 = (x^\top z)^2.$$

The left side visits 3 coordinates (5,050 at $d=100$). The right side is one inner product and one squaring — $d + 1$ multiplications, no matter how large the implied feature space is. Same number, wildly different price.

That is the kernel trick in one line: **the dual only ever asks for similarities, so answer with the similarity you wish you had, and skip the space it came from.**

## The formal version

**Definition.** A **kernel** is a real-valued function $K(x,z)$ of two data points for which there exists a feature map $\phi$ with

$$K(x, z) \;=\; \phi(x)^\top \phi(z) \qquad \text{for all } x, z.$$

*In words:* $K$ is a shortcut for "lift both points, then take their inner product" — with the lift never performed.

**Kernelising the dual.** Take 2.3's [dual](../reference.md#svm-dual) and substitute:

$$\max_{\alpha}\ \sum_{i=1}^n \alpha_i - \tfrac12 \sum_{i,j} \alpha_i\alpha_j\, y_iy_j\, K(x_i, x_j)$$

subject to $0 \le \alpha_i \le C$ and $\sum_i \alpha_i y_i = 0$. Not one other symbol changes. The prediction rule kernelises the same way:

$$f(x) \;=\; \sum_{i\,:\,\alpha_i > 0} \alpha_i y_i\, K(x_i, x) \;+\; b .$$

*In words:* classify a new point by comparing it to the support vectors and taking a weighted vote. Note what is **missing**: there is no $w$. In the lifted space $w = \sum_i \alpha_i y_i \phi(x_i)$ lives in a space you refused to build, so you can never write it down — you can only ever evaluate $f$. That is the first thing the trick costs you, and it is why kernel SVMs are not interpretable the way a linear model's weights are.

**Which functions are kernels.** $K$ is a valid kernel exactly when every [Gram matrix](../reference.md#gram-matrix) it produces — the $n\times n$ matrix $K_{ij} = K(x_i,x_j)$ on any finite sample — is symmetric positive semidefinite; this is **Mercer's condition**, and its proof, along with the RKHS machinery that makes the implied feature space precise, belongs to [`statistical-learning`](../../statistical-learning/syllabus.md) (not yet built; stated here where it is used). Positive semidefiniteness is the same property you met as "all eigenvalues $\ge 0$" in [linalg-refresher 5.1](../../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md).

**The two kernels you will actually use.**

*Polynomial,* $K(x,z) = (x^\top z)^p$. Its feature space is the degree-$p$ monomials in $d$ variables, and there are $\binom{d+p-1}{p}$ of them:

| $d$ | $p$ | explicit dimension | cost of $K$ |
|---|---|---|---|
| 100 | 2 | 5,050 | $\Theta(d)$ |
| 100 | 3 | 171,700 | $\Theta(d)$ |
| 1000 | 2 | 500,500 | $\Theta(d)$ |

The right column never moves. That contrast — a feature space growing like $d^p$, evaluated at a price growing like $d$ — is the entire argument for kernels.

*Radial basis function (RBF),* also called Gaussian:

$$K(x,z) \;=\; \exp\!\bigl(-\gamma \lVert x - z\rVert^2\bigr), \qquad \gamma > 0.$$

*In words:* similarity decays with distance, so every training point casts a bump of influence of width about $1/\sqrt{\gamma}$ around itself. Expanding the exponential gives an infinite series of polynomial terms, so the [RBF kernel](../reference.md#rbf-kernel)'s implied feature space is **infinite-dimensional** — a lift you could not have written down at any budget. Two practical facts about $\gamma$: it is an overfitting knob (large $\gamma$ makes every point its own island — see P3), and because it multiplies a squared distance it is meaningless until your features are standardised. Choose it by cross-validation ([4.1](04-01-model-selection-and-cross-validation.md)), jointly with $C$.

**The bill.** Training needs the Gram matrix: $n(n+1)/2$ distinct kernel evaluations, $\Theta(n^2 d)$ multiplications to fill, and $8n^2$ bytes to hold at float64. Counting $1\ \text{GB} = 10^9$ bytes:

| $n$ | Gram matrix |
|---|---|
| $10^4$ | 0.8 GB |
| $3\times10^4$ | 7.2 GB |
| $10^6$ | 8 TB |

Kernels are a method for $n$ in the thousands to low tens of thousands. Past that, the linear form of 2.3 — whose cost is $\Theta(nd)$ per pass and whose memory never depends on $n^2$ — wins outright, and you buy nonlinearity by engineering features by hand instead.

## Picture

![Left, sixteen points on two concentric rings in the plane, with a grey circle of radius about 1.58 drawn between them. Right, the same sixteen points plotted against their squared norm, the inner ring sitting at 1 and the outer at 4, split by a dashed horizontal line at 2.5.](assets/02-04-fig1.svg)

The left panel is the honest picture of the data and the right panel is the honest picture of what the classifier sees. The lift does not bend the boundary; it straightens the data, and the curve you see on the left is a **flat** boundary in the lifted space, pulled back.

Worth noticing: the right panel needs only one of the lifted coordinates' combinations, $\lVert x\rVert^2$. The other direction, $\sqrt2\,x_1x_2$, is carried along unused. A kernel gives you a whole space and lets the optimiser decide which parts of it matter — that generosity is what makes kernels powerful and also what makes them overfit.

## Worked examples

**Example 1 (mechanical): the rings, end to end.** Inner ring at radius 1, labelled $-1$; outer ring at radius 2, labelled $+1$.

*Step 1 — no line works.* Look only at the four points where the rings meet the horizontal axis: $(\pm 2, 0)$ labelled $+1$, $(\pm 1, 0)$ labelled $-1$. A separator $(w, b)$ would need $-2w_1 + b > 0$ and $2w_1 + b > 0$; adding these gives $2b > 0$. It would also need $-(-w_1+b) > 0$ and $-(w_1+b) > 0$; adding *those* gives $-2b > 0$. Contradiction. (Same summing move as the impossibility argument in [2.1](02-01-the-perceptron-and-linear-separability.md) — it is the standard way to kill a linear model on a symmetric instance.)

*Step 2 — the lift.* Under $\phi$, every point's first and third coordinates sum to $\lVert x\rVert^2$: that is 1 for the inner ring and 4 for the outer, whatever the angle. Try $w = (a, 0, a)$, $b$, so that $w^\top\phi(x) = a\lVert x\rVert^2$. The canonical margin constraints of [2.2](02-02-maximum-margin-classifiers.md) are tight on both classes:

$$4a + b = 1, \qquad -(a + b) = 1 \;\Longrightarrow\; a = \tfrac23,\ b = -\tfrac53 .$$

Then $\lVert w\rVert = \tfrac23\sqrt2$ and the geometric margin is $1/\lVert w\rVert = 3\sqrt2/4 \approx 1.061$ — measured in the lifted space, not in the plane. The boundary $w^\top\phi(x) + b = 0$ is $\lVert x\rVert^2 = 2.5$: the circle of radius $\sqrt{2.5} \approx 1.581$, which is the grey circle in the figure.

*Step 3 — do it without $\phi$.* The solver never needed any of Step 2's coordinates. Feeding it $K(x,z) = (x^\top z)^2$ produces the same boundary, and the arithmetic per entry is one 2-dimensional dot product and one squaring.

**Example 2 (why you'd care): the two invoices, side by side.** You have $n$ points in $d = 1000$ dimensions and you want quadratic interactions.

*Explicit route.* $\phi$ has $\binom{1001}{2} = 500{,}500$ coordinates. At float64 that is 4.0 MB **per point**; 20,000 points is 80 GB of design matrix before you fit anything.

*Kernel route.* Store the raw data — 8 kB per point, 160 MB for all 20,000 — and a Gram matrix of $20{,}000^2 \times 8 = 3.2$ GB. Filling it costs

$$\Theta(n^2 d) \;=\; 4\times10^{8} \times 1000 \;=\; 4\times10^{11}$$

multiply–adds, which is one large matrix–matrix product. Total: about 3.4 GB. The explicit route needed 80 GB.

*Now change one number.* Keep $d = 1000$ but take $n = 10^6$. The explicit route needs 4 TB; the kernel route needs 8 TB and is now the *worse* of the two. Meanwhile the linear SVM of 2.3 needs $nd \times 8 = 8$ GB and runs.

This is the design rule the lesson exists to install:

> **The explicit feature map's bill scales with $d$; the kernel's bill scales with $n$. Pick the one whose bill you can pay, and if neither, go linear.**

## Watch out

- **You might think** $(x^\top z)^p$ and $(x^\top z + c)^p$ are the same kernel with a cosmetic difference — **but actually** the constant changes the feature space. The homogeneous form gives you monomials of degree *exactly* $p$; the inhomogeneous form gives you all monomials of degree *up to* $p$, including the linear and constant terms. At $d = 100$, $p = 3$ that is 171,700 features versus 176,851, and only the second contains the plain linear model as a special case. If your boundary is mostly linear with a little curvature, the homogeneous kernel cannot express it.
- **You might think** the kernel trick makes the problem cheaper — **but actually** it moves the cost from $d$ to $n$, and $n$ is usually the number you cannot control. Prediction shows this most sharply: a linear SVM predicts in $\Theta(d)$ by storing one vector $w$, while a kernel SVM must evaluate $K$ against every support vector, so prediction costs $\Theta(n_{\text{SV}} \cdot d)$ — and on noisy data $n_{\text{SV}}$ grows roughly with $n$. A model that trains fine can still be too slow to serve.
- **You might think** any sensible similarity score can be dropped in as $K$ — **but actually** Mercer's condition is a real constraint, and violating it is not a stylistic error. If the Gram matrix has a negative eigenvalue, the dual objective is no longer concave, the QP no longer has a unique maximum, and your solver's convergence guarantee ([convex-optimization 3.3](../../convex-optimization/lessons/03-03-kkt-conditions.md)) evaporates. Handcrafted "similarity kernels" are the usual way people walk into this.

## One-liner

> The dual sees the data only as a table of inner products, so replace the table and you get a nonlinear boundary in a feature space you never build — paying for it not in dimension but in an $n \times n$ matrix, which is why kernels rule at $n$ in the thousands and lose at $n$ in the millions.

## Problems

**P1 (🟢)** Let $x = (2, 3)$ and $z = (1, -2)$, with the quadratic map $\phi(x) = (x_1^2, \sqrt2\,x_1x_2, x_2^2)$.

(a) Compute $K(x,z) = (x^\top z)^2$ directly. (b) Compute $\phi(x)$ and $\phi(z)$, then their inner product, and confirm the two agree. (c) Count the **multiplications** each route used on this instance. (d) Repeat the count symbolically at $d = 100$ (still $p = 2$), and give the ratio.

**P2 (🟡)** A genomics problem: $d = 500$ features, and you want the homogeneous cubic kernel $K(x,z) = (x^\top z)^3$.

(a) How many coordinates does the explicit feature map have, and how many bytes is one lifted point at float64? (b) What does the kernel route store per point, and how many multiplications does one kernel evaluation cost? (c) You have 32 GB of RAM. Above what $n$ does the Gram matrix alone stop fitting? (d) In one sentence, say what actually breaks first in practice — before you hit that $n$.

**P3 (🔴)** A colleague reports that with an RBF kernel, raising $\gamma$ from 0.1 to 500 drove training error to exactly zero, and concludes the model is solved.

(a) Say what happens to the Gram matrix as $\gamma$ grows large, and use it to explain why zero training error was guaranteed rather than earned. (b) Predict the test error, and be specific about what the classifier outputs at a new point. (c) Name the diagnostic from [4.3](04-03-diagnosing-models-in-practice.md) that settles it, and say what shape you expect to see.

<details>
<summary>Solutions</summary>

**P1** (a) $x^\top z = (2)(1) + (3)(-2) = 2 - 6 = -4$, so $K(x,z) = (-4)^2 = \mathbf{16}$.

(b) $\phi(x) = (4,\ 6\sqrt2,\ 9)$ and $\phi(z) = (1,\ -2\sqrt2,\ 4)$. Their inner product:

$$4\cdot 1 \;+\; (6\sqrt2)(-2\sqrt2) \;+\; 9\cdot 4 \;=\; 4 - 24 + 36 \;=\; \mathbf{16}. \ \checkmark$$

The middle term is where the $\sqrt2$ earns its keep: $\sqrt2\cdot\sqrt2 = 2$ is exactly the binomial coefficient in

$$(x^\top z)^2 = x_1^2z_1^2 + 2x_1x_2z_1z_2 + x_2^2z_2^2 .$$

(c) *Kernel route:* $x_1z_1$, $x_2z_2$, then one squaring — **3 multiplications**. *Explicit route:* building $\phi(x)$ costs $x_1\!\cdot\!x_1$, $x_1\!\cdot\!x_2$, $\sqrt2\cdot(x_1x_2)$, $x_2\!\cdot\!x_2$ = 4; the same 4 for $\phi(z)$; then a 3-dimensional inner product = 3. **11 multiplications.**

(d) At $d = 100$ the map has $\binom{101}{2} = 5{,}050$ coordinates: 100 squares and 4,950 cross terms. Building one lifted point costs 5,050 products plus 4,950 $\sqrt2$-scalings = 10,000; two points = 20,000; the inner product = 5,050. Total **25,050** against the kernel's $d + 1 = \mathbf{101}$ — a ratio of about **248**, and it grows linearly in $d$ (explicit is $\Theta(d^2)$, kernel is $\Theta(d)$; see [algorithms 1.1](../../algorithms/lessons/01-01-asymptotic-notation.md)).

**P2** (a) The homogeneous cubic map has

$$\binom{d + p - 1}{p} = \binom{502}{3} = \frac{502\cdot 501\cdot 500}{6} = 20{,}958{,}500$$

coordinates. At 8 bytes each that is $167{,}668{,}000$ bytes, or **168 MB per point**. (One thousand patients would be 168 GB of design matrix — the explicit route is dead on arrival.)

(b) The kernel route stores the raw point: 500 float64s = **4 kB**, a factor of about 41,900 smaller. One evaluation of $(x^\top z)^3$ costs $d = 500$ multiplications for the dot product plus 2 for the cubing = **502**.

(c) The Gram matrix is $8n^2$ bytes, so $8n^2 \le 32\times10^9$ gives $n \le \sqrt{4\times10^9} = \mathbf{63{,}245}$. (If you count 32 GiB $= 2^{35}$ bytes instead, the bound is exactly $n \le 2^{16} = 65{,}536$ — the two conventions differ by 4 percent, which never changes a decision.)

(d) **Working memory, well before that.** The Gram matrix is what the solver *reads*; it also needs the kernel cache, the gradient, and the $\alpha$ vector, and any solver that copies or factorises a submatrix needs room for that too — so a Gram matrix that exactly fills RAM leaves nothing to run in. Build time bites too: at $n = 63{,}245$, filling the matrix is $\Theta(n^2d) \approx 2\times10^{12}$ multiply–adds. In practice kernel SVMs are comfortable to about $n \sim 10^4$ and painful past $n \sim 5\times10^4$.

**P3** (a) The Gram entry $K(x_i,x_j)$ equals 1 on the diagonal for every $\gamma$, and off the diagonal it collapses toward 0 as $\gamma$ grows. With features standardised, distinct points sit at least a few tenths apart; at $\gamma = 500$ and a separation of 0.2 the entry is $e^{-20} \approx 2\times10^{-9}$. So the Gram matrix tends to the identity — which is positive **definite** for *any* labelling of the points. Zero training error is therefore not evidence about the data: the model has enough freedom to interpolate an arbitrary assignment of labels, and would have hit zero on labels drawn by coin flip. It was guaranteed by the kernel, not earned by the signal.

(b) Test error at roughly the **majority-class rate** — no better than the trivial classifier. The mechanism is visible in the prediction rule: at a new point $x$ that is not nearly identical to a training point, every $K(x_i, x)$ is about $10^{-9}$, so

$$f(x) = \sum_i \alpha_i y_i K(x_i,x) + b \;\approx\; b,$$

a constant. The classifier outputs one fixed label everywhere except in vanishing bubbles around the training points. Each point has become its own island, exactly as the formal section warned.

(c) The **learning curve** from [4.3](04-03-diagnosing-models-in-practice.md): training error pinned at zero while validation error sits high and flat, with a large gap that more data barely closes — the textbook high-variance signature. Its companion is the **validation curve** over $\gamma$, which will show the familiar U: error falling as $\gamma$ rises to a sweet spot, then climbing as the bumps shrink below the spacing of the data. The fix is to select $\gamma$ (jointly with $C$) by cross-validation ([4.1](04-01-model-selection-and-cross-validation.md)) rather than by training error, which for this model carries no information at all.

</details>

## Flashback

**From Lesson 2.3 (Soft margins and the SVM dual):** A soft-margin SVM on six points has returned $w = (0.5,\ 0.5)$, $b = -1$, with cost $C = 2$. The data:

| point | $x$ | $y$ |
|---|---|---|
| $P_1$ | $(4, 2)$ | $+1$ |
| $P_2$ | $(3, 1)$ | $+1$ |
| $P_3$ | $(2, 1)$ | $+1$ |
| $P_4$ | $(0, 0)$ | $-1$ |
| $P_5$ | $(3, 2)$ | $-1$ |
| $P_6$ | $(-2, 0)$ | $-1$ |

(a) Compute $y_i f(x_i)$ and the [hinge loss](../reference.md#hinge-loss) for each point, and sort every point into the three complementary-slackness classes. (b) Give the objective value $\tfrac12\lVert w\rVert^2 + C\sum_i \xi_i$. (c) Now kernelise: which of the three classes still appears in the prediction rule $f(x) = \sum_i \alpha_i y_i K(x_i, x) + b$, and what does that buy you?

<details>
<summary>Solution</summary>

(a) With $f(x) = 0.5x_1 + 0.5x_2 - 1$:

| point | $f(x_i)$ | $y_i f(x_i)$ | hinge | $\xi_i$ | class |
|---|---|---|---|---|---|
| $P_1$ | $2$ | $2$ | 0 | 0 | $\alpha_i = 0$ — outside the margin, irrelevant |
| $P_2$ | $1$ | $1$ | 0 | 0 | $0 < \alpha_i < C$ — **on** the margin |
| $P_3$ | $0.5$ | $0.5$ | 0.5 | 0.5 | $\alpha_i = C$ — inside the margin, correct side |
| $P_4$ | $-1$ | $1$ | 0 | 0 | $0 < \alpha_i < C$ — **on** the margin |
| $P_5$ | $1.5$ | $-1.5$ | 2.5 | 2.5 | $\alpha_i = C$ — misclassified |
| $P_6$ | $-2$ | $2$ | 0 | 0 | $\alpha_i = 0$ — outside the margin, irrelevant |

Note $P_5$: it sits on the positive side of the boundary but is labelled $-1$, so its functional margin is negative and its hinge loss exceeds 1. Any point with hinge $> 1$ is misclassified; that is the cleanest way to read the column.

(b) $\sum_i \xi_i = 0.5 + 2.5 = 3$, and the norm term is

$$\tfrac12\lVert w\rVert^2 = \tfrac12(0.25 + 0.25) = 0.25 .$$

Objective $= 0.25 + 2\cdot 3 = \mathbf{6.25}$.

(c) Only the points with $\alpha_i > 0$ survive — the on-margin class and the inside/misclassified class, here $P_2, P_3, P_4, P_5$. $P_1$ and $P_6$ have $\alpha_i = 0$ and drop out of the sum entirely; the fitted model has never really looked at them, and deleting them from the training set would change nothing.

**What it buys you:** sparsity is the reason a kernel SVM is usable at all. Without it, prediction would require evaluating $K$ against all $n$ training points; with it, the cost is $\Theta(n_{\text{SV}}\cdot d)$, and on clean, well-separated data $n_{\text{SV}}$ is a small fraction of $n$ — here 4 of 6, but on real problems often a few percent. It is also the reason a low $C$ hurts twice: it lets more points into the $\alpha_i = C$ class, which both softens the boundary *and* fattens the model you have to serve.

</details>

## Connections

- **Backward:** the trick is entirely parasitic on [2.3's](02-03-soft-margins-and-the-svm-dual.md) dual — take the primal instead and there is nothing to kernelise, because the primal needs $w$ in coordinates. The KKT conditions that produced the dual, and the complementary slackness that sorts the support vectors, are [convex-optimization 3.3](../../convex-optimization/lessons/03-03-kkt-conditions.md) and [5.2](../../convex-optimization/lessons/05-02-support-vector-machines.md); the "inner product is the only thing the algorithm sees" reading is [linalg-refresher 4.1](../../linalg-refresher/lessons/04-01-inner-products-orthogonality.md). $C$ is still the regularization knob of [1.4](01-04-regularization-ridge-and-lasso.md), and it now trades off against $\gamma$ — two knobs, one grid search.
- **Forward:** [2.5](02-05-decision-trees.md) gets nonlinearity a completely different way, by axis-aligned splits rather than by lifting, and the comparison is worth holding onto: trees scale to large $n$ precisely because they never form an $n\times n$ anything. [4.1](04-01-model-selection-and-cross-validation.md) and [4.3](04-03-diagnosing-models-in-practice.md) are how you actually choose $\gamma$ and $C$ and catch the failure in P3. [4.4](04-04-a-taste-of-neural-networks.md) inverts the whole idea: instead of fixing $\phi$ and hoping it suits the data, a network *learns* $\phi$ — which is why deep learning displaced kernels on the problems where $n$ is huge.
- **Sideways:** the substitution works on any algorithm written purely in inner products, which is more of them than you would guess — kernel PCA is [3.2](03-02-principal-component-analysis.md) with the same one-line swap, and kernel ridge regression is [1.4](01-04-regularization-ridge-and-lasso.md)'s. The theory of *why* the implied space is well defined, and the representer theorem that says the solution always lies in the span of the data, is [`statistical-learning`](../../statistical-learning/syllabus.md) (not yet built); positive semidefiniteness itself is the quadratic-form condition of [linalg-refresher 5.1](../../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md).
