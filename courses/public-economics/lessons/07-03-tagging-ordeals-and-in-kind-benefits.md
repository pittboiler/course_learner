# Public Economics · Lesson 7.3: Targeting transfers: tagging, ordeals, and in-kind benefits

> ⏱ ~15 min · Module 7: Social insurance and the welfare state · Builds on: [5.2 The Mirrlees problem](05-02-the-mirrlees-problem.md), [5.4 Participation and the EITC](05-04-participation-and-the-eitc.md), [`grad-micro` 5.3 Screening](../../grad-micro/lessons/05-03-screening.md) · Unlocks: [8.2 Assignment, spillovers, and grants](08-02-assignment-spillovers-and-grants.md)

## Why this matters

Module 5 redistributed using one observable: earnings. That is expensive, because the only way to aim money at low earners is to withdraw it as earnings rise, and withdrawal is a marginal tax. Real welfare states lean just as hard on other screens. Disability and old-age programs condition on a characteristic. Many programs make you queue, fill in forms or show up for work. Food stamps, public housing and Medicaid pay in goods rather than cash. Each is a way to find the needy without a steep phase-out. Each has its own wedge. The question is the course's usual one: is the cure cheaper than the disease?

## The idea

Ten people, two of them needy, and 1,200 dollars to hand out (invented numbers). The government cannot see need.

- **Give it to everyone:** 120 each. The needy get 240, a fifth of the budget. The other 960 *leaks* to people society values less at the margin.
- **Tag:** the government can see a trait that goes with need: a disability, old age, being a lone parent of young children. Say it picks out both needy people and one other. Now each tagged person gets 400, and the needy get 800, two-thirds of the budget. The price is *horizontal inequity*: a needy person without the tag gets nothing, and two equally needy people are treated differently. There is also an incentive to get the tag.
- **Impose an ordeal:** anyone may claim, but claiming means a day in a queue. Someone whose time is worth little shrugs; someone with a well-paid job decides it isn't worth it. The claimants sort themselves. The queue is pure waste, though, and the needy are the ones who stand in it.
- **Pay in kind:** offer a basic flat instead of cash. Someone who would never live there doesn't claim it, so the good does the sorting.

All three are [screening](../../grad-micro/lessons/05-03-screening.md) devices. Tags sort on what the government can see. Ordeals and in-kind benefits make people sort themselves, by attaching a cost that bites harder on the people the program should not reach. That is single crossing again, with a claim cost in place of a price.

## The formal version

**Setup.** Types $i$ have population counts $n_i$ and [social marginal welfare weights](../reference.md#social-marginal-welfare-weights) $g_i$, normalized to average one over the population. Assume the existing tax-transfer system already sets a universal grant optimally, as in [5.1](05-01-the-linear-income-tax.md). Then a dollar handed equally to everyone is worth exactly a dollar of public funds, and a dollar of public funds is worth one. The program is small, so the weights don't move, and utility is quasilinear, so a claimant's gain is measured in dollars. A program pays benefit $b$ to each claimant. A claimant of type $i$ bears a *claim cost* $c_i\ge0$ (time, hassle, stigma, the cost of acquiring a tag) that nobody receives.

**The value of a transfer program.** If $s_i$ is the number of type-$i$ claimants,
$$\Delta W=\sum_i s_i\big[g_i\,(b-c_i)-b\big].$$
*In words:* each claimant's net gain, weighted by how much society values that person's dollars, minus the dollar cost of the benefit, which is worth one.

**Result 1: a universal grant is worth nothing at the margin.** With $s_i=n_i$ and $c_i=0$, $\Delta W=b\sum_i n_i(g_i-1)=0$, because the weights average one. *In words:* spreading money evenly is exactly as good as leaving it in the public purse. Anything worth doing has to raise the *recipients'* average weight above one.

**Result 2: tagging.** Let a costless, unfakeable tag reach $s_i$ people of type $i$. Then
$$\Delta W=b\,S\,(\bar g_{\text{rec}}-1),\qquad \bar g_{\text{rec}}=\frac{\sum_i s_i g_i}{S},\quad S=\sum_i s_i .$$
*In words:* a tagged program pays exactly when the tag picks out a group whose average weight exceeds one, and it pays in proportion to how far above one that average is. This is Akerlof (1978, *American Economic Review*): [tagging](../reference.md#tagging) lowers the cost of redistribution. His deeper point is about the income tax. In the Mirrlees problem of [5.2](05-02-the-mirrlees-problem.md) the binding constraint is that the able mimic the less able. A tag splits the population, so each group gets its own schedule and faces fewer potential mimics. A larger grant can then go to the tagged group without a steep phase-out on everyone. The costs:

- *Exclusion.* Needy people without the tag get nothing.
- *Manipulation.* A tag is only as good as it is hard to fake. If a non-needy person can acquire it at cost $a_R$, they do so whenever $b>a_R$. So the cost of faking caps the benefit a tag can safely carry.

**Result 3: ordeals.** Now let anyone claim. Type $i$ claims iff $b>c_i$. An [ordeal](../reference.md#ordeals) of $H$ hours costs a person whose time is worth $w_i$ an amount $c_i=w_iH$. It separates the needy ($N$) from the rest ($R$) iff
$$c_N<b<c_R .$$
Compared with doing nothing, it is worth running iff
$$g_N(b-c_N)>b\iff \frac{c_N}{b}<1-\frac{1}{g_N}.$$
*In words:* the ordeal burns $c_N$ of every benefit it pays. It is worth it when the needy's weight is high enough that the net amount they keep still beats the dollar it cost. Nichols and Zeckhauser (1982, *American Economic Review*, papers and proceedings) made this argument: a deliberate deadweight loss can raise welfare when it improves targeting by more than it wastes. A revenue-maximizing government ($g=0$ on everyone) never runs one.

**In-kind benefits.** Pay the benefit as a good that costs $b$ to supply and is worth $v_i$ to type $i$. The implicit claim cost is $c_i=b-v_i$. If the needy value the good at its cost ($v_N=b$), they bear nothing. If the non-needy value it little, or below zero, they bear the whole cost. That happens when taking the good means giving up something they prefer: a basic flat you must live in, a food ration that replaces better food. So an [in-kind transfer](../reference.md#in-kind-transfers) is an ordeal whose cost falls on the people it should deter. It only works if the good cannot be resold; resale turns it back into cash. Blackorby and Donaldson (1988, *American Economic Review*) show that in-kind transfers relying on self-selection can Pareto-improve on anything that taxes and subsidies alone achieve. Other rationales for in kind are paternalism and externalities (a child's nutrition, say). Currie and Gahvari (2008, *Journal of Economic Literature*) survey both the theory and the evidence.

**Take-up.** Real claim costs include stigma, paperwork, and not knowing you are eligible. Incomplete [take-up](../reference.md#take-up) is the rule, and it is not the participation margin of [5.4](05-04-participation-and-the-eitc.md). That was the decision to work; this is the decision to claim. Whether a claim cost screens the right way depends on its sign: an ordeal helps only if $c_N<c_R$. Kleven and Kopczuk (2011, *American Economic Journal: Economic Policy*) model complexity as the by-product of screening. Rigorous screening improves targeting but raises applicants' costs, so optimal programs have incomplete take-up and errors in both directions. If complexity bites hardest on the least informed, the claim cost screens the wrong way.

## Picture

![Three horizontal stacked bars showing where a budget of 1,000,000 dollars ends up. Universal grant: 200 thousand to the needy and 800 thousand leaking to the non-needy; net social value zero. Tagged grant: 750 thousand to the needy, 250 thousand leaking; net social value 687,500 with weight 2 on the needy and 2,750,000 under maximin. Ordeal: 800 thousand net to the needy and 200 thousand burned as the needy's time cost, nothing leaking; net social value 600,000 with weight 2 and 3,000,000 under maximin.](assets/07-03-fig1.svg)

The tag stops most of the leak but misses a quarter of the needy. The ordeal stops the leak entirely and reaches everyone needy, but it burns a fifth of what they receive. Which bar is best depends on the weights.

## Worked examples

**Example 1 (tagging).** Invented numbers: 1,000 households, 200 of them needy, and a budget of 1,000,000 dollars. Two objectives, both averaging one: a moderate one with $g_N=2$, $g_R=0.75$ (check: $0.2\times2+0.8\times0.75=1$), and maximin with $g_N=5$, $g_R=0$.

*Universal:* 1,000 dollars each. The needy get 200,000; 800,000 leaks. By Result 1, $\Delta W=0$ under both objectives.

*Tagged:* the tag covers 150 of the 200 needy and 50 of the 800 others, so 200 people get 5,000 each. The needy get 750,000 and 250,000 leaks. The recipients' average weight is $(150\times2+50\times0.75)/200=1.6875$, so
$$\Delta W=1{,}000{,}000\times0.6875=687{,}500 .$$
Under maximin, $\bar g_{\text{rec}}=(150\times5)/200=3.75$ and $\Delta W=2{,}750{,}000$. Fifty needy households get nothing under either.

Now suppose a non-needy household can fake the tag for 4,000 dollars (a borderline disability claim, say). At 5,000 a head, faking pays. To keep the tag honest the benefit must be at most 4,000, which caps the program at $200\times4{,}000=800{,}000$. The tag is a finite resource: the more it carries, the more it attracts people it was meant to exclude.

**Example 2 (an ordeal, and the comparison).** Same population, no tag. Claiming requires 100 hours of attendance that produces nothing. The needy value their time at 10 dollars an hour, so $c_N=1{,}000$. The others value theirs at 60, so $c_R=6{,}000$. With the benefit set at 5,000, $1{,}000<5{,}000<6{,}000$: all 200 needy claim and nobody else does. The budget is again 1,000,000. The needy receive it all but burn 200,000 in time, so they net 800,000.
$$\Delta W=200\,[g_N(5{,}000-1{,}000)-5{,}000]=800{,}000\,g_N-1{,}000{,}000 .$$
That is 600,000 at $g_N=2$ and 3,000,000 under maximin. The test $c_N/b=0.2<1-1/g_N$ passes easily (the threshold is 0.5 at $g_N=2$, 0.8 under maximin).

*Ordeal or tag?* The ordeal minus the tag is $\Delta W_{\text{ordeal}}-\Delta W_{\text{tag}}=112{,}500\,g_N-312{,}500$ (with $g_R$ set so the weights average one), which is positive iff $g_N>25/9\approx2.78$. At $g_N=2$ the tag wins: its leakage goes to people who still carry weight 0.75, and that beats burning 200,000. Under maximin the ordeal wins: leakage is worthless and full coverage of the needy is everything. The ranking of screens depends on the social objective, and that choice belongs to [`political-philosophy`](../../political-philosophy/syllabus.md) and [`philosophy-of-economics`](../../philosophy-of-economics/syllabus.md), not to this arithmetic. Horizontal equity (should the untagged needy count as a separate wrong?) is a question for them too.

## Watch out

- **You might think an ordeal is just waste, but actually waste can buy targeting.** The test is $c_N/b<1-1/g_N$. A small burn on the needy that keeps out a large leak can be worth it. The same burn with no screening gain never is.
- **You might think a tag is free information, but actually it is a target.** A tag that carries a large benefit invites people to acquire it, and the tag's accuracy falls as the benefit rises.
- **You might think in-kind always beats cash for screening, but actually it needs two conditions.** The good must be worth less (relative to its cost) to the people you want to deter, and it must not be resellable. If the needy value it below cost too, in kind burns $b-v_N$ of their benefit, exactly like an ordeal.
- **You might think low take-up means a program is failing, but actually take-up measures the claim cost, not its sign.** What matters is *who* the claim cost deters. Complexity that deters the least informed screens the wrong way.

## One-liner

> A transfer program is worth $\sum_i s_i[g_i(b-c_i)-b]$: tags raise recipients' average weight for free until people fake them, ordeals and in-kind benefits make people sort themselves at a cost, and the best screen depends on the weights.

## Problems

**P1 (🟢) *(Formal.)*** Invented numbers: 2,000 households, 500 of them needy, with weights $g_N=2.2$ and $g_R=0.6$. A budget of 800,000 dollars is available. A tag covers 300 needy and 100 non-needy households; tagged households split the budget equally. (a) What share of the budget reaches the needy under a universal grant and under the tagged grant? (b) Compute $\Delta W$ for each. (c) Non-needy households can fake the tag at a cost of 1,500 dollars, and they fake whenever the benefit strictly exceeds that. What is the largest honest benefit per tagged household, the program budget it allows, and its $\Delta W$?

**P2 (🟡) *(Formal (a)–(c).)*** Invented numbers: a benefit of 3,000 dollars; claiming requires $H$ hours of unproductive attendance. The needy value time at 12 dollars an hour, the non-needy at 40, and 20 percent of the population is needy. (a) Find the smallest $H$ at which no non-needy person strictly gains from claiming. (b) At that $H$, what is the lowest weight $g_N$ that makes the ordeal worth running compared with no program? Is it worth running with $g_N=2$? Under maximin? (c) Redo (b) if the needy value time at 30 dollars an hour.

**P3 (🔴, optional) *(Formal (a) · Exegetical (b).)*** Invented numbers: 500 needy and 1,500 non-needy households, $g_N=2.2$, $g_R=0.6$. A benefit costs 3,000 dollars per claimant. Needy households are eligible and claim at no cost. A non-needy household can claim only by misreporting, at a cost of 2,000 dollars. The benefit is paid either in cash or as a good that the needy value at its cost and the non-needy value at 1,200 dollars. (a) Who claims under each option? Compute the program cost and $\Delta W$ for each. (b) Name the two conditions on the good that make the in-kind version screen, and say what happens to your answer if either fails. At most 80 words.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

The weights average one: $0.25\times2.2+0.75\times0.6=1$.

(a) Universal: $800{,}000/2{,}000=400$ each, so the needy get $500\times400=200{,}000$, which is 25 percent. Tagged: $800{,}000/400=2{,}000$ each, so the needy get $300\times2{,}000=600{,}000$, which is 75 percent.

(b) Universal: $\Delta W=0$ by Result 1. Tagged: $\bar g_{\text{rec}}=(300\times2.2+100\times0.6)/400=1.8$, so
$$\Delta W=800{,}000\times(1.8-1)=640{,}000 .$$

(c) At 2,000 dollars a head faking pays, so the benefit must be at most 1,500. The budget is $400\times1{,}500=600{,}000$ and $\Delta W=600{,}000\times0.8=480{,}000$.

**Wrong turns:** giving the universal grant a positive value because some of it reaches the needy (the weights average one, so it nets to zero); capping the benefit just below 1,500, when at exactly 1,500 faking does not strictly pay.

---

**P2** *(Formal (a)–(c).)*

(a) Non-needy gain $3{,}000-40H$, which is not positive iff $H\ge75$. So $H=75$, at which the non-needy are indifferent (and, by the stem, don't claim). The needy's cost is $12\times75=900<3{,}000$, so they all claim.

(b) Worth running iff $g_N(3{,}000-900)>3{,}000$, i.e. $g_N>3{,}000/2{,}100=10/7\approx1.43$. With $g_N=2$: $2\times2{,}100-3{,}000=1{,}200$ per claimant, so yes. Maximin with a needy share of 0.2 means $g_N=1/0.2=5$: $5\times2{,}100-3{,}000=7{,}500$ per claimant, so yes.

(c) Now $c_N=30\times75=2{,}250$, and the needy keep only 750. The threshold is $g_N>3{,}000/750=4$. With $g_N=2$: $2\times750-3{,}000=-1{,}500$ per claimant, so no. Under maximin: $5\times750-3{,}000=750$, so yes, narrowly.

**Wrong turns:** treating the ordeal's cost to the needy as a transfer rather than a deadweight loss; taking maximin's weight as 1 rather than normalizing to average one ($g_N=1/0.2$).

---

**P3** *(Formal (a) · Exegetical (b).)*

(a) Cash: a non-needy household gains $3{,}000-2{,}000=1{,}000>0$, so all 2,000 households claim and the program costs $2{,}000\times3{,}000=6{,}000{,}000$.
$$\begin{aligned}\Delta W_{\text{cash}}&=500\times2.2\times3{,}000+1{,}500\times0.6\times1{,}000-6{,}000{,}000\\&=-1{,}800{,}000 .\end{aligned}$$
In kind: a non-needy household gains $1{,}200-2{,}000<0$, so only the 500 needy claim, at a cost of 1,500,000.
$$\Delta W_{\text{kind}}=500\times2.2\times3{,}000-1{,}500{,}000=1{,}800{,}000 .$$

**Must hit, strict (b):**

- The good is worth less, relative to its cost, to the non-needy than to the needy.
- It cannot be resold (or resale is costly).
- If either fails, the in-kind benefit acts like cash and the mimics come back; if the needy also value it below cost, it burns $b-v_N$ of their benefit like an ordeal.

**Wrong turns:** counting the non-needy's 2,000 misreporting cost as a transfer (it is 3,000,000 of pure waste in the cash case); assuming in kind helps because the needy "should" consume the good. That is the paternalist rationale, a different argument from screening.

**Model answer (b):** In-kind screens when the non-needy value the good below its cost, so claiming it is not worth the misreporting cost, while the needy value it near cost. The good also must not be resellable. If it could be sold at cost, it would be cash and all 2,000 would claim. If the non-needy valued it above 2,000, they would claim anyway.

</details>

## Flashback

**From Lesson [7.1](07-01-adverse-selection-as-a-policy-problem.md) (Adverse selection as a policy problem):** *(Formal (a)–(b) · Exegetical (c).)* Invented numbers, in hundreds of dollars a year. Demand for a single health plan is $P(s)=90-40s$, where $s$ is the covered share with buyers ordered from the highest willingness to pay down. Insurers are competitive and cannot price on $s$, there is no moral hazard, and the marginal-cost curve $\mathrm{MC}(s)$ (the expected cost of buyer $s$) is linear. The unsubsidized market settles at 30 percent coverage. A pilot that enrolled everyone found an average claim cost of 64. (a) Recover $\mathrm{MC}(s)$ and the average-cost curve $\mathrm{AC}(s)$. (b) Find the efficient coverage, the market's welfare loss, and the premium and total surplus under a full mandate. (c) What property of these curves makes the full mandate efficient here? One sentence.

<details>
<summary>Solution</summary>

(a) Zero profit makes the equilibrium price equal the pool's average cost, so $\mathrm{AC}(0.3)=P(0.3)=78$. With $\mathrm{MC}(s)=c-ds$, the average is $\mathrm{AC}(s)=c-\tfrac d2 s$. Then $c-0.15d=78$ and $c-0.5d=64$ give $0.35d=14$, so $d=40$ and $c=84$:
$$\mathrm{MC}(s)=84-40s,\qquad \mathrm{AC}(s)=84-20s .$$
MC slopes down: adverse selection.

(b) $P(s)-\mathrm{MC}(s)=6$ for every $s$, so every buyer values coverage above their own cost and $s^*=1$. The market keeps $\int_0^{0.3}6\,ds=1.8$ of the possible 6, a loss of $\int_{0.3}^{1}6\,ds=4.2$ (420 dollars per potential buyer). A full mandate charges $\mathrm{AC}(1)=64$ and delivers the whole surplus of 6: it recovers the entire loss and adds no over-insurance.

**Must hit, strict (c):**

- Demand lies above MC for every buyer, all the way to $s=1$ (here by a constant 6), so the mandate covers nobody whose coverage is worth less than it costs.

**Model answer (c):** Every buyer, down to the least keen, values the plan 6 above their own expected cost, so the efficient coverage is everyone and forcing full coverage adds no over-insurance loss.

**Wrong turns:** treating 78 and 64 as points on MC rather than AC, which gives $\mathrm{MC}=84-20s$ and a spurious interior optimum; setting the equilibrium where demand meets MC.

</details>

## Connections

- **Backward:** tags split the Mirrlees problem of [5.2](05-02-the-mirrlees-problem.md) into smaller ones with fewer mimics; ordeals and in-kind goods are the self-selection menus of [`grad-micro` 5.3](../../grad-micro/lessons/05-03-screening.md), with single crossing in the claim cost. The claiming decision is distinct from [5.4](05-04-participation-and-the-eitc.md)'s decision to work, and a stigma-driven take-up gap is a cousin of [7.1](07-01-adverse-selection-as-a-policy-problem.md)'s selection: who shows up determines what the program costs.
- **Forward:** [8.2](08-02-assignment-spillovers-and-grants.md) asks the cash-versus-kind question between governments: a lump-sum grant is cash, a matching grant earmarked for one good is in kind.
- **Sideways:** whether horizontal inequity or paternalism counts against a scheme, and which weights to use, belong to [`political-philosophy`](../../political-philosophy/syllabus.md) and [`philosophy-of-economics`](../../philosophy-of-economics/syllabus.md). Weighing every program against the value of a dollar of public funds is the logic of [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md)'s MCPF; here the average-one normalization, with the universal grant set optimally, fixes that value at one.
