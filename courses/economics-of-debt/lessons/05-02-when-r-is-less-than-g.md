# Economics of Debt · Lesson 5.2: When r < g

> ⏱ ~15 min · Module 5: Public debt · Builds on: [5.1 The government budget constraint and debt dynamics](05-01-the-government-budget-constraint.md), [`grad-macro` 3.2 Dynamic inefficiency](../../grad-macro/lessons/03-02-dynamic-inefficiency.md) · Unlocks: [5.4 Fiscal limits and unpleasant arithmetic](05-04-fiscal-limits-and-unpleasant-arithmetic.md), [6.5 Self-fulfilling debt crises](06-05-self-fulfilling-debt-crises.md)

## Why this matters

[5.1](05-01-the-government-budget-constraint.md) assumed that the interest rate on public debt exceeds the growth rate, so every debt must be backed by future surpluses. For the United States it has usually been false: in his presidential lecture, Blanchard (2019, *AER*) showed that over 1950 to 2018 the one-year Treasury rate averaged 4.7 percent and the ten-year rate 5.6 percent, against nominal GDP growth of 6.3 percent, and that the one-year rate was below growth in every decade except the 1980s. The pattern holds in many countries over long periods, he adds. When $r<g$, a government can borrow and never raise a tax to pay for it. This lesson asks what that does and does not license: fiscal cost, welfare cost and risk.

## The idea

An invented country owes 20 against a GDP of 100. The interest rate is 1 percent and growth is 3 percent. The government pays the 0.2 of interest by borrowing it. Next year the debt is 20.2 and GDP is 103, so the ratio has fallen from 20 to 19.6 percent without any taxes. This is a [debt rollover](../reference.md#debt-rollover): issue the debt once, never service it from taxes, and let growth shrink it. Swap the two rates and the same policy lifts the ratio to 20.4 percent, and only taxes can stop the climb. 5.1's pencil standing on its tip has become a marble in a bowl.

Is it free, then? Three catches.

- **Free for the budget is not free for the economy.** The savers who hold the bonds would otherwise have owned capital. If capital earns more than the economy grows, holding less of it is a loss.
- **$r-g$ is not known in advance.** An average below zero still allows a decade above it, and a bad decade is what does the damage. A rollover is a gamble.
- **The rate depends on how much you borrow.** Each extra unit of debt raises the rate on all of it, so the marginal unit costs more than the average rate says.

## The formal version

Reload 5.1's [identity](../reference.md#debt-ratio-dynamics): $d_{t+1} = a\,d_t - s_t$. Here $d_t$ is debt over GDP, $s_t$ the primary surplus over GDP, and $a = \frac{1+r}{1+g}$ the growth-adjusted factor, with $r$ and $g$ the real interest and growth rates. Now $r<g$, so $a<1$ and the [growth-adjusted rate](../reference.md#r-minus-g) $a-1 = \frac{r-g}{1+g}$ is negative.

**Rollover.** With $s_t = 0$ forever,

$$d_t = a^t\,d_0 \;\to\; 0,$$

halving every $\ln 2/(-\ln a)$ years. *In words:* the debt grows at $r$ and the economy at $g$, so the ratio melts away untaxed.

This breaks 5.1's intertemporal budget constraint. Its no-Ponzi term is now $d_{t+T}/a^T = d_t$ for every horizon $T$, so it never vanishes. The debt is a Ponzi scheme that works: each bondholder is repaid by the next, and the chain has no last link because the economy outgrows the debt. It is [`grad-macro` 3.2](../../grad-macro/lessons/03-02-dynamic-inefficiency.md)'s chain of transfers from young to old, which pays every cohort when the return on saving is below growth.

**A permanent deficit.** With a primary deficit $\delta = -s > 0$ every year, $d_{t+1} = a\,d_t + \delta$ has the fixed point

$$d^* = \frac{\delta}{1-a} = \frac{(1+g)\,\delta}{g-r},$$

and any deviation from it shrinks by the factor $a$ each year. *In words:* $r<g$ sustains any constant deficit, but only at the ratio you get by dividing the deficit by the gap. With $a-1=-1\%$, a [sustainable deficit](../reference.md#sustainable-deficit) of 1 percent holds the ratio at 100 percent of GDP, and one of 3 percent at 300 percent.

**The marginal rate.** Let the rate rise with the ratio, $r(d) = r_0 + \theta d$, and let all debt be one-year, so the whole stock pays this year's rate. The interest bill is $r(d)\,d$, so the [marginal cost of debt](../reference.md#marginal-cost-of-debt) is

$$m(d) = \frac{\mathrm{d}}{\mathrm{d}d}\big[r(d)\,d\big] = r(d) + \theta d.$$

*In words:* one more unit of debt pays its own rate and also raises the rate on every unit already outstanding.

The map $d_{t+1} = \frac{1+r(d_t)}{1+g}\,d_t + \delta$ has slope $\frac{1+m(d)}{1+g}$, so a resting point is stable only where $m(d)<g$. The deficit a ratio can carry, $(g-r(d))\,d/(1+g)$, rises while $m(d)<g$ and falls afterward, peaking at

$$\delta_{\max} = \frac{(g-r_0)^2}{4\theta(1+g)}, \quad\text{reached at}\quad d = \frac{g-r_0}{2\theta}.$$

*In words:* an average rate below growth anchors the ratio only while the marginal rate is below growth too. A deficit below $\delta_{\max}$ has two resting points, and only the lower one is stable; a deficit above it has none. Blanchard's back-of-envelope figure, which he calls uncertain, is that each point of debt-to-GDP raises the safe rate by 2 to 3 basis points ($\theta = 0.02$ to $0.03$). On a projected 60-point rise in US debt, that adds 1.2 to 1.8 points to the rate: enough, he notes, to flip the sign of $r-g$.

**The welfare cost.** A rollover has no fiscal cost, but the debt still absorbs saving that would have built capital. Blanchard splits the effect of a small, permanent increase in debt (in steady state, a transfer from young to old) in an overlapping-generations model with risky capital. The direct channel is valued at the safe rate and helps when the safe rate is below growth, because the safe rate is the risk-adjusted return on capital. The crowding-out channel (less capital, lower wages, a higher return) is valued at the average marginal product of capital and hurts when that exceeds growth. With Cobb-Douglas production the two combine, approximately, into a [welfare rule](../reference.md#welfare-cost-of-debt):

$$\operatorname{sign}(dU) = \operatorname{sign}\big(1 - E[R_f]\,E[R]\big),$$

where $U$ is steady-state welfare, $E$ an average over shocks, and $R_f$ and $R$ the gross safe return and gross marginal product of capital over one 25-year generation, each measured relative to growth. *In words:* more debt raises welfare when the safe rate is further below growth than the return on capital is above it. His example: a safe rate 2 points a year below growth gives $E[R_f] = 0.98^{25} = 0.603$, so debt helps only if $E[R] < 1/0.603 = 1.657$, which means a marginal product less than about 2 points a year above growth. This is 3.2's test in a risky world: a safe rate below growth does not make an economy dynamically inefficient; the test concerns the return on capital.

## Picture

![Fan chart of the debt ratio over 20 years from 100 percent of GDP with a 1 percent primary deficit. The median stays near 100. The independent-shock band runs from about 86 to 115 at year 20; with persistent shocks the 10th and 90th percentiles reach about 68 and 147, and the 90th crosses a 125 percent threshold line by year 9](assets/05-02-fig1.svg)

The parameters are Example 2's. The blue band has independent draws; the red dashed lines draw from the same distribution each year but carry 80 percent of each year's deviation into the next. Same average, same spread each year: persistence alone makes the band 2.7 times wider by year 20.

## Worked examples

**Example 1 (clean): a one-time issue rolled over forever.** An invented government borrows 20 percent of GDP once, at $r = 1\%$ with $g = 3\%$, and never taxes to service it. Then $a = 1.01/1.03 = 0.98058$ and $d_t = 0.2 \times 0.98058^t$:

| Year | 0 | 10 | 20 | 50 | 100 |
|---|---|---|---|---|---|
| Debt, percent of GDP | 20.0 | 16.4 | 13.5 | 7.5 | 2.8 |

The half-life is $\ln 2/(-\ln 0.98058) = 35.3$ years. In that time the real debt grows by a factor of $1.01^{35.3} = 1.42$ and real GDP by $1.03^{35.3} = 2.84$. Nobody is taxed: each year's bondholders are paid by the next year's, at 1 percent. Swap the rates to $r = 3\%$ and $g = 1\%$ and the rollover doubles the ratio every 35.3 years. Holding it at 20 percent instead takes the [debt-stabilizing surplus](../reference.md#debt-stabilizing-primary-surplus) $0.02/1.01 \times 0.20 = 0.40$ percent of GDP, every year, forever. The sign of $r-g$ separates a debt that pays for itself from a permanent tax.

**Example 2 (why you'd care): the rollover as a gamble.** Now let $a_t$ vary. Blanchard reports that for US debt since 1950 the log of $(1+r)/(1+g)$ averaged between $-1\%$ and $-2\%$, with an annual standard deviation of 2.8 percent. Take the less favorable mean: draw $a_t-1$ each year with mean $-1\%$ and standard deviation $2.8\%$, start at 100 percent of GDP, and run a primary deficit of 1 percent, which the mean rate sustains exactly at 100 percent. Simulate 100,000 paths with seed 52; rerunning with four other seeds moves none of the probabilities below by more than 0.2 points.

- **Independent draws.** The mean path stays at exactly 100 percent. At year 20 the median is 99.4 percent and the 10th to 90th percentile band runs from 85.8 to 115.1. The probability that the ratio passes 125 percent at some point within 20 years is 3.8 percent (Monte Carlo standard error 0.06 points).
- **Persistent draws.** Keep each year's distribution but carry 80 percent of every deviation into the next year, so a deviation's half-life is 3.1 years. The year-20 band widens to roughly 68 to 147, and the probability of passing 125 percent is 28.2 percent (standard error 0.14 points). One bad year washes out; a run of them compounds.
- **A rate that rises with debt.** Keep the draws independent but let the rate move by Blanchard's 2 basis points per point of debt, measured from 100 percent. At 100 percent the average growth-adjusted rate is still $-1\%$, but the marginal one is $-1\% + 0.02 \times 1.0 = +1\%$, so 100 percent is now an unstable resting point (the stable one is 50 percent). The probability of passing 125 percent rises to 6.9 percent (standard error 0.08 points).

The IMF now assesses debt in market-access countries with such a [fan chart](../reference.md#fan-chart), as a 2023 staff presentation on its Sovereign Risk and Debt Sustainability Framework describes. Historical shocks to the real interest rate, growth, the real exchange rate and the primary balance are drawn together, to keep their correlations, and in pairs of years, to keep some persistence. The framework simulates 10,000 paths five years ahead and scores the fan's width and the probability that debt fails to stabilize. The presentation lists feedback from debt to interest rates, the third bullet's channel, as future work.

**What flips the sign.** Debt itself, through the rate schedule. A growth slowdown, or the fading of whatever holds safe rates down, including financial repression that makes banks hold government bonds ([5.5](05-05-the-fiscal-theory-and-inflating-debt-away.md)). A risk premium, which can fulfill itself: if investors fear default and demand more, the higher rate makes default likelier (Calvo 1988; see [6.5](06-05-self-fulfilling-debt-crises.md)). And growth, if high debt lowers it. Reinhart and Rogoff (2010, *AER* Papers and Proceedings) reported that above public debt of 90 percent of GDP median growth was about 1 point lower and mean growth several points lower. Herndon, Ash and Pollin (2014, *Cambridge Journal of Economics*) found coding errors, excluded data and unusual weighting behind those figures: corrected, mean growth above 90 percent in 20 advanced economies over 1946 to 2009 was 2.2 percent, not $-0.1$ percent, and debt above 90 percent did not consistently lower growth.

## Watch out

- **You might think $r<g$ licenses any deficit,** but it licenses a deficit only at a ratio, $d^* = (1+g)\,\delta/(g-r)$. With a gap of about 1 point, a 3 percent deficit settles near 300 percent of GDP, where the rate is no longer the one you started with.
- **You might think the low average rate on today's debt is the rate that matters,** but new deficits pay the marginal rate: the rate on new issues plus what they add to the rate on the rest. With long-term debt, the average rate on the stock also lags the market rate for years.
- **You might think a safe rate below growth makes debt costless,** but the fiscal cost and the welfare cost are different things. Crowding out is priced at the return on capital, and Blanchard's rule weighs the two gaps against each other.

## One-liner

> With $r<g$ a debt can roll over untaxed forever, yet a deficit still sets the ratio, the rate still rises with the ratio, crowded-out capital still costs, and the bet is on how long $r-g$ stays negative, not on its average.

## Problems

**P1 (🟢) *(Formal.)*** Invented: a government issues debt of 30 percent of GDP once, to rescue its banks, and then rolls it over with a zero primary balance forever. (a) With $r = 0.5\%$ and $g = 2\%$, what is the ratio after 20 years, and what is its half-life? (b) After year 20 the rates swap ($r = 2\%$, $g = 0.5\%$) for 20 years. What is the ratio at year 40? (c) Had the swap come first, what would the peak ratio have been? In one sentence, what does the comparison say about a rollover as a gamble? Round ratios to three decimals.

**P2 (🟡) *(Formal.)*** Invented: all of a government's debt is one-year, so the whole stock pays this year's rate, and the rate rises with the debt ratio as $r(d) = 1\% + 2\%\,d$. Growth is $g = 3\%$ and debt is 80 percent of GDP. (a) Compute the average rate and the marginal cost of debt at $d = 0.8$, and the primary deficit that holds the ratio at 80 percent. (b) The government runs that deficit, and a shock lifts the ratio to 85 percent. Compute next year's ratio. Is 80 percent a stable resting point? Find the other ratio at which the same deficit is sustainable, and say whether it is stable. (c) What is the largest permanent deficit this schedule can sustain at any ratio, and at what ratio?

**P3 (🔴) *(Formal (a)–(b) · Exegetical (c).)*** An invented finance-ministry memo, answering the charge that public debt burdens later generations: "Our growth-adjusted rate averages $-1$ percent, so no later taxpayer will ever service this debt, and we can run a primary deficit of 3 percent of GDP indefinitely." Debt is 60 percent of GDP. (a) If $a-1 = -1\%$ every year, where does the ratio converge, and what is it after 30 years? (b) The safe rate on the debt is 1 point below growth and the average marginal product of capital is 3 points above it. With 25-year generations, use Blanchard's Cobb-Douglas rule to sign the effect of more debt on steady-state welfare. (c) In 100 words or fewer, say why $r<g$ on average does not license the memo's deficit, naming the model result behind each reason.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) $a = 1.005/1.02 = 0.985294$ and $a^{20} = 0.743563$, so $d_{20} = 0.3 \times 0.743563 = 0.223$, or 22.3 percent of GDP. The half-life is $\ln 2/(-\ln 0.985294) = 46.8$ years.

(b) The swapped factor is $1.02/1.005 = 1/a$, so $d_{40} = 0.3\,a^{20}a^{-20} = 0.300$: back to 30 percent exactly. Over the 40 years the real debt and GDP both grow by the same factor, $1.005^{20} \times 1.02^{20} = 1.642$.

(c) Bad years first: $d_{20} = 0.3/0.743563 = 0.403$, a peak of 40.3 percent, before the good years bring it back to 0.300 at year 40. The end point depends only on the product of the yearly factors, but the path depends on their order, and anything that reacts to the level along the way (a rate that rises with debt, a crisis threshold) turns the order into risk.

**Wrong turns:** using $r-g$ without dividing by $1+g$ (a factor of 0.985 instead of 0.985294, which gives 0.222 in (a)); concluding from (b) that the order of good and bad years does not matter.

---

**P2** *(Formal.)*

(a) $r(0.8) = 1\% + 2\% \times 0.8 = 2.6\%$, below $g = 3\%$. The marginal cost is $m(0.8) = r(0.8) + \theta d = 2.6\% + 1.6\% = 4.2\%$, above $g$. The deficit that holds the ratio at 0.8 is $(g - r)\,d/(1+g) = 0.004 \times 0.8/1.03 = 0.00311$, or 0.311 percent of GDP.

(b) At 0.85 the rate is 2.7 percent, so

$$d' = \frac{1.027 \times 0.85}{1.03} + 0.00311 = 0.8475 + 0.0031 = 0.8506.$$

The ratio keeps rising, even though $r<g$ at 0.85. So 80 percent is unstable: the map's slope there is $(1+m)/(1+g) = 1.042/1.03 = 1.0117 > 1$. The resting points solve $(g - r(d))\,d = (1+g)\,\delta$, that is $0.02\,d - 0.02\,d^2 = 0.0032$, or $d^2 - d + 0.16 = 0$, so $d = 0.2$ or $d = 0.8$. At 0.2, $m = 1.8\% < 3\%$ and the slope is $1.018/1.03 = 0.988$, so 20 percent is stable. A shock below 80 percent starts a slow drift toward 20 percent; a shock above it sends the ratio up without limit.

(c) $\delta_{\max} = (g - r_0)^2/\big(4\theta(1+g)\big) = 0.02^2/(0.08 \times 1.03) = 0.00485$, or 0.485 percent of GDP, reached at $d = (g - r_0)/(2\theta) = 0.5$, where $m = 1\% + 4\% \times 0.5 = 3\% = g$.

**Wrong turns:** declaring 80 percent stable because $r(0.8) < g$; putting the peak where $r(d) = g$, at $d = 1.0$, where the sustainable deficit is in fact zero.

---

**P3** *(Formal (a)–(b) · Exegetical (c).)*

(a) $d^* = \delta/(1-a) = 0.03/0.01 = 3.0$, or 300 percent of GDP. The gap to $d^*$ shrinks by the factor 0.99 a year, so $d_{30} = 3 - 2.4 \times 0.99^{30} = 3 - 2.4 \times 0.7397 = 1.225$: 122.5 percent, having passed 100 percent in year 19.

(b) $E[R_f] = 0.99^{25} = 0.778$ and $E[R] = 1.03^{25} = 2.094$, so $E[R_f]\,E[R] = 1.629 > 1$ and the sign is negative: more debt lowers steady-state welfare. The safe rate's shortfall below growth (1 point) is smaller than capital's excess over it (3 points). Later generations pay through less capital and lower wages, not through taxes.

**Must hit, strict (c):**

- The deficit sets the ratio: $d^* = \delta/(1-a)$ is 300 percent here, so "indefinitely" means at five times today's ratio.
- The rate rises with debt: at Blanchard's 2 basis points per point, the extra 240 points add 4.8 points to the rate, so $r-g$ turns positive long before 300 percent. Once the marginal rate exceeds growth the high resting point is unstable, and above $\delta_{\max}$ there is none (P2).
- $r-g$ is uncertain and can be persistent: an average of $-1$ percent still allows runs of $r>g$, and persistence widens the fan (Example 2).
- Untaxed is not costless: crowding out lowers welfare when capital's return exceeds growth by more than the safe rate falls short of it (b).

**Wrong turns:** answering that the ratio explodes (with $a-1$ fixed at $-1\%$ it converges); signing (b) from the safe rate alone.

**Model answer (c):** The memo shows that the deficit converges, not that it is harmless. A 3 percent deficit with $a-1=-1\%$ settles at 300 percent of GDP, and at that debt the rate would not stay below growth: once the marginal rate exceeds $g$ the resting point is unstable, and above $\delta_{\max}$ there is none. The $-1$ percent is also only an average, and persistent bad draws push the ratio far above its median. Finally, untaxed is not costless: with capital earning 3 points above growth, crowding out lowers later generations' welfare.

</details>

## Flashback

**From Lesson [4.4](04-04-overborrowing.md) (Overborrowing: when private leverage is too high):** *(Formal.)* In the overborrowing model each borrower's marginal benefit of debt is $0.18-0.2\,b$. The market, where each borrower takes the bust price as given, stops where marginal benefit equals $A\,b$, with $A=\pi\lambda\gamma$ ($\pi$ the bust probability, $\gamma$ the price fall per unit sold, $\lambda$ the value of a bust dollar). The constrained planner stops where it equals $(A+E)\,b$, with $E=\pi\gamma(\lambda-1)$ the part borrowers ignore, and the corrective tax is $\tau^*=E\,b^{SP}$, where $b^{SP}$ is the planner's debt. You observe that the market stops at $b=0.4$ and the planner at $b=0.3$. (a) Find $A$, $E$ and $\tau^*$. (b) Find $\lambda$ and $\pi\gamma$, and say what value of $\lambda$ would have made the tax zero.

<details>
<summary>Solution</summary>

(a) At the market's debt, marginal benefit equals private cost: $0.18-0.2\times0.4=0.10=A\times0.4$, so $A=0.25$. At the planner's debt, $0.18-0.2\times0.3=0.12=(A+E)\times0.3$, so $A+E=0.40$ and $E=0.15$. The tax is $\tau^*=E\,b^{SP}=0.15\times0.3=0.045$, the gap between social and private marginal cost at 0.3 ($0.12-0.075$). Check: facing the tax, a borrower stops where $0.18-0.2b=0.25b+0.045$, which is $b=0.3$.

(b) $A/E=\lambda/(\lambda-1)$, and $0.25/0.15=5/3$ gives $\lambda=2.5$; then $\pi\gamma=A/\lambda=0.1$ (for example $\pi=0.25$ and $\gamma=0.4$, since the two debts pin down only the product). The tax would be zero at $\lambda=1$: a bust dollar is then worth the same to the sellers who lose it as to the buyers who gain it, $E=0$, and the market's debt is the planner's.

**Wrong turns:** evaluating the tax at the market's debt, $0.15\times0.4=0.06$, which pushes borrowing down to 0.267, below the planner's 0.3; reading $E/A$ as $\lambda-1$, forgetting that $A$ contains $\lambda$ too, which gives $\lambda=1.6$.

</details>

## Connections

- **Backward:** [5.1](05-01-the-government-budget-constraint.md) built the identity, the intertemporal budget constraint and the knife-edge under $r>g$; with $r<g$ the no-Ponzi term stops vanishing and the knife-edge becomes a stable point. [`grad-macro` 3.2](../../grad-macro/lessons/03-02-dynamic-inefficiency.md) is the rollover's theory: a chain of transfers pays every cohort when the return is below growth. A government running primary deficits is [4.2](04-02-minsky-informally-and-formally.md)'s Ponzi unit, and this lesson says when it can roll forever.
- **Forward:** [5.3](05-03-tax-smoothing-and-optimal-debt.md) returns to $r>g$ and asks how to time the surpluses. [5.4](05-04-fiscal-limits-and-unpleasant-arithmetic.md) asks what happens when taxes cannot deliver them. [5.5](05-05-the-fiscal-theory-and-inflating-debt-away.md) takes up financial repression, which holds $r$ below $g$ by rule, and [6.5](06-05-self-fulfilling-debt-crises.md) the self-fulfilling risk premium that can flip the sign of $r-g$ quickly.
- **Sideways:** [`philosophy-of-debt` 6.2](../../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md) lists $r<g$ as an empirical objection to the premise that borrowing creates claims later taxpayers must service. P3 is this course's answer: the objection covers taxes, not crowding out, and whether that cost wrongs anyone is philosophy-of-debt's question. [`history-of-debt` 3.4](../../history-of-debt/lessons/03-04-humes-prophecy-carrying-a-great-debt.md) is the counter-case: after 1822 Britain faced $r>g$ on average, and surpluses did the work. Unbacked debt rolled over at $r<g$ is a rational bubble, the same object as [`grad-macro` 3.3](../../grad-macro/lessons/03-03-money-rational-bubbles.md)'s fiat money.
