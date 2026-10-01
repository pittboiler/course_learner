# Public Economics · Lesson 2.1: Partial-equilibrium incidence

> ⏱ ~15 min · Module 2: Tax incidence and excess burden · Builds on: [`grad-micro` 4.1 Partial equilibrium and surplus](../../grad-micro/lessons/04-01-partial-equilibrium-surplus.md), [`grad-micro` 6.1 Monopoly and price discrimination](../../grad-micro/lessons/06-01-monopoly-price-discrimination.md) · Unlocks: [2.2 General-equilibrium incidence](02-02-general-equilibrium-incidence-the-harberger-model.md), [2.3 Excess burden and the Harberger triangle](02-03-excess-burden-and-the-harberger-triangle.md)

## Why this matters

Every tax debate opens with who pays. Legislatures answer by choosing who writes the check: the employer or the worker, the refinery or the driver. Economics answers differently, and the gap between the two answers is the first half of the course's question: *where is the wedge, and who bears it?* This lesson turns [`grad-micro` 4.1](../../grad-micro/lessons/04-01-partial-equilibrium-surplus.md)'s linear example into a formula that needs only two elasticities, then shows that under monopoly a tax can raise the price by *more* than the tax itself.

## The idea

A per-unit tax drives a wedge between what buyers pay and what sellers keep. The wedge is fixed by law; where it sits relative to the old price is fixed by the market. Whoever can walk away more easily moves the price less. If sellers can cheaply shift production elsewhere, the seller price barely falls and buyers absorb most of the wedge. If sellers are stuck (a fixed stock of land, a vineyard, a worker with no other job), the seller price falls nearly one-for-one.

A miniature: a city puts a 2-per-ticket tax on concert tickets. The arena has a fixed number of seats and fills them either way, so supply is completely inelastic. The ticket price buyers face cannot rise, since the same seats must still be sold to the same crowd, so the promoter eats the whole 2, whoever the ordinance says remits it. Now take a tax on something produced at constant cost by a competitive industry: supply is flat at that cost, the seller price cannot fall, and buyers bear the whole tax.

Two surprises follow. It does not matter which side the law taxes. And once sellers have market power, "buyers bear at most 100 percent" stops being true.

## The formal version

**Competitive model.** Demand $D(p^d)$ depends on the price buyers pay, $p^d$; supply $S(p^s)$ on the price sellers keep, $p^s$. A [unit tax](../reference.md#ad-valorem-and-unit-taxes) of $t$ per unit sets $p^d=p^s+t$, and the market clears where $D(p^s+t)=S(p^s)$. Let $\varepsilon_D<0$ be the demand elasticity and $\varepsilon_S>0$ the supply elasticity, both at the pre-tax equilibrium.

Differentiate the clearing condition at $t=0$, using $dp^s=dp^d-dt$: $D'\,dp^d=S'\,(dp^d-dt)$. Multiply through by $p/q$, where $p$ and $q$ are the pre-tax price and quantity, so that $D'p/q=\varepsilon_D$ and $S'p/q=\varepsilon_S$:

$$\frac{dp^d}{dt}=\frac{\varepsilon_S}{\varepsilon_S-\varepsilon_D},\qquad \frac{dp^s}{dt}=\frac{\varepsilon_D}{\varepsilon_S-\varepsilon_D}.$$

*In words:* the [incidence formula](../reference.md#incidence-formula) says buyers' share of a small tax is the supply elasticity over the sum of the two elasticities' magnitudes; the two shares add to one, and the less elastic side bears more. Two limits: $\varepsilon_S\to0$ puts it all on sellers, $\varepsilon_S\to\infty$ all on buyers. $dp^d/dt$ is the tax's [pass-through rate](../reference.md#pass-through-rate).

**Statutory irrelevance.** Now levy the tax on buyers: they pay $p^s$ to sellers plus $t$ to the government. The clearing condition is again $D(p^s+t)=S(p^s)$, the same equation. *In words:* [statutory incidence](../reference.md#statutory-incidence), who remits the tax, has no effect on [economic incidence](../reference.md#tax-incidence), who bears it; only the size of the wedge matters. This needs prices to adjust freely and buyers and sellers to respond to the whole wedge whichever side it is billed to.

**Ad valorem taxes.** An ad valorem tax at rate $\tau$ on the consumer price leaves sellers $p^s=(1-\tau)p^d$. In competition it produces exactly the equilibrium of the unit tax $t=\tau p^d$ evaluated at that equilibrium: the clearing condition only sees the wedge. *In words:* in a competitive market the two are the same tax written two ways.

**Monopoly.** A monopolist with inverse demand $P(Q)$ ($Q$ is quantity, $P'<0$) and constant marginal cost $c$ pays a unit tax $t$, so it sets marginal revenue equal to $c+t$: $P(Q)+QP'(Q)=c+t$. Differentiating in $t$ gives $(2P'+QP'')\,dQ/dt=1$, and since $dp/dt=P'\,dQ/dt$,

$$\rho\equiv\frac{dp}{dt}=\frac{1}{2+QP''/P'} .$$

*In words:* monopoly pass-through depends on the *curvature* of demand, not on any elasticity of supply (there is no supply curve). Three cases, each verified symbolically:

- Linear demand, $P''=0$: $\rho=\tfrac12$. Half the tax is passed on.
- Constant elasticity $|\varepsilon_D|>1$: the monopoly price is the markup $\frac{|\varepsilon_D|}{|\varepsilon_D|-1}$ times $c+t$, so $\rho=\frac{|\varepsilon_D|}{|\varepsilon_D|-1}>1$. This is [overshifting](../reference.md#overshifting): the price rises by more than the tax.
- Exponential demand $D(p)=Ae^{-p/k}$: the price is $c+t+k$, so $\rho=1$.

Rewriting $\rho$ in terms of demand $D(p)$ gives $\rho=1/\big(2-DD''/D'^2\big)$, so $\rho>1$ exactly when $\ln D$ is convex in $p$. *In words:* a monopolist overshifts when demand is log-convex, passes on exactly the tax when it is log-linear, and passes on less when it is log-concave (linear demand is log-concave). Weyl and Fabinger (2013, *JPE*) extend this curvature logic to oligopoly and general cost curves.

**Unit and ad valorem part ways under monopoly.** With an ad valorem tax the monopolist keeps $(1-\tau)$ of each sale's revenue, so it sets $(1-\tau)\,\mathrm{MR}=c$. A unit tax giving the same quantity (hence the same price $p$) has $\mathrm{MR}=c+t$, so $t=c\tau/(1-\tau)$. Revenue per unit is $\tau p$ under the ad valorem tax and $t$ under the unit tax, and

$$\frac{\tau p}{t}=\frac{p(1-\tau)}{c}>1 \quad\text{whenever the net price exceeds marginal cost.}$$

*In words:* at the same price and output, the ad valorem tax raises more revenue, by exactly the firm's markup of net price over cost, because the government takes a share of the monopoly margin as well as of cost. Equivalently, Suits and Musgrave (1953, *QJE*) show that for the same revenue the ad valorem tax leaves a lower price. In competition $p(1-\tau)=c$ and the ratio is one.

## Picture

![Two side by side supply and demand diagrams with price on the vertical axis and quantity on the horizontal. The same demand curve and the same tax of 2 per unit appear in each. With steep, inelastic supply, buyers pay 10.43 and sellers get 8.43, so buyers bear 22 percent. With flat, elastic supply, buyers pay 11.54 and sellers get 9.54, so buyers bear 77 percent](assets/02-01-fig1.svg)

Same demand, same wedge of 2; only supply's elasticity changes. The revenue rectangle is split at the old price 10: the red slice above is paid by buyers, the blue slice below by sellers. Steep supply pins the wedge down on sellers; flat supply pushes it up onto buyers.

## Worked examples

**Example 1 (clean): the formula against an exact solve.** These are the figure's curves, invented: demand $q=1000/p$ (so $\varepsilon_D=-1$ everywhere) and constant-elasticity supply $q=100\,(p/10)^{\varepsilon_S}$, with pre-tax equilibrium $p=10$, $q=100$. Tax $t=2$, a 20 percent wedge.

- *Inelastic supply,* $\varepsilon_S=0.25$. Formula: buyers' share $0.25/1.25=0.20$. Exact solve of $1000/(p^s+2)=100(p^s/10)^{0.25}$: $p^s=8.43$, $p^d=10.43$, $q=95.83$. Buyers bear $0.43/2=22$ percent; revenue is $2\times95.83=191.67$.
- *Elastic supply,* $\varepsilon_S=3$. Formula: $3/4=0.75$. Exact: $p^s=9.54$, $p^d=11.54$, $q=86.69$, buyers bear 77 percent; revenue $173.38$.

The formula is a derivative, so it is exact only for a small tax; at $t=0.01$ the exact shares are 0.2001 and 0.7501. For a 20 percent wedge it is still off by only two points, because elasticities along these curves change slowly. Note also that revenue is lower where supply is elastic: the quantity falls more, which is the seed of [2.3](02-03-excess-burden-and-the-harberger-triangle.md)'s excess burden.

**Example 2 (why you'd care): a monopolist overshifts, and the tax form matters.** An invented monopolist faces constant-elasticity demand with $|\varepsilon_D|=3$ and has marginal cost $c=6$. Its price is $\tfrac32 c=9$.

- *Unit tax of 1:* the price becomes $\tfrac32(6+1)=10.5$. Buyers pay 1.5 more for a tax of 1: pass-through $\rho=1.5$. A competitive industry with the same flat cost would pass through exactly 1.
- *Ad valorem at the same price:* marginal revenue is $p(1-1/3)=\tfrac23p$, so $(1-\tau)\tfrac23(10.5)=6$ gives $\tau=1/7$, about 14.3 percent. Price and quantity are identical to the unit tax, but revenue per unit is $\tfrac17\times10.5=1.5$ against 1, half as much again. The ratio 1.5 is $p(1-\tau)/c=9/6$, the markup.
- *Ad valorem at the same revenue* as the unit tax: solving numerically gives $\tau\approx0.083$ and a price of 9.82, below the unit tax's 10.5 (Suits and Musgrave's comparison).

Why you'd care: an excise on a concentrated market (tobacco, some fuels, pharmaceuticals) can raise consumer prices by more than the tax, and whether it does is an empirical fact about demand curvature, not about greed. The same revenue can be raised with less damage to buyers by taxing value instead of units. Pass-through is estimated by comparing prices across a tax change, typically by [difference-in-differences](../../econometrics/lessons/04-03-difference-in-differences.md).

## Watch out

- **You might think a payroll tax "split half and half" is borne half and half, but actually** the statutory split is irrelevant in competition; the split follows labor supply and demand elasticities, and with inelastic labor supply workers bear most of both halves.
- **You might think the incidence formula is exact, but actually** it is a derivative at the old equilibrium. For large taxes, or curves whose elasticity changes fast, solve the model (Example 1's 22 percent against the formula's 20).
- **You might think pass-through above one signals collusion, but actually** a single monopolist facing log-convex demand overshifts while maximizing profit with no coordination at all.
- **You might think unit and ad valorem taxes are interchangeable, but actually** that holds only under perfect competition. With a markup, the ad valorem tax taxes the markup too.

## One-liner

> In competition the less elastic side bears the tax, $dp^d/dt=\varepsilon_S/(\varepsilon_S-\varepsilon_D)$, whoever writes the check; under monopoly, demand curvature sets pass-through, which exceeds one when demand is log-convex.

## Problems

**P1 (🟢) *(Formal.)*** An invented competitive market has constant-elasticity demand and supply with $\varepsilon_D=-0.8$ and $\varepsilon_S=1.2$, and a pre-tax price of 50. A unit tax of 1 is imposed. (a) Use the incidence formula to find buyers' and sellers' shares and the approximate new buyer and seller prices. (b) By about what percentage does the traded quantity fall? (c) The law is amended so that buyers, not sellers, remit the tax. What changes?

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** An invented monopolist has marginal cost $c=5$ and constant-elasticity demand with $|\varepsilon_D|=2$. (a) Find the monopoly price with no tax and with a unit tax of 1, and the pass-through rate. (b) Find the ad valorem rate on the consumer price that produces the same consumer price as the unit tax of 1, and the revenue per unit it raises. (c) A second monopolist has marginal cost 2 and demand $q=100\,e^{-p/5}$. Find its price with and without a unit tax of 1, and name the property of demand that decides whether a monopolist's pass-through is above, at, or below one, with the property this demand has.

**P3 (🔴, optional) *(Formal (a) · Exegetical (b).)*** An invented competitive labor market has wage 20 per hour, labor supply elasticity $0.2$ and labor demand elasticity $-0.6$. A payroll tax of 2 per hour is remitted as 1 by the employer and 1 by the worker. (a) Using the incidence formula, find how much of the 2 the worker and the employer bear per hour. (b) The government moves the whole 2 onto the employer. In the model, what happens to take-home pay and the employer's total hourly cost? Then name one real labor-market feature that would make the reassignment change take-home pay in the short run, and say which way. Two sentences.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) Buyers' share is $\varepsilon_S/(\varepsilon_S-\varepsilon_D)=1.2/2.0=0.6$; sellers bear $0.8/2.0=0.4$. So $p^d\approx50.6$ and $p^s\approx49.6$. (An exact solve with these curves gives 50.60 and 49.60 to two decimals.)

(b) Along demand, $dq/q=\varepsilon_D\,dp^d/p^d=-0.8\times0.6/50=-0.0096$: about 0.96 percent.

(c) Nothing real: buyers now pay $p^s$ to sellers plus 1 to the government, and the clearing condition $D(p^s+1)=S(p^s)$ is unchanged, so the seller price stays 49.6 and the buyers' total outlay stays 50.6.

**Wrong turns:** using $|\varepsilon_D|/(\varepsilon_S+|\varepsilon_D|)$ for buyers (the shares are swapped: each side's share carries the *other* side's elasticity); reporting the quantity change with the supply elasticity and the buyer price change, which mixes the two curves.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) The markup is $\frac{|\varepsilon_D|}{|\varepsilon_D|-1}=2$, so $p=2\times5=10$ untaxed and $2\times6=12$ with the tax. Pass-through is $2$: buyers pay twice the tax.

(b) Marginal revenue is $p(1-1/2)=p/2$, so $(1-\tau)\,p/2=5$ at $p=12$ gives $1-\tau=5/6$, $\tau=1/6$ (about 16.7 percent). Revenue per unit is $12/6=2$, twice the unit tax's 1 at the same price and quantity; the ratio equals $p(1-\tau)/c=10/5=2$, the markup.

(c) Profit is $(p-2-t)\,100e^{-p/5}$; the first-order condition gives $p=2+t+5$, so $p=7$ untaxed and $8$ with the tax: pass-through exactly 1.

**Must hit, strict (c):**

- The property is log-convexity of demand in price: pass-through exceeds one if $\ln D$ is convex, equals one if linear, falls below one if concave.
- Here $\ln D=\ln100-p/5$ is linear in $p$, hence pass-through 1.

**Wrong turns:** using the competitive formula (there is no supply curve under monopoly); in (b), setting $\tau=1/12$ so that $\tau p$ equals the unit tax, which ignores that the monopolist then faces a smaller wedge on its margin and chooses a lower price.

**Model answer (c):** Pass-through exceeds one when demand is log-convex in price, equals one when log-linear, and is below one when log-concave. This demand has $\ln D$ linear in $p$, so the monopolist passes on exactly the tax, from 7 to 8.

---

**P3** *(Formal (a) · Exegetical (b).)*

(a) Employers are the buyers of labor. The employer's cost per hour rises by $\varepsilon_S/(\varepsilon_S-\varepsilon_D)\times2=\frac{0.2}{0.8}\times2=0.5$, and the worker's take-home pay falls by $\frac{0.6}{0.8}\times2=1.5$. The worker bears three-quarters of the tax, including most of the employer's "half".

(b) In the model, nothing: the wedge is still 2 per hour, so the gross wage paid before the employer's tax falls by 1 and take-home pay and employer cost are exactly as before.

**Must hit, strict (b):**

- In the model, take-home pay and total employer cost are unchanged; the gross wage absorbs the reassignment.
- One feature that stops the gross wage from adjusting, correctly signed. Accept: a binding minimum wage (the gross wage cannot fall, so the employer bears more and take-home pay rises for those who keep their jobs, while employment falls); nominal wage contracts or rigidity (take-home pay rises until wages are renegotiated); workers noticing a tax on their payslip more than one on the employer's (salience), which changes labor supply and so take-home pay.

**Wrong turns:** answering that workers gain 1 per hour, which confuses who remits with who bears; stating the feature without its direction.

**Model answer (b):** In the competitive model the gross wage falls by 1, so take-home pay and employer cost are unchanged. With a binding minimum wage the gross wage cannot fall, so for minimum-wage workers who keep their jobs take-home pay rises by 1, paid by employers, and employment falls.

</details>

## Flashback

**From Lesson [1.2](01-02-voluntary-provision-and-crowding-out.md) (Voluntary provision and crowding out):** *(Formal.)* Three invented neighbors fund a community pool. Each has $u_i=\ln x_i+\ln G$, where $g_i\ge0$ is her gift, $x_i=w_i-g_i$ her private consumption, $G=P+\sum_j g_j$ the pool, and $P\ge0$ town provision; one unit of $G$ costs one unit of wealth, and each chooses her gift taking the others' as given (Nash). Wealth is $w=(45,33,15)$. (a) At $P=0$, find the contributor set, $G$ and the gifts. (b) The town provides $P$, financed by a lump-sum tax of $P$ on neighbor 2 alone. Up to what $P$ is the grant crowded out one-for-one? (c) At $P=10$, find $G$, total private giving, and the change in each neighbor's private consumption from (a).

<details>
<summary>Solution</summary>

A contributor's first-order condition $1/x_i=1/G$ gives $x_i=G$, so $g_i=w_i-G$, and summing over a contributor set $C$ of size $k$ gives $G=\big(P+\sum_{i\in C}w_i\big)/(k+1)$, valid only if every member has $w_i>G$ and every non-member $w_i\le G$.

(a) All three: $G=93/4=23.25$, but $15\le23.25$, inconsistent. $C=\{1,2\}$: $G=78/3=26$, with $45,33>26\ge15$: consistent. Gifts $(19,7,0)$; consumption $(26,26,15)$.

(b) Wealth becomes $(45,33-P,15)$ and, while neighbor 2 still gives, $G=(P+45+33-P)/3=26$: the tax just moves his money from his gift to the town's, and his gift falls to $7-P$. That lasts while $33-P\ge26$, so up to $P=7$, his original gift.

(c) Wealth is $(45,23,15)$. $C=\{1,2\}$ gives $G=(10+68)/3=26>23$, inconsistent; $C=\{1\}$ gives $G=(10+45)/2=27.5$, with $23,15\le27.5$: consistent. Private giving is neighbor 1's $45-27.5=17.5$, down from 26, so the 10 of provision crowds out 8.5: the first 7 dollars one-for-one, the last 3 at $k/(k+1)=1/2$ each, because by then they come from a non-contributor. Consumption changes: neighbor 1 from 26 to 27.5 ($+1.5$), neighbor 2 from 26 to 23 ($-3$), neighbor 3 unchanged at 15.

Neighbor 2 is billed 10 but loses 3 of consumption, while neighbor 1 gains 1.5: the person who writes the check is not the person who bears it, the gap between statutory and economic incidence that this lesson measures in markets.

**Wrong turns:** keeping neighbor 2 a contributor at $P=10$, which gives $G=26$ and full crowd-out; reading "billed 10" as "bears 10", when his own gift absorbs 7 of it.

</details>

## Connections

- **Backward:** [`grad-micro` 4.1](../../grad-micro/lessons/04-01-partial-equilibrium-surplus.md) split a tax in a linear market by slopes; the elasticity formula is that result stated locally for any curves. The monopoly markup $\frac{|\varepsilon_D|}{|\varepsilon_D|-1}$ and $\mathrm{MR}=\mathrm{MC}$ come from [`grad-micro` 6.1](../../grad-micro/lessons/06-01-monopoly-price-discrimination.md). [1.2](01-02-voluntary-provision-and-crowding-out.md) showed a transfer between givers undone by their reactions; here too the legal assignment of a burden is undone by the market.
- **Forward:** [2.2](02-02-general-equilibrium-incidence-the-harberger-model.md) lets the tax spill into other markets, so a tax on capital in one sector can land on labor. [2.3](02-03-excess-burden-and-the-harberger-triangle.md) measures what the quantity drop in Example 1 destroys. The Ramsey rule of [4.1](04-01-the-ramsey-rule.md) chooses tax rates using the same elasticities.
- **Sideways:** pass-through is a measured quantity, and its estimation (price responses across a tax change) is [`econometrics` 4.3](../../econometrics/lessons/04-03-difference-in-differences.md)'s design. The ad valorem advantage under market power is the monopoly margin of [`grad-micro` 6.1](../../grad-micro/lessons/06-01-monopoly-price-discrimination.md) viewed as a tax base.
