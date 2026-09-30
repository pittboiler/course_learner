# Economics of Debt · Lesson 6.3: Bulow-Rogoff: why reputation is not enough, and what sanctions add

> ⏱ ~15 min · Module 6: Sovereign default · Builds on: [6.2 Willingness to pay: reputation and Eaton-Gersovitz](06-02-reputation-and-eaton-gersovitz.md), [grad-game-theory 3.4 The folk theorems](../../grad-game-theory/lessons/03-04-folk-theorems.md) · Unlocks: [6.4 The Arellano model](06-04-the-arellano-model.md), [8.4 Odious debt as a rule](08-04-odious-debt-as-a-rule.md)

## Why this matters

[6.2](06-02-reputation-and-eaton-gersovitz.md) rested sovereign lending on one threat: default, and no one will lend to you again. That is Hume's "penalty of never being trusted again" ([philosophy-of-debt 1.2](../../philosophy-of-debt/lessons/01-02-hume-promises-as-artificial-obligation.md)) made into a repeated game. Bulow and Rogoff (1989, *AER*) showed that the threat is empty for a country that can still put money in a foreign bank: at the moment it owes the most, it needs its lenders least. Sovereigns do borrow, so something else must make them pay: sanctions, revenue creditors can seize, or creditors with power at home. This lesson reproduces the argument and sorts the repairs by the assumption each one breaks. The historians' dispute over gunboats and reputation ([history-of-debt 4.6](../../history-of-debt/lessons/04-06-bondholders-gunboats-and-receiverships.md)) is the empirical side of the same question.

## The idea

A country earns 1.1 in good years, three years in four, and 0.7 in bad years. Foreign lenders insure it at fair odds: it pays them 0.1 in each good year, and they pay it 0.3 in each bad year. It consumes 1 every year, and on average nobody gains or loses, since $\tfrac34\times0.1=\tfrac14\times0.3$. In 6.2's world the country keeps paying because the good-year gain from skipping 0.1 is smaller than the value of being insured ever after, and a defaulter is shut out forever with its raw income of 1.1 or 0.7.

Now let it default in a good year and keep the 0.1. It goes to a bank that has never lent it anything and buys a claim: "pay me 0.4 next year if the year is bad." The chance is one in four and money earns 4%, so the fair price is $0.25\times0.4/1.04=0.096$. The bank takes no risk from the country, because the country has already paid. Next year, if the year is good, the country again has 1.1, buys another claim for 0.096 and consumes 1.004. If the year is bad, the claim pays 0.4, so it again has $0.7+0.4=1.1$, buys the next claim and consumes 1.004. From now on it consumes 1.004 instead of 1 in every year: still fully insured, and richer.

The lenders' only weapon was refusing to lend again, and the country no longer needs a loan. It needed insurance, and insurance can be bought with cash in advance. The time to default is when the country owes the most, because then the payments it would still make more than pay for every payout the contract would still give it.

## The formal version

**Setup.** A small open economy has random income $y$ following a Markov chain. Let $h$ be the history of incomes up to now and $h'$ a history one year on. Foreign investors are risk-neutral and earn a safe rate $r>0$. A contract specifies a net payment $P(h)$ from the country to investors at each history, negative when investors pay. The country's **debt** at $h$ is the present value of what it still owes, this year's payment included:

$$D(h)=P(h)+\frac{E[D(h')\mid h]}{1+r}.$$

*In words:* debt is this year's net payment plus next year's debt, discounted, with promised payouts to the country counting as negative. Debt is bounded, since no one can owe more than the present value of its income. Write $\bar D=\max_h D(h)$ for its **peak**.

**The [Bulow-Rogoff assumptions](../reference.md#bulow-rogoff-assumptions).**

- (A1) *Default costs only credit.* Nothing is destroyed or seized, and no one at home loses. The one consequence is that no one lends to the country again.
- (A2) *Cash in advance still works.* A defaulter can still buy state-contingent claims from foreign investors at fair prices if it pays up front, a [cash-in-advance contract](../reference.md#cash-in-advance-contract). The sellers, unlike the country, can be made to honor them, and the old creditors cannot seize them.
- (A3) *The government holds the purse.* Every payment passes through the government, which alone decides whether to make it.

**Proposition ([Bulow-Rogoff](../reference.md#bulow-rogoff), 1989).** Under (A1)–(A3), no contract whose debt is ever positive ($\bar D>0$) is self-enforcing. *In words:* reputation alone supports no lending at all.

**Proof by construction.** Default at a history where $D=\bar D$. From then on, arrive at each history $h$ holding a claim that pays $a(h)=\bar D-D(h)$, and buy next year's claim, $a(h')=\bar D-D(h')$. No debt exceeds the peak, so the claims are never negative and the country never borrows. By the debt recursion, next year's claim costs

$$\frac{E[\bar D-D(h')\mid h]}{1+r}=\frac{\bar D}{1+r}-\bigl(D(h)-P(h)\bigr),$$

so consumption, income plus the claim minus that price, is

$$c^{\text{dev}}(h)=\underbrace{y(h)-P(h)}_{\text{under the contract}}+\frac{r}{1+r}\,\bar D.$$

*In words:* in every state and every year, the defaulter consumes what the contract would have given it plus the interest on the peak debt. (If debt only approaches a supremum $\bar D$ without reaching it, default where $D(h)>\bar D/(1+r)$: the gain that year is $D(h)-\bar D/(1+r)>0$, which is where $r>0$ earns its place.) Lenders who foresee this never let debt turn positive. The contracts that survive have $D(h)\le0$ everywhere, so the country always pays before it receives, which it could arrange alone. 6.2 took autarky to be the country's minmax, the worst lenders can do to it ([grad-game-theory 3.4](../../grad-game-theory/lessons/03-04-folk-theorems.md)). With prepaid claims on sale, the minmax beats the contract at its peak, so exclusion there is no punishment.

**What restores lending.** Break an assumption. Remove (A2) and a defaulter is back in 6.2's autarky, where exclusion bites again. The historical repairs:

| Repair | Why the deviation fails | Breaks |
|---|---|---|
| Trade sanctions, seized cargoes, gunboats ([history-of-debt 4.6](../../history-of-debt/lessons/04-06-bondholders-gunboats-and-receiverships.md)) | default costs output that prepaid claims cannot replace | (A1) |
| Attaching the country's assets abroad (mostly blocked by immunity, [history-of-debt 6.3](../../history-of-debt/lessons/06-03-holdouts-and-the-law-of-sovereign-restructuring.md)) | the claims themselves can be taken | (A2) |
| Revenue pledged and collected by creditors' own agents ([history-of-debt 4.5](../../history-of-debt/lessons/04-05-egypt-the-ottomans-and-debt-administration.md)) | the payment never reaches the government: it is [collateral](../reference.md#collateral) | (A3) |
| A parliament of creditors ([history-of-debt 3.2](../../history-of-debt/lessons/03-02-did-1688-make-britain-creditworthy.md)) | it vetoes default (North and Weingast), or default hurts the rulers' own backers (Stasavage) | (A3) or (A1) |

**The sanction rule.** Take the plainest direct sanction, a [sanction-supported debt](../reference.md#sanction-supported-debt). Output $y$ is certain, the country owes perpetual debt $D$ at interest $rD$ a year, and a default would cut output by a fraction $\kappa$ every year forever. Defaulting saves $rD$ a year and costs $\kappa y$ a year, both starting now, so the country pays exactly when $rD\le\kappa y$:

$$D\le D_{\max}=\frac{\kappa y}{r}.$$

*In words:* the country pays interest as long as it is no bigger than the harm a default would do, so the largest debt is that harm capitalized at the interest rate. Bulow and Rogoff's companion paper (1989, *JPE*) adds [constant recontracting](../reference.md#constant-recontracting): carrying out a sanction destroys value, so creditors and debtor bargain instead ([grad-game-theory 3.5](../../grad-game-theory/lessons/03-05-bargaining.md)), and a heavily indebted country pays what the threat can extract, not the face value. That fits their observation that outright repudiation is rare while negotiated partial payment is common.

## Picture

![Timeline of six years comparing a country that keeps an insurance contract with one that defaults at the start of year 3, a good year when its debt peaks at 0.1, then prepays 0.096 a year for a claim that pays 0.4 in bad years and consumes 1.0038 every year instead of 1](assets/06-03-fig1.svg)

The top lane is the contract: 0.1 out in good years, 0.3 in during bad years, consumption 1. The bottom lane defaults at the start of year 3, when debt is at its peak of 0.1. From then on the payment to lenders becomes a 0.096 premium, the bad-year payout becomes a 0.4 claim, and consumption is 1.0038. The last row is the proof in miniature: the claim held each year is the peak minus that year's debt, so it is never negative.

## Worked examples

**Example 1 (the deviation on The idea's contract).** Income is 1.1 with probability $\tfrac34$ and 0.7 with probability $\tfrac14$, $r=4\%$, and $P=0.1$ in good years and $P=-0.3$ in bad ones.

- *Debt.* The expected payment each year is $\tfrac34(0.1)-\tfrac14(0.3)=0$, so next year's expected debt is 0, and $D(\text{good})=0.1$, $D(\text{bad})=-0.3$. The peak $\bar D=0.1$ is reached at the start of every good year.
- *The claim.* $\bar D-D(h')$ is 0 after a good year and $0.1-(-0.3)=0.4$ after a bad one. It costs $\tfrac14\times0.4/1.04=0.0962$.
- *Consumption.* Good year: $1.1-0.0962=1.0038$. Bad year: $0.7+0.4-0.0962=1.0038$. The formula's $\tfrac{r}{1+r}\bar D=0.04\times0.1/1.04=0.0038$ checks. The bad-year claim of 0.4 covers the contract's 0.3, next year's premium of 0.0962 and the extra 0.0038.
- *Who gains and who pays.* The extra 0.0038 a year is worth $0.0038\times1.04/0.04=0.1=\bar D$ from the default year on: the country keeps the payment it skipped and loses nothing it values. The lenders lose that 0.1. The new bank breaks even.
- *Against 6.2.* At full insurance 6.2's [participation constraint](../reference.md#participation-constraint) reads $G\le\frac{\beta}{1-\beta}I$. With log utility, $G=\ln1.1=0.0953$ and $I=\ln1-E\ln y=0.0177$, so exclusion sustains this contract for $\beta\ge G/(G+I)=0.843$. Yet the deviation beats the contract in every state, at every $\beta$. 6.2's test measured the contract against autarky, worth a sure 0.9825 a year. The defaulter's real alternative is worth 1.0038.

**Example 2 (why you'd care: what a sanction buys).** Output is 1, $r=4\%$, and a default would cost 2% of output a year forever, through lost trade.

- *The limit.* $D_{\max}=0.02/0.04=0.5$, half a year's output. At $D=0.55$ the interest of 0.022 exceeds the 0.02 the sanction costs, and the country defaults.
- *Who gains.* The country, which can borrow 0.5 only because it can be hurt. Lenders break even at 4%, and on the equilibrium path the sanction is never used. Its cost shows up only if default happens anyway, say after a lasting fall in output, which shrinks a sanction proportional to output while the interest bill stays fixed. Then output falls by a further 2% a year and creditors get none of it: a pure deadweight loss.
- *Pledged revenue instead.* Let creditors' own agents collect a customs revenue of 0.02 a year. It also supports $0.02/0.04=0.5$, so before the fact the two devices are equivalent. After the fact they are not: if the government defaults on everything else, the pledged 0.02 still reaches the creditors. That is why creditors wanted pledged revenues and receivers, the question [history-of-debt 4.5](../../history-of-debt/lessons/04-05-egypt-the-ottomans-and-debt-administration.md) leaves to this course: enforcement that pays them beats enforcement that only destroys.
- *Is the (A1) channel real?* Rose (2005, *Journal of Development Economics*) finds that after a Paris Club renegotiation, trade between the debtor and its creditor countries shrinks by roughly 8% a year and stays down for about fifteen years, whether because creditors punish or because trade credit dries up.

## Watch out

- **You might think Bulow-Rogoff says sovereigns never repay, but actually** it says the threat of losing credit cannot be why they repay. Lending exists, so the work is done by something outside (A1)–(A3). Bulow and Rogoff concluded that lending needs direct sanctions, and that a good repayment record adds nothing to what a small country can borrow.
- **You might think a longer or stricter credit boycott would fix it, but actually** the defaulter never borrows again anyway, so a boycott of any length costs it nothing. What would bite is a ban on *saving* abroad, which is what 6.2's autarky assumed.
- **You might think the deviation depends on patience or risk aversion, as 6.2's threshold did, but actually** it raises consumption in every state and year, so the country takes it whatever its $\beta$ or utility. It must start at a peak, though: default in a bad year of Example 1 and the country forgoes the 0.3 payout and consumes $0.7-0.0962=0.60$ that year.

## One-liner

> A country that can still buy insurance for cash defaults when its debt peaks and keeps every benefit its lenders gave it, so sovereign lending needs a cost of default that cash cannot buy off: sanctions, seizable revenue, or creditors with power at home.

## Problems

**P1 (🟢) *(Formal.)*** A country's income is 1.15 in good years (probability $\tfrac23$) and 0.7 in bad years (probability $\tfrac13$), independently each year, and $r=4\%$. At date 0 lenders lent it 0.5 on terms that also insure it: from date 1 on, it pays 0.09 in every good year and receives 0.12 in every bad year. (a) Show that the lenders break even. (b) Find the debt $D$ at the start of a good year and of a bad year, before that year's payment. (c) The country defaults at the start of a good year and follows Bulow and Rogoff. What claim does it buy each year, at what price, and by how much does its consumption beat the contract's in each state? What is the gain worth in present value? Four decimals.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** Output is 1 every year, $r=4\%$, and the country also discounts at 4%. It owes perpetual debt $D$ at interest $rD$ a year. A default would cut output by 3% in the year of default and in each of the next 14 years, 15 years in all, after which output returns to 1. (The numbers are illustrative; the fifteen years echo Rose's estimate for trade.) (a) Find the largest $D$ the country repays, and compare it with what a permanent 3% sanction supports. (b) How many whole years must the sanction last to support debt of 0.6? (c) Lenders also promise never to lend to a defaulter again. Does your answer to (a) change? One sentence with the reason.

**P3 (🔴, optional) *(Exegetical.)*** For each proposal, name the Bulow-Rogoff assumption it breaks, or "none", and say whether it can make positive debt self-enforcing. Answer in a short table. (i) A law barring any defaulter from issuing bonds for 50 years. (ii) The country's own banks hold most of its bonds and would fail in a default, taking output down with them. (iii) The world's large banks agree never to take deposits from, or sell insurance to, a government in default. (iv) The debt is replaced by GDP-indexed bonds that pay less in bad years. Then, in two sentences, say why (iii) may not hold.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) The expected payment each year is $\tfrac23(0.09)-\tfrac13(0.12)=0.06-0.04=0.02$, which is 4% of 0.5. Starting at date 1, its present value is $0.02/0.04=0.5$: the lenders get back what they lent, and the insurance is fair.

(b) After this year's payment the country still owes the present value of later payments, which is 0.5 by (a). So $D(\text{good})=0.09+0.5=0.59$ and $D(\text{bad})=-0.12+0.5=0.38$. The peak is $\bar D=0.59$, at the start of every good year.

(c) The claim pays $\bar D-D(h')$: 0 after a good year and $0.59-0.38=0.21$ after a bad one. Its price is $\tfrac13\times0.21/1.04=0.0673$.

| | contract | deviation | gain |
|---|---|---|---|
| good year | $1.15-0.09=1.06$ | $1.15-0.0673=1.0827$ | 0.0227 |
| bad year | $0.7+0.12=0.82$ | $0.7+0.21-0.0673=0.8427$ | 0.0227 |

The gain is $\tfrac{r}{1+r}\bar D=0.04\times0.59/1.04=0.0227$ in every state, worth $0.0227\times1.04/0.04=0.59$ from the default year on: the 0.5 the country never repays plus this year's 0.09.

**Wrong turns:** taking the debt to be this year's 0.09 and forgetting the 0.5 still owed, which gives a gain of only 0.0035 a year; buying a claim of only 0.12, the contract's payout. That claim costs 0.0385 but leaves $0.7+0.12-0.0385=0.7815<0.82$ in a bad year, because the bad-year claim must also fund next year's premium.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) Defaulting at the start of a year saves the interest $rD$ that year and every year after, and costs 0.03 that year and in each of the next 14. Discounting both at 4%, the country repays iff

$$rD\sum_{j\ge0}1.04^{-j}\le0.03\sum_{j=0}^{14}1.04^{-j}\iff rD\le0.03\,\bigl(1-1.04^{-15}\bigr).$$

Since $1-1.04^{-15}=0.4447$, $D_{\max}=0.03\times0.4447/0.04=0.3336$, about a third of a year's output. A permanent 3% sanction supports $0.03/0.04=0.75$, so the fifteen-year sanction supports only 44% as much.

(b) We need $0.75\,(1-1.04^{-N})\ge0.6$, so $1.04^{-N}\le0.2$ and $N\ge\ln5/\ln1.04=41.04$. That is 42 years: 41 years supports 0.5998, just short.

**Must hit, strict (c):**

- No change.
- With certain, constant income and a discount rate equal to $r$, a fair loan is worth nothing to the country, so losing access costs it nothing. Only the sanction deters default.

**Wrong turns:** in (a), setting 15 years of sanction against 15 years of interest, which gives $D=0.75$ and forgets that the saved interest runs forever; in (b), answering 41.

**Model answer (c):** No: with certain, constant income and a 4% discount rate, a future loan at 4% gives the country exactly what it must repay in present value, so being shut out costs it nothing and only the sanction deters default.

---

**P3** *(Exegetical.)*

**Must hit, strict:**

| | breaks | self-enforcing debt? |
|---|---|---|
| (i) 50-year bond ban | none: it lengthens (A1)'s one consequence | no: at the peak the defaulter never needs to borrow again |
| (ii) domestic banks fail | (A1): default now destroys output at home | yes, up to the present value of that loss |
| (iii) bank boycott of defaulters | (A2): no prepaid claims after default | yes, if it holds: the defaulter is back in 6.2's autarky, where Example 1's contract survives for $\beta\ge0.843$ |
| (iv) GDP-indexed bonds | none: the proposition covers every contract $P(h)$ | no: indexed debt still has a peak, and the deviation starts there |

- Why (iii) may not hold: a bank that sells a defaulter a prepaid claim bears no risk, since the country pays first, and earns a fair return, so each bank gains by breaking the boycott. It holds only if banks that deal with a defaulter are themselves punished: the problem [6.2](06-02-reputation-and-eaton-gersovitz.md)'s Watch out raised for exclusion itself.

**Wrong turns:** classifying (i) under (A2), when a bond ban stops borrowing, not saving; calling (ii) a repair of (A3), when the government still holds the purse and default has simply become costly at home; answering "yes" to (iv) because indexed debt defaults less often.

**Model answer (why (iii) may not hold):** A bank that sells a defaulter a prepaid claim takes no risk, because the country has paid first, and it earns a fair return, so every bank gains by quietly breaking the boycott. The boycott holds only if banks that deal with defaulters are themselves punished, which is a second enforcement problem stacked on the first.

</details>

## Flashback

**From Lesson [6.1](06-01-the-transfer-problem-and-original-sin.md) (Ability to pay: the transfer problem and original sin):** *(Formal.)* An invented price-taking economy owes 120 percent of GDP, a third of it in dollars. Each 1 percent of real depreciation raises its trade balance by 0.32 percent of GDP, and a stop in lending forces the balance up by 1.6 percent of GDP. On top of that, every point the debt ratio rises makes lenders refinance $\theta$ points of GDP less, which the trade balance must also replace. The adjustment runs in rounds: the first depreciation covers the stop, the next covers the credit lenders pulled because the first raised the debt ratio, and so on, each round $g$ times the one before ($g$ is the loop's gain). The depreciation that finally closed the gap was 12.5 percent. (a) Find $g$ and $\theta$. (b) Find the debt ratio after the adjustment, and how many percentage points of its rise the lenders' pull-back caused. (c) Holding everything else fixed, by what fraction would the trade response 0.32 have to fall before no finite depreciation could close the gap?

<details>
<summary>Solution</summary>

Write $d=1.2$ for the debt ratio, $\phi=\tfrac13$ for the dollar share, $\kappa=0.32$ for the trade response and $T=0.016$ for the stop.

(a) The stop alone needs a first round of $T/\kappa=0.016/0.32=5\%$. The rounds (5, 3, 1.8, 1.08, ... percent) sum to $5\%/(1-g)$, and that equals 12.5 percent, so $1-g=0.4$ and $g=0.6$. Only the dollar debt grows with a depreciation, $\phi d=\tfrac13\times1.2=0.4$ of GDP, and $g=\theta\phi d/\kappa$, so $\theta=g\kappa/(\phi d)=0.6\times0.32/0.4=0.48$.

(b) With $\Delta q=0.125$ the depreciation, the debt ratio after is $d'=d\,(1+\phi\,\Delta q)=1.2\,(1+\tfrac13\times0.125)=1.25$, up 5 points of GDP. Without the pull-back the depreciation would have been the first round's 5 percent, and $d'=1.2\,(1+\tfrac13\times0.05)=1.22$, up 2 points. So the pull-back caused the other 3 percentage points. Check: the trade balance rises $0.32\times0.125=0.04$, 4.0 points of GDP in all, which is the stop's 1.6 plus $0.48\times0.05=0.024$, another 2.4 points, of credit pulled as the ratio rose.

(c) The gain reaches 1 when $\kappa$ falls to $\theta\phi d=0.48\times0.4=0.192$, which is $g\kappa$: a fall of $1-g=40$ percent. At or below that level the rounds never shrink, and no finite depreciation closes the gap.

**Wrong turns:** reading the final depreciation's excess over the first round, $(12.5-5)/5=1.5$, as the gain, which says the loop explodes although it converged (the excess is $g/(1-g)$, not $g$); using the whole debt $d$ where the dollar debt $\phi d$ belongs, which gives $\theta=0.16$ in (a) and a debt ratio of $1.2\,(1+0.125)=1.35$ in (b), when only the dollar third grows with the depreciation.

</details>

## Connections

- **Backward:** [6.2](06-02-reputation-and-eaton-gersovitz.md) compared the contract with autarky; this lesson shows that the defaulter's real alternative is prepaid insurance, which (A2) keeps open. [6.1](06-01-the-transfer-problem-and-original-sin.md) was about the ability to pay, and 6.2 and this lesson are about the willingness. In [1.3](01-03-pledgeable-income-collateral-and-monitors.md) collateral is forfeited on failure and the lender realizes a share $\delta$ of it. Pledged revenue is sovereign collateral with $\delta$ near 1, and a trade sanction is collateral with $\delta=0$: it costs the country as much and pays the lender nothing, which is Example 2's contrast. The minmax argument is [grad-game-theory 3.4](../../grad-game-theory/lessons/03-04-folk-theorems.md), and the bargaining behind constant recontracting is [grad-game-theory 3.5](../../grad-game-theory/lessons/03-05-bargaining.md).
- **Forward:** [6.4](06-04-the-arellano-model.md)'s model answers Bulow and Rogoff twice: Arellano (2008) lets a defaulter neither borrow nor save while excluded, which removes (A2) by assumption, and cuts its output, which removes (A1). [6.5](06-05-self-fulfilling-debt-crises.md) folds exclusion and sanctions into one default cost. Kletzer and Wright (2000, *AER*), the [cheat the cheater](../reference.md#cheat-the-cheater) of 6.2's Watch out, rescue lending with no outside enforcement by letting lenders, too, lack commitment, which strikes at (A2). Attachment and litigation return with holdouts in [7.2](07-02-holdouts-and-collective-action-clauses.md), and [8.4](08-04-odious-debt-as-a-rule.md) asks what a sanction on lending itself can do.
- **Sideways:** in the debt thread, [history-of-debt 4.6](../../history-of-debt/lessons/04-06-bondholders-gunboats-and-receiverships.md) sets gunboats, an (A1) repair, against reputation. [History-of-debt 3.2](../../history-of-debt/lessons/03-02-did-1688-make-britain-creditworthy.md) reads 1688 as veto players (A3) or creditors in power (A1), [4.5](../../history-of-debt/lessons/04-05-egypt-the-ottomans-and-debt-administration.md) is pledged revenue (A3), and [6.3](../../history-of-debt/lessons/06-03-holdouts-and-the-law-of-sovereign-restructuring.md) shows immunity protecting (A2). Hume's promise-keeper in [philosophy-of-debt 1.2](../../philosophy-of-debt/lessons/01-02-hume-promises-as-artificial-obligation.md) meets the same logic: the penalty of never being trusted again binds only someone who will need trust again. Whether a people owes what its government borrowed, and so whether it should bear a sanction for the government's default, is [philosophy-of-debt 6.3](../../philosophy-of-debt/lessons/06-03-whose-debt-is-it.md)'s question; this lesson says only who bears it. Credible commitment as a general political model belongs to [`institutions-and-development`](../../institutions-and-development/syllabus.md).
