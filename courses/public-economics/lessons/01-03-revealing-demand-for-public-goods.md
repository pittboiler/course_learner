# Public Economics · Lesson 1.3: Revealing demand for public goods

> ⏱ ~15 min · Module 1: Public goods · Builds on: [1.1 The Samuelson rule beyond quasilinearity](01-01-the-samuelson-rule-beyond-quasilinearity.md), [1.2 Voluntary provision and crowding out](01-02-voluntary-provision-and-crowding-out.md), [`grad-game-theory` 5.3 VCG](../../grad-game-theory/lessons/05-03-dominant-strategy-mechanisms-vcg.md) · Unlocks: [2.4 The marginal cost of public funds](02-04-second-best-and-the-marginal-cost-of-public-funds.md), [8.1 Tiebout](08-01-tiebout-voting-with-your-feet.md)

## Why this matters

[1.1](01-01-the-samuelson-rule-beyond-quasilinearity.md) told the planner how much of a public good to buy: enough that the sum of marginal willingness to pay equals marginal cost. [1.2](01-02-voluntary-provision-and-crowding-out.md) showed that private giving will not get there. Both assumed the planner knows everyone's willingness to pay. She does not, and those who do have reason to shade it. This lesson surveys every route to getting the numbers out of people (personalized prices, the pivot mechanism, the expected-externality mechanism, majority voting) and pins down what each one gives up. The punchline is a theorem: no mechanism has every property at once.

## The idea

Two neighbours share a street they could light. Suppose the city charges each a personal price per lamp equal to what she says one more lamp is worth to her. If you say the lamps matter little, your price falls. The number of lamps falls too, but only a little, because your neighbour's price rises to cover most of the gap. At the true answer the lost lamp is worth almost exactly what you would have paid for it, so losing it costs you almost nothing. The lower price on every other lamp is pure gain. Understating always pays.

Every fix has to break that link between what you say and what you pay. There are four classic routes:

1. **Personalized (Lindahl) prices.** Efficient and self-financing, if people tell the truth.
2. **Charge each person the harm her report does to others** (the pivot mechanism). Truth becomes a dominant strategy, but the charges produce money that cannot be handed back.
3. **Pay each person the *expected* benefit her report gives the others,** funded by everyone else (the expected-externality mechanism). The budget balances and truth is optimal on average, but someone may prefer not to take part.
4. **Split the cost equally and vote.** Simple and self-financing, but a vote records each person's ranking, not how strongly she cares, so the quantity chosen is efficient only by coincidence.

## The formal version

**Setup.** Residents $i=1,\dots,n$ have quasilinear utility $u_i = x_i + b_i(G)$, where $x_i$ is money, $G$ is the public good, and $b_i$ is increasing and concave. Each unit of $G$ costs $c$. The resident's marginal rate of substitution, $\mathrm{MRS}_i = b_i'(G)$, is her marginal willingness to pay. The efficient $G^*$ solves the [Samuelson rule](../reference.md#samuelson-rule) $\sum_i b_i'(G^*) = c$ (quasilinearity makes $G^*$ independent of the distribution of money, as [1.1](01-01-the-samuelson-rule-beyond-quasilinearity.md) showed).

**Lindahl prices are manipulable.** [Lindahl prices](../reference.md#lindahl-prices) ([`grad-micro` 6.4](../../grad-micro/lessons/06-04-public-goods.md)) charge resident $i$ a personal price $p_i = b_i'(G^*)$ per unit, with $\sum_i p_i = c$. To compute them the planner must ask. Let resident $i$ report $\hat b_i'(G) = b_i'(G) - k$ with $k \ge 0$. The planner then picks $G(k)$ where reported marginal benefits sum to $c$ and charges $p_i(k) = \hat b_i'(G(k))$. Her true payoff is $U_i(k) = b_i(G(k)) - p_i(k)\,G(k)$, and at $k=0$

$$U_i'(0) = \underbrace{\big[b_i'(G) - p_i\big]}_{=\,0\ \text{at truth}} G'(0) \;-\; G\,p_i'(0) \;=\; -G\,p_i'(0) \;>\; 0.$$

*In words:* the fall in $G$ costs her nothing at the margin, because at the truth her marginal benefit equals her price; the fall in her price saves her money on every unit. Understatement is profitable to first order.

**The pivot mechanism (cited).** Take a yes-or-no project. Let $v_i$ be $i$'s *net* value (value minus an assigned cost share). Build iff reported net values sum to at least zero. The [pivot mechanism](../reference.md#pivot-mechanism) (Clarke 1971, *Public Choice*; Groves 1973, *Econometrica*, for the general family) charges

$$t_i = \max\Big(\sum_{j\ne i}\hat v_j,\,0\Big) - \Big(\sum_{j\ne i}\hat v_j\Big)\,\mathbf 1\{\text{build}\}.$$

*In words:* you pay the loss your report imposes on everyone else, which is zero unless your report flips the decision (you are *pivotal*). [`grad-game-theory` 5.3](../../grad-game-theory/lessons/05-03-dominant-strategy-mechanisms-vcg.md) proves truth is a dominant strategy. Every $t_i \ge 0$, so the mechanism *collects* money, and rebating it to the people who paid it would restore the incentive to lie. The [Green-Laffont theorem](../reference.md#green-laffont-theorem) (Green and Laffont 1977, *Econometrica*) closes the door: on a rich enough set of preferences, every efficient mechanism with dominant-strategy truth-telling is a Groves mechanism, and (the standard impossibility that carries their names) no Groves mechanism balances the budget in every state of the world. The surplus must be thrown away or paid to an outsider.

**The expected-externality mechanism.** d'Aspremont and Gérard-Varet (1979, *Journal of Public Economics*) weaken dominant strategies to Bayesian incentive compatibility: truth is optimal if others tell the truth, averaging over their privately known types $\theta_j$, which are independent. Let $x^*(\hat\theta)$ be the efficient decision at the reports. Define resident $i$'s *expected externality*

$$\xi_i(\hat\theta_i) = \mathbb E_{\theta_{-i}}\Big[\sum_{j\ne i} v_j\big(x^*(\hat\theta_i,\theta_{-i}),\,\theta_j\big)\Big],$$

and give her the net transfer

$$t_i = \xi_i(\hat\theta_i) - \frac{1}{n-1}\sum_{j\ne i}\xi_j(\hat\theta_j).$$

*In words:* each person is paid the expected value her report creates for the others, and everyone else chips in equally to fund it. Her expected payoff from a report is her own value plus $\xi_i$, which is expected *total* surplus, so truth maximizes it. What she pays depends only on others' reports, so it cannot tempt her. Transfers sum to exactly zero in every state. The cost: nothing guarantees each type a nonnegative expected payoff, so [interim participation](../reference.md#expected-externality-mechanism) can fail. This is the logic of Myerson-Satterthwaite ([`grad-game-theory` 5.5](../../grad-game-theory/lessons/05-05-limits-of-efficient-design.md)): efficiency, Bayesian incentives, budget balance and voluntary participation cannot all hold in general.

**Bowen voting.** Split the cost equally, so each pays $c/n$ per unit, and let residents vote on $G$. Resident $i$'s favourite quantity $G_i$ solves $b_i'(G_i) = c/n$, and her preferences over $G$ are single-peaked. So the median favourite $G_m$ beats every alternative in a pairwise vote (the median voter theorem, [`grad-micro` 6.5](../../grad-micro/lessons/06-05-social-choice-welfare.md)). This is the [Bowen equilibrium](../reference.md#bowen-equilibrium) (Bowen 1943, *QJE*). It is efficient iff

$$\frac1n\sum_i b_i'(G_m) \;=\; \frac cn \;=\; b_m'(G_m).$$

*In words:* majority voting provides the efficient amount exactly when the *mean* MRS equals the *median* MRS at the voted quantity. When a few residents value the good intensely (a right-skewed distribution), the mean exceeds the median and the vote underprovides.

*Miniature:* five residents with $b_i'(G) = a_i - G$, $a = (4,5,6,8,12)$, and $c = 10$ (so a cost share of 2). Favourites are $a_i - 2 = (2,3,4,6,10)$, so $G_m = 4$. The Samuelson rule gives $35 - 5G = 10$, so $G^* = 5$. At $G = 4$ the MRSs are $(0,1,2,4,8)$: median 2, mean 3.

| Route | Efficient | Truth-telling | Budget balanced | Voluntary |
|---|---|---|---|---|
| Lindahl prices | only if truthful | no: understate | yes | yes |
| Pivot (Clarke-Groves) | yes, the decision | dominant strategy | no: surplus burned | not with fixed cost shares |
| Expected externality (AGV) | yes | Bayesian only | yes, exactly | not guaranteed |
| Bowen majority vote | only if mean MRS = median MRS | votes, not valuations | yes | no: the outvoted pay |

*In words:* no budget-balanced mechanism is efficient with dominant-strategy truth-telling, and with Bayesian truth-telling it cannot always keep participation voluntary. Each escape gives up a column.

## Picture

![Lindahl manipulation on a price-quantity diagram, price per unit of G on the vertical axis and G on the horizontal. The true sum of marginal benefits 14 minus 2G meets the cost line at 6 at G equals 4, where resident 2 pays a price of 1. When resident 2 reports 3 minus G instead of 5 minus G, the reported sum 12 minus 2G meets the cost line at G equals 3, and her price falls to 0](assets/01-03-fig1.svg)

Resident 2 shaves 2 off her reported marginal benefit (dashed green). The reported sum (dashed red) shifts down, and $G$ falls from 4 to 3, but her price falls from 1 to 0. Resident 1's price rises to 6: his true $\mathrm{MRS}$ line crosses the cost line at $G = 3$.

## Worked examples

**Example 1 (clean): the profitable lie.** Invented numbers from the figure: $b_1'(G) = 9 - G$, $b_2'(G) = 5 - G$, $c = 6$. The Samuelson rule gives $14 - 2G = 6$, so $G^* = 4$, with Lindahl prices $p_1 = 5$ and $p_2 = 1$ (sum 6). Resident 2 pays $1 \times 4 = 4$ and enjoys $b_2(4) = \int_0^4 (5-s)\,ds = 12$, a net payoff of 8.

Now she reports $3 - G$. The planner solves $12 - 2G = 6$, so $G = 3$, and charges her the reported $3 - 3 = 0$. Her benefit is $\int_0^3(5-s)\,ds = 10.5$ and her bill is 0, a payoff of 10.5.

- Losing the fourth unit cost her $\int_3^4(5-s)\,ds = 1.5$ of benefit.
- Her bill fell by 4. She gains 2.5.
- Resident 1 now pays $6 \times 3 = 18$ for less of the good: his payoff falls from 8 to 4.5. Total surplus falls from 16 to 15, the triangle between the true sum and cost from $G = 3$ to $G = 4$, $\tfrac12(1)(8-6) = 1$.

The lie is not just a transfer between neighbours: it destroys surplus.

**Example 2 (why you'd care): a budget-balanced mechanism that some types would refuse.** Invented numbers: two neighbours can build a playground costing 8, split 4 each. Each values it at 9 (type H) or 1 (type L), independently and with probability one-half each. Net values are $+5$ or $-3$. Building is efficient unless both are L.

*Expected externalities.* If I report H, the playground is always built, and my neighbour's expected net value is $\tfrac12(5) + \tfrac12(-3) = 1$, so $\xi(\mathrm H) = 1$. If I report L, it is built only when she is H, so $\xi(\mathrm L) = \tfrac12(5) = 2.5$. Transfers $t_1 = \xi(\hat\theta_1) - \xi(\hat\theta_2)$: in the mixed profile the L reporter receives 1.5 from the H reporter; otherwise nothing moves. The budget balances in every state.

*Incentives* (expected payoffs; the neighbour's expected $\xi$ is $1.75$):

- An H who tells the truth: $5 + 1 - 1.75 = 4.25$. Pretending to be L: $\tfrac12(5) + 2.5 - 1.75 = 3.25$. Truth wins.
- An L who tells the truth: $\tfrac12(-3) + 2.5 - 1.75 = -0.75$. Pretending to be H: $-3 + 1 - 1.75 = -3.75$. Truth wins.

*Participation.* The L type expects $-0.75$, below the 0 she gets by vetoing the project. AGV fails here.

*Can any budget-balanced rule fix it?* No. Take any budget-balanced rule, and let $D$ be the total paid to the L reporter across the two mixed profiles, $(\mathrm L,\mathrm H)$ and $(\mathrm H,\mathrm L)$. Adding the two L types' participation constraints (budget balance cancels the other transfers) gives $\tfrac12 D - 3 \ge 0$, so $D \ge 6$: on average an overruled L must receive at least the 3 she loses. Adding the two H types' truth-telling constraints gives $5 - D \ge 0$, so $D \le 5$: an H who claims L gets the playground only half the time, losing 2.5, so paying L reporters more than 2.5 on average makes that lie pay. Since $6 > 5$, no efficient, Bayesian-truthful, budget-balanced rule keeps both L types willing, even though expected surplus is 3.5. This is Myerson-Satterthwaite in miniature: the information rents cost more than the gains.

## Watch out

- **You might think understating under Lindahl pricing leaves $G$ unchanged, but actually $G$ falls.** The lie pays because the fall in $G$ costs nothing at the margin while the price cut saves money on every unit. The loss to her is second order; the saving is first order.
- **You might think the pivot mechanism is efficient, but actually only its *decision* is.** The burned surplus is a real loss, and it can exceed the gain from building (P1).
- **You might think AGV contradicts Green-Laffont, but actually it weakens the incentive requirement.** Truth is optimal only on average against truthful others, and in exchange participation can fail.
- **You might think majority voting fails because people vote strategically, but actually the problem is intensity.** In a pairwise vote, voting sincerely is a dominant strategy. The vote simply cannot register how much the high-value resident cares.

## One-liner

> People understate what public goods are worth to them; you can buy the truth with dominant-strategy side payments (and burn money), with expected side payments (and risk refusals), or skip the question and vote (and get the median, not the mean).

## Problems

**P1 (🟢) *(Formal (a)–(b) · Exegetical (c).)*** Invented numbers: three residents decide whether to build a footbridge. Their net values (value minus an assigned cost share) are $v = (5, 4, -8)$. The pivot mechanism is used, and everyone reports truthfully. (a) Is the bridge built? (b) Find each resident's Clarke tax and say who is pivotal. (c) Compare the total tax collected with the net surplus from building, and say in two sentences why the collected money cannot simply be handed back.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** Invented numbers: five residents have $u_i = x_i + a_iG - \tfrac12 G^2$ with $a = (4, 5, 6, 10, 20)$. The public good costs 5 per unit, split equally, and $G$ is chosen by majority vote. (a) Find each resident's favourite $G$ and the Bowen outcome. (b) Find the efficient $G^*$ and the welfare loss of the vote. (c) Resident 5's $a$ rises from 20 to 30. What happens to the Bowen outcome and to $G^*$? Name the efficiency condition that explains the difference. Two sentences.

**P3 (🔴, optional) *(Formal (a)–(b) · Exegetical (c).)*** Invented numbers: as in Example 2, but the project costs 6, split 3 each, and each neighbour values it at 8 (H) or 1 (L), with probability one-half each, independently. (a) Find $\xi(\mathrm H)$, $\xi(\mathrm L)$, the AGV transfer in a mixed profile, and each type's expected payoff under truth-telling. (b) Consider instead the budget-balanced rule in which, whenever the reports are mixed, the H reporter pays the L reporter $s$, and nothing moves otherwise. Find the range of $s$ for which both types tell the truth (given the other does) and both expect a nonnegative payoff. (c) Which property did AGV give up in (a), and does this example show it had to be given up? Contrast with Example 2 in two sentences.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) · Exegetical (c).)*

(a) Reported net values sum to $5 + 4 - 8 = 1 \ge 0$, so the bridge is built.

(b) Compare the others' best total without resident $i$ with their total at the chosen outcome.

- Resident 1: without her, $4 - 8 = -4 < 0$, so the others would not build (total 0). With her they get $-4$. Tax $0 - (-4) = 4$. Pivotal.
- Resident 2: without him, $5 - 8 = -3$, no bridge (0). With him the others get $-3$. Tax 3. Pivotal.
- Resident 3: without him, $5 + 4 = 9$, the bridge is built, and it is built with him too. Tax 0. Not pivotal.

Payoffs: $5 - 4 = 1$, $4 - 3 = 1$, and $-8$.

(c) The mechanism collects $4 + 3 = 7$, against a net surplus from building of only 1. Counting the burned money, the group ends at $1 - 7 = -6$, worse than not building at all (0).

**Must hit, strict (c):**

- Each tax depends on the others' reports only; a rebate that depends on a resident's own report changes her incentives and can make lying pay.
- Green-Laffont: no efficient, dominant-strategy mechanism balances the budget in every profile, so some money must leave the group. (Full credit also for noting that rebates depending only on others' reports keep truth dominant but cannot cancel the surplus in every profile.)

**Wrong turns:** charging resident 3 because his value is negative (a tax is triggered by flipping the decision, not by disliking it); calling the outcome efficient without counting the 7 that is burned.

**Model answer (c):** Rebating the 7 in a way that depends on what a resident reported reintroduces a payoff from shading her report, which is exactly what the tax was built to remove. Green and Laffont show that no efficient mechanism with dominant-strategy truth-telling balances the budget in every profile, so here the money that leaves the group (7) swamps the gain from the bridge (1).

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) Each pays $5/5 = 1$ per unit, so resident $i$'s favourite solves $a_i - G = 1$: $G_i = (3, 4, 5, 9, 19)$. Preferences are single-peaked, so the median favourite wins: $G_m = 5$.

(b) Samuelson: $\sum_i (a_i - G) = 45 - 5G = 5$, so $G^* = 8$. Total surplus is $S(G) = 45G - \tfrac52 G^2 - 5G$, so the loss is

$$S(8) - S(5) = 40 \times 3 - \tfrac52\,(64 - 25) = 120 - 97.5 = 22.5.$$

(c) The Bowen outcome stays at 5, because the median favourite is still resident 3's. $G^*$ rises: $55 - 5G = 5$ gives $G^* = 10$.

**Must hit, strict (c):**

- Bowen voting is efficient only if the mean MRS equals the median MRS at the voted quantity; at $G = 5$ the MRSs are $(-1, 0, 1, 5, 15)$, median 1 and mean 4, and raising resident 5's $a$ raises the mean but not the median.
- The vote registers only who prefers more or less, not by how much, so an intensity increase at the top moves $G^*$ but not the vote.

**Wrong turns:** taking the median $a_i$, 6, as the Bowen outcome, which forgets the cost share; in (c), expecting the vote to move because the total value of the good rose.

**Model answer (c):** Bowen provision stays at 5 while $G^*$ rises from 8 to 10, because the vote is efficient only when the mean MRS equals the median MRS at the voted quantity. Resident 5's extra intensity raises the mean MRS (from 4 to 6 at $G = 5$) but leaves the median at 1, and a majority vote counts preferences, not intensities.

---

**P3** *(Formal (a)–(b) · Exegetical (c).)*

Net values are $8 - 3 = 5$ (H) and $1 - 3 = -2$ (L), and building is efficient unless both are L.

(a) Reporting H means the project is always built: $\xi(\mathrm H) = \tfrac12(5) + \tfrac12(-2) = 1.5$. Reporting L means it is built only if the neighbour is H: $\xi(\mathrm L) = \tfrac12(5) = 2.5$. In a mixed profile the L reporter receives $2.5 - 1.5 = 1$ from the H reporter. The neighbour's expected $\xi$ is 2, so

- H: $5 + 1.5 - 2 = 4.5$;
- L: $\tfrac12(-2) + 2.5 - 2 = -0.5$.

(b) Expected payoffs under the $s$ rule:

- L truthful: $\tfrac12(-2 + s) = -1 + s/2$. Pretending H: $-2 - s/2$. Truth always wins.
- H truthful: $5 - s/2$. Pretending L: $\tfrac12(5) + s/2 = 2.5 + s/2$. Truth needs $s \le 2.5$.
- Participation: L needs $s \ge 2$; H needs $s \le 10$, which is implied.

So $2 \le s \le 2.5$.

**Must hit, strict (c):**

- AGV gave up interim participation: the L type expects $-0.5$ and would veto.
- It did not have to be given up here: any $s$ in $[2, 2.5]$ is efficient, budget balanced, Bayesian-truthful and voluntary. In Example 2 it was impossible, because the overruled L's loss (3, so compensation of at least 3 per mixed profile) exceeded what H truth-telling allows (2.5); here the loss is 2 against a cap of 2.5.

**Wrong turns:** treating AGV's failure as proof that no mechanism works (AGV is one budget-balanced rule, not all of them); forgetting that the H type must not want to claim L once the L payment rises.

**Model answer (c):** AGV sacrificed voluntary participation, since the L type expects $-0.5$, but a steeper budget-balanced payment from H to L, any $s$ between 2 and 2.5, restores it without breaking truth-telling. In Example 2 no such payment exists, because compensating the overruled L for her loss of 3 requires more than the 2.5 an H would gain by lying, which is the Myerson-Satterthwaite tension in its smallest form.

</details>

## Flashback

**From Lesson [1.1](01-01-the-samuelson-rule-beyond-quasilinearity.md) (The Samuelson rule beyond quasilinearity):** *(Formal (a)–(b) · Exegetical (c).)* Invented numbers. Two people have $u_1=\ln x_1+\ln G$ and $u_2=\ln x_2+\tfrac13\ln G$, where $x_i$ is private consumption and $G$ a public good. The frontier is $X+2G=150$, with $X=x_1+x_2$. (a) What share $s$ of private consumption must person 1 hold for the efficient $G$ to be 25? Give $x_1$, $x_2$ and each person's MRS there. (b) As $s$ runs from 0 to 1, over what range does the efficient $G$ run? (c) In one sentence, name the condition that fails here and so makes the answer to (b) a range rather than a point.

<details>
<summary>Solution</summary>

Here $\mathrm{MRS}^i=\alpha_i x_i/G$ with $\alpha=(1,\tfrac13)$ and $\mathrm{MRT}=2$. With $x_1=sX$, the Samuelson rule reads $\bar\alpha X/G=2$, where $\bar\alpha=s+\tfrac13(1-s)$.

(a) At $G=25$ the frontier gives $X=100$, so $\bar\alpha=2\times25/100=\tfrac12$. Then $\tfrac13+\tfrac23 s=\tfrac12$ gives $s=\tfrac14$: $x_1=25$, $x_2=75$. The MRSs are $25/25=1$ and $\tfrac13\times75/25=1$, summing to the MRT of 2.

(b) Samuelson and the frontier give $2G(1+\bar\alpha)=150\,\bar\alpha$, so $G^*=75\,\bar\alpha/(1+\bar\alpha)$. At $s=0$, $\bar\alpha=\tfrac13$ and $G^*=18.75$; at $s=1$, $\bar\alpha=1$ and $G^*=37.5$. The efficient $G$ runs from 18.75 to 37.5, doubling as private consumption moves to the person who values the good more.

**Must hit, strict (c):**

- The Bergstrom-Cornes condition $u_i=A(G)\,x_i+B_i(G)$ with $A$ common to everyone fails.
- The implied $A_i(G)=G^{\alpha_i}$ differs across people, so a transfer changes one MRS by more than the other.

**Model answer (c):** The preferences are not of the Bergstrom-Cornes form with a common $A(G)$, since person 1's income effect on the good ($G^{1}$) differs from person 2's ($G^{1/3}$), so moving wealth between them changes the summed MRS.

**Wrong turns:** setting the summed MRS equal to 1 instead of the MRT of 2 (which gives $\bar\alpha=\tfrac14$, below the smallest taste and so no feasible $s$); averaging the tastes with equal weights instead of weighting by each person's private consumption.

</details>

## Connections

- **Backward:** [`grad-micro` 6.4](../../grad-micro/lessons/06-04-public-goods.md) defined Lindahl prices and noted they need the truth; this lesson shows exactly why they don't get it. The pivot mechanism and Myerson-Satterthwaite are [`grad-game-theory` 5.3](../../grad-game-theory/lessons/05-03-dominant-strategy-mechanisms-vcg.md) and [5.5](../../grad-game-theory/lessons/05-05-limits-of-efficient-design.md), pointed at a public good; the revelation principle ([`grad-game-theory` 5.2](../../grad-game-theory/lessons/05-02-revelation-principle-incentive-compatibility.md)) is why studying direct mechanisms loses nothing. [1.2](01-02-voluntary-provision-and-crowding-out.md) is the no-mechanism benchmark: voluntary giving is budget balanced and voluntary but far from efficient.
- **Forward:** [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md) adds the cost of raising the money: once taxes distort, the Samuelson rule itself changes. [8.1](08-01-tiebout-voting-with-your-feet.md) offers a fifth route: when people can choose among towns, they reveal demand by moving.
- **Sideways:** the Bowen equilibrium is the median voter theorem of [`grad-micro` 6.5](../../grad-micro/lessons/06-05-social-choice-welfare.md) with a budget attached. Which quantity voters *actually* choose, and how lobbying bends it, is [`political-economy`](../../political-economy/syllabus.md)'s question. The Lindahl manipulation is the same first-order-versus-second-order logic as the envelope theorem ([`grad-micro` 1.4](../../grad-micro/lessons/01-04-envelope-theorem-duality.md)): a small distortion of an optimum costs almost nothing, while a price cut pays in full.
