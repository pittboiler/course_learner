# Statistical Learning Theory · Lesson 4.4: Support vector machines

> ⏱ ~15 min · Module 4: Kernels and margins · Builds on: [4.3](04-03-maximum-margin-classifiers.md) (the margin bound), [2.2](02-02-logistic-regression-and-classification.md) (surrogate losses), [2.3](02-03-ridge-regression-and-shrinkage.md) (the $\ell_2$ penalty) · Unlocks: boss problem 4, [5.5](05-05-why-does-deep-learning-generalize.md)

## Why this matters

The SVM is the method most often used without anyone saying what it minimises. You meet it as a story about slack variables and a dual and a box constraint, and the story is correct — [`machine-learning` 2.3](../../machine-learning/lessons/02-03-soft-margins-and-the-svm-dual.md) tells it properly, and [`machine-learning` 2.4](../../machine-learning/lessons/02-04-the-kernel-trick.md) tells the kernel half. **All of that is ceded. Nothing below re-derives the dual, the KKT sort, or the Gram-matrix arithmetic.**

What this course adds is one sentence that makes three pieces of SVM folklore into theorems:

> The SVM is empirical risk minimization with a convex surrogate loss and an $\ell_2$ penalty.

That is [2.3](02-03-ridge-regression-and-shrinkage.md)'s template with a different loss in the first slot. Once it is on the page, "the SVM generalizes because of the margin" becomes [4.3](04-03-maximum-margin-classifiers.md)'s bound and the penalty is what buys it; "SVM scores are not probabilities" becomes a computation about a population minimiser; and "the solution depends only on the support vectors" becomes a remark about a flat region of a loss function, provable in three lines without ever writing $\alpha$.

## The idea

Two objects, one template.

Ridge minimises *squared loss plus $\lambda\lVert w\rVert^2$*. The SVM minimises *hinge loss plus $\lambda\lVert w\rVert^2$*. Same regularized-ERM shape ([1.1](01-01-what-is-learning-loss-risk-and-erm.md)), same job for the penalty — restrict the effective hypothesis class so that finite data can pin it down — and a different answer to the question "what am I paying for a mistake?"

The loss you actually care about in classification is 0-1 loss, and it is non-convex and NP-hard to minimise, so [2.2](02-02-logistic-regression-and-classification.md) replaced it with a convex upper bound. The [hinge](../reference.md#hinge-loss) is the bound with the sharpest personality:

$$\ell_{\text{hinge}}(z) = \max(0,\ 1 - z), \qquad z = y\,f(x).$$

It charges you for being *nearly* wrong — any point with margin below 1 pays — and then, past $z = 1$, it stops caring entirely. That flat region is not a rounding detail. It is where support vectors come from, it is why the SVM is sparse where kernel ridge is dense, and it is the same feature that throws away the information you would need to output a probability. One shape, three consequences; that is the lesson.

## The formal version

**The objective.** With $f(x) = w^\top x$ (absorb the bias into $x$ if you like) and $y_i \in \{-1,+1\}$:

$$\min_{w}\ \underbrace{\frac1n\sum_{i=1}^{n}\max\bigl(0,\ 1 - y_i w^\top x_i\bigr)}_{\text{empirical hinge risk } \hat R_S^{\text{hinge}}(w)} \;+\; \underbrace{\frac{\lambda}{2}\lVert w\rVert^2}_{\text{capacity control}}.$$

*In words:* average what the mistakes cost, and add a fee for a large weight vector.

**Equivalence to the slack form.** [`machine-learning` 2.3](../../machine-learning/lessons/02-03-soft-margins-and-the-svm-dual.md)'s primal is $\tfrac12\lVert w\rVert^2 + C\sum_i \xi_i$ subject to $y_i f(x_i) \ge 1 - \xi_i$ and $\xi_i \ge 0$. At the optimum each slack is squeezed to $\xi_i = \max(0, 1 - y_i f(x_i))$, which *is* the hinge; dividing the whole objective by $Cn$ (a positive constant, so the minimiser does not move) gives the display above with

$$\lambda = \frac{1}{Cn}.$$

**Which way the knob turns.** $C$ is the price of a mistake, so **large $C$ means light regularization** and **large $\lambda$ means heavy regularization**. They are reciprocals; this is the single most reversed fact in the subject, and the reason is that $C$ multiplies the *loss* term while $\lambda$ multiplies the *penalty* term.

**The hinge is a calibrated surrogate.** Two statements, one cheap and one deep.

1. *Upper bound.* $\max(0, 1-z) \ge \mathbf 1[z \le 0]$ for every real $z$ — check the three regions. So the empirical hinge risk upper-bounds the empirical 0-1 error, and a small hinge risk is *evidence*, not just a proxy.
2. *[Classification-calibration](../reference.md#classification-calibration).* Minimising hinge risk over **all measurable** $f$ recovers the sign of the Bayes classifier ([1.1](01-01-what-is-learning-loss-risk-and-erm.md)). More than that, for the hinge the excess risks are directly comparable:
$$R_{01}(f) - R_{01}^* \ \le\ R_{\text{hinge}}(f) - R_{\text{hinge}}^*.$$
*In words:* drive the hinge risk to within $\epsilon$ of its floor and your 0-1 error is within $\epsilon$ of the Bayes risk. The surrogate is not a compromise you have to apologise for.

**But the hinge is not calibrated for probabilities — and this is a computation, not folklore.** Write $\eta(x) = \Pr(y = 1 \mid x)$. Conditioned on $x$, the hinge risk of a score $a$ is

$$H(a) = \eta\max(0, 1-a) + (1-\eta)\max(0, 1+a).$$

On $a \in [-1, 1]$ both hinges are active and $H(a) = 1 + a(1 - 2\eta)$ — a straight line with slope $1 - 2\eta$. Outside that interval $H$ increases. So the minimum sits at an endpoint:

$$\operatorname{arg\,min}_a H(a) = \operatorname{sign}(2\eta - 1), \qquad \min_a H(a) = 2\min(\eta, 1-\eta).$$

*In words:* **the population hinge minimiser is $\pm 1$ and nothing else.** It reports the decision and destroys the confidence. Compare [2.2](02-02-logistic-regression-and-classification.md): the population logistic minimiser is the log-odds $\log\frac{\eta}{1-\eta}$, from which $\eta$ is recoverable by a sigmoid. That difference — an argmax versus a probability — is *the* reason SVM scores are not probabilities, and it survives infinite data. (At $\eta = 1/2$ the line is flat and every $a \in [-1,1]$ ties, which is the honest degenerate case.)

**Sparsity, without the dual.** The subgradient of the objective at $w$ is

$$\lambda w - \frac1n\sum_{i=1}^n \beta_i\, y_i x_i, \qquad \beta_i = \begin{cases} 1 & z_i < 1\\ {[0,1]} & z_i = 1\\ 0 & z_i > 1,\end{cases}$$

with $z_i = y_i w^\top x_i$. Setting it to zero gives the whole support-vector story in one line:

$$w \;=\; \frac{1}{\lambda n}\sum_{i=1}^{n} \beta_i\, y_i x_i .$$

Every point with margin strictly greater than 1 has $\beta_i = 0$ and contributes **exactly nothing** — not approximately nothing, nothing. Delete it and $w$ does not move. That is what a support vector is, and the flat region of the hinge is the entire explanation. (Cross-check against the sibling: putting $\alpha_i = \beta_i/(\lambda n) = C\beta_i$ and using $\beta_i \in [0,1]$ reproduces exactly the box $0 \le \alpha_i \le C$ and the three-way sort that [`machine-learning` 2.3](../../machine-learning/lessons/02-03-soft-margins-and-the-svm-dual.md) derives from complementary slackness. Two routes, one answer.)

## Picture

![Hinge loss drawn against the margin z as a straight line falling to zero at z equals one and flat thereafter, with the flat region shaded and the 0-1 loss drawn as a dashed step, and the six points of Example 1 plotted underneath at their margins, two in coral as support vectors and four greyed out.](assets/04-04-fig1.svg)

The dashed step is the loss you want; the blue line is the loss you can optimise, and it sits above the step everywhere. Read the shaded half as the answer to "which of my points matter?" — the gradient there is the zero vector, so those rows could be deleted from the file without changing the fit by a hair.

## Worked examples

**Example 1 (mechanical): the flat region does the sorting.** One dimension, no bias, $f(x) = wx$. Six points: $x = 1, 2, 3$ labelled $+1$ and $x = -1, -2, -3$ labelled $-1$. To make deletion tests clean, use the summed form with $\mu = \lambda n$ held fixed:

$$J(w) = \sum_{i=1}^{6}\max(0,\ 1 - y_i w x_i) + \frac{\mu}{2}w^2, \qquad \mu = 3 \ \ (\text{i.e. } \lambda = \tfrac12,\ n = 6).$$

By symmetry $y_i x_i = |x_i|$, so the margins are $z = w, 2w, 3w$ twice over. Guess that only the two innermost points are active, i.e. $w \in (\tfrac12, 1)$. There $J(w) = 2(1 - w) + \tfrac32 w^2$, so $J'(w) = -2 + 3w = 0$ and

$$w^\star = \tfrac23 \in (\tfrac12, 1). \ \checkmark$$

Margins at $w^\star$: $z = \tfrac23,\ \tfrac43,\ 2$ (twice each). Only the pair at $z = \tfrac23 < 1$ is active, so $\beta = (1,0,0,1,0,0)$, and the stationarity identity checks out: $\tfrac{1}{3}(1 + 1) = \tfrac23$. Now the two tests that make "support vector" concrete (both confirmed numerically against the full objective):

- **Throw away the four points with $z > 1$** and re-minimise with the same $\mu$. The answer is still $w^\star = \tfrac23$, and $J$ is unchanged, because those four contributed zero to both terms.
- **Move $x = \pm 3$ out to $x = \pm 10$** — a huge change to the data. Still $w^\star = \tfrac23$. They were already irrelevant; making them more comfortably correct cannot matter.

Compare squared loss on the same six points and the answer is dense: *every* point moves the fit, because $(y - wx)^2$ has zero gradient at exactly one value of the residual, not on a whole half-line. Sparsity is a property of the loss, not of the algorithm.

**Example 2 (why you'd care): the probability you cannot get back.** A hospital screens with two patient profiles, $x_A$ and $x_B$, with true conditional probabilities $\eta(x_A) = 0.95$ and $\eta(x_B) = 0.55$. Treatment is offered only above a 0.90 risk, so the two profiles get different care.

- *Logistic, at the population minimiser:* $f(x_A) = \log\frac{0.95}{0.05} = 2.944$ and $f(x_B) = \log\frac{0.55}{0.45} = 0.201$. Sigmoids: $0.95$ and $0.55$. The threshold is applicable.
- *Hinge, at the population minimiser:* $f(x_A) = +1$ and $f(x_B) = +1$. Identical.

Now the fatal step. Someone squashes the SVM score, reporting $\sigma(Af + B)$ for fitted constants $A, B$. Since the two scores are equal, $\sigma(Af+B)$ is equal too — **no choice of $A$ and $B$ can separate a 0.95 patient from a 0.55 patient**, because the information was destroyed before the sigmoid was applied. Practical Platt scaling appears to work only because a finite-sample, regularized SVM has not reached its population minimiser and its scores still wobble informatively; the more data you get, the more that accident goes away.

## Watch out

- **You might think** you can read $\lambda$ off a formula and compare across textbooks — **but actually** $\lambda$ depends on two conventions: whether the loss is *averaged* or *summed*, and whether the penalty carries a $\tfrac12$. This lesson's averaged form gives $\lambda = 1/(Cn)$; [`machine-learning` 2.3](../../machine-learning/lessons/02-03-soft-margins-and-the-svm-dual.md)'s summed form gives $\lambda_{\text{ML}} = 1/(2C)$, and the two agree because $\lambda_{\text{ML}} = \lambda n / 2$. Always state the normalisation before you quote a number.
- **You might think** classification-calibration means the fitted SVM approaches the Bayes classifier — **but actually** it is a statement about minimising over **all measurable** $f$. Restrict to linear $f$ and the hinge minimiser is the best *linear* thing, which may be far from $\operatorname{sign}(2\eta - 1)$. Calibration removes the surrogate from the list of suspects; it does not remove approximation error ([1.1](01-01-what-is-learning-loss-risk-and-erm.md)).
- **You might think** support vectors are the "important" or "hard" points, so a small support set means a confident model — **but actually** the count depends on $\lambda$: crank the regularization up and nearly every point falls inside the margin band and becomes a support vector. The set is a fact about the loss and the penalty, not a discovered property of your data.

## One-liner

> The SVM is regularized ERM with the hinge — a convex, classification-calibrated upper bound on 0-1 loss whose flat region past margin 1 gives you support-vector sparsity for free and takes away any hope of a probability.

## Problems

**P1 (🟢)** (a) You fit an SVM with $n = 500$ and $C = 10$. Give the $\lambda$ of the averaged regularized-risk form. (b) A colleague hands you $\lambda = 0.01$ on $n = 250$; give $C$. (c) You want *more* regularization. Which way does each knob move, and why does the answer differ between them?

**P2 (🟡)** (a) Prove $\max(0, 1-z) \ge \mathbf 1[z\le 0]$ for all $z \in \mathbb R$ by checking the regions $z \le 0$, $0 < z \le 1$, $z > 1$. (b) Take the two-point domain $\mathcal X = \{x_A, x_B\}$ with $\Pr(x_A) = 0.6$, $\eta(x_A) = 0.8$ and $\eta(x_B) = 0.3$. Minimising over all functions $f: \mathcal X \to \mathbb R$, find the hinge-optimal $f(x_A)$ and $f(x_B)$ from first principles, and give the minimum hinge risk and the Bayes 0-1 risk. (c) What is the ratio of the two, and is it a coincidence?

**P3 (🔴)** A colleague fits an SVM, passes the scores through a sigmoid, and reports the results as calibrated probabilities of class $+1$. (a) Using the population hinge minimiser, construct a two-point instance on which *no* map applied to the SVM score can reproduce the true conditional probabilities, and prove it. (b) Explain in one sentence why their procedure nevertheless produces plausible-looking numbers on real data, and what happens to that as $n$ grows. (c) Name two things they could do instead, and say which of the two removes the problem at its source.

<details>
<summary>Solutions</summary>

**P1** (a) $\lambda = 1/(Cn) = 1/(10 \times 500) = 1/5000 = \mathbf{0.0002}$.

(b) Invert: $C = 1/(\lambda n) = 1/(0.01 \times 250) = 1/2.5 = \mathbf{0.4}$.

(c) **Increase $\lambda$; decrease $C$.** They move oppositely because they sit on opposite sides of the objective. $\lambda$ multiplies the penalty $\tfrac12\lVert w\rVert^2$, so raising it makes a large $w$ more expensive and shrinks the fit. $C$ multiplies the *loss*, so raising it makes a training mistake more expensive and lets the optimiser contort the boundary to avoid one. Consistent with $\lambda = 1/(Cn)$: they are reciprocals. Note also that $n$ appears — the same $C$ is *less* regularization on a larger sample.

**P2** (a) Three regions.
- $z \le 0$: the indicator is 1, and $1 - z \ge 1$, so $\max(0,1-z) = 1-z \ge 1$. ✓
- $0 < z \le 1$: the indicator is 0, and $\max(0,1-z) = 1-z \ge 0$. ✓
- $z > 1$: the indicator is 0, and $\max(0,1-z) = 0 \ge 0$. ✓ (Equality here, and only here — the bound is tight exactly on the flat region.)

(b) The risk separates across the two points because $f(x_A)$ and $f(x_B)$ are free of each other, so minimise each conditional hinge risk on its own. Using $H(a) = \eta\max(0,1-a) + (1-\eta)\max(0,1+a)$:

*At $x_A$ ($\eta = 0.8$):* on $[-1,1]$, $H(a) = 1 + a(1 - 1.6) = 1 - 0.6a$, decreasing, so push $a$ to the right end $a = 1$. Beyond $a = 1$ only the $(1-\eta)$ term survives, $H(a) = 0.2(1+a)$, increasing. So $f(x_A) = +1$ with $H = 0.4 = 2\min(0.8, 0.2)$.

*At $x_B$ ($\eta = 0.3$):* on $[-1,1]$, $H(a) = 1 + a(1 - 0.6) = 1 + 0.4a$, increasing, so $a = -1$; below that $H(a) = 0.3(1-a)$, increasing as $a$ falls. So $f(x_B) = -1$ with $H = 0.6 = 2\min(0.3,0.7)$.

Minimum hinge risk: $0.6(0.4) + 0.4(0.6) = 0.24 + 0.24 = \mathbf{0.48}$.

Bayes 0-1 risk: the Bayes rule predicts $+1$ at $x_A$ and $-1$ at $x_B$, erring with probability $\min(\eta, 1-\eta)$, so $0.6(0.2) + 0.4(0.3) = 0.12 + 0.12 = \mathbf{0.24}$.

(c) The ratio is exactly **2**, and it is **not** a coincidence: pointwise the two minima are $2\min(\eta,1-\eta)$ and $\min(\eta,1-\eta)$, so the factor of 2 holds at every $x$ and therefore in the mixture. The hinge risk of the optimal classifier is *twice* the Bayes risk — which is a good reminder that a hinge number is not an error rate, even though its excess over the floor bounds the excess 0-1 error.

**P3** (a) Take $\eta(x_A) = 0.95$ and $\eta(x_B) = 0.55$. The population hinge minimiser is $\operatorname{sign}(2\eta - 1)$, which is $+1$ at both points — the scores are **equal**. Any reported probability is a function $g$ of the score alone, so $g(f(x_A)) = g(f(x_B))$; but the true probabilities are $0.95 \ne 0.55$. No $g$ — sigmoid, isotonic, or anything else — can produce two different outputs from one input. The information was destroyed by the loss, not by the squashing function. $\blacksquare$

(b) In practice you minimise the *empirical* hinge risk over a *restricted* class with $\lambda > 0$, so the fit is nowhere near the population minimiser and its scores still vary continuously with the margin; a sigmoid fitted on held-out data then looks reasonable. As $n$ grows and $\lambda$ is tuned down, the fit moves toward the population minimiser and the score distribution piles up near $\pm1$ — so the more data you collect, the *worse* the calibration story gets. That inversion is the tell.

(c) Two options: **(i)** fit **Platt scaling or isotonic regression on a held-out set** — a patch, which works only for the accidental reason in (b) and degrades as the fit improves; **(ii)** **use a proper (probability-calibrated) loss in the first place** — logistic loss ([2.2](02-02-logistic-regression-and-classification.md)), whose population minimiser is the log-odds, so $\eta$ is recoverable by construction. Option (ii) removes the problem at its source; it is the same $\ell_2$-regularized-ERM template with the loss slot filled differently, so nothing else about the pipeline changes.

</details>

## Flashback

**From Lesson 4.2 (RKHS and the representer theorem):** Kernel ridge regression on three points, $x = (-1, 0, 1)$ with $y = (0, 1, 2)$, kernel $K(x,z) = 1 + xz$, penalty $\lambda\lVert f\rVert_K^2$ with $\lambda = 1$.

(a) Write down the Gram matrix, use the representer theorem to reduce the problem to three coefficients, and solve for $\alpha$ exactly. (b) Give the fitted function $f$. (c) How many coefficients are non-zero, and what does comparing that with an SVM's solution tell you about the division of labour between the representer theorem and the hinge?

<details>
<summary>Solution</summary>

(a) $K_{ij} = 1 + x_i x_j$, so

$$K = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 1 & 1 \\ 0 & 1 & 2\end{pmatrix}.$$

The representer theorem says the minimiser is $f = \sum_{i=1}^{3}\alpha_i K(\cdot, x_i)$, so the infinite-dimensional problem collapses to three numbers. Substituting turns the objective into $\lVert y - K\alpha\rVert^2 + \lambda\,\alpha^\top K\alpha$, whose stationary point is the standard $(K + \lambda I)\alpha = y$:

$$\begin{pmatrix} 3 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 3\end{pmatrix}\alpha = \begin{pmatrix}0\\1\\2\end{pmatrix} \quad\Longrightarrow\quad \alpha = \Bigl(-\tfrac1{12},\ \tfrac14,\ \tfrac7{12}\Bigr).$$

(Check row 1: $3(-\tfrac1{12}) + \tfrac14 = 0$. ✓ Row 3: $\tfrac14 + 3(\tfrac7{12}) = 2$. ✓)

(b) Since $K(\cdot, x_i)$ is the function $x \mapsto 1 + x_i x$,

$$f(x) = \sum_i \alpha_i(1 + x_i x) = \Bigl(\sum_i\alpha_i\Bigr) + \Bigl(\sum_i \alpha_i x_i\Bigr)x = \tfrac34 + \tfrac23 x,$$

with fitted values $\bigl(\tfrac1{12},\ \tfrac34,\ \tfrac{17}{12}\bigr)$ — shrunk toward zero relative to the data, as ridge ([2.3](02-03-ridge-regression-and-shrinkage.md)) must be. Two sanity checks: this kernel's feature map is $\phi(x) = (1, x)$, and solving the ordinary ridge problem in those two features returns the same $(\tfrac34, \tfrac23)$; and the residual vector equals $\lambda\alpha$ exactly, which is what the stationarity condition says.

(c) **All three are non-zero, and generically all $n$ always are.** That is the division of labour:

- The **representer theorem** guarantees the *form* $f = \sum_i \alpha_i K(\cdot, x_i)$ — a sum over training points — for **any** loss with a strictly increasing penalty in $\lVert f\rVert_K$. It is what makes an SVM expressible as a sum over data points at all, kernel or not.
- It says **nothing about sparsity.** With squared loss the expansion is dense; with the hinge, this lesson's subgradient argument kills every $\alpha_i$ whose point has margin above 1. So *representation* is the theorem's contribution and *sparsity* is the hinge's — and the name "support vector" belongs entirely to the second.

</details>

## Connections

- **Backward:** the objective is [1.1](01-01-what-is-learning-loss-risk-and-erm.md)'s regularized ERM with [2.2](02-02-logistic-regression-and-classification.md)'s surrogate-loss slot filled by the hinge and [2.3](02-03-ridge-regression-and-shrinkage.md)'s $\ell_2$ penalty in the second slot; the reason that penalty is worth paying is [4.3](04-03-maximum-margin-classifiers.md)'s $R^2/\gamma^2$ bound, since shrinking $\lVert w\rVert$ under the margin-1 constraints is literally maximising $\gamma$. [4.2](04-02-rkhs-and-the-representer-theorem.md) licenses the kernelized version, and [4.1](04-01-feature-maps-and-the-kernel-trick.md) says why the capacity question had to be answered by the margin rather than by the dimension.
- **Forward:** boss problem 4 works the margin-versus-dimension comparison on a concrete set. [5.3](05-03-boosting.md) is the same template with the exponential loss, whose flat region is nowhere and whose solution is correspondingly dense; [5.5](05-05-why-does-deep-learning-generalize.md) asks what is left of "the penalty controls capacity" when the fit interpolates.
- **Sideways:** the mechanics live in [`machine-learning` 2.3](../../machine-learning/lessons/02-03-soft-margins-and-the-svm-dual.md) and [2.4](../../machine-learning/lessons/02-04-the-kernel-trick.md) — read them for the dual, the three-way sort and the Gram-matrix budget. The subgradient condition here is [`convex-optimization` 3.3](../../convex-optimization/lessons/03-03-kkt-conditions.md)'s stationarity for a non-differentiable objective, the same object that gave [2.4](02-04-lasso-and-the-geometry-of-sparsity.md)'s lasso certificate: in both cases a **kink or a flat spot in the loss is what produces exact zeros**, and rounded losses never do.
