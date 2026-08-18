# Reactor Physics & Neutron Transport · Lesson 5.1: Reactivity feedback & temperature coefficients

> ⏱ ~15 min · Module 5: Feedback, poisons & operation · Builds on: [4.5 Subcritical multiplication & startup](04-05-subcritical-multiplication-startup.md), [4.1 Delayed neutrons & point kinetics](04-01-delayed-neutrons-point-kinetics.md) · Unlocks: [5.2 Doppler, moderator & void coefficients](05-02-doppler-moderator-void-coefficients.md)

## Why this matters

Everything in Module 4 treated reactivity $\rho$ as a knob an operator sets — insert a step, watch power ramp. But the reactor talks back. Raise the power and the core gets *hotter*, and a hotter core is a physically different reactor: cross sections shift, densities drop, resonances broaden. That changes $\rho$ all on its own — no rod moved. This is **reactivity feedback**, and its sign is the single most important fact about whether a reactor is inherently safe. A reactor with the right sign quietly cancels its own excursions; a reactor with the wrong sign amplifies them. Chernobyl's core had the wrong sign at low power. This lesson closes the loop that Module 4 left open.

## The idea

Think of the reactor as a loop, not a one-way street:

$$\text{power} \;\uparrow\; \longrightarrow\; \text{temperature} \;\uparrow\; \longrightarrow\; \text{cross sections \& densities change} \;\longrightarrow\; \rho \;\text{changes} \;\longrightarrow\; \text{power changes again.}$$

The whole question is which way that last arrow points. Suppose heating the core *subtracts* reactivity. Then a power rise heats the core, which pulls $\rho$ down, which throttles the rise — the reactor leans against its own push. Nudge it up and it settles at a slightly higher power and stops. That's **negative feedback**, and it makes the reactor *self-regulating*: it holds itself near critical without an operator chasing it. Load-follow a PWR by opening the turbine valve and the core cools, gains reactivity, and rises to meet the new demand — automatically.

Now suppose heating *adds* reactivity. A power rise heats the core, which pushes $\rho$ **up**, which drives power higher still, which heats it more... That's **positive feedback** — a snowball. It doesn't guarantee an explosion (delayed neutrons and other feedbacks may still catch it), but it removes the reactor's built-in brake, and near prompt-critical that is catastrophic.

The number that captures all of this is the **temperature coefficient of reactivity**, $\alpha_T$ — how many units of reactivity you gain or lose per degree of heating. Its *sign* is the safety story; its *magnitude* tells you how hard the reactor pushes back.

## The formal version

**Temperature coefficient of reactivity.** Define

$$\alpha_T \equiv \frac{d\rho}{dT},$$

the change in reactivity per unit change in core temperature $T$ (in kelvin). *In words: $\alpha_T$ is the slope of the reactor's reactivity-versus-temperature curve.* Units are inverse kelvin, but in practice we quote **pcm per K** ($1\,\text{pcm}=10^{-5}$, from [4.2](04-02-reactivity-prompt-jump.md)); a typical power reactor runs a few pcm/K, negative. A feedback reactivity from a temperature change $\Delta T$ is then

$$\Delta\rho_{\text{fb}} = \alpha_T\,\Delta T \qquad(\text{for constant }\alpha_T).$$

**The sign is the safety criterion.**

- $\alpha_T < 0$ (**negative** → stable, self-regulating): heating subtracts reactivity, so a power excursion damps itself. This is a licensing requirement for the operating range of every Western power reactor.
- $\alpha_T > 0$ (**positive** → unstable): heating adds reactivity, a self-amplifying loop with no inherent brake.

**In words: a negative coefficient turns the feedback loop into a thermostat; a positive one turns it into an accelerator.**

**Where $\alpha_T$ comes from.** Any term in the six-factor formula (from [2.2](02-02-leakage-six-factor-formula.md)) that depends on temperature contributes. The two big channels, which [5.2](05-02-doppler-moderator-void-coefficients.md) computes in full:

- **Fuel (Doppler) temperature coefficient**, $\alpha_F$: hotter fuel broadens the $\ce{^{238}U}$ absorption resonances, capturing more neutrons and *lowering* $\rho$ — almost always negative. Crucially, it responds **promptly**: fission heat is deposited in the fuel pellet essentially instantly, so $\alpha_F$ acts within the same fraction of a second as the power change itself.
- **Moderator/coolant temperature coefficient**, $\alpha_M$: hotter (and thus less dense) water moderates less effectively and, in a PWR, dilutes fewer absorbers per cm — usually negative if the lattice is designed right. It responds with a **lag**: heat must conduct out of the fuel, cross the gap and clad, and warm the coolant — seconds, not milliseconds.

The **total isothermal coefficient** is the sum, $\alpha_T = \alpha_F + \alpha_M + \cdots$. This prompt-versus-delayed split matters enormously: in a fast transient it is the *prompt fuel* feedback that arrests the excursion before the moderator has even noticed.

**Equilibrium of a feedback loop.** Insert an external step $\Delta\rho_{\text{ext}}$ (a withdrawn rod). Power rises, temperature rises by $\Delta T$, and feedback supplies $\alpha_T\,\Delta T$. The reactor stops climbing and reaches a new steady state when the *total* reactivity is back to zero:

$$\Delta\rho_{\text{ext}} + \alpha_T\,\Delta T = 0 \qquad\Longrightarrow\qquad \boxed{\;\Delta T = -\frac{\Delta\rho_{\text{ext}}}{\alpha_T}\;}$$

*In words: temperature climbs exactly far enough for feedback to eat the reactivity you inserted, then everything holds.* This only has a stable solution when $\alpha_T<0$ (heating must remove what you added); with $\alpha_T>0$ the equation has the wrong sign and there is no self-limiting equilibrium.

**Power coefficient and the power defect.** Reactivity ultimately tracks *power* (power sets temperature), so define the **power coefficient** $\alpha_P \equiv d\rho/dP$. Since $\alpha_P = \alpha_T\,(dT/dP)$ and $dT/dP>0$, it carries the same sign as $\alpha_T$. Integrating it over the whole climb from zero power to full power gives the **power defect** — the total reactivity the core loses in heating up:

$$\Delta\rho_{\text{defect}} = \int_{0}^{P_{\text{full}}} \alpha_P\,dP \;=\; \int_{T_{0}}^{T_{\text{full}}} \alpha_T(T)\,dT .$$

*In words: the power defect is how much reactivity gets swallowed by going from cold-and-shut-down to hot-and-full-power.* It is negative (typically $-1000$ to $-3000$ pcm), and control rods or boron dilution must supply exactly that much positive reactivity to hold the reactor critical as it warms up. Note $\alpha_T$ under the integral because it is generally **temperature-dependent** — the Doppler part weakens as $1/\sqrt{T}$, so you cannot just multiply a single coefficient by the full swing.

## Picture

![Block diagram of the reactivity feedback loop: external reactivity plus feedback enter a summing junction, drive point kinetics and power, which heats the core, raising temperature; the temperature coefficient alpha_T converts that to a feedback reactivity that returns to the summing junction with a negative sign, making the loop self-regulating](assets/05-01-reactivity-feedback-temperature-coefficients-fig1.svg)

Read it as a control loop. The rod supplies $\rho_{\text{ext}}$; the summing junction adds the feedback $\Delta\rho_{\text{fb}}$; the net $\rho$ drives the kinetics and hence power; power heats the core; and $\alpha_T$ turns that temperature rise back into reactivity. When $\alpha_T<0$ the returning arrow *subtracts*, so the loop chases itself to a quiet stop instead of running away.

## Worked examples

**Example 1 (equilibrium power shift — the loop finds its own stop).** A reactor sits critical at steady power. An operator withdraws a rod, inserting $\Delta\rho_{\text{ext}} = +150\,\text{pcm} = +0.0015$. The core has an isothermal temperature coefficient $\alpha_T = -3\,\text{pcm/K} = -3\times10^{-5}\,\text{K}^{-1}$. Where does it settle?

The climb stops when feedback has cancelled the insertion, $\Delta\rho_{\text{ext}} + \alpha_T\,\Delta T = 0$:

$$\Delta T = -\frac{\Delta\rho_{\text{ext}}}{\alpha_T} = -\frac{+0.0015}{-3\times10^{-5}\,\text{K}^{-1}} = 50\,\text{K}.$$

The average core temperature rises **50 K**, feedback supplies $\alpha_T\Delta T = (-3\,\text{pcm/K})(50\,\text{K}) = -150\,\text{pcm}$, total reactivity is back to zero, and the reactor is critical again — at a higher temperature and power, with no runaway. To get the *power* rise, use the heat-removal relation: if the coolant carries off heat such that the average core temperature rises $\Delta T = \Delta P / G$ with thermal conductance $G = 5\,\text{MW/K}$, then

$$\Delta P = G\,\Delta T = (5\,\text{MW/K})(50\,\text{K}) = 250\,\text{MW}.$$

*Check.* The reactor moved up 250 MW and parked itself there — the operator inserted reactivity and got a **power increase**, not a power *excursion*. That self-limiting behavior is entirely the negative sign. Had $\alpha_T$ been $+3\,\text{pcm/K}$, the equation would demand $\Delta T = -50\,\text{K}$ (cooling) to reach equilibrium after a *positive* insertion — impossible, so there is no stable stop and power runs until something else intervenes.

**Example 2 (power defect — integrating a temperature-dependent coefficient).** The fuel Doppler coefficient weakens with temperature as resonances broaden: model it as

$$\alpha_T(T) = -\frac{a}{\sqrt{T}}, \qquad a = 6\times10^{-4}\,\text{K}^{1/2}.$$

(At $T=900\,\text{K}$ this gives $\alpha_T = -6\times10^{-4}/\sqrt{900} = -2.0\times10^{-5}\,\text{K}^{-1} = -2.0\,\text{pcm/K}$, a realistic Doppler value.) How much reactivity does the fuel swallow as its average temperature climbs from a zero-power $T_0 = 600\,\text{K}$ to a full-power $T_1 = 1200\,\text{K}$, and how much must the control system supply to compensate?

Integrate the coefficient over the swing:

$$\Delta\rho_{\text{defect}} = \int_{600}^{1200}\!\left(-\frac{a}{\sqrt{T}}\right)dT = -a\Big[2\sqrt{T}\Big]_{600}^{1200} = -2a\left(\sqrt{1200}-\sqrt{600}\right).$$

Numerically $\sqrt{1200}=34.64$, $\sqrt{600}=24.49$, so

$$\Delta\rho_{\text{defect}} = -2(6\times10^{-4})(34.64 - 24.49) = -(1.2\times10^{-3})(10.15) = -1.22\times10^{-2} = -1220\,\text{pcm}.$$

The fuel loses about **1220 pcm** heating up, so control rods (or boron dilution) must add **+1220 pcm** to keep it critical from hot-standby to full power. In dollars (from [4.2](04-02-reactivity-prompt-jump.md), $\rho[\$]=\rho/\beta$ with $\beta=0.0065$): $0.0122/0.0065 \approx 1.9$ dollars of rod worth spent just on the Doppler defect.

*Check.* If you had (wrongly) used a single constant coefficient equal to the midpoint value $\alpha_T(900)=-2.05\,\text{pcm/K}$ times the $600\,\text{K}$ swing, you'd estimate $-2.05\times600 = -1230\,\text{pcm}$ — within 1 % of the integral, because $1/\sqrt{T}$ varies slowly here. The integral is the honest answer, but the sanity estimate confirms it, and it shows *why* the coefficient's temperature dependence matters: quote the *cold* value $-2.45\,\text{pcm/K}$ and you'd overshoot; quote the *hot* value $-1.73\,\text{pcm/K}$ and you'd undershoot.

## Watch out

- **You might think a negative coefficient makes the reactor "want" to shut itself down.** It doesn't drive power to zero — it drives *total reactivity* to zero, i.e. it holds the reactor **critical** at whatever power the demand and rods dictate. Negative feedback is a stabilizer around the setpoint, not a brake to off.
- **You might assume "fuel feedback" and "moderator feedback" act together.** They act on different clocks. Fuel Doppler is **prompt** (fission heat is in the pellet instantly); moderator feedback **lags** by seconds while heat conducts to the coolant. In a fast excursion only the prompt fuel term is available to arrest it — which is why a strong negative Doppler coefficient is the front-line safety feature.
- **You might read the power defect as the same size as one temperature coefficient times a temperature.** Only if $\alpha_T$ were constant. It is not — Doppler falls off like $1/\sqrt{T}$ — so the defect is an **integral** $\int \alpha_T(T)\,dT$, not a single product. Using the cold coefficient over the whole swing overstates the defect.

## One-liner

> The temperature coefficient $\alpha_T = d\rho/dT$ closes the power-to-reactivity loop: negative means the core is its own thermostat (a rise heats it and subtracts reactivity, settling at $\Delta T = -\Delta\rho_{\text{ext}}/\alpha_T$), and the integral of $\alpha_T$ over the heat-up is the power defect the rods must pay.

## Problems

**P1 (🟢)** A reactor has a constant isothermal temperature coefficient $\alpha_T = -2.5\,\text{pcm/K}$. An operator withdraws a rod worth $\Delta\rho_{\text{ext}} = +125\,\text{pcm}$. (a) By how much does the average core temperature rise before the reactor re-stabilizes? (b) Is this a stable, self-limiting response, and what fixes that?

**P2 (🟡)** A core's isothermal coefficient splits into a **prompt** fuel part $\alpha_F = -2.8\,\text{pcm/K}$ and a **delayed** moderator part $\alpha_M = -18\,\text{pcm/K}$. It receives a $+40\,\text{pcm}$ insertion. (a) In the first fraction of a second, before the coolant has warmed, only the fuel responds — what fuel temperature rise arrests the prompt excursion using $\alpha_F$ alone? (b) After the heat reaches the coolant and *both* terms act (treat the whole core as warming isothermally by a common $\Delta T$), what is the final equilibrium temperature rise? (c) In one sentence, why is the prompt fuel term the one that matters most for safety?

**P3 (🔴, optional)** A fuel Doppler coefficient is $\alpha_T(T) = -c/\sqrt{T}$ with $c = 8\times10^{-4}\,\text{K}^{1/2}$. Find the power defect as the fuel's average temperature rises from $T_0 = 500\,\text{K}$ to $T_1 = 1100\,\text{K}$, in pcm and in dollars ($\beta = 0.0065$).

<details>
<summary>Solutions</summary>

**P1.** (a) The reactor re-stabilizes when $\Delta\rho_{\text{ext}} + \alpha_T\,\Delta T = 0$:

$$\Delta T = -\frac{\Delta\rho_{\text{ext}}}{\alpha_T} = -\frac{+125\,\text{pcm}}{-2.5\,\text{pcm/K}} = 50\,\text{K}.$$

(b) Yes — stable and self-limiting, because $\alpha_T<0$: the temperature rises just enough that feedback ($-2.5\times50 = -125\,\text{pcm}$) cancels the insertion, and the reactor sits critical at a new, higher power. The *negative sign* is what makes the equilibrium exist; with $\alpha_T>0$ there is no such stop.

*Check.* Feedback delivered $\alpha_T\Delta T = -125\,\text{pcm}$, exactly cancelling the $+125\,\text{pcm}$ rod. Units: $\text{pcm}/(\text{pcm/K}) = \text{K}$ ✓.

**P2.** (a) Prompt arrest uses the fuel term only:

$$\Delta T_F = -\frac{\Delta\rho_{\text{ext}}}{\alpha_F} = -\frac{+40}{-2.8} \approx 14.3\,\text{K}.$$

The fuel pellet heats about 14 K, essentially instantly, and that halts the fast rise before the coolant has responded.

(b) With both terms acting, the effective coefficient is $\alpha_F + \alpha_M = -2.8 - 18 = -20.8\,\text{pcm/K}$:

$$\Delta T = -\frac{+40}{-20.8} \approx 1.9\,\text{K}.$$

The final whole-core rise is much smaller — once the moderator's strong negative term joins in, far less temperature change is needed to eat the same 40 pcm, so power overshoots slightly during the prompt phase and then settles back as the coolant catches up.

(c) The fuel term is **prompt** — it acts within the same instant as the power change, so it is the only feedback available to arrest a fast excursion before it can run away; the moderator's help arrives seconds later.

*Check.* Both parts use $\Delta T = -\Delta\rho/\alpha$; the larger the (negative) coefficient, the smaller the temperature swing needed, so (b) < (a) as expected. ✓

**P3.** Integrate the temperature-dependent coefficient:

$$\Delta\rho_{\text{defect}} = \int_{500}^{1100}\!\left(-\frac{c}{\sqrt{T}}\right)dT = -2c\left(\sqrt{1100}-\sqrt{500}\right).$$

With $\sqrt{1100}=33.17$ and $\sqrt{500}=22.36$:

$$\Delta\rho_{\text{defect}} = -2(8\times10^{-4})(33.17 - 22.36) = -(1.6\times10^{-3})(10.81) = -1.73\times10^{-2} = -1730\,\text{pcm}.$$

In dollars: $\rho[\$] = 0.0173/0.0065 \approx 2.7$ dollars. Control rods must supply about $+1730$ pcm to compensate this defect over the heat-up.

*Check.* Midpoint coefficient $\alpha_T(800) = -8\times10^{-4}/\sqrt{800} = -2.83\,\text{pcm/K}$ times the $600\,\text{K}$ swing gives $-1698\,\text{pcm}$, within 2 % of the integral. ✓

</details>

## Flashback

**From Lesson 4.4 (period from reactivity — fresh variant).** A reactor at steady power gets a step insertion $\rho = +0.0020$. With $\beta = 0.0065$ and effective precursor decay constant $\bar\lambda = 0.08\,\text{s}^{-1}$, use the small-$\rho$ one-group formula to find the stable inverse period $\omega$, the reactor period $T$, and the doubling time. Then, in one sentence, say what a *negative* temperature coefficient would do to this ramp as the reactor heats up.

<details>
<summary>Solution</summary>

Small-$\rho$ one-group formula, with $\beta-\rho = 0.0065 - 0.0020 = 0.0045$:

$$\omega = \frac{\bar\lambda\,\rho}{\beta-\rho} = \frac{(0.08)(0.0020)}{0.0045} = \frac{1.6\times10^{-4}}{4.5\times10^{-3}} = 0.0356\,\text{s}^{-1}.$$

$$T = \frac{1}{\omega} = \frac{1}{0.0356} \approx 28.1\,\text{s}, \qquad t_{\text{double}} = \frac{\ln 2}{\omega} = \frac{0.693}{0.0356} \approx 19.5\,\text{s}.$$

A negative $\alpha_T$ would **bend this ramp flat**: as power climbs the core heats, feedback subtracts reactivity, $\rho$ falls toward zero, and the period lengthens toward infinity — the reactor stops ramping on its own and settles at a higher steady power (exactly the equilibrium of this lesson's Example 1).

*Check.* A 31-cent insertion ($\rho/\beta = 0.0020/0.0065 = 0.31$) gives a $\sim$28 s period — comfortably controllable, and sub-$\beta$ so still delayed-dominated. ✓

</details>

## Connections

- **Backward:** this promotes the fixed $\rho$ of the point-kinetics equations ([4.1](04-01-delayed-neutrons-point-kinetics.md)) and the prompt jump/period picture ([4.2](04-02-reactivity-prompt-jump.md), [4.4](04-04-inhour-equation-reactor-period.md)) into a *dynamic* $\rho(T)$; the feedback channels are just the temperature dependence of the six-factor terms from [2.2](02-02-leakage-six-factor-formula.md).
- **Forward:** [5.2](05-02-doppler-moderator-void-coefficients.md) computes the two coefficients quantitatively — Doppler broadening of $\ce{^{238}U}$ resonances for $\alpha_F$, and moderator density/void effects for $\alpha_M$ — and shows why a positive *void* coefficient (RBMK) versus negative (PWR) is a design-level safety divide.
- **Sideways (control theory / dynamical systems):** the block diagram here is a textbook **negative-feedback control loop**, and $\alpha_T<0$ is exactly the stability condition — the same reason a governor holds an engine speed or a thermostat holds a room temperature. Formally it is the sign of a Jacobian eigenvalue for the coupled kinetics-plus-thermal ODE system, the stability language of [`ode-refresher`](../../ode-refresher/syllabus.md) applied to a reactor; the reactor-plus-heat model is picked up in reactor thermal-hydraulics.
