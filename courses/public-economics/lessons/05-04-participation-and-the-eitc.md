# Public Economics · Lesson 5.4: The bottom of the schedule: participation and the EITC

> ⏱ ~15 min · Module 5: Optimal income taxation · Builds on: [5.2 The Mirrlees problem](05-02-the-mirrlees-problem.md), [5.3 The Saez formula](05-03-the-saez-formula.md) · Unlocks: [6.1 Atkinson-Stiglitz](06-01-atkinson-stiglitz.md), [7.3 Tagging, ordeals, and in-kind benefits](07-03-tagging-ordeals-and-in-kind-benefits.md)

## Why this matters

[5.3](05-03-the-saez-formula.md) priced the top of the schedule. The bottom is where the transfers live, and there the design question is concrete: should a family with zero earnings get the most help, with benefits clawed back as earnings rise, or should help start at zero and *grow* with the first dollars earned? The first is the negative income tax; the second is the US Earned Income Tax Credit and the UK's in-work credits. Saez (2002, *Quarterly Journal of Economics*) showed that the answer turns on a single empirical question: do people at the bottom respond mainly by choosing *how much* to work, or *whether* to work at all?

## The idea

Every schedule at the bottom sets two different rates, and they govern two different decisions.

- The **marginal rate**: of the next dollar earned, how much goes in taxes and lost benefits. It governs someone already working who is choosing hours (the **intensive margin**).
- The **participation tax rate**: of *all* the earnings from taking a job, how much goes in taxes and lost benefits. It governs someone choosing between working and not (the [extensive margin](../reference.md#extensive-margin)).

A miniature, with invented numbers. A negative income tax (NIT) pays a grant of 6,000 dollars at zero earnings and withdraws 50 cents per dollar earned. A single parent weighing a 10,000-dollar job keeps only 5,000 of it: the grant falls from 6,000 to 1,000. Participation tax rate: 50 percent. An in-work credit pays nothing at zero earnings and 40 cents per dollar earned up to 10,000. The same parent now takes home 14,000 from the job: participation tax rate *minus* 40 percent. The government is paying people to show up.

Which is better depends on who responds, and how. If hours are what move, the NIT's high phase-out rate hurts only the few people in the phase-out range, and it buys a big grant for those who cannot work. If what moves is the decision to work at all, the NIT's 50 percent participation tax keeps people out of work entirely, and each one who stays out costs the government their taxes plus their grant. Then subsidizing entry can pay for itself in part.

## The formal version

**Model (Saez 2002).** Occupations $i=0,1,\dots,I$ pay earnings $0=z_0<z_1<\dots<z_I$; occupation 0 is not working. $T_i$ is the net tax at $z_i$ (negative means a net transfer), consumption is $c_i=z_i-T_i$, and $h_i$ is the share of the population in occupation $i$. There are no income effects. Two kinds of response:

- *intensive*: people move between adjacent occupations, with elasticity $\zeta_i$ of $h_i$ with respect to $c_i-c_{i-1}$;
- *extensive*: people move between occupation $i$ and not working, with elasticity $\eta_i$ of $h_i$ with respect to $c_i-c_0$.

$g_i$ is the [social marginal welfare weight](../reference.md#social-marginal-welfare-weights) on occupation $i$: the social value of one more dollar to a person there, in dollars of public funds, normalized so that $\sum_i h_i g_i=1$.

The [participation tax rate](../reference.md#participation-tax-rate) at $z_i$ is
$$\tau_{p,i}=\frac{T_i-T_0}{z_i}.$$
*In words:* the share of a job's earnings lost to taxes and withdrawn benefits, measured against not working.

**Result 1: pure extensive responses.** Set $\zeta_i=0$. Give workers in occupation $i$ one more dollar (lower $T_i$ by $d$), holding every other $T$ fixed. Three effects, per unit of $h_i$:

1. *mechanical:* revenue falls by $d$;
2. *welfare:* those workers gain, worth $g_i\,d$;
3. *behavioral:* the gain from working, $c_i-c_0$, rises by $d$, so $h_i\eta_i\,d/(c_i-c_0)$ people enter from non-work, and each one changes revenue by $T_i-T_0$.

At the optimum these sum to zero: $-1+g_i+\eta_i\,(T_i-T_0)/(c_i-c_0)=0$, so
$$\frac{T_i-T_0}{c_i-c_0}=\frac{1-g_i}{\eta_i}.$$
Since $c_i-c_0=z_i-(T_i-T_0)$, this rearranges to
$$\tau_{p,i}=\frac{1-g_i}{1-g_i+\eta_i}.$$
*In words:* the participation tax rate is negative exactly when society values a dollar to the working poor more than a dollar of general revenue ($g_i>1$), and its size is governed by the participation elasticity.

This is the third appearance of one formula: the linear tax of [5.1](05-01-the-linear-income-tax.md) was $(1-\bar g)/(1-\bar g+e)$ and the top rate of 5.3 was $(1-g)/(1-g+ae)$. Here the behavioral response is entry into work, and because $g_i$ can exceed one at the bottom, the rate can go negative. That can never happen at the top, where $g<1$. (The formula needs $1-g_i+\eta_i>0$; for larger weights the local, constant-elasticity approximation breaks down.)

**Result 2: pure intensive responses.** Set $\eta_i=0$. The same perturbation logic applied to the first bracket gives (Saez 2002)
$$\frac{T_1-T_0}{c_1-c_0}=\frac{h_0\,(g_0-1)}{\zeta_1\,h_1}.$$
*In words:* if non-workers carry a weight above one, the first bracket's rate is positive, and high when many people are at zero ($h_0$ large) and few sit in the phase-out range ($h_1$ small). Raising the grant helps all $h_0$ non-workers; a steep phase-out recovers it and distorts only the $h_1$ people on that margin. That is the [negative income tax](../reference.md#negative-income-tax), a large grant taxed away fast. It is also the Mirrlees logic of [5.2](05-02-the-mirrlees-problem.md): distort the bottom to target the transfer.

**Both margins.** Saez's general formula for the rate between occupations $i-1$ and $i$ is
$$\frac{T_i-T_{i-1}}{c_i-c_{i-1}}=\frac{1}{\zeta_i h_i}\sum_{j\ge i}h_j\left[1-g_j-\eta_j\,\frac{T_j-T_0}{c_j-c_0}\right].$$
*In words:* raising the rate on bracket $i$ collects from everyone above it (the $1$), costs them welfare ($g_j$), and pushes some of them out of work, losing their participation taxes (the $\eta_j$ term). All of this is weighed against the hours distortion at bracket $i$ ($\zeta_i h_i$). A large $\eta$ at the bottom pulls the low brackets' rates down, possibly below zero. Saez's calibrations with realistic elasticities give a moderate guaranteed income, low or negative rates on the first earnings, and then a substantial phase-out.

**Assumptions to check:** no income effects; the weights $g_i$ are given; people choose among occupations with fixed earnings, so "hours" means moving to an adjacent earnings level.

## Picture

![Net transfer on the vertical axis against annual earnings on the horizontal. A red negative income tax line starts at 6,000 dollars at zero earnings and falls at 50 percent to zero at 12,000. A blue in-work credit starts at zero, rises at 40 percent to 4,000 at 10,000 earnings, stays flat to 20,000, and falls at 20 percent to zero at 40,000. At 10,000 earnings the participation tax rate is plus 50 percent under the negative income tax and minus 40 percent under the credit; at 30,000 the credit's participation tax rate is minus 6.7 percent while its marginal rate is plus 20 percent.](assets/05-04-fig1.svg)

The two designs make opposite bets. The NIT puts its money at zero earnings and its high marginal rate at the very bottom. The credit puts a negative participation tax on the first job, and it pays for that with a 20 percent marginal rate further up, over 20,000 to 40,000, where the credit is withdrawn.

## Worked examples

**Example 1 (the rule, four objectives).** Invented numbers: a low-wage occupation pays $z_1=10{,}000$ dollars, the participation elasticity is $\eta_1=0.5$, and responses are purely extensive.

| Objective behind $g_1$ | $g_1$ | $\tau_{p,1}=\dfrac{1-g_1}{1-g_1+0.5}$ |
|---|---|---|
| Revenue-maximizing, or maximin with non-workers worst off | 0 | $1/1.5\approx 66.7\%$ |
| Mild redistribution toward the bottom | 0.8 | $0.2/0.7\approx 28.6\%$ |
| Workers weighted like general revenue | 1 | 0 |
| Working poor weighted above revenue | 1.1 | $-0.1/0.4=-25\%$ |

Two readings. First, **maximin does not deliver an EITC**: it puts all weight on the worst-off (non-workers, so $g_0=1/h_0$) and none on the working poor, so their participation is taxed at the revenue-maximizing rate $1/(1+\eta)$. An in-work credit needs a social objective that values the working poor *above* a dollar of revenue, which a utilitarian objective with concave utility can do. Second, translate the last row into a schedule. With a grant of 5,000 at zero ($T_0=-5{,}000$), $\tau_{p,1}=-25\%$ means $T_1=-5{,}000-2{,}500=-7{,}500$. The low-wage worker receives 7,500 in net transfers, more than the non-worker's 5,000, so the schedule has a grant *and* a phase-in. Check: $c_1-c_0=10{,}000+2{,}500=12{,}500$, and $(T_1-T_0)/(c_1-c_0)=-2{,}500/12{,}500=-0.2=(1-1.1)/0.5$. Which row is right is a question for [`political-philosophy`](../../political-philosophy/syllabus.md) and `philosophy-of-economics`, not for this formula.

**Example 2 (why you'd care): the intensive bill comes due higher up.** The comparison is between the two designs in the figure. The in-work credit gives 4,000 dollars to a worker at 10,000 without giving it to everyone, so it must be withdrawn somewhere. At a 20 percent phase-out that takes 20,000 dollars of earnings (20,000 to 40,000). At 40 percent it takes 10,000: fewer people in the range, each facing a steeper rate. The in-work credit does not abolish the equity-efficiency trade-off. It moves the high marginal rate from the very bottom, where people decide whether to work, to the lower middle, where people are already working and choose hours.

The bill can get large there, because phase-outs stack. Take an invented family in the credit's phase-out range that also receives a housing subsidy withdrawn at 30 percent of earnings and pays 7.65 percent payroll tax. Its effective marginal rate is $20+30+7.65=57.65$ percent. A 10,000-dollar raise leaves it 4,235 dollars better off. Add one more program, or a benefit that ends abruptly at an income threshold (a *cliff*), and the rate can pass 100 percent: earning more makes the family poorer. This is the [poverty trap](../reference.md#poverty-trap), and it is an intensive-margin problem created by targeting.

The US evidence is why the [EITC](../reference.md#eitc) looks the way it does. Eissa and Liebman (1996, *QJE*) and Meyer and Rosenbaum (2001, *QJE*) found that EITC expansions raised employment among single mothers, a large extensive response, with little measurable reduction in hours among those already working. Those findings are the empirical input to Result 1. The quasi-experimental designs behind them are the difference-in-differences of [`econometrics` 4.3](../../econometrics/lessons/04-03-difference-in-differences.md).

## Watch out

- **You might think a high marginal rate and a high participation tax rate are the same thing, but actually they can have opposite signs.** At 30,000 dollars in the figure, the credit's marginal rate is +20 percent while its participation tax rate is −6.7 percent: the job as a whole is still subsidized.
- **You might think an EITC follows from caring most about the poorest, but actually maximin gives a positive participation tax.** The negative rate needs $g_i>1$ on the *working* poor, which is a separate social judgment.
- **You might think $\tau_p<0$ means the government loses money on every entrant, but actually the formula already counts that.** The negative rate is chosen so that the welfare gain to the working poor ($g_i-1$ per dollar) just balances the revenue cost of the entrants the credit draws in.
- **You might think benefit phase-outs are small because each one is modest, but actually they add up.** Programs withdrawn on the same earnings stack their rates, and a cliff can push the effective rate past 100 percent over a range.

## One-liner

> At the bottom, tax the margin people don't respond on: if hours respond, a big grant with a steep phase-out (NIT); if the decision to work responds and the working poor carry $g>1$, a negative participation tax (EITC), with $\tau_p=(1-g)/(1-g+\eta)$.

## Problems

**P1 (🟢) *(Formal.)*** An invented schedule: a benefit of 2,000 dollars at zero earnings, withdrawn at 25 percent of earnings; an earned credit of 30 percent of earnings up to a maximum of 3,600 (reached at 12,000), flat to 18,000, then withdrawn at 18 percent of earnings above 18,000; and a 7.65 percent payroll tax on all earnings. Compute the participation tax rate and the marginal tax rate at earnings of (a) 10,000 dollars and (b) 25,000 dollars.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** An invented family earns 24,000 dollars. On each extra dollar earned it pays 7.65 percent payroll tax and 4 percent state income tax, loses 20 cents of an earned credit, and loses a food benefit equal to 30 percent of earnings *net of payroll tax*. It also has health coverage worth 2,400 dollars a year that ends entirely once earnings exceed 25,000. (a) Find the family's effective marginal tax rate below 25,000. (b) The family is offered a raise to 26,000. Find the change in its net resources and the effective tax rate on the raise. (c) Which margin, and whose, does the cliff in (b) distort? Two sentences.

**P3 (🔴, optional) *(Formal (a)–(b) · Exegetical (c).)*** Assume purely extensive responses among low-wage workers, with participation elasticity $\eta=0.3$. (a) An in-work credit sets their participation tax rate at −20 percent. What welfare weight $g$ on them makes this optimal? (b) What participation tax rate would a maximin planner set for them, if non-workers are the worst off? (c) A study compares single mothers with single women without children before and after an EITC expansion that raised only mothers' credits. Which sufficient statistic in this lesson does it estimate, and what must be true of the comparison group? Two sentences.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

Write $T(z)=0.0765z-\text{credit}(z)-\text{benefit}(z)$. At zero, $T(0)=-2{,}000$. The benefit is exhausted at $2{,}000/0.25=8{,}000$.

(a) $z=10{,}000$: benefit 0, credit $0.3\times10{,}000=3{,}000$, payroll 765, so $T=765-3{,}000=-2{,}235$.
$$\tau_p=\frac{-2{,}235-(-2{,}000)}{10{,}000}=-2.35\%.$$
Marginal rate: payroll $+7.65$ minus the phase-in $30$ is $-22.35\%$ (the benefit is already gone).

(b) $z=25{,}000$: credit $3{,}600-0.18\times7{,}000=2{,}340$, payroll $1{,}912.50$, so $T=-427.50$.
$$\tau_p=\frac{-427.5+2{,}000}{25{,}000}=6.29\%.$$
Marginal rate: $7.65+18=25.65\%$.

**Wrong turns:** measuring the participation tax against $T(0)=0$ and forgetting the 2,000 benefit a non-worker receives; counting the benefit's 25 percent withdrawal at 10,000, where it has already run out.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) The food benefit falls by $0.30\times(1-0.0765)=27.705$ cents per dollar earned. Total:
$$7.65+4+20+27.705=59.355\%.$$

(b) Without the cliff, the family keeps $2{,}000\times(1-0.59355)=812.90$. The cliff removes 2,400, so net resources change by $812.90-2{,}400=-1{,}587.10$. The effective rate on the raise is $(2{,}000+1{,}587.10)/2{,}000\approx179.4\%$. The raise makes the family about 1,587 dollars poorer. (It would need a raise of about 5,905 dollars above 24,000 just to break even.)

**Must hit, strict (c):**

- The intensive margin (earnings or hours) of families already working near the 25,000 threshold.
- It rewards staying at or below 25,000; it does not touch the decision of non-workers to enter work.

**Wrong turns:** adding 30 percent instead of $30\times(1-0.0765)$ for the food benefit; calling the cliff an extensive-margin distortion because it is a discrete jump. The choice it distorts is how much to earn, not whether to work.

**Model answer (c):** The cliff distorts the intensive margin: families already working just below 25,000 face a rate above 100 percent on crossing it, so they are rewarded for holding earnings down. It leaves the participation decision of non-workers essentially untouched.

---

**P3** *(Formal (a)–(b) · Exegetical (c).)*

(a) From $\tau_p/(1-\tau_p)=(1-g)/\eta$: $-0.2/1.2=(1-g)/0.3$, so $1-g=-0.05$ and $g=1.05$. Check: $(1-1.05)/(1-1.05+0.3)=-0.05/0.25=-0.2$.

(b) Maximin puts zero weight on workers who are not the worst off, so $g=0$ and $\tau_p=1/(1+0.3)\approx76.9\%$: a large positive participation tax, the revenue-maximizing rate.

**Must hit, strict (c):**

- It estimates the participation (extensive-margin) elasticity $\eta$: the response of employment to the gain from working, $c_i-c_0$.
- The comparison group must share the mothers' employment trend absent the expansion (parallel trends), since it was untouched by the credit change.

**Wrong turns:** answering "the elasticity of taxable income" (that is the intensive response of earnings, 5.3's statistic); saying the comparison group must have the same employment *level* rather than the same trend.

**Model answer (c):** It estimates the participation elasticity $\eta$, the employment response to a change in the gain from working. That requires single women without children to have followed the same employment trend the mothers would have followed without the expansion.

</details>

## Flashback

**From Lesson [5.2](05-02-the-mirrlees-problem.md) (The Mirrlees problem):** *(Formal.)* A two-type Mirrlees economy has utility $c-\tfrac12(y/w)^2$, equal population shares $\pi_L=\pi_H=\tfrac12$, and welfare weights $g_H=0.5$, $g_L=1.5$, so redistribution runs toward Low and High's incentive constraint binds. Low's wage is $w_L=3$. Recall $\tau_L/(1-\tau_L)=\frac{\pi_H}{\pi_L}(1-g_H)\big(1-w_L^2/w_H^2\big)$. (a) What wage $w_H$ makes Low's implicit marginal rate exactly 20 percent? At that optimum, find $y_L$, $y_H$, and the consumption gap $c_H-c_L$. (b) Holding these shares and weights fixed, what is the highest $\tau_L$ any skill gap can produce?

<details>
<summary>Solution</summary>

(a) A 20 percent rate needs $\tau_L/(1-\tau_L)=0.25$, so $1\times0.5\times(1-9/w_H^2)=0.25$, giving $9/w_H^2=\tfrac12$, $w_H^2=18$ and $w_H=3\sqrt2\approx4.24$. Then

$$y_L=w_L^2(1-\tau_L)=9\times0.8=7.2,\qquad y_H=w_H^2=18 .$$

High's binding constraint, $c_H-\tfrac12(18)^2/18=c_L-\tfrac12(7.2)^2/18$, gives

$$c_H-c_L=\frac{18^2-7.2^2}{2\times18}=\frac{324-51.84}{36}=7.56 .$$

(With the budget, $c_L=8.82$ and $c_H=16.38$: Low receives a net transfer of 1.62 and High pays 1.62.)

(b) As $w_H\to\infty$ the skill factor $1-w_L^2/w_H^2$ approaches 1, so $\tau_L/(1-\tau_L)\to0.5$ and $\tau_L\to\tfrac13$. The bound is never reached, because any finite skill gap leaves the factor below one.

**Wrong turns:** using the unsquared ratio $1-w_L/w_H$ (it gives $w_H=6$); distorting High as well, when High's income stays at its efficient $w_H^2$ because nobody wants to imitate High.

</details>

## Connections

- **Backward:** Result 2 is [5.2](05-02-the-mirrlees-problem.md)'s screening logic at the bottom: distort the low end to target the transfer, as in [`grad-micro` 5.3](../../grad-micro/lessons/05-03-screening.md). Result 1 has the $(1-g)/(1-g+\text{elasticity})$ shape of [5.1](05-01-the-linear-income-tax.md) and the [Saez formula](../reference.md#saez-formula) of [5.3](05-03-the-saez-formula.md), with entry into work as the response.
- **Forward:** [6.1](06-01-atkinson-stiglitz.md) asks whether anything besides earnings should be taxed once the income schedule is optimal. [7.3](07-03-tagging-ordeals-and-in-kind-benefits.md) adds instruments that go beyond the earnings schedule: conditioning on observable tags such as disability or children, and using ordeals to screen who takes up a benefit.
- **Sideways:** the evidence on $\eta$ comes from the difference-in-differences and event-study designs of [`econometrics` 4.3](../../econometrics/lessons/04-03-difference-in-differences.md) and [4.4](../../econometrics/lessons/04-04-event-studies-dynamic-did.md). Which weights $g_i$ society should hold is [`political-philosophy`](../../political-philosophy/syllabus.md)'s question.
