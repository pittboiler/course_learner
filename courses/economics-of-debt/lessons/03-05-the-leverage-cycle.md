# Economics of Debt · Lesson 3.5: The leverage cycle

> ⏱ ~15 min · Module 3: Banks, runs, collateral and amplification · Builds on: [3.4 Kiyotaki-Moore: collateral cycles](03-04-kiyotaki-moore-collateral-cycles.md), [3.1 Diamond-Dybvig](03-01-diamond-dybvig.md) · Unlocks: [4.1 Fisher's debt-deflation, formalized](04-01-fishers-debt-deflation-formalized.md), [4.2 Minsky, informally and formally](04-02-minsky-informally-and-formally.md), [4.4 Overborrowing: when private leverage is too high](04-04-overborrowing.md)

## Why this matters

A secured loan has two prices: the interest rate, and how much you can borrow against each dollar of collateral. Economists mostly watch the first. In 2007-08 it was the second that collapsed. Geanakoplos (2010, Federal Reserve Bank of New York *Economic Policy Review*) reports the margins dealers offered one mortgage hedge fund on its AAA-rated mortgage bonds: the cash it had to put down went from about 5 percent of the price in 2006 to about 70 percent on average after the collapse. Gorton and Metrick (NBER working paper 2009; *Journal of Financial Economics* 2012) found the same in repo, the short-term collateralized lending that financed banks' holdings of securitized bonds. Their index of average haircuts on collateral other than Treasuries rose from zero in early 2007 to nearly half in late 2008, and some bonds could not be borrowed against at all. Geanakoplos's [leverage cycle](../reference.md#leverage-cycle) (2010, *NBER Macroeconomics Annual 2009*) explains why prices ride on margins: leverage decides who holds an asset, and who holds it decides its price.

## The idea

A bond pays 100 next year if things go well and 50 if they don't. Ann thinks the good outcome is 80 percent likely, so to her the bond is worth 90. Bob says 60 percent (worth 80) and Cy 40 percent (worth 70). Each has 40 in cash, there is one bond, and interest is zero.

If nobody can borrow, Ann's 40 buys only part of the bond, so someone less keen must hold the rest. At a price of 80, Ann buys half, and Bob, who is just willing, buys the other half. The price is Bob's opinion.

Now let Cy lend against the bond. A loan of 50 is safe, since the bond pays at least 50 whatever happens, so even gloomy Cy will make it. With 50 borrowed and 40 of her own, Ann buys the whole bond at 90. The price is now Ann's opinion. No one learned anything. The price rose 12.5 percent because the person who likes the bond most could borrow enough to hold all of it.

Run it backwards. Lenders cut the loan to 40. Ann owes 50 and can refinance only 40, so she must sell. At 80 her remaining equity of 30 carries three quarters of the bond, so she sells a quarter to Bob, and the price is Bob's opinion again. The bond is exactly as good as before, but Ann has lost a quarter of her stake.

Two rules come out of this. The price is set by the least optimistic person who must hold the asset. And leverage decides who that is: the more each unit can be borrowed against, the fewer and keener the holders.

## The formal version

**Setup** (Geanakoplos 2010). One unit of an asset, sold at date 0 by an outside owner, pays 1 at date 1 in the good state and $d<1$ in the bad state. A continuum of risk-neutral agents indexed by $h$, uniform on $[0,1]$, each hold cash $e$, and agent $h$ believes the good state has probability $h$. Cash can be stored, so the riskless rate is zero, and no one can sell the asset short. The only way to borrow is a non-recourse loan backed by the asset: a promise of $\phi$ per unit, of which the lender collects $\min(\phi,\text{payoff})$. Agent $h$ values the asset at

$$v(h)=h+(1-h)\,d=d+(1-d)\,h.$$

*In words:* more optimistic agents value it more, from $d$ for the gloomiest to 1 for the surest.

**Buying with borrowed money.** With a loan $\phi\le d$, a unit costs $p-\phi$ in cash and pays $1-\phi$ or $d-\phi$. The loan is repaid in both states, so it is riskless and lenders charge nothing for it. Agent $h$ buys exactly when $h(1-\phi)+(1-h)(d-\phi)\ge p-\phi$, which is $v(h)\ge p$, and every buyer borrows the maximum, since a bigger loan lets his cash cover more units, each worth more to him than it costs. So the holders are the agents above a cutoff $h^*$ with

$$p=v(h^*).$$

*In words:* the price is the valuation of the least optimistic holder, the [marginal buyer](../reference.md#marginal-buyer).

**Market clearing.** Buyers spend all their cash, and the loans supply $\phi$ per unit, so

$$e\,(1-h^*)+\phi=p.$$

*In words:* the holders' cash plus what they borrow pays for the whole supply. Together with $p=v(h^*)$,

$$h^*(\phi)=\frac{e+\phi-d}{1+e-d},\qquad p(\phi)=d+(1-d)\,h^*(\phi).$$

*In words:* each unit of loan per unit of asset raises the price by $(1-d)/(1+e-d)$, because it lets a smaller, keener group hold the asset. Setting $\phi=0$ gives the price with no borrowing. Lending must also be feasible: the non-buyers' cash, $e\,h^*$, must cover the loans $\phi$, or the interest rate could not stay at zero.

The [loan to value](../reference.md#loan-to-value) is $\phi/p$, the margin or haircut is $1-\phi/p$, and leverage (asset value over the buyer's own cash) is $p/(p-\phi)$.

**Result: the [maximum riskless promise](../reference.md#maximum-riskless-promise).** When agents differ only in optimism and there are two states, the equilibrium loan is the largest promise that cannot default: $\phi=d$ (Geanakoplos). *In words:* a promise above $d$ pays more only in the good state, so the borrower would be selling good-state payoff, the thing he values most, to a less optimistic lender who pays less for it; a promise below $d$ leaves riskless borrowing unused. So the equilibrium loan never defaults, and its size is pinned by the worst case: the loan to value is $d/p$. With $\phi=d$ the leveraged position pays $1-d$ in the good state and nothing in the bad, a pure bet on the good state, bought at $(p-d)/(1-d)=h^*$ per unit of good-state payoff.

**The cycle.** Because the loan is pinned to the worst case, news that worsens the worst case raises margins even if average expectations barely move: what Geanakoplos calls "scary bad" news. A bust then hits the price three ways: lower valuations, a higher margin, and the lost wealth of the leveraged optimists, which pushes the marginal buyer down the line of opinion. In a long calm the same forces run upward. The worst case looks milder, margins fall, and the price can climb above what average opinion supports.

## Picture

![Price of the asset against the loan allowed per unit in Example 1's economy. A blue line rises from 0.75 with no borrowing to 0.9 with a loan of 0.6. A steeper red line, for loans cut after that boom, runs from 0.9 down to 0.70 if lending stops, passing 0.85 at a loan of 0.45. A dashed line marks 0.8, the average opinion.](assets/03-05-fig1.svg)

Both lines use Example 1's economy. Blue is the price when the loan has always been at the level on the axis; it rises with the loan and crosses average opinion at 0.2. Red is the price when lenders cut the loan after a boom at 0.6. It is steeper, because the optimists spent their cash in the boom and their equity falls with the price. At a loan of zero it ends below blue: stopping all lending after a boom leaves the asset cheaper than in a world that never allowed borrowing.

## Worked examples

**Example 1 (the model on a clean case).** Take $d=0.6$ and $e=1.2$. Then $v(h)=0.6+0.4h$, and the average agent ($h=0.5$) values the asset at 0.8.

- *No borrowing.* $h^*=(1.2-0.6)/1.6=0.375$ and $p=0.6+0.4\times0.375=0.75$. Check: the top 62.5 percent of agents spend $1.2\times0.625=0.75$.
- *The maximum riskless loan,* $\phi=0.6$. $h^*=1.2/1.6=0.75$ and $p=0.6+0.4\times0.75=0.9$. Each buyer puts down $0.9-0.6=0.3$ a unit, so her 1.2 covers 4 units, and the top quarter of agents holds the whole supply. Loan to value is $0.6/0.9=2/3$, the margin a third, leverage 3. The lenders, everyone below 0.75, hold 0.9 of cash against 0.6 of loans, so lending is feasible.

Leverage raised the price 20 percent, from below average opinion to above it, and nobody's beliefs changed. The outside owner who sold the asset collects the extra 0.15. A unit of good-state payoff, bought through the leveraged position, costs $0.3/0.4=0.75$, the marginal buyer's probability.

**Example 2 (why you'd care: a margin spike with no news).** Add a date. The loans are one-period, like repo, and roll over at date 1, and the asset pays at date 2. Nobody expects trouble, so date 0 is exactly Example 1. At date 1 nothing is learned, but lenders (a nervous risk committee, say) cut the loan to 0.45 a unit: the haircut at the old price rises from a third to a half. Each holder owes 0.6 a unit and can re-borrow only 0.45.

- At the new price $p_1$ the unit needs $p_1-0.45$ of cash down, and the holders' equity covers $p_1-0.6$ of it whatever $p_1$ is. So new cash must replace exactly the withdrawn loan, $0.6-0.45=0.15$, and only the agents below 0.75 still hold cash. The new marginal buyer $h_1$ solves $1.2\,(0.75-h_1)=0.15$, so $h_1=0.625$ and $p_1=0.6+0.4\times0.625=0.85$. In general $e\,(h^*-h_1)=d-\phi$, with $h^*$ the boom's marginal buyer.
- The price falls 5.6 percent on no news. The optimists' equity falls from 0.3 to 0.25 a unit, a sixth, three times the price fall. At 0.85 each unit needs $0.85-0.45=0.4$ down, so they can keep $0.25/0.4=5/8$ of their units and must sell $3/8$ to agents who value the asset less, between 0.85 and 0.9.
- Had the loan been 0.45 from the start, the price would be $p(0.45)=0.8625$. The extra fall of 0.0125, a quarter of the total, is the optimists' wealth destroyed by the fall itself. If lending stopped entirely, the price would fall to 0.70, below the 0.75 of a world that never allowed borrowing.

Who pays? The leveraged optimists bear the whole loss. The lenders are repaid in full, since their loans never default, and the buyers between 0.625 and 0.75 gain, getting the asset below their own valuations. This is the [run on repo](../reference.md#run-on-repo) in miniature: a haircut rise withdraws funding per unit of collateral, as depositors withdraw from the bank of [3.1](03-01-diamond-dybvig.md), without a single default. The forced sales are a [fire sale](../reference.md#fire-sale) in the sense of Shleifer and Vishny (1992, *Journal of Finance*): the natural buyers are constrained all at once, so the asset goes down the line to buyers who value it less. They made the point for industrial assets, whose natural buyers are rival firms hit by the same downturn, and later applied it to financial markets (2011, *Journal of Economic Perspectives*). Whether each holder's leverage ignores what his fire sale does to other holders is [4.4](04-04-overborrowing.md)'s question.

## Watch out

- **You might think leverage raises prices because credit is cheap, but actually** the interest rate is zero throughout and never moves. What moves the price is the loan per unit, which decides how few optimists can hold the whole supply.
- **You might think the price reflects average opinion, but actually** it is the marginal buyer's valuation. In Examples 1 and 2 average opinion says 0.8 throughout, and the price is 0.75, 0.9, 0.8625 or 0.85 depending only on what can be borrowed, and when.
- **You might think lenders size the loan by the collateral's expected value, but actually** here it is set by the worst case, $d$, whatever the probabilities. News that hardly moves expected values but worsens the worst case raises margins, and a calm that makes the worst case look milder lowers them ([4.2](04-02-minsky-informally-and-formally.md)).
- **You might think pessimists would bet against a price above average opinion, but actually** the model gives them no way to: they cannot sell short. Geanakoplos argues that the standardized credit default swaps on mortgage bonds created in late 2005 gave pessimists that way for the first time, in effect adding supply, which pushed the marginal buyer down.

## One-liner

> Whoever can borrow most against an asset sets its price: leverage hands it to the optimists and lifts it above average opinion, and a margin spike, even with no bad news, forces them to sell it down the line.

## Problems

**P1 (🟢) *(Formal.)*** An asset pays 1 in the good state or 0.4 in the bad, there is one unit of it, and agents with beliefs $h$ uniform on $[0,1]$ each hold the same amount of cash and no asset. The riskless rate is zero. Dealers lend the maximum riskless amount against the asset, and it trades at 0.76. (a) Find the loan to value, the margin, the leverage and the marginal buyer. (b) How much cash does each agent hold, and can the non-buyers fund the loans? (c) What would the asset trade at if borrowing were banned? Three decimals.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** P1's economy is at its leveraged equilibrium, with one-period loans rolled over at date 1 as in Example 2. At date 1, with nothing learned, lenders cut the loan per unit. (a) What loan per unit brings the price down to your answer to P1(c)? (b) Find the holders' equity per unit before and after the cut, and the share of their holdings they must sell. (c) Lenders still lend at your answer to (a), yet the price is back where it would be if no one could borrow. In two sentences, say why, and give the price if the loan had been capped at that level from the start.

**P3 (🔴, optional) *(Formal (a) · Exegetical (b).)*** In Example 1's economy (loan 0.6, price 0.9, $h^*=0.75$), an agent with belief 0.9 invests 1 of cash in the asset. (a) Compare two ways to borrow: the riskless loan of 0.6 a unit, and a loan promising 0.7 a unit from a lender with belief 0.5, who lends what the promise is worth to her. For each, find the units he buys, his payoff in each state and his expected payoff. (b) In three sentences or fewer: why does no buyer use a promise above 0.6, even from the most optimistic lender available, and why does none use a promise below 0.6?

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) Loan to value $0.4/0.76=0.526$, margin $0.474$, leverage $0.76/(0.76-0.4)=0.76/0.36=2.111$. The marginal buyer solves $0.4+0.6\,h^*=0.76$, so $h^*=0.600$.

(b) Market clearing with the loan is $e\,(1-0.6)+0.4=0.76$, so $e=0.36/0.4=0.900$. The non-buyers hold $0.9\times0.6=0.540$ of cash against loans of 0.4, so yes.

(c) With $\phi=0$:

$$h^*=\frac{0.9-0.4}{1.5}=0.333,\qquad p=0.4+0.6\times\tfrac13=0.600.$$

Borrowing adds 0.16 to the price, 26.7 percent.

**Wrong turns:** leaving the loan out of market clearing in (b), which gives $e=0.76/0.4=1.9$; reporting debt over equity, $0.4/0.36=1.111$, as leverage.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) The price is 0.6 exactly when the marginal buyer is back at $h_1=1/3$. The withdrawn loan must equal the new buyers' cash:

$$0.4-\phi=0.9\,\Big(0.6-\tfrac13\Big)=0.24,\qquad \phi=0.16.$$

That is a 60 percent cut in the loan; the haircut at the old price goes from 47.4 to 78.9 percent.

(b) Equity per unit is $0.76-0.4=0.36$ before and $0.6-0.4=0.2$ after, down 44.4 percent. Each unit now needs $0.6-0.16=0.44$ down, so the holders keep $0.2/0.44=5/11=0.455$ of their units and sell $0.545$. Check: the new buyers' cash, 0.24, buys $0.24/0.44=6/11$ of a unit. The agents below $1/3$ hold 0.3 of cash, enough for loans of 0.16.

**Must hit, strict (c):**

- The optimists now bring equity, not cash, and their equity fell with the price: they started with 0.36 of cash and have 0.2 left.
- So the asset needs cash from further down the line of opinion than in an economy where the loan was always 0.16. There the optimists would still hold their cash, and the price would be $p(0.16)=0.6+0.4\times0.16=0.664$.

**Wrong turns:** setting the from-the-start formula $0.6+0.4\,\phi$ equal to 0.6 and concluding that only a complete stop ($\phi=0$) undoes the boom. That formula assumes every agent still holds his cash.

**Model answer (c):** Lenders still advance 0.16 a unit, but the optimists' buying power is now their equity, which fell from the 0.36 they started with to 0.2 as the price fell. Had the loan been 0.16 all along they would still hold their cash, and the price would be 0.664, not 0.6.

---

**P3** *(Formal (a) · Exegetical (b).)*

(a) *Riskless loan.* Each unit needs $0.9-0.6=0.3$ down, so 1 of cash buys $10/3=3.333$ units. Net of the loan, each pays 0.4 in the good state and nothing in the bad, so he gets 1.333 or 0, and expects $0.9\times1.333=1.200$.

*Risky loan.* The promise pays 0.7 in the good state but only the collateral's 0.6 in the bad, so the lender values it at $0.5\times0.7+0.5\times0.6=0.65$ and lends that. Each unit needs $0.9-0.65=0.25$ down, so he buys 4 units, which pay $4\times0.3=1.2$ in the good state and 0 in the bad; he expects $0.9\times1.2=1.080$. He holds more units and less of what he wants.

**Must hit, strict (b):**

- The part of a promise above 0.6 is paid only in the good state, so borrowing on it sells good-state payoff to the lender.
- Lenders are the non-buyers, with beliefs below $h^*=0.75$, so they pay at most 0.75 per unit of good-state payoff, the price at which the borrower buys it back through the riskless position, $0.3/0.4$. At best he breaks even; with the 0.5 lender he sells at 0.5 what costs him 0.75.
- Below 0.6 he gives up riskless borrowing at zero interest, which buys good-state payoff at 0.75 when he values it at 0.9. So the loan is exactly the maximum riskless promise, and no one defaults.

**Wrong turns:** letting the lender advance the face value, 0.7: that gives 5 units, a good-state payoff of 1.5 and an expected 1.35, so the risky loan looks better. A lender advances only what she expects to collect.

**Model answer (b):** Promising more than 0.6 adds payments only in the good state, so the borrower is selling good-state payoff; lenders, all less optimistic than 0.75, pay at most 0.75 for it, which is what he pays to buy it back through the riskless position, so he can at best break even and loses with the 0.5 lender. Promising less than 0.6 gives up riskless borrowing that buys good-state payoff at 0.75, worth 0.9 to him. So the equilibrium loan is the largest promise that cannot default.

</details>

## Flashback

**From Lesson [3.3](03-03-the-financial-accelerator.md) (The financial accelerator):** *(Formal.)* In a financial-accelerator economy, entrepreneurs invest at any scale, borrowing the rest against net worth. Each unit invested returns $y$, drawn from a uniform distribution, and a lender must pay $c$ per unit borrowed to verify a reported loss. At her privately chosen leverage, the optimal default probability on the promised face value per unit borrowed, $F(d^*)$, solves $F(d^*)=2m/c-1$, where $m$ is the project's expected return net of the safe rate — and this interior solution is valid only when $m>c/2$. Take $m=0.08$ and $c=0.12$. Find $F(d^*)$, and confirm that an interior optimum exists.

<details>
<summary>Solution</summary>

Check the condition first: $c/2=0.06$, and $m=0.08>0.06$, so an interior optimum exists.

$$F(d^*)=\frac{2m}{c}-1=\frac{2\times0.08}{0.12}-1=\frac{4}{3}-1=\frac13\approx0.333.$$

At her chosen leverage, about a third of outcomes end in default and trigger an audit.

**Wrong turns:** checking $m>c$ instead of $m>c/2$ — $0.08>0.12$ is false, which would wrongly rule out an interior solution when the real condition (against half of $c$) holds; computing $2m/c=1.333$ and forgetting to subtract 1, which reports an impossible probability above one.

</details>

## Connections

- **Backward:** the [collateral constraint](../reference.md#collateral-constraint) of [3.4](03-04-kiyotaki-moore-collateral-cycles.md), $b_t\le q_{t+1}k_t/R$, lends against what the land will be worth at repayment. With no uncertainty that is the maximum riskless promise, so this lesson is Kiyotaki-Moore with disagreement and a worst case, and the margin itself becomes a moving part. The optimists' wealth plays the part of borrower net worth in [3.3](03-03-the-financial-accelerator.md). The run on repo is [3.1](03-01-diamond-dybvig.md)'s run on collateralized funding, and the fire-sale price that 3.1 took as given is set here by who is left to buy. In [1.3](01-03-pledgeable-income-collateral-and-monitors.md) a lender realized a fixed share of any collateral; here what can be borrowed against it moves with the worst case.
- **Forward:** a margin spike is one way the debt limit of [4.1](04-01-fishers-debt-deflation-formalized.md) gets cut. [4.2](04-02-minsky-informally-and-formally.md) takes this lesson's rational route from calm to leverage. [4.4](04-04-overborrowing.md) asks whether privately chosen leverage is too high because each holder ignores what his fire sale does to the price others get, and weighs loan-to-value limits, the tool behind Geanakoplos's proposal that a central bank curb leverage in booms and prop it up in crises.
- **Sideways:** in [grad-macro 5.4](../../grad-macro/lessons/05-04-consumption-based-asset-pricing.md) one stochastic discount factor prices every asset; with disagreement and margins, the price is one agent's valuation, and which agent depends on credit. [history-of-debt 6.1](../../history-of-debt/lessons/06-01-the-american-mortgage-and-2008.md) tells the chain from the delinquencies of 2007 to Lehman; this lesson is one mechanism behind its speed. Propping up margins in a crisis helps leveraged holders at the risk of whoever stands behind the loans; whether that is fair to those who stayed unleveraged is a question of the kind [philosophy-of-debt 5.2](../../philosophy-of-debt/lessons/05-02-moral-hazard-and-fairness-to-those-who-paid.md) asks.
