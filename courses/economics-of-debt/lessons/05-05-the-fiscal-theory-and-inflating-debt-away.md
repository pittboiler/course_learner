# Economics of Debt · Lesson 5.5: The fiscal theory and inflating debt away

> ⏱ ~15 min · Module 5: Public debt · Builds on: [5.1 The government budget constraint and debt dynamics](05-01-the-government-budget-constraint.md), [5.4 Fiscal limits and unpleasant arithmetic](05-04-fiscal-limits-and-unpleasant-arithmetic.md), [`grad-macro` 6.2 Policy rules and the Taylor principle](../../grad-macro/lessons/06-02-policy-rules-taylor-principle.md) · Unlocks: [6.1 Ability to pay: the transfer problem and original sin](06-01-the-transfer-problem-and-original-sin.md)

## Why this matters

This module opened by naming what can pay for deficits that taxes never will: growth, inflation or default. [5.2](05-02-when-r-is-less-than-g.md) took growth, and Module 6 takes default. This lesson takes inflation. [5.4](05-04-fiscal-limits-and-unpleasant-arithmetic.md) treated inflation as a tax on holders of money. Here it is a tax on holders of bonds: nominal debt promises money, so a higher price level pays it in full, in money that buys less. The fiscal theory of the price level turns that observation into a theory of inflation. It then measures what inflation and capped interest rates did to the war debts after 1945, a modern cousin of what Adam Smith called a "pretended payment" ([`history-of-debt` 3.4](../../history-of-debt/lessons/03-04-humes-prophecy-carrying-a-great-debt.md)).

## The idea

A nominal bond promises money, not goods. What it is worth in goods depends on the price level on the day it pays. What backs it is the stream of primary surpluses the government will run, and those are real: taxes buy real things.

Picture an invented government that owes 1,200 in money, due now, and whose future primary surpluses are worth 1,000 in goods, with one unit of money buying one unit of goods today. The promise exceeds the backing by a fifth, so something has to give. The textbook answer is that taxes rise until the surpluses are worth 1,200. A second answer is a partial default. The fiscal theory's answer is that prices rise 20 percent. Then the 1,200 in money buys exactly 1,000 in goods, bondholders are paid in full, and no new money is printed.

Think of nominal debt as shares in the government's future surpluses, with the purchasing power of money as the share price. Bad news about the dividends lowers the share price, which here means a higher price level.

Inflation cuts real debt in two cases. A lender who expects 5 percent inflation demands about 5 points more interest, so inflation that everyone expected transfers nothing. The first case is a surprise that hits bonds whose rates were fixed before it: a ten-year bond is exposed for ten years, a one-year bill for one. The second is when the government stops lenders from demanding compensation, by capping interest rates and requiring banks and pension funds to hold its bonds. That is financial repression, and it needs no surprise at all.

## The formal version

**The valuation equation.** Let $B_{t-1}$ be the nominal debt falling due at date $t$ (in money, interest included), $P_t$ the price level (money per unit of goods), $s_{t+j}$ the real primary surplus in year $t+j$, and $r$ a constant real interest rate. Bondholders are risk-neutral. Ignore growth, or read every quantity as a ratio to GDP with 5.1's growth-adjusted rate. In equilibrium,

$$\frac{B_{t-1}}{P_t}=\mathbb{E}_t\sum_{j=0}^{\infty}\frac{s_{t+j}}{(1+r)^{j}}\equiv S_t.$$

*In words:* the real value of the nominal debt equals the present value of the real surpluses that back it. This [valuation equation](../reference.md#valuation-equation) is 5.1's [intertemporal budget constraint](../reference.md#intertemporal-budget-constraint) with the debt written in money. (Here $B_{t-1}$ includes this year's interest, so this year's surplus is undiscounted.) It holds under every policy regime. The argument is over which term moves when news arrives.

**Two readings.** In [5.4](05-04-fiscal-limits-and-unpleasant-arithmetic.md)'s language (Leeper 1991, *JME*), an authority is [active](../reference.md#active-and-passive-policy) when it sets its instrument without regard to the debt and passive when it adjusts to keep the budget constraint satisfied, and a unique equilibrium needs one of each.

- *Active money, passive fiscal* (the textbook case). The central bank pins down $P_t$, through the money supply or a Taylor rule, and the treasury adjusts future surpluses until $S_t = B_{t-1}/P_t$. The equation constrains fiscal policy; 5.1's Bohn rule is one way to meet it.
- *Active fiscal, passive money.* Surpluses follow their own path and $B_{t-1}$ was set yesterday, so only the price level can move:

$$P_t=\frac{B_{t-1}}{S_t}.$$

*In words:* the price level is nominal debt divided by its real backing, so news that cuts expected surpluses raises prices at once. This is the [fiscal theory of the price level](../reference.md#fiscal-theory-of-the-price-level) (Sims 1994, *Economic Theory*; Woodford 1995, *Carnegie-Rochester Conference Series on Public Policy*; Cochrane 2001, *Econometrica*, and his 2023 book of the same name). Woodford showed that it pins down the price level even under an interest-rate peg, a policy commonly thought to leave it undetermined.

This is the fiscal side of [`grad-macro` 6.2](../../grad-macro/lessons/06-02-policy-rules-taylor-principle.md)'s Taylor principle. That lesson's condition $\phi_\pi>1$ leaves the treasury in the background: it gives a unique path when the treasury is passive, backing whatever real debt the path implies. With an active treasury, $\phi_\pi>1$ makes two active authorities and no equilibrium with bounded debt. Uniqueness then needs $\phi_\pi<1$, a peg included, with the valuation equation setting prices.

**The critics.** Buiter (2002, *Economic Journal*) argues that the fiscal reading confuses a budget constraint, which must hold at every price level, with an equilibrium condition, so no government can set surpluses that ignore it. The monetarist reply (McCallum 2001, *Journal of Monetary Economics*) is that the same models have a second solution with traditional properties, in which money pins down prices, and that it is perhaps the more plausible because it is the bubble-free, fundamentals solution. Both sides accept the equation, so data that satisfy it cannot by themselves say which term adjusted.

**Maturity.** Now let $B^{(j)}_{t-1}$ be the nominal face value due at $t+j$. Each bond is worth what its payment will buy:

$$\sum_{j\ge0}\frac{B^{(j)}_{t-1}}{(1+r)^{j}}\;\mathbb{E}_t\!\left[\frac{1}{P_{t+j}}\right]=S_t.$$

*In words:* the equation restricts what the debt's payments will buy when they fall due, not necessarily today's price level. Bad fiscal news can be met by a jump now or by inflation later, which shows up today as falling long-bond prices; Cochrane (2001) shows that the maturity structure decides which.

So surprises differ in reach ([surprise inflation and maturity](../reference.md#surprise-inflation-and-maturity)). A one-time jump of $x$ in the price level cuts every nominal bond's real value by the factor $1/(1+x)$. A surprise permanent rise in inflation from $\pi$ to $\pi'$ cuts a zero-coupon bond due in $n$ years by the factor

$$\left(\frac{1+\pi}{1+\pi'}\right)^{n}.$$

*In words:* a lasting rise in inflation compounds over a bond's remaining life. It barely touches one-year bills, which are repriced when they roll over, and hits long bonds hard.

**Inflating debt away.** Let $i$ be the nominal rate the government pays, $\pi$ inflation, $g$ real growth and $d$ nominal debt over nominal GDP. 5.1's [debt-ratio identity](../reference.md#debt-ratio-dynamics) becomes

$$d_{t+1}=\frac{1+i_t}{(1+\pi_t)(1+g_t)}\,d_t-s_t,$$

which is the real identity with the ex post real rate $1+r_t=(1+i_t)/(1+\pi_t)$. *In words:* inflation lowers the ratio only by lowering the real rate actually paid; if lenders saw it coming, $i$ already includes it. Two things push $r$ down: a surprise, on debt whose $i$ was fixed earlier, and [financial repression](../reference.md#financial-repression). Reinhart and Sbrancia's 2011 working paper lists its tools: directed lending to the government from captive domestic buyers such as pension funds, explicit or implicit interest-rate caps, controls on cross-border capital movements, and close ties between government and banks. When $r_t<0$ the debt sheds $-r_t d_t$ of GDP a year with no surplus: the [liquidation effect](../reference.md#liquidation-effect). With a 2 percent cap and 5 percent inflation, $r = 1.02/1.05-1 = -2.9\%$, so a debt of 100 percent of GDP sheds 2.9 points a year before growth does anything.

## Picture

![Real value of a nominal zero-coupon bond after a surprise, by years until it pays. A one-time 10 percent jump in the price level is a flat line: every bond loses 9.1 percent. A lasting rise in inflation from 2 to 5 percent is a falling curve: a one-year bill loses 2.9 percent and a ten-year bond 25.2 percent](assets/05-05-fig1.svg)

The two lines cross at 3.3 years: below that a 10 percent jump erodes more, above it the lasting rise does, so long debt can be eroded slowly and short debt only by a jump.

## Worked examples

**Example 1 (clean): a deficit nobody backs.** Invented numbers. A government owes $B = 1{,}300$ in money, due now, runs a primary surplus of 50 a year forever, and $r = 4\%$. Counting this year's surplus undiscounted, $S = 50 \times 1.04/0.04 = 50\times26 = 1{,}300$, so $P = 1$. A recession turns this year's surplus into a deficit of 25, a swing of 75, and $S$ falls to 1,225.

- *Passive fiscal.* The treasury borrows the 75 and raises every later surplus by $75\times0.04 = 3$, worth $3/0.04 = 75$ from next year on. Prices do not move. This is [5.3](05-03-tax-smoothing-and-optimal-debt.md)'s smoothing, and later taxpayers pay.
- *Active fiscal.* Surpluses stay at 50, so $P = 1{,}300/1{,}225 = 1.0612$: prices jump 6.12 percent. Bondholders lose 75 of their 1,300 in real terms (5.77 percent), and taxpayers pay nothing more.

Now suppose the same real value is owed in ten-year zero-coupon bonds priced for 2 percent inflation. The equation pins only $P_{t+10}$, which must end 6.12 percent above its old path. A jump today does that, and so does inflation of $1.02\times1.0612^{1/10}-1 = 2.61$ percent a year for ten years with no jump. Had the debt been one-year bills, the same shortfall would need inflation of $1.02\times1.0612 - 1 = 8.2$ percent in the coming year. The shorter the debt, the sooner and more concentrated the inflation.

**Example 2 (why you'd care): what inflation actually did.** Hall and Sargent (2011, *AEJ: Macroeconomics*; figures from their 2010 NBER working paper) run the nominal identity year by year on US marketable Treasury debt in private hands, at market value. From 1945 to 1974 it fell from 66.2 to 11.3 percent of GDP, 54.9 points:

| 1945 to 1974 | Points of GDP |
|---|---|
| Nominal returns paid | +21.7 |
| Inflation | −34.2 |
| Growth | −21.6 |
| Primary surpluses | −20.8 |

Inflation net of nominal returns took off 12.5 points, 23 percent of the fall. Of those, 10.3 fell on holders of bonds with five or more years to run; average maturity was about seven years right after the war.

The 1970s are the hard case. Inflation was high, yet from 1972 to 1981 the ratio rose from 13.9 to 16.6 percent, and inflation net of nominal returns took off just 1.0 point. The debt was small and short: average maturity fell to about two years by the mid-1970s, partly because a law, repealed in 1975, barred long bonds paying above a rate ceiling that market rates exceeded.

Repression is the other channel. Reinhart and Sbrancia (2015, *Economic Policy*) find real rates on government debt negative about half the time from 1945 to 1980 in the advanced economies, with average annual interest savings of about 1 to 5 percent of GDP across 12 countries. Their 2011 working paper counts only years with negative real rates, which were a quarter of the years in the US and about half in Britain, and puts the savings in them at 3 to 4 percent of GDP in both and about 5 percent in Australia and Italy, where inflation ran higher. (Hall and Sargent's totals are not comparable: different debts and returns.)

Who pays: under the fiscal theory, holders of nominal debt, the long bonds most when inflation is spread out; under repression, captive savers in banks and pension funds, taxed through regulation rather than the budget. Taxpayers gain what they lose. Lenders who see it coming demand an inflation premium, shorter maturities or indexation, so the exit narrows with use.

## Watch out

- **You might think the fiscal theory is 5.4's printing press,** but no money need be printed. Sargent and Wallace's inflation comes from seigniorage, a tax on money. The fiscal theory's comes from revaluing nominal bonds, and it works in a cashless economy.
- **You might think any inflation erodes debt,** but only inflation the interest rate did not price: a surprise on debt already issued, or inflation with rates held down.
- **You might think the fiscal theory says deficits cause inflation,** but only news that lowers the present value of surpluses moves prices. A deficit expected to be repaid by later surpluses leaves $S_t$ unchanged, as in Example 1's passive case.

## One-liner

> Nominal debt is a claim on future surpluses paid in money: if the surpluses will not rise to back it, prices rise until they do, and inflation erodes debt only when it catches lenders out or when regulation stops them pricing it.

## Problems

**P1 (🟢) *(Formal.)*** A government owes nominal debt worth 80 percent of GDP at market value: 30 points in one-year bills and 50 points in ten-year zero-coupon bonds, all priced for 2 percent inflation. News arrives that inflation will run at 4 percent a year from now on; the real rate and today's price level do not change. (a) By what percentage does the real value of each kind of debt fall? (b) By how many points of GDP does the whole debt's real value fall, and what one-time surprise jump in the price level would have cut it by the same amount? Round to one decimal.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** Invented numbers. Debt is 100 percent of GDP, real growth is 1.5 percent, inflation is a steady, fully expected 4 percent, and the primary balance is zero. The government wants the ratio at 75 percent in eight years without running surpluses, so it caps the nominal rate on its debt and requires banks and pension funds to hold it. (a) What cap does it need, and what real rate does that impose? (b) Compute the year-one liquidation effect in percent of GDP, and the ratio after eight years if the debt had instead paid a market real rate of 1.5 percent. (c) [`philosophy-of-debt` 6.2](../../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md)'s first premise says borrowing binds later taxpayers unless the state inflates the debt away or repudiates it. The same 25-point cut could have come from primary surpluses. Who pays for it here instead, and why does the scheme work although the inflation is fully expected? Three sentences or fewer.

**P3 (🔴) *(Formal (a)–(b) · Exegetical (c).)*** A cashless economy with active fiscal and passive monetary policy, so the valuation equation sets the price level. The government owes one-year nominal bills with face value 200, due now, and inflation-indexed bonds that pay 100 in goods, due now. The present value of its surpluses is 300, and $P = 1$. (a) News cuts that present value to 270. Find the new price level. (b) Beyond what fall in the present value of surpluses can no price level satisfy the valuation equation? (c) Two sentences: if all the debt were indexed or owed in foreign currency, who would bear a shortfall in surpluses, and how?

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) Bills: $1.02/1.04 = 0.9808$, a fall of 1.9 percent. Ten-year zeros:

$$\left(\frac{1.02}{1.04}\right)^{10} = 0.8235,$$

a fall of 17.6 percent.

(b) The bills are now worth $30\times0.9808 = 29.42$ and the zeros $50\times0.8235 = 41.18$, a total of 70.60. The debt's real value falls by 9.4 points of GDP (11.8 percent of 80). A one-time jump $x$ hits every bond alike, so $80/(1+x) = 70.60$ gives $x = 13.3$ percent. A 2-point lasting rise in inflation does to this debt what a 13 percent jump would, almost all of it through the ten-year bonds.

**Wrong turns:** adding up 2 points a year for ten years, a 20 percent cut instead of 17.6; applying the ten-year factor to the bills, which are repriced at the new rate after one year.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) With a zero primary balance the ratio must shrink by the factor $0.75^{1/8} = 0.964679$ a year, so

$$1+i = 1.04\times1.015\times0.964679 = 1.018315.$$

The cap is 1.83 percent, and the real rate is $1.018315/1.04 - 1 = -2.09$ percent. Year by year the ratio runs 100, 96.5, 93.1, 89.8, 86.6, 83.5, 80.6, 77.7, 75.0.

(b) The liquidation effect in year one is $0.0209\times1.00 = 0.0209$, or 2.1 percent of GDP. At a market real rate of 1.5 percent the nominal rate would be $1.015\times1.04 - 1 = 5.56$ percent, the ratio's factor would be exactly 1, and the debt would stay at 100 percent. The cap is worth 25 points of GDP over the eight years.

**Must hit, strict (c):**

- The captive holders pay: banks' depositors and pension savers earn about −2.1 percent real instead of +1.5 percent, a tax of about 3.6 points a year on their holdings, collected through regulation rather than the budget.
- It works without a surprise because the holders cannot refuse: the cap and the holding requirements stop them demanding the 5.56 percent that expected inflation would otherwise command.
- Capital controls (or some other barrier) must stop them moving their savings abroad.

**Wrong turns:** forgetting growth in (a), which gives a cap of 0.33 percent; claiming expected inflation cannot erode debt, which holds only when lenders are free to price it.

**Model answer (c):** Savers who hold the capped debt through banks and pension funds pay, earning about −2.1 percent real instead of +1.5 percent, while later taxpayers are spared the surpluses. The inflation is expected, but the holders cannot demand the 5.56 percent it would otherwise command, because the cap and the holding rules bind them. The scheme also needs capital controls, or they would take their savings abroad.

---

**P3** *(Formal (a)–(b) · Exegetical (c).)*

(a) The indexed bonds are owed in goods, so only the bills can absorb the news:

$$\frac{200}{P} + 100 = 270 \quad\Rightarrow\quad P = \frac{200}{170} = 1.176,$$

a 17.6 percent jump. Had all 300 been nominal, $P = 300/270 = 1.111$, only 11.1 percent: the same shortfall of 30 now falls on 200 of nominal debt instead of 300.

(b) The bills' real value $200/P$ can fall toward zero but never below it. So the price level after a fall $\Delta S$ is $P = 200/(200-\Delta S)$, which explodes as $\Delta S$ approaches 200. No price level works for a fall of 200 or more: the largest shortfall prices can absorb is the real value of the nominal debt.

**Must hit, strict (c):**

- The price level cannot revalue the debt, so the valuation equation can hold only through the surpluses or a default.
- A shortfall is borne by taxpayers or the recipients of spending (higher future surpluses) or by bondholders (a haircut), not by holders of nominal claims through prices. For foreign-currency debt this is [6.1](06-01-the-transfer-problem-and-original-sin.md)'s problem.

**Wrong turns:** treating the indexed bonds as eroded by the jump; assuming prices can absorb any shortfall because they can rise without limit.

**Model answer (c):** With no nominal debt, prices cannot lower the real value of what is owed, so a shortfall must be closed by higher surpluses, paid by taxpayers or those whose spending is cut, or by default, paid by bondholders. Inflation is no exit for such a government, which is why debt owed in foreign currency is 6.1's problem.

</details>

## Flashback

**From Lesson [5.3](05-03-tax-smoothing-and-optimal-debt.md) (Tax smoothing and optimal debt):** *(Formal.)* An invented government smooths taxes optimally: distortion costs are quadratic, it borrows or saves at the real rate $r=2.5\%$, and GDP is 1 every year. Spending is 0.21 a year and expected to stay there, and the government holds no debt and no assets. At the start of year 0 a mineral windfall is announced: non-tax revenue of $W$ a year in each of years 0, 1 and 2, and nothing after. On the day of the announcement the government cuts the tax rate, once and for good, by 0.5 percentage points. (a) Find $W$. (b) Find the government's assets at the start of year 3, and the primary deficit it then runs every year. (c) Had the same yearly windfall $W$ lasted $N$ years instead of three, for what $N$ would the permanent cut have been exactly half of $W$?

<details>
<summary>Solution</summary>

The permanent cut is the annuity value of the windfall, and for $N$ equal yearly amounts it simplifies:

$$\frac{r}{1+r}\sum_{s=0}^{N-1}\frac{W}{(1+r)^s}=W\,\big[1-(1+r)^{-N}\big].$$

(a) With $N=3$ and $r=2.5\%$, $1-1.025^{-3}=0.07140$, so $0.005=0.07140\,W$ and $W=0.0700$: 7.0 percent of GDP a year. Check: the windfall's present value is $0.0700\,(1+1/1.025+1/1.025^2)=0.205$, and a cut of 0.005 a year for ever is worth $0.005\times1.025/0.025=0.205$.

(b) Once the windfall ends, debt stays at $d_3=d_0+\Delta\tau/r=0-0.005/0.025=-0.20$: assets of 20 percent of GDP. Taxes are then 0.205 against spending 0.21, a primary deficit of 0.005 (0.5 percent of GDP), which is exactly the interest on the fund, $0.025\times0.20$, so the assets stay at 0.20 for ever. The windfall totals $3W=0.210$: the cut takes 0.005 a year during years 0 to 2, and the rest, saved at 2.5 percent, grows to the 0.200 fund.

(c) The cut is half of $W$ when $1-(1+r)^{-N}=\tfrac12$, so $N=\ln2/\ln1.025=28.1$ years, whatever the size of $W$. For a three-year windfall the permanent cut is only 7 percent of $W$, for a ten-year one 22 percent, and it takes 28 years to reach half.

**Wrong turns:** setting the windfall's total equal to the fund whose interest pays the cut, $3W=\Delta\tau/r$, which gives $W=0.0667$ and forgets that the cut is also paid out during years 0 to 2; reporting the assets as the whole windfall, 0.210.

</details>

## Connections

- **Backward:** 5.1's [intertemporal budget constraint](05-01-the-government-budget-constraint.md) is the valuation equation in real terms. [5.4](05-04-fiscal-limits-and-unpleasant-arithmetic.md)'s active and passive policies decide which term adjusts, and its Sargent-Wallace arithmetic is the money-financed cousin of this lesson's bond revaluation. [`grad-macro` 6.2](../../grad-macro/lessons/06-02-policy-rules-taylor-principle.md)'s Taylor principle is the monetary half of the determinacy condition.
- **Forward:** [6.1](06-01-the-transfer-problem-and-original-sin.md): debt in a currency the government cannot issue cannot be inflated away, and a depreciation enlarges it. [8.3](08-03-relief-written-into-the-contract.md) asks how to write relief into the contract; nominal debt already carries a crude version, since its real payment falls whenever inflation surprises upward.
- **Sideways:** [`history-of-debt` 3.4](../../history-of-debt/lessons/03-04-humes-prophecy-carrying-a-great-debt.md) has Smith's "pretended payment" and Britain's return to gold at the old parity after 1815, the opposite exit, which raised the real debt. [`history-of-debt` 5.2](../../history-of-debt/lessons/05-02-could-germany-pay.md) notes that the German inflation of 1923 destroyed domestic mark claims. [`philosophy-of-debt` 6.2](../../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md) exempts debts inflated away from its claim that borrowing binds later taxpayers; this lesson says who pays instead, and whether that wrongs bondholders is philosophy's question. [`theology-of-debt` 5.4](../../theology-of-debt/lessons/05-04-did-the-usury-doctrine-change.md) asks whether a loan must return the same number of coins or the same value; a surprise inflation is where the two come apart.
