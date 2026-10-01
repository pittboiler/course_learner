# Philosophy of Economics · Lesson 3.3: Cost-benefit analysis and the value of a life

> ⏱ ~15 min · Module 3: Efficiency and cost-benefit analysis · Builds on: [3.1 The Pareto principle](03-01-the-pareto-principle.md), [3.2 The limits of Pareto and the compensation tests](03-02-the-limits-of-pareto-and-the-compensation-tests.md) · Unlocks: [3.4 CBA's critics and defenders](03-04-cbas-critics-and-defenders.md), [4.1 Why discount?](04-01-why-discount.md)

## Why this matters

A road-safety rule, an air-quality standard and a dam all get the same test before they are approved: add up in money what everyone gains, subtract what everyone loses, and go ahead if the total is positive. That is [cost-benefit analysis](../reference.md#cost-benefit-analysis), the Kaldor-Hicks criterion of [3.2](03-02-the-limits-of-pareto-and-the-compensation-tests.md) turned into a procedure. Its most contested input is a money figure for a death prevented. This lesson builds that figure, runs the test, and finds a value judgment inside each step.

## The idea

A town of 50,000 people can build guardrails that cut each resident's chance of dying on a mountain road this year by 1 in 50,000. Across the town that is one expected death prevented. A survey finds that each resident would pay 120 dollars a year for the cut. The town would pay 6 million dollars in all, so the town values the prevented death at 6 million dollars.

That is the [value of a statistical life](../reference.md#value-of-a-statistical-life) (VSL): the rate at which people trade money for small changes in their own risk of death, scaled up to one expected death. It is not what anyone would pay to escape certain death, and it is not the worth of a person. No one in the town is identified, and no one is spared for certain. Everyone buys a slightly safer year.

CBA then asks one question of every effect, fatal or not: what would each affected person pay for it, or need to be paid to accept it? Sum those numbers. A positive total says the winners *could* compensate the losers, which is the potential Pareto improvement of [3.2](03-02-the-limits-of-pareto-and-the-compensation-tests.md). It does not say they will.

## The argument

**CBA as a decision procedure**, reconstructed from Hausman, McPherson and Satz's account and the textbook practice it describes.

1. **A person's benefit from a policy is her [willingness to pay](../reference.md#willingness-to-pay) for it** (or the payment she would need to accept a loss). *In words:* her money valuation measures what the policy does to her welfare. This assumes welfarism and the preference view of [1.1](01-01-welfarism-and-preference-satisfaction.md), and that money is an adequate metric, which [1.2](01-02-money-and-happiness-as-measures.md) questioned.
2. **Social benefit is the unweighted sum of these amounts.** *In words:* a dollar counts the same whoever holds it.
3. **A positive sum licenses the policy.** *In words:* if winners could compensate losers, go ahead, whether or not they do (the Kaldor-Hicks step of [3.2](03-02-the-limits-of-pareto-and-the-compensation-tests.md)).

∴ **C.** Adopt policies whose summed willingness to pay exceeds their cost.

**The formal tool: VSL.** Let $p$ be a person's probability of dying this period, $w$ her wealth, $u_a(w)$ her utility if alive and $u_d(w)$ her utility from wealth if dead (a bequest). Her expected utility, in the sense of [`grad-micro` 2.5](../../grad-micro/lessons/02-05-choice-under-uncertainty.md), is $V=(1-p)\,u_a(w)+p\,u_d(w)$. The VSL is the slope of her indifference curve in $(p,w)$:

$$\mathrm{VSL}=\left.\frac{dw}{dp}\right|_{V}=\frac{u_a(w)-u_d(w)}{(1-p)\,u_a'(w)+p\,u_d'(w)}.$$

*In words:* the utility gap between living and dying, divided by the expected marginal utility of a dollar. The ratio is a marginal rate, valid only for small changes in $p$, which is why the life is "statistical". Because the denominator falls as wealth rises, the VSL rises with wealth: the [wealth dependence of WTP](../reference.md#wealth-dependence-of-wtp).

**Two ways to measure it.** *Revealed preference:* hedonic wage studies regress wages on occupational fatality risk and read the premium per unit of risk as the VSL (Thaler and Rosen, 1976; surveyed by Viscusi and Aldy, 2003). If a job pays $\Delta w$ more for extra annual risk $\Delta p$, then $\mathrm{VSL}=\Delta w/\Delta p$. *Stated preference:* surveys ask people what they would pay for a risk reduction. Agencies that use either put the VSL in the millions of dollars.

**Three choices hidden in premise 1.**

- *[WTP or WTA](../reference.md#wtp-and-wta).* For a loss, the compensation test asks what the loser would need to accept it (WTA). For a gain, it asks what the winner would pay (WTP). Measured WTA often far exceeds WTP for the same good. Kahneman, Knetsch and Thaler (1990) traced part of the gap to loss aversion: owners of a coffee mug demanded much more to sell it than non-owners would pay to buy it. Hanemann (1991) showed that even standard preferences open a large gap when the good has no close substitute. Whichever measure is used, using it decides who holds the entitlement. The Coase theorem of [`grad-micro` 6.3](../../grad-micro/lessons/06-03-externalities-coase-theorem.md) makes the same move: the starting assignment of rights does not change the efficient quantity, but it decides who pays whom. Once WTA and WTP diverge, it changes the verdict too.
- *[Contingent valuation](../reference.md#contingent-valuation) and [existence value](../reference.md#existence-value).* People value things they will never use: a wilderness they will never visit, a species they will never see (Krutilla, 1967). Only a survey can measure such value. After the 1989 Exxon Valdez spill, a study for the State of Alaska led by Richard Carson measured lost "passive use" value this way. Critics, notably Diamond and Hausman (1994), answered that stated values ignore scope: in one well-known survey, stated WTP to save 2,000, 20,000 or 200,000 birds barely differed (Desvousges and coauthors, 1993). A panel for NOAA co-chaired by Arrow and Solow (1993) concluded that carefully designed surveys could serve as a starting point for damage assessment. The value judgment underneath: that the answer to a hypothetical question is a preference, and that a preference about a species is a welfare good to price. [3.4](03-04-cbas-critics-and-defenders.md) takes up Sagoff's denial.
- *Premise 2's equal weights.* [Distributional weights](../reference.md#distributional-weights) replace the sum with $\sum_i g_i B_i$, where $B_i$ is person $i$'s net willingness to pay. The welfare weights $g_i$ come from public economics, normalized to average one as in [`public-economics` 4.2](../../public-economics/lessons/04-02-many-person-ramsey-and-corlett-hague.md) and [5.1](../../public-economics/lessons/05-01-the-linear-income-tax.md). A common family sets $g_i\propto c_i^{-\eta}$, where $c_i$ is consumption and $\eta\ge 0$ measures inequality aversion. There the weights are inputs. Here the question is which $\eta$ is defensible. Unweighted CBA is the choice $\eta=0$.

**Where the argument is weakest.** Premise 2. WTP is bounded by wealth, so an unweighted sum counts the preferences of the rich for more: the same risk reduction is "worth" more to a banker than to a farmhand because the banker's dollars are cheaper to him. The best defence is due to Kaplow and Shavell (1994): redistribute through the income tax, which does it more cheaply than bending every project, and then pick projects by unweighted CBA. The critic replies that the defence needs a tax system that actually compensates, and in its absence "could compensate" leaves the losers with nothing.

## The weights decide

![Bar chart for the bypass example at three values of eta. At eta 0 the weighted gain to the rich is 30, the weighted loss to the poor is minus 20, and the net is plus 10. At eta 0.5 they are 20, minus 26.7 and minus 6.7. At eta 1 they are 12, minus 32 and minus 20](assets/03-03-fig1.svg)

Example 2's project, in millions of dollars. The money amounts never change; only the weights do. The verdict turns negative once $\eta$ passes about 0.29.

## Worked examples

**Example 1 (clean): a VSL and a safety rule.** Invented numbers. Workers in a mining district take jobs carrying an extra annual death risk of 1 in 25,000 for a wage premium of 280 dollars a year. Then

$$\mathrm{VSL}=\frac{280}{1/25{,}000}=7{,}000{,}000.$$

A ventilation rule costs 120 million dollars a year and is expected to prevent 20 deaths a year. Its cost per life saved is $120/20 = 6$ million, below the 7 million VSL. Benefits are $20\times 7 = 140$ million, and the net benefit is $140-120 = +20$ million: it passes.

Find the judgment in each line. The 280 dollars is an empirical estimate, and a contested one: wage regressions struggle to separate risk from unobserved job and worker traits, the identification problem of [`econometrics` 3.1](../../econometrics/lessons/03-01-potential-outcomes-identification.md). Using it for the rule's beneficiaries assumes they trade risk like these workers, and that workers who knew the risk and could have walked away made the trade freely. Dividing by $\Delta p$ assumes the trade-off is linear across small risks.

**Example 2 (hard): a bypass with distributional weights.** Invented numbers. A road bypass gives a wealthy suburb (consumption 80,000 dollars a head) time savings it would pay 30 million dollars for. It routes traffic through a poor district (consumption 20,000 a head), whose residents would need 20 million to accept the noise and displacement. The two groups are equal in size.

Unweighted ($\eta=0$): $30-20=+10$ million. It passes.

With $\eta=1$: raw weights $1/20{,}000$ and $1/80{,}000$ stand in ratio $4:1$. Normalized to average one, $g_P=1.6$ and $g_R=0.4$. The weighted net is $0.4(30)-1.6(20)=12-32=-20$ million. It fails.

With $\eta=0.5$: the ratio is $2:1$, so $g_P=4/3$ and $g_R=2/3$, and the net is $20-26.7=-6.7$ million. It still fails. The verdict flips where $g_P/g_R = 4^{\eta}=30/20$, at $\eta=\ln 1.5/\ln 4\approx 0.29$.

Here is the strain. Nothing about the bypass is in dispute. All the work is done by one parameter, chosen before any project was proposed. A Kaplow-Shavell defender builds the bypass and taxes the suburb to pay the district 20 million, and everyone gains. A critic asks whether that payment will ever be made. If it won't, the unweighted test approved a transfer from the poor to the rich.

## Watch out

- **You might think the VSL is what a life is worth, but actually it is a marginal rate of substitution over small risks.** The same person who would pay 120 dollars to cut a 1-in-50,000 risk could not pay 6 million to avoid certain death, and would need far more than 6 million to accept it, perhaps no sum at all.
- **You might think "the VSL is 7 million" is an empirical finding, but actually it mixes three kinds of claim.** That workers accept 280 dollars for 1-in-25,000 is empirical. That this ratio *is* their valuation of risk is conceptual (premise 1). That an agency *should* spend up to 7 million per expected life saved is normative (premises 2 and 3).
- **You might think a passing CBA is a Pareto improvement, but actually the compensation is hypothetical.** Example 2's district loses 20 million whether or not the test passes. Measuring its loss by WTA rather than WTP decides how big that loss counts, not whether it is paid.

## One-liner

> CBA prices every effect at what the affected would pay or accept, a death prevented at the VSL of a small risk traded for money, and then sums; each step (money as the metric, WTP or WTA, the equal weights) is a value judgment, and one parameter $\eta$ can reverse the verdict.

## Problems

**P1 (🟢) *(Formal.)*** Invented numbers. Workers in a chemical plant accept an extra annual death risk of 3 in 100,000 for a wage premium of 240 dollars a year. (a) Compute the VSL. (b) A containment rule costs 90 million dollars a year and is expected to prevent 10 deaths a year. Compute its cost per life saved and its net benefit counting lives only. (c) The rule also prevents 30 serious injuries a year, each valued at 400,000 dollars. Recompute the net benefit, and say in one sentence what this shows about screening rules by cost per life saved.

**P2 (🟡) *(Exegetical (a) · Evaluative (b).)*** An **invented** consultant's memo to a city council, not the words of any real person or agency:

> "The new waste-transfer station saves the city 1.0 million dollars a year in haulage. The 2,000 households beside the site say they would pay 150 dollars a year each to keep it away, but would need 900 dollars a year each to accept it. Answers of the second kind are notoriously inflated, so we use willingness to pay. Annual cost to residents: 300,000 dollars. Net benefit: 700,000 dollars. Recommend approval."

(a) No station exists today. Which measure does the compensation test call for here, what is the net benefit on that measure, and what is the memo's choice of measure implicitly deciding? Three sentences. (b) Give the strongest case for the memo's choice of measure, then the best reply. Any verdict passes. 150 words or fewer.

**P3 (🔴, optional) *(Formal (a) · Evaluative (b).)*** Invented numbers. A flood wall protects a low-income riverside district (consumption 25,000 dollars a head), whose residents would pay 40 million dollars for it. It is paid for by a levy on a high-income district (consumption 100,000 a head) costing 55 million. The districts are equal in size. Use weights $g_i\propto c_i^{-\eta}$ normalized to average one. (a) Compute the net benefit at $\eta=0$ and at $\eta=1$, and the $\eta$ at which the verdict flips. (b) An opponent says: "Reject the wall; if we care about the riverside district, send it cash through the tax system." Say what premise this argument needs, and whether it generalizes. 100 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(c) · strict)*

(a) $\mathrm{VSL}=\dfrac{240}{3/100{,}000}=240\times 33{,}333.\overline{3}=8{,}000{,}000$, so 8 million dollars.

(b) Cost per life saved $=90/10=9$ million dollars, above the 8 million VSL. Net benefit on lives: $10\times 8-90=80-90=-10$ million dollars. On lives alone the rule fails.

(c) Injuries add $30\times 0.4=12$ million dollars, so the net benefit is $80+12-90=+2$ million dollars and the rule passes.

**Must hit, strict:**

- VSL of 8 million; cost per life saved of 9 million; net of minus 10 million on lives, plus 2 million in all.
- The point of (c): cost per life saved charges the whole cost to the lives, so it can reject a rule whose total benefits exceed its costs. A screen should compare all benefits with all costs.

**Wrong turns:** dividing by 3 instead of by 3 in 100,000 (giving 80 dollars); comparing the 9 million cost per life to the VSL and stopping, as if injuries did not count.

**Model answer:** (a) 8 million dollars. (b) 9 million per life saved; net minus 10 million on lives alone, so it fails. (c) Net plus 2 million once injuries count, so it passes: cost per life saved attributes the whole cost to deaths prevented and can reject a rule that passes the full test.

---

**P2** *(Exegetical (a) — strict · Evaluative (b) — graded on moves, not verdict)*

**Must hit, strict (a):**

- The status quo is no station, so the residents lose from the project, and the compensation test asks what they would need to be paid to accept the loss: WTA, 900 dollars a household.
- On WTA the cost to residents is $2{,}000\times 900=1.8$ million, and the net benefit is $1.0-1.8=-0.8$ million: the project fails. On the memo's WTP it is $+0.7$ million.
- The memo's choice assigns the entitlement: using WTP treats the city as already holding the right to site the station, with residents buying their way out. That assignment, not the data, decides the verdict.

**Must hit, any verdict (b):**

- The case for the memo, stated at strength: stated WTA is unbounded by income and invites strategic overstatement, and part of the gap is loss aversion, which may be a bias rather than a welfare loss (link to the behavioural challenge of Module 2).
- A reply that engages it: Hanemann's point that a large gap is consistent with standard preferences when the good has no close substitute, or the entitlement point that a baseline is a normative choice no measurement error can settle.
- Whether the argument generalizes: if WTP may replace WTA whenever WTA is "inflated", every loss imposed on existing holders is priced as if they never held the right.

**Wrong turns:** saying the gap shows residents are lying, as if the only explanation were strategic. Treating "inflated" as an empirical finding the memo has shown; it has only asserted it. Answering (a) with "WTP, because it is more reliable": that answers (b), not what the test calls for.

**Model answer (b), one of several:** The strongest case for WTP: a hypothetical demand for compensation costs the respondent nothing, so it invites overstatement, and if the gap is loss aversion, that is arguably a framing effect rather than a real welfare loss. The reply: the gap may be real. Hanemann showed that standard preferences open a large gap when nothing substitutes for the good, and a quiet street next to one's home has few substitutes. More basically, choosing WTP decides that the city, not the residents, holds the right to the land's use. That is a claim about entitlement, and evidence about survey bias cannot settle it. If the memo's rule generalized, any loss imposed on existing holders could be priced as though they never held what they lose.

---

**P3** *(Formal (a) — strict · Evaluative (b) — graded on moves, not verdict)*

(a) $\eta=0$: $40-55=-15$ million; the wall fails. $\eta=1$: the raw weights $1/25{,}000$ and $1/100{,}000$ stand in ratio $4:1$, so normalized $g_P=1.6$ and $g_R=0.4$. The net is $1.6(40)-0.4(55)=64-22=+42$ million; it passes. The verdict flips where $g_P/g_R=4^{\eta}=55/40=1.375$, at $\eta=\ln 1.375/\ln 4\approx 0.23$.

**Must hit, strict (a):** minus 15 million unweighted; plus 42 million at $\eta=1$ with weights 1.6 and 0.4; flip at $\eta\approx 0.23$.

**Must hit, any verdict (b):**

- The premise: redistribution through the tax system is actually available and costs less than weighting projects (Kaplow and Shavell's argument), so the right cash transfer will be made.
- Whether it generalizes: if it holds, distributional weights belong in no project appraisal; if transfers are not in fact made, rejecting the wall leaves the district with neither the wall nor the cash.

**Wrong turns:** forgetting to normalize, using weights 4 and 1 (net $160-55=105$); treating the opponent as hostile to the riverside district, when the argument is about the cheapest instrument, not about whether the district matters.

**Model answer (b), one of several:** The argument needs the tax system to be a cheaper and actually available route to the same transfer. Then a project that fails unweighted wastes resources: a cash transfer of 40 million would leave the district as well off at lower cost. If it holds here, it holds everywhere, and project appraisal should never be weighted. But if no transfer will in fact be voted, "send cash" is a potential compensation that never arrives, the gap 3.2 found in Kaldor-Hicks.

</details>

## Flashback

**From Lesson [3.1](03-01-the-pareto-principle.md) (The Pareto principle):** *(Formal (a)–(b) · Exegetical (c).)* Illustrative utility numbers for Ann, Ben and Cal in four social states, each column representing that person's preference ordering:

| State | Ann | Ben | Cal |
|---|---|---|---|
| S (status quo) | 4 | 4 | 4 |
| X | 5 | 4 | 6 |
| Y | 6 | 5 | 5 |
| Z | 12 | 2 | 4 |

(a) For each of X, Y and Z, does weak Pareto rank it above S? Does strong Pareto?
(b) Rank all four states by the sum of utilities. Then replace Ann's numbers by their square roots, which represent exactly the same ordering of her states, and rank them by the sum again.
(c) In one sentence: what does (b) show that a summed ranking needs and the Pareto principle does not?

<details>
<summary>Solution</summary>

(a) X: Ann and Cal gain, Ben is indifferent, so **strong Pareto only**. Y: all three gain, so **weak and strong**. Z: Ben falls from 4 to 2, so **neither**; Z is incomparable with S.

(b) Original sums: S $=12$, X $=15$, Y $=16$, Z $=18$, so Z > Y > X > S. With Ann's utilities $\sqrt{4}=2$, $\sqrt{5}=2.236$, $\sqrt{6}=2.449$, $\sqrt{12}=3.464$: S $=2+4+4=10$, X $=2.236+4+6=12.236$, Y $=2.449+5+5=12.449$, Z $=3.464+2+4=9.464$, so Y > X > S > Z. Z goes from first to last.

**Must hit, strict:**

- (a) X strong only; Y both; Z neither.
- (b) Z > Y > X > S on the original numbers; Y > X > S > Z after the rescaling. The Pareto verdicts in (a) are unchanged by it.
- (c) A sum needs a common scale on which one person's gain can be weighed against another's loss, an interpersonal comparison that orderings do not supply; Pareto uses orderings alone, which is why it survives any rescaling and why it is silent on Z.

**Wrong turns:** counting Z as an improvement because its sum is highest; Ben loses, so Pareto is silent. Saying X passes weak Pareto: Ben is indifferent, not better off. Thinking the square root changes Ann's preferences: it changes only the numbers that represent them.

**Model answer:** (a) X: strong Pareto only; Y: both; Z: neither. (b) Z > Y > X > S, then Y > X > S > Z. (c) Summing needs a choice of scale that makes gains and losses comparable across people, a value judgment the Pareto principle avoids by using only each person's ordering, and one that cost-benefit analysis makes by measuring everyone in money.

</details>

## Connections

- **Backward:** CBA is the Kaldor-Hicks criterion of [3.2](03-02-the-limits-of-pareto-and-the-compensation-tests.md) put into practice, and a positive net benefit inherits its gap between potential and actual compensation. Premise 1 is the preference-satisfaction view of [1.1](01-01-welfarism-and-preference-satisfaction.md) with [1.2](01-02-money-and-happiness-as-measures.md)'s money metric; for a price change, WTP and WTA are the equivalent and compensating variations of [`public-economics` 2.3](../../public-economics/lessons/02-03-excess-burden-and-the-harberger-triangle.md).
- **Forward:** [3.4](03-04-cbas-critics-and-defenders.md) sets the critics (Anderson, Sagoff, Kelman) against the defenders (Adler and Posner, Sunstein), and asks whether the VSL should differ by income. [4.1](04-01-why-discount.md) asks how to add up benefits that arrive in different years.
- **Sideways:** the weights of Example 2 are the social marginal welfare weights of [`public-economics` 5.1](../../public-economics/lessons/05-01-the-linear-income-tax.md), and $\eta$ reappears as the elasticity of marginal utility in the Ramsey equation of [4.2](04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md), where it measures inequality aversion across generations. The choice between WTP and WTA is the Coase theorem's assignment of rights ([`grad-micro` 6.3](../../grad-micro/lessons/06-03-externalities-coase-theorem.md)).
