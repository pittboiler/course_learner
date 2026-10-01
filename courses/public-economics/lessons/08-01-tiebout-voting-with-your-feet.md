# Public Economics · Lesson 8.1: Tiebout: voting with your feet

> ⏱ ~15 min · Module 8: Fiscal federalism · Builds on: [1.1 The Samuelson rule beyond quasilinearity](01-01-the-samuelson-rule-beyond-quasilinearity.md), [1.3 Revealing demand for public goods](01-03-revealing-demand-for-public-goods.md), [2.1 Partial-equilibrium incidence](02-01-partial-equilibrium-incidence.md) · Unlocks: [8.2 Assignment, spillovers, and grants](08-02-assignment-spillovers-and-grants.md), [8.3 Tax competition](08-03-tax-competition.md)

## Why this matters

[1.3](01-03-revealing-demand-for-public-goods.md) ended in an impossibility: no mechanism extracts willingness to pay for a public good while staying efficient, budget balanced and voluntary. Tiebout's answer was to stop asking. If there are many towns, each offering a different package of services and taxes, people reveal their demand by choosing where to live, the way shoppers reveal demand by choosing a store. This lesson asks when that "market for local public goods" delivers the efficient outcome, how it shows up in house prices, and why the conditions that make it work are strong enough that the economist who formalized it concluded it was not a general theory.

## The idea

Take a county with 60 families who care a lot about schools and 40 retirees who care little. Put them all in one town with equal tax bills and let them vote: the families win, spending is high, and every retiree pays for schooling she does not value. That is [Bowen voting](../reference.md#bowen-equilibrium) from [1.3](01-03-revealing-demand-for-public-goods.md), with its median-not-mean problem.

Now give them two towns. The families move to the high-spending town, the retirees to the low-spending one. Each town is unanimous, so the vote picks exactly what everyone wants and nobody pays for services she does not value. No one had to report a valuation: the move *was* the report. Mobility turned a public-goods problem into something close to shopping.

Two things have to be true for this to work. The good must be cheap to replicate across towns, so that splitting the population does not waste scale; and a newcomer must pay her way, so that nobody can buy a cheap house in a rich town and let the neighbours fund her schools. When either fails, the story unravels.

## The formal version

**Tiebout's assumptions.** Tiebout (1956, *JPE*) listed the conditions, paraphrased here:

1. Residents are fully mobile at no cost and move to the community that best fits their preferences.
2. They know every community's taxes and services.
3. There are many communities to choose from.
4. Where one works does not restrict where one lives (Tiebout had people living on dividend income).
5. No spillovers: one town's services neither help nor hurt residents of another.
6. Each service package has an optimal community size, the population at which average cost per resident is lowest.
7. Towns below that size try to attract residents; towns above it try to shed them.

Standard formalizations add that each town finances its services with a **head tax** equal to cost per resident.

*In words:* free, informed mobility across many self-contained towns, each at its cost-minimizing size and charging each resident what she costs.

**The model.** A resident of type $\theta$ has quasilinear utility $y - T_j + \theta \ln g_j$ in town $j$, where $y$ is income, $g_j$ the town's service level per resident, and $T_j$ its head tax. Assumption 6 lets us take cost per resident as constant at $c$ per unit of $g$ (each town sits at the bottom of its average-cost curve, the [club-good](../reference.md#club-good) size of [1.1](01-01-the-samuelson-rule-beyond-quasilinearity.md)), so a balanced budget means $T_j = c\,g_j$. Type $\theta$'s favourite service level solves $\theta/g = c$, so $g(\theta) = \theta/c$.

For a town whose residents are the set $N_j$ of size $n_j$, the Samuelson rule ([`grad-micro` 6.4](../../grad-micro/lessons/06-04-public-goods.md)) for a service whose total cost is $n_j c\,g_j$ reads

$$\sum_{i\in N_j}\frac{\theta_i}{g_j} \;=\; n_j\,c .$$

*In words:* the town's summed marginal willingness to pay equals the marginal cost of raising everyone's service by one unit, so the *mean* MRS in the town must equal $c$.

**Tiebout equilibrium.** A [Tiebout model](../reference.md#tiebout-model) equilibrium is an assignment of residents to towns, a service level per town chosen by majority vote, and head taxes that balance each budget, such that no resident gains by moving. If there are at least as many towns as types, the stratified assignment (one type per town, $g_j = \theta_j/c$) is an equilibrium, and it is efficient.

*In words:* in a homogeneous town mean and median MRS coincide, so the vote hits the Samuelson rule; and since each type gets its own favourite, no reallocation across towns can do better.

**Capitalization.** Houses are not mobile, so fiscal differences show up in their prices. A house yields rental value $R$ per year; its town provides services worth $B$ per year to the marginal buyer and levies tax $T$. At discount rate $r$ the price is the present value

$$P = \frac{R + B - T}{r}, \qquad \text{or, with an ad valorem tax } T = \tau P:\quad P = \frac{R + B}{r + \tau}.$$

*In words:* a permanent 1-dollar-a-year tax difference moves the price by $1/r$ dollars, and a service the buyer values moves it the other way. This is [capitalization](../reference.md#capitalization). Its incidence follows [2.1](02-01-partial-equilibrium-incidence.md): land is the inelastic factor, so the owner at the moment a fiscal change is announced bears (or pockets) its whole present value, and later buyers pay a price that already nets it out. Oates (1969, *JPE*), in the first empirical test of the hypothesis, found house values across New Jersey towns falling with property-tax rates and rising with school spending per pupil, with a substantial share of tax differences capitalized into prices.

**Hamilton's fix.** Real towns levy property taxes, not head taxes. With tax $\tau h$ on a house worth $h$, a household in a cheap house pays less than the cost it imposes, so everyone wants the smallest house in the richest town. Hamilton (1975, *Urban Studies*) showed that [fiscal zoning](../reference.md#fiscal-zoning), a minimum house value $\bar h$ with $\tau \bar h = c\,g_j$, restores the head tax: everyone pays at least cost. *Miniature:* a town spending 12,000 dollars per household at a 2% property-tax rate needs a zoning floor of 600,000 dollars; a 300,000-dollar house would pay 6,000 and free-ride on the other 6,000.

**Bewley's critique.** Bewley (1981, *Econometrica*) made a rigorous version of the theory in which equilibria exist and are Pareto optimal, and observed that its assumptions make local public goods *essentially private* (the [Bewley critique](../reference.md#bewley-critique)): cost proportional to the number of users, as in the model above. His examples show that generalizing in natural directions (a pure public good whose cost does not rise with population, a limited number of towns, wages tied to location) can destroy existence or optimality. With a pure public good, splitting the population forfeits the gain from sharing the bill, so sorting and scale pull against each other.

## Picture

![Net benefit theta log g minus g against the service level g per resident for families with theta 6, peaking at g equals 6, and retirees with theta 2, peaking at g equals 2. Dashed vertical lines mark town B at g equals 2 and town A at g equals 6. A red bracket at g equals 6 shows the retiree's loss of 1.80 from being outvoted in a mixed town](assets/08-01-fig1.svg)

Each curve peaks at its type's favourite town. At $g = 6$ the retirees' curve sits 1.80 below its peak: that gap is what sorting saves each retiree who would otherwise be outvoted in a mixed town.

## Worked examples

**Example 1 (clean): sorting and its gains.** Invented numbers from the figure: 60 families with $\theta = 6$ and 40 retirees with $\theta = 2$, cost $c = 1$ per unit per resident, so $T = g$.

*One town.* The median resident is a family, so the vote picks $g = 6$. The Samuelson rule wants the mean: $\bar\theta/c = (60\cdot 6 + 40\cdot 2)/100 = 4.4$. Voting overprovides for this mixed town.

*Two towns.* Families in town A choose $g = 6$, retirees in town B choose $g = 2$. Check that nobody moves (net benefit $\theta\ln g - g$):

- A family gets $6\ln 6 - 6 = 4.75$ in A against $6\ln 2 - 2 = 2.16$ in B. Stays, by $6\ln 3 - 4 = 2.59$.
- A retiree gets $2\ln 2 - 2 = -0.61$ in B against $2\ln 6 - 6 = -2.42$ in A. Stays, by $4 - 2\ln 3 = 1.80$.

Total surplus rises by $40 \times 1.80 = 72.1$ over the one-town vote, and by 48.6 even over the best *uniform* service level $g = 4.4$. The gain is exactly what a single town cannot do: tailor $g$ to each type.

**Example 2 (why you'd care): reading a tax gap in house prices.** Invented numbers. Two adjacent towns have identical houses and identical services, but Eastfield's annual tax bill is 1,500 dollars higher than Westfield's, permanently. At $r = 5\%$:

- Eastfield houses sell for $1{,}500/0.05 = 30{,}000$ dollars less. A buyer is indifferent: she pays 30,000 less up front and 1,500 more each year.
- If Eastfield's extra spending buys services the marginal buyer values at 1,000 dollars a year, the discount shrinks to $(1{,}500 - 1{,}000)/0.05 = 10{,}000$ dollars.
- If the tax gap will last only 10 years, the discount is the annuity value $1{,}500 \times (1 - 1.05^{-10})/0.05 = 11{,}583$ dollars.
- With ad valorem taxes, a house renting at 24,000 dollars a year is worth $24{,}000/(0.05 + 0.01) = 400{,}000$ at a 1% rate and $24{,}000/0.065 = 369{,}231$ at 1.5%.

Two lessons. First, whoever owned Eastfield houses when the gap opened bore the whole 30,000; today's buyer bears nothing, since the price already charged her for it. Second, capitalization is evidence that people value fiscal packages and move in response, but in a textbook Tiebout world where new towns can be built to order, persistent price gaps would be competed away. Capitalization shows people shopping, not that the market clears efficiently. Separating services from taxes in the data is an identification problem: the standard modern designs compare houses on either side of a school-attendance boundary, a spatial [regression discontinuity](../../econometrics/lessons/04-07-regression-discontinuity.md).

## Watch out

- **You might think Tiebout solves the preference-revelation problem of [1.3](01-03-revealing-demand-for-public-goods.md), but actually it solves it only for goods that are local and replicable.** A national defence or a pure public good with no congestion cannot be shopped for, and for the latter sorting sacrifices scale.
- **You might think capitalization proves Tiebout efficiency, but actually it shows only that people value fiscal differences.** Full, persistent capitalization means the supply of such towns is inelastic, which is itself a departure from Tiebout's assumptions.
- **You might think a property tax works like a head tax, but actually without zoning it is a subsidy to small houses in high-spending towns.** Hamilton's zoning floor is what makes it a benefit tax, and whether such exclusion is acceptable is a normative question for [`political-philosophy`](../../political-philosophy/syllabus.md), not this course.
- **You might think sorting is by income, but actually in the model it is by demand for $g$.** Income matters only because demand rises with it.

## One-liner

> With many replicable towns, head taxes and no spillovers, people reveal their demand by moving and local public goods become efficient; property taxes need zoning to act like head taxes, fiscal gaps land in house prices, and the conditions are strong enough to make the good essentially private.

## Problems

**P1 (🟢) *(Formal (a)–(b) · Exegetical (c).)*** Invented numbers. A town announces a permanent cut of 900 dollars a year in every homeowner's tax bill, with services unchanged. The discount rate is 4%. (a) By how much should house prices rise? (b) By how much if the cut is guaranteed for 15 years only? (c) Who gains from the permanent cut: the owners at the announcement, or a family that buys a house there a year later? One sentence, naming the reason.

**P2 (🟡) *(Exegetical.)*** For each invented scenario, name the Tiebout assumption that fails and say in one sentence why sorting no longer delivers efficiency. (i) Riverton's large park is used mostly by residents of three neighbouring towns, who pay nothing for it. (ii) Hospital nurses must live within 20 minutes of the only hospital, which lies in a high-tax, high-service town. (iii) A developer builds small, cheap apartments in a town with high school spending financed by a property tax and no zoning.

**P3 (🔴, optional) *(Formal (a)–(c).)*** Invented numbers. 100 residents have net benefit $\theta\ln g - g$ (cost 1 per unit per resident, head taxes, a service level per town chosen by majority vote): 20 with $\theta = 1$, 30 with $\theta = 3$, 50 with $\theta = 8$. There are only two towns. Assume each resident takes towns' service levels as given when deciding where to live. (a) Show that the assignment {$\theta = 1$ and $\theta = 3$ in town A; $\theta = 8$ in town B} is an equilibrium: find each town's $g$ and check that no type wants to move. (b) Show that the assignment {$\theta = 1$ in town A; $\theta = 3$ and $\theta = 8$ in town B} is not. (c) Compute the total surplus lost relative to three single-type towns, and name the Tiebout assumption this loss measures.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) · Exegetical (c).)*

(a) A permanent 900-dollar-a-year gain capitalizes at $900/0.04 = 22{,}500$ dollars.

(b) The 15-year annuity value is

$$900 \times \frac{1 - 1.04^{-15}}{0.04} \approx 10{,}007 \text{ dollars}.$$

(c) The owners at the announcement capture all of it: house prices rise by 22,500 at once, so a later buyer pays for the tax cut up front and gains nothing net.

**Must hit, strict (c):**

- The gain goes to those who own the immobile asset (land) when the change is announced.
- A later buyer's higher price exactly offsets the lower taxes she will pay.

**Wrong turns:** dividing by the tax cut's growth or by $1 + r$ instead of $r$ in (a); in (c), crediting later residents because they pay lower taxes each year, which forgets that they paid for the stream in the price.

---

**P2** *(Exegetical.)*

**Must hit, strict:**

- (i) No spillovers fails. Riverton's residents set the park's size weighing only their own benefit, so they ignore the neighbours' willingness to pay and provide too little (the neighbours' benefit is an externality; [8.2](08-02-assignment-spillovers-and-grants.md) prices it with a matching grant).
- (ii) Location free of employment ties (and costless mobility) fails. The nurses cannot move to the town whose package they prefer, so they are stuck paying for services at a level set by others' demand.
- (iii) Head taxes (Hamilton's condition) fail. The apartments pay less in property tax than the per-resident cost of the schools they use, so they free-ride on larger houses, which in turn gives the town's existing residents a reason to zone them out.

**Wrong turns:** calling (iii) a spillover (the cost falls on the same town's residents, not on another town); calling (ii) a knowledge failure (the nurses know the packages; they cannot choose among them).

**Model answer:** (i) Riverton ignores the benefit to non-residents when choosing the park's size, so the park is too small: the no-spillovers assumption fails. (ii) The nurses' job ties them to one location, so their tax-service choice is not free and their demand is not revealed. (iii) Without a zoning floor the property tax is not a head tax, so small-house residents consume schooling below cost and the sorting that remains is sorting to free-ride.

---

**P3** *(Formal (a)–(c).)*

Favourites are $g(\theta) = \theta$, and net benefit is $v(\theta, g) = \theta\ln g - g$.

(a) Town A has 20 residents with $\theta = 1$ and 30 with $\theta = 3$, so the median resident has $\theta = 3$ and the vote picks $g_A = 3$. Town B picks $g_B = 8$. Checking moves:

| Type | In A ($g = 3$) | In B ($g = 8$) | Stays? |
|---|---|---|---|
| $\theta = 1$ | $\ln 3 - 3 = -1.90$ | $\ln 8 - 8 = -5.92$ | yes, in A |
| $\theta = 3$ | $3\ln 3 - 3 = 0.30$ | $3\ln 8 - 8 = -1.76$ | yes, in A |
| $\theta = 8$ | $8\ln 3 - 3 = 5.79$ | $8\ln 8 - 8 = 8.64$ | yes, in B |

No type gains by moving, so this is an equilibrium.

(b) Town B now has 30 residents with $\theta = 3$ and 50 with $\theta = 8$: the median is $\theta = 8$ and $g_B = 8$. Town A has only $\theta = 1$ types and $g_A = 1$. A $\theta = 3$ resident gets $3\ln 8 - 8 = -1.76$ in B but $3\ln 1 - 1 = -1.00$ in A, so she moves. Not an equilibrium.

(c) Only the $\theta = 1$ residents are away from their favourite. Each loses $v(1,1) - v(1,3) = -1 - (\ln 3 - 3) = 2 - \ln 3 = 0.90$, so the total loss is $20 \times 0.90 = 18.0$. This measures the "many communities" assumption: with fewer towns than types, some residents must share a town whose vote does not match their demand.

**Wrong turns:** in (a), setting $g_A$ at the mean $\theta$ (2.2), which is what the Samuelson rule would want, not what a majority vote delivers; in (b), checking only whether the $\theta = 8$ types want to leave.

</details>

## Flashback

**From Lesson [7.2](07-02-optimal-unemployment-insurance-baily-chetty.md) (Optimal unemployment insurance: Baily-Chetty):** *(Formal (a)–(b) · Exegetical (c).)* Invented statistics: CRRA utility with relative risk aversion $\gamma=2$, consumption falls 20 percent on job loss, and the unemployment rate is 4 percent. Recall the one-period Baily-Chetty condition
$$\frac{u'(c_u)-u'(c_e)}{u'(c_e)}=\frac{\varepsilon_{1-e,b}}{e},$$
where $c_u$ and $c_e$ are consumption unemployed and employed, $e$ is the employment probability, and $\varepsilon_{1-e,b}$ is the elasticity of the unemployment probability with respect to the benefit $b$. (a) What value of $\varepsilon_{1-e,b}$ would make the current benefit exactly optimal, using the exact CRRA left side, and using the approximation $\gamma\,\Delta c/c$? (b) In the one-period model the ratio of the liquidity effect to the moral hazard effect of the benefit equals $u'(c_u)/u'(c_e)-1$. At the exact elasticity from (a), what share of the benefit's effect on unemployment must be liquidity for the current benefit to be optimal? (c) Why does the worker's own cut in search effort drop out of her welfare, and through what channel does it still matter? One sentence.

<details>
<summary>Solution</summary>

(a) $e=1-0.04=0.96$. Exact left side: $(1/0.8)^2-1=0.5625$, so $\varepsilon_{1-e,b}=0.96\times0.5625=0.54$. Approximation: $2\times0.20=0.40$, so $\varepsilon_{1-e,b}=0.96\times0.40=0.384$. Any larger response means benefits are too generous.

(b) The optimum needs $\text{LIQ}/\text{MH}=0.54/0.96=0.5625$. A share $L$ of liquidity gives $L/(1-L)=0.5625$, so $L=0.5625/1.5625=0.36$: 36 percent liquidity, 64 percent moral hazard.

**Must hit, strict (c):**

- She chose her effort to maximize her own expected utility, so by the envelope theorem a small change in it has no first-order effect on her welfare.
- It matters only through the government's budget: more unemployment means more benefits paid and less tax collected, a fiscal externality she ignores.

**Model answer (c):** Her effort is already privately optimal, so by the envelope theorem its change costs her nothing at the margin; it matters only because each extra unemployed worker draws a benefit and stops paying tax, a cost to the fund she does not bear.

**Wrong turns:** dividing by the unemployment rate 0.04 instead of $e=0.96$; taking the liquidity share itself to equal 0.5625 rather than the liquidity-to-moral-hazard ratio.

</details>

## Connections

- **Backward:** Tiebout is the fifth route to revealing demand after the four of [1.3](01-03-revealing-demand-for-public-goods.md), and within each town it is still the [Bowen equilibrium](../reference.md#bowen-equilibrium), made efficient by homogeneity. The optimal community size is the club-good logic of [1.1](01-01-the-samuelson-rule-beyond-quasilinearity.md). Capitalization is [2.1](02-01-partial-equilibrium-incidence.md)'s incidence rule applied to land: the inelastic side bears the tax.
- **Forward:** [8.2](08-02-assignment-spillovers-and-grants.md) drops assumption 5 (spillovers) and asks which level of government should provide what and how grants should correct it; [8.3](08-03-tax-competition.md) makes capital, not residents, the mobile factor, and mobility turns from a virtue into a race to the bottom.
- **Sideways:** fiscal zoning is a screening device in the sense of [`grad-micro` 5.3](../../grad-micro/lessons/05-03-screening.md): a minimum house value sorts households by a costly, observable choice correlated with the unobservable (their demand for services). The political structure of federations, as opposed to their economics, is [`political-institutions`](../../political-institutions/syllabus.md)'s; the capitalization designs are [`econometrics`](../../econometrics/syllabus.md)'s.
