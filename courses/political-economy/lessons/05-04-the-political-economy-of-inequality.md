# Political Economy · Lesson 5.4: The political economy of inequality

> ⏱ ~15 min · Module 5: Bargaining, coalitions and redistribution · Builds on: [5.3 The Meltzer–Richard model](05-03-the-meltzer-richard-model.md), [1.2 Turnout and the paradox of voting](01-02-turnout-and-the-paradox-of-voting.md), [2.3 Probabilistic voting](02-03-probabilistic-voting.md) · Unlocks: [`empirical-political-economy`](../../empirical-political-economy/syllabus.md), [`institutions-and-development`](../../institutions-and-development/syllabus.md)

## Why this matters

[5.3](05-03-the-meltzer-richard-model.md) made a sharp prediction: the majority tax rate rises with the [mean-to-median ratio](../reference.md#mean-to-median-ratio), so more inequality at the top should bring more redistribution. Across democracies the link is weak at best, and how weak is contested. What would have to change for the prediction to fail? Three leading explanations are the same formula with someone richer than the median in the decisive seat; two change the question.

## The idea

[Meltzer–Richard](../reference.md#meltzer-richard-model) has three moving parts: *who* decides (the median citizen), *what* she judges by (this year's income), and *what she wants* (her own consumption, on one issue). Change any one and the prediction moves.

- **Who votes.** If the poor turn out less, the decisive voter is richer than the median citizen.
- **Which income.** If today's tax binds tomorrow and a near-median earner expects to move up, she votes on expected future income.
- **How votes respond.** Noisy voters make candidates weigh groups by how many votes a unit of utility buys ([2.3](02-03-probabilistic-voting.md)).
- **What else is on the ballot.** A second issue can split the poor.
- **What people want.** If voters care whether incomes are deserved, beliefs about effort and luck enter.

The first three fit one formula. The last two leave it.

## The model

**Setup (from 5.3).** Voter $i$ with wage $w_i$ maximizes $c - \ell^2/2$ subject to $c = (1-t)w_i\ell + T$, with tax rate $t \in [0,1]$, labor $\ell$ and lump-sum transfer $T$, so $\ell_i = (1-t)w_i$. Write $y_i = w_i^2$ for $i$'s income at zero tax (earnings at rate $t$ are $(1-t)y_i$, so ratios do not depend on $t$), $\bar y$ for its population mean (5.3's $m$) and $y_m$ for its median. The budget balances, $T = t(1-t)\bar y$, and substituting gives indirect utility

$$V(t; y) = \tfrac12(1-t)^2\,y + t(1-t)\,\bar y.$$

**Lemma (decisive income).** $V(t;y)$ is affine in $y$. For $\hat y < \bar y$ its maximizer on $[0,1]$ is

$$t(\hat y) = \frac{\bar y - \hat y}{2\bar y - \hat y},$$

and for $\hat y \ge \bar y$ it is $0$. On $(0, \bar y)$, $t(\hat y)$ is strictly decreasing and below $\tfrac12$.

*In words:* if whatever is decisive can be summarized by one income $\hat y$, the tax is this curve evaluated there; Meltzer–Richard sets $\hat y = y_m$.

*Proof.*

1. $\partial V/\partial t = (\bar y - \hat y) + t(\hat y - 2\bar y)$, linear in $t$.
2. If $\hat y < \bar y$: the derivative is positive at $t = 0$ and has negative slope $\hat y - 2\bar y$, so $V$ is strictly concave and peaks at its root, $t(\hat y)$.
3. If $\hat y \ge \bar y$: the derivative is $\bar y - \hat y \le 0$ at $t = 0$ and $-\bar y < 0$ at $t = 1$. Being linear, it is negative on $(0,1]$, so $t = 0$.
4. $dt/d\hat y = -\bar y/(2\bar y - \hat y)^2 < 0$, and $t(0) = \tfrac12$. ∎

Preferred rates are single-crossing in $y$ ([5.3](05-03-the-meltzer-richard-model.md)), which lets one voter be decisive.

**Channel 1: who votes.** Let $\tau(y) \in (0,1]$ be the turnout rate at income $y$. Voters vote sincerely. Taxes and transfers still cover *every* citizen, so $\bar y$ stays the population mean. The electorate has distribution $G(y) = \int_0^y \tau\,dF \big/ \int \tau\,dF$, where $F$ is the population distribution.

**Proposition 1 ([turnout-weighted median](../reference.md#turnout-weighted-median)).** The majority rate among voters is $t(y_v)$, where $y_v$ is the median of $G$. If $\tau$ is nondecreasing, $y_v \ge y_m$, so $t(y_v) \le t(y_m)$.

*In words:* income-skewed turnout puts a richer voter in the [median voter](../reference.md#median-voter)'s seat, and she wants less redistribution.

*Proof.*

1. Preferences are single-crossing in $y$, so the representative voter theorem ([`social-choice` 3.4](../../social-choice/lessons/03-04-single-crossing-and-value-restriction.md)) applies to the electorate: the majority relation among voters is the ranking of $G$'s median.
2. $G(y) = F(y)\cdot E[\tau \mid Y \le y]\,/\,E[\tau]$.
3. If $\tau$ is nondecreasing, its mean over the bottom of the distribution is at most its overall mean. So $G(y) \le F(y)$ for all $y$: voters are richer in the first-order-dominance sense.
4. Any $y$ with $F(y) < \tfrac12$ has $G(y) < \tfrac12$, so $G$'s median is at least $F$'s.
5. $t$ is decreasing (Lemma). ∎

**Channel 2: which income.** Bénabou and Ok (2001, *Quarterly Journal of Economics*) formalize the [prospect of upward mobility](../reference.md#prospect-of-upward-mobility) (POUM). They name three premises: the tax chosen today persists into future periods; voters are not too risk-averse, or redistribution is valuable insurance; and some voters below today's mean expect to be above it tomorrow. The last is consistent with rational expectations, for a range of incomes below the mean, essentially when expected future income is an increasing, *concave* function of today's income. By Jensen's inequality, concavity pulls tomorrow's mean below the expected future income of someone starting at today's mean. The anti-redistribution coalition grows with concavity and with how long the tax is fixed. Their economy has no deadweight loss; Example 2 grafts the mechanism onto 5.3's utility. Since $V$ is affine in $y$, a voter choosing a tax for next period maximizes $V(t; E[y' \mid y_i])$: here $\hat y = E[y' \mid y_i]$.

**Channel 3: how votes respond.** Under [probabilistic voting](../reference.md#probabilistic-voting) ([2.3](02-03-probabilistic-voting.md): groups $g$ with shares $n_g$, ideological densities $\phi_g$, interiority), both candidates choose $t$ to maximize $W(t) = \sum_g n_g\phi_g V(t; y_g)$. Affinity in $y$ gives

$$W(t) = \Big(\textstyle\sum_g n_g\phi_g\Big)\,V(t; y_\phi), \qquad y_\phi = \frac{\sum_g n_g\phi_g\,y_g}{\sum_g n_g\phi_g}.$$

So $t^* = t(y_\phi)$: the decisive income is a density-weighted *mean*. With equal densities, $y_\phi = \bar y$ and $t^* = 0$. A linear tax only moves income around at a deadweight cost. Redistribution needs the poor to be the swing voters.

**Outside the formula.** Roemer (1998, *Journal of Public Economics*) adds a non-economic issue (religion, in his example) to party competition over the tax rate, with each party representing a constituency. With taxes alone and no incentive effects, the poor's party proposes a rate of 1. As the second issue grows salient, poor voters who side with the other party on it pull that equilibrium rate down, possibly to zero, even when most voters' ideal rate is 1. This is [2.2](02-02-multidimensional-voting-and-chaos.md)'s warning about dimensions, applied to taxes. Alesina and Angeletos (2005, *American Economic Review*) change what voters want: they care whether incomes come from effort or luck. Taxes change how much income reflects effort, which feeds back into beliefs. A society that believes effort pays sets low taxes, effort stays high, and the belief is confirmed; one that credits luck sets high taxes, whose distortions sustain that belief. Similar distributions can then carry very different tax rates.

**The evidence.** Reported as contested ([inequality and redistribution](../reference.md#inequality-and-redistribution)). Across democracies, higher pre-tax inequality does not reliably come with more redistribution; findings shift with the sample and the measure. Identification is hard for a reason the model names: taxes move labor supply, hence measured pre-tax inequality, and both respond to institutions. Separating turnout, mobility, salience and beliefs is [`empirical-political-economy`](../../empirical-political-economy/syllabus.md)'s job.

**Where the argument is weakest.** The single formula works because $V$ is affine in $y$: quasilinear utility, no income effects, risk neutrality. That is what collapses turnout, expected income and political weights into one number $\hat y$. Add risk aversion and the POUM voter values the transfer as insurance, which works against Bénabou and Ok's mechanism. Add income effects and the swing-voter weights interact with marginal utility, so $\hat y$ is no longer a weighted mean. The channels survive, but the clean "who sits in the seat" reading is lost.

## Picture

![The majority tax rate as a function of the decisive voter's income as a fraction of mean income, x, following t equals 1 minus x over 2 minus x: 0.5 at x equal to 0, falling ever more steeply to 0 at x equal to 1 and flat at 0 beyond. Example 1's population median is at 0.4 with rate 3/8, its turnout-weighted median at 0.8 with rate 1/6. Example 2's median earner is at 0.75 with rate 1/5 on today's income and at 1.125 with rate 0 on expected future income.](assets/05-04-fig1.svg)

The formula's three channels move the point along one curve, which steepens toward $x = 1$.

## Worked examples

**Example 1 (clean): a turnout gradient.** Three groups: 60% have $y = 4$, 30% have $y = 8$, 10% have $y = 52$. Then $\bar y = 2.4 + 2.4 + 5.2 = 10$ and $y_m = 4$, so Meltzer–Richard gives $t(4) = 6/16 = 3/8$.

- Turnout is 50%, 75%, 90%. Voter masses: $0.30$, $0.225$, $0.09$, total $0.615$.
- The poor are 60% of citizens but $0.30/0.615 = 48.8\%$ of voters. The voter median is in the middle group: $y_v = 8$.
- $t(8) = 2/12 = 1/6$. A grid of pairwise majority votes confirms $1/6$ among voters and $3/8$ among all citizens.

A 40-point turnout gap between bottom and top cuts the rate by more than half.

**Example 2 (a hypothesis bites): upward mobility.** Three equal classes with $y = 2, 6, 16$: $\bar y = 8$, $y_m = 6$, static rate $t(6) = 2/10 = 1/5$. Mobility: the poor stay; a middle earner rises to 16 with probability $p$; a rich earner falls to 6 with probability $p$. Each class keeps a third of the population, so tomorrow's mean is 8.

- Expected next-period incomes: $2$, $6 + 10p$, $16 - 10p$. At $p = 0.3$: $2, 9, 13$, increasing and concave (slopes $7/4$, then $2/5$).
- A tax chosen now applies next period. The middle class votes on $9 > 8$ and wants $t = 0$; the rich want $0$; the poor want $t(2) = 6/14 = 3/7$. Majority: **$t^* = 0$**.

A class below today's mean blocks all redistribution, and its expectation is correct. Remove the hypotheses one at a time:

- *Persistence.* If the rate is reset each period, the vote is on today's incomes and the rate is $1/5$.
- *Enough mobility.* The middle class wants $0$ only if $6 + 10p \ge 8$, i.e. $p \ge 1/5$. At $p = 0.1$ it wants $t(7) = 1/9$.
- *Risk neutrality.* $V$ is affine in $y$, so the spread of future income is ignored; with risk aversion, the transfer is also insurance.

## Watch out

- **You might think** a turnout gap explains why redistribution fails to *rise* with inequality. It explains a lower *level*. With turnout rates fixed, $dt/d\bar y = \hat y/(2\bar y - \hat y)^2$ rises with $\hat y$ on $(0, \bar y)$, so a richer decisive voter responds *more* to top-income growth (P1). Flattening the slope needs the gap to widen with inequality, a separate empirical claim.
- **You might think** POUM needs over-optimistic voters. Bénabou and Ok's point is the reverse: with a concave transition, voters below today's mean can correctly expect to be above tomorrow's. The hypothesis people drop is persistence: a tax reset every year puts only today's incomes on the ballot.
- **You might think** probabilistic voting reproduces Meltzer–Richard whenever the poor are numerous. With equal densities it gives *no* redistribution. A positive rate needs the weights $n_g\phi_g$ tilted toward incomes below the mean (P3).

## One-liner

> Meltzer–Richard's rate is $t(\hat y) = (\bar y - \hat y)/(2\bar y - \hat y)$ with the median in the decisive seat; turnout, mobility and swing-voter weights each seat someone richer, while a second issue or fairness beliefs change the question.

## Problems

Use 5.3's preferences throughout: $V(t;y) = \tfrac12(1-t)^2 y + t(1-t)\bar y$, with $\bar y$ the population mean.

**P1 (🟢)** *(Formal (a)–(b).)* Four groups have population shares 30%, 30%, 20%, 20% and zero-tax incomes $y = 2, 4, 9, 42$. Their turnout rates are 40%, 60%, 80%, 90%.

(a) Find the rate the median citizen prefers and the rate chosen by majority among those who vote.
(b) The top income rises to 52, turnout unchanged. Recompute both rates. Which rises more? One sentence on why.

**P2 (🟡)** *(Formal (a)–(b) · Exegetical (c).)* Three equal classes have $y = 1, 4, 10$, so $\bar y = 5$. Between periods the poor stay; a middle earner rises to 10 with probability $p$; a rich earner falls to 4 with probability $p$ ($0 < p < \tfrac12$). A tax chosen today applies today and next period. Each voter weights the two periods equally and evaluates next period by expected utility.

(a) Show that voter $i$'s preferred rate is $t(\tilde y_i)$ with $\tilde y_i = \tfrac12(y_i + E[y_i'])$, and find the majority rate as a function of $p$.
(b) Find the smallest $p$ at which the majority chooses no redistribution, and the rate at $p = 1/5$.
(c) Bénabou and Ok name three premises. Which one does this toy check, and which two does it simply assume? What is the majority rate if the tax is reset every period? (60 words or fewer.)

**P3 (🔴, optional)** *(Formal (a)–(b).)* Probabilistic voting with two groups: 70% have $y = 4$, 30% have $y = 24$, with ideological densities $\phi_P$ and $\phi_R$. Interiority holds.

(a) Find the equilibrium rate when $\phi_P = 3\phi_R$, and compare it with Meltzer–Richard's.
(b) Prove that $t^* > 0$ if and only if $\phi_P > \phi_R$, and find the limit of $t^*$ as $\phi_P/\phi_R \to \infty$.

<details>
<summary>Solutions</summary>

**P1** *(Formal, strict.)*

(a) $\bar y = 0.6 + 1.2 + 1.8 + 8.4 = 12$. Cumulative population shares $0.3, 0.6$, so $y_m = 4$ and the median citizen wants $t(4) = 8/20 = \mathbf{2/5}$. Voter masses: $0.12, 0.18, 0.16, 0.18$, total $0.64$. Cumulative voter shares: $0.1875, 0.469, 0.719$. The voter median is in the third group, $y_v = 9$, and $t(9) = 3/15 = \mathbf{1/5}$. A pairwise-majority grid confirms both.

(b) $\bar y = 14$. Median citizen: $t(4) = 10/24 = 5/12$, up $1/60 \approx 0.017$. Voters: $t(9) = 5/19 \approx 0.263$, up $6/95 \approx 0.063$. **The voters' rate rises almost four times as much.** The richer decisive voter sits nearer $x = \hat y/\bar y = 1$, where the curve $t = (1-x)/(2-x)$ is steepest, and a rise in $\bar y$ also moves her $x$ further.

**Wrong turns:** Using the *voters'* mean income for $\bar y$: taxes and transfers cover every citizen. Weighting incomes by turnout and taking a mean instead of finding the median voter.

---

**P2** *(Formal (a)–(b) · Exegetical (c), strict.)*

(a) Flows of $p/3$ each way keep each class at a third, so tomorrow's mean is 5. $V$ is affine in $y$, so $E\,V(t; y') = V(t; E[y'])$. The total is $V(t; y_i) + V(t; E[y_i']) = \tfrac12(1-t)^2(y_i + E[y_i']) + 2t(1-t)\cdot 5 = 2V(t; \tilde y_i)$, maximized at $t(\tilde y_i)$. Expected incomes: $1$, $4 + 6p$, $10 - 6p$; so $\tilde y = 1$, $4 + 3p$, $10 - 3p$, still ordered. Single-crossing in $\tilde y$ makes the middle class decisive:

$$t^*(p) = \frac{1 - 3p}{6 - 3p} \ \text{ for } p < \tfrac13, \qquad t^* = 0 \ \text{ for } p \ge \tfrac13.$$

(The poor want $4/9$ throughout; the rich want 0.)

(b) $\tilde y_{\text{mid}} = 4 + 3p \ge 5$ iff $\mathbf{p \ge 1/3}$. At $p = 1/5$: $\tilde y = 23/5$, $t^* = (2/5)/(27/5) = \mathbf{2/27} \approx 0.074$, against $1/6$ with no mobility. A direct two-period grid gives the same.

**Must hit, strict (c):**

- Checked: concavity. Expected incomes $1, 4 + 6p, 10 - 6p$ have slopes $1 + 2p > 1 - 2p$.
- Assumed: persistence (the rate is fixed for both periods) and limited risk aversion ($V$ affine in income, so voters are risk-neutral).
- Reset every period: each vote is on current incomes, the median is 4 every period, so the rate is $t(4) = 1/6$ for any $p$.

**Wrong turns:** In (a), using expected *utility* of a nonlinear function and getting stuck: affinity makes the expectation pass inside. In (b), forgetting that the rich's $\tilde y$ must stay above the middle's for the middle to remain the median (it does for $p < 1$).

---

**P3** *(Formal, strict.)*

(a) $\bar y = 2.8 + 7.2 = 10$. Weights $n_g\phi_g$ are $2.1\phi_R$ and $0.3\phi_R$, so $y_\phi = (8.4 + 7.2)/2.4 = 6.5$ and $t^* = 3.5/13.5 = \mathbf{7/27} \approx 0.259$. A grid on $W$ agrees. Meltzer–Richard: the median citizen is in the poor group, so $t(4) = 6/16 = \mathbf{3/8}$. Even with the poor three times as swingy, the rate is lower.

(b) By the Lemma, $t^* > 0$ iff $y_\phi < \bar y$:

$$\frac{2.8\phi_P + 7.2\phi_R}{0.7\phi_P + 0.3\phi_R} < 10 \iff 4.2\,\phi_R < 4.2\,\phi_P \iff \phi_P > \phi_R.$$

As $\phi_P/\phi_R \to \infty$, $y_\phi \to 4$ and $t^* \to t(4) = 3/8$ (at ratio 100 it is already $0.372$). Meltzer–Richard is the limit in which only the poor group's votes respond. Since $y_\phi$ is a weighted mean of 4 and 24, it never falls below 4, so probabilistic voting never exceeds $3/8$ here. ∎

**Wrong turns:** Concluding from equal densities that probabilistic voting never redistributes; it does whenever weights tilt toward the poor. Treating $y_\phi$ as a median.

</details>

## Flashback

**From Lesson [5.2](05-02-coalition-and-government-formation.md) (Coalition and government formation):** *(Formal (a)–(b).)* An invented briefing on Tarn's 100-seat parliament (quota 51): "Kesh holds 50 seats; Lune has 22, Mire 16 and Nell 12. No party has a majority, so, as in any majority game, every cabinet deal can be undercut by a rival offer, and Kesh is no stronger than its half of the seats." (a) List the minimal winning coalitions, compute each party's Shapley–Shubik index, and find the core. (b) In Baron–Ferejohn with equal recognition and a closed rule, take the stationary equilibrium in which Kesh picks its partner at random. Find Kesh's ex ante value $v_K$ as a function of $\delta$, the $\delta$ above which it exceeds Kesh's seat share, and its limit as $\delta \to 1$. In one sentence, say which claims in the briefing fail and on which measure.

<details>
<summary>Solution</summary>

(a) The three small parties hold 50 together and lose; Kesh plus any one of them wins (72, 66, 62). Minimal winning coalitions: Kesh–Lune, Kesh–Mire, Kesh–Nell. Every winning coalition contains Kesh, so Kesh is a veto party. Shapley–Shubik: in any ordering where Kesh is not first, the parties before it hold at most 50, and Kesh pushes the total to 51 or more, so it is pivotal in $18$ of the $24$ orderings, index $\tfrac34$. A small party is pivotal only when it comes second right after Kesh: 2 orderings each, index $\tfrac{1}{12}$. Core: a split $x$ of the unit must give $x_K + x_j \ge 1$ for each small party $j$, so each $x_j \ge 1 - x_K$; but the three $x_j$ sum to $1 - x_K$, so $3(1 - x_K) \le 1 - x_K$, which forces $x_K = 1$. The core is the single split in which Kesh takes everything. A grid over splits confirms it, and moving one seat from Kesh to Nell (49, 22, 16, 13) lets the small parties win alone and empties the core.

(b) Kesh is formateur with probability $\tfrac14$ and pays one small party $\delta v_S$. When a small party proposes, Kesh is the only partner that completes a majority, so Kesh is paid $\delta v_K$ with probability $\tfrac34$:

$$v_K = \tfrac14(1 - \delta v_S) + \tfrac34\,\delta v_K, \qquad v_S = \frac{1 - v_K}{3}.$$

Substituting and multiplying by 12 gives $v_K(12 - 10\delta) = 3 - \delta$, so

$$v_K = \frac{3 - \delta}{12 - 10\delta}.$$

It increases in $\delta$, equals $\tfrac12$ at $\delta = \tfrac34$, exceeds Kesh's seat share iff $\delta > \tfrac34$, and tends to 1, the core split, as $\delta \to 1$. The script checks both stationarity equations, that no formateur prefers delay, and that iterating the equations from an arbitrary start converges to the same values. Both claims fail. The empty-core result needs no veto party, not merely no majority party. Kesh's power index is $\tfrac34$, not $\tfrac12$, and only its bargaining value can fall below its seat share, when parties are impatient ($\delta < \tfrac34$).

**Wrong turns:** Reading "no majority party" as "no veto party": the lesson's empty-core statement assumes the second. Letting a small formateur buy the other two small parties instead of Kesh: the three hold 50 and lose, so a small formateur must pay Kesh.

</details>

## Connections

- **Backward:** the Lemma is [5.3](05-03-the-meltzer-richard-model.md)'s first-order condition with the decisive income left free. Channel 1 is [1.2](01-02-turnout-and-the-paradox-of-voting.md)'s turnout made income-dependent; Channel 3 is [2.3](02-03-probabilistic-voting.md)'s weighted welfare with tax preferences plugged in; Roemer's second issue is [2.2](02-02-multidimensional-voting-and-chaos.md)'s warning about dimensions.
- **Forward:** [`empirical-political-economy`](../../empirical-political-economy/syllabus.md) tries to separate these channels in data; [`institutions-and-development`](../../institutions-and-development/syllabus.md) asks what happens to redistribution when the rich can block democracy itself.
- **Sideways:** what the tax rate *should* be, with welfare weights instead of political ones, is [`public-economics` 5.1](../../public-economics/lessons/05-01-the-linear-income-tax.md); whether desert or luck should govern it is [`political-philosophy`](../../political-philosophy/lessons/02-03-rawls-the-two-principles-and-maximin.md)'s question, the normative twin of Alesina and Angeletos's positive one.

## Closing the course

The course ran in one direction. Module 1 built the voter: what she wants over policy, why she votes at all, and what she knows. Module 2 put candidates in front of her and found the median voter's equilibrium, then where it breaks. Module 3 asked why groups with shared interests often fail to act, and how rules for deciding are themselves chosen. Module 4 made politicians agents, disciplined by elections and courted by lobbies and rent-seekers. Module 5 divided the budget: in the legislature, in coalition cabinets and across the income distribution. This last lesson pulled the threads together: turnout, swing voters and a second dimension all bend one tax rate.

Four courses pick up from here. [`institutions-and-development`](../../institutions-and-development/syllabus.md) takes Module 4's agency and commitment tools to autocracy and democratization. [`empirical-political-economy`](../../empirical-political-economy/syllabus.md) tests what these models predict. [`conflict-and-bargaining`](../../conflict-and-bargaining/syllabus.md) carries contests and Olson into arming and alliances. [`political-philosophy`](../../political-philosophy/lessons/05-01-why-democracy.md) asks whether the outcomes computed here are legitimate.
