# Public Economics · Lesson 6.1: Atkinson-Stiglitz: should savings be taxed at all?

> ⏱ ~15 min · Module 6: Capital taxation · Builds on: [5.2 The Mirrlees problem](05-02-the-mirrlees-problem.md), [4.2 Equity and complementarity](04-02-many-person-ramsey-and-corlett-hague.md), [`grad-micro` 5.3 Screening](../../grad-micro/lessons/05-03-screening.md) · Unlocks: [6.2 Chamley-Judd and the exploding wedge](06-02-chamley-judd-and-the-exploding-wedge.md), [6.3 The inverse Euler equation](06-03-the-inverse-euler-equation.md)

## Why this matters

Module 4 designed commodity taxes when they were the only tool: tax inelastic goods more (Ramsey), tax necessities less if you care about the poor (Diamond). Module 5 then gave the government a nonlinear income tax. The obvious question is whether the commodity taxes still earn their keep once the income tax exists. Atkinson and Stiglitz (1976, *Journal of Public Economics*) answered: under one clean condition on preferences, no. Every differentiated commodity tax can be replaced by a change in the income tax that leaves everyone exactly as well off and raises more revenue. Read "future consumption" for one of the goods and the theorem says something much sharper: *do not tax savings.* This lesson is that result, why it holds, and the three places it breaks. Those breaks are where the rest of Module 6 lives.

## The idea

Recall the engine of [5.2](05-02-the-mirrlees-problem.md). The government sees income, not skill. What limits redistribution is the **mimicker**: a high-skill worker who earns the low type's income, takes the low type's net pay, and enjoys the extra leisure (he needs fewer hours to earn it). The income tax is designed so that this deviation is just not worth it. Every extra tool is valuable exactly to the extent it makes mimicking less attractive without hurting the people it is meant to help.

Now ask what a tax on, say, wine can do. The mimicker and the genuine low type have the same net income, since that is what mimicking means. They differ only in leisure. If how you split a budget between wine and bread does not depend on how many hours you worked, they buy **the same basket**. Any wine tax then hits them identically, so it cannot separate them. It can only do what the income tax already does, less efficiently, because it also distorts the wine-bread choice.

A miniature. Two people each have 100 dollars to spend. One worked 40 hours for it, the other 20. If both buy 50 dollars of bread and 50 of wine, no tax on wine can tell them apart. If instead the one with free time buys more wine (because wine goes with leisure), a wine tax lands harder on him. That makes mimicking costlier, which is worth something.

## The formal version

**Model.** Types $i$ differ only in wage $w_i$; there are finitely many, with $w_L<w_H$ for the two-type case of 5.2. A worker earns pre-tax income $y=w\,l$ with hours $l$, pays income tax $T(y)$ (any nonlinear schedule), and spends net income $B=y-T(y)$ on goods $x=(x_1,\dots,x_n)$ at consumer prices $q=p+t$, where $p$ are fixed producer prices and $t$ are commodity taxes. The government observes $y$ and purchases, not $w$ or $l$. Utility is

$$U\big(\phi(x),\,l\big),$$

the same functions $U$ and $\phi$ for everyone, with $U$ increasing in $\phi$ and decreasing in $l$.

*In words:* goods enter utility only through a subutility $\phi$ that does not involve labor. This is [weak separability](../reference.md#weak-separability): the marginal rate of substitution between any two goods is independent of hours worked. Everyone also shares the same $\phi$: taste homogeneity.

Let $V(q,B)=\max\{\phi(x): q\cdot x=B\}$ be the indirect subutility, and $x(q,B)$ the demands. The high type's [incentive constraint](../reference.md#incentive-compatibility) against mimicking the low type is

$$U\big(V(q,B_H),\,y_H/w_H\big)\;\ge\;U\big(V(q,B_L),\,y_L/w_H\big).$$

*In words:* the mimicker faces the low type's $B_L$ and prices $q$, so under separability he picks $x(q,B_L)$, the low type's basket, and only his hours differ.

**Theorem ([Atkinson-Stiglitz](../reference.md#atkinson-stiglitz)).** Under these assumptions, any allocation with differentiated commodity taxes is weakly Pareto dominated by one with no commodity taxes (equivalently, uniform ones) and a modified income tax. The dominance is strict in revenue whenever the taxes distort choices.

*In words:* once the income tax is optimal, commodity taxes add nothing.

**Proof (the short version of Laroque 2005, *Economics Letters*, and Kaplow 2006, *JPubE*).** Set each type's net income, at producer prices, to $B_i'=e\big(p,V(q,B_i)\big)$, the cheapest cost at prices $p$ of the subutility it had ($e$ is the expenditure function of $\phi$; [`grad-micro` 2.3](../../grad-micro/lessons/02-03-expenditure-minimization-duality.md)). Then $V(p,B_i')=V(q,B_i)$ for every bundle. So every type's utility is unchanged, and so is every mimicker's utility, because the mimicker's goods utility is also just $V$ evaluated at $B_L$. All incentive constraints hold exactly as before. Revenue per worker was $y_i-B_i+t\cdot x_i=y_i-p\cdot x_i$ and is now $y_i-B_i'$. Since $x_i$ reaches the same $\phi$ at cost $p\cdot x_i$, the cheapest cost satisfies $B_i'\le p\cdot x_i$. Revenue rises by the commodity taxes' [excess burden](../reference.md#excess-burden). ∎

*In words:* swap the commodity tax for income-tax changes that exactly compensate each bundle; since nobody's utility at any bundle moves, the incentive structure is untouched, and the deadweight loss is freed as revenue.

Note what the proof never used: the welfare weights. It is a Pareto improvement, so it holds for utilitarian, maximin, or any other objective. Choosing among them is left to [`philosophy-of-economics`](../../philosophy-of-economics/syllabus.md).

**Savings.** Two periods. The worker works in period 1, consumes $c_1$ and $c_2$, and saves at gross return $R$. A tax on interest lowers the net return, so the consumer price of $c_2$ rises from $1/R$ to $1/R_{\text{net}}$. A savings tax is just a commodity tax on future consumption, an [intertemporal wedge](../reference.md#intertemporal-wedge). If $U=U\big(\phi(c_1,c_2),l\big)$, the theorem says: tax income, not saving.

**When it fails: the mimicker's basket.** Without separability or homogeneity, the mimicker's demand $x^M(q,B_L)$ can differ from the low type's $x^L$. Levy a small tax $dt$ on good $k$ and raise $B_L$ by $x_k^L\,dt$, which keeps the low type exactly as well off (Roy's identity). The mimicker's goods utility changes by

$$dV^M=-\mu_M\,\big(x_k^M-x_k^L\big)\,dt ,$$

where $\mu_M>0$ is his marginal utility of net income.

*In words:* a compensated tax on whatever the mimicker buys more of punishes mimicking and slackens the incentive constraint, which lets the government redistribute more. Under the theorem's assumptions $x^M=x^L$ and the effect is zero.

## Picture

![Two panels of good 1 against good 2 with the same budget line. Left, separable preferences: the low type and the mimicker choose the same point. Right, leisure raises the taste for good 2: the mimicker's dashed indifference curve touches the budget line at a point with more good 2 than the low type's](assets/06-01-fig1.svg)

Same budget, same prices. On the left the two people are indistinguishable at the checkout, so no commodity tax can separate them. On the right the mimicker's extra leisure tilts him toward good 2, so a tax on good 2 hurts him more than the person he is imitating. The numbers are Example 2's.

## Worked examples

**Example 1 (separable: the savings tax is pure waste).** $\phi=\ln c_1+\ln c_2$, $B_L=100$, pre-tax return $R=1.5$ over the period (think of a generation), and a 20 percent tax on interest, so $R_{\text{net}}=1+0.5\times0.8=1.4$. With log utility half the budget is spent on each period: $c_1=50$, savings 50, $c_2=50\times1.4=70$. That basket is the same for the low type and for any mimicker handed $B_L$, whatever his wage. The tax collects $50\times0.5\times0.2=5$ in period 2, worth $5/1.5=3.333$ today.

Now abolish the tax and cut $B_L$ to the $B'$ that keeps $\ln c_1+\ln c_2$ at $\ln 50+\ln 70$ at return 1.5: $(B'/2)(1.5B'/2)=3{,}500$, so $B'=96.609$. The government saves $3.391$ in transfers and gives up $3.333$ of revenue: a net gain of $0.057$ per low-type worker, the excess burden of the savings tax. The mimicker, who faces the same $B'$, is exactly as well off as before, so the incentive constraint is unaffected. Do the same at the high type's bundle and the whole savings tax dissolves into the income tax.

**Example 2 (non-separable: a commodity tax earns its place).** Let $\phi$ depend on leisure $\ell=1-l$: utility from goods is $\ln x_1+a\ln x_2$ with $a=2\ell$. The low type ($w_L=1$) earns $y_L=0.5$, working half his time: $\ell=0.5$, $a_L=1$. A mimicker with $w_H=2$ earns the same 0.5 in a quarter of his time: $\ell=0.75$, $a_M=1.5$. Both have $B_L=1$ at untaxed prices. Good 2's budget share is $a/(1+a)$, so the low type buys $(0.5,\,0.5)$ and the mimicker buys $(0.4,\,0.6)$.

Tax good 2 at $t=0.10$ and raise $B_L$ to keep the low type indifferent. Here $V=(1+a)\ln B-a\ln q_2+\text{const}$, so $B_L'=1.1^{1/2}=1.0488$. The mimicker's goods utility changes by

$$\Delta V^M=\big[(1+a_M)\,a_L/(1+a_L)-a_M\big]\ln 1.1=-0.25\times0.0953=-0.0238 .$$

The marginal formula agrees: $\mu_M=(1+a_M)/B=2.5$ and $x_2^M-x_2^L=0.1$ give $-0.25$ per unit of $t$. The price is small. The extra transfer is 0.0488 against tax collected $0.1\times0.4767=0.0477$, a net cost of 0.0011, second order in $t$. The IC gain is first order. That is [Corlett-Hague](../reference.md#corlett-hague) from 4.2 reborn: tax the goods complementary with leisure. The reason now is screening, not second-best labor distortion.

## Watch out

- **You might think A-S says commodity taxes are zero, but actually it says they are uniform.** A uniform tax on all goods is an income tax in disguise; only *differences* in rates are redundant.
- **You might think it contradicts Ramsey (4.1), but actually the tool sets differ.** Ramsey had no income tax, so commodity taxes did all the work. Here a nonlinear income tax does the redistributing, and a commodity tax has to earn its place as a *screening* device.
- **You might think "no tax on savings" means "no tax on capital income of any kind," but actually it covers the normal return on saving by identical-taste workers.** Heterogeneous [tastes](../reference.md#taste-heterogeneity) (Saez 2002, *JPubE*: if the skilled are more patient, a savings tax screens), inherited wealth, and risky, private skills (6.3) all reopen the question. The Mirrlees Review (*Tax by Design*, 2011) read the evidence as favouring, broadly, exempting the normal return to saving while still taxing above-normal returns.
- **You might think separability is about goods and leisure being "unrelated," but actually it is a condition on the MRS among goods.** $x_1^{0.3}x_2^{0.3}\ell^{0.4}$ couples leisure to goods multiplicatively, yet it is weakly separable: the MRS between $x_1$ and $x_2$ is $x_2/x_1$ whatever $\ell$ is.

## One-liner

If how people divide their spending does not depend on how hard they worked, a commodity or savings tax cannot tell a mimicker from the person he imitates, so the income tax should do all the work.

## Problems

**P1** 🟢 *(Exegetical (a) · Formal (b).)* Goods are $c_1,c_2$, leisure is $\ell$. (a) Which of these are weakly separable between goods and leisure? Give the MRS test result for each.
(i) $\ln c_1+\ln c_2+\ln\ell$ (ii) $c_1^{0.3}c_2^{0.3}\ell^{0.4}$ (iii) $\ln c_1+(1+\ell)\ln c_2+\ln\ell$ (iv) $\ln c_1+\ln(c_2+\ell)+\ln\ell$
(b) For each non-separable case: a low type with $\ell=0.5$ and a mimicker with $\ell=0.75$ each spend $B=2$ at prices $q_1=q_2=1$. Find both baskets and say which good's compensated tax slackens the high type's incentive constraint.

**P2** 🟡 *(Formal.)* Utility is $\ln c_1+0.9\ln c_2-\tfrac12 l^2$ with $l=y/w$. The low type ($w=1$) earns $y_L=0.6$ and gets $B_L=1$. The pre-tax return is $R=1.6$ and interest is taxed at 50 percent. (a) Find the basket and utility of the low type and of a mimicker with $w=2$. (b) Abolish the savings tax and find the $B'$ that leaves the low type exactly as well off; show the mimicker's utility is also unchanged. (c) What does the government gain per low-type worker, in period-1 units?

**P3** 🔴 *(Formal (a) · Exegetical (b).)* An invented economy: goods utility $\ln c_1+\beta\ln c_2$, labor separable, but patience differs by skill: $\beta_L=0.8$, $\beta_H=1.2$. The low bundle has $B_L=1$ at $q_2=1$. (a) A savings tax raises $q_2$ to 1.1, and $B_L$ is raised to keep the low type indifferent. Find the new $B_L$ and the change in the mimicker's goods utility. (b) Which assumption of Atkinson-Stiglitz fails, and what would the compensated savings tax do to the high type's incentive constraint if patience were instead *negatively* correlated with skill?

<details><summary>Solutions</summary>

**P1** *(Exegetical (a) · Formal (b).)*

**Must hit, strict (a):**

- (i) Separable: $\mathrm{MRS}_{12}=c_2/c_1$, no $\ell$.
- (ii) Separable: $\mathrm{MRS}_{12}=(0.3/c_1)/(0.3/c_2)=c_2/c_1$, no $\ell$. The multiplicative form does not matter.
- (iii) Not separable: $\mathrm{MRS}_{12}=c_2/\big((1+\ell)c_1\big)$ depends on $\ell$.
- (iv) Not separable: $\mathrm{MRS}_{12}=(c_2+\ell)/c_1$ depends on $\ell$.

(b) (iii): good 2's share is $(1+\ell)/(2+\ell)$: 0.6 for the low type, basket $(0.8,\,1.2)$; $1.75/2.75=0.636$ for the mimicker, basket $(0.727,\,1.273)$. The mimicker buys more good 2, so tax good 2. (iv): the first-order condition gives $c_1=c_2+\ell$, so $c_1=(B+\ell)/2$. The low type buys $(1.25,\,0.75)$ and the mimicker $(1.375,\,0.625)$. Leisure substitutes for good 2, so the mimicker buys more good 1: tax good 1.

**Wrong turns:** calling (ii) non-separable because leisure multiplies the goods; assuming the leisure-related good is always the one to tax. In (iv), leisure *replaces* good 2, so the mimicker buys less of it.

---

**P2** *(Formal.)*

(a) $R_{\text{net}}=1+0.6\times0.5=1.3$. Good 1's share is $1/1.9$: $c_1=0.5263$, savings $0.4737$, $c_2=0.4737\times1.3=0.6158$. Goods utility $\ln0.5263+0.9\ln0.6158=-1.0782$ for both, since both spend $B_L=1$ at the same prices. Hours differ: $\tfrac12(0.6)^2=0.18$ for the low type, $\tfrac12(0.3)^2=0.045$ for the mimicker. So $U_L=-1.2582$ and $U_M=-1.1232$.

(b) Goods utility is $1.9\ln B+0.9\ln R_{\text{net}}+\text{const}$, so holding it fixed while $R_{\text{net}}$ goes from 1.3 to 1.6 needs

$$B'=(1.3/1.6)^{0.9/1.9}=0.8125^{0.4737}=0.9063 .$$

New basket: $c_1=0.4770$, $c_2=0.4293\times1.6=0.6869$, goods utility $-1.0782$ again. The mimicker gets the same $B'$ and the same basket, and his hours did not change, so $U_M=-1.1232$ as before.

(c) Transfer saved: $1-0.9063=0.0937$. Revenue lost: $0.4737\times0.6\times0.5=0.1421$ in period 2, or $0.1421/1.6=0.0888$ today. Net gain $0.0049$, the savings tax's excess burden on this bundle.

**Wrong turns:** discounting lost revenue at the after-tax return 1.3 instead of the pre-tax return 1.6 (the government's own rate of transformation); giving the mimicker a different basket because his wage differs.

---

**P3** *(Formal (a) · Exegetical (b).)*

(a) Goods utility is $(1+\beta)\ln B-\beta\ln q_2+\text{const}(\beta)$. Holding the low type fixed: $1.8\ln(B'/1)=0.8\ln1.1$, so $B'=1.1^{0.8/1.8}=1.0433$. The mimicker's change is

$$\Delta V^M=\Big[\tfrac{2.2\times0.8}{1.8}-1.2\Big]\ln1.1=-\tfrac{0.4}{1.8}\times0.0953=-0.0212 .$$

The patient mimicker saves $1.2/2.2=0.545$ of his budget against the low type's $0.8/1.8=0.444$, so the savings tax lands harder on him and the constraint slackens.

**Must hit, strict (b):**

- The failing assumption is taste homogeneity (the same $\phi$ for everyone); separability from labor still holds.
- With patience negatively correlated with skill (swap the values: $\beta_L=1.2$, $\beta_H=0.8$), the mimicker saves less than the low type: the coefficient becomes $(1.2-0.8)/2.2=+0.18$. A compensated savings tax then makes mimicking *more* attractive and tightens the constraint; a savings subsidy would be the screening tool.

**Wrong turns:** answering "separability fails"; concluding that a savings tax is always justified once tastes differ. The sign depends on the correlation between patience and skill, which is an empirical question.

**Model answer (b):** Taste homogeneity fails: the high type's subutility has a different discount factor. If the skilled were less patient, their mimicker would save less than the genuine low type. The compensated savings tax would then raise the mimicker's goods utility by $0.18\ln q_2$ and tighten the incentive constraint, so screening would call for a savings subsidy instead.

</details>

## Flashback

**From Lesson [5.3](05-03-the-saez-formula.md) (The Saez formula):** *(Formal (a)–(b) · Exegetical (c).)* An invented country taxes income above 600,000 dollars at 70 percent. Mean income in the bracket is 1.2 million, the elasticity of taxable income is $e=0.3$, and there are no income effects. (a) Compute the Pareto parameter $a$ and the revenue-maximizing top rate. Per top taxpayer, find the mechanical and behavioral effects of raising the rate by one point from 70 percent, and the net revenue. (b) At $e=0.3$, what Pareto parameter would make 70 percent exactly revenue-maximizing, and what mean top income would that imply above the same 600,000 threshold? (c) In one sentence: why can you recommend cutting the rate in (a) without knowing the welfare weight $g$ on top earners?

<details>
<summary>Solution</summary>

(a) $a=1{,}200{,}000/600{,}000=2$, so $ae=0.6$ and the revenue peak is $1/1.6=0.625$. A one-point rise from 70 percent:

$$dM=600{,}000\times0.01=6{,}000$$

$$dB=-\frac{0.7}{0.3}\times0.3\times1{,}200{,}000\times0.01=-8{,}400$$

so net revenue changes by $-2{,}400$. The rate is on the wrong side of the peak: a one-point *cut* raises about 2,400 dollars per top taxpayer.

(b) $1/(1+0.3a)=0.7$ gives $a=(1/0.7-1)/0.3=10/7\approx1.43$. For a Pareto tail the mean above the threshold is $a/(a-1)$ times the threshold, here $10/3$: a mean of 2 million dollars. The tail would have to be much thicker to justify 70 percent on revenue grounds.

**Must hit, strict (c):**

- A cut raises revenue and also leaves top earners better off, so nobody loses: a Pareto improvement.
- Any $g\ge0$ therefore favors the cut; the optimum $(1-g)/(1-g+ae)$ never exceeds the revenue peak.

**Model answer (c):** Above the revenue peak a cut both raises revenue and makes top earners better off, so it is a Pareto improvement that every nonnegative weight endorses.

**Wrong turns:** dropping $a$ and using the linear-tax peak $1/(1+e)=0.769$, which puts 70 percent below the peak and gets the direction backwards; charging the behavioral response only the extra point instead of the whole 70 percent rate.

</details>

## Connections

- **Backward:** the mimicker and the binding high-type constraint are [5.2](05-02-the-mirrlees-problem.md), itself [`grad-micro` 5.3](../../grad-micro/lessons/05-03-screening.md) with the government as screener. Example 2 is [4.2](04-02-many-person-ramsey-and-corlett-hague.md)'s Corlett-Hague rule, re-derived as a screening motive. The compensation step is the expenditure function of [`grad-micro` 2.3](../../grad-micro/lessons/02-03-expenditure-minimization-duality.md), and the "cost" it recovers is the [2.3](02-03-excess-burden-and-the-harberger-triangle.md) excess burden.
- **Forward:** [6.2](06-02-chamley-judd-and-the-exploding-wedge.md) reaches a zero long-run capital tax by a different route: no income-tax screening, just a wedge that compounds with the horizon. [6.3](06-03-the-inverse-euler-equation.md) breaks A-S by making skills risky and private: saving becomes insurance against turning out low-skill, and a positive savings wedge returns.
- **Sideways:** the two-period consumer is the life-cycle saver of [`grad-macro` 5.1](../../grad-macro/lessons/05-01-permanent-income-life-cycle.md); a savings tax is a wedge in its Euler equation. The theorem is weight-free, so the question of *which* redistribution to pursue stays with [`philosophy-of-economics`](../../philosophy-of-economics/syllabus.md) and [`political-philosophy`](../../political-philosophy/syllabus.md).
