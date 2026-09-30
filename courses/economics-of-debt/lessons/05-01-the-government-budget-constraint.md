# Economics of Debt · Lesson 5.1: The government budget constraint and debt dynamics

> ⏱ ~15 min · Module 5: Public debt · Builds on: [`history-of-debt` 3.4 Hume's prophecy](../../history-of-debt/lessons/03-04-humes-prophecy-carrying-a-great-debt.md), [`grad-macro` 1.3 Euler equations and transversality](../../grad-macro/lessons/01-03-euler-transversality.md) · Unlocks: [5.2 When r < g](05-02-when-r-is-less-than-g.md), [5.3 Tax smoothing and optimal debt](05-03-tax-smoothing-and-optimal-debt.md)

## Why this matters

A government is the one borrower expected to outlive its creditors, so it never has to repay; it has to stay believed. "Sustainable" is the word for that, usually attached to a number, 60 or 90 percent of GDP. The economics attaches it to a relation between the debt and the surpluses the government will run. This lesson makes the relation exact: the surplus that holds a debt ratio steady, why holding it steady is a knife-edge when interest exceeds growth, what it means for a debt to be backed, and Bohn's test of whether a government behaves as if its debt is. It ends with a hand-off from [`history-of-debt` 6.2](../../history-of-debt/lessons/06-02-the-eurozone-and-greece.md): why cutting a deficit in a slump can raise the debt ratio.

## The idea

A debt ratio is debt over the economy that has to carry it. Interest grows the top, growth grows the bottom, and a [primary surplus](../reference.md#primary-surplus), revenue minus all spending except interest, pays some of the top off.

Take an invented country whose debt equals its GDP, with a real interest rate of 5 percent and real growth of 1 percent. This year interest adds about 5 points of GDP to the debt and growth shrinks the ratio by about 1 point, so a primary surplus of about 4 points holds the ratio at 100 percent.

Now a recession lifts debt to 110 percent while the surplus stays at 4 points. Interest net of growth now adds about 4.4 points, so the ratio creeps up 0.4 points. Next year the shortfall is larger, and after twenty years of unchanged policy the ratio is near 122 percent. Had the shock pushed debt down to 90 percent, the same surplus would pay it off ever faster. The balance point is a pencil standing on its tip.

What turns the pencil into a pendulum is feedback: a government that raises its surplus when its debt rises. Say each extra 10 points of debt brings 1 more point of surplus. At 110 percent the surplus becomes about 5 points, the ratio falls, and half the shock is gone in about 11 years. Henning Bohn's insight was that *any* such feedback, however weak, keeps creditors whole in present value, even if the ratio never settles. Solvent and stable are different properties, and this lesson lives in the gap between them.

## The formal version

[`history-of-debt` 3.4](../../history-of-debt/lessons/03-04-humes-prophecy-carrying-a-great-debt.md) built the [debt-ratio identity](../reference.md#debt-ratio-dynamics) and iterated it. Reloaded, with $a = \frac{1+r}{1+g}$:

$$d_{t+1} = a\,d_t - s_t.$$

Here $d_t$ is debt over GDP at the start of year $t$, $s_t$ the primary surplus over GDP during it, and $r$ and $g$ the real interest and growth rates. *In words:* the ratio compounds at the growth-adjusted factor $a$, and the surplus pays some of it off. Throughout, $r>g$, so $a>1$; [5.2](05-02-when-r-is-less-than-g.md) drops that.

**The stabilizing surplus.** Setting $d_{t+1}=d_t=d$ gives the [debt-stabilizing primary surplus](../reference.md#debt-stabilizing-primary-surplus)

$$s^* = (a-1)\,d = \frac{r-g}{1+g}\,d.$$

*In words:* to hold the ratio, the surplus must pay the interest-growth gap on the whole existing debt.

**The knife-edge.** A constant surplus $s$ holds the ratio at $\bar d = s/(a-1)$. Subtracting $\bar d = a\bar d - s$ from the identity gives

$$d_{t+1} - \bar d = a\,(d_t - \bar d).$$

*In words:* with $r>g$ every deviation is multiplied by $a>1$ each year, so a fixed surplus balances the ratio at an unstable point, where shocks compound instead of fading.

**The intertemporal budget constraint.** Solve the identity forward, $d_t = (s_t + d_{t+1})/a$, and repeat $T$ times:

$$d_t = \sum_{j=0}^{T-1} \frac{s_{t+j}}{a^{j+1}} + \frac{d_{t+T}}{a^{T}}.$$

The [no-Ponzi condition](../reference.md#no-ponzi-condition) says the last term goes to zero as $T\to\infty$, which leaves the [intertemporal budget constraint](../reference.md#intertemporal-budget-constraint) (IBC):

$$d_t = \sum_{j=0}^{\infty} \frac{s_{t+j}}{a^{j+1}}.$$

*In words:* today's debt equals the present value of all future primary surpluses, discounted at the growth-adjusted rate. The debt is a claim on those surpluses, and it is *backed* when they are expected to cover it.

Why must the last term vanish? If it stayed positive, creditors would hold forever a claim whose present value is never paid down, because interest on old debt is paid with new debt: a Ponzi scheme. Their transversality condition ([`grad-macro` 1.3](../../grad-macro/lessons/01-03-euler-transversality.md)) says an optimizer never carries unconsumed wealth into the infinite future, and the government has no reason to push the term below zero. So the government's no-Ponzi condition is its creditors' transversality condition, seen from the other side of the balance sheet. The knife-edge is the same fact. Start above $\bar d$ with a fixed surplus and the excess grows at exactly the rate it is discounted, so the last term never shrinks: the unstable path is the Ponzi path. The IBC is also what Ricardian equivalence runs on ([`grad-macro` 3.4](../../grad-macro/lessons/03-04-social-security-transfers.md)): with spending fixed, a tax cut today must be matched by future surpluses of equal present value, so households with operative bequests save it.

**Fiscal reaction functions.** Bohn (1998, *QJE*) let the surplus respond to debt through a [fiscal reaction function](../reference.md#fiscal-reaction-function):

$$s_t = \rho\,d_t + \mu_t,$$

where $\rho$ is the response and $\mu_t$ collects everything else (wars and recessions push it down), bounded as a share of GDP. The identity becomes $d_{t+1} = (a-\rho)\,d_t - \mu_t$. The part of $d_{t+T}$ inherited from $d_t$ is $(a-\rho)^T d_t$, and dividing by $a^T$ leaves $(1-\rho/a)^T d_t$, which vanishes for any $0<\rho<2a$; the bounded $\mu$ terms also grow more slowly than $a^T$.

**Result (Bohn).** If $\rho>0$ and $\mu_t$ is bounded, the no-Ponzi condition holds, and with it the IBC.

*In words:* a surplus that rises with debt, however weakly, keeps the debt growing more slowly than it is discounted, and that is all solvency asks.

So there are two thresholds. $\rho>0$ makes the debt solvent. $\rho > a-1 = \frac{r-g}{1+g}$ also makes the ratio stable, since the map's slope $a-\rho$ falls below one. In between, the ratio drifts up forever while creditors are still repaid in present value.

Bohn's evidence was that standard tests could not reject a unit root in the US debt ratio, yet, controlling for wartime spending and the business cycle, the primary surplus rose with debt and the ratio mean-reverted. He later put the US response at 0.05 to 0.12 (Bohn 2011, *FinanzArchiv*). Even 0.05 exceeds $\frac{r-g}{1+g}$ whenever $r-g$ is below about 5 points. The linear rule is a local description, though: Ghosh, Kim, Mendoza, Ostry and Qureshi (2013, *Economic Journal*) estimate a response that cannot keep pace as debt climbs ("fiscal fatigue") and derive a debt limit from it: [5.4](05-04-fiscal-limits-and-unpleasant-arithmetic.md)'s fiscal limit.

## Picture

![Change in the debt ratio by next year plotted against this year's ratio for three fiscal rules that all hold the ratio at 1.0: a constant surplus slopes up and is unstable, a weak reaction rule slopes up less steeply and drifts but stays solvent, and a Bohn rule with response 0.1 slopes down and is stable](assets/05-01-fig1.svg)

The vertical axis is $d_{t+1}-d_t$, so the 45-degree line of the usual map becomes the horizontal axis. All three rules use Example 1's numbers and deliver a surplus of 3.96 percent at $d=1.0$. Red (constant surplus, unstable) and dashed blue (the weak rule) both cross zero from below; solid blue (Bohn) crosses from above and pulls the ratio back. The weak rule drifts, but $\rho=0.02>0$ still keeps its IBC intact.

## Worked examples

**Example 1 (clean): the knife-edge and the thermostat.** Take the country from The idea: $d=1.0$, $r=5\%$, $g=1\%$, all illustrative. Then $a = 1.05/1.01 = 1.0396$ and $s^* = 0.0396$, a primary surplus of 3.96 percent of GDP.

- *Fixed surplus.* A shock lifts the ratio to 1.1. After 20 years it is $1 + 0.1\times1.0396^{20} = 1 + 0.1\times2.174 = 1.217$, and the excess doubles every $\ln 2/\ln a = 17.8$ years. The fixed surplus is worth $s^*/(a-1) = 1.0$ in present value, so 0.1 of GDP of the debt is unbacked, and $d_{t+T}/a^T$ tends to 0.1, not zero.
- *Bohn rule.* Take $\rho = 0.1$, inside Bohn's range, and $\mu = s^* - \rho = -0.0604$. At $d=1$ the rule asks for 3.96 percent as before; after the shock it asks for $0.1\times1.1 - 0.0604 = 0.0496$. The slope is $a-\rho = 0.9396$, so after 20 years the ratio is $1 + 0.1\times0.9396^{20} = 1.029$, and half the shock is gone in $\ln 2/(-\ln 0.9396) = 11.1$ years. The rule's surpluses are worth exactly 1.1 in present value: the shock is backed.
- *Weak rule.* With $\rho = 0.02$ the slope is 1.0196. The ratio reaches 1.26 after 50 years and 1.70 after 100, yet the surpluses are still worth 1.1 in present value. Solvent, not stable.

**Example 2 (why you'd care): [self-defeating consolidation](../reference.md#self-defeating-consolidation).** [`history-of-debt` 6.2](../../history-of-debt/lessons/06-02-the-eurozone-and-greece.md) left this model to be built: why a fall in output can raise the debt ratio faster than surpluses lower it. Compare one year with and without a consolidation. The government tightens by $c$, a share of GDP: measures that would raise the primary surplus by $c$ if output held. Output falls by the fraction $mc$, where $m$ is the fiscal multiplier. Revenue falls with output, so the balance gives back $\varepsilon mc$, where $\varepsilon$ is the semi-elasticity of the budget balance to output. Let $d$ be the debt ratio the year's output must carry. Relative to no consolidation, the ratio changes by

$$\begin{aligned}\Delta d &= \frac{mc}{1-mc}\,d - c\,(1-\varepsilon m)\\ &\approx c\,\big[m(d+\varepsilon) - 1\big].\end{aligned}$$

The first term is the smaller denominator; the second is the net fiscal gain. *In words:* to first order in $c$, the ratio rises in the first year exactly when $m(d+\varepsilon) > 1$, and the threshold multiplier $1/(d+\varepsilon)$ falls as debt grows. (The exact threshold is slightly lower, since $1/(1-mc) > 1$. The model also treats $m$ and $\varepsilon$ as constants acting within the year.)

European Commission estimates put $\varepsilon$ at about 0.5 on average across EU members (Mourre and Poissonnier 2019, *Intereconomics*). With $d = 1.0$ and $\varepsilon=0.5$ the threshold is $m = 1/1.5 = 0.67$. Tighten by 2 percent of GDP:

- $m = 0.4$: $\Delta d \approx 0.02\times(0.4\times1.5 - 1) = -0.008$, a fall of 0.8 points (exact: 0.79).
- $m = 1.0$: $\Delta d \approx 0.02\times(1.5 - 1) = +0.010$, a *rise* of 1.0 point (exact: 1.04).

A multiplier near one is not exotic in a slump. It is small when the central bank offsets fiscal moves and can exceed one at the zero lower bound ([`grad-macro` 6.1](../../grad-macro/lessons/06-01-monetary-fiscal-nk.md)). Blanchard and Leigh (2013, *AER* Papers and Proceedings) found that, early in the crisis, advanced economies that planned stronger consolidation grew less than forecast, implying multipliers well above what forecasters assumed. Eyraud and Weber (2013, IMF Working Paper 13/67) draw the implication: tightening can raise debt ratios in the short term.

The short term is the point. If output returns to trend in year two and the tightening stays, the denominator recovers while the debt stays lower: with Example 1's $r$ and $g$, the ratio ends year two about 3 points below its no-consolidation path even at $m=1$. The first-year rise lasts only if the output loss persists or the higher ratio raises $r$. Who pays and who gains: taxpayers and those whose programs are cut pay $c$ from the first year, workers and firms bear the output loss in the slump, and bondholders hold a better-backed claim.

## Watch out

- **You might think the debt-stabilizing surplus stabilizes the debt,** but with $r>g$ it only holds the ratio where it already is. Any shock then compounds at the rate $a$; stability needs a surplus that responds.
- **You might think sustainability requires a stable ratio,** but the IBC only needs debt to grow more slowly than $a$. A rule with $0<\rho<a-1$ is solvent while the ratio climbs forever. Whether surpluses that large can actually be raised is [5.4](05-04-fiscal-limits-and-unpleasant-arithmetic.md)'s fiscal limit.
- **You might think a consolidation that raises the ratio in year one has failed,** but the rise comes from a depressed denominator. Once output recovers, the higher surplus keeps working, unless the output loss persists or the higher ratio raises the interest rate.

## One-liner

> Debt is backed by the present value of future surpluses: with $r>g$ a fixed surplus balances it on a knife-edge, a surplus that rises with debt keeps it solvent, and austerity in a slump can raise the ratio for a year before lowering it.

## Problems

**P1 (🟢) *(Formal.)*** Illustrative values: debt is 60 percent of GDP, $r = 2.5\%$ and $g = 1\%$. (a) Compute the debt-stabilizing primary surplus. (b) The government instead commits to a primary surplus of 0.5 percent of GDP forever. Find the debt ratio this surplus would hold constant, and say whether the actual ratio moves toward it or away from it, and why. (c) Compute the present value of the committed surpluses as a share of GDP, and how much of today's debt they leave unbacked. Round to three decimals.

**P2 (🟡) *(Formal (a) · Exegetical (b).)*** Illustrative values: $r = 4\%$, $g = 2\%$, and the government follows $s_t = 0.05\,d_t - 0.025$. (a) Find the steady-state debt ratio and the primary surplus there. Is the steady state stable? After a shock, how many years pass before half of the excess is gone? (b) A successor government lowers the response to $\rho = 0.01$ and adjusts the constant so that the steady state is unchanged. Does the IBC still hold? Does a shock fade? Two sentences, naming the number that decides each.

**P3 (🔴) *(Formal (a)–(b) · Exegetical (c).)*** The model [`history-of-debt` 6.2](../../history-of-debt/lessons/06-02-the-eurozone-and-greece.md) handed to this lesson, with invented numbers. A country's debt is 140 percent of GDP, its budget semi-elasticity is $\varepsilon = 0.6$, and it tightens by $c = 2.5$ percent of GDP. (a) Above what multiplier does the tightening raise the debt ratio in its first year, to first order? (b) With $m = 0.8$, compute the first-year change in the ratio relative to no tightening, first order and exact. (c) An invented headline reads: "Austerity has failed: the debt ratio went up." In three sentences or fewer, say what the model predicts for year two if output returns to trend and the tightening stays, and name one condition under which the headline would be right in the long run.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

$a = 1.025/1.01 = 1.014851$, so $a - 1 = 0.014851$.

(a) $s^* = 0.014851 \times 0.6 = 0.00891$: a primary surplus of 0.891 percent of GDP.

(b) $\bar d = s/(a-1) = 0.005/0.014851 = 0.337$. Since $d_0 = 0.6$ lies above $\bar d$ and $a>1$, the ratio moves away from it, upward: $d_1 = 1.014851 \times 0.6 - 0.005 = 0.604$, and the gap $0.6 - 0.337$ is multiplied by $a$ every year.

(c) The present value is $s/(a-1) = 0.337$, the same number as (b): a constant surplus backs exactly the debt it holds constant. The unbacked part is $0.6 - 0.337 = 0.263$ of GDP. Equivalently, the surplus falls $0.891 - 0.500 = 0.391$ points short of $s^*$.

**Wrong turns:** using $r - g = 0.015$ without dividing by $1+g$, which gives $s^* = 0.009$ and $\bar d = 0.333$; expecting the ratio to glide down to 0.337 because the budget is in surplus.

---

**P2** *(Formal (a) · Exegetical (b).)*

(a) $a = 1.04/1.02 = 1.019608$, so $a - 1 = 0.019608$ (exactly $1/51$). The steady state solves $\rho\bar d + \mu = (a-1)\bar d$ with $\rho = 0.05$ and $\mu = -0.025$:

$$\bar d = \frac{-\mu}{\rho - (a-1)} = \frac{0.025}{0.05 - 0.019608} = \frac{0.025}{0.030392} = 0.823.$$

The surplus there is $0.05\times0.823 - 0.025 = 0.0161$, or 1.61 percent of GDP, which equals $(a-1)\bar d$ as it must. The map's slope is $a - \rho = 0.9696 < 1$, so the steady state is stable, and half of any excess is gone after $\ln 2/(-\ln 0.9696) = 22.5$ years.

**Must hit, strict (b):**

- The IBC still holds: $\rho = 0.01$ is positive, which is all Bohn's condition needs.
- A shock does not fade: the slope is $a - \rho = 1.0096 > 1$, so the excess grows about 0.96 percent a year. That is slower than the discount rate $a - 1 = 1.96$ percent, which is why the IBC survives.

**Wrong turns:** requiring $\rho > \frac{r-g}{1+g}$ for the IBC, when that is the condition for stability; putting the steady state at $0.025/0.05 = 0.5$, the debt at which the rule runs a zero primary balance, which ignores the interest-growth term.

**Model answer (b):** The IBC still holds, because any positive response ($\rho = 0.01 > 0$) keeps debt growing more slowly than it is discounted. But a shock no longer fades: the slope $a - \rho = 1.0096$ exceeds one, so the excess grows about 1 percent a year forever, and the surplus the rule demands keeps rising with it.

---

**P3** *(Formal (a)–(b) · Exegetical (c).)*

(a) $m^* = 1/(d+\varepsilon) = 1/(1.4 + 0.6) = 0.5$.

(b) The output loss is $mc = 0.8 \times 0.025 = 0.02$. First order: $\Delta d \approx 0.025\times(0.8\times2.0 - 1) = 0.015$, a rise of 1.5 points. Exact:

$$\Delta d = \frac{0.02}{0.98}\times1.4 - 0.025\times(1 - 0.48) = 0.0286 - 0.0130 = 0.0156,$$

a rise of about 1.56 points. The smaller GDP adds 2.86 points; the net fiscal gain removes only 1.30, because the stabilizers take back $\varepsilon mc = 1.2$ of the 2.5.

**Must hit, strict (c):**

- Year two: with output back at trend, the denominator effect disappears while the debt stays lower (the year-one net gain plus a second year of tightening), so the ratio falls below its no-tightening path. The first-year rise was temporary.
- A long-run condition, either one: the output loss persists (hysteresis), or the higher ratio raises the interest rate the country pays.

**Wrong turns:** treating the first-year rise as permanent; comparing the denominator effect with the full 2.5-point tightening instead of the 1.3 left after the stabilizers.

**Model answer (c):** If output returns to trend and the tightening stays, the ratio ends year two below where it would have been without the tightening, because the denominator recovers while the debt stays permanently lower. The headline would be right in the long run only if the output loss persists, or if the higher ratio pushes up the interest rate on the debt.

</details>

## Flashback

**From Lesson [4.3](04-03-household-debt-and-the-great-recession.md) (Household debt and the Great Recession: the evidence):** *(Formal.)* An invented study compares inelastic and elastic counties: in the inelastic ones the housing net worth shock $s_i$ was 14 points more negative (first stage) and spending growth was 7 points lower (reduced form). Spending responds by $\Delta\log C_i=\alpha+\eta\,s_i+\varepsilon_i$, with $s_i=g_iH_i/NW_i$, where $g_i$ is house-price growth, $H_i$ the house value and $NW_i=F_i+H_i-D_i$ net worth (financial assets plus house minus debt). (a) Find the IV estimate of $\eta$. (b) A household has a 300,000-dollar house, a 180,000-dollar mortgage, no financial assets and spending of 24,000 dollars a year. House prices fall 10 percent. Using your $\eta$ and setting $\alpha$ and $\varepsilon_i$ aside, find its shock $s$ and the fall in its spending in dollars. (c) How many dollars of financial assets would make the same price fall cut its spending only half as much?

<details>
<summary>Solution</summary>

(a) The IV estimate is the reduced form over the first stage: $\hat\eta=7/14=0.5$.

(b) Net worth is $0+300{,}000-180{,}000=120{,}000$ and the loss is $0.10\times300{,}000=30{,}000$, so $s=-30{,}000/120{,}000=-25\%$: with a loan to value of 60 percent, leverage multiplies the price fall by $1/(1-0.6)=2.5$. Spending falls by $0.5\times25\%=12.5\%$, which is $0.125\times24{,}000=3{,}000$ dollars: an MPC out of housing wealth of $3{,}000/30{,}000=10$ cents per dollar, equal to $\eta\,C/NW=0.5\times24{,}000/120{,}000$.

(c) Half the fall is 6.25 percent, so $s$ must be $-12.5\%$, which needs $NW=30{,}000/0.125=240{,}000$. Since $NW=F+120{,}000$, the household needs $F=120{,}000$ dollars of financial assets, 40 percent of the house's value. Check: $s=-30{,}000/240{,}000=-12.5\%$ and the fall in spending is $0.5\times12.5\%\times24{,}000=1{,}500$.

**Wrong turns:** using the price fall itself as the shock ($s=-10\%$), which gives a 5 percent fall, 1,200 dollars, and ignores leverage; in (c), adding half of current net worth (60,000) instead of doubling it, which leaves $s=-16.7\%$ and a fall of 2,000 dollars rather than 1,500.

</details>

## Connections

- **Backward:** [`history-of-debt` 3.4](../../history-of-debt/lessons/03-04-humes-prophecy-carrying-a-great-debt.md) built the identity and found that averages cannot reproduce Britain's nineteenth-century path, because surpluses (or a narrower $r-g$) must have come when the debt was largest — a positive $\rho$ in the record. The no-Ponzi condition is [`grad-macro` 1.3](../../grad-macro/lessons/01-03-euler-transversality.md)'s transversality condition, held by the creditors.
- **Forward:** [5.2](05-02-when-r-is-less-than-g.md) drops $r>g$, and with it the convergence of the present-value sum: a debt can then roll over indefinitely. [5.3](05-03-tax-smoothing-and-optimal-debt.md) asks how a government should time the surpluses the IBC demands. [5.4](05-04-fiscal-limits-and-unpleasant-arithmetic.md) bounds the surpluses it can call on, and [5.5](05-05-the-fiscal-theory-and-inflating-debt-away.md) reads the IBC for nominal debt as an equation for the price level. Module 6 asks what happens when a sovereign can decline to run them ([6.2](06-02-reputation-and-eaton-gersovitz.md)).
- **Sideways:** [`history-of-debt` 6.2](../../history-of-debt/lessons/06-02-the-eurozone-and-greece.md) is Example 2's episode, where nominal GDP also fell through prices. [`philosophy-of-debt` 6.2](../../philosophy-of-debt/lessons/06-02-public-debt-and-the-unborn.md) asks whether the later taxpayers who run the backing surpluses are wronged by the debt; this lesson says only that someone's surpluses must back it. The multiplier and the zero lower bound are [`grad-macro` 6.1](../../grad-macro/lessons/06-01-monetary-fiscal-nk.md)'s.
