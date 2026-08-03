# Information Theory · Lesson 1.1: Entropy — uncertainty and surprise

> ⏱ ~15 min · Module 1: Entropy and information measures · Builds on: [syllabus](../syllabus.md) · Unlocks: [1.2 Joint, conditional entropy, and the chain rule](01-02-joint-conditional-entropy-chain-rule.md)

## Why this matters

Every question about compressing files, transmitting over noisy wires, or measuring how much a dataset "tells you" bottoms out in one number: entropy. It's the honest answer to "how uncertain am I?" made quantitative — and it turns out to also be the exact answer to "how many bits do I need to store this?" That two questions this different share one formula is the whole reason information theory exists. This lesson builds that formula from a single intuition — surprise — and everything in the course hangs off it.

## The idea

Start with a feeling, not a formula: **surprise**. Learning that a rare thing happened is surprising; learning that a near-certain thing happened tells you almost nothing. If I tell you the sun rose this morning, you shrug. If I tell you it didn't, you sit up. So the information content of an outcome should be *large when the outcome was improbable* and *near zero when it was almost sure*.

We also want surprise to **add up** for independent events: hearing two unrelated facts should give you the total of their individual surprises. Probabilities of independent events *multiply* ($p_1 p_2$), and the one operation that turns multiplication into addition is the **logarithm**. Those two demands — decreasing in $p$, additive over independence — pin down the surprise of an outcome to essentially one form: $-\log p$. (The minus sign is just because $\log$ of a number below 1 is negative, and we want surprise positive.)

Now, **entropy is just your average surprise, before you look.** A random variable will hand you *some* outcome; each possible outcome carries its own surprise $-\log p$; weight each by how often it occurs and add them up. That expected surprise is $H(X)$ — one number summarizing how uncertain the whole situation is.

## The formal version

Let $X$ be a discrete random variable taking values $x$ in a set $\mathcal{X}$, with probability mass function $p(x) = \Pr(X = x)$.

**Self-information (surprise) of an outcome.**

$$I(x) = -\log p(x).$$

In words: the surprise of seeing $x$ is minus the log of how likely $x$ was — small for likely outcomes, large for rare ones. The **base of the log sets the unit only**: base 2 gives **bits**, natural log (base $e$) gives **nats**. To convert, use $\log_2 y = \frac{\ln y}{\ln 2}$, i.e. multiply nats by $\log_2 e \approx 1.4427$, or bits by $\ln 2 \approx 0.6931$ to get nats. We use base 2 unless noted.

**Entropy.** The entropy of $X$ is the expected surprise:

$$H(X) = \mathbb{E}[-\log p(X)] = -\sum_{x \in \mathcal{X}} p(x)\log p(x).$$

In words: average the surprise $-\log p(x)$ over all outcomes, weighting each by its probability $p(x)$. Read it three ways — all the same number: **(a)** the average surprise you'll feel; **(b)** the average number of bits needed to describe $X$ (the compression view, made precise in [2.2 Source coding theorem](02-02-source-coding-theorem.md)); **(c)** your uncertainty *before* observing $X$. We use the convention $0\log 0 = 0$ (an impossible outcome contributes nothing), justified because $p\log p \to 0$ as $p \to 0$.

**Basic properties.**

- $H(X) \ge 0$, with $H(X) = 0$ iff $X$ is deterministic (some outcome has probability 1). In words: uncertainty is never negative, and it's zero exactly when there's nothing to be uncertain about.
- $H(X) \le \log|\mathcal{X}|$, with equality iff $X$ is uniform. In words: you're most uncertain when every outcome is equally likely — the uniform distribution is maximum ignorance. (Proved cleanly in [1.4 Relative entropy, KL, Jensen](01-04-relative-entropy-kl-jensen.md).)

**Binary entropy.** For a two-outcome variable with probabilities $p$ and $1-p$, write $H(p)$ for its entropy:

$$H(p) = -p\log_2 p - (1-p)\log_2(1-p).$$

In words: the uncertainty of a single biased coin, as a function of its bias $p$. It is symmetric about $p = \tfrac12$, rises to a maximum of $1$ bit at $p = \tfrac12$ (a fair coin), and drops to $0$ at $p = 0$ and $p = 1$ (a coin that always lands one way).

## Picture

![The binary entropy function H(p): a concave hump on [0,1], peaking at 1 bit when p = 1/2 and hitting 0 at both ends](assets/01-01-fig1.svg)

The shape *is* the intuition: uncertainty is highest in the middle (a fair coin — you have no idea) and collapses to zero at the edges (a rigged coin — you already know the answer). Concave, symmetric, one peak.

## Worked examples

**Example 1 (mechanical — compute $H$).**

*A biased coin*, $p = \tfrac14$ for heads, $\tfrac34$ for tails:

$$H = -\tfrac14\log_2\tfrac14 - \tfrac34\log_2\tfrac34 = \tfrac14\cdot 2 + \tfrac34\log_2\tfrac43.$$

Here $-\log_2\tfrac14 = \log_2 4 = 2$, and $\log_2\tfrac43 = \log_2 4 - \log_2 3 = 2 - 1.585 = 0.415$. So

$$H = 0.5 + 0.75 \times 0.415 = 0.5 + 0.311 = 0.811 \text{ bits}.$$

Less than the 1 bit of a fair coin — the bias makes it *more* predictable, hence less uncertain.

*A fair six-sided die*, each face probability $\tfrac16$. It's uniform, so $H = \log_2 6$:

$$H = \log_2 6 = \log_2 2 + \log_2 3 = 1 + 1.585 = 2.585 \text{ bits}.$$

More faces, more uncertainty — and this is the *maximum* for six outcomes, since the die is uniform.

**Example 2 (why the peak sits at $p = \tfrac12$, plus a unit conversion).** Treat $H(p) = -p\log_2 p - (1-p)\log_2(1-p)$ as a function on $(0,1)$ and differentiate. Using $\frac{d}{dp}\big[p\log_2 p\big] = \log_2 p + \log_2 e$ (from the natural-log derivative, rescaled):

$$H'(p) = -\big(\log_2 p + \log_2 e\big) + \big(\log_2(1-p) + \log_2 e\big) = \log_2\frac{1-p}{p}.$$

Setting $H'(p) = 0$ needs $\frac{1-p}{p} = 1$, i.e. $p = \tfrac12$. And $H''(p) < 0$ everywhere (the curve is concave), so this critical point is the unique maximum, with value $H(\tfrac12) = 1$ bit. That confirms the peak in the picture — no guessing.

*Convert that maximum to nats:* $1 \text{ bit} \times \ln 2 = 0.693$ nats. Same uncertainty, different ruler. (In nats, the fair coin's entropy is $\ln 2$; the die's is $\ln 6 \approx 1.79$ nats.)

## Watch out

- **You might think entropy depends on *what* the outcomes are — but it depends only on their probabilities.** Relabeling "heads/tails" as "0/1" or "win \$1,000/lose \$1,000" changes $H$ by nothing; $H$ sees the distribution $\{p(x)\}$, never the outcome values. (A die labeled with prime numbers has the same entropy as one labeled $1$–$6$.)
- **You might think $0 \log 0$ is undefined and breaks the formula — use the convention $0\log 0 = 0$.** Outcomes that can't happen add zero surprise; the limit $p\log p \to 0$ makes this rigorous, so impossible outcomes are simply invisible to $H$.
- **You might think switching to nats changes "how much information" there is — it only changes the unit.** Bits vs. nats is meters vs. feet: the underlying quantity is fixed, the number in front rescales by $\ln 2$. Don't compare a bit-valued entropy to a nat-valued one without converting.
- **You might think a peaked (confident) distribution has high entropy — it's the opposite.** Entropy is *maximized* by the uniform distribution (maximum uncertainty) and *minimized* — all the way to $0$ — by a sure thing. High entropy means hard to predict, not "spread over large values."

## One-liner

> Entropy is your average surprise before you look — $H(X) = -\sum p\log p$ — maximal when all outcomes are equally likely, zero when you already know the answer, and measured in bits or nats only by choice of log base.

## Problems

**P1 (🟢)** A weather station reports one of four conditions with probabilities $\Pr(\text{sun}) = \tfrac12$, $\Pr(\text{cloud}) = \tfrac14$, $\Pr(\text{rain}) = \tfrac18$, $\Pr(\text{snow}) = \tfrac18$. Compute $H(X)$ in bits. Is it larger or smaller than the entropy of a *uniform* four-outcome variable, and why?

**P2 (🟡)** Without a calculator, order these three sources by entropy, then give each value in bits: (a) a fair coin; (b) a coin with $p = 0.9$; (c) a fair eight-sided die. For (b), you may leave the answer as an expression and estimate it to one decimal.

**P3 (🔴, optional)** A variable $X$ has entropy $H(X) = 3$ bits. You define $Y = g(X)$ where $g$ is a *one-to-one* (invertible) relabeling of the outcomes. What is $H(Y)$, and why? Then suppose instead $g$ is *many-to-one* (it merges some outcomes) — argue in one sentence whether $H(Y)$ can exceed $3$ bits.

<details>
<summary>Solutions</summary>

**P1** Compute term by term with $-\log_2 p$: surprises are $\log_2 2 = 1$, $\log_2 4 = 2$, $\log_2 8 = 3$, $\log_2 8 = 3$ bits.

$$H = \tfrac12(1) + \tfrac14(2) + \tfrac18(3) + \tfrac18(3) = 0.5 + 0.5 + 0.375 + 0.375 = 1.75 \text{ bits}.$$

A uniform four-outcome variable has $H = \log_2 4 = 2$ bits. Ours is **smaller** ($1.75 < 2$) — the non-uniform distribution is more predictable (sun is likely), and the uniform distribution is the unique maximizer of entropy for a fixed number of outcomes.

**P2** 
- (a) Fair coin: $H = 1$ bit.
- (b) $p = 0.9$ coin: $H = -0.9\log_2 0.9 - 0.1\log_2 0.1$. Now $\log_2 0.9 = \frac{\ln 0.9}{\ln 2} = \frac{-0.1054}{0.6931} = -0.152$, and $\log_2 0.1 = -\log_2 10 = -3.322$. So $H = 0.9(0.152) + 0.1(3.322) = 0.137 + 0.332 = 0.469 \approx 0.5$ bits.
- (c) Fair 8-sided die: $H = \log_2 8 = 3$ bits.

Order, least to most uncertain: **(b) $\approx 0.47 <$ (a) $= 1 <$ (c) $= 3$.** The lopsided coin is the most predictable; the 8-sided die the least.

**P3** A one-to-one relabeling permutes the outcomes but leaves the *probabilities* untouched — the multiset $\{p(x)\}$ is identical, and $H$ depends only on that multiset (the first "Watch out"). So $H(Y) = H(X) = 3$ bits.

If $g$ is many-to-one, it merges outcomes: the merged outcome's probability is the *sum* of the merged pieces. Merging can only reduce or preserve entropy, never increase it — collapsing distinctions destroys information, so $H(Y) \le 3$ bits, and it *cannot* exceed 3. (Formally this is a special case of the data-processing idea in [1.5 Data-processing inequality](01-05-data-processing-inequality.md).)

</details>

## Connections

- **Forward:** [1.2 Joint, conditional entropy, and the chain rule](01-02-joint-conditional-entropy-chain-rule.md) extends $H$ to pairs of variables and asks how much uncertainty remains after you observe one of them.
- **Forward:** the bound $H(X) \le \log|\mathcal{X}|$ asserted here is proved via KL divergence and Jensen's inequality in [1.4 Relative entropy, KL, Jensen](01-04-relative-entropy-kl-jensen.md).
- **Forward:** reading (b) — "average bits to describe $X$" — becomes a theorem in [2.2 Source coding theorem](02-02-source-coding-theorem.md): $H(X)$ is the exact compression limit in bits per symbol, unbeatable on average.
- **Sideways (statistical mechanics):** Shannon's $H = -\sum p\log p$ is, up to Boltzmann's constant $k_B$ and a change of log base, the Gibbs/Boltzmann entropy of physics — the same quantity counting microstates of a gas. See [stat-mech](../../stat-mech/syllabus.md); [4.4 Maximum entropy and stat-mech](04-04-maximum-entropy-stat-mech.md) makes the bridge explicit.
- **Sideways (probability):** $H(X) = \mathbb{E}[-\log p(X)]$ is an ordinary expectation of a function of $X$ — everything you know about expectations from [probability-theory](../../probability-theory/syllabus.md) applies directly, and the law of large numbers acting on $-\log p(X)$ is exactly what powers the AEP in [2.1 Asymptotic equipartition property](02-01-asymptotic-equipartition-property.md).
