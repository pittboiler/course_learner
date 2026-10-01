# Philosophy of Economics · Lesson 1.3: Capabilities as a welfare metric

> ⏱ ~15 min · Module 1: Welfare and its measurement · Builds on: [1.1 Welfarism and preference satisfaction](01-01-welfarism-and-preference-satisfaction.md), [1.2 Money and happiness as measures](01-02-money-and-happiness-as-measures.md) · Unlocks: [2.1 Preference and revealed preference](02-01-preference-and-revealed-preference.md)

## Why this matters

[1.1](01-01-welfarism-and-preference-satisfaction.md) measured welfare by what people want, and met adapted preferences. [1.2](01-02-money-and-happiness-as-measures.md) measured it by what they would pay or how they feel, and met [wealth-dependent WTP](../reference.md#wealth-dependence-of-wtp) and adaptation again. Amartya Sen's answer is to change the space: measure neither the mind nor the wallet but what a person is actually able to do and be. That idea runs the Human Development Index, the best-known rival to GDP. This lesson builds such an index and shows that once you have chosen the space, a second set of value judgments arrives in the arithmetic: which dimensions, what weights, and how far one may substitute for another.

## The idea

A **functioning** is a being or a doing: being nourished, reading, moving about the town, taking part in its life. A person's **capability** is the set of functioning bundles she could achieve, given her resources, body and surroundings: her real freedom to live one kind of life rather than another ([functionings and capabilities](../reference.md#functionings-and-capabilities)).

Sen's own contrast: a fasting monk and a starving labourer achieve the same functioning, undernourishment, but the monk could eat and the labourer cannot. Their capability sets differ, and that is the difference that matters.

The approach is aimed at two targets. Against **resources** (income, Rawlsian primary goods): people convert resources into functionings at different rates. A wheelchair user needs more income than a neighbour to reach the same mobility, so equal income can mean unequal freedom. Against **utility**: a deprived person who has trimmed her desires to fit her lot scores well on preference satisfaction and on happiness, which is the [adaptive preference](../reference.md#adaptive-preferences) problem ([`ethics` 1.2](../../ethics/lessons/01-02-what-is-good-for-a-person.md) runs it through the theories of well-being). Capabilities are meant to sit between the two: objective enough to resist adaptation, sensitive enough to see conversion.

Sen developed the view from his Tanner Lecture "Equality of What?" (1979) through *Commodities and Capabilities* (1985) to *Development as Freedom* (1999). He refuses to fix a canonical list of capabilities; which ones count should come out of public reasoning. Martha Nussbaum does fix one: ten central capabilities (life, bodily health, bodily integrity, senses, imagination and thought, emotions, practical reason, affiliation, other species, play, control over one's environment), each owed up to a threshold (*Creating Capabilities*, 2011). Whether capabilities are the right *currency of justice* is [`political-philosophy`](../../political-philosophy/syllabus.md) 2.5's question. Here they are a *measure*.

## The argument

1. **A welfare metric for policy should track how well people's lives can go,** in a form comparable across persons. *In words:* the target is the quality of lives, not a proxy chosen for convenience.
2. **Resource metrics miss conversion.** The same income yields different functionings for different bodies and places.
3. **Utility metrics miss adaptation.** Preference satisfaction and reported happiness can be high in a life that is plainly constrained.
4. **Capability tracks the freedom to function,** which neither conversion nor adaptation distorts, and it leaves the choice of how to live with the person.

∴ **C.** Welfare for policy should be measured in the space of capabilities.

**From space to number.** A capability metric still has to rank. The HDI's recipe makes each step visible. Normalize each dimension $k$ to an index $I_k=(x_k-\min_k)/(\max_k-\min_k)\in[0,1]$, using fixed goalposts, with income entering through its logarithm. Then aggregate. Until 2010 the HDI took the **arithmetic mean** of its health, education and income indices; since the 2010 Report it takes the **geometric mean** ([human development index](../reference.md#human-development-index)). Both are members of one family, the power mean

$$M_r(I_1,\dots,I_n)=\Big(\tfrac{1}{n}\textstyle\sum_k I_k^{\,r}\Big)^{1/r},$$

with $r=1$ the arithmetic mean and $r\to 0$ the geometric mean $(\prod_k I_k)^{1/n}$. This is the CES form of [`grad-micro` 3.1](../../grad-micro/lessons/03-01-production-sets-technology.md), and the elasticity of substitution between dimensions is $\sigma=1/(1-r)$.

The trade-off each implies is the marginal rate of substitution along a contour ([arithmetic and geometric means](../reference.md#arithmetic-and-geometric-means)):

$$\text{arithmetic: } -\frac{dI_j}{dI_k}=1, \qquad \text{geometric: } -\frac{dI_j}{dI_k}=\frac{I_j}{I_k}.$$

*In words:* the arithmetic mean treats dimensions as perfect substitutes at a fixed one-for-one rate, so a point of income always buys back a point of health. The geometric mean makes the scarce dimension dear: losing a point where you are weak costs more than gaining a point where you are strong repays, and a zero anywhere zeroes the index.

**The indexing problem.** Every number above encodes a choice: which dimensions are on the list, what weight each gets, which $r$, where the goalposts sit, and the log on income (a judgment that an extra dollar matters less to the rich). None is settled by the capability argument itself ([indexing problem](../reference.md#indexing-problem)). Nussbaum's thresholds give the extreme answer: below the threshold, no amount of one capability compensates for the lack of another, which is closer to $r\to-\infty$ (the minimum) than to any mean.

**Where the argument is weakest.** The step from P4 to a usable metric. A critic presses a dilemma ([perfectionism objection](../reference.md#perfectionism-objection)). If the theorist fixes the list and weights, the metric ranks lives by a view of the good that many citizens reject, which is the perfectionism a liberal state is meant to avoid. If public reasoning fixes them, the metric aggregates people's evaluations after all, and inherits the adaptation P3 condemned. Defenders reply that capability, not functioning, is measured, so no one is told how to live; and Nussbaum offers her list as the object of an overlapping consensus, not a comprehensive doctrine. A second, quieter gap: capability sets are counterfactual and unobserved, so real indices measure achieved functionings (years lived, years schooled) and a resource (income). The HDI measures the space Sen pointed to only by proxy.

## The contours

![Health index on the horizontal axis and income index on the vertical. A straight blue line marks arithmetic mean 0.6; a red curve marks geometric mean 0.6, touching the line at Q 0.6 0.6. Point P at 0.9 0.3 lies on the blue line but on a lower dashed red curve, geometric mean 0.52](assets/01-03-fig1.svg)

P and Q tie at 0.6 under the arithmetic mean. Under the geometric mean P falls to $\sqrt{0.9\times0.3}=0.520$. At Q both contours have slope $-1$; at P the geometric contour has slope $-0.3/0.9=-1/3$, so one point of income there is worth three points of health. The curvature is the value judgment, drawn.

## Worked examples

**Example 1 (clean): a reversal.** Two illustrative countries, indices (health, education, income): C = (0.85, 0.75, 0.40), D = (0.65, 0.65, 0.65).

- Arithmetic: C $=2.00/3=0.667$, D $=0.650$. C ranks first.
- Geometric: C $=(0.85\times0.75\times0.40)^{1/3}=0.255^{1/3}=0.634$, D $=0.650$. D ranks first.

The trade-offs at C under the geometric mean: offsetting a 0.01 fall in health takes a rise in income index of $0.01\times 0.40/0.85=0.0047$, but offsetting a 0.01 fall in income takes a rise in health of $0.01\times0.85/0.40=0.021$, four and a half times as much. Under the arithmetic mean both are 0.01. Neither mean is "more accurate". The reversal is produced entirely by how far income may stand in for health and education when it is low.

**Example 2 (hard): what the index says a year of life is worth.** Take goalposts of the kind the HDI now uses: life expectancy 20 to 85 years, so $I_h=(LE-20)/65$; income 100 to 75,000 dollars on a log scale, so $I_y=\ln(y/100)/\ln 750$. Hold the geometric mean fixed (education unchanged). Then $dI_y/I_y=-dI_h/I_h$, and since $dI_h=dLE/65$ and $dI_y=dy/(y\ln 750)$, one more year of life expectancy is worth an income change of

$$\Delta y\approx \frac{y\,\ln 750}{65}\cdot\frac{I_y}{I_h}.$$

Two illustrative countries. Poor: income 1,000 dollars, life expectancy 60, so $I_h=0.615$, $I_y=0.348$, and a year of life trades for about 58 dollars of annual income per head. Rich: income 40,000, life expectancy 80, so $I_h=0.923$, $I_y=0.905$, and the year trades for about 3,994 dollars. The ratio is about 69.

So an index built to escape money's wealth-dependence implies that a year of life is worth about 69 times as much income in the rich country. Martin Ravallion ("Troubling tradeoffs in the Human Development Index", *Journal of Development Economics*, 2012) pressed this kind of implied trade-off against the 2010 HDI: it weights longevity far less in poor countries than in rich ones. A defender answers that the index ranks countries; it does not price lives, and the dollar figure is an artefact of reading a ranking device as a valuation. The critic replies that a ranking device used to judge policy has implied prices whether or not anyone reads them off. That is the course's signature move: the value judgment is in the technique, chosen by whoever chose $r$ and the log.

## Watch out

- **You might think the HDI measures capabilities.** It measures achieved functionings (longevity, schooling) and a resource (income). The monk and the labourer have the same entry. Whether functionings are a good proxy for capability is an empirical claim, and it fails exactly where choice differs.
- **You might think the geometric mean is the correct mean and the arithmetic mean a mistake.** "The geometric mean penalizes imbalance" is a mathematical fact. "Imbalance should be penalized" is a normative claim about substitutability between health, knowledge and income. Keep them apart.
- **You might think rejecting preference metrics makes the approach paternalistic.** The capability/functioning distinction is built to answer that: the metric counts the option, not its use. Whether it succeeds once a list and weights are fixed is the open question, not a settled charge.

## One-liner

> Capabilities move welfare measurement from what people feel and own to what they can do and be, and then hand the hard choices to the index: the list, the weights and the substitutability parameter decide the ranking, and each is a value judgment.

## Problems

**P1 (🟢) *(Formal (a) · Exegetical (b).)*** Two illustrative regions have (health, education, income) indices R = (0.90, 0.50, 0.70) and S = (0.70, 0.70, 0.68).

(a) Rank them by the arithmetic and by the geometric mean of the three indices. Then, for R under each mean, find the rise in the income index (to first order) that offsets a 0.03 fall in R's education index.
(b) In one sentence, say what your two answers in (a) imply about how each mean treats income as a substitute for education.

**P2 (🟡) *(Formal (a) · Exegetical (b).)*** An **invented** brief from a provincial planning office, not the words of any real person:

> "North is plainly the more developed province. South's lead on the published index is an artefact of the geometric mean, which rewards balance for its own sake. Weight the dimensions by what matters most, survival, and North comes out ahead."

Indices (health, education, income): North = (0.82, 0.60, 0.66), South = (0.70, 0.74, 0.66).

(a) Compute both provinces' arithmetic and geometric means with equal weights, and with weights (1/2, 1/4, 1/4) on (health, education, income). For the weighted geometric mean use $\prod_k I_k^{w_k}$.
(b) Which indexing choice does the brief's conclusion actually depend on, and what value judgment does that choice encode? Two sentences.

**P3 (🔴, optional) *(Exegetical (a) · Evaluative (b).)*** An invented case: a close-knit community of deaf parents shares a signed language and a rich social life. Offered a device that would give their deaf infants hearing, most parents decline, on reflection and with full information, because they want their children raised fully inside the community and its language.

(a) Say what a fixed-list view like Nussbaum's, with "senses" among the central capabilities and each owed up to a threshold, implies about the children's capability. One sentence.
(b) Does the case work as a counterexample to measuring welfare against a fixed capability list? Name the premise it attacks, consider the capability-versus-functioning reply, and say whether the objection generalizes. Any verdict passes. 150 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a) · Exegetical (b).)*

(a) Arithmetic: R $=2.10/3=0.700$, S $=2.08/3=0.693$, so R ranks first. Geometric: R $=(0.90\times0.50\times0.70)^{1/3}=0.315^{1/3}=0.680$, S $=(0.70\times0.70\times0.68)^{1/3}=0.3332^{1/3}=0.693$, so S ranks first. Offsetting a 0.03 fall in education at R: under the arithmetic mean the MRS is 1, so income must rise by 0.030. Under the geometric mean the MRS is $I_y/I_e=0.70/0.50=1.4$, so income must rise by $0.03\times1.4=0.042$. (Holding the product fixed exactly gives $0.70\times0.50/0.47-0.70=0.045$; the first-order answer 0.042 is what was asked.)

**Must hit, strict (a):** R first under the arithmetic mean (0.700 vs 0.693); S first under the geometric mean (0.693 vs 0.680); offsets 0.030 and 0.042.

**Must hit, strict (b):** the arithmetic mean lets income replace education one-for-one wherever the region stands; the geometric mean makes the replacement dearer where education is already the weak dimension (here 1.4 points of income per point of education), because substitution is imperfect.

**Wrong turns:** using the MRS $I_e/I_y=0.71$, which inverts the direction (it gives the education needed to offset an income loss). Reading the reversal as one mean being wrong rather than as two substitutability judgments.

**Model answer:** (a) as above. (b) The arithmetic mean treats a point of income as always worth a point of education, while the geometric mean prices education by its scarcity, so at R, where education is weakest, a lost point costs 1.4 points of income.

---

**P2** *(Formal (a) · Exegetical (b).)*

(a) Equal weights: arithmetic North $=2.08/3=0.693$, South $=2.10/3=0.700$; geometric North $=0.687$, South $=0.699$. South leads under **both**. Weights (1/2, 1/4, 1/4): arithmetic North $=0.41+0.15+0.165=0.725$, South $=0.35+0.185+0.165=0.700$; geometric North $=0.82^{0.5}\,0.60^{0.25}\,0.66^{0.25}=0.718$, South $=0.70^{0.5}\,0.74^{0.25}\,0.66^{0.25}=0.699$. North leads under **both**.

**Must hit, strict (a):** the four equal-weight figures with South ahead under each mean; the four weighted figures with North ahead under each mean.

**Must hit, strict (b):** the conclusion depends on the **weights**, not the aggregation: switching means changes nothing, switching weights reverses the ranking. The weights encode the judgment that health (survival) counts for twice as much as education or income, a claim about the relative importance of capabilities that the capability approach itself does not settle.

**Wrong turns:** accepting the brief's diagnosis because the published index is geometric. Saying the dispute is about the list: the three dimensions are the same on both sides.

**Model answer:** (b) The ranking turns on the weights, since South leads under either mean with equal weights and North leads under either mean when health gets half the weight. The brief's real claim is that survival matters twice as much as knowledge or income, which may be defensible but has to be argued, not slipped in as a complaint about the geometric mean.

---

**P3** *(Exegetical (a) · Evaluative (b).)*

**Must hit, strict (a):** on a fixed-list threshold view, the children fall below the threshold on the senses capability (hearing), so the view registers a capability shortfall, which other capabilities, however well supplied, do not offset.

**Must hit, any verdict (b):**

- State the target: welfare measured against a list fixed in advance, with thresholds.
- Run it on the case: the list scores the community as deprived, while the parents, informed and reflective, judge their children's lives better as they are.
- Name the premise attacked: that the listed capabilities are goods for everyone regardless of their conception of the good (the perfectionism worry), or that capabilities on the list are not traded against one another.
- Weigh the capability-versus-functioning reply: it says the metric counts the option, not its use. Note where it strains: the infants do not choose; parents choose for them, and declining may also narrow the option later.
- Say whether it generalizes: to any list item a reflective community declines for its members (religious, cultural), or only to cases where someone else chooses for the person.

**Wrong turns:** treating the parents' choice as adaptive preference without argument; the case stipulates full information and reflection, which is what separates it from the adapted cases of 1.1. Assuming the case refutes all capability metrics: Sen's unlisted version is not its target.

**Model answer (b), one of several:** The case attacks the premise that a fixed list names goods for everyone whatever their conception of the good: the list scores these children as deprived, while informed, reflective parents judge their lives richer inside the community. The standard reply, that the metric counts capability, not functioning, does not reach here, because the infants make no choice and the option may not stay open. So the case is a counterexample to a fixed list applied to dependants, and it generalizes to every list item a community declines on its children's behalf. A Nussbaum-style defender can bite the bullet: capabilities owed to children are owed to them, not to their parents' conception of the good, and a shortfall is real even when its cause is loving. Whether that is respect for the child or perfectionism about the family is the crux.

</details>

## Flashback

**From Lesson [1.1](01-01-welfarism-and-preference-satisfaction.md) (Welfarism and preference satisfaction):** *(Exegetical.)* An **invented** case. A regional health agency surveys willingness to pay for a mobile eye clinic that would visit a remote valley twice a year. Three groups of answers stand out:

- (i) Many valley residents bid nothing because they believe, wrongly, that cataract surgery usually leaves patients blind.
- (ii) Older residents, accurately told what the surgery does, bid very little: they say failing sight is simply part of growing old in the valley, where no eye care has been available in their lifetimes.
- (iii) Residents of the next valley, fully informed, bid to keep the clinic away, because they resent the neighbouring valley being served first.

For each group, say in one sentence which of 1.1's three pressures on the preference-satisfaction view it illustrates, whether the informed-preference repair removes it, and which of Hausman and McPherson's two conditions for preferences being good evidence of welfare fails. Then, in one more sentence, say which group exposes the evidential view's weak point, and why.

<details>
<summary>Solution</summary>

**Must hit, strict:**

- **(i) Information.** The bid rests on a false belief, so the informed-preference repair removes it: count the bid these residents would make if they knew the surgery's real outcomes. Hausman and McPherson's second condition fails: on this question they are not good judges of what serves them, because they are misinformed.
- **(ii) Adaptation.** The residents are informed, so the informed-preference repair does not reliably remove the low bid; a preference shaped by a lifetime without care can survive full information. The second condition is what is in doubt: whether they are good judges of their own interests here.
- **(iii) Laundering.** The preference is informed and consistent, so the informed-preference repair leaves it standing; only a filter on its content removes it, and that filter must revise P2 (its satisfaction does not benefit them) or P1 (the benefit should not count socially). The first condition fails: the preference concerns another valley's lot, not the bidders' own interests.
- **The weak point is (ii).** To say the older residents are bad judges of their interests, rather than people who accurately value something other than sharp sight, needs an account of their welfare independent of their preferences. That independent account is what the evidential view was meant to avoid.

**Wrong turns:** calling (ii) misinformation; the case stipulates they were told accurately, and that is what separates adaptation from (i). Saying the informed-preference repair removes (iii): malice and resentment can be fully informed. Choosing (i) or (iii) as the weak point; there the evidential view has a clean diagnosis that needs no theory of welfare.

**Model answer:** (i) is the information problem: the informed-preference repair corrects it, and the residents fail the good-judge condition only because they are misinformed. (ii) is adaptation: the bidders are informed, so the repair does not reach them, and the doubt is whether they judge their own interests well. (iii) is a laundering case: the repair leaves it standing, and it fails the self-concern condition because it is about the other valley. Group (ii) exposes the weak point, because calling the older residents poor judges needs an account of their good that does not come from their preferences.

</details>

## Connections

- **Backward:** [1.1](01-01-welfarism-and-preference-satisfaction.md) and [1.2](01-02-money-and-happiness-as-measures.md) set the two failures, adaptation and wealth-dependence, that capabilities are built to avoid; Example 2 shows the second reappearing inside the index. [`ethics` 1.2](../../ethics/lessons/01-02-what-is-good-for-a-person.md) supplies the objective-list theory a fixed capability list resembles, and [`ethics` 4.1](../../ethics/lessons/04-01-aristotle-the-human-good.md) the Aristotelian idea of human functioning that Nussbaum draws on.
- **Forward:** [2.1](02-01-preference-and-revealed-preference.md) returns to preference and asks whether choice reveals it at all. [3.3](03-03-cost-benefit-analysis-and-the-value-of-a-life.md) prices a statistical life from willingness to pay, a rival way of putting a number on a year of life to Example 2's implied trade-off.
- **Sideways:** the power mean is the CES aggregator of [`grad-micro` 3.1](../../grad-micro/lessons/03-01-production-sets-technology.md), with dimensions in place of inputs. Its endpoints, the sum and the minimum, are the utilitarian and Rawlsian social welfare functions of [`grad-micro` 6.5](../../grad-micro/lessons/06-05-social-choice-welfare.md), aggregating across persons instead of dimensions; [`public-economics` 5.1](../../public-economics/lessons/05-01-the-linear-income-tax.md)'s welfare weights run between them. Capabilities as the currency of justice, against welfare and resources, is [`political-philosophy`](../../political-philosophy/syllabus.md) 2.5.
