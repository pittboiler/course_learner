# Philosophy of Economics · Lesson 3.1: The Pareto principle

> ⏱ ~15 min · Module 3: Efficiency and cost-benefit analysis · Builds on: [1.1 Welfarism and preference satisfaction](01-01-welfarism-and-preference-satisfaction.md), [2.2 The behavioural challenge](02-02-the-behavioural-challenge.md), [`grad-micro` 4.4](../../grad-micro/lessons/04-04-two-welfare-theorems.md) · Unlocks: [3.2 The limits of Pareto and the compensation tests](03-02-the-limits-of-pareto-and-the-compensation-tests.md), [3.3 Cost-benefit analysis and the value of a life](03-03-cost-benefit-analysis-and-the-value-of-a-life.md)

## Why this matters

"Efficient" is the word economists use when they want to say *better* without sounding as if they are taking sides. Its home is the Pareto principle, offered as the one value judgment almost no one rejects. This lesson states the principle precisely, finds the premises inside it, and shows how little it ranks. That matters because "the market outcome is efficient, so leave it alone" runs together a theorem, a value judgment and a non sequitur, and the rest of Module 3 is the story of what economists did when the principle turned out to rank almost nothing.

## The idea

Two words, easily confused.

- A **Pareto improvement** is a *move*: from state $y$ to state $x$, someone is better off and no one is worse off.
- A state is **Pareto optimal** (efficient) when no Pareto improvement *from it* is available: you cannot help anyone without hurting someone ([Pareto optimality](../reference.md#pareto-optimality)).

The **Pareto principle** turns the first into a social ranking: if a move is a Pareto improvement, society should count the new state as better ([Pareto principle](../reference.md#pareto-principle)). It comes in two strengths. With $\succ_i$ for person $i$'s strict preference and $\succsim_i$ for weak preference:

- **Weak Pareto:** if $x \succ_i y$ for *every* $i$, then $x$ is socially better than $y$. *In words:* if everyone prefers it, it is better.
- **Strong Pareto:** if $x \succsim_i y$ for every $i$ and $x \succ_j y$ for *some* $j$, then $x$ is socially better. *In words:* if no one minds and someone gains, it is better.

Notice what the principle does not need. No one's welfare is compared with anyone else's, no utilities are added, and only each person's *ordering* is used, so any rescaling of anyone's utility numbers leaves every verdict unchanged. That is why it gets called "minimal": it seems to presuppose only that people's own good counts.

Notice also what it cannot do. If a move helps one person and hurts another, the principle is silent. Most states are therefore **Pareto-incomparable**: the ranking is **incomplete**. And a Pareto optimum can be dreadful. Amartya Sen made the point in *Collective Choice and Social Welfare* (1970): a state is optimal even if some starve while others live in luxury, as long as the starving can be helped only by taking something from the rich.

## The argument

**Why accept the Pareto principle?** The standard case, reconstructed.

1. **Welfarism.** How good a social state is depends only on how well off the individuals in it are ([welfarism](../reference.md#welfarism), from [1.1](01-01-welfarism-and-preference-satisfaction.md)). *In words:* nothing but people's welfare matters to the ranking.
2. **Preference satisfaction.** A person is better off in $x$ than in $y$ just when she prefers $x$ to $y$ ([preference-satisfaction view](../reference.md#preference-satisfaction-view)).
3. **Positive responsiveness.** If at least one person's welfare rises and no one's falls, the social state is better. *In words:* the social good never ignores a gain that costs nobody anything.

∴ **C (strong Pareto).** If at least one person prefers $x$ to $y$ and no one prefers $y$ to $x$, then $x$ is better than $y$.

Premise 3 is the least contested: given premise 1, denying it means counting someone's gain *against* a state, which few welfarists would accept. The value judgments live in premises 1 and 2.

**What the welfare theorems add.** Reloaded from [`grad-micro` 4.4](../../grad-micro/lessons/04-04-two-welfare-theorems.md), not re-proved. The **first theorem**: with locally nonsatiated preferences (and, implicitly, a market for everything that matters and no externalities), every competitive equilibrium is Pareto optimal. The **second**: with convex preferences, any Pareto optimum can be reached as a competitive equilibrium, *after* a lump-sum redistribution of endowments. Read normatively, they license a division of labour: let markets secure efficiency, and pursue distribution with lump-sum transfers. Three separate claims hide in "competitive markets are efficient":

- *Mathematical:* under these conditions, equilibrium is in the Pareto-optimal set. True, and conditional.
- *Empirical:* actual markets meet the conditions closely enough. Open, case by case.
- *Normative:* so the market outcome is good, or better than the alternatives. **Not implied** by the Pareto principle, because an optimum is better only than the states it Pareto-dominates.

**Where the argument is weakest.** Premise 2, and then premise 1. Against 2: if preferences are misinformed, adapted to deprivation, or inconsistent across frames and dates ([2.2](02-02-the-behavioural-challenge.md)), a "Pareto improvement" can make someone worse off by any measure other than her own choice, and when her choices conflict there may be no single ordering to consult. Against 1: some states differ in morally relevant ways that are not welfare. An egalitarian who thinks inequality bad in itself sees *something* worse in a gain to the rich alone. Derek Parfit's levelling-down objection is the reason most egalitarians still accept Pareto all things considered: a view on which making the rich worse off at no gain to anyone is in one respect better looks wrong. Rights theorists object more sharply, and [3.2](03-02-the-limits-of-pareto-and-the-compensation-tests.md) shows that weak Pareto collides with a minimal liberty condition (Sen's liberal paradox). The critic's charge: "minimal" means *hard to notice*, not *value-free*.

## The frontier

![Utility possibility frontier for Ann and Ben, a straight line from 10 on one axis to 10 on the other, with the status quo S at 4 and 4, a shaded triangle of Pareto improvements above and to the right of S reaching the line between F at 4 and 6 and the point 6 and 4, the equal point E at 5 and 5, and an unequal optimal point U at 9 and 1 in a region marked incomparable with S](assets/03-01-fig1.svg)

The economy of Example 1. Every point on the blue line is Pareto optimal, including U. Only the green segment is both optimal *and* a Pareto improvement on the status quo. The two unshaded quadrants (one gains, one loses) are where most real policy lives, and where the principle says nothing.

## Worked examples

**Example 1 (clean): fish and bread.** Illustrative. Ann and Ben share 10 fish and 10 loaves. Each has utility $u_i=\sqrt{x_i y_i}$ ($x_i$ fish, $y_i$ bread), the geometric mean of the two. Utility numbers are only a convenient representation; the verdicts below depend on orderings alone.

*Which states are optimal?* Interior optima need equal marginal rates of substitution, $y_A/x_A = y_B/x_B$; with equal totals that means each person holds fish and bread in equal amounts. Ann holding $(t,t)$ and Ben $(10-t,10-t)$ gives $u_A=t$, $u_B=10-t$: the frontier is $u_A+u_B=10$.

*Status quo* $S$: Ann $(8,2)$, Ben $(2,8)$, so $u_A=u_B=\sqrt{16}=4$. Not optimal: Ann's MRS is $2/8=0.25$ and Ben's is $8/2=4$, so each would trade the good he or she has more of.

| State | Ann | Ben | Utilities | Optimal? | Versus $S$ |
|---|---|---|---|---|---|
| E | (5, 5) | (5, 5) | (5, 5) | yes | both gain: weak and strong Pareto rank it above $S$ |
| F | (4, 4) | (6, 6) | (4, 6) | yes | Ann indifferent, Ben gains: strong Pareto only |
| U | (9, 9) | (1, 1) | (9, 1) | yes | Ben loses: incomparable |
| G | (2, 8) | (8, 2) | (4, 4) | no | a swap: Pareto-indifferent |

Two lessons from the table. U is efficient and has Ben at a quarter of his status-quo utility, yet the principle cannot say $S$ is better than U, or worse. And E and U, both optimal, are incomparable with each other: the principle picks a set, not a point. The optima that improve on $S$ are exactly Ann at $(t,t)$ with $4\le t\le 6$, the green segment.

**Example 2 (hard): the market from an unequal start.** Same people and preferences; now Ann owns 10 fish and 9 loaves, Ben owns 1 loaf. Set the price of bread at 1 and fish at $p$. With these utilities each person spends half her wealth $w$ on each good, so fish demand is $(w_A+w_B)/(2p)$, with $w_A=10p+9$ and $w_B=1$. Clearing the fish market, $(10p+10)/(2p)=10$, gives $p=1$. Ann's wealth is 19 and Ben's 1, so Ann consumes $(9.5, 9.5)$ and Ben $(0.5, 0.5)$: utilities $(9.5, 0.5)$.

The first theorem certifies this as Pareto optimal, and it is a Pareto improvement on the endowment ($u_A=\sqrt{90}\approx 9.49$, $u_B=0$). Everything the principle can say in its favour is true.

The second theorem says the equal optimum $(5,5)$ is reachable too: hand Ben enough of Ann's endowment, lump sum, and let the market run. Here the case strains. A lump-sum transfer must be fixed by traits people cannot alter, which the state rarely observes; real transfers run through taxes that change behaviour. Suppose, illustratively and holding prices at 1, that every unit of wealth taken from Ann delivers only 0.8 to Ben (Arthur Okun's "leaky bucket", from *Equality and Efficiency*, 1975). Equalizing wealth means $19-w=1+0.8w$, so $w=10$ and each ends with wealth 9, utilities $(4.5, 4.5)$. That state is *not* optimal (the sum is 9, inside the frontier), and the market outcome $(9.5,0.5)$ is not a Pareto improvement on it, nor it on the market outcome. Choosing between them is exactly the choice the efficiency/equity division promised we would never face, and the Pareto principle cannot make it.

## Watch out

- **You might think a Pareto optimum is a Pareto improvement on wherever we are now.** It is not: U is optimal and leaves Ben worse off than $S$. "Move to efficiency" is licensed only along the shaded segment.
- **You might think policy "efficiency" means Pareto efficiency.** In cost-benefit practice it usually means that gains exceed losses, so winners *could* compensate losers: the Kaldor-Hicks criterion of [3.2](03-02-the-limits-of-pareto-and-the-compensation-tests.md) ([Kaldor-Hicks criterion](../reference.md#kaldor-hicks-criterion)). That is a much stronger and more contested value judgment travelling under the same word.
- **You might think the first welfare theorem shows markets are good.** The theorem is mathematical and conditional; whether markets meet its conditions is empirical; whether an optimum beats a non-optimal alternative is normative, and the Pareto principle answers only when the optimum dominates it.

## One-liner

> The Pareto principle ranks a state higher only when someone gains and no one loses; its premises are welfarism and preference satisfaction, and its price for being minimal is that it is silent on every trade-off, so "efficient" alone never says a state is good.

## Problems

**P1 (🟢) *(Formal (a)–(b) · Exegetical (c).)*** Example 1's economy (10 fish, 10 loaves, $u_i=\sqrt{x_iy_i}$), but the status quo is now $S'$: Ann $(9,1)$, Ben $(1,9)$.

(a) For each allocation, give both utilities, say whether it is Pareto optimal, and classify it relative to $S'$ (strict improvement for both, strong-Pareto-only improvement, Pareto-indifferent, worse, or incomparable): (i) Ann $(2,8)$, Ben $(8,2)$; (ii) Ann $(3,3)$, Ben $(7,7)$; (iii) Ann $(8,8)$, Ben $(2,2)$.
(b) Which Pareto-optimal allocations are Pareto improvements on $S'$?
(c) Does the Pareto principle rank (ii) against (iii)? One sentence.

**P2 (🟡) *(Exegetical (a) · Exegetical (b).)*** An **invented** op-ed in a city paper, not the words of any real person:

> "The council's rent cap is inefficient. Basic economics, the first welfare theorem, tells us that a free rental market reaches a Pareto-optimal allocation, and economists of every stripe accept the Pareto principle. So repealing the cap is not a matter of opinion: it makes the city better off."

An invented critic replies: "Repeal would push some low-income tenants out of their homes. Efficiency is not the only thing that matters."

(a) Name the inference in the op-ed that the Pareto principle does not license, and say why. Two sentences. (b) Name the crux: the single premise the op-ed needs and the critic denies. Classify it as empirical, conceptual or normative, and say what would move each side. 120 words or fewer.

**P3 (🔴, optional) *(Exegetical (a) · Evaluative (b).)*** An **invented** case. A river town builds a footbridge paid for by a state grant. Every one of 2,000 commuters saves twenty minutes a day. The town's single ferry operator loses her trade and is worse off, even after finding other work.

(a) Does weak Pareto rank "bridge" above "no bridge"? Does strong Pareto? Name one change to the policy that would make strong Pareto rank it higher. Two sentences.
(b) A planner replies: "Her loss is a loss of customers, not of anything she owned. She had no right to their fares, so it does not count, and the bridge is a Pareto improvement in every sense that matters." Assess the reply. 150 words or fewer. Any verdict passes.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) · Exegetical (c), strict.)*

(a) $S'$ gives $u_A=\sqrt{9\cdot 1}=3$, $u_B=\sqrt{1\cdot 9}=3$. Optimality test: each person holds equal amounts of both goods (equal MRS).

- (i) $u_A=\sqrt{16}=4$, $u_B=\sqrt{16}=4$. **Not optimal**: Ann's MRS is $8/2=4$, Ben's $2/8=0.25$ (moving both to $(5,5)$ gives $(5,5)$). **Strict improvement for both** on $S'$: $4>3$ and $4>3$.
- (ii) $u_A=3$, $u_B=7$. **Optimal.** **Strong-Pareto-only improvement**: Ann is indifferent ($3=3$), Ben gains.
- (iii) $u_A=8$, $u_B=2$. **Optimal.** **Incomparable** with $S'$: Ann gains, Ben loses ($2<3$).

(b) Ann at $(t,t)$, Ben at $(10-t,10-t)$, with $t\ge 3$ and $10-t\ge 3$: that is, $3\le t\le 7$ (utilities from $(3,7)$ to $(7,3)$). Strictly improving for both when $3<t<7$.

(c) No: Ann prefers (iii) and Ben prefers (ii), so they are Pareto-incomparable, although both are optimal.

**Must hit, strict:** the three utility pairs; (i) improving but not optimal; (ii) optimal and strong-only; (iii) optimal but incomparable; the interval $3\le t\le 7$; incomparability in (c).

**Wrong turns:** calling (iii) an improvement because it is efficient, or because utilities sum to more than at $S'$ ($10>6$): Pareto never adds. Calling (i) optimal because both gained: a state can improve on $S'$ and still be improvable. Giving the whole frontier in (b).

**Model answer:** as above.

---

**P2** *(Exegetical (a) · Exegetical (b), strict.)*

**Must hit, strict (a):** the step from "the market allocation is Pareto optimal" to "repeal makes the city better off". The Pareto principle ranks $x$ above $y$ only if $x$ Pareto-dominates $y$; repeal leaves some tenants worse off, so the repealed state is at most *incomparable* with the capped one, however efficient it is. (Noting that the first theorem's conditions are an empirical question for a rental market is a good addition, not the answer.)

**Must hit, strict (b):**
- The crux is normative: whether an efficiency gain makes a state better *even when someone loses and is not compensated* (equivalently, whether gains to winners may outweigh losses to losers). The op-ed needs it; the critic denies it.
- Classified as **normative**, not empirical or conceptual.
- What moves the op-ed: showing the losers are not and will not be compensated, and an argument that efficiency has no value apart from Pareto dominance. What moves the critic: actual compensation paid from the gains (which turns repeal into a Pareto improvement), or an argument that institutions which reliably raise total gains benefit nearly everyone over time.

**Wrong turns:** naming "whether the first welfare theorem applies to housing" as the crux: settle it in the op-ed's favour and the inference still fails. Naming "whether efficiency matters": the critic grants that it does. Treating "economists accept the Pareto principle" as the error: the principle is accepted; it just does not say what the op-ed needs.

**Model answer:** (a) The op-ed moves from "the free market is Pareto optimal" to "repeal makes the city better off". The principle ranks repeal higher only if no one loses, and some tenants lose, so it is silent. (b) The crux is whether a gain in efficiency improves things when some lose and are not compensated: a normative premise, which the op-ed needs and the critic denies. Evidence that compensation will never be paid weakens the op-ed's case; a binding compensation scheme would meet the critic's objection on the principle's own terms.

---

**P3** *(Exegetical (a), strict · Evaluative (b), graded on moves.)*

**Must hit, strict (a):** neither. Weak Pareto needs everyone to prefer the bridge, and strong Pareto needs no one to prefer no bridge, but the operator does. Pay her compensation from the gains (say, a toll or levy on users or the grant) large enough to leave her no worse off, and strong Pareto ranks it higher (weak Pareto too if she ends strictly better off).

**Must hit, any verdict (b):**
- State the reply precisely: some losses (losses of trade the loser had no entitlement to) are excluded from the comparison.
- Name the premise it changes: this abandons premise 1 (welfarism) or 2, since her welfare falls by her own preference; it adds an **entitlement** premise, a non-welfare judgment about which losses count.
- Run it: on the amended principle the bridge ranks higher; on the principle as stated it does not.
- Generalization: nearly every innovation or policy has losers of exactly this kind, so either the amendment does a great deal of work (and needs a theory of entitlements), or the plain principle ranks almost no real policy.

**Wrong turns:** answering whether the bridge is worth building on balance, which is 3.3's question, not an assessment of the reply. Saying the bridge passes because gains exceed losses: that is the Kaldor-Hicks criterion, a different principle. Treating the "no right to customers" claim as empirical.

**Model answer (b), one of several:** The planner keeps the Pareto label but changes what it counts: her fall in welfare is real by her own preferences, so excluding it drops welfarism and adds an entitlement premise, that losses of custom one had no right to do not count. That premise has a pedigree (it is how most people judge a rival's new shop) and it makes the principle usable, since otherwise nearly every innovation has a loser and Pareto ranks nothing. But it generalizes uncomfortably: whether the loss counts now turns on a theory of rights, which the principle was praised for not needing. Either the planner owns that theory and defends it, or "Pareto improvement" here is a description of the commuters only. I find the amendment defensible but not minimal.

</details>

## Flashback

**From Lesson [2.2](02-02-the-behavioural-challenge.md) (The behavioural challenge):** *(Formal (a) · Exegetical (b).)* Illustrative numbers. A tax return must be filed at date 2, at an effort cost of 10, or at date 3, the last allowed date, at a cost of 12 (a late surcharge). Gita has quasi-hyperbolic preferences with $\beta=0.65$, $\delta=0.9$ and linear utility, and costs count as negative utility.

(a) At date 0, which date does she plan to file on? At date 2, does she file? Show the values.
(b) A friend defends her: "Filing requirements sometimes get waived at the last minute, so putting it off is sensible." In two sentences: which premise of 2.2's irrationality argument does this defence attack, and why can a chance of a waiver that she already knew about at date 0, the same in every period, not explain the switch?

<details>
<summary>Solution</summary>

(a) *At date 0* both dates are in the future, so both costs carry $\beta$: filing at date 2 is worth $-0.65\times0.9^2\times10=-0.65\times0.81\times10=-5.265$; filing at date 3 is worth $-0.65\times0.9^3\times12=-0.65\times0.729\times12=-5.686$. Since $-5.265>-5.686$, she plans to file at date 2.

*At date 2* the date-2 cost is now and loses no $\beta$: filing is worth $-10$, delaying $-0.65\times0.9\times12=-7.02$. Since $-7.02>-10$, she delays to date 3. The plan is abandoned on the day the cost becomes immediate.

**Must hit, strict (a):** $-5.265$ against $-5.686$ (plans date 2); $-10$ against $-7.02$ (delays at date 2).

**Must hit, strict (b):**

- The defence attacks **P3**, that the options really are the same: a cost paid now is certain, while a cost due later might never fall due, so "file at 2" and "file at 3" differ in risk.
- A known, constant chance of a waiver multiplies each further period's cost by the same factor, which works exactly like a lower $\delta$: the date-0 self would already weigh it, the weight on date 3 relative to date 2 is the same from date 0 and from date 2, and so it can make her plan to delay but never plan one thing and do another. To rescue the switch the defence needs something new between date 0 and date 2, such as news that a waiver has become likelier.

**Wrong turns:** applying $\beta$ to the date-2 cost when evaluating at date 2; it is then immediate. Reading the friend as making the "no single self" reply, which attacks P4, not P3. Thinking any chance of a waiver justifies the reversal: risk explains a consistent preference for delay, not a change of mind with no change of information.

**Model answer:** (a) At date 0 she compares $-5.265$ with $-5.686$ and plans to file at date 2; at date 2 she compares $-10$ with $-7.02$ and delays. (b) The defence denies P3: a later cost may be cancelled, so the two options differ. But a risk she foresaw and that is the same each period discounts date 3 against date 2 by the same factor whenever she looks, so it would have shown up in her date-0 plan; only new information arriving between the dates could make the switch rational.

</details>

## Connections

- **Backward:** premises 1 and 2 are the welfarism and preference-satisfaction view of [1.1](01-01-welfarism-and-preference-satisfaction.md), and [`ethics` 1.2](../../ethics/lessons/01-02-what-is-good-for-a-person.md) holds the adaptive-preference objection that weakens premise 2. [2.2](02-02-the-behavioural-challenge.md)'s inconsistent choices raise the question of which preference the principle consults. The welfare theorems are proved in [`grad-micro` 4.4](../../grad-micro/lessons/04-04-two-welfare-theorems.md), whose closing caveat on lump-sum transfers is Example 2's strain.
- **Forward:** [3.2](03-02-the-limits-of-pareto-and-the-compensation-tests.md) takes up the principle's limits (the liberal paradox, ex ante versus ex post Pareto, spurious unanimity) and the compensation tests that try to rank the incomparable quadrants. [3.3](03-03-cost-benefit-analysis-and-the-value-of-a-life.md) turns those tests into cost-benefit practice. [5.5](05-05-hayek-knowledge-order-and-the-mirage-of-social-justice.md) asks whether efficiency can justify markets at all.
- **Sideways:** Pareto is one of Arrow's conditions in [`grad-game-theory` 5.1](../../grad-game-theory/lessons/05-01-social-choice-impossibility.md), and a social welfare function that respects it is in [`grad-micro` 6.5](../../grad-micro/lessons/06-05-social-choice-welfare.md). The leaky bucket is the efficiency-equity trade-off that [`public-economics` 5.1](../../public-economics/lessons/05-01-the-linear-income-tax.md) resolves with welfare weights. Whether inequality is bad in itself, the levelling-down debate, belongs to [`political-philosophy` 2.6](../../political-philosophy/lessons/02-06-luck-relations-priority-and-sufficiency.md).
