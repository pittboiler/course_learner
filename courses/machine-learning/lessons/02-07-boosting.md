# Machine Learning · Lesson 2.7: Boosting

> ⏱ ~15 min · Module 2: Classification — margins, trees, and ensembles · Builds on: [2.5 (decision trees)](02-05-decision-trees.md), [2.6 (bagging and random forests)](02-06-bagging-and-random-forests.md) · Unlocks: [3.1 (naïve Bayes)](03-01-naive-bayes.md) and the gradient-boosted models that still win most tabular competitions

## Why this matters

Boosting began as a theory question — *if you have a learner that is only slightly better than a coin flip, can you build one that is arbitrarily good?* — and the answer turned out to be yes, constructively, with an algorithm you can run by hand on a napkin. AdaBoost is that algorithm, and its descendants (XGBoost, LightGBM) are still the default first thing to try on tabular data.

It is also the ensemble most people misunderstand, because it shares a word with the last lesson and shares nothing else. [Bagging](02-06-bagging-and-random-forests.md) trains many learners **in parallel on resampled data** and averages them, attacking **variance**. Boosting trains them **in sequence, each on the previous one's mistakes**, and attacks **bias**. Same noun, opposite mechanism, opposite failure mode: bagging shrugs off label noise, and boosting is the ensemble that noise hurts *most*. Knowing which one you are holding is the whole job.

## The idea

You are revising for an exam with a study group. After each mock, you re-weight your revision toward the questions the group got wrong; the next member studies that re-weighted syllabus. At the end you do not take a plain vote — you weight each member's answer by how well they did on the version of the syllabus they were handed.

That is AdaBoost, in full. Three moving parts:

- a **weak learner** — anything reliably better than chance on a weighted sample. Here, a [decision stump](../reference.md#decision-stump): a one-split tree, "predict $+1$ if $x < \theta$, else $-1$" (or its flip);
- a **weight** $w_i$ on each training point, starting uniform, rising on the points the ensemble keeps missing;
- a **vote weight** $\alpha_t$ on each round's learner, large when that learner did well.

The contrast with the last lesson, in one table:

| | bagging / forests | boosting |
|---|---|---|
| learners trained | in parallel, independently | in sequence, each on the previous residual mistakes |
| data seen by learner $t$ | a bootstrap resample | the *same* data, reweighted |
| base learner should be | low-bias, high-variance (deep trees) | high-bias, low-variance (stumps) |
| attacks | variance | bias |
| reorder the members? | yes, freely — they are exchangeable | **no** — round $t$ is defined by rounds $1..t-1$ |
| label noise | diluted by averaging | amplified, exponentially |

## The formal version

Data $(x_i, y_i)_{i=1}^n$ with $y_i \in \{-1,+1\}$; a weak-learner class $\mathcal{H}$ of functions $h: \mathcal{X} \to \{-1,+1\}$.

**[AdaBoost](../reference.md#adaboost).** Initialise $w_1(i) = 1/n$. For $t = 1, \dots, T$:

1. Fit $h_t \in \mathcal{H}$ minimising the **weighted error**
$$\epsilon_t \;=\; \sum_{i=1}^{n} w_t(i)\,\mathbb{1}\{h_t(x_i) \neq y_i\}.$$
2. Set the vote weight
$$\alpha_t \;=\; \tfrac12 \ln \frac{1-\epsilon_t}{\epsilon_t}.$$
3. Reweight and renormalise:
$$w_{t+1}(i) \;=\; \frac{w_t(i)\, e^{-\alpha_t y_i h_t(x_i)}}{Z_t}, \qquad Z_t = \sum_j w_t(j)\, e^{-\alpha_t y_j h_t(x_j)}.$$

Output

$$H(x) \;=\; \operatorname{sign}\Big(\sum_{t=1}^T \alpha_t h_t(x)\Big).$$

*In words:* find the learner that does best on the current weights, give it a vote proportional to how surprised you'd be by its success, then move weight onto whatever it got wrong.

**The shortcut that makes hand-tracing painless.** Substituting the chosen $\alpha_t$ into $Z_t$ collapses everything. Since $e^{\alpha_t} = \sqrt{(1-\epsilon_t)/\epsilon_t}$,

$$Z_t = (1-\epsilon_t)e^{-\alpha_t} + \epsilon_t e^{\alpha_t} = 2\sqrt{\epsilon_t(1-\epsilon_t)},$$

and the per-point multipliers become pure rationals:

$$\text{correct: } \frac{w_t(i)}{2(1-\epsilon_t)}, \qquad\qquad \text{wrong: } \frac{w_t(i)}{2\epsilon_t}.$$

**Invariant (worth memorising).** The total weight on the misclassified set after reweighting is $\epsilon_t \cdot \frac{1}{2\epsilon_t} = \tfrac12$. **Every round ends with the mass split exactly 50/50 between what that round's learner got right and what it got wrong** — which is the same as saying $h_t$ has weighted error exactly $1/2$ on $w_{t+1}$, so AdaBoost never picks the same learner twice in a row.

**What $\alpha$ does at the extremes.** $\alpha_t \to 0$ as $\epsilon_t \to 1/2$: a coin-flip learner gets no vote. $\alpha_t \to \infty$ as $\epsilon_t \to 0$: a perfect learner ends the argument. And $\epsilon_t > 1/2$ gives $\alpha_t < 0$, which is not a bug — it just votes the learner backwards.

**Training error falls exponentially.** The training error of $H$ is at most $\prod_t Z_t = \prod_t 2\sqrt{\epsilon_t(1-\epsilon_t)}$. Writing the **edge** $\gamma_t = \tfrac12 - \epsilon_t$,

$$\widehat{\text{err}}(H) \;\le\; \prod_{t=1}^{T}\sqrt{1 - 4\gamma_t^2} \;\le\; \exp\Big(-2\sum_{t=1}^{T}\gamma_t^2\Big).$$

*In words:* as long as every round beats chance by a fixed margin $\gamma$, training error dies like $e^{-2T\gamma^2}$. (The full proof is in [`statistical-learning`](../../statistical-learning/syllabus.md) — not yet built; stated here where it is used.)

**Why the update looks like that.** AdaBoost is exactly forward-stagewise fitting of the [exponential loss](../reference.md#exponential-loss) $L(y, F) = e^{-yF(x)}$: at each round it picks the $(\alpha, h)$ that most reduces $\sum_i e^{-y_i (F_{t-1}(x_i) + \alpha h(x_i))}$, holding all earlier terms fixed — a greedy, never-revisited choice in the sense of [algorithms 2.1](../../algorithms/lessons/02-01-the-greedy-method-and-interval-scheduling.md). And $w_t(i) \propto e^{-y_i F_{t-1}(x_i)}$ *is* the current exponential loss of point $i$. Swap in a different loss and a gradient step, and you have gradient boosting.

## Picture

![Three panels, one per AdaBoost round, each showing five points on a number line with marker area proportional to that point's weight, a coral vertical bar for the round's stump split, the true label above each point and the sign of the running ensemble below.](assets/02-07-fig1.svg)

Watch the mass move. Round 1 leaves everything uniform and misses $x = 2$; round 2 opens on that point holding half the weight, so the stump that fixes it wins even though it is a worse stump on the raw data. Round 3 opens with $x = 1$ carrying half the mass — the point round 2 broke — and the stump that rescues it is the one that finally makes all five signs agree with the labels.

## Worked examples

**Example 1 (mechanical): three rounds, by hand.** Five points at $x = 0,1,2,3,4$ with labels $+1, -1, +1, -1, -1$. The weak learners are stumps splitting between adjacent points, in either orientation.

First, the thing that makes the instance interesting: **no single stump does better than 4 out of 5.** The label pattern $+,-,+,-,-$ is not a threshold function, so the ensemble has to beat every one of its own members.

*Round 1, in full.* Weights are $w_1 = (\tfrac15,\tfrac15,\tfrac15,\tfrac15,\tfrac15)$. The stump $x < 0.5 \Rightarrow +1$ predicts $(+1,-1,-1,-1,-1)$, missing only $x = 2$, so

$$\epsilon_1 = \tfrac15, \qquad \alpha_1 = \tfrac12\ln\frac{4/5}{1/5} = \tfrac12\ln 4 = \ln 2 \approx 0.6931.$$

(The stump $x < 2.5 \Rightarrow +1$ ties at $1/5$; we take the first. Ties are common and harmless.) Reweighting with the rational multipliers: the four correct points each get $\tfrac{1/5}{2 \cdot 4/5} = \tfrac18$, and $x=2$ gets $\tfrac{1/5}{2\cdot 1/5} = \tfrac12$. So

$$w_2 = \big(\tfrac18, \tfrac18, \tfrac12, \tfrac18, \tfrac18\big), \qquad \textstyle\sum_i w_2(i) = \tfrac48 + \tfrac12 = 1. \ \checkmark$$

*The rest.* Same three steps twice more:

| $t$ | split | $\epsilon_t$ | $\alpha_t$ | $w_{t+1}$ | train err of $H$ |
|---|---|---|---|---|---|
| 1 | $x < 0.5 \Rightarrow +1$ | $1/5$ | $\tfrac12\ln 4 = 0.6931$ | $(\tfrac18,\tfrac18,\tfrac12,\tfrac18,\tfrac18)$ | $0.2$ |
| 2 | $x < 2.5 \Rightarrow +1$ | $1/8$ | $\tfrac12\ln 7 = 0.9730$ | $(\tfrac1{14},\tfrac12,\tfrac27,\tfrac1{14},\tfrac1{14})$ | $0.2$ |
| 3 | $x < 1.5 \Rightarrow -1$ | $3/14$ | $\tfrac12\ln\tfrac{11}{3} = 0.6496$ | $(\tfrac16,\tfrac7{22},\tfrac2{11},\tfrac16,\tfrac16)$ | $\mathbf{0.0}$ |

Every row was recomputed in exact fractions; each $w_{t+1}$ sums to 1, and each puts exactly $1/2$ on that round's misses, as the invariant demands. The final scores $F(x) = \sum_t \alpha_t h_t(x)$ are

$$F = (\,1.0165,\ -0.3698,\ 0.9294,\ -1.0165,\ -1.0165\,),$$

whose signs are $(+,-,+,-,-)$ — the labels exactly. Note that $x=1$ scrapes through at $-0.37$ while the outer points sit at $\pm 1.02$: the ensemble is confident where it was never challenged and marginal where it fought.

**Example 2 (why you'd care): how many rounds do you actually need?** Suppose you have $n = 10{,}000$ points and a stump family that reliably gets $\epsilon_t \le 0.4$, so the edge is $\gamma = 0.1$. Driving *training* error to zero means driving the bound below $1/n$ (error is a multiple of $1/n$, so anything under it is exactly 0):

$$e^{-2T\gamma^2} < \tfrac{1}{10^4} \;\Longleftrightarrow\; 2T(0.01) > \ln 10^4 = 9.2103 \;\Longleftrightarrow\; T > 460.5,$$

so $T = 461$ rounds suffice. Double the edge to $\gamma = 0.2$ and the requirement falls by a factor of four, to $T = 116$ — the bound is quadratic in the edge, which is why a *slightly* stronger base learner buys far more than a few extra rounds. Each round costs one pass to fit the stump and one to reweight, so this is $O(T n d)$ overall for $d$ features with presorted thresholds: linear in everything, and completely serial in $T$. **That serial dependence is boosting's real cost** — you cannot fit round 40 before round 39, whereas a 500-tree forest fits on 500 cores at once.

## Watch out

- **You might think** $\epsilon_t$ is the learner's ordinary error rate — **but actually** it is the *weighted* one, and the ranking of learners changes every round. In the trace, $x < 3.5 \Rightarrow +1$ has raw error $2/5$, worse than $x<0.5$'s $1/5$; but under $w_2$ it scores $1/4$ while $x<0.5$ scores $1/2$. A learner that looks mediocre on the raw data can be the best available pick at round $t$, and vice versa.
- **You might think** training error hitting zero means it is time to stop — **but actually** AdaBoost's *test* error often keeps improving for hundreds of rounds afterwards, because the ensemble keeps pushing the margins $y_i F(x_i)$ away from zero even when every sign is already right. This is not a licence to run forever: it holds for clean data, and it is exactly what fails under label noise. Choose $T$ by cross-validation ([4.1](04-01-model-selection-and-cross-validation.md)), not by the training error.
- **You might think** boosting is a robust default — **but actually** exponential loss punishes a badly-wrong point by $e^{|F|}$, so a **mislabelled** point gets weight multiplied by $1/(2\epsilon_t) > 1$ every single round it is missed, and the later learners spend themselves memorising a typo. This is the one clear place where [bagging](02-06-bagging-and-random-forests.md) wins outright. (Relatedly: the whole method rests on the assumption that *some* learner beats chance on *every* weight vector — an assumption, not a fact. Boss problem 2(c) makes it fail.)

## One-liner

> Bagging averages independent learners to kill variance; boosting chains dependent ones — each fit to the half of the weight the last one got wrong — to kill bias, and pays for it by taking every mislabelled point completely seriously.

## Problems

**P1 (🟢)** Six points at $x = 1,\dots,6$ with labels $+1,+1,-1,-1,+1,-1$; weak learners are stumps splitting between adjacent points, either orientation; weights start uniform. (a) Find the best stump and its weighted error $\epsilon_1$. (b) Give $\alpha_1$ in closed form and to four decimals. (c) Give $w_2$ as exact fractions and check it sums to 1. (d) How much of the total mass does one point now hold, and does that agree with the invariant?

**P2 (🟡)** A point $i$ is misclassified by the chosen learner in **every** round.

(a) Show that its weight is multiplied by exactly $e^{\alpha_t}/Z_t$ each round, and simplify that ratio to a function of $\epsilon_t$ alone. (b) With $n = 20$ points and $\epsilon_t = 0.4$ every round, give $w_{11}(i)/w_1(i)$ and the actual weight $w_{11}(i)$. (c) A colleague says "so with enough rounds one point can hold 99 percent of the weight." Show why $\epsilon_t = 0.4$ cannot in fact persist past round 10, and state the general ceiling on a single point's weight while $\epsilon_t < 1/2$.

**P3 (🔴)** You have $n = 200$ training points. An adversary flips the label of exactly one of them. You will fit (i) a 200-tree random forest and (ii) 300 rounds of AdaBoost on stumps.

(a) Predict which degrades more, and justify it in terms of *what each mechanism averages* — not by naming the loss functions. (b) Suppose the flipped point is misclassified every round with $\epsilon_t = 0.45$. After how many rounds does it hold at least 10 percent of the total weight? (c) Bound the flipped point's influence on the forest: how often does it even appear in a bootstrap sample, and why does adding more trees not make its effect worse? (d) Name one modification to AdaBoost that blunts the problem, and say which term in the update it changes.

<details>
<summary>Solutions</summary>

**P1** (a) Enumerate the ten stumps (five split points, two orientations). Their weighted errors, with all weights $1/6$:

| split | $\Rightarrow +1$ on the left | $\Rightarrow -1$ on the left |
|---|---|---|
| $x<1.5$ | $2/6$ | $4/6$ |
| $x<2.5$ | $\mathbf{1/6}$ | $5/6$ |
| $x<3.5$ | $2/6$ | $4/6$ |
| $x<4.5$ | $3/6$ | $3/6$ |
| $x<5.5$ | $2/6$ | $4/6$ |

The unique minimum is $x < 2.5 \Rightarrow +1$, predicting $(+1,+1,-1,-1,-1,-1)$ and missing only $x=5$. So $\epsilon_1 = 1/6$.

(b) The closed form and its value:

$$\alpha_1 = \tfrac12\ln\frac{5/6}{1/6} = \tfrac12 \ln 5 \approx 0.8047.$$

(c) Correct points: $\frac{1/6}{2 \cdot 5/6} = \frac{1}{10}$ each. The miss: $\frac{1/6}{2\cdot 1/6} = \frac12$. So

$$w_2 = \big(\tfrac1{10}, \tfrac1{10}, \tfrac1{10}, \tfrac1{10}, \tfrac12, \tfrac1{10}\big), \qquad 5\cdot\tfrac1{10} + \tfrac12 = 1. \ \checkmark$$

A cross-check via the exponential form:

$$Z_1 = 2\sqrt{\tfrac16 \cdot \tfrac56} = \tfrac{\sqrt5}{3} \approx 0.7454,$$

and $e^{-\alpha_1}/Z_1 = 0.6$, $e^{+\alpha_1}/Z_1 = 3$ — which times $1/6$ give $1/10$ and $1/2$, as above.

(d) $x=5$ holds $1/2$ of the mass. That is the invariant: the misclassified set always carries exactly $1/2$ after reweighting, and here the misclassified set is a single point. Round 2 will therefore be fought almost entirely over $x=5$.

**P2** (a) The update is

$$w_{t+1}(i) = w_t(i)\,e^{-\alpha_t y_i h_t(x_i)}/Z_t,$$

and a miss means $y_i h_t(x_i) = -1$, so the exponent is $+\alpha_t$. With $e^{\alpha_t} = \sqrt{(1-\epsilon_t)/\epsilon_t}$ and $Z_t = 2\sqrt{\epsilon_t(1-\epsilon_t)}$,

$$\frac{e^{\alpha_t}}{Z_t} = \frac{\sqrt{(1-\epsilon_t)/\epsilon_t}}{2\sqrt{\epsilon_t(1-\epsilon_t)}} = \frac{1}{2\epsilon_t}.$$

Since $\epsilon_t < 1/2$ this exceeds 1, so the weight grows **geometrically**, with ratio $1/(2\epsilon_t)$ per round.

(b) $\epsilon_t = 0.4$ gives ratio $1/0.8 = 1.25$. Over ten rounds (rounds 1 through 10, taking $w_1$ to $w_{11}$),

$$\frac{w_{11}(i)}{w_1(i)} = 1.25^{10} = 9.3132, \qquad w_{11}(i) = \tfrac{1}{20}\cdot 9.3132 = 0.4657.$$

One point out of twenty now holds 47 percent of the training mass.

(c) If point $i$ is misclassified at round $t$, then

$$\epsilon_t \;=\; \sum_{j \text{ misclassified}} w_t(j) \;\ge\; w_t(i)$$

— the weighted error includes $i$'s own weight. After ten rounds $w_{11}(i) = 0.4657 > 0.4$, so round 11 could not have $\epsilon_{11} = 0.4$ while still missing $i$; the assumption is self-contradicting. Round 10 is the last consistent one, since $w_{10}(i) = 0.3725 \le 0.4$.

The general ceiling: while $\epsilon_t < 1/2$ and $i$ is missed, $w_t(i) \le \epsilon_t < 1/2$. **No single point can hold half the weight and still be a "mistake" of a better-than-chance learner** — so 99 percent is impossible, and the growth self-limits near $1/2$. That is a bound on the *weight*, though, not on the damage: a point sitting at 45 percent of the mass has already bent every remaining round toward itself.

**P3** (a) **Boosting degrades more.** The mechanisms differ in what is being averaged. Bagging averages $B$ *independently perturbed fits of the same procedure*; the flipped point enters each tree only through its own bootstrap draw, and its effect on any one tree is confined to the leaf containing it — roughly an $O(1/n)$ perturbation that the average does nothing to amplify. Boosting averages *a sequence in which each term is chosen to correct the previous ones' errors*; a permanently-wrong point is precisely what the reweighting is designed to chase, so the flipped point does not get diluted — it gets **promoted**, and the later terms of the sum are increasingly about it.

(b) Ratio per round $= 1/(2 \cdot 0.45) = 10/9 \approx 1.1111$; start at $w_1 = 1/200 = 0.005$; want $0.005 \cdot (10/9)^T \ge 0.1$, i.e. $(10/9)^T \ge 20$:

$$T \;\ge\; \frac{\ln 20}{\ln(10/9)} = \frac{2.9957}{0.10536} = 28.43 \;\Longrightarrow\; T = 29.$$

(Check: $0.005 \cdot (10/9)^{28} = 0.0955$, $0.005\cdot(10/9)^{29} = 0.1062$. ✓) Twenty-nine rounds out of three hundred, on the least aggressive reweighting the algorithm permits — so for nine tenths of the run, one typo owns a tenth of the training set.

(c) A given point is *in* a bootstrap sample with probability $1 - (1-1/n)^n$; at $n=200$ that is $1 - 0.3670 = 0.6330$ (the familiar $1 - e^{-1} \approx 0.632$). So about 63 percent of trees see it at all, once or twice; the other 37 percent are trained without it — and those are exactly the trees for which it is an out-of-bag point. Adding trees does not worsen its effect because each tree is fit **independently of the others**: the flipped point's expected contribution to the averaged prediction is the same for $B=10$ and $B=10{,}000$. More trees reduce the *variance* of the average, not the *bias* the bad label induces — and that bias is $O(1/n)$, bounded, and non-compounding. In boosting the analogous quantity compounds by $1/(2\epsilon_t)$ per round.

(d) Any of:
- **Shrinkage**: use $\nu\alpha_t$ with $\nu \approx 0.1$ instead of $\alpha_t$ — changes the vote weight, hence the exponent in the reweighting, so weights move a tenth as fast per round;
- **Swap the loss**: LogitBoost / gradient boosting with the logistic loss of [1.5](01-05-logistic-regression-and-classification.md), whose penalty grows *linearly* rather than exponentially in $-yF$ — this changes $w_t(i) \propto e^{-y_iF(x_i)}$ to a bounded quantity, and is the standard fix;
- **Cap or clip the weights**, or subsample rows per round (stochastic gradient boosting), which changes $Z_t$'s normalisation and breaks the deterministic chase.

Early stopping by cross-validation is good practice but is a mitigation of the symptom rather than a change to the update.

</details>

## Flashback

**From Lesson 2.6 (Bagging and random forests):** Averaging $B$ identically distributed trees with pairwise correlation $\rho$ and individual variance $\sigma^2$ gives an ensemble variance of $\rho\sigma^2 + \frac{1-\rho}{B}\sigma^2$. Take $\rho = 0.4$.

(a) Give the variance at $B = 25$ and at $B = 50$, as multiples of $\sigma^2$. (b) How large must $B$ be for the ensemble variance to sit within 5 percent of its $B \to \infty$ floor? (c) You want to *halve* the $B=25$ variance. Can more trees do it? If not, what value of $\rho$ would?

<details>
<summary>Solution</summary>

(a) At $B = 25$ and $B = 50$:

$$0.4 + \tfrac{0.6}{25} = 0.424, \qquad 0.4 + \tfrac{0.6}{50} = 0.412,$$

both as multiples of $\sigma^2$. Doubling the forest bought 1.2 percent of $\sigma^2$.

(b) The floor is $\rho\sigma^2 = 0.4\sigma^2$; "within 5 percent" means the second term is at most $0.05 \times 0.4 = 0.02$:

$$\frac{0.6}{B} \le 0.02 \;\Longrightarrow\; B \ge 30.$$

Thirty trees. Everything past that is buying a term that is already spent.

(c) **No.** The target is $0.212\sigma^2$, which is below the floor $0.4\sigma^2$ — and $B \to \infty$ can only reach the floor, never pass it. The only lever is $\rho$. Solving $\rho + \frac{1-\rho}{25} = 0.212$:

$$\rho\Big(1 - \tfrac{1}{25}\Big) = 0.212 - 0.04 = 0.172 \;\Longrightarrow\; \rho = \frac{0.172}{0.96} = \mathbf{0.1792}.$$

(Check: $0.1792 + 0.8208/25 = 0.1792 + 0.0328 = 0.212$. ✓) Which is what feature subsampling is *for*: $\rho$, not $B$, is the binding constraint in any forest worth building.

**The contrast in one sentence:** a forest's trees are interchangeable — you can shuffle them, drop half, or fit them on separate machines, and the ensemble is the same object — whereas a boosted sequence is **ordered and non-commutative**, because $h_t$ is defined by the weights that rounds $1$ through $t-1$ produced; delete round 2 from the trace above and rounds 3 onward are not merely weaker, they are undefined.

</details>

## Connections

- **Backward:** the base learner is the depth-1 case of [2.5](02-05-decision-trees.md)'s recursive partitioning, deliberately crippled — boosting wants *high* bias per member, the opposite of what [2.6](02-06-bagging-and-random-forests.md) wants, and the [bias–variance](01-02-generalization-and-the-bias-variance-tradeoff.md) frame is what makes that sound sensible rather than contradictory. The forward-stagewise view is coordinate-wise greedy descent on a convex loss, the same object as [1.6](01-06-gradient-descent-for-learning.md) with a peculiar step rule.
- **Forward:** [3.1](03-01-naive-bayes.md) turns to a generative classifier and gives up the reweighting story entirely; [4.1](04-01-model-selection-and-cross-validation.md) supplies the only honest way to choose $T$. Gradient boosting — same skeleton, arbitrary differentiable loss, trees instead of stumps — is where this leads in practice, and the margin theory that explains why over-training often helps lives in [`statistical-learning`](../../statistical-learning/syllabus.md) (not yet built).
- **Sideways:** "fit the residual of what you have so far" is the same move as boosted regression trees in econometrics and as successive-approximation schemes in numerical analysis; and the exponential-loss view makes AdaBoost a sibling of the logistic fit in [1.5](01-05-logistic-regression-and-classification.md), differing only in how harshly it prices a confident mistake. Stacking many such stagewise corrections with a differentiable loss and learned features is the doorway to [`deep-learning`](../../deep-learning/syllabus.md), previewed in [4.4](04-04-a-taste-of-neural-networks.md).
