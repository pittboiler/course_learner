# Economics of Debt · Lesson 4.2: Minsky, informally and formally

> ⏱ ~15 min · Module 4: Debt-deflation, Minsky and 2008 · Builds on: [4.1 Fisher's debt-deflation, formalized](04-01-fishers-debt-deflation-formalized.md), [3.5 The leverage cycle](03-05-the-leverage-cycle.md) · Unlocks: [4.3 Household debt and the Great Recession: the evidence](04-03-household-debt-and-the-great-recession.md), [4.4 Overborrowing: when private leverage is too high](04-04-overborrowing.md)

## Why this matters

Fisher's debt-deflation ([4.1](04-01-fishers-debt-deflation-formalized.md)) starts once debts are already too high. Hyman Minsky asked how they got that way, and his answer was uncomfortable: the calm does it. A long stretch without trouble teaches borrowers and lenders to live on thinner margins, until an ordinary rise in interest rates forces a wave of selling. For decades this stayed a narrative, outside mainstream models. This lesson turns Minsky's three kinds of borrower into inequalities you can compute, then asks which modern models capture the claim that stability breeds fragility, and what the data do and do not show.

## The idea

Three owners of rental buildings each collect 100 a year in rent after expenses.

- **Ann** owes 50 of interest and 30 of scheduled principal this year. Rent covers both. She is a **hedge** unit: she could pay her lender even if nobody ever lent to her again.
- **Ben** owes 70 of interest and 50 of principal. Rent covers the interest but only 30 of the principal, so he must refinance the other 20. He is **speculative**: fine as long as lenders keep rolling his loan over.
- **Cal** owes 120 of interest. Rent does not even cover that, so he borrows 20 just to pay interest, and his debt grows. He is a **Ponzi** unit, which in Minsky's usage names a cash-flow position, not a fraud: his plan works only if rents or the building's price rise.

Minsky's "The Financial Instability Hypothesis" (Levy Institute Working Paper 74, 1992; at book length, *Stabilizing an Unstable Economy*, 1986) makes two claims about such units. An economy dominated by hedge finance damps shocks, and the more weight falls on speculative and Ponzi finance, the more it amplifies them. And a long prosperity shifts the mix from the first toward the second: Anns become Bens, Bens become Cals. The trigger can be routine. If the central bank tightens against inflation, speculative units become Ponzi units, those short of cash must sell assets to raise it, and the asset prices that secure everyone else's loans collapse. The shorthand is *stability is destabilizing*. Why a calm should shift the mix is the part Minsky left verbal, and it is where the modern models come in.

## The formal version

**The classification.** Take one unit (a firm, household or bank) over one period. Let $Y$ be its operating cash flow, $D$ its debt, $i$ the interest rate it pays, and $P$ the principal falling due. Minsky's classes are three [cash-flow inequalities](../reference.md#minsky-classification):

$$
\begin{aligned}
\text{hedge:}\quad & Y \ge iD + P,\\
\text{speculative:}\quad & iD \le Y < iD + P,\\
\text{Ponzi:}\quad & Y < iD.
\end{aligned}
$$

*In words:* a hedge unit pays interest and principal from income, a speculative unit pays the interest but must roll over some principal, and a Ponzi unit must borrow or sell assets even to pay interest.

Solving the boundaries for the rate gives two cutoffs: the unit is hedge up to $i_H = (Y-P)/D$ and Ponzi above $i_P = Y/D$. *In words:* for a given balance sheet, a rise in $i$ moves a unit down the list, and a fall in $Y$ lowers both cutoffs, which does the same. If the unit refinances any shortfall $N = iD + P - Y > 0$, its year-end debt is

$$D' = D - P + N = (1+i)D - Y,$$

which exceeds $D$ exactly when $Y < iD$. *In words:* speculative units roll debt over without adding to it; only Ponzi units' debt grows.

**Liquidity, not solvency.** Suppose the unit can always refinance at $i$ and its cash flow, $Y$ this period, grows at rate $g < i$ thereafter. The cash flows are worth $Y/(i-g)$, so the unit is solvent if and only if

$$Y \ge (i-g)\,D .$$

Set against $Y < iD$, a [Ponzi unit is solvent](../reference.md#ponzi-finance-and-growth) exactly when $g \ge i - Y/D$. *In words:* speculative finance bets that lenders keep rolling; Ponzi finance adds a bet on growth, or on selling assets at a good price.

**Why a calm shifts the mix.** Two formal routes deliver Minsky's drift.

*Beliefs.* Bordalo, Gennaioli and Shleifer (2018, *Journal of Finance*) build [diagnostic expectations](../reference.md#diagnostic-expectations) on Kahneman and Tversky's representativeness heuristic. A fundamental, say an index of borrowers' cash flow, follows $\omega_{t+1} = b\,\omega_t + \epsilon_{t+1}$ with $\epsilon \sim N(0,\sigma^2)$ and persistence $0 \le b \le 1$. Agents overweight the future states whose likelihood rose most with the latest news. With normal shocks the believed distribution is still normal with variance $\sigma^2$, and its mean is

$$
\begin{aligned}
\mathbb{E}^\theta_t[\omega_{t+1}] &= \mathbb{E}_t[\omega_{t+1}] + \theta\big(\mathbb{E}_t[\omega_{t+1}] - \mathbb{E}_{t-1}[\omega_{t+1}]\big)\\
&= b\,\omega_t + \theta\, b\,\epsilon_t ,
\end{aligned}
$$

where $\mathbb{E}_t$ is the rational forecast, $\epsilon_t = \omega_t - b\,\omega_{t-1}$ is this period's news, and $\theta \ge 0$ measures the distortion ($\theta = 0$ is rational expectations). *In words:* beliefs move in the right direction but too far. After good news the left tail, where defaults live, is underweighted, and the average forecast error, $-\theta b \epsilon_t$, is predictable. Unlike mechanical extrapolation, which projects any recent change forward, the distortion vanishes when news says nothing about the future ($b=0$). In their credit market, spreads fall too far after good news and then reverse predictably.

*Rational margins.* Calm can raise leverage without any bias. In the [leverage cycle](../reference.md#leverage-cycle) of [3.5](03-05-the-leverage-cycle.md), what can be borrowed against an asset is set by its bad-state payoff, so a calm that makes the worst case look milder raises leverage. Brunnermeier and Sannikov (2014, *American Economic Review*) find that with leverage chosen endogenously, crises keep their violence even when exogenous risk is very low, which they call the volatility paradox.

**The evidence.** López-Salido, Stein and Zakrajšek (2017, *Quarterly Journal of Economics*), with U.S. data from 1929: when corporate spreads are narrow relative to their norms and junk bonds are a high share of issuance, [credit-market sentiment](../reference.md#credit-market-sentiment) in year $t-2$ predicts wider spreads and weaker GDP, investment and employment in years $t$ and $t+1$. Schularick and Taylor (2012, *American Economic Review*), across 14 developed countries from 1870 to 2008: lagged growth of real bank loans predicts banking crises in a logit, which makes crises "credit booms gone bust", the title of their paper. Their working paper reports an area under the ROC curve of about 0.72 (0.5 is a coin toss, 1 is perfect). Both are [forecasting results](../reference.md#credit-booms-and-crises): fragility is visible before the shock, as Minsky claimed. Neither by itself shows that credit causes the bust, since optimism could drive both. López-Salido, Stein and Zakrajšek face this rival directly, testing for a credit-supply channel in the mix of finance: net debt issuance falls while equity issuance rises.

**Policy, positively.** Minsky's 1992 statement counts the interventions meant to contain cycles as part of what shapes them, and Schularick and Taylor call it an open question whether the prospect of rescues fed postwar leverage. If rescues are expected, leveraged units and their creditors gain, whoever funds the rescue pays, and margins of safety shrink before the next boom. Whether private leverage is then too high is [4.4](04-04-overborrowing.md)'s question.

## Picture

![Interest rate on the horizontal axis and cash flow on the vertical: two parallel lines, cash flow equal to interest plus principal and cash flow equal to interest, split the plane into hedge, speculative and Ponzi regions; a unit with cash flow 70 moves right from hedge at 3 percent through speculative at 6 percent to Ponzi at 8 percent](assets/04-02-fig1.svg)

The lines are parallel with slope $D$, and the speculative band between them is exactly $P$ tall. A unit with fixed cash flow crosses into speculative finance at $i_H$ and into Ponzi finance at $i_P$; a fall in cash flow moves it straight down across the same lines.

## Worked examples

**Example 1 (clean): one balance sheet, three rates.** An office building earns $Y = 70$ a year on debt $D = 1{,}000$, with $P = 25$ of principal due this year (the figure). The cutoffs are $i_H = 45/1{,}000 = 4.5\%$ and $i_P = 70/1{,}000 = 7\%$.

| Rate | Interest | Interest + principal | Class | Must borrow | Year-end debt |
|---|---|---|---|---|---|
| 3% | 30 | 55 | hedge | 0 (15 to spare) | 975 |
| 6% | 60 | 85 | speculative | 15 | 990 |
| 8% | 80 | 105 | Ponzi | 35 | 1,010 |

At 8% the building is solvent only if its cash flow grows at least $8\% - 7\% = 1\%$ a year; at 10% the bar is 3%. Rates are not the only route: at 6%, a fall of more than a seventh in cash flow, to below 60, makes it Ponzi with no change in rates.

**Example 2 (why you'd care): a quiet year that raises rates.** Lenders make one-year loans to a risky class of borrowers who default when $\omega_{t+1} < -1.5$, recovering nothing. With a safe rate $r_f = 2\%$, competition sets the [zero-profit loan rate](../reference.md#zero-profit-loan-rate) of [1.4](01-04-the-price-of-a-loan.md), $1 + i = 1.02/(1-\pi)$, where $\pi$ is the default probability lenders believe. Take $b = 0.8$, $\sigma = 1$ and $\theta = 1$ (illustrative), and write $\Phi$ for the standard normal CDF. In a normal year ($\omega = 0$), $\pi = \Phi(-1.5) = 6.7\%$ and the rate is 9.3%.

Now a good year: $\epsilon_t = 1$, so $\omega_t = 1$.

- Rational forecast $0.8$: $\pi = \Phi(-2.3) = 1.07\%$, rate 3.11%.
- Diagnostic forecast $0.8 + 1 \times 0.8 \times 1 = 1.6$: $\pi = \Phi(-3.1) = 0.10\%$, rate 2.10%.

The next year brings no news at all. Then $\omega_{t+1} = 0.8$, and both kinds of lender forecast $0.64$, so $\pi = \Phi(-2.14) = 1.62\%$ and the rate is 3.68%. The rational rate rises 0.57 points, which is ordinary mean reversion. The diagnostic rate rises 1.58 points: the extra point is the overreaction unwinding, a rise the low rate itself predicted. A borrower in this class whose cash flow is 3% of its debt, rolling one-year loans, covers its interest at 2.10% but not at 3.68%. A year without bad news has made it a Ponzi unit; a rational lender, charging 3.11%, would have seen one all along. That is Minsky's sequence, with beliefs rather than the central bank pulling the trigger.

## Watch out

- **You might think the classes measure leverage, but actually they measure timing.** The same debt is hedge when amortized from income and speculative in any year a lump of principal falls due. The pre-1930 mortgages of [`history-of-debt` 6.1](../../history-of-debt/lessons/06-01-the-american-mortgage-and-2008.md), often interest-only with the principal due after about five years, made owners speculative in the year the loan came due; after 1930, when lenders stopped rolling loans over, owners who could still pay interest lost their houses.
- **You might think "Ponzi" means insolvent, but actually it is a cash-flow class.** A Ponzi unit whose cash flow grows faster than $i - Y/D$ is solvent; what it cannot survive is a rate rise or a growth disappointment. A government running primary deficits is a Ponzi unit in this sense, and when $r<g$ it can roll its debt over indefinitely ([5.2](05-02-when-r-is-less-than-g.md)).
- **You might think diagnostic expectations are just optimism, but actually they are overreaction in both directions.** After bad news the same formula makes spreads too high, and they then fall predictably; with $b = 0$ there is no distortion at all. Minsky's boom is the good-news branch.

## One-liner

> Hedge units pay from income, speculative units need lenders, and Ponzi units need lenders and growth; a long calm, over-read by diagnostic beliefs, moves borrowers down that list until a rate rise, or just a quiet year, calls the bet.

## Problems

**P1 (🟢) *(Formal.)*** An illustrative retailer has debt of 600, of which 60 falls due this year, and expects operating cash flow of 45. (a) For which interest rates is it a hedge, a speculative and a Ponzi unit? (b) At 9 percent, how much must it borrow this year, and what is its debt at year-end? (c) Suppose it can always refinance at 9 percent. How fast must its cash flow grow each year, forever, for it to be solvent?

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** Fundamentals follow $\omega_{t+1} = 0.6\,\omega_t + \epsilon_{t+1}$ with $\epsilon \sim N(0,1)$, and lenders form diagnostic expectations with $\theta = 0.5$ (illustrative). Last year $\omega_{t-1} = 0.5$; this year $\omega_t = 2.3$. (a) Find this year's news $\epsilon_t$, the rational and diagnostic forecasts of $\omega_{t+1}$, and the diagnostic lenders' average forecast error. (b) A class of borrowers defaults when $\omega_{t+1} < -1$, recovering nothing, and the safe rate is 3 percent. Find the competitive one-year loan rate under each belief. Use $\Phi(-2.98) = 0.00144$, $\Phi(-2.38) = 0.00866$, $\Phi(-1.98) = 0.02385$ and $\Phi(-1.38) = 0.08379$. (c) Had fundamentals no persistence ($b = 0$), what would the diagnostic forecast be after the same news? In one sentence, what does this show about diagnostic expectations versus mechanical extrapolation?

**P3 (🔴, optional) *(Exegetical.)*** An invented memo to a central bank's board: *"Schularick and Taylor show that credit booms cause financial crises. A rule capping real bank-loan growth at 5 percent a year would therefore cut crisis risk by the amount their logit implies."* (a) Name the two slides in the memo's reasoning. (b) [`history-of-debt` 6.1](../../history-of-debt/lessons/06-01-the-american-mortgage-and-2008.md) maps the 2008 dispute onto two drivers: a loosening of credit supply, and beliefs about house prices. Which of the two, if it were the whole story, would make credit growth a predictor of crises without being their cause, and what could the cap then do? 100 words or fewer in total.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) Hedge needs $i \le (Y-P)/D = (45-60)/600 = -2.5\%$, which no nonnegative rate satisfies: the principal due (60) exceeds the whole cash flow (45), so the retailer is never a hedge unit. Ponzi begins above $i_P = Y/D = 45/600 = 7.5\%$. So it is speculative for $0 \le i \le 7.5\%$ and Ponzi above 7.5%.

(b) Interest is $0.09 \times 600 = 54$, and commitments are $54 + 60 = 114$ against cash flow 45. It must borrow $114 - 45 = 69$: 60 to roll the principal and 9 to pay interest. Year-end debt is

$$600 - 60 + 69 = 609 = 1.09 \times 600 - 45 .$$

(c) Solvency requires $45 \ge (0.09 - g) \times 600$, so $g \ge 0.09 - 0.075 = 1.5\%$ a year. Check: at $g = 1.5\%$ the cash flows are worth $45/(0.09 - 0.015) = 600$, exactly the debt.

**Wrong turns:** reporting a range of rates at which it is hedge, which forgets that $Y - P < 0$; borrowing only the 9 of interest shortfall in (b) and forgetting that the 60 of principal must be rolled too.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) The news is $\epsilon_t = 2.3 - 0.6 \times 0.5 = 2.0$. The rational forecast is $\mathbb{E}_t[\omega_{t+1}] = 0.6 \times 2.3 = 1.38$, and last year's forecast of the same quantity was $\mathbb{E}_{t-1}[\omega_{t+1}] = 0.6^2 \times 0.5 = 0.18$. So

$$\mathbb{E}^\theta_t[\omega_{t+1}] = 1.38 + 0.5\,(1.38 - 0.18) = 1.98,$$

the same as $b\,\omega_t + \theta b\,\epsilon_t = 1.38 + 0.5 \times 0.6 \times 2 = 1.98$. The average forecast error is $1.38 - 1.98 = -0.6$: outcomes fall short of the diagnostic forecast by 0.6 on average.

(b) Rational lenders: default needs a draw $-1 - 1.38 = -2.38$ below the forecast, so $\pi = 0.00866$ and the rate is $1.03/(1 - 0.00866) - 1 = 3.90\%$. Diagnostic lenders: $-1 - 1.98 = -2.98$, so $\pi = 0.00144$ and the rate is $1.03/(1 - 0.00144) - 1 = 3.15\%$. The diagnostic rate is about 0.75 points too low.

**Must hit, strict (c):**

- With $b = 0$, the rational forecast and last year's forecast of $\omega_{t+1}$ are both 0, so the diagnostic forecast is $0 + 0.5\,(0 - 0) = 0$.
- Diagnostic expectations exaggerate the rational forecast in the direction of the news only when the news is informative about the future; a mechanical extrapolator would project the jump forward anyway.

**Wrong turns:** putting $\omega_t$ instead of the news $\epsilon_t$ in the overreaction term, which gives $1.38 + 0.5 \times 0.6 \times 2.3 = 2.07$; reading $\Phi(-1.38)$ or $\Phi(-1.98)$, which drops the default threshold; adding $\pi$ to the safe rate (3.87%) instead of dividing by $1 - \pi$.

**Model answer (c):** The diagnostic forecast would be 0, the same as the rational one, because news about a process with no persistence carries no information about next year. Diagnostic beliefs distort a correct forecast in the direction of informative news, while a mechanical extrapolator would carry the jump forward regardless.

---

**P3** *(Exegetical.)*

**Must hit, strict (a):**

- **Prediction to cause.** Schularick and Taylor show that lagged credit growth forecasts crises (informative, far from perfect: an area under the ROC curve of about 0.72), not that it produces them; a common cause such as optimism could drive both.
- **Association to policy effect.** A coefficient estimated in a world without the cap need not hold under it: lending can move outside banks, whose loans are what the logit counts, and a boom can take other forms.

**Must hit, strict (b):**

- **Beliefs.** If optimism about house prices drove both the borrowing and, when it reversed, the crash, credit growth is a symptom.
- **The cap** would not stop the reversal. At most, by limiting leverage it shrinks the forced selling when beliefs turn, an effect the logit coefficient does not measure.

**Wrong turns:** calling the evidence weak (as prediction it is strong); choosing credit supply in (b), since a supply loosening puts credit growth on the causal path.

**Model answer:** (a) The memo slides from prediction to cause: Schularick and Taylor show that credit growth forecasts crises, not that it produces them, since something else, such as optimism, could drive both. It then slides from an estimated association to a policy effect: a cap changes behavior, and credit could move outside the banks whose loans the logit counts. (b) Beliefs. If optimism drove both the borrowing and the crash, the cap would not stop the reversal; it could only limit the leverage that turns a reversal into forced selling, which the logit coefficient does not measure.

</details>

## Flashback

**From Lesson [3.5](03-05-the-leverage-cycle.md) (The leverage cycle):** *(Formal.)* One unit of an asset pays 1 in the good state and $d$ in the bad state. Risk-neutral agents, each holding cash $e=1.5$ and no asset, believe the good state has probability $h$, spread uniformly over $[0,1]$; the riskless rate is zero and no one can sell short. Buyers borrow against the asset without recourse, and dealers lend the largest promise per unit that is repaid in both states. The holders are the agents above a marginal buyer $h^*$, the price $p$ is the marginal buyer's valuation, and the holders' cash plus their loans pays for the whole unit. After a long calm the worst case looks milder to everyone: the bad-state payoff $d$ rises from 0.5 to 0.7, and nothing else changes. (a) Find the price and the leverage $p/(p-\phi)$, with $\phi$ the loan per unit, before and after. (b) By what percent does each rise, and what share of agents hold the asset in each case?

<details>
<summary>Solution</summary>

The largest promise repaid in both states is the bad-state payoff, so $\phi=d$. The marginal buyer values the asset at $d+(1-d)h^*$, and clearing is $e(1-h^*)+d=p$; together these give

$$h^*=\frac{e}{1+e-d},\qquad p=d+(1-d)\,h^*.$$

(a) Before ($d=0.5$): $h^*=1.5/2=0.75$, $p=0.5+0.5\times0.75=0.875$, and leverage $0.875/(0.875-0.5)=2.333$. After ($d=0.7$): $h^*=1.5/1.8=0.833$, $p=0.7+0.3\times0.833=0.95$, and leverage $0.95/0.25=3.8$. Lending is feasible both times: the non-buyers hold $1.5\times0.75=1.125$ and $1.5\times0.833=1.25$ of cash, against loans of 0.5 and 0.7.

(b) The price rises $0.95/0.875-1=8.6$ percent and leverage $3.8/2.333-1=62.9$ percent. The holders are the top 25 percent of agents before and the top 16.7 percent after: only the worst case changed, yet the same asset now sits with fewer, keener agents on thinner equity (0.25 per unit instead of 0.375).

**Wrong turns:** holding the loan at 0.5 after the calm, which gives $h^*=0.722$ and $p=0.917$ and misses that lenders lend the largest riskless promise, which rises with $d$; adding the old pass-through of loan to price, $(1-d)/(1+e-d)=0.25$ per unit of loan, to the old price ($0.875+0.25\times0.2=0.925$), which forgets that a milder worst case also raises every agent's valuation $d+(1-d)h$.

</details>

## Connections

- **Backward:** [3.5](03-05-the-leverage-cycle.md) supplies the rational route from calm to leverage, and its fire sales are what Ponzi units do when lenders stop; [4.1](04-01-fishers-debt-deflation-formalized.md)'s debt-deflation is the bust that Minsky's boom sets up (his 1992 paper cites Fisher 1933). Example 2 priced loans with [1.4](01-04-the-price-of-a-loan.md)'s zero-profit rate, and a speculative unit's dependence on rollover is the coordination problem of [3.1](03-01-diamond-dybvig.md).
- **Forward:** [4.3](04-03-household-debt-and-the-great-recession.md) reads the household-debt evidence from 2008, including the dispute over who did the borrowing; [4.4](04-04-overborrowing.md) asks whether privately chosen leverage is too high and what closes the gap; [6.5](06-05-self-fulfilling-debt-crises.md) is a speculative sovereign facing lenders who may refuse to roll; [5.2](05-02-when-r-is-less-than-g.md) is the Ponzi unit that can roll forever.
- **Sideways:** [`history-of-debt` 6.1](../../history-of-debt/lessons/06-01-the-american-mortgage-and-2008.md) has the 2008 episode and its map of credit supply against beliefs, and the mania-versus-riding dispute over 1720 in [`history-of-debt` 3.3](../../history-of-debt/lessons/03-03-the-south-sea-bubble.md) is the same fork as diagnostic against rational beliefs. The gap between forecasting a crisis and causing one is the omitted-variable problem of [`econometrics` 3.4](../../econometrics/lessons/03-04-omitted-variable-bias.md).
