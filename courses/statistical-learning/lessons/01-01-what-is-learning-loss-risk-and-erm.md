# Statistical Learning Theory · Lesson 1.1: What is learning? Loss, risk, and ERM

> ⏱ ~15 min · Module 1: The learning problem · Builds on: [prob-stat-refresher 2.1 (expectation)](../../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md) · Unlocks: [1.2 (the bias–variance decomposition)](01-02-the-bias-variance-decomposition.md), [3.1 (the PAC framework)](03-01-the-pac-framework.md)

## Why this matters

There are two numbers in every learning problem. One is the average error your model makes on data it has never seen — the number you actually care about, and the number you can never compute. The other is the average error on the data you have — the number you can compute, and the only one you will ever see.

This entire course is about the relationship between those two numbers. Every theorem in Module 3 is a statement of the form "with probability at least $1-\delta$, the second number is within $\epsilon$ of the first." Everything in Module 2 is a technique for making that gap smaller by giving something up.

So the setup below is not vocabulary. It is the statement of the problem, and by the end of this lesson you will have proved the one fact that makes the problem hard — that the moment you *choose* a model by looking at your data, its error on that data stops being an honest estimate of anything.

The *practice* of turning a messy real question into this setup is [`machine-learning` 1.1](../../machine-learning/lessons/01-01-the-learning-problem.md)'s job. Here we take the setup as given and ask what can be proved about it.

## The idea

You want a rule $h$ that maps inputs to predictions. You have $n$ examples. You score $h$ by averaging some penalty over those examples, pick the $h$ that scores best, and ship it.

The move that needs justifying is the last one. Your average over $n$ examples is a *sample mean*, so the law of large numbers is on your side: for a rule you fixed in advance, the sample average of its error converges to its true error, and at $n$ examples it is an unbiased estimate. That is a real theorem and it is the entire licence for measuring anything on finite data.

But you did not fix $h$ in advance. You searched over a whole collection of rules and kept the one with the smallest average — and the minimum of many noisy estimates is systematically smaller than any of them deserves. Here is the sharp version of that, and it is worth internalising before any formalism:

> Take a million rules, every one of which is a pure coin flip — true error exactly $1/2$, no signal anywhere. Score them on 100 examples and keep the best. Its training error will be about $0.31$.

Nothing was learned. Nothing *could* be learned; there was no structure in the setup to find. The drop from $0.50$ to $0.31$ is entirely the arithmetic of taking a minimum over noise. That gap is the enemy, and naming it precisely is what the rest of this lesson does.

## The formal version

**The data.** There is a distribution $\mathcal D$ over $\mathcal X \times \mathcal Y$ — inputs paired with labels. You never see $\mathcal D$; you see a sample $S = ((x_1,y_1),\dots,(x_n,y_n))$ of $n$ points drawn i.i.d. from it.

*In words:* the world has a fixed but unknown joint law over questions and answers, and your data is an independent random peek at it.

**The loss.** A function $\ell(\hat y, y) \ge 0$ scoring a prediction against the truth. Two run this course: the [0-1 loss](../reference.md#0-1-loss) $\ell(\hat y,y) = \mathbf 1[\hat y \ne y]$ for classification, and squared loss $\ell(\hat y,y) = (\hat y - y)^2$ for regression.

**The hypothesis class.** A set $\mathcal H$ of candidate rules $h : \mathcal X \to \mathcal Y$ — all linear functions, all trees of depth 3, whatever you chose. Choosing $\mathcal H$ is a modelling decision, and [1.4](01-04-no-free-lunch-and-inductive-bias.md) proves you cannot avoid making one.

**Population risk.** The thing you care about:

$$R(h) \;=\; \mathbb E_{(x,y)\sim\mathcal D}\bigl[\ell(h(x),y)\bigr].$$

*In words:* the average loss $h$ would incur over the whole world, not just your sample.

**Empirical risk.** The thing you can compute:

$$\hat R_S(h) \;=\; \frac1n\sum_{i=1}^{n}\ell(h(x_i),y_i).$$

*In words:* training error — the same average, taken over your $n$ points instead of over $\mathcal D$.

**Empirical risk minimization (ERM).** The learning rule that picks

$$\hat h \;=\; \operatorname*{arg\,min}_{h\in\mathcal H}\ \hat R_S(h).$$

*In words:* try everything in the class, keep whatever fit the data best. Almost every algorithm you will meet is ERM, or ERM with a penalty bolted on.

### Fact 1: for a fixed $h$, empirical risk is unbiased

**Theorem.** Fix any $h \in \mathcal H$ *before* drawing $S$. Then $\mathbb E_S[\hat R_S(h)] = R(h)$.

*Why it works:* each term of the average is one draw of the same random quantity, and expectation passes through a sum.

*Proof.* Write $Z_i = \ell(h(x_i),y_i)$. Because $h$ is fixed, $Z_i$ is a function of $(x_i,y_i)$ alone, so the $Z_i$ are i.i.d. with common mean $\mathbb E[Z_i] = R(h)$. By [linearity of expectation](../reference.md#linearity-of-expectation) ([prob-stat-refresher 2.1](../../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md)),

$$\mathbb E_S[\hat R_S(h)] = \frac1n\sum_{i=1}^n \mathbb E[Z_i] = \frac1n \cdot n\,R(h) = R(h). \qquad \blacksquare$$

Note what the proof used: only that $h$ does not depend on $S$. Independence of the $Z_i$ was never needed for unbiasedness — it matters for the *variance*, which is what [3.2](03-02-finite-classes-and-uniform-convergence.md) exploits.

### Fact 2: for ERM's $\hat h$, it is not

Now let $\hat h = \hat h(S)$ be chosen by ERM. The step above breaks: $\ell(\hat h(x_i), y_i)$ is no longer a function of $(x_i,y_i)$ alone, because $\hat h$ was built from all of $S$ including that point. And the failure has a direction:

$$\mathbb E_S\bigl[\hat R_S(\hat h)\bigr] \;=\; \mathbb E_S\Bigl[\min_{h\in\mathcal H}\hat R_S(h)\Bigr] \;\le\; \min_{h\in\mathcal H}\mathbb E_S\bigl[\hat R_S(h)\bigr] \;=\; \min_{h\in\mathcal H} R(h).$$

*In words:* the expectation of a minimum is at most the minimum of the expectations, so ERM's training error is biased **downward** — not by an unknown amount in an unknown direction, but always optimistic, and typically strictly so.

**This is the single most important sentence in the course.** Everything in Module 3 exists to bound the quantity

$$R(\hat h) - \hat R_S(\hat h),$$

the amount by which your training error flatters you. It cannot be estimated from $S$; it has to be bounded in advance, from the size or capacity of $\mathcal H$.

### The floor: Bayes risk

Some error is not your fault. For 0-1 loss write $\eta(x) = \Pr(y = 1 \mid x)$ — the conditional probability of the positive label. The [Bayes-optimal predictor](../reference.md#bayes-optimal-predictor) is

$$h^*(x) = \mathbf 1[\eta(x) > 1/2], \qquad R^* = R(h^*) = \mathbb E_x\bigl[\min(\eta(x),\,1-\eta(x))\bigr].$$

*In words:* guess the more likely label at every $x$; the error left over is the label noise in $\mathcal D$ itself. No hypothesis, no algorithm, no amount of data beats $R^*$ — you prove this in P3.

### The decomposition that organises the course

Put the three together. The [excess risk](../reference.md#excess-risk-decomposition) of what ERM actually hands you splits exactly:

$$R(\hat h) - R^* \;=\; \underbrace{\Bigl(\inf_{h\in\mathcal H}R(h) - R^*\Bigr)}_{\text{approximation error}} \;+\; \underbrace{\Bigl(R(\hat h) - \inf_{h\in\mathcal H}R(h)\Bigr)}_{\text{estimation error}}.$$

*In words:* you lose something by restricting to $\mathcal H$ at all, and you lose something more by having to pick inside $\mathcal H$ from finite data.

The two halves move in opposite directions and each has its own module. **Approximation error** shrinks as $\mathcal H$ grows richer — that is Modules 4 and 5, kernels and trees and networks. **Estimation error** grows as $\mathcal H$ grows richer — that is Module 3, and every bound there charges you for the size of $\mathcal H$. Module 2's regularization is the dial between them.

## Picture

![A horizontal risk axis with Bayes risk marked at the left, best-in-class risk to its right with the gap labelled approximation error, and the risk of the ERM hypothesis further right with the gap labelled estimation error, with the achievable risks of the hypothesis class drawn as a bracket](assets/01-01-fig1.svg)

Read it left to right as *how much of your error each decision cost you*. Everything to the left of $R^*$ is impossible — no learner reaches it. The bracket is the range of risks the members of $\mathcal H$ achieve; its left endpoint is the best your class can do, and the gap from $R^*$ to that endpoint is the price of the class you chose. ERM lands somewhere strictly inside the bracket, and the gap from the endpoint to where it lands is the price of having only $n$ points.

Two things to notice. Enlarging $\mathcal H$ slides the bracket's left endpoint leftward (less approximation error) *and* lets ERM land further right within it (more estimation error). And you can never locate ERM's dot from data alone — $\hat R_S(\hat h)$ sits somewhere off to the left of it, which is exactly Fact 2.

## Worked examples

**Example 1 (mechanical): unbiased, and wrong on every single sample.**

Let $\mathcal X = \{a,b\}$ with $\Pr(a) = 0.6$, $\Pr(b) = 0.4$, and $\eta(a) = 0.9$, $\eta(b) = 0.4$. Take $h \equiv 1$ (always predict the positive label) with 0-1 loss. Its population risk:

$$R(h) = 0.6\,(1 - 0.9) + 0.4\,(1 - 0.4) = 0.06 + 0.24 = 0.30.$$

Now draw $n = 2$ points. The loss on each is Bernoulli with mean $0.30$, so $\hat R_S(h)$ takes only three values:

| $\hat R_S(h)$ | probability |
|---|---|
| $0$ | $0.7^2 = 0.49$ |
| $0.5$ | $2(0.7)(0.3) = 0.42$ |
| $1$ | $0.3^2 = 0.09$ |

Taking the expectation,

$$0(0.49) + 0.5(0.42) + 1(0.09) = 0.21 + 0.09 = 0.30,$$

unbiased, exactly as Fact 1 says.

And yet $\hat R_S(h)$ is **never** equal to $0.30$ — not on any sample. Unbiasedness is a statement about an average over hypothetical repetitions, not a promise about the one sample you have. Keep that distinction; it is why every honest guarantee in this course carries a $\delta$.

**Example 2 (why you'd care): the drop that isn't learning.**

Here is Fact 2 with numbers. Let $\mathcal H$ contain $M$ hypotheses, each with true risk **exactly** $1/2$, and suppose their empirical risks on $n = 100$ points are independent. Nobody in this class knows anything; every one of them is a fair coin.

Let $X \sim \mathrm{Bin}(100, 1/2)$ count one hypothesis's mistakes. The minimum over $M$ independent copies has expectation $\sum_{k\ge1}\Pr(X\ge k)^M$, so

$$\mathbb E\Bigl[\min_{h\in\mathcal H}\hat R_S(h)\Bigr] \;=\; \frac1n\sum_{k\ge 1}\Pr(X \ge k)^{M}.$$

Evaluated exactly (order statistics, not simulation):

| $M$ | $1$ | $10$ | $100$ | $1000$ | $10{,}000$ |
|---|---|---|---|---|---|
| $\mathbb E[\min_h \hat R_S(h)]$ | $0.5000$ | $0.4232$ | $0.3752$ | $0.3393$ | $0.3097$ |

At $M = 1$ there is nothing to select over and the estimate is honest. At $M = 10{,}000$, ERM reports a training error of $0.31$ on a class where **every member is a coin flip**. Its true risk is $0.5$, so the optimism is $0.19$ — bigger than most effects you would ever be trying to detect.

Two readings, both worth carrying:

- The training error of a selected hypothesis measures *how hard you searched*, not how well you learned. A bigger class always buys a smaller training error, whether or not it contains anything good.
- The optimism grows with $M$ but slowly — a factor of $10$ in class size costs a few hundredths. That logarithmic-looking behaviour is not an accident; [3.2](03-02-finite-classes-and-uniform-convergence.md) proves the gap scales like $\sqrt{\ln|\mathcal H| / n}$, and this table is that theorem's shadow.

**The one idealisation, stated honestly:** real hypotheses have *correlated* empirical risks — two similar rules make mistakes on the same points — so independence is the worst case, and the true optimism is usually smaller. That looseness is the price of the union bound, and [3.2](03-02-finite-classes-and-uniform-convergence.md) charges it explicitly.

## Watch out

- **You might think** training error is an estimate of test error that runs a little optimistic — **but actually** the optimism has no fixed size. It is a function of how many hypotheses you searched, and Example 2 shows it reaching $0.19$ with zero signal present. A reported training error, on its own, is not evidence of anything.
- **You might think** Fact 1's unbiasedness makes $\hat R_S$ trustworthy — **but actually** it is unbiased for a *pre-committed* $h$ and for nothing else, and Example 1 shows even then it misses on every individual sample. Unbiasedness plus concentration is what you need; that pairing is [3.2](03-02-finite-classes-and-uniform-convergence.md).
- **You might think** a nonzero Bayes risk means your model is underfitting — **but actually** $R^*$ is a property of $\mathcal D$, not of you. If $\eta(x) = 0.7$ at some $x$, then $30\%$ of the labels there are unpredictable from $x$ by anyone. Only the approximation and estimation terms are yours to move, and confusing irreducible noise with a fixable modelling error is the fastest route to overfitting.

## One-liner

> Learning is minimizing a risk you cannot compute using an average you can — and the average stops being honest the instant you use it to choose, which is why the whole subject is the study of one gap.

## Problems

**P1 (🟢)** Let $\mathcal X = \{a,b,c\}$ with $\Pr(a) = 0.5$, $\Pr(b) = 0.3$, $\Pr(c) = 0.2$, labels in $\{0,1\}$, and

$$\eta(a) = 0.8,\qquad \eta(b) = 0.4,\qquad \eta(c) = 0.3.$$

Use 0-1 loss. The class $\mathcal H = \{h_1,h_2,h_3,h_4\}$ is given by its values at $(a,b,c)$:

$$h_1 = (1,1,1),\quad h_2 = (1,1,0),\quad h_3 = (0,0,1),\quad h_4 = (0,0,0).$$

(a) Compute $R(h)$ for all four and name the risk minimiser in $\mathcal H$. (b) The sample $S$ of $n=10$ points is: $(a,1)$ four times, $(a,0)$ once, $(b,1)$ once, $(b,0)$ twice, $(c,1)$ twice. Compute $\hat R_S(h)$ for all four and name the ERM choice. (c) Does ERM match the risk minimiser? Give the Bayes risk, and split the excess risk of ERM's pick into approximation and estimation error.

**P2 (🟡)** (a) Prove $\mathbb E_S[\hat R_S(h)] = R(h)$ for a fixed $h$, and state exactly where the argument uses that $h$ does not depend on $S$.

(b) Now break it. Let $\mathcal X$ be a single point, $\Pr(y = 1) = 1/2$, 0-1 loss, and $\mathcal H = \{h_0, h_1\}$ the two constant hypotheses. Give $R(h_0)$ and $R(h_1)$. Then with $n = 1$, compute $\mathbb E_S[\hat R_S(\hat h)]$ for the ERM choice $\hat h$, and again for $n = 3$. Say what the bias is in each case and which direction it runs.

**P3 (🔴)** (a) Prove that for 0-1 loss the predictor $h^*(x) = \mathbf 1[\eta(x) > 1/2]$ minimises $R$ over **all** functions $\mathcal X \to \{0,1\}$, and derive the excess-risk identity

$$R(h) - R(h^*) = \mathbb E_x\bigl[\,|2\eta(x) - 1|\ \mathbf 1[h(x) \ne h^*(x)]\,\bigr].$$

(b) Let $x \sim \mathrm{Unif}(0,1)$ and $\eta(x) = x^2$. Compute $R^*$ in closed form. (c) Compute the risk of the plausible-looking rule $g(x) = \mathbf 1[x > 1/2]$ and say, using (a), exactly where its excess risk comes from.

<details>
<summary>Solutions</summary>

**P1** (a) For each $x$, the conditional risk is $1-\eta(x)$ if $h(x)=1$ and $\eta(x)$ if $h(x)=0$; average against $\Pr(x)$.

$$R(h_1) = 0.5(0.2) + 0.3(0.6) + 0.2(0.7) = 0.10 + 0.18 + 0.14 = 0.42,$$
$$R(h_2) = 0.5(0.2) + 0.3(0.6) + 0.2(0.3) = 0.10 + 0.18 + 0.06 = 0.34,$$
$$R(h_3) = 0.5(0.8) + 0.3(0.4) + 0.2(0.7) = 0.40 + 0.12 + 0.14 = 0.66,$$
$$R(h_4) = 0.5(0.8) + 0.3(0.4) + 0.2(0.3) = 0.40 + 0.12 + 0.06 = 0.58.$$

The risk minimiser in $\mathcal H$ is $h_2$ at $R = 0.34$.

(b) Count mistakes. The sample has, at $a$: four $1$s and one $0$; at $b$: one $1$ and two $0$s; at $c$: two $1$s and no $0$s.

| $h$ | mistakes at $a$ | at $b$ | at $c$ | $\hat R_S$ |
|---|---|---|---|---|
| $h_1 = (1,1,1)$ | 1 | 2 | 0 | $3/10 = 0.30$ |
| $h_2 = (1,1,0)$ | 1 | 2 | 2 | $5/10 = 0.50$ |
| $h_3 = (0,0,1)$ | 4 | 1 | 0 | $5/10 = 0.50$ |
| $h_4 = (0,0,0)$ | 4 | 1 | 2 | $7/10 = 0.70$ |

ERM picks $\hat h = h_1$, with training error $0.30$.

(c) **No** — ERM picks $h_1$ ($R = 0.42$), not the risk minimiser $h_2$ ($R = 0.34$). Both $c$-points happened to be labelled $1$, which is unlucky but hardly rare ($0.3^2 = 0.09$), and that alone flipped the ranking.

Bayes: $\eta > 1/2$ only at $a$, so $h^* = (1,0,0)$ — **which is not in $\mathcal H$** — and

$$R^* = 0.5(0.2) + 0.3(0.4) + 0.2(0.3) = 0.10 + 0.12 + 0.06 = 0.28.$$

The split:

- approximation error $= 0.34 - 0.28 = 0.06$ (the price of a class that cannot express $h^*$),
- estimation error $= 0.42 - 0.34 = 0.08$ (the price of choosing from ten points),
- excess risk $= 0.42 - 0.28 = 0.14$, and $0.06 + 0.08 = 0.14$. ✓

Also worth noting: ERM's *reported* error is $0.30$ while its true risk is $0.42$ — optimistic by $0.12$, on a class of size four.

**P2** (a) Set $Z_i = \ell(h(x_i), y_i)$. Since $h$ is fixed in advance, $Z_i$ depends on the sample only through $(x_i,y_i)$, so it is a single draw of the random variable $\ell(h(x),y)$ with $(x,y)\sim\mathcal D$, whose mean is $R(h)$ by definition. Then

$$\mathbb E_S[\hat R_S(h)] = \mathbb E\Bigl[\frac1n\sum_i Z_i\Bigr] = \frac1n\sum_i \mathbb E[Z_i] = R(h).$$

**Where the fixedness is used:** at the step "$Z_i$ depends on the sample only through $(x_i,y_i)$." If $h = h(S)$, then $Z_i$ is a function of all $n$ points, $\mathbb E[Z_i]$ is no longer $R(h)$ for any fixed $h$, and the identity collapses.

(b) Both hypotheses are constant and the label is a fair coin, so each is wrong exactly half the time: $R(h_0) = R(h_1) = 1/2$.

$n = 1$: whatever the single label is, one of the two hypotheses matches it, so ERM finds a hypothesis with $\hat R_S = 0$ **on every sample**. Hence $\mathbb E_S[\hat R_S(\hat h)] = 0$, against a true risk of $1/2$. Bias $= -1/2$: the estimate is maximally optimistic, and the "learner" learned nothing — it memorised one coin flip.

$n = 3$: let $k \sim \mathrm{Bin}(3,1/2)$ be the number of $1$s. Then $\hat R_S(h_1) = (3-k)/3$ and $\hat R_S(h_0) = k/3$, so $\hat R_S(\hat h) = \min(k, 3-k)/3$.

| $k$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| $\Pr$ | $1/8$ | $3/8$ | $3/8$ | $1/8$ |
| $\min(k,3-k)/3$ | $0$ | $1/3$ | $1/3$ | $0$ |

$$\mathbb E_S[\hat R_S(\hat h)] = \tfrac38\cdot\tfrac13 + \tfrac38\cdot\tfrac13 = \tfrac14.$$

Bias $= 1/4 - 1/2 = -1/4$. Still optimistic, still in the same direction — as Fact 2 guarantees it must be, since $\mathbb E[\min] \le \min \mathbb E$ — but half the size, because more data means less room for the minimum to exploit noise. That shrinkage with $n$ is exactly what a generalization bound quantifies.

**P3** (a) Condition on $x$. For any $h$, the conditional risk at $x$ is

$$\mathbb E\bigl[\mathbf 1[h(x)\ne y] \mid x\bigr] = \begin{cases} 1-\eta(x) & h(x) = 1,\\ \eta(x) & h(x) = 0.\end{cases}$$

By the tower property, $R(h)$ is the expectation over $x$ of that conditional risk, and since the value of $h$ at each $x$ can be chosen independently of every other $x$, minimising $R$ means minimising it **pointwise**. The pointwise minimum is $\min(\eta(x), 1-\eta(x))$, attained by predicting $1$ exactly when $1 - \eta(x) < \eta(x)$, i.e. $\eta(x) > 1/2$. That is $h^*$, so for every $h$

$$R(h) \;\ge\; R(h^*) \;=\; \mathbb E_x\bigl[\min(\eta(x),1-\eta(x))\bigr].$$

(At $\eta(x) = 1/2$ both choices tie, so $h^*$ is not unique — but $R^*$ is.)

For the identity: at any $x$ where $h(x) = h^*(x)$ the two conditional risks are equal and contribute nothing. Where they differ, $h$ pays $\max(\eta,1-\eta)$ and $h^*$ pays $\min(\eta,1-\eta)$, a difference of

$$\max(\eta,1-\eta) - \min(\eta,1-\eta) = |2\eta(x) - 1|.$$

Taking expectations over $x$ gives the claim. Read it as: **a mistake costs you in proportion to how confident the truth was.** Disagreeing with $h^*$ where $\eta \approx 1/2$ is nearly free; disagreeing where $\eta \approx 1$ is expensive.

(b) With $\eta(x) = x^2$ on $(0,1)$, we have $\eta(x) > 1/2$ iff $x > 1/\sqrt2$, so $h^*(x) = \mathbf 1[x > 1/\sqrt2]$ and

$$R^* = \int_0^{1}\min(x^2,\,1-x^2)\,dx = \int_0^{1/\sqrt2} x^2\,dx + \int_{1/\sqrt2}^{1}(1-x^2)\,dx.$$

The two pieces are

$$\int_0^{1/\sqrt2} x^2\,dx = \frac{1}{3}\Bigl(\frac{1}{\sqrt2}\Bigr)^{3} = \frac{\sqrt2}{12}, \qquad \Bigl[x - \frac{x^3}{3}\Bigr]_{1/\sqrt2}^{1} = \frac23 - \frac{5\sqrt2}{12}.$$

Summing,

$$R^* = \frac{\sqrt2}{12} + \frac23 - \frac{5\sqrt2}{12} = \frac{2-\sqrt2}{3} \approx 0.1953.$$

(c) For $g(x) = \mathbf 1[x>1/2]$:

$$R(g) = \int_0^{1/2} x^2\,dx + \int_{1/2}^{1}(1-x^2)\,dx = \frac{1}{24} + \Bigl(\frac23 - \frac{11}{24}\Bigr) = \frac{1}{24} + \frac{5}{24} = \frac14.$$

Excess risk $= 1/4 - (2-\sqrt2)/3 \approx 0.0547$. By (a) it is concentrated exactly on the disagreement set $\bigl(1/2,\ 1/\sqrt2\bigr)$, where $g$ predicts $1$ but $\eta(x) = x^2 < 1/2$:

$$\int_{1/2}^{1/\sqrt 2}|2x^2-1|\,dx = \int_{1/2}^{1/\sqrt2}(1-2x^2)\,dx = \frac14 - \frac{2-\sqrt2}{3} \approx 0.0547. \ \checkmark$$

The lesson: $g$ is wrong on a region of width only about $0.207$, and even there the truth is barely decisive ($|2\eta-1|$ never exceeds $0.5$ on it), so the whole error is small. A threshold in roughly the right place is cheap — which is precisely why a merely *approximately* correct rule can be good enough, and why the $\epsilon$ in [3.1](03-01-the-pac-framework.md)'s definition is an $\epsilon$ and not a zero.

</details>

## Connections

- **Backward:** Fact 1 is nothing but linearity of expectation from [prob-stat-refresher 2.1](../../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md), and the reason $\hat R_S(h)$ is any good at all is the law of large numbers from [prob-stat-refresher 3.2](../../prob-stat-refresher/lessons/03-02-sums-and-law-of-large-numbers.md). P3's pointwise minimisation is the conditional-expectation argument in miniature. For the practice of posing a real problem in this form, see [`machine-learning` 1.1](../../machine-learning/lessons/01-01-the-learning-problem.md).
- **Forward:** [1.2](01-02-the-bias-variance-decomposition.md) refines the same excess risk for squared loss into bias, variance and irreducible noise — the Bayes risk here *is* that $\sigma^2$ term. [1.3](01-03-overfitting-and-train-validation-test.md) asks what a held-out set buys you and finds Example 2's selection effect waiting there too. Module 3 does the real work: [3.1](03-01-the-pac-framework.md) states what a guarantee even means, and [3.2](03-02-finite-classes-and-uniform-convergence.md) proves the first one, bounding exactly the gap Fact 2 opened.
- **Sideways:** the risk-minimization frame is decision theory — choose an action to minimise expected loss — the same structure as expected-utility maximisation in [`grad-micro`](../../grad-micro/syllabus.md), with the loss playing the role of negative utility and $\mathcal D$ the role of the subjective distribution. The contrast worth holding onto is with [`econometrics`](../../econometrics/syllabus.md): there the target is a *parameter* and the enemy is bias; here the target is *out-of-sample loss* and bias is something you will happily buy (Module 2 does exactly that) if it lowers the risk.
