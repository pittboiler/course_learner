# Public Economics · Lesson 4.1: The Ramsey rule

> ⏱ ~15 min · Module 4: Optimal commodity taxation · Builds on: [2.3 Excess burden and the Harberger triangle](02-03-excess-burden-and-the-harberger-triangle.md), [2.4 Second best and the marginal cost of public funds](02-04-second-best-and-the-marginal-cost-of-public-funds.md), [`grad-micro` 2.4 Slutsky](../../grad-micro/lessons/02-04-slutsky-equation-comparative-statics.md) · Unlocks: [4.2 Many-person Ramsey and Corlett-Hague](04-02-many-person-ramsey-and-corlett-hague.md), [4.3 Diamond-Mirrlees](04-03-production-efficiency-diamond-mirrlees.md)

## Why this matters

Module 2 priced one tax at a time. A real treasury has a list of goods it can tax and a sum it must raise, and no lump-sum tax. Which goods, and at what rates? Frank Ramsey answered in 1927 (*Economic Journal*, "A Contribution to the Theory of Taxation"), on a problem Pigou had put to him. The answer is the template for every optimal-tax formula in the rest of the course. It also turns up outside tax policy: it is how a regulated utility that must cover a fixed cost should set its prices.

## The idea

Every tax has a price tag per dollar raised. The last dollar raised by a tax costs taxpayers that dollar plus a sliver of excess burden. If the last dollar from a tax on good A costs 1.08 and the last dollar from a tax on good B costs 1.28, the mix is wrong. Cut the B tax a little, raise the A tax enough to replace the revenue, and total burden falls by about 20 cents per dollar shifted. Keep shifting until the last dollar costs the same everywhere. (Those two numbers are Example 1's uniform tax.)

Where does that condition lead? A tax destroys value only through the purchases it stops, the substitution of [2.3](02-03-excess-burden-and-the-harberger-triangle.md). A good whose demand barely moves can carry a high rate at little cost; a good whose buyers flee cannot. So the optimum taxes inelastic goods heavily and elastic goods lightly. Put exactly, it sets the rates so that **every good's compensated demand shrinks by the same percentage**. Equal proportional cuts in quantity, not equal rates, are what minimize the waste.

The catch is visible already. The goods people cannot do without, such as staple food, heating and medicine, are the inelastic ones. An efficiency rule that taxes them hardest may fall hardest on the poor. That is the equity objection, and [4.2](04-02-many-person-ramsey-and-corlett-hague.md) builds it into the formula.

## The formal version

**Notation warning.** In Module 2, $q$ was a quantity. In Module 4, **$q_i$ is the consumer price** of good $i$ and $x_i$ its quantity.

**Setup.** One consumer (a representative household) buys goods $i=1,\dots,n$ and an untaxed good 0, think leisure. Producer prices $p_i$ are fixed: constant returns, so by [2.1](02-01-partial-equilibrium-incidence.md) consumers bear any tax fully. A unit tax $t_i$ sets the consumer price $q_i=p_i+t_i$. Write $V(q,m)$ for indirect utility, $x_i(q,m)$ for Marshallian demand, and $\alpha=\partial V/\partial m$ for the marginal utility of income. The government must raise revenue $R$, and no lump-sum tax is available: if one were, it would use that and nothing else, because a [lump-sum tax](../reference.md#lump-sum-tax) has no excess burden.

**The Ramsey problem.**

$$\max_{t_1,\dots,t_n}\;V(q,m)\quad\text{s.t.}\quad \sum_j t_j\,x_j(q,m)=R.$$

*In words:* choose the rates that leave the consumer best off among all the ways of raising $R$, which is the same as minimizing [excess burden](../reference.md#excess-burden).

**First-order condition.** With multiplier $\lambda$ on the budget and Roy's identity $\partial V/\partial q_i=-\alpha x_i$,

$$\frac{\alpha\,x_i}{x_i+\sum_j t_j\,\partial x_j/\partial q_i}=\lambda\quad\text{for every } i.$$

*In words:* the numerator is what a small rise in $t_i$ costs the consumer, and the denominator is the extra revenue it brings in. Their ratio, the [marginal cost of public funds](../reference.md#marginal-cost-of-public-funds) of that tax, must be the same for every tax. This is the idea section's equalization. With quasilinear utility, $\alpha=1$ and $\lambda$ is [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md)'s MCPF in dollars. It is a shadow price, as in [`grad-micro` 1.4](../../grad-micro/lessons/01-04-envelope-theorem-duality.md).

**The Ramsey rule.** Rewrite the condition as $\sum_j t_j\,\partial x_j/\partial q_i=-(1-\alpha/\lambda)\,x_i$. Split each derivative with Slutsky, $\partial x_j/\partial q_i=S_{ji}-x_i\,\partial x_j/\partial m$, where $S$ is the compensated (Slutsky) matrix. Use its symmetry $S_{ji}=S_{ij}$ ([`grad-micro` 2.4](../../grad-micro/lessons/02-04-slutsky-equation-comparative-statics.md)). Then

$$\frac{\sum_j t_j\,S_{ij}}{x_i}=-\theta\quad\text{for every } i,\qquad \theta=1-\frac{\alpha}{\lambda}-\sum_j t_j\frac{\partial x_j}{\partial m}.$$

*In words:* $\sum_j t_j S_{ij}$ is, to first order, the change in the compensated demand for good $i$ caused by the whole tax system, so the [Ramsey rule](../reference.md#ramsey-rule) says every good's compensated demand falls by the same proportion $\theta$. The income effects all sit inside $\theta$, which is common to every good, so they do not tell goods apart. Only substitution does, which is why the rule runs on compensated responses. With linear demands the first-order statement is exact.

**Inverse elasticity special case.** Suppose utility is quasilinear in good 0 and each taxed good's demand depends only on its own price, so $S_{ij}=0$ for $i\neq j$ and there are no income effects. Then $t_i\,x_i'(q_i)=-\theta x_i$, which rearranges to

$$\frac{t_i}{q_i}=\frac{\theta}{\lvert\varepsilon_i\rvert},\qquad \varepsilon_i=\frac{q_i}{x_i}\frac{dx_i}{dq_i}\ \text{at the taxed price},\qquad \theta=1-\frac1\lambda.$$

*In words:* the tax as a share of the consumer price is inversely proportional to the good's (compensated) demand elasticity. This is the [inverse elasticity rule](../reference.md#inverse-elasticity-rule). It is an equation to solve, not a closed form, because $\varepsilon_i$ is evaluated at the taxed price. The *Ramsey number* $\theta$ rises from 0, when $R=0$, toward 1. At $\theta=1$ the rule becomes the monopolist's Lerner rule $t_i/q_i=1/\lvert\varepsilon_i\rvert$ ([`grad-micro` 6.1](../../grad-micro/lessons/06-01-monopoly-price-discrimination.md)): a government that maximizes revenue prices each good like a monopolist, and its MCPF is infinite. Which revenue target is right is not the rule's business. It prices the options.

**The equity objection.** The rule minimizes excess burden for a single consumer, so it cannot see who buys what. When the inelastic goods are necessities, the Ramsey structure puts the heaviest rates on budgets that are mostly necessities. This is the [equity objection](../reference.md#equity-objection). [4.2](04-02-many-person-ramsey-and-corlett-hague.md) adds households with welfare weights $g_h$ that average one and shows how the rates move. How much weight to give whom is an input, argued in [`philosophy-of-economics`](../../philosophy-of-economics/syllabus.md) and [`political-philosophy`](../../political-philosophy/syllabus.md).

## Picture

![Two panels with price on the vertical axis and quantity on the horizontal. Left, the inelastic good A: the Ramsey price 1.5 is above the uniform price 1.36, and the shaded Ramsey triangle, area 2.50, is larger than the dashed uniform triangle, 1.30. Right, the elastic good B: the Ramsey price 1.2 is below the uniform 1.36, and the shaded Ramsey triangle, 1.00, is far smaller than the dashed uniform one, 3.25. Both schemes raise 63; total loss is 3.50 under Ramsey and 4.55 under the uniform rate](assets/04-01-fig1.svg)

Example 1 drawn. Ramsey accepts a *bigger* triangle on the inelastic good A to shrink a much bigger one on the elastic good B. Both quantities end at 90, the same 10 percent cut from 100.

## Worked examples

**Example 1 (clean): two goods, linear demands.** Invented numbers: quasilinear utility, producer prices 1, independent demands $x_A=120-20q_A$ and $x_B=150-50q_B$, and revenue $R=63$. Untaxed, both sell 100; the elasticities there are $-0.2$ and $-0.5$.

*Ramsey.* With linear demand the rule $t_i\,b_i=\theta x_i$ (slope $b_i$) is exact. Let every quantity fall by a share $s$ of its untaxed level, so $x_i=100(1-s)$ and $t_i=100s/b_i$. Revenue is $s(1-s)\sum_i 100^2/b_i=700\,s(1-s)$. Setting this to 63 gives $s=0.1$, taking the smaller root (the other lies past the revenue peak). So:

- $t_A=100(0.1)/20=0.50$ and $t_B=100(0.1)/50=0.20$; both goods sell 90.
- Revenue $0.50\times90+0.20\times90=45+18=63$.
- Excess burden, the two triangles: $\tfrac12(20)(0.5)^2+\tfrac12(50)(0.2)^2=2.5+1.0=3.5$.
- Check the inverse elasticity form at the taxed prices $q_A=1.5$ and $q_B=1.2$. There $\varepsilon_A=-20(1.5)/90=-\tfrac13$ and $t_A/q_A=\tfrac13$; $\varepsilon_B=-50(1.2)/90=-\tfrac23$ and $t_B/q_B=\tfrac16$. Both products equal $\tfrac19=\theta$. So $\lambda=1/(1-\theta)=1.125$, and the last dollar costs 1.125 in both markets.

*Uniform.* A single rate $t$ must satisfy $t(200-70t)=63$, so $t=0.3605$. Its excess burden is $\tfrac12(70)t^2=4.55$ ($1.30$ on A, $3.25$ on B). At that rate the last dollar from A costs 1.08 and from B costs 1.28, the unequal pair from the idea section. Ramsey removes 23 percent of the excess burden by moving revenue toward A (45 instead of 33.4).

**Example 2 (why you'd care): a regulated utility.** An invented power company has a network costing $F=56$ a day and a marginal cost of 2 per unit for everyone. Residential demand is $x_R=70-10P_R$ and industrial demand $x_I=100-25P_I$. Pricing at marginal cost is efficient, but it leaves the fixed cost unpaid. The regulator wants the prices that maximize total surplus subject to break-even. That is the Ramsey problem with markups $P_i-2$ in place of taxes and $F$ in place of $R$: [Ramsey-Boiteux pricing](../reference.md#ramsey-boiteux-pricing) (Boiteux 1956, *Econometrica*; rediscovered by Baumol and Bradford, 1970, *AER*). With $\mu$ the multiplier on break-even, the rule reads

$$\frac{P_i-c}{P_i}=\frac{k}{\lvert\varepsilon_i\rvert},\qquad k=\frac{\mu}{1+\mu}.$$

*In words:* the Lerner index is a fraction $k$ of the monopoly markup. At marginal cost both classes buy 50, so the same method applies, with $\sum_i 50^2/b_i=350$. Setting $350\,s(1-s)=56$ gives $s=0.2$. The markups are $50(0.2)/10=1$ and $50(0.2)/25=0.4$, so $P_R=3$ and $P_I=2.4$, and each class buys 40. Profit covers the network: $1\times40+0.4\times40=56$. Check: $\varepsilon_R=-10(3)/40=-\tfrac34$ with Lerner $\tfrac13$, and $\varepsilon_I=-25(2.4)/40=-\tfrac32$ with Lerner $\tfrac16$. Both give $k=\tfrac14$, so $\mu=\tfrac13$: each extra dollar of fixed cost costs a third of a dollar of surplus beyond itself.

The deadweight loss is $\tfrac12(10)(1)^2+\tfrac12(25)(0.4)^2=7$. A uniform markup covering 56 would be 0.765 on both classes, with a loss of 10.23, so Ramsey-Boiteux saves 32 percent. Who bears the network: residential customers pay 40 of the 56, because they are the captive ones. An unregulated monopolist would set $k=1$ and charge 4.5 and 3, earning 87.5. This is [`grad-micro` 6.1](../../grad-micro/lessons/06-01-monopoly-price-discrimination.md)'s third-degree price discrimination, with the regulator dialing its intensity down to what the fixed cost needs.

## Watch out

- **You might think Ramsey equalizes tax rates, but actually** it equalizes proportional cuts in compensated quantity. With independent demands, rates are equal only when compensated elasticities are.
- **You might think the inverse elasticity rule is the Ramsey rule, but actually** it is the special case with no compensated cross effects. With substitutes or complements, use $\sum_j t_j S_{ij}=-\theta x_i$; [4.2](04-02-many-person-ramsey-and-corlett-hague.md)'s Corlett-Hague result comes from the cross effects with untaxed leisure.
- **You might think plugging measured (uncompensated) elasticities into the rule is fine, but actually** income effects wash into $\theta$; the rates run on [compensated elasticities](../reference.md#compensated-elasticity), exactly as the triangle of 2.3 does.
- **You might think the rule says necessities *should* be taxed most, but actually** it says that minimizes excess burden for one representative consumer. With a lump-sum tax available, $\theta=0$ and no commodity would be taxed; with unequal households, 4.2 changes the answer.

## One-liner

> Raise revenue where it hurts behavior least: set taxes so every good's compensated demand shrinks by the same percentage, which with independent demands means rates inversely proportional to elasticities, efficient for one consumer and blind to who buys what.

## Problems

**P1 (🟢) *(Formal.)*** Invented numbers: quasilinear utility, producer prices 1, independent demands $x_1=100-40q_1$ and $x_2=80-20q_2$, where $q_i$ is the consumer price. The government must raise 43.2 with unit taxes. (a) Find the Ramsey taxes and quantities, and confirm the inverse elasticity rule at the taxed prices. (b) Find the excess burden, and compare it with that of the single unit tax on both goods that raises 43.2. (c) Find the marginal cost of public funds at the Ramsey optimum, and show that the last dollar costs the same in both markets.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** An invented regional railway has marginal cost 10 per trip for both of its services and a fixed cost it must cover. Commuter demand has constant elasticity $-0.8$ and leisure demand constant elasticity $-4$. The regulator's break-even constraint gives a Ramsey-Boiteux number $k=0.2$. (a) Find both prices and both Lerner indices. (b) What would an unregulated monopolist charge for each service? For which values of $k$ does the Ramsey-Boiteux commuter price exist? (c) A consultant says Ramsey-Boiteux pricing is "monopoly pricing in disguise." Say what is right and what is wrong in that. Two sentences.

**P3 (🔴, optional) *(Formal (a) · Exegetical (b).)*** Two taxed goods have zero compensated cross effects with each other. Both have the same uncompensated own-price elasticity, $-0.6$. Good A has budget share 0.2 and income elasticity 1.5; good B has budget share 0.1 and income elasticity 0. (a) Find each good's compensated elasticity. If the Ramsey number is $\theta=0.06$, find each tax as a share of the consumer price, and the rates an analyst would get by plugging in uncompensated elasticities. (b) Why does the rule use compensated elasticities? Two sentences.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) With linear independent demands, the Ramsey rule $t_i b_i=\theta x_i$ cuts both quantities by the same share $s$ of their untaxed levels. Untaxed, both goods sell 60, so $x_i=60(1-s)$ and $t_i=60s/b_i$. Revenue is $s(1-s)\,(60^2/40+60^2/20)=270\,s(1-s)=43.2$, so $s(1-s)=0.16$ and $s=0.2$. The root $s=0.8$ is past the revenue peak: same revenue, far more distortion.

- $t_1=60(0.2)/40=0.30$ and $t_2=60(0.2)/20=0.60$, so both goods sell 48.
- Revenue: $0.30\times48+0.60\times48=14.4+28.8=43.2$.
- Inverse elasticity: $q_1=1.3$, $\varepsilon_1=-40(1.3)/48=-\tfrac{13}{12}$, and $t_1/q_1=\tfrac{3}{13}$; $q_2=1.6$, $\varepsilon_2=-20(1.6)/48=-\tfrac23$, and $t_2/q_2=\tfrac38$. Both products equal $\tfrac14=\theta$.

Good 2 is less elastic, so it carries twice the tax.

(b) Ramsey: $\tfrac12(40)(0.3)^2+\tfrac12(20)(0.6)^2=1.8+3.6=5.4$. Uniform: $t(120-60t)=43.2$ gives $t=0.4708$ (smaller root), with loss $\tfrac12(60)t^2=6.65$. Ramsey saves 1.25, or 19 percent.

(c) $\lambda=1/(1-\theta)=\tfrac43$. Directly: in a linear market the marginal excess burden is $b_it_i/(x_i^0-2b_it_i)$, where $x_i^0=60$ is the untaxed quantity. That is $12/(60-24)=\tfrac13$ in market 1 and $12/(60-24)=\tfrac13$ in market 2, so the MCPF is $1+\tfrac13=\tfrac43$ in both.

**Wrong turns:** taking the larger root $s=0.8$; making the rates inversely proportional to the elasticities at $q=1$ (the rule holds at the taxed prices); equalizing tax *rates* instead of proportional quantity cuts.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) With constant elasticity, $(P-10)/P=k/\lvert\varepsilon\rvert$ gives $P=10/(1-k/\lvert\varepsilon\rvert)$. Commuters: Lerner $0.2/0.8=0.25$, so $P=10/0.75=13.33$. Leisure: Lerner $0.2/4=0.05$, so $P=10/0.95=10.53$. The captive commuters pay a markup of 3.33 per trip, the leisure travellers 0.53.

(b) The monopolist sets $k=1$. Leisure: Lerner $1/4$, so $P=13.33$. Commuters: demand is inelastic, so every price rise increases revenue and cuts cost, and profit rises without limit as the price rises. There is no finite monopoly price, and the formula $1-1/0.8<0$ says so. The Ramsey-Boiteux commuter price exists only when $k/0.8<1$, that is, $k<0.8$.

**Must hit, strict (c):**

- Right: the *structure* is the same inverse elasticity rule, with markups highest where demand is least elastic, as in third-degree price discrimination.
- Wrong: the *level* $k$ is set by the break-even constraint, not by profit. The prices maximize total surplus subject to covering the fixed cost, and $k<1$ unless the required profit is the monopoly maximum.

**Wrong turns:** writing $(P-c)/c$ instead of $(P-c)/P$; answering (b) with $P=10/(1-1.25)<0$ instead of noticing that no profit maximum exists.

**Model answer (c):** The consultant is right about the shape: markups follow the same inverse elasticity rule as a discriminating monopolist's, so the least elastic customers pay the most. The consultant is wrong about the level: $k$ is only as large as the fixed cost requires, and the prices maximize total surplus subject to break-even, which is why here commuters pay 13.33 rather than an unbounded monopoly price.

---

**P3** *(Formal (a) · Exegetical (b).)*

(a) The Slutsky equation in elasticities is $\varepsilon^c_i=\varepsilon_i+s_i\eta_i$, with $s_i$ the budget share and $\eta_i$ the income elasticity. A: $-0.6+0.2(1.5)=-0.3$. B: $-0.6+0.1(0)=-0.6$. With zero compensated cross effects the rule is $t_i/q_i=\theta/\lvert\varepsilon^c_i\rvert$: A gets $0.06/0.3=20$ percent of its consumer price and B gets $0.06/0.6=10$ percent. With uncompensated elasticities both would get $0.06/0.6=10$ percent. The error halves A's tax, because A's measured response is mostly an income effect.

**Must hit, strict (b):**

- Excess burden comes from substitution only: the income effect of a tax is exactly what a lump-sum tax of the same size would cause, and a lump-sum tax wastes nothing (2.3).
- In the first-order condition the income-effect terms collect into $\theta$, which is common to every good, so they cannot justify different rates; only the compensated matrix $S$ can.

**Wrong turns:** adding the income term with the wrong sign ($\varepsilon-s\eta$), which makes A *more* elastic; arguing that uncompensated elasticities are right "because they are what we observe", which confuses what is measured with what causes waste.

**Model answer (b):** A tax's income effect is the same as a lump-sum tax's, and a lump-sum tax has no excess burden, so only substitution, the compensated response, measures the waste a tax causes. In the derivation the income terms fold into the common Ramsey number $\theta$, so they shift every rate together and cannot tell goods apart.

</details>

## Flashback

**From Lesson [3.2](03-02-prices-vs-quantities.md) (Prices vs quantities):** *(Formal (a)–(b) · Exegetical (c).)* An invented agency has run an emissions tax for years. Aggregate marginal abatement cost is $\mathrm{MAC}=c_0+3a+\theta$, where $a$ is abatement and $\theta$ a cost shock with mean 0 that firms see and the agency does not; firms are price takers. The marginal benefit of abatement is $\mathrm{MB}=b_0-1.5a$, with no benefit shock. The tax is set at its expected optimum, and the records show abatement swinging around its mean with a standard deviation of 5. (a) What standard deviation of $\theta$ do the records imply? Find the expected welfare loss (relative to the ex post best) under the tax and under a cap at the expected optimum, and the expected advantage of prices, $\Delta$. (b) Keeping the cost slope at 3 and this $\theta$, at what benefit slope $D$ would the agency be indifferent, and at what $D$ would the cap win by exactly the margin found in (a)? (c) A new study shows damages are uncertain too, independently of $\theta$. Does that change (a)? One sentence.

<details>
<summary>Solution</summary>

(a) Under a tax firms abate until $\mathrm{MAC}$ equals the tax, so $a_P=a^*-\theta/C$ and its standard deviation is $\sigma/C$. Hence $\sigma=3\times5=15$ and $\sigma^2=225$. With $C=3$, $D=1.5$:

$$\mathbb{E}L_Q=\frac{\sigma^2}{2(C+D)}=\frac{225}{9}=25$$

$$\mathbb{E}L_P=\frac{\sigma^2D^2}{2C^2(C+D)}=\frac{225\times2.25}{81}=6.25$$

so $\Delta=\sigma^2(C-D)/(2C^2)=225\times1.5/18=18.75=25-6.25$. The tax loses a quarter of what the cap would ($D^2/C^2=\tfrac14$).

(b) Indifference needs $C=D$, so $D=3$. The cap wins by 18.75 when $225(3-D)/18=-18.75$, that is $D=4.5$; there $\mathbb{E}L_Q=15$ and $\mathbb{E}L_P=33.75$.

**Must hit, strict (c):**

- No: an additive benefit shock uncorrelated with the cost shock is learned by neither instrument, so it adds the same loss to both and drops out of $\Delta$.

**Model answer (c):** No, because neither the tax nor the cap can respond to a damage shock, so an uncorrelated one raises both expected losses equally and leaves $\Delta=18.75$ unchanged.

**Wrong turns:** taking $\sigma=5$, the swing in abatement, as the swing in cost (it gives losses of 2.78 and 0.69); dividing by $C+D$ instead of $C$, which confuses the tax's response $\theta/C$ with the ideal response $\theta/(C+D)$ and gives $\sigma=22.5$.

</details>

## Connections

- **Backward:** the triangle and the compensated elasticity are [2.3](02-03-excess-burden-and-the-harberger-triangle.md)'s. $\lambda$ is [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md)'s marginal cost of public funds, now equalized across taxes. Slutsky symmetry ([`grad-micro` 2.4](../../grad-micro/lessons/02-04-slutsky-equation-comparative-statics.md)) turns the first-order condition into a statement about compensated demand, and the multiplier-as-shadow-price reading is [`grad-micro` 1.4](../../grad-micro/lessons/01-04-envelope-theorem-duality.md)'s.
- **Forward:** [4.2](04-02-many-person-ramsey-and-corlett-hague.md) adds households with welfare weights (Diamond's many-person rule) and cross effects with leisure (Corlett-Hague). [4.3](04-03-production-efficiency-diamond-mirrlees.md) asks whether the treasury should also tax inputs, and Diamond and Mirrlees say no. The same template, a revenue constraint with a multiplier and elasticities as sufficient statistics, returns in Module 5's income-tax formulas.
- **Sideways:** Ramsey-Boiteux pricing is regulated third-degree price discrimination ([`grad-micro` 6.1](../../grad-micro/lessons/06-01-monopoly-price-discrimination.md)). Tax smoothing in [`economics-of-debt` 5.3](../../economics-of-debt/lessons/05-03-tax-smoothing-and-optimal-debt.md) is the Ramsey logic across dates instead of goods: equalize the marginal distortion everywhere. The same Frank Ramsey wrote the growth model of [`grad-macro` 2.3](../../grad-macro/lessons/02-03-ramsey-cass-koopmans.md) a year later.
