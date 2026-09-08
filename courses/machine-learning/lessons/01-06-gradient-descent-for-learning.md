# Machine Learning · Lesson 1.6: Optimization for learning — gradient descent

> ⏱ ~15 min · Module 1: Foundations and linear models · Builds on: [1.4 (ridge and lasso)](01-04-regularization-ridge-and-lasso.md), [1.5 (logistic regression)](01-05-logistic-regression-and-classification.md) · Unlocks: 2.1 (the perceptron), and every fit in this course that has no closed form

## Why this matters

[Lesson 1.3](01-03-linear-regression-and-least-squares.md) handed you a formula. [Lesson 1.5](01-05-logistic-regression-and-classification.md) did not — the logistic likelihood has no closed-form maximiser, and neither does an SVM, a mixture model, or a neural net. From here on, *fitting a model means running an optimizer*, and the optimizer has a knob you cannot avoid setting: the learning rate.

Almost everyone treats that knob as taste. It isn't. On a quadratic loss the learning rate has an **exact threshold** — below it you converge, above it you diverge, and at it you oscillate forever — and the loss surface's condition number tells you exactly how many steps convergence will take. Both facts are two lines of algebra, and together they turn "my training loss went to NaN" from a mystery into a diagnosis.

This is the lesson the syllabus's scope table assigns to this course rather than to [`statistical-learning`](../../statistical-learning/syllabus.md): not "does gradient descent converge in theory" but "what step size do I type, and what does the loss curve look like when I typed the wrong one."

## The idea

You are in a valley in fog. You can feel which way is downhill; you cannot see the bottom. So you take a step downhill, re-measure, and repeat. The gradient is the "which way is downhill" measurement, and the learning rate is how far you commit before re-measuring.

The failure mode is the one your legs already know. On a **narrow steep-sided** valley, a step that feels sensible along the valley floor is far too long across the valley — you overshoot, land partway up the opposite wall, and the next step throws you back across. If the walls are steep enough, you land *higher* than you started, and every step after that is worse. That is divergence, and it is caused by the steepest direction, not by the average one.

Here is the fact that makes all of this computable. Near a minimum every smooth loss looks like a quadratic bowl, and a quadratic bowl **decouples**: rotate into the eigenvector basis of its Hessian and the coordinates stop talking to each other. Gradient descent then does nothing but multiply coordinate $i$ by a constant $1 - \eta\lambda_i$ every step. Not an algorithm any more — just $p$ independent geometric sequences.

Everything follows from reading off when those sequences shrink:

- **shrink in every coordinate** and you converge, geometrically;
- **grow in one coordinate** and you diverge, geometrically, no matter how good the others are;
- the **worst** ratio among the $p$ of them is your convergence rate, so a single badly-scaled feature can dominate the entire training run.

## The formal version

**Gradient descent.** For a differentiable objective $J$ and a step size (learning rate) $\eta > 0$:

$$\theta_{t+1} \;=\; \theta_t \;-\; \eta\,\nabla J(\theta_t).$$

*In words:* move against the gradient — the direction in which $J$ falls fastest — by an amount proportional to how steep it is.

**The quadratic model.** Let $A$ be symmetric positive definite with eigenvalues $0 < \mu = \lambda_1 \le \dots \le \lambda_p = L$, and take

$$f(x) = \tfrac12\, x^\top A x, \qquad \nabla f(x) = Ax .$$

Then one step is a linear map:

$$x_{t+1} = x_t - \eta A x_t = (I - \eta A)\,x_t .$$

Write $x$ in the orthonormal eigenbasis of $A$ ([spectral theorem](../../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md)), with coordinates $z_i$. Because $A$ acts on each eigenvector by scaling, so does $I - \eta A$:

$$z_i^{(t)} = (1 - \eta\lambda_i)^{t}\, z_i^{(0)} \qquad \text{for each } i .$$

*In words:* in the right coordinates, gradient descent is not iterative at all — it is $p$ separate geometric sequences, and you can write down where it will be after a million steps without running them.

**Convergence.** The iterates go to the minimum from every start **iff** every ratio is inside the unit interval, $|1-\eta\lambda_i| < 1$ for all $i$. The binding constraint is the largest eigenvalue:

$$\boxed{\;0 \;<\; \eta \;<\; \frac{2}{L}\;}$$

*In words:* the sharpest curvature in the problem sets the speed limit, and nothing else does.

**Rate.** The distance to the optimum shrinks by at most a factor

$$\rho(\eta) \;=\; \max_i\, |1-\eta\lambda_i| \;=\; \max\big(\,|1-\eta\mu|,\ |1-\eta L|\,\big)$$

per step — only the two extreme eigenvalues can be the worst one. The right-hand side is a "V" in $\eta$: the first term falls, the second rises, and the minimum is where they cross, $1 - \eta\mu = -(1-\eta L)$. Solving,

$$\eta^* = \frac{2}{\mu+L}, \qquad \rho^* = \frac{L-\mu}{L+\mu} = \frac{\kappa-1}{\kappa+1},$$

where $\kappa = L/\mu$ is the **condition number** of the Hessian.

*In words:* the best you can do is set the step so that the flattest and the steepest direction contract equally, and how good that is depends on $\kappa$ alone — not on $p$, not on $n$, not on how far away you started. A problem with $\kappa = 100$ needs roughly 50 times more steps than one with $\kappa = 2$.

For a general convex $L$-smooth loss the same $L$ plays the same role and $\eta \le 1/L$ is the standard safe choice; the convergence theorems are [`convex-optimization` 4.1](../../convex-optimization/lessons/04-01-first-order-methods.md)'s, and this lesson uses rather than re-proves them.

**Stochastic gradient descent.** Take the empirical risk over $n$ rows,

$$J(\theta) = \frac1n\sum_{i=1}^n \ell(\theta;\, x_i, y_i),$$

and replace the full gradient with the average over a random mini-batch $B_t$ of size $b$:

$$\hat g_t = \frac{1}{b}\sum_{i \in B_t} \nabla \ell(\theta_t; x_i, y_i), \qquad \mathbb E[\hat g_t] = \nabla J(\theta_t).$$

*In words:* a random handful of rows gives an **unbiased** estimate of the direction the whole dataset would have pointed. One step costs $O(bp)$ instead of $O(np)$ ([asymptotic notation](../../algorithms/lessons/01-01-asymptotic-notation.md)), and the noise in it has standard deviation proportional to $1/\sqrt{b}$ ([variance of a sample mean](../../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md)).

Unbiased is not the same as harmless: with a *constant* step size the noise never switches off, so the iterates converge to a **ball** around the optimum rather than to the optimum. Example 2 computes that ball's radius exactly.

## Picture

![Elliptical contours of a quadratic bowl whose Hessian has eigenvalues 1 and 10, with two gradient-descent paths from the same starting point. The blue path at step size 0.18 zig-zags across the valley while funnelling in toward the optimum; the coral path at step size 0.22, just past the threshold two over L, zig-zags with growing amplitude and flies apart.](assets/01-06-fig1.svg)

Both paths zig-zag, and the zig-zag is not the problem — it is just the sign of $1 - \eta\lambda_2$ being negative, meaning each step overshoots the valley floor and lands on the other side. What separates the two paths is only whether the *magnitude* $|1-\eta\lambda_2|$ is under 1. At $\eta = 0.18$ it is $0.8$ and the crossings shrink; at $\eta = 0.22$ it is $1.2$ and they grow. Nothing about the flat direction (which is contracting happily in both runs) can rescue the second path.

## Worked examples

**Example 1 (mechanical): the exact divergence threshold.** Take

$$f(x) = \tfrac12\big(x_1^2 + 10\,x_2^2\big),$$

so the Hessian is $\operatorname{diag}(1,10)$ — already diagonal, so the eigenvalues are $\mu = 1$ and $L = 10$ and $\kappa = 10$. One step multiplies the coordinates by

$$1 - \eta\cdot 1 \quad\text{and}\quad 1 - \eta\cdot 10 .$$

The first is inside $(-1,1)$ for $\eta < 2$; the second only for $\eta < 0.2$. So the threshold is $2/L = 0.2$, set entirely by the steep coordinate. Starting from $x_0 = (1,1)$ and running 60 steps:

| $\eta$ | $1-\eta$ | $1-10\eta$ | $\lVert x_{60}\rVert$ | verdict |
|---|---|---|---|---|
| $0.05$ | $0.95$ | $0.5$ | $4.6\times 10^{-2}$ | converges, slowly |
| $0.18$ | $0.82$ | $-0.8$ | $6.9\times 10^{-6}$ | converges, fast |
| $0.19$ | $0.81$ | $-0.9$ | $1.8\times 10^{-3}$ | converges, slowing down |
| $0.20$ | $0.80$ | $-1.0$ | $1.0$ | oscillates forever |
| $0.21$ | $0.79$ | $-1.1$ | $3.0\times 10^{2}$ | diverges |

Three things in that table are worth more than the table.

**The row at $\eta = 0.20$.** The second coordinate is multiplied by exactly $-1$ every step, so it flips between $+1$ and $-1$ and never moves. Not slow convergence — *no* convergence, with a loss curve that is perfectly flat. Exactly at the threshold gradient descent neither improves nor blows up.

**$\eta = 0.05$ is worse than $\eta = 0.18$ by four orders of magnitude.** Halving a step size that already works does not buy safety, it buys delay. To reach $10^{-6}$ the timid run needs $\ln(10^{-6})/\ln 0.95 \approx 270$ steps; the near-optimal run needs about 69.

**The optimum is $\eta^* = 2/(\mu+L) = 2/11 \approx 0.1818$,** which contracts both coordinates by $\rho^* = 9/11 \approx 0.818$ — and it sits at 91 percent of the divergence threshold. The fastest safe step size is uncomfortably close to the cliff, which is why practitioners tune $\eta$ downward from failure rather than upward from safety.

**Example 2 (why you'd care): what SGD's noise costs you.** Take the simplest possible case — minimise $\tfrac12\theta^2$, but each step sees a noisy gradient $\theta_t + \varepsilon_t$ with $\varepsilon_t$ independent, mean 0, variance $\sigma^2 = 1$. Then

$$\theta_{t+1} = (1-\eta)\theta_t - \eta\,\varepsilon_t .$$

Take variances of both sides (the two terms are independent) and set $v = \operatorname{Var}(\theta_t)$ at the stationary point:

$$v = (1-\eta)^2 v + \eta^2\sigma^2 \;\Longrightarrow\; v = \frac{\eta^2\sigma^2}{1-(1-\eta)^2} = \frac{\eta\,\sigma^2}{2-\eta}.$$

So the iterates settle into a cloud of RMS radius $\sqrt{\eta/(2-\eta)}$, which for small $\eta$ is about $\sigma\sqrt{\eta/2}$:

| $\eta$ | RMS distance from the optimum |
|---|---|
| $0.1$ | $0.229$ |
| $0.01$ | $0.071$ |
| $0.001$ | $0.022$ |

(Confirmed by simulating 400,000 steps at each rate; the observed RMS values were $0.229$, $0.071$ and $0.023$.)

Read the scaling: **the ball's radius falls only like $\sqrt{\eta}$.** Cutting the step size by 100 buys a factor of 10 in accuracy and costs a factor of 100 in steps. That is why constant-rate SGD plateaus at a loss floor that no amount of extra epochs will break through, and why every practical schedule *decays* $\eta$ — you spend a large step to get near the optimum quickly, then shrink the ball around it.

The same $1/\sqrt{b}$ arithmetic prices mini-batching. Going from $b = 100$ to $b = 10{,}000$ multiplies the cost of a step by 100 and divides the gradient noise by only 10. Small batches are statistically inefficient and computationally cheap; the batch size people actually use is set by which one your hardware can process without wasting its vector units, not by the statistics.

## Watch out

- **You might think** a training loss that explodes to NaN means a bug in your gradient — **but actually** the first thing to check is $\eta$ against $2/L$. The signature is specific and worth memorising: a loss that *grows by a roughly constant factor every step* is $|1-\eta L| > 1$ doing exactly what the algebra says. A genuine gradient bug usually produces a loss that wanders or stalls, not one that grows geometrically.
- **You might think** the flat directions are what make optimization slow — **but actually** the steep direction sets the speed limit ($\eta < 2/L$) and the flat direction then sets the progress ($\rho \ge 1 - \eta\mu$). Both extremes hurt, through $\kappa = L/\mu$, and *neither one alone* tells you anything: doubling every eigenvalue leaves $\kappa$ and the number of steps unchanged, it just halves the $\eta$ you type.
- **You might think** feature scaling is a statistical nicety — **but actually** it is an optimization necessity, and for a different reason than in [1.4](01-04-regularization-ridge-and-lasso.md). Multiply one column of $X$ by 1000 and the corresponding Hessian eigenvalue grows by $10^6$, so $\kappa$ explodes and gradient descent crawls. Standardising the design is simultaneously what makes the ridge penalty meaningful and what makes the optimizer converge. Newton's method, which rescales by the Hessian, is immune — which is exactly the trade you are making when you use a first-order method.

## One-liner

> Rotate into the Hessian's eigenbasis and gradient descent is just $p$ geometric sequences with ratios $1-\eta\lambda_i$: the largest eigenvalue decides whether you converge at all ($\eta < 2/L$), the condition number decides how long it takes ($\rho^* = (\kappa-1)/(\kappa+1)$), and stochastic gradients trade a factor of $n/b$ in cost per step for a noise floor of radius $\sqrt{\eta}$.

## Problems

**P1 (🟢)** Let $f(x) = \tfrac12\big(4x_1^2 + 25x_2^2\big)$.

(a) Give the exact range of $\eta$ for which gradient descent converges to the minimum from every starting point. (b) Give the $\eta$ that converges fastest, as an exact fraction, and the per-step contraction factor it achieves. (c) How many steps at that best rate shrink the distance to the optimum by a factor of 1000?

**P2 (🟡)** Let $f(x) = \tfrac12\big(x_1^2 + 4x_2^2\big)$, run gradient descent with $\eta = 0.45$ from $x_0 = (2,\,1)$.

(a) Give $x_1$, $x_2$ and $x_3$ exactly. (b) One coordinate's sign alternates. Say which, and what feature of the arithmetic produces it — is it a symptom of a step size that is too large? (c) Which coordinate is limiting the convergence rate here? Name an $\eta$ that makes the run **faster**, and say whether it is larger or smaller than 0.45.

**P3 (🔴)** You are fitting a logistic regression ([1.5](01-05-logistic-regression-and-classification.md), so there is no closed form) on $n = 10^7$ rows with $p = 100$ features, stored as float64. A full-batch gradient step reads every row: about $2np$ floating-point operations. A mini-batch step at $b = 100$ costs $2bp$, so one epoch — $n/b$ steps — costs the same arithmetic as a *single* full-batch step.

(a) How much memory does the design matrix take, and how many updates does one epoch of SGD buy per full-batch step's worth of arithmetic? (b) Which reaches a moderate training loss first, and why — answer in terms of updates per unit of arithmetic, not in terms of convergence theorems. (c) Name two circumstances that would flip your answer. (d) Now suppose the loss were plain least squares instead. Compare the cost of the direct normal-equations solve with the cost of a full-batch gradient pass, and say what that comparison implies about using gradient descent here at all.

<details>
<summary>Solutions</summary>

**P1** The Hessian is $\operatorname{diag}(4, 25)$, already diagonal, so $\mu = 4$, $L = 25$, and $\kappa = 25/4 = 6.25$.

(a) The two ratios are $1-4\eta$ and $1-25\eta$. We need both in $(-1,1)$:

$$|1-4\eta| < 1 \iff 0 < \eta < \tfrac12, \qquad |1-25\eta| < 1 \iff 0 < \eta < \tfrac{2}{25}.$$

The intersection is $\;0 < \eta < 2/25 = 0.08$, set by the larger eigenvalue, as always.

(b) The best rate is

$$\eta^* = \frac{2}{\mu+L} = \frac{2}{29} \approx 0.0690 .$$

Check that it equalises the two ratios:

$$1 - 4\cdot\tfrac{2}{29} = \tfrac{21}{29}, \qquad 1 - 25\cdot\tfrac{2}{29} = -\tfrac{21}{29}.$$

Both have magnitude $\rho^* = 21/29 \approx 0.7241$, which agrees with $(\kappa-1)/(\kappa+1) = (5.25)/(7.25) = 21/29$. (Sanity check on the formula: $2/29 \approx 0.069$ is comfortably inside the range from (a), at 86 percent of the threshold $0.08$.)

(c) We need $(21/29)^k \le 10^{-3}$, so

$$k \;\ge\; \frac{\ln 10^{-3}}{\ln(21/29)} = \frac{-6.9078}{-0.32277} = 21.40,$$

hence $k = 22$ steps. (Verified: $(21/29)^{21} = 1.13\times10^{-3}$, still short; $(21/29)^{22} = 8.2\times10^{-4}$.)

**P2** Hessian $\operatorname{diag}(1,4)$, so $\mu = 1$, $L = 4$, threshold $2/L = 0.5$. At $\eta = 0.45$ the ratios are

$$1 - 0.45\cdot 1 = 0.55, \qquad 1 - 0.45\cdot 4 = -0.8 .$$

Both have magnitude under 1, so this run converges.

(a) Each coordinate is just multiplied by its ratio:

| $t$ | $x^{(t)}_1 = 2(0.55)^t$ | $x^{(t)}_2 = (-0.8)^t$ | $f$ |
|---|---|---|---|
| 0 | $2$ | $1$ | $4$ |
| 1 | $1.1$ | $-0.8$ | $1.885$ |
| 2 | $0.605$ | $0.64$ | $1.00221$ |
| 3 | $0.33275$ | $-0.512$ | $0.57965$ |

(b) The **second** coordinate alternates, because its ratio $1-\eta\lambda_2 = -0.8$ is negative: the step is long enough to carry it past the valley floor and onto the opposite wall. This is **not** in itself a symptom of too large a step — a negative ratio only means $\eta > 1/\lambda_2$, whereas divergence needs $\eta > 2/\lambda_2$. Every step size in the useful half of the range $(1/L, 2/L)$ zig-zags, including the optimal one. Zig-zagging is what a healthy fast run looks like on an ill-conditioned problem; only a *growing* zig-zag is a bug.

(c) The second coordinate: it contracts by $0.8$ per step against the first's $0.55$, so the run's rate is $\rho(0.45) = 0.8$ — the steep direction is the slow one here, which is the opposite of the usual intuition. The fix is $\eta^* = 2/(1+4) = 0.4$, giving ratios $0.6$ and $-0.6$ and rate $\rho^* = 0.6 = (\kappa-1)/(\kappa+1)$ with $\kappa = 4$.

That is **smaller** than $0.45$, and it is the point of the problem: past $\eta^*$, *lowering* the learning rate speeds the run up. Concretely, $0.6^t$ beats $0.8^t$ by a factor of about 32 after 12 steps.

**P3** (a) Memory: $10^7 \times 100 \times 8$ bytes $= 8\times10^9 = 8$ GB — enough that on most machines the data does not sit in RAM and each full pass is also a disk or network read.

Updates: one epoch at $b = 100$ is $n/b = 10^5$ steps, and it costs $2np$ operations, the same as **one** full-batch step. So per unit of arithmetic SGD performs $10^5$ times as many parameter updates.

(b) SGD, and by a wide margin, for a reason that has nothing to do with rates: with $n = 10^7$ rows and only $p = 100$ parameters, the data is **enormously redundant**. A hundred randomly chosen rows already point in nearly the direction that all ten million would; the full-batch gradient spends $10^5$ times the arithmetic to sharpen a direction that was good enough to move on. Full-batch descent makes one high-quality move while SGD makes a hundred thousand slightly noisy ones, and a hundred thousand noisy moves cover far more ground.

(c) Any two of:

- **Target accuracy.** By Example 2, constant-step SGD stalls in a ball of radius $\propto\sqrt{\eta}$, and buying the last digits requires decaying $\eta$, which drops the rate from geometric to roughly $O(1/k)$. Full-batch descent keeps its geometric rate all the way down. If you need the optimum to eight digits — as you might when the fit feeds a hypothesis test — the ordering reverses.
- **Hardware.** The flop count says small batches win, but $b = 100$ under-uses vector units and memory bandwidth, so wall-clock per row is far worse at $b=100$ than at $b = 10^4$. The batch size in real use is chosen where the hardware stops being wasted, not where the statistics are best.
- **Redundancy.** The argument in (b) is entirely about $n \gg p$. If $n$ were comparable to $p$ — a few hundred rows, a hundred features — a mini-batch gradient would be a poor estimate of the full one and the advantage evaporates.
- **Conditioning.** If $\kappa$ is enormous, neither method is acceptable and the honest answer is to change methods (preconditioning, quasi-Newton) rather than to change $b$.

(d) Normal equations cost about $np^2$ to form $X^\top X$ plus $p^3$ to solve it:

$$np^2 = 10^7\cdot 10^4 = 10^{11}, \qquad p^3 = 10^6 \ \text{(negligible)} .$$

A full-batch gradient pass is $2np = 2\times 10^9$. So the direct solve costs about $10^{11}/(2\times10^9) = \mathbf{50}$ **passes** — and it returns the exact optimum. Since almost any ill-conditioned least-squares problem needs far more than 50 gradient passes to converge, at $p = 100$ you should simply solve it directly ([1.3](01-03-linear-regression-and-least-squares.md)).

The implication is the one worth carrying: iterative optimization earns its place here because the loss is **logistic**, not because $n$ is large. Cost scales as $np^2$ for the direct route and $np$ per pass for the iterative one, so it is *large $p$*, or the absence of a closed form, that forces gradient descent — not large $n$ on its own.

</details>

## Flashback

**From Lesson 1.4 (Regularization: ridge and lasso):** Under an orthonormal design ($X^\top X = I$) the unregularised fit gives

$$\hat\beta^{\text{OLS}} = (2.5,\ -1.2,\ 0.5), \qquad \lambda = 1.5 .$$

(a) Give the ridge and the lasso estimates, coordinate by coordinate. (b) Only one of the two penalised objectives can be handed straight to gradient descent. Say which, and precisely what goes wrong with the other. (c) Suppose $X^\top X$ has eigenvalues $9,\ 4,\ 0.25$. Compare the condition number of the least-squares objective with that of the ridge objective at $\lambda = 0.75$, and say what it means for the number of gradient steps.

<details>
<summary>Solution</summary>

(a) Ridge shrinks proportionally by $1/(1+\lambda) = 1/2.5$; lasso [soft-thresholds](../reference.md#soft-thresholding) at $\lambda/2 = 0.75$:

| $\hat\beta^{\text{OLS}}_j$ | ridge $= \hat\beta_j/2.5$ | lasso $= \operatorname{sign}(\hat\beta_j)\,(|\hat\beta_j| - 0.75)_+$ |
|---|---|---|
| $2.5$ | $1$ | $1.75$ |
| $-1.2$ | $-0.48$ | $-0.45$ |
| $0.5$ | $0.2$ | $\mathbf{0}$ |

Ridge keeps all three; lasso kills the coefficient below the threshold and shrinks the survivors by a constant $0.75$ rather than by a constant factor. Note the reversal in the top row: ridge cuts the largest coefficient by $60$ percent while lasso cuts it by only $30$ percent — proportional shrinkage punishes large coefficients hardest, subtractive shrinkage punishes small ones hardest.

(b) **Ridge.** Its objective $\lVert y - X\beta\rVert^2 + \lambda\lVert\beta\rVert_2^2$ is differentiable everywhere and strongly convex, so gradient descent applies directly with $\eta < 2/L$.

The lasso's $\lVert\beta\rVert_1$ is **not differentiable wherever any $\beta_j = 0$** — which is exactly where its solutions live, since producing zeros is the entire point. Two consequences, and the second is the one people miss:

1. Plain subgradient descent still converges, but at $O(1/\sqrt{k})$ instead of geometrically.
2. It **never returns exact zeros**. The iterates hover near zero at $10^{-9}$, so the sparsity you asked for has to be recovered by thresholding after the fact, which is a guess.

The real fixes keep the non-smooth part in closed form: *proximal* gradient descent takes an ordinary gradient step on the smooth part and then applies the soft-threshold operator from part (a) — the soft threshold **is** the proximal operator of the $\ell_1$ norm — and coordinate descent minimises one $\beta_j$ at a time, where the one-dimensional problem also has the soft-threshold closed form. Both return honest zeros.

(c) The least-squares Hessian is $2X^\top X$ and the ridge Hessian is $2(X^\top X + \lambda I)$; the factor 2 cancels out of any condition number.

$$\kappa_{\text{OLS}} = \frac{9}{0.25} = 36, \qquad \kappa_{\text{ridge}} = \frac{9 + 0.75}{0.25 + 0.75} = \frac{9.75}{1} = 9.75 .$$

Optimal contraction factors $(\kappa-1)/(\kappa+1)$: $35/37 = 0.9459$ against $8.75/10.75 = 0.8140$. Steps to shrink the error by $10^{6}$:

$$\frac{\ln 10^{-6}}{\ln 0.9459} = 249 \qquad\text{versus}\qquad \frac{\ln 10^{-6}}{\ln 0.8140} = 68 .$$

So $\lambda$ is not only the bias–variance knob of [1.4](01-04-regularization-ridge-and-lasso.md) — **it is a conditioning knob**. Adding $\lambda$ to every eigenvalue lifts the small ones proportionally far more than the large ones, which is the same "shrink the weak directions hardest" mechanism that made ridge a statistical fix, seen from the optimizer's side. Here it makes training 3.7 times shorter as a side effect.

</details>

## Connections

- **Backward:** [1.5](01-05-logistic-regression-and-classification.md) produced the gradient $X^\top(p-y)$ and no closed form; this lesson is what you do with it. The eigen-decoupling is the [spectral theorem](../../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md) doing the only thing it ever does — turning a coupled quadratic into independent scalars — and it is the same move that read the ridge fit through the SVD in [1.4](01-04-regularization-ridge-and-lasso.md).
- **Forward:** [2.1](02-01-the-perceptron-and-linear-separability.md) shows that the perceptron update *is* stochastic gradient descent, at step size 1, on a particular loss. [4.3](04-03-diagnosing-models-in-practice.md) reads training curves for statistical trouble, so you need to be able to rule out optimization trouble first — a loss that is still falling and a loss that has hit an SGD noise floor look alike for the first few epochs. [4.4](04-04-a-taste-of-neural-networks.md) and [`deep-learning`](../../deep-learning/syllabus.md) run this identical loop on a non-convex surface, where $\eta < 2/L$ still governs local behaviour but $L$ changes as you move.
- **Sideways:** [`convex-optimization` 4.1](../../convex-optimization/lessons/04-01-first-order-methods.md) owns the convergence theory this lesson uses — smoothness, strong convexity, and the accelerated methods that improve $\kappa$ to $\sqrt{\kappa}$; [`statistical-learning`](../../statistical-learning/syllabus.md) (not yet built) treats gradient descent as a convergence theorem rather than a knob you set, and also owns the claim that stopping early is itself a form of regularization — a fact that only makes sense once you know the eigen-directions converge at different speeds, as they do above.
