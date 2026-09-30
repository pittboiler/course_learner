# Economics of Debt · Lesson 5.3: Tax smoothing and optimal debt

> ⏱ ~15 min · Module 5: Public debt · Builds on: [5.1 The government budget constraint and debt dynamics](05-01-the-government-budget-constraint.md), [`grad-macro` 5.1 Permanent income](../../grad-macro/lessons/05-01-permanent-income-life-cycle.md) · Unlocks: [5.4 Fiscal limits and unpleasant arithmetic](05-04-fiscal-limits-and-unpleasant-arithmetic.md), [8.3 Relief written into the contract](08-03-relief-written-into-the-contract.md)

## Why this matters

[5.1](05-01-the-government-budget-constraint.md) tells you which paths of taxes and debt are feasible. It does not tell you which one to pick. When a war, a pandemic or a deep slump doubles spending for a year or two, should taxes jump to match, or should debt take the hit? Robert Barro (1979, *JPE*) gave the benchmark answer: borrow for the temporary part, and raise taxes a little, forever. The rule explains why debt ratios jump in wars and then linger for decades, and why a deficit is not by itself a sign of fiscal failure. It also makes the first efficiency case for debt whose payments depend on the state of the world, the idea behind [8.3](08-03-relief-written-into-the-contract.md).

## The idea

A tax costs more than the revenue it raises, because it discourages the work, saving and trade it falls on. That deadweight loss grows roughly with the *square* of the tax rate: doubling a rate about quadruples the loss (the Harberger triangle of [`public-economics`](../../public-economics/syllabus.md) Module 2). So a tax spike is disproportionately expensive. Take two years that must raise the same revenue. Taxing at 10 percent and then 30 percent costs $1+9=10$ units (a 10 percent rate costs 1), while 20 and 20 costs $4+4=8$. Spreading the burden evenly saves a fifth.

A government facing a two-year war should therefore act like Friedman's household facing a one-off expense ([`grad-macro` 5.1](../../grad-macro/lessons/05-01-permanent-income-life-cycle.md)). It does not starve for two years. It borrows and pays back slowly, which here means raising the tax rate by just enough, forever, to cover the interest on the war debt. The tax rate plays the part of consumption, and debt the part of negative savings. Three consequences follow.

- **Deficits absorb temporary spending, and permanent spending is taxed at once.** A war is financed mostly by borrowing, a permanent new program by taxes.
- **The tax rate moves only on news.** Like consumption in Hall's model, it jumps when expected spending changes, and otherwise stays put.
- **Debt has no target level.** It is whatever the history of surprises left behind.

Now suppose the government could buy insurance against war by issuing bonds that pay less if war breaks out. Then it would not need even the small permanent tax rise, because the bondholders would absorb the shock. That is Lucas and Stokey's refinement. Without such bonds (Aiyagari, Marcet, Sargent and Seppälä), the government is back in Barro's world, with a twist: it may want to save for the rainy day.

## The formal version

**Setup.** GDP is 1 every year, so every quantity is a share of GDP. (With trend growth $g$, measure shares and replace $r$ by $(r-g)/(1+g)$ as in 5.1, assuming $r>g$.) In year $t$ spending is $G_t$, taken as given, the tax rate is $\tau_t$ (which is also revenue), and $d_t$ is debt at the start of the year. The real interest rate $r$ is constant. The flow constraint is 5.1's [identity](../reference.md#debt-ratio-dynamics) with $g=0$:

$$d_{t+1}=(1+r)\,d_t+G_t-\tau_t.$$

*In words:* debt grows by its interest plus the primary deficit. Iterating forward and ruling out Ponzi schemes gives the [intertemporal budget constraint](../reference.md#intertemporal-budget-constraint)

$$\sum_{t\ge0}\frac{\tau_t}{(1+r)^t}=(1+r)\,d_0+\sum_{t\ge0}\frac{G_t}{(1+r)^t}.$$

*In words:* the present value of taxes must cover the debt, with this year's interest, plus the present value of spending. The constraint fixes this total only. It leaves the timing of taxes free.

**Distortions.** A tax rate $\tau$ causes a deadweight loss of $f(\tau)$ that year, with $f'>0$ and $f''>0$: a [convex distortion cost](../reference.md#convex-distortion-cost). For closed forms, take $f(\tau)=\kappa\tau^2$ with $\kappa>0$. The government minimizes the present value of distortions, $\sum_t f(\tau_t)/(1+r)^t$, subject to the budget constraint, discounting at the rate at which it borrows (the analogue of Hall's $\beta(1+r)=1$).

**Result (Barro).** The first-order condition is $f'(\tau_t)=\lambda$ in every year, where $\lambda$ is the multiplier on the budget constraint. So the tax rate is constant, and at every date

$$\tau_t=r\,d_t+G^P_t,\qquad G^P_t\equiv\frac{r}{1+r}\sum_{s\ge0}\frac{G_{t+s}}{(1+r)^s}.$$

*In words:* tax at the rate that pays the interest on the debt plus [permanent spending](../reference.md#permanent-spending), the annuity value of the whole spending path. Substituting into the flow constraint gives $d_{t+1}-d_t=G_t-G^P_t$: the deficit absorbs exactly the temporary part of spending. This is [tax smoothing](../reference.md#tax-smoothing). It is Friedman's rule, consumption equals the annuity value of wealth, with obligations in place of wealth.

**Uncertainty.** Now let $G_t$ be random, and let the government issue only one-year safe debt. Suppose it cuts this year's rate by a small $\varepsilon$, borrows $\varepsilon$, and raises next year's rate by $(1+r)\varepsilon$ to repay. That saves $f'(\tau_t)\,\varepsilon$ now and costs $\mathbb{E}_t f'(\tau_{t+1})\,\varepsilon$ in present value. At the optimum the two are equal:

$$f'(\tau_t)=\mathbb{E}_t\,f'(\tau_{t+1}),\quad\text{so}\quad \mathbb{E}_t\,\tau_{t+1}=\tau_t\ \text{ when } f=\kappa\tau^2.$$

*In words:* the tax rate is a [martingale](../reference.md#tax-rate-martingale), and today's rate is the best forecast of every future rate. This is Hall's random walk with $f'$ in place of $u'$. The rule $\tau_t=r\,d_t+G^P_t$ still holds, with expected spending inside $G^P_t$, and the rate changes only when those expectations change:

$$\tau_{t+1}-\tau_t=\frac{r}{1+r}\,\big(\mathbb{E}_{t+1}-\mathbb{E}_t\big)\sum_{s\ge0}\frac{G_{t+1+s}}{(1+r)^s}.$$

*In words:* every surprise moves the tax rate by its annuity value, permanently. When spending is stationary, debt inherits the unit root, because nothing pulls it back to a target.

**Contingent debt (Lucas and Stokey).** Suppose instead the government can sell claims that pay only in a named state next year, and risk-neutral lenders price each claim at the state's probability divided by $1+r$. The same perturbation, done state by state, gives $f'(\tau_t)=f'(\tau_{t+1}(s))$ for every state $s$. The tax rate is now equal across states as well as across dates. The absorbing is done by [state-contingent debt](../reference.md#state-contingent-debt), whose payoff falls in the states where spending is high. Lucas and Stokey (1983, *JME*) derived the general-equilibrium version, with labor taxes and with the debt priced by the households who hold it. There the tax rate depends only on the current state of spending, never on its history. *In words:* taxes inherit the persistence of spending rather than a random walk, and a past war leaves no mark on today's rate.

**Incomplete markets.** Aiyagari, Marcet, Sargent and Seppälä (2002, *JPE*) keep Lucas and Stokey's economy but allow only risk-free debt. Within a period, taxes and deficits respond to spending much as they do in Lucas and Stokey's model. But debt and taxes acquire a near-unit-root component, so Barro's random walk returns in general equilibrium. The authors also show that without an ad hoc cap on the government's assets, the outcome can drift far from Barro's. In a special case with utility linear in consumption, the government keeps saving until the interest on its assets pays for all spending, and the tax rate goes to zero. Missing insurance creates a precautionary motive, and the government builds a war chest.

## Picture

![Two panels over years minus 2 to 9. Top: under a balanced budget the tax rate jumps from 18 to 28 percent for the two war years, then returns to 18; under smoothing it rises once, to 18.93 percent, and stays. Bottom: under smoothing, debt climbs to 9.07 and then 18.59 percent of GDP and stays there; under a balanced budget it is zero](assets/05-03-fig1.svg)

The figure plots Example 1. Read the panels together: the red spike on top is what the blue debt ramp below pays for. After the war the smoothing rate sits 0.93 points above the peacetime rate forever, and that is exactly the interest on the war debt.

## Worked examples

**Example 1 (clean): a two-year war.** Invented numbers: $r=5\%$, peacetime spending $0.18$, no initial debt. At the start of year 0 a war breaks out, and everyone knows it will add $0.10$ to spending in years 0 and 1.

- *Balanced budget:* $\tau=0.28$ in years 0 and 1, then $0.18$.
- *Smoothing:* here $r/(1+r)=1/21$. The war's present value is $0.10\,(1+1/1.05)=0.1952$, so permanent spending rises by $0.1952/21=0.0093$ and $\tau=0.1893$ from year 0 on.
- *Debt:* $d_1=0.28-0.1893=0.0907$ and $d_2=1.05\times0.0907+0.0907=0.1859$. Debt then stays at 0.1859, because its interest, $0.05\times0.1859=0.0093$, is exactly the surcharge.
- *Distortions*, in units of $\kappa$: the balanced budget costs $0.28^2+0.28^2/1.05+0.18^2\times19.0476=0.7702$, where 19.0476 is the year-0 value of 1 a year from year 2 on. Smoothing costs $0.1893^2\times21=0.7525$. That is 2.3 percent less in total, and the war's own extra distortion, measured against 0.18 forever, falls by about a fifth, from 0.0898 to 0.0721.

Where does the saving come from? Write any tax path that raises the same present value as $\tau_t=\bar\tau+e_t$, where $\bar\tau$ is the smooth rate. The deviations $e_t$ have zero present value, so the cross term in $\kappa(\bar\tau+e_t)^2$ drops out, and the extra cost is exactly $\kappa\sum_t e_t^2/(1+r)^t$. Here that is $0.0907^2\,(1+1/1.05)+0.0093^2\times19.0476=0.0177$, the whole gap. Both policies pay the same first-order cost. Smoothing wins on the squares. As for who pays: under the balanced budget the war years' taxpayers carry the whole war at 28 percent. Under smoothing they pay 18.93 percent, and every later year pays 0.93 points more, forever, to the bondholders who lent 0.1859.

**Example 2 (why you'd care): a war as a risk, and a bond that insures it.** Same $r$ and peacetime spending. Now the war is uncertain: in year 1, with probability $\pi=1/4$, a one-year war adds $W=0.10$, and otherwise peace continues. Year 0's rate already includes the expected war's annuity value, $\pi W/(1.05\times21)=0.0011$.

- *Safe debt only (Barro).* If war comes, the expected present value of spending rises by $(1-\pi)W=0.075$, so the tax rate rises by $0.075/21=0.0036$ (0.36 points), forever. If peace comes, the rate falls by $\pi W/21=0.0012$. The expected change is $\tfrac14(0.0036)-\tfrac34(0.0012)=0$: the martingale at work.
- *Contingent debt (Lucas and Stokey, in Barro's setting).* Replace the safe bond with one whose year-1 payment is $0.025$ above the safe bond's if peace comes and $0.075$ below it if war comes. Its expected payoff is unchanged, since $\tfrac34(0.025)=\tfrac14(0.075)$, so risk-neutral lenders pay the same price for it. The bond pays for the war and the tax rate never moves.

Who pays: with the safe bond, if war comes, every later taxpayer pays 0.36 points more forever. With the contingent bond, bondholders get 0.075 less in the war state and are paid for that risk in the peace state. Nothing is breached, because the low payment is written into the contract and priced at issue. If lenders are risk-averse and wars hurt them too, this insurance carries a premium. Why such debt is rare in practice is [8.3](08-03-relief-written-into-the-contract.md)'s question, and the answer goes back to verification ([1.1](01-01-costly-state-verification.md)).

## Watch out

- **You might think smoothing means smooth revenue, but actually it smooths the tax *rate*.** When a slump shrinks the tax base, a smooth rate collects less and the deficit absorbs the shortfall. Balancing the budget would instead need a higher rate just when the base is small.
- **You might think a martingale tax rate never changes, but actually only its forecast is flat.** $\mathbb{E}_t\tau_{t+1}=\tau_t$ says the rate is expected to stay put, not that it will, and each surprise moves it for good. An anticipated war moves the rate on the day it is announced, not the day the fighting starts.
- **You might think contingent debt is a polite default, but actually it is the opposite.** A default breaks a promise. A contingent bond keeps a promise whose low payment in the bad state was priced at issue and paid for in the good state.
- **You might think smoothing licenses deficits in general, but actually it licenses them only for the temporary part of spending.** A permanent program raises $G^P$ one-for-one and is taxed in full at once.

## One-liner

> Deadweight loss grows with the square of the tax rate, so spread any temporary cost over forever: borrow for the spike, raise taxes by its annuity value, and let debt (or better, a bond that pays less in bad states) absorb the shock.

## Problems

**P1 (🟢) *(Formal.)*** Invented numbers: GDP is 1 every year, $r=3\%$, debt at the start of year 0 is $0.50$, spending has long been expected to stay at $0.22$ forever, and the government smooths with quadratic distortion costs. (a) Find the tax rate. At the start of year 0, news arrives. (b) Spending will rise by $0.05$ permanently, starting in year 0. Find the new tax rate and the debt at the start of year 3. (c) Suppose instead that spending will be $0.05$ higher in years 2 and 3 only, a program announced in advance. Find the new tax rate, the debt at the start of years 2 and 4, and the year in which the tax rate changes. Round to four decimals.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** An invented island: GDP is 1 every year and $r=2\%$. In year 1, with probability $0.2$, a hurricane strikes and raises reconstruction spending by $0.04$ in each of years 1 and 2; otherwise nothing changes. The government smooths with quadratic costs. (a) With only safe one-year debt, by how much does the tax rate change in year 1 if the hurricane strikes, and if it does not? Check that the expected change is zero. (b) Instead, the government issues a hurricane bond so that its tax rate never moves. By how much must the bond's year-1 payment exceed the safe bond's if no hurricane strikes, and fall short of it if one does? Show that risk-neutral lenders pay the same price for both bonds. (c) The hurricane strikes, and holders of the hurricane bond receive less than safe-bond holders would have. Is that a default? Say who bore the hurricane's cost and how they were paid for bearing it. Two sentences.

**P3 (🔴, optional) *(Formal (a)–(b) · Exegetical (c).)*** An invented country ends a war owing $0.30$ of GDP at the start of year 0. GDP is 1, $r=3\%$, other spending is constant, and distortion costs are $\kappa\tau^2$. Policy S carries the debt forever. Policy J retires it with a level surcharge in years 0 to 9, a shorter cousin of the 19-year rule that [`philosophy-of-debt` 6.1](../../philosophy-of-debt/lessons/06-01-the-earth-belongs-to-the-living.md) prices. (a) Find the surcharge (the tax rate above other spending) under each policy. (b) Find how much more J costs in present-value distortion, in units of $\kappa$, and explain why the answer does not depend on the level of other spending. (c) Who pays more under J, who pays less, and which part of the choice between S and J can this model settle? Three sentences.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) $\tau=r\,d_0+G^P=0.03\times0.50+0.22=0.2350$.

(b) A permanent rise raises permanent spending one-for-one, so $\tau=0.2850$ from year 0. Debt never moves: each year $d_{t+1}=1.03\times0.50+0.27-0.285=0.50$, so $d_3=0.5000$.

(c) At year 0 the program is worth $0.05\,(1.03^{-2}+1.03^{-3})=0.05\times1.8577=0.0929$, so permanent spending rises by $0.0929\times0.03/1.03=0.0027$, and $\tau=0.2377$ from year 0.

- Before the program, the primary surplus $0.2377-0.22=0.0177$ exceeds the interest of $0.015$, so debt falls: $d_1=0.4973$ and $d_2=0.4945$.
- During it, the primary deficit is $0.27-0.2377=0.0323$, so $d_3=0.5416$ and $d_4=0.5902$.
- Debt then stays at 0.5902, because its interest, $0.03\times0.5902=0.0177$, equals the surplus. Shortcut: $d_4=d_0+0.0027/0.03$, the perpetuity that the surcharge services.

The tax rate changes once, in year 0 when the news arrives, not in year 2 when the spending starts.

**Wrong turns:** raising the rate in year 2, when the program begins (the rate moves on news, not on spending); passing the full 0.05 into the rate in (c), which treats a temporary program as permanent; leaving out the interest on the existing debt in (a).

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) At year 1 the reconstruction is worth $0.04\,(1+1/1.02)=0.0792$. If the hurricane strikes, expected spending rises by $(1-0.2)\times0.0792=0.0634$, and the rate rises by its annuity value, $0.0634\times0.02/1.02=0.0012$ (0.124 points), forever. If it does not strike, expectations fall by $0.2\times0.0792=0.0158$, and the rate falls by $0.0158\times0.02/1.02=0.0003$ (0.031 points). The expected change is $0.2\times0.00124-0.8\times0.00031=0$.

(b) For the rate never to move, the bond must absorb the whole surprise in each state. It pays $0.0158$ more than the safe bond if no hurricane strikes and $0.0634$ less if one does. The gap between the states, $0.0792$, is the full value of the reconstruction. The expected difference is $0.8\times0.0158-0.2\times0.0634\approx0$ (the two terms are exactly equal before rounding), so lenders who care only about expected payoffs pay the same price for both bonds.

**Must hit, strict (c):**

- Not a default: the lower payment in the hurricane state is the contract's own term, known and priced when the bond was sold.
- The bondholders bore the cost, 0.0634 of GDP below the safe payoff, and were paid for it by the extra 0.0158 they get when no hurricane strikes, so that ex ante the two bonds are worth the same.

**Wrong turns:** using only the first year's 0.04 in (b) instead of the reconstruction's full value at year 1; calling (c) a default because creditors got less than a safe bond would have paid, when a default is measured against what the contract itself promised.

**Model answer (c):** No: the bond promised less in the hurricane state from the day it was sold, and it paid what it promised. The bondholders bore the hurricane's cost, 0.0634 of GDP below what safe-bond holders get, and were compensated through the 0.0158 extra the bond pays when no hurricane strikes, which makes the two bonds equally valuable at issue.

---

**P3** *(Formal (a)–(b) · Exegetical (c).)*

(a) S: the surcharge pays the interest, $0.03\times0.30=0.0090$, forever. J: a level surcharge $A$ in years 0 to 9 retires the debt when $A\sum_{t=0}^{9}1.03^{-(t+1)}=0.30$, so $A=0.009/(1-1.03^{-10})=0.009/0.2559=0.0352$, and zero after year 9. For ten years, J's surcharge is 3.9 times S's.

(b) Both policies raise the same present value. By Example 1's identity, J's extra cost is the present value of its squared deviations from S's rate: $0.0352-0.0090=0.0262$ in each of years 0 to 9, and $-0.0090$ in every year after:

$$\kappa\left[0.02617^2\times8.786+0.009^2\times25.547\right]=0.0081\,\kappa.$$

Here $8.786=\sum_{t=0}^{9}1.03^{-t}$ and $25.547=1.03^{-10}\times1.03/0.03$. Other spending $\bar G$ drops out, because it shifts both paths equally: the deviations do not contain it, and the cross term vanishes since the deviations have zero present value. (For scale: with $\bar G=0.25$, S costs $2.303\,\kappa$ in all, so J adds 0.35 percent.)

**Must hit, strict (c):**

- Under J, taxpayers in years 0 to 9 pay a surcharge of 3.52 points instead of 0.90, and everyone from year 10 on pays nothing instead of 0.90 points forever.
- The model settles the efficiency ranking: S has the lower present value of distortions, by $0.0081\,\kappa$ whatever the other spending.
- It cannot settle whether billing later taxpayers, many of them unborn, is fair. That is [`philosophy-of-debt` 6.2](../../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md)'s question. Full credit also for noting that discounting every year at $r$ builds in a weighting across generations that the model assumes rather than defends.

**Wrong turns:** setting J's surcharge at $0.30/10=0.03$, which ignores interest; calling J cheaper because it "pays the debt off", when both policies have the same present value and J merely bunches the distortion.

**Model answer (c):** J moves the war's cost onto the next ten years' taxpayers, who pay 3.52 points instead of 0.90, and frees everyone after year 9 from the 0.90-point surcharge they would pay forever under S. The model settles only the efficiency ranking: S has the lower present value of distortions, by $0.0081\,\kappa$ whatever else is spent. Whether billing taxpayers not yet born is fair is not something the model can settle, since its discounting already assumes an answer; that question belongs to philosophy-of-debt 6.2.

</details>

## Flashback

**From Lesson [5.1](05-01-the-government-budget-constraint.md) (The government budget constraint and debt dynamics):** *(Formal.)* Debt over GDP follows $d_{t+1}=a\,d_t-s_t$, where $s_t$ is the primary surplus over GDP and $a=(1+r)/(1+g)$, and a plan of surpluses backs the debt when $d_0=\sum_{j\ge0}s_j/a^{j+1}$. A country has $d_0=0.70$, $r=3.5\%$ and $g=1\%$. (a) Find the constant surplus that backs the debt. (b) Suppose instead that the government runs a zero primary balance for the next 8 years and a constant surplus forever after. Find the debt ratio at the end of year 8, the constant surplus that then backs the debt, and the factor by which it exceeds your answer to (a). (c) How many years of delay would double the required surplus?

<details>
<summary>Solution</summary>

Here $a=1.035/1.01=1.02475$, so $a-1=0.024752$.

(a) A constant surplus $s$ has present value $s/(a-1)$, so it backs the debt when $s=(a-1)\,d_0=0.024752\times0.70=0.01733$: 1.73 percent of GDP.

(b) With no surplus the ratio compounds at $a$: $d_8=a^8d_0=1.2161\times0.70=0.8512$. A constant surplus from then on backs it when $s'=(a-1)\,d_8=0.024752\times0.8512=0.02107$: 2.11 percent of GDP, which is $a^8=1.216$ times the answer to (a). Check: the plan's present value is $s'/\big(a^8(a-1)\big)=0.02107/(1.2161\times0.024752)=0.70$.

(c) After a delay of $T$ years the required surplus is $a^T$ times (a)'s, which doubles when $a^T=2$: $T=\ln2/\ln a=28.3$ years.

The budget constraint fixes only present values, so it allows any timing; but with $r>g$ each year of waiting multiplies the surplus that must eventually be run by $a$.

**Wrong turns:** compounding the debt at $1+r$ instead of $a$, which ignores growth and gives $d_8=0.922$; keeping the surplus at 1.73 percent after the delay, which backs only $0.70/a^8=0.576$.

</details>

## Connections

- **Backward:** [5.1](05-01-the-government-budget-constraint.md)'s flow identity and intertemporal budget constraint are the constraint here, and this lesson chooses among the paths it allows. The solution is [`grad-macro` 5.1](../../grad-macro/lessons/05-01-permanent-income-life-cycle.md)'s permanent-income model, with the tax rate as consumption, $f'$ as $u'$ and debt as negative wealth. The martingale is Hall's. [`grad-macro` 3.4](../../grad-macro/lessons/03-04-social-security-transfers.md) notes that Ricardian equivalence fails when taxes distort, and that failure is why the timing of taxes matters at all.
- **Forward:** [5.4](05-04-fiscal-limits-and-unpleasant-arithmetic.md) caps what taxes can raise at the top of a Laffer curve, a limit that smoothing cannot smooth past. [5.5](05-05-the-fiscal-theory-and-inflating-debt-away.md) studies surprise inflation, which cuts the real payoff of nominal debt after the fact, a state-contingent payoff that no contract wrote down. [8.3](08-03-relief-written-into-the-contract.md) takes contingent debt into practice (GDP-linked bonds, shared-responsibility mortgages) and asks why verification keeps it rare.
- **Sideways:** Hume contrasted the ancients, who saved in peace for war, with the moderns, who mortgage future revenues ([`history-of-debt` 3.4](../../history-of-debt/lessons/03-04-humes-prophecy-carrying-a-great-debt.md)). The war chest of Aiyagari, Marcet, Sargent and Seppälä and Barro's war debt are those two strategies, derived. Smith's objection in the same lesson, that borrowing lets wars begin more lightly and last longer, is a political-economy cost this planner model leaves out. Convex costs smooth investment in the same way ([`grad-macro` 5.3](../../grad-macro/lessons/05-03-q-theory-investment.md)), and the static question of which taxes to use at one date is the Ramsey rule of [`public-economics`](../../public-economics/syllabus.md) Module 4. Whether a perpetual war debt wrongs the unborn is [`philosophy-of-debt` 6.2](../../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md)'s question, not this course's.
