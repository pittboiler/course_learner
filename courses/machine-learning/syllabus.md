# Machine Learning — Syllabus

> Computer Science · Tier 2 · ~23 lessons · Prereqs: [linalg-refresher](../linalg-refresher/syllabus.md), [prob-stat-refresher](../prob-stat-refresher/syllabus.md), [convex-optimization](../convex-optimization/syllabus.md) · Roadmap id: `machine-learning`

## Goal

Learn to turn data into predictions that *generalize* — and to know when they won't. You will build the core supervised and unsupervised toolkit from first principles: linear and logistic regression with regularization, support-vector machines and the kernel trick, trees and ensembles, naïve Bayes, PCA, clustering, and the EM algorithm — then learn to select and honestly evaluate any of them with cross-validation and the right metric. The through-line is the bias–variance trade-off: every method here is a different knob on the same tension between fitting your data and fitting the world. Deliberately skipped: deep-learning depth (its own course — this ends with a taste and a handoff) and MLOps/production tooling. This is the methods companion to [`statistical-learning`](../statistical-learning/syllabus.md): where that course proves *that* learning generalizes, this one shows *how* each method works, what it costs, and where it breaks. See the scope table below.

## Scope discipline

This course overlaps [`statistical-learning`](../statistical-learning/syllabus.md)
(Economics & Finance) more heavily than any other pair in the library — both cover
ridge, SVMs, trees, ensembles, PCA, k-means and EM. Each topic has **one owner**;
a ceded topic is still *used* freely here, it is just cited to its owner rather
than re-derived. See the reference card's "Assumed, not taught here" table for the
lookup pointers.

The dividing line: **`statistical-learning` owns the theory of why learning works;
this course owns the mechanics of how each method runs and how you judge it.** A
question of the form "what guarantee do I have?" belongs there. A question of the
form "what does this algorithm actually do to my data, and what does it cost?"
belongs here.

| Topic | Owner | Machine Learning's role |
|---|---|---|
| The ERM formalism; population vs. empirical risk; the bias–variance **decomposition as a theorem** | [`statistical-learning`](../statistical-learning/syllabus.md) | 1.1–1.2 state the decomposition and use it as a diagnostic knob for the rest of the course; the proof is cited, not repeated |
| PAC learnability, uniform convergence, VC dimension, Sauer's lemma, Rademacher complexity | [`statistical-learning`](../statistical-learning/syllabus.md) | never invoked here; this course's generalization claims are empirical (held-out error), not bounded |
| No free lunch, inductive bias as a theorem | [`statistical-learning`](../statistical-learning/syllabus.md) | 1.1 names inductive bias when choosing a hypothesis class and points there |
| Regularization as a Bayesian prior (MAP, Gaussian ↔ ridge, Laplace ↔ lasso); effective degrees of freedom | [`statistical-learning`](../statistical-learning/syllabus.md) | 1.4 derives ridge/lasso as optimization problems and reads them through the SVD; the prior reading is cited |
| RKHS, positive-definite kernels, Mercer's condition, the representer theorem | [`statistical-learning`](../statistical-learning/syllabus.md) | 2.4 uses the kernel trick computationally — which kernels, what they cost, when they overfit |
| Overparameterization, interpolation, double descent, implicit regularization | [`statistical-learning`](../statistical-learning/syllabus.md) | 4.4 flags the puzzle in one sentence on the way to [`deep-learning`](../deep-learning/syllabus.md) |
| Density estimation: KDE, bandwidth selection, the curse of dimensionality | [`statistical-learning`](../statistical-learning/syllabus.md) | not covered; 3.5 models density only as a finite mixture |
| Backpropagation, network architecture, training dynamics | [`deep-learning`](../deep-learning/syllabus.md) | 4.4 is a taste and a handoff only |
| **Method mechanics — the perceptron update, the SVM primal→dual by KKT, tree growing and pruning, AdaBoost's reweighting, Lloyd's algorithm, linkage, the E- and M-steps, PCA by eigen/SVD, naïve Bayes** | **this course** | `statistical-learning` cites these rather than re-deriving them |
| **Optimization as a practitioner runs it — learning-rate choice, divergence diagnosis, mini-batching, convergence in wall-clock** | **this course** | `statistical-learning` 2.6 treats gradient descent as a convergence theorem instead |
| The **geometry** of why the $\ell_1$ ball produces sparse solutions, and the KKT conditions that turn the SVM primal into its dual | [`convex-optimization`](../convex-optimization/syllabus.md) 5.1, 3.3 | 1.4 and 2.3 *use* both results and cite them; what they add is what the solution does to a fit — the shrinkage path, $C$ as a bias–variance knob, and what a support vector tells you about your data |
| **Evaluation and model selection in practice — $k$-fold CV, the one-standard-error rule, confusion matrices, precision/recall/F1, ROC/AUC, class imbalance, learning-curve diagnosis** | **this course** | the honest-error-estimate machinery lives here, not there |

Neither course is a prerequisite for the other; they are siblings and may be built
in either order. Cross-citations here are lookup pointers, not gates.

## Dangerous Checklist

When you finish, you can:

- [ ] Frame a messy real problem as risk minimization: name the features, labels, hypothesis class, and loss
- [ ] Decompose test error into bias, variance, and noise, and say which one a given fix attacks
- [ ] Derive the least-squares and ridge estimators, and read the ridge fit as shrinkage along the SVD directions
- [ ] Choose between ridge and lasso by what you need — stability or sparsity — and explain why lasso zeros weights
- [ ] Fit a logistic regression by maximum likelihood and interpret its weights as log-odds
- [ ] Run gradient (and stochastic gradient) descent, pick a learning rate, and diagnose divergence
- [ ] Set up the maximum-margin SVM, read its support vectors, and apply the kernel trick to get a nonlinear boundary
- [ ] Grow a decision tree by impurity reduction, and explain why bagging, random forests, and boosting each improve on it
- [ ] Classify with naïve Bayes and state exactly which independence assumption you're buying
- [ ] Compress data with PCA and cluster it with k-means, hierarchical linkage, or a Gaussian mixture
- [ ] Derive and run one step of EM, and explain why k-means is its hard-assignment limit
- [ ] Estimate out-of-sample error with k-fold cross-validation and pick the right metric — precision, recall, F1, or AUC — for the problem

## Modules

### Module 1: Foundations and linear models

Everything downstream is a variation on one idea — minimize a loss without overfitting — so we build that idea carefully on the most transparent models there are: lines.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The learning problem | Frame any learning task as minimizing risk | supervised vs unsupervised, features & labels, hypothesis class, loss function, risk vs empirical risk |
| 1.2 | Generalization and the bias–variance trade-off | Explain why a model that nails the training set can fail in the wild | train/test error, overfitting & underfitting, bias–variance decomposition, model complexity |
| 1.3 | Linear regression and least squares | Fit and interpret a linear model, and see the fit as a projection | design matrix, normal equations, orthogonal projection, residuals, $R^2$ |
| 1.4 | Regularization: ridge and lasso | Trade a little bias for a lot less variance, and select features while you're at it | ridge ($\ell_2$), lasso ($\ell_1$), shrinkage, sparsity, the regularization path |
| 1.5 | Logistic regression and classification | Turn a linear model into a calibrated classifier | sigmoid, log-odds, cross-entropy loss, decision boundary, maximum likelihood |
| 1.6 | Optimization for learning: gradient descent | Minimize a loss when there's no closed form | gradient descent, learning rate, stochastic & mini-batch GD, convergence & divergence |

**Boss problem 1:** A ridge fit on centred, standardised data. The design matrix's SVD $X = U\Sigma V^\top$ has singular values $\sigma = (6,\ 3,\ 1,\ 0.2)$, and the response projected onto the left-singular vectors is $U^\top y = (12,\ 6,\ 4,\ 5)$. The reference card gives the shrinkage form $\hat y_\lambda = \sum_i u_i\,\frac{\sigma_i^2}{\sigma_i^2+\lambda}\,(u_i^\top y)$ — **use it; you are not asked to re-derive it.** (a) Compute the four shrinkage factors at $\lambda = 1$ as exact fractions, and tabulate the four components of $\hat y_1$ in the $u_i$ basis beside the OLS components. (b) The fourth direction contributes 5 to the OLS fit off a singular value of only $0.2$. Say what that combination tells you about the design matrix, compute the coefficient magnitude along that direction under OLS $\big((u_i^\top y)/\sigma_i\big)$ and under ridge $\big(\sigma_i (u_i^\top y)/(\sigma_i^2+\lambda)\big)$, and state which single direction $\lambda = 1$ has spent almost all of its effect on. (c) A colleague sees that $\lambda = 1$ beats OLS on this data's held-out set and concludes "ridge dominates OLS." Say precisely what the four shrinkage factors license and what they don't — including what would have to be true of a dataset for $\lambda = 1$ to make the fit *worse*.

### Module 2: Classification — margins, trees, and ensembles

Two great families of classifiers: geometric ones that draw the best boundary (perceptron → SVM → kernels) and combinatorial ones that carve space and then vote (trees → forests → boosting).

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The perceptron and linear separability | Learn a separating hyperplane one mistake at a time | perceptron update rule, linear separability, convergence theorem, its limits (XOR) |
| 2.2 | Maximum-margin classifiers | Pick the *safest* separating hyperplane, not just any | functional & geometric margin, hard-margin SVM, the primal quadratic program |
| 2.3 | Soft margins and the SVM dual | Handle non-separable data and expose the support vectors | slack variables, hinge loss, the cost $C$, Lagrangian dual, support vectors |
| 2.4 | The kernel trick | Get nonlinear boundaries without ever computing the feature map | feature maps, kernel $K(x,z)=\phi(x)^\top\phi(z)$, polynomial & RBF kernels, Mercer's condition (taste) |
| 2.5 | Decision trees | Carve feature space with axis-aligned questions | recursive partitioning, impurity (Gini & entropy), information gain, pruning, interpretability |
| 2.6 | Bagging and random forests | Average many noisy trees into one stable predictor | bootstrap resampling, variance reduction, out-of-bag error, feature subsampling |
| 2.7 | Boosting | Build a strong learner from a sequence of weak ones | AdaBoost, example reweighting, additive models, gradient boosting (taste), bias reduction |

**Boss problem 2:** Three short questions spanning the module's two families. (a) *Hard margin.* The points $(0,0)$ and $(2,0)$ are labelled $-1$; $(0,4)$ and $(2,4)$ are labelled $+1$. Give the maximum-margin $w$ and $b$ in the canonical scaling $y_i(w^\top x_i + b) \ge 1$, the geometric margin, and the support vectors. Then move the point $(2,4)$ to $(2,9)$ and state what changes — $w$, $b$, the margin, the support-vector list — and why. (b) *Forests under a budget.* Averaging $B$ identically distributed trees with pairwise correlation $\rho$ gives variance $\rho\sigma^2 + \frac{1-\rho}{B}\sigma^2$. Forest A has $B = 500$, $\rho = 0.05$; forest B has $B = 50$, $\rho = 0.5$. Compute each variance as a multiple of $\sigma^2$, say which forest you buy, and name the one fact about forest B that would change your answer. (c) *Break the weak learner.* Exhibit a training set of four points on the real line, with decision stumps as the weak-learner class, on which AdaBoost makes **no progress at all** — no matter how many rounds it runs. Give the weighted error $\epsilon_1$ and the weight $\alpha_1$ your instance forces, name the assumption it violates, and say in one sentence what property of the data is really at fault.

### Module 3: Probabilistic and unsupervised learning

Drop the labels. Now the task is to model the data itself — its density, its directions of variation, its groups — and a single algorithm, EM, ties the probabilistic and clustering views together.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Naïve Bayes | Classify by modeling how each class *generates* data | Bayes' rule, class-conditional densities, conditional independence, MAP decision, why "naïve" still works |
| 3.2 | Principal component analysis | Compress data onto its directions of greatest variance | covariance matrix, eigenvectors, projection, explained variance, the SVD connection |
| 3.3 | k-means clustering | Partition data into $k$ groups by proximity | within-cluster variance, Lloyd's algorithm, centroid updates, initialization & choosing $k$ |
| 3.4 | Hierarchical clustering | Build a whole tree of nested clusters at once | agglomerative merging, linkage (single/complete/average/Ward), dendrograms, cutting the tree |
| 3.5 | Gaussian mixture models | Model clusters as overlapping Gaussians with soft membership | mixture density, latent component, responsibilities, mixture likelihood |
| 3.6 | The EM algorithm | Fit latent-variable models by alternating guess and update | E-step & M-step, expected complete log-likelihood, monotone ascent, k-means as the hard limit |

**Boss problem 3:** Fit a two-component, equal-weight, unit-variance ($\sigma=1$) 1-D Gaussian mixture to the four points $\{-2,-1,1,2\}$, initialized at $\mu_A=-3$, $\mu_B=3$. (a) Run one E-step: compute the responsibility $r_A(x)=\Pr(\text{component }A\mid x)$ for each point (the $1/\sqrt{2\pi}$ factors cancel — you only need $e^{-(x-\mu)^2/2}$). (b) Run the M-step: update $\mu_A$ and $\mu_B$ as responsibility-weighted means. (c) Re-run one E-step and one M-step from the *different* initialization $\mu_A = -0.5$, $\mu_B = +0.5$, and compare the two runs: from one of them EM's first step lands where k-means would, and from the other it does not. Say which, give both pairs of updated means, and explain what feature of the responsibilities accounts for the difference.

### Module 4: Evaluation and the road to neural nets

A model is only as good as your estimate of how it does on data it hasn't seen — so we close the loop with honest evaluation, then open the door to the next course.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Model selection and cross-validation | Estimate out-of-sample error honestly, then tune on it | train/validation/test split, $k$-fold CV, hyperparameters, the one-standard-error rule |
| 4.2 | Classification metrics | Measure a classifier when accuracy lies | confusion matrix, precision & recall, F1, ROC curve, AUC, imbalanced data |
| 4.3 | Diagnosing models in practice | Read learning curves to choose your next move | learning & validation curves, high bias vs high variance, more data vs more features |
| 4.4 | A taste of neural networks | See a net as stacked logistic units and preview what's next | neuron & activation, hidden layers, universal approximation (taste), backprop preview, handoff to `deep-learning` |

**Boss problem 4:** A screening test for a rare disease (prevalence 1%) is run on 1000 patients — 10 sick, 990 healthy. At threshold $t_1$ the classifier flags 20 positive: 8 true positives, 12 false positives. (a) Build the confusion matrix and compute accuracy, precision, recall, and F1. (b) Compute the accuracy of the trivial "always predict healthy" classifier, and say in one sentence what its being *higher* reveals about accuracy on imbalanced data. (c) Lowering the threshold to $t_2$ flags 40 positive: 10 TP, 30 FP. Recompute precision and recall, then state which direction you'd move the threshold for a screening test and justify it in terms of the cost of a false negative versus a false positive.

## Sources of truth

- Hastie, Tibshirani & Friedman, *The Elements of Statistical Learning* — the default for notation, the bias–variance framing, and the tree/ensemble and regularization chapters.
- Bishop, *Pattern Recognition and Machine Learning* — for the probabilistic view: logistic regression, kernels, mixtures, and EM.
- Andrew Ng, Stanford CS229 notes — for the SVM derivation and the applied model-selection/evaluation conventions.

---

*Scope note (2026-09-01):* written at the start of the Computer Science field
build, before either this course or
[`statistical-learning`](../statistical-learning/syllabus.md) had lessons, so that
the one-owner rule could be applied by design rather than retrofitted. The two
syllabi were drafted independently and overlap on roughly a dozen topics. The
split assigns **theory and guarantees** to `statistical-learning` and **method
mechanics, optimization practice, and evaluation** here, on the "central object"
rule: a VC bound is a theorem about a hypothesis class, while Lloyd's algorithm is
a procedure you trace. Module structure and lesson count are unchanged at 23; what
changed is what each lesson spends its 15 minutes on. Under the field's analytical
framing (see `CS-BUILD-BRIEF.md`), this course's problems will lean on cost
derivation, hand-trace and counterexample construction; `statistical-learning`'s
will lean on proof and invariant.


*Revision note (2026-09-06):* **three boss problems re-aimed, one scope row added, two
lessons re-scoped.** Recorded here because boss problems seed the app's quiz synthesis
and quizzes are open book, so a boss problem that asks the learner to reproduce
something the reference card states is worse than useless — the `OPEN_BOOK` clause in
`server.js` forbids exactly that shape.

**Boss 1** asked for the ridge closed form from stationarity and the SVD shrinkage
identity. Lesson 1.4 derives both and the card states both, so as written it was a
transcription exercise against an open page. It now *applies* the shrinkage form — which
it explicitly hands the learner — to a concrete spectrum with a near-collinear direction,
and closes with a judgement about what a shrinkage factor does and does not license.

**Boss 2** asked for the proof that XOR is not linearly separable and for the feature map
that fixes it. Lesson 2.1 owns the impossibility proof and lesson 4.4 owns the
constructive fix, so the problem duplicated two lessons at once. It now spans the module
in three archetypes instead: a hard-margin hand-trace with a perturbation, a
design-under-constraint comparison of two forest configurations, and a counterexample
construction that stalls AdaBoost outright.

**Boss 3** kept its E-step and M-step trace — a hand-trace on a concrete instance passes
the open-book test cleanly — but its part (c) asked the learner to restate the
"k-means is the $\sigma\to0$ limit" fact that lesson 3.6 and the card both carry. It now
re-runs the same two steps from a second initialization where the responsibilities are
*not* near 0 or 1, and asks which run agrees with k-means and why. **Boss 4 passed the
audit unchanged.** All four answer keys are machine-verified.

**Scope.** A row for [`convex-optimization`](../convex-optimization/syllabus.md) was added
to the scope table. Its lessons 5.1 and 5.2 already own the $\ell_1$-ball sparsity
geometry and the KKT route from the SVM primal to its dual; 1.4 and 2.3 cite them rather
than re-deriving, and add what the solution does to a fit. This was caught by grepping the
tree before building, per the one-owner rule.
[`statistical-learning`](../statistical-learning/syllabus.md) is still unbuilt, so every
result ceded to it is **stated in full where it is used** and its pointer goes to that
syllabus, never to a lesson file — the pattern `algorithms` used for
`programming-foundations`.

**Lesson re-scoping (module structure and count unchanged at 23).** Two lessons were
re-aimed because their syllabus phrasing was descriptive rather than analytical, which the
field's framing (`CS-BUILD-BRIEF.md`) does not support. **1.1** was a vocabulary lesson;
its spine is now the choice of loss function as a modelling decision with computable
consequences — the risk minimiser is the conditional mean under squared loss and the
conditional median under absolute loss, so picking the wrong loss answers a different
question than the one you asked. **4.4** was "a taste of neural networks", and a taste
is not analysable; it is now a hand-computed forward and backward pass through a 2–2–1
ReLU net (integers throughout, including a dead unit whose gradient row is exactly zero)
plus the two-hidden-unit XOR construction that closes the loop opened in 2.1. Both keep
their syllabus goal and key-concept list.

Archetype mix as built: cost derivation carries Module 1 and the kernel/ensemble cost
lessons; hand-trace carries Modules 2 and 3 (perceptron updates, AdaBoost reweighting,
Lloyd's, linkage, EM); counterexample construction is concentrated in 1.4, 2.5, 3.1, 3.3
and 4.1; proof-and-invariant appears in 2.6 and 3.6; reduction-and-impossibility in 2.1
and 3.5; design-under-constraint in 1.6, 2.3, 2.4, 4.1 and 4.3.
