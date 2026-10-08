# Political Economy · Lesson 1.1: From ballots to policy space

> ⏱ ~15 min · Module 1: Voters: preferences, turnout and information · Builds on: [`social-choice` 3.3](../../social-choice/lessons/03-03-single-peakedness-black-and-moulin.md), [`social-choice` 3.4](../../social-choice/lessons/03-04-single-crossing-and-value-restriction.md) · Unlocks: [1.2](01-02-turnout-and-the-paradox-of-voting.md), [2.1](02-01-the-downsian-spatial-model.md), [5.3](05-03-the-meltzer-richard-model.md)

## Why this matters

`social-choice` drew a map. On the unrestricted domain majority rule can cycle ([1.4](../../social-choice/lessons/01-04-how-often-do-cycles-happen.md)) and Arrow forbids every escape but a few ([1.3](../../social-choice/lessons/01-03-arrow-as-a-map.md); the proof is [`grad-game-theory` 5.1](../../grad-game-theory/lessons/05-01-social-choice-impossibility.md)). One escape is a restricted domain: preferences single-peaked on a line, or single-crossing in an ordering of the voters. This course lives in that escape. But nobody hands a voter a ranking of tax rates. She has preferences over consumption, and an economic model turns a policy into consumption. Whether the domain restriction holds is therefore a property of the *economic model*, and you have to check it. This lesson shows how, and fixes what a positive model of politics must specify before any equilibrium can be computed.

## The idea

A voter's preference over a policy is **induced**: plug the policy into her budget, let her optimize everything else, and read off her utility as a function of the policy alone. Two questions then decide whether majority rule has a predictable winner. Does each voter's induced utility have one peak? And do voters line up, so that whenever one prefers the higher policy, everyone on one side of her does too? If yes, the voter in the middle of that line is decisive.

The spatial shorthand used everywhere from [2.1](02-01-the-downsian-spatial-model.md) on, "voter $i$ has ideal point $x_i$ and dislikes distance," is a summary of this step. It is honest only when the underlying model produces it.

## The model

**Recall, in one paragraph.** Voters $i \in N = \{1, \dots, n\}$ choose among policies $q$ on a line. A preference is single-peaked if utility rises to a peak and falls on both sides; Black's theorem says that if all voters are single-peaked on one axis and $n$ is odd, majority rule is transitive and the median peak beats every alternative ([`social-choice` 3.3](../../social-choice/lessons/03-03-single-peakedness-black-and-moulin.md)). Single-crossing asks instead for an ordering of the *voters* such that, for every pair of policies, the set preferring one of them is an initial or final segment; then the majority relation *is* the middle voter's ranking (the representative voter theorem, [`social-choice` 3.4](../../social-choice/lessons/03-04-single-crossing-and-value-restriction.md)). That middle voter is the [median voter](../reference.md#median-voter).

**Spatial utility.** The two workhorse forms, with ideal point $x_i$ and policy $q$, are [Euclidean and quadratic utility](../reference.md#euclidean-and-quadratic-utility):

$$u_i^E(q) = -|q - x_i|, \qquad u_i^Q(q) = -(q - x_i)^2 .$$

*In words:* both say "the closer, the better," the first linearly, the second with losses that grow with the square of the distance.

In one dimension they rank any two *sure* policies identically, because squaring is strictly increasing on nonnegative numbers: $|q - x_i| < |q' - x_i|$ iff $(q - x_i)^2 < (q' - x_i)^2$. Same pairwise votes, same majority relation, same Condorcet winner: the median ideal point. The loss function starts to matter only when voters compare *lotteries*, when intensities are added up, or when there are two dimensions. For lotteries, the quadratic form gives $E[-(q - x_i)^2] = -(E q - x_i)^2 - \operatorname{Var}(q)$: every quadratic voter pays for risk, while a Euclidean voter whose ideal lies outside the lottery's range does not.

**Induced preferences over a tax rate.** Voter $i$ has exogenous income $y_i$; mean income is $\bar y$ and the median is $y_m$. A linear tax at rate $t \in [0, 1]$ funds a lump-sum transfer $T$ paid equally to everyone. Raising money leaks: per head, revenue $t \bar y$ yields only

$$T(t) = t\bar y - \tfrac{\lambda}{2} t^2 \bar y, \qquad \lambda > 0,$$

a reduced form of Arthur Okun's "leaky bucket" (*Equality and Efficiency: The Big Tradeoff*). The leak grows with the square of the rate, standing in for the labor-supply distortion that [5.3](05-03-the-meltzer-richard-model.md) derives. Consumption is $c_i = (1 - t) y_i + T(t)$, and utility is consumption, so the [induced preference](../reference.md#induced-preferences) over $t$ is

$$u_i(t) = (1 - t) y_i + t\bar y - \tfrac{\lambda}{2} t^2 \bar y .$$

**Proposition.** Let $n$ be odd. Then (i) each $u_i$ is single-peaked on $[0,1]$ with peak $t_i = \min\{1, \max\{0, \tau_i\}\}$, where $\tau_i = (\bar y - y_i)/(\lambda \bar y)$; (ii) the profile is single-crossing in income; (iii) the unique Condorcet winner is

$$t^* = \min\Big\{1,\ \max\Big\{0,\ \tfrac{1}{\lambda}\Big(1 - \tfrac{y_m}{\bar y}\Big)\Big\}\Big\}.$$

*In words:* majority rule picks the tax rate the median earner wants, and it is positive exactly when mean income exceeds median income.

*Proof.*

1. $u_i''(t) = -\lambda \bar y < 0$, so $u_i$ is strictly concave, hence single-peaked. The first-order condition $\bar y - y_i - \lambda \bar y\, t = 0$ gives $\tau_i$; on $[0, 1]$ the peak is $\tau_i$ clipped to the interval.
2. For $t < t'$, $u_i(t') - u_i(t) = (t' - t)(\bar y - y_i) - \tfrac{\lambda \bar y}{2}(t'^2 - t^2)$. Its derivative in $y_i$ is $-(t' - t) < 0$. So if voter $i$ prefers $t'$ to $t$, so does every voter poorer than $i$: the set preferring the higher rate is an initial segment of voters ordered from poorest to richest. That is single-crossing.
3. By the representative voter theorem with $n$ odd, the majority relation coincides with the ranking of the median-income voter, so her peak beats every other rate, and no other rate can, since it loses to hers. Her peak is $t_m$, which is the formula for $t^*$. ∎

Completing the square in step 1 gives

$$u_i(t) = y_i + \tfrac{\lambda \bar y}{2}\tau_i^2 - \tfrac{\lambda \bar y}{2}(t - \tau_i)^2 .$$

*In words:* every voter in this model has exactly quadratic loss around her unconstrained ideal, with a common curvature $\lambda \bar y / 2$. The economics chose the loss function; it was not a free modelling decision. Rich voters, with $\tau_i < 0$, are quadratic around a point outside $[0, 1]$, so on the feasible interval their utility just falls.

**What a positive model specifies.** A [positive model](../reference.md#positive-model) predicts what a set of rules produces, not what it should produce (the normative question is [`political-philosophy` 5.1](../../political-philosophy/lessons/05-01-why-democracy.md)'s). Before solving one, write down:

1. **Players**: voters; later candidates, parties, lobbies, legislators.
2. **Policy space and preferences**: here $t \in [0,1]$ and induced $u_i(t)$.
3. **Rule**: who proposes, who votes, how votes aggregate, what happens if nothing passes.
4. **Timing and commitment**: who moves first, and whether a promise binds (in [2.1](02-01-the-downsian-spatial-model.md) platforms bind; in [2.4](02-04-valence-and-citizen-candidates.md) they do not).
5. **Information**: what is common knowledge (ideal points? the state of the world?).
6. **Objectives**: vote share, win probability, policy, rents.
7. **Solution concept**: Condorcet winner here; Nash, subgame-perfect or perfect Bayesian equilibrium later.

The Proposition is the thinnest model: voters only, pairwise majority, Condorcet winner. Nobody proposes yet. [2.1](02-01-the-downsian-spatial-model.md) adds candidates who commit to platforms and shows they converge to $t^*$.

**Where the argument is weakest.** Three hypotheses carry it. *One dimension:* bundle the tax with a second issue and voters no longer line up; the majority core is generically empty (Plott and McKelvey, owned by [2.2](02-02-multidimensional-voting-and-chaos.md)). *One characteristic:* single-crossing needs voters ordered by a single trait. Let them differ in income *and* in taste for what the money buys and the ordering can fail. *No exit:* if a voter can opt out of the publicly provided good, her induced utility is the upper envelope of two curves, and that envelope can have two peaks (Problem 2; Stiglitz 1974, Epple and Romano 1996, both in the *Journal of Public Economics*). Without these, majority rule can cycle again, and the outcome depends on who controls the agenda.

## Picture

![Gain from a tax rate t, relative to no tax, for three voters with incomes 30, 40 and 60 thousand when mean income is 50 and lambda is 1. The income-30 curve peaks at t equal to 0.4, the income-40 curve peaks at t equal to 0.2, and the income-60 curve falls from t equal to 0. A dashed vertical line marks the median voter's peak at 0.2.](assets/01-01-fig1.svg)

Each curve is $t(\bar y - y_i) - \tfrac{\lambda}{2}t^2\bar y$: a common downward parabola tilted by a straight line whose slope falls with income. That tilt is single-crossing made visible.

## Worked examples

**Example 1 (clean): five earners.** Incomes 20, 30, 40, 60, 100 (thousand units) and $\lambda = 1$. Mean $\bar y = 50$, median $y_m = 40$, so $T(t) = 50t - 25t^2$ and $u_i(t) = y_i + t(50 - y_i) - 25t^2$.

- Unconstrained ideals $\tau_i = (50 - y_i)/50$: 0.6, 0.4, 0.2, $-0.2$, $-1$. Clipped peaks: 0.6, 0.4, 0.2, 0, 0.
- Proposition: $t^* = 1 - 40/50 = 0.2$, the third earner's peak.
- Check against $t = 0$: gains $0.2(50 - y_i) - 1$ are 5, 3, 1, $-3$, $-11$. The three poorest vote for 0.2, a 3–2 win. A brute-force grid over $[0,1]$ confirms 0.2 beats every other rate and is the only rate that does.
- The transfer at $t^* = 0.2$ is $T = 10 - 1 = 9$, out of revenue 10: the leak eats one unit per head.

The two richest voters' ideals sit at the boundary, and the profile is still single-crossing. Only the median earner's position relative to the mean matters.

**Example 2 (the hypothesis bites): when the loss function matters.** Three voters have ideal tax rates 20, 40 and 60 percent. Candidate A promises 62 for sure. Candidate B is a lottery: 40 or 80, each with probability 1/2 (mean 60, variance 400).

| Voter | Euclidean: A vs B | Quadratic: A vs B |
|---|---|---|
| 20 | 42 vs 40, votes B | 1764 vs 2000, votes A |
| 40 | 22 vs 20, votes B | 484 vs 800, votes A |
| 60 | 2 vs 20, votes A | 4 vs 400, votes A |

(Entries are losses, expected for B.) Euclidean voters elect the lottery 2–1; quadratic voters elect the sure thing 3–0. Among *sure* policies both electorates agree that 40 beats everything. The "loss function doesn't matter" result needs certainty. The tax model settles which form applies: its voters are quadratic, so they pay for risk. Risk attitude enters as soon as outcomes are uncertain, as they are for the policy-motivated candidates of [2.1](02-01-the-downsian-spatial-model.md).

## Watch out

- **You might think** a concave underlying utility guarantees single-peaked induced preferences. Actually an outside option (a private school, a private pension, a gated security service) makes induced utility the maximum of two curves, which can have two peaks. This is the hypothesis people drop.
- **You might think** the Euclidean or quadratic choice is cosmetic. It is, for pairwise votes over sure policies on a line. With lotteries (Example 2), summed welfare or two dimensions, it changes the answer.
- **You might think** the tax depends on how poor the poor are. Only $y_m / \bar y$ enters $t^*$. Raise the top income in Example 1 from 100 to 150: $\bar y$ becomes 60 and $t^*$ rises to $1 - 40/60 = 1/3$, though the median earner's own income has not changed.

## One-liner

> Voters want consumption, not policies; check that the induced preferences are single-peaked or single-crossing, and the median voter, identified by the economic model, decides.

## Problems

**P1 (🟢)** *(Formal (a)–(b).)* Five households have incomes 10, 15, 20, 25, 30 (thousand units). A public good $G$ costs 1 per unit and is financed by a proportional income tax, so household $i$ pays the share $s_i = y_i / \sum_j y_j$ of the cost. Each household's utility is $y_i - s_i G + 12\sqrt{G}$.

(a) Show each household's induced preference over $G \ge 0$ is single-peaked, find every ideal $G_i$, show the profile is single-crossing in income, and find the majority-rule level.
(b) The richest household's income rises from 30 to 60, others unchanged. Find the new majority-rule level and say in one sentence why it moved.

**P2 (🟡)** *(Formal (a)–(b).)* Three households vote on public-school spending per pupil $e \in \{0, 4, 16\}$, financed by a head tax of $e$ on each. A household that uses the public school gets quality $e$; household $i$ values quality $q$ at $a_i\sqrt{q}$, with $a = (3, 8, 10)$, and consumption enters linearly. Households 1 and 2 must use the public school. Household 3 may instead buy private quality $p$ at cost $p$, while still paying the tax.

(a) Compute each household's induced utility at the three spending levels (optimize $p$ for household 3) and its ranking.
(b) Show the majority relation cycles, and show that no ordering of the three levels makes all three households single-peaked. Name, in one sentence, the feature of the model that breaks single-peakedness.

**P3 (🟡)** *(Exegetical.)* An invented memo to a mayor: "The council will vote on a budget package with two parts: the property-tax rate and the split of spending between transit and roads. Our survey identifies the median resident on the tax rate and, separately, the median resident on the split. Since the median voter decides, the council will adopt the package with the median rate and the median split, so we need lobby no one." In 100 words or fewer: which result is the memo using, which hypothesis of it fails, what can happen instead, and what one institutional rule could rescue the memo's prediction?

<details>
<summary>Solutions</summary>

**P1** *(Formal, strict.)*

(a) Total income is 100, so shares are 0.10, 0.15, 0.20, 0.25, 0.30. $u_i''(G) = -3G^{-3/2} < 0$, so $u_i$ is strictly concave on $G > 0$: single-peaked. The first-order condition $6/\sqrt{G} = s_i$ gives $\sqrt{G_i} = 6/s_i$:

- $G_i$ = 3600, 1600, 900, 576, 400.

Single-crossing: for $G < G'$, $u_i(G') - u_i(G) = -s_i(G' - G) + 12(\sqrt{G'} - \sqrt{G})$ is strictly decreasing in $s_i$, hence in income. Whoever prefers more $G$, every poorer household does too. With $n = 5$ the median-income household (income 20, share 0.2) is decisive: **$G = 900$**. A grid check confirms 900 beats every integer level from 0 to 5000.

(b) Total income is 130; the median household's share falls to $20/130 = 2/13$, and the ordering by income is unchanged. $\sqrt{G} = 6 \cdot 13/2 = 39$, so **$G = 1521$**. The good got cheaper for the decisive voter: the rich household now pays a larger share, so the median household's tax price fell.

**Wrong turns:** Taking the household with the median *ideal* without checking that the ideals are ordered by income (they are, but that is what single-crossing proves). In (b), keeping the old share 0.2 because the median household's income did not change.

---

**P2** *(Formal, strict.)*

(a) Households 1 and 2: $u_i(e) = a_i\sqrt{e} - e$.

- Household 1 ($a = 3$): 0, 2, $-4$. Ranking 4 ≻ 0 ≻ 16.
- Household 2 ($a = 8$): 0, 12, 16. Ranking 16 ≻ 4 ≻ 0.
- Household 3 ($a = 10$): going private, it maximizes $10\sqrt{p} - p$ at $p = 25$, worth 25, so the private branch is $25 - e$. The public branch is $10\sqrt{e} - e$. At $e = 0$: private, 25. At $e = 4$: private 21 beats public 16, so 21. At $e = 16$: public 24 beats private 9, so 24. Ranking 0 ≻ 16 ≻ 4.

(b) 4 beats 0 by 2–1 (households 1, 2); 16 beats 4 by 2–1 (households 2, 3); 0 beats 16 by 2–1 (households 1, 3). A cycle. Each level is ranked last by someone (16 by household 1, 0 by household 2, 4 by household 3), and on any axis the middle level can be last for no single-peaked voter, so no axis works. The rankings are three cyclic shifts, the Latin square of [`social-choice` 3.4](../../social-choice/lessons/03-04-single-crossing-and-value-restriction.md). The culprit is the **exit option**: household 3's utility is the upper envelope of a falling private branch and a rising public branch, so it is high at both ends and low in the middle. Remove the option and household 3 ranks 16 ≻ 4 ≻ 0; then 16, the median peak, beats both rivals.

**Wrong turns:** Forgetting that household 3 still pays the tax when it goes private, which makes 0 and 4 look equal to it. Testing single-peakedness only on the natural order 0 < 4 < 16 and stopping; the question asks about every ordering.

---

**P3** *(Exegetical, strict.)*

**Must hit, strict:**

- The memo uses the median voter theorem (Black, or the representative voter theorem).
- Its hypothesis is a one-dimensional domain: single-peaked on one axis, or single-crossing in one ordering of voters. A two-part package is two-dimensional, and residents who differ on taxes and on transit are not ordered by one trait.
- Instead, generically no package beats all others (Plott; McKelvey's chaos result, [2.2](02-02-multidimensional-voting-and-chaos.md)), so the pair of medians can lose to another package and the outcome depends on the agenda.
- A rescue: vote on each part separately, one issue at a time with separable preferences (Shepsle's structure-induced equilibrium, [2.2](02-02-multidimensional-voting-and-chaos.md)), or show both positions are driven by one trait such as income.

**Wrong turns:** Saying the medians are wrong because the survey was bad; the problem is the theorem's domain, not the data. Claiming cycles are certain; they are generic, not guaranteed.

**Model answer:** The memo leans on the median voter theorem, which needs one dimension: every resident single-peaked on one line, or residents ordered by a single trait. A package of a tax rate and a spending split is two-dimensional, and residents differ on both. In two dimensions a package that beats all others generically does not exist (Plott, McKelvey), so the coordinate-wise median can lose: with Euclidean residents at (1, 1), (4, 7) and (9, 3), the package (5, 4) beats the medians (4, 3) by two votes to one. Voting on the two parts separately could restore the prediction.

</details>

## Connections

- **Backward:** Black's theorem and the representative voter theorem are [`social-choice` 3.3–3.4](../../social-choice/lessons/03-03-single-peakedness-black-and-moulin.md)'s; this lesson supplies the economic model that makes their hypotheses checkable. Bowen's median-voter provision of a public good is [`public-economics` 1.3](../../public-economics/lessons/01-03-revealing-demand-for-public-goods.md); P1 is its induced-preference step with income-based tax shares.
- **Forward:** [1.2](01-02-turnout-and-the-paradox-of-voting.md) asks why the median voter bothers to vote; [2.1](02-01-the-downsian-spatial-model.md) puts candidates on this line; [2.2](02-02-multidimensional-voting-and-chaos.md) adds the second dimension; [5.3](05-03-the-meltzer-richard-model.md) replaces the leak with a real labor-supply response and keeps single-crossing; [5.4](05-04-the-political-economy-of-inequality.md) asks why $y_m/\bar y$ predicts redistribution badly.
- **Sideways:** the induced-preference step is the indirect utility function of [`micro-refresher` 1.2](../../micro-refresher/lessons/01-02-utility-maximization-marshallian-demand.md): optimize everything else, then rank what is left. P2's cycle is the coalition Epple and Romano's title names, the ends against the middle: in it, 0 beats 16 because the household that exits joins the household that wants little spending.
