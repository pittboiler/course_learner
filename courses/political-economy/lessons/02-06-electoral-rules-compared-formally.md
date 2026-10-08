# Political Economy · Lesson 2.6: Electoral rules compared formally

> ⏱ ~15 min · Module 2: Electoral competition · Builds on: [2.3 Probabilistic voting](02-03-probabilistic-voting.md), [2.5 Strategic voting and Duverger's law](02-05-strategic-voting-and-duvergers-law.md) · Unlocks: [3.1 Free riding and threshold games](03-01-free-riding-and-threshold-games.md), [5.2 Coalition and government formation](05-02-coalition-and-government-formation.md)

## Why this matters

[`political-institutions`](../../political-institutions/syllabus.md) turned votes into seats by hand ([1.1](../../political-institutions/lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md), [2.2](../../political-institutions/lessons/02-02-district-magnitude-and-thresholds.md)). [2.5](02-05-strategic-voting-and-duvergers-law.md) asked what a rule does to *voters*. This lesson asks what it does to *promises*. Does a candidate appeal to everyone or buy a favored minority? Does a government spend on roads everyone uses or on transfers to a swing district? The rule changes the answer, and three small models show exactly how.

## The idea

A rule decides which votes a candidate needs and how much each one is worth. That fixes which promises pay.

- **The ballot.** If a voter's only act is to reward her favourite, a candidate can win by being somebody's favourite. A minority will do. If voters also punish their least-liked candidate, being hated is costly, so candidates cluster.
- **The payoff.** Pork can be aimed: give a little over half the voters a lot, and tax the rest. A public good cannot be aimed. Under winner-take-all only *winning* matters, so pork that beats the public good is as good as pork that crushes it. Under proportional rewards the *margin* matters, and the margin pork buys shrinks as the public good gets better.
- **The map.** If two districts are safe, the election is decided in the third. Spending then serves the swing district, and a good that everyone shares is valued as if only the swing district used it.

## The models

**1. Ballots (Cox).** Gary Cox's "Centripetal and Centrifugal Incentives in Electoral Systems" (1990, *American Journal of Political Science*) asked which rules pull candidates to the centre. Here is the result in Roger Myerson's compact form (1999, *European Economic Review*). $K$ win-motivated candidates each take position Left or Right. A fraction $q$ of voters prefer Left. Each voter ranks the candidates at her position above the others, breaking ties at random. A scoring rule gives $s_j$ points to the $j$-th ranked candidate, with $1 = s_1 \ge \dots \ge s_K = 0$. Let $S^* = \frac1K\sum_j s_j$ be the average score.

**Claim.** All $K$ at Right is an equilibrium if and only if $q \le S^*$.

*In words:* a minority larger than the average score is worth defecting to.

*Proof.* Each voter hands out $K S^*$ points. A lone deviant at Left is first for Left voters and last for Right voters, so he scores $q$. The $K - 1$ candidates at Right share the remaining $KS^* - q$ equally. He beats each of them iff $q > (KS^* - q)/(K-1)$, that is iff $q > S^*$. ∎

Plurality has $S^* = 1/K$, so with four candidates a 26 percent minority is worth chasing. This is the **centrifugal** pull. Borda has $S^* = 1/2$ for every $K$, majoritarian. Negative voting (one vote *against*) has $S^* = (K-1)/K$, which is **centripetal**: candidates huddle even if a majority is neglected. See [centripetal and centrifugal incentives](../reference.md#centripetal-and-centrifugal-incentives).

**Favored minorities (Myerson).** Myerson's "Incentives to Cultivate Favored Minorities under Alternative Electoral Systems" (1993, *American Political Science Review*) applies the same logic to money. Each of $K$ candidates commits to an offer distribution $F$ with mean 1, the budget per voter. Each voter's offers are independent draws. Under plurality an offer $x$ wins the voter iff it tops the other $K-1$ offers, with probability $F(x)^{K-1}$. The symmetric equilibrium is

$$F(x) = (x/K)^{1/(K-1)}, \quad 0 \le x \le K.$$

*Proof that it is one.* $F(x)^{K-1} \le x/K$ for every $x \ge 0$, with equality on $[0, K]$. So any feasible $G$ earns $\int F^{K-1}\,dG \le \frac1K \int x\,dG = \frac1K$. ∎

With $K = 4$, 63 percent of voters are promised less than the per-capita budget, and the median promise is 0.5, while a lucky few are promised up to 4. Under Borda the expected score of an offer is linear in $F(x)$, so the equilibrium is uniform on $[0, 2]$ for every $K$. These are [favored minorities](../reference.md#favored-minorities).

**2. Pork versus public goods (Lizzeri–Persico).** Alessandro Lizzeri and Nicola Persico, "The Provision of Public Goods under Alternative Electoral Incentives" (2001, *American Economic Review*). The game:

- **Voters.** A continuum, each with endowment 1. A voter votes for whoever promises her more consumption, splitting ties evenly.
- **Candidates.** Two, office-seeking, who simultaneously make *binding* promises. A promise is either the public good, which uses all the money and gives every voter $G$, or a balanced-budget scheme: consumption $c \ge 0$ with mean 1, described by its distribution across voters.
- **Rules.** *Winner-take-all:* the payoff is 1 above half the votes, $\frac12$ at exactly half, and 0 below. *Proportional:* the payoff is the vote share.

The public good is efficient iff $G > 1$.

**Theorem (LP).** If $G < 1$ neither candidate offers the public good. If $G > 2$ both offer it for sure. If $1 < G < 2$ the unique equilibrium is mixed. Each candidate offers the public good with probability $\pi$, and otherwise transfers drawn from $F^*$, uniform on $[0, 2-G] \cup [G, 2]$. The rules differ only in $\pi$:

$$\pi_{\text{WTA}} = \tfrac12, \qquad \pi_{\text{PR}} = G - 1.$$

*In words:* under winner-take-all the good is a coin flip whatever it is worth. Under proportional rewards it is provided more often the better it is.

*Derivation.*

1. **$G > 2$.** To beat the public good with a voter you must give her more than $G$. With budget 1, that reaches a fraction below $1/G < \frac12$. Pork loses under both rules.
2. **$1 < G < 2$ has no pure equilibrium.** Against the public good, give just over $G$ to just under $1/G > \frac12$ of voters and win. Against any pork scheme, tax a sliver of voters fully and outbid on everyone else (LP).
3. **The public good earns exactly $\frac12$.** $F^*$ is symmetric about 1, so its mean is 1, and $F^*(G) = \frac12$. The public good ties itself and gets half the votes against $F^*$.
4. **Any pork deviation.** Let a deviation leave a fraction $p$ of voters below $G$. Against the public good it gets $1 - p$. On its support $F^*(c) = \frac{c}{2(2-G)} - \kappa\,\mathbf 1[c \ge G]$, with $\kappa = \frac{G-1}{2-G}$. Integrating against the deviation, whose mean is 1, gives
$$S = \tfrac12 + \kappa\,(p - \tfrac12).$$
LP show best responses stay on $[0,2]$ outside the gap, so this covers them. Each voter left under $G$ frees money that buys votes against pork, at rate $\kappa$.
5. **Proportional.** The payoff is $\pi(1-p) + (1-\pi)\big(\tfrac12 + \kappa(p - \tfrac12)\big)$, linear in $p$. Indifference needs $\pi = (1-\pi)\kappa$, so $\pi = \kappa/(1+\kappa) = G - 1$.
6. **Winner-take-all.** With $p < \frac12$ you beat the public good and lose to pork; with $p > \frac12$ the reverse. The payoff is $\pi$ or $1 - \pi$, and indifference needs $\pi = \frac12$. ∎

Mixed matchups split the vote exactly in half, so the good is provided with probability $\pi$. Ex ante utility is $\pi G + (1-\pi)$. Proportional beats winner-take-all iff $G > 3/2$. See [public goods vs targeted transfers](../reference.md#public-goods-vs-targeted-transfers).

**3. Swing districts (Persson–Tabellini).** Torsten Persson and Guido Tabellini ("The Size and Scope of Government," 1999, *European Economic Review*) built a Lindbeck–Weibull model in which majoritarian elections supply fewer public goods than proportional ones. The mechanism is [probabilistic voting](../reference.md#probabilistic-voting) aimed at swing districts. Here is a stripped version; the specification and numbers are ours. There are $D$ equal districts, $D$ odd. $(D-1)/2$ are safe for each party, and one is a [swing district](../reference.md#swing-districts). Revenue is 1 per capita, so a platform $(g, f_1, \dots, f_D)$ must satisfy $g + \frac1D\sum_J f_J = 1$ with every $f_J \ge 0$. Utility is $u_J = f_J + b\ln g$ with $0 < b < 1$. Voter ideology has equal density everywhere. "Safe" means no feasible platform flips the district's majority, but its vote share still moves.

- **Proportional** (national vote share). As in [2.3](02-03-probabilistic-voting.md), both parties maximize $\sum_J u_J$. So $b/g = 1$ and $g = b$, the Samuelson benchmark of [`public-economics` 1.1](../../public-economics/lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md).
- **Majoritarian** (a majority of districts). Only the swing district decides, so parties maximize $u_s = D(1-g) + b\ln g$. Then $b/g = D$, so $g = b/D$ and $f_s = D(1-g)$.

With $D = 3$ and $b = 0.6$: proportional gives $g = 0.6$; majoritarian gives $g = 0.2$ and 2.4 per resident of the swing district.

**Where the argument is weakest.** The hypothesis is the stylization of parties. LP's "proportional" system has two office-seeking candidates who maximize vote share and keep binding promises. Real PR has many parties and post-election coalition bargaining ([5.2](05-02-coalition-and-government-formation.md)). LP show their result survives any non-decreasing map from vote share to the chance one's platform is enacted. They do not model more than two parties or coalitions that logroll pork after the vote. Drop binding commitment and no promise is credible. Persson and Tabellini's prediction that majoritarian systems spend less on public goods met only weak cross-country support in their own early data, as LP report. Whether rules cause spending patterns is an identification question for [`empirical-political-economy`](../../empirical-political-economy/syllabus.md), and it remains contested.

## Picture

![Probability that the public good is provided, plotted against its value G from 0.5 to 2.5. Both rules give zero below G equal to 1 and certainty above G equal to 2. Between 1 and 2, winner-take-all is flat at one half, while proportional rises linearly as G minus 1. The two cross at G equal to 1.5.](assets/02-06-fig1.svg)

Below the crossing, winner-take-all provides the good more often; above it, proportional does. Neither reaches the efficient answer, which is always to provide it when $G > 1$.

## Worked examples

**Example 1 (clean): $G = 1.6$.** Then $F^*$ is uniform on $[0, 0.4] \cup [1.6, 2]$. Half the voters are promised at most 0.4 and half at least 1.6. Here $\kappa = 0.6/0.4 = 1.5$, $\pi_{\text{PR}} = 0.6$ and $\pi_{\text{WTA}} = 0.5$. Ex ante utility is $0.6(1.6) + 0.4 = 1.36$ under proportional and $0.5(1.6) + 0.5 = 1.30$ under winner-take-all; providing the good for sure would give 1.6.

Check the indifference under winner-take-all with a deviation that leaves $p = 0.4$ of voters at 0.1 and gives 0.6 of them just over 1.6. The budget is $0.4(0.1) + 0.6(1.6) = 1$. Against the public good it gets 0.6 of the votes and wins. Against $F^*$ it gets $\frac12 + 1.5(-0.1) = 0.35$ and loses. Its payoff is $\frac12$, no gain. Under proportional the same deviation earns $0.6(0.6) + 0.4(0.35) = 0.5$, again no gain.

**Example 2 (the hypothesis bites): $G = 3$ and districts.** In one national district, $G = 3 > 2$ gives the public good for sure. Now let the president need a majority of votes in a majority of a continuum of equal districts, as in LP's electoral-college model. Pork now needs just over half the voters in just over half the districts, a quarter of the electorate. Giving more than 3 to a quarter costs $\frac34 < 1$, so pork beats a sure public good whenever $G < 4$. LP show that the provision probability is then at most $\frac12$, against 1 nationwide. The "nationwide district" hypothesis was carrying the result.

## Watch out

- **You might think** proportional representation always delivers more public goods. Actually, in LP it does so only when $G > 3/2$. For $1 < G < 3/2$, winner-take-all provides the good more often (P1).
- **You might think** LP's comparison is about the number of parties. Actually both systems have exactly two candidates. The *only* difference is whether the payoff is the vote share or the win. This is the hypothesis people drop when they cite LP for multiparty PR.
- **You might think** the swing-district result needs voters to be selfish about pork. Actually it needs safe districts, whose votes don't count at the margin under majoritarian rule. The distortion comes from the weights, with one district in $D$ deciding, not from anyone's tastes.

## One-liner

> Rules price promises: single-vote ballots, winner-take-all and safe seats reward targeting the few votes that suffice, while vote-share rewards make broad goods pay, and which rule serves voters better depends on how much the broad good is worth.

## Problems

**P1 (🟢)** *(Formal.)* In the LP model let $G = 5/4$.

(a) Find the equilibrium probability that the public good is provided under each rule and each rule's ex ante expected utility per voter. Which rule do voters prefer?
(b) Under the proportional system, suppose the opponent offered the public good with probability $\frac12$, the winner-take-all rate. Exhibit a pork scheme that earns close to $3/5$ of the vote, and conclude that $\frac12$ is not a proportional-system equilibrium.

**P2 (🟡)** *(Formal.)* Use the swing-district model with $D = 5$ districts (two safe for each party, one swing) and $u_J = f_J + 0.75\ln g$.

(a) Find $g$ under each rule, and the per-resident transfer to the swing district under majoritarian rule.
(b) Compute per-capita utilitarian welfare, $(1 - g) + 0.75\ln g$, under each rule, and the loss from majoritarian rule.

**P3 (🟡)** *(Evaluative.)* "Lizzeri and Persico model proportional representation as two candidates maximizing vote share, so their model tells us nothing about real PR systems with five parties and coalition governments." Assess this claim in 150 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) $1 < G < 2$, so $\pi_{\text{WTA}} = \frac12$ and $\pi_{\text{PR}} = G - 1 = \frac14$. Mixed matchups split the vote in half, so the good is provided with probability $\pi$. Ex ante utility is $\pi G + (1 - \pi)$. Winner-take-all gives $\frac12 \cdot \frac54 + \frac12 = \frac98 = 1.125$. Proportional gives $\frac14 \cdot \frac54 + \frac34 = \frac{17}{16} = 1.0625$. Voters prefer winner-take-all, as they must for $G < 3/2$.

(b) $\kappa = \frac{1/4}{3/4} = \frac13$. Give consumption just over $\frac54$ to just under $\frac45$ of voters, at a cost of just under 1, and 0 to the rest, so $p$ is just over $\frac15$. That is the smallest feasible $p$, since $(1-p)G \le 1$. Against the public good the scheme gets $\frac45$. Against $F^*$ it gets $\frac12 + \frac13(\frac15 - \frac12) = \frac25$. With $\pi = \frac12$ its share is $\frac12 \cdot \frac45 + \frac12 \cdot \frac25 = \frac35 > \frac12$, so $\pi = \frac12$ is not an equilibrium. In general the payoff's slope in $p$ is $-\pi + (1-\pi)\kappa = -\frac13 < 0$, and only $\pi = \frac14$ makes it zero.

**Wrong turns:** In (a), taking the provision probability to be $\pi^2$ (both candidates offer it). A mixed matchup is a tie that the good wins half the time. In (b), giving the deviation $p = 0$: no budget can lift every voter above $G > 1$.

---

**P2** *(Formal.)*

(a) Proportional: maximize $\sum_J u_J$, so $0.75/g = 1$ and $g = 0.75$. The 0.25 left over per capita goes to transfers, and its split across districts is indeterminate. Majoritarian: maximize $u_s = 5(1-g) + 0.75\ln g$, so $0.75/g = 5$, $g = 0.15$, and the swing district gets $f_s = 5(0.85) = 4.25$ per resident.

(b) Proportional: $0.25 + 0.75\ln 0.75 = 0.0342$. Majoritarian: $0.85 + 0.75\ln 0.15 = -0.5728$. The loss is 0.607 per capita. More districts make the swing district a smaller share of the electorate, so the distortion grows: $g = b/D$.

**Wrong turns:** Treating the swing-district transfer as $1 - g$. Money is spread over one-fifth of the population, so each resident gets $D(1-g)$. Under proportional rule, assuming safe districts are ignored: their shares still move at the margin, which is why the parties maximize total utility.

---

**P3** *(Evaluative.)*

**Must hit, any verdict:**

- State the game exactly: two office-seeking candidates, binding simultaneous promises, identical voters, and "proportional" meaning payoff equals vote share (not seats bargained into a coalition).
- Note LP's robustness extension. Results survive any non-decreasing map from vote share to the chance one's platform is enacted, with even shares giving even odds. This covers some post-election bargaining in reduced form.
- Name what it does not cover: more than two parties, and coalitions that logroll targeted spending after the vote. Say the verdict turns on whether the margin-matters incentive survives these.
- Say what would test it: evidence on spending composition under PR, with identification as in `empirical-political-economy`.

**Wrong turns:** Saying LP compare plurality with many parties against PR. Both systems have two candidates. Saying the model predicts PR always provides more public goods. That holds only for $G > 3/2$.

**Model answer, one of several:** The claim overreaches, though it has a point. LP isolate one feature of PR, that vote shares are rewarded at the margin. They show it alone changes promises: with two office-seeking candidates making binding offers, provision rises from one half to $G - 1$. They also show the result holds when shares only shift the odds of enacting one's platform, which is a reduced form of bargaining. What the model cannot speak to is a five-party legislature in which coalition partners trade pork after the election. There, binding pre-election promises are the weak assumption. So the model is evidence about one mechanism, not a forecast for actual PR systems. Whether that mechanism dominates is an empirical question.

</details>

## Flashback

**From Lesson [2.4](02-04-valence-and-citizen-candidates.md) (Valence and citizen-candidates):** *(Formal (a)–(b).)* In the Osborne–Slivinski citizen-candidate model (plurality, sincere voting, no commitment), citizens' ideal points lie on $[0, 10]$ with density $\tfrac{1}{30}$ on $[0, 3]$ and on $[7, 10]$, and $\tfrac15$ on $[3, 7]$: most voters are moderates. The benefit of office is $b = 2$ and the cost of running is $c = \tfrac32$. (a) Find every $\varepsilon$ for which candidates at $5 - \varepsilon$ and $5 + \varepsilon$ form an equilibrium, and check the largest one directly. (b) Redo (a) for a uniform electorate on $[0, 10]$ with the same $b$ and $c$, minding the endpoint. In one sentence, say which equilibrium condition the concentration of moderates acts through.

<details>
<summary>Solution</summary>

(a) The density is symmetric about the median $m = 5$ and never rises away from the centre, so Proposition 4 applies. $F(3) = \tfrac{1}{10}$ and $F(x) = \tfrac{1}{10} + \tfrac{x - 3}{5}$ on $[3, 7]$, so $F^{-1}(\tfrac13) = 3 + 5 \cdot \tfrac{7}{30} = \tfrac{25}{6}$ and $e_p = 2(5 - \tfrac{25}{6}) = \tfrac53$.

- Nobody quits: $\varepsilon \ge c - \tfrac b2 = \tfrac12$. (At $\varepsilon = \tfrac14$, staying is worth $1 - \tfrac32 - \tfrac14 = -\tfrac34$, quitting $-\tfrac12$.)
- No centrist wins: $\varepsilon \le \tfrac53$, endpoint included because $\tfrac53 \le 3c - b = \tfrac52$.
- Spoilers never gain (symmetric $F$).

So $\varepsilon \in [\tfrac12, \tfrac53]$: left candidate in $[\tfrac{10}{3}, \tfrac92]$, right in $[\tfrac{11}{2}, \tfrac{20}{3}]$. Direct check at $\varepsilon = \tfrac53$ (candidates at $\tfrac{10}{3}$ and $\tfrac{20}{3}$): a centrist at 5 takes $(\tfrac{25}{6}, \tfrac{35}{6})$, mass $\tfrac53 \cdot \tfrac15 = \tfrac13$, a three-way tie. Entering gives $\tfrac13 \cdot 2 - \tfrac32 + \tfrac23(-\tfrac53) = -\tfrac{35}{18}$; staying out gives $-\tfrac53 = -\tfrac{30}{18}$. She stays out. A brute-force check of every exit and every citizen's entry, on a grid of step $\tfrac{1}{24}$, finds exactly this range.

(b) Uniform: $F^{-1}(\tfrac13) = \tfrac{10}{3}$, so $e_p = \tfrac{10}{3}$, and the quit bound is still $\tfrac12$. Now $e_p = \tfrac{10}{3} > 3c - b = \tfrac52$, so the endpoint is excluded: at $\varepsilon = \tfrac{10}{3}$ the centrist ties three ways and entering gives $\tfrac23 - \tfrac32 + \tfrac23(-\tfrac{10}{3}) = -\tfrac{55}{18}$, above the $-\tfrac{60}{18}$ of staying out. So $\varepsilon \in [\tfrac12, \tfrac{10}{3})$: left candidate in $(\tfrac53, \tfrac92]$, right in $[\tfrac{11}{2}, \tfrac{25}{3})$. Concentrating moderates halves the widest separation and leaves the narrowest alone: it acts only through "no centrist wins", because a centrist needs a much narrower slice of a crowded middle to reach a third of the vote, while "nobody quits" depends on $b$ and $c$, not on $F$.

**Wrong turns:** Carrying over the uniform shortcut, $e_p$ equal to a third of the line, to the step electorate: $e_p$ comes from where $F$ reaches $\tfrac13$. Including $\varepsilon = \tfrac{10}{3}$ in (b) by analogy with (a): the tie endpoint survives only if $e_p \le 3c - b$, which holds in (a) and fails in (b).

</details>

## Connections

- **Backward:** [2.3](02-03-probabilistic-voting.md)'s weighted-welfare platform is the engine of the swing-district model; changing the rule changes the weights. [2.5](02-05-strategic-voting-and-duvergers-law.md) derived what plurality does to voters; Cox's threshold is what it does to candidates. Mixed strategies over distributions are [`grad-game-theory` 2.2](../../grad-game-theory/lessons/02-02-nash-equilibrium-mixed-strategies.md)'s tools.
- **Forward:** [5.2](05-02-coalition-and-government-formation.md) models the coalition bargaining LP leave out. [3.1](03-01-free-riding-and-threshold-games.md) turns to collective action, where targetable benefits reappear as selective incentives ([3.2](03-02-olsons-logic-of-collective-action.md)). `empirical-political-economy` tests the spending predictions.
- **Sideways:** the electoral rules themselves are described in [`political-institutions` 1.1](../../political-institutions/lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md)–[2.3](../../political-institutions/lessons/02-03-duvergers-law-observed.md). The swing-district logic is the Samuelson rule ([`public-economics` 1.1](../../public-economics/lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md)) with only one district counted. Whether any of these outcomes is legitimate is for [`political-philosophy` 5.1](../../political-philosophy/lessons/05-01-why-democracy.md).
