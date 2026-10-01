# Public Economics · Lesson 2.2: General-equilibrium incidence: the Harberger model

> ⏱ ~15 min · Module 2: Tax incidence and excess burden · Builds on: [2.1 Partial-equilibrium incidence](02-01-partial-equilibrium-incidence.md), [`grad-micro` 4.2 Edgeworth box and Walrasian equilibrium](../../grad-micro/lessons/04-02-edgeworth-box-walrasian-equilibrium.md), [`grad-micro` 3.1 Production sets and technology](../../grad-micro/lessons/03-01-production-sets-technology.md) · Unlocks: [2.3 Excess burden and the Harberger triangle](02-03-excess-burden-and-the-harberger-triangle.md), [4.3 Production efficiency: Diamond-Mirrlees](04-03-production-efficiency-diamond-mirrlees.md)

## Why this matters

Who pays the corporate income tax: shareholders, all owners of capital, workers, or customers? [2.1](02-01-partial-equilibrium-incidence.md) answers "whoever is less elastic" for one market. That answer fails for the corporate tax, because capital that flees the corporate sector does not vanish: it lands in farms, housing and partnerships and pushes their returns down too. Harberger (1962, *JPE*) built the two-sector model that follows the capital all the way, and it is still the frame for every argument about [tax incidence](../reference.md#tax-incidence) in general equilibrium.

## The idea

An invented economy has two sectors. Sector X (think: corporations) is taxed on the capital it uses; sector Y (farms, housing, unincorporated firms) is not. The country's total capital and total labor are fixed, and both move freely between sectors, so capital must earn the same net return everywhere.

Tax capital in X. X firms now pay more for capital, so they do two things:

1. **They use less of it per unit of output.** They swap capital for labor. The capital they release must be absorbed by Y, which takes it only at a lower return. This always pushes the return to capital, $r$, down relative to the wage, $w$.
2. **They charge more.** X's costs rise, its price rises, consumers buy less X and more Y. If X is the capital-heavy sector, the shrink-and-shift releases a lot of capital and little labor, so $r$ falls further. If X is labor-heavy, the shift *toward* capital-heavy Y bids $r$ up.

The first is the **substitution effect**, the second the **output effect**. The tax is levied on capital in one sector, but *all* capital earns the same net return, so all capital shares the fall in $r$. Depending on which effect wins, capital as a whole can bear more than the entire tax, exactly the tax, or less, with labor picking up the rest (or gaining).

## The formal version

**Model** (the [Harberger model](../reference.md#harberger-model)). Two competitive sectors produce $X = F(K_X, L_X)$ and $Y = G(K_Y, L_Y)$ with constant returns to scale. Endowments are fixed: $K_X + K_Y = \bar K$, $L_X + L_Y = \bar L$. Both factors are perfectly mobile across sectors, so there is one net return $r$ and one wage $w$. X pays $r(1+\tau)$ per unit of capital, where $\tau$ is an ad valorem tax on capital's return in X only. The revenue $R = \tau r K_X$ is spent the way consumers spend (Harberger's assumption, which switches off any effect of *who* spends it). Consumers have identical homothetic preferences.

*In words:* two sectors, two fixed factors, one wedge on one factor in one sector; everything else is competitive and frictionless.

**Notation.** A hat means a proportional change, $\hat x = dx/x$, starting from $\tau = 0$. $\theta_{KX}$ is capital's cost share in X, $\theta_{LX} = 1 - \theta_{KX}$ labor's; likewise $\theta_{KY}$, $\theta_{LY}$. $\gamma_K = K_X/\bar K$ and $\gamma_L = L_X/\bar L$ are the fractions of each factor employed in X; X is capital-intensive iff $\gamma_K > \gamma_L$. $\sigma_X$ and $\sigma_Y$ are the elasticities of substitution between capital and labor in each sector; $E > 0$ is the elasticity of substitution between X and Y in demand.

**Result.** Log-differentiating the price, factor-demand, market-clearing and demand equations gives the change in the relative price of capital:

$$\hat r - \hat w = -\frac{N}{D}\,d\tau,$$

$$\begin{aligned} N &= \underbrace{E\,\theta_{KX}(\gamma_K - \gamma_L)}_{\text{output effect}} + \underbrace{\sigma_X\,(\gamma_K\theta_{LX} + \gamma_L\theta_{KX})}_{\text{substitution effect}},\\ D &= E\,(\theta_{KX}-\theta_{KY})(\gamma_K-\gamma_L) + \sigma_X(\gamma_K\theta_{LX}+\gamma_L\theta_{KX}) \\ &\quad + \sigma_Y\big((1-\gamma_K)\theta_{LY} + (1-\gamma_L)\theta_{KY}\big) > 0. \end{aligned}$$

*In words:* the [factor-substitution effect](../reference.md#factor-substitution-effect) always lowers $r/w$; the [output effect](../reference.md#output-effect) lowers it if X is capital-intensive ($\gamma_K > \gamma_L$) and raises it if X is labor-intensive; $\sigma_Y$ only dampens, because it measures how easily the untaxed sector soaks up whatever X releases.

**Who bears it.** Hold national income (total spending, revenue included) fixed as the unit of account. To first order this holds real income fixed, since the excess burden is second order ([2.3](02-03-excess-burden-and-the-harberger-triangle.md)). Then capital's loss plus labor's loss equals the revenue exactly, and capital's share of the burden is

$$b_K = \theta_K + (1-\theta_K)\,\frac{-(\hat r - \hat w)}{\gamma_K\,d\tau},$$

where $\theta_K = r\bar K/(\text{national income})$ is capital's income share. *In words:* if $r/w$ did not move, the burden would spread in proportion to incomes, like a flat income tax; capital bears more than 100 percent exactly when $r/w$ falls by more than $\gamma_K\,d\tau$, and less than its own income share when $r/w$ rises.

**The Cobb-Douglas benchmark.** With Cobb-Douglas technology in both sectors and Cobb-Douglas demand ($\sigma_X = \sigma_Y = E = 1$), $D = 1$ and $N = \gamma_K$, so $b_K = 1$ for *any* factor intensities, and not just for small taxes. The finite-tax proof is two lines: each factor's payment is a fixed share of each sector's sales, and each sector's sales are a fixed share of national income. Labor's income, $\theta_{LX}\cdot(\text{spending on X}) + \theta_{LY}\cdot(\text{spending on Y})$, cannot move, so capital's net income falls by exactly the revenue.

## Picture

![Bar chart of capital's and labor's shares of a 25 percent tax on capital in sector X, from a numerical general-equilibrium model. Cobb-Douglas: capital 100, labor 0. X capital-intensive with low substitution and elastic demand: capital 121, labor minus 21. X labor-intensive, same elasticities: capital 45, labor 55](assets/02-02-fig1.svg)

Each pair sums to 100: capital's loss and labor's loss exhaust the revenue. Same tax, same elasticities in the two right-hand cases; flipping which sector is capital-intensive flips the output effect and moves capital's share from 121 to 45 percent.

## Worked examples

**Example 1 (clean): Cobb-Douglas, exactly 100 percent.** Invented economy: national income 100, half spent on each good, capital's cost share 0.5 in X and 0.2 in Y, and $\tau = 0.25$.

- Before the tax: capital earns $0.5\times 50 + 0.2\times 50 = 35$, labor $0.5\times 50 + 0.8\times 50 = 65$.
- After: X still pays 25 to capital gross of tax, now split as $25/1.25 = 20$ to capital and 5 to the government. Capital earns $20 + 10 = 30$; labor still 65.

Capital loses 5, exactly the revenue; labor loses nothing. Because every unit of capital earns the same $r$, the 14.3 percent fall in capital income is a 14.3 percent fall in $r$, felt equally by the untaxed capital in Y. The share of capital employed in X falls from $25/35 \approx 0.714$ to $20/30 \approx 0.667$. Note that X is capital-intensive here, so both effects push $r$ down, and yet capital bears exactly 100 percent, not more. The 100 percent line is a knife-edge, not a sum of two pushes.

**Example 2 (why you'd care): the corporate tax.** Same economy and tax, but now with CES technology ($\sigma_X = \sigma_Y = 0.5$) and CES demand ($E = 2$), solved numerically. Low substitution in production mutes the substitution effect; elastic demand amplifies the output effect.

| Case | $\theta_{KX}$, $\theta_{KY}$ | Capital bears | Labor bears | Revenue (per 100 of income) |
|---|---|---|---|---|
| X capital-intensive | 0.5, 0.2 | 121 percent | $-21$ percent | 4.90 |
| X labor-intensive | 0.2, 0.5 | 45 percent | 55 percent | 2.12 |

In the first case capital loses 5.95 on revenue of 4.90 and workers gain 1.05: the output effect shifts demand toward labor-heavy Y. In the second, the shift toward capital-heavy Y props $r$ up, $r/w$ falls by under 1 percent, and workers carry more than half.

The corporate income tax is a [partial factor tax](../reference.md#partial-factor-tax) of exactly this kind: it hits the return to capital in incorporated firms and spares the noncorporate sector. Harberger calibrated the model to the US economy and concluded that across plausible elasticities capital as a whole bears about the full tax. Two things he held fixed matter:

- **Total capital is fixed.** In the long run a lower $r$ means less saving and a smaller capital stock, lower wages, and a larger burden on labor; that dynamic channel is [6.2](06-02-chamley-judd-and-the-exploding-wedge.md)'s.
- **The economy is closed.** In a small economy where capital moves freely across borders, the net return is pinned at the world rate: capital leaves until domestic capital again earns that rate after tax. The capital owners cannot be made to bear it, so the burden falls on the immobile factors, labor and land. Harberger (1995) made this open-economy case himself and concluded labor could bear more than the whole tax. See the [open economy incidence](../reference.md#open-economy-incidence) entry. Which world is closer to the truth is an empirical fight, not a theorem.

## Watch out

- **You might think a tax on corporate capital is borne by corporate shareholders, but actually** mobility equalizes net returns, so every owner of capital, including a homeowner or a farmer, bears it in proportion to the capital they own.
- **You might think labor-intensity of the taxed sector protects workers, but actually** it is the reverse: when X is labor-intensive, the output effect raises $r/w$ and pushes burden *onto* labor (45 versus 55 in Example 2).
- **You might think "capital bears 100 percent" means the effects cancel, but actually** in the Cobb-Douglas case both effects can push $r$ down and the total is still exactly 100 percent. The benchmark is where both elasticities equal one, not where the effects offset.

## One-liner

> A tax on capital in one sector is a tax on all capital, because capital flees until returns equalize; whether capital bears more or less than the whole of it turns on the output effect (which way factor intensities point) against the substitution effect (which always hurts capital).

## Problems

**P1 (🟢) *(Exegetical.)*** In the Harberger model with $\sigma_X, \sigma_Y, E > 0$, fill in a table with one row per case: (i) X capital-intensive; (ii) X labor-intensive; (iii) X and Y use capital and labor in the same proportions. Columns: direction of the output effect on $r/w$, direction of the substitution effect on $r/w$, and direction of the net change in $r/w$ ("ambiguous" allowed). One-line reason for each row.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** An invented economy has national income 100 (the unit of account, revenue included), Cobb-Douglas demand spending 40 percent on X and 60 percent on Y, and Cobb-Douglas technologies with capital's cost share 0.6 in X and 0.25 in Y. Both factors are fixed in total and perfectly mobile. A tax of $\tau = 0.5$ is levied on the return to capital used in X, and the revenue is spent like private income. (a) Compute capital's and labor's income before and after the tax, and the revenue. Who bears what share? (b) By what fraction does $r$ fall, and what share of the capital stock is employed in X before and after? (c) Here X is capital-intensive and $w/r$ rises. A classmate concludes labor must gain. In two sentences, say why labor's income does not change.

**P3 (🔴, optional) *(Formal.)*** In a Harberger economy $\theta_{KX} = 0.25$, $\theta_{KY} = 0.5$, and 40 percent of national income is spent on X, so capital's income share is $\theta_K = 0.4$, $\gamma_K = 0.25$ and $\gamma_L = 0.5$. Take $\sigma_X = \sigma_Y = 0.5$ and consider a small tax $d\tau$. (a) Write $-(\hat r - \hat w)/d\tau$ as a function of the demand elasticity $E$, and compute capital's burden share $b_K$ at $E = 1$. (b) Find the $E$ at which capital bears exactly 100 percent and the $E$ at which $r/w$ does not move. What is $b_K$ at the second?

<details>
<summary>Solutions</summary>

**P1** *(Exegetical.)*

| Case | Output effect on $r/w$ | Substitution effect | Net |
|---|---|---|---|
| (i) X capital-intensive | falls | falls | falls |
| (ii) X labor-intensive | rises | falls | ambiguous |
| (iii) same proportions | none | falls | falls |

**Must hit, strict:**

- (i): X shrinks and releases capital-heavy bundles that Y absorbs only at a lower $r$; substitution in X also dumps capital. Both terms in $N$ are positive.
- (ii): the output shift moves demand toward capital-heavy Y, raising $r$ ($\gamma_K < \gamma_L$ makes the output term negative), against the substitution effect; the sign depends on how large $E$ is relative to $\sigma_X$.
- (iii): with $\gamma_K = \gamma_L$ the output term is zero; shrinking X frees capital and labor in the proportions Y already uses, so only substitution acts.

**Wrong turns:** calling the substitution effect ambiguous (it always lowers $r/w$, because X faces a higher price of capital and Y must absorb what X sheds); reading "capital-intensive" off the cost shares in one sector alone instead of comparing the two sectors.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) Spending: 40 on X, 60 on Y. Capital's gross payment in X is $0.6\times 40 = 24$ before and after the tax (Cobb-Douglas shares are fixed). Before: capital earns $24 + 0.25\times 60 = 39$; labor $0.4\times 40 + 0.75\times 60 = 16 + 45 = 61$. After: the 24 splits into $24/1.5 = 16$ for capital and 8 for the government. Capital earns $16 + 15 = 31$, labor still 61, revenue 8. Capital loses 8, equal to the revenue: capital bears 100 percent, labor 0.

(b) With one net $r$ for all capital, $r$ falls in proportion to capital's income: $31/39 \approx 0.795$, a fall of $8/39 \approx 20.5$ percent. Capital's share employed in X is its share of net capital income: $24/39 = 8/13 \approx 0.615$ before, $16/31 \approx 0.516$ after. (X's gross cost of capital, $r(1+\tau)$, rises by the factor $(31/39)\times 1.5 = 31/26 \approx 1.19$.)

**Must hit, strict (c):**

- Under Cobb-Douglas, labor's payment in each sector is a fixed share of that sector's sales, and Cobb-Douglas demand fixes each sector's sales as a share of national income, so labor's income is pinned at 61.
- The rise in $w/r$ is entirely $r$ falling relative to national income, not $w$ rising.

**Wrong turns:** dividing capital's 24 by $1 + \tau$ in Y as well (Y's capital is untaxed; it loses only through the common fall in $r$); computing capital's share in X from gross payments after the tax (24 of 39), which ignores that X's capital now earns only 16 net.

**Model answer (c):** Cobb-Douglas fixes each factor's payment as a share of each sector's sales, and Cobb-Douglas demand fixes each sector's sales as a share of national income, so labor's 61 cannot move. The rise in $w/r$ comes entirely from $r$ falling, which is why capital's loss equals the revenue exactly.

---

**P3** *(Formal.)*

(a) Plug in: $\gamma_K\theta_{LX} + \gamma_L\theta_{KX} = 0.25\times 0.75 + 0.5\times 0.25 = 0.3125$, and $(1-\gamma_K)\theta_{LY} + (1-\gamma_L)\theta_{KY} = 0.75\times 0.5 + 0.5\times 0.5 = 0.625$.

$$\begin{aligned} N &= 0.25\,(0.25 - 0.5)\,E + 0.5\times 0.3125 = \frac{5 - 2E}{32},\\ D &= (0.25 - 0.5)(0.25 - 0.5)\,E + 0.15625 + 0.5\times 0.625 = \frac{15 + 2E}{32}, \end{aligned}$$

so $-(\hat r - \hat w)/d\tau = (5 - 2E)/(15 + 2E)$. At $E = 1$ this is $3/17 \approx 0.176$, and

$$b_K = 0.4 + 0.6\times\frac{3/17}{0.25} = \frac{14}{17} \approx 0.82.$$

Capital bears about 82 percent, labor about 18.

(b) $b_K = 1$ needs $-(\hat r - \hat w)/d\tau = \gamma_K = 1/4$: $4(5 - 2E) = 15 + 2E$, so $E = 1/2$. $r/w$ is unchanged when $5 - 2E = 0$, so $E = 5/2$; there $b_K = \theta_K = 0.4$, the burden spread in proportion to income. (At $E = 0$, substitution alone gives $b_K = 1.2$.)

**Wrong turns:** getting the sign of the output term wrong (with X labor-intensive, $\gamma_K - \gamma_L < 0$, so a larger $E$ *lowers* $N$); reporting $-(\hat r - \hat w)/d\tau$ itself as capital's share, which forgets both the division by $\gamma_K$ and the income-share term $\theta_K$.

</details>

## Flashback

**From Lesson [1.3](01-03-revealing-demand-for-public-goods.md) (Revealing demand for public goods):** *(Formal.)* Invented numbers. Two residents have quasilinear utility with true marginal benefits $b_1'(G)=10-G$ and $b_2'(G)=6-G$ for a public good $G$ costing 8 per unit. A planner sets $G$ where *reported* marginal benefits sum to 8 and charges each resident her reported marginal benefit at that $G$ per unit (Lindahl pricing). Resident 1 reports truthfully; resident 2 reports $6-k-G$ with $k\ge0$. (a) Find $G(k)$ and resident 2's price $p_2(k)$. (b) Find the $k$ that maximizes resident 2's true payoff $b_2(G)-p_2G$ (with $b_2(0)=0$), the resulting $G$, and her gain over telling the truth. (c) How much total surplus does her lie destroy?

<details>
<summary>Solution</summary>

(a) Reported benefits sum to $16-k-2G=8$, so $G(k)=4-k/2$. Her price is her reported benefit there: $p_2=6-k-(4-k/2)=2-k/2$.

(b) Note $p_2=G-2$, so her payoff as a function of $G$ is

$$U_2=6G-\tfrac12G^2-(G-2)\,G=8G-\tfrac32G^2,$$

maximized at $G=8/3$, that is $k=2(4-8/3)=8/3$, with price $2/3$. Her payoff rises from $32-24=8$ at the truth ($G=4$, price 2) to $64/3-32/3=32/3$, a gain of $8/3\approx2.67$. Resident 1's price rises from 6 to $22/3$.

(c) Total surplus is $S(G)=16G-G^2-8G$, which falls from $S(4)=16$ to $S(8/3)=128/9$: a loss of $16/9\approx1.78$, the triangle between the true summed benefit $16-2G$ and the cost 8 from $G=8/3$ to 4, $\tfrac12\times\tfrac43\times\tfrac83$.

The lie does not stop at a small shade: the first unit of understatement is profitable at first order, and she keeps shading until the lost units' value to her matches the saving on her bill.

**Wrong turns:** holding $G$ fixed at 4 when computing her new payoff (the lie shrinks $G$, and that loss is what stops her at $k=8/3$); computing the surplus loss from her own benefit curve instead of the summed benefit.

</details>

## Connections

- **Backward:** [2.1](02-01-partial-equilibrium-incidence.md) is the one-market view, which never asks where the capital a taxed sector sheds ends up. The two-sector, two-factor structure is [`grad-micro` 4.2](../../grad-micro/lessons/04-02-edgeworth-box-walrasian-equilibrium.md)'s general equilibrium with production, and $\sigma$ is the elasticity of substitution of [`grad-micro` 3.1](../../grad-micro/lessons/03-01-production-sets-technology.md)'s CES family.
- **Forward:** [2.3](02-03-excess-burden-and-the-harberger-triangle.md) measures what the tax destroys, the second-order sliver held aside here ([excess burden](../reference.md#excess-burden)); the misallocation is capital stranded in the wrong sector. [4.3](04-03-production-efficiency-diamond-mirrlees.md) explains why an optimal tax system should not tax an input in one sector only. [6.2](06-02-chamley-judd-and-the-exploding-wedge.md) lets the capital stock respond, and [8.3](08-03-tax-competition.md) makes capital mobile between jurisdictions, the open-economy logic above turned into a game.
- **Sideways:** the corporate tax falls on equity-financed capital because interest is deductible, which is the tax shield of [`economics-of-debt` 2.2](../../economics-of-debt/lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md); this lesson says who ultimately bears the tax that shield avoids. In trade theory, the same two-by-two machinery gives the Stolper-Samuelson theorem: raise a good's price and the factor it uses intensively gains more than proportionally, a close cousin of the output effect.
