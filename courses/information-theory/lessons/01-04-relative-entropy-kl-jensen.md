# Information Theory · Lesson 1.4: Relative entropy (KL divergence) and Jensen

> ⏱ ~15 min · Module 1: Entropy and information measures · Builds on: [1.3 Mutual information](01-03-mutual-information.md) · Unlocks: [1.5 The data-processing inequality](01-05-data-processing-inequality.md)

## Why this matters

Every real code is built on a *model* of the source — an assumption about how often each symbol shows up. What does it cost you when that model is wrong? Relative entropy, also called **KL divergence**, is the exact answer: the extra bits per symbol you waste by coding for the wrong distribution. It also turns out to be the single inequality the whole subject leans on — entropy's ceiling, the non-negativity of mutual information, the coding-length gaps of Module 2, and the cross-entropy loss that trains every classifier in [statistical-learning](../../statistical-learning/syllabus.md) all fall out of one fact: KL divergence is never negative.

## The idea

You built a codebook assuming letters follow distribution $q$ — short codewords for the symbols $q$ says are common, long ones for the rare. But the truth is $p$. If $p$ and $q$ disagree, you'll spend long codewords on symbols that are actually frequent and waste your short ones. The **average penalty**, in bits per symbol, is the KL divergence $D(p\,\|\,q)$.

Two facts make it the backbone of the field. First, the penalty is **never negative** — you can never beat the code matched to the true distribution, and you break even *only* when your model is exactly right, $q = p$. That is **Gibbs' inequality**. Second, it is **asymmetric**: being wrong in one direction costs a different amount than being wrong in the other, so $D(p\,\|\,q) \neq D(q\,\|\,p)$ in general. KL is a "distance" only in a loose, one-directional sense — it's a *divergence*, not a metric.

The one tool that proves all of this is **Jensen's inequality**: for a curve that bows the way $\log$ does (concave), the average of the function sits *below* the function of the average.

## The formal version

**Relative entropy (KL divergence).** For distributions $p$ and $q$ on the same alphabet $\mathcal{X}$,

$$D(p\,\|\,q) = \sum_{x \in \mathcal{X}} p(x)\,\log\frac{p(x)}{q(x)},$$

with the conventions $0\log\frac{0}{q}=0$ and $p\log\frac{p}{0}=\infty$ (logs base 2, so the unit is bits). *In words:* average the log-ratio "how much more likely is $x$ under the truth $p$ than under my model $q$," weighting by the truth $p$ — that average is the extra bits per symbol the wrong model costs.

**Jensen's inequality (the tool).** For a random variable $X$ and a **convex** function $\varphi$ (bowl-shaped, like $x^2$),

$$\mathbb{E}[\varphi(X)] \geq \varphi(\mathbb{E}[X]);$$

for a **concave** $\varphi$ (dome-shaped, like $\log$), the inequality **reverses**: $\mathbb{E}[\varphi(X)] \leq \varphi(\mathbb{E}[X])$. *In words:* averaging and then bending gives a different answer than bending and then averaging, and for a concave curve the average-first path lands lower. Equality holds only when $X$ is constant or $\varphi$ is a straight line over $X$'s range.

**Gibbs' inequality (the master result).** $D(p\,\|\,q) \geq 0$, with equality **iff** $p = q$. *In words:* the wrong model never saves you bits, and matches the right model's cost only when it *is* the right model.

*Proof (Jensen on the concave $\log$).* Let $Z = \dfrac{q(x)}{p(x)}$, a random variable when $x \sim p$. Then

$$-D(p\,\|\,q) = \sum_x p(x)\log\frac{q(x)}{p(x)} = \mathbb{E}_p[\log Z] \;\leq\; \log \mathbb{E}_p[Z] = \log\sum_x p(x)\frac{q(x)}{p(x)} = \log\sum_x q(x) = \log 1 = 0.$$

So $-D(p\,\|\,q) \le 0$, i.e. $D(p\,\|\,q)\ge 0$. Because $\log$ is *strictly* concave, Jensen is an equality only when $Z$ is constant — i.e. $q(x)/p(x)$ is the same for every $x$ — which forces $q = p$. $\blacksquare$

## Picture

![A concave curve with its chord lying below it; the mean of the function values sits below the function of the mean, so E[phi(X)] is less than phi(E[X])](assets/01-04-fig1.svg)

The dashed line is the **chord** joining two points on a concave curve; a concave curve always sits *above* its chords. Read the picture at $\mathbb{E}[X]$: the chord height is the average $\mathbb{E}[\varphi(X)]$, the curve height is $\varphi(\mathbb{E}[X])$, and the curve is on top. That vertical gap, always $\ge 0$, *is* $D(p\,\|\,q)$ in disguise.

## Worked examples

**Example 1 (KL is asymmetric — computed).** Let $p = (\tfrac12,\tfrac12)$ and $q = (\tfrac14,\tfrac34)$ on $\{0,1\}$.

$$D(p\,\|\,q) = \tfrac12\log\frac{1/2}{1/4} + \tfrac12\log\frac{1/2}{3/4} = \tfrac12\log 2 + \tfrac12\log\tfrac23 = \tfrac12(1) + \tfrac12(1-\log_2 3) \approx 0.208 \text{ bits.}$$

Now swap the roles:

$$D(q\,\|\,p) = \tfrac14\log\frac{1/4}{1/2} + \tfrac34\log\frac{3/4}{1/2} = \tfrac14\log\tfrac12 + \tfrac34\log\tfrac32 = -\tfrac14 + \tfrac34(\log_2 3 - 1) \approx 0.189 \text{ bits.}$$

Both are positive (Gibbs), but $0.208 \neq 0.189$: **the direction matters.** Coding a fair coin with a biased model costs a different amount than the reverse.

**Example 2 (entropy's ceiling, $H(X) \le \log|\mathcal{X}|$).** Let $u$ be the **uniform** distribution, $u(x) = 1/|\mathcal{X}|$. Compute its divergence from the true $p$:

$$D(p\,\|\,u) = \sum_x p(x)\log\frac{p(x)}{1/|\mathcal{X}|} = \sum_x p(x)\log p(x) + \sum_x p(x)\log|\mathcal{X}| = -H(X) + \log|\mathcal{X}|.$$

Gibbs says the left side is $\ge 0$, so $\log|\mathcal{X}| - H(X) \ge 0$, i.e.

$$\boxed{\,H(X) \le \log|\mathcal{X}|\,}$$

with equality iff $p = u$. *In words:* uncertainty is maximized by the uniform distribution, and its ceiling is $\log$ of the alphabet size — a fair 6-sided die ($\log_2 6 \approx 2.585$ bits) is the most unpredictable die there is. The entropy "gap" $\log|\mathcal{X}| - H(X)$ you leave on the table is *literally* the divergence from uniform.

## Watch out

- **You might think $D$ is a distance, but it isn't symmetric.** $D(p\,\|\,q) \neq D(q\,\|\,p)$ (Example 1), and it violates the triangle inequality too — it is a *divergence*. In machine learning the direction is a modeling choice: "forward" KL $D(\text{data}\,\|\,\text{model})$ spreads the model to cover all the data (mean-seeking); "reverse" KL $D(\text{model}\,\|\,\text{data})$ lets it collapse onto one mode. Same distributions, different fits. What *is* always true: $D \ge 0$, and $D = 0$ only when $p = q$.
- **You might think Jensen always points one way, but its direction flips with curvature.** Convex $\varphi$: $\mathbb{E}[\varphi(X)] \ge \varphi(\mathbb{E}[X])$. Concave $\varphi$ (like $\log$): the $\le$ version. Track whether your function bows up or down before you write the inequality — getting it backwards silently flips every downstream sign.
- **You might read "$\log|\mathcal{X}|$ is the max entropy" as a claim about any distribution.** It's the ceiling, attained *only* by the uniform; a peaked distribution sits strictly below it, and the shortfall is exactly $D(p\,\|\,u)$.

## One-liner

> KL divergence $D(p\,\|\,q) = \sum p\log\frac{p}{q}$ is the bit-tax for using the wrong model $q$ — always $\ge 0$ (Gibbs, via Jensen on the concave $\log$), zero only when $q=p$, and asymmetric, so it's a divergence, not a distance.

## Problems

**P1 (🟢)** Compute $D(p\,\|\,q)$ for $p = (\tfrac14,\tfrac34)$ and $q = (\tfrac34,\tfrac14)$ on $\{0,1\}$. Simplify to a closed form in $\log_2 3$, then give a decimal.

**P2 (🟡)** A loaded 6-sided die has $p = (0.1,0.1,0.1,0.1,0.1,0.5)$. By how many bits does its entropy fall short of the maximum $\log_2 6$? Compute this *as a KL divergence* $D(p\,\|\,u)$ from the uniform $u$, and confirm it equals $\log_2 6 - H(p)$.

**P3 (🔴, optional — Jensen as risk aversion)** An investor with utility $u(w) = \log_2 w$ (concave) faces a gamble paying wealth $1$ or $4$, each with probability $\tfrac12$. (a) Show directly that $\mathbb{E}[u(W)] \le u(\mathbb{E}[W])$. (b) Find the **certainty equivalent** $c$ — the sure wealth with $u(c) = \mathbb{E}[u(W)]$ — and explain why $c < \mathbb{E}[W]$ is exactly Jensen's inequality. (This is the [grad-micro](../../grad-micro/syllabus.md) bridge: risk aversion *is* concavity of utility, read through Jensen.)

<details>
<summary>Solutions</summary>

**P1** 

$$D(p\,\|\,q) = \tfrac14\log_2\frac{1/4}{3/4} + \tfrac34\log_2\frac{3/4}{1/4} = \tfrac14\log_2\tfrac13 + \tfrac34\log_2 3 = -\tfrac14\log_2 3 + \tfrac34\log_2 3 = \tfrac12\log_2 3 \approx 0.792 \text{ bits.}$$

Positive, as Gibbs guarantees, and cleanly $\tfrac12\log_2 3$.

**P2** With $u(x) = 1/6$,

$$D(p\,\|\,u) = \sum_x p(x)\log_2\big(6\,p(x)\big).$$

The five symbols with $p=0.1$: each contributes $0.1\log_2(0.6) = 0.1(-0.737) = -0.0737$, and there are five of them: $-0.368$. The symbol with $p=0.5$: $0.5\log_2(3) = 0.5(1.585) = 0.792$. Total:

$$D(p\,\|\,u) \approx -0.368 + 0.792 = 0.424 \text{ bits.}$$

Check against $\log_2 6 - H(p)$: $H(p) = -5(0.1\log_2 0.1) - 0.5\log_2 0.5 = -0.5(-3.322) + 0.5 = 1.661 + 0.5 = 2.161$ bits, and $\log_2 6 = 2.585$, so $2.585 - 2.161 = 0.424$ bits. ✓ The die is $0.424$ bits less uncertain than a fair one, and that shortfall *is* its divergence from uniform.

**P3** (a) $\mathbb{E}[W] = \tfrac12(1) + \tfrac12(4) = 2.5$, so $u(\mathbb{E}[W]) = \log_2 2.5 \approx 1.322$. And $\mathbb{E}[u(W)] = \tfrac12\log_2 1 + \tfrac12\log_2 4 = 0 + \tfrac12(2) = 1$. Indeed $1 \le 1.322$: averaging the (concave) log values lands below the log of the average.

(b) $u(c) = \mathbb{E}[u(W)] = 1$ means $\log_2 c = 1$, so $c = 2$. Since $2 < 2.5 = \mathbb{E}[W]$, the investor would accept a *sure* $2$ over a gamble worth $2.5$ on average — she pays a $0.5$ risk premium. That $c < \mathbb{E}[W]$ is precisely $\varphi(c) = \mathbb{E}[\varphi(W)] \le \varphi(\mathbb{E}[W])$ for concave $\varphi$, run through the increasing $\varphi$: Jensen's gap and risk aversion are the same phenomenon.

</details>

## Flashback

**From Lesson 1.3 (Mutual information):** A joint distribution on $(X,Y) \in \{0,1\}^2$ is $p(0,0)=\tfrac12,\ p(0,1)=\tfrac14,\ p(1,0)=0,\ p(1,1)=\tfrac14$. Compute $I(X;Y)$, and confirm it is $\ge 0$ — the fact this lesson just proved.

<details>
<summary>Solution</summary>

Marginals: $p_X = (\tfrac34, \tfrac14)$ (sum the rows), $p_Y = (\tfrac12, \tfrac12)$ (sum the columns).

$$H(X) = -\tfrac34\log_2\tfrac34 - \tfrac14\log_2\tfrac14 = \tfrac34(0.415) + \tfrac14(2) = 0.311 + 0.5 = 0.811 \text{ bits},$$
$$H(Y) = 1 \text{ bit (fair)}, \qquad H(X,Y) = -\tfrac12\log_2\tfrac12 - \tfrac14\log_2\tfrac14 - \tfrac14\log_2\tfrac14 = 0.5 + 0.5 + 0.5 = 1.5 \text{ bits}$$

(the $p(1,0)=0$ cell contributes $0$). Then

$$I(X;Y) = H(X) + H(Y) - H(X,Y) = 0.811 + 1 - 1.5 = 0.311 \text{ bits} \; \ge 0. \checkmark$$

Equivalently, $I(X;Y) = D\big(p(x,y)\,\|\,p(x)p(y)\big)$ — the divergence of the true joint from the "if they were independent" product — and Gibbs makes that non-negative, with $I = 0$ exactly when $X \perp Y$. Here $I > 0$, so knowing $X$ (especially $X=1$, which pins $Y=1$) tells you something about $Y$.

</details>

## Connections

- **Backward:** [1.3](01-03-mutual-information.md) is now sealed — mutual information is $I(X;Y) = D(p(x,y)\,\|\,p(x)p(y))$, so $I \ge 0$ is just Gibbs, and $I = 0 \iff$ independence. And [1.1](01-01-entropy-uncertainty-surprise.md)'s claim that entropy tops out at $\log|\mathcal{X}|$ is Example 2: the gap to the ceiling is $D(p\,\|\,u)$.
- **Forward:** in Module 2, [source coding](02-02-source-coding-theorem.md) shows the average codeword length of a code matched to $q$ exceeds the true entropy by exactly $D(p\,\|\,q)$ — the "extra bits" story made literal. In [4.4 max-entropy](04-04-maximum-entropy-stat-mech.md), choosing the least-committal distribution under constraints is *minimizing* KL to the uniform.
- **Sideways ([statistical-learning](../../statistical-learning/syllabus.md)):** the **cross-entropy loss** every classifier minimizes is $H(p,q) = H(p) + D(p\,\|\,q)$, where $p$ is the empirical data distribution; since $H(p)$ is fixed, minimizing cross-entropy *is* minimizing $D(\text{data}\,\|\,\text{model})$ — fitting a model is squeezing KL divergence to zero.
- **Sideways ([stat-mech](../../stat-mech/syllabus.md)):** free-energy differences between a system and a reference are KL divergences; the second law's "free energy only decreases" is a relative-entropy statement in thermodynamic clothing.
- **Sideways ([grad-micro](../../grad-micro/syllabus.md)):** Jensen's inequality on a concave utility is precisely **risk aversion** (P3) — the certainty equivalent falls below expected wealth by the same bending that makes $D \ge 0$.
