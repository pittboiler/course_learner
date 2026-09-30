# Economics of Debt · Lesson 2.3: Agency costs of debt and equity

> ⏱ ~15 min · Module 2: Capital structure and debt overhang · Builds on: [2.1 Modigliani-Miller](02-01-modigliani-miller.md), [2.2 Taxes and bankruptcy costs: the trade-off theory](02-02-taxes-bankruptcy-costs-trade-off-theory.md), [1.2 Credit rationing: Stiglitz-Weiss](01-02-credit-rationing-stiglitz-weiss.md) · Unlocks: [2.4 Debt overhang](02-04-debt-overhang.md), [3.2 Stopping runs](03-02-stopping-runs.md)

## Why this matters

[Modigliani-Miller](../reference.md#modigliani-miller) ([2.1](02-01-modigliani-miller.md)) held the firm's investments fixed while its financing changed. Drop that assumption and financing changes what gets built. Debt gives shareholders every gain above the face value and passes every loss below it to creditors, so a levered firm can prefer a gamble that destroys value. Outside equity has the mirror-image problem: a manager who owns little of the firm spends its cash on herself or on her empire. Jensen and Meckling (1976, *JFE*) called both **agency costs**, and the covenants in a loan agreement are the market's way of pricing and policing them. The same payoff shape pushes [1.2](01-02-credit-rationing-stiglitz-weiss.md)'s borrowers toward risk, and it drives the overhang of [2.4](02-04-debt-overhang.md) and the moral hazard of deposit insurance in [3.2](03-02-stopping-runs.md).

## The idea

A firm owes 100, due next year. Rates are zero, everyone is risk-neutral, and all numbers are illustrative. The managers, acting for shareholders, can run the business safely, leaving assets worth 120 for sure. Or they can bet on a venture that leaves 200 or 20 on a coin flip. The bet is worse on average: 110 against 120.

| | Safe | Gamble |
|---|---|---|
| Shareholders | $120-100=20$ | $\tfrac12(200-100)+\tfrac12\cdot 0=50$ |
| Creditors | $100$ | $\tfrac12\cdot 100+\tfrac12\cdot 20=60$ |
| Firm | $120$ | $110$ |

Shareholders choose the gamble. It destroys 10, and it does so by taking 40 from creditors to give shareholders 30. Nothing illegal has happened. Under [limited liability](../reference.md#limited-liability) the shareholders' worst case is zero, so they keep the upside of any risk and hand the downside to creditors. That is **risk shifting**, also called asset substitution.

Now step back to before the loan is made. Creditors who can see the gamble coming will not pay 100 for a promise worth 60. So the shareholders who issue the debt pay for their own future temptation, in the price. This is Jensen and Meckling's central point: the owner bears the agency cost at the moment of borrowing, which is why owners volunteer for covenants that tie their hands.

The equity side is the mirror image. A manager who owns 10 percent of a firm pays 10 cents of every dollar the firm spends on her corporate jet. Selling more equity to outsiders shrinks her stake and enlarges the jet. Borrowing instead keeps her stake larger and takes cash out of her hands. Neither source of outside money is free of agency costs, and capital structure trades one against the other.

## The formal version

**Payoffs.** One zero-coupon debt of face $F$ falls due when the firm's assets are worth $V$. Under limited liability,

$$\text{equity} = \max(V-F,\,0), \qquad \text{debt} = \min(V,\,F) = F - \max(F-V,\,0).$$

*In words:* [equity is a call option](../reference.md#equity-as-a-call-option) on the firm's assets with strike $F$, and debt is a safe claim to $F$ minus a put. Creditors have sold shareholders the right to hand over the assets instead of paying.

**Risk shifting.** Value each claim by its expected payoff, and let $\tilde V'$ be a mean-preserving spread of $\tilde V$ (same mean, more dispersion). Because $\max(V-F,0)$ is convex, Jensen's inequality gives

$$\mathbb E\big[\max(\tilde V'-F,\,0)\big] \;\ge\; \mathbb E\big[\max(\tilde V-F,\,0)\big].$$

The two claims always sum to $V$, so debt loses exactly what equity gains. *In words:* holding firm value fixed, extra [risk is a pure transfer](../reference.md#risk-shifting) from creditors to shareholders. Equity holds a convex payoff, so it behaves like the risk lover of [`grad-micro` 2.5](../../grad-micro/lessons/02-05-choice-under-uncertainty.md).

**Merton's model.** Let asset value follow a geometric Brownian motion with volatility $\sigma$, with no payouts before the debt matures at $T$ and a constant riskless rate $r$. Merton (1974, *JF*) values equity with the [Black-Scholes formula](../../mathematical-finance/lessons/02-04-black-scholes-formula.md), with the asset value $V_0$ in place of the stock price and $F$ as the strike:

$$E_0 = V_0\,N(d_1) - F e^{-rT} N(d_2),$$

$$d_1 = \frac{\ln(V_0/F) + (r+\tfrac12\sigma^2)T}{\sigma\sqrt T}, \quad d_2 = d_1-\sigma\sqrt T,$$

where $N$ is the standard normal distribution function. Debt is worth $D_0 = V_0 - E_0$, its promised yield $y$ solves $D_0 = Fe^{-yT}$, and $y-r$ is the credit spread. *In words:* the firm's debt is worth the firm minus a call on the firm.

Two derivatives carry the lesson. First, $\partial E_0/\partial\sigma = V_0\,\varphi(d_1)\sqrt T > 0$, with $\varphi$ the normal density, so a riskier asset mix of equal value raises equity and lowers debt by the same amount. Second, $\partial E_0/\partial V_0 = N(d_1) < 1$. *In words:* shareholders bear only the fraction $N(d_1)$ of any value the firm loses but collect the whole gain in their option's value. So they accept a strategy that lowers $V_0$ if it raises $\sigma$ enough: roughly, whenever the option gain exceeds $N(d_1)$ times the loss.

**The equity side.** Jensen and Meckling's owner-manager holds a share $\alpha$ of the equity. Perks that cost the firm $x$ are worth $b(x)$ to her, with $b$ increasing and concave. She maximizes $\alpha(Y-x) + b(x)$, where $Y$ is the firm's cash flow before perks, so

$$b'(x) = \alpha.$$

*In words:* each dollar of perks costs her only $\alpha$ dollars, so with $\alpha<1$ she buys perks worth less to her than they cost the firm. Selling outside equity lowers $\alpha$; debt keeps it high. Jensen (1986, *AER Papers and Proceedings*) applied the same logic to [free cash flow](../reference.md#free-cash-flow), the cash left over after every positive-NPV project is funded. A manager who values the size of what she runs will invest it at a negative NPV rather than pay it out. A promised dividend can be cut quietly, but a missed debt payment hands the firm to its creditors, so debt commits the cash. His leading example was the oil industry of the early 1980s.

**Who pays.** Investors who anticipate risk shifting or perks pay less for the claims they buy. So at issue the owner bears the whole [agency cost](../reference.md#agency-costs): the investors' monitoring costs, her own bonding costs, and the residual loss that remains. Debt lowers the agency cost of equity and raises that of debt, and the owner picks the mix that minimizes their sum. This is a second trade-off, beside the tax-and-distress one of [2.2](02-02-taxes-bankruptcy-costs-trade-off-theory.md).

**Covenants.** Smith and Warner (1979, *JFE*) read [bond covenants](../reference.md#bond-covenants) as controls on four conflicts between shareholders and creditors. Limits on dividends stop shareholders paying out the assets behind the debt. Limits on new senior or secured debt stop them diluting existing claims. Limits on asset sales, mergers and new lines of business stop them trading safe assets for risky ones. The fourth conflict, underinvestment, is [2.4](02-04-debt-overhang.md)'s, and covenants barely reach it: a court can see a dividend or a sale, but not a good project that was never taken. Covenants cost something too, in monitoring and in good changes they block.

## Picture

![Payoffs against firm value at maturity with face 100. Debt rises one for one and then stays flat at 100; equity is zero up to 100 and then rises one for one. For the gamble paying 200 or 20, dashed chords give expected payoffs of 60 for debt and 50 for equity above the gamble's mean of 110, against 100 and 20 for the safe plan worth 120](assets/02-03-fig1.svg)

Each dashed chord joins a claim's payoffs at the gamble's two outcomes, so its midpoint (the open circle) is that claim's expected payoff. Equity's chord lies above its kinked payoff, which is why the gamble lifts equity from 20 to 50 even though its mean is lower. Debt's payoff is capped at 100, so its chord sags and it falls from 100 to 60.

## Worked examples

**Example 1 (clean): the tipping face value, and who pays.** Keep the gamble, but let the face $F$ vary. If $F\le 20$, both plans repay in full, equity gets the mean minus $F$, and the safe plan wins by 10. For $20 < F \le 120$, only the gamble defaults, in its bad state:

$$\tfrac12(200-F) \;>\; 120-F \iff F>40.$$

Above 120 the safe plan leaves equity nothing, so the gamble wins while it has any chance of clearing $F$. *In words:* any face above 40 tips the firm into the gamble. More debt, more convexity.

Now make the firm raise 80 today from competitive creditors. If they expect the gamble, the face must satisfy $\tfrac12 F + \tfrac12\cdot 20 = 80$, so $F=140$, a promised rate of 75 percent. At $F=140$ the gamble is indeed chosen, so the expectation is self-consistent. If the firm could commit to the safe plan, $F=80$ would do. Shareholders end with $\tfrac12(200-140)=30$ without commitment and $120-80=40$ with it, and creditors expect 80 either way. The 10 the gamble destroys falls entirely on shareholders, so a covenant that credibly bans the gamble is worth up to 10 to them. Without one, the low rate is not on offer: at $F=80$ equity would still gamble, getting 60 against 40.

**Example 2 (why you'd care): a Merton firm doubles its risk.** Assets are worth $V_0=100$, one zero-coupon debt of face $F=90$ is due in $T=4$ years, and $r=3\%$, continuously compounded. Management can swap into assets of the same value with volatility 50 percent instead of 25 percent.

| $\sigma$ | $d_1$ | $d_2$ | Equity $E_0$ | Debt $D_0$ | Spread |
|---|---|---|---|---|---|
| 25% | 0.70 | 0.20 | 29.6 | 70.4 | 3.1 points |
| 50% | 0.73 | −0.27 | 45.3 | 54.7 | 9.5 points |

Firm value is 100 in both rows. The swap moves 15.7 from creditors to shareholders and triples the spread. Now suppose the riskier assets are worth less. Solving $E_0(V,\,50\%) = 29.6$ gives $V = 78.4$, so shareholders would accept a swap that destroyed up to 21.6 of the firm's 100, and at that limit creditors would bear the entire loss. Leverage is what makes this pay: with face 30 instead of 90, the same doubling of $\sigma$ raises equity by only 2.0.

## Watch out

- **You might think risk shifting takes bad faith, but actually** it is what maximizing equity value prescribes under limited liability, and loyal managers do it. "Moral hazard" here is a prediction about behavior. Whether it is blameworthy is a separate question, the split [`philosophy-of-debt` 5.2](../../philosophy-of-debt/lessons/05-02-moral-hazard-and-fairness-to-those-who-paid.md) draws.
- **You might think creditors are the victims, but actually** anticipated risk shifting is priced when the debt is issued, so the owners bear the value it destroys (Example 1). Creditors lose only on debt already outstanding when an unforeseen chance to gamble arrives.
- **You might think the transfer is the agency cost, but actually** the cost is the value destroyed. In Example 2's first swap, 15.7 changes hands and firm value stays at 100.
- **You might think the pull is strongest in healthy firms that can afford risk, but actually** it grows with leverage and is largest near and past the default boundary, where equity is almost pure option value. That is gambling for resurrection.

## One-liner

> Whoever chooses a firm's risks or spends its cash while bearing only part of the cost will gamble or waste; investors who see it coming charge the owners for both, and capital structure is the choice of which agency cost to pay.

## Problems

**P1 (🟢) *(Formal (a)–(c) · Exegetical (d).)*** An invented firm owes 75, due next year. Rates are zero and everyone is risk-neutral. Plan S leaves assets worth 95 for sure. Plan G leaves 175 with probability $p$ and 15 otherwise. (a) For which $p$ do shareholders choose G? (b) For which $p$ is G the plan that maximizes the firm's value? (c) At $p=0.3$, compute the change in the value of equity, of debt and of the firm when the firm switches from S to G. (d) In the *mutuum* as [`theology-of-debt` 4.3](../../theology-of-debt/lessons/04-03-aquinas-on-usury-ii-ii-q78.md) reads Aquinas, the borrower holds the money at his own risk and repays in full whatever happens. Suppose the owner were liable that way, with enough other wealth to pay 75 in every state. Which plan does he choose at $p=0.3$, and what does the comparison with (a) show? Two sentences.

**P2 (🟡) *(Formal.)*** A firm's assets are worth 150, with volatility 30 percent. It has one zero-coupon debt of face 100 due in 5 years, and the riskless rate is 3 percent, continuously compounded. Use $N(d_1)=0.8777$, $N(d_2)=0.6889$ and $e^{-0.15}=0.8607$. (a) Value the equity and the debt, and find the debt's credit spread. (b) Management can swap into assets of equal value but volatility 50 percent, which would make the equity worth 87.27. Who gains, who loses, by how much, and what happens to the firm's value? (c) Suppose instead the riskier assets are worth only 140, and equity would then be worth 78.80. Do shareholders want this swap? Split the 10 of value lost between the two classes.

**P3 (🔴, optional) *(Exegetical (a) · Exegetical (b).)*** An invented loan agreement between a firm and its bank contains four clauses:

1. Dividends and share buybacks may not exceed half of the net income earned since the loan was made.
2. The firm may not issue debt ranking ahead of this loan, or pledge its assets to other lenders.
3. The firm may not sell more than a tenth of its assets in any year, or enter a new line of business, without the bank's consent.
4. Each year, three-quarters of the cash left after operating costs, interest and approved investment must go to repaying the loan early.

(a) For each clause, name the conflict it controls (dividend payout, claim dilution, asset substitution or free cash flow) and whose incentive it restrains, with a one-sentence reason. (b) The shareholders, not the bank, proposed clause 3 when the loan was negotiated. Using Example 1's logic, say in two sentences why that was in their interest, and name one cost the clause can impose on them later.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(c) · Exegetical (d).)*

(a) Under S the debt is paid in full, so equity gets $95-75=20$. Under G the bad state (15) defaults and equity gets nothing there, so equity gets $p(175-75)=100p$. Shareholders choose G iff $100p>20$, that is, $p>0.2$.

(b) Firm value is 95 under S and $175p+15(1-p)=15+160p$ under G. G maximizes value iff $15+160p>95$, that is, $p>0.5$. For $0.2<p<0.5$, shareholders choose a plan that destroys value.

(c) At $p=0.3$:

- Equity: $0.3\times 100 = 30$, up from 20, so $+10$.
- Debt: $0.3\times 75 + 0.7\times 15 = 22.5+10.5 = 33$, down from 75, so $-42$.
- Firm: $0.3\times 175+0.7\times 15 = 52.5+10.5 = 63$, down from 95, so $-32$.

Check: $+10-42=-32$.

**Must hit, strict (d):**

- He chooses S. With full liability his payoff is $V-75$ in every state, so he compares means: 20 under S against $63-75=-12$ under G. He would choose G only when $p>0.5$, exactly when G maximizes value.
- So the gap between $p>0.2$ in (a) and $p>0.5$ comes entirely from limited liability, the kink in $\max(V-F,0)$ that full liability removes. With the kink gone, the lender's claim is safe and the owner bears his own gamble.

**Wrong turns:** writing equity as $V-75$ in every state in (a), which gives $p>0.5$, the answer to (b); in (d), saying the owner still gambles because the lender absorbs the bad state (under full liability he pays the shortfall of 60 himself).

**Model answer (d):** He chooses S, because with full liability he gets $V-75$ in every state and so compares means, 20 against $-12$, and he would take G only when $p>0.5$, when it maximizes value. The gap between (a) and (b) is therefore the work of limited liability alone: remove the kink in equity's payoff and the incentive to shift risk disappears.

---

**P2** *(Formal.)*

(a) $Fe^{-rT} = 100\times 0.8607 = 86.07$, so

$$E_0 = 150(0.8777) - 86.07(0.6889) = 131.655 - 59.294 = 72.361 \approx 72.36,$$

and $D_0 = 150-72.36 = 77.64$. The promised yield solves $77.64 = 100e^{-5y}$, so $y = \tfrac15\ln(100/77.64) = 5.06\%$, a credit spread of $5.06-3 = 2.06$ points.

(b) Equity rises to 87.27, a gain of $87.27-72.36 = 14.91$. Debt falls to $150-87.27 = 62.73$, a loss of 14.91. Firm value stays at 150, so this is a pure transfer from creditors to shareholders.

(c) Yes. Equity rises to 78.80, a gain of $78.80-72.36 = 6.44$. Debt falls to $140-78.80 = 61.20$, a loss of $77.64-61.20 = 16.44$. Check: $6.44-16.44 = -10$. Creditors lose more than the whole 10, because they also pay for the shareholders' gain. At a 30 percent volatility, $N(d_1)=0.8777$ says shareholders would bear about 88 percent of a value loss with no change in risk; the higher volatility more than pays for their share.

**Wrong turns:** discounting the face for one year ($e^{-0.03}$) instead of five; reporting the spread as $(100-77.64)/77.64$, which is a five-year total return, not an annual continuously compounded rate; saying firm value falls in (b).

---

**P3** *(Exegetical (a) · Exegetical (b).)*

**Must hit, strict (a):**

- Clause 1: **dividend payout**, restraining shareholders. Without it they could pay themselves the assets that back the loan and leave the bank a shell.
- Clause 2: **claim dilution**, restraining shareholders. New senior or secured debt would take first call on the assets the bank lent against.
- Clause 3: **asset substitution** (risk shifting), restraining shareholders. Selling assets or entering a new business is how a firm swaps safe assets for risky ones.
- Clause 4: **free cash flow**, restraining managers on behalf of all investors. The sweep takes away cash that managers would otherwise spend on negative-NPV growth, which is Jensen's case for debt.

**Must hit, strict (b):**

- The bank prices anticipated risk shifting into the rate, so shareholders bear its cost when they borrow. A credible ban lowers the promised rate and lets them keep the value the gamble would destroy (up to 10 in Example 1).
- The cost: the clause can block a value-creating sale or expansion later, and the firm must then buy the bank's consent, a harder bargain when the debt is spread across many bondholders ([2.4](02-04-debt-overhang.md)).

**Wrong turns:** filing clause 1 under free cash flow. Clause 1 limits cash paid out to shareholders, to protect creditors; clause 4 forces cash out to creditors, to protect investors from managers. Also: answering (b) with "the bank insisted", when the question is why the borrower gains.

**Model answer (b):** The bank would have priced our temptation to swap into risky assets, so we would have paid for it up front through a higher rate; a credible ban lowers that rate by the value the gamble would destroy. The cost comes later: if a good sale or a new venture turns up, we need the bank's consent, and the bank can hold out for a share of the gain.

</details>

## Flashback

**From Lesson [2.1](02-01-modigliani-miller.md) (Modigliani-Miller):** *(Formal (a)–(b) · Exegetical (c).)* An invented firm has safe debt, at the riskless rate of 3 percent, and there are no taxes or distress costs. On a day when the value of its business, read off a debt-free twin, falls 8 percent, the firm's shares fall 24 percent. (a) Find its debt-to-equity ratio in market values. (b) The business's expected return is 9 percent. Find the expected return on the firm's shares. (c) If the bonds were risky, at the same debt-to-equity ratio, would the same 8 percent fall in the business cost the shares more or less than 24 percent? One sentence, with the reason.

<details>
<summary>Solution</summary>

(a) The debt is safe, so the whole fall in the business's value lands on equity, and the shares' percentage fall is $V/E$ times the business's: $V/E=24/8=3$. Since $V=D+E$, $D/E=V/E-1=2$.

(b) MM II gives

$$r_E=r_A+(r_A-r_D)\,\frac DE=9+(9-3)\times2=21\%.$$

Check: $E/V=\tfrac13$ and $D/V=\tfrac23$, so the WACC is $\tfrac13\times21+\tfrac23\times3=7+2=9\%$, the business's own return.

**Must hit, strict (c):**

- Less than 24 percent.
- Risky bonds carry part of any fall in the business, because their payoff is no longer fixed, so the shares lose less than the whole fall in value and $V/E$ overstates their percentage loss. (It is the same reason the cost of equity bends below MM II's straight line once debt is risky.)

**Wrong turns:** reading the multiplier 3 as the debt-to-equity ratio, which gives $r_E=9+6\times3=27\%$; the WACC check still returns 9 percent for any ratio, so it cannot catch this, and only $V/E=1+D/E$ does.

**Model answer (c):** Less: with risky bonds the creditors absorb part of the fall in the business's value, so the shares lose less than the whole of it, and $V/E$ times 8 percent overstates their percentage fall.

</details>

## Connections

- **Backward:** [2.1](02-01-modigliani-miller.md) held investment fixed; here it responds to leverage, and the split $V_0 = E_0 + D_0$ is MM's conservation of value with a transfer inside it. The payoff $\max(y-RL,\,0)$ of [1.2](01-02-credit-rationing-stiglitz-weiss.md)'s borrower is the same convex claim, with the bank as creditor. Risk shifting is one more cost of financial distress beside [2.2](02-02-taxes-bankruptcy-costs-trade-off-theory.md)'s. The pricing formula is [`mathematical-finance` 2.4](../../mathematical-finance/lessons/02-04-black-scholes-formula.md), and hidden action is the moral hazard of [`grad-micro` 5.4](../../grad-micro/lessons/05-04-moral-hazard-principal-agent.md), with the choice of risk or perks as the action.
- **Forward:** [2.4](02-04-debt-overhang.md) is the fourth conflict: the same split of payoffs makes shareholders refuse good projects whose gains go to creditors. In [3.2](03-02-stopping-runs.md), deposit insurance hands a bank this option with the insurer as creditor, which is why it comes with capital requirements. The class votes over liquidation and continuation in [7.3](07-03-designing-bankruptcy.md) replay the conflict between convex and concave claims.
- **Sideways (the debt thread):** Aquinas's *mutuum*, repaid in full whatever happens, left the lender a fixed and safe claim ([`theology-of-debt` 4.3](../../theology-of-debt/lessons/04-03-aquinas-on-usury-ii-ii-q78.md)). Limited liability hands part of the risk back to the lender as the put above, and P1(d) shows that the gamble's appeal lives in that put. [`history-of-debt` 6.1](../../history-of-debt/lessons/06-01-the-american-mortgage-and-2008.md) meets the conflict inside a mortgage pool: modifying a loan helps the junior tranches, which absorb the first losses, while foreclosure may serve senior holders better.
