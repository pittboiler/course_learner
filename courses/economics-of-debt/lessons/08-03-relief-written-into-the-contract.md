# Economics of Debt · Lesson 8.3: Relief written into the contract

> ⏱ ~15 min · Module 8: Debt relief as mechanism · Builds on: [1.1 Costly state verification](01-01-costly-state-verification.md), [5.3 Tax smoothing and optimal debt](05-03-tax-smoothing-and-optimal-debt.md), [8.1 Forgiveness, commitment and the fresh start](08-01-forgiveness-commitment-and-the-fresh-start.md) · Unlocks: [8.4 Odious debt as a rule: loan sanctions](08-04-odious-debt-as-a-rule.md)

## Why this matters

When a debtor cannot pay, relief usually comes after the fact: a default, a negotiation, a court (Module 7), or forgiveness, which [8.1](08-01-forgiveness-commitment-and-the-fresh-start.md) showed is worth granting ex post and costly to expect ex ante. The alternative is to agree on relief in the contract, before anyone needs it: a bond that pays less when the country's output falls, a mortgage whose balance falls with local house prices. [5.3](05-03-tax-smoothing-and-optimal-debt.md) showed that such debt is efficient. Yet almost all debt is still a fixed promise. This lesson prices the alternative and finds the obstacle where [1.1](01-01-costly-state-verification.md) left it: someone has to measure the bad times.

## The idea

A country will earn 80 or 120 next year, with even odds, and can spare at most a fifth of it for creditors: 16 or 24. It has sold a plain bond promising 18.

- In the good year it pays 18.
- In the bad year it cannot. It defaults, and the restructuring that follows burns 4 in lawyers, delay and lost output, so creditors end up with 12 of the 16 it could spare.

Now write the bad year into the contract: a bond that pays 15 percent of whatever the country earns, 12 in the bad year and 18 in the good. Creditors receive exactly what they received before, state by state, so they pay the same price. But nothing is defaulted on, nobody litigates, and the 4 is never burned. The country's average burden falls from 17 to 15, and the whole saving is the country's, because competing lenders break even either way.

So relief written into the contract is a restructuring agreed before anyone needs one. The catch hides in the words "whatever the country earns". Someone has to measure it, and for a country the agency that measures GDP is part of the borrowing state.

## The formal version

**Setup.** Next period the borrower's income is $Y>0$, random with mean $\bar Y$. It can pay creditors at most $\tau Y$, where $\tau$ is the share of income it can spare (for a country, the largest primary surplus it can sustain). Lenders are risk-neutral and competitive, and the safe rate is zero.

*Plain debt* promises a face value $D$, paid when $\tau Y\ge D$. When $\tau Y<D$ the borrower defaults and gives up all it can spare, $\tau Y$; the restructuring hands creditors $\lambda\tau Y$, with $0<\lambda<1$, and burns the rest. With $\mathbf{1}\{\cdot\}$ equal to 1 when its condition holds and 0 otherwise, lenders expect

$$L=\mathbb{E}\big[D\,\mathbf{1}\{\tau Y\ge D\}+\lambda\tau Y\,\mathbf{1}\{\tau Y<D\}\big].$$

*In words:* the face value when the borrower can pay, a fraction of what it can spare when it cannot.

*Indexed debt* promises a share $\kappa$ of income, $\kappa Y$: [state-contingent debt](../reference.md#state-contingent-debt) with income as the state. It raises the same money when $\kappa\bar Y=L$.

**Result.** Each state's plain payment is at most $\tau Y$, so $L\le\tau\bar Y$ and $\kappa\le\tau$: the indexed promise is affordable in every state and never defaults. The borrower's expected burden falls by the expected deadweight of default,

$$\Delta=(1-\lambda)\,\tau\,\mathbb{E}\big[Y\,\mathbf{1}\{\tau Y<D\}\big].$$

*In words:* indexed debt gives relief in the states where a default would otherwise have given it, as a term of the contract, so nothing is breached or fought over. Lenders break even under both contracts, so the whole saving goes to the borrower. In The idea, $\tau=0.2$, $\lambda=0.75$ and $\Delta=0.25\times0.2\times\tfrac12\times80=2$.

**The price is verification.** An indexed payment moves with $Y$ in every state. By [1.1](01-01-costly-state-verification.md), a payment that varies with what only the borrower sees must be [verified](../reference.md#costly-state-verification) in every state, while plain debt needs a look only in default, where the restructuring does the looking. If making $Y$ credible costs $c$ per period, indexed debt wins only if

$$c<\Delta.$$

*In words:* a GDP-linked bond is 1.1's commenda with a country as the merchant. Looking every year pays only if it costs less than the fights a fixed claim would bring.

**Choosing the index.** A usable index must (i) track the borrower's capacity to pay, (ii) be verifiable by a court, and (iii) lie beyond the borrower's control. These pull apart. The borrower's own income tracks capacity best and is the easiest for it to shade. An outside index cannot be shaded but leaves [basis risk](../reference.md#basis-risk): bad times the index misses.

Mian and Sufi's [shared-responsibility mortgage](../reference.md#shared-responsibility-mortgage) (*House of Debt*, 2014) gives up a little of (i) to secure (ii) and (iii). When the local house price index falls below its level at purchase, the balance and payments fall in proportion. They never rise above the original schedule, and in exchange the lender takes a share of any capital gain at sale (5 to 10 percent, in the authors' 2016 restatement). A zip-code index needs no appraisal, and an owner who lets her house decay cannot move it.

A sovereign [GDP-linked bond](../reference.md#gdp-linked-bond) has no such outside index. GDP meets (i) roughly and (ii) formally, but the statistics office belongs to the borrower. Shiller (1993, *Macro Markets*) proposed indexing coupon and principal to the level of nominal GDP; Borensztein and Mauro (2004, *Economic Policy*) indexed the coupon to growth and kept the principal fixed.

**Relief conditioned on actions.** HIPC made relief depend on what the debtor does, not on what happens to it ([`history-of-debt` 5.5](../../history-of-debt/lessons/05-05-jubilee-2000-and-hipc.md)). The amount is fixed at the decision point and becomes irrevocable at the completion point, once agreed policy triggers are met. Triggers are cheap to verify and reward what they require, but they insure nothing after the decision point: 5.5's commodity slump falls on the debtor. Contracting on outcomes insures and dulls incentives, and contracting on actions does the reverse, the trade-off of [`grad-micro` 5.4](../../grad-micro/lessons/05-04-moral-hazard-principal-agent.md).

**What has been issued.** Sovereign GDP-linked claims have come mostly out of restructurings.

| Issue | Index | Pays | What happened |
|---|---|---|---|
| Argentina, 2005 warrants | real GDP "as published by INDEC", its statistics institute | extra, when GDP and its growth beat a base case (growth of 3 percent from 2015); capped at 48 percent of notional | paid 0.42 percent of GDP in 2009, mid-crisis, on 2008's growth. The IMF, which in 2013 censured Argentina over its price and GDP data, required a rebasing; on the new base, 2013 growth was 2.93 percent, below the 3.22 percent trigger Argentina applied, and nothing was paid. Holders won in London (2023, upheld 2024) on how the contract adjusted its trigger; the court did not rule on bad faith |
| Greece, 2012 warrants | Eurostat's figures | up to 1 percent of notional a year, when growth beats a reference path | worth 0.23 per 100 of old face on the first trading day |
| Ukraine, 2015 securities | GDP, with covenants against manipulation | extra, when growth exceeds 3 percent | the 2023 rebound triggered a claim; swapped for plain bonds in 2025 |

Premia add to the cost. The premium Argentina's warrants paid over comparable bonds fell by about 600 basis points between December 2005 and July 2007, a novelty premium that decayed (Costa, Chamon and Ricci, 2008, IMF Working Paper). The first issuer pays the most, and estimates of a GDP risk premium run from 35 to 150 basis points (Benford, Best and Joy, 2016, Bank of England), who found no symmetric sovereign issue as of 2016. Sri Lanka's 2024 macro-linked bonds come closer: the principal cut deepens if dollar GDP in 2025-27 falls short of the IMF's baseline, and shrinks if it beats it.

## Picture

![Two panels. Left: payment to creditors against GDP next year; the plain bond pays 18 down to GDP 90, then drops at a cliff to 15 percent of GDP, with a shaded band for what default burns; the indexed bond pays 15 percent of GDP throughout. Right: debt as a percent of GDP through a two-year recession; plain debt rises from 80 to 87.5 and stays, or returns to 80 by year 12 with a surplus; indexed debt stays at 80](assets/08-03-fig1.svg)

Left: The idea's contracts, with its two outcomes as dots; below GDP 90 the plain bond defaults, creditors get what the indexed bond pays anyway, and the shaded band is burned. Right: Example 1, where the recession lifts the plain-debt ratio for good.

## Worked examples

**Example 1 (the model on a clean case): the debt ratio through a recession.** Debt is 80 percent of GDP, the interest rate equals expected growth, $r=\bar g=3\%$, and the primary balance is zero, so without surprises the ratio never moves. Then GDP falls 3 percent in year 1, stays flat in year 2, and grows 3 percent again from year 3, never regaining the lost ground. Use [5.1](05-01-the-government-budget-constraint.md)'s [identity](../reference.md#debt-ratio-dynamics) $d_{t+1}=\frac{1+r}{1+g_{t+1}}\,d_t-s$, where $d$ is debt over GDP, $g$ realized growth and $s$ the primary surplus over GDP.

- *Plain debt:* $d_1=0.80\times1.03/0.97=0.849$ and $d_2=0.849\times1.03/1.00=0.875$, where it stays, since $r=g$ from then on.
- *Indexed debt* (Shiller's design: coupon and principal scale with GDP relative to the path expected at issue) earns the gross return $(1+r)(1+g_{t+1})/(1+\bar g)$, so $d_{t+1}=\frac{1+r}{1+\bar g}\,d_t=d_t$. It stays at 80 percent.

The recession adds 7.5 points of GDP to plain debt, and taxpayers work it off with a primary surplus of 0.75 percent of GDP for ten years. Under indexation the bondholders absorb it at once: their claim is worth $0.97/1.03^2=0.914$ of the plain bond's, a cut of 8.6 percent. In a boom the transfer runs the other way, which is what makes the bond fair at issue.

**Example 2 (why you'd care): a shared-responsibility mortgage.** A house costs 300 (thousand dollars), bought with 60 down and a loan of 240, repaid when the house is sold. By then the local price index, which this house tracks exactly, has either fallen 30 percent (probability 0.1) or risen 25 percent (probability 0.9). Ignore interest.

- *After the fall* the house is worth 210. Under a standard mortgage she still owes 240: her equity has gone from 60 to $-30$, she has absorbed the whole 90, and the lender loses nothing unless she defaults. She is underwater, the household [debt overhang](../reference.md#debt-overhang) of [2.4](02-04-debt-overhang.md) and [4.3](04-03-household-debt-and-the-great-recession.md): what she puts into the house goes first to the lender. Under the SRM her balance falls 30 percent, to 168. Her equity is 42, still a fifth of the house. She loses 18 and the lender 72, so the 90 is split in proportion to what each put in, and she is never underwater.
- *The upside share pays for it.* In the boom the house sells for 375, a gain of 75, of which the lender takes a share $\theta$. The lender breaks even when $0.9\times75\,\theta=0.1\times72$, so $\theta=7.2/67.5=10.7$ percent: she hands over 8 of her 75.

Who pays: the homeowner, in the good state, as the premium for insurance against the bad one, and the lender is the insurer. Mian and Sufi's case for it is also macroeconomic: moving a loss from a borrower who would cut spending to a lender who would not shrinks the demand collapse of [4.1](04-01-fishers-debt-deflation-formalized.md) and 4.3.

## Watch out

- **You might think the GDP warrants of Argentina, Greece and Ukraine were relief written into the contract, but actually** they only ever paid extra, when growth beat a threshold. The relief came from the haircut they were attached to (Ukraine turned each 1,000 of old bonds into 800 of new bonds and 200 of warrant notional), and the warrant was what creditors took in exchange. Haircut plus warrant is a contingent claim, less now and more if the country recovers: the SRM's shape for a nation.
- **You might think indexed debt is cheap relief, but actually** fair pricing makes the good states pay for the bad. The only free part is $\Delta$, the deadweight that no longer burns, and it must cover verification, the novelty premium and any GDP risk premium.
- **You might think indexation ends sovereign default, but actually** it cures inability to pay, not unwillingness. [6.3](06-03-bulow-rogoff-and-sanctions.md) showed that reputation cannot sustain any repayment schedule, indexed ones included.

## One-liner

> Relief written into the contract is a restructuring agreed before anyone needs one: it saves what the fight would burn, and it charges for the saving by making the lender trust whoever measures the bad times.

## Problems

**P1 (🟢) *(Formal.)*** A country's GDP next year will be 60, 100 or 140, with probabilities 0.25, 0.5 and 0.25, and it can pay creditors at most a quarter of GDP. It owes a plain bond with face 20. In a default, the restructuring hands creditors 60 percent of what the country can spare and burns the rest. Lenders are risk-neutral and competitive, and the safe rate is zero. (a) In which state does the country default, and what do lenders expect to receive? (b) Find the share of GDP $\kappa$ an indexed bond must pay to be worth the same to lenders, and check that it is affordable in every state. (c) By how much does the country's expected burden fall? What is the most it could spend each period making its GDP figures credible and still prefer the indexed bond?

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** A house costs 400 (thousand dollars), bought with 100 down and a loan of 300, repaid at sale. At sale the local price index, which this house tracks, is either 20 percent higher (probability 0.85) or 40 percent lower (probability 0.15). Ignore interest. Under a standard mortgage, an owner who is underwater at sale defaults, and the lender sells the house at a forced-sale discount of 15 percent. Under a shared-responsibility mortgage the balance falls with the index, and the lender takes a share $\theta$ of any gain. (a) Find the lender's loss in the bust under each contract, and the $\theta$ at which the lender is indifferent between them. (b) At what forced-sale discount would the lender accept the SRM with no upside share at all? (c) Who is insured against what, who pays the premium and when, and who outside the contract also gains? Three sentences.

**P3 (🔴, optional) *(Formal (a)–(b) · Exegetical (c).)*** An invented country's GDP was expected to grow 3 percent a year when it issued three upside claims, each on a notional of 100. Claim G pays $1.5\times(g-3)$ in any year its real growth $g$ (in percent) exceeds 3, and nothing otherwise. Claim L pays 0.5 for every percent by which GDP stands above the path expected at issue. Claim C pays a flat 2 whenever growth exceeds 3 percent. (a) Output falls 20 percent in year 1 and grows 6 percent in year 2. Find what G and L pay in each year, and how far GDP stands from its expected path at the end of year 2. (b) In another year, growth is first reported at 3.1 percent and then revised to 2.9. How much does the revision save the country on G, and on C? (c) Two sentences: which of the lesson's three requirements for an index does G's design fail in (a), and which does C's design put under strain in (b)?

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) The country can spare 15, 25 or 35. Only at GDP 60 is that below the face of 20, so it defaults there: creditors get $0.6\times15=9$ and 6 is burned. Lenders expect

$$\begin{aligned}L&=0.25\times9+0.5\times20+0.25\times20\\&=2.25+15=17.25.\end{aligned}$$

(b) $\kappa=17.25/100=0.1725$. The indexed bond pays 10.35, 17.25 and 24.15, each below what the country can spare (15, 25, 35), so it never defaults.

(c) Under the plain bond the country gives up $0.25\times15+0.75\times20=18.75$ on average, and under the indexed bond 17.25, so its burden falls by 1.5. The formula agrees: $\Delta=(1-0.6)\times0.25\times(0.25\times60)=0.4\times0.25\times15=1.5$. Making its GDP figures credible is worth up to 1.5 per period; above that, the plain bond and its occasional default are cheaper.

**Wrong turns:** applying the 60 percent to the face value (12) instead of to what the country can spare (9), which gives $L=18$; setting $\kappa=20/100$, the plain promise over mean GDP, which hands lenders 20 on average, more than the plain bond was worth; counting only the 9 that reaches creditors as the country's cost of default, which makes the saving vanish, when the country gives up all 15.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) In the bust the house is worth $0.6\times400=240$.

- *Standard:* she owes 300, is 60 underwater and defaults. The lender sells for $0.85\times240=204$ and loses 96; the forced sale burns 36.
- *SRM:* the balance falls 40 percent, to 180, so her equity is 60 and she does not default. The lender loses 120.

The SRM costs the lender 24 more in the bust. In the boom the gain is 80, so the lender is indifferent when

$$\begin{aligned}0.85\times80\,\theta&=0.15\times24,\\ \theta&=\frac{3.6}{68}=5.3\text{ percent},\end{aligned}$$

about 4.2 of her 80.

(b) The SRM costs the lender nothing extra when the forced sale fetches exactly the SRM balance: $(1-f)\times240=180$, so $f=25$ percent. That is her equity share at purchase, $1-300/400$, since the SRM keeps her loan at 75 percent of the house. At any larger discount the lender prefers the SRM outright.

**Must hit, strict (c):**

- The homeowner is insured against a fall in local house prices; the lender is the insurer.
- She pays the premium, 5.3 percent of her gain, only if prices rise, and in expectation it covers the lender's extra bust loss, $0.15\times24=3.6$. She also keeps the 36 the forced sale would have burned: her expected gain is $0.15\times36=5.4$.
- Her neighbors gain without paying: the foreclosure's forced sale would have pushed down nearby prices ([4.3](04-03-household-debt-and-the-great-recession.md)'s foreclosure externality), and nothing in $\theta$ prices that.

**Wrong turns:** comparing the SRM with a standard mortgage that is always repaid, which charges the lender's whole 120 to the SRM and gives $\theta=18/68=26.5$ percent, though the lender would have lost 96 in the bust anyway; in (b), applying the discount to the purchase price, $(1-f)\times400=180$, which gives 55 percent.

**Model answer (c):** The homeowner is insured against a fall in local prices, and the lender is the insurer. She pays the premium, 5.3 percent of any gain, only if prices rise, and in expectation it just covers the lender's extra loss in the bust, while she also keeps the 36 a foreclosure would have burned. Her neighbors gain without paying, because the SRM prevents a forced sale that would have pushed down nearby prices.

---

**P3** *(Formal (a)–(b) · Exegetical (c).)*

(a) Year 1: growth is $-20$ percent, so G pays 0, and GDP is $0.8/1.03=0.777$ of its path, so L pays 0. Year 2: G pays $1.5\times(6-3)=4.5$. GDP stands at

$$\frac{0.8\times1.06}{1.03^2}=0.799$$

of its path, 20.1 percent below it, so L still pays 0. G pays 4.5 in a year when output is a fifth below the level the debt was sized for.

(b) At 3.1 percent G pays $1.5\times0.1=0.15$, and at 2.9 percent nothing, so the revision saves 0.15. C falls from 2 to 0, a saving of 2, about 13 times as much. (Well above the threshold the same 0.2-point revision is worth 0.3 on G and nothing on C.)

**Must hit, strict (c):**

- G fails (i), tracking capacity to pay: growth measures change, not level, so a rebound from a collapse clears the trigger while capacity is still depressed.
- C strains (iii), lying beyond the borrower's control: a cliff makes a small revision of a figure the borrower itself publishes worth a whole payment.

**Wrong turns:** in (a), putting year-2 GDP 6 percent above its path, when growth is measured from the collapsed year 1; in (b), giving G's saving as $1.5\times0.2=0.3$, which holds only when both figures lie above the threshold.

**Model answer (c):** G fails the requirement that the index track capacity to pay: it keys on growth, a change, so the rebound from a collapse pays out while output is still far below its path, much as Ukraine's securities did on the 2023 rebound. C strains the requirement that the index lie beyond the borrower's control, since its cliff makes a 0.2-point revision of the borrower's own statistic worth a whole payment; Argentina's warrants had such a cliff, while Greece's used G's linear shape and Eurostat's figures.

</details>

## Flashback

**From Lesson [8.1](08-01-forgiveness-commitment-and-the-fresh-start.md) (Forgiveness, commitment and the fresh start):** *(Formal (a)–(b) · Exegetical (c).)* An invented household borrows 30 (thousand dollars) for a year. Next year it earns 90, or 60 if a bad year comes, which has probability 0.2 as long as the household takes care. Lenders are competitive and risk-neutral, their funds cost nothing, and the household's utility is $\ln c$. A law discharges a share $\theta$ of the debt in the bad year, and lenders price it in. The household takes care iff its good-year consumption is at least 1.1 times its bad-year consumption. (a) Assuming it stays careful, find the discharge $\theta^*$ that leaves it the same consumption in both years, with the face value and the rate at $\theta^*$. (b) Find the most generous discharge $\bar\theta$ at which it is still careful, with the face value, the rate and the consumption in each year. (c) Would the household be careful at $\theta^*$? In two sentences: what does comparing $\bar\theta$ with $\theta^*$ show about how much insurance a law that preserves care can give, and who bears the risk that is left?

<details>
<summary>Solution</summary>

Lenders collect the face $D$ in a good year and $(1-\theta)D$ in a bad one, so they break even at $(1-0.2)D+0.2\,(1-\theta)D=30$, that is $D=30/(1-0.2\theta)$. Consumption is $c_H=90-D$ and $c_L=60-(1-\theta)D$.

(a) Equal consumption means $90-D=60-(1-\theta)D$, so $\theta D=30$. With $D=30/(1-0.2\theta)$ this gives $\theta=1-0.2\theta$, so $\theta^*=5/6$. Then $D=30/(1-1/6)=36$, a rate of $36/30-1=20\%$, and consumption is $90-36=54$ in both years.

(b) The care constraint binds at $\bar\theta$: $90-D=1.1\,[60-(1-\theta)D]$, that is $24+0.1D=1.1\,\theta D$. Substituting $D=30/(1-0.2\theta)$ and clearing the denominator gives $24\,(1-0.2\theta)+3=33\theta$, so $\bar\theta=27/37.8=5/7$. Then $D=30/(1-1/7)=35$, a rate of $1/6\approx16.7\%$, and consumption is $c_H=90-35=55$ and $c_L=60-\tfrac27\times35=50$, a ratio of exactly 1.1.

**Must hit, strict (c):**

- No. At $\theta^*$ consumption is 54 in both years, so $c_H\ge1.1\,c_L$ fails and the household drops care. Whenever care is costly ($k>1$) the constraint binds before full insurance, since at $\bar\theta$ good-year consumption is $k$ times bad-year consumption.
- The household keeps the risk that is left: 55 in a good year and 50 in a bad one at $\bar\theta$, against 54 in both under full insurance, and a bad-year discharge of $\tfrac57\times35=25$ rather than 30. Lenders bear none of it, since they break even under every $\theta$, and they charge less at $\bar\theta$, 16.7 percent against 20.

**Wrong turns:** treating the face value as 30 whatever $\theta$ is, which gives $\theta^*=30/30=1$, a full discharge that over-insures (the face is then 37.5, and the household consumes 52.5 in a good year and 60 in a bad one); pricing the loan as $30\,(1+0.2\theta)$, which gives 35 at $\theta^*$ instead of 36, because lenders collect the face only in good years.

**Model answer (c):** No: at $\theta^*$ consumption is the same in both years, so care gains the household nothing and it would drop it. A law that preserves care must stop at $\bar\theta=5/7$, leaving good-year consumption 10 percent above bad-year consumption; the household bears the risk that is left (50 in a bad year against 54 under full insurance), and lenders bear none, since they break even under every law and charge less at $\bar\theta$, 16.7 percent against 20.

</details>

## Connections

- **Backward:** [1.1](01-01-costly-state-verification.md) supplies both halves: debt is the contract that looks least, and an indexed payment must be looked at every period, so this lesson's bonds are 1.1's commenda at national scale. [5.3](05-03-tax-smoothing-and-optimal-debt.md) made the efficiency case for state-contingent debt; here it meets the cost of verification. [7.1](07-01-haircuts-the-debt-laffer-curve-and-buybacks.md), [7.2](07-02-holdouts-and-collective-action-clauses.md) and [7.3](07-03-designing-bankruptcy.md) are the machinery indexation would replace. [8.1](08-01-forgiveness-commitment-and-the-fresh-start.md) is relief granted after the fact, and [8.2](08-02-the-scheduled-release.md) writes a release against the calendar instead of the state of the world. Nominal debt ([5.5](05-05-the-fiscal-theory-and-inflating-debt-away.md)) and local-currency debt ([6.1](06-01-the-transfer-problem-and-original-sin.md)) already carry crude contingency.
- **Forward:** [8.4](08-04-odious-debt-as-a-rule.md) asks who may declare a debt odious, and on what evidence: the verification problem again, with a regime's legitimacy in place of GDP.
- **Sideways:** [4.4](04-04-overborrowing.md)'s P2 showed that a fire sale is only a transfer once borrowers are insured; SRMs and indexed bonds are steps toward that case. In the debt thread, [`history-of-debt` 6.2](../../history-of-debt/lessons/06-02-the-eurozone-and-greece.md) has the Greek exchange that carried the warrants, and [5.5](../../history-of-debt/lessons/05-05-jubilee-2000-and-hipc.md) HIPC's two steps. [`philosophy-of-debt` 5.2](../../philosophy-of-debt/lessons/05-02-moral-hazard-and-fairness-to-those-who-paid.md) asks whether income-linked repayment is cover of the kind that, once declined, makes a bad outcome option luck; this lesson prices such cover and leaves that question there.
