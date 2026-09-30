# Economics of Debt · Lesson 8.4: Odious debt as a rule: loan sanctions

> ⏱ ~15 min · Module 8: Debt relief as mechanism · Builds on: [6.2 Willingness to pay: reputation and Eaton-Gersovitz](06-02-reputation-and-eaton-gersovitz.md), [6.3 Bulow-Rogoff](06-03-bulow-rogoff-and-sanctions.md), [8.1 Forgiveness, commitment and the fresh start](08-01-forgiveness-commitment-and-the-fresh-start.md) · Unlocks: [philosophy-of-debt 6.3 Whose debt is it?](../../philosophy-of-debt/lessons/06-03-whose-debt-is-it.md), which argues the doctrine this lesson models

## Why this matters

When Saddam Hussein's government fell in 2003, senior American officials suggested in public that its debts might be *odious*: contracted without the people's consent, not spent for their benefit, and lent by creditors who knew both, the three conditions Alexander Sack set out in 1927. The relief Iraq got came instead from a Paris Club negotiation in 2004, in which the doctrine played no part ([history-of-debt 5.5](../../history-of-debt/lessons/05-05-jubilee-2000-and-hipc.md)). Jayachandran and Kremer (2006, *AER*; first circulated as Kremer and Jayachandran, NBER working paper 8953, 2002) trace the retreat to a fear of the slippery slope: if a successor may call its predecessor's debts odious after the fact, any government can use the claim to escape legitimate debts, and lenders will charge every government for the risk or stop lending. Their answer is to move the ruling to before the loan. Declared in advance, odious debt stops being a form of relief and becomes a sanction that lenders enforce on themselves. In the model below, "odious" is simply a type, a regime that spends what it borrows on itself; whether any actual debt meets Sack's conditions is [philosophy-of-debt 6.3](../../philosophy-of-debt/lessons/06-03-whose-debt-is-it.md)'s question.

## The idea

Twenty governments each borrow 100 for a year from lenders whose money costs 4 percent. Everyone knows that one of the twenty loans will later be declared odious and voided, by a tribunal or by the borrower's successor, but no lender can tell which. To break even, lenders charge all twenty 9.47 percent. The nineteen who repay hand over 109.47 each, 5.47 above the cost of the money, and together those premiums come to 104, exactly what the voided loan would have repaid. Lenders lose nothing. The borrowers whose debts are honored pay for the one that is not.

Now move the ruling. Before any money is lent, an institution names the one regime whose future debts its successors may refuse. Lenders do not lend to it, and the other nineteen borrow at 4 percent. The same judgment, made earlier, no longer decides who pays for a loan. It decides whether the loan is made.

And no lender wants to break the ban. A loan to the named regime is money its successor can refuse to repay at no cost. Compare a trade embargo: a merchant who breaks it is paid when he delivers, and with his rivals holding back he can name his price. The loan ban needs no police; the embargo does.

## The formal version

**Setup (Jayachandran and Kremer).** A first-period government is *legitimate*, spending what it borrows for its population, or *odious*, spending it on itself; every later government is legitimate. Lenders are competitive and risk-neutral, and their funds cost $r_f$ per period. Repayment rests on [reputation](../reference.md#eaton-gersovitz), as in [6.2](06-02-reputation-and-eaton-gersovitz.md): a successor that refuses an inherited debt loses access to credit. To block the escape of saving abroad ([Bulow-Rogoff](../reference.md#bulow-rogoff), [6.3](06-03-bulow-rogoff-and-sanctions.md)), creditors may also seize a defaulter's assets abroad.

**Many equilibria.** Reputation supports many equilibria ([grad-game-theory 3.4](../../grad-game-theory/lessons/03-04-folk-theorems.md)); the paper notes one in which loans made in periods whose number ends in 1 are never repaid, and so never made. *In words:* which refusals get punished is a convention, a focal point in Schelling's sense ([grad-game-theory 2.4](../../grad-game-theory/lessons/02-04-computing-characterizing-equilibria.md)). In the **status quo** every refusal is punished, so successors repay whatever they inherit and odious regimes borrow on the same terms as legitimate ones. Another equilibrium punishes refusals of legitimate regimes' debts only, so no one lends to odious regimes. Sustained by private checks alone, the working paper shows, it needs an unending chain of costly investigations, so in practice it needs a public judge.

**The rule: [loan sanctions](../reference.md#loan-sanctions).** An institution designates a regime *before* lending. Creditor countries bar seizing assets to collect debts the regime contracts after designation, and markets treat a successor's refusal of those debts as no default (donors can back this by withholding aid from a successor that pays them).

**Result 1 (self-enforcing).** No loan to a designated regime is made. Its successor gains the repayment by refusing it and loses nothing, since nothing can be seized and no one treats the refusal as a default. So it refuses, whatever other lenders do. *In words:* a lender who breaks the sanction hands over money no one will be willing to repay, so complying is every lender's best reply and no one has to police it. This is Bulow-Rogoff switched back on, on purpose, for one regime's new debts.

**Result 2 ([ex ante versus ex post rulings](../reference.md#ex-ante-versus-ex-post-rulings)).** A ruling body values a dollar to the borrowing country's population at $\lambda_P$ and a dollar to its lenders at $\lambda_B$. Once a loan is made, voiding it moves the repayment from lenders to the population dollar for dollar. So a body with $\lambda_P>\lambda_B$ is tempted to void legitimate debts, one with $\lambda_B>\lambda_P$ to uphold odious ones, and every successor has a reason to ask. If lenders expect a share $\pi$ of loans, unidentifiable when made, to be voided, the [zero-profit loan rate](../reference.md#zero-profit-loan-rate) of [1.4](01-04-the-price-of-a-loan.md), with nothing recovered, becomes

$$1+r^{\text{post}}=\frac{1+r_f}{1-\pi}.$$

*In words:* the borrowers who repay cover the voided loans, and a legitimate project must now earn $r^{\text{post}}$ instead of $r_f$. Before any loan, by contrast, a competitive lender earns zero whether or not it lends, so a false designation cannot help lenders, and it costs the population the gain from borrowing. *In words:* ruling first turns a question of who pays into a question of whether a loan is made, and on that question the pull between lenders and population drops out. It is the [time inconsistency of relief](../reference.md#time-inconsistency-of-relief) from [8.1](08-01-forgiveness-commitment-and-the-fresh-start.md), solved by timing.

**Result 3 ([designation errors](../reference.md#designation-errors)).** Timing does not remove bias for or against a particular government. Let $\varepsilon$ be the probability that a legitimate regime is designated and $\mu$ the probability that an odious one is missed. A false designation cuts a legitimate government off from credit and costs its population the gain from borrowing. A miss lets an odious regime borrow at $r_f$ while its successor repays, which is the status quo. *In words:* only false designations leave a population worse off than today, so a rule meant to do no harm designates only on a supermajority, which turns false designations into misses as long as the judges' biases differ.

**Who declares, on what evidence.** A designation verifies a regime rather than a project's output, so [1.1](01-01-costly-state-verification.md)'s problem returns: checking is costly, and the checker must be believed. The working paper proposes proxies (coming to power in a free and fair election for consent; measures of looting and repression for benefit) and candidate judges: long-serving international jurists, the UN Security Council, or one large creditor country. One public check replaces the unending private ones, as a bank in [1.3](01-03-pledgeable-income-collateral-and-monitors.md) monitors once for many savers. It also settles Sack's third condition by construction: after a public designation, no lender can say it did not know.

## Picture

![Two timelines. Ruling after lending: twenty loans at 9.47 percent, the regime falls, a tribunal voids one loan in twenty, and nineteen repay 109.47 each. Designation before lending: one regime is named and refused, nineteen loans at 4 percent, the regime falls, nothing is left to rule on, and nineteen repay 104 each](assets/08-04-fig1.svg)

The dashed line marks the moment the loans are made, with The idea's numbers. A ruling to its right can only move money between lenders and borrowers, so lenders price it into every loan in advance. A designation to its left decides which loans exist and leaves nothing to rule on later.

## Worked examples

**Example 1 (the model on a clean case: one rate for each timing).** Lenders' funds cost $r_f=4\%$. Under the ex post rule a share $\pi=0.05$ of loans will be voided, unidentifiable when made; under the ex ante rule a legitimate regime is wrongly designated with probability $\varepsilon=0.02$.

- *Ex post.* $1+r^{\text{post}}=1.04/0.95=1.0947$, a rate of 9.47%. Per twenty loans of 100, the nineteen honored ones repay $1{,}900\times1.04/0.95=2{,}080=20\times104$, so lenders break even.
- *Ex ante.* An undesignated government's debt is never voided, so it borrows at 4%. With probability 0.02 a legitimate one is designated and borrows nothing.
- *What changes before anyone borrows.* Take a legitimate government whose own debt will be honored, with a project that costs 100 and returns 112 a year later. Ex post it still borrows, but its gain falls from $112-104=8$ to $112-109.47=2.53$; ex ante its expected gain is $0.98\times8=7.84$. A project returning 7% gains 3 at 4% but loses 2.47 at 9.47%, so the ex post rule leaves it unfunded, and with it every project returning between 4% and 9.47%.
- *Who gains and who pays.* Lenders break even under both rules. Ex post, the governments whose debts are honored pay the premium, and it finances whichever loans are voided: where those went to odious regimes, legitimate borrowers have paid for what the rulers took. Ex ante, the cost falls on the wrongly designated, $0.02\times8=0.16$ per 100 in expectation for the 12% project, against a premium of 5.47. That government prefers the ex ante rule unless $\varepsilon$ exceeds $5.47/8=0.68$.

**Example 2 (why you'd care: a sanction nobody polices).** A regime is under sanction. Eight foreign suppliers can make the equipment it wants at 60 a unit, and it will pay up to 100. Under a trade sanction all eight refuse to sell. Under a loan sanction a lender whose funds cost 4% could still offer it 100, but in Jayachandran and Kremer's model the ruler is gone before the loan falls due, and his successor refuses it at no cost.

| Payoff from breaking the sanction | if all others comply | if others break it too |
|---|---|---|
| a supplier, trade sanction | +40 a unit: sole seller at 100, paid on delivery | 0: undercutting drives the price to 60 |
| a lender, loan sanction | −100: nothing is repaid | −100: nothing is repaid |

A supplier's best reply to everyone else's compliance is to break ranks, and once two do, Bertrand competition ([game-theory-refresher 1.4](../../game-theory-refresher/lessons/01-04-cournot-bertrand-applications.md)) sells the regime its equipment at the pre-sanction price. The embargo holds only if every seller everywhere is policed. The lender's payoff is the same whatever others do, because it hangs on one future choice, the successor's, and the sanction has made refusing free. This is 6.3's contrast between cash on delivery and a promise, put to use: a loan cannot be paid for in advance. Complying is a dominant strategy.

*Who gains and who pays.* The ruler loses the loan he would have taken, and the population no longer inherits a debt for money it never saw. Lenders lose only loans that would have earned their cost of funds. Jayachandran and Kremer note that either sanction can cost the population something now (in their model, the wages that the embargoed imports or the borrowed money would have paid), but only the loan sanction also spares it a debt later.

## Watch out

- **You might think a loan sanction stops a secure ruler from borrowing, but actually** a ruler likely to survive, who wants credit again, can still borrow at a rate that prices his fall: with survival probability $s$ a lender breaks even at $(1+r_f)/s$. Jayachandran and Kremer note that the sanction still raises his rate, and his successor repays nothing if he falls. P2 works a case.
- **You might think the ex post rule costs lenders, but actually** they break even under every rule. The premium falls on the borrowers who repay, and the real loss is the projects it prices out.
- **You might think ruling in advance removes bias, but actually** it removes only the pull between lenders and populations. A judge who favors or dislikes a particular government is as dangerous before the loan as after, which is why the supermajority matters.

## One-liner

> Rule after the loans are made that a regime's debts need not be repaid, and the borrowers who repay cover the voided ones; rule before, and lenders refuse the regime of their own accord, since no one wants to lend what no one will repay.

## Problems

**P1 (🟢) *(Formal (a)–(b) · Exegetical (c).)*** Lenders' funds cost 3%. (a) Under an ex post rule, 8% of loans will be voided, and no lender can tell which in advance. Find the zero-profit rate, and check it on a pool of 25 loans of 100. (b) A legitimate government whose own debt will be honored has a project that costs 100 and returns 110 a year later. Under an ex ante rule it is wrongly designated with probability 0.05. Find its expected gain from the project under each rule. (c) Under each rule, who bears its costs, and do lenders bear any? Two sentences.

**P2 (🟡) *(Formal (a) · Exegetical (b).)*** A regime has been designated, and its ruler will spend any loan on himself. He survives to the due date with probability $s$. If he survives he repays what he owes, provided it is at most 125 per 100 borrowed (what continued access to credit is worth to him); if he falls, his successor refuses the debt at no cost. Lenders are competitive and their funds cost 3%. (a) For $s=0.85$ and for $s=0.7$, find the lowest rate at which a lender breaks even and say whether a loan is made. What is the smallest $s$ at which any loan is made? (b) A banker argues: "If every other bank refuses this regime, I have the market to myself, so I should lend." In three sentences, explain why the same argument pays a supplier facing a trade sanction but not a lender facing a loan sanction.

**P3 (🔴, optional) *(Formal (a)–(b) · Exegetical (c).)*** A designating panel has three judges who vote independently. Each votes to designate an odious regime with probability 0.9 and a legitimate one with probability 0.2. Rule M designates on at least two votes, rule U only on three. (a) Find the false-designation probability $\varepsilon$ and the miss probability $\mu$ under each rule. (b) One borrowing government in ten is odious. Relative to the status quo, a designated odious regime's population is spared a debt worth 100, and a wrongly designated legitimate government's population loses 40, the gain from its borrowing. Find the populations' expected gain per government under each rule, and the loss, in place of 40, at which the two rules tie. (c) In two sentences: why does a rule judged by how rarely it leaves a country worse off than the status quo favor U whatever the numbers, and what happens to that argument if all three judges share one bias?

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) · Exegetical (c).)*

(a) $1+r^{\text{post}}=1.03/0.92=1.1196$, a rate of 11.96%, or 8.96 points above the cost of funds. Check: of 25 loans, 2 are voided, and the 23 honored ones repay $2{,}300\times1.03/0.92=2{,}575=25\times103$. Their premiums over the cost of funds total $2{,}575-23\times103=206$, exactly the $2\times103$ the voided loans would have repaid.

(b) Ex post the project would earn $110-111.96=-1.96$, so the government does not borrow: its gain is 0. Ex ante it borrows at 3% when undesignated and gains $110-103=7$, so its expected gain is $0.95\times7=6.65$.

**Must hit, strict (c):**

- Ex post: the borrowers whose debts are honored pay the 8.96-point premium that covers the voided loans, and a government like this one loses its whole gain of 7 because the premium prices its project out; lenders break even.
- Ex ante: the legitimate governments wrongly designated bear it, 0.35 per 100 in expectation here ($0.05\times7$); lenders again break even.

**Wrong turns:** adding the voiding probability to the rate ($3\%+8\%=11\%$) instead of dividing by $1-\pi$; reporting $-1.96$ as the ex post gain, when a government facing a loss simply does not borrow; saying lenders bear the voided loans.

**Model answer (c):** Under the ex post rule the governments whose debts are honored pay an 8.96-point premium that covers the voided loans, and this government loses its whole gain of 7 because the premium prices its project out, while lenders break even. Under the ex ante rule the cost falls only on legitimate governments wrongly designated, 0.35 per 100 in expectation here, and lenders again break even.

---

**P2** *(Formal (a) · Exegetical (b).)*

(a) A lender is repaid only if the ruler survives, so it breaks even at $1+r=1.03/s$, provided the ruler will pay that much.

- $s=0.85$: $1.03/0.85=1.2118$, a rate of 21.18%. The ruler owes 121.18, less than 125, so he repays if he survives, and a loan is made at 21.18%.
- $s=0.7$: $1.03/0.7=1.4714$, a rate of 47.14%. He would owe 147.14, more than he will pay, so he would refuse even if he survived. At the most he will honor, 125, a lender expects $0.7\times125=87.5<103$, so no loan is made.
- Any loan needs $1.03/s\le1.25$, that is, $s\ge0.824$.

When the ruler falls, the lender takes the whole loss, and his successor's population owes nothing.

**Must hit, strict (b):**

- The supplier is paid on delivery, so when his rivals hold back, being the only seller raises his margin: breaking the embargo pays, which is why a trade sanction needs policing.
- The lender's return is a future payment by the regime's successor, which refuses at no cost however many banks lend; having the market to itself cannot create a repayment.
- So complying is each lender's best reply whatever the others do: the loan sanction is self-enforcing.

**Wrong turns:** in (a), stopping at the break-even rate for $s=0.7$ without checking that the ruler would pay it; in (b), saying the banker is deterred by fear of regulators, when the model needs no enforcer at all.

**Model answer (b):** A supplier is paid when he delivers, so if every rival refuses the regime he is its only seller and can charge more: the argument pays him, which is why a trade sanction must be policed. A lender's return is a repayment the regime's successor will make only if refusing costs it something, and under the sanction refusing costs nothing, however many or few banks lend. Market power cannot create a repayment, so each bank's best reply is to comply whatever the others do, and the sanction enforces itself.

---

**P3** *(Formal (a)–(b) · Exegetical (c).)*

(a) If each judge votes to designate with probability $p$, rule M designates with probability $3p^2(1-p)+p^3$ and rule U with $p^3$.

| Rule | $\varepsilon$ (legitimate, $p=0.2$) | $\mu$ (odious, $p=0.9$) |
|---|---|---|
| M: two of three | $3(0.04)(0.8)+0.008=0.104$ | $1-(0.243+0.729)=0.028$ |
| U: all three | $0.008$ | $1-0.729=0.271$ |

(b) The expected gain per government is $0.1\times(1-\mu)\times100-0.9\times\varepsilon\times40$.

- M: $9.72-3.744=5.976$.
- U: $7.29-0.288=7.002$, the larger.
- With a loss $G$ in place of 40, the rules tie where $0.1\times(0.271-0.028)\times100=0.9\times(0.104-0.008)\,G$, that is, $2.43=0.0864\,G$, so $G=28.1$. M does better for smaller losses, U for larger ones.

**Must hit, strict (c):**

- A miss leaves that country at the status quo, while a false designation leaves a legitimate government's population worse off than today; U cuts the expected false designations per 90 legitimate governments from 9.36 to 0.72, at the price of more misses.
- If the judges share one bias their votes coincide, so every rule designates exactly as a single judge would ($\varepsilon=0.2$, $\mu=0.1$): a supermajority protects only against biases that differ across judges.

**Wrong turns:** taking $\mu$ to be the probability of a unanimous vote to designate; weighting the two errors equally, when they fall on different populations with different stakes; claiming U always gives the larger expected gain (at a loss of 8, M gives 8.97 against U's 7.23).

**Model answer (c):** A missed odious regime leaves its country where the status quo would, but a false designation leaves a legitimate government's population worse off than today, so a rule judged by how rarely it does harm wants false designations as rare as possible, and U cuts them from 9.36 to 0.72 per 90 legitimate governments. If the three judges share one bias they vote alike, U designates exactly when M does, and the protection disappears.

</details>

## Flashback

**From Lesson [8.2](08-02-the-scheduled-release.md) (The scheduled release: the Jubilee as a mechanism):** *(Formal (a)–(b) · Exegetical (c).)* In an invented land system, each year a family that holds its land loses it with probability 0.06, and a landless family stays landless until the next release, when every field returns to the family that held it before. A release comes every $J$ years, and money costs 8 percent. Count the landless share at the start of each year of a cycle, so it is 0 just after a release. A field yielding $Y$ a year would sell for $Y/0.08$ if it could be sold for good, but a family in a bad year can sell only the harvests left before the release, and on the successive dates of a cycle there are $\tau=J,J-1,\dots,1$ of them. (a) Find the longest cycle $J$ for which the cycle-average landless share is at most 20 percent. (b) At that $J$, what share of its freehold value can a field raise in a bad year, averaged over the dates of the cycle? (c) In one sentence: who pays for the protection this cycle gives, and in what form?

<details>
<summary>Solution</summary>

A landless family never regains its land before the release, so the landless share $s$ years after a release is $1-0.94^{s}$. Averaging over the start-of-year dates $s=0,\dots,J-1$,

$$\bar\ell(J)=\frac1J\sum_{s=0}^{J-1}\bigl[1-0.94^{s}\bigr]=1-\frac{1-0.94^{J}}{0.06\,J}.$$

(a) $\bar\ell(8)=1-\dfrac{1-0.6096}{0.48}=18.7\%$ and $\bar\ell(9)=1-\dfrac{1-0.5730}{0.54}=20.9\%$. The average rises with $J$, so the longest cycle that meets the cap is $J=8$.

(b) A field with $\tau$ harvests left sells for $Y\,a_\tau(0.08)$, where $a_\tau(r)=\bigl(1-(1+r)^{-\tau}\bigr)/r$, which is a share $1-1.08^{-\tau}$ of its freehold value. Averaged over $\tau=1,\dots,8$ that is $1-a_8(0.08)/8=1-5.7466/8=28.2\%$. The other 72 percent is the reversion: it stays the family's, but it can be neither sold nor pledged.

**Must hit, strict (c):**

- Every family pays, in advance and in liquidity: in a bad year a field raises only about 28 percent of its freehold value on average, since it can sell only the harvests left before the release.
- The families that would have lost their land for good gain, since none stays landless for more than 8 years; buyers and lenders lose nothing, because they pay only for the harvests they get.

**Wrong turns:** reading the cap as a limit on the share just before the release, $1-0.94^{J}\le0.2$, which gives $J=3$ and a much shorter cycle than the average requires; counting harvests undiscounted, so that $\tau$ harvests are worth $\tau$ and the average share is $0.08\times4.5=36\%$, which overstates what the field can raise.

**Model answer (c):** Every family pays, in advance and in liquidity: in a bad year its field raises only about 28 percent of its freehold value, since it can sell only the harvests left before the release, and the rest, the reversion, is still its own but cannot be sold or pledged. The families that would have lost their land for good gain, none staying landless for more than 8 years, while buyers and lenders lose nothing, since they pay only for the harvests they get.

</details>

## Connections

- **Backward:** [6.2](06-02-reputation-and-eaton-gersovitz.md) made reputation the enforcer, and [6.3](06-03-bulow-rogoff-and-sanctions.md) showed how saving abroad defeats it; a loan sanction turns that defeat back on for one regime's new debts. [1.4](01-04-the-price-of-a-loan.md)'s zero-profit rate prices the ex post rule, and [1.1](01-01-costly-state-verification.md)'s costly verification is the designation's weak point. [8.1](08-01-forgiveness-commitment-and-the-fresh-start.md) found relief granted after the fact priced into credit before it. [8.2](08-02-the-scheduled-release.md) and [8.3](08-03-relief-written-into-the-contract.md) wrote relief into a rule and a contract in advance; this lesson writes in advance which debts need not be repaid at all.
- **Forward:** the course ends here. Why imposed sanctions look ineffective even when threats of them work is [`conflict-and-bargaining`](../../conflict-and-bargaining/syllabus.md) 5.4's question.
- **Sideways:** in the debt thread, [philosophy-of-debt 6.3](../../philosophy-of-debt/lessons/06-03-whose-debt-is-it.md) argues Sack's conditions and the grounds of collective liability and hands this course the incentive case for ruling in advance. [history-of-debt 5.5](../../history-of-debt/lessons/05-05-jubilee-2000-and-hipc.md) has Cuba in 1898, Iraq in 2004 and a doctrine never squarely applied by a tribunal. [theology-of-debt 6.2](../../theology-of-debt/lessons/06-02-international-debt-and-the-jubilee-call.md) finds the shared responsibility of creditors and debtors in Catholic teaching and notes that odious debt is not Church doctrine. A designation is a public signal that everyone follows because everyone else does, the job a traffic light does in [grad-game-theory 2.5](../../grad-game-theory/lessons/02-05-correlated-equilibrium.md).

## Closing the course

The course asked one question: a fixed promise meets an uncertain world, so who bears the loss, and does anticipating it change what gets borrowed, built and risked? Module 1 found that debt is the contract that needs checking only in default, and that hidden information decides who gets credit and at what price. Module 2 showed that financing matters only through what breaks Modigliani-Miller, and that old debt can make owners refuse good projects. Module 3 found that a bank's promise insures depositors and invites runs, and that collateral turns small shocks into large ones. Module 4 showed forced repayment cutting spending economy-wide, calm breeding fragile borrowing, and private leverage running above what a planner would choose. Module 5 found public debt backed by future surpluses, best used to smooth taxes, and escapable through growth or inflation only within limits. Module 6 found that a sovereign repays only while default costs it more, which caps its borrowing and lets fear alone cause a crisis. Module 7 showed that a write-down past the debt Laffer peak pays creditors too, that holdouts free-ride until a majority clause removes the option to wait, and that bankruptcy stops the creditors' race before dividing by priority. Module 8 found that relief written in advance is priced into credit before anyone needs it: the fresh start through the interest rate, the scheduled release through credit that dries up as the date nears, contingent debt through trust in whoever measures the bad times, and a designation by cutting off lending before the debt exists.

Whether any loss falls where it should, these models cannot say. That question belongs to [philosophy-of-debt](../../philosophy-of-debt/lessons/01-01-the-grammar-of-owing.md) and [theology-of-debt](../../theology-of-debt/lessons/01-01-lending-in-the-covenant.md), and the episodes that test the models to [history-of-debt](../../history-of-debt/lessons/01-01-credit-before-coins.md).
