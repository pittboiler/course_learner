# Grad Macroeconomics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

The whole course is one sentence run at increasing realism: **optimizing agents
interacting in equilibrium, solved recursively.** Module 1 builds the recursive
toolkit (Bellman, envelope, Euler, transversality, recursive equilibrium);
Modules 2–6 point it at growth, finite lives, cycles, consumption and asset
prices, and policy. This card is where the toolkit, the workhorse models, the
Euler equations, and the linear rational-expectations machinery live in one
place, so you never have to go hunting through six modules mid-problem.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\beta$ | discount factor per period; $\beta$ near 1 = patient | [1.1](lessons/01-01-sequence-vs-recursive.md) |
| $u(c)$, $f(k)$ | period utility; production in intensive (per-unit) form | [1.1](lessons/01-01-sequence-vs-recursive.md) |
| $V(k)$ | value function — best lifetime discounted payoff starting from state $k$ | [1.1](lessons/01-01-sequence-vs-recursive.md) |
| $g(k)$ | policy function — the decision rule "given state $k$, do $g(k)$" | [1.1](lessons/01-01-sequence-vs-recursive.md) |
| $k'$ | next period's value of the state (the recursive stand-in for $k_{t+1}$) | [1.1](lessons/01-01-sequence-vs-recursive.md) |
| $\Gamma(k)$ | feasible-choice correspondence: what next-states $k'$ state $k$ allows | [1.2](lessons/01-02-principle-of-optimality.md) |
| $T$, $(Tf)$ | Bellman operator — feeds in a value-function guess, returns an updated one | [1.2](lessons/01-02-principle-of-optimality.md) |
| $\lVert f\rVert$ | sup norm $\sup_k\lvert f(k)\rvert$ — the distance contraction arguments shrink | [1.2](lessons/01-02-principle-of-optimality.md) |
| $R_{t+1}$ | gross return on saving, $f'(k_{t+1})+1-\delta$ (marginal product **plus** surviving capital) | [1.3](lessons/01-03-euler-transversality.md) |
| $\lambda_t$ | multiplier on the resource constraint = shadow value of resources at $t$ | [1.3](lessons/01-03-euler-transversality.md) |
| $\delta$ | depreciation rate; $\delta=1$ ("full depreciation") is the closed-form case | [1.3](lessons/01-03-euler-transversality.md) |
| $u_k$ | partial of the period return in the **state**, control held frozen | [1.4](lessons/01-04-envelope-theorem-dynamics.md) |
| $z_t$ | productivity / TFP shock, the impulse driving everything in Module 4 | [1.5](lessons/01-05-stochastic-dynamic-programming.md) |
| $Q(z'\mid z)$ | Markov transition kernel — the distribution of tomorrow's shock given today's | [1.5](lessons/01-05-stochastic-dynamic-programming.md) |
| $\mathbb{E}_t$ | expectation conditional on everything known at $t$ | [1.5](lessons/01-05-stochastic-dynamic-programming.md) |
| $k$ vs. $K$ | own ("little-k") capital the agent chooses vs. aggregate ("big-K") it only forecasts | [1.6](lessons/01-06-recursive-competitive-equilibrium.md) |
| $G(K,z)$ | perceived/actual law of motion of aggregate capital — the RCE fixed point | [1.6](lessons/01-06-recursive-competitive-equilibrium.md) |
| $r$, $w$ | rental rate on capital and wage, both **functions** of the aggregate state | [1.6](lessons/01-06-recursive-competitive-equilibrium.md) |
| $s$ | saving rate (Solow); in [3.1](lessons/03-01-olg-model.md) the young's saving *level*; in [6.3](lessons/06-03-search-matching-dmp.md) the separation rate | [2.1](lessons/02-01-solow-model.md) |
| $n$, $g$ | population growth and (labor-augmenting) technology growth | [2.1](lessons/02-01-solow-model.md) |
| $k \equiv K/(AL)$ | capital per **effective** worker — the units in which a growing economy sits still | [2.1](lessons/02-01-solow-model.md) |
| $\alpha$ | capital's share of income = the Cobb–Douglas exponent on $K$ | [2.1](lessons/02-01-solow-model.md) |
| $\lambda$ | convergence speed: fraction of the log-gap to steady state closed per year | [2.2](lessons/02-02-convergence-solow-diagram.md) |
| $\rho$ | rate of time preference (impatience) in continuous time, $\beta = e^{-\rho}$ | [2.3](lessons/02-03-ramsey-cass-koopmans.md) |
| $\sigma$ | CRRA curvature; $1/\sigma$ is the elasticity of intertemporal substitution | [2.3](lessons/02-03-ramsey-cass-koopmans.md) |
| $\mu$ | co-state in the current-value Hamiltonian = shadow value of capital | [2.3](lessons/02-03-ramsey-cass-koopmans.md) |
| $k_{gr}$ | golden-rule capital — the stock maximizing steady-state consumption | [2.4](lessons/02-04-golden-rule-dynamic-efficiency.md) |
| $A$ | TFP level; in the AK model, the constant marginal product of broad capital | [2.5](lessons/02-05-endogenous-growth-ak-ideas.md) |
| $L_A$, $\phi$ | research labor and the "standing on shoulders" exponent in the ideas model | [2.5](lessons/02-05-endogenous-growth-ak-ideas.md) |
| $\alpha_K,\ \alpha_L$ | output elasticities of capital and labor = their income shares under competition | [2.6](lessons/02-06-growth-accounting.md) |
| $\Delta A/A$ | Solow residual — measured TFP growth, "a measure of our ignorance" | [2.6](lessons/02-06-growth-accounting.md) |
| $c^y_t$, $c^o_{t+1}$ | consumption when young and when old, for the cohort born at $t$ | [3.1](lessons/03-01-olg-model.md) |
| $N_t$ | size of the young cohort at $t$, growing at rate $n$ | [3.1](lessons/03-01-olg-model.md) |
| $\theta$ | CRRA curvature in the OLG lessons (elsewhere $\sigma$ or $\gamma$) | [3.1](lessons/03-01-olg-model.md) |
| $m_t$, $P_t$ | real money balances per young person, and the price level | [3.3](lessons/03-03-money-rational-bubbles.md) |
| $r_A$ | autarky interest rate — the MRS at the endowment, the no-trade rate | [3.3](lessons/03-03-money-rational-bubbles.md) |
| $f_t$, $b_t$ | fundamental (discounted dividends) and bubble components of a price | [3.3](lessons/03-03-money-rational-bubbles.md) |
| $d$ | per-young pay-as-you-go contribution; the old receive $(1+n)d$ | [3.4](lessons/03-04-social-security-transfers.md) |
| $\ell_t$, $n_t$ | hours worked (leisure is $1-\ell_t$); $n_t$ is the same object in [4.2](lessons/04-02-calibration-stochastic-growth.md) | [4.1](lessons/04-01-real-business-cycle.md) |
| $\psi$, $\nu$ | weight on leisure/disutility of work; $\nu$ = inverse Frisch elasticity | [4.1](lessons/04-01-real-business-cycle.md) |
| $\varphi$ | persistence of the AR(1) TFP process (written $\phi$ in [4.2](lessons/04-02-calibration-stochastic-growth.md)) | [4.1](lessons/04-01-real-business-cycle.md) |
| $\hat x_t$ | log-deviation from steady state, $\hat x_t \equiv \ln(x_t/x^{*})$ — a percent gap | [4.2](lessons/04-02-calibration-stochastic-growth.md) |
| $\varepsilon$ | elasticity of demand across varieties (Dixit–Stiglitz), $\varepsilon>1$ | [4.4](lessons/04-04-nominal-rigidities-new-keynesian.md) |
| $\theta$ | Calvo **stuck** fraction: probability a firm may *not* reset its price | [4.4](lessons/04-04-nominal-rigidities-new-keynesian.md) |
| $p_t^{*}$ | the common price chosen by the firms that do get to reset | [4.4](lessons/04-04-nominal-rigidities-new-keynesian.md) |
| $x_t$, $y_t^n$ | output gap $x_t = y_t - y_t^n$, and natural (flexible-price) output | [4.4](lessons/04-04-nominal-rigidities-new-keynesian.md) |
| $\pi_t$, $\kappa$ | inflation, and the NK Phillips-curve slope on the gap | [4.5](lessons/04-05-nk-phillips-curve.md) |
| $i_t$, $r_t^n$ | nominal policy rate, and the natural real rate (flexible-price real rate) | [4.5](lessons/04-05-nk-phillips-curve.md) |
| $W_t$, $y^P_t$ | total lifetime resources (financial + human wealth), and permanent income | [5.1](lessons/05-01-permanent-income-life-cycle.md) |
| $P(c)$ | absolute prudence $-u'''/u''$ — how strongly risk raises saving | [5.2](lessons/05-02-precautionary-saving.md) |
| $\underline{a}$ | borrowing limit: assets may not fall below it | [5.2](lessons/05-02-precautionary-saving.md) |
| $q$ | marginal $q$ = shadow value of an installed unit of capital ($= V'(K)$) | [5.3](lessons/05-03-q-theory-investment.md) |
| $C(I,K)$, $\varphi$ | convex adjustment cost and its curvature parameter | [5.3](lessons/05-03-q-theory-investment.md) |
| $m_{t+1}$ | stochastic discount factor / pricing kernel, $\beta u'(c_{t+1})/u'(c_t)$ | [5.4](lessons/05-04-consumption-based-asset-pricing.md) |
| $\gamma$ | coefficient of relative risk aversion in the asset-pricing lessons | [5.4](lessons/05-04-consumption-based-asset-pricing.md) |
| $\sigma_c$, $\sigma_e$, $\rho_{ec}$ | volatility of consumption growth, of equity returns, and their correlation | [5.5](lessons/05-05-equity-premium-puzzle.md) |
| $u_t$ | cost-push shock added to the Phillips curve (oil, markups) | [6.1](lessons/06-01-monetary-fiscal-nk.md) |
| $\phi_\pi$, $\phi_x$ | Taylor-rule response coefficients on inflation and the output gap | [6.2](lessons/06-02-policy-rules-taylor-principle.md) |
| $\tilde x$ | the bank's over-ambitious output target, above the natural level | [6.2](lessons/06-02-policy-rules-taylor-principle.md) |
| $\theta = V/U$ | labor-market tightness: vacancies per unemployed worker | [6.3](lessons/06-03-search-matching-dmp.md) |
| $f(\theta)$, $q(\theta)$ | job-finding rate (rises in $\theta$) and vacancy-filling rate (falls in $\theta$) | [6.3](lessons/06-03-search-matching-dmp.md) |
| $\eta$ | elasticity of the matching function with respect to unemployment | [6.3](lessons/06-03-search-matching-dmp.md) |
| $\lambda(a,y)$ | cross-sectional distribution of households over assets and income | [6.4](lessons/06-04-heterogeneous-agent-taste.md) |

**Symbols that collide — check the module before you read a letter.**
$\theta$ is CRRA curvature in [3.1](lessons/03-01-olg-model.md), the Calvo stuck fraction in [4.4](lessons/04-04-nominal-rigidities-new-keynesian.md), and market tightness in [6.3](lessons/06-03-search-matching-dmp.md).
Risk aversion / inverse EIS is $\sigma$ in [2.3](lessons/02-03-ramsey-cass-koopmans.md), $\theta$ in [3.1](lessons/03-01-olg-model.md), $\gamma$ in [5.4](lessons/05-04-consumption-based-asset-pricing.md).
$\beta$ is the discount factor everywhere except [6.3](lessons/06-03-search-matching-dmp.md), where it is worker bargaining power.
$s$ is a saving rate, a saving level, and a separation rate; $z$ is TFP everywhere except [6.3](lessons/06-03-search-matching-dmp.md), where it is the value of unemployment.
$q$ is Tobin's $q$ in [5.3](lessons/05-03-q-theory-investment.md) and the vacancy-filling rate in [6.3](lessons/06-03-search-matching-dmp.md); $m$ is real balances, the SDF, and the matching function.
$u$ is utility until [6.3](lessons/06-03-search-matching-dmp.md), where it is the unemployment rate; $f$ is production until [6.3](lessons/06-03-search-matching-dmp.md), where it is job-finding.
$\lambda$ is a multiplier, a convergence speed, a policy loss weight, and a distribution.

## Definitions

### Sequence problem

The honest, brute-force statement: choose the entire infinite path of actions at once, maximizing the discounted sum of payoffs.

$$\max_{\{c_t,k_{t+1}\}}\ \sum_{t=0}^{\infty}\beta^t u(c_t)\quad\text{s.t.}\quad k_{t+1}=f(k_t)-c_t,\ k_0\text{ given}$$

*Introduced:* [1.1](lessons/01-01-sequence-vs-recursive.md)

### Bellman equation

The same problem folded into one period plus a summary of the future — and the summary is the answer to the same problem, one state later.

$$V(k)=\max_{k'\in\Gamma(k)}\ \big\{\,u(k,k')+\beta V(k')\,\big\}$$

*Introduced:* [1.1](lessons/01-01-sequence-vs-recursive.md)

### State and control

The **state** is what you carry into a period and cannot change this instant — and it must be a *sufficient* summary of history. The **control** is what you freely choose. The law of motion is how the control moves the state.

*Introduced:* [1.1](lessons/01-01-sequence-vs-recursive.md)

### Policy function

The decision rule the Bellman equation hands you: the maximizer as a function of the state, $g(k)=\arg\max\{u(k,k')+\beta V(k')\}$. Stationary (no $t$ subscript) precisely because the horizon is infinite and the primitives don't depend on time.

*Introduced:* [1.1](lessons/01-01-sequence-vs-recursive.md)

### Principle of optimality

An optimal plan, viewed from any later date, is still optimal for the problem starting at that date — so the whole tail of a plan is summarized by one number, the value of the state you carry in.

*Introduced:* [1.2](lessons/01-02-principle-of-optimality.md)

### Bellman operator

Read the Bellman equation as a machine acting on value-function *candidates*; a genuine value function is one the machine leaves unchanged.

$$(Tf)(k)=\max_{k'\in\Gamma(k)}\big\{F(k,k')+\beta f(k')\big\},\qquad V \text{ solves } TV=V$$

*Introduced:* [1.2](lessons/01-02-principle-of-optimality.md)

### Contraction mapping

A map that pulls any two candidates strictly closer together every time you apply it. Discounting is what makes the Bellman operator one, and that is the whole reason infinite-horizon dynamic programming works.

$$\lVert Tf-Tg\rVert \le \beta\,\lVert f-g\rVert,\qquad \beta\in(0,1)$$

*Introduced:* [1.2](lessons/01-02-principle-of-optimality.md)

### Blackwell's sufficient conditions

Two easy checks that *imply* the contraction property, so you never have to verify the sup-norm inequality head-on. **Monotonicity:** $f\le g \Rightarrow Tf\le Tg$. **Discounting:** $T(f+c)\le Tf+\beta c$ for constants $c\ge0$. Sufficient, not necessary.

*Introduced:* [1.2](lessons/01-02-principle-of-optimality.md)

### Euler equation

The intertemporal no-arbitrage rule: eat one less unit today, invest it, eat the proceeds tomorrow — at an optimum that swap must be a wash.

$$u'(c_t)=\beta\,u'(c_{t+1})\big[f'(k_{t+1})+1-\delta\big]$$

*Introduced:* [1.3](lessons/01-03-euler-transversality.md)

### Transversality condition

The boundary condition at $t=\infty$ that replaces a terminal date: the present discounted *value* of the capital you're still holding must vanish, so you can't hoard resources you never consume.

$$\lim_{t\to\infty}\beta^t\,u'(c_t)\,k_{t+1}=0$$

*Introduced:* [1.3](lessons/01-03-euler-transversality.md)

### Benveniste–Scheinkman (envelope) condition

Differentiate an already-optimized problem as if the choice were frozen: at the optimum the objective is flat in the control, so the policy's own effect contributes nothing to first order.

$$V'(k)=u_k\big(k,\,g(k)\big)$$

*Introduced:* [1.4](lessons/01-04-envelope-theorem-dynamics.md)

### Marginal value of the state

$V'(k)$ is the shadow price of the state: how much lifetime discounted utility rises per extra unit handed to you today. Same object under three names — $V'(k)$, the multiplier $\lambda$, the co-state $\mu$ — and it reappears as Tobin's $q$ in [5.3](lessons/05-03-q-theory-investment.md).

*Introduced:* [1.4](lessons/01-04-envelope-theorem-dynamics.md)

### Stochastic Bellman equation

Deterministic dynamic programming with a conditional expectation slid in front of the continuation value. The state grows to include the shock, because Markovness makes today's shock a sufficient forecast of tomorrow's.

$$V(k,z)=\max_{k'}\Big\{u(c)+\beta\,\mathbb{E}\big[V(k',z')\mid z\big]\Big\},\qquad c = zf(k)+(1-\delta)k-k'$$

*Introduced:* [1.5](lessons/01-05-stochastic-dynamic-programming.md)

### Certainty equivalence

The (false in general) property that you can replace a future shock by its mean and solve the resulting deterministic problem. It holds **only** when marginal utility is affine — quadratic utility, $u'''=0$ — and its failure is precautionary saving.

*Introduced:* [1.5](lessons/01-05-stochastic-dynamic-programming.md)

### Recursive competitive equilibrium (RCE)

An economy of price-taking atoms, written as a fixed point in *functions*: households optimize against a forecast of the aggregate, and equilibrium demands that forecast be the one their own choices generate. Four conditions — households optimize, firms optimize, markets clear, and the **consistency** condition $G(K,z)=g(K,K;z)$.

*Introduced:* [1.6](lessons/01-06-recursive-competitive-equilibrium.md)

### Big-K, little-k

The trick that keeps a price-taker a price-taker: optimize with your own capital $k$ and the aggregate $K$ held *separate*, differentiate only in your own control, and impose $k=K$ **afterward**. Impose it early and you have accidentally written down a planner.

*Introduced:* [1.6](lessons/01-06-recursive-competitive-equilibrium.md)

### Steady state and balanced growth path

A **steady state** is where the per-effective-worker variables stop moving ($\dot k = 0$). Undo the normalization and the economy is on a **balanced growth path**: aggregates grow at $n+g$, per-capita variables at $g$, per-effective-worker variables at $0$.

*Introduced:* [2.1](lessons/02-01-solow-model.md)

### Break-even investment

The investment needed just to hold $k$ still: equip new workers ($n$), keep pace with rising efficiency units ($g$), and replace worn machines ($\delta$).

$$(n+g+\delta)\,k$$

*Introduced:* [2.1](lessons/02-01-solow-model.md)

### Absolute vs. conditional convergence

**Absolute:** economies sharing $s,n,g,\delta$ share a $k^{*}$, so the initially poorer grow faster and catch up — the claim that fails across the world. **Conditional:** each economy races toward *its own* $k^{*}$, and growth keys off the gap $\ln k - \ln k^{*}$, not the level of income. The second is what the data support.

*Introduced:* [2.2](lessons/02-02-convergence-solow-diagram.md)

### Keynes–Ramsey rule

The continuous-time consumption Euler equation: consumption grows exactly when the net return on capital beats impatience, scaled by how willing you are to tilt consumption over time.

$$\frac{\dot c}{c}=\frac{1}{\sigma}\big[f'(k)-\delta-\rho\big]$$

*Introduced:* [2.3](lessons/02-03-ramsey-cass-koopmans.md)

### Saddle path

The single trajectory (the stable manifold of a saddle point) from which you converge to the steady state. Capital is predetermined and cannot jump; consumption is a free control, so the household **jumps $c_0$ vertically onto the saddle path** and rides it in. Every other $c_0$ violates feasibility or transversality.

*Introduced:* [2.3](lessons/02-03-ramsey-cass-koopmans.md)

### Golden rule

The capital stock that maximizes steady-state consumption — where capital's marginal product exactly covers its growth-adjusted upkeep. A beauty contest among resting points; it ignores the pain of the journey.

$$f'(k_{gr})=n+g+\delta \qquad\Longleftrightarrow\qquad r_{gr}=n+g$$

*Introduced:* [2.4](lessons/02-04-golden-rule-dynamic-efficiency.md)

### Modified golden rule

Where an *impatient optimizer* parks capital: the net marginal product equals the discount rate, so $r^{*}=\rho$. Because a well-posed Ramsey problem needs $\rho>n$, this sits strictly **below** the golden rule — efficient under-accumulation, not a shortfall.

$$f'(k^{*})=\rho+\delta \quad(\text{with growth: } \rho+\sigma g+\delta)$$

*Introduced:* [2.4](lessons/02-04-golden-rule-dynamic-efficiency.md)

### Dynamic inefficiency

Saving so much that you could raise consumption at *every* date by saving less — a genuine Pareto improvement, so the original path was not efficient. One inequality tests it: compare the return on capital to the economy's growth rate.

$$r^{*}<n \iff k^{*}>k_{gr} \iff \text{over-accumulated}$$

*Introduced:* [2.4](lessons/02-04-golden-rule-dynamic-efficiency.md), used throughout [3.2](lessons/03-02-dynamic-inefficiency.md)–[3.4](lessons/03-04-social-security-transfers.md)

### AK model

Delete diminishing returns to the accumulable factor and growth never self-arrests: the saving ray and the dilution ray never cross, so there is no steady-state *level*, only a constant growth *rate* that the saving rate can move.

$$Y=AK \quad\Longrightarrow\quad \frac{\dot k}{k}=sA-(n+\delta)$$

*Introduced:* [2.5](lessons/02-05-endogenous-growth-ak-ideas.md)

### Nonrivalry

One agent's use of a good does not reduce what's available to others *at the same instant*. Ideas are inherently nonrival (a formula serves everyone at once); patents make them *artificially excludable*. Nonrivalry is not excludability, and conflating them hides the entire policy problem.

*Introduced:* [2.5](lessons/02-05-endogenous-growth-ak-ideas.md)

### Total factor productivity and the Solow residual

**TFP** ($A$) is the Hicks-neutral efficiency multiplier on the whole recipe. The **Solow residual** is the *measured* stand-in for its growth: the part of output growth that measured input growth cannot explain — TFP plus every mismeasurement, "a measure of our ignorance."

*Introduced:* [2.6](lessons/02-06-growth-accounting.md)

### Overlapping generations (OLG)

Chop the immortal household into a sequence of two-period lives: young (work, save), old (retire, dissave), then exit. Only the young save, so their total saving **is** tomorrow's capital stock — and no agent ever asks whether the economy as a whole is holding too much.

$$(1+n)\,k_{t+1}=s\big(w_t,\ r_{t+1}\big)$$

*Introduced:* [3.1](lessons/03-01-olg-model.md)

### Rational bubble

A price component with no fundamental underneath, sustained purely by expected resale: it must grow at the discount rate so its capital gain alone delivers the required return. Rational means *non-fundamental*, not foolish — and nothing pins it, so bursting to zero is also an equilibrium.

$$p_t=f_t+b_t,\qquad f_t=\sum_{k\ge1}\frac{\mathbb{E}_t[d_{t+k}]}{(1+r)^k},\qquad \mathbb{E}_t[b_{t+1}]=(1+r)\,b_t$$

*Introduced:* [3.3](lessons/03-03-money-rational-bubbles.md)

### Autarky interest rate

The rate at which a household would just decline to trade — the marginal rate of substitution evaluated at the endowment point. Fiat money holds value in a stationary equilibrium exactly when $r_A<n$.

$$1+r_A=\frac{u'(w_1)}{\beta\,u'(w_2)}$$

*Introduced:* [3.3](lessons/03-03-money-rational-bubbles.md)

### Pay-as-you-go vs. funded pensions

**Funded:** contributions are invested and returned at the market rate $r$. **Pay-as-you-go (unfunded):** contributions are handed straight to today's old, and you are repaid by the next, larger cohort — an implicit return of $n$, no capital involved. Workers prefer PAYG exactly when $n>r$.

*Introduced:* [3.4](lessons/03-04-social-security-transfers.md)

### Ricardian equivalence

With **operative** (interior, strictly positive) dynastic bequests, a government transfer between generations is undone one-for-one by the family's own bequest, leaving every real allocation unchanged. It fails when the bequest is at a corner, when the young are borrowing-constrained, or when taxes are distortionary.

*Introduced:* [3.4](lessons/03-04-social-security-transfers.md)

### Real business cycle model

The stochastic growth model plus one new choice — endogenous labor. A persistent TFP shock raises the wage and the return to capital at once, so hours, output, and investment move up **together** and the extra capital carries the impulse forward. Because the welfare theorems hold, the fluctuations are efficient.

*Introduced:* [4.1](lessons/04-01-real-business-cycle.md)

### Intertemporal substitution of labor

Work is concentrated in the high-wage window: a temporary productivity boom raises $w_t$ sharply while consumption smoothing keeps $c_t$ nearly fixed, so leisure becomes expensive and hours rise. The *more transitory* the shock, the bigger the labor response.

*Introduced:* [4.1](lessons/04-01-real-business-cycle.md)

### Calibration

Pick parameters from long-run averages, factor shares, and micro evidence — facts that have nothing to do with the cycle — then judge the model by whether its *simulated second moments* match the data. The discipline only means something if the targets are cycle-independent.

*Introduced:* [4.2](lessons/04-02-calibration-stochastic-growth.md)

### Log-linearization

Write every variable as a percent deviation from steady state, $\hat x_t=\ln(x_t/x^{*})$, and Taylor-expand each equilibrium condition to first order. Products become sums, exponents become slopes, and a nonlinear tangle becomes a linear rational-expectations system you can solve exactly.

*Introduced:* [4.2](lessons/04-02-calibration-stochastic-growth.md)

### Blanchard–Kahn condition

The discrete-time, stochastic reincarnation of saddle-path selection: a unique bounded rational-expectations equilibrium exists **iff** the number of eigenvalues outside the unit circle equals the number of jump (non-predetermined) variables. Too few and you get indeterminacy; too many and no bounded solution exists.

*Introduced:* [4.2](lessons/04-02-calibration-stochastic-growth.md)

### Impulse response function

The path a variable follows after one isolated innovation, from a steady start with no further shocks. In a *linear* model the derivative is constant, so the IRF is exactly that deterministic path — no simulation, no averaging.

$$\mathrm{IRF}_x(h)=\frac{\partial\,\mathbb{E}_t[x_{t+h}]}{\partial\varepsilon_t}\cdot\sigma$$

*Introduced:* [4.3](lessons/04-03-propagation-impulse-responses.md)

### Propagation, internal vs. external

**External:** persistence the *shock* already carried (the AR(1) root $\varphi$) — imported, not earned. **Internal:** persistence the *model* manufactures (here, the capital echo decaying at $\alpha$). A model propagates only insofar as output is more persistent, or differently shaped, than its own shock.

*Introduced:* [4.3](lessons/04-03-propagation-impulse-responses.md)

### Monopolistic competition (Dixit–Stiglitz)

A continuum of firms selling differentiated varieties, each facing a downward-sloping demand $y_i=(p_i/P)^{-\varepsilon}Y$ and charging a constant markup over marginal cost. Necessary for sticky prices: a price-taker has no price to hold fixed.

$$p_i=\frac{\varepsilon}{\varepsilon-1}\,MC$$

*Introduced:* [4.4](lessons/04-04-nominal-rigidities-new-keynesian.md)

### Calvo pricing

Each period a firm re-optimizes with probability $1-\theta$ and is frozen at last period's price with probability $\theta$, independently across firms and time. The lottery is memoryless, so price spells are geometric with mean duration $1/(1-\theta)$.

*Introduced:* [4.4](lessons/04-04-nominal-rigidities-new-keynesian.md)

### Output gap and natural output

**Natural output** $y_t^n$ is what would prevail with fully flexible prices — the RBC allocation, which is efficient and itself stochastic. The **gap** $x_t=y_t-y_t^n$ measures how far sticky prices have pushed the economy from that benchmark; it is a genuine market failure, which is why policy has a job.

*Introduced:* [4.4](lessons/04-04-nominal-rigidities-new-keynesian.md)

### New Keynesian Phillips curve

A Calvo resetter prices for the whole expected life of its price, so inflation today is *forward-looking*: expected future inflation plus a slope times current slack.

$$\pi_t=\beta\,\mathbb{E}_t\pi_{t+1}+\kappa\,x_t,\qquad \kappa=\frac{(1-\theta)(1-\beta\theta)}{\theta}\,\gamma$$

*Introduced:* [4.5](lessons/04-05-nk-phillips-curve.md)

### Dynamic IS curve

The household Euler equation, log-linearized and written in gaps: demand cools whenever the real rate sits above the natural rate.

$$x_t=\mathbb{E}_t x_{t+1}-\tfrac{1}{\sigma}\big(i_t-\mathbb{E}_t\pi_{t+1}-r_t^n\big)$$

*Introduced:* [4.5](lessons/04-05-nk-phillips-curve.md)

### Natural rate of interest

The real rate that would prevail with flexible prices — high when the economy expects fast natural-output growth, since people want to borrow against a richer future. Policy's job is to track it; a real rate above $r_t^n$ opens a negative gap.

$$r_t^n=\rho+\sigma\,\mathbb{E}_t\Delta y_{t+1}^n$$

*Introduced:* [4.5](lessons/04-05-nk-phillips-curve.md)

### Permanent income

The constant flow whose present value equals your total lifetime resources — the annuity value of financial plus human wealth. The permanent-income hypothesis says you consume exactly this, so wealth is never drawn down in expectation.

$$y^P_t=\frac{r}{1+r}\,W_t,\qquad W_t=A_t+\sum_{s\ge0}(1+r)^{-s}\,\mathbb{E}_t\,y_{t+s}$$

*Introduced:* [5.1](lessons/05-01-permanent-income-life-cycle.md)

### Hall's random walk

Under quadratic utility and $\beta(1+r)=1$, the Euler equation collapses to a martingale: only *news* moves consumption, because everything you already knew was priced into $c_t$ when you smoothed.

$$\mathbb{E}_t\,c_{t+1}=c_t \quad\Longrightarrow\quad c_{t+1}=c_t+\varepsilon_{t+1}$$

*Introduced:* [5.1](lessons/05-01-permanent-income-life-cycle.md)

### Prudence

Convex marginal utility, $u'''>0$: a spread of possible future consumptions pushes *up* average future marginal utility, so risk itself becomes a reason to save today. Measured by the absolute-prudence coefficient, the exact dynamic cousin of Arrow–Pratt risk aversion.

$$P(c)=-\frac{u'''(c)}{u''(c)}$$

*Introduced:* [5.2](lessons/05-02-precautionary-saving.md)

### Buffer-stock saving

Prudence plus a borrowing constraint plus income risk produce a **target** level of cash-on-hand: below it, precaution rebuilds the buffer; above it, impatience spends it down. The household self-insures with a small liquid stock rather than smoothing a lifetime path.

*Introduced:* [5.2](lessons/05-02-precautionary-saving.md)

### Tobin's q — marginal and average

**Marginal $q$** is the shadow value of one more installed unit, $\partial V/\partial K$ — what actually drives investment, and unobservable. **Average $q$** is the firm's market value over the replacement cost of its capital, $V(K)/K$ — observable. They are the same number only under Hayashi's conditions.

*Introduced:* [5.3](lessons/05-03-q-theory-investment.md)

### Hayashi's theorem

If operating profit is homogeneous of degree one in $K$ and adjustment costs are homogeneous of degree one in $(I,K)$ — constant returns plus perfect competition — then $V(K)$ is linear in $K$, so average $q$ equals marginal $q$ and the observable ratio is a **sufficient statistic** for investment.

*Introduced:* [5.3](lessons/05-03-q-theory-investment.md)

### Stochastic discount factor (pricing kernel)

The ratio of tomorrow's marginal utility to today's. It discounts *and* re-weights by state: high when you're poor, low when you're rich. One kernel prices every asset, because they all trade against the same budget constraint.

$$m_{t+1}=\beta\,\frac{u'(c_{t+1})}{u'(c_t)},\qquad p_t=\mathbb{E}_t\big[m_{t+1}x_{t+1}\big]$$

*Introduced:* [1.3](lessons/01-03-euler-transversality.md), developed in [5.4](lessons/05-04-consumption-based-asset-pricing.md)

### Equity-premium puzzle

Postwar equities pay roughly 6 percentage points a year over bonds, but consumption growth is smooth (about 1.5 percent volatility) and barely correlated with stock returns — so the CRRA model needs risk aversion in the tens-to-hundreds. Its twin, the **risk-free-rate puzzle**: the same large $\gamma$ then predicts a real safe rate of 40 percent or more.

*Introduced:* [5.5](lessons/05-05-equity-premium-puzzle.md)

### Hansen–Jagannathan bound

The puzzle restated geometrically: to price a high-reward-per-unit-risk asset you need a *volatile* discount factor. Smooth consumption with moderate $\gamma$ delivers a nearly constant $m$, far below the frontier the data demand.

$$\frac{\sigma(m)}{\mathbb{E}(m)}\ \ge\ \frac{\lvert\mathbb{E}[R^e]\rvert}{\sigma(R^e)}\quad(\text{the highest Sharpe ratio})$$

*Introduced:* [5.5](lessons/05-05-equity-premium-puzzle.md)

### Divine coincidence

For pure **demand** shocks, one instrument hits both targets: set $i_t=r_t^n$ and the gap stays zero, which keeps inflation at zero too. A **cost-push** shock $u_t$ enters the Phillips curve directly and destroys it, forcing a genuine inflation-vs-output tradeoff.

*Introduced:* [6.1](lessons/06-01-monetary-fiscal-nk.md)

### Fiscal multiplier and the zero lower bound

$dY/dg$ is a *general-equilibrium* object, not a structural constant — it depends entirely on how monetary policy responds. Active bank: rates rise, private demand is crowded out, multiplier below one. At the **ZLB** the nominal rate is pinned, higher inflation *lowers* the real rate, spending crowds private demand *in*, and the multiplier exceeds one.

*Introduced:* [6.1](lessons/06-01-monetary-fiscal-nk.md)

### Taylor rule

An interest-rate feedback rule: raise the nominal rate when inflation runs above target or the economy overheats, around a neutral level set so that at target the rate equals $r^{*}+\pi^{*}$.

$$i_t=r^{*}+\pi^{*}+\phi_\pi(\pi_t-\pi^{*})+\phi_x\,x_t$$

*Introduced:* [6.2](lessons/06-02-policy-rules-taylor-principle.md)

### Taylor principle

Respond to inflation *more than one-for-one*, so a rise in inflation raises the **real** rate. Below one-for-one the real rate falls, demand rises, and the initial inflation belief validates itself.

$$\phi_\pi+\frac{1-\beta}{\kappa}\,\phi_x>1 \quad(\text{with }\phi_x=0:\ \phi_\pi>1)$$

*Introduced:* [6.2](lessons/06-02-policy-rules-taylor-principle.md)

### Determinacy and indeterminacy

**Determinacy:** exactly one bounded rational-expectations path, so beliefs have nothing to choose among. **Indeterminacy:** a continuum of bounded paths indexed by arbitrary "sunspot" beliefs — self-fulfilling volatility with no fundamental cause. The pathology is non-uniqueness, not divergence.

*Introduced:* [6.2](lessons/06-02-policy-rules-taylor-principle.md)

### Time inconsistency and inflation bias

A bank that can re-optimize each period, taking expectations as given, always wants a little surprise inflation to buy output. The public anticipates it, so output is unchanged and only inflation rises — a strictly worse equilibrium of rational play, curable only by commitment.

$$\pi^{\text{disc}}=\pi^{*}+\lambda a\,\tilde x\ >\ \pi^{*},\qquad x=0$$

*Introduced:* [6.2](lessons/06-02-policy-rules-taylor-principle.md)

### Matching function

Hiring is a congested reaction, not a spot market: unemployed searchers and open vacancies grind together to produce a flow of new matches, increasing in each argument and constant returns to scale.

$$M=m(U,V),\qquad f(\theta)=m(1,\theta),\qquad q(\theta)=m(\tfrac1\theta,1),\qquad f(\theta)=\theta\,q(\theta)$$

*Introduced:* [6.3](lessons/06-03-search-matching-dmp.md)

### Market tightness

Vacancies per unemployed worker, $\theta=V/U$ — the one number that summarizes how easy hiring is. High $\theta$ is a worker's market: fast job-finding ($f\uparrow$) bought exactly by slow vacancy-filling ($q\downarrow$).

*Introduced:* [6.3](lessons/06-03-search-matching-dmp.md)

### Beveridge curve

The steady-state flow-balance locus — unemployment is the share of time spent in the pool, inflow over total turnover. Downward-sloping and convex in $(u,V)$ space.

$$s(1-u)=f(\theta)\,u\quad\Longrightarrow\quad u=\frac{s}{s+f(\theta)}$$

*Introduced:* [6.3](lessons/06-03-search-matching-dmp.md)

### Job-creation condition (free entry)

Firms post vacancies until the last one just breaks even: the expected cost of filling a vacancy equals the present value of a filled job's profits.

$$\frac{c}{q(\theta)}=J=\frac{p-w}{r+s}$$

*Introduced:* [6.3](lessons/06-03-search-matching-dmp.md)

### Hosios condition

Efficiency is a knife-edge: worker bargaining power must equal the matching function's elasticity with respect to unemployment, $\beta=\eta$. Then the thick-market externality (an extra vacancy helps searchers) exactly cancels the congestion externality (it hurts other firms). Otherwise the DMP equilibrium is inefficient.

*Introduced:* [6.3](lessons/06-03-search-matching-dmp.md)

### Incomplete markets (Aiyagari)

A continuum of households, each hit by uninsurable idiosyncratic income shocks and up against a borrowing limit, each running a buffer-stock policy. Everyone over-saves for safety, so aggregate capital is high and the equilibrium interest rate lands **strictly below** the complete-markets benchmark, $r<\rho$.

*Introduced:* [6.4](lessons/06-04-heterogeneous-agent-taste.md)

### Stationary distribution

A fixed point of the transition rule the policy function induces on the cross-section: individuals churn perpetually through wealth states, but the histogram stops changing. Not a steady state in which anything rests.

$$\lambda^{*}=T_g\,\lambda^{*}$$

*Introduced:* [6.4](lessons/06-04-heterogeneous-agent-taste.md)

### Approximate aggregation (Krusell–Smith)

With aggregate shocks the state is the whole distribution — infinite-dimensional. Their finding is that for *forecasting prices*, only the distribution's **mean** matters, to near-perfect accuracy. An empirical near-miracle in their calibration, not a theorem.

*Introduced:* [6.4](lessons/06-04-heterogeneous-agent-taste.md)

## Formulas and rules

### The workhorse models at a glance

| Model | Takes as given | Explains | Cannot explain / what breaks |
|---|---|---|---|
| **Solow** ([2.1](lessons/02-01-solow-model.md), [2.2](lessons/02-02-convergence-solow-diagram.md)) | a fixed saving rate $s$; exogenous $n,g,\delta$; no optimization | a unique globally stable $k^{*}$; level-vs-growth effects; conditional convergence at $\lambda=(1-\alpha)(n+g+\delta)$ | where $g$ comes from; whether $s$ is *desirable* — it can over-accumulate ($r<n$); anything cyclical |
| **Ramsey–Cass–Koopmans** ([2.3](lessons/02-03-ramsey-cass-koopmans.md), [2.4](lessons/02-04-golden-rule-dynamic-efficiency.md)) | one infinitely-lived household; $\rho>n$; CRRA; exogenous $g$ | saving as an *optimum*; the modified golden rule $f'(k^{*})=\rho+\delta$; saddle-path convergence; why an optimizer is never dynamically inefficient | finite lives; valued fiat money; unemployment; anything nominal. Transversality rules out the interesting failures by assumption |
| **OLG (Diamond/Samuelson)** ([3.1](lessons/03-01-olg-model.md)–[3.4](lessons/03-04-social-security-transfers.md)) | two-period lives; cohort growth $n$; no agent linking generations | dynamic inefficiency; fiat money and rational bubbles; Pareto-improving unfunded pensions; failure of the First Welfare Theorem | quarterly business cycles; and its results evaporate under operative dynastic altruism (Ricardian equivalence) |
| **RBC** ([4.1](lessons/04-01-real-business-cycle.md)–[4.3](lessons/04-03-propagation-impulse-responses.md)) | an exogenous TFP process $(\varphi,\sigma_\varepsilon)$; flexible prices; complete markets | comovement of $y,c,i,\ell$; investment more volatile than consumption; cycles as *efficient* responses | its own persistence — internal propagation dies at rate $\alpha\approx1/3$; money non-neutrality; involuntary unemployment; hump-shaped IRFs; a labor-supply elasticity anyone believes |
| **New Keynesian** ([4.4](lessons/04-04-nominal-rigidities-new-keynesian.md), [4.5](lessons/04-05-nk-phillips-curve.md), [6.1](lessons/06-01-monetary-fiscal-nk.md), [6.2](lessons/06-02-policy-rules-taylor-principle.md)) | Calvo $\theta$; demand elasticity $\varepsilon$; a policy rule; RBC's natural output $y^n$ | monetary non-neutrality; the output gap as a market failure; forward-looking inflation; divine coincidence; determinacy conditions | sluggish, backward-looking inflation without a hybrid fix; unemployment as a flow (needs DMP); MPC heterogeneity and inequality (needs HANK) |

### The recursive recipe — the five steps every Module 1 derivation runs

1. **Write the Bellman equation**, substituting the constraint so the control is $k'$: $V(k)=\max_{k'}\{u(k,k')+\beta V(k')\}$.
2. **FOC in the control:** $u_{k'}(k,k')+\beta V'(k')=0$. Still contaminated by the unknown $V'$.
3. **Envelope (Benveniste–Scheinkman):** $V'(k)=u_k(k,g(k))$ — differentiate holding the control *frozen*.
4. **Roll the envelope forward one period and substitute** into the FOC. **Envelope + Bellman FOC = Euler equation.**
5. **Check transversality**, then invoke sufficiency: for a concave problem, Euler at every $t$ **plus** TVC $\Rightarrow$ globally optimal.

Under uncertainty every step survives verbatim with $\mathbb{E}_t$ in front of the continuation: FOC $u'(c_t)=\beta\,\mathbb{E}_t[V_k(k_{t+1},z_{t+1})]$, envelope $V_k(k,z)=u'(c)[zf'(k)+1-\delta]$, and TVC $\lim_{t\to\infty}\beta^t\,\mathbb{E}_0[u'(c_t)k_{t+1}]=0$.

*From* [1.3](lessons/01-03-euler-transversality.md), [1.4](lessons/01-04-envelope-theorem-dynamics.md), *and* [1.5](lessons/01-05-stochastic-dynamic-programming.md)

### Existence and convergence of the value function

$$\text{Blackwell (monotone + discounting)} \Rightarrow \lVert Tf-Tg\rVert\le\beta\lVert f-g\rVert \Rightarrow \text{Banach: unique } V,\ V_n\to V$$

Error bounds you can actually use: $\lVert V_n-V\rVert\le\beta^n\lVert V_0-V\rVert$ (tight, but needs $V$), and the a-priori stopping rule $\lVert V_n-V\rVert\le\frac{\beta^n}{1-\beta}\lVert V_1-V_0\rVert$ (computable after one iteration). Taking an expectation is a positive, order-preserving linear operation, so the *stochastic* Bellman operator inherits both Blackwell conditions unchanged.

*From* [1.2](lessons/01-02-principle-of-optimality.md) *and* [1.5](lessons/01-05-stochastic-dynamic-programming.md)

### Euler equations across the course — one idea, ten costumes

| Setting | Condition | Reads as |
|---|---|---|
| Deterministic growth ([1.3](lessons/01-03-euler-transversality.md)) | $u'(c_t)=\beta u'(c_{t+1})\big[f'(k_{t+1})+1-\delta\big]$ | can't gain by shifting consumption one period |
| CRRA form ([1.3](lessons/01-03-euler-transversality.md)) | $\dfrac{c_{t+1}}{c_t}=\big(\beta R_{t+1}\big)^{1/\sigma}$ | $1/\sigma$ is the intertemporal elasticity of substitution |
| Stochastic growth ([1.5](lessons/01-05-stochastic-dynamic-programming.md)) | $u'(c_t)=\beta\,\mathbb{E}_t\!\big[u'(c_{t+1})\big(z_{t+1}f'(k_{t+1})+1-\delta\big)\big]$ | the *expected* marginal payoff, not the payoff of the expectation |
| Continuous time ([2.3](lessons/02-03-ramsey-cass-koopmans.md)) | $\dfrac{\dot c}{c}=\dfrac{1}{\sigma}\big[f'(k)-\delta-\rho\big]$ | consumption grows when the net return beats impatience |
| Two-period OLG ([3.1](lessons/03-01-olg-model.md)) | $u'(c^y_t)=\beta(1+r_{t+1})\,u'(c^o_{t+1})$ | saving one more unit young must be a wash |
| RBC intertemporal ([4.1](lessons/04-01-real-business-cycle.md)) | $u_c(t)=\beta\,\mathbb{E}_t\!\big[u_c(t{+}1)\,R_{t+1}\big]$ | the saving margin, with endogenous labor in $R$ |
| RBC intratemporal ([4.1](lessons/04-01-real-business-cycle.md)) | $\dfrac{u_\ell}{u_c}=(1-\alpha)z_tk_t^\alpha\ell_t^{-\alpha}=w_t$ | the last hour's leisure is worth exactly the wage it costs |
| Dynamic IS ([4.5](lessons/04-05-nk-phillips-curve.md)) | $x_t=\mathbb{E}_t x_{t+1}-\tfrac1\sigma\big(i_t-\mathbb{E}_t\pi_{t+1}-r_t^n\big)$ | the same Euler equation, log-linearized in gaps |
| PIH / Hall ([5.1](lessons/05-01-permanent-income-life-cycle.md)) | $\mathbb{E}_t c_{t+1}=c_t$ (quadratic $u$, $\beta(1+r)=1$) | only news moves consumption |
| Constrained ([5.2](lessons/05-02-precautionary-saving.md)) | $u'(c_t)=\beta(1+r)\mathbb{E}_t u'(c_{t+1})+\lambda_t,\ \ \lambda_t\ge0$ | a binding limit acts like extra impatience |
| Asset pricing ([5.4](lessons/05-04-consumption-based-asset-pricing.md)) | $1=\mathbb{E}_t[m_{t+1}R_{t+1}]$, $p_t=\mathbb{E}_t[m_{t+1}x_{t+1}]$ | price = payoff weighted by how hungry you'll be |
| Investment co-state ([5.3](lessons/05-03-q-theory-investment.md)) | $\dot q=(r+\delta)q-\big[\Pi'(K)-C_K\big]$ | no-arbitrage for a unit of installed capital |

### Closed forms worth knowing cold (log utility, Cobb–Douglas, $\delta=1$)

This one case recurs from [1.1](lessons/01-01-sequence-vs-recursive.md) through [4.3](lessons/04-03-propagation-impulse-responses.md); memorize it and half the course's algebra is a lookup.

| Problem | Value function | Policy |
|---|---|---|
| Cake-eating, $k'=k-c$ | $V(k)=A+\frac{1}{1-\beta}\ln k$ | $c=(1-\beta)k$, $k'=\beta k$ |
| Growth, $c=k^\alpha-k'$ | $V(k)=A+\frac{\alpha}{1-\alpha\beta}\ln k$ | $c=(1-\alpha\beta)k^\alpha$, $k'=\alpha\beta k^\alpha$ |
| Stochastic, $c=zk^\alpha-k'$ | $V(k,z)=A+B\ln k+C\ln z$, $B=\frac{\alpha}{1-\alpha\beta}$ | $k_{t+1}=\alpha\beta z_t k_t^\alpha$, $c_t=(1-\alpha\beta)z_tk_t^\alpha$ |
| RBC with labor | — | $s=\alpha\beta$ and $\bar\ell=\dfrac{1-\alpha}{(1-\alpha)+\psi(1-\alpha\beta)}$, both constants |

The savings rate is $\alpha\beta$ in every version, the shock cancels out of the Euler equation, and the additive constants ($A$, $C$) never touch the policy — they shift the level of $V$, not the decision.

*From* [1.1](lessons/01-01-sequence-vs-recursive.md), [1.4](lessons/01-04-envelope-theorem-dynamics.md), [1.5](lessons/01-05-stochastic-dynamic-programming.md), [1.6](lessons/01-06-recursive-competitive-equilibrium.md), *and* [4.1](lessons/04-01-real-business-cycle.md)

### Competitive factor prices (used everywhere from [1.6](lessons/01-06-recursive-competitive-equilibrium.md) on)

$$r=zF_K(K,L)\ (\text{or } f'(k)-\delta),\qquad w=zF_L(K,L)=f(k)-k f'(k)$$

For Cobb–Douglas with $L=1$: $r=z\alpha K^{\alpha-1}$ and $w=z(1-\alpha)K^\alpha$. Constant returns plus Euler's homogeneity theorem give **factor-payment exhaustion**, $rK+w=Y$, hence zero profit — the check to run whenever you write down prices.

*From* [1.6](lessons/01-06-recursive-competitive-equilibrium.md), [2.6](lessons/02-06-growth-accounting.md), *and* [3.1](lessons/03-01-olg-model.md)

### Growth: steady states, rates, and speeds

$$\text{Solow:}\quad \dot k=s f(k)-(n+g+\delta)k,\qquad k^{*}=\Big(\frac{s}{n+g+\delta}\Big)^{\frac{1}{1-\alpha}},\qquad y^{*}=(k^{*})^{\alpha}$$

$$\text{Ramsey:}\quad \dot k=f(k)-c-(n+\delta)k,\qquad \dot c=\frac{c}{\sigma}\big[f'(k)-\delta-\rho\big]$$

$$\text{Convergence speed:}\quad \frac{d}{dt}\ln k\approx-\lambda\big(\ln k-\ln k^{*}\big),\qquad \lambda=(1-\alpha^{*})(n+g+\delta),\quad t_{1/2}=\frac{\ln 2}{\lambda}$$

| Quantity | Solow | Ramsey | AK |
|---|---|---|---|
| steady-state condition | $s f(k^{*})=(n+g+\delta)k^{*}$ | $f'(k^{*})=\rho+\delta$ | none — no level $k^{*}$ exists |
| long-run per-capita growth | $g$ (exogenous) | $g$ (exogenous) | $sA-(n+\delta)$ |
| does $s$ move long-run growth? | no — level effect only | no — level effect only | yes, $\partial g/\partial s=A$ |
| golden-rule concept applies? | yes, $f'(k_{gr})=n+g+\delta$ | yes; the optimum sits below it | no — undefined without a steady-state level |
| Cobb–Douglas golden-rule saving rate | $s_{gr}=\alpha$ | — | — |

Empirically $\alpha\approx1/3$ gives $\lambda\approx4$ percent a year (half-life about 17 years); a *broad* capital share $\alpha\approx2/3$ gives the observed $\lambda\approx2$ percent (half-life about 35 years).

*From* [2.1](lessons/02-01-solow-model.md), [2.2](lessons/02-02-convergence-solow-diagram.md), [2.3](lessons/02-03-ramsey-cass-koopmans.md), [2.4](lessons/02-04-golden-rule-dynamic-efficiency.md), *and* [2.5](lessons/02-05-endogenous-growth-ak-ideas.md)

### Growth accounting

$$\frac{\Delta Y}{Y}=\frac{\Delta A}{A}+\alpha_K\frac{\Delta K}{K}+\alpha_L\frac{\Delta L}{L},\qquad \frac{\Delta A}{A}=\frac{\Delta Y}{Y}-\alpha_K\frac{\Delta K}{K}-\alpha_L\frac{\Delta L}{L}$$

Per-worker form (with $\alpha_L=1-\alpha_K$): $\ \dfrac{\Delta y}{y}=\dfrac{\Delta A}{A}+\alpha_K\dfrac{\Delta k}{k}$ — growth in living standards is capital deepening plus TFP, and empirically TFP dominates. The weights are income shares *only* under perfect competition (so $\alpha_K=rK/Y$) and constant returns (so $\alpha_K+\alpha_L=1$).

Ideas/R&D block: $\ \dot A=\delta_R L_A A^{\phi}$, so $\dot A/A=\delta_R L_A A^{\phi-1}$. At $\phi=1$ growth is proportional to research labor (the counterfactual **scale effect**); $\phi<1$ is the semi-endogenous fix; $\phi>1$ explodes in finite time.

*From* [2.5](lessons/02-05-endogenous-growth-ak-ideas.md) *and* [2.6](lessons/02-06-growth-accounting.md)

### OLG: saving, capital, and the efficiency test

$$\text{Log utility:}\quad s_t=\frac{\beta}{1+\beta}\,w_t\quad(\text{independent of } r_{t+1}),\qquad w_t=(1-\alpha)k_t^{\alpha}$$

$$\text{CRRA:}\quad s(w,R)=\frac{w}{1+\beta^{-1/\theta}R^{(\theta-1)/\theta}},\qquad \frac{\partial s}{\partial R}\ \begin{cases}<0 & \theta>1\ (\text{income effect wins})\\ =0 & \theta=1\ (\text{log})\\ >0 & \theta<1\ (\text{substitution wins})\end{cases}$$

$$\text{Transition:}\quad k_{t+1}=\frac{1}{1+n}\cdot\frac{\beta}{1+\beta}(1-\alpha)k_t^{\alpha},\qquad k^{*}=\left[\frac{\beta(1-\alpha)}{(1+\beta)(1+n)}\right]^{\frac{1}{1-\alpha}}$$

$$1+r^{*}=\frac{\alpha(1+\beta)}{\beta(1-\alpha)}(1+n),\qquad \text{dynamically inefficient}\iff \alpha<\frac{\beta}{1+2\beta}$$

Stability of the one-dimensional map $k_{t+1}=g(k_t)$ is $\lvert g'(k^{*})\rvert<1$; for this Cobb–Douglas family $g'(k^{*})=\alpha$ always. Money, bubbles, and unfunded pensions all live under the *same* condition $r<n$: money's stationary return is $R^m=1+n$, a rational bubble survives only if $r\le g_{\text{econ}}$, and a PAYG scheme raises each cohort's lifetime resources by $d\,\frac{n-r}{1+r}$ while the launch cohort receives $(1+n)d$ free.

*From* [3.1](lessons/03-01-olg-model.md), [3.2](lessons/03-02-dynamic-inefficiency.md), [3.3](lessons/03-03-money-rational-bubbles.md), *and* [3.4](lessons/03-04-social-security-transfers.md)

### Log-linearization rules

With $\hat x_t\equiv\ln(x_t/x^{*})$, so $x_t\approx x^{*}(1+\hat x_t)$:

$$\widehat{x_t y_t}=\hat x_t+\hat y_t,\qquad \widehat{x_t^{\,a}}=a\,\hat x_t,\qquad \widehat{x_t+y_t}=\frac{x^{*}}{x^{*}+y^{*}}\hat x_t+\frac{y^{*}}{x^{*}+y^{*}}\hat y_t$$

Two standard applications: the resource constraint $y=c+i$ becomes the **share-weighted** $\hat y_t=\frac{c^{*}}{y^{*}}\hat c_t+\frac{i^{*}}{y^{*}}\hat i_t$ (never $\hat c_t+\hat i_t$), and capital accumulation $k_{t+1}=(1-\delta)k_t+i_t$ becomes $\hat k_{t+1}=(1-\delta)\hat k_t+\delta\,\hat i_t$ (collapsing to $\hat k_{t+1}=\hat i_t$ at $\delta=1$).

*From* [4.2](lessons/04-02-calibration-stochastic-growth.md) *and* [4.3](lessons/04-03-propagation-impulse-responses.md)

### Solving linear rational-expectations systems — Blanchard–Kahn

Write the log-linearized model as an expectational first-order system and split the variables:

$$\mathbb{E}_t\begin{pmatrix} s_{t+1}\\ j_{t+1}\end{pmatrix}=A\begin{pmatrix} s_t\\ j_t\end{pmatrix}+B\varepsilon_{t+1},\qquad s=\text{predetermined states},\ j=\text{jump variables}$$

**Predetermined** variables were fixed by yesterday's decision (capital $\hat k_t$; the shock $\hat z_t$). **Jump** variables are chosen freely today and can leap (consumption, inflation, the output gap).

| Count of unstable eigenvalues (outside the unit circle) | Outcome |
|---|---|
| $=$ number of jump variables | **unique** bounded RE equilibrium — the saddle path |
| $<$ number of jump variables | **indeterminacy**: a continuum of bounded paths, sunspot equilibria |
| $>$ number of jump variables | **no** bounded solution — every path explodes |

The economics: each unstable root must be "used up" pinning down one free jump variable; the stable roots then govern the predetermined states. This is exactly the continuous-time saddle-path argument of [2.3](lessons/02-03-ramsey-cass-koopmans.md) — jump $c_0$ onto the stable manifold — discretized and made stochastic.

**Two worked cases.**

- *Stochastic growth* ([4.2](lessons/04-02-calibration-stochastic-growth.md)): one predetermined state $\hat k_t$, one jump $\hat c_t$. The solution is a linear policy function $\hat k_{t+1}=a\,\hat k_t+b\,\hat z_t$ with $\lvert a\rvert<1$; in the log/$\delta=1$ case it is *exactly* $\hat k_{t+1}=\alpha\hat k_t+\hat z_t$, with $\hat y_t=\hat c_t=\hat z_t+\alpha\hat k_t$.
- *Three-equation NK* ([6.2](lessons/06-02-policy-rules-taylor-principle.md)): $x_t$ **and** $\pi_t$ are both jumps and nothing is predetermined, so **both** eigenvalues must be unstable. That requirement reduces exactly to the Taylor condition $\phi_\pi+\frac{1-\beta}{\kappa}\phi_x>1$.

*From* [4.2](lessons/04-02-calibration-stochastic-growth.md), [4.3](lessons/04-03-propagation-impulse-responses.md), *and* [6.2](lessons/06-02-policy-rules-taylor-principle.md)

### Calibration targets (quarterly, standard RBC)

| Parameter | Target | Typical value |
|---|---|---|
| $\alpha$ | capital's share of national income | $1/3$ |
| $\delta$ | capital-consumption data (10 percent a year) | $0.025$ |
| $\beta$ | average real return, $\beta\approx1/(1+r)$ | $0.99$ |
| $\psi$ | average hours worked (about a third of the time endowment) | set to match |
| $\nu$ | inverse Frisch elasticity, from micro labor-supply studies | set to match |
| $\varphi,\ \sigma_\varepsilon$ | AR(1) fit to the Solow residual of [2.6](lessons/02-06-growth-accounting.md) | $0.95$, $0.007$ |

A pass on the moment test: consumption *less* volatile than output, investment *far more*, hours nearly as volatile, everything strongly procyclical.

*From* [4.2](lessons/04-02-calibration-stochastic-growth.md)

### The RBC impulse response, in closed form

With $\hat k_{t+1}=\alpha\hat k_t+\hat z_t$, $\hat z_t=\varphi\hat z_{t-1}+\varepsilon_t$, impulse $\varepsilon_0=\sigma$, and $\hat k_0=0$:

$$\hat z_t=\sigma\varphi^{t},\qquad \hat k_t=\sigma\,\frac{\alpha^{t}-\varphi^{t}}{\alpha-\varphi},\qquad \hat y_t=\hat z_t+\alpha\hat k_t$$

The state matrix $\begin{pmatrix}\alpha & 1\\ 0 & \varphi\end{pmatrix}$ is triangular, so its eigenvalues are $\alpha$ and $\varphi$ — **the eigenvalues are the decay rates**, and every IRF is a blend of the two geometric modes. Output follows the AR(2) $\hat y_t=(\alpha+\varphi)\hat y_{t-1}-\alpha\varphi\,\hat y_{t-2}+\varepsilon_t$, whose first autocorrelation $\rho(1)=\frac{\alpha+\varphi}{1+\alpha\varphi}$ is $0.975$ at $\alpha=1/3,\varphi=0.95$ — barely above the shock's own $0.95$. That gap *is* the propagation critique.

*From* [4.3](lessons/04-03-propagation-impulse-responses.md)

### Calvo algebra

$$P_t^{1-\varepsilon}=\theta\,P_{t-1}^{1-\varepsilon}+(1-\theta)\,(p_t^{*})^{1-\varepsilon},\qquad \mathbb{E}[\text{price spell}]=\sum_{k\ge1}k(1-\theta)\theta^{k-1}=\frac{1}{1-\theta}$$

Survival $k$ more periods has probability $\theta^{k}$. Markup: $\mu=\varepsilon/(\varepsilon-1)$, so the price-over-marginal-cost share is the Lerner index $1/\varepsilon$. At $\theta=0.75$ (quarterly) the average price lives four quarters; higher $\theta$ means stickier prices, *more* monetary non-neutrality, and a *flatter* Phillips curve.

*From* [4.4](lessons/04-04-nominal-rigidities-new-keynesian.md) *and* [4.5](lessons/04-05-nk-phillips-curve.md)

### The three-equation New Keynesian model

$$\text{IS:}\quad x_t=\mathbb{E}_t x_{t+1}-\tfrac{1}{\sigma}\big(i_t-\mathbb{E}_t\pi_{t+1}-r_t^n\big)$$
$$\text{NKPC:}\quad \pi_t=\beta\,\mathbb{E}_t\pi_{t+1}+\kappa\,x_t+u_t$$
$$\text{Rule:}\quad i_t=r_t^n+\phi_\pi\pi_t+\phi_x x_t$$

**Forward solution** (imposing $\lim_{T\to\infty}\beta^T\mathbb{E}_t\pi_{t+T}=0$): inflation is the present value of expected future slack — which is why credibility is the whole game.

$$\pi_t=\kappa\sum_{k=0}^{\infty}\beta^{k}\,\mathbb{E}_t\,x_{t+k}$$

**Optimal response to a cost-push shock** (static loss $L=\tfrac12(\pi^2+\lambda x^2)$ subject to $\pi=\kappa x+u$):

$$x_t=-\frac{\kappa}{\lambda}\,\pi_t,\qquad \pi=u\,\frac{\lambda}{\lambda+\kappa^2},\qquad x=-u\,\frac{\kappa}{\lambda+\kappa^2}$$

Lean against inflation by opening a proportional negative gap — neither target is hit, and the pain is split by $\lambda$ and $\kappa$. Contrast a *backward-looking* curve $\pi_t=\pi_{t-1}+\kappa x_t$, where disinflation costs a mechanical recession of $x_t=-\pi_{t-1}/\kappa$ (the sacrifice ratio $1/\kappa$).

*From* [4.5](lessons/04-05-nk-phillips-curve.md), [6.1](lessons/06-01-monetary-fiscal-nk.md), *and* [6.2](lessons/06-02-policy-rules-taylor-principle.md)

### Consumption: MPCs and the PIH

$$\text{MPC}_{\text{transitory}}=\frac{r}{1+r}\approx0,\qquad \text{MPC}_{\text{permanent}}=1$$

A transitory dollar adds one dollar to $W$, consumed as an annuity $\frac{r}{1+r}$; a permanent dollar adds $\frac{1+r}{r}$ to human wealth, and the annuity factor cancels it exactly. Over $N$ remaining periods at $r=0$ the transitory MPC is $1/N$. **The persistence of a fiscal change, not its size, drives its demand effect.**

Two empirical failures of the benchmark: **excess sensitivity** (consumption responds to *predictable* income, which the martingale forbids) and **excess smoothness** (it responds *less* than one-for-one to persistent income news).

*From* [5.1](lessons/05-01-permanent-income-life-cycle.md)

### Prudence vs. risk aversion, by utility function

| Utility | $u'(c)$ | $u'''$ | Risk aversion $A=-u''/u'$ | Prudence $P=-u'''/u''$ |
|---|---|---|---|---|
| Quadratic $ac-\tfrac{b}{2}c^2$ | $a-bc$ | $0$ | $b/(a-bc)>0$ | $0$ — **certainty equivalence** |
| CRRA $\dfrac{c^{1-\gamma}}{1-\gamma}$ | $c^{-\gamma}$ | $\gamma(\gamma+1)c^{-\gamma-2}>0$ | $\gamma/c$ | $(\gamma+1)/c = A+1/c$ |
| CARA $-\tfrac1\alpha e^{-\alpha c}$ | $e^{-\alpha c}$ | $\alpha^2e^{-\alpha c}>0$ | $\alpha$ | $\alpha$ (equal, and constant) |

Second-order precautionary premium: optimal saving rises with $\tfrac12\sigma^2 P(c)$ — the product of the *risk* and the *prudence*. Exact CARA-normal case: $s=\dfrac{y_1-\bar y_2}{1+R}+\dfrac{\alpha\sigma^2}{2(1+R)}$, so $ds/d\sigma^2>0$.

*From* [5.2](lessons/05-02-precautionary-saving.md)

### Asset pricing formulas

$$p_t=\mathbb{E}_t[m_{t+1}x_{t+1}],\qquad R_f=\frac{1}{\mathbb{E}_t[m_{t+1}]},\qquad \mathbb{E}_t[R_i]-R_f=-\frac{\operatorname{Cov}_t(m_{t+1},R_i)}{\mathbb{E}_t[m_{t+1}]}$$

Lognormal CRRA closed forms (with $\ln m=-\rho-\gamma\Delta\ln c$):

$$r_f=\rho+\gamma g_c-\tfrac12\gamma^2\sigma_c^2,\qquad \mathbb{E}[r_i]-r_f+\tfrac12\sigma_i^2=\gamma\operatorname{Cov}(\Delta\ln c,\,r_i)=\gamma\rho_{ec}\sigma_e\sigma_c$$

Read $r_f$ term by term: impatience raises it, expected growth raises it (you'd borrow against a rich future), consumption risk *lowers* it (precautionary demand for safety). The premium is a **covariance**, not a variance: an asset uncorrelated with consumption earns zero premium however wild it is.

Plugging in postwar US moments — premium $0.06$, $\sigma_e\approx0.16$, $\sigma_c\approx0.015$, $\rho_{ec}\approx0.20$ — forces $\gamma\approx125$ (and $\gamma\approx25$ even granting $\rho_{ec}=1$), against a defensible $1$ to $5$. Feeding $\gamma=25$ back into $r_f$ gives roughly 44 percent. Equivalently, $\sigma(m)/\mathbb{E}(m)\approx\gamma\sigma_c$ must clear the Sharpe ratio of about $0.40$, again demanding $\gamma\gtrsim27$.

*From* [5.4](lessons/05-04-consumption-based-asset-pricing.md) *and* [5.5](lessons/05-05-equity-premium-puzzle.md)

### q-theory of investment

$$\mathcal H=\Pi(K)-I-C(I,K)+q\,(I-\delta K)$$

$$\text{FOC in } I:\quad 1+C_I(I,K)=q,\qquad \text{co-state:}\quad \dot q=(r+\delta)q-\big[\Pi'(K)-C_K\big]$$

$$q_t=\int_t^\infty e^{-(r+\delta)(s-t)}\big[\Pi'(K_s)-C_K(I_s,K_s)\big]\,ds$$

With the quadratic (Hayashi) cost $C(I,K)=\frac{\varphi}{2}(I/K)^2K$, so $C_I=\varphi\,I/K$:

$$\frac{I}{K}=\frac{q-1}{\varphi}$$

Invest when $q>1$, disinvest when $q<1$; the slope $1/\varphi$ is how violently a firm responds to valuation. Note the discount rate is $r+\delta$, not $r$ — a machine competes with the interest rate *and* wears out. Steady state: $q^{*}=\Pi'(K^{*})/(r+\delta)$, with $q^{*}=1$ and $I/K=\delta$.

*From* [5.3](lessons/05-03-q-theory-investment.md)

### DMP search and matching

$$u=\frac{s}{s+f(\theta)},\qquad \frac{c}{q(\theta)}=J=\frac{p-w}{r+s},\qquad w=\beta\,(p+c\theta)+(1-\beta)\,z$$

Combining the last two (using $p-w=(1-\beta)(p-z)-\beta c\theta$) gives the single equation that pins tightness — the left side is constant, the right side strictly increasing in $\theta$, so $\theta^{*}$ is **unique**:

$$(1-\beta)(p-z)=\frac{c(r+s)}{q(\theta)}+\beta c\,\theta$$

Cobb–Douglas matching $m(U,V)=A\,U^{\eta}V^{1-\eta}$ gives $f(\theta)=A\theta^{1-\eta}$ and $q(\theta)=A\theta^{-\eta}$ (check $f=\theta q$). Comparative statics all run through one mechanism: anything that raises the wage — higher $z$, higher $\beta$ — cuts $J$, cuts vacancy posting, lowers $\theta^{*}$, and raises $u^{*}$. Efficiency requires the Hosios knife-edge $\beta=\eta$.

*From* [6.3](lessons/06-03-search-matching-dmp.md)

### Aiyagari fixed point (the algorithm)

$$r \to (r,w) \to g(a,y) \to \lambda^{*}(a,y) \to K=\int a\,d\lambda^{*} \to r'=F_K(K,1)-\delta,\qquad \text{require } r'=r$$

A one-dimensional root-find on $r$ with an entire distribution recomputed inside every iteration — which is why heterogeneous-agent macro is fundamentally computational. If capital supply exceeds demand, lower $r$ and repeat. The equilibrium lands at $r<\rho$, and the wealth distribution is right-skewed with a genuine **atom** of hand-to-mouth households pinned at the borrowing limit.

*From* [6.4](lessons/06-04-heterogeneous-agent-taste.md)

## Assumed, not taught here

This is a Tier 2 course: it uses the following without deriving them. Each row points at where the *why* lives.

| Fact | Where it's taught |
|---|---|
| Bellman equation, Blackwell's conditions, Banach fixed point, value iteration (used as a *tool* before [1.2](lessons/01-02-principle-of-optimality.md) re-derives it) | [grad-micro 1.5](../grad-micro/lessons/01-05-monotone-comparative-statics-dynamic-programming.md) |
| Completeness of the bounded-continuous-function space under the sup norm — what licenses "iterate from any guess" | [real-analysis 8.2](../real-analysis/lessons/08-02-what-uniform-convergence-preserves.md), with contractive sequences in [real-analysis 2.4](../real-analysis/lessons/02-04-cauchy-sequences.md) |
| Compactness of the state space / continuity hypotheses behind the equivalence theorem | [real-analysis 4.2](../real-analysis/lessons/04-02-compactness-heine-borel.md) |
| Lagrangians and equality-constrained optimization; multipliers as shadow prices | [grad-micro 1.2](../grad-micro/lessons/01-02-unconstrained-equality-constrained-optimization.md), [calc-refresher 4.2](../calc-refresher/lessons/04-02-multivariable-optimization-lagrange.md) |
| Kuhn–Tucker conditions and complementary slackness (the binding-constraint Euler *inequality* of [5.2](lessons/05-02-precautionary-saving.md)) | [grad-micro 1.3](../grad-micro/lessons/01-03-inequality-constraints-kuhn-tucker.md) |
| The **static** envelope theorem and duality (Roy, Shephard) that [1.4](lessons/01-04-envelope-theorem-dynamics.md) generalizes | [grad-micro 1.4](../grad-micro/lessons/01-04-envelope-theorem-duality.md) |
| Concavity, and why FOCs plus concavity are *sufficient* for a global optimum | [grad-micro 1.1](../grad-micro/lessons/01-01-convexity-concavity-quasiconcavity.md) |
| Competitive equilibrium, price-taking, and marginal-product factor pricing | [grad-micro 4.2](../grad-micro/lessons/04-02-edgeworth-box-walrasian-equilibrium.md), [grad-micro 3.3](../grad-micro/lessons/03-03-profit-maximization-supply.md) |
| First and Second Welfare Theorems — the engine behind planner $=$ market in [1.6](lessons/01-06-recursive-competitive-equilibrium.md), and whose failure *is* [3.2](lessons/03-02-dynamic-inefficiency.md) | [grad-micro 4.4](../grad-micro/lessons/04-04-two-welfare-theorems.md) |
| Constant returns and Euler's theorem for homogeneous functions (factor exhaustion, Hayashi's theorem) | [grad-micro 3.1](../grad-micro/lessons/03-01-production-sets-technology.md) |
| Expected utility, CRRA, and Arrow–Pratt risk aversion — stated but never built here | [grad-micro 2.5](../grad-micro/lessons/02-05-choice-under-uncertainty.md) |
| Income vs. substitution effects (why log utility makes saving independent of $r$) | [grad-micro 2.4](../grad-micro/lessons/02-04-slutsky-equation-comparative-statics.md) |
| Monopoly pricing, marginal revenue $=$ marginal cost, the markup and Lerner index | [grad-micro 6.1](../grad-micro/lessons/06-01-monopoly-price-discrimination.md) |
| Nash bargaining over a surplus — the wage equation of [6.3](lessons/06-03-search-matching-dmp.md) is applied, never derived | [grad-game-theory 3.5](../grad-game-theory/lessons/03-05-bargaining.md) |
| Jensen's inequality (the entire content of prudence and precautionary saving) | [probability-theory 2.5](../probability-theory/lessons/02-05-lp-spaces-inequalities.md) |
| Conditional expectation $\mathbb{E}[\cdot\mid z]$ and the law of iterated expectations | [probability-theory 5.1](../probability-theory/lessons/05-01-conditional-expectation.md), [5.2](../probability-theory/lessons/05-02-conditional-expectation-properties.md) |
| Martingales — what Hall's random-walk consumption actually is | [probability-theory 5.3](../probability-theory/lessons/05-03-martingales.md) |
| The Markov property ("the present is a sufficient state"), which is what makes $(k,z)$ a legal state | [stochastic-calculus 1.3](../stochastic-calculus/lessons/01-03-filtrations-adaptedness-markov.md) |
| Lognormal moments, $\mathbb{E}[e^{X}]=e^{\mathbb{E}X+\frac12\operatorname{Var}X}$ — used unremarked all through [5.4](lessons/05-04-consumption-based-asset-pricing.md)–[5.5](lessons/05-05-equity-premium-puzzle.md) | [stochastic-calculus 3.4](../stochastic-calculus/lessons/03-04-geometric-brownian-motion.md) |
| Finite Markov chains, transition matrices, and stationary distributions as eigenvectors | [linalg-refresher 3.2](../linalg-refresher/lessons/03-02-diagonalization.md) |
| Eigenvalues and stability; saddle points, nullclines, phase portraits | [dynamical-systems 1.3](../dynamical-systems/lessons/01-03-trace-determinant-classification.md), [1.5](../dynamical-systems/lessons/01-05-phase-portraits.md) |
| One-dimensional maps, cobweb diagrams, and $\lvert g'(k^{*})\rvert<1$ stability (the OLG transition) | [dynamical-systems 5.1](../dynamical-systems/lessons/05-01-maps-cobweb.md) |
| First-order Taylor expansion — what log-linearization *is* | [calc-refresher 1.3](../calc-refresher/lessons/01-03-linearization-and-taylor.md) |
| Geometric series and their sums (Calvo durations, forward-solved NKPC, annuity factors) | [calc-refresher 3.1](../calc-refresher/lessons/03-01-series-convergence-tests.md) |
| Perpetuities and convergence of infinite-horizon present values | [calc-refresher 2.3](../calc-refresher/lessons/02-03-improper-integrals-and-models.md) |
| The Hamiltonian and the co-state variable (the current-value Hamiltonian of [2.3](lessons/02-03-ramsey-cass-koopmans.md), [5.3](lessons/05-03-q-theory-investment.md)) | [analytical-mechanics 3.1](../analytical-mechanics/lessons/03-01-legendre-hamiltons-equations.md); the variational setup in [1.1](../analytical-mechanics/lessons/01-01-calculus-of-variations.md) |

## Pitfalls

### Recursive methods

- The state is an *information summary*, not a stock of stuff — too small and the recursion is simply wrong; too big and you waste effort. *([1.1](lessons/01-01-sequence-vs-recursive.md))*
- Stationarity is earned, not assumed: $V$ and $g$ lose their time subscripts only because the horizon is infinite and $(u,f,\beta)$ don't depend on $t$. Finite horizon means $V_t$ and backward induction. *([1.1](lessons/01-01-sequence-vs-recursive.md))*
- Guess-and-verify proves you found *a* solution; boundedness plus the contraction argument is what makes it *the* value function. Drop boundedness and spurious explosive solutions appear. *([1.1](lessons/01-01-sequence-vs-recursive.md), [1.2](lessons/01-02-principle-of-optimality.md))*
- Blackwell's conditions are **sufficient, not necessary**, and they only apply once you know $T$ maps bounded continuous functions into bounded continuous functions. *([1.2](lessons/01-02-principle-of-optimality.md))*
- The contraction bounds the *idealized* iterates. On a grid, interpolation and the max add error every step. And convergence of $V_n$ is what's guaranteed — not monotone convergence of the implied policies. *([1.2](lessons/01-02-principle-of-optimality.md))*
- The envelope condition and the FOC are **two different equations**: the FOC differentiates the maximand in the *control*, the envelope differentiates the *value* in the *state*. You need both, and you substitute one into the other. *([1.4](lessons/01-04-envelope-theorem-dynamics.md))*
- "Holding the control fixed" means literally freeze $k'$ — do not differentiate through $g(k)$. The policy term dies because it is multiplied by the FOC. *([1.4](lessons/01-04-envelope-theorem-dynamics.md))*
- Benveniste–Scheinkman needs $V$ differentiable and the optimum interior; at a corner or kink, $V'(k)=u_k$ fails. *([1.4](lessons/01-04-envelope-theorem-dynamics.md))*

### Euler equations and transversality

- Euler is **necessary, not sufficient**. Over-accumulating paths satisfy it at every date and still waste resources. Check TVC before declaring victory. *([1.3](lessons/01-03-euler-transversality.md))*
- The gross return includes undepreciated capital: $R_{t+1}=f'(k_{t+1})+1-\delta$. Dropping the $1-\delta$ is the most common algebra slip, and it only vanishes at $\delta=1$. *([1.3](lessons/01-03-euler-transversality.md))*
- TVC is about the *discounted value* of capital, not capital itself: $k_{t+1}$ may grow without bound provided $\beta^t u'(c_t)$ shrinks faster. *([1.3](lessons/01-03-euler-transversality.md))*
- Index bookkeeping: saving done at $t$ is rewarded by a return dated $t{+}1$, because $k_{t+1}$ produces next period. Line up subscripts *before* differentiating. *([1.3](lessons/01-03-euler-transversality.md))*
- Sign bookkeeping: the control enters $c$ with a minus, so the FOC is $u'(c)=\beta V'(k')$, never $-\beta V'(k')$. *([1.4](lessons/01-04-envelope-theorem-dynamics.md))*

### Uncertainty

- $k'$ is chosen *before* the shock realizes, so it sits **outside** $\mathbb{E}_t$; only $z'$ and anything depending on it stay inside. Writing $\mathbb{E}_t[k_{t+1}]$ is a timing error. *([1.5](lessons/01-05-stochastic-dynamic-programming.md))*
- Certainty equivalence is a trap, not a shortcut: replacing the shock by its mean is legal only under quadratic utility, and it silently deletes the entire precautionary channel. *([1.5](lessons/01-05-stochastic-dynamic-programming.md), [5.1](lessons/05-01-permanent-income-life-cycle.md), [5.2](lessons/05-02-precautionary-saving.md))*
- The Euler equation equates $u'(c_t)$ to the expectation of a **product**, $u'(c_{t+1})R_{t+1}$ — not the product of expectations. The covariance term you'd be discarding is exactly what prices risk. *([1.5](lessons/01-05-stochastic-dynamic-programming.md), [5.4](lessons/05-04-consumption-based-asset-pricing.md))*
- Markovness is doing real work. With ARMA shocks or regime memory, $(k,z)$ is no longer a sufficient state and the Bellman equation is simply wrong. *([1.5](lessons/01-05-stochastic-dynamic-programming.md))*

### Equilibrium vs. planner

- Never set $k=K$ *inside* the household's optimization — that makes the household internalize its effect on prices, i.e. turns a price-taker into a planner. Optimize with them separate, impose equality afterward. *([1.6](lessons/01-06-recursive-competitive-equilibrium.md))*
- Without the consistency condition, $G$ is free: households can optimize against *any* forecast. Condition (4) is what selects the equilibrium. *([1.6](lessons/01-06-recursive-competitive-equilibrium.md))*
- Prices are **functions** of the aggregate state, not numbers. "The interest rate" is an object $r(\cdot)$ evaluated along the path. *([1.6](lessons/01-06-recursive-competitive-equilibrium.md))*
- Planner $=$ market rides entirely on the First Welfare Theorem's hypotheses. Any wedge — a capital tax, a markup, a missing market — and the two diverge. *([1.6](lessons/01-06-recursive-competitive-equilibrium.md), [3.2](lessons/03-02-dynamic-inefficiency.md))*

### Growth

- **Level vs. growth.** Higher $s$, lower $n$, lower $\delta$ raise $y^{*}$ but leave long-run per-capita growth pinned at $g$. On a log plot Solow gives a parallel shift; only AK gives a rotation. *([2.1](lessons/02-01-solow-model.md), [2.5](lessons/02-05-endogenous-growth-ak-ideas.md))*
- "Per capita" is not "per effective worker": in steady state $y=Y/(AL)$ is constant while $Y/L$ grows at $g$. *([2.1](lessons/02-01-solow-model.md))*
- Break-even is not just depreciation — forgetting $n$ or $g$ in $(n+g+\delta)$ overstates $k^{*}$. *([2.1](lessons/02-01-solow-model.md))*
- The Solow model predicts **conditional**, not absolute, convergence. "Poor" is not the same as "far from steady state": a country can be poor *because* its $k^{*}$ is low, hence near it, hence slow-growing. *([2.2](lessons/02-02-convergence-solow-diagram.md))*
- The convergence formula is a *local* linearization; far from $k^{*}$ the true dynamics are nonlinear. And $\lambda$ hinges on the capital share — which is precisely the empirical fight. *([2.2](lessons/02-02-convergence-solow-diagram.md))*
- $c$ jumps, $k$ doesn't. Reversing which variable is predetermined is the single most common Ramsey error. *([2.3](lessons/02-03-ramsey-cass-koopmans.md))*
- Saddle-path stability is *not* global stability: Solow converges from anywhere, Ramsey only from a measure-zero path — because $c$ is *chosen*. *([2.3](lessons/02-03-ramsey-cass-koopmans.md))*
- Golden rule ($f'=n+g+\delta$) is not the modified golden rule ($f'=\rho+\delta$). Under-accumulation at $k^{*}<k_{gr}$ is *efficient*, not a shortfall — only over-accumulation admits a free lunch. *([2.3](lessons/02-03-ramsey-cass-koopmans.md), [2.4](lessons/02-04-golden-rule-dynamic-efficiency.md))*
- The efficiency test is $r$ versus the **growth rate**, never $r$ versus zero. A positive real rate below $n+g$ is still inefficient. *([2.4](lessons/02-04-golden-rule-dynamic-efficiency.md), [3.2](lessons/03-02-dynamic-inefficiency.md), [3.4](lessons/03-04-social-security-transfers.md))*
- AK is a **knife-edge**: with $\alpha=0.99$ growth still stops, just later. Don't oversell it as robust. *([2.5](lessons/02-05-endogenous-growth-ak-ideas.md))*
- Nonrivalry is not excludability — the first is a property of the good, the second of the institution, and conflating them hides the whole innovation-policy problem. *([2.5](lessons/02-05-endogenous-growth-ak-ideas.md))*
- The Solow residual is **not** technology: it absorbs utilization, human-capital quality, reallocation, markups, and pure measurement error. Income shares are the right weights *only* under competition and constant returns. *([2.6](lessons/02-06-growth-accounting.md))*
- Growth accounting attributes; it does not explain. Crediting induced capital accumulation to "capital" understates technology's ultimate role. *([2.6](lessons/02-06-growth-accounting.md))*

### Overlapping generations, money, and transfers

- Only the young save. The old die with nothing, so aggregate saving funding $K_{t+1}$ is *just* the young cohort's — counting the old is the classic setup error. *([3.1](lessons/03-01-olg-model.md))*
- The interest-rate cancellation in the saving function is special to **log** utility. With general CRRA the transition map can be non-monotone and steady states can multiply or vanish. *([3.1](lessons/03-01-olg-model.md))*
- Steady state is not optimum. Ramsey conflates them by construction; OLG divorces them. Never import Ramsey's welfare intuition here. *([3.1](lessons/03-01-olg-model.md))*
- Dynamic inefficiency is **over**-saving, and the cure is to consume some of the capital stock. The market didn't mis-price anything — the failure is a *missing market* between the living and the unborn. *([3.2](lessons/03-02-dynamic-inefficiency.md))*
- Empirically the *safe* return is often below $n$, but the marginal product of capital — what the theorem needs — generally exceeds it. Treat dynamic inefficiency as a sharp theoretical possibility, not a claim about the US. *([3.2](lessons/03-02-dynamic-inefficiency.md))*
- A rational bubble is not irrationality: every agent is forward-looking and no-arbitrage holds at every date. But nothing pins $b_t$, so bursting to zero is *also* an equilibrium. *([3.3](lessons/03-03-money-rational-bubbles.md))*
- Money holds value because the economy is sick, not healthy — in a dynamically *efficient* economy capital dominates it. And the bubble must *grow* at $r$ (no-arbitrage) while surviving requires $r\le g$ (feasibility); those are different conditions. *([3.3](lessons/03-03-money-rational-bubbles.md))*
- The PAYG "return" is not interest — nothing compounds; it is the next cohort being bigger. It evaporates the instant growth stops. *([3.4](lessons/03-04-social-security-transfers.md))*
- Crowding out cuts both ways: in an over-accumulating economy, pensions reducing saving is *good*. The welfare sign is the sign of $n-r$, not of the saving change. *([3.4](lessons/03-04-social-security-transfers.md))*
- Ricardian equivalence needs the bequest to be **operative** (interior and positive). Most households leave none, which is why it is a benchmark, not a description. *([3.4](lessons/03-04-social-security-transfers.md))*

### Business cycles, calibration, and propagation

- "Recessions are optimal" is a strong claim, not a throwaway: in RBC the welfare theorems hold, so there is literally nothing to stabilize. *([4.1](lessons/04-01-real-business-cycle.md))*
- The model needs a labor-supply elasticity far above microeconometric estimates — its most contested joint. And measured "TFP" is a *residual*, so "negative technology shocks" may be labor hoarding, utilization, or demand in disguise. *([4.1](lessons/04-01-real-business-cycle.md))*
- Comovement is a **test**, not an assumption: a preference or discount-factor shock would push consumption and labor in opposite directions. *([4.1](lessons/04-01-real-business-cycle.md))*
- The $\delta=1$ model cannot smooth consumption ($\hat c_t=\hat y_t$ exactly) — use it for clean algebra, never for the moments. *([4.2](lessons/04-02-calibration-stochastic-growth.md))*
- Log-linearization is **local** and first-order: blind to precautionary saving, welfare costs of risk, and asymmetric responses. Distrust it in a deep recession. *([4.2](lessons/04-02-calibration-stochastic-growth.md), [4.5](lessons/04-05-nk-phillips-curve.md))*
- Calibrate, don't peek. Tuning $\varphi$ to make output volatility come out right turns the test into a tautology. *([4.2](lessons/04-02-calibration-stochastic-growth.md))*
- An IRF is not a forecast — it is the marginal effect of *one* isolated shock, which is a complete description only because the model is linear. *([4.3](lessons/04-03-propagation-impulse-responses.md))*
- "Persistent output" is not propagation. Benchmark against the shock: only persistence *in excess of* $\varphi$ was earned. And $\varphi$ is an assumption while $\alpha$ is structural — you can't crank up internal propagation by choosing it. *([4.3](lessons/04-03-propagation-impulse-responses.md))*
- A hump needs a slow-*building* state (adjustment costs, habit, sticky prices). Capital jumps to its peak one period after the shock and only decays, so the bare model cannot hump. *([4.3](lessons/04-03-propagation-impulse-responses.md))*

### Nominal rigidities and policy

- $\theta$ is the **stuck** fraction; $1-\theta$ resets. Anchor on "duration $=1/(1-\theta)$ grows as $\theta\to1$." *([4.4](lessons/04-04-nominal-rigidities-new-keynesian.md))*
- Market power is necessary but **not sufficient** for non-neutrality: with flexible prices, monopolists just reset the markup every period and money is neutral again. Monopolistic competition builds the price-setter; Calvo ties its hands. *([4.4](lessons/04-04-nominal-rigidities-new-keynesian.md))*
- The gap is measured against *potential*, which is itself stochastic — a productivity boom raises $y^n$ too and need not be inflationary. Policy targets $x_t$, not $y_t$. *([4.4](lessons/04-04-nominal-rigidities-new-keynesian.md), [4.5](lessons/04-05-nk-phillips-curve.md))*
- $\kappa$ is not the old Phillips slope: stickier prices *flatten* it, which is why estimated curves look flat in low-inflation eras. *([4.5](lessons/04-05-nk-phillips-curve.md))*
- The purely forward-looking NKPC predicts costless credible disinflation; real inflation is sluggish, hence the hybrid curve with a backward-looking term. *([4.5](lessons/04-05-nk-phillips-curve.md))*
- Divine coincidence is a **demand-shock** statement, not a law — any shock entering the Phillips curve directly destroys it. *([6.1](lessons/06-01-monetary-fiscal-nk.md))*
- It's the **real** rate that bites. Remove stickiness and expected inflation instantly undoes the bank's move, collapsing everything back to RBC neutrality. Likewise, the Taylor principle is about $\phi_\pi-1$: hiking three points while inflation rose four is *loosening*. *([6.1](lessons/06-01-monetary-fiscal-nk.md), [6.2](lessons/06-02-policy-rules-taylor-principle.md))*
- There is no single fiscal multiplier — it is a general-equilibrium object depending on the monetary regime. The ZLB constrains $i_t$, not $r^n_t$. *([6.1](lessons/06-01-monetary-fiscal-nk.md))*
- Indeterminacy is *too many* well-behaved paths, not an explosion — the pathology is non-uniqueness and sunspot volatility. *([6.2](lessons/06-02-policy-rules-taylor-principle.md))*
- The inflation bias is not a mistake or a forecasting failure: the bank optimizes correctly and the public forecasts perfectly. It is the *equilibrium* of rational play, and the over-ambitious target $\tilde x>0$ is doing all the work. *([6.2](lessons/06-02-policy-rules-taylor-principle.md))*

### Consumption, investment, and asset pricing

- Consumption follows *permanent* income; the observed $c$–$y$ correlation is mostly the permanent component moving both. Random walk means unresponsive to *predictable* movements, not constant. *([5.1](lessons/05-01-permanent-income-life-cycle.md))*
- The transitory MPC is $\frac{r}{1+r}$, not $r$ — memorize the cancellation against the annuity factor $\frac{1+r}{r}$, not the number. And quadratic utility's negative marginal utility above satiation makes it a workhorse, not a realistic preference. *([5.1](lessons/05-01-permanent-income-life-cycle.md))*
- Prudence ($-u'''/u''$) and risk aversion ($-u''/u'$) are **logically independent**: quadratic utility is risk-averse yet imprudent. The precautionary premium multiplies risk *by* prudence, so you need both. *([5.2](lessons/05-02-precautionary-saving.md))*
- A binding constraint turns the Euler *equation* into an *inequality*; dropping the multiplier $\lambda_t>0$ mispredicts consumption. And excess sensitivity can come from prudence *or* constraints — it is not evidence for either alone. *([5.2](lessons/05-02-precautionary-saving.md))*
- Investment is driven by **marginal** $q$; average $q$ equals it only under Hayashi. Market power, decreasing returns, or financing frictions drive a wedge — which is why cash flow adds explanatory power it "shouldn't." *([5.3](lessons/05-03-q-theory-investment.md))*
- Discount installed capital at $r+\delta$, not $r$: it competes with the interest rate *and* wears out. And $q$ is a dimensionless *ratio*, which is what makes $q=1$ a meaningful threshold. *([5.3](lessons/05-03-q-theory-investment.md))*
- You do not get to "discount risky assets at a higher rate" — one random kernel $m$ prices *every* payoff, and the risk adjustment is the covariance inside $\mathbb{E}[mx]$. Splitting it into $\mathbb{E}[m]\mathbb{E}[x]$ discards exactly what you came for. *([5.4](lessons/05-04-consumption-based-asset-pricing.md))*
- Mind the minus sign: assets covarying *positively* with $m$ (paying off in bad times) earn *less* than $R_f$ — insurance is worth paying for. Idiosyncratic wiggle uncorrelated with $m$ earns zero premium. *([5.4](lessons/05-04-consumption-based-asset-pricing.md), [5.5](lessons/05-05-equity-premium-puzzle.md))*
- Under CRRA, $\gamma$ is *simultaneously* risk aversion and the inverse EIS — which is exactly why fixing the equity premium wrecks the risk-free rate. A measured $\gamma$ of 100 is a symptom that the frame is wrong, not a preference. *([5.4](lessons/05-04-consumption-based-asset-pricing.md), [5.5](lessons/05-05-equity-premium-puzzle.md))*

### Search and heterogeneity

- Unemployment here is a **flow**, not excess supply: $u^{*}>0$ with fully flexible bargained wages, and cutting wages helps only through job creation. *([6.3](lessons/06-03-search-matching-dmp.md))*
- $f$ and $q$ are functions of the *same* $\theta$ and move in opposite directions — tightness helps workers exactly by hurting firms' fill rate. *([6.3](lessons/06-03-search-matching-dmp.md))*
- A change in $s$ moves the Beveridge curve itself; changes in $z,\beta,p,c$ move the job-creation ray and slide you *along* it. Outward Beveridge shifts signal worse matching efficiency, not a wage problem. *([6.3](lessons/06-03-search-matching-dmp.md))*
- The stationary distribution is not a steady state in which anything rests — every household keeps moving; only the cross-sectional shape is invariant. *([6.4](lessons/06-04-heterogeneous-agent-taste.md))*
- Approximate aggregation is an empirical finding in one calibration, not a theorem; with more constrained households the higher moments start to matter. And "incomplete markets" means *missing insurance*, not missing markets — households still save and borrow one riskless asset. *([6.4](lessons/06-04-heterogeneous-agent-taste.md))*
