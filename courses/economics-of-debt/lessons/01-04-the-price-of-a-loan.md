# Economics of Debt · Lesson 1.4: The price of a loan: risk, cost, markup and ceilings

> ⏱ ~15 min · Module 1: Why debt? Contracts under hidden information · Builds on: [1.2 Credit rationing: Stiglitz-Weiss](01-02-credit-rationing-stiglitz-weiss.md), [1.3 Pledgeable income, collateral and monitors](01-03-pledgeable-income-collateral-and-monitors.md) · Unlocks: [2.2 Taxes and bankruptcy costs: the trade-off theory](02-02-taxes-bankruptcy-costs-trade-off-theory.md), [8.1 Forgiveness, commitment and the fresh start](08-01-forgiveness-commitment-and-the-fresh-start.md)

## Why this matters

Lessons 1.1–1.3 asked who gets a loan. This one asks what loans made cost, and why one borrower pays 4 percent and another 24 with no lender profiting from either. The debt thread has done this arithmetic many times and handed the model here each time: [`philosophy-of-debt` 2.3](../../philosophy-of-debt/lessons/02-03-justifying-interest.md) stacked a rate into layers and [3.2](../../philosophy-of-debt/lessons/03-02-predatory-lending-and-usury-caps.md) added cost and markup; [`theology-of-debt` 4.4](../../theology-of-debt/lessons/04-04-the-extrinsic-titles.md), [5.1](../../theology-of-debt/lessons/05-01-the-monti-di-pieta-and-lateran-v.md) and [5.4](../../theology-of-debt/lessons/05-04-did-the-usury-doctrine-change.md) found a risk premium, a cost-only fee and a mortgage split, and [6.1](../../theology-of-debt/lessons/06-01-usury-and-finance-in-modern-teaching.md) a microloan's servicing cost; [`history-of-debt` 4.3](../../history-of-debt/lessons/04-03-debt-peonage-after-slavery.md) left open whether a merchant's markup paid for risk or monopoly. The model below says what a competitive lender must charge, what power adds, and whom a ceiling shuts out.

## The idea

A lender makes 100 one-year loans of 1,000 dollars. Its money costs 3 percent. It expects 6 borrowers to default, and from each it will recover 300 dollars by selling what they pledged. Screening, paperwork and collection cost 25 dollars a loan.

To break even it needs 103,000 dollars for its own funders plus 2,500 for handling. The defaulters return 1,800, so the 94 who repay must bring in 103,700: 1,103.19 dollars each, a rate of 10.3 percent. Sort that rate by what it pays for:

- **3 points** pay for the money.
- **4.66 points** cover the defaulters' shortfall. Each cost the lender 1,030 dollars and returned 300, and 6 × 730 dollars is spread over the 94 payers.
- **2.66 points** pay for handling, also spread over the payers.

No one profits, yet two things are easy to miss. The survivors pay for the defaulters, so the risk layer exceeds the expected loss of 4.2 points, and handling, a fixed charge per loan, would be a quarter of the principal on a 100-dollar loan.

A lender with no rival nearby can charge more than 10.3 percent; the excess is **markup**. A usury ceiling caps the whole sum. Set above 10.3 percent, it can remove only markup. Set below, this lender cannot lend to these borrowers at any lawful price, so it stops.

## The formal version

**Setup.** A lender makes a one-period loan of size $L$ at rate $r$, so the borrower owes $(1+r)L$. With probability $p$ the borrower defaults and the lender collects only $\lambda L$, where $\lambda \in [0,1]$ is the [recovery fraction](../reference.md#recovery-fraction): the share of principal recovered in default. The lender's funds cost $r_f$, and making, servicing and collecting the loan costs a fixed $k$ dollars, paid at repayment. Take $p$ as fixed here; [1.2](01-02-credit-rationing-stiglitz-weiss.md) is what happens when the rate itself moves it.

**The competitive rate.** With free entry, expected profit is zero:

$$(1-p)(1+r)L + p\lambda L = (1+r_f)L + k,$$

so the [zero-profit loan rate](../reference.md#zero-profit-loan-rate) is

$$r^{zp} = \frac{r_f + p(1-\lambda) + k/L}{1-p}.$$

*In words:* add the cost of funds, the expected loss per dollar and the handling cost per dollar, then divide by the share of borrowers who pay.

**The decomposition.** Split the rate into layers ([rate decomposition](../reference.md#rate-decomposition)):

$$r = \underbrace{r_f}_{\text{funds}} + \underbrace{\frac{p\,(1+r_f-\lambda)}{1-p}}_{\text{expected loss}} + \underbrace{\frac{k/L}{1-p}}_{\text{handling}} + \underbrace{\mu}_{\text{markup}}$$

*In words:* each payer covers her own funding, a share of what the defaulters fail to return (principal plus its funding cost, less recovery), a share of everyone's handling, and whatever markup $\mu \ge 0$ the lender can get. Competition sets $\mu = 0$.

The additive shortcut $r_f + p(1-\lambda) + k/L$ equals exactly $(1-p)\,r^{zp}$. *In words:* it understates the rate by exactly the fraction $p$ — negligible on a prime loan, not on a risky one (Example 1 prices both). With no recovery and no handling cost, $1 + r^{zp} = (1+r_f)/(1-p) = (1+r_f)\big(1 + \tfrac{p}{1-p}\big)$: the premium is $p/(1-p)$ compounded on the safe rate, not $p$ (theology-of-debt 4.4 has the case $r_f = 0$).

**Small, short loans.** Quoted per year, a $T$-year loan spreads $k$ over $LT$ dollar-years, so the handling layer is $k/(LT)$ a year before grossing up ([fixed cost per loan](../reference.md#fixed-cost-per-loan)). A 40-dollar handling cost adds 0.2 points to a one-year, 20,000-dollar loan, and 120 points a year to a one-month, 400-dollar loan. A small, short loan can carry an annual rate in the hundreds with no profit in it. How to annualize, APR against the compounded rate, is philosophy-of-debt 3.2's.

**Markup.** A lender with market power faces loan demand $N(r)$, the number of loans taken at rate $r$. Its expected profit is $N(r)\,(1-p)L\,(r - r^{zp})$, so it is a monopolist whose marginal cost is $r^{zp}$. Reload [`grad-micro` 6.1](../../grad-micro/lessons/06-01-monopoly-price-discrimination.md): marginal revenue equals marginal cost, which gives the Lerner rule

$$\frac{r^m - r^{zp}}{r^m} = \frac{1}{|\varepsilon|}, \qquad \varepsilon = \frac{r\,N'(r)}{N(r)}.$$

*In words:* the markup's share of the monopoly rate $r^m$ is the inverse of the elasticity $\varepsilon$ of loan demand ([loan markup](../reference.md#loan-markup)). With linear demand $N = b(\hat r - r)$ — $b>0$, $\hat r$ the rate where borrowing stops — $r^m = (\hat r + r^{zp})/2$, and the monopolist makes half the competitive number of loans.

An observed rate is $r^{zp} + \mu$: one number, two unknowns. A competitive lender to risky borrowers and a monopolist lending to safe ones can post the same rate — the Ransom–Sutch identification problem (history-of-debt 4.3, P3). Data on the other terms separate them: default rates, recoveries and handling costs give $r^{zp}$, and the markup is what remains. A rival opening nearby is a second test: it lowers a monopolist's rate but leaves a competitive one unchanged.

**Ceilings.** Under a [usury ceiling](../reference.md#usury-ceiling) $\bar r$, a competitive lender serves a borrower only if $r^{zp} \le \bar r$, that is, only if

$$p \le p^*(L) = \frac{\bar r - r_f - k/L}{1 + \bar r - \lambda}.$$

*In words:* each loan size has a highest default probability the cap will carry, lower for smaller, less collateralized loans. So the cap excludes the riskiest first and, at equal risk, the smallest — Smith's case for a cap near the best rate, Bentham's for none (philosophy-of-debt 3.2 has that exchange). No loan below $k/(\bar r - r_f)$ is made at all, even to a borrower who never defaults.

Excluded borrowers do not pay less; they are refused. Both sides then move to margins the cap does not fix: more collateral, larger minimum loans, or a contract that is not a loan. Goods sold on a year's credit for 120 and bought straight back for 100 in cash are a loan of 100 at 20 percent in which no rate appears. Under the medieval ban, credit moved into partnerships, bills of exchange and rent charges, whose returns hid the same cost of funds and risk ([`history-of-debt` 2.1](../../history-of-debt/lessons/02-01-commerce-around-the-prohibition.md); whether they were disguises is [`theology-of-debt` 4.5](../../theology-of-debt/lessons/04-05-contracts-that-are-not-loans.md)'s question).

**A ceiling of zero.** At $\bar r = 0$ the numerator of $p^*$ is $-(r_f + k/L) < 0$, so no arm's-length loan covers its cost at any risk. What survives is lending whose funds and handling cost the lender nothing (kin, charity), a fee capped at cost where the law allows one (a monte's fee in theology-of-debt 5.1 is $r^{zp}$ with $r_f = 0$, its fund raised by gifts), and contracts that are not loans. That answers [`theology-of-debt` 4.2](../../theology-of-debt/lessons/04-02-from-canon-to-council.md)'s question of what a credit market does when interest is forbidden: the price of credit survives, the loan does not.

**A ceiling on a monopolist.** A cap between $r^{zp}$ and $r^m$ turns the monopolist into a price-taker at $\bar r$: every extra loan now earns $\bar r - r^{zp} > 0$, so it serves all $N(\bar r)$ borrowers, more than $N(r^m)$ ([cap on a monopoly lender](../reference.md#cap-on-a-monopoly-lender)), peaking at $\bar r = r^{zp}$ and stopping below it. The same cap can raise lending in one market and end it in another — an empirical question; whether caps are just is philosophy-of-debt 3.2's.

## Picture

![Zero-profit loan rate against default probability for large secured loans and small unsecured loans, with an 18 percent cap. The small-loan curve crosses the cap at a default probability of 6.9 percent, the large-loan curve at 30.2 percent, and the region above the cap is shaded](assets/01-04-fig1.svg)

Each curve is $r^{zp}(p)$ from Example 1. The small, unsecured curve starts higher (handling) and climbs faster (low recovery), so an 18 percent cap cuts it off at a default probability of 6.9 percent, against 30.2 percent for the large, secured loan. A loan whose curve sits in the shaded region is refused, not repriced.

## Worked examples

**Example 1 (two loans at zero profit).** Funds cost 3 percent. Loan A is 120,000 dollars for a year to an established firm, secured on equipment: $p = 1.5\%$, $\lambda = 0.7$, $k = 600$, so $k/L = 0.5\%$. Loan B is 800 dollars for a year to a household, unsecured: $p = 12\%$, $\lambda = 0.1$, $k = 60$, so $k/L = 7.5\%$.

$$\begin{aligned} r^{zp}_A &= \frac{0.03 + 0.015 \times 0.3 + 0.005}{0.985} = 4.01\%,\\ r^{zp}_B &= \frac{0.03 + 0.12 \times 0.9 + 0.075}{0.88} = 24.20\%. \end{aligned}$$

| Points | Loan A | Loan B |
|---|---|---|
| Cost of funds | 3.00 | 3.00 |
| Expected loss | 0.50 | 12.68 |
| Handling | 0.51 | 8.52 |
| Zero-profit rate | 4.01 | 24.20 |
| Additive shortcut | 3.95 | 21.30 |

B pays six times A's rate and neither lender profits. Of the 20.19-point gap, 12.18 points are risk and 8.01 are handling. The shortcut is off by 0.06 points for A and 2.90 for B: 1.5 and 12 percent of the true rates. Now impose an 18 percent cap. Loan A is untouched. Loan B is not repriced, because a lender loses money on it at any lawful rate: a borrower with B's size and recovery is served only if $p \le (0.18 - 0.03 - 0.075)/(1.18 - 0.1) = 6.9\%$.

**Example 2 (a cap on a monopoly lender).** A lone lender makes 1,000-dollar loans with $r_f = 3\%$, $p = 5\%$, $\lambda = 0.2$ and $k = 25$, so $r^{zp} = (0.03 + 0.04 + 0.025)/0.95 = 10\%$. Its borrowers take $N(r) = 1{,}000\,(0.5 - r)$ loans a year.

- **Competition** would give $r = 10\%$ and 400 loans.
- **The monopolist** sets $r^m = (0.5 + 0.1)/2 = 30\%$ and makes 200 loans, for a profit of $200 \times 0.95 \times 1{,}000 \times 0.20 = 38{,}000$ dollars.
- **A 20 percent cap** makes it a price-taker. Each loan still earns $0.95 \times 1{,}000 \times 0.10 = 95$ dollars in expectation, so it serves all $N(0.2) = 300$ applicants, 50 percent more. The 200 old borrowers each owe 100 dollars less (95 in expectation), a transfer of 19,000 from the lender; the 100 new loans earn it 9,500; profit falls to 28,500.
- **A 10 percent cap** gives the competitive 400 loans at zero profit. **An 8 percent cap** makes each loan lose 19 dollars in expectation, so lending stops.

Lending rises as the cap falls from 30 to 10 percent and collapses below 10.

## Watch out

- **You might think the risk premium is the expected loss $p(1-\lambda)$, but actually** the payers also cover the defaulters' funding cost, spread over the survivors; on loan B the gap is 1.88 points in the risk layer alone.
- **You might think a high rate reveals a markup, but actually** loan B's 24 percent is all cost. The rate alone cannot split $r^{zp}$ from $\mu$; default, recovery and cost data can.
- **You might think a cap lowers rates for the borrowers it reaches, but actually** under competition there is no markup to remove. Borrowers under the cap pay what they paid before, and those above it are refused. A cap lowers rates only where it bites on a markup.
- **You might think a high enough rate always covers the risk, but actually** the formula assumes the rate does not change who borrows. If raising $r$ raises $p$ ([1.2](01-02-credit-rationing-stiglitz-weiss.md)), the lender's expected return can peak and fall, so a borrower willing to pay more is still refused: rationing, not a high price.

## One-liner

> A loan's rate is the cost of funds, the defaulters' shortfall and the handling cost, all paid by the borrowers who repay, plus whatever markup market power allows; a ceiling can only remove the markup, and where there is none it removes the loan, riskiest and smallest first.

## Problems

**P1 (🟢) *(Formal.)*** An invented lender makes one-year loans of 2,500 dollars to independent truck drivers for repairs. Its funds cost 2.5 percent. Eight percent of borrowers default, and in default it recovers 35 percent of principal by repossessing the pledged equipment. Handling costs 50 dollars a loan. (a) Find the zero-profit rate and split it into its three layers, in points. (b) Compute the additive shortcut. By what fraction of the true rate is it off, and which single parameter predicts that fraction?

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** A state caps loan rates at 16 percent a year. Lenders are competitive, their funds cost 2 percent, loans run one year, recovery is 25 percent of principal, and handling costs 30 dollars a loan. (a) Find the highest default probability that can be served on a 6,000-dollar loan and on a 600-dollar loan. (b) The cap is cut to 6 percent. Recompute both thresholds, and find the smallest loan any borrower can get. (c) Whose rates fall because of the cut, who loses, and what would have to be true for the cut to lower anyone's rate? Two sentences.

**P3 (🔴, optional) *(Formal (a) · Exegetical (b) · Formal (c).)*** Two invented towns each have one store that lends 1,000 dollars for a year at 23 percent. Both stores' funds cost 4 percent, and handling costs 30 dollars a loan. In Hillside, 14 percent of borrowers default and the store recovers 20 percent of principal; in Riverton, 4 percent default and it recovers 50 percent. (a) Find each store's zero-profit rate and markup. (b) The state caps rates at 18 percent. For each store, say whether the cap reprices its loans or ends them, and name the number that decides it. Two sentences. (c) Riverton's store faces linear loan demand, and 23 percent maximizes its profit. By what percentage does the 18 percent cap change the number of loans it makes, and which cap would maximize its lending?

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) Handling per dollar is $k/L = 50/2{,}500 = 2\%$. Then

$$r^{zp} = \frac{0.025 + 0.08 \times 0.65 + 0.02}{0.92} = \frac{0.097}{0.92} = 10.54\%.$$

Layers: funds 2.50; expected loss $0.08 \times (1.025 - 0.35)/0.92 = 0.054/0.92 = 5.87$; handling $0.02/0.92 = 2.17$. Sum: $2.50 + 5.87 + 2.17 = 10.54$. Check: a driver owes $1.1054 \times 2{,}500 = 2{,}763.59$ dollars, and expected receipts are $0.92 \times 2{,}763.59 + 0.08 \times 875 = 2{,}542.50 + 70 = 2{,}612.50$, exactly the $1.025 \times 2{,}500 + 50$ the lender needs.

(b) Shortcut: $0.025 + 0.052 + 0.02 = 9.70\%$, which is $0.84$ points low, and $0.84/10.54 = 8\%$ of the true rate. The fraction is $p$ itself, because the shortcut equals $(1-p)\,r^{zp}$ exactly.

**Wrong turns:** putting $p$ in place of the expected loss $p(1-\lambda)$, which gives $0.125/0.92 = 13.59\%$; stopping at the shortcut's 2 points for handling without dividing by $1-p$; using the zero-recovery premium $p/(1-p) = 8.70$ points for the risk layer.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) Use $p^* = (\bar r - r_f - k/L)/(1 + \bar r - \lambda)$, with $1 + \bar r - \lambda = 0.91$:

- 6,000 dollars, $k/L = 0.5\%$: $p^* = (0.16 - 0.02 - 0.005)/0.91 = 0.135/0.91 = 14.8\%$.
- 600 dollars, $k/L = 5\%$: $p^* = (0.16 - 0.02 - 0.05)/0.91 = 0.09/0.91 = 9.9\%$.

(b) Now $1 + \bar r - \lambda = 0.81$:

- 6,000 dollars: $p^* = (0.06 - 0.02 - 0.005)/0.81 = 0.035/0.81 = 4.3\%$.
- 600 dollars: the numerator is $0.06 - 0.02 - 0.05 < 0$, so no 600-dollar loan is made at any risk. Even with $p = 0$ it needs $2\% + 5\% = 7\%$.
- Smallest loan: $k/(\bar r - r_f) = 30/0.04 = 750$ dollars, and only for a borrower who never defaults.

**Must hit, strict (c):**

- No one's rate falls. Under competition each borrower already paid her own zero-profit rate, so borrowers with $r^{zp} \le 6\%$ pay what they paid before.
- The losers are borrowers whose $r^{zp}$ lies between 6 and 16 percent: every 600-dollar borrower with $p \le 9.9\%$, and 6,000-dollar borrowers with $4.3\% < p \le 14.8\%$. They lose their loans. Lenders earned zero profit before and lose nothing.
- For the cut to lower someone's rate, a lender must have been charging that borrower a markup, with a rate above 6 percent and an $r^{zp}$ at or below it.

**Wrong turns:** saying safe borrowers "now pay 6 percent" (the cap binds only on rates above it); reading the negative threshold for 600-dollar loans as "no one is excluded"; computing the minimum loan with the 16 percent cap (214 dollars) after the cut.

**Model answer (c):** The cut lowers no one's rate, because competitive lenders already charged each borrower her own zero-profit rate; it only refuses borrowers whose rate lay between 6 and 16 percent, all 600-dollar borrowers with $p \le 9.9\%$ and 6,000-dollar borrowers with $p$ from 4.3 to 14.8 percent, who bear its whole cost while lenders lose nothing. A rate could fall only where a lender had been charging a markup that took the rate above 6 percent while the loan's zero-profit rate stayed below it.

---

**P3** *(Formal (a) · Exegetical (b) · Formal (c).)*

(a) Handling per dollar is $30/1{,}000 = 3\%$.

$$\begin{aligned} r^{zp}_{\text{Hillside}} &= \frac{0.04 + 0.14 \times 0.8 + 0.03}{0.86} = \frac{0.182}{0.86} = 21.16\%,\\ r^{zp}_{\text{Riverton}} &= \frac{0.04 + 0.04 \times 0.5 + 0.03}{0.96} = \frac{0.09}{0.96} = 9.375\%. \end{aligned}$$

Markups: Hillside $23 - 21.16 = 1.84$ points; Riverton $23 - 9.375 = 13.625$ points. The same posted rate is almost all cost in one town and well over half markup in the other.

**Must hit, strict (b):**

- Hillside: its zero-profit rate, 21.16 percent, is above 18, so each loan would lose $0.86 \times 1{,}000 \times (0.18 - 0.2116) = 27.20$ dollars in expectation. The cap ends its lending to these borrowers.
- Riverton: its zero-profit rate, 9.375 percent, is below 18, so the cap removes part of the markup and the store keeps lending at 18 percent. The cap reprices.
- The deciding number is each store's zero-profit rate, built from its default, recovery and handling data, not the posted 23 percent.

**Wrong turns:** treating the common 23 percent as proof of monopoly in both towns, the error the Ransom–Sutch debate warns against ([`history-of-debt` 4.3](../../history-of-debt/lessons/04-03-debt-peonage-after-slavery.md)); calling Hillside's store exploitative because its rate is high, which is not a question this model answers ([`philosophy-of-debt` 3.2](../../philosophy-of-debt/lessons/03-02-predatory-lending-and-usury-caps.md)).

**Model answer (b):** In Hillside the zero-profit rate of 21.16 percent exceeds the cap, so the store loses money on every loan at 18 and stops lending; in Riverton the zero-profit rate of 9.375 percent sits below the cap, so the store keeps lending at 18 with a smaller markup. The number that decides it is each store's zero-profit rate from its books, which the common posted rate of 23 percent conceals.

(c) With $N = b(\hat r - r)$ the monopoly rate is $r^m = (\hat r + r^{zp})/2$, so $\hat r = 2(0.23) - 0.09375 = 36.625\%$. Loans at 23 percent: $b(0.36625 - 0.23) = 0.13625\,b$. Under the cap: $b(0.36625 - 0.18) = 0.18625\,b$. The ratio is $0.18625/0.13625 \approx 1.367$, so lending rises about 37 percent. Lending is largest with the cap at the zero-profit rate, 9.375 percent, where it is $0.2725\,b$, twice the monopoly level (with linear demand the competitive quantity is always twice the monopoly one). Any lower cap ends Riverton's lending.

**Wrong turns:** using a demand curve without backing $\hat r$ out of the observed monopoly rate; answering that lending keeps rising as the cap falls below 9.375 percent.

</details>

## Flashback

**From Lesson [1.2](01-02-credit-rationing-stiglitz-weiss.md) (Credit rationing: Stiglitz-Weiss):** *(Formal (a)–(b) · Exegetical (c).)* A bank lends 100 each to applicants it cannot tell apart; none has anything to pledge, so in default the bank takes whatever the project returned. Anyone who does not borrow earns 10 elsewhere, so she applies only if her expected payoff from borrowing is at least 10. Sixty percent of applicants have a project that returns 160 for sure; forty percent have a long shot that returns 320 with probability 0.25 and nothing otherwise. (a) Find the highest rate at which the safe borrowers still apply, and the bank's expected repayment per loan at that rate. (b) Suppose the long shot's success payoff were $Y$ instead of 320. Find the $Y$ above which the bank would rather lend to the long shots alone, at the highest rate they would still pay, than stop at your rate from (a). (c) At $Y=320$, with more applicants than funds, why does a refused applicant who offers to pay more still get nothing? Two sentences, with numbers.

<details>
<summary>Solution</summary>

(a) A safe borrower keeps $160-\text{owed}$ and applies while that is at least 10, so she can owe at most 150: a rate of 50 percent. At that rate everyone applies (a long shot expects $0.25\times(320-150)=42.5\ge10$); safe borrowers pay 150 and a long shot pays 150 with probability 0.25, so the bank expects

$$0.6\times150+0.4\times0.25\times150=90+15=105$$

per loan.

(b) A long shot applies while $0.25\,(Y-\text{owed})\ge10$, so she can owe at most $Y-40$. Lending to the long shots alone at that limit yields $0.25\,(Y-40)=0.25Y-10$ per loan. Set it equal to 105:

$$0.25Y-10=105\quad\Rightarrow\quad Y=460.$$

Above $Y=460$ the bank does better squeezing the long shots (at 460 they can owe 420, a rate of 320 percent, and the safe borrowers are gone). At $Y=320$ that policy yields only $0.25\times280=70$, so the pooled 50 percent stands.

**Must hit, strict (c):**

- Only a long shot would offer more than 50 percent, because a safe borrower would keep less than 10, so the offer reveals her type.
- The most a long shot can owe at $Y=320$ is 280, worth $0.25\times280=70$ to the bank, less than the 105 it expects per loan from an unscreened applicant, so it declines and holds the rate at 50 percent.

**Wrong turns:** counting only the safe borrowers' 90 in the pooled figure, which gives $Y=(90+10)/0.25=400$ and forgets that long shots also repay at 50 percent; treating the long shots' expected return $0.25Y$ as the most the bank can take, without leaving them their 10, which gives $Y=105/0.25=420$.

**Model answer (c):** Only a long shot would offer more than 50 percent, since a safe borrower would keep less than 10, so the offer reveals a long shot. The most she can owe, 280, is worth 70 to the bank, less than the 105 it expects from an unscreened applicant, so the bank refuses and holds the rate at 50 percent.

</details>

## Connections

- **Backward:** [1.1](01-01-costly-state-verification.md)'s verification cost is one reason $\lambda$ is below one: establishing default is costly. [1.2](01-02-credit-rationing-stiglitz-weiss.md) lets the rate move $p$; here $p$ is held fixed. [1.3](01-03-pledgeable-income-collateral-and-monitors.md)'s collateral is the $\lambda$ lever, and a monitor's cost is part of $k$. The markup is [`grad-micro` 6.1](../../grad-micro/lessons/06-01-monopoly-price-discrimination.md)'s monopoly with $r^{zp}$ as marginal cost.
- **Forward:** [2.2](02-02-taxes-bankruptcy-costs-trade-off-theory.md)'s bankruptcy costs are a low $\lambda$ seen from the borrower's side. [3.3](03-03-the-financial-accelerator.md)'s external finance premium is this lesson's risk-and-cost wedge made a function of the borrower's net worth. [8.1](08-01-forgiveness-commitment-and-the-fresh-start.md) prices a discharge law, which raises $p$ and cuts $\lambda$, and so raises $r^{zp}$ and moves the ceiling's threshold.
- **Sideways (the debt thread):** [`theology-of-debt` 5.4](../../theology-of-debt/lessons/05-04-did-the-usury-doctrine-change.md)'s mortgage table maps onto the layers: default loss onto *periculum sortis*, servicing onto expense, and its disputed residual is, in this model, either part of $r_f$ (a normal return on the bank's own capital, *lucrum cessans*) or markup. [`philosophy-of-debt` 3.2](../../philosophy-of-debt/lessons/03-02-predatory-lending-and-usury-caps.md)'s question whether a cap reprices or rations a loan is $r^{zp}$ against $\bar r$; whether caps are just stays there. [`history-of-debt` 6.5](../../history-of-debt/lessons/06-05-student-and-consumer-debt.md) shows American rate ceilings exported away after *Marquette* (1978). The monte's fee is priced in [`history-of-debt` 2.2](../../history-of-debt/lessons/02-02-jewish-lenders-and-the-monti-di-pieta.md) and ruled on in [`theology-of-debt` 5.1](../../theology-of-debt/lessons/05-01-the-monti-di-pieta-and-lateran-v.md).
- **Sideways (finance):** a lender pricing at expected cost assumes default risk is diversifiable. If defaults bunch in recessions, investors demand more than the expected loss, priced by the stochastic discount factor of [`mathematical-finance` 3.3](../../mathematical-finance/lessons/03-03-expected-utility-stochastic-discount-factor.md).
