# Propulsion · Lesson 3.1: The rocket equation

> ⏱ ~15 min · Module 3: Rockets and mission analysis · Builds on: [1.1 Thrust and the momentum equation](01-01-thrust-momentum-equation.md) · Unlocks: [3.2 Specific impulse](03-02-specific-impulse-rocket-performance.md), [3.3 Staging and the mass ratio](03-03-staging-mass-ratio.md)

## Why this matters

[Tsiolkovsky's equation](../reference.md#rocket-tsiolkovsky-equation) is the single most consequential formula in spaceflight, and it is brutal:

$$\Delta v = v_e\ln\frac{m_0}{m_f}.$$

**The velocity change you get is proportional to exhaust velocity but only *logarithmic* in mass ratio.** Doubling the propellant does not double the $\Delta v$; it adds one $v_e\ln2$. To go twice as fast you must square the mass ratio.

That exponential is why a 550-tonne rocket delivers 15 tonnes to orbit, why staging exists, why every gram of dry mass is fought over, and why chemical propulsion cannot reach the outer solar system quickly. **Everything in Module 3 is a consequence of this one logarithm.**

## The idea

**A rocket accelerates by throwing mass backwards, and it gets lighter as it does.** That is the whole derivation: Newton's second law for a body of changing mass, with the thrust $\dot mv_e$ from [1.1](01-01-thrust-momentum-equation.md).

**Integrating gives a logarithm** — because the acceleration is $F/m$ and $m$ is falling, so the same thrust buys more acceleration as the burn proceeds. The $\Delta v$ ends up depending only on the *ratio* of initial to final mass, not on the burn time, the thrust level, or the trajectory.

**And that independence is the equation's power and its limitation.** It says nothing about how long the burn takes or what path you fly. **Everything a real trajectory costs beyond the ideal — gravity, drag, steering — appears as extra $\Delta v$ you must budget for.**

**The mass ratio is the currency.** $\Delta v/v_e = \ln(m_0/m_f)$, so a mass ratio of $e = 2.718$ buys exactly one exhaust velocity. Ten buys 2.30; twenty buys 3.00.

**Structure is the enemy.** Real vehicles cannot be all propellant: tanks, engines, and structure have mass, and that mass is at the *final* end of the ratio, where it hurts most. **The [structural coefficient](../reference.md#structural-coefficient-and-payload-fraction) $\varepsilon$ — dry mass as a fraction of stage mass — is what turns the rocket equation from a curiosity into a design constraint.**

**And beyond a certain $\Delta v$ there is simply no positive payload.** Not "a small payload" — a negative one. That cliff, and how staging climbs around it, is [3.3](03-03-staging-mass-ratio.md).

## The formal version

**Derivation.** In an inertial frame with no external forces, consider a rocket of mass $m$ moving at $v$, ejecting mass at rate $\dot m$ with velocity $v_e$ relative to the vehicle. Momentum conservation over $dt$:

$$m\,dv = -v_e\,dm \qquad(dm<0\ \text{as propellant leaves}),$$

$$\int_{v_0}^{v_f}dv = -v_e\int_{m_0}^{m_f}\frac{dm}{m},$$

$$\boxed{\;\Delta v = v_e\ln\frac{m_0}{m_f} = g_0I_{sp}\ln\frac{m_0}{m_f}.\;}$$

**Mass ratio.**

$$\boxed{\;MR = \frac{m_0}{m_f} = e^{\Delta v/v_e}, \qquad \frac{m_{\rm prop}}{m_0} = 1-\frac{1}{MR}.\;}$$

| $\Delta v/v_e$ | 0.41 | 0.69 | 1.00 | 1.61 | 2.30 | 3.00 |
|---|---|---|---|---|---|---|
| $MR$ | 1.5 | 2 | **2.718** | 5 | 10 | 20 |
| Propellant fraction | 33% | 50% | **63%** | 80% | 90% | 95% |

**Mass breakdown.** Split the initial mass into propellant $m_p$, structure $m_s$, and payload $m_L$:

$$m_0 = m_p+m_s+m_L, \qquad m_f = m_s+m_L.$$

**Structural coefficient:**

$$\boxed{\;\varepsilon = \frac{m_s}{m_s+m_p},\;}$$

typically 0.06–0.12 for a well-designed liquid stage, 0.08–0.15 for a solid.

**Payload fraction.** Eliminating $m_p$ and $m_s$:

$$\boxed{\;\lambda = \frac{m_L}{m_0} = \frac{1/MR-\varepsilon}{1-\varepsilon}.\;}$$

**And there it is: $\lambda>0$ requires $MR<1/\varepsilon$.** With $\varepsilon = 0.10$, no single stage can exceed a mass ratio of 10, i.e. $\Delta v = 2.303\,v_e$, **no matter how much propellant you add** — because past that point the tanks needed to hold it weigh more than the payload.

| $\varepsilon$ | Max $MR$ | Max $\Delta v/v_e$ | Max $\Delta v$ at $I_{sp} = 350$ s |
|---|---|---|---|
| 0.15 | 6.67 | 1.897 | 6.51 km/s |
| 0.10 | 10.0 | 2.303 | 7.90 km/s |
| 0.06 | 16.7 | 2.813 | 9.66 km/s |
| 0.03 | 33.3 | 3.507 | 12.03 km/s |

**Losses.** The ideal equation gives the $\Delta v$ a rocket's propellant *can* deliver; a real launch must also pay:

$$\boxed{\;\Delta v_{\rm required} = \Delta v_{\rm orbital}+\underbrace{\int g\sin\gamma\,dt}_{\text{gravity loss}}+\underbrace{\int\frac{D}{m}dt}_{\text{drag loss}}+\underbrace{\text{steering}}_{\text{thrust not along }v}.\;}$$

For a typical LEO launch: orbital speed 7.8 km/s, gravity loss 1.2–1.5 km/s, drag loss 0.1–0.2 km/s, steering 0.1 km/s, minus about 0.4 km/s of Earth-rotation credit from an easterly launch — **giving the familiar budget of 9.3–9.5 km/s.**

**Gravity loss and thrust-to-weight.** The loss integral is roughly $g_0t_{\rm burn}$ for a vertical climb, and $t_{\rm burn}$ falls as thrust rises — so **a higher liftoff thrust-to-weight ratio reduces gravity loss**, which is why launch vehicles lift off at $T/W\approx1.2$–$1.5$ and not at 1.05.

## Picture

![A two-panel figure. Left: the mass ratio bar, drawn as a tall vertical stack for a single stage, divided into a large propellant block at the bottom, a thin structure block, and a very thin payload sliver at the top, with the total labelled m nought and the upper two blocks bracketed as m sub f; beside it, three such stacks for delta-v over v sub e equal to 1, 2 and 3 show the payload sliver shrinking to nothing, with the third annotated no positive payload at epsilon equals 0.1. Right: payload fraction plotted against delta-v over exhaust velocity, as a family of curves for structural coefficients of 0.03, 0.06, 0.10 and 0.15; each starts near one minus epsilon at zero and falls, crossing zero at delta-v over v sub e equal to the natural log of one over epsilon, with those crossings marked by vertical dashed lines and labelled the single-stage wall. The region to the right of the 0.10 crossing is shaded and annotated staging territory, and a marker at delta-v over v sub e equal to 2.74 shows a LEO launch with a 350-second engine falling inside the shaded region.](assets/03-01-fig1.svg)

Left: where the mass goes, and how quickly the payload disappears.

Right: the wall. Every curve hits zero at $\ln(1/\varepsilon)$, and a LEO launch sits beyond it for any realistic single stage.

## Worked examples

**Example 1 (a first stage).** A launch vehicle's first stage has a liftoff mass of $m_0 = 549$ tonnes, of which $411$ tonnes is propellant, and an average $I_{sp}$ of 311 s.

*Exhaust velocity and mass ratio.*

$$v_e = g_0I_{sp} = 9.80665(311) = 3050\ \mathrm{m/s},$$

$$m_f = 549-411 = 138\ \mathrm{t}, \qquad MR = \frac{549}{138} = 3.978.$$

*Ideal $\Delta v$.*

$$\Delta v = 3050\ln(3.978) = 3050(1.3808) = 4211\ \mathrm{m/s}.$$

*Reading it.* **4.2 km/s from a stage that is 75% propellant by mass** — which is less than half the 9.4 km/s a LEO launch needs. **The first stage of a two-stage vehicle does not get you to orbit and is not meant to.**

*The logarithm's cruelty, made concrete.* Suppose you want another 1000 m/s from this stage. The required mass ratio becomes

$$MR' = e^{5211/3050} = e^{1.7085} = 5.521,$$

so with the same 138 t of dry mass and payload the liftoff mass must be $5.521(138) = 762$ t — **an extra 213 tonnes of propellant, a 39% increase in vehicle mass, for a 24% increase in $\Delta v$.**

**And the tanks to hold it would add dry mass**, raising $m_f$ and demanding still more propellant. **The feedback is what makes the exponential bite.**

*The other lever.* Raising $I_{sp}$ from 311 to 350 s (a switch from kerolox to a better propellant) gives $v_e = 3432$ m/s, and the same mass ratio then yields

$$\Delta v = 3432(1.3808) = 4739\ \mathrm{m/s}$$

— **528 m/s more, for no extra propellant at all.** That is why $I_{sp}$ is the number rocket engineers care about above all others, and it is [3.2](03-02-specific-impulse-rocket-performance.md)'s subject.

**Example 2 (the single-stage wall).** A mission needs $\Delta v = 9.4$ km/s. Can one stage do it?

*With $I_{sp} = 350$ s and $\varepsilon = 0.10$:*

$$v_e = 3432\ \mathrm{m/s}, \qquad MR = e^{9400/3432} = e^{2.739} = 15.47.$$

$$\lambda = \frac{1/15.47-0.10}{1-0.10} = \frac{0.06464-0.10}{0.90} = \frac{-0.03536}{0.90} = -0.0393.$$

**A negative payload fraction.** The equation is telling you that the tanks and engines required to hold that much propellant weigh more than the vehicle's own final mass allows — **the vehicle cannot even lift itself, let alone a payload.**

*What would fix it?* Three levers, and their required magnitudes are informative:

**Better $I_{sp}$.** At $I_{sp} = 450$ s (hydrolox), $v_e = 4413$ m/s and $MR = 8.42$, giving

$$\lambda = \frac{0.11883-0.10}{0.90} = 0.0209 \quad\text{— 2.1\% payload, barely positive.}$$

**Lighter structure.** At $I_{sp} = 350$ s but $\varepsilon = 0.06$:

$$\lambda = \frac{0.06464-0.06}{0.94} = 0.0049 \quad\text{— 0.5\%, essentially nothing.}$$

**Both together.** $I_{sp} = 450$ s and $\varepsilon = 0.06$ gives $\lambda = 0.0626$ — a viable 6.3%.

**That combination is exactly what a single-stage-to-orbit vehicle would need**, and it is why SSTO has been attempted repeatedly and never flown: an $\varepsilon$ of 0.06 with hydrogen tanks (which are bulky and need insulation) and a full set of engines has never been achieved.

*And now the staging comparison, which is the payoff.* Split the 9.4 km/s into two identical stages of 4.7 km/s each, with $I_{sp} = 350$ s and $\varepsilon = 0.10$:

$$MR_{\rm stage} = e^{4700/3432} = e^{1.3695} = 3.933, \qquad \lambda_{\rm stage} = \frac{0.25426-0.10}{0.90} = 0.1714.$$

**Each stage delivers a 17.1% payload fraction, and the "payload" of the first stage is the whole second stage.** So the overall payload fraction is the product:

$$\lambda_{\rm total} = \left(0.1714\right)^2 = 0.0294.$$

**Positive, and 2.9%** — from the same propellant, the same engines, and the same structural technology that gave a *negative* answer as a single stage.

**Nothing improved except the architecture.** That is the staging argument in one line, and [3.3](03-03-staging-mass-ratio.md) makes it precise.

## Watch out

- **You might think $\Delta v$ depends on thrust.** It does not — only on $v_e$ and the mass ratio. Thrust decides how *long* the burn takes, which matters only through the losses.
- **You might apply the ideal equation to a launch.** It gives the propellant's capability; a launch also pays gravity, drag, and steering losses of 1.5–1.8 km/s.
- **You might use sea-level $I_{sp}$ throughout.** It rises with altitude ([1.3](01-03-nozzle-operating-regimes.md)); use a trajectory-averaged value or integrate.
- **You might forget that payload counts in $m_f$.** It is dead weight the whole way, which is why the payload fraction falls so steeply with $\Delta v$.
- **You might treat $\varepsilon$ as independent of $\Delta v$.** Bigger tanks are proportionally lighter (surface-to-volume), so $\varepsilon$ improves slightly with stage size — but not nearly enough to escape the wall.
- **You might think a negative $\lambda$ means "a small payload".** It means the architecture is impossible, not merely inefficient.
- **You might expect higher $T/W$ to be free.** It reduces gravity loss but requires bigger engines, which raise $\varepsilon$ — an optimum exists near $T/W\approx1.3$ for a first stage.

## One-liner

> $\Delta v = v_e\ln(m_0/m_f)$ makes velocity linear in exhaust speed and only logarithmic in mass, so a stage with structural coefficient $\varepsilon$ can never exceed $\Delta v = v_e\ln(1/\varepsilon)$ however much propellant you add — and a LEO launch sits beyond that wall for every realistic chemical stage, which is why rockets have stages.

## Problems

**P1 (🟢)** A spacecraft of initial mass 4000 kg burns 1500 kg of propellant with $I_{sp} = 320$ s. (a) Find $v_e$. (b) Find the mass ratio. (c) Find $\Delta v$. (d) How much propellant would a second, identical $\Delta v$ require?

**P2 (🟡)** A single stage has $I_{sp} = 340$ s and $\varepsilon = 0.08$. (a) Find the maximum mass ratio and the maximum $\Delta v$ for a positive payload. (b) Find the payload fraction for $\Delta v = 5.0$ km/s. (c) Find it for $\Delta v = 7.0$ km/s. (d) At what $\Delta v$ does the payload fraction fall to 1%?

**P3 (🔴)** A launch vehicle's first stage has $m_0 = 500$ t, $m_p = 420$ t, sea-level $I_{sp} = 285$ s rising to vacuum $I_{sp} = 315$ s, and a liftoff thrust of 6.8 MN. (a) Find the liftoff thrust-to-weight ratio and the initial acceleration. (b) Find the burn time, taking the mass flow from the sea-level $I_{sp}$ and constant thrust. (c) Estimate the ideal $\Delta v$ using a trajectory-averaged $I_{sp}$ of 300 s. (d) If the gravity loss over this burn is approximately $\int g\sin\gamma\,dt$ with an average $\sin\gamma$ of 0.55, estimate the loss and comment on how a higher $T/W$ would change it — and what it would cost.

<details>
<summary>Solutions</summary>

**P1** (a) $$v_e = g_0I_{sp} = 9.80665(320) = 3138.1\ \mathrm{m/s}.$$

(b) $$m_f = 4000-1500 = 2500\ \mathrm{kg}, \qquad MR = \frac{4000}{2500} = 1.600.$$

(c) $$\Delta v = 3138.1\ln(1.600) = 3138.1(0.47000) = 1474.9\ \mathrm{m/s}.$$

(d) A second identical $\Delta v$ needs the same *mass ratio*, applied to the new starting mass:

$$m_{f2} = \frac{2500}{1.600} = 1562.5\ \mathrm{kg}, \qquad m_{p2} = 2500-1562.5 = 937.5\ \mathrm{kg}.$$

**Only 938 kg — 62% of the first burn's propellant** — because the vehicle is lighter. **This is the rocket equation working in your favour for once**, and it is why the last burn of a mission is always the cheapest in absolute terms.

**P2** (a) $$MR_{\max} = \frac{1}{\varepsilon} = \frac{1}{0.08} = 12.5, \qquad \Delta v_{\max} = v_e\ln(12.5).$$

$$v_e = 9.80665(340) = 3334.3\ \mathrm{m/s}, \qquad \Delta v_{\max} = 3334.3(2.52573) = 8421\ \mathrm{m/s}.$$

(b) $$MR = e^{5000/3334.3} = e^{1.49957} = 4.4798,$$

$$\lambda = \frac{1/4.4798-0.08}{1-0.08} = \frac{0.22322-0.08}{0.92} = \frac{0.14322}{0.92} = 0.1557.$$

(c) $$MR = e^{7000/3334.3} = e^{2.09940} = 8.1614,$$

$$\lambda = \frac{0.12253-0.08}{0.92} = \frac{0.04253}{0.92} = 0.04623.$$

**From 15.6% to 4.6% for 2 km/s more** — the payload fraction has fallen by a factor of 3.4 for a 40% increase in $\Delta v$.

(d) Set $\lambda = 0.01$:

$$0.01(0.92)+0.08 = \frac{1}{MR} \quad\Longrightarrow\quad \frac{1}{MR} = 0.0892, \qquad MR = 11.211,$$

$$\Delta v = 3334.3\ln(11.211) = 3334.3(2.41688) = 8058\ \mathrm{m/s}.$$

*The shape of the collapse, worth tabulating:*

| $\Delta v$ | $\lambda$ |
|---|---|
| 3 km/s | 0.3551 |
| 5 km/s | 0.1557 |
| 7 km/s | 0.0462 |
| 8.06 km/s | 0.0100 |
| 8.42 km/s | 0 |

**The last 360 m/s costs the entire remaining payload.** That extreme nonlinearity near the wall is the reason a launch vehicle's performance is so sensitive to small changes in dry mass — a 1% mass growth late in development can consume a fifth of the payload.

**P3** (a) $$W = m_0g_0 = 500{,}000(9.80665) = 4.903\ \mathrm{MN},$$

$$\frac{T}{W} = \frac{6.8}{4.903} = 1.387.$$

$$a_0 = \frac{T-W}{m_0} = \frac{6.8\times10^6-4.903\times10^6}{500{,}000} = \frac{1.897\times10^6}{500{,}000} = 3.79\ \mathrm{m/s^2}.$$

*(About 0.39 g of net acceleration at liftoff — which is why a launch vehicle appears to rise so slowly.)*

(b) $$\dot m = \frac{T}{g_0I_{sp,SL}} = \frac{6.8\times10^6}{9.80665(285)} = \frac{6.8\times10^6}{2794.9} = 2433\ \mathrm{kg/s},$$

$$t_{\rm burn} = \frac{m_p}{\dot m} = \frac{420{,}000}{2433} = 172.6\ \mathrm{s}.$$

*(Real first stages burn for 140–180 s, so this is representative.)*

(c) $$v_e = 9.80665(300) = 2942.0\ \mathrm{m/s}, \qquad m_f = 500-420 = 80\ \mathrm{t}, \qquad MR = \frac{500}{80} = 6.25,$$

$$\Delta v_{\rm ideal} = 2942.0\ln(6.25) = 2942.0(1.83258) = 5391\ \mathrm{m/s}.$$

(d) $$\Delta v_{\rm gravity}\approx g_0\,\overline{\sin\gamma}\,t_{\rm burn} = 9.80665(0.55)(172.6) = 931\ \mathrm{m/s}.$$

$$\Delta v_{\rm net}\approx5391-931 = 4460\ \mathrm{m/s},$$

so the gravity loss consumes **17% of the stage's ideal capability.**

*How a higher $T/W$ would change it.* The loss is proportional to burn time, and at fixed propellant mass the burn time is inversely proportional to thrust:

$$\Delta v_{\rm gravity}\propto t_{\rm burn} = \frac{m_p}{\dot m}\propto\frac{1}{T}.$$

Raising $T/W$ from 1.39 to 1.80 — a 30% thrust increase — would cut the burn time to 133 s and the gravity loss to about 716 m/s, **saving roughly 215 m/s.**

*What it would cost.* Three things, and together they usually swallow the gain:

**Engine mass.** Thrust scales with engine mass roughly linearly, so 30% more thrust is 30% more engine. On a stage whose dry mass is 80 t of which perhaps 25 t is engines, that is 7.5 t added — which raises $m_f$ from 80 to 87.5 t, cutting $MR$ from 6.25 to 5.71 and the ideal $\Delta v$ from 5391 to 5128 m/s. **A loss of 263 m/s, against a saving of 215.**

**Structural loads.** Higher acceleration means higher axial loads on the whole stack, higher max-q if the trajectory is not reshaped, and a heavier interstage and payload adapter.

**Acceleration limits.** The vehicle's acceleration grows through the burn as it lightens; at $T/W = 1.8$ at liftoff the final acceleration would exceed 11 g, which most payloads and structures will not accept without throttling — and throttling gives back the burn time you were trying to save.

*The conclusion.* **There is an optimum, and it is shallow.** Real first stages lift off at $T/W = 1.2$–$1.5$: enough to keep gravity loss around 1 km/s without an engine mass penalty that costs more than it saves. **Solid boosters, whose engine mass is inherently low, sit at the high end (the Shuttle SRBs gave the stack $T/W\approx1.6$); pressure-fed and low-thrust stages sit at the low end.**

</details>

## Connections

- **Backward:** the thrust $F = \dot mv_e$ being integrated is [1.1](01-01-thrust-momentum-equation.md)'s; the $v_e$ it depends on comes from [1.2](01-02-compressible-flow-nozzles.md) and varies with altitude by [1.3](01-03-nozzle-operating-regimes.md).
- **Forward:** [3.2](03-02-specific-impulse-rocket-performance.md) ties $I_{sp}$ to $c^*$ and $C_F$; [3.3](03-03-staging-mass-ratio.md) turns the single-stage wall into the staging argument; [3.5](03-05-mission-delta-v-budget.md) builds the $\Delta v$ budgets these equations consume.
- **Sideways:** the derivation is the **variable-mass form of Newton's second law**, and the same logarithm appears wherever a resource is consumed in proportion to what remains — the barometric formula, radioactive decay, and continuously compounded interest are all $\ln(\text{ratio})$ relations for exactly this reason. The "logarithmic return on an exponentially growing investment" structure is what makes both rocketry and compound interest so unforgiving of small changes.
