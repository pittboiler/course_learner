# Economics of Debt · Lesson 8.2: The scheduled release: the Jubilee as a mechanism

> ⏱ ~15 min · Module 8: Debt relief as mechanism · Builds on: [8.1 Forgiveness, commitment and the fresh start](08-01-forgiveness-commitment-and-the-fresh-start.md), [1.4 The price of a loan](01-04-the-price-of-a-loan.md), [history-of-debt 1.3](../../history-of-debt/lessons/01-03-release-laws-in-ancient-israel.md), [theology-of-debt 1.3](../../theology-of-debt/lessons/01-03-the-jubilee-the-land-is-mine.md) · Unlocks: [8.3 Relief written into the contract](08-03-relief-written-into-the-contract.md), [8.4 Odious debt as a rule](08-04-odious-debt-as-a-rule.md)

## Why this matters

The debt thread has read the biblical release laws three ways: as law beside the Babylonian clean slates ([history-of-debt 1.2](../../history-of-debt/lessons/01-02-debt-bondage-and-the-royal-clean-slate.md), [1.3](../../history-of-debt/lessons/01-03-release-laws-in-ancient-israel.md)), as theology ([theology-of-debt 1.2](../../theology-of-debt/lessons/01-02-the-seventh-year-deuteronomy-15.md), [1.3](../../theology-of-debt/lessons/01-03-the-jubilee-the-land-is-mine.md)), and as a claim of justice ([philosophy-of-debt 5.4](../../philosophy-of-debt/lessons/05-04-jubilee-as-a-moral-principle.md)). All three meet the worry Deuteronomy raises about itself: lenders see the release coming and stop lending. This lesson prices that worry. A release fixed in advance is a contract feature, a cap on the life of every claim, and a cap can be priced. The price says how much a borrower can raise at each point in the cycle and what a field sells for. The same model says what the rule buys, protection against a debt trap with no exit, and what an opt-out like Hillel's *prosbul* gives back and takes away.

## The idea

Suppose every debt lapses on a date everyone knows. A lender whose money costs 4 percent a year meets a household that can spare 1,000 dollars a year for repayments. Ten years before the release she can lend it 8,111 dollars, the value today of ten payments of 1,000. Three years before, only three payments fall due before the date, so she lends 2,775. One year before, she lends 962, and in the release year nothing, since anything lent then would be a gift. The household is no poorer. The date has shortened every claim it can sign.

A field under the Jubilee is the same arithmetic run on harvests. Leviticus lets a family sell a field only until the fiftieth year, so every sale is a lease of the harvests left. At 4 percent, 40 harvests are worth 19.8 harvests today, 79 percent of the 25 the field would fetch if it could be sold for good: the distant reversion takes little off the price. Five harvests are worth 4.45. The release bites where it is near.

Why accept that? Because of what happens without it. Say 3 landholding families in 100 lose their land each year after a bad harvest, and a family that has lost its land never gets it back. After 50 years 78 in 100 are landless, and in the long run all are. A release every 50 years limits each family's loss to the years left before it. That is insurance, and its premium is the credit and saleable land value the release takes away.

## The formal version

**Setup.** Treat the release as a mechanism: a rule-maker fixes the date and whether it can be waived, and lenders and buyers respond by breaking even. The lender's funds cost $r$ a year. A [scheduled release](../reference.md#scheduled-release) cancels every claim outstanding on a known date, and $\tau$ counts the year-ends at which a payment can still be collected before it. The [annuity factor](../reference.md#annuity-factor)

$$a_k(r)=\sum_{t=1}^{k}(1+r)^{-t}=\frac{1-(1+r)^{-k}}{r}$$

is the value today of 1 a year for $k$ years. *In words:* it prices a stream that stops after $k$ payments, and at $r=0$ it just counts them, $a_k(0)=k$.

**Loans.** A loan of $L$ repaid by $n$ level installments $x$ at year-ends breaks even for a competitive lender ([zero-profit loan rate](../reference.md#zero-profit-loan-rate)) when

$$L=x\,a_{\min(n,\tau)}(r).$$

*In words:* only installments due before the release count, so they alone must repay the loan with interest. The break-even installment $L/a_{\min(n,\tau)}(r)$ is flat while $\tau\ge n$ and rises as the date nears. Turned around, a borrower who can pay at most $y$ a year can borrow at most

$$\bar L(\tau)=y\,a_{\min(n,\tau)}(r),$$

which is $y/(1+r)$ one year out and zero in the release year. *In words:* credit dries up as the release approaches, and since each year closer removes a payment worth $y(1+r)^{-\tau}$, the last years remove the most. Deuteronomy 15:9 warns against exactly this response:

> The seventh year of remission draweth nigh; and thou turn away thy eyes from thy poor brother, denying to lend him that which he asketh

The model needs no malice to produce the refusal. Anything lent beyond $\bar L(\tau)$ is a gift, which is how [theology-of-debt 1.2](../../theology-of-debt/lessons/01-02-the-seventh-year-deuteronomy-15.md) reads the loan the verse demands.

**Land.** A field yields $Y$ a year, and a sale with $\tau$ harvests left transfers only those ("he shall sell to thee the time of the fruits", Leviticus 25:16):

$$P(\tau)=Y\,a_\tau(r)=\frac{Y}{r}\Bigl[1-(1+r)^{-\tau}\Bigr].$$

*In words:* the [Jubilee land price](../reference.md#jubilee-land-price) is the freehold value $Y/r$ minus the value today of the reversion, $Y(1+r)^{-\tau}/r$, which the seller keeps. As $r\to0$ it becomes $\tau Y$, the count of harvests in [theology-of-debt 1.3](../../theology-of-debt/lessons/01-03-the-jubilee-the-land-is-mine.md). A loan and a field are one object here, an annuity that stops at the release, and $\bar L(\tau)$ is simply the price of the borrower's repayments.

**The trap.** Let each family's land follow a two-state Markov chain ([grad-macro 1.5](../../grad-macro/lessons/01-05-stochastic-dynamic-programming.md)). Each year a holding family loses its land with probability $p$, and a landless family never regains it. With no release, the landless share after $t$ years, starting from none, is $\ell_t=1-(1-p)^t\to1$, and the only stationary distribution puts every family in the landless state. *In words:* that state is [absorbing](../reference.md#absorbing-debt-trap), so any $p>0$ eventually takes everyone there. A release every $J$ years returns every field, so the share restarts at zero each cycle. Counted at the start of each year, its long-run average is

$$\bar\ell(J)=\frac1J\sum_{s=0}^{J-1}\bigl[1-(1-p)^s\bigr]=1-\frac{1-(1-p)^J}{Jp},$$

and no family stays landless longer than $J$ years. *In words:* the release turns an absorbing state into a passing one. Each family is insured against permanent loss, and the premium is paid in liquidity: the reversion's value stays the family's, but it can no longer be sold or pledged.

**Opting out.** A [*prosbul*](../reference.md#prosbul) registers a loan with a court so that the release does not cancel it: for that loan, $\tau=\infty$. If every lender may use one, every loan the release would cut gets registered, $\bar L$ returns to $y\,a_n(r)$ at every date, and the release binds only loans it never touched. *In words:* a waivable release is waived exactly where it binds, so it restores credit by removing the protection. Land works the same way: if fields may be sold for ever, the chain is back to no release.

## Picture

![Price of a field against harvests left before the Jubilee: a concave discounted curve at 4 percent rising to about 21.5 harvests at 50 left, under a flat freehold line at 25 harvests, and a straight undiscounted line that climbs to 50; at 40 harvests left the two prices are 19.8 and 40](assets/08-02-fig1.svg)

Blue is the price of a field in harvests at 4 percent, red the undiscounted count, and the dashed line the freehold value of 25 harvests, the price with no Jubilee. Near the Jubilee the two prices agree. Far from it the count overshoots, and beyond 25 harvests left it exceeds even the freehold value. The shaded gap is the reversion the seller keeps.

## Worked examples

**Example 1 (the model on a clean case).** A borrower wants 5,000 dollars over ten years, and money costs 4 percent. With the release at least ten year-ends away, the break-even installment is $5000/a_{10}(0.04)=616.45$. At $\tau=6$ it is $5000/a_6(0.04)=953.81$, at $\tau=3$ it is 1,801.74, and at $\tau=1$ the whole 5,200 falls due in one year.

- *The quoted rate.* A lender who keeps the standard ten-installment contract at $\tau=6$ charges 953.81 and lets the release cancel installments 7 to 10. Quoted on the full schedule, solving $953.81\,a_{10}(i)=5000$, that is 13.9 percent. He earns 4 percent, since six payments of 953.81 are a six-year loan at 4 percent. The other 9.9 points price a loss he knows is certain, as [1.4](01-04-the-price-of-a-loan.md)'s risk layer prices an expected one.
- *The prosbul.* Registered with a court, the loan costs 616.45 a year at every date. A borrower who could not pay 953.81 can now borrow, and she gives up the release.
- *Who pays.* Nobody here defaults, so the release protects no one. Borrowers near the date pay in liquidity, the same present value squeezed into fewer, larger payments (337 dollars a year more at $\tau=6$), and lenders pay nothing, since they break even. The release has a benefit only when some borrowers cannot pay.

**Example 2 (why you'd care: the trap and its premium).** Let $p=0.03$ and value land at 4 percent. Compare the Jubilee's 50 years with no release and with a land release every 7 years (hypothetical: Deuteronomy's seventh year released debts, not land):

| Release | Landless share, cycle average | Just before the release | Saleable value of a field, share of freehold |
|---|---|---|---|
| Every 7 years | 8.6% | 19.2% | 14.3% |
| Every 50 years | 47.9% | 78.2% | 57.0% |
| None | tends to 100% | 78.2% after 50 years | 100% |

The first two columns are $\bar\ell(J)$ and $1-(1-p)^J$. The last averages $P(\tau)/(Y/r)$ over the $J$ dates of a cycle, $1-a_J(0.04)/J$: the share of its field's value a family can raise in a bad year, on average. The rule-maker picks $J$ on this frontier. A 7-year release holds average landlessness under 9 percent, but a field can then raise only a seventh of its freehold value. The Jubilee keeps 57 percent saleable and tolerates 48 percent landless on average. No release keeps land fully saleable and ends with every family landless, which is the land-concentration spiral [theology-of-debt 1.4](../../theology-of-debt/lessons/01-04-creditors-under-judgment.md) hands to this course: "Woe to you that join house to house and lay field to field, even to the end of the place" (Isaiah 5:8).

Who gains and who pays: the families hit by bad years, and their children, get the land back. Every family pays the premium in advance, since in a bad year it can raise only a lease's value on its land, and borrowers pay again as credit dries up near the date. Buyers neither gain nor lose, because they pay only for the harvests they get.

## Watch out

- **You might think a release makes credit dearer, but actually** a competitive lender earns $r$ at every date. What changes is the term: near the date a loan must be repaid in fewer, larger payments, so it is the borrower's capacity $y$, not the rate, that shuts her out. The 13.9 percent quoted in Example 1 is that squeeze, not a profit.
- **You might think the undiscounted count is a harmless simplification, but actually** it is right only near the Jubilee. With 40 harvests left at 4 percent it prices the field at 40 harvests against 19.8.
- **You might think the Jubilee only moves money between buyer and seller, but actually** it changes what gets built. A holder with 5 harvests left will not plant an orchard that first bears in year 8, because the returning family collects the fruit. That is the wedge of [debt overhang](../reference.md#debt-overhang) ([2.4](02-04-debt-overhang.md)): someone else collects part of a project's return, so whoever pays for it passes it up.

## One-liner

> A scheduled release caps the life of every claim, so loans and land are priced as annuities that stop at the date and credit dries up as it nears; the lost credit buys a guarantee that no bad year is permanent, and an opt-out returns the credit by returning the trap.

## Problems

**P1 (🟢) *(Formal.)*** A vineyard yields 3 a year at year-ends, and money costs 7 percent a year. (a) What does a buyer pay for it with 45 harvests left before the Jubilee, and with 5 left? Give each as a share of the price it would fetch if it could be sold for good. (b) After 15 harvests, the seller's kinsman redeems the vineyard bought with 45 left. What redemption price leaves the buyer exactly as well off as keeping it to the Jubilee? A refund in proportion to the harvests left, which is what counting harvests gives when they are not discounted, would pay him $30/45$ of his price. Who gains from that rule, and by how much? Two decimals.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** Add a kinsman who redeems, [theology-of-debt 1.3](../../theology-of-debt/lessons/01-03-the-jubilee-the-land-is-mine.md)'s *go'el*, to the lesson's chain. Each year a holding family loses its land with probability $p=0.04$, and a landless family gets it back through redemption with probability $q=0.01$. (a) With no Jubilee, find the stationary landless share and the expected length of a landless spell. (b) Add a Jubilee every 50 years. Starting from no landless families just after one, find the landless share just before the next, and its cycle average counted at the start of each year as in the lesson. (c) Redemption alone already makes the landless state non-absorbing. In two sentences: what does the Jubilee add that redemption cannot, and which families does it reach?

**P3 (🔴, optional) *(Formal (a)–(b) · Exegetical (c).)*** An invented reform keeps a Jubilee every 50 years but lets a family sell its field for ever if it chooses, a *prosbul* for land. A field yields 1 a year, money costs 6 percent, and a family in distress must raise 10 at once. It sells a lease on the harvests left if that raises 10, and otherwise sells for ever. (a) With how many harvests left before the Jubilee does a distressed family sell for ever? (b) Each year 2 in 100 families still holding their land fall into distress. Of the families holding land when a cycle starts, with 50 harvests left, what share lose it for good before the next Jubilee? Starting with every family holding land, what share still hold it after ten cycles, and what is the long-run landless share? (c) In two sentences: why is the opt-out used only late in the cycle, and why does that bring back the trap however short the late window?

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) The freehold price is $3/0.07=42.86$. With 45 harvests left,

$$P(45)=3\,a_{45}(0.07)=3\times13.6055=40.82,$$

which is 95.2% of the freehold price. With 5 left, $P(5)=3\times4.1002=12.30$, or 28.7%. The reversion 45 years off is worth under 5% of the vineyard; 5 years off it is worth 71%.

(b) At redemption 30 harvests remain, so the fair price is their value then: $3\,a_{30}(0.07)=3\times12.4090=37.23$. Check that it makes the buyer whole: he paid 40.817 for 15 harvests worth $3\,a_{15}(0.07)=27.324$ today plus 37.227 in 15 years, worth $37.227\times1.07^{-15}=13.493$ today, and $27.324+13.493=40.817$. The proportional refund is $40.82\times30/45=27.21$, so the redeeming family gains $37.23-27.21=10.02$ and the buyer loses it. The rule refunds the average price per harvest paid at the sale, $40.82/45=0.91$, but the 30 harvests left are nearer by now and worth $37.23/30=1.24$ each.

**Wrong turns:** counting harvests undiscounted, which prices 45 harvests at 135, over three times the freehold price; subtracting the 15 harvests enjoyed at face value, $40.82-45=-4.18$, a refund the buyer would have to pay; answering (b) with $3\,[a_{45}(0.07)-a_{15}(0.07)]=13.49$, which is the value of the remaining harvests at the sale date, not at the redemption 15 years later.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) In the stationary distribution the flow into landlessness equals the flow out: $0.04\,\pi_H=0.01\,\pi_L$ with $\pi_H+\pi_L=1$, so

$$\pi_L=\frac{p}{p+q}=\frac{0.04}{0.05}=0.8.$$

A landless family is redeemed with probability 0.01 each year, so its spell is geometric with mean $1/q=100$ years.

(b) The share evolves as $\ell_{s+1}=\ell_s(1-q)+(1-\ell_s)\,p=p+\rho\,\ell_s$ with $\rho=1-p-q=0.95$, so from $\ell_0=0$, $\ell_s=0.8\,(1-0.95^s)$. Just before the Jubilee, $\ell_{50}=0.8\,(1-0.0769)=0.738$. The cycle average is

$$\frac1{50}\sum_{s=0}^{49}\ell_s=0.8\Bigl[1-\frac{1-0.95^{50}}{50\times0.05}\Bigr]=0.8\,(1-0.3692)=0.505.$$

The Jubilee barely moves the peak, 0.74 against 0.80, but cuts the average from 0.80 to about 0.50.

**Must hit, strict (c):**

- Redemption bounds the long-run share (0.8) but not any family's spell. Spells are geometric and unbounded: since $0.99^{50}=0.61$, 61% of families that lose their land are still waiting 50 years later.
- The Jubilee caps every spell at 50 years whatever a family's luck, so it reaches the families whose kin never redeem, the long spells that hold the redemption-only share at 0.8.

**Wrong turns:** using the no-redemption peak $1-0.96^{50}=0.870$; reading $1/q$ as the longest spell rather than the mean; concluding that the Jubilee is redundant once $q>0$.

**Model answer (c):** Redemption keeps the long-run landless share below 1, but a spell ends only when a kinsman happens to redeem, so spells have no upper limit and 61 percent of landless families are still landless after 50 years. The Jubilee ends every spell within 50 years whatever a family's luck, reaching exactly the families redemption misses, which is why it cuts the average from 0.80 to about 0.50 while barely moving the peak.

---

**P3** *(Formal (a)–(b) · Exegetical (c).)*

(a) The lease raises $a_\tau(0.06)$, and $a_\tau(0.06)\ge10$ requires $1-1.06^{-\tau}\ge0.6$, that is $1.06^{\tau}\ge2.5$, or $\tau\ge\ln2.5/\ln1.06=15.7$. Check: $a_{15}(0.06)=9.71<10\le a_{16}(0.06)=10.11$. So with 15 or fewer harvests left a distressed family sells for ever; the freehold price, $1/0.06=16.67$, covers the need.

(b) What decides is a family's first distress in the cycle. If it comes with 16 or more harvests left, the family sells a lease and gets the field back at the Jubilee; with no field, it has nothing more to lose that cycle. If it comes in the last 15 years, the field is gone for good. So the share lost for good is

$$0.98^{35}\bigl(1-0.98^{15}\bigr)=0.4931\times0.2614=0.1289.$$

After ten cycles $(1-0.1289)^{10}=0.252$ of families still hold land. Each cycle removes 12.9% of the remaining holders, so the holding share tends to zero and the long-run landless share is 100%.

**Must hit, strict (c):**

- The lease on $\tau$ harvests is worth $a_\tau(r)$, which falls toward zero as the Jubilee nears, so only late in the cycle does it fall short of the need; early on a lease raises nearly the freehold price and no one sells for ever.
- Every sale for ever is absorbing, so a fixed share of the remaining holders is lost each cycle and the holding share decays geometrically to zero: the opt-out slows the trap but does not stop it.

**Wrong turns:** counting 16 harvests as a sale for ever, when $a_{16}(0.06)=10.11$; taking the share lost for good as $15\times0.02=0.30$, which ignores that a family must still hold its field to lose it; reporting 12.9% as the long-run landless share, when it is a loss per cycle that compounds.

**Model answer (c):** A lease is worth only the harvests left before the Jubilee, so a family's need exceeds it only in the last years of the cycle, which is exactly where the release was cutting what land could raise. Each sale for ever is permanent, so every cycle removes the same share of the remaining holders and the landless share climbs toward one: a partial opt-out restores the trap, only more slowly.

</details>

## Flashback

**From Lesson [7.3](07-03-designing-bankruptcy.md) (Designing bankruptcy):** *(Formal.)* An invented mill owes five suppliers 16 each, a year's trade credit apiece. It fails with probability 0.08, and suppliers' funds cost nothing. In a failure with no stay, every supplier seizes at once, in random order, each taking assets worth up to her 16 until the assets, worth 36 in pieces, run out. Under a stay nobody may seize: the mill is sold whole for 62, shared equally. Competitive suppliers charge the rate at which they break even, a failure leaving each with her 16 of principal to recover from. (a) Find a supplier's expected recovery, as a fraction of her 16, and the rate she charges, under a race and under a stay. (b) A 3 percent ceiling is put on the rate. Which rule still lets the mill borrow, and what is the largest failure probability at which suppliers would lend under each rule? (c) Find the mill's expected saving from the stay on its 80 of credit, and what each of the two suppliers who would have been first in line in a race loses.

<details>
<summary>Solution</summary>

Under the stay each supplier gets $62/5=12.4$, a recovery of $12.4/16=0.775$. In a race the 36 goes out in the order of seizure: the first two in line take their 16, the third the last 4, the last two nothing. A supplier who does not know her place expects $36/5=7.2$, a recovery of 0.45. Seizing beats waiting whatever the others do (16 against 12.4 if no one else seizes, 7.2 against 0 if all do), so without a stay the race is what happens.

(a) Break-even means $(1-p)(1+r)+p\lambda=1$, so $r=p(1-\lambda)/(1-p)$. Race: $0.08\times0.55/0.92=4.78\%$. Stay: $0.08\times0.225/0.92=1.96\%$.

(b) The race rate is above the ceiling, so under a race suppliers will not lend on these terms and the mill cannot borrow; the stay rate is below it and the mill can. The ceiling binds where $p(1-\lambda)/(1-p)=0.03$, that is $p_{\max}=0.03/(1-\lambda+0.03)$: $0.03/0.58=5.2\%$ under a race and $0.03/0.255=11.8\%$ under a stay. The stay more than doubles the failure risk suppliers will carry at the ceiling.

(c) Interest is paid only if the mill survives. Under a race the mill expects to pay $0.92\times0.0478\times80=3.52$ and under a stay $0.92\times0.0196\times80=1.44$, a saving of 2.08. That is $p\,(G-L)=0.08\times(62-36)$: the chance of a failure times the 26 of value a race destroys in one. Each of the two suppliers who would have been first in line takes her 16 in full in a race and gets 12.4 under a stay, so each loses 3.6 (the third gains 8.4 and the last two 12.4 each, a net gain of 26). Before the fact each supplier expects 7.2 under a race and 12.4 under a stay, and competitive suppliers earn zero either way, so the stay's gain reaches the mill through the rate.

**Wrong turns:** taking a race recovery of $\tfrac25\times16=6.4$, which pays only the first two suppliers and forgets the third's 4; counting the whole rate gap on 80 as the mill's saving, 2.26, though interest is paid only in the years the mill survives.

</details>

## Connections

- **Backward:** [1.4](01-04-the-price-of-a-loan.md)'s zero-profit rate is the break-even condition here, with a loss the lender knows is certain in place of an expected one. [1.3](01-03-pledgeable-income-collateral-and-monitors.md) limited credit to [pledgeable income](../reference.md#pledgeable-income); a release makes the harvests after its date unpledgeable by law, as Hart and Moore's human capital is by nature. [3.4](03-04-kiyotaki-moore-collateral-cycles.md) priced land as the discounted sum of its user costs, and the Jubilee cuts that sum off at the release. [8.1](08-01-forgiveness-commitment-and-the-fresh-start.md) set relief by rule against relief at discretion; a release dated in advance is the rule at its most rigid.
- **Forward:** [8.3](08-03-relief-written-into-the-contract.md) writes relief into the contract by state, so that debts shrink in bad years whatever the date, where the release forgives on its date whatever the year was like. [8.4](08-04-odious-debt-as-a-rule.md) takes another rule fixed in advance, a declaration that some debts need not be repaid, and asks what it does to lending before anyone invokes it.
- **Sideways:** this is the debt thread's showcase, read three ways before it was priced. [history-of-debt 1.3](../../history-of-debt/lessons/01-03-release-laws-in-ancient-israel.md) sets out the codes, and its P2 computed the undiscounted column that $\bar L(\tau)$ generalizes; [1.2](../../history-of-debt/lessons/01-02-debt-bondage-and-the-royal-clean-slate.md) shows lenders drafting around discretionary edicts. [theology-of-debt 1.2](../../theology-of-debt/lessons/01-02-the-seventh-year-deuteronomy-15.md) asks whether the *prosbul* was fidelity or evasion, and the model says what both readings must grant: registered loans regain their credit and lose the release. [theology-of-debt 1.3](../../theology-of-debt/lessons/01-03-the-jubilee-the-land-is-mine.md) counted the harvests this lesson discounts, and [1.4](../../theology-of-debt/lessons/01-04-creditors-under-judgment.md) handed over Isaiah's spiral. Whether a scheduled restoration is *just* is [philosophy-of-debt 5.4](../../philosophy-of-debt/lessons/05-04-jubilee-as-a-moral-principle.md)'s question; its premise that a known date takes nothing from later claimants appears here only as the statement that buyers and lenders break even. The Markov chains are those of [grad-macro 1.5](../../grad-macro/lessons/01-05-stochastic-dynamic-programming.md).
