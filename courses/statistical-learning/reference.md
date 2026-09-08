# Statistical Learning Theory · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

One question runs through the whole course: **there is a number you care about and
cannot compute, and a number you can compute and should not trust — how far apart
are they, and what can you buy to close the gap?** Module 1 names the two numbers
(population risk, empirical risk), proves the second is biased downward the instant
you select on it, and splits the damage three ways for squared loss and two ways for
any loss. Module 2 works the one class where every quantity is a closed form — linear
models — and finds the gap exactly ($2p\sigma^2/n$), then spends the rest of the
module buying it down with penalties, priors and early stopping, all of which turn
out to be the same trade at different exchange rates. Module 3 is the heart: it
proves the gap can be bounded *before you see the data*, for every distribution in
the world, and that the price is not the number of hypotheses but the number of
behaviours they can produce on $n$ points. Modules 4 and 5 take that machinery to
classes where the obvious capacity measure has gone to infinity — kernels, trees,
ensembles, networks — and replace dimension by margin, by leaf count, by rounds, and
finally by nothing at all. Module 6 drops the labels and asks what objective each
unsupervised workhorse is actually optimising, then closes the course by naming the
variable that beats every tool in it: dimension.

Mid-problem, this card is where the **notation collisions**, the risk
decompositions, the closed forms and shrinkage profiles, the
**generalization-bound table**, the VC dimensions of the standard classes, the
kernel closure toolkit, the unsupervised objectives, and the recurring traps live in
one place.

*This card covers the whole course (lessons 1.1–6.4).*

*Its sibling is [`machine-learning`](../machine-learning/syllabus.md), which owns
method **mechanics** while this course owns **theory and guarantees**. Wherever the
two share a formula with a free scaling, they picked different (both standard)
conventions — see [Normalization conventions](#normalization-conventions-read-this-before-comparing-with-the-sibling-card),
which is the one section to read before putting the two cards side by side.*

## Notation

This course collides letters harder than any other in the library, because it merges
the vocabularies of probability, linear algebra, optimization and combinatorics —
and then reuses each of them again in Module 6. The table is in first-appearance
order; **the collision table right after it is the one you will actually come back
for.**

| Symbol | Means | First used |
|---|---|---|
| $\mathcal D$ | the distribution over $(x,y)$ — never observed, and the only thing you actually care about | [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md) |
| $S$, $n$ | the training sample and its size: $n$ i.i.d. draws from $\mathcal D$ | [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md) |
| $\mathcal H$, $h$ | the hypothesis class — **fixed before the data** — and one member of it | [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md) |
| $\ell(\hat y, y)$ | the loss: what predicting $\hat y$ costs when the truth is $y$. A modelling decision | [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md) |
| $R(h)$ | **population risk** — expected loss over $\mathcal D$. What you want; not computable | [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md) |
| $\hat R_S(h)$ | **empirical risk** — average loss on $S$. What you can compute; not what you want | [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md) |
| $\hat h$ | the ERM output, $\arg\min_{h\in\mathcal H}\hat R_S(h)$ — a *random* object, a function of $S$ | [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md) |
| $\eta(x)$ | $\Pr(y = 1\mid x)$ — the conditional probability of the positive label | [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md) |
| $h^*$, $R^*$ | the Bayes-optimal predictor and the Bayes risk — the floor nobody beats | [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md) |
| $f$, $\varepsilon$ | the unknown truth and the noise in $y = f(x)+\varepsilon$, with $\mathbb E[\varepsilon] = 0$ | [1.2](lessons/01-02-the-bias-variance-decomposition.md) |
| $\sigma^2$ (noise) | $\operatorname{Var}(\varepsilon)$ — the **irreducible** error; a fact about the world | [1.2](lessons/01-02-the-bias-variance-decomposition.md) |
| $\hat f_S$, $x_0$ | the predictor your *procedure* produced from $S$, and the fixed test point | [1.2](lessons/01-02-the-bias-variance-decomposition.md) |
| $k$ (neighbours) | the $k$ in $k$-NN; written $k = 2m+1$ with half-window $m$ on a grid | [1.2](lessons/01-02-the-bias-variance-decomposition.md) |
| $T$, $V$, $W$ | the train / validation / test blocks, with $m = \lvert V\rvert$ | [1.3](lessons/01-03-overfitting-and-train-validation-test.md) |
| $A$ | a **learner**: any map from a labelled sample to a hypothesis. No sanity required | [1.4](lessons/01-04-no-free-lunch-and-inductive-bias.md) |
| $C$ (witness) | the finite point set an argument is run on — shattered, or half-unseen | [1.4](lessons/01-04-no-free-lunch-and-inductive-bias.md) |
| $X$, $\beta$, $p$ | design matrix, coefficient vector, number of features | [2.1](lessons/02-01-linear-regression-as-learning.md) |
| $H$ (hat) | the hat matrix $X(X^\top X)^{-1}X^\top$, with $\operatorname{tr}(H) = p$ | [2.1](lessons/02-01-linear-regression-as-learning.md) |
| $\hat R_{\text{in}}$, $\hat R_{\text{out}}$ | training risk, and **in-sample prediction error** — same design $X$, fresh noise. *Not* the risk at a new random $x$ | [2.1](lessons/02-01-linear-regression-as-learning.md) |
| $z = y f(x)$ | the **margin** of a real-valued score. Positive iff correct, large iff comfortably so | [2.2](lessons/02-02-logistic-regression-and-classification.md) |
| $\varphi(z)$ | a convex **surrogate** margin loss sitting above $\mathbf 1[z\le 0]$ | [2.2](lessons/02-02-logistic-regression-and-classification.md) |
| $\sigma(u)$ | the sigmoid $1/(1+e^{-u})$ — **a function, not a standard deviation** | [2.2](lessons/02-02-logistic-regression-and-classification.md) |
| $\lambda$ (penalty) | the exchange rate between fit and coefficient size | [2.3](lessons/02-03-ridge-regression-and-shrinkage.md) |
| $\sigma_i$ | the $i$-th **singular value** of $X$; $\sigma_i^2$ is an eigenvalue of $X^\top X$ | [2.3](lessons/02-03-ridge-regression-and-shrinkage.md) |
| $H_\lambda$, $\mathrm{df}(\lambda)$ | the ridge smoother $X(X^\top X+\lambda I)^{-1}X^\top$ and its trace — **effective** degrees of freedom, generally not an integer | [2.3](lessons/02-03-ridge-regression-and-shrinkage.md) |
| $\lambda^\star$ | the **oracle** penalty $\sigma^2/\beta_j^2$ — a noise-to-signal ratio you cannot compute | [2.3](lessons/02-03-ridge-regression-and-shrinkage.md) |
| $r = y - X\hat\beta$ | the residual the lasso certificate is checked against | [2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md) |
| $s$, $\mathcal S$ | the number of truly nonzero coefficients, and the true support set | [2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md) |
| $\alpha$ (elastic net) | the $\ell_1$ share of the elastic-net penalty | [2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md) |
| $\tau^2$, $b$ (prior) | Gaussian prior variance and Laplace prior scale | [2.5](lessons/02-05-regularization-as-a-bayesian-prior.md) |
| $\eta$ (step) | the gradient-descent learning rate — **not** $\eta(x)$ | [2.6](lessons/02-06-gradient-descent-the-workhorse.md) |
| $t$, $w_t$ | iteration index and iterate; $w_t$ for $t\ge1$ is a **function of $S$** | [2.6](lessons/02-06-gradient-descent-the-workhorse.md) |
| $\Sigma(w)$, $b$ (batch) | per-example gradient covariance, and mini-batch size | [2.6](lessons/02-06-gradient-descent-the-workhorse.md) |
| $\epsilon$ (PAC) | the **accuracy** tolerance — over the draw of a future $x$ | [3.1](lessons/03-01-the-pac-framework.md) |
| $\delta$ | the **confidence** budget — over the draw of the training set $S$ | [3.1](lessons/03-01-the-pac-framework.md) |
| $n_{\mathcal H}(\epsilon,\delta)$ | sample complexity: the size that suffices, for every $\mathcal D$ | [3.1](lessons/03-01-the-pac-framework.md) |
| $c$ | the target labelling function, assumed in $\mathcal H$ in the **realizable** case | [3.1](lessons/03-01-the-pac-framework.md) |
| $M = \lvert\mathcal H\rvert$ | the size of a finite class; you are billed $\ln M$, never $M$ | [3.2](lessons/03-02-finite-classes-and-uniform-convergence.md) |
| $Z_i(h)$ | $\ell(h(x_i),y_i)$ — i.i.d. **only because $h$ was fixed first** | [3.2](lessons/03-02-finite-classes-and-uniform-convergence.md) |
| $\mathcal H_C$ | the restriction of $\mathcal H$ to $C$: the label patterns it can paint there | [3.3](lessons/03-03-shattering-and-the-vc-dimension.md) |
| $\Pi_{\mathcal H}(n)$ | the **growth function** — the most patterns $\mathcal H$ realises on any $n$ points | [3.3](lessons/03-03-shattering-and-the-vc-dimension.md) |
| $d_{\mathrm{VC}}$ | the **VC dimension**: the largest $n$ with $\Pi_{\mathcal H}(n) = 2^n$ | [3.3](lessons/03-03-shattering-and-the-vc-dimension.md) |
| $S'$ | the **ghost sample** used in symmetrization; $2n$ points, no population | [3.4](lessons/03-04-vc-bounds-and-sample-complexity.md) |
| $\sigma_i \in \{-1,+1\}$ | **Rademacher variables** — fair coin flips replacing your labels | [3.5](lessons/03-05-rademacher-complexity.md) |
| $\mathcal F$ | the **loss class** $\{(x,y)\mapsto \ell(h(x),y)\}$ — *not* $\mathcal H$ | [3.5](lessons/03-05-rademacher-complexity.md) |
| $\hat{\mathfrak R}_S$, $\mathfrak R_n$ | empirical Rademacher complexity (on your sample) and its expectation | [3.5](lessons/03-05-rademacher-complexity.md) |
| $B$ (Massart) | the uniform bound $\lvert f(x_i)\rvert \le B$ in Massart's lemma | [3.5](lessons/03-05-rademacher-complexity.md) |
| $\phi$ (feature map) | the lift $\mathcal X \to \mathcal F$ a kernel refuses to perform | [4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md) |
| $K(x,z)$, $G$ | the kernel and its Gram matrix $G_{ij} = K(x_i,x_j)$ | [4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md) |
| $D$ | the dimension of the feature space; $d_{\mathrm{VC}} = D+1$ for affine separators | [4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md) |
| $\mathcal H_K$, $\lVert f\rVert_K$ | the RKHS of $K$, and its norm — **a roughness budget**, not a size | [4.2](lessons/04-02-rkhs-and-the-representer-theorem.md) |
| $K(\cdot,x)$ | the **measuring stick** at $x$: the function that evaluates others there | [4.2](lessons/04-02-rkhs-and-the-representer-theorem.md) |
| $\alpha_i$ (representer) | the $n$ expansion coefficients in $f = \sum_i \alpha_i K(\cdot,x_i)$ | [4.2](lessons/04-02-rkhs-and-the-representer-theorem.md) |
| $\gamma$ (margin) | the **geometric** margin $\min_i y_i w^\top x_i / \lVert w\rVert$ | [4.3](lessons/04-03-maximum-margin-classifiers.md) |
| $R$ (radius) | $\max_i\lVert x_i\rVert$ — **not** a risk. Pairs with $\gamma$ in every margin bound | [4.3](lessons/04-03-maximum-margin-classifiers.md) |
| $\hat R^\gamma_S(h)$ | the fraction of training points with margin **below** $\gamma$ | [4.3](lessons/04-03-maximum-margin-classifiers.md) |
| $C$ (SVM) | the price of a unit of slack. **Large $C$ means LESS regularization** | [4.4](lessons/04-04-support-vector-machines.md) |
| $\xi_i$ | slack: point $i$'s allowance to fall short of the margin, in functional units | [4.4](lessons/04-04-support-vector-machines.md) |
| $\beta_i \in [0,1]$ | the hinge subgradient weight on point $i$; $\beta_i = 0$ means "delete it freely" | [4.4](lessons/04-04-support-vector-machines.md) |
| $L$ (leaves), $\mathcal T_L$ | the leaf budget and the class of trees with at most that many leaves | [5.1](lessons/05-01-decision-trees.md) |
| $\alpha$ (pruning) | the rent charged per leaf in $R_\alpha(T) = \hat R(T) + \alpha\lvert T\rvert$ | [5.1](lessons/05-01-decision-trees.md) |
| $\bar f$ | the **ideal aggregate** $\mathbb E_S[\hat f_S]$ — deterministic, and not computable | [5.2](lessons/05-02-bagging-and-random-forests.md) |
| $\hat{\mathcal D}_n$ | the empirical distribution; drawing from it **is** the bootstrap | [5.2](lessons/05-02-bagging-and-random-forests.md) |
| $B$ (ensemble), $\rho$ | number of members, and pairwise correlation of **two members' predictions at one test point** | [5.2](lessons/05-02-bagging-and-random-forests.md) |
| $\epsilon_t$, $\gamma_t$, $\alpha_t$ | boosting's round-$t$ **weighted** error, its edge $\tfrac12-\epsilon_t$, and its vote weight | [5.3](lessons/05-03-boosting.md) |
| $F_T$, $H$ (boost) | the additive score $\sum_t \alpha_t h_t$ and the classifier $\operatorname{sign}F_T$ | [5.3](lessons/05-03-boosting.md) |
| $W$ (weights), $L$ (layers) | a network's parameter count and its depth | [5.4](lessons/05-04-neural-networks-and-backpropagation.md) |
| $\phi$ (activation) | the coordinatewise nonlinearity; without it a deep net **is** a linear model | [5.4](lessons/05-04-neural-networks-and-backpropagation.md) |
| $p$ (parameters) | the capacity axis of double descent, plotted as $p/n$ | [5.5](lessons/05-05-why-does-deep-learning-generalize.md) |
| $X^{+}$ | the pseudoinverse; $X^{+}y$ is the minimum-norm interpolator | [5.5](lessons/05-05-why-does-deep-learning-generalize.md) |
| $S$ (covariance) | the sample covariance $\tfrac1n\tilde X^\top\tilde X$ of **centred** data | [6.1](lessons/06-01-principal-component-analysis.md) |
| $\lambda_j$, $v_j$ | eigenvalue and eigenvector of $S$. **The eigenvalue *is* the variance** | [6.1](lessons/06-01-principal-component-analysis.md) |
| $U$ | a $p\times k$ matrix of orthonormal columns spanning the code's subspace | [6.1](lessons/06-01-principal-component-analysis.md) |
| $W(C,\mu)$ | within-cluster sum of squares — the k-means objective | [6.2](lessons/06-02-clustering-and-k-means.md) |
| $C_j$, $\mu_j$, $\bar x_j$ | cluster $j$, its centre, and its mean (which is the optimal centre) | [6.2](lessons/06-02-clustering-and-k-means.md) |
| $\mathrm{TSS}$, $B(C)$ | total and **between**-cluster sums of squares; $\mathrm{TSS} = W + B$ | [6.2](lessons/06-02-clustering-and-k-means.md) |
| $z$ (latent) | the unobserved variable in $p(x,z\mid\theta)$ — not a margin | [6.3](lessons/06-03-mixture-models-and-em.md) |
| $q(z)$, $\mathcal L(q,\theta)$ | a guessed distribution over the missing data, and the ELBO it induces | [6.3](lessons/06-03-mixture-models-and-em.md) |
| $\pi_k$, $\phi_k$, $K$ | mixing weight, component parameters, and the number of components | [6.3](lessons/06-03-mixture-models-and-em.md) |
| $H(q)$ | the entropy of $q$ — **not** the hat matrix and not a hypothesis | [6.3](lessons/06-03-mixture-models-and-em.md) |
| $h$ (bandwidth) | the width of a KDE bump — [1.2](lessons/01-02-the-bias-variance-decomposition.md)'s $k$ wearing a hat | [6.4](lessons/06-04-density-estimation.md) |
| $\mu_2$, $R(K)$ | a kernel's second moment and its **roughness** $\int K^2$. $R(K)$ is not a risk | [6.4](lessons/06-04-density-estimation.md) |
| $d$, $d_0$ | the ambient dimension and the **intrinsic** dimension of the data manifold | [6.4](lessons/06-04-density-estimation.md) |

### Symbols that mean different things in different modules

Read this before you trust any formula you half-remember. Every row is a letter
carrying two or more incompatible meanings inside this one course.

| Symbol | Meaning A | Meaning B | Meaning C |
|---|---|---|---|
| $R$ | **population risk** $R(h)$ — [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md) onwards, and $R_\alpha(T)$, a tree's penalized error — [5.1](lessons/05-01-decision-trees.md) | the data **radius** $\max_i\lVert x_i\rVert$ — [4.3](lessons/04-03-maximum-margin-classifiers.md), [4.4](lessons/04-04-support-vector-machines.md), boss 4 | a kernel's **roughness** $R(K) = \int K^2$ — [6.4](lessons/06-04-density-estimation.md) |
| $\sigma$ | the **noise sd**: $\sigma^2 = \operatorname{Var}(\varepsilon)$ — [1.2](lessons/01-02-the-bias-variance-decomposition.md), [2.1](lessons/02-01-linear-regression-as-learning.md) | a **singular value** $\sigma_i$ of $X$ — [2.3](lessons/02-03-ridge-regression-and-shrinkage.md), [2.6](lessons/02-06-gradient-descent-the-workhorse.md) | the **sigmoid** $\sigma(u)$ — [2.2](lessons/02-02-logistic-regression-and-classification.md) — a **Rademacher** variable $\sigma_i = \pm1$ — [3.5](lessons/03-05-rademacher-complexity.md), [4.3](lessons/04-03-maximum-margin-classifiers.md) — and a **permutation** — [6.3](lessons/06-03-mixture-models-and-em.md) |
| $\lambda$ | the **penalty strength** in ridge, lasso, elastic net, SVM — [2.3](lessons/02-03-ridge-regression-and-shrinkage.md), [2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md), [4.4](lessons/04-04-support-vector-machines.md) | an **eigenvalue** of $X^\top X$ or of the covariance matrix, i.e. a variance — [6.1](lessons/06-01-principal-component-analysis.md) | $\lambda^\star = \sigma^2/\beta_j^2$ is the **oracle** penalty, a noise-to-signal ratio — [2.3](lessons/02-03-ridge-regression-and-shrinkage.md), [2.5](lessons/02-05-regularization-as-a-bayesian-prior.md) |
| $d$ | the **feature dimension** — [4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md), [4.3](lessons/04-03-maximum-margin-classifiers.md), [6.4](lessons/06-04-density-estimation.md). **Always write $d_{\mathrm{VC}}$ for the VC dimension** | $d_{\mathrm{VC}}$, the **VC dimension** — [3.3](lessons/03-03-shattering-and-the-vc-dimension.md) onwards. They coincide only by accident (affine separators: $d_{\mathrm{VC}} = d+1$) | $d_0$, the **intrinsic** dimension of the manifold the data sits near — [6.4](lessons/06-04-density-estimation.md) |
| $\epsilon$ / $\varepsilon$ | **PAC accuracy**: the risk tolerance, over a future $x$ — [3.1](lessons/03-01-the-pac-framework.md) onwards | $\varepsilon$, the **noise** in $y = f(x)+\varepsilon$ — [1.2](lessons/01-02-the-bias-variance-decomposition.md), [2.1](lessons/02-01-linear-regression-as-learning.md) | $\epsilon_t$, boosting's round-$t$ **weighted error** — [5.3](lessons/05-03-boosting.md) |
| $\delta$ | **PAC confidence**: the failure budget, over the draw of $S$ — [3.1](lessons/03-01-the-pac-framework.md) onwards | (never a distance, never a Dirac in this course; $\delta_0$ appears only as the spike-and-slab atom in [2.5](lessons/02-05-regularization-as-a-bayesian-prior.md)) | |
| $k$ | the number of **neighbours** in $k$-NN — [1.2](lessons/01-02-the-bias-variance-decomposition.md), [5.2](lessons/05-02-bagging-and-random-forests.md) | the number of **clusters** or of retained **components** — [6.1](lessons/06-01-principal-component-analysis.md), [6.2](lessons/06-02-clustering-and-k-means.md) | the number of **candidates** compared on a validation set — [1.3](lessons/01-03-overfitting-and-train-validation-test.md) — and of **folds** in CV — [`machine-learning` 4.1](../machine-learning/lessons/04-01-model-selection-and-cross-validation.md) |
| $\mathcal H$ vs $\mathcal F$ | $\mathcal H$ is the **hypothesis class**, whose members map $x$ to a prediction | $\mathcal F$ is the **loss class**, whose members map $(x,y)$ to a loss. **The Rademacher bound charges $\mathcal F$, not $\mathcal H$** | For 0-1 loss on $\pm1$ hypotheses, $\hat{\mathfrak R}_S(\mathcal F) = \tfrac12\hat{\mathfrak R}_S(\mathcal H)$, so the bound's $2\hat{\mathfrak R}_S(\mathcal F)$ is $\hat{\mathfrak R}_S(\mathcal H)$ **with no factor at all** — [3.5](lessons/03-05-rademacher-complexity.md) |
| $H$ | the **hat matrix** $X(X^\top X)^{-1}X^\top$, and $H_\lambda$ its ridge cousin — [2.1](lessons/02-01-linear-regression-as-learning.md), [2.3](lessons/02-03-ridge-regression-and-shrinkage.md) | AdaBoost's **final classifier** $H(x) = \operatorname{sign}F_T(x)$ — [5.3](lessons/05-03-boosting.md) | the **entropy** $H(q)$ inside the ELBO — [6.3](lessons/06-03-mixture-models-and-em.md) — and $H_2(\eta)$, the binary entropy — [2.2](lessons/02-02-logistic-regression-and-classification.md) |
| $W$ | the **test block** of a three-way split — [1.3](lessons/01-03-overfitting-and-train-validation-test.md) | a network's **parameter count** — [5.4](lessons/05-04-neural-networks-and-backpropagation.md), [5.5](lessons/05-05-why-does-deep-learning-generalize.md) | the **within-cluster sum of squares** $W(C,\mu)$ — [6.2](lessons/06-02-clustering-and-k-means.md) — and $W^{(\ell)}$, a weight matrix — [5.4](lessons/05-04-neural-networks-and-backpropagation.md) |
| $\gamma$ | the **geometric margin** — [4.3](lessons/04-03-maximum-margin-classifiers.md), [4.4](lessons/04-04-support-vector-machines.md) | boosting's **edge** $\gamma_t = \tfrac12-\epsilon_t$ — [5.3](lessons/05-03-boosting.md) | the **RBF bandwidth** in $\exp(-\gamma\lVert x-z\rVert^2)$ — [4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md) |
| $\alpha$ | the **representer coefficients** $\alpha_i$ — [4.2](lessons/04-02-rkhs-and-the-representer-theorem.md) — and the SVM dual multipliers | the **per-leaf price** in cost-complexity pruning — [5.1](lessons/05-01-decision-trees.md) | AdaBoost's **vote weight** $\alpha_t$ — [5.3](lessons/05-03-boosting.md) — and the elastic net's **mixing** parameter — [2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md) |
| $\beta$ | the **coefficient vector** of a linear model — [2.1](lessons/02-01-linear-regression-as-learning.md) onwards | $\beta_i \in [0,1]$, the **hinge subgradient weight** on point $i$ — [4.4](lessons/04-04-support-vector-machines.md) | |
| $\eta$ | $\eta(x) = \Pr(y=1\mid x)$, the **conditional probability** — [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md), [2.2](lessons/02-02-logistic-regression-and-classification.md), [4.4](lessons/04-04-support-vector-machines.md) | the **learning rate** — [2.6](lessons/02-06-gradient-descent-the-workhorse.md) | |
| $h$ | a **hypothesis** — everywhere | the KDE **bandwidth** — [6.4](lessons/06-04-density-estimation.md) | $h_{ii}$, a **leverage** (hat-matrix diagonal) — [2.1](lessons/02-01-linear-regression-as-learning.md) |
| $L$ | the number of **leaves** in a tree — [5.1](lessons/05-01-decision-trees.md) | the **depth** of a network — [5.4](lessons/05-04-neural-networks-and-backpropagation.md) | $\mathcal L(q,\theta)$, the **ELBO** — [6.3](lessons/06-03-mixture-models-and-em.md); $L(y,F)$, a **loss** — [5.3](lessons/05-03-boosting.md) |
| $B$ | the number of **ensemble members** — [5.2](lessons/05-02-bagging-and-random-forests.md) | the **uniform bound** $\lvert f\rvert \le B$ in Massart's lemma and the RKHS ball radius — [3.5](lessons/03-05-rademacher-complexity.md), [4.2](lessons/04-02-rkhs-and-the-representer-theorem.md) | $B(C)$, the **between**-cluster sum of squares — [6.2](lessons/06-02-clustering-and-k-means.md); $B(\mathcal H,n,\delta)$, a class-only bound — [5.5](lessons/05-05-why-does-deep-learning-generalize.md) |
| $m$ | the **half-window** of a $k$-NN neighbourhood, $k = 2m+1$ — [1.2](lessons/01-02-the-bias-variance-decomposition.md) | the **validation set size** $\lvert V\rvert$ — [1.3](lessons/01-03-overfitting-and-train-validation-test.md) | the number of **$\gamma$-shattered points** — [4.3](lessons/04-03-maximum-margin-classifiers.md) |
| $p$ | the number of **features** — [2.1](lessons/02-01-linear-regression-as-learning.md) onwards | a **density** $p(x)$ or a **probability** $p(x,z\mid\theta)$ — [6.3](lessons/06-03-mixture-models-and-em.md), [6.4](lessons/06-04-density-estimation.md) | the **parameter count** on the double-descent axis $p/n$ — [5.5](lessons/05-05-why-does-deep-learning-generalize.md) |
| $\phi$ | the **feature map** into a kernel's implied space — [4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md), [4.2](lessons/04-02-rkhs-and-the-representer-theorem.md) | the **activation function** of a network unit — [5.4](lessons/05-04-neural-networks-and-backpropagation.md) | $\varphi(z)$ is a **surrogate loss**, and $\phi_\gamma$ the **margin loss** — [2.2](lessons/02-02-logistic-regression-and-classification.md), [4.3](lessons/04-03-maximum-margin-classifiers.md) |
| $y$ encoding | $y \in \{0,1\}$ in logistic regression and the Bayes rule — [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md), [2.2](lessons/02-02-logistic-regression-and-classification.md) | $y \in \{-1,+1\}$ in the whole margin family — [2.2](lessons/02-02-logistic-regression-and-classification.md) through [5.3](lessons/05-03-boosting.md) | The margin family needs $y^2 = 1$; the probability family needs $y$ to be an indicator. Neither works in the other's formulas |

## Definitions

### 0-1 loss

Charge 1 for a wrong label and 0 for a right one — the loss you actually care about
in classification, and the one nobody optimizes.

$$\ell_{01}(\hat y, y) = \mathbf 1[\hat y \ne y], \qquad \ell_{01}(z) = \mathbf 1[z \le 0] \ \text{ as a function of the margin } z = y f(x).$$

It is non-convex and flat, with derivative zero wherever the derivative exists, and
minimizing it over linear classifiers is NP-hard — which is why [2.2](lessons/02-02-logistic-regression-and-classification.md)
replaces it with a convex surrogate sitting above it. Being bounded in $[0,1]$ is
what licenses [Hoeffding](#hoeffdings-inequality) on it without further assumptions.

*Introduced:* [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md)

### Population risk

The average loss your rule would incur over the whole world — the number you care
about and can never compute, because it is an expectation over a distribution you
never observe.

$$R(h) = \mathbb E_{(x,y)\sim\mathcal D}\bigl[\ell(h(x),y)\bigr].$$

Every honest statement in this course is a statement about $R$ obtained without
evaluating it: either a **bound** proved in advance from the capacity of $\mathcal H$
(Module 3), or an **estimate** from data that had no say in choosing $h$
([1.3](lessons/01-03-overfitting-and-train-validation-test.md)). There is no third route.

*Introduced:* [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md); used as the estimand in [1.3](lessons/01-03-overfitting-and-train-validation-test.md), [1.4](lessons/01-04-no-free-lunch-and-inductive-bias.md), [3.1](lessons/03-01-the-pac-framework.md)

### Empirical risk

The same average, taken over the $n$ points you have instead of over $\mathcal D$ —
training error.

$$\hat R_S(h) = \frac1n\sum_{i=1}^{n}\ell(h(x_i),y_i).$$

**Fact 1.** For $h$ fixed *before* $S$ is drawn, $\mathbb E_S[\hat R_S(h)] = R(h)$ —
pure linearity of expectation, and independence is not needed for unbiasedness (it
is needed for the *variance*, which is what [3.2](lessons/03-02-finite-classes-and-uniform-convergence.md)
exploits). **Fact 2.** For $\hat h$ chosen by ERM it is not, and the failure has a
direction: see [optimism](#optimism-of-the-training-error).

*Introduced:* [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md); the gradient version in [2.6](lessons/02-06-gradient-descent-the-workhorse.md), the concentration version in [3.2](lessons/03-02-finite-classes-and-uniform-convergence.md)

### Empirical risk minimization

Try everything in the class, keep whatever fit the data best. Almost every algorithm
in this course is this, or this with a penalty bolted on.

$$\hat h = \operatorname*{arg\,min}_{h\in\mathcal H}\ \hat R_S(h).$$

$\hat h$ is a **random object** — a function of $S$ — which is the single fact that
breaks Fact 1 and creates the whole subject. Three of this course's models are ERM
in disguise: least squares ([2.1](lessons/02-01-linear-regression-as-learning.md)),
logistic regression as maximum likelihood ([2.2](lessons/02-02-logistic-regression-and-classification.md)),
and the SVM with the hinge plus an $\ell_2$ penalty ([4.4](lessons/04-04-support-vector-machines.md)).
Two are **not**: greedy trees ([5.1](lessons/05-01-decision-trees.md)) and Lloyd's
algorithm ([6.2](lessons/06-02-clustering-and-k-means.md)) are heuristics for
NP-hard minimizations, which is where the third error term below comes from.
Training a network ([5.4](lessons/05-04-neural-networks-and-backpropagation.md)) is
ERM over the weight index set, with no claim that the minimizer is reached.

*Introduced:* [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md); the "ERM is enough" theorem is [3.4](lessons/03-04-vc-bounds-and-sample-complexity.md)

### Bayes-optimal predictor

Guess the more likely label at every $x$; the error left over is label noise in
$\mathcal D$ itself, and nothing beats it.

$$h^*(x) = \mathbf 1\bigl[\eta(x) > \tfrac12\bigr], \qquad R^* = \mathbb E_x\bigl[\min(\eta(x),\,1-\eta(x))\bigr].$$

The excess risk of any $h$ is concentrated exactly on where it disagrees, weighted by
how decisive the truth was there:

$$R(h) - R^* = \mathbb E_x\Bigl[\lvert 2\eta(x)-1\rvert\;\mathbf 1[h(x)\ne h^*(x)]\Bigr].$$

*In words: a mistake costs you in proportion to how confident the truth was* — which
is why a threshold in roughly the right place is cheap, and why the $\epsilon$ in a
PAC statement is an $\epsilon$ and not a zero. $h^*$ is not unique where
$\eta = \tfrac12$; $R^*$ always is.

*Introduced:* [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md)

### Bayes-optimal classifier

The same object seen through a surrogate loss: the sign the population minimizer of
your loss should agree with, $\operatorname{sign}(2\eta(x)-1)$. A surrogate that
recovers this sign is [classification-calibrated](#classification-calibration);
logistic, exponential and hinge all are, and the perceptron loss is not.

*Introduced:* [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md); used as the target of surrogate minimization in [2.2](lessons/02-02-logistic-regression-and-classification.md), [4.4](lessons/04-04-support-vector-machines.md), [5.3](lessons/05-03-boosting.md)

### Linearity of expectation

$\mathbb E[\sum_i a_i Z_i] = \sum_i a_i\,\mathbb E[Z_i]$, with **no independence
required**. It is the entire proof that empirical risk is unbiased for a
pre-committed $h$, that a mini-batch gradient is unbiased for the full-batch one,
and that the $k$-NN bias contains no $\sigma^2$ (bias is a first-moment statement;
$\sigma^2$ is a second moment, and the calculation never reaches it).

*Introduced:* [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md); developed in [`prob-stat-refresher` 2.1](../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md)

### Excess risk decomposition

Restricting to $\mathcal H$ costs you something; picking inside $\mathcal H$ from
finite data costs you something more.

$$R(\hat h) - R^* \;=\; \underbrace{\Bigl(\inf_{h\in\mathcal H}R(h) - R^*\Bigr)}_{\text{approximation}} \;+\; \underbrace{\Bigl(R(\hat h) - \inf_{h\in\mathcal H}R(h)\Bigr)}_{\text{estimation}}.$$

The two move in opposite directions on every flexibility knob, and each has its own
module: approximation shrinks as $\mathcal H$ grows (Modules 4–5), estimation grows
(Module 3), and Module 2's regularization is the dial between them. **Unlike the
[bias-variance decomposition](#bias-variance-decomposition), this split costs no
assumption about the loss** — it is the honest general-purpose version.

**A third term, for classes nobody can minimize.** When the ERM is not computed, the
ledger needs one more entry:

$$\text{excess risk} \;=\; \text{approximation} \;+\; \text{estimation} \;+\; \underbrace{\bigl[\hat R_S(\hat T) - \hat R_S(T_{\mathrm{ERM}})\bigr]}_{\text{optimization error}\ \ge\ 0}.$$

It is exactly zero for a convex problem a solver reaches, and real and uncontrolled
for greedy trees ([5.1](lessons/05-01-decision-trees.md), where a worked instance has
it at $1/4$), Lloyd's algorithm ([6.2](lessons/06-02-clustering-and-k-means.md)) and
network training. **More data does not shrink it.**

*Introduced:* [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md); the third term in [5.1](lessons/05-01-decision-trees.md); the three-way reading of universal approximation in [5.4](lessons/05-04-neural-networks-and-backpropagation.md); the parametric-versus-nonparametric trade in [6.4](lessons/06-04-density-estimation.md)

### Bias-variance decomposition

Your expected squared error at a point is how far your method aims off-centre, plus
how much it wobbles, plus noise nobody can predict.

$$\mathbb E\bigl[(y_0 - \hat f(x_0))^2\bigr] = \underbrace{\bigl(\mathbb E[\hat f(x_0)] - f(x_0)\bigr)^2}_{\text{bias}^2} + \underbrace{\operatorname{Var}\bigl(\hat f(x_0)\bigr)}_{\text{variance}} + \underbrace{\sigma^2}_{\text{irreducible}}.$$

Both expectations run over the **draw of the training set**, so bias and variance are
properties of a *procedure*, never of the model in front of you.

**Two cross terms die for two different reasons, and only one of the reasons can
fail.** The first vanishes because the fresh noise $\varepsilon_0$ is independent of
$S$; the second because $\mathbb E[\hat\mu - \hat f(x_0)] = 0$ by the definition of
the mean. Break the first — evaluate at a *training* point, where the test noise **is**
one of the training noises — and it survives with a negative sign. For $k$-NN the
arithmetic is exact:

$$\mathbb E\bigl[(y_{x_0} - \hat f(x_0))^2\bigr] = \text{bias}^2 + \sigma^2\frac{k-1}{k}, \qquad \text{against a test MSE of } \ \text{bias}^2 + \sigma^2\frac{k+1}{k},$$

a gap of exactly $2\sigma^2/k$, and zero at $k=1$. **Zero training error is a theorem
about self-prediction, not evidence of anything.**

**Squared loss only.** The step that made it work was $(a+b)^2 = a^2+2ab+b^2$; 0-1
loss has no such split, and loose "bias/variance" talk about classifiers is an
analogy. This course owns the theorem; [`machine-learning` 1.2](../machine-learning/lessons/01-02-generalization-and-the-bias-variance-tradeoff.md)
states it and cites the proof here.

*Introduced:* [1.2](lessons/01-02-the-bias-variance-decomposition.md); the knob attached in [2.3](lessons/02-03-ridge-regression-and-shrinkage.md); attacked term-by-term in [5.2](lessons/05-02-bagging-and-random-forests.md) and [5.3](lessons/05-03-boosting.md); re-run with a bandwidth in [6.4](lessons/06-04-density-estimation.md); the centre-of-mass version in [6.2](lessons/06-02-clustering-and-k-means.md)

### Irreducible error

$\sigma^2 = \operatorname{Var}(\varepsilon)$: even a perfect prediction of $f(x_0)$
misses the observed $y$, because $y$ carries fresh noise. It is a property of
$\mathcal D$, not of you, and no model, data budget or cleverness touches it. Its
0-1-loss counterpart is the Bayes risk $R^*$. Confusing it with a fixable modelling
error is the fastest route to overfitting.

*Introduced:* [1.2](lessons/01-02-the-bias-variance-decomposition.md)

### k-nearest neighbours

Predict at $x_0$ by averaging the labels of the $k$ nearest training inputs. No
fitting, no coefficients, one knob — which makes it the cleanest laboratory for the
decomposition. **Claimed by this course because no other course in the library
teaches it.**

On the integer grid with odd $k = 2m+1$ and $f(x) = x^2$:

$$\operatorname{Var}\bigl(\hat f(x_0)\bigr) = \frac{\sigma^2}{k}, \qquad \text{bias} = \frac{1}{k}\sum_{j=-m}^{m}f(x_0+j) - f(x_0) = \frac{m(m+1)}{3} = \frac{k^2-1}{12},$$

**the same at every $x_0$**, because $x^2$ has constant curvature and a symmetric
window overshoots by the same amount wherever you put it. Turning $k$ up averages
more labels (variance down) drawn from further away (bias up). Balancing the two on a
grid of spacing $h$ gives $k^\star = (36\sigma^2)^{1/5}h^{-4/5}$ and reducible error
$\propto n^{-4/5}$ — **the $d=1$ case of [6.4](lessons/06-04-density-estimation.md)'s
$n^{-4/(4+d)}$**, and slower than the $1/n$ a correct parametric model earns.

*Introduced:* [1.2](lessons/01-02-the-bias-variance-decomposition.md); its stability (and why bagging it is nearly pointless) in [5.2](lessons/05-02-bagging-and-random-forests.md); the rate generalized in [6.4](lessons/06-04-density-estimation.md)

### Held-out validation

A measuring instrument, and looking at it consumes it.

$$\hat R_V(h) = \frac{1}{m}\sum_{(x,y)\in V}\ell(h(x),y), \qquad m = \lvert V\rvert.$$

**Proposition (unbiasedness).** If $h$ is a function of anything independent of $V$,
then $\mathbb E[\hat R_V(h)] = R(h)$. *Nothing about how $h$ was built matters* — not
the class, not the optimizer, not how badly you overfit. The load-bearing word is
**fixed**, and it is the one word that fails for training error.

| set | what it may touch | what its average estimates |
|---|---|---|
| train $T$ | fitting, any number of times | nothing — $\hat h$ was chosen to minimize it |
| validation $V$ | comparing $k$ candidates | the winner's risk, **biased low** by up to $\sqrt{\ln k/(2m)}$ |
| test $W$ | one evaluation, at the end | $R(\hat h)$, unbiased — while it stays sealed |

The mechanics of building the estimate ($k$-fold, nested CV, the one-standard-error
rule) are **ceded to** [`machine-learning` 4.1](../machine-learning/lessons/04-01-model-selection-and-cross-validation.md);
this course owns the estimand.

*Introduced:* [1.3](lessons/01-03-overfitting-and-train-validation-test.md); the finite-class version of the same argument is [3.2](lessons/03-02-finite-classes-and-uniform-convergence.md)

### Validation standard error

The honest number is honest on average, and wobbles by about this much. For 0-1 loss
the $m$ held-out losses are i.i.d. Bernoulli, so $m\hat R_V \sim \mathrm{Bin}(m,R(h))$ and

$$\operatorname{se}\bigl(\hat R_V(h)\bigr) = \sqrt{\frac{R(h)\bigl(1-R(h)\bigr)}{m}}, \qquad \text{95 percent interval} \approx \hat R_V \pm 2\operatorname{se}.$$

At $R = 0.1$: $m = 100 \to 0.030$, $m = 400 \to 0.015$, $m = 900 \to 0.010$,
$m = 3600 \to 0.005$. **Precision costs quadratically** — halving the standard error
takes four times the data — so a 100-point held-out set cannot tell 10 percent error
from 16 percent, and the last decimal place is the expensive one.

*Introduced:* [1.3](lessons/01-03-overfitting-and-train-validation-test.md); it is [3.4](lessons/03-04-vc-bounds-and-sample-complexity.md)'s $1/\epsilon^2$ rate with the supremum over $\mathcal H$ removed, which is exactly why it is so much smaller

### No-free-lunch theorem

Averaged over every way the world could be labelled, every learner is exactly a coin
flip off its training set.

> Let $\lvert\mathcal X\rvert \ge 2n$. For **every** learner $A$ there is a
> distribution $\mathcal D$ such that some $h^*$ has $R_{\mathcal D}(h^*) = 0$ and
> $$\mathbb E_{S\sim\mathcal D^n}\bigl[R_{\mathcal D}(A(S))\bigr] \;\ge\; \tfrac14.$$

**The proof in one move.** Fix an unseen $u$ and pair each labelling $f$ with
$f^{(u)}$, which differs only at $u$. Both give the *same* sample, hence the *same*
hypothesis, hence the *same* prediction at $u$ — and exactly one of them is right. So
the average error at $u$ is **exactly** $\tfrac12$, for every learner, and
$\lvert\mathcal X\rvert\ge 2n$ forces at least half the domain unseen: $\tfrac12\cdot\tfrac12 = \tfrac14$.
A maximum is at least a mean, which converts the average into an existence claim.

**Corollary (a bad draw, not merely a bad average).** Risk is bounded by 1, so
reverse Markov gives
$\Pr[R_{\mathcal D}(A(S)) \ge \tfrac18] \ge \tfrac{1/4-1/8}{1-1/8} = \tfrac17$: on that
same $\mathcal D$, at least one training set in seven leaves you worse than $1/8$.

The failure has **nothing to do with noise** — each $\mathcal D_i$ was built from a
deterministic labelling. Its restatement in capacity terms is
"$d_{\mathrm{VC}} = \infty$ implies not PAC learnable"
([3.4](lessons/03-04-vc-bounds-and-sample-complexity.md)); its restatement in
Module 6 is that the manifold assumption is a bet, not a theorem
([6.4](lessons/06-04-density-estimation.md)).

*Introduced:* [1.4](lessons/01-04-no-free-lunch-and-inductive-bias.md); the necessity half of [3.4](lessons/03-04-vc-bounds-and-sample-complexity.md)'s fundamental theorem

### Inductive bias

The part of the answer that came from you rather than from the data: the restriction
of $\mathcal H$, or the weighting of its members, that no-free-lunch proves you
cannot decline to supply.

| hypothesis class | the bet it is making |
|---|---|
| linear functions $w^\top x + b$ | feature effects **add**; there are no interactions |
| small $\lVert w\rVert_2$ (ridge, [2.3](lessons/02-03-ridge-regression-and-shrinkage.md)) | the truth is **smooth** — nearby inputs get nearby outputs |
| sparse $\beta$ (lasso, [2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md)) | **few things matter**, and the rest are exactly zero |
| a kernel $K$ ([4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md), [4.2](lessons/04-02-rkhs-and-the-representer-theorem.md)) | "similar" means what $K$ says it means; smooth in **that** metric |
| a large margin ([4.3](lessons/04-03-maximum-margin-classifiers.md)) | the truth keeps its distance from the data |
| axis-aligned trees ([5.1](lessons/05-01-decision-trees.md)) | interactions are **few**, and the useful cuts are coordinate-wise |
| the data lies near a $d_0$-manifold ([6.4](lessons/06-04-density-estimation.md)) | the ambient dimension is a lie; the real one is much smaller |

How small a bet a class is, in numbers: on 100 points there are
$2^{100} \approx 1.27\times10^{30}$ labellings, and thresholds realise $101$ of them,
intervals $5{,}051$, affine separators in $\mathbb R^2$ $9{,}902$, affine separators in
$\mathbb R^{10}$ about $3.50\times10^{13}$ — a $10^{-17}$ fraction. Module 3's whole
project is the invoice for that bet, and it comes to $\ln\lvert\mathcal H\rvert$ or
$d_{\mathrm{VC}}\ln n$ — the *log* of the count, i.e. the bits it takes to name a
hypothesis.

*Introduced:* [1.4](lessons/01-04-no-free-lunch-and-inductive-bias.md); priced in [3.2](lessons/03-02-finite-classes-and-uniform-convergence.md), [3.4](lessons/03-04-vc-bounds-and-sample-complexity.md); made explicit as a prior in [2.5](lessons/02-05-regularization-as-a-bayesian-prior.md); the open version in [5.5](lessons/05-05-why-does-deep-learning-generalize.md)

### Hat matrix

The matrix that puts the hat on $y$: the orthogonal projection onto the column space
of $X$, and the object whose **trace** carries the whole optimism story.

$$H = X(X^\top X)^{-1}X^\top, \qquad \hat y = Hy, \qquad H = H^\top,\quad H^2 = H,\quad HX = X,\quad \operatorname{tr}(H) = p.$$

The ridge version is a **linear smoother** rather than a projection:

$$H_\lambda = X(X^\top X + \lambda I)^{-1}X^\top, \qquad \operatorname{tr}(H_\lambda) = \sum_{i=1}^{p}\frac{\sigma_i^2}{\sigma_i^2+\lambda} = \mathrm{df}(\lambda).$$

The one lemma both uses: for fixed $A$, $\mathbb E[\varepsilon^\top A\varepsilon] = \sigma^2\operatorname{tr}(A)$,
because $\mathbb E[\varepsilon_i\varepsilon_j]$ is $\sigma^2$ on the diagonal and $0$
off it — **only the diagonal survives.**

*Introduced:* [2.1](lessons/02-01-linear-regression-as-learning.md); generalized to any smoother in [2.3](lessons/02-03-ridge-regression-and-shrinkage.md). The projection facts are [`linalg-refresher` 4.2](../linalg-refresher/lessons/04-02-projection-least-squares.md); the fitting mechanics are [`machine-learning` 1.3](../machine-learning/lessons/01-03-linear-regression-and-least-squares.md)

### Optimism of the training error

Every parameter you fit absorbs about one unit of noise variance, which is
**subtracted** from the error you can see and **added** to the error you cannot.

> **Theorem (fixed design).** With $y = X\beta + \varepsilon$,
> $\operatorname{Cov}(\varepsilon) = \sigma^2 I$, $\operatorname{rank}(X) = p \le n$,
> and $\hat R_{\text{out}}$ the error at the **same design points $X$ with fresh
> noise**,
> $$\mathbb E[\hat R_{\text{in}}] = \sigma^2\Bigl(1-\frac pn\Bigr), \qquad \mathbb E[\hat R_{\text{out}}] = \sigma^2\Bigl(1+\frac pn\Bigr), \qquad \text{optimism} = \frac{2p\sigma^2}{n}.$$

Both halves are $\operatorname{tr}(H) = p$ used twice, with opposite signs. Three
readings: the optimism is exactly **twice** the average $\operatorname{Var}(\hat y_i) = p\sigma^2/n$,
i.e. the variance term counted once on each side of the ledger; Mallows' $C_p$, AIC
and adjusted $R^2$ are all this correction wearing different hats; and past $p = n$
the formula would go negative, which is the algebra reporting that its hypothesis has
failed.

**This is an in-sample statement, and the distinction matters.** $\sigma^2(1+p/n)$ is
the **in-sample prediction error** — same $X$, fresh noise. For a genuinely new
random $x$ under a Gaussian design the value is

$$\sigma^2\Bigl(1 + \frac{p}{n-p-1}\Bigr),$$

because you now also pay for estimating where the new point sits. The two agree to
first order and diverge badly when $p/n$ is large: at $n = 100$, $p = 40$ the honest
figure is $1.678\sigma^2$ (simulated $1.682$) against $1.400\sigma^2$ for the $1+p/n$
form. **Do not quote the fixed-design number as expected test risk.** The
random-design expression is also what diverges as $p \to n-1$ and produces the left
half of the [double descent](#double-descent) peak.

**For a general linear smoother** the *difference* survives even under
misspecification, because the model-bias term $\lVert(I-H)\mu\rVert^2$ is identical
on both sides and cancels:

$$\mathbb E[\hat R_{\text{out}}] - \mathbb E[\hat R_{\text{in}}] = \frac{2\sigma^2\operatorname{tr}(H)}{n}.$$

The two *individual* formulas do **not** survive — ridge is biased, so both risks
pick up that extra term and neither equals $\sigma^2(1 \mp \mathrm{df}/n)$.

*Introduced:* [2.1](lessons/02-01-linear-regression-as-learning.md); generalized in [2.3](lessons/02-03-ridge-regression-and-shrinkage.md); the $s\log p/n$ sparse analogue in [2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md); the nonparametric analogue in [3.4](lessons/03-04-vc-bounds-and-sample-complexity.md)

### The sigmoid and log-odds

Logistic regression is not a model of the probability; it is a **linear model of the
log-odds**, and nothing else about it is new.

$$\log\frac{\Pr(y=1\mid x)}{\Pr(y=-1\mid x)} = w^\top x \qquad\Longleftrightarrow\qquad \Pr(y=1\mid x) = \sigma(w^\top x), \qquad \sigma(u) = \frac{1}{1+e^{-u}}.$$

With $\sigma(-u) = 1-\sigma(u)$ the negative log-likelihood of one example collapses
to a function of the margin alone, $\log(1+e^{-y w^\top x})$ — so **maximum
likelihood for the logistic model is exactly ERM with the logistic loss.** The
gradient $X^\top(p-y)$, the odds-ratio reading of a coefficient and a numeric fitting
trace are **ceded to** [`machine-learning` 1.5](../machine-learning/lessons/01-05-logistic-regression-and-classification.md).

*Introduced:* [2.2](lessons/02-02-logistic-regression-and-classification.md)

### Logistic loss

$\varphi(z) = \log_2(1+e^{-z})$ — convex, smooth, and **calibrated for
probabilities**: its population minimizer is the log-odds, so a sigmoid recovers
$\eta$.

$$f^*_{\text{logistic}}(x) = \log\frac{\eta(x)}{1-\eta(x)}, \qquad \min_f C_\varphi(\eta,f) = H_2(\eta) \ \text{bits}.$$

The base-2 logarithm is not decoration: at $z=0$ the natural-log version equals
$\ln 2 \approx 0.693 < 1$, so it **fails to upper-bound the step**; dividing by
$\ln 2$ fixes the bound and changes no minimizer. The pretty consequence of the
normalization: the smallest achievable logistic risk is the conditional entropy
$H(y\mid x)$, so training a classifier is *spending bits*
([`information-theory` 1.1](../information-theory/lessons/01-01-entropy-uncertainty-surprise.md)).

**On separable data the MLE does not exist.** Along $w = t\,w_0$ every margin grows,
every loss term falls, and the infimum $0$ is not attained — convex and bounded below
but not coercive, so $\lVert\hat w\rVert \to \infty$. Any $\tfrac\lambda2\lVert w\rVert^2$
restores a unique minimizer, and as $\lambda\to0^+$ its **direction** converges to the
maximum-margin direction of [4.3](lessons/04-03-maximum-margin-classifiers.md).

*Introduced:* [2.2](lessons/02-02-logistic-regression-and-classification.md); the separable-data role of the penalty in [2.3](lessons/02-03-ridge-regression-and-shrinkage.md); the implicit-bias version in [5.5](lessons/05-05-why-does-deep-learning-generalize.md)

### Hinge loss

What a point pays for failing to clear the margin: linear in the shortfall, then
**exactly zero** past $z = 1$.

$$\ell_{\text{hinge}}(z) = \max(0,\ 1-z), \qquad z = y f(x), \qquad \xi_i = \max\bigl(0,\ 1 - y_i f(x_i)\bigr).$$

Three consequences of the same flat region, and it is worth keeping them apart.

1. **Upper bound.** $\max(0,1-z) \ge \mathbf 1[z\le0]$ everywhere (check the three
   regions), with equality only on the flat part. So small hinge risk is *evidence*.
2. **Calibrated for the decision, not the probability.** Conditioned on $x$,
   $H(a) = \eta\max(0,1-a) + (1-\eta)\max(0,1+a)$ is the straight line
   $1 + a(1-2\eta)$ on $[-1,1]$ and increasing outside it, so the minimum sits at an
   endpoint:
   $$\operatorname*{arg\,min}_a H(a) = \operatorname{sign}(2\eta-1), \qquad \min_a H(a) = 2\min(\eta,1-\eta) = 2R^*(x).$$
   **The population hinge minimizer is $\pm1$ and nothing else.** It reports the
   verdict and destroys the confidence, and no monotone map recovers $\eta$ — a fact
   that survives infinite data. Its excess risk does bound the 0-1 excess risk:
   $R_{01}(f) - R^*_{01} \le R_{\text{hinge}}(f) - R^*_{\text{hinge}}$.
3. **Sparsity.** The subgradient of the SVM objective is
   $$\lambda w - \frac1n\sum_{i=1}^{n}\beta_i y_i x_i, \qquad \beta_i = \begin{cases} 1 & z_i < 1\\ {[0,1]} & z_i = 1\\ 0 & z_i > 1,\end{cases}$$
   so at the optimum $w = \frac{1}{\lambda n}\sum_i \beta_i y_i x_i$ and every point
   with $z_i > 1$ contributes **exactly nothing**. That is what a support vector is,
   derived without ever writing $\alpha$. (Setting $\alpha_i = \beta_i/(\lambda n) = C\beta_i$
   reproduces the box $0\le\alpha_i\le C$ of [`machine-learning` 2.3](../machine-learning/lessons/02-03-soft-margins-and-the-svm-dual.md).)

*Introduced:* [2.2](lessons/02-02-logistic-regression-and-classification.md) as a surrogate; owned in full by [4.4](lessons/04-04-support-vector-machines.md)

### Classification-calibration

A convex margin loss $\varphi$ is classification-calibrated **iff** it is
differentiable at $0$ with $\varphi'(0) < 0$. For such a $\varphi$,
$\operatorname{sign}f^*_\varphi(x) = \operatorname{sign}(2\eta(x)-1)$ wherever
$\eta \ne \tfrac12$, and driving the $\varphi$-risk to its infimum **over all
measurable $f$** drives the 0-1 risk to the Bayes risk.

$\varphi'(0)$ is $-1/(2\ln 2)$ for logistic, $-1$ for hinge, $-1$ for exponential —
all three qualify. The perceptron loss $\max(0,-z)$ does not: it is convex, sits
above the step, and is useless, because $f\equiv0$ minimizes it for every
distribution. The hinge's shift from $\max(0,-z)$ to $\max(0,1-z)$ is exactly what
repairs it — the difference between a loss that pushes and a loss that shrugs.

**What calibration is not.** It is a statement about the minimizer over *all*
measurable $f$ with *infinite* data. Inside a restricted class the surrogate
minimizer can have strictly worse 0-1 training error than the 0-1 minimizer in the
same class — [2.2](lessons/02-02-logistic-regression-and-classification.md) builds a
five-point dataset where both the hinge and logistic minimizers make a mistake the
0-1 minimizer avoids. Calibration removes the *surrogate* from the list of suspects;
it does not remove approximation error.

*Introduced:* [2.2](lessons/02-02-logistic-regression-and-classification.md); applied to the hinge in [4.4](lessons/04-04-support-vector-machines.md), to the exponential loss in [5.3](lessons/05-03-boosting.md), and to boosting's margins in [5.3](lessons/05-03-boosting.md)

### Ridge regression

Add a quadratic tax on the coefficient vector — buy a little bias, sell a lot of
variance. The tax is felt unevenly: directions the data resolves well are barely
touched, directions it barely resolves are crushed.

$$\hat\beta_\lambda = \operatorname*{arg\,min}_\beta\ \lVert y - X\beta\rVert^2 + \lambda\lVert\beta\rVert_2^2.$$

$X^\top X$ is PSD, so every eigenvalue of $X^\top X + \lambda I$ is at least
$\lambda > 0$: **the inverse always exists, even when $p > n$.** Nothing is ever set
exactly to zero — that needs a non-differentiable penalty
([2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md)). The penalty is **not
scale-free**, so standardize the columns and leave the intercept unpenalized.

*Introduced:* [2.3](lessons/02-03-ridge-regression-and-shrinkage.md); the closed form and SVD picture are **ceded to** [`machine-learning` 1.4](../machine-learning/lessons/01-04-regularization-ridge-and-lasso.md); the RKHS version is [4.2](lessons/04-02-rkhs-and-the-representer-theorem.md); the same shape appears in the SVM in [4.4](lessons/04-04-support-vector-machines.md) and in tree pruning in [5.1](lessons/05-01-decision-trees.md)

### Ridge estimator

$$\hat\beta_\lambda = (X^\top X + \lambda I)^{-1}X^\top y, \qquad \text{shrinkage on singular direction } i:\ \ \frac{\sigma_i^2}{\sigma_i^2+\lambda} \in (0,1].$$

Under an orthonormal design it is pure proportional shrinkage,
$\hat\beta_j = z_j/(1+\lambda)$ with $z_j = x_j^\top y$, and the ledger is exact:

$$\operatorname{bias}^2 = \Bigl(\frac{\lambda}{1+\lambda}\Bigr)^2\beta_j^2, \qquad \operatorname{Var} = \frac{\sigma^2}{(1+\lambda)^2}, \qquad \mathrm{MSE}(\lambda) = \frac{\lambda^2\beta_j^2+\sigma^2}{(1+\lambda)^2}.$$

$$\frac{d}{d\lambda}\mathrm{MSE}(\lambda) = \frac{2(\lambda\beta_j^2 - \sigma^2)}{(1+\lambda)^3} \quad\Longrightarrow\quad \lambda^\star = \frac{\sigma^2}{\beta_j^2}, \qquad \mathrm{MSE}(\lambda^\star) = \frac{\sigma^2\beta_j^2}{\sigma^2+\beta_j^2} < \sigma^2 = \mathrm{MSE}(0).$$

> **Theorem.** For every $\beta_j$ and every $\sigma^2 > 0$ there is a $\lambda > 0$
> with strictly smaller MSE than OLS. *Proof:* $\mathrm{MSE}'(0) = -2\sigma^2 < 0$.

**The first unit of shrinkage is always free**, and the derivative at zero does not
mention $\beta_j$ at all. This does not contradict Gauss–Markov, which quantifies
over *linear unbiased* estimators and minimizes *variance*; ridge is biased and MSE
is variance plus bias squared. The unbiasedness constraint is **binding**, and its
price is $\sigma^4/(\sigma^2+\beta_j^2)$ in excess MSE.

**No 50/50 rule at the optimum.** At $\lambda^\star$ the split is
$\operatorname{bias}^2 : \operatorname{Var} = \sigma^2 : \beta_j^2$ (up to the common
factor), so the halves are equal **only when $\beta_j^2 = \sigma^2$**. The tidy
instance $\beta = 2$, $\sigma^2 = 4$ splits $1$ and $1$ for that reason and no other;
$\beta = 1$, $\sigma^2 = 4$ gives $0.64$ and $0.16$.

*Introduced:* [2.3](lessons/02-03-ridge-regression-and-shrinkage.md); read as a MAP estimate in [2.5](lessons/02-05-regularization-as-a-bayesian-prior.md); approached from the optimizer's side in [2.6](lessons/02-06-gradient-descent-the-workhorse.md)

### Effective degrees of freedom

How many parameters a shrunken fit is *actually* spending — a shrinkage-weighted
count of directions, generally not an integer.

$$\mathrm{df}(\lambda) = \operatorname{tr}(H_\lambda) = \sum_{i=1}^{p}\frac{\sigma_i^2}{\sigma_i^2+\lambda}, \qquad \mathrm{df}(0) = p, \qquad \mathrm{df}(\infty) = 0.$$

It is the right notion because it is **the quantity that appears in the optimism
formula**: the gap is $2\sigma^2\mathrm{df}(\lambda)/n$, which reduces to
$2p\sigma^2/n$ when $H$ is a projection. It is *not* a count of surviving parameters
— $H_\lambda$ has rank $p$ at every finite $\lambda$ and all $p$ coefficients are
nonzero with probability one.

Worked spectrum, $\sigma = (3,2,1,0.5)$ so $\sigma_i^2 = (9,4,1,0.25)$:

| $\lambda$ | shrinkage factors | $\mathrm{df}(\lambda)$ | optimism at $n=100$, $\sigma^2=2$ |
|---|---|---|---|
| $0$ | $1,\ 1,\ 1,\ 1$ | $4$ | $0.160$ |
| $1$ | $\tfrac9{10},\ \tfrac45,\ \tfrac12,\ \tfrac15$ | $\tfrac{12}{5} = 2.4$ | $0.096$ |
| $10$ | $\tfrac9{19},\ \tfrac27,\ \tfrac1{11},\ \tfrac1{41}$ | $\approx 0.875$ | $0.035$ |

*Introduced:* [2.3](lessons/02-03-ridge-regression-and-shrinkage.md); reused in [2.5](lessons/02-05-regularization-as-a-bayesian-prior.md) and badly needed in [5.5](lessons/05-05-why-does-deep-learning-generalize.md), where the parameter count stops meaning anything

### Soft thresholding

Move each coefficient toward the origin by a fixed amount and stop when you get
there. **In this course's convention** — the fit term carries a $\tfrac12$ —

$$\hat\beta(\lambda) = \operatorname*{arg\,min}_\beta\ \tfrac12\lVert y - X\beta\rVert_2^2 + \lambda\lVert\beta\rVert_1, \qquad \hat\beta_j = \operatorname{sign}(z_j)\bigl(\lvert z_j\rvert - \lambda\bigr)_+ \ \ \text{when } X^\top X = I.$$

**The threshold is $\lambda$ here and $\lambda/2$ in [`machine-learning` 1.4](../machine-learning/lessons/01-04-regularization-ridge-and-lasso.md)**,
which writes the fit term without the $\tfrac12$. Same estimator, same path,
relabelled axis — see [Normalization conventions](#normalization-conventions-read-this-before-comparing-with-the-sibling-card).

There is a **dead zone of half-width $\lambda$** in which coefficients are set exactly
to zero; outside it the map runs parallel to the identity. So the lasso removes a
constant *amount* from every survivor while ridge removes a constant *fraction* of
every coefficient — different profiles, not different dial settings. Soft
thresholding is also the **proximal operator** of $\lambda\lVert\cdot\rVert_1$, which
is what makes proximal gradient descent (ISTA) return exact zeros where a raw
subgradient step never does.

*Introduced:* [2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md); as the fix for the kink in [2.6](lessons/02-06-gradient-descent-the-workhorse.md); the MAP reading in [2.5](lessons/02-05-regularization-as-a-bayesian-prior.md). The $\ell_1$-ball corner geometry is **ceded to** [`convex-optimization` 5.1](../convex-optimization/lessons/05-01-least-squares-lasso.md)

### Lasso KKT conditions

An **optimality certificate** you can check by hand: hand it a claimed answer and it
says yes or no, and when it says no it tells you which variable is wrong.

With $r = y - X\hat\beta$ and the $\tfrac12$-convention above, $\hat\beta$ is optimal
**if and only if** for every $j$

$$x_j^\top r = \lambda\operatorname{sign}(\hat\beta_j) \ \ \text{when } \hat\beta_j \ne 0, \qquad \bigl\lvert x_j^\top r\bigr\rvert \le \lambda \ \ \text{when } \hat\beta_j = 0.$$

*In words: every variable **in** the model is correlated with the leftover residual by
exactly $\lambda$; every variable **out** is correlated by at most $\lambda$.*
Because the problem is convex the conditions are **sufficient**, not merely
necessary — so a failed certificate always means a strictly better point exists, and
there are no false alarms. Cost: one matrix–vector product.

*Introduced:* [2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md); rehearsed in [2.6](lessons/02-06-gradient-descent-the-workhorse.md). KKT itself is **ceded to** [`convex-optimization` 3.3](../convex-optimization/lessons/03-03-kkt-conditions.md)

### Elastic net

$$\operatorname*{arg\,min}_\beta\ \tfrac12\lVert y-X\beta\rVert_2^2 + \alpha\lVert\beta\rVert_1 + (1-\alpha)\lVert\beta\rVert_2^2.$$

The $\ell_2$ term is strictly convex, so the objective is strictly convex and the
solution is **unique and continuous in the data** — the active set can no longer jump
discontinuously. It also produces the **grouping effect**: correlated columns receive
similar coefficients instead of one taking everything. On the worked instance with
$\rho = 0.96$, a 10 percent perturbation of $y$ flips the lasso's answer from
"variable 2 matters, variable 1 does not" to exactly the reverse, while the elastic
net degrades the flip to a smooth exchange of about $0.037$ in each coordinate.

You trade a sharper story ("these eight") for a truer one ("this group of
eight-ish").

*Introduced:* [2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md)

### Irrepresentable condition

The design-level condition under which lasso selection is consistent: **no irrelevant
column may be well enough reproduced by the relevant ones to impersonate them.**

$$\bigl\lVert X_{\mathcal S^c}^\top X_{\mathcal S}\,(X_{\mathcal S}^\top X_{\mathcal S})^{-1}\operatorname{sign}(\beta_{\mathcal S})\bigr\rVert_\infty < 1.$$

It is a condition on the **design**, not on the sample size — no amount of extra data
rescues you if it fails — and it is not checkable in practice, because it refers to
the support you are trying to find. Its two-column form is the visible version: with
unit-norm $x_1,x_2$, $\rho = x_1^\top x_2$ and $c_j = x_j^\top y$, the one-sparse
answer $(0, c_2-\lambda)$ is optimal exactly when

$$c_1 - \rho c_2 \le \lambda(1-\rho).$$

**The room you have to tell the two variables apart is proportional to $1-\rho$**, so
as $\rho \to 1$ the winner is decided by a gap that noise controls. A condition
satisfied with no margin ($\rho = 0.96$, margin $0.04$) buys nothing at finite $n$.

*Introduced:* [2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md)

### MAP estimation

**A loss is a negative log-likelihood; a penalty is a negative log-prior.** Take logs
in Bayes' rule and the product becomes a sum:

$$\log p(\beta\mid y) = \underbrace{\log p(y\mid\beta)}_{\text{fit}} + \underbrace{\log p(\beta)}_{\text{penalty}} + C,$$

so regularized fitting is maximum likelihood with a tax, and the tax schedule *is* a
probability distribution over coefficients. The shape reading: a prior **smooth** at
zero gives a penalty flat at zero, which exerts no force and never produces an exact
zero; a prior with a **cusp** at zero gives a penalty with a kink, whose jump in slope
pins a coefficient there. The peak becomes the kink.

**MAP is not the posterior**, in four escalating steps:

1. The mode is one number; the posterior is a distribution. In the Gaussian case
   $\beta\mid y \sim \mathcal N\bigl((X^\top X+\lambda I)^{-1}X^\top y,\ \sigma^2(X^\top X+\lambda I)^{-1}\bigr)$,
   so the mode *is* the mean and MAP loses only the covariance — which is the entire
   uncertainty statement.
2. Outside the Gaussian case the mode is not even the mean. Under a Laplace prior the
   posterior mean is a different estimator, and it is **never sparse**.
3. MAP is **not invariant to reparameterization** (the prior density picks up a
   Jacobian); the MLE is. "The most probable parameter value" is a statement about
   your coordinates as much as your beliefs.
4. **The lasso is not Bayesian variable selection.** $\{\beta_j = 0\}$ is a hyperplane
   and the posterior has a density, so $\Pr(\beta_j = 0\mid y) = 0$ *exactly, for
   every dataset* — while the MAP sets $\hat\beta_j = 0$ with positive probability
   over datasets (at $\sigma^2 = 1$, $b = 1$, $\beta^0 = 0.5$: about $0.6247$). A
   **mode** of a continuous density is not an **atom** of probability. A prior that
   genuinely believes in exact zeros needs a point mass — spike-and-slab — and then
   $\Pr(\beta_j = 0\mid y)$ is a number you may quote.

*Introduced:* [2.5](lessons/02-05-regularization-as-a-bayesian-prior.md)

### Ridge as a MAP estimate

With $y\mid\beta \sim \mathcal N(X\beta,\sigma^2 I)$ and $\beta \sim \mathcal N(0,\tau^2 I)$,
negate the log-posterior and multiply by $2\sigma^2$:

$$\operatorname*{arg\,max}_\beta \log p(\beta\mid y) = \operatorname*{arg\,min}_\beta\ \lVert y - X\beta\rVert^2 + \frac{\sigma^2}{\tau^2}\lVert\beta\rVert_2^2, \qquad \boxed{\ \lambda = \frac{\sigma^2}{\tau^2}\ }$$

**The penalty is a variance ratio.** Noisy data or a confident prior both push
$\lambda$ up; $\lambda\to0$ is the flat prior $\tau^2\to\infty$, i.e. "I will believe
anything about $\beta$." This closes a loop with
[2.3](lessons/02-03-ridge-regression-and-shrinkage.md): the MSE-optimal penalty
$\lambda^\star = \sigma^2/\beta_j^2$ is exactly $\sigma^2/\tau^2$ with the prior
variance set to the truth. Frequentist optimum and Bayesian translation agree, which
is not obvious and is a reason to trust both.

**Credible is not confidence.** A credible interval fixes the data and treats $\beta$
as random; a confidence interval fixes $\beta_0$ and treats the data as random. The
Gaussian-prior credible interval has 95 percent coverage **averaged over the prior**
and can have far less at a fixed $\beta_0$. At $\sigma^2 = 5$, $\tau^2 = 1$
($\lambda = 5$):

| true $\beta_0$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| coverage of the "95 percent" credible interval | $1.0000$ | $0.9948$ | $0.6289$ | $\mathbf{0.0282}$ |

Nothing is broken: average that column against $\mathcal N(0,1)$ and you get exactly
$0.95000$. **If you did not mean the prior, you do not get the guarantee.** The
distinction is **ceded to** [`econometrics`](../econometrics/syllabus.md); this
course only needs to know that ridge's Bayesian pedigree buys no frequentist
coverage.

*Introduced:* [2.5](lessons/02-05-regularization-as-a-bayesian-prior.md); contrasted with the distribution-free guarantee in [3.1](lessons/03-01-the-pac-framework.md)

### Early-stopping shrinkage

Stopping gradient descent early shrinks your coefficients, in a way that looks a lot
like ridge and is **not the same function**. Least squares, $w_0 = 0$, step $\eta$,
in the SVD basis:

$$\alpha_{t,i} = \alpha^{\mathrm{ols}}_i\Bigl[1 - (1-\eta\sigma_i^2)^t\Bigr] \qquad\text{against ridge's}\qquad \alpha^{\mathrm{ridge}}_i = \alpha^{\mathrm{ols}}_i\,\frac{\sigma_i^2}{\sigma_i^2+\lambda}.$$

Both multiply each SVD direction by a factor in $(0,1)$ that increases in
$\sigma_i^2$ — same kind of object, same "leave the well-determined directions alone
and crush the rest" behaviour.

**What is true:** $1-(1-\eta\sigma^2)^t$ increases in $t$ while
$\sigma^2/(\sigma^2+\lambda)$ decreases in $\lambda$, so **more steps behaves like
less regularization**, monotonically. In the $\sigma^2\to0$ limit,
$1-(1-\eta\sigma^2)^t \approx t\eta\sigma^2$ and $\sigma^2/(\sigma^2+\lambda)\approx\sigma^2/\lambda$,
matching at

$$\lambda \approx \frac{1}{\eta t} \qquad\text{— exact only as } \sigma^2 \to 0.$$

**What is false:** that any $\lambda$ reproduces a $t$. The two profiles **cross** — at
$\eta = 0.05$, $t = 5$ they cross near $\sigma^2 \approx 3.31$ — and matching $t = 5$
direction by direction on the spectrum $\sigma_i^2 = 16, 4, 1, 0.25$ needs $\lambda$
running from $0.0051$ to $3.42$, a factor of **670**. One $\lambda$ cannot do both
jobs. The defensible sentence is "your five-step fit is regularized, at roughly the
strength of a $\lambda$ near $1/(\eta t)$, and it never appeared in your objective";
the indefensible one is "early stopping is ridge with $\lambda = 1/(\eta t)$."

*Introduced:* [2.6](lessons/02-06-gradient-descent-the-workhorse.md); pushed to $t\to\infty$ in [5.5](lessons/05-05-why-does-deep-learning-generalize.md)'s [minimum-norm interpolation](#minimum-norm-interpolation)

### PAC learnability

One fixed algorithm, one fixed sample-size rule, and **no matter what the world looks
like**, that many examples usually produce a hypothesis that is usually right.

> $\mathcal H$ is PAC learnable if there exist $A$ and $n_{\mathcal H}(\epsilon,\delta)$
> such that for every $\epsilon,\delta \in (0,1)$, **every** $\mathcal D$, and every
> target $c \in \mathcal H$, a sample of size $n \ge n_{\mathcal H}(\epsilon,\delta)$ gives
> $$\Pr_{S\sim\mathcal D^n}\bigl[R(A(S)) \le \epsilon\bigr] \;\ge\; 1-\delta.$$

**The quantifier order is the content:** $\exists A\ \exists n_{\mathcal H}\ \forall\epsilon\ \forall\delta\ \forall\mathcal D\ \forall c$.
The learner and the sample-size rule are chosen **before** the distribution and
cannot inspect it. Move $\mathcal D$ to the left and the definition collapses to
something trivially satisfiable: the learner that ignores its sample and always
returns "label everything negative" is perfect under the point mass at $0$ with any
$a^\star > 0$, and has risk exactly $1/2$ for every $n$ under the uniform on $[0,1]$
with $a^\star = 1/2$.

**Agnostic PAC** drops realizability — no target function, $\mathcal D$ joint on
$\mathcal X\times\mathcal Y$ — and asks only that you not lose to your own class:

$$\Pr_S\Bigl[R(A(S)) \le \min_{h\in\mathcal H}R(h) + \epsilon\Bigr] \ge 1-\delta.$$

It costs a factor: sample complexity degrades from order $1/\epsilon$ to order
$1/\epsilon^2$ — a factor of 20 at $\epsilon = 0.05$, of 100 at $\epsilon = 0.01$.

**Worked instance (thresholds, realizable).** $\mathcal H = \{\mathbf 1[x\ge a]\}$, learner
= smallest positive example. The error region is the one-sided strip $[a^\star,\hat a)$,
and $R > \epsilon$ forces all $n$ draws to miss a strip of mass at least $\epsilon$:

$$\Pr[R > \epsilon] \le (1-\epsilon)^n \le e^{-\epsilon n} \quad\Longrightarrow\quad n_{\mathcal H}(\epsilon,\delta) = \Bigl\lceil \tfrac1\epsilon\ln\tfrac1\delta \Bigr\rceil.$$

At $\epsilon = \delta = 0.05$ that is $n = 60$, against an exact failure probability
of $0.0461$ and a *typical* risk of $0.0164$ — the only slack in the whole proof is
$1-x \le e^{-x}$. **A bound is a promise about the worst tolerable case, not a
forecast.**

*Introduced:* [3.1](lessons/03-01-the-pac-framework.md); delivered for finite classes in [3.2](lessons/03-02-finite-classes-and-uniform-convergence.md); characterized exactly in [3.4](lessons/03-04-vc-bounds-and-sample-complexity.md)

### Uniform convergence

Prove something so strong that it no longer matters which hypothesis won.

$$S \text{ is } \epsilon\text{-representative for } \mathcal H \iff \bigl\lvert\hat R_S(h) - R(h)\bigr\rvert \le \epsilon \quad\text{for every } h \in \mathcal H.$$

It says nothing about the selection rule, so it holds however adversarially you pick
$\hat h$ — including after seeing $S$, which is the only thing that was ever wrong.
On an $\epsilon$-representative sample, ERM is agnostically competitive in three
steps:

$$R(\hat h) \;\le\; \hat R_S(\hat h) + \epsilon \;\le\; \hat R_S(h^\star) + \epsilon \;\le\; R(h^\star) + 2\epsilon,$$

using the statement at **two different hypotheses, one of them random** — which is
precisely why "for all $h$" was worth a union bound.

**What survives when the ERM is not computed.** Uniform convergence is a supremum
over the class and is blind to selection, so "your model's test error tracks its
training error" applies verbatim to a greedy tree or a Lloyd fixed point. **The
excess-risk half does not**: its middle step needs $\hat R_S(\hat h) \le \hat R_S(h_{\mathrm{ERM}})$,
which a heuristic does not deliver. Keep the two apart.

*Introduced:* [3.2](lessons/03-02-finite-classes-and-uniform-convergence.md); item 1 of [3.4](lessons/03-04-vc-bounds-and-sample-complexity.md)'s fundamental theorem; the "yes/no" split for trees is [5.1](lessons/05-01-decision-trees.md); the reason it cannot explain deep learning is [5.5](lessons/05-05-why-does-deep-learning-generalize.md)

### Union bound

$\Pr(\bigcup_j B_j) \le \sum_j \Pr(B_j)$ — countable subadditivity, valid for
**arbitrarily dependent** events. That robustness is exactly why it is safe here (the
failure events $B_h$ are heavily dependent: nearby hypotheses fail together) and
exactly why it is loose.

The whole of [3.2](lessons/03-02-finite-classes-and-uniform-convergence.md) in one
line: **failure probability falls exponentially in $n$, but the union bound's price
is only linear in $M$, so you pay for class size in $\ln M$.** Ten thousand times more
hypotheses costs about twice the data.

**When it is vacuous.** Take $1001$ hypotheses differing only on intervals of width
$10^{-9}$: at $n = 1000$, $\epsilon = 0.05$ the union bound reports a failure
probability of at most $13.49$ — a number greater than 1, hence no information —
while the truth is under $0.0145$, essentially the cost of a *single* hypothesis. It
goes vacuous as soon as $(M+1)\cdot 2e^{-5} \ge 1$, i.e. at $M = 74$. The bound
charged for $1001$ hypotheses the sample can only ever see one of. **Capacity should
count distinct behaviours, not hypotheses** — which is [3.3](lessons/03-03-shattering-and-the-vc-dimension.md).

*Introduced:* [3.2](lessons/03-02-finite-classes-and-uniform-convergence.md); used to price a colleague's three peeks at the test set in [1.3](lessons/01-03-overfitting-and-train-validation-test.md), and a grid of candidate margins in [4.3](lessons/04-03-maximum-margin-classifiers.md)

### Hoeffding's inequality

An average of bounded independent things sits near its mean, and the chance of
missing by $\epsilon$ dies **exponentially** in $n$ — the law of large numbers with a
rate attached.

$$\Pr\Bigl(\Bigl\lvert\tfrac1n\sum_i U_i - \mu\Bigr\rvert > \epsilon\Bigr) \;\le\; 2\exp\!\left(\frac{-2n\epsilon^2}{(b-a)^2}\right), \qquad a \le U_i \le b.$$

For a **fixed** $h$ and a loss in $[0,1]$, $b-a = 1$ and
$\Pr(\lvert\hat R_S(h)-R(h)\rvert > \epsilon) \le 2e^{-2n\epsilon^2}$. The word
*fixed* is doing all the work: fix $h$ first, then draw $S$, and the $Z_i(h)$ are
i.i.d. Had $h$ depended on $S$ they would be coupled through that dependence and
Hoeffding would not apply.

**Boundedness is a hypothesis, not a technicality.** It holds automatically for 0-1
loss and fails for squared loss on unbounded targets; plugging an unbounded loss into
these bounds is a real error.

*Introduced:* [3.2](lessons/03-02-finite-classes-and-uniform-convergence.md); reused for the ghost-sample swap in [3.4](lessons/03-04-vc-bounds-and-sample-complexity.md) and recovered through [Massart's lemma](#massarts-lemma) in [3.5](lessons/03-05-rademacher-complexity.md). The moment technique is [`probability-theory` 2.5](../probability-theory/lessons/02-05-lp-spaces-inequalities.md)

### Shattering

$\mathcal H$ **shatters** $C$ if it realises every one of the $2^{\lvert C\rvert}$
labellings of $C$:

$$\mathcal H_C = \bigl\{(h(c_1),\dots,h(c_n)) : h \in \mathcal H\bigr\} \subseteq \{0,1\}^n, \qquad \mathcal H \text{ shatters } C \iff \lvert\mathcal H_C\rvert = 2^n.$$

*In words: a shattered set is worthless as evidence* — whatever labels nature hands
you there, some hypothesis fits perfectly, so a perfect fit tells you nothing.
Fitting a shattered set is the formal version of "my model explains anything," and on
such a sample $\hat{\mathfrak R}_S(\mathcal H) = 1$ and every class-based bound is
empty.

**Shattering asks for *some* set of size $n$, not *every* set.** Three collinear
points are not shattered by half-planes (they realise 6 of the 8 labellings, missing
"outer two positive, middle negative" and its complement), and yet
$d_{\mathrm{VC}}(\text{half-planes}) = 3$, because some other triple is shattered.
The growth function takes a **maximum** over configurations, so a class is credited
with its best case.

**The two halves of a VC computation are not symmetric.**

| direction | what you owe |
|---|---|
| lower bound $\ge d$ | **exhibit one** set of size $d$ and **all $2^d$** labellings of it |
| upper bound $< d+1$ | for **every** set of size $d+1$, name **one** labelling nobody realises |

The lower bound is a construction; the upper bound is a proof about all
configurations, and it is always the work.

*Introduced:* [3.3](lessons/03-03-shattering-and-the-vc-dimension.md); the $\gamma$-shattering variant, which demands room to spare, is [4.3](lessons/04-03-maximum-margin-classifiers.md)

### Growth function

The largest number of label patterns $\mathcal H$ can produce on any $n$ points —
the quantity that stands in for $\lvert\mathcal H\rvert$ in every bound from
[3.4](lessons/03-04-vc-bounds-and-sample-complexity.md) on.

$$\Pi_{\mathcal H}(n) \;=\; \max_{C\subseteq\mathcal X,\ \lvert C\rvert = n}\ \bigl\lvert\mathcal H_C\bigr\rvert \;\le\; 2^n \quad\text{— finite even when } \mathcal H \text{ is infinite.}$$

That single observation is what rescues [3.2](lessons/03-02-finite-classes-and-uniform-convergence.md).
There are uncountably many intervals on the line, but on five fixed points they
produce only sixteen patterns; on $n$ points, thresholds produce $n+1$ and intervals
$1 + n(n+1)/2$. **A class can be infinite and still have only polynomially many
behaviours**, and the bound charges $\ln\Pi_{\mathcal H}(2n)$, not $\ln\lvert\mathcal H\rvert$.

*Introduced:* [3.3](lessons/03-03-shattering-and-the-vc-dimension.md); substituted into the proof in [3.4](lessons/03-04-vc-bounds-and-sample-complexity.md); given a metric rather than a count in [3.5](lessons/03-05-rademacher-complexity.md)

### VC dimension

$$d_{\mathrm{VC}}(\mathcal H) = \max\bigl\{n : \Pi_{\mathcal H}(n) = 2^n\bigr\}$$

— the size of the largest set the class can label completely arbitrarily, and
$\infty$ if that set is unbounded. It is the one integer that controls the growth
function, and by [3.4](lessons/03-04-vc-bounds-and-sample-complexity.md) it decides
learnability outright.

**It is not a parameter count, in either direction.** The one-parameter class
$\mathbf 1[\sin(\theta x)>0]$ has $d_{\mathrm{VC}} = \infty$ — on points spaced at
$x_i = 2^{-i}$, $\theta$ dials any sign pattern you like. And richly parameterised
classes can have small effective capacity, which is exactly how kernel methods
survive an infinite-dimensional feature space
([4.3](lessons/04-03-maximum-margin-classifiers.md) replaces $d$ by $R^2/\gamma^2$).
That affine separators in $\mathbb R^d$ happen to have $d_{\mathrm{VC}} = d+1$ is a
coincidence of a very rigid class, not a rule.

**The most natural class of all has infinite VC dimension**: all functions
$\mathcal X\to\{0,1\}$ on an infinite domain shatters every finite set by definition.
That class is the formal content of "assume nothing about the world," and it is not
PAC learnable — which is [no free lunch](#no-free-lunch-theorem) restated as a
statement about capacity. **Inductive bias *is* finite VC dimension.**

*Introduced:* [3.3](lessons/03-03-shattering-and-the-vc-dimension.md); the biconditional in [3.4](lessons/03-04-vc-bounds-and-sample-complexity.md); computed for kernels, trees and networks in [4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md), [5.1](lessons/05-01-decision-trees.md), [5.4](lessons/05-04-neural-networks-and-backpropagation.md); the reason it cannot explain [5.5](lessons/05-05-why-does-deep-learning-generalize.md)

### Sauer's lemma

The moment $n$ passes the VC dimension, the number of distinguishable behaviours
stops doubling and grows only like a degree-$d$ polynomial.

$$\Pi_{\mathcal H}(n) \;\le\; \sum_{i=0}^{d}\binom{n}{i}, \qquad\text{and for } n\ge d,\quad \sum_{i=0}^{d}\binom{n}{i} \;\le\; (n+1)^{d}, \qquad d = d_{\mathrm{VC}}(\mathcal H).$$

**The jump is abrupt, not gradual.** For $n \le d$ the sum equals $2^n$ exactly and
the lemma constrains nothing; at $n = d+1$ it drops strictly below (because
$\sum_{i=0}^{n}\binom ni = 2^n$ and the discarded tail contains at least
$\binom nn = 1$) and then falls away forever. Bounding a class by its VC dimension
buys nothing until you have more data than it can shatter, and almost everything
shortly after.

| $n$ | 2 | 3 | 4 | 5 | 10 | 20 | 100 |
|---|---|---|---|---|---|---|---|
| $2^n$ | 4 | 8 | 16 | 32 | 1,024 | 1,048,576 | $1.27\times10^{30}$ |
| bound, $d = 2$ | 4 | 7 | 11 | 16 | 56 | 211 | 5,051 |
| bound, $d = 3$ | 4 | 8 | 15 | 26 | 176 | 1,351 | 166,751 |

At $n = 100$ a class of VC dimension 2 behaves like a finite class of about five
thousand hypotheses — **the infinite class was never really infinite where it
counted.** Intervals attain the bound with equality at every $n$; half-planes do not
($14 < 15$ at $n = 4$).

**Not a probabilistic result at all.** It is extremal combinatorics about set
systems, discovered independently three times, and proved by a shifting argument
with no distribution in sight.

*Introduced:* [3.3](lessons/03-03-shattering-and-the-vc-dimension.md) (stated as Sauer–Shelah); the collapse it produces is what makes [3.4](lessons/03-04-vc-bounds-and-sample-complexity.md)'s bound go to zero

### VC sample complexity

Capacity turned into a number of examples. With probability at least $1-\delta$:

$$\text{realizable: } \ n \ \ge\ \frac{4}{\epsilon}\Bigl(d_{\mathrm{VC}}\ln\frac{12}{\epsilon} + \ln\frac{2}{\delta}\Bigr), \qquad \text{agnostic: } \ n \ \ge\ \frac{8}{\epsilon^2}\Bigl(d_{\mathrm{VC}}\ln\frac{16e}{\epsilon} + \ln\frac{2}{\delta}\Bigr).$$

Read off a fitted model instead, simultaneously for all $h\in\mathcal H$:

$$R(h) \ \le\ \hat R_S(h) + \sqrt{\frac{8\bigl(d_{\mathrm{VC}}\ln\frac{2en}{d_{\mathrm{VC}}} + \ln\frac4\delta\bigr)}{n}}.$$

The matching-order truth is
$n_{\mathcal H} = \Theta\bigl((d_{\mathrm{VC}}+\ln(1/\delta))/\epsilon\bigr)$
realizable and $\Theta\bigl((d_{\mathrm{VC}}+\ln(1/\delta))/\epsilon^2\bigr)$
agnostic — matched by lower bounds, so no cleverer learner changes the *shape*.

**The agnostic $1/\epsilon^2$ is the central limit theorem, not a loose proof.**
Estimating a risk to within $\pm\epsilon$ needs $n \sim 1/\epsilon^2$ however you do
it. The realizable $1/\epsilon$ is the anomaly: there the ERM's training error is
exactly zero, so you never estimate a risk — you only ask whether a bad hypothesis
could have survived $n$ points, a multiplicative $(1-\epsilon)^n \le e^{-\epsilon n}$
question.

See the [generalization-bound table](#the-generalization-bound-table) for worked
instantiations and for how loose these are.

*Introduced:* [3.4](lessons/03-04-vc-bounds-and-sample-complexity.md); instantiated for kernels in [4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md), for trees in [5.1](lessons/05-01-decision-trees.md), for networks in [5.4](lessons/05-04-neural-networks-and-backpropagation.md)

### Rademacher complexity

**How well a class can correlate with pure noise, averaged over the noise.** Delete
your labels, replace each with a fair coin flip, and see how well you still fit.

$$\hat{\mathfrak R}_S(\mathcal F) \;=\; \mathbb E_\sigma\Bigl[\sup_{f\in\mathcal F}\ \frac1n\sum_{i=1}^{n}\sigma_i f(x_i)\Bigr], \qquad \mathfrak R_n(\mathcal F) = \mathbb E_S\bigl[\hat{\mathfrak R}_S(\mathcal F)\bigr].$$

It is **never negative** (any fixed $f$ has expected correlation 0, and a supremum
beats that — Jensen), although an individual coin pattern's best correlation
genuinely can be negative when $\mathcal H$ is not closed under negation.

**Bound.** For $\mathcal F$ a loss class into $[0,1]$, with probability $1-\delta$,
every $h$ satisfies

$$R(h) \ \le\ \hat R_S(h) + 2\hat{\mathfrak R}_S(\mathcal F) + 3\sqrt{\frac{\ln(2/\delta)}{2n}}.$$

**The identity that makes it an experiment.** For $\pm1$-valued $h$ and $\pm1$
labels, $\mathbf 1[h(x_i)\ne\sigma_i] = \tfrac12(1-\sigma_i h(x_i))$, so

$$\mathbb E_\sigma\Bigl[\min_{h\in\mathcal H}\ \frac1n\bigl\lvert\{i : h(x_i)\ne\sigma_i\}\bigr\rvert\Bigr] \;=\; \frac{1 - \hat{\mathfrak R}_S(\mathcal H)}{2}.$$

**The best training error achievable on random labels *is* the Rademacher
complexity, rescaled.** Complexity 1 means zero error on noise; complexity 0 means
you do no better than coin-flipping. That is a measurement, not a theorem you apply,
and it is the whole of [5.5](lessons/05-05-why-does-deep-learning-generalize.md)'s
evidence.

Two things it fixes about VC: it is **data-dependent** (computed on your sample, so
it can sit far below the worst case) and it handles **real-valued** classes, because
a margin loss is a Lipschitz function of a real score and Rademacher complexity
passes through a Lipschitz map at the cost of the Lipschitz constant (Talagrand's
contraction lemma). That is the bridge to margins
([4.3](lessons/04-03-maximum-margin-classifiers.md)) and to RKHS norm balls
([4.2](lessons/04-02-rkhs-and-the-representer-theorem.md), where
$\hat{\mathfrak R}_S(\mathcal F_B) \le \frac{B}{n}\sqrt{\sum_i K(x_i,x_i)}$, i.e.
$B/\sqrt n$ for any kernel with $K(x,x) = 1$).

**It is a property of the class and the sample only — the algorithm never appears in
the definition.** Which is why it cannot resolve [5.5](lessons/05-05-why-does-deep-learning-generalize.md)'s
puzzle alone: the class is identical whether you train on real or random labels, so
any class-only quantity is blind to the difference.

*Introduced:* [3.5](lessons/03-05-rademacher-complexity.md); used as the proof engine in [4.3](lessons/04-03-maximum-margin-classifiers.md); run as an experiment in [5.5](lessons/05-05-why-does-deep-learning-generalize.md)

### Massart's lemma

For finite $\mathcal F$ with $\lvert f(x_i)\rvert \le B$,

$$\hat{\mathfrak R}_S(\mathcal F) \;\le\; B\sqrt{\frac{2\ln\lvert\mathcal F\rvert}{n}}.$$

This recovers $\sqrt{\ln\lvert\mathcal F\rvert/n}$ — exactly the rate
[3.2](lessons/03-02-finite-classes-and-uniform-convergence.md) got from Hoeffding
plus a union bound — so **the two frameworks agree where they overlap.** The gain is
that Massart is only an *upper* bound: when your data is benign the true
$\hat{\mathfrak R}_S$ is smaller and the guarantee follows it down. On three
threshold points it gives $\sqrt{2\ln4/3} = 0.961$ against an exact $2/3$; on a
two-function class over four points it gives $0.589$ against an exact $1/4$.

**It stops working when the class grows with $n$.** For all functions on $n$ points,
$\lvert\mathcal H\rvert = 2^n$ and the $n$ cancels:
$\sqrt{2n\ln2/n} = \sqrt{2\ln 2} \approx 1.177$, a constant **above** the trivial
ceiling of 1, at every sample size. Counting hypotheses stops working entirely once
the count is exponential in $n$ — which is the gap the growth function was built to
close.

*Introduced:* [3.5](lessons/03-05-rademacher-complexity.md)

### Feature map

Any function $\phi : \mathcal X \to \mathcal F$ into a real inner-product space. It
does not bend the boundary — **it straightens the data**: seven points on a line,
positive at the ends and negative in the middle, are separated by no threshold, but
sending $x \mapsto (x,x^2)$ makes them separable by a horizontal line, which pulls
back to *two* cut points downstairs.

$$K(x,z) = \langle\phi(x),\phi(z)\rangle.$$

The learner never asks for $\phi(x)$, only for the inner product — so **the
similarity function is the object of study** and $\phi$ is scaffolding you may not be
able to build. The same $K$ has many feature maps of different dimensions.

A hidden layer is a feature map that is **fitted from the same loss the model is
scored on** ([5.4](lessons/05-04-neural-networks-and-backpropagation.md)), where a
kernel's is chosen in advance. That is the appeal, and it is why the class is
enormous.

*Introduced:* [4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md); constructed from $K$ alone in [4.2](lessons/04-02-rkhs-and-the-representer-theorem.md)

### Positive-definite kernel

> **Theorem (Mercer, Moore–Aronszajn).** $K$ is a kernel — i.e. some $\phi$ has
> $K(x,z) = \langle\phi(x),\phi(z)\rangle$ — **if and only if** it is symmetric and
> every Gram matrix it produces, on every finite point set, is positive
> semidefinite.

The easy direction is one line:
$c^\top G c = \sum_{i,j}c_ic_j\langle\phi(x_i),\phi(x_j)\rangle = \lVert\sum_i c_i\phi(x_i)\rVert^2 \ge 0$.
Positive semidefiniteness is not an extra assumption; it is what "inner product"
means, transcribed.

**The quantifier is the trap.** "Every finite set" is a statement about infinitely
many matrices, so **no number of PSD tables confirms a kernel and one non-PSD table
refutes it forever.** Certification has to be structural — see
[kernel closure properties](#kernel-closure-properties).

**The free diagnostic:** $K(x,x) = \lVert\phi(x)\rVert^2 \ge 0$, and $K(x,x) = 0$
forces $K(x,\cdot) \equiv 0$. So any distance-like function — $\lVert x-z\rVert$,
$\lVert x-z\rVert^2$ — is disqualified at a glance, and $\cos(x+z)$ dies because
$\cos 2x < 0$ near $x = \pi/2$. **Check the diagonal first.** ($\max(x,z)$ on
$1,2,3$ fails with $c = (1,-1,0)$; $\min(x,z)$ on the positive reals is a kernel — it
is Brownian motion's covariance. Two functions of nearly identical form, opposite
verdicts, which is why eyeballing a similarity score is not a method.)

*Introduced:* [4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md); the converse construction is [4.2](lessons/04-02-rkhs-and-the-representer-theorem.md)

### Gram matrix

The $n\times n$ table of pairwise similarities $G_{ij} = K(x_i,x_j)$ — the only view
of the data a kernel method ever gets, and the object whose size decides
affordability. A negative eigenvalue makes the SVM dual non-concave, destroys
uniqueness and voids the solver's guarantee, which is why handcrafted "similarity"
functions are the standard trap.

$$\mathbf K\alpha = \text{fitted values}, \qquad \lVert f\rVert_K^2 = \alpha^\top\mathbf K\alpha, \qquad \text{kernel ridge: } \ \alpha = (\mathbf K + \lambda I)^{-1}y.$$

Cost is **ceded to** [`machine-learning` 2.4](../machine-learning/lessons/02-04-the-kernel-trick.md);
the headline is that it scales with your **sample**, not your features —
$O(n^2)$ memory ($8n^2$ bytes; 80 GB at $n = 10^5$) and $O(n^3)$ for a direct solve.

*Introduced:* [4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md); used as the finite reduction in [4.2](lessons/04-02-rkhs-and-the-representer-theorem.md)

### Kernel closure properties

How kernels are actually verified: you never check the definition, you **assemble**
the kernel from pieces. Let $K_1,K_2$ be kernels, $a > 0$, $f:\mathcal X\to\mathbb R$
any function, $\psi:\mathcal Z\to\mathcal X$ any map.

| construction | why |
|---|---|
| $aK_1$ | scale the feature map by $\sqrt a$ |
| $K_1 + K_2$ | concatenate the maps: $\phi = (\phi_1,\phi_2)$ |
| $K_1K_2$ (pointwise product) | tensor the maps, $\chi_{ij}(x) = \phi_i(x)\psi_j(x)$ — the Schur product theorem |
| $f(x)f(z)$ | the one-dimensional map $\phi = f$ |
| $K_1(\psi(x),\psi(z))$ | compose: use $\phi\circ\psi$ |
| $\lim_m K_m$ pointwise, where it exists | PSD survives limits: $c^\top Gc = \lim_m c^\top G_mc \ge 0$ |
| $p(K_1)$ for $p$ with non-negative coefficients; $e^{K_1}$ | sums, products, scalings, limits |

**Polynomial kernel, four lines.** $x^\top z$ is a kernel (identity map); the constant
$c > 0$ is a kernel ($f = \sqrt c$); their sum is a kernel; products of kernels are
kernels, so $(x^\top z + c)^m$ is a kernel. No expansion, no binomial coefficients —
against the alternative of enumerating $23{,}426$ monomials at $d = 50$, $m = 3$.

**RBF, five lines.** Split $\exp(-\gamma\lVert x-z\rVert^2) = e^{-\gamma\lVert x\rVert^2}e^{-\gamma\lVert z\rVert^2}e^{2\gamma x^\top z}$;
$2\gamma x^\top z$ is a kernel by positive scaling (the only place $\gamma > 0$ is
used); each term $\frac{(2\gamma)^k}{k!}(x^\top z)^k$ of the exponential series is a
kernel; partial sums and their pointwise limit are kernels; multiply by
$f(x)f(z)$. **A statement about an infinite-dimensional space, proved with only
finite-dimensional facts about sums and products.**

*Introduced:* [4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md)

### RBF kernel

$$K(x,z) = \exp\bigl(-\gamma\lVert x-z\rVert^2\bigr), \qquad \gamma > 0, \qquad K(x,x) = 1 \ \text{ for every } x.$$

Its feature space is **infinite-dimensional**, so $d_{\mathrm{VC}} = \infty$ and
[3.4](lessons/03-04-vc-bounds-and-sample-complexity.md)'s bound is vacuous — the
opening problem of Module 4. That $K(x,x) = 1$ is the fact that rescues it: in
feature space $R = \max_i\lVert\phi(x_i)\rVert = 1$ **exactly, for any data**, so the
margin capacity is simply $1/\gamma^2$ and is finite.

**The bound polices itself.** As the bandwidth narrows, $K \to I$, the lifted points
become orthonormal, and the best margin is $\gamma = 1/\sqrt n$ (attained at
$c_i = y_i/\sqrt n$), so $R^2/\gamma^2 = n$ and the complexity term is
$2\sqrt{n/n} = 2$ — **vacuous, exactly as it must be**, since a narrow-bandwidth RBF
separates *any* labelling of any distinct points. You do not get a guarantee for
lifting to infinite dimensions; you get one for **achieving a large margin after you
lift**, which is an empirical fact you have to earn. Large bandwidth is also priced:
the lifted points crowd into one direction, $\gamma$ collapses, and capacity blows up
(on the worked four-point set, $R^2/\gamma^2$ runs $4.00,\ 3.93,\ 3.11,\ 5.08,\ 17.02$
as $s = 0.25,\ 0.5,\ 1,\ 2,\ 4$).

$\lVert x-z\rVert$ is a Euclidean distance, so the RBF is as scale-sensitive as
k-means and PCA are — standardize before tuning $\gamma$.

*Introduced:* [4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md); rescued in [4.3](lessons/04-03-maximum-margin-classifiers.md). Its practical failure modes are **ceded to** [`machine-learning` 2.4](../machine-learning/lessons/02-04-the-kernel-trick.md)

### Reproducing kernel Hilbert space

The corner of function space where "evaluate at $x$" is a **continuous** linear
functional — so by Riesz there is a function *in the space* that does the evaluating
for you.

$$K(\cdot,x) \in \mathcal H_K \ \text{ for every } x, \qquad f(x) = \bigl\langle f,\ K(\cdot,x)\bigr\rangle_K \ \text{ for every } f \in \mathcal H_K.$$

That single identity is the whole subject. Put $f = K(\cdot,x')$ and you get
$\langle K(\cdot,x'),K(\cdot,x)\rangle_K = K(x',x)$: **$K$ is literally the Gram of
the feature map $\Phi(x) = K(\cdot,x)$**, so the kernel of
[4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md) and the space
$\mathcal H_K$ are one object seen from two sides. Moore–Aronszajn (stated): every
positive-definite kernel has exactly one RKHS, built by completing finite sums
$\sum_i c_iK(\cdot,x_i)$, and positive definiteness is precisely what makes
$\lVert\sum_i c_iK(\cdot,x_i)\rVert_K^2 = \sum_{i,j}c_ic_jK(x_i,x_j) \ge 0$ an inner
product at all.

**The norm is a roughness meter, not a size.** Cauchy–Schwarz on the difference of
two measuring sticks gives

$$\lvert f(x) - f(x')\rvert \;\le\; \lVert f\rVert_K\sqrt{K(x,x) - 2K(x,x') + K(x',x')}.$$

A small RKHS norm forbids fast wiggles *between points the kernel calls similar* —
which is why $\lambda\lVert f\rVert_K^2$ is a principled penalty and not an arbitrary
one, and why a small-$B$ ball has small Rademacher complexity even when the ambient
dimension is infinite.

*Introduced:* [4.2](lessons/04-02-rkhs-and-the-representer-theorem.md); assumed by [`machine-learning` 2.4](../machine-learning/lessons/02-04-the-kernel-trick.md), which uses kernels computationally and cites the justification here

### Representer theorem

Whatever the loss, every minimizer of a norm-penalized fit lies in the
$n$-dimensional span of the training points.

> Let $L$ be **any** function of the labels and the $n$ fitted values, and $\Omega$
> **strictly increasing**. Then every minimizer over $\mathcal H_K$ of
> $$J(f) = L\bigl(y_1,\dots,y_n,\ f(x_1),\dots,f(x_n)\bigr) + \Omega\bigl(\lVert f\rVert_K\bigr)$$
> has the form $f = \sum_{i=1}^{n}\alpha_i K(\cdot,x_i)$.

*Proof, three lines.* Split $f = f_\parallel + f_\perp$ against
$V = \operatorname{span}\{K(\cdot,x_i)\}$. **The loss cannot see $f_\perp$**: by the
reproducing property $f(x_i) = f_\parallel(x_i)$. **The penalty can**: Pythagoras
gives $\lVert f_\parallel\rVert_K \le \lVert f\rVert_K$, strictly unless $f_\perp = 0$.
So $J(f_\parallel) < J(f)$ whenever $f_\perp \ne 0$. $\blacksquare$

It needs no convexity, no differentiability, no decomposition over examples. The one
load-bearing hypothesis is that **$L$ sees $f$ only through the values at the sample
points** — add a term reading $f$ anywhere else and the span grows to include that
point's stick. Strictness of $\Omega$ is used only at the last step: merely
non-decreasing gives "*some* minimizer is in the span," not "every."

**What it buys and what it does not.** It buys *computability*: an infinite-dimensional
search becomes $n$ numbers, and kernel ridge is $\alpha = (\mathbf K+\lambda I)^{-1}y$.
It says nothing about **risk** — it is equally true at $\lambda \to 0$, where you
interpolate the noise. It says nothing about **which kernel** — it holds verbatim for
every positive-definite kernel, good or absurd, so kernel choice is inductive bias
settled empirically. And it says nothing about **sparsity**: with squared loss all $n$
coefficients are generically nonzero. Sparsity is the [hinge's](#hinge-loss) doing,
and the name "support vector" belongs entirely to the loss.

*Introduced:* [4.2](lessons/04-02-rkhs-and-the-representer-theorem.md); the same orthogonal-decomposition move reappears in [5.5](lessons/05-05-why-does-deep-learning-generalize.md)'s minimum-norm proof

### Geometric margin

The perpendicular distance from a point to the hyperplane — the functional margin
with the scale divided out, which is why it is the one that means anything.

$$\gamma_i = \frac{y_i\,w^\top x_i}{\lVert w\rVert}, \qquad \gamma = \min_i\gamma_i, \qquad \text{canonical scaling } \min_i y_iw^\top x_i = 1 \ \Rightarrow\ \gamma = \frac{1}{\lVert w\rVert}.$$

So maximizing the margin is the convex QP $\min\tfrac12\lVert w\rVert^2$ — and the
SVM's $\tfrac\lambda2\lVert w\rVert^2$ is literally the purchase of margin.

**$\gamma$ alone carries no information.** Multiply every feature by 10 and every
margin is 10 times larger while the classifier is identical point for point. Only
$R^2/\gamma^2$ is a statement about the problem, and "we achieved a margin of 0.4"
without a radius is unusable. In this course separators pass **through the origin**;
a bias is handled by appending a constant coordinate $c$, which turns $R^2$ into
$R^2 + c^2$ — so a bias is not free either. The mechanics (the corridor picture,
support vectors, the dual) are **ceded to**
[`machine-learning` 2.2](../machine-learning/lessons/02-02-maximum-margin-classifiers.md)–[2.3](../machine-learning/lessons/02-03-soft-margins-and-the-svm-dual.md).

*Introduced:* [4.3](lessons/04-03-maximum-margin-classifiers.md); the normalised-margin version for boosting is [5.3](lessons/05-03-boosting.md)

### Margin bound

Draw the boundary with a **fat pencil** of width $2\gamma$ on a page of radius $R$
and there are only so many distinguishable strokes — a count that does not mention
the dimension at all.

> **Theorem (margin capacity).** With $\lVert x_i\rVert \le R$ and
> $\mathcal F = \{x\mapsto w^\top x : \lVert w\rVert \le 1\}$, no set of more than
> $R^2/\gamma^2$ points can be **$\gamma$-shattered** — realising all $2^m$ sign
> patterns *with margin at least $\gamma$ every time* forces
> $$m \;\le\; \frac{R^2}{\gamma^2}.$$

*Proof.* $m\gamma \le \sum_i\sigma_i w_\sigma^\top x_i \le \lVert\sum_i\sigma_ix_i\rVert$
by Cauchy–Schwarz, for every $\sigma$; take $\mathbb E_\sigma$, then Jensen and
$\mathbb E[\sigma_i\sigma_j] = 0$ off the diagonal give
$\mathbb E_\sigma\lVert\sum_i\sigma_ix_i\rVert \le \sqrt{\sum_i\lVert x_i\rVert^2} \le R\sqrt m$.
So $m\gamma \le R\sqrt m$. $\blacksquare$

**The same three lines, as a generalization bound.** They *are* the Rademacher
computation: $\hat{\mathfrak R}_S(\mathcal F_B) \le BR/\sqrt n$. Take $B = 1$; the
margin loss $\phi_\gamma(z) = \min(1,\max(0,1-z/\gamma))$ is $1/\gamma$-Lipschitz and
upper-bounds 0-1, so contraction costs $1/\gamma$ and

$$R(h) \ \le\ \hat R^\gamma_S(h) \;+\; \frac{2R}{\gamma\sqrt n} \;+\; 3\sqrt{\frac{\ln(2/\delta)}{2n}}, \qquad \frac{2R}{\gamma\sqrt n} = 2\sqrt{\frac{R^2/\gamma^2}{n}}.$$

**$R^2/\gamma^2$ sits exactly where $d_{\mathrm{VC}}$ sits, and $d$ appears nowhere.**
That is the theorem the module exists for, and it is the only non-vacuous statement
available when the feature space is infinite-dimensional.

**Scale-invariant, not translation-invariant.** Replacing $x_i$ by $cx_i$ scales both
$R$ and $\gamma$, leaving the ratio fixed. Translating does not: $D_1$ ($+1$ at
$(1,0)$, $-1$ at $(-1,0)$) has $R^2/\gamma^2 = 1$, while its rotated-and-translated
copy $D_2$ ($+1$ at $(3,1)$, $-1$ at $(3,-1)$) has $10$ — an identical classification
problem, ten times the capacity, because homogeneous separators must thread a
boundary through a distant origin. **Centre your data before quoting a margin
bound**, and know your bound's symmetry group.

**It is not a strict upgrade.** In low dimensions it loses about as often as it wins:
on a worked four-point set $R^2/\gamma^2 = 5$ against $d_{\mathrm{VC}} = 3$, and on
another $3.25$ against $d = 2$. Both are valid bounds on the same class, so **take the
smaller of the two.** Use the margin when $d$ is huge or infinite, which is the case
it was invented for.

**One quantifier to respect:** the bound holds for a $\gamma$ fixed *before* seeing
$S$. Choosing $\gamma$ after fitting is [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md)'s
selection effect again; the repair is a union bound over a geometric grid of
candidate margins, costing an additive $\sqrt{\ln\ln(1/\gamma)/n}$ — small, not zero,
and dropping it is the commonest way this bound gets misquoted.

*Introduced:* [4.3](lessons/04-03-maximum-margin-classifiers.md); the boosting version, with $T$ absent from the capacity term, is [5.3](lessons/05-03-boosting.md); reached for and found insufficient in [5.5](lessons/05-05-why-does-deep-learning-generalize.md)

### Gini impurity

The probability you get the label wrong if you guess by drawing at random from a
node's own mix:

$$I_{\mathrm{Gini}}(t) = 1 - \sum_k p_k^2, \qquad\text{against entropy } \ I_{\mathrm{ent}}(t) = -\sum_k p_k\log_2 p_k.$$

Binary maxima are $\tfrac12$ and $1$ bit respectively, so gains computed under the
two are never comparable. Greedy growing picks the split maximizing the weighted drop
in whichever you chose. **All of the split search, the arithmetic and the pruning
mechanics are ceded to** [`machine-learning` 2.5](../machine-learning/lessons/02-05-decision-trees.md);
this course uses impurity only to *exhibit* the optimization error — on the worked
eight-row instance the root gains are $\Delta(x_1) = \Delta(x_3) = \tfrac1{30}$ and
$\Delta(x_2) = \tfrac18$, so greedy strictly prefers the one feature carrying no
information about $y$, and its four-leaf tree has training error $1/4$ where the best
four-leaf tree has $0$.

Entropy's information-theoretic content is
[`information-theory` 1.1](../information-theory/lessons/01-01-entropy-uncertainty-surprise.md)'s.

*Introduced:* [5.1](lessons/05-01-decision-trees.md)

### Cost-complexity pruning

Charge rent per leaf, then keep the subtree worth its rent — regularized ERM with
leaf count in the capacity slot, exactly as $\lambda\lVert\beta\rVert^2$ is in ridge.

$$R_\alpha(T) = \hat R_S(T) + \alpha\lvert T\rvert.$$

What licenses $\lvert T\rvert$ as the meter is the capacity result below: VC dimension
really is linear in the leaf count up to a logarithm. Sweeping $\alpha$ walks a
**nested** family $\mathcal T_1 \subset \mathcal T_2 \subset \cdots$ and pays for the
level you stop at — structural risk minimization in miniature. Choosing the depth by
cross-validation means you have fitted the **union** $\bigcup_{k\le K}\mathcal T_{2^k}$,
not one fixed class, and honest accounting takes the union's capacity or pays a
$\ln K$ union-bound price.

*Introduced:* [5.1](lessons/05-01-decision-trees.md); the sweep mechanics are **ceded to** [`machine-learning` 2.5](../machine-learning/lessons/02-05-decision-trees.md)

### Bootstrap

Replace the distribution you do not know, $\mathcal D$, by the empirical distribution
$\hat{\mathcal D}_n$ of the sample you have, and draw your "fresh" datasets from
that. Drawing $n$ points from $\hat{\mathcal D}_n$ **is** drawing $n$ points from your
data with replacement.

$$\hat f_{\mathrm{bag}}(x) = \frac1B\sum_{b=1}^{B}\hat f_{S_b^*}(x) \ \xrightarrow[B\to\infty]{}\ \mathbb E_{S^*\mid S}\bigl[\hat f_{S^*}(x)\bigr] \qquad\text{— not } \ \bar f(x).$$

**Two gaps, and they behave differently.** The **Monte Carlo gap** (finite $B$)
vanishes as you add members — it is the $(1-\rho)\sigma^2/B$ term. The **plug-in gap**
($\hat{\mathcal D}_n$ for $\mathcal D$) does not: resamples share about 63 percent of
their distinct rows, so the fits stay correlated however many you draw, and what
survives is $\rho\sigma^2$. "More trees" and "better trees" answer different
questions.

*Introduced:* [5.2](lessons/05-02-bagging-and-random-forests.md); the out-of-bag estimate and the $\rho$ accounting are **ceded to** [`machine-learning` 2.6](../machine-learning/lessons/02-06-bagging-and-random-forests.md)

### Correlation floor

$$\operatorname{Var}\bigl(\hat f_{\mathrm{bag}}(x)\bigr) = \rho\,\sigma^2 + \frac{1-\rho}{B}\,\sigma^2,$$

with $\rho$ the pairwise correlation between **two members' predictions at one test
point** — a property of the fitted ensemble, not of the design matrix. The second
term is bought with hardware; the first is not, and it is the plug-in gap in
numerical form. Feature subsampling (the "random" in random forest) attacks $\rho$ by
injecting randomness the data cannot supply, because the dominant driver of $\rho$ is
not shared rows but the greedy search finding the **same dominant feature** at every
resampled root — which is why the fix is to hide features from each split rather than
to resample harder.

*Stated here, derived in* [`machine-learning` 2.6](../machine-learning/lessons/02-06-bagging-and-random-forests.md); *used in* [5.2](lessons/05-02-bagging-and-random-forests.md)

### Stability

A learner is **unstable** if replacing one point of $S$ moves its prediction a lot.
Efron–Stein makes the link to the quantity bagging deletes:

$$\operatorname{Var}_S\bigl(\hat f_S(x)\bigr) \;\le\; \tfrac12\sum_{i=1}^{n}\mathbb E\bigl[(\hat f_S(x) - \hat f_{S^{(i)}}(x))^2\bigr],$$

with $S^{(i)}$ the sample with its $i$-th point replaced. *In words: variance is
bounded by how much one swapped point can move the prediction.* Hence the governing
principle: **bagging's payoff is bounded by the learner's instability**, and a learner
nothing can perturb has nothing to gain.

Worked consequences. A deep tree is maximally unstable — a flipped root rewrites the
whole subtree — so bagging transforms it. A $k$-NN rule with large $k$ is stable and
bagging is nearly pointless (at $k = 1$, $3$, $9$, $25$ the bagged-to-unbagged
variance ratios are $0.46$, $0.68$, $0.82$, $0.89$). A **regularized SVM is stable**:
its objective is $\lambda$-strongly convex in $w$, one row perturbs it by $O(1/n)$,
so the minimizer moves by $O(1/(\lambda n)) = O(C)$ — the resistance is governed by
$\lambda n = 1/C$, not by $\lambda$ alone, and it degrades exactly as $C$ grows and
the margin hardens. **Regularization and bagging are two ways to spend the same
budget**, which is why forests use an unregularized unstable base learner and SVMs
need no ensemble.

Stability is also one of the algorithm-dependent escape routes from uniform
convergence listed in [5.5](lessons/05-05-why-does-deep-learning-generalize.md).

*Introduced:* [5.2](lessons/05-02-bagging-and-random-forests.md)

### ReLU

$\phi(u) = \max(0,u)$, applied coordinatewise. **The nonlinearity is the entire
source of a network's expressive power**: with $\phi = \mathrm{id}$ a composition of
affine maps is affine, so a hundred layers collapse to one and the class is exactly
[2.1](lessons/02-01-linear-regression-as-learning.md)'s linear class — same set of
functions, different parameterisation, no capacity bought.

**Width buys pieces additively; depth buys them multiplicatively.** A one-hidden-layer
ReLU net on one input with $N$ units is piecewise linear with at most $N$ kinks. But
the two-unit tent $h(x) = 2\phi(x) - 4\phi(x-\tfrac12)$ maps $[0,1]$ into itself, so
it composes: $L$ stacked copies give width 2, depth $L$, and a sawtooth with $2^L$
linear pieces and slopes alternating $\pm2^L$. At $L = 10$ that is 1,024 pieces from
**61 parameters**, while a one-hidden-layer net needs at least 1,023 units — 3,070
parameters — to express the same function. **Depth is not a convenience; it is a
different budget.**

*Introduced:* [5.4](lessons/05-04-neural-networks-and-backpropagation.md). Backpropagation is reverse-mode automatic differentiation — all $W$ derivatives for the cost of **one** forward pass, independent of $W$ — and is **ceded to** [`machine-learning` 4.4](../machine-learning/lessons/04-04-a-taste-of-neural-networks.md) for the mechanics and [`deep-learning`](../deep-learning/syllabus.md) for the engineering

### Universal approximation

> Let $\phi$ be continuous and **not a polynomial**, $K\subset\mathbb R^d$ compact,
> $f:K\to\mathbb R$ continuous, $\epsilon > 0$. Then there are $N$ and parameters with
> $$\sup_{x\in K}\Bigl\lvert f(x) - \sum_{j=1}^{N}a_j\,\phi(w_j^\top x + b_j)\Bigr\rvert < \epsilon.$$

One hidden layer, made wide enough, gets uniformly close to any continuous function
on any bounded region: **the class is dense.** That is a statement about the closure
of a set, and nothing else. Its three silences land on three *different* terms of the
[excess-risk decomposition](#excess-risk-decomposition), which is what makes them
genuinely distinct complaints rather than three phrasings of one:

| the silence | what it costs | which term |
|---|---|---|
| **no bound on $N$** — width is produced by the proof, not controlled by it; known lower bounds for Lipschitz targets scale like $\epsilon^{-d}$ | the network you can *afford* may be far from dense | **approximation** |
| **existence, not reachability** — nothing says any algorithm finds those weights, and the objective is not convex | you can sit inside a class containing a perfect $h$ and never reach it | **optimization** |
| **nothing about data** — the theorem knows $f$, not a sample from $\mathcal D$ | a class that can fit anything can fit noise | **estimation** |

The knob that shrinks the first inflates the third, which is why "make it bigger" is
a strategy and not a theorem.

**Capacity, and it is tight.** ReLU networks with $W$ parameters and $L$ layers have
$d_{\mathrm{VC}} = O(WL\log W)$, **with a matching lower bound of order
$WL\log(W/L)$** — so this is the truth about these classes, not a loose upper bound
awaiting improvement, and the vacuity that follows is a property of the class rather
than a weakness of the argument. At $W = 10^6$, $L = 10$ that is
$d_{\mathrm{VC}} \approx 2.0\times10^8$, and the agnostic bound at $\epsilon = 0.1$,
$\delta = 0.05$ asks for $n \ge 9.7\times10^{11}$ — about $1.6\times10^7$ times a
MNIST-sized dataset.

*Introduced:* [5.4](lessons/05-04-neural-networks-and-backpropagation.md); taken seriously in [5.5](lessons/05-05-why-does-deep-learning-generalize.md)

### Minimum-norm interpolation

The one place in this course where "the algorithm restricts the class" is a
**theorem** rather than a hope. Let $X$ be $n\times p$ with $p \ge n$ and rank $n$.

1. The interpolating set $\{\beta : X\beta = y\}$ is the affine set
   $\beta_0 + \ker X$, infinite as soon as $p > n$.
2. It contains **exactly one** element of smallest Euclidean norm:
   $$\hat\beta_{\min} = X^\top(XX^\top)^{-1}y = X^{+}y.$$
3. Gradient descent on the squared loss **started at the origin** converges to that
   element, because every update lies in $\operatorname{row}(X)$ and the iterates never
   leave it.

*Proof of 2, and it is [4.2](lessons/04-02-rkhs-and-the-representer-theorem.md)'s proof
again:* split $\beta = \beta_r + \beta_k$ with $\beta_r\in\operatorname{row}(X)$ and
$\beta_k\in\ker X$; the constraint does not see $\beta_k$ and the norm strictly
prefers $\beta_k = 0$.

**Minimum-norm is not minimum-support.** On $X = \begin{pmatrix}1&1&0\\0&1&1\end{pmatrix}$,
$y = (2,3)$: $\hat\beta_{\min} = (\tfrac13,\tfrac53,\tfrac43)$ with squared norm
$\tfrac{14}{3} \approx 4.67$, against the sparse interpolator $(2,0,3)$ at $13$.
Gradient descent's free regularizer is ridge-flavoured, not lasso-flavoured.

**The honest limits.** "Gradient descent minimises *some* norm" is **false** in
general — in matrix factorization there are settings where the implicit bias provably
is not the minimiser of any norm. The theorem above is least squares from the origin;
in direction, gradient descent with logistic loss on separable data converges to the
max-margin separator of [4.3](lessons/04-03-maximum-margin-classifiers.md). For
anything deeper it is a research programme.

*Introduced:* [5.5](lessons/05-05-why-does-deep-learning-generalize.md); it is the $t\to\infty$ end of [2.6](lessons/02-06-gradient-descent-the-workhorse.md)'s [early-stopping shrinkage](#early-stopping-shrinkage)

### Double descent

Plot test risk against **capacity $p/n$** rather than against $p$ and the picture is
not a U: it falls, spikes at the **interpolation threshold** $p = n$, and falls again.

The left branch is nothing new — [2.1](lessons/02-01-linear-regression-as-learning.md)'s
random-design risk $\sigma^2\bigl(1 + \tfrac{p}{n-p-1}\bigr)$ already diverges as
$p\to n-1$, so **you computed the left half of the peak two modules ago.** What is new
is the descent on the far side, and it is not mysterious once you watch the norm.
From the simulation ($n = 40$, minimum-norm least squares, 400 replicates):

| $p/n$ | test risk | $\mathbb E\lVert\hat\beta\rVert^2$ | best-ridge risk |
|---|---|---|---|
| 0.20 | 0.662 | 0.65 | 0.632 |
| 0.75 | 1.585 | 1.88 | 0.655 |
| 0.95 | 13.95 | 14.34 | 0.681 |
| 1.00 | about 2550 | about 2551 | 0.688 |
| 1.05 | 14.96 | 15.29 | 0.694 |
| 1.50 | 1.162 | 1.13 | 0.750 |
| 2.50 | 0.897 | 0.49 | 0.827 |

Three readings, and the third is the one people skip. **Risk tracks norm everywhere**
— at $p = n$ there is essentially one interpolator and it is forced to be enormous,
while past the threshold extra features give the minimum-norm solution more
directions in which to be small. **The second descent is real** (about 15 down to
0.90). **And it does not win**: the interpolating regime never beats the classical
minimum ($0.897$ against $0.660$), and **optimally tuned ridge has no peak at all**,
staying inside $[0.61,\ 0.85]$ across the whole sweep. Explicit regularization
dominates implicit here.

So the content of double descent is that **$p \approx n$ is uniquely bad**, not that
$p \gg n$ is uniquely good.

*Introduced:* [5.5](lessons/05-05-why-does-deep-learning-generalize.md)

### Covariance matrix

For **centred** data $x_1,\dots,x_n \in \mathbb R^p$ collected as the rows of
$\tilde X$,

$$S = \frac1n\sum_{i=1}^{n}x_ix_i^\top = \frac1n\tilde X^\top\tilde X,$$

symmetric and positive semidefinite, with eigenvalues
$\lambda_1\ge\cdots\ge\lambda_p\ge0$ and orthonormal eigenvectors $v_1,\dots,v_p$.
**The eigenvalue *is* the variance along its eigenvector**, and $\operatorname{tr}(S)$
is the total, a constant no choice of subspace can touch. The $1/(n-1)$ convention
multiplies every eigenvalue by the same constant and changes no argmax.

**Centring is part of the theorem, not preprocessing.** Four points on the line
$(10,10)+t(1,-1)/\sqrt2$ give centred eigenvalues $(5,0)$, top direction
$(1,-1)/\sqrt2$ and **zero** rank-1 error. Skip the centring and the second-moment
matrix has eigenvalues $200$ and $5$ with top eigenvector $(1,1)/\sqrt2$ — the
direction of the *mean*, perpendicular to the spread — reporting a confident 97.6
percent explained for the one direction in which the data does not vary at all.

*Introduced:* [6.1](lessons/06-01-principal-component-analysis.md); the eigen/SVD computation and cost are **ceded to** [`machine-learning` 3.2](../machine-learning/lessons/03-02-principal-component-analysis.md), the spectral theorem to [`linalg-refresher` 5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md)

### Rayleigh quotient

$$\max_{\lVert u\rVert = 1} u^\top S u = \lambda_1, \qquad \min_{\lVert u\rVert = 1} u^\top Su = \lambda_p,$$

attained at the corresponding eigenvectors — the $k = 1$ case of PCA, and the reason
every direction's score is pinned between the extreme eigenvalues. Worked: with
$S = \begin{pmatrix}4&3\\3&12\end{pmatrix}$, $\operatorname{tr} = 16$ and
$\det = 39$, so $\lambda^2 - 16\lambda + 39 = 0$ gives $\lambda = 13, 3$ and
$v_1 = (1,3)/\sqrt{10}$. **The $2\times2$ trick worth memorising is
$\lambda^2 - (\operatorname{tr}S)\lambda + \det S = 0$.**

*Introduced:* [6.1](lessons/06-01-principal-component-analysis.md); the general-$k$ version needs the two-line linear-programming argument below, because "greedily take the best direction, then the best one perpendicular to it" is a procedure, not a proof that the resulting $k$-plane beats every other $k$-plane

### Explained variance

The number everyone quotes, and it is the **optimal value of a minimization** rather
than a summary statistic.

> **Theorem 1 (the two objectives are one).** For any orthonormal $U \in \mathbb R^{p\times k}$,
> $$\underbrace{\frac1n\sum_i\lVert x_i - UU^\top x_i\rVert^2}_{\text{lost}} = \operatorname{tr}(S) - \underbrace{\operatorname{tr}(U^\top SU)}_{\text{kept}}.$$
> **Theorem 2 (which subspace).** $\max_{U^\top U = I_k}\operatorname{tr}(U^\top SU) = \lambda_1+\cdots+\lambda_k$, attained at $U = [v_1\ \cdots\ v_k]$.

Theorem 1 is Pythagoras per point and $\operatorname{tr}(S)$ does not mention $U$:
**your data has a fixed total and every choice of plane just splits it**, so
maximizing the spread of the shadows and minimizing the length of the stubs are the
same problem, not similar ones. Theorem 2 sets $B = W^\top U$, writes the objective
as $\sum_j\lambda_jc_j$ with $c_j = \sum_l B_{jl}^2 \in [0,1]$ and $\sum_jc_j = k$,
and spends a budget of $k$ units of weight on the $k$ largest eigenvalues.

$$\text{explained fraction} = \frac{\lambda_1+\cdots+\lambda_k}{\operatorname{tr}(S)}, \qquad \text{mean squared reconstruction error} = \sum_{j>k}\lambda_j.$$

So "we kept 90 percent" means **no linear code of this size could have kept more.**
The objective depends only on the *subspace*, not the basis ($UR$ for orthogonal $R$
gives the same trace), and the maximizing subspace is unique exactly when
$\lambda_k > \lambda_{k+1}$ — the maximum *value* always is.

**What it does not measure.** It measures squared length **in your units**. PCA is
invariant under rotation and not under rescaling: $S = \operatorname{diag}(4,9)$ has
PC1 $= e_2$; double the first coordinate and $S' = \operatorname{diag}(16,9)$ has PC1
$= e_1$, the *perpendicular* direction, on identical measurements. You cannot have
both invariances — standardizing buys scale invariance and destroys rotation
invariance, and it commits you to the prior that a one-standard-deviation move in any
feature is worth the same as in any other.

*Introduced:* [6.1](lessons/06-01-principal-component-analysis.md); the units demonstration and the "top components are not useful components" warning are **ceded to** [`machine-learning` 3.2](../machine-learning/lessons/03-02-principal-component-analysis.md)

### Eckart-Young theorem

For **every** matrix $A$ with $\operatorname{rank}(A) \le k$, with
$\tilde X = U\Sigma W^\top$ the SVD,

$$\lVert\tilde X - A\rVert_F^2 \;\ge\; \sum_{j>k}\sigma_j^2, \qquad \lVert\tilde X - A\rVert_2 \;\ge\; \sigma_{k+1},$$

with equality for the truncated SVD $\tilde X_k$ in both norms. Since
$\sigma_j^2 = n\lambda_j$, the Frobenius error is again the discarded eigenvalues.

**The strength is in the feasible set:** it ranges over *all* low-rank matrices, a far
larger class than "project the rows onto a subspace," and the same truncation still
wins. So PCA's answer survives a genuine enlargement of its competition — and a
trained **linear autoencoder is PCA**: with identity activations $W_2W_1$ is a
rank-$\le k$ linear map, Eckart–Young bounds its error below by $\sum_{j>k}\lambda_j$,
and $A = V_kV_k^\top$ attains it. What training does *not* determine is the
factorization: $(W_2M, M^{-1}W_1)$ gives the identical map for any invertible $M$, so
the hidden units need not be eigenvectors, orthogonal, or ordered. **The subspace is
the object with a theorem attached; the basis is not.**

*Introduced:* [6.1](lessons/06-01-principal-component-analysis.md); the SVD itself is [`linalg-refresher` 5.2](../linalg-refresher/lessons/05-02-svd.md)

### Within-cluster sum of squares

The k-means objective, and it is a **variance decomposition**, which is what licenses
reading clustering as compression rather than as similarity-hunting.

$$W(C,\mu) = \sum_{j=1}^{k}\sum_{i\in C_j}\lVert x_i - \mu_j\rVert^2.$$

**Centre-of-mass identity.** For any finite set $C$ and any point $c$,

$$\sum_{i\in C}\lVert x_i - c\rVert^2 = \sum_{i\in C}\lVert x_i - \bar x_C\rVert^2 + \lvert C\rvert\,\lVert\bar x_C - c\rVert^2,$$

the cross term dying because $\sum_{i\in C}(x_i - \bar x_C) = 0$ *by the definition of
the mean*. This is [1.2](lessons/01-02-the-bias-variance-decomposition.md)'s
add-and-subtract with $\lvert C\rvert\lVert\bar x_C - c\rVert^2$ in the bias-squared
role. **Corollary:** the mean is the unique minimizing centre, so profiling the
centres out gives

$$W(C) = \sum_{j}\lvert C_j\rvert\,s_j^2 \qquad\text{— size-weighted within-cluster variance.}$$

**Variance partitioning.** With $\mathrm{TSS} = \sum_i\lVert x_i - \bar x\rVert^2$,

$$\mathrm{TSS} = \underbrace{W(C)}_{\text{within}} + \underbrace{\sum_j\lvert C_j\rvert\lVert\bar x_j - \bar x\rVert^2}_{B(C),\ \text{between}}, \qquad\text{and for } k = 2, \quad B = \frac{n_1n_2}{n}\lVert\bar x_1 - \bar x_2\rVert^2.$$

Read the $k=2$ form aloud: **k-means maximizes separation times balance.** The factor
$n_1n_2$ peaks at $n_1 = n_2 = n/2$ and collapses to $n-1$ for a singleton split, so
the objective will trade away a large gap for an even split. Ten points on a line —
nine spread at $-4,\dots,4$ and an outlier at $10$ — have the nine-versus-one split at
$W = 60$ and the absurd $\{-4,\dots,1\}$ against $\{2,3,4,10\}$ at $W = 56.25$:
**the global optimum refuses to isolate an obvious outlier**, because isolating it
costs balance. "k-means likes equal-sized clusters" is not folklore; it is literally a
factor in the objective.

**It never chooses $k$**: the optimal $W$ is non-increasing in $k$ and hits exactly $0$
at $k = n$. Compare [1.3](lessons/01-03-overfitting-and-train-validation-test.md),
where held-out risk *turns back up* and so decides — nothing here turns back up,
because $W$ is not an estimate of anything external.

*Introduced:* [6.2](lessons/06-02-clustering-and-k-means.md); Lloyd's algorithm, its descent proof and the elbow heuristic are **ceded to** [`machine-learning` 3.3](../machine-learning/lessons/03-03-k-means-clustering.md)

### Voronoi partition

> **Theorem.** At any minimiser of $W$, every point is assigned to a nearest centre.

*Proof:* moving a misassigned point strictly lowers $W$ with the centres held fixed,
and re-optimising the centres cannot raise it. $\blacksquare$ Unfolding "nearest",
$x$ goes with $\mu_a$ rather than $\mu_b$ exactly when

$$2(\mu_b - \mu_a)^\top x \;\le\; \lVert\mu_b\rVert^2 - \lVert\mu_a\rVert^2,$$

a **half-space** whose boundary is the perpendicular bisector. So every optimal
cluster is the data intersected with a **convex** cell with flat walls.

**This is a property of the objective, proved without mentioning an initialization, an
iteration or a stopping rule.** Consequence: if $\operatorname{conv}(A)$ lies in the
interior of $\operatorname{conv}(B)$, then **no** k-means optimum at any $k$ returns
$A$ and $B$ as two of its clusters. Nested or curved structure is not hard to find —
it is not in the objective's range.

**Keep the two failure modes apart, because they call for opposite responses.** A bad
initialization is the *algorithm's* bug and restarts fix it. A Voronoi-shaped optimum
is the *objective's* bug and **better search makes it worse**: on the eight-point
two-row instance $(\pm1,\pm h)$, $(\pm3,\pm h)$, the human answer (top versus bottom)
costs $W = 40$ and the global optimum (left versus right) costs $8 + 8h^2$, so the
wrong split wins for every $h < 2$ — and 100 restarts keeping the lowest $W$ report it
more reliably, not less. The diagnostic question is *"is my low-$W$ answer wrong, or
did I fail to reach a low-$W$ answer?"*; restarts address only the second.

**NP-hardness, stated correctly.** Exactly minimising $W$ is NP-hard in **two
independent directions**: with $k = 2$ fixed and the dimension $p$ part of the input
(Dasgupta 2008; Aloise et al. 2009), and in the plane with $p = 2$ fixed and $k$ part
of the input (Mahajan et al. 2012). **Both are needed**, because with $k$ *and* $p$
both fixed the problem is polynomial — enumerate the $O(n^{kp})$ candidate Voronoi
partitions (Inaba–Katoh–Imai 1994) — and on a line it is polynomial for every $k$ by
dynamic programming. So "$k = 2$ in the plane is hard" is **false**; it is easy.

*Introduced:* [6.2](lessons/06-02-clustering-and-k-means.md); the NP-hardness vocabulary is [`algorithms` 4.1](../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md), and what one does about it is [4.3](../algorithms/lessons/04-03-approximation-algorithms.md)

### Gaussian mixture model

$$p(x\mid\theta) = \sum_{k=1}^{K}\pi_k\,f(x\mid\phi_k), \qquad \theta = \bigl((\pi_1,\phi_1),\dots,(\pi_K,\phi_K)\bigr),$$

with $\phi_k = (\mu_k,\Sigma_k)$ in the Gaussian case. It is the objective that drops
k-means' two hidden assumptions — spherical shape and similar size — by fitting a
covariance per component and replacing the hard assignment with a responsibility. The
price is an **unbounded likelihood**: with free covariances the supremum is $+\infty$,
attained by collapsing a component onto a single point, and monotone ascent climbs
*into* the degeneracy.

Read as a **density estimator** rather than a clustering, $K$ is the complexity dial
of [1.3](lessons/01-03-overfitting-and-train-validation-test.md), and finite Gaussian
mixtures approximate any reasonable density arbitrarily well as $K$ grows. At the
extreme $K = n$ — one component per data point, equal weights $1/n$, common width $h$
— it **is** the [kernel density estimator](#kernel-density-estimator), and fitting $h$
by maximum likelihood drives $h\to0$ and the likelihood to infinity. Same degeneracy,
which is why bandwidth needs a different criterion.

*Introduced:* [6.3](lessons/06-03-mixture-models-and-em.md); the E- and M-steps, the monotonicity proof, the likelihood degeneracy and k-means as the hard limit are **ceded to** [`machine-learning` 3.5](../machine-learning/lessons/03-05-gaussian-mixture-models.md)–[3.6](../machine-learning/lessons/03-06-the-em-algorithm.md)

### Evidence lower bound

EM is not a mixture trick. It is **coordinate ascent on one objective in two
blocks**, and the letters E and M are names for "block one" and "block two."

$$\mathcal L(q,\theta) = \mathbb E_q\bigl[\log p(x,z\mid\theta)\bigr] + H(q), \qquad H(q) = -\sum_z q(z)\log q(z),$$

$$\log p(x\mid\theta) \;=\; \mathcal L(q,\theta) \;+\; \mathrm{KL}\bigl(q\,\Vert\,p(z\mid x,\theta)\bigr) \qquad\text{for every } q \text{ and every } \theta.$$

**Proposition (the E-step is a maximization with a closed form).** $\log p(x\mid\theta)$
does not involve $q$, so maximizing $\mathcal L$ over $q$ is minimizing the KL term,
which is $\ge 0$ with equality **iff** $q$ is the posterior:

$$\operatorname*{arg\,max}_q \mathcal L(q,\theta) = p(z\mid x,\theta), \qquad \max_q \mathcal L(q,\theta) = \log p(x\mid\theta).$$

That one line is why the E-step is a posterior computation rather than an
optimization you have to run, and it is the only place EM's special structure lives.
The M-step drops $H(q)$ (no $\theta$ in it) and maximizes the expected complete-data
log-likelihood — the logarithm now **outside** the sum, which was the entire
difficulty.

Three consequences of the framing, each a real generalization:

1. **Monotone ascent is a corollary**, not the definition: the bound is tight after
   the E-step and can only rise in the M-step.
2. **Generalized EM.** The argument never needed the M-step to *maximize* — any
   $\theta^{t+1}$ that does not decrease $\mathcal L$ works, so one gradient step is
   legal.
3. **Variational EM.** Restrict $q$ to a tractable family $\mathcal Q$ and the
   identity still holds, so $\mathcal L$ is still a lower bound and coordinate ascent
   still raises it monotonically. But the E-step now returns the **KL projection** of
   the posterior onto $\mathcal Q$ and the KL term no longer reaches zero — so
   $\log p(x\mid\theta^t)$ itself **may go down**. *Monotonicity in the bound, not in
   the likelihood.* Nothing about EM was special; what was special was that one
   family — all distributions over $z$ — makes the bound tight.

**The gap you cannot measure.** With two perfectly correlated binary latents,
$p(x,z_1,z_2) = 0.45$ at $(0,0)$ and $(1,1)$, the best mean-field (factorized) $q$ is
a point mass at one mode and $\log p(x) - \mathcal L^* = \log 2 = 0.693$ nats,
irreducible. Soften the zeros to $0.05$ and the optimal factors are
$\mathrm{Bernoulli}(2/3)$ (plus its mirror image — symmetry broken again) with a
residual gap of exactly $\tfrac23\log 2 = 0.462$. **Every reported ELBO is a lower
bound whose slack you cannot compute** — if you could, you would not need the bound.

*Introduced:* [6.3](lessons/06-03-mixture-models-and-em.md)

### KL divergence

$\mathrm{KL}(q\Vert p) = \sum_z q(z)\log\frac{q(z)}{p(z)} \ge 0$, with equality iff
$q = p$ — non-negativity by Jensen. In this course it appears once and decisively: as
the **exact slack** between the log-likelihood and the ELBO, so "the E-step maximizes
the bound" and "the E-step minimizes the KL to the posterior" are the same sentence.
Its information-theoretic content is
[`information-theory` 1.4](../information-theory/lessons/01-04-relative-entropy-kl-jensen.md)'s.

*Introduced:* [6.3](lessons/06-03-mixture-models-and-em.md)

### Label switching

A theorem about the **model**, not about the algorithm — so no restart policy and no
optimizer can fix it.

> For any permutation $\sigma$ of $\{1,\dots,K\}$, let $\theta^\sigma$ permute the
> $K$ pairs $(\pi_k,\phi_k)$. Then $p(x\mid\theta^\sigma) = p(x\mid\theta)$ for every
> $x$, hence the likelihood of every dataset is unchanged.

*Proof:* $\sigma$ is a bijection of a finite index set and addition is commutative;
re-index by $j = \sigma(k)$. $\blacksquare$ The proof uses only that the components
enter through a **sum over an unordered index** — nothing about Gaussians.

**Corollary.** With distinct components, every maximum comes in an orbit of $K!$
distinct parameter vectors with identical likelihood: $24$ at $K = 4$, $720$ at
$K = 6$. With multiplicities $m_1,\dots,m_r$ the orbit shrinks to
$K!/\prod_j m_j!$ (so $4!/2! = 12$ if two of four components coincide).

Consequences: **you cannot average parameters across EM restarts** (restart A's
$\mu_1$ and restart B's $\mu_1$ may be the same component under two names, and the
average is a mean no run proposed); a credible interval for $\mu_2$ is meaningless
without a labelling convention, since the Bayesian posterior is exactly
$K!$-symmetric; and more restarts make it **worse**, each landing in a different
member of the orbit. The fix is a **convention, not a computation** — order by the
first coordinate of the mean, or by mixing weight — and it is unreliable exactly when
two components are close in the ordering key. The honest alternative is to report only
**relabelling-invariant** quantities: the fitted density, the predictive
distribution, the induced partition.

*Introduced:* [6.3](lessons/06-03-mixture-models-and-em.md); its continuous cousin is probabilistic PCA's $W \mapsto WR$ non-identifiability, [6.1](lessons/06-01-principal-component-analysis.md)

### Kernel density estimator

One bump of mass $1/n$ per observation, added up. Refuse to name a family and let the
sample carry the shape.

$$\hat p(x) = \frac{1}{nh^{d}}\sum_{i=1}^{n}K\!\left(\frac{x-x_i}{h}\right), \qquad K \ge 0,\ \ \int K = 1,\ \ K(-u) = K(u),\ \ \int uu^\top K = \mu_2 I,\ \ R(K) = \int K^2.$$

**Theorem (pointwise).** With $p$ twice continuously differentiable, as $h\to0$ and
$nh^d\to\infty$,

$$\mathbb E[\hat p(x)] - p(x) = \frac{h^2}{2}\mu_2\nabla^2p(x) + o(h^2) = O(h^2), \qquad \operatorname{Var}\bigl(\hat p(x)\bigr) = \frac{p(x)R(K)}{nh^d} + o\!\left(\tfrac{1}{nh^d}\right).$$

*In words:* the estimate aims off by the **curvature** of the truth times the square
of the window width, and it wobbles by an amount set by how many points land in the
window. The bias half is [1.2](lessons/01-02-the-bias-variance-decomposition.md)'s
argument verbatim — the symmetric window cancels the linear term and what survives is
the second derivative. The variance half is counting: **the effective sample size at
$x$ is not $n$, it is $nh^d$**, and that is where the dimension gets in.

**Balancing.** $\mathrm{MISE}(h) \approx C_1h^4 + C_2n^{-1}h^{-d}$, so

$$h^\star = \left(\frac{dC_2}{4C_1n}\right)^{1/(4+d)} \propto n^{-1/(4+d)}, \qquad \mathrm{MISE}(h^\star) \propto n^{-4/(4+d)},$$

and at the optimum $\operatorname{bias}^2/\operatorname{Var} = d/4$ exactly — so "tune
until bias and variance are equal" is right only at $d = 4$. At $d = 1$ the rate is
$n^{-4/5}$ with $h^\star \propto n^{-1/5}$, **the same exponent
[1.2](lessons/01-02-the-bias-variance-decomposition.md) got for $k$-NN**, because both
are local averages trading a squared-curvature bias against a
one-over-effective-count variance.

**And it is not the estimator's fault.** Stone's minimax theorem: no estimator
whatsoever — not a cleverer kernel, not a wavelet, not a network — beats
$n^{-4/(4+d)}$ uniformly over densities with two bounded derivatives. **The rate is a
property of the problem.**

$\hat p$ is a **density**, so it can exceed 1, and $\hat p(x) = 0$ in a gap is an
artefact of $h$, not evidence that $x$ is impossible. $h^\star$ contains $C_1$, i.e.
the curvature of the density you are trying to estimate, so it is never directly
computable — cross-validate.

*Introduced:* [6.4](lessons/06-04-density-estimation.md) — the library's only treatment of density estimation

### Curse of dimensionality

Three faces of one fact: **volume grows exponentially in $d$ and your sample does
not.**

**(1) A "local" neighbourhood is not local.** A sub-cube capturing a fraction $0.01$
of the unit cube's volume has side $0.01^{1/d}$:

| $d$ | 1 | 2 | 10 | 50 | 100 |
|---|---|---|---|---|---|
| side capturing 1 percent of the volume | $0.010$ | $0.100$ | $0.631$ | $0.912$ | $0.955$ |

In 100 dimensions the neighbourhood holding the nearest 1 percent of your data spans
95 percent of the range of **every single variable**. Every method in this course that
whispered "nearby points behave alike" — $k$-NN, the RBF bandwidth, k-means' Voronoi
cells — was assuming this table stays in its first column.

**(2) Almost every point is on the edge.** The fraction of the unit cube within
$0.05$ of the boundary is $1 - 0.9^d$: $0.10$ at $d = 1$, $0.651$ at $d = 10$,
$0.995$ at $d = 50$, $0.9999$ at $d = 100$. So almost every prediction is an
**extrapolation**, and a kernel bump on a boundary has data on one side only — where
the symmetric cancellation fails and the bias degrades from $O(h^2)$ to $O(h)$. **The
rate above is an interior statement, and in high dimension there is barely any
interior.**

**(3) The rate is the killer.** Points needed at dimension $d$ to match what $n = 100$
buys at $d = 1$, i.e. $n_d = 100^{(4+d)/5}$:

| $d$ | 1 | 2 | 5 | 10 | 20 |
|---|---|---|---|---|---|
| $n$ required | $100$ | $251$ | $3{,}981$ | $4.0\times10^{5}$ | $4.0\times10^{9}$ |

Read in the other direction: $n = 4{,}000$ points in $d = 10$ buy accuracy
$4000^{-4/14} = 0.0935$, which one dimension delivers from about **nineteen** points.
"Large" is a statement about $n$; what decides whether you have enough data is $n$
against $d$, **through an exponent, not a ratio**.

**It is statistical, not computational** — a faster machine changes nothing, and by
Stone's bound neither does a cleverer estimator. **Standardizing does not help**,
because $0.01^{1/d}$ is a fraction of each variable's *range*, whatever the units. An
uninformative feature still costs you volume, so adding it makes a density estimate
strictly worse — a harsher regime than supervised learning, where an irrelevant
feature is a variance cost a regularizer can absorb.

**The escape is an assumption, not a method:** that the data concentrates near a
manifold of intrinsic dimension $d_0 \ll d$, giving $n^{-4/(4+d_0)}$. This course used
it twice before naming it — PCA as the linear version
([6.1](lessons/06-01-principal-component-analysis.md)) and whatever lets
overparameterized networks generalize
([5.5](lessons/05-05-why-does-deep-learning-generalize.md)) as the version nobody can
make rigorous. It is an **inductive bias**, which is
[no free lunch](#no-free-lunch-theorem) collecting its bill one final time.

*Introduced:* [6.4](lessons/06-04-density-estimation.md)

## Formulas and rules

### Useful inequalities

The five that do all the work in this course.

| inequality | where it is used |
|---|---|
| $1 - x \le e^{-x}$ for all real $x$ | turns $(1-\epsilon)^n$ into $e^{-\epsilon n}$ — **the only slack in the whole threshold proof** ([3.1](lessons/03-01-the-pac-framework.md)), and $\sqrt{1-4\gamma_t^2} \le e^{-2\gamma_t^2}$ in boosting ([5.3](lessons/05-03-boosting.md)) |
| $\Pr(\bigcup_j B_j) \le \sum_j\Pr(B_j)$ | the [union bound](#union-bound), valid under arbitrary dependence — [3.2](lessons/03-02-finite-classes-and-uniform-convergence.md) |
| [Hoeffding](#hoeffdings-inequality): $2e^{-2n\epsilon^2}$ for bounded i.i.d. averages | every concentration step in Module 3 |
| **Jensen**: $\mathbb E[g(Z)] \ge g(\mathbb E Z)$ for convex $g$; $\mathbb E[\sup] \ge \sup\mathbb E$ | $\mathbb E[\min] \le \min\mathbb E$ (selection bias, [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md), [1.3](lessons/01-03-overfitting-and-train-validation-test.md)); $\hat{\mathfrak R}_S \ge 0$ ([3.5](lessons/03-05-rademacher-complexity.md)); the aggregation identity ([5.2](lessons/05-02-bagging-and-random-forests.md)); $\mathrm{KL} \ge 0$ ([6.3](lessons/06-03-mixture-models-and-em.md)) |
| **Cauchy–Schwarz**: $\lvert\langle u,v\rangle\rvert \le \lVert u\rVert\lVert v\rVert$ | the margin capacity proof ([4.3](lessons/04-03-maximum-margin-classifiers.md)), the RKHS smoothness bound and the norm-ball Rademacher bound ([4.2](lessons/04-02-rkhs-and-the-representer-theorem.md)) |

Two more worth having: **a maximum is at least a mean** (which converts every
averaging argument in [1.4](lessons/01-04-no-free-lunch-and-inductive-bias.md) into an
existence claim), and **reverse Markov** for a variable bounded by 1,
$\Pr[Z \ge a] \ge \frac{\mathbb E Z - a}{1-a}$, which turns no-free-lunch's mean of
$1/4$ into "at least one training set in seven leaves you worse than $1/8$."

*From* [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md), [1.4](lessons/01-04-no-free-lunch-and-inductive-bias.md), [3.1](lessons/03-01-the-pac-framework.md), [3.2](lessons/03-02-finite-classes-and-uniform-convergence.md), [3.5](lessons/03-05-rademacher-complexity.md)

### The three risk decompositions, side by side

| decomposition | statement | costs what assumption |
|---|---|---|
| **excess risk** ([1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md)) | $R(\hat h) - R^* = $ approximation $+$ estimation ($+$ optimization when ERM is not computed) | **nothing** — any loss, any class |
| **bias–variance** ([1.2](lessons/01-02-the-bias-variance-decomposition.md)) | $\mathbb E[(y_0-\hat f(x_0))^2] = \operatorname{bias}^2 + \operatorname{Var} + \sigma^2$ | **squared loss only**; the split came from $(a+b)^2$ |
| **optimism** ([2.1](lessons/02-01-linear-regression-as-learning.md), [2.3](lessons/02-03-ridge-regression-and-shrinkage.md)) | $\mathbb E[\hat R_{\text{out}}] - \mathbb E[\hat R_{\text{in}}] = 2\sigma^2\operatorname{tr}(H)/n$ | a **linear smoother** and homoscedastic noise; needs *no* correct model |
| **variance partition** ([6.2](lessons/06-02-clustering-and-k-means.md)) | $\mathrm{TSS} = W(C) + B(C)$ | none — it is the centre-of-mass identity summed over clusters |
| **ELBO** ([6.3](lessons/06-03-mixture-models-and-em.md)) | $\log p(x\mid\theta) = \mathcal L(q,\theta) + \mathrm{KL}(q\Vert p(z\mid x,\theta))$ | none — an identity for every $q$ and every $\theta$ |

All five are the same algebraic move: **add and subtract a reference point, and watch
one cross term die.** Which reference point, and for which reason, is what
distinguishes them — and in the bias–variance case one of the two reasons can fail,
which is the whole content of "zero training error is not a finding."

### The generalization-bound table

The single most useful page in the course. Every row is "true risk $\le$ observed
risk $+$ capacity $+$ confidence," and they differ only in what goes in the capacity
slot.

| bound | statement | assumptions | worked instantiation |
|---|---|---|---|
| **finite class** ([3.2](lessons/03-02-finite-classes-and-uniform-convergence.md)) | $R(h) \le \hat R_S(h) + \sqrt{\dfrac{\ln\lvert\mathcal H\rvert + \ln(2/\delta)}{2n}}$, or $n \ge \dfrac{1}{2\epsilon^2}\ln\dfrac{2\lvert\mathcal H\rvert}{\delta}$ | $\lvert\mathcal H\rvert < \infty$; loss **bounded** in $[0,1]$; $\mathcal H$ fixed before $S$ | conjunctions on 10 bits, $\lvert\mathcal H\rvert = 3^{10} = 59{,}049$, $\epsilon = 0.1$, $\delta = 0.05$: $n = 734$. Monotone conjunctions on 20 bits, $\lvert\mathcal H\rvert = 2^{20}$, $\epsilon = 0.05$, $\delta = 0.01$: $n = 3{,}833$ |
| **realizable VC** ([3.4](lessons/03-04-vc-bounds-and-sample-complexity.md)) | $n \ge \dfrac{4}{\epsilon}\Bigl(d_{\mathrm{VC}}\ln\dfrac{12}{\epsilon} + \ln\dfrac{2}{\delta}\Bigr)$ | $d_{\mathrm{VC}} < \infty$; **some $h$ has zero risk**; binary 0-1 loss | half-planes, $d_{\mathrm{VC}} = 3$, $\epsilon = 0.1$, $\delta = 0.05$: $n \ge 723$. Affine in $\mathbb R^5$, $d_{\mathrm{VC}} = 6$, $\epsilon = 0.05$, $\delta = 0.01$: $n \ge 3{,}055$ |
| **agnostic VC** ([3.4](lessons/03-04-vc-bounds-and-sample-complexity.md)) | $n \ge \dfrac{8}{\epsilon^2}\Bigl(d_{\mathrm{VC}}\ln\dfrac{16e}{\epsilon} + \ln\dfrac{2}{\delta}\Bigr)$ | $d_{\mathrm{VC}} < \infty$; **nothing about the truth** | same half-planes: $n \ge 17{,}532$ — **24 times the data, bought by refusing to assume a perfect hypothesis exists**. Affine in $\mathbb R^5$: $n \ge 146{,}907$, a ratio of $48.1$ |
| **VC read-off** ([3.4](lessons/03-04-vc-bounds-and-sample-complexity.md)) | $R(h) \le \hat R_S(h) + \sqrt{\dfrac{8\bigl(d_{\mathrm{VC}}\ln\frac{2en}{d_{\mathrm{VC}}} + \ln\frac4\delta\bigr)}{n}}$ | as agnostic VC; holds **simultaneously for all $h$** | at $d_{\mathrm{VC}} = 3$ the band is $1.264$ at $n = 10^2$, $0.464$ at $10^3$, $0.164$ at $10^4$, $0.057$ at $10^5$, $0.020$ at $10^6$ |
| **Rademacher** ([3.5](lessons/03-05-rademacher-complexity.md)) | $R(h) \le \hat R_S(h) + 2\hat{\mathfrak R}_S(\mathcal F) + 3\sqrt{\dfrac{\ln(2/\delta)}{2n}}$ | loss class $\mathcal F$ into $[0,1]$; **data-dependent** and real-valued-friendly | $\lvert\mathcal F\rvert = 10^6$, $B = 1$: at $n = 100$ Massart gives $\hat{\mathfrak R}_S \le 0.526$, capacity term $1.051$ — **vacuous**; at $n = 10^4$, $0.0526$ and $0.105$ — a real promise |
| **Massart** ([3.5](lessons/03-05-rademacher-complexity.md)) | $\hat{\mathfrak R}_S(\mathcal F) \le B\sqrt{\dfrac{2\ln\lvert\mathcal F\rvert}{n}}$ | $\mathcal F$ finite, $\lvert f(x_i)\rvert \le B$ | recovers the finite-class rate exactly; loose when the class is small ($0.961$ against a true $2/3$) and **useless once $\lvert\mathcal F\rvert$ grows exponentially in $n$** |
| **margin** ([4.3](lessons/04-03-maximum-margin-classifiers.md)) | $R(h) \le \hat R^\gamma_S(h) + \dfrac{2R}{\gamma\sqrt n} + 3\sqrt{\dfrac{\ln(2/\delta)}{2n}}$ | $\lVert x_i\rVert \le R$, separators through the origin, **$\gamma$ fixed before $S$** | $R^2/\gamma^2 = 10/9$, $n = 1000$, $\delta = 0.05$, separable: risk bound $0.196$. $R^2/\gamma^2 = 5$: $0.270$ at $n = 1000$, $0.085$ at $n = 10^4$ |
| **boosting margin** ([5.3](lessons/05-03-boosting.md)) | $R(H) \lesssim \widehat{\Pr}[\operatorname{marg} \le \theta] + \tilde O\bigl(\sqrt{d_{\mathrm{VC}}(\mathcal H)/(n\theta^2)}\bigr)$ | base class $\mathcal H$; $\theta > 0$ fixed in advance | **$T$ is absent from the capacity term** — which is why a bound that grows with $T$ cannot explain a test error that falls with $T$ |

**How loose is loose.** For half-planes on uniform data in the unit square at
$\epsilon = 0.1$, $\delta = 0.05$: the provable **lower** bound is $n = 31$, direct
simulation says $n = 52$, the realizable VC bound says $723$, the agnostic bound says
$17{,}532$. The bound is correct and off by a factor of 14, with a further factor of
23 between what is provable and what is proved. The slack has four sources and they
are **not the same kind of thing**:

1. **symmetrization** throws away a factor of 2 and half the accuracy budget;
2. **the union bound over $\Pi_{\mathcal H}(2n)$ behaviours** assumes they fail
   independently, and nearby half-planes err on nearly the same points;
3. **Sauer's bound** is itself worst-case over point configurations;
4. **the statement is distribution-free** — it must hold for the least favourable
   $\mathcal D$, and yours is not it.

The first three are slack *in the proof* and a sharper proof would shave them. The
fourth is slack **in the question you asked**, and no proof removes it — that is the
one [3.5](lessons/03-05-rademacher-complexity.md) attacks by measuring capacity on
your actual sample.

**What survives a constant factor**, and it is what these bounds are for: an
**existence proof** (finite $d_{\mathrm{VC}}$ implies learnable, full stop); a
**ranking** ($d_{\mathrm{VC}} = 3$ is cheaper than $300$, and the ratio is roughly
right); and a **shape** ($n$ grows linearly in $d_{\mathrm{VC}}$, logarithmically in
$1/\delta$, quadratically in $1/\epsilon$ once you drop realizability). **"My class
has VC dimension 3, therefore I need 723 points" is not a conclusion this theory
supports.** For an actual sample size, hold out data and measure.

**Which knob is expensive.** From $n = \frac{1}{2\epsilon^2}(\ln\lvert\mathcal H\rvert + \ln\frac2\delta)$
at $\lvert\mathcal H\rvert = 2^{20}$, $\epsilon = 0.05$, $\delta = 0.1$ ($n = 3372$):

| change | new $n$ | cost | why |
|---|---|---|---|
| $\delta:\ 0.1 \to 0.01$ | 3,833 | $+461$ | $\delta$ enters as $\ln(1/\delta)$ — **never economise on confidence** |
| $\lvert\mathcal H\rvert$ **squared**, $2^{20}\to2^{40}$ | 6,145 | $+2{,}773$ | $\ln\lvert\mathcal H\rvert$ doubles; the $\ln(2/\delta)$ overhead does not |
| $\epsilon:\ 0.05 \to 0.025$ | 13,487 | $\times 4$ | $1/\epsilon^2$ — the only knob with polynomial cost, and the one that decides your budget |

*From* [3.2](lessons/03-02-finite-classes-and-uniform-convergence.md), [3.4](lessons/03-04-vc-bounds-and-sample-complexity.md), [3.5](lessons/03-05-rademacher-complexity.md), [4.3](lessons/04-03-maximum-margin-classifiers.md), [5.3](lessons/05-03-boosting.md); instantiated for kernels in [4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md), for trees in [5.1](lessons/05-01-decision-trees.md), for networks in [5.4](lessons/05-04-neural-networks-and-backpropagation.md)

### VC dimensions of the standard classes

| class | $d_{\mathrm{VC}}$ | growth function / note |
|---|---|---|
| thresholds $\mathbf 1[x\ge a]$ on $\mathbb R$ | $1$ | $\Pi(n) = n+1$; Sauer tight |
| intervals $\mathbf 1[a\le x\le b]$ | $2$ | $\Pi(n) = 1 + n(n+1)/2$; **Sauer tight at every $n$** |
| unions of at most two intervals | $4$ | every 4-set is shattered; $(+,-,+,-,+)$ needs three runs, so no 5-set is |
| half-planes in $\mathbb R^2$ | $3$ | $14$ of $16$ labellings on **any** 4-set — Sauer's $15$ is not tight. Collinear triples are *not* shattered |
| affine separators in $\mathbb R^d$ | $d+1$ | a coincidence of a rigid class, not a rule |
| degree-2 separators in $\mathbb R^2$ | $6$ | feature map $(x_1,x_2,x_1^2,x_1x_2,x_2^2)$, $D = 5$ |
| degree-2 in $\mathbb R^{100}$ | $5{,}151$ | 5,150 monomials |
| **RBF-kernel separators** | $\infty$ | the bound is vacuous; use $R^2/\gamma^2$ instead |
| stumps on $\mathbb R^1$ / $\mathbb R^2$ | $2$ / $3$ | one sign change; at most $14$ of $16$ on any 4-set in the plane |
| stumps on $d$ **binary** features | $\lfloor\log_2(2d+2)\rfloor$ | $\lvert\mathcal H\rvert = 2d+2$. **Logarithmic in $d$** — ten thousand features still gives 14, which is exactly what boosting wants |
| trees with $L$ leaves, $d$ features | $\ge L$, and $O(L\log dL)$ | see below |
| ReLU nets, $W$ weights, $L$ layers | $\Theta(WL\log W)$ | with a **matching lower bound** $WL\log(W/L)$ — tight, so the vacuity is a property of the class |
| margin-$\gamma$ linear on radius-$R$ data | $\le R^2/\gamma^2$ ($\gamma$-shattering) | finite even when $D = \infty$ |
| all functions $\mathcal X\to\{0,1\}$, $\mathcal X$ infinite | $\infty$ | "assume nothing" — not PAC learnable |
| $\mathbf 1[\sin(\theta x) > 0]$, one real parameter | $\infty$ | **VC dimension is not a parameter count** |
| monotone conjunctions on 20 bits | $20$ | $\lvert\mathcal H\rvert = 2^{20}$, and $d_{\mathrm{VC}} \le \log_2\lvert\mathcal H\rvert$ always — tight here |

**Trees, stated in both directions.** The lower bound $d_{\mathrm{VC}}(\mathcal T_L) \ge L$
is a construction: $L$ points with distinct values in one coordinate, $L-1$
thresholds between consecutive values, one point per leaf, and the leaf labels are
free. So capacity grows **at least** one bit per leaf. The **upper** bound is a
count — at most $C_{L-1}(dn)^{L-1}2^L \le 8^L(dn)^{L-1}$ labellings on $n$ points, so
shattering is impossible once $n > 3L + (L-1)\log_2(dn)$, i.e. $d_{\mathrm{VC}} = O(L\log dL)$.
At $L = 8$, $d = 10$: $8 \le d_{\mathrm{VC}}(\mathcal T_8) \le 93$. **"VC grows
linearly in the leaf count" is the lower bound only**; the honest statement is linear
up to a logarithmic factor, and it is what licenses $\lvert T\rvert$ as the pruning
meter.

**The unpruned tree, and why the bound has no solution.** Grow to purity and $L = n$,
so $d_{\mathrm{VC}} \ge n$ and the realizable requirement becomes
$n \ge \frac{4n}{\epsilon}\ln\frac{12}{\epsilon} + \frac4\epsilon\ln\frac2\delta$,
which needs $\frac4\epsilon\ln\frac{12}{\epsilon} < 1$. That quantity is decreasing
in $\epsilon$ and equals $4\ln12 \approx 9.94$ at $\epsilon = 1$, so **no
$\epsilon\in(0,1]$ and no $\delta$ satisfy it.** The bound is not weak here; it is
**unsatisfiable**. "Trees overfit" is the VC bound declining to say anything at all.

At $\epsilon = 0.1$, $\delta = 0.05$ the realizable bound costs about **191 extra
points per leaf** plus a fixed 148: two leaves ask 531, four ask 914, eight ask 1,680,
sixteen ask 3,212. A depth-3 tree is three questions and already asks for over a
thousand labelled examples in the noiseless case.

*From* [3.3](lessons/03-03-shattering-and-the-vc-dimension.md), [3.4](lessons/03-04-vc-bounds-and-sample-complexity.md), [4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md), [4.3](lessons/04-03-maximum-margin-classifiers.md), [5.1](lessons/05-01-decision-trees.md), [5.3](lessons/05-03-boosting.md), [5.4](lessons/05-04-neural-networks-and-backpropagation.md)

### Linear closed forms and shrinkage profiles

| estimator | closed form / factor on SVD direction $i$ | what it does to a coefficient |
|---|---|---|
| OLS | $\hat\beta = (X^\top X)^{-1}X^\top y$; factor $1$ | nothing; needs $\operatorname{rank}(X) = p \le n$ |
| ridge ([2.3](lessons/02-03-ridge-regression-and-shrinkage.md)) | $(X^\top X + \lambda I)^{-1}X^\top y$; factor $\dfrac{\sigma_i^2}{\sigma_i^2+\lambda}$ | a constant **fraction** of every coefficient; never exactly zero; exists even at $p > n$ |
| lasso ([2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md)) | $\operatorname{sign}(z_j)(\lvert z_j\rvert - \lambda)_+$ under $X^\top X = I$ | a constant **amount** off every survivor; a dead zone of half-width $\lambda$ |
| elastic net ([2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md)) | strictly convex objective | unique, continuous in the data, groups correlated columns |
| early stopping ([2.6](lessons/02-06-gradient-descent-the-workhorse.md)) | factor $1-(1-\eta\sigma_i^2)^t$ | same shape as ridge, **different function** |
| minimum-norm interpolation ([5.5](lessons/05-05-why-does-deep-learning-generalize.md)) | $X^{+}y$ | the $t\to\infty$, $p>n$ limit of the above |
| kernel ridge ([4.2](lessons/04-02-rkhs-and-the-representer-theorem.md)) | $\alpha = (\mathbf K+\lambda I)^{-1}y$ | ridge with $\lVert f\rVert_K$ in place of $\lVert\beta\rVert_2$ |

**Worked shrinkage comparison** ($\sigma_i^2 = 16, 4, 1, 0.25$; $\eta = 0.05$,
$t = 5$; best-matching ridge $\lambda = 2.252$):

| $\sigma_i^2$ | early stopping, $t = 5$ | ridge, $\lambda = 2.25$ | $\lambda$ matching **this** direction |
|---|---|---|---|
| $16$ | $0.9997$ | $0.8766$ | $0.0051$ |
| $4$ | $0.6723$ | $0.6398$ | $1.9495$ |
| $1$ | $0.2262$ | $0.3075$ | $3.4205$ |
| $0.25$ | $0.0610$ | $0.0999$ | $3.8513$ |

The best matched $\lambda$ leaves a residual sum of squares of $2.4\times10^{-2}$ —
small, and not zero. The fourth column is the sharper statement: **a factor of 670
between the $\lambda$ that matches the leading direction and the one that matches the
third.**

**Gauss–Markov, and the caveat that matters more than the theorem.** Among estimators
linear in $y$ and unbiased for $\beta$, OLS has the smallest variance. But
*unbiasedness is a constraint we imposed, not a goal we chose* — nothing in
$\mathbb E\lVert y' - X\hat\beta\rVert^2$ rewards it, and
[2.3](lessons/02-03-ridge-regression-and-shrinkage.md) shows the constraint is
binding. Unbiasedness *is* the goal when the coefficient is the estimand rather than
the prediction, which is [`econometrics`](../econometrics/syllabus.md)'s question,
not ours.

**What sparsity buys, stated not proved.** Under a sparse truth with $s$ nonzeros and
a well-behaved design, the lasso's excess risk scales like $\dfrac{s\log p}{n}$ rather
than [2.1](lessons/02-01-linear-regression-as-learning.md)'s $\dfrac pn$ — you pay for
the coefficients you use plus a logarithm for not knowing in advance which ones, the
same "complexity is paid in bits" accounting as $\ln\lvert\mathcal H\rvert$. It is
conditional on $s \ll p$: **if the truth is dense you have bought nothing while
giving up unbiasedness.** On an orthonormal design with $p = 10$, every $\beta_j = 0.5$
and $\sigma = 0.4$, the lasso at $\lambda = 0.5$ "selects" 5.06 features on average
from a truth where none differs from any other, and its per-coefficient MSE is
$0.171$ against OLS's $0.160$ and ridge's $0.098$ — **the penalty is a bet on the
shape of the truth, and this is what losing looks like.**

*From* [2.1](lessons/02-01-linear-regression-as-learning.md), [2.3](lessons/02-03-ridge-regression-and-shrinkage.md), [2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md), [2.6](lessons/02-06-gradient-descent-the-workhorse.md), [4.2](lessons/04-02-rkhs-and-the-representer-theorem.md), [5.5](lessons/05-05-why-does-deep-learning-generalize.md)

### The MAP dictionary

| prior on each $\beta_j$ | negative log-prior | penalty | MAP estimator | $\lambda$ (RSS **not** halved) |
|---|---|---|---|---|
| $\mathcal N(0,\tau^2)$ | $\beta_j^2/(2\tau^2)$ | $\lVert\beta\rVert_2^2$ | ridge | $\sigma^2/\tau^2$ |
| Laplace$(0,b)$ | $\lvert\beta_j\rvert/b$ | $\lVert\beta\rVert_1$ | lasso | $2\sigma^2/b$ |
| flat (improper) | constant | none | OLS / MLE | $0$ |
| spike-and-slab $\pi\delta_0 + (1-\pi)g$ | — | — | genuine Bayesian variable selection | $\Pr(\beta_j = 0\mid y)$ is a real number |

**The factor of 2 is bookkeeping, and here is exactly where it comes from.** The
Gaussian log-density carries $\tfrac{1}{2\tau^2}$ and the Laplace carries $\tfrac1b$;
multiplying the log-posterior by $2\sigma^2$ cancels the one and not the other. Use
the **half-RSS** convention $\tfrac12\lVert y - X\beta\rVert^2$ instead — this card's
lasso convention — and you multiply by $\sigma^2$, giving $\lambda = \sigma^2/b$ and a
soft threshold at $\sigma^2/b$, the same variance ratio again. **Quoting a $\lambda$
without its objective is meaningless; the ratio structure is what to remember.**

Reading it both ways, at $\sigma^2 = 12$: $\tau = 2$ gives $\lambda = 3$, a shrinkage
factor of $1/4$; a colleague's cross-validated $\lambda = 0.75$ implies $\tau = 4$,
i.e. the assertion that coefficients of $\pm8$ are ordinary when the noise standard
deviation is only $3.46$. **Every $\lambda$ is a statement**, and the translation is
the only way to ask whether it is a sane one.

*From* [2.3](lessons/02-03-ridge-regression-and-shrinkage.md), [2.5](lessons/02-05-regularization-as-a-bayesian-prior.md)

### Normalization conventions: read this before comparing with the sibling card

Wherever this course and [`machine-learning`](../machine-learning/syllabus.md) share a
formula with a free scaling, they picked different — **both standard** — conventions.
With both cards open the same estimator looks like two contradictory results. It is
not; it is one factor.

| formula | `machine-learning` | `statistical-learning` (this card) | reconciliation |
|---|---|---|---|
| **SVM cost versus penalty** | $\lambda_{\text{ML}} = 1/(2C)$ — [2.3](../machine-learning/lessons/02-03-soft-margins-and-the-svm-dual.md) **sums** the hinge loss and puts no $\tfrac12$ on the penalty | $\lambda = 1/(Cn)$ — [4.4](lessons/04-04-support-vector-machines.md) **averages** the hinge loss and writes $\tfrac{\lambda}{2}\lVert w\rVert^2$ | $\lambda_{\text{ML}} = \dfrac{\lambda n}{2}$ |
| **lasso threshold** | thresholds at $\lambda/2$ — [1.4](../machine-learning/lessons/01-04-regularization-ridge-and-lasso.md) writes the fit term as $\lVert y-X\beta\rVert^2$ | thresholds at $\lambda$ — [2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md) writes $\tfrac12\lVert y-X\beta\rVert^2$ | one factor of 2 |
| **MAP constant for the Laplace prior** | — | $\lambda = 2\sigma^2/b$ with un-halved RSS, $\sigma^2/b$ with halved RSS — [2.5](lessons/02-05-regularization-as-a-bayesian-prior.md) | the same factor again |

**The SVM objective on this card**, so there is no ambiguity about which $\lambda$ is
which:

$$\min_w\ \frac1n\sum_{i=1}^{n}\max\bigl(0,\ 1 - y_iw^\top x_i\bigr) \;+\; \frac{\lambda}{2}\lVert w\rVert^2, \qquad \lambda = \frac{1}{Cn}.$$

**Which way the knob turns.** $C$ prices the *mistakes* and $\lambda$ prices the
*weights*, so **large $C$ means light regularization and large $\lambda$ means heavy
regularization** — they are reciprocals, and this is the single most-reversed fact in
the subject. Note $n$ appears: **the same $C$ is less regularization on a larger
sample.** ($n = 500$, $C = 10$ gives $\lambda = 0.0002$; $\lambda = 0.01$ at $n = 250$
gives $C = 0.4$.)

Two more conventions worth stating: the **logistic surrogate uses $\log_2$** on this
card, because the natural-log version equals $\ln 2 < 1$ at $z = 0$ and so fails to
upper-bound the step; and **boosting's score is half a log-odds**, so the calibration
map is $\sigma(2F)$, not $\sigma(F)$.

*From* [2.2](lessons/02-02-logistic-regression-and-classification.md), [2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md), [2.5](lessons/02-05-regularization-as-a-bayesian-prior.md), [4.4](lessons/04-04-support-vector-machines.md), [5.3](lessons/05-03-boosting.md)

### Surrogate losses, and what each one returns

All normalized to pass through $(0,1)$ so each upper-bounds the step. Condition on
$x$, write $\eta = \eta(x)$, and minimize
$C_\varphi(\eta,f) = \eta\varphi(f) + (1-\eta)\varphi(-f)$ over the real number $f$:

| $\varphi(z)$ | used by | population minimizer $f^*(x)$ | minimum of $C_\varphi$ |
|---|---|---|---|
| $\mathbf 1[z\le0]$ | nobody (NP-hard) | $\operatorname{sign}(2\eta-1)$ | $\min(\eta,1-\eta)$ — the Bayes risk |
| $\log_2(1+e^{-z})$ | logistic regression, cross-entropy nets | $\log\dfrac{\eta}{1-\eta}$ | $H_2(\eta)$ bits |
| $e^{-z}$ | AdaBoost ([5.3](lessons/05-03-boosting.md)) | $\tfrac12\log\dfrac{\eta}{1-\eta}$ | $2\sqrt{\eta(1-\eta)}$ |
| $\max(0,1-z)$ | the SVM ([4.4](lessons/04-04-support-vector-machines.md)) | $\operatorname{sign}(2\eta-1)$ | $2\min(\eta,1-\eta)$ |

**Logistic and exponential recover the full conditional probability; hinge recovers
only which side of a half it is on.** At $\eta = 0.9$: the logistic score is
$\log 9 = 2.197$ and $\sigma(2.197) = 0.9$ exactly; the exponential score is
$\tfrac12\log 9 = 1.099$ and $\sigma(2\times1.099) = 0.9$ — **the factor of $\tfrac12$
is the whole reason boosting scores are half log-odds**; the hinge score is $+1$ and
$\sigma(1) = 0.731$, a number with no relationship to $0.9$. Change $\eta$ to $0.99$
and the hinge minimizer is still $+1$.

**Why it matters, in one example.** A fraud model where a miss costs 20 times a false
alarm should flag when $(1-\eta) < 20\eta$, i.e. $\eta > 1/21 \approx 0.0476$, which
on the logistic score is the cutoff $\log(1/20) = -2.996$ — **threshold and ship, no
refitting.** With an SVM the quantity you need is not in the output at any sample
size. Platt scaling is a second estimation problem, and it appears to work only
because a finite-sample regularized SVM has not reached its population minimizer:
**the more data you collect, the worse the calibration story gets**, which is the
tell.

Note the surrogates are **not ordered among themselves**: at $z = 0.5$ the hinge is
$0.5$ and the exponential $0.607$; at $z = 2$ the hinge is $0$ and the logistic
$0.183$. "Upper-bounds the 0-1 loss" is a much weaker relation than a ranking.

*From* [2.2](lessons/02-02-logistic-regression-and-classification.md), [4.4](lessons/04-04-support-vector-machines.md), [5.3](lessons/05-03-boosting.md)

### Ensemble arithmetic

**Bagging is the bootstrap plug-in estimate of the ideal aggregate.** With
$\bar f(x) = \mathbb E_{S\sim\mathcal D^n}[\hat f_S(x)]$:

> **Aggregation identity.** For any fixed $x$ and $y$,
> $$\mathbb E_S\bigl[(y - \hat f_S(x))^2\bigr] = \bigl(y - \bar f(x)\bigr)^2 + \operatorname{Var}_S\bigl(\hat f_S(x)\bigr).$$
> **Averaging cannot touch bias.** $\bar f$ is deterministic, so
> $\mathbb E[\bar f] = \bar f = \mathbb E_S[\hat f_S]$; subtract $f(x)$.

The identity is Jensen for the convex map $u\mapsto(y-u)^2$ with the gap named, so
**the ideal aggregate is never worse, and is better by exactly the variance.** Worked:
three equally likely fits predicting $2,5,8$ against a truth of $4$ give expected
error $7$, splitting as bias $1$ plus variance $6$ — a factor of seven, and still
wrong by 1. **This card owns the one-line proof that
[`machine-learning` 2.6](../machine-learning/lessons/02-06-bagging-and-random-forests.md)
asserts without proving.**

**With a non-convex loss the protection is gone.** Majority vote of $B$ classifiers
each correct with probability $p$ is right with probability
$\Pr[\mathrm{Bin}(B,p) > B/2]$:

| $B$ | 1 | 5 | 25 | 101 |
|---|---|---|---|---|
| $p = 0.6$ | 0.600 | 0.683 | 0.846 | 0.979 |
| $p = 0.4$ | 0.400 | 0.317 | 0.154 | **0.021** |

**Voting is a polarizer, not an improver**: where the base learner beats a coin it is
driven toward certainty of being right, and where it is worse than a coin it is
driven toward certainty of being **wrong**. Bagging a classifier helps when the
$p > 1/2$ region carries most of the mass — a real assumption, not a theorem.

**Boosting is greedy stagewise fitting of $e^{-yF}$, and the update is a
consequence.** Because $e^{-y_i(F_{t-1}+\alpha h)} = e^{-y_iF_{t-1}}\cdot e^{-\alpha y_ih(x_i)}$,
the exponential **factorises history into a multiplicative weight**; the round-$t$
problem is ordinary weighted fitting, the choice of $h$ comes out independent of
$\alpha$, and

$$\alpha_t = \tfrac12\ln\frac{1-\epsilon_t}{\epsilon_t}, \qquad \min_\alpha\phi(\alpha) = 2\sqrt{\epsilon_t(1-\epsilon_t)} \le 1, \ \text{ with equality iff } \epsilon_t = \tfrac12.$$

$$\hat R_S(H) \;\le\; \prod_{t=1}^{T}2\sqrt{\epsilon_t(1-\epsilon_t)} \;=\; \prod_{t=1}^{T}\sqrt{1-4\gamma_t^2} \;\le\; \exp\Bigl(-2\sum_{t=1}^{T}\gamma_t^2\Bigr).$$

**If every round beats chance by a fixed margin, training error dies exponentially** —
which is Kearns and Valiant's weak-implies-strong question answered constructively,
since $T \ge \ln n/(2\gamma^2)$ drives the bound below $1/n$ and hence to zero.
Numbers at $\epsilon_t = 0.45$ (edge $0.05$): per-round factor $0.994987$, and
$T = 917$ certifies training error below $0.01$ against $922$ for the relaxed form —
a half-percent penalty for the friendlier expression. At $\epsilon_t = 0.40$ it is
$T = 226$: **the round count scales as $1/\gamma^2$, so edge is worth far more than
rounds.** Note $\alpha_t < 0$ when $\epsilon_t > \tfrac12$, which votes the learner
backwards and is correct, and $\alpha_t = +\infty$ when $\epsilon_t = 0$.

| | **bagging** ([5.2](lessons/05-02-bagging-and-random-forests.md)) | **boosting** ([5.3](lessons/05-03-boosting.md)) |
|---|---|---|
| attacks | **variance** | **bias** |
| wants a base learner that is | **strong** and unstable (deep unpruned trees) | **weak** and low-capacity (stumps) |
| members fitted | independently, in parallel | sequentially, never revisited |
| label noise | **diluted** — one bad row perturbs each fit by $O(1/n)$ and the average does not compound it | **amplified** — a permanently missed point's loss grows by $e^{\alpha_t}$ per round, and its *share* by $1/(2\epsilon_t)$ |

**How fast noise takes over.** With 5 percent of $n = 500$ labels flipped and
$\epsilon_t = 0.45$, the mislabelled points' share of the exponential loss grows by
$10/9$ per round: it reaches 10 percent by round **7** and 45 percent by round **21** —
against the $917$ rounds the training-error certificate needs. **By 2 percent of the
way to the guarantee, nearly half the objective is being spent on data that is simply
wrong.** The culprit is that $e^{-z}$ is **unbounded** as $z\to-\infty$; logistic loss
grows only linearly there, so a hopeless point's influence saturates instead of
compounding — which is exactly the LogitBoost fix.

**Why more rounds keep helping — and how far that story goes.** The ensemble's VC
dimension grows roughly like $T\cdot d_{\mathrm{VC}}(\mathcal H)$, so the VC bound gets
strictly **worse** every round, while a real run (300 points in $\mathbb R^{10}$,
stumps) hits zero training error at round 282 with test error $0.240$ and keeps
falling to $0.219$ by round 1200. The accepted explanation is the **normalised
margin** $\operatorname{marg}(x_i,y_i) = y_i\sum_t\alpha_th_t(x_i)/\sum_t\alpha_t \in [-1,1]$,
whose bound has no $T$ in it: once training error is zero the exponential loss is
still positive and still falling, which it can only achieve by pushing margins up.

**Do not state the margin story as settled.** Breiman built an algorithm maximising
the *minimum* margin more aggressively and it generalized **worse**, so the minimum
margin is not the right summary; which functional of the margin distribution is
remains open. In the run above the minimum normalised margin does rise (from
$5\times10^{-5}$ at round 282 to $0.0225$ at round 1200), but the **median margin
falls**, from $0.060$ to $0.044$, across four seeds — **the distribution does not
simply translate rightward.**

*From* [5.2](lessons/05-02-bagging-and-random-forests.md), [5.3](lessons/05-03-boosting.md); the reweighting trace and the OOB estimate are **ceded to** [`machine-learning` 2.6](../machine-learning/lessons/02-06-bagging-and-random-forests.md)–[2.7](../machine-learning/lessons/02-07-boosting.md)

### Why no class-only bound can explain deep learning

> **Proposition.** Fix $\mathcal H$, $n$, $\delta < 1/2$ and suppose
> $B(\mathcal H,n,\delta)$ satisfies, for **every** $\mathcal D$, with probability at
> least $1-\delta$, $R(h) \le \hat R_S(h) + B(\mathcal H,n,\delta)$ for all
> $h\in\mathcal H$. Let $\mathcal D_{\mathrm{rand}}$ put a uniform label from $K$
> classes on each $x$, independently of $x$. If with probability greater than $\delta$
> some $h\in\mathcal H$ interpolates $S \sim \mathcal D_{\mathrm{rand}}^n$, then
> $$B(\mathcal H,n,\delta) \;\ge\; 1 - \tfrac1K.$$

*Proof.* Under $\mathcal D_{\mathrm{rand}}$ every predictor has risk exactly
$1-1/K$. The two events intersect; on the intersection $1-1/K = R(h) \le 0 + B$.
$\blacksquare$

With $K = 10$ that is $B \ge 0.9$, for a risk that never exceeds 1 — **and $B$ carries
no $\mathcal D$, so it is also the bound you are handed on real labels**, where the
observed gap is about $0.1$. The decisive experiment behind it is one sentence:
replace every label with a uniform random class, retrain, and the same architecture
reaches **zero training error again.** The class, $n$ and the algorithm are literally
identical across the two runs, so any bound built from $\mathcal H$, $n$ and $\delta$
alone returns the same number in both.

At $n = 50{,}000$, $\delta = 0.05$: the Rademacher route gives
$0 + 2 + 3\sqrt{\ln40/10^5} = 2.018$ (because zero error on noise pins
$\hat{\mathfrak R}_S = 1$), and the VC route asks for $n \ge 9.7\times10^{10}$. Every
certificate is weaker than the free statement $R \le 1$, and **they fail for the same
reason: all three are suprema over the class.**

**What the experiment does and does not refute.** It refutes **nothing** in
[3.4](lessons/03-04-vc-bounds-and-sample-complexity.md): no bound is violated, because
on the noise run the capacity term is enormous. The quantifier that survives is *"for
every distribution $\mathcal D$"* — and the experiment goes looking for the
adversarial $\mathcal D$ that quantifier promises to cover and finds it by shuffling
labels, so it **instantiates the fundamental theorem's necessity direction** rather
than contradicting it. What is refuted is an assumption nobody proved: that a bound of
the form $\hat R_S(h) + B(\mathcal H,n,\delta)$ could *explain* the observed
performance. **Any correct explanation must mention the distribution, the algorithm,
or both.**

**The candidates, honestly labelled.**

| candidate | what is actually proved | status |
|---|---|---|
| **implicit regularization** — the optimiser restricts the reachable set | the [minimum-norm](#minimum-norm-interpolation) result; and for linear predictors on separable data, gradient descent with logistic loss converges *in direction* to the max-margin separator | **theorem for linear models**, conjecture for networks — and "GD minimises *some* norm" is provably false in matrix factorization |
| **norm- and margin-based bounds** on the *learned* weights rather than the class | spectral-norm and margin bounds exist; PAC-Bayes and compression bounds driven to non-vacuous values on small real problems | **partial** — true theorems, still loose; large studies find many such measures correlate poorly with real generalization |
| **data- and algorithm-dependent capacity** — Rademacher on your distribution, [stability](#stability), PAC-Bayes | "benign overfitting" is characterized exactly for **linear** regression via the effective ranks of the covariance | **partial**, and there are constructed settings where *every* uniform-convergence bound is vacuous while the learner generalizes fine |

Each row is real progress on a special case; **none of them, today, explains a trained
network.** The third row's last clause is the sharpest warning available: the escape
route of computing a better capacity term may be blocked in principle, not merely
unfinished.

*From* [5.5](lessons/05-05-why-does-deep-learning-generalize.md); the escape routes were named as [3.4](lessons/03-04-vc-bounds-and-sample-complexity.md)'s P3

### The unsupervised objectives, in one place

| method | objective | what its optimum is forced to look like |
|---|---|---|
| **PCA** ([6.1](lessons/06-01-principal-component-analysis.md)) | $\max_{U^\top U = I_k}\operatorname{tr}(U^\top SU)$, equivalently $\min$ mean squared reconstruction error | a **linear** subspace, scored by **second moments** in your units |
| **k-means** ([6.2](lessons/06-02-clustering-and-k-means.md)) | $\min_C W(C) = \sum_j\lvert C_j\rvert s_j^2$ | **convex Voronoi cells** with flat walls, biased toward **equal sizes** |
| **GMM by EM** ([6.3](lessons/06-03-mixture-models-and-em.md)) | $\max_\theta\log p(x\mid\theta)$ via coordinate ascent on the ELBO | a stationary point, in an orbit of $K!$, of an objective with supremum $+\infty$ |
| **KDE** ([6.4](lessons/06-04-density-estimation.md)) | no objective — $h$ chosen by cross-validation, because likelihood drives $h\to0$ | a sum of $n$ fixed bumps; effective sample size $nh^d$ |

**Read each optimum as a definition, not a discovery.** In supervised learning a label
adjudicates; here nothing outside the objective can say whether an answer is right, so
**choosing k-means is committing to a claim about what a group looks like**, and the
claim has provable consequences. PCA on points uniform on a circle correctly reports
50 percent explained and correctly reports there is nothing to compress *within linear
codes* — while one number, the angle, reconstructs every point exactly. **A guarantee
is sharp inside its hypothesis and silent outside it.**

**What would change each assumption.** Replace the metric (an $\ell_1$ cost gives
$k$-medians and medians); apply a kernel so the flat walls live in feature space and
bend downstairs; or fit a covariance per component, which is a mixture. Each changes
the **definition of a cluster**, which is the only thing that could have helped.

*From* [6.1](lessons/06-01-principal-component-analysis.md), [6.2](lessons/06-02-clustering-and-k-means.md), [6.3](lessons/06-03-mixture-models-and-em.md), [6.4](lessons/06-04-density-estimation.md)

### Rates, collected

| setting | rate | source |
|---|---|---|
| parametric estimation, correctly specified | $1/n$ | [2.1](lessons/02-01-linear-regression-as-learning.md), [6.4](lessons/06-04-density-estimation.md) |
| optimism of a linear fit | $2p\sigma^2/n$, or $2\sigma^2\mathrm{df}(\lambda)/n$ | [2.1](lessons/02-01-linear-regression-as-learning.md), [2.3](lessons/02-03-ridge-regression-and-shrinkage.md) |
| sparse linear, $s$ nonzeros | $s\log p/n$ | [2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md) |
| realizable PAC | $n \sim (d_{\mathrm{VC}} + \ln(1/\delta))/\epsilon$ | [3.4](lessons/03-04-vc-bounds-and-sample-complexity.md) |
| agnostic PAC | $n \sim (d_{\mathrm{VC}} + \ln(1/\delta))/\epsilon^2$ — **the central limit theorem, not a loose proof** | [3.4](lessons/03-04-vc-bounds-and-sample-complexity.md) |
| uniform-convergence band | $\sqrt{d_{\mathrm{VC}}\ln n / n}$ | [3.3](lessons/03-03-shattering-and-the-vc-dimension.md), [3.4](lessons/03-04-vc-bounds-and-sample-complexity.md) |
| margin bound | $2\sqrt{(R^2/\gamma^2)/n}$ | [4.3](lessons/04-03-maximum-margin-classifiers.md) |
| boosting training error | $\exp(-2\sum_t\gamma_t^2)$; $T \sim \ln(1/\text{target})/(2\gamma^2)$ | [5.3](lessons/05-03-boosting.md) |
| $k$-NN regression on a grid | $n^{-4/5}$, with $k^\star$ **growing** as data arrives | [1.2](lessons/01-02-the-bias-variance-decomposition.md) |
| kernel density estimation in $\mathbb R^d$ | $n^{-4/(4+d)}$, with $h^\star \propto n^{-1/(4+d)}$; **minimax-optimal** | [6.4](lessons/06-04-density-estimation.md) |
| validation standard error | $\sqrt{R(1-R)/m}$ — the same $1/\epsilon^2$ with the supremum removed | [1.3](lessons/01-03-overfitting-and-train-validation-test.md) |

**The one to internalise:** $\delta$ costs $\ln(1/\delta)$ and is nearly free;
capacity costs linearly; **accuracy costs quadratically**, and dimension costs
*exponentially* through $4/(4+d)$.

## Assumed, not taught here

This is a Tier 2 course sitting on [`probability-theory`](../probability-theory/syllabus.md),
[`linalg-refresher`](../linalg-refresher/syllabus.md) and
[`prob-stat-refresher`](../prob-stat-refresher/syllabus.md), and it is the **theory**
half of a deliberate split with [`machine-learning`](../machine-learning/syllabus.md),
which owns **method mechanics, optimization practice and evaluation**. `machine-learning`
was built first, so **every ceded row below points at a lesson file that exists** —
follow the link rather than expecting a derivation here. Everything ceded is still
*used* freely; it is cited rather than re-derived.

### Ceded to `machine-learning` (the mechanics half)

| Fact | Where it's taught |
|---|---|
| The **perceptron** update, linear separability, and the mistake bound | [`machine-learning` 2.1](../machine-learning/lessons/02-01-the-perceptron-and-linear-separability.md) — used in [3.3](lessons/03-03-shattering-and-the-vc-dimension.md) as a class to measure, never as an algorithm to run |
| The **SVM primal to dual by KKT**, the three-way sort, support vectors, the box $0\le\alpha_i\le C$ | [`machine-learning` 2.2](../machine-learning/lessons/02-02-maximum-margin-classifiers.md), [2.3](../machine-learning/lessons/02-03-soft-margins-and-the-svm-dual.md) — [4.3](lessons/04-03-maximum-margin-classifiers.md) and [4.4](lessons/04-04-support-vector-machines.md) assume all of it |
| The **kernel trick computationally**, the Gram-matrix cost table, RBF bandwidth failure modes | [`machine-learning` 2.4](../machine-learning/lessons/02-04-the-kernel-trick.md) — [4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md) adds the admissibility test, [4.2](lessons/04-02-rkhs-and-the-representer-theorem.md) the licence |
| **Tree growing**, the split search, impurity arithmetic, information gain, pruning mechanics | [`machine-learning` 2.5](../machine-learning/lessons/02-05-decision-trees.md) — [5.1](lessons/05-01-decision-trees.md) runs no split search |
| **Bagging mechanics**, out-of-bag error, feature subsampling, the $\rho$ accounting | [`machine-learning` 2.6](../machine-learning/lessons/02-06-bagging-and-random-forests.md) — [5.2](lessons/05-02-bagging-and-random-forests.md) supplies the *reason* averaging is legitimate. **Note the reverse direction:** that course *asserts* "averaging cannot touch bias" without proving it; the one-line proof is [5.2](lessons/05-02-bagging-and-random-forests.md)'s and is on this card |
| **AdaBoost's reweighting trace**, the $\alpha_t$ formula, gradient boosting in practice | [`machine-learning` 2.7](../machine-learning/lessons/02-07-boosting.md) — [5.3](lessons/05-03-boosting.md) derives the update from the loss instead |
| **PCA by eigendecomposition or SVD**, its cost, the units demonstration, "top components are not useful components" | [`machine-learning` 3.2](../machine-learning/lessons/03-02-principal-component-analysis.md) — [6.1](lessons/06-01-principal-component-analysis.md) proves what the subspace optimizes |
| **Lloyd's algorithm**, its monotone-descent proof, initialization and k-means++, the elbow heuristic | [`machine-learning` 3.3](../machine-learning/lessons/03-03-k-means-clustering.md) — [6.2](lessons/06-02-clustering-and-k-means.md) never runs it |
| **Hierarchical clustering** and linkage, as the alternative when "tight around a centre" is the wrong notion | [`machine-learning` 3.4](../machine-learning/lessons/03-04-hierarchical-clustering.md) |
| The mixture **likelihood degeneracy** — a component collapsing onto one point | [`machine-learning` 3.5](../machine-learning/lessons/03-05-gaussian-mixture-models.md) — used in [6.3](lessons/06-03-mixture-models-and-em.md) and [6.4](lessons/06-04-density-estimation.md) |
| The **E- and M-steps**, EM's **monotonicity proof**, and **k-means as the hard-assignment limit** of EM | [`machine-learning` 3.6](../machine-learning/lessons/03-06-the-em-algorithm.md) — [6.3](lessons/06-03-mixture-models-and-em.md) takes all three as given and owns the variational view; **boss problem 6 takes the hard-limit result as given** |
| **$k$-fold CV mechanics**, nested CV, the one-standard-error rule, and bandwidth selection by cross-validation | [`machine-learning` 4.1](../machine-learning/lessons/04-01-model-selection-and-cross-validation.md) — [1.3](lessons/01-03-overfitting-and-train-validation-test.md) defines the estimand, [6.4](lessons/06-04-density-estimation.md) needs the machinery for $h$ |
| **Classification metrics** — confusion matrix, precision, recall, ROC, AUC, class imbalance | [`machine-learning` 4.2](../machine-learning/lessons/04-02-classification-metrics.md) — [2.2](lessons/02-02-logistic-regression-and-classification.md) says which models are *entitled* to move the operating point |
| **Learning curves** and diagnosing models in practice | [`machine-learning` 4.3](../machine-learning/lessons/04-03-diagnosing-models-in-practice.md) |
| **Gradient descent as practice** — choosing $\eta$, diagnosing divergence, mini-batching | [`machine-learning` 1.6](../machine-learning/lessons/01-06-gradient-descent-for-learning.md) — [2.6](lessons/02-06-gradient-descent-the-workhorse.md) owns only what the gradient is an *estimate of* |
| The **forward and backward pass by hand** on a small network | [`machine-learning` 4.4](../machine-learning/lessons/04-04-a-taste-of-neural-networks.md) — [5.4](lessons/05-04-neural-networks-and-backpropagation.md) touches no weight update |
| The **ridge closed form** and its SVD shrinkage picture; the **soft-threshold derivation** | [`machine-learning` 1.4](../machine-learning/lessons/01-04-regularization-ridge-and-lasso.md) — stated once in [2.3](lessons/02-03-ridge-regression-and-shrinkage.md)/[2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md), not re-derived. **Mind the threshold convention** |
| The **normal equations**, the projection picture, $R^2$, the $O(np^2)$ cost | [`machine-learning` 1.3](../machine-learning/lessons/01-03-linear-regression-and-least-squares.md) |
| The **logistic gradient** $X^\top(p-y)$, odds-ratio reading, a numeric fitting trace | [`machine-learning` 1.5](../machine-learning/lessons/01-05-logistic-regression-and-classification.md) |
| Turning a **messy real question into the ERM setup** | [`machine-learning` 1.1](../machine-learning/lessons/01-01-the-learning-problem.md) |
| The **bias–variance decomposition as a working diagnostic** across every method | [`machine-learning` 1.2](../machine-learning/lessons/01-02-generalization-and-the-bias-variance-tradeoff.md) — which cites the proof to [1.2](lessons/01-02-the-bias-variance-decomposition.md) here |

### Ceded to `convex-optimization`

| Fact | Where it's taught |
|---|---|
| The **geometry of why the $\ell_1$ ball produces sparse solutions** — the diamond's corners | [`convex-optimization` 5.1](../convex-optimization/lessons/05-01-least-squares-lasso.md) — [2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md) cites it and adds the *statistical* reading |
| **KKT conditions**, including for a nonsmooth objective | [`convex-optimization` 3.3](../convex-optimization/lessons/03-03-kkt-conditions.md) — the lasso certificate and the SVM subgradient are both instances |
| The **SVM as a quadratic program**, and its dual derived properly | [`convex-optimization` 5.2](../convex-optimization/lessons/05-02-support-vector-machines.md) |
| **Convergence rates for first-order methods** — smoothness, strong convexity, $O(1/t)$ and linear rates | [`convex-optimization` 4.1](../convex-optimization/lessons/04-01-first-order-methods.md) — this is the term compute buys down in [2.6](lessons/02-06-gradient-descent-the-workhorse.md)'s three-part identity |
| **Convex functions** and why a convex composed with an affine map is convex | [`convex-optimization` 1.3](../convex-optimization/lessons/01-03-convex-functions-epigraph.md) — used in [2.2](lessons/02-02-logistic-regression-and-classification.md) |
| The **Lagrangian dual**, as the other "lift and alternate" construction | [`convex-optimization` 3.1](../convex-optimization/lessons/03-01-lagrangian-dual-function.md) — compared with EM in [6.3](lessons/06-03-mixture-models-and-em.md) |

### Ceded to the prerequisites

| Fact | Where it's taught |
|---|---|
| **Expectation and variance**, and the algebra of both | [`prob-stat-refresher` 2.1](../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md) — Fact 1, the $k$-NN variance, the trace lemma |
| **Covariance and the variance of a sum** | [`prob-stat-refresher` 3.1](../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md) — the mini-batch corollary $\operatorname{Cov} = \Sigma/b$ |
| The **law of large numbers** | [`prob-stat-refresher` 3.2](../prob-stat-refresher/lessons/03-02-sums-and-law-of-large-numbers.md) — the licence for measuring anything on finite data, and for the bootstrap plug-in |
| The **central limit theorem** | [`prob-stat-refresher` 3.3](../prob-stat-refresher/lessons/03-03-central-limit-theorem.md) — the $\pm2\operatorname{se}$ interval, and the reason agnostic PAC is $1/\epsilon^2$ |
| **Maximum likelihood estimation** | [`prob-stat-refresher` 4.1](../prob-stat-refresher/lessons/04-01-estimation-and-mle.md) — logistic regression is MLE; MAP is MLE with a tax |
| **Confidence intervals**, and that coverage is over the sample | [`prob-stat-refresher` 4.2](../prob-stat-refresher/lessons/04-02-confidence-intervals.md) — the same "over the sample, not over the parameter" reading as PAC's $\delta$ |
| **Bayes' rule** and conditional probability | [`prob-stat-refresher` 1.2](../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md) — the whole of [2.5](lessons/02-05-regularization-as-a-bayesian-prior.md) |
| The **Gaussian density** and its parameters | [`prob-stat-refresher` 2.3](../prob-stat-refresher/lessons/02-03-continuous-distributions.md) |
| **Tail bounds from moments** (the Markov/Chebyshev/$L^p$ technique behind Hoeffding) | [`probability-theory` 2.5](../probability-theory/lessons/02-05-lp-spaces-inequalities.md) |
| **Conditional expectation as an $L^2$ projection** — why the bias–variance cross term vanishes | [`probability-theory` 5.1](../probability-theory/lessons/05-01-conditional-expectation.md) |
| **Orthogonal projection and least squares** as geometry ($H$ symmetric, idempotent, $HX = X$) | [`linalg-refresher` 4.2](../linalg-refresher/lessons/04-02-projection-least-squares.md) |
| **Inner products, orthogonality, Cauchy–Schwarz** | [`linalg-refresher` 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) |
| The **spectral theorem**, quadratic forms and the Rayleigh quotient | [`linalg-refresher` 5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md) |
| The **SVD** $X = U\Sigma V^\top$, and the pseudoinverse | [`linalg-refresher` 5.2](../linalg-refresher/lessons/05-02-svd.md) |
| **Entropy** as a measure of uncertainty, and the impurity criteria's information content | [`information-theory` 1.1](../information-theory/lessons/01-01-entropy-uncertainty-surprise.md) — the minimum logistic risk *is* $H(y\mid x)$ in bits |
| **KL divergence**, Gibbs' inequality and Jensen | [`information-theory` 1.4](../information-theory/lessons/01-04-relative-entropy-kl-jensen.md) — the exact slack in the ELBO |
| **NP-hardness** and what it means for a defined objective | [`algorithms` 4.1](../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md), and what one does about it, [4.3](../algorithms/lessons/04-03-approximation-algorithms.md) |
| The **greedy discipline** — solve one piece, freeze it, never revisit | [`algorithms` 2.1](../algorithms/lessons/02-01-the-greedy-method-and-interval-scheduling.md) — tree growing and forward-stagewise boosting are both instances |
| **Asymptotic notation** | [`algorithms` 1.1](../algorithms/lessons/01-01-asymptotic-notation.md) |
| The **convex-optimization toolkit as economics uses it** (Lagrangians, KKT on a consumer problem) | [`grad-micro`](../grad-micro/syllabus.md) — the SVM is a constrained QP in the same sense |

### Deliberately deferred to other courses

- **Identification, causal parameters and valid standard errors** go to
  [`econometrics`](../econometrics/syllabus.md). Both courses fit the same $X$ and $y$
  and ask opposite questions: there the coefficient is the estimand and bias is the
  enemy; here the target is out-of-sample loss and bias is something you will happily
  buy. The clean case where the two give contradictory advice and are both right is
  [2.1](lessons/02-01-linear-regression-as-learning.md)'s feature with a genuinely
  nonzero $\beta_j$ that you should still omit because $\beta_j^2 < \sigma^2/n$.
  Econometrics also owns the **credible-versus-confidence** distinction that
  [2.5](lessons/02-05-regularization-as-a-bayesian-prior.md) fences, and **inference
  after selection**, which is what makes "the lasso selected these eight" not a
  finding.
- **Architectures, initialization and training dynamics** go to
  [`deep-learning`](../deep-learning/syllabus.md).
  [5.4](lessons/05-04-neural-networks-and-backpropagation.md) treats a network only as
  a hypothesis class and hands off.
- **Reward-based learning** — policies, exploration, anything with a reward signal —
  goes to [`reinforcement-learning`](../reinforcement-learning/syllabus.md); this
  course only ever learns from a fixed labelled or unlabelled dataset. (The
  "unbiased but high-variance estimate of a thing you cannot compute" pattern of
  [2.6](lessons/02-06-gradient-descent-the-workhorse.md) is the same one behind
  stochastic approximation there.)
- **Production and systems concerns** live nowhere in this library, by choice.

## Pitfalls

### Bounds that are correct but vacuous

- **Looseness and vacuity are different failures, and only one is fatal.** A
  factor-of-14 bound still proves learnability and still ranks classes correctly; a
  bound of the form "$R \le \hat R_S + 2.35$" for 0-1 loss proves nothing, because
  $R \le 1$ was free. **Check which one you have before deciding whether the theory
  told you anything.** *([3.4](lessons/03-04-vc-bounds-and-sample-complexity.md), [3.5](lessons/03-05-rademacher-complexity.md))*
- **A vacuous bound is an absence of a guarantee, not a prediction of failure.** These
  bounds are *sufficient*, never necessary: half-planes need 52 points in practice and
  723 by the theorem, and an RBF SVM works on a few hundred points while
  $d_{\mathrm{VC}} = \infty$. Concluding "the theory is useless here" skips the useful
  step, which is diagnosing **which hypothesis failed** — usually "this is not the
  class I am searching." *([3.4](lessons/03-04-vc-bounds-and-sample-complexity.md), [4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md), [5.4](lessons/05-04-neural-networks-and-backpropagation.md))*
- **A VC bound is not a sample-size calculator.** It survives constants as an
  existence proof, a ranking and a shape. "My class has VC dimension 3, therefore I
  need 723 points" is not a conclusion it supports; hold out data and measure.
  *([3.4](lessons/03-04-vc-bounds-and-sample-complexity.md), [4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md))*
- **For an unpruned tree the bound is not loose, it is unsatisfiable.** With $L = n$
  leaves the realizable requirement needs $\frac4\epsilon\ln\frac{12}{\epsilon} < 1$,
  whose minimum over $\epsilon\in(0,1]$ is $4\ln12 \approx 9.94$. **No $\epsilon$ and
  no $\delta$ work.** *([5.1](lessons/05-01-decision-trees.md))*
- **The network bound is tight, so the vacuity is the class's fault, not the proof's.**
  $O(WL\log W)$ has a matching lower bound of order $WL\log(W/L)$; there is no sharper
  version waiting to be found. *([5.4](lessons/05-04-neural-networks-and-backpropagation.md))*
- **The union bound is safe under any dependence and loose for exactly that reason.**
  A thousand near-duplicate hypotheses that no sample can tell apart still cost
  $\ln 1001$; at $M = 74$ the bound exceeds 1 while the truth is a single hypothesis's
  worth of risk. **Capacity should count behaviours on the sample, not hypotheses.**
  *([3.2](lessons/03-02-finite-classes-and-uniform-convergence.md))*
- **Massart stops decaying once the class grows with $n$.** For all functions on $n$
  points, $\sqrt{2n\ln2/n} = 1.177 > 1$ at every sample size. *([3.5](lessons/03-05-rademacher-complexity.md))*
- **No class-only bound can explain a model that fits noise.** If $\mathcal H$
  interpolates random labels then any $B(\mathcal H,n,\delta)$ is at least $1-1/K$ —
  and it is the same $B$ you are handed on real data. *([5.5](lessons/05-05-why-does-deep-learning-generalize.md))*

### Quantifier slips

- **$\delta$ is not the probability your model gets a test point wrong** — that is
  $\epsilon$. They live over different experiments: $\epsilon$ over the draw of a
  future $x$ given the hypothesis, $\delta$ over the draw of the training set, before
  the hypothesis existed. "95 percent accurate with 95 percent confidence" is two
  claims, not one. *([3.1](lessons/03-01-the-pac-framework.md))*
- **A PAC theorem says nothing about the model on your laptop.** It is a statement
  about the *procedure* and the sample size, made before the data arrives. Once $S$ is
  drawn you are in the good $1-\delta$ or the bad $\delta$ and nothing in the bound
  says which. *([3.1](lessons/03-01-the-pac-framework.md))*
- **"For every $\mathcal D$" is not a technicality you may drop for a tighter bound.**
  Drop it and the definition collapses: the learner that ignores its sample and always
  answers "negative" is perfect under one distribution and stuck at risk $1/2$ forever
  under another. *"Works on the data I have seen" is compatible with learning nothing
  at all.* Both things are true at once — the quantifier is why the bound is a
  guarantee, and why it is so loose. *([3.1](lessons/03-01-the-pac-framework.md))*
- **The order is "choose $\mathcal H$, then let the adversary choose $\mathcal D$."**
  That game is winnable; reversing it is not, which is the entire content of no free
  lunch. *([1.4](lessons/01-04-no-free-lunch-and-inductive-bias.md), [3.1](lessons/03-01-the-pac-framework.md))*
- **No free lunch does not say all learners are equally good, or that data is
  useless.** It says they tie *when averaged over all $2^{\lvert\mathcal X\rvert}$
  labellings with equal weight* — a measure no real problem is drawn from — and its
  hypothesis is $n \le \lvert\mathcal X\rvert/2$. It forbids a learner best on *every*
  problem; it says nothing against one best on yours. *([1.4](lessons/01-04-no-free-lunch-and-inductive-bias.md))*
- **The margin bound needs $\gamma$ fixed before you see $S$.** Fitting, measuring
  whatever $\gamma$ came out, and plugging it in is [1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md)'s
  selection effect again; the repair is a union bound over a grid of candidate
  margins, costing $\sqrt{\ln\ln(1/\gamma)/n}$ — small, not zero. *([4.3](lessons/04-03-maximum-margin-classifiers.md))*
- **Calibration is asymptotic and unrestricted.** It concerns the minimizer over *all
  measurable* $f$ with infinite data; inside a restricted class the surrogate
  minimizer can have strictly worse 0-1 error than the 0-1 minimizer in the same
  class. *([2.2](lessons/02-02-logistic-regression-and-classification.md), [4.4](lessons/04-04-support-vector-machines.md))*
- **Universal approximation is an existence theorem about weights**, silent on width,
  on reachability and on data — three silences landing on three different error terms.
  *([5.4](lessons/05-04-neural-networks-and-backpropagation.md))*

### Shattering, and what capacity is not

- **Shattering asks for *some* set of size $n$, not *every* set.** Half-planes fail on
  every collinear triple and still have $d_{\mathrm{VC}} = 3$, because the growth
  function is a **maximum** over configurations. Conversely, when proving an *upper*
  bound one convenient configuration proves nothing — you must handle all of them.
  *([3.3](lessons/03-03-shattering-and-the-vc-dimension.md))*
- **VC dimension is not a parameter count, in either direction.** The one-parameter
  class $\mathbf 1[\sin(\theta x)>0]$ has infinite VC dimension; margin-constrained
  linear classes in infinite dimensions have finite capacity. That affine separators
  in $\mathbb R^d$ give $d+1$ is a coincidence of a rigid class.
  *([3.3](lessons/03-03-shattering-and-the-vc-dimension.md), [4.3](lessons/04-03-maximum-margin-classifiers.md), [5.4](lessons/05-04-neural-networks-and-backpropagation.md))*
- **"VC dimension grows linearly in the leaf count" is the lower bound only.** The
  construction gives $d_{\mathrm{VC}}(\mathcal T_L) \ge L$; the counting upper bound is
  $O(L\log dL)$, and at $L = 8$, $d = 10$ the honest range is $8 \le d_{\mathrm{VC}} \le 93$.
  *([5.1](lessons/05-01-decision-trees.md))*
- **Infinite VC dimension does not mean "hard"; it means not learnable at all.** The
  fundamental theorem is an equivalence, so for every $n$ there is a distribution
  defeating your learner. *([3.4](lessons/03-04-vc-bounds-and-sample-complexity.md))*
- **A bigger feature space is a trade, not a free win.** It strictly lowers
  approximation error and strictly raises the estimation error the sample must pay
  for; the exchange rate is the VC bound. *([4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md))*
- **$\hat{\mathfrak R}_S$ is a property of the class and the sample, and the algorithm
  never appears in its definition** — which is why it cannot resolve the deep-learning
  puzzle alone: the class is identical on real and random labels. And the bound
  charges the **loss class** $\mathcal F$, not $\mathcal H$; for 0-1 loss on $\pm1$
  hypotheses they differ by exactly a factor of two, so $2\hat{\mathfrak R}_S(\mathcal F)$
  is $\hat{\mathfrak R}_S(\mathcal H)$ with **no factor at all**. Dropping or
  double-counting that 2 is the commonest arithmetic slip in the subject.
  *([3.5](lessons/03-05-rademacher-complexity.md), [5.5](lessons/05-05-why-does-deep-learning-generalize.md))*
- **A negative Rademacher *column* is fine; a negative *average* is a computational
  error.** Individual coin patterns can score below zero when $\mathcal H$ is not
  closed under negation; the expectation cannot. *([3.5](lessons/03-05-rademacher-complexity.md))*

### Training-set numbers estimate nothing once you have selected on them

- **Low empirical risk is not low risk, and the optimism has no fixed size.** Take a
  million rules that are all pure coin flips and score them on 100 points: the best
  reports $0.31$. Nothing was learned; the drop from $0.50$ is the arithmetic of
  taking a minimum over noise. **A reported training error, on its own, is not
  evidence of anything.** *([1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md))*
- **Unbiasedness is a statement about an average over repetitions, not about your one
  sample.** The worked two-point example is unbiased for $0.30$ and **never equal to
  $0.30$ on any sample**; at $R = 0.1$ and $m = 100$, "unbiased" coexists happily with
  "off by 6 points." You need unbiasedness *and* concentration.
  *([1.1](lessons/01-01-what-is-learning-loss-risk-and-erm.md), [1.3](lessons/01-03-overfitting-and-train-validation-test.md))*
- **The winner's validation score is not an estimate of the winner's risk.** With 20
  candidates of *identical* true risk $0.15$ on $m = 1000$ points, the winner reports
  $0.129$ — a two-point gap that is entirely selection, and wider than the confidence
  interval you would innocently quote. Optimism grows like $\sqrt{\ln k/(2m)}$: slowly
  in $k$ (which is why validation works at all) but never to zero (which is why a test
  set is necessary). **On a shared leaderboard, first-versus-second is not evidence
  unless it exceeds the standard error.** *([1.3](lessons/01-03-overfitting-and-train-validation-test.md))*
- **$k$-fold cross-validation does not solve the selection problem.** Averaging folds
  shrinks each candidate's *variance*, which shrinks the optimism; a minimum over $k$
  noisy numbers is still a minimum over $k$ noisy numbers. The structural fix is a set
  you never selected on. *([1.3](lessons/01-03-overfitting-and-train-validation-test.md))*
- **Zero training error is a theorem about self-prediction, not a finding.** For
  $k$-NN the training MSE is exactly $2\sigma^2/k$ below the test MSE, and zero at
  $k=1$ — the bias–variance cross term surviving because the "test" noise *is* a
  training noise. *([1.2](lessons/01-02-the-bias-variance-decomposition.md))*
- **Adding parameters always improves the fit you can see and eventually destroys the
  one you cannot.** At $n = 200$, $p = 10$, appending **50 columns of pure noise**
  raises training $R^2$ from $0.30$ to about $0.48$ and expected test MSE by 24
  percent. The rise was guaranteed in advance; $C_p$ or adjusted $R^2$ leaves it flat
  in expectation. *([2.1](lessons/02-01-linear-regression-as-learning.md))*
- **Optimism is not a symptom of bad features.** The theorem assumes a perfectly
  well-specified model where every coefficient is real, and the optimism is
  $2p\sigma^2/n$ regardless. Useless features are the special case $\beta_j = 0$,
  where you pay the estimation cost and buy nothing. *([2.1](lessons/02-01-linear-regression-as-learning.md))*
- **You cannot choose a complexity parameter by minimising a training-set objective.**
  $W(C)$ is non-increasing in $k$ and hits $0$ at $k = n$; the mixture log-likelihood
  is unbounded; $R^2$ never falls. All three answer "as complex as possible." Held-out
  risk *turns back up*, and $W$ has no counterpart that does — which is why choosing
  $k$ is judgement and choosing model complexity is not.
  *([1.3](lessons/01-03-overfitting-and-train-validation-test.md), [6.2](lessons/06-02-clustering-and-k-means.md), [6.3](lessons/06-03-mixture-models-and-em.md))*
- **Bias and variance are not measurable on your fitted model.** Both average over
  training sets you never drew; "this model has high variance" is always a claim about
  a *procedure*. *([1.2](lessons/01-02-the-bias-variance-decomposition.md))*
- **$\mathcal H$ is everything you could have selected using $S$, not what you
  finally fitted.** Try eight architectures and the honest $\lvert\mathcal H\rvert$ is
  eight times bigger; tune a threshold over a 100-point grid and it is a hundred times
  bigger. Choosing depth by cross-validation means you fitted the **union**
  $\bigcup_k\mathcal T_{2^k}$. Cheap ($\ln 8 = 2.08$), but not free.
  *([3.2](lessons/03-02-finite-classes-and-uniform-convergence.md), [5.1](lessons/05-01-decision-trees.md))*
- **Counting your peeks is what saves you.** Three glances at the test set cost only
  $\ln 3$ inside a square root — at $m = 2000$, $\delta = 0.05$, the honest upper bound
  moves from $0.140$ to $0.145$. What is lost is the claim that the point estimate is
  unbiased. A colleague who says "a few times over a couple of months" has an unbounded
  $k$ and can report nothing at all. *([1.3](lessons/01-03-overfitting-and-train-validation-test.md))*
- **Leakage is a failed hypothesis in a theorem, not sloppiness.** Duplicated rows,
  several scans of one patient, consecutive days of a time series, or a scaler fitted
  before the split all break "the validation points are independent draws from
  $\mathcal D$." *([1.3](lessons/01-03-overfitting-and-train-validation-test.md))*

### Priors, modes and intervals

- **MAP is not the posterior.** The mode is one number; the posterior is a
  distribution, and reporting $\hat\beta_{\text{ridge}}$ alone throws the covariance —
  the entire uncertainty statement — away. Outside the Gaussian case the mode is not
  even the mean, and MAP is not invariant to reparameterization while the MLE is.
  *([2.5](lessons/02-05-regularization-as-a-bayesian-prior.md))*
- **A credible interval is not a confidence interval.** Coverage is promised
  **averaged over the prior** and can be almost anything at a fixed truth: the
  worked "95 percent" interval covers $0.0282$ of the time at $\beta_0 = 3$, while
  averaging the column against the prior gives exactly $0.95000$. **If you did not
  mean the prior, you do not get the guarantee.**
  *([2.5](lessons/02-05-regularization-as-a-bayesian-prior.md))*
- **"The lasso selects, so the model believes those coefficients are zero" is false.**
  $\Pr(\beta_j = 0\mid y) = 0$ exactly, for every dataset, while the MAP returns an
  exact zero with probability $0.6247$ in the worked instance. A **mode** of a
  continuous density is not an **atom** of probability. Say "the lasso selects," never
  "the model believes." *([2.5](lessons/02-05-regularization-as-a-bayesian-prior.md))*
- **A nonzero lasso coefficient is not evidence.** There is no test, no p-value and no
  standard error; the estimator is biased by construction and the *identity* of the
  survivors is unstable under correlation. Reporting "the lasso selected these eight"
  as a finding rather than as a decision at a chosen $\lambda$ is the method's most
  common abuse. *([2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md))*
- **The Bayesian reading does not give you error bars for free.** $\sigma^2$ was
  treated as known; a real analysis puts a prior on it too, widening every interval.
  And cross-validating $\lambda$ and then quoting the matching posterior as if the
  prior had been chosen in advance is double-dipping.
  *([2.5](lessons/02-05-regularization-as-a-bayesian-prior.md))*
- **Label switching is a property of the likelihood, and more restarts make it
  worse.** Every maximum is an orbit of $K!$, so averaging parameters across restarts
  mixes components that were never the same component. Fix it with a convention, or
  report only relabelling-invariant quantities.
  *([6.3](lessons/06-03-mixture-models-and-em.md))*
- **A high ELBO does not mean a good fit.** $\mathcal L = \log p(x\mid\theta) - \mathrm{KL}$
  confounds a bad model with a bad variational family, and comparing ELBOs across
  different families $\mathcal Q$ compares nothing.
  *([6.3](lessons/06-03-mixture-models-and-em.md))*

### Normalization, units and scale

- **A $\lambda$ without its objective is meaningless, and the sibling card uses the
  other convention.** Lasso: threshold $\lambda$ here (half-RSS), $\lambda/2$ in
  [`machine-learning` 1.4](../machine-learning/lessons/01-04-regularization-ridge-and-lasso.md).
  SVM: $\lambda = 1/(Cn)$ here (averaged loss, $\tfrac12$ on the penalty),
  $\lambda_{\text{ML}} = 1/(2C)$ in
  [`machine-learning` 2.3](../machine-learning/lessons/02-03-soft-margins-and-the-svm-dual.md)
  (summed loss, no $\tfrac12$), with $\lambda_{\text{ML}} = \lambda n/2$. **Both are
  correct. State the normalization before you quote a number**, and never compare
  $\lambda$ across software. *([2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md), [4.4](lessons/04-04-support-vector-machines.md))*
- **Small $C$ means MORE regularization.** $C$ prices the *errors* and $\lambda$ the
  *weights*, so they are reciprocals — and $n$ appears, so the same $C$ is *less*
  regularization on a larger sample. *([4.4](lessons/04-04-support-vector-machines.md))*
- **Regularization is a property of your model *and your units*.** The $\ell_1$ and
  $\ell_2$ penalties are not scale-invariant, so an unstandardized lasso is a
  *different estimator*, not a sloppy one — and the Bayesian version says the same
  thing: $\beta \sim \mathcal N(0,\tau^2I)$ asserts every coefficient has the same
  prior scale, which is a claim about your columns' units.
  *([2.3](lessons/02-03-ridge-regression-and-shrinkage.md), [2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md), [2.5](lessons/02-05-regularization-as-a-bayesian-prior.md))*
- **A margin without a radius is unusable.** Multiply every feature by 10 and every
  margin is 10 times larger while the classifier is identical. "Our margin improved
  from 2.1 to 6.4 after switching metres to feet" measures a unit conversion. Report
  $R^2/\gamma^2$. *([4.3](lessons/04-03-maximum-margin-classifiers.md))*
- **$R^2/\gamma^2$ is scale-invariant but not translation-invariant.** A rotated and
  translated copy of the same two-point problem goes from capacity $1$ to $10$,
  entirely through $R$. **Centre your data before quoting a margin bound**, and
  remember that appending a constant coordinate $c$ for a bias makes $R^2 \to R^2 + c^2$.
  *([4.3](lessons/04-03-maximum-margin-classifiers.md))*
- **The boosting calibration map is $\sigma(2F)$, not $\sigma(F)$.** The population
  minimizer of exponential loss is *half* the log-odds; forgetting the 2 makes a
  well-fitted model look underconfident. *([5.3](lessons/05-03-boosting.md))*
- **PCA is invariant under rotation and not under rescaling, and you cannot have
  both.** $\operatorname{diag}(4,9)$ has PC1 $=e_2$; double one coordinate and PC1
  becomes the perpendicular direction. Standardizing buys scale invariance, destroys
  rotation invariance, and commits you to the prior that one standard deviation is
  worth the same in every feature. *([6.1](lessons/06-01-principal-component-analysis.md))*
- **Centring is part of PCA's theorem.** Skip it on four collinear points and the top
  direction becomes the direction of the *mean*, perpendicular to the spread, with a
  confident 97.6 percent explained for a direction carrying no variation at all.
  *([6.1](lessons/06-01-principal-component-analysis.md))*
- **Standardizing does not touch the curse of dimensionality**, because
  $0.01^{1/d}$ is a fraction of each variable's range whatever the units. Only reducing
  $d$ helps. *([6.4](lessons/06-04-density-estimation.md))*

### The theory bounds an object nobody computes

- **Uniform convergence survives a heuristic; the excess-risk guarantee does not.**
  "Your tree's test error tracks its training error" holds for the greedy tree,
  because the supremum is blind to selection. "Your tree is nearly as good as the best
  tree in the class" needs $\hat R_S(\hat T) \le \hat R_S(T_{\mathrm{ERM}})$, which
  greedy does not deliver — on a worked eight-row instance greedy leaves $1/4$ on the
  table within the same four-leaf class, and **more data does not shrink it.**
  *([5.1](lessons/05-01-decision-trees.md))*
- **"The k-means clusters of this dataset" is not a well-defined object** without
  naming the algorithm, the seed and the restart count. Every result about $\min_C W(C)$
  describes an optimum you never computed. *([6.2](lessons/06-02-clustering-and-k-means.md))*
- **k-means is *not* NP-hard "even for $k=2$ in the plane" — that case is easy.** With
  $k$ **and** $p$ both fixed the problem is polynomial (enumerate the $O(n^{kp})$
  candidate Voronoi partitions), and on a line it is polynomial for every $k$. The two
  correct hardness results each let one parameter into the input: $k=2$ fixed with $p$
  free, and $p=2$ fixed with $k$ free. *([6.2](lessons/06-02-clustering-and-k-means.md))*
- **Better search can make things worse.** A bad initialization is the *algorithm's*
  bug and restarts fix it; a Voronoi-shaped optimum is the *objective's* bug, and 100
  restarts keeping the lowest $W$ report the wrong partition **more** reliably. The
  question to ask is *"is my low-$W$ answer wrong, or did I fail to reach a low-$W$
  answer?"* *([6.2](lessons/06-02-clustering-and-k-means.md))*
- **Monotone is not convergent, and neither is optimal.** EM's ascent theorem gives a
  stationary point of the hill you started on, and with free covariances the
  likelihood is unbounded, so it climbs *into* the degeneracy — cheerfully and
  monotonically. Under a restricted variational family even the monotonicity in
  $\log p(x\mid\theta)$ is gone; only the **bound** rises.
  *([6.3](lessons/06-03-mixture-models-and-em.md))*
- **The representer theorem justifies computability, not quality.** It is equally true
  at $\lambda \to 0$, where you interpolate the noise; and it holds verbatim for every
  positive-definite kernel, good or absurd, so it offers no guidance on kernel choice.
  Without a strictly increasing penalty even the "every minimizer" claim fails: an
  unpenalized kernel fit is ill-posed, with infinitely many functions tying on the
  training data and differing wildly off it. *([4.2](lessons/04-02-rkhs-and-the-representer-theorem.md))*
- **A plateaued training loss is evidence about optimization error only.** In
  $R(w_T) = \hat R_S(\hat w) + [\text{optimisation}] + [\text{generalisation gap}]$,
  compute buys down only the middle term, and driving it to exactly zero tends to
  *enlarge* the gap. *([2.6](lessons/02-06-gradient-descent-the-workhorse.md))*
- **"Switch to full batch so the gradient is exact" names the wrong target.** The
  full-batch gradient is exact for $\hat R_S$ and still a noisy estimate of $\nabla R$;
  the noise moved from the batch draw into the sample draw and did not go away.
  *([2.6](lessons/02-06-gradient-descent-the-workhorse.md))*
- **Backpropagation is a derivative calculator, not a learning algorithm.** Everything
  [2.6](lessons/02-06-gradient-descent-the-workhorse.md) says about descending an
  *empirical* gradient applies here unchanged and unimproved.
  *([5.4](lessons/05-04-neural-networks-and-backpropagation.md))*

### Optimizers, gradients and shrinkage

- **Unbiasedness of the gradient requires $w$ fixed *before* $S$ is drawn**, and
  $w_t$ for $t\ge1$ is a function of $S$. Multi-epoch SGD draws mini-batches from a
  frozen $S$, so conditional on $w_t$ it is unbiased for $\nabla\hat R_S(w_t)$ — the
  **empirical** gradient — not for $\nabla R(w_t)$. **Only one-pass SGD on fresh
  examples is genuinely descending the population risk.**
  *([2.6](lessons/02-06-gradient-descent-the-workhorse.md))*
- **The batch size buys variance, not correctness.** $b = 1$ and $b = n$ point the same
  way on average; the big batch just wobbles $\sqrt b$ times less, so halving a
  gradient's standard deviation costs **four times** the batch.
  *([2.6](lessons/02-06-gradient-descent-the-workhorse.md))*
- **$\operatorname{Cov} = \Sigma/b$ is a fact about i.i.d. sampling, not about
  mini-batching.** Shuffle-and-slice samples without replacement and does better by
  $(n-b)/(n-1)$ — the worked four-point example gives $14/3$ where the formula predicts
  $7$. Harmless, but do not quote it as an equality over a partition.
  *([2.6](lessons/02-06-gradient-descent-the-workhorse.md))*
- **Early stopping is not ridge.** They share a shape and cross as functions: matched
  at one direction they disagree at the others, and reproducing $t = 5$ needs $\lambda$
  from $0.0051$ to $3.42$ across one four-direction spectrum. The defensible claims are
  that both are monotone shrinkage in $\sigma_i^2$, that more steps means less
  shrinkage, and that $\lambda \approx 1/(\eta t)$ holds in the $\sigma^2\to0$ limit
  and nowhere exactly. *([2.6](lessons/02-06-gradient-descent-the-workhorse.md))*
- **$\mathrm{df}(\lambda)$ does not count surviving parameters.** $H_\lambda$ has rank
  $p$ at every finite $\lambda$; $\mathrm{df}$ is a shrinkage-weighted count of
  directions and is generally irrational. Zeroing coefficients needs a
  non-differentiable penalty. *([2.3](lessons/02-03-ridge-regression-and-shrinkage.md))*
- **$\lambda^\star = \sigma^2/\beta_j^2$ is an oracle, not a recipe** — it depends on
  the $\beta$ you are estimating. It gives the *shape* of the answer and nothing about
  the number. *([2.3](lessons/02-03-ridge-regression-and-shrinkage.md))*
- **There is no 50/50 rule at the ridge optimum.** The split is
  $\operatorname{bias}^2 : \operatorname{Var} = \sigma^2 : \beta_j^2$, so the halves are
  equal only when $\beta_j^2 = \sigma^2$. The tidy instance $\beta = 2$,
  $\sigma^2 = 4$ is an accident; $\beta = 1$, $\sigma^2 = 4$ gives $0.64$ and $0.16$.
  *([2.3](lessons/02-03-ridge-regression-and-shrinkage.md))*
- **The ridge theorem does not contradict Gauss–Markov; it changes the field of
  play.** Gauss–Markov quantifies over *linear unbiased* estimators and minimizes
  *variance*. Ridge is not in that competition, and MSE is variance plus bias squared.
  *([2.1](lessons/02-01-linear-regression-as-learning.md), [2.3](lessons/02-03-ridge-regression-and-shrinkage.md))*
- **Plain gradient descent cannot produce a lasso zero.** The objective is
  non-differentiable exactly where the answer lives; a subgradient step wanders around
  zero at $10^{-9}$ and never lands. Use the proximal step — the soft threshold — which
  sets coordinates to *exactly* zero every iteration.
  *([2.4](lessons/02-04-lasso-and-the-geometry-of-sparsity.md), [2.6](lessons/02-06-gradient-descent-the-workhorse.md))*
- **On separable data the logistic likelihood has no maximiser.** The objective is
  convex and bounded below but not coercive; any positive $\lambda$ restores a unique
  solution, and as $\lambda\to0^+$ its direction runs to the max-margin one.
  *([2.2](lessons/02-02-logistic-regression-and-classification.md))*

### Surrogates, ensembles and what a score means

- **A convex upper bound is not enough.** The perceptron loss $\max(0,-z)$ is convex,
  sits above the step, and is useless — $f\equiv0$ minimizes it for every
  distribution. It fails $\varphi'(0)<0$, and that failure is the whole difference
  between a loss that pushes and a loss that shrugs.
  *([2.2](lessons/02-02-logistic-regression-and-classification.md))*
- **A probability is not any number in $(0,1)$ a model emits.** A sigmoid output is
  calibrated only if the loss it was trained under has $\eta$ as its population
  minimizer. **No map of an SVM score can separate a $0.95$ patient from a $0.55$
  one** — at the population minimizer both scores are $+1$, and the information was
  destroyed by the loss, not by the squashing. Platt scaling appears to work only
  because a finite-sample regularized fit has not got there yet, so **more data makes
  the calibration story worse.** *([2.2](lessons/02-02-logistic-regression-and-classification.md), [4.4](lessons/04-04-support-vector-machines.md))*
- **Support vectors are a fact about the loss and the penalty, not a discovered
  property of your data.** Crank the regularization up and nearly every point falls
  inside the band and becomes one; a small support set is not a confident model.
  *([4.4](lessons/04-04-support-vector-machines.md))*
- **Sparsity is the hinge's doing, not the representer theorem's.** With squared loss
  the expansion is dense and prediction costs $n$ kernel evaluations.
  *([4.2](lessons/04-02-rkhs-and-the-representer-theorem.md), [4.4](lessons/04-04-support-vector-machines.md))*
- **Bagging is a variance instrument only.** Bagging a stump gives a slightly smoother
  stump: its error is bias, and averaging leaves the bias exactly where it was. This is
  why bagged trees are grown deep and unpruned, and why boosting needs a *weak* base
  learner where bagging needs a *strong* one.
  *([5.2](lessons/05-02-bagging-and-random-forests.md), [5.3](lessons/05-03-boosting.md))*
- **Averaging helps under squared loss, where convexity forbids a reversal; voting has
  no such protection.** Where the base learner is worse than a coin, majority vote
  drives it toward certainty of being **wrong** — from $0.60$ error to $0.98$ at
  $B = 101$. *([5.2](lessons/05-02-bagging-and-random-forests.md))*
- **$\hat f_{\mathrm{bag}} \to \bar f$ is false.** It converges to the *bootstrap*
  aggregate, a function of your one dataset. The Monte Carlo gap closes; the plug-in
  gap is the $\rho\sigma^2$ floor. *([5.2](lessons/05-02-bagging-and-random-forests.md))*
- **AdaBoost does not minimise training error**, it minimises exponential loss — only
  the *bound* $\prod_t2\sqrt{\epsilon_t(1-\epsilon_t)}$ falls every round, and the 0-1
  training error can sit flat or rise (in the worked run it hit zero at round 282 and
  was nonzero again at 300). *([5.3](lessons/05-03-boosting.md))*
- **The weak-learning condition is a strong assumption, not a formality.**
  "$\epsilon_t \le \tfrac12-\gamma$ for *every* weighting" fails routinely — no stump
  beats chance on XOR — and Result 2 is worthless without it.
  *([5.3](lessons/05-03-boosting.md))*
- **Boosting does overfit, given label noise, and no margin bound protects you** —
  $\widehat{\Pr}[\operatorname{marg}\le\theta]$ is exactly what a mislabelled point
  wrecks. And **the margin story is not settled**: the minimum normalised margin rises
  over a 1200-round run while the **median falls** ($0.060 \to 0.044$, four seeds), and
  an algorithm maximising the minimum margin more aggressively generalizes *worse*.
  *([5.3](lessons/05-03-boosting.md))*
- **Bigger is not always better.** Double descent shows a well-chosen small model
  beating the huge one, and optimally tuned ridge beating both while erasing the peak
  entirely. Its content is that **$p \approx n$ is uniquely bad**, not that $p \gg n$
  is uniquely good. *([5.5](lessons/05-05-why-does-deep-learning-generalize.md))*
- **"Implicit regularization" is a research programme, not a mechanism you may
  invoke.** It is a theorem for least squares from the origin and, in direction, for
  separable linear classification; in matrix factorization the implicit bias provably
  is not the minimiser of any norm. And minimum-norm is **not** minimum-support.
  *([5.5](lessons/05-05-why-does-deep-learning-generalize.md))*
- **Zero training error is not by definition overfitting.** It was only ever
  *correlated* with high test error, via the capacity argument; when the correlation
  breaks, the definition should go. Interpolation with low test error is called benign
  overfitting and is characterized precisely for linear regression.
  *([5.5](lessons/05-05-why-does-deep-learning-generalize.md))*

### Geometry, dimension, and what an objective can even express

- **The optimum's shape is chosen before you see the data.** k-means' optimal cells
  are convex with flat walls, so **no** k-means optimum at any $k$ can return nested
  groups; PCA's code is a subspace, so curved structure is invisible by construction —
  points uniform on a circle report 50 percent explained and there is nothing linear to
  compress. *([6.1](lessons/06-01-principal-component-analysis.md), [6.2](lessons/06-02-clustering-and-k-means.md))*
- **k-means rewards balance as well as separation.** The $n_1n_2$ factor in
  $B = \frac{n_1n_2}{n}\lVert\bar x_1-\bar x_2\rVert^2$ means the *global* optimum
  will refuse to isolate an obvious outlier — nine points and a straggler at 10 score
  $60$ for the sensible split and $56.25$ for the absurd one.
  *([6.2](lessons/06-02-clustering-and-k-means.md))*
- **Explained variance measures squared length in your units, not information.** It is
  an exact answer to "how much of $\operatorname{tr}(S)$ can a $k$-dimensional linear
  code retain," and $\operatorname{tr}(S)$ contains no labels and does not know a
  circle from a disc. *([6.1](lessons/06-01-principal-component-analysis.md))*
- **Only the optimal value is always well defined; the argmax may not be.**
  Eigenvectors are determined up to sign, and when eigenvalues tie the directions can
  be rotated arbitrarily within the tied block. Never interpret a loading vector
  without checking the gap it sits on. The same non-identifiability is the linear
  autoencoder's $(W_2M, M^{-1}W_1)$ and probabilistic PCA's $W \mapsto WR$.
  *([6.1](lessons/06-01-principal-component-analysis.md), [6.3](lessons/06-03-mixture-models-and-em.md))*
- **A hundred affine layers compose to one affine layer.** Depth without a
  nonlinearity changes the parameterisation, not the class — and buys no capacity.
  *([5.4](lessons/05-04-neural-networks-and-backpropagation.md))*
- **The curse of dimensionality is statistical, not computational.** A faster machine
  changes nothing, and by Stone's minimax bound neither does a cleverer estimator: no
  method beats $n^{-4/(4+d)}$ over densities with two bounded derivatives.
  *([6.4](lessons/06-04-density-estimation.md))*
- **"Nearby points behave alike" is a first-column assumption.** At $d = 100$ the
  neighbourhood holding the nearest 1 percent of your data spans 95 percent of every
  variable's range, and $0.9999$ of the cube is within $0.05$ of its boundary — so
  almost every prediction is an extrapolation, where a kernel's symmetric cancellation
  fails and the bias degrades from $O(h^2)$ to $O(h)$. Everything local in this course
  — $k$-NN, RBF widths, Voronoi cells — inherits this.
  *([6.4](lessons/06-04-density-estimation.md))*
- **An uninformative feature is not free in density estimation.** It costs you volume,
  so adding it makes the estimate strictly worse — a harsher regime than supervised
  learning, where an irrelevant feature is a variance cost a regularizer can absorb.
  *([6.4](lessons/06-04-density-estimation.md))*
- **$\hat p(x)$ is a density, not a probability.** It can exceed 1, and
  $\hat p(x) = 0$ in a gap is an artefact of $h$, not evidence that $x$ is impossible.
  *([6.4](lessons/06-04-density-estimation.md))*
- **"Tune until bias and variance are equal" is right only at $d = 4$.** At the optimal
  bandwidth $\operatorname{bias}^2/\operatorname{Var} = d/4$ exactly. The principle is
  to equalise the two terms' *derivatives*, which is what setting
  $\mathrm{MISE}'(h) = 0$ does. *([6.4](lessons/06-04-density-estimation.md))*
- **A single non-PSD Gram matrix refutes a kernel forever; a thousand PSD ones prove
  nothing.** The condition quantifies over every finite point set, so certification
  must be structural. Check the **diagonal** first — it is free, and it kills
  $\lVert x-z\rVert$, $\lVert x-z\rVert^2$ and $\cos(x+z)$ at a glance.
  *([4.1](lessons/04-01-feature-maps-and-the-kernel-trick.md))*
- **The margin bound is not a strict upgrade on counting dimensions.** In low
  dimensions it loses about as often as it wins ($5$ against $3$; $3.25$ against $2$).
  Both are valid, so **take the smaller**; reach for $R^2/\gamma^2$ when $d$ is huge or
  infinite, which is the case it was invented for.
  *([4.3](lessons/04-03-maximum-margin-classifiers.md))*
- **A tree's capacity meter is scale-free in a way a margin's is not.** A split is a
  threshold on one coordinate, so any strictly increasing per-feature transformation
  maps trees to trees with the same leaf count and the same partition — which is
  exactly why trees need no standardization and margin methods need $R^2/\gamma^2$
  rather than $\gamma$ alone. *([5.1](lessons/05-01-decision-trees.md))*
