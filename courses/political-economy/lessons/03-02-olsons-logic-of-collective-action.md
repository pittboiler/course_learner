# Political Economy · Lesson 3.2: Olson's logic of collective action

> ⏱ ~15 min · Module 3: Collective action and the choice of rules · Builds on: [3.1 Free riding and threshold games](03-01-free-riding-and-threshold-games.md), [`public-economics` 1.2](../../public-economics/lessons/01-02-voluntary-provision-and-crowding-out.md) · Unlocks: [3.3 The commons and common-pool resources](03-03-the-commons-and-common-pool-resources.md), [4.4 Regulatory capture](04-04-regulatory-capture.md)

## Why this matters

A tariff that costs each of ten million consumers a few dollars a year and hands a few firms millions can survive for decades, though the losers vastly outnumber and outweigh the winners. The older pluralist picture of politics assumed that people with a shared interest organize to pursue it. Mancur Olson's *The Logic of Collective Action* (1965) denied the step from shared interest to collective action. Who organizes depends on how the benefit is *split*: small groups, and groups with one dominant member, act; large groups of equals mostly do not. This lesson derives that from one first-order condition, then shows which assumption carries the size claim.

## The idea

Three neighbours share a stretch of road that needs gravel. One owns the quarry trucks and half the frontage; the other two own a quarter each. Each would like more gravel, but each pays for whatever he buys. The big owner buys gravel until *his* half of the next load's value equals its cost. The small owners look at the result, see that their quarter of another load is worth less than it costs, and buy nothing. The road gets gravelled, below the efficient amount, and the person paying for it is the one with the largest stake. That is Olson's model in miniature.

Now make it a thousand owners with equal frontage. Each one's share of a load is tiny, nobody's purchase is worth its cost, and the road stays mud, unless something *other* than the road gets people to pay. That something is a selective incentive.

## The model

**Setup.** A group of $n$ members. Member $i$ contributes $z_i \ge 0$ units of money; provision is $G = \sum_j z_j$, and a unit of $G$ costs one unit. The group as a whole values provision at $V(G) = a\,g(G)$, with $a > 0$ and $g$ strictly increasing, strictly concave and differentiable, $g(0) = 0$. Member $i$ receives a fixed share $s_i > 0$ of that value, $\sum_i s_i = 1$, so

$$u_i = s_i\,a\,g(G) - z_i.$$

Contributions are chosen simultaneously; payoffs are common knowledge; the solution concept is Nash equilibrium. Order members so that $s_1 \ge s_2 \ge \dots \ge s_n$. Note what "fixed shares of a fixed $V$" builds in: adding a member *divides* the benefit rather than adding to it. Hold on to that.

**Efficient level.** Total surplus is $V(G) - G$, so $G^*$ solves $a\,g'(G^*) = 1$: summed marginal benefits $\sum_i s_i a g'$ equal marginal cost. That is the [Samuelson rule](../../public-economics/lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) in this quasilinear setting, as in [`grad-micro` 6.4](../../grad-micro/lessons/06-04-public-goods.md).

**Proposition 1 (the largest member provides alone).** Suppose $s_1 > s_j$ for every $j \ne 1$.
(i) If $s_1 a g'(0) \le 1$, the unique equilibrium has $G = 0$.
(ii) If $s_1 a g'(0) > 1$, the unique equilibrium has $z_1 = \hat G$ and $z_j = 0$ for $j \ne 1$, where $s_1\,a\,g'(\hat G) = 1$, and $\hat G < G^*$.

*In words:* only the member with the biggest slice pays, he stops where his own slice of the marginal benefit equals the cost, and the group gets less than it should.

*Proof.*

1. Fix others' total $G_{-i}$. $u_i$ is strictly concave in $z_i$, so $i$'s best response is unique: $z_i > 0$ exactly when $s_i a g'(G_{-i}) > 1$, and then $s_i a g'(G) = 1$. So in equilibrium every contributor has $s_i a g'(G) = 1$ and every non-contributor has $s_i a g'(G) \le 1$.
2. Suppose some $j \ne 1$ contributes. Then $s_j a g'(G) = 1$, so $s_1 a g'(G) > 1$, which violates member 1's condition in step 1 whether or not he contributes. So nobody but member 1 contributes.
3. If $G > 0$, member 1 contributes, so $s_1 a g'(G) = 1$; $g'$ is strictly decreasing, so this pins $G = \hat G$. If $G = 0$, step 1 requires $s_1 a g'(0) \le 1$. Under (ii) that fails, so $G = \hat G$; under (i), $s_1 a g'(G) < s_1 a g'(0) \le 1$ for every $G > 0$, so $G = 0$.
4. $a g'(G^*) = 1 = s_1 a g'(\hat G) < a g'(\hat G)$ because $s_1 < 1$. Since $g'$ is decreasing, $\hat G < G^*$. ∎

With a tie at the top, steps 1–3 still pin $G$; only the split among the tied members is indeterminate. With income effects the same logic picks out the richest as contributors, the [contributor-set](../../public-economics/lessons/01-02-voluntary-provision-and-crowding-out.md) result of `public-economics` 1.2, cited here, not re-derived.

**Power benefits.** Take $g(G) = G^\beta$ with $0 < \beta < 1$. Then

$$\hat G = (\beta s_1 a)^{1/(1-\beta)}, \qquad G^* = (\beta a)^{1/(1-\beta)}, \qquad \frac{\hat G}{G^*} = s_1^{1/(1-\beta)}.$$

*In words:* the provision shortfall depends on nothing but the largest share. With equal shares $s_1 = 1/n$, the ratio is $n^{-1/(1-\beta)}$ and collapses as the group grows. This is [Olson's logic](../reference.md#olsons-logic) in one line.

**Corollary ([exploitation of the great by the small](../reference.md#exploitation-of-the-great-by-the-small)).** With power benefits, the provider nets $(1-\beta)\,s_1 V(\hat G)$ and member $j$ nets $s_j V(\hat G)$, so a smaller member out-earns the provider whenever $s_j > (1-\beta)\,s_1$.

*Proof.* The first-order condition $s_1 a \beta \hat G^{\beta - 1} = 1$ gives $\hat G = \beta s_1 a \hat G^\beta = \beta s_1 V(\hat G)$, so member 1 nets $s_1 V - \beta s_1 V$. Member $j$ pays nothing. ∎

The phrase is Olson's. With Richard Zeckhauser, in "An Economic Theory of Alliances" (*Review of Economics and Statistics*, 1966), he used it to predict that NATO's largest members carry more than their proportional share of the common defence.

**Olson's three groups.** A group is [privileged](../reference.md#privileged-intermediate-latent-groups) if some member gains enough to provide the good alone (case (ii)). It is *intermediate* if no one does, but the group is small enough that members notice whether others help, so bargaining and the threshold logic of [3.1](03-01-free-riding-and-threshold-games.md) apply. It is *latent* if it is so large that no member's contribution perceptibly affects anyone, and nothing gets provided without something more. Russell Hardin (*Collective Action*, 1982) restated the typology with $k$, the size of the smallest subgroup that gains from providing the good even if nobody else helps: privileged means $k = 1$. For a lumpy good costing a third of the group's total value, with equal shares, $k = \lceil n/3 \rceil$: 1 for three members, 10 for thirty. That is a [threshold public good](../reference.md#threshold-public-goods) with an endogenous threshold.

**[Selective incentives](../reference.md#selective-incentives) and the by-product theory.** Let membership dues $d$ buy a contribution to $G$. A member of a latent group gains $s_i[V(G + d) - V(G)] \approx 0$ from his own dues, so he pays only if a private benefit $b$, available to members alone, satisfies $b \gtrsim d$. Olson's *by-product theory*: large lobbies (unions, professional associations) are financed by organizations that sell such private goods (insurance, journals, a closed shop), and lobbying is funded from the margin. If the private good costs the organization $\kappa$ per member, lobbying is at most $n(b - \kappa)$. The [free-rider problem](../reference.md#free-rider-problem) has not been solved, only routed around through a private market.

**Where the argument is weakest.** The size claim rests on fixed shares of a fixed $V$, so a new member dilutes everyone's stake. That is rivalry. Hardin separated two typologies Olson ran together: group size and latency have no logical link, because what decides is $k$. And $k$ grows with $n$ only if each member's stake shrinks as members are added. John Chamberlin ("Provision of Collective Goods as a Function of Group Size," *American Political Science Review*, 1974) had shown that Olson's conclusion about the *absolute* amount provided does not hold in general for a good with no rivalry. Drop the assumption and Example 2 shows what survives: efficiency still collapses with $n$, provision does not. Hardin also pressed a second point: selective incentives explain why an organization persists, not how it formed, since someone must already be organized to sell the insurance ([rivalry and group size](../reference.md#rivalry-and-group-size)).

## Picture

![Ratio of equilibrium to efficient provision plotted against the largest member's share, for three benefit curves G to the one third, two thirds and four fifths. All three rise from 0 at share 0 to 1 at share 1, more steeply convex as the exponent rises. A right-hand axis converts the two-thirds curve into G for Example 1, from 0 to 8,000. Point A at share 0.5 gives G of 1,000, ratio one eighth; point B at share 0.1, ten equal members, gives G of 8, ratio one in a thousand.](assets/03-02-fig1.svg)

The more slowly benefits saturate (larger $\beta$), the more a group depends on a dominant member: at $s_1 = 0.5$ the ratio is 0.35, 0.125 and 0.031 across the three curves.

## Worked examples

**Example 1 (clean): one dominant member.** $V(G) = 30\,G^{2/3}$, three members with shares 0.5, 0.3, 0.2. Here $\beta = 2/3$ and $\beta a = 20$, so $G^* = 20^3 = 8000$ and $\hat G = (20 \cdot 0.5)^3 = 1000$, ratio $1/8$ (point A).

- *No one else adds.* $V'(1000) = 20 \cdot 1000^{-1/3} = 2$. Member 2's marginal benefit is $0.3 \cdot 2 = 0.6 < 1$; member 3's is $0.4 < 1$. A grid search over every member's deviation finds no gain.
- *Who gains.* $V(1000) = 30 \cdot 100 = 3000$. Member 1 nets $1500 - 1000 = 500$, which is $(1/3)(0.5)(3000)$ as the corollary says. Members 2 and 3 net 900 and 600. Both clear $(1-\beta)s_1 = 1/6$, so the two small members out-earn the one who pays.
- *Ten equal members.* $s = 0.1$: $\hat G = 2^3 = 8$, ratio $1/1000$ (point B). Any split of 8 among the ten is an equilibrium. Group surplus is $V(8) - 8 = 112$, against $12000 - 8000 = 4000$ at $G^*$.

**Example 2 (the hypothesis bites): rival versus nonrival.** Grow a group from 3 to 30 equal members two ways.

- *Rival (Olson's shares).* The group value stays $30\,G^{2/3}$, split $1/n$. Then $\hat G = (20/n)^3$: $8000/27 \approx 296.3$ at $n = 3$, $8/27 \approx 0.30$ at $n = 30$. $G^* = 8000$ throughout.
- *Nonrival.* Each member values $10\,G^{2/3}$ however many others enjoy it, so the group value is $10n\,G^{2/3}$ (equal to the rival case at $n = 3$). The provider stops where his *own* marginal benefit $\tfrac{20}{3}G^{-1/3}$ equals 1: $\hat G = 8000/27 \approx 296.3$ at *both* sizes. But $G^* = (20n/3)^3$ rises from 8000 to 8,000,000.

The efficiency ratio is $1/27$ and then $1/27000$ in both cases. Absolute provision falls a thousandfold under rivalry and not at all without it. "Large groups get less" needs rivalry; "large groups fall further short of what they should get" does not.

## Watch out

- **You might think** Olson proved that larger groups provide *less*. Actually the absolute claim needs fixed shares of a fixed value (rivalry). Without rivalry the largest stakeholder provides the same amount however big the group gets; only the gap to $G^*$ grows (Example 2). This is the hypothesis people drop.
- **You might think** the member who pays is the one who does best. Actually under power benefits the provider keeps only $(1-\beta)$ of his slice, and any member with share above $(1-\beta)s_1$ out-earns him.
- **You might think** selective incentives solve the latent group's problem. Actually they presuppose an organization that controls the private good. If a rival sells the same insurance at cost $\kappa$ without the dues, members defect and the lobbying margin $n(b - \kappa)$ unravels unless membership is compelled.

## One-liner

> When a fixed benefit is split, the biggest stakeholder provides alone, stops where his own slice of the marginal benefit equals the cost, and is exploited by the small; equal large groups provide almost nothing unless private rewards pay the dues.

## Problems

**P1 (🟢)** *(Formal.)* A trade association values lobbying $G$ at $V(G) = 12\ln(1+G)$; one unit of lobbying costs 1. Four firms hold shares 0.5, 0.2, 0.2, 0.1.

(a) Find the equilibrium $G$, the efficient $G^*$ and their ratio. Show that no firm other than the largest wants to add a unit.
(b) Now let the association have $n$ firms with equal shares. For which $n$ is the group privileged? Find $G$ at $n = 4$ and at $n = 12$.

**P2 (🟡)** *(Formal.)* $V(G) = 8\,G^{3/4}$, three members with shares 0.5, 0.3, 0.2.

(a) Find $\hat G$, $G^*$ and the ratio, and check that members 2 and 3 do not contribute.
(b) Compute each member's net payoff, and the share above which a small member out-earns the provider.
(c) Prove that in the general model of Proposition 1(ii), with any strictly concave $g$ and $g(0) = 0$, the provider's net payoff is strictly positive.

**P3 (🔴, optional)** *(Formal (a) · Exegetical (b).)* An invented memo to a river-basin council: "Forty towns will never fund the cleanup lobby; four towns would. Olson proved that large groups fail."

(a) Lobbying $G$ costs 1 per unit. Under reading R, the basin's total benefit is $24\ln(1+G)$, split equally among the towns. Under reading N, each town values $6\ln(1+G)$, however many towns there are. For 4 and for 40 towns, find the equilibrium $G$ and the ratio $G/G^*$ under each reading.
(b) In 100 words or fewer: which reading does the memo assume, what is Hardin's $k$ for 40 towns under reading R, and which claim of Olson's survives under both readings?

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) $V'(G) = 12/(1+G)$. The largest firm stops where $0.5 \cdot 12/(1+G) = 1$: **$G = 5$**. Efficiency: $12/(1+G^*) = 1$, **$G^* = 11$**, ratio **$5/11 \approx 0.45$**. At $G = 5$, the 0.2 firms' marginal benefit is $0.2 \cdot 12/6 = 0.4 < 1$ and the 0.1 firm's is $0.2 < 1$, so no one else adds (Proposition 1, step 1; a grid search over each firm's deviation confirms it).

(b) Each firm's marginal benefit at $G = 0$ is $12/n$. The group is privileged iff $12/n > 1$, that is **$n \le 11$**. At $n = 4$: $3/(1+G) = 1$, **$G = 2$**, ratio $2/11$, and any split of 2 among the four is an equilibrium. At $n = 12$: $12/n = 1$, so nobody gains from the first unit and **$G = 0$**. Unlike power benefits, $\ln(1+G)$ has a finite marginal benefit at zero, so equal groups of 12 or more are not privileged at all.

**Wrong turns:** Setting the *group's* marginal benefit equal to 1 for the equilibrium; that gives $G^*$. In (b), answering $n < 12$ but treating $n = 12$ as providing a little: at exactly 1 the first unit is not worth buying.

---

**P2** *(Formal.)*

(a) $\beta = 3/4$, $a = 8$. $\hat G = (\tfrac34 \cdot 0.5 \cdot 8)^4 = 3^4 = 81$; $G^* = 6^4 = 1296$; ratio $1/16 = 0.5^4$. $V'(81) = 6 \cdot 81^{-1/4} = 2$, so members 2 and 3 have marginal benefits 0.6 and 0.4, both below 1.

(b) $V(81) = 8 \cdot 27 = 216$. Member 1 nets $108 - 81 = 27$, which is $(1 - \tfrac34)(0.5)(216)$. Members 2 and 3 net **64.8** and **43.2**. A small member out-earns the provider iff $s_j > (1-\beta)s_1 = 1/8$.

(c) Strict concavity with $g(0) = 0$ gives $g(\hat G) > \hat G\,g'(\hat G)$ for $\hat G > 0$ (the chord from the origin lies above the tangent slope). Multiply by $s_1 a$: $s_1 a g(\hat G) > \hat G \cdot s_1 a g'(\hat G) = \hat G$, using the first-order condition. So member 1's net payoff $s_1 a g(\hat G) - \hat G$ is positive: the privileged member really is better off providing. ∎

**Wrong turns:** In (b), concluding the provider is worst off; he out-earns any member with share below $1/8$. In (c), proving only that the first unit pays, which shows $\hat G > 0$ but not that the whole purchase pays.

---

**P3** *(Formal (a) · Exegetical (b), strict.)*

(a) Reading R, $n = 4$: $(24/4)/(1+G) = 1$, **$G = 5$**; $G^* = 23$; ratio $5/23$. Reading R, $n = 40$: each town's marginal benefit at zero is $24/40 = 0.6 < 1$, so **$G = 0$**. Reading N: the provider stops where $6/(1+G) = 1$, **$G = 5$** at both sizes; $G^* = 6n - 1$, so the ratio is $5/23$ at 4 towns and **$5/239$** at 40. (Grid checks confirm no town gains by deviating in any case.)

**Must hit, strict (b):**

- The memo assumes reading R: a fixed benefit divided among the towns (rivalry), which is what makes adding towns shrink each one's stake.
- Under R with 40 towns, two towns acting together have joint marginal benefit $1.2 > 1$ at zero, one alone has 0.6, so **$k = 2$**: latency is about $k$, not $n$ (Hardin).
- What survives both readings is the efficiency claim: $G/G^*$ falls as the group grows. Absolute provision falls only under R.

**Wrong turns:** Saying the memo is simply wrong: under its own reading it is right about one-town provision. Taking $k$ to be 40 because all towns benefit.

</details>

## Flashback

**From Lesson [2.6](02-06-electoral-rules-compared-formally.md) (Electoral rules compared formally):** *(Formal.)* Five win-motivated candidates each take position Left or Right, and 30 percent of voters prefer Left. Each voter ranks the candidates at her own position above the others, breaking ties at random. The rule is "vote for $k$": each voter gives one point to each of her top $k$ candidates, with $1 \le k \le 4$. Start from all five at Right.

(a) For $k = 1$ and for $k = 2$, find the score of a lone candidate who moves to Left and the score of each candidate left at Right. Does the move pay?
(b) State the condition on $k$ under which all five at Right is an equilibrium, and find the smallest $k$ that meets it.

<details>
<summary>Solution</summary>

(a) The deviant is first for Left voters and last for Right voters, so he scores **0.3** under any $k \le 4$. With $k = 1$, the Right voters' 0.7 points split four ways: **0.175** each. The deviant beats all four and wins outright, so the move pays. With $k = 2$, each Right candidate gets a quarter of the Right voters' two votes, $2(0.7)/4 = 0.35$, plus a quarter of the Left voters' second votes, $0.3/4 = 0.075$: **0.425** each. The deviant loses to all four, so the move does not pay.

(b) Vote-for-$k$ gives score 1 to the top $k$ places and 0 to the rest, so with $K = 5$ candidates the average score is $S^* = k/5$. With Left share $q = 0.3$, all at Right is an equilibrium iff $q \le S^*$, that is $0.3 \le k/5$, so $k \ge 1.5$. The smallest is **$k = 2$**. The check against (a): each rival's score is $(KS^* - q)/(K-1) = (2 - 0.3)/4 = 0.425$.

**Wrong turns:** Forgetting that Left voters spend their second vote on a Right candidate, which gives each rival 0.35. The verdict happens to survive here, but the scores then add up to 1.7, not the 2 points each voter hands out. Comparing the deviant's 0.3 with the Right candidates' combined total; he wins only by beating each rival. Reading more votes per voter as a stronger pull outward: raising $k$ raises $S^*$, so it pulls candidates together.

</details>

## Connections

- **Backward:** [3.1](03-01-free-riding-and-threshold-games.md) solved threshold games with an exogenous threshold; Hardin's $k$ is that threshold, generated by the shares. The contributor set and the two-donor version of "exploitation of the great by the small" are [`public-economics` 1.2](../../public-economics/lessons/01-02-voluntary-provision-and-crowding-out.md)'s; Nash underprovision is [`grad-micro` 6.4](../../grad-micro/lessons/06-04-public-goods.md)'s.
- **Forward:** [3.3](03-03-the-commons-and-common-pool-resources.md) asks whether repetition, rather than a dominant member or a private reward, can sustain cooperation. [4.4](04-04-regulatory-capture.md) turns concentrated benefits and diffuse costs into a theory of who regulation serves, and [4.3](04-03-lobbying-protection-for-sale.md) takes which sectors are organized as given; Olson is the account of why.
- **Sideways:** alliance burden-sharing in [`conflict-and-bargaining`](../../conflict-and-bargaining/syllabus.md) 5.3 and hegemonic stability in [`international-relations`](../../international-relations/syllabus.md) 5.3 cite this model. In [`social-theory` 2.2](../../social-theory/lessons/02-02-class-class-consciousness-and-ideology.md) it is the objection to the step from class interest to class action.
