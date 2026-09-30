# Economics of Debt · Lesson 2.4: Debt overhang

> ⏱ ~15 min · Module 2: Capital structure and debt overhang · Builds on: [2.3 Agency costs of debt and equity](02-03-agency-costs-of-debt-and-equity.md), [2.2 Taxes and bankruptcy costs: the trade-off theory](02-02-taxes-bankruptcy-costs-trade-off-theory.md), [`grad-macro` 5.3 The q-theory of investment](../../grad-macro/lessons/05-03-q-theory-investment.md) · Unlocks: [7.1 Haircuts, the debt Laffer curve and buybacks](07-01-haircuts-the-debt-laffer-curve-and-buybacks.md), [7.2 Holdouts and collective action clauses](07-02-holdouts-and-collective-action-clauses.md)

## Why this matters

A borrower who may not repay in full will turn down good investments, because much of what they would earn goes to the old creditors. Myers (1977, *JFE*) showed this for firms. It is now called **debt overhang**, and it is the fourth conflict of [2.3](02-03-agency-costs-of-debt-and-equity.md), the one covenants barely reach. It explains why creditors can gain by forgiving part of a claim, why distressed firms are refinanced with new money that jumps the queue, and why a deal that would help everyone fails when the debt is spread over thousands of holders. The model returns for households ([4.3](04-03-household-debt-and-the-great-recession.md), [8.3](08-03-relief-written-into-the-contract.md)) and for countries, where it becomes the debt Laffer curve of [7.1](07-01-haircuts-the-debt-laffer-curve-and-buybacks.md).

## The idea

A firm owes 100, due next year. Its existing business will be worth 150 in a good year (probability 0.6) or 35 in a bad one (probability 0.4). Rates are zero, everyone is risk-neutral, and all numbers are illustrative. The shareholders can build a machine that costs 40 today and adds 60 next year for sure: a net present value (NPV) of 20.

They refuse. Follow the 60. In a good year the debt is repaid either way, so the whole 60 goes to shareholders. In a bad year the firm is 65 short without the machine and still 5 short with it, so every unit the machine earns goes to creditors. Shareholders pay all 40 of the cost and expect back $0.6\times 60 = 36$. Creditors pay nothing and expect $0.4\times 60 = 24$.

| | Without the machine | With it | Gain |
|---|---|---|---|
| Shareholders | $0.6\times 50 = 30$ | $0.6\times 110 - 40 = 26$ | $-4$ |
| Creditors | $0.4\times 35 + 0.6\times 100 = 74$ | $0.4\times 95 + 0.6\times 100 = 98$ | $+24$ |
| Firm | $104$ | $124$ | $+20$ |

The old debt works like a tax on new investment and a subsidy to creditors, levied at the chance of default. Nobody misbehaves: shareholders decline to pay for a gift to someone else.

The fix looks easy: creditors give up part of their claim, since the machine is worth 24 to them. It has two traps. The write-down must go deep enough that building beats pocketing the write-down and still not building. And when the debt is held by many bondholders, each would rather the others did the forgiving.

## The formal version

**Setup.** Two dates, zero interest, risk-neutral investors. Assets in place pay $\tilde A$ at date 1. Debt of face value $F$ falls due at date 1 under [limited liability](../reference.md#limited-liability). At date 0 shareholders can pay $I$ for a project that adds $X$ at date 1 (sure, for simplicity). With $x = X$ if the project is built and $x = 0$ if not, equity and debt are worth

$$\begin{aligned} E(F,x) &= \mathbb E\big[\max(\tilde A + x - F,\,0)\big],\\ D(F,x) &= \mathbb E\big[\min(\tilde A + x,\,F)\big]. \end{aligned}$$

**The split.** The project changes the two claims by $\Delta E(F) = E(F,X) - E(F,0) - I$ and $\Delta D(F) = D(F,X) - D(F,0)$, and $\Delta E + \Delta D = X - I$, the NPV, because the claims always sum to the firm. Shareholders decide, and build iff $\Delta E(F) \ge 0$ (ties go to building), that is, iff

$$X - I \;\ge\; \Delta D(F).$$

*In words:* a project must pay for the creditors' windfall on top of its own cost. A project with $0 < X - I < \Delta D(F)$ is a good project refused, which is [debt overhang](../reference.md#debt-overhang).

**The tax.** Let $\tau(F) = \Delta D(F)/X$, the share of the project's payoff that lands with creditors. Shareholders build iff $(1-\tau)X \ge I$. If the project cannot cure a default ($\tilde A + X \le F$ whenever $\tilde A < F$), creditors take all of $X$ in every default state and $\tau = \Pr(\tilde A < F)$, the default probability. A project that does cure some defaults hands shareholders the excess, so $\tau$ is lower. Either way, more debt never lowers $\tau$. *In words:* [overhang is a tax on investment](../reference.md#overhang-tax-rate), collected by creditors at a rate that more debt can only raise.

**The $q$ wedge.** [`grad-macro` 5.3](../../grad-macro/lessons/05-03-q-theory-investment.md) says invest when an installed unit is worth more than it costs, $q \ge 1$. The project's own $q$ is $q_P = X/I$. The $q$ shareholders face is what they get back per unit they pay:

$$q_E = \frac{(1-\tau)X}{I} = (1-\tau)\,q_P .$$

Efficiency needs $q_P \ge 1$; shareholders need $q_P \ge 1/(1-\tau)$. *In words:* the market can value a firm's opportunities highly and still watch it sit still, because the $q$ that moves investment is equity's. In the idea's firm, $q_P = 1.5$ but $q_E = 0.9$.

**Myers's version.** Myers put the project in the future: much of a firm's value is options to invest $I$ later in an asset worth $V(s)$, once the state $s$ is known. With no assets in place and debt of face $F$ due after the option date, shareholders exercise only if $V(s) \ge I + F$, while value needs only $V(s) \ge I$. Creditors price the lost states when they lend, so the cost falls on the shareholders who issue the debt, and a firm made mostly of growth options should borrow less: a cost of debt beside [2.2](02-02-taxes-bankruptcy-costs-trade-off-theory.md)'s distress costs. Debt maturing *before* the option date does not distort. Renegotiation is costly, because creditors cannot verify the project's value and shareholders gain by understating it.

**Three fixes.** Each changes who collects the project's payoff.

1. *Write-down to $F' < F$.* Creditors accept if $D(F',X) \ge D(F,0)$, provided shareholders then build. Shareholders build iff $\Delta E(F') \ge 0$: building must beat **not building at the new face $F'$**. That is tighter than beating their status-quo payoff $E(F,0)$, because $E(F',0) > E(F,0)$: the write-down raises their payoff even if they never build. *In words:* shareholders choose after the deal, so the [write-down window](../reference.md#write-down-window) must make building better than keeping the gift.
2. *[Debt-equity swap](../reference.md#debt-equity-swap).* Creditors trade their claim for a share $s$ of an all-equity firm, which raises $I$ at a fair price. With no debt left there is no tax, the firm builds, and the old claimants share $V = \mathbb E[\tilde A] + X - I$. Both gain for any $s$ from $D(F,0)/V$ to $1 - E(F,0)/V$.
3. *[Senior new money](../reference.md#senior-new-money).* An outside lender funds $I$ and is repaid before the old debt. With $X \ge I$ the new lender is safe, the old creditors can capture at most the NPV instead of all of $X$, and both old classes gain. US Chapter 11 does this with debtor-in-possession loans that a court can rank ahead of existing claims (section 364 of the Bankruptcy Code). Outside court, the covenants of [2.3](02-03-agency-costs-of-debt-and-equity.md) that bar new senior debt block it.

## Picture

![Shareholders' and creditors' gains from building the project against the face value of the old debt. The shareholders' gain falls from 20 to zero at a face of 85 and to minus 4 at 95; the creditors' gain rises from 0 to 24. A green bar marks write-downs from 74 to 85](assets/02-04-fig1.svg)

The two lines always add to the NPV of 20, so whatever creditors gain, shareholders lose. Between 35 and 95 each extra unit of face moves 0.4 of a unit of the project's value to creditors, so the tax rate climbs from 0 to 0.4 and stays there. Shareholders build only left of 85, where the green bar of acceptable write-downs stops.

## Worked examples

**Example 1 (clean): the write-down window.** In the idea's firm ($F = 100$, $\tilde A = 35$ or 150 with probabilities 0.4 and 0.6, $I = 40$, $X = 60$), creditors are worth 74 and shareholders 30 with no deal.

For a new face $F'$ between 35 and 95, the bad year defaults without the machine and leaves shareholders $95 - F'$ with it, so

$$\Delta E(F') = 0.6\times 60 + 0.4\,(95 - F') - 40 = 34 - 0.4F' \;\ge 0 \iff F' \le 85.$$

Once the machine is built, a face of at most 95 is paid in full, so creditors need $F' \ge 74$. The window is $74 \le F' \le 85$. At its top, $F' = 85$, creditors gain 11 and shareholders 9. Creditors can take no more than 11 of the 20 this way, because a lower face is a gift to shareholders in the good year whether or not they build. The swap has no such limit: creditors keep a share of the upside and can take anything up to all 20.

Now the trap. Compare shareholders with their status quo instead, $124 - F' \ge 30$, and the window seems to run to 94. A write-down to 90 then looks like a Pareto improvement: creditors 90 (up 16), shareholders 34 (up 4). But at 90 shareholders compare building (34) with not building at 90, which pays $0.6\times(150 - 90) = 36$. They keep the write-down and skip the machine. Creditors end at $0.4\times 35 + 0.6\times 90 = 68$, down 6, and the 6 went to shareholders. The write-down bought nothing.

**Example 2 (why you'd care): thousands of bondholders.** Now the 100 of face is spread over many small bondholders. The firm offers to swap each bond of face 100 for a new bond of face 80, void unless enough accept to bring total face to 85. With a share $\theta$ accepting, total face is $100 - 20\theta \le 85$ iff $\theta \ge 3/4$. If the offer succeeds, the firm builds and every claim is safe (the bad year is worth 95): an accepting holder gets 80, a holdout 100. If it fails, every bond is worth 74. No small holder can change whether three-quarters is reached, so holding out pays 20 more if the deal succeeds and costs nothing if it fails. Everyone reasons the same way and the offer fails, although each would get 80 rather than 74 if all accepted. That is the [holdout problem](../reference.md#holdout-problem). In the United States the Trust Indenture Act of 1939 bars changing a public bond's payment terms without each holder's consent, so an out-of-court write-down has to take this form.

Two things get around it. Concentration: a lender holding most of the debt keeps most of what its own concession creates. Gilson, John and Lang (1990, *JFE*) found that about half of 169 distressed firms restructured outside Chapter 11, and the firms more likely to manage it owed more of their debt to banks and owed fewer lenders. And the court: a Chapter 11 judge can rank a new loan of 40 ahead of the old bonds with no bondholder's consent. Repaid first out of the bad year's 95, that lender is safe; the old bonds get 55 instead of 35 and are worth 82 (up 8), and shareholders are worth 42 (up 12).

## Watch out

- **You might think overhang is a cash problem, but actually** raising the 40 by selling new shares at a fair price changes nothing. The new shareholders pay 40 for claims worth 40, so the old ones end at $66 - 40 = 26$, still below 30. The problem is where the payoff goes, not who has the cash.
- **You might think overhang needs insolvency, but actually** the idea's firm is worth 104 on average against debt of 100. It needs only a chance of default in states where the project pays.
- **You might think overhang and [risk shifting](../reference.md#risk-shifting) are rival stories, but actually** they are one payoff split read twice. Shareholders over-invest in gambles whose losses land on creditors and under-invest in safe projects whose gains do. The idea's firm would refuse the machine yet trade its assets for a lottery paying 170 or 0 with probabilities 0.6 and 0.4 (mean 102), lifting equity from 30 to 42.

## One-liner

> When default is possible, creditors collect part of every new project's payoff, so shareholders refuse good projects; a write-down cures it only if it goes deep enough that building beats keeping the gift, and only if the creditors can agree on who gives it.

## Problems

**P1 (🟢) *(Formal.)*** An invented firm owes 90, due next year. Its assets in place will be worth 30, 80 or 150 with probabilities 0.2, 0.3 and 0.5. Rates are zero and everyone is risk-neutral. Shareholders can pay 24 today for a project that adds 30 next year in every state. (a) Compute the project's NPV, the creditors' expected gain from it, and the shareholders' expected gain net of the 24. Do they build? (b) Compute the overhang tax rate $\tau$ and compare it with the probability of default without the project. Explain the gap in one sentence. (c) Compute the project's $q$ and equity's $q$, and the largest cost at which shareholders would still build.

**P2 (🟡) *(Formal.)*** An invented homeowner will sell her house next year and repay a non-recourse mortgage balance of 220 (amounts in thousands of dollars): if the sale falls short, the bank takes the proceeds and she owes nothing more. The house will sell for 160 or 300 with equal probability. A new roof costing 20 today, paid from her savings, would raise the sale price by 38 either way. Rates are zero, everyone is risk-neutral, and she fixes the roof when indifferent. (a) Show that she will not fix the roof, and split its NPV between her and the bank. (b) Before she decides, the bank may cut the balance to $B'$. Find every $B'$ at which she fixes the roof and both she and the bank are at least as well off as with no cut. Which $B'$ would the bank choose, and what do the two sides gain there? (c) A loan officer proposes $B' = 210$, noting that if she fixes the roof the bank is worth 204 and she is worth 44, both above their current values. Does she fix it? Find the bank's value, and say in one sentence what the officer's check got wrong.

**P3 (🔴, optional) *(Formal (a)–(b) · Exegetical (c).)*** An invented firm's assets in place will be worth 40 (probability 1/4) or 160 (probability 3/4). It owes 120 next year: 90 to a bank and 30 to many small bondholders, ranking equally, so a shortfall is shared in proportion to face. Shareholders can pay 55 today for a project that adds 72 next year for sure. Rates are zero, and shareholders build when indifferent. (a) Show that shareholders reject the project, and find the smallest cut in total face that gets it built. (b) The bank alone cuts its claim by that amount; the bonds keep their face. Find the gains of the bank, the bondholders and the shareholders relative to no deal. What is the smallest part of the 120 the bank must hold for a solo cut to leave it no worse off? (c) Why would no bondholder volunteer to share the cut, and what does (b) predict about which distressed firms settle out of court? Two sentences.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) The NPV is $30 - 24 = 6$. State by state:

- Worst state: $30 + 30 = 60 < 90$, so all 30 goes to creditors.
- Middle state: $80 + 30 = 110 > 90$, so creditors get the 10 they were short and shareholders the other 20.
- Best state: shareholders get all 30.

Creditors gain $0.2\times 30 + 0.3\times 10 = 9$. Shareholders gain $0.3\times 20 + 0.5\times 30 = 21$ gross, $21 - 24 = -3$ net. Check: $9 - 3 = 6$. They do not build.

(b) $\tau = 9/30 = 0.3$, against a default probability of $0.2 + 0.3 = 0.5$ without the project. The gap comes from the middle state: there the project more than cures the default, so creditors take only their shortfall of 10 and shareholders keep the other 20.

(c) $q_P = 30/24 = 1.25$ and $q_E = (1-0.3)\times 1.25 = 0.875$, the same as $21/24$. Shareholders would build at any cost up to $(1-\tau)X = 21$. Equivalently, they need $q_P \ge 1/0.7 \approx 1.43$.

**Wrong turns:** setting $\tau$ equal to the default probability 0.5, which gives shareholders 15 instead of 21; giving creditors the middle state's whole 30, when they are owed only 10 more there.

---

**P2** *(Formal.)*

(a) With no roof the bank is worth $0.5\times 160 + 0.5\times 220 = 190$ and she is worth $0.5\times(300 - 220) = 40$. With the roof, a bad sale brings $160 + 38 = 198 < 220$, all of it the bank's, and a good sale leaves her $338 - 220 = 118$. She gets $0.5\times 118 - 20 = 39$, a gain of $-1$. The bank gets $0.5\times 198 + 0.5\times 220 = 209$, a gain of 19. The NPV of 18 splits as 19 to the bank and $-1$ to her.

(b) For $160 \le B' \le 198$, fixing the roof beats not fixing it at $B'$ by

$$0.5\,(198 - B') + 0.5\times 38 - 20 = 98 - 0.5B',$$

so she fixes it iff $B' \le 196$. With the roof fixed and $B' \le 198$, the loan is repaid in full, so the bank is worth $B'$ and needs $B' \ge 190$. Answer: $190 \le B' \le 196$. The bank chooses 196, the largest balance that still gets the roof fixed. It gains $196 - 190 = 6$, and she is worth $0.5\times 2 + 0.5\times 142 - 20 = 52$, a gain of 12. Check: $6 + 12 = 18$.

(c) At 210, fixing gives her $0.5\times(338 - 210) - 20 = 44$ and not fixing gives $0.5\times(300 - 210) = 45$, so she does not fix it. The bank is worth $0.5\times 160 + 0.5\times 210 = 185$, down 5, and she gains 5. The officer compared her 44 with her old 40, when the right comparison was with keeping the cut and skipping the roof, which pays 45.

**Wrong turns:** using her status-quo 40 as the benchmark in (b), which stretches the range to 218 and is exactly the officer's mistake; valuing the bank's modified loan at $0.5\times 160 + 0.5 B'$ after the roof is fixed, forgetting that the bad sale now covers the balance.

---

**P3** *(Formal (a)–(b) · Exegetical (c).)*

(a) With no project, debt is worth $0.25\times 40 + 0.75\times 120 = 100$ and equity $0.75\times 40 = 30$. The bad state with the project is $40 + 72 = 112 < 120$, so creditors take all 72 there. Shareholders gain $0.75\times 72 - 55 = -1$, creditors $0.25\times 72 = 18$, and the NPV is 17. They reject it. For total face $F'$ between 40 and 112, shareholders' gain from building is

$$0.75\times 72 + 0.25\,(112 - F') - 55 = 27 - 0.25F',$$

which is at least zero iff $F' \le 108$. The smallest cut is 12.

(b) The bank's face falls to 78 and the total to 108, which the bad state's 112 covers, so every claim is paid in full.

- Bank: 78, against $\tfrac{90}{120}\times 100 = 75$ with no deal: up 3.
- Bondholders: 30, against 25: up 5.
- Shareholders: $0.25\times 4 + 0.75\times 124 - 55 = 39$, against 30: up 9.

Check: $3 + 5 + 9 = 17$. A bank holding face $h$ gains $(h - 12) - \tfrac{h}{120}\times 100 = h/6 - 12$ from a solo cut, which is at least zero iff $h \ge 72$: three-fifths of the debt. The bondholders, who gave up nothing, gain more than the bank.

**Must hit, strict (c):**

- Free riding: no bondholder's own concession decides whether the project is built, and once the bank's cut has made the debt safe, a bondholder who keeps full face collects 30 instead of the 27 a shared 10 percent cut would leave. Volunteering is a pure cost.
- The prediction: firms whose debt is concentrated in a bank or a few lenders settle out of court more often, and firms with widely held bonds more often end up in court. That is what Gilson, John and Lang (1990) found.

**Wrong turns:** valuing the bank's claim with no deal at its face of 90, when it absorbs three-quarters of the bad state's shortfall; in (c), saying bondholders lose from the bank's cut, when their claims become safe.

**Model answer (c):** Each bondholder is too small to decide whether the project gets built, and once the bank's cut makes the debt safe, a bondholder who keeps full face collects 30 rather than the 27 of a shared cut, so none volunteers. Only a creditor large enough to capture its own concession's payoff (here, three-fifths of the face) settles alone, so firms whose debt sits with banks and few lenders should restructure out of court more often, which is what Gilson, John and Lang found.

</details>

## Flashback

**From Lesson [2.2](02-02-taxes-bankruptcy-costs-trade-off-theory.md) (Taxes and bankruptcy costs: the trade-off theory):** *(Formal.)* An invented economy has three equally likely kinds of firm, with assets in place worth 300, 100 or 50. Managers know their firm's kind; investors do not. No firm has cash. Each can pay 70 for a project worth 100 to any firm (NPV 30), and can raise the 70 only by selling new shares. Investors know which kinds issue and price the shares fairly: new shareholders receive a fraction $s=70/(\bar a+100)$ of the firm after the project, where $\bar a$ is the average assets of the kinds that issue. A firm of kind $a$ issues if the project's NPV covers the gift to new shareholders, $s(a+100)-70$. (a) Which kinds issue in equilibrium, and what is $s$? (b) What is the expected NPV lost per firm?

<details>
<summary>Solution</summary>

(a) Try all three issuing: $\bar a=150$ and $s=70/250=0.28$. The 300 kind's gift would be $0.28\times400-70=42>30$, so it stays out (the other two kinds' gifts are $-14$ and $-28$, so they would issue). With only the 100 and 50 kinds issuing the pool is worse: $\bar a=75$ and $s=70/175=0.4$. The gifts are now

$$\begin{aligned}300\text{ kind: }&0.4\times400-70=90>30\ \text{(stays out)},\\ 100\text{ kind: }&0.4\times200-70=10\le30\ \text{(issues)},\\ 50\text{ kind: }&0.4\times150-70=-10\le30\ \text{(issues)}.\end{aligned}$$

This is consistent, and it is the only self-consistent set of issuers: the 100 and 50 kinds issue, and new shareholders take $s=40\%$.

(b) The 300 kind's project, with NPV 30, is never built, and that kind is one firm in three: the expected loss is $\tfrac13\times30=10$ per firm.

**Wrong turns:** keeping the full-pool price $s=0.28$ after the 300 kind has left, which forgets that the pool got worse (the price is 0.4); counting the loss as a third of the project's value, $100/3=33.3$, instead of a third of its NPV, 30.

</details>

## Connections

- **Backward:** [2.3](02-03-agency-costs-of-debt-and-equity.md)'s payoff split makes shareholders over-invest in risk; the same split makes them under-invest in safe projects, the fourth of the conflicts covenants target. Myers's lost investments join [2.2](02-02-taxes-bankruptcy-costs-trade-off-theory.md)'s distress costs as a reason to borrow less than the tax shield alone suggests. [2.1](02-01-modigliani-miller.md) held investment fixed; overhang is what happens when it is not. The wedge is [`grad-macro` 5.3](../../grad-macro/lessons/05-03-q-theory-investment.md)'s investment rule applied to equity's $q$.
- **Forward:** [7.1](07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) takes the model to sovereigns, where forgiving part of a debt can raise what creditors collect. [7.2](07-02-holdouts-and-collective-action-clauses.md) turns Example 2 into a game and shows how collective action clauses solve it, and [7.3](07-03-designing-bankruptcy.md) designs the court procedure inside which new money can be ranked first. Households return in [4.3](04-03-household-debt-and-the-great-recession.md), whose evidence that owners at risk of default cut spending on home improvements is P2's roof in the data, and in [8.3](08-03-relief-written-into-the-contract.md); what anticipating relief does to borrowing beforehand is [8.1](08-01-forgiveness-commitment-and-the-fresh-start.md)'s question.
- **Sideways (the debt thread):** [`history-of-debt` 5.4](../../history-of-debt/lessons/05-04-from-mexico-1982-to-the-brady-plan.md) sets the 1980s liquidity view against the overhang view that led to Brady, and [5.5](../../history-of-debt/lessons/05-05-jubilee-2000-and-hipc.md) hands this course the reason HIPC relief could raise investment rather than merely consumption. [6.5](../../history-of-debt/lessons/06-05-student-and-consumer-debt.md) hands over the case for discharge as a cure for household overhang. The South Sea scheme of 1720 ([3.3](../../history-of-debt/lessons/03-03-the-south-sea-bubble.md)) turned the state's creditors into shareholders of a company holding its debt, a debt-for-equity conversion one step removed, since a state has no equity to give. A write-down inside the window leaves both sides better off; whether relief beyond it is fair is [`philosophy-of-debt` 5.2](../../philosophy-of-debt/lessons/05-02-moral-hazard-and-fairness-to-those-who-paid.md)'s question.
