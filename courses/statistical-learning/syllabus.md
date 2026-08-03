# Statistical Learning Theory — Syllabus

> Tier 2 · ~26 lessons · Prereqs: [`probability-theory`](../probability-theory/syllabus.md), [`linalg-refresher`](../linalg-refresher/syllabus.md), [`prob-stat-refresher`](../prob-stat-refresher/syllabus.md) · Roadmap id: `statistical-learning`

## Goal

Understand the principles behind machine learning as a mathematical discipline: how to pose a learning problem, why a model fit on finite data can be trusted on data it has never seen, and what governs the tradeoff between fitting and overfitting. You will set up empirical risk minimization, control the bias–variance tradeoff with regularization, prove and apply generalization bounds (PAC learnability, VC dimension, uniform convergence), and reason about the main model families — linear methods, kernels and margins, trees and ensembles, neural networks, and the unsupervised workhorses (PCA, clustering, EM). Deliberately skipped: deep-learning engineering and tooling (frameworks, GPUs, training tricks), reinforcement learning (a note only), the implementation details of large-scale convex-optimization algorithms, and production/systems concerns — this is the *theory* of why learning works, not a course in shipping models.

## Dangerous Checklist

When you finish, you can:

- [ ] Set up a supervised learning problem as risk minimization and distinguish population risk, empirical risk, and generalization error
- [ ] Decompose test error into bias, variance, and irreducible noise, and use it to explain overfitting
- [ ] Fit and interpret ridge and lasso, and explain geometrically why lasso yields sparsity
- [ ] Derive the ridge estimator and read it as the MAP estimate under a Gaussian prior
- [ ] Run gradient descent on a convex loss and state when it converges
- [ ] State what PAC learnability means and prove a finite hypothesis class is learnable
- [ ] Compute the VC dimension of a hypothesis class and turn it into a sample-complexity guarantee
- [ ] Explain the kernel trick and use the representer theorem to justify kernelized learning
- [ ] Derive the maximum-margin classifier and set up the SVM as a constrained optimization
- [ ] Explain how bagging reduces variance and how boosting reduces bias, and read a random forest and AdaBoost as instances
- [ ] Run backpropagation on a small network and say what each gradient means
- [ ] Perform PCA, run k-means and EM, and say what objective each one optimizes

## Modules

### Module 1: The learning problem

Before any algorithm: what does it even mean to learn from data, and why is overfitting the central enemy.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | What is learning? Loss, risk, and ERM | Frame supervised learning as minimizing expected loss | supervised setup, hypothesis class, loss function, population vs empirical risk, empirical risk minimization |
| 1.2 | The bias–variance decomposition | Split test error into three sources you can reason about | expected test error, bias, variance, irreducible noise, the decomposition for squared loss |
| 1.3 | Overfitting, and train/validation/test | Diagnose and measure generalization honestly | overfitting/underfitting, model complexity, held-out validation, cross-validation, the test set as sacred |
| 1.4 | No free lunch and inductive bias | Understand why assumptions are unavoidable | no-free-lunch theorem, inductive bias, why every learner encodes prior structure |

**Boss problem 1:** For $k$-nearest-neighbors regression on a fixed target $f$ with noisy labels, derive the bias and variance terms as functions of $k$, show how increasing $k$ trades one for the other, and identify the $k$ that minimizes expected test error — then explain in words why very small and very large $k$ both fail.

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

**Boss problem 2:** Derive the ridge estimator $\hat\beta = (X^\top X + \lambda I)^{-1} X^\top y$ from scratch, show algebraically how increasing $\lambda$ shrinks each coefficient (use the SVD of $X$), decompose its expected error to show the penalty trades bias for variance, and finally show that $\hat\beta$ is exactly the MAP estimate under a Gaussian prior on $\beta$ with Gaussian noise — reading $\lambda$ as a ratio of variances.

### Module 3: Statistical learning theory

The heart of the course: *why* fitting finite data lets you predict new data — with guarantees.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The PAC framework | State precisely what "learnable" means | PAC learnability, realizable case, accuracy $\epsilon$ and confidence $\delta$, sample complexity |
| 3.2 | Finite classes and uniform convergence | Prove finite hypothesis classes are learnable | union bound, Hoeffding's inequality, uniform convergence, generalization for finite $\mathcal{H}$ |
| 3.3 | Shattering and the VC dimension | Measure the capacity of an infinite hypothesis class | shattering, growth function, VC dimension, Sauer's lemma |
| 3.4 | VC bounds and sample complexity | Turn capacity into a generalization guarantee | the fundamental theorem of PAC learning, VC generalization bound, sample-complexity from VC dimension |
| 3.5 | Rademacher complexity (a taste) | See a sharper, data-dependent capacity measure | Rademacher complexity, data-dependent bounds, why it can beat VC, margin connection |

**Boss problem 3:** Take the hypothesis class of axis-aligned rectangles (or linear threshold functions) in the plane. Show which point sets it can and cannot shatter, compute its VC dimension exactly, then plug that into the VC generalization bound to state a concrete sample-complexity guarantee: how many labeled examples suffice to guarantee test error within $\epsilon$ of training error with probability $1-\delta$.

### Module 4: Kernels and margins

How to do linear learning in a transformed space you never explicitly build — and why maximizing the margin generalizes.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Feature maps and the kernel trick | Learn nonlinear boundaries with linear machinery | feature map, inner products, the kernel trick, polynomial and RBF kernels |
| 4.2 | RKHS and the representer theorem (a taste) | Justify kernel methods and reduce them to finite problems | reproducing kernel Hilbert space, positive-definite kernels, the representer theorem |
| 4.3 | Maximum-margin classifiers | Pick the boundary with the widest safety gap | separating hyperplane, geometric margin, hard-margin optimization |
| 4.4 | Support vector machines | Handle noise and go nonlinear with kernels | soft margin, hinge loss, slack variables, the dual, support vectors, kernel SVM |

**Boss problem 4:** For a small linearly separable dataset, set up the hard-margin SVM as a constrained quadratic program, form the Lagrangian dual, identify the support vectors, and solve for the maximum-margin hyperplane by hand — then explain, using the margin and the representer theorem, why the solution depends only on the support vectors and only through inner products (so a kernel slots in cleanly).

### Module 5: Nonlinear and modern models

Trees, ensembles, and neural networks — the models that win in practice, and a look at why the deepest ones generalize.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Decision trees | Learn interpretable, axis-aligned partitions | recursive partitioning, impurity (Gini/entropy), greedy splitting, pruning, high variance |
| 5.2 | Bagging and random forests | Cut variance by averaging decorrelated trees | bootstrap aggregation, variance reduction, feature subsampling, out-of-bag error |
| 5.3 | Boosting | Cut bias by fitting a sequence of weak learners | AdaBoost, weighted reweighting, gradient boosting, additive models, why boosting resists overfitting |
| 5.4 | Neural networks and backpropagation | Compose simple units into a flexible function, and train it | layers and activations, universal approximation, forward pass, backpropagation as the chain rule |
| 5.5 | Why does deep learning generalize? | Confront the puzzle that classical theory doesn't fully explain | overparameterization, interpolation, double descent, implicit regularization (conceptual) |

**Boss problem 5:** Take a two-layer network on a tiny dataset and run one full step of backpropagation by hand — forward pass, loss, then the gradient of the loss with respect to every weight — labeling what each partial derivative means. Then, conceptually: contrast how bagging (5.2) and boosting (5.3) each move a different term of the Module 1 bias–variance decomposition, and say which you'd reach for given a high-variance base learner.

### Module 6: Unsupervised learning

Learning structure without labels — compression, grouping, and generative models.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | Principal component analysis | Compress data to its directions of maximum variance | covariance matrix, eigen-decomposition, variance maximization, PCA via SVD, reconstruction error |
| 6.2 | Clustering and k-means | Partition data into groups by similarity | k-means objective, Lloyd's algorithm, initialization, choosing $k$, limitations |
| 6.3 | Mixture models and EM | Fit soft, probabilistic clusters | Gaussian mixture model, latent variables, the EM algorithm, E-step/M-step, why EM increases likelihood |
| 6.4 | Density estimation | Estimate the distribution the data came from | parametric vs nonparametric, kernel density estimation, bandwidth, the curse of dimensionality |

**Boss problem 6:** Show that k-means is the hard-assignment limit of EM for a Gaussian mixture with shared spherical covariance: write both objectives, take the covariance-to-zero limit, and show the E-step collapses to nearest-centroid assignment and the M-step to the mean update. Conclude what k-means implicitly assumes about cluster shape — and when that assumption breaks.

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
