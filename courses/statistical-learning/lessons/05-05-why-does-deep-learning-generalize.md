# Statistical Learning Theory · Lesson 5.5: Why does deep learning generalize?

> ⏱ ~15 min · Module 5: Nonlinear and modern models · Builds on: [3.4 (VC bounds)](03-04-vc-bounds-and-sample-complexity.md), [3.5 (Rademacher complexity)](03-05-rademacher-complexity.md), [5.4 (neural networks)](05-04-neural-networks-and-backpropagation.md) · Unlocks: [Module 5's boss problem](../syllabus.md), Module 6

## Why this matters

You now hold two beliefs, and they are incompatible.

The first is [Module 3](03-04-vc-bounds-and-sample-complexity.md): learning is possible exactly when capacity is finite and controlled, and if the capacity term swamps $n$ the guarantee is worth nothing. The second is [5.4](05-04-neural-networks-and-backpropagation.md): a network with a million weights has a [VC dimension](../reference.md#vc-dimension) of order $WL\log W$ — tens of millions — and it is trained on tens of thousands of examples, driven to *zero* training error, and then works.

This is the only lesson in the course whose honest answer is **nobody knows**. That is not a reason to skip it. Knowing precisely which piece of the argument fails, which candidate repairs are theorems and which are hopes, is a far more useful state than either "the theory is wrong" or "deep learning is magic" — and it is the state the field is actually in.

## The idea

The decisive experiment is one sentence long.

> Take a network that reaches a test error of roughly $0.1$ on a real image dataset. Replace **every label** with a uniform random class. Retrain: same architecture, same optimiser, same everything. It reaches **zero training error** again.

Sit with what that rules out. The hypothesis class $\mathcal H$ — the architecture and its weight space — is *literally the same object* in the two runs. So is $n$. So is the algorithm. Any bound whose right-hand side is built from $\mathcal H$, $n$ and $\delta$ alone therefore returns the **same number** in both runs, and in the random-label run that number has to be huge, because a model with zero training error and 90-percent population error has a generalization gap of $0.9$.

The bound is not *wrong*. It is a true statement that has been forced to be vacuous — it must accommodate the noise run, so it cannot say anything sharp about the real run.

[3.5](03-05-rademacher-complexity.md) gave you the measurement instrument for exactly this. Its identity says the best training error achievable on random labels *is* the empirical [Rademacher complexity](../reference.md#rademacher-complexity), rescaled: zero error on noise means $\hat{\mathfrak R}_S(\mathcal H) = 1$, the maximum. So the modern network is not a mild case. It is the extreme case.

The one-line diagnosis, and it is the whole lesson:

> **The class has enormous capacity. The algorithm-plus-data pair somehow does not use it.** Every quantity in Module 3 measures the class.

## The formal version

Call $h$ an **interpolator** of $S$ if $\hat R_S(h) = 0$, and call the model **overparameterized** when the number of parameters $p$ exceeds $n$.

**Proposition (no class-only bound can explain this).** Fix $\mathcal H$, $n$, $\delta < 1/2$, and suppose $B(\mathcal H, n, \delta)$ is any quantity such that for **every** distribution $\mathcal D$, with probability at least $1-\delta$ over $S \sim \mathcal D^n$,
$$R(h) \ \le\ \hat R_S(h) + B(\mathcal H, n, \delta) \quad \text{for all } h \in \mathcal H.$$
Let $\mathcal D_{\mathrm{rand}}$ put a uniform label from $K$ classes on each $x$, independently of $x$. If with probability greater than $\delta$ over $S \sim \mathcal D_{\mathrm{rand}}^n$ some $h \in \mathcal H$ interpolates $S$, then
$$B(\mathcal H, n, \delta) \ \ge\ 1 - \tfrac1K.$$

*In words: if your class can memorise noise, then any distribution-free bound built from the class alone is at least as large as the error of guessing — and it applies unchanged to your real data.*

*Proof.* Under $\mathcal D_{\mathrm{rand}}$ the label is independent of $x$ and uniform, so **every** predictor, measurable or not, has 0-1 risk exactly $1 - 1/K$. The event "some $h \in \mathcal H$ interpolates $S$" has probability $> \delta$ and the event "the bound holds" has probability $\ge 1-\delta$, so they intersect. On the intersection, pick that $h$: $1 - 1/K = R(h) \le 0 + B$. $\blacksquare$

With $K = 10$ that is $B \ge 0.9$, for a risk that never exceeds $1$. And $B$ carries no $\mathcal D$, so this is also the bound you are handed on real labels, where the gap is about $0.1$.

**Double descent.** Plot test risk against capacity $p/n$ rather than against $p$, and the picture is not a U. It falls, rises to a spike at the **interpolation threshold** $p = n$, and then falls again as $p$ grows past $n$. The left branch is nothing new: [2.1](02-01-linear-regression-as-learning.md) already gave you the random-design risk
$$\sigma^2\Bigl(1 + \frac{p}{n-p-1}\Bigr),$$
which diverges as $p \to n-1$. You computed the left half of the interpolation peak two modules ago. What is new is that the curve comes back down on the far side.

**[Minimum-norm interpolation](../reference.md#minimum-norm-interpolation) — the one place where "the algorithm restricts the class" is a theorem.** Let $X$ be $n \times p$ with $p \ge n$ and rank $n$. Then:

1. the interpolating set $\{\beta : X\beta = y\}$ is the affine set $\beta_0 + \ker X$, and is infinite as soon as $p > n$;
2. it contains **exactly one** element of smallest Euclidean norm, namely
$$\hat\beta_{\min} \ =\ X^{\top}(XX^{\top})^{-1} y \ =\ X^{+}y;$$
3. gradient descent on the squared loss **started at the origin** converges to that element, because every update lies in the row space of $X$ and the iterates never leave it.

*In words: with more parameters than data there are infinitely many perfect fits, and gradient descent does not pick an arbitrary one — it picks the smallest, which is a regularizer nobody asked for.* This is [2.6](02-06-gradient-descent-the-workhorse.md)'s early-stopping observation taken to its limit, and it is proved in P2.

**The candidates, honestly labelled.**

| candidate | what is actually proved | status |
|---|---|---|
| **Implicit regularization** — the optimiser restricts the reachable set | min-norm result above; for linear predictors on separable data, gradient descent with logistic loss converges *in direction* to the max-margin separator of [4.3](04-03-maximum-margin-classifiers.md) | **theorem for linear models**, conjecture for networks |
| **Norm- and margin-based bounds** on the *learned* weights rather than the class | spectral-norm and margin bounds exist; PAC-Bayes and compression bounds have been driven to non-vacuous values on small real problems | **partial** — true theorems, still loose, and large studies find many such measures correlate poorly with real generalization |
| **Data- and algorithm-dependent capacity** — Rademacher on your distribution, stability, PAC-Bayes | "benign overfitting" is characterized exactly for **linear** regression, in terms of the effective ranks of the covariance | **partial**, and there are constructed settings where *every* uniform-convergence bound is vacuous while the learner generalizes fine |

Two honesty notes that matter. The simplest form of the implicit-regularization conjecture — "gradient descent minimises *some* norm" — is **false**: in matrix factorization there are settings where the implicit bias provably is not the minimiser of any norm. And the third row's last clause is the sharpest available warning: the escape route of computing a better capacity term may be blocked in principle, not merely unfinished.

**So: this is unresolved.** Each row is real progress on a special case, and none of them, today, explains a trained network.

## Picture

![Test risk plotted against capacity p over n. The curve falls to a shallow minimum near 0.22, climbs steeply and runs off the top of the axis at the dashed line p equals n, then falls again through the interpolating regime. Training risk is a nearly flat line reaching zero at the threshold.](assets/05-05-fig1.svg)

Simulated exactly, not sketched: minimum-norm least squares, $n = 40$ samples, $2000$ available features used in a fixed order, signal $\lVert\beta^*\rVert = 1$ with slowly decaying coordinates, noise variance $0.05$, averaged over 400 replicates. Both descents are real; the peak is real; and the peak's *height* is not a stable number, because at $p = n$ the design is square and nearly singular, so the average is dominated by rare unlucky draws.

## Worked examples

**Example 1 (mechanical): how vacuous, exactly.** Take $n = 50{,}000$, $K = 10$ classes, $\delta = 0.05$, and a class that interpolates random labels.

- The Proposition gives $B \ge 1 - 1/10 = 0.9$.
- [3.5](03-05-rademacher-complexity.md)'s bound charges $2\hat{\mathfrak R}_S(\mathcal H)$ plus a confidence term. Zero training error on noise pins $\hat{\mathfrak R}_S = 1$, so it reads
$$R \ \le\ \hat R_S + 2\hat{\mathfrak R}_S(\mathcal H) + 3\sqrt{\frac{\ln(2/\delta)}{2n}} \ =\ 0 + 2 + 3\sqrt{\tfrac{\ln 40}{100000}} \ =\ 2.018.$$
- [3.4](03-04-vc-bounds-and-sample-complexity.md)'s route is no better: a network with $W = 10^6$ weights and $L = 20$ layers has $d_{\mathrm{VC}}$ of order $WL = 2\times 10^7$, and the agnostic bound at $\epsilon = 0.1$, $\delta = 0.05$ asks for $n \ge 9.7 \times 10^{10}$ points — six orders of magnitude more than you have.

The observed error is about $0.1$. Every certificate above is weaker than the free statement $R \le 1$. Notice they fail for *the same reason*: all three are suprema over the class.

**Example 2 (why you'd care): the risk curve and the norm curve are the same curve.** From the simulation behind the Picture — risk, the expected squared norm of the fitted coefficients, and the risk you would have got at the best ridge penalty $\lambda$ for that $p$:

| $p/n$ | test risk | $\mathbb E\lVert\hat\beta\rVert^2$ | best-ridge risk |
|---|---|---|---|
| 0.20 | 0.662 | 0.65 | 0.632 |
| 0.75 | 1.585 | 1.88 | 0.655 |
| 0.95 | 13.95 | 14.34 | 0.681 |
| 1.00 | ~2550 | ~2551 | 0.688 |
| 1.05 | 14.96 | 15.29 | 0.694 |
| 1.50 | 1.162 | 1.13 | 0.750 |
| 2.50 | 0.897 | 0.49 | 0.827 |

Three readings, and the third is the one people skip.

1. **Risk tracks norm, everywhere.** The blow-up at $p = n$ is not mysterious: with $p$ barely equal to $n$ there is essentially one interpolator and it is forced to be enormous. Past the threshold, extra features give the minimum-norm solution more directions in which to be small — at $p/n = 2.5$ the fitted norm is *smaller* than at $p/n = 0.2$, with twelve times the parameters. **That is implicit regularization, visible as a number.**
2. **The second descent is real.** Risk falls from about 15 to 0.90 as capacity triples past the threshold.
3. **And it does not win.** In this instance the interpolating regime never beats the classical minimum ($0.897$ against $0.660$), and **optimally tuned ridge has no peak at all** — its curve stays inside $[0.61, 0.85]$ across the entire sweep, including at $p = n$ where the ridgeless fit is off the chart. Explicit regularization dominates implicit regularization here, and that is a theorem-shaped fact about linear models, not a slogan about big models.

## Watch out

- **You might think** the randomization experiment shows VC theory is *false* — **but actually** every bound in Module 3 remains a true theorem, and the experiment is a *witness for* the VC lower bound, not a counterexample to it: it exhibits precisely the distribution on which the class fails, which is what "distribution-free" invited. What dies is the bound's usefulness as an explanation, not its truth. (P3.)
- **You might think** [double descent](../reference.md#double-descent) means bigger is always better — **but actually** the table above shows a well-chosen small model beating the huge one, and a well-tuned penalty beating both while erasing the peak entirely. The interesting content of double descent is that the region $p \approx n$ is *uniquely bad*, not that $p \gg n$ is uniquely good.
- **You might think** implicit regularization means gradient descent minimises some norm — **but actually** that is a theorem only for least squares from the origin (and, in direction, for separable linear classification). For deeper models there are constructed cases where the implicit bias is provably not the minimisation of any norm at all, so the phrase is a research programme, not a mechanism you can invoke.
- **You might think** zero training error is by definition overfitting — **but actually** "training error zero" and "test error high" were only ever *correlated*, via the capacity argument. When the correlation breaks, the definition should go, not the data. Interpolation with low test error has a name, *benign overfitting*, and in linear regression it has a precise characterization.

## One-liner

> A modern network can fit pure noise, so its class capacity is maximal and every class-only bound about it is true and vacuous; the generalization must come from the algorithm and the data together, which is proved for minimum-norm least squares and conjectured for everything anyone actually trains.

## Problems

**P1 (🟢)** Using the Picture and Example 2's table, name what is happening in each of the three regimes: $p/n$ well below 1, $p/n \approx 1$, and $p/n$ well above 1. For each, say (i) what the training risk is, (ii) which term of [1.2](01-02-the-bias-variance-decomposition.md)'s decomposition is moving and in which direction, and (iii) what would happen to the curve there if you replaced ridgeless fitting with well-tuned ridge.

**P2 (🟡)** Let $X$ be $n \times p$ with $p > n$ and rank $n$, and let $y \in \mathbb R^n$. (a) Show the set of interpolators is non-empty and infinite. (b) Show it contains exactly one minimum-Euclidean-norm element and that it equals $X^{\top}(XX^{\top})^{-1}y$. (c) Verify on
$$X = \begin{pmatrix}1&1&0\\0&1&1\end{pmatrix}, \qquad y = \begin{pmatrix}2\\3\end{pmatrix},$$
giving the minimum-norm solution exactly and comparing its squared norm with the sparse interpolator $(2,0,3)$. (d) Say in one sentence why this is the only entry in the candidates table marked "theorem".

**P3 (🔴)** A colleague says the randomization experiment "proves VC theory is wrong." (a) Name every statement in [3.4](03-04-vc-bounds-and-sample-complexity.md) that the experiment refutes. (b) Identify the quantifier in the VC bound that survives untouched, and explain why the experiment is in fact an *instance* of it rather than a counterexample. (c) State the one thing the experiment does refute, as precisely as the Proposition above allows.

<details>
<summary>Solutions</summary>

**P1**

**Classical regime ($p/n \ll 1$).** (i) Training risk is positive and falling — at $p/n = 0.2$ it is $\sigma^2(1-p/n) \approx 0.04$. (ii) Bias (approximation error) is falling as features are added and variance is rising; their sum is the U, minimised at $p/n \approx 0.22$ with risk $0.660$. (iii) Ridge barely helps: $0.632$ against $0.662$. There is little variance to remove yet.

**Interpolation threshold ($p/n \approx 1$).** (i) Training risk hits zero and stays there. (ii) Bias is small and **variance explodes**: with $p$ just equal to $n$, $X$ is square and nearly singular, so the unique solution has a huge norm — the $p/(n-p-1)$ factor of [2.1](02-01-linear-regression-as-learning.md) diverging. Reported risk about $2550$, and unstable. (iii) Ridge **removes the peak completely**: $0.688$ at $p = n$, in line with its neighbours. A penalty $\lambda > 0$ bounds the smallest eigenvalue of $X^\top X + \lambda I$ away from zero, which is exactly the thing that blew up.

**Interpolating regime ($p/n \gg 1$).** (i) Training risk is zero throughout — it carries no information at all here, which is the point. (ii) Bias keeps falling slowly (more of $\beta^*$ is representable) and **variance falls too**, because the minimum-norm interpolator has more directions in which to be small: the fitted norm drops from $15.3$ to $0.49$. Two terms falling at once is what a second descent *is*. (iii) Ridge is slightly *better* still ($0.827$ against $0.897$ at $p/n = 2.5$) but the gap is closing — implicit and explicit regularization are doing the same job, and ridgeless fitting is catching up.

**P2**

(a) $\operatorname{rank} X = n$ means $X$ maps $\mathbb R^p$ onto $\mathbb R^n$, so some $\beta_0$ satisfies $X\beta_0 = y$: non-empty. And $X\beta = y$ iff $X(\beta - \beta_0) = 0$, so the solution set is the affine set $\beta_0 + \ker X$. By rank–nullity $\dim\ker X = p - n \ge 1$, so it is infinite.

(b) *Uniqueness.* The set is non-empty, closed and convex, and $\beta \mapsto \lVert\beta\rVert^2$ is strictly convex, so the minimiser exists and is unique. *Identification.* Write $\beta = \beta_r + \beta_k$ with $\beta_r \in \operatorname{row}(X)$ and $\beta_k \in \ker X$ — orthogonal complements, so $\lVert\beta\rVert^2 = \lVert\beta_r\rVert^2 + \lVert\beta_k\rVert^2$. The constraint $X\beta = X\beta_r$ does not see $\beta_k$, so setting $\beta_k = 0$ preserves interpolation and strictly decreases the norm unless $\beta_k$ was already zero. Hence the minimiser lies in $\operatorname{row}(X)$: $\beta = X^{\top}a$ for some $a \in \mathbb R^n$. Substituting, $XX^{\top}a = y$, and $XX^{\top}$ is $n \times n$ and invertible because $\operatorname{rank}X = n$. So $a = (XX^{\top})^{-1}y$ and
$$\hat\beta_{\min} = X^{\top}(XX^{\top})^{-1}y = X^{+}y,$$
the pseudoinverse ([`linalg-refresher` 5.2](../../linalg-refresher/lessons/05-02-svd.md)). *(This is the same orthogonal-decomposition move as the representer theorem's proof in [4.2](04-02-rkhs-and-the-representer-theorem.md): split off the component the data cannot see, and note it only costs norm.)*

(c) Here
$$XX^{\top} = \begin{pmatrix}2&1\\1&2\end{pmatrix}, \qquad (XX^{\top})^{-1} = \frac13\begin{pmatrix}2&-1\\-1&2\end{pmatrix}, \qquad (XX^{\top})^{-1}y = \frac13\begin{pmatrix}1\\4\end{pmatrix}.$$
Then
$$\hat\beta_{\min} = X^{\top}\cdot\tfrac13\begin{pmatrix}1\\4\end{pmatrix} = \left(\tfrac13,\ \tfrac53,\ \tfrac43\right),$$
which interpolates ($\frac13+\frac53 = 2$, $\frac53+\frac43 = 3$) and has $\lVert\hat\beta_{\min}\rVert^2 = \frac{1+25+16}{9} = \frac{14}{3} \approx 4.67$. The sparse interpolator $(2,0,3)$ also fits exactly but has squared norm $13$ — nearly three times larger. **Minimum-norm is not minimum-support**: gradient descent's free regularizer is a ridge-flavoured one, not a lasso-flavoured one ([2.3](02-03-ridge-regression-and-shrinkage.md) versus [2.4](02-04-lasso-and-the-geometry-of-sparsity.md)). (Check: $\ker X = \operatorname{span}(1,-1,1)$ and $\hat\beta_{\min}\cdot(1,-1,1) = \frac13-\frac53+\frac43 = 0$, as the proof requires. Gradient descent from the origin does converge to it numerically.)

(d) Because here the algorithm's restriction of the reachable set is written down in closed form — the reachable set is exactly $\operatorname{row}(X)$, and the object it selects is exactly $X^+y$. For a deep network nobody can name the analogous set, which is why every other row of the table is a special case or an empirical correlation.

**P3**

(a) **None.** Every theorem in 3.4 is of the form "with probability at least $1-\delta$, for all $h \in \mathcal H$, $R(h) \le \hat R_S(h) + (\text{capacity term})$." Nothing in the experiment contradicts any such statement — on the random-label run the capacity term is enormous and the observed gap of $0.9$ is comfortably inside it, and on the real run the gap of $0.1$ is inside it too. A bound can only be refuted by a violation, and there is none.

(b) The quantifier that survives is **"for every distribution $\mathcal D$"**. That is precisely what the experiment exploits: it goes looking for the adversarial $\mathcal D$ the quantifier promises to cover, and finds it by shuffling labels. The class genuinely does fail on that distribution — a huge VC dimension really does mean there exists a distribution defeating you at this $n$, and the random-label run *is* that distribution, exhibited. So the experiment **instantiates the fundamental theorem's necessity direction** rather than contradicting it. (The same is true of the "for all $h \in \mathcal H$" quantifier: uniform convergence over the class is exactly the thing the noise run shows must be weak here.)

(c) What is refuted is a claim nobody proved but many people assumed: **that a bound of the form $\hat R_S(h) + B(\mathcal H, n, \delta)$ could explain the observed performance.** The Proposition makes this precise: any such $B$ satisfies $B \ge 1 - 1/K$, so it is vacuous for 0-1 risk. Formally, the failure is that the *explanandum* — a small gap on real data — is not a property of $(\mathcal H, n, \delta)$, since those three are identical across two runs whose gaps differ by a factor of nine. Any correct explanation must mention the distribution, the algorithm, or both.

</details>

## Flashback

**From Lesson 5.3 (Boosting):** a colleague runs four rounds of AdaBoost and reports weighted errors $\epsilon_t = 0.30,\ 0.35,\ 0.40,\ 0.45$ — a decaying edge, which is what a weak learner running out of signal looks like.

(a) Give the certified training-error bound after these four rounds, and compare it with $\exp(-2\sum_t\gamma_t^2)$. (b) If the edge stays pinned at $\gamma = 0.05$ forever, how many rounds in total would certify a training error of at most $0.05$? (c) Boosting also keeps improving *after* training error reaches zero, exactly as an overparameterized network does. Name what the two phenomena share, and one way they differ.

<details>
<summary>Solution</summary>

(a) The bound is $\prod_t 2\sqrt{\epsilon_t(1-\epsilon_t)}$:

| $\epsilon_t$ | $\gamma_t = \frac12 - \epsilon_t$ | factor $2\sqrt{\epsilon_t(1-\epsilon_t)}$ | running product |
|---|---|---|---|
| 0.30 | 0.20 | 0.916515 | 0.916515 |
| 0.35 | 0.15 | 0.953939 | 0.874300 |
| 0.40 | 0.10 | 0.979796 | 0.856635 |
| 0.45 | 0.05 | 0.994987 | 0.852341 |

So training error $\le 0.8523$ — a nearly useless certificate, because the edges are small. With $\sum_t\gamma_t^2 = 0.075$, the looser exponential form gives $e^{-0.15} = 0.8607$, and indeed $0.8523 \le 0.8607$: the exponential form is the weaker of the two, as it must be, and the two agree to two decimals when every $\gamma_t$ is small.

(b) With $\epsilon = 0.45$ the per-round factor is $0.994987$, so we need $0.994987^{\,T} \le 0.05$, i.e.
$$T \ \ge\ \frac{\ln 0.05}{\ln 0.994987} \ =\ 596.15 \quad\Longrightarrow\quad T = 597.$$
(Check: $0.994987^{596} = 0.05004$, $0.994987^{597} = 0.04979$. The cruder $e^{-2T\gamma^2} \le 0.05$ asks for 600.) **Exponential in $T$, but the base is $1 - 2\gamma^2$** — halving the edge quadruples the rounds.

(c) **Shared:** in both cases the training error is a *saturated* statistic — it has hit its floor and stopped carrying information, while something the training error cannot see keeps changing. For boosting that is the margin distribution; for the interpolating network it is the norm of the solution, which Example 2 watched fall as capacity grew. In both cases the naive capacity count (rounds $T$; parameters $p$) is the wrong horizontal axis, and this is why "stop when training error is zero" is bad advice in both settings.

**Different:** boosting's continued improvement has an accepted mechanism with a stated bound behind it — margins, controlled by $R^2/\gamma^2$ from [4.3](04-03-maximum-margin-classifiers.md) — whereas the network case has no such bound, only the candidates table. And boosting's story has a known breaking point: exponential loss weights a permanently misclassified example geometrically, so label noise *does* make boosting overfit, while the double-descent phenomenon persists under moderate noise. One is a partial explanation with known limits; the other is an open problem.

</details>

## Connections

- **Backward:** this is [3.4](03-04-vc-bounds-and-sample-complexity.md)'s P3 cashed in, and the three escapes it named are the three rows of the candidates table. The measuring instrument is [3.5](03-05-rademacher-complexity.md)'s identity, which was written for this; the capacity number is [5.4](05-04-neural-networks-and-backpropagation.md)'s $O(WL\log W)$; the interpolation peak is [2.1](02-01-linear-regression-as-learning.md)'s random-design risk diverging as $p \to n$; and the minimum-norm theorem is the $t \to \infty$ end of [2.6](02-06-gradient-descent-the-workhorse.md)'s early-stopping shrinkage, with the orthogonal-decomposition proof of [4.2](04-02-rkhs-and-the-representer-theorem.md).
- **Forward:** [Module 5's boss problem](../syllabus.md) asks what universal approximation does *not* promise — this lesson supplies the sharpest version of that answer, since existence of a good network is untouched by everything here. [6.4](06-04-density-estimation.md) closes the course with the reason any of this is possible at all: real high-dimensional data is not spread over its ambient space but concentrates near a low-dimensional structure, so the "for every $\mathcal D$" that Module 3 charges you for is buying insurance against distributions nature does not produce.
- **Sideways:** the sibling course fits these models rather than arguing about them — [`machine-learning` 4.4](../../machine-learning/lessons/04-04-a-taste-of-neural-networks.md) for the mechanics and [`deep-learning`](../../deep-learning/syllabus.md) for the engineering — and both are worth reading with this lesson's question in mind. The shape of the argument is not special to learning: a distribution-free worst-case guarantee that must cover an adversary you will never meet is the same trade [`econometrics`](../../econometrics/syllabus.md) makes when it prices robust standard errors, and the same one [`algorithms`](../../algorithms/syllabus.md) makes when worst-case complexity condemns a procedure that is fast on every input anyone runs.
