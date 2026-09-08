# Machine Learning · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

One sentence runs through the whole course: **choose a hypothesis class, choose a
loss, minimize it on the data you have without wrecking the data you don't have.**
Module 1 builds that sentence on the most transparent models there are — lines —
where the loss you pick *is* the question you asked (squared loss answers with a
conditional mean, absolute loss with a median), the minimizer has a closed form,
and the one dial that matters trades a little bias for a lot less variance. Module
2 swaps the line for two families of classifier and asks what each costs: the
geometric one (perceptron, then maximum margin, then slack, then kernels), where
the fitted model collapses onto a handful of support vectors and the bill moves
off the feature count $p$ and onto the sample count $n$; and the combinatorial one
(trees, then bagging, then boosting), where one high-variance carver is repaired
either by averaging decorrelated copies or by reweighting a sequence of
deliberately weak ones. Module 3 drops the labels — PCA compresses along the
directions carrying the most variance, k-means and linkage carve groups, mixtures
model the density — and then shows that EM is the single machine underneath every
soft version, with k-means as its zero-variance limit. Module 4 closes the loop on
the only question left: what will this do on data it has not seen, and which
number should you even be reading.

Mid-problem, this card is where the closed forms, the optimization thresholds, the
ensemble arithmetic, the impurity and linkage tables, the clustering updates, the
metric definitions, the **cost table**, and the recurring traps live in one place.

*This card covers the whole course (lessons 1.1–4.4).*

## Notation

This course reuses letters badly — worse than any other in the library, because it
merges the vocabularies of optimization, statistics and combinatorics. The table
is in first-appearance order; **the collision table right after it is the one you
will actually come back for.**

| Symbol | Means | First used |
|---|---|---|
| $\mathcal D$ | the distribution over $(x,y)$ pairs — never observed, and the only thing you actually care about | [1.1](lessons/01-01-the-learning-problem.md) |
| $x$, $y$ | the features (what you get to see) and the label (what you want to know) | [1.1](lessons/01-01-the-learning-problem.md) |
| $S$ | the training sample: $n$ i.i.d. draws from $\mathcal D$ | [1.1](lessons/01-01-the-learning-problem.md) |
| $\mathcal H$, $h$ | the hypothesis class you are willing to consider, and one member of it | [1.1](lessons/01-01-the-learning-problem.md) |
| $\ell(\hat y, y)$ | the loss — what predicting $\hat y$ costs when the truth is $y$. **A modelling decision, not an optimizer convenience** | [1.1](lessons/01-01-the-learning-problem.md) |
| $R(h)$, $\hat R_S(h)$ | risk (what you want and cannot compute) and empirical risk (what you can compute and do not want) | [1.1](lessons/01-01-the-learning-problem.md) |
| $\tau$ | the quantile level in the pinball loss, set by the cost ratio of the two mistakes | [1.1](lessons/01-01-the-learning-problem.md) |
| $(u)_+$ | $\max(u,0)$ — the positive part; written $r^{+}$, $r^{-}$ for the two halves of a residual | [1.1](lessons/01-01-the-learning-problem.md) |
| $f$, $\varepsilon$ | the unknown truth and the noise in $y = f(x) + \varepsilon$, with $\mathbb E[\varepsilon] = 0$ | [1.2](lessons/01-02-generalization-and-the-bias-variance-tradeoff.md) |
| $\sigma^2$ | $\operatorname{Var}(\varepsilon)$ — the **irreducible** error; a fact about the world, not about you | [1.2](lessons/01-02-generalization-and-the-bias-variance-tradeoff.md) |
| $\hat f$, $\hat f_S$ | the predictor your procedure produced from training set $S$; bias and variance average over the draw of $S$ | [1.2](lessons/01-02-generalization-and-the-bias-variance-tradeoff.md) |
| $x_0$ | the fixed test point at which the decomposition is stated | [1.2](lessons/01-02-generalization-and-the-bias-variance-tradeoff.md) |
| $n$, $p$ | number of observations, number of features — the two axes every cost in this course is written in | [1.3](lessons/01-03-linear-regression-and-least-squares.md) |
| $X$, $\beta$ | design matrix (rows are observations, columns are features) and coefficient vector | [1.3](lessons/01-03-linear-regression-and-least-squares.md) |
| $\operatorname{col}(X)$ | the column space — the set of predictions the model is *allowed* to make | [1.3](lessons/01-03-linear-regression-and-least-squares.md) |
| $r = y - \hat y$ | the residual vector; $X^\top r = 0$ is the whole content of least squares | [1.3](lessons/01-03-linear-regression-and-least-squares.md) |
| $H$, $h_{ii}$ | the hat matrix $X(X^\top X)^{-1}X^\top$ and row $i$'s **leverage** (its diagonal entry) | [1.3](lessons/01-03-linear-regression-and-least-squares.md) |
| $\mathrm{SST}$, $\mathrm{SSE}$, $R^2$ | total and residual sums of squares, and the fraction of spread explained | [1.3](lessons/01-03-linear-regression-and-least-squares.md) |
| $\lambda$ | the **penalty strength**: the exchange rate between fit and coefficient size | [1.4](lessons/01-04-regularization-ridge-and-lasso.md) |
| $\lVert\beta\rVert_2^2$, $\lVert\beta\rVert_1$ | the ridge and lasso penalties: sum of squares, sum of absolute values | [1.4](lessons/01-04-regularization-ridge-and-lasso.md) |
| $\sigma_i$, $u_i$, $v_i$ | singular values and singular vectors of $X$ in the thin SVD $X = U\Sigma V^\top$ | [1.4](lessons/01-04-regularization-ridge-and-lasso.md) |
| $z = w^\top x + b$ | the **linear score** a classifier computes before squashing or thresholding it | [1.5](lessons/01-05-logistic-regression-and-classification.md) |
| $\sigma(z)$ | the sigmoid $1/(1+e^{-z})$ — a *function*, not a standard deviation | [1.5](lessons/01-05-logistic-regression-and-classification.md) |
| $p_i$ | the fitted probability $\sigma(z_i)$ for row $i$ | [1.5](lessons/01-05-logistic-regression-and-classification.md) |
| $\eta$ | the learning rate — the single number that decides whether descent descends | [1.6](lessons/01-06-gradient-descent-for-learning.md) |
| $\mu$, $L$, $\kappa$ | smallest and largest Hessian eigenvalue (flattest and sharpest curvature) and their ratio $\kappa = L/\mu$ | [1.6](lessons/01-06-gradient-descent-for-learning.md) |
| $\rho(\eta)$ | the per-step contraction factor $\max_i \lvert 1-\eta\lambda_i\rvert$; convergence means $\rho < 1$ | [1.6](lessons/01-06-gradient-descent-for-learning.md) |
| $b$ (batch) | mini-batch size; gradient noise falls like $1/\sqrt{b}$ while cost rises like $b$ | [1.6](lessons/01-06-gradient-descent-for-learning.md) |
| $y_i \in \{-1,+1\}$ | the margin-family label encoding. **Module 1 used $\{0,1\}$** — every sign in a formula depends on which | [2.1](lessons/02-01-the-perceptron-and-linear-separability.md) |
| $w$, $b$ | the separating hyperplane's normal vector and intercept | [2.1](lessons/02-01-the-perceptron-and-linear-separability.md) |
| $\gamma$ (margin) | the margin of a **unit** separator $w^*$: $\min_i y_i(w^{*\top}x_i)$ | [2.1](lessons/02-01-the-perceptron-and-linear-separability.md) |
| $R$ (radius) | $\max_i\lVert x_i\rVert$ — how wide the data is; pairs with $\gamma$ in every margin bound | [2.1](lessons/02-01-the-perceptron-and-linear-separability.md) |
| $\hat\gamma_i$, $\gamma_i$ | functional margin $y_i(w^\top x_i + b)$ and geometric margin (that, divided by $\lVert w\rVert$) | [2.2](lessons/02-02-maximum-margin-classifiers.md) |
| $\xi_i$ | **slack**: point $i$'s personal allowance to fall short of the margin. Measured in functional, not geometric, units | [2.3](lessons/02-03-soft-margins-and-the-svm-dual.md) |
| $C$ (SVM) | the price of a unit of slack. **Large $C$ means LESS regularization** — see the collision table | [2.3](lessons/02-03-soft-margins-and-the-svm-dual.md) |
| $\alpha_i$ | the dual multiplier on point $i$'s margin constraint — the shadow price of that constraint, in $[0,C]$ | [2.3](lessons/02-03-soft-margins-and-the-svm-dual.md) |
| $\phi$ (feature map) | the lift into a higher-dimensional space that a kernel refuses to perform | [2.4](lessons/02-04-the-kernel-trick.md) |
| $K(x,z)$, $K_{ij}$ | the kernel and the Gram matrix's entries — the only view of the data the dual ever gets | [2.4](lessons/02-04-the-kernel-trick.md) |
| $\gamma$ (RBF) | the RBF bandwidth; each point's bump has width about $1/\sqrt{\gamma}$ | [2.4](lessons/02-04-the-kernel-trick.md) |
| $n_{\mathrm{SV}}$ | number of support vectors — sets **prediction** cost, and grows with $n$ on noisy data | [2.4](lessons/02-04-the-kernel-trick.md) |
| $p_k$ | the fraction of a node's rows in class $k$ — a *proportion*, not a feature count | [2.5](lessons/02-05-decision-trees.md) |
| $I(t)$, $\Delta(s)$ | a node's impurity, and the information gain of split $s$ | [2.5](lessons/02-05-decision-trees.md) |
| $\alpha$ (pruning), $\lvert T\rvert$ | the price charged per leaf, and the number of leaves in tree $T$ | [2.5](lessons/02-05-decision-trees.md) |
| $B$ | number of trees in an ensemble — the one hyperparameter you can buy with hardware | [2.6](lessons/02-06-bagging-and-random-forests.md) |
| $\rho$ (forest) | pairwise correlation between **two trees' predictions at one test point**, not between features | [2.6](lessons/02-06-bagging-and-random-forests.md) |
| $m$ (mtry) | features considered per split; $\lfloor\sqrt p\rfloor$ classification, $\lfloor p/3\rfloor$ regression | [2.6](lessons/02-06-bagging-and-random-forests.md) |
| $w_t(i)$, $Z_t$ | AdaBoost's weight on point $i$ at round $t$, and the round's normaliser | [2.7](lessons/02-07-boosting.md) |
| $\epsilon_t$, $\alpha_t$, $\gamma_t$ | round $t$'s **weighted** error, its vote weight, and its edge $\gamma_t = \tfrac12 - \epsilon_t$ | [2.7](lessons/02-07-boosting.md) |
| $T$ (rounds) | number of boosting rounds — chosen by cross-validation, never by training error | [2.7](lessons/02-07-boosting.md) |
| $\pi_k$ (prior) | the class prior $\Pr(y=k)$ in a generative classifier | [3.1](lessons/03-01-naive-bayes.md) |
| $c_{w,k}$, $n_k$, $\lvert V\rvert$ | a word's count in class $k$, the class's token total, and the vocabulary size | [3.1](lessons/03-01-naive-bayes.md) |
| $\alpha$ (pseudocount) | the Laplace-smoothing constant added to every cell | [3.1](lessons/03-01-naive-bayes.md) |
| $S$ (covariance) | the sample covariance matrix $\tilde X^\top\tilde X/(n-1)$ — symmetric, PSD, $p\times p$ | [3.2](lessons/03-02-principal-component-analysis.md) |
| $\tilde X$ | the **centred** data matrix. PCA on uncentred data measures distance from the origin, not spread | [3.2](lessons/03-02-principal-component-analysis.md) |
| $\lambda_i$ (eigenvalue) | the variance along principal component $v_i$. **The eigenvalue *is* the variance** | [3.2](lessons/03-02-principal-component-analysis.md) |
| $k$ (clusters) | number of components kept, or clusters asked for — fixed up front, never chosen by the objective | [3.2](lessons/03-02-principal-component-analysis.md), [3.3](lessons/03-03-k-means-clustering.md) |
| $C_j$, $\mu_j$ | cluster $j$ and its centroid | [3.3](lessons/03-03-k-means-clustering.md) |
| $W(C,\mu)$ | within-cluster sum of squares (WCSS, inertia) — the k-means objective | [3.3](lessons/03-03-k-means-clustering.md) |
| $U$, $V$ (clusters) | the two clusters a linkage rule is comparing | [3.4](lessons/03-04-hierarchical-clustering.md) |
| $h$ (height) | the dendrogram height at which you cut; equals the merge distance under that linkage | [3.4](lessons/03-04-hierarchical-clustering.md) |
| $K$ (components) | number of mixture components — a $K$-sided die you never see rolled | [3.5](lessons/03-05-gaussian-mixture-models.md) |
| $\pi_k$ (weight) | the **mixing weight**: the share of the blend contributed by component $k$ | [3.5](lessons/03-05-gaussian-mixture-models.md) |
| $z_i$ (latent) | the unobserved component indicator for point $i$ | [3.5](lessons/03-05-gaussian-mixture-models.md) |
| $r_{ik}$ | the **responsibility** $\Pr(z_i = k \mid x_i)$; each row sums to 1 — your cheapest arithmetic guard | [3.5](lessons/03-05-gaussian-mixture-models.md) |
| $\theta$, $\ell(\theta)$ | the parameter bundle $\{\pi_k,\mu_k,\Sigma_k\}$ and the observed-data log-likelihood | [3.5](lessons/03-05-gaussian-mixture-models.md) |
| $q(z)$, $\mathcal L(q,\theta)$ | a guessed distribution over the missing data, and the lower bound it induces (the ELBO) | [3.6](lessons/03-06-the-em-algorithm.md) |
| $Q(\theta\mid\theta^t)$ | the expected complete-data log-likelihood — what the M-step actually maximises | [3.6](lessons/03-06-the-em-algorithm.md) |
| $N_k = \sum_i r_{ik}$ | a component's **effective count**; check it before believing any mixture fit | [3.6](lessons/03-06-the-em-algorithm.md) |
| $k$ (folds) | number of cross-validation folds; $k_{\mathrm{in}}$, $k_{\mathrm{out}}$ for the nested version | [4.1](lessons/04-01-model-selection-and-cross-validation.md) |
| $\hat f^{-j}$, $e_j$ | the model fitted without fold $j$, and its score on fold $j$ | [4.1](lessons/04-01-model-selection-and-cross-validation.md) |
| $\hat R_{\mathrm{CV}}$, $\mathrm{SE}$ | the CV risk estimate and $s/\sqrt{k}$, the soft ruler around it | [4.1](lessons/04-01-model-selection-and-cross-validation.md) |
| $G$ | number of settings on a tuning grid — the multiplier in every fit-count formula | [4.1](lessons/04-01-model-selection-and-cross-validation.md) |
| $s(x)$, $t$ | the score a classifier emits, and the threshold you apply to it. **A model produces a ranking; you ship a threshold** | [4.2](lessons/04-02-classification-metrics.md) |
| $\mathrm{TP}$, $\mathrm{FP}$, $\mathrm{FN}$, $\mathrm{TN}$ | the four confusion cells. Every metric below is a ratio of two of these and nothing else | [4.2](lessons/04-02-classification-metrics.md) |
| $\pi$ (prevalence) | $\Pr(y=1)$ in the population you deploy on — invisible to ROC, decisive for precision | [4.2](lessons/04-02-classification-metrics.md) |
| $m$ (ladder) | training-set size, the x-axis of a learning curve | [4.3](lessons/04-03-diagnosing-models-in-practice.md) |
| $\phi$ (activation) | the nonlinearity applied to a unit's pre-activation | [4.4](lessons/04-04-a-taste-of-neural-networks.md) |
| $z^{(\ell)}$, $a^{(\ell)}$ | layer $\ell$'s pre-activation and activation; keeping $z$ is what makes the backward pass cheap | [4.4](lessons/04-04-a-taste-of-neural-networks.md) |
| $\delta^{(\ell)}$ | $\partial L/\partial z^{(\ell)}$ — the sensitivity of the loss to a layer's pre-activation | [4.4](lessons/04-04-a-taste-of-neural-networks.md) |
| $\odot$ | entrywise (Hadamard) product — how the ReLU gate is applied to a backward signal | [4.4](lessons/04-04-a-taste-of-neural-networks.md) |

### Symbols that mean different things in different modules

Read this table before you trust any formula you half-remember. Every row below is
a letter that carries two or more incompatible meanings inside this one course.

| Symbol | Meaning A | Meaning B | Meaning C |
|---|---|---|---|
| $\lambda$ | **penalty strength** in ridge and lasso — [1.4](lessons/01-04-regularization-ridge-and-lasso.md), tuned in [4.1](lessons/04-01-model-selection-and-cross-validation.md) | **eigenvalue** of the Hessian ($\lambda_i$, with $\mu$ and $L$ its extremes) — [1.6](lessons/01-06-gradient-descent-for-learning.md) | **eigenvalue** of the covariance matrix, i.e. a variance — [3.2](lessons/03-02-principal-component-analysis.md) |
| $C$ | the **SVM slack cost**, the regularization dial — [2.3](lessons/02-03-soft-margins-and-the-svm-dual.md) | a **cluster** $C_j$ in the partition — [3.3](lessons/03-03-k-means-clustering.md), [3.4](lessons/03-04-hierarchical-clustering.md) | a **class** $C_1$, $C_0$ in the log-odds derivation — [3.1](lessons/03-01-naive-bayes.md) |
| $K$ / $k$ | **kernel** $K(x,z)$ and Gram matrix — [2.4](lessons/02-04-the-kernel-trick.md) | **component count** in a mixture, or class count in naive Bayes — [3.5](lessons/03-05-gaussian-mixture-models.md), [3.1](lessons/03-01-naive-bayes.md) | **cluster count** — [3.3](lessons/03-03-k-means-clustering.md) — and **fold count** — [4.1](lessons/04-01-model-selection-and-cross-validation.md) |
| $\pi_k$ | the **class prior** $\Pr(y=k)$ — [3.1](lessons/03-01-naive-bayes.md) | the **mixture weight** — [3.5](lessons/03-05-gaussian-mixture-models.md), [3.6](lessons/03-06-the-em-algorithm.md) | bare $\pi$ is **prevalence** $\Pr(y=1)$ — [4.2](lessons/04-02-classification-metrics.md) — and also the circle constant inside every Gaussian |
| $r$ | the **residual** $y - \hat y$ — [1.3](lessons/01-03-linear-regression-and-least-squares.md) | the **responsibility** $r_{ik}$, a posterior weight in $[0,1]$ — [3.5](lessons/03-05-gaussian-mixture-models.md), [3.6](lessons/03-06-the-em-algorithm.md) | $r^{+}$, $r^{-}$ are the two halves of a residual in the pinball loss — [1.1](lessons/01-01-the-learning-problem.md) |
| $\gamma$ | the **margin** — of a unit separator in [2.1](lessons/02-01-the-perceptron-and-linear-separability.md), geometric in [2.2](lessons/02-02-maximum-margin-classifiers.md) | the **RBF bandwidth** — [2.4](lessons/02-04-the-kernel-trick.md) | AdaBoost's **edge** $\gamma_t = \tfrac12-\epsilon_t$ — [2.7](lessons/02-07-boosting.md) |
| $\alpha$ | the **dual multiplier** $\alpha_i \in [0,C]$ — [2.3](lessons/02-03-soft-margins-and-the-svm-dual.md), [2.4](lessons/02-04-the-kernel-trick.md) | the **per-leaf price** in cost-complexity pruning — [2.5](lessons/02-05-decision-trees.md) | AdaBoost's **vote weight** $\alpha_t$ — [2.7](lessons/02-07-boosting.md) — and the **Laplace pseudocount** — [3.1](lessons/03-01-naive-bayes.md) |
| $\sigma$ | the **sigmoid function** — [1.5](lessons/01-05-logistic-regression-and-classification.md) | $\sigma^2$, the **irreducible noise** — [1.2](lessons/01-02-generalization-and-the-bias-variance-tradeoff.md), [4.3](lessons/04-03-diagnosing-models-in-practice.md) | $\sigma_i$, a **singular value** — [1.4](lessons/01-04-regularization-ridge-and-lasso.md) — and a **component's standard deviation** — [3.5](lessons/03-05-gaussian-mixture-models.md) |
| $p$ | the **number of features** — [1.3](lessons/01-03-linear-regression-and-least-squares.md) onwards | a **probability**: $p_i$ fitted, $p(x)$ a density, $p_k$ a class fraction at a node — [1.5](lessons/01-05-logistic-regression-and-classification.md), [2.5](lessons/02-05-decision-trees.md), [3.5](lessons/03-05-gaussian-mixture-models.md) | the **polynomial degree** of a kernel — [2.4](lessons/02-04-the-kernel-trick.md). ($d$ is used for the feature count in [2.2](lessons/02-02-maximum-margin-classifiers.md) and [2.4](lessons/02-04-the-kernel-trick.md)) |
| $m$ | **features per split** in a random forest — [2.6](lessons/02-06-bagging-and-random-forests.md) | $\min(P,R)$ in the $F_1$ bound — [4.2](lessons/04-02-classification-metrics.md) | **training-set size**, the learning-curve axis — [4.3](lessons/04-03-diagnosing-models-in-practice.md) |
| $R$ | the **risk** $R(h)$ — [1.1](lessons/01-01-the-learning-problem.md) — and $R(T)$, a tree's training error — [2.5](lessons/02-05-decision-trees.md) | $R^2$, the **coefficient of determination** — [1.3](lessons/01-03-linear-regression-and-least-squares.md) | the data **radius** $\max_i\lVert x_i\rVert$ — [2.1](lessons/02-01-the-perceptron-and-linear-separability.md) — and **recall** — [4.2](lessons/04-02-classification-metrics.md) |
| $H$ | the **hat matrix** and leverages $h_{ii}$ — [1.3](lessons/01-03-linear-regression-and-least-squares.md), [4.1](lessons/04-01-model-selection-and-cross-validation.md) | the **entropy** $H(q)$ — [3.6](lessons/03-06-the-em-algorithm.md) | AdaBoost's **final classifier** $H(x)$ — [2.7](lessons/02-07-boosting.md) |
| $\ell$ | the **loss** $\ell(\hat y,y)$ — [1.1](lessons/01-01-the-learning-problem.md), [4.1](lessons/04-01-model-selection-and-cross-validation.md) | the **log-likelihood** $\ell(\theta)$ — [1.5](lessons/01-05-logistic-regression-and-classification.md), [3.5](lessons/03-05-gaussian-mixture-models.md) | a **layer index** $^{(\ell)}$ — [4.4](lessons/04-04-a-taste-of-neural-networks.md) |
| $T$ | a **tree**, with $\lvert T\rvert$ leaves — [2.5](lessons/02-05-decision-trees.md) | the number of **boosting rounds** — [2.7](lessons/02-07-boosting.md) | (superscript $^\top$ is transpose throughout and is never a $T$) |
| $L$ | the **cross-entropy loss** $L(\theta)$, and any objective — [1.5](lessons/01-05-logistic-regression-and-classification.md), [4.4](lessons/04-04-a-taste-of-neural-networks.md) | the **largest Hessian eigenvalue** (the smoothness constant) — [1.6](lessons/01-06-gradient-descent-for-learning.md) | $\mathcal L(q,\theta)$ is the **evidence lower bound** — [3.6](lessons/03-06-the-em-algorithm.md) |
| $b$ | the **intercept / bias** of a hyperplane — [1.5](lessons/01-05-logistic-regression-and-classification.md), [2.1](lessons/02-01-the-perceptron-and-linear-separability.md) onwards | the **mini-batch size** — [1.6](lessons/01-06-gradient-descent-for-learning.md) | |
| $B$ | the number of **trees** in an ensemble — [2.6](lessons/02-06-bagging-and-random-forests.md) | a mixture **component label** in worked examples — [3.5](lessons/03-05-gaussian-mixture-models.md), [3.6](lessons/03-06-the-em-algorithm.md) | |
| $\phi$ | the **feature map** into the kernel's implied space — [2.4](lessons/02-04-the-kernel-trick.md) | the **activation function** of a neural unit — [4.4](lessons/04-04-a-taste-of-neural-networks.md) | (the lesson leans on the pun: a hidden layer *learns* the lift you had to pick by hand) |
| $U$, $V$, $S$ | **SVD factors** $X = U\Sigma V^\top$ — [1.4](lessons/01-04-regularization-ridge-and-lasso.md), [3.2](lessons/03-02-principal-component-analysis.md) | $U$, $V$ are the two **clusters** a linkage rule compares — [3.4](lessons/03-04-hierarchical-clustering.md); $V$ is the **vocabulary** — [3.1](lessons/03-01-naive-bayes.md) | $S$ is the **training sample** — [1.1](lessons/01-01-the-learning-problem.md) — and the **covariance matrix** — [3.2](lessons/03-02-principal-component-analysis.md) |
| $y$ encoding | $y \in \{0,1\}$ in logistic regression and every metric — [1.5](lessons/01-05-logistic-regression-and-classification.md), [4.2](lessons/04-02-classification-metrics.md) | $y \in \{-1,+1\}$ in the whole margin family — [2.1](lessons/02-01-the-perceptron-and-linear-separability.md) through [2.7](lessons/02-07-boosting.md) | The margin family needs $y^2 = 1$; the probability family needs $y$ to be an indicator. Neither works in the other's formulas |

## Definitions

### Empirical risk

Risk is the average loss over the whole world; empirical risk is the average loss
over the rows you happen to have. The first is what you want and cannot compute;
the second is what you can compute and do not want.

$$R(h) = \mathbb E_{(x,y)\sim\mathcal D}\big[\ell(h(x), y)\big], \qquad \hat R_S(h) = \frac1n\sum_{i=1}^n \ell(h(x_i), y_i).$$

**Empirical risk minimization (ERM)** is $\hat h = \arg\min_{h\in\mathcal H}\hat R_S(h)$ — the leap of faith that
minimizing the second gets you a small value of the first. $\hat R_S(\hat h)$ is
**biased downward** for $R(\hat h)$, and the bias grows with how hard you searched.

*Introduced:* [1.1](lessons/01-01-the-learning-problem.md)

### Pinball loss

Charge a different price for guessing too low than for guessing too high, and the
best constant prediction stops being the mean and becomes a quantile.

$$\ell_\tau(r) = \tau\, r^{+} + (1-\tau)\, r^{-}, \qquad r^{+} = \max(r,0),\ \ r^{-} = \max(-r,0),\ \ r = y - c.$$

Its risk minimizer is the conditional $\tau$-quantile; $\tau = 1/2$ recovers half
the absolute loss. Read the level straight off the cost sheet:
$\tau = c_{\text{under}}/(c_{\text{under}} + c_{\text{over}})$. Charging 3 for
being late and 1 for being early gives $\tau = 3/4$.

*Introduced:* [1.1](lessons/01-01-the-learning-problem.md)

### Bias-variance decomposition

Your expected error at a point is how far your method aims off-centre, plus how
much it wobbles, plus the noise you were never going to predict.

$$\mathbb E\big[(y - \hat f(x_0))^2\big] = \underbrace{\big(\mathbb E[\hat f(x_0)] - f(x_0)\big)^2}_{\text{bias}^2} + \underbrace{\operatorname{Var}\big(\hat f(x_0)\big)}_{\text{variance}} + \underbrace{\sigma^2}_{\text{irreducible}}.$$

Both expectations run over the **draw of the training set**, so bias and variance
are properties of a *procedure*, never of the one model in front of you. Only the
first two terms are reducible, and every method in this course is a different way
of moving error between them. **The proof is ceded to** [`statistical-learning`](../statistical-learning/syllabus.md);
here it is a diagnostic instrument.

*Introduced:* [1.2](lessons/01-02-generalization-and-the-bias-variance-tradeoff.md); read off a curve in [4.3](lessons/04-03-diagnosing-models-in-practice.md)

### Irreducible error

Even a perfect prediction of $f(x_0)$ misses the observed $y$, because $y$ carries
noise: $\sigma^2 = \operatorname{Var}(\varepsilon)$. No model, no data budget and
no cleverness touches it. It is the floor a learning curve converges to — together
with the bias, which is why a converged curve does **not** tell you the Bayes error.

*Introduced:* [1.2](lessons/01-02-generalization-and-the-bias-variance-tradeoff.md)

### Normal equations

Least squares in one line: the residual must be orthogonal to every column of the
design matrix, and that is $p$ linear equations in $p$ unknowns — no iteration, no
learning rate.

$$X^\top X\,\hat\beta = X^\top y \qquad \Longleftrightarrow \qquad X^\top\big(y - X\hat\beta\big) = X^\top r = 0.$$

Row $j$ says $\sum_i x_{ij}r_i = 0$. With an intercept column of ones, row 1 says
$\sum_i r_i = 0$ — which is why residuals sum to zero **only** when you fit an
intercept. Solvable uniquely iff $\operatorname{rank}(X) = p$; when $p > n$ the
fitted $\hat y$ is still unique but $\hat\beta$ lives on a $(p-n)$-dimensional flat.

*Introduced:* [1.3](lessons/01-03-linear-regression-and-least-squares.md)

### Hat matrix

The matrix that puts the hat on $y$: it projects the response orthogonally onto
the column space of $X$.

$$\hat\beta = (X^\top X)^{-1}X^\top y, \qquad \hat y = Hy, \qquad H = X(X^\top X)^{-1}X^\top.$$

Symmetric and **idempotent** ($H^2 = H$ — project twice, land in the same place),
with $\operatorname{tr}(H) = p$, the model's degrees of freedom. Its diagonal
entries $h_{ii}$ are **leverages**, and they are what makes leave-one-out CV free
for a linear smoother. Do **not** compute $\hat\beta$ by forming
$(X^\top X)^{-1}$: that squares the condition number. Factor $X$ directly (QR or SVD).

*Introduced:* [1.3](lessons/01-03-linear-regression-and-least-squares.md); reused in [4.1](lessons/04-01-model-selection-and-cross-validation.md)

### Coefficient of determination

The fraction of the response's spread the model accounts for.

$$\mathrm{SST} = \lVert y - \bar y\mathbf 1\rVert^2, \qquad \mathrm{SSE} = \lVert r\rVert^2, \qquad R^2 = 1 - \frac{\mathrm{SSE}}{\mathrm{SST}}.$$

Pythagoras gives $\mathrm{SST} = \lVert\hat y - \bar y\mathbf 1\rVert^2 + \mathrm{SSE}$ —
**but only with an intercept**, which is why a no-intercept $R^2$ can be negative
and is comparable to nothing. $R^2$ can never decrease when you add a column,
however meaningless the column, so it ranks nothing.

*Introduced:* [1.3](lessons/01-03-linear-regression-and-least-squares.md)

### Ridge regression

The normal equations with $\lambda$ added down the diagonal — buy a little bias,
sell a lot of variance.

$$J_{\text{ridge}}(\beta) = \lVert y - X\beta\rVert^2 + \lambda\lVert\beta\rVert_2^2, \qquad \hat\beta_\lambda = (X^\top X + \lambda I)^{-1}X^\top y.$$

$X^\top X$ is PSD, so every eigenvalue of $X^\top X + \lambda I$ is at least
$\lambda > 0$: **the inverse always exists, even when $p > n$.** Under an
orthonormal design the solution is pure proportional shrinkage,
$\hat\beta_j^{\text{ridge}} = \hat\beta_j^{\text{OLS}}/(1+\lambda)$, so nothing
ever reaches exactly zero. The Bayesian reading (Gaussian prior, MAP) is
**ceded to** [`statistical-learning`](../statistical-learning/syllabus.md).

*Introduced:* [1.4](lessons/01-04-regularization-ridge-and-lasso.md)

### Soft thresholding

Move each coefficient $\lambda/2$ toward the origin and stop when you get there.
This is the lasso's exact solution under an orthonormal design, and the proximal
operator of the $\ell_1$ norm in general.

$$\hat\beta_j^{\text{lasso}} = \operatorname{sign}\big(\hat\beta_j^{\text{OLS}}\big)\Big(\big\lvert\hat\beta_j^{\text{OLS}}\big\rvert - \tfrac{\lambda}{2}\Big)_+ .$$

There is a dead zone of **width $\lambda$** (half-width $\lambda/2$) in which
coefficients are set exactly to zero; outside it the map runs parallel to the
identity. So lasso is harsher on small coefficients and gentler on large ones than
ridge is. **The $\lambda/2$ is a convention**, inherited from writing the fit term
as $\lVert y - X\beta\rVert^2$ rather than $\tfrac12\lVert y - X\beta\rVert^2$;
with the half out front the threshold is $\lambda$. The **geometry** of why the
$\ell_1$ ball produces corners is **ceded to** [`convex-optimization` 5.1](../convex-optimization/lessons/05-01-least-squares-lasso.md).

*Introduced:* [1.4](lessons/01-04-regularization-ridge-and-lasso.md); used again in [1.6](lessons/01-06-gradient-descent-for-learning.md)

### Sigmoid

Squashes the whole real line onto the open interval $(0,1)$, symmetric about
$\sigma(0) = \tfrac12$. It is the inverse of the log-odds map, and its derivative
is expressible in itself — which is why every $\sigma(1-\sigma)$ cancels out of
the logistic gradient.

$$\sigma(z) = \frac{1}{1+e^{-z}}, \qquad \sigma(-z) = 1-\sigma(z), \qquad \sigma'(z) = \sigma(z)\big(1-\sigma(z)\big).$$

*Introduced:* [1.5](lessons/01-05-logistic-regression-and-classification.md)

### Log-odds

Logistic regression is not a model of the probability; it is a **linear model of
the log-odds**, and nothing else about it is new.

$$\log\frac{p(x)}{1-p(x)} = w^\top x + b \qquad \Longleftrightarrow \qquad p(x) = \sigma(w^\top x + b).$$

So $e^{w_j}$ is the **odds ratio** for a one-unit change in feature $j$: it
multiplies the odds, never the probability. Doubling the odds takes $p = 0.4$ to
$0.571$, not to $0.8$. The same additive structure appears in naive Bayes, where
the total is a prior log-odds plus one log-likelihood-ratio term per feature:

$$\log\frac{\Pr(C_1\mid x)}{\Pr(C_0\mid x)} = \log\frac{\pi_1}{\pi_0} + \sum_j \log\frac{\Pr(x_j\mid C_1)}{\Pr(x_j\mid C_0)}.$$

*Introduced:* [1.5](lessons/01-05-logistic-regression-and-classification.md); reused in [3.1](lessons/03-01-naive-bayes.md)

### Cross-entropy loss

The negative Bernoulli log-likelihood — the same quantity as the log-likelihood,
renamed by whoever is speaking.

$$L(\theta) = -\ell(\theta), \qquad \ell(\theta) = \sum_{i=1}^n\big[y_i\log p_i + (1-y_i)\log(1-p_i)\big], \qquad p_i = \sigma(z_i).$$

Its gradient is $\nabla_\theta L = X^\top(p - y)$ — structurally identical to least
squares' $X^\top(\hat y - y)$ — and its Hessian is $X^\top D X$ with
$D = \operatorname{diag}\big(p_i(1-p_i)\big)$, which is PSD, so the objective is
**convex with no local minima**. Squared loss on a sigmoid is not: it is
non-convex in $z$, and at $z=-5$ with $y=1$ it pushes 75 times more weakly than
cross-entropy does.

*Introduced:* [1.5](lessons/01-05-logistic-regression-and-classification.md)

### Linear separability

One hyperplane puts every positive on one side and every negative on the other.

$$\exists\, w:\quad y_i\big(w^\top x_i\big) > 0 \quad \text{for every } i, \qquad y_i\in\{-1,+1\}.$$

**Geometric equivalent:** the data is linearly separable exactly when the **convex
hulls of the two classes are disjoint.** That is the form you use to build a
counterexample: exhibit a point that is simultaneously a convex combination of the
positives and of the negatives. XOR is the canonical failure — $(0,0),(1,1)$
negative and $(0,1),(1,0)$ positive gives $w_1+w_2+2b>0$ and $w_1+w_2+2b<0$.

*Introduced:* [2.1](lessons/02-01-the-perceptron-and-linear-separability.md); repaired constructively in [4.4](lessons/04-04-a-taste-of-neural-networks.md)

### Perceptron update rule

Nudge the boundary across whichever point you just got wrong; do nothing when you
were right.

$$\text{if } y_i\big(w^\top x_i\big) \le 0: \qquad w \leftarrow w + y_i x_i.$$

Start at $w = 0$, cycle through the data, halt after $n$ consecutive examples
produce no mistake. A tie at exactly 0 counts as a mistake. The update improves
that point's score by exactly $\lVert x_i\rVert^2$, since
$y(w+yx)^\top x = y\,w^\top x + \lVert x\rVert^2$. It is stochastic gradient
descent on the perceptron loss $\max(0, -y_i w^\top x_i)$ at $\eta = 1$ — and
because that loss is positively homogeneous, from $w_0 = 0$ **any** $\eta$ makes
the identical mistakes in the identical order.

*Introduced:* [2.1](lessons/02-01-the-perceptron-and-linear-separability.md)

### Perceptron mistake bound

Corrections are capped by how wide the data is relative to how much room the best
separator has. (Novikoff, 1962.)

$$M \;\le\; \left(\frac{R}{\gamma}\right)^{2}, \qquad R = \max_i\lVert x_i\rVert, \qquad \gamma = \min_i y_i\big(w^{*\top}x_i\big),\ \ \lVert w^*\rVert = 1.$$

Proof shape: $w_M^\top w^* \ge M\gamma$ grows **linearly** in $M$, while
$\lVert w_M\rVert \le \sqrt M R$ grows like $\sqrt M$; Cauchy–Schwarz squeezes them
together. Since the bound is finite, the perceptron halts on separable data.
Scale-free: multiply every feature by 10 and $(R/\gamma)^2$ is unchanged. The same
$(R/\gamma)^2$ governs margin-based complexity in [2.2](lessons/02-02-maximum-margin-classifiers.md),
with **no dependence on the dimension of $x$**.

*Introduced:* [2.1](lessons/02-01-the-perceptron-and-linear-separability.md)

### Functional margin

$\hat\gamma_i = y_i(w^\top x_i + b)$ — positive exactly when the point is on the
right side, and larger the further out it sits. **On its own it means nothing:**
replacing $(w,b)$ by $(cw, cb)$ for $c>0$ scales every functional margin by $c$
while leaving the classifier identical point for point.

*Introduced:* [2.2](lessons/02-02-maximum-margin-classifiers.md)

### Geometric margin

The actual perpendicular distance from the point to the hyperplane — the
functional margin with the scale divided out, which is why it is the one that
means something.

$$\gamma_i = \frac{y_i(w^\top x_i + b)}{\lVert w\rVert}, \qquad \gamma = \min_i \gamma_i.$$

In the canonical scaling $\min_i \hat\gamma_i = 1$ this becomes
$\gamma = 1/\lVert w\rVert$. **That is the half-width**; the full corridor between
the two margin lines is $2/\lVert w\rVert$. Confusing them is a factor-of-two error
in every margin claim you make.

*Introduced:* [2.2](lessons/02-02-maximum-margin-classifiers.md); reused in [2.3](lessons/02-03-soft-margins-and-the-svm-dual.md)

### Hard-margin SVM

Among all separators that keep every point at functional margin at least 1, take
the one with the smallest weights — because a small $w$ *is* a wide corridor.

$$\min_{w,b}\ \tfrac12\lVert w\rVert^2 \qquad \text{s.t.}\qquad y_i\big(w^\top x_i + b\big) \ge 1, \quad i = 1,\dots,n.$$

A convex QP, strictly convex in $w$, so **the optimal $w$ is unique**. Feasible
only on separable data. **Support vectors** are the points whose constraint is
active ($y_i(w^\top x_i + b) = 1$); delete any other point — a million of them —
and nothing moves. Geometrically the maximum margin is **half the distance between
the two convex hulls**, and the boundary is the perpendicular bisector of the
shortest segment joining them (not of the closest pair of data *points*).

*Introduced:* [2.2](lessons/02-02-maximum-margin-classifiers.md)

### Hinge loss

What a point pays for failing to clear the margin: exactly zero once it clears,
then linear in the shortfall. It is the slack variable, solved for.

$$\xi_i = \max\big(0,\ 1 - y_i f(x_i)\big), \qquad f(x) = w^\top x + b.$$

Substituting it into the soft-margin primal turns a constrained QP into the
unconstrained penalised form
$\min_{w,b}\ \sum_i \max(0, 1 - y_i f(x_i)) + \tfrac{1}{2C}\lVert w\rVert^2$ —
which is ridge's shape with $\lambda = 1/(2C)$. A training **error** is exactly
$\xi_i > 1$. Slack is measured in **functional** units; the geometric distance
inside the band is $\xi_i/\lVert w\rVert$, so $\xi_i$ is not scale-free.

*Introduced:* [2.3](lessons/02-03-soft-margins-and-the-svm-dual.md)

### SVM dual

The same problem seen through inner products only — which is what makes kernels
possible and what exposes the support vectors.

$$\max_{\alpha}\ \sum_i \alpha_i - \tfrac12\sum_{i,j}\alpha_i\alpha_j\,y_iy_j\,K(x_i,x_j) \qquad \text{s.t.}\qquad 0 \le \alpha_i \le C, \quad \sum_i \alpha_i y_i = 0,$$

with $w = \sum_i \alpha_i y_i x_i$ in the linear case and
$f(x) = \sum_{i:\alpha_i>0}\alpha_i y_i K(x_i,x) + b$ in general. It has **$n$
variables, one per training point, regardless of $p$.** The **KKT route from the
primal to this dual is ceded to** [`convex-optimization` 3.3](../convex-optimization/lessons/03-03-kkt-conditions.md)
and [5.2](../convex-optimization/lessons/05-02-support-vector-machines.md); what
this course uses is the three-way sort those conditions produce:

| $\alpha_i$ | $y_i f(x_i)$ | $\xi_i$ | reading |
|---|---|---|---|
| $0$ | $\ge 1$ | $0$ | outside the margin — delete it and nothing moves |
| $(0,\,C)$ | $= 1$ | $0$ | exactly **on** the margin line |
| $C$ | $\le 1$ | $\ge 0$ | inside the band, or on the wrong side — you are paying for it |

Recover $b$ from a point with $0 < \alpha_i < C$ **only**; a ceiling point gives
the wrong answer, and if every support vector sits at the ceiling, $b$ is
determined only up to an interval.

*Introduced:* [2.3](lessons/02-03-soft-margins-and-the-svm-dual.md); kernelised in [2.4](lessons/02-04-the-kernel-trick.md)

### Gram matrix

The $n \times n$ table of all pairwise similarities $K_{ij} = K(x_i, x_j)$ — the
only view of the data the dual ever gets, and the object whose size decides
whether a kernel method is affordable.

$K$ is a **valid kernel** exactly when every such matrix is symmetric positive
semidefinite (Mercer's condition). A negative eigenvalue makes the dual
non-concave, destroys uniqueness, and voids the solver's convergence guarantee —
which is why handcrafted "similarity" functions are the standard trap. **The
functional-analytic story (RKHS, the representer theorem) is ceded to**
[`statistical-learning`](../statistical-learning/syllabus.md).

*Introduced:* [2.4](lessons/02-04-the-kernel-trick.md)

### RBF kernel

Similarity that decays with distance: every training point casts a bump of
influence of width about $1/\sqrt{\gamma}$, and the implied feature space is
infinite-dimensional.

$$K(x,z) = \exp\big(-\gamma\lVert x - z\rVert^2\big), \qquad \gamma > 0.$$

$\gamma$ is a pure overfitting knob. Push it up and the Gram matrix tends to the
identity, which is positive definite for **any** labelling — so training error goes
to zero, guaranteed rather than earned, while $f(x) \approx b$ everywhere outside
vanishing bubbles and test error falls back to the majority-class rate. Also:
$\lVert x - z\rVert$ is a Euclidean distance, so **the RBF kernel is as
scale-sensitive as k-means and PCA are.**

*Introduced:* [2.4](lessons/02-04-the-kernel-trick.md)

### Gini impurity

The probability you get the label wrong if you guess by drawing a label at random
from the node's own mix.

$$I_{\mathrm{Gini}}(t) = 1 - \sum_k p_k^2 .$$

Binary maximum $\tfrac12$ at $p = \tfrac12$; for small minority fraction $p$ it
behaves like $2p$.

*Introduced:* [2.5](lessons/02-05-decision-trees.md); reused in [2.6](lessons/02-06-bagging-and-random-forests.md)

### Entropy

The average number of bits you would need to transmit the label of a row drawn
from this node.

$$I_{\mathrm{ent}}(t) = -\sum_k p_k \log_2 p_k .$$

Binary maximum **1 bit**, twice Gini's ceiling — which is why gains computed under
the two impurities are never comparable. For small $p$ it behaves like
$p\log_2(1/p)$, so it punishes tiny minorities far harder than Gini does; that
difference is what makes the two rules occasionally disagree about a split (first
possible at $n = 7$). Entropy's information-theoretic content is developed in
[`information-theory` 1.1](../information-theory/lessons/01-01-entropy-uncertainty-surprise.md).

*Introduced:* [2.5](lessons/02-05-decision-trees.md)

### Information gain

Impurity before the split, minus size-weighted impurity after — how much
uncertainty the question bought.

$$\Delta(s) = I(t) - \sum_c \frac{n_c}{n}\, I(c).$$

Always $\ge 0$, because both impurities are concave (Jensen). Under entropy it is
exactly the mutual information between the label and the answer. It is **not**
monotone as you descend: a child can post a larger gain than its parent did. And
it is badly biased toward many-valued features — a customer-ID column scores the
maximum possible gain while predicting nothing. Fixes: *gain ratio* (divide by the
entropy of the split itself), or restrict to binary splits.

*Introduced:* [2.5](lessons/02-05-decision-trees.md)

### Cost-complexity pruning

Charge rent per leaf, then keep the subtree that is worth its rent — ridge's
fit-plus-penalty shape with leaf count in place of $\lVert w\rVert$.

$$R_\alpha(T) = R(T) + \alpha\,\lvert T\rvert,$$

with $R(T)$ the training misclassification rate and $\lvert T\rvert$ the number of
leaves. $\alpha$ is chosen by cross-validation. Sweeping $\alpha$ produces a
**nested sequence** of subtrees, and most subtrees are in no such sequence: a tree
can be optimal for no value of $\alpha$ at all.

*Introduced:* [2.5](lessons/02-05-decision-trees.md)

### Out-of-bag error

A bootstrap sample misses about 37 percent of the rows, so every row has a
ready-made sub-forest that never saw it — a held-out estimate for the price of one
bookkeeping array.

$$\Pr(\text{row } i \text{ is out of bag}) = \Big(1 - \tfrac1n\Big)^{n} \longrightarrow e^{-1} \approx 0.368 .$$

Approach is **from below** with $O(1/n)$ error and it is within one percent of
$e^{-1}$ by $n = 100$. OOB is **pessimistic twice over**: each row is scored by
only about $0.368B$ trees, so you are measuring a forest roughly a third the size
you ship; and each tree trained on only about 63 percent of distinct rows, making
OOB behave more like 3-fold than 10-fold CV. Its folds also overlap rather than
partition, so its standard error is hard to state honestly. It is free and useful;
it is not a test set.

*Introduced:* [2.6](lessons/02-06-bagging-and-random-forests.md); its limits in [4.1](lessons/04-01-model-selection-and-cross-validation.md)

### Decision stump

A one-split tree: "predict $+1$ if $x_j < \theta$, else $-1$" (or its flip). The
deliberately crippled depth-1 learner — high bias, low variance — that boosting
wants, because boosting's job is to remove bias.

*Introduced:* [2.7](lessons/02-07-boosting.md)

### AdaBoost

Find the learner that does best on the current weights, give it a vote
proportional to how surprised you are by its success, then shift weight onto
whatever it got wrong.

Initialise $w_1(i) = 1/n$. For $t = 1,\dots,T$:

$$\epsilon_t = \sum_{i=1}^n w_t(i)\,\mathbf 1\{h_t(x_i) \ne y_i\}, \qquad \alpha_t = \tfrac12\ln\frac{1-\epsilon_t}{\epsilon_t},$$

$$w_{t+1}(i) = \frac{w_t(i)\,e^{-\alpha_t y_i h_t(x_i)}}{Z_t}, \qquad Z_t = \sum_j w_t(j)\,e^{-\alpha_t y_j h_t(x_j)} = 2\sqrt{\epsilon_t(1-\epsilon_t)},$$

and output $H(x) = \operatorname{sign}\big(\sum_t \alpha_t h_t(x)\big)$. Because
$Z_t$ collapses, the per-point multipliers are pure rationals: divide a correct
point's weight by $2(1-\epsilon_t)$ and a wrong point's by $2\epsilon_t$.

**The invariant worth memorising:** after reweighting, the misclassified set
carries total weight exactly $\tfrac12$. Equivalently $h_t$ has weighted error
exactly $1/2$ under $w_{t+1}$ — so AdaBoost never selects the same learner twice
in a row. Note $\epsilon_t \to \tfrac12$ gives $\alpha_t \to 0$ (a coin flip gets
no vote), and $\epsilon_t > \tfrac12$ gives $\alpha_t < 0$, which votes the learner
backwards and is not a bug.

*Introduced:* [2.7](lessons/02-07-boosting.md)

### Exponential loss

$L(y, F) = e^{-yF(x)}$, with $F(x) = \sum_t \alpha_t h_t(x)$ the running score.
AdaBoost is exactly forward-stagewise fitting of this loss: each round picks the
$(\alpha, h)$ that most reduces
$\sum_i e^{-y_i(F_{t-1}(x_i) + \alpha h(x_i))}$ with earlier terms frozen, and the
weight $w_t(i)$ **is** point $i$'s current exponential loss. Swap the loss and take
a gradient step instead and you have gradient boosting. The penalty grows like
$e^{\lvert F\rvert}$ in how wrong a point is, which is exactly why a single
mislabelled row can eat the ensemble.

*Introduced:* [2.7](lessons/02-07-boosting.md)

### Bayes' rule

How plausible class $k$ is after seeing $x$, relative to every other class:
posterior is proportional to prior times likelihood.

$$\Pr(y = k \mid x) = \frac{\pi_k\,\Pr(x\mid y=k)}{\sum_{m=1}^{K}\pi_m\,\Pr(x\mid y=m)}.$$

The denominator is identical for every $k$, so the MAP decision drops it:
$\hat y(x) = \arg\max_k\ \pi_k \Pr(x\mid y=k)$. Naive Bayes then buys
**conditional** independence — independent *within each class*, not overall —
giving $\Pr(x\mid y=k) = \prod_j \Pr(x_j\mid y=k)$, and works in log space to
avoid underflow: $s_k(x) = \log\pi_k + \sum_j\log\Pr(x_j\mid y=k)$. See also
[`prob-stat-refresher` 1.2](../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md).

*Introduced:* [3.1](lessons/03-01-naive-bayes.md)

### Laplace smoothing

Pretend you saw every outcome $\alpha$ extra times in every class, so that "never
observed" stops meaning "impossible".

$$\hat\Pr(w \mid k) = \frac{c_{w,k} + \alpha}{n_k + \alpha\,\lvert V\rvert}.$$

The denominator matches so the estimates still sum to 1 over the vocabulary
$V$; $\alpha = 1$ is the default and $\alpha\to0$ recovers the unsmoothed estimate
and its zero-frequency failure, where a single unseen word vetoes an entire
document and both class scores collapse to zero. For binary features the
denominator is $n_k + 2$. $\alpha$ is a hyperparameter — cross-validate it.

*Introduced:* [3.1](lessons/03-01-naive-bayes.md)

### Covariance matrix

The table of how every pair of features moves together — variances on the
diagonal, covariances off it. **Centre the data first**, or you are measuring
distance from the origin instead of spread.

$$S = \frac{1}{n-1}\,\tilde X^\top\tilde X \qquad (p\times p,\ \text{symmetric},\ \text{positive semidefinite}).$$

PCA is its eigendecomposition: $\operatorname{Var}(u^\top x) = u^\top S u$, so
maximizing variance over unit directions is the Rayleigh-quotient problem, whose
maximum is $\lambda_1$ at $v_1$, then $\lambda_2$ at $v_2$ restricted to
$u \perp v_1$, and so on. The spectral theorem behind that is
[`linalg-refresher` 5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md);
covariance itself is
[`prob-stat-refresher` 3.1](../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md).
Note $\kappa(S) = \kappa(\tilde X)^2$ — forming $S$ squares your conditioning
problem, which is why the SVD route is the numerically sane one.

*Introduced:* [3.2](lessons/03-02-principal-component-analysis.md)

### Explained variance

The total variance is a fixed budget, because $\operatorname{tr}S = \sum_j S_{jj} = \sum_i \lambda_i$.
Component $i$ owns this share of it:

$$\frac{\lambda_i}{\lambda_1 + \cdots + \lambda_p}.$$

Keeping the top $k$ keeps $(\lambda_1+\cdots+\lambda_k)/\operatorname{tr}S$ of the
variance and discards the rest **as reconstruction error** — the same number read
two ways, because $\lVert x\rVert^2 = (u^\top x)^2 + \lVert x - (u^\top x)u\rVert^2$
and the left side does not depend on $u$. Keeping the most is losing the least.

*Introduced:* [3.2](lessons/03-02-principal-component-analysis.md)

### Within-cluster sum of squares

Add up the squared distance from every point to the centre of its own cluster.
Also called inertia; it is the k-means objective, and Ward linkage's merge cost.

$$W(C,\mu) = \sum_{j=1}^{k}\ \sum_{i \in C_j} \big\lVert x_i - \mu_j\big\rVert^2 .$$

Bounded below by 0 and attained on a finite set of assignments, which is what
makes Lloyd's algorithm terminate. Its best achievable value is **non-increasing
in $k$** and hits exactly 0 at $k=n$, so you can never choose $k$ by minimizing
it — the same shape as $R^2$ never falling when you add a column
([1.3](lessons/01-03-linear-regression-and-least-squares.md)) and mixture
log-likelihood never falling when you add a component
([3.5](lessons/03-05-gaussian-mixture-models.md)).

*Introduced:* [3.3](lessons/03-03-k-means-clustering.md); reused in [3.4](lessons/03-04-hierarchical-clustering.md)

### Lloyd's algorithm

Guess centres, assign each point to its nearest, recompute each centre as its
cluster's mean, repeat. This is what everyone means by "k-means": **coordinate
descent on WCSS over two blocks of variables.**

```
LLOYD(x_1..x_n, k, initial centroids mu_1..mu_k):
    repeat
        ASSIGN:  C_j <- { i : j = argmin_m ||x_i - mu_m||^2 }   -- ties broken by index
        UPDATE:  mu_j <- (1/|C_j|) * sum of x_i over i in C_j
    until no assignment changes
    return C, mu
```

Both steps are exact minimizers of their block, so neither can increase $W$: the
assign step minimises each point's own term independently, and the update step
solves $\nabla g(\mu) = -2\sum_{i\in C_j}(x_i - \mu) = 0$, whose unique solution is
the mean. **Termination:** after an update the centroids are a function of the
assignment alone, there are at most $k^n$ assignments, and $W$ never rises — so a
repeated assignment forces the stopping test. What you get is a local minimum in a
weak sense: no single reassignment and no centroid move improves it. Minimizing
$W$ exactly is NP-hard; use k-means++ seeding and multiple restarts, keeping the
lowest WCSS (legitimate, because WCSS needs no labels).

*Introduced:* [3.3](lessons/03-03-k-means-clustering.md)

### Voronoi partition

At any fixed set of centroids, every point sits with its nearest centre — so the
clusters are the Voronoi cells of the centroids: intersections of half-spaces, cut
with the data. With $k=2$ the boundary is the perpendicular bisector of
$\mu_1\mu_2$, a single straight line.

**Consequence, and it is a hard one:** every k-means cluster is **convex**. Two
concentric rings can never come out as two clusters, no matter the initialization.
That is a statement about the objective, not about the search — and the fix is to
change the geometry (a kernel, or the map $x \mapsto \lVert x\rVert^2$) or to
change the objective (single linkage, which recovers *connected* structure).

*Introduced:* [3.3](lessons/03-03-k-means-clustering.md)

### Linkage

A rule for lifting a distance between *points* to a distance between *clusters*.
The choice is the method; the data does not make it for you.

$$d_{\text{single}}(U,V) = \min_{u\in U,\,v\in V} d(u,v), \qquad d_{\text{complete}}(U,V) = \max_{u\in U,\,v\in V} d(u,v),$$

$$d_{\text{average}}(U,V) = \frac{1}{\lvert U\rvert\,\lvert V\rvert}\sum_{u\in U}\sum_{v\in V} d(u,v), \qquad d_{\text{Ward}}(U,V) = \frac{\lvert U\rvert\,\lvert V\rvert}{\lvert U\rvert + \lvert V\rvert}\,\lVert\bar u - \bar v\rVert^2 .$$

Closest pair, furthest pair, average pair — and Ward, which is exactly the amount
by which merging would **increase the WCSS**, making it the greedy bottom-up cousin
of k-means. Single linkage recovers structure that is *connected* (and chains
through bridges); complete linkage recovers structure that is *compact* (and
reports diameters). Single, complete and average are **monotone**, so their
dendrograms are drawable; centroid and median linkage are not and can produce
**inversions** — a bracket below the bracket it contains. Bonus identity: the
single-linkage dendrogram **is** the minimum spanning tree, and cutting at height
$h$ deletes every MST edge longer than $h$.

*Introduced:* [3.4](lessons/03-04-hierarchical-clustering.md)

### Gaussian mixture model

The population is a blend of $K$ Gaussian sub-populations, and $\pi_k$ is the share
contributed by the $k$-th.

$$p(x) = \sum_{k=1}^{K}\pi_k\,\mathcal N(x \mid \mu_k, \Sigma_k), \qquad \pi_k \ge 0,\quad \sum_k \pi_k = 1,$$

equivalently $\Pr(z_i = k) = \pi_k$ and $x_i \mid \{z_i=k\} \sim \mathcal N(\mu_k,\Sigma_k)$
with $z_i$ unobserved. The log-likelihood
$\ell(\theta) = \sum_i \log\big(\sum_k \pi_k\mathcal N(x_i\mid\mu_k,\Sigma_k)\big)$
puts a **log outside a sum**, so it does not split into $K$ separate Gaussian fits
and has no closed form — which is the entire reason EM exists.

**It is also not bounded above.** Park $\mu_A$ on a data point and let
$\sigma_A \to 0$: that point's contribution is $\log\frac{1}{2\sigma_A\sqrt{2\pi}} \to +\infty$
while every other point's is a constant not involving $\sigma_A$. In $p$
dimensions the same thing happens whenever a component captures $p$ points or
fewer, since a sample covariance from $m$ points has rank at most $m-1$. So
**"maximise the likelihood" is not a well-posed instruction for a mixture**, and
no amount of restarting fixes it — you must change the objective or the feasible
set (a variance floor, a minimum count, or a prior).

*Introduced:* [3.5](lessons/03-05-gaussian-mixture-models.md)

### Responsibility

Prior share times fit, normalised across components: how much of point $i$ each
component gets to claim.

$$r_{ik} = \Pr(z_i = k \mid x_i) = \frac{\pi_k\,\mathcal N(x_i\mid\mu_k,\Sigma_k)}{\sum_{j}\pi_j\,\mathcal N(x_i\mid\mu_j,\Sigma_j)} .$$

The denominator **is** $p(x_i)$, so a row of responsibilities always sums to 1 —
your cheapest arithmetic guard. With equal weights and a shared variance the
soft assignment is a logistic function of $x$:

$$r_{iB} = \sigma_{\text{logit}}\!\left(\frac{\Delta}{\sigma^2}\big(x_i - m\big) + \log\frac{\pi_B}{\pi_A}\right), \qquad \Delta = \mu_B - \mu_A,\quad m = \tfrac{\mu_A+\mu_B}{2}.$$

Slope $\Delta/\sigma^2$, crossing $0.5$ at the midpoint of the means, mixing
weights entering only as an intercept.

*Introduced:* [3.5](lessons/03-05-gaussian-mixture-models.md); it is the E-step in [3.6](lessons/03-06-the-em-algorithm.md)

### KL divergence

How far a guessed distribution $q$ sits from a target — and, in EM, exactly the
amount by which the lower bound falls short of the log-likelihood.

$$\mathrm{KL}\big(q\,\big\|\,p(z\mid x,\theta)\big) = \sum_z q(z)\log\frac{q(z)}{p(z\mid x,\theta)} \;\ge\; 0,$$

with equality iff $q$ *is* the posterior. Non-negativity is Gibbs' inequality, by
Jensen — see [`information-theory` 1.4](../information-theory/lessons/01-04-relative-entropy-kl-jensen.md).
That single fact is what makes EM monotone.

*Introduced:* [3.6](lessons/03-06-the-em-algorithm.md)

### K-fold cross-validation

Fit $k$ times, each time on a different $(k-1)/k$ of your data, and average the $k$
held-out scores. Every row is validated exactly once and trains $k-1$ times.

$$e_j = \frac{1}{\lvert F_j\rvert}\sum_{i\in F_j}\ell\big(\hat f^{-j}(x_i),\, y_i\big), \qquad \hat R_{\mathrm{CV}} = \frac1k\sum_{j=1}^{k}e_j .$$

Data reuse without dishonesty — **provided the loop wraps every data-dependent
decision**: feature selection, imputation, resampling, threshold choice,
standardisation. What it estimates is the risk of the *procedure trained on
$n(k-1)/k$ rows*, so it is mildly **pessimistic**, and more so for small $k$.
Choosing $k$ is itself a bias–variance trade: $k = n$ (LOOCV) is nearly unbiased
but its $n$ training sets differ by one row, making the scores strongly correlated
and their average high-variance; $k = 10$ is the default because it buys much less
correlation for a small pessimistic bias. Stratify when classes are imbalanced;
split by **group**, never by row, when rows are grouped; use forward chaining for
time series.

*Introduced:* [4.1](lessons/04-01-model-selection-and-cross-validation.md)

### Nested cross-validation

What you use when you must both tune and report: the inner loop picks the setting,
the outer loop scores the **whole tuning procedure** on data the inner loop never
saw.

$$\underbrace{G\,k_{\mathrm{in}}\,k_{\mathrm{out}}}_{\text{inner fits}} \;+\; \underbrace{k_{\mathrm{out}}}_{\text{outer refits}} \;+\; \underbrace{1}_{\text{final model}} \quad\text{fits.}$$

The problem it solves is the **winner's curse**: forty worthless models each with
true accuracy 0.5 and SE 0.03 produce a maximum about 2.16 standard errors above
the mean, so the winner reads about $0.5 + 2.16(0.03) \approx 0.565$ and you have
discovered nothing. If you only need to *pick* a setting and will report on a
separate test set, flat tuning ($Gk+1$ fits) is correct and the nested loop is
waste — typically a factor of five.

*Introduced:* [4.1](lessons/04-01-model-selection-and-cross-validation.md)

### One-standard-error rule

Among models whose CV score is within one SE of the best, take the **simplest**.

$$\mathrm{SE} = \frac{s}{\sqrt k}, \qquad s^2 = \frac{1}{k-1}\sum_{j=1}^{k}\big(e_j - \hat R_{\mathrm{CV}}\big)^2 ;\qquad \text{band} = \big[\,\hat R_{\min},\ \hat R_{\min} + \mathrm{SE}_{\min}\,\big].$$

You are declaring that differences inside the noise band are not real, and
spending that indifference on less variance — the bias–variance trade applied to
the *selection step itself*. **The rule only ever moves you toward simplicity.**
Along a regularization axis "simplest" means the **most** regularized model, so it
picks the **largest** $\lambda$ in the band, not the smallest.

*Introduced:* [4.1](lessons/04-01-model-selection-and-cross-validation.md); applied in [4.3](lessons/04-03-diagnosing-models-in-practice.md)

### Confusion matrix

Fix a threshold. Every example lands in one of four cells. **Everything below is a
ratio of two of these, and nothing else is.**

| | predicted positive | predicted negative |
|---|---|---|
| **actually positive** | $\mathrm{TP}$ | $\mathrm{FN}$ |
| **actually negative** | $\mathrm{FP}$ | $\mathrm{TN}$ |

$$\text{accuracy} = \frac{\mathrm{TP} + \mathrm{TN}}{n}.$$

The one structural fact worth carrying: **precision has a *predicted* count in its
denominator; recall and specificity have *actual* counts.** That is why precision
moves with prevalence and the other two do not.

*Introduced:* [4.2](lessons/04-02-classification-metrics.md)

### Precision

Of the things I flagged, how many were real.

$$P = \frac{\mathrm{TP}}{\mathrm{TP} + \mathrm{FP}} .$$

It depends on the base rate, and the dependence is Bayes' rule wearing metric
clothes:

$$P = \frac{R\,\pi}{R\,\pi + (1-\text{spec})(1-\pi)}, \qquad \pi = \Pr(y=1).$$

A test with recall $0.99$ and specificity $0.95$ has precision $0.832$ at 20
percent prevalence and $0.167$ at 1 percent — five out of six positives wrong,
same test.

*Introduced:* [4.2](lessons/04-02-classification-metrics.md)

### Recall

Of the real things, how many did I catch. Also called **sensitivity**, and also
the **true positive rate** — three names for one ratio.

$$R = \frac{\mathrm{TP}}{\mathrm{TP} + \mathrm{FN}} .$$

*Introduced:* [4.2](lessons/04-02-classification-metrics.md)

### Specificity

Recall for the negative class: of the genuine negatives, how many did I leave
alone.

$$\text{spec} = \frac{\mathrm{TN}}{\mathrm{TN} + \mathrm{FP}}, \qquad \mathrm{FPR} = 1 - \text{spec}.$$

*Introduced:* [4.2](lessons/04-02-classification-metrics.md)

### F1 score

The harmonic mean of precision and recall — a summary that refuses to be rescued
by one large component.

$$F_1 = \frac{2PR}{P+R} = \left(\frac{P^{-1} + R^{-1}}{2}\right)^{-1}, \qquad m \le F_1 < 2m \ \text{ with } m = \min(P,R).$$

Flag everything and you get $P = 0.1$, $R = 1$: the arithmetic mean says $0.55$
and $F_1$ says $0.182$. That gap is the entire argument for the harmonic mean.
Two cautions: $F_1$ **never looks at $\mathrm{TN}$**, and it is **not symmetric** —
relabel which class is "positive" and the same model with the same errors posts a
different headline (in the standard spam example, $0.727$ becomes $0.966$).
Accuracy is symmetric under relabelling; $F_1$ is a choice.

*Introduced:* [4.2](lessons/04-02-classification-metrics.md)

### ROC curve

Sweep the threshold from $+\infty$ down to $-\infty$ and plot
$\big(\mathrm{FPR}(t),\ R(t)\big)$. It runs from $(0,0)$ to $(1,1)$; on a finite
sample it is a staircase that steps **up** by $1/P_{\text{count}}$ each time you
pass a positive and **right** by $1/N_{\text{count}}$ each time you pass a
negative. The dashed diagonal is chance.

Both axes are **within-class rates**, so an ROC curve is blind to prevalence — a
virtue when comparing two rankers, a liability when you need to know what will
actually land on someone's desk. Use ROC when the classes are roughly balanced and
a **precision–recall curve** when positives are rare, because a PR curve puts
precision on an axis and therefore moves when the base rate does.

*Introduced:* [4.2](lessons/04-02-classification-metrics.md)

### AUC

The probability the model ranks a random positive above a random negative.

$$\mathrm{AUC} = \Pr\big(s(X^+) > s(X^-)\big) + \tfrac12\Pr\big(s(X^+) = s(X^-)\big) = \frac{\#\{(i,j): s_i^+ > s_j^-\}}{P_{\text{count}}\,N_{\text{count}}} .$$

The two readings — area under the staircase, and fraction of concordant pairs —
are the *same computation*, because column $j$ of the sweep contributes
$\frac{1}{N_{\text{count}}}\cdot\frac{k_j}{P_{\text{count}}}$ where $k_j$ is the
number of positives already passed; a tie cuts a unit cell diagonally and
contributes exactly half. Chance is $0.5$. This pair-counting form is the
Mann–Whitney $U$ statistic divided by $P_{\text{count}}N_{\text{count}}$, so an AUC
is a rank test in disguise — and, being a statement about **ranking only**, it
cannot tell you what any particular threshold will do.

*Introduced:* [4.2](lessons/04-02-classification-metrics.md)

### Learning curve

Training and validation error against the **amount of training data**, with the
model class and the validation set both held fixed.

$$\hat R_{\text{tr}}(m) = \frac1m\sum_{i=1}^{m}\ell\big(\hat f_m(x_i), y_i\big), \qquad \hat R_{\text{val}}(m) = \frac{1}{\lvert V\rvert}\sum_{i\in V}\ell\big(\hat f_m(x_i), y_i\big).$$

**The level is bias. The gap is variance.** Both branches converge to the same
place, $\text{bias}^2 + \sigma^2$, so a converged curve tells you more data will
not help — and tells you nothing about whether a *bigger model class* would. The
closed form for OLS makes the shape exact: with $p$ parameters on $n$ rows,

$$\mathbb E\big[\hat R_{\text{tr}}\big] = \sigma^2\Big(1 - \frac pn\Big), \qquad \mathbb E\big[\hat R_{\text{val}}\big] = \sigma^2\Big(1 + \frac pn\Big),$$

so the noise floor sits exactly midway, the gap is $2\sigma^2 p/n$ — **twice the
variance** — and it halves every time you double the data. Landing within 5
percent of the floor needs $p/n \le 0.05$: about **twenty rows per parameter**.

*Introduced:* [4.3](lessons/04-03-diagnosing-models-in-practice.md)

### Validation curve

Error against **one hyperparameter**, e.g. $\lambda$, answering "which setting do I
ship?" It is **U-shaped in $\lambda$** and monotone in nothing. Do not confuse the
three curves in this course:

| curve | x-axis | question it answers | from |
|---|---|---|---|
| loss curve | optimizer iteration | is the optimizer converging? | [1.6](lessons/01-06-gradient-descent-for-learning.md) |
| learning curve | training-set size $m$ | would more data help? | [4.3](lessons/04-03-diagnosing-models-in-practice.md) |
| validation curve | one hyperparameter | which setting do I ship? | [4.1](lessons/04-01-model-selection-and-cross-validation.md) |

A validation curve tells you nothing about whether to buy data; a learning curve
tells you nothing about which $\lambda$.

*Introduced:* [4.3](lessons/04-03-diagnosing-models-in-practice.md)

### ReLU

$\phi(u) = \max(0, u)$ — the activation everybody actually uses, because its
derivative is 0 or 1 and never anything in between.

$$\phi'(u) = \begin{cases} 1 & u > 0 \\ 0 & u < 0\end{cases}$$

(Undefined at $u = 0$; every library returns 0 there and the set where it matters
has measure zero.) The consequence is the one to hold onto: **a hidden unit that
did not fire multiplies its entire incoming gradient by exactly zero** — not by a
small number, by zero. Dead on *this example* is normal and is what makes ReLU
nets sparse; dead on *every* example is a unit that has stopped existing.

*Introduced:* [4.4](lessons/04-04-a-taste-of-neural-networks.md)

### Backpropagation

Run forward once keeping every intermediate value, then walk the same graph
backwards multiplying local derivatives. It is the chain rule with the forward
values written down — reverse-mode automatic differentiation.

For a net with squared loss $L = \tfrac12(\hat y - y)^2$ and layers
$z^{(\ell)} = W^{(\ell)}a^{(\ell-1)} + b^{(\ell)}$, $a^{(\ell)} = \phi(z^{(\ell)})$:

$$\delta^{(\text{out})} = \hat y - y, \qquad \frac{\partial L}{\partial W^{(\ell)}} = \delta^{(\ell)}\big(a^{(\ell-1)}\big)^\top, \qquad \frac{\partial L}{\partial b^{(\ell)}} = \delta^{(\ell)},$$

$$\delta^{(\ell-1)} = \Big(\big(W^{(\ell)}\big)^\top \delta^{(\ell)}\Big) \odot \phi'\big(z^{(\ell-1)}\big).$$

In words: the error at the output is the residual; a weight's gradient is **its own
layer's $\delta$ times the activation it multiplied**; and to move $\delta$ back one
layer you push it through the transposed weight matrix and then gate it by the
activation's derivative. Because $\partial L/\partial W = \delta\,a^\top$ is an
**outer product**, a weight that carried a zero contributes nothing. Note the sign:
with $L = \tfrac12(\hat y - y)^2$ the output error is $\hat y - y$, **not**
$y - \hat y$; get it backwards and your loss climbs smoothly and convincingly.
Architectures, initialization and training dynamics are **ceded to**
[`deep-learning`](../deep-learning/syllabus.md).

*Introduced:* [4.4](lessons/04-04-a-taste-of-neural-networks.md)

## Formulas and rules

### The closed forms

| quantity | formula | from |
|---|---|---|
| OLS | $\hat\beta = (X^\top X)^{-1}X^\top y$ | [1.3](lessons/01-03-linear-regression-and-least-squares.md) |
| simple regression | $\hat\beta_1 = S_{xy}/S_{xx}$, $\hat\beta_0 = \bar y - \hat\beta_1\bar x$ | [1.3](lessons/01-03-linear-regression-and-least-squares.md) |
| ridge | $\hat\beta_\lambda = (X^\top X + \lambda I)^{-1}X^\top y$ | [1.4](lessons/01-04-regularization-ridge-and-lasso.md) |
| ridge, orthonormal design | $\hat\beta_j^{\text{ridge}} = \hat\beta_j^{\text{OLS}}/(1+\lambda)$ | [1.4](lessons/01-04-regularization-ridge-and-lasso.md) |
| lasso, orthonormal design | $\operatorname{sign}(\hat\beta_j^{\text{OLS}})\big(\lvert\hat\beta_j^{\text{OLS}}\rvert - \lambda/2\big)_+$ | [1.4](lessons/01-04-regularization-ridge-and-lasso.md) |
| logistic gradient | $\nabla_\theta L = X^\top(p - y)$ | [1.5](lessons/01-05-logistic-regression-and-classification.md) |
| logistic Hessian | $X^\top D X$, $D = \operatorname{diag}(p_i(1-p_i))$ | [1.5](lessons/01-05-logistic-regression-and-classification.md) |
| intercept-only fit | $\hat\beta = \bar y$ | [1.3](lessons/01-03-linear-regression-and-least-squares.md) |

Logistic regression has **no** closed form: $p$ depends on $\theta$ nonlinearly, so
every fit is iterative. The stationarity condition $X^\top(p-y) = 0$ still buys you
one thing free — with an intercept column, $\sum_i p_i = \sum_i y_i$, so fitted
probabilities average to the base rate.

### Ridge through the SVD — the shrinkage picture

With the thin SVD $X = U\Sigma V^\top$, so that $X^\top X = V\Sigma^2V^\top$:

$$\hat\beta_\lambda = V\big(\Sigma^2 + \lambda I\big)^{-1}\Sigma\,U^\top y, \qquad \hat y_\lambda = \sum_{i=1}^{p} u_i\,\frac{\sigma_i^2}{\sigma_i^2 + \lambda}\,\big(u_i^\top y\big).$$

OLS keeps each left-singular direction in full; ridge keeps the fraction
$\sigma_i^2/(\sigma_i^2+\lambda)$ of it. Directions with $\sigma_i^2 \gg \lambda$
survive nearly intact; directions with $\sigma_i^2 \ll \lambda$ are erased. So **a
single $\lambda$ spends almost all of its effect on the weakest directions** — the
ones a near-collinear design leaves you least able to estimate. Per-direction
coefficient magnitudes:

$$\text{OLS: } \frac{u_i^\top y}{\sigma_i}, \qquad\qquad \text{ridge: } \frac{\sigma_i\,(u_i^\top y)}{\sigma_i^2 + \lambda}.$$

The sum $\sum_i \sigma_i^2/(\sigma_i^2+\lambda)$ is the fit's **effective degrees
of freedom** — compare $\operatorname{tr}(H) = p$ for OLS. Its development is
**ceded to** [`statistical-learning`](../statistical-learning/syllabus.md).
SVD mechanics: [`linalg-refresher` 5.2](../linalg-refresher/lessons/05-02-svd.md).

*From* [1.4](lessons/01-04-regularization-ridge-and-lasso.md)

### Ridge vs lasso, side by side

| | ridge ($\ell_2$) | lasso ($\ell_1$) |
|---|---|---|
| penalty | $\lambda\sum_j\beta_j^2$ | $\lambda\sum_j\lvert\beta_j\rvert$ |
| closed form | always | only under an orthonormal design |
| effect on a coefficient | multiply by $1/(1+\lambda)$ | subtract $\lambda/2$, clamp at 0 |
| harsher on | large coefficients | **small** coefficients |
| zeros? | never, for finite $\lambda$ | yes — that is the point |
| correlated pair | splits the weight between them | picks one, nearly at random |
| invertibility | fixes $p > n$ outright | — |

**Lasso KKT conditions** (subgradient at zero): an *active* feature's correlation
with the residual is pinned to exactly $\lambda/2$ in magnitude; an *inactive* one
is merely allowed to be smaller.

$$2\,x_j^\top\big(y - X\hat\beta\big) = \lambda\operatorname{sign}(\hat\beta_j) \ \text{ if } \hat\beta_j \ne 0, \qquad \big\lvert 2\,x_j^\top(y - X\hat\beta)\big\rvert \le \lambda \ \text{ if } \hat\beta_j = 0.$$

Everything is zero once $\lambda \ge \lambda_{\max} = 2\max_j\lvert x_j^\top y\rvert$,
and the first feature to enter as $\lambda$ falls is the one with the largest
$\lvert x_j^\top y\rvert$. Optimality machinery: [`convex-optimization` 3.3](../convex-optimization/lessons/03-03-kkt-conditions.md).

*From* [1.4](lessons/01-04-regularization-ridge-and-lasso.md)

### Which loss answers which question

Minimising over **all** functions decouples pointwise, so the answer is a property
of the conditional distribution of $Y$ given $X = x$:

| loss $\ell(c, y)$ | risk minimizer $h^*(x)$ | derivative that gives it |
|---|---|---|
| $(c-y)^2$ | conditional **mean** $\mathbb E[Y\mid X=x]$ | $-2\,\mathbb E[Y-c]$ |
| $\lvert c-y\rvert$ | a conditional **median** | $\Pr(Y<c) - \Pr(Y>c)$ |
| pinball at level $\tau$ | conditional $\tau$-**quantile** $F^{-1}(\tau)$ | $F(c) - \tau$ |
| 0–1 / "within 10 percent" | a **modal** quantity — none of the above | (not differentiable) |

Pick the loss from the cost of a mistake, then find an optimizer — never the other
way round. "Robust" is not the same as "correct": if you will *sum* your
predictions across thousands of cases, you want the quantity whose sum is
unbiased, which is the mean.

*From* [1.1](lessons/01-01-the-learning-problem.md)

### Optimization facts you will actually use

For $f(x) = \tfrac12 x^\top A x$ with $A$ symmetric positive definite, eigenvalues
$0 < \mu = \lambda_1 \le \cdots \le \lambda_p = L$, one gradient step is
$x_{t+1} = (I - \eta A)x_t$, which decouples into $p$ geometric sequences
$z_i^{(t)} = (1-\eta\lambda_i)^t z_i^{(0)}$. Hence:

| fact | statement |
|---|---|
| **divergence threshold** | descent converges iff $\lvert 1-\eta\lambda_i\rvert < 1$ for every $i$, i.e. $0 < \eta < \dfrac{2}{L}$ |
| per-step contraction | $\rho(\eta) = \max\big(\lvert 1-\eta\mu\rvert,\ \lvert 1-\eta L\rvert\big)$ |
| optimal rate | $\eta^* = \dfrac{2}{\mu + L}$, giving $\rho^* = \dfrac{L-\mu}{L+\mu} = \dfrac{\kappa-1}{\kappa+1}$ |
| safe default | $\eta \le 1/L$ for a general convex $L$-smooth objective |
| steps to tolerance | $t \ge \ln(\text{tol}) / \ln \rho$ |
| ridge conditioning | $\kappa_{\text{ridge}} = \dfrac{\lambda_{\max} + \lambda}{\lambda_{\min} + \lambda}$ — regularization is also a preconditioner |
| SGD unbiasedness | $\mathbb E[\hat g_t] = \nabla J(\theta_t)$; noise standard deviation falls like $1/\sqrt b$ |
| **SGD stationary variance** | for $\tfrac12\theta^2$ with noise $\sigma^2$: $v = \dfrac{\eta^2\sigma^2}{1-(1-\eta)^2} = \dfrac{\eta\,\sigma^2}{2-\eta}$, RMS radius $\approx \sigma\sqrt{\eta/2}$ |

Three consequences worth carrying. **The optimal rate sits at about 90 percent of
the divergence threshold** ($\eta^*/(2/L) = L/(\mu+L)$), so tuning $\eta$ well means
tuning it dangerously. **The noise ball shrinks only like $\sqrt\eta$**: cutting
$\eta$ by 100 buys 10 times the accuracy for 100 times the steps. And **scaling $\eta$
is not scaling the problem** — doubling every eigenvalue leaves $\kappa$ and the
step count unchanged, it just halves the number you type. First-order methods in
general: [`convex-optimization` 4.1](../convex-optimization/lessons/04-01-first-order-methods.md).

*From* [1.6](lessons/01-06-gradient-descent-for-learning.md)

### Margins and the SVM, in one place

| fact | statement |
|---|---|
| canonical scaling | $\min_i y_i(w^\top x_i + b) = 1$ — always available on separable data, and free (the optimizer enforces it) |
| margin in that scaling | half-width $1/\lVert w\rVert$; full corridor $2/\lVert w\rVert$ |
| max margin, geometrically | half the distance between the two convex hulls |
| support vector (hard) | $y_i(w^\top x_i + b) = 1$ |
| support vector (soft) | $\alpha_i > 0$ — including points inside the band and misclassified points |
| minimum number of SVs | 2, one per class, in a separable 2-D problem |
| primal, soft margin | $\min\ \tfrac12\lVert w\rVert^2 + C\sum_i \xi_i$ s.t. $y_i f(x_i) \ge 1-\xi_i$, $\xi_i \ge 0$ |
| ridge dictionary | $\lambda = 1/(2C)$ |
| **direction of the $C$ knob** | **small $C$ = cheap slack = wide sloppy margin = HEAVY regularization** |
| $C$ large enough | soft margin coincides with hard margin once $C \ge \max_i \alpha_i^{\text{hard}}$ |
| $C \to 0$ | $\lVert w\rVert \le \sqrt{2Cn} \to 0$: the classifier degenerates to the majority class |

*From* [2.2](lessons/02-02-maximum-margin-classifiers.md), [2.3](lessons/02-03-soft-margins-and-the-svm-dual.md)

### Kernels

| kernel | formula | implied feature space |
|---|---|---|
| linear | $x^\top z$ | the original $d$ features |
| polynomial, homogeneous | $(x^\top z)^p$ | monomials of degree **exactly** $p$: $\binom{d+p-1}{p}$ of them |
| polynomial, inhomogeneous | $(x^\top z + c)^p$ | all degrees **up to** $p$ — the only one containing the plain linear model |
| RBF / Gaussian | $\exp(-\gamma\lVert x-z\rVert^2)$ | infinite-dimensional |

The trick, concretely: $\phi(x) = (x_1^2, \sqrt2 x_1x_2, x_2^2)$ gives
$\phi(x)^\top\phi(z) = (x^\top z)^2$, so the lift is never performed and the
evaluation costs $d+1$ multiplications no matter how big the implied space is.
**Design rule: the explicit feature map's bill scales with $d$; the kernel's bill
scales with $n$. Pay whichever you can, and if neither, go linear.** Note there is
no $w$ in a kernel model — $w = \sum_i\alpha_i y_i\phi(x_i)$ lives in a space you
refused to build — so kernel SVMs are not interpretable the way linear weights are.

*From* [2.4](lessons/02-04-the-kernel-trick.md)

### Impurity at a glance (binary node, minority fraction $p$)

| $p$ | Gini $2p(1-p)$ | entropy (bits) |
|---|---|---|
| $0$ | $0$ | $0$ |
| $0.1$ | $0.180$ | $0.469$ |
| $0.25$ | $0.375$ | $0.811$ |
| $0.3$ | $0.420$ | $0.881$ |
| $0.5$ | $0.500$ | $1.000$ |

Entropy's ceiling is twice Gini's, so **entropy gains run roughly twice as large as
Gini gains for the same split** — compare gains only within one impurity. As
$p \to 0$ Gini behaves like $2p$ and entropy like $p\log_2(1/p)$, whose ratio grows
without bound; that is where the two rules can rank splits differently.

*From* [2.5](lessons/02-05-decision-trees.md)

### Growing a tree

```
GROW(S):
    if S is pure, or |S| < min_size, or depth limit hit:
        return leaf(majority label of S)
    (j, theta) <- argmax over all features j and thresholds theta of gain(S, j, theta)
    if gain(j, theta) <= 0:  return leaf(majority label of S)
    L <- {rows of S with x_j <= theta};  R <- S \ L
    return node(j, theta, GROW(L), GROW(R))
```

Candidate thresholds are midpoints between consecutive distinct values, so a node
faces at most $d(n-1)$ questions; with presorted features and incremental class
counts each candidate is $O(1)$. The `gain <= 0` guard is a real failure mode:
on exact XOR both single-feature splits score zero and the greedy search returns
one leaf, even though a depth-2 tree is exact. Lookahead fixes it and costs
$(dn)^k$ for $k$ steps — at $d = 50$, $n = 1000$ that is fifty thousand times the
work at the root alone. Optimal tree construction is NP-hard.

*From* [2.5](lessons/02-05-decision-trees.md)

### Ensemble arithmetic

**Bagging.** $\hat f_{\text{bag}}(x) = \frac1B\sum_{b}\hat f^{*b}(x)$; for
classification, vote or (usually better) average class probabilities. **Random
forest** adds a fresh random subset of $m$ features at *every split of every tree*,
with $m = \lfloor\sqrt p\rfloor$ for classification and $\lfloor p/3\rfloor$ for
regression, trees grown deep and unpruned.

$$\operatorname{Var}\big(\hat f_{\text{bag}}(x)\big) = \rho\,\sigma^2 + \frac{1-\rho}{B}\,\sigma^2 .$$

| check | value |
|---|---|
| $B=1$ | $\sigma^2$ |
| $\rho = 0$ | $\sigma^2/B$ |
| $\rho = 1$ | $\sigma^2$, for every $B$ |
| $B \to \infty$ | $\rho\sigma^2$ — **the floor** |
| within 1 percent of the floor | $B \ge \dfrac{100(1-\rho)}{\rho}$ |

The whole design lesson is in that floor: at $\rho = 0.6$, going from 100 to 200
trees buys $0.002\sigma^2$ while dropping $\rho$ to $0.3$ buys $0.297\sigma^2$ —
about 150 times as much. **Decorrelating beats enlarging, and it is also cheaper**
(at $p=100$, $m=10$, each forest tree costs a tenth of a bagged tree). Note the
last row's sting: the better your forest, the more trees it takes to realise the
benefit ($\rho = 0.1$ needs $B \ge 900$).

**AdaBoost's training-error bound.** With edge $\gamma_t = \tfrac12 - \epsilon_t$:

$$\widehat{\text{err}}(H) \le \prod_{t=1}^{T}Z_t = \prod_{t=1}^{T}2\sqrt{\epsilon_t(1-\epsilon_t)} = \prod_{t=1}^{T}\sqrt{1-4\gamma_t^2} \le \exp\Big(-2\sum_{t=1}^{T}\gamma_t^2\Big).$$

Training error dies like $e^{-2T\gamma^2}$, so the round count is **quadratic in
the edge**: at $\gamma = 0.1$, reaching $10^{-4}$ needs $T = 461$; doubling the
edge to $0.2$ cuts it to $T = 116$. A missed point's weight is multiplied by
$1/(2\epsilon_t) > 1$ every round it stays missed — geometric growth, which
self-limits only because $w_t(i) \le \epsilon_t < \tfrac12$.

*From* [2.6](lessons/02-06-bagging-and-random-forests.md), [2.7](lessons/02-07-boosting.md)

### Bagging vs boosting

| | bagging / forests | boosting |
|---|---|---|
| learners trained | in parallel, independently | in sequence, each on the previous ones' mistakes |
| data seen by learner $t$ | a bootstrap resample | the **same** data, reweighted |
| base learner | low-bias, high-variance (deep trees) | high-bias, low-variance (stumps) |
| attacks | variance | bias |
| can you reorder members? | yes — they are exchangeable | **no** — delete round 2 and round 3 onward is undefined |
| label noise | diluted by averaging | amplified, exponentially |
| parallelism | $B$ trees on $B$ cores take the time of one | strictly serial in $T$ |

*From* [2.6](lessons/02-06-bagging-and-random-forests.md), [2.7](lessons/02-07-boosting.md)

### Unsupervised updates

**PCA.** Centre; form $S$; take the top eigenvectors. Via the SVD
$\tilde X = U\Sigma V^\top$: $S = V\frac{\Sigma^2}{n-1}V^\top$, so **the right
singular vectors are the principal components** and $\lambda_i = \sigma_i^2/(n-1)$.
For a $2\times2$ matrix, the trick worth memorising is
$\lambda^2 - (\operatorname{tr}S)\lambda + \det S = 0$. Eigenvalue mechanics:
[`linalg-refresher` 3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md);
projection: [`linalg-refresher` 4.2](../linalg-refresher/lessons/04-02-projection-least-squares.md).

**k-means.** Assign to nearest centroid, then set each centroid to its cluster's
mean; both steps are exact block minimizers of WCSS, so it terminates. See
[Lloyd's algorithm](#lloyds-algorithm).

**GMM by EM.** E-step: compute every $r_{ik}$. M-step, with $N_k = \sum_i r_{ik}$:

$$\pi_k = \frac{N_k}{n}, \qquad \mu_k = \frac{1}{N_k}\sum_i r_{ik}\,x_i, \qquad \Sigma_k = \frac{1}{N_k}\sum_i r_{ik}\big(x_i - \mu_k\big)\big(x_i - \mu_k\big)^\top .$$

Sanity check: a responsibility-weighted average always lies **inside the data
range**, so an M-step returning a mean outside it is an arithmetic error, always.

**The EM decomposition and why it is monotone.** For every $q$ and $\theta$,

$$\log p(x\mid\theta) = \mathcal L(q,\theta) + \mathrm{KL}\big(q\,\big\|\,p(z\mid x,\theta)\big), \qquad \mathcal L(q,\theta) = \underbrace{\sum_z q(z)\log p(x,z\mid\theta)}_{Q(\theta\mid\theta^t)} + H(q),$$

and $H(q)$ does not involve $\theta$ — which is why the M-step maximises $Q$ and no
sum survives inside a logarithm. The E-step sets $q = p(z\mid x,\theta^t)$, driving
the KL term to zero; the M-step then raises $\mathcal L$; and since KL is
non-negative, $\log p(x\mid\theta^{t+1}) \ge \log p(x\mid\theta^t)$. The M-step
only ever needed $\ge$, never $=$ — which licenses **generalized EM** (one gradient
step on $Q$ instead of a full maximisation).

**k-means is the $\sigma \to 0$ limit of EM.** With equal weights and shared
spherical $\sigma^2 I$,
$r_{ik} \propto \exp(-\lVert x_i-\mu_k\rVert^2/2\sigma^2)$; exponents differ by
$(d_j^2 - d_k^2)/2\sigma^2$, which blows up as $\sigma\to0$, so responsibilities go
to 0/1 and the weighted mean becomes Lloyd's centroid update. That is why Lloyd's
also only guarantees monotone descent and also depends on its start.

**Parameter counts for a GMM** (means $Kp$, weights $K-1$):

| covariance | per component | total | at $K=3$, $p=10$ |
|---|---|---|---|
| full | $p(p+1)/2$ | $K\big(p + p(p+1)/2\big) + K - 1$ | 197 |
| diagonal | $p$ | $2Kp + K - 1$ | 62 |
| spherical | $1$ | $K(p+1) + K - 1$ | 35 |

197 parameters from 500 points is 2.5 observations each: not a fit, a memory.

*From* [3.2](lessons/03-02-principal-component-analysis.md), [3.3](lessons/03-03-k-means-clustering.md), [3.5](lessons/03-05-gaussian-mixture-models.md), [3.6](lessons/03-06-the-em-algorithm.md)

### Choosing $k$ (and why the objective never will)

| method | objective's behaviour in $k$ | so choose $k$ by |
|---|---|---|
| PCA | explained variance rises to 1 at $k=p$ | a variance target, or downstream error |
| k-means | best WCSS non-increasing, exactly 0 at $k=n$ | the elbow (a reading, not an optimisation — real data often has no bend) |
| hierarchical | no $k$ until you cut | choosing the cut height — the same choice, made last |
| GMM | $\ell$ non-decreasing in $K$, and unbounded for any $K \ge 2$ | **held-out** log-likelihood, or a complexity penalty |

Same shape every time, and it is the shape of $R^2$ in
[1.3](lessons/01-03-linear-regression-and-least-squares.md): a training-set number
that cannot turn back up cannot select anything. Only a held-out number turns back
up — that is the whole content of [4.1](lessons/04-01-model-selection-and-cross-validation.md).

### Metrics, assembled

$$\text{accuracy} = \frac{\mathrm{TP}+\mathrm{TN}}{n}, \quad P = \frac{\mathrm{TP}}{\mathrm{TP}+\mathrm{FP}}, \quad R = \frac{\mathrm{TP}}{\mathrm{TP}+\mathrm{FN}}, \quad \text{spec} = \frac{\mathrm{TN}}{\mathrm{TN}+\mathrm{FP}},$$

$$\mathrm{FPR} = 1-\text{spec}, \qquad F_1 = \frac{2PR}{P+R}, \qquad \text{balanced accuracy} = \tfrac12\big(R + \text{spec}\big).$$

| situation | what to read | baseline to beat |
|---|---|---|
| roughly balanced classes | accuracy, ROC/AUC | 0.5 for AUC; the majority rate for accuracy |
| rare positives | precision–recall curve, average precision, $F_1$ | precision baseline is the prevalence $\pi$ |
| comparing two rankers | AUC | 0.5 |
| deciding to ship | the confusion matrix **at your threshold** | the trivial classifier, reported beside yours |
| imbalanced learning curve | balanced accuracy, or recall at fixed precision | accuracy is flat at $1-\pi$ and reads nothing |

**Validation-set noise ruler:** at accuracy $0.90$ on 200 rows,
$\mathrm{SE} = \sqrt{0.9(0.1)/200} \approx 0.021$, so a two-SE band is about
$\pm 4$ points. Any gap smaller than that is not a diagnosis.

*From* [4.2](lessons/04-02-classification-metrics.md), [4.3](lessons/04-03-diagnosing-models-in-practice.md)

### Reading a learning curve

| what you see | diagnosis | what helps | what does **not** |
|---|---|---|---|
| both curves high, converged together | **high bias** (underfitting) | bigger model class, better features, less regularization | more data — it is already converged |
| big gap, validation still falling | **high variance** (overfitting) | more data, more regularization, fewer features | a bigger model — it widens the gap |
| both low, small gap, target met | **fine** | ship it | more of anything |
| validation **below** training | **leak or distribution mismatch** | audit the split | every other move, until you have |

Order of operations: **audit the split** (leaks, duplicate rows, grouped rows, time
running backwards), **check the metric** (accuracy is flat at 0.99 on a 1-percent
problem no matter what the model does), *then* read the curve. For the last row,
try the benign explanations first — dropout and augmentation are on during training
measurement and off during validation; a training loss averaged over an epoch
describes a model that no longer exists; and class-composition mismatch does it
too. **The cheap test that separates mismatch from leak is balanced accuracy:** if
per-class accuracies are identical and only the mix differs, balanced accuracy
comes out equal on both sides.

*From* [4.3](lessons/04-03-diagnosing-models-in-practice.md)

### Cost table

$n$ rows, $p$ features (also written $d$), $k$ clusters or folds, $K$ classes or
mixture components, $B$ trees, $T$ boosting rounds, $D$ tree depth,
$n_{\mathrm{SV}}$ support vectors, $G$ grid settings. This is the single most
useful page in the course for a design-under-constraint problem.

| method | train | predict (one point) | memory | from |
|---|---|---|---|---|
| OLS / ridge, direct | $O(np^2)$ to form the Gram $+\ O(p^3)$ to solve | $O(p)$ | $O(p^2)$ for the Gram | [1.3](lessons/01-03-linear-regression-and-least-squares.md), [1.4](lessons/01-04-regularization-ridge-and-lasso.md) |
| gradient descent, one step | $O(np)$ | — | $O(p)$ | [1.6](lessons/01-06-gradient-descent-for-learning.md) |
| SGD, one step at batch $b$ | $O(bp)$ | — | $O(p)$ | [1.6](lessons/01-06-gradient-descent-for-learning.md) |
| logistic regression | $O(np)$ per gradient step; no closed form | $O(p)$ | $O(p)$ | [1.5](lessons/01-05-logistic-regression-and-classification.md) |
| perceptron | $O(p)$ per example, at most $(R/\gamma)^2$ mistakes | $O(p)$ | $O(p)$ | [2.1](lessons/02-01-the-perceptron-and-linear-separability.md) |
| linear SVM | $O(np)$ per pass | $O(p)$ | $O(p)$ | [2.3](lessons/02-03-soft-margins-and-the-svm-dual.md) |
| **kernel SVM** | $\Theta(n^2 d)$ to fill the Gram, plus the solver | $\Theta(n_{\mathrm{SV}}\,d)$ | $\Theta(n^2)$, i.e. $8n^2$ bytes | [2.4](lessons/02-04-the-kernel-trick.md) |
| decision tree, depth $D$ | $O(dn\log n)$ presort $+\ O(dnD)$ | $O(D)$ | $O(n)$ | [2.5](lessons/02-05-decision-trees.md) |
| random forest | $O\big(B\,m\,n\log n\big)$, embarrassingly parallel | $O(B\log n)$ | $O(Bn)$ | [2.6](lessons/02-06-bagging-and-random-forests.md) |
| AdaBoost, $T$ rounds | $O(Tnd)$, **strictly serial in $T$** | $O(T)$ | $O(T)$ | [2.7](lessons/02-07-boosting.md) |
| naive Bayes | $O(np)$, one pass, no iteration | $O(Kp)$ additions | $O(Kp)$ | [3.1](lessons/03-01-naive-bayes.md) |
| PCA, covariance route | $O(np^2) + O(p^3)$ | $O(pk)$ | $p^2$ entries | [3.2](lessons/03-02-principal-component-analysis.md) |
| PCA, truncated SVD | $O(npk)$ | $O(pk)$ | $O(np)$ | [3.2](lessons/03-02-principal-component-analysis.md) |
| k-means, one Lloyd iteration | $O(nkp)$ (update pass $O(np)$) | $O(kp)$ | $O(np + kp)$ | [3.3](lessons/03-03-k-means-clustering.md) |
| **hierarchical clustering** | $\Theta(n^2p)$ to build the matrix; $\Theta(n^2\log n)$ merges with a heap ($\Theta(n^3)$ naive) | — | $\Theta(n^2)$ | [3.4](lessons/03-04-hierarchical-clustering.md) |
| EM / GMM, one sweep, full $\Sigma$ | $O(nKp^2 + Kp^3)$ | $O(Kp^2)$ | $O(Kp^2)$ | [3.5](lessons/03-05-gaussian-mixture-models.md) |
| EM / GMM, diagonal or spherical | $O(nKp)$ — same order as one Lloyd iteration | $O(Kp)$ | $O(Kp)$ | [3.5](lessons/03-05-gaussian-mixture-models.md), [3.6](lessons/03-06-the-em-algorithm.md) |
| $k$-fold CV | $k$ fits | — | — | [4.1](lessons/04-01-model-selection-and-cross-validation.md) |
| LOOCV | $n$ fits — but **1** fit for a linear smoother | — | — | [4.1](lessons/04-01-model-selection-and-cross-validation.md) |
| flat tuning over a grid | $Gk + 1$ fits | — | — | [4.1](lessons/04-01-model-selection-and-cross-validation.md) |
| nested CV | $G\,k_{\mathrm{in}}k_{\mathrm{out}} + k_{\mathrm{out}} + 1$ fits | — | — | [4.1](lessons/04-01-model-selection-and-cross-validation.md) |
| neural net, forward | 1 multiply–add **per weight** | same | activations $\times$ batch size | [4.4](lessons/04-04-a-taste-of-neural-networks.md) |
| neural net, gradient | 2 per weight, so **about 3 times a prediction** — and independent of depth | — | every $a^{(\ell)}$ must survive to the backward pass | [4.4](lessons/04-04-a-taste-of-neural-networks.md) |

**The LOOCV shortcut**, worth its own line because it is the one free lunch here:
for a linear smoother with hat matrix $H$,

$$\mathrm{LOOCV} = \frac1n\sum_{i=1}^{n}\left(\frac{y_i - \hat y_i}{1 - h_{ii}}\right)^{2}.$$

The moment your model is not a linear smoother, it costs $n$ fits again.

**Numbers that decide real designs.** Kernel Gram matrices: 0.8 GB at $n=10^4$,
3.2 GB at $n=2\times10^4$, 8 TB at $n=10^6$ — a method for $n$ in the thousands to
low tens of thousands, painful past about $5\times10^4$. Hierarchical clustering at
$n=10^5$ needs 40 GB for the upper triangle **before any merge**, and the $n^2$ is
in the problem statement, not the algorithm. PCA at $p=10^5$: the covariance matrix
alone is 80 GB against 8 GB of data, so the covariance route is not slow, it is
impossible — truncated SVD does the same job in about a second. Direct least
squares at $n=10^7$, $p=100$ costs about 50 gradient passes, so **it is large $p$,
or the absence of a closed form, that forces gradient descent — not large $n$ on
its own.** And nested CV at $G=12$, $k_{\mathrm{in}}=k_{\mathrm{out}}=5$ is 306
fits against flat tuning's 61: five times the bill, and it buys a score for the
tuning *procedure*, not a better $\lambda$.

## Assumed, not taught here

This is a Tier 2 course sitting on three prerequisites —
[`linalg-refresher`](../linalg-refresher/syllabus.md),
[`prob-stat-refresher`](../prob-stat-refresher/syllabus.md) and
[`convex-optimization`](../convex-optimization/syllabus.md) — and it is the
methods half of a deliberate split with
[`statistical-learning`](../statistical-learning/syllabus.md), which owns the
theory of *why* learning works while this course owns the mechanics of *how* each
method runs and what it costs. Everything ceded below is still **used** freely
here; it is cited rather than re-derived. `statistical-learning` **is not yet
built**, so every result ceded to it is stated in full where this course uses it,
and its pointer goes to that syllabus rather than to a lesson file.

| Fact | Where it's taught |
|---|---|
| The **bias–variance decomposition as a theorem**, and the ERM formalism's population-vs-empirical risk distinction | [`statistical-learning`](../statistical-learning/syllabus.md) — *not yet built; stated where used in* [1.1](lessons/01-01-the-learning-problem.md), [1.2](lessons/01-02-generalization-and-the-bias-variance-tradeoff.md) |
| PAC learnability, uniform convergence, VC dimension, Rademacher complexity | [`statistical-learning`](../statistical-learning/syllabus.md) — *not yet built; never invoked here — this course's generalization claims are empirical (held-out error), not bounded* |
| **No free lunch**, and inductive bias as a theorem | [`statistical-learning`](../statistical-learning/syllabus.md) — *not yet built; named where used in* [1.1](lessons/01-01-the-learning-problem.md) |
| Regularization as a **Bayesian prior** (MAP; Gaussian ↔ ridge, Laplace ↔ lasso), and effective degrees of freedom | [`statistical-learning`](../statistical-learning/syllabus.md) — *not yet built; stated where used in* [1.4](lessons/01-04-regularization-ridge-and-lasso.md) |
| **RKHS**, positive-definite kernels as a theory, Mercer's condition, the representer theorem | [`statistical-learning`](../statistical-learning/syllabus.md) — *not yet built; stated where used in* [2.4](lessons/02-04-the-kernel-trick.md), which uses kernels computationally |
| The **Bayes-optimal classifier** and the Bayes error | [`statistical-learning`](../statistical-learning/syllabus.md) — *not yet built; stated where used in* [3.1](lessons/03-01-naive-bayes.md) |
| **Density estimation**: KDE, bandwidth selection, the curse of dimensionality | [`statistical-learning`](../statistical-learning/syllabus.md) — *not yet built; not covered here —* [3.5](lessons/03-05-gaussian-mixture-models.md) *models density only as a finite mixture* |
| That a **proper prior can restore an unattained maximum** by penalising the runaway parameter | [`statistical-learning`](../statistical-learning/syllabus.md) — *not yet built; stated where used in* [3.5](lessons/03-05-gaussian-mixture-models.md) |
| **Double descent**, interpolation, implicit regularization | [`statistical-learning`](../statistical-learning/syllabus.md) — *not yet built; flagged in one sentence in* [4.3](lessons/04-03-diagnosing-models-in-practice.md), [4.4](lessons/04-04-a-taste-of-neural-networks.md) |
| **KKT conditions** — including the route that turns the SVM primal into its dual | [`convex-optimization` 3.3](../convex-optimization/lessons/03-03-kkt-conditions.md) |
| The **geometry of why the $\ell_1$ ball produces sparse solutions** | [`convex-optimization` 5.1](../convex-optimization/lessons/05-01-least-squares-lasso.md) |
| The **SVM as a quadratic program**, and its dual derived properly | [`convex-optimization` 5.2](../convex-optimization/lessons/05-02-support-vector-machines.md) |
| First-order methods as convergence theory (rates, smoothness, strong convexity) | [`convex-optimization` 4.1](../convex-optimization/lessons/04-01-first-order-methods.md) |
| The **SVD** $X = U\Sigma V^\top$ and what its factors mean | [`linalg-refresher` 5.2](../linalg-refresher/lessons/05-02-svd.md) |
| **Eigenvalues and eigenvectors** | [`linalg-refresher` 3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md) |
| **Orthogonal projection and least squares** as geometry | [`linalg-refresher` 4.2](../linalg-refresher/lessons/04-02-projection-least-squares.md) |
| **Inner products and orthogonality**, norms, Cauchy–Schwarz | [`linalg-refresher` 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) |
| The **spectral theorem** and quadratic forms (the Rayleigh quotient behind PCA) | [`linalg-refresher` 5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md) |
| **Bayes' rule** and conditional probability | [`prob-stat-refresher` 1.2](../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md) |
| **Expectation and variance**, and the algebra of both | [`prob-stat-refresher` 2.1](../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md) |
| **Covariance, and the variance of a sum** (the identity behind the forest formula) | [`prob-stat-refresher` 3.1](../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md) |
| **Maximum likelihood estimation** | [`prob-stat-refresher` 4.1](../prob-stat-refresher/lessons/04-01-estimation-and-mle.md) |
| The **Gaussian density** and its parameters | [`prob-stat-refresher` 2.3](../prob-stat-refresher/lessons/02-03-continuous-distributions.md) |
| **Entropy** as a measure of uncertainty | [`information-theory` 1.1](../information-theory/lessons/01-01-entropy-uncertainty-surprise.md) |
| **KL divergence**, Gibbs' inequality and Jensen | [`information-theory` 1.4](../information-theory/lessons/01-04-relative-entropy-kl-jensen.md) |
| **Asymptotic notation** — every cost in the table above | [`algorithms` 1.1](../algorithms/lessons/01-01-asymptotic-notation.md) |

**Deliberately deferred to other courses.** Backpropagation as a subject,
architectures, initialization and training dynamics go to
[`deep-learning`](../deep-learning/syllabus.md) — [4.4](lessons/04-04-a-taste-of-neural-networks.md)
hand-computes one forward and one backward pass and then hands off. Policy
learning, exploration and anything with a reward signal go to
[`reinforcement-learning`](../reinforcement-learning/syllabus.md); this course only
ever learns from a fixed labelled or unlabelled dataset. **MLOps and production
tooling — serving, monitoring, feature stores, drift detection, retraining
pipelines — live nowhere in this library**, by choice; what this course gives you
for that world is the cost table above and the honest-evaluation discipline of
[4.1](lessons/04-01-model-selection-and-cross-validation.md).

## Pitfalls

### Scale sensitivity — the trap that ruins real analyses

- **Regularization is a property of your model *and your units*.** Measure a column in centimetres instead of metres and its coefficient shrinks by 100, so its ridge penalty shrinks by $10^4$ and its lasso penalty by $10^2$. Standardise every column and leave the intercept unpenalised. *([1.4](lessons/01-04-regularization-ridge-and-lasso.md))*
- **Feature scaling is an optimization necessity, not a statistical nicety.** Multiply a column by 1000 and its Hessian eigenvalue grows by $10^6$; $\kappa$ explodes and gradient descent crawls. (Newton's method is immune — this is a first-order problem.) *([1.6](lessons/01-06-gradient-descent-for-learning.md))*
- **PCA finds structure in your units, not in your data.** $S = \operatorname{diag}(9, 16)$ makes PC1 the pressure axis at 64 percent of the variance; re-express pressure in bar and $S = \operatorname{diag}(9, 0.0016)$ makes PC1 the *orthogonal* axis at 99.98 percent. Use the correlation matrix when columns are in incomparable units — but **not** when they share a unit and their relative sizes are the signal (pixels, returns in one currency, a spectrum). *([3.2](lessons/03-02-principal-component-analysis.md))*
- **k-means minimises Euclidean distance, so rescaling a feature reweights it.** A length in millimetres instead of metres will decide every cluster by itself. *([3.3](lessons/03-03-k-means-clustering.md))*
- **The linkage rule is not your only choice — $d$ itself is one**, and every scale warning above applies unchanged to it. *([3.4](lessons/03-04-hierarchical-clustering.md))*
- **The RBF kernel is a function of $\lVert x-z\rVert$**, so it inherits the same disease; standardise before you tune $\gamma$. *([2.4](lessons/02-04-the-kernel-trick.md))*

### What a training-set number does not tell you

- **Low empirical risk is not low risk.** $\hat R_S(\hat h)$ averages over the very sample $\hat h$ was chosen on, so it is biased downward, and the bias grows with how hard you searched. *([1.1](lessons/01-01-the-learning-problem.md))*
- **A higher $R^2$ does not mean a better model** — $R^2$ cannot decrease when you add *any* column. Two junk columns force $R^2 = 1$ on four rows. *([1.3](lessons/01-03-linear-regression-and-least-squares.md))*
- **The train–test gap is not the overfitting signal.** Every model has a gap, including underfitting ones. The signal is the gap's size *relative to the training error*, and high training error rules variance out entirely. *([1.2](lessons/01-02-generalization-and-the-bias-variance-tradeoff.md), [4.3](lessons/04-03-diagnosing-models-in-practice.md))*
- **You cannot choose a complexity parameter by minimising a training-set objective.** WCSS is non-increasing in $k$ and hits 0 at $k=n$; mixture log-likelihood is non-decreasing in $K$ and unbounded for any $K \ge 2$; $R^2$ never falls. All three answer "as complex as possible." *([1.3](lessons/01-03-linear-regression-and-least-squares.md), [3.3](lessons/03-03-k-means-clustering.md), [3.5](lessons/03-05-gaussian-mixture-models.md))*
- **Zero training error is not a finding.** An unpruned tree reaches it on almost any dataset; a large-$\gamma$ RBF SVM reaches it because the Gram matrix has become the identity, which is positive definite for *any* labelling. *([2.4](lessons/02-04-the-kernel-trick.md), [2.5](lessons/02-05-decision-trees.md))*
- **Bias and variance are not measurable on your fitted model** — both average over training sets you did not draw. "This model has high variance" is always a claim about a *procedure*. *([1.2](lessons/01-02-generalization-and-the-bias-variance-tradeoff.md))*
- **A converged learning curve means you hit this model class's asymptote, not the Bayes error.** "More data will not help" is sound; "nothing will help" is not. Probe by fitting a deliberately larger class. *([4.3](lessons/04-03-diagnosing-models-in-practice.md))*

### Probabilities, rankings and argmaxes are three different things

- **Logistic regression outputs a probability, not a class.** Thresholding at 0.5 is a separate decision, and it is correct only when the two mistakes cost the same. *([1.1](lessons/01-01-the-learning-problem.md), [1.5](lessons/01-05-logistic-regression-and-classification.md))*
- **$e^{w_j}$ multiplies the odds, not the probability.** Doubling the odds takes $p = 0.4$ to $0.571$. *([1.5](lessons/01-05-logistic-regression-and-classification.md))*
- **A naive Bayes score of 0.877 is a rank, not a probability.** Correlated features each cast a full vote, inflating the log-odds by roughly the number of redundant copies and piling scores near 0 and 1. Anything that reads only the *ordering* (ROC, AUC) is fine; anything that reads the *number* (a threshold, an expected cost, a figure you report) is not — recalibrate, or use logistic regression. *([3.1](lessons/03-01-naive-bayes.md))*
- **A responsibility is $\Pr(z=k\mid x)$ under the parameters you currently hold**, which are wrong, especially early. Treating an early-iteration 0.98 as near-certainty is the same error as trusting a logistic fit after one gradient step. *([3.5](lessons/03-05-gaussian-mixture-models.md), [3.6](lessons/03-06-the-em-algorithm.md))*
- **AUC summarises a ranking; you deploy a threshold.** Both ROC axes are within-class rates, so AUC cannot see prevalence — the same AUC on a balanced test set and a 1-in-1000 stream imply wildly different precisions. Compare candidates with AUC; decide to ship from the confusion matrix at your threshold. *([4.2](lessons/04-02-classification-metrics.md))*
- **High accuracy can be worse than doing nothing.** On a 1-percent-positive problem the majority-class baseline is 99 percent, so a model at 98.5 percent is losing — and nothing in the number says so. Always report the trivial classifier beside your own. *([4.2](lessons/04-02-classification-metrics.md), [4.3](lessons/04-03-diagnosing-models-in-practice.md))*
- **$F_1$ is not a neutral summary.** It never looks at $\mathrm{TN}$, and it is not symmetric: relabel which class is positive and the same model with the same errors posts a different score. *([4.2](lessons/04-02-classification-metrics.md))*
- **A bigger coefficient is not a more important feature.** Coefficients are per *unit*; compare only after standardising. *([1.5](lessons/01-05-logistic-regression-and-classification.md))*

### Which way does the knob turn

- **Small $C$ means MORE regularization.** $C$ prices the *errors*, not the weights, so a large $C$ tries very hard not to make any and overfits. Keep the dictionary $\lambda = 1/(2C)$ taped to the inside of your skull; this is the single most-reversed fact in the subject. *([2.3](lessons/02-03-soft-margins-and-the-svm-dual.md))*
- **Large $\gamma$ in an RBF kernel means MORE overfitting** — narrower bumps, a Gram matrix approaching the identity, and a decision function that is constant everywhere between the training points. *([2.4](lessons/02-04-the-kernel-trick.md))*
- **The one-standard-error rule picks the *largest* $\lambda$ in the band**, because along a regularization axis "simplest" means most regularized. The rule only ever moves you toward simplicity. *([4.1](lessons/04-01-model-selection-and-cross-validation.md), [4.3](lessons/04-03-diagnosing-models-in-practice.md))*
- **More regularization is not safer.** Test error is U-shaped in $\lambda$; both $\lambda = 0$ and $\lambda = \infty$ are bad, and not for the same reason. *([1.4](lessons/01-04-regularization-ridge-and-lasso.md))*
- **The output error is $\hat y - y$, not $y - \hat y$**, when $L = \tfrac12(\hat y-y)^2$. Get it backwards and your loss climbs smoothly and convincingly. *([4.4](lessons/04-04-a-taste-of-neural-networks.md))*
- **$B$ is not a complexity parameter.** More trees can never make a forest worse, only slower; variance falls monotonically to the floor $\rho\sigma^2$. What overfits is each tree's depth. *([2.6](lessons/02-06-bagging-and-random-forests.md))*
- **More features are not free under naive Bayes.** A near-copy of an existing feature adds no information and a full extra vote — the opposite of the intuition trees and ridge train you to have. *([3.1](lessons/03-01-naive-bayes.md))*

### Guarantees that are weaker than they look

- **Monotone is not convergent, and neither is optimal.** EM's ascent theorem gives a stationary point of the hill you started on; with free variances the likelihood is unbounded, so EM climbs *into* the degeneracy, cheerfully and monotonically. Restarts are not optional. *([3.5](lessons/03-05-gaussian-mixture-models.md), [3.6](lessons/03-06-the-em-algorithm.md))*
- **Lloyd's algorithm terminates; it does not solve anything.** Its guarantee is that no single reassignment and no centroid move improves the answer — and a bad start on six points costs a factor of 67 in WCSS (over 6,600 if you tighten the spacing). Minimising WCSS exactly is NP-hard. *([3.3](lessons/03-03-k-means-clustering.md))*
- **Cutting a dendrogram at $k$ does not give the best $k$-clustering.** Agglomerative clustering never reconsiders a merge; on the five-point instance single linkage's cut is 42 percent worse than optimal, and Ward, which greedily optimises WCSS itself, is still only greedy. *([3.4](lessons/03-04-hierarchical-clustering.md))*
- **The perceptron mistake bound is not a sample-complexity statement.** It bounds corrections during training, and it is defined through the *best* separator's $\gamma$, which you do not know before fitting. *([2.1](lessons/02-01-the-perceptron-and-linear-separability.md))*
- **The perceptron finds *a* separator, not *the* separator.** It is order-dependent, and its output can have a geometric margin thirty times worse than the maximum. *([2.1](lessons/02-01-the-perceptron-and-linear-separability.md), [2.2](lessons/02-02-maximum-margin-classifiers.md))*
- **"Not linearly separable" does not mean slow — it means never stops.** The perceptron cycles forever with no internal signal distinguishing unfinished from impossible; capping the passes turns a proof-backed algorithm into a heuristic. *([2.1](lessons/02-01-the-perceptron-and-linear-separability.md))*
- **Universal approximation is an existence theorem about weights**, silent on width (which can be exponential in the input dimension), on sample size, and on whether any optimizer finds them — and the objective is not convex, so [1.6](lessons/01-06-gradient-descent-for-learning.md)'s guarantees do not transfer. Exhibiting XOR weights proves expressiveness and nothing about learnability or stability. *([4.4](lessons/04-04-a-taste-of-neural-networks.md))*
- **Boosting rests on an assumption, not a fact** — that *some* learner beats chance on *every* weight vector. Build four points on a line that no stump can beat and AdaBoost makes no progress at all, forever. *([2.7](lessons/02-07-boosting.md))*
- **Bayes-optimality holds for the *true* posterior**, and naive Bayes plugs in an approximate one. *([3.1](lessons/03-01-naive-bayes.md))*

### Optimization

- **A NaN loss is a learning-rate bug until proven otherwise.** Check $\eta$ against $2/L$ first: divergence has a signature — the loss grows by a roughly constant factor every step. A genuine gradient bug wanders or stalls instead. *([1.6](lessons/01-06-gradient-descent-for-learning.md))*
- **Flat directions are not what makes optimization slow.** The steep direction sets the speed limit ($\eta < 2/L$) and the flat one sets progress ($\rho \ge 1-\eta\mu$); it is the *ratio* $\kappa$ that costs you steps. *([1.6](lessons/01-06-gradient-descent-for-learning.md))*
- **Mini-batching has terrible exchange rates.** Going from $b=100$ to $b=10{,}000$ multiplies the cost per step by 100 and divides the noise by only 10. *([1.6](lessons/01-06-gradient-descent-for-learning.md))*
- **Do not form $X^\top X$.** It squares the condition number; factor $X$ directly (QR or SVD). The normal equations are how you *think* about least squares, not how you compute it. *([1.3](lessons/01-03-linear-regression-and-least-squares.md), [3.2](lessons/03-02-principal-component-analysis.md))*
- **Squared loss on 0/1 labels fails twice**: it charges for confident-correct points, and on a sigmoid it is non-convex in $z$ with a gradient that collapses exactly where you most need it (75 times weaker than cross-entropy at $z = -5$, $y = 1$). *([1.5](lessons/01-05-logistic-regression-and-classification.md))*
- **On separable data the logistic likelihood has no maximum** — the fit runs off to infinite weights. Any positive $\lambda$ restores one at finite $w$. *([1.5](lessons/01-05-logistic-regression-and-classification.md))*
- **A zero gradient may mean a unit has stopped existing.** If a ReLU unit's pre-activation is negative on *every* training row, its weights get exactly zero gradient forever. A large step is what usually pushes a bias off that cliff. *([4.4](lessons/04-04-a-taste-of-neural-networks.md))*
- **Subgradient descent on the lasso never returns exact zeros** — it hovers at $10^{-9}$ and converges at $O(1/\sqrt k)$. Use the soft threshold (a proximal step), not a raw subgradient. *([1.4](lessons/01-04-regularization-ridge-and-lasso.md), [1.6](lessons/01-06-gradient-descent-for-learning.md))*

### Splits, leaks and selection

- **Any data used to choose the model cannot also estimate its error** — choosing is a form of fitting, the bias is always flattering, and nothing crashes to tell you. *([4.1](lessons/04-01-model-selection-and-cross-validation.md))*
- **Cross-validation protects only the steps inside the loop.** Rank 5000 noise features against all 50 rows and then CV honestly: you get 0.96 accuracy on coin-flip labels. Redo the ranking inside each fold and you get 0.52. The two differ by three lines of code. *([1.4](lessons/01-04-regularization-ridge-and-lasso.md), [4.1](lessons/04-01-model-selection-and-cross-validation.md))*
- **The test set buys exactly one number, once.** "I looked, disliked it, changed a feature and looked again" has converted it into a validation set. A hundred leaderboard submissions against one holdout turn it into a training set. *([4.1](lessons/04-01-model-selection-and-cross-validation.md))*
- **$s/\sqrt k$ is a soft ruler, not a significance test.** Two of the $k$ training sets share $(k-2)/(k-1)$ of their rows — 89 percent at $k=10$ — so the fold scores are positively correlated and the SE is understated. There is no unbiased estimator of $k$-fold CV's variance. *([4.1](lessons/04-01-model-selection-and-cross-validation.md))*
- **Random folds are wrong for time series** (they train on the future), **wrong for grouped rows** (the model recognises the group), and **dangerous under imbalance** (a fold can contain zero positives). Forward-chain, split by group, stratify. *([4.1](lessons/04-01-model-selection-and-cross-validation.md))*
- **A threshold chosen on the test set inflates accuracy too** — about 0.019 on a 200-row balanced set against a single-estimate SE of 0.033. AUC is not inflated by that step. *([4.2](lessons/04-02-classification-metrics.md))*
- **Validation below training is not automatically a leak.** Try the benign causes first: dropout and augmentation on during training measurement, an epoch-averaged training loss describing a model that no longer exists, or a class-composition mismatch. Balanced accuracy is the cheap test that separates mismatch from leak. *([4.3](lessons/04-03-diagnosing-models-in-practice.md))*
- **A 3-point gap may be validation noise.** At 0.90 on 200 rows, two SEs is about $\pm4$ points. Hold the validation set **fixed** across the whole ladder. *([4.3](lessons/04-03-diagnosing-models-in-practice.md))*
- **OOB error is not a substitute for a test set** — it scores each row with about 37 percent of the trees, so it measures a smaller forest than the one you ship, and it says nothing about a hyperparameter tuned outside the bagging loop. *([2.6](lessons/02-06-bagging-and-random-forests.md), [4.1](lessons/04-01-model-selection-and-cross-validation.md))*

### Geometry, representation and what a method can even express

- **k-means clusters are Voronoi cells, hence convex.** Two concentric rings can never come out as two clusters, and no initialization fixes it — that is the objective, not the search. *([3.3](lessons/03-03-k-means-clustering.md))*
- **PCA only ever sees second moments.** Points uniform on a circle have covariance proportional to the identity: PCA reports no structure, and there is enormous structure. *([3.2](lessons/03-02-principal-component-analysis.md))*
- **Top components are not useful components.** PCA never saw your labels; the direction along which your classes differ can carry the smallest eigenvalue, in which case "keep 95 percent of the variance" throws away the only column that mattered. *([3.2](lessons/03-02-principal-component-analysis.md))*
- **The boundary bisects the shortest segment between the convex hulls, not between the closest pair of data points.** Bisecting the closest pair can misclassify a training point outright. *([2.2](lessons/02-02-maximum-margin-classifiers.md))*
- **A big functional margin means nothing.** Multiply $w$ and $b$ by 100 and every functional margin is 100 times larger while the classifier is identical point for point. Only $\hat\gamma_i/\lVert w\rVert$ says anything. *([2.2](lessons/02-02-maximum-margin-classifiers.md))*
- **Hard margin is not a safe default** — one mislabelled row makes the QP infeasible, and one unlucky row can collapse the margin (moving a single point half a step cost 25 percent of it). *([2.2](lessons/02-02-maximum-margin-classifiers.md))*
- **Greedy tree growth can fail on a class it can represent.** On exact XOR both single-feature splits have gain zero, the guard fires, and `GROW` returns one leaf — while a depth-2 tree is exact. *([2.5](lessons/02-05-decision-trees.md))*
- **A hundred affine layers compose to one affine layer.** The nonlinearity is not an enhancement; without it there is no network. *([4.4](lessons/04-04-a-taste-of-neural-networks.md))*
- **Dendrogram heights are a property of the linkage rule, not the data** — the same five points top out at 4 under single linkage and 10 under complete. Heights are comparable within one tree and meaningless across rules. Only single, complete and average are monotone; centroid and median linkage can draw inversions. *([3.4](lessons/03-04-hierarchical-clustering.md))*
- **Single linkage chains.** One bridge point placed between two bands destroys the entire structure, because the rule is a minimum over pairs and cannot be diluted; average linkage moves by only $O(1/(\lvert U\rvert\lvert V\rvert))$, and complete linkage barely notices. *([3.4](lessons/03-04-hierarchical-clustering.md))*

### Reading a fitted model

- **A lasso zero is a statement about the fitted model, never about the world.** It means "given the other features retained, this one bought too little." With two correlated features the lasso picks one nearly at random. *([1.4](lessons/01-04-regularization-ridge-and-lasso.md))*
- **Collinearity makes coefficients meaningless while leaving $\hat y$ untouched.** Two exactly equivalent solutions can say the effect of $x_1$ is 1.4 per unit and exactly zero. *([1.3](lessons/01-03-linear-regression-and-least-squares.md))*
- **"Support vector" does not mean "point on the margin line"** once there is slack: it means $\alpha_i > 0$, which includes points inside the band and misclassified ones. And recover $b$ only from a point with $0 < \alpha_i < C$. *([2.3](lessons/02-03-soft-margins-and-the-svm-dual.md))*
- **Information gain is biased toward many-valued features** — a customer-ID column scores the maximum possible gain and predicts nothing. Use gain ratio, or binary splits only. *([2.5](lessons/02-05-decision-trees.md))*
- **A gain of 0.40 does not beat a gain of 0.22 if they came from different impurities.** Entropy gains run about twice as large as Gini gains for the same split. *([2.5](lessons/02-05-decision-trees.md))*
- **$\rho$ is the correlation between two trees' *predictions at one test point*, not between features.** It is a property of the fitted ensemble, not of the design matrix. *([2.6](lessons/02-06-bagging-and-random-forests.md))*
- **Check the component counts $N_k$ before you believe any mixture fit.** A converged fit with a tiny $\sigma_k$ has almost certainly found the degeneracy, not something sharp and real. *([3.5](lessons/03-05-gaussian-mixture-models.md))*
- **A zero count means "not observed here", not "impossible"** — a small-sample artefact, and $\alpha$ is the knob that says so. *([3.1](lessons/03-01-naive-bayes.md))*
- **EM's E-step does not increase the likelihood.** It does not touch $\theta$; it raises the *bound* up to a curve that stayed put. Every bit of likelihood gain comes from the M-step — which is how you triage a bug: a $10^{-9}$ decrease is floating point, a $0.4$ decrease is your code. *([3.6](lessons/03-06-the-em-algorithm.md))*
- **EM preserves every symmetry in its initialization** — seed two components at the same point and they stay identical forever, landing on the global mean. Perturb, or seed at distinct data points. *([3.6](lessons/03-06-the-em-algorithm.md))*

### Cost traps

- **The kernel trick does not make the problem cheaper; it moves the bill from $d$ to $n$.** Training goes quadratic in $n$ and prediction becomes $\Theta(n_{\mathrm{SV}}d)$ instead of $\Theta(d)$ — a model that trains fine can still be too slow to serve. And a low $C$ hurts twice, softening the boundary *and* fattening the served model. *([2.3](lessons/02-03-soft-margins-and-the-svm-dual.md), [2.4](lessons/02-04-the-kernel-trick.md))*
- **$(x^\top z)^p$ and $(x^\top z + c)^p$ are not cosmetic variants** — the first gives monomials of degree exactly $p$, and only the second contains the plain linear model. *([2.4](lessons/02-04-the-kernel-trick.md))*
- **Memory breaks before time does.** Hierarchical clustering's $n^2$ is in the problem statement; PCA's covariance route needs $p^2$ entries; a kernel Gram needs $8n^2$ bytes. Each is impossible, not merely slow, well before the flop count would have stopped you. *([2.4](lessons/02-04-the-kernel-trick.md), [3.2](lessons/03-02-principal-component-analysis.md), [3.4](lessons/03-04-hierarchical-clustering.md))*
- **Boosting is serial and forests are not.** You cannot fit round 40 before round 39; a 500-tree forest fits on 500 cores at once. *([2.6](lessons/02-06-bagging-and-random-forests.md), [2.7](lessons/02-07-boosting.md))*
- **Boosting amplifies label noise; bagging dilutes it.** A mislabelled point's weight is multiplied by $1/(2\epsilon_t) > 1$ every round it is missed, so later learners spend themselves memorising a typo. This is the one place bagging wins outright. Fixes that work: shrinkage $\nu\alpha_t$ with $\nu \approx 0.1$, or a loss whose penalty grows linearly rather than exponentially (logistic / gradient boosting). *([2.7](lessons/02-07-boosting.md))*
- **Nested CV is five times the bill and buys a different thing** — a score for the tuning *procedure*. If you only need to pick a setting and will report on a separate test set, flat tuning is correct. *([4.1](lessons/04-01-model-selection-and-cross-validation.md))*
- **"Reduce the batch size" is the standard out-of-memory answer because activations scale with the batch and parameters do not** — which is exactly why it is the wrong knob to reach for first. *([4.4](lessons/04-04-a-taste-of-neural-networks.md))*
