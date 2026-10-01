# Public Economics · Lesson 7.1: Adverse selection as a policy problem

> ⏱ ~15 min · Module 7: Social insurance and the welfare state · Builds on: [`grad-micro` 5.1 Adverse selection](../../grad-micro/lessons/05-01-adverse-selection-lemons.md), [`grad-micro` 5.3 Screening](../../grad-micro/lessons/05-03-screening.md), [2.4 The marginal cost of public funds](02-04-second-best-and-the-marginal-cost-of-public-funds.md) · Unlocks: [7.2 Optimal unemployment insurance](07-02-optimal-unemployment-insurance-baily-chetty.md), [7.3 Tagging, ordeals, and in-kind benefits](07-03-tagging-ordeals-and-in-kind-benefits.md)

## Why this matters

Governments mandate health insurance, subsidize it, run it outright, and forbid insurers to price on some risk factors. The textbook case for all of this is adverse selection. But "the market unravels" is a story, not a number. A policymaker needs to know how much welfare the market loses, what a mandate or a subsidy would buy back, and whether the cure costs more than the disease. Einav, Finkelstein and Cullen (2010, *QJE*) turned the lemons story into a demand-and-cost diagram that answers all three with the tools of a first-year surplus calculation. That diagram, its surprises, and the test for whether selection is present at all are this lesson.

## The idea

[`grad-micro` 5.1](../../grad-micro/lessons/05-01-adverse-selection-lemons.md) showed that when buyers know their own risk and the seller cannot price on it, the price selects the worst risks. [`grad-micro` 5.3](../../grad-micro/lessons/05-03-screening.md) showed how competitive insurers try to sort types with a menu of contracts (Rothschild and Stiglitz), and why equilibrium may not exist. Here we fix a single contract and ask the policy question: at what price does it sell, to whom, and what is lost?

A miniature, with invented numbers. Four people could buy the same health plan. Their willingness to pay is 12, 9, 6 and 3 (hundreds of dollars a year), and their expected medical costs are 10, 7, 4 and 1. Each values the plan 2 above what they would cost, so everyone should be covered. But the insurer cannot tell them apart and must charge one price, equal to the average cost of whoever buys. With all four in, that is 5.5, and the person who values it at 3 drops out. The pool of three costs 7 on average, so the person who values it at 6 drops out. The pool of two costs 8.5, and both remaining buyers (values 12 and 9) are willing to pay that. The market settles at two buyers and a price of 8.5. Each departure removed the *cheapest* customer, which pushed the price up, and two people who valued coverage above their own cost went uninsured: 4 of the 8 units of possible surplus are lost.

Two things drive this. First, the people who value insurance most are also the most expensive to insure: that is what "adverse" means. Second, price is set by the *average* cost of those who buy, while the efficient decision for each person turns on *their own* cost. The gap between the average and the marginal buyer's cost is the whole problem.

## The formal version

**Setup.** One insurance contract with fixed coverage. A unit mass of potential buyers, indexed by $s\in[0,1]$ in *descending* order of willingness to pay, so $s$ is also the share of the population covered when the $s$-th buyer is the last to buy.

- $P(s)$: willingness to pay of buyer $s$, decreasing. It is also the inverse demand curve: at price $P(s)$, a share $s$ buys.
- $\mathrm{MC}(s)$: expected cost to the insurer of buyer $s$ (the marginal cost of covering one more person).
- $\mathrm{AC}(s)=\frac1s\int_0^s \mathrm{MC}(u)\,du$: the [average cost curve](../reference.md#average-cost-curve), the mean cost of everyone covered when a share $s$ buys.

*In words:* line people up from keenest to least keen; demand tells you what each will pay, MC what each will cost, AC what the pool so far costs on average.

**Assumptions.** Insurers are competitive and risk neutral and cannot price on $s$; the contract is fixed; a buyer's cost does not depend on the price paid (no moral hazard); welfare is total surplus, willingness to pay minus cost, so transfers between buyers, insurers and the treasury net out.

**Adverse selection** means $\mathrm{MC}$ is *decreasing* in $s$: the keenest buyers are the costliest. Then $\mathrm{MC}(s)<\mathrm{AC}(s)$ for every $s>0$, because the marginal buyer is cheaper than the pool.

**Equilibrium.** Competition drives profit to zero, so price equals the cost of the pool, and buyers purchase until price equals their willingness to pay:
$$P(s_e)=\mathrm{AC}(s_e).$$
*In words:* the market clears where demand crosses *average* cost (take the lowest such price if there are several).

**Efficiency.** Covering buyer $s$ adds surplus $P(s)-\mathrm{MC}(s)$. The efficient coverage $s^*$ covers exactly those with $P(s)\ge\mathrm{MC}(s)$, so $P(s^*)=\mathrm{MC}(s^*)$ at an interior optimum, and $s^*=1$ if demand lies above MC everywhere.

*In words:* the planner compares each person's value with *their own* cost, not with the pool's.

**Welfare loss.**
$$\mathrm{Loss}=\int_{s_e}^{s^*}\big[P(s)-\mathrm{MC}(s)\big]\,ds .$$
*In words:* the surplus of the people priced out who should have been covered.

**Linear case.** With $P(s)=a-bs$ and $\mathrm{MC}(s)=c-ds$ ($d>0$ is adverse selection), $\mathrm{AC}(s)=c-\tfrac{d}{2}s$, and
$$s_e=\frac{a-c}{b-d/2},\qquad s^*=\frac{a-c}{b-d}\quad(\text{capped at }1).$$
Since $b-d<b-d/2$, $s^*>s_e$: adverse selection means *under*-insurance. The loss is a triangle, the shaded area in the figure: the [Einav-Finkelstein-Cullen diagram](../reference.md#einav-finkelstein-cullen-diagram).

**Policy.** A [mandate](../reference.md#mandate) forces $s=1$, at premium $\mathrm{AC}(1)$. It recovers the triangle but also covers every buyer beyond $s^*$, where $\mathrm{MC}>P$. A per-contract subsidy $\sigma$ paid to insurers moves equilibrium to $P(s)+\sigma=\mathrm{AC}(s)$; the $\sigma$ that lands on $s^*$ is $\mathrm{AC}(s^*)-P(s^*)$. Its public cost $\sigma s^*$ is raised by distorting taxes at [marginal cost of public funds](../reference.md#marginal-cost-of-public-funds) $\lambda\ge1$, so the subsidy's net welfare cost is $(\lambda-1)\sigma s^*$ ([2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md)).

*In words:* a mandate is free to the treasury but blunt; a subsidy is precise but paid for with dear dollars.

**Is selection there at all?** The [positive correlation test](../reference.md#positive-correlation-test) (Chiappori and Salanié, 2000, *JPE*): conditional on everything the insurer prices on, are people with more coverage more likely to claim? Asymmetric information predicts yes. Chiappori and Salanié found no such correlation among young French drivers. Two cautions. A positive correlation is equally predicted by moral hazard ([`grad-micro` 5.4](../../grad-micro/lessons/05-04-moral-hazard-principal-agent.md)): coverage can *cause* claims. And a zero correlation does not rule out private information: Finkelstein and McGarry (2006, *AER*) found that in US long-term care insurance, people privately know their risk *and* buyers with a strong taste for insurance are lower risk, so the two cancel and the insured are not higher-risk overall. When the costlier buyers value coverage *less*, MC slopes up: [advantageous selection](../reference.md#advantageous-selection), and the market *over*-insures.

The EFC approach sidesteps the correlation by estimating the curves directly. Exogenous variation in the price of the contract traces out demand, and the cost of whoever buys at each price traces out AC, hence MC. A downward-sloping MC is adverse selection. In their employer health-insurance data, they detected adverse selection but estimated a small welfare loss, in both absolute and relative terms.

## Picture

![Einav-Finkelstein-Cullen diagram. Demand falls from 100 to 40, marginal cost from 90 to 50, average cost from 90 to 70 across coverage shares 0 to 1. Equilibrium where demand meets average cost at s 0.25 and price 85; efficient coverage where demand meets marginal cost at s 0.5 and 70. A green triangle between demand and marginal cost from 0.25 to 0.5 is the loss, 0.625; a red region beyond 0.5 where marginal cost exceeds demand is the over-insurance loss of a full mandate, 2.5](assets/07-01-fig1.svg)

The market stops where demand meets the dashed *average* cost; efficiency stops where it meets the red *marginal* cost. Everything between is the green triangle. Everything to the right of 0.5 is coverage worth less than it costs, and a full mandate buys all of it.

## Worked examples

**Example 1 (clean): the market and its loss.** Invented numbers, in hundreds of dollars a year: $P(s)=100-60s$, $\mathrm{MC}(s)=90-40s$.

- $\mathrm{AC}(s)=90-20s$.
- Equilibrium: $100-60s=90-20s$, so $s_e=0.25$ at price $85$.
- Efficient: $100-60s=90-40s$, so $s^*=0.5$, where $P=\mathrm{MC}=70$.
- The marginal buyer at $s_e$ values coverage at 85 and costs 80, but pays 85, the pool's average. Loss $=\tfrac12(0.5-0.25)(85-80)=0.625$, or 62.50 dollars per potential buyer. The efficient surplus is $2.5$; the market keeps $1.875$ of it.

**Example 2 (why you'd care): a mandate that does worse than nothing.** Same market.

- *Full mandate.* Premium $\mathrm{AC}(1)=70$. Surplus $\int_0^1(10-20s)\,ds=0$. The mandate recovers the 0.625 triangle but covers the half of the population with $P<\mathrm{MC}$, at a loss of $\int_{0.5}^1(20s-10)\,ds=2.5$. Net: it destroys *all* the gains from trade, and is worse than the unraveled market by 1.875.
- *Subsidy.* The subsidy that lands on $s^*=0.5$ is $\sigma=\mathrm{AC}(0.5)-P(0.5)=80-70=10$ per contract. It costs the treasury $10\times0.5=5$ and recovers the 0.625 triangle. It beats the market iff $(\lambda-1)\times5<0.625$, i.e. $\lambda<1.125$.

So the cure is cheaper than the disease only under narrow conditions: the mandate here never is, and the subsidy is only if the marginal cost of public funds is below 1.125. The general point: a mandate is right when demand lies above MC for *everyone* (then $s^*=1$), and the case for it weakens as more people value the coverage below what they cost. Whether forcing those people to buy is acceptable for other reasons (solidarity, paternalism) is a question for [`political-philosophy`](../../political-philosophy/syllabus.md), not for this surplus accounting.

## Watch out

- **You might think the efficient benchmark is full coverage, but actually it is $P=\mathrm{MC}$.** If some people's coverage costs more than they value it, "everyone insured" loses surplus.
- **You might think equilibrium is where demand meets MC, but actually it is where demand meets AC.** Price covers the pool, not the marginal buyer; with adverse selection that price is too high.
- **You might think a positive coverage-risk correlation proves adverse selection, but actually moral hazard predicts the same correlation.** The test rejects symmetric information; it does not say which asymmetry.
- **You might think no correlation means no selection, but actually offsetting dimensions of private information (risk and taste for insurance) can cancel.**

## One-liner

> Adverse selection prices insurance at the pool's *average* cost while efficiency compares each buyer's value with *their own* cost; the gap is a triangle, a mandate closes it only if everyone's value exceeds their cost, and a subsidy closes it at the price of public funds.

## Problems

**P1 (🟢) *(Formal.)*** An invented dental-insurance market, prices and costs in hundreds of dollars a year, unit mass of potential buyers ordered by willingness to pay: $P(s)=100-50s$ and $\mathrm{MC}(s)=85-25s$. Insurers are competitive, cannot price on $s$, and there is no moral hazard. (a) Find $\mathrm{AC}(s)$, the equilibrium coverage and price. (b) Find the efficient coverage and the welfare loss. (c) At equilibrium, compare the marginal buyer's willingness to pay, their expected cost, and the price, and say in one sentence why that buyer is correctly in the market while the next one out is wrongly excluded.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** Same market as P1. (a) The government imposes a full mandate. Find the premium and total surplus, and compare with the market equilibrium's surplus. (b) Instead it pays insurers a subsidy $\sigma$ per contract, financed with funds whose marginal cost is $\lambda$. Find the $\sigma$ that makes coverage efficient, its cost to the treasury, and the largest $\lambda$ at which it beats doing nothing. (c) In two sentences: what feature of these curves makes the mandate lose, and what would have to be true of the curves for a full mandate to be efficient?

**P3 (🔴, optional) *(Exegetical.)*** Invented data from a car-insurance market: conditional on every variable the insurer prices on, drivers who chose the high-coverage policy file claims at 12 percent a year and those with the basic policy at 8 percent. (a) What hypothesis does this reject, and why can it not tell adverse selection from moral hazard? Two sentences. (b) Name one source of variation that would separate them, and say what each hypothesis predicts. (c) In another market the conditional correlation is zero. Does that establish that buyers have no private information? Two sentences, with the named reason.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) $\mathrm{AC}(s)=\frac1s\int_0^s(85-25u)\,du=85-12.5s$. Equilibrium: $100-50s=85-12.5s$, so $37.5s=15$, $s_e=0.4$, at price $P(0.4)=\mathrm{AC}(0.4)=80$.

(b) $100-50s=85-25s$ gives $s^*=0.6$ (where $P=\mathrm{MC}=70$). The loss is the triangle between demand and MC from 0.4 to 0.6:
$$\int_{0.4}^{0.6}(15-25s)\,ds=\tfrac12(0.6-0.4)(80-75)=0.5,$$
that is, 50 dollars per potential buyer.

(c) The marginal buyer at $s=0.4$ values coverage at 80, costs 75, and pays 80. They are rightly in (value above own cost), but the buyers just beyond, with values below 80 and costs near 75, face the pool's price of 80 rather than their own cost, and leave although their value exceeds their cost.

**Wrong turns:** setting demand equal to MC for the equilibrium (that is the efficient point); using $\mathrm{AC}=85-25s$, forgetting that the average of a linear MC has half its slope.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) Premium $\mathrm{AC}(1)=72.5$. Total surplus $\int_0^1(15-25s)\,ds=15-12.5=2.5$. Market surplus is $\int_0^{0.4}(15-25s)\,ds=6-2=4$ (the efficient 4.5 minus the 0.5 loss). The mandate is worse by 1.5: it recovers the 0.5 triangle but adds an over-insurance loss of $\int_{0.6}^1(25s-15)\,ds=2$.

(b) At $s^*=0.6$: $\sigma=\mathrm{AC}(0.6)-P(0.6)=77.5-70=7.5$. Treasury cost $7.5\times0.6=4.5$. It gains the 0.5 triangle at a net cost of $(\lambda-1)\times4.5$, so it beats laissez-faire iff $\lambda<1+0.5/4.5=10/9\approx1.11$.

**Must hit, strict (c):**

- The mandate loses because the lowest-value 40 percent of buyers ($s>0.6$) value coverage below their own expected cost ($P<\mathrm{MC}$), and the mandate covers them anyway.
- A full mandate is efficient only if $P(s)\ge\mathrm{MC}(s)$ for every buyer, i.e. demand lies above MC all the way to $s=1$.

**Wrong turns:** comparing the mandate only with the market's 0.5 triangle and calling it an improvement; counting the subsidy's 4.5 itself as the welfare cost, when only the excess burden $(\lambda-1)\times4.5$ is lost (the transfer returns to buyers and insurers).

**Model answer (c):** The mandate forces coverage on the 40 percent of buyers beyond $s=0.6$, whose expected cost exceeds what the coverage is worth to them, and that over-insurance loss (2) exceeds the triangle it recovers (0.5). A full mandate would be efficient only if every buyer valued coverage at least at their own expected cost, so that demand lay above MC all the way to $s=1$.

---

**P3** *(Exegetical.)*

**Must hit, strict (a):**

- It rejects symmetric information (that coverage and risk are independent given the insurer's pricing variables).
- Both adverse selection (risky drivers choose more coverage) and moral hazard (coverage makes drivers less careful) produce the same positive correlation, so a cross-section cannot say which way causation runs.

**Must hit, strict (b):** any variation that shifts coverage independently of the driver's type. Acceptable examples: random or quasi-random assignment of coverage or of its price (EFC-style price variation, used as an instrument, cf. [`econometrics` 3.6](../../econometrics/lessons/03-06-instrumental-variables.md)); or a rule change that alters coverage for existing policyholders. Predictions: under pure moral hazard, the same driver claims more when exogenously given more coverage; under pure adverse selection, exogenously assigned coverage does not change a driver's claims, while drivers who *choose* more coverage are riskier.

**Must hit, strict (c):**

- No. Private information can run along several dimensions that offset: buyers with a strong taste for insurance (more cautious or risk averse) can be lower risk, cancelling the higher-risk buyers.
- Named evidence or reason: Finkelstein and McGarry (2006, *AER*) on long-term care insurance, or "advantageous selection offsetting adverse selection".

**Wrong turns:** reading the 12 versus 8 percent gap as proof of adverse selection; treating a zero correlation as proof of symmetric information.

**Model answer (a):** The gap rejects symmetric information, under which coverage and claims would be unrelated once the insurer's pricing variables are held fixed. But riskier drivers choosing more coverage (adverse selection) and coverage making drivers less careful (moral hazard) both produce exactly this correlation, so the cross-section cannot separate them.

**Model answer (c):** No: private information can have several dimensions that offset, for instance cautious people both buying more insurance and having fewer losses. Finkelstein and McGarry (2006) found exactly this in long-term care insurance, where people know their own risk yet the insured are not higher-risk overall.

</details>

## Flashback

**From Lesson [6.2](06-02-chamley-judd-and-the-exploding-wedge.md) (Chamley-Judd and the exploding wedge):** *(Formal (a)–(b) · Exegetical (c).)* In an invented economy the pre-tax return on capital is $r=7\%$ every year, and the government taxes capital income at a constant rate $\tau_K$. A study finds that consumption 35 years ahead carries an implicit tax of exactly 100 percent: it costs twice what it would without the tax. Recall $1+t_T=\big[(1+r)/(1+(1-\tau_K)r)\big]^T$. (a) What $\tau_K$ does the study imply? (b) The government halves that rate. At what horizon does the implicit tax now reach 100 percent? (c) In a Judd steady state (capitalists save, workers do not), who bears a long-run capital income tax, and why? One sentence.

<details>
<summary>Solution</summary>

(a) The yearly factor must be $2^{1/35}=1.0200$. Then $1+0.07(1-\tau_K)=1.07/1.0200=1.0490$, so $0.07(1-\tau_K)=0.0490$, $1-\tau_K=0.700$ and $\tau_K=30\%$.

(b) At $\tau_K=15\%$ the after-tax return is $5.95\%$ and the factor is $1.07/1.0595=1.0099$. The implicit tax reaches 100 percent at $T=\ln2/\ln1.0099\approx70.3$ years (first exceeding it in year 71). Halving the rate roughly doubles the horizon; the wedge still grows without bound.

**Must hit, strict (c):**

- Workers, through a lower wage.
- In the steady state capitalists' Euler equation pins the after-tax return at $\rho$, so capital supply is perfectly elastic; the pre-tax return rises, capital shrinks, and the wage falls by more than the revenue.

**Model answer (c):** Workers bear it: the capitalists' Euler equation pins the long-run after-tax return at $\rho$, so capital is supplied perfectly elastically and the tax is shifted onto wages by a smaller capital stock.

**Wrong turns:** reading "100 percent at 35 years" as $35\,r\tau_K=1$ and getting $\tau_K\approx41\%$, which forgets compounding; answering "capitalists" in (c), which is true only during the transition, for the capital already in place.

</details>

## Connections

- **Backward:** the unraveling is [`grad-micro` 5.1](../../grad-micro/lessons/05-01-adverse-selection-lemons.md)'s lemons market with costs in place of qualities; the menu-of-contracts version is [`grad-micro` 5.3](../../grad-micro/lessons/05-03-screening.md)'s Rothschild-Stiglitz. The loss triangle is the surplus accounting of [2.3](02-03-excess-burden-and-the-harberger-triangle.md), and the subsidy test prices funds at the MCPF of [2.4](02-04-second-best-and-the-marginal-cost-of-public-funds.md).
- **Forward:** [7.2](07-02-optimal-unemployment-insurance-baily-chetty.md) asks the other half of the social-insurance question: once the government provides insurance, how much, given that coverage changes behavior (the moral hazard this lesson assumed away). [7.3](07-03-tagging-ordeals-and-in-kind-benefits.md) turns selection around, using self-selection deliberately to target transfers.
- **Sideways:** EFC's method is an instrumental-variables design: price variation identifies both demand and the cost of the marginal buyer ([`econometrics` 3.6](../../econometrics/lessons/03-06-instrumental-variables.md)). [5.2](05-02-the-mirrlees-problem.md)'s Mirrlees problem is the same hidden-type problem with the government as the screener: in both, the party with the information chooses, and the designer lives with who selects what.
