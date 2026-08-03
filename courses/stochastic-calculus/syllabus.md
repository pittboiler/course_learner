# Stochastic Calculus — Syllabus

> Tier 1 · ~23 lessons · Prereqs: [`probability-theory`](../probability-theory/syllabus.md), [`real-analysis`](../real-analysis/syllabus.md) · Roadmap id: `stochastic-calculus`

## Goal

Build the calculus that works on Brownian paths — jagged, nowhere-differentiable trajectories where the ordinary rules break — so you can integrate against noise and manipulate the results fluently. You will define and use the Itô integral, wield Itô's lemma as the stochastic chain rule, solve the SDEs that model everything from stock prices to particle motion, and change measure with Girsanov to make drift disappear, tying SDEs back to PDEs through Feynman–Kac. Deliberately lean: we lean on [`probability-theory`](../probability-theory/syllabus.md) for the deep measure-theoretic construction rather than rebuilding it, treat general semimartingale/Lévy/jump processes as a closing note only, and skip rough-path theory entirely.

## Dangerous Checklist

When you finish, you can:

- [ ] Simulate and reason about Brownian motion, and state its defining properties from memory
- [ ] Explain why a Brownian path is continuous yet nowhere differentiable, and why that kills ordinary calculus
- [ ] Compute the quadratic variation of a process and apply the "$dW\,dW = dt$" multiplication rules
- [ ] Construct the Itô integral from simple integrands and use the Itô isometry to compute its variance
- [ ] Recognize when an Itô integral is a martingale and exploit that to compute expectations
- [ ] Apply Itô's lemma to a function of a diffusion and read off the resulting drift and volatility
- [ ] Solve the geometric Brownian motion and Ornstein–Uhlenbeck SDEs in closed form
- [ ] Use the stochastic product rule (integration by parts) on a product of two Itô processes
- [ ] Change measure with Girsanov's theorem to remove a drift, and say what the new Brownian motion is
- [ ] State the martingale representation theorem and explain what it guarantees
- [ ] Use Feynman–Kac to write the parabolic PDE solved by an expected functional of a diffusion
- [ ] Write down the generator of a diffusion and its Fokker–Planck / Kolmogorov equations

## Modules

### Module 1: Brownian motion

Meet the strange object at the center of everything: continuous but infinitely wiggly, and just regular enough to build a calculus on.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Random walks to Brownian motion | See BM emerge as the scaling limit of a random walk | scaled random walk, the invariance principle, defining properties, existence |
| 1.2 | The Gaussian structure of BM | Compute anything about BM from its covariance | joint normality, independent increments, $\mathrm{Cov}(W_s,W_t)=\min(s,t)$ |
| 1.3 | Filtrations, adaptedness, and the Markov property | Set up the information framework the whole course needs | filtration $\mathcal{F}_t$, adapted process, Markov property, strong Markov |
| 1.4 | The pathological paths | Understand why ordinary calculus is doomed here | continuous but nowhere differentiable, unbounded total variation, self-similarity |
| 1.5 | Quadratic variation and the martingale property | Find the finite quantity that survives — the seed of Itô calculus | quadratic variation $[W]_t = t$, $W_t$ and $W_t^2 - t$ as martingales |
| 1.6 | Stopping times, optional stopping, and martingale inequalities | Carry the discrete martingale toolkit into continuous time | stopping time, optional stopping/sampling, Doob's maximal & $L^2$ inequalities, martingale convergence |

**Boss problem 1:** Partition $[0,T]$ and show that the sum of squared increments of Brownian motion converges (in $L^2$) to $T$, while the sum of absolute increments diverges — pinning down exactly why total variation is infinite but quadratic variation is finite, and why that number $T$ is the whole reason the Itô integral exists.

### Module 2: The Itô integral

You cannot integrate against a path of unbounded variation the usual way. Itô's fix: fix the integrand at the *left* endpoint, and a clean, martingale-valued integral falls out.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Why Riemann–Stieltjes fails | See concretely why $\int f\,dW$ needs a new definition | unbounded variation, sampling-point dependence, Itô vs Stratonovich choice |
| 2.2 | The integral for simple integrands | Define $\int H\,dW$ where $H$ is piecewise constant | simple/elementary process, left-endpoint evaluation, the martingale property |
| 2.3 | The Itô isometry and the general integral | Extend to all adapted, square-integrable integrands | Itô isometry, $L^2$ completion/limit, well-definedness |
| 2.4 | The Itô integral as a martingale | Use "the integral has mean zero" as a computational tool | martingale property, zero mean, variance via the isometry |
| 2.5 | Quadratic variation and the $dW\,dW=dt$ rules | Get the multiplication table that powers Itô's lemma | quadratic variation of an integral, $dt\,dt = dt\,dW = 0$, $dW\,dW = dt$ |

**Boss problem 2:** Compute $\int_0^T W_t\,dW_t$ directly from the definition (limit of left-endpoint Riemann sums) and land on $\tfrac12 W_T^2 - \tfrac12 T$. Explain where the extra $-\tfrac12 T$ comes from, why the naive answer $\tfrac12 W_T^2$ is wrong, and verify your result has mean zero using the martingale property.

### Module 3: Itô's lemma and stochastic differential equations

The chain rule with a correction term — and the machinery to write down, solve, and check the equations that model noisy dynamics.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Itô's lemma for a function of BM | Differentiate $f(W_t)$ and get the extra $\tfrac12 f''\,dt$ term | Itô's formula, the second-order correction, Taylor-expansion heuristic |
| 3.2 | Itô processes and the general Itô formula | Apply the chain rule to $f(t, X_t)$ for a full diffusion | Itô process $dX = \mu\,dt + \sigma\,dW$, time-dependent Itô formula |
| 3.3 | Stochastic differential equations | Read an SDE as drift + diffusion, and know when it has a solution | SDE form, existence & uniqueness (Lipschitz/growth), strong solutions |
| 3.4 | Geometric Brownian motion | Solve the SDE behind Black–Scholes and know its distribution | multiplicative noise, log-transform, lognormal marginals, drift correction |
| 3.5 | The Ornstein–Uhlenbeck process | Solve a mean-reverting SDE and find its stationary law | mean reversion, integrating-factor solution, stationary Gaussian distribution |
| 3.6 | The product rule and integration by parts | Differentiate products of Itô processes with the cross term | stochastic product rule, covariation $d[X,Y]$, integration by parts |

**Boss problem 3:** Take geometric Brownian motion $dS_t = \mu S_t\,dt + \sigma S_t\,dW_t$. Apply Itô's lemma to $\log S_t$ to solve it in closed form, then use the solution to compute $\mathbb{E}[S_t]$ and $\mathrm{Var}(S_t)$ exactly — showing where the $-\tfrac12\sigma^2$ drift correction hides and why $\mathbb{E}[S_t] = S_0 e^{\mu t}$ despite it.

### Module 4: Change of measure and the PDE bridge

Two deep payoffs: reweight probability to delete a drift (the engine of arbitrage-free pricing), and translate every diffusion into a PDE (the link to physics and to solving expectations).

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Radon–Nikodym derivatives and equivalent measures | Reweight one probability measure into another | Radon–Nikodym derivative, equivalent measures, change-of-measure density |
| 4.2 | Girsanov's theorem | Remove a drift by switching measure, and name the new BM | Girsanov's theorem, exponential martingale, drift removal, Novikov condition |
| 4.3 | The martingale representation theorem | Learn that every BM-martingale is a stochastic integral | martingale representation, completeness, hedging interpretation |
| 4.4 | The infinitesimal generator | Encode a diffusion's local behavior in a differential operator | generator $\mathcal{A} = \mu\partial_x + \tfrac12\sigma^2\partial_{xx}$, Dynkin's formula |
| 4.5 | The Feynman–Kac formula | Turn an expected functional of a diffusion into a PDE | Feynman–Kac, backward Kolmogorov / parabolic PDE, terminal-value problem |
| 4.6 | Fokker–Planck and the Kolmogorov equations | Track how the whole density evolves — the stat-mech picture | Fokker–Planck / forward Kolmogorov equation, adjoint generator, Langevin link |

**Boss problem 4:** Given a diffusion $dX_t = \mu(X_t)\,dt + \sigma(X_t)\,dW_t$ and the expected discounted functional $u(t,x) = \mathbb{E}\!\left[e^{-r(T-t)}g(X_T)\mid X_t = x\right]$, use Feynman–Kac to write the parabolic PDE and boundary condition that $u$ solves. Then specialize to geometric Brownian motion and recognize the Black–Scholes PDE — the preview of the entire option-pricing edifice.

## Sources of truth

- Øksendal, *Stochastic Differential Equations: An Introduction with Applications* (primary; the clean path from BM to SDEs to Feynman–Kac)
- Shreve, *Stochastic Calculus for Finance II: Continuous-Time Models* (Itô integral, Girsanov, and the finance-facing intuition)
- Karatzas & Shreve, *Brownian Motion and Stochastic Calculus* (the rigorous reference for definitions and proofs)
- Evans, *An Introduction to Stochastic Differential Equations* (short, intuition-first, for the generator/PDE bridge)

## Notes

- This course is the continuous-time engine that [`mathematical-finance`](../mathematical-finance/syllabus.md) runs on: geometric Brownian motion (3.4), Girsanov (4.2), and the Feynman–Kac PDE (4.5) are exactly Black–Scholes pricing under the risk-neutral measure.
- It builds directly on the martingale theory from [`probability-theory`](../probability-theory/syllabus.md) — the Itô integral *is* a martingale, and that fact does most of the computational work here.
- The SDE ↔ PDE bridge (Feynman–Kac, the generator) connects this course to [`pdes`](../pdes/syllabus.md): parabolic equations solved probabilistically, and vice versa.
- The same diffusion mathematics is the Langevin equation and the Fokker–Planck equation of [`stat-mech`](../stat-mech/syllabus.md) — lesson 4.6 is the shared boundary. Diffusion is one idea wearing a finance hat and a physics hat.
- **Lesson 1.6 added during prep (2026-07-23):** the syllabus leans on [`probability-theory`](../probability-theory/syllabus.md) for *discrete-time* martingale theory, but the Itô integral needs its *continuous-time* upgrade — stopping times, optional stopping/sampling, and Doob's inequalities. 1.6 makes that stochastic-process theory an explicit lesson rather than an assumed background, so the martingale arguments the rest of the course leans on stand on their own.
