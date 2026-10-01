# Public Economics · Lesson 4.3: Production efficiency: Diamond-Mirrlees

> ⏱ ~15 min · Module 4: Optimal commodity taxation · Builds on: [4.1 The Ramsey rule](04-01-the-ramsey-rule.md), [4.2 Equity and complementarity](04-02-many-person-ramsey-and-corlett-hague.md), [2.4 Second best and the marginal cost of public funds](02-04-second-best-and-the-marginal-cost-of-public-funds.md), [`grad-micro` 3.2 Cost minimization](../../grad-micro/lessons/03-02-cost-minimization.md) · Unlocks: [5.2 The Mirrlees problem](05-02-the-mirrlees-problem.md), [6.1 Atkinson-Stiglitz](06-01-atkinson-stiglitz.md)

## Why this matters

[4.1](04-01-the-ramsey-rule.md) and [4.2](04-02-many-person-ramsey-and-corlett-hague.md) told you how to set taxes on the goods households buy. But governments also tax what firms buy from each other: fuel sold to truckers, steel crossing a border, every sale in a turnover-tax chain. Should they? And when a public agency builds a road, which prices should it use to cost the cement? Diamond and Mirrlees (1971, *AER*, in two parts) gave one answer to all three questions: in a second-best world with distorted consumer prices, production should still be first-best. Don't tax intermediate goods, don't levy tariffs, and evaluate public production at producer prices. It is why most of the world now taxes consumption through a VAT that refunds the tax on business inputs.

## The idea

A tax on an input does two things. Like any tax, it raises the price of what consumers eventually buy. But if firms can substitute away from the taxed input, it also makes them produce with the *wrong recipe*: they use more labor and less of the taxed input than the least-cost mix. That extra labor buys nothing. It is real resources thrown away, before a single consumer has reacted.

Now run a thought experiment. Replace the input tax with a tax on the final good, set so that the consumer price stays exactly where it was. Consumers see no change: same prices, same purchases, same utility. But firms return to the least-cost recipe, and the resources they stop wasting show up as extra revenue, because the consumer still pays the same price while production costs less. The government can then spend that windfall on cutting some consumer price, which makes someone better off. So the input tax was dominated.

This argument never mentions welfare weights, elasticities or which goods are necessities. Whatever the government wants to do to consumer prices, it should do it *directly*, and leave firms facing one common set of prices. Consumer prices are second-best (they carry Ramsey wedges); production is first-best. That is [production efficiency](../reference.md#production-efficiency).

## The formal version

**Setup.** There are $n$ goods and factors. Private firms are competitive with constant returns to scale (so no pure profits), and together their feasible net outputs form the aggregate production set $Y$ ([`grad-micro` 3.4](../../grad-micro/lessons/03-04-aggregation-and-the-firm.md) explains why firms can be pooled this way). The government may add public production $z_g$. Firms face producer prices $p$; households face consumer prices $q$; the unit tax on good $i$ is $t_i=q_i-p_i$ (in Module 4, $q$ is a price, not a quantity). Each household $h$ has indirect utility $V^h(q)$, with labor entering as a negative demand, and aggregate net demand is $X(q)$. Welfare is any $W\big(V^1(q),\dots,V^H(q)\big)$ increasing in each $V^h$: utilitarian, maximin, or anything between.

**The trick.** Walras' law makes the government budget constraint redundant. Households spend what they earn, $q\cdot X=0$, and firms earn zero profit, $p\cdot y=0$. If markets clear, $X=y+z_g$, then tax revenue $(q-p)\cdot X=-p\cdot z_g$ is exactly what public production costs at producer prices. So the government's problem is

$$\max_{q}\;W\big(V^1(q),\dots,V^H(q)\big)\quad\text{s.t.}\quad X(q)\in Y+\{z_g\}.$$

*In words:* the planner chooses consumer prices, and the only constraint is that what households demand at those prices must be producible.

**Theorem ([Diamond-Mirrlees](../reference.md#diamond-mirrlees)).** Suppose (i) the government can set the consumer price of every good and factor independently, (ii) there are no pure profits (constant returns, or profits taxed at 100 percent), and (iii) there is some good (such as labor, whose price everyone who works gains from) for which a small consumer-price change makes every household better off. Then at the optimum $X(q^*)$ lies on the frontier of the aggregate production set.

*Proof sketch.* If $X(q^*)$ were strictly inside, a small change in that one price would raise welfare while keeping demand inside the set. So $q^*$ was not optimal.

*In words:* whatever wedges the optimal tax system drives between consumer prices, it never wastes inputs in production.

**Corollaries.** On the frontier, with competitive firms, one vector of producer prices $p$ supports the whole aggregate plan. Therefore:

- **No taxes on intermediate goods.** A tax on a firm-to-firm sale gives buyer and seller different prices, and marginal rates of transformation differ across firms. A tax on capital in one sector only, like the corporate tax in [2.2](02-02-general-equilibrium-incidence-the-harberger-model.md), breaks the rule the same way.
- **No tariffs for a small open economy.** Trade is just a technology that turns exports into imports at world prices. A tariff makes domestic firms produce import substitutes whose marginal cost exceeds the world price.
- **Public production at producer prices.** The public sector should maximize $p\cdot z_g$. A project's inputs and outputs are valued at producer prices, the economy's [shadow prices](../reference.md#shadow-prices), not at the tax-inclusive prices consumers pay.

**Where it fails.** Relax (i): if some final good cannot be taxed (an informal sector, home production), an input tax may be the only way to reach it. Relax (ii): if pure profits go untaxed, welfare depends on $p$ through profit income, and taxing an input can be an indirect way of taxing the rent.

**VAT versus turnover tax.** A [cascading turnover tax](../reference.md#cascading-turnover-tax) charges a rate on every sale, including sales between firms. The tax paid early in the chain becomes part of the cost that is taxed again at the next stage. So long chains pay more than short ones, and firms can avoid tax by merging, which is a production decision driven by tax. A [value added tax](../reference.md#value-added-tax) also collects at every stage, but credits each firm for the tax on its inputs. On net, only final consumption is taxed, and firms face untaxed input prices, as the theorem requires.

## Picture

![Left panel: the unit isoquant of X in the plane of intermediate input m and labor L. The untaxed firm picks E at m 0.5, L 0.5, using resources m plus L equal to 1. With a 44 percent input tax, it moves along the isoquant to T at m 0.42, L 0.60, using 1.017. Right panel: of the 0.20 by which the consumer price exceeds cost, the input tax collects 0.183 and wastes 0.017, while a final-good tax collects all 0.20](assets/04-03-fig1.svg)

The figure plots Example 1. On the left, the input tax tilts the firm's isocost (green) and pushes it from E to T, a point that uses more resources (red dashed line) for the same unit of output. On the right, the consumer price is 1.20 either way, but only the final-good tax turns the whole wedge into revenue.

## Worked examples

**Example 1 (clean): an input tax and its replacement.** The final good $X$ is made from labor $L$ and an intermediate input $m$ by $X=2\sqrt{mL}$. The wage is 1, $m$ is made one-for-one from labor, and all firms are competitive with constant returns. Minimizing $p_m m+L$ at $X=1$ gives $m=1/(2\sqrt{p_m})$, $L=\sqrt{p_m}/2$ and unit cost $\sqrt{p_m}$ ([`grad-micro` 3.2](../../grad-micro/lessons/03-02-cost-minimization.md)). Demand is $x=60-20q$, where $q$ is the consumer price of $X$; utility is quasilinear, so consumer surplus measures welfare.

- *Untaxed:* $p_m=1$, so $m=L=\tfrac12$, unit cost 1, $q=1$, and $x=40$.
- *Input tax $t=0.44$:* $p_m=1.44$, so $q=\sqrt{1.44}=1.2$, and $x=36$. Per unit of $X$, $m=5/12$ and $L=3/5$, so resources used are $61/60=1.017$. Revenue per unit is $0.44\times5/12=11/60=0.183$. Check: $1.017+0.183=1.2$, the consumer price.
- *Totals:* revenue $36\times11/60=6.6$. Consumers lose $0.2\times(40+36)/2=7.6$ of surplus, so the deadweight loss is $1.0$. That splits into the usual triangle, $\tfrac12\times0.2\times4=0.4$, plus production waste, $36\times1/60=0.6$.
- *Same consumer price, final-good tax $T=0.2$:* consumers are exactly as before, the firm goes back to E, and revenue is $0.2\times36=7.2$, higher by the 0.6 no longer wasted. Deadweight loss is 0.4.
- *Same revenue, final-good tax:* raising only 6.6 needs $T(40-20T)=6.6$, so $T=0.181$ and $q=1.181$. Deadweight loss is $10T^2=0.329$, a third of the input tax's.

The input tax was a final-good tax plus a pure waste. (With fixed input proportions there would be no waste, and the input tax would just be a final-good tax in disguise.)

**Example 2 (why you'd care): when the theorem fails.** Invented numbers. Two final goods have demands $x_F=100-50q_F$ and $x_I=100-50q_I$, both at producer price 1, with quasilinear utility. Good $F$ is sold by formal firms and can be taxed at rate $T$. Good $I$ is sold by informal firms that the tax authority cannot see, but they make it with Example 1's technology and buy the input $m$ from registered suppliers. A tax $s$ on $m$ is credited back to formal buyers (a VAT), so it falls only on informal producers. The government must raise 10.

- *Respect production efficiency ($s=0$):* $T(50-50T)=10$ gives $T=0.276$ and deadweight loss $25T^2=1.91$.
- *Tax the input too:* minimizing total deadweight loss (triangles plus waste) numerically gives $s\approx0.18$ and $T\approx0.144$. The input tax lifts $q_I$ to 1.087 and raises 3.8, the formal good raises the other 6.2, and the total deadweight loss is 0.87, of which 0.16 is production waste.

Taxing the input cuts the burden by more than half, even though it deliberately wastes resources. It is the only handle the government has on good $I$'s base. (If $I$ could be taxed directly, both goods would bear 0.113 and the loss would be 0.64.) This is the development-economics caveat to the VAT consensus. Emran and Stiglitz (2005, *Journal of Public Economics*) argue that with a large informal sector, replacing trade taxes with a VAT that informal firms escape can lower welfare. Condition (i) fails, and so does the prescription.

## Watch out

- **You might think Diamond-Mirrlees says "don't tax business", but actually it says don't tax transactions *between* firms.** Taxes on final consumption and on labor are the whole point. A profits tax is a separate question, and condition (ii) wants pure profits taxed away.
- **You might think an input tax is just an indirect tax on the final good, but actually that holds only with fixed proportions.** When firms can substitute, it adds a waste in production on top of the consumer-side triangle (Example 1).
- **You might think second best means "spread small distortions everywhere", but actually the optimum distorts consumer prices and leaves production first-best.** Lipsey-Lancaster ([2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md)) says second best *can* require new distortions; Diamond-Mirrlees says which margin never needs them, provided (i) and (ii) hold.
- **You might think public projects should be costed at what things sell for, but actually they should be costed at producer prices.** Cement that carries a reclaimable VAT costs the economy its net-of-tax price.

## One-liner

> Put every wedge between consumers and firms, never between firms: tax final goods directly and production stays on the frontier, unless some final good or some profit is out of the tax system's reach.

## Problems

**P1 (🟢) *(Formal.)*** An invented bread chain. A farmer grows wheat with value added 40 per loaf's worth (no purchased inputs), a miller adds 30, and a baker adds 30, so the untaxed loaf costs 100. Each stage is competitive and passes any tax fully into its selling price. A turnover tax of 4 percent applies to every sale, on the full selling price. (a) Find the final price of a loaf, the tax collected at each stage, and the effective tax rate on the final price. (b) Find the VAT rate (on the value added at each stage, with input credits) that raises the same revenue per loaf. (c) A single integrated firm can do all three stages but at some extra real cost $c$ per loaf. Under the turnover tax, what is the largest $c$ at which the integrated firm still undercuts the chain? What is it under the VAT?

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** An invented small open economy imports widgets at a world price of 10. Domestic supply is $S(p)=p-4$ and domestic demand is $D(p)=30-p$, where $p$ is the domestic price. (a) A tariff of 2 per widget is imposed. Find domestic output, consumption, imports, tariff revenue, and the deadweight loss, split into its production and consumption parts. (b) Show that the tariff equals a consumption tax of 2 on all widgets plus a production subsidy of 2 to domestic producers, by checking that the two revenue figures net to the tariff's. Then find the consumption tax on all widgets that raises the tariff's revenue, and its deadweight loss. (c) Which condition of Diamond-Mirrlees does the tariff violate, and what would a tariff advocate have to show to justify it within this framework? Two sentences.

**P3 (🔴) *(Exegetical.)*** For each proposal, say whether the Diamond-Mirrlees prescription applies, and if it does not, name the failing condition. (a) A small open economy that taxes consumption and labor proposes a 10 percent tariff on imported steel to raise revenue. (b) Half of all prepared food is sold by unregistered street vendors who cannot be taxed but who buy their flour from registered mills; the government proposes a tax on flour sold to buyers without a VAT number. (c) A mining company earns large rents on a deposit, the profit tax captures only a quarter of them, and the government proposes an excise on the explosives the mine uses. (d) A highway agency is costing a bridge; the cement it will buy carries a 20 percent VAT that businesses reclaim. Should the cost-benefit analysis use the price with or without the VAT?

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) Farmer: sells at $40\times1.04=41.60$, paying tax 1.60. Miller: costs $41.60+30=71.60$, sells at $71.60\times1.04=74.464$, paying 2.864. Baker: costs $74.464+30=104.464$, sells at $104.464\times1.04=108.64$, paying 4.179. Total tax is 8.64 per loaf, an effective rate of 8.64 percent on the untaxed price: more than double the statutory 4 percent, because tax is charged on tax at each stage.

(b) A VAT at rate $v$ collects $v$ times total value added, $100v$, so $v=8.64\%$ raises the same 8.64. The stage payments are $40v=3.46$, $30v=2.59$ and $30v=2.59$, and the final price is again 108.64.

(c) The integrated firm pays the turnover tax once, on its own sale: $(100+c)\times1.04$. It undercuts the chain while $(100+c)\times1.04<108.64$, so $c<4.46$. Under the VAT the integrated firm pays $v(100+c)$, more than the chain, so integration saves no tax and happens only if it is genuinely cheaper ($c<0$). The turnover tax will pay firms to waste up to 4.46 per loaf reorganizing production: a production inefficiency Diamond-Mirrlees rules out.

**Wrong turns:** adding the three stage taxes as $3\times4\%$ of 100, which ignores the tax on tax; computing the integrated firm's saving as the tax gap (4.64) rather than the extra cost that just offsets it, $4.64/1.04=4.46$.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) The domestic price is 12. Output $S(12)=8$ (up from 6), consumption $D(12)=18$ (down from 20), imports $18-8=10$ (down from 14). Revenue $2\times10=20$. Production loss: the extra 2 widgets are made at marginal cost rising from 10 to 12 when they could be bought for 10, $\tfrac12\times2\times2=2$. Consumption loss: $\tfrac12\times2\times2=2$. Total deadweight loss 4.

(b) A consumption tax of 2 on all 18 widgets raises 36; a subsidy of 2 on 8 domestic widgets costs 16; $36-16=20$, the tariff revenue, and the prices each side faces (12 for consumers, 12 for domestic producers) are the tariff's. A consumption tax $T$ alone leaves producers at the world price and raises $T(20-T)$. Setting this to 20 gives $T=10-\sqrt{80}=1.056$, with deadweight loss $\tfrac12T^2=0.557$, against the tariff's 4.

**Must hit, strict (c):**

- The tariff breaks production efficiency: domestic producers face 12 while the economy's rate of transformation through trade is 10, so it produces domestically what it could import more cheaply. That is the production-subsidy half.
- Within the framework, the advocate must show a failed condition: some consumption the government cannot tax directly (so the tariff reaches an otherwise untaxable base) or untaxed pure profits it captures. The revenue motive alone does not justify it when consumption taxes are available.

**Wrong turns:** counting only the consumption triangle, which misses the production loss that makes the tariff worse than a consumption tax; comparing the tariff with a consumption tax of the same *rate* (which raises 36) rather than the same *revenue*.

**Model answer (c):** The tariff violates production efficiency: domestic firms produce widgets at marginal costs up to 12 that trade would supply at 10, and that is the production-subsidy half of the tariff. To justify it here, an advocate would have to show that a condition of the theorem fails, such as widget consumption the government cannot tax directly or rents the tariff captures, since otherwise a consumption tax raises the same revenue with a smaller loss.

---

**P3** *(Exegetical.)*

**Must hit, strict:**

- (a) Applies: no tariff. All consumption and labor are taxable and there are no untaxed rents in the story, so the revenue should come from consumption taxes; the tariff adds a production distortion.
- (b) Does not apply: condition (i) fails, because a final good (vendors' food) cannot be taxed directly. A tax on the flour they buy is a second-best proxy, as in Example 2, and may raise welfare even though it distorts production.
- (c) Does not apply: condition (ii) fails, because pure profits are not fully taxed, so the theorem does not rule out an input tax. The excise may capture part of the rent; a direct rent tax would do so without distorting the input mix.
- (d) Applies: use the price without the VAT. Producer prices are the shadow prices for public production, and the reclaimable VAT is a transfer, not a resource cost.

**Wrong turns:** calling (a) justified because "the government needs the revenue" (it can raise it elsewhere at lower cost); answering (c) "applies, never tax inputs", which forgets that the theorem assumes profits are fully taxed; using the VAT-inclusive price in (d) because that is what a household would pay.

**Model answer:** (a) applies: tax consumption, not imports. (b) fails, condition (i): the vendors' food is an untaxable final good, so taxing their flour can be a sensible proxy. (c) fails, condition (ii): untaxed rents mean an input excise may capture some of them, though a rent tax would be better. (d) applies: cost the cement at its net-of-VAT producer price.

</details>

## Flashback

**From Lesson [4.1](04-01-the-ramsey-rule.md) (The Ramsey rule):** *(Formal (a)–(b) · Exegetical (c).)* Invented numbers: one consumer with quasilinear utility, producer prices 1, and independent linear demands $x_A=100-25q_A$ and $x_B=90-60q_B$, where $q_i$ is the consumer price of good $i$. The government taxes good A at 0.50 per unit, and an adviser says the tax system is Ramsey-optimal. (a) What Ramsey number $\theta$ and marginal cost of public funds $\lambda$ does A's tax imply? (b) What unit tax on B completes the Ramsey system, what does each good sell, and how much revenue does the system raise? Confirm the inverse elasticity rule for B at its taxed price. (c) A colleague proposes taxing B at the same share of its consumer price as A, "to treat the goods neutrally." In one sentence, what does the Ramsey rule equalize instead, and why does B get the lower rate?

<details>
<summary>Solution</summary>

(a) Untaxed, A sells 75; at $q_A=1.5$ it sells 62.5, a cut of one-sixth. With linear demand the rule $t_A b_A=\theta x_A$ (slope $b_A=25$) is exact, so $\theta=0.5\times25/62.5=0.2$ and $\lambda=1/(1-\theta)=1.25$. Check: $\varepsilon_A=-25(1.5)/62.5=-0.6$ and $t_A/q_A=\tfrac13$, whose product is 0.2.

(b) B's quantity must fall by the same one-sixth of its untaxed 30, to 25, so $t_B=5/60=\tfrac1{12}\approx0.083$ (equivalently $60\,t_B=0.2\times25$). Revenue is $0.5\times62.5+25/12=31.25+2.08=33.33$. At $q_B=\tfrac{13}{12}$, $\varepsilon_B=-60(13/12)/25=-2.6$ and $t_B/q_B=\tfrac1{13}$, and $\tfrac1{13}\times2.6=0.2=\theta$. The last dollar costs 1.25 in both markets: the marginal excess burden $b_it_i/(x_i^0-2b_it_i)$ is $12.5/50=0.25$ for A and $5/20=0.25$ for B, with $x_i^0$ the untaxed quantity.

**Must hit, strict (c):**

- Ramsey equalizes the proportional cut in (compensated) quantity, both one-sixth here, which is the same as equalizing the cost of the last dollar raised; it does not equalize rates.
- B is far more elastic at its taxed price ($-2.6$ against $-0.6$), so the same proportional cut takes a much smaller rate.

**Model answer (c):** The Ramsey rule equalizes the proportional fall in each good's compensated demand (one-sixth for both), not the rate, and because B's demand is more than four times as elastic, it reaches that cut at a rate of one-thirteenth of its price against A's one-third.

**Wrong turns:** reading $\theta$ off as A's rate $t_A/q_A=\tfrac13$ without the elasticity factor; confusing $\theta$ with the marginal excess burden $\lambda-1=0.25$; cutting B's quantity by the same *amount* as A's (12.5) instead of the same proportion.

</details>

## Connections

- **Backward:** [4.1](04-01-the-ramsey-rule.md) and [4.2](04-02-many-person-ramsey-and-corlett-hague.md) set the consumer-price wedges; this lesson says those are the *only* wedges. The corporate tax of [2.2](02-02-general-equilibrium-incidence-the-harberger-model.md), a tax on capital in one sector, is a textbook violation. The cost function and input substitution are [`grad-micro` 3.2](../../grad-micro/lessons/03-02-cost-minimization.md), and the pooled production set is [`grad-micro` 3.4](../../grad-micro/lessons/03-04-aggregation-and-the-firm.md). The contrast with Lipsey-Lancaster is [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md)'s.
- **Forward:** [5.2](05-02-the-mirrlees-problem.md) keeps the same stance: distort the household's choice as the objective requires, never the firm's. [6.1](06-01-atkinson-stiglitz.md) is the consumer-side twin: under weak separability, a good income tax makes differentiated commodity taxes unnecessary, as good consumer taxes make input taxes unnecessary here.
- **Sideways:** producer prices as shadow prices are the valuation rule behind public cost-benefit analysis. Which distributional weights belong in that analysis is [`philosophy-of-economics`](../../philosophy-of-economics/syllabus.md) 3.3's question, not this course's. The informal sector as a limit on what the state can tax is [`institutions-and-development`](../../institutions-and-development/syllabus.md) 4.4's subject.
