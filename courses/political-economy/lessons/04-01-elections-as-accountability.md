# Political Economy · Lesson 4.1: Elections as accountability

> ⏱ ~15 min · Module 4: Accountability, interests and rents · Builds on: [3.4 Constitutions and the choice of rules](03-04-constitutions-and-the-choice-of-rules.md), [3.3 The commons and common-pool resources](03-03-the-commons-and-common-pool-resources.md) · Unlocks: [4.2 Career concerns and pandering](04-02-career-concerns-and-pandering.md), [4.6 Political budget cycles](04-06-political-budget-cycles.md)

## Why this matters

Module 2 treated elections as a choice between platforms announced in advance. Most of what governments do was never in a platform: they spend, appoint and enforce for years between elections, mostly out of sight. Voters cannot write a contract for that, as a principal does in [`grad-micro` 5.4](../../grad-micro/lessons/05-04-moral-hazard-principal-agent.md). They hold one blunt instrument: keep the incumbent or fire her. This lesson asks how much that instrument, [electoral accountability](../reference.md#electoral-accountability), can buy. The answer is a number, the [re-election cutoff](../reference.md#retrospective-cutoff). It also exposes a tension: the same vote is asked both to punish bad behaviour and to pick good people.

## The idea

Think of office as a job with no bonus, only the threat of dismissal. An official who could pocket a large sum this term will refrain only if keeping the job is worth more than the haul. So the voter's demand must be modest enough that staying honest-ish beats grabbing and leaving. Patient officials and valuable offices let the voter demand more. That is **sanctioning**, the moral-hazard view of Barro and Ferejohn ([sanctioning and selection](../reference.md#sanctioning-and-selection)).

Now suppose politicians differ: some share the voter's goals, some are in it for themselves. Then the vote is a bet on who the incumbent *is*, not a reward for what she did. Fearon argued that this changes the logic. A voter choosing the likelier good type cannot also promise to enforce a standard she would rather not enforce. That is **selection**. The two can pull against each other: the better the incentives, the more bad types behave well, and the less a good record tells the voter.

## The model

**Sanctioning (Robert Barro, "The Control of Politicians," *Public Choice*, 1973; John Ferejohn, "Incumbent Performance and Electoral Control," *Public Choice*, 1986).** The version here is Barro's, with rents observed.

- *Players.* One representative voter and a pool of identical politicians.
- *Timing.* Each term $t = 0, 1, 2, \dots$ the incumbent chooses a rent $r_t \in [0, \bar R]$, where $\bar R$ is the most that can be taken in a term. The voter observes $r_t$, then retains the incumbent or replaces her with a challenger from the pool. A removed politician never returns.
- *Payoffs.* The incumbent gets $r_t + W$ per term in office, where $W$ is the value of office itself (pay, status), and 0 out of office, discounting at $\delta \in (0,1)$. The voter's per-term payoff falls in $r_t$.
- *Voter strategy.* A **retrospective cutoff**: retain if and only if $r_t \le \bar r$.

Because all politicians are identical, at election time the voter is indifferent between incumbent and challenger. Any cutoff is therefore a best response, and she picks the one that minimizes rents.

**Proposition 1 (the cutoff).** The lowest cutoff the incumbent respects is

$$\bar r^* = \max\{0,\ (1-\delta)\bar R - \delta W\}.$$

Under it the incumbent takes exactly $\bar r^*$ every term and is always re-elected.

*In words:* the voter can push rents down until one term's haul plus the office equals the discounted value of staying.

*Proof.*

1. The cutoff rule is stationary, so the incumbent's problem is too. By the one-shot deviation principle ([`grad-game-theory` 3.2](../../grad-game-theory/lessons/03-02-backward-induction-subgame-perfection.md)), it suffices to compare complying forever with one deviation.
2. If she complies, any $r \le \bar r$ keeps office and her payoff rises in $r$, so she takes $\bar r$: $V_C = (\bar r + W)/(1-\delta)$.
3. If she breaches, she is removed whatever she takes, so she takes $\bar R$: $V_D = \bar R + W$.
4. She complies iff $V_C \ge V_D$, iff $\bar r \ge (1-\delta)(\bar R + W) - W = (1-\delta)\bar R - \delta W$. (Ties go to compliance.)
5. If the constraint fails, every incumbent breaches and the voter loses $\bar R$ each term. Any cutoff that satisfies it loses less, since $(1-\delta)\bar R - \delta W < \bar R$. So the voter wants the smallest such cutoff, floored at 0. ∎

**Comparative statics.** On the interior, $\partial \bar r^*/\partial \delta = -(\bar R + W)$, $\partial \bar r^*/\partial W = -\delta$, $\partial \bar r^*/\partial \bar R = 1 - \delta$. Rents vanish iff $\delta \ge \bar R/(\bar R + W)$, the [critical discount factor](../reference.md#critical-discount-factor) of this game. Patience, a valuable office and a small grab all tighten discipline, exactly as in the commons game of [3.3](03-03-the-commons-and-common-pool-resources.md).

Ferejohn's version lets the voter see only performance, which depends on effort and on a shock the incumbent sees but the voter does not. The voter sets a performance standard. The incumbent meets it when the shock makes that cheap and gives up when it does not, so some shirking survives any standard.

**Selection (James Fearon, in Przeworski, Stokes and Manin, eds., *Democracy, Accountability, and Representation*, 1999; Timothy Besley, *Principled Agents?*, 2006).** Here is a stripped-down two-period model of the kind Besley studies.

- A share $\pi$ of politicians are *congruent*: they always choose the policy that matches the state. The rest are *dissonant*: a mismatched policy gives them a private rent $r \sim U[0, \bar R]$, drawn fresh each period and seen before acting.
- The voter gets 1 when policy matches the state, 0 otherwise, and learns which happened at the end of period 1. She then retains the incumbent or elects a challenger, congruent with probability $\pi$. Office is worth $W$ per period. Period 2 is the last.

**Proposition 2.** There is a perfect Bayesian equilibrium ([`grad-game-theory` 4.4](../../grad-game-theory/lessons/04-04-perfect-bayesian-sequential-equilibrium.md)) in which the voter retains iff period-1 policy was good, and a dissonant incumbent mimics iff $r \le \delta(W + \bar R/2)$. The mimicking probability and the posterior that a retained incumbent is congruent are

$$\lambda = \min\Big\{1,\ \frac{\delta(W + \bar R/2)}{\bar R}\Big\}, \qquad \mu' = \frac{\pi}{\pi + (1-\pi)\lambda}.$$

*In words:* fear of losing office makes some bad types behave, and every one that does dilutes what a good record reveals.

*Proof.*

1. Period 2 is last, so a dissonant incumbent takes her rent and a congruent one matches the state.
2. A bad period-1 policy comes only from a dissonant type, so the posterior is $0 < \pi$: replace. A good policy gives the posterior $\mu'$ by Bayes' rule, and $\mu' \ge \pi$: retain. The retrospective rule is sequentially rational *because* it selects.
3. A dissonant incumbent who mimics gets $W + \delta(W + \bar R/2)$; one who grabs gets $r + W$. She mimics iff $r \le \delta(W + \bar R/2)$, which has probability $\lambda$. ∎

**The trade-off.** The voter's expected number of good policies is $\pi + (1-\pi)\lambda$ in period 1 and $\pi + \pi(1-\pi)(1-\lambda)$ in period 2. More discipline helps period 1 and hurts period 2, because disciplined dissonant types survive. The net effect of a unit of $\lambda$, discounting period 2 at $\delta$, is $(1-\pi)(1-\delta\pi) > 0$, so in this stripped-down model discipline wins at the margin. That is a fact about this model, not a general verdict.

**Where the argument is weakest.** Proposition 1 rests on the voter's credibility, and that rests on indifference. With identical politicians, firing costs her nothing, so she can promise anything. Once types differ, as Fearon stressed, she will retain whoever looks better, and the cutoff is set by beliefs rather than chosen for incentives. Proposition 2 survives only because "good record" and "likely good type" coincide here. A second attack is on the single voter. If voters judge by their own private benefit, an incumbent need only satisfy a bare majority, and the cutoff disciplines far less. What the models agree on is narrow: dismissal alone can cap rents, by an amount set by patience and the value of office. Whether elections *should* be judged by that is [`political-philosophy` 5.1](../../political-philosophy/lessons/05-01-why-democracy.md)'s question.

## Picture

![Incumbent's payoff against the discount factor delta, with maximum rent 9 and office value 1. A flat red line at 10 is the payoff from grabbing 9 once and being removed. A blue curve, 1 over 1 minus delta, is the payoff from complying forever at cutoff 0; it crosses the red line at delta 0.9. A green curve, 2.5 over 1 minus delta, is complying forever at cutoff 1.5; it crosses at delta 0.75.](assets/04-01-fig1.svg)

Each curve is the value of keeping the job. Where it rises above the red line, the incumbent complies. Asking for less rent shifts the curve down and the crossing right, so a stricter voter needs a more patient incumbent.

## Worked examples

**Example 1 (clean): the cutoff.** Let $\bar R = 9$, $W = 1$, $\delta = 0.75$. Then $\bar r^* = 0.25 \cdot 9 - 0.75 \cdot 1 = 1.5$. Check: complying gives $(1.5 + 1)/0.25 = 10$, grabbing gives $9 + 1 = 10$, so the constraint binds. At $\bar r = 1.499$ it fails, and every incumbent takes 9. Zero rents need $\delta \ge 9/10$, the blue crossing in the figure.

Add a term limit. In her last term the incumbent faces no election and takes $\bar R = 9$. In the term before, re-election is worth exactly $9 + 1 = 10$. That equals the stationary $V_C$ at the binding cutoff, so the cutoff is again 1.5. Backward induction from any limit gives 1.5 in every term but the last. In this model a limit costs one term of full rents and nothing earlier.

**Example 2 (the hypothesis bites): types differ.** Drop identical politicians and use Proposition 2 with $\pi = 1/2$, $\bar R = 4$, $\delta = 0.8$.

| | $W = 1$ | $W = 2$ |
|---|---|---|
| mimic threshold $\delta(W + \bar R/2)$ | 2.4 | 3.2 |
| $\lambda$ | 3/5 | 4/5 |
| $\mu'$ after a good record | 5/8 | 5/9 |
| good policies, period 1 | 4/5 | 9/10 |
| good policies, period 2 | 3/5 | 11/20 |
| total, period 2 discounted | 1.28 | 1.34 |

Raising the value of office buys discipline (period 1 up by 1/10) and costs selection (period 2 down by 1/20). The voter no longer chooses a cutoff at all. "Retain after a good record" is forced on her by Bayes' rule, and how demanding that record is depends on the game.

## Watch out

- **You might think** the voter in Proposition 1 rationally punishes rent-taking. Actually she is indifferent at the ballot box, and the threat is credible only because firing is free. This is the hypothesis people drop. Add types and she votes on beliefs instead (Example 2).
- **You might think** a higher salary is a free way to cut rents. Here $\bar r^* + W = (1-\delta)(\bar R + W)$ on the interior, which *rises* with $W$ when voters pay $W$. Rents fall by $\delta$ per unit of pay, and the pay costs a full unit.
- **You might think** a term limit unravels discipline, as finite repetition unravels cooperation in [`grad-game-theory` 3.3](../../grad-game-theory/lessons/03-03-repeated-games-finite-infinite.md). Not in this model. Re-election remains a real prize in the last term, so only that term is lost. Whether [term limits](../reference.md#term-limits) help voters overall is a separate question; [4.2](04-02-career-concerns-and-pandering.md) adds pandering to it.

## One-liner

> Dismissal can buy honesty only up to the point where keeping office is worth one term's grab, $\bar r^* = (1-\delta)\bar R - \delta W$; and once politicians differ, the same vote must also select, and discipline makes a good record less informative.

## Problems

**P1 (🟢)** *(Formal.)* An infinitely-lived incumbent faces the Barro model of this lesson with maximum rent $\bar R = 6$, office value $W = 0.5$ per term and $\delta = 0.6$.

(a) Find the voter's optimal cutoff $\bar r^*$ and check the incumbent's constraint at it.
(b) Find the smallest $\delta$ at which rents are zero.
(c) A reform raises the official salary, paid by voters, so that $W = 1.5$. Find the new cutoff, and compare rents plus salary per term before and after.

**P2 (🟡)** *(Formal.)* In the two-period selection model of Proposition 2, $\pi = 0.4$ of politicians are congruent.

(a) Suppose dissonant incumbents mimic with probability $\lambda = 1/2$. Find the posterior that an incumbent with a good record is congruent.
(b) Now derive $\lambda$ when $r \sim U[0, 5]$, $W = 1.5$, $\delta = 0.8$, and recompute the posterior.
(c) Show that retaining after a good record and replacing after a bad one is a best response for the voter for every $\lambda \in (0, 1]$, and say what a good record reveals when $\lambda = 1$.

**P3 (🔴, optional)** *(Evaluative.)* A political scientist says: "Retrospective voting is a sanctioning device. Voters set a standard and fire whoever misses it." Steelman this against Fearon's selection objection, then reply, in 150 words or fewer. State what each model assumes about politicians and which assumption your verdict turns on.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) $\bar r^* = (1-\delta)\bar R - \delta W = 0.4 \cdot 6 - 0.6 \cdot 0.5 = 2.4 - 0.3 = 2.1$. Check: complying gives $(2.1 + 0.5)/0.4 = 6.5$; grabbing gives $6 + 0.5 = 6.5$. The constraint binds, and any lower cutoff fails.

(b) Zero rents need $(1-\delta)\bar R \le \delta W$, i.e. $\delta \ge \bar R/(\bar R + W) = 6/6.5 = 12/13 \approx 0.923$.

(c) $\bar r^* = 2.4 - 0.6 \cdot 1.5 = 1.5$. Rents fall by 0.6. Rents plus salary: $2.1 + 0.5 = 2.6$ before, $1.5 + 1.5 = 3.0$ after. In general $\bar r^* + W = (1-\delta)(\bar R + W)$, which rises with $W$: each unit of pay cuts rents by only $\delta = 0.6$.

**Wrong turns:** Writing the deviation payoff as $\bar R$ without $W$: the incumbent holds office in the term she grabs. Setting the cutoff where complying *at zero rent* equals grabbing, which gives the zero-rent condition of (b), not the cutoff.

---

**P2** *(Formal.)*

(a) $\mu' = \dfrac{0.4}{0.4 + 0.6 \cdot 0.5} = \dfrac{0.4}{0.7} = \dfrac{4}{7} \approx 0.571$.

(b) Mimic iff $r \le \delta(W + \bar R/2) = 0.8(1.5 + 2.5) = 3.2$, so $\lambda = 3.2/5 = 16/25 = 0.64$. Then $\mu' = 0.4/(0.4 + 0.6 \cdot 0.64) = 0.4/0.784 = 25/49 \approx 0.510$. Check at the margin: mimicking gives $1.5 + 0.8 \cdot 4 = 4.7$, grabbing $r = 3.2$ gives $3.2 + 1.5 = 4.7$.

(c) A challenger is congruent with probability $\pi$. After a bad record the posterior is 0, below $\pi$, so replacing is optimal. After a good record, $\mu' = \pi/(\pi + (1-\pi)\lambda) \ge \pi$ because the denominator is at most 1, so retaining is optimal. At $\lambda = 1$ every type produces a good record, so $\mu' = \pi = 0.4$: the record reveals nothing and the voter is indifferent.

**Wrong turns:** Using $\pi$ itself as the posterior, forgetting that dissonant types also produce good records. In (b), using a mimic payoff without the period-2 rent $\bar R/2$ the retained dissonant type expects.

---

**P3** *(Evaluative.)*

**Must hit, any verdict:**

- State the sanctioning model: identical politicians, the voter indifferent at election time, so a cutoff is credible and set to minimize rents.
- State Fearon's point: when types differ, the vote is a choice about the future, so the voter retains the likelier good type and cannot commit to a standard for its own sake.
- Name the assumption the verdict turns on: how much politicians differ in type (or how much the voter can learn about type), against how much behaviour responds to incentives.
- Note that in models like Proposition 2 the two can coincide, so "sanctioning or selection" is not always a forced choice.

**Wrong turns:** Saying the voter in the Barro model "wants" to punish: she is indifferent. Treating Fearon as showing elections cannot discipline at all.

**Model answer, one of several:** The steelman: the sanctioning model assumes politicians are alike in type, so the vote is costless to the voter and any standard is credible; if most misconduct is opportunism by ordinary people, setting a standard is what voters can usefully do. Fearon's reply: politicians differ, so at the ballot box the voter asks who will be better next term and cannot commit to a standard beyond that. My verdict: selection describes the voter's choice, but sanctioning survives wherever a good record is evidence of good type, since then the selecting voter also rewards performance, as in Proposition 2. It turns on whether type heterogeneity is large relative to the incentive response; if most bad behaviour is responsive, the sanctioning description is nearly right.

</details>

## Flashback

**From Lesson [3.4](03-04-constitutions-and-the-choice-of-rules.md) (Constitutions and the choice of rules):** *(Formal (a) · Exegetical (b).)* A seven-member town charter commission must fix $k$, the number of yes votes an ordinance needs to replace the status quo. Rae's setting holds: each member favours each future proposal with probability $\tfrac12$, independently of the others, and votes sincerely. One member, a reformer, counts being blocked from a change she wants as twice as bad as being outvoted into a change she opposes: $L_B = 2$, $L_A = 1$. (a) Find the $k$ that minimizes her expected loss. Compare her expected loss, and her probability of getting her way, under that $k$ and under simple majority ($k = 4$). (b) A colleague objects: "Rae–Taylor proves majority rule maximizes each member's chance of getting her way, so a threshold below majority is in no one's interest." In two sentences, say what the objection gets right and which hypothesis of the theorem it carries over without warrant.

<details>
<summary>Solution</summary>

(a) Let $S$ be the number of the other six voting yes: $S \sim \operatorname{Bin}(6, \tfrac12)$, with $\Pr[S = 0, \dots, 6] = 1, 6, 15, 20, 15, 6, 1$ over 64. Her expected loss is

$$\Lambda_k = \tfrac12\big(L_A \Pr[S \ge k] + L_B \Pr[S \le k-2]\big).$$

Raising $k$ helps iff $k < n\lambda$, with $\lambda = L_A/(L_A + L_B) = \tfrac13$ and $n\lambda = \tfrac73$, so $k^* = 3$. Directly: $\Lambda_3 - \Lambda_2 = \tfrac12\big(2 \cdot \tfrac{6}{64} - \tfrac{15}{64}\big) = -\tfrac{3}{128}$ and $\Lambda_4 - \Lambda_3 = \tfrac12\big(2 \cdot \tfrac{15}{64} - \tfrac{20}{64}\big) = \tfrac{5}{64}$.

- $k = 3$: $\Lambda_3 = \tfrac12\big(\tfrac{42}{64} + 2 \cdot \tfrac{7}{64}\big) = \tfrac{7}{16} \approx 0.438$, and $P_3 = \tfrac12\big(1 + \tfrac{15}{64}\big) = \tfrac{79}{128} \approx 0.617$.
- $k = 4$: $\Lambda_4 = \tfrac12\big(\tfrac{22}{64} + 2 \cdot \tfrac{22}{64}\big) = \tfrac{33}{64} \approx 0.516$, and $P_4 = \tfrac12\big(1 + \tfrac{20}{64}\big) = \tfrac{21}{32} \approx 0.656$.

The three-vote rule cuts her expected loss and lowers her chance of getting her way. An enumeration of all 128 equally likely profiles (her preference times the others' votes) gives the same values for every $k$.

**Wrong turns:** Concluding that a member with unequal stakes wants a supermajority: the threshold rises only when imposition ($L_A$) is the costlier error, and here blockage is. Using $\operatorname{Bin}(7, \tfrac12)$ for $S$, which counts her own vote twice.

**Must hit, strict (b):**

- Right: under Rae's assumptions simple majority does maximize her probability of getting her way ($\tfrac{21}{32} > \tfrac{79}{128}$).
- Carried over without warrant: equal intensity. Probability of getting her way is the right objective only when both errors cost the same; with $L_B \ne L_A$ she minimizes expected loss, and the optimal fraction is about $\lambda = \tfrac13$, which here means three votes of seven.

**Model answer (b):** The arithmetic of the objection holds: under Rae's assumptions majority gives her the best chance of getting her way, $\tfrac{21}{32}$ against $\tfrac{79}{128}$ under three votes. But that objective counts her two errors equally, and equal intensity is exactly the hypothesis that fails for a member who finds blockage twice as costly; minimizing her expected loss puts the threshold at three votes of seven, below a majority.

</details>

## Connections

- **Backward:** the cutoff is a [critical discount factor](../reference.md#critical-discount-factor) problem, like the commons agreement of [3.3](03-03-the-commons-and-common-pool-resources.md) and the folk theorems of [`grad-game-theory` 3.4](../../grad-game-theory/lessons/03-04-folk-theorems.md). The voter is a principal who can only fire, a stripped version of [`grad-micro` 5.4](../../grad-micro/lessons/05-04-moral-hazard-principal-agent.md); selection is adverse selection ([`grad-micro` 5.1](../../grad-micro/lessons/05-01-adverse-selection-lemons.md)).
- **Forward:** [4.2](04-02-career-concerns-and-pandering.md) lets the voter learn about competence instead of motives ([career concerns](../reference.md#career-concerns)) and shows how the desire to look good distorts policy. [4.6](04-06-political-budget-cycles.md) puts the same signalling incentive into the budget before elections.
- **Sideways:** [`political-institutions` 6.2](../../political-institutions/lessons/06-02-delegation-and-oversight.md) describes delegation and oversight; this lesson is the formal model behind its pointer to Module 4. The agency tools travel to autocracy in [`institutions-and-development`](../../institutions-and-development/syllabus.md). Whether accountability is the point of democracy is [`political-philosophy` 5.1](../../political-philosophy/lessons/05-01-why-democracy.md)'s.
