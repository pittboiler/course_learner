# Political Economy · Lesson 5.3: The Meltzer–Richard model

> ⏱ ~15 min · Module 5: Bargaining, coalitions and redistribution · Builds on: [1.1](01-01-from-ballots-to-policy-space.md), [2.1](02-01-the-downsian-spatial-model.md), [`social-choice` 3.4](../../social-choice/lessons/03-04-single-crossing-and-value-restriction.md) · Unlocks: [5.4](05-04-the-political-economy-of-inequality.md)

## Why this matters

[5.1](05-01-legislative-bargaining-baron-ferejohn.md) split a fixed dollar among legislators. Most redistribution is not a fixed dollar: taxing earnings shrinks earnings. Allan Meltzer and Scott Richard ("A Rational Theory of the Size of Government," *Journal of Political Economy*, 1981) asked what tax rate a democracy *chooses* when that leak is built in, and got an answer with one statistic in it: mean income over the decisive voter's income. That ratio is the most-tested prediction in redistributive politics, and [5.4](05-04-the-political-economy-of-inequality.md) is about why it tests badly. What the rate *should* be is [`public-economics`](../../public-economics/syllabus.md)'s question, not this lesson's.

## The idea

A flat tax on earnings, with the revenue handed back as an equal cash grant to everyone, takes in proportion to income and gives back per head. Anyone earning less than the mean gets back more than she pays, at least before anyone changes behavior. But people work less when taxed, so the grant shrinks as the rate climbs, and past some rate it shrinks outright: the top of the Laffer curve.

So each voter has a favorite rate. The poorer she is, the higher it is, because the grant is a bigger deal relative to the tax she pays. Voters line up by wage, so the voter in the middle of the wage line is decisive ([1.1](01-01-from-ballots-to-policy-space.md) did this with a reduced-form leak; here the leak is derived). Her rate depends on how far mean income sits above hers. Raise the top earners' wages and the mean rises while she stays put, so she votes for more. And no one, not even a voter who earns nothing, wants to go past the revenue peak.

## The model

**Players and timing.** An odd number $n$ of citizens $i \in N$ differ only in wage $w_i > 0$, which is common knowledge. Let $m = \frac{1}{n}\sum_i w_i^2$.

1. Citizens choose a tax rate $t \in [0, 1]$ by majority rule (equivalently, two office-seeking candidates commit to platforms and converge to the Condorcet winner, as in [2.1](02-01-the-downsian-spatial-model.md)).
2. Knowing $t$, each citizen chooses labor $\ell_i \ge 0$, taking the transfer $T$ as given (she is one of many: the five-voter examples below stand for five equal-sized types).
3. Revenue is paid back equally: $T = t \cdot \frac{1}{n}\sum_i w_i \ell_i$.

Payoffs are $u_i = c_i - \ell_i^2/2$ with $c_i = (1-t)\,w_i\,\ell_i + T$. The tax is set *before* labor is supplied, and that commitment matters (Example 2). The solution concept is subgame perfection: voters anticipate stage 2.

Meltzer and Richard used a general utility over consumption and leisure and let the least productive not work at all; this quasilinear-quadratic version is the standard textbook specialization, and it keeps every formula exact.

**Stage 2: labor.** The first-order condition $(1-t)w_i = \ell_i$ (the quasilinear labor-supply condition of [`micro-refresher` 1.2](../../micro-refresher/lessons/01-02-utility-maximization-marshallian-demand.md)) gives

$$\ell_i = (1-t)w_i, \qquad y_i = w_i \ell_i = (1-t)w_i^2 .$$

*In words:* the tax is a wage cut, and earnings fall one-for-one with the net-of-tax rate.

**The budget and the Laffer curve.** Mean earnings are $\bar y = (1-t)m$, so

$$T(t) = t(1-t)\,m ,$$

which peaks at $t = 1/2$ with $T = m/4$: the [Laffer curve](../reference.md#laffer-curve). It is [`public-economics` 5.1](../../public-economics/lessons/05-01-the-linear-income-tax.md)'s revenue-maximizing rate $1/(1+e)$ with an earnings elasticity $e = 1$. Since every $y_i$ scales by the same $(1-t)$, the [mean-to-median ratio](../reference.md#mean-to-median-ratio) $\rho = \bar y / y_m = m / w_m^2$ does not depend on $t$; $w_m$ is the median wage.

**Induced preferences.** Substituting stage 2 back gives the [induced preference](../reference.md#induced-preferences) over $t$:

$$V_i(t) = \tfrac{1}{2}(1-t)^2 w_i^2 + t(1-t)\,m .$$

**Proposition (the [Meltzer–Richard model](../reference.md#meltzer-richard-model)).** (i) Voter $i$'s ideal rate is

$$t_i = \frac{m - w_i^2}{2m - w_i^2} \ \text{ if } w_i^2 < m, \qquad t_i = 0 \ \text{ otherwise},$$

and $V_i$ is single-peaked on $[0,1]$. (ii) The profile is single-crossing in $w_i$. (iii) The unique Condorcet winner is the [median voter](../reference.md#median-voter)'s ideal,

$$t^* = \frac{\rho - 1}{2\rho - 1} \ \text{ if } \rho > 1, \qquad t^* = 0 \ \text{ if } \rho \le 1 .$$

(iv) $0 \le t^* < 1/2$, and $t^*$ is strictly increasing in $\rho$.

*In words:* the median earner sets the tax, she taxes more the further mean income sits above hers, and she never goes as far as the revenue peak.

*Proof.*

1. **Peaks.** $V_i'(t) = m(1-2t) - (1-t)w_i^2$ is linear in $t$, with $V_i'(1) = -m < 0$. If $w_i^2 < m$, then $V_i'(0) = m - w_i^2 > 0$, so $V_i'$ changes sign once, from $+$ to $-$: $V_i$ rises then falls, and solving $V_i' = 0$ gives $t_i$. If $w_i^2 \ge m$, then $V_i'(0) \le 0$ and $V_i'(1) < 0$, so the linear $V_i'$ is negative on $(0, 1]$ and $t_i = 0$. **Convexity caveat:** $V_i'' = w_i^2 - 2m$, so voters with $w_i^2 > 2m$ have *convex* $V_i$. They are still single-peaked, because their utility falls throughout $[0,1]$; single-peakedness needs monotonicity on each side of the peak, not concavity.
2. **Single-crossing.** For $t < t'$,
$$V_i(t') - V_i(t) = \tfrac{1}{2}\big[(1-t')^2 - (1-t)^2\big]w_i^2 + T(t') - T(t).$$
The bracket is negative, so the difference strictly falls with $w_i^2$. If voter $i$ weakly prefers the higher rate $t'$, every lower-wage voter strictly prefers it: for every pair of rates, the voters preferring the higher one form an initial segment in wage order.
3. **The median decides.** By the representative voter theorem ([`social-choice` 3.4](../../social-choice/lessons/03-04-single-crossing-and-value-restriction.md), $n$ odd), the majority relation is the median-wage voter's ranking, so her peak beats every other rate and nothing else does. Since $y_i$ increases in $w_i$, she is also the median earner. Substituting $w_m^2 = m/\rho$ into $t_i$ gives $t^*$.
4. **Bounds.** $t^* < 1/2$ iff $2(\rho - 1) < 2\rho - 1$, which always holds. $dt^*/d\rho = 1/(2\rho - 1)^2 > 0$, and $t^* \to 1/2$ as $\rho \to \infty$. ∎

Why the ceiling: for $t > 1/2$, $V_i'(t) = m(1-2t) - (1-t)w_i^2 < 0$ for *every* voter, including one with $w_i = 0$, whose ideal is exactly $1/2$. Past the revenue peak a higher tax shrinks both the grant and everyone's take-home pay, so rates above $1/2$ are Pareto-dominated.

**Where the argument is weakest.** The representative voter theorem needs voters ordered by *one* trait and the policy reduced to *one* number. Let voters differ in wage and in, say, beliefs about their future income or about whether the poor deserve help, and single-crossing in income can fail; add a second issue and the majority core is generically empty ([2.2](02-02-multidimensional-voting-and-chaos.md)). The model also assumes everyone votes, sincerely, on current income alone, and that the rate is fixed before anyone works. Drop these and the decisive voter is no longer the median earner: a turnout-weighted median, a swing group under [probabilistic voting](../reference.md#probabilistic-voting) ([2.3](02-03-probabilistic-voting.md)), or nobody stable at all. The prediction that $t^*$ rises with $\rho$ survives only as long as the identity of the decisive voter does, which is the whole agenda of [5.4](05-04-the-political-economy-of-inequality.md).

## Picture

![Gain from a tax rate t over no tax for the five voters of Example 1, with squared wages 1, 4, 6, 9 and 20 and mean 8. The three poorest curves rise to peaks at 0.47, 0.33 and 0.2 and then fall; the w squared 9 curve falls from the start; the w squared 20 curve, dashed, falls steeply and is convex. A red dashed line marks the median voter's peak at 0.2 and a gray dashed line the revenue peak at 0.5.](assets/05-03-fig1.svg)

The common term $t(1-t)m$ is the same hump for everyone; the tax term $-\tfrac{1}{2}t(2-t)w_i^2$ tilts it down harder the higher the wage. Every peak sits left of 1/2.

## Worked examples

**Example 1 (clean): five types.** Squared wages $w_i^2 = 1, 4, 6, 9, 20$. Then $m = 8$, the median is 6, and $\rho = 8/6 = 4/3$.

- Ideal rates: $7/15$, $1/3$, $1/5$, $0$, $0$. The top type has $20 > 2m = 16$, so her utility is convex in $t$, and still falls on all of $[0,1]$.
- $t^* = (4/3 - 1)/(8/3 - 1) = 1/5$, the median's ideal.
- Checks: $1/5$ beats $0$ by 3–2 (types 1, 4, 6), beats $1/3$ and $7/15$ by 3–2 (types 6, 9, 20), and beats $1/2$ by 4–1. A grid of 2,001 rates finds no rate that beats $1/5$.
- At $t^* = 1/5$: earnings $0.8, 3.2, 4.8, 7.2, 16$, mean $6.4$, and $T = \tfrac{1}{5}\cdot\tfrac{4}{5}\cdot 8 = 1.28$. Earnings ratio $6.4/4.8 = 4/3 = \rho$, as promised.

**Example 2 (the hypothesis bites): no commitment.** Reverse stages 1 and 2: citizens work first, expecting some rate $t^e$, then vote. Labor is now sunk, so ex post voter $i$ gets $(1-t)y_i + t\bar y$ minus a sunk effort cost, which is linear in $t$ with slope $\bar y - y_i$. Anyone earning below the mean wants $t = 1$.

Suppose citizens expect $t^e = 1/5$. Earnings are as in Example 1, with mean $6.4$. Three types earn less (0.8, 3.2, 4.8), so the vote is 3–2 for $t = 1$. The expectation is wrong. The same happens for *every* $t^e < 1$, since earnings keep the wage order and three of the five have $w_i^2 < m$. The only self-fulfilling expectation is $t^e = 1$, under which nobody works: output, transfers and every utility are 0. With commitment the five types got $1.6, 2.56, 3.2, 4.16, 7.68$. Every voter, the poorest included, loses from the inability to commit. The Laffer ceiling was a property of the timing, not of majority rule.

## Watch out

- **You might think** more inequality always means more redistribution in this model. Only $\rho$ enters. Make the poorest poorer and the mean falls while the median holds still: $\rho$ and $t^*$ *fall* (P2).
- **You might think** the median voter is decisive because preferences are concave. Concavity fails for high earners (Example 1's top type), and nothing breaks: single-peakedness and, above all, single-crossing in one trait do the work. The hypothesis people drop is that one trait. Add a second dimension of heterogeneity and the median earner need not be decisive.
- **You might think** the cap $t^* < 1/2$ reflects the median voter's moderation. It is the Laffer peak: a voter with no earnings at all wants exactly $1/2$, and higher rates hurt everyone. With a different labor elasticity the cap moves (P3).

## One-liner

> Under a flat tax and equal grant, the median earner is decisive and taxes at $(\rho - 1)/(2\rho - 1)$, rising in mean over median income and capped below the revenue peak.

## Problems

**P1 (🟢)** *(Formal (a)–(b).)* Five types have squared wages $w_i^2 = 2, 4, 5, 8, 16$, with utility $c - \ell^2/2$, $c = (1-t)w\ell + T$ and a balanced-budget grant, as in the lesson.

(a) Find each type's ideal tax rate. Which type's utility is convex in $t$, and why is that type still single-peaked?
(b) Find the majority-rule rate and the grant it pays. Confirm it by vote counts against $0$, $3/10$ and $5/12$.

**P2 (🟡)** *(Formal (a)–(b) · Exegetical (c).)* Start from P1's economy.

(a) A plant closure drives the poorest type's $w^2$ from 2 to 0; nothing else changes. Find the new $\rho$ and $t^*$.
(b) Instead, training raises the median type's $w^2$ from 5 to 6. Find the new $\rho$ and $t^*$.
(c) An invented memo: "With the bottom fifth's earnings wiped out, inequality has soared, so the electorate will now vote for more redistribution." In 80 words or fewer: what does the model predict, which single statistic decides it, and what would have to change about the decisive voter for the memo to be right?

**P3 (🔴, optional)** *(Formal.)* Generalize the effort cost to $\ell^{1 + 1/\varepsilon}/(1 + 1/\varepsilon)$ with $\varepsilon > 0$, so labor is $\ell_i = ((1-t)w_i)^{\varepsilon}$.

(a) Write $V_i(t)$ and prove the profile is single-crossing in $w_i$.
(b) Show the median's utility is single-peaked when $\rho > 1$, find $t^*$ in terms of $\rho$ and $\varepsilon$, and prove $t^* < 1/(1 + \varepsilon)$, the revenue peak. What happens as $\varepsilon \to 0$?

<details>
<summary>Solutions</summary>

**P1** *(Formal, strict.)*

(a) $m = 35/5 = 7$, $2m = 14$. Ideals from $t_i = (m - w_i^2)/(2m - w_i^2)$ for $w_i^2 < 7$:

- $w^2 = 2$: $5/12$. $w^2 = 4$: $3/10$. $w^2 = 5$: $2/9$. $w^2 = 8$ and $16$: $0$.

$V_i'' = w_i^2 - 2m$, so the $w^2 = 16$ type has $V'' = 2 > 0$: convex. But $V'(0) = 7 - 16 < 0$ and $V'(1) = -7 < 0$, and $V'$ is linear, so $V$ falls on all of $[0,1]$. A monotone function on an interval is single-peaked, with its peak at the endpoint 0.

(b) The median type has $w^2 = 5$; $\rho = 7/5$; $t^* = (2/5)/(9/5) = 2/9$. Grant $T = \tfrac{2}{9}\cdot\tfrac{7}{9}\cdot 7 = 98/81 \approx 1.21$. Votes: $2/9$ beats $0$ 3–2 (types 2, 4, 5); beats $3/10$ 3–2 (types 5, 8, 16); beats $5/12$ 4–1 (all but type 2). Single-crossing guarantees the pattern: everyone below the median prefers the higher rate, everyone above the lower.

**Wrong turns:** Averaging the ideal rates (mean $\approx 0.19$) instead of taking the median's. Declaring the $w^2 = 16$ type "not single-peaked" because $V$ is convex.

---

**P2** *(Formal (a)–(b) · Exegetical (c), strict.)*

(a) $m = 33/5 = 6.6$, median still 5, $\rho = 33/25 = 1.32$, $t^* = 0.32/1.64 = 8/41 \approx 0.195$, down from $2/9 \approx 0.222$.

(b) $m = 36/5 = 7.2$, median 6, $\rho = 6/5$, $t^* = 0.2/1.4 = 1/7 \approx 0.143$. The median caught up with the mean.

**Must hit, strict (c):**

- The model predicts a *lower* rate: $t^*$ depends only on $\rho$, which falls from $7/5$ to $33/25$ because the mean drops while the median is unchanged.
- For the memo to be right, the change must move the decisive voter: the newly poor must become pivotal (higher turnout among them, a larger poor group that shifts the median, or a franchise change), or voters must care about something besides own income.

**Wrong turns:** Equating "inequality" with $\rho$. A loss at the bottom raises most inequality measures but lowers mean over median.

---

**P3** *(Formal, strict.)*

(a) Let $a_i = w_i^{1+\varepsilon}$ and $M = \frac{1}{n}\sum a_i$. Labor's value is $((1-t)w_i)^{1+\varepsilon}/(1+\varepsilon)$, earnings are $y_i = (1-t)^{\varepsilon} a_i$, and $T = t(1-t)^{\varepsilon}M$, so

$$V_i(t) = \frac{(1-t)^{1+\varepsilon}a_i}{1+\varepsilon} + t(1-t)^{\varepsilon}M .$$

For $t < t'$, $\partial[V_i(t') - V_i(t)]/\partial a_i = [(1-t')^{1+\varepsilon} - (1-t)^{1+\varepsilon}]/(1+\varepsilon) < 0$. The gain from the higher rate falls with $a_i$, hence with $w_i$: single-crossing. ∎

(b) $V_i'(t) = (1-t)^{\varepsilon - 1}\big[(1-t)(M - a_i) - \varepsilon t M\big]$. For the median, $\rho = M/a_m > 1$; the bracket is linear in $t$, equals $M - a_m > 0$ at $t = 0$ and $-\varepsilon M < 0$ at $t = 1$, so it changes sign once, from $+$ to $-$: single-peaked. Setting it to zero and dividing by $a_m$:

$$t^* = \frac{\rho - 1}{(\rho - 1) + \varepsilon\rho}.$$

At $\varepsilon = 1$ this is $(\rho - 1)/(2\rho - 1)$. Revenue $t(1-t)^{\varepsilon}M$ peaks at $1/(1+\varepsilon)$, and $t^* < 1/(1+\varepsilon)$ iff $(1+\varepsilon)(\rho - 1) < (1+\varepsilon)\rho - 1$, i.e. $-(1+\varepsilon) < -1$. Always true. ∎ As $\varepsilon \to 0$ labor stops responding, $t^* \to 1$ and the cap disappears: the leak, not majority rule, was holding the rate down. (At $\rho = 4/3$: $\varepsilon = 1/2$ gives $1/3$, $\varepsilon = 2$ gives $1/9$.)

**Wrong turns:** Forgetting that $T$ also shrinks with $(1-t)^{\varepsilon}$. Proving only that ideal rates fall with $w_i$; single-crossing is a claim about *every* pair of rates, which is what the representative voter theorem needs.

</details>

## Flashback

**From Lesson [5.1](05-01-legislative-bargaining-baron-ferejohn.md) (Legislative bargaining: Baron–Ferejohn):** *(Formal (a) · Exegetical (b).)* An 11-member council divides a projects budget of 1 under Baron and Ferejohn's closed rule: equal recognition, $\delta = 0.55$, stationary strategies, members voting as if pivotal. An invented reform memo: "Raise the votes needed to pass the bill from 6 to 8. The chair will then have to buy two more votes, which drives up the price of every vote, and every member's expected share of the budget will rise."

(a) Extend the lesson's proof to a quota of $k$ yes votes, the proposer's included. Find each member's ex ante value, the price of a vote and the proposer's share, and evaluate them at $k = 6$ and $k = 8$.

(b) In 80 words or fewer: which of the memo's two claims survive, and what does the reform actually change?

<details>
<summary>Solution</summary>

(a) Suppose every member has value $v$. A vote costs $\delta v$, so the proposer buys the $k - 1$ votes she needs at that price and keeps $1 - \delta v(k - 1)$. A member who is not recognized is bought with probability $(k-1)/(n-1)$. Consistency:

$$v = \frac{1}{n}\bigl(1 - \delta v(k-1)\bigr) + \frac{n-1}{n}\cdot\frac{k-1}{n-1}\cdot\delta v = \frac1n - \frac{\delta v(k-1)}{n} + \frac{\delta v(k-1)}{n},$$

so $v = 1/n = 1/11$ for every $k$. A vote costs $\delta/n = 0.55/11 = 0.05$. The proposer keeps $1 - 0.05(k - 1)$: **0.75** at $k = 6$, **0.65** at $k = 8$. Passing beats failing ($0.65 > \delta v = 0.05$); a vote beyond $k - 1$ costs 0.05 and buys nothing; underpaying any partner sinks the bill and leaves the proposer 0.05. A simulation of the $k = 8$ game gives each member about 0.091, matching $1/11$.

**Must hit, strict (b):**

- Neither claim survives. A vote's price is its owner's value of rejecting and starting over, $\delta/n = 0.05$ under either quota.
- Expected shares stay $1/11$: the budget passes in the first session and members are symmetric before the lottery.
- What changes is the split after recognition: the chair's take falls from 0.75 to 0.65, and a non-proposer's chance of being bought rises from $1/2$ to $7/10$.

**Wrong turns:** Pricing votes by demand ("she needs more, so each costs more"): the price is each voter's outside option, which the quota leaves at $\delta/n$. Using the majority formula $1 - \delta\frac{n-1}{2n}$ at $k = 8$.

**Model answer:** Neither survives. Each vote costs its owner's value of voting the bill down and starting over, $0.05$, whatever the quota, and each member's expected share stays $1/11$, since the budget passes at once and the recognition lottery is fair. The reform changes the split after the lottery: the chair keeps 0.65 instead of 0.75, and an ordinary member is bought with probability $7/10$ instead of $1/2$. Proposer power shrinks; expected shares do not move.

</details>

## Connections

- **Backward:** [1.1](01-01-from-ballots-to-policy-space.md) ran the same argument with a reduced-form leak; here the leak is derived from labor supply. The decisiveness step is [`social-choice` 3.4](../../social-choice/lessons/03-04-single-crossing-and-value-restriction.md)'s representative voter theorem, and the Laffer ceiling is [`public-economics` 5.1](../../public-economics/lessons/05-01-the-linear-income-tax.md)'s revenue-maximizing rate.
- **Forward:** [5.4](05-04-the-political-economy-of-inequality.md) asks why observed [redistribution tracks inequality](../reference.md#inequality-and-redistribution) so weakly: mobility beliefs, skewed turnout, a second dimension. Meltzer and Richard's own tests (*Public Choice*, 1983) tracked U.S. redistributive spending against $\rho$; whether franchise extensions confirm the model is [`empirical-political-economy`](../../empirical-political-economy/syllabus.md) 3.4's question.
- **Sideways:** Example 2 is the time-inconsistency problem of capital levies and monetary policy: a majority that cannot bind itself expropriates sunk investment, and everyone loses. [`public-economics`](../../public-economics/syllabus.md) asks what rate a planner with welfare weights would pick; this lesson asks only what the median earner picks.
