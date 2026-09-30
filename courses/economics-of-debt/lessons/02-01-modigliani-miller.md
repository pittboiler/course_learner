# Economics of Debt · Lesson 2.1: Modigliani-Miller

> ⏱ ~15 min · Module 2: Capital structure and debt overhang · Builds on: [1.1 Costly state verification](01-01-costly-state-verification.md), [1.3 Pledgeable income, collateral and monitors](01-03-pledgeable-income-collateral-and-monitors.md), [`mathematical-finance` 1.1 Arbitrage and the law of one price](../../mathematical-finance/lessons/01-01-arbitrage-law-of-one-price.md) · Unlocks: [2.2 Taxes and bankruptcy costs: the trade-off theory](02-02-taxes-bankruptcy-costs-trade-off-theory.md), [2.3 Agency costs of debt and equity](02-03-agency-costs-of-debt-and-equity.md), [2.4 Debt overhang](02-04-debt-overhang.md)

## Why this matters

Module 1 explained why debt exists: outcomes are costly to verify, effort is hidden, and lenders must be paid for risk. Now hold a firm's business fixed and ask whether the mix of debt and equity that funds it changes what the firm is worth. Modigliani and Miller (1958, *AER*) answered no, under conditions they spelled out, and proved it by arbitrage. The theorem matters less as a description than as a map. Every real reason leverage matters, from taxes and bankruptcy costs to fights between shareholders and creditors, is one of its assumptions failing, and the rest of Module 2 takes them one at a time. It also answers this course's question in its simplest case: leverage does not change how much a firm loses in a bad year, only who bears the loss.

## The idea

Two firms own identical businesses that will earn the same uncertain amount next year. Interest rates are zero. Firm U has no debt, and its shares are worth 100 in total. Firm L owes 40, and its business never earns less than 40, so the debt is safe and worth 40. L's shareholders get whatever the business earns, minus 40.

Suppose L's shares trade for 70 in total, so L is worth 110. You hold a tenth of L's shares. Sell them for 7, borrow 4 on your own account, and buy a tenth of U for 10. You now receive a tenth of the earnings and owe 4, which is a tenth of (earnings minus 40): exactly what L's shares paid you, in every outcome. You also have 1 in your pocket. Every holder of L's shares can make this trade, and their selling pushes L's shares down until the gap closes at 60, where L is worth 100, like U.

If L's shares were cheap instead, say 50, run it in reverse. A tenth of L's shares (5) plus a tenth of its debt (4) cost 9 and pay a tenth of the earnings, the same as a tenth of U, which costs 10.

This is **homemade leverage**. Investors can add leverage by borrowing and remove it by holding some of the debt, on their own accounts, so a firm cannot create value by doing either for them. The pie is the same size however it is sliced.

Leverage still changes each slice. L's shareholders stand behind a fixed claim of 40, so every swing in earnings lands in full on their smaller slice, and they demand a higher expected return. That higher return exactly offsets the cheap debt: the firm's average cost of funds does not move.

## The formal version

**Setup.** A firm's operating cash flow next period is a random $X \ge 0$, fixed by its business whatever the financing. Firm U is all equity, worth $V_U$. Firm L has the same $X$ and owes debt with face value $F$. [Limited liability](../reference.md#limited-liability) splits $X$ into two claims:

$$\text{debt pays } \min(X,\,F), \qquad \text{equity pays } \max(X-F,\,0).$$

Let $D$ and $E$ be their market values, and $V_L = D + E$. Markets are frictionless; the checklist below says what that must mean.

**Proposition I.** $V_L = V_U$.

*Proof.* A fraction $\alpha$ of L's debt plus the same fraction of its equity pays $\alpha\min(X,F) + \alpha\max(X-F,0) = \alpha X$ in every state, which is what a fraction $\alpha$ of U pays. By the law of one price ([`mathematical-finance` 1.1](../../mathematical-finance/lessons/01-01-arbitrage-law-of-one-price.md)), equal payoffs have equal prices, so $\alpha(D+E) = \alpha V_U$. In reverse, a fraction $\alpha$ of U bought partly with a personal loan of $\alpha D$, repaid as $\alpha\min(X,F)$, pays $\alpha X - \alpha\min(X,F) = \alpha\max(X-F,0)$: a fraction of L's equity. The loan must be on L's terms, including its limited liability. That is [homemade leverage](../reference.md#homemade-leverage).

*In words:* a firm is worth what its operating cash flow is worth, however that cash flow is divided among claimants ([Modigliani-Miller](../reference.md#modigliani-miller)).

Nothing here needed safe debt, since $\min + \max = X$ state by state. Default adds one condition: investors must be able to buy or build the payoffs a firm's risky debt creates. Stiglitz (1969, *AER*) showed that the theorem survives default when markets are complete, so that a claim on every state can be traded.

**Proposition II.** Write $r_A$ for the expected return on the firm's assets (on U's shares), $r_D$ for the expected return on L's debt and $r_E$ for that on L's equity. Payoffs add up and, by Proposition I, so do values: $V(1+r_A) = D(1+r_D) + E(1+r_E)$. Hence

$$r_E = r_A + (r_A - r_D)\,\frac{D}{E}.$$

*In words:* the [cost of equity](../reference.md#cost-of-equity) rises with the debt-to-equity ratio, by the spread between the assets' return and the debt's.

Here $r_D$ is what creditors expect to earn after default losses, not the promised yield $F/D - 1$. The two coincide only while the debt is safe.

**The WACC.** The weighted average cost of capital is

$$\text{WACC} = \frac{E}{V}\,r_E + \frac{D}{V}\,r_D = r_A \quad\text{at every leverage.}$$

*In words:* the [WACC](../reference.md#wacc) is the return the business must earn, and cheap debt makes equity dear by exactly enough to leave it unchanged. CAPM betas ([`mathematical-finance` 3.2](../../mathematical-finance/lessons/03-02-capm.md)) obey the same algebra, $\beta_E = \beta_A + (\beta_A - \beta_D)D/E$: leverage piles the assets' risk onto the equity.

**The checklist.** The proof leaned on every one of these [MM assumptions](../reference.md#mm-assumptions), and each later lesson removes one:

| MM assumes | It fails when | Lesson |
|---|---|---|
| No taxes that treat claims differently | interest is deductible and dividends are not | [2.2](02-02-taxes-bankruptcy-costs-trade-off-theory.md) |
| Financial distress costs nothing | default brings legal fees, lost customers, fire sales | [2.2](02-02-taxes-bankruptcy-costs-trade-off-theory.md) |
| Everyone knows what the firm is worth | issuing shares signals that they are overpriced | [2.2](02-02-taxes-bankruptcy-costs-trade-off-theory.md) |
| Investment does not depend on financing | shareholders gamble, or refuse good projects | [2.3](02-03-agency-costs-of-debt-and-equity.md), [2.4](02-04-debt-overhang.md) |
| No outsider's stake depends on leverage | creditors expect a government rescue | [3.2](03-02-stopping-runs.md) |
| Investors borrow and lend on the firm's terms | personal loans cost more or carry full liability | this lesson |

## Picture

![Expected returns in percent against the debt-to-equity ratio from 0 to 3. The WACC is flat at 12. The cost of equity starts at 12 and would rise along a dashed straight line to 36 if the debt stayed safe, but it bends below that line to about 29 as the debt becomes risky, while the expected return on debt rises from 4 to about 6.3. Example 1 sits at a ratio of two-thirds with a cost of equity of 17.33](assets/02-01-fig1.svg)

The WACC never moves. While the debt is nearly safe, up to a ratio of about 0.9, the cost of equity climbs the straight line that MM II draws with $r_D$ at the safe rate, $r_E = 12 + 8\,D/E$ in percent. Beyond that, creditors carry part of the assets' risk, their expected return rises, and the cost of equity bends below the line. At $D/E = 3$ the bonds promise 14.0 percent but are expected to earn 6.3, because they default in about a third of outcomes. (Risky-debt curves: a one-year Merton model with Example 1's 12 and 4 percent and 40 percent asset volatility, as in [2.3](02-03-agency-costs-of-debt-and-equity.md).)

## Worked examples

**Example 1 (clean): a leveraged recapitalization.** A firm expects operating income of 60 a year forever, and its assets' expected return is $r_A = 12\%$, so it is worth $60/0.12 = 500$: 5 a share on 100 shares. It borrows 200 forever at 4 percent, safe because its income never falls below the interest of 8, and buys back 40 shares at 5.

- Equity is now $500 - 200 = 300$ over 60 shares: still 5 a share. The recap created nothing.
- Expected equity income is $60 - 8 = 52$, so $r_E = 52/300 = 17.33\%$. MM II agrees: $12 + (12-4)\times\tfrac{2}{3} = 17.33$.
- WACC $= 0.6\times 17.33 + 0.4\times 4 = 10.4 + 1.6 = 12\%$.

The tempting mistake is to leave $r_E$ at 12 percent. The WACC would then be $0.6\times 12 + 0.4\times 4 = 8.8\%$, and the firm worth $60/0.088 = 681.82$: a gain of 181.82 from paperwork. The cost of equity rose because the risk did. A 10 percent fall in the business's value, 50, now lands on equity of 300, a loss of 16.7 percent: leverage multiplies every move by $V/E = 5/3$.

**Example 2 (why you'd care): is equity expensive for banks?** A bank holds 100 of assets, funded by 95 of debt at 3 percent and 5 of equity whose holders expect 15 percent. Treat the debt as safe. A regulator proposes 20 percent equity. The bank objects: replacing 15 of cheap debt with dear equity raises its funding cost from $0.05\times 15 + 0.95\times 3 = 3.6\%$ to $0.2\times 15 + 0.8\times 3 = 5.4\%$, so loans must cost 1.8 points more.

MM's reply is that the 15 percent is itself a product of leverage. At $D/E = 19$ a 1 percent fall in asset values erases a fifth of the equity; at $D/E = 4$, a twentieth. The assets earn $r_A = 3.6\%$, so at 20 percent equity MM II gives $r_E = 3.6 + 0.6\times 4 = 6.0\%$, and the WACC stays at $0.2\times 6 + 0.8\times 3 = 3.6\%$. The bank's 1.8 points came from holding $r_E$ fixed.

What does make equity costly to the bank's shareholders is two failures on the checklist. With a 20 percent corporate tax, the bank loses the [interest tax shield](../reference.md#interest-tax-shield) on 15 of debt: $0.2\times 0.03\times 15 = 0.09$ a year per 100 of assets, 0.09 points rather than 1.8. And the debt is safe at 5 percent equity only if the assets can never lose more than about 2 percent in a year. Creditors who accept a safe rate from a bank whose assets can lose more are pricing in a rescue, an implicit guarantee worth more the thinner the equity. Both costs are real to the bank and are transfers from taxpayers, which is the core of Admati and Hellwig's argument in *The Bankers' New Clothes* (2013). Thin equity wins the bank's shareholders these subsidies, and taxpayers, who stand behind the debt, pay for them ([3.2](03-02-stopping-runs.md)). A different argument for thin capital survives MM: deposits are a product, liquidity that depositors pay for by accepting a lower return ([3.1](03-01-diamond-dybvig.md)).

## Watch out

- **You might think debt is the cheap source of funds, but actually** each dollar of it makes the remaining equity riskier and dearer, and the WACC does not fall. Example 1's 8.8 percent is the error.
- **You might think $r_D$ is the bonds' promised yield, but actually** it is their expected return, lower by the expected default loss, and MM II gives a wrong $r_E$ if you confuse them (P2).
- **You might think MM I means no one cares about leverage, but actually** it fixes only the total. Once risky debt is outstanding, a change in leverage can move value between the classes of claims while $V$ stays put (P3), which is why lenders write covenants against new debt ([2.3](02-03-agency-costs-of-debt-and-equity.md)).
- **You might think MM claims capital structure is irrelevant in practice, but actually** it lists exactly what would make it relevant. Read it as a checklist, not a description.

## One-liner

> A firm is worth what its business earns, however that is split between creditors and shareholders; cheap debt makes equity dear by exactly enough, so every real reason leverage matters is a broken assumption.

## Problems

**P1 (🟢) *(Formal.)*** Two invented firms have identical operations: next year each earns 72 or 144. The safe rate is 4 percent and there are no taxes. Firm U has no debt and is worth 100. Firm L owes 52, due next year. (a) Value L's debt and, by MM I, its equity. (b) L's equity trades at 45 in total. Someone holds a tenth of U's shares. Construct a trade that leaves her payoff next year unchanged in both outcomes and puts cash in her pocket today. How much? (c) L's equity trades at 55 instead. Construct the homemade-leverage trade for someone holding a tenth of L's shares, and find the cash it frees today.

**P2 (🟡) *(Formal (a) · Exegetical (b).)*** (a) A firm's assets have an expected return of 9 percent, and its debt-to-equity ratio is 3 in market values. Its bonds promise a yield of 8 percent, but after expected default losses their holders expect to earn 6 percent. The safe rate is 4 percent. Find the firm's cost of equity. One analyst puts the promised yield into MM II, and another treats the debt as safe. What does each get, and which way does each err? One sentence each. (b) Each feature below breaks one assumption on the lesson's checklist. Name the assumption and the lesson that takes it up. (i) Interest is deducted from taxable profit; dividends are not. (ii) Customers stop buying from a firm near default because they doubt it will honor its warranties. (iii) Shareholders of a heavily indebted firm pass up a good project because most of its payoff would go to the creditors. (iv) A large bank's creditors expect the government to rescue them if it fails.

**P3 (🔴, optional) *(Formal (a)–(b) · Exegetical (c).)*** An invented firm's cash flow next year is 40 or 160 with equal probability. Everyone is risk-neutral and rates are zero. The firm already owes debt with face value 50. (a) Value the old debt and the equity. (b) The firm issues new debt with face value 30 that ranks equally with the old (in default, the cash is shared in proportion to face value) and pays the proceeds to its shareholders as a dividend. Value each claim, and say who gains, who pays and how much. Then redo it with the new debt junior to the old. (c) Total value is 100 throughout. In two sentences, say what MM I does and does not promise here, and name the contract term that protects the old creditors.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) L's worst outcome, 72, exceeds 52, so the debt is safe: $D = 52/1.04 = 50$. By MM I, $E = 100 - 50 = 50$.

(b) At 45, L is worth $50 + 45 = 95 < 100$, so L is cheap. Sell the tenth of U for 10, and buy a tenth of L's equity (4.5) and a tenth of L's debt (5). Cash today: $10 - 4.5 - 5 = 0.5$. Next year she receives $0.1\min(X,52) + 0.1\max(X-52,0) = 0.1X$, which is 7.2 or 14.4, exactly what the tenth of U paid.

(c) At 55, L is worth 105, so L is dear. Sell the tenth of L's shares for 5.5, borrow 5 at 4 percent, and buy a tenth of U for 10. Cash today: $5.5 + 5 - 10 = 0.5$. Next year she receives $0.1X - 5.2$, which is 2.0 or 9.2, the same as a tenth of L's equity, $0.1(X-52)$.

**Wrong turns:** valuing L's debt at its face of 52 rather than $52/1.04$; in (c), borrowing 5.2 (what must be repaid) instead of 5 (what it is worth today); in (b), buying only L's shares, which reproduces L's equity rather than U.

---

**P2** *(Formal (a) · Exegetical (b).)*

(a) $r_E = 9 + (9-6)\times 3 = 18\%$. Check: WACC $= 0.25\times 18 + 0.75\times 6 = 4.5 + 4.5 = 9\%$.

- With the promised yield: $9 + (9-8)\times 3 = 12\%$, too low. It credits creditors with the 8 percent they are promised rather than the 6 they expect, and so leaves the equity too little of the assets' 9.
- With the safe rate: $9 + (9-4)\times 3 = 24\%$, too high. It loads all of the assets' risk onto the equity, when at this leverage creditors carry part of it and expect 2 points over the safe rate for doing so.

**Must hit, strict (b):**

- (i) No taxes that treat claims differently: [2.2](02-02-taxes-bankruptcy-costs-trade-off-theory.md).
- (ii) Financial distress costs nothing (this is an indirect distress cost): [2.2](02-02-taxes-bankruptcy-costs-trade-off-theory.md).
- (iii) Investment does not depend on financing (debt overhang): [2.4](02-04-debt-overhang.md).
- (iv) No outsider's stake depends on leverage (an implicit guarantee): [3.2](03-02-stopping-runs.md).

**Wrong turns:** trying to catch the analysts' errors with a WACC check. MM II returns a WACC of 9 percent for whatever $r_D$ it is fed (the yield analyst's own is $0.25\times 12 + 0.75\times 8 = 9$), so the error has to be caught in $r_D$ itself. In (b), filing (ii) under agency costs: the lost sales are a cost of distress, not a conflict between claimants.

**Model answer (b):** (i) breaks "no taxes that treat claims differently", taken up in 2.2. (ii) breaks "distress costs nothing", also 2.2. (iii) breaks "investment does not depend on financing"; it is debt overhang, 2.4. (iv) breaks "no outsider's stake depends on leverage", since the government becomes a claimant whose stake grows with the bank's debt; 3.2.

---

**P3** *(Formal (a)–(b) · Exegetical (c).)*

(a) The old debt pays 40 or 50, so it is worth 45. The equity pays 0 or 110, worth 55. Total 100.

(b) *Equal ranking.* Total face is 80. In the low state the 40 is shared 50:30, so the old debt gets 25 and the new 15. In the high state they get 50 and 30, and the equity gets 80. Values: old debt $(25+50)/2 = 37.5$; new debt $(15+30)/2 = 22.5$, which is raised and paid out; equity $80/2 = 40$. Shareholders end with $40 + 22.5 = 62.5$, a gain of 7.5, and the old creditors lose $45 - 37.5 = 7.5$. Total: $37.5 + 22.5 + 40 = 100$.

*Junior.* In the low state the old debt takes all 40 and the new debt nothing; in the high state they get 50 and 30. The old debt is still worth 45, the new debt 15 and the equity 40, so shareholders end with $40 + 15 = 55$. No one gains or loses.

**Must hit, strict (c):**

- MM I fixes the total, 100 in every case. It says nothing about how a change in leverage divides that total among claims that are already outstanding.
- Equal-ranking new debt takes 7.5 of the low-state cash the old creditors were counting on, and the dividend passes it to shareholders. Junior new debt takes nothing from them, so it is a fair trade at market prices.
- The protection is a covenant limiting new debt that ranks equally with or ahead of theirs.

**Wrong turns:** valuing the new debt at its face of 30 (it defaults in the low state); looking only at the equity, which falls from 55 to 40, and forgetting the 22.5 dividend; concluding that MM I fails because shareholders gain.

**Model answer (c):** MM I promises that the recapitalization cannot change the firm's total value, and it does not: the claims sum to 100 before and after. It does not promise that each class of claim keeps its value, since new debt ranking equally with the old takes 7.5 from the old creditors and hands it to shareholders through the dividend, which is why lenders write covenants against new debt that ranks with or ahead of theirs.

</details>

## Flashback

**From Lesson [1.3](01-03-pledgeable-income-collateral-and-monitors.md) (Pledgeable income, collateral and monitors):** *(Formal.)* An entrepreneur with 10 of her own money can run a project that costs 100 and pays $R$ if it succeeds and nothing if it fails. If she works, it succeeds with probability 0.5; if she shirks, with probability 0.3, and she enjoys a private benefit of 10. Lenders are competitive and risk-neutral, the safe rate is 0, and she has limited liability, so the loan is a debt repaid only on success. (a) For which values of $R$ is the project worth doing (expected output above cost, with her working) and yet no lender will finance it at any interest rate? (b) How much net worth of her own would make every project worth doing financeable?

<details>
<summary>Solution</summary>

(a) She works only if her share $R_b$ on success satisfies $0.5R_b\ge0.3R_b+10$, that is $R_b\ge10/0.2=50$. So lenders can be promised at most $R-50$ on success, worth $0.5\,(R-50)$ in expectation. They must supply $100-10=90$, so the loan works if and only if

$$0.5\,(R-50)\ge90\iff R\ge230.$$

The project is worth doing when $0.5R>100$, that is $R>200$. So for $200<R<230$ (at $R=220$ the expected surplus is 10) it is worth doing and unfinanceable: any face value big enough to repay lenders leaves her less than 50, so she shirks and they expect less, not more.

(b) The net worth needed is

$$\bar A=100-0.5\,(R-50)=125-0.5R,$$

which is below 25 exactly when $0.5R>100$. So 25 of her own money makes every project worth doing financeable: it is her agency rent, $0.5\times50$, the expected amount she must be left for working.

**Wrong turns:** taking pledgeable income to be $0.5R-10$, with the private benefit in place of the stake $B/\Delta p=50$, which puts the threshold at exactly $R=200$ and finds no gap at all; answering (b) with 50, the stake she keeps if the project succeeds, rather than its expected value, 25.

</details>

## Connections

- **Backward:** [1.1](01-01-costly-state-verification.md) chose debt over equity, the loan over the commenda of [`history-of-debt` 2.1](../../history-of-debt/lessons/02-01-commerce-around-the-prohibition.md), only because verifying profits costs something; make verification free and the choice stops mattering, which is MM's world. [1.3](01-03-pledgeable-income-collateral-and-monitors.md)'s pledgeable income is an MM failure: when effort is hidden, what a project can raise depends on who holds the claims. With a stochastic discount factor $m$, the proof is one line: prices are linear, $p(Z) = \mathbb{E}[mZ]$ ([`grad-macro` 5.4](../../grad-macro/lessons/05-04-consumption-based-asset-pricing.md)), and debt plus equity pay $X$.
- **Forward:** [2.2](02-02-taxes-bankruptcy-costs-trade-off-theory.md) takes the first three rows of the checklist (taxes, distress costs, and the pecking order as the rival theory), and [2.3](02-03-agency-costs-of-debt-and-equity.md) and [2.4](02-04-debt-overhang.md) the fourth. [3.2](03-02-stopping-runs.md) returns to bank capital, where guarantees and deposit insurance make the fifth row bind.
- **Sideways (the debt thread):** the triple contract of [`theology-of-debt` 4.5](../../theology-of-debt/lessons/04-05-contracts-that-are-not-loans.md) assembled a loan's payoff from a partnership share, insurance of the principal and a sale of the uncertain gain for a fixed sum. That is replication, as in the proof above, so by the law of one price the bundle is worth what the loan is worth. The moralists judged it by who bore the risk and against whom, a question prices do not answer. P3's transfer grows when the new claim is senior, which is the collateralized-lending problem of [`history-of-debt` 6.4](../../history-of-debt/lessons/06-04-new-creditors.md); seniority in sovereign restructuring is [7.2](07-02-holdouts-and-collective-action-clauses.md)'s.
