# Political Economy · Lesson 3.4: Constitutions and the choice of rules

> ⏱ ~15 min · Module 3: Collective action and the choice of rules · Builds on: [3.3 The commons](03-03-the-commons-and-common-pool-resources.md), [1.2 Turnout and the paradox of voting](01-02-turnout-and-the-paradox-of-voting.md) · Unlocks: [3.5 Agenda setters and veto players](03-05-agenda-setters-and-veto-players.md)

## Why this matters

Every lesson so far took the decision rule as given: majority in a legislature, plurality in a district. But someone chose it. Constitutions ask two-thirds for amendments, unanimity for some treaties, a simple majority for budgets. Is there a principled way to choose the threshold? Two answers come from the 1960s. Buchanan and Tullock treat it as a cost-minimization problem, and in their account majority rule has no special place. Rae and Taylor ask which rule gives a voter the best chance of getting her way, and the answer is exactly majority rule. This lesson derives both and finds the assumption that separates them.

## The idea

Picture writing the rules for a club before you know what will come up. If a single member could impose anything on everyone, you would expect to be on the receiving end of decisions you hate. That is an *external cost*. If everyone must agree, nothing is imposed on you, but every decision becomes a long haggle with holdouts. That is a *decision cost*. One cost falls as the required share rises and the other climbs, so somewhere in between is a cheapest threshold. Nothing makes it one-half.

Now look at it differently. You don't know whether you will favour or oppose the next proposal, and you care about both kinds of mistake equally: being outvoted into a change you oppose, and being blocked from one you want. A high threshold protects you from the first and exposes you to the second. Majority rule balances them exactly, and the count below shows it is the best rule for you.

## The model

**Players and timing.** A committee of $n$ members will face a stream of future proposals, each to be voted on against the status quo. At the [constitutional stage](../reference.md#constitutional-stage), *before* any proposal is known, the members choose a rule. The rule is a threshold $k \in \{1, \dots, n\}$: a proposal passes if and only if at least $k$ members vote for it, and otherwise the status quo stands. As a fraction, $q = k/n$. Members vote sincerely at the later operating stage.

**Buchanan–Tullock** (James Buchanan and Gordon Tullock, *The Calculus of Consent: Logical Foundations of Constitutional Democracy*, 1962). Treat $q$ as continuous. A member expects:

- an **external cost** $E(q)$ from decisions passed against her interest, decreasing in $q$, with $E(1) = 0$ because under unanimity she can block anything;
- a **decision cost** $D(q)$, the time and bargaining needed to assemble the required agreement, increasing and steep near $q = 1$ where single holdouts can extract concessions.

At the constitutional stage she does not know where she will stand on future issues, so she minimizes expected cost, the [Buchanan–Tullock calculus](../reference.md#buchanan-tullock-calculus):

$$\min_{q \in [0,1]} \; C(q) = E(q) + D(q), \qquad -E'(q^*) = D'(q^*) \ \text{ at an interior optimum.}$$

*In words:* raise the required majority until the external cost it saves at the margin equals the decision cost it adds. If $C$ is convex the first-order condition picks a unique $q^*$. Scale the stakes up, $E = \alpha e(q)$ with $e' < 0$, and implicit differentiation gives $dq^*/d\alpha = -e'(q^*)/C''(q^*) > 0$: weightier issues deserve higher thresholds. That is Buchanan and Tullock's case for unanimity or supermajorities where potential external costs are high. Their point is that $q = 1/2$ is one point on the axis with no special status. They also argued that because members are uncertain about their future positions, the constitution itself should be chosen unanimously, even if day-to-day rules are not.

**Rae–Taylor.** Douglas Rae ("Decision-Rules and Individual Values in Constitutional Choice", *American Political Science Review*, 1969) set up a voter who cares only about getting her way, and Michael Taylor ("Proof of a theorem on majority rule", *Behavioral Science*, 1969) proved the general result. Rae's assumptions, all of which do work below:

1. **Equiprobability.** She favours each future proposal with probability $\tfrac12$; so does each other member.
2. **Independence.** All $n$ members' positions are independent.
3. **Equal intensity.** Being outvoted into a change she opposes and being blocked from one she wants are equally bad.
4. **Sincere voting, no coalitions or side payments.**

Let $S$ be the number of *other* members voting yes, so $S \sim \operatorname{Bin}(n-1, \tfrac12)$, and let $P_k$ be the probability that the outcome matches her preference under threshold $k$.

**Theorem ([Rae–Taylor](../reference.md#rae-taylor-theorem)).** Under 1–4,

$$P_k = \tfrac12\big(1 + \Pr[S = k-1]\big),$$

which is maximized uniquely at $k = (n+1)/2$ when $n$ is odd, and at $k = n/2$ and $k = n/2 + 1$ (tied) when $n$ is even.

*In words:* every rule gets her her way half the time plus half the chance she is pivotal, and simple majority is the rule that makes her pivotal most often.

*Proof.*

1. If she favours the proposal (probability $\tfrac12$) she votes yes, and it passes, as she wants, iff $S \ge k - 1$. If she opposes it, she votes no, and it fails, as she wants, iff $S \le k - 1$. Independence lets us use the same distribution of $S$ in both cases.
2. So $P_k = \tfrac12 \Pr[S \ge k-1] + \tfrac12 \Pr[S \le k-1]$. The two events cover every value of $S$ and overlap only at $S = k-1$, so their probabilities sum to $1 + \Pr[S = k-1]$.
3. $\Pr[S = j] = \binom{n-1}{j} 2^{-(n-1)}$, and $\Pr[S = j+1]/\Pr[S = j] = (n-1-j)/(j+1)$, which exceeds 1 iff $j < (n-2)/2$. So the binomial weights rise and then fall. For $n$ odd the unique peak is at $j = (n-1)/2$; for $n$ even the ratio equals 1 at $j = (n-2)/2$, so $j = (n-2)/2$ and $j = n/2$ tie.
4. Set $j = k - 1$. ∎

The event $S = k-1$ is exactly the event that her vote decides the outcome, so the gain over a coin flip is her [pivot probability](../reference.md#pivot-probability) from [1.2](01-02-turnout-and-the-paradox-of-voting.md). For $n = 9$: majority ($k = 5$) gives $P_5 = 163/256 \approx 0.637$; a two-thirds rule ($k = 7$) gives $71/128 \approx 0.555$; unanimity gives $257/512 \approx 0.502$, barely better than a coin. (All values checked by enumerating every yes/no profile.)

**Supermajority and status quo.** Any $k > (n+1)/2$ treats change and the status quo unequally: a blocking minority of $n - k + 1$ keeps the status quo. In [`social-choice` 1.2](../../social-choice/lessons/01-02-mays-theorem.md), May's theorem shows such rules fail exactly one of its conditions, neutrality. That is [status-quo bias](../reference.md#status-quo-bias) in the precise sense: the rule favours whatever happens to be in place. In Buchanan–Tullock terms it is the price of low external costs. In Rae's terms it is a deliberate tilt between the two errors, which is worth having only when they are not equally bad (Example 2).

**Where the argument is weakest.** Rae–Taylor's critics attack independence and equiprobability. Real committees have blocs and parties, so positions are correlated. A member of a permanent minority is almost never pivotal under majority rule, and for her a supermajority is strictly better (P3). The theorem then survives only as a claim about a voter who does not know which bloc she will be in. Equal intensity is the second target. Drop it and the optimal threshold moves to wherever the ratio of the two losses puts it (Example 2), which is Buchanan and Tullock's conclusion. Their own model has a soft spot as well: $E$ and $D$ are posited rather than derived, and logrolling and side payments, which their book takes seriously, change both curves.

## Picture

![Expected cost against the required fraction q from 0 to 1. The red external-cost curve 120 times (1 minus q) squared falls from 120 to 0. The blue decision-cost curve 40 q cubed rises from 0 to 40. The black total has its minimum, marked in green, at q equal to 0.732 with total 24.3; at simple majority, q equal to one half, the total is 35.](assets/03-04-fig1.svg)

The total is minimized well above one-half because the external-cost curve is still steep there, falling faster than decision costs rise.

## Worked examples

**Example 1 (clean): a Buchanan–Tullock optimum.** Take $E(q) = 120(1-q)^2$ and $D(q) = 40q^3$. At $q = \tfrac12$ the marginal external saving is $-E'(\tfrac12) = 240 \cdot \tfrac12 = 120$, while the marginal decision cost is $D'(\tfrac12) = 120 \cdot \tfrac14 = 30$: raise $q$. The first-order condition is

$$240(1-q) = 120q^2 \iff q^2 + 2q - 2 = 0 \iff q^* = \sqrt{3} - 1 \approx 0.732.$$

$C'' = 240 + 240q > 0$, so this is the global minimum: $E = 8.62$, $D = 15.69$, $C = 24.31$, against $C = 35$ at simple majority and $40$ at unanimity (a grid search over $[0,1]$ agrees). In words: with these costs, a constitution asks for roughly a three-quarters majority.

**Example 2 (the hypothesis bites): unequal stakes.** Keep Rae's assumptions 1, 2 and 4 but drop equal intensity. Being outvoted into a change she opposes costs her $L_A$; being blocked from one she wants costs $L_B$. Her expected loss is

$$\Lambda_k = \tfrac12\big(L_A \Pr[S \ge k] + L_B \Pr[S \le k-2]\big).$$

(She opposes and $S \ge k$ others pass it anyway; or she favours and even with her vote fewer than $k$ say yes.) Raising $k$ by one changes the loss by $\tfrac12\big(L_B \Pr[S = k-1] - L_A \Pr[S = k]\big)$. Since $\Pr[S=k]/\Pr[S=k-1] = (n-k)/k$, raising $k$ helps iff

$$k < n\lambda, \qquad \lambda = \frac{L_A}{L_A + L_B}.$$

So the optimal threshold is the smallest integer $k \ge n\lambda$, and the optimal *fraction* is about $\lambda$. Equal stakes give $\lambda = \tfrac12$ and majority rule, as before. With $n = 9$, $L_A = 3$, $L_B = 1$: $\lambda = 3/4$, $n\lambda = 6.75$, so $k^* = 7$. Expected loss falls from $93/128 \approx 0.727$ under majority to $123/256 \approx 0.480$. Her chance of getting her way *falls* (0.637 to 0.555): the supermajority buys fewer costly errors with more cheap ones. In words: a veiled voter who fears imposition three times as much as blockage wants a two-thirds-plus rule. This is Buchanan and Tullock's conclusion, recovered inside Rae's model.

## Watch out

- **You might think** Buchanan and Tullock proved that supermajorities are optimal. Actually they proved that the optimum depends on the shapes of $E$ and $D$, which differ by issue. Their claim is negative: majority rule has no privileged position on the cost axis.
- **You might think** Rae–Taylor shows majority rule is best for every member. Actually it is best for a voter who is equally likely to favour or oppose each proposal and whose position is independent of everyone else's. Drop independence and a known member of a standing minority does better under a supermajority (P3). This is the hypothesis people drop.
- **You might think** a supermajority is the neutral, "more consensual" choice. Actually it privileges whatever the status quo is, and May's theorem says neutrality is exactly what it gives up. Who sets the reversion point then matters a great deal, which is [3.5](03-05-agenda-setters-and-veto-players.md)'s subject.

## One-liner

> Choose the threshold where the external cost saved equals the decision cost added (Buchanan–Tullock); for a veiled voter who weighs both errors equally and votes independently, that threshold is simple majority, because it makes her pivotal most often (Rae–Taylor).

## Problems

**P1 (🟢)** *(Formal.)* A constitutional convention faces external costs $E(q) = a(1-q)$ and decision costs $D(q) = bq^3$, with $a, b > 0$ and $q \in [0,1]$ the required fraction.

(a) With $a = 27$, $b = 25$, find the cost-minimizing $q^*$ and compare total cost with simple majority and unanimity.
(b) Holding $a = 27$, what $b$ makes simple majority optimal?
(c) Holding $b = 25$, for which $a$ is unanimity optimal?

**P2 (🟡)** *(Formal.)* Rae's setting, all four assumptions.

(a) For $n = 5$, compute $P_k$ for $k = 1, \dots, 5$ from the distribution of $S$, and confirm the maximizer.
(b) Now keep independence, keep the others at probability $\tfrac12$, but let the voter favour each proposal with probability $\pi \in (0,1)$. Prove that raising the threshold from $k$ to $k+1$ raises her chance of getting her way if and only if $k < n(1-\pi)$. Find the optimal $k$ and her probability of getting her way for $n = 9$, $\pi = 0.7$.

**P3 (🔴, optional)** *(Exegetical (a) · Formal (b).)* An invented memo to a nine-member water board: "We should keep simple majority. The Rae–Taylor theorem proves that majority rule maximizes every member's chance of getting her way." The board has two stable blocs of 5 and 4. On each proposal, each bloc's position is a fair coin flip, independent across blocs, and members always vote with their bloc.

(a) Name the hypotheses of the theorem the memo applies where they fail, and the word in the memo that overstates it. Three sentences or fewer.
(b) Compute the probability of getting her way under $k = 5$ and under $k = 9$ for a majority-bloc member, a minority-bloc member, and a member who does not yet know her bloc (5/9 chance of the larger one).

<details>
<summary>Solutions</summary>

**P1** *(Formal, strict.)*

(a) $C(q) = 27(1-q) + 25q^3$, $C'(q) = -27 + 75q^2$, $C'' = 150q > 0$ on $(0,1]$. So $q^* = \sqrt{27/75} = \sqrt{0.36} = 0.6$. Costs: $C(0.6) = 27(0.4) + 25(0.216) = 10.8 + 5.4 = 16.2$; $C(\tfrac12) = 13.5 + 3.125 = 16.625$; $C(1) = 25$. A 60 percent rule beats simple majority narrowly and unanimity by a lot.

(b) In general $q^* = \sqrt{a/(3b)}$ when that is at most 1. Setting it to $\tfrac12$: $a/(3b) = \tfrac14$, so $b = 4a/3 = 36$.

(c) $C'(q) = -a + 75q^2 < 0$ on all of $[0,1)$ iff $a \ge 75$; then the minimum is at the corner $q = 1$. Unanimity is optimal iff $a \ge 3b = 75$.

**Wrong turns:** Setting $E(q) = D(q)$, the crossing point, instead of equating marginal costs. Forgetting the corner in (c): with linear external costs the first-order condition has no interior solution once $a \ge 3b$.

---

**P2** *(Formal, strict.)*

(a) $S \sim \operatorname{Bin}(4, \tfrac12)$: $\Pr[S = 0, 1, 2, 3, 4] = \tfrac{1}{16}, \tfrac{4}{16}, \tfrac{6}{16}, \tfrac{4}{16}, \tfrac{1}{16}$. With $P_k = \tfrac12(1 + \Pr[S = k-1])$:

| $k$ | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| $P_k$ | 17/32 | 5/8 | 11/16 | 5/8 | 17/32 |

Majority ($k = 3$) is the unique maximizer: she gets her way in 22 of the 32 equally likely profiles.

(b) As in the proof, $P_k = \pi \Pr[S \ge k-1] + (1-\pi)\Pr[S \le k-1]$. Raising $k$ to $k+1$ removes the case $S = k-1$ from the first event and adds $S = k$ to the second:

$$P_{k+1} - P_k = (1-\pi)\Pr[S = k] - \pi \Pr[S = k-1].$$

Since $\Pr[S = k]/\Pr[S = k-1] = \binom{n-1}{k}/\binom{n-1}{k-1} = (n-k)/k$, the difference is positive iff $(1-\pi)(n-k) > \pi k$, i.e. iff $k < n(1-\pi)$. ∎ So $P_k$ rises while $k < n(1-\pi)$ and falls after, and the optimum is the smallest integer $k \ge n(1-\pi)$. For $n = 9$, $\pi = 0.7$: $n(1-\pi) = 2.7$, so $k^* = 3$, with $P_3 = 23/32 \approx 0.719$ (majority gives $163/256 \approx 0.637$). A voter who expects to favour most proposals wants change to be easy.

**Wrong turns:** Using $\operatorname{Bin}(n, \tfrac12)$ for $S$, which counts her own vote twice. Assuming the optimum is still majority because "the others are still fair coins": her own prior enters the weights on the two events.

---

**P3** *(Exegetical (a) · Formal (b).)*

**Must hit, strict (a):**

- Independence fails: members vote in blocs, so positions are perfectly correlated within a bloc.
- The theorem is about a voter equally likely to be on either side and uncertain of her position; a member who *knows* she is in the minority is not that voter.
- "Every" overstates it: the result is about one veiled voter's ex ante chance, not each identified member's.

(b) Under $k = 5$, a proposal passes iff the 5-bloc says yes. A majority-bloc member always gets her way: 1. A minority-bloc member gets her way iff the blocs agree: $\tfrac12$. Not knowing her bloc: $\tfrac59 \cdot 1 + \tfrac49 \cdot \tfrac12 = \tfrac79 \approx 0.778$.

Under $k = 9$, a proposal passes iff both blocs say yes (probability $\tfrac14$). A member of either bloc gets her way if both say yes ($\tfrac14$) or her own bloc says no ($\tfrac12$, and then it fails): $\tfrac34$. Not knowing her bloc: $\tfrac34$.

So the minority member prefers unanimity ($\tfrac34 > \tfrac12$), the majority member prefers majority, and the veiled member still prefers majority ($\tfrac79 > \tfrac34$).

**Wrong turns:** Concluding from (b) that majority rule is refuted. It still wins behind the veil here; what fails is the memo's "every member". Treating the board as nine independent coins and quoting $P_5 = 163/256$.

</details>

## Flashback

**From Lesson [3.2](03-02-olsons-logic-of-collective-action.md) (Olson's logic of collective action):** *(Formal (a)–(b) · Exegetical (c).)* An invented memo to a county roads office: "Ridge Road has three owners: two farms with 40 percent of the frontage each, and a cabin with 20 percent. Olson's model says the largest owner repairs the road alone, but here there is no single largest owner. Each farm will wait for the other, and nothing will be done unless the county pays." Repairs $G$ cost 1 per unit; the owners together value them at $V(G) = 15\ln(1+G)$, split by frontage share; contributions are simultaneous. (a) Find every Nash equilibrium and the ratio $G/G^*$. (b) Give each owner's net payoff when the farms split the cost equally, and when one farm pays it all. (c) In three sentences or fewer: which hypothesis of Proposition 1 fails here, and what does its failure change and not change?

<details>
<summary>Solution</summary>

(a) At total provision $G$, a farm's marginal benefit is $0.4 \cdot \tfrac{15}{1+G} = \tfrac{6}{1+G}$ and the cabin's is $\tfrac{3}{1+G}$. At $G = 0$ either farm gains from the first unit ($6 > 1$), so $G = 0$ is not an equilibrium. If only the cabin contributed, it would stop at $G = 2$, where a farm's marginal benefit is $2 > 1$: not an equilibrium. So some farm contributes, and its condition $\tfrac{6}{1+G} = 1$ gives **$G = 5$**. There the cabin's marginal benefit is $0.5 < 1$, so it gives nothing. The equilibria are **every $(z_1, z_2, 0)$ with $z_1 + z_2 = 5$, $z_1, z_2 \ge 0$**: a continuum. Efficiency: $\tfrac{15}{1+G^*} = 1$, $G^* = 14$, ratio **$5/14 \approx 0.36$**. (A grid search over all profiles in steps of 0.5 finds exactly these splits.)

(b) $V(5) = 15\ln 6 \approx 26.88$, so each farm's gross share is $6\ln 6 \approx 10.75$ and the cabin's $3\ln 6 \approx 5.38$.

- Equal split (2.5 each): farms $8.25$ each, cabin $5.38$.
- One farm pays 5: the payer $5.75$, the other farm $10.75$, the cabin $5.38$.

Total surplus is $21.88$ in every equilibrium, against $15\ln 15 - 14 \approx 26.62$ at $G^*$. The split decides only who is exploited.

**Wrong turns:** Letting each farm buy up to its own first-order condition and adding the two, $G = 10$: each farm stops where $\tfrac{6}{1+G} = 1$ at the *total* $G$. Setting the group's marginal benefit equal to 1, which gives $G^* = 14$, not the equilibrium.

**Must hit, strict (c):**

- The failed hypothesis is a strictly largest share, $s_1 > s_j$ for every $j \ne 1$. Step 2 of the proof (a second contributor would leave member 1 wanting more) no longer bites between two equal farms.
- Not changed: $G$ is still pinned at 5 by the largest share's first-order condition, the smaller cabin still free rides, and provision still falls short of $G^*$. The memo's "nothing will be done" is false, because $G = 0$ is not an equilibrium.
- Changed: who pays is indeterminate. The farms' quarrel is over the split, which fixes who is exploited, not over whether the road is repaired.

**Model answer (c):** Proposition 1 assumes one member's share strictly exceeds every other's; here two farms tie. The tie leaves provision exactly where the single-provider logic puts it, $G = 5$, because any contributing farm stops where its 40 percent of the marginal benefit equals the cost, and neither farm can leave the road unrepaired when the first unit is worth 6 to it. What the tie removes is a unique payer: any split of the 5 units is an equilibrium, so "waiting for the other" is a fight over who carries the cost, not a threat to the repair.

</details>

## Connections

- **Backward:** Rae's gain over a coin flip is the [pivot probability](../reference.md#pivot-probability) of [1.2](01-02-turnout-and-the-paradox-of-voting.md), and binomial pivotality is again what decides the answer. May's theorem ([`social-choice` 1.2](../../social-choice/lessons/01-02-mays-theorem.md)) characterizes majority rule by axioms; Rae–Taylor reaches it from a single voter's interest, and both locate supermajority's cost in neutrality. Decision costs that climb with the number who must agree are [3.2](03-02-olsons-logic-of-collective-action.md)'s organizing costs in another setting.
- **Forward:** a supermajority hands power to whoever fixes the status quo. [3.5](03-05-agenda-setters-and-veto-players.md) computes how much, with reversion points, veto pivots and the gridlock interval. [`constitutional-law`](../../constitutional-law/syllabus.md) cites this lesson for constitutional decision thresholds.
- **Sideways:** the constitutional stage under uncertainty about one's future position is a self-interested cousin of Rawls's veil of ignorance ([`political-philosophy` 2.2](../../political-philosophy/lessons/02-02-rawls-the-original-position.md)). Whether majority rule is *legitimate*, as opposed to individually advantageous, is [`political-philosophy` 5.1](../../political-philosophy/lessons/05-01-why-democracy.md)–[5.2](../../political-philosophy/lessons/05-02-majority-rule-vs-rights-judicial-review.md)'s question. The Condorcet jury theorem ([`social-choice` 5.1](../../social-choice/lessons/05-01-the-condorcet-jury-theorem.md)) gives majority rule an epistemic defence that rests on the same independence assumption.
