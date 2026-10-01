# Public Economics · Lesson 2.4: Many distortions: second best and the marginal cost of public funds

> ⏱ ~15 min · Module 2: Tax incidence and excess burden · Builds on: [2.3 Excess burden and the Harberger triangle](02-03-excess-burden-and-the-harberger-triangle.md), [1.1 The Samuelson rule beyond quasilinearity](01-01-the-samuelson-rule-beyond-quasilinearity.md), [`grad-micro` 1.4 Envelope theorem and duality](../../grad-micro/lessons/01-04-envelope-theorem-duality.md) · Unlocks: [3.3 Pigou in a second-best world](03-03-pigou-in-a-second-best-world.md), [4.1 The Ramsey rule](04-01-the-ramsey-rule.md), [5.1 The linear income tax](05-01-the-linear-income-tax.md)

## Why this matters

[2.3](02-03-excess-burden-and-the-harberger-triangle.md) priced one tax in one market. Real decisions are made at the margin of a tax system that is already full of wedges. Should the city build the bridge, if the money comes from raising a wage tax that is already 30 percent? What does a new tax on coffee destroy when tea is already taxed? Two answers run through the rest of the course. The cost of the next dollar of revenue is usually more than a dollar, and you can compute by how much. And once one market is distorted, "remove the other distortion" stops being automatically right.

## The idea

**The last dollar is dear.** Raise a wage tax a notch. On the income people keep earning, workers hand over, say, 100 dollars more. But some of them work a little less, so the treasury's take rises by only 80. Taxpayers lost 100 to fund 80 of spending: each dollar raised cost them 1.25. That 1.25 is the **marginal cost of public funds** (MCPF). A public project financed this way must deliver benefits at least 1.25 times its cost, not merely equal to it. The ratio climbs with the rate, because at a high rate each lost hour takes more revenue with it. At the top of the Laffer curve the extra revenue is zero and the ratio is infinite.

**Fixing one wedge can hurt.** Tea is taxed; coffee is not. Tea drinkers have been pushed onto coffee, so too little tea is drunk. Now tax coffee a little. Some drinkers drift back to tea, the taxed market where each extra cup was worth more to its buyer than it cost to make. That shift *recovers* surplus. So the first small coffee tax can destroy less than nothing, even though coffee alone is an undistorted market. Lipsey and Lancaster (1956, *RES*) made the general point: when one efficiency condition cannot be met, meeting the others is no longer, in general, desirable. That is the theory of the [second best](../reference.md#second-best).

## The formal version

**Setup.** Goods $i=1,\dots,n$ are supplied perfectly elastically at fixed producer prices $p_i$, so a unit tax $t_i$ gives consumer price $q_i=p_i+t_i$. Utility is quasilinear, so demands $x_i(q)$ have no income effects and coincide with compensated demands, and consumer surplus is an exact welfare measure ([`grad-micro` 4.1](../../grad-micro/lessons/04-01-partial-equilibrium-surplus.md)). With flat supply there is no producer surplus, so welfare is consumer surplus plus revenue $R=\sum_i t_i x_i$, and deadweight loss is the drop in welfare from the untaxed level.

**Result 1 (taxes in related markets).** Since $\partial\,\mathrm{CS}/\partial q_k=-x_k$,

$$\frac{\partial\,\mathrm{DWL}}{\partial t_k}=-\,t_k\frac{\partial x_k}{\partial q_k}\;-\;\sum_{j\ne k}t_j\,\frac{\partial x_j}{\partial q_k}.$$

*In words:* raising $t_k$ costs the usual Harberger-triangle term in its own market, plus, in every other taxed market $j$, the old wedge $t_j$ times the quantity that market loses. The own term is positive and vanishes at $t_k=0$. The cross term has the sign of the relation between the goods. For a substitute ($\partial x_j/\partial q_k>0$), $t_k$ pushes buyers into an under-consumed market and the term is negative; for a complement it is positive. So the second-best $t_k$ is generally not zero. It solves $t_k\,\partial x_k/\partial q_k=-\sum_{j\ne k}t_j\,\partial x_j/\partial q_k$, a tax on a substitute of a taxed good and a subsidy on a complement.

**Result 2 (MEB and MCPF).** Raising $t_k$ yields marginal revenue $\partial R/\partial t_k=x_k+\sum_i t_i\,\partial x_i/\partial q_k$ and costs taxpayers $x_k$ per unit of $t_k$. Define

$$\mathrm{MEB}_k=\frac{\partial\,\mathrm{DWL}/\partial t_k}{\partial R/\partial t_k},\qquad \mathrm{MCPF}_k=\frac{x_k}{\partial R/\partial t_k}=1+\mathrm{MEB}_k .$$

*In words:* the [marginal excess burden](../reference.md#marginal-excess-burden) is the extra deadweight loss per extra dollar of revenue, and the [marginal cost of public funds](../reference.md#marginal-cost-of-public-funds) is what taxpayers give up per extra dollar, one plus the MEB. It is a ratio of margins, not the average burden $\mathrm{DWL}/R$ of [2.3](02-03-excess-burden-and-the-harberger-triangle.md): a triangle grows with the square of the rate, so the next slice costs more than the average slice. At the revenue peak $\partial R/\partial t_k=0$ and the MCPF is infinite. Past the peak it is negative: a rate cut then raises revenue *and* welfare.

**A convention.** Here the taxpayer's loss is measured with compensated (here, quasilinear) responses. With income effects, conventions diverge. Atkinson and Stern (1974, *RES*) showed the rule of Result 3 needs further terms, and Ballard and Fullerton (1992, *JEP*) give labor-tax examples in which the MCPF, measured another standard way, falls *below* one, because a tax that makes people poorer can make them work more. The course uses the compensated convention throughout.

**The constant-elasticity base.** Take a worker with quasilinear utility $c-\frac{z^{1+1/e}}{1+1/e}$ over consumption $c$ and taxable income $z$, facing a proportional tax $\tau$ so that $c=(1-\tau)z$. Then $z(\tau)=(1-\tau)^e$, where $e$ is the [elasticity of taxable income](../reference.md#elasticity-of-taxable-income) with respect to $1-\tau$. This is the base `economics-of-debt` [5.4](../../economics-of-debt/lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) uses for its fiscal limit. Revenue is $R=\tau(1-\tau)^e$, and by the envelope theorem the worker's surplus falls at rate $z$. So

$$\mathrm{MCPF}(\tau)=\frac{z}{R'(\tau)}=\frac{1}{1-\dfrac{e\,\tau}{1-\tau}}.$$

*In words:* the MCPF depends only on the rate and the elasticity, and it explodes as $\tau$ approaches the [revenue-maximizing rate](../reference.md#revenue-maximizing-rate) $1/(1+e)$, where $e\tau/(1-\tau)=1$.

**Result 3 (the modified Samuelson rule).** Let a public good $G$ cost $\mathrm{MRT}$ units of revenue per unit, and add each person's benefit $b_i(G)$ to utility, separable from the taxed activity. A planner maximizing the money sum of utilities subject to $R(\tau)=\mathrm{MRT}\cdot G$, with multiplier $\lambda$, gets from the first-order conditions for $\tau$ and $G$

$$\lambda=\mathrm{MCPF},\qquad \sum_i \mathrm{MRS}_i=\mathrm{MCPF}\cdot\mathrm{MRT},$$

where $\mathrm{MRS}_i=b_i'(G)$ is person $i$'s marginal willingness to pay for $G$ in money. *In words:* the [modified Samuelson rule](../reference.md#modified-samuelson-rule): benefits must cover cost *times* the price of raising the money. The multiplier on the government budget is its shadow price ([`grad-micro` 1.4](../../grad-micro/lessons/01-04-envelope-theorem-duality.md)), and with a lump-sum tax it is 1, recovering the [Samuelson rule](../reference.md#samuelson-rule) of [1.1](01-01-the-samuelson-rule-beyond-quasilinearity.md). Two stated assumptions matter. If $G$ raises the tax base (a commuter line that lets people work more), the revenue it generates lowers its net cost. And with welfare weights $g_i$ that are not all one, $\lambda$ also carries distributional terms, as [4.2](04-02-many-person-ramsey-and-corlett-hague.md) and [5.1](05-01-the-linear-income-tax.md) show. Which weights are right is left to [`philosophy-of-economics`](../../philosophy-of-economics/syllabus.md).

## Picture

![MCPF plotted against the tax rate for elasticities 0.5 and 0.2. Both curves start at 1 and rise ever more steeply, the first toward a vertical asymptote at 0.67, the second at 0.83. A dashed horizontal line at 1.2 marks a project whose benefits are 1.2 times its cost; it crosses the curves at rates 0.25 and 0.45](assets/02-04-fig1.svg)

Every point on a curve is the benefit-to-cost ratio a project needs at that tax rate. The project on the dashed line is worth building only to the left of its crossing: below a 25 percent rate if the base is elastic, below about 45 percent if it is not.

## Worked examples

**Example 1 (clean): pricing the last dollar.** Use the constant-elasticity base with $e=0.2$ or $e=0.5$ (invented values).

| $\tau$ | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 |
|---|---|---|---|---|---|---|
| MCPF, $e=0.2$ | 1.023 | 1.053 | 1.094 | 1.154 | 1.250 | 1.429 |
| MCPF, $e=0.5$ | 1.059 | 1.143 | 1.273 | 1.500 | 2.000 | 4.000 |

At $\tau=0.4$ and $e=0.5$: $e\tau/(1-\tau)=0.2/0.6=1/3$, so $\mathrm{MCPF}=1.5$ and the MEB is 0.5. The *average* burden there is much smaller: surplus is $V(\tau)=(1-\tau)^{1+e}/(1+e)$, so the [excess burden](../reference.md#excess-burden) is $V(0)-V(0.4)-R(0.4)=0.0470$ on revenue of $0.3098$, about 15 cents per dollar. The last dollar costs 50 cents of deadweight loss; the average dollar, 15.

Now a project whose summed benefits are 1.2 times its cost, financed at $\tau=0.3$. With $e=0.5$ the MCPF is 1.273, above 1.2: reject. With $e=0.2$ it is 1.094: build. Solving $1/(1-e\tau/(1-\tau))=1.2$ gives $\tau=\tfrac{1/6}{e+1/6}$: 0.25 for $e=0.5$ and $5/11\approx0.45$ for $e=0.2$, the crossings in the figure. Same project, same benefits; the verdict turns on how the money is raised.

**Example 2 (why you'd care): the tax that lowers deadweight loss.** Invented demands for tea (good 2) and coffee (good 1), from quasilinear utility, both produced at price 1:

$$x_1=10-2q_1+q_2,\qquad x_2=10+q_1-2q_2 .$$

They are substitutes. Tea carries $t_2=1$; coffee is untaxed. With $q=(1,2)$, $x_1=10$ and $x_2=7$; revenue is 7 and the deadweight loss is 1 (for these linear demands, $\mathrm{DWL}=t_1^2+t_2^2-t_1t_2$).

- *The first coffee tax.* Result 1 gives $\partial\,\mathrm{DWL}/\partial t_1=-t_1(-2)-t_2(1)=-1$ at $t_1=0$. Marginal revenue is $x_1+t_2\cdot1=11$. So $\mathrm{MEB}=-1/11$ and $\mathrm{MCPF}=10/11\approx0.91$. The first dollars from coffee cost taxpayers *less* than a dollar each, because every cup pushed back to tea earns the treasury the tea tax and restores surplus there.
- *The second-best coffee tax,* if no revenue were needed: $2t_1-t_2=0$, so $t_1=0.5$. At $q=(1.5,2)$, $x=(9,7.5)$, revenue rises from 7 to 12 and deadweight loss *falls* from 1 to 0.75.

A planner who taxes coffee raises five more units of revenue and lowers the total distortion. "Coffee is an undistorted market, leave it alone" is first-best advice applied to a second-best world. The same logic returns in [3.3](03-03-pigou-in-a-second-best-world.md), where an environmental tax interacts with the labor tax already in place.

## Watch out

- **You might think the MCPF is one plus the average burden, but actually it is a ratio of margins.** In Example 1 the average is 0.15 and the marginal 0.5. Using the average understates the bar a project must clear, most of all at high rates.
- **You might think removing any one distortion is an improvement, but actually that holds only if nothing else is distorted.** With tea taxed, the zero coffee tax is not optimal; with a taxed complement, the second-best policy is a subsidy.
- **You might think the MCPF is a fixed number for "the tax system", but actually it depends on which tax finances the margin, how it interacts with other taxes, and the measurement convention.** It can be below one: 10/11 in Example 2, and in the uncompensated conventions Ballard and Fullerton study.
- **You might think an optimal system has one tax with a low MCPF and another with a high one, but actually an optimum equalizes them.** If one instrument raised a dollar more cheaply, shifting revenue toward it would lower total cost. That single $\lambda$ is the engine of the [4.1](04-01-the-ramsey-rule.md) Ramsey rule.

## One-liner

> The last tax dollar costs $1/(1-e\tau/(1-\tau))$ dollars, so benefits must beat cost times that; and in a world that is already distorted, the side effects of a tax on other taxed markets can make it cheaper, or dearer, than its own triangle.

## Problems

**P1 (🟢) *(Formal.)*** An invented economy has taxable income $z(\tau)=100(1-\tau)^{0.3}$ and quasilinear preferences, so taxpayers' surplus is $V(\tau)=100(1-\tau)^{1.3}/1.3$ and deadweight loss is $\mathrm{DWL}(\tau)=V(0)-V(\tau)-R(\tau)$, with revenue $R=\tau z$. (a) Compute revenue and deadweight loss at $\tau=0.30$ and at $\tau=0.40$. (b) Compute the marginal excess burden and MCPF of the step from 0.30 to 0.40, and compare them with the formula MCPF at the midpoint rate 0.35 and with the average burden $\mathrm{DWL}/R$ at 0.40.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** Two invented goods, both produced at constant cost 1, have demands (from quasilinear utility) $x_1=20-3q_1-q_2$ and $x_2=20-q_1-3q_2$. Good 2 carries a unit tax $t_2=3$; good 1 is untaxed. For these demands $\mathrm{DWL}=\tfrac12(3t_1^2+3t_2^2+2t_1t_2)$. (a) At $t_1=0$, find the marginal deadweight loss of $t_1$, the marginal revenue from $t_1$, and the MEB and MCPF of the first unit of revenue from good 1. (b) Holding $t_2=3$, find the $t_1$ that minimizes deadweight loss, and compare deadweight loss and total revenue with (a)'s starting point. (c) The treasury needs the revenue it collected at the start. Does (b) show that the policy in (b) is desirable? Two sentences.

**P3 (🔴, optional) *(Formal (a) · Exegetical (b).)*** An invented town finances spending with a proportional tax on a base with elasticity $e=0.6$ (the constant-elasticity base of the lesson), currently at $\tau=0.25$. A footbridge costs 10 million dollars, and residents' summed willingness to pay is 11.5 million. Assume the bridge does not change the tax base and use unweighted money sums. (a) Using the modified Samuelson rule, should the town build it, financed by a rate increase? Find the highest rate at which it would pass. (b) A council member computes that the town's tax system has an average burden of about 10 percent of revenue at $\tau=0.25$ and concludes the bridge clears the bar. What is wrong, in two sentences?

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) $V(0)=100/1.3=76.923$.

- $\tau=0.30$: $z=89.852$, $R=26.956$, $V=48.382$, so $\mathrm{DWL}=76.923-48.382-26.956=1.585$.
- $\tau=0.40$: $z=85.792$, $R=34.317$, $V=39.596$, so $\mathrm{DWL}=3.010$.

(b) The step adds $\Delta\mathrm{DWL}=1.425$ and $\Delta R=7.361$, so

$$\mathrm{MEB}=\frac{1.425}{7.361}=0.194,\qquad \mathrm{MCPF}=1.194 .$$

Check: taxpayers lose $V(0.3)-V(0.4)=8.786$ for 7.361 of revenue, and $8.786/7.361=1.194$. The formula at 0.35 gives $1/(1-0.3\times0.35/0.65)=1.193$, almost the same. The average burden at 0.40 is $3.010/34.317=0.088$: the marginal burden is more than twice the average.

**Wrong turns:** dividing $\Delta\mathrm{DWL}$ by the revenue *level* instead of its change, which gives an average-like 0.04; leaving out $V(0)$ and reading $V(0.3)-V(0.4)$ as the deadweight loss, which counts the revenue transfer as waste.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) At $q=(1,4)$: $x_1=13$, $x_2=7$, revenue $3\times7=21$. By Result 1, $\partial\,\mathrm{DWL}/\partial t_1=-0\cdot(-3)-3\cdot(-1)=3$. Marginal revenue is $x_1+t_2\,\partial x_2/\partial q_1=13-3=10$. So $\mathrm{MEB}=3/10=0.3$ and $\mathrm{MCPF}=13/10=1.3$. The very first dollar from good 1 costs 1.30, although its own triangle is zero at the margin: every unit of good 1 taxed away drags down the already-taxed complement.

(b) $\partial\,\mathrm{DWL}/\partial t_1=3t_1+t_2=0$ gives $t_1=-1$, a subsidy of 1. At $q=(0,4)$: $x=(16,8)$. Deadweight loss falls from 13.5 to $\tfrac12(3+27-6)=12$, but revenue falls from 21 to $-16+24=8$.

**Must hit, strict (c):**

- No: (b) minimizes deadweight loss with revenue free to fall, and it loses 13 of the 21.
- Replacing that 13 with another distorting tax costs more than a dollar per dollar, so the right comparison holds revenue fixed (the Ramsey problem of 4.1).

**Wrong turns:** getting the sign of the cross term backwards (for complements $\partial x_2/\partial q_1<0$, so $-t_2\,\partial x_2/\partial q_1>0$ and the second-best instrument is a subsidy); reading the lower deadweight loss in (b) as a free lunch.

**Model answer (c):** No. The subsidy cuts deadweight loss by 1.5 only by giving up 13 of the 21 in revenue, and raising that 13 elsewhere costs more than a dollar per dollar, so the question has to be asked with revenue held fixed, which is the Ramsey problem.

---

**P3** *(Formal (a) · Exegetical (b).)*

(a) $e\tau/(1-\tau)=0.6\times0.25/0.75=0.2$, so $\mathrm{MCPF}=1/0.8=1.25$. The rule needs $\sum\mathrm{MRS}\ge\mathrm{MCPF}\cdot\mathrm{MRT}$: 11.5 million against $1.25\times10=12.5$ million. Reject. The bridge passes while $\mathrm{MCPF}\le1.15$, that is $0.6\tau/(1-\tau)\le1-1/1.15=0.1304$, so $\tau\le0.1304/0.7304=0.179$.

**Must hit, strict (b):**

- The relevant cost is the *marginal* burden of the extra revenue, 0.25 per dollar here, not the average burden (0.096) of the revenue already raised.
- With the average, the bar is about 1.10 and the bridge (1.15) passes; with the margin, the bar is 1.25 and it fails, so the error flips the decision.

**Wrong turns:** multiplying benefits rather than cost by the MCPF; using $1/(1+e)=0.625$ (the revenue peak) as the break-even rate.

**Model answer (b):** Financing the bridge means raising the next 10 million, whose deadweight loss is set by the marginal burden, 25 cents per dollar at this rate, not the 9.6-cent average over revenue already collected. Against the average the bar is about 1.10 and the bridge passes; against the correct marginal bar of 1.25 it fails.

</details>

## Flashback

**From Lesson [2.2](02-02-general-equilibrium-incidence-the-harberger-model.md) (General-equilibrium incidence: the Harberger model):** *(Formal (a)–(b) · Exegetical (c).)* An invented Harberger economy has national income 100 (the unit of account, revenue included) and Cobb-Douglas demand spending 30 on good X and 70 on good Y. Technologies are Cobb-Douglas with labor's cost share 0.8 in X and 0.5 in Y. Total capital and labor are fixed and both are perfectly mobile between sectors. This time the tax falls on *labor*: an ad valorem tax $\tau$ on wages paid in X only, with the revenue spent like private income. (a) What $\tau$ raises revenue of 6? Give labor's and capital's incomes before and after, and each factor's share of the burden. (b) By what percentage does the net wage fall for a worker employed in Y both before and after the tax? (c) X is the labor-intensive sector here. In one sentence, does that fact change your answer to (a)?

<details>
<summary>Solution</summary>

(a) X pays labor a fixed $0.8\times30=24$ gross of tax, so workers in X net $24/(1+\tau)$ and revenue is $24\tau/(1+\tau)=6$, giving $\tau/(1+\tau)=\tfrac14$ and $\tau=\tfrac13$. Labor earns $24+0.5\times70=59$ before and $18+35=53$ after; capital earns $6+35=41$ both times. Labor loses 6, exactly the revenue: labor bears 100 percent, capital 0.

(b) Mobility gives every worker the same net wage, so it falls in proportion to labor income: $6/59\approx10.2$ percent, for the untaxed Y worker as much as for the taxed X worker. (The share of labor employed in X falls from $24/59\approx0.41$ to $18/53\approx0.34$.)

**Must hit, strict (c):**

- No: with unit elasticities everywhere, each factor's payment is a fixed share of each sector's sales, and each sector's sales a fixed share of income, so capital's 41 cannot move whatever the factor intensities.

**Model answer (c):** No, because under Cobb-Douglas technology and demand capital's income is pinned at 41 for any factor intensities, so the taxed factor bears exactly the revenue.

**Wrong turns:** dividing Y's labor payment by $1+\tau$ too (Y's workers are untaxed; they lose only through the common fall in the net wage); answering (b) with zero on the grounds that Y's wage bill stays at 35, when that constant bill is now spread over more workers.

</details>

## Connections

- **Backward:** [2.3](02-03-excess-burden-and-the-harberger-triangle.md) measured the triangle; this lesson differentiates it with respect to revenue and lets triangles in different markets interact. The MCPF is the multiplier on the government budget, a shadow price in exactly the sense of [`grad-micro` 1.4](../../grad-micro/lessons/01-04-envelope-theorem-duality.md), and Result 3 corrects the [1.1](01-01-the-samuelson-rule-beyond-quasilinearity.md) Samuelson rule (introduced in [`grad-micro` 6.4](../../grad-micro/lessons/06-04-public-goods.md)) for the fact that lump-sum taxes are not available.
- **Forward:** [3.3](03-03-pigou-in-a-second-best-world.md) is Result 1 with an externality in one market and a labor tax in another. [4.1](04-01-the-ramsey-rule.md) chooses many taxes so that each raises its last dollar at the same MCPF. [5.1](05-01-the-linear-income-tax.md) meets the revenue peak $1/(1+e)$ again as one end of the optimal-rate range.
- **Sideways:** tax smoothing in [`economics-of-debt` 5.3](../../economics-of-debt/lessons/05-03-tax-smoothing-and-optimal-debt.md) is the equal-MCPF condition across years: its $f'(\tau_t)=\lambda$ says the marginal excess burden per dollar, and hence the MCPF, must be the same every year. [`economics-of-debt` 5.4](../../economics-of-debt/lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) prices a fiscal limit from the same revenue peak at which the MCPF here becomes infinite. [`institutions-and-development`](../../institutions-and-development/syllabus.md) cites this lesson's MCPF when it asks what a state *can* tax.
