# Economics of Debt · Lesson 1.1: Costly state verification: debt as the optimal contract

> ⏱ ~15 min · Module 1: Why debt? Contracts under hidden information · Builds on: [`grad-game-theory` 5.2 The revelation principle](../../grad-game-theory/lessons/05-02-revelation-principle-incentive-compatibility.md), [`grad-micro` 5.3 Screening](../../grad-micro/lessons/05-03-screening.md) · Unlocks: [1.2 Credit rationing: Stiglitz-Weiss](01-02-credit-rationing-stiglitz-weiss.md), [1.3 Pledgeable income, collateral and monitors](01-03-pledgeable-income-collateral-and-monitors.md), [3.3 The financial accelerator](03-03-the-financial-accelerator.md)

## Why this matters

A fixed promise meets an uncertain world: who bears the loss when it cannot be kept, and does anticipating that loss change what gets borrowed, built and risked beforehand? This course puts that question to contracts (Module 1), firms (2), banks and collateral (3), debt-deflation and 2008 (4), public debt (5), sovereign default (6), restructuring (7) and debt relief as mechanism design (8). It is the formal member of a four-course thread: [`history-of-debt`](../../history-of-debt/lessons/01-01-credit-before-coins.md) has the episodes, [`philosophy-of-debt`](../../philosophy-of-debt/lessons/01-01-the-grammar-of-owing.md) the questions of justice, [`theology-of-debt`](../../theology-of-debt/lessons/01-01-lending-in-the-covenant.md) the Catholic tradition. This course builds the models, says who gains and who pays, and never rules on what is fair.

Start with the oddest thing about debt: it ignores how the venture turned out. The lender gets the same sum after a boom as after a modest year, and whatever is left after a bust. A share that rises and falls with the outcome looks like the natural way to finance a risky project. Townsend's answer is that debt is the contract that has to look at the books least often.

## The idea

A trader needs 100 to buy a cargo and has no money of her own. Only she sees what the cargo sells for. Her investor can find out, but checking costs 30: a clerk, a trip to the port, a court if it comes to that.

Try a profit share first. If what she owes rises with what she reports, she reports low. So the investor must check every time.

Now try a fixed claim. When she can pay, she has no reason to lie, because the payment is the same whatever she says. The investor checks only when she says she cannot pay, and then he takes everything there is, so pleading poverty falsely would cost her all she has.

In numbers: the cargo fetches 60, 150 or 240, each with probability one third, so 150 on average.

- **A fixed claim of 135,** checked only at 60. The investor nets $\tfrac13(60-30) + \tfrac23 \times 135 = 10 + 90 = 100$. The trader keeps $\tfrac13 \times 15 + \tfrac13 \times 105 = 40$ on average.
- **A share,** checked in all three cases. To net 100 the investor needs $\tfrac{13}{15}$ of the proceeds, since $\tfrac{13}{15} \times 150 - 30 = 100$, and she keeps 20.

The fixed claim leaves her 20 more, exactly the checking it avoids: an expected 30 under the share against 10 under the fixed claim. The investor breaks even either way, so every unit spent on checking comes out of her pocket. Debt wins by looking as seldom as possible.

## The formal version

**Setup** (Townsend 1979, *JET*; Gale and Hellwig 1985, *RES*). An entrepreneur with no wealth needs $I$ for a project whose return $y \ge 0$ has distribution function $F$ and density $f$. Only she observes $y$. Lenders are risk-neutral and competitive, and the safe rate is zero. A lender can [verify](../reference.md#costly-state-verification) $y$ at cost $c > 0$, a deadweight loss, and whether he verifies depends only on her report: verification is deterministic. Under [limited liability](../reference.md#limited-liability) she can pay at most $y$.

A contract names the set $S$ of reports that trigger verification, a payment for each unverified report, and a payment of at most $y$ in each verified state. By the revelation principle ([`grad-game-theory` 5.2](../../grad-game-theory/lessons/05-02-revelation-principle-incentive-compatibility.md)), nothing is lost by considering only contracts under which she reports $y$ truthfully. Three steps pin the contract down.

1. **Flat where unverified.** Any type that can afford an unverified report can send it, and each type sends the cheapest one. So truth-telling needs one payment $D$ for every report outside $S$, and every $y < D$ must lie in $S$, since she cannot pay $D$. *In words:* a payment nobody checks cannot depend on what she says. This is the [truth-telling constraint](../reference.md#truth-telling-constraint).
2. **Verify as seldom as possible.** If the lender just breaks even, expected payments equal $I + c\Pr(\text{verify})$, so she keeps $\mathbb{E}[y] - I - c\Pr(\text{verify})$. *In words:* she bears every expected audit cost, so the best contract is the one that looks least while repaying the lender.
3. **Take everything when you look.** Each unit collected in a verified state lets $D$ fall, and a lower $D$ shrinks the set $\{y < D\}$ that must be verified. So verified states pay all of $y$, and no state with $y \ge D$ is verified.

**Result: the [standard debt contract](../reference.md#standard-debt-contract).** She pays $\min(y, D)$; the lender verifies if and only if $y < D$; and $D$ is the smallest face value at which the lender breaks even. *In words:* a fixed claim, with bankruptcy (verification) exactly when she cannot pay, at which point the lender takes everything.

**The lender's revenue.** At face value $D$ the lender expects

$$\begin{aligned} L(D) &= \int_0^D (y - c)\, f(y)\,dy + D\,\bigl[1 - F(D)\bigr], \\ L'(D) &= 1 - F(D) - c\,f(D). \end{aligned}$$

*In words:* in default he collects what is there less the audit cost, otherwise $D$. Raising $D$ collects one more unit from everyone who still repays, but tips the marginal borrower into default, where she must now be audited.

So revenue can fall as the face value rises: once $c\,f(D) > 1 - F(D)$, a higher $D$ loses more to new audits than it gains. When the hazard rate $f/(1-F)$ rises, as it does for the uniform and the normal, $L$ has a single peak at $D^*$, where $1 - F(D^*) = c\,f(D^*)$. The peak value $\bar L = L(D^*)$ is the [lender revenue ceiling](../reference.md#lender-revenue-ceiling). Since debt is the best contract, a project costing more than $\bar L$ gets no finance of any kind, even if $\mathbb{E}[y] > I$. *In words:* past $D^*$ a lender will not raise the rate, because a higher rate earns him less. Williamson (1987, *QJE*) builds equilibrium [credit rationing](../reference.md#credit-rationing) on costly monitoring of this kind: identical borrowers, some funded and some refused, with no adverse selection and no moral hazard.

The expected audit cost $c\,F(D)$ is why outside money costs more than her own, and it shrinks as her own stake grows: the external finance premium of [3.3](03-03-the-financial-accelerator.md).

## Picture

![Two panels. Left: the lender is paid the whole return up to the face value 110, in a shaded band marked checked, and a flat 110 above it. Right: the lender's expected revenue against the face value; with audit cost 20 it crosses 100 at D = 110 and peaks at 131.25 at D = 210, below a line at 140; with audit cost 60 it peaks just above 100](assets/01-01-fig1.svg)

Left: Example 1's contract. Below 110 the lender looks and takes everything; above it he never looks. Right: past $D^* = 210$, auditing the new defaulters costs more than the extra repayment brings in, so a project costing 140 lies above the whole hump.

## Worked examples

**Example 1 (the model on a clean case).** Let $y$ be uniform on $[70, 230]$, so $\mathbb{E}[y] = 150$ and $f = 1/160$, with $I = 100$ and $c = 20$. For $70 \le D \le 230$, revenue is the face value, minus the expected shortfall $\mathbb{E}[\max(D-y, 0)]$, minus the expected audit cost $c\,F(D)$:

$$L(D) = D - \frac{(D-70)^2}{320} - \frac{D-70}{8}.$$

- *Financing.* Set $L(D) = 100$ and write $u = D - 70$: then $u^2 - 280u + 9600 = 0$, so $u = 40$ (the other root, 240, lies past the support) and $D = 110$, a 10 percent loan.
- *Default and audits.* $F(110) = 40/160 = 1/4$, so the expected audit cost is $20 \times \tfrac14 = 5$. The expected shortfall is $40^2/320 = 5$, so the lender collects $110 - 5 = 105$ and nets $105 - 5 = 100$.
- *The entrepreneur* keeps $150 - 100 - 5 = 45$.
- *The ceiling.* $L'(D) = 1 - \frac{D-70}{160} - \frac{20}{160} = 0$ at $D^* = 210$, where $L = 210 - 61.25 - 17.5 = 131.25$. For any uniform on $[a, b]$ with width $w = b - a$ and $c \le w$, the same algebra gives $D^* = b - c$ and $\bar L = \mathbb{E}[y] - c + c^2/(2w)$.

A project costing 140 would return 10 more than it costs, yet no face value raises 140. Even $D = 230$, which takes everything, nets only $150 - 20 = 130$, since every borrower is then audited. The friction kills a project that full information would fund: the entrepreneur loses it, and lenders, who earn zero expected profit either way, lose nothing.

**Example 2 (the commenda and the loan).** [`history-of-debt` 2.1](../../history-of-debt/lessons/02-01-commerce-around-the-prohibition.md) shows Genoese and Venetian investors placing capital in a *commenda*, a partnership in which the investor takes a share of a voyage's profit and bears its losses. The sea loan, a fixed claim with a premium for risk, was read as condemned. [`theology-of-debt` 4.3](../../theology-of-debt/lessons/04-03-aquinas-on-usury-ii-ii-q78.md) gives Aquinas's line: a partner who keeps ownership and risk may share the profit, while a charge on a loan is usury. Both leave to this course the question of why an investor would pick one or the other.

A payment that moves with the proceeds needs them verified in every state, or the merchant reports low. Whatever the split, the investor pays $c$ for sure, so by step 2 the merchant keeps $\mathbb{E}[y] - I - c$. The loan verifies only in default, so the merchant is better off under it by

$$c\,\bigl[1 - F(D)\bigr].$$

*In words:* the share [pays to look](../reference.md#debt-versus-a-profit-share) in every state where the loan need not.

Run it on Example 1's voyage.

- $c = 20$: a proportional share must satisfy $150\alpha - 20 = 100$, so $\alpha = 0.8$, and the merchant keeps 30, against 45 under the loan. The gap is $20 \times \tfrac34 = 15$.
- $c = 60$: the loan still works, at $D = 150$ with half the voyages audited, leaving the merchant $150 - 100 - 30 = 20$; its ceiling is 101.25. No share can: even claiming all the proceeds, it nets at most $150 - 60 = 90$.
- $c \to 0$: the gap vanishes.

So the model says who pays for a ban on interest. A loan repaid at its face of 100, the only fixed claim the ban allows, nets the investor $L(100) \approx 93.44$, so the voyage must be financed as a partnership. The merchant bears the extra verification, 15 per voyage at $c = 20$; at $c = 60$ the voyage goes unfinanced; investors earn the competitive return either way. (The history lesson treats the ban's push toward the commenda as plausible, not proven; whether the ban was right is the siblings' question.) And whatever cheapens verification (bookkeeping, audited accounts, disclosure rules for listed shares) erodes debt's edge, leaving things this risk-neutral model omits, such as a merchant's wish to share risk, free to tip the choice toward equity.

## Watch out

- **You might think the theorem makes debt optimal, full stop.** It does so only for deterministic verification. Mookherjee and Png (1989, *QJE*) let audits be random: optimal contracts then audit at random and reward a borrower whose report checks out, and debt is never optimal in their model, which has a risk-averse borrower.
- **You might think the ceiling is the borrower refusing to pay more.** She would sign any face value that got her the loan; it is the lender who stops, because past $D^*$ a bigger promise earns him less.
- **You might think "verification" is an auditor's fee.** In practice it is bankruptcy: the court, the trustee, the lawyers and the value lost while they work. [2.2](02-02-taxes-bankruptcy-costs-trade-off-theory.md) prices those costs and [7.3](07-03-designing-bankruptcy.md) designs around them.
- **You might think the model forbids contingent debt.** It forbids payments that vary with what only the borrower sees. A payment tied to a public event may vary freely: the sea loan was owed only if the ship came home, and a GDP-indexed bond keys on a published statistic, whose own verification problem returns in [8.3](08-03-relief-written-into-the-contract.md).

## One-liner

> Debt is the contract that looks least: a fixed claim needs checking only when the borrower cannot pay, and because every look costs, a lender's revenue has a ceiling no interest rate can break.

## Problems

**P1 (🟢) *(Formal.)*** A merchant needs 100 for a venture that returns 200 with probability 0.7 and 50 with probability 0.3. Only he sees the return; verifying it costs 20. Lenders are risk-neutral and competitive, and the safe rate is zero. (a) Find the face value of the standard debt contract that finances the venture, its interest rate, the probability of verification and the expected verification cost. (b) An investor instead takes a fixed share of the return, as a commenda partner would. What share breaks even, and how much more does the merchant expect to keep under debt? Check your gap against the lesson's formula.

**P2 (🟡) *(Formal (a) · Exegetical (b).)*** An invented lender advances 80 to a borrower whose venture returns 40, 120 or 200 with equal probability. Only the borrower sees the return, and checking it costs 10. The lender's repayment sheet: a report of 40 is checked and the lender takes everything; a report of 120 pays 90 and a report of 200 pays 120, both unchecked. (a) Which report does each type of borrower send, and what does the lender expect to net? What single unchecked payment would restore the 80 the sheet was designed to net? (b) In two sentences: why must every unchecked report carry the same payment, and why must the lender check every return below that payment?

**P3 (🔴, optional) *(Formal (a, b) · Exegetical (c).)*** A project costs 50 and returns $y$ uniform on $[30, 120]$; everything else is as in the lesson. (a) Find the largest verification cost $c$ at which the project can be financed, and the face value at that cost. (b) An accounting reform cuts $c$ from 40 to 15. Find the new face value and the entrepreneur's expected payoff. (c) Who gains from the reform, and why is the lender's expected profit unchanged? Two sentences.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) Any face value of 50 or less raises at most 50, so the loan must risk default. For $D$ between 50 and 200 the lender collects $D$ with probability 0.7, and in default verifies and takes the 50 at a cost of 20:

$$L(D) = 0.3\,(50 - 20) + 0.7\,D = 9 + 0.7\,D = 100 \quad\Rightarrow\quad D = 130.$$

The interest rate is 30 percent. Verification happens exactly in default, with probability 0.3, so the expected verification cost is $0.3 \times 20 = 6$.

(b) Here $\mathbb{E}[y] = 0.3 \times 50 + 0.7 \times 200 = 155$. A share must be verified in both states, so $155\,\alpha - 20 = 100$ and $\alpha = 120/155 = 24/31 \approx 77.4\%$. The merchant keeps $155 - 120 = 35$ under the share and $0.7 \times (200 - 130) = 49$ under debt, which is $155 - 100 - 6$. The gap is $49 - 35 = 14$, and $c\,[1 - F(D)] = 20 \times 0.7 = 14$.

**Wrong turns:** ignoring what the lender recovers in the bad state ($0.7D = 100$ gives $D \approx 142.86$); recovering the 50 but forgetting the audit cost ($15 + 0.7D = 100$ gives $D \approx 121.43$); charging the share contract for audits only in the bad state.

---

**P2** *(Formal (a) · Exegetical (b).)*

(a) The 40 type cannot pay 90 or 120, so it reports 40, is checked and pays 40. The 120 type pays 90 by reporting 120, against 120 by reporting 200 or by reporting 40 and being checked, so it tells the truth. The 200 type reports 120 and pays 90 rather than 120. The lender nets

$$\tfrac13\,(40 - 10) + \tfrac23 \times 90 = 10 + 60 = 70,$$

not the designed $\tfrac13\,(30 + 90 + 120) = 80$. A flat unchecked payment $D$ restores 80 when $\tfrac13\,(30 + 2D) = 80$, so $D = 105$. The 120 type can pay it, and neither higher type would rather be checked and lose everything.

**Must hit, strict (b):**

- Any borrower can send any unchecked report it can afford, so every type picks the cheapest; unequal unchecked payments collapse to the lowest one.
- A borrower who cannot pay the flat amount must be checked, because an unchecked "cannot pay" report would be one more, cheaper, unchecked report that every type would send.

**Wrong turns:** computing the lender's net from the sheet as if reports were truthful; checking reports of 120 as well, which spends 10 in a state where nothing needs checking.

**Model answer (b):** Nothing stops a borrower from sending an unchecked report it can afford, so if two unchecked reports carried different payments, everyone able to pay the lower one would send it and the higher one would never be paid. A borrower below the flat payment cannot pay it, and an unchecked report for that case would become a cheaper option for everyone, so it must be checked: this is step 1 of the lesson.

---

**P3** *(Formal (a, b) · Exegetical (c).)*

(a) Here $w = 90$ and $\mathbb{E}[y] = 75$, so Example 1's formula gives $\bar L = 75 - c + c^2/180$ for $c \le 90$. Setting $\bar L = 50$ gives $c^2 - 180c + 4500 = 0$, so $c = 30$ or $c = 150$. Only $c = 30$ is admissible. (For $c > 90$ the formula no longer applies: $L$ falls from $D = 30$ onward, so the most a lender can collect is 30.) At $c = 30$ the only workable face value is $D^* = b - c = 90$. The default probability is $2/3$, the expected audit cost is 20, and the entrepreneur keeps $75 - 50 - 20 = 5$.

(b) At $c = 40$, $\bar L = 75 - 40 + 1600/180 \approx 43.89 < 50$, so there is no loan. At $c = 15$, write $u = D - 30$:

$$30 + u - \frac{u^2}{180} - \frac{15u}{90} = 50 \quad\Rightarrow\quad u^2 - 150u + 3600 = 0,$$

so $u = 30$ (the other root, 120, lies past the support) and $D = 60$, a 20 percent loan. The default probability is $1/3$, the expected audit cost is 5, and the entrepreneur keeps $75 - 50 - 5 = 20$.

**Must hit, strict (c):**

- The entrepreneur gains all of it: from 0 with no project to 20, the project's NPV of 25 less the expected audit cost of 5.
- Competitive lenders earn zero expected profit before and after; a cheaper audit reaches the borrower as a lower face value.

**Wrong turns:** keeping the root $c = 150$ in (a); taking the root $u = 120$ in (b), which puts $D$ above the highest possible return, where the quadratic no longer describes $L$; crediting lenders with part of the gain.

**Model answer (c):** The entrepreneur gains everything: a project that could not be financed now pays her 20, its NPV of 25 less 5 of expected audits. Lenders compete, so they earn zero expected profit before and after, and the cheaper audit reaches her as a lower face value.

</details>

## Connections

- **Backward:** the truth-telling constraint is incentive compatibility ([`grad-game-theory` 5.2](../../grad-game-theory/lessons/05-02-revelation-principle-incentive-compatibility.md)) applied to a report of $y$. Here a costly audit enforces it, where [`grad-micro` 5.3](../../grad-micro/lessons/05-03-screening.md) enforced it with a menu.
- **Forward:** [1.2](01-02-credit-rationing-stiglitz-weiss.md) rations credit through adverse selection and incentives rather than audit costs, and [1.3](01-03-pledgeable-income-collateral-and-monitors.md) has a bank pay the monitoring cost once for many lenders. The expected audit cost becomes the external finance premium in [3.3](03-03-the-financial-accelerator.md). Bankruptcy costs return in [2.2](02-02-taxes-bankruptcy-costs-trade-off-theory.md) and [7.3](07-03-designing-bankruptcy.md), and verification returns as the reason contingent debt is rare ([8.3](08-03-relief-written-into-the-contract.md)) and as the question of who declares a debt odious ([8.4](08-04-odious-debt-as-a-rule.md)).
- **Sideways (the debt thread):** [`history-of-debt` 2.1](../../history-of-debt/lessons/02-01-commerce-around-the-prohibition.md) has the commenda, the sea loan and the prohibition as institutions. [`theology-of-debt` 4.3](../../theology-of-debt/lessons/04-03-aquinas-on-usury-ii-ii-q78.md) and [4.5](../../theology-of-debt/lessons/04-05-contracts-that-are-not-loans.md) sort loan from partnership by who keeps ownership and risk; Example 2 reads the same line as a difference in what must be verified. [`philosophy-of-debt` 1.1](../../philosophy-of-debt/lessons/01-01-the-grammar-of-owing.md) makes a quantity the first mark of a debt, and this lesson says why the quantity is fixed; its [2.1](../../philosophy-of-debt/lessons/02-01-aristotle-money-is-barren.md) asks whether a lender's fixed return on a loan for ewes is really a share of the lambs, and Example 2 prices the choice between the two.
