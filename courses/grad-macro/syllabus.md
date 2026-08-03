# Grad Macroeconomics — Syllabus

> Tier 2 · ~30 lessons · Prereqs: [`grad-micro`](../grad-micro/syllabus.md), [`real-analysis`](../real-analysis/syllabus.md), [`probability-theory`](../probability-theory/syllabus.md) · Roadmap id: `grad-macro`

## Goal

Learn macro the way the first-year PhD sequence teaches it: dynamic, stochastic, general-equilibrium models built from optimizing households and firms, solved with recursive methods. Open with the dynamic-programming toolkit the whole subject runs on — Bellman equations, Euler equations, transversality, and recursive competitive equilibrium — then use it to work through growth (Solow, Ramsey, endogenous), overlapping generations, business cycles (RBC and a first pass at New Keynesian), the micro-founded theory of consumption, investment, and asset pricing, and finally policy, frictions, and unemployment. You will be able to set up a dynamic GE model, characterize its optimum and equilibrium, and reason quantitatively about growth, cycles, and policy. Deliberately kept light: heterogeneous-agent computational depth (Aiyagari and Krusell–Smith appear as a taste, not a project), deep monetary and international macro, and structural estimation — the empirical counterpart lives in [`econometrics`](../econometrics/syllabus.md). A tier-2 course: it assumes the optimization and equilibrium machinery of [`grad-micro`](../grad-micro/syllabus.md), the analysis toolkit of [`real-analysis`](../real-analysis/syllabus.md) (contraction mappings, fixed points, compactness), and the [`probability-theory`](../probability-theory/syllabus.md) needed for stochastic dynamics and expectations.

## Dangerous Checklist

When you finish, you can:

- [ ] Set up a deterministic or stochastic dynamic-programming problem and write its Bellman equation
- [ ] Derive Euler equations and the transversality condition, and check them as necessary/sufficient
- [ ] Solve a stochastic growth model's Bellman equation analytically in the log-utility/Cobb–Douglas case and read off the policy function
- [ ] Define and compute a recursive competitive equilibrium
- [ ] Analyze the Solow and Ramsey models: steady state, convergence, the golden rule, and the saddle-path
- [ ] Explain endogenous growth (AK, R&D/ideas) and decompose growth with growth accounting
- [ ] Solve an OLG model and diagnose dynamic inefficiency, over-accumulation, and the role of money/bubbles
- [ ] Calibrate and interpret a real-business-cycle model and explain its propagation mechanism
- [ ] Set up the New Keynesian model, derive the Phillips curve, and analyze a Taylor rule
- [ ] Explain the permanent-income/life-cycle hypothesis, precautionary saving, and q-theory of investment
- [ ] Derive the consumption-based asset-pricing equation from the household Euler equation and use it to state the equity-premium puzzle
- [ ] Analyze search-and-matching (Diamond–Mortensen–Pissarides) unemployment and sketch a heterogeneous-agent economy

## Modules

### Module 1: The dynamic optimization toolkit

The recursive machinery every later model is built on — continues `grad-micro`'s Module 1 into infinite-horizon, stochastic settings.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Sequence vs. recursive problems | Turn an infinite-horizon plan into a functional equation | sequence problem, value function, Bellman equation, stationarity |
| 1.2 | The principle of optimality | Justify why the Bellman equation is legitimate | principle of optimality, Blackwell's conditions, contraction mapping, existence/uniqueness of $V$ |
| 1.3 | Euler equations and transversality | Derive and interpret the intertemporal first-order conditions | Euler equation, transversality condition, necessity and sufficiency |
| 1.4 | The envelope theorem in dynamics | Differentiate the value function and get the Benveniste–Scheinkman formula | envelope theorem, $V'$, marginal value of the state, policy function |
| 1.5 | Stochastic dynamic programming | Add uncertainty and expectations to the Bellman equation | Markov shocks, expected value function, conditional expectation, $E_t$ |
| 1.6 | Recursive competitive equilibrium | Define equilibrium as a fixed point in functions | RCE, individual vs. aggregate state, the "big-K, little-k" trick, laws of motion |

**Boss problem 1:** Solve the stochastic one-sector growth model with log utility, Cobb–Douglas production, and full depreciation: guess-and-verify the value function, derive the closed-form consumption/savings policy function, confirm the Euler and transversality conditions hold, and describe how the policy responds to the productivity shock.

### Module 2: Economic growth

What makes economies rich and why they converge (or don't) — the workhorse growth models.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The Solow model | Get long-run growth from capital accumulation and technology | capital accumulation, steady state, balanced growth path, role of technology |
| 2.2 | Convergence and the Solow diagram | Explain why poor countries can grow faster | conditional vs. absolute convergence, the Solow diagram, transition dynamics |
| 2.3 | The Ramsey–Cass–Koopmans model | Replace a fixed saving rate with an optimizing household | infinitely-lived household, Euler equation, phase diagram, saddle-path stability |
| 2.4 | The golden rule and dynamic efficiency | Ask whether an economy saves too much or too little | golden-rule capital, modified golden rule, dynamic efficiency |
| 2.5 | Endogenous growth: AK and ideas | Make growth arise from within the model | AK model, no diminishing returns, R&D/ideas, nonrivalry, increasing returns |
| 2.6 | Growth accounting | Decompose observed growth into its sources | Solow residual, total factor productivity, growth accounting identity |

**Boss problem 2:** In the Ramsey model with CRRA utility and Cobb–Douglas production, derive the two-equation dynamic system for consumption and capital, locate the steady state, draw the phase diagram with its saddle path, and compare the steady-state capital stock to the golden-rule level — explaining whether the optimizing economy over- or under-accumulates and why.

### Module 3: Overlapping generations

Drop the immortal household — finite lives change efficiency, money, and policy fundamentally.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The OLG model | Build an economy of overlapping finite-lived cohorts | two-period lives, young/old, capital accumulation, competitive equilibrium |
| 3.2 | Dynamic inefficiency and over-accumulation | See how competitive OLG equilibria can be Pareto-improvable | dynamic inefficiency, over-accumulation, failure of the First Welfare Theorem |
| 3.3 | Money and rational bubbles | Explain how intrinsically worthless assets can have value | fiat money as a bubble, the Samuelson case, rational bubbles, existence conditions |
| 3.4 | Social security and intergenerational transfers | Analyze pay-as-you-go transfers and Ricardian equivalence | pay-as-you-go vs. funded, intergenerational transfers, Ricardian equivalence and its limits |

**Boss problem 3:** In a two-period OLG model with log utility and Cobb–Douglas production, solve for the equilibrium capital stock and interest rate, determine the condition under which the economy is dynamically inefficient, and show how introducing an unfunded pay-as-you-go social security scheme can make every generation better off.

### Module 4: Business cycles

Take the stochastic growth model to data — the RBC program and its Keynesian challenger.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The real business cycle model | Explain fluctuations as optimal responses to productivity shocks | RBC, technology shocks, intertemporal labor supply, competitive fluctuations |
| 4.2 | Calibration and the stochastic growth model | Parameterize and simulate the model to match moments | calibration, the stochastic growth model, matching business-cycle moments, log-linearization |
| 4.3 | Propagation and impulse responses | Trace how a one-time shock plays out over time | propagation mechanism, impulse response functions, internal vs. external propagation |
| 4.4 | Nominal rigidities and the New Keynesian setup | Add sticky prices and monopolistic competition | monopolistic competition, Calvo pricing, nominal rigidity, the NK building blocks |
| 4.5 | The New Keynesian Phillips curve | Derive the modern Phillips curve and the demand block | NK Phillips curve, dynamic IS/Euler equation, output gap, forward-looking inflation |

**Boss problem 4:** Log-linearize the stochastic growth model around its steady state to get a linear system in the deviations of capital, consumption, and output; solve for the policy function; and describe the impulse response of output and consumption to a persistent TFP shock — explaining which propagation channels make the response hump-shaped or monotone.

### Module 5: Consumption, investment, and asset pricing

The micro-founded theory of the three quantities macro cares about most.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | The permanent-income and life-cycle hypotheses | Explain consumption smoothing over time | permanent income, life-cycle saving, random-walk consumption (Hall), certainty equivalence |
| 5.2 | Precautionary saving and buffer stocks | Add prudence and borrowing limits | precautionary saving, convex marginal utility (prudence), buffer-stock behavior, liquidity constraints |
| 5.3 | q-theory of investment | Ground investment in adjustment costs and asset values | Tobin's $q$, adjustment costs, marginal vs. average $q$, investment Euler equation |
| 5.4 | The consumption-based asset-pricing model | Price any asset off the household's Euler equation | stochastic discount factor, the pricing equation $p = E[m x]$, risk-free rate, risk premium |
| 5.5 | The equity-premium puzzle | Confront the model with the data and see it fail | equity premium, Mehra–Prescott puzzle, implied risk aversion, resolutions (a taste) |

**Boss problem 5:** Starting from a representative household's intertemporal Euler equation with CRRA utility, derive the consumption-based asset-pricing equation and the stochastic discount factor $m_{t+1}$; specialize to lognormal consumption growth to get the risk-free rate and the equity premium in closed form; then plug in postwar US moments and show why the observed premium requires an implausibly high coefficient of relative risk aversion — the equity-premium puzzle.

### Module 6: Frictions, policy, and unemployment

Where policy bites and where the frictionless model breaks — the applied payoff.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | Monetary and fiscal policy in the NK model | Analyze stabilization in the three-equation model | NK three-equation model, monetary transmission, fiscal multiplier, demand shocks |
| 6.2 | Policy rules and the Taylor principle | Design and evaluate interest-rate rules | Taylor rule, the Taylor principle, determinacy, rules vs. discretion, time inconsistency |
| 6.3 | Search and matching: the DMP model | Model unemployment as a frictional flow problem | matching function, job creation/destruction, vacancies, Beveridge curve, wage bargaining |
| 6.4 | A taste of heterogeneous-agent macro | See what incomplete markets and inequality add | incomplete markets, Aiyagari model, precautionary buffer distribution, Krusell–Smith (sketch) |

**Boss problem 6:** In the Diamond–Mortensen–Pissarides model with a Cobb–Douglas matching function and Nash-bargained wages, derive the job-creation condition and the wage equation, solve for equilibrium market tightness and the unemployment rate, and show how a rise in unemployment benefits or in worker bargaining power shifts equilibrium unemployment.

## Sources of truth

- Ljungqvist & Sargent, *Recursive Macroeconomic Theory* (primary; the recursive-methods spine)
- Romer, *Advanced Macroeconomics* (intuition-first exposition of growth, cycles, and policy)
- Acemoglu, *Introduction to Modern Economic Growth* (rigorous growth theory and dynamic optimization)
- Stokey & Lucas (with Prescott), *Recursive Methods in Economic Dynamics* (the dynamic-programming foundations)

## Notes

- Module 1 continues [`grad-micro`](../grad-micro/syllabus.md)'s Module 1: dynamic programming is introduced there as a tool and pursued here into infinite-horizon, stochastic growth, cycles, and equilibrium.
- Module 5's asset pricing overlaps [`mathematical-finance`](../mathematical-finance/syllabus.md) — this course reaches the stochastic discount factor through the household Euler equation (the consumption-based route); the finance course reaches it through no-arbitrage and risk-neutral pricing. The [`stochastic-calculus`](../stochastic-calculus/syllabus.md) toolkit underlies the continuous-time versions of both.
- Empirical macro — estimating and testing these models — is the counterpart course [`econometrics`](../econometrics/syllabus.md); the phase-diagram and stability analysis draws on [`dynamical-systems`](../dynamical-systems/syllabus.md).
