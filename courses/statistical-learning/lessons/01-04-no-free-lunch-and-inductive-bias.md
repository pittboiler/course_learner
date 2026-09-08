# Statistical Learning Theory · Lesson 1.4: No free lunch and inductive bias

> ⏱ ~15 min · Module 1: The learning problem · Builds on: [1.1 (loss, risk, ERM)](01-01-what-is-learning-loss-risk-and-erm.md), [1.2 (bias–variance)](01-02-the-bias-variance-decomposition.md), [1.3 (train/validation/test)](01-03-overfitting-and-train-validation-test.md) · Unlocks: Module 2 (every penalty is a bet), [3.1 (the PAC framework)](03-01-the-pac-framework.md)

## Why this matters

The last three lessons quietly assumed that fitting data tells you something about data you have not seen. This lesson proves that assumption is **false in general** — and then shows exactly what you must add to make it true.

That is not a philosophical aside; it is the load-bearing wall of the course. The **no-free-lunch theorem** says that averaged over all the ways the world could be labelled, every learning algorithm is exactly a coin flip on anything outside its training set. Not "usually mediocre": *exactly* a coin flip, for every learner, with no exceptions and no clever algorithm exempt.

So whatever a model does for you, it cannot be "extract structure from data." It has to be **bet on which structure** — and the bet *is* the model. Once you believe that, the rest of the course reads differently. A penalty ([2.3](02-03-ridge-regression-and-shrinkage.md), [2.4](02-04-lasso-and-the-geometry-of-sparsity.md)) is a bet. A prior ([2.5](02-05-regularization-as-a-bayesian-prior.md)) is a bet with its odds written down. A kernel ([4.1](04-01-feature-maps-and-the-kernel-trick.md)) is a bet about smoothness. And Module 3's entire project is the accounting: what a bet costs in samples, and what it buys in guarantee.

## The idea

Set up a finite world. The domain $\mathcal X$ has $2n$ points, labels are in $\{0,1\}$, and your learner gets to see $n$ of them labelled — half the world. A **labelling** is a function $f:\mathcal X\to\{0,1\}$, and there are $2^{2n}$ of them. Every single one is a legitimate target: for each $f$, "the truth is $f$" is a perfectly coherent state of affairs in which some hypothesis (namely $f$ itself) has zero risk. Nothing is degenerate or unfair here.

Your learner sees the labelled half. Ask what it knows about the other half.

**Nothing.** And "nothing" here is a theorem, not a mood. Take any unseen point $u$ and any labelling $f$. Flip $f$'s value at $u$ and change nothing else. The flipped labelling produces *the identical training sample* — $u$ was never in it — so your learner returns *the identical hypothesis*, which makes *the identical prediction* at $u$. Exactly one of those two labellings is the one it got right.

So the $2^{2n}$ labellings pair up, and inside each pair the learner scores exactly one hit and one miss at $u$. Its average error rate at $u$, over all labellings, is **exactly one half**. This holds for the cleverest algorithm you can write and for the constant-zero learner, identically, because the argument never opened the box. It used one fact only: the learner's output depends on the sample, and the sample does not depend on $f(u)$.

Half the domain is unseen and the learner sits at $1/2$ there, so its average risk over the whole domain is at least $\tfrac12\cdot\tfrac12 = \tfrac14$. That is the number in the theorem.

One move remains, and it is the move that converts a statement about averages into a statement about the world: **a maximum is at least a mean.** If every learner's *average* risk over labellings is at least $1/4$, then for every learner there *exists* a labelling — hence a distribution, hence an actual learning problem — on which it does at least that badly. The bad case is not hypothetical, and averaging proves it exists without ever constructing it.

## The formal version

Fix the 0-1 loss and write $R_{\mathcal D}(h)$ for the [population risk](../reference.md#population-risk) of $h$ under $\mathcal D$, as in [1.1](01-01-what-is-learning-loss-risk-and-erm.md). A **learner** is any map $A$ from labelled samples of size $n$ to hypotheses $\mathcal X\to\{0,1\}$. No restriction at all: it need not be ERM, need not be efficient, need not be sane.

> **Theorem ([no free lunch](../reference.md#no-free-lunch-theorem)).** Let $\mathcal X$ be finite with $|\mathcal X| \ge 2n$. For every learner $A$ there is a distribution $\mathcal D$ on $\mathcal X\times\{0,1\}$ such that (i) some $h^*$ has $R_{\mathcal D}(h^*) = 0$, and (ii)
> $$\mathbb E_{S\sim\mathcal D^n}\bigl[R_{\mathcal D}(A(S))\bigr] \ \ge\ \tfrac14 .$$

**In words:** whatever your algorithm is, there is a learning problem that is perfectly learnable in principle — a zero-error hypothesis exists — on which your algorithm is wrong a quarter of the time on average, and no amount of cleverness removes the problem, because the problem was chosen after seeing the algorithm.

*What makes the proof work:* on unseen points the learner is provably a coin flip (the pairing argument above), and "some labelling is at least as bad as the average labelling" upgrades that to an existence claim.

*Proof.* Take $C\subseteq\mathcal X$ with $|C| = 2n$, and let $f_1,\dots,f_T$ with $T = 2^{2n}$ enumerate every labelling of $C$. Let $\mathcal D_i$ be uniform on the $2n$ pairs $\{(x, f_i(x)) : x \in C\}$ — uniform marginal on $C$, deterministic label. Each $\mathcal D_i$ satisfies (i) with $h^* = f_i$. It is enough to show the *average* over $i$ of the expected risk is at least $1/4$, since a maximum is at least a mean.

A sample from $\mathcal D_i^n$ is determined by the instance sequence $\mathbf x = (x_1,\dots,x_n)\in C^n$ together with $f_i$, and all $k = (2n)^n$ sequences are equally likely for every $i$. Writing $S^i_{\mathbf x}$ for the resulting sample and swapping two finite averages,

$$\frac1T\sum_{i=1}^{T}\mathbb E_{S}\bigl[R_{\mathcal D_i}(A(S))\bigr] \;=\; \frac1k\sum_{\mathbf x \in C^n}\ \Bigl[\ \frac1T\sum_{i=1}^{T} R_{\mathcal D_i}\bigl(A(S^i_{\mathbf x})\bigr)\ \Bigr].$$

Fix $\mathbf x$ and let $U\subseteq C$ be the points it misses, $p = |U|$. Since $\mathbf x$ has at most $n$ distinct entries and $|C| = 2n$, we get $p \ge n$, so $p/(2n) \ge 1/2$. Throwing away every mistake outside $U$ can only decrease the risk:

$$R_{\mathcal D_i}(h) \;=\; \frac1{2n}\sum_{x\in C}\mathbf 1\bigl[h(x)\ne f_i(x)\bigr] \;\ge\; \frac{p}{2n}\cdot\frac1p\sum_{u\in U}\mathbf 1\bigl[h(u)\ne f_i(u)\bigr] \;\ge\; \frac12\cdot\frac1p\sum_{u\in U}\mathbf 1\bigl[h(u)\ne f_i(u)\bigr].$$

Now fix a single $u\in U$ and pair the labellings: match $f$ with $f^{(u)}$, the labelling agreeing with $f$ everywhere except at $u$. This is a perfect matching of the $T$ labellings into $T/2$ pairs. Because $u\notin\mathbf x$, both members of a pair give the *same* sample and therefore the *same* hypothesis $h$; and because they disagree at $u$, exactly one of them is misclassified there. So each pair contributes exactly one error, and

$$\frac1T\sum_{i=1}^{T}\mathbf 1\bigl[A(S^i_{\mathbf x})(u)\ne f_i(u)\bigr] \;=\; \frac12 \qquad \text{exactly, for every } u\in U.$$

Averaging that over $u\in U$ and folding in the leading $1/2$ gives at least $1/4$ for each fixed $\mathbf x$, hence for the average over $\mathbf x$, hence for the average over $i$, hence for the maximum over $i$. $\blacksquare$

**Where each hypothesis earned its keep.** $|\mathcal X|\ge 2n$ is what forces $p\ge n$, i.e. at least half the domain unseen — that is the outer $1/2$. The pairing is what forces the inner $1/2$, and it needs $u\notin\mathbf x$ and nothing else. "Some hypothesis has zero risk" comes free because each $\mathcal D_i$ was built from a deterministic labelling: the failure has **nothing to do with noise**.

**Corollary (a bad draw, not merely a bad average).** Risk is bounded by 1, so a reverse Markov step turns the mean into a tail bound:

$$\Pr_{S\sim\mathcal D^n}\Bigl[R_{\mathcal D}(A(S)) \ \ge\ \tfrac18\Bigr] \;\ge\; \frac{1/4 - 1/8}{1 - 1/8} \;=\; \frac17 .$$

In words: on that same $\mathcal D$, at least one training set in seven leaves you with error worse than $1/8$. You cannot rescue yourself by hoping for a lucky sample.

**The payoff.** You cannot learn without **restricting $\mathcal H$**, or weighting some hypotheses above others. That restriction or weighting is the learner's **[inductive bias](../reference.md#inductive-bias)** — the part of the answer that came from you rather than from the data — and choosing it is the actual modelling work. Three standard ones:

| hypothesis class | the bet it is making |
|---|---|
| linear functions $w^\top x + b$ | feature effects **add**; there are no interactions |
| small $\lVert w\rVert_2$ (ridge, [2.3](02-03-ridge-regression-and-shrinkage.md)) | the truth is **smooth** — nearby inputs get nearby outputs |
| axis-aligned trees ([5.1](05-01-decision-trees.md)) | interactions are **few**, and the useful cuts are coordinate-wise |

None of these is true a priori. Each is a claim about *your* problem that your data can fail to refute but can never verify. The practice of choosing one for a messy real problem is [`machine-learning` 1.1](../../machine-learning/lessons/01-01-the-learning-problem.md); what this lesson establishes is that there is no option of declining to choose.

## Picture

![A table with a six-point domain split into a seen half and an unseen half. The learner's fixed prediction is the top row and the eight labellings of the unseen three points are the rows below it, with a mistake count beside each row. The counts sum to twelve over eight labellings, an average of 1.5 out of 3.](assets/01-04-fig1.svg)

Six points, three seen, three unseen. Every labelling consistent with the sample is a row — there are $2^3 = 8$ of them, because the seen half is pinned and the unseen half is free. The learner's hypothesis is a single fixed row at the top: it committed before the truth was revealed, so it is the same column of predictions in every row.

Read the mistake counts down the right: $0,1,1,2,1,2,2,3$, summing to $12$ across $8$ labellings, so $12/8 = 1.5$ mistakes out of $3$ unseen points. Exactly half — and if you replaced the blue row with any other prediction column, the eight counts would permute among themselves and still sum to $12$. That invariance under changing the learner is the theorem in one picture.

## Worked examples

**Example 1 (mechanical): the constant $1/4$ is exactly attained.** Take $C=\{x_1,x_2,x_3,x_4\}$, uniform, and a sample that reveals $x_1$ and $x_2$. Let $A$ copy the sample's labels on the seen points and predict $0$ on the unseen ones. Enumerate all $2^4 = 16$ labellings and record the risk (mistakes divided by 4):

| risk of $A$ | how many of the 16 labellings |
|---|---|
| $0$ | 4 |
| $1/4$ | 8 |
| $1/2$ | 4 |

The average is

$$\frac{4\cdot 0 \;+\; 8\cdot\tfrac14 \;+\; 4\cdot\tfrac12}{16} \;=\; \frac{4}{16} \;=\; \frac14 ,$$

**exactly** the theorem's bound. And the risk on the *unseen half alone* averages exactly $1/2$, as the pairing argument demands.

Could a better learner have beaten $1/4$? On this instance the question is finite enough to settle by brute force: a learner here is a map from the $4$ possible samples to the $16$ possible hypotheses, so there are $16^4 = 65{,}536$ of them. Minimising the average risk over all of them returns exactly $1/4$ — **no learner does better, and the theorem's constant cannot be improved.**

**Example 2 (why you would care): how small a bet a hypothesis class is.** Fix a domain of $100$ points. There are $2^{100} \approx 1.27\times10^{30}$ labellings. How many can a familiar class actually produce?

| class on 100 points | labellings it can realise | fraction of $2^{100}$ |
|---|---|---|
| thresholds $\mathbf 1[x\ge a]$ | $101$ | $\approx 8\times 10^{-29}$ |
| intervals $\mathbf 1[a\le x\le b]$ | $5{,}051$ | $\approx 4\times 10^{-27}$ |
| affine separators in $\mathbb R^{2}$ | $9{,}902$ | $\approx 8\times 10^{-27}$ |
| affine separators in $\mathbb R^{10}$ | $\approx 3.50\times10^{13}$ | $\approx 2.8\times 10^{-17}$ |

(The separator counts are $2\sum_{k=0}^{d}\binom{99}{k}$, the number of dichotomies of points in general position.)

Choosing "linear separators in $\mathbb R^{10}$" is therefore a wager that the truth lies in a $10^{-17}$ fraction of the possibilities. Stated that way it sounds insane, and NFL says it *is* insane in the average case — the theorem is precisely the observation that you have no evidence for that fraction over any other. It works anyway because real targets are not drawn uniformly from $2^{100}$; they are drawn from something with structure, and the class was chosen to match the structure.

The forward-looking point: that tiny fraction is not just a rhetorical flourish, it is a **quantity you get billed for**. Module 3 shows the sample complexity of a finite class scales with $\ln|\mathcal H|$ — the *log* of exactly this count, i.e. the number of bits it takes to name a hypothesis ([3.2](03-02-finite-classes-and-uniform-convergence.md)) — and that infinite classes are billed by VC dimension instead ([3.3](03-03-shattering-and-the-vc-dimension.md), [3.4](03-04-vc-bounds-and-sample-complexity.md)). Smaller bet, cheaper guarantee, bigger risk of being wrong. That is the whole trade.

## Watch out

- **You might think** NFL says all learners are equally good, so model choice is arbitrary — **but actually** it says they tie *when averaged over all $2^{|\mathcal X|}$ labellings with equal weight*. That uniform average is a measure no real problem is drawn from: images, prices and physical signals are a vanishingly small, wildly structured subset. NFL forbids a learner that is best on *every* problem; it says nothing against a learner that is best on yours. Comparing two methods on your data is still meaningful — and is exactly what [1.3](01-03-overfitting-and-train-validation-test.md)'s held-out set is for.
- **You might think** the theorem says data does not help, or that it is about $n$ being small — **but actually** its hypothesis is $n \le |\mathcal X|/2$. It says a sample cannot cover an exponentially large domain; it never says more data is useless. Fix a class of finite capacity first, and Module 3 hands you a risk bound that shrinks like $1/\sqrt n$. The order of quantifiers is the entire content: **choose $\mathcal H$, then let the adversary choose $\mathcal D$** is a winnable game, and reversing it is not.
- **You might think** you can dodge the choice by using a huge flexible class, or by picking $\mathcal H$ after inspecting the data — **but actually** neither escapes. A class that can realise every labelling is exactly the case the theorem kills. And choosing $\mathcal H$ after looking just moves the bias up to the meta-level, where the union bound charges you for the search — the same selection effect that inflates a validation score in [1.3](01-03-overfitting-and-train-validation-test.md), made precise in [3.2](03-02-finite-classes-and-uniform-convergence.md). Every learner has an inductive bias; the only choice is whether yours is examined or accidental.

## One-liner

> Averaged over every way the world could be labelled, every learner is exactly a coin flip off its training set — so learning is never the extraction of structure from data, it is a bet on which structure, and the model *is* the bet.

## Problems

**P1 (🟢)** Domain $\mathcal X = \{x_1,\dots,x_6\}$, uniform $\mathcal D$, labels in $\{+1,-1\}$, and the sample reveals $x_1, x_2, x_3$. The learner $A$ returns the hypothesis that copies the sample's labels on $x_1,x_2,x_3$ and predicts $+1$ on the rest.

(a) How many labellings of the full domain are consistent with the observed sample? (b) Tabulate $A$'s mistake count on the unseen half for each one, and give the average. (c) Convert that to an average risk over the whole domain, and compare with the theorem's $1/4$.

**P2 (🟡)** Same setup as Example 1: $C=\{x_1,x_2,x_3,x_4\}$ uniform, the sample reveals $x_1$ and $x_2$, and there are 16 labellings. But now the learner $B$ is lazier — it outputs the **constant** hypothesis equal to the majority label in the sample, with ties broken toward $0$.

(a) Compute $B$'s average risk over the 16 labellings, and its average error on the unseen half alone. (b) Deduce from your average that some labelling gives $B$ risk at least that large, and exhibit the worst one. (c) $B$ also achieves risk $0$ on two labellings. Explain in one sentence why that is not a counterexample to the theorem, and state precisely which of your two numbers in (a) the pairing argument predicted in advance.

**P3 (🔴)** Let $A$ and $B$ be learners that **disagree on every input**: for every sample $S$ and every $x$, $B(S)(x) = 1 - A(S)(x)$.

(a) Fix an instance sequence $\mathbf x$ and average over all $2^{|C|}$ labellings of $C$. Prove that $A$ and $B$ have *identical* average error on the points $\mathbf x$ misses. (b) Your proof should in fact deliver a stronger statement — identify it. (c) Two learners tie on this average. Say what that does, and does not, license you to conclude when you must pick one of them for a real problem tomorrow.

<details>
<summary>Solutions</summary>

**P1** (a) The sample pins $x_1,x_2,x_3$, and the labels of $x_4,x_5,x_6$ are unconstrained, so there are $2^3 = \mathbf{8}$ consistent labellings.

(b) $A$ predicts $+1$ on all three unseen points, so its mistake count on a labelling is the number of $-1$s among $(f(x_4),f(x_5),f(x_6))$:

| unseen labels | mistakes |
|---|---|
| $(+,+,+)$ | 0 |
| $(+,+,-)$, $(+,-,+)$, $(-,+,+)$ | 1 each |
| $(+,-,-)$, $(-,+,-)$, $(-,-,+)$ | 2 each |
| $(-,-,-)$ | 3 |

Total $0 + 3(1) + 3(2) + 3 = 12$ over 8 labellings, so the average is $12/8 = \mathbf{3/2}$ mistakes. As an error *rate* on the unseen half that is $(3/2)/3 = 1/2$ — the pairing argument, arrived at by direct count.

(c) $A$ is consistent on the seen half, so it makes no mistakes there. Average risk over the whole domain is

$$\frac{1}{6}\cdot\frac{3}{2} \;=\; \frac14 .$$

Exactly the theorem's bound, and for the structural reason: half the domain unseen ($3/6$) times a one-half error rate there. Note this instance has $|\mathcal X| = 6$ and $n = 3$, so $n = |\mathcal X|/2$ — the extreme case, where the bound is tight.

**P2** (a) With the sample $(f(x_1), f(x_2))$, $B$ outputs the constant $1$ when both are $1$, and the constant $0$ otherwise. Enumerating all 16 labellings gives the distribution

| risk of $B$ | count |
|---|---|
| $0$ | 2 |
| $1/4$ | 6 |
| $1/2$ | 6 |
| $3/4$ | 2 |

so the average risk is

$$\frac{2(0) \;+\; 6(\tfrac14) \;+\; 6(\tfrac12) \;+\; 2(\tfrac34)}{16} \;=\; \frac{6}{16} \;=\; \frac38 .$$

That is comfortably above the floor of $1/4$: $B$ pays extra for being wrong on *seen* points too, which the floor never charged for. Its average error on the unseen half alone is exactly $\mathbf{1/2}$.

(b) A maximum is at least a mean, so some labelling gives risk at least $3/8$. The worst are $f = (0,1,1,1)$ and $f = (1,0,1,1)$: the sample is split, $B$ outputs the constant $0$, and it is wrong on three of the four points — risk $\mathbf{3/4}$.

(c) Scoring $0$ on the two constant labellings is not a counterexample because the theorem is a statement about the *average* (and hence about the existence of a bad case), not a claim that every problem is hard for every learner — a learner is allowed, indeed guaranteed, to be excellent on the problems its bias happens to match. The pairing argument predicted the $\mathbf{1/2}$ in (a), the unseen-half figure, exactly and in advance; it says nothing about the $3/8$, which also absorbs $B$'s self-inflicted errors on the training points.

**P3** (a) Both learners receive **the same** sample $S$ — the sample is a function of $\mathbf x$ and $f$, not of the algorithm — so writing $h = A(S)$ we have $B(S) = 1 - h$ pointwise. Fix an unseen $u$. For any labelling $f$, exactly one of $h(u)$ and $1-h(u)$ equals $f(u)$, hence

$$\mathbf 1\bigl[A(S)(u)\ne f(u)\bigr] + \mathbf 1\bigl[B(S)(u)\ne f(u)\bigr] = 1 \quad\text{for every } f,$$

so their errors sum to a constant on every labelling. Averaging over all $2^{|C|}$ labellings therefore gives averages summing to $1$; it remains to show each is $1/2$. Use the pairing $f \leftrightarrow f^{(u)}$ from the proof: since $u\notin\mathbf x$, both members of a pair produce the same sample and so the same $h$, and they disagree at $u$, so $h$ errs on exactly one of the two. Hence $A$'s average error at $u$ is exactly $1/2$, and by the same argument applied to $1-h$, so is $B$'s. Averaging over the unseen points, both have average off-training error exactly $1/2$, and in particular they are equal. $\blacksquare$

(b) The stronger statement: the pairing argument **never used the relationship between $A$ and $B$**. It used only that a learner's output at $u$ is fixed once the sample is fixed. So *every* learner — not just complementary pairs — has average off-training error exactly $1/2$, and therefore **all learners tie**, not merely these two. (Verified exhaustively on the four-point instance of Example 1: all $16^4 = 65{,}536$ learners return exactly $1/2$.) Being complementary is the vivid special case, where you can also see the tie labelling-by-labelling rather than only on average.

(c) **What it licenses:** no learner is universally superior; any argument of the form "method $M$ generalizes better, full stop" is false, and a claim that $M$ beats $M'$ must name the class of problems it is claimed over. Also, the average is achieved *on the uniform measure over labellings*, so if you genuinely had no prior structure, coin-flipping would be an honest choice.

**What it does not license:** essentially every practical conclusion. The tie is over a uniform average across all labellings, which is not the distribution over problems anyone faces; on a fixed $\mathcal D$, or on any structured subfamily of targets, one learner can dominate the other on every instance. The result is also silent about error on the *training* points, and silent about the realizable-and-restricted setting where Module 3 gives strict guarantees. Tomorrow, pick between $A$ and $B$ by asking which one's inductive bias matches what you believe about your problem, and then measure the winner on held-out data ([1.3](01-03-overfitting-and-train-validation-test.md)) — the theorem tells you that you must supply that belief, not that the supplying is futile.

</details>

## Flashback

**From Lesson 1.2 (The bias–variance decomposition):** You observe $y_i = \theta + \varepsilon_i$ for $i = 1,\dots,4$ with $\mathbb E\varepsilon_i = 0$ and $\operatorname{Var}\varepsilon_i = \sigma^2 = 4$, and the truth is $\theta = 2$. Instead of the sample mean $\bar y$ you use the **shrunken** estimator $\hat\theta_c = c\,\bar y$ for a fixed $c \in [0,1]$ — that is, you restrict yourself to a one-parameter family pulled toward zero.

(a) Give $\operatorname{bias}^2$ and $\operatorname{Var}$ of $\hat\theta_c$, and the reducible error, at $c = 1$, $c = 0.8$ and $c = 0.5$. (b) Find the minimising $c^*$ in closed form and confirm it. (c) Which term of the decomposition does shrinking (that is, restricting $\mathcal H$) attack, and what does no-free-lunch say you must pay for it?

<details>
<summary>Solution</summary>

(a) $\mathbb E[\bar y] = \theta$ and $\operatorname{Var}(\bar y) = \sigma^2/n = 4/4 = 1$. So

$$\operatorname{bias}(\hat\theta_c) = c\theta - \theta = (c-1)\theta, \qquad \operatorname{Var}(\hat\theta_c) = c^2\sigma^2/n = c^2 .$$

| $c$ | $\operatorname{bias}^2 = (c-1)^2\theta^2$ | $\operatorname{Var} = c^2$ | reducible $=$ sum |
|---|---|---|---|
| $1$ | $0$ | $1$ | $1.00$ |
| $0.8$ | $0.16$ | $0.64$ | $\mathbf{0.80}$ |
| $0.5$ | $1$ | $0.25$ | $1.25$ |

(Adding the irreducible $\sigma^2 = 4$ gives the expected squared error against a fresh $y_0$: $5.00$, $4.80$, $5.25$.)

(b) Minimise $g(c) = (c-1)^2\theta^2 + c^2 s$ with $s = \sigma^2/n = 1$. Then $g'(c) = 2(c-1)\theta^2 + 2cs = 0$ gives

$$c^* = \frac{\theta^2}{\theta^2 + \sigma^2/n} = \frac{4}{4+1} = 0.8, \qquad g(c^*) = \frac{\theta^2 s}{\theta^2+s} = 0.8 ,$$

matching the table. The unbiased choice $c=1$ is beaten by 20 percent of reducible error — the same "trade a little bias for a lot of variance" move that ridge makes in [2.3](02-03-ridge-regression-and-shrinkage.md), where $c^*$ reappears as a noise-to-signal ratio.

(c) Shrinking attacks **variance** (equivalently, [1.1](01-01-what-is-learning-loss-risk-and-erm.md)'s *estimation error*): the family $\{c\bar y\}$ with $c<1$ cannot chase the noise as far, which is exactly why $\operatorname{Var}$ falls from $1$ to $0.64$. **What NFL says you pay:** the reduction is bought with bias, and bias is not a fixed tax — it depends on the truth. Here $c=0.8$ helps because $\theta$ happens to be small relative to the noise; for $\theta$ large enough the same restriction is strictly harmful ($\operatorname{bias}^2$ grows like $\theta^2$ while the variance saving is capped at $s$). No-free-lunch is the general form of that observation: **every restriction that helps on some targets must hurt on others**, so there is no universally correct $c$, no universally correct $\lambda$, and no universally correct $\mathcal H$ — only one matched to a belief you brought with you.

</details>

## Connections

- **Backward:** this is the theorem behind [1.1](01-01-what-is-learning-loss-risk-and-erm.md)'s split of excess risk into *approximation* and *estimation* error — shrinking $\mathcal H$ trades one for the other, and NFL says you cannot drive both to zero for all targets at once. It is also the population-level statement of [1.2](01-02-the-bias-variance-decomposition.md)'s trade and of [1.3](01-03-overfitting-and-train-validation-test.md)'s selection bias: choosing among many candidates on the data you hold is a small, quantifiable version of choosing among all labellings with no data at all.
- **Forward:** the whole of Module 3 is the constructive answer. [3.1](03-01-the-pac-framework.md)'s definition fixes $\mathcal H$ *first* and only then quantifies over every $\mathcal D$ — that quantifier order exists precisely to dodge this theorem, and it is worth re-reading it with that in mind. [3.2](03-02-finite-classes-and-uniform-convergence.md) prices the bet at $\ln|\mathcal H|$ bits and [3.3](03-03-shattering-and-the-vc-dimension.md)–[3.4](03-04-vc-bounds-and-sample-complexity.md) at the VC dimension. [2.5](02-05-regularization-as-a-bayesian-prior.md) makes the bias fully explicit as a prior, and [5.5](05-05-why-does-deep-learning-generalize.md) asks the open version of this lesson's question: what inductive bias does an overparameterized network actually have, given that its hypothesis class can fit anything?
- **Sideways:** this is Hume's problem of induction with a sample-complexity bound attached — the argument that no finite experience licenses a claim about the unobserved, made into a theorem with a constant. The bit-counting reading of Example 2 is the minimum-description-length principle from [`information-theory`](../../information-theory/syllabus.md): a hypothesis class is a code, and a bet on structure is a bet that the truth has a short description. Its methodological cousin is the model-specification choice in [`econometrics`](../../econometrics/syllabus.md), where the assumption you cannot test from the data is called an identifying assumption rather than an inductive bias, and is argued for rather than cross-validated.
