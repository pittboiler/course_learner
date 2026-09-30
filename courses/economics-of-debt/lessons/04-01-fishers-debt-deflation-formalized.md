# Economics of Debt · Lesson 4.1: Fisher's debt-deflation, formalized

> ⏱ ~15 min · Module 4: Debt-deflation, Minsky and 2008 · Builds on: [3.4 Kiyotaki-Moore: collateral cycles](03-04-kiyotaki-moore-collateral-cycles.md), [3.5 The leverage cycle](03-05-the-leverage-cycle.md), [grad-macro 6.1](../../grad-macro/lessons/06-01-monetary-fiscal-nk.md) · Unlocks: [4.2 Minsky, informally and formally](04-02-minsky-informally-and-formally.md), [4.3 Household debt and the Great Recession](04-03-household-debt-and-the-great-recession.md), [4.4 Overborrowing](04-04-overborrowing.md)

## Why this matters

Irving Fisher's "The Debt-Deflation Theory of Great Depressions" (1933, *Econometrica*) argued that great depressions are driven by two things above all: too much debt to start with, and the deflation that the scramble to repay it sets off. His own arithmetic for the United States: between 1929 and March 1933, liquidation cut nominal debts by about 20 percent, but each dollar came to buy about 75 percent more, so real debt *rose* by about 40 percent ($0.8 \times 1.75 = 1.40$). Repaying had made the debt heavier. Eggertsson and Krugman (2012, *QJE*) turned the story into a model of 2008, and the model settles a puzzle worth feeling: a debt is a transfer between borrower and lender, so how can paying it back shrink an economy's total spending?

## The idea

Take two households. Bea is impatient and always borrows as much as her bank allows. Sam is patient and is, in effect, her lender. One day the bank cuts Bea's limit. She must pay down debt out of this year's income, and with no savings to draw on she cuts her spending by the full amount.

Nothing has been destroyed: every dollar Bea repays lands with Sam. But Sam treats it as a windfall and saves almost all of it, so total spending falls. For spending to stay at what the economy can produce, Sam must be persuaded to spend Bea's repayment, and the one price that can persuade him is the real interest rate. Say Sam normally consumes 100 a year, absorbing the repayment means consuming 110 this year before returning to 100, and he values next year's consumption at 95 cents on the dollar. He will choose that path only if saving *loses* money, at a real rate of about −4.3 percent. The real rate that keeps the economy at full employment is the **natural rate**, and a big enough deleveraging drives it below zero.

Now add Fisher. If Bea's debt is fixed in dollars and prices fall 10 percent, each dollar she owes costs 10 percent more goods. Her real repayment grows, Sam has more to absorb, and the natural rate falls further. Slumps push prices down, so the slump feeds the thing that caused it.

Last, the floor. Cash pays zero, so the nominal rate cannot go much below zero, and if no inflation is expected neither can the real rate. At a natural rate of −4 percent nothing persuades Sam, and the unabsorbed repayment becomes lost sales, lost income and lost jobs. Worse, if prices fall faster when sales fall, Bea's real debt grows faster: more flexible prices, deeper slump.

## The formal version

**Setup** (Eggertsson and Krugman's endowment economy, with the two endowments allowed to differ). Two groups of equal size receive constant endowments each period: $y_s$ for savers, $y_b$ for borrowers. Savers maximize $\sum_{t\ge0}\beta^t \log c^s_t$: log utility with discount factor $\beta$. Borrowers discount the future more heavily, so they always borrow up to their limit. A borrower who takes $b_t$ at date $t$ owes $(1+r_t)\,b_t$ at $t+1$, where $r_t$ is the real interest rate, and the limit caps that amount:

$$(1+r_t)\,b_t \le D.$$

*In words:* $D$ is the face value a borrower may owe next period. It is the [collateral constraint](../reference.md#collateral-constraint) of [3.4](03-04-kiyotaki-moore-collateral-cycles.md) with the collateral's value taken as given; a fall in land prices, or a margin spike as in [3.5](03-05-the-leverage-cycle.md), is what cuts it.

**Steady state.** With constant consumption the savers' Euler equation ([grad-macro 1.3](../../grad-macro/lessons/01-03-euler-transversality.md)) gives $1+\bar r = 1/\beta$. Borrowers roll $D$ over, paying net interest $\frac{\bar r}{1+\bar r}D = (1-\beta)D$ each period, so $c^b = y_b-(1-\beta)D$ and $c^s = y_s+(1-\beta)D$.

**The [deleveraging shock](../reference.md#deleveraging-shock).** At date 1 the limit falls, unexpectedly and for good, from $D_H$ to $D_L$. Borrowers repay the $D_H$ now due but may borrow only $D_L/(1+r_1)$:

$$c^b_1 = y_b - D_H + \frac{D_L}{1+r_1}.$$

From date 2 on the economy sits in the new steady state, so $c^s_2 = y_s + (1-\beta)D_L$. The goods market clears when $c^s_1 = y_s + D_H - D_L/(1+r_1)$, and the savers' log Euler equation $c^s_2 = \beta(1+r_1)\,c^s_1$ then pins the rate:

$$1 + r^n_1 = \frac{y_s + D_L}{\beta\,(y_s + D_H)}.$$

*In words:* the [natural rate](../reference.md#natural-rate) $r^n_1$, the real rate that clears the goods market at full employment, falls below its steady state by the factor $(y_s+D_L)/(y_s+D_H)$. It is negative exactly when

$$\beta D_H - D_L > (1-\beta)\,y_s.$$

*In words:* a cut that is large relative to savers' income needs a negative real rate to make savers spend what borrowers repay. Only savers' parameters appear. Borrowers at the limit spend whatever it leaves them, a marginal propensity to consume (MPC) of one, like the hand-to-mouth households of [grad-macro 6.4](../../grad-macro/lessons/06-04-heterogeneous-agent-taste.md). A saver spends only about $1-\beta$ of a one-period windfall, the $r/(1+r)$ of [grad-macro 5.1](../../grad-macro/lessons/05-01-permanent-income-life-cycle.md).

**Fisher's channel.** Let the legacy debt be fixed in money. If the date-1 price level is $P_1$, relative to the level at which the debt was contracted, borrowers repay $D_H/P_1$ in goods, while the new limit stays real:

$$1 + r^n_1 = \frac{y_s + D_L}{\beta\,(y_s + D_H/P_1)}.$$

*In words:* deflation ($P_1<1$) raises the real legacy debt and moves more goods from MPC-one borrowers to low-MPC savers, so the natural rate falls further. That is [debt deflation](../reference.md#debt-deflation) in one line. Fisher's own chain runs from distress selling and shrinking bank deposits through falling prices, net worth and profits to lost output, pessimism and hoarding, and it ends with nominal rates falling while real rates rise. That last link is the floor.

**The floor.** The real rate satisfies $1+r_1 = (1+i_1)/(1+\pi^e)$, where $i_1$ is the nominal rate and $\pi^e$ the inflation expected from date 1 to date 2 (the Fisher equation, from the same Fisher). The [zero lower bound](../reference.md#zero-lower-bound) $i_1 \ge 0$ of [grad-macro 6.1](../../grad-macro/lessons/06-01-monetary-fiscal-nk.md) puts a floor under the real rate, and with $\pi^e = 0$ the floor is zero. Below it the rate cannot clear the market, so with sticky prices output $Y_1$ does. Let borrowers earn a share $\theta$ of output and spend all of it, while savers spend $c^s_2/[\beta(1+r_1)]$ whatever their income. Adding the two:

$$(1-\theta)\,Y_1 = \frac{y_s + D_L}{\beta\,(1+r_1)} - \frac{D_H}{P_1}.$$

*In words:* output is what savers choose to spend at the going real rate plus what borrowers have left after repaying the old debt at today's prices, multiplied by $1/(1-\theta)$ because borrowers also spend their own income. Set $Y_1$ to full-employment output $\bar Y = y_s + y_b$ (so $(1-\theta)\bar Y = y_s$) and you get the natural rate back; set $r_1 = 0$ and you get the slump.

**The [paradox of flexibility](../reference.md#paradox-of-flexibility).** Since $D_H/P_1$ rises as $P_1$ falls, demand at the floor *rises* with the price level. If prices fall with slack and no later catch-up is expected (Eggertsson and Krugman let the central bank stabilize inflation afterward, so today's price level stays), more flexible prices mean a deeper slump. Off the floor the central bank matches the nominal rate to the natural rate, and the paradox vanishes. Why borrowers took on $D_H$ without pricing any of this in is the [aggregate-demand externality](../reference.md#aggregate-demand-externality) of [4.4](04-04-overborrowing.md).

## Picture

![Two downward-sloping lines of the natural real rate against the size of the debt-limit cut: one for debt fixed in goods, crossing zero at a cut of 0.09, and one for debt fixed in money with prices 10 percent lower, lying 3 to 4 points below and crossing zero at a cut of 0.027](assets/04-01-fig1.svg)

Both lines come from the natural-rate formula in Example 1's economy. Deflation lowers the whole schedule by 3 to 4 points, so a much smaller cut pushes the natural rate into the shaded region, where a zero nominal rate with no expected inflation leaves the real rate stuck above it.

## Worked examples

**Example 1 (clean).** Savers: $\beta = 0.95$ and $y_s = 1.2$. Borrowers: $y_b = 0.8$. The limit is cut from $D_H = 0.6$ to $D_L = 0.4$. All figures are illustrative.

- Steady state: $\bar r = 1/0.95 - 1 = 5.26\%$. Borrowers pay $0.05 \times 0.6 = 0.03$ a period, so $c^b = 0.77$ and $c^s = 1.23$.
- Date 1: $1+r^n_1 = 1.6/(0.95 \times 1.8) = 0.9357$, so $r^n_1 = -6.43\%$. Borrowers repay 0.6 and borrow $0.4/0.9357 = 0.4275$, so $c^b_1 = 0.6275$ and $c^s_1 = 2 - 0.6275 = 1.3725$. Check: $0.95 \times 0.9357 \times 1.3725 = 1.22 = c^s_2$.
- Threshold: the natural rate is negative once $D_L < 0.95 \times 0.6 - 0.05 \times 1.2 = 0.51$, that is, for any cut beyond 0.09, 15% of the limit.
- Fisher: make the legacy debt nominal, with prices 10% lower. Real repayment is $0.6/0.9 = 0.667$ and $1+r^n_1 = 1.6/(0.95 \times 1.867) = 0.902$, so $r^n_1 = -9.77\%$. A cut of just 0.027 now makes the rate negative, and even with no cut it drops from 5.26% to 1.50%.

**Example 2 (the slump and the paradox).** Same economy, but prices are sticky, the nominal rate is at zero and no inflation is expected, so $r_1 = 0$ while $r^n_1 = -6.43\%$. Borrowers' income share is $\theta = 0.8/2 = 0.4$.

- Savers spend $c^s_2/\beta = 1.22/0.95 = 1.284$, short of the 1.3725 that full employment needs.
- *Rigid prices* ($P_1 = 1$): $0.6\,Y_1 = 1.6/0.95 - 0.6 = 1.084$, so $Y_1 = 1.807$, **9.6% below potential**. Borrowers consume $1.807 - 1.284 = 0.523$ instead of 0.6275.
- *More flexible prices:* let prices fall by half the output gap, $P_1 = 1 + 0.5\,(Y_1/2 - 1)$. The demand equation becomes

$$0.6\,Y_1 = \frac{1.6}{0.95} - \frac{0.6}{1 + 0.5\,(Y_1/2 - 1)},$$

whose root near potential is $Y_1 = 1.737$, **13.2% below potential**, with $P_1 = 0.934$. Real legacy debt rises to 0.642, the natural rate itself sinks to −8.6%, and borrowers consume 0.452.

Flexibility made the slump worse. Savers' spending is the same in both cases, pinned by the zero real rate, so every extra unit of loss lands on borrowers, whose income falls as their real debt rises. In these numbers, once prices fall by more than about 0.97 percent per percent of slack, the supply and demand curves never meet and no price level stops the fall: a formal cousin of Fisher's image of a boat that capsizes instead of righting itself.

Who gains and who pays: the forced repayment itself is a transfer from borrowers to savers, and the floor adds a loss on top. Against the full-employment path, the rigid-price slump wastes 0.193 of output: borrowers lose 0.105 of consumption and savers 0.088.

## Watch out

- **You might think a slump with real rates near zero shows there is no shortage of demand, but actually** the natural rate is the real rate at *full employment*, a model object nobody observes. At the floor the actual real rate sits above it, and that gap is the shortage.
- **You might think falling prices are contractionary in themselves, but actually** here a lower price level matters only because debts are fixed in money: it moves goods from MPC-one borrowers to low-MPC savers. With debt fixed in goods, the same deflation would change nothing real.
- **You might think the paradox of flexibility condemns flexible prices, but actually** it needs the zero lower bound and no expected catch-up in prices. Off the floor the central bank sets the nominal rate to the natural rate, and flexibility does no harm.

## One-liner

> A forced repayment moves spending power from people who spend it all to people who save most of it; the real rate must fall to make savers spend, and when the zero bound stops it, output falls instead, while every fall in prices adds to the real debt.

## Problems

**P1 (🟢) *(Formal.)*** Savers have log utility, discount factor 0.97 and endowment 1.5; borrowers sit at a limit of $D_H = 0.8$, the face value due each period. (a) Find the smallest cut in the limit that makes the natural rate negative, as a number and as a share of the old limit. (b) Instead, leave the limit at 0.8 in real terms but make the legacy debt nominal. With no cut at all, how far must the price level fall to make the natural rate negative? (c) In one sentence, why did you never need the borrowers' endowment?

**P2 (🟡) *(Formal (a)–(c) · Exegetical (d).)*** Take the lesson's economy (savers: log utility, $\beta = 0.95$, endowment 1.2; borrowers: endowment 0.8, income share 0.4; legacy debt 0.6 due at date 1), but the limit falls only to 0.45. Prices are rigid, the nominal rate is at zero and no inflation is expected. (a) Find the natural rate and date-1 output. (b) Before date 1, a law writes the legacy debt down from 0.6 to $W$. Find the $W$ that makes the natural rate exactly zero. (c) Compute savers' and borrowers' date-1 consumption with and without the write-down. (d) In two sentences: who pays for the write-down here, and what would change if the natural rate had stayed positive after the cut?

**P3 (🔴, optional) *(Formal (a)–(b) · Exegetical (c).)*** Fisher's cure was reflation; at the zero bound its modern form is expected inflation. In Example 2's rigid-price economy (limit cut to 0.4, natural rate −6.43%), the nominal rate is zero. (a) What inflation from date 1 to date 2, if expected, restores full employment? (b) If the central bank can credibly promise only 3%, how far below potential is date-1 output? (c) In one sentence: why might savers not believe a promise to deliver the full amount in (a)?

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) The rate is negative when $\beta D_H - D_L > (1-\beta)\,y_s$, so the limit must fall below

$$D_L^{*} = 0.97 \times 0.8 - 0.03 \times 1.5 = 0.776 - 0.045 = 0.731.$$

The smallest cut is $0.8 - 0.731 = 0.069$, or 8.6% of the old limit. Check: $1+r^n_1 = (1.5+0.731)/(0.97 \times 2.3) = 2.231/2.231 = 1$.

(b) Now $D_L = D_H = 0.8$ and the real legacy debt is $0.8/P_1$, so the condition is $0.97 \times 0.8/P_1 - 0.8 > 0.045$:

$$P_1 < \frac{0.776}{0.845} = 0.9183.$$

Prices must fall by more than 8.2%. At that point the real legacy debt is 0.871, so borrowers must pay down 0.071 with no tightening of credit at all: deflation alone forces the deleveraging.

(c) Borrowers at the limit do not trade today off against tomorrow, so the rate is set by savers' Euler equation alone, and borrowers' endowment only changes how much they themselves consume.

**Wrong turns:** using total output (2.0) in place of savers' endowment; in (b), setting the price fall equal to the needed rise in real debt, $0.071/0.8 = 8.9\%$, when a price fall of $x$ raises real debt by $1/(1-x) - 1$, which is more than $x$.

---

**P2** *(Formal (a)–(c) · Exegetical (d).)*

(a) $1 + r^n_1 = (1.2+0.45)/(0.95 \times 1.8) = 1.65/1.71 = 0.9649$, so $r^n_1 = -3.51\%$. At $r_1 = 0$ and $P_1 = 1$: $0.6\,Y_1 = 1.65/0.95 - 0.6 = 1.1368$, so $Y_1 = 1.8947$, 5.26% below potential.

(b) Set $1+r^n_1 = 1$: $1.65 = 0.95\,(1.2 + W)$, so $W = 1.65/0.95 - 1.2 = 0.5368$. That is a write-down of 0.063, or 10.5% of the legacy debt.

(c) In both cases savers' consumption is pinned by their Euler equation at a zero real rate: $c^s_1 = c^s_2/\beta = (1.2 + 0.05 \times 0.45)/0.95 = 1.2868$. Savers' income is $0.6\,Y_1$, and they lend 0.45 at date 1.

| | Output | Savers' income | Repayment received | Savers consume | Borrowers consume |
|---|---|---|---|---|---|
| No write-down | 1.8947 | 1.1368 | 0.6000 | 1.2868 | 0.6079 |
| Write-down to 0.5368 | 2.0000 | 1.2000 | 0.5368 | 1.2868 | 0.7132 |

Borrowers gain 0.105. Savers lose 0.063 of repayment and gain 0.063 of income, so they are exactly as well off: in this model the write-down is a (weak) Pareto improvement.

**Must hit, strict (d):**

- At the floor, the write-down is paid for by output the slump was wasting: savers' lost repayment is exactly offset by the income that full employment restores, because the zero real rate pins their consumption either way.
- Had the natural rate stayed positive, the central bank would have held output at potential anyway, and the write-down would be a pure transfer: borrowers consume more and savers exactly as much less.

**Wrong turns:** calling the write-down costless to creditors in general, when the result depends on the floor binding; forgetting that savers' income, not only their repayment, moves with output. What anticipating such write-downs does to lending before date 1 is outside this model; it is [8.1](08-01-forgiveness-commitment-and-the-fresh-start.md)'s question.

**Model answer (d):** Savers nominally pay, receiving 0.063 less, but at the floor the income that restored output brings them repays that loss exactly, so the write-down is financed by output that would otherwise have been lost. Had the natural rate stayed positive, output would have been at potential with or without it, and the write-down would only have moved consumption from savers to borrowers.

---

**P3** *(Formal (a)–(b) · Exegetical (c).)*

(a) With $i_1 = 0$, $1 + r_1 = 1/(1+\pi^e)$. Full employment needs $1 + r_1 = 1 + r^n_1 = 160/171$, so $\pi^e = 171/160 - 1 = 6.875\%$, about 6.9%.

(b) Now $1 + r_1 = 1/1.03$, a real rate of −2.91%. Then $0.6\,Y_1 = 1.6 \times 1.03/0.95 - 0.6 = 1.1347$, so $Y_1 = 1.891$: 5.4% below potential, against 9.6% with no promise.

**Must hit, strict (c):** at date 2 the deleveraging is over and output is back at potential, so delivering the promised inflation means overshooting with no reason left to do so; a central bank that re-optimizes then will renege, and savers who foresee this discount the promise. This is time inconsistency, the credibility problem Krugman (1998, *Brookings Papers*) raised for a central bank at the zero bound.

**Wrong turns:** in (a), setting $\pi^e = 6.43\%$, the natural rate with its sign flipped, when the exact condition is $1+\pi^e = 1/(1+r^n_1)$; in (c), answering that inflation hurts savers, which is true but is not why the promise lacks credibility.

**Model answer (c):** Once date 2 arrives the slump is over and the central bank would rather not inflate, so the promise binds nothing, which is the same structure [8.1](08-01-forgiveness-commitment-and-the-fresh-start.md) meets when a lender is promised that debts will not be forgiven.

</details>

## Flashback

**From Lesson [3.4](03-04-kiyotaki-moore-collateral-cycles.md) (Kiyotaki-Moore: collateral cycles):** *(Formal.)* In a Kiyotaki-Moore economy, the full dynamic response of the land price to a harvest shock (letting all future prices adjust) equals $R/(R-1)$ times the static response (holding next period's price fixed), where $R$ is the gross interest rate. Farmers' harvest per plot held is $a=2$. Suppose you are told that in this economy the full price response is exactly 3.5 times the static one. Find $R$, then find the steady-state land price $q^*=Ra/(R-1)$.

<details>
<summary>Solution</summary>

Set $R/(R-1)=3.5$: then $R=3.5(R-1)=3.5R-3.5$, so $2.5R=3.5$ and $R=1.4$ (a net interest rate of 40 percent). Check: $1.4/0.4=3.5$.

$$q^*=\frac{Ra}{R-1}=\frac{1.4\times2}{0.4}=\frac{2.8}{0.4}=7.$$

**Wrong turns:** dropping the $R$ in the numerator of $q^*$ and computing $a/(R-1)=2/0.4=5$, which forgets that farmers owe interest on the loan as well as the principal; inverting the ratio and solving $(R-1)/R=3.5$, which has no solution above $R=1$ and should signal the setup was read backwards.

</details>

## Connections

- **Backward:** the limit is [3.4](03-04-kiyotaki-moore-collateral-cycles.md)'s collateral constraint frozen at a given land price, and a margin spike in [3.5](03-05-the-leverage-cycle.md) is one way it gets cut; here the question is what the cut does to aggregate demand rather than to asset prices. The natural rate and the floor are [grad-macro 6.1](../../grad-macro/lessons/06-01-monetary-fiscal-nk.md)'s, and the MPC gap is [grad-macro 5.1](../../grad-macro/lessons/05-01-permanent-income-life-cycle.md) against [grad-macro 6.4](../../grad-macro/lessons/06-04-heterogeneous-agent-taste.md).
- **Forward:** Eggertsson and Krugman call the cut a Minsky moment, and [4.2](04-02-minsky-informally-and-formally.md) asks where such cuts come from. [4.3](04-03-household-debt-and-the-great-recession.md) looks for the MPC gap in the 2007–09 data. [4.4](04-04-overborrowing.md) asks why borrowers chose $D_H$ when a cut could come. [5.5](05-05-the-fiscal-theory-and-inflating-debt-away.md) runs Fisher's channel in reverse: inflation that shrinks the real value of nominal debt.
- **Sideways (the debt thread):** the 1930s version of the cut is in [`history-of-debt` 6.1](../../history-of-debt/lessons/06-01-the-american-mortgage-and-2008.md). After 1930 lenders stopped rolling short mortgages over, and the HOLC rewrote them as long amortizing loans, in this model a smaller repayment forced at date 1. Whether a write-down like P2's is fair to those who paid is [`philosophy-of-debt` 5.2](../../philosophy-of-debt/lessons/05-02-moral-hazard-and-fairness-to-those-who-paid.md)'s question, not this course's.
