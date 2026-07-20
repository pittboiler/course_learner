# Mathematical Microeconomics · Lesson 2.2: Risk aversion

> ⏱ ~15 min · Module 2: Choice under uncertainty · Builds on: [2.1 Expected utility](02-01-expected-utility.md) · Unlocks: Module 3 (producer theory)

## Why this matters

Everyone would rather have 50 dollars for sure than a coin flip between 0 and 100 — same expected payout, but the sure thing wins. That preference *is* risk aversion, and once you have expected utility (2.1) it stops being a mood and becomes geometry: a curvature. This lesson turns "I dislike risk" into a number you can measure, compare across people, and use to **price** risk — the difference between what a gamble pays on average and what you'd trade it for. Insurance premiums, risk-adjusted returns, and the whole CRRA portfolio problem (Boss 2) fall out of one coefficient.

## The idea

Take any gamble and ask two questions: *what does it pay on average* ($\mathbb{E}[x]$), and *what sure amount would leave me exactly as happy* (the **certainty equivalent**, $CE$). A risk-averse person always answers with $CE < \mathbb{E}[x]$: they'll accept less-than-fair to shed the uncertainty. The gap, $\pi = \mathbb{E}[x] - CE$, is the **risk premium** — the dollars they're willing to burn to make the risk go away.

Why does the gap open up? Because utility of wealth is **concave** — each extra dollar is worth a little less than the last. On a concave curve the average of the endpoints (the chord) lies *below* the curve over the average point. Averaging the *outcomes* first and then reading utility beats averaging the *utilities* — which is exactly Jensen's inequality, $\mathbb{E}[u(x)] \le u(\mathbb{E}[x])$. Risk hurts because it drags you out along a curve that's bending away from you.

The subtle part: how *much* does it bend? You might reach for $u''$, the raw curvature — but that's not invariant. Rescale utility (which changes nothing about the preferences, per 2.1's vNM theorem) and $u''$ changes. The fix is to normalize curvature by slope, and that gives the Arrow–Pratt coefficients — the actual, invariant measure of risk attitude.

## The formal version

Let $x$ be a random payoff (wealth) with mean $\mathbb{E}[x]$ and variance $\sigma^2 = \mathbb{E}[(x-\mathbb{E}[x])^2]$, and let $u$ be a von Neumann–Morgenstern utility index over wealth, twice differentiable with $u' > 0$ (more is better).

**Risk aversion ⟺ concavity.** The agent is *risk-averse* if she prefers $\mathbb{E}[x]$ for sure to the gamble $x$, for every $x$. This holds for all gambles **iff** $u$ is concave, i.e. $u'' < 0$:

$$\mathbb{E}[u(x)] \le u\big(\mathbb{E}[x]\big) \qquad (\text{Jensen's inequality}).$$

In words: reading utility *after* averaging beats averaging the readings — the sure mean is at least as good as the gamble.

**Certainty equivalent and risk premium.** The $CE$ is the sure amount matching the gamble's utility, and $\pi$ is how far it falls short of the mean:

$$u(CE) = \mathbb{E}[u(x)], \qquad \pi = \mathbb{E}[x] - CE \ge 0.$$

In words: $CE$ is what the gamble is *worth* to her; $\pi$ is what she'd pay to swap the gamble for its mean.

**Arrow–Pratt coefficients.** The *absolute* and *relative* coefficients of risk aversion at wealth $x$ are

$$A(x) = -\frac{u''(x)}{u'(x)}, \qquad R(x) = -\,x\,\frac{u''(x)}{u'(x)} = x\,A(x).$$

In words: $A$ is curvature per unit slope — the invariant amount of "bend." It's unchanged by any affine relabeling $u \mapsto au + b$ ($a>0$), because $u''$ and $u'$ both scale by $a$ and the ratio cancels — whereas $u''$ alone is not invariant, so $u''$ by itself measures nothing. $R$ scales the same idea by wealth, answering "how averse to *proportional* (percentage) gambles."

**Pricing risk (the key approximation).** For a small gamble — $x = w + \varepsilon$ with $\mathbb{E}[\varepsilon]=0$, $\mathrm{Var}(\varepsilon)=\sigma^2$ small — the risk premium is

$$\boxed{\;\pi \approx \tfrac{1}{2}\,A(w)\,\sigma^2\;}$$

In words: **the risk premium is about half your absolute risk aversion times the variance.** Risk is priced by how much wealth wiggles ($\sigma^2$) and how sharply your utility bends ($A$). Derivation (second-order Taylor, from [calc 1.3](../../calc-refresher/lessons/01-03-linearization-and-taylor.md)): expand both sides of $u(w-\pi) = \mathbb{E}[u(w+\varepsilon)]$ about $w$. Left: $u(w) - \pi\,u'(w) + O(\pi^2)$. Right: $\mathbb{E}[u(w) + \varepsilon u'(w) + \tfrac12\varepsilon^2 u''(w)] = u(w) + 0 + \tfrac12\sigma^2 u''(w)$. Cancel $u(w)$, drop $O(\pi^2)$, and solve: $-\pi u' = \tfrac12\sigma^2 u''$, so $\pi = -\tfrac12\sigma^2 u''/u' = \tfrac12 A(w)\sigma^2$. ∎

**Comparing people.** Agent 1 is *more risk-averse than* Agent 2 exactly when $A_1(x) \ge A_2(x)$ for all $x$ — equivalently, $u_1$ is a concave transform of $u_2$, equivalently $u_1$ is "more concave," equivalently $CE_1 \le CE_2$ (and $\pi_1 \ge \pi_2$) for every gamble. All four statements are the same fact.

**Two workhorse families.**

- **CARA** (constant absolute risk aversion): $u(x) = -e^{-\alpha x}$, $\alpha>0$, gives $A(x) = \alpha$ everywhere. Dollar stakes you'll accept don't change as you get richer — analytically sweet, empirically dubious.
- **CRRA** (constant relative risk aversion): $u(x) = \dfrac{x^{1-\gamma}}{1-\gamma}$ for $\gamma > 0,\ \gamma \ne 1$ (and $u(x)=\ln x$ at $\gamma=1$), gives $R(x) = \gamma$ everywhere. *Percentage* stakes you'll accept don't change with wealth — the standard choice for portfolio and growth problems, which is why Boss 2 lives here.

## Picture

![A concave utility curve over a 50/50 gamble: the chord midpoint E[u] lies below the curve, so the certainty equivalent falls short of E[x] by the risk premium](assets/02-02-fig1.svg)

The chord connects the two outcomes' utilities; its midpoint is $\mathbb{E}[u(x)]$ for a 50/50 bet. It sits **below** the curve's value at the mean, $u(\mathbb{E}[x])$ — that vertical drop is the Jensen gap. Slide left along the level line to the curve to find $CE$; the horizontal gap to $\mathbb{E}[x]$ is the risk premium $\pi$. Straighten the curve (toward risk neutrality) and both gaps vanish.

## Worked examples

**Example 1 (mechanical — measure the bend).** For $u(x)=\sqrt{x}=x^{1/2}$: $u' = \tfrac12 x^{-1/2}$, $u'' = -\tfrac14 x^{-3/2}$. So

$$A(x) = -\frac{u''}{u'} = \frac{\tfrac14 x^{-3/2}}{\tfrac12 x^{-1/2}} = \frac{1}{2x}, \qquad R(x) = xA(x) = \tfrac12.$$

Square-root utility is CRRA with $\gamma = \tfrac12$ — a mildly risk-averse agent whose relative aversion is fixed but whose absolute aversion $1/(2x)$ falls as she gets richer (richer people shrug off the same dollar bet). This is the general pattern: **decreasing absolute, constant relative** risk aversion.

**Example 2 (why you'd care — pricing an insurance contract).** A homeowner with wealth $w$ and CARA utility $u=-e^{-\alpha x}$ faces a loss $\varepsilon$ with mean 0 and variance $\sigma^2$ (a small fire risk, centered by fair-odds baseline). Her risk premium is $\pi \approx \tfrac12 A\,\sigma^2 = \tfrac12\alpha\sigma^2$ — independent of $w$, because CARA. That $\pi$ is the *most* she'd pay above the expected loss to insure. An insurer who can pool the risk (driving its own variance toward 0) will sell the policy for anything up to $\pi$ above fair value: **the risk premium is the insurer's gross margin.** Curvature, priced.

## Watch out

- You might think a bigger $u''$ means more risk aversion. It doesn't — $u''$ isn't invariant to affine relabeling, and relabeling leaves preferences (hence risk attitude) untouched. Only $A = -u''/u'$ and $R = xA$ measure anything.
- You might think "constant absolute" and "constant relative" are the same knob. They're opposite bets on how aversion moves with wealth: CARA fixes the *dollar* stake you'll accept, CRRA fixes the *percentage* stake. CRRA (like $\sqrt{x}$) has absolute aversion *falling* with wealth.
- You might trust $\pi \approx \tfrac12 A\sigma^2$ for a huge gamble. It's a second-order Taylor result — exact only in the small-risk limit. For a wide bet, higher moments (skewness, and the variation of $A$ over the range) matter; compute the exact $CE$ from $u(CE)=\mathbb{E}[u]$ instead (Problem 2 shows the gap).

## One-liner

> Risk aversion is concavity; its invariant strength is $A=-u''/u'$; and the price of a small risk is half that strength times its variance.

## Problems

**P1 (🟢)** An agent with $u(x)=\sqrt{x}$ faces a 50/50 gamble between 64 and 100 (dollars). Compute the expected payoff $\mathbb{E}[x]$, the certainty equivalent $CE$, and the risk premium $\pi$ — all exactly.

**P2 (🟡)** (a) Verify CARA $u=-e^{-\alpha x}$ has constant $A(x)=\alpha$, and CRRA $u=\frac{x^{1-\gamma}}{1-\gamma}$ has constant $R(x)=\gamma$. (b) Using $A(x)=\frac{1}{2x}$ from Example 1, evaluate the approximation $\pi \approx \tfrac12 A(\mathbb{E}[x])\,\sigma^2$ for P1's gamble and compare to the exact $\pi$. Explain the direction of the error.

**P3 (🔴, Boss-2 core)** An investor with CRRA utility $u(W)=\frac{W^{1-\gamma}}{1-\gamma}$ and initial wealth $w$ puts a share $\theta$ of wealth in a risky asset with random gross return $\tilde R$ and the rest in a safe asset with gross return $R_f$, so final wealth is $W=w\big[R_f+\theta(\tilde R - R_f)\big]$. (a) Write $\max_\theta \mathbb{E}[u(W)]$ and derive the first-order condition. (b) For a *small* risk — excess return $\tilde z = \tilde R - R_f$ with mean $\mu>0$ and variance $\sigma^2$ both small — show the optimal share is $\theta^\* \approx \dfrac{\mu\,R_f}{\gamma\,\sigma^2}$, and hence rises as relative risk aversion $\gamma$ falls. Note what happens to the dependence on $w$.

<details>
<summary>Solutions</summary>

**P1** Outcomes 64 and 100, each with probability $\tfrac12$.

$$\mathbb{E}[x] = \tfrac12(64) + \tfrac12(100) = 82.$$

Expected utility: $\mathbb{E}[u(x)] = \tfrac12\sqrt{64} + \tfrac12\sqrt{100} = \tfrac12(8) + \tfrac12(10) = 9.$

Certainty equivalent solves $\sqrt{CE} = 9 \Rightarrow CE = 81.$

Risk premium: $\pi = \mathbb{E}[x] - CE = 82 - 81 = 1.$

*Check:* $CE=81 < 82=\mathbb{E}[x]$, so $\pi=1>0$ — risk-averse, as $u''=-\tfrac14 x^{-3/2}<0$ demands. And $u(CE)=\sqrt{81}=9=\mathbb{E}[u]$. ✓

**P2** (a) **CARA:** $u=-e^{-\alpha x}$, $u'=\alpha e^{-\alpha x}$, $u''=-\alpha^2 e^{-\alpha x}$. Then
$$A=-\frac{u''}{u'}=\frac{\alpha^2 e^{-\alpha x}}{\alpha e^{-\alpha x}}=\alpha \quad(\text{constant}), \qquad R=xA=\alpha x\ (\text{not constant}).$$
**CRRA:** $u=\frac{x^{1-\gamma}}{1-\gamma}$, $u'=x^{-\gamma}$, $u''=-\gamma x^{-\gamma-1}$. Then
$$A=-\frac{u''}{u'}=\frac{\gamma x^{-\gamma-1}}{x^{-\gamma}}=\frac{\gamma}{x}, \qquad R=xA=\gamma \quad(\text{constant}).$$
(The names are honest: CARA's $A$ is flat, CRRA's $R$ is flat.) ✓

(b) The gamble's variance: outcomes $\pm 18$ from the mean $82$, so $\sigma^2 = 18^2 = 324$. With $A(\mathbb{E}[x]) = \frac{1}{2\cdot 82} = \frac{1}{164}$,
$$\pi \approx \tfrac12 A\,\sigma^2 = \tfrac12 \cdot \frac{1}{164}\cdot 324 = \frac{162}{164} \approx 0.988.$$
Exact $\pi = 1$ from P1. The approximation *under*-shoots by about 1.2%. Direction: the Taylor formula uses $A$ at the mean and truncates at second order; here the gamble is wide (span 36 on wealth ~82), and since $A(x)=\frac{1}{2x}$ is larger on the downside (low-wealth) leg than at the mean, the true aversion averaged across the range exceeds $A(82)$ — so the exact premium is a touch bigger than the small-risk estimate.

*Check:* $0.988$ vs $1$ — right ballpark, small error, and the error's sign matches "$A$ rises where it hurts (low wealth)." ✓

**P3** (a) Final wealth $W=w[R_f+\theta \tilde z]$ with $\tilde z=\tilde R-R_f$. The program is
$$\max_\theta\ \mathbb{E}\!\left[u\big(w[R_f+\theta\tilde z]\big)\right].$$
Differentiate under the expectation; $\frac{\partial W}{\partial\theta}=w\tilde z$, so the FOC is
$$\mathbb{E}\big[u'(W)\,w\,\tilde z\big]=0 \;\Longleftrightarrow\; \mathbb{E}\big[u'(W)\,\tilde z\big]=0 \quad(w>0).$$
In words: at the optimum the marginal utility of wealth is uncorrelated with the excess return — you've loaded up on the risky asset exactly until its last unit no longer moves expected marginal utility.

(b) For small $\tilde z$, Taylor-expand $u'(W)$ about $W_0=wR_f$ (the value when the risky leg contributes nothing):
$$u'(W)\approx u'(wR_f) + u''(wR_f)\,\big(w\theta\tilde z\big).$$
Insert into the FOC:
$$0=\mathbb{E}[u'(W)\tilde z]\approx u'(wR_f)\,\mathbb{E}[\tilde z] + u''(wR_f)\,w\theta\,\mathbb{E}[\tilde z^2].$$
With $\mathbb{E}[\tilde z]=\mu$ and, to leading order, $\mathbb{E}[\tilde z^2]=\mu^2+\sigma^2\approx\sigma^2$ (since $\mu$ is small, $\mu^2\ll\sigma^2$):
$$u'(wR_f)\,\mu + u''(wR_f)\,w\theta\,\sigma^2 \approx 0 \;\Longrightarrow\; \theta^\* \approx \frac{-u'(wR_f)}{u''(wR_f)}\cdot\frac{\mu}{w\sigma^2}=\frac{1}{A(wR_f)}\cdot\frac{\mu}{w\sigma^2}.$$
For CRRA, $A(wR_f)=\dfrac{\gamma}{wR_f}$, so $\dfrac{1}{A(wR_f)}=\dfrac{wR_f}{\gamma}$ and
$$\theta^\* \approx \frac{wR_f}{\gamma}\cdot\frac{\mu}{w\sigma^2}=\frac{\mu R_f}{\gamma\,\sigma^2}.$$
This is **decreasing in $\gamma$**: halve relative risk aversion and you roughly double the risky share. And the wealth $w$ has **cancelled** — CRRA investors hold the same *fraction* of wealth in the risky asset regardless of how rich they are (the constant-relative property, now a portfolio prediction; with $R_f\approx 1$ this is the familiar myopic share $\theta^\*\approx \mu/(\gamma\sigma^2)$).

*Check:* $\theta^\*>0 \iff \mu>0$ (you only take a risky position for a positive risk premium); $\theta^\*\to\infty$ as $\gamma\to 0$ (a near-risk-neutral investor goes all-in); dimensionless, wealth-independent — all as CRRA requires. ✓

</details>

## Flashback

**From Lesson 2.1 (Expected utility):** An investor with $u(x)=\ln x$ ranks lotteries over final wealth by expected utility. Lottery $A$ pays 100 for sure; lottery $B$ is a 50/50 bet between 64 and 144. Which does she prefer — and does the ranking agree with comparing expected payoffs?

<details>
<summary>Solution</summary>

Rank by $\mathbb{E}[u]$, the vNM criterion from 2.1.

$$\mathbb{E}[u(A)] = \ln 100 \approx 4.6052.$$
$$\mathbb{E}[u(B)] = \tfrac12\ln 64 + \tfrac12\ln 144 = \tfrac12(4.1589) + \tfrac12(4.9698) = 4.5643.$$

So $\mathbb{E}[u(A)] > \mathbb{E}[u(B)]$: she prefers the sure 100, i.e. $A \succ B$.

But $\mathbb{E}[x_B] = \tfrac12(64)+\tfrac12(144) = 104 > 100 = \mathbb{E}[x_A]$ — $B$ has the higher *expected payoff*. Expected utility and expected value disagree, and expected utility wins: the concavity of $\ln$ (risk aversion, $A(x)=1/x>0$) makes her forgo 4 dollars of expected wealth to avoid the spread. This is exactly the Jensen gap of this lesson wearing 2.1's clothes.

*Check:* $CE_B=e^{4.5643}\approx 95.98 < 100$, confirming $B$ is worth less than the sure 100 to her. ✓

</details>

## Connections

- **Backward:** this is [2.1](02-01-expected-utility.md)'s expected-utility index put to work — the vNM theorem is what makes $\mathbb{E}[u]$ the right object to average, and its affine-uniqueness is *why* $A,R$ (not $u''$) are the invariant measures.
- **Forward:** CRRA and the risk premium anchor Boss 2 (portfolio choice) and return throughout asset-pricing; the same Lagrangian-and-envelope machinery from Module 1 reappears when the portfolio problem gets a budget constraint.
- **Sideways (calculus):** the risk-premium formula is a pure second-order Taylor expansion — [calc 1.3](../../calc-refresher/lessons/01-03-linearization-and-taylor.md) — and the "average of the curve vs. curve of the average" picture is Jensen's inequality, the convexity fact behind everything from AM–GM to entropy.
