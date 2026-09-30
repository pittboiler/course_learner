# Economics of Debt · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course prices a fixed promise made in an uncertain world: why hidden information selects debt as the contract, what debt does to firms, banks, households and governments when outcomes disappoint, and what default, restructuring and relief change before and after the fact. Mid-problem, use the card to find a model's setup and result in the lessons' notation, the formula for a threshold, price or haircut, the meaning a reused symbol has in a given lesson, and where a borrowed tool from micro, macro, game theory, finance or econometrics is taught.

## Scope and ownership

This is the formal member of the debt thread. `history-of-debt` supplies the episodes, `philosophy-of-debt` asks what is owed and whether relief, interest or repudiation is just, and `theology-of-debt` reads the Jubilee and usury as doctrine. This course stays positive: entries state models and results, name who gains and who pays, and never rule on whether an allocation is fair.

| Topic | Owned by | What this course does with it |
|---|---|---|
| Adverse selection, screening, moral hazard and the principal-agent model | [`grad-micro` 5.1](../grad-micro/lessons/05-01-adverse-selection-lemons.md), [5.3](../grad-micro/lessons/05-03-screening.md), [5.4](../grad-micro/lessons/05-04-moral-hazard-principal-agent.md) | Assumed. Owned here as credit-market theory: costly state verification, Stiglitz-Weiss rationing, collateral as a screen, pledgeable income (Module 1) |
| Revelation principle, incentive compatibility, participation | [`grad-game-theory` 5.2](../grad-game-theory/lessons/05-02-revelation-principle-incentive-compatibility.md); [`grad-micro` 5.5](../grad-micro/lessons/05-05-mechanism-design-markets.md) | Cited. 1.1 sets up costly verification as a mechanism-design problem; 8.2 treats a scheduled release as a mechanism |
| Repeated games, trigger strategies, folk theorems; bargaining | [`grad-game-theory` 3.3](../grad-game-theory/lessons/03-03-repeated-games-finite-infinite.md), [3.4](../grad-game-theory/lessons/03-04-folk-theorems.md), [3.5](../grad-game-theory/lessons/03-05-bargaining.md) | Cited. Eaton-Gersovitz is a repeated game with exclusion as the punishment (6.2); recontracting (6.3) and restructuring (7.1-7.3) use bargaining without re-deriving it; odious-debt rules select among many equilibria (8.4) |
| Arbitrage and the law of one price; CAPM; Black-Scholes; bond pricing | [`mathematical-finance` 1.1](../mathematical-finance/lessons/01-01-arbitrage-law-of-one-price.md), [3.2](../mathematical-finance/lessons/03-02-capm.md), [2.4](../mathematical-finance/lessons/02-04-black-scholes-formula.md), [4.1](../mathematical-finance/lessons/04-01-term-structure-bond-pricing.md) | MM's proof applies the law of one price (2.1); equity as a call uses Black-Scholes as given (2.3); haircuts use plain discounting (7.1). No term-structure or credit-derivative models |
| Dynamic inefficiency, rational bubbles, Ricardian equivalence | [`grad-macro` 3.2](../grad-macro/lessons/03-02-dynamic-inefficiency.md), [3.3](../grad-macro/lessons/03-03-money-rational-bubbles.md), [3.4](../grad-macro/lessons/03-04-social-security-transfers.md) | Assumed. 5.1 cites Ricardian equivalence; 5.2 takes the chain of transfers that works when the return is below growth and asks what it means for public debt; 3.4 prices land with no bubble |
| Euler equations and transversality; dynamic programming | [`grad-macro` 1.2](../grad-macro/lessons/01-02-principle-of-optimality.md), [1.3](../grad-macro/lessons/01-03-euler-transversality.md), [1.5](../grad-macro/lessons/01-05-stochastic-dynamic-programming.md) | Used. The government's no-Ponzi condition is its creditors' transversality condition (5.1); Arellano's default problem is a stochastic Bellman equation (6.4) |
| Permanent income, precautionary saving, borrowing limits, heterogeneous agents | [`grad-macro` 5.1](../grad-macro/lessons/05-01-permanent-income-life-cycle.md), [5.2](../grad-macro/lessons/05-02-precautionary-saving.md), [6.4](../grad-macro/lessons/06-04-heterogeneous-agent-taste.md) | Cited for why constrained households have high MPCs (4.1, 4.3) and why a discharge insures them (8.1). Tax smoothing is consumption smoothing with the government as the household (5.3) |
| The New Keynesian model, the zero lower bound, the Taylor principle | [`grad-macro` 6.1](../grad-macro/lessons/06-01-monetary-fiscal-nk.md), [6.2](../grad-macro/lessons/06-02-policy-rules-taylor-principle.md) | Cited. Deleveraging at the zero lower bound (4.1, 4.4); the fiscal theory as the fiscal side of the determinacy question (5.5) |
| Tobin's $q$ | [`grad-macro` 5.3](../grad-macro/lessons/05-03-q-theory-investment.md) | Cited. Overhang is a wedge between the project's $q$ and equity's (2.4) |
| Optimal taxation; the capital levy and time inconsistency | [`public-economics`](../public-economics/syllabus.md) 2.3, 4.1, 5.1, 6.2 | The tax side is cited. Public-economics cedes public debt and sustainability, so tax smoothing and optimal debt are owned here (5.3); the capital levy's time inconsistency returns as forgiveness (8.1) |
| IV, LATE, difference-in-differences, regression discontinuity | [`econometrics` 3.6](../econometrics/lessons/03-06-instrumental-variables.md), [3.8](../econometrics/lessons/03-08-weak-instruments-and-late.md), [4.3](../econometrics/lessons/04-03-difference-in-differences.md), [4.7](../econometrics/lessons/04-07-regression-discontinuity.md) | Used to read the household-debt evidence (4.3) and the bankruptcy evidence (8.1). Identification is cited, not taught |
| Debt's history and episodes | `history-of-debt`, lessons linked at right | Episodes are cited as applications, never retold. Its hand-offs are modeled here: the commenda versus the sea loan ([2.1](../history-of-debt/lessons/02-01-commerce-around-the-prohibition.md)) in 1.1; monopoly lending versus risk premia ([4.3](../history-of-debt/lessons/04-03-debt-peonage-after-slavery.md)) in 1.4; the leverage cycle and the dispute over who borrowed ([6.1](../history-of-debt/lessons/06-01-the-american-mortgage-and-2008.md)) in 3.5 and 4.3; the debt-ratio identity ([3.4](../history-of-debt/lessons/03-04-humes-prophecy-carrying-a-great-debt.md)) and self-defeating consolidation ([6.2](../history-of-debt/lessons/06-02-the-eurozone-and-greece.md)) in 5.1; the transfer problem ([5.2](../history-of-debt/lessons/05-02-could-germany-pay.md)) in 6.1; reputation versus gunboats ([4.6](../history-of-debt/lessons/04-06-bondholders-gunboats-and-receiverships.md)) in 6.2-6.3; credible commitment ([3.2](../history-of-debt/lessons/03-02-did-1688-make-britain-creditworthy.md)) in 6.3; nominal versus present-value haircuts ([5.4](../history-of-debt/lessons/05-04-from-mexico-1982-to-the-brady-plan.md)) in 7.1; holdouts and clauses ([6.3](../history-of-debt/lessons/06-03-holdouts-and-the-law-of-sovereign-restructuring.md)) and seniority ([6.4](../history-of-debt/lessons/06-04-new-creditors.md)) in 7.2; clean slates and the release laws ([1.2](../history-of-debt/lessons/01-02-debt-bondage-and-the-royal-clean-slate.md), [1.3](../history-of-debt/lessons/01-03-release-laws-in-ancient-israel.md)) in 8.2 |
| Credible commitment as a general political model | [`institutions-and-development`](../institutions-and-development/syllabus.md) | Only the sovereign-debt version: what makes repayment credible (6.3) |
| Bankruptcy and the Contracts Clause as constitutional doctrine | [`constitutional-law`](../constitutional-law/syllabus.md) 4.2 | Not taught. Bankruptcy is designed here as an economic mechanism (7.3, 8.1) |
| The IMF and World Bank as organizations | [`international-relations`](../international-relations/syllabus.md) 5.5 | Only as actors inside models: a backstop in a rollover crisis (6.5), a senior creditor (7.2), HIPC's relief triggers (8.3) |
| Why imposed sanctions look ineffective | [`conflict-and-bargaining`](../conflict-and-bargaining/syllabus.md) 5.4 | Not taught. 8.4 models loan sanctions against a designated regime only |
| Moral arguments: forgiveness and moral hazard as justice, odious debt, the justice of interest, debts across generations; bankruptcy and the Jubilee as moral institutions | [`philosophy-of-debt` 5.2](../philosophy-of-debt/lessons/05-02-moral-hazard-and-fairness-to-those-who-paid.md), [5.3](../philosophy-of-debt/lessons/05-03-bankruptcy-as-a-moral-institution.md), [5.4](../philosophy-of-debt/lessons/05-04-jubilee-as-a-moral-principle.md), [6.3](../philosophy-of-debt/lessons/06-03-whose-debt-is-it.md) | Moral hazard is computed as an incentive effect and nothing more (2.3, 8.1). Jackson's creditors' bargain is used as mechanism design (7.3). Odious debt as a moral doctrine is not taught; the Jayachandran-Kremer model of declaring regimes odious in advance is (8.4), ceded by philosophy-of-debt 6.3 |
| The loan-rate decomposition as arithmetic | [`philosophy-of-debt` 2.3](../philosophy-of-debt/lessons/02-03-justifying-interest.md), [3.2](../philosophy-of-debt/lessons/03-02-predatory-lending-and-usury-caps.md); [`theology-of-debt` 4.4](../theology-of-debt/lessons/04-04-the-extrinsic-titles.md), [5.1](../theology-of-debt/lessons/05-01-the-monti-di-pieta-and-lateran-v.md), [5.4](../theology-of-debt/lessons/05-04-did-the-usury-doctrine-change.md), [6.1](../theology-of-debt/lessons/06-01-usury-and-finance-in-modern-teaching.md) | Owned here as a model (1.4): the zero-profit rate with recovery and fixed costs, the markup, and what a ceiling does, including a ceiling of zero. The siblings' cases are cited, not reworked |
| The Jubilee and usury as theology; the arithmetic inside the release texts | [`theology-of-debt` 1.2](../theology-of-debt/lessons/01-02-the-seventh-year-deuteronomy-15.md), [1.3](../theology-of-debt/lessons/01-03-the-jubilee-the-land-is-mine.md), [1.4](../theology-of-debt/lessons/01-04-creditors-under-judgment.md), [6.2](../theology-of-debt/lessons/06-02-international-debt-and-the-jubilee-call.md), [6.3](../theology-of-debt/lessons/06-03-the-ethics-of-personal-debt.md) | 8.2 formalizes a scheduled release and cites the texts only for what the rule was; theology's undiscounted count of harvests is 8.2's $r=0$ case, and its land-concentration spiral (1.4) is 8.2's absorbing state. Its 6.3 hands over what a discharge law does to the rate (8.1) |
| Money and credit as social forms | [`social-theory`](../social-theory/syllabus.md) 5.2-5.3 | Not taught |

**Convention warnings.**

- **Reused symbols.** The Notation table below disambiguates by lesson. The heaviest reuse: $q$ is Tobin's $q$ (2.4), a land price (3.4), the real exchange rate (6.1) and a bond price per unit of face (6.4, 6.5, 7.1, 7.2); $R$ is a gross loan rate (1.2), a success return (1.3), the long technology's return (3.1-3.2), the gross interest rate (3.4), an overall default rate (4.3) and a per-generation return (5.2); $\lambda$ is a recovery share (1.4, 7.3, 8.3), a shadow value (4.4), a budget multiplier (5.3) and a maturing share (6.5); $\theta$, $\pi$, $\kappa$, $\tau$, $\gamma$, $\delta$ and $L$ each carry several meanings too.
- **Face versus market value.** In Module 1 and from 3.3 on, $D$ is a face value. In Module 2 the face is $F$, and $D$ and $E$ are market values. 2.1's $r_D$ is the expected return after default losses, not the promised yield; 2.3's $y$ is the promised yield.
- **Gross versus net.** $R$, $R_f$ and $\rho$ are gross rates; $r$, $r_f$, $r^{zp}$ and $i$ are net. 2.3's $r$ and 5.4's inflation $\pi$ are continuously compounded. 2.1's $r_A$ and 2.2's $r_U$ are the same return on the unlevered firm.
- **Debt ratios.** Module 5 uses `history-of-debt`'s symbols: $d_t$ is debt over GDP at the start of year $t$, $s_t$ the primary surplus over GDP, $a=(1+r)/(1+g)$. 6.1's $g$ is a loop gain, not growth. 5.5's $B_{t-1}$ includes this year's interest, so this year's surplus enters undiscounted.
- **Solvency versus stability.** Bohn's solvency needs only $\rho>0$; a stable ratio, and Leeper's passive treasury, need $\rho>a-1$.
- **Haircuts.** 7.1's $H^{SZ}$ discounts old and new payments at the exit yield. `history-of-debt`'s "present-value haircut" sets the new bond's value against the old face, which is 7.1's market haircut $H^M$.
- **The siblings' loan-rate notation.** `theology-of-debt`'s break-even premium $p/(1-p)$ and `history-of-debt`'s cancellation-risk rate, $(1-p)(1+r)=1+r_0$, are 1.4's zero-profit rate with no recovery and no handling; `theology-of-debt`'s card writes an expected loss as $q$ times loss given default, with $q$ a default probability; on this card $q$ is never a probability. `philosophy-of-debt` writes $1+i=(1+r_f)(1+\pi)/(1-p\ell)$, with $\pi$ a residual premium and $\ell$ the share of what is owed that is lost in default; 1.4's $\lambda$ is instead the recovery as a share of principal.
- **Where the lessons corrected the syllabus, the card follows the lessons.** 6.1's required depreciation $T/(X\eta_X+M\eta_M)$ holds only for a price taker, and Marshall-Lerner governs the home-priced case. 6.2's contract is state-contingent insurance; Eaton and Gersovitz's non-contingent debt is solved in 6.4, where default comes in slumps because of risk aversion, not because of the output cap. With $h>v$, 7.2's holdout game is a free-rider problem, not a coordination game. The fiscal theory is 5.5's, not 5.4's. The GDP warrants actually issued paid only on the upside (8.3). The 2026-09-28 revision added 1.4, 4.4 and 8.4 and split the old 5.4 into 5.4 and 5.5.

## Notation

In first-appearance order, module by module. A symbol reused with a new meaning gets a new row, tagged with the lessons where that meaning holds.

**Module 1: contracts under hidden information**

| Symbol | Means | First used |
|---|---|---|
| $y$ (Module 1) | the project's return, seen only by the borrower | [1.1](lessons/01-01-costly-state-verification.md) |
| $F$, $f$ (1.1, 3.3) | distribution function and density of the return | [1.1](lessons/01-01-costly-state-verification.md) |
| $I$ | investment: what the project costs | [1.1](lessons/01-01-costly-state-verification.md) |
| $c$ (1.1, 3.3, 8.3) | deadweight cost of verifying the return; in 3.3 the cost of bankruptcy; in 8.3 the per-period cost of a credible index | [1.1](lessons/01-01-costly-state-verification.md) |
| $D$ (Module 1) | face value: the fixed payment promised | [1.1](lessons/01-01-costly-state-verification.md) |
| $L(D)$ (1.1, 3.3) | lender's expected revenue at face $D$, net of audit costs | [1.1](lessons/01-01-costly-state-verification.md) |
| $D^*$, $\bar L$ | revenue-maximizing face value; the revenue ceiling $L(D^*)$ | [1.1](lessons/01-01-costly-state-verification.md) |
| $a$, $b$, $w$ (1.1) | ends of a uniform return distribution, and its width $b-a$ | [1.1](lessons/01-01-costly-state-verification.md) |
| $R$ (1.2) | gross loan rate: the borrower owes $RL$ | [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md) |
| $L$ (1.2, 1.4, 8.2) | loan size | [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md) |
| $w$ (1.2) | the borrower's outside income | [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md) |
| $\theta$ (1.2) | borrower's type; a higher $\theta$ is a mean-preserving spread of a lower one | [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md) |
| $\hat\theta(R)$ | the safest type still applying at rate $R$ | [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md) |
| $p_i$, $Y_i$ (1.2) | success probability and payoff of project $i$ | [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md) |
| $\hat R$ | switch rate: where the borrower is indifferent between the steady project and the gamble | [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md) |
| $\bar\rho(R)$, $R^*$ | bank's expected repayment per unit lent at rate $R$; the bank-optimal rate | [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md) |
| $S(\cdot)$ (1.2) | depositors' supply of funds, rising in what the bank pays | [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md) |
| $D(R)$ (1.2) | loan demand at rate $R$, not a face value | [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md) |
| $C$ (1.2, 1.3) | collateral forfeited on failure | [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md) |
| $A$ (1.3) | the entrepreneur's own net worth | [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md) |
| $R$ (1.3) | the project's return on success | [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md) |
| $p_H$, $p_L$, $\Delta p$ | success probability with diligence, with shirking, and their difference | [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md) |
| $B$ (1.3) | private benefit of shirking | [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md) |
| $R_b$ | the borrower's payoff on success | [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md) |
| $\mathcal P$ | pledgeable income: the most lenders can credibly be promised | [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md) |
| $\bar A$ | minimum net worth that gets the project funded | [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md) |
| $L$ (1.3, 7.3) | liquidation value of the assets | [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md) |
| $\delta$ (1.3) | share of the collateral the lender realizes | [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md) |
| $K$ (1.3) | cost of monitoring one borrower | [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md) |
| $m$ (1.3) | number of small lenders a borrower would need | [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md) |
| $\phi_N$ | a bank's delegation cost per loan when it holds $N$ loans | [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md) |
| $r$ (1.4) | net loan rate | [1.4](lessons/01-04-the-price-of-a-loan.md) |
| $r_f$ | lender's cost of funds, the safe rate | [1.4](lessons/01-04-the-price-of-a-loan.md) |
| $p$ (1.4) | probability the borrower defaults | [1.4](lessons/01-04-the-price-of-a-loan.md) |
| $\lambda$ (1.4, 7.3) | recovery fraction: share of principal recovered in default | [1.4](lessons/01-04-the-price-of-a-loan.md) |
| $k$ (1.4) | handling cost per loan, in dollars | [1.4](lessons/01-04-the-price-of-a-loan.md) |
| $T$ (1.4) | loan term in years | [1.4](lessons/01-04-the-price-of-a-loan.md) |
| $r^{zp}$, $r^m$ | competitive zero-profit rate; monopoly rate | [1.4](lessons/01-04-the-price-of-a-loan.md) |
| $\mu$ (1.4) | markup over the zero-profit rate | [1.4](lessons/01-04-the-price-of-a-loan.md) |
| $N(r)$, $\varepsilon$ (1.4) | number of loans taken at rate $r$; the elasticity of that demand | [1.4](lessons/01-04-the-price-of-a-loan.md) |
| $b$, $\hat r$ (1.4) | slope of linear loan demand; the rate at which borrowing stops | [1.4](lessons/01-04-the-price-of-a-loan.md) |
| $\bar r$, $p^*(L)$ | usury ceiling; the highest default probability it lets a lender serve at loan size $L$ | [1.4](lessons/01-04-the-price-of-a-loan.md) |

**Module 2: capital structure and debt overhang**

| Symbol | Means | First used |
|---|---|---|
| $X$ (Module 2) | operating cash flow: random next period (2.1), expected per year forever (2.2); a new project's payoff (2.4) | [2.1](lessons/02-01-modigliani-miller.md) |
| $F$ (Module 2) | face value of the firm's debt; the strike in Merton's model | [2.1](lessons/02-01-modigliani-miller.md) |
| $D$, $E$, $V$ (Module 2) | market values of debt and equity, and firm value $V=D+E$ | [2.1](lessons/02-01-modigliani-miller.md) |
| $V_U$, $V_L$ | value of the unlevered and the levered firm | [2.1](lessons/02-01-modigliani-miller.md) |
| $\alpha$ (2.1, 2.3) | fraction of the claims an investor holds (2.1); the owner-manager's equity share (2.3) | [2.1](lessons/02-01-modigliani-miller.md) |
| $r_A$, $r_D$, $r_E$ | expected returns on the assets, the debt (after default losses) and the equity | [2.1](lessons/02-01-modigliani-miller.md) |
| $\beta_A$, $\beta_D$, $\beta_E$ | CAPM betas of assets, debt and equity | [2.1](lessons/02-01-modigliani-miller.md) |
| $r_U$ | required return on the all-equity firm, 2.1's $r_A$ | [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md) |
| $T_c$, $T_D$, $T_E$ | corporate tax rate; investors' tax rate on interest; on equity income | [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md) |
| $T^*$ | Miller's net tax advantage of debt | [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md) |
| $T$ (2.2) | tax advantage per unit of debt, $T_c$ or $T^*$ | [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md) |
| $C(D)$, $D^*$ (2.2) | present value of expected distress costs; the trade-off optimum | [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md) |
| $a$, $\bar a$ (2.2) | value of assets in place, known to managers; its average among issuers | [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md) |
| $B$ (2.2) | value of the new project in Myers-Majluf | [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md) |
| $s$ (2.2) | fraction of the firm new shareholders need | [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md) |
| $V_0$, $\sigma$ (2.3) | asset value today and its volatility | [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md) |
| $T$, $r$ (2.3) | the debt's maturity; the continuously compounded riskless rate | [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md) |
| $N(\cdot)$, $\varphi(\cdot)$ | standard normal distribution function and density | [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md) |
| $d_1$, $d_2$ | the Black-Scholes arguments | [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md) |
| $E_0$, $D_0$, $y$ (2.3) | Merton values of equity and debt; the debt's promised yield | [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md) |
| $x$, $b(x)$, $Y$ (2.3) | perks, as a cost to the firm; their value to the manager; cash flow before perks | [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md) |
| $\tilde A$ | assets in place, random | [2.4](lessons/02-04-debt-overhang.md) |
| $E(F,x)$, $D(F,x)$ | equity and debt values with ($x=X$) or without ($x=0$) the project | [2.4](lessons/02-04-debt-overhang.md) |
| $\Delta E$, $\Delta D$ | what building does to each claim, equity's net of the cost $I$ | [2.4](lessons/02-04-debt-overhang.md) |
| $\tau(F)$ | overhang tax rate: the share of the project's payoff that lands with creditors | [2.4](lessons/02-04-debt-overhang.md) |
| $q_P$, $q_E$ | the project's $q$, and the $q$ shareholders face | [2.4](lessons/02-04-debt-overhang.md) |
| $V(s)$ | value of a growth option once the state $s$ is known (Myers) | [2.4](lessons/02-04-debt-overhang.md) |
| $F'$ | written-down face value | [2.4](lessons/02-04-debt-overhang.md) |
| $s$ (2.4) | creditors' share of the firm after a debt-equity swap | [2.4](lessons/02-04-debt-overhang.md) |

**Module 3: banks, runs, collateral and amplification**

| Symbol | Means | First used |
|---|---|---|
| $\pi$ (3.1, 3.2) | share of depositors who turn out impatient | [3.1](lessons/03-01-diamond-dybvig.md) |
| $R$ (3.1, 3.2) | gross date-2 return of the long technology | [3.1](lessons/03-01-diamond-dybvig.md) |
| $c_1$, $c_2$ | payment to date-1 withdrawers; to depositors who wait | [3.1](lessons/03-01-diamond-dybvig.md) |
| $\gamma$ (3.1, 6.4) | coefficient of relative risk aversion (CRRA) | [3.1](lessons/03-01-diamond-dybvig.md) |
| $f$, $f^*$ | share of all depositors withdrawing at date 1; the run threshold | [3.1](lessons/03-01-diamond-dybvig.md) |
| $\ell$ (3.1, 3.2) | fire-sale price per unit of the project, below 1 | [3.1](lessons/03-01-diamond-dybvig.md) |
| $\bar f$ | the share of withdrawals at which suspension stops payment | [3.2](lessons/03-02-stopping-runs.md) |
| $\pi_H$ | impatient share in a bad week | [3.2](lessons/03-02-stopping-runs.md) |
| $V$, $D$ (3.2) | the bank's end-of-period assets; its insured deposits | [3.2](lessons/03-02-stopping-runs.md) |
| $\kappa$ (3.2) | date-2 cost to waiters of each unit paid out beyond $\pi$ | [3.2](lessons/03-02-stopping-runs.md) |
| $\rho$ (3.2) | lender of last resort's gross lending rate | [3.2](lessons/03-02-stopping-runs.md) |
| $W(f)$ (3.2) | what waiting pays when a share $f$ withdraws | [3.2](lessons/03-02-stopping-runs.md) |
| $\theta$, $\theta^*$ (3.2) | the bank's fundamental; the global-games run threshold | [3.2](lessons/03-02-stopping-runs.md) |
| $N$ (3.3) | the entrepreneur's net worth | [3.3](lessons/03-03-the-financial-accelerator.md) |
| $B$ (3.3) | amount borrowed, $I-N$ | [3.3](lessons/03-03-the-financial-accelerator.md) |
| $R_f$ | gross safe rate, $1+r_f$ | [3.3](lessons/03-03-the-financial-accelerator.md) |
| $D(N)$ | face value that finances the loan at net worth $N$ | [3.3](lessons/03-03-the-financial-accelerator.md) |
| $\text{EFP}(N)$ | external finance premium per unit borrowed | [3.3](lessons/03-03-the-financial-accelerator.md) |
| $x$, $x^*$ (3.3) | leverage $I/N$; the leverage chosen | [3.3](lessons/03-03-the-financial-accelerator.md) |
| $d$ (3.3) | face value per unit invested | [3.3](lessons/03-03-the-financial-accelerator.md) |
| $m$ (3.3) | expected return per unit invested over the safe rate, $\mathbb E[y]-R_f$ | [3.3](lessons/03-03-the-financial-accelerator.md) |
| $q_t$ (3.4) | price of land in fruit: a land price, not a bond price | [3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md) |
| $k_t$, $K_t$ | one farmer's land; all farmers' land | [3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md) |
| $b_t$, $B_t$ (3.4) | one farmer's borrowing; farmers' total debt | [3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md) |
| $a$, $c$ (3.4) | saleable and unsaleable fruit per unit of land | [3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md) |
| $R$ (3.4) | gross interest rate, which is also everyone's discount rate | [3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md) |
| $G(\cdot)$ (3.4) | gatherers' technology | [3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md) |
| $u_t$ | user cost of land: the price less what a lender advances against it | [3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md) |
| $\eta$ (3.4) | elasticity of the land supply facing farmers with respect to the user cost | [3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md) |
| $\Delta$ (3.4), hats | one-period output shock; percent deviations from steady state | [3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md) |
| $h$, $h^*$ (3.5) | an agent's optimism, his belief in the good state; the marginal buyer's | [3.5](lessons/03-05-the-leverage-cycle.md) |
| $d$ (3.5) | the asset's bad-state payoff | [3.5](lessons/03-05-the-leverage-cycle.md) |
| $e$ (3.5) | cash each agent holds | [3.5](lessons/03-05-the-leverage-cycle.md) |
| $\phi$ (3.5) | loan per unit of the asset | [3.5](lessons/03-05-the-leverage-cycle.md) |
| $v(h)$, $p$ (3.5) | agent $h$'s valuation; the asset's price | [3.5](lessons/03-05-the-leverage-cycle.md) |

**Module 4: debt-deflation, Minsky and 2008**

| Symbol | Means | First used |
|---|---|---|
| $y_s$, $y_b$ | savers' and borrowers' endowments | [4.1](lessons/04-01-fishers-debt-deflation-formalized.md) |
| $\beta$ (4.1) | savers' discount factor | [4.1](lessons/04-01-fishers-debt-deflation-formalized.md) |
| $c^s_t$, $c^b_t$ | savers' and borrowers' consumption | [4.1](lessons/04-01-fishers-debt-deflation-formalized.md) |
| $b_t$ (4.1) | what a borrower takes at date $t$ | [4.1](lessons/04-01-fishers-debt-deflation-formalized.md) |
| $D$, $D_H$, $D_L$ (4.1) | borrowing limit on what may be owed next period; the old and new limit | [4.1](lessons/04-01-fishers-debt-deflation-formalized.md) |
| $r_t$, $\bar r$, $r^n_1$ | real rate; steady-state rate; the natural rate at date 1 | [4.1](lessons/04-01-fishers-debt-deflation-formalized.md) |
| $P_1$ | date-1 price level relative to the level the debt was contracted at | [4.1](lessons/04-01-fishers-debt-deflation-formalized.md) |
| $i_1$, $\pi^e$ | nominal rate; expected inflation | [4.1](lessons/04-01-fishers-debt-deflation-formalized.md) |
| $\theta$ (4.1, 4.4) | borrowers' share of output | [4.1](lessons/04-01-fishers-debt-deflation-formalized.md) |
| $Y_1$, $\bar Y$ | date-1 output; full-employment output | [4.1](lessons/04-01-fishers-debt-deflation-formalized.md) |
| $Y$, $D$, $i$, $P$ (4.2) | a unit's cash flow, debt, interest rate and principal due | [4.2](lessons/04-02-minsky-informally-and-formally.md) |
| $i_H$, $i_P$ | hedge and Ponzi cutoff rates | [4.2](lessons/04-02-minsky-informally-and-formally.md) |
| $N$, $D'$ (4.2) | shortfall refinanced; year-end debt | [4.2](lessons/04-02-minsky-informally-and-formally.md) |
| $g$ (4.2) | growth rate of the unit's cash flow | [4.2](lessons/04-02-minsky-informally-and-formally.md) |
| $\omega_t$, $b$, $\epsilon_t$, $\sigma$ (4.2) | a fundamental; its persistence; this period's news; the news's standard deviation | [4.2](lessons/04-02-minsky-informally-and-formally.md) |
| $\theta$ (4.2) | diagnostic distortion; 0 is rational expectations | [4.2](lessons/04-02-minsky-informally-and-formally.md) |
| $\mathbb E^\theta_t$ | diagnostic forecast | [4.2](lessons/04-02-minsky-informally-and-formally.md) |
| $\pi$ (4.2) | default probability lenders believe | [4.2](lessons/04-02-minsky-informally-and-formally.md) |
| $F_i$, $H_i$, $D_i$, $NW_i$ | financial assets, housing, debt and net worth per household in area $i$, 2006 | [4.3](lessons/04-03-household-debt-and-the-great-recession.md) |
| $g_i$, $\ell_i$ | house-price growth 2006-09; loan-to-value ratio $D_i/H_i$ | [4.3](lessons/04-03-household-debt-and-the-great-recession.md) |
| $s_i$ | housing net worth shock | [4.3](lessons/04-03-household-debt-and-the-great-recession.md) |
| $C_i$, $\eta$, $\alpha$, $\varepsilon_i$ (4.3) | spending per household; its elasticity to housing net worth; intercept; everything else | [4.3](lessons/04-03-household-debt-and-the-great-recession.md) |
| $Z_i$, $\pi$, $\rho$, $\delta$ (4.3) | the instrument, supply elasticity; first stage; reduced form; direct effect | [4.3](lessons/04-03-household-debt-and-the-great-recession.md) |
| $w_k$, $r_k$, $d_k$, $R$ (4.3) | a group's share of balances, its default rate, its share of defaults; the overall default rate | [4.3](lessons/04-03-household-debt-and-the-great-recession.md) |
| $b$, $B$ (4.4) | one borrower's debt; aggregate debt | [4.4](lessons/04-04-overborrowing.md) |
| $w(b)$, $m$, $k$ (4.4) | value of holding $b$ units beyond their normal value; its parameters | [4.4](lessons/04-04-overborrowing.md) |
| $\pi$ (4.4) | probability of a bust | [4.4](lessons/04-04-overborrowing.md) |
| $\gamma$ (4.4) | fire-sale price impact per unit sold | [4.4](lessons/04-04-overborrowing.md) |
| $p$, $S$ (4.4) | bust price $1-\gamma S$; total sales | [4.4](lessons/04-04-overborrowing.md) |
| $\lambda$ (4.4) | the borrower's value of a dollar in a bust, above 1 | [4.4](lessons/04-04-overborrowing.md) |
| $b^{CE}$, $b^{SP}$, $\tau^*$ | competitive and planner's debt; the corrective tax | [4.4](lessons/04-04-overborrowing.md) |
| $W(B)$ (4.4) | expected total surplus | [4.4](lessons/04-04-overborrowing.md) |

**Module 5: public debt**

| Symbol | Means | First used |
|---|---|---|
| $d_t$ (Module 5) | debt over GDP at the start of year $t$ | [5.1](lessons/05-01-the-government-budget-constraint.md) |
| $s_t$ | primary surplus over GDP | [5.1](lessons/05-01-the-government-budget-constraint.md) |
| $r$, $g$ (Module 5) | real interest and growth rates | [5.1](lessons/05-01-the-government-budget-constraint.md) |
| $a$ (Module 5) | growth-adjusted factor $(1+r)/(1+g)$ | [5.1](lessons/05-01-the-government-budget-constraint.md) |
| $s^*$, $\bar d$ (5.1) | debt-stabilizing surplus; the ratio a fixed surplus holds | [5.1](lessons/05-01-the-government-budget-constraint.md) |
| $\rho$, $\mu_t$ (5.1) | fiscal reaction slope; everything else that moves the surplus | [5.1](lessons/05-01-the-government-budget-constraint.md) |
| $c$, $m$, $\varepsilon$ (5.1) | size of a consolidation; fiscal multiplier; semi-elasticity of the budget to output | [5.1](lessons/05-01-the-government-budget-constraint.md) |
| $\delta$ (5.2) | primary deficit, $-s$ | [5.2](lessons/05-02-when-r-is-less-than-g.md) |
| $d^*$ (5.2) | the ratio a constant deficit settles at | [5.2](lessons/05-02-when-r-is-less-than-g.md) |
| $r(d)$, $r_0$, $\theta$ (5.2) | interest rate as a function of the ratio, $r_0+\theta d$ | [5.2](lessons/05-02-when-r-is-less-than-g.md) |
| $m(d)$ | marginal cost of debt | [5.2](lessons/05-02-when-r-is-less-than-g.md) |
| $\delta_{\max}$ | largest deficit a ratio can carry | [5.2](lessons/05-02-when-r-is-less-than-g.md) |
| $U$, $R_f$, $R$ (5.2) | steady-state welfare; gross safe return and gross marginal product of capital over one 25-year generation, relative to growth | [5.2](lessons/05-02-when-r-is-less-than-g.md) |
| $G_t$, $\tau_t$ (5.3) | government spending and the tax rate, as shares of GDP | [5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md) |
| $f(\tau)$, $\kappa$ (5.3) | deadweight loss of a tax rate; its quadratic coefficient | [5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md) |
| $\lambda$ (5.3) | multiplier on the budget constraint | [5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md) |
| $G^P_t$ | permanent spending: the annuity value of the spending path | [5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md) |
| $s$ (5.3) | next year's state of spending | [5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md) |
| $\bar s$, $\bar d$ (5.4) | largest sustainable primary surplus; the fiscal limit | [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) |
| $\tau^*$, $e$ (5.4) | revenue-maximizing tax rate; elasticity of the base to $1-\tau$ | [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) |
| $M$, $P$, $Y$ (5.4) | base money; price level; real output | [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) |
| $m$ (5.4) | real balances over GDP | [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) |
| $\sigma$ (5.4) | seigniorage, as a share of GDP | [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) |
| $\pi$ (5.4, 5.5) | inflation, continuously compounded in 5.4 | [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) |
| $k$, $\alpha$ (5.4) | Cagan's real balances at zero inflation; the semi-elasticity of money demand | [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) |
| $S(\pi)$, $S_{\max}$, $\pi^*$ | seigniorage at inflation $\pi$; its peak; the inflation that reaches it | [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) |
| $\sigma_0$, $\sigma_1$, $\sigma_L$, $T$ (5.4) | seigniorage that holds the ratio now; under tight policy; afterward; the length of the tight spell | [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) |
| $p_t$, $\mu$ (5.4) | log price level; money growth after the switch | [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) |
| $B_{t-1}$ | nominal debt falling due at $t$, interest included | [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md) |
| $S_t$ | present value of the real primary surpluses | [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md) |
| $B^{(j)}_{t-1}$ | nominal face falling due at $t+j$ | [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md) |
| $i$ (5.5) | nominal rate the government pays | [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md) |
| $x$, $n$ (5.5) | one-time jump in the price level; years to maturity | [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md) |
| $\phi_\pi$ | Taylor-rule response to inflation | [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md) |

**Module 6: sovereign default**

| Symbol | Means | First used |
|---|---|---|
| $q$ (6.1) | real exchange rate: price of foreign goods in home goods; a rise is a real depreciation | [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md) |
| $X$, $M$ (6.1) | exports and imports as shares of GDP | [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md) |
| $\eta_X$, $\eta_M$ | export and import volume elasticities to $q$ | [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md) |
| $T$ (6.1) | the transfer: the required rise in the trade balance, share of GDP | [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md) |
| $\kappa$ (6.1) | trade response: points of GDP per 1 percent depreciation | [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md) |
| $m$, $m^*$ (6.1) | payer's and recipient's marginal propensities to spend on each other's goods | [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md) |
| $d$, $\phi$ (6.1) | debt ratio; its dollar share | [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md) |
| $\theta$ (6.1) | lenders' pull-back per point of debt ratio | [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md) |
| $g$, $\phi^*$ (6.1) | the loop's gain, not growth; the critical dollar share | [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md) |
| $y_H$, $y_L$, $\bar y$, $\sigma$ (6.2) | good and bad income; mean income; the swing | [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md) |
| $\beta$ (6.2 to 6.4) | the country's discount factor | [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md) |
| $x$, $\bar x$ (6.2) | payment in good years, receipt in bad; the largest self-enforcing $x$ | [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md) |
| $W(x)$ (6.2) | expected utility in a year under the contract; $W(0)$ is autarky | [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md) |
| $G$, $I$ (6.2) | one-time gain from refusing; yearly value of insurance | [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md) |
| $\beta^*$ | critical discount factor | [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md) |
| $h$, $h'$ (6.3) | the history of incomes now, and one year on | [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md) |
| $P(h)$ | net payment from the country to investors | [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md) |
| $D(h)$, $\bar D$ | debt: present value still owed, this year's payment included; its peak | [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md) |
| $a(h)$ | prepaid claim a defaulter holds | [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md) |
| $\kappa$ (6.3) | share of output a default costs each year | [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md) |
| $D_{\max}$ | largest sanction-supported debt | [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md) |
| $y$, $\pi(y'\mid y)$ (6.4) | income; Markov transition probabilities | [6.4](lessons/06-04-the-arellano-model.md) |
| $b$, $b'$ (6.4, 6.5) | debt owed now; face value issued for next period | [6.4](lessons/06-04-the-arellano-model.md) |
| $q(b',y)$ | price per unit of face | [6.4](lessons/06-04-the-arellano-model.md) |
| $\delta(b',y)$ | probability of default next period | [6.4](lessons/06-04-the-arellano-model.md) |
| $D(b,y)$ (6.4) | default indicator: 1 if a government owing $b$ at income $y$ defaults | [6.4](lessons/06-04-the-arellano-model.md) |
| $r^*$ | world safe rate | [6.4](lessons/06-04-the-arellano-model.md) |
| $V^o$, $V^c$, $V^d$ | value with the option to default, of repaying, of defaulting | [6.4](lessons/06-04-the-arellano-model.md) |
| $\theta$ (6.4) | probability of regaining market access each period | [6.4](lessons/06-04-the-arellano-model.md) |
| $h(y)$, $\hat y$ | output while excluded, $\min(y,\hat y)$; its cap | [6.4](lessons/06-04-the-arellano-model.md) |
| $\bar b(y)$ | default threshold at income $y$ | [6.4](lessons/06-04-the-arellano-model.md) |
| $\lambda$ (6.5) | share of the debt maturing each year, $1/N$ for $N$-year slices | [6.5](lessons/06-05-self-fulfilling-debt-crises.md) |
| $\kappa$ (6.5) | cost coefficient of a crash repayment | [6.5](lessons/06-05-self-fulfilling-debt-crises.md) |
| $K$ (6.5) | cost of defaulting | [6.5](lessons/06-05-self-fulfilling-debt-crises.md) |
| $\underline b(\lambda)$ | lower edge of the crisis zone | [6.5](lessons/06-05-self-fulfilling-debt-crises.md) |
| $p$ (6.5) | probability lenders put on a run next year | [6.5](lessons/06-05-self-fulfilling-debt-crises.md) |
| $A$, $F$, $\tilde K$ (6.5) | in Calvo's model: revenue needed; face value due; uncertain default cost | [6.5](lessons/06-05-self-fulfilling-debt-crises.md) |

**Module 7: restructuring and bankruptcy**

| Symbol | Means | First used |
|---|---|---|
| $F_o$, $F_n$, $PV_o$, $PV_n$ | old and new face value and present value | [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) |
| $c$ (7.1) | annual coupon rate | [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) |
| $n$, $y$ (7.1) | years to run; yield | [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) |
| $a_n(y)$ | annuity factor: value of 1 a year for $n$ years at yield $y$ | [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) |
| $y^e$ | exit yield: the new bond's market yield just after the exchange | [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) |
| $H^N$, $H^{SZ}$, $H^M$ | nominal, Sturzenegger-Zettelmeyer and market haircuts | [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) |
| $D$ (7.1) | face value the sovereign owes | [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) |
| $Y$, $Y_H$, $Y_L$ (7.1) | capacity to pay; its good and bad values | [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) |
| $p$, $k$, $\bar p$ (7.1) | probability of a good year, set by effort; how responsive effort is; $k(Y_H-Y_L)$ | [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) |
| $V(D)$, $U(D)$ (7.1) | market value of the debt; the debtor's payoff | [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) |
| $q$ (7.1, 7.2) | price per unit of face | [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) |
| $t$ (7.1) | creditors' share of a good year's extra resources, the overhang tax | [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) |
| $X$, $C$ (7.1) | face retired in a buyback; cash spent on it | [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) |
| $C$ (7.2) | capacity: the present value the sovereign can pay all bondholders | [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md) |
| $v$, $d$, $h$ (7.2) | offer per bond; its value if the exchange fails; a holdout's collection | [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md) |
| $\theta$, $\hat\theta$, $\theta_{\min}$ (7.2) | share accepting; participation threshold; minimum participation | [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md) |
| $\kappa$ (7.2) | voting threshold of a collective action clause | [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md) |
| $b$ (7.2) | face bought for a blocking stake | [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md) |
| $S$, $B$ (7.2) | senior claims; bond face value | [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md) |
| $n$, $d$ (7.3) | number of creditors; each one's claim | [7.3](lessons/07-03-designing-bankruptcy.md) |
| $G$ (7.3) | going-concern value | [7.3](lessons/07-03-designing-bankruptcy.md) |
| $D_k$, $K_k$ | face value of class $k$; face ranked ahead of it | [7.3](lessons/07-03-designing-bankruptcy.md) |
| $x_k(V)$, $m$ (7.3) | class $k$'s payoff under absolute priority; number of classes | [7.3](lessons/07-03-designing-bankruptcy.md) |
| $V$, $\tilde V$ (7.3) | firm value; its random value if it continues | [7.3](lessons/07-03-designing-bankruptcy.md) |

**Module 8: debt relief as mechanism**

| Symbol | Means | First used |
|---|---|---|
| $b$ (8.1) | amount borrowed | [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md) |
| $y_H$, $y_L$, $p$ (8.1) | household incomes; probability of the bad year ($p_0$ with care, $p_1$ without) | [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md) |
| $\theta$, $\bar\theta$ (8.1) | share of debt discharged in the bad year; the most generous share that keeps care | [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md) |
| $D(\theta)$ | face value under a discharge law | [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md) |
| $c_H$, $c_L$ | consumption in the good and the bad year | [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md) |
| $\psi$, $k$ (8.1) | utility cost of care; $e^{\psi/(p_1-p_0)}$ | [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md) |
| $r$ (8.2) | lender's cost of funds | [8.2](lessons/08-02-the-scheduled-release.md) |
| $\tau$ (8.2) | collectible year-ends left before a release | [8.2](lessons/08-02-the-scheduled-release.md) |
| $a_k(r)$ | annuity factor: value today of 1 a year for $k$ years | [8.2](lessons/08-02-the-scheduled-release.md) |
| $x$, $n$, $y$ (8.2) | level installment; number of installments; most a borrower can pay a year | [8.2](lessons/08-02-the-scheduled-release.md) |
| $\bar L(\tau)$ | most a borrower can borrow | [8.2](lessons/08-02-the-scheduled-release.md) |
| $Y$, $P(\tau)$ (8.2) | a field's yearly yield; its price with $\tau$ harvests left | [8.2](lessons/08-02-the-scheduled-release.md) |
| $p$ (8.2) | yearly probability that a holding family loses its land | [8.2](lessons/08-02-the-scheduled-release.md) |
| $\ell_t$, $\bar\ell(J)$, $J$ | landless share; its average over a cycle; years between releases | [8.2](lessons/08-02-the-scheduled-release.md) |
| $Y$, $\bar Y$ (8.3) | income next period; its mean | [8.3](lessons/08-03-relief-written-into-the-contract.md) |
| $\tau$ (8.3) | share of income the borrower can spare | [8.3](lessons/08-03-relief-written-into-the-contract.md) |
| $D$, $\lambda$ (8.3) | plain debt's face; share of what can be spared that a restructuring delivers | [8.3](lessons/08-03-relief-written-into-the-contract.md) |
| $\mathbf 1\{\cdot\}$ | 1 when the condition holds, 0 otherwise | [8.3](lessons/08-03-relief-written-into-the-contract.md) |
| $L$ (8.3) | lenders' expected receipt from plain debt | [8.3](lessons/08-03-relief-written-into-the-contract.md) |
| $\kappa$ (8.3) | share of income an indexed bond pays | [8.3](lessons/08-03-relief-written-into-the-contract.md) |
| $\Delta$ (8.3) | expected deadweight of default that indexation saves | [8.3](lessons/08-03-relief-written-into-the-contract.md) |
| $\bar g$, $g_{t+1}$ | expected and realized growth | [8.3](lessons/08-03-relief-written-into-the-contract.md) |
| $\theta$ (8.3) | a shared-responsibility mortgage lender's share of any capital gain | [8.3](lessons/08-03-relief-written-into-the-contract.md) |
| $\pi$ (8.4) | share of loans voided after the fact | [8.4](lessons/08-04-odious-debt-as-a-rule.md) |
| $r^{\text{post}}$ | loan rate under after-the-fact rulings | [8.4](lessons/08-04-odious-debt-as-a-rule.md) |
| $\lambda_P$, $\lambda_B$ | a ruling body's weights on a dollar to the population and to lenders | [8.4](lessons/08-04-odious-debt-as-a-rule.md) |
| $\varepsilon$, $\mu$ (8.4) | probability of a false designation; of a miss | [8.4](lessons/08-04-odious-debt-as-a-rule.md) |
| $s$ (8.4) | a designated ruler's probability of surviving | [8.4](lessons/08-04-odious-debt-as-a-rule.md) |

## Definitions

### Costly state verification

Only the borrower sees the project's return; a lender can learn it only by paying a deadweight cost, and whether he looks depends only on her report (Townsend 1979; Gale and Hellwig 1985).

$$\text{borrower's payoff} = \mathbb{E}[y]-I-c\,\Pr(\text{verify})$$

$y$ is the return (cdf $F$, density $f$), $I$ the investment, $c>0$ the verification cost. Competitive lenders break even, so she bears every expected audit cost and the best contract is the one that looks least. In [3.3](lessons/03-03-the-financial-accelerator.md) $c$ is read as the cost of bankruptcy and the expected audit cost $cF(D)$ is the seed of the [external finance premium](#external-finance-premium); in [8.3](lessons/08-03-relief-written-into-the-contract.md) an indexed payment must be verified every period, so indexed debt wins only if the per-period cost $c$ of making the index credible is below the deadweight it saves, $\Delta$.

*Introduced:* [1.1](lessons/01-01-costly-state-verification.md) · also [3.3](lessons/03-03-the-financial-accelerator.md), [8.3](lessons/08-03-relief-written-into-the-contract.md)

### Limited liability

The borrower can lose what she puts in but owes nothing beyond the project's return, so her claim is convex in the outcome and the lender's is concave.

$$\text{debt: } \min(y,D)$$

$$\text{borrower or equity: } \max(y-D,0)$$

The same split appears as $\min(y,RL)$ and $\max(y-RL,0)$ in [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md), where it is the root of both Stiglitz-Weiss effects, and as $\min(X,F)$, $\max(X-F,0)$ (cash flow $X$, face $F$) in [2.1](lessons/02-01-modigliani-miller.md) and $\min(V,F)$, $\max(V-F,0)$ in [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md)-[2.4](lessons/02-04-debt-overhang.md). In 1.1 a borrower with $y<D$ cannot pay and must be verified; in [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md) she cannot be fined after failure, so she must be rewarded after success; in 2.3 the kink makes equity a call and creates the incentive to shift risk; in 2.4 it splits a new project's payoff between the classes.

*Introduced:* [1.1](lessons/01-01-costly-state-verification.md) · also [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md), [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md), [2.1](lessons/02-01-modigliani-miller.md), [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md), [2.4](lessons/02-04-debt-overhang.md)

### Truth-telling constraint

A payment nobody checks cannot depend on what the borrower says: any type can send any unverified report it can afford and will send the cheapest.

$$\text{every unverified report pays the same } D$$

$$\text{every } y<D \text{ is verified}$$

In [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md) an unverified discharge is claimed by every household that gains from filing, so the discharge must be priced as though good-state households might claim it; a means test lifts the cap at a verification cost that competitive lenders pass into the rate (see [strategic default](#strategic-default)).

*Introduced:* [1.1](lessons/01-01-costly-state-verification.md) · also [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md)

### Standard debt contract

The optimal contract when verification is costly and deterministic: a fixed claim, bankruptcy (verification) exactly when the borrower cannot pay, and then the lender takes everything.

$$\text{pay } \min(y,D)$$

$$\text{verify iff } y<D$$

$$D = \text{smallest face with } L(D)=I$$

$L(D)$ is the [lender's expected revenue](#lender-revenue-ceiling). With net worth $N$ and safe gross rate $R_f$, [3.3](lessons/03-03-the-financial-accelerator.md) finances $I-N$: $D(N)$ is the smallest root of $L(D)=R_f(I-N)$ and falls as $N$ rises. [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md) takes $\min(y,RL)$ as given. Not optimal once audits can be random (Mookherjee and Png 1989, with a risk-averse borrower); with same-mean types an equity stake selects nothing, and de Meza and Webb show equity is then the equilibrium form, so debt's case rests on 1.1's verification cost.

*Introduced:* [1.1](lessons/01-01-costly-state-verification.md) · also [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md), [3.3](lessons/03-03-the-financial-accelerator.md)

### Lender revenue ceiling

Past some face value a bigger promise earns the lender less, because it tips more borrowers into audited default; the peak revenue is the most any project can raise.

$$L(D)=\int_0^D (y-c)\,f(y)\,dy + D\,[1-F(D)]$$

$$L'(D)=1-F(D)-c\,f(D)$$

With a rising hazard rate $f/(1-F)$, $L$ peaks once at $D^*$ where $1-F(D^*)=c\,f(D^*)$; the ceiling is $\bar L=L(D^*)$, and a project costing more gets no finance at any rate. Uniform on $[a,b]$ with width $w=b-a$ and $c\le w$: $D^*=b-c$ and $\bar L=\mathbb{E}[y]-c+c^2/(2w)$. In [3.3](lessons/03-03-the-financial-accelerator.md) it sets the net worth below which no loan is made, $N_{\min}=I-\bar L/R_f$; in [6.4](lessons/06-04-the-arellano-model.md) the peak of $q(b',y)\,b'$ is the same object for a sovereign.

*Introduced:* [1.1](lessons/01-01-costly-state-verification.md) · also [3.3](lessons/03-03-the-financial-accelerator.md), [6.4](lessons/06-04-the-arellano-model.md)

### Credit rationing

Borrowers with positive-NPV projects are refused a loan at every rate, and offering more does not help. The course has four mechanisms for it:

- **Costly verification** ([1.1](lessons/01-01-costly-state-verification.md)): a project costing more than $\bar L$ gets nothing. Williamson (1987, *QJE*): identical borrowers, some funded and some refused, with no adverse selection or moral hazard.
- **Stiglitz-Weiss** ([1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md)): among applicants who look identical some get loans and some do not; equilibrium at $R^*$ whenever loan demand exceeds supply, $D(R^*)>S(\bar\rho(R^*))$ (their Theorem 5). More funds shorten the queue without moving $R^*$. The second kind refuses whole identifiable groups at any rate until funds grow (red-lining).
- **Moral hazard** ([1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md)): a borrower with $A<\bar A$ is refused, since a higher rate would cut into her incentive stake.
- **Net worth** ([3.3](lessons/03-03-the-financial-accelerator.md)): a borrower with $R_f(I-N)>\bar L$ gets no loan, and a common loss of net worth pushes the weakest into this region first ([flight to quality](#flight-to-quality)).

*Introduced:* [1.1](lessons/01-01-costly-state-verification.md) · also [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md), [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md), [3.3](lessons/03-03-the-financial-accelerator.md)

### Debt versus a profit share

A payment that moves with the proceeds (a share, the *commenda*) must be verified in every state; a fixed claim only in default.

$$\text{borrower's gain from debt} = c\,[1-F(D)]$$

The share costs $c$ for sure, debt costs $cF(D)$; the gap vanishes as verification gets cheap, which is why bookkeeping and disclosure erode debt's edge.

*Introduced:* [1.1](lessons/01-01-costly-state-verification.md)

### Mean-preserving spread

Same mean, more weight in the tails. By Jensen's inequality it raises the expected value of a convex payoff and lowers that of a concave one.

$$\mathbb{E}[g(\tilde y')]\ \ge\ \mathbb{E}[g(\tilde y)] \quad \text{for convex } g, \text{ if } \tilde y' \text{ spreads } \tilde y$$

Stiglitz-Weiss order borrower types this way (higher $\theta$ = a spread of lower $\theta$); [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md)'s risk shifting is the same inequality applied to equity. Assumed, taught in `grad-micro` 2.5.

*Introduced:* [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md) · also [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md)

### Switch rate

The repayment at which a borrower is indifferent between a steady project and a gamble; above it she gambles, because a point of interest costs her only when she repays.

$$\hat R L=\frac{p_AY_A-p_BY_B}{p_A-p_B}$$

$$\frac{\partial}{\partial R}\,\mathbb{E}[\max(y-RL,0)]=-L\,\Pr(y\ge RL)$$

Project $i$ pays $Y_i$ with probability $p_i$, $p_A>p_B$; $L$ is the loan, $R$ the gross rate (Stiglitz-Weiss Theorem 7, a local statement). A pledge $C$ lost on failure raises the switch repayment to $\hat RL+C$. Example: 160 with probability 0.9 against 210 with probability 0.4 switch at $RL=120$.

*Introduced:* [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md)

### Bank-optimal rate

The loan rate that maximizes the bank's expected repayment per unit lent; it can sit below market clearing because the rate changes who applies and what they do.

$$R^*=\arg\max_R\ \bar\rho(R)$$

$\bar\rho(R)$ is expected repayment per unit lent over the applicants and projects that $R$ induces. With discrete types it drops each time a type leaves (Theorem 4). Example 1: $\bar\rho=0.9R$ up to $R=1.25$, then $0.5R$, so $R^*=1.25$. The drop alone is not enough: the peak must also beat every higher rate.

*Introduced:* [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md)

### Backward-bending loan supply

Deposits rise with what banks can pay, so the supply of loans peaks at the bank-optimal rate and falls beyond it: a higher loan rate brings in less money, not more.

$$\text{loan supply} = S\bigl(\bar\rho(R)\bigr), \quad \text{maximal at } R=R^*$$

*Introduced:* [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md)

### De Meza-Webb

de Meza and Webb (1987, *QJE*): projects share the success payoff and differ only in how often they succeed (first-order dominance), so a higher rate drives out the least likely to succeed first, the market clears, and the pooled rate subsidizes the marginal borrower: too much lending, not too little.

Raising the rate above its free-market level restores efficiency. Under Stiglitz-Weiss's same-mean assumptions, equity, not debt, is the equilibrium form of finance. Whether hidden risk starves or floods the market depends on its shape.

*Introduced:* [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md)

### Pledgeable income

The most a diligent borrower can credibly promise lenders: expected output minus the stake she must keep to stay diligent.

$$\mathcal{P}=p_H\Bigl(R-\frac{B}{\Delta p}\Bigr)$$

$R$ is the success return, $p_H$ the success probability with diligence, $\Delta p=p_H-p_L$, $B$ the private benefit of shirking (Holmström and Tirole 1997). The withheld part $p_HB/\Delta p$ is her agency rent. In [8.2](lessons/08-02-the-scheduled-release.md) a scheduled release makes the harvests after its date unpledgeable by law, so a field backs at most its lease value $Y\,a_\tau(r)$.

*Introduced:* [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md) · also [8.2](lessons/08-02-the-scheduled-release.md)

### Minimum incentive stake

The smallest success payoff that keeps the borrower diligent rather than shirking.

$$p_HR_b \ge p_LR_b+B \iff R_b \ge \frac{B}{\Delta p}$$

Everyone is risk-neutral: the stake is a rent created by limited liability, not a risk premium, and competition among lenders cannot bid it away.

*Introduced:* [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md)

### Minimum net worth

The least own money that gets a project funded: it must cover the gap between the cost and the pledgeable income.

$$\bar A = I - p_H\Bigl(R-\frac{B}{\Delta p}\Bigr)$$

Below it no face value induces both diligence and lender break-even, so $\bar A>0$ can coexist with $p_HR>I$. Net worth $A$ becomes a state variable: a loss that lowers it cuts investment though no project has changed.

*Introduced:* [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md)

### Inalienable human capital

A lender can take the assets but not the borrower's skills, so once the money is sunk she can threaten to walk away and any debt above the assets' resale value is renegotiated down (Hart and Moore 1994).

Debt capacity is $L$, the assets' liquidation value at the moment she makes the renegotiation offer.

In [3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md) it makes land the only collateral in Kiyotaki-Moore; in [8.2](lessons/08-02-the-scheduled-release.md) the release does by law what inalienability does by nature.

*Introduced:* [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md) · also [3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md)

### Collateral

An asset forfeited on failure. It is cheap for a borrower who expects to repay, so it can sort types (Bester 1985) or fill a gap in pledgeable income (Holmström-Tirole).

$$\frac{dR}{dC} = -\frac{1-p_i}{p_i}$$

A contract $(R,C)$ per unit lent: repay $R$ on success, forfeit $C$ on failure, of which the lender realizes $\delta C$, $0\le\delta\le1$. The safe type's indifference curve is flatter, so a menu separates types with no rationing. In [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md) a pledge raises the switch repayment by $C$, yet Stiglitz-Weiss show collateral selects too. In [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md) revenue pledged to creditors and collected by their own agents is sovereign collateral: it breaks Bulow-Rogoff's (A3) and supports the same debt as a sanction of equal size but pays creditors, where a trade sanction is collateral with $\delta=0$.

*Introduced:* [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md) · also [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md), [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md)

### Delegated monitoring

A bank monitors each borrower once instead of every small lender doing it, at the cost of depositors not being able to watch the bank (Diamond 1984).

$$K+\phi_N < mK$$

$K$ is the cost of monitoring one borrower, $m$ the number of small lenders a borrower would need, $\phi_N$ the delegation cost per loan (expected deadweight cost of the bank's shortfalls) with $N$ loans. $\phi_N\to0$ only if loans fail independently; in the illustration it is 0.10 for one loan, 0.021 for ten and 0.0003 for a hundred.

*Introduced:* [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md)

### Recovery fraction

The share of principal a lender recovers from collateral or bankruptcy when the borrower defaults.

$$\lambda\in[0,1]$$

*Introduced:* [1.4](lessons/01-04-the-price-of-a-loan.md)

### Zero-profit loan rate

The rate a competitive lender must charge to break even: cost of funds plus expected loss plus handling, grossed up by the share of borrowers who repay.

$$r^{zp}=\frac{r_f+p(1-\lambda)+k/L}{1-p}$$

$p$ is the default probability, $\lambda$ recovery, $k$ the handling cost per loan, $L$ the loan size, $r_f$ the cost of funds. With no recovery and no handling cost, $1+r^{zp}=(1+r_f)/(1-p)$: the premium is $p/(1-p)$ compounded on the safe rate, not $p$. The course reuses it:

- [4.2](lessons/04-02-minsky-informally-and-formally.md): $1+i=(1+r_f)/(1-\pi)$ with default probability $\pi$ and zero recovery.
- [6.4](lessons/06-04-the-arellano-model.md): $q=(1-\delta)/(1+r^*)$, except that the default probability $\delta$ is set by the borrower's own future decisions.
- [7.3](lessons/07-03-designing-bankruptcy.md): the stay raises recovery, so $p(1-\lambda)/(1-p)$ falls (5.6 to 2.2 percent in Example 1).
- [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md): a discharge of share $\theta$ in the bad state, zero safe rate: $D(\theta)=b/(1-p\theta)$.
- [8.2](lessons/08-02-the-scheduled-release.md): under a scheduled release a lender breaks even on what falls due before it, $L=x\,a_{\min(n,\tau)}(r)$; the release is a certain loss priced as 1.4 prices an expected one.
- [8.4](lessons/08-04-odious-debt-as-a-rule.md): a share $\pi$ voided after the fact, nothing recovered: $1+r^{\text{post}}=(1+r_f)/(1-\pi)$.

*Introduced:* [1.4](lessons/01-04-the-price-of-a-loan.md) · also [4.2](lessons/04-02-minsky-informally-and-formally.md), [6.4](lessons/06-04-the-arellano-model.md), [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md), [8.2](lessons/08-02-the-scheduled-release.md), [8.4](lessons/08-04-odious-debt-as-a-rule.md)

### Rate decomposition

A loan rate split into the layers it pays for, all paid by the borrowers who repay.

$$r = r_f + \frac{p(1+r_f-\lambda)}{1-p} + \frac{k/L}{1-p} + \mu$$

Funds, expected loss (the defaulters' principal plus its funding cost, less recovery), handling, and markup $\mu\ge0$ (zero under competition). The additive shortcut $r_f+p(1-\lambda)+k/L$ equals exactly $(1-p)\,r^{zp}$, so it understates the rate by the fraction $p$. The CSV version in [3.3](lessons/03-03-the-financial-accelerator.md) is in [Formulas: loan pricing](#loan-pricing).

*Introduced:* [1.4](lessons/01-04-the-price-of-a-loan.md) · also [3.3](lessons/03-03-the-financial-accelerator.md)

### Fixed cost per loan

A handling cost charged per loan whatever its size, so a small or short loan carries a high annual rate with no profit in it.

$$\text{handling layer} = \frac{k}{LT} \text{ a year, before grossing up by } 1-p$$

$T$ is the term in years. A 40-dollar cost adds 0.2 points to a one-year, 20,000-dollar loan and 120 points a year to a one-month, 400-dollar loan.

*Introduced:* [1.4](lessons/01-04-the-price-of-a-loan.md)

### Loan markup

What a lender with market power charges above the zero-profit rate; it sets marginal revenue equal to a marginal cost of $r^{zp}$.

$$\mu = r - r^{zp}$$

$$\frac{r^m-r^{zp}}{r^m}=\frac{1}{|\varepsilon|}$$

$r^m$ is the monopoly rate, $\varepsilon = rN'(r)/N(r)$ the elasticity of loan demand $N(r)$. With linear demand $N=b(\hat r-r)$ ($\hat r$ the rate where borrowing stops), $r^m=(\hat r+r^{zp})/2$ and the monopolist makes half the competitive number of loans. An observed rate is one number with two unknowns; default, recovery and cost data separate them.

*Introduced:* [1.4](lessons/01-04-the-price-of-a-loan.md)

### Usury ceiling

A legal maximum rate $\bar r$. A competitive lender serves a borrower only if the zero-profit rate fits under it, so the cap excludes the riskiest and, at equal risk, the smallest loans first.

$$p \le p^*(L) = \frac{\bar r - r_f - k/L}{1+\bar r-\lambda}$$

No loan below $k/(\bar r-r_f)$ is made at all. At $\bar r=0$ the numerator is negative for every loan: no arm's-length loan covers its cost, and credit moves to kin, charity, fees capped at cost, or contracts that are not loans. Where there is no markup, a cap lowers nobody's rate; it refuses the borrowers above it.

*Introduced:* [1.4](lessons/01-04-the-price-of-a-loan.md)

### Cap on a monopoly lender

A ceiling between the competitive and monopoly rates turns a monopolist into a price-taker, so it lends more, not less.

$$r^{zp} \le \bar r < r^m \implies \text{it serves all } N(\bar r) > N(r^m)$$

Lending peaks at $\bar r=r^{zp}$ (twice the monopoly quantity with linear demand) and stops below it. Example 2: $r^{zp}=10\%$, $r^m=30\%$; a 20 percent cap raises loans from 200 to 300, an 8 percent cap ends lending.

*Introduced:* [1.4](lessons/01-04-the-price-of-a-loan.md)

### Modigliani-Miller

With frictionless markets and investment fixed, financing cannot change what a firm is worth: debt plus equity pay the whole cash flow in every state, so by the law of one price they are worth what the all-equity firm is worth (Modigliani and Miller 1958).

$$V_L = V_U$$

$$\min(X,F)+\max(X-F,0)=X$$

$X$ is the operating cash flow, $F$ the face of debt, $V_L=D+E$ the levered firm's value ($D$, $E$ the market values of debt and equity), $V_U$ the all-equity firm's. Holds with risky debt when markets are complete (Stiglitz 1969). Proposition II is the [cost of equity](#cost-of-equity). [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md) removes the no-tax and no-distress assumptions one at a time; [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md) relaxes fixed investment, so financing changes what gets built. Read it as a [checklist](#mm-assumptions), not a description.

*Introduced:* [2.1](lessons/02-01-modigliani-miller.md) · also [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md), [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md)

### Homemade leverage

Investors can undo a firm's leverage by holding its debt and equity in proportion, and create it by buying the unlevered firm with a personal loan, so a firm cannot create value by levering for them.

$$\alpha X - \alpha\min(X,F) = \alpha\max(X-F,0)$$

A fraction $\alpha$ of the unlevered firm bought with a personal loan of $\alpha D$, repaid as $\alpha\min(X,F)$, pays a fraction $\alpha$ of the levered equity. The loan must be on the firm's terms, including its limited liability.

*Introduced:* [2.1](lessons/02-01-modigliani-miller.md)

### Cost of equity

MM Proposition II: the expected return on equity rises with the debt-to-equity ratio by the spread between the assets' return and the debt's, because leverage piles the assets' risk onto the equity.

$$r_E = r_A + (r_A-r_D)\,\frac{D}{E}$$

$$\beta_E = \beta_A + (\beta_A-\beta_D)\,\frac{D}{E}$$

$r_A$ is the expected return on assets (on the unlevered firm's shares; [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md) writes it $r_U$), $r_D$ the **expected** return on debt after default losses, not its promised yield $F/D-1$. Linear in $D/E$ while debt is safe, bending below that line as the debt becomes risky.

*Introduced:* [2.1](lessons/02-01-modigliani-miller.md)

### WACC

The weighted average cost of capital; without taxes it equals the assets' return at every leverage, so cheap debt makes equity dear by exactly enough.

$$\text{WACC}=\frac{E}{V}\,r_E+\frac{D}{V}\,r_D = r_A$$

Leaving $r_E$ fixed while adding debt is the classic error (Example 1: a spurious 8.8 percent WACC and a gain of 181.82 from paperwork). [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md) adds the tax shield.

*Introduced:* [2.1](lessons/02-01-modigliani-miller.md)

### MM assumptions

The checklist the Modigliani-Miller proof leans on, and the lesson that breaks each:

| MM assumes | Fails when | Lesson |
|---|---|---|
| No taxes that treat claims differently | interest is deductible, dividends are not | [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md) |
| Distress costs nothing | default brings fees, lost customers, fire sales | [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md) |
| Symmetric information about firm value | issuing shares signals they are overpriced | [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md) |
| Investment independent of financing | shareholders gamble or refuse good projects | [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md), [2.4](lessons/02-04-debt-overhang.md) |
| No outsider's stake depends on leverage | creditors expect a rescue (implicit guarantees) | [3.2](lessons/03-02-stopping-runs.md) |
| Investors borrow on the firm's terms | personal loans cost more or carry full liability | [2.1](lessons/02-01-modigliani-miller.md) |

*Introduced:* [2.1](lessons/02-01-modigliani-miller.md)

### Interest tax shield

Interest is deductible and dividends are not, so debt shrinks the government's claim and raises what investors collect as a group.

$$V_L = V_U + T_cD$$

$T_c$ is the corporate tax rate; the yearly saving is $T_cr_DD$. The formula needs permanent riskless debt and taxable profit every year (Modigliani and Miller 1963). Debt repaid after $n$ years shields only $T_cD\,[1-(1+r_D)^{-n}]$: 44 percent for 10 years at 6 percent. The shield is a transfer from the Treasury, not value created. In [2.1](lessons/02-01-modigliani-miller.md)'s bank example, losing it on 15 of debt at 3 percent with $T_c=20\%$ costs 0.09 per 100 of assets a year, not the 1.8 points the bank claims.

*Introduced:* [2.1](lessons/02-01-modigliani-miller.md) · also [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md)

### Miller net tax advantage

With personal taxes, a dollar of interest is taxed once (at $T_D$) and a dollar paid to shareholders twice ($T_c$, then $T_E$); the net advantage of debt compares the two.

$$V_L = V_U + T^*D$$

$$T^* = 1-\frac{(1-T_c)(1-T_E)}{1-T_D}$$

$T_D$ is investors' tax rate on interest, $T_E$ on equity income. $T^*=T_c$ if $T_E=T_D$; $T^*=0$ if $(1-T_c)(1-T_E)=1-T_D$; $T^*>T_c$ if $T_E>T_D$. Miller (1977, "Debt and Taxes"): in equilibrium the marginal bondholder's personal tax offsets the corporate saving, fixing aggregate debt but not any one firm's.

*Introduced:* [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md)

### Costs of financial distress

The present value of expected losses from being unable to pay, probability times cost, which creditors price so shareholders bear them from the start.

$$C(D)\ \text{increasing and convex in } D$$

Direct costs are legal and administrative: about 5 percent of market value just before filing and about 1 percent seven years earlier (Warner 1977, 11 railroads, 1933-55). Indirect costs (lost customers and suppliers, fire sales, cut investment) appear larger: about 10 percent of firm value, mostly before any Chapter 11 filing (Andrade and Kaplan 1998, preferred estimate). A firm unlikely to default bears almost none of $C(D)$, however large the cost would be.

*Introduced:* [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md)

### Trade-off theory

Borrow until the last unit of debt saves exactly as much tax as it adds in expected distress costs.

$$V_L(D)=V_U+TD-C(D)$$

$$T=C'(D^*)$$

$T$ is $T_c$, or $T^*$ with personal taxes. The shield is a transfer from the Treasury, so $D^*$ maximizes the investors' slice, not investors plus Treasury. Example 1 ($C=160(D/600)^3$): $D^*=300$ and $V_L=640$ under $T_c=20\%$; $D^*=150$ and $V_L=605$ under $T^*=5\%$. The hump is flat on top.

*Introduced:* [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md)

### Myers-Majluf issue condition

Managers who know more than investors issue shares only if the project's NPV covers the gift to new shareholders, so an undervalued firm passes up good projects and an announced issue lowers the share price.

$$B-I \ \ge\ s\,(a+B)-I$$

$$s=\frac{I}{\bar a+B}$$

$a$ is the value of assets in place (known only to managers), $\bar a$ its average among issuers, $I$ the project's cost, $B$ its value, $s$ the fraction new shareholders need. Equivalent to $(1-s)(a+B)\ge a$. Safe debt is worth the same whoever issues it, so it carries no gift (Myers and Majluf 1984).

*Introduced:* [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md)

### Pecking order

Finance with internal cash first, then safe debt, then riskier debt, and equity last, because safe debt's value does not depend on what managers know.

There is no target debt ratio: leverage is the running total of the need for outside money, so an unusually profitable firm ends up with unusually little debt, against the tax side of the trade-off, which says profitable taxpaying firms should borrow more (Myers 1984, *The Capital Structure Puzzle*). Share prices fall on average when a stock issue is announced, much less for high-grade debt.

*Introduced:* [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md)

### Equity as a call option

Equity is a call on the firm's assets with strike equal to the face of debt; debt is a safe claim minus a put, so creditors have sold shareholders the right to hand over the assets instead of paying.

$$\text{equity}=\max(V-F,0)$$

$$\text{debt}=\min(V,F)=F-\max(F-V,0)$$

$$E_0 = V_0\,N(d_1)-Fe^{-rT}N(d_2)$$

Merton (1974) with Black-Scholes: $V_0$ asset value, $\sigma$ asset volatility, $T$ maturity, $r$ riskless rate, $N$ the standard normal cdf, $d_1=[\ln(V_0/F)+(r+\sigma^2/2)T]/(\sigma\sqrt T)$, $d_2=d_1-\sigma\sqrt T$. Debt $D_0=V_0-E_0$; its promised yield $y$ solves $D_0=Fe^{-yT}$ and $y-r$ is the credit spread. $\partial E_0/\partial\sigma>0$ and $\partial E_0/\partial V_0=N(d_1)<1$.

*Introduced:* [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md)

### Risk shifting

Under limited liability, extra asset risk of equal value is a pure transfer from creditors to shareholders, who may take value-destroying gambles (also called asset substitution).

$$\mathbb E[\max(\tilde V'-F,0)] \ \ge\ \mathbb E[\max(\tilde V-F,0)] \quad\text{when } \tilde V' \text{ spreads } \tilde V$$

Loyal managers maximizing equity do it; the pull grows with leverage and peaks near default (gambling for resurrection). Anticipated risk shifting is priced at issue, so the owners bear the value it destroys. It is the mirror image of [overhang](#debt-overhang): the same payoff split makes shareholders over-invest in gambles and under-invest in safe projects ([2.4](lessons/02-04-debt-overhang.md)). In [3.2](lessons/03-02-stopping-runs.md) the creditor is the deposit insurer: a flat premium lets the insurer's put pay for the downside, and a premium equal to the put or a [capital requirement](#capital-requirement) removes the incentive. In [7.3](lessons/07-03-designing-bankruptcy.md) it is fought through a creditor vote: juniors and shareholders favor continuing even when a sale is worth more.

*Introduced:* [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md) · also [2.4](lessons/02-04-debt-overhang.md), [3.2](lessons/03-02-stopping-runs.md), [7.3](lessons/07-03-designing-bankruptcy.md)

### Free cash flow

Cash left after every positive-NPV project is funded; a manager who values the size of what she runs invests it at negative NPV rather than pay it out (Jensen 1986).

A promised dividend can be cut quietly, but a missed debt payment hands the firm to its creditors, so debt commits the cash. The owner-manager version: with equity share $\alpha$, perks that cost the firm $x$ and are worth $b(x)$ to her satisfy $b'(x)=\alpha$, so she buys perks worth less than they cost.

*Introduced:* [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md)

### Agency costs

The value lost when an owner sells outside claims: investors' monitoring costs, the manager's bonding costs, and the residual loss, all borne by the owner at issue because investors price the conflict in (Jensen and Meckling 1976).

Debt lowers the agency cost of equity and raises that of debt; the owner picks the mix that minimizes their sum, a second trade-off beside taxes and distress. The transfer is not the cost: the cost is the value destroyed.

*Introduced:* [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md)

### Bond covenants

Contract terms that limit dividends, new senior or secured debt, and asset sales, mergers or new lines of business, controlling the dividend-payout, claim-dilution and asset-substitution conflicts between shareholders and creditors (Smith and Warner 1979).

They reach the fourth conflict, underinvestment, only poorly: a court can see a dividend or a sale, not a good project never taken. Covenants against new senior debt also block [senior new money](#senior-new-money) outside court.

*Introduced:* [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md)

### Debt overhang

When default is possible, creditors collect part of every new project's payoff, so shareholders who pay the whole cost refuse projects with positive NPV (Myers 1977).

$$\Delta E(F)=E(F,X)-E(F,0)-I$$

$$\Delta D(F)=D(F,X)-D(F,0)$$

$$\text{build iff } X-I \ \ge\ \Delta D(F)$$

$\tilde A$ is assets in place, $F$ the face, $I$ the project's cost, $X$ its payoff; $E(F,x)=\mathbb E[\max(\tilde A+x-F,0)]$, $D(F,x)=\mathbb E[\min(\tilde A+x,F)]$; $\Delta E+\Delta D=X-I$. Projects with $0<X-I<\Delta D(F)$ are refused. Myers's growth-option form: exercise iff $V(s)\ge I+F$ instead of $V(s)\ge I$; the cost is priced at issue, so growth-option firms borrow less, and debt maturing before the option date does not distort. The same wedge recurs:

- **Households** ([4.3](lessons/04-03-household-debt-and-the-great-recession.md)): owners at risk of default cut home improvements and principal payments but not durables they keep in default (Melzer 2017).
- **Sovereigns** ([7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md)): debt taxes the effort that raises capacity, giving the [debt Laffer curve](#debt-laffer-curve).
- **Discharge** ([8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md)): the ex post case for relief; Dobbie and Song's earnings gain fits the household form.
- **Jubilee** ([8.2](lessons/08-02-the-scheduled-release.md)): a holder with few harvests left will not make an improvement that pays after the release.
- **Underwater homeowners** ([8.3](lessons/08-03-relief-written-into-the-contract.md)): spending on the house goes first to the lender; a [shared responsibility mortgage](#shared-responsibility-mortgage) keeps her equity share at its purchase level.

*Introduced:* [2.4](lessons/02-04-debt-overhang.md) · also [4.3](lessons/04-03-household-debt-and-the-great-recession.md), [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md), [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md), [8.2](lessons/08-02-the-scheduled-release.md), [8.3](lessons/08-03-relief-written-into-the-contract.md)

### Overhang tax rate

The share of a new project's payoff that goes to creditors: overhang works as a tax on investment, collected at a rate more debt can only raise.

$$\tau(F)=\frac{\Delta D(F)}{X}$$

$$\text{build iff } (1-\tau)X\ge I$$

$$q_E=(1-\tau)\,q_P$$

$$q_P=\frac{X}{I}$$

$\tau=\Pr(\tilde A<F)$, the default probability, when the project cannot cure a default; lower when it can. $q_P$ is the project's own $q$ and $q_E$ the $q$ shareholders face, so they need $q_P\ge1/(1-\tau)$ (the idea's firm: $q_P=1.5$, $q_E=0.9$). Sovereign version ([7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md)): $t=(D-Y_L)/(Y_H-Y_L)$, the share of a good year's extra resources creditors take; with effort $p=\bar p(1-t)$, $V-Y_L=\bar p\,(Y_H-Y_L)\,t(1-t)$ peaks at $t=1/2$, and with $p=\bar p(1-t)^{\varepsilon}$ at $t^*=1/(1+\varepsilon)$.

*Introduced:* [2.4](lessons/02-04-debt-overhang.md) · also [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md)

### Write-down window

The range of reduced face values at which shareholders will build and creditors are no worse off; the shareholders' benchmark is not building at the **new** face, not their status quo.

$$\Delta E(F')\ge0$$

$$D(F',X)\ge D(F,0), \quad F'<F$$

Comparing with the status-quo payoff $E(F,0)$ gives too wide a window, because the write-down raises $E(F',0)$ even with no project (Example 1: 74 to 85, not 74 to 94; at 90 shareholders keep the gift and skip the machine). A face write-down cannot give creditors the whole NPV, because the cut is a gift to shareholders in solvent states.

*Introduced:* [2.4](lessons/02-04-debt-overhang.md)

### Debt-equity swap

Creditors exchange their claim for a share of an all-equity firm, which raises the investment at a fair price and builds; with no debt left there is no overhang tax.

$$\frac{D(F,0)}{V}\ \le\ s\ \le\ 1-\frac{E(F,0)}{V}$$

$$V=\mathbb E[\tilde A]+X-I$$

Both classes gain for any $s$ in the range; creditors keep upside, so they can take up to the whole NPV.

*Introduced:* [2.4](lessons/02-04-debt-overhang.md)

### Senior new money

A new lender funds the project and is repaid before the old debt, so the old creditors can capture at most the NPV instead of the whole payoff, and both old classes gain.

$$X\ge I \implies \text{the new lender is safe}$$

US Chapter 11 does it with debtor-in-possession loans a court can rank ahead of existing claims (Bankruptcy Code section 364; [7.3](lessons/07-03-designing-bankruptcy.md)). Outside court, covenants against new senior debt block it. In sovereign debt, senior money that repays maturing bonds at par cuts the rest's recovery ([sovereign seniority](#sovereign-seniority)).

*Introduced:* [2.4](lessons/02-04-debt-overhang.md) · also [7.3](lessons/07-03-designing-bankruptcy.md)

### Holdout problem

In an exchange offer to many small holders, each is paid more by holding out if the deal succeeds and loses nothing if it fails, so the offer fails although every holder would gain if all accepted.

- **Firms** ([2.4](lessons/02-04-debt-overhang.md) Example 2): 80 per 100 of face, needing 3/4 participation, fails. Concentrated creditors (banks, few lenders) get around it (Gilson, John and Lang 1990); US public bonds need each holder's consent to change payment terms (Trust Indenture Act of 1939).
- **Sovereigns** ([7.2](lessons/07-02-holdouts-and-collective-action-clauses.md)): with capacity $C$, offer worth $v$ and holdouts collecting $h>v$ once the deal succeeds, holding out weakly dominates accepting, so no participation share at or above the threshold is an equilibrium and each creditor is left the disorderly-default value $d<v$. A run in reverse: a depositor runs because others run, a creditor holds out because others accept (Grossman-Hart's takeover free ride). Bond exchanges since the late 1990s were mostly quick with little litigation; Argentina 2005 is the exception (Bi, Chamon and Zettelmeyer 2011).

It is a free-rider problem, not a coordination game, while $h>v$: see [participation threshold](#participation-threshold), [exit consents](#exit-consents) and [collective action clause](#collective-action-clause).

*Introduced:* [2.4](lessons/02-04-debt-overhang.md) · also [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md)

### Diamond-Dybvig

A bank insures depositors against needing cash early by promising more on demand than its assets fetch if sold early, and that promise also lets the mere expectation of withdrawals empty a sound bank (Diamond and Dybvig 1983).

$$\max_{c_1,c_2}\ \pi u(c_1)+(1-\pi)u(c_2) \quad\text{s.t.}\quad \pi c_1+\frac{(1-\pi)c_2}{R}=1$$

$$u'(c_1)=R\,u'(c_2)$$

Dates 0, 1, 2; each depositor holds 1; a share $\pi$ turn out impatient (value only date-1 consumption); the long technology returns $R>1$ at date 2 or 1 if liquidated at date 1. With [CRRA](#crra-utility) utility, $c_2=R^{1/\gamma}c_1$ and

$$c_1^*=\frac{1}{\pi+(1-\pi)R^{(1-\gamma)/\gamma}}$$

A demand-deposit contract paying $c_1^*$ implements the optimum (only the impatient withdraw) but also admits a run equilibrium whenever $c_1>1$. Example 1 ($\gamma=2$, $\pi=0.5$, $R=2.25$): $c_1^*=1.2$, $c_2^*=1.8$.

*Introduced:* [3.1](lessons/03-01-diamond-dybvig.md) · also [3.2](lessons/03-02-stopping-runs.md)

### CRRA utility

Constant relative risk aversion: the utility function whose curvature parameter is the coefficient of relative risk aversion.

$$u(c)=\frac{c^{1-\gamma}}{1-\gamma} \quad (\ln c \text{ at } \gamma=1)$$

$$u'(c)=c^{-\gamma}$$

$\gamma$ is relative risk aversion. [3.1](lessons/03-01-diamond-dybvig.md) needs $\gamma>1$ for liquidity insurance; at $\gamma=1$ the optimum is autarky and there is no run. In [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md) the maximum sustainable debt rises with $\gamma$; [6.4](lessons/06-04-the-arellano-model.md) uses $\gamma=2$ (Arellano herself writes $\sigma$); [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md) uses the log case and reports certainty-equivalent consumption $e^{\mathbb E u}$.

*Introduced:* [3.1](lessons/03-01-diamond-dybvig.md) · also [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md), [6.4](lessons/06-04-the-arellano-model.md), [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md)

### Liquidity insurance

Optimal risk-sharing across liquidity types: the impatient get more than their deposit and the patient less than the project's return, so the patient insure the impatient.

$$\gamma>1 \implies 1<c_1^*<c_2^*<R$$

At autarky $u'(1)=1$ exceeds $R\,u'(R)=R^{1-\gamma}$ exactly when $\gamma>1$. Since $c_2^*>c_1^*$, no patient depositor gains by posing as impatient, so the optimum survives private types. Runs are the price of the insurance.

*Introduced:* [3.1](lessons/03-01-diamond-dybvig.md)

### Sequential service

Depositors are paid in order of arrival until the money runs out; the bank cannot condition today's payment on how many will withdraw later, which is what makes a run self-fulfilling.

$$c_2(f)=\frac{R\,(1-fc_1)}{1-f} \quad (fc_1<1)$$

$$c_2(f)=0 \text{ once } f\ge 1/c_1$$

$f$ is the share of all depositors (impatient included) withdrawing at date 1. $c_2'(f)=R(1-c_1)/(1-f)^2<0$ exactly when $c_1>1$: withdrawals hurt those who wait only at a bank that insures.

*Introduced:* [3.1](lessons/03-01-diamond-dybvig.md)

### Run threshold

The share of withdrawals above which a patient depositor also withdraws; the more a bank insures, the smaller the panic that topples it.

$$f^*=\frac{R-c_1}{c_1(R-1)}$$

The panic needed among the patient is $(f^*-\pi)/(1-\pi)$, not $f^*$ (40 percent, not 70, in 3.1's Example 1). [3.2](lessons/03-02-stopping-runs.md) generalizes: if each unit paid out beyond $\pi$ costs the waiters $\kappa$ at date 2 ($\kappa=R$ par liquidation, $R/\ell$ fire sale at price $\ell<1$, $\rho$ a lender-of-last-resort loan),

$$f^*(\kappa)=\pi+\frac{(1-\pi)(c_2-c_1)}{c_1(\kappa-1)}$$

which is 3.1's $f^*$ at $\kappa=R$. A tool removes the run iff waiting pays at least $c_1$ at every $f$.

*Introduced:* [3.1](lessons/03-01-diamond-dybvig.md) · also [3.2](lessons/03-02-stopping-runs.md)

### Fire sale

A forced sale by constrained natural buyers to buyers who value the asset less, so it fetches less than its held value (Shleifer and Vishny 1992; 2011).

- [3.1](lessons/03-01-diamond-dybvig.md): liquidating early fetches $\ell<1$ per unit; this lowers a bank's run threshold and links one holder's run to others holding the same asset.
- [3.2](lessons/03-02-stopping-runs.md): each extra withdrawal costs the waiters $\kappa=R/\ell$.
- [3.5](lessons/03-05-the-leverage-cycle.md): after a boom at loan $d$, an unexpected cut to $\phi$ at rollover moves the marginal buyer down to $h_1$ with $e(h^*-h_1)=d-\phi$, and $p_1=v(h_1)$ is below the price had the loan been $\phi$ all along.
- [4.4](lessons/04-04-overborrowing.md): in a bust all borrowers' $b$ units go to outside buyers valuing the $s$-th unit at $1-\gamma s$, so $p=1-\gamma B$ ($B$ aggregate debt); the borrower owes the deficiency $(1-p)b$, costing her $\lambda>1$ per dollar; buyers' bust surplus is $\gamma B^2/2$.

*Introduced:* [3.1](lessons/03-01-diamond-dybvig.md) · also [3.2](lessons/03-02-stopping-runs.md), [3.5](lessons/03-05-the-leverage-cycle.md), [4.4](lessons/04-04-overborrowing.md)

### Suspension of convertibility

The bank stops paying once withdrawals reach $\bar f$, protecting the waiters.

$$\text{no run} \iff \bar f\le f^*$$

$$\text{every impatient depositor paid} \iff \bar f\ge\pi$$

Waiters get $c_2(\min(f,\bar f))$. With $\pi$ known, any $\bar f\in[\pi,f^*]$ works at no cost. If the impatient share can reach $\pi_H>f^*$, the bank must strand some impatient depositors, leave the run, or cut the promise to $c_1\le R/(1+\pi_H(R-1))$, which lifts $f^*$ to $\pi_H$. With random $\pi$ no contract bound by sequential service reaches the optimum (Diamond-Dybvig Proposition 1).

*Introduced:* [3.2](lessons/03-02-stopping-runs.md)

### Deposit insurance

A guarantor promises every waiter $c_2$ whatever $f$, so nobody runs and the guarantee is never called; its cost is moral hazard, because shareholders then hold a put on the insurer.

$$\mathbb E[\text{equity}]=\mathbb E[V]-D+\mathbb E[\max(D-V,0)]$$

$V$ is end-of-period assets, $D$ insured deposits; the last term is the insurer's expected payout (Merton 1977). Diamond and Dybvig fund it with a tax set after the fact on total withdrawals (works with random $\pi$; needs a state that can tax). Example 2: assets 100, insured deposits 96, safe book 103 against risky 118 or 70: equity 7 against 11, insurer's expected payout 13 = 4 transferred + 9 destroyed. It ends runs by the insured only: uninsured deposits and wholesale funding still run.

*Introduced:* [3.2](lessons/03-02-stopping-runs.md)

### Capital requirement

Minimum equity per unit of assets, set so shareholders prefer the safe book; it shrinks the insurer's put without anyone having to see the bank's choice.

$$S-D\ \ge\ \tfrac12(H-D) \iff D\le 2S-H$$

For a coin-flip gamble paying $H$ or $L$ against a safe $S$ (with $L<D<H$). Example 2: $D\le88$, so equity of at least 12 per 100. By Modigliani-Miller the extra equity is not a social cost; the owners' private cost is the lost tax shield and guarantee, which are transfers ([2.1](lessons/02-01-modigliani-miller.md) Example 2; Admati and Hellwig 2013).

*Introduced:* [3.2](lessons/03-02-stopping-runs.md)

### Lender of last resort

A central bank lends against the bank's assets so extra withdrawals need not be met by liquidation; it stops the run exactly when its rate is low enough that the loan is repaid even in a total run.

$$W(f)=\frac{(1-\pi)c_2-\rho\,c_1(f-\pi)}{1-f}$$

$$\text{run gone} \iff \rho\le\frac{c_2}{c_1}$$

$\rho$ is the gross lending rate, $W(f)$ what waiting pays. Bagehot (*Lombard Street* 1873, ch. VII): lend only at a very high rate, on all good banking securities, as largely as the public ask; the model caps the rate at $c_2/c_1$. For a whole system the cash comes from taxes or money creation; with a riskless project it does deposit insurance's job. **Sovereign version** ([6.5](lessons/06-05-self-fulfilling-debt-crises.md)): a backstop (central bank, IMF, rescue fund) that buys new bonds at the safe price whenever private lenders refuse removes the run equilibrium and is never used if credible and the government is solvent at the good price ($b\le K$); in the default zone ($b>K$) repayment takes a transfer of at least $b-K$, which goes to bondholders. Conditionality is how it lends only where $b\le K$.

*Introduced:* [3.2](lessons/03-02-stopping-runs.md) · also [6.5](lessons/06-05-self-fulfilling-debt-crises.md)

### Illiquidity versus insolvency

Illiquid: assets held to maturity cover what is owed, but cannot become cash today except at a loss. Insolvent: assets fall short even held to maturity.

A lender-of-last-resort loan to the first is repaid; to the second it is a transfer to depositors and shareholders. Bagehot's collateral test (good banking securities, judged by ordinary times, not panic prices) sorts them without ruling on solvency directly. **Sovereign version** ([6.5](lessons/06-05-self-fulfilling-debt-crises.md)): a government in the [crisis zone](#crisis-zone) ($b\le K$) is illiquid and pays if lenders roll over; one in the default zone ($b>K$) is insolvent at the good price and defaults whatever lenders do.

*Introduced:* [3.2](lessons/03-02-stopping-runs.md) · also [6.5](lessons/06-05-self-fulfilling-debt-crises.md)

### Global games

With small private noise about a fundamental and dominance regions at both ends, iterated dominance leaves one threshold: all run below it, none above (Carlsson and van Damme 1993; Morris and Shin 1998).

$$\theta^*=\frac{c_1}{c_2}$$

Toy bank: a withdrawer gets $c_1$, a waiter $c_2$ if the bank survives and 0 if not; it survives if fewer than a share $\theta$ of the patient run; Laplacian beliefs at the threshold give $\theta^*$. The more a contract insures, the more often the bank is run. Goldstein and Pauzner (2005): unique equilibrium for the Diamond-Dybvig bank, $\theta^*$ rises with $c_1$, the optimal $c_1$ is below the first-best; runs just below $\theta^*$ are still panics.

*Introduced:* [3.2](lessons/03-02-stopping-runs.md)

### External finance premium

The cost of funds raised outside minus the opportunity cost of the firm's own (Bernanke, Gertler and Gilchrist 1999); under costly verification it is the expected audit bill per unit borrowed.

$$\text{EFP}(N)=\frac{c\,F\bigl(D(N)\bigr)}{I-N}$$

$N$ is net worth, $I-N=B$ the loan, $D(N)$ the face that satisfies $L(D)=R_f(I-N)$. The lender earns exactly the safe rate; the borrower's payoff over $R_fN$ is $\mathbb E[y]-R_fI-cF(D)$, so she bears the bill. The bill always falls with $N$; the per-unit premium falls for the uniform (6.44, 4.07, 2.01 percent at $N=10,25,40$ in 3.3's example) and is zero once $R_f(I-N)\le a$. Not the gap between the loan rate and the safe rate: most of that gap pays for promises bad years break.

*Introduced:* [3.3](lessons/03-03-the-financial-accelerator.md)

### Financial accelerator

A loss of borrowers' net worth raises the premium on outside funds, cuts investment by a multiple of the loss, and lowers next period's net worth, so a one-time shock echoes (Bernanke and Gertler 1989; Bernanke, Gertler and Gilchrist 1999).

$$I=x^*N$$

With constant returns investment is proportional to net worth (BGG's $QK=\psi(s)N$); leverage $x^*$ is set by the project's return and the premium schedule. Net worth (liquid assets plus collateral value minus debts) is procyclical, so the premium is countercyclical. 3.3's uniform example: $F(d^*)=2m/c-1$ with $m=\mathbb E[y]-R_f$, so $x^*=3.023$; a loss of 10 cuts investment by 30.2 now and 35.1 next period. The premium jumps on the old plan and returns once the firm scales back; what lasts is the smaller scale.

*Introduced:* [3.3](lessons/03-03-the-financial-accelerator.md)

### Flight to quality

Early in a recession, borrowers with high agency costs (low net worth, small firms) should get a falling share of credit and account for a disproportionate part of the decline (Bernanke, Gertler and Gilchrist 1996, evidence from large and small manufacturers).

Gertler and Gilchrist (1994): after tight money small manufacturers' sales fall faster than large ones' for more than two years, and bank lending to small firms shrinks while lending to large firms rises.

*Introduced:* [3.3](lessons/03-03-the-financial-accelerator.md)

### Kiyotaki-Moore

Farmers borrow only against land, so a one-period loss of their net worth becomes a many-period shortfall, and today's land price capitalizes the whole shortfall (Kiyotaki and Moore 1997).

$$K_t=\frac{(a+q_t)K_{t-1}-RB_{t-1}}{u_t}$$

$$q_t=\sum_{s\ge0}R^{-s}u(K_{t+s})$$

$$u^*=a$$

$$q^*=\frac{Ra}{R-1}$$

Farmers (mass 1) get $(a+c)k_t$ fruit from land $k_t$, of which only $ak_t$ is saleable; gatherers, with diminishing returns $G(k'_t)$, hold the rest and lend; $R$ is the gross rate, $q_t$ the land price (a land price, not a bond price), $K_t$ and $B_t$ the farmers' land and debt, $u_t$ the [user cost](#user-cost-of-land). In steady state the debt due $RB^*=q^*K^*$ equals the land's value and land is $R/(R-1)$ times net worth. Responses to a one-period shock are under [static and dynamic multipliers](#static-and-dynamic-multipliers). Assumes $c>(R-1)a$.

*Introduced:* [3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md)

### Collateral constraint

Debt plus interest is capped at the collateral's value at repayment, because the borrower's labor is inalienable.

$$R\,b_t\le q_{t+1}k_t \iff b_t\le\frac{q_{t+1}k_t}{R}$$

- [3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md): the Kiyotaki-Moore form.
- [3.5](lessons/03-05-the-leverage-cycle.md): with no uncertainty this is the [maximum riskless promise](#maximum-riskless-promise); 3.5 lets the margin itself move.
- [4.1](lessons/04-01-fishers-debt-deflation-formalized.md): $(1+r_t)b_t\le D$, with $D$ set by collateral value taken as given.
- [4.4](lessons/04-04-overborrowing.md): Davila-Korinek's collateral externality arises when a market price sits inside such a constraint, as in Bianchi (2011), where raising the cost of borrowing in tranquil times makes crises rarer and milder; it typically pushes toward overborrowing.

*Introduced:* [3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md) · also [3.5](lessons/03-05-the-leverage-cycle.md), [4.1](lessons/04-01-fishers-debt-deflation-formalized.md), [4.4](lessons/04-04-overborrowing.md)

### User cost of land

The one-period cost of holding a unit of land (buy now, sell next period); in Kiyotaki-Moore it is both the gatherers' holding cost and the farmers' down payment per plot.

$$u_t=q_t-\frac{q_{t+1}}{R}=\frac{G'(k'_t)}{R}$$

With no bubble, land is worth the discounted stream of future user costs, $q_t=\sum_{s\ge0}R^{-s}u_{t+s}$, so anything that lowers farmers' land later lowers today's price.

*Introduced:* [3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md)

### Static and dynamic multipliers

Kiyotaki-Moore's log-linear responses to a one-period shock $\Delta$ to farmers' output; the dynamic one prices the whole persistent shortfall into today's land.

$$\hat q_t=\frac{\Delta}{\eta}$$

$$\hat K_t=\frac{\eta}{1+\eta}\Bigl(1+\frac{R}{(R-1)\eta}\Bigr)\Delta$$

$$\hat K_{t+s}=\Bigl(\frac{\eta}{1+\eta}\Bigr)^{s}\hat K_t$$

Hats are percent deviations from steady state; $\eta$ is the elasticity of the land supply facing farmers with respect to the user cost. **Static** (future price pegged at $q^*$): $\hat q_t=\frac{R-1}{R\eta}\Delta$, $\hat K_t=\Delta$. The dynamic price response is $R/(R-1)$ times the static one. Example 1 ($R=1.25$, $\eta=1$, $\Delta=-1\%$): price $-1\%$, land $-3\%$, net worth $-6\%$ (static: $-0.2\%$, $-1\%$, $-2\%$); the exact model gives $-3.43\%$ and $-1.15\%$, and a windfall only $+2.73\%$ and $+0.91\%$.

*Introduced:* [3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md)

### Loan to value

The loan divided by the collateral's current value.

$$\text{LTV}=\frac{\phi}{p}$$

$$\text{margin (haircut)}=1-\frac{\phi}{p}$$

$$\text{leverage}=\frac{p}{p-\phi}$$

$\phi$ is the loan per unit, $p$ the price ([3.5](lessons/03-05-the-leverage-cycle.md)); leverage here is asset value over the buyer's own cash, not debt over equity. In the Kiyotaki-Moore steady state ([3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md)) lenders advance $q^*/R$ against a unit priced $q^*$, so LTV $=1/R$ (80 percent at $R=1.25$). In [4.4](lessons/04-04-overborrowing.md) LTV and debt-to-income caps are quantity limits on leverage: with identical borrowers a cap at the planner's debt equals a rebated Pigouvian tax (its shadow price is $\tau^*$); with heterogeneous borrowers the tax does better.

*Introduced:* [3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md) · also [3.5](lessons/03-05-the-leverage-cycle.md), [4.4](lessons/04-04-overborrowing.md)

### Leverage cycle

The margin is set alongside the interest rate; lower margins let fewer, keener optimists hold an asset, so its price rises, possibly above average opinion, and "scary bad" news that worsens the worst case raises margins and, with the optimists' lost wealth, drops the price by more than the news alone (Geanakoplos 2010).

A bust hits the price three ways: lower valuations, a higher margin, and the lost wealth of leveraged optimists. In a long calm the same forces run upward. [4.2](lessons/04-02-minsky-informally-and-formally.md) reads it as a Minsky mechanism: a calm that narrows the perceived bad state raises leverage further.

*Introduced:* [3.5](lessons/03-05-the-leverage-cycle.md) · also [4.2](lessons/04-02-minsky-informally-and-formally.md)

### Marginal buyer

The least optimistic holder of an asset sets its price; leverage decides who that is.

$$p=v(h^*)$$

$$v(h)=d+(1-d)h$$

$$e(1-h^*)+\phi=p \implies h^*(\phi)=\frac{e+\phi-d}{1+e-d}$$

Agents $h\in[0,1]$ believe the good state (payoff 1) has probability $h$; the bad state pays $d$; each holds cash $e$; $\phi$ is the loan per unit. Each unit of loan per unit of asset raises the price by $(1-d)/(1+e-d)$. Lending is feasible only if the non-buyers' cash covers it, $eh^*\ge\phi$. Example 1 ($d=0.6$, $e=1.2$): price 0.75 with no borrowing, 0.9 at $\phi=0.6$.

*Introduced:* [3.5](lessons/03-05-the-leverage-cycle.md)

### Maximum riskless promise

With two states and agents who differ only in optimism, the equilibrium loan per unit is the bad-state payoff, the largest promise that cannot default (Geanakoplos).

$$\phi=d$$

$$\text{LTV}=\frac{d}{p}$$

A promise above $d$ would sell good-state payoff, which the borrower values most, to a less optimistic lender. So the loan never defaults and its size is set by the worst case, whatever the probabilities; the leveraged position is a pure good-state bet priced at $(p-d)/(1-d)=h^*$.

*Introduced:* [3.5](lessons/03-05-the-leverage-cycle.md)

### Run on repo

A rise in repo haircuts withdraws funding per unit of collateral without any default and forces sales, as depositors withdraw from a bank.

Gorton and Metrick (NBER working paper 2009; *JFE* 2012): their haircut index on non-Treasury collateral went from zero in early 2007 to nearly half in late 2008, and some collateral could not be financed at all. 3.5 Example 2: a cut in the loan from 0.6 to 0.45 at rollover, with no news, drops the price from 0.9 to 0.85 and the optimists' equity by a sixth.

*Introduced:* [3.5](lessons/03-05-the-leverage-cycle.md)

### Debt deflation

Falling prices raise the real value of debt fixed in money, moving goods from borrowers who spend everything to savers who spend little, which lowers the natural rate further (Fisher 1933).

$$1+r^n_1=\frac{y_s+D_L}{\beta\,(y_s+D_H/P_1)}$$

$P_1$ is the date-1 price level relative to the level at which the debt was contracted; $P_1<1$ is deflation. With debt fixed in goods the same deflation would change nothing real. Example 1: a 10 percent fall in prices takes the natural rate from $-6.43\%$ to $-9.77\%$. In Kiyotaki-Moore ([3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md) Example 2) it works through collateral values instead of spending: a surprise rise of $(R-1)/R$ percent in the real value of debt hits net worth like a 1 percent productivity shock.

*Introduced:* [4.1](lessons/04-01-fishers-debt-deflation-formalized.md) · also [3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md)

### Deleveraging shock

An unexpected, permanent fall in the borrowing limit that forces borrowers to repay out of current income (Eggertsson and Krugman 2012).

$$(1+r_t)\,b_t\le D$$

$$D:\ D_H \to D_L$$

$$c^b_1=y_b-D_H+\frac{D_L}{1+r_1}$$

Borrowers (endowment $y_b$) always borrow to the limit $D$ on what they owe next period; savers have endowment $y_s$ and log utility with discount factor $\beta$. Nothing is destroyed: every unit repaid lands with savers, who save most of it.

*Introduced:* [4.1](lessons/04-01-fishers-debt-deflation-formalized.md)

### Natural rate

The real interest rate that clears the goods market at full employment, a model object nobody observes.

$$1+r^n_1=\frac{y_s+D_L}{\beta\,(y_s+D_H)}$$

$$r^n_1<0 \iff \beta D_H-D_L>(1-\beta)\,y_s$$

Only savers' parameters appear: borrowers at the limit have an MPC of one, a saver spends about $1-\beta$ of a one-period windfall. Steady state: $1+\bar r=1/\beta$. Example 1 ($\beta=0.95$, $y_s=1.2$, cut from 0.6 to 0.4): $r^n_1=-6.43\%$. In [4.4](lessons/04-04-overborrowing.md) the aggregate-demand externality of leverage exists only when the natural rate lies below the floor; above it the central bank cuts the real rate until savers spend the repayment.

*Introduced:* [4.1](lessons/04-01-fishers-debt-deflation-formalized.md) · also [4.4](lessons/04-04-overborrowing.md)

### Zero lower bound

The nominal rate cannot fall much below zero, which puts a floor under the real rate; below it output, not the rate, clears the market.

$$i_1\ge0$$

$$1+r_1=\frac{1+i_1}{1+\pi^e}$$

$i_1$ is the nominal rate, $\pi^e$ expected inflation from date 1 to 2. At the floor with rigid prices and borrowers' output share $\theta$:

$$(1-\theta)\,Y_1=\frac{y_s+D_L}{\beta(1+r_1)}-\frac{D_H}{P_1}$$

Example 2: $Y_1$ 9.6 percent below potential with rigid prices.

*Introduced:* [4.1](lessons/04-01-fishers-debt-deflation-formalized.md)

### Paradox of flexibility

At the zero lower bound with debt fixed in money, demand rises with the price level, so more flexible prices mean more deflation, more real debt and a deeper slump.

It needs the floor and no expected catch-up in prices. Example 2: letting prices fall by half the output gap deepens the slump from 9.6 to 13.2 percent below potential; beyond about 0.97 percent of price fall per percent of slack no price level stops the fall. Off the floor the central bank sets the nominal rate to the natural rate and flexibility does no harm.

*Introduced:* [4.1](lessons/04-01-fishers-debt-deflation-formalized.md)

### Aggregate demand externality

Each borrower's leverage choice ignores that, if a deleveraging shock hits the zero lower bound, her own debt adds to an output shortfall; the contract prices the repayment, a transfer, but not the lost output.

$$(1-\theta)\,Y_1=c^s_1+D_L-D_H \implies \frac{dY_1}{dD_H}=-\frac{1}{1-\theta}$$

$c^s_1$ is savers' spending (pinned by their Euler equation at the floor). Each unit of debt carried into the slump cuts output by $1/(1-\theta)$, 1.67 at $\theta=0.4$; savers' lost income is replaced by the repayment, borrowers lose $1/(1-\theta)$. It exists only when the natural rate is below the floor. Korinek and Simsek (2016): leverage limits raise welfare, interest-rate policy is inferior; Farhi and Werning (2016): the same with other constraints on monetary policy, such as a peg.

*Introduced:* [4.1](lessons/04-01-fishers-debt-deflation-formalized.md) · also [4.4](lessons/04-04-overborrowing.md)

### Minsky classification

Cash-flow classes for a unit with operating cash flow $Y$, debt $D$, interest rate $i$ and principal due $P$ (Minsky 1986; 1992).

$$\text{hedge: } Y\ge iD+P$$

$$\text{speculative: } iD\le Y<iD+P$$

$$\text{Ponzi: } Y<iD$$

Cutoffs: hedge up to $i_H=(Y-P)/D$, Ponzi above $i_P=Y/D$. Refinancing the shortfall gives year-end debt $D'=(1+i)D-Y$, which exceeds $D$ only for a Ponzi unit. The classes measure timing, not leverage: the same debt is speculative in any year a lump of principal falls due. Claims: hedge finance damps shocks, and a long prosperity shifts the mix toward speculative and Ponzi units (stability is destabilizing).

*Introduced:* [4.2](lessons/04-02-minsky-informally-and-formally.md)

### Ponzi finance and growth

A Ponzi unit is still solvent if its cash flow grows fast enough; it bets on growth or asset sales, not just on lenders rolling over.

$$\text{solvent} \iff Y\ge(i-g)D \iff g\ge i-\frac{Y}{D}$$

$g<i$ is the growth rate of cash flow; the cash flows are worth $Y/(i-g)$. "Ponzi" is a cash-flow class, not fraud or insolvency; a government running primary deficits with $r<g$ is one ([5.2](lessons/05-02-when-r-is-less-than-g.md)).

*Introduced:* [4.2](lessons/04-02-minsky-informally-and-formally.md)

### Diagnostic expectations

Beliefs that move in the right direction but too far, overweighting the future states whose likelihood rose most with the latest news (Bordalo, Gennaioli and Shleifer 2018).

$$\mathbb E^\theta_t[\omega_{t+1}]=b\,\omega_t+\theta\,b\,\epsilon_t$$

The fundamental follows $\omega_{t+1}=b\,\omega_t+\epsilon_{t+1}$, $\epsilon\sim N(0,\sigma^2)$, $0\le b\le1$; $\epsilon_t$ is this period's news; $\theta\ge0$ the distortion ($\theta=0$ rational). The forecast error $-\theta b\epsilon_t$ is predictable; the distortion vanishes when news says nothing about the future ($b=0$), and it overreacts in both directions. Example 2: a good year lowers the diagnostic loan rate to 2.10 percent (rational 3.11); a quiet year then raises it 1.58 points against 0.57.

*Introduced:* [4.2](lessons/04-02-minsky-informally-and-formally.md)

### Credit market sentiment

When corporate spreads are narrow relative to their norms and junk bonds are a high share of issuance, sentiment in year $t-2$ predicts wider spreads and weaker GDP, investment and employment in years $t$ and $t+1$ (López-Salido, Stein and Zakrajšek 2017, US data from 1929).

They test for a credit-supply channel directly: net debt issuance falls while equity issuance rises.

*Introduced:* [4.2](lessons/04-02-minsky-informally-and-formally.md)

### Credit booms and crises

Lagged growth of real bank loans predicts banking crises (Schularick and Taylor 2012, 14 countries, 1870-2008; "credit booms gone bust" is their title; their working paper reports an ROC area of about 0.72).

A forecasting result: fragility is visible before the shock, as Minsky claimed, but prediction alone does not show that credit causes the bust, since optimism could drive both. Mian, Sufi and Verner (2017) is the household-debt counterpart ([4.3](lessons/04-03-household-debt-and-the-great-recession.md)).

*Introduced:* [4.2](lessons/04-02-minsky-informally-and-formally.md)

### Housing net worth shock

The share of a region's 2006 net worth wiped out by the 2006-09 house-price change; leverage divides the price change by the owners' equity share (Mian, Rao and Sufi 2013).

$$s_i=\frac{g_iH_i}{NW_i}$$

$$s_i=\frac{g_i}{1-\ell_i} \ \text{ when } F_i=0$$

$NW_i=F_i+H_i-D_i$ (financial assets plus housing minus debt), $g_i$ house-price growth, $\ell_i=D_i/H_i$ the LTV. An 80 percent LTV quintuples a price fall.

*Introduced:* [4.3](lessons/04-03-household-debt-and-the-great-recession.md)

### MPC out of housing wealth

Cents of spending per dollar of home value lost; one elasticity gives more cents where net worth is thin relative to spending.

$$\Delta\log C_i=\alpha+\eta\,s_i+\varepsilon_i$$

$$\frac{\Delta C_i}{\Delta H_i}=\eta\,\frac{C_i}{NW_i}$$

$\eta$ is the elasticity of spending with respect to the housing net worth shock (percent per percent). Mian, Rao and Sufi (2013): $\eta$ of 0.6-0.8 (OLS 0.63 on 944 counties, IV 0.77 on 540); MPC 5.4 cents OLS, 7.2 IV. On autos (ZIP level), about 3 times larger at LTV of 90 percent or more than below 30, and almost 3 times larger in the poorest ZIP codes than the richest.

*Introduced:* [4.3](lessons/04-03-household-debt-and-the-great-recession.md)

### Supply elasticity instrument

Saiz's (2010) metro housing supply elasticity (land lost to steep slopes and water, plus land-use regulation) instruments the housing net worth shock: inelastic metros had bigger booms, more leverage and bigger busts.

$$\hat\eta=\frac{\hat\rho}{\hat\pi}$$

$\hat\pi$ is the first stage (shock on $Z_i$), $\hat\rho$ the reduced form (spending on $Z_i$). IV recovers a local total effect where geography amplified the cycle, including local job feedback. Critics: Davidoff (2016), constraints correlate with demand and productivity, and some of the wildest cycles were in flat inland California; Guren, McKay, Nakamura and Steinsson (2021), exposure to regional cycles as the instrument, smaller and more precise effects, not especially large in the 2000s.

*Introduced:* [4.3](lessons/04-03-household-debt-and-the-great-recession.md)

### Exclusion restriction

The instrument moves the outcome only through the treatment; untestable, and a direct effect is magnified by a weak first stage.

$$\operatorname{Cov}(Z_i,\varepsilon_i)=0$$

$$\rho=\eta\pi+\delta \implies \hat\eta_{IV}\to\eta+\frac{\delta}{\pi}$$

In 4.3: supply elasticity moves 2006-09 spending only through housing net worth. Example 1: a direct effect of 1.6 points biases the estimate by 0.1 with a first stage of 16, by 0.4 with a first stage of 4. IV close to OLS does not validate the instrument. Taught in `econometrics` 3.6.

*Introduced:* [4.3](lessons/04-03-household-debt-and-the-great-recession.md)

### Foreclosure externality

A foreclosure lowers nearby house prices, so part of the loss falls on neighbors outside the contract.

Campbell, Giglio and Pathak (2011): foreclosed houses sold at a 27 percent discount, and a foreclosure 0.05 miles away cut a house's price by about 1 percent. Mian, Sufi and Trebbi (2015): states with no judicial requirement foreclosed twice as often; at state borders foreclosures jump while credit scores, incomes and education do not; with the law as instrument, foreclosures cut house prices, residential investment and demand. A judicial requirement shifts loss from neighbors to lenders, who price it in.

*Introduced:* [4.3](lessons/04-03-household-debt-and-the-great-recession.md)

### Default shares versus default rates

A group's share of defaults can jump while its default rate stays below other groups', so a shift in shares does not by itself say who defaulted most.

$$\text{share}_k=\frac{w_kr_k}{\sum_jw_jr_j}$$

$$r_k=\frac{R\,d_k}{w_k}$$

$w_k$ is group $k$'s share of balances, $r_k$ its default rate, $d_k$ its share of defaults, $R$ the overall default rate. This is the arithmetic of the Adelino-Schoar-Severino (2016) dispute: middle-income, high-income and prime borrowers sharply increased their share of delinquencies; Mian and Sufi (2017) reply that application incomes were overstated where credit grew fastest. What would split them is who took on the extra debt, measured with a clean income measure.

*Introduced:* [4.3](lessons/04-03-household-debt-and-the-great-recession.md)

### Relative versus aggregate effects

Cross-regional designs difference out anything common to all regions (monetary policy, federal transfers, national demand), so they identify relative effects; aggregating needs a model.

Mian, Rao and Sufi's estimate that housing losses explain almost 40 percent of the 2006-09 spending shortfall assumes no general-equilibrium shift in the national level; [4.1](lessons/04-01-fishers-debt-deflation-formalized.md)'s model is one way to aggregate.

*Introduced:* [4.3](lessons/04-03-household-debt-and-the-great-recession.md)

### Constrained efficiency

A constrained planner picks the same variables as private agents but must leave the frictions and markets as they are; the equilibrium is constrained inefficient if such a planner can do better.

$$b^{CE}=\frac{m}{k+\pi\lambda\gamma}$$

$$b^{SP}=\frac{m}{k+\pi\gamma(2\lambda-1)}$$

In 4.4's model: borrowing $b$ buys $b$ units, worth $w(b)=mb-\tfrac k2 b^2$ beyond normal value; in a bust (probability $\pi$) all units are fire-sold at $p=1-\gamma B$, and each dollar of deficiency costs the borrower $\lambda>1$. With incomplete markets or imperfect information the equilibrium is generically constrained inefficient and some tax intervention is almost always Pareto improving (Greenwald and Stiglitz 1986). The benchmark is the planner facing the same frictions: Lorenzoni's (2008) equilibrium borrows less than the first best yet can borrow more than the constrained optimum.

*Introduced:* [4.4](lessons/04-04-overborrowing.md)

### Pecuniary externality

An effect of one agent's choice on others that runs through a price: a pure transfer when both sides value money alike, a real loss when they do not.

$$\text{external marginal cost}=\pi\gamma(\lambda-1)B$$

One more unit of aggregate debt cuts the bust price by $\gamma$: borrowers lose $\lambda\gamma B$, buyers gain $\gamma B$. At $\lambda=1$ (complete markets) the wedge is zero however steep the fire sale. Dávila and Korinek (2018): **distributive** externalities (missing insurance; sign can go either way) and **collateral** externalities (a price inside a borrowing constraint; typically overborrowing); fire sales are neither necessary nor sufficient. If the buyers were the cash-starved side, the planner would want more borrowing.

*Introduced:* [4.4](lessons/04-04-overborrowing.md)

### Macroprudential tax

A Pigouvian tax on borrowing equal to the external marginal cost at the planner's optimum, rebated lump-sum.

$$\tau^*=\pi\gamma(\lambda-1)\,b^{SP}$$

Example 1 ($\pi=0.2$, $\gamma=0.5$, $\lambda=2$, $m=0.12$, $k=0.1$): $b^{CE}=0.4$, $b^{SP}=0.3$, $\tau^*=0.03$, deadweight triangle 0.002. Buyers lose and borrowers gain; compensating buyers from the revenue makes it a Pareto improvement. A cap at $b^{SP}$ (an LTV or debt-to-income limit) gives the same allocation when borrowers are identical; with heterogeneous borrowers the tax does better.

*Introduced:* [4.4](lessons/04-04-overborrowing.md)

### Primary surplus

Revenue minus all spending except interest, as a share of GDP: the flow that pays down the debt ratio.

$$s_t = \frac{\text{revenue}_t-\text{non-interest spending}_t}{\text{GDP}_t}$$

A negative $s_t$ is a primary deficit ($\delta=-s$ in [5.2](lessons/05-02-when-r-is-less-than-g.md)).

*Introduced:* [5.1](lessons/05-01-the-government-budget-constraint.md)

### Debt ratio dynamics

The debt ratio compounds at the growth-adjusted factor and the primary surplus pays part of it off.

$$d_{t+1}=a\,d_t-s_t$$

$$a=\frac{1+r}{1+g}$$

$d_t$ is debt over GDP at the start of year $t$, $r$ and $g$ the real interest and growth rates. A fixed surplus holds the ratio at $\bar d=s/(a-1)$, and $d_{t+1}-\bar d=a(d_t-\bar d)$: with $r>g$ every deviation compounds (the knife-edge); with $r<g$ ([5.2](lessons/05-02-when-r-is-less-than-g.md)) it shrinks. Variants:

- [5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md), $g=0$: $d_{t+1}=(1+r)d_t+G_t-\tau_t$.
- [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md), with seigniorage $\sigma_t$: $d_{t+1}=a\,d_t-s_t-\sigma_t$.
- [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md), nominal debt: $d_{t+1}=\frac{1+i_t}{(1+\pi_t)(1+g_t)}d_t-s_t$, the real identity with ex post real rate $1+r_t=(1+i_t)/(1+\pi_t)$.
- [8.3](lessons/08-03-relief-written-into-the-contract.md), debt indexed to the GDP level: gross return $(1+r)(1+g_{t+1})/(1+\bar g)$, so $d_{t+1}=\frac{1+r}{1+\bar g}d_t-s$ whatever growth turns out to be (80 percent stays 80 through a recession where plain debt rises to 87.5).

*Introduced:* [5.1](lessons/05-01-the-government-budget-constraint.md) · also [5.2](lessons/05-02-when-r-is-less-than-g.md), [5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md), [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md), [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md), [8.3](lessons/08-03-relief-written-into-the-contract.md)

### Debt stabilizing primary surplus

The primary surplus that holds today's debt ratio exactly constant: it pays the interest-growth gap on the whole existing debt.

$$s^*=(a-1)\,d=\frac{r-g}{1+g}\,d$$

With $r>g$ it only holds the ratio where it is; any shock then compounds, so stability needs a surplus that responds. Negative (a deficit) when $r<g$ ([5.2](lessons/05-02-when-r-is-less-than-g.md)). Example: $d=1$, $r=5\%$, $g=1\%$ gives $s^*=3.96$ percent of GDP.

*Introduced:* [5.1](lessons/05-01-the-government-budget-constraint.md) · also [5.2](lessons/05-02-when-r-is-less-than-g.md)

### No-Ponzi condition

The present value of debt infinitely far out must vanish; otherwise creditors are financing interest with new debt forever.

$$\lim_{T\to\infty}\frac{d_{t+T}}{a^T}=0$$

It is the creditors' transversality condition seen from the government's side. With $r>g$ and a fixed surplus above the balance point, the excess grows at exactly the discount rate, so the unstable path is the Ponzi path. With $r<g$ a rollover leaves $d_{t+T}/a^T=d_t$ for every $T$ ([debt rollover](#debt-rollover)).

*Introduced:* [5.1](lessons/05-01-the-government-budget-constraint.md)

### Intertemporal budget constraint

Today's debt equals the present value of all future primary surpluses; the debt is a claim on those surpluses.

$$d_t=\sum_{j=0}^{\infty}\frac{s_{t+j}}{a^{j+1}}$$

Holds when the no-Ponzi condition does; it is what Ricardian equivalence runs on. Other forms:

- [5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md): $\sum_{t\ge0}\tau_t/(1+r)^t=(1+r)d_0+\sum_{t\ge0}G_t/(1+r)^t$; it fixes the total, not the timing of taxes.
- [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md): with seigniorage, $d_0=\sum_{t\ge0}(s_t+\sigma_t)/a^{t+1}$; with $s_t\le\bar s$ it caps debt at the [fiscal limit](#fiscal-limit).
- [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md): with debt in money, $B_{t-1}/P_t=S_t$ (the [valuation equation](#valuation-equation)).

*Introduced:* [5.1](lessons/05-01-the-government-budget-constraint.md) · also [5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md), [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md), [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md)

### Fiscal reaction function

A rule in which the surplus responds to debt; any positive response keeps the debt solvent, a larger one also makes the ratio stable (Bohn 1998).

$$s_t=\rho\,d_t+\mu_t \implies d_{t+1}=(a-\rho)\,d_t-\mu_t$$

$\rho$ is the response, $\mu_t$ everything else (bounded). $\rho>0$ secures the no-Ponzi condition and the IBC; $\rho>a-1=(r-g)/(1+g)$ also stabilizes the ratio. In between the ratio drifts up forever while creditors are repaid in present value. Bohn (2011) puts the US response at 0.05 to 0.12; Ghosh, Kim, Mendoza, Ostry and Qureshi (2013) find "fiscal fatigue" as debt climbs. In [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md)'s terms, $\rho>a-1$ is Leeper's passive fiscal policy; Bohn's weaker $\rho>0$ only secures the IBC.

*Introduced:* [5.1](lessons/05-01-the-government-budget-constraint.md) · also [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md)

### Self-defeating consolidation

A consolidation can raise the debt ratio in its first year when the multiplier is large, because it shrinks the denominator faster than it cuts the debt.

$$\Delta d=\frac{mc}{1-mc}\,d-c\,(1-\varepsilon m)\approx c\,[m(d+\varepsilon)-1]$$

$c$ is the tightening (share of GDP), $m$ the fiscal multiplier, $\varepsilon$ the semi-elasticity of the budget balance to output (about 0.5 in the EU). The ratio rises in year one iff $m(d+\varepsilon)>1$ to first order; the threshold $1/(d+\varepsilon)$ is 0.67 at $d=1$. It reverses once output returns to trend, unless the loss persists or the higher ratio raises $r$.

*Introduced:* [5.1](lessons/05-01-the-government-budget-constraint.md)

### r minus g

The growth-adjusted rate: negative means a debt ratio melts on its own, positive means it needs surpluses.

$$a-1=\frac{r-g}{1+g}$$

Blanchard (2019): over 1950-2018 the US one-year rate averaged 4.7 percent, the ten-year 5.6 percent, nominal GDP growth 6.3 percent; the log of $(1+r)/(1+g)$ averaged between $-1$ and $-2$ percent with an annual standard deviation of 2.8 percent. What flips the sign: debt itself (the rate schedule), a growth slowdown, the end of whatever holds safe rates down, a self-fulfilling risk premium.

*Introduced:* [5.2](lessons/05-02-when-r-is-less-than-g.md)

### Debt rollover

Issue debt once and never service it from taxes: with $r<g$ the ratio melts away untaxed, a Ponzi scheme that works because the chain has no last link.

$$s_t=0 \implies d_t=a^t d_0\to0$$

$$\text{half-life } \frac{\ln2}{-\ln a}$$

The no-Ponzi term $d_{t+T}/a^T=d_t$ never vanishes, so the IBC fails: grad-macro 3.2's chain of transfers from young to old. Example 1: 20 percent of GDP at $r=1\%$, $g=3\%$ halves every 35.3 years.

*Introduced:* [5.2](lessons/05-02-when-r-is-less-than-g.md)

### Sustainable deficit

With $r<g$ a permanent primary deficit holds the ratio at a stable point set by dividing the deficit by the gap; with a rate that rises with debt, there is a most that any ratio can carry.

$$d^*=\frac{\delta}{1-a}=\frac{(1+g)\,\delta}{g-r}$$

$$r(d)=r_0+\theta d \implies \delta_{\max}=\frac{(g-r_0)^2}{4\theta(1+g)} \ \text{ at } d=\frac{g-r_0}{2\theta}$$

$\delta=-s>0$ is the primary deficit. With a gap of 1 point, a 1 percent deficit sits at 100 percent of GDP and a 3 percent deficit at 300. Below $\delta_{\max}$ there are two resting points and only the lower is stable.

*Introduced:* [5.2](lessons/05-02-when-r-is-less-than-g.md)

### Marginal cost of debt

An extra unit of debt pays its own rate and raises the rate on the whole stock, so the marginal unit costs more than the average rate says.

$$m(d)=\frac{\mathrm{d}}{\mathrm{d}d}\bigl[r(d)\,d\bigr]=r(d)+d\,r'(d)$$

With all debt one-year and $r(d)=r_0+\theta d$, $m(d)=r(d)+\theta d$. A resting point is stable only where $m(d)<g$ (map slope $(1+m)/(1+g)$). Blanchard's rough figure: 2 to 3 basis points per point of debt-to-GDP ($\theta=0.02$ to $0.03$), which on a 60-point rise adds 1.2 to 1.8 points to the rate.

*Introduced:* [5.2](lessons/05-02-when-r-is-less-than-g.md)

### Welfare cost of debt

A rollover has no fiscal cost, but the debt absorbs saving that would have built capital; Blanchard's approximate rule weighs the two gaps.

$$\operatorname{sign}(dU)=\operatorname{sign}\bigl(1-\mathbb E[R_f]\,\mathbb E[R]\bigr)$$

$U$ is steady-state welfare in an OLG model with risky capital and Cobb-Douglas production; $R_f$ and $R$ are the gross safe return and gross marginal product of capital over one 25-year generation, each relative to growth. More debt raises welfare iff the safe rate is further below growth than the return on capital is above it. Example: safe rate 2 points below growth gives $\mathbb E[R_f]=0.98^{25}=0.603$, so debt helps only if $\mathbb E[R]<1.657$, about 2 points a year above growth.

*Introduced:* [5.2](lessons/05-02-when-r-is-less-than-g.md)

### Fan chart

Percentiles of simulated debt-ratio paths under random $r-g$; persistence of $r-g$ widens the fan far more than its annual spread.

IMF practice for market-access countries (Sovereign Risk and Debt Sustainability Framework, per a 2023 staff presentation): historical shocks to $r$, $g$, the real exchange rate and the primary balance drawn jointly and in year pairs, 10,000 paths, five years ahead; feedback from debt to rates listed as future work. 5.2 Example 2 (start at 100 percent, deficit 1 percent, $a-1$ mean $-1\%$, sd $2.8\%$): probability of passing 125 percent within 20 years is 3.8 percent with independent draws, 28.2 percent with persistence 0.8, 6.9 percent with rate feedback.

*Introduced:* [5.2](lessons/05-02-when-r-is-less-than-g.md)

### Convex distortion cost

The deadweight loss of a tax rate rises more than proportionally with the rate, which is why spreading a revenue need over time or states lowers its total cost.

$$f'(\tau)>0, \quad f''(\tau)>0$$

$$\text{e.g. } f(\tau)=\kappa\tau^2$$

Any path raising the same present value, $\tau_t=\bar\tau+e_t$, costs $\kappa\sum_te_t^2/(1+r)^t$ more than the smooth rate $\bar\tau$. In [6.5](lessons/06-05-self-fulfilling-debt-crises.md) the same convexity makes paying a maturing slice in one year costly when lenders refuse to roll over, $\kappa(\lambda b)^2$ (against 5.3's smooth path the exact extra is $\kappa m^2/(1+r)$ for a one-year payment $m$).

*Introduced:* [5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md) · also [6.5](lessons/06-05-self-fulfilling-debt-crises.md)

### Permanent spending

The annuity value of the whole future spending path; the smoothed tax rate pays interest on the debt plus permanent spending.

$$G^P_t=\frac{r}{1+r}\sum_{s\ge0}\frac{G_{t+s}}{(1+r)^s}$$

$$\tau_t=r\,d_t+G^P_t$$

$G_t$ is spending, $\tau_t$ the tax rate (and revenue) as shares of GDP. Then $d_{t+1}-d_t=G_t-G^P_t$: the deficit absorbs exactly the temporary part of spending. A permanent program raises $G^P$ one-for-one and is taxed in full at once.

*Introduced:* [5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md)

### Tax smoothing

Set the marginal distortion equal every period, so the tax rate is constant given current information: deficits absorb temporary spending, permanent spending is taxed at once (Barro 1979).

$$f'(\tau_t)=\lambda \ \text{ every period}$$

$\lambda$ is the multiplier on the budget constraint. It is Friedman's permanent-income rule with obligations in place of wealth and the tax rate in place of consumption; debt has no target level. Example 1 (two-year war adding 0.10 at $r=5\%$): $\tau=0.1893$ forever instead of 0.28 for two years; debt settles at 0.1859; distortions 2.3 percent lower in total. It smooths the rate, not revenue.

*Introduced:* [5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md)

### Tax rate martingale

With only safe one-year debt and random spending, the tax rate is expected to stay put and moves only when news about spending arrives.

$$f'(\tau_t)=\mathbb E_tf'(\tau_{t+1}) \implies \mathbb E_t\tau_{t+1}=\tau_t \ \text{ when } f=\kappa\tau^2$$

$$\tau_{t+1}-\tau_t=\frac{r}{1+r}\,(\mathbb E_{t+1}-\mathbb E_t)\sum_{s\ge0}\frac{G_{t+1+s}}{(1+r)^s}$$

Hall's random walk with $f'$ in place of $u'$. Debt inherits the unit root. Only the forecast is flat: each surprise moves the rate for good.

*Introduced:* [5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md)

### State contingent debt

Debt whose payoff is written to fall in bad states; it equalizes the tax rate across states as well as dates, which safe debt alone cannot (Lucas and Stokey 1983).

$$f'(\tau_t)=f'(\tau_{t+1}(s)) \ \text{ for every state } s$$

The tax rate then depends only on the current state of spending, never on its history. It is not a polite default: the low payment is priced at issue and paid for in the good state. Without it (Aiyagari, Marcet, Sargent and Seppälä 2002) Barro's random walk returns, with a precautionary motive. In [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md) the sovereign insurance contract is state-contingent debt that must be self-enforcing: what the country owes is negative in bad years. In [8.3](lessons/08-03-relief-written-into-the-contract.md): with capacity $\tau Y$ and a plain bond of face $D$ that defaults when $\tau Y<D$ (creditors recover $\lambda\tau Y$), an indexed bond paying $\kappa Y$ with $\kappa\bar Y=L$ (the plain bond's expected payment) has $\kappa\le\tau$, never defaults, and lowers the expected burden by

$$\Delta=(1-\lambda)\,\tau\,\mathbb E\bigl[Y\,\mathbf 1\{\tau Y<D\}\bigr]$$

the expected deadweight of default: a restructuring agreed in advance. Indexed debt wins only if the per-period cost of making the index credible is below $\Delta$.

*Introduced:* [5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md) · also [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md), [8.3](lessons/08-03-relief-written-into-the-contract.md)

### Fiscal limit

The present value of the largest primary surplus the government can run forever; no tax policy backs a debt above it.

$$\bar d=\frac{\bar s}{a-1}=\frac{(1+g)\,\bar s}{r-g}$$

$\bar s$ is peak (Laffer) revenue minus the lowest feasible spending; with a base proportional to $(1-\tau)^e$ the revenue peak is $\tau^*=1/(1+e)$ (`public-economics` 5.1). Bi (2012): a distribution, not a number, so risk premia stay low then rise rapidly near it; Leeper and Walker (2011): at the limit monetary policy may lose control of inflation. A debt above $(\bar s+S_{\max})/(a-1)$ can be backed by neither taxes nor money. In [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md) the fiscal limit caps the budgetary problem, and the transfer problem is a second, external cap that can bind when the budget does not.

*Introduced:* [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) · also [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md)

### Seigniorage

Revenue from issuing base money; with constant real balances it is an inflation tax at rate $\pi$ on the base, and it has a Laffer ceiling.

$$\sigma=\frac{\dot M}{PY}=\pi m$$

$$S(\pi)=k\,\pi\,e^{-\alpha\pi}$$

$$\pi^*=\frac1\alpha$$

$$S_{\max}=\frac{k}{\alpha e}$$

$M$ is base money, $P$ the price level, $Y$ real output, $m=M/(PY)$ real balances over GDP, $\pi$ inflation (continuously compounded); $S(\pi)$ uses [Cagan demand](#cagan-money-demand). The peak is where the base's elasticity $-\alpha\pi$ reaches $-1$. The most debt money alone can back is $S_{\max}/(a-1)$. Example 1 ($k=0.10$, $\alpha=2$): $S_{\max}=1.84$ percent of GDP at 50 percent inflation.

*Introduced:* [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md)

### Cagan money demand

Real balances fall exponentially with inflation (Cagan 1956, fitted to hyperinflations); with foresight today's price level is a discounted average of all future money supplies.

$$m=k\,e^{-\alpha\pi}$$

$$p_t=\frac1\alpha\int_t^\infty e^{-(u-t)/\alpha}\,(\ln M_u-\ln k)\,du$$

$k$ is real balances at zero inflation, $\alpha$ the semi-elasticity, $p_t=\ln P_t$; from $\ln M_t-p_t=\ln k-\alpha\dot p_t$ with $Y=1$. Money constant until $T$ and growing at $\mu$ after gives inflation $\mu e^{-(T-t)/\alpha}$ before $T$: prices move before the printing does.

*Introduced:* [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md)

### Unpleasant monetarist arithmetic

Under fiscal dominance the present value of seigniorage is fixed by the treasury, so a central bank that refuses to print now must print more later (Sargent and Wallace 1981).

$$\sum_{t\ge0}\frac{\sigma_t}{a^{t+1}}=d_0-\sum_{t\ge0}\frac{s_t}{a^{t+1}}$$

$$\sigma_L=\sigma_0+(a^T-1)(\sigma_0-\sigma_1)$$

$\sigma_0=(a-1)d_0-s$ holds the ratio from today; printing $\sigma_1<\sigma_0$ for $T$ years forces $\sigma_L$ afterwards ($a^T\sigma_0$ if nothing is printed). The two crucial assumptions: $r>g$, and a fiscal path that ignores monetary policy. With Cagan demand, anticipation can raise inflation now, and if $a^T\sigma_0>S_{\max}$ no inflation rate raises it. Example 2: ten years of no printing turn 12 percent inflation into 14.6 percent forever.

*Introduced:* [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md)

### Active and passive policy

Leeper (1991): an authority is **active** if it sets its instrument without regard to the debt and **passive** if it adjusts to keep the budget constraint satisfied.

| Money | Fiscal | Outcome |
|---|---|---|
| active (Taylor principle) | passive ($\rho>a-1$) | unique; treasury adjusts surpluses (textbook case) |
| passive (prints as budget requires, or $\phi_\pi<1$) | active (fixed surpluses) | unique; Sargent-Wallace fiscal dominance, or the [fiscal theory](#fiscal-theory-of-the-price-level) |
| passive | passive | price level undetermined |
| active | active | inconsistent with the budget constraint: one must give way |

"Active" means ignoring the debt, not hawkish: a treasury at its fiscal limit is active whether it wants to be or not. The game-of-chicken metaphor is the lessons', not Leeper's word.

*Introduced:* [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) · also [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md)

### Valuation equation

The real value of the nominal debt falling due now equals the present value of the real primary surpluses that back it; it holds under every regime, and the dispute is over which term adjusts when news arrives.

$$\frac{B_{t-1}}{P_t}=\mathbb E_t\sum_{j\ge0}\frac{s_{t+j}}{(1+r)^j}\equiv S_t$$

$B_{t-1}$ is nominal debt due at $t$ (interest included, so this year's surplus is undiscounted), $P_t$ the price level, $r$ a constant real rate. With maturity structure $B^{(j)}_{t-1}$ due at $t+j$:

$$\sum_{j\ge0}\frac{B^{(j)}_{t-1}}{(1+r)^j}\,\mathbb E_t\Bigl[\frac{1}{P_{t+j}}\Bigr]=S_t$$

which restricts what the payments will buy when they fall due, not necessarily today's price level.

*Introduced:* [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md)

### Fiscal theory of the price level

With active fiscal and passive money, the price level is nominal debt divided by its real backing, so news that cuts expected surpluses raises prices with no money printed (Sims 1994; Woodford 1995; Cochrane 2001).

$$P_t=\frac{B_{t-1}}{S_t}$$

Woodford: it pins down the price level even under an interest-rate peg. With an active treasury, uniqueness needs $\phi_\pi<1$. Critics: Buiter (2002), a budget constraint must hold at every price level and is not an equilibrium condition; McCallum (2001), a monetarist solution exists too, perhaps the more plausible. Only news that lowers the present value of surpluses moves prices, not deficits as such. Example 1: $S$ falls from 1,300 to 1,225, so $P=1.0612$ and bondholders lose 5.77 percent.

*Introduced:* [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md)

### Surprise inflation and maturity

A price-level surprise cuts every nominal bond's real value, but a lasting rise in inflation compounds over a bond's remaining life, so long debt bears most of it while one-year bills are repriced at rollover.

$$\text{jump } x: \ \times\frac{1}{1+x}$$

$$\pi\to\pi' \text{ on an } n\text{-year zero}: \ \times\Bigl(\frac{1+\pi}{1+\pi'}\Bigr)^n$$

Bad fiscal news can be met by a jump now or by inflation later; the maturity structure decides which (Cochrane 2001). Hall and Sargent: from 1945 to 1974 inflation net of nominal returns took 12.5 of the 54.9-point fall in US debt, 10.3 of it from bonds with five or more years to run; in 1972-81, with short debt, just 1.0 point.

*Introduced:* [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md)

### Financial repression

Holding the real return on government debt below the market rate through directed lending from captive domestic buyers, interest-rate caps, controls on cross-border capital movements and close ties between government and banks: a tax on bondholders and savers collected through regulation (Reinhart and Sbrancia).

It needs no surprise, and works best with a steady dose of inflation. Reinhart and Sbrancia (2015): real rates on government debt negative about half the time in 1945-80 in advanced economies, interest savings about 1 to 5 percent of GDP a year across 12 countries; their 2011 working paper puts savings in the negative-rate years at 3 to 4 percent of GDP in the US and UK.

*Introduced:* [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md)

### Liquidation effect

Debt reduction from negative real rates, before growth does anything (Reinhart and Sbrancia's term).

$$-r_t\,d_t \ \text{ of GDP a year, when } r_t<0$$

A 2 percent cap with 5 percent inflation gives $r=1.02/1.05-1=-2.9\%$, so a debt of 100 percent of GDP sheds 2.9 points a year.

*Introduced:* [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md)

### Transfer problem

Paying foreign creditors takes foreign exchange as well as taxes: with no new lending the payer must raise its trade balance by the transfer, which takes a real depreciation (Keynes 1929). Raising the taxes is the separate **budgetary problem**.

$$\Delta\text{trade balance}=T \quad(\text{share of GDP})$$

The transfer problem follows the creditor's residence, not the currency: a payment to residents, even in dollars, needs no transfer; one to foreigners, even in pesos, does. The currency decides only who bears a depreciation.

*Introduced:* [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md)

### Required real depreciation

The real depreciation that raises the trade balance by the transfer, to first order the transfer divided by the trade response.

$$\text{price taker: } \Delta q\approx\frac{T}{X\eta_X+M\eta_M}$$

$$\text{exports priced at home: } \Delta q\approx\frac{T}{X(\eta_X+\eta_M-1)}$$

$q$ is the price of foreign goods in home goods (a rise is a real depreciation), $X$ and $M$ exports and imports as shares of GDP, $\eta_X$, $\eta_M$ the volume elasticities to $q$, $\kappa$ the trade response (denominator). The second line uses balanced trade, $X=M$: a country selling its own goods loses revenue on every unit it already exports. First-order, so it understates large swings (Example 1: 30 percent linear against 38.4 percent exact).

*Introduced:* [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md)

### Marshall-Lerner condition

From balanced trade, a real depreciation raises the dollar trade balance of a country whose exports are priced at home iff the two volume elasticities sum to more than one.

$$\eta_X+\eta_M>1$$

As the sum falls to 1 the required depreciation $T/(X(\eta_X+\eta_M-1))$ grows without bound. A price taker does not need it.

*Introduced:* [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md)

### Transfer criterion

Ohlin's reply to Keynes: the payment itself shifts spending, so only part of the transfer needs a price change.

$$\Delta q\approx\frac{(1-m-m^*)\,T}{\kappa}$$

$m$ and $m^*$ are the payer's and recipient's marginal propensities to spend on each other's goods; at unchanged prices the transfer raises the payer's trade balance by $(m+m^*)T$. The payer must depreciate iff $m+m^*<1$ (each side spends extra income mostly on its own goods).

*Introduced:* [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md)

### Original sin

The domestic currency cannot be used to borrow abroad (or long term even at home) (Eichengreen and Hausmann 1999), so the depreciation that makes payment possible enlarges the debt.

$$d'=d\,(1+\phi\,\Delta q)$$

$\phi$ is the share of debt $d$ owed in dollars, real GDP held fixed in home goods. Under a peg the real depreciation must come from falling home prices, so all nominal debt behaves as if $\phi=1$ (Example 1 ends at 88 instead of 84). Eichengreen, Hausmann and Panizza (2005, *Other People's Money*): more volatile output and capital flows, lower ratings than debt levels predict.

*Introduced:* [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md)

### Balance sheet loop

Lenders refinance less as the debt ratio rises, so each round of depreciation raises the debt and the transfer again; past a gain of one no finite depreciation works.

$$\Delta q=\frac{T+\theta\phi d\,\Delta q}{\kappa} \implies \Delta q=\frac{T/\kappa}{1-g}$$

$$g=\frac{\theta\phi d}{\kappa}$$

$\theta$ is the points of GDP lenders refinance less per point the ratio rises; $g$ is the loop's gain (not growth). Explosion at dollar share $\phi\ge\phi^*=\kappa/(\theta d)$. Example 2: price taker $g=4/9$, depreciation 18 percent; home-priced exports $g=4/3$, no finite depreciation, $\phi^*=0.375$. Krugman (1999): the firm balance-sheet version, with high leverage, a low propensity to import and large foreign-currency debt relative to exports.

*Introduced:* [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md)

### Ability versus willingness to pay

Ability to pay fails outright only when no relative price can deliver the needed surplus; otherwise some depreciation works and the question is whether the country bears its cost rather than default.

Ability fails when the loop gain $g\ge1$, or when Marshall-Lerner fails and only an import-crushing slump can deliver the surplus. Willingness is modeled by [Eaton-Gersovitz](#eaton-gersovitz) ([6.2](lessons/06-02-reputation-and-eaton-gersovitz.md)) and [Bulow-Rogoff](#bulow-rogoff) ([6.3](lessons/06-03-bulow-rogoff-and-sanctions.md)).

*Introduced:* [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md)

### Eaton-Gersovitz

No court can seize a sovereign, so the only punishment for default is exclusion from future credit; a country borrows to smooth income shocks and repays while future access is worth more than the payment (Eaton and Gersovitz 1981).

6.2's version is an insurance contract: pay $x$ in good years ($y_H=\bar y+\sigma$), receive $x$ in bad years ($y_L=\bar y-\sigma$), probability $\tfrac12$ each; refusing means autarky forever. Reputation here is the lenders' strategy, not learning about types; nothing is learned and no default happens in equilibrium. [6.4](lessons/06-04-the-arellano-model.md) solves the non-contingent bond version, keeps exclusion (with re-entry probability $\theta$) and adds an output cost; in its solved example exclusion alone sustains no debt at all (an impatient country never saves, so losing a market that would lend it nothing costs nothing). In [8.4](lessons/08-04-odious-debt-as-a-rule.md), reputational lending has many equilibria: which refusals get punished is a convention, and a public designation selects the one in which refusing a designated regime's debts costs nothing.

*Introduced:* [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md) · also [6.4](lessons/06-04-the-arellano-model.md), [8.4](lessons/08-04-odious-debt-as-a-rule.md)

### Participation constraint

A sovereign pays in a good year only if the one-time gain from refusing does not exceed the discounted insurance it forfeits.

$$u(y_H)-u(y_H-x)\ \le\ \frac{\beta}{1-\beta}\,\bigl[W(x)-W(0)\bigr]$$

$$W(x)=\tfrac12u(y_H-x)+\tfrac12u(y_L+x)$$

$\beta$ is the country's discount factor, $W(0)$ autarky's yearly expected utility. In a bad year the country is being paid, so it never walks away then. [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md): in its Example 1 (income 1.1 or 0.7 with probabilities 3/4 and 1/4, log utility) full insurance passes this test for $\beta\ge0.843$, yet the Bulow-Rogoff deviation beats the contract at every $\beta$, because the defaulter's real alternative is prepaid insurance (1.0038 a year), not autarky (certainty equivalent 0.9825).

*Introduced:* [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md) · also [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md)

### Critical discount factor

Full insurance is self-enforcing iff the country is patient enough that a stream of insurance outweighs a single grab.

$$\beta\ \ge\ \beta^*=\frac{G}{G+I}$$

$G=u(y_H)-u(\bar y)$ is the one-time grab, $I=u(\bar y)-\mathbb Eu(y)$ the insurance per year. Grim trigger's $(T-c)/(T-p)$ with $T=u(y_H)$, $c=u(\bar y)$, $p=\mathbb Eu(y)$; autarky is the country's minmax. Log utility: income 1.3 or 0.7 gives 0.848; 1.15 or 0.85 gives 0.925.

*Introduced:* [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md)

### Maximum sustainable debt

The largest good-year payment the country will honor; the self-enforcing payments form an interval $[0,\bar x]$, and the ceiling comes from willingness, not ability.

$$\bar x(\beta,\sigma)=\max\{x\le\sigma : \text{participation constraint holds}\}$$

Rises with patience $\beta$, with the income swing $\sigma$ and with risk aversion. Log utility, mean income 1: positive iff $\beta>1-\sigma$. With $u=c-c^2/4$: $\bar x=\min(\sigma,\,2\sigma-2(1-\beta))$. Example 1 at $\beta=0.8$: $\bar x=0.203$. A country with steady income cannot be trusted with anything. Worrall (1990): terms that depend on the record do better (debt held down at first, consumption eventually stops moving with income).

*Introduced:* [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md)

### Excusable default

Sovereign debt read as a contingent claim: a default that matches visibly bad times is excused and costs no reputation, while repudiation is punished (Grossman and Van Huyck 1988).

It is 6.2's insurance contract read as debt, and history-of-debt 2.4's contingent *asientos*.

*Introduced:* [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md)

### Cheat the cheater

Exclusion must be renegotiation-proof, since lenders gain by re-lending to a defaulter; lending survives with no outside enforcement under punishments in which whoever cheats, a rival lender included, is cheated in turn (Kletzer and Wright 2000).

History-of-debt 2.4's Genoese bankers, who could cheat any member breaking a lending moratorium, ran it. In [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md), lenders' lack of commitment strikes at Bulow-Rogoff's (A2), which needs the sellers of prepaid claims to be held to them.

*Introduced:* [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md) · also [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md)

### Bulow-Rogoff

Under the Bulow-Rogoff assumptions no contract whose debt is ever positive is self-enforcing: at its peak debt a defaulter can replicate the contract's insurance with prepaid claims and keep the interest on the peak (Bulow and Rogoff 1989, *AER*).

$$D(h)=P(h)+\frac{\mathbb E[D(h')\mid h]}{1+r}$$

$$\bar D=\max_hD(h)$$

$$c^{\text{dev}}(h)=y(h)-P(h)+\frac{r}{1+r}\,\bar D$$

$h$ is the income history, $P(h)$ the contract's net payment (negative when investors pay), $r>0$ the safe rate. The deviator stops paying at the peak and each year holds a claim $a(h)=\bar D-D(h)\ge0$, costing $\bar D/(1+r)-(D(h)-P(h))$; consumption is higher in every state (PV gain $\bar D$). If debt only approaches a supremum, default where $D(h)>\bar D/(1+r)$. Example 1: a claim of 0.4 in bad years costs 0.0962 and lifts consumption from 1 to 1.0038. Dominance is state by state, so no $\beta$ rescues reputation. In [8.4](lessons/08-04-odious-debt-as-a-rule.md), Jayachandran and Kremer's lending is sustained by seizure of assets abroad; a loan sanction withdraws seizure for one regime's post-designation debts, so the deviation works again for exactly those debts.

*Introduced:* [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md) · also [8.4](lessons/08-04-odious-debt-as-a-rule.md)

### Bulow-Rogoff assumptions

The three conditions under which reputation supports no lending, and the historical repairs that break each.

- **(A1) Default costs only credit**: nothing destroyed or seized, no one at home loses.
- **(A2) Cash in advance still works**: a defaulter can buy fair prepaid state-contingent claims abroad; the sellers (unlike the country) can be made to honor them; old creditors cannot seize them.
- **(A3) The government holds the purse** and alone decides whether to pay.

| Repair | Breaks |
|---|---|
| Trade sanctions, seized cargoes, gunboats | (A1) |
| Attaching the country's assets abroad | (A2) |
| Revenue pledged and collected by creditors' agents | (A3) |
| A parliament of creditors | (A3) as a veto (North-Weingast), or (A1) as creditors in the ruling coalition (Stasavage) |

Removing (A2) returns a defaulter to 6.2's autarky. A longer credit boycott or a different contract form (e.g. GDP-indexed) breaks none; what would bite is a ban on saving abroad.

*Introduced:* [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md)

### Cash-in-advance contract

A state-contingent claim paid for up front; the seller bears no risk from the buyer, who has already paid, so even a defaulter can buy one.

$$\text{price of a claim paying } a(h') = \frac{\mathbb E[a(h')\mid h]}{1+r}$$

(from risk-neutral sellers). The Bulow-Rogoff deviator buys one every year.

*Introduced:* [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md)

### Sanction-supported debt

A sovereign pays interest as long as it is no bigger than the yearly harm a default would do, so the largest debt is that harm capitalized at the interest rate.

$$rD\le\kappa y \iff D\le D_{\max}=\frac{\kappa y}{r}$$

Certain output $y$, perpetual debt $D$, default cuts output by the fraction $\kappa$ a year forever. Example 2: $\kappa=2\%$, $r=4\%$ gives 0.5 of a year's output. For a finite sanction, compare the PV of the interest saved (forever) with the PV of the sanction (while it lasts). With certain income and discounting at $r$, a credit boycott adds nothing. A sanction is deadweight ([collateral](#collateral) with $\delta=0$); pledged revenue of equal size supports the same debt but pays creditors. Rose (2005): after a Paris Club renegotiation, bilateral trade shrinks about 8 percent a year for about fifteen years.

*Introduced:* [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md)

### Constant recontracting

Creditors who can impose sanctions bargain rather than impose them, since a sanction destroys value; a heavily indebted country pays what the threat can extract, not the face value (Bulow and Rogoff 1989, *JPE*).

It fits their observation that outright repudiation is rare and negotiated partial payment common.

*Introduced:* [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md)

### Arellano model

A risk-averse government with non-contingent one-period debt chooses each period whether to repay or default; lenders price every promise by the chance it is kept, so default lands in slumps and credit tightens when it is most needed (Arellano 2008).

$$V^o(b,y)=\max\{V^c(b,y),\,V^d(y)\}$$

$$V^c(b,y)=\max_{b'}\bigl\{u(y-b+q(b',y)\,b')+\beta\,\mathbb E[V^o(b',y')\mid y]\bigr\}$$

$$V^d(y)=u(h(y))+\beta\,\mathbb E[\theta V^o(0,y')+(1-\theta)V^d(y')\mid y]$$

Income $y$ follows a Markov chain $\pi(y'\mid y)$; $b'$ is the face issued, $q(b',y)$ the [bond price schedule](#bond-price-schedule); default erases the debt, excludes the country (re-entry each period with probability $\theta$, debt-free) and caps output at $h(y)=\min(y,\hat y)$. Default iff $V^d>V^c$ (an indifferent government repays); equilibrium is a fixed point in values and prices. Predicts default in slumps, countercyclical spreads and trade balance; calibrated to Argentina it predicts the late-2001 default. Example 2 (11-state chain, $\beta=0.90$, $\gamma=2$, $\theta=0.2$, $\hat y=0.92$): default about once every 71 years, always in a slump.

*Introduced:* [6.4](lessons/06-04-the-arellano-model.md)

### Bond price schedule

A promise sells for the probability it is kept, discounted at the safe rate; the most a country can raise is the peak of price times face.

$$q(b',y)=\frac{1-\delta(b',y)}{1+r^*}$$

$$\delta(b',y)=\sum_{y'}\pi(y'\mid y)\,D(b',y')$$

$D(b,y)=1$ if a government owing $b$ at income $y$ defaults; $r^*$ is the safe rate. It falls with $b'$ (default sets grow with debt) and, with persistent income, is lower at every $b'$ in a slump. $\max_{b'}q(b',y)\,b'$ is Arellano's Laffer curve for borrowing, 1.1's lender revenue ceiling again. 6.4 Example 2: at $b'=0.15$ the price is 0.80 with income 5 percent below normal against 0.97 at 5 percent above; the most it can raise is 0.15 against 0.32. **With rollover risk** ([6.5](lessons/06-05-self-fulfilling-debt-crises.md)), one-year bonds, nothing recovered:

$$q(b)=\frac{1}{1+r^*} \ (\text{safe})$$

$$q(b)=\frac{1-p}{1+r^*} \ (\text{crisis zone})$$

$$q(b)=0 \ (\text{default})$$

$p\in[0,1]$ is the sunspot probability of a run; the middle step's spread prices fear, not fundamentals (5 percent gives a 5.4-point spread at $r^*=3\%$).

*Introduced:* [6.4](lessons/06-04-the-arellano-model.md) · also [6.5](lessons/06-05-self-fulfilling-debt-crises.md)

### Default set

The incomes at which a government owing $b$ defaults; it grows with debt, so each income has a debt threshold.

$$\{y: V^d(y)>V^c(b,y)\}$$

$$\text{repay iff } b\le\bar b(y)$$

Arellano's first proposition: $V^c$ falls in $b$ and $V^d$ does not depend on $b$. With i.i.d. income, no output cost and permanent exclusion, a government that defaults at some income defaults at every lower one: at risk of default it cannot be a net borrower, and a net payment costs more utility when income is low. Example 2: $\bar b=0.19$, 0.32, 0.47 at income 5 percent below normal, normal, 5 percent above.

*Introduced:* [6.4](lessons/06-04-the-arellano-model.md)

### Asymmetric default cost

Arellano's output in default is capped, so default costs nothing below the cap and more the richer the economy (default disrupts the private credit production needs).

$$h(y)=\min(y,\hat y)$$

$$\text{cost}=\max(0,\,y-\hat y)$$

It flattens autarky's value above $\hat y$, pushing default further into slumps where it works as insurance, and widens the range of face values with a positive but finite spread, which the model needs to match about three defaults a century for Argentina. It is not what makes default come in slumps: risk aversion with non-contingent debt already does.

*Introduced:* [6.4](lessons/06-04-the-arellano-model.md)

### Value function iteration

The numerical method for sovereign default: put debt on a grid and income on a finite Markov chain, guess values and a schedule, then alternate between solving the government's problem and repricing bonds.

(i) Given $q$, update $V^c$ by maximizing over the grid, update $V^d$ and $V^o$, record $D$; (ii) reprice every bond from $D$; stop when values and $q$ stop changing. For a fixed $q$ the Bellman step is a contraction (grad-macro 1.2); the joint loop in values and prices has no such guarantee, so converge $q$ too and restart from other guesses. A three-state chain can have no equilibrium default at all (6.4 used 11 Rouwenhorst states and 1,251 grid points).

*Introduced:* [6.4](lessons/06-04-the-arellano-model.md)

### Rollover crisis

Lenders refuse to buy a government's new bonds, so the maturing slice must be paid from this year's budget at extra cost; if honoring then costs more than defaulting, the government defaults, which validates the refusal (Cole and Kehoe 2000).

$$\text{honoring in a run costs } b+\kappa(\lambda b)^2 \ \text{ instead of } b$$

$b$ is debt (share of a year's GDP), $\lambda$ the share falling due each year ($1/N$ for $N$-year bonds in equal slices), $\kappa$ the crash-budget cost, $K$ the cost of defaulting. A run does not change what is owed, only how fast it must be paid. It is 3.1's bank run with a government in place of the bank; a default in the crisis zone reveals the run, not insolvency.

*Introduced:* [6.5](lessons/06-05-self-fulfilling-debt-crises.md)

### Crisis zone

Debts at which the government repays if lenders roll over and defaults if they refuse: two equilibria.

$$\underline b(\lambda)<b\le K$$

$$\underline b(\lambda)=\frac{\sqrt{1+4\kappa\lambda^2K}-1}{2\kappa\lambda^2}$$

$\underline b$ solves $b+\kappa\lambda^2b^2=K$. Safe below $\underline b$, default above $K$. Longer maturity (smaller $\lambda$) raises $\underline b$ toward $K$; what counts is the maturity already outstanding. A higher $K$ moves the zone up and widens it, $d\underline b/dK=1/(1+2\kappa\lambda^2\underline b)<1$ (Cole and Kehoe's price of credibility). Example 1 ($\kappa=2.5$, $K=0.8$): $(0.4,0.8]$ with one-year bonds, $(0.719,0.8]$ with four-year bonds.

*Introduced:* [6.5](lessons/06-05-self-fulfilling-debt-crises.md)

### Self-fulfilling risk premium

The rate is high because default is likely, and default is likely because the rate is high (Calvo 1988, stripped down).

$$q(F)\,F=A$$

$$q(F)=\frac{\Pr(\tilde K\ge F)}{1+r^*}$$

A government must raise $A$ by selling face $F$ due next year and repays iff $F\le\tilde K$ (default cost not yet known). Revenue $q(F)F$ rises then falls, so any $A$ below the peak has two roots. With $\tilde K$ uniform on $[0,1]$ and $r^*=0$: $F(1-F)=A$; at $A=0.21$, $F=0.3$ (price 0.7) or $F=0.7$ (price 0.3). It needs lenders to set the price first: a government choosing $F$ against the schedule (6.4's timing) picks the low root.

*Introduced:* [6.5](lessons/06-05-self-fulfilling-debt-crises.md)

### Haircut measures

Three ways to measure what creditors lose in a debt exchange, differing only in the benchmark: the old face, or the old payments valued at the same yield.

$$H^N=1-\frac{F_n}{F_o}$$

$$H^{SZ}=1-\frac{PV_n(y^e)}{PV_o(y^e)}$$

$$H^M=1-\frac{PV_n(y^e)}{F_o}$$

$$PV(y)=cF\,a_n(y)+\frac{F}{(1+y)^n}$$

$$a_n(y)=\frac{1-(1+y)^{-n}}{y}$$

Old bond face $F_o$, new $F_n$; $c$ the coupon rate, $n$ years to run, $y^e$ the [exit yield](#exit-yield). Nominal, Sturzenegger-Zettelmeyer (2008; their averages ran from 13 percent, Uruguay 2003, to 73 percent, Argentina 2005) and market. Market practice uses face because default accelerates the bonds. $H^{SZ}<H^M$ when the old coupon is below the exit yield, the gap growing with old maturity; they coincide when $y^e$ equals the old coupon. Example 1 (100/7%/4y to 80/4.5%/12y at 11 percent): 20, 47.2 and 53.8 percent. Cruces and Trebesch (2013): larger haircuts go with higher later spreads and longer exclusion.

*Introduced:* [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md)

### Exit yield

The market yield on the new bonds just after an exchange.

$$y^e$$

Sturzenegger and Zettelmeyer discount both old and new payments at it, so $H^{SZ}$ measures what a participant gives up relative to a holdout still paid on the old terms (the temptation to hold out, [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md)), not the loss on the day, which the pre-exchange price already reflected. A lower discount rate makes a maturity extension look like less relief (Example 1: 28.6 percent at 5 percent against 47.2 at 11).

*Introduced:* [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md)

### Debt Laffer curve

Expected repayment rises then falls with face value when debt depresses the effort that raises capacity to pay; above the peak (the wrong side) a write-down raises both creditors' and the debtor's values (Krugman 1988; Sachs 1989).

$$V(D)=\mathbb E[\min(D,Y)]=Y_L+p(D)\,(D-Y_L)$$

$$p(D)=k\,(Y_H-D)$$

$$V'(D)=p(D)-k\,(D-Y_L)$$

$$D^*=\frac{Y_L+Y_H}{2}$$

Capacity $Y=Y_H$ with probability $p$ (chosen at effort cost $p^2/(2k)$), else $Y_L$; face $D$; price per unit $q=V/D$. $V'$ is the direct term minus the overhang term. Total value $U+V$ falls at rate $k(D-Y_L)$. With capacity fixed, $V'=\Pr(Y>D)\ge0$: no wrong side without an incentive effect or value-destroying default. Example 2 ($Y_L=30$, $Y_H=150$, $k=1/150$): $V=48$ at $D=120$, 54 at $D^*=90$.

*Introduced:* [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md)

### Marginal and average value of debt

Retiring a unit of face saves the debtor only in states where that unit would be paid in full (the marginal value), while the market price is the average value, which also counts partial recovery in default and so exceeds it (Bulow and Rogoff 1988).

$$U'(D)=-p(D) \ (\text{envelope, with effort})$$

$$V'(D)=\Pr(Y>D) \ (\text{fixed capacity})$$

$$q=\frac{V(D)}{D}=p+(1-p)\,\frac{Y_L}{D}$$

$U(D)$ is the debtor's payoff (what it keeps minus effort cost).

*Introduced:* [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md)

### Buyback boondoggle

A buyback must pay the post-buyback price, so the debtor pays the average value for units worth their marginal value to it: it loses, and creditors take any efficiency gain plus its loss (Bulow and Rogoff 1988).

$$\frac{C}{X}=q(D-X)=\frac{V(D-X)}{D-X}$$

$$\text{saving}=\int_{D-X}^{D}p(x)\,dx$$

$X$ is the face retired, $C$ cash creditors could not otherwise reach. Every unit, sold or held, gains the same. Example 2: write-down 120 to 90 gives creditors $+6$, country $+9$; a buyback of the same 30 at 0.60 gives creditors $+24$, country $-9$. Bolivia 1988: donors' 34 million retired 308 of 670 million at about 11 cents; market value fell only from 40.2 to 39.8 million. Reverses in the "corporate" case, where default would hand creditors the cash.

*Introduced:* [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md)

### Participation threshold

The smallest share of acceptances that frees enough capacity to pay the holdouts in full.

$$\theta v+(1-\theta)h\le C \iff \theta\ge\hat\theta=\frac{h-C}{h-v} \quad (h>C)$$

$C$ is capacity (present value payable to all bondholders), $v$ the offer per bond, $h$ what a holdout collects, $\theta$ the accepting share. Rises with $v$ (a sweeter offer needs more takers) and with $h$, falls with $C$; senior claims $S$ cut capacity to $C-S$ and raise it. Example 1 ($C=46$, $v=40$, $h=100$): 0.9; at $v=44$, 27/28. Distinct from a minimum participation condition written into the offer ($\theta_{\min}\ge\hat\theta$, void below it), which makes accepting costless if too few join and removes the all-hold-out equilibrium once $h<v$.

*Introduced:* [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md)

### Holdout premium

What a holdout collects over a participant when the deal goes through.

$$h-v$$

Set by law and courts ($h=100$ if paid in full, more with accrued interest in a judgment; the *pari passu* rulings raised it). When $h>C$ no affordable offer removes it, so sweeteners cannot end the free ride; only lowering $h$ ([exit consents](#exit-consents)) or binding the minority ([collective action clause](#collective-action-clause)) does.

*Introduced:* [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md)

### Exit consents

Accepting creditors vote, as they exit, to strip the old bonds' non-payment terms (listing, cross-default, waiver of immunity), usually by simple majority, cutting what holdouts can collect (Buchheit and Gulati 2000).

With $h$ the value of a stripped old bond and $v$ the value of the offer, $h<v$ means accepting beats holding out whenever the deal succeeds.

Used by Ecuador (2000) and Uruguay (2003). They can coerce: if the stripped bond is worth less than the offer, creditors accept even an offer below the default value $d$, which a CAC vote cannot make them do. A 50 percent stake in a series blocks them.

*Introduced:* [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md)

### Collective action clause

If holders of a share $\kappa$ vote yes, the new payment terms bind every holder in the voting pool; a vote matters only when pivotal, where it compares the offer with the default value, so the clause passes exactly the offers with $v>d$.

| Voting | Needs (IMF staff 2014; ICMA model clauses 2014) |
|---|---|
| Series-by-series | typically 75 percent of each series |
| Two-limb | $66\tfrac23$ percent of the aggregate AND more than 50 percent of each series |
| Single-limb | 75 percent of the aggregate, only if every series gets the same terms ("uniformly applicable") |

Euro-area bonds since January 2013: two-limb with $66\tfrac23$ per series and 75 aggregate. Where in $(d,C]$ the offer lands is left to bargaining. A clause binds only its voting pool: it never reaches the IMF, a secured lender or a bilateral official creditor. Ex ante, Eichengreen and Mody (2000): lower spreads for creditworthy issuers, if anything higher for less creditworthy ones.

*Introduced:* [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md)

### Blocking stake

A veto needs face value just over the share $1-\kappa$ of its voting pool (exactly half against a "more than 50 percent" limb), costing its market value.

$$\text{cost}=q\,b$$

$$b \gtrsim (1-\kappa)\times\text{pool}$$

$q$ is the market price per unit of face (not a bond price schedule), $b$ the face bought. The smallest series sets the price under series-by-series voting, the whole stock under a single limb. A blocked series must be paid in full, litigated with or left out, and the other series pay. Example 2 (series 16, 9, 5, 2 billion at 30 cents): about 150 million series-by-series, 300 million two-limb, 2.4 billion single-limb; paying the blocked 2 in full cuts the others from 37.5 to 33.3 cents. Greece 2012: holdouts blocked about half the foreign-law series.

*Introduced:* [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md)

### Sovereign seniority

The de facto order of sovereign claims: the IMF and multilaterals senior, then private bonds and bank loans, with official bilateral debt junior or at least not senior; loans secured on escrowed revenue are paid first by contract (Schlegl, Trebesch and Wright 2019).

$$\text{bond recovery } \frac{C-S}{B} \ \text{ vs } \ \frac{C}{S+B}$$

$$\text{transfer to seniors}=S\Bigl(1-\frac{C}{S+B}\Bigr)$$

Seniors $S$ paid first from capacity $C$; bonds of face $B$. The juniors lose exactly what the seniors would have lost under equal treatment, and the capacity left raises $\hat\theta$. Senior money that repays $L$ of maturing bonds at par cuts the rest's recovery to $(C-S-L)/(B-L)$, lower whenever $C-S<B$. Example 2: 37.5 cents instead of 50, a 4-billion transfer.

*Introduced:* [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md)

### Creditors bargain

The collective bankruptcy proceeding as the deal creditors would strike before knowing their places in line, the answer to a common-pool problem (Jackson 1986, *The Logic and Limits of Bankruptcy Law*).

When $d\le L<G<nd$, grabbing strictly dominates waiting: each creditor expects $L/n$, and $G-L$ is lost.

$n$ creditors owed $d$ each, going-concern value $G$, piecemeal value $L$; the first grab breaks the firm up and grabbers are paid in random order. A prisoner's dilemma, unlike Diamond-Dybvig's coordination game, so the law must remove the grab. Example 1 (four owed 30, $G=96$, $L=60$): 15 each against 24; ex ante with failure probability 0.1, the stay lowers the zero-profit rate $p(1-\lambda)/(1-p)$ from 5.6 to 2.2 percent and the borrower saves $p(G-L)=3.6$. The moral reading is philosophy-of-debt 5.3's.

*Introduced:* [7.3](lessons/07-03-designing-bankruptcy.md)

### Automatic stay

Filing a bankruptcy petition halts creditors' suits, seizures, lien enforcement and collection against the debtor (11 U.S.C. 362(a)), removing the grab from the creditors' game.

It freezes claims and does not cancel them: cancelling is the discharge ([8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md)).

*Introduced:* [7.3](lessons/07-03-designing-bankruptcy.md)

### Absolute priority

Pay each class in full, in order of rank, until the money runs out.

$$x_k(V)=\min\{D_k,\ \max(V-K_k,0)\}$$

$$K_k=D_1+\dots+D_{k-1}$$

Classes $k=1,\dots,m$ (1 most senior) with faces $D_k$; shareholders keep $\max(V-K_{m+1},0)$. Senior payoff concave, equity convex (a call), middle classes flat, rising, flat. In a Chapter 11 cramdown, fair and equitable to a dissenting unsecured class means it is paid in full or no junior class receives anything (11 U.S.C. 1129(b)(2)(B)). In practice: Eberhart, Moore and Roenfeldt (1990), shareholders received on average 7.6 percent of the total beyond priority in 30 cases, and share prices anticipated it; Weiss (1990), priority violated in 29 of 37 cases, secured claims generally honored. Cause: juniors' power to delay and the cost of a cramdown valuation.

*Introduced:* [7.3](lessons/07-03-designing-bankruptcy.md)

### Class voting and cramdown

Chapter 7: a trustee sells and pays by priority. Chapter 11: the firm keeps operating, managers propose a plan first, and creditors vote by class; each class votes its slice, not the pie.

A class accepts if and only if claims holding at least $\tfrac23$ of the amount, and more than $\tfrac12$ of the number of claims, among those voting, vote yes.

11 U.S.C. 1126(c); a class that receives nothing is deemed to reject (1126(g)). Cramdown over a dissenting class needs a plan that does not discriminate unfairly and is fair and equitable (1129(b)); best-interests test: every dissenting creditor gets at least its Chapter 7 value (1129(a)(7)). A holder of more than a third of a class's amount blocks it alone. A class a sale pays in full prefers selling whenever continuing risks leaving it short; a class a sale leaves with nothing prefers continuing whenever it has any chance. Case: bank 40, bonds 40, sale 48 against continuation 120 or 10 at even odds; the bank gets 40 against 25 and votes to sell although continuing adds 17.

*Introduced:* [7.3](lessons/07-03-designing-bankruptcy.md)

### Bebchuk options

Make the reorganized firm all equity, give the most senior class all the shares, and give every other class an option to buy all the shares for the face value ranked ahead of it; the division then follows priority with no court valuation (Bebchuk 1988).

Class $k$ exercises if and only if $V>K_k$, where $K_k$ is the face value ranked ahead of it; each class then receives $x_k(V)$, its absolute-priority share of $V$.

Acting on the true $V$, the most junior class with $K_k<V$ exercises. Whatever others believe, a class that exercises iff $V>K_k$ gets at least $x_k(V)$: a misjudgment costs only the class that makes it (the value goes to classes above). Options should be tradable for cash-constrained holders. Example 2 (bank 40, bonds 40, $V=65$): bonds exercise; allocation 40, 25, 0.

*Introduced:* [7.3](lessons/07-03-designing-bankruptcy.md)

### Aghion-Hart-Moore procedure

Cancel the debts, invite cash and non-cash bids for the all-equity firm, allocate its shares by Bebchuk's options once the bids are known, then let the new shareholders vote on the bids: decide by value, divide by priority (Aghion, Hart and Moore 1992).

Bids take about three months; the options are exercisable, and tradable, for about a month. Homogenized claims make every voter's payoff proportional to $V$, so the vote picks the highest-value bid. The authors call it a variant of Chapter 7 in which non-cash bids are allowed. A sovereign lacks every piece: nothing to sell, no bottom class, no court to impose a stay (the IMF's SDRM was shelved in 2003; CACs supply only the vote).

*Introduced:* [7.3](lessons/07-03-designing-bankruptcy.md)

### Fresh start

A discharge law cancels a share of the debt in the verified bad state; competitive lenders price it, so a fairly priced discharge is consumption insurance and the rate increase is its premium.

$$D(\theta)=\frac{b}{1-p\theta}$$

$b$ is the amount borrowed, $p$ the bad-state probability, $\theta\in[0,1]$ the share discharged (asset exemptions, the income share a repayment plan takes, what is dischargeable); zero safe rate. Expected repayment stays $b$, and expected utility rises with $\theta$ while $c_L<c_H$ (8.1 Result 1). Evidence: Chapter 13 protection raised annual earnings by 5,562 dollars and cut five-year mortality by 1.2 and foreclosure by 19.1 percentage points (Dobbie and Song 2015, judge-assignment IV); generous state exemptions cut credit to low-asset households and raised it for high-asset ones (Gropp, Scholz and White 1997); the fresh start trades insurance against dearer life-cycle borrowing and is more desirable with persistent earnings shocks (Livshits, MacGee and Tertilt 2007).

*Introduced:* [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md)

### Care constraint

Moral hazard as an incentive effect only: the borrower takes care, which keeps bad years rare, iff the bad year hurts enough to repay its cost; a generous discharge narrows the gap.

$$(p_1-p_0)\,[u(c_H)-u(c_L)]\ \ge\ \psi$$

$$\text{log utility: } c_H\ge k\,c_L, \quad k=e^{\psi/(p_1-p_0)}$$

$$\bar\theta=\frac{(y_H-ky_L)+(k-1)\,b}{p_0\,(y_H-ky_L)+k\,b}$$

$\psi$ is the utility cost of care, $p_0$ the bad-state probability with care, $p_1>p_0$ without; incomes $y_H$, $y_L$; $c_H=y_H-D$, $c_L=y_L-(1-\theta)D$. Past $\bar\theta$ care stops, lenders price $p_1$, and the rate jumps; the best rule is $\bar\theta$ (8.1 Result 2). Example 1: $\bar\theta=16/19$, rate 9.2 percent, against 33.8 percent just past it; certainty equivalent 0.595 against 0.569 with no discharge.

*Introduced:* [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md)

### Time inconsistency of relief

The best rule stops at $\bar\theta$ only to keep care; a government that can revise the law after care is sunk re-solves without the care constraint and raises relief as far as insurance allows, so households drop care and lenders price it (Kydland and Prescott 1977 applied to relief).

8.1 Example 1: certainty equivalent 0.549 under the revisable law (rate 42.9 percent) against 0.595 under the rule (9.2 percent) and 0.569 with no discharge; the lack of commitment costs 7.8 percent of consumption. Same shape as the inflation bias (grad-macro 6.2) and the capital levy (public-economics 6.2). An ex post Pareto improvement is not an ex ante one. Commitment needs a rule costly to revise: a statute, relief fixed in the contract ([8.3](lessons/08-03-relief-written-into-the-contract.md)), a release on a known date ([8.2](lessons/08-02-the-scheduled-release.md)). In [8.4](lessons/08-04-odious-debt-as-a-rule.md) an ex post ruling body is tempted to void legitimate debt once loans are made, and lenders price the temptation; ruling before lending removes it, because a zero-profit lender gains nothing from any designation.

*Introduced:* [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md) · also [8.4](lessons/08-04-odious-debt-as-a-rule.md)

### Strategic default

Default by a borrower who could pay; with an unverified discharge, a good-state household claims it too, which caps how generous the discharge can be (1.1's truth-telling constraint).

The cap sits where a good-state household is indifferent between paying and filing, so a filing cost raises it (8.1 P3 computes one). A means test is the costly verification that holds it back; means testing Chapter 7 yields large welfare gains in Chatterjee, Corbae, Nakajima and Ríos-Rull (2007). Evidence: after a settlement under which Countrywide offered modifications to seriously delinquent borrowers, its monthly delinquency rate rose against comparable loans by more than 0.54 percentage points, about a tenth, most among borrowers least likely to default otherwise (Mayer, Morrison, Piskorski and Gupta 2014).

*Introduced:* [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md)

### Scheduled release

A release that cancels every claim outstanding on a date known in advance, so a claim is worth only what falls due before it and credit dries up as the date nears.

$$L=x\,a_{\min(n,\tau)}(r)$$

$$\bar L(\tau)=y\,a_{\min(n,\tau)}(r)$$

$\tau$ counts the collectible year-ends left, $L$ a loan repaid by $n$ level installments $x$, $r$ the lender's cost of funds, $y$ the most a borrower can pay a year. $\bar L=y/(1+r)$ one year out and zero in the release year (the credit freeze Deuteronomy 15:9 foresees). A competitive lender still earns $r$: what shuts the borrower out is her capacity $y$, not the rate. Quoted on the standard schedule such a loan shows a high rate (Example 1: 13.9 percent at $\tau=6$ while the lender earns 4). The release protects someone only when some borrowers cannot pay; the protection lives in the [absorbing debt trap](#absorbing-debt-trap).

*Introduced:* [8.2](lessons/08-02-the-scheduled-release.md)

### Annuity factor

The value today of 1 a year for $k$ years; loans and land under a release are both priced with it.

$$a_k(r)=\sum_{t=1}^{k}(1+r)^{-t}=\frac{1-(1+r)^{-k}}{r}$$

$a_k(0)=k$, and $a_k-a_{k-1}=(1+r)^{-k}$, so each year closer to a release removes the most distant payment. [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) writes the same factor $a_n(y)$ at a bond's yield.

*Introduced:* [8.2](lessons/08-02-the-scheduled-release.md) · also [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md)

### Jubilee land price

A field that returns to the family at the Jubilee sells as a lease on the harvests left: the freehold value minus the reversion, which the seller keeps.

$$P(\tau)=Y\,a_\tau(r)=\frac{Y}{r}\bigl[1-(1+r)^{-\tau}\bigr]$$

$Y$ is the yearly yield. As $r\to0$ it becomes $\tau Y$, theology-of-debt 1.3's count. Fair redemption after $s$ harvests is $Y\,a_{\tau-s}(r)$. At 4 percent, 40 harvests are worth 19.8 harvests today (79 percent of freehold), 5 harvests 4.45: the release bites where it is near.

*Introduced:* [8.2](lessons/08-02-the-scheduled-release.md)

### Absorbing debt trap

Each year a holding family loses its land with probability $p$ and a landless family never regains it, so landlessness is absorbing; a periodic release turns it into a passing state.

$$\ell_t=1-(1-p)^t\to1$$

$$\bar\ell(J)=1-\frac{1-(1-p)^J}{Jp}$$

$\bar\ell(J)$ is the cycle-average landless share with a release every $J$ years; the share just before the release is $1-(1-p)^J$, and no spell lasts longer than $J$. With a redemption probability $q$ and no release, the stationary share is $p/(p+q)$. Example 2 ($p=0.03$): 8.6 percent every 7 years, 47.9 percent every 50, toward 100 with none (Isaiah 5:8's spiral). The premium is paid in liquidity: saleable value 14.3 and 57.0 percent of freehold.

*Introduced:* [8.2](lessons/08-02-the-scheduled-release.md)

### Prosbul

Hillel's device (Mishnah Shevi'it 10:3-4): a loan registered with a court survives the seventh-year release, so for it $\tau=\infty$.

$$\tau=\infty \implies \bar L=y\,a_n(r) \text{ at every date}$$

If every lender may use one, every loan the release would cut is registered: credit returns to the no-release schedule and the protection is gone. A waivable release is waived exactly where it binds; allowing land to be sold for ever likewise returns the chain to no release.

*Introduced:* [8.2](lessons/08-02-the-scheduled-release.md)

### GDP-linked bond

A sovereign bond whose payments move with GDP: relief in the states where a restructuring would otherwise happen, at the price of trusting the borrower's own statistics office.

$$(1+r)\,\frac{1+g_{t+1}}{1+\bar g} \ \text{ gross return} \implies d_{t+1}=\frac{1+r}{1+\bar g}\,d_t-s$$

Shiller (1993, *Macro Markets*): coupon and principal indexed to the level of nominal GDP; Borensztein and Mauro (2004): coupon indexed to growth, principal fixed. Issued versions (Argentina 2005, Greece 2012, Ukraine 2015) were upside-only warrants attached to haircuts; Sri Lanka's 2024 macro-linked bonds adjust principal both ways. Costs beyond verification: a novelty premium (about 600 bp decay on Argentina's warrants, Costa, Chamon and Ricci 2008) and a GDP risk premium (35-150 bp, Benford, Best and Joy 2016). It cures inability to pay, not unwillingness.

*Introduced:* [8.3](lessons/08-03-relief-written-into-the-contract.md)

### Shared responsibility mortgage

Mian and Sufi's mortgage (*House of Debt*, 2014): balance and payments fall in proportion to a local house price index when it drops below its level at purchase and never rise above the original schedule; the lender takes a share $\theta$ of any capital gain at sale.

$$\theta\,\mathbb E[\text{gain}]=\mathbb E[\text{relief}]-\mathbb E[\text{default losses the SRM avoids}]$$

The share is 5 to 10 percent in their 2016 restatement. It keeps the owner's equity share at its purchase level in a local bust, so she is never underwater. 8.3 Example 2 (house 300, loan 240, fall of 30 percent with probability 0.1 or rise of 25): the owner loses 18 and the lender 72 in the bust, and the lender breaks even at $\theta=10.7$ percent. Moving the loss to a lender who would not cut spending shrinks the demand collapse of 4.1 and 4.3.

*Introduced:* [8.3](lessons/08-03-relief-written-into-the-contract.md)

### Basis risk

The bad times an outside index misses: an index the borrower cannot move resists manipulation but tracks her own capacity imperfectly.

A usable index must (i) track capacity to pay, (ii) be verifiable by a court, (iii) lie beyond the borrower's control; the three pull apart. The SRM gives up a little of (i) for (ii) and (iii); a sovereign GDP index meets (i) roughly and (ii) formally but fails (iii) (Argentina's rebasing dispute). Relief conditioned on actions (HIPC triggers) is cheap to verify and insures nothing after the decision point.

*Introduced:* [8.3](lessons/08-03-relief-written-into-the-contract.md)

### Loan sanctions

An institution designates a regime before lending; creditor countries bar seizing assets to collect its post-designation debts and markets treat a successor's refusal of them as no default, so no lender lends (Jayachandran and Kremer 2006).

Self-enforcing: the successor refuses at no cost whatever other lenders do, so complying is every lender's dominant strategy (Bulow-Rogoff switched back on, on purpose, for those debts). A trade sanction is not: a supplier paid on delivery gains by breaking ranks (sole seller at 100 with cost 60: $+40$), and two defectors restore the pre-sanction price. Donors can back it by withholding aid from a successor that pays. A ruler likely to survive (probability $s$) can still borrow at $(1+r_f)/s$, and his successor repays nothing if he falls.

*Introduced:* [8.4](lessons/08-04-odious-debt-as-a-rule.md)

### Ex ante versus ex post rulings

After lending, voiding a debt moves the repayment from lenders to the population dollar for dollar, so a biased body is tempted and lenders price it; before lending, a competitive lender earns zero either way, so a false designation cannot help lenders and costs the population the gain from borrowing.

$$1+r^{\text{post}}=\frac{1+r_f}{1-\pi}$$

$\pi$ is the share of loans voided after the fact, unidentifiable when made; $\lambda_P$, $\lambda_B$ are the ruling body's weights on a dollar to the population and to lenders ($\lambda_P>\lambda_B$: tempted to void legitimate debts; $\lambda_B>\lambda_P$: to uphold odious ones). Example 1 ($r_f=4\%$, $\pi=0.05$): 9.47 percent; honored borrowers pay for voided ones, and projects returning between $r_f$ and $r^{\text{post}}$ go unfunded. Ruling first turns who pays into whether a loan is made.

*Introduced:* [8.4](lessons/08-04-odious-debt-as-a-rule.md)

### Designation errors

A false designation (probability $\varepsilon$) cuts a legitimate government off from credit, the only error that leaves a population worse off than the status quo; a miss (probability $\mu$) lets an odious regime borrow at $r_f$ while its successor repays, which is the status quo.

A supermajority trades false designations for misses when judges' biases differ (8.4 P3 works a three-judge panel under majority and unanimity). It cannot remove a bias for or against a particular government that all judges share. A designation verifies a regime, so 1.1's problem returns: checking is costly and the checker must be believed; one public check replaces an unending chain of private ones.

*Introduced:* [8.4](lessons/08-04-odious-debt-as-a-rule.md)

## Formulas and rules

The formulas each job needs, in the lessons' notation, with the lesson in parentheses. Symbols are in [Notation](#notation) and each model's story is in its Definitions entry. Worked numbers are the lessons' own illustrative ones.

### Contracts and rationing

Costly verification, hidden types and hidden action: what the contract looks like and when credit is refused.

| Quantity | Formula |
|---|---|
| Standard debt contract (1.1) | pay $\min(y,D)$; verify iff $y<D$; $D$ the smallest face with $L(D)=I$ |
| Lender's expected revenue (1.1) | $L(D)=\int_0^D (y-c)\,f(y)\,dy+D\,[1-F(D)]$ |
| Its slope (1.1) | $L'(D)=1-F(D)-c\,f(D)$ |
| Revenue ceiling, rising hazard $f/(1-F)$ (1.1) | peak where $1-F(D^*)=c\,f(D^*)$; $\bar L=L(D^*)$ |
| Uniform on $[a,b]$, $w=b-a$, $c\le w$ (1.1) | $D^*=b-c$, $\bar L=\mathbb E[y]-c+c^2/(2w)$ |
| Borrower's gain from debt over a profit share (1.1) | $c\,[1-F(D)]$ |
| What a point of interest costs the borrower (1.2) | $\frac{\partial}{\partial R}\,\mathbb E[\max(y-RL,0)]=-L\Pr(y\ge RL)$ |
| Switch rate, projects paying $Y_i$ w.p. $p_i$, $p_A>p_B$ (1.2) | $\hat RL=\dfrac{p_AY_A-p_BY_B}{p_A-p_B}$ |
| Rationing equilibrium (1.2) | $R^*=\arg\max_R\bar\rho(R)$ and $D(R^*)>S\bigl(\bar\rho(R^*)\bigr)$ |
| Diligence is incentive compatible (1.3) | $R_b\ge B/\Delta p$ |
| Pledgeable income (1.3) | $\mathcal P=p_H\,(R-B/\Delta p)$ |
| Lenders break even (1.3) | $p_H(R-R_b)\ge I-A$ |
| Funded iff (1.3) | $A\ge\bar A=I-\mathcal P$ |
| Debt capacity, inalienable human capital (1.3) | $L$, the assets' liquidation value |
| Collateral indifference slope (1.3) | $dR/dC=-(1-p_i)/p_i$ |
| A bank beats direct monitoring iff (1.3) | $K+\phi_N<mK$ |

Worked: in 1.2, a project paying 160 with probability 0.9 against one paying 210 with probability 0.4 switch at $RL=120$. In 1.3's illustration $\phi_N$ is 0.10 for one loan, 0.021 for ten and 0.0003 for a hundred, against direct monitoring at 0.40.

*From* [1.1](lessons/01-01-costly-state-verification.md), [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md), [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md)

### Loan pricing

What a competitive or monopoly lender charges, and what a ceiling does.

| Quantity | Formula |
|---|---|
| Zero-profit condition (1.4) | $(1-p)(1+r)L+p\lambda L=(1+r_f)L+k$ |
| Zero-profit rate (1.4) | $r^{zp}=\dfrac{r_f+p(1-\lambda)+k/L}{1-p}$ |
| No recovery, no handling (1.4) | $1+r^{zp}=(1+r_f)/(1-p)$ |
| Additive shortcut (1.4) | $r_f+p(1-\lambda)+k/L=(1-p)\,r^{zp}$, short by the fraction $p$ |
| Handling layer on a $T$-year loan (1.4) | $k/(LT)$ a year, before dividing by $1-p$ |
| Lerner rule (1.4) | $\dfrac{r^m-r^{zp}}{r^m}=\dfrac{1}{\lvert\varepsilon\rvert}$, $\varepsilon=\dfrac{r\,N'(r)}{N(r)}$ |
| Linear demand $N=b(\hat r-r)$ (1.4) | $r^m=(\hat r+r^{zp})/2$: half the competitive number of loans |
| Served under a ceiling $\bar r$ (1.4) | $p\le p^*(L)=\dfrac{\bar r-r_f-k/L}{1+\bar r-\lambda}$ |
| Smallest loan a ceiling allows (1.4) | $k/(\bar r-r_f)$; none at all when $\bar r=0$ |
| Ceiling on a monopolist, $r^{zp}\le\bar r<r^m$ (1.4) | serves all $N(\bar r)>N(r^m)$; lending peaks at $\bar r=r^{zp}$ |

The rate in layers: funds, expected loss, handling, markup.

$$r=r_f+\frac{p\,(1+r_f-\lambda)}{1-p}+\frac{k/L}{1-p}+\mu$$

The costly-verification version (3.3), with $B=I-N$ borrowed and $(x)^+=\max(x,0)$. The first layer pays for promises that bad years break, which the borrower does not pay on average; only the second is her cost.

$$\frac{D}{B}-R_f=\frac{\mathbb E\bigl[(D-y)^+\bigr]}{B}+\frac{c\,F(D)}{B}$$

The same break-even logic recurs through the course:

| Lesson | Setting | Break-even |
|---|---|---|
| 4.2 | lenders believe default probability $\pi$; nothing recovered | $1+i=(1+r_f)/(1-\pi)$ |
| 6.4 | default probability $\delta(b',y)$ set by the borrower's own later choices | $q=(1-\delta)/(1+r^*)$ |
| 6.5 | probability $p$ of a run, inside the crisis zone | $q=(1-p)/(1+r^*)$ |
| 7.3 | recovery $\lambda$, funds free | $r=p(1-\lambda)/(1-p)$ |
| 8.1 | share $\theta$ discharged in the bad year, funds free | $D(\theta)=b/(1-p\theta)$ |
| 8.2 | release after $\tau$ collectible year-ends | $L=x\,a_{\min(n,\tau)}(r)$ |
| 8.4 | share $\pi$ of loans voided after the fact | $1+r^{\text{post}}=(1+r_f)/(1-\pi)$ |
| 8.4 | designated ruler survives with probability $s$ | $1+r=(1+r_f)/s$ |

Worked (1.4 Example 1, funds at 3 percent): loan A ($p=1.5\%$, $\lambda=0.7$, $k/L=0.5\%$) breaks even at 4.01 percent and loan B ($p=12\%$, $\lambda=0.1$, $k/L=7.5\%$) at 24.20 percent; the additive shortcut says 3.95 and 21.30. An 18 percent cap serves B's size and recovery only if $p\le6.9\%$.

*From* [1.4](lessons/01-04-the-price-of-a-loan.md), [3.3](lessons/03-03-the-financial-accelerator.md), [4.2](lessons/04-02-minsky-informally-and-formally.md), [6.4](lessons/06-04-the-arellano-model.md), [6.5](lessons/06-05-self-fulfilling-debt-crises.md), [7.3](lessons/07-03-designing-bankruptcy.md), [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md), [8.2](lessons/08-02-the-scheduled-release.md), [8.4](lessons/08-04-odious-debt-as-a-rule.md)

### Capital structure

Modigliani-Miller and the three ways it breaks: taxes and distress, private information, agency.

| Quantity | Formula |
|---|---|
| MM Proposition I (2.1) | $V_L=V_U$ |
| MM Proposition II (2.1) | $r_E=r_A+(r_A-r_D)\,D/E$ |
| WACC (2.1) | $\frac{E}{V}r_E+\frac{D}{V}r_D=r_A$ at every leverage |
| Betas (2.1) | $\beta_E=\beta_A+(\beta_A-\beta_D)\,D/E$ |
| Unlevered firm, income $X$ a year forever (2.2) | $V_U=(1-T_c)X/r_U$ |
| Interest tax shield (2.2) | $V_L=V_U+T_cD$ for permanent riskless debt and taxable profit |
| Miller's net advantage (2.2) | $T^*=1-\dfrac{(1-T_c)(1-T_E)}{1-T_D}$, and $V_L=V_U+T^*D$ |
| Trade-off (2.2) | $V_L(D)=V_U+TD-C(D)$, maximized where $T=C'(D^*)$ |
| Fraction new shareholders need (2.2) | $s=I/(\bar a+B)$ |
| Myers-Majluf: issue iff (2.2) | $B-I\ge s(a+B)-I$ |
| Claims on assets $V$ at maturity (2.3) | equity $\max(V-F,0)$; debt $F-\max(F-V,0)$ |
| Owner-manager's perks (2.3) | $b'(x)=\alpha$ |
| Overhang: shareholders build iff (2.4) | $X-I\ge\Delta D(F)$ |
| Overhang tax rate (2.4) | $\tau(F)=\Delta D(F)/X$, equal to $\Pr(\tilde A<F)$ if the project cannot cure a default |
| The $q$ wedge (2.4) | $q_E=(1-\tau)\,q_P$, with $q_P=X/I$ |
| Myers's growth option (2.4) | exercised iff $V(s)\ge I+F$; worth exercising iff $V(s)\ge I$ |
| Write-down to $F'$ (2.4) | creditors need $D(F',X)\ge D(F,0)$; shareholders then build iff $\Delta E(F')\ge0$ |
| Debt-equity swap (2.4) | both classes gain for $D(F,0)/V\le s\le1-E(F,0)/V$, where $V=\mathbb E[\tilde A]+X-I$ |

Merton's model (2.3), with $N$ the standard normal distribution function and $r$ continuously compounded:

$$E_0=V_0\,N(d_1)-Fe^{-rT}N(d_2)$$

$$d_1=\frac{\ln(V_0/F)+(r+\tfrac12\sigma^2)T}{\sigma\sqrt T}$$

$$d_2=d_1-\sigma\sqrt T$$

Debt is $D_0=V_0-E_0=Fe^{-yT}$, with credit spread $y-r$. Equity gains from risk, $\partial E_0/\partial\sigma=V_0\,\varphi(d_1)\sqrt T>0$, and bears only $\partial E_0/\partial V_0=N(d_1)<1$ of a loss in firm value.

Worked: 2.2 Example 1 ($V_U=600$, $T_c=20\%$, $C(D)=160(D/600)^3$) gives $D^*=300$ and $V_L=640$; with personal taxes making $T^*=5\%$, $D^*=150$ and $V_L=605$. A 10-year loan at 6 percent, repaid and not replaced, shields $1-1.06^{-10}=44\%$ of $T_cD$. In 2.3 Example 2 ($V_0=100$, $F=90$, $T=4$, $r=3\%$), raising $\sigma$ from 25 to 50 percent moves equity from 29.6 to 45.3 and the spread from 3.1 to 9.5 points at constant firm value. In 2.4 Example 1 the write-down window is $74\le F'\le85$.

*From* [2.1](lessons/02-01-modigliani-miller.md), [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md), [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md), [2.4](lessons/02-04-debt-overhang.md)

### Banks and runs

Diamond-Dybvig's contract, the run it admits, and the tools that stop runs.

| Quantity | Formula |
|---|---|
| Planner (3.1) | $\max\ \pi u(c_1)+(1-\pi)u(c_2)$ subject to $\pi c_1+(1-\pi)c_2/R=1$ |
| First-order condition (3.1) | $u'(c_1)=R\,u'(c_2)$; with CRRA, $c_2=R^{1/\gamma}c_1$ |
| Optimal promise (3.1) | $c_1^*=\dfrac{1}{\pi+(1-\pi)R^{(1-\gamma)/\gamma}}$ |
| Liquidity insurance iff (3.1) | $\gamma>1$, and then $1<c_1^*<c_2^*<R$ |
| What each waiter gets (3.1) | $c_2(f)=\dfrac{R(1-fc_1)}{1-f}$; nothing once $f\ge1/c_1$ |
| Run threshold (3.1) | $f^*=\dfrac{R-c_1}{c_1(R-1)}$ |
| Share of the patient who must panic (3.1) | $(f^*-\pi)/(1-\pi)$ |
| Suspension at $\bar f$ (3.2) | no run iff $\bar f\le f^*$; every impatient paid iff $\bar f\ge\pi$ |
| Promise that survives a bad week $\pi_H$ (3.2) | $c_1\le R/\bigl(1+\pi_H(R-1)\bigr)$, which lifts $f^*$ to $\pi_H$ |
| Insured bank's equity (3.2) | $\mathbb E[\max(V-D,0)]=\mathbb E[V]-D+\mathbb E[\max(D-V,0)]$ |
| What waiting pays, cash at cost $\kappa$ (3.2) | $W(f)=\dfrac{(1-\pi)c_2-\kappa c_1(f-\pi)}{1-f}$ |
| Threshold with costly cash (3.2) | $f^*(\kappa)=\pi+\dfrac{(1-\pi)(c_2-c_1)}{c_1(\kappa-1)}$ |
| $\kappa$ by source of cash (3.2) | $R$ liquidating; $R/\ell$ selling at $\ell<1$; $\rho$ borrowing from a central bank |
| A lender of last resort ends the run iff (3.2) | $\rho\le c_2/c_1$ |
| Global-games threshold (3.2) | $\theta^*=c_1/c_2$ |

Worked: 3.1 Example 1 ($\gamma=2$, $\pi=0.5$, $R=2.25$) gives $c_1^*=1.2$, $c_2^*=1.8$, $f^*=0.7$, an empty bank at $f\approx0.83$, and a run that needs 40 percent of the patient to panic. 3.2 Example 1 ($R=1.8$, $c_1=1.2$, $\pi=0.4$) gives $f^*=0.625$ and $f^*(\rho)=0.4+0.18/(\rho-1)$, which reaches 1 at $\rho=c_2/c_1=1.3$.

*From* [3.1](lessons/03-01-diamond-dybvig.md), [3.2](lessons/03-02-stopping-runs.md)

### Amplification and leverage

Net worth, collateral values and margins as state variables.

| Quantity | Formula |
|---|---|
| Lender breaks even (3.3) | $L(D)=R_f\,(I-N)$; $D(N)$ is its smallest root |
| No loan at all (3.3) | $N<N_{\min}=I-\bar L/R_f$ |
| Borrower's surplus (3.3) | $\mathbb E[\max(y-D,0)]-R_fN=(\mathbb E[y]-R_fI)-c\,F(D)$ |
| External finance premium (3.3) | $\text{EFP}(N)=c\,F\bigl(D(N)\bigr)/(I-N)$ |
| Constant returns (3.3) | payoff over $R_fN$ is $N\,x\,[m-c\,F(d(x))]$, so $I=x^*N$ |
| Interior leverage, uniform returns (3.3) | $F(d^*)=2m/c-1$, which needs $m>c/2$ |
| Next period's net worth per unit (3.3) | $R_f+x^*(m-c\,F^*)$ |
| Collateral constraint (3.4) | $R\,b_t\le q_{t+1}k_t$ |
| Farmers' land (3.4) | $K_t=\dfrac{(a+q_t)K_{t-1}-RB_{t-1}}{u_t}$ |
| User cost of land (3.4) | $u_t=q_t-q_{t+1}/R$ |
| Land price, no bubble (3.4) | $q_t=\sum_{s\ge0}R^{-s}\,u(K_{t+s})$ |
| Steady state (3.4) | $u^*=a$, $q^*=Ra/(R-1)$; loan to value $1/R$; land $R/(R-1)$ times net worth |
| Dynamic multipliers (3.4) | $\hat q_t=\Delta/\eta$ and $\hat K_t=\dfrac{\eta}{1+\eta}\Bigl(1+\dfrac{R}{(R-1)\eta}\Bigr)\Delta$ |
| Decay (3.4) | $\hat K_{t+s}=\bigl(\eta/(1+\eta)\bigr)^s\hat K_t$ |
| Static multipliers, future held at $q^*$ (3.4) | $\hat q_t=\frac{R-1}{R\eta}\Delta$ and $\hat K_t=\Delta$ |
| Debt surprise (3.4) | a change of $(R-1)/R$ percent in debt's value does what a 1 percent productivity shock does |
| Valuation of agent $h$ (3.5) | $v(h)=h+(1-h)d=d+(1-d)h$ |
| Price and market clearing (3.5) | $p=v(h^*)$ and $e(1-h^*)+\phi=p$ |
| Marginal buyer (3.5) | $h^*(\phi)=\dfrac{e+\phi-d}{1+e-d}$ |
| Lending feasible iff (3.5) | $e\,h^*\ge\phi$ |
| Equilibrium loan (3.5) | $\phi=d$, the maximum riskless promise |
| Loan to value, margin, leverage (3.5) | $\phi/p$, $1-\phi/p$, $p/(p-\phi)$ |
| Loan cut at rollover to $\phi$ (3.5) | new marginal buyer $h_1$ solves $e\,(h^*-h_1)=d-\phi$ |

Worked: in 3.4 Example 1 ($R=1.25$, $\eta=1$, $\Delta=-1\%$) the land price falls 1 percent and farmers' land 3 percent (static: 0.2 and 1); the exact model gives 1.15 and 3.43, and a windfall only 0.91 and 2.73. In 3.5 Example 1 ($d=0.6$, $e=1.2$) the price is 0.75 without borrowing and 0.9 with $\phi=0.6$; cutting the loan to 0.45 at rollover moves the marginal buyer to 0.625 and the price to 0.85.

*From* [3.3](lessons/03-03-the-financial-accelerator.md), [3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md), [3.5](lessons/03-05-the-leverage-cycle.md)

### Debt deflation, Minsky and overborrowing

Deleveraging at the zero lower bound, Minsky's cash-flow classes, the household-debt designs, and the wedge in private leverage.

| Quantity | Formula |
|---|---|
| Borrowing limit (4.1) | $(1+r_t)\,b_t\le D$ |
| Steady state (4.1) | $1+\bar r=1/\beta$; $c^b=y_b-(1-\beta)D$; $c^s=y_s+(1-\beta)D$ |
| Borrowers when the limit falls (4.1) | $c^b_1=y_b-D_H+D_L/(1+r_1)$ |
| Natural rate (4.1) | $1+r^n_1=\dfrac{y_s+D_L}{\beta\,(y_s+D_H)}$ |
| Natural rate below zero iff (4.1) | $\beta D_H-D_L>(1-\beta)\,y_s$ |
| Legacy debt fixed in money (4.1) | $1+r^n_1=\dfrac{y_s+D_L}{\beta\,(y_s+D_H/P_1)}$ |
| Real rate (4.1) | $1+r_1=(1+i_1)/(1+\pi^e)$ |
| Output at the floor (4.1) | $(1-\theta)\,Y_1=\dfrac{y_s+D_L}{\beta(1+r_1)}-\dfrac{D_H}{P_1}$ |
| Output lost per unit of debt carried into the slump (4.4) | $1/(1-\theta)$, 1.67 at $\theta=0.4$ |
| Minsky classes (4.2) | hedge $Y\ge iD+P$; speculative $iD\le Y<iD+P$; Ponzi $Y<iD$ |
| Cutoff rates (4.2) | hedge up to $i_H=(Y-P)/D$; Ponzi above $i_P=Y/D$ |
| Year-end debt, shortfall refinanced (4.2) | $D'=(1+i)D-Y$ |
| Solvent iff, cash flow growing at $g<i$ (4.2) | $Y\ge(i-g)D$; a Ponzi unit is solvent iff $g\ge i-Y/D$ |
| Diagnostic forecast (4.2) | $\mathbb E^\theta_t[\omega_{t+1}]=b\,\omega_t+\theta\,b\,\epsilon_t$ |
| Housing net worth shock (4.3) | $s_i=g_iH_i/NW_i$, which is $g_i/(1-\ell_i)$ when $F_i=0$ |
| Spending equation (4.3) | $\Delta\log C_i=\alpha+\eta\,s_i+\varepsilon_i$ |
| MPC out of housing wealth (4.3) | $\Delta C_i/\Delta H_i=\eta\,C_i/NW_i$ |
| IV estimate (4.3) | $\hat\eta=\hat\rho/\hat\pi$ |
| Exclusion violated by a direct effect $\delta$ (4.3) | $\hat\eta_{IV}\to\eta+\delta/\pi$ |
| Private choice (4.4) | $m-kb=\pi\lambda\gamma B$, so $b^{CE}=m/(k+\pi\lambda\gamma)$ |
| Expected total surplus (4.4) | $W(B)=mB-\frac k2B^2-\pi\lambda\gamma B^2+\frac12\pi\gamma B^2$ |
| Planner (4.4) | $m-kB=\pi\lambda\gamma B+\pi\gamma(\lambda-1)B$, so $b^{SP}=\dfrac{m}{k+\pi\gamma(2\lambda-1)}$ |
| Corrective tax (4.4) | $\tau^*=\pi\gamma(\lambda-1)\,b^{SP}$ |
| Buyers' surplus in a bust (4.4) | $\gamma B^2/2$ |

Worked: in 4.3 Example 1 a 10 percent price fall is a shock of $-10\%$ where net worth is 300,000 dollars and $-37.5\%$ where it is 80,000; with $\hat\eta=11.2/16=0.7$ and spending of 24,000 a year, the MPCs are 0.056 and 0.21. In 4.4 Example 1 ($\pi=0.2$, $\gamma=0.5$, $\lambda=2$, $m=0.12$, $k=0.1$), $b^{CE}=0.4$, $b^{SP}=0.3$ and $\tau^*=0.03$.

*From* [4.1](lessons/04-01-fishers-debt-deflation-formalized.md), [4.2](lessons/04-02-minsky-informally-and-formally.md), [4.3](lessons/04-03-household-debt-and-the-great-recession.md), [4.4](lessons/04-04-overborrowing.md)

### Public debt dynamics

The debt-ratio identity, its forward solution, and what $r<g$ and tax smoothing change.

| Quantity | Formula |
|---|---|
| Debt-ratio identity (5.1) | $d_{t+1}=a\,d_t-s_t$, with $a=(1+r)/(1+g)$ |
| Debt-stabilizing surplus (5.1) | $s^*=(a-1)\,d=\dfrac{r-g}{1+g}\,d$ |
| Ratio a fixed surplus $s$ holds (5.1) | $\bar d=s/(a-1)$, and $d_{t+1}-\bar d=a\,(d_t-\bar d)$ |
| Forward iteration (5.1) | $d_t=\sum_{j=0}^{T-1}s_{t+j}/a^{j+1}+d_{t+T}/a^T$ |
| No-Ponzi condition and IBC (5.1) | $d_{t+T}/a^T\to0$, so $d_t=\sum_{j\ge0}s_{t+j}/a^{j+1}$ |
| Fiscal reaction function (5.1) | $s_t=\rho\,d_t+\mu_t$, so $d_{t+1}=(a-\rho)\,d_t-\mu_t$ |
| Bohn's thresholds (5.1) | solvent if $\rho>0$; stable ratio if also $\rho>a-1$ |
| Consolidation of size $c$ (5.1) | $\Delta d\approx c\,[m(d+\varepsilon)-1]$: the ratio rises in year one iff $m(d+\varepsilon)>1$ |
| Rollover with $a<1$ (5.2) | $d_t=a^t d_0$, halving every $\ln2/(-\ln a)$ years |
| Constant deficit $\delta$ (5.2) | $d^*=\dfrac{\delta}{1-a}=\dfrac{(1+g)\,\delta}{g-r}$ |
| Marginal cost of debt, $r(d)=r_0+\theta d$ (5.2) | $m(d)=r(d)+\theta d$; a resting ratio is stable only where $m(d)<g$ |
| Largest deficit a ratio can carry (5.2) | $\delta_{\max}=\dfrac{(g-r_0)^2}{4\theta(1+g)}$ at $d=\dfrac{g-r_0}{2\theta}$ |
| Blanchard's welfare rule, approximately (5.2) | $\operatorname{sign}(dU)=\operatorname{sign}\bigl(1-E[R_f]\,E[R]\bigr)$ |
| Flow constraint, GDP of 1 (5.3) | $d_{t+1}=(1+r)\,d_t+G_t-\tau_t$ |
| Barro's rule (5.3) | $f'(\tau_t)=\lambda$ every year; $\tau_t=r\,d_t+G^P_t$ |
| Permanent spending (5.3) | $G^P_t=\dfrac{r}{1+r}\sum_{s\ge0}\dfrac{G_{t+s}}{(1+r)^s}$ |
| Deficit under smoothing (5.3) | $d_{t+1}-d_t=G_t-G^P_t$ |
| Safe debt only (5.3) | $f'(\tau_t)=\mathbb E_tf'(\tau_{t+1})$, and $\mathbb E_t\tau_{t+1}=\tau_t$ when $f=\kappa\tau^2$ |
| State-contingent debt (5.3) | $f'(\tau_t)=f'\bigl(\tau_{t+1}(s)\bigr)$ in every state $s$ |

The present-value budget constraint of 5.3:

$$\sum_{t\ge0}\frac{\tau_t}{(1+r)^t}=(1+r)\,d_0+\sum_{t\ge0}\frac{G_t}{(1+r)^t}$$

With safe debt only, each surprise moves the tax rate for good by its annuity value:

$$\tau_{t+1}-\tau_t=\frac{r}{1+r}\,\bigl(\mathbb E_{t+1}-\mathbb E_t\bigr)\sum_{s\ge0}\frac{G_{t+1+s}}{(1+r)^s}$$

Worked: in 5.2, $a-1=-1\%$ holds a 1 percent deficit at 100 percent of GDP and a 3 percent deficit at 300. Blanchard's example, a safe rate 2 points below growth, gives $E[R_f]=0.98^{25}=0.603$, so more debt helps only if $E[R]<1.657$. In 5.1, with $d=1.0$ and $\varepsilon=0.5$, a consolidation raises the first-year ratio once the multiplier exceeds $1/1.5=0.67$.

*From* [5.1](lessons/05-01-the-government-budget-constraint.md), [5.2](lessons/05-02-when-r-is-less-than-g.md), [5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md)

### Fiscal-monetary interaction

The fiscal limit, seigniorage and its ceiling, who must yield, and inflation as a way out.

| Quantity | Formula |
|---|---|
| Fiscal limit (5.4) | $d_t\le\bar d=\dfrac{\bar s}{a-1}=\dfrac{(1+g)\,\bar s}{r-g}$ |
| Revenue peak, base $\propto(1-\tau)^e$ (5.4) | $\tau^*=1/(1+e)$ |
| Seigniorage (5.4) | $\sigma=\pi m$ |
| Cagan money demand (5.4) | $m=k\,e^{-\alpha\pi}$, so $S(\pi)=k\,\pi\,e^{-\alpha\pi}$ |
| Top of the seigniorage Laffer curve (5.4) | $\pi^*=1/\alpha$ and $S_{\max}=k/(\alpha e)$ |
| Identity with seigniorage (5.4) | $d_{t+1}=a\,d_t-s_t-\sigma_t$ |
| Fiscal dominance fixes (5.4) | $\sum_{t\ge0}\sigma_t/a^{t+1}=d_0-\sum_{t\ge0}s_t/a^{t+1}$ |
| Seigniorage deferred $T$ years (5.4) | $\sigma_L=\sigma_0+(a^T-1)(\sigma_0-\sigma_1)$, or $a^T\sigma_0$ if nothing is printed |
| Inflation before a known switch at $T$ (5.4) | $\mu\,e^{-(T-t)/\alpha}$ at $t<T$ |
| Valuation equation (5.5) | $\dfrac{B_{t-1}}{P_t}=\mathbb E_t\sum_{j\ge0}\dfrac{s_{t+j}}{(1+r)^j}\equiv S_t$ |
| Fiscal theory's price level (5.5) | $P_t=B_{t-1}/S_t$ |
| With maturity (5.5) | $\sum_{j\ge0}\dfrac{B^{(j)}_{t-1}}{(1+r)^j}\,\mathbb E_t\Bigl[\dfrac{1}{P_{t+j}}\Bigr]=S_t$ |
| One-time price-level jump $x$ (5.5) | every nominal bond's real value times $1/(1+x)$ |
| Surprise permanent inflation $\pi\to\pi'$ (5.5) | an $n$-year zero's real value times $\bigl((1+\pi)/(1+\pi')\bigr)^n$ |
| Nominal debt-ratio identity (5.5) | $d_{t+1}=\dfrac{1+i_t}{(1+\pi_t)(1+g_t)}\,d_t-s_t$ |
| Ex post real rate (5.5) | $1+r_t=(1+i_t)/(1+\pi_t)$ |
| Liquidation effect (5.5) | $-r_t\,d_t$ of GDP a year when $r_t<0$ |

Cagan's forward solution (5.4), with $p_t=\ln P_t$ and output of 1: today's price level is a discounted average of future money.

$$p_t=\frac1\alpha\int_t^\infty e^{-(u-t)/\alpha}\,(\ln M_u-\ln k)\,du$$

Leeper's regimes (5.4, 5.5):

| Money | Fiscal | Outcome |
|---|---|---|
| active (Taylor principle) | passive ($\rho>a-1$) | unique equilibrium; the treasury adjusts surpluses |
| passive | active | unique; Sargent-Wallace's fiscal dominance, or the fiscal theory's price level |
| passive | passive | price level undetermined |
| active | active | contradicts the budget constraint: one must give way |

Worked: with a 2 percent rate cap and 5 percent inflation, $r=1.02/1.05-1=-2.9\%$, so a debt of 100 percent of GDP sheds 2.9 points a year before growth does anything (5.5).

*From* [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md), [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md)

### Sovereign default

Ability to pay (the transfer problem), willingness (reputation, sanctions), prices (Arellano) and runs (Cole-Kehoe, Calvo).

| Quantity | Formula |
|---|---|
| Required real depreciation, price taker (6.1) | $\Delta q\approx T/(X\eta_X+M\eta_M)$ |
| Home-priced exports, balanced trade (6.1) | $\Delta q\approx T/\bigl(X(\eta_X+\eta_M-1)\bigr)$; Marshall-Lerner: $\eta_X+\eta_M>1$ |
| Transfer criterion (6.1) | $\Delta q\approx(1-m-m^*)\,T/\kappa$ |
| Original sin (6.1) | $d'=d\,(1+\phi\,\Delta q)$ |
| Balance-sheet loop (6.1) | $\Delta q=\dfrac{T/\kappa}{1-g}$ with gain $g=\theta\phi d/\kappa$; no finite solution once $\phi\ge\phi^*=\kappa/(\theta d)$ |
| Expected utility under the contract (6.2) | $W(x)=\tfrac12u(y_H-x)+\tfrac12u(y_L+x)$ |
| Participation constraint (6.2) | $u(y_H)-u(y_H-x)\le\dfrac{\beta}{1-\beta}\,[W(x)-W(0)]$ |
| Critical discount factor (6.2) | $\beta^*=G/(G+I)$, $G=u(y_H)-u(\bar y)$, $I=u(\bar y)-W(0)$ |
| Insurance of any size, log utility, $\bar y=1$ (6.2) | needs $\beta>1-\sigma$ |
| Debt recursion (6.3) | $D(h)=P(h)+\mathbb E[D(h')\mid h]/(1+r)$ |
| Consumption after defaulting at the peak (6.3) | $c^{\text{dev}}(h)=y(h)-P(h)+\dfrac{r}{1+r}\,\bar D$ |
| Sanction-supported debt (6.3) | $D\le D_{\max}=\kappa y/r$ |
| Bond price schedule (6.4) | $q(b',y)=\dfrac{1-\delta(b',y)}{1+r^*}$, $\delta(b',y)=\sum_{y'}\pi(y'\mid y)\,D(b',y')$ |
| Default threshold (6.4) | repay iff $b\le\bar b(y)$ |
| Output while excluded (6.4) | $h(y)=\min(y,\hat y)$: default costs $\max(0,\,y-\hat y)$ |
| Cost of honoring (6.5) | $b$ if lenders roll over; $b+\kappa(\lambda b)^2$ in a run |
| Three zones (6.5) | safe $b\le\underline b(\lambda)$; crisis $\underline b(\lambda)<b\le K$; default $b>K$ |
| Lower edge of the crisis zone (6.5) | $\underline b(\lambda)=\dfrac{\sqrt{1+4\kappa\lambda^2K}-1}{2\kappa\lambda^2}$, rising to $K$ as $\lambda\to0$ |
| Effect of a costlier default (6.5) | $d\underline b/dK=1/(1+2\kappa\lambda^2\underline b)<1$ |
| One-year bond price (6.5) | $1/(1+r^*)$ safe; $(1-p)/(1+r^*)$ in the zone; 0 in default |
| Calvo's equilibrium (6.5) | $q(F)\,F=A$ with $q(F)=\Pr(\tilde K\ge F)/(1+r^*)$ |
| Backstop at the safe price (6.5) | free iff credible and $b\le K$; otherwise a transfer of at least $b-K$ |

Arellano's Bellman equations (6.4):

$$V^o(b,y)=\max\bigl\{V^c(b,y),\;V^d(y)\bigr\}$$

$$V^c(b,y)=\max_{b'}\Bigl\{u\bigl(y-b+q(b',y)\,b'\bigr)+\beta\,\mathbb E\bigl[V^o(b',y')\mid y\bigr]\Bigr\}$$

$$V^d(y)=u\bigl(h(y)\bigr)+\beta\,\mathbb E\bigl[\theta\,V^o(0,y')+(1-\theta)\,V^d(y')\mid y\bigr]$$

Worked: in 6.5 with one-year bonds, $\kappa=2.5$ and $K=0.8$, the crisis zone is $(0.4,\,0.8]$; with $K=0.9$ it is $(0.432,\,0.9]$. Calvo with $\tilde K$ uniform on $[0,1]$ and $r^*=0$ reads $F(1-F)=A$; at $A=0.21$ the roots are $F=0.3$ (price 0.7) and $F=0.7$ (price 0.3).

*From* [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md), [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md), [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md), [6.4](lessons/06-04-the-arellano-model.md), [6.5](lessons/06-05-self-fulfilling-debt-crises.md)

### Restructuring

Measuring haircuts, the debt Laffer curve, buybacks, holdouts, and bankruptcy procedure.

| Quantity | Formula |
|---|---|
| Bond value at yield $y$ (7.1) | $PV(y)=cF\,a_n(y)+F/(1+y)^n$, with $a_n(y)=\dfrac{1-(1+y)^{-n}}{y}$ |
| Nominal haircut (7.1) | $H^N=1-F_n/F_o$ |
| Sturzenegger-Zettelmeyer haircut (7.1) | $H^{SZ}=1-PV_n(y^e)/PV_o(y^e)$ |
| Market haircut (7.1) | $H^M=1-PV_n(y^e)/F_o$ |
| Effort under debt $D$ (7.1) | $p(D)=k(Y_H-D)$ for $Y_L<D<Y_H$; $\bar p=k(Y_H-Y_L)$ |
| Market value of the debt (7.1) | $V(D)=Y_L+p(D)(D-Y_L)$ and $V'(D)=p(D)-k(D-Y_L)$ |
| Top of the debt Laffer curve (7.1) | $D^*=(Y_L+Y_H)/2$ |
| As a tax on effort (7.1) | $V-Y_L=\bar p\,(Y_H-Y_L)\,t(1-t)$, $t=\dfrac{D-Y_L}{Y_H-Y_L}$ |
| Who loses from extra face (7.1) | debtor's payoff falls at rate $p(D)$; total value at rate $k(D-Y_L)$ |
| Buyback price (7.1) | $C/X=q(D-X)=V(D-X)/(D-X)$ |
| What the country saves (7.1) | $\int_{D-X}^{D}p(x)\,dx$ |
| What it pays per unit (7.1) | $q=p+(1-p)\,Y_L/(D-X)$ at $p=p(D-X)$ |
| Participation threshold (7.2) | $\hat\theta=\dfrac{h-C}{h-v}$ when $h>C$ |
| A more generous offer (7.2) | $\partial\hat\theta/\partial v=(h-C)/(h-v)^2>0$ |
| Holdout premium (7.2) | $h-v$ |
| Collective action clause (7.2) | binds all once a share $\kappa$ votes yes; a pivotal voter compares $v$ with $d$ |
| Blocking stake (7.2) | face just over $1-\kappa$ of its voting pool, costing $qb$; exactly half blocks a limb asking more than half |
| Seniority (7.2) | bonds recover $(C-S)/B$, not $C/(S+B)$: a transfer of $S\bigl(1-\tfrac{C}{S+B}\bigr)$ to seniors |
| The race (7.3) | everyone grabs; each expects $L/n$ instead of $G/n$; $G-L$ is lost |
| Absolute priority (7.3) | $x_k(V)=\min\bigl\{D_k,\max(V-K_k,0)\bigr\}$, $K_k=D_1+\dots+D_{k-1}$; shareholders $\max(V-K_{m+1},0)$ |
| Class $k$ prefers continuing iff (7.3) | $\mathbb E\,x_k(\tilde V)>x_k(L)$ |
| Bebchuk options (7.3) | class $k$ buys all shares for $K_k$; exercising iff $V>K_k$ guarantees at least $x_k(V)$ |

Voting thresholds as the lessons state them (7.2, 7.3):

| Rule | Threshold |
|---|---|
| Series-by-series clause | 75 percent of each series |
| ICMA two-limb (2014) | $66\tfrac23$ percent of all affected series together and more than 50 percent of each |
| ICMA single-limb (2014) | 75 percent of the aggregate, only if every series gets the same terms |
| Chapter 11 class acceptance | at least two-thirds of the amount and more than half of the number of claims voting |
| Cramdown on an unsecured class | paid in full, or no junior class receives anything |

Worked: 7.1 Example 1 swaps a bond of face 100 (7 percent coupon, 4 years left) for one of face 80 (4.5 percent, 12 years) at an 11 percent exit yield: $PV_o=87.59$, $PV_n=46.24$, so $H^N=20\%$, $H^{SZ}=47.2\%$ and $H^M=53.8\%$. In 7.3 Example 1 the stay lifts recovery from half to 80 percent, so with $p=0.1$ the zero-profit rate falls from 5.6 to 2.2 percent.

*From* [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md), [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md), [7.3](lessons/07-03-designing-bankruptcy.md)

### Relief

Discharge, scheduled release, indexation and odious-debt rules, each priced by lenders who break even.

| Quantity | Formula |
|---|---|
| Face under a discharge share $\theta$ (8.1) | $D(\theta)=b/(1-p\theta)$ |
| Consumption (8.1) | $c_H=y_H-D$ and $c_L=y_L-(1-\theta)D$ |
| Care constraint (8.1) | $(p_1-p_0)\,[u(c_H)-u(c_L)]\ge\psi$; with log utility $c_H\ge k\,c_L$, $k=e^{\psi/(p_1-p_0)}$ |
| Most generous discharge that keeps care (8.1) | $\bar\theta=\dfrac{(y_H-k\,y_L)+(k-1)\,b}{p_0(y_H-k\,y_L)+k\,b}$ |
| Annuity factor (8.2) | $a_k(r)=\sum_{t=1}^k(1+r)^{-t}=\dfrac{1-(1+r)^{-k}}{r}$; $a_k(0)=k$ |
| Break-even loan before a release (8.2) | $L=x\,a_{\min(n,\tau)}(r)$ |
| Most a borrower can borrow (8.2) | $\bar L(\tau)=y\,a_{\min(n,\tau)}(r)$: $y/(1+r)$ one year out, zero in the release year |
| Jubilee land price (8.2) | $P(\tau)=Y\,a_\tau(r)=\dfrac{Y}{r}\bigl[1-(1+r)^{-\tau}\bigr]$ |
| Landless share with no release (8.2) | $\ell_t=1-(1-p)^t\to1$ |
| Cycle average, release every $J$ years (8.2) | $\bar\ell(J)=1-\dfrac{1-(1-p)^J}{Jp}$ |
| A *prosbul* (8.2) | sets $\tau=\infty$ for the loan it registers |
| Plain debt, lenders expect (8.3) | $L=\mathbb E\bigl[D\,\mathbf 1\{\tau Y\ge D\}+\lambda\tau Y\,\mathbf 1\{\tau Y<D\}\bigr]$ |
| Indexed share (8.3) | $\kappa\bar Y=L$, and $\kappa\le\tau$ |
| Deadweight indexation saves (8.3) | $\Delta=(1-\lambda)\,\tau\,\mathbb E\bigl[Y\,\mathbf 1\{\tau Y<D\}\bigr]$ |
| Indexation pays iff (8.3) | $c<\Delta$ |
| Gross return on Shiller's level-indexed debt (8.3) | $(1+r)(1+g_{t+1})/(1+\bar g)$ |
| Ex post voiding (8.4) | $1+r^{\text{post}}=(1+r_f)/(1-\pi)$ |
| A designated ruler likely to survive (8.4) | lender breaks even at $(1+r_f)/s$ |

Worked: in 8.2 Example 1 (5,000 dollars over ten years, funds at 4 percent) the break-even installment is 616.45 with ten or more year-ends left and 953.81 with six; quoted on the full ten-payment schedule that is 13.9 percent, though the lender earns 4. With 40 harvests left at 4 percent a field is worth 19.8 harvests, not 40. In 8.3's idea, $\tau=0.2$ and $\lambda=0.75$ give $\Delta=2$.

*From* [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md), [8.2](lessons/08-02-the-scheduled-release.md), [8.3](lessons/08-03-relief-written-into-the-contract.md), [8.4](lessons/08-04-odious-debt-as-a-rule.md)

## Papers

The studies the lessons cite, in lesson order, each with its result as the lesson states it. Where a lesson took its figures from a working paper, the row says so; figures carry the lessons' own hedges.

| Paper | Result, as the lesson states it | Lesson |
|---|---|---|
| Townsend (1979, *JET*) | Costly state verification: when a lender must pay to see the outcome, the best contract is one that looks least, which is debt | [1.1](lessons/01-01-costly-state-verification.md) |
| Gale and Hellwig (1985, *RES*) | The standard debt contract: a fixed claim, bankruptcy exactly when the borrower cannot pay, and the lender then takes everything | [1.1](lessons/01-01-costly-state-verification.md) |
| Williamson (1987, *QJE*) | Equilibrium rationing from costly monitoring: identical borrowers, some funded and some refused, with no adverse selection or moral hazard | [1.1](lessons/01-01-costly-state-verification.md) |
| Mookherjee and Png (1989, *QJE*) | With random audits and a risk-averse borrower, optimal contracts audit at random, reward reports that check out, and are never debt | [1.1](lessons/01-01-costly-state-verification.md) |
| Stiglitz and Weiss (1981, *AER*) | Adverse selection and incentive effects make the bank's return peak before the market clears, so it rations at the bank-optimal rate; collateral selects too | [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md) |
| de Meza and Webb (1987, *QJE*) | When projects differ only in how often they succeed, the market clears with too much lending; raising the rate above its free-market level restores efficiency; under Stiglitz-Weiss's assumptions equity is the equilibrium form | [1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md) |
| Holmström and Tirole (1997, *QJE*) | Pledgeable income and minimum net worth; any tightening of capital falls hardest on the firms with the least of it | [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md) |
| Hart and Moore (1994, *QJE*) | Human capital is inalienable, so debt above the assets' liquidation value is renegotiated down | [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md) |
| Bester (1985, *AER*) | Collateral as a screen: a menu of rates and pledges separates types, and no one is rationed | [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md) |
| Diamond (1984, *RES*) | Delegated monitoring: a bank monitors once for many savers, and with independent loans the cost of watching the bank vanishes as it grows | [1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md) |
| Modigliani and Miller (1958, *AER*) | Propositions I and II: a firm is worth what its operating cash flow is worth, however it is divided | [2.1](lessons/02-01-modigliani-miller.md) |
| Stiglitz (1969, *AER*) | The irrelevance theorem survives default when markets are complete | [2.1](lessons/02-01-modigliani-miller.md) |
| Admati and Hellwig (2013, *The Bankers' New Clothes*, book) | Equity is not socially expensive for banks; debt is cheap for them because of the tax deduction and explicit and implicit guarantees, transfers from taxpayers | [2.1](lessons/02-01-modigliani-miller.md), [3.2](lessons/03-02-stopping-runs.md) |
| Modigliani and Miller (1963, *AER*) | The tax correction: $V_L=V_U+T_cD$ | [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md) |
| Miller (1977, *JF*, "Debt and Taxes") | Firms issue debt until the marginal bondholder's personal tax offsets the corporate saving; that fixes the economy's debt and leaves each firm's choice irrelevant | [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md) |
| Warner (1977, *JF*) | Direct bankruptcy costs of 11 railroads, 1933-55: about 5 percent of market value just before filing, about 1 percent seven years earlier | [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md) |
| Andrade and Kaplan (1998, *JF*) | 31 distressed highly leveraged transactions of the 1980s: distress cost about 10 percent of firm value, incurred mostly before any Chapter 11 filing | [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md) |
| Myers and Majluf (1984, *JFE*) | Managers' private information makes a firm pass up a good project rather than issue underpriced shares; hence the pecking order | [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md) |
| Myers (1984, *JF*, "The Capital Structure Puzzle") | Sets the trade-off and pecking-order theories against the evidence; share prices fall on stock-issue announcements, much less for high-grade debt | [2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md) |
| Jensen and Meckling (1976, *JFE*) | Agency costs of debt and of outside equity; anticipated, they are borne by the owner at issue | [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md) |
| Merton (1974, *JF*) | Equity is a call on the firm's assets, valued with the Black-Scholes formula | [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md) |
| Jensen (1986, *AER Papers and Proceedings*) | Free cash flow: debt commits cash a manager would invest at a negative NPV; the oil industry of the early 1980s | [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md) |
| Smith and Warner (1979, *JFE*) | Covenants control four conflicts between shareholders and creditors | [2.3](lessons/02-03-agency-costs-of-debt-and-equity.md) |
| Myers (1977, *JFE*) | Debt overhang: shareholders exercise growth options only if they cover the debt too, so firms made of growth options should borrow less | [2.4](lessons/02-04-debt-overhang.md) |
| Gilson, John and Lang (1990, *JFE*) | About half of 169 distressed firms restructured outside Chapter 11; firms owing more of their debt to banks, and to fewer lenders, were more likely to manage it | [2.4](lessons/02-04-debt-overhang.md) |
| Diamond and Dybvig (1983, *JPE*) | Demand deposits provide liquidity insurance, and the same contract admits a self-fulfilling run; suspension and deposit insurance stop it | [3.1](lessons/03-01-diamond-dybvig.md), [3.2](lessons/03-02-stopping-runs.md) |
| Bagehot (1873, *Lombard Street*, book) | In a panic, lend at a very high rate, on all good banking securities, as largely as the public ask | [3.2](lessons/03-02-stopping-runs.md) |
| Merton (1977, *Journal of Banking and Finance*) | Deposit insurance priced as a put on the bank's assets | [3.2](lessons/03-02-stopping-runs.md) |
| Morris and Shin (1998, *AER*) | Global games: small private noise selects a unique threshold equilibrium | [3.2](lessons/03-02-stopping-runs.md) |
| Goldstein and Pauzner (2005, *JF*) | The Diamond-Dybvig bank has a unique equilibrium; the run threshold rises with $c_1$, and the best contract insures less than the no-run optimum | [3.2](lessons/03-02-stopping-runs.md) |
| Bernanke and Gertler (1989, *AER*) | Net worth is a state variable, so a one-time shock to it echoes into later periods | [3.3](lessons/03-03-the-financial-accelerator.md) |
| Bernanke, Gertler and Gilchrist (1999, *Handbook of Macroeconomics*) | The external finance premium: procyclical net worth makes it countercyclical; with constant returns investment is proportional to net worth | [3.3](lessons/03-03-the-financial-accelerator.md) |
| Bernanke, Gertler and Gilchrist (1996, *REStat*) | Flight to quality: early in a recession high-agency-cost borrowers get a falling share of credit; evidence from large and small manufacturers | [3.3](lessons/03-03-the-financial-accelerator.md) |
| Gertler and Gilchrist (1994, *QJE*) | After monetary tightening small manufacturers' sales fell faster than large ones' for more than two years, and bank lending to small firms shrank | [3.3](lessons/03-03-the-financial-accelerator.md) |
| Bernanke (1983) | Took up Fisher's theme of debt burdens deepening the Depression | [3.3](lessons/03-03-the-financial-accelerator.md) |
| Kiyotaki and Moore (1997, *JPE*) | Credit cycles: with land as the only collateral, a one-period shock becomes a large, lasting fall in land prices and borrowers' holdings | [3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md) |
| Geanakoplos (2010, FRBNY *Economic Policy Review*) | The leverage cycle: the equilibrium loan is the maximum riskless promise; margins track the worst case; a hedge fund's margins went from about 5 to about 70 percent | [3.5](lessons/03-05-the-leverage-cycle.md) |
| Gorton and Metrick (2012, *JFE*; NBER working paper 2009) | A run on repo: their haircut index on non-Treasury collateral rose from zero in early 2007 to nearly half in late 2008 | [3.5](lessons/03-05-the-leverage-cycle.md) |
| Shleifer and Vishny (1992, *JF*; 2011, *JEP*) | Fire sales: natural buyers are constrained at once, so assets go to buyers who value them less | [3.5](lessons/03-05-the-leverage-cycle.md) |
| Fisher (1933, *Econometrica*) | The debt-deflation theory: over-indebtedness and the deflation that repayment sets off; US real debt rose about 40 percent from 1929 to 1933 | [4.1](lessons/04-01-fishers-debt-deflation-formalized.md), [3.3](lessons/03-03-the-financial-accelerator.md) |
| Eggertsson and Krugman (2012, *QJE*) | Deleveraging drives the natural rate below zero; at the zero lower bound flexible prices deepen the slump | [4.1](lessons/04-01-fishers-debt-deflation-formalized.md) |
| Minsky (1992, Levy Institute Working Paper 74; 1986, *Stabilizing an Unstable Economy*, book) | The financial instability hypothesis: hedge, speculative and Ponzi units, and a calm that shifts the mix toward fragility | [4.2](lessons/04-02-minsky-informally-and-formally.md) |
| Bordalo, Gennaioli and Shleifer (2018, *JF*) | Diagnostic expectations: beliefs overreact to news, so spreads fall too far after good news and reverse predictably | [4.2](lessons/04-02-minsky-informally-and-formally.md) |
| Brunnermeier and Sannikov (2014, *AER*) | The volatility paradox: with leverage chosen endogenously, crises stay violent even when exogenous risk is low | [4.2](lessons/04-02-minsky-informally-and-formally.md) |
| López-Salido, Stein and Zakrajšek (2017, *QJE*) | Credit-market sentiment in year $t-2$ predicts wider spreads and weaker GDP, investment and employment in $t$ and $t+1$ | [4.2](lessons/04-02-minsky-informally-and-formally.md) |
| Schularick and Taylor (2012, *AER*) | "Credit Booms Gone Bust": lagged growth of real bank loans predicts banking crises, 14 countries, 1870-2008 | [4.2](lessons/04-02-minsky-informally-and-formally.md) |
| Mian, Rao and Sufi (2013, *QJE*) | Housing net worth elasticity of spending 0.6 to 0.8 (IV 0.77); MPC 5.4 cents (OLS) and 7.2 (IV); on car purchases, larger where leverage is high and incomes low | [4.3](lessons/04-03-household-debt-and-the-great-recession.md) |
| Saiz (2010, *QJE*) | Metro housing supply elasticity from land lost to slopes and water, plus land-use regulation | [4.3](lessons/04-03-household-debt-and-the-great-recession.md) |
| Davidoff (2016, *Critical Finance Review*) | Supply constraints are invalid instruments for house prices: constrained markets are high-demand markets | [4.3](lessons/04-03-household-debt-and-the-great-recession.md) |
| Guren, McKay, Nakamura and Steinsson (2021, *REStud*) | A new instrument gives housing wealth effects more precise and smaller than recent estimates, not especially large in the 2000s | [4.3](lessons/04-03-household-debt-and-the-great-recession.md) |
| Mian and Sufi (2014, *Econometrica*) | Where housing net worth fell more, more non-tradable jobs were lost | [4.3](lessons/04-03-household-debt-and-the-great-recession.md) |
| Campbell, Giglio and Pathak (2011, *AER*) | Foreclosed houses sold at a 27 percent discount; a foreclosure 0.05 miles away cut a house's price about 1 percent | [4.3](lessons/04-03-household-debt-and-the-great-recession.md) |
| Mian, Sufi and Trebbi (2015, *JF*) | States with no judicial requirement foreclosed twice as often; foreclosures cut house prices, residential investment and demand | [4.3](lessons/04-03-household-debt-and-the-great-recession.md) |
| Melzer (2017, *JF*) | Household debt overhang: owners at risk of default cut home improvements and principal payments | [4.3](lessons/04-03-household-debt-and-the-great-recession.md) |
| Mian, Sufi and Verner (2017, *QJE*) | A rise in household debt to GDP over three years predicts lower growth over the next three; 30 countries, 1960-2012 | [4.3](lessons/04-03-household-debt-and-the-great-recession.md) |
| Adelino, Schoar and Severino (2016, *RFS*) | Originations rose at all incomes; middle-income, high-income and prime borrowers sharply increased their share of delinquencies | [4.3](lessons/04-03-household-debt-and-the-great-recession.md) |
| Mian and Sufi (2017, *RFS*) | Application incomes outgrew IRS incomes where credit grew fastest, so application income misleads | [4.3](lessons/04-03-household-debt-and-the-great-recession.md) |
| Greenwald and Stiglitz (1986, *QJE*) | With incomplete markets or imperfect information, Pareto-improving interventions almost always exist | [4.4](lessons/04-04-overborrowing.md) |
| Lorenzoni (2008, *RES*) | Limited commitment plus spot-market asset prices can make borrowing excessive relative to the constrained optimum | [4.4](lessons/04-04-overborrowing.md) |
| Dávila and Korinek (2018, *RES*) | Distributive and collateral externalities; distributive ones can go either way, and fire sales are neither necessary nor sufficient | [4.4](lessons/04-04-overborrowing.md) |
| Bianchi (2011, *AER*) | Overborrowing in a small open economy calibrated to emerging markets; raising borrowing costs in tranquil times makes crises rarer and milder | [4.4](lessons/04-04-overborrowing.md) |
| Korinek and Simsek (2016, *AER*) | At the zero lower bound macroprudential limits on leverage raise welfare; interest-rate policy is inferior | [4.4](lessons/04-04-overborrowing.md) |
| Farhi and Werning (2016, *Econometrica*) | The aggregate-demand externality extends to other constraints on monetary policy, such as a fixed exchange rate | [4.4](lessons/04-04-overborrowing.md) |
| Bohn (1998, *QJE*) | A surplus that rises with debt keeps the budget constraint; the US surplus rose with debt and the ratio mean-reverted | [5.1](lessons/05-01-the-government-budget-constraint.md) |
| Bohn (2011, *FinanzArchiv*) | The US response is 0.05 to 0.12 | [5.1](lessons/05-01-the-government-budget-constraint.md) |
| Ghosh, Kim, Mendoza, Ostry and Qureshi (2013, *Economic Journal*) | Fiscal fatigue: the response cannot keep pace as debt climbs, which implies a debt limit | [5.1](lessons/05-01-the-government-budget-constraint.md) |
| Mourre and Poissonnier (2019, *Intereconomics*) | The budget's semi-elasticity to output is about 0.5 on average across EU members | [5.1](lessons/05-01-the-government-budget-constraint.md) |
| Blanchard and Leigh (2013, *AER Papers and Proceedings*) | Early in the crisis, economies planning stronger consolidation grew less than forecast: multipliers well above what forecasters assumed | [5.1](lessons/05-01-the-government-budget-constraint.md) |
| Eyraud and Weber (2013, IMF Working Paper 13/67) | Tightening can raise debt ratios in the short term | [5.1](lessons/05-01-the-government-budget-constraint.md) |
| Blanchard (2019, *AER*) | 1950-2018: one-year Treasury rate 4.7 percent, ten-year 5.6, nominal growth 6.3; the welfare rule; 2 to 3 basis points on the rate per point of debt, which he calls uncertain | [5.2](lessons/05-02-when-r-is-less-than-g.md) |
| Reinhart and Rogoff (2010, *AER Papers and Proceedings*) | Above debt of 90 percent of GDP, median growth about 1 point lower and mean growth several points lower | [5.2](lessons/05-02-when-r-is-less-than-g.md) |
| Herndon, Ash and Pollin (2014, *Cambridge Journal of Economics*) | Coding errors, excluded data and unusual weighting: corrected, mean growth above 90 percent was 2.2 percent, not $-0.1$ | [5.2](lessons/05-02-when-r-is-less-than-g.md) |
| Calvo (1988, *AER*) | A risk premium can fulfill itself: fear of default raises the rate, which makes default likelier | [5.2](lessons/05-02-when-r-is-less-than-g.md), [6.5](lessons/06-05-self-fulfilling-debt-crises.md) |
| Barro (1979, *JPE*) | Tax smoothing: borrow for the temporary part of spending and raise taxes a little, forever | [5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md) |
| Lucas and Stokey (1983, *JME*) | With state-contingent debt, the tax rate depends only on the current state of spending, never on its history | [5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md) |
| Aiyagari, Marcet, Sargent and Seppälä (2002, *JPE*) | With only risk-free debt, debt and taxes acquire a near-unit root, and missing insurance creates a precautionary war chest | [5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md) |
| Cagan (1956) | Money demand in hyperinflations, $m=k\,e^{-\alpha\pi}$ | [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) |
| Sargent and Wallace (1981, FRB Minneapolis *Quarterly Review*) | Unpleasant monetarist arithmetic: facing a treasury that will not adjust, a central bank chooses only when inflation comes | [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) |
| Leeper (1991, *JME*) | Active and passive policy: one of each gives a unique equilibrium; two passive leave the price level undetermined | [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md), [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md) |
| Bi (2012, *European Economic Review*) | Fiscal limits from dynamic Laffer curves are a distribution, with premia rising rapidly as debt nears it | [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) |
| Leeper and Walker (2011, *Economic Papers*) | At the fiscal limit monetary policy may lose control of inflation | [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) |
| Werning (2021, teaching note) | Sargent and Wallace's backfire needs the falling side of the money Laffer curve | [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) |
| Sargent (1982) | The 1920s European hyperinflations, read by Leeper as active fiscal with passive money, ended by a switch | [5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) |
| Sims (1994, *Economic Theory*) | The fiscal theory of the price level | [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md) |
| Woodford (1995, *Carnegie-Rochester Conference Series on Public Policy*) | The fiscal theory pins down the price level even under an interest-rate peg | [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md) |
| Cochrane (2001, *Econometrica*) | The maturity structure decides whether bad fiscal news shows up as inflation now or later | [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md) |
| Buiter (2002, *Economic Journal*) | The fiscal reading confuses a budget constraint, which must hold at every price level, with an equilibrium condition | [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md) |
| McCallum (2001, *JME*) | The same models have a monetarist solution, perhaps the more plausible as the bubble-free one | [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md) |
| Hall and Sargent (2011, *AEJ: Macroeconomics*; figures from their 2010 NBER working paper) | US debt fell from 66.2 to 11.3 percent of GDP from 1945 to 1974; inflation net of nominal returns took off 12.5 points, 23 percent of the fall | [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md) |
| Reinhart and Sbrancia (2015, *Economic Policy*; 2011 NBER working paper) | Real rates on government debt negative about half the time 1945-80, saving about 1 to 5 percent of GDP a year across 12 countries; the working paper lists repression's tools | [5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md) |
| Keynes and Ohlin (1929) | The transfer debate: Keynes feared the terms-of-trade loss; Ohlin replied that income effects would do much of the work | [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md) |
| Eichengreen and Hausmann (1999) | Original sin: being unable to borrow abroad in your own currency | [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md) |
| Eichengreen, Hausmann and Panizza (2005, in *Other People's Money*) | Countries with original sin have more volatile output and capital flows and lower ratings than their debt predicts | [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md) |
| Krugman (1999, *International Tax and Public Finance*) | The balance-sheet loop: collapse is possible once its gain exceeds 1; Thailand's swing from a 10 percent deficit to an 8 percent surplus | [6.1](lessons/06-01-the-transfer-problem-and-original-sin.md) |
| Eaton and Gersovitz (1981, *RES*) | Reputation: borrowing to smooth income, with exclusion from credit as the punishment for default | [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md) |
| Grossman and Van Huyck (1988, *AER*) | Sovereign debt as a contingent claim: a default matching visibly bad times is excusable and costs no reputation | [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md) |
| Worrall (1990, *European Economic Review*) | With terms that depend on the record, debt is held down at first, and in the long run consumption stops moving with income | [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md) |
| Kletzer and Wright (2000, *AER*) | Lending survives with no outside enforcement: whoever cheats, a rival lender included, is cheated in turn | [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md), [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md) |
| Tomz (2007) | Lenders punished defaults without an excuse and forgave those matching visible bad times (weighed in [`history-of-debt` 4.6](../history-of-debt/lessons/04-06-bondholders-gunboats-and-receiverships.md)) | [6.2](lessons/06-02-reputation-and-eaton-gersovitz.md) |
| Bulow and Rogoff (1989, *AER*, "Sovereign Debt: Is to Forgive to Forget?") | Reputation alone supports no lending; lending needs direct sanctions, and a good record adds nothing for a small country | [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md) |
| Bulow and Rogoff (1989, *JPE*) | Constant recontracting: carrying out a sanction destroys value, so creditors and debtor bargain; repudiation is rare, partial payment common | [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md) |
| North and Weingast; Stasavage | A parliament of creditors vetoes default, or default hurts the rulers' own backers (via [`history-of-debt` 3.2](../history-of-debt/lessons/03-02-did-1688-make-britain-creditworthy.md)) | [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md) |
| Rose (2005, *Journal of Development Economics*) | After a Paris Club renegotiation, trade between debtor and creditor countries shrinks roughly 8 percent a year for about fifteen years | [6.3](lessons/06-03-bulow-rogoff-and-sanctions.md) |
| Arellano (2008, *AER*) | Default risk and income fluctuations: defaults in recessions and countercyclical spreads from a risk-averse, non-contingent borrower | [6.4](lessons/06-04-the-arellano-model.md) |
| Aguiar and Gopinath (2006, *JIE*) | Exclusion alone sustains little debt, because income fluctuations cost little welfare | [6.4](lessons/06-04-the-arellano-model.md) |
| Tomz and Wright (2007, *JEEA*) | A weak output-default link: of 169 defaults since 1820, about 62 percent began with output below trend, on average only 1.6 percent below | [6.4](lessons/06-04-the-arellano-model.md) |
| Cole and Kehoe (2000, *RES*) | Self-fulfilling debt crises: a crisis zone that long enough maturity closes; a costlier default does not remove it, the price of credibility | [6.5](lessons/06-05-self-fulfilling-debt-crises.md) |
| Altavilla, Giannone and Lenza (2014, ECB Working Paper 1707) | The European Central Bank's 2012 announcements cut Italian and Spanish two-year yields by about 2 percentage points | [6.5](lessons/06-05-self-fulfilling-debt-crises.md) |
| Bocola and Dovis (2016, NBER Working Paper 22694) | About 12 percent of Italian spreads over 2008-12 due to rollover risk, identified through maturity choice | [6.5](lessons/06-05-self-fulfilling-debt-crises.md) |
| Sturzenegger and Zettelmeyer (2008, *JIMF*) | Haircuts valued at the exit yield; averages across six countries' restructurings of 1998-2005 from 13 percent (Uruguay, 2003) to 73 percent (Argentina, 2005) | [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) |
| Cruces and Trebesch (2013, *AEJ: Macroeconomics*) | In 180 restructurings, larger haircuts go with higher later spreads and longer exclusion from capital markets | [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) |
| Krugman (1988); Sachs (1989) | Forgiving part of a debt can raise collections when the debt taxes the effort that would repay it; Krugman proposed relief tied to commodity prices and world interest rates | [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) |
| Bulow and Rogoff (1988, *Brookings Papers on Economic Activity*) | The buyback boondoggle: in Bolivia's 1988 buyback donors' 34 million dollars cut the debt's market value by about 0.4 million | [7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) |
| Buchheit and Gulati (2000, *UCLA Law Review*) | Exit consents: departing creditors strip the old bonds' non-payment protections | [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md) |
| Bi, Chamon and Zettelmeyer (2011, IMF Working Paper 11/265) | Without a participation condition all-hold-out survives beside all-accept; bond exchanges since the late 1990s were mostly quick | [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md) |
| IMF staff (2014) | Collective action clause thresholds, including the 2014 ICMA model clauses; in Greece's 2012 exchange holdouts built blocking positions in about half of the foreign-law series | [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md) |
| Eichengreen and Mody (2000, NBER Working Paper 7458) | Collective action clauses lowered spreads for more creditworthy issuers and, if anything, raised them for less creditworthy ones | [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md) |
| Schlegl, Trebesch and Wright (2019, NBER Working Paper 25793) | Multilaterals are senior in practice; official bilateral debt is junior, or at least not senior, to bonds and bank loans | [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md) |
| Grossman and Hart (1980, *Bell Journal of Economics*) | The same free ride in takeover bids | [7.2](lessons/07-02-holdouts-and-collective-action-clauses.md) |
| Jackson (1986, *The Logic and Limits of Bankruptcy Law*, book) | The creditors' race is a common-pool problem, and creditors would agree to a collective procedure in advance | [7.3](lessons/07-03-designing-bankruptcy.md) |
| Eberhart, Moore and Roenfeldt (1990, *JF*) | In 30 Chapter 11 cases shareholders got 7.6 percent of the total beyond absolute priority, and share prices anticipated it | [7.3](lessons/07-03-designing-bankruptcy.md) |
| Weiss (1990, *JFE*) | Priority broken in 29 of 37 cases, mostly between unsecured creditors and shareholders | [7.3](lessons/07-03-designing-bankruptcy.md) |
| Bebchuk (1988, *Harvard Law Review*) | Options struck at face values divide a reorganized firm by priority without anyone agreeing on its value | [7.3](lessons/07-03-designing-bankruptcy.md) |
| Aghion, Hart and Moore (1992, *JLEO*) | An auction with Bebchuk's options: the decision is made by value, the division by priority | [7.3](lessons/07-03-designing-bankruptcy.md) |
| Kydland and Prescott (1977, *JPE*) | Rules versus discretion | [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md) |
| Dobbie and Song (2015, *AER*) | Chapter 13 protection raised earnings 5,562 dollars a year and cut five-year mortality 1.2 and foreclosure 19.1 percentage points | [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md) |
| Gropp, Scholz and White (1997, *QJE*) | Generous exemptions give low-asset households less credit, and they seem to pay more for car loans | [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md) |
| Mayer, Morrison, Piskorski and Gupta (2014, *AER*) | After Countrywide's settlement offered modifications, delinquency rose more than 0.54 percentage points, about a tenth | [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md) |
| Livshits, MacGee and Tertilt (2007, *AER*) | Bankruptcy's insurance against dearer credit: persistent shocks favor it, and for reasonable parameters the US system may be desirable | [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md) |
| Chatterjee, Corbae, Nakajima and Ríos-Rull (2007, *Econometrica*) | With every loan priced to zero profit, means testing Chapter 7 yields large welfare gains | [8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md) |
| Shiller (1993, *Macro Markets*, book) | Index coupon and principal to the level of nominal GDP | [8.3](lessons/08-03-relief-written-into-the-contract.md) |
| Borensztein and Mauro (2004, *Economic Policy*) | Index the coupon to growth and keep the principal fixed | [8.3](lessons/08-03-relief-written-into-the-contract.md) |
| Mian and Sufi (2014, *House of Debt*, book) | The shared-responsibility mortgage | [8.3](lessons/08-03-relief-written-into-the-contract.md) |
| Costa, Chamon and Ricci (2008, IMF Working Paper) | The premium on Argentina's GDP warrants fell about 600 basis points from December 2005 to July 2007: a novelty premium that decayed | [8.3](lessons/08-03-relief-written-into-the-contract.md) |
| Benford, Best and Joy (2016, Bank of England) | Estimates of a GDP risk premium of 35 to 150 basis points; no symmetric sovereign issue as of 2016 | [8.3](lessons/08-03-relief-written-into-the-contract.md) |
| Jayachandran and Kremer (2006, *AER*; first as Kremer and Jayachandran, NBER Working Paper 8953, 2002) | Odious debt: a loan sanction declared in advance is self-enforcing, and ruling before lending removes the pull between lenders and population | [8.4](lessons/08-04-odious-debt-as-a-rule.md) |

## Assumed, not taught here

Prerequisite tools the lessons use without deriving, in order of first use, with the lessons that lean on them. Syllabus-only courses are linked to their syllabus and the lesson number they plan.

| Fact | Where it is taught |
|---|---|
| The revelation principle: nothing is lost by studying contracts under which the borrower reports truthfully (1.1, 3.1, 7.3) | [`grad-game-theory` 5.2](../grad-game-theory/lessons/05-02-revelation-principle-incentive-compatibility.md) |
| Incentive compatibility and participation in mechanism design (1.1, 8.2) | [`grad-micro` 5.5](../grad-micro/lessons/05-05-mechanism-design-markets.md) |
| Expected utility, risk aversion and CRRA utility; Jensen's inequality and mean-preserving spreads (1.2, 2.3, 3.1, 6.2, 6.4, 8.1) | [`grad-micro` 2.5](../grad-micro/lessons/02-05-choice-under-uncertainty.md) |
| Adverse selection and the lemons logic (1.2, 2.2) | [`grad-micro` 5.1](../grad-micro/lessons/05-01-adverse-selection-lemons.md) |
| Signaling: an action read as information (2.2) | [`grad-micro` 5.2](../grad-micro/lessons/05-02-signaling.md) |
| Screening and single crossing (1.1, 1.3) | [`grad-micro` 5.3](../grad-micro/lessons/05-03-screening.md) |
| Moral hazard and the principal-agent incentive constraint (1.2, 1.3, 2.3, 3.2, 8.1, 8.3) | [`grad-micro` 5.4](../grad-micro/lessons/05-04-moral-hazard-principal-agent.md) |
| Monopoly pricing, marginal revenue equals marginal cost, the Lerner rule (1.4) | [`grad-micro` 6.1](../grad-micro/lessons/06-01-monopoly-price-discrimination.md) |
| The stochastic discount factor: why bunched defaults earn more than the expected loss (1.4) | [`mathematical-finance` 3.3](../mathematical-finance/lessons/03-03-expected-utility-stochastic-discount-factor.md) |
| The law of one price and arbitrage (2.1) | [`mathematical-finance` 1.1](../mathematical-finance/lessons/01-01-arbitrage-law-of-one-price.md) |
| Linear pricing with a stochastic discount factor, $p(Z)=\mathbb E[mZ]$ (2.1, 3.5) | [`grad-macro` 5.4](../grad-macro/lessons/05-04-consumption-based-asset-pricing.md) |
| CAPM betas (2.1) | [`mathematical-finance` 3.2](../mathematical-finance/lessons/03-02-capm.md) |
| General-equilibrium incidence of the corporate tax (2.2) | [`public-economics`](../public-economics/syllabus.md) 2.2 |
| The Black-Scholes formula (2.3) | [`mathematical-finance` 2.4](../mathematical-finance/lessons/02-04-black-scholes-formula.md) |
| Tobin's $q$: invest while an installed unit is worth more than it costs (2.4, 3.3, 5.3) | [`grad-macro` 5.3](../grad-macro/lessons/05-03-q-theory-investment.md) |
| Multiple equilibria and the Stag Hunt; focal points (3.1, 6.5, 8.4) | [`grad-game-theory` 2.4](../grad-game-theory/lessons/02-04-computing-characterizing-equilibria.md) |
| Iterated and weak dominance (3.2, 7.2) | [`grad-game-theory` 2.1](../grad-game-theory/lessons/02-01-normal-form-dominance-rationalizability.md) |
| Bayesian games, the setting of global games (3.2) | [`grad-game-theory` 4.1](../grad-game-theory/lessons/04-01-bayesian-games-bayes-nash.md) |
| The internal propagation of the basic real business cycle model is weak (3.3, 3.4) | [`grad-macro` 4.3](../grad-macro/lessons/04-03-propagation-impulse-responses.md) |
| The no-bubble forward solution of an asset price (3.4, 5.2) | [`grad-macro` 3.3](../grad-macro/lessons/03-03-money-rational-bubbles.md) |
| Euler equations and transversality (4.1, 5.1) | [`grad-macro` 1.3](../grad-macro/lessons/01-03-euler-transversality.md) |
| Hand-to-mouth households spend nearly every extra dollar (4.1, 4.3, 8.1) | [`grad-macro` 6.4](../grad-macro/lessons/06-04-heterogeneous-agent-taste.md) |
| The permanent-income saver's MPC $r/(1+r)$, Hall's random walk, Friedman's annuity rule (4.1, 5.3) | [`grad-macro` 5.1](../grad-macro/lessons/05-01-permanent-income-life-cycle.md) |
| The New Keynesian model, the zero lower bound, and fiscal multipliers there (4.1, 4.4, 5.1) | [`grad-macro` 6.1](../grad-macro/lessons/06-01-monetary-fiscal-nk.md) |
| Real rate equals the nominal rate less expected inflation; the Taylor principle and determinacy; inflation bias (4.1, 5.4, 5.5, 8.1) | [`grad-macro` 6.2](../grad-macro/lessons/06-02-policy-rules-taylor-principle.md) |
| Omitted-variable bias: forecasting a crisis is not causing one (4.2) | [`econometrics` 3.4](../econometrics/lessons/03-04-omitted-variable-bias.md) |
| Instrumental variables, the Wald estimate and the bias from a direct effect, $\delta/\pi$ (4.3, 8.1) | [`econometrics` 3.6](../econometrics/lessons/03-06-instrumental-variables.md) |
| Local average treatment effects and weak instruments (4.3) | [`econometrics` 3.8](../econometrics/lessons/03-08-weak-instruments-and-late.md) |
| Aggregation across units and Simpson's paradox (4.3) | [`econometrics` 4.1](../econometrics/lessons/04-01-panel-data-fixed-effects.md) |
| Difference-in-differences (4.3) | [`econometrics` 4.3](../econometrics/lessons/04-03-difference-in-differences.md) |
| Regression discontinuity (4.3) | [`econometrics` 4.7](../econometrics/lessons/04-07-regression-discontinuity.md) |
| Pigouvian taxes on externalities (4.4, 7.3) | [`grad-micro` 6.3](../grad-micro/lessons/06-03-externalities-coase-theorem.md) |
| The first welfare theorem and when it fails (4.4) | [`grad-micro` 4.4](../grad-micro/lessons/04-04-two-welfare-theorems.md) |
| Choosing between a tax and a quantity limit (4.4) | [`public-economics`](../public-economics/syllabus.md) Module 3 |
| The debt-ratio identity, first built and iterated (5.1 reloads it) | [`history-of-debt` 3.4](../history-of-debt/lessons/03-04-humes-prophecy-carrying-a-great-debt.md) |
| Ricardian equivalence (5.1, 5.3) | [`grad-macro` 3.4](../grad-macro/lessons/03-04-social-security-transfers.md) |
| Dynamic inefficiency and the chain of transfers when the return is below growth (5.2) | [`grad-macro` 3.2](../grad-macro/lessons/03-02-dynamic-inefficiency.md) |
| The Harberger triangle: deadweight loss grows with the square of the tax rate (5.3) | [`public-economics`](../public-economics/syllabus.md) 2.3 |
| The Ramsey rule for which taxes to use at one date (5.3) | [`public-economics`](../public-economics/syllabus.md) 4.1 |
| The revenue-maximizing tax rate $1/(1+e)$ (5.4) | [`public-economics`](../public-economics/syllabus.md) 5.1 |
| Grim trigger's threshold discount factor (6.2) | [`grad-game-theory` 3.3](../grad-game-theory/lessons/03-03-repeated-games-finite-infinite.md) |
| Minmax payoffs and folk theorems: many equilibria, autarky as the harshest punishment (6.2, 6.3, 8.4) | [`grad-game-theory` 3.4](../grad-game-theory/lessons/03-04-folk-theorems.md) |
| Bargaining: splitting a surplus after a threat (6.3, 7.2, 7.3) | [`grad-game-theory` 3.5](../grad-game-theory/lessons/03-05-bargaining.md) |
| The principle of optimality and the contraction mapping (6.4) | [`grad-macro` 1.2](../grad-macro/lessons/01-02-principle-of-optimality.md) |
| Stochastic dynamic programming and Markov chains (6.4, 8.2) | [`grad-macro` 1.5](../grad-macro/lessons/01-05-stochastic-dynamic-programming.md) |
| Precautionary saving, buffer stocks and fixed borrowing limits (6.4, 8.1) | [`grad-macro` 5.2](../grad-macro/lessons/05-02-precautionary-saving.md) |
| Pricing a coupon bond by discounting its cash flows (7.1) | [`mathematical-finance` 4.1](../mathematical-finance/lessons/04-01-term-structure-bond-pricing.md) |
| The envelope theorem (7.1) | [`grad-micro` 1.4](../grad-micro/lessons/01-04-envelope-theorem-duality.md) |
| Public goods and free riding (7.2) | [`grad-micro` 6.4](../grad-micro/lessons/06-04-public-goods.md) |
| The capital levy and time inconsistency (8.1) | [`public-economics`](../public-economics/syllabus.md) 6.2 |
| Correlated equilibrium: a public signal everyone follows (8.4) | [`grad-game-theory` 2.5](../grad-game-theory/lessons/02-05-correlated-equilibrium.md) |
| Bertrand competition (8.4) | [`game-theory-refresher` 1.4](../game-theory-refresher/lessons/01-04-cournot-bertrand-applications.md) |

## Pitfalls

Every lesson's "Watch out", one line per trap, grouped by theme: the wrong belief, then the correction.

### Prices, premia and who pays them

- A risk premium is not the expected loss $p(1-\lambda)$: the borrowers who repay also cover the defaulters' funding cost, 1.88 points more in the risk layer of 1.4's loan B. *([1.4](lessons/01-04-the-price-of-a-loan.md))*
- A high rate does not reveal a markup: loan B's 24 percent is all cost, and only default, recovery and cost data split $r^{zp}$ from $\mu$. *([1.4](lessons/01-04-the-price-of-a-loan.md))*
- A usury cap does not lower rates under competition: borrowers under it pay what they paid before and those above it are refused; a cap lowers rates only where it bites on a markup. *([1.4](lessons/01-04-the-price-of-a-loan.md))*
- A high enough rate does not always cover the risk: if raising the rate changes who borrows or what they do, the lender's return peaks, and a borrower willing to pay more is refused. *([1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md), [1.4](lessons/01-04-the-price-of-a-loan.md))*
- Rationed credit is not expensive credit: the rate is held below what some of the refused would pay, and quantity does the allocating; Stiglitz-Weiss's second kind, red-lining, refuses whole groups at any rate. *([1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md))*
- The external finance premium is not the loan rate minus the safe rate: most of that gap pays for promises bad years break; at $N=25$ the promised rate is 15.5 percent, 11.5 points over safe, and the premium is 4.1 of them. *([3.3](lessons/03-03-the-financial-accelerator.md))*
- A low-net-worth borrower does not pay more because her project is worse: 3.3's projects are identical and only her stake differs, which is why a wealth shock that says nothing about projects still moves investment. *([3.3](lessons/03-03-the-financial-accelerator.md))*
- The higher rate is not what a discharge costs: a fairly priced discharge is insurance and the rate rise is its premium; the cost is the part of the rate that prices lost care or strategic filing. *([8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md))*
- A scheduled release does not make credit dearer: a competitive lender still earns its cost of funds; near the date the loan is squeezed into fewer, larger payments, and 8.2's 13.9 percent quote is that squeeze, not a profit. *([8.2](lessons/08-02-the-scheduled-release.md))*
- Deviations from absolute priority are not a loss creditors simply absorb: they are anticipated, share prices already reflected them, and lenders charge for them up front. *([7.3](lessons/07-03-designing-bankruptcy.md))*
- An ex post odious-debt rule does not cost lenders: they break even under every rule; the premium falls on the borrowers who repay, and the real loss is the projects it prices out. *([8.4](lessons/08-04-odious-debt-as-a-rule.md))*
- Indexed debt is not cheap relief: fair pricing makes the good states pay for the bad; only $\Delta$ is free, and it must cover verification, the novelty premium and any GDP risk premium. *([8.3](lessons/08-03-relief-written-into-the-contract.md))*
- Not all inflation erodes debt: only inflation the interest rate did not price, either a surprise on debt already issued or inflation with rates held down. *([5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md))*

### What the contract models assume

- Costly state verification does not make debt optimal, full stop: only with deterministic verification; with random audits and a risk-averse borrower (Mookherjee and Png) debt is never optimal. *([1.1](lessons/01-01-costly-state-verification.md))*
- The revenue ceiling is not the borrower refusing to pay more: she would sign any face value that got her the loan; the lender stops, because past $D^*$ a bigger promise earns him less. *([1.1](lessons/01-01-costly-state-verification.md))*
- "Verification" is not an auditor's fee: in practice it is bankruptcy, which 2.2 prices and 7.3 designs around. *([1.1](lessons/01-01-costly-state-verification.md))*
- The model does not forbid contingent debt: it forbids payments that vary with what only the borrower sees; a sea loan or a GDP-indexed bond keys on a public event, whose own verification returns in 8.3. *([1.1](lessons/01-01-costly-state-verification.md))*
- The drop in the bank's return does not by itself make it ration: its peak must also beat every higher rate; give Example 1's long shots the safe mean and squeezing them pays 125, and Stiglitz-Weiss's Theorem 6 allows loans at two rates. *([1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md))*
- Collateral does not cure rationing: if the wealthy are the least risk-averse (decreasing absolute risk aversion) they run riskier projects, so a higher collateral requirement can worsen the pool. *([1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md))*
- Stiglitz-Weiss do not explain why loans are debt: they take the contract as given; with same-mean types de Meza and Webb show equity is the equilibrium form, so debt's case rests on 1.1's verification cost. *([1.2](lessons/01-02-credit-rationing-stiglitz-weiss.md))*
- The minimum incentive stake is not a risk premium: everyone is risk-neutral; it is a rent created by limited liability, and competition among lenders cannot bid it away. *([1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md))*
- Collateral does not always signal safety: in Bester the safe type pledges more, in Holmström-Tirole the weaker borrowers are asked to pledge; the two predict opposite correlations. *([1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md))*
- A big bank is not safe because it is big: $\phi_N$ falls only if loans fail independently; with one common shock it stays at its one-loan value however many loans the bank holds. *([1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md))*
- Diversification does not make every shortfall less likely: the chance of some shortfall rises from 10 to 26 percent between one loan and ten; what falls is the expected shortfall, which $\phi_N$ measures. *([1.3](lessons/01-03-pledgeable-income-collateral-and-monitors.md))*

### Leverage, overhang and risk shifting

- Debt is not the cheap source of funds: each dollar makes the remaining equity riskier and dearer, and the WACC does not fall; 2.1 Example 1's 8.8 percent is the error. *([2.1](lessons/02-01-modigliani-miller.md))*
- $r_D$ is not the bonds' promised yield: it is their expected return after default losses, and confusing the two gives a wrong $r_E$. *([2.1](lessons/02-01-modigliani-miller.md))*
- MM I does not mean no one cares about leverage: it fixes only the total; with risky debt outstanding, a change in leverage moves value between classes, which is why lenders write covenants. *([2.1](lessons/02-01-modigliani-miller.md))*
- MM does not claim capital structure is irrelevant in practice: it lists exactly what would make it relevant; read it as a checklist. *([2.1](lessons/02-01-modigliani-miller.md))*
- The tax shield does not create value: it moves it from the Treasury to investors; only distress costs change the total, and $D^*$ maximizes the investors' slice. *([2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md))*
- $T_cD$ is not what any borrowing is worth: a firm with tax losses gains little, a 10-year loan at 6 percent gains 44 percent of it, and personal taxes can cut it to a quarter or, under Miller, to zero. *([2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md))*
- The expected distress cost is not the cost of going bankrupt: $C(D)$ is probability times cost, so a firm unlikely to default bears almost none of it. *([2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md))*
- The price drop on announcing an equity issue does not mean the issue destroys value: it reveals which firm is issuing (110 to 70 in 2.2 Example 2), and the issue itself adds its NPV. *([2.2](lessons/02-02-taxes-bankruptcy-costs-trade-off-theory.md))*
- Risk shifting does not take bad faith: it is what maximizing equity prescribes under limited liability; whether it is blameworthy is [`philosophy-of-debt` 5.2](../philosophy-of-debt/lessons/05-02-moral-hazard-and-fairness-to-those-who-paid.md)'s question. *([2.3](lessons/02-03-agency-costs-of-debt-and-equity.md))*
- Creditors are not the victims of anticipated risk shifting: it is priced at issue, so the owners bear the value it destroys; only debt outstanding when an unforeseen gamble arrives loses. *([2.3](lessons/02-03-agency-costs-of-debt-and-equity.md))*
- The transfer is not the agency cost: the cost is the value destroyed; 2.3's first swap moves 15.7 while firm value stays at 100. *([2.3](lessons/02-03-agency-costs-of-debt-and-equity.md))*
- The pull to gamble is not strongest in healthy firms: it grows with leverage and is largest near and past the default boundary, gambling for resurrection. *([2.3](lessons/02-03-agency-costs-of-debt-and-equity.md))*
- Overhang is not a cash problem: raising the cost by selling fair-priced shares changes nothing, and the old shareholders still end at 26, below 30. *([2.4](lessons/02-04-debt-overhang.md))*
- Overhang does not need insolvency: 2.4's firm is worth 104 on average against debt of 100; a chance of default in states where the project pays is enough. *([2.4](lessons/02-04-debt-overhang.md))*
- Overhang and risk shifting are not rival stories: they are one payoff split read twice; the firm that refuses the machine would swap its assets for a lottery paying 170 or 0 (mean 102) that lifts equity from 30 to 42. *([2.4](lessons/02-04-debt-overhang.md))*
- Not every debt that may default is on the wrong side of the Laffer curve: $V$ falls only where the overhang term beats the direct one, above 90 in 7.1 Example 2 though default is possible from 30. *([7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md))*
- A deep discount alone does not put a debt on the wrong side: with capacity fixed and no incentive effect $V'(D)=\Pr(Y>D)\ge0$, so a write-down is a pure transfer. *([7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md))*
- Buybacks do not fail for every debtor: the result rests on cash beyond creditors' reach; in Bulow and Rogoff's "corporate" case a buyback favors the debtor. *([7.1](lessons/07-01-haircuts-the-debt-laffer-curve-and-buybacks.md))*
- A Jubilee does not only move money between buyer and seller: a holder with 5 harvests left will not plant an orchard that first bears in year 8, the overhang wedge again. *([8.2](lessons/08-02-the-scheduled-release.md))*

### Runs, rollovers and holdouts

- A run does not need bad news: $R$ is certain and the bank pays everyone if nobody panics; the run is self-fulfilling. *([3.1](lessons/03-01-diamond-dybvig.md))*
- $f^*$ is not the share of patient depositors who must panic: it counts all withdrawals; the panic needed is $(f^*-\pi)/(1-\pi)$, 40 percent in 3.1 Example 1, not 70. *([3.1](lessons/03-01-diamond-dybvig.md))*
- The resource constraint is not $\pi c_1+(1-\pi)c_2=1$: date-2 payments are divided by $R$, and dropping it gives $c_1^*=0.8$, below the deposit. *([3.1](lessons/03-01-diamond-dybvig.md))*
- Depositors who run are not irrational: above $f^*$ withdrawing is the best reply; the failure is one of coordination. *([3.1](lessons/03-01-diamond-dybvig.md))*
- A tool that is never used is not free: suspension strands the needy in a bad week, insurance changes what the bank does with the money, and a lender banks count on lets them hold thinner reserves. *([3.2](lessons/03-02-stopping-runs.md))*
- Bagehot's rate should not be as high as possible: the fine comes out of the waiters' pot, and above $c_2/c_1$ the run survives; at 1.5, 3.2's bank is still run once 76 percent withdraw. *([3.2](lessons/03-02-stopping-runs.md))*
- Deposit insurance does not end all runs: only runs by the insured; deposits above the limit, like most of SVB's, still run, and so does repo funding. *([3.2](lessons/03-02-stopping-runs.md), [3.5](lessons/03-05-the-leverage-cycle.md))*
- A default in the crisis zone does not prove the debt was unpayable: at the same $b$ the government would have paid had lenders rolled over. *([6.5](lessons/06-05-self-fulfilling-debt-crises.md))*
- A costlier default does not close the crisis zone: it moves it up and widens it ($K=0.9$ turns $(0.4,\,0.8]$ into $(0.432,\,0.9]$), and a government that borrows into the new room is exposed again. *([6.5](lessons/06-05-self-fulfilling-debt-crises.md))*
- Calvo's bad equilibrium is not always available: it needs lenders to set the price before the government decides how much to issue. *([6.5](lessons/06-05-self-fulfilling-debt-crises.md))*
- A more generous exchange offer does not fix the holdout problem: it raises $\hat\theta$; only lowering $h$ or binding the minority helps. *([7.2](lessons/07-02-holdouts-and-collective-action-clauses.md))*
- The holdout free ride is not 3.1's coordination failure while $h>v$: all-accept is then no equilibrium at all, as in a prisoner's dilemma; 3.1's two equilibria appear only once $h<v$. *([7.2](lessons/07-02-holdouts-and-collective-action-clauses.md))*
- Collective action clauses did not end holdouts: a series-by-series clause invites a blocking stake in the smallest series, and no bond clause reaches the IMF, a secured lender or a bilateral official creditor. *([7.2](lessons/07-02-holdouts-and-collective-action-clauses.md))*
- Holdouts did not sink most bond restructurings: exchanges since the late 1990s were mostly quick; Argentina 2005 combined a deep haircut with no participation threshold and no exit consents. *([7.2](lessons/07-02-holdouts-and-collective-action-clauses.md))*
- The automatic stay does not forgive debt: it only freezes collection; cancelling the unpaid rest is the discharge of 8.1. *([7.3](lessons/07-03-designing-bankruptcy.md))*

### Collateral, cycles and amplification

- The accelerator does not need the premium to stay high: in 3.3 Example 2 it is back at 3.0 percent once investment is cut; what lasts is the smaller scale and the smaller net worth it leaves. *([3.3](lessons/03-03-the-financial-accelerator.md))*
- Kiyotaki-Moore's amplification is not the loop within the period: with the future held fixed the price moves 0.2 percent, and the full 1 percent comes from pricing lower user costs in every later period. *([3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md))*
- Persistence does not need a persistent shock: farmers carry no equity in land from one period to the next, so net worth is the harvest from last period's land. *([3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md))*
- The linear formulas do not hold for any shock: the exact model is asymmetric and can break (beyond about a 2.3 percent shortfall in 3.4's economy), and a self-fulfilling second equilibrium exists even with no shock. *([3.4](lessons/03-04-kiyotaki-moore-collateral-cycles.md))*
- Leverage does not raise prices because credit is cheap: the interest rate is zero throughout; the loan per unit decides how few optimists can hold the whole supply. *([3.5](lessons/03-05-the-leverage-cycle.md))*
- The price is not average opinion: it is the marginal buyer's valuation, 0.75, 0.9, 0.8625 or 0.85 in 3.5's examples while average opinion stays 0.8. *([3.5](lessons/03-05-the-leverage-cycle.md))*
- Lenders do not size the loan by the collateral's expected value: it is set by the worst case $d$, so news that worsens the worst case raises margins. *([3.5](lessons/03-05-the-leverage-cycle.md))*
- Pessimists could not simply bet against a price above average opinion: they cannot sell short; Geanakoplos argues the mortgage credit default swaps of late 2005 gave them a way, in effect adding supply. *([3.5](lessons/03-05-the-leverage-cycle.md))*
- Real rates near zero do not show there is no shortage of demand: the natural rate is unobserved, and at the floor the actual real rate sits above it; that gap is the shortage. *([4.1](lessons/04-01-fishers-debt-deflation-formalized.md))*
- Falling prices are not contractionary in themselves: a lower price level matters only because debts are fixed in money, moving goods from MPC-one borrowers to low-MPC savers. *([4.1](lessons/04-01-fishers-debt-deflation-formalized.md))*
- The paradox of flexibility does not condemn flexible prices: it needs the zero lower bound and no expected catch-up in prices. *([4.1](lessons/04-01-fishers-debt-deflation-formalized.md))*
- Minsky's classes do not measure leverage: they measure timing; the same debt is hedge when amortized and speculative in the year a lump of principal falls due. *([4.2](lessons/04-02-minsky-informally-and-formally.md))*
- "Ponzi" does not mean insolvent: it is a cash-flow class; a Ponzi unit whose cash flow grows faster than $i-Y/D$ is solvent, and a government with $r<g$ can roll over indefinitely. *([4.2](lessons/04-02-minsky-informally-and-formally.md))*
- Diagnostic expectations are not just optimism: they overreact in both directions, and with $b=0$ there is no distortion at all. *([4.2](lessons/04-02-minsky-informally-and-formally.md))*
- A price that falls when everyone borrows is not by itself a reason to tax borrowing: a price change is a transfer, and at $\lambda=1$ the wedge is zero however steep the fire sale. *([4.4](lessons/04-04-overborrowing.md))*
- Fire sales do not always mean overborrowing: if the buyers were the cash-starved side, the planner would want more borrowing; distributive externalities can go either way. *([4.4](lessons/04-04-overborrowing.md))*
- "Overborrowing" does not mean more debt than a frictionless economy would carry: the benchmark is a planner facing the same frictions; Lorenzoni's equilibrium borrows less than the first best yet can borrow more than the constrained optimum. *([4.4](lessons/04-04-overborrowing.md))*

### Reading the evidence

- A cross-county estimate is not the national effect: it is relative, and the estimate that housing losses explain almost 40 percent of the 2006-09 spending shortfall assumes no general-equilibrium shift. *([4.3](lessons/04-03-household-debt-and-the-great-recession.md))*
- IV close to OLS does not validate the instrument: both can be biased the same way; balance checks are evidence on exclusion, not tests of it. *([4.3](lessons/04-03-household-debt-and-the-great-recession.md))*
- History does not tie slumps to defaults as tightly as the Arellano model does: of 169 defaults since 1820 about 62 percent began with output below trend, on average only 1.6 percent below (Tomz and Wright). *([6.4](lessons/06-04-the-arellano-model.md))*

### Public debt, taxes and inflation

- The debt-stabilizing surplus does not stabilize the debt: with $r>g$ it only holds the ratio where it is, and any shock compounds at $a$. *([5.1](lessons/05-01-the-government-budget-constraint.md))*
- Sustainability does not require a stable ratio: the IBC needs only debt growing more slowly than $a$, so a rule with $0<\rho<a-1$ is solvent while the ratio climbs forever. *([5.1](lessons/05-01-the-government-budget-constraint.md))*
- A consolidation that raises the ratio in year one has not failed: the rise comes from a depressed denominator, and the higher surplus keeps working once output recovers, unless the loss persists or the higher ratio raises the rate. *([5.1](lessons/05-01-the-government-budget-constraint.md))*
- $r<g$ does not license any deficit: only at a ratio, $d^*=(1+g)\delta/(g-r)$; with a gap of about 1 point a 3 percent deficit settles near 300 percent of GDP. *([5.2](lessons/05-02-when-r-is-less-than-g.md))*
- The low average rate on today's debt is not the rate that matters: new deficits pay the marginal rate, the rate on new issues plus what they add to the rate on the rest. *([5.2](lessons/05-02-when-r-is-less-than-g.md))*
- A safe rate below growth does not make debt costless: the fiscal cost and the welfare cost differ, and crowding out is priced at the return on capital. *([5.2](lessons/05-02-when-r-is-less-than-g.md))*
- Tax smoothing does not mean smooth revenue: it smooths the rate, so when a slump shrinks the base the deficit absorbs the shortfall. *([5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md))*
- A martingale tax rate is not a constant one: only its forecast is flat; every surprise moves it for good, and an anticipated war moves it on the day it is announced. *([5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md))*
- Contingent debt is not a polite default: its low payment in the bad state was priced at issue and paid for in the good state. *([5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md))*
- Smoothing does not license deficits in general: only for the temporary part of spending; a permanent program raises $G^P$ one for one and is taxed at once. *([5.3](lessons/05-03-tax-smoothing-and-optimal-debt.md))*
- Unpleasant monetarist arithmetic does not make tight money futile in general: it needs both $r>g$ and a fiscal path that ignores monetary policy. *([5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md))*
- A government cannot always print its way out: seigniorage peaks at $k/(\alpha e)$, and a need above it is met at no inflation rate. *([5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md))*
- "Active" does not mean hawkish: in Leeper's sense it means ignoring the debt, and a treasury at its fiscal limit is active whether it wants to be or not. *([5.4](lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md))*
- The fiscal theory is not 5.4's printing press: it revalues nominal bonds, needs no money printed, and works in a cashless economy. *([5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md))*
- The fiscal theory does not say deficits cause inflation: only news that lowers the present value of surpluses moves prices. *([5.5](lessons/05-05-the-fiscal-theory-and-inflating-debt-away.md))*

### Sovereign enforcement

- $X\eta_X+M\eta_M$ does not always give the required depreciation: only for a price taker; a country selling its own goods needs the Marshall-Lerner denominator $X(\eta_X+\eta_M-1)$, triple the depreciation in 6.1 Example 1. *([6.1](lessons/06-01-the-transfer-problem-and-original-sin.md))*
- The transfer problem is not about currency: it is about who is owed; the currency decides only who bears a depreciation. *([6.1](lessons/06-01-the-transfer-problem-and-original-sin.md))*
- A fixed exchange rate does not escape original sin: it spreads it, since falling home prices raise the ratio of all nominal debt to GDP (88, not 84, in 6.1 Example 1). *([6.1](lessons/06-01-the-transfer-problem-and-original-sin.md))*
- Lenders who pull back are not panicking: each responds to a ratio that really has risen; the loop's gain is a property of the whole system. *([6.1](lessons/06-01-the-transfer-problem-and-original-sin.md))*
- Exclusion does not enforce itself: it asks every lender to turn away a country that would pay for insurance; Kletzer and Wright's cheat-the-cheater sustains lending another way. *([6.2](lessons/06-02-reputation-and-eaton-gersovitz.md))*
- Steadier income does not make a better credit in Eaton-Gersovitz: the only thing that makes the country pay is the insurance it would lose. *([6.2](lessons/06-02-reputation-and-eaton-gersovitz.md))*
- "Reputation" here is not lenders learning types: every country is the same and nothing is learned; reputation is the lenders' strategy. *([6.2](lessons/06-02-reputation-and-eaton-gersovitz.md))*
- Bulow-Rogoff does not say sovereigns never repay: it says the threat of losing credit cannot be why they repay. *([6.3](lessons/06-03-bulow-rogoff-and-sanctions.md))*
- A longer credit boycott would not fix it: the defaulter never borrows again anyway; a ban on saving abroad is what would bite. *([6.3](lessons/06-03-bulow-rogoff-and-sanctions.md))*
- The Bulow-Rogoff deviation does not depend on patience or risk aversion: it raises consumption in every state, but it must start at a peak (a bad-year default leaves 0.60). *([6.3](lessons/06-03-bulow-rogoff-and-sanctions.md))*
- The temptation to default on non-contingent debt does not peak in booms: the debt falls due in full in every state, and paying hurts most in a slump. *([6.4](lessons/06-04-the-arellano-model.md))*
- The asymmetric output cost is not what makes default come in slumps: risk aversion alone does; the cap sharpens the pattern and widens the band of debt with a finite spread. *([6.4](lessons/06-04-the-arellano-model.md))*
- Value function iteration need not converge here: the contraction argument covers the government's problem for a given $q$, not the joint loop in values and prices. *([6.4](lessons/06-04-the-arellano-model.md))*
- Indexation does not end sovereign default: it cures inability to pay, not unwillingness. *([8.3](lessons/08-03-relief-written-into-the-contract.md))*
- The GDP warrants of Argentina, Greece and Ukraine were not relief written into the contract: they only ever paid extra, and the relief came from the haircut they were attached to. *([8.3](lessons/08-03-relief-written-into-the-contract.md))*

### Relief and commitment

- A government cannot simply promise to stop at $\bar\theta$: a promise it would gain by breaking once care is sunk is priced as if broken; commitment needs a rule that is costly to revise. *([8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md))*
- A write-down that raises total value after the fact is not free: its anticipation is priced, so an ex post Pareto improvement is not an ex ante one. *([8.1](lessons/08-01-forgiveness-commitment-and-the-fresh-start.md))*
- The undiscounted count of harvests is not a harmless simplification: it is right only near the Jubilee; with 40 harvests left at 4 percent it says 40 against 19.8. *([8.2](lessons/08-02-the-scheduled-release.md))*
- A loan sanction does not stop a secure ruler from borrowing: one likely to survive borrows at $(1+r_f)/s$, and his successor repays nothing if he falls. *([8.4](lessons/08-04-odious-debt-as-a-rule.md))*
- Ruling in advance does not remove bias: it removes only the pull between lenders and population; a judge who favors or dislikes a particular government is as dangerous before the loan as after, hence the supermajority. *([8.4](lessons/08-04-odious-debt-as-a-rule.md))*
