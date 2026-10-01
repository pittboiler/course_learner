# Public Economics · Lesson 6.2: Chamley-Judd and the exploding wedge

> ⏱ ~15 min · Module 6: Capital taxation · Builds on: [6.1 Atkinson-Stiglitz](06-01-atkinson-stiglitz.md), [4.1 The Ramsey rule](04-01-the-ramsey-rule.md), [`grad-macro` 2.3 The Ramsey-Cass-Koopmans model](../../grad-macro/lessons/02-03-ramsey-cass-koopmans.md) · Unlocks: [6.3 The inverse Euler equation](06-03-the-inverse-euler-equation.md)

## Why this matters

[6.1](06-01-atkinson-stiglitz.md) said that with a good income tax and separable preferences, saving should not be taxed. That result lives in a two-period life cycle. Chamley (1986, *Econometrica*) and Judd (1985, *Journal of Public Economics*) reached a starker answer in the infinite-horizon growth model, with only linear taxes available: the optimal tax on capital income is zero in the long run, and that holds even when the government cares only about workers. This lesson shows where the result comes from (a constant capital tax is a tax on future consumption that grows without limit), who bears a long-run capital tax, why a government would like to tax capital heavily *today* and promise never to again, and why that promise is hard to believe. It ends with the 2020 paper that showed the zero is less robust than forty years of textbooks said.

## The idea

A tax on interest looks modest: 40 percent of a 6 percent return leaves 3.6 percent. But interest compounds, and so does the tax. Save 100 dollars for one year and you end with 103.60 instead of 106: a 2.3 percent tax on next year's consumption. Save for 30 years and you end with 289 instead of 574. The tax has taken about half of what you would have had, so consumption 30 years ahead now costs about twice what it did: nearly a 100 percent tax on that consumption. At 50 years, over 200 percent.

So a flat capital income tax is really a set of consumption taxes, one for each future date, with rates that climb without limit. Module 4 taught that a good tax system does not tax similar goods at wildly different rates ([4.1](04-01-the-ramsey-rule.md)). Consumption in year 30 and in year 31 are similar goods. A tax system that loads year 31 about 2.3 percent more heavily than year 30, and consumption 60 years out almost four times as heavily as consumption today, violates that principle more and more the further out it reaches. In the long run, the fix is to stop.

## The formal version

**Setup.** A representative household lives forever and maximizes $\sum_{t\ge0}\beta^t\,[u(c_t)-v(l_t)]$, where $c_t$ is consumption, $l_t$ labor, $u$ increasing and concave, $v$ increasing and convex, and $\beta=1/(1+\rho)$ its discount factor with time preference rate $\rho>0$. Output per worker is $f(k)$, with capital $k$ depreciating at rate $\delta$. The pre-tax net return on capital is $r_t=f'(k_t)-\delta$, and the government taxes capital income at rate $\tau_K$. The household's Euler equation (the discrete-time twin of [`grad-macro` 2.3](../../grad-macro/lessons/02-03-ramsey-cass-koopmans.md)'s Keynes-Ramsey rule) is

$$u'(c_t)=\beta\,\big[1+(1-\tau_K)\,r_{t+1}\big]\,u'(c_{t+1}).$$

*In words:* the household saves until a unit of consumption given up today, earning the after-tax return, is worth exactly the future consumption it buys.

**Result 1 (the exploding wedge).** Measured at pre-tax returns, consumption $T$ periods ahead costs $(1+r)^{-T}$ in today's consumption. Facing the tax, the household pays $(1+(1-\tau_K)r)^{-T}$. The ratio defines the implicit tax rate $t_T$ on date-$T$ consumption:

$$1+t_T=\left(\frac{1+r}{1+(1-\tau_K)\,r}\right)^{T}.$$

*In words:* a constant capital income tax is a consumption tax whose rate compounds with the horizon, growing without bound. This is the [intertemporal wedge](../reference.md#intertemporal-wedge). For small rates, $t_T$ grows by roughly $r\tau_K$ per year of horizon, compounded.

**Result 2 ([Chamley-Judd](../reference.md#chamley-judd)).** Let the government finance a spending path with linear taxes on labor income and capital income, choosing the whole path at date 0 and committing to it. If the optimal allocation converges to an interior steady state, then $\tau_K\to0$. The steady-state logic: at the optimum, the planner's own valuation of consumption settles down, and so it requires the undistorted condition $1=\beta(1+r)$. The household requires $1=\beta\,(1+(1-\tau_K)\,r)$. Both hold only if $\tau_K=0$. *In words:* in a steady state, the rule for uniform taxation from [4.1](04-01-the-ramsey-rule.md) and [6.1](06-01-atkinson-stiglitz.md) ([uniform commodity taxation](../reference.md#uniform-commodity-taxation)) applies to consumption at different dates, and Result 1 says only a zero capital tax treats them uniformly. Judd's version splits the economy into capitalists who save and workers who do not. The zero survives even when the planner puts all its weight on workers. Why becomes clear in Example 2.

**Result 3 (the [capital levy](../reference.md#capital-levy)).** At date 0 the capital stock $k_0$ already exists. A tax on it changes no decision, so it is a lump-sum tax, the cheapest revenue there is. The date-0 planner therefore wants to tax initial capital as heavily as it is allowed (Chamley caps the rate), and then tax capital income at zero later. Now let the government re-optimize at date $s>0$. The capital $k_s$ is now sunk, so a levy on it is lump-sum again, and the new planner wants one. *In words:* the plan "levy once, then never again" is optimal at date 0 and abandoned at every later date. That is [time inconsistency](../reference.md#time-inconsistency), the general problem of Kydland and Prescott (1977, *JPE*), and Fischer (1980, *Journal of Economic Dynamics and Control*) studied the capital-levy case. Savers who expect a government without commitment to re-optimize expect repeated levies, save less, and end up with a positive expected capital tax.

**Result 4 (Straub and Werning, 2020, *AER*).** "If the allocation converges" does real work. Straub and Werning prove that in Judd's main model, the optimal long-run capital tax is positive and significant whenever the elasticity of intertemporal substitution $1/\sigma$ (with $u(c)=c^{1-\sigma}/(1-\sigma)$) is below one. With higher elasticities, the tax goes to zero, but possibly only after centuries of high rates. In Chamley's model, they give conditions under which the cap on capital taxes binds forever. *In words:* the steady-state argument is valid when the optimum reaches a steady state, and often it does not.

## Picture

![Implicit tax on consumption T years ahead against the horizon T, at a 6 percent pre-tax interest rate: a 40 percent capital income tax curve reaches 100 percent at about 30 years and 300 percent at about 60, a 20 percent capital income tax curve reaches 100 percent at about 61 years, and a flat dashed line shows a 20 percent consumption tax that is the same at every horizon](assets/06-02-fig1.svg)

Two capital income taxes, one horizon axis. The red curve is Example 1. The blue curve, at half the rate, takes about twice as long to reach 100 percent. The green line is what the Ramsey logic prefers: one consumption tax rate for every date.

## Worked examples

**Example 1 (the wedge on a clean case).** Take $r=6\%$ and $\tau_K=40\%$, so the after-tax return is $3.6\%$ and the yearly factor is $1.06/1.036=1.0232$.

| Horizon $T$ | 1 | 10 | 20 | 50 |
|---|---|---|---|---|
| Implicit tax $t_T$, $\tau_K=40\%$ | 2.3% | 25.7% | 58.1% | 214% |
| Implicit tax $t_T$, $\tau_K=20\%$ | 1.2% | 12.1% | 25.6% | 76.7% |

The 40 percent tax crosses 100 percent at $T=\ln2/\ln1.0232\approx30$ years, and the 20 percent tax at about 61. Halving the capital tax roughly halves the growth rate of the wedge. It does not stop the growth.

**Example 2 (why you'd care: who bears it).** The [tax incidence](../reference.md#tax-incidence) question for a long-run capital tax. Take the Ramsey-Cass-Koopmans steady state with $f(k)=k^{1/3}$, $\delta=0.05$ and $\rho=0.04$, and Judd's split: capitalists own the capital, and workers earn the wage $w=f(k)-f'(k)k=\tfrac23k^{1/3}$ and do not save. In a steady state, capitalists' consumption is constant, so their Euler equation pins the *after-tax* return at $\rho$: $(1-\tau_K)(f'(k)-\delta)=\rho$. The long-run supply of capital is perfectly elastic at that return. By the logic of [2.1](02-01-partial-equilibrium-incidence.md), a perfectly elastic side bears none of the tax.

- $\tau_K=0$: $f'(k)=0.09$, so $k=(1/0.27)^{3/2}=7.128$ and $w=1.283$.
- $\tau_K=0.3$: the pre-tax return must rise to $0.04/0.7=5.71\%$, so $f'(k)=0.1071$, $k=5.487$ (23.0 percent less) and $w=1.176$ (8.3 percent less).
- Revenue is $0.3\times0.0571\times5.487=0.094$ per worker. The wage falls by $0.107$.

Hand every cent of revenue to workers and they are still $0.013$ per period worse off in the steady state. To first order, the whole tax lands on wages. On top of that, capital shrinks, which is a Harberger triangle ([2.3](02-03-excess-burden-and-the-harberger-triangle.md)). This comparison is steady state to steady state. During the transition, capitalists who own today's capital do bear the tax. That is Result 3's levy, and whether the planner should want it depends on the welfare weights, which this course does not choose.

## Watch out

- **You might think Chamley-Judd says tax capital at zero always, but actually it says the opposite at the start.** The date-0 optimum taxes existing capital as hard as allowed. The zero is a long-run property of a committed plan.
- **You might think a zero capital tax means no tax on savers, but actually a constant consumption tax falls on them too.** It is equivalent to a labor income tax plus a one-time levy on initial wealth, and it leaves the intertemporal wedge at zero.
- **You might think the result is a theorem about the world, but actually it is conditional.** It needs convergence to a steady state (Straub and Werning), full commitment (Result 3), and infinitely lived savers with no borrowing limits or uninsured risk. [6.3](06-03-the-inverse-euler-equation.md) drops the last assumption and finds a positive wedge.

## One-liner

> A flat tax on capital income is a tax on future consumption that compounds with the horizon, so a committed planner taxes the capital already in place and then goes to zero, but a planner who can change its mind will tax again, and savers know it.

## Problems

**P1 (🟢) *(Formal.)*** An invented country has a pre-tax return $r=8\%$ and taxes capital income at $\tau_K=50\%$. (a) Find the implicit tax on consumption 1, 10 and 20 years ahead. (b) After how many whole years does the implicit tax first exceed 100 percent? Round rates to one decimal place.

**P2 (🟡) *(Formal.)*** The pre-tax return is $r=6\%$ every year. (a) A government wants the implicit tax on date-$T$ consumption to satisfy $1+t_T=1.02^T$ (zero today, compounding 2 percent a year). What constant capital income tax delivers exactly this? (b) Instead, it levies a 10 percent consumption tax at every date, starting today. What capital income tax rate is this equivalent to? The household's lifetime budget is initial wealth $a_0$ plus the present value of labor income. Show that the consumption tax is equivalent to a labor income tax plus a one-time levy on $a_0$, and give both rates.

**P3 (🔴, optional) *(Formal (a) · Exegetical (b).)*** Invented numbers: a Judd economy (capitalists save, workers do not) with $f(k)=k^{0.3}$, $\delta=0.08$, $\rho=0.05$. The government announces a zero capital income tax forever, but savers believe it will tax capital income at 35 percent from next year on. (a) Compare the steady state they expect with the one under a credible zero: the pre-tax return, capital, the wage (percent changes), revenue, and the wage loss net of revenue. (b) In two sentences, explain why savers doubt the announcement, and name the kind of institution that could make it credible.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

(a) The after-tax return is $4\%$, so the yearly factor is $1.08/1.04=1.0385$. Then $t_1=3.8\%$, $t_{10}=1.0385^{10}-1=45.9\%$ and $t_{20}=112.7\%$.

(b) $1.0385^T>2$ requires $T>\ln2/\ln1.0385=18.4$, so the implicit tax first exceeds 100 percent at 19 years.

**Wrong turns:** reading the 50 percent statutory rate as the tax on future consumption (at one year the implicit tax is 3.8 percent); multiplying $3.8\%\times20=77\%$ instead of compounding.

---

**P2** *(Formal.)*

(a) The yearly factor must be $(1+r)/(1+(1-\tau_K)r)=1.02$, so $1+0.06(1-\tau_K)=1.06/1.02=1.03922$. Then $0.06(1-\tau_K)=0.03922$ and $\tau_K=0.346$, a 34.6 percent capital income tax.

(b) Zero: a constant consumption tax does not change the price of consumption at one date relative to another, so the Euler equation has no wedge. The budget with the tax is $\sum_t p_t(1.1)\,c_t=a_0+\sum_t p_t w_t l_t$, where $p_t$ is the pre-tax price of date-$t$ consumption. Divide by $1.1$:

$$\sum_t p_t c_t=\frac{a_0}{1.1}+\sum_t p_t\,\frac{w_t l_t}{1.1}.$$

This is the budget with a labor income tax of $1-1/1.1=9.09\%$ and a one-time levy of $9.09\%$ on initial wealth.

**Wrong turns:** answering "10 percent" for the capital tax, which confuses taxing a flow at every date with taxing the return between dates; forgetting the levy on $a_0$, which is Result 3's lump-sum tax on capital already in place, built into every consumption tax that starts today.

---

**P3** *(Formal (a) · Exegetical (b).)*

(a) Capitalists' steady-state Euler equation pins the after-tax return at $\rho$, so $(1-\tau_K)(f'(k)-\delta)=0.05$ and $k=(0.3/f'(k))^{1/0.7}$, with wage $w=0.7\,k^{0.3}$.

- Credible zero: pre-tax return $5\%$, $f'(k)=0.13$, $k=3.302$, $w=1.0017$.
- Expected 35 percent: pre-tax return $0.05/0.65=7.69\%$, $f'(k)=0.1569$, $k=2.524$ (23.6 percent less), $w=0.9241$ (7.7 percent less).
- Revenue $0.35\times0.0769\times2.524=0.0679$. The wage falls by $0.0776$, so workers lose $0.0097$ per period net of all the revenue.

**Must hit, strict (b):**

- Once the capital exists it is sunk, so a tax on it is lump-sum at that date, and a government free to re-optimize wants to levy it (Result 3): the zero is optimal before savers act and not after.
- Credibility needs commitment that is costly to reverse: a constitutional or treaty limit, a reputation the government would lose, or a delegation of the decision. Naming any one of these earns credit.

**Wrong turns:** answering that savers doubt it because the government needs the revenue (any government needs revenue; the point is that the levy is non-distorting *ex post*); treating (a)'s revenue as a gain to workers without netting the wage loss.

**Model answer (b):** Once savers have built the capital it cannot be unbuilt, so a tax on it distorts nothing at that date, and a government that can re-optimize will want to levy it, whatever it announced before. Only a commitment that is costly to reverse, such as a constitutional limit or a reputation the government values, makes the zero believable.

</details>

## Flashback

**From Lesson [5.4](05-04-participation-and-the-eitc.md) (The bottom of the schedule: participation and the EITC):** *(Formal (a)–(b) · Exegetical (c).)* Invented numbers, no income effects. Non-workers ($z_0=0$) receive a grant of 5,000 dollars, so $T_0=-5{,}000$; the first occupation pays $z_1=8{,}000$. (a) Suppose responses are purely intensive, with $h_0=0.10$ of the population not working, $h_1=0.08$ in the first occupation, intensive elasticity $\zeta_1=0.5$ and weight $g_0=1.6$ on non-workers. Recall Saez's rule $\frac{T_1-T_0}{c_1-c_0}=\frac{h_0(g_0-1)}{\zeta_1 h_1}$. Find the rate on the first 8,000 dollars of earnings, $T_1$, and the worker's consumption $c_1$. (b) Suppose instead responses are purely extensive, with participation elasticity $\eta_1=0.52$ and weight $g_1=1.12$ on the working poor. Find the participation tax rate, $T_1$ and $c_1$. (c) In one sentence: which empirical question decides between the schedules in (a) and (b)?

<details>
<summary>Solution</summary>

(a) The right side is $0.10\times0.6/(0.5\times0.08)=1.5$. Since $c_1-c_0=z_1-(T_1-T_0)$, a ratio $x$ means a rate $x/(1+x)$ on earnings, here $1.5/2.5=60\%$. So $T_1-T_0=0.6\times8{,}000=4{,}800$ and $T_1=-200$: the worker still gets a net 200 dollars, and $c_1=8{,}200$ against $c_0=5{,}000$. Check: $4{,}800/3{,}200=1.5$. This is a negative income tax: a large grant withdrawn fast.

(b) $\tau_{p,1}=(1-1.12)/(1-1.12+0.52)=-0.12/0.40=-30\%$. So $T_1-T_0=-0.3\times8{,}000=-2{,}400$, $T_1=-7{,}400$ and $c_1=15{,}400$. Check: $-2{,}400/10{,}400=-0.12/0.52$. The worker receives more than the non-worker: a phase-in, EITC-style.

**Must hit, strict (c):**

- Whether low earners respond mainly on the extensive margin (whether to work) or the intensive margin (how much).
- The EITC evidence (Eissa-Liebman, Meyer-Rosenbaum) found a large participation response and small hours responses; the weights $g_0$ and $g_1$ are separate inputs.

**Model answer (c):** It turns on whether low earners mainly choose whether to work or how much to work, which the EITC expansion studies answered largely in favor of the participation margin; the weights on non-workers and on the working poor are separate inputs the formula takes as given.

**Wrong turns:** reading the ratio 1.5 in (a) as a 150 percent tax rate, when it divides by the consumption gain, not by earnings; measuring the participation tax in (b) against $T_0=0$ and forgetting the 5,000 grant.

</details>

## Connections

- **Backward:** Result 2 is [4.1](04-01-the-ramsey-rule.md)'s uniform-taxation logic with dates as goods, and the infinite-horizon cousin of [6.1](06-01-atkinson-stiglitz.md). Example 2's incidence is [2.1](02-01-partial-equilibrium-incidence.md)'s rule that the elastic side escapes, and it parallels [2.2](02-02-general-equilibrium-incidence-the-harberger-model.md)'s open economy, where capital's return is pinned by the world rate instead of by $\rho$.
- **Forward:** [6.3](06-03-the-inverse-euler-equation.md) adds private, risky skills and finds a positive savings wedge, for a reason Chamley-Judd's model cannot see.
- **Sideways:** the model is [`grad-macro` 2.3](../../grad-macro/lessons/02-03-ramsey-cass-koopmans.md) with a tax in the Euler equation. The capital levy is the fiscal twin of [`grad-macro` 6.2](../../grad-macro/lessons/06-02-policy-rules-taylor-principle.md)'s inflation bias, and [`economics-of-debt` 8.1](../../economics-of-debt/lessons/08-01-forgiveness-commitment-and-the-fresh-start.md) finds the same time inconsistency in debt relief. Whether capitalists' or workers' welfare should count for more is [`political-philosophy`](../../political-philosophy/syllabus.md)'s question.
