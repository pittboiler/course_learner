# Statistical Learning Theory · Lesson 3.1: The PAC framework

> ⏱ ~15 min · Module 3: Statistical learning theory · Builds on: [1.1 (loss, risk, ERM)](01-01-what-is-learning-loss-risk-and-erm.md), [1.4 (no free lunch)](01-04-no-free-lunch-and-inductive-bias.md) · Unlocks: [3.2 (finite classes)](03-02-finite-classes-and-uniform-convergence.md), [3.3 (VC dimension)](03-03-shattering-and-the-vc-dimension.md)

## Why this matters

[Lesson 1.1](01-01-what-is-learning-loss-risk-and-erm.md) ended on the uncomfortable fact that the whole course exists to fix: the training error of the hypothesis you *selected* is a biased estimate of its true risk, because you used the data twice. Every module since has built machinery on top of that crack without sealing it.

Module 3 seals it, and it is the only place in this library that does — **no other course proves a generalization bound.** Five lessons, one job: turn "the model seems fine on held-out data" into a theorem with quantifiers.

This lesson writes the contract. It does not prove much; it decides what a proof would have to say. That turns out to be the hard part, because almost every plausible-sounding guarantee about learning is either vacuous or false, and the difference is entirely in where the quantifiers sit.

## The idea

You want to say "my learner works." Try to say it precisely and you immediately have to give two things up.

**You cannot demand exactness.** No finite sample pins down the truth. From a thousand coin flips you learn the bias to within a percent or so, never exactly. So the promise has to be *approximately* correct: risk at most $\epsilon$, not risk zero.

**You cannot demand certainty.** However large your sample, there is a draw in which every point is unrepresentative — a thousand heads in a row has probability $2^{-1000}$, not zero. So the promise has to hold *probably*: with probability at least $1-\delta$ **over the draw of the training set**.

Approximately correct, probably. That is the whole name.

The polling analogy is exact and worth carrying: "accurate to within 3 points, 19 times out of 20" has an $\epsilon$ (3 points) and a $\delta$ (1 in 20), and reporting one without the other is meaningless. The same two knobs, the same reason for each. What makes PAC a *theory* rather than a slogan is the third thing — the thing it refuses to give up:

> **The bound may not depend on the distribution the data came from.**

The learner does not get to say "I work on nice data." It gets $\epsilon$ and $\delta$, it returns a sample size, and that sample size has to work against every distribution in the world. This is the quantifier that does all the labour, and P3 is about what happens when someone quietly drops it.

## The formal version

Fix the setup from [1.1](01-01-what-is-learning-loss-risk-and-erm.md): a domain $\mathcal X$, labels $\mathcal Y = \{-1,+1\}$, a hypothesis class $\mathcal H$ of functions $\mathcal X \to \mathcal Y$, and the [population risk](../reference.md#population-risk) of $h$ under 0-1 loss,

$$R(h) \;=\; \Pr_{x \sim \mathcal D}\bigl[\,h(x) \neq c(x)\,\bigr],$$

where $\mathcal D$ is a distribution on $\mathcal X$ and $c$ is the target labelling function. A **learner** $A$ is any map from a labelled sample $S$ to a hypothesis $A(S)$.

We are in the **realizable case**: we assume $c \in \mathcal H$, so some hypothesis in the class has risk exactly zero.

> **Definition (PAC learnable).** $\mathcal H$ is PAC learnable if there exist a learner $A$ and a function $n_{\mathcal H}(\epsilon,\delta)$ such that: for every $\epsilon, \delta \in (0,1)$, **every** distribution $\mathcal D$ on $\mathcal X$, and **every** target $c \in \mathcal H$, if $S$ is an i.i.d. sample of size $n \ge n_{\mathcal H}(\epsilon,\delta)$ drawn from $\mathcal D$ and labelled by $c$, then
> $$\Pr_{S \sim \mathcal D^n}\bigl[\, R(A(S)) \le \epsilon \,\bigr] \;\ge\; 1 - \delta.$$

In words: one fixed algorithm, one fixed sample-size rule, and no matter what the world looks like, feeding it that many examples usually produces a hypothesis that is usually right.

### Walking the quantifiers

The definition is a stack of five quantifiers and the order is the content. Read it left to right: $\exists A\ \exists n_{\mathcal H}\ \forall \epsilon\ \forall \delta\ \forall \mathcal D\ \forall c$.

- **$\exists A$, $\exists n_{\mathcal H}$ come first.** The learner and the sample-size rule are chosen *before* the distribution. They cannot inspect $\mathcal D$, because $\mathcal D$ is quantified to their right. Swap the order — let $A$ depend on $\mathcal D$ — and the definition collapses to something trivially satisfiable and worthless (P3).
- **"for every $\mathcal D$" — distribution-free.** This is what makes the result a *guarantee* rather than an *assumption*. You never know $\mathcal D$; if the bound needed to, you could not use it.
- **"with probability at least $1-\delta$" — over the sample, not over the test point.** $\delta$ is the price of finite data: the chance you drew a misleading training set. It is a statement about the randomness *you already spent*, before you ever ran the model.
- **"$R \le \epsilon$", not "$R = 0$".** Exactness needs infinite data. $\epsilon$ is where the remaining error lives.
- **"for every $c \in \mathcal H$" — realizability.** The class is assumed rich enough to contain the truth. This is a real assumption and the next bullet drops it.

### Realizable and agnostic

Realizability is a strong hypothesis: it says there is no noise and no model misspecification. The **agnostic** version drops it. There is no target function; instead $\mathcal D$ is a joint distribution on $\mathcal X \times \mathcal Y$, $R(h) = \Pr[h(x) \neq y]$, and the learner is only asked to compete with the best hypothesis available:

$$\Pr_S\Bigl[\,R(A(S)) \;\le\; \min_{h \in \mathcal H} R(h) + \epsilon \,\Bigr] \;\ge\; 1-\delta.$$

In words: you cannot beat your own class, but you should not lose to it either. Agnostic is the realistic setting — real labels are noisy and real classes are wrong — and it is not free. The sample complexity degrades from order $1/\epsilon$ to order $1/\epsilon^2$. At $\epsilon = 0.05$ that is a factor of 20; at $\epsilon = 0.01$, a factor of 100. [Lesson 3.4](03-04-vc-bounds-and-sample-complexity.md) makes the constants precise and [boss problem 3](../syllabus.md) makes the gap concrete.

### The theorem: thresholds on a line

Now prove something. Take $\mathcal X = \mathbb R$ and

$$\mathcal H = \{\, h_a : a \in \mathbb R \,\}, \qquad h_a(x) = \mathbf 1[\,x \ge a\,],$$

a class with infinitely many hypotheses. The learner: given $S$, let $\hat a$ be the **smallest positive example**, and $\hat a = +\infty$ if there are none. This is [ERM](../reference.md#empirical-risk-minimization) — it has zero training error — and it is a one-liner to run.

> **Theorem.** For every $\mathcal D$, every $a^* \in \mathbb R$, and every $\epsilon,\delta \in (0,1)$,
> $$n \;\ge\; \frac1\epsilon \ln\frac1\delta \quad\Longrightarrow\quad \Pr_S\bigl[R(h_{\hat a}) \le \epsilon\bigr] \ge 1-\delta.$$
> So thresholds are PAC learnable with $n_{\mathcal H}(\epsilon,\delta) = \lceil \frac1\epsilon \ln\frac1\delta \rceil$.

**Why it works, in one sentence:** the learner can only err on the strip between the true cut and its guess, and the guess is that far out only because every single draw missed the strip — which is exponentially unlikely once the strip is big enough to matter.

*Proof.* Three steps.

**1. The error is one-sided.** Every positive example $x_i$ satisfies $x_i \ge a^*$, so their minimum does too: $\hat a \ge a^*$. Hence $h_{\hat a}$ and $h_{a^*}$ disagree exactly on the interval $[a^*, \hat a)$ — the learner calls those points $-1$ and the truth calls them $+1$ — and

$$R(h_{\hat a}) \;=\; \mathcal D\bigl([\,a^*,\ \hat a\,)\bigr).$$

**2. Name the strip that matters.** If $\mathcal D([a^*,\infty)) < \epsilon$ we are done, since $R \le \mathcal D([a^*,\infty)) < \epsilon$ always. Otherwise let $a_\epsilon$ be the smallest point with

$$\mathcal D\bigl([\,a^*,\ a_\epsilon\,]\bigr) \;\ge\; \epsilon,$$

so the closed strip $I = [a^*, a_\epsilon]$ carries mass at least $\epsilon$, while by minimality everything strictly inside it carries less. Now: **if any sample point lands in $I$**, that point is a positive example (it is at or right of $a^*$), so $\hat a \le a_\epsilon$, so $R = \mathcal D([a^*,\hat a)) \le \epsilon$.

**3. Bound the bad event.** Contrapositive of step 2: $R > \epsilon$ forces all $n$ draws to miss $I$. The draws are independent and $\mathcal D(I) \ge \epsilon$, so

$$\Pr_S\bigl[R(h_{\hat a}) > \epsilon\bigr] \;\le\; (1-\epsilon)^n \;\le\; e^{-\epsilon n},$$

using $1 - x \le e^{-x}$ ([useful inequalities](../reference.md#useful-inequalities)). Requiring $e^{-\epsilon n} \le \delta$ and taking logs gives $n \ge \frac1\epsilon\ln\frac1\delta$. $\blacksquare$

Notice what the proof did **not** use: any property of $\mathcal D$ whatsoever. It never assumed a density, never assumed continuity, never assumed the strip had a nice shape. That is "for every $\mathcal D$" being earned rather than asserted — and it is the template every bound in this module reuses. [Lesson 3.2](03-02-finite-classes-and-uniform-convergence.md) runs the same three steps for a finite class with a union bound in step 3; [3.3](03-03-shattering-and-the-vc-dimension.md) and [3.4](03-04-vc-bounds-and-sample-complexity.md) do it for infinite classes by replacing "how many hypotheses" with "how many labellings."

## Picture

![A horizontal probability axis from 0 to 1 with the true threshold a-star at 0.30 and the learned threshold a-hat at 0.44. The band between them is shaded, seven hollow points labelled minus one lie to the left of a-star, eight filled points labelled plus one lie at or to the right of a-hat, and no point falls strictly inside the shaded band.](assets/03-01-fig1.svg)

Read it as the proof reads it. The hollow points are the negative examples, all left of $a^*$; the filled points are the positives, all at or right of $a^*$. The learner sets $\hat a$ at the leftmost filled point — which is why $\hat a$ sits exactly on the right edge of the shaded band and never inside it.

The band is the disagreement region, and its **probability mass** — not its width — is the risk. Its width here is $0.14$ of the axis, but if $\mathcal D$ put almost no mass there the risk would be tiny, and if $\mathcal D$ concentrated there the risk would be large. That is the whole reason step 2 measures a strip of mass $\epsilon$ instead of a strip of length $\epsilon$.

And the picture shows the bad event directly: the band is wide *precisely because* no draw landed in it. Widen the band and that coincidence gets less plausible, at an exponential rate.

## Worked examples

**Example 1 (mechanical): instantiate the bound and check it.** Let $\mathcal D$ be uniform on $[0,1]$ and $a^* = 0.4$. Ask for $\epsilon = 0.05$ and $\delta = 0.05$:

$$n \;\ge\; \frac{1}{0.05}\ln\frac{1}{0.05} \;=\; 20 \ln 20 \;=\; 59.91\ldots \quad\Longrightarrow\quad n = 60.$$

Sixty examples buy you: with probability at least 95 percent, a threshold rule that misclassifies at most 5 percent of future points. Now check how loose that is. Under this $\mathcal D$ the strip of mass $\epsilon$ is literally $[0.4,\ 0.45]$, so the failure probability is exactly $(1-\epsilon)^n$:

| quantity | value |
|---|---|
| guaranteed failure probability $\delta$ | $0.05$ |
| exact $\Pr[R > 0.05]$ at $n = 60$ | $0.0461$ |
| the relaxation $e^{-\epsilon n}$ | $0.0498$ |
| exact $\mathbb E[R]$ at $n=60$ | $0.0164$ |

Two lessons in that table. First, the *only* slack in the whole proof is the step $1-x \le e^{-x}$ — $0.0461$ against $0.0498$ — so for this class the bound is essentially tight. Second, the **typical** risk $0.0164$ is three times better than the risk you were promised, because $\epsilon$ is a tail guarantee, not an average. In fact $\mathbb E[R] = (1 - 0.4^{n+1})/(n+1) \approx 1/(n+1)$ here: risk falls like $1/n$, while the guarantee you can *prove* falls like $\ln(1/\delta)/n$. Bounds are pessimistic by construction; they are promises about the worst tolerable case, not forecasts.

**Example 2 (why you'd care): a class that is not PAC learnable.** The definition would be empty if everything satisfied it. Take $\mathcal X = [0,1]$ and let $\mathcal H$ be **all** functions $[0,1] \to \{-1,+1\}$. Realizability is automatic — every target is in the class — so the only obstruction can be capacity.

Fix any learner $A$ and any $n$. Let $\mathcal D$ be uniform on $[0,1]$ and choose the target by flipping a fair coin independently at every point. A fresh test point $x$ is, with probability 1, not one of the $n$ training points, and the coin at $x$ was flipped independently of everything $A$ saw. So $A$'s prediction at $x$ is right with probability exactly $1/2$:

$$\mathbb E\bigl[R(A(S))\bigr] \;=\; \tfrac12 \quad \text{for every learner and every } n.$$

Averaging over targets means *some* fixed target is at least this bad, so for $\epsilon < 1/2$ no sample size works. $\mathcal H$ is not PAC learnable, and no amount of data changes that.

Compare the two classes. Thresholds are infinite too — uncountably many hypotheses — and yet 60 examples suffice. So **the number of hypotheses is not the right measure of capacity.** Finding the right one is [3.3](03-03-shattering-and-the-vc-dimension.md); this example is the same phenomenon [1.4](01-04-no-free-lunch-and-inductive-bias.md) called the need for inductive bias, now stated as a failure of a precise definition rather than as a moral.

## Watch out

- **You might think** $\delta$ is the probability your model gets a test point wrong — **but actually** that is $\epsilon$. The two live over different experiments: $\epsilon$ is over the draw of a future $x$, given the hypothesis; $\delta$ is over the draw of the training set, before the hypothesis exists. Merging them is the commonest misreading of a PAC statement, and it is why "95 percent accurate with 95 percent confidence" is two claims, not one. (Same structure as a [confidence interval](../../prob-stat-refresher/lessons/04-02-confidence-intervals.md): coverage is over the sample, not over the parameter.)
- **You might think** the theorem tells you something about the model sitting on your laptop — **but actually** it does not. It is a statement about the *procedure* $A$ and the sample size $n$, made before the data arrives. Once you have drawn $S$, you are either in the good $1-\delta$ or the bad $\delta$, and nothing in the bound tells you which. A guarantee about a random variable is not a measurement of its realisation.
- **You might think** "for every $\mathcal D$" is a technicality you could drop for a tighter bound — **but actually** dropping it is what makes a guarantee vacuous, and it is also why PAC bounds are so loose in practice: the same $n$ has to survive the most adversarial distribution, including ones nothing like yours. Both facts are true at once. Use the bound to reason about *how* $n$ scales with $\epsilon$, $\delta$ and capacity; do not use it to pick your sample size. ([Boss problem 3](../syllabus.md) takes this apart on three bounds that disagree by two orders of magnitude.)

## One-liner

> PAC says: pick your tolerance $\epsilon$ and your risk of being unlucky $\delta$, and I will name a sample size that works against every distribution in the world — approximate because data is finite, probable because data is random, and distribution-free because that is the only part worth calling a guarantee.

## Problems

**P1 (🟢)** Using $n_{\mathcal H}(\epsilon,\delta) = \lceil \frac1\epsilon\ln\frac1\delta\rceil$ for thresholds:

(a) Evaluate $n$ at $(\epsilon,\delta) = (0.1,\ 0.05)$, then at $(0.01,\ 0.05)$, then at $(0.1,\ 0.005)$.
(b) One tenfold improvement multiplied $n$; the other added a constant. Say which is which, read the reason off the formula, and say in one sentence why practitioners quote $\delta = 0.05$ or $0.01$ but rarely agonise over the choice.
(c) Which costs more data: accuracy $\epsilon = 0.01$ at a one-in-a-million confidence $\delta = 10^{-6}$, or accuracy $\epsilon = 0.001$ at the ordinary $\delta = 0.05$? Compute both.

**P2 (🟡)** Prove the threshold theorem yourself.

(a) Show $\hat a \ge a^*$ always, and identify the set on which $h_{\hat a}$ and $h_{a^*}$ disagree.
(b) Complete the argument to $\Pr[R > \epsilon] \le (1-\epsilon)^n$, being careful about one thing the sketch above glossed: why is $\mathcal D([a^*, a_\epsilon))$ at most $\epsilon$, given that $\mathcal D([a^*,a_\epsilon])$ is at least $\epsilon$? (An atom sitting at $a_\epsilon$ is the case to think about.)
(c) Name every place realizability was used, and say what breaks in each without it.

**P3 (🔴, optional)** A colleague says: "PAC's 'for every distribution' is theoretical hand-wringing. My learner is excellent on the distributions we actually see, so for practical purposes it is PAC."

(a) Name exactly which quantifier they have dropped, and state the weaker definition they are actually claiming.
(b) Construct a concrete learner for the threshold class that satisfies their weaker definition with $n = 0$ under some distribution, and prove it fails the real PAC definition. Keep it in the realizable case.
(c) They propose a fix: "I will validate on held-out data from the same distribution, and if the risk is small, the guarantee holds." Say precisely what this does and does not buy, and why it is not the same statement as PAC.

<details>
<summary>Solutions</summary>

**P1**

(a) $\ln(1/0.05) = \ln 20 = 2.9957$ and $\ln(1/0.005) = \ln 200 = 5.2983$.

| $\epsilon$ | $\delta$ | $\frac1\epsilon\ln\frac1\delta$ | $n$ |
|---|---|---|---|
| $0.1$ | $0.05$ | $29.96$ | $\mathbf{30}$ |
| $0.01$ | $0.05$ | $299.57$ | $\mathbf{300}$ |
| $0.1$ | $0.005$ | $52.98$ | $\mathbf{53}$ |

(b) Tightening $\epsilon$ tenfold multiplied $n$ by 10 ($30 \to 300$); tightening $\delta$ tenfold *added* 23 ($30 \to 53$). Read it off the formula: $\epsilon$ appears as the prefactor $1/\epsilon$, so scaling $\epsilon$ scales $n$; $\delta$ appears inside a logarithm, so each tenfold adds the same $\frac1\epsilon\ln 10 = 23.03$. Accuracy is expensive, confidence is nearly free — which is why $\delta$ is a convention nobody argues about and $\epsilon$ is the interesting knob.

(c) $\epsilon = 0.01,\ \delta = 10^{-6}$: $100 \ln(10^6) = 100 \times 13.8155 = 1381.55$, so $n = \mathbf{1382}$.
$\epsilon = 0.001,\ \delta = 0.05$: $1000 \ln 20 = 2995.73$, so $n = \mathbf{2996}$.

The second costs more than twice as much. Near-certainty at 1 percent accuracy is cheaper than routine confidence at 0.1 percent accuracy — the same moral as (b), now with the two effects competing head to head.

**P2**

(a) Realizability says the labels come from $h_{a^*}$, so $y_i = +1$ if and only if $x_i \ge a^*$. Hence every positive example lies in $[a^*,\infty)$, and $\hat a = \min\{x_i : y_i = +1\} \ge a^*$. (If there are no positives, $\hat a = +\infty \ge a^*$ too.) Since both hypotheses are thresholds and $\hat a \ge a^*$, they agree on $(-\infty, a^*)$ (both say $-1$) and on $[\hat a, \infty)$ (both say $+1$), and disagree exactly on $[a^*, \hat a)$. Therefore $R(h_{\hat a}) = \mathcal D([a^*,\hat a))$.

(b) If $\mathcal D([a^*,\infty)) < \epsilon$ then $R < \epsilon$ with probability 1 and there is nothing to prove. Otherwise the function $t \mapsto \mathcal D([a^*, t])$ is nondecreasing, right-continuous, and reaches $\epsilon$, so

$$a_\epsilon = \min\{\, t \ge a^* : \mathcal D([a^*,t]) \ge \epsilon \,\}$$

exists and the minimum is attained (right-continuity is exactly what makes the infimum a minimum). Set $I = [a^*, a_\epsilon]$, so $\mathcal D(I) \ge \epsilon$.

*The glossed point.* For every $t < a_\epsilon$, minimality gives $\mathcal D([a^*,t]) < \epsilon$. The half-open interval is the increasing union $[a^*, a_\epsilon) = \bigcup_{t < a_\epsilon} [a^*,t]$, so by continuity from below

$$\mathcal D([a^*, a_\epsilon)) \;=\; \lim_{t \uparrow a_\epsilon} \mathcal D([a^*,t]) \;\le\; \epsilon .$$

So $\mathcal D(I) \ge \epsilon$ and $\mathcal D(I \setminus \{a_\epsilon\}) \le \epsilon$ simultaneously — no contradiction, because $\mathcal D$ may place an atom at $a_\epsilon$ carrying the difference. That atom is the whole reason to define $I$ closed: we need mass at least $\epsilon$ for step 3, and mass at most $\epsilon$ on the open part for the implication in step 2.

*Finish.* Suppose some $x_i \in I$. Then $x_i \ge a^*$, so $y_i = +1$, so $\hat a \le x_i \le a_\epsilon$, so $R = \mathcal D([a^*,\hat a)) \le \mathcal D([a^*,a_\epsilon)) \le \epsilon$. Contrapositive: $R > \epsilon$ implies no $x_i$ lands in $I$. The $x_i$ are independent with $\Pr[x_i \notin I] = 1 - \mathcal D(I) \le 1-\epsilon$, so

$$\Pr[R > \epsilon] \le (1-\epsilon)^n \le e^{-\epsilon n} \le \delta \quad\text{when}\quad n \ge \tfrac1\epsilon\ln\tfrac1\delta. \ \blacksquare$$

(c) Realizability was used **twice**, and both uses are load-bearing.

1. *In (a),* to conclude $y_i = +1 \Rightarrow x_i \ge a^*$. Without it a positive label can appear left of $a^*$, $\hat a$ can fall below $a^*$, and the error region is no longer the one-sided interval $[a^*,\hat a)$ — it can lie on both sides, and the "smallest positive example" rule is no longer even consistent with the sample.
2. *In the choice of learner,* to guarantee a zero-training-error hypothesis exists at all. Agnostically there may be no consistent threshold, so ERM returns some $h$ with $\hat R_S(h) > 0$ and the argument has nothing to grip: you can no longer say "the learner errs only where it was never shown data." You need a two-sided concentration inequality instead of a coverage argument, which is why the rate falls from $1/\epsilon$ to $1/\epsilon^2$ and why [3.2](03-02-finite-classes-and-uniform-convergence.md) reaches for Hoeffding.

**P3**

(a) They dropped **"for every $\mathcal D$"** — and, crucially, they moved it. Their claim is

$$\exists \mathcal D\ \exists A\ \exists n\ \forall \epsilon,\delta:\ \Pr_S[R(A(S)) \le \epsilon] \ge 1-\delta,$$

with $\mathcal D$ now quantified to the *left* of $A$, so the learner may be built for the distribution. (The honest version of this idea, *distribution-specific learnability*, fixes a known $\mathcal D$ in advance and is a legitimate framework — it is just a different, weaker theorem, and "the distributions we actually see" is not a distribution you can name.)

(b) Let $\mathcal H$ be the thresholds and let $A$ be the learner that **ignores the sample entirely** and always returns $h_{+\infty}$, the hypothesis that labels everything $-1$.

*Excellent on one distribution.* Let $\mathcal D_0$ be the point mass at $x = 0$, and let the target be any $h_{a^*}$ with $a^* > 0$. Then $R(h_{+\infty}) = \mathcal D_0([a^*,\infty)) = 0$. Risk is exactly zero, with probability 1, with $n = 0$ examples. By their weaker definition $A$ is perfect.

*Useless under PAC.* Take $\mathcal D$ uniform on $[0,1]$ and $a^* = 1/2$ — still realizable, since $h_{1/2} \in \mathcal H$. Then for **every** sample and every $n$,

$$R(A(S)) \;=\; \mathcal D\bigl([\tfrac12, 1]\bigr) \;=\; \tfrac12 .$$

So $\Pr[R \le \epsilon] = 0$ for any $\epsilon < 1/2$, at any sample size. No $n_{\mathcal H}$ exists, and $A$ fails PAC as badly as it is possible to fail it.

The construction generalises: any learner that ignores $S$ is optimal on the distributions that happen to match its fixed answer and hopeless elsewhere. "Works on the data I have seen" is compatible with learning nothing at all — which is exactly the gap PAC's quantifier order closes.

(c) Held-out validation buys you a genuine and useful thing: an unbiased estimate of $R(h)$ for the **one, already-fixed** $h$ you are testing, with a confidence interval of width order $1/\sqrt{m}$ from $m$ held-out points ([1.3](01-03-overfitting-and-train-validation-test.md); the machinery is [`machine-learning` 4.1](../../machine-learning/lessons/04-01-model-selection-and-cross-validation.md)).

Three things it does not buy.

1. **It measures, it does not promise.** It says how this run went; PAC says how *runs of this procedure* go, before the data is spent — which is what you need to decide how much data to collect at all.
2. **It is still conditional on $\mathcal D$.** The held-out set comes from the training distribution, so it certifies nothing about the one you will face. The colleague's premise — that they match — is exactly the assumption PAC declines to make.
3. **Its own validity degrades if you reuse it.** Validate twenty models on one held-out set and pick the winner, and you have re-created [1.1](01-01-what-is-learning-loss-risk-and-erm.md)'s selection bias one level up: the winner's held-out score is optimistic for the same reason training error was. Fixing that takes a uniform bound over the twenty — which is [3.2](03-02-finite-classes-and-uniform-convergence.md), a PAC argument.

</details>

## Flashback

**From Lesson 2.5 (Regularization as a Bayesian prior):** Your noise variance is estimated at $\sigma^2 = 9$.

(a) You place a Gaussian prior $\beta \sim \mathcal N(0,\tau^2 I)$ with $\tau = 3/2$. What ridge penalty $\lambda$ does the MAP estimate correspond to? (b) Instead you place a Laplace prior with scale $b = 3$. What lasso penalty does that give? (c) Working backwards: a colleague hands you $\lambda = 4$ for ridge without explanation. What belief about the coefficients does it encode? (d) Now the conceptual half: a prior is an assumption about the world, and PAC's guarantee holds "for every $\mathcal D$." Say what kind of statement each one is, and why they are not competing answers to the same question.

<details>
<summary>Solution</summary>

(a) The MAP identity from 2.5 is $\lambda = \sigma^2/\tau^2$ ([ridge as a MAP estimate](../reference.md#ridge-as-a-map-estimate)), so

$$\lambda \;=\; \frac{9}{(3/2)^2} \;=\; \frac{9}{9/4} \;=\; \mathbf{4}.$$

(b) The Laplace correspondence is $\lambda = 2\sigma^2/b$, so $\lambda = 2 \times 9 / 3 = \mathbf{6}$.

(c) Invert (a): $\tau = \sigma/\sqrt\lambda = 3/2 = 1.5$. So $\lambda = 4$ encodes the belief that each coefficient is drawn from a mean-zero Gaussian with standard deviation $1.5$ — that a coefficient of size 3 is a two-sigma event and one of size 5 is essentially ruled out. The penalty is a **variance ratio**: how noisy the data is relative to how large you believe the signal to be. Nothing about it is a free tuning knob; every $\lambda$ is a statement.

(d) A **prior** is a position on which world you are in — where $\beta$ lives, and through the likelihood, what $\mathcal D$ looks like. The Bayesian guarantee is an *average over that prior*: sharp when the prior is right, silent when it is wrong. A **PAC bound** takes no position at all; "for every $\mathcal D$" means there is nothing to be wrong about, and equally nothing extra to be gained from guessing the world correctly.

So the trade is sharpness against robustness, and both are honest. The mistake is reading a Bayesian credible statement as a distribution-free one — the conflation [boss problem 2](../syllabus.md) turns on. And regularization does not vanish in PAC-land: it reappears as *capacity*, a choice of $\mathcal H$, which is the distribution-free way of saying "I believe the answer is simple."

</details>

## Connections

- **Backward.** This formalises the crack opened in [1.1](01-01-what-is-learning-loss-risk-and-erm.md) — that $\hat R_S(\hat h)$ is optimistic because $\hat h$ was chosen using $S$ — by demanding a bound on $R(A(S))$ that holds no matter how $A$ chose. And Example 2 is [1.4](01-04-no-free-lunch-and-inductive-bias.md)'s no-free-lunch theorem restated as the failure of a definition: with no inductive bias, PAC learnability is unattainable.
- **Forward.** [3.2](03-02-finite-classes-and-uniform-convergence.md) runs this lesson's three-step template for any finite $\mathcal H$, replacing step 3 with a union bound over hypotheses; [3.3](03-03-shattering-and-the-vc-dimension.md) finds the capacity measure that explains why thresholds are learnable and all-functions is not; [3.4](03-04-vc-bounds-and-sample-complexity.md) converts that measure into sample complexity in both the realizable and agnostic regimes; [3.5](03-05-rademacher-complexity.md) makes the measure data-dependent and therefore sharper. Everything downstream — the margin bound in [4.3](04-03-maximum-margin-classifiers.md), the interpolation puzzle in [5.5](05-05-why-does-deep-learning-generalize.md) — is a fight over what goes in the capacity slot.
- **Sideways.** The $\epsilon$ / $\delta$ pair is the accuracy-and-coverage structure of a [confidence interval](../../prob-stat-refresher/lessons/04-02-confidence-intervals.md), with the same "over the sample, not over the parameter" reading; the difference is that PAC's version is uniform over $\mathcal D$ rather than derived from an assumed sampling distribution. That uniformity is also the sharpest contrast with [`econometrics`](../../econometrics/syllabus.md), which assumes a model in order to say something about a *parameter*, where this course refuses a model in order to say something about *prediction*. On the applied side, [`machine-learning` 1.1](../../machine-learning/lessons/01-01-the-learning-problem.md) frames the same setup for practice — PAC is what its informal "the model generalizes" is trying to mean.
