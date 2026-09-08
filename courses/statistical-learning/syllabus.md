# Statistical Learning Theory — Syllabus

> Tier 2 · 28 lessons · Prereqs: [`probability-theory`](../probability-theory/syllabus.md), [`linalg-refresher`](../linalg-refresher/syllabus.md), [`prob-stat-refresher`](../prob-stat-refresher/syllabus.md) · Roadmap id: `statistical-learning`

## Goal

Understand the principles behind machine learning as a mathematical discipline: how to pose a learning problem, why a model fit on finite data can be trusted on data it has never seen, and what governs the tradeoff between fitting and overfitting. You will set up empirical risk minimization, control the bias–variance tradeoff with regularization, prove and apply generalization bounds (PAC learnability, VC dimension, uniform convergence), and reason about the main model families — linear methods, kernels and margins, trees and ensembles, neural networks, and the unsupervised workhorses (PCA, clustering, EM). Deliberately skipped: deep-learning engineering and tooling (frameworks, GPUs, training tricks), reinforcement learning (a note only), the implementation details of large-scale convex-optimization algorithms, and production/systems concerns — this is the *theory* of why learning works, not a course in shipping models. Its sibling on the methods side is [`machine-learning`](../machine-learning/syllabus.md); see the scope table below for who owns what.

## Scope discipline

This course overlaps [`machine-learning`](../machine-learning/syllabus.md)
(Computer Science) more heavily than any other pair in the library — both cover
ridge, SVMs, trees, ensembles, PCA, k-means and EM. **`machine-learning` was built
first (2026-09-06), so every ceded row below points at a lesson file that exists**;
cite it rather than re-deriving, and assume the reader can follow the link. Each topic has **one owner**;
a ceded topic is still *used* freely here, it is just cited to its owner rather
than re-derived. See the reference card's "Assumed, not taught here" table for the
lookup pointers.

The dividing line: **this course owns the theory of why learning works;
`machine-learning` owns the mechanics of how each method runs and how you judge
it.** A question of the form "what guarantee do I have?" belongs here. A question
of the form "what does this algorithm actually do to my data, and what does it
cost?" belongs there.

| Topic | Owner | Statistical Learning's role |
|---|---|---|
| **The ERM formalism; population vs. empirical risk; the bias–variance decomposition as a theorem** | **this course** | `machine-learning` states the decomposition and cites the proof here |
| **PAC learnability, uniform convergence, VC dimension, Sauer's lemma, Rademacher complexity** | **this course** | the whole of Module 3 is exclusive to this course; nothing else in the library proves a generalization bound |
| **No free lunch and inductive bias as a theorem** | **this course** | 1.4 |
| **Regularization as a Bayesian prior (MAP, Gaussian ↔ ridge, Laplace ↔ lasso); effective degrees of freedom** | **this course** | 2.3, 2.5 |
| **RKHS, positive-definite kernels, the representer theorem** | **this course** | 4.2; `machine-learning` uses kernels computationally and cites the justification here |
| **Overparameterization, interpolation, double descent, implicit regularization** | **this course** | 5.5 |
| **Density estimation: KDE, bandwidth, the curse of dimensionality** | **this course** | 6.4; the only treatment in the library |
| Method mechanics — the perceptron update, the SVM primal→dual by KKT, tree growing and pruning, AdaBoost's reweighting, Lloyd's algorithm, linkage, the E- and M-steps, PCA by eigen/SVD, naïve Bayes | [`machine-learning`](../machine-learning/syllabus.md) [2.2](../machine-learning/lessons/02-02-maximum-margin-classifiers.md), [2.3](../machine-learning/lessons/02-03-soft-margins-and-the-svm-dual.md), [2.5](../machine-learning/lessons/02-05-decision-trees.md), [2.6](../machine-learning/lessons/02-06-bagging-and-random-forests.md), [2.7](../machine-learning/lessons/02-07-boosting.md), [3.2](../machine-learning/lessons/03-02-principal-component-analysis.md), [3.3](../machine-learning/lessons/03-03-k-means-clustering.md), [3.6](../machine-learning/lessons/03-06-the-em-algorithm.md) | used freely as objects to prove things *about*. **Modules 4, 5 and 6 open by citing the corresponding `machine-learning` lesson for the procedure and then spend their fifteen minutes on the objective it optimizes and the guarantee that buys** — never on running it |
| Optimization as a practitioner runs it — learning-rate choice, divergence diagnosis, mini-batching | [`machine-learning` 1.6](../machine-learning/lessons/01-06-gradient-descent-for-learning.md) | **2.6 re-scoped:** convergence *rates* for first-order methods belong to [`convex-optimization` 4.1](../convex-optimization/lessons/04-01-first-order-methods.md) and the practice belongs to `machine-learning`, so 2.6 owns the one thing neither does — why the empirical-risk gradient is an unbiased estimate of the population-risk gradient, and what SGD therefore is and is not optimizing |
| Evaluation and model selection in practice — $k$-fold CV mechanics, the one-standard-error rule, confusion matrices, precision/recall/F1, ROC/AUC, class imbalance, learning curves | [`machine-learning` 4.1](../machine-learning/lessons/04-01-model-selection-and-cross-validation.md), [4.2](../machine-learning/lessons/04-02-classification-metrics.md), [4.3](../machine-learning/lessons/04-03-diagnosing-models-in-practice.md) | 1.3 defines held-out validation as the *estimand* — an unbiased estimate of population risk — and cites the machinery there |
| **$k$-nearest neighbours as a hypothesis class, and its bias–variance profile** | **this course** | claimed here because **no course in the library taught kNN** — `machine-learning` does not cover it either. 1.2 introduces it as the vehicle for the decomposition (the classical one), and boss problem 1 turns it into a concrete trade-off; the *implementation* is nobody's and is not needed |
| The **geometry of why the $\ell_1$ ball produces sparse solutions**, the KKT conditions, and convergence rates for first-order methods | [`convex-optimization`](../convex-optimization/syllabus.md) [5.1](../convex-optimization/lessons/05-01-least-squares-lasso.md), [3.3](../convex-optimization/lessons/03-03-kkt-conditions.md), [4.1](../convex-optimization/lessons/04-01-first-order-methods.md) | 2.4 cites the corner geometry and adds the *statistical* reading — sparsity as a modelling assumption; 4.3–4.4 cite KKT rather than re-deriving the dual |
| Backpropagation as an algorithm; architecture; training dynamics | [`deep-learning`](../deep-learning/syllabus.md) | 5.4 covers a network as a hypothesis class — composition, universal approximation, and what the chain rule computes — and cites the engineering there |
| Identification, causal parameters, valid standard errors | [`econometrics`](../econometrics/syllabus.md) | see the contrast note below; this course targets prediction, not inference about a true parameter |

Neither this course nor `machine-learning` is a prerequisite for the other; they
are siblings and may be built in either order. Cross-citations are lookup
pointers, not gates.

## Dangerous Checklist

When you finish, you can:

- [ ] Set up a supervised learning problem as risk minimization and distinguish population risk, empirical risk, and generalization error
- [ ] Decompose test error into bias, variance, and irreducible noise, and use it to explain overfitting
- [ ] Read ridge as shrinkage along the SVD directions and lasso as sparsity, and say what statistical assumption each penalty encodes
- [ ] Derive the ridge estimator and read it as the MAP estimate under a Gaussian prior
- [ ] Say why the empirical-risk gradient is unbiased for the population-risk gradient, and what SGD is therefore optimizing
- [ ] State what PAC learnability means and prove a finite hypothesis class is learnable
- [ ] Compute the VC dimension of a hypothesis class and turn it into a sample-complexity guarantee
- [ ] Explain the kernel trick and use the representer theorem to justify kernelized learning
- [ ] Explain why a large margin controls capacity independently of the dimension, and read the SVM as regularized risk minimization with a convex surrogate loss
- [ ] Explain how bagging reduces variance and how boosting reduces bias, and read a random forest and AdaBoost as instances
- [ ] State precisely what universal approximation does and does not promise, and say what depth buys a hypothesis class
- [ ] Say what objective PCA, k-means and EM each optimize, and what each one therefore assumes about the data

## Modules

### Module 1: The learning problem

Before any algorithm: what does it even mean to learn from data, and why is overfitting the central enemy.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | What is learning? Loss, risk, and ERM | Frame supervised learning as minimizing expected loss | supervised setup, hypothesis class, loss function, population vs empirical risk, empirical risk minimization |
| 1.2 | The bias–variance decomposition | Split test error into three sources you can reason about | expected test error, bias, variance, irreducible noise, the decomposition for squared loss |
| 1.3 | Overfitting, and train/validation/test | Diagnose and measure generalization honestly | overfitting/underfitting, model complexity, held-out validation, cross-validation, the test set as sacred |
| 1.4 | No free lunch and inductive bias | Understand why assumptions are unavoidable | no-free-lunch theorem, inductive bias, why every learner encodes prior structure |

**Boss problem 1:** $k$-nearest-neighbour regression on the integer grid, target $f(x) = x^2$, labels $y = f(x) + \varepsilon$ with $\mathbb E\varepsilon = 0$ and $\operatorname{Var}\varepsilon = \sigma^2$, using the symmetric neighbourhood for odd $k = 2m+1$. The reference card gives the two ingredients — bias $= m(m+1)/3$ (the same at every $x$) and variance $= \sigma^2/k$ — **use them; you are not asked to re-derive them.** (a) At $\sigma^2 = 36$, tabulate bias$^2$, variance and reducible error for $k = 1, 3, 5, 7, 9$ and give the minimising $k$. (b) The optimal $k$ moves from 3 to 5 as $\sigma^2$ crosses a threshold. Find it exactly, then state which way the optimal $k$ moves when the data gets noisier, and which way when $f$ gets more curved. (c) A colleague reports that $k = 1$ achieves zero training error and concludes it is the best model. Say precisely what $k = 1$'s training error measures, what your table says about its test error, and what that shows about training error as a model-selection criterion.

### Module 2: Linear methods

The workhorses — linear and logistic regression as learning problems, and regularization as the tool that tames them.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Linear regression as learning | Recast least squares as risk minimization | linear model, squared loss, normal equations, the geometry of projection, overfitting with many features |
| 2.2 | Logistic regression and classification | Turn linear scores into calibrated class probabilities | log-odds, sigmoid, cross-entropy loss, decision boundary, maximum likelihood |
| 2.3 | Ridge regression and shrinkage | Shrink coefficients to trade bias for variance | $\ell_2$ penalty, ridge estimator, shrinkage, effective degrees of freedom |
| 2.4 | Lasso and the geometry of sparsity | Get variable selection from an $\ell_1$ penalty | $\ell_1$ penalty, sparsity, constraint-set geometry, ridge vs lasso, the elastic net |
| 2.5 | Regularization as a Bayesian prior | See penalties as prior beliefs about parameters | MAP estimation, Gaussian prior ↔ ridge, Laplace prior ↔ lasso, the bias–variance role of the penalty |
| 2.6 | Gradient descent, the workhorse | Optimize a loss when there is no closed form | gradient descent, learning rate, convexity and convergence, stochastic gradient descent |

**Boss problem 2:** A ridge fit on centred, standardised data whose design matrix has singular values $\sigma = (4,\ 2,\ 1,\ 0.25)$. The card gives the shrinkage factors $\sigma_i^2/(\sigma_i^2+\lambda)$ and the effective degrees of freedom $\mathrm{df}(\lambda) = \sum_i \sigma_i^2/(\sigma_i^2+\lambda)$ — **use them; the derivations are in 2.3 and are not what is being asked.** (a) Compute $\mathrm{df}(\lambda)$ as an exact fraction at $\lambda = 0,\ 1,\ 4$, and say in one sentence what $\mathrm{df}$ counts and why it is not an integer. (b) The MAP reading of 2.5 identifies $\lambda = \sigma^2_{\text{noise}}/\tau^2_{\text{prior}}$. Your noise variance is estimated at $2.0$ and your prior belief is that coefficients have standard deviation $0.5$. Give the $\lambda$ that implies, the resulting $\mathrm{df}$, and the shrinkage factor on each of the four directions. (c) A colleague argues: "ridge is the MAP estimate under a Gaussian prior, so the posterior's 95 percent credible interval is a 95 percent confidence interval for the true $\beta$." Say what is true here and what is not, and name the course that owns the distinction.

### Module 3: Statistical learning theory

The heart of the course: *why* fitting finite data lets you predict new data — with guarantees.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The PAC framework | State precisely what "learnable" means | PAC learnability, realizable case, accuracy $\epsilon$ and confidence $\delta$, sample complexity |
| 3.2 | Finite classes and uniform convergence | Prove finite hypothesis classes are learnable | union bound, Hoeffding's inequality, uniform convergence, generalization for finite $\mathcal{H}$ |
| 3.3 | Shattering and the VC dimension | Measure the capacity of an infinite hypothesis class | shattering, growth function, VC dimension, Sauer's lemma |
| 3.4 | VC bounds and sample complexity | Turn capacity into a generalization guarantee | the fundamental theorem of PAC learning, VC generalization bound, sample-complexity from VC dimension |
| 3.5 | Rademacher complexity (a taste) | See a sharper, data-dependent capacity measure | Rademacher complexity, data-dependent bounds, why it can beat VC, margin connection |

**Boss problem 3:** The hypothesis class of axis-aligned rectangles in the plane (label $+1$ inside, $-1$ outside). **This class is deliberately not used in 3.3, so none of this is on the card.** (a) Exhibit a set of 4 points it shatters, and prove no set of 5 can be shattered. State the VC dimension. (b) Plug that dimension into the realizable VC sample-complexity bound $n \ge \frac{4}{\epsilon}\bigl(d_{\mathrm{VC}}\ln\frac{12}{\epsilon} + \ln\frac{2}{\delta}\bigr)$ at $\epsilon = 0.1$, $\delta = 0.05$, and report $n$. (c) The direct argument for rectangles — the one that never mentions VC dimension — gives $n \ge \frac{4}{\epsilon}\ln\frac{4}{\delta}$, and the *agnostic* VC bound $n \ge \frac{8}{\epsilon^2}\bigl(d_{\mathrm{VC}}\ln\frac{16e}{\epsilon} + \ln\frac{2}{\delta}\bigr)$. Evaluate both at the same $\epsilon,\delta$. You now have three numbers spanning two orders of magnitude for one problem: say what each one is actually promising, and what that spread tells you about using a VC bound to choose a sample size in practice.

### Module 4: Kernels and margins

How to do linear learning in a transformed space you never explicitly build — and why maximizing the margin generalizes.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Feature maps and the kernel trick | Learn nonlinear boundaries with linear machinery | feature map, inner products, the kernel trick, polynomial and RBF kernels |
| 4.2 | RKHS and the representer theorem (a taste) | Justify kernel methods and reduce them to finite problems | reproducing kernel Hilbert space, positive-definite kernels, the representer theorem |
| 4.3 | Maximum-margin classifiers | Pick the boundary with the widest safety gap | separating hyperplane, geometric margin, hard-margin optimization |
| 4.4 | Support vector machines | Handle noise and go nonlinear with kernels | soft margin, hinge loss, slack variables, the dual, support vectors, kernel SVM |

**Boss problem 4:** Margins as a capacity control. Take the separable set with $+1$ at $(3,3)$ and $(4,2)$, and $-1$ at $(1,1)$ and $(0,2)$. **The primal-to-dual mechanics belong to [`machine-learning` 2.2–2.3](../machine-learning/lessons/02-03-soft-margins-and-the-svm-dual.md) and are not asked for here.** (a) Give the maximum-margin direction and the geometric margin $\gamma$, and compute $R = \max_i \lVert x_i\rVert$. (b) The margin bound controls capacity by $R^2/\gamma^2$ rather than by the dimension $d$. Evaluate $R^2/\gamma^2$ for this data and compare it with $d$ in two regimes: $d = 2$ as given, and the same four points mapped by an RBF kernel where $d$ is infinite. Say exactly what the comparison licenses you to claim in each regime — and where the bound is *worse* than simply counting dimensions. (c) The representer theorem says the minimiser lies in the span of the training points. State what that buys you computationally when the feature space is infinite-dimensional, and then state clearly what it does **not** tell you — in particular, whether it offers any guidance on which kernel to choose.

### Module 5: Nonlinear and modern models

Trees, ensembles, and neural networks — the models that win in practice, and a look at why the deepest ones generalize.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Decision trees | Learn interpretable, axis-aligned partitions | recursive partitioning, impurity (Gini/entropy), greedy splitting, pruning, high variance |
| 5.2 | Bagging and random forests | Cut variance by averaging decorrelated trees | bootstrap aggregation, variance reduction, feature subsampling, out-of-bag error |
| 5.3 | Boosting | Cut bias by fitting a sequence of weak learners | AdaBoost, weighted reweighting, gradient boosting, additive models, why boosting resists overfitting |
| 5.4 | Neural networks and backpropagation | Compose simple units into a flexible function, and train it | layers and activations, universal approximation, forward pass, backpropagation as the chain rule |
| 5.5 | Why does deep learning generalize? | Confront the puzzle that classical theory doesn't fully explain | overparameterization, interpolation, double descent, implicit regularization (conceptual) |

**Boss problem 5:** Two claims about flexible models, both of which sound like guarantees and are not. **The forward and backward pass by hand belongs to [`machine-learning` 4.4](../machine-learning/lessons/04-04-a-taste-of-neural-networks.md) and is not asked for here.** (a) Universal approximation says that for any continuous $f$ on a compact set and any $\epsilon > 0$, some one-hidden-layer network is within $\epsilon$ of $f$. Name **three distinct things it does not say** — be precise about each, and say which of the three is the one that actually bites in practice. (b) Bagging averages $B$ predictors with pairwise correlation $\rho$; boosting fits an additive model stagewise on a convex surrogate loss. Say which term of the Module 1 decomposition each one attacks, and justify each answer from its defining equation rather than by assertion. (c) You have a high-variance base learner, a fixed compute budget, and labels you know to be 5 percent mislabelled. Choose bagging or boosting, justify it from (b), and name the single fact about your data that would reverse the choice.

### Module 6: Unsupervised learning

Learning structure without labels — compression, grouping, and generative models.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | Principal component analysis | Compress data to its directions of maximum variance | covariance matrix, eigen-decomposition, variance maximization, PCA via SVD, reconstruction error |
| 6.2 | Clustering and k-means | Partition data into groups by similarity | k-means objective, Lloyd's algorithm, initialization, choosing $k$, limitations |
| 6.3 | Mixture models and EM | Fit soft, probabilistic clusters | Gaussian mixture model, latent variables, the EM algorithm, E-step/M-step, why EM increases likelihood |
| 6.4 | Density estimation | Estimate the distribution the data came from | parametric vs nonparametric, kernel density estimation, bandwidth, the curse of dimensionality |

**Boss problem 6:** Diagnosing a mixture fit. **That k-means is the hard-assignment limit of EM is proved in [`machine-learning` 3.6](../machine-learning/lessons/03-06-the-em-algorithm.md) and stated on this card — take it as given rather than re-deriving it.** (a) An EM fit of a two-component Gaussian mixture returns two components with nearly identical means and mixing weights near $1/2$. Give two structurally different explanations consistent with that output, and the single diagnostic that distinguishes them. (b) Show that the mixture likelihood is invariant under permuting the component labels, and say what breaks if you average parameter estimates across several EM restarts — then give a fix. (c) Using the hard-limit result as given, state what k-means implicitly assumes about cluster shape and relative size, and construct a two-dimensional dataset of at most 12 points where that assumption fails, k-means with $k=2$ returns the wrong partition from every initialization, and a full-covariance GMM recovers the right one. Justify each of the three claims.

## Sources of truth

- Hastie, Tibshirani & Friedman, *The Elements of Statistical Learning* (primary; the standard reference for methods and the bias–variance viewpoint)
- Shalev-Shwartz & Ben-David, *Understanding Machine Learning: From Theory to Algorithms* (the PAC/VC/Rademacher theory, done cleanly)
- Bishop, *Pattern Recognition and Machine Learning* (the Bayesian and probabilistic-model perspective, especially EM and priors)
- James, Witten, Hastie & Tibshirani, *An Introduction to Statistical Learning* (intuition and worked intuition for the applied lessons)

## Notes

- **Reuses the convex-optimization toolkit from [`grad-micro`](../grad-micro/syllabus.md)** (Module 1): convexity, Lagrangians, and KKT conditions are exactly the machinery behind ridge/lasso, the SVM dual, and gradient descent here — the SVM is a constrained QP in the same sense a consumer problem is.
- **Contrast with [`econometrics`](../econometrics/syllabus.md):** both fit models to data, but econometrics targets *identification and inference* (is this coefficient the true causal parameter, with valid standard errors), while this course targets *prediction and generalization* (will this model do well out of sample, whatever the parameters mean). Ridge/lasso appear in both — as regularizers here, as bias-inducing shrinkage to be handled carefully there.
- **[`information-theory`](../information-theory/syllabus.md) supplies the deeper viewpoint:** entropy and mutual information underlie the impurity criteria in decision trees (5.1) and the cross-entropy loss (2.2), and the minimum-description-length (MDL) principle recasts the bias–variance/regularization tradeoff as a coding problem — model complexity is description length.
- Reinforcement learning (learning from reward rather than labeled examples) is a whole separate paradigm and is **noted here only**, not developed.

---

*Scope note (2026-09-01):* written at the start of the Computer Science field
build, before either this course or
[`machine-learning`](../machine-learning/syllabus.md) had lessons, so that the
one-owner rule could be applied by design rather than retrofitted. The two syllabi
were drafted independently and overlap on roughly a dozen topics. The split
assigns **theory and guarantees** here and **method mechanics, optimization
practice, and evaluation** to `machine-learning`, on the "central object" rule: a
VC bound is a theorem about a hypothesis class, while Lloyd's algorithm is a
procedure you trace. Module structure and lesson count are unchanged at 26; what
changed is what each lesson spends its 15 minutes on — most visibly 2.6, 5.1–5.4
and 6.1–6.3, which now argue about objectives and guarantees rather than
re-deriving procedures their sibling owns.


*Revision note (2026-09-07):* **lesson count corrected to 28, all six boss problems
re-aimed, three lessons re-scoped, and two new ownership rows added** — the first
substantial pass over this syllabus since its sibling
[`machine-learning`](../machine-learning/syllabus.md) was actually built on 2026-09-06.
Building second is why there is this much to record: the split could finally be checked
against real lesson files instead of against a plan.

**Count.** The module tables have always listed 28 lessons; the header said "~26" and
`roadmap.json` said 26. The tables are canonical, so both were corrected to 28.

**Boss problems — five of six failed an audit, which is the worst rate in the library.**
Quizzes are open book and boss problems seed the app's quiz synthesis, so a boss problem
that asks for something the card states is forbidden by the `OPEN_BOOK` clause in
`server.js`.

- **Boss 1** asked for the bias and variance of $k$-NN regression — but **no course in the
  library teaches $k$-NN**, `machine-learning` included, so it referenced a method the
  learner had never met. Resolved by claiming $k$-NN-as-a-hypothesis-class for 1.2 (it is
  the classical vehicle for the decomposition, and a hypothesis class is this course's kind
  of object) and re-aiming the boss to a concrete trade-off table plus a judgement about
  training error.
- **Boss 2** asked the learner to derive the ridge estimator, its SVD shrinkage, its
  bias–variance decomposition *and* its MAP equivalence — four results that 2.3 and 2.5
  derive and the card states. It now applies effective degrees of freedom to a concrete
  spectrum, uses the MAP identity $\lambda = \sigma^2_{\text{noise}}/\tau^2_{\text{prior}}$
  to *choose* $\lambda$, and ends on the credible-interval-vs-confidence-interval trap that
  points at [`econometrics`](../econometrics/syllabus.md).
- **Boss 3** used axis-aligned rectangles, which is the canonical worked class 3.3 would
  otherwise use. Fixed by reserving rectangles for the boss and steering 3.3 to intervals
  and half-planes. The boss now also evaluates three different sample-complexity bounds on
  one problem — they span two orders of magnitude, and saying what each actually promises
  is the real exercise.
- **Boss 4** asked for the hard-margin SVM's Lagrangian dual and support vectors, which is
  [`machine-learning` 2.3](../machine-learning/lessons/02-03-soft-margins-and-the-svm-dual.md)'s
  job. Re-aimed to the capacity question this course owns: $R^2/\gamma^2$ against the
  dimension, including the regime where the margin bound is *worse* than counting
  dimensions.
- **Boss 5** asked the learner to run backpropagation by hand — precisely
  [`machine-learning` 4.4](../machine-learning/lessons/04-04-a-taste-of-neural-networks.md),
  which does it as an all-integer trace. Re-aimed to what universal approximation does not
  promise, and to which term of the decomposition bagging and boosting each move.
- **Boss 6** asked for the k-means-as-hard-EM-limit derivation, which
  [`machine-learning` 3.6](../machine-learning/lessons/03-06-the-em-algorithm.md) proves.
  It now takes that result as given and asks for diagnosis, the label-switching invariance,
  and a constructed dataset where k-means fails and a full-covariance GMM does not.
- **Boss 2's, 3's, 4's and 1's answer keys are machine-verified** (the $k$-NN switch
  threshold is exactly $\sigma^2 = 80/3$; $\mathrm{df}(\lambda)$ comes out $4$, $23/10$,
  $197/130$; the margin instance gives $R^2/\gamma^2 = 10$ exactly).

**Lesson re-scoping (module structure and count unchanged).** Three lessons were squeezed
by courses built since this syllabus was drafted. **2.6** was to be "gradient descent as a
convergence theorem", but [`convex-optimization` 4.1](../convex-optimization/lessons/04-01-first-order-methods.md)
owns convergence rates and `machine-learning` 1.6 owns the practice; it now owns the one
thing neither does — why the empirical-risk gradient is unbiased for the population-risk
gradient, and what SGD is therefore optimizing. **4.3–4.4** cede the primal-to-dual
mechanics and own the margin bound and the hinge loss as a convex surrogate. **6.3** cedes
EM's monotonicity proof (built into `machine-learning` 3.6) and owns the variational view —
EM as coordinate ascent on the ELBO — plus what EM does not guarantee.

**Two ownership rows added.** $k$-NN, which nobody owned; and
[`convex-optimization`](../convex-optimization/syllabus.md), whose $\ell_1$ geometry, KKT
conditions and first-order rates this course uses throughout and had never declared.
