# Economics of Debt · Lesson 6.4: The Arellano model

> ⏱ ~15 min · Module 6: Sovereign default · Builds on: [6.2 Willingness to pay: reputation and Eaton-Gersovitz](06-02-reputation-and-eaton-gersovitz.md), [6.3 Bulow-Rogoff: why reputation is not enough, and what sanctions add](06-03-bulow-rogoff-and-sanctions.md), [grad-macro 1.5 Stochastic dynamic programming](../../grad-macro/lessons/01-05-stochastic-dynamic-programming.md) · Unlocks: [6.5 Self-fulfilling debt crises](06-05-self-fulfilling-debt-crises.md), [7.1 Haircuts, the debt Laffer curve and buybacks](07-01-haircuts-the-debt-laffer-curve-and-buybacks.md)

## Why this matters

Recent sovereign defaults have come with deep recessions and spiking interest rates: a country's borrowing rate climbs as its output falls, so credit is dearest exactly when the country most wants it. [6.2](06-02-reputation-and-eaton-gersovitz.md) asked why a sovereign repays at all, and [6.3](06-03-bulow-rogoff-and-sanctions.md) what punishment makes it. Arellano (2008, *AER*) built those answers into a model that can be computed and held against data: a small open economy with income shocks, one-period bonds, a government that defaults when that is better, and lenders who price the risk. Calibrated to Argentina and fed its output series, the model predicts the default of late 2001. It became the workhorse of quantitative sovereign debt.

## The idea

A country borrows abroad by selling one-year bonds. No court can make it pay. If it defaults, it is shut out of credit markets for a while and it loses output, but only in good times: a defaulting economy's output is capped, so an economy already below the cap loses nothing more. Arellano's reason for this shape is that default disrupts the private credit that production needs, and that shortage binds hardest when the economy would otherwise run well.

A miniature. Next year is the last, and income will be 0.9 (slump), 1 (normal) or 1.1 (boom). Default caps output at 0.95. With no future to protect, the country repays only a debt no larger than what defaulting would cost it, and default costs nothing after a slump, 0.05 after a normal year and 0.15 after a boom. So a promise to pay 0.1 is kept only in a boom, and lenders, who can earn 3 percent elsewhere, pay for it the probability of a boom divided by 1.03. Income is persistent: a boom follows a boom with probability 0.6 but follows a slump with probability 0.1. The same promise sells for $0.6/1.03\approx0.58$ when the country is in a boom and for $0.1/1.03\approx0.10$ when it is in a slump.

That is the model in small. In a slump every promise is cheap, so the country cannot borrow when it most wants to; and when it defaults, it defaults in a slump, where default costs least.

## The formal version

**Setup ([Arellano model](../reference.md#arellano-model)).** Income $y$ follows a Markov chain with transition probabilities $\pi(y'\mid y)$. The government maximizes $\mathbb E\sum_t\beta^t u(c_t)$, with discount factor $\beta$ and [CRRA utility](../reference.md#crra-utility) $u(c)=c^{1-\gamma}/(1-\gamma)$, where $\gamma$ is relative risk aversion. It sells one-period discount bonds: issuing face value $b'$, a promise to pay $b'$ next period, raises $q(b',y)\,b'$ today. A government in good standing that owes $b$ either repays or defaults. Default erases the debt and excludes the country from credit markets, as in [Eaton-Gersovitz](../reference.md#eaton-gersovitz). While excluded its output is $h(y)=\min(y,\hat y)$, and each period it regains access, with no debt, with probability $\theta$.

**Prices.** Lenders are risk neutral and competitive, with safe rate $r^*$. Zero expected profit on each bond gives the [bond price schedule](../reference.md#bond-price-schedule)

$$q(b',y)=\frac{1-\delta(b',y)}{1+r^*},\qquad \delta(b',y)=\sum_{y'}\pi(y'\mid y)\,D(b',y'),$$

where $D(b,y)=1$ if a government owing $b$ at income $y$ defaults and 0 if it repays. *In words:* a promise sells for the probability it is kept, discounted at the safe rate. This is [1.4](01-04-the-price-of-a-loan.md)'s [zero-profit loan rate](../reference.md#zero-profit-loan-rate) with no recovery, $1+i=(1+r^*)/(1-\delta)$, except that the borrower's own future choices set $\delta$, and today's $y$ matters only because it predicts tomorrow's.

**The government's problem.** Reload [grad-macro 1.5](../../grad-macro/lessons/01-05-stochastic-dynamic-programming.md): a stochastic Bellman equation is a deterministic one with the continuation value inside $\mathbb E[\,\cdot\mid y]$. Here

$$V^o(b,y)=\max\bigl\{V^c(b,y),\;V^d(y)\bigr\},$$

$$V^c(b,y)=\max_{b'}\Bigl\{u\bigl(y-b+q(b',y)\,b'\bigr)+\beta\,\mathbb E\bigl[V^o(b',y')\mid y\bigr]\Bigr\},$$

$$V^d(y)=u\bigl(h(y)\bigr)+\beta\,\mathbb E\bigl[\theta\,V^o(0,y')+(1-\theta)\,V^d(y')\mid y\bigr].$$

*In words:* with the option to default, take the better of repaying ($V^c$: pay $b$, sell new bonds, carry $b'$ forward) and defaulting ($V^d$: live on capped output until access returns, debt-free). The government defaults, $D(b,y)=1$, exactly when $V^d(y)>V^c(b,y)$; an indifferent government repays. The [default set](../reference.md#default-set) at debt $b$ is the set of incomes at which it defaults. An equilibrium is a fixed point: given $q$, the government's choices solve these equations, and given those choices, $q$ satisfies zero profit.

**Three results.**

1. *Default sets grow with debt* (Arellano's first proposition). $V^c$ falls as $b$ rises and $V^d$ does not depend on $b$, so for each $y$ there is a threshold $\bar b(y)$: repay if $b\le\bar b(y)$, default above it. *In words:* a bigger promise is broken in more states, so $q$ falls as $b'$ rises.
2. *Default comes in slumps.* With i.i.d. income, no output cost and permanent exclusion, Arellano proves that a government that defaults at some income also defaults at every lower one. A government that might default can never be a net borrower (if it could roll its debt over, it would, and default later on a larger debt), so repaying means paying out of income, which costs more utility the lower income is. With persistence and the output cost she finds the same pattern numerically, as does Example 2.
3. *The schedule is countercyclical.* With persistent income, a slump today makes a slump, and so a default, likelier next year: $\delta(b',y)$ is higher and $q(b',y)$ lower at every $b'$ when $y$ is low.

**The [asymmetric default cost](../reference.md#asymmetric-default-cost).** Under $h(y)=\min(y,\hat y)$, default costs $\max(0,\,y-\hat y)$ of output: nothing below the cap, more the richer the economy. Above $\hat y$ autarky's payoff stops rising with income while repaying's keeps rising, so the cap pushes default further into slumps, where it works as insurance. It also widens the range of face values that carry a positive but finite spread. Without output costs Arellano finds that range very narrow, too narrow to deliver the roughly three defaults a century she targets for Argentina.

**[Value function iteration](../reference.md#value-function-iteration), sketched.** Put $b$ on a grid and $y$ on a finite Markov chain. Guess values and a schedule, say every bond riskless. Then repeat: (i) given $q$, update $V^c$ by maximizing over the grid, update $V^d$ and $V^o$, and record $D$; (ii) reprice every bond from $D$. Stop when the values stop moving and the schedule stops changing.

## Picture

![Two step-shaped bond price schedules against face value. With income 5 percent above normal the price stays above 0.92 up to a face value near 0.32; with income 5 percent below normal it drops to 0.80 above about 0.10 and to 0.28 above about 0.19. The most the country can raise is 0.32 and 0.15](assets/06-04-fig1.svg)

Example 2's solved model: the price of new bonds with face value $b'$ when income is 5 percent below normal (red) and 5 percent above (blue). Each step down is one more income state next year in which that promise would be defaulted. Every promise sells for less in the slump (at $b'=0.15$, 0.80 against 0.97), and the most the country can raise, the highest $q\,b'$ (dots), is 0.15 against 0.32.

## Worked examples

**Example 1 (two periods, three states).** The idea's economy: next year is the last, $y'\in\{0.9,\,1,\,1.1\}$, $\hat y=0.95$ and $r^*=3\%$. From a slump the three incomes have probabilities 0.6, 0.3 and 0.1; from a boom, 0.1, 0.3 and 0.6. With no future, the government repays iff $y'-b'\ge h(y')$, that is iff $b'\le\max(0,\,y'-\hat y)$: up to 0, 0.05 and 0.15 in the three states. So a bond with $0<b'\le0.05$ is defaulted only after a slump, one with $0.05<b'\le0.15$ after a slump or a normal year, and anything larger always.

| Today | $q$ for $0<b'\le0.05$ | $q$ for $0.05<b'\le0.15$ | Most it can raise |
|---|---|---|---|
| Slump | $0.4/1.03=0.388$ | $0.1/1.03=0.097$ | 0.019, at $b'=0.05$ |
| Boom | $0.9/1.03=0.874$ | $0.6/1.03=0.583$ | 0.087, at $b'=0.15$ |

Since $q$ is flat on each step, $q\,b'$ is largest at a step's right end, so compare the ends: $0.05\times0.388=0.019$ beats $0.15\times0.097=0.015$ in the slump, and $0.15\times0.583=0.087$ beats $0.05\times0.874=0.044$ in the boom. A government in a boom can raise four and a half times as much. Every positive promise is risky here, since default after a slump is free; in the infinite horizon, lost market access makes default costlier, so small debts become safe.

**Example 2 (why you'd care: the model solved).** One period is a year. Log income follows an AR(1) with persistence 0.85 and shock standard deviation 0.04, discretized into an 11-state Markov chain (Rouwenhorst's method) whose states include normal income 1 and, about 5 percent either side, 0.953 and 1.049. Set $\beta=0.90$, $r^*=3\%$, $\gamma=2$, $\theta=0.2$ (five years of exclusion on average) and $\hat y=0.92$, and put debt on a grid of 1,251 points from $-0.05$ to 1.2. Value function iteration converges in 207 sweeps, and two other starting guesses reach the same equilibrium. The default thresholds are $\bar b=0.19$ when income is 5 percent below normal, 0.32 at normal and 0.47 at 5 percent above.

Follow a country owing 0.15. In a normal year it issues 0.181, raises 0.170 and runs a trade deficit, consuming 2 percent more than its income. If income is instead 5 percent below normal, the price drops from 0.95 to 0.80 for any face value above 0.104, so it issues only 0.104, raises 0.099 and must run a trade surplus of 5.4 percent of income, squeezing consumption in the slump. At 9 percent below normal it defaults.

In the long run the country defaults about once every 71 years, always with income at least 5 percent below normal and 11 percent below on average. Debt averages 0.155 of normal income and the spread 1.6 points. The spread and the trade balance both fall as output rises (correlations $-0.35$ and $-0.16$), and borrowing rises with it ($+0.87$): Arellano's cyclical facts in small.

*Who gains and who pays.* Lenders break even. The face value written off, about 0.22 percent of normal income a year, is exactly what spreads collect above the safe return, so the country gets back in defaults what it pays in spreads. Its net cost is the output lost while excluded, another 0.22 percent a year, which nobody receives. Delete the output cost, $h(y)=y$, and the solver finds no borrowing at all: a country this impatient never saves, so exclusion from a market that would lend it nothing costs it nothing, and lenders lend nothing. Arellano, citing Aguiar and Gopinath (2006, *JIE*), makes a similar point: exclusion alone sustains little debt, because income fluctuations cost little welfare. Their own model adds shocks to trend growth: a good one raises future income more than today's, so the country borrows more in good times, at lower rates, matching emerging markets' countercyclical interest rates and net exports.

## Watch out

- **You might think the temptation to default peaks in booms,** as in an insurance contract of the kind [6.2](06-02-reputation-and-eaton-gersovitz.md) studies, where the country pays out in good times. **But actually** non-contingent debt falls due in full in every state, and paying it hurts most in a slump, which is also when the cap makes default cheapest. Arellano stresses this contrast with complete-market models.
- **You might think the asymmetric cost is what makes default come in bad times, but actually** risk aversion alone does (result 2). The cap sharpens the pattern and widens the band of debt with a finite spread, which is why Arellano needs it.
- **You might think VFI must converge because [grad-macro 1.2](../../grad-macro/lessons/01-02-principle-of-optimality.md)'s contraction argument applies, but actually** that argument covers only the government's problem for a given $q$. The equilibrium is a joint fixed point in values and prices, and nothing in that argument makes the joint loop converge or its limit unique. Converge the schedule too, and restart from other guesses.
- **You might think history ties slumps to defaults as tightly as the model does, but actually** Tomz and Wright (2007, *JEEA*) find the link weak: of 169 defaults since 1820, about 62 percent began with output below trend, on average only 1.6 percent below. In Example 2 every default begins in a slump, 11 percent deep on average.

## One-liner

> Price every promise by the chance it will be broken, let a risk-averse country with non-contingent debt choose when to break it, and default lands in slumps, so credit tightens exactly when the country most needs it.

## Problems

**P1 (🟢) *(Formal.)*** Two periods again: next year is the last, its income is 0.92, 1 or 1.08, default caps output at $\hat y=0.97$, and $r^*=4\%$. From a slump today, next year's three incomes have probabilities 0.5, 0.3 and 0.2; from a boom, 0.2, 0.3 and 0.5. (a) For each face value $b'$, after which incomes will the government default next year? (b) Write $q(b',y)$ for a government in a slump and for one in a boom today. (c) Find the most each can raise today and the face value that raises it. Can a government in a slump raise 0.03?

**P2 (🟡) *(Exegetical (a)–(b).)*** In emerging-market data, spreads and the trade balance $y-c$ both rise when output falls. (a) Two stories deliver the countercyclical spreads. *Story 1:* income is i.i.d., so the schedule $q(b')$ is the same in every state, and in a slump the government borrows more to smooth consumption, moving to a higher spread. *Story 2:* income is persistent, so a slump lowers $q(b',y)$ at every $b'$. What does each story predict for the trade balance in a slump, and which fits the data? (b) An invented finance minister, whose country owes 0.15 in Example 2's model, says: "When output fell 5 percent our spread fell from 3.6 to 2.1 points, so our credit has improved." In two sentences, say why the model rejects this.

**P3 (🔴, optional) *(Formal (a)–(b) · Exegetical (c).)*** Two periods, no persistence: next year is the last, and its income is 0.88 with probability 0.4 or 1.08 with probability 0.6. The safe rate is $r^*=2\%$, and the government must raise 0.05 today. Compare two default costs of the same expected size: (A) Arellano's cap, $h(y)=\min(y,0.94)$; (B) a fixed loss of 0.084 of output in either state. (a) Under each, find the bond price, the face value the government must issue, and the states in which it defaults. (b) Find next year's consumption in each state under A and under B. Which does a risk-averse government prefer, and do lenders gain or lose from the difference? (c) In two sentences, what does the cap's shape do in Arellano's model that a fixed loss does not?

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) With no future, the government repays iff $b'\le\max(0,\,y'-0.97)$: 0 after 0.92, 0.03 after 1 and 0.11 after 1.08. A bond with $0<b'\le0.03$ is defaulted only after a slump, one with $0.03<b'\le0.11$ after a slump or a normal year, and anything above 0.11 always.

(b) From a slump:

$$q=\frac{0.3+0.2}{1.04}=0.481\ \text{ on } (0,0.03],\qquad q=\frac{0.2}{1.04}=0.192\ \text{ on } (0.03,0.11],$$

and 0 above. From a boom: $0.8/1.04=0.769$ on $(0,0.03]$, $0.5/1.04=0.481$ on $(0.03,0.11]$, and 0 above.

(c) $q\,b'$ peaks at a step's right end, so compare the two ends. In a slump, $0.03\times0.481=0.014$ against $0.11\times0.192=0.021$: the most it can raise is 0.021, by issuing 0.11, a bond repaid only after a boom. In a boom, $0.03\times0.769=0.023$ against $0.11\times0.481=0.053$: the most is 0.053, also at 0.11. So a government in a slump cannot raise 0.03 at any face value. One in a boom can, but not on the first step, which tops out at 0.023: it must issue $0.03/0.481=0.062$.

**Wrong turns:** stopping at the first step in the slump (0.014), when here the larger, riskier bond raises more, unlike Example 1; counting $b'=0.03$ as defaulted after a normal year, when repaying leaves exactly $0.97=h(1)$ and an indifferent government repays.

---

**P2** *(Exegetical (a)–(b).)*

**Must hit, strict (a):**

- Story 1: the government borrows more in a slump, so $q\,b'$ rises and the trade balance $y-c=b-q\,b'$ falls. It predicts deficits in slumps, a procyclical trade balance.
- Story 2: the lower schedule makes borrowing dear, so the government borrows less and pays down more. It predicts surpluses in slumps, a countercyclical trade balance, which is what the data show. Persistence is the ingredient that fits.

**Must hit, strict (b):**

- The spread is the schedule evaluated at the face value chosen. The slump moved the whole schedule down (the 0.181 the country issued in a normal year would now sell at 0.80, a spread of about 22 points), so it issued only 0.104 at a lower spread.
- Its credit worsened: the most it can raise fell from 0.24 to 0.155, and it had to run a trade surplus of 5.4 percent of income in the slump.

**Wrong turns:** in (a), matching story 1 with procyclical spreads, when both stories give countercyclical spreads and only the trade balance tells them apart; in (b), reading a spread as the price of credit in general, when it is the price of one particular promise.

**Model answer (a):** In story 1 the slump government borrows more, so the trade balance falls and slumps bring deficits; in story 2 the schedule shifts down, the government borrows less and repays more, so slumps bring surpluses. The data's countercyclical trade balance picks story 2. Re-solving Example 2 with i.i.d. income drawn from the same distribution gives a trade-balance correlation with output of $+0.69$ and borrowing that falls with output ($-0.79$), against $-0.16$ and $+0.87$ with persistence; Arellano makes the same point.

**Model answer (b):** A spread prices the particular bond issued, and the slump lowered the price of every bond, so the country moved to a smaller, safer one, and its spread fell only because it borrowed less on worse terms. The most it can now raise has fallen from 0.24 to 0.155, which is why it had to run a trade surplus in the slump.

---

**P3** *(Formal (a)–(b) · Exegetical (c).)*

(a) A: after 0.88 the cap does not bind, so default is free and any debt is defaulted; after 1.08 default costs $1.08-0.94=0.14$. Every $0<b'\le0.14$ is repaid only in the boom, so $q=0.6/1.02=0.588$ and $b'=0.05/0.588=0.085$: default after 0.88, repay after 1.08, a promised yield of 70 percent. B: default costs 0.084 in both states (the same as A's expected cost, $0.6\times0.14$), so any $b'\le0.084$ is riskless at $q=1/1.02=0.980$ and anything larger is worthless. It issues $b'=0.05\times1.02=0.051$ and repays in both states.

(b) A: consumption 0.88 in the slump and $1.08-0.085=0.995$ in the boom. B: $0.88-0.051=0.829$ and $1.08-0.051=1.029$. Both average 0.949, and B is A plus a fair gamble ($-0.051$ with probability 0.4, $+0.034$ with probability 0.6), so every risk-averse government prefers A. With log utility the certainty equivalents are 0.947 and 0.944. Lenders expect $0.6\times0.085=0.051=0.05\times1.02$ under both, so they break even either way and the whole gain is the country's.

**Must hit, strict (c):**

- The cap puts the penalty in good states, so the capacity to repay rises with income and default lands in slumps, where it is cheap: the non-contingent bond becomes a claim paid mostly in booms, and default works as insurance.
- It creates a band of face values priced at a finite spread (all of $(0,0.14]$ at 0.588) where the fixed loss gives a cliff (riskless up to 0.084, worthless beyond). That band is what lets risky borrowing and default occur in equilibrium, and Arellano chose the shape to match a realistic default frequency.

**Wrong turns:** calling A worse because the government defaults, when the default is priced into the bond and lenders are paid for it in advance; pricing A's bond at $1/1.02$, as if the slump did not always bring default.

**Model answer (c):** Arellano's cap makes default cheap in slumps and dear in booms, so default arrives in bad states and turns a fixed-payment bond into partial insurance. It also replaces the fixed loss's cliff between riskless and worthless debt with a band of debt at finite spreads, which is where risky borrowing, and default in equilibrium, can live.

</details>

## Flashback

**From Lesson [6.2](06-02-reputation-and-eaton-gersovitz.md) (Willingness to pay: reputation and Eaton-Gersovitz):** *(Formal.)* An invented country has utility $u(c)=-1/c$ (relative risk aversion 2) and discount factor $\beta$. Each year its income is 1.12 or 0.88 with equal probability, independently across years. Competitive, risk-neutral lenders, who discount at the same $\beta$, offer a contract under which the country pays 0.08 in a good year and receives 0.08 in a bad year, so that it consumes 1.04 or 0.96 instead of 1.12 or 0.88. No court can enforce it: a country that refuses a payment is shut out of every contract for ever and lives on its own income (autarky). (a) Find the smallest $\beta$ at which the country honors the contract. (b) A sure consumption every year is worth the same to the country as a risky arrangement if it gives the same expected utility. Find that sure consumption for autarky and for the contract, and say what share of autarky's shortfall from 1, the consumption full insurance would give, the contract removes.

<details>
<summary>Solution</summary>

Write $W(x)=\tfrac12u(1.12-x)+\tfrac12u(0.88+x)$ for expected utility in a year when the good-year payment is $x$, so $W(0)$ is autarky's, and $k=\beta/(1-\beta)$ for the weight of all the years after this one. In a bad year the country is being paid and never refuses. In a good year it pays iff what refusing saves this year is at most the discounted value of the insurance it would lose.

(a) Refusing saves $u(1.12)-u(1.04)=1/1.04-1/1.12=0.96154-0.89286=0.06868$ this year. The contract is worth $W(0.08)=-\tfrac12\,(1/1.04+1/0.96)=-1.00160$ a year and autarky $W(0)=-\tfrac12\,(1/1.12+1/0.88)=-1.01461$, so the insurance is worth $0.01301$ a year. The country pays iff

$$0.06868\le k\times0.01301\iff k\ge5.28\iff\beta\ge\frac{5.28}{6.28}=0.841.$$

The one-year temptation, 0.06868, is worth 5.28 years of the contract's insurance, so the future must weigh at least that much. For comparison, full insurance (payment 0.12) has a temptation of $u(1.12)-u(1)=0.1071$ against insurance worth $0.01461$ a year, 7.33 years' worth, and needs $\beta\ge0.88$: the last third of the payment costs another 0.039 of patience.

(b) A sure consumption $c$ is worth $-1/c$, so an expected utility $W$ is worth the sure consumption $-1/W$. Autarky: $1/1.01461=0.9856$, a shortfall of 1.44 percent from 1. The contract: $1/1.00160=0.9984$, a shortfall of 0.16 percent. The contract removes $(1.44-0.16)/1.44=8/9$ of the shortfall, using two thirds of full insurance's payment.

**Wrong turns:** weighting the lost insurance by $1/(1-\beta)$, which also counts this year's and gives $\beta\ge0.811$; reusing the full-insurance threshold, 0.88, for a partial contract, which overstates the patience it needs; in (b), averaging incomes instead of utilities, which makes autarky look free.

</details>

## Connections

- **Backward:** [6.2](06-02-reputation-and-eaton-gersovitz.md)'s exclusion is the punishment here too, now with re-entry. [6.3](06-03-bulow-rogoff-and-sanctions.md) showed that reputation alone supports no lending when a defaulter can still save abroad. Arellano's defaulter can neither borrow nor save, which rules that deviation out by assumption, yet Example 2 reaches the same verdict by another route: without the output cost, a sanction in 6.3's sense, this impatient country values market access at nothing, so nothing can be borrowed. 6.2 also reads a default in visibly bad times as excusable (Grossman and Van Huyck); here such defaults are priced into every bond. The price schedule is [1.4](01-04-the-price-of-a-loan.md)'s zero-profit rate, and its peak, the most a country can raise, is [1.1](01-01-costly-state-verification.md)'s lender revenue ceiling in a new setting (Arellano calls it a Laffer curve for borrowing): past it, a larger promise raises less. The government's problem is [grad-macro 1.5](../../grad-macro/lessons/01-05-stochastic-dynamic-programming.md)'s stochastic Bellman equation with a default option.
- **Forward:** [6.5](06-05-self-fulfilling-debt-crises.md) changes the timing so that lenders' refusal to roll over can itself cause a default the fundamentals would not. [7.1](07-01-haircuts-the-debt-laffer-curve-and-buybacks.md) measures the haircuts of real restructurings, which this model's all-or-nothing default leaves out, and finds a Laffer curve in debt already owed. [8.3](08-03-relief-written-into-the-contract.md) writes into the contract the state contingency that default supplies here.
- **Sideways:** [grad-macro 5.2](../../grad-macro/lessons/05-02-precautionary-saving.md)'s borrowing constraint is fixed; here lenders set it, and it tightens in slumps. In the debt thread, Tomz's finding that defaults matching visible bad luck were forgiven more readily ([history-of-debt 4.6](../../history-of-debt/lessons/04-06-bondholders-gunboats-and-receiverships.md)) is the historical cousin of a default priced into bad states. Argentina's default of December 2001, and the holdouts who litigated after it, are [history-of-debt 6.3](../../history-of-debt/lessons/06-03-holdouts-and-the-law-of-sovereign-restructuring.md)'s. In this model every default is a choice, so [history-of-debt 5.2](../../history-of-debt/lessons/05-02-could-germany-pay.md)'s question, cannot pay or will not, always resolves to "will not", taken when paying costs most. Whether a slump excuses non-payment is a question of the kind [philosophy-of-debt 1.3](../../philosophy-of-debt/lessons/01-03-promising-after-hume.md) asks about excusing conditions; this lesson only prices it.
