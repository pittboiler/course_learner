# Economics of Debt · Lesson 6.2: Willingness to pay: reputation and Eaton-Gersovitz

> ⏱ ~15 min · Module 6: Sovereign default · Builds on: [6.1 Ability to pay: the transfer problem and original sin](06-01-the-transfer-problem-and-original-sin.md), [grad-game-theory 3.3 Repeated games](../../grad-game-theory/lessons/03-03-repeated-games-finite-infinite.md), [grad-game-theory 3.4 The folk theorems](../../grad-game-theory/lessons/03-04-folk-theorems.md) · Unlocks: [6.3 Bulow-Rogoff](06-03-bulow-rogoff-and-sanctions.md), [6.4 The Arellano model](06-04-the-arellano-model.md)

## Why this matters

A firm that stops paying can be taken to court and sold. A country cannot. Its assets are mostly at home, what it holds abroad is largely shielded by sovereign immunity, and [history-of-debt 6.3](../../history-of-debt/lessons/06-03-holdouts-and-the-law-of-sovereign-restructuring.md) follows creditors who won judgment after judgment against Argentina and for years were not paid. [6.1](06-01-the-transfer-problem-and-original-sin.md) asked whether a country *can* raise what it owes. This lesson asks why it would ever *choose* to. Eaton and Gersovitz (1981, *Review of Economic Studies*) gave the answer the field still starts from: a defaulter is shut out of credit, and a country needs credit to get through bad years. Hume had put the mechanism in one clause: whoever promises "subjects himself to the penalty of never being trusted again in case of failure" (*Treatise* III.ii.5; see [philosophy-of-debt 1.2](../../philosophy-of-debt/lessons/01-02-hume-promises-as-artificial-obligation.md)). The model turns that penalty into a number, finds the largest debt it can hold up, and shows why patient countries, and less obviously volatile ones, can borrow more.

## The idea

A country earns 130 in good years and 70 in bad ones, on a coin toss each year. Foreign lenders offer a deal: they pay the country 30 in every bad year, and it pays them 30 in every good year. The country then lives on 100 every year. For the lenders the deal is fair, since they pay 30 and collect 30 equally often.

A good year arrives and the country owes 30. No court can make it pay. If it refuses, it keeps the 30, and no lender deals with it again: 130 or 70, forever. So it weighs a gain taken once against a loss suffered every year after. For a country that dislikes swings as much as Example 1's does, keeping the 30 once is worth about five and a half years of insurance. What the future is worth depends on patience. If each year counts 0.9 as much as the one before, the whole future from next year on weighs as much as 9 years at today's weight (0.9 + 0.81 + 0.729 + ... adds up to 9), and the country pays. At 0.8 the future weighs 4 years, and it refuses.

The impatient country is not lost. Lenders can ask for less, say 20 in good years against 20 in bad. A smaller payment tempts less and still takes some of the sting out of bad years, and the 0.8 country will honor it. The largest payment a country will honor is its maximum sustainable debt. Patience raises it, and so, less obviously, does a bigger swing in income: the more the country needs insurance, the more it would lose by defaulting. A country with steady income has nothing to lose, and cannot be trusted with anything.

## The formal version

**Setup ([Eaton-Gersovitz](../reference.md#eaton-gersovitz)).** Each year the country's income is $y_H=\bar y+\sigma$ or $y_L=\bar y-\sigma$ with probability $\tfrac12$ each, independently across years; $\bar y$ is mean income and $\sigma>0$ the swing. The country maximizes $\sum_{t\ge0}\beta^t u(c_t)$, with $c_t$ consumption, $u$ increasing and strictly concave, and $\beta\in(0,1)$ its discount factor. Competitive, risk-neutral lenders discount at the same $\beta$, so they accept any contract with zero expected profit. The contract: the country pays $x$ in each good year and receives $x$ in each bad year, with $0\le x\le\sigma$; $x=\sigma$ is full insurance, consumption $\bar y$ always. Lenders are bound by the contract and the country is not. If it refuses a payment, it is excluded forever and consumes its income, $c_t=y_t$ (autarky). Let

$$W(x)=\tfrac12\,u(y_H-x)+\tfrac12\,u(y_L+x)$$

be expected utility in a year under the contract, so $W(0)$ is autarky's.

**The [participation constraint](../reference.md#participation-constraint).** In a good year, paying is worth $u(y_H-x)+\frac{\beta}{1-\beta}W(x)$ and refusing is worth $u(y_H)+\frac{\beta}{1-\beta}W(0)$. The contract is self-enforcing iff

$$u(y_H)-u(y_H-x)\ \le\ \frac{\beta}{1-\beta}\,\bigl[W(x)-W(0)\bigr].$$

*In words:* what refusing saves this year must not exceed the discounted value of all the future insurance it forfeits. In a bad year the country is being paid, so it never walks away then.

**Result 1 ([critical discount factor](../reference.md#critical-discount-factor)).** Let $G=u(y_H)-u(\bar y)$ be the one-time gain from refusing full insurance's payment, and $I=u(\bar y)-W(0)$ the value of insurance per year. At $x=\sigma$ the constraint reads $G\le\frac{\beta}{1-\beta}I$, so full insurance is self-enforcing iff

$$\beta\ \ge\ \beta^*=\frac{G}{G+I}.$$

*In words:* the country must be patient enough that a stream of insurance outweighs a single grab. This is grim trigger's threshold $(T-c)/(T-p)$ from [grad-game-theory 3.3](../../grad-game-theory/lessons/03-03-repeated-games-finite-infinite.md), with temptation $T=u(y_H)$, cooperative payoff $c=u(\bar y)$ and punishment payoff $p=W(0)$. Autarky is the country's minmax ([grad-game-theory 3.4](../../grad-game-theory/lessons/03-04-folk-theorems.md)): without a court the worst lenders can do is stop dealing, and the country can always eat its own income. So exclusion forever is the harshest threat available, and any contract the country prefers to autarky holds once $\beta$ is close enough to 1.

**Result 2 ([maximum sustainable debt](../reference.md#maximum-sustainable-debt)).** Below $\beta^*$ lenders can still offer less. The right side of the constraint minus the left is concave in $x$ and zero at $x=0$, so the self-enforcing payments form an interval $[0,\bar x]$, with $\bar x(\beta,\sigma)$ the largest $x\le\sigma$ that satisfies the constraint. *In words:* $\bar x$ is the most the country will pay, so the most lenders can let it owe; the ceiling comes from willingness, since the country could always afford $\sigma$. It rises with three things:

- **Patience** $\beta$, which puts more weight on the insurance to be lost.
- **The swing** $\sigma$. A bigger swing makes the forfeited insurance worth more, and at a given payment a richer good year makes paying cost less utility.
- **Risk aversion**, which raises the value of insurance: with [CRRA utility](../reference.md#crra-utility), $\bar x$ rises with the coefficient of relative risk aversion.

Insurance of any size needs the slack to rise at $x=0$; with log utility and $\bar y=1$ that means $\beta>1-\sigma$.

**Two readings of the contract.** Eaton and Gersovitz wrote the loan as non-contingent debt, borrowed in bad years, with default as the country's own escape; [6.4](06-04-the-arellano-model.md) solves that version. The contract here is [state-contingent debt](../reference.md#state-contingent-debt): what the country owes depends on the year, and in bad years it is negative, so what would be a default under a fixed payment is part of the deal. Grossman and Van Huyck (1988, *AER*) read sovereign debt this way, as a contingent claim on which a default that matches visibly bad times is [excusable](../reference.md#excusable-default) and costs no reputation, while repudiation is punished. And the same-terms contract is the simplest self-enforcing deal, not the best. Let the terms depend on the country's record, and Worrall (1990, *European Economic Review*) shows that debt is held down at first but in the long run consumption stops moving with income at all.

## Picture

![The largest self-enforcing good-year payment against the discount factor for two countries. Country A, income 1.3 or 0.7, rises from zero at 0.70 to full insurance of 0.30 at 0.848. Country B, income 1.15 or 0.85, rises from zero at 0.85 to full insurance of 0.15 at 0.925](assets/06-02-fig1.svg)

Each curve is $\bar x(\beta)$ with log utility: zero below $1-\sigma$, rising to full insurance at $\beta^*$, flat after. Blue is country A, red is country B, and the dots are the worked examples. A's curve is never below B's: the country with the bigger swing can always be trusted with at least as large a payment.

## Worked examples

**Example 1 (the model on a clean case).** Country A has $y_H=1.3$, $y_L=0.7$ and $u=\ln c$, so $u(\bar y)=\ln1=0$. Then $G=\ln1.3=0.2624$ and $W(0)=\tfrac12\ln(1.3\times0.7)=\tfrac12\ln0.91=-0.0472$, so $I=0.0472$. The temptation is worth $G/I=5.56$ years of insurance, and

$$\beta^*=\frac{0.2624}{0.2624+0.0472}=0.848.$$

- At $\beta=0.9$ the future weighs $\beta/(1-\beta)=9$ years: $9\times0.0472=0.424\ge0.262$. Full insurance holds, and A pays 0.30 in every good year.
- At $\beta=0.8$ it weighs 4 years: $4\times0.0472=0.189<0.262$, so full insurance fails. Solving the constraint numerically gives $\bar x=0.203$, with consumption 1.097 in good years and 0.903 in bad. Check: refusing 0.203 saves $\ln(1.3/1.097)=0.170$, and four years of the insurance that remains are worth $4\times\tfrac12\ln(1.097\times0.903/0.91)=0.170$.
- *Who gains and who pays.* Lenders break even at any $x$. Autarky costs A as much as a 4.6% cut in consumption (its certainty equivalent is $\sqrt{0.91}=0.954$), and at $\bar x=0.203$ that cost falls to 0.47%. A's inability to commit is paid for by A, in thinner insurance.

**Example 2 (why you'd care: volatility buys credit).** Country B has half A's swing: $y_H=1.15$, $y_L=0.85$, log utility. Now $G=\ln1.15=0.1398$ and $I=-\tfrac12\ln0.9775=0.0114$, so $G/I=12.3$ years. The temptation is roughly proportional to the swing and the insurance value to its square, so halving the swing roughly halves $G$ and cuts $I$ by three quarters. So $\beta^*_B=0.925$. At $\beta=0.9$, where A is fully insured, B's full insurance fails: $9\times0.0114=0.102<0.140$. Its ceiling is $\bar x_B=0.100$ (consumption 1.05 and 0.95), a third of what A can promise at the same patience, and below $\beta=0.85$ it is zero.

Two things follow. B still gets most of what insurance is worth: its autarky loss of 1.13% of consumption falls to 0.12% at the ceiling. And a model in which only the threat of exclusion enforces repayment predicts that the countries most in need of smoothing can borrow most on reputation. Whether the record fits is for the evidence. [history-of-debt 4.6](../../history-of-debt/lessons/04-06-bondholders-gunboats-and-receiverships.md) weighs Tomz's (2007) reading, in which lenders punished defaults without an excuse and forgave those that matched visible bad times, against the case for supersanctions. This lesson supplies the reputation side's model and leaves the crux there.

## Watch out

- **You might think exclusion enforces itself, but actually** it asks every lender to turn away a country that would gladly buy insurance again, at a premium a lender could pocket. If lenders take that business the threat is empty (P1 shows what a short exclusion does). Kletzer and Wright (2000, *AER*) show that lending can survive with no outside enforcement, using only renegotiation-proof changes in future payments in which whoever cheats, a rival lender included, is cheated in turn ([cheat the cheater](../reference.md#cheat-the-cheater)). The Genoese bankers of [history-of-debt 2.4](../../history-of-debt/lessons/02-04-lending-to-kings.md), who could cheat any member who broke a lending moratorium, ran that mechanism.
- **You might think steadier income makes a country a better credit, but actually** here the only thing that makes it pay is the insurance it would lose. With log utility and $\bar y=1$ a country whose swing is below $1-\beta$ can be trusted with no payment at all, and a risk-neutral one ($I=0$) with none at any $\beta$. Reputation needs a borrower who expects to need credit again.
- **You might think "reputation" means lenders learning what kind of government they face, but actually** every country here is the same, nothing is learned, and no default happens in equilibrium. Reputation is the lenders' strategy. Tomz's reading, where lenders sort governments by their record, needs a model with types.

## One-liner

> A country no court can touch repays only while the credit it would lose is worth more than the payment it would keep, so its largest sustainable debt rises with its patience and, because credit is insurance, with how much its income swings.

## Problems

**P1 (🟢) *(Formal (a)–(b) · Exegetical (c).)*** Country A of Example 1 ($y_H=1.3$, $y_L=0.7$, log utility, $\beta=0.9$) has full insurance. Creditors now readmit a defaulter after $N$ years of exclusion, to the same contract as before. (a) Write the participation constraint in terms of $G$, $I$, $\beta$ and $N$, and find the smallest $N$ that keeps full insurance self-enforcing. (b) Show that no exclusion of 5 years or fewer can sustain A's full insurance, however patient A is. (c) With $N=5$ and $\beta=0.9$, A's ceiling is 0.175 instead of 0.30. In two sentences, say who gains and who pays, after a default and before one, when creditors shorten exclusion from 10 years to 5.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** A country has utility $u(c)=c-c^2/4$ (increasing for $c<2$) and income $1+\sigma$ or $1-\sigma$ with equal probability, and a refusal brings permanent exclusion. (a) Show that the participation constraint for a payment $x>0$ reduces to $x\le2\sigma-2(1-\beta)$, so that $\bar x=\min\{\sigma,\,2\sigma-2(1-\beta)\}$ when $\sigma>1-\beta$ and $\bar x=0$ otherwise. (b) At $\beta=0.85$, find $\bar x$ for $\sigma=0.2$ and for $\sigma=0.25$, the smallest swing that supports any insurance, and the smallest that supports full insurance. (c) A larger swing raises the payment that full insurance requires. In two sentences, explain why it raises the ceiling anyway.

**P3 (🔴, optional) *(Formal (a)–(b) · Exegetical (c).)*** Country A, now with $\beta=0.95$. (a) It becomes common knowledge that from year $T+1$ on, A's income will be 1 every year. Show that A honors no payment in any year, however large $T$ is. (b) Suppose instead that each year, with probability $\rho$, A's income becomes 1 forever from the next year on. Show that the constraint becomes $G\le\frac{\tilde\beta}{1-\tilde\beta}I$ with $\tilde\beta=\beta(1-\rho)$, and find the largest $\rho$ at which full insurance holds. (c) [philosophy-of-debt 1.2](../../philosophy-of-debt/lessons/01-02-hume-promises-as-artificial-obligation.md)'s traveller borrows her fare on her last night in a port she will never revisit. In two sentences, say which part of this problem is her case, what this model predicts she does, and what it leaves to philosophy.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) · Exegetical (c).)*

(a) A refusal now forfeits insurance only in years $1,\dots,N$; from year $N+1$ on, both paths are the same. So the constraint is

$$G\ \le\ I\sum_{j=1}^{N}\beta^j=I\,\frac{\beta\,(1-\beta^N)}{1-\beta}.$$

At $\beta=0.9$ this is $9\,(1-0.9^N)\ge G/I=5.564$, so $0.9^N\le0.3818$ and $N\ge\ln0.3818/\ln0.9=9.14$. The smallest whole number is $N=10$. Check: $N=9$ gives $5.513\times0.04716=0.2600<0.2624$, which fails narrowly, and $N=10$ gives $5.862\times0.04716=0.2764\ge0.2624$.

(b) For $\beta<1$, $\sum_{j=1}^{N}\beta^j<N$, so with $N\le5$ the right side is below $5I=0.236<G=0.262$. Even an infinitely patient A needs at least $G/I=5.56$ years of forfeited insurance, so a punishment that ends within five years cannot deter it.

**Must hit, strict (c):**

- After a default the defaulter gains, getting insurance back five years sooner, and lenders lose nothing, since fair insurance earns them zero.
- Before any default every country pays: the ceiling falls from 0.30 to 0.175, so bad-year consumption drops from 1 to 0.875, including for countries that would never default.

**Wrong turns:** rounding $N\ge9.14$ down to 9; counting the forfeited insurance as the years after readmission, $I\beta^{N+1}/(1-\beta)$, instead of the years of exclusion; in (c), putting the cost of leniency on lenders, when with fair competitive pricing it lands on borrowers through the lower ceiling.

**Model answer (c):** After a default the defaulter gains, getting insurance back five years sooner, and lenders lose nothing, because fair insurance earns them zero. Before any default the shorter punishment cuts the ceiling from 0.30 to 0.175, so every country, including one that would never default, pays in bad-year consumption of 0.875 instead of 1; whether that trade is fair is [philosophy-of-debt 5.2](../../philosophy-of-debt/lessons/05-02-moral-hazard-and-fairness-to-those-who-paid.md)'s question.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) The temptation is $u(1+\sigma)-u(1+\sigma-x)=\tfrac{x}{4}\,(2-2\sigma+x)$. The insurance gain is $W(x)-W(0)=\tfrac{x}{4}\,(2\sigma-x)$: the linear parts of $u$ cancel because the contract is fair. With $k=\beta/(1-\beta)$, divide the constraint by $x/4$:

$$\begin{aligned}2-2\sigma+x\ \le\ k\,(2\sigma-x)&\iff x\,(1+k)\le2\sigma(1+k)-2\\&\iff x\le2\sigma-2(1-\beta),\end{aligned}$$

using $1+k=1/(1-\beta)$. The bound is positive iff $\sigma>1-\beta$, and a payment above $\sigma$ would over-insure, so $\bar x=\min\{\sigma,\,2\sigma-2(1-\beta)\}$.

(b) At $\beta=0.85$, $2(1-\beta)=0.3$. For $\sigma=0.2$: $\bar x=0.4-0.3=0.1$, half of full insurance (consumption 1.1 and 0.9). For $\sigma=0.25$: $\bar x=0.5-0.3=0.2$, 80 percent of it (consumption 1.05 and 0.95). Check at $\sigma=0.25$: the temptation is $0.05\times1.7=0.085$ and the insurance value $\tfrac{17}{3}\times0.05\times0.3=0.085$. Any insurance needs $\sigma>0.15$; full insurance needs $2\sigma-0.3\ge\sigma$, that is $\sigma\ge0.3$.

**Must hit, strict (c):**

- A larger swing makes the insurance that exclusion takes away worth more: the term $2\sigma-x$ rises.
- At a given payment it also makes paying cheaper in utility, because the good year is richer: the term $2-2\sigma+x$ falls. Together they lift the ceiling two for one, so it catches the full-insurance payment $\sigma$ at $\sigma=0.3$.

**Wrong turns:** in (a), keeping the linear terms in $W(x)-W(0)$; in (b), reporting the formula above $\sigma$ as the ceiling (at $\sigma=0.35$ it gives 0.40, but the country is fully insured at 0.35).

**Model answer (c):** The ceiling is set by what refusing would cost, and a larger swing makes the insurance lost by exclusion worth more while making any given payment cheaper in utility, since it comes out of a richer good year. Both push the ceiling up at twice the rate of the swing, so it overtakes the rising full-insurance payment at $\sigma=0.3$.

---

**P3** *(Formal (a)–(b) · Exegetical (c).)*

(a) Backward induction, as in [grad-game-theory 3.3](../../grad-game-theory/lessons/03-03-repeated-games-finite-infinite.md)'s finite horizon. In year $T$ a good-year payment buys nothing, since from $T+1$ there is nothing to insure and exclusion costs zero, so A refuses. Lenders foresee this and offer no insurance for year $T$. Then in year $T-1$ the future insurance is worth zero too, so A refuses, and so on back to the first year: however large $T$ is, the contract unravels.

(b) Volatility survives to year $t+j$ with probability $(1-\rho)^j$, and once it ends both paths give $u(1)$. So the forfeited value is $I\sum_{j\ge1}\beta^j(1-\rho)^j=I\,\tilde\beta/(1-\tilde\beta)$ with $\tilde\beta=\beta(1-\rho)$, while the temptation $G$ is unchanged. Full insurance needs $\tilde\beta\ge\beta^*=0.8476$, so $1-\rho\ge0.8476/0.95=0.8923$ and $\rho\le0.108$. Check: at $\rho=0.10$ the factor is $5.897$ and $5.897\times0.0472=0.278\ge0.262$; at $\rho=0.11$ it is $5.472$, giving $0.258<0.262$. A yearly chance above 10.8 percent of outgrowing the need, an expected wait of about nine years, breaks full insurance for a country whose certain future weighs 19 years.

**Must hit, strict (c):**

- She is (a) with year $T$ already reached: default costs her no credit she will ever need, so the model's only reason to repay is gone, and it predicts she keeps the fare.
- Whether she is bound anyway is philosophy's question: in [philosophy-of-debt 1.2](../../philosophy-of-debt/lessons/01-02-hume-promises-as-artificial-obligation.md) Hume holds that the duty, once formed, reaches beyond the cases whose interest produced it. The model is silent on that.

**Wrong turns:** in (a), arguing that a large $T$ leaves plenty of future to protect (the last year has none, and every earlier year inherits that); in (b), applying $1-\rho$ once instead of compounding it each year.

**Model answer (c):** Her case is (a) with the last year already here: defaulting costs her no future credit, so the only reason to repay in this model is gone and it predicts she keeps the fare. Whether she is still bound is the question philosophy-of-debt 1.2 answers with Hume's general rule, which outlives the interest that made it; the model has nothing to say about it.

</details>

## Flashback

**From Lesson [5.5](05-05-the-fiscal-theory-and-inflating-debt-away.md) (The fiscal theory and inflating debt away):** *(Formal (a) · Exegetical (b).)* A cashless economy has an active treasury and a passive central bank, so the price level clears the valuation equation $B/P=S$: $B$ is the nominal debt falling due now (interest included), $P$ the price level, and $S$ the present value of the real primary surpluses, this year's counted at face value and later ones discounted at the real rate $r=3\%$. The government owes $B=2{,}060$ in one-year bills and plans surpluses of 60 a year for ever, so $S=2{,}060$ and $P=1$. Take each piece of news separately. (i) This year's surplus will be 30 lower and nothing else changes. (ii) This year's surplus will be 30 lower, and every later surplus will be raised by the same amount $x$, chosen so that the price level does not move. (iii) Every surplus, this year's included, will be 5 percent lower for ever. (a) Find the price level after (i) and after (iii), and find $x$ in (ii). (b) In two sentences: why does (iii), a cut a tenth the size of (i) in each year, move prices more, and what does (ii) show about deficits?

<details>
<summary>Solution</summary>

(a) The baseline is consistent: $S=60\times\dfrac{1.03}{0.03}=2{,}060=B$. A surplus of 1 a year for ever is worth $1.03/0.03=34.3$ today, this year's included.

- (i) $S'=2{,}060-30=2{,}030$, so $P=B/S'=2{,}060/2{,}030=1.0148$: prices rise 1.5 percent, and bondholders lose 1.5 percent of the real value of their claim.
- (ii) Prices stay put only if $S'=S$, so the later surpluses must add 30 to the present value: $x/r=30$, so $x=0.03\times30=0.9$ a year for ever. The shortfall is repaid with interest, $S$ is unchanged, and $P=1$.
- (iii) Every surplus is 3 lower (5 percent of 60), so $S$ falls by $3\times1.03/0.03=103$ to 1,957, and $P=2{,}060/1{,}957=1.0526$: prices rise 5.3 percent, and bondholders lose exactly 5.0 percent of the real value, since $S$ itself has fallen 5 percent.

**Must hit:**

- The price level responds to the present value of the surpluses, not to any one year's: a cut of 3 a year for ever is worth 103 today, against 30 for (i), so (iii) moves prices 3.6 times as much (5.3 percent against 1.5).
- (i) and (ii) have the same deficit this year and differ only in whether it is repaid: in (ii) the present value is unchanged and prices do not move, so a deficit moves prices only if it is not expected to be repaid.

**Wrong turns:** reading (ii) as inflationary because this year's surplus fell, which repeats (i)'s 1.0148 instead of asking whether the present value fell; treating (iii) as a cut of 3 in a single year, which gives $S'=2{,}057$ and $P=1.0015$, when it is a cut of 3 in every year.

**Model answer:** The price level responds to the present value of surpluses, and a cut of 3 a year for ever is worth 103 today, more than three times the 30 lost in (i), so prices rise 5.3 percent instead of 1.5. (ii) has the same deficit as (i) but repays it with interest through later surpluses of 0.9 a year, which leaves the present value and the price level unchanged: a deficit raises prices only when it is not expected to be repaid.

</details>

## Connections

- **Backward:** in [1.1](01-01-costly-state-verification.md) a lender whose borrower could not pay verified the output and took everything there was; here nothing can be taken. A sovereign is [1.3](01-03-pledgeable-income-collateral-and-monitors.md)'s Hart-Moore borrower with a liquidation value of zero: all of its income can walk away, so it can pledge only what future credit makes it willing to pay. [5.3](05-03-tax-smoothing-and-optimal-debt.md)'s state-contingent debt assumed the government would honor it; this lesson asks when it would. [6.1](06-01-the-transfer-problem-and-original-sin.md) is ability to pay, the other half of the question.
- **Forward:** [6.3](06-03-bulow-rogoff-and-sanctions.md) asks whether exclusion from borrowing punishes at all if the country can save abroad and buy insurance with cash up front, and what sanctions add. [6.4](06-04-the-arellano-model.md) writes the contract as non-contingent bonds, lets default happen in equilibrium and prices it. [8.1](08-01-forgiveness-commitment-and-the-fresh-start.md) generalizes P1(c): relief that helps after the fact lowers what every borrower can borrow before it. [8.4](08-04-odious-debt-as-a-rule.md) returns to reputation with multiple equilibria.
- **Sideways:** the machinery is [grad-game-theory 3.3](../../grad-game-theory/lessons/03-03-repeated-games-finite-infinite.md)'s grim trigger and [3.4](../../grad-game-theory/lessons/03-04-folk-theorems.md)'s minmax. In the debt thread, [history-of-debt 4.6](../../history-of-debt/lessons/04-06-bondholders-gunboats-and-receiverships.md) weighs reputation against gunboats and maps the two onto this lesson and 6.3, and [history-of-debt 2.4](../../history-of-debt/lessons/02-04-lending-to-kings.md) has Philip II's contingent asientos and the Genoese coalition, excusable default and cheat-the-cheater in the record. [philosophy-of-debt 1.2](../../philosophy-of-debt/lessons/01-02-hume-promises-as-artificial-obligation.md) supplies Hume's penalty; whether a sovereign's promise binds beyond it is philosophy's question, not this course's.
