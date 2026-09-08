# Machine Learning · Lesson 3.1: Naïve Bayes

> ⏱ ~15 min · Module 3: Probabilistic and unsupervised learning · Builds on: [1.5 (logistic regression)](01-05-logistic-regression-and-classification.md), [2.7 (boosting)](02-07-boosting.md) · Unlocks: 3.2 (PCA), 3.5 (mixtures)

## Why this matters

Every classifier so far has been **discriminative**: draw a boundary, tune it until it separates. Naïve Bayes is the first **generative** one — it models how each class *produces* data, then inverts with Bayes' rule to ask which class most likely produced the thing in front of you. That change of direction is what makes latent-variable modelling (3.5, 3.6) possible at all, so it is worth meeting on the easiest possible example.

It is also the model that most repays being taken apart. Its central assumption is *known to be false* on essentially every dataset it is used on, and it works anyway. Understanding exactly which of its outputs survive that falsehood and which are destroyed by it is the most transferable thing in this lesson — and the answer is sharp: **the argmax usually survives; the probabilities usually do not.**

Practically, it trains in one pass over the data, costs $O(np)$, and needs no optimizer. That is why it is still the baseline you have to beat before anyone will let you fit something expensive.

## The idea

You want a spam filter. The discriminative move ([1.5](01-05-logistic-regression-and-classification.md)) is to score each email with a weighted sum of its words and threshold. The generative move is different: **learn what spam looks like and what ham looks like, then ask which one is more likely to have written this email.**

Formally you want $P(\text{spam} \mid \text{email})$, and Bayes' rule turns it into things you can count:

> posterior $\propto$ prior $\times$ likelihood.

The prior is how often spam arrives at all. The likelihood is how likely *this exact email* is under the spam model. And there is the wall: an email is a specific sequence of words drawn from a vocabulary of thousands, so $P(\text{email} \mid \text{spam})$ is one number out of astronomically many, and you have a few thousand training emails.

The naïve fix is to pretend the words are independent **given the class**:

$$P(w_1,\dots,w_m \mid \text{spam}) \;=\; \prod_{j=1}^{m} P(w_j \mid \text{spam}).$$

Now you need one number per word per class — a table you can fill by counting. The assumption is plainly false: "free" and "money" travel together in spam, "meeting" and "agenda" travel together in ham. Naïve Bayes does not care. It counts, multiplies, and picks the larger product.

Two consequences of that product are what the rest of the lesson is about. **One zero factor kills the whole product.** And **duplicated evidence gets counted twice.**

## The formal version

Data $x = (x_1,\dots,x_p)$, class label $y \in \{1,\dots,K\}$. Write $\pi_k = P(y=k)$ for the class **prior**. [Bayes' rule](../reference.md#bayes-rule) ([prob-stat-refresher 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md)) gives the posterior

$$P(y=k \mid x) \;=\; \frac{\pi_k\, P(x \mid y=k)}{\sum_{m=1}^{K} \pi_m\, P(x \mid y=m)}.$$

*In words:* how plausible class $k$ is after seeing $x$, relative to every other class.

**The MAP decision rule.** Predict the class with the largest posterior. The denominator is the same for every $k$, so it never affects the argmax and is dropped:

$$\hat y(x) \;=\; \arg\max_{k}\; \pi_k\, P(x \mid y=k).$$

*In words:* pick the class whose prior-times-likelihood is biggest. (**Stated, proof cited:** the rule $\arg\max_k P(y=k\mid x)$ is the *Bayes-optimal* classifier — no function of $x$ achieves lower 0–1 risk, and its risk is the irreducible **Bayes error**. Proved in [`statistical-learning`](../../statistical-learning/syllabus.md) (not yet built; stated here where it is used). Note what this does *not* say: optimality holds for the **true** posterior, and naïve Bayes plugs in an approximate one.)

**The naïve assumption.** The features are conditionally independent given the class, so $P(x\mid y=k) = \prod_j P(x_j \mid y=k)$ and

$$\hat y(x) \;=\; \arg\max_{k}\; \pi_k \prod_{j=1}^{p} P(x_j \mid y=k).$$

Note *conditionally* independent — independent **within each class**, not overall. Spam words are wildly correlated across the whole corpus even when the assumption holds inside each class.

**Work in logs.** A 200-word email multiplies 200 numbers below $1/20$; in float64 that underflows to exactly zero long before the email ends. The argmax is unchanged by a monotone transform, so score with

$$s_k(x) \;=\; \log \pi_k + \sum_{j=1}^{p} \log P(x_j \mid y=k).$$

**Fitting the tables.** For word counts (*multinomial* naïve Bayes), let $c_{w,k}$ be the number of times word $w$ appears across all class-$k$ training documents, $n_k = \sum_{w} c_{w,k}$ the class's total token count, and $V$ the vocabulary. The maximum-likelihood estimate is $c_{w,k}/n_k$ — and it is zero for any word never seen in class $k$, which is fatal. [**Laplace smoothing**](../reference.md#laplace-smoothing) adds a pseudocount $\alpha > 0$ to every cell:

$$\hat P(w \mid k) \;=\; \frac{c_{w,k} + \alpha}{n_k + \alpha\,|V|}.$$

*In words:* pretend you saw every word $\alpha$ extra times in every class. The denominator matches so the estimates still sum to 1 over $V$. $\alpha = 1$ is the default; $\alpha \to 0$ recovers the unsmoothed estimate and the failure below.

**Continuous features** (*Gaussian* naïve Bayes): fit a per-class, per-feature mean and variance and use

$$P(x_j\mid y=k) \;=\; \frac{1}{\sqrt{2\pi}\,\sigma_{jk}}\exp\!\left(-\frac{(x_j-\mu_{jk})^2}{2\sigma_{jk}^2}\right)$$

([prob-stat-refresher 2.3](../../prob-stat-refresher/lessons/02-03-continuous-distributions.md)).

**Cost.** Training is one pass to accumulate counts: $O(np)$ time, $O(Kp)$ memory, no iteration and no learning rate ([algorithms 1.1](../../algorithms/lessons/01-01-asymptotic-notation.md) for the notation). Prediction is $O(Kp)$ additions. Nothing in this course is cheaper.

## Picture

![Two bell curves on a shared horizontal axis, one centred at minus one and one centred at plus two, each scaled by its class prior. Vertical lines mark where the curves cross, at 0.50 with equal priors and at 0.87 when the second class's prior is cut to one quarter.](assets/03-01-fig1.svg)

This is Gaussian naïve Bayes with one feature — with a single feature the independence assumption is vacuous, so what you are looking at is the *decision rule* stripped of the naïvety. Each curve is $\pi_k \cdot P(x\mid y=k)$ — prior times density — and the boundary is exactly where they cross, because that is where the two scores tie.

With a shared variance $\sigma^2$ the crossing point has a closed form:

$$x^{*} \;=\; \frac{\mu_0+\mu_1}{2} \;+\; \frac{\sigma^2}{\mu_1-\mu_0}\,\log\frac{\pi_0}{\pi_1}.$$

At $\mu_0 = -1$, $\mu_1 = 2$, $\sigma = 1$ and equal priors the log term vanishes and the boundary is the midpoint, $0.5$. Cut class 1's prior to $1/4$ and the term becomes $\log 3 / 3 = 0.366$, sliding the boundary right to $0.866$ — the rarer class has to clear a higher bar. **The prior is not decoration; it moves the boundary by a computable amount.** Note also what happens to the quadratic terms: with a shared variance the $x^2$ pieces cancel between the two classes, leaving a log-odds that is *linear* in $x$. So shared-variance Gaussian naïve Bayes is a linear classifier fitting the same boundary shape as [1.5](01-05-logistic-regression-and-classification.md) by a completely different route. Let the variances differ and the cancellation fails, and the boundary becomes quadratic.

## Worked examples

### Example 1 (mechanical): the zero-frequency failure, and the fix

The vocabulary is

$$V = \{\text{free},\ \text{click},\ \text{offer},\ \text{meeting},\ \text{deadline}\}, \qquad |V| = 5.$$

Ten training emails — 4 spam, 6 ham — give priors $\pi_{\text{spam}} = 2/5$, $\pi_{\text{ham}} = 3/5$ and these token counts:

| word | spam count | ham count |
|---|---|---|
| free | 6 | **0** |
| click | 5 | 1 |
| offer | 4 | 3 |
| meeting | **0** | 7 |
| deadline | **0** | 4 |
| **total $n_k$** | **15** | **15** |

Classify the new email **"free click meeting"**.

**Unsmoothed ($\alpha = 0$).** Multiply the three raw frequencies:

$$\text{spam}:\quad \tfrac{2}{5}\cdot\tfrac{6}{15}\cdot\tfrac{5}{15}\cdot\tfrac{\mathbf{0}}{15} \;=\; 0$$

$$\text{ham}:\quad \tfrac{3}{5}\cdot\tfrac{\mathbf{0}}{15}\cdot\tfrac{1}{15}\cdot\tfrac{7}{15} \;=\; 0$$

Spam is vetoed by *meeting*, never seen in spam; ham is vetoed by *free*, never seen in ham. Both scores are exactly zero, so the posterior is $0/0$: **undefined**. The classifier does not merely guess badly, it has no output. And notice the mechanism — the email is *obviously* a mix of the two, which is precisely why each class has a word that vetoes it. Two counting accidents in a table of ten numbers were enough.

**Smoothed ($\alpha = 1$).** Every denominator becomes $15 + 1\cdot 5 = 20$, every numerator gains 1:

$$\text{spam}:\quad \tfrac{2}{5}\cdot\tfrac{7}{20}\cdot\tfrac{6}{20}\cdot\tfrac{1}{20} \;=\; \tfrac{21}{10000} \;=\; 0.00210$$

$$\text{ham}:\quad \tfrac{3}{5}\cdot\tfrac{1}{20}\cdot\tfrac{2}{20}\cdot\tfrac{8}{20} \;=\; \tfrac{12}{10000} \;=\; 0.00120$$

So $\hat y = \text{spam}$, with posterior $21/33 = 7/11 \approx 0.636$.

In log space, which is how you would actually compute it:

| | $\log \pi_k$ | free | click | meeting | total |
|---|---|---|---|---|---|
| spam | $-0.9163$ | $-1.0498$ | $-1.2040$ | $-2.9957$ | $\mathbf{-6.1658}$ |
| ham | $-0.5108$ | $-2.9957$ | $-2.3026$ | $-0.9163$ | $-6.7254$ |

Spam wins by $0.5596$ in log score, and $e^{0.5596} = 1.75 = 21/12$ — the same likelihood ratio as before. Smoothing did not invent evidence; it replaced two vetoes with two small penalties ($\log(1/20) \approx -3.0$ each) and let the rest of the email speak.

### Example 2 (why you'd care): the duplicated feature

Two classes with **equal priors**. One informative binary feature $A$ with

$$P(A{=}1 \mid C_1) = \tfrac45, \qquad P(A{=}1 \mid C_0) = \tfrac{3}{10},$$

and a second feature $B$ that is an **exact copy** of $A$ — a duplicated column, a unit written twice, a word and its plural. Observe $A = B = 1$.

**The truth.** $B$ carries no information beyond $A$, so observing both is observing $A=1$:

$$P(C_1 \mid A{=}1) = \frac{4/5}{4/5 + 3/10} = \frac{8}{11} \approx 0.727.$$

**Naïve Bayes.** It multiplies both factors as if they were separate evidence:

$$\frac{(4/5)^2}{(4/5)^2 + (3/10)^2} = \frac{0.64}{0.73} = \frac{64}{73} \approx 0.877.$$

Observing $A = B = 0$ instead:

$$\text{truth } \frac{1/5}{1/5+7/10} = \frac29 \approx 0.222, \qquad \text{naïve } \frac{(1/5)^2}{(1/5)^2+(7/10)^2} = \frac{4}{53} \approx 0.076.$$

**Both probabilities are badly wrong. Both argmaxes are right.** That is the whole story of naïve Bayes in two lines, and the reason it is a decent classifier and a terrible probability estimate.

The mechanism is exact, and worth stating once in [log-odds](../reference.md#log-odds):

$$\log\frac{P(C_1\mid x)}{P(C_0\mid x)} \;=\; \log\frac{\pi_1}{\pi_0} \;+\; \sum_{j}\log\frac{P(x_j\mid C_1)}{P(x_j\mid C_0)}.$$

Duplicating a feature $k$ times multiplies **its** term by $k$ while leaving the prior term alone. Here $\log(0.8/0.3) = 0.9808$, doubled to $1.9616$, and $1/(1+e^{-1.9616}) = 0.877$. With equal priors the prior term is $0$, the total is simply scaled by $k > 0$, and **scaling cannot change a sign** — which is exactly why the argmax survived. Break that condition and it will not; see P2.

## Watch out

- **You might think** a zero count means "impossible" — **but actually** it means "not observed in this sample," and treating the two as the same is what makes one unlucky word veto an entire document. This is a small-sample artefact, not a fact about the world, and $\alpha$ is the knob that says so. It is also a hyperparameter like any other: pick it by cross-validation ([4.1](04-01-model-selection-and-cross-validation.md)), not by habit.
- **You might think** a naïve-Bayes output of $0.877$ is a probability — **but actually** it is a *rank*. Because correlated features are counted once each, the evidence term of the log-odds is inflated by roughly the number of redundant copies, and scores pile up near 0 and 1. Anything that only reads the ordering (ROC, AUC — [4.2](04-02-classification-metrics.md)) is fine; anything that reads the number (a threshold, an expected cost, a figure you report to someone) is not.
- **You might think** adding more features can only help, since each one adds evidence — **but actually** adding a near-copy of a feature you already have adds *no* information and a full extra vote. Under naïve Bayes, feature redundancy is not neutral, it is actively harmful to the posterior, which is the opposite of the intuition trees ([2.5](02-05-decision-trees.md)) or ridge ([1.4](01-04-regularization-ridge-and-lasso.md)) train you to have.

## One-liner

> Count, multiply, argmax — and remember that the multiplying is a lie: one zero count vetoes a whole document, and every duplicated feature votes twice, so trust naïve Bayes' ranking and never its probabilities.

## Problems

**P1 (🟢)** Using Example 1's table and $\alpha = 1$, classify the email **"click offer deadline"** in log space. Give the two log scores, the winner, and the posterior as an exact fraction. Then say what the *unsmoothed* ($\alpha = 0$) classifier would have done with this email, and why that case is less alarming than Example 1's.

**P2 (🟡)** In Example 2 the duplicated feature wrecked the probabilities but left the argmax alone. Construct a two-class, one-genuine-feature instance where duplicating that feature **flips the argmax** — give the priors, the two class-conditional probabilities, the observed value, and both decisions. Then state, in terms of the log-odds identity above, exactly what has to be true for a flip to be possible.

**P3 (🔴)** You need a *calibrated* probability: a downstream cost calculation acts whenever $P(C_1\mid x) > 0.8$. On the Example 2 point, naïve Bayes reports $0.877$ and the truth is $0.727$. (a) What does the system do, and what should it have done? (b) The distortion is not a constant offset — say what it actually is, and compute the naïve-Bayes score that honestly corresponds to a true probability of $0.8$ under the same duplication. (c) Name two fixes and say which one you would ship.

<details>
<summary>Solutions</summary>

**P1** With $\alpha = 1$ every denominator is $15 + 5 = 20$. Smoothed counts: click $\to 6$ (spam) and $2$ (ham); offer $\to 5$ and $4$; deadline $\to 1$ and $5$.

| | $\log\pi_k$ | click | offer | deadline | total |
|---|---|---|---|---|---|
| spam | $-0.9163$ | $\log\tfrac{6}{20}=-1.2040$ | $\log\tfrac{5}{20}=-1.3863$ | $\log\tfrac{1}{20}=-2.9957$ | $-6.5023$ |
| ham | $-0.5108$ | $\log\tfrac{2}{20}=-2.3026$ | $\log\tfrac{4}{20}=-1.6094$ | $\log\tfrac{5}{20}=-1.3863$ | $\mathbf{-5.8091}$ |

**Ham wins.** Exactly:

$$\text{spam}:\quad \tfrac25\cdot\tfrac{6}{20}\cdot\tfrac{5}{20}\cdot\tfrac{1}{20} \;=\; \tfrac{3}{2000} \;=\; 0.0015$$

$$\text{ham}:\quad \tfrac35\cdot\tfrac{2}{20}\cdot\tfrac{4}{20}\cdot\tfrac{5}{20} \;=\; \tfrac{3}{1000} \;=\; 0.0030$$

$$P(\text{ham}\mid D) = \frac{0.0030}{0.0045} = \frac{2}{3}, \qquad P(\text{spam}\mid D) = \frac13.$$

(Check: the log gap is $-5.8091 - (-6.5023) = 0.6932 = \log 2$, and a likelihood ratio of 2 gives $2/3$ against $1/3$. ✓)

**At $\alpha = 0$:** *deadline* has count 0 in spam, so the spam score is 0; every ham factor is nonzero, so ham scores

$$\tfrac35\cdot\tfrac{5}{15}\cdot\tfrac{3}{15}\cdot\tfrac{4}{15} \;=\; \tfrac{4}{1875} \;>\; 0$$

and ham wins.

**Why this is less alarming:** the posterior is defined ($1$ for ham, $0$ for spam) and the answer agrees with the smoothed one. The failure is quieter but the same in kind — the decision was made *entirely* by one veto, not by weighing three words, and the reported certainty of exactly $1$ is nonsense. Example 1's version is the loud symptom of a bug that is present here too.

**P2** Take priors $\pi_1 = \tfrac34$, $\pi_0 = \tfrac14$, one binary feature $A$ with

$$P(A{=}1\mid C_1) = \tfrac15, \qquad P(A{=}1\mid C_0) = \tfrac25,$$

and $B$ an exact copy of $A$. Observe $A = B = 1$.

*Truth* (observing both is observing $A=1$):

$$\pi_1 P = \tfrac34\cdot\tfrac15 = \tfrac{3}{20}, \qquad \pi_0 P = \tfrac14\cdot\tfrac25 = \tfrac{1}{10} = \tfrac{2}{20}.$$

$3/20 > 2/20$, so the truth says $\mathbf{C_1}$, with $P(C_1\mid x) = 3/5 = 0.6$.

*Naïve Bayes* (squares each likelihood):

$$\tfrac34\cdot\left(\tfrac15\right)^2 = \tfrac{3}{100}, \qquad \tfrac14\cdot\left(\tfrac25\right)^2 = \tfrac{4}{100}.$$

$3/100 < 4/100$, so naïve Bayes says $\mathbf{C_0}$, with $P(C_1\mid x) = 3/7 \approx 0.429$. **The argmax flipped.**

**The condition, exactly.** Write $a = \log(\pi_1/\pi_0)$ for the prior log-odds and $b = \log\frac{P(x_j\mid C_1)}{P(x_j\mid C_0)}$ for the genuine feature's evidence. The true rule is $\operatorname{sign}(a+b)$; duplicating the feature $k$ times gives $\operatorname{sign}(a+kb)$. A flip at $k=2$ needs $a+b$ and $a+2b$ to have opposite signs, i.e.

$$-b < a < -2b \quad (\text{for } b<0), \qquad \text{or the mirror } -2b < a < -b \ (b>0).$$

Here $a = \log 3 = 1.0986$ and $b = \log\tfrac12 = -0.6931$, and indeed $0.6931 < 1.0986 < 1.3863$. ✓ ($a+b = 0.4055 > 0$; $a+2b = -0.2877 < 0$.)

**In words: the prior and the evidence must point in opposite directions, and the prior must be winning — but by less than one extra copy of the evidence would cost it.** Two corollaries worth keeping. With **equal priors** $a = 0$, so $a + kb = kb$ always has the sign of $b$ and **no number of duplicates can ever flip the argmax** — which is exactly why Example 2's argmax was safe. And the flip is one-directional: duplication always drags the decision *toward* the evidence and away from the prior.

**P3** (a) Naïve Bayes reports $0.877 > 0.8$, so the system **acts**. The true posterior is $0.727 < 0.8$, so it **should not have**. The threshold was crossed by an artefact of double-counting, and nothing in the model's output announces that.

(b) The distortion is **multiplicative in the log-odds, not additive in the probability**. Duplicating a feature $k$ times replaces the evidence term $b$ with $kb$, so the naïve odds are the true odds raised to the power $k$ (here $k=2$), with the prior odds along for the ride. That is why "just subtract $0.15$" is wrong — the offset is $+0.150$ at a true $0.727$ but $-0.146$ at a true $0.222$, and it vanishes entirely at $0.5$.

The honest translation, with equal priors so the prior term is 0: a true probability of $0.8$ is true odds $4$, so the naïve odds are $4^2 = 16$ and the corresponding naïve score is

$$\frac{16}{16+1} = \frac{16}{17} \approx 0.941.$$

So "act above $0.8$" should be run as "act above $0.941$ on the naïve-Bayes score." Also note what is *not* damaged: the map from true odds to naïve odds is strictly increasing, so the **ranking of examples is untouched** and AUC ([4.2](04-02-classification-metrics.md)) is unaffected. Only the numbers are wrong.

(c) Two fixes:

1. **Recalibrate.** Fit a monotone map from naïve-Bayes score to observed frequency on held-out data (Platt scaling, or isotonic regression) and threshold the calibrated output. This works precisely *because* the ranking survived — you are repairing the only thing that broke. It also does not need you to know $k$, which in a real corpus you never do.
2. **Use a discriminatively trained model.** Logistic regression ([1.5](01-05-logistic-regression-and-classification.md)) is fit by maximising the likelihood of the labels, so correlated features get their weights *split* between them rather than each casting a full vote, and its outputs are calibrated by construction.

**What I would ship:** recalibration, if naïve Bayes is already in place and ranks well — it is a few lines and a held-out fold ([4.1](04-01-model-selection-and-cross-validation.md)), and it keeps the one-pass training cost. If the probabilities are the *product* rather than a diagnostic, fit logistic regression and stop patching. A third option that sounds appealing and is not: de-duplicating the features by hand. It fixes the exact copies and does nothing about the hundred merely-correlated pairs doing the same thing more quietly.

</details>

## Flashback

**From Lesson 2.7 (Boosting):** Six points at $x = 1,2,3,4,5,6$ with labels $y = +1, +1, -1, +1, -1, +1$, all starting at weight $w_i = 1/6$. Round 1 uses the stump

$$h_1(x) = \begin{cases} +1 & x < 2.5\\ -1 & x \ge 2.5.\end{cases}$$

(a) Compute the weighted error $\epsilon_1$, the vote

$$\alpha_1 = \tfrac12\log\frac{1-\epsilon_1}{\epsilon_1},$$

the normaliser $Z_1$, and all six updated weights; check they sum to 1. (b) Both naïve Bayes and AdaBoost combine many weak pieces of evidence about one label. State the difference in one sentence, using what you now know about the log-odds.

<details>
<summary>Solution</summary>

(a) $h_1$ predicts $(+1,+1,-1,-1,-1,-1)$. Comparing with $y = (+1,+1,-1,+1,-1,+1)$, it is **wrong at $x = 4$ and $x = 6$** and right on the other four. So

$$\epsilon_1 = \tfrac16 + \tfrac16 = \tfrac13, \qquad \alpha_1 = \tfrac12\log\frac{2/3}{1/3} = \tfrac12\log 2 \approx 0.3466.$$

The normaliser is

$$Z_1 = \sum_i w_i e^{-\alpha_1 y_i h_1(x_i)} = (1-\epsilon_1)e^{-\alpha_1} + \epsilon_1 e^{\alpha_1},$$

and with $e^{\alpha_1} = \sqrt2$:

$$Z_1 = \tfrac23\cdot\tfrac{1}{\sqrt2} + \tfrac13\cdot\sqrt2 = \frac{2\sqrt2}{3} \approx 0.9428$$

(the standard $2\sqrt{\epsilon_t(1-\epsilon_t)}$, same number). Updated weights:

$$\text{correct: } \frac{(1/6)/\sqrt2}{2\sqrt2/3} = \frac18, \qquad \text{wrong: } \frac{(1/6)\sqrt2}{2\sqrt2/3} = \frac14.$$

| $x$ | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| $h_1$ | $+1$ | $+1$ | $-1$ | $-1$ | $-1$ | $-1$ |
| correct? | ✓ | ✓ | ✓ | ✗ | ✓ | ✗ |
| $w_i^{(2)}$ | $1/8$ | $1/8$ | $1/8$ | $\mathbf{1/4}$ | $1/8$ | $\mathbf{1/4}$ |

Sum $= 4(\tfrac18) + 2(\tfrac14) = 1$ ✓. Notice the two misclassified points now carry **exactly half** the total weight — that is not a coincidence of these numbers but AdaBoost's defining invariant: after reweighting, $h_t$ has weighted error exactly $1/2$ on the new distribution, so round $t+1$ cannot reuse the same stump.

(b) Both accumulate additive evidence, but **naïve Bayes' terms are fixed by counting and assumed independent, while AdaBoost's are fitted in sequence precisely so each one carries what the previous ones missed.** Naïve Bayes adds $\log\frac{P(x_j\mid C_1)}{P(x_j\mid C_0)}$ over features and double-counts any redundancy (P2); AdaBoost adds $\alpha_t h_t(x)$ over rounds and, by reweighting, actively *prevents* the next term from repeating the last one. Redundant evidence is naïve Bayes' failure mode and the thing boosting is built to avoid — which is also why boosting is far more sensitive to label noise, since it chases whatever it keeps getting wrong.

</details>

## Connections

- **Backward:** the MAP rule is [prob-stat-refresher 1.2's](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md) Bayes' rule with the denominator dropped, and the log-odds identity is the same object [1.5](01-05-logistic-regression-and-classification.md) fits directly — naïve Bayes *derives* a linear log-odds score from class-conditional models, logistic regression *estimates* it from the labels. Under shared-variance Gaussian features the two produce the same functional form and generally different coefficients; that generative/discriminative pair is the cleanest such contrast in the course.
- **Forward:** class-conditional densities are the seed of [3.5 (Gaussian mixtures)](03-05-gaussian-mixture-models.md) — a mixture is exactly this model with the class label *unobserved*, and [3.6 (EM)](03-06-the-em-algorithm.md) is what you do when you cannot count because you do not know $y$. The calibration problem in P3 is picked up properly in [4.2](04-02-classification-metrics.md), and $\alpha$ joins the hyperparameters tuned in [4.1](04-01-model-selection-and-cross-validation.md). [3.2 (PCA)](03-02-principal-component-analysis.md) attacks the redundancy problem from the other end: rather than assuming features are uncorrelated, it *builds* coordinates that are.
- **Sideways:** each term $\log\frac{P(x_j\mid C_1)}{P(x_j\mid C_0)}$ is a log-likelihood ratio — evidence measured in nats, the unit of [information-theory 1.1](../../information-theory/lessons/01-01-entropy-uncertainty-surprise.md). Reading the classifier as "start from the prior, then add up the bits each feature contributes" is the same accounting a sequential hypothesis test uses, and it makes the double-counting failure obvious: you cannot add the same bit twice and call it new information.
