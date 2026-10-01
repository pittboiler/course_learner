# Public Economics · Lesson 3.2: Prices vs quantities

> ⏱ ~15 min · Module 3: Choosing an externality instrument · Builds on: [3.1 Taxes, standards, and tradable permits](03-01-taxes-standards-and-tradable-permits.md), [`grad-micro` 6.3 Externalities and Coase](../../grad-micro/lessons/06-03-externalities-coase-theorem.md) · Unlocks: [3.3 Pigou in a second-best world](03-03-pigou-in-a-second-best-world.md)

## Why this matters

[3.1](03-01-taxes-standards-and-tradable-permits.md) ended in a tie: with known costs, an emissions tax and a permit market reach the same least-cost abatement, and the choice looks like a matter of taste. It stops being one the moment the regulator has to commit before learning what abatement will cost. A carbon tax then fixes the price and lets the tonnage float; a cap fixes the tonnage and lets the price float. Martin Weitzman (1974, *Review of Economic Studies*) showed which mistake is cheaper to make, and his answer, one comparison of two slopes, still frames every argument about carbon taxes versus cap-and-trade.

## The idea

A regulator must fix policy today. Next year's abatement costs depend on fuel prices, technology and the weather, and only the firms will see them. Two instruments are on the table: a tax per ton, or a fixed number of tons to abate.

Suppose costs turn out higher than expected.

- **Under a cap,** firms must abate the planned amount anyway. The quantity is right *on average* but wrong now: at these costs we should abate a bit less.
- **Under a tax,** firms abate until their marginal cost reaches the tax, so they cut back. They may cut back too far, because the tax ignores that the marginal damage avoided rises as abatement falls.

Which error is bigger? That depends on how fast the marginal benefit of abatement changes compared with its marginal cost.

- If **marginal damage is nearly flat** (each ton does about the same harm whether we abate a little or a lot), the right price barely moves with the shock, so fixing the price is nearly perfect and fixing the quantity is costly.
- If **marginal damage is steep** (there is a threshold beyond which harm explodes), the right quantity barely moves, so fixing the quantity is nearly perfect and letting firms slide past the threshold is costly.

A miniature: a lake dies above some pollution load. You want a hard cap. Carbon dioxide does roughly the same harm per ton whatever this year's total. You want a price.

## The formal version

**Model.** Abatement is $a$ (tons removed). The social marginal benefit of abatement (the marginal damage avoided) is $\mathrm{MB}(a)=b_0-D\,a$, and the [marginal abatement cost](../reference.md#marginal-abatement-cost) of the aggregate of firms is $\mathrm{MAC}(a)=c_0+C\,a+\theta$. Here $b_0,c_0$ are intercepts, $C>0$ and $D\ge0$ are the slopes as magnitudes, and $\theta$ is a cost shock with mean $0$ and variance $\sigma^2$ ($\sigma$ its standard deviation). Firms see $\theta$; the regulator does not, and commits before it is realized. Firms are price takers and abate cost-effectively among themselves (a tax or a [tradable permit](../reference.md#tradable-permits) market ensures that, as in 3.1). Everything is linear, which is exact for quadratic benefits and costs and a local approximation otherwise.

*In words:* one aggregate MAC curve that shifts up or down by an unknown amount, and a straight marginal benefit curve that does not.

**The two instruments.** Setting $\mathrm{MB}=\mathrm{MAC}$ at $\theta=0$ gives the expected optimum
$$a^*=\frac{b_0-c_0}{C+D},\qquad p^*=c_0+C\,a^*.$$
The *quantity* regime mandates $a^*$. The *price* regime sets the tax $p^*$, and firms abate until $\mathrm{MAC}=p^*$:
$$a_P(\theta)=a^*-\frac{\theta}{C}.$$
The best abatement once $\theta$ is known is $a^\circ(\theta)=a^*-\theta/(C+D)$. *In words:* the ideal response to a cost shock is to abate less, by $\theta/(C+D)$; the quota does not respond at all, and the tax responds by $\theta/C$, which is too much whenever $D>0$.

**Losses.** With linear curves, the welfare shortfall of any abatement level $a$ is the triangle between the two curves, $\tfrac{C+D}{2}\,(a-a^\circ)^2$. So
$$\mathbb{E}L_Q=\frac{\sigma^2}{2(C+D)},\qquad \mathbb{E}L_P=\frac{\sigma^2D^2}{2C^2(C+D)}.$$

**The Weitzman rule.** The expected advantage of prices over quantities is
$$\Delta\equiv\mathbb{E}L_Q-\mathbb{E}L_P=\frac{\sigma^2\,(C-D)}{2C^2}.$$
*In words:* prices beat quantities in expected surplus exactly when the marginal cost curve is steeper than the marginal benefit curve, $C>D$, and the stakes grow with the variance of the shock. This is the [Weitzman rule](../reference.md#weitzman-rule). (Weitzman wrote it with the curvatures of the benefit and cost functions; $\Delta>0$ means prices win.)

Two features are easy to miss. The price regime's loss relative to the quota's is $D^2/C^2$, so a flat benefit curve makes the tax almost perfect. And an additive shock to *benefits* that is uncorrelated with the cost shock drops out of $\Delta$ entirely: neither instrument can respond to it, so both lose the same amount.

## Picture

![Abatement on the horizontal axis and price per unit of abatement on the vertical. A falling green marginal benefit line 120 minus a crosses the dashed expected MAC line 2a at abatement 40 and price 80. After a cost shock the MAC line shifts up by 30. The quota at 40 leaves a red loss triangle of 150 between abatements 30 and 40; the tax at 80 leads to abatement 25 and a smaller blue loss triangle of 37.5 between 25 and 30](assets/03-02-fig1.svg)

This is Example 1 after a bad cost draw. The ex post best is where the shifted MAC meets marginal benefit, at 30. The quota overshoots it by 10 and the tax undershoots it by 5, and because both triangles have the same height-to-base geometry, the loss scales with the square of the miss: the quota's triangle is four times the tax's.

## Worked examples

**Example 1 (clean).** Invented numbers: $\mathrm{MB}=120-a$ (so $D=1$), $\mathrm{MAC}=2a+\theta$ (so $C=2$), and $\theta=\pm30$ with equal probability ($\sigma=30$).

- *Plan:* $120-a=2a$ gives $a^*=40$ and $p^*=80$.
- *High draw,* $\theta=+30$: the ex post best solves $120-a=2a+30$, so $a^\circ=30$ at a price of 90. The quota forces $a=40$, where MAC is 110 and MB is 80: loss $\tfrac12\times10\times30=150$. The tax gives $2a+30=80$, so $a=25$, where MB is 95 and MAC is 80: loss $\tfrac12\times5\times15=37.5$.
- *Low draw,* $\theta=-30$: mirror image, with $a^\circ=50$, quota loss 150 again, and the tax overshooting to 55 for a loss of 37.5.
- *Check against the rule:* $\Delta=900\times(2-1)/(2\times4)=112.5=150-37.5$. Prices remove three quarters of the quota's expected loss, the $1-D^2/C^2$ of the formula.

**Example 2 (why you'd care): the same cost uncertainty, two pollutants.** Invented numbers: in both markets $C=2$ and $\sigma=20$.

- *A [stock pollutant](../reference.md#stock-pollutant) like CO2.* The harm from a ton depends on the accumulated stock, which one year's emissions barely move, so the marginal damage of this year's flow is nearly flat: take $D=0.1$. Then $\mathbb{E}L_Q=400/4.2=95.2$, $\mathbb{E}L_P=0.24$, and $\Delta=95$. A tax loses a quarter of one percent of what a cap loses.
- *A threshold pollutant,* say nutrient loading into a lake near a tipping point: $D=8$. Now $\mathbb{E}L_Q=400/20=20$, $\mathbb{E}L_P=320$, and $\Delta=-300$. The tax loses sixteen times as much as the cap.

Same cost uncertainty, opposite verdicts, and the only thing that changed was the slope of damage. The stock case is the standard argument for carbon prices over annual caps. The flow model needs care there, because a year's emissions add to a stock that decays slowly. Hoel and Karp (2002, *Resource and Energy Economics*) redo the comparison for a stock pollutant and find that a higher discount rate or faster stock decay pushes the answer toward taxes. Newell and Pizer (2003, *Journal of Environmental Economics and Management*) calibrate a stock model to climate change and find that prices dominate.

**Hybrids.** Nothing forces a pure instrument. Roberts and Spence (1976, *Journal of Public Economics*) combine permits with a penalty per ton of shortfall and a subsidy per ton of over-compliance. The penalty acts as a price ceiling and the subsidy as a floor, so together they form a [price collar](../reference.md#price-collar) (a *safety valve* when only the ceiling is present). Inside the collar the instrument is a cap; outside it, a tax. The pure instruments are special cases (an infinite ceiling and a zero floor give the cap; ceiling equal to floor gives the tax), so the best collar does at least as well as the better pure instrument. Real markets use versions of this: California's cap-and-trade program pairs an auction reserve price (a floor) with a price ceiling, and the Regional Greenhouse Gas Initiative releases extra allowances when prices pass a trigger.

## Watch out

- **You might think the instrument with less uncertainty about its own variable wins, but actually what matters is the slopes.** The tax gets the price exactly right and the cap gets the tonnage exactly right, by construction. The question is which variable society's welfare is more sensitive to missing, and that is $C$ against $D$.
- **You might think uncertainty about damages favors a cap, but actually uncorrelated benefit uncertainty is irrelevant.** Neither instrument learns it, so both lose the same. It matters only if it moves with costs (P3).
- **You might think a cap-and-trade market is a "quantity" instrument only on paper, but actually banking, borrowing and collars all make it respond to price.** Each such feature moves it along the line toward a tax, which is exactly what the Weitzman rule says to do when $C>D$.
- **You might think $\Delta$ says how much pollution differs, but actually it is expected surplus.** Expected abatement is $a^*$ under both instruments in the linear model; what differs is how well abatement tracks the shock.

## One-liner

> When costs are uncertain, fix the variable society is more sensitive to: price if marginal damage is flatter than marginal abatement cost, quantity if it is steeper, and $\sigma^2(C-D)/(2C^2)$ tells you how much the choice is worth.

## Problems

**P1 (🟢) *(Formal (a)–(b) · Exegetical (c).)*** An invented river has an ammonia threshold. Aggregate marginal abatement cost is $\mathrm{MAC}=10+a+\theta$, where $\theta$ has mean 0 and standard deviation 6 and is seen only by firms; the marginal benefit of abatement is $\mathrm{MB}=70-3a$. The regulator commits before $\theta$ is realized. (a) Find the expected-optimal abatement $a^*$ and the matching tax $p^*$. (b) Find the expected welfare loss (relative to the ex post best) under the quota and under the tax, and $\Delta$. (c) Which instrument should the regulator use, and for what named reason? One sentence.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** Invented numbers: $\mathrm{MB}=90-2a$ and $\mathrm{MAC}=a+\theta$. The regulator issues permits for abatement $30$ (the expected optimum) with a price ceiling of 45 (extra permits sold at 45 without limit) and a floor of 15. (a) Costs come in high: $\theta=+30$. Find abatement and the permit price under the collar, the ex post best abatement, and the welfare loss under the collar, under a pure cap at 30, and under a pure tax of 30. (b) Repeat for $\theta=+10$. (c) In the large-shock case, what has the ceiling done to the cap, and who now determines the quantity? Two sentences.

**P3 (🔴, optional) *(Formal (a) · Exegetical (b).)*** Add a benefit shock $\eta$ to Example 1: $\mathrm{MB}=120-a+\eta$, with $\eta$ of standard deviation $\sigma_\eta=20$ and correlation $\rho$ with the cost shock $\theta$ ($\sigma_\theta=30$). The same loss calculation, done with both shocks, gives (Stavins 1996, *Journal of Environmental Economics and Management*)
$$\Delta=\frac{\sigma_\theta^2\,(C-D)}{2C^2}-\frac{\rho\,\sigma_\eta\sigma_\theta}{C}.$$
(a) Find the correlation at which the regulator is indifferent. (b) Why does positive correlation favor the quantity instrument? Two sentences.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) · Exegetical (c).)*

(a) Set $10+a=70-3a$: $a^*=15$, and $p^*=10+15=25$ (MB at 15 is also 25).

(b) The slopes are $C=1$ and $D=3$, and $\sigma^2=36$.
$$\mathbb{E}L_Q=\frac{36}{2\times4}=4.5,\qquad \mathbb{E}L_P=\frac{36\times9}{2\times1\times4}=40.5,$$
so $\Delta=\dfrac{36\,(1-3)}{2\times1}=-36=4.5-40.5$. Quantities win by 36 in expected surplus.

**Must hit, strict (c):**

- Use the quota (a cap on discharges).
- Reason: marginal benefit is steeper than marginal abatement cost ($D=3>C=1$), so the ex post best quantity moves only by $\theta/(C+D)=\theta/4$ while a tax would let abatement swing by $\theta/C=\theta$, four times as far.

**Wrong turns:** plugging $D$ into the denominator ($C^2$ must be the cost slope); concluding "prices" because the tax gets the price right, which is true of every tax and settles nothing.

**Model answer (c):** Use the quota, because marginal damage is steeper than marginal abatement cost ($D>C$), so the best quantity barely moves with the shock: a fixed quantity misses it by $\theta/4$, a tax by $3\theta/4$.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

The ex post best solves $90-2a=a+\theta$, so $a^\circ=(90-\theta)/3$, and any abatement $a$ loses $\tfrac{3}{2}(a-a^\circ)^2$ (here $C+D=3$).

(a) $\theta=+30$: at the cap, MAC would be $30+30=60>45$, so firms buy extra permits at the ceiling and abate until $a+30=45$: $a=15$, permit price 45. The ex post best is $a^\circ=20$.

| Instrument | Abatement | Loss |
|---|---|---|
| Collar | 15 | $\tfrac32\times5^2=37.5$ |
| Pure cap | 30 | $\tfrac32\times10^2=150$ |
| Pure tax of 30 | 0 | $\tfrac32\times20^2=600$ |

(b) $\theta=+10$: MAC at the cap is $40$, inside the collar, so the cap binds: $a=30$ at a permit price of 40. The ex post best is $80/3\approx26.7$, and the collar and the pure cap both lose $\tfrac32\,(10/3)^2=50/3\approx16.7$. The pure tax gives $a=20$ and loses $\tfrac32\,(20/3)^2=200/3\approx66.7$.

**Must hit, strict (c):**

- The cap is breached: abatement is 15 instead of 30, so emissions exceed the cap by 15 units, because the regulator sells as many extra permits as firms want at 45.
- Beyond the ceiling the instrument is a tax of 45, so firms' marginal costs (their response to the price) set the quantity, not the regulator.

**Wrong turns:** keeping abatement at 30 in (a) because "the cap is the cap"; reading the ceiling as a limit on how much firms pay in total rather than on the marginal price.

**Model answer (c):** The ceiling turns the cap into a soft cap: the regulator sells extra permits at 45, and abatement falls to 15, 15 units short of the cap. In that region the instrument is a 45 tax, so the quantity is whatever firms choose at that price.

---

**P3** *(Formal (a) · Exegetical (b).)*

(a) With $C=2$, $D=1$: the first term is 112.5 (Example 1), and the second is $\rho\times20\times30/2=300\rho$. Indifference: $\rho=112.5/300=0.375$. Above it quantities win.

**Must hit, strict (b):**

- With positive correlation, high costs come with high benefits of abatement, so the ex post best abatement moves less than $\theta/(C+D)$: the two shocks partly cancel.
- A fixed quantity is then closer to the ideal, while a tax still lets abatement fall by the full $\theta/C$, away from where high benefits want it.

**Wrong turns:** thinking benefit uncertainty alone helps quantities; it enters only through $\rho$.

**Model answer (b):** When costs are high, benefits are high too, so the best level of abatement barely moves and a fixed quantity stays near it. A tax still lets firms cut abatement by $\theta/C$ exactly when abatement is most valuable, so it misses by more.

</details>

## Flashback

**From Lesson [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md) (Many distortions: second best and the marginal cost of public funds):** *(Formal.)* An invented state raises revenue with a proportional tax at rate $\tau=0.30$ on a base of taxable income $z(\tau)=(1-\tau)^e$, where $e$ is the elasticity of taxable income with respect to $1-\tau$; preferences are quasilinear, so taxpayers' surplus falls at rate $z$ per unit of $\tau$. A study finds that the last dollar of revenue costs taxpayers 1.40 dollars. (a) What elasticity $e$ does this imply? Give the marginal excess burden and the revenue-maximizing rate. (b) A public project's summed benefits are 1.25 times its cost. Holding $\tau=0.30$, what is the largest $e$ at which the project, financed by raising the rate, passes the modified Samuelson rule?

<details>
<summary>Solution</summary>

Revenue is $R=\tau(1-\tau)^e$, so $R'(\tau)=(1-\tau)^e\big(1-\tfrac{e\tau}{1-\tau}\big)$ and

$$\mathrm{MCPF}=\frac{z}{R'(\tau)}=\frac{1}{1-\dfrac{e\,\tau}{1-\tau}}.$$

(a) $\mathrm{MCPF}=1.4$ means $\frac{e\tau}{1-\tau}=1-\frac{1}{1.4}=\frac27$, so $e=\frac27\times\frac{0.7}{0.3}=\frac23$. The marginal excess burden is $1.4-1=0.40$, and the revenue-maximizing rate is $1/(1+e)=0.6$.

(b) The project passes when $\sum\mathrm{MRS}\ge\mathrm{MCPF}\cdot\mathrm{MRT}$, that is when $\mathrm{MCPF}\le1.25$, or $\frac{e\tau}{1-\tau}\le0.2$. At $\tau=0.3$ this is $e\le0.2\times\frac{0.7}{0.3}=\frac{7}{15}\approx0.47$. With the study's $e=\tfrac23$ it fails, 1.40 against 1.25.

**Wrong turns:** setting $e\tau/(1-\tau)$ equal to the marginal excess burden 0.40 instead of $1-1/\mathrm{MCPF}$, which gives $e\approx0.93$; comparing the benefit ratio with one plus the *average* burden of revenue already raised rather than with the MCPF.

</details>

## Connections

- **Backward:** [3.1](03-01-taxes-standards-and-tradable-permits.md) showed that a tax and a permit market reach the same [least-cost abatement](../reference.md#least-cost-abatement) when costs are known; this lesson breaks the tie with uncertainty. The loss triangle $\tfrac{C+D}{2}(a-a^\circ)^2$ is the externality deadweight loss of [`grad-micro` 6.3](../../grad-micro/lessons/06-03-externalities-coase-theorem.md), measured against a moving target.
- **Forward:** [3.3](03-03-pigou-in-a-second-best-world.md) adds a pre-existing labor tax, so the revenue a carbon tax or auctioned permits raise becomes part of the comparison.
- **Sideways:** [`economics-of-debt` 4.4](../../economics-of-debt/lessons/04-04-overborrowing.md) derives a Pigouvian tax on borrowing; whether to use that tax or a quantity limit on leverage when the regulator cannot see the shock is the same slope comparison. Weitzman's rule is also a mechanism-design result in miniature: the regulator commits to a rule before the private information arrives, as in [`grad-micro` 5.5](../../grad-micro/lessons/05-05-mechanism-design-markets.md), and chooses how much of the response to delegate to the informed party.
