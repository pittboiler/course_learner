# Public Economics · Lesson 3.3: Pigou in a second-best world

> ⏱ ~15 min · Module 3: Choosing an externality instrument · Builds on: [2.4 Second best and the marginal cost of public funds](02-04-second-best-and-the-marginal-cost-of-public-funds.md), [3.1 Taxes, standards, and tradable permits](03-01-taxes-standards-and-tradable-permits.md), [`grad-micro` 6.3 Externalities and the Coase theorem](../../grad-micro/lessons/06-03-externalities-coase-theorem.md) · Unlocks: [4.1 The Ramsey rule](04-01-the-ramsey-rule.md), [4.2 Many-person Ramsey and Corlett-Hague](04-02-many-person-ramsey-and-corlett-hague.md), [6.1 Atkinson-Stiglitz](06-01-atkinson-stiglitz.md)

## Why this matters

[`grad-micro` 6.3](../../grad-micro/lessons/06-03-externalities-coase-theorem.md) set the pollution tax equal to marginal external damage, $\mathrm{MED}$, in an economy with no other taxes. Real carbon taxes land on economies that already tax wages at 30 percent or more, and they raise real money. That creates two questions Pigou never faced: is the revenue worth more than a dollar per dollar, since it lets the wage tax fall, and does the carbon tax itself make the wage tax worse? The answers decide whether the right carbon tax is above, at, or below marginal damage, and they settle a claim that politicians love: the "double dividend", a cleaner environment *and* a more efficient tax system from one reform.

## The idea

An invented country taxes wages and wants a gasoline tax. Each gallon burned does 60 cents of damage (MED = 60). Raising a dollar through the wage tax costs the economy 1.20 dollars: the dollar plus 20 cents of deadweight loss (a [marginal cost of public funds](../reference.md#marginal-cost-of-public-funds) of 1.2, as in [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md)).

Notice first that a gas tax is partly a wage tax in disguise. It raises the price of what a paycheck buys, so it lowers the real wage just as a wage tax does, and people work a little less. So compare two ways of raising revenue: raise the gas tax a bit and cut the wage tax just enough that a paycheck buys the same bundle as before. Work effort doesn't move, and at first the revenue doesn't either. The one thing that changes is that people substitute from gasoline to other goods.

That substitution does two things. Each gallon not burned saves 60 cents of damage. It also removes a gallon from the gas-tax base, so the treasury loses the tax $t$ on it, and replacing that revenue costs $1.2\,t$. At $t = 60$ the last gallon deterred saves 60 but costs 72: too high. The rate where they balance is $60/1.2 = 50$ cents, *below* marginal damage. The gas tax is a worse revenue raiser than the wage tax because its base runs away, and a higher $\lambda$ makes that shortfall matter more.

## The formal version

**[Sandmo additivity](../reference.md#sandmo-additivity).** Start with the cleanest Ramsey setting: a representative consumer with quasilinear utility and independent demands $x_j(q_j)$ at consumer prices $q_j = p_j + t_j$ (producer prices $p_j$ fixed, $x_j' < 0$). Good $k$ does damage $\mathrm{MED}$ per unit. The government must raise $R$ with commodity taxes; $\lambda$ is the multiplier on its budget, which is the MCPF here because quasilinearity makes a dollar to the consumer worth exactly one unit of welfare. Maximizing $\sum_j \mathrm{CS}_j(t_j) - \mathrm{MED}\cdot x_k + \lambda\big(\sum_j t_j x_j - R\big)$ gives

$$t_k = \underbrace{\frac{\lambda - 1}{\lambda}\cdot\frac{x_k}{|x_k'|}}_{\text{Ramsey term}} + \underbrace{\frac{\mathrm{MED}}{\lambda}}_{\text{Pigouvian term}}, \qquad t_j = \frac{\lambda - 1}{\lambda}\cdot\frac{x_j}{|x_j'|}\ \ (j \ne k).$$

*In words:* the dirty good's tax is the tax it would bear as a revenue source anyway, plus marginal damage scaled down by the MCPF. The damage appears in its own good's rule and no other. Sandmo (1975, *Swedish Journal of Economics*) proved this additivity in a general many-good model. The Ramsey term is [4.1](04-01-the-ramsey-rule.md)'s inverse-elasticity logic; with $\lambda = 1$ (lump-sum taxes available) it vanishes and $t_k = \mathrm{MED}$, Pigou again.

**The benchmark with a labor tax.** Now the setting of Bovenberg and de Mooij (1994, *American Economic Review*), stylized. Labor $L$ is the only input; one unit makes one unit of a clean good $C$ or a dirty good $D$, so producer prices are 1 and $t$ is both a unit and a percentage tax on $D$. Wages are taxed at rate $\tau$. Assume (i) goods are weakly separable from leisure and (ii) the goods sub-utility is homothetic, and damage $\mathrm{MED}$ per unit of $D$ enters utility separably. Then everything the consumer does depends on the taxes only through the **real wage** $w = (1-\tau)/P(t)$, with $P$ the price index of the goods bundle, and through relative prices, which set the budget share of $D$.

**The swap.** Raise $t$ by $dt$ and cut $\tau$ by $k\,dt$, where $k = D/L$ is dirty spending per unit of labor. By Shephard's lemma this leaves $w$ unchanged, so labor supply and the value of the goods bundle are unchanged. Mechanical revenue is unchanged too ($+D\,dt$ from the dirty tax, $-kL\,dt = -D\,dt$ from the wage tax). What remains is substitution away from $D$ by $|\Delta|\,dt$, which gains $\mathrm{MED}\,|\Delta|\,dt$ of environment and loses $t\,|\Delta|\,dt$ of revenue worth $\lambda t\,|\Delta|\,dt$. At the optimum these match:

$$t^* = \frac{\mathrm{MED}}{\lambda}.$$

*In words:* in the benchmark the Ramsey term is zero (separability and homotheticity make uniform goods taxation optimal, the result [6.1](06-01-atkinson-stiglitz.md) builds on), so the [second best Pigouvian tax](../reference.md#second-best-pigouvian-tax) is marginal damage divided by the MCPF, below MED whenever $\lambda > 1$.

**The decomposition.** Parry (1995, *Journal of Environmental Economics and Management*) splits the welfare effect of a revenue-neutral environmental tax into three pieces:

- the **primary (Pigouvian) gain**: damage avoided minus the Harberger triangle in the dirty-good market, what the tax would earn with no other taxes;
- the **[revenue recycling effect](../reference.md#revenue-recycling-effect)**: the efficiency gain from using the revenue to cut the wage tax, about $(\lambda - 1)$ times the revenue;
- the **[tax interaction effect](../reference.md#tax-interaction-effect)**: the loss because the higher goods price lowers the real wage, shrinking labor supply and the wage-tax base.

*In words:* recycling is the good news about the revenue, interaction is the bad news about the price rise, and the swap argument shows that in the benchmark the bad news is bigger, by exactly the dirty base's erosion. That is why Bovenberg and de Mooij, and Bovenberg and Goulder (1996, *American Economic Review*), put the optimal tax below MED.

**The [double dividend](../reference.md#double-dividend).** Goulder (1995, *International Tax and Public Finance*) separated two claims. The *weak* form: recycling the revenue through cuts in distorting taxes beats returning it lump sum. The *strong* form: the revenue-neutral swap has zero or negative **gross cost**, meaning welfare rises even before counting the environment.

*In words:* weak asks "is this the best use of the money?"; strong asks "is the reform free?". The benchmark says yes to the first and no to the second.

## Picture

![Waterfall chart of a revenue-neutral environmental tax in the invented benchmark economy, per 1,000 dollars of pre-tax earnings: Pigouvian gain plus 4.03, tax interaction minus 5.66 bringing the running total to minus 1.64, which is where lump-sum return of the revenue ends, revenue recycling plus 5.09, and a net gain of 3.45 when the revenue cuts the labor tax](assets/03-03-fig1.svg)

Read left to right. The interaction cost is larger than the Pigouvian gain on its own, so handing the revenue back lump sum *lowers* welfare. Only the recycling bar, larger than zero but smaller than the interaction bar, turns the reform positive.

## Worked examples

**Example 1 (Sandmo's two terms; invented numbers).** The dirty good has demand $x = 120 - 3q$ with producer price 20, so $q = 20 + t$ and $|x'| = 3$; $\mathrm{MED} = 12$; the rest of the tax system puts $\lambda = 1.2$, taken as fixed. The rule gives $t = 12/1.2 + \tfrac{0.2}{1.2}\cdot\frac{60 - 3t}{3} = 10 + \tfrac16(20 - t)$, so $\tfrac76 t = \tfrac{80}{6}$ and $t = 80/7 \approx 11.43$: a Pigouvian term of 10 plus a Ramsey term of $10/7 \approx 1.43$. The two terms pull opposite ways relative to MED, and here the net is still below 12; a less elastic dirty good would push it above. A clean good in the same economy is taxed by its Ramsey term alone.

**Example 2 (the benchmark, solved; invented numbers).** Take the benchmark with Cobb-Douglas goods preferences (a fifth of goods spending on $D$), labor supply elasticity 0.5 with respect to the real wage, and a revenue requirement that needs $\tau_0 \approx 29.8$ percent with no environmental tax. Damage is 30 cents per dollar of dirty good at the optimum. Solving numerically:

- the optimum is $t^* \approx 0.244$ with $\tau^* \approx 27.1$ percent, the dirty-tax revenue funding a cut of 2.8 points;
- the multiplier is $\lambda \approx 1.228$, and $0.30/1.228 \approx 0.244$: the rule $t^* = \mathrm{MED}/\lambda$ holds exactly. The same $\lambda$ is [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md)'s formula $1/\big(1 - \tau e/(1-\tau)\big)$ evaluated at $\tau^*$, because at the optimum the pollution a higher wage tax deters exactly pays for the dirty-tax revenue it erodes;
- setting $t = 0.30$, the full Pigouvian rate, gains 3.32 per 1,000 dollars of earnings against 3.45 at $t^*$.

The figure decomposes the move from $t = 0$ to $t^*$. Environmental benefit is 6.70 per 1,000 dollars; the **gross cost** of the swap is 3.25, positive, so the strong dividend fails. Lump-sum return nets $-1.64$ against 3.45 with the wage-tax cut (components sum to the net up to rounding), so the weak dividend holds by a wide margin. This is also why a free permit allocation ([3.1](03-01-taxes-standards-and-tradable-permits.md)) can be costly in second best: grandfathering gives the revenue away and still raises the price of goods, so it keeps the interaction cost and forgoes the recycling gain (Goulder, Parry and Burtraw 1997, *RAND Journal of Economics*).

## Watch out

- You might think "the optimal environmental tax is below MED" is a theorem, but actually it is the benchmark's result. It needs the Ramsey term to vanish; if the dirty good is an inelastic separate base (Example 1 with less price-responsive demand) or a complement to leisure ([4.2](04-02-many-person-ramsey-and-corlett-hague.md)'s Corlett-Hague logic), the second-best tax can exceed MED.
- You might think dividing by the MCPF is always right, but actually $\lambda > 1$ here comes from a representative agent with no lump-sum tax. Jacobs and de Mooij (2015, *Journal of Environmental Economics and Management*) show that with an optimal nonlinear income tax, whose distortions buy redistribution, the MCPF correction disappears and the second-best tax equals MED.
- You might think the weak double dividend is an argument for the tax, but actually it compares two *uses* of revenue and says nothing about whether the tax is worth levying. The case for the tax rests on net benefit (6.70 against 3.25), not on either dividend.

## One-liner

> A pollution tax is also a wage tax in disguise: its revenue lets you cut the real one, but its base erodes, so in the benchmark the right rate is marginal damage divided by the marginal cost of public funds.

## Problems

**P1 (🟢) *(Formal.)*** An invented economy fits the benchmark (goods separable from leisure, homothetic goods preferences). A ton of emissions does 40 dollars of damage and the government's MCPF is $\lambda = 1.25$. (a) Find the optimal emissions tax. (b) At a tax of 40 dollars, what is the net welfare effect of the swap, per ton of emissions it deters? (c) Instead, the wage tax is $\tau = 0.4$ and the elasticity of labor supply with respect to the net wage is $e = 0.25$, and these are the optimum's values. Use [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md)'s formula to find $\lambda$ and the optimal tax.

**P2 (🟡) *(Exegetical (a) · Exegetical (b).)*** (a) Classify each claim as the weak double dividend, the strong double dividend, or neither, naming the reason. (i) "Using the carbon revenue to cut payroll taxes leaves people better off than mailing everyone an equal rebate check." (ii) "Even if you think climate damage is zero, this carbon-tax-for-payroll-tax swap raises welfare." (iii) "The climate benefits of the tax exceed its economic costs." (b) In two sentences, explain why returning the revenue lump sum forfeits the weak dividend in the benchmark.

**P3 (🔴, optional) *(Formal (a) · Exegetical (b).)*** In Sandmo's quasilinear setting, a dirty good has demand $x = 100 - 2q$ with producer price 20, $\mathrm{MED} = 10$, and the MCPF is $\lambda = 1.25$, taken as fixed. (a) Find the optimal tax and split it into its Ramsey and Pigouvian terms. (b) The answer exceeds MED, while the benchmark says the tax should be below MED. In two sentences, name the assumption that separates the two cases.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) $t^* = \mathrm{MED}/\lambda = 40/1.25 = 32$ dollars per ton.

(b) Each ton deterred saves 40 dollars of damage and costs 40 dollars of emissions-tax revenue, which costs $1.25 \times 40 = 50$ to replace through the wage tax. Net: $40 - 50 = -10$ dollars per ton deterred, so the tax should fall.

(c) $\lambda = 1\big/\big(1 - 0.25 \times 0.4/0.6\big) = 1/(1 - 1/6) = 1.2$, so $t^* = 40/1.2 \approx 33.33$ dollars per ton. In the benchmark this use of 2.4's formula is exact at the optimum's $\tau$, not an approximation.

**Wrong turns:** multiplying MED by $\lambda$ (48) instead of dividing, on the reasoning that "revenue is valuable, so tax more": the revenue value is already counted, and the base erosion is what drives the rate down. In (b), counting only the damage saved and forgetting the lost revenue.

---

**P2** *(Exegetical (a) · Exegetical (b).)*

**Must hit, strict (a):**

- (i) Weak double dividend: it compares two uses of the same revenue, cutting a distorting tax against a lump-sum return.
- (ii) Strong double dividend: it claims the gross (non-environmental) cost of the revenue-neutral swap is zero or negative. In the benchmark it fails (Example 2: gross cost 3.25 per 1,000 dollars).
- (iii) Neither: it is the ordinary net-benefit case for the tax, environment included, and it says nothing about how the revenue is used.

**Must hit, strict (b):**

- The tax still raises goods prices and cuts the real wage, so the tax interaction cost is incurred whatever is done with the revenue.
- Lump-sum return gives up the recycling gain of about $(\lambda - 1)$ per dollar, the only term that offsets the interaction cost; with $\lambda > 1$ the wage-tax cut is strictly better.

**Wrong turns:** calling (iii) a strong dividend because it sounds like a "win-win"; saying lump-sum return avoids the interaction effect.

**Model answer (b):** Whatever is done with the revenue, the environmental tax raises the price of goods, lowers the real wage and shrinks the wage-tax base, so the interaction cost is paid anyway. Returning the money lump sum throws away the one offsetting term, the recycling gain of cutting a tax whose marginal cost exceeds one, so lump-sum recycling is dominated whenever $\lambda > 1$.

---

**P3** *(Formal (a) · Exegetical (b).)*

(a) With $q = 20 + t$, $x = 60 - 2t$ and $|x'| = 2$, so $x/|x'| = 30 - t$. The rule gives

$$t = \frac{10}{1.25} + \frac{0.25}{1.25}(30 - t) = 8 + 0.2\,(30 - t),$$

so $1.2\,t = 14$ and $t = 35/3 \approx 11.67$. The Pigouvian term is $10/1.25 = 8$; the Ramsey term is $0.2\,(30 - 35/3) = 11/3 \approx 3.67$. (A direct numerical maximization of $\mathrm{CS} - 10x + 1.25\,t\,x$ agrees.)

**Must hit, strict (b):**

- Here the dirty good is a separate tax base in a world without a labor tax, so it earns a positive Ramsey term as a revenue source, and that term outweighs the MCPF scaling of the Pigouvian term.
- In the benchmark, weak separability from leisure and homotheticity make the Ramsey term zero: the dirty tax is a wage tax in disguise with a narrower base, leaving only $\mathrm{MED}/\lambda$.

**Wrong turns:** stopping at $t = 8$ (the Pigouvian term alone); solving with $x$ evaluated at $t = 0$ ($8 + 0.2 \times 30 = 14$) instead of at the optimum.

**Model answer (b):** In this problem the dirty good is taxed as an independent, fairly inelastic revenue base, so it bears a positive Ramsey term of about 3.67 on top of its Pigouvian term, and together they exceed MED. The benchmark assumes goods are weakly separable from leisure with homothetic preferences, which drives the Ramsey term to zero, so only the scaled-down Pigouvian term $\mathrm{MED}/\lambda$ survives.

</details>

## Flashback

**From Lesson [3.1](03-01-taxes-standards-and-tradable-permits.md) (Taxes, standards, and tradable permits):** *(Formal (a)–(b) · Exegetical (c).)* Two invented firms would each emit 50 tons unregulated. Firm 1's marginal abatement cost is $\mathrm{MAC}_1=5a_1$ and firm 2's is $\mathrm{MAC}_2=c\,a_2$ with the slope $c$ unknown, where $a_i$ is tons abated. A regulator caps total emissions at 64, gives each firm 32 permits free, and lets them trade in a competitive market; the permit price settles at 120 dollars a ton. (a) Find each firm's abatement, the slope $c$, and each firm's permit trade. (b) Find the least total abatement cost of meeting the cap, the cost of a uniform standard requiring equal abatement from both firms, and the standard's waste; confirm the waste as a triangle area. (c) A commentator reads the 120-dollar price as the damage a ton of emissions does. In one sentence, what does the price measure, and when (in an economy with no other taxes) would it also equal marginal damage?

<details>
<summary>Solution</summary>

(a) Required abatement is $A=100-64=36$. Each price-taking firm abates until its MAC equals 120, so $a_1=120/5=24$, $a_2=36-24=12$ and $c=120/12=10$. Emissions are $50-24=26$ and $50-12=38$, so firm 1 sells 6 permits to firm 2, for 720 dollars. The free allocation plays no role in any of this (Montgomery).

(b) Least cost is $\tfrac12(5)(24^2)+\tfrac12(10)(12^2)=1{,}440+720=2{,}160$, which checks against $\mu A/2=120\times36/2$. The standard of 18 tons each leaves MACs of 90 and 180 and costs $\tfrac12(18^2)(5+10)=2{,}430$, a waste of 270. Moving from the standard to least cost shifts 6 tons from firm 2 to firm 1, and the MAC gap closes linearly from $180-90=90$ to zero, so the triangle is $\tfrac12\times6\times90=270$.

**Must hit, strict (c):**

- The price is the marginal abatement cost at the cap: the shadow price of the cap, what one more ton of required abatement would add to least cost (every firm's last ton costs 120).
- It equals marginal damage only if the cap was set at the Pigou level, where marginal abatement cost equals marginal damage; otherwise it says nothing about damage.

**Model answer (c):** The price measures the cost of the last ton abated, the shadow price of the cap, and it equals marginal damage only if the regulator chose the cap where marginal abatement cost meets marginal damage.

**Wrong turns:** in (a), splitting the 36 tons as if both firms had slope 5; in (b), dropping the $\tfrac12$ in a linear MAC's cost; in (c), treating a permit price as a damage estimate, when it only reports how tight the cap is.

</details>

## Connections

- **Backward:** [`grad-micro` 6.3](../../grad-micro/lessons/06-03-externalities-coase-theorem.md)'s Pigouvian tax is the $\lambda = 1$ case of every formula here; [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md) supplied the MCPF, and [3.1](03-01-taxes-standards-and-tradable-permits.md)'s auctioned-versus-grandfathered choice is now a choice about the recycling effect.
- **Forward:** the Ramsey term is [4.1](04-01-the-ramsey-rule.md)'s rule; complementarity with leisure is [4.2](04-02-many-person-ramsey-and-corlett-hague.md)'s Corlett-Hague; the separability that zeroes the Ramsey term is [6.1](06-01-atkinson-stiglitz.md)'s Atkinson-Stiglitz condition.
- **Sideways:** $\lambda$ is the Lagrange multiplier on the budget, the shadow price of [`grad-micro` 1.4](../../grad-micro/lessons/01-04-envelope-theorem-duality.md). The same second-best logic applies to a Pigouvian tax on borrowing in [`economics-of-debt` 4.4](../../economics-of-debt/lessons/04-04-overborrowing.md). Whether the revenue should instead fund redistribution is a question of welfare weights, which this course leaves to [`political-philosophy`](../../political-philosophy/syllabus.md).
