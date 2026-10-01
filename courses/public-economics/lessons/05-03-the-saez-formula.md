# Public Economics · Lesson 5.3: The Saez formula

> ⏱ ~15 min · Module 5: Optimal income taxation · Builds on: [5.1 The linear income tax](05-01-the-linear-income-tax.md), [5.2 The Mirrlees problem](05-02-the-mirrlees-problem.md), [2.4 The marginal cost of public funds](02-04-second-best-and-the-marginal-cost-of-public-funds.md) · Unlocks: [5.4 Participation and the EITC](05-04-participation-and-the-eitc.md), [6.1 Atkinson-Stiglitz](06-01-atkinson-stiglitz.md)

## Why this matters

[5.2](05-02-the-mirrlees-problem.md) solved the nonlinear tax problem as mechanism design, and the answer came out in terms of an unobservable skill distribution. No finance ministry can use that. Emmanuel Saez (2001, *Review of Economic Studies*) rewrote the top of the optimal schedule in three numbers that tax data can deliver: how thick the top tail of the income distribution is, how strongly top earners' taxable income responds to their tax rate, and how much the government values a dollar in their hands. The result, $\tau=(1-g)/(1-g+ae)$, is the formula behind every modern argument about the top marginal rate, and the method behind it, perturb the schedule and add up three effects, runs through the rest of this course.

## The idea

Start from any top rate and ask one question: *should it go up by one point?* Three things happen.

1. **Mechanical effect.** Everyone in the top bracket pays one cent more on each dollar *above the threshold*. Someone earning 1 million dollars in a bracket starting at 400 thousand pays 6,000 dollars more, before anyone changes behavior.
2. **Behavioral effect.** Top earners report a little less taxable income: they work less, shift income into lighter-taxed forms, or bargain less hard for pay. Each dollar they stop reporting costs the treasury the *whole* top rate, not just the extra point.
3. **Welfare effect.** Top earners lose the mechanical 6,000 dollars. How much that loss counts against the revenue depends on the social weight on their marginal dollar.

At the optimum, the three effects cancel. The mechanical gain grows with the distance between the typical top income and the threshold. The behavioral loss grows with the rate, with the responsiveness, and with how much income sits in the bracket. A thick tail (very rich people far above the threshold) makes the mechanical gain large relative to the income that is doing the responding, so it pushes the optimal rate *up*.

## The formal version

**Setup.** Income above a threshold $\bar z$ is taxed at a constant marginal rate $\tau$. Normalize the number of taxpayers in the bracket to one, and let $z_m$ be their mean taxable income. Assume no income effects, so each top earner's taxable income $z$ depends only on the net-of-tax rate $1-\tau$, with the [elasticity of taxable income](../reference.md#elasticity-of-taxable-income)

$$e=\frac{1-\tau}{z}\,\frac{\partial z}{\partial(1-\tau)}>0,$$

taken to be the same at every income in the bracket (Saez's formula uses the income-weighted average). Let $g\ge0$ be the [social marginal welfare weight](../reference.md#social-marginal-welfare-weights) on top earners: the social value of one more dollar in their hands, relative to one more dollar of public revenue. As everywhere in this course, weights are normalized so that they average one over the population, and $g$ is an *input*.

**The perturbation.** Raise $\tau$ by $d\tau$ in the top bracket only (a [tax perturbation](../reference.md#tax-perturbation); Figure 1).

$$\begin{aligned}
dM &= (z_m-\bar z)\,d\tau &&\text{(mechanical)}\\
dB &= -\frac{\tau}{1-\tau}\,e\,z_m\,d\tau &&\text{(behavioral)}\\
dW &= -g\,(z_m-\bar z)\,d\tau &&\text{(welfare)}
\end{aligned}$$

*In words:* the mechanical gain is the extra point on income above the threshold. Each earner cuts $z$ by $e\,z\,d\tau/(1-\tau)$, and every lost dollar costs revenue $\tau$. Top earners' welfare loss is just the mechanical amount, because by the envelope theorem ([`grad-micro` 1.4](../../grad-micro/lessons/01-04-envelope-theorem-duality.md)) their own re-optimization has no first-order effect on their utility.

**The formula.** Define the [Pareto parameter](../reference.md#pareto-parameter) $a=z_m/(z_m-\bar z)$. Setting $dM+dB+dW=0$ and solving,

$$\tau^*=\frac{1-g}{1-g+a\,e}.$$

*In words:* the [Saez formula](../reference.md#saez-formula) sets the top rate from three sufficient statistics: the rate falls with the elasticity $e$, falls with $a$ (a thinner tail), and falls with the weight $g$.

**Why $a$ is a Pareto parameter.** If top incomes follow a Pareto distribution, with density proportional to $z^{-(1+a)}$, then the mean above any threshold is $z_m=a\bar z/(a-1)$, so $z_m/(z_m-\bar z)=a$ at *every* threshold. *In words:* for a Pareto tail, the average top earner is a fixed multiple of the threshold, and $a$ does not depend on where the top bracket starts. Measured US top incomes fit this well. Saez, Slemrod and Giertz (2012, *Journal of Economic Literature*), drawing on Piketty and Saez's series, put $a$ at about 2 in the 1970s and about 1.5 in recent years, as top incomes pulled away. Note $a\ge1$, and $a=1$ exactly when $\bar z=0$: the bracket is the whole population, and the formula collapses to [5.1](05-01-the-linear-income-tax.md)'s linear tax $(1-\bar g)/(1-\bar g+e)$.

**Objectives.** The formula is solved for any weight; the choice of weight is not this course's to make ([`political-philosophy`](../../political-philosophy/syllabus.md), [`philosophy-of-economics`](../../philosophy-of-economics/syllabus.md)).

- $g=0$: a maximin government, or any government that puts negligible weight on the marginal dollar of the very rich. Then $\tau^*=1/(1+ae)$, the [revenue-maximizing rate](../reference.md#revenue-maximizing-rate) for the top bracket.
- $g>0$: a utilitarian with concave utility gives top earners a small positive weight, and the rate falls below the revenue peak.

One efficiency statement needs no weights: any top rate above $1/(1+ae)$ is Pareto-dominated, because cutting it raises revenue *and* leaves top earners better off.

**Antecedent and assumptions.** Diamond (1998, *American Economic Review*) found, in a Mirrlees model with quasilinear utility and a Pareto-tailed skill distribution, that optimal marginal rates rise toward a positive constant at the top. Saez restated the result in terms of observable incomes and elasticities. The clean form above assumes no income effects; with them, $ae$ splits into compensated and uncompensated elasticities. It also assumes that income that disappears from the top bracket is lost to the treasury, not shifted to another tax base (P3 relaxes this).

## Picture

![Tax owed plotted against taxable income. The schedule has rate 0.3 up to 400 thousand dollars and 0.5 above. The reformed schedule rises at 0.6 above 400. At the mean top income of 1,000 thousand the vertical gap between the two schedules, the mechanical gain, is 60 thousand; an arrow shows the top earner reducing income by 60 thousand, costing 30 thousand in revenue](assets/05-03-fig1.svg)

The reform rotates the schedule upward only above $\bar z$, so the mechanical gain at income $z$ is $d\tau\,(z-\bar z)$: zero at the threshold, largest for the richest. The rate change here is exaggerated to 10 points so the gap is visible. At a 50 percent rate with $e=0.3$, the typical top earner's response gives back half of the mechanical gain: net revenue is 30 thousand, not 60.

## Worked examples

**Example 1 (the three effects, then the rate).** Invented bracket: $\bar z=400$ thousand dollars, mean income in the bracket $z_m=1$ million, $e=0.3$. Then $a=1000/600=5/3$ and $ae=0.5$.

Per top taxpayer, raise the rate by one point:

| current $\tau$ | mechanical $dM$ | behavioral $dB$ | net revenue |
|---|---|---|---|
| 0.50 | 6,000 | −3,000 | 3,000 |
| 2/3 | 6,000 | −6,000 | 0 |
| 0.75 | 6,000 | −9,000 | −3,000 |

The behavioral row is $\frac{\tau}{1-\tau}\times0.3\times1{,}000{,}000\times0.01$. The mechanical gain is fixed. The behavioral loss scales with $\tau/(1-\tau)$ and doubles between 0.5 and 2/3.

- $g=0$: $\tau^*=1/1.5=2/3$, the rate at which the net revenue from the next point is zero.
- $g=1/4$: $\tau^*=0.75/1.25=0.6$. Check at 0.6: $dM=6{,}000$, $dB=-4{,}500$, $dW=-1{,}500$, summing to zero.
- $g=1/2$: $\tau^*=0.5/1=0.5$, so today's 50 percent rate is optimal exactly when top earners' marginal dollar counts half as much as a public dollar.

The same table prices the top bracket's [marginal cost of public funds](../reference.md#marginal-cost-of-public-funds). At 50 percent, top earners give up 6,000 dollars for every 3,000 the treasury nets, so the MCPF is 2. That is [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md)'s $1/\big(1-e\tau/(1-\tau)\big)$ with $e$ replaced by $ae$: the top bracket behaves like a whole-economy tax base whose elasticity is magnified by $a$.

**Example 2 (why the fight is over $e$).** Keep the same bracket, $a=5/3$. Saez, Slemrod and Giertz (2012) conclude that there are no truly convincing estimates of the long-run elasticity of taxable income, and that the best available ones lie between 0.12 and 0.40. Across that range:

| $e$ | $\tau^*$ at $g=0$ | $\tau^*$ at $g=1/4$ |
|---|---|---|
| 0.12 | 0.833 | 0.789 |
| 0.40 | 0.600 | 0.529 |

The data's uncertainty about $e$ moves the revenue-maximizing top rate by 23 points, far more than moving the welfare weight from 0 to 1/4 does (4 to 7 points). Three points follow.

- **$e$ is estimated from reforms.** A top-rate change treats top earners and leaves the upper-middle untreated, so the design is a difference-in-differences or an event study ([`econometrics` 4.3](../../econometrics/lessons/04-03-difference-in-differences.md), [4.4](../../econometrics/lessons/04-04-event-studies-dynamic-did.md)). Its weak point is parallel trends, because top incomes have their own secular trend.
- **$e$ is not a deep parameter.** Much of the measured response is avoidance: relabeling, retiming and shifting income to lighter-taxed forms. Saez, Slemrod and Giertz stress that the elasticity depends on the tax system, so a large $e$ may call for broadening the base rather than lowering the rate. Closing an avoidance channel lowers $e$ and raises $\tau^*$.
- **Not every response costs the same.** Piketty, Saez and Stantcheva (2014, *AEJ: Economic Policy*) split $e$ into three elasticities: real labor supply, tax avoidance, and compensation bargaining. Pay won by bargaining is partly taken from others, so a higher rate that curbs it costs less than the formula counts, and the optimal top rate rises.

## Watch out

- **You might think a thicker top tail calls for a lower rate, but actually it calls for a higher one.** A thicker tail means a *lower* $a$: much of top income lies far above the threshold, so the mechanical gain is large relative to the income that responds.
- **You might think $g=0$ means the rich do not count, but actually it only prices their marginal dollar at zero relative to public revenue.** It delivers the revenue-maximizing top rate, and rates above that rate make everyone worse off, whatever the weights.
- **You might think this contradicts [5.2](05-02-the-mirrlees-problem.md)'s zero rate at the top, but look at what "top" means.** That result concerns the single highest earner of a *bounded* distribution. The Saez formula sets the rate on a whole bracket of an income distribution whose measured tail shows no upper bound.
- **You might think $e$ is a fact about preferences, but actually it is partly a fact about the tax code.** Its avoidance component is a policy choice, and shifted income that lands in another tax base changes the formula (P3).

## One-liner

> Raise the top rate a point and add three effects: the mechanical gain $d\tau(z_m-\bar z)$, the behavioral loss $\frac{\tau}{1-\tau}e z_m d\tau$, and the welfare cost $g\,dM$. They cancel at $\tau=(1-g)/(1-g+ae)$.

## Problems

**P1 (🟢) *(Formal (a)–(b) · Exegetical (c).)*** Invented country: the top bracket starts at 300 thousand dollars, the mean income of taxpayers in the bracket is 1.2 million, the elasticity of taxable income is $e=0.5$, and there are no income effects. (a) Compute the Pareto parameter $a$. (b) Compute the optimal top rate for $g=0$ and for $g=0.3$. (c) For each event, name the sufficient statistic it moves, the direction, and which way the optimal top rate moves: (i) a loophole that let top earners relabel wages as lightly taxed capital gains is closed; (ii) a boom raises incomes far above the threshold, leaving the threshold and the number of top taxpayers unchanged; (iii) a new government puts more social weight on top earners' marginal dollar.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** An invented country's combined top marginal rate is 50 percent. Top incomes have $a=2.5$ and the government's weight on top earners is $g=0.2$. (a) What elasticity of taxable income would make 50 percent optimal? (b) The best estimate is $e=0.2$. Find the optimal top rate, and compute the top bracket's marginal cost of public funds at the current 50 percent rate. (c) The estimate of $e$ comes from a difference-in-differences comparing top earners with the upper-middle class around a cut in the top rate. Name one threat to identification specific to top incomes and the direction in which it biases the estimated $e$. Two sentences.

**P3 (🔴, optional) *(Formal.)*** Top earners have $a=2$ and total elasticity $e=0.4$, but only $e_r=0.15$ is a real change in income; the other $e_s=0.25$ is income shifted into retained corporate earnings, taxed at $t_s=0.2$. Take $g=0$ and no income effects. (a) Redo the perturbation and show that $\tau^*=(1-g+a\,t_s e_s)/(1-g+ae)$. (b) Compute the optimal top rate three ways: ignoring the shifting (treating all of $e$ as lost revenue), accounting for it, and after the shifting channel is closed so that $e=e_r$.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) · Exegetical (c).)*

(a) $a=z_m/(z_m-\bar z)=1200/900=4/3$.

(b) $ae=2/3$. With $g=0$: $\tau^*=1/(1+2/3)=0.6$. With $g=0.3$: $\tau^*=0.7/(0.7+2/3)=21/41\approx0.512$.

**Must hit, strict (c):**

- (i) Moves $e$ down (an avoidance channel is closed), so $\tau^*$ rises.
- (ii) Raises $z_m$ with $\bar z$ fixed, so $a=z_m/(z_m-\bar z)$ falls (the tail thickens), and $\tau^*$ rises.
- (iii) Raises $g$, so $\tau^*$ falls.

**Wrong turns:** computing $a$ as $z_m/\bar z=4$, which is the ratio of the mean to the threshold, not to the mean's excess over it; in (ii), reasoning that more rich people means more behavioral response and a lower rate, when the fatter tail lowers $a$ and raises the rate.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) Rearranging $\tau/(1-\tau)=(1-g)/(ae)$ gives $e=(1-g)(1-\tau)/(a\tau)=0.8\times0.5/(2.5\times0.5)=0.32$.

(b) With $e=0.2$: $ae=0.5$ and $\tau^*=0.8/(0.8+0.5)=8/13\approx0.615$, so the rate should rise. The top bracket's MCPF at 50 percent is

$$\frac{1-\tau}{1-\tau-ae\tau}=\frac{0.5}{0.5-0.25}=2.$$

Each extra dollar of net revenue from the top bracket costs top earners 2 dollars. That is below the $1/g=5$ at which a government with $g=0.2$ would stop raising the rate, which is why the rate rises.

**Must hit, strict (c):**

- Accept either of: (1) a differential secular trend: top incomes were rising relative to the upper-middle for reasons unrelated to taxes, so parallel trends fails, and around a rate *cut* the trend is credited to the cut, biasing $e$ upward; (2) mean reversion: people selected as top earners in the base year include many with transitory highs, whose incomes fall back afterwards, which masks the response to a cut and biases $e$ downward.
- The direction must follow from the stated mechanism.

**Wrong turns:** in (a), dropping the $1-g$ factor, which gives the revenue-maximizing elasticity 0.4 instead; in (c), naming a generic threat (such as "omitted variables") without saying what is special about top incomes.

**Model answer (c):** Top incomes have been pulling away from the upper-middle for reasons unrelated to taxes, so parallel trends fails. A difference-in-differences around a top-rate cut credits that trend to the cut and overstates $e$.

---

**P3** *(Formal.)*

(a) The mechanical and welfare effects are unchanged: $dM=(z_m-\bar z)\,d\tau$ and $dW=-g\,dM$. Real income falls by $e_r z\,d\tau/(1-\tau)$ and costs revenue $\tau$ per dollar. Shifted income falls from the top bracket by $e_s z\,d\tau/(1-\tau)$ but reappears in the corporate base, so it costs only $\tau-t_s$ per dollar. So

$$dB=-\frac{\tau e_r+(\tau-t_s)e_s}{1-\tau}\,z_m\,d\tau=-\frac{\tau e-t_s e_s}{1-\tau}\,z_m\,d\tau.$$

Setting $dM+dB+dW=0$ and dividing by $(z_m-\bar z)\,d\tau$ gives $(1-g)(1-\tau)=a(\tau e-t_s e_s)$, hence $\tau^*=(1-g+a\,t_s e_s)/(1-g+ae)$.

(b)

- Ignoring shifting: $1/(1+2\times0.4)=5/9\approx0.556$.
- Accounting for it: $(1+2\times0.2\times0.25)/1.8=1.1/1.8=11/18\approx0.611$.
- Channel closed: $1/(1+2\times0.15)=10/13\approx0.769$.

Shifted income is not lost, only taxed at a lower rate, so the naive formula overstates the cost of the top rate. Closing the channel does more still: it removes the response altogether, which is Saez, Slemrod and Giertz's case for broadening the base.

**Wrong turns:** subtracting the shifted elasticity entirely (using $e=e_r$) while the channel is still open, which treats shifted income as costless to revenue; charging shifted income the full $\tau$, which is the naive formula.

</details>

## Flashback

**From Lesson [5.1](05-01-the-linear-income-tax.md) (The linear income tax and the equity-efficiency trade-off):** *(Formal (a)–(b) · Exegetical (c).)* An invented country runs a flat income tax of 40 percent that funds an equal grant; utility is quasilinear and the elasticity of taxable income is $e=0.6$. Under the current schedule, three equal-size groups earn 10,000, 20,000 and 60,000 dollars, and the government's welfare weights on them are 1.6, 1.0 and 0.4 (averaging one). (a) Compute the income-weighted weight $\bar g$ and the MCPF at the current rate from [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md)'s formula $1/\big(1-e\tau/(1-\tau)\big)$. Should the rate rise or fall? (b) Plug the $\bar g$ from (a) into $\tau^*=(1-\bar g)/(1-\bar g+e)$. (c) Assume, as in 5.1, that $\bar g$ rises with $\tau$ and that welfare is single-peaked in $\tau$. In one sentence: is the number in (b) the optimum, and if not, where does the optimum lie?

<details>
<summary>Solution</summary>

(a) Mean income is 30,000, so

$$\bar g=\frac{1.6\times10{,}000+1.0\times20{,}000+0.4\times60{,}000}{3\times30{,}000}=\frac{60{,}000}{90{,}000}=\frac23 .$$

At $\tau=0.4$, $e\tau/(1-\tau)=0.6\times0.4/0.6=0.4$, so $\mathrm{MCPF}=1/0.6=5/3\approx1.67$. The government is willing to pay at most $1/\bar g=1.5$ taxpayer dollars per dollar of grant, and the last dollar costs 1.67, so the rate should **fall**. Equivalently, the first-order condition's left side $1-e\tau/(1-\tau)=0.6$ is below $\bar g=0.667$: the grant gained is worth less than the tax taken.

(b) $\tau=(1/3)/(1/3+0.6)=5/14\approx0.357$.

**Must hit, strict (c):**

- 0.357 is not the optimum: $\bar g$ was measured at 40 percent, and the formula holds only at the rate where it is evaluated.
- As the rate falls, $\bar g$ falls, so the formula's answer rises; the fixed point lies strictly between 0.357 and 0.40.

**Model answer (c):** No: cutting the rate lowers $\bar g$, which raises the formula's recommended rate above 0.357, so the optimum lies between 0.357 and 0.40.

**Wrong turns:** using the plain average weight (one), which gives $\tau^*=0$ and says to abolish the tax; reading 0.357 as the destination rather than as a direction, which overshoots the cut.

</details>

## Connections

- **Backward:** with $a=1$ the formula is [5.1](05-01-the-linear-income-tax.md)'s linear tax, and with $a=1$ and $g=0$ it is the top of that lesson's Laffer curve. The bracket's MCPF is [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md)'s with the elasticity scaled by $a$. The welfare effect is the envelope theorem of [`grad-micro` 1.4](../../grad-micro/lessons/01-04-envelope-theorem-duality.md). [5.2](05-02-the-mirrlees-problem.md)'s [no distortion at the top](../reference.md#no-distortion-at-the-top) holds only for a bounded distribution with a highest earner.
- **Forward:** [5.4](05-04-participation-and-the-eitc.md) applies the same perturbation at the bottom of the schedule, where the response is whether to work at all. [7.2](07-02-optimal-unemployment-insurance-baily-chetty.md)'s Baily-Chetty rule is the same sufficient-statistics recipe applied to unemployment insurance.
- **Sideways:** the elasticity is estimated with [`econometrics` 4.3](../../econometrics/lessons/04-03-difference-in-differences.md)'s designs. The same revenue-peak logic caps what taxes can service in [`economics-of-debt` 5.4](../../economics-of-debt/lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md). How voters actually set top rates is [`political-economy`](../../political-economy/syllabus.md)'s question, and which $g$ is right belongs to [`political-philosophy`](../../political-philosophy/syllabus.md).
