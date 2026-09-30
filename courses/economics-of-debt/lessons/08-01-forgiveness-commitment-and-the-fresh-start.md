# Economics of Debt · Lesson 8.1: Forgiveness, commitment and the fresh start

> ⏱ ~15 min · Module 8: Debt relief as mechanism · Builds on: [2.4 Debt overhang](02-04-debt-overhang.md), [7.3 Designing bankruptcy](07-03-designing-bankruptcy.md), [grad-macro 6.2 Policy rules and the Taylor principle](../../grad-macro/lessons/06-02-policy-rules-taylor-principle.md) · Unlocks: [8.2 The scheduled release](08-02-the-scheduled-release.md), [8.3 Relief written into the contract](08-03-relief-written-into-the-contract.md)

## Why this matters

Module 7 wrote debts down after the fact and often found that everyone gained: a borrower with an [overhang](../reference.md#debt-overhang) works, invests and repays more once part of its debt is gone ([2.4](02-04-debt-overhang.md), [7.1](07-01-haircuts-the-debt-laffer-curve-and-buybacks.md)), and a collective procedure beats a creditor race ([7.3](07-03-designing-bankruptcy.md)). American consumer bankruptcy makes relief a standing promise: an honest debtor can have most unsecured debts discharged and start again, and Dobbie and Song (2015, *AER*) rank it among the country's largest social insurance programs. This lesson asks what the promise does before anyone needs it: to the interest rate, to the care borrowers take, and to whether anyone believes the relief will stop where the law says. The last question is Kydland and Prescott's (1977, *JPE*): rules versus discretion.

## The idea

An invented household earns 50,000 dollars in a normal year and 25,000 in a bad one, after a layoff, and a bad year comes one time in ten. It must borrow 15,000 dollars now, for the car it needs to get to work, and repay next year. Say lenders' funds cost nothing.

With no discharge it owes 15,000 either way, keeping 35,000 in a good year and 10,000 in a bad one. Now let a law cancel the debt in a bad year. Lenders lose 15,000 one time in ten, so they break even by asking 16,667 of those who can pay, a rate of 11.1 percent. The household keeps 33,333 in a good year and 25,000 in a bad one. It pays 1,667 extra in each good year to keep 15,000 in a bad one, at fair odds: nine good years' extra payments, 15,000 in all, buy one bad year's relief. That is insurance, and the higher rate is its premium. A household that values a dollar more when it has few of them takes the deal.

Two catches. First, insurance dulls the reason to avoid the bad year. Care (showing up, keeping skills current, passing on the risky gig) keeps the bad year at one in ten; without care it is three in ten. If the discharge makes care not worth its trouble, lenders price three in ten and the rate jumps from 11 to 43 percent. So the best law cancels enough to insure but not so much that care collapses. Second, once the loans are made and the care is taken, the only reason to stop short is gone. A government that can revisit the law will then cancel more, and households who expect that stop taking care. The plan that is best at the start is not the plan anyone carries out later, and everyone can see it coming.

## The formal version

**Setup.** A household must borrow $b$ at date 0. At date 1 its income is $y_H$ with probability $1-p$ or $y_L<y_H$ with probability $p$, and its utility is $u(c)=\ln c$, the [CRRA](../reference.md#crra-utility) case with relative risk aversion 1. Lenders are competitive and risk-neutral, and their funds cost nothing. A [fresh start](../reference.md#fresh-start) law discharges a share $\theta\in[0,1]$ of the debt in the bad year, which a court can verify. $\theta$ stands for everything that sets how much a filer keeps: asset exemptions, the share of future income a repayment plan takes, which debts can be discharged at all.

**Pricing.** With face value $D$, lenders collect $D$ in the good year and $(1-\theta)D$ in the bad, so they break even when $(1-p)D+p(1-\theta)D=b$:

$$D(\theta)=\frac{b}{1-p\theta}.$$

*In words:* the loan's price rises by exactly the expected share discharged. This is [1.4](01-04-the-price-of-a-loan.md)'s [zero-profit loan rate](../reference.md#zero-profit-loan-rate) with recovery $1-\theta$ in default.

**Result 1 (the discharge is insurance).** Consumption is $c_H=y_H-D$ and $c_L=y_L-(1-\theta)D$, and expected repayment is $b$ whatever $\theta$ is. So raising $\theta$ moves consumption from the good year to the bad at fair odds, and expected utility rises with $\theta$ as long as $c_L<c_H$. *In words:* a fairly priced discharge is insurance, and the higher rate is its premium, not a cost on top. It matters most to households with nothing to cushion a bad year themselves: the buffer-stock savers of [grad-macro 5.2](../../grad-macro/lessons/05-02-precautionary-saving.md) once the buffer is spent, the households at the borrowing limit of [grad-macro 6.4](../../grad-macro/lessons/06-04-heterogeneous-agent-taste.md) who spend nearly every extra dollar.

**Care.** Now the household chooses care, at utility cost $\psi$, which keeps the bad year's probability at $p_0$; without care it is $p_1>p_0$. It takes care iff

$$(p_1-p_0)\,\bigl[u(c_H)-u(c_L)\bigr]\ \ge\ \psi .$$

*In words:* care is worth its cost when the bad year hurts enough. This is [grad-micro 5.4](../../grad-micro/lessons/05-04-moral-hazard-principal-agent.md)'s incentive constraint with the household as agent, the [care constraint](../reference.md#care-constraint), and "moral hazard" here names this incentive effect and nothing more. The discharge narrows $u(c_H)-u(c_L)$. With log utility the constraint reads $c_H\ge k\,c_L$ with $k=e^{\psi/(p_1-p_0)}$; setting $c_H=k\,c_L$ with $D=D(\theta)$ gives a linear equation whose root is

$$\bar\theta=\frac{(y_H-k\,y_L)+(k-1)\,b}{p_0\,(y_H-k\,y_L)+k\,b}.$$

*In words:* $\bar\theta$ is the most generous discharge that still leaves care worth taking. Above it the household drops care, lenders price $p_1$, and the rate jumps.

**Result 2 (the best rule stops short).** Expected utility rises with $\theta$ up to $\bar\theta$, then falls to the no-care branch. So the best law is $\bar\theta$ unless some discharge without care does better, and in Example 1 none does. *In words:* relieve up to the point where care starts to slip and no further. Below $\bar\theta$ the insurance gain beats the rate increase; above it the rate carries the cost of lost care.

**Result 3 (rules versus discretion).** Let the government revise $\theta$ after households choose care but before incomes are known. It solves its date-0 problem again (the household's expected utility, with lenders breaking even), but care is sunk, so the care constraint has dropped out, and by Result 1 it raises $\theta$ as far as insurance allows, to $\theta=1$ in Example 1, whatever it believes about care. Households foresee this and drop care, and lenders price $\theta=1$ at $p_1$. *In words:* the best rule at date 0 is not the best rule later, because its only reason for stopping short is gone by then. This is the [time inconsistency of relief](../reference.md#time-inconsistency-of-relief). It has the shape of [grad-macro 6.2](../../grad-macro/lessons/06-02-policy-rules-taylor-principle.md)'s inflation bias and of the capital levy of [public-economics](../../public-economics/syllabus.md) 6.2, where a tax on capital already in place discourages nothing, so a government free to re-choose levies it and savers who foresee this save less. Relief granted after a bad year arrives meets the same problem, since care is just as sunk, and tempts most when writing down an overhang raises total value (2.4, 7.1).

**Strategic default.** Everything above assumed the court sees the bad year. If it cannot see income, a good-year household can claim the discharge too: the [truth-telling constraint](../reference.md#truth-telling-constraint) of [1.1](01-01-costly-state-verification.md) returns and caps generosity where a good-year household would rather file than pay. That is [strategic default](../reference.md#strategic-default), default by a borrower who could pay, and a means test is the costly verification that holds it back.

## Picture

![Certainty-equivalent consumption against the share of the debt discharged in a bad year: with care it rises from 0.569 with no discharge to 0.595 at the rule of 0.84, then care stops and the household drops to a lower curve that reaches only 0.549 at a full discharge, below the no-discharge level](assets/08-01-fig1.svg)

Blue is the household's certainty-equivalent consumption (the sure consumption it values as much as its risky prospects) when it takes care and lenders price a 10 percent bad year, red when it does not and they price 30 percent, both against $\theta$ with Example 1's numbers. Solid segments are what happens: care up to $\bar\theta\approx0.84$, then the drop. Dashed segments are not equilibria; the blue dashed piece is what a household that could promise care would get. A revisable law ends at the red dot, below the no-discharge line.

## Worked examples

**Example 1 (the model on a clean case).** Normalize The idea's household: $y_H=1$, $y_L=0.5$, $b=0.3$ (multiply by 50,000 for dollars). Care keeps $p_0=0.1$, and without it $p_1=0.3$. Care costs $\psi=0.2\ln1.5$, so $k=1.5$ and the household takes care iff $c_H\ge1.5\,c_L$. Certainty-equivalent consumption $e^{\mathbb E u}$ includes the care cost.

- *No discharge.* $D=0.3$, $c_H=0.7$, $c_L=0.2$, and care holds easily ($0.7/0.2=3.5$). Certainty equivalent 0.569.
- *The rule.* $\bar\theta=\frac{0.25+0.15}{0.025+0.45}=\frac{16}{19}\approx0.84$. Then $D=19/58\approx0.328$, a rate of 9.2%, with $c_H=39/58\approx0.672$ and $c_L=13/29\approx0.448$, exactly a ratio of 1.5. Certainty equivalent 0.595, 4.6% above no discharge: every discharge up to $\bar\theta$ is worth more than its rate increase.
- *Past the rule.* Just above $\bar\theta$ care stops, lenders price 30%, the rate jumps to 33.8%, and the certainty equivalent falls to 0.545. Even the full discharge without care, at 42.9%, gives only 0.549, below no discharge at all. Here the rate increase beats the insurance gain.
- *Discretion.* A government that can revise the law after care is chosen ends at that last point (Result 3): 7.8% below the rule. Had care been contractible, the full discharge would give 0.597. The care constraint costs 0.3% of consumption; the lack of commitment costs 7.8%.

Who gains and who pays: lenders break even under every law. Under discretion a bad-year household keeps 0.5 instead of the rule's 0.448, but a good-year household keeps 0.571 instead of 0.672, bad years come three times as often, and before incomes are known the household is worse off.

**Example 2 (why you'd care: the evidence, read through the model).** Each piece has been measured.

- *The bad-year gain.* Dobbie and Song (2015, *AER*) use the random assignment of Chapter 13 filings to judges who differ in leniency as an [instrument](../../econometrics/lessons/03-06-instrumental-variables.md). Protection raised filers' annual earnings by 5,562 dollars and cut five-year mortality by 1.2 and foreclosure by 19.1 percentage points, mostly because dismissed filers fared worse. That is $c_L$ rising, and the earnings gain fits the household form of 2.4's overhang: a debt that takes part of each extra dollar earned discourages earning it.
- *The price.* Gropp, Scholz and White (1997, *QJE*) find that where state exemptions are generous (a higher $\theta$), low-asset households get less credit and seem to pay more for car loans, while high-asset households hold more. That is $D(\theta)$ rising, and for some borrowers no loan at all.
- *The incentive effect.* Mayer, Morrison, Piskorski and Gupta (2014, *AER*) study a legal settlement under which Countrywide offered modifications to seriously delinquent borrowers. After the announcement its monthly delinquency rate rose, against comparable loans, by more than 0.54 percentage points, about a tenth, most among borrowers who had looked least likely to default: relief expected, behavior moved.
- *The balance.* Livshits, MacGee and Tertilt (2007, *AER*) weigh the insurance against the dearer credit that makes life-cycle borrowing harder: persistent earnings shocks make the bankruptcy option more desirable, larger transitory ones less, and for reasonable parameters the US system may be desirable. Chatterjee, Corbae, Nakajima and Ríos-Rull (2007, *Econometrica*) price every loan to zero profit, as $D(\theta)$ does, and find that means testing Chapter 7 filings yields large welfare gains.

## Watch out

- **You might think the higher rate is what the discharge costs, but actually** a fair premium is the price of insurance the household wants (Result 1). The cost is the part of the rate that prices lost care or strategic filing: the drop at $\bar\theta$ in the figure.
- **You might think a government can simply promise to stop at $\bar\theta$, but actually** a promise it would gain by breaking once care is sunk is priced as if broken. Commitment needs a rule that is costly to revise: a statute hard to amend, relief fixed in the contract ([8.3](08-03-relief-written-into-the-contract.md)), a release on a known date ([8.2](08-02-the-scheduled-release.md)).
- **You might think a write-down that raises total value after the fact is free, but actually** its anticipation is priced. An ex post Pareto improvement is not an ex ante one.

## One-liner

> A fresh start is insurance bought through the interest rate: it pays up to the point where it erodes the care that kept bad years rare, and a government free to revise it after the care is taken will go past that point, so lenders charge as if it already had.

## Problems

**P1 (🟢) *(Formal (a)–(b) · Exegetical (c).)*** An invented household must borrow 12 (thousand dollars) now. Next year it earns 40 with probability 0.75 or 16 with probability 0.25. Lenders are competitive and risk-neutral, their funds cost nothing, and the household's utility is $\ln c$. (a) With no discharge, find the face value and consumption in each year. With a law that discharges the whole debt in the bad year, find the zero-profit face value, the interest rate, and consumption in each year. (b) Compare certainty-equivalent consumption, $e^{\mathbb E\ln c}$, under the two laws. (c) A lender says the discharge costs the household 4 in every good year. In two sentences, what is wrong with counting the 4 as a cost?

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** P1's household can now take care, at utility cost $\psi=0.15\ln2$, which keeps the bad year's probability at 0.25; without care it is 0.4. So it takes care exactly when $c_H\ge2\,c_L$. (a) Find the most generous discharge share $\bar\theta$ that keeps it careful, and the face value and interest rate there. (b) The legislature can revise the law after households choose care but before incomes are known. What does it choose, what happens to care and the rate, and how does certainty-equivalent consumption (care cost included) compare with no discharge and with $\bar\theta$? (c) [philosophy-of-debt 5.2](../../philosophy-of-debt/lessons/05-02-moral-hazard-and-fairness-to-those-who-paid.md) states the incentive objection to relief as premises A1–A4. Which premise does the care constraint make precise, and do your numbers support A4, that the losses that follow outweigh what the relief achieves, for the revised law? Three sentences or fewer.

**P3 (🔴, optional) *(Formal (a) · Exegetical (b).)*** Return to P1 (bad year 0.25, no care decision), but now the court cannot see income: any household that files gets the discharge share $\theta$. Filing costs the filer as much as losing a fifth of the consumption it leaves (fees, stigma, damaged credit), so a household files when $0.8\,[y-(1-\theta)D]>y-D$. Lenders price the loan assuming only bad-year households file. (a) Find the largest $\theta$ at which a good-year household still repays, and the face value and rate there, and check that a bad-year household files at that $\theta$. (b) A means test would let the court check income, at a cost the lender bears on each filing. Which constraint from [1.1](01-01-costly-state-verification.md) does the test relax, what does that allow, and who pays for the test? Three sentences or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) · Exegetical (c).)*

(a) No discharge: $D=12$, a rate of zero, with $c_H=28$ and $c_L=4$. Full discharge: lenders collect $D$ only in good years, so $0.75D=12$ and $D=16$, a rate of $1/3\approx33.3\%$, with $c_H=24$ and $c_L=16$.

(b) No discharge: $\mathbb E\ln c=0.75\ln28+0.25\ln4=2.4992+0.3466=2.8457$, so the certainty equivalent is $e^{2.8457}=17.21$. Discharge: $0.75\ln24+0.25\ln16=2.3835+0.6931=3.0767$, so $e^{3.0767}=21.69$. The discharge is worth 4.47 thousand dollars of sure consumption, 26% more.

**Must hit, strict (c):**

- Lenders' expected receipts are 12 under both laws ($0.75\times16=12$). The extra 4 in good years, 3 on average, pays for the discharge's 12 in bad years, $0.25\times12=3$: it is a fair premium.
- The household is better off with the premium paid, as (b) shows. A cost would be a rate above the fair premium, from lost care or strategic filing.

**Wrong turns:** grossing the face up by the bad-year probability, $12\times1.25=15$, instead of dividing by the repayment probability (lenders then collect $0.75\times15=11.25<12$); comparing average consumption, which is 22 under both laws and hides the whole point.

**Model answer (c):** The 4 is a premium, not a loss: lenders collect 12 on average under both laws, and the 3 the household pays on average in good years buys exactly the 3 of expected relief in bad ones. A risk-averse household gains from that trade, as its certainty equivalent shows; a true cost would be a rate above the fair premium.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) Set $c_H=2c_L$ with $D=12/(1-0.25\theta)$: $40-D=2\,[16-(1-\theta)D]$, so $8=D(2\theta-1)$, that is $8(1-0.25\theta)=12(2\theta-1)$. Then $26\theta=20$ and $\bar\theta=10/13\approx0.769$. The face value is $D=12/(1-2.5/13)=104/7\approx14.86$, a rate of $5/21\approx23.8\%$, with $c_H=176/7\approx25.14$ and $c_L=88/7\approx12.57$.

(b) With care sunk, raising $\theta$ and resetting the face so that lenders break even only adds insurance, so the legislature chooses $\theta=1$, whatever it believes about care. At $\theta=1$ care fails even at the old pricing: the household would keep 24 and 16, and $24<32$. So care stops, lenders price 0.4, and $D=12/0.6=20$, a rate of $2/3\approx66.7\%$, with $c_H=20$ and $c_L=16$. Certainty equivalents, with the care cost entering as the factor $e^{-\psi}=2^{-0.15}=0.90125$ where care is taken:

- no discharge: $17.214\times0.90125=15.51$;
- $\bar\theta$: $e^{0.75\ln(176/7)+0.25\ln(88/7)}=e^{3.05129}=21.1426$, and $21.1426\times0.90125=19.05$;
- the revised law: $e^{0.6\ln20+0.4\ln16}=e^{2.9065}=18.29$.

The revised law beats no discharge by 18% and falls 4% short of $\bar\theta$.

**Must hit, strict (c):**

- The care constraint makes A3 precise: those who bear less of a risk's cost take less care, here exactly once $\theta$ passes $\bar\theta$.
- A4 fails against no discharge: even the revised law beats it (18.29 against 15.51), because a bad year without relief leaves only 4.
- A4 holds only for the step from $\bar\theta$ to the revised law (19.05 to 18.29), where lost care costs more than the extra insurance is worth.

**Wrong turns:** in (b), keeping the 0.25 pricing at $\theta=1$ after care has stopped, which gives a rate of 1/3 instead of 2/3; leaving out the care cost under no discharge and at $\bar\theta$, which overstates both by about 11%; answering A1 in (c), which the model builds in (the law is known, and the revision foreseen).

**Model answer (c):** The care constraint is A3 made exact: households take less care once the discharge passes $\bar\theta$. A4 fails as a claim against relief itself, since even the revised law's full discharge leaves the household better off than no discharge (18.29 against 15.51). It holds only for going past $\bar\theta$ (19.05 against 18.29), so the objection is sound against relief beyond $\bar\theta$, and against a law that cannot be held there, but not against the discharge.

---

**P3** *(Formal (a) · Exegetical (b).)*

(a) A good-year household repays iff $0.8\,[40-(1-\theta)D]\le40-D$, that is, $D(0.2+0.8\theta)\le8$. With $D=12/(1-0.25\theta)$ this is $12(0.2+0.8\theta)\le8(1-0.25\theta)$, so $11.6\,\theta\le5.6$ and $\theta\le14/29\approx0.483$. There $D=232/17\approx13.65$, a rate of $7/51\approx13.7\%$. A bad-year household files: filing leaves it $0.8\,(16-120/17)\approx7.15$, against $16-13.65\approx2.35$ from repaying. Above $14/29$ good-year households file too, lenders must collect $(1-\theta)D=12$ from everyone (at $\theta=1$ nothing, so no loan), and the discharge becomes a filing cost with no insurance left in it.

**Must hit, strict (b):**

- It is 1.1's truth-telling constraint: with income unverified, every household that gains by filing files, so generosity is capped where a good-year household is just indifferent.
- A means test verifies income, so good-year households cannot claim the discharge; the cap at 14/29 disappears and only the care constraint limits generosity, as in P2.
- Lenders bear the test's cost on each filing and competition passes it into the face value, so borrowers pay for the test through the rate.

**Wrong turns:** checking only that bad-year households file (the discharge's purpose) and not that good-year ones repay (its leak); pricing at $D=12/(1-\theta)$ as if everyone files, which is the outcome above the cap, not below it.

**Model answer (b):** This is 1.1's truth-telling constraint: with income unverified, every household that gains by filing files, so the discharge is capped at 14/29, where a good-year household is just indifferent. A means test verifies income and removes that cap, so generosity is limited only by care, as in P2. Its cost, borne by lenders on each filing, goes into the face value, so borrowers pay for it through the rate.

</details>

## Flashback

**From Lesson [7.2](07-02-holdouts-and-collective-action-clauses.md) (Holdouts and collective action clauses):** *(Formal (a)–(b) · Exegetical (c).)* An invented sovereign can pay 18 billion dollars in total, in present value. A multilateral lender (owed 3 billion) and a lender secured on oil revenue (owed 1 billion) are paid first, and the rest goes to its bonds, which have face value 25 billion. It offers each bondholder a new bond worth $v$ per 100 of face. A bondholder who holds out and sues collects 108 per 100 of face (principal plus accrued interest) whenever the exchange goes through, and the exchange goes through iff the country can pay acceptors and holdouts together. (a) The offer is void unless 80 percent of bondholders accept, and the country wants every exchange that goes through to be affordable. What is the largest $v$ it can offer, and what does a holdout earn over an acceptor at that offer? (b) Find the largest $v$ if exit consents cut a holdout's recovery to 68 per 100; if instead another 2 billion dollars of claims ranking ahead of the bonds turns up; and if both happen. (c) With exit consents alone, is holding out still weakly dominant at the offer you found in (b)? One sentence.

<details>
<summary>Solution</summary>

Per 100 of face, the seniors' 4 billion leave $100\times(18-4)/25=56$ for the bonds. If a share $\theta$ accepts and holdouts collect $h$, the exchange is affordable iff $\theta v+(1-\theta)h\le56$, so the most the country can pay each acceptor is $v=\bigl(56-(1-\theta)h\bigr)/\theta$. Holdouts are paid in full, and acceptors share the rest.

(a) At the minimum participation $\theta=0.8$, $v=(56-0.2\times108)/0.8=34.4/0.8=43$. Check in billions: 20 billion of face at 43 cents costs 8.6 and 5 billion of face at 108 cents costs 5.4, together 14, exactly what the seniors leave. A holdout earns $108-43=65$ more than an acceptor per 100 of face. This offer needs a participation share $\hat\theta=(108-56)/(108-43)=0.8$, exactly the minimum.

(b) With exit consents, $h=68$ and $v=(56-0.2\times68)/0.8=42.4/0.8=53$. With another 2 billion of senior claims, the bonds' share falls to $100\times(18-6)/25=48$ per 100 and $v=(48-21.6)/0.8=33$. With both, $v=(48-13.6)/0.8=43$, back where (a) began. A unit of capacity is spread over the 80 percent who accept and buys $1/0.8=1.25$ units of offer; a unit off the holdouts' recovery saves money only on the 20 percent who hold out and buys $0.2/0.8=0.25$. So the 40-point cut in $h$ (+10) and the 8-point fall in capacity (−10) happen to be the same size.

**Must hit, strict (c):**

- Yes. At $v=53$ a holdout still collects 68, a premium of 15, and accepting is weakly dominant only if $h\le v$.
- The consents raise the offer the country can afford but do not end the free ride: they would have to cut $h$ to 53 or below.

**Wrong turns:** taking capacity as 72 per 100, the 18 billion over 25, which forgets the seniors and gives $v=63$ in (a); spreading capacity over acceptors alone, $56/0.8=70$, as if holdouts were paid nothing.

**Model answer (c):** Yes. With exit consents alone the country can offer 53, but a holdout still collects 68, a premium of 15, and accepting is weakly dominant only when the holdout's recovery is at most the offer. The consents make a bigger offer affordable; they end the free ride only if they cut the holdout's recovery to 53 or less.

</details>

## Connections

- **Backward:** [1.4](01-04-the-price-of-a-loan.md)'s zero-profit rate prices the discharge: it cuts recovery to $1-\theta$ and, once care slips, raises the default probability from $p_0$ to $p_1$, so the expected-loss layer of the rate grows on both counts and a given usury ceiling excludes more borrowers. [1.1](01-01-costly-state-verification.md)'s truth-telling constraint is why the discharge needs a verified bad year. [2.4](02-04-debt-overhang.md) and [7.1](07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) gave the ex post case for writing debt down and [7.3](07-03-designing-bankruptcy.md) the procedure; this lesson prices their anticipation. [6.2](06-02-reputation-and-eaton-gersovitz.md)'s P1(c), where shorter exclusion after default lowered what a country could borrow, is the sovereign form of the same trade. [3.2](03-02-stopping-runs.md)'s rescue of SVB's uninsured depositors is Result 3 in a bank: relief that looks right once a bank has failed changes what depositors and banks expect next time. [4.1](04-01-fishers-debt-deflation-formalized.md)'s promise to inflate later fails for Result 3's reason.
- **Forward:** [8.2](08-02-the-scheduled-release.md) prices a release dated in advance, the rule at its most rigid. [8.3](08-03-relief-written-into-the-contract.md) writes relief into the debt itself, priced once and beyond revision. [8.4](08-04-odious-debt-as-a-rule.md) decides in advance which debts need not be repaid at all.
- **Sideways:** in the debt thread, [philosophy-of-debt 5.2](../../philosophy-of-debt/lessons/05-02-moral-hazard-and-fairness-to-those-who-paid.md) separates the incentive objection to relief from the complaint of those who paid and leaves this course the time-inconsistency problem, which Result 3 models and P2(c) prices. [theology-of-debt 6.3](../../theology-of-debt/lessons/06-03-the-ethics-of-personal-debt.md) asks whether a discharge ends a debt in conscience, with the manualist Slater and his American editor on opposite sides, and hands this course what a discharge law does to the rate. [history-of-debt 4.2](../../history-of-debt/lessons/04-02-debtors-prisons-and-the-invention-of-bankruptcy.md) tells how the discharge began as a price creditors paid for a bankrupt's disclosure and names debt overhang as its economic case, the case Example 2's earnings evidence measures. Whether any of this relief is just is those courses' question; this lesson says who gains and who pays.
