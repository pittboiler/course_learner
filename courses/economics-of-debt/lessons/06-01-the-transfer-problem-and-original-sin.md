# Economics of Debt · Lesson 6.1: Ability to pay: the transfer problem and original sin

> ⏱ ~15 min · Module 6: Sovereign default · Builds on: [5.4 Fiscal limits and unpleasant arithmetic](05-04-fiscal-limits-and-unpleasant-arithmetic.md), [5.5 The fiscal theory and inflating debt away](05-05-the-fiscal-theory-and-inflating-debt-away.md), [history-of-debt 5.2 Could Germany pay?](../../history-of-debt/lessons/05-02-could-germany-pay.md) · Unlocks: [6.2 Willingness to pay: reputation and Eaton-Gersovitz](06-02-reputation-and-eaton-gersovitz.md), [6.5 Self-fulfilling debt crises](06-05-self-fulfilling-debt-crises.md)

## Why this matters

Debt owed abroad takes taxes and foreign exchange to pay. Once lenders stop rolling it over, the country as a whole must earn that foreign exchange by selling abroad more than it buys, and its trade balance has to swing, fast. Thailand went from a current-account deficit of about 10 percent of GDP in 1996 to a surplus of about 8 percent in 1998, a swing that Krugman (1999, *International Tax and Public Finance*) treats as the Keynes-Ohlin transfer problem at its most extreme. Keynes and Ohlin argued in 1929 over how hard such a swing is; [history-of-debt 5.2](../../history-of-debt/lessons/05-02-could-germany-pay.md) has the German case and the debate. This lesson builds the model behind their exchange, then adds what Krugman put at the center of the Asian crisis: debt owed in a currency the debtor cannot print, which the price change that makes payment possible also enlarges.

## The idea

Separate two problems. A government owes foreign creditors 4.5 percent of GDP a year that they used to lend straight back, and now they want it paid. First it must raise the money, by taxing more or spending less: the **budgetary problem**. But its taxes come in pesos and the creditors want dollars, so the country as a whole must now sell 4.5 percent of GDP more abroad than it buys: the **[transfer problem](../reference.md#transfer-problem)**. Keynes's point was that a government can solve the first and still fail the second.

Foreigners buy more of a country's goods, and its residents fewer foreign ones, only if its goods get cheaper relative to theirs: a real depreciation. Say exports and imports are each 30 percent of GDP, and each 1 percent rise in the price of foreign goods relative to home goods raises export volume by 1 percent and cuts import volume by 0.5 percent. Each 1 percent of real depreciation then adds $0.30+0.15=0.45$ percent of GDP to the trade balance, and the swing of 4.5 needs about 10 percent.

Now say the debt is 80 percent of GDP, half of it owed in dollars. After a 10 percent real depreciation every dollar costs 10 percent more home output, so the dollar half grows from 40 to 44 percent of GDP and the debt ratio from 80 to 84. The price change that makes payment possible has made the debt bigger. Being unable to borrow abroad in your own currency is what Eichengreen and Hausmann (1999) called **[original sin](../reference.md#original-sin)**.

And if lenders, seeing the ratio climb, refinance even less, the country needs a bigger surplus, hence a bigger depreciation, hence a bigger debt. Whether that loop settles down or runs away is where this lesson ends.

## The formal version

**Setup.** Let $q$ be the real exchange rate, the price of foreign goods in units of home goods, set to $q=1$ before the payment, so a rise is a real depreciation and $\Delta q$ is its proportional size. Exports and imports are shares $X$ and $M$ of GDP at the initial prices. Export volume rises by $\eta_X$ percent and import volume falls by $\eta_M$ percent for each 1 percent rise in $q$. The payment requires the trade balance, in dollars as a share of initial GDP, to rise by $T$, the transfer.

**The required depreciation.** If the country is a price taker, buying and selling at dollar prices set in world markets, a depreciation moves only volumes: traded goods get dearer relative to home goods, so firms shift into exports and households out of imports. To first order the trade balance rises by $\kappa\,\Delta q$ with $\kappa=X\eta_X+M\eta_M$, so

$$\Delta q \approx \frac{T}{X\eta_X+M\eta_M}.$$

*In words:* the [required real depreciation](../reference.md#required-real-depreciation) is the transfer divided by the trade response $\kappa$, the points of GDP that each 1 percent of depreciation buys.

**Keynes's case.** Suppose instead the country exports its own goods, priced at home, so a real depreciation cuts their dollar price one for one. Each 1 percent of depreciation now also loses 1 percent of the dollar revenue on the exports it already sells, so $\kappa=X(\eta_X-1)+M\eta_M$, and from balanced trade ($X=M$)

$$\Delta q \approx \frac{T}{X\,(\eta_X+\eta_M-1)}.$$

*In words:* a depreciation improves the trade balance only if $\eta_X+\eta_M>1$, the [Marshall-Lerner condition](../reference.md#marshall-lerner-condition), and as the sum falls toward 1 the required depreciation grows without bound. This is the terms-of-trade loss Keynes feared for Germany: its goods had to get cheaper abroad, and with inelastic foreign demand, cheaper did not bring in many more dollars. Both formulas are first-order, good for small swings (Example 1 shows the error for a large one).

**Ohlin's reply.** The payment itself shifts spending. At unchanged prices the payer's residents, $T$ poorer, cut imports by $mT$, and the recipients, $T$ richer, buy $m^*T$ more of the payer's exports, where $m$ and $m^*$ are each side's marginal propensity to spend on the other's goods. Only the rest needs a price change:

$$\Delta q \approx \frac{(1-m-m^*)\,T}{\kappa}.$$

*In words:* the payer must depreciate only if $m+m^*<1$, that is, if each side spends extra income mostly on its own goods. This is the [transfer criterion](../reference.md#transfer-criterion). Keynes argued as if the income effects were small; Ohlin replied that they would do much of the work.

**Original sin.** Let debt be $d$ times GDP, a share $\phi$ of it owed in dollars. With real GDP unchanged, a real depreciation raises the home-goods value of the dollar part by the factor $1+\Delta q$:

$$d' = d\,(1-\phi)+d\,\phi\,(1+\Delta q) = d\,(1+\phi\,\Delta q).$$

*In words:* the debt ratio rises by the dollar debt times the depreciation. Eichengreen, Hausmann and Panizza (2005, in *Other People's Money*) find that countries unable to borrow abroad in their own currency have more volatile output and capital flows, and lower credit ratings than their debt levels would predict.

**The [balance-sheet loop](../reference.md#balance-sheet-loop).** Now let lenders refinance $\theta$ points of GDP less for each point the debt ratio rises. A depreciation raises the ratio by $\phi d\,\Delta q$, so the transfer grows to $T+\theta\phi d\,\Delta q$, and the depreciation must solve the fixed point

$$\Delta q = \frac{T+\theta\,\phi\,d\,\Delta q}{\kappa},$$

whose solution is

$$\Delta q = \frac{T/\kappa}{1-g},$$

where $g=\theta\phi d/\kappa$ is the loop's gain. *In words:* the first round, $T/\kappa$, raises the debt, lenders pull back, the next round is $g$ times as large, and the rounds sum to $(T/\kappa)/(1-g)$ if $g<1$. If $g\ge1$ they never shrink and no finite depreciation closes the gap: the loop runs until lending stops or the country defaults. For given $\kappa$, $\theta$ and $d$, the explosion comes at the dollar share $\phi^*=\kappa/(\theta d)$. Krugman (1999) builds the same loop from firms' balance sheets and finds collapse possible once its gain exceeds 1, which he traces to high leverage, a low propensity to import and large foreign-currency debt relative to exports: in $g$, a large $\theta$, a small $\kappa$ and a large $\phi d$.

**[Ability versus willingness](../reference.md#ability-versus-willingness-to-pay).** In this model the ability to pay fails outright only when no relative price can deliver the surplus: when $g\ge1$, or when Marshall-Lerner fails and only a slump that crushes imports can. Short of that, some depreciation works, and the question is whether the country will bear its cost rather than default. That is willingness to pay, the subject of [6.2](06-02-reputation-and-eaton-gersovitz.md).

## Picture

![Debt ratio after the adjustment against the dollar share of the debt. With passive lenders it rises in a line from 80 to 88 percent of GDP; when lenders pull back it bends up, to 87.2 at a half share; with home-priced exports it explodes as the share nears 0.375.](assets/06-01-fig1.svg)

Blue is Example 1's price taker: dashed with passive lenders, solid with Example 2's lenders, who refinance less as the debt ratio rises. The loop bends the solid curve up, but for this country it stays finite at every dollar share. Red is the same country with exports priced at home: its smaller trade response makes the gain reach 1 at a dollar share of 0.375, beyond which no depreciation is enough.

## Worked examples

**Example 1 (the model on a clean case).** The idea's country: $X=M=0.30$, $\eta_X=1$, $\eta_M=0.5$, $T=0.045$, $d=0.8$, $\phi=\tfrac12$.

- *Price taker.* $\kappa=0.30+0.15=0.45$, so $\Delta q\approx0.045/0.45=10\%$ and $d'=0.8\,(1+0.5\times0.10)=0.84$.
- *Home-priced exports.* $\kappa=0.30\times(1-1)+0.15=0.15$. With $\eta_X=1$, each extra unit sold is paid for by the lower price of all units, so dollar export revenue does not move and imports must do everything. $\Delta q\approx0.045/0.15=30\%$, triple the price taker's, and $d'=0.8\,(1+0.5\times0.30)=0.92$. Marshall-Lerner holds ($1+0.5>1$) with little room. Taking the constant elasticities literally, the exact answer solves $0.30-0.30\,q^{-1/2}=0.045$, so $q=0.85^{-2}$: a depreciation of 38.4 percent. The first-order formula understates.
- *Ohlin.* If the payer's marginal propensity to import is $m=0.25$ and its creditors spend $m^*=0.05$ of their receipts on its goods, only 70 percent of the transfer needs a price change: 7 percent for the price taker, 21 with home-priced exports.
- *Who pays.* Residents give up 4.5 percent of GDP of spending, and a home wage now buys $1-1/1.1=9.1$ percent fewer imports (23.1 percent with home-priced exports). Exporters gain. The dollar creditors are paid in full. Taxpayers also owe 4 more points of GDP on the dollar half; had it been owed in pesos, its holders would have lost 9.1 percent of its dollar value instead.

**Example 2 (why you'd care: when lenders pull back).** Same price-taking country, but lenders now refinance $\theta=0.5$ points of GDP less for each point the debt ratio rises. The gain is $g=0.5\times0.5\times0.8/0.45=4/9$. The first round of 10 percent adds 4 points to the ratio, so lenders pull 2 points of GDP; replacing them takes $0.02/0.45=4.44$ percent more depreciation, which adds 1.78 points to the ratio, and so on:

$$10+4.44+1.98+0.88+\dots=\frac{10}{1-4/9}=18\%.$$

The debt ratio ends at $0.8\,(1+0.5\times0.18)=87.2\%$, not 84. For this country the loop cannot explode: $\phi^*=0.45/(0.5\times0.8)=1.125$ exceeds any possible share, and even all-dollar debt converges, at a ruinous 90 percent depreciation.

Had its exports been priced at home, the same lenders would give $g=0.5\times0.5\times0.8/0.15=4/3$. Each round is a third larger than the last (30, 40, 53 percent, ...), and no finite depreciation works. Its critical share is $\phi^*=0.15/(0.5\times0.8)=0.375$: once lenders behave this way, a country owing more than three-eighths of its debt in dollars cannot adjust by price at all. So the currency of the debt, not just its level, decides whether a sudden stop is survivable. Each lender that pulls back protects itself, but the pull-back deepens the depreciation, which residents pay for and which raises the default risk of every creditor who stays. Two things cut $g$: owing pesos, which moves the currency loss onto creditors, who will charge for carrying it, and an official lender that replaces departing credit, setting $\theta$ near zero.

## Watch out

- **You might think $X\eta_X+M\eta_M$ always gives the depreciation, but actually** it holds only for a price taker. A country selling its own goods loses revenue on every unit it already exports, and needs the Marshall-Lerner denominator $X(\eta_X+\eta_M-1)$: triple the depreciation in Example 1.
- **You might think the transfer problem is about currency, but actually** it is about who is owed. A payment to foreigners must be earned by a surplus whatever its currency; the currency decides only who bears a depreciation, the debtor (dollars) or the creditor (pesos).
- **You might think a fixed exchange rate escapes original sin, but actually** it spreads it. With the nominal rate pegged, the real depreciation must come from falling home prices and wages, which raise the ratio of *all* nominal debt to nominal GDP, so every peso of debt behaves like a dollar: Example 1's country would end at 88, not 84. Hence Germany's gold-standard deflation ([history-of-debt 5.2](../../history-of-debt/lessons/05-02-could-germany-pay.md)), Greece's internal devaluation ([history-of-debt 6.2](../../history-of-debt/lessons/06-02-the-eurozone-and-greece.md)) and [4.1](04-01-fishers-debt-deflation-formalized.md)'s debt-deflation.
- **You might think lenders who pull back are panicking, but actually** each responds sensibly to a debt ratio that really has risen. The gain is a property of the whole system: debt, currency share, trade response. Whether fear alone can create the crisis is [6.5](06-05-self-fulfilling-debt-crises.md)'s question.

## One-liner

> A debt owed abroad is paid with a trade surplus bought by a real depreciation; owe it in dollars and the depreciation enlarges the debt, and if lenders retreat as it grows, no depreciation may be enough.

## Problems

**P1 (🟢) *(Formal.)*** An invented economy starts from balanced trade, with exports and imports each 25 percent of GDP. For each 1 percent of real depreciation, export volume rises 0.8 percent and import volume falls 0.6 percent. Its lenders stop refinancing 2 percent of GDP a year, so its trade balance must rise by 2 percent of GDP. (a) Approximate the required real depreciation if it is a price taker. (b) Recompute if its exports are its own goods, priced at home. (c) In case (b), its marginal propensity to import is 0.2, and its creditors spend 0.05 of what they receive on its goods. Recompute. One decimal throughout.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** A price-taking country's debt is 100 percent of GDP, 40 percent of it in dollars. Each 1 percent of real depreciation raises its trade balance by 0.2 percent of GDP, and it must raise the balance by 2 percent of GDP. Lenders refinance 0.3 points of GDP less for each point the debt ratio rises. (a) Find the loop's gain, the depreciation with and without the lenders' response, and the debt ratio after each. (b) Above what dollar share would no finite depreciation work? (c) Suppose that before the shock the government had swapped half its dollar debt for peso debt held by the same lenders. Find the depreciation and the debt ratio now, and the share of their dollar value the peso bonds lose. Who bears that loss, and how will lenders price the swap beforehand? Two sentences for the last question.

**P3 (🔴, optional) *(Exegetical.)*** An invented government owes two debts, each 30 percent of GDP: peso bonds held by foreign pension funds, and dollar bonds held by its own banks, which fund them with residents' dollar deposits. (a) For each debt, does servicing it pose a budgetary problem, a transfer problem, or both? Give the reason. (b) The peso depreciates 20 percent in real terms. For each debt, say what happens to its value and who bears the change. (c) The finance minister proposes swapping the banks' dollar bonds for peso bonds. What does the swap change, and what risk does it leave in the country? Two sentences per part.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) $\kappa=X\eta_X+M\eta_M=0.25\times0.8+0.25\times0.6=0.20+0.15=0.35$, so $\Delta q\approx0.02/0.35=5.7\%$.

(b) Each 1 percent of depreciation now also cuts the dollar price of the exports already sold: $\kappa=0.25\times(0.8-1)+0.15=-0.05+0.15=0.10$, which is $X(\eta_X+\eta_M-1)=0.25\times0.4$. So $\Delta q\approx0.02/0.10=20.0\%$, three and a half times (a). Marshall-Lerner holds ($0.8+0.6=1.4>1$), but with an export elasticity at or below $1-0.6=0.4$ no depreciation would help. (Taking the constant elasticities literally gives 24.4 percent: the linear answer understates.)

(c) At unchanged prices the income effects deliver $(0.2+0.05)\,T$, so only 75 percent of the transfer needs a price change: $0.75\times20.0\%=15.0\%$.

**Wrong turns:** using $X\eta_X+M\eta_M$ in (b), which gives 5.7 percent again and misses the revenue lost on existing exports; in (c), counting only the payer's import cut, $(1-0.2)\times20\%=16\%$, and forgetting that the creditors' extra spending on its goods also closes part of the gap.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) $g=\theta\phi d/\kappa=0.3\times0.4\times1.0/0.2=0.6$. Without the lenders' response, $\Delta q\approx0.02/0.2=10\%$ and $d'=1.0\times(1+0.4\times0.10)=104\%$ of GDP. With it, $\Delta q=10\%/(1-0.6)=25\%$ and $d'=1+0.4\times0.25=110\%$.

(b) $g$ reaches 1 at $\phi^*=\kappa/(\theta d)=0.2/0.3=2/3$: with more than two-thirds of the debt in dollars, no finite depreciation works.

(c) Now $\phi=0.2$, so $g=0.3\times0.2\times1.0/0.2=0.3$ and $\Delta q=10\%/0.7=14.3\%$ (exactly $1/7$). The debt ratio is $1+0.2\times\tfrac17=102.9\%$: the peso half of the old dollar debt no longer grows. The peso bonds are now worth $1/(1+\tfrac17)=7/8$ of their old dollar value, a loss of 12.5 percent.

**Must hit, strict (c):**

- The lenders holding the peso bonds bear the 12.5 percent loss. Before the swap the country's taxpayers bore it, as a larger peso cost of dollar debt.
- Lenders anticipate this and charge a higher interest rate on peso debt, covering expected depreciation and currency risk, so the country pays for the protection in advance.

**Wrong turns:** adding only the second round, $10\%\times(1+0.6)=16\%$, instead of summing the whole series; dividing $T$ by $\kappa-\theta$, which forgets that lenders respond to the rise in the debt ratio, $\phi d\,\Delta q$, not to the depreciation itself (here it even gives a negative depreciation).

**Model answer (c):** The foreign lenders now holding peso bonds bear the 12.5 percent loss in dollar value, which before the swap fell on the country's taxpayers as a larger peso cost of dollar debt. Lenders will see this coming and charge a higher peso interest rate to cover expected depreciation and the currency risk, so the country pays for its protection up front.

---

**P3** *(Exegetical.)*

**Must hit, strict (a):**

- Peso bonds held abroad: both. Taxes must raise the pesos (budgetary), and when the funds take their payments home the country must supply dollars, which it must earn with a trade surplus (transfer).
- Dollar bonds held by the banks: budgetary only. The government raises pesos and buys dollars, but from residents and for residents, so nothing crosses the border and no national surplus is needed.

**Must hit, strict (b):**

- Peso bonds: unchanged at 30 percent of GDP in pesos. Their dollar value falls by $1-1/1.2=16.7$ percent, a loss the foreign funds bear.
- Dollar bonds: they rise to $30\times1.2=36$ percent of GDP, so taxpayers pay 20 percent more home output per dollar, while the banks and their depositors, owed dollars, lose nothing. For the nation this is a redistribution from taxpayers to holders of dollar claims, not a cost paid abroad. Total debt goes from 60 to 66 percent of GDP.

**Must hit, strict (c):**

- The swap removes the government's currency exposure: its debt no longer grows when the peso falls.
- The mismatch moves to the banks, which now hold peso bonds against dollar deposits. A depreciation can now make them insolvent, and a government that rescues them takes the loss back, so the risk stays in the country.

**Wrong turns:** calling the dollar bonds a transfer problem because they are in dollars (the transfer problem follows the creditor's residence, the valuation effect follows the currency); saying the depreciation makes the peso bonds heavier; treating the swap as removing the risk rather than relocating it.

**Model answer:** (a) The peso bonds pose both problems: the government must tax to raise the pesos, and when the foreign funds repatriate, the country must earn the dollars with a trade surplus. The dollar bonds pose only the budgetary problem, since the government buys dollars from residents and pays them to residents, so nothing leaves the country. (b) The peso bonds stay at 30 percent of GDP but lose 16.7 percent of their dollar value, which the foreign funds bear. The dollar bonds rise to 36 percent of GDP, a cost to taxpayers that the banks' depositors escape, so it redistributes within the country rather than costing it anything abroad. (c) The swap takes the currency exposure off the government's books and puts it on the banks, which now hold peso assets against dollar deposits. A depreciation could now break the banks, and if the government rescues them it takes the loss back, so the risk has moved, not gone.

</details>

## Flashback

**From Lesson [5.4](05-04-fiscal-limits-and-unpleasant-arithmetic.md) (Fiscal limits and unpleasant arithmetic):** *(Formal.)* An invented economy has zero real growth and a real interest rate of $r=3\%$. Its treasury can run a primary surplus of at most $\bar s=2.4\%$ of GDP and runs exactly that every year, whatever the central bank does. Debt is 100 percent of GDP. The central bank can also raise revenue by printing money. Money demand is Cagan, so printing at inflation rate $\pi$ (continuously compounded) raises $S(\pi)=k\,\pi\,e^{-\alpha\pi}$ of GDP a year, with $k=0.09$ (base money worth 9 percent of GDP at zero inflation) and $\alpha=2.5$. (a) Find the fiscal limit, and the seigniorage the bank must raise each year to hold the ratio at 100 percent. (b) Suppose the bank prints nothing for $T$ years, then prints whatever holds the ratio where it has got to. Find the largest $T$ that works, to one decimal, and the inflation rate the bank then needs. (c) Find the largest debt ratio that taxes and money together can back.

<details>
<summary>Solution</summary>

(a) Zero growth makes $a-1=r=0.03$. The fiscal limit is $\bar d=\bar s/(a-1)=0.024/0.03=0.80$: 80 percent of GDP, so at 100 percent taxes alone cannot hold the ratio; even at maximum austerity it rises 0.6 points a year (interest of 3 points against a surplus of 2.4). Holding it takes seigniorage of $\sigma_0=(a-1)\,d_0-\bar s=0.03-0.024=0.006$: 0.6 percent of GDP a year.

(b) The inflation tax peaks at $\pi^*=1/\alpha=40$ percent, where $S_{\max}=\dfrac{k}{\alpha e}=\dfrac{0.09}{2.5\,e}=0.01324$: 1.32 percent of GDP. Each year the bank prints nothing multiplies the seigniorage it will need by $a$, so after $T$ years it needs $a^T\sigma_0$, and this cannot exceed $S_{\max}$:

$$T\le\frac{\ln(S_{\max}/\sigma_0)}{\ln a}=\frac{\ln 2.207}{\ln 1.03}=\frac{0.7918}{0.02956}=26.8\text{ years}.$$

At that date the need equals the ceiling, so the bank needs the revenue-maximizing rate, 40 percent a year. A year later no inflation rate raises enough, and the standoff ends in a fiscal adjustment or a default.

(c) Taxes back at most $\bar d=0.80$ and money at most $S_{\max}/(a-1)=0.441$, so together

$$\frac{\bar s+S_{\max}}{a-1}=\frac{0.024+0.01324}{0.03}=1.241,$$

124 percent of GDP, at 40 percent inflation for ever. It is also where the debt stands when the longest hold-out ends: with no printing the gap above the fiscal limit grows by $a$ a year, $d_T=\bar d+a^T\,(d_0-\bar d)=0.8+2.207\times0.2=1.241$. Above it only default is left.

**Wrong turns:** dropping the factor $e^{-1}$, so that the ceiling is $k/\alpha=3.6$ percent of GDP, which stretches the hold-out to 61 years and lifts the combined limit to 200 percent; taking $\sigma_0=(a-1)\,d_0=3$ percent of GDP, forgetting that the treasury's surplus already pays 2.4 points of the interest, which makes even printing at once look impossible.

</details>

## Connections

- **Backward:** [5.4](05-04-fiscal-limits-and-unpleasant-arithmetic.md)'s [fiscal limit](../reference.md#fiscal-limit) caps the budgetary problem; the transfer problem is a second, external cap that can bind when the budget does not. [5.5](05-05-the-fiscal-theory-and-inflating-debt-away.md) showed that nominal debt in the home currency can be inflated away; dollar debt cannot, and a depreciation enlarges it. The debt ratio is [5.1](05-01-the-government-budget-constraint.md)'s, and original sin adds an exchange-rate term to its identity. The loop is the balance-sheet amplification of [3.3](03-03-the-financial-accelerator.md) and [3.4](03-04-kiyotaki-moore-collateral-cycles.md), with the exchange rate as the price that moves net worth.
- **Forward:** [6.2](06-02-reputation-and-eaton-gersovitz.md) asks when a country that can pay chooses to, and [6.3](06-03-bulow-rogoff-and-sanctions.md) what enforcement makes it. Krugman's own version of the loop has multiple equilibria, a self-fulfilling crisis of the kind [6.5](06-05-self-fulfilling-debt-crises.md) studies for sovereigns whose lenders refuse to roll over. [8.3](08-03-relief-written-into-the-contract.md) writes relief into the contract; peso debt already shares a depreciation with its creditors, a crude form of the contingent debt studied there.
- **Sideways:** [history-of-debt 5.2](../../history-of-debt/lessons/05-02-could-germany-pay.md) tells the German case, where American lending let reparations be paid without the surplus, so what Germany could pay was asked only once that lending stopped. [history-of-debt 6.2](../../history-of-debt/lessons/06-02-the-eurozone-and-greece.md) reruns the transfer problem inside a currency union, and its sovereign-bank "doom loop" is a cousin of this lesson's loop, with bank losses where this one has a depreciation. [theology-of-debt 6.2](../../theology-of-debt/lessons/06-02-international-debt-and-the-jubilee-call.md) reads *Sollicitudo Rei Socialis* 19 (1987), which diagnoses this mechanism in its own terms: indebted countries had to export the capital they needed just to service their debts. Whether creditors ought therefore to forgive is that course's question; this lesson says only who bears the cost.
