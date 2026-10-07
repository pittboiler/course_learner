# Public Economics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course asks one question eight ways: where is the wedge, who bears it, and is the cure cheaper than the disease? Mid-problem, use the card to find a model's setup and result in the lessons' notation, the formula for a rate, a burden, a loss or a threshold, which convention a formula uses (EV, compensated MCPF, signed elasticities, average-one weights), what a reused symbol means in a given lesson, and where a borrowed tool from micro, macro, game theory or econometrics is taught.

## Scope and ownership

The course is positive and technical: entries state models and results, and social welfare weights are *inputs* to its formulas, solved for several objectives. Which weights are right is left to [`philosophy-of-economics`](../philosophy-of-economics/syllabus.md), [`decision-theory`](../decision-theory/syllabus.md) and [`political-philosophy`](../political-philosophy/syllabus.md); nothing here rules on whether an allocation is fair.

| Topic | Owned by | What this course does with it |
|---|---|---|
| Quasilinear Samuelson condition, Nash underprovision, Lindahl prices | [`grad-micro` 6.4](../grad-micro/lessons/06-04-public-goods.md) | Assumed. Owned here as policy: Samuelson with income effects (1.1), neutrality and crowd-out (1.2), preference revelation (1.3), the modified Samuelson rule (2.4) |
| Pigouvian tax at the efficient quantity, Coase, the externality triangle | [`grad-micro` 6.3](../grad-micro/lessons/06-03-externalities-coase-theorem.md) | Assumed. Owned here: the choice of instrument, taxes against permits, Weitzman, second-best Pigou and the double dividend (Module 3) |
| Linear-market incidence and the tax triangle; surplus | [`grad-micro` 4.1](../grad-micro/lessons/04-01-partial-equilibrium-surplus.md) | Generalized: the elasticity formula, monopoly, general equilibrium, exact compensated measurement (Module 2) |
| Revelation principle, VCG and the pivot mechanism, Myerson-Satterthwaite | [`grad-game-theory` 5.2](../grad-game-theory/lessons/05-02-revelation-principle-incentive-compatibility.md), [5.3](../grad-game-theory/lessons/05-03-dominant-strategy-mechanisms-vcg.md), [5.5](../grad-game-theory/lessons/05-05-limits-of-efficient-design.md) | Cited in 1.3; only the public-goods pieces (the AGV mechanism, Bowen voting) are taught |
| Lemons, Rothschild-Stiglitz screening, principal-agent moral hazard | [`grad-micro` 5.1](../grad-micro/lessons/05-01-adverse-selection-lemons.md), [5.3](../grad-micro/lessons/05-03-screening.md), [5.4](../grad-micro/lessons/05-04-moral-hazard-principal-agent.md) | Assumed. Owned here: adverse selection as public policy (7.1); screening reused with the government as screener (5.2, 7.3) |
| Social welfare functions, the median voter, Arrow | [`grad-micro` 6.5](../grad-micro/lessons/06-05-social-choice-welfare.md); [`grad-game-theory` 5.1](../grad-game-theory/lessons/05-01-social-choice-impossibility.md); [`social-choice`](../social-choice/syllabus.md) | Weights $g_i$ used as parameters; the median voter used in Bowen voting (1.3) |
| Ramsey growth model; OLG, Ricardian equivalence, social security | [`grad-macro` 2.3](../grad-macro/lessons/02-03-ramsey-cass-koopmans.md); [3.1](../grad-macro/lessons/03-01-olg-model.md)-[3.4](../grad-macro/lessons/03-04-social-security-transfers.md) | The growth model is the setting of Chamley-Judd (6.2); pensions and Ricardian equivalence are not taught (1.2 compares Warr neutrality to 3.4) |
| Precautionary saving; Aiyagari heterogeneous agents; search and matching | [`grad-macro` 5.2](../grad-macro/lessons/05-02-precautionary-saving.md), [6.4](../grad-macro/lessons/06-04-heterogeneous-agent-taste.md), [6.3](../grad-macro/lessons/06-03-search-matching-dmp.md) | Cited: 6.3's macro setting; 7.2 holds the unemployment rate fixed |
| Fiscal multipliers, stabilization | [`grad-macro` 6.1](../grad-macro/lessons/06-01-monetary-fiscal-nk.md) | Not taught |
| Public debt, tax smoothing, fiscal limits, sovereign default | [`economics-of-debt` 5.1](../economics-of-debt/lessons/05-01-the-government-budget-constraint.md), [5.3](../economics-of-debt/lessons/05-03-tax-smoothing-and-optimal-debt.md), [5.4](../economics-of-debt/lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) | Not taught; this course stops at the tax side. It supplies what they cite: the convex triangle (2.3), equal MCPF (2.4), the revenue peak $1/(1+e)$ (2.4, 5.1), the capital levy (6.2) |
| Estimating elasticities: IV, DiD, event studies, RD | [`econometrics` 3.6](../econometrics/lessons/03-06-instrumental-variables.md), [4.3](../econometrics/lessons/04-03-difference-in-differences.md), [4.4](../econometrics/lessons/04-04-event-studies-dynamic-did.md), [4.7](../econometrics/lessons/04-07-regression-discontinuity.md) | Elasticities used as sufficient statistics; identification cited, not taught (2.1, 5.3, 5.4, 7.1, 7.2, 8.1, 8.2) |
| Meltzer-Richard, lobbying, what governments maximize, collective action | [`political-economy`](../political-economy/syllabus.md) | Not taught; the Leviathan objective (8.3) and flypaper agency (8.2) are cited to it |
| Federal structure described; vertical fiscal imbalance | [`political-institutions`](../political-institutions/syllabus.md) [5.1](../political-institutions/lessons/05-01-federal-unitary-devolved.md)-[5.2](../political-institutions/lessons/05-02-decentralization-in-practice.md) | Owned here as theory: Tiebout, Oates, grants, tax competition (Module 8) |
| Fiscal capacity; the informal sector | [`institutions-and-development`](../institutions-and-development/syllabus.md) | Cited: the MCPF (2.4) and the Diamond-Mirrlees failure with an informal sector (4.3) |
| Which welfare weights; horizontal equity; paternalism; free riding as a wrong | [`philosophy-of-economics`](../philosophy-of-economics/syllabus.md), [`political-philosophy`](../political-philosophy/syllabus.md), [`decision-theory`](../decision-theory/syllabus.md), [`ethics` 2.2](../ethics/lessons/02-02-the-formula-of-universal-law.md) | Not taught; formulas are solved for several weightings |

**Convention warnings.**

- **$q$ is a quantity in 2.1 and a consumer price from 2.4 on.** 2.1 writes $p,q$ for the pre-tax price and quantity; 2.4, Module 3 (3.3) and Module 4 write $q_i=p_i+t_i$ for the consumer price. 4.1 flags the switch.
- **Elasticities are signed.** Demand elasticities ($\varepsilon_D$, $\varepsilon_i$, $\varepsilon^c$ of demand) are negative, so formulas carry $|\varepsilon|$; supply, labor-supply and taxable-income elasticities ($\varepsilon_S$, $e$, $\zeta_i$, $\eta_i$) are positive. The monopoly pass-through $|\varepsilon_D|/(|\varepsilon_D|-1)$ uses the magnitude.
- **$e$ has three meanings.** The expenditure function $e(P,u)$ (2.3, 6.1); the elasticity of taxable income with respect to $1-\tau$ (2.4, Module 5); and in 7.2 the employment probability, where elasticities are written $\varepsilon$. 3.1's $e_i$ is emissions.
- **$a$ and $\tau$, $t$.** $a_i$ is abatement in Module 3; $a$ is the Pareto parameter in 5.3 (and an intercept in 7.1, 8.2, 8.3). $t$ is a unit tax (2.1, 2.4, Module 4, 3.3's dirty-good tax, 8.3's source tax); $\tau$ is an ad valorem or income-tax rate (2.1, 2.3, 2.4, Module 5, 3.3's wage tax), a capital tax in sector X (2.2), $t_k/q_k$ in 4.2, a property-tax rate (8.1); 6.2 writes $\tau_K$, 6.3 $\tau_s$.
- **$g$ is a welfare weight, except twice.** Social marginal welfare weights $g_i$ average one over the population (the Saez convention) in 4.2, 5.1-5.4 and 7.3; in 5.3, 5.4 and 7.3 a weight is also read relative to a dollar of public funds. 1.2's $g_i$ is a gift; 8.1's $g_j$ is a town's service level. 5.1's $G(u)$ is the welfare transform, not a public good.
- **Excess burden uses the EV; the MCPF is compensated.** Both are this course's conventions (2.3, 2.4). With income effects CV differs from EV, and uncompensated MCPF conventions can fall below one (Ballard-Fullerton).
- **$\lambda$ is the MCPF.** The multiplier on the government budget, equal to the MCPF in money terms (2.4, 3.3, 4.1, 4.2, 7.1, 8.2); 5.2's two-type Mirrlees problem has $\lambda=1$. $\theta$ is the Ramsey number in Module 4, a type or cost shock in 1.3, 3.2, 6.3, a taste in 1.2, 8.1, 8.3, and $\theta_{KX}$ etc. are cost shares in 2.2.
- **Income is $z$ or $y$.** 5.1, 5.3, 5.4 write taxable income $z$; 5.2, 6.1 and 6.3 write pre-tax income $y$. 7.2's $z$ is the worker's own resources.
- **$\rho$, $\sigma$, $s$, $h$, $R$ are reused.** $\rho$: pass-through (2.1), a correlation (3.2), time preference and the long-run after-tax return (6.2), capital's net return (8.3). $\sigma$: elasticities of substitution (2.2), a shock's standard deviation (3.2), CRRA curvature (6.2), a subsidy (7.1), a spillover share (8.2). $s$: a consumption share (1.1), a budget share (4.1), an input tax (4.3), the buyer index (7.1), claimants (7.3). $h$: congestion (1.1), Hicksian demand (2.3), effort cost (5.1, 5.2, 6.3), occupation shares (5.4), house value (8.1). $R$: revenue (2.3 on), the demogrant (5.1), a gross return (6.1, 6.3), a house's rent (8.1).
- **Where the lessons corrected the syllabus, the card follows the lessons.** Identical Cobb-Douglas is in the Bergstrom-Cornes class; distribution-dependence needs *differing* tastes (1.1). One-for-one crowd-out needs each lump-sum tax below the contributor's gift (1.2). Green-Laffont's impossibility needs *efficiency* (1.3). Suits and Musgrave's result is the same-revenue, lower-price form (2.1). With Cobb-Douglas production and demand capital bears exactly 100 percent at any intensities, so the capital- versus labor-intensive contrast is CES (2.2). Maximin gives the Laffer rate only if the worst-off earn nothing (5.1). The participation tax rate is negative iff $g_i>1$, not below one (5.4). The race to the bottom stops at a positive floor (8.3).

## Notation

In first-appearance order, module by module. A symbol reused with a new meaning gets a new row, tagged with the lessons where that meaning holds.

**Module 1: public goods**

| Symbol | Means | First used |
|---|---|---|
| $G$ | quantity of the public good; everyone consumes all of it | [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) |
| $x_i$ | person $i$'s private consumption (money in 1.3) | [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) |
| $X$ (Module 1) | total private consumption $\sum_i x_i$ | [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) |
| $u_i(x_i,G)$ | person $i$'s utility | [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) |
| $F(X,G)=0$ | production possibility frontier between private goods and $G$ | [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) |
| $\mathrm{MRS}^i_{Gx}$, $\mathrm{MRS}_i$ | private good person $i$ would give up for one more unit of $G$; her marginal willingness to pay | [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) |
| $\mathrm{MRT}$ | private good the economy gives up to make one more unit of $G$, $F_G/F_X$ | [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) |
| $\mu_i$, $\gamma$ (1.1) | multipliers on the utility targets and on technology in the Pareto problem | [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) |
| $A(G)$, $B_i(G)$ | the common and personal parts of Bergstrom-Cornes preferences $A(G)x_i+B_i(G)$ | [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) |
| $\alpha_i$ (1.1) | taste for the park in $\ln x_i+\alpha_i\ln G$ | [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) |
| $s$ (1.1) | person 1's share of private consumption | [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) |
| $C$ (1.1) | a club facility's fixed cost | [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) |
| $n$ (1.1) | number of club members (elsewhere: number of people or towns) | [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) |
| $h(n)$ (1.1) | congestion cost each member bears when there are $n$ | [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) |
| $w_i$ (1.2) | person $i$'s wealth (not a wage) | [1.2](lessons/01-02-voluntary-provision-and-crowding-out.md) |
| $g_i$ (1.2) | person $i$'s **gift** to the public good, not the welfare weight of Module 5 | [1.2](lessons/01-02-voluntary-provision-and-crowding-out.md) |
| $P$ (1.2) | government provision of the public good | [1.2](lessons/01-02-voluntary-provision-and-crowding-out.md) |
| $G_{-i}$ | everything not given by $i$, $G-g_i$ | [1.2](lessons/01-02-voluntary-provision-and-crowding-out.md) |
| $C$, $k$, $W_C$ (1.2) | the contributor set, its size, and its total wealth | [1.2](lessons/01-02-voluntary-provision-and-crowding-out.md) |
| $\theta_i$ (1.2) | taste weight in the quasilinear $x_i+\theta_i\ln G$ | [1.2](lessons/01-02-voluntary-provision-and-crowding-out.md) |
| $b_i(G)$ | person $i$'s money benefit from $G$ (quasilinear); $b_i'$ is her MRS | [1.3](lessons/01-03-revealing-demand-for-public-goods.md) |
| $c$ (1.3, 8.1-8.3) | cost of one unit of $G$ | [1.3](lessons/01-03-revealing-demand-for-public-goods.md) |
| $p_i$ (1.3) | $i$'s Lindahl price per unit of $G$ | [1.3](lessons/01-03-revealing-demand-for-public-goods.md) |
| $k$ (1.3) | how much a resident shades her reported marginal benefit | [1.3](lessons/01-03-revealing-demand-for-public-goods.md) |
| $v_i$, $\hat v_i$ | $i$'s net value of a yes-or-no project (value minus cost share), and her report | [1.3](lessons/01-03-revealing-demand-for-public-goods.md) |
| $t_i$ (1.3) | $i$'s Clarke tax, or her AGV net transfer | [1.3](lessons/01-03-revealing-demand-for-public-goods.md) |
| $\theta_i$, $\hat\theta_i$ (1.3) | $i$'s privately known type and her report | [1.3](lessons/01-03-revealing-demand-for-public-goods.md) |
| $x^*(\hat\theta)$ | the efficient decision at the reports | [1.3](lessons/01-03-revealing-demand-for-public-goods.md) |
| $\xi_i(\hat\theta_i)$ | $i$'s expected externality: others' expected value given her report | [1.3](lessons/01-03-revealing-demand-for-public-goods.md) |
| $G_i$, $G_m$ | $i$'s favourite quantity at an equal cost share; the median favourite | [1.3](lessons/01-03-revealing-demand-for-public-goods.md) |

**Module 2: incidence and excess burden**

| Symbol | Means | First used |
|---|---|---|
| $p^d$, $p^s$ | price buyers pay; price sellers keep | [2.1](lessons/02-01-partial-equilibrium-incidence.md) |
| $t$ (2.1, 2.4, Module 4) | unit tax per unit sold | [2.1](lessons/02-01-partial-equilibrium-incidence.md) |
| $D(\cdot)$, $S(\cdot)$ (2.1) | demand and supply functions | [2.1](lessons/02-01-partial-equilibrium-incidence.md) |
| $\varepsilon_D<0$, $\varepsilon_S>0$ | demand and supply elasticities at the pre-tax equilibrium; demand elasticities are signed **negative** throughout | [2.1](lessons/02-01-partial-equilibrium-incidence.md) |
| $p$, $q$ (2.1) | pre-tax price and **quantity** | [2.1](lessons/02-01-partial-equilibrium-incidence.md) |
| $\rho$ (2.1) | pass-through rate $dp^d/dt$ | [2.1](lessons/02-01-partial-equilibrium-incidence.md) |
| $\tau$ (2.1) | ad valorem rate on the consumer price, $p^s=(1-\tau)p^d$ | [2.1](lessons/02-01-partial-equilibrium-incidence.md) |
| $P(Q)$, $Q$ (2.1) | a monopolist's inverse demand and quantity | [2.1](lessons/02-01-partial-equilibrium-incidence.md) |
| $c$ (2.1) | a monopolist's constant marginal cost | [2.1](lessons/02-01-partial-equilibrium-incidence.md) |
| $X$, $Y$ (2.2) | the taxed and untaxed sectors (and their outputs) | [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md) |
| $K_X$, $L_X$, $\bar K$, $\bar L$ | capital and labor used in X; fixed endowments | [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md) |
| $r$, $w$ (2.2) | net return to capital and wage, equal across sectors | [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md) |
| $\tau$ (2.2) | ad valorem tax on capital's return in sector X only | [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md) |
| $\hat x$ | proportional change $dx/x$ from $\tau=0$ | [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md) |
| $\theta_{KX}$, $\theta_{LX}$, $\theta_{KY}$, $\theta_{LY}$ | factor **cost shares** in each sector | [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md) |
| $\gamma_K$, $\gamma_L$ | fractions of all capital and of all labor employed in X; X capital-intensive iff $\gamma_K>\gamma_L$ | [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md) |
| $\sigma_X$, $\sigma_Y$ | elasticities of substitution between capital and labor in each sector | [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md) |
| $E$ (2.2) | elasticity of substitution between X and Y in demand | [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md) |
| $N$, $D$ (2.2) | numerator and denominator of the Harberger result | [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md) |
| $b_K$, $\theta_K$ | capital's share of the burden; capital's share of national income | [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md) |
| $m$ | consumer's income | [2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md) |
| $P_0$, $P_1$ (2.3) | consumer price before and after the tax, $P_1=p(1+\tau)$ | [2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md) |
| $p$ (2.3) | fixed producer price | [2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md) |
| $x(P,m)$, $h(P,u)$ | Marshallian and Hicksian (compensated) demand | [2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md) |
| $e(P,u)$ | **expenditure function**: least income reaching $u$ at price $P$ (not an elasticity) | [2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md) |
| $V(P,m)$ | indirect utility | [2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md) |
| $u_0$, $u_1$ | utility before and after the tax | [2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md) |
| $\mathrm{EV}$, $\mathrm{CV}$, $\mathrm{EB}$ | equivalent variation, compensating variation, excess burden | [2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md) |
| $R$ | tax revenue | [2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md) |
| $\varepsilon^c$ | compensated elasticity (negative for demand, positive for labor supply) | [2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md) |
| $T$ (2.3) | the week's time endowment, 100 hours (not a tax) | [2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md) |
| $\omega$, $\ell$ (2.3) | net wage; leisure | [2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md) |
| $q_i=p_i+t_i$ (2.4, Module 4) | **consumer price** of good $i$ | [2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md) |
| $\mathrm{CS}$, $\mathrm{DWL}$ | consumer surplus; deadweight loss from the untaxed level | [2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md) |
| $\mathrm{MEB}_k$, $\mathrm{MCPF}_k$ | marginal excess burden and marginal cost of public funds of tax $k$ | [2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md) |
| $z$ | taxable income | [2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md) |
| $e$ (2.4, Module 5) | elasticity of taxable income with respect to $1-\tau$ | [2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md) |
| $\tau$ (2.4, Module 5) | proportional income tax rate | [2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md) |
| $\lambda$ | multiplier on the government budget: the social value of a dollar of public revenue, which equals the MCPF | [2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md) |

**Module 3: externality instruments**

| Symbol | Means | First used |
|---|---|---|
| $a_i$ | tons abated by firm $i$ (not the Pareto parameter $a$ of 5.3) | [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md) |
| $\bar e_i$, $e_i$ | firm $i$'s unregulated emissions and its emissions $\bar e_i-a_i$ | [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md) |
| $C_i(a_i)$ | firm $i$'s abatement cost, increasing and convex | [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md) |
| $\mathrm{MAC}_i$ | marginal abatement cost $C_i'(a_i)$ | [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md) |
| $A$ (3.1) | total abatement target | [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md) |
| $\mu$ (3.1) | common marginal abatement cost at least cost: the shadow price of the target | [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md) |
| $t$ (3.1) | emissions tax per ton | [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md) |
| $E$ (3.1) | the cap: number of permits, $\sum_i\bar e_i-A$ | [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md) |
| $\omega_i$, $p$ (3.1) | firm $i$'s initial permit allocation; the permit price | [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md) |
| $c_i$, $N$ (3.1) | slope of a linear MAC, $\mathrm{MAC}_i=c_ia_i$; number of firms | [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md) |
| $\mathrm{MB}(a)=b_0-Da$ | marginal benefit of abatement (damage avoided) | [3.2](lessons/03-02-prices-vs-quantities.md) |
| $\mathrm{MAC}(a)=c_0+Ca+\theta$ | aggregate marginal abatement cost | [3.2](lessons/03-02-prices-vs-quantities.md) |
| $C$, $D$ (3.2) | slopes of MAC and MB, as magnitudes | [3.2](lessons/03-02-prices-vs-quantities.md) |
| $\theta$, $\sigma$ (3.2) | cost shock seen only by firms, mean 0; its standard deviation ($\sigma_\theta$ in P3) | [3.2](lessons/03-02-prices-vs-quantities.md) |
| $a^*$, $p^*$ | expected-optimal abatement and the matching tax | [3.2](lessons/03-02-prices-vs-quantities.md) |
| $a_P(\theta)$, $a^\circ(\theta)$ | abatement under the tax; best abatement once $\theta$ is known | [3.2](lessons/03-02-prices-vs-quantities.md) |
| $\mathbb E L_Q$, $\mathbb E L_P$, $\Delta$ | expected loss under a quota and under a tax; the advantage of prices | [3.2](lessons/03-02-prices-vs-quantities.md) |
| $\eta$, $\sigma_\eta$, $\rho$ (3.2) | benefit shock, its standard deviation, its correlation with $\theta$ | [3.2](lessons/03-02-prices-vs-quantities.md) |
| $\mathrm{MED}$ | marginal external damage per unit of the dirty good | [3.3](lessons/03-03-pigou-in-a-second-best-world.md) |
| $x_j(q_j)$, $t_j$ (3.3) | independent demands at consumer prices $q_j=p_j+t_j$; commodity taxes | [3.3](lessons/03-03-pigou-in-a-second-best-world.md) |
| $L$, $C$, $D$ (3.3) | labor; the clean good; the **dirty good** | [3.3](lessons/03-03-pigou-in-a-second-best-world.md) |
| $\tau$ (3.3) | wage tax rate | [3.3](lessons/03-03-pigou-in-a-second-best-world.md) |
| $P(t)$, $w$ (3.3) | goods price index; the real wage $(1-\tau)/P(t)$ | [3.3](lessons/03-03-pigou-in-a-second-best-world.md) |
| $k$ (3.3) | dirty spending per unit of labor, $D/L$ | [3.3](lessons/03-03-pigou-in-a-second-best-world.md) |

**Module 4: optimal commodity taxation** ($q$ is a consumer **price** here, not a quantity)

| Symbol | Means | First used |
|---|---|---|
| $q_i=p_i+t_i$ | consumer price of good $i$; $p_i$ the fixed producer price | [4.1](lessons/04-01-the-ramsey-rule.md) |
| good 0 | the untaxed good, think leisure; its price is the wage $w$ in 4.2 | [4.1](lessons/04-01-the-ramsey-rule.md) |
| $V(q,m)$, $x_i(q,m)$ | indirect utility and Marshallian demand | [4.1](lessons/04-01-the-ramsey-rule.md) |
| $\alpha$ (4.1) | marginal utility of income $\partial V/\partial m$ | [4.1](lessons/04-01-the-ramsey-rule.md) |
| $S_{ij}$ | Slutsky (compensated) derivative of good $i$ in price $j$; aggregate in 4.2 | [4.1](lessons/04-01-the-ramsey-rule.md) |
| $\theta$ (Module 4) | the Ramsey number: the common proportional cut in compensated demand | [4.1](lessons/04-01-the-ramsey-rule.md) |
| $\varepsilon_i$ (Module 4) | own-price elasticity at the **taxed** price; negative | [4.1](lessons/04-01-the-ramsey-rule.md) |
| $s_i$, $\eta_i$ (4.1) | budget share and income elasticity in $\varepsilon^c_i=\varepsilon_i+s_i\eta_i$ | [4.1](lessons/04-01-the-ramsey-rule.md) |
| $b_i$ (4.1) | slope of a linear demand $x_i=a_i-b_iq_i$ | [4.1](lessons/04-01-the-ramsey-rule.md) |
| $P_i$, $c$, $F$ (4.1) | a regulated firm's prices, marginal cost and fixed cost | [4.1](lessons/04-01-the-ramsey-rule.md) |
| $\mu$, $k$ (4.1) | multiplier on the break-even constraint; $k=\mu/(1+\mu)$ | [4.1](lessons/04-01-the-ramsey-rule.md) |
| $h$, $H$ | households and their number | [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md) |
| $m^h$, $x_i^h$, $v^h$ | household $h$'s income, demand, indirect utility | [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md) |
| $X_i$ (4.2) | aggregate demand for good $i$ | [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md) |
| $W$ | social welfare function | [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md) |
| $\beta^h$, $\bar\beta$ | social value of a dollar to $h$, $\frac{\partial W}{\partial v^h}\frac{\partial v^h}{\partial m^h}$; its average | [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md) |
| $g_h$ (4.2) | social marginal welfare weight $\beta^h/\bar\beta$, average one | [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md) |
| $b^h$ (4.2) | net social value of a dollar to $h$, counting the revenue it generates | [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md) |
| $\kappa$ | $\bar\beta/\lambda$ | [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md) |
| $\delta_k$ | distributional characteristic of good $k$ | [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md) |
| $\tau_k$ (4.2) | tax as a share of the consumer price, $t_k/q_k$ | [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md) |
| $\varepsilon_{ki}$ | compensated elasticity of good $k$ in price $i$ ($i=0$: the wage) | [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md) |
| $Y$, $y$ (4.3) | aggregate production set of private firms; a production plan | [4.3](lessons/04-03-production-efficiency-diamond-mirrlees.md) |
| $z_g$ | public production | [4.3](lessons/04-03-production-efficiency-diamond-mirrlees.md) |
| $X(q)$ (4.3) | aggregate household net demand | [4.3](lessons/04-03-production-efficiency-diamond-mirrlees.md) |
| $m$, $p_m$ (4.3) | an intermediate input and its price | [4.3](lessons/04-03-production-efficiency-diamond-mirrlees.md) |
| $T$, $s$ (4.3) | a final-good tax rate; a tax on the input $m$ | [4.3](lessons/04-03-production-efficiency-diamond-mirrlees.md) |

**Module 5: optimal income taxation**

| Symbol | Means | First used |
|---|---|---|
| $z_i$, $Z$ (5.1) | person $i$'s taxable income; aggregate income $Z(1-\tau)$ | [5.1](lessons/05-01-the-linear-income-tax.md) |
| $c_i$ | consumption | [5.1](lessons/05-01-the-linear-income-tax.md) |
| $R$ (5.1) | the demogrant: equal lump-sum grant, $R=\tau Z$ | [5.1](lessons/05-01-the-linear-income-tax.md) |
| $h_i(z)$ (5.1) | person $i$'s effort cost of earning $z$ | [5.1](lessons/05-01-the-linear-income-tax.md) |
| $G(u)$ (5.1) | the social welfare transform, $W=\int G(u_i)\,di$ (not the public good) | [5.1](lessons/05-01-the-linear-income-tax.md) |
| $g_i$ (Module 5) | social marginal welfare weight, average one | [5.1](lessons/05-01-the-linear-income-tax.md) |
| $\bar g$ | income-weighted average weight $\int g_iz_i/Z$ | [5.1](lessons/05-01-the-linear-income-tax.md) |
| $w_i$ (5.2, 6.1) | wage, i.e. skill: the type the government cannot see | [5.2](lessons/05-02-the-mirrlees-problem.md) |
| $\pi_i$ | population share of type $i$ | [5.2](lessons/05-02-the-mirrlees-problem.md) |
| $y$ (5.2, Module 6) | pre-tax income (5.1 and 5.3 call it $z$) | [5.2](lessons/05-02-the-mirrlees-problem.md) |
| $\ell$, $h(\ell)$ (5.2) | hours $y/w_i$; disutility of work, $\tfrac12\ell^2$ | [5.2](lessons/05-02-the-mirrlees-problem.md) |
| $U_i$ | type $i$'s utility $c-h(y/w_i)$ | [5.2](lessons/05-02-the-mirrlees-problem.md) |
| $T(y)$ | tax schedule, $y-c$ | [5.2](lessons/05-02-the-mirrlees-problem.md) |
| $\tau_i$ (5.2) | implicit marginal tax rate $1-\mathrm{MRS}_i$ | [5.2](lessons/05-02-the-mirrlees-problem.md) |
| $\mu$ (5.2) | multiplier on the binding IC | [5.2](lessons/05-02-the-mirrlees-problem.md) |
| $M_k$ | $\sum_{j>k}\pi_j(1-g_j)$: welfare-weighted mass above type $k$ | [5.2](lessons/05-02-the-mirrlees-problem.md) |
| $\bar z$, $z_m$ | top-bracket threshold; mean income in the bracket | [5.3](lessons/05-03-the-saez-formula.md) |
| $a$ (5.3) | Pareto parameter $z_m/(z_m-\bar z)$ (not abatement $a_i$) | [5.3](lessons/05-03-the-saez-formula.md) |
| $g$ (5.3) | welfare weight on top earners relative to public revenue | [5.3](lessons/05-03-the-saez-formula.md) |
| $dM$, $dB$, $dW$ | mechanical, behavioral and welfare effects of a perturbation | [5.3](lessons/05-03-the-saez-formula.md) |
| $e_r$, $e_s$, $t_s$ (5.3) | real and shifted parts of $e$; the rate on the base shifted into | [5.3](lessons/05-03-the-saez-formula.md) |
| $z_i$, $T_i$ (5.4) | earnings in occupation $i$ ($z_0=0$: not working); net tax there | [5.4](lessons/05-04-participation-and-the-eitc.md) |
| $h_i$ (5.4) | population share in occupation $i$ | [5.4](lessons/05-04-participation-and-the-eitc.md) |
| $\zeta_i$ | intensive elasticity of $h_i$ with respect to $c_i-c_{i-1}$ | [5.4](lessons/05-04-participation-and-the-eitc.md) |
| $\eta_i$ (5.4) | extensive (participation) elasticity of $h_i$ with respect to $c_i-c_0$ | [5.4](lessons/05-04-participation-and-the-eitc.md) |
| $\tau_{p,i}$ | participation tax rate $(T_i-T_0)/z_i$ | [5.4](lessons/05-04-participation-and-the-eitc.md) |

**Module 6: taxing capital**

| Symbol | Means | First used |
|---|---|---|
| $l$ (Module 6) | hours worked; $y=wl$ in 6.1, $y=\theta l$ in 6.3 | [6.1](lessons/06-01-atkinson-stiglitz.md) |
| $B$, $B_i$ | net income $y-T(y)$ spent on goods | [6.1](lessons/06-01-atkinson-stiglitz.md) |
| $\phi(x)$ | goods subutility, free of labor under weak separability | [6.1](lessons/06-01-atkinson-stiglitz.md) |
| $U(\phi,l)$ (6.1) | utility, common to all types | [6.1](lessons/06-01-atkinson-stiglitz.md) |
| $V(q,B)$, $x(q,B)$ (6.1) | indirect subutility of goods; goods demands | [6.1](lessons/06-01-atkinson-stiglitz.md) |
| $e(p,\cdot)$ (6.1) | expenditure function of $\phi$ at producer prices | [6.1](lessons/06-01-atkinson-stiglitz.md) |
| $x^M$, $x^L$, $\mu_M$ | the mimicker's and the low type's baskets; the mimicker's marginal utility of net income | [6.1](lessons/06-01-atkinson-stiglitz.md) |
| $R$, $R_{\text{net}}$ (6.1) | gross return on saving before and after a tax on interest | [6.1](lessons/06-01-atkinson-stiglitz.md) |
| $c_1$, $c_2$ | consumption in periods 1 and 2 | [6.1](lessons/06-01-atkinson-stiglitz.md) |
| $\ell$, $a$ (6.1) | leisure $1-l$; in Example 2 the weight $a=2\ell$ on good 2 | [6.1](lessons/06-01-atkinson-stiglitz.md) |
| $\beta$ | discount factor; in 6.2 $\beta=1/(1+\rho)$ | [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md) |
| $\rho$ (6.2) | rate of time preference; the long-run after-tax return (not pass-through) | [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md) |
| $u(c)$, $v(l)$ (6.2) | utility of consumption; disutility of labor | [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md) |
| $f(k)$, $k$, $\delta$ | output per worker, capital, depreciation | [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md) |
| $r_t$ (6.2) | pre-tax net return $f'(k_t)-\delta$ | [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md) |
| $\tau_K$ | capital income tax rate | [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md) |
| $t_T$ | implicit tax on consumption $T$ periods ahead | [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md) |
| $\sigma$ (6.2) | CRRA curvature, $u=c^{1-\sigma}/(1-\sigma)$; IES $1/\sigma$ | [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md) |
| $w$ (6.2) | wage $f(k)-f'(k)k$ | [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md) |
| $W$ (6.3) | period-1 resources | [6.3](lessons/06-03-the-inverse-euler-equation.md) |
| $\theta$ (6.3) | skill (hourly wage) learned privately in period 2 | [6.3](lessons/06-03-the-inverse-euler-equation.md) |
| $c_2(\theta)$, $y(\theta)$ | the period-2 menu | [6.3](lessons/06-03-the-inverse-euler-equation.md) |
| $h$ (6.3) | disutility of hours | [6.3](lessons/06-03-the-inverse-euler-equation.md) |
| $R$ (6.3) | gross return carrying resources across periods | [6.3](lessons/06-03-the-inverse-euler-equation.md) |
| $\tau_s$ | savings wedge: implicit tax on the gross return | [6.3](lessons/06-03-the-inverse-euler-equation.md) |
| $\tau(\theta)$ | Kocherlakota's earnings-dependent wealth tax rate | [6.3](lessons/06-03-the-inverse-euler-equation.md) |

**Module 7: social insurance and targeting**

| Symbol | Means | First used |
|---|---|---|
| $s$ (7.1) | buyer index in descending willingness to pay; also the share covered | [7.1](lessons/07-01-adverse-selection-as-a-policy-problem.md) |
| $P(s)$ (7.1) | willingness to pay of buyer $s$: the inverse demand curve | [7.1](lessons/07-01-adverse-selection-as-a-policy-problem.md) |
| $\mathrm{MC}(s)$, $\mathrm{AC}(s)$ | expected cost of buyer $s$; mean cost of the $s$ keenest buyers | [7.1](lessons/07-01-adverse-selection-as-a-policy-problem.md) |
| $s_e$, $s^*$ | equilibrium and efficient coverage | [7.1](lessons/07-01-adverse-selection-as-a-policy-problem.md) |
| $a$, $b$, $c$, $d$ (7.1) | linear case $P=a-bs$, $\mathrm{MC}=c-ds$; $d>0$ is adverse selection | [7.1](lessons/07-01-adverse-selection-as-a-policy-problem.md) |
| $\sigma$ (7.1) | per-contract subsidy paid to insurers | [7.1](lessons/07-01-adverse-selection-as-a-policy-problem.md) |
| $z$ (7.2) | the worker's own resources (not taxable income) | [7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md) |
| $e$ (7.2) | **employment probability**, chosen by search (not the Module 5 elasticity) | [7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md) |
| $\psi(e)$ | utility cost of search effort | [7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md) |
| $w$, $\tau$, $b$ (7.2) | wage; tax on the employed; unemployment benefit | [7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md) |
| $c_e$, $c_u$ | consumption employed and unemployed | [7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md) |
| $\varepsilon_{1-e,b}$ | elasticity of the unemployment probability with respect to the benefit, budget balanced | [7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md) |
| $\gamma$ (7.2) | relative risk aversion $-cu''/u'$ | [7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md) |
| $\Delta c/c$ | proportional consumption drop on job loss, $(c_e-c_u)/c_e$ | [7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md) |
| $n_i$, $s_i$, $S$ (7.3) | count of type $i$; type-$i$ claimants; total claimants | [7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md) |
| $b$ (7.3) | benefit per claimant | [7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md) |
| $c_i$ (7.3) | claim cost borne by a type-$i$ claimant, received by nobody | [7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md) |
| $\bar g_{\text{rec}}$ | recipients' average welfare weight | [7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md) |
| $N$, $R$ (7.3) | the needy and the rest | [7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md) |
| $a_R$ | a non-needy person's cost of faking the tag | [7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md) |
| $H$, $w_i$ (7.3) | hours of ordeal; value of type $i$'s time | [7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md) |
| $v_i$ | value of an in-kind benefit to type $i$ | [7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md) |

**Module 8: fiscal federalism**

| Symbol | Means | First used |
|---|---|---|
| $\theta$ (8.1, 8.3) | taste for the local public good in $\theta\ln g$ or $\theta\ln G$ | [8.1](lessons/08-01-tiebout-voting-with-your-feet.md) |
| $y$ (8.1) | a resident's income | [8.1](lessons/08-01-tiebout-voting-with-your-feet.md) |
| $g_j$, $T_j$ (8.1) | town $j$'s service level per resident (not a welfare weight); its head tax | [8.1](lessons/08-01-tiebout-voting-with-your-feet.md) |
| $N_j$, $n_j$ | town $j$'s residents and their number | [8.1](lessons/08-01-tiebout-voting-with-your-feet.md) |
| $P$ (8.1) | house price | [8.1](lessons/08-01-tiebout-voting-with-your-feet.md) |
| $R$, $B$, $T$ (8.1) | a house's annual rental value; services' annual value to the marginal buyer; annual tax | [8.1](lessons/08-01-tiebout-voting-with-your-feet.md) |
| $r$ (8.1) | discount rate | [8.1](lessons/08-01-tiebout-voting-with-your-feet.md) |
| $\tau$ (8.1) | ad valorem property-tax rate | [8.1](lessons/08-01-tiebout-voting-with-your-feet.md) |
| $h$, $\bar h$ (8.1) | house value; the zoning floor | [8.1](lessons/08-01-tiebout-voting-with-your-feet.md) |
| $G_i$, $\mathrm{MB}_i$ (8.2) | jurisdiction $i$'s local public good; total marginal benefit over all users | [8.2](lessons/08-02-assignment-spillovers-and-grants.md) |
| $\bar G$ | a uniform central level | [8.2](lessons/08-02-assignment-spillovers-and-grants.md) |
| $a_i$, $\bar a$ (8.2) | intercept of linear $\mathrm{MB}_i=a_i-G$; its mean | [8.2](lessons/08-02-assignment-spillovers-and-grants.md) |
| $\sigma$ (8.2) | share of marginal benefit accruing outside the town | [8.2](lessons/08-02-assignment-spillovers-and-grants.md) |
| $m$ | matching rate: the center's share of each unit | [8.2](lessons/08-02-assignment-spillovers-and-grants.md) |
| $L$ (8.2) | lump-sum grant | [8.2](lessons/08-02-assignment-spillovers-and-grants.md) |
| $Y$, $x$ (8.2) | the community's income and private consumption | [8.2](lessons/08-02-assignment-spillovers-and-grants.md) |
| $G_m$, $G_L$ | the public good chosen under matching and under an equal-cost lump sum | [8.2](lessons/08-02-assignment-spillovers-and-grants.md) |
| $\bar k$, $k_i$ | capital owned by each town's residents; capital employed in town $i$ | [8.3](lessons/08-03-tax-competition.md) |
| $f(k)=ak-\tfrac b2k^2$ (8.3) | output; $a$, $b$ its parameters | [8.3](lessons/08-03-tax-competition.md) |
| $t_i$, $\bar t$ (8.3) | source tax per unit of capital employed; the average | [8.3](lessons/08-03-tax-competition.md) |
| $\rho$ (8.3) | the common net return on capital | [8.3](lessons/08-03-tax-competition.md) |
| $x_i$, $G_i$, $R_i$ (8.3) | residents' private consumption; the public good $t_ik_i$; revenue | [8.3](lessons/08-03-tax-competition.md) |
| $t^N$, $t^*$, $t^L$ | Nash, coordinated and competing-Leviathan taxes | [8.3](lessons/08-03-tax-competition.md) |

## Definitions

One entry per concept, in order of first appearance. Plain-English line first, then the formal statement in the lessons' notation, then where it is introduced and reused.

### Public good

A good that is non-rival (my use does not reduce yours) and non-excludable (nobody can be kept from it), so everyone consumes the same quantity $G$.

$$u_i = u_i(x_i, G)\ \text{ for every } i,\ \text{same } G$$

The definition and the quasilinear case are [`grad-micro` 6.4](../grad-micro/lessons/06-04-public-goods.md)'s; this course drops quasilinearity (1.1), adds private giving (1.2) and asks how anyone learns the valuations (1.3). Real goods are mostly [impure](#impure-public-good) or [club goods](#club-good); local public goods are Module 8's.

*Introduced:* [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) · also [1.2](lessons/01-02-voluntary-provision-and-crowding-out.md), [1.3](lessons/01-03-revealing-demand-for-public-goods.md), [8.1](lessons/08-01-tiebout-voting-with-your-feet.md)

### Samuelson rule

At an efficient allocation, what everyone together would give up for one more unit of the public good equals what it costs to make.

$$\sum_{i=1}^{n}\mathrm{MRS}^i_{Gx}=\mathrm{MRT}=\frac{F_G}{F_X}$$

Samuelson (1954, *REStat*). It holds at *every* Pareto optimum, and each $\mathrm{MRS}^i$ is evaluated at $i$'s own $x_i$: with income effects that differ across people there is one efficient $G$ per point on the utility frontier, and only the [Bergstrom-Cornes](#bergstrom-cornes-condition) form gives a single number. The course's other forms:

- Quasilinear (1.3): $\sum_i b_i'(G^*)=c$.
- Voluntary provision (1.2): each Nash contributor sets his *own* $\mathrm{MRS}_i=\mathrm{MRT}$, so the sum exceeds the MRT and $G$ is underprovided.
- Distorting taxes (2.4): the [modified Samuelson rule](#modified-samuelson-rule) $\sum_i\mathrm{MRS}_i=\mathrm{MCPF}\cdot\mathrm{MRT}$; lump-sum finance is the case $\mathrm{MCPF}=1$.
- Across jurisdictions (8.2): the sum runs over *all* beneficiaries, residents and outsiders, and equals $c$.
- Tax competition (8.3): coordinated capital taxation restores $\sum\mathrm{MRS}=\mathrm{MRT}$, in the model $\theta/G=1$.
- Tiebout (8.1): a homogeneous town's favourite $g=\theta/c$ meets it (mean MRS $=c$).

*Introduced:* [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) · also [1.2](lessons/01-02-voluntary-provision-and-crowding-out.md), [1.3](lessons/01-03-revealing-demand-for-public-goods.md), [2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md), [8.1](lessons/08-01-tiebout-voting-with-your-feet.md), [8.2](lessons/08-02-assignment-spillovers-and-grants.md), [8.3](lessons/08-03-tax-competition.md)

### Bergstrom Cornes condition

The efficient amount of a public good is the same for every distribution of income exactly when willingness to pay rises with income at the same rate for everyone.

$$u_i=A(G)\,x_i+B_i(G),\quad A \text{ common}$$

Bergstrom and Cornes (1983, *Econometrica*). Then $\sum_i\mathrm{MRS}^i=\big(A'(G)X+\sum_iB_i'(G)\big)/A(G)$, which depends only on total $X$. Quasilinearity is $A\equiv1$; identical Cobb-Douglas $\ln x_i+\alpha\ln G$ is in the class too, since $x_iG^{\alpha}$ represents the same preferences. What breaks it is income effects that *differ*, as with $\alpha=(1,\tfrac14)$ in 1.1's Example 1, where $G^*$ runs from 20 to 50 as person 1's share goes from 0 to 1.

*Introduced:* [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md)

### Lindahl prices

Personalized per-unit prices, each person's equal to her own marginal willingness to pay, that add up to marginal cost: they support the Samuelson optimum if people tell the truth, and they do not.

$$p_i=b_i'(G^*),\qquad \sum_i p_i=c$$

Defined in [`grad-micro` 6.4](../grad-micro/lessons/06-04-public-goods.md). 1.3 shows the manipulation: a resident who reports $b_i'(G)-k$ gains at the margin,

$$U_i'(0)=-G\,p_i'(0)>0,$$

because the fall in $G$ costs her nothing to first order (at the truth her marginal benefit equals her price) while her lower price saves money on every unit. $G$ does fall; her loss from that is second order. In 1.3's Example 1 the lie lowers $G$ from 4 to 3, raises her payoff from 8 to 10.5 and destroys 1 of total surplus.

*Introduced:* [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) · also [1.3](lessons/01-03-revealing-demand-for-public-goods.md)

### Impure public good

A joint product with a private side and a public side: a vaccination protects you and lowers everyone else's risk of infection.

$$\text{one purchase}\ \to\ \text{private benefit}+\text{public benefit}$$

*Introduced:* [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md)

### Club good

A good that is excludable but congestible, so partly rival: a pool is shared, but each extra swimmer crowds the rest, which gives the club an optimal size.

$$\min_n\ \frac{C}{n}+h(n)\ \Rightarrow\ n\,h'(n)=\frac{C}{n}$$

Buchanan (1965, *Economica*). Admit members until the congestion a newcomer imposes on everyone, $n\,h'(n)$, equals the cost share he takes over, $C/n$. Charged as an entry toll, that congestion raises $n\cdot n\,h'(n)=C$: an efficiently priced club pays for itself. If the facility's size is chosen too, members' summed MRS equals the MRT. In [8.1](lessons/08-01-tiebout-voting-with-your-feet.md) Tiebout's optimal community size is the club size, and towns at minimum average cost have constant cost per resident.

*Introduced:* [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) · also [8.1](lessons/08-01-tiebout-voting-with-your-feet.md)

### Contributor set

The people who give a positive amount in the Nash equilibrium of voluntary provision; only their wealth sets $G$, and the set must be self-consistent.

$$G=\frac{P+W_C}{k+1},\qquad C=\{\,i:\ w_i>G\,\}$$

For $u_i=\ln x_i+\ln G$, where a contributor gives $g_i=\max\{0,\tfrac12(w_i-G_{-i})\}$ and ends with $x_i=G$. Everyone inside must be richer than $G$, everyone outside not. Bergstrom, Blume and Varian (1986, *Journal of Public Economics*): with both goods normal the equilibrium exists and is unique, and with identical preferences the contributors are the richest. The boundary of this set is where [Warr neutrality](#warr-neutrality) and one-for-one [crowding out](#crowding-out) fail.

*Introduced:* [1.2](lessons/01-02-voluntary-provision-and-crowding-out.md)

### Warr neutrality

Redistribution among people who all keep contributing changes nothing real: their gifts adjust to undo it.

$$\text{transfer within } C,\ C \text{ unchanged}\ \Rightarrow\ G,\ x_i \text{ unchanged}$$

Warr (1983, *Economics Letters*). The equilibrium depends on contributors' wealth only through $W_C$; no functional form is needed. It fails when money crosses the edge of the [contributor set](#contributor-set) (to a non-contributor, $G$ falls whenever $G$ is normal; with log utility by $1/(k+1)$ per dollar) and under [warm glow](#warm-glow). The quasilinear case $x_i+\theta_i\ln G$ is flat for a different reason: no income effects, so even boundary-crossing transfers leave $G$ alone. 1.2 calls it Ricardian equivalence in another costume: both need an interior choice that absorbs the transfer.

*Introduced:* [1.2](lessons/01-02-voluntary-provision-and-crowding-out.md)

### Crowding out

Public provision displaces private giving: one-for-one when it is financed by lump-sum taxes on contributors, partially otherwise.

$$\Delta\Big(\sum_i g_i\Big)=-P$$

when $P$ is financed by lump-sum taxes on contributors, each below his gift.

Roberts (1984, *JPE*). This is a Warr redistribution, so $G$ is unchanged. Financed by taxing non-contributors it is a boundary-crossing transfer: $G$ rises and giving falls by only $k/(k+1)$ per dollar (log utility). Once $P$ exceeds what contributors would give, they stop giving and each further dollar raises $G$. With [warm glow](#warm-glow) crowd-out is partial. Measured crowd-out of government grants to charities is typically well below one-for-one, partly through charities cutting their own fundraising.

*Introduced:* [1.2](lessons/01-02-voluntary-provision-and-crowding-out.md)

### Warm glow

Impure altruism: people enjoy their own act of giving, not only the total provided, so a public dollar is not a perfect substitute for one's own gift.

$$u_i=u_i(x_i,\,G,\,g_i)$$

Andreoni (1990, *Economic Journal*). Crowd-out becomes partial and Warr neutrality fails. For one donor with wealth 90 and $u=\ln x+\ln G+\ln g$ at $P=0$ ($x=30$, $g=60$), each grant dollar displaces $5/6$ of a dollar of giving.

*Introduced:* [1.2](lessons/01-02-voluntary-provision-and-crowding-out.md)

### Pivot mechanism

Build a yes-or-no project iff reported net values sum to at least zero, and charge each person the loss her report imposes on everyone else, which is zero unless she flips the decision.

$$t_i=\max\Big(\sum_{j\ne i}\hat v_j,\,0\Big)-\Big(\sum_{j\ne i}\hat v_j\Big)\mathbf 1\{\text{build}\}$$

Clarke (1971, *Public Choice*); Groves (1973, *Econometrica*) for the general family. Truth is a dominant strategy ([`grad-game-theory` 5.3](../grad-game-theory/lessons/05-03-dominant-strategy-mechanisms-vcg.md)) and the *decision* is efficient. Every $t_i\ge0$, so it collects a surplus, and rebating it to the payers restores the incentive to lie: it must be burned or paid to an outsider, and it can exceed the gain from building.

*Introduced:* [1.3](lessons/01-03-revealing-demand-for-public-goods.md)

### Green Laffont theorem

On a rich enough set of preferences, the only efficient mechanisms with dominant-strategy truth-telling are Groves mechanisms, and none of them balances the budget in every state.

$$\text{efficient}+\text{DSIC}\ \Rightarrow\ \text{Groves}\ \Rightarrow\ \text{not budget balanced}$$

Green and Laffont (1977, *Econometrica*) give the characterization; 1.3 calls the budget impossibility "the standard impossibility that carries their names". Never-build is budget balanced and truthful, so the theorem needs *efficient*.

*Introduced:* [1.3](lessons/01-03-revealing-demand-for-public-goods.md)

### Expected externality mechanism

Pay each person the expected value her report creates for everyone else, funded equally by the others: truth-telling is optimal on average and the budget balances exactly, but some types may prefer not to take part.

$$\xi_i(\hat\theta_i)=\mathbb E_{\theta_{-i}}\Big[\sum_{j\ne i}v_j\big(x^*(\hat\theta_i,\theta_{-i}),\theta_j\big)\Big]$$

$$t_i=\xi_i(\hat\theta_i)-\frac{1}{n-1}\sum_{j\ne i}\xi_j(\hat\theta_j)$$

d'Aspremont and Gerard-Varet (1979, *Journal of Public Economics*), AGV; types independent. Her expected payoff from a report is expected *total* surplus, so truth is a Bayesian best response against truthful others; what she pays depends only on others' reports. Transfers sum to zero in every state. Interim participation can fail: in 1.3's playground (net values $+5$ or $-3$) the L type expects $-0.75$, and no efficient, Bayesian-truthful, budget-balanced rule keeps both L types willing (participation needs $D\ge6$, truth-telling $D\le5$). That is Myerson-Satterthwaite ([`grad-game-theory` 5.5](../grad-game-theory/lessons/05-05-limits-of-efficient-design.md)) in miniature.

*Introduced:* [1.3](lessons/01-03-revealing-demand-for-public-goods.md)

### Bowen equilibrium

Split the cost equally and let people vote on $G$: the median favourite wins, and it is efficient only when the mean marginal valuation equals the median one.

$$b_i'(G_i)=\frac{c}{n},\qquad \text{efficient iff}\ \frac1n\sum_i b_i'(G_m)=b_m'(G_m)$$

Bowen (1943, *QJE*). Preferences over $G$ are single-peaked, so $G_m$ beats every alternative pairwise ([`grad-micro` 6.5](../grad-micro/lessons/06-05-social-choice-welfare.md)). With a right-skewed distribution of valuations the mean exceeds the median and the vote underprovides. The failure is intensity, not strategy: sincere voting is dominant in a pairwise vote. In [8.1](lessons/08-01-tiebout-voting-with-your-feet.md), inside a homogeneous Tiebout town median equals mean MRS, so the Bowen vote is efficient.

*Introduced:* [1.3](lessons/01-03-revealing-demand-for-public-goods.md) · also [8.1](lessons/08-01-tiebout-voting-with-your-feet.md)

### Tax incidence

Who ultimately bears a tax once prices and factor returns adjust (economic incidence), as opposed to who legally remits it ([statutory incidence](#statutory-incidence)).

$$\text{buyers' burden}=dp^d,\qquad \text{sellers' burden}=-dp^s$$

In partial equilibrium (2.1) the less elastic side bears more; see the [incidence formula](#incidence-formula). In general equilibrium (2.2) a tax on one factor in one sector spreads through factor markets, and burdens are measured with national income as the unit of account, so capital's and labor's losses sum to the revenue exactly (the [Harberger model](#harberger-model)). In the long-run Ramsey steady state of [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md) capital supply is perfectly elastic at the after-tax return, so a capital tax falls on wages to first order, plus a Harberger triangle.

*Introduced:* [2.1](lessons/02-01-partial-equilibrium-incidence.md) · also [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md), [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md)

### Incidence formula

In a competitive market, buyers' share of a small tax is the supply elasticity over the sum of the two elasticities' magnitudes; the shares add to one and the less elastic side bears more.

$$\frac{dp^d}{dt}=\frac{\varepsilon_S}{\varepsilon_S-\varepsilon_D}$$

$$\frac{dp^s}{dt}=\frac{\varepsilon_D}{\varepsilon_S-\varepsilon_D}$$

With $\varepsilon_D<0$, $\varepsilon_S>0$, from differentiating $D(p^s+t)=S(p^s)$ at $t=0$. Limits: $\varepsilon_S\to0$ puts it all on sellers, $\varepsilon_S\to\infty$ all on buyers. It is a derivative, exact only locally: 2.1's 20 percent wedge with $\varepsilon_S=0.25$, $\varepsilon_D=-1$ gives buyers 22 percent against the formula's 20.

*Introduced:* [2.1](lessons/02-01-partial-equilibrium-incidence.md)

### Pass-through rate

The rise in the consumer price per unit of tax.

$$\rho\equiv\frac{dp^d}{dt}$$

Competition: $\rho=\varepsilon_S/(\varepsilon_S-\varepsilon_D)$. A monopolist with constant marginal cost $c$ sets $P+QP'=c+t$, so pass-through depends on the curvature of demand, with no supply elasticity in sight:

$$\rho=\frac{1}{2+QP''/P'}=\frac{1}{2-DD''/D'^2}$$

Linear demand: $\rho=\tfrac12$. Exponential demand $Ae^{-p/k}$: $\rho=1$. Constant elasticity $|\varepsilon_D|>1$: $\rho=|\varepsilon_D|/(|\varepsilon_D|-1)>1$ ([overshifting](#overshifting)). Pass-through is estimated from price responses across a tax change, typically by difference-in-differences.

*Introduced:* [2.1](lessons/02-01-partial-equilibrium-incidence.md)

### Statutory incidence

Who legally remits the tax; in a competitive market it has no effect on who bears it.

$$D(p^s+t)=S(p^s)$$

holds whichever side remits $t$.

The clearing condition is the same equation either way, so only the size of the wedge matters. The irrelevance needs prices to adjust freely and both sides to respond to the whole wedge whichever side is billed; it fails with wage floors, rigid contracts or salience. A payroll tax "split half and half" is borne according to labor supply and demand elasticities.

*Introduced:* [2.1](lessons/02-01-partial-equilibrium-incidence.md)

### Ad valorem and unit taxes

A unit tax charges $t$ per unit; an ad valorem tax takes a share $\tau$ of the consumer price. In competition they are the same tax written two ways; under monopoly they part company.

$$\text{unit: } p^d=p^s+t\qquad \text{ad valorem: } p^s=(1-\tau)p^d$$

Competition: identical equilibria with $t=\tau p^d$. Monopoly: at the same price and output ($t=c\tau/(1-\tau)$) the ad valorem tax raises more revenue, because it also taxes the markup:

$$\frac{\tau p}{t}=\frac{p(1-\tau)}{c}>1$$

Equivalently, for the same revenue the ad valorem tax leaves a lower price (Suits and Musgrave 1953, *QJE*). In competition $p(1-\tau)=c$ and the ratio is one.

*Introduced:* [2.1](lessons/02-01-partial-equilibrium-incidence.md)

### Overshifting

Pass-through above one: the consumer price rises by more than the tax.

$$\rho>1\iff \ln D(p)\ \text{convex in } p\ \ (\text{monopoly, constant } c)$$

A monopolist overshifts when demand is log-convex (constant elasticity: $\rho=|\varepsilon_D|/(|\varepsilon_D|-1)$, 1.5 when $|\varepsilon_D|=3$), passes on exactly the tax when it is log-linear, and less when it is log-concave (linear demand). It needs no collusion. Weyl and Fabinger (2013, *JPE*) extend the curvature logic to oligopoly and general costs. A competitive industry with flat cost passes on exactly 1.

*Introduced:* [2.1](lessons/02-01-partial-equilibrium-incidence.md)

### Harberger model

Two competitive sectors share a fixed stock of capital and labor that move freely between them, and capital is taxed in one sector only: the tax spreads to all capital, and to labor, through factor markets.

$$\hat r-\hat w=-\frac{N}{D}\,d\tau$$

Harberger (1962, *JPE*). CRS technologies $X=F(K_X,L_X)$, $Y=G(K_Y,L_Y)$; X pays $r(1+\tau)$ per unit of capital; revenue $\tau rK_X$ is spent as consumers spend; identical homothetic preferences. With national income as unit of account,

$$N=E\,\theta_{KX}(\gamma_K-\gamma_L)+\sigma_X(\gamma_K\theta_{LX}+\gamma_L\theta_{KX})$$

$$b_K=\theta_K+(1-\theta_K)\,\frac{-(\hat r-\hat w)}{\gamma_K\,d\tau}$$

and $D>0$ is in [Incidence and pass-through](#incidence-and-pass-through). $N$'s first term is the [output effect](#output-effect), its second the [factor substitution effect](#factor-substitution-effect); $\sigma_Y$ only dampens. If $r/w$ does not move the burden spreads like a flat income tax; capital bears over 100 percent exactly when $r/w$ falls by more than $\gamma_K\,d\tau$. All Cobb-Douglas ($\sigma_X=\sigma_Y=E=1$): $D=1$, $N=\gamma_K$, and $b_K=1$ for any intensities and any finite tax. With CES ($\sigma=0.5$, $E=2$) and a 25 percent tax, capital bears 121 percent when X is capital-intensive and 45 percent when it is labor-intensive.

*Introduced:* [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md)

### Output effect

The taxed sector's price rises and demand shifts to the untaxed sector; this lowers $r/w$ if the taxed sector is capital-intensive and raises it if it is labor-intensive.

$$E\,\theta_{KX}(\gamma_K-\gamma_L)$$

It is why labor-intensity of the taxed sector pushes burden *onto* labor. A cousin of Stolper-Samuelson.

*Introduced:* [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md)

### Factor substitution effect

The taxed sector swaps labor for the now dearer capital, and the capital it sheds must be absorbed by the untaxed sector at a lower return: this always lowers $r/w$.

$$\sigma_X(\gamma_K\theta_{LX}+\gamma_L\theta_{KX})$$

*Introduced:* [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md)

### Partial factor tax

A tax on a factor in some uses only, such as the corporate income tax on capital in incorporated firms; mobility spreads it to all capital.

$$\tau \text{ on } K_X \text{ only}\ \Rightarrow\ \hat r<0 \text{ for all capital}$$

Harberger calibrated his model to the US and concluded capital as a whole bears about the full corporate tax, holding the capital stock fixed and the economy closed. Why an optimal system should not tax an input in one sector only is the [production efficiency](#production-efficiency) argument of [4.3](lessons/04-03-production-efficiency-diamond-mirrlees.md).

*Introduced:* [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md) · also [4.3](lessons/04-03-production-efficiency-diamond-mirrlees.md)

### Open economy incidence

In a small open economy capital's net return is pinned at the world rate, so a source tax on capital cannot stay on capital owners and falls on the immobile factors.

$$\text{net return}=\text{world rate}\ \Rightarrow\ \text{burden on labor, land}$$

Harberger (1995) argued labor could bear more than the whole corporate tax. In [8.3](lessons/08-03-tax-competition.md)'s tax-competition model a source tax is borne by residents (immobile factor plus own-capital income): $dx_i/dt_i=-\bar k$ at the symmetric point.

*Introduced:* [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md) · also [8.3](lessons/08-03-tax-competition.md)

### Excess burden

What a tax costs taxpayers beyond the revenue it raises: a pure loss, zero for a lump-sum tax.

$$\mathrm{EB}=\mathrm{EV}-R$$

$$\mathrm{EB}=\int_{P_0}^{P_1}h(s,u_1)\,ds-(P_1-P_0)\,h(P_1,u_1)$$

The course's convention is the [equivalent variation](#equivalent-variation); $R=\tau p\,h(P_1,u_1)$. It is the triangle under the *compensated* curve at the new utility, second order in the tax, so 2.2 ignores it in first-order incidence. Approximated by the [Harberger triangle](#harberger-triangle). With quasilinear preferences (2.4) $\mathrm{DWL}=V(0)-V(\tau)-R(\tau)$. Later uses: the Ramsey problem minimizes total excess burden subject to revenue (4.1); in Atkinson-Stiglitz (6.1) it is the revenue freed, $p\cdot x_i-e(p,V(q,B_i))$, when a commodity or savings tax is replaced by a compensating income-tax change.

*Introduced:* [2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md) · also [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md), [2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md), [4.1](lessons/04-01-the-ramsey-rule.md), [6.1](lessons/06-01-atkinson-stiglitz.md)

### Equivalent variation

The most a consumer would pay, at the old prices, to escape a price change; this course's convention for excess burden.

$$\mathrm{EV}=m-e(P_0,u_1)$$

It compares every policy at the same prices $P_0$. For a lump-sum tax $T$, $\mathrm{EV}=T$.

*Introduced:* [2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md)

### Compensating variation

The payment a consumer would need, at the new prices, to be as well off as before.

$$\mathrm{CV}=e(P_1,u_0)-m$$

Measured on $h(\cdot,u_0)$ with revenue at $h(P_1,u_0)$. It differs from the EV whenever there are income effects; the two answer different questions and neither is "the" true number. Under quasilinearity EV = CV = the consumer-surplus loss.

*Introduced:* [2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md)

### Harberger triangle

The second-order approximation to excess burden: it grows with the square of the rate and with the compensated elasticity and the size of the base.

$$\mathrm{EB}\approx\tfrac12\,\tau^2\,|\varepsilon^c|\,p\,x$$

For an ad valorem tax $\tau$ with fixed producer price $p$; $px$ is spending at producer prices. $\mathrm{EB}(0)=\mathrm{EB}'(0)=0$, with $\mathrm{EB}'(\tau)=-\tau p^2\,\partial h/\partial P$, so the first unit of tax is almost free. The error is third order: for 2.3's constant-elasticity good ($\varepsilon=-1.2$) doubling the rate from 10 to 20 percent multiplies the exact loss by 3.5, not 4. Same formula for a factor, with $\varepsilon^c>0$ for labor supply. With upward-sloping supply add a producer side, $\tfrac12 t\,\Delta x$. In [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md) the uniform standard's excess cost is the same kind of triangle between back-to-back MAC curves, quadratic in the misallocation.

*Introduced:* [2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md) · also [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md)

### Lump sum tax

A fixed charge that no behavior can change; it moves no relative price, so it raises revenue with no excess burden.

$$u_1=V(P_0,m-T)\ \Rightarrow\ \mathrm{EV}=T=R,\ \ \mathrm{EB}=0$$

Its income effect alone wastes nothing. In [4.1](lessons/04-01-the-ramsey-rule.md), if a lump-sum tax were available $\theta=0$ and no commodity would be taxed; Ramsey assumes it is not.

*Introduced:* [2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md) · also [4.1](lessons/04-01-the-ramsey-rule.md)

### Compensated elasticity

The price elasticity along Hicksian demand, with the income effect removed (Slutsky): the right statistic for excess burden.

$$\varepsilon^c=\frac{P}{h}\frac{\partial h}{\partial P}$$

Negative for demand, positive for labor supply. 2.3's Cobb-Douglas worker ($u=c^{0.4}\ell^{0.6}$) has uncompensated hours elasticity 0 but compensated elasticity $0.4\,\ell/h=0.6$ at 40 hours, so a 20 percent wage tax that moves no hours still wastes 10.78 dollars a week on revenue of 160. Ramsey rates run on compensated elasticities (4.1): $\varepsilon^c_i=\varepsilon_i+s_i\eta_i$, with $s_i$ the budget share and $\eta_i$ the income elasticity. In 4.2 the Hicksian cross elasticity is $\varepsilon_{ki}=S_{ki}q_i/X_k$, and by homogeneity each good's compensated elasticities sum to zero over all prices, the wage included.

*Introduced:* [2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md) · also [4.1](lessons/04-01-the-ramsey-rule.md), [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md)

### Second best

When one efficiency condition cannot be met, meeting the others is no longer, in general, desirable.

$$\frac{\partial\,\mathrm{DWL}}{\partial t_k}=-t_k\frac{\partial x_k}{\partial q_k}-\sum_{j\ne k}t_j\frac{\partial x_j}{\partial q_k}$$

Lipsey and Lancaster (1956, *RES*). With quasilinear demands at fixed producer prices, raising $t_k$ costs its own triangle term plus, in every other taxed market, the old wedge times the quantity that market loses. A tax on a substitute of a taxed good *recovers* surplus (negative cross term); on a complement it adds loss. The second-best $t_k$ solves $t_k\,\partial x_k/\partial q_k=-\sum_{j\ne k}t_j\,\partial x_j/\partial q_k$: tax substitutes of taxed goods, subsidize complements. 2.4's tea-coffee example: the first coffee tax has $\mathrm{MCPF}=10/11$, and $t_1=0.5$ raises revenue from 7 to 12 while cutting deadweight loss from 1 to 0.75.

*Introduced:* [2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md)

### Marginal excess burden

The extra deadweight loss per extra dollar of revenue from raising one tax.

$$\mathrm{MEB}_k=\frac{\partial\,\mathrm{DWL}/\partial t_k}{\partial R/\partial t_k}$$

A ratio of margins, not the average burden $\mathrm{DWL}/R$: since the triangle grows with the square of the rate, the marginal exceeds the average (2.4: 0.5 against 0.15 at $\tau=0.4$, $e=0.5$).

*Introduced:* [2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md)

### Marginal cost of public funds

What taxpayers give up per extra dollar of revenue raised with a given tax: one plus the marginal excess burden, and equal to $\lambda$, the multiplier on the government budget.

$$\mathrm{MCPF}_k=\frac{x_k}{\partial R/\partial t_k}=1+\mathrm{MEB}_k$$

The course uses the **compensated** convention (taxpayer loss measured with compensated responses). With income effects conventions diverge, and in uncompensated ones the MCPF can fall below one (Ballard and Fullerton 1992, *JEP*); it can also be below one in the compensated convention when related markets are taxed (10/11 for a first tax on a substitute of a taxed good, 2.4). Infinite at the revenue peak; negative past it. For the constant-elasticity base $z=(1-\tau)^e$:

$$\mathrm{MCPF}(\tau)=\frac{1}{1-\dfrac{e\tau}{1-\tau}}$$

infinite at $\tau=1/(1+e)$. At an optimum every instrument has the same MCPF, the single $\lambda$ behind the Ramsey rule. Where else it appears:

- **3.1, 3.3**: the value of auction or carbon-tax revenue $\mu E$; the second-best Pigouvian tax is $\mathrm{MED}/\lambda$ in the benchmark, and there $\lambda$ equals 2.4's formula at the optimal wage tax.
- **4.1, 4.2**: the Ramsey multiplier; quasilinear, $\mathrm{MCPF}=1/(1-\theta)$.
- **5.1**: at the optimal linear tax (quasilinear), $\mathrm{MCPF}=1/\bar g$.
- **5.3**: top bracket, $\mathrm{MCPF}=(1-\tau)/(1-\tau-ae\tau)$; at the Saez optimum $\mathrm{MCPF}=1/g$.
- **7.1**: a per-contract subsidy $\sigma$ reaching $s^*$ has net welfare cost $(\lambda-1)\sigma s^*$.
- **7.2**: cited for the same private-response, public-budget logic as the [fiscal externality](#fiscal-externality).
- **8.2**: each grant dollar costs the center $\lambda$, so a grant outlay's excess burden is $(\lambda-1)$ times it.
- **8.3**: under tax competition the private MCPF $\bar k/\big(\bar k-t(n-1)/(nb)\big)$ exceeds 1 while the social MCPF is 1.

*Introduced:* [2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md) · also [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md), [3.3](lessons/03-03-pigou-in-a-second-best-world.md), [4.1](lessons/04-01-the-ramsey-rule.md), [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md), [5.1](lessons/05-01-the-linear-income-tax.md), [5.3](lessons/05-03-the-saez-formula.md), [7.1](lessons/07-01-adverse-selection-as-a-policy-problem.md), [7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md), [8.2](lessons/08-02-assignment-spillovers-and-grants.md), [8.3](lessons/08-03-tax-competition.md)

### Modified Samuelson rule

When public goods are paid for with distorting taxes, summed benefits must cover the cost times the price of raising the money.

$$\sum_i\mathrm{MRS}_i=\mathrm{MCPF}\cdot\mathrm{MRT},\qquad \lambda=\mathrm{MCPF}$$

From maximizing the money sum of utilities subject to $R(\tau)=\mathrm{MRT}\cdot G$. Assumes $G$ separable from the taxed activity (if $G$ raises the tax base, its net cost falls) and unweighted money sums (with welfare weights not all one, $\lambda$ carries distributional terms; Atkinson and Stern 1974, *RES*, add terms). Lump-sum finance gives the plain Samuelson rule. In [8.3](lessons/08-03-tax-competition.md) each competing town sets $\sum\mathrm{MRS}$ equal to its *private* MCPF times MRT.

*Introduced:* [2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md) · also [8.3](lessons/08-03-tax-competition.md)

### Revenue maximizing rate

The top of the Laffer curve: for a constant-elasticity base, the rate beyond which raising the rate loses revenue, and where the MCPF becomes infinite.

$$\tau^*=\frac{1}{1+e}\quad\text{for}\ z=(1-\tau)^e$$

In [5.1](lessons/05-01-the-linear-income-tax.md) it is the linear-tax optimum when $\bar g=0$ (maximin with zero earners). In [5.3](lessons/05-03-the-saez-formula.md) the top-bracket version is $1/(1+ae)$, and any top rate above it is Pareto-dominated.

*Introduced:* [2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md) · also [5.1](lessons/05-01-the-linear-income-tax.md), [5.3](lessons/05-03-the-saez-formula.md)

### Elasticity of taxable income

How much the tax base responds to the share of income people keep.

$$e=\frac{1-\tau}{z}\frac{dz}{d(1-\tau)}$$

In 2.4's constant-elasticity base $z=(1-\tau)^e$, from quasilinear utility $c-z^{1+1/e}/(1+1/e)$. In the linear tax (5.1), with income effects it is a budget-balanced mix of substitution and income effects, purely uncompensated at the revenue peak. 5.3: best available long-run estimates 0.12 to 0.40 (Saez, Slemrod and Giertz 2012, *JEL*); not immutable, since it depends on avoidance opportunities, so base broadening lowers it; Piketty, Saez and Stantcheva (2014) split it into labor supply, avoidance and bargaining. Not 7.2's $e$, which is an employment probability.

*Introduced:* [2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md) · also [5.1](lessons/05-01-the-linear-income-tax.md), [5.3](lessons/05-03-the-saez-formula.md)

### Marginal abatement cost

What it costs a source to abate one more ton; rising in how much it has already abated.

$$\mathrm{MAC}_i(a_i)=C_i'(a_i)$$

Linear case in 3.1: $\mathrm{MAC}_i=c_ia_i$. In 3.2 the aggregate curve is $c_0+Ca+\theta$, with slope $C$ and a cost shock $\theta$ seen only by firms.

*Introduced:* [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md) · also [3.2](lessons/03-02-prices-vs-quantities.md)

### Least cost abatement

A given total is abated at least cost when every source's last ton costs the same; one price, a uniform tax or a permit market, achieves it without the regulator knowing any firm's costs.

$$\min\sum_iC_i(a_i)\ \text{s.t.}\ \sum_ia_i=A\ \Rightarrow\ \mathrm{MAC}_i(a_i)=\mu\ \ \forall i$$

$\mu=d(\min\text{ cost})/dA$ is the shadow price of the target. A tax $t=\mu$ gets there because each firm sets $\mathrm{MAC}_i=t$. Linear case: $a_i=\mu/c_i$, $\mu=A/\sum_i(1/c_i)$, least cost $\mu A/2$. Baumol and Oates (1971, *Swedish Journal of Economics*) made it the benchmark for comparing instruments.

*Introduced:* [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md) · also [3.2](lessons/03-02-prices-vs-quantities.md)

### Tradable permits

Cap-and-trade: issue a fixed number of one-ton permits and let firms trade them; the permit price does the tax's job and the cap hits the target by construction.

$$\min_{a_i}\ C_i(a_i)+p\,(\bar e_i-a_i-\omega_i)\ \Rightarrow\ \mathrm{MAC}_i=p=\mu$$

$E=\sum_i\bar e_i-A$ permits; price-taking firms. Montgomery (1972, *JET*): least cost for *any* initial allocation $\omega$, since $\omega_i$ enters only as the lump sum $-p\,\omega_i$ (Coase with the transaction costs removed by a market). Auctioned permits raise $\mu E$ for the government; grandfathered ones hand $\mu E$ to incumbents. Exceptions to allocation irrelevance: market power in the permit market (Hahn 1984, *QJE*) and allocations updated on a firm's own future emissions or output. Equivalence with a tax needs certainty; with cost uncertainty see the [Weitzman rule](#weitzman-rule).

*Introduced:* [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md) · also [3.2](lessons/03-02-prices-vs-quantities.md)

### Uniform standard

Every source must abate the same amount; marginal costs then differ whenever costs differ, so total cost exceeds the least cost.

$$a_i=A/N\ \ \forall i$$

Linear case: cost ratio to least cost is $\bar c\cdot\overline{(1/c)}\ge1$ (mean slope times mean inverse slope). It equalizes tons, not cost per ton. In 3.1's Example 1 it costs 686 against 504.

*Introduced:* [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md)

### Weitzman rule

When abatement costs are uncertain and the regulator must commit first, a price beats a quantity exactly when the marginal cost curve is steeper than the marginal benefit curve.

$$\Delta\equiv\mathbb EL_Q-\mathbb EL_P=\frac{\sigma^2(C-D)}{2C^2}$$

Weitzman (1974, *RES*). Linear model, slopes as magnitudes; $\Delta>0$ means prices win. The pieces:

$$\mathbb EL_Q=\frac{\sigma^2}{2(C+D)},\qquad \mathbb EL_P=\frac{\sigma^2D^2}{2C^2(C+D)}$$

The tax lets abatement fall by $\theta/C$ after a cost shock, the ideal by $\theta/(C+D)$, the quota not at all. The tax's loss relative to the quota's is $D^2/C^2$. An additive benefit shock uncorrelated with costs drops out of $\Delta$. With correlation $\rho$ (Stavins 1996, *JEEM*), positive correlation favors quantities:

$$\Delta=\frac{\sigma_\theta^2(C-D)}{2C^2}-\frac{\rho\,\sigma_\eta\sigma_\theta}{C}$$

*Introduced:* [3.2](lessons/03-02-prices-vs-quantities.md)

### Stock pollutant

A pollutant whose damage depends on the accumulated stock (CO2), so one year's flow barely moves marginal damage: $D$ is small, which favors prices.

$$D\approx0\ \Rightarrow\ \mathbb EL_P\ll\mathbb EL_Q$$

3.2: with $C=2$, $\sigma=20$, $D=0.1$, the tax loses 0.24 against the cap's 95.2; a threshold pollutant with $D=8$ reverses it (320 against 20). Hoel and Karp (2002, *Resource and Energy Economics*): a higher discount rate or faster decay favors taxes. Newell and Pizer (2003, *JEEM*): prices dominate for climate.

*Introduced:* [3.2](lessons/03-02-prices-vs-quantities.md)

### Price collar

Permits with a price ceiling (a safety valve) and a price floor: a cap inside the band, a tax outside it.

$$\text{price}\in[\text{floor},\ \text{ceiling}]\ \Rightarrow\ \text{cap binds}$$

Roberts and Spence (1976, *Journal of Public Economics*): permits plus a penalty per ton of shortfall (the ceiling) and a subsidy per ton of over-compliance (the floor). Pure cap (infinite ceiling, zero floor) and pure tax (ceiling equals floor) are special cases, so the best collar weakly beats both. California pairs an auction reserve price with a ceiling; RGGI releases extra allowances at a trigger price.

*Introduced:* [3.2](lessons/03-02-prices-vs-quantities.md)

### Sandmo additivity

The dirty good's optimal tax is the tax it would bear as a revenue source anyway plus marginal damage scaled down by the MCPF, and the damage enters no other good's tax rule.

$$t_k=\frac{\lambda-1}{\lambda}\cdot\frac{x_k}{|x_k'|}+\frac{\mathrm{MED}}{\lambda}$$

Sandmo (1975, *Swedish Journal of Economics*), shown in 3.3 for quasilinear utility with independent demands; clean goods get $t_j=\frac{\lambda-1}{\lambda}\,x_j/|x_j'|$. The first term is the Ramsey (inverse-elasticity) term, the second the Pigouvian term. With $\lambda=1$, $t_k=\mathrm{MED}$. 3.3's Example 1: $t=80/7\approx11.43$ with $\mathrm{MED}=12$, $\lambda=1.2$ (Pigouvian 10 plus Ramsey $10/7$); a less elastic dirty good would push $t$ above MED.

*Introduced:* [3.3](lessons/03-03-pigou-in-a-second-best-world.md)

### Second best Pigouvian tax

With a pre-existing labor tax, goods weakly separable from leisure and a homothetic goods sub-utility, the optimal pollution tax is marginal damage divided by the MCPF, below MED whenever $\lambda>1$.

$$t^*=\frac{\mathrm{MED}}{\lambda}$$

Bovenberg and de Mooij (1994, *AER*); Bovenberg and Goulder (1996, *AER*). The derivation is a real-wage-neutral swap: raise $t$ by $dt$ and cut $\tau$ by $k\,dt$ ($k=D/L$), so labor supply and revenue do not move; what remains is substitution away from $D$, which saves $\mathrm{MED}$ per unit and loses $t$ of revenue worth $\lambda t$. The Ramsey term is zero here because separability and homotheticity make uniform goods taxation optimal. Not a theorem: an inelastic dirty good or a complement to leisure can put the tax above MED, and with an optimal nonlinear income tax the MCPF correction vanishes and $t^*=\mathrm{MED}$ (Jacobs and de Mooij 2015, *JEEM*).

*Introduced:* [3.3](lessons/03-03-pigou-in-a-second-best-world.md)

### Revenue recycling effect

The efficiency gain from using environmental-tax revenue to cut a distorting tax.

$$\text{recycling gain}\approx(\lambda-1)\times\text{revenue}$$

One of Parry's (1995, *JEEM*) three pieces, with the primary (Pigouvian) gain and the [tax interaction effect](#tax-interaction-effect). Grandfathered permits give it up and keep the interaction cost (Goulder, Parry and Burtraw 1997, *RAND Journal of Economics*).

*Introduced:* [3.3](lessons/03-03-pigou-in-a-second-best-world.md)

### Tax interaction effect

The loss because an environmental tax raises goods prices, cuts the real wage and shrinks the labor-tax base.

$$w=\frac{1-\tau}{P(t)}\ \downarrow\ \Rightarrow\ L\downarrow$$

In the benchmark it exceeds the [revenue recycling effect](#revenue-recycling-effect), by exactly the dirty base's erosion, which is why the optimal tax is below MED there. A gas tax is partly a wage tax in disguise.

*Introduced:* [3.3](lessons/03-03-pigou-in-a-second-best-world.md)

### Double dividend

The claim that one environmental tax reform buys a cleaner environment and a more efficient tax system; Goulder (1995, *International Tax and Public Finance*) split it in two.

$$\text{weak: } W_{\text{recycle}}>W_{\text{lump sum}}$$

$$\text{strong: } \text{gross cost}\le0$$

The weak form holds whenever $\lambda>1$; the strong form fails in the benchmark (3.3's Example 2: gross cost 3.25 against environmental benefit 6.70 per 1,000 dollars of earnings). Neither dividend is the case for the tax, which rests on net benefit.

*Introduced:* [3.3](lessons/03-03-pigou-in-a-second-best-world.md)

### Ramsey rule

To raise a given revenue with commodity taxes and no lump-sum tax, set rates so that the whole tax system cuts every good's compensated demand by the same proportion.

$$\frac{\sum_j t_j\,S_{ij}}{x_i}=-\theta\quad\text{for every } i$$

$$\theta=1-\frac{\alpha}{\lambda}-\sum_j t_j\frac{\partial x_j}{\partial m}$$

Ramsey (1927, *EJ*), on a problem Pigou set. From $\max V(q,m)$ s.t. $\sum_jt_jx_j=R$: the first-order condition equalizes every tax's MCPF,

$$\frac{\alpha\,x_i}{x_i+\sum_j t_j\,\partial x_j/\partial q_i}=\lambda,$$

and Slutsky plus symmetry turn it into the rule. Income effects all sit in the common $\theta$, so only substitution tells goods apart: the rule runs on compensated responses. First order in general; exact with linear demands. Equal proportional cuts, not equal rates. Special case: the [inverse elasticity rule](#inverse-elasticity-rule). Many households: the [many-person Ramsey rule](#many-person-ramsey-rule), with 4.1's rule the case $\delta_k=1$. The same logic across dates is tax smoothing in `economics-of-debt` 5.3.

*Introduced:* [4.1](lessons/04-01-the-ramsey-rule.md) · also [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md)

### Inverse elasticity rule

With independent demands and no income effects, each good's tax as a share of its consumer price is inversely proportional to its demand elasticity.

$$\frac{t_i}{q_i}=\frac{\theta}{|\varepsilon_i|},\qquad \theta=1-\frac1\lambda\in[0,1)$$

Quasilinear utility, no compensated cross effects; $\varepsilon_i$ is evaluated at the *taxed* price, so it is an equation to solve, not a closed form. $\theta$ rises from 0 at $R=0$ toward 1; at $\theta=1$ it is the monopolist's Lerner rule (revenue maximization, infinite MCPF). With equity weights (4.2), $\tau_k=t_k/q_k$:

$$\tau_k=\frac{1-\kappa\,\delta_k}{|\varepsilon_k|}$$

*Introduced:* [4.1](lessons/04-01-the-ramsey-rule.md) · also [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md)

### Ramsey Boiteux pricing

A regulated multiproduct firm that must cover a fixed cost should mark up each price by a common fraction of the monopoly markup: the Ramsey problem with markups in place of taxes.

$$\frac{P_i-c_i}{P_i}=\frac{k}{|\varepsilon_i|},\qquad k=\frac{\mu}{1+\mu}\in[0,1]$$

Boiteux (1956, *Econometrica*); Baumol and Bradford (1970, *AER*). $\mu$ is the multiplier on break-even; $k=0$ is marginal-cost pricing, $k=1$ monopoly. It is regulated third-degree price discrimination: captive (inelastic) customers carry more of the fixed cost (4.1's residential class pays 40 of 56).

*Introduced:* [4.1](lessons/04-01-the-ramsey-rule.md)

### Equity objection

The one-consumer Ramsey rule taxes inelastic goods most, and necessities are inelastic, so it can put the heaviest rates on budgets that are mostly necessities.

$$\text{one consumer}\ \Rightarrow\ \delta_k=1\ \text{for all } k$$

The rule minimizes excess burden for a representative consumer and cannot see who buys what. The many-person version (Diamond 1975) adds welfare weights; the weights are inputs.

*Introduced:* [4.1](lessons/04-01-the-ramsey-rule.md) · also [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md)

### Social marginal welfare weights

The value society puts on one more dollar in a given person's hands, relative to an average dollar (or, in Modules 5 and 7, to a dollar of public funds). Always an input, never a result of the course.

$$g_h=\frac{\beta^h}{\bar\beta},\qquad \beta^h=\frac{\partial W}{\partial v^h}\frac{\partial v^h}{\partial m^h}$$

Normalized to average one (the Saez convention). The course's other forms:

- **5.1:** $g_i=G'(u_i)\,u_{c,i}$ over its average; the income-weighted average $\bar g=\sum_ig_iz_i/\sum_iz_i=1+\mathrm{Cov}(g,z)/Z$.
- **5.2:** $\sum_i\pi_ig_i=1$; utilitarian with quasilinear utility gives $g=1$ for all (no redistribution); maximin gives $g_L=1/\pi_L$, $g_H=0$.
- **5.3:** $g$ on top earners is the value of their marginal dollar relative to a dollar of public revenue; $g=0$ is maximin, and gives the revenue-maximizing top rate.
- **5.4:** $\sum_ih_ig_i=1$ over occupations; maximin puts $g_0=1/h_0$ on non-workers and zero elsewhere.
- **7.3:** a program's value is $\sum_is_i[g_i(b-c_i)-b]$ with public funds valued at 1, so a universal grant is worth zero at the margin.

*Introduced:* [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md) · also [5.1](lessons/05-01-the-linear-income-tax.md), [5.2](lessons/05-02-the-mirrlees-problem.md), [5.3](lessons/05-03-the-saez-formula.md), [5.4](lessons/05-04-participation-and-the-eitc.md), [7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md)

### Many person Ramsey rule

With households who count differently, the tax system cuts compensated demand for a good by less the more of it is bought by households whose dollars are socially valuable.

$$-\frac{\sum_it_iS_{ki}}{X_k}=1-\sum_h\frac{x_k^h}{X_k}\,b^h$$

$$b^h=\frac{\beta^h}{\lambda}+\sum_it_i\frac{\partial x_i^h}{\partial m^h}$$

Diamond (1975, *Journal of Public Economics*). Dropping the revenue term in $b^h$ (exact under quasilinearity), $b^h=\kappa g_h$ with $\kappa=\bar\beta/\lambda$, and the rule becomes

$$-\frac{\sum_it_iS_{ki}}{X_k}=1-\kappa\,\delta_k$$

with $\delta_k$ the [distributional characteristic](#distributional-characteristic). In 4.2's Example 1 (equal elasticities, revenue 20) equal weights give a uniform 20 percent; $g=(1.6,0.4)$ gives transit $-7.2$ percent and restaurant meals 47.2 percent; maximin gives $-26.3$ and 66.3.

*Introduced:* [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md)

### Distributional characteristic

A good's average buyer welfare weight, each buyer weighted by her share of the good's consumption.

$$\delta_k=\sum_hg_h\,\frac{x_k^h}{X_k}$$

Following Feldstein (1972, *AER*). It is 1 when everyone buys the same amount and above 1 when high-$g$ households buy more. Consumption shares, not budget shares. In the linear income tax (5.1), $\bar g$ is the same object for labor income.

*Introduced:* [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md) · also [5.1](lessons/05-01-the-linear-income-tax.md)

### Corlett Hague

With leisure untaxable, tax more heavily the goods consumed with leisure: an indirect tax on leisure itself. Pure efficiency; it holds with one consumer.

$$\frac{\tau_1}{\tau_2}=\frac{\varepsilon_{20}+\varepsilon_{12}+\varepsilon_{21}}{\varepsilon_{10}+\varepsilon_{12}+\varepsilon_{21}}$$

Corlett and Hague (1953, *RES*). Three goods: leisure (good 0, price the wage, untaxed) and taxable goods 1 and 2; from the Ramsey rule in elasticities plus homogeneity $\varepsilon_{k0}+\varepsilon_{k1}+\varepsilon_{k2}=0$. With a positive denominator the closer complement to leisure (smaller $\varepsilon_{k0}$) gets the higher rate; rates are equal iff $\varepsilon_{10}=\varepsilon_{20}$. 4.2's vacations and childcare: ratio 2.2. In [6.1](lessons/06-01-atkinson-stiglitz.md), without separability a compensated tax on good $k$ changes the mimicker's utility by $-\mu_M(x_k^M-x_k^L)\,dt$: tax goods complementary with leisure, now as a screening device.

*Introduced:* [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md) · also [6.1](lessons/06-01-atkinson-stiglitz.md)

### Uniform commodity taxation

Conditions under which one rate on all goods is optimal, so the commodity-tax schedule need not redistribute.

$$\tau_1=\tau_2=\cdots=\tau_n$$

- One consumer, commodity taxes only: goods weakly separable from leisure with a homothetic sub-utility (then $\varepsilon_{10}=\varepsilon_{20}$).
- Many consumers with an optimal *linear* income tax: weak separability plus linear Engel curves (Deaton 1979, *Economics Letters*).
- With an optimal *nonlinear* income tax: weak separability alone ([Atkinson-Stiglitz](#atkinson-stiglitz), 6.1).

Applied to consumption at different dates it gives the zero long-run capital tax ([6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md)). In 3.3 it is why the Ramsey term vanishes in the Bovenberg-de Mooij benchmark.

*Introduced:* [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md) · also [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md)

### Production efficiency

At the optimal tax system, aggregate private plus public production lies on the frontier of the production set: consumer prices carry the wedges, and all firms face one producer price vector.

$$X(q^*)\in\partial\big(Y+\{z_g\}\big)$$

Consumer prices are second best; production is first best. An input tax, when firms can substitute, is a final-good tax plus pure waste (4.3's Example 1: deadweight loss 1.0, of which 0.6 is production waste). The corporate tax, capital taxed in one sector ([partial factor tax](#partial-factor-tax)), is a textbook violation.

*Introduced:* [4.3](lessons/04-03-production-efficiency-diamond-mirrlees.md)

### Diamond Mirrlees

If every good and factor can be taxed at its own rate and pure profits are zero or fully taxed, the optimal tax system is production-efficient, whatever the welfare weights.

$$\max_qW\big(V^1(q),\dots,V^H(q)\big)\ \text{s.t.}\ X(q)\in Y+\{z_g\}$$

Diamond and Mirrlees (1971, *AER*, two parts). Walras' law makes the budget redundant (revenue $(q-p)\cdot X=-p\cdot z_g$). Conditions: (i) every consumer price settable independently; (ii) no pure profits; (iii) some good whose small price change helps every household. Corollaries: no taxes on intermediate goods; no tariffs for a small open economy; public production at producer prices ([shadow prices](#shadow-prices)). Fails with untaxable final goods (an informal sector; Emran and Stiglitz 2005) or untaxed rents. 4.3's Example 2: when the informal good is unreachable, an input tax cuts the deadweight loss from 1.91 to 0.87.

*Introduced:* [4.3](lessons/04-03-production-efficiency-diamond-mirrlees.md)

### Shadow prices

Under the Diamond-Mirrlees conditions, the prices at which to value public production are producer prices, net of consumer taxes such as a reclaimable VAT.

$$\max_{z_g}\ p\cdot z_g$$

Cement that carries a reclaimable VAT costs the economy its net-of-tax price. The valuation rule behind public cost-benefit analysis. (In 3.1 the permit price is the shadow price of the cap; in 2.4 $\lambda$ that of the government budget.)

*Introduced:* [4.3](lessons/04-03-production-efficiency-diamond-mirrlees.md)

### Cascading turnover tax

A rate charged on every sale, firm-to-firm sales included, so tax is levied on tax: the effective rate grows with the length of the chain and firms gain by merging.

A production inefficiency: the decision to integrate is driven by tax.

*Introduced:* [4.3](lessons/04-03-production-efficiency-diamond-mirrlees.md)

### Value added tax

A tax collected at every stage on value added, with each firm credited for the tax on its inputs; on net it taxes only final consumption and leaves input prices untaxed.

$$\text{tax at a stage}=t\,(\text{sales}-\text{taxed inputs})$$

It respects production efficiency. With a large informal sector a VAT that informal firms escape can lower welfare relative to trade taxes (Emran and Stiglitz 2005).

*Introduced:* [4.3](lessons/04-03-production-efficiency-diamond-mirrlees.md)

### Linear income tax

A flat marginal rate on all earnings with the proceeds returned as an equal grant; the optimal rate trades the social value of the dollars taken against how fast the base leaks.

$$c_i=(1-\tau)z_i+R,\qquad R=\tau Z(1-\tau)$$

$$\tau^*=\frac{1-\bar g}{1-\bar g+e}$$

Quasilinear $u_i=c_i-h_i(z_i)$, $W=\int G(u_i)$; Sheshinski (1972, *RES*); the form is Piketty and Saez (2013, *Handbook of Public Economics*). $\bar g$ is the income-weighted average weight, so the tax is a many-person Ramsey problem with one taxed good. Landmarks: $\bar g=1$ (no inequality aversion) gives 0; $\bar g=0$ (maximin with zero earners) gives the Laffer rate $1/(1+e)$; if the worst-off earn, maximin has $\bar g=z_{\min}/Z>0$ and stops short of the peak. At the optimum $\mathrm{MCPF}=1/\bar g$. $\bar g$ and $e$ are evaluated *at the optimum*: the formula is a fixed point, not a plug-in (5.1's log objective: 0.413, where $\bar g=0.648$). Adding exogenous spending leaves the formula unchanged.

*Introduced:* [5.1](lessons/05-01-the-linear-income-tax.md)

### Demogrant

The equal lump-sum grant to everyone that a flat tax finances; together they are progressive in average rates though the marginal rate is flat.

$$R=\tau Z(1-\tau)$$

A universal basic income financed by one rate. 5.1's miniature: 10 percent on incomes of 20,000 and 80,000 dollars funds 5,000 each, a gain of 3,000 for one and a loss of 3,000 for the other.

*Introduced:* [5.1](lessons/05-01-the-linear-income-tax.md)

### Mirrlees problem

Choose a tax schedule when the government sees earnings but not the skill behind them: redistribution becomes a screening problem with the government as the screener.

$$\max\sum_i\pi_ig_iU_i\ \text{ s.t. }\ \sum_i\pi_i(y_i-c_i)\ge0\ \text{ and IC}$$

Mirrlees (1971, *RES*). Types $w_L<w_H$, $U_i=c-h(y/w_i)$ with $h(\ell)=\tfrac12\ell^2$; the government offers a menu $(y_i,c_i)$ (by the revelation principle nothing does better; by the [taxation principle](#taxation-principle) a menu is a schedule). No participation constraint: the budget pins the levels. The lump-sum skill tax is first best but unavailable, because High would imitate Low. Solution with $g_H<1$: $\lambda=1$, $\mu=\pi_H(1-g_H)$, High undistorted, Low taxed at the margin ([no distortion at the top](#no-distortion-at-the-top)). Stiglitz (1982, *JPubE*) traced the two-type model along the Pareto frontier. In [6.3](lessons/06-03-the-inverse-euler-equation.md) it is made dynamic: skill $\theta$ is revealed privately in period 2, after saving, and the planner picks $c_1$ and a period-2 menu $\{c_2(\theta),y(\theta)\}$ subject to resources and IC.

*Introduced:* [5.2](lessons/05-02-the-mirrlees-problem.md) · also [6.3](lessons/06-03-the-inverse-euler-equation.md)

### Taxation principle

Any incentive-compatible menu of income-consumption bundles can be implemented by a nonlinear tax schedule, so choosing a menu is choosing a schedule.

$$T(y)=y-c(y)$$

with off-menu incomes taxed prohibitively.

*Introduced:* [5.2](lessons/05-02-the-mirrlees-problem.md)

### Incentive compatibility

Each type weakly prefers its own bundle, judged with its own wage, to any other type's.

$$c_i-h(y_i/w_i)\ \ge\ c_j-h(y_j/w_i)$$

With redistribution toward low skill ($g_H<1$) High's downward IC binds; with $g_H>1$ Low's binds and High's labor is distorted upward. The government never learns who is skilled: it needs the skill distribution to design the menu, and each worker reveals his type by his choice. Later forms:

- **6.1:** the high type against the mimicker, $U(V(q,B_H),y_H/w_H)\ge U(V(q,B_L),y_L/w_H)$; the mimicker takes Low's net income $B_L$ with fewer hours.
- **6.3:** shifting every period-2 bundle by the same utility $\delta$ leaves IC intact (needs $u(c)-h(y/\theta)$ separability); that perturbation gives the inverse Euler equation.

*Introduced:* [5.2](lessons/05-02-the-mirrlees-problem.md) · also [6.1](lessons/06-01-atkinson-stiglitz.md), [6.3](lessons/06-03-the-inverse-euler-equation.md)

### Single crossing

In the income-consumption plane the skilled have flatter indifference curves (earning another dollar hurts them less), so two types' curves cross once; only adjacent downward ICs bind.

$$\frac{dc}{dy}=\frac{h'(y/w)}{w\,u'(c)}\ \text{ falls with } w$$

Quasilinear quadratic case: slope $y/w^2$. The same property as [`grad-micro` 5.3](../grad-micro/lessons/05-03-screening.md)'s screening.

*Introduced:* [5.2](lessons/05-02-the-mirrlees-problem.md)

### Implicit marginal tax rate

The rate a smooth schedule would need for a bundle to be the type's own choice: the wedge between a dollar of earnings and what it is worth to the worker in consumption.

$$\tau_i=1-\mathrm{MRS}_i,\qquad \mathrm{MRS}_i=\frac{h'(y_i/w_i)}{w_i\,u'(c_i)}$$

With $c-y^2/(2w^2)$: $\tau_i=1-y_i/w_i^2$; laissez-faire has $y_i=w_i^2$ and $\tau_i=0$. A slope, not the tax paid: in 5.2's Example 1 Low *receives* 0.64 at a 22 percent marginal rate, High pays 1.28 at zero.

*Introduced:* [5.2](lessons/05-02-the-mirrlees-problem.md)

### No distortion at the top

The type nobody wants to imitate (the top, when redistribution runs downward) works the efficient amount and faces a zero marginal rate.

$$\frac{\tau_L}{1-\tau_L}=\frac{\pi_H}{\pi_L}(1-g_H)\left(1-\frac{w_L^2}{w_H^2}\right),\qquad \tau_H=0$$

Two-type quadratic case, $y_H=w_H^2$. With $n$ types:

$$\frac{\tau_k}{1-\tau_k}=\frac{M_k}{\pi_k}\left(1-\frac{w_k^2}{w_{k+1}^2}\right),\quad M_k=\sum_{j>k}\pi_j(1-g_j)$$

5.2's three types $w=(2,3,4)$, maximin: rates $10/19$, $7/23$, 0. Sadka (1976, *RES*) and Seade (1977, *JPubE*): with a bounded skill distribution the marginal rate at the very top is zero. It is about one point (the highest earner of a bounded distribution), and the top earner still pays a large average tax; measured top incomes show a Pareto tail with no bound, which is why [5.3](lessons/05-03-the-saez-formula.md) sets a positive rate on a bracket. Reverse the weights ($g_H>1$) and the distortion lands on High.

*Introduced:* [5.2](lessons/05-02-the-mirrlees-problem.md) · also [5.3](lessons/05-03-the-saez-formula.md)

### Tax perturbation

Raise the rate slightly on part of the schedule and add up the mechanical, behavioral and welfare effects; at the optimum they sum to zero.

$$dM=(z_m-\bar z)\,d\tau,\qquad dW=-g\,dM$$

$$dB=-\frac{\tau}{1-\tau}\,e\,z_m\,d\tau$$

For a top bracket above $\bar z$ (5.3). Each lost dollar costs revenue $\tau$; the welfare loss is just the mechanical amount, by the envelope theorem. The same recipe gives the participation rule (5.4) and Baily-Chetty (7.2).

*Introduced:* [5.3](lessons/05-03-the-saez-formula.md)

### Saez formula

The optimal top marginal rate from three sufficient statistics: the tail's thickness, the elasticity of taxable income, and the weight on top earners' marginal dollar.

$$\tau^*=\frac{1-g}{1-g+a\,e}$$

Saez (2001, *RES*); no income effects. $g=0$ gives the revenue-maximizing top rate $1/(1+ae)$, and any rate above it is Pareto-dominated; $a=1$ ($\bar z=0$) recovers 5.1's linear rate. With income shifted to a base taxed at $t_s$ (5.3, P3), with shifted elasticity $e_s$:

$$\tau^*=\frac{1-g+a\,t_se_s}{1-g+ae}$$

5.4 cross-reference: Saez (2002)'s general bottom formula with both margins,

$$\frac{T_i-T_{i-1}}{c_i-c_{i-1}}=\frac{1}{\zeta_ih_i}\sum_{j\ge i}h_j\Big[1-g_j-\eta_j\frac{T_j-T_0}{c_j-c_0}\Big]$$

*Introduced:* [5.3](lessons/05-03-the-saez-formula.md) · also [5.4](lessons/05-04-participation-and-the-eitc.md)

### Pareto parameter

Mean top income over its excess above the threshold; for a Pareto tail it is the tail exponent and the same at every threshold. Lower $a$ means a thicker tail and a *higher* optimal top rate.

$$a=\frac{z_m}{z_m-\bar z}$$

Density $\propto z^{-(1+a)}$ gives $z_m=a\bar z/(a-1)$. $a\ge1$. US: about 2 in the 1970s, about 1.5 recently (Saez, Slemrod and Giertz 2012). Not abatement $a_i$ (Module 3).

*Introduced:* [5.3](lessons/05-03-the-saez-formula.md)

### Participation tax rate

The share of a job's earnings lost to taxes plus withdrawn benefits, relative to not working; it governs whether to work.

$$\tau_{p,i}=\frac{T_i-T_0}{z_i}$$

It can be negative (an in-work credit) while the marginal rate is positive: at 30,000 dollars in 5.4's figure the credit's marginal rate is +20 percent and its participation rate $-6.7$ percent.

*Introduced:* [5.4](lessons/05-04-participation-and-the-eitc.md)

### Extensive margin

The decision whether to work at all, as against the intensive margin of how much.

$$\eta_i:\ h_i \text{ on } c_i-c_0\qquad \zeta_i:\ h_i \text{ on } c_i-c_{i-1}$$

Saez (2002, *QJE*), pure extensive responses:

$$\tau_{p,i}=\frac{1-g_i}{1-g_i+\eta_i}$$

negative iff $g_i>1$: society values a dollar to the working poor above a dollar of revenue. Needs $1-g_i+\eta_i>0$. Maximin ($g$ on non-workers only) gives a *positive* participation tax, $1/(1+\eta)$. Distinct from the claim decision ([take-up](#take-up)) of 7.3.

*Introduced:* [5.4](lessons/05-04-participation-and-the-eitc.md)

### Negative income tax

A guaranteed grant at zero earnings, withdrawn at a phase-out rate as earnings rise; optimal when responses are on the intensive margin.

$$\frac{T_1-T_0}{c_1-c_0}=\frac{h_0\,(g_0-1)}{\zeta_1\,h_1}$$

Saez (2002). High when many are at zero ($h_0$ large) and few in the phase-out ($h_1$ small): the Mirrlees logic of distorting the bottom to target the transfer.

*Introduced:* [5.4](lessons/05-04-participation-and-the-eitc.md)

### EITC

The US Earned Income Tax Credit: zero at zero earnings, phased in with earnings, a plateau, then phased out; a negative participation tax rate with a positive marginal rate in the phase-out range.

$$\tau_{p}<0\ \text{ on the first job},\qquad T'(z)>0\ \text{ in the phase-out}$$

Eissa and Liebman (1996, *QJE*) and Meyer and Rosenbaum (2001, *QJE*): EITC expansions raised employment of single mothers (a large extensive response), with little measurable hours reduction among those already working. The credit moves the high marginal rate from the very bottom to the lower middle.

*Introduced:* [5.4](lessons/05-04-participation-and-the-eitc.md)

### Poverty trap

Phase-outs and taxes on the same earnings stack, and a benefit cliff can push the effective marginal rate above 100 percent: an intensive-margin cost of targeting.

$$20+30+7.65=57.65\ \text{percent}$$

5.4's family in the credit phase-out with a housing subsidy withdrawn at 30 percent and a 7.65 percent payroll tax keeps 4,235 of a 10,000-dollar raise.

*Introduced:* [5.4](lessons/05-04-participation-and-the-eitc.md)

### Weak separability

Goods enter utility only through a subutility that does not involve labor, so how people split spending among goods does not depend on how much they worked.

$$U\big(\phi(x),\,l\big)$$

A condition on the MRS among goods, not on goods and leisure being "unrelated": multiplicative Cobb-Douglas $x_1^{0.3}x_2^{0.3}\ell^{0.4}$ is weakly separable (the $x_1$-$x_2$ MRS is $x_2/x_1$ whatever $\ell$). Combined with a homothetic subutility it gives uniform commodity taxes for one consumer (4.2); with an optimal nonlinear income tax it is the Atkinson-Stiglitz condition. [6.3](lessons/06-03-the-inverse-euler-equation.md) keeps it and still finds a savings wedge.

*Introduced:* [6.1](lessons/06-01-atkinson-stiglitz.md)

### Atkinson Stiglitz

With an optimal nonlinear income tax, weak separability of goods from labor and identical tastes, differentiated commodity taxes, a savings tax included, are Pareto-dominated by uniform ones.

$$B_i'=e\big(p,V(q,B_i)\big)\ \Rightarrow\ V(p,B_i')=V(q,B_i)$$

Atkinson and Stiglitz (1976, *JPubE*). Proof (Laroque 2005, *Economics Letters*; Kaplow 2006, *JPubE*): replace the commodity taxes by these net incomes; every type's and every mimicker's utility is unchanged, so all ICs hold, and revenue rises by the commodity taxes' [excess burden](#excess-burden), $p\cdot x_i-B_i'\ge0$. Weight-free: it is a Pareto improvement. Uniform, not zero: a uniform tax is an income tax in disguise. Read "future consumption" for a good: do not tax saving. It covers the normal return for identical-taste workers; exceptions are [taste heterogeneity](#taste-heterogeneity), inherited wealth, and risky private skill: in [6.3](lessons/06-03-the-inverse-euler-equation.md) skill is revealed after saving and a positive [savings wedge](#savings-wedge) appears though separability holds. The Mirrlees Review (*Tax by Design*, 2011) read the evidence as favouring, broadly, exempting the normal return while taxing above-normal returns.

*Introduced:* [6.1](lessons/06-01-atkinson-stiglitz.md) · also [6.3](lessons/06-03-the-inverse-euler-equation.md)

### Intertemporal wedge

A tax on interest is a tax on future consumption; a constant capital income tax taxes consumption $T$ periods ahead at a rate that compounds without bound.

$$1+t_T=\left(\frac{1+r}{1+(1-\tau_K)\,r}\right)^{T}$$

6.1's two-period version: the consumer price of $c_2$ rises from $1/R$ to $1/R_{\text{net}}$, so a savings tax is a commodity tax on $c_2$. 6.2: at $r=6$ percent, $\tau_K=40$ percent gives $t_T$ of 2.3, 25.7, 58.1 and 214 percent at 1, 10, 20 and 50 years, crossing 100 percent near 30 years; halving $\tau_K$ roughly halves the wedge's growth rate without stopping it. A constant consumption tax has zero intertemporal wedge.

*Introduced:* [6.1](lessons/06-01-atkinson-stiglitz.md) · also [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md)

### Taste heterogeneity

If tastes such as patience differ with skill, the mimicker's basket differs from the low type's, and a commodity or savings tax can screen.

$$x^M(q,B_L)\ne x^L$$

Saez (2002, *JPubE*): a savings tax screens if the skilled are more patient, a subsidy if they are less. The general marginal effect of a compensated tax on good $k$ is $dV^M=-\mu_M(x_k^M-x_k^L)\,dt$.

*Introduced:* [6.1](lessons/06-01-atkinson-stiglitz.md)

### Chamley Judd

With linear taxes and commitment, if the optimal allocation converges to an interior steady state, the long-run tax on capital income is zero, even for a planner who cares only about workers.

$$1=\beta(1+r)\ \text{ and }\ 1=\beta\big(1+(1-\tau_K)r\big)\ \Rightarrow\ \tau_K=0$$

Chamley (1986, *Econometrica*); Judd (1985, *JPubE*), whose version splits capitalists who save from workers who do not. The planner's steady state needs the undistorted condition, the household's the after-tax one: uniform taxation of consumption at different dates. Household Euler equation: $u'(c_t)=\beta[1+(1-\tau_K)r_{t+1}]u'(c_{t+1})$. Conditional on convergence, full commitment (see the [capital levy](#capital-levy)) and infinitely lived savers with no borrowing limits or uninsured risk. Straub and Werning (2020, *AER*): in Judd's main model the long-run tax is positive and significant whenever the IES $1/\sigma<1$; with higher IES it goes to zero, possibly only after centuries; in Chamley's model the cap on capital taxes can bind forever.

*Introduced:* [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md)

### Capital levy

A tax on capital already in place changes no decision, so it is lump-sum: the committed date-0 planner levies initial capital as hard as allowed and then taxes capital income at zero.

$$\text{tax on } k_0\ =\ \text{lump-sum at date } 0$$

Chamley caps the levy rate. A constant consumption tax $t_c$ starting today is a labor income tax plus a one-time levy on initial wealth, each at rate $t_c/(1+t_c)$ (6.2, P2: a 10 percent consumption tax is 9.09 percent on each). At any later date the capital is sunk again, so a planner free to re-optimize wants another levy: [time inconsistency](#time-inconsistency).

*Introduced:* [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md)

### Time inconsistency

A plan optimal at date 0 that the same planner would abandon later, because a margin it had to respect is by then sunk.

$$\text{optimal at } 0\ \ne\ \text{optimal at } s>0$$

Kydland and Prescott (1977, *JPE*); the capital-levy case Fischer (1980, *Journal of Economic Dynamics and Control*). Savers who foresee re-optimization expect repeated levies, save less, and face a positive expected capital tax. The cure is commitment that is costly to reverse (a constitutional limit, a valued reputation). The fiscal twin of `grad-macro` 6.2's inflation bias; `economics-of-debt` 8.1 finds it in debt relief.

*Introduced:* [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md)

### Inverse Euler equation

With private, evolving skills, the constrained optimum equalizes the discounted resource cost of delivering a util across periods, not marginal utility.

$$\frac{1}{u'(c_1)}=\frac{1}{\beta R}\,\mathbb E\left[\frac{1}{u'\big(c_2(\theta)\big)}\right]$$

Rogerson (1985, *Econometrica*) for repeated moral hazard; Golosov, Kocherlakota and Tsyvinski (2003, *RES*) for private skills. Proof: raise period-2 utility by $\delta$ in every state and lower $u(c_1)$ by $\beta\delta$; IC is untouched (separable $u(c)-h(y/\theta)$), and at an optimum the move frees no resources. Log utility: $c_1=\mathbb E[c_2]/(\beta R)$.

*Introduced:* [6.3](lessons/06-03-the-inverse-euler-equation.md)

### Savings wedge

The implicit tax on the gross return that would make the planner's allocation the worker's own choice; positive whenever period-2 consumption varies, zero without private risk.

$$u'(c_1)=(1-\tau_s)\,\beta R\,\mathbb E[u'(c_2)]$$

$$1-\tau_s=\frac{1}{\mathbb E[1/u'(c_2)]\;\mathbb E[u'(c_2)]}$$

Jensen on the convex $x\mapsto1/x$ (a function of marginal utility, not of $c$) gives $\tau_s>0$. IC forces $c_2$ to vary, so private, partly insurable risk creates the wedge; with observable skill $\tau_s=0$. 6.3's Example 1 (log, $\beta R=1$, $c_2=0.5$ or $1.5$ with probabilities $\tfrac14,\tfrac34$): planner $c_1=1.25$, worker's own 1, $\tau_s=0.2$. A marginal distortion, not a positive average tax on capital income.

*Introduced:* [6.3](lessons/06-03-the-inverse-euler-equation.md)

### Zero expected wealth tax

A linear wealth tax whose rate depends on period-2 earnings can implement the optimum with zero expected revenue: high where earnings are low, a subsidy where they are high, which deters saving-then-shirking.

$$1-\tau(\theta)=\frac{u'(c_1)}{\beta R\,u'\big(c_2(\theta)\big)}$$

Kocherlakota (2005, *Econometrica*). $\mathbb E[1-\tau]=1$ by the inverse Euler equation. 6.3's Example 1: 60 percent tax on the gross return at low earnings, 20 percent subsidy at high. Needs wealth observed and linked to earnings. Farhi and Werning (2012, *JPE*): once general-equilibrium effects on the interest rate are counted, the welfare gain from the savings distortion is relatively small in their benchmark calibration.

*Introduced:* [6.3](lessons/06-03-the-inverse-euler-equation.md)

### Einav Finkelstein Cullen diagram

Line buyers up from keenest to least keen: competitive insurers price at the pool's average cost while efficiency compares each buyer's value with her own cost, and the gap is a welfare triangle.

$$P(s_e)=\mathrm{AC}(s_e),\qquad P(s^*)=\mathrm{MC}(s^*)$$

$$\mathrm{Loss}=\int_{s_e}^{s^*}\big[P(s)-\mathrm{MC}(s)\big]\,ds$$

Einav, Finkelstein and Cullen (2010, *QJE*). One fixed contract, competitive risk-neutral insurers who cannot price on $s$, no moral hazard, welfare = total surplus. Linear case $P=a-bs$, $\mathrm{MC}=c-ds$:

$$s_e=\frac{a-c}{b-d/2},\qquad s^*=\frac{a-c}{b-d}$$

($s^*$ capped at 1). Adverse selection ($d>0$) means under-insurance. Estimated from exogenous price variation (an IV design): demand from who buys, AC from their costs, hence MC. In their employer data adverse selection was present but the welfare loss small. 7.1's Example 1: $s_e=0.25$ at price 85, $s^*=0.5$, loss 0.625.

*Introduced:* [7.1](lessons/07-01-adverse-selection-as-a-policy-problem.md)

### Average cost curve

The mean expected cost of everyone covered when the $s$ keenest buyers buy; under competition with unpriced types it is the price.

$$\mathrm{AC}(s)=\frac1s\int_0^s\mathrm{MC}(u)\,du$$

Adverse selection: MC decreasing, so $\mathrm{MC}<\mathrm{AC}$. Linear $\mathrm{MC}=c-ds$ gives $\mathrm{AC}=c-\tfrac d2s$.

*Introduced:* [7.1](lessons/07-01-adverse-selection-as-a-policy-problem.md)

### Mandate

Force full coverage at premium $\mathrm{AC}(1)$: it recovers the under-insurance triangle but also covers everyone who values coverage below their own cost.

$$\text{net gain}=\int_{s_e}^{s^*}(P-\mathrm{MC})\,ds-\int_{s^*}^{1}(\mathrm{MC}-P)\,ds$$

Free to the treasury but blunt; efficient only if $P\ge\mathrm{MC}$ for every buyer ($s^*=1$). 7.1's Example 2: the mandate destroys all the gains from trade, 1.875 worse than the unraveled market. The alternative, a per-contract subsidy $\sigma=\mathrm{AC}(s^*)-P(s^*)$, is precise but paid with dear funds: net cost $(\lambda-1)\sigma s^*$, worth it iff that is below the recovered triangle (there, iff $\lambda<1.125$).

*Introduced:* [7.1](lessons/07-01-adverse-selection-as-a-policy-problem.md)

### Positive correlation test

Conditional on everything the insurer prices on, are people with more coverage more likely to claim? Asymmetric information predicts yes.

$$\mathrm{Cov}(\text{coverage},\ \text{claims}\mid\text{pricing variables})>0$$

Chiappori and Salanie (2000, *JPE*) found no such correlation among young French drivers. A positive correlation rejects symmetric information but cannot tell adverse selection from moral hazard (coverage can *cause* claims); a zero correlation does not rule out private information ([advantageous selection](#advantageous-selection)).

*Introduced:* [7.1](lessons/07-01-adverse-selection-as-a-policy-problem.md)

### Advantageous selection

The costlier buyers value coverage *less*, so MC rises in $s$, $\mathrm{MC}>\mathrm{AC}$, and the market over-insures.

$$\mathrm{MC}'(s)>0\ \Rightarrow\ \mathrm{MC}>\mathrm{AC}$$

Offsetting dimensions of private information, risk and taste for insurance, can cancel the correlation: Finkelstein and McGarry (2006, *AER*) found US long-term care buyers privately know their risk, yet those with a strong taste for insurance are lower risk, so the insured are not higher-risk overall.

*Introduced:* [7.1](lessons/07-01-adverse-selection-as-a-policy-problem.md)

### Baily Chetty formula

Raise the unemployment benefit until the proportional gain in marginal utility from moving a dollar into unemployment equals the share of each benefit dollar that leaks out through behavior.

$$\frac{u'(c_u)-u'(c_e)}{u'(c_e)}=\frac{\varepsilon_{1-e,b}}{e}$$

Baily (1978, *JPubE*); Chetty (2006, *JPubE*), who showed it holds in rich dynamic models. One period, balanced budget $e\tau=(1-e)b$, $c_e=z+w-\tau$, $c_u=z+b$, search condition $\psi'(e)=u(c_e)-u(c_u)$. By the envelope theorem the effort response drops out of the worker's utility, leaving $W'(b)=(1-e)u'(c_u)-e\,u'(c_e)\,d\tau/db$ with $d\tau/db=\frac{1-e}{e}(1+\varepsilon_{1-e,b}/e)$. Here $e$ is the **employment probability**, not the ETI, and $\varepsilon_{1-e,b}=d\ln(1-e)/d\ln b$ is the total response with $\tau$ adjusting. Left side bigger: raise $b$; smaller: cut. With no behavioral response it demands full insurance. $\varepsilon$ usually rises with $b$, so a verdict gives the direction, not the distance.

*Introduced:* [7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md)

### Sufficient statistics

A few estimable numbers that pin down a policy's welfare effect without the model's primitives.

$$e,\ \ \varepsilon_{1-e,b},\ \ \frac{u'(c_u)-u'(c_e)}{u'(c_e)}$$

In Baily-Chetty neither the search cost $\psi$ nor the search technology appears (Chetty 2006). The Saez formula (5.3) is the same recipe for the top rate.

*Introduced:* [7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md)

### Fiscal externality

An agent's (or a government's) behavioral response changes a government budget, a cost the agent ignores.

$$\frac{d\tau}{db}=\frac{1-e}{e}\Big(1+\frac{\varepsilon_{1-e,b}}{e}\Big)$$

In UI (7.2), an extra unemployed worker draws $b$ and stops paying $\tau$; because her effort is privately optimal, only this budget effect survives. In tax competition (8.3), raising $t_i$ sends $dk=1/(nb)$ of capital to each neighbour, a revenue gain $t/(nb)$ each, $t(n-1)/(nb)$ in total, exactly the leak town $i$ perceives. The same logic prices the MCPF (2.4).

*Introduced:* [7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md) · also [8.3](lessons/08-03-tax-competition.md)

### Consumption smoothing approximation

The insurance value measured from the consumption drop and risk aversion.

$$\frac{u'(c_u)-u'(c_e)}{u'(c_e)}\approx\gamma\,\frac{\Delta c}{c}$$

First-order Taylor expansion of $u'$ around $c_e$; $\gamma$ is relative risk aversion, $\Delta c/c=(c_e-c_u)/c_e$. Exact CRRA value $(1-\Delta c/c)^{-\gamma}-1$ is always larger (convex $u'$: prudence), by a lot when $\gamma$ or the drop is large; in 7.2's Example 2 the gap (0.40 against 0.524) flips the verdict. Gruber (1997, *AER*): food spending falls about 7 percent on job loss, and would fall more than three times as much without UI.

*Introduced:* [7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md)

### Liquidity and moral hazard

The benefit's effect on search splits into a liquidity effect (cash in both states, as a gift would give) and a moral hazard effect (a smaller reward for finding a job); only the second distorts incentives, and their ratio is the insurance value.

$$\frac{\partial e}{\partial b}=\frac{\partial e}{\partial z}-\frac{\partial e}{\partial w}$$

$$\frac{-\partial e/\partial z}{\partial e/\partial w}=\frac{u'(c_u)}{u'(c_e)}-1$$

Chetty (2008, *JPE*), holding $\tau$ fixed. Severance pay has only a liquidity effect, so its response measures the left side of Baily-Chetty from behavior alone, with no consumption data and no $\gamma$. Chetty attributed about 60 percent of the benefit response to liquidity, implying an optimal benefit above half the wage (a ratio of $0.6/0.4=1.5$).

*Introduced:* [7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md)

### Tagging

Condition transfers on an observable trait correlated with need; the program pays when the tagged group's average weight exceeds one.

$$\Delta W=b\,S\,(\bar g_{\text{rec}}-1),\qquad \bar g_{\text{rec}}=\frac{\sum_is_ig_i}{S}$$

Akerlof (1978, *AER*). A tag splits the Mirrlees problem, so each group faces fewer potential mimics. Costs: exclusion of the untagged needy (horizontal inequity) and manipulation: a non-needy person fakes the tag whenever $b>a_R$, so the faking cost caps the benefit, $b\le a_R$.

*Introduced:* [7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md)

### Ordeals

A deadweight claim cost that the needy mind less than others, so claimants sort themselves: waste that buys targeting.

$$c_N<b<c_R,\qquad \text{worth running iff}\ \frac{c_N}{b}<1-\frac{1}{g_N}$$

Nichols and Zeckhauser (1982, *AER* papers and proceedings). An ordeal of $H$ hours costs $c_i=w_iH$. It burns $c_N$ of every benefit it pays. A revenue-maximizing government ($g=0$ everywhere) never runs one. In 7.3 the ordeal beats the tag iff $g_N>25/9$: the ranking of screens depends on the weights.

*Introduced:* [7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md)

### In kind transfers

A benefit paid as a non-resellable good; its implicit claim cost screens when the non-needy value the good well below its cost and the needy near it.

$$c_i=b-v_i$$

Blackorby and Donaldson (1988, *AER*): self-selecting in-kind transfers can Pareto-improve on what taxes and subsidies alone achieve. Resale turns it back into cash; if the needy also value it below cost, it burns $b-v_N$ of their benefit like an ordeal. Other rationales: paternalism, externalities; Currie and Gahvari (2008, *JEL*) survey theory and evidence. In [8.2](lessons/08-02-assignment-spillovers-and-grants.md) a matching grant earmarked for one good is the in-kind case between governments.

*Introduced:* [7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md)

### Take-up

The share of eligibles who claim; claim costs (stigma, hassle, not knowing) screen the right way only if they bite harder on the non-needy.

$$\text{screens correctly iff}\ c_N<c_R$$

Kleven and Kopczuk (2011, *AEJ: Economic Policy*): complexity is a by-product of screening; rigorous screening improves targeting but raises applicants' costs, so optimal programs have incomplete take-up and errors both ways. Distinct from the [extensive margin](#extensive-margin) of 5.4 (the decision to work); this is the decision to claim.

*Introduced:* [7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md)

### Tiebout model

With many towns, free and informed mobility and head taxes, people reveal their demand for local public goods by choosing where to live, and each homogeneous town votes its favourite level, which is efficient.

$$g(\theta)=\frac{\theta}{c},\qquad \sum_{i\in N_j}\frac{\theta_i}{g_j}=n_jc$$

Tiebout (1956, *JPE*). Assumptions (paraphrased): costless mobility; full information; many communities; no employment ties (dividend income); no spillovers; an optimal community size (the [club good](#club-good) size); towns seek that size. Standard formalizations add a head tax $T_j=c\,g_j$. Utility $y-T_j+\theta\ln g_j$. With at least as many towns as types, the stratified assignment is an equilibrium and efficient: inside a homogeneous town the [Bowen](#bowen-equilibrium) vote's median equals the mean MRS, so it meets the Samuelson rule. It works only for local, replicable goods; sorting is by demand for $g$, not by income. 8.1's Example 1: sorting 60 families ($\theta=6$) and 40 retirees ($\theta=2$) gains 72.1 over one town's vote. See the [Bewley critique](#bewley-critique).

*Introduced:* [8.1](lessons/08-01-tiebout-voting-with-your-feet.md)

### Capitalization

Houses are immobile, so fiscal differences are priced into them: the owner when a fiscal change is announced bears or pockets its whole present value.

$$P=\frac{R+B-T}{r}$$

$$P=\frac{R+B}{r+\tau}\quad(T=\tau P)$$

A permanent 1-dollar-a-year tax gap moves the price by $1/r$ dollars (1,500 dollars a year at 5 percent: 30,000). Incidence as in 2.1, land the inelastic factor. Oates (1969, *JPE*): New Jersey house values fall with property-tax rates and rise with school spending per pupil. Capitalization shows people value fiscal packages; full, persistent capitalization means the supply of such towns is inelastic, itself a departure from Tiebout. Modern designs compare houses across school-attendance boundaries (a spatial regression discontinuity).

*Introduced:* [8.1](lessons/08-01-tiebout-voting-with-your-feet.md)

### Fiscal zoning

A minimum house value set so the property tax on it covers cost per resident, turning a property tax into a head tax and blocking free riding by small houses in high-spending towns.

$$\tau\,\bar h=c\,g_j$$

Hamilton (1975, *Urban Studies*). Without it, a property tax subsidizes small houses in rich towns. A screening device: a costly observable choice correlated with demand. 8.1: spending 12,000 dollars per household at a 2 percent rate needs a floor of 600,000.

*Introduced:* [8.1](lessons/08-01-tiebout-voting-with-your-feet.md)

### Bewley critique

Rigorous Tiebout equilibria exist and are Pareto optimal only under assumptions that make local public goods essentially private.

$$\text{cost}\ \propto\ \text{number of users}$$

Bewley (1981, *Econometrica*). A pure public good whose cost does not rise with population, few towns, or wages tied to location can destroy existence or optimality; with a pure public good, splitting the population forfeits the gain from sharing the bill, so sorting and scale pull against each other.

*Introduced:* [8.1](lessons/08-01-tiebout-voting-with-your-feet.md)

### Oates decentralization theorem

With no spillovers, no scale economies and a center that must provide one uniform level, local provision tailored to local demand is at least as good, and strictly better when tastes differ.

$$\sum_i\Big[\int_0^{G_i^*}\mathrm{MB}_i-cG_i^*\Big]\ge\sum_i\Big[\int_0^{\bar G}\mathrm{MB}_i-c\bar G\Big]$$

Oates (1972, *Fiscal Federalism*). Proof: each $G_i^*$ maximizes town $i$'s own surplus. Linear $\mathrm{MB}_i=a_i-G$: $G_i^*=a_i-c$, $\bar G=\bar a-c$, and the uniformity loss is $\tfrac12\sum_i(a_i-\bar a)^2$. It assumes the center must be uniform; an omniscient center could tailor too. Trade-off with [spillovers](#interjurisdictional-spillover): heterogeneity favors decentralizing, spillovers favor centralizing.

*Introduced:* [8.2](lessons/08-02-assignment-spillovers-and-grants.md)

### Interjurisdictional spillover

A share of a town's public good's marginal benefit accrues to outsiders, whom the town does not count, so it underprovides.

$$(1-\sigma)\,\mathrm{MB}_i(G_i)=c$$

Linear case: $G_i=a_i-c/(1-\sigma)$, short of $G_i^*$ by $c\sigma/(1-\sigma)$, loss $\tfrac12\big(c\sigma/(1-\sigma)\big)^2$ per town. $\sigma$ is the share of *total* benefit. 8.2's Example 2: decentralization beats uniformity until $\sigma=3/5$.

*Introduced:* [8.2](lessons/08-02-assignment-spillovers-and-grants.md)

### Matching grant

The center pays a share of every unit a town spends, lowering the local price: a Pigouvian subsidy that corrects a spillover while keeping tailoring.

$$(1-\sigma)\,\mathrm{MB}_i=(1-m)\,c\ \Rightarrow\ m^*=\sigma$$

Budget $x+(1-m)G=Y$ (a rotation). The Pigouvian rate is the spillover share of *total* marginal benefit (outsiders getting half as much as residents means $\sigma=1/3$). At equal cost it raises $G$ more than a lump sum. Cobb-Douglas $\alpha\ln x+(1-\alpha)\ln G$: $G_m=(1-\alpha)Y/(1-m)$, $x=\alpha Y$. The center must know $\sigma$, and each grant dollar costs $\lambda>1$. A price change: with a spillover its substitution effect is its job, without one its cost.

*Introduced:* [8.2](lessons/08-02-assignment-spillovers-and-grants.md)

### Lump sum grant

An unconditional transfer to a community, spent like residents' income in theory; at equal cost the community weakly prefers it to a matching grant, but it cannot correct a spillover.

$$x+G=Y+L$$

A parallel shift. At $L=mG_m$ the matching bundle is affordable, so the lump sum is weakly preferred, while matching buys more $G$ ($G_m\ge G_L$). Cobb-Douglas: $G_L=(1-\alpha)(Y+L)$. 8.2's Example 1: a lump sum of 30 raises $G$ by 9, a matching grant of equal cost by 30, and the matching grant is worth about 14 percent less to the town than it costs the center. The same revealed-preference argument as cash against in kind (7.3).

*Introduced:* [8.2](lessons/08-02-assignment-spillovers-and-grants.md)

### Flypaper effect

Grants raise local public spending far more than an equal rise in residents' income: money sticks where it hits.

$$\frac{\partial G}{\partial L}\gg\frac{\partial G}{\partial Y}\quad(\text{theory: equal})$$

Hines and Thaler (1995, *JEP*): theory says roughly 5 to 10 cents per dollar; estimates much larger, sometimes near a dollar. Explanations: fiscal illusion (the average price of public spending seems to fall); agency (Inman 2008, NBER WP 14579, favors political institutions and officials' incentives); endogeneity (Knight 2002, *AER*, instruments federal highway grants with delegation power and finds crowd-out of state spending of roughly 0.88 to 1.12 per grant dollar). It is the empirical failure of 1.2's neutrality logic.

*Introduced:* [8.2](lessons/08-02-assignment-spillovers-and-grants.md)

### Tax competition

Jurisdictions tax mobile capital at source; each ignores that the base it drives out lands in its neighbours' budgets, so every town sees public funds as dearer than they are and the Nash tax is below the coordinated rate.

$$t^N=\frac{\theta\bar k}{\bar k^2+\theta(n-1)/(nb)},\qquad t^*=\frac{\theta}{\bar k}$$

Zodrow and Mieszkowski (1986, *JUE*); Wilson (1986, *JUE*); 8.3's quadratic version with $f(k)=ak-\tfrac b2k^2$ and $U=x+\theta\ln G$. Capital flows: $dk_i/dt_i=-(n-1)/(nb)$, $dk_j/dt_i=1/(nb)$, $d\rho/dt_i=-1/n$. Private MCPF $\bar k/\big(\bar k-t(n-1)/(nb)\big)>1$, social MCPF 1. The race stops at a positive floor, $\theta\bar k/(\bar k^2+\theta/b)$ as $n\to\infty$ (20/3 in 8.3's Example 1), not zero. In symmetric equilibrium no capital moves; the loss is the public goods never built. Cures: coordination, a floor, a matching grant.

*Introduced:* [8.3](lessons/08-03-tax-competition.md)

### Leviathan

A revenue-maximizing government; against it, tax competition is a restraint rather than a failure.

$$t^L=\frac{nb\bar k}{n-1}$$

Brennan and Buchanan (1980, *The Power to Tax*). Competing Leviathans set $\bar k+t\,dk_i/dt_i=0$; colluding ones can tax away the whole net return ($t=a-b\bar k$), 500 against 133 per town in 8.3. Edwards and Keen (1996, *European Economic Review*) blend benevolent and Leviathan objectives: roughly, coordination helps residents only if the wasted share of each marginal revenue dollar is small relative to the excess burden. Which picture fits is empirical.

*Introduced:* [8.3](lessons/08-03-tax-competition.md)

### Source and residence taxation

A source tax falls on capital where it is employed, so its base flees; a residence tax falls on residents' capital income wherever invested, so its base is fixed and the Samuelson rate is restored.

$$\text{source base}=k_i,\qquad \text{residence base}=\bar k$$

Residence taxation needs information on foreign income and fails if owners move. Tax exporting (outsiders own the local capital) pushes source taxes *up*. The OECD/G20 Pillar Two agreement (October 2021) sets a 15 percent minimum effective rate for large multinationals, enforced by top-up taxes: a floor that removes the bottom of the race without harmonizing rates.

*Introduced:* [8.3](lessons/08-03-tax-competition.md)

## Formulas and rules

The formulas each job needs, in the lessons' notation, with the lesson in parentheses. Symbols are in [Notation](#notation); each model's story is in its Definitions entry.

### Public goods and provision

How much to provide, what private giving does, and how valuations are elicited.

| Quantity | Formula |
|---|---|
| Samuelson rule (1.1) | $\sum_i\mathrm{MRS}^i_{Gx}=\mathrm{MRT}=F_G/F_X$ |
| Pareto first-order conditions (1.1) | $\mu_i\,\partial u_i/\partial x_i=\gamma F_X$; $\sum_i\mu_i\,\partial u_i/\partial G=\gamma F_G$ |
| Bergstrom-Cornes summed MRS (1.1) | $\big(A'(G)X+\sum_iB_i'(G)\big)/A(G)$ |
| $u_i=\ln x_i+\alpha_i\ln G$, $X+G=100$ (1.1) | $G^*=100\bar\alpha/(1+\bar\alpha)$, $\bar\alpha=s\alpha_1+(1-s)\alpha_2$ |
| Club size (1.1) | $n\,h'(n)=C/n$; toll $n\,h'(n)$; toll revenue $=C$ |
| Log best response (1.2) | $g_i=\max\{0,\tfrac12(w_i-G_{-i})\}$; $x_i=G$ if $g_i>0$ |
| Nash provision, log utility (1.2) | $G=(P+W_C)/(k+1)$; $C=\{i:w_i>G\}$ |
| Transfer from a contributor to a non-contributor, log (1.2) | $dG=-1/(k+1)$ per dollar |
| Provision financed from non-contributors, log (1.2) | giving falls $k/(k+1)$ per dollar |
| Warm glow, one donor, $\ln x+\ln G+\ln g$ (1.2) | $-\dfrac{dg}{dP}=\dfrac{1/x^2+1/G^2}{1/x^2+1/G^2+1/g^2}$ |
| Quasilinear Samuelson rule (1.3) | $\sum_ib_i'(G^*)=c$ |
| Lindahl manipulation (1.3) | $U_i'(0)=-G\,p_i'(0)>0$ |
| Clarke tax (1.3) | $t_i=\max(\sum_{j\ne i}\hat v_j,0)-(\sum_{j\ne i}\hat v_j)\mathbf 1\{\text{build}\}$ |
| AGV transfer (1.3) | $t_i=\xi_i(\hat\theta_i)-\frac{1}{n-1}\sum_{j\ne i}\xi_j(\hat\theta_j)$ |
| Bowen favourite (1.3) | $b_i'(G_i)=c/n$; median $G_m$ wins |
| Bowen efficiency (1.3) | $\frac1n\sum_ib_i'(G_m)=b_m'(G_m)$ |

| Route (1.3) | Efficient | Truth-telling | Budget balanced | Voluntary |
|---|---|---|---|---|
| Lindahl prices | only if truthful | no: understate | yes | yes |
| Pivot (Clarke-Groves) | the decision | dominant strategy | no: surplus burned | not with fixed cost shares |
| Expected externality (AGV) | yes | Bayesian only | yes, exactly | not guaranteed |
| Bowen majority vote | iff mean MRS = median MRS | votes, not valuations | yes | no: the outvoted pay |

*From* [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md), [1.2](lessons/01-02-voluntary-provision-and-crowding-out.md), [1.3](lessons/01-03-revealing-demand-for-public-goods.md)

### Incidence and pass-through

Who bears a tax, in one market and across markets.

| Quantity | Formula |
|---|---|
| Competitive buyers' share (2.1) | $dp^d/dt=\varepsilon_S/(\varepsilon_S-\varepsilon_D)$ |
| Competitive sellers' change (2.1) | $dp^s/dt=\varepsilon_D/(\varepsilon_S-\varepsilon_D)$ |
| Clearing condition, either side taxed (2.1) | $D(p^s+t)=S(p^s)$ |
| Monopoly pass-through (2.1) | $\rho=1/(2+QP''/P')=1/(2-DD''/D'^2)$ |
| Linear / exponential / constant-elasticity demand (2.1) | $\rho=\tfrac12$ / $1$ / $\vert \varepsilon_D\vert /(\vert \varepsilon_D\vert -1)$ |
| Unit tax matching an ad valorem tax's price, monopoly (2.1) | $t=c\tau/(1-\tau)$ |
| Revenue ratio at equal price, monopoly (2.1) | $\tau p/t=p(1-\tau)/c$ |
| Harberger relative factor price (2.2) | $\hat r-\hat w=-(N/D)\,d\tau$ |
| Harberger numerator (2.2) | $N=E\theta_{KX}(\gamma_K-\gamma_L)+\sigma_X(\gamma_K\theta_{LX}+\gamma_L\theta_{KX})$ |
| Harberger denominator, first two terms (2.2) | $E(\theta_{KX}-\theta_{KY})(\gamma_K-\gamma_L)+\sigma_X(\gamma_K\theta_{LX}+\gamma_L\theta_{KX})$ |
| Harberger denominator, third term (2.2) | $+\ \sigma_Y\big((1-\gamma_K)\theta_{LY}+(1-\gamma_L)\theta_{KY}\big)$; $D>0$ |
| Capital's burden share, national income as unit (2.2) | $b_K=\theta_K+(1-\theta_K)\,\dfrac{-(\hat r-\hat w)}{\gamma_K\,d\tau}$ |
| All Cobb-Douglas (2.2) | $D=1$, $N=\gamma_K$, $b_K=1$ exactly |

*From* [2.1](lessons/02-01-partial-equilibrium-incidence.md), [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md)

### Excess burden and the MCPF

What a tax destroys, and the price of the last dollar of revenue. EV convention; compensated MCPF.

| Quantity | Formula |
|---|---|
| Equivalent / compensating variation (2.3) | $\mathrm{EV}=m-e(P_0,u_1)$; $\mathrm{CV}=e(P_1,u_0)-m$ |
| Excess burden (2.3) | $\mathrm{EB}=\mathrm{EV}-R$, $R=\tau p\,h(P_1,u_1)$ |
| As an area (2.3) | $\int_{P_0}^{P_1}h(s,u_1)\,ds-(P_1-P_0)h(P_1,u_1)$ |
| Its slope (2.3) | $\mathrm{EB}'(\tau)=-\tau p^2\,\partial h/\partial P$ |
| Harberger triangle (2.3) | $\mathrm{EB}\approx\tfrac12\tau^2\vert \varepsilon^c\vert \,px$ |
| Producer-side triangle, upward supply (2.3) | $\tfrac12\,t\,\Delta x$ |
| Cobb-Douglas labor, $u=c^{0.4}\ell^{0.6}$ (2.3) | hours fixed at 40; $\varepsilon^c=0.4\,\ell/h=0.6$ |
| Marginal deadweight loss of $t_k$, quasilinear (2.4) | $-t_k\,\partial x_k/\partial q_k-\sum_{j\ne k}t_j\,\partial x_j/\partial q_k$ |
| Second-best $t_k$, no revenue needed (2.4) | $t_k\,\partial x_k/\partial q_k=-\sum_{j\ne k}t_j\,\partial x_j/\partial q_k$ |
| Marginal revenue of $t_k$ (2.4) | $\partial R/\partial t_k=x_k+\sum_it_i\,\partial x_i/\partial q_k$ |
| MEB and MCPF (2.4) | $\mathrm{MEB}_k=\dfrac{\partial\mathrm{DWL}/\partial t_k}{\partial R/\partial t_k}$; $\mathrm{MCPF}_k=\dfrac{x_k}{\partial R/\partial t_k}=1+\mathrm{MEB}_k$ |
| Constant-elasticity base (2.4) | $z=(1-\tau)^e$; $R=\tau(1-\tau)^e$ |
| Its MCPF (2.4) | $1/\big(1-e\tau/(1-\tau)\big)$ |
| Revenue-maximizing rate (2.4) | $\tau^*=1/(1+e)$ |
| Surplus, constant-elasticity base (2.4) | $V(\tau)=(1-\tau)^{1+e}/(1+e)$; $\mathrm{DWL}=V(0)-V(\tau)-R(\tau)$ |
| Rate at which a project with benefit/cost $1.2$ breaks even (2.4) | $\tau=\tfrac{1/6}{e+1/6}$ |
| Modified Samuelson rule (2.4) | $\sum_i\mathrm{MRS}_i=\mathrm{MCPF}\cdot\mathrm{MRT}$; $\lambda=\mathrm{MCPF}$ |

| MCPF at $\tau=$ (2.4) | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 |
|---|---|---|---|---|---|---|
| $e=0.2$ | 1.023 | 1.053 | 1.094 | 1.154 | 1.250 | 1.429 |
| $e=0.5$ | 1.059 | 1.143 | 1.273 | 1.500 | 2.000 | 4.000 |

*From* [2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md), [2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md)

### Externality instruments

Allocating a given abatement, choosing between price and quantity, and taxing pollution in a second-best economy.

| Quantity | Formula |
|---|---|
| Least cost (3.1) | $\mathrm{MAC}_i(a_i)=\mu$ for all $i$; $\mu=\frac{d}{dA}\min\sum_iC_i$ |
| Tax or permit price (3.1) | $\mathrm{MAC}_i=t$ or $\mathrm{MAC}_i=p$; least cost when $t=p=\mu$ |
| Cap (3.1) | $E=\sum_i\bar e_i-A$ |
| Linear MACs $c_ia_i$ (3.1) | $a_i=\mu/c_i$; $\mu=A/\sum_i(1/c_i)$; least cost $\mu A/2$ |
| Uniform standard over least cost, linear (3.1) | $\bar c\cdot\overline{(1/c)}\ge1$ |
| Auction revenue (3.1) | $\mu E$ (grandfathered: the same value to incumbents) |
| Expected optimum (3.2) | $a^*=(b_0-c_0)/(C+D)$; $p^*=c_0+Ca^*$ |
| Abatement under the tax; ex post best (3.2) | $a_P=a^*-\theta/C$; $a^\circ=a^*-\theta/(C+D)$ |
| Loss of any $a$ (3.2) | $\tfrac{C+D}{2}(a-a^\circ)^2$ |
| Expected losses (3.2) | $\mathbb EL_Q=\dfrac{\sigma^2}{2(C+D)}$; $\mathbb EL_P=\dfrac{\sigma^2D^2}{2C^2(C+D)}$ |
| Weitzman (3.2) | $\Delta=\sigma^2(C-D)/(2C^2)$; prices win iff $C>D$ |
| With correlated benefit shock (3.2, Stavins) | $\Delta=\dfrac{\sigma_\theta^2(C-D)}{2C^2}-\dfrac{\rho\,\sigma_\eta\sigma_\theta}{C}$ |
| Sandmo, dirty good (3.3) | $t_k=\frac{\lambda-1}{\lambda}\,\frac{x_k}{\vert x_k'\vert }+\frac{\mathrm{MED}}{\lambda}$ |
| Sandmo, clean goods (3.3) | $t_j=\frac{\lambda-1}{\lambda}\,\frac{x_j}{\vert x_j'\vert }$ |
| Real-wage-neutral swap (3.3) | $dt>0$, $d\tau=-k\,dt$, $k=D/L$ |
| Second-best Pigouvian tax, benchmark (3.3) | $t^*=\mathrm{MED}/\lambda$ |
| Revenue recycling gain (3.3) | $\approx(\lambda-1)\times$ revenue |

*From* [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md), [3.2](lessons/03-02-prices-vs-quantities.md), [3.3](lessons/03-03-pigou-in-a-second-best-world.md)

### Commodity tax rules

Which goods to tax, at what rates, and which transactions to leave alone. $q$ is the consumer price; elasticities are negative.

| Quantity | Formula |
|---|---|
| Ramsey problem (4.1) | $\max_tV(q,m)$ s.t. $\sum_jt_jx_j(q,m)=R$ |
| Equal MCPF across taxes (4.1) | $\alpha x_i/(x_i+\sum_jt_j\,\partial x_j/\partial q_i)=\lambda$ |
| Ramsey rule (4.1) | $\sum_jt_jS_{ij}=-\theta x_i$ |
| Ramsey number (4.1) | $\theta=1-\alpha/\lambda-\sum_jt_j\,\partial x_j/\partial m$ |
| Slutsky in elasticities (4.1) | $\varepsilon^c_i=\varepsilon_i+s_i\eta_i$ |
| Inverse elasticity rule, quasilinear (4.1) | $t_i/q_i=\theta/\lvert\varepsilon_i\rvert$; $\theta=1-1/\lambda$; $\mathrm{MCPF}=1/(1-\theta)$ |
| Linear demand $x_i=a_i-b_iq_i$ (4.1) | $t_ib_i=\theta x_i$, exact |
| Ramsey-Boiteux (4.1) | $(P_i-c_i)/P_i=k/\lvert\varepsilon_i\rvert$; $k=\mu/(1+\mu)$ |
| Welfare weight (4.2) | $g_h=\beta^h/\bar\beta$ |
| Many-person Ramsey (4.2) | $-\sum_it_iS_{ki}/X_k=1-\sum_h(x_k^h/X_k)\,b^h$ |
| Net value of a dollar to $h$ (4.2) | $b^h=\beta^h/\lambda+\sum_it_i\,\partial x_i^h/\partial m^h$ |
| Simplified, $b^h=\kappa g_h$ (4.2) | $-\sum_it_iS_{ki}/X_k=1-\kappa\delta_k$; $\kappa=\bar\beta/\lambda$ |
| Distributional characteristic (4.2) | $\delta_k=\sum_hg_hx_k^h/X_k$ |
| Inverse elasticity with equity (4.2) | $\tau_k=(1-\kappa\delta_k)/\lvert\varepsilon_k\rvert$ |
| Hicksian cross elasticity (4.2) | $\varepsilon_{ki}=S_{ki}q_i/X_k$ |
| Homogeneity (4.2) | $\varepsilon_{k0}+\varepsilon_{k1}+\varepsilon_{k2}=0$ |
| Ramsey rule in elasticities (4.2) | $\tau_1\varepsilon_{k1}+\tau_2\varepsilon_{k2}=-\theta$, $k=1,2$ |
| Corlett-Hague (4.2) | $\dfrac{\tau_1}{\tau_2}=\dfrac{\varepsilon_{20}+\varepsilon_{12}+\varepsilon_{21}}{\varepsilon_{10}+\varepsilon_{12}+\varepsilon_{21}}$ |
| Diamond-Mirrlees problem (4.3) | $\max_qW(V^1(q),\dots,V^H(q))$ s.t. $X(q)\in Y+\{z_g\}$ |
| Revenue equals public production cost (4.3) | $(q-p)\cdot X=-p\cdot z_g$ |
| Public sector's objective (4.3) | $\max\ p\cdot z_g$ |
| Cobb-Douglas input $X=2\sqrt{mL}$, wage 1 (4.3) | unit cost $\sqrt{p_m}$; $m=1/(2\sqrt{p_m})$, $L=\sqrt{p_m}/2$ |

*From* [4.1](lessons/04-01-the-ramsey-rule.md), [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md), [4.3](lessons/04-03-production-efficiency-diamond-mirrlees.md)

### Income tax rules

Linear, nonlinear, top and bottom of the schedule. Weights average one and are inputs; $e$ is the elasticity of taxable income with respect to $1-\tau$.

| Quantity | Formula |
|---|---|
| Budget, linear tax (5.1) | $c_i=(1-\tau)z_i+R$; $R=\tau Z(1-\tau)$ |
| Weights (5.1) | $g_i=G'(u_i)/\int G'(u_j)\,dj$ |
| Income-weighted weight (5.1) | $\bar g=\int g_iz_i\,di/Z=1+\mathrm{Cov}(g_i,z_i)/Z$ |
| First-order condition (5.1) | $Z\big(1-e\tau/(1-\tau)\big)=\int g_iz_i\,di$ |
| Optimal linear rate (5.1) | $\tau^*=(1-\bar g)/(1-\bar g+e)$ |
| MCPF at the optimum (5.1) | $\mathrm{MCPF}=1/\bar g$ |
| Mirrlees IC, High against Low (5.2) | $U_H\ge c_L-h(y_L/w_H)$ |
| Indifference slope (5.2) | $dc/dy=h'(y/w)/(w\,u'(c))=y/w^2$ for $h=\tfrac12\ell^2$ |
| Implicit rate (5.2) | $\tau_i=1-\mathrm{MRS}_i=1-y_i/w_i^2$ |
| Multipliers, $g_H<1$ (5.2) | $\lambda=1$; $\mu=\pi_H(1-g_H)$ |
| Two types (5.2) | $y_H=w_H^2$; $\dfrac{\tau_L}{1-\tau_L}=\dfrac{\pi_H}{\pi_L}(1-g_H)\Big(1-\dfrac{w_L^2}{w_H^2}\Big)$ |
| $n$ types, adjacent downward ICs (5.2) | $\dfrac{\tau_k}{1-\tau_k}=\dfrac{M_k}{\pi_k}\Big(1-\dfrac{w_k^2}{w_{k+1}^2}\Big)$; $M_k=\sum_{j>k}\pi_j(1-g_j)$ |
| Top-bracket perturbation (5.3) | $dM=(z_m-\bar z)d\tau$; $dB=-\frac{\tau}{1-\tau}ez_m\,d\tau$; $dW=-g\,dM$ |
| Pareto parameter (5.3) | $a=z_m/(z_m-\bar z)$; Pareto tail: $z_m=a\bar z/(a-1)$ |
| Saez top rate (5.3) | $\tau^*=(1-g)/(1-g+ae)$ |
| Revenue-maximizing top rate (5.3) | $1/(1+ae)$ |
| Top-bracket MCPF (5.3) | $(1-\tau)/(1-\tau-ae\tau)$; $=1/g$ at the optimum |
| With shifting to a base taxed $t_s$ (5.3) | $\tau^*=(1-g+a\,t_se_s)/(1-g+ae)$ |
| Participation tax rate (5.4) | $\tau_{p,i}=(T_i-T_0)/z_i$ |
| Pure extensive optimum (5.4) | $\dfrac{T_i-T_0}{c_i-c_0}=\dfrac{1-g_i}{\eta_i}$, i.e. $\tau_{p,i}=\dfrac{1-g_i}{1-g_i+\eta_i}$ |
| Pure intensive, first bracket (5.4) | $\dfrac{T_1-T_0}{c_1-c_0}=\dfrac{h_0(g_0-1)}{\zeta_1h_1}$ |
| Both margins (5.4) | $\dfrac{T_i-T_{i-1}}{c_i-c_{i-1}}=\dfrac{1}{\zeta_ih_i}\sum_{j\ge i}h_j\Big[1-g_j-\eta_j\dfrac{T_j-T_0}{c_j-c_0}\Big]$ |
| Stacked phase-outs (5.4) | effective marginal rate = sum of the rates withdrawn on the same earnings |

The one shape three times: linear $(1-\bar g)/(1-\bar g+e)$, top $(1-g)/(1-g+ae)$, participation $(1-g_i)/(1-g_i+\eta_i)$.

*From* [5.1](lessons/05-01-the-linear-income-tax.md), [5.2](lessons/05-02-the-mirrlees-problem.md), [5.3](lessons/05-03-the-saez-formula.md), [5.4](lessons/05-04-participation-and-the-eitc.md)

### Capital tax rules

When saving should be taxed, and how a capital tax compounds.

| Quantity | Formula |
|---|---|
| Mimicker IC (6.1) | $U(V(q,B_H),y_H/w_H)\ge U(V(q,B_L),y_L/w_H)$ |
| Atkinson-Stiglitz replacement (6.1) | $B_i'=e(p,V(q,B_i))$; revenue gain $p\cdot x_i-B_i'\ge0$ |
| Compensated tax on good $k$, mimicker (6.1) | $dV^M=-\mu_M(x_k^M-x_k^L)\,dt$ |
| Two-period savings tax (6.1) | price of $c_2$: $1/R\ \to\ 1/R_{\text{net}}$ |
| Household Euler equation (6.2) | $u'(c_t)=\beta[1+(1-\tau_K)r_{t+1}]u'(c_{t+1})$ |
| Implicit tax on date-$T$ consumption (6.2) | $1+t_T=\big((1+r)/(1+(1-\tau_K)r)\big)^T$ |
| Horizon at which $t_T=100$ percent (6.2) | $T=\ln2/\ln\big((1+r)/(1+(1-\tau_K)r)\big)$ |
| Chamley-Judd steady state (6.2) | planner $1=\beta(1+r)$; household $1=\beta(1+(1-\tau_K)r)$ |
| Long-run capital supply, Judd split (6.2) | $(1-\tau_K)(f'(k)-\delta)=\rho$ |
| Wage (6.2) | $w=f(k)-f'(k)k$ |
| Consumption tax $t_c$ from today (6.2) | = labor tax $t_c/(1+t_c)$ + levy $t_c/(1+t_c)$ on initial wealth |
| Inverse Euler equation (6.3) | $1/u'(c_1)=\mathbb E[1/u'(c_2)]/(\beta R)$ |
| Standard Euler equation (6.3) | $u'(c_1)=\beta R\,\mathbb E[u'(c_2)]$ |
| Savings wedge (6.3) | $1-\tau_s=1/\big(\mathbb E[1/u'(c_2)]\,\mathbb E[u'(c_2)]\big)$ |
| Log utility (6.3) | planner $c_1=\mathbb E[c_2]/(\beta R)$ |
| Kocherlakota rate (6.3) | $1-\tau(\theta)=u'(c_1)/\big(\beta R\,u'(c_2(\theta))\big)$; $\mathbb E[\tau]=0$ |

*From* [6.1](lessons/06-01-atkinson-stiglitz.md), [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md), [6.3](lessons/06-03-the-inverse-euler-equation.md)

### Social insurance formulas

Adverse selection as a surplus calculation, and how generous public insurance should be.

| Quantity | Formula |
|---|---|
| Average cost (7.1) | $\mathrm{AC}(s)=\frac1s\int_0^s\mathrm{MC}(u)\,du$ |
| Equilibrium / efficient coverage (7.1) | $P(s_e)=\mathrm{AC}(s_e)$; $P(s^*)=\mathrm{MC}(s^*)$ |
| Welfare loss (7.1) | $\int_{s_e}^{s^*}[P(s)-\mathrm{MC}(s)]\,ds$ |
| Linear case (7.1) | $\mathrm{AC}=c-\tfrac d2s$; $s_e=\dfrac{a-c}{b-d/2}$; $s^*=\dfrac{a-c}{b-d}$ |
| Mandate premium (7.1) | $\mathrm{AC}(1)$ |
| Subsidy reaching $s^*$ (7.1) | $\sigma=\mathrm{AC}(s^*)-P(s^*)$; net cost $(\lambda-1)\sigma s^*$ |
| Worker's consumption (7.2) | $c_e=z+w-\tau$; $c_u=z+b$ |
| Search condition (7.2) | $\psi'(e)=u(c_e)-u(c_u)$ |
| UI budget (7.2) | $e\tau=(1-e)b$ |
| Welfare slope (7.2) | $W'(b)=(1-e)u'(c_u)-e\,u'(c_e)\,d\tau/db$ |
| Tax response (7.2) | $d\tau/db=\frac{1-e}{e}\big(1+\varepsilon_{1-e,b}/e\big)$ |
| Baily-Chetty (7.2) | $\dfrac{u'(c_u)-u'(c_e)}{u'(c_e)}=\dfrac{\varepsilon_{1-e,b}}{e}$ |
| Approximate left side (7.2) | $\gamma\,\Delta c/c$ |
| Exact CRRA left side (7.2) | $(1-\Delta c/c)^{-\gamma}-1$ |
| Effort responses (7.2) | $\partial e/\partial z=(u'(c_e)-u'(c_u))/\psi''$; $\partial e/\partial w=u'(c_e)/\psi''$ |
| Liquidity plus moral hazard (7.2) | $\partial e/\partial b=-u'(c_u)/\psi''=\partial e/\partial z-\partial e/\partial w$ |
| Liquidity over moral hazard (7.2) | $\dfrac{-\partial e/\partial z}{\partial e/\partial w}=\dfrac{u'(c_u)}{u'(c_e)}-1$ |

*From* [7.1](lessons/07-01-adverse-selection-as-a-policy-problem.md), [7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md)

### Targeting formulas

The value of a transfer program, weights averaging one, public funds worth one (7.3).

| Quantity | Formula |
|---|---|
| Program value (7.3) | $\Delta W=\sum_is_i[g_i(b-c_i)-b]$ |
| Universal grant (7.3) | $\Delta W=b\sum_in_i(g_i-1)=0$ |
| Costless tag (7.3) | $\Delta W=bS(\bar g_{\text{rec}}-1)$ |
| Tag stays honest (7.3) | $b\le a_R$ |
| Ordeal cost (7.3) | $c_i=w_iH$ |
| Ordeal separates (7.3) | $c_N<b<c_R$ |
| Ordeal beats nothing (7.3) | $g_N(b-c_N)>b\iff c_N/b<1-1/g_N$ |
| In-kind implicit claim cost (7.3) | $c_i=b-v_i$ |

*From* [7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md)

### Fiscal federalism formulas

Sorting, capitalization, assignment, grants and tax competition.

| Quantity | Formula |
|---|---|
| Favourite service level, $\theta\ln g$ (8.1) | $g(\theta)=\theta/c$ |
| Samuelson rule in town $j$ (8.1) | $\sum_{i\in N_j}\theta_i/g_j=n_jc$ (mean MRS $=c$) |
| Head tax (8.1) | $T_j=c\,g_j$ |
| Capitalization (8.1) | $P=(R+B-T)/r$; ad valorem $P=(R+B)/(r+\tau)$ |
| Temporary tax gap, $N$ years (8.1) | discount $=\text{gap}\times(1-(1+r)^{-N})/r$ |
| Zoning floor (8.1) | $\tau\bar h=c\,g_j$ |
| Cross-border Samuelson rule (8.2) | $\mathrm{MB}_i(G_i^*)=c$, all beneficiaries counted |
| Linear tailoring vs uniform (8.2) | $G_i^*=a_i-c$; $\bar G=\bar a-c$ |
| Uniformity loss (8.2) | $\tfrac12\sum_i(a_i-\bar a)^2$ |
| Spillover choice (8.2) | $(1-\sigma)\mathrm{MB}_i=c$; linear shortfall $c\sigma/(1-\sigma)$ |
| Spillover loss per town (8.2) | $\tfrac12\big(c\sigma/(1-\sigma)\big)^2$ |
| Pigouvian matching rate (8.2) | $m^*=\sigma$ |
| Budgets (8.2) | lump sum $x+G=Y+L$; matching $x+(1-m)G=Y$ |
| Equal cost (8.2) | $L=mG_m$ |
| Cobb-Douglas demands (8.2) | $G_L=(1-\alpha)(Y+L)$; $G_m=(1-\alpha)Y/(1-m)$ |
| Arbitrage and net return (8.3) | $a-bk_i-t_i=\rho$; $\rho=a-b\bar k-\bar t$ |
| Capital flows (8.3) | $dk_i/dt_i=-\frac{n-1}{nb}$; $dk_j/dt_i=\frac1{nb}$; $d\rho/dt_i=-\frac1n$ |
| Residents' consumption (8.3) | $x_i=\tfrac b2k_i^2+\rho\bar k$; $dx_i/dt_i=-\bar k$ at symmetry |
| Own revenue response (8.3) | $dR_i/dt_i=\bar k-t\,\frac{n-1}{nb}$ |
| Private MCPF (8.3) | $\theta/G=\bar k/\big(\bar k-t(n-1)/(nb)\big)$ |
| Nash tax (8.3) | $t^N=\dfrac{\theta\bar k}{\bar k^2+\theta(n-1)/(nb)}$ |
| Coordinated (8.3) | $G^*=\theta$; $t^*=\theta/\bar k$ |
| Floor as $n\to\infty$ (8.3) | $\theta\bar k/(\bar k^2+\theta/b)$ |
| Fiscal externality (8.3) | $t\cdot\frac1{nb}$ to each neighbour; $t\frac{n-1}{nb}$ in all |
| Competing Leviathan (8.3) | $t^L=nb\bar k/(n-1)$; colluding $t=a-b\bar k$ |

*From* [8.1](lessons/08-01-tiebout-voting-with-your-feet.md), [8.2](lessons/08-02-assignment-spillovers-and-grants.md), [8.3](lessons/08-03-tax-competition.md)

## Papers

The studies the lessons cite, in lesson order, with each result as the lesson states it.

| Paper | Result, as the lesson states it | Lesson |
|---|---|---|
| Samuelson (1954, *REStat*) | At every Pareto optimum the summed MRS for the public good equals the MRT | [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) |
| Bergstrom and Cornes (1983, *Econometrica*) | The efficient $G$ is independent of distribution exactly when $u_i=A(G)x_i+B_i(G)$ with $A$ common | [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) |
| Buchanan (1965, *Economica*) | Clubs: excludable, congestible goods with an optimal membership | [1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md) |
| Warr (1983, *Economics Letters*) | Redistribution among contributors that keeps each a contributor leaves $G$ and every private consumption unchanged | [1.2](lessons/01-02-voluntary-provision-and-crowding-out.md) |
| Roberts (1984, *JPE*) | Public provision financed from contributors crowds out private giving one-for-one; used to argue public welfare spending displaces private charity | [1.2](lessons/01-02-voluntary-provision-and-crowding-out.md) |
| Bergstrom, Blume and Varian (1986, *Journal of Public Economics*) | With both goods normal the voluntary-provision equilibrium exists and is unique; with identical preferences contributors are the richest | [1.2](lessons/01-02-voluntary-provision-and-crowding-out.md) |
| Andreoni (1990, *Economic Journal*) | Warm glow: the gift enters utility, so crowd-out is partial and neutrality fails | [1.2](lessons/01-02-voluntary-provision-and-crowding-out.md) |
| Clarke (1971, *Public Choice*); Groves (1973, *Econometrica*) | The pivot mechanism and the general family: dominant-strategy truth-telling with an efficient decision | [1.3](lessons/01-03-revealing-demand-for-public-goods.md) |
| Green and Laffont (1977, *Econometrica*) | On a rich domain every efficient dominant-strategy mechanism is a Groves mechanism; none balances the budget in every state | [1.3](lessons/01-03-revealing-demand-for-public-goods.md) |
| d'Aspremont and Gerard-Varet (1979, *Journal of Public Economics*) | The expected-externality mechanism: efficient, Bayesian incentive compatible, exactly budget balanced; participation can fail | [1.3](lessons/01-03-revealing-demand-for-public-goods.md) |
| Bowen (1943, *QJE*) | With equal cost shares the median favourite wins a majority vote; efficient only if mean MRS equals median MRS | [1.3](lessons/01-03-revealing-demand-for-public-goods.md) |
| Suits and Musgrave (1953, *QJE*) | Under monopoly, for the same revenue an ad valorem tax leaves a lower price than a unit tax | [2.1](lessons/02-01-partial-equilibrium-incidence.md) |
| Weyl and Fabinger (2013, *JPE*) | Extend the curvature logic of pass-through to oligopoly and general cost curves | [2.1](lessons/02-01-partial-equilibrium-incidence.md) |
| Harberger (1962, *JPE*) | Two-sector general-equilibrium incidence; calibrated to the US, capital as a whole bears about the full corporate tax across plausible elasticities | [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md) |
| Harberger (1995) | In a small open economy with mobile capital, labor could bear more than the whole corporate tax | [2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md) |
| Hausman (1981, *AER*) | Exact consumer's surplus and deadweight loss recovered from an estimated demand curve via the expenditure function | [2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md) |
| Lipsey and Lancaster (1956, *RES*) | The general theory of second best: with one condition unmet, meeting the others is no longer in general desirable | [2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md) |
| Atkinson and Stern (1974, *RES*) | The modified Samuelson rule needs further terms with income effects | [2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md) |
| Ballard and Fullerton (1992, *JEP*) | Labor-tax examples in which the MCPF, measured another standard (uncompensated) way, falls below one | [2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md) |
| Baumol and Oates (1971, *Swedish Journal of Economics*) | Least-cost abatement as the benchmark for comparing instruments | [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md) |
| Montgomery (1972, *JET*) | A competitive permit market reaches least cost for any initial allocation | [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md) |
| Hahn (1984, *QJE*) | With market power in the permit market the initial allocation matters | [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md) |
| Schmalensee and Stavins (2013, *JEP*) | Railroad deregulation, cheapening low-sulfur western coal, did much of the SO2 program's work | [3.1](lessons/03-01-taxes-standards-and-tradable-permits.md) |
| Weitzman (1974, *RES*) | Prices beat quantities under cost uncertainty iff marginal cost is steeper than marginal benefit | [3.2](lessons/03-02-prices-vs-quantities.md) |
| Roberts and Spence (1976, *Journal of Public Economics*) | Permits plus a shortfall penalty and an over-compliance subsidy: a price collar that weakly beats both pure instruments | [3.2](lessons/03-02-prices-vs-quantities.md) |
| Stavins (1996, *JEEM*) | Correlated benefit and cost shocks: positive correlation favors quantities | [3.2](lessons/03-02-prices-vs-quantities.md) |
| Hoel and Karp (2002, *Resource and Energy Economics*) | For a stock pollutant, a higher discount rate or faster decay pushes the answer toward taxes | [3.2](lessons/03-02-prices-vs-quantities.md) |
| Newell and Pizer (2003, *JEEM*) | A stock model calibrated to climate change: prices dominate | [3.2](lessons/03-02-prices-vs-quantities.md) |
| Sandmo (1975, *Swedish Journal of Economics*) | The dirty good's optimal tax is its Ramsey term plus $\mathrm{MED}/\lambda$; damage enters no other good's rule | [3.3](lessons/03-03-pigou-in-a-second-best-world.md) |
| Bovenberg and de Mooij (1994, *AER*); Bovenberg and Goulder (1996, *AER*) | With a pre-existing labor tax the optimal environmental tax is below marginal damage | [3.3](lessons/03-03-pigou-in-a-second-best-world.md) |
| Goulder (1995, *International Tax and Public Finance*) | Distinguishes the weak and strong double dividend | [3.3](lessons/03-03-pigou-in-a-second-best-world.md) |
| Parry (1995, *JEEM*) | Decomposes a revenue-neutral environmental tax into primary gain, revenue recycling and tax interaction | [3.3](lessons/03-03-pigou-in-a-second-best-world.md) |
| Goulder, Parry and Burtraw (1997, *RAND Journal of Economics*) | Grandfathered permits give up the recycling gain and keep the interaction cost | [3.3](lessons/03-03-pigou-in-a-second-best-world.md) |
| Jacobs and de Mooij (2015, *JEEM*) | With an optimal nonlinear income tax the second-best Pigouvian tax is not corrected for the MCPF | [3.3](lessons/03-03-pigou-in-a-second-best-world.md) |
| Ramsey (1927, *EJ*) | With no lump-sum tax, raise revenue so that every good's compensated demand falls by the same proportion | [4.1](lessons/04-01-the-ramsey-rule.md) |
| Boiteux (1956, *Econometrica*); Baumol and Bradford (1970, *AER*) | A regulated firm covering a fixed cost sets Lerner indices at a common fraction of the inverse elasticities | [4.1](lessons/04-01-the-ramsey-rule.md) |
| Corlett and Hague (1953, *RES*) | With leisure untaxable, tax more heavily the goods complementary with leisure | [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md) |
| Diamond (1975, *Journal of Public Economics*) | The many-person Ramsey rule: tax a good less the more its buyers' dollars are socially valuable | [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md) |
| Feldstein (1972, *AER*) | Distributional weights in public pricing; the lesson's distributional characteristic follows him | [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md) |
| Deaton (1979, *Economics Letters*) | With an optimal linear income tax, weak separability and linear Engel curves make uniform commodity taxes optimal | [4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md) |
| Diamond and Mirrlees (1971, *AER*) | The optimal tax system is production-efficient: no intermediate-goods taxes, no tariffs, public production at producer prices | [4.3](lessons/04-03-production-efficiency-diamond-mirrlees.md) |
| Emran and Stiglitz (2005, *Journal of Public Economics*) | With a large informal sector, replacing trade taxes with a VAT that informal firms escape can lower welfare | [4.3](lessons/04-03-production-efficiency-diamond-mirrlees.md) |
| Sheshinski (1972, *RES*) | First modern treatment of the optimal linear income tax | [5.1](lessons/05-01-the-linear-income-tax.md) |
| Piketty and Saez (2013, *Handbook of Public Economics* vol. 5) | $\tau^*=(1-\bar g)/(1-\bar g+e)$ with $\bar g$ the income-weighted average weight; $e$ purely uncompensated at the revenue peak | [5.1](lessons/05-01-the-linear-income-tax.md) |
| Mirrlees (1971, *RES*) | Optimal nonlinear income taxation when skill is private: redistribution as screening | [5.2](lessons/05-02-the-mirrlees-problem.md) |
| Stiglitz (1982, *JPubE*) | The two-type self-selection model along the whole Pareto frontier | [5.2](lessons/05-02-the-mirrlees-problem.md) |
| Sadka (1976, *RES*); Seade (1977, *JPubE*) | With a bounded skill distribution the marginal rate at the very top is zero | [5.2](lessons/05-02-the-mirrlees-problem.md) |
| Saez (2001, *RES*) | The top rate from observable statistics: $\tau=(1-g)/(1-g+ae)$ | [5.3](lessons/05-03-the-saez-formula.md) |
| Diamond (1998, *AER*) | With quasilinear utility and a Pareto-tailed skill distribution, optimal marginal rates rise toward a positive constant at the top | [5.3](lessons/05-03-the-saez-formula.md) |
| Saez, Slemrod and Giertz (2012, *JEL*) | No truly convincing long-run ETI estimates; the best lie between 0.12 and 0.40; the ETI depends on the tax system; $a$ about 2 in the 1970s, about 1.5 recently | [5.3](lessons/05-03-the-saez-formula.md) |
| Piketty, Saez and Stantcheva (2014, *AEJ: Economic Policy*) | Split the ETI into labor supply, avoidance and compensation bargaining; bargaining raises the optimal top rate | [5.3](lessons/05-03-the-saez-formula.md) |
| Saez (2002, *QJE*) | At the bottom, intensive responses favor a negative income tax, extensive responses an in-work credit with a negative participation tax rate | [5.4](lessons/05-04-participation-and-the-eitc.md) |
| Eissa and Liebman (1996, *QJE*); Meyer and Rosenbaum (2001, *QJE*) | EITC expansions raised single mothers' employment, with little measurable hours reduction among workers | [5.4](lessons/05-04-participation-and-the-eitc.md) |
| Atkinson and Stiglitz (1976, *JPubE*) | With an optimal nonlinear income tax, weak separability and identical tastes, differentiated commodity taxes (a savings tax included) are Pareto-dominated by uniform ones | [6.1](lessons/06-01-atkinson-stiglitz.md) |
| Laroque (2005, *Economics Letters*); Kaplow (2006, *JPubE*) | The short proof: compensate each bundle through the income tax, leave every IC intact, free the excess burden as revenue | [6.1](lessons/06-01-atkinson-stiglitz.md) |
| Saez (2002, *JPubE*) | If tastes such as patience vary with skill, commodity or savings taxes can screen | [6.1](lessons/06-01-atkinson-stiglitz.md) |
| Mirrlees Review (*Tax by Design*, 2011) | Broadly, exempt the normal return to saving while taxing above-normal returns | [6.1](lessons/06-01-atkinson-stiglitz.md) |
| Chamley (1986, *Econometrica*); Judd (1985, *JPubE*) | With commitment and convergence to a steady state, the long-run capital income tax is zero, even for a planner who weights only workers | [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md) |
| Kydland and Prescott (1977, *JPE*) | Time inconsistency of optimal plans | [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md) |
| Fischer (1980, *Journal of Economic Dynamics and Control*) | The capital-levy case of time inconsistency | [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md) |
| Straub and Werning (2020, *AER*) | In Judd's model the long-run capital tax is positive and significant whenever the IES is below one; in Chamley's the cap can bind forever | [6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md) |
| Rogerson (1985, *Econometrica*) | The inverse Euler equation in repeated moral hazard | [6.3](lessons/06-03-the-inverse-euler-equation.md) |
| Golosov, Kocherlakota and Tsyvinski (2003, *RES*) | The inverse Euler equation with private, evolving skills: a positive savings wedge | [6.3](lessons/06-03-the-inverse-euler-equation.md) |
| Kocherlakota (2005, *Econometrica*) | An earnings-dependent linear wealth tax with zero expected revenue implements the optimum | [6.3](lessons/06-03-the-inverse-euler-equation.md) |
| Farhi and Werning (2012, *JPE*) | With general-equilibrium effects on the interest rate, the welfare gain from the savings distortion is relatively small in their benchmark calibration | [6.3](lessons/06-03-the-inverse-euler-equation.md) |
| Einav, Finkelstein and Cullen (2010, *QJE*) | Demand and cost curves estimated from price variation measure adverse selection's welfare loss; in employer health insurance, selection present but the loss small | [7.1](lessons/07-01-adverse-selection-as-a-policy-problem.md) |
| Chiappori and Salanie (2000, *JPE*) | The positive correlation test; no correlation among young French drivers | [7.1](lessons/07-01-adverse-selection-as-a-policy-problem.md) |
| Finkelstein and McGarry (2006, *AER*) | Long-term care: private information on risk and on taste for insurance offset, so the insured are not higher-risk | [7.1](lessons/07-01-adverse-selection-as-a-policy-problem.md) |
| Baily (1978, *JPubE*) | The optimal UI benefit balances the marginal-utility gap against the behavioral leak | [7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md) |
| Chetty (2006, *JPubE*) | The Baily formula holds in rich dynamic search models: a sufficient-statistics result | [7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md) |
| Chetty (2008, *JPE*) | About 60 percent of the benefit response is liquidity, implying an optimal benefit above half the wage | [7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md) |
| Gruber (1997, *AER*) | Food consumption falls about 7 percent on job loss, more than three times that without UI; current benefits justified only at fairly high risk aversion | [7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md) |
| Akerlof (1978, *AER*) | Tagging lowers the cost of redistribution by splitting the population | [7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md) |
| Nichols and Zeckhauser (1982, *AER* P&P) | Deliberate deadweight costs (ordeals) can raise welfare by improving targeting | [7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md) |
| Blackorby and Donaldson (1988, *AER*) | Self-selecting in-kind transfers can Pareto-improve on tax and subsidy optima | [7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md) |
| Currie and Gahvari (2008, *JEL*) | Survey of the theory and evidence on transfers in kind | [7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md) |
| Kleven and Kopczuk (2011, *AEJ: Economic Policy*) | Complexity as a by-product of screening: optimal programs have incomplete take-up and errors both ways | [7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md) |
| Tiebout (1956, *JPE*) | With many towns and free mobility, people reveal demand for local public goods by moving | [8.1](lessons/08-01-tiebout-voting-with-your-feet.md) |
| Oates (1969, *JPE*) | First test of capitalization: New Jersey house values fall with property-tax rates and rise with school spending per pupil | [8.1](lessons/08-01-tiebout-voting-with-your-feet.md) |
| Hamilton (1975, *Urban Studies*) | Fiscal zoning turns a property tax into a head tax | [8.1](lessons/08-01-tiebout-voting-with-your-feet.md) |
| Bewley (1981, *Econometrica*) | Rigorous Tiebout equilibria exist and are optimal only when local public goods are essentially private; natural generalizations break existence or optimality | [8.1](lessons/08-01-tiebout-voting-with-your-feet.md) |
| Oates (1972, *Fiscal Federalism*) | The decentralization theorem: tailored local provision beats uniform central provision absent spillovers and scale economies | [8.2](lessons/08-02-assignment-spillovers-and-grants.md) |
| Hines and Thaler (1995, *JEP*) | The flypaper effect: theory 5 to 10 cents per grant dollar, estimates much larger, sometimes near a dollar | [8.2](lessons/08-02-assignment-spillovers-and-grants.md) |
| Inman (2008, NBER WP 14579) | Reviews flypaper explanations; political institutions and officials' incentives fit best | [8.2](lessons/08-02-assignment-spillovers-and-grants.md) |
| Knight (2002, *AER*) | Instrumenting federal highway grants with delegation power: crowd-out of state spending of roughly 0.88 to 1.12 per grant dollar | [8.2](lessons/08-02-assignment-spillovers-and-grants.md) |
| Zodrow and Mieszkowski (1986, *JUE*); Wilson (1986, *JUE*) | Source taxation of mobile capital underprovides public goods | [8.3](lessons/08-03-tax-competition.md) |
| Brennan and Buchanan (1980, *The Power to Tax*) | Governments as revenue-maximizing Leviathans; decentralization as a constitutional restraint | [8.3](lessons/08-03-tax-competition.md) |
| Edwards and Keen (1996, *European Economic Review*) | Blend benevolent and Leviathan objectives: coordination helps residents only if waste is small relative to the excess burden | [8.3](lessons/08-03-tax-competition.md) |
| OECD/G20 Pillar Two (October 2021) | A 15 percent minimum effective rate for large multinationals, enforced by top-up taxes | [8.3](lessons/08-03-tax-competition.md) |

## Assumed, not taught here

Prerequisite tools the lessons use without deriving, in order of first use, with the lessons that lean on them. Syllabus-only courses are linked to their syllabus.

| Fact | Where it is taught |
|---|---|
| Quasilinear public goods: Samuelson condition, Nash underprovision, Lindahl prices (1.1-1.3, 8.1) | [`grad-micro` 6.4](../grad-micro/lessons/06-04-public-goods.md) |
| Lagrange multipliers as shadow prices; the envelope theorem (1.1, 2.4, 3.1, 4.1, 5.1, 5.3, 7.2) | [`grad-micro` 1.4](../grad-micro/lessons/01-04-envelope-theorem-duality.md) |
| Kuhn-Tucker multipliers on inequality constraints (5.2) | [`grad-micro` 1.3](../grad-micro/lessons/01-03-inequality-constraints-kuhn-tucker.md) |
| Pareto frontier and the welfare theorems (1.1) | [`grad-micro` 4.4](../grad-micro/lessons/04-04-two-welfare-theorems.md) |
| Nash equilibrium (1.2, 8.3) | [`grad-game-theory` 2.2](../grad-game-theory/lessons/02-02-nash-equilibrium-mixed-strategies.md) |
| Revelation principle; VCG and the pivot mechanism is dominant-strategy truthful; Myerson-Satterthwaite (1.3, 5.2) | [`grad-game-theory` 5.2](../grad-game-theory/lessons/05-02-revelation-principle-incentive-compatibility.md), [5.3](../grad-game-theory/lessons/05-03-dominant-strategy-mechanisms-vcg.md), [5.5](../grad-game-theory/lessons/05-05-limits-of-efficient-design.md) |
| Median voter theorem, single-peaked preferences; social welfare functions (1.3, 4.2, 5.1) | [`grad-micro` 6.5](../grad-micro/lessons/06-05-social-choice-welfare.md) |
| Linear-market incidence and the surplus triangle (2.1, 2.3, 2.4) | [`grad-micro` 4.1](../grad-micro/lessons/04-01-partial-equilibrium-surplus.md) |
| Monopoly pricing, the Lerner rule, third-degree price discrimination (2.1, 4.1) | [`grad-micro` 6.1](../grad-micro/lessons/06-01-monopoly-price-discrimination.md) |
| Two-sector general equilibrium with production; CES and the elasticity of substitution (2.2) | [`grad-micro` 4.2](../grad-micro/lessons/04-02-edgeworth-box-walrasian-equilibrium.md), [3.1](../grad-micro/lessons/03-01-production-sets-technology.md) |
| Expenditure function, Hicksian demand, Shephard's lemma (2.3, 3.3, 6.1) | [`grad-micro` 2.3](../grad-micro/lessons/02-03-expenditure-minimization-duality.md) |
| Slutsky equation and symmetry of the substitution matrix; Roy's identity (2.3, 4.1, 4.2) | [`grad-micro` 2.4](../grad-micro/lessons/02-04-slutsky-equation-comparative-statics.md) |
| Cost minimization and input substitution; aggregating firms into one production set (4.3) | [`grad-micro` 3.2](../grad-micro/lessons/03-02-cost-minimization.md), [3.4](../grad-micro/lessons/03-04-aggregation-and-the-firm.md) |
| Pigouvian tax and the Coase theorem (3.1, 3.3, 8.2) | [`grad-micro` 6.3](../grad-micro/lessons/06-03-externalities-coase-theorem.md) |
| Screening, incentive compatibility and single crossing (5.2, 6.1, 7.3, 8.1) | [`grad-micro` 5.3](../grad-micro/lessons/05-03-screening.md) |
| Risk aversion, CRRA utility, Jensen's inequality (6.3, 7.2) | [`grad-micro` 2.5](../grad-micro/lessons/02-05-choice-under-uncertainty.md) |
| Euler equation; Ramsey-Cass-Koopmans steady state (6.2, 6.3) | [`grad-macro` 1.3](../grad-macro/lessons/01-03-euler-transversality.md), [2.3](../grad-macro/lessons/02-03-ramsey-cass-koopmans.md) |
| Life-cycle saving (6.1) | [`grad-macro` 5.1](../grad-macro/lessons/05-01-permanent-income-life-cycle.md) |
| Prudence and precautionary saving (6.3, 7.2) | [`grad-macro` 5.2](../grad-macro/lessons/05-02-precautionary-saving.md) |
| Time inconsistency and inflation bias (6.2) | [`grad-macro` 6.2](../grad-macro/lessons/06-02-policy-rules-taylor-principle.md) |
| Ricardian equivalence and operative bequests (1.2) | [`grad-macro` 3.4](../grad-macro/lessons/03-04-social-security-transfers.md) |
| Adverse selection and unraveling; moral hazard and the insurance-incentive trade-off (7.1, 7.2, 6.3) | [`grad-micro` 5.1](../grad-micro/lessons/05-01-adverse-selection-lemons.md), [5.4](../grad-micro/lessons/05-04-moral-hazard-principal-agent.md) |
| Difference-in-differences and event studies (2.1, 5.3, 5.4) | [`econometrics` 4.3](../econometrics/lessons/04-03-difference-in-differences.md), [4.4](../econometrics/lessons/04-04-event-studies-dynamic-did.md) |
| Instrumental variables (7.1, 8.2) | [`econometrics` 3.6](../econometrics/lessons/03-06-instrumental-variables.md) |
| Regression discontinuity (7.2, 8.1) | [`econometrics` 4.7](../econometrics/lessons/04-07-regression-discontinuity.md) |
| Which welfare weights are right (every optimal-tax lesson) | [`philosophy-of-economics`](../philosophy-of-economics/syllabus.md); [`political-philosophy`](../political-philosophy/syllabus.md); [`decision-theory`](../decision-theory/syllabus.md) |

## Pitfalls

Every lesson's "Watch out", one line per trap, grouped by theme: the wrong belief, then the correction.

### Efficiency depends on who holds the money

- The Samuelson rule does not pick out *the* efficient $G$: it picks one per point on the Pareto frontier, and only the Bergstrom-Cornes form gives a single number. *([1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md))*
- Cobb-Douglas does not always make $G^*$ depend on distribution: *identical* Cobb-Douglas is in the Bergstrom-Cornes class; what breaks independence is income effects that differ across people. *([1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md))*
- "Efficient $G$ depends on distribution" is not a claim about fairness: it is positive, and choosing among efficient points needs welfare weights, which the course takes as given. *([1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md))*
- A club good is not a public good with a gate: congestion makes it partly rival, which is what gives the club an optimal size. *([1.1](lessons/01-01-the-samuelson-rule-beyond-quasilinearity.md))*

### Private giving and crowd-out

- Warr neutrality does not say redistribution never matters: it covers only transfers among people who remain contributors; a transfer to a non-contributor lowers $G$ whenever $G$ is normal. *([1.2](lessons/01-02-voluntary-provision-and-crowding-out.md))*
- The flatness of the quasilinear case is not neutrality: it is the absence of income effects, and it holds across the contributor boundary too. *([1.2](lessons/01-02-voluntary-provision-and-crowding-out.md))*
- Full crowd-out does not make public provision useless: it makes provision *up to current giving* useless; beyond that every dollar raises $G$. *([1.2](lessons/01-02-voluntary-provision-and-crowding-out.md))*
- A grant financed by non-contributors is not neutral: it is a boundary-crossing transfer that raises $G$, and giving falls only by $k/(k+1)$ per dollar. *([1.2](lessons/01-02-voluntary-provision-and-crowding-out.md))*

### Eliciting valuations

- Understating under Lindahl pricing does not leave $G$ unchanged: $G$ falls, but the loss is second order while the price cut saves money on every unit. *([1.3](lessons/01-03-revealing-demand-for-public-goods.md))*
- The pivot mechanism is not efficient: only its *decision* is; the burned surplus is a real loss and can exceed the gain from building. *([1.3](lessons/01-03-revealing-demand-for-public-goods.md))*
- AGV does not contradict Green-Laffont: it weakens truth-telling to Bayesian, and pays for it with participation that can fail. *([1.3](lessons/01-03-revealing-demand-for-public-goods.md))*
- Majority voting does not fail because of strategic voting: sincere voting is dominant in a pairwise vote; the problem is that a vote cannot register intensity. *([1.3](lessons/01-03-revealing-demand-for-public-goods.md))*

### Who pays versus who remits

- A payroll tax "split half and half" is not borne half and half: the statutory split is irrelevant in competition; with inelastic labor supply workers bear most of both halves. *([2.1](lessons/02-01-partial-equilibrium-incidence.md))*
- The incidence formula is not exact: it is a derivative at the old equilibrium; for large taxes solve the model (22 percent against the formula's 20). *([2.1](lessons/02-01-partial-equilibrium-incidence.md))*
- Pass-through above one does not signal collusion: a single monopolist facing log-convex demand overshifts while maximizing profit. *([2.1](lessons/02-01-partial-equilibrium-incidence.md))*
- Unit and ad valorem taxes are interchangeable only under perfect competition: with a markup the ad valorem tax taxes the markup too. *([2.1](lessons/02-01-partial-equilibrium-incidence.md))*
- A tax on corporate capital is not borne by corporate shareholders alone: mobility equalizes net returns, so every owner of capital, a homeowner or a farmer included, bears it. *([2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md))*
- Labor-intensity of the taxed sector does not protect workers: it is the reverse; the output effect then raises $r/w$ and pushes burden onto labor (45 against 55). *([2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md))*
- "Capital bears 100 percent" does not mean the two effects cancel: in the Cobb-Douglas case both push $r$ down and the total is still exactly 100; the benchmark is unit elasticities, not offsetting effects. *([2.2](lessons/02-02-general-equilibrium-incidence-the-harberger-model.md))*

### Measuring what a tax destroys

- A tax that changes no behavior can still cause excess burden: only the *compensated* response matters (zero hours response, 10.78 dollars a week lost); when income effects reinforce substitution, the uncompensated response overstates the loss. *([2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md))*
- Doubling the rate does not exactly quadruple the loss: that holds for the Harberger approximation and linear compensated demand only (the constant-elasticity example gives 3.5). *([2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md))*
- EV and CV are not two estimates of one true number: they answer different questions at different reference prices and differ whenever there are income effects; pick one and use it consistently. *([2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md))*
- Excess burden alone does not say a tax is too high: it is one side of a ledger; whether the revenue buys more is 2.4's question, and how to weigh who carries it needs welfare weights. *([2.3](lessons/02-03-excess-burden-and-the-harberger-triangle.md))*
- The MCPF is not one plus the average burden: it is a ratio of margins (marginal 0.5 against average 0.15 in 2.4's example); the average understates the bar a project must clear. *([2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md))*
- Removing any one distortion is not automatically an improvement: with tea taxed, the zero coffee tax is not optimal; with a taxed complement, the second-best policy is a subsidy. *([2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md))*
- The MCPF is not one fixed number for "the tax system": it depends on the financing tax, its interactions and the convention, and it can be below one. *([2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md))*
- An optimal system does not mix a low-MCPF tax with a high-MCPF one: an optimum equalizes them, the single $\lambda$ behind the Ramsey rule. *([2.4](lessons/02-04-second-best-and-the-marginal-cost-of-public-funds.md))*

### Choosing an externality instrument

- A uniform standard is not the "equal burden" choice: it equalizes tons, not the cost of the last ton (56 against 14 in 3.1's Example 1). *([3.1](lessons/03-01-taxes-standards-and-tradable-permits.md))*
- Free permits do not make firms abate less: a held permit costs its sale price, so the gift leaves the margin alone; the exceptions are market power in the permit market and allocations updated on a firm's own emissions or output. *([3.1](lessons/03-01-taxes-standards-and-tradable-permits.md))*
- A tax and a permit market are not always interchangeable: the equivalence uses certainty; with uncertain costs they diverge. *([3.1](lessons/03-01-taxes-standards-and-tradable-permits.md))*
- The instrument that is exact about its own variable does not automatically win: each is exact by construction; what decides is the slopes, $C$ against $D$. *([3.2](lessons/03-02-prices-vs-quantities.md))*
- Uncertainty about damages does not favor a cap: benefit uncertainty uncorrelated with costs is irrelevant, since neither instrument learns it. *([3.2](lessons/03-02-prices-vs-quantities.md))*
- Cap-and-trade is not a pure quantity instrument in practice: banking, borrowing and collars make it respond to price, moving it toward a tax. *([3.2](lessons/03-02-prices-vs-quantities.md))*
- $\Delta$ does not measure how much pollution differs: it is expected surplus; expected abatement is $a^*$ under both instruments. *([3.2](lessons/03-02-prices-vs-quantities.md))*
- "The optimal environmental tax is below MED" is not a theorem: it is the benchmark's result; an inelastic dirty good or a complement to leisure can put it above MED. *([3.3](lessons/03-03-pigou-in-a-second-best-world.md))*
- Dividing by the MCPF is not always right: with an optimal nonlinear income tax the correction disappears and the second-best tax equals MED. *([3.3](lessons/03-03-pigou-in-a-second-best-world.md))*
- The weak double dividend is not an argument for the tax: it compares two uses of revenue; the case for the tax rests on net benefit. *([3.3](lessons/03-03-pigou-in-a-second-best-world.md))*

### Setting commodity taxes

- Ramsey does not equalize tax rates: it equalizes proportional cuts in compensated quantity; with independent demands rates are equal only when compensated elasticities are. *([4.1](lessons/04-01-the-ramsey-rule.md))*
- The inverse elasticity rule is not the Ramsey rule: it is the special case with no compensated cross effects; with substitutes or complements use $\sum_jt_jS_{ij}=-\theta x_i$. *([4.1](lessons/04-01-the-ramsey-rule.md))*
- Measured (uncompensated) elasticities do not belong in the rule: income effects wash into $\theta$, and the rates run on compensated elasticities. *([4.1](lessons/04-01-the-ramsey-rule.md))*
- The rule does not say necessities *should* be taxed most: it says that minimizes excess burden for one representative consumer; with a lump-sum tax $\theta=0$, and with unequal households 4.2 changes the answer. *([4.1](lessons/04-01-the-ramsey-rule.md))*
- A good the poor buy does not always get a low rate: the rule trades $\delta_k$ against elasticity. *([4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md))*
- $\delta_k$ does not track budget shares: it tracks *consumption* shares, who buys the units. *([4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md))*
- Corlett-Hague does not tax vacations because the rich buy them: it holds with one consumer; it is about the untaxable good. *([4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md))*
- Uniform rates are not a neutral default: they are optimal only under the separability conditions; given a good income tax, they spare the rate schedule from redistributing. *([4.2](lessons/04-02-many-person-ramsey-and-corlett-hague.md))*

### Taxing firms and inputs

- Diamond-Mirrlees does not say "don't tax business": it says don't tax transactions *between* firms; final consumption and labor are the taxes, and condition (ii) wants pure profits taxed away. *([4.3](lessons/04-03-production-efficiency-diamond-mirrlees.md))*
- An input tax is not just an indirect tax on the final good: that holds only with fixed proportions; with substitution it adds production waste to the triangle. *([4.3](lessons/04-03-production-efficiency-diamond-mirrlees.md))*
- Second best does not mean "spread small distortions everywhere": the optimum distorts consumer prices and leaves production first best, when (i) and (ii) hold. *([4.3](lessons/04-03-production-efficiency-diamond-mirrlees.md))*
- Public projects are not costed at what things sell for: they are costed at producer prices; cement carrying a reclaimable VAT costs its net-of-tax price. *([4.3](lessons/04-03-production-efficiency-diamond-mirrlees.md))*

### Reading income tax formulas

- Maximin does not always mean the Laffer rate: only if the worst-off earn nothing; otherwise $\bar g=z_{\min}/Z>0$ and maximin stops short of the peak. *([5.1](lessons/05-01-the-linear-income-tax.md))*
- $\bar g$ is not the plain average weight, which is one by construction: it is the average weighted by income, equivalently the covariance of weights with income. *([5.1](lessons/05-01-the-linear-income-tax.md))*
- $\bar g$ is not a fixed number estimated once: it moves with $\tau$; the formula holds at the optimum, and off it $\bar g$ gives only the direction of reform. *([5.1](lessons/05-01-the-linear-income-tax.md))*
- $e$ is not a labor-supply elasticity: it is the response of all taxable income, and with income effects a budget-balanced mix (purely uncompensated at the revenue peak). *([5.1](lessons/05-01-the-linear-income-tax.md))*
- The implicit rate is not the tax paid: it is a slope; Low receives 0.64 at a 22 percent marginal rate. *([5.2](lessons/05-02-the-mirrlees-problem.md))*
- "No distortion at the top" does not mean the rich are taxed lightly: it concerns the type nobody wants to imitate; reverse the weights and the distortion lands on High. *([5.2](lessons/05-02-the-mirrlees-problem.md))*
- Low's distortion is not for nothing: it relaxes High's IC and frees revenue the objective values more than Low's lost hours. *([5.2](lessons/05-02-the-mirrlees-problem.md))*
- The government need not learn who is skilled: it needs the skill distribution; the menu makes each worker reveal his type. *([5.2](lessons/05-02-the-mirrlees-problem.md))*
- There is no binding IR to carry over from `grad-micro`'s monopolist: nobody opts out of the tax code, and the budget constraint sets the levels. *([5.2](lessons/05-02-the-mirrlees-problem.md))*
- A thicker top tail does not call for a lower rate: it means a lower $a$ and a *higher* rate. *([5.3](lessons/05-03-the-saez-formula.md))*
- $g=0$ does not mean the rich do not count: it prices their marginal dollar at zero relative to public revenue; rates above $1/(1+ae)$ make everyone worse off whatever the weights. *([5.3](lessons/05-03-the-saez-formula.md))*
- The Saez rate does not contradict the zero top rate: that concerns the single highest earner of a bounded distribution; Saez sets the rate on a bracket of an unbounded measured tail. *([5.3](lessons/05-03-the-saez-formula.md))*
- $e$ is not only a fact about preferences: its avoidance part is a policy choice, and shifted income landing in another base changes the formula. *([5.3](lessons/05-03-the-saez-formula.md))*

### The bottom of the schedule

- A high marginal rate and a high participation tax rate are not the same: they can have opposite signs (+20 percent against $-6.7$ percent at 30,000 dollars). *([5.4](lessons/05-04-participation-and-the-eitc.md))*
- An EITC does not follow from caring most about the poorest: maximin gives a *positive* participation tax; the negative rate needs $g_i>1$ on the working poor. *([5.4](lessons/05-04-participation-and-the-eitc.md))*
- $\tau_p<0$ does not mean an unpriced loss on every entrant: the formula already balances the welfare gain ($g_i-1$ per dollar) against the entrants' revenue cost. *([5.4](lessons/05-04-participation-and-the-eitc.md))*
- Benefit phase-outs are not small because each is modest: programs withdrawn on the same earnings stack, and a cliff can push the effective rate past 100 percent. *([5.4](lessons/05-04-participation-and-the-eitc.md))*

### Taxing saving and capital

- Atkinson-Stiglitz does not say commodity taxes are zero: it says they are uniform; only *differences* in rates are redundant. *([6.1](lessons/06-01-atkinson-stiglitz.md))*
- Atkinson-Stiglitz does not contradict Ramsey: the tool sets differ; with a nonlinear income tax, a commodity tax must earn its place as a screening device. *([6.1](lessons/06-01-atkinson-stiglitz.md))*
- "No tax on savings" does not mean no tax on capital income of any kind: it covers the normal return for identical-taste workers; heterogeneous tastes, inherited wealth and risky private skill reopen it. *([6.1](lessons/06-01-atkinson-stiglitz.md))*
- Separability is not goods and leisure being "unrelated": it is a condition on the MRS among goods; multiplicative Cobb-Douglas is separable. *([6.1](lessons/06-01-atkinson-stiglitz.md))*
- Chamley-Judd does not say tax capital at zero always: at the start the committed optimum taxes existing capital as hard as allowed; the zero is a long-run property. *([6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md))*
- A zero capital tax does not mean no tax on savers: a constant consumption tax is a labor tax plus a one-time levy on initial wealth, with zero intertemporal wedge. *([6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md))*
- Chamley-Judd is not a theorem about the world: it needs convergence to a steady state, full commitment, and savers without borrowing limits or uninsured risk. *([6.2](lessons/06-02-chamley-judd-and-the-exploding-wedge.md))*
- A positive savings wedge is not a positive tax on capital income: it is an implicit marginal distortion, delivered by Kocherlakota's scheme at an average tax of zero. *([6.3](lessons/06-03-the-inverse-euler-equation.md))*
- The inverse Euler equation does not refute Atkinson-Stiglitz: separability still holds; what changed is that skill is revealed *after* saving. *([6.3](lessons/06-03-the-inverse-euler-equation.md))*
- The convex function is not $1/u'(c)$ in $c$: Jensen is applied to $1/x$ as a function of marginal utility; with CRRA $\gamma<1$, $c^\gamma$ is concave yet the wedge is positive. *([6.3](lessons/06-03-the-inverse-euler-equation.md))*
- Uncertainty alone does not create the wedge: risk the planner can insure fully gives $\tau_s=0$; the wedge needs risk that is private and only partly insurable. *([6.3](lessons/06-03-the-inverse-euler-equation.md))*

### Insurance markets and public insurance

- The efficient benchmark is not full coverage: it is $P=\mathrm{MC}$; covering people whose coverage costs more than they value it loses surplus. *([7.1](lessons/07-01-adverse-selection-as-a-policy-problem.md))*
- Equilibrium is not where demand meets MC: it is where demand meets AC; price covers the pool, and with adverse selection it is too high. *([7.1](lessons/07-01-adverse-selection-as-a-policy-problem.md))*
- A positive coverage-risk correlation does not prove adverse selection: moral hazard predicts the same; the test rejects symmetric information without saying which asymmetry. *([7.1](lessons/07-01-adverse-selection-as-a-policy-problem.md))*
- No correlation does not mean no selection: risk and taste for insurance can cancel. *([7.1](lessons/07-01-adverse-selection-as-a-policy-problem.md))*
- A rise in unemployment duration does not prove benefits are too high: part is liquidity, which is the insurance working, and its size relative to moral hazard *is* the left side of Baily-Chetty. *([7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md))*
- $\varepsilon_{1-e,b}$ is not a fixed parameter: it is evaluated at the current benefit and typically rises with it; "raise" gives the direction, not the distance. *([7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md))*
- $\gamma\,\Delta c/c$ is not exact enough: it always understates the CRRA gain, decisively when $\gamma$ or the drop is large. *([7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md))*
- 7.2's $e$ is not the elasticity of taxable income: it is the employment probability, and the right side divides an elasticity by it. *([7.2](lessons/07-02-optimal-unemployment-insurance-baily-chetty.md))*

### Targeting transfers

- An ordeal is not just waste: waste can buy targeting when $c_N/b<1-1/g_N$; the same burn with no screening gain never pays. *([7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md))*
- A tag is not free information: it is a target; a tag carrying a large benefit invites faking. *([7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md))*
- In kind does not always beat cash for screening: the good must be worth less, relative to cost, to those you want to deter, and not resellable. *([7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md))*
- Low take-up does not mean a program is failing: take-up measures the claim cost, not its sign; what matters is *who* it deters. *([7.3](lessons/07-03-tagging-ordeals-and-in-kind-benefits.md))*

### Mobility and competing governments

- Tiebout does not solve 1.3's revelation problem in general: only for local, replicable goods; a pure public good with no congestion cannot be shopped for, and sorting sacrifices its scale. *([8.1](lessons/08-01-tiebout-voting-with-your-feet.md))*
- Capitalization does not prove Tiebout efficiency: it shows people value fiscal differences; full, persistent capitalization means inelastic supply of towns, a departure from Tiebout. *([8.1](lessons/08-01-tiebout-voting-with-your-feet.md))*
- A property tax does not work like a head tax: without zoning it subsidizes small houses in high-spending towns. *([8.1](lessons/08-01-tiebout-voting-with-your-feet.md))*
- Sorting is not by income: in the model it is by demand for $g$; income matters only through demand. *([8.1](lessons/08-01-tiebout-voting-with-your-feet.md))*
- A matching grant is not a more targeted gift: it is a price change, whose substitution effect is its whole job with a spillover and its whole cost without one. *([8.2](lessons/08-02-assignment-spillovers-and-grants.md))*
- The Pigouvian matching rate is not the spillover as a share of *residents'* benefit: it is the share of *total* benefit ($\sigma=1/3$, not $1/2$, when outsiders get half as much as residents). *([8.2](lessons/08-02-assignment-spillovers-and-grants.md))*
- The flypaper effect in a naive regression does not prove grants raise spending: grants sent where tastes for spending are high manufacture it; credible estimates use instruments. *([8.2](lessons/08-02-assignment-spillovers-and-grants.md))*
- The decentralization theorem does not say centralization is inefficient: it assumes the center must be uniform. *([8.2](lessons/08-02-assignment-spillovers-and-grants.md))*
- A race to the bottom does not end at zero here: it stops at a positive floor (20/3 in 8.3's Example 1); zero needs towns too small to move $\rho$ and an immobile-factor tax. *([8.3](lessons/08-03-tax-competition.md))*
- Low-tax towns do not gain by attracting capital: in the symmetric Nash equilibrium every town cuts and no capital moves. *([8.3](lessons/08-03-tax-competition.md))*
- The towns are not making a mistake: each computes its own MCPF correctly; the inefficiency is an externality, cured by making each face the social cost. *([8.3](lessons/08-03-tax-competition.md))*
- Competition is not always bad: it hurts a benevolent planner and restrains a Leviathan. *([8.3](lessons/08-03-tax-competition.md))*
