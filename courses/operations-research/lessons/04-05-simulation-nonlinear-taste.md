# Operations Research · Lesson 4.5: A taste of simulation & nonlinear programming

> ⏱ ~15 min · Module 4: Queueing & Inventory · Builds on: [4.4 Inventory: EOQ & the newsvendor](04-04-inventory-eoq-newsvendor.md), [4.2 The M/M/1 queue](04-02-the-mm1-queue.md), [2.1 The LP dual & complementary slackness](02-01-lp-dual-complementary-slackness.md), [`prob-stat-refresher` 3.3](../../prob-stat-refresher/lessons/03-03-central-limit-theorem.md) · Unlocks: the rest of the field — [`convex-optimization`](../../convex-optimization/syllabus.md) for the continuous theory, [`reinforcement-learning`](../../reinforcement-learning/syllabus.md) for MDPs at scale

## Why this matters

Every closed form in this module was bought with an assumption. [4.1](04-01-poisson-arrivals-littles-law.md) needed Poisson arrivals; [4.2](04-02-the-mm1-queue.md) needed exponential service and an infinite waiting room; [4.3](04-03-mmc-pooling-networks.md) needed identical servers and one customer class; [4.4](04-04-inventory-eoq-newsvendor.md) needed a constant demand rate or a single selling season. Real systems violate all of it — appointments arrive *on a schedule*, an MRI scan takes almost exactly 25 minutes every time, customers balk when the line is long, trauma cases jump the queue, and the night shift has three fewer nurses. **Simulation is the escape hatch that lets those assumptions be honest instead of load-bearing**: when the algebra runs out, you build the system in software and watch it.

The other escape hatch is for the *optimization* half of the course. Everything in Modules 1–3 assumed the objective and constraints were linear (or linear plus integrality). Quantity discounts, economies of scale, revenue as price times quantity, and portfolio risk are all nonlinear, and the moment you leave linearity a new question appears that LP never had to ask: **is my problem convex?** This lesson is a taste of both — enough to recognize which world you are in and to know where the real treatment lives.

## The idea

**Simulation.** Do not step a clock forward in tiny increments; nothing happens in most of them. Instead keep a **list of scheduled future events** sorted by time, jump the clock straight to the earliest one, update the state, and let that event schedule whatever it causes. An arrival schedules the *next* arrival, and — if the server is free — schedules its own departure. A departure pulls the next customer out of the queue and schedules *their* departure. The system evolves in jumps, and between jumps nothing changes, so nothing needs computing. That is **discrete-event simulation**, and it is why a laptop can simulate a year of an airport in seconds.

The subtlety is not the mechanics. It is that **a simulation run is an experiment, not a calculation.** Feed it different random numbers and you get a different answer. So its output is a random variable, one run tells you very little, and every result must arrive with an error bar.

**Nonlinearity.** In an LP you never worry about getting stuck: the feasible set is a polytope, the objective is linear, so improving locally until you cannot improve is *proof* of global optimality ([1.3](01-03-the-simplex-method.md)). Bend the objective or the constraints and that guarantee is no longer free — it now depends entirely on **convexity**. Convex: local optimum is global, and reliable algorithms exist. Nonconvex: your solver returns a point, tells you the gradient is zero, and cannot tell you whether a better valley sits one ridge over.

## The formal version

### Part 1 — Simulation

#### The event-list mechanism

State variables for a single-server queue: the clock $t$, the number in system $n(t)$, and the queue contents. The **event list** holds pairs (time, event type). The loop is:

1. Pop the earliest event from the list; advance the clock to its time.
2. Update the state.
3. Schedule any events this one causes, inserting them into the list in time order.
4. Repeat until a stopping rule fires.

*In words: nothing happens between events, so skip the time in between.*

Here is a full trace. Customers arrive with interarrival times $2, 3, 2, 5$ minutes (so arrivals at $t = 2, 5, 7, 12$) and need service times $4, 2, 3, 2$ minutes. One server, first-come-first-served. $\text{A}k$ is customer $k$'s arrival, $\text{D}k$ their departure.

| $t$ | Event | State after | Event list after |
|---|---|---|---|
| 0 | initialize | $n = 0$, server idle | A1@2 |
| 2 | A1 | $n = 1$, C1 in service | A2@5, D1@6 |
| 5 | A2 | $n = 2$, C2 waiting | D1@6, A3@7 |
| 6 | D1 | $n = 1$, C2 enters service | A3@7, D2@8 |
| 7 | A3 | $n = 2$, C3 waiting | D2@8, A4@12 |
| 8 | D2 | $n = 1$, C3 enters service | D3@11, A4@12 |
| 11 | D3 | $n = 0$, server idle | A4@12 |
| 12 | A4 | $n = 1$, C4 in service | D4@14 |

Every departure time is the service start plus the service time: $2+4=6$, $6+2=8$, $8+3=11$, $12+2=14$.

**Consistency check on the trace.** Time in system per customer: C1 $= 6-2 = 4$, C2 $= 8-5 = 3$, C3 $= 11-7 = 4$, C4 $= 14-12 = 2$, so $\sum_k W_k = 13$ customer-minutes. Independently, integrate the step function $n(t)$ over the window from 0 to 14 minutes, block by block:

$$\underbrace{3(1)}_{n=1 \text{ on } 2\text{–}5} + \underbrace{1(2)}_{n=2 \text{ on } 5\text{–}6} + \underbrace{1(1)}_{6\text{–}7} + \underbrace{1(2)}_{7\text{–}8} + \underbrace{3(1)}_{8\text{–}11} + \underbrace{2(1)}_{12\text{–}14} \;=\; 3+2+1+2+3+2 \;=\; 13 .$$

The two numbers agree at **13**, which is exactly [4.1](04-01-poisson-arrivals-littles-law.md)'s Little's law in sample-path form: with $\lambda = 4/14$ per minute and $\bar W = 13/4 = 3.25$ min, $L = \lambda \bar W = (4/14)(3.25) = 13/14 \approx 0.93$. Server busy $4+2+3+2 = 11$ of 14 minutes, and the trace shows the server idle exactly on the intervals 0 to 2 and 11 to 12 — 3 minutes. Consistent.

#### Generating the randomness: inverse transform

The simulation needs draws from a distribution, and all a computer gives you is $U \sim \text{Uniform}(0,1)$.

> **Inverse-transform method.** Let $F$ be a CDF with inverse $F^{-1}$. If $U \sim \text{Uniform}(0,1)$, then $X = F^{-1}(U)$ has CDF $F$.

*In words: pick a random height on the CDF and read off the value underneath it.*

Two lines of proof: $P(X \le x) = P(F^{-1}(U) \le x) = P(U \le F(x)) = F(x)$, where the middle step applies the increasing function $F$ to both sides and the last uses $P(U \le u) = u$ on $(0,1)$.

Apply it to the exponential, whose CDF is $F(x) = 1 - e^{-\lambda x}$ for $x \ge 0$ (rate $\lambda$, mean $1/\lambda$) — the interarrival distribution of the Poisson process from [4.1](04-01-poisson-arrivals-littles-law.md). Set $U = 1 - e^{-\lambda X}$ and solve: $e^{-\lambda X} = 1 - U$, so $X = -\ln(1-U)/\lambda$. Since $1-U$ is uniform on $(0,1)$ whenever $U$ is, the standard form is

$$\boxed{\,X = -\frac{\ln U}{\lambda}\,}$$

*In words: one logarithm turns a uniform random number into an exponential interarrival time.*

**Numeric example.** Arrivals at $\lambda = 12$ per hour (mean gap 5 minutes). The generator returns $U = 0.37$. Then $\ln 0.37 = -0.9943$, so

$$X = \frac{0.9943}{12} = 0.08285\ \text{hours} = 4.97\ \text{minutes}.$$

*Check.* $e^{-1} = 0.3679$, so $\ln(0.37)$ must sit just above $-1$, and $X$ just under $1/\lambda = 5$ minutes. It does. Note also that $U$ near 1 gives a *short* gap and $U$ near 0 a long one — the map is decreasing, which is fine, and $U = 0$ must be excluded.

When $F^{-1}$ has no closed form (the normal, for one), you fall back on **rejection sampling** — draw from an easy distribution that dominates the target, and keep each draw with a probability that corrects the shape — or on a purpose-built algorithm; that is a numerical-methods topic, not an OR one.

#### The statistics of the output — the part people skip

A single run gives one realization of a random process. Three facts govern how you turn runs into an answer.

**Replication.** Run the model $n$ times with independent random seeds, collect one summary number per run (say $\bar W_i$, run $i$'s average wait), and treat $\bar W_1, \dots, \bar W_n$ as an i.i.d. sample. Then report a confidence interval, exactly as in [`prob-stat-refresher` 4.2](../../prob-stat-refresher/lessons/04-02-confidence-intervals.md):

$$\bar W \pm z_{1-\alpha/2}\,\frac{s}{\sqrt n},$$

with $s$ the sample standard deviation across runs. (Use the $t$ quantile when $n$ is small.) *In words: the answer is an interval, and a simulation output reported without one is not a result.*

**Warm-up.** A model that starts empty and idle is not in steady state — the first customers wait less than they eventually will, so early observations are **biased downward**. The standard remedy is to discard an initial **warm-up period** and only collect statistics after it, choosing the cutoff by plotting the running average and seeing where it flattens. (For a *terminating* system — a shop that genuinely opens empty at 9 a.m. — there is no transient to discard; empty is the truth.)

**The $1/\sqrt n$ tax.** The half-width $h = z s/\sqrt n$ shrinks like $1/\sqrt n$, by the central limit theorem ([`prob-stat-refresher` 3.3](../../prob-stat-refresher/lessons/03-03-central-limit-theorem.md)). So

$$h \to \frac{h}{2} \quad\Longrightarrow\quad n \to 4n .$$

*In words: every extra decimal place of precision costs a hundredfold more computing.* Numbers in Example 1.

#### Validation

Before you trust a simulation on the messy case you built it for, **run it on a case whose answer you already know.** Set the interarrival and service distributions to exponential, one server, infinite queue — that is M/M/1, and [4.2](04-02-the-mm1-queue.md) gives you $L = \rho/(1-\rho)$ exactly. If your simulated $L$ has a confidence interval that covers the formula, the event logic, the random-variate generator, and the statistics collector are all probably right; *then* you switch on the scheduled arrivals, the balking, and the shift change. Skipping this step is how a plausible-looking model with a sign error in the queue discipline ends up sizing a hospital.

### Part 2 — Nonlinear programming

#### Where linearity breaks

Four familiar OR situations that are simply not linear:

- **Quantity discounts and economies of scale.** Cost per unit falls as you buy more, so total cost is *piecewise linear with decreasing slope* — concave. Minimizing a concave cost is not an LP.
- **Revenue when you set the price.** If both price $p$ and quantity $q$ are decisions, revenue $pq$ is a **product of decision variables** — bilinear, and neither convex nor concave.
- **Risk.** Portfolio variance is $x^T \Sigma x$ with $\Sigma$ the covariance matrix — quadratic, and convex whenever $\Sigma$ is positive semidefinite (which it always is).
- **Ratios.** "Maximize profit per hour" or "maximize return per unit of risk" is $\,(c^Tx)/(d^Tx)$ — a fractional program, nonlinear by construction.

Some of these can be **linearized**. A piecewise-linear function can be represented exactly with binary variables and segment weights — the idiom from [3.1](03-01-modeling-with-integer-variables.md) — and a smooth curve can be approximated by enough linear pieces; you pay in integer variables and get to keep branch-and-bound ([3.2](03-02-branch-and-bound-cutting-planes.md)). Linear-fractional programs can be transformed into LPs. A product of two continuous variables generally cannot be linearized exactly, and neither can most genuinely curved objectives.

#### Convex versus nonconvex — the distinction that actually matters

> If the problem is **convex** — convex objective being minimized over a convex feasible set — then every local optimum is a global optimum, and efficient algorithms with optimality certificates exist. If it is **nonconvex**, a solver can stop at a local optimum with no way to detect that a better one exists, and "solved" honestly means "solved as far as we could tell."

*In words: convexity is what makes "I cannot improve from here" mean "this is the best."* You met that theorem in [`convex-optimization` 2.1](../../convex-optimization/lessons/02-01-convex-problem-local-global.md), and it is the same fact that licensed simplex's stopping rule in [1.3](01-03-the-simplex-method.md) — an LP is the flattest possible convex program.

**Recognizing which case you are in is the single most important question in nonlinear optimization**, and it comes before any choice of algorithm. Practical tests — positive semidefinite Hessian, sublevel sets of convex functions, and the composition and operation rules that let you certify convexity by inspection instead of by second derivatives — are [`convex-optimization` 1.4](../../convex-optimization/lessons/01-04-recognizing-convexity.md), with the function zoo in [`convex-optimization` 1.3](../../convex-optimization/lessons/01-03-convex-functions-epigraph.md). The convex quadratic case, which covers portfolio variance and least squares, is [`convex-optimization` 2.2](../../convex-optimization/lessons/02-02-linear-quadratic-programs.md).

Two traps worth naming now. **Maximizing** a convex function (or minimizing a concave one, like that discount cost) is *nonconvex* — the optimum flees to the boundary and local optima multiply. And a constraint that *looks* nonlinear may still carve out a convex set: $x_1x_2 \ge 4$ with $x > 0$ is convex, as P3 asks you to show.

#### KKT: complementary slackness, generalized

Here is the satisfying part. In [2.1](02-01-lp-dual-complementary-slackness.md) you certified an LP optimum with **complementary slackness**: for each constraint, either the constraint is tight or its dual variable is zero, never both slack. In [2.2](02-02-shadow-prices-sensitivity.md) you read those dual variables as **shadow prices** — the marginal value of relaxing a resource.

The **Karush–Kuhn–Tucker (KKT) conditions** are exactly that structure, for nonlinear problems. For $\min f(x)$ subject to $g_i(x) \le 0$, they say: the objective gradient is a nonnegative combination of the active constraint gradients, the multipliers $\lambda_i \ge 0$, and $\lambda_i\,g_i(x) = 0$ for every $i$ — *either the constraint is tight or its multiplier is zero*. Same sentence, same shadow-price reading of $\lambda_i$. For convex problems (with a constraint qualification) KKT is necessary **and** sufficient; for nonconvex ones it is only necessary, which is precisely why a zero gradient proves nothing there.

We do not derive them here — that is [`convex-optimization` 3.3](../../convex-optimization/lessons/03-03-kkt-conditions.md), built on the Lagrangian dual ([`convex-optimization` 3.1](../../convex-optimization/lessons/03-01-lagrangian-dual-function.md)) and strong duality ([`convex-optimization` 3.2](../../convex-optimization/lessons/03-02-strong-duality-slater.md)). What you should take away is the direction of generality: **LP duality was the special case all along.** Module 2 was not a trick that happens to work for linear programs; it was KKT with the curvature switched off.

#### The algorithm shelf, one line each

- **Gradient methods** — step downhill along $-\nabla f$; cheap per step, slow near the optimum ([`convex-optimization` 4.1](../../convex-optimization/lessons/04-01-first-order-methods.md)).
- **Newton and quasi-Newton** — use curvature (the Hessian, or a running approximation to it) to take much better steps at higher cost per step ([`convex-optimization` 4.2](../../convex-optimization/lessons/04-02-newtons-method.md)).
- **Sequential quadratic programming (SQP)** — for constrained problems: repeatedly replace the model with a quadratic objective and linearized constraints, solve that, step, relinearize.
- **Multi-start and metaheuristics** (simulated annealing, genetic algorithms, tabu search) — for nonconvex problems, restart from many points or search stochastically, and accept that you get a good answer with no certificate. These are **explicitly out of this course's scope** per the [syllabus](../syllabus.md).

## Picture

![Top panel: a discrete-event timeline with four arrivals marked above a time axis and four departures below, the first departure highlighted in coral, and beneath it the resulting customer-count step function with the same event highlighted. Bottom panel: a convex curve with its single minimum marked in coral beside a wavy nonconvex curve with two grey local minima and one coral global minimum.](assets/04-05-fig1.svg)

## Worked examples

### Example 1 — validating a queue simulation, and paying the square-root tax

A repair shop is M/M/1 with $\lambda = 15$ jobs/hour and $\mu = 20$ jobs/hour. The analytic truth from [4.2](04-02-the-mm1-queue.md):

$$\rho = \frac{\lambda}{\mu} = 0.75, \qquad L = \frac{\rho}{1-\rho} = \frac{0.75}{0.25} = 3, \qquad W = \frac{1}{\mu - \lambda} = \frac{1}{5} = 0.2\ \text{h} = 12\ \text{min}.$$

You build a discrete-event model, generate interarrivals as $-\ln(U)/15$ hours and service times as $-\ln(U)/20$ hours, discard a 2-hour warm-up, and collect the time-average $n(t)$ over the next 8 simulated hours. Across $n = 20$ independent replications you get $\bar L = 2.87$ with sample standard deviation $s = 0.68$.

$$h = 1.96 \times \frac{0.68}{\sqrt{20}} = 1.96 \times 0.1521 = 0.298 \approx 0.30,$$

so the 95 percent interval is $2.87 \pm 0.30 = (2.57,\ 3.17)$. It covers the true $L = 3$: **the model is validated**, and you may now switch the service distribution to "almost exactly 25 minutes" and re-run, where no formula exists.

Now suppose that interval is too wide to size a staffing decision. Halving it to $0.15$ requires

$$n = \left(\frac{1.96 \times 0.68}{0.15}\right)^2 = \left(\frac{1.3328}{0.15}\right)^2 = (8.885)^2 = 79.0 \;\to\; 80 \text{ replications},$$

which is $4 \times 20$, as promised. *Check:* $1.96 \times 0.68/\sqrt{80} = 1.3328/8.9443 = 0.149$ — exactly half of $0.298$. And a half-width of $0.05$ needs

$$n = \left(\frac{1.3328}{0.05}\right)^2 = (26.656)^2 = 710.5 \;\to\; 711 \text{ replications}.$$

*Check:* $1.3328/\sqrt{711} = 1.3328/26.665 = 0.0500$. Going from $\pm 0.30$ to $\pm 0.05$ — one useful decimal place — costs about $36\times$ the compute ($711/20 = 35.6$). That factor is the reason simulation studies budget runs before they budget modeling time.

### Example 2 — three nonlinear OR models, sorted

**(i) A quantity discount.** A supplier charges 10 dollars per unit for the first 500 units and 8 dollars per unit beyond that. Total purchase cost is

$$c(q) = \begin{cases} 10q, & 0 \le q \le 500,\\ 1000 + 8q, & q > 500.\end{cases}$$

*Check continuity:* at $q = 500$, $10(500) = 5000$ and $1000 + 8(500) = 5000$. Agreed. The slope *decreases* from 10 to 8, so $c$ is **concave**, and minimizing total cost with $c$ in the objective is a **nonconvex** problem. Fix: one binary $y$ marking which segment is active plus segment variables $q_1 \in [0,500]$ and $q_2 \ge 0$ with big-M linking, exactly the construction in [3.1](03-01-modeling-with-integer-variables.md) — you trade nonconvexity for integrality and hand it to branch-and-bound.

**(ii) Pricing.** Maximize revenue $pq$ subject to the demand curve $q \le 100 - 2p$ and $p, q \ge 0$. As written the objective $pq$ has Hessian $\begin{pmatrix} 0 & 1\\ 1 & 0\end{pmatrix}$, whose eigenvalues are $+1$ and $-1$ — indefinite, so the objective is neither convex nor concave and the problem is nonconvex. **But** revenue increases in $q$, so the demand constraint binds; substitute $q = 100 - 2p$ and the problem collapses to

$$\max_{0 \le p \le 50}\; 100p - 2p^2,$$

a *concave* quadratic in one variable — a convex program. Setting the derivative $100 - 4p$ to zero gives $p^* = 25$, $q^* = 50$, revenue $1250$. *Check:* $p = 20$ gives $q = 60$ and revenue $1200$; $p = 30$ gives $q = 40$ and revenue $1200$. Both lower, symmetric about 25, as a parabola should be. **Moral: nonconvexity is sometimes a property of your formulation, not of your problem.**

**(iii) Risk.** Minimize portfolio variance $x^T\Sigma x$ subject to $\sum_i x_i = 1$, $x \ge 0$, and $\mu^Tx \ge r$. Because $\Sigma$ is a covariance matrix it is positive semidefinite, so the objective is convex; every constraint is linear. This is a **convex quadratic program** — solvable to global optimality with a certificate, and the flagship application in [`convex-optimization` 5.3](../../convex-optimization/lessons/05-03-portfolio-optimal-control.md).

## Watch out

- **You might think one very long simulation run substitutes for many short ones.** It does not, at least not directly: observations *within* a single run are strongly autocorrelated (a long queue at 10:00 means a long queue at 10:01), so the usual $s/\sqrt n$ formula badly underestimates the true error and your confidence interval comes out fraudulently narrow. Either replicate independently, or chop one long run into large **batches** and treat the batch means as approximately independent.
- **You might think a zero gradient means you are done.** In a convex problem it does. In a nonconvex one, $\nabla f(x) = 0$ says only that you are at a *stationary* point — which could be a local minimum, a saddle, or a local maximum — and even a genuine local minimum carries no information about the rest of the space. This is why the convexity question comes *first*.
- **You might trust the first minutes of a run.** A model booted empty and idle understates congestion until the system fills up, so a short unwarmed run of a busy queue can report a wait that is off by a factor of two. Discard the transient — and if the real system genuinely starts empty each day, say so deliberately rather than by accident.

## One-liner

> When the formula runs out, simulate — but replicate, warm up, and report an interval, because a run is an experiment; and when the model curves, ask whether it is convex *before* asking which solver, because that one bit decides whether "optimal" is a fact or a hope.

## Problems

**P1 (🟢)** A queueing model needs exponential interarrival times with rate $\lambda = 4$ customers per hour. The uniform generator returns $U_1 = 0.5$ and then $U_2 = 0.9$. Using inverse transform, produce the two interarrival times in minutes and the arrival times of the first two customers (the clock starts at $t = 0$). Then say why the *first* gap is shorter than the mean gap even though $U_1 = 0.5$ is the median uniform draw.

**P2 (🟡)** Hand-simulate a single-server first-come-first-served queue. Customers arrive at $t = 1, 3, 6, 10$ minutes with service times $3, 4, 1, 2$ minutes. Give each customer's service start time, departure time, and queue wait $W_{q,k}$. Then compute the average queue wait, the time-average number in system $L$ over $[0, 12]$, and verify your two answers against Little's law.

**P3 (🔴)** For each model, say whether it is a convex optimization problem, and justify it in one or two lines.

(a) $\min\; x_1^2 + 2x_2^2 - 3x_1$ subject to $x_1 + x_2 \le 5$, $x_1, x_2 \ge 0$.

(b) $\max\; 5x_1^2 + 5x_2^2$ subject to $x_1 + x_2 \le 4$, $x_1, x_2 \ge 0$.

(c) $\min\; 3x_1 + 4x_2$ subject to $x_1x_2 \ge 4$, $x_1 > 0$, $x_2 > 0$.

<details>
<summary>Solutions</summary>

**P1** Inverse transform for the exponential: $X = -\ln(U)/\lambda$ with $\lambda = 4$ per hour.

$$X_1 = -\frac{\ln 0.5}{4} = \frac{0.6931}{4} = 0.17329\ \text{h} = 10.40\ \text{min},$$
$$X_2 = -\frac{\ln 0.9}{4} = \frac{0.10536}{4} = 0.026340\ \text{h} = 1.58\ \text{min}.$$

Arrival times: customer 1 at $t = 10.40$ min, customer 2 at $10.40 + 1.58 = 11.98$ min (equivalently $0.17329 + 0.02634 = 0.19963$ h).

Why $X_1 < $ the mean: the mean gap is $1/\lambda = 0.25$ h $= 15$ min, but $U_1 = 0.5$ produces the **median**, which for an exponential is $\ln 2/\lambda = 0.6931/4 = 10.40$ min. The exponential is right-skewed — a long tail of rare big gaps pulls the mean above the median — so the median draw lands below the mean by design. Nothing is wrong.

*Check.* $\ln 0.5 = -0.6931$ and $\ln 0.9 = -0.10536$ (both negative, since the arguments are below 1, so both $X$ come out positive ✓). $U_2 = 0.9$ is close to 1, and $-\ln U \to 0$ there, giving a short gap — consistent with the decreasing map noted in the lesson. Converting: $0.17329 \times 60 = 10.397$ and $0.02634 \times 60 = 1.580$ ✓.

**P2** Track the server's next free time.

| $k$ | arrives | server free at | starts | service | departs | $W_{q,k}$ | $W_k$ |
|---|---|---|---|---|---|---|---|
| 1 | 1 | 0 | 1 | 3 | 4 | 0 | 3 |
| 2 | 3 | 4 | 4 | 4 | 8 | 1 | 5 |
| 3 | 6 | 8 | 8 | 1 | 9 | 2 | 3 |
| 4 | 10 | 9 | 10 | 2 | 12 | 0 | 2 |

Start time $=\max(\text{arrival},\ \text{server free})$; departure $=$ start $+$ service.

Average queue wait: $\bar W_q = (0 + 1 + 2 + 0)/4 = 0.75$ minutes.

Time-average number in system over $[0,12]$. The step function is $n = 0$ on $[0,1)$, $1$ on $[1,3)$, $2$ on $[3,4)$, $1$ on $[4,6)$, $2$ on $[6,8)$, $1$ on $[8,9)$, $0$ on $[9,10)$, $1$ on $[10,12)$. Area:

$$1(2) + 2(1) + 1(2) + 2(2) + 1(1) + 1(2) = 2 + 2 + 2 + 4 + 1 + 2 = 13\ \text{customer-minutes},$$

so $L = 13/12 \approx 1.083$.

*Little's law check.* $\bar W = (3 + 5 + 3 + 2)/4 = 13/4 = 3.25$ min, and $\lambda = 4$ customers per 12 minutes $= 1/3$ per minute. Then

$$\lambda \bar W = \tfrac13 \times 3.25 = 1.0833 = L,$$

which matches the area calculation. ✓

The agreement is not a coincidence: $\sum_k W_k = 13$ is the *same* 13 as the area under $n(t)$, because integrating the count over time and summing each customer's time in system measure the identical region. That identity is the sample-path proof of Little's law from [4.1](04-01-poisson-arrivals-littles-law.md), and it is the standard self-check on a hand trace or a simulation's statistics collector.

**P3**

**(a) Convex.** The objective's Hessian is $\begin{pmatrix} 2 & 0 \\ 0 & 4 \end{pmatrix}$ — diagonal with positive entries, hence positive definite — so the objective is (strictly) convex, and it is being minimized. The feasible set is the intersection of half-spaces, a polyhedron, hence convex. Convex objective over convex set: a convex problem, so any local minimum is global. (Unconstrained the minimum would be $x = (1.5, 0)$, which happens to be feasible, so that is the optimum, with value $-2.25$.)

**(b) Not convex.** The objective $5x_1^2 + 5x_2^2$ is convex, and we are **maximizing** it — equivalently minimizing $-5x_1^2 - 5x_2^2$, which is concave, not convex. Maximizing a convex function over a polytope pushes the optimum to a vertex and creates multiple local maxima: here the feasible triangle has vertices $(0,0), (4,0), (0,4)$ with objective values $0, 80, 80$ — two distinct global maximizers, and a hill-climber started near either one would stop there and report success. Convexity of the objective is not enough; the *direction* matters.

**(c) Convex.** The objective is linear. The only question is the feasible set $S = \{x > 0 : x_1x_2 \ge 4\}$, and despite the nonlinear constraint it *is* convex. Take $x, y \in S$ and $\theta \in [0,1]$, and let $z = \theta x + (1-\theta)y$. Since $\ln$ is concave, $\ln z_i \ge \theta \ln x_i + (1-\theta)\ln y_i$ for $i = 1, 2$. Adding the two,

$$\ln z_1 + \ln z_2 \;\ge\; \theta(\ln x_1 + \ln x_2) + (1-\theta)(\ln y_1 + \ln y_2) \;\ge\; \theta \ln 4 + (1-\theta)\ln 4 = \ln 4,$$

so $z_1z_2 \ge 4$ and $z \in S$. Equivalently, $S$ is a sublevel set of the convex function $-\ln x_1 - \ln x_2$. So this is a convex problem. *Sanity check with numbers:* $(8, 0.5)$ and $(0.5, 8)$ are both in $S$ (products exactly 4), and their midpoint $(4.25, 4.25)$ has product $18.06 \ge 4$ ✓ — the region bulges away from the origin, which is what convexity looks like here.

**The general lesson:** you cannot classify a problem by counting nonlinear symbols. (b) has a convex objective and is nonconvex; (c) has a nonlinear constraint and is convex. The test is the definition — see [`convex-optimization` 1.4](../../convex-optimization/lessons/01-04-recognizing-convexity.md).

</details>

## Flashback

**From Lesson 4.4 (Inventory: EOQ & the newsvendor)** — fresh variant, an EOQ with a *parameter* error rather than a packaging constraint:

A hardware chain uses $D = 6000$ fasteners per year at a steady rate. Placing an order costs $S = 30$ dollars and holding costs $H = 4$ dollars per unit per year.

(a) Find the EOQ and the resulting annual cost, and verify with the equal-halves check.
(b) How many orders per year is that, and how long is one inventory cycle?
(c) Accounting revises the holding cost upward to 9 dollars per unit per year. Find the new EOQ, and compute the penalty — in dollars and percent — for stubbornly continuing to order the old quantity.

<details>
<summary>Solution</summary>

**(a)**

$$Q^* = \sqrt{\frac{2DS}{H}} = \sqrt{\frac{2(6000)(30)}{4}} = \sqrt{\frac{360000}{4}} = \sqrt{90000} = 300 \text{ units},$$

$$TC(Q^*) = \sqrt{2DSH} = \sqrt{2(6000)(30)(4)} = \sqrt{1440000} = 1200 \text{ dollars per year.}$$

*Equal-halves check.* Ordering cost $= \frac{D}{Q}S = \frac{6000}{300}(30) = 20(30) = 600$; holding cost $= \frac{Q}{2}H = 150(4) = 600$. Equal, summing to 1200. That equality is the defining property of the EOQ, so the answer is self-certifying.

**(b)** Orders per year $= D/Q^* = 6000/300 = 20$. One cycle is $1/20$ of a year $= 0.05$ years, about 18 days on a 365-day calendar.

**(c)** With $H = 9$:

$$Q^{**} = \sqrt{\frac{2(6000)(30)}{9}} = \sqrt{\frac{360000}{9}} = \sqrt{40000} = 200 \text{ units}, \qquad TC = \sqrt{2(6000)(30)(9)} = \sqrt{3240000} = 1800.$$

*Equal-halves check:* ordering $= \frac{6000}{200}(30) = 900$, holding $= 100(9) = 900$. Sum 1800.

Ordering the stale $Q = 300$ under the true $H = 9$ costs

$$TC(300) = \frac{6000}{300}(30) + \frac{300}{2}(9) = 600 + 1350 = 1950 \text{ dollars per year},$$

an excess of $1950 - 1800 = 150$ dollars, or $1950/1800 = 1.0833$ — **8.3 percent**.

*Cross-check with the robustness formula.* Ordering $k$ times the EOQ inflates total cost by the factor $\tfrac12(k + 1/k)$. Here $k = 300/200 = 1.5$, giving $\tfrac12(1.5 + 0.6667) = \tfrac12(2.1667) = 1.0833$ — matching exactly. Note the moral, which is [4.4](04-04-inventory-eoq-newsvendor.md)'s: a **2.25-fold** error in the holding cost — a serious modeling mistake — leaks only 8 percent of annual cost, because the EOQ curve is flat near its bottom. The square root does the forgiving. What EOQ cannot forgive is a *structural* error, such as demand that is not steady at all.

</details>

## Connections

- **Backward:** simulation is the general-purpose tool that all of Module 4's closed forms are special cases of — [4.2](04-02-the-mm1-queue.md)'s M/M/1 is the validation target, and [4.1](04-01-poisson-arrivals-littles-law.md)'s Little's law is the arithmetic check on any trace. The exponential variate generator is the Poisson process from [4.1](04-01-poisson-arrivals-littles-law.md), run backwards through its own CDF. And KKT is the direct generalization of [2.1](02-01-lp-dual-complementary-slackness.md)'s complementary slackness, with [2.2](02-02-shadow-prices-sensitivity.md)'s shadow-price reading intact.
- **Forward:** [`convex-optimization`](../../convex-optimization/syllabus.md) is where the second half of this lesson actually gets taught — convexity recognition ([1.4](../../convex-optimization/lessons/01-04-recognizing-convexity.md)), local-equals-global ([2.1](../../convex-optimization/lessons/02-01-convex-problem-local-global.md)), Lagrangian duality and KKT ([3.3](../../convex-optimization/lessons/03-03-kkt-conditions.md)), and the algorithms ([4.1](../../convex-optimization/lessons/04-01-first-order-methods.md), [4.2](../../convex-optimization/lessons/04-02-newtons-method.md)).
- **Sideways:** replication and confidence intervals are [`prob-stat-refresher` 4.2](../../prob-stat-refresher/lessons/04-02-confidence-intervals.md) applied to computer output rather than to data; the $1/\sqrt n$ rate is the central limit theorem ([`prob-stat-refresher` 3.3](../../prob-stat-refresher/lessons/03-03-central-limit-theorem.md)) charging you for precision. Monte Carlo estimation of a quantity you cannot integrate is the same idea that prices path-dependent derivatives in [`mathematical-finance`](../../mathematical-finance/syllabus.md) and evaluates policies in [`reinforcement-learning`](../../reinforcement-learning/syllabus.md).

## Where this course ends

Trace the arc. You learned to **formulate** — turn a story about ovens and flour into an objective, constraints, and decision variables ([1.1](01-01-formulating-linear-programs.md)). You learned to **solve**, by understanding that optima live at vertices ([1.2](01-02-vertices-bases-fundamental-theorem.md)) and that simplex walks between them ([1.3](01-03-the-simplex-method.md), [1.4](01-04-initialization-degeneracy-cycling.md)). Then the part that pays: to **price and interrogate** — duality and complementary slackness ([2.1](02-01-lp-dual-complementary-slackness.md)), shadow prices and ranging ([2.2](02-02-shadow-prices-sensitivity.md)), and the network structure that makes integrality free ([2.3](02-03-network-models-integrality.md)). Then **indivisibility and stages**: binary modeling ([3.1](03-01-modeling-with-integer-variables.md)), branch-and-bound ([3.2](03-02-branch-and-bound-cutting-planes.md)), and dynamic programming forward from a recursion ([3.3](03-03-deterministic-dynamic-programming.md), [3.4](03-04-stochastic-dynamic-programming.md)). Then **randomness**: Little's law, M/M/1, M/M/c and pooling, EOQ and the newsvendor ([4.1](04-01-poisson-arrivals-littles-law.md)–[4.4](04-04-inventory-eoq-newsvendor.md)). And now, what to do when none of the clean models fit — simulate the system, or admit the program is nonlinear and go ask whether it is convex.

**What was deliberately left out**, so you know the shape of your own ignorance: deep stochastic programming (multistage recourse models, chance constraints); metaheuristics; large-scale decomposition (Dantzig–Wolfe, Benders, column generation — the machinery that makes million-variable models tractable); revenue management and pricing; and scheduling theory. Each is a course.

**Where to go next.** [`convex-optimization`](../../convex-optimization/syllabus.md) for the continuous theory this lesson kept deferring to — it is the natural sequel and shares half this course's vocabulary. [`reinforcement-learning`](../../reinforcement-learning/syllabus.md) for what happens to [3.4](03-04-stochastic-dynamic-programming.md)'s MDPs when the state space is too large to tabulate and the transition probabilities are unknown. [`machine-learning`](../../machine-learning/syllabus.md) and [`statistical-learning`](../../statistical-learning/syllabus.md) for the data-driven half of modern decision-making — where the demand forecast that you took as given in [4.4](04-04-inventory-eoq-newsvendor.md) actually comes from. And [`graph-theory`](../../graph-theory/syllabus.md) for the combinatorial algorithms underneath [2.3](02-03-network-models-integrality.md)'s network models: max-flow/min-cut, matching, and the rest.

The through-line of all of it is the habit this course was really teaching: **write the model down, solve it, and then interrogate the solution until you know what it is worth and how far you can trust it.**
