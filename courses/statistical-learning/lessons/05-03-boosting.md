# Statistical Learning Theory · Lesson 5.3: Boosting

> ⏱ ~15 min · Module 5: Nonlinear and modern models · Builds on: [5.1 (decision trees)](05-01-decision-trees.md), [5.2 (bagging & random forests)](05-02-bagging-and-random-forests.md), [2.2 (surrogate losses)](02-02-logistic-regression-and-classification.md) · Unlocks: 5.5 (why does deep learning generalize?)

## Why this matters

AdaBoost, as it was first written down, is a recipe: reweight the data, refit a weak learner, give it a vote of $\frac12\ln\frac{1-\epsilon}{\epsilon}$, repeat. [`machine-learning` 2.7](../../machine-learning/lessons/02-07-boosting.md) runs that recipe by hand and you should have it in your fingers before reading on — **the weight update, the $\alpha_t$ formula and the numeric trace are all there, and this lesson does not repeat them.**

What the recipe does not tell you is *why any of it is the right thing to do*. Where does the $\frac12\ln$ come from? What is the algorithm minimising — is it minimising anything at all? And most awkwardly: boosting keeps improving on held-out data long after it has fitted the training set perfectly, which is not what [3.4](03-04-vc-bounds-and-sample-complexity.md)'s capacity story predicts.

Three answers, and they are this course's to give. There is also a nice piece of history attached: boosting was not invented to win competitions. It was invented to settle a **PAC** question from [3.1](03-01-the-pac-framework.md) — if a class is only *weakly* learnable (some learner beats chance by a hair, on every distribution), is it *strongly* learnable (error driven below any $\epsilon$)? Schapire's answer was yes, and the proof was an algorithm.

## The idea

Build the predictor as a **sum of small ones**, one term at a time, and never revisit a term you have already added:

$$F_T(x) \;=\; \alpha_1 h_1(x) + \alpha_2 h_2(x) + \dots + \alpha_T h_T(x), \qquad H(x) = \operatorname{sign} F_T(x).$$

That "never revisit" is precisely the [greedy discipline](../../algorithms/lessons/02-01-the-greedy-method-and-interval-scheduling.md) — each round solves a one-term problem, with everything before it frozen. In this setting it goes by the name **forward-stagewise additive modelling**, and it is a completely generic idea: pick a loss, fit one term at a time to reduce it.

Now pick the loss. On the **margin** $z = y F(x)$ — positive when correct, large when confidently correct, the same quantity [2.2](02-02-logistic-regression-and-classification.md) used to compare surrogates — take

$$\ell(z) = e^{-z}.$$

Everything follows from one line of algebra, so it is worth staring at:

$$e^{-y_i\left(F_{t-1}(x_i) + \alpha h(x_i)\right)} \;=\; \underbrace{e^{-y_i F_{t-1}(x_i)}}_{\text{fixed: a weight}} \cdot\; e^{-\alpha\, y_i h(x_i)}.$$

The exponential **factorises history into a multiplicative weight**. Everything the ensemble has done so far collapses into a single number $w_i$ per data point, and the round-$t$ problem is an ordinary weighted fitting problem. Nobody designed a reweighting scheme; the reweighting is what $e^{-z}$ *is*.

> **AdaBoost is not an algorithm with a mysterious update. It is greedy minimisation of exponential loss, and the update is a consequence.**

## The formal version

**Setup.** Labels $y \in \{-1,+1\}$. A base class $\mathcal H$ of $\{\pm1\}$-valued **weak learners** — depth-1 stumps, say. Forward-stagewise fitting is

$$(\alpha_t, h_t) \;=\; \arg\min_{\alpha \in \mathbb R,\; h \in \mathcal H} \; \sum_{i=1}^{n} L\bigl(y_i,\; F_{t-1}(x_i) + \alpha h(x_i)\bigr), \qquad F_t = F_{t-1} + \alpha_t h_t.$$

In words: at each round, add the single best term you can and freeze it forever.

### Result 1 — AdaBoost *is* forward-stagewise fitting of the exponential loss

**Theorem.** Take $L(y,F) = e^{-yF}$ and $F_0 = 0$. Then the forward-stagewise problem above is solved by exactly AdaBoost's weak learner, exactly AdaBoost's $\alpha_t$, and its weights are exactly AdaBoost's weights.

*Proof.* Write $w_i = e^{-y_i F_{t-1}(x_i)}$, which does not depend on $\alpha$ or $h$. The round-$t$ objective is

$$\Phi(\alpha, h) \;=\; \sum_{i=1}^{n} w_i\, e^{-\alpha y_i h(x_i)}.$$

Since $y_i h(x_i) \in \{-1,+1\}$, split the sum into the points $h$ gets right and the ones it misses:

$$\Phi(\alpha,h) \;=\; e^{-\alpha}\!\!\sum_{i:\, h(x_i) = y_i}\!\! w_i \;+\; e^{\alpha}\!\!\sum_{i:\, h(x_i) \ne y_i}\!\! w_i \;=\; e^{-\alpha}\sum_i w_i \;+\; \bigl(e^{\alpha} - e^{-\alpha}\bigr)\sum_i w_i \mathbf 1\{h(x_i) \ne y_i\}.$$

**Step 1: the choice of $h$.** Hold $\alpha > 0$ fixed. The first term does not involve $h$, and $e^{\alpha} - e^{-\alpha} > 0$, so minimising $\Phi$ over $h$ means minimising

$$\sum_i w_i \mathbf 1\{h(x_i) \ne y_i\},$$

the **weighted misclassification error** under the current weights — which is AdaBoost's rule for picking $h_t$, and notice it came out *independent of $\alpha$*, so the joint minimisation splits cleanly.

**Step 2: the choice of $\alpha$.** Normalise, $\epsilon_t = \sum_i w_i \mathbf 1\{h_t(x_i) \ne y_i\} / \sum_i w_i$. Dividing $\Phi$ by $\sum_i w_i$,

$$\phi(\alpha) \;=\; (1-\epsilon_t)\,e^{-\alpha} + \epsilon_t\, e^{\alpha}, \qquad \phi'(\alpha) = -(1-\epsilon_t)e^{-\alpha} + \epsilon_t e^{\alpha}.$$

Setting $\phi' = 0$ gives $e^{2\alpha} = (1-\epsilon_t)/\epsilon_t$, and $\phi'' = \phi > 0$ everywhere, so this is the unique minimum:

$$\boxed{\;\alpha_t \;=\; \tfrac12 \ln\frac{1 - \epsilon_t}{\epsilon_t}\;}$$

**Step 3: the weights.** Next round's weights are $e^{-y_i F_t(x_i)} = w_i\, e^{-\alpha_t y_i h_t(x_i)}$ — AdaBoost's multiplicative update, up to a normalising constant that cannot change either argmin. $\blacksquare$

**Why this is the payoff.** An algorithm you cannot interrogate becomes an *objective* you can. Three things immediately follow that were unavailable before.

**(a) The population minimiser, and what a boosting score means.** Minimise $\mathbb E[e^{-yF(x)} \mid x]$ over all $F$, with $\eta(x) = \Pr(y = 1 \mid x)$:

$$\frac{d}{dF}\Bigl(\eta e^{-F} + (1-\eta)e^{F}\Bigr) = 0 \;\;\Longrightarrow\;\; F^*(x) = \tfrac12 \ln\frac{\eta(x)}{1-\eta(x)}.$$

**Half the log-odds.** Two consequences: $\operatorname{sign} F^* = \operatorname{sign}(2\eta - 1)$ is the Bayes classifier, so exponential loss is [classification-calibrated](../reference.md#classification-calibration) — unlike the hinge ([4.4](04-04-support-vector-machines.md)) it does not throw the confidence away. And look again at $\alpha_t$: it is *the very same formula* with $\eta$ replaced by the weak learner's own weighted accuracy $1 - \epsilon_t$. The vote weight is the log-odds of being right.

**(b) Gradient boosting in one sentence.** Nothing above needed $L$ to be exponential. Swap in squared loss, or logistic loss, take a gradient step in function space instead of an exact line search, and you have gradient boosting — same skeleton, different loss (see [`machine-learning` 2.7](../../machine-learning/lessons/02-07-boosting.md)).

**(c) You can now ask about overfitting**, because you know what is being optimised. That is Result 3.

### Result 2 — training error falls exponentially in $T$

**Theorem.** After $T$ rounds, the training 0-1 error of $H = \operatorname{sign} F_T$ satisfies, with the **edge** $\gamma_t = \tfrac12 - \epsilon_t$,

$$\hat R_S(H) \;\le\; \prod_{t=1}^{T} 2\sqrt{\epsilon_t(1-\epsilon_t)} \;=\; \prod_{t=1}^{T}\sqrt{1 - 4\gamma_t^2} \;\le\; \exp\Bigl(-2\sum_{t=1}^{T}\gamma_t^2\Bigr).$$

In words: **if every round beats chance by any fixed margin, training error dies exponentially.**

*Proof.* Three moves, and the first is the one that matters.

1. **The surrogate dominates the thing you care about.** If $H$ is wrong at $x_i$ then $y_i F_T(x_i) \le 0$, so $e^{-y_i F_T(x_i)} \ge 1$; if $H$ is right the exponential is still positive. Hence $\mathbf 1\{H(x_i)\ne y_i\} \le e^{-y_i F_T(x_i)}$ pointwise, and averaging,
$$\hat R_S(H) \;\le\; \frac1n \sum_{i=1}^n e^{-y_i F_T(x_i)}.$$
2. **The right-hand side telescopes.** Let $W_t = \sum_i e^{-y_i F_{t-1}(x_i)}$ be the total unnormalised weight entering round $t$, so $W_1 = n$. By Step 2 of Result 1, $W_{t+1} = W_t\,\phi(\alpha_t)$, and substituting $e^{\alpha_t} = \sqrt{(1-\epsilon_t)/\epsilon_t}$,
$$\phi(\alpha_t) = (1-\epsilon_t)\sqrt{\tfrac{\epsilon_t}{1-\epsilon_t}} + \epsilon_t\sqrt{\tfrac{1-\epsilon_t}{\epsilon_t}} = 2\sqrt{\epsilon_t(1-\epsilon_t)}.$$
So $\hat R_S(H) \le W_{T+1}/n = \prod_t 2\sqrt{\epsilon_t(1-\epsilon_t)}$.
3. **Rewrite and bound.** With $\epsilon_t = \frac12 - \gamma_t$, $4\epsilon_t(1-\epsilon_t) = 1 - 4\gamma_t^2$; then $1-u \le e^{-u}$ at $u = 4\gamma_t^2$ and take square roots. $\blacksquare$

**Numbers.** At $\epsilon_t = 0.4$ (edge $\gamma = 0.1$) the per-round factor is $\sqrt{1-0.04} = 0.979796$ and the exponential relaxation is $e^{-0.02} = 0.980199$ — the two agree to three decimals, so the friendlier form costs almost nothing. After $T = 50$ rounds the exact product is $0.360397$ against the relaxed bound $0.367879$.

**This is Kearns and Valiant's question, answered.** "Weakly learnable" means some $h \in \mathcal H$ has $\epsilon_t \le \frac12 - \gamma$ *under every weighting of the data*; the bound then reads $\hat R_S(H) \le e^{-2\gamma^2 T}$, and $T \ge \ln n / (2\gamma^2)$ drives it below $1/n$, hence to exactly zero. Weak learnability implies strong learnability, constructively.

### Result 3 — why more rounds keep helping, and when they stop

Result 2 says nothing about *test* error, and here the trouble starts. The $T$-round ensemble lives in a class whose VC dimension grows roughly like $T \cdot d_{\mathrm{VC}}(\mathcal H)$ up to logs, so [3.4](03-04-vc-bounds-and-sample-complexity.md)'s bound gets **strictly worse every round**. And yet the Picture below — a real run — shows test error still falling at round 1200, having hit zero training error at round 282.

The accepted explanation is the [margin bound](../reference.md#margin-bound). Define the **normalised margin** of a training point,

$$\operatorname{marg}(x_i, y_i) \;=\; \frac{y_i \sum_{t} \alpha_t h_t(x_i)}{\sum_{t}\alpha_t} \;\in\; [-1, 1],$$

positive exactly when the vote is correct, and near $1$ when the vote is near-unanimous. Then (Schapire, Freund, Bartlett and Lee) for every $\theta > 0$, with probability $1-\delta$,

$$R(H) \;\lesssim\; \widehat{\Pr}\bigl[\operatorname{marg}(x,y) \le \theta\bigr] \;+\; \tilde O\!\left(\sqrt{\frac{d_{\mathrm{VC}}(\mathcal H)}{n\,\theta^{2}}}\right).$$

**The whole point is what is missing: $T$.** The capacity term involves only the *base* class and the margin — this is [4.3](04-03-maximum-margin-classifiers.md)'s $R^2/\gamma^2$ move again, capacity measured by margin rather than by dimension. And once training error is zero, the exponential loss is *still* strictly positive at every point and still falling, which it can only achieve by pushing margins up. So the algorithm goes on optimising a quantity the bound cares about long after the quantity you were watching flatlined.

**Two pieces of honesty.** First, this story is accepted but not complete — Breiman built an algorithm that maximises the *minimum* margin more aggressively than AdaBoost and found it generalised **worse**, so the minimum margin is not the right summary, and which functional of the margin distribution is remains open. In the run below the minimum normalised margin does climb (from $0.00005$ at round 282 to $0.0225$ at round 1200) but the *median* margin slips from $0.060$ to $0.044$ — the distribution does not simply translate rightward.

Second, and not subtle at all: **boosting does overfit, given label noise.** Exponential loss is unbounded on the wrong side — $e^{-z} \to \infty$ as $z \to -\infty$ — so a point with a wrong label, which no weak learner can ever get right, contributes a loss that grows geometrically and eventually dominates the objective. The ensemble spends its later rounds memorising a typo. This is the sharp contrast with [5.2](05-02-bagging-and-random-forests.md): bagging averages independently-fitted predictors, so one bad label perturbs the average by $O(1/n)$ and adding more members does not compound it, whereas here it compounds every round. **Bagging is noise-tolerant; boosting is not.** P3 makes this quantitative.

## Picture

![Training and test error of AdaBoost with decision stumps plotted against the number of boosting rounds on a logarithmic axis. Training error falls to zero at round 282 and stays there, while test error continues to fall from 0.240 to 0.219 over the following 900 rounds.](assets/05-03-fig1.svg)

A real run: 300 training points in $\mathbb R^{10}$, labels $y = \operatorname{sign}(\lVert x\rVert^2 - 9.34)$, stumps as the base class, 10,000 test points. Training error first touches zero at round **282** (and is permanently zero from round 348). Test error at that moment is $0.240$; it keeps falling to $0.219$ by round 1200.

Classical model selection says stop at 282: you have interpolated the training set, and every further round adds capacity. Doing so would cost you two points of accuracy. Note also the wobble in the blue curve — training error is **not** monotone, which is worth remembering when Result 2's bound *is*.

## Worked examples

**Example 1 (mechanical): one round of the stagewise minimisation.** Five points carrying current weights

$$w = (0.10,\; 0.30,\; 0.20,\; 0.15,\; 0.25), \qquad \textstyle\sum_i w_i = 1,$$

and the best available weak learner misses points 2 and 4. Then the correct and incorrect masses are

$$A = 0.10+0.20+0.25 = 0.55, \qquad B = 0.30 + 0.15 = 0.45 = \epsilon_t,$$

and the round objective from Result 1 is $\phi(\alpha) = 0.55\,e^{-\alpha} + 0.45\,e^{\alpha}$. Minimising,

$$\alpha_t = \tfrac12\ln\frac{0.55}{0.45} = \tfrac12 \ln \tfrac{11}{9} = 0.100335,$$

which a grid search over $\alpha \in [-0.5, 0.6]$ confirms to five decimals. The objective drops from $\phi(0) = 1$ to

$$\phi(\alpha_t) = 2\sqrt{0.45 \cdot 0.55} = 0.994987,$$

a reduction of **0.50 percent**. That is the honest scale of one round with a barely-better-than-chance learner: a half-percent bite out of the loss. Exponential decay of a tiny quantity is still slow, which is why boosting is run for hundreds of rounds and why the Picture's $x$-axis is logarithmic.

**Example 2 (why you'd care): a boosting score is half a log-odds.** Suppose at some $x$ the truth is $\eta(x) = \Pr(y=1\mid x) = 0.9$. Result 1(a) says the population-optimal score is

$$F^*(x) = \tfrac12\ln\frac{0.9}{0.1} = \tfrac12\ln 9 = 1.098612,$$

and the minimal achievable conditional loss is $2\sqrt{\eta(1-\eta)} = 0.6$. Invert the formula and you get the probability back:

$$\eta = \frac{1}{1 + e^{-2F^*}} = \frac{1}{1+e^{-2.197225}} = 0.9 .$$

So **the calibration map for a boosting score is $\sigma(2F)$, not $\sigma(F)$** — the factor 2 is not cosmetic, and forgetting it makes a well-fitted model look underconfident. Contrast [4.4](04-04-support-vector-machines.md), where the hinge's population minimiser is $\operatorname{sign}(2\eta - 1)$ and **no** monotone map can recover $\eta$, because the information was destroyed by the loss. Boosting is in better shape in principle. In practice its finite-$T$ scores are famously *over*confident, and Result 3 explains why: the algorithm's whole business after training error hits zero is inflating $|F|$.

## Watch out

- **You might think** AdaBoost minimises training error — **but actually** it minimises exponential loss, and only the *bound* $\prod_t 2\sqrt{\epsilon_t(1-\epsilon_t)}$ is guaranteed to fall every round. The 0-1 training error itself can sit flat or rise; in the Picture's run it reached zero at round 282 and was nonzero again at round 300. Judging a round by whether training error moved is judging the wrong quantity.
- **You might think** Result 3 shows boosting cannot overfit — **but actually** it shows that *one* obvious argument for overfitting (capacity grows with $T$) is not decisive. Boosting overfits reliably given mislabelled data, and no margin bound protects you: the empirical margin term $\widehat{\Pr}[\operatorname{marg} \le \theta]$ is exactly what a mislabelled point wrecks.
- **You might think** the weak-learning condition is nearly vacuous — **but actually** "$\epsilon_t \le \frac12 - \gamma$ for *every* weighting of the data" is a strong assumption about the pairing of base class and dataset, and Result 2 is worthless without it. It fails routinely: on an XOR-style target no stump beats chance at all ([`machine-learning` 2.5](../../machine-learning/lessons/02-05-decision-trees.md)), and near the end of a run on noisy data $\epsilon_t \to \frac12$ because the surviving weight sits on unlearnable points.

## One-liner

> AdaBoost is greedy stagewise fitting of an additive model under $e^{-yF}$ — the reweighting, the vote weights and the exponential error decay are all consequences of that one loss, including its fatal sensitivity to a wrong label.

## Problems

**P1 (🟢)** A stump family reliably achieves weighted error $\epsilon_t = 0.45$ on every round. (a) Give the per-round factor from Result 2 and the number of rounds needed to certify a training error below $0.01$. (b) Repeat using the relaxed form $e^{-2\gamma^2 T}$ and say how much the relaxation costs. (c) With $n = 500$ training points, how many rounds certify *exactly zero* training error? (d) A better stump family gives $\epsilon_t = 0.40$. By what factor does the round count for a $0.01$ certificate change, and why is that the factor you should have predicted?

**P2 (🟡)** Fix the weak learner $h_t$ and let $A$ and $B$ be the current weight on the points it gets right and wrong. (a) Minimise $\Phi(\alpha) = Ae^{-\alpha} + Be^{\alpha}$ over $\alpha \in \mathbb R$, proving the stationary point is the unique global minimum, and recover $\alpha_t = \frac12\ln\frac{1-\epsilon_t}{\epsilon_t}$. (b) Show the minimised value is $2\sqrt{\epsilon_t(1-\epsilon_t)}$ and that it is at most 1, with equality only at $\epsilon_t = 1/2$. (c) What does the minimisation return when $\epsilon_t > 1/2$, and what does it do when $\epsilon_t = 0$? Interpret both.

**P3 (🔴)** A point $i$ carries a **flipped label**, so every weak learner misses it. Work with the unnormalised exponential loss $u_i(T) = e^{-y_i F_T(x_i)}$, and assume $\epsilon_t = 0.45$ every round. (a) Show $u_i(T)$ grows geometrically and give the per-round factor; then show its *share* of the total exponential loss grows by $1/(2\epsilon_t)$ per round. (b) With $n = 500$ points of which 5 percent are mislabelled, find the round at which the mislabelled points hold 10 percent, and then 45 percent, of the total loss. Compare those round counts with your answer to P1(a) and say what the comparison means. (c) Name the structural property of $e^{-z}$ responsible, give a surrogate loss that lacks it, and explain — using [5.2](05-02-bagging-and-random-forests.md)'s account of what bagging averages — why the same 5 percent noise costs a random forest far less.

<details>
<summary>Solutions</summary>

**P1** (a) $\gamma_t = 0.5 - 0.45 = 0.05$, so the factor is

$$2\sqrt{0.45 \cdot 0.55} = \sqrt{1 - 4(0.05)^2} = \sqrt{0.99} = 0.9949874 .$$

Requiring $0.9949874^{\,T} \le 0.01$ gives $T \ge \ln(0.01)/\ln(0.9949874) = 916.42$, so $T = \mathbf{917}$ rounds (check: $0.9949874^{917} = 0.009971$).

(b) $e^{-2\gamma^2 T} = e^{-0.005T} \le 0.01$ gives $T \ge 921.03$, so $T = 922$. The relaxation costs **5 extra rounds out of 917**, about half a percent — which is why nobody bothers with the exact product form.

(c) Training error is always a multiple of $1/n = 0.002$, so anything strictly below $0.002$ is exactly zero. $T \ge \ln(0.002)/\ln(0.9949874) = 1236.70$, so $T = \mathbf{1237}$.

(d) At $\epsilon_t = 0.40$: factor $2\sqrt{0.24} = 0.9797959$ and $T \ge \ln(0.01)/\ln(0.9797959) = 225.62$, so $T = 226$. The ratio is $917/225.6 = 4.06$. Predictable: the relaxed bound needs $T \approx \ln(1/\text{target})/(2\gamma^2)$, so **the round count scales as $1/\gamma^2$** — doubling the edge from $0.05$ to $0.10$ quarters the work. Edge is worth far more than rounds.

**P2** (a) $\Phi'(\alpha) = -Ae^{-\alpha} + Be^{\alpha}$, which vanishes when $e^{2\alpha} = A/B$, i.e. $\alpha = \frac12\ln(A/B)$. And $\Phi''(\alpha) = Ae^{-\alpha} + Be^{\alpha} = \Phi(\alpha) > 0$ for all $\alpha$ whenever $A, B > 0$, so $\Phi$ is strictly convex and the stationary point is the unique global minimum. With weights normalised, $A = 1 - \epsilon_t$ and $B = \epsilon_t$, giving $\alpha_t = \frac12\ln\frac{1-\epsilon_t}{\epsilon_t}$.

(b) Substituting, $e^{-\alpha_t} = \sqrt{B/A}$ and $e^{\alpha_t} = \sqrt{A/B}$, so

$$\Phi(\alpha_t) = A\sqrt{B/A} + B\sqrt{A/B} = 2\sqrt{AB} = 2\sqrt{\epsilon_t(1-\epsilon_t)}.$$

By AM–GM, $2\sqrt{\epsilon(1-\epsilon)} \le \epsilon + (1-\epsilon) = 1$, with equality iff $\epsilon = 1 - \epsilon$, i.e. $\epsilon = 1/2$. So **every round with any edge strictly reduces the exponential loss, and a coin-flip learner reduces it by nothing** — which is Result 2 in miniature.

(c) If $\epsilon_t > 1/2$ then $A < B$ and $\alpha_t < 0$: the minimiser votes the learner **backwards**, which is correct — a learner reliably worse than chance is a learner reliably right after negation, and the loss still falls. If $\epsilon_t = 0$ then $B = 0$, $\Phi(\alpha) = Ae^{-\alpha}$ is strictly decreasing with infimum $0$ and no finite minimiser: $\alpha_t = +\infty$. Sensibly read, a perfect weak learner ends the argument — one term, infinite confidence, no further rounds. Practically this is the degenerate case implementations must special-case.

**P3** (a) If $i$ is missed at every round then $y_i h_t(x_i) = -1$ for all $t$, so $y_i F_T(x_i) = -\sum_{t\le T}\alpha_t$ and

$$u_i(T) = \exp\Bigl(\textstyle\sum_{t \le T}\alpha_t\Bigr), \qquad \frac{u_i(T)}{u_i(T-1)} = e^{\alpha_t} = \sqrt{\frac{1-\epsilon_t}{\epsilon_t}} = \sqrt{\tfrac{0.55}{0.45}} = 1.105542 .$$

Meanwhile the *total* loss shrinks by $2\sqrt{\epsilon_t(1-\epsilon_t)} = 0.994987$ per round (Result 2, move 2). So point $i$'s share grows by

$$\frac{e^{\alpha_t}}{2\sqrt{\epsilon_t(1-\epsilon_t)}} = \frac{1}{2\epsilon_t} = \frac{1}{0.9} = \frac{10}{9} = 1.11111$$

per round. (In normalised-weight language this is [`machine-learning` 2.7](../../machine-learning/lessons/02-07-boosting.md)'s $1/(2\epsilon_t)$ growth factor; here it drops out of the loss rather than the update, which is the point of Result 1.)

(b) Twenty-five mislabelled points start with a combined share $25/500 = 0.05$. After $T$ rounds the share is $0.05\,(10/9)^T$:

$$0.05\,(10/9)^{T} \ge 0.10 \iff T \ge \ln 2 / \ln(10/9) = 6.58 \;\Rightarrow\; T = \mathbf{7} \quad (\text{share } 0.1045),$$
$$0.05\,(10/9)^{T} \ge 0.45 \iff T \ge \ln 9 / \ln(10/9) = 20.85 \;\Rightarrow\; T = \mathbf{21} \quad (\text{share } 0.4570).$$

Against P1(a): the training-error certificate needed **917** rounds. So by round 21 — about 2 percent of the way to the guarantee — nearly half the objective is being spent on 5 percent of the data that is simply wrong, and every weak learner chosen from then on is chosen to fit typos. The theorem is still true; it is just certifying a training error that has stopped meaning anything, which is [1.1](01-01-what-is-learning-loss-risk-and-erm.md)'s warning in its sharpest form. (The growth is self-limiting — $\epsilon_t \ge$ the weight on the missed points, so $\epsilon_t = 0.45$ cannot persist much past round 21; see `machine-learning` 2.7's P2(c). That caps the weight, not the damage.)

(c) The property is that **$e^{-z}$ is unbounded as $z \to -\infty$**: a single point's loss can grow without limit, so it can capture an arbitrary fraction of a sum over $n$ points. Logistic loss $\ln(1 + e^{-z})$ grows only *linearly* as $z \to -\infty$, so a hopeless point's influence saturates instead of compounding — that is exactly the LogitBoost fix, and it is the same reason logistic regression is more robust to outliers than exponential-loss fitting.

Bagging: by [5.2](05-02-bagging-and-random-forests.md), each member is fitted **independently** to its own bootstrap replicate, so a mislabelled point appears in about $1 - (1-1/n)^n \approx 63$ percent of them and perturbs each fit by $O(1/n)$; the ensemble average of those perturbations does not grow with $B$, since averaging reduces variance and leaves the (bounded) bias where it was. There is no channel through which round $t$'s failure changes round $t+1$'s target — which is precisely the channel boosting is built out of. Same word "ensemble", opposite noise behaviour.

</details>

## Flashback

**From Lesson 5.1 (Decision trees):** boosting's usual base class is the **depth-1 tree** (a stump): pick one coordinate $j$ and a threshold $\theta$, predict $s$ for $x_j \le \theta$ and $-s$ otherwise, with $s \in \{-1,+1\}$.

(a) Prove that stumps on $\mathbb R^1$ have VC dimension exactly 2, both directions. (b) Prove that stumps on $\mathbb R^2$ have VC dimension exactly 3 — exhibit a shattered 3-point set, and for the upper bound count how many labellings of a 4-point set the class can possibly realise. (c) Boosting wants a base learner of *low* capacity and bagging wants one of *high* capacity. Justify both from the results of this lesson and [5.2](05-02-bagging-and-random-forests.md).

<details>
<summary>Solution</summary>

(a) *Lower bound.* Take $x_1 < x_2$. With $\theta < x_1$ both points get $-s$, giving the labellings $(-,-)$ and $(+,+)$ as $s$ varies; with $x_1 \le \theta < x_2$ they get $(s, -s)$, giving $(+,-)$ and $(-,+)$. All four, so some 2-set is shattered.

*Upper bound.* Take any $x_1 < x_2 < x_3$. A stump's label is constant on $\{x \le \theta\}$ and constant with the opposite sign above, so as a function of position it changes sign **at most once**. The labelling $(+,-,+)$ changes twice and is unrealisable. The argument used only the ordering, so it rules out *every* 3-set — which is what an upper bound requires. Hence $d_{\mathrm{VC}} = \mathbf 2$. (Enumeration confirms only 6 of the 8 labellings are reachable, the two missing ones being $(+,-,+)$ and $(-,+,-)$.)

(b) *Lower bound.* Take $A = (0,0)$, $B = (1,2)$, $C = (2,1)$. Sorted by the first coordinate the order is $A, B, C$; by the second it is $A, C, B$. Since a stump's positive set is a prefix or a suffix of the relevant order, coordinate 1 yields the positive sets
$$\varnothing,\; \{A\},\; \{A,B\},\; \{A,B,C\},\; \{B,C\},\; \{C\},$$
and coordinate 2 yields $\varnothing, \{A\}, \{A,C\}, \{A,B,C\}, \{B,C\}, \{B\}$. Together that is all $2^3 = 8$ subsets, so the set is shattered and $d_{\mathrm{VC}} \ge 3$.

*Upper bound.* Take any four points and fix a coordinate $j$. Sorting by $x_j$, a stump's positive set is a **prefix** (5 of them, sizes $0$ through $4$) or a **suffix** (5 more), and $\varnothing$ and the full set appear in both lists — so one coordinate realises at most $5 + 5 - 2 = 8$ labellings. Two coordinates realise at most $8 + 8 - 2 = \mathbf{14}$, since $\varnothing$ and the full set are shared across coordinates too. And $14 < 16$, so **no** 4-set can be shattered. Hence $d_{\mathrm{VC}} = \mathbf 3$. (A brute-force search over 20,000 random 4-point configurations found a maximum of exactly 14, so the count is tight.)

Notice this is a nice sanity check on [5.1](05-01-decision-trees.md)'s warning that VC dimension is not a parameter count: a stump on $\mathbb R^{d}$ carries a coordinate, a threshold and a sign, but the same counting argument gives $d_{\mathrm{VC}} = O(\log d)$ — capacity grows only logarithmically in the number of features.

(c) **Boosting wants low capacity.** Result 2 needs nothing more than an edge $\gamma_t > 0$, and the ensemble's own capacity is supplied by $T$ — you are *building* a rich class out of poor pieces, one term at a time. Hand boosting a fully grown tree instead and it achieves $\epsilon_1 \approx 0$ on the first round, $\alpha_1 \to \infty$ (P2(c)), and you are back to the single overfitted tree that [5.1](05-01-decision-trees.md) warned about, with the additive model contributing nothing. Stumps also keep the margin bound's $d_{\mathrm{VC}}(\mathcal H)$ term small, which is the only capacity term that survives in Result 3.

**Bagging wants high capacity.** By [5.2](05-02-bagging-and-random-forests.md), averaging removes variance and leaves bias exactly where it was — so the base learner must already be low-bias, which for trees means deep and unpruned, deliberately high-variance. Bagging a stump forest would average away noise you do not have and keep the bias that is actually hurting you.

**The one-line contrast:** boosting attacks bias by adding terms and therefore needs weak parts; bagging attacks variance by averaging and therefore needs strong ones. Which is why boss problem 5(b) can be answered from the defining equations rather than by taste.

</details>

## Connections

- **Backward:** the objective is a surrogate loss from [2.2](02-02-logistic-regression-and-classification.md) — exponential joins logistic and hinge, and Result 1(a) places it in the calibrated camp with logistic and against the hinge of [4.4](04-04-support-vector-machines.md). The base class is [5.1](05-01-decision-trees.md)'s trees, kept deliberately shallow; the "greedy, never revisited" discipline is [algorithms 2.1](../../algorithms/lessons/02-01-the-greedy-method-and-interval-scheduling.md); and the capacity story that rescues Result 3 is [4.3](04-03-maximum-margin-classifiers.md)'s margin, not [3.4](03-04-vc-bounds-and-sample-complexity.md)'s [VC dimension](../reference.md#vc-dimension) — a bound that grows with $T$ cannot explain a test error that falls with $T$.
- **Forward:** [5.5](05-05-why-does-deep-learning-generalize.md) is this lesson's puzzle at a larger scale — zero training error, enormous nominal capacity, and generalization anyway — and the margin story here is the first draft of the answer attempted there. Boss problem 5 asks you to say which term of [1.2](01-02-the-bias-variance-decomposition.md)'s [decomposition](../reference.md#bias-variance-decomposition) each ensemble attacks, and the two defining equations — an average of independent fits versus a stagewise sum on a convex loss — are what you argue from.
- **Sideways:** the additive-model skeleton is older and broader than boosting. Fit one term at a time on a chosen loss and you get generalized additive models in statistics, matching pursuit in signal processing, and gradient boosting in practice; the loss is the only thing that changes, and, as Result 3's noise caveat shows, the loss is also the only thing that determines how badly a wrong label can hurt you.
