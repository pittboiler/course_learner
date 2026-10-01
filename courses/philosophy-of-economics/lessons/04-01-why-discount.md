# Philosophy of Economics · Lesson 4.1: Why discount?

> ⏱ ~15 min · Module 4: Discounting the future · Builds on: [3.2 The limits of Pareto and the compensation tests](03-02-the-limits-of-pareto-and-the-compensation-tests.md), [3.3 Cost-benefit analysis and the value of a life](03-03-cost-benefit-analysis-and-the-value-of-a-life.md) · Unlocks: [4.2 The Ramsey equation and the Stern-Nordhaus debate](04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md), [4.3 Uncertainty, the long run, and future people](04-03-uncertainty-the-long-run-and-future-people.md)

## Why this matters

[3.3](03-03-cost-benefit-analysis-and-the-value-of-a-life.md) summed benefits and costs that all arrive at the same time. Most policies that matter do not work like that: a sea wall, a pension reform or a carbon tax costs now and pays off over a century. CBA then needs one more number, the rate at which a later dollar is marked down. Every economist discounts. The philosophical question is which reason for discounting is doing the work, because one of the standard reasons is a value judgment that the arithmetic hides.

## The idea

**Two things you already have.** [`philosophy-of-debt` 6.2](../../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md) gave the discount factor: at rate $r$, an amount $B$ due in $T$ years is worth $B/(1+r)^T$ today, its [present value](../reference.md#present-value). Its [2.3](../../philosophy-of-debt/lessons/02-03-justifying-interest.md) split a rate into pure time preference and a growth term, $r=\rho+\sigma g$. **Notation:** this course writes $\delta$ for pure time preference and $\eta$ for the elasticity of marginal utility, so the same split reads $r=\delta+\eta g$. (In [`grad-macro` 2.3](../../grad-macro/lessons/02-03-ramsey-cass-koopmans.md), $\delta$ is depreciation; not here.) Deriving and calibrating that equation is [4.2](04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md)'s. This lesson asks what each term is *for*.

**The key distinction.** You can discount two different things.

- **Discounting utility.** A unit of welfare in year $T$ counts $(1+\delta)^{-T}$ as much as a unit now, merely because it comes later. That is [pure time preference](../reference.md#pure-time-preference).
- **Discounting consumption.** A dollar in year $T$ counts less because of what it will do then. If people are richer, an extra dollar adds less welfare. With constant-elasticity utility and consumption growing at $g$, marginal utility falls by the factor $(1+g)^{-\eta T}$, so

$$D(T)=\underbrace{(1+\delta)^{-T}}_{\text{utility discount}}\times\underbrace{(1+g)^{-\eta T}}_{\text{growth discount}}.$$

*In words:* a future dollar weighs less for two separate reasons, that its owner counts less (the first factor) and that she needs it less (the second). The second is [growth discounting](../reference.md#growth-discounting), and it survives setting $\delta=0$. So "should we discount?" is two questions, and the [split](../reference.md#utility-and-consumption-discounting) is the course's signature move in one line: the growth factor is a forecast times a judgment about how fast welfare flattens with wealth; the utility factor is a judgment about whether time itself matters.

**The opportunity-cost argument** is a third reason, and it too is about consumption. Suppose a project costs 100,000 dollars now and yields 500,000 dollars of consumption in 50 years, and the market pays 4 percent a year. Invested at market, the 100,000 would become $100{,}000\times1.04^{50}=710{,}668$ dollars. Better, the [argument](../reference.md#opportunity-cost-argument) says, to invest at market and hand the future the larger sum, so discount projects at the market return. Yet with $\delta=0$, $g=1.8$ percent and $\eta=1$ (illustrative), the project's benefit is worth $500{,}000\times1.018^{-50}=204{,}918$ dollars today, double its cost. The two tests disagree. The argument is a compensation test across time, and it inherits [3.2](03-02-the-limits-of-pareto-and-the-compensation-tests.md)'s gap between [potential and actual compensation](../reference.md#potential-and-actual-compensation): the future is better off only if the alternative investment is actually made and actually passed on.

## The argument

The classic case against $\delta>0$ has three sources.

Sidgwick (*The Methods of Ethics*, 7th ed., 1907, Book IV ch. 1) put it from the universal standpoint:

> the time at which a man exists cannot affect the value of his happiness from a universal point of view

In Book III ch. 13 he stated a matching principle of prudence within one life, and explicitly allowed two grounds for preferring the present: greater certainty, and a future increase in one's "means or capacities of happiness". Both are reasons a *future good* may matter less. Neither says future *welfare* matters less.

Pigou (*The Economics of Welfare*, 1920, Part I ch. II §3) explained why people prefer present pleasures anyway:

> It implies only that our telescopic faculty is defective, and that we, therefore, see future pleasures, as it were, on a diminished scale.

He was explicit that he meant satisfactions, not the objects that yield them, and he concluded that people divide resources between present and future on the basis of an irrational preference, so that distant effort is starved. That is the [telescopic faculty](../reference.md#telescopic-faculty) argument. Frank Ramsey ("A Mathematical Theory of Saving", *Economic Journal*, 1928) set $\delta=0$ in his main model of a nation's saving and called discounting later enjoyments "ethically indefensible", a product of weak imagination.

**The impartiality argument, reconstructed.**

1. **P1.** Policy should be judged by its effects on people's welfare. *(Normative: the welfarism of [1.1](01-01-welfarism-and-preference-satisfaction.md).)*
2. **P2.** A unit of welfare is worth the same whenever it occurs. *(Normative: Sidgwick's impartiality.)*
3. **P3.** People's preference for earlier satisfaction is a defect of perception, not evidence that earlier welfare is worth more. *(Empirical and conceptual: Pigou.)* *In words:* the impatience we see in markets is a bias, so it cannot license a social $\delta$.
4. **P4.** A social discount rate with $\delta>0$ weights welfare less merely for coming later. *(Conceptual.)*

∴ **C.** The social $\delta$ should be zero; any positive discount rate must be earned by growth, uncertainty or opportunity cost, all of them claims about consumption.

**The case for $\delta>0$, at full strength.**

- **Extinction risk.** If humanity might not be there, expected welfare in year $T$ is lower. The Stern Review (2006) set $\delta=0.1$ percent per year on this ground, which implies roughly a 10 percent chance that humanity does not survive a century. This is not really a rival: Sidgwick allowed uncertainty, including about whether posterity will exist. It is impartiality applied to expectations.
- **Impossibility results.** Over infinite streams, impartiality collides with other axioms. Koopmans ("Stationary Ordinal Utility and Impatience", *Econometrica*, 1960) showed that preferences satisfying continuity, stationarity and a few other conditions must display impatience. Diamond (1965) showed that no ordering of infinite streams is complete, continuous, strongly Paretian and treats all generations equally. The defender of $\delta=0$ must give up an axiom.
- **Excessive saving.** Kenneth Arrow ("Discounting, Morality, and Gaming", 1999) argued that with $\delta=0$ the optimal policy demands savings rates no one could accept from the present generation. Example 2 makes this exact.
- **Agent-relative partiality.** Arrow's remedy was Scheffler's agent-centred prerogative ([`ethics` 1.4](../../ethics/lessons/01-04-integrity-and-demandingness.md)): each generation may give its own welfare more weight than its successors'. The [excessive-saving argument](../reference.md#excessive-saving-argument) then grounds $\delta>0$ in a permission, not in a perceptual error.

Whether a *lender* may charge for waiting is a different question, about the justice of interest, and it belongs to [`philosophy-of-debt` 2.3](../../philosophy-of-debt/lessons/02-03-justifying-interest.md).

**Where the argument is weakest.** P2, in the infinite horizon. A critic in Arrow's line says that impartiality across unboundedly many generations makes the present a mere instrument of an endless future, the demandingness objection to utilitarianism ([`ethics` 1.4](../../ethics/lessons/01-04-integrity-and-demandingness.md)) stretched across time. A defender of P2 replies that the demand can be tamed without discounting welfare: a larger $\eta$ makes saving for richer successors worth less ([4.2](04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md)); and Sidgwick's impartiality is a criterion of value, which need not dictate a savings rule.

## The two discounts

![Three falling curves of the weight on one future dollar of consumption over 200 years, for pure time preference of 0, 1 and 2 percent, with growth of 1.8 percent and eta equal to 1. Even the zero curve falls, to 0.118 at 120 years; the 1 percent curve is 0.036 there. A flat dashed line at 1 shows the weight on future utility when delta is zero](assets/04-01-fig1.svg)

The dashed line is what $\delta=0$ says about welfare. The solid blue curve is what it says about dollars.

## Worked examples

**Example 1 (clean): the two factors.** Illustrative: a harm will cost people 120 years from now 2 million dollars of consumption. Take $\eta=1$ and $g=1.8$ percent.

- $\delta=0$: $D=1.018^{-120}=0.11756$, present value $235{,}124$ dollars.
- $\delta=1$ percent: the utility factor $1.01^{-120}=0.30299$ multiplies in, $D=0.11756\times0.30299=0.03562$, present value $71{,}241$ dollars.

In logs, $\delta$ supplies $\ln 1.01/(\ln 1.01+\ln 1.018)=35.8$ percent of the discount; growth supplies the rest. The combined rate is $1.01\times1.018-1=2.818$ percent. An impartialist and a defender of $\delta=1$ percent agree that the harm is worth far less than 2 million today. They disagree about a factor of $0.30299$, about 3.3 times, and only that factor is a judgment about time itself.

**Example 2 (hard): Arrow's excessive saving.** An invented nation's only wealth is a stock $W$ that grows by a factor $R$ per 30-year generation if left unconsumed. Generation $t=0,1,\dots,N-1$ consumes $c_t$, so $\sum_t c_t/R^t=W$. A planner maximizes $\sum_t\beta^t\ln c_t$, with $\beta=(1+\delta)^{-30}$. The first-order conditions give $c_t=(\beta R)^t c_0$, so

$$c_0=\frac{W}{\sum_{t=0}^{N-1}\beta^t}.$$

*In words:* under log utility, $R$ drops out, and the first generation's share depends only on how many successors it must weigh, and how much.

- $\delta=0$: the first generation eats $W/N$: half with two generations, a tenth with ten, a hundredth with a hundred, and nothing in the limit. Each successor consumes $R$ times its predecessor ($R=1.03^{30}=2.427$ at 3 percent a year), so the poorest generation saves the most for the richest.
- $\delta=1$ percent a year: $\beta=0.7419$, and the share tends to $1-\beta=25.8$ percent. At 2 percent, $\beta=0.5521$ and the share tends to $44.8$ percent.

Here is the strain. The model is stark (no one after the first has resources of their own), so even $\delta>0$ demands heavy saving. But only $\delta=0$ demands *everything* as the horizon lengthens: impartiality plus an open future turns the present into a means. The defender's options are the ones above: accept it, raise $\eta$, or call P2 a criterion and not a rule.

## Watch out

- **You might think $\delta=0$ means "don't discount", but actually it means "don't discount welfare".** In Example 1 a $\delta=0$ planner still marks the harm down to about 12 cents on the dollar. Treating a conceptual claim (what is discounted) as a quantitative one (how much) is the commonest confusion in this debate.
- **You might think Pigou's diagnosis settles the social rate, but actually it is an empirical and conceptual claim about individual desire.** That impatience is a perceptual defect does not by itself say what the state owes the future; that is a further normative premise. Pigou's defect is also not [2.2](02-02-the-behavioural-challenge.md)'s present bias: a constant 5 percent discount, his own example, is time-consistent and still, on his view, irrational.
- **You might think the opportunity-cost argument is neutral bookkeeping, but actually it is a potential-compensation test.** Like Kaldor-Hicks it licenses a loss to the future on the strength of a transfer that may never be made.

## One-liner

> A future dollar can count less because its owner will be richer, because the money could earn more elsewhere, or because later welfare counts less as such; only the last is pure time preference, and Sidgwick, Pigou and Ramsey denied it while Koopmans, Diamond and Arrow showed what denying it costs.

## Problems

**P1 (🟢) *(Formal (a)–(b) · Exegetical (c).)*** Illustrative: a policy would spare people 150 years from now a loss of 300,000 dollars of consumption. Take $\eta=1$ and $g=1.2$ percent a year. (a) Compute the consumption discount factor and the present value of the loss at $\delta=0$ and at $\delta=1.5$ percent. (b) What share of the log discount at $\delta=1.5$ percent comes from pure time preference, and by what factor do the two present values differ? (c) A columnist writes: "With $\delta=0$, the future counts fully, so this loss is worth 300,000 dollars today." Say in two sentences what is wrong.

**P2 (🟡) *(Exegetical (a)–(b).)*** Four invented remarks from a city council debate on a levee whose benefits arrive over the next century:

> (i) "Our grandchildren will be richer than we are, so a dollar will matter less to them."
> (ii) "A pleasure is no smaller for being felt in 2120 rather than today."
> (iii) "There may be no one living here in 2300, so benefits then should count for less."
> (iv) "This money could be invested at 5 percent instead, leaving our descendants more."

(a) For each, say whether it is a reason about discounting *utility* (the $\delta$ factor) or about discounting *consumption*, and whether it supports or opposes discounting. One line each. (b) Which of these remarks does Sidgwick's principle of impartiality across time permit, given the two grounds he allows? Two sentences.

**P3 (🔴, optional) *(Formal (a) · Evaluative (b).)*** Use Example 2's model with $N=3$ generations, log utility and $R=1.025^{30}=2.0976$. (a) Compute the first generation's consumption share, and the ratio $c_2/c_0$ of the third generation's consumption to the first's, at $\delta=0$ and at $\beta=0.5$ per generation. (b) **Steelman and reply.** State Arrow's excessive-saving argument against $\delta=0$ at its strongest, then give the best reply a defender of $\delta=0$ can make, and say whether the objection generalizes beyond discounting. Any verdict; 150 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b), strict · Exegetical (c), strict.)*

(a) $D=(1+\delta)^{-150}(1.012)^{-150}$. At $\delta=0$: $1.012^{-150}=0.16708$, present value $300{,}000\times0.16708=50{,}124$ dollars. At $\delta=1.5$ percent: the utility factor is $1.015^{-150}=0.10718$, so $D=0.16708\times0.10718=0.01791$ and the present value is $5{,}372$ dollars.

(b) Share from $\delta$: $\ln1.015/(\ln1.015+\ln1.012)=0.014889/(0.014889+0.011929)=55.5$ percent. The present values differ by $1.015^{150}=9.33$ times.

**Must hit, strict:**

- Factors 0.16708 and 0.01791; present values about 50,100 and 5,370 dollars.
- About 55.5 percent of the log discount from $\delta$; ratio about 9.33.
- (c): $\delta=0$ removes only the utility discount. Growth still marks the loss down to about a sixth, because the people who suffer it will be richer and a dollar will add less to their welfare; "counts fully" is true of their welfare, not of their dollars.

**Wrong turns:** adding the rates and treating $\delta=0$ as giving no discount at all; computing the share of the summed rates instead ($1.5/2.7=55.6$ percent), which is acceptable here only if labelled as an approximation; answering (c) by saying growth is uncertain, which is a different objection.

**Model answer (c):** The columnist confuses discounting welfare with discounting consumption: $\delta=0$ says a unit of their welfare counts as much as ours, not that a dollar does. With 1.2 percent growth and $\eta=1$, those people will be about six times richer, so the 300,000-dollar loss is worth about 50,000 dollars today even with no pure time preference.

---

**P2** *(Exegetical (a)–(b), strict.)*

**Must hit, strict (a):**

- (i) Consumption: the growth term. Supports discounting.
- (ii) Utility: opposes $\delta>0$ (Pigou's and Sidgwick's point).
- (iii) Utility in form, since it lowers the weight on future welfare, and supports $\delta>0$; but as a hazard rate it discounts *expected* welfare (Stern's extinction rationale), not welfare as such. Credit either label if the second point is made.
- (iv) Consumption: the opportunity-cost argument. Supports discounting at the market return.

**Must hit, strict (b):** Sidgwick permits (i) and (iii): an increase in "means or capacities of happiness" covers (i), and greater certainty, including about whether posterity will exist, covers (iii). (iv) concerns the yield on a good rather than when welfare occurs, so it does not conflict with his principle either; what he forbids is (ii)'s denial, preferring a welfare because it is earlier.

**Wrong turns:** classifying (iii) as a consumption reason because it mentions benefits; reading Sidgwick as forbidding all discounting, when he explicitly allowed both grounds.

**Model answer:** (a) (i) consumption, for; (ii) utility, against; (iii) utility in form, for, though as a survival hazard it discounts expected welfare rather than welfare as such; (iv) consumption, for. (b) Sidgwick allows a future good to count less for its uncertainty or because one's means will have grown, which covers (iii) and (i), and (iv) is about yields, not the timing of welfare, so it does not conflict either. He forbids only counting welfare less merely because it is later, the view (ii) rejects.

---

**P3** *(Formal (a), strict · Evaluative (b), any verdict.)*

(a) $c_0=W/(1+\beta+\beta^2)$ and $c_t=(\beta R)^t c_0$.

- $\delta=0$ ($\beta=1$): share $1/3$; $c_2/c_0=R^2=2.0976^2=4.40$.
- $\beta=0.5$ (about 2.34 percent a year): share $1/(1+0.5+0.25)=1/1.75=0.5714$; $c_2/c_0=(0.5\times2.0976)^2=1.0488^2=1.10$.

**Must hit, strict (a):** shares 0.333 and 0.571; ratios about 4.40 and 1.10.

**Must hit, any verdict (b):**

- **The steelman:** with $\delta=0$ the first generation's share falls toward zero as successors multiply, and in a growing economy the poorest generation saves most for the richest; morality cannot demand that, so each generation may weigh itself more (Arrow's appeal to Scheffler's prerogative).
- **A reply that engages it:** raise $\eta$, which tames saving while keeping welfare impartial; or treat impartiality as a criterion of value, not a savings rule; or accept the demand. Say what each costs.
- **Generalization:** the objection is the demandingness objection to impartial consequentialism, so if it works across time it should work across persons now; or say why time differs.

**Wrong turns:** treating the answer to (a) as showing $\delta=0$ is "irrational", when it shows what $\delta=0$ demands; replying with extinction risk, which already lies inside impartiality and does not answer demandingness.

**Model answer (b), one of several:** At its strongest: an impartial planner with $\delta=0$ asks the first generation to consume a third with three generations and nothing as the horizon opens, while its successors grow four times richer. A morality that makes the poorest generation the instrument of the richest asks too much, so each generation may give its own welfare extra weight, as Scheffler lets a person favour her own projects. The best reply keeps $\delta=0$ and attacks the model: with $\eta$ above one, saving for richer successors buys little welfare and the demand shrinks without any generation counting less. The objection does generalize: it is the demandingness objection to impartial welfarism, so if it licenses favouring ourselves over our descendants, it licenses favouring ourselves over distant contemporaries too. Whether that is a cost or a feature is where the two sides part.

</details>

## Flashback

**From Lesson [3.3](03-03-cost-benefit-analysis-and-the-value-of-a-life.md) (Cost-benefit analysis and the value of a life):** *(Formal (a) · Exegetical (b)–(c).)* An **invented** memo from a county parks department, not the words of any real person or agency:

> "(i) Our survey finds that lake users would pay 55 dollars a year to cut their annual risk of drowning by 1 in 100,000, so each user values her own life at 5.5 million dollars. (ii) A lifeguard programme that prevents two drownings a year is therefore worth 11 million dollars a year, and we should fund it if it costs less. (iii) Users from the wealthier shoreline towns gave higher answers than users from the inland towns, so the first lifeguard posts should go to the shoreline beaches."

(a) Check the memo's two numbers, and say in one sentence what is wrong with "values her own life at 5.5 million dollars". (b) Split sentence (ii) into its empirical, conceptual and normative steps, one line each. (c) Which premise of CBA, as 3.3 reconstructed it, produces sentence (iii), and what single parameter would change the recommendation? Two sentences.

<details>
<summary>Solution</summary>

(a) $\mathrm{VSL}=\dfrac{55}{1/100{,}000}=55\times 100{,}000=5{,}500{,}000$ dollars, and two deaths prevented are worth $2\times 5.5=11$ million dollars a year. Both numbers are right.

**Must hit, strict:**

- (a) The arithmetic checks out. The error is conceptual: 5.5 million is a marginal rate of substitution between money and small risks, scaled to one expected death. It is not what any user would pay to escape certain death, nor what she would accept to die.
- (b) Empirical: users answer 55 dollars for a 1-in-100,000 cut. Conceptual: that answer *is* their valuation of the risk, so it measures the programme's benefit to them (premise 1). Normative: benefits should be summed at equal weight and the programme funded whenever the sum exceeds its cost (premises 2 and 3).
- (c) Premise 2, the unweighted sum, acting on the [wealth dependence](03-03-cost-benefit-analysis-and-the-value-of-a-life.md) of willingness to pay that premise 1 builds in: richer users can pay more for the same cut in risk, so their safety counts for more. Distributional weights $g_i\propto c_i^{-\eta}$ with $\eta>0$ weight the inland users' answers up and can reverse the ranking; unweighted CBA is the choice $\eta=0$.

**Wrong turns:** dividing 55 by 100,000 and getting 0.00055 dollars. Calling "each user values her life at 5.5 million" a survey finding: only the 55-dollar answer is empirical. In (c), blaming the WTP/WTA choice: both towns are answering the same WTP question, and the gap comes from income, not from the measure.

**Model answer:** (a) 5.5 million dollars and 11 million dollars are both correct; but 5.5 million is the rate at which users trade money for a small risk, not the worth of a life or a price anyone would accept for one. (b) Empirical: users say they would pay 55 dollars for the cut. Conceptual: that stated amount is their benefit. Normative: equal-weighted benefits above cost license funding. (c) Premise 2's equal dollar weights, applied to willingness to pay that rises with wealth, make a shoreline user's safety count for more. Weighting each answer by $c_i^{-\eta}$ with a large enough $\eta$ changes which beaches come first.

</details>

## Connections

- **Backward:** [3.3](03-03-cost-benefit-analysis-and-the-value-of-a-life.md)'s CBA needed one rate to compare dates; [3.2](03-02-the-limits-of-pareto-and-the-compensation-tests.md)'s potential compensation reappears as the opportunity-cost argument. [`philosophy-of-debt` 6.2](../../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md) supplied the discount factor and [2.3](../../philosophy-of-debt/lessons/02-03-justifying-interest.md) Ramsey's charge, now set beside Sidgwick and Pigou. [2.2](02-02-the-behavioural-challenge.md)'s present bias is the other departure from exponential discounting.
- **Forward:** [4.2](04-02-the-ramsey-equation-and-the-stern-nordhaus-debate.md) derives $r=\delta+\eta g$ and asks who should choose $\delta$ and $\eta$; [4.3](04-03-uncertainty-the-long-run-and-future-people.md) takes up uncertainty about the rate itself and what discounting cannot say about obligations to future people.
- **Sideways:** the Keynes-Ramsey rule behind the growth term is [`grad-macro` 2.3](../../grad-macro/lessons/02-03-ramsey-cass-koopmans.md); Scheffler's prerogative and the demandingness objection are [`ethics` 1.4](../../ethics/lessons/01-04-integrity-and-demandingness.md); time inconsistency and commitment across selves are [`economics-of-debt` 8.1](../../economics-of-debt/lessons/08-01-forgiveness-commitment-and-the-fresh-start.md); population ethics and the far future are [`decision-theory`](../../decision-theory/syllabus.md) 5.3-5.4. For P3's method, see [steelmanning](../../philosophical-method/lessons/04-02-steelmanning-and-the-burden-of-proof.md).
