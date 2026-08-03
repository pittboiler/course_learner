# Grad Macroeconomics · Lesson 4.3: Propagation and impulse responses

> ⏱ ~15 min · Module 4: Business cycles · Builds on: [4.2 Calibration and the stochastic growth model](04-02-calibration-stochastic-growth.md) · Unlocks: [4.4 Nominal rigidities and the New Keynesian setup](04-04-nominal-rigidities-new-keynesian.md)

## Why this matters

A recession is not a single bad quarter — it's a bad quarter that *lingers*, spreading across years while the economy slowly climbs back. So the interesting question about a business-cycle model isn't "does a shock lower output?" (of course it does) but "how does a one-time jolt turn into a drawn-out, hump-shaped downturn?" That transformation — transitory cause, persistent effect — is called **propagation**, and the picture that displays it is the **impulse response function**. This lesson reads the IRF straight off the policy function you built in 4.2, then delivers the punchline that organizes the rest of the module: the basic RBC model barely propagates at all. Almost all the persistence you see in its output was *assumed* in the shock, not manufactured by the model. That failure is exactly why 4.4 reaches for frictions.

## The idea

You have a linear policy function from 4.2. For the stochastic growth model with full depreciation ($\delta=1$), log utility, and Cobb–Douglas production, it collapses to one clean line:

$$\hat{k}_{t+1} = \alpha\,\hat{k}_t + \hat{z}_t,$$

where $\hat{k}_t$ is the log-deviation of capital from steady state, $\hat{z}_t$ the log-deviation of total factor productivity (TFP), and $\alpha$ the capital share. **In words:** next period's capital is a fraction $\alpha$ of this period's capital plus whatever productivity boost arrived. Output follows immediately from the production function, $\hat{y}_t = \hat{z}_t + \alpha\,\hat{k}_t$.

An **impulse response** is a thought experiment on this machine: park the economy at steady state, hit it *once* with a one-standard-deviation productivity innovation $\varepsilon_0=\sigma$ at $t=0$, then let it run with no further shocks. The path $\{\hat{y}_0,\hat{y}_1,\hat{y}_2,\dots\}$ that comes out is the IRF. Because the policy is linear, you don't simulate — you just iterate the recursion by hand.

Two engines stretch that single jolt across time:

- **External propagation (the shock persists).** TFP is itself AR(1): $\hat{z}_t = \varphi\,\hat{z}_{t-1} + \varepsilon_t$ with $0<\varphi<1$. A one-time innovation doesn't vanish next period — it decays geometrically as $\sigma,\ \sigma\varphi,\ \sigma\varphi^2,\dots$. The productivity boost lingers on its own, and output inherits that lingering directly through the $\hat{z}_t$ term. This persistence is *imported*, not made by the model.
- **Internal propagation (the capital echo).** Even a *purely transitory* shock ($\varphi=0$, gone after one period) leaves a mark, because the extra output it produced got partly saved. That new capital doesn't disappear — it depreciates and decays slowly, $\hat{k}_{t+1}=\alpha\hat{k}_t$, feeding output for many periods after the shock itself is dead. This is the model's *own* contribution to persistence: a capital echo ringing at rate $\alpha$.

Real output combines both, $\hat{y}_t = \hat{z}_t + \alpha\hat{k}_t$ — a blend of two geometric decays, one at rate $\varphi$ and one at rate $\alpha$. The whole debate of this lesson is: which one is doing the work? Spoiler — with $\alpha\approx\tfrac13$, the capital echo half-lives in under a period, and $\varphi$ (which we picked to be near 1) runs the show.

## The formal version

**Impulse response function.** For a variable $x_t$ with innovation $\varepsilon_t$, the IRF is
$$\mathrm{IRF}_x(h) \;=\; \frac{\partial\, \mathbb{E}_t[\,x_{t+h}\,]}{\partial \varepsilon_t}\cdot \sigma \;=\; \mathbb{E}\!\left[x_{t+h}\mid \varepsilon_t=\sigma,\ \text{else at steady state}\right].$$
**In words:** how much, $h$ periods later, the variable still differs from where it would have been, per one-standard-deviation kick today. In a *linear* model the derivative is constant, so the IRF is exactly the deterministic path from a $\sigma$-sized impulse — no simulation, no averaging.

**The system in state-space form.** Stack the two states $(\hat k_t,\hat z_t)$:
$$\begin{pmatrix}\hat k_{t+1}\\[2pt]\hat z_{t+1}\end{pmatrix}=\underbrace{\begin{pmatrix}\alpha & 1\\[2pt] 0 & \varphi\end{pmatrix}}_{A}\begin{pmatrix}\hat k_{t}\\[2pt]\hat z_{t}\end{pmatrix}+\begin{pmatrix}0\\ \varepsilon_{t+1}\end{pmatrix}.$$
$A$ is triangular, so its **eigenvalues are $\alpha$ and $\varphi$** — read off the diagonal. Both lie inside the unit circle, so the system is stable and every IRF is a combination of the two geometric modes $\alpha^t$ and $\varphi^t$. **In words:** the eigenvalues *are* the decay rates; a variable's persistence is governed by its system's largest stable root, here $\varphi$.

This is the same eigenvalue logic as the [2.3 Ramsey saddle path](02-03-ramsey-cass-koopmans.md): there, a $2\times2$ system had one stable and one unstable root, and picking the stable eigenvector *was* the saddle path. Here the forward-looking (unstable) root — the consumption/Euler direction — was already solved out in 4.2 when we wrote the policy function; Blanchard–Kahn guarantees exactly one such choice. What remains is this purely backward-looking stable recursion, and its two roots $\alpha,\varphi$ are precisely the propagation channels.

**Propagation, defined.** A model *propagates* a shock when the output response is more persistent (or differently shaped — e.g. hump-shaped) than the shock that drove it. **In words:** propagation is any persistence the model *adds* on top of what the shock already carried. Measure it by comparing the autocorrelation of output to $\varphi$: if they're nearly equal, the model added almost nothing.

## Picture

![Left: impulse responses of output, consumption, and investment to a TFP shock — the RBC model shows only a shallow, brief hump before settling into decay at the shock's own rate, while the data show a larger, more delayed hump. Right: the output IRF decomposed into a slow external φ-mode and a fast-dying internal α-mode.](assets/04-03-propagation-impulse-responses-fig1.svg)

Panel A: investment jumps most and consumption is smoothest (households spread the windfall) — the RBC volatility ranking. Output does rise for a couple of quarters — a *shallow* hump, because capital is predetermined at impact (4.2) and then builds — but the bump is small, and once past its peak output decays at essentially the shock's own rate $\varphi$; the pronounced, sharply *delayed* hump in the data (dashed) is far larger than the model manufactures. Panel B decomposes output into its two modes: the internal capital echo (purple $\alpha$-mode) is a small blip gone within two periods, so past the first few quarters output tracks the external $\varphi$-mode almost exactly.

## Worked examples

**Example 1 (the closed-form output IRF — a mix of two decays).** Start from $\hat k_{t+1}=\alpha\hat k_t+\hat z_t$ with an AR(1) shock $\hat z_t=\varphi\hat z_{t-1}+\varepsilon_t$. Impulse: $\varepsilon_0=\sigma$, nothing after, and $\hat k_0=0$. Then $\hat z_t=\sigma\varphi^{t}$ for $t\ge 0$. Iterate the capital recursion (a convolution of past productivity):
$$\hat k_t=\sum_{j=0}^{t-1}\alpha^{\,t-1-j}\,\hat z_j=\sigma\sum_{j=0}^{t-1}\alpha^{\,t-1-j}\varphi^{\,j}=\sigma\,\frac{\alpha^{t}-\varphi^{t}}{\alpha-\varphi}\qquad(\alpha\neq\varphi).$$
Quick checks: $\hat k_1=\sigma$ (the one-period saving of the impact output), $\hat k_2=\sigma(\alpha+\varphi)$ ✓. Now output. Note that with $\delta=1$ everything saved *is* next period's capital, so $\hat y_t=\hat k_{t+1}$, giving the tidy result
$$\boxed{\;\hat y_t=\sigma\,\frac{\alpha^{t+1}-\varphi^{t+1}}{\alpha-\varphi}=A\,\alpha^{t}+B\,\varphi^{t}\;},\qquad A=\frac{\sigma\alpha}{\alpha-\varphi},\ \ B=\frac{\sigma\varphi}{\varphi-\alpha}.$$
The output IRF is literally the sum of the two eigen-modes $\alpha^t$ and $\varphi^t$. With $\alpha=\tfrac13,\varphi=0.95,\sigma=1$: $A=-0.53,\ B=1.53$, so $\hat y_t=-0.53(0.33)^t+1.53(0.95)^t$. The $(0.33)^t$ mode is gone by $t=2$; everything after is the $\varphi$-mode. That is Panel B in algebra.

**Example 2 (why it's monotone, and what a hump would need).** Take the *purely transitory* shock, $\varphi=0$: TFP is $\sigma$ at $t=0$ and zero forever after. The external channel is switched off, so any persistence is now *purely* the model's own capital echo. From Example 1 with $\varphi=0$: $\hat z_t=0$ for $t\ge1$, $\hat k_t=\sigma\alpha^{t-1}$, and
$$\hat y_0=\sigma,\qquad \hat y_t=\alpha\hat k_t=\sigma\,\alpha^{\,t}\ \ (t\ge1)\ :\qquad \sigma,\ \sigma\alpha,\ \sigma\alpha^2,\dots$$
Output is *largest on impact* and decays monotonically at rate $\alpha$ — no hump. Why can't it hump? A hump requires the peak response to arrive *after* impact, which requires a state variable that **builds up slowly** before it starts running down. But capital here jumps to its peak deviation immediately ($\hat k_1=\sigma$ off a single shock) and only ever decays afterward. There's exactly one sluggish state and it isn't sluggish enough. To manufacture a hump you must add a slow-building state: **investment adjustment costs** (capital can't leap, it accelerates in gradually), **habit formation** (consumption ramps up slowly), or the price/wage stickiness of 4.4. The bare model has none, so it decays from impact.

## Watch out

- **An IRF is not a forecast.** It's the *marginal effect* of one isolated shock — the difference between two worlds, with and without the $t=0$ innovation. The actual path also contains all the other shocks. In a linear model these add up (superposition), which is exactly why the single-shock IRF is a complete description of the dynamics.
- **"Persistent output" is not the same as "propagation."** The basic RBC output IRF *looks* persistent, but that's borrowed from $\varphi\approx0.95$, not built by the model. Always benchmark against the shock: persistence in excess of $\varphi$ is the only propagation the model earned.
- **Don't confuse the two roots.** $\varphi$ is a modeling *assumption* about the shock; $\alpha$ is a *structural* feature (capital's income share, pinned by data at $\approx\tfrac13$). You can't crank up internal propagation by "choosing" $\alpha$ — it's not free, and it's small.
- **The $\hat y_t=\hat k_{t+1}$ shortcut is special to $\delta=1$.** With partial depreciation the algebra is messier (a genuine $2\times2$), but the qualitative story — two modes, $\varphi$ dominating — survives.

## One-liner

> Read the impulse response straight off the linear policy function; in the basic RBC model it's a blend of two geometric decays whose dominant rate is the *assumed* shock persistence $\varphi$ — the capital echo dies too fast to matter, which is the whole propagation critique.

## Problems

**P1 (🟢)** Using the policy $\hat k_{t+1}=\alpha\hat k_t+\hat z_t$ with $\alpha=\tfrac13$, compute the impulse response of **capital** to a *one-time* TFP shock $\hat z_0=1$ (zero afterward, $\hat k_0=0$). Give $\hat k_0,\dots,\hat k_4$ and state the decay rate.

**P2 (🟡)** For the AR(1)-shock output IRF $\hat y_t=\hat z_t+\alpha\hat k_t$ with $\alpha=\tfrac13,\varphi=0.9,\sigma=1$, split the $t=3$ response into its **external** part ($\hat z_3$) and **internal** part ($\alpha\hat k_3$). Which channel supplies most of the response, and by roughly what factor?

**P3 (🔴)** *The propagation critique.* Show that output in this model follows $\hat y_t=\alpha\hat y_{t-1}+\hat z_t$, hence an AR(2) with roots $\alpha$ and $\varphi$. Using the AR(2) first-autocorrelation formula $\rho(1)=\dfrac{\phi_1}{1-\phi_2}$, compute output's $\rho(1)$ for $\alpha=\tfrac13,\varphi=0.95$ and compare it to the shock's own persistence $\varphi$. Interpret.

<details>
<summary>Solutions</summary>

**P1.** Iterate: $\hat k_0=0$; $\hat k_1=\alpha\cdot0+\hat z_0=1$; and for $t\ge1$ the shock is gone so $\hat k_{t+1}=\alpha\hat k_t$. Thus
$$\hat k_0=0,\quad \hat k_1=1,\quad \hat k_2=\tfrac13,\quad \hat k_3=\tfrac19,\quad \hat k_4=\tfrac1{27}.$$
Capital jumps to its peak one period after the shock (the newly saved output), then decays **monotonically at the geometric rate $\alpha=\tfrac13$** — a half-life of well under one period. That fast decay is the whole problem with internal propagation.

**P2.** First the shock path: $\hat z_t=\sigma\varphi^t$, so $\hat z_3=0.9^3=0.729$. Capital from Example 1: $\hat k_3=\dfrac{\alpha^3-\varphi^3}{\alpha-\varphi}=\dfrac{(1/3)^3-0.9^3}{1/3-0.9}=\dfrac{0.03704-0.729}{-0.5667}=1.2211$. Internal part $=\alpha\hat k_3=\tfrac13(1.2211)=0.4070$.
$$\hat y_3=\underbrace{0.729}_{\text{external }\hat z_3}+\underbrace{0.407}_{\text{internal }\alpha\hat k_3}=1.136.$$
The **external** channel dominates — about $0.729/0.407\approx 1.8\times$ the internal contribution. And note the "internal" $0.407$ still isn't pure model-made persistence: that capital was itself fed by the *persistent* shock. Strip $\varphi$ to $0$ (Example 2) and the genuine internal response at $t=3$ is only $\alpha^3=0.037$ — a rounding error. Almost everything is imported.

**P3.** From the policy, $\hat y_t=\hat z_t+\alpha\hat k_t$. With $\delta=1$, $\hat k_t=\hat y_{t-1}$ (last period's output was saved into this period's capital). Substituting, $\hat y_t=\alpha\hat y_{t-1}+\hat z_t$. Now eliminate $\hat z_t$ using $\hat z_t=\varphi\hat z_{t-1}+\varepsilon_t$: apply the operator, or note $\hat y_t$ solves $(1-\alpha L)(1-\varphi L)\hat y_t=\varepsilon_t$, i.e.
$$\hat y_t=(\alpha+\varphi)\,\hat y_{t-1}-\alpha\varphi\,\hat y_{t-2}+\varepsilon_t,$$
an AR(2) with characteristic roots exactly $\alpha$ and $\varphi$ (the two eigenvalues from the state matrix). So $\phi_1=\alpha+\varphi$, $\phi_2=-\alpha\varphi$, and
$$\rho(1)=\frac{\phi_1}{1-\phi_2}=\frac{\alpha+\varphi}{1+\alpha\varphi}=\frac{0.3333+0.95}{1+0.3167}=\frac{1.2833}{1.3167}=0.975.$$
Compare: the shock's own persistence is $\varphi=0.95$. Output's first-order autocorrelation, $0.975$, is *barely* above it — the entire capital-accumulation machinery raised persistence by about $0.025$. Since the two roots are $\alpha=0.33$ (dies fast) and $\varphi=0.95$ (dominant), output's long-run persistence is governed by $\varphi$: **output is essentially as persistent as the shock and no more.** That is the RBC propagation critique in one number — the model is a near-transparent conduit for the exogenous TFP process, not a source of endogenous business-cycle dynamics. It motivates the frictions of [4.4](04-04-nominal-rigidities-new-keynesian.md).

</details>

## Flashback

**From [4.2 Calibration and the stochastic growth model](04-02-calibration-stochastic-growth.md) (log-linearization).** Capital accumulates as $k_{t+1}=(1-\delta)k_t+i_t$, where $i_t$ is investment. Log-linearize this identity around the steady state to express $\hat k_{t+1}$ in terms of $\hat k_t$ and $\hat i_t$.

<details>
<summary>Solution</summary>

Steady state: $k=(1-\delta)k+i\ \Rightarrow\ i=\delta k$ (steady-state investment just covers depreciation). Use the first-order rule $X_t\approx X(1+\hat X_t)$, so a level $\approx X+X\hat X_t$. Applying it term by term:
$$k+k\,\hat k_{t+1}=(1-\delta)(k+k\,\hat k_t)+(i+i\,\hat i_t).$$
The constant terms satisfy the steady-state identity and cancel. Divide the deviation terms by $k$ and use $i/k=\delta$:
$$\hat k_{t+1}=(1-\delta)\hat k_t+\frac{i}{k}\hat i_t=(1-\delta)\hat k_t+\delta\,\hat i_t.$$
**Sanity check:** at $\delta=1$ (full depreciation) this collapses to $\hat k_{t+1}=\hat i_t$ — all capital is replaced each period, so next period's capital *is* this period's investment, exactly the shortcut $\hat y_t=\hat k_{t+1}$ used throughout this lesson.

</details>

## Connections

- **Backward:** the IRF is read straight off the [4.2](04-02-calibration-stochastic-growth.md) policy function and log-linear system; the eigenvalue reasoning ($A$'s roots as decay rates, one stable branch selected by Blanchard–Kahn) is the discrete-time twin of the [2.3](02-03-ramsey-cass-koopmans.md) saddle path. The $\varphi$-driven shock and $\alpha$-capital are the same two forces the [4.1 RBC model](04-01-real-business-cycle.md) introduced.
- **Forward:** [4.4](04-04-nominal-rigidities-new-keynesian.md) adds nominal rigidities precisely to fix the weak propagation shown here — sticky prices give output a slow-moving state and a genuine hump. This IRF-plus-policy-function toolkit is exactly how full DSGE models are read and matched to data.
- **Sideways (econometrics):** the model IRF is the structural counterpart of the empirical impulse responses estimated from a VAR — the same object, one derived from theory and one from identification restrictions on reduced-form residuals. Matching them is how RBC/DSGE models are tested; see [econometrics](../../econometrics/syllabus.md).
- **Sideways (dynamical systems):** everything here is the theory of **linear difference equations** — an AR(2) is a second-order recursion whose behavior (monotone vs oscillatory, persistent vs transient) is decided entirely by its characteristic roots, exactly the eigenvalue classification in [dynamical systems](../../dynamical-systems/syllabus.md).
