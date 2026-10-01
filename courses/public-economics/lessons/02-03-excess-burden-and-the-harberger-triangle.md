# Public Economics · Lesson 2.3: Excess burden and the Harberger triangle

> ⏱ ~15 min · Module 2: Tax incidence and excess burden · Builds on: [2.1 Partial-equilibrium incidence](02-01-partial-equilibrium-incidence.md), [`grad-micro` 2.3 Expenditure minimization and duality](../../grad-micro/lessons/02-03-expenditure-minimization-duality.md), [`grad-micro` 4.1 Partial equilibrium and surplus](../../grad-micro/lessons/04-01-partial-equilibrium-surplus.md) · Unlocks: [2.4 Second best and the marginal cost of public funds](02-04-second-best-and-the-marginal-cost-of-public-funds.md), [4.1 The Ramsey rule](04-01-the-ramsey-rule.md)

## Why this matters

[2.1](02-01-partial-equilibrium-incidence.md) and [2.2](02-02-general-equilibrium-incidence-the-harberger-model.md) asked who pays a tax. This lesson asks what the tax *destroys*: the loss to taxpayers over and above the revenue the government collects. Every later result in the course is a trade against this number. The MCPF of [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md), the Ramsey rule of [4.1](04-01-the-ramsey-rule.md) and the income-tax formulas of Module 5 are all rules for keeping it small. It is easy to measure wrongly. The obvious statistic, "how much did behavior change?", can read zero when the loss is large.

## The idea

Two taxes each take 100 dollars from you. The first is a flat charge: you pay it whatever you do. The second is a tax on apples, and to avoid part of it you switch to pears, which you like a bit less. The apple tax costs you the 100 dollars *plus* the pleasure lost to the switch. That extra is the **excess burden**. It is revenue nobody gets, a pure loss.

Push the idea to its extreme. An apple tax so high that nobody buys apples raises nothing, yet everyone who liked apples is worse off. All of its burden is excess.

What creates the loss is *substitution*: a change in behavior driven by the change in relative prices. A tax also makes you poorer, and poorer people change what they buy. But that income effect is not waste. The flat charge makes you poorer too and destroys nothing. So the right statistic is the response to the price with the income effect removed, the **compensated** response. That leads to a surprise. A wage tax can leave hours worked exactly unchanged and still cause a real excess burden, because the income effect (work more, you are poorer) and the substitution effect (work less, leisure is cheaper) happen to cancel. The substitution effect is still there, and it is what costs.

## The formal version

**Setup.** A consumer with income $m$ buys good $x$ and a composite good. The producer price of $x$ is $p$, fixed: supply is perfectly elastic, so by [2.1](02-01-partial-equilibrium-incidence.md) consumers bear the whole tax. An ad valorem tax $\tau$ raises the consumer price to $P_1=p(1+\tau)$ from $P_0=p$. Write $x(P,m)$ for Marshallian demand, $h(P,u)$ for Hicksian (compensated) demand, $e(P,u)$ for the expenditure function and $V(P,m)$ for indirect utility. Recall from [`grad-micro` 2.3](../../grad-micro/lessons/02-03-expenditure-minimization-duality.md) that $e(P,u)$ is the least income that reaches utility $u$ at price $P$, and Shephard's lemma gives $\partial e/\partial P=h$. Utility falls from $u_0=V(P_0,m)$ to $u_1=V(P_1,m)$. The revenue is not handed back.

**Two money measures of the loss.**

$$\mathrm{EV}=m-e(P_0,u_1),\qquad \mathrm{CV}=e(P_1,u_0)-m.$$

*In words:* the [equivalent variation](../reference.md#equivalent-variation) is the largest lump sum the consumer would pay, at the old price, to escape the tax. The [compensating variation](../reference.md#compensating-variation) is the payment she would need, at the new price, to be as well off as before.

**Excess burden.** Using the EV convention,

$$\mathrm{EB}=\mathrm{EV}-R,\qquad R=\tau p\,x(P_1,m)=\tau p\,h(P_1,u_1).$$

*In words:* [excess burden](../reference.md#excess-burden) is what the tax costs the consumer beyond what it raises. Since $m=e(P_1,u_1)$, Shephard's lemma turns this into an area:

$$\mathrm{EB}=\int_{P_0}^{P_1}h(s,u_1)\,ds\;-\;(P_1-P_0)\,h(P_1,u_1).$$

*In words:* the EV is the area to the left of the compensated demand curve at the *new* utility, between the two prices. The revenue is the rectangle of height $P_1-P_0$ and width equal to the taxed quantity. The excess burden is the sliver left over, the **triangle** under the compensated curve. The CV convention does the same thing on the curve $h(\cdot,u_0)$, with revenue measured at $h(P_1,u_0)$. With income effects the two curves differ, and so do the two answers. Neither is "the" right one. This course uses EV, because it compares every policy at the same prices $P_0$.

**Why a lump-sum tax has none.** A [lump-sum tax](../reference.md#lump-sum-tax) $T$ leaves prices alone, so $u_1=V(P_0,m-T)$ and $e(P_0,u_1)=m-T$. Hence $\mathrm{EV}=T=R$ and $\mathrm{EB}=0$. *In words:* when no relative price moves, there is nothing to substitute away from, and the income effect alone wastes nothing.

**The Harberger approximation.** Let $\mathrm{EB}(\tau)$ denote the area formula, with $h$ held at one utility level. Then $\mathrm{EB}(0)=0$. Differentiating, the terms $p\,h$ cancel and leave

$$\mathrm{EB}'(\tau)=-\tau\,p^2\,\frac{\partial h}{\partial P}\big(p(1+\tau)\big),$$

so $\mathrm{EB}'(0)=0$ as well. A second-order expansion at $\tau=0$ gives the [Harberger triangle](../reference.md#harberger-triangle):

$$\mathrm{EB}\approx\tfrac12\,\tau^2\,\lvert\varepsilon^c\rvert\,p\,x,\qquad \varepsilon^c=\frac{P}{h}\frac{\partial h}{\partial P}.$$

Here $\varepsilon^c$ is the [compensated elasticity](../reference.md#compensated-elasticity) of demand (negative) and $p\,x$ is spending on the good at producer prices. *In words:* the loss grows with the **square** of the rate and in proportion to the compensated elasticity and the size of the base. The first unit of tax is almost free, since its marginal loss starts at zero, and each further point costs more than the last. The error is of third order in $\tau$, so the approximation is good for small rates and drifts for large ones. The same formula holds for a factor, with a positive $\varepsilon^c$ for labor supply. With upward-sloping supply the triangle gains a producer side, $\tfrac12\,t\,\Delta x$ with $t$ the per-unit wedge and $\Delta x$ the fall in quantity, as in [`grad-micro` 4.1](../../grad-micro/lessons/04-01-partial-equilibrium-surplus.md). The name honors Arnold Harberger's measurements of the waste from taxes and monopoly in the 1950s and 1960s.

## Picture

![A labor supply diagram with hours on the horizontal axis and the net wage on the vertical axis. The uncompensated supply curve is vertical at 40 hours. A rising compensated supply curve passes through 40 hours at the net wage 16 and 45.1 hours at the gross wage 20. A blue rectangle between wages 16 and 20 out to 40 hours is revenue 160; a red sliver between the vertical line and the compensated curve is the excess burden 10.78](assets/02-03-fig1.svg)

Example 2 drawn: the uncompensated supply curve is vertical, so a triangle measured against it would be zero. The loss sits between it and the compensated curve, which bends away because leisure has become cheaper.

## Worked examples

**Example 1 (clean): a constant-elasticity good.** Invented numbers: quasilinear utility, so Marshallian and Hicksian demand coincide (no income effects) and EV = CV = consumer-surplus loss. Demand is $x(P)=150\,P^{-1.2}$, the producer price is $p=1$, and pre-tax spending is 150.

| $\tau$ | $x(P_1)$ | EV (area) | Revenue | Exact EB | Harberger $\tfrac12\tau^2(1.2)(150)$ |
|---|---|---|---|---|---|
| 0.10 | 133.79 | 14.161 | 13.379 | 0.782 | 0.90 |
| 0.20 | 120.52 | 26.856 | 24.105 | 2.751 | 3.60 |

At 10 percent the excess burden is 5.8 percent of revenue; at 20 percent it is 11.4 percent. Doubling the rate multiplies the exact loss by 3.5 and the Harberger number by exactly 4. The approximation overstates here because constant-elasticity demand is convex: as the price rises the curve flattens out, so it gives up less quantity than the straight-line triangle assumes. At 10 percent the triangle drawn with the actual fall in quantity, $\tfrac12(0.1)(150-133.79)=0.811$, is closer still.

**Example 2 (why you'd care): hours don't move, yet the tax wastes.** An invented worker has $T=100$ hours a week, a wage of 20 dollars, no other income, and utility $u=c^{0.4}\ell^{0.6}$ over consumption $c$ and leisure $\ell$. With Cobb-Douglas utility she spends 60 percent of her full income $\omega T$ (the value of all her time at net wage $\omega$) on leisure, so $\ell=60$ and she works 40 hours at *every* wage. Her uncompensated labor-supply elasticity is zero. A 20 percent wage tax cuts $\omega$ to 16, she still works 40 hours, and the tax raises $R=0.2\times20\times40=160$ dollars a week.

*Exact loss.* Full income is $\omega T$, and $e(\omega,u)$ is proportional to $u\,\omega^{0.6}$ while $u_1$ is proportional to $\omega_1^{0.4}$. Together these give $e(20,u_1)=2000\times0.8^{0.4}=1829.22$. So

$$\mathrm{EV}=2000-1829.22=170.78,\qquad \mathrm{EB}=170.78-160=10.78.$$

She would pay 170.78 dollars a week in a lump sum to be rid of a tax that raises 160. The excess burden is 6.7 percent of revenue.

*Where it comes from.* Hold her at utility $u_1$ and restore the 20-dollar wage: compensated hours rise to 45.1. At 40 hours the compensated elasticity of hours is $0.6$ (it equals $0.4\times\ell/h=0.4\times60/40$). Harberger gives $\tfrac12(0.2)^2(0.6)(20\times40)=9.6$. The triangle drawn with the actual compensated change, $\tfrac12(4)(45.12-40)=10.25$, is closer to the exact 10.78.

*The lesson.* A study that regressed hours on net wages would find no response and conclude the wage tax is free. It is not: 10.78 dollars a week are simply gone. That the zero comes from two effects cancelling is Slutsky's decomposition ([`grad-micro` 2.4](../../grad-micro/lessons/02-04-slutsky-equation-comparative-statics.md)). Hausman (1981, *AER*, "Exact Consumer's Surplus and Deadweight Loss") showed how to recover these exact expenditure-function measures from an estimated demand curve, rather than stopping at the Marshallian area.

## Watch out

- **You might think a tax that changes no behavior causes no excess burden, but actually** only the *compensated* response matters. Example 2 has zero uncompensated response and a positive loss. When income effects reinforce substitution, the uncompensated response overstates the loss instead.
- **You might think doubling the rate exactly quadruples the loss, but actually** that holds for the Harberger approximation and for linear compensated demand only. Example 1's exact ratio is 3.5. The square law is a second-order statement, which is all that [`economics-of-debt` 5.3](../../economics-of-debt/lessons/05-03-tax-smoothing-and-optimal-debt.md) needs when it smooths taxes over time.
- **You might think EV and CV are two estimates of one true number, but actually** they answer different questions, posed at different reference prices, and differ whenever there are income effects. Pick one and use it consistently.
- **You might think excess burden says the tax is too high, but actually** it is one side of a ledger. Whether the revenue buys something worth more is [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md)'s question. How to weigh the burden against who carries it is a choice of welfare weights, which this course treats as an input (see [`philosophy-of-economics`](../../philosophy-of-economics/syllabus.md)).

## One-liner

> Excess burden is what a tax costs beyond what it raises; it is the triangle under the *compensated* curve, roughly $\tfrac12\tau^2\lvert\varepsilon^c\rvert\,px$, so it grows with the square of the rate and ignores income effects, which is why a lump-sum tax has none and a wage tax that moves no hours can still waste.

## Problems

**P1 (🟢) *(Formal.)*** An invented good has pre-tax spending of 500 million dollars a year, a fixed producer price, and a compensated demand elasticity of $-0.4$. Use the Harberger approximation throughout. (a) Find the excess burden of a 5 percent ad valorem tax. (b) Find it at 10 percent, and the factor by which it grew. (c) Back at 5 percent, find it if the compensated elasticity were $-0.8$ instead. (d) Approximating revenue by $\tau$ times pre-tax spending, find the excess burden per dollar of revenue at 5 and at 10 percent.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** An invented consumer has income 100 and utility $u=x^{1/4}y^{3/4}$. Both producer prices are 1 and supply is perfectly elastic. The government levies a 20 percent ad valorem tax on $x$ and keeps the revenue. (a) Find her demand for $x$, the revenue, the EV, and the exact excess burden (EV convention). Give it also as a share of revenue. (b) Find the Harberger approximation using the compensated elasticity of $x$ and pre-tax spending on $x$, and again using the uncompensated elasticity. (c) A colleague uses the uncompensated elasticity. In two sentences, say why that is the wrong statistic, and whether it errs in the same direction as it would in Example 2.

**P3 (🔴, optional) *(Formal (a) · Exegetical (b).)*** For the consumer in P2: (a) find the CV and the excess burden in the CV convention (revenue measured at her compensated demand at the old utility). (b) In two sentences, explain why it exceeds the EV-convention answer here, and say what both conventions give for a lump-sum tax.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

With $\mathrm{EB}\approx\tfrac12\tau^2\lvert\varepsilon^c\rvert\,px$ and $px=500$ (millions):

(a) $\tfrac12(0.05)^2(0.4)(500)=0.25$: 250,000 dollars.

(b) $\tfrac12(0.10)^2(0.4)(500)=1.0$: 1 million dollars, 4 times as large.

(c) $\tfrac12(0.05)^2(0.8)(500)=0.5$: 500,000 dollars, twice (a).

(d) Revenue is about 25 and 50 million dollars, so the burden per dollar is $0.25/25=1\%$ and $1.0/50=2\%$. The average burden rises in proportion to the rate: $\mathrm{EB}/R\approx\tfrac12\tau\lvert\varepsilon^c\rvert$.

**Wrong turns:** entering $\tau$ as 5 instead of 0.05; forgetting that the rate enters squared, so (b) is doubled rather than quadrupled.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) Cobb-Douglas: she spends a quarter of income on $x$, so $x=25/1.2=20.833$, and revenue is $R=0.2\times20.833=4.167$. Indirect utility is proportional to $m\,P^{-1/4}$, so $e(P,u)$ is proportional to $u\,P^{1/4}$ and $e(1,u_1)=100\times1.2^{-1/4}=95.544$. Hence

$$\mathrm{EV}=100-95.544=4.456,\qquad \mathrm{EB}=4.456-4.167=0.289,$$

which is 6.9 percent of revenue.

(b) Hicksian demand is $h=\tfrac14 e/P$, which is proportional to $P^{-3/4}$, so $\varepsilon^c=-3/4$. Pre-tax spending is 25. Compensated: $\tfrac12(0.2)^2(0.75)(25)=0.375$. Uncompensated, with $\varepsilon=-1$ for Cobb-Douglas: $\tfrac12(0.2)^2(1)(25)=0.5$. The compensated figure is the right formula; it misses the exact 0.289 only through the third-order error at a 20 percent rate.

**Must hit, strict (c):**

- The uncompensated elasticity includes the income effect (the tax makes her poorer, so she buys less $x$), and income effects cause no excess burden: a lump-sum tax has them too and wastes nothing. Only the compensated response measures the loss.
- The direction is opposite to Example 2. Here $x$ is normal, so the income effect adds to the substitution effect and the uncompensated number overstates the loss (0.5 against 0.375). In Example 2 the income effect on hours offset substitution and the uncompensated elasticity of zero understated the loss.

**Wrong turns:** using $e(P_1,u_0)$ in the EV formula (that is the CV); measuring revenue on pre-tax quantity 25 instead of 20.833.

**Model answer (c):** The uncompensated elasticity mixes in the income effect of being made poorer, which a lump-sum tax would also cause at zero excess burden, so only the compensated elasticity measures the substitution that wastes. Here it errs the other way from Example 2: income and substitution effects reinforce for a normal good, so the uncompensated figure overstates the loss, whereas for Example 2's hours they cancelled and it understated it.

---

**P3** *(Formal (a) · Exegetical (b).)*

(a) $\mathrm{CV}=e(1.2,u_0)-100=100\,(1.2^{1/4}-1)=4.664$. Compensated demand at $u_0$ and the taxed price is $h=\tfrac14\times100\times1.2^{1/4}/1.2=21.808$, so compensated revenue is $0.2\times21.808=4.361$ and

$$\mathrm{EB}^{\mathrm{CV}}=4.664-4.361=0.303.$$

Check: with Cobb-Douglas, $h(\cdot,u_0)$ is $h(\cdot,u_1)$ scaled by $u_0/u_1=1.2^{1/4}=1.0466$, and $0.289\times1.0466=0.303$.

**Must hit, strict (b):**

- The CV triangle sits under the compensated curve at the old, higher utility. Since $x$ is normal, that curve lies to the right of the one at $u_1$, so the same wedge cuts a larger triangle.
- A lump-sum tax moves no price, so EV = CV = revenue and the excess burden is zero in both conventions.

**Wrong turns:** measuring CV-convention revenue at the actual quantity 20.833, which mixes the two conventions (it gives $4.664-4.167=0.497$, which is not an excess burden in either).

**Model answer (b):** The CV measure uses the compensated curve at her pre-tax utility, and because $x$ is a normal good that curve lies further out than the one at post-tax utility, so the same price wedge carves out a bigger triangle. A lump-sum tax changes no relative price, so in either convention the consumer's loss equals the revenue and the excess burden is zero.

</details>

## Flashback

**From Lesson [2.1](02-01-partial-equilibrium-incidence.md) (Partial-equilibrium incidence):** *(Formal.)* (a) In an invented competitive market the demand elasticity at the pre-tax equilibrium is $-1.5$. A small unit tax of 0.50 raises the price buyers pay by 0.20. What supply elasticity does the incidence formula imply, and by how much does the price sellers keep fall? (b) An invented monopolist with constant marginal cost faces constant-elasticity demand and charges 10. A unit tax of 0.80 raises its price to 11. Find the magnitude of the demand elasticity and the marginal cost.

<details>
<summary>Solution</summary>

(a) Buyers bear $0.20/0.50=0.4$ of the tax, and the incidence formula says their share is $\varepsilon_S/(\varepsilon_S-\varepsilon_D)$, with $\varepsilon_S$ the supply and $\varepsilon_D$ the demand elasticity:

$$\frac{\varepsilon_S}{\varepsilon_S+1.5}=0.4\;\Longrightarrow\;0.6\,\varepsilon_S=0.6\;\Longrightarrow\;\varepsilon_S=1.$$

The shares add to one, so the seller price falls by $0.50-0.20=0.30$.

(b) Pass-through is $\rho=1/0.80=1.25$. With constant-elasticity demand the price is the markup $\frac{\lvert\varepsilon_D\rvert}{\lvert\varepsilon_D\rvert-1}$ times marginal cost plus tax, so $\rho$ equals the markup: $\frac{\lvert\varepsilon_D\rvert}{\lvert\varepsilon_D\rvert-1}=1.25$ gives $\lvert\varepsilon_D\rvert=5$. Then $1.25\,c=10$ gives $c=8$. Check: $1.25\times(8+0.8)=11$. The overshifting is what log-convex demand predicts.

**Wrong turns:** swapping the shares, $1.5/(\varepsilon_S+1.5)=0.4$, which gives $\varepsilon_S=2.25$; in (b), reaching for the competitive formula or the linear-demand pass-through of one half, when a pass-through above one already rules out linear demand.

</details>

## Connections

- **Backward:** [`grad-micro` 4.1](../../grad-micro/lessons/04-01-partial-equilibrium-surplus.md) drew the triangle under a Marshallian curve and flagged that it is exact only under quasilinearity. This lesson supplies the exact version through the expenditure function of [`grad-micro` 2.3](../../grad-micro/lessons/02-03-expenditure-minimization-duality.md), and Slutsky ([`grad-micro` 2.4](../../grad-micro/lessons/02-04-slutsky-equation-comparative-statics.md)) explains why the compensated curve is the one to use. [2.1](02-01-partial-equilibrium-incidence.md) said who bears a tax; here we measure what is lost.
- **Forward:** [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md) takes the derivative $\mathrm{EB}'(\tau)$ and divides by marginal revenue to get the MCPF. [4.1](04-01-the-ramsey-rule.md) minimizes a sum of Harberger triangles subject to a revenue target. [5.1](05-01-the-linear-income-tax.md) and [5.3](05-03-the-saez-formula.md) replace $\varepsilon^c$ with the elasticity of taxable income.
- **Sideways:** because the loss is convex in the rate, [`economics-of-debt` 5.3](../../economics-of-debt/lessons/05-03-tax-smoothing-and-optimal-debt.md) borrows to smooth tax rates over time: two moderate years beat one light and one heavy. The econometrics of estimating $\varepsilon^c$ belongs to [`econometrics`](../../econometrics/syllabus.md).
