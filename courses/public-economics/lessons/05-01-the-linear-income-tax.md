# Public Economics · Lesson 5.1: The linear income tax and the equity–efficiency trade-off

> ⏱ ~15 min · Module 5: Optimal income taxation · Builds on: [2.4 Second best and the marginal cost of public funds](02-04-second-best-and-the-marginal-cost-of-public-funds.md), [4.2 Many-person Ramsey and Corlett-Hague](04-02-many-person-ramsey-and-corlett-hague.md), [`grad-micro` 6.5 Social choice and welfare](../../grad-micro/lessons/06-05-social-choice-welfare.md) · Unlocks: [5.2 The Mirrlees problem](05-02-the-mirrlees-problem.md), [5.3 The Saez formula](05-03-the-saez-formula.md)

## Why this matters

The simplest redistributive system anyone proposes is a flat tax on all earnings with the proceeds handed back as an equal cash grant to everyone. It is a universal basic income financed by a single rate. How high should that rate be? Too low and the grant does nothing; too high and people earn less, the base shrinks, and the grant shrinks with it. This lesson gives the whole answer in one formula with two numbers in it: how much society cares about moving money from high to low earners, and how strongly earnings respond to the tax. Every optimal-tax formula in the rest of Module 5 has the same shape.

## The idea

**Taking and giving back.** Two invented people earn 20,000 and 80,000 dollars. A 10 percent tax raises 10,000, returned as a 5,000-dollar grant to each. The first pays 2,000 and gets 5,000: up 3,000. The second pays 8,000 and gets 5,000: down 3,000. A flat tax plus an equal grant is progressive, even though everyone faces the same marginal rate, because the tax takes in proportion to income and the grant gives back per head.

**The leak.** If earnings did not respond, a planner who valued a dollar more in poor hands would push the rate to 100 percent and equalize everything. But earnings respond. Each notch of the rate trims hours, effort and reported income, so the pie shrinks. At some rate the shrinkage eats the whole gain: that is the top of the Laffer curve, where the grant is as large as it can ever be.

**The trade-off.** The optimal rate sits between zero and the Laffer peak. Where exactly depends on two things only. How much more does society value the dollar given back (to everyone equally) than the dollar taken (from people in proportion to what they earn)? And how fast does the base leak? The formula is that sentence with symbols.

## The formal version

**Setup.** A population of mass one. Person $i$ chooses taxable income $z_i$ and consumes

$$c_i=(1-\tau)z_i+R,$$

where $\tau$ is the flat marginal rate and $R$ the [demogrant](../reference.md#demogrant), an equal lump-sum grant to everyone. Utility is quasilinear, $u_i=c_i-h_i(z_i)$ with $h_i$ an increasing convex effort cost, so there are no income effects. Aggregate income $Z(1-\tau)=\int z_i\,di$ depends on the net-of-tax rate $1-\tau$, and

$$e=\frac{1-\tau}{Z}\,\frac{dZ}{d(1-\tau)}$$

is the [elasticity of taxable income](../reference.md#elasticity-of-taxable-income). The government balances its budget, $R=\tau Z(1-\tau)$, and maximizes $W=\int G(u_i)\,di$ with $G$ increasing and weakly concave. This is the [linear income tax](../reference.md#linear-income-tax) problem, first treated in its modern form by Sheshinski (1972, *RES*).

*In words:* one rate, one grant, a budget that must balance, and a social objective that may care more about some people's dollars than others'.

**Welfare weights.** Define the [social marginal welfare weight](../reference.md#social-marginal-welfare-weights) of person $i$ as

$$g_i=\frac{G'(u_i)}{\int G'(u_j)\,dj},$$

normalized to average one, as throughout the course. *In words:* $g_i=1.5$ means society values a dollar to $i$ at 1.5 times a dollar spread equally over everyone. The weights are inputs; which $G$ is right is the business of [`philosophy-of-economics`](../../philosophy-of-economics/syllabus.md) and [`political-philosophy`](../../political-philosophy/syllabus.md), and [`grad-micro` 6.5](../../grad-micro/lessons/06-05-social-choice-welfare.md) lays out the family of objectives.

**The first-order condition.** Raise $\tau$ slightly. By the envelope theorem ([`grad-micro` 1.4](../../grad-micro/lessons/01-04-envelope-theorem-duality.md)) person $i$'s own re-optimization of $z_i$ has no first-order effect on $u_i$, so $du_i/d\tau=-z_i+dR/d\tau$, and from the budget $dR/d\tau=Z-\tau\,dZ/d(1-\tau)$. Setting $dW/d\tau=0$ and dividing by $\int G'$:

$$Z\Big(1-\frac{e\,\tau}{1-\tau}\Big)=\int g_i z_i\,di .$$

*In words:* the grant a slightly higher rate adds, net of the base's leak, valued at the average weight (one), must equal the tax it takes, valued at each payer's weight.

**Result.** Define the income-weighted average weight

$$\bar g=\frac{\int g_i z_i\,di}{Z}=1+\frac{\mathrm{Cov}(g_i,z_i)}{Z}.$$

Then

$$\tau^*=\frac{1-\bar g}{1-\bar g+e}.$$

*In words:* $\bar g$ is the social value of the dollars the tax takes, per dollar taken, and the rate rises the less society values those dollars and the less the base leaks. This is the form Piketty and Saez (2013, *Handbook of Public Economics* vol. 5) give; adding an exogenous spending requirement to the budget leaves it unchanged.

Why *income*-weighted: the tax takes from people in proportion to $z_i$, so a high earner's weight counts for more of what is taken. With weights averaging one, $\bar g<1$ exactly when weights and incomes are negatively correlated. $\bar g$ is the [distributional characteristic](../reference.md#distributional-characteristic) of [4.2](04-02-many-person-ramsey-and-corlett-hague.md) applied to labor income: the linear income tax is a many-person Ramsey problem with one taxed good.

**Three landmarks.**

- *No inequality aversion* ($G$ linear, so every $g_i=1$): $\bar g=1$ and $\tau^*=0$. With quasilinear utility, transfers are pure reshuffling and the leak is pure loss.
- *Maximin when the worst-off earn nothing:* all weight sits on zero earners, $\bar g=0$, and $\tau^*=1/(1+e)$, the [revenue-maximizing rate](../reference.md#revenue-maximizing-rate). Maximizing the worst-off's utility means maximizing the grant. This is the Laffer rate that [`economics-of-debt` 5.4](../../economics-of-debt/lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) uses as the ceiling on what a tax can raise.
- *Everything between:* $0<\bar g<1$ gives $0<\tau^*<1/(1+e)$.

**The MCPF reading.** Rearranging the first-order condition, $\bar g\cdot Z/R'(\tau)=1$. With quasilinear utility $Z/R'(\tau)$ is the [marginal cost of public funds](../reference.md#marginal-cost-of-public-funds) of [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md), so at the optimum

$$\mathrm{MCPF}=\frac{1}{\bar g}.$$

*In words:* keep raising the rate until each dollar of grant costs $1/\bar g$ dollars of taxpayer money; the more society discounts the payers' dollars, the dearer the last dollar it will accept.

**A warning built into the formula.** $\bar g$ and $e$ are evaluated *at the optimum*. With concave $G$, raising $\tau$ compresses consumption, flattens the weights and pushes $\bar g$ up. The formula is a fixed point, not a plug-in.

## Picture

![Demogrant per person plotted against the flat tax rate for elasticity 0.5, a hump that peaks at rate 0.67. Dots mark the optimum under square-root welfare at rate 0.32 with g-bar 0.77, under log welfare at 0.41 with g-bar 0.65, and under maximin at the peak with g-bar 0. The money-sum utilitarian optimum is the origin](assets/05-01-fig1.svg)

The Example 2 economy. Every objective picks a point on the same revenue hill, and lower $\bar g$ means further up. Maximin with a group that cannot earn goes all the way to the peak; money-sum utilitarianism stays at the origin.

## Worked examples

**Example 1 (clean): one elasticity, four objectives.** Take $e=0.5$ (invented). The Laffer rate is $1/1.5=2/3$.

| $\bar g$ | 0 | 0.5 | 0.8 | 1 |
|---|---|---|---|---|
| $\tau^*=\frac{1-\bar g}{1-\bar g+0.5}$ | 0.667 | 0.500 | 0.286 | 0 |
| $\mathrm{MCPF}$ at $\tau^*$ | $\infty$ | 2.00 | 1.25 | 1 |

At $\bar g=0.8$: $\tau^*=0.2/0.7=0.286$, and 2.4's formula gives $\mathrm{MCPF}=1/(1-0.5\times0.286/0.714)=1/(1-0.2)=1.25=1/0.8$. Note how nonlinear the map is: moving from $\bar g=0.6$ (rate 0.444) to $\bar g=0.8$ halves $1-\bar g$ but does not halve the rate to 0.222; it gives 0.286.

**Example 2 (why you'd care): the weights are endogenous.** An invented economy has three equal groups with skills $w\in\{0,1,2\}$. The $w=0$ group cannot earn. The others have $h(z)=\frac{w}{1+1/e}(z/w)^{1+1/e}$ with $e=0.5$, so $z=w(1-\tau)^{0.5}$, average income is $(1-\tau)^{0.5}$, the grant is $R=\tau(1-\tau)^{0.5}$, and $u=w(1-\tau)^{1.5}/1.5+R$. Four objectives:

| Objective | $\tau^*$ | $\bar g$ at $\tau^*$ | Grant $R$ |
|---|---|---|---|
| Money-sum utilitarian, $G(u)=u$ | 0 | 1 | 0 |
| $G(u)=\sqrt u$ | 0.315 | 0.770 | 0.261 |
| $G(u)=\ln u$ | 0.413 | 0.648 | 0.316 |
| Maximin | 0.667 | 0 | 0.385 |

Take the log row. At $\tau=0.413$, utilities are $(0.316, 0.616, 0.916)$, weights $g\propto1/u$ normalize to $(1.61, 0.83, 0.56)$, and incomes $w(0.587)^{0.5}$ give $\bar g=0.648$. Then $(1-0.648)/(1-0.648+0.5)=0.413$: the formula reproduces the direct numerical optimum, and $\mathrm{MCPF}=1.543=1/0.648$.

Now the trap. Evaluate $\bar g$ at the wrong rate and plug it in. At $\tau=0.2$ the poor are poorer, weights are steeper, $\bar g=0.411$, and the formula says 0.541. At $\tau=0.6$, $\bar g=0.788$ and the formula says 0.298. Only at 0.413 does the formula return the rate it was evaluated at. An empirical $\bar g$ measured under today's schedule answers "should the rate go up or down from here", not "where should it end".

The table does not say which row is right. Choosing $G$ is a normative choice cited to [`decision-theory`](../../decision-theory/syllabus.md) and `philosophy-of-economics`; the lesson's claim is only that, given the row, the rate follows from $\bar g$ and $e$.

## Watch out

- **You might think maximin always means the Laffer rate, but actually only if the worst-off earn nothing.** If they earn, raising $\tau$ also taxes them, $\bar g=z_{\min}/Z>0$, and maximin stops short of the peak.
- **You might think $\bar g$ is the plain average weight, but actually that is one by construction.** What matters is the average weighted by income, equivalently the covariance of weights with income.
- **You might think $\bar g$ is a fixed number you can estimate once, but actually it moves with $\tau$.** The formula holds at the optimum; off it, $\bar g$ tells you only the direction of reform.
- **You might think $e$ here is a labor-supply elasticity, but actually it is the response of all taxable income, and with income effects a budget-balanced mix of substitution and income responses.** Piketty and Saez (2013) note it is a pure uncompensated elasticity at the revenue peak, because there the grant does not change at the margin.

## One-liner

> A flat tax funding an equal grant should rise until the payers' income-weighted welfare weight $\bar g$ equals one over the MCPF: $\tau^*=(1-\bar g)/(1-\bar g+e)$, from zero with no inequality aversion to the Laffer rate $1/(1+e)$ under maximin with non-earners.

## Problems

**P1 (🟢) *(Formal.)*** An invented economy has an elasticity of taxable income $e=0.35$ and a linear tax with a demogrant. (a) Compute the revenue-maximizing rate and the optimal rate for $\bar g=0.3$ and for $\bar g=0.7$. (b) At the $\bar g=0.7$ optimum, compute the MCPF from 2.4's formula $1/(1-e\tau/(1-\tau))$ and compare it with $1/\bar g$.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** An invented country runs a flat income tax of 40 percent with a universal grant, and suppose its rate is optimal for its government's objective. (a) What $\bar g$ does the rate reveal if $e=0.3$? If $e=0.6$? (b) The population is two equal groups earning 20,000 and 80,000 dollars, with welfare weights 1.5 and 0.5. Compute $\bar g$ and the optimal rate at $e=0.3$, holding these incomes and weights fixed. (c) In two sentences: why does the formula use the income-weighted average of $g_i$ rather than the plain average?

**P3 (🔴, optional) *(Formal (a) · Exegetical (b).)*** Two equal groups have skills $w_L=1$ and $w_H=3$ and the lesson's Example 2 preferences with $e=0.5$, so $z=w(1-\tau)^{0.5}$. (a) A maximin government maximizes the low group's utility. Find $\bar g$ and the optimal rate, and compare with the revenue-maximizing rate. (b) A commentator, citing the fiscal-limit analysis of [`economics-of-debt` 5.4](../../economics-of-debt/lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md), says "the most redistributive government taxes at the revenue peak." In two sentences, say why the maximin government in (a) does not.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) Revenue peak: $1/(1+0.35)=20/27\approx0.741$.

$$\bar g=0.3:\ \tau^*=\frac{0.7}{0.7+0.35}=\frac23\approx0.667$$

$$\bar g=0.7:\ \tau^*=\frac{0.3}{0.3+0.35}=\frac{6}{13}\approx0.462 .$$

(b) At $\tau=6/13$: $e\tau/(1-\tau)=0.35\times(6/13)/(7/13)=0.3$, so $\mathrm{MCPF}=1/0.7\approx1.429=1/\bar g$. Exactly equal, as the first-order condition requires.

**Wrong turns:** using $1-\bar g$ as the rate (0.7 and 0.3), which ignores the leak; computing the MCPF at the Laffer rate instead of the optimum.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) Invert: $\bar g=1-e\tau/(1-\tau)$. At $\tau=0.4$, $\tau/(1-\tau)=2/3$. With $e=0.3$, $\bar g=1-0.2=0.8$; with $e=0.6$, $\bar g=1-0.4=0.6$. The same observed rate reveals stronger redistributive tastes the more elastic the base is believed to be.

(b) Mean income is 50,000. $\bar g=(1.5\times20{,}000+0.5\times80{,}000)/(2\times50{,}000)=70{,}000/100{,}000=0.7$. Then $\tau^*=0.3/(0.3+0.3)=0.5$.

**Must hit, strict (c):**

- The plain average of normalized weights is one by construction, so it carries no information.
- A rate increase takes from each person in proportion to income, so the social cost of what is taken is each weight times that person's income; the grant returns equal amounts, valued at the average weight of one.

**Wrong turns:** in (b), averaging the weights (1.0) and concluding $\tau^*=0$; in (a), forgetting that the inversion depends on $e$.

**Model answer (c):** The tax takes dollars in proportion to income, so the welfare cost of a rate increase is the weights averaged over the dollars taken, which is the income-weighted mean; the grant gives equal dollars to everyone, which are worth the plain average weight, one by normalization. Redistribution pays exactly when the first is below the second.

---

**P3** *(Formal (a) · Exegetical (b).)*

(a) Under maximin all weight is on the low group: normalized, $g_L=2$ and $g_H=0$. Incomes are $z_L=(1-\tau)^{0.5}$ and $z_H=3(1-\tau)^{0.5}$, so

$$\bar g=\frac{\tfrac12(2\,z_L)}{\tfrac12(z_L+z_H)}=\frac{1}{2}.$$

The ratio does not depend on $\tau$ here because both incomes scale by the same factor. Then $\tau^*=0.5/(0.5+0.5)=0.5$, below the revenue peak $2/3$. (Direct check: $u_L=(1-\tau)^{1.5}/1.5+2\tau(1-\tau)^{0.5}$ is maximized at $\tau=0.5$, where $u_L\approx0.943$, against $0.898$ at $\tau=2/3$.)

**Must hit, strict (b):**

- At the revenue peak the grant no longer rises with the rate, but the low group still pays $z_L$ more per unit of rate, so its utility is falling there.
- The peak is the maximin optimum only if the worst-off earn nothing ($\bar g=0$); the fiscal limit is a ceiling on revenue, not a welfare optimum.

**Wrong turns:** setting $g_L=1$ instead of normalizing to average one (it gives $\bar g=0.25$ and the wrong rate 0.6); assuming maximin means maximizing revenue.

**Model answer (b):** At the peak the last rate increase adds nothing to the grant but still takes $z_L$ from the low earners, so their utility is already falling; they are best off at 0.5. The revenue peak is where a maximin government stops only if the worst-off earn nothing, and 5.4's fiscal limit is a bound on revenue, not a statement about whose welfare is maximized.

</details>

## Flashback

**From Lesson [4.2](04-02-many-person-ramsey-and-corlett-hague.md) (Equity and complementarity: many-person Ramsey and Corlett-Hague):** *(Formal (a) · Exegetical (b).)* An invented country taxes two goods, a staple (A) and a restaurant meal (B), each at 20 percent of its consumer price. Utility is quasilinear, demands are independent, and the compensated elasticities at the taxed prices are $-0.4$ for A and $-0.8$ for B. Two equal-size households P and R have welfare weights $g_P=1+d$ and $g_R=1-d$ (so they average one); P buys 75 percent of the staple and 25 percent of the meals. Suppose the rates are optimal under Diamond's rule $\tau_k=(1-\kappa\,\delta_k)/|\varepsilon_k|$. (a) What ratio $\tau_A/\tau_B$ would single-person Ramsey have chosen? Find $\kappa$, both distributional characteristics, and the weights $g_P$ and $g_R$ that the uniform rates reveal. (b) Suppose instead the country also runs an optimal flat income tax with an equal grant, and preferences satisfy Deaton's conditions (goods weakly separable from leisure, linear Engel curves). What would the uniform rates reveal about the weights then? One sentence.

<details>
<summary>Solution</summary>

(a) With equal weights $\delta_A=\delta_B=1$, so $\tau_A/\tau_B=0.8/0.4=2$: single-person Ramsey taxes the staple twice as hard. Uniform rates instead require

$$\kappa\,\delta_A=1-0.4\times0.2=0.92,\qquad \kappa\,\delta_B=1-0.8\times0.2=0.84.$$

With two equal households, $\delta_k=g_R+(g_P-g_R)s_k=1+(2s_k-1)d$, so $\delta_A=1+0.5d$ and $\delta_B=1-0.5d$. Dividing, $\frac{1+0.5d}{1-0.5d}=\frac{23}{21}$, so $d=\tfrac1{11}$. Then $g_P=\tfrac{12}{11}\approx1.09$, $g_R=\tfrac{10}{11}\approx0.91$, $\delta_A=\tfrac{23}{22}\approx1.045$, $\delta_B=\tfrac{21}{22}\approx0.955$, and $\kappa=0.92/\delta_A=0.88$. Check: $(1-0.88\times\tfrac{21}{22})/0.8=0.16/0.8=0.20$. A mild tilt toward P is enough to cancel the efficiency case for a 2-to-1 ratio.

**Must hit, strict (b):**

- Nothing: under Deaton's conditions uniform commodity taxation is optimal whatever the weights, because the linear income tax does all the redistributing.

**Model answer (b):** They would reveal nothing about the weights, since with an optimal linear income tax, weak separability and linear Engel curves make uniform rates optimal for any welfare weights, and the redistribution shows up in the income tax instead.

**Wrong turns:** writing $\kappa\delta_k=|\varepsilon_k|\tau_k$ (0.08 and 0.16) instead of $1-|\varepsilon_k|\tau_k$, which gives a ratio $\delta_A/\delta_B=\tfrac12$ and pushes the weights the wrong way; forgetting that the weights average one and treating $g_P$ and $g_R$ as free, which leaves the system underdetermined.

</details>

## Connections

- **Backward:** the base $(1-\tau)^e$ and the MCPF are [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md)'s; the optimum is where that MCPF equals $1/\bar g$. $\bar g$ is [4.2](04-02-many-person-ramsey-and-corlett-hague.md)'s distributional characteristic for the one good this tax can reach, labor income, and the first-order condition is the envelope theorem of [`grad-micro` 1.4](../../grad-micro/lessons/01-04-envelope-theorem-duality.md).
- **Forward:** [5.2](05-02-the-mirrlees-problem.md) drops linearity and lets the rate vary with income, which turns the problem into screening. [5.3](05-03-the-saez-formula.md)'s top-rate formula $(1-g)/(1-g+ae)$ is this formula applied to one bracket, with the Pareto parameter $a$ scaling the leak.
- **Sideways:** [`economics-of-debt` 5.4](../../economics-of-debt/lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) prices a fiscal limit from the revenue peak $1/(1+e)$, the $\bar g=0$ end of this lesson's range. Which point on the range a society should choose, and why, is political philosophy's question, not this course's.
