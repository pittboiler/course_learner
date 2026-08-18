# Reactor Thermal-Hydraulics · Lesson 4.3: Reactivity feedback coefficients

> ⏱ ~15 min · Module 4: Natural circulation, neutronic coupling, and safety margins · Builds on: [1.2 Conduction with a heat source in a fuel pin](01-02-conduction-heat-source-fuel-pin.md), [3.3 Quality, void fraction, and slip](03-03-quality-void-fraction-slip.md), [`reactor-physics` 5.1](../../reactor-physics/lessons/05-01-reactivity-feedback-temperature-coefficients.md), [`reactor-physics` 5.2](../../reactor-physics/lessons/05-02-doppler-moderator-void-coefficients.md) · Unlocks: [4.4 Coupled TH/neutronic feedback](04-04-coupled-th-neutronic-feedback.md)

## Why this matters

Every temperature you have computed in this course so far — fuel centerline, clad surface, coolant bulk, void fraction — is not just a number that has to stay below a melting limit. It is a **knob on the reactor's own power**. Heat the fuel and the chain reaction responds; boil the coolant and it responds again. This lesson is the bridge from thermal-hydraulics back to neutronics: it says exactly how much reactivity you gain or lose per degree, and — the part that decides whether a reactor is safe to build — with what **sign**. A reactor whose feedback is negative catches itself on a power spike before any control system moves. A reactor whose feedback is positive helps the spike along. That single sign is the difference between a PWR and Chernobyl.

## The idea

A reactor sitting exactly critical is a pencil balanced on its tip: the chain reaction neither grows nor dies. **Reactivity** measures how far off that balance you are. Nudge it positive, power climbs; nudge it negative, power falls. Feedback is what happens when the *reactor itself* nudges the reactivity in response to getting hotter.

Picture the loop. Power goes up → things heat up → some physical property of the hot core changes → reactivity shifts. If that shift is **negative** (hotter core → less reactivity), you have a thermostat: the rise in power throttles itself, and the reactor settles at a new steady state on its own. If the shift is **positive**, you have an accelerator: the rise in power adds more reactivity, which raises power further — a runaway.

Two things heat up, on two different clocks. The **fuel** heats *instantly* when power rises — the fission energy is born right there in the pellet. Its feedback (the **Doppler effect**) is therefore **prompt**: it fights a power excursion in the same microsecond it starts, before heat has conducted anywhere. That is why it is called the first line of inherent safety. The **coolant/moderator** heats *later* — the energy has to conduct out of the fuel, across the gap and clad, into the water first — so its feedback is delayed by seconds. And in a reactor where the coolant can boil, the most violent version of that second effect is punching steam **voids** into the moderator.

## The formal version

**Reactivity.** With $k$ the effective multiplication factor (neutrons in one generation ÷ neutrons in the previous),

$$\rho=\frac{k-1}{k}.$$

*In words: reactivity is the fractional surplus of the chain reaction — zero at exact criticality, positive above, negative below.* It is dimensionless but tiny, so we quote it in **pcm** ("per cent mille"): $1\,\mathrm{pcm}=10^{-5}$ in $\Delta k/k$.

**Temperature coefficient.** For each physical variable $T_x$ (fuel temperature, moderator temperature, void fraction) define

$$\alpha_x=\frac{\partial\rho}{\partial T_x},$$

with units of $\mathrm{pcm/K}$ (or $\mathrm{pcm/^\circ C}$ — same size, since it is a *difference* in temperature; and $\mathrm{pcm/\%void}$ for the void coefficient). *In words: how many pcm of reactivity you gain or lose per unit change in that variable.* The reactivity change over a finite swing is the integral, or for a roughly constant coefficient just

$$\Delta\rho_x=\alpha_x\,\Delta T_x.$$

**The sign is the whole game:** $\alpha_x<0$ is stabilizing (self-correcting), $\alpha_x>0$ is destabilizing (self-amplifying). The three coefficients that matter:

**Doppler (fuel-temperature) coefficient, $\alpha_D<0$.** Hotter fuel means the $^{238}$U nuclei jiggle faster, so their sharp resonance-absorption peaks get **Doppler-broadened** — smeared shorter and wider at constant area. A tall cold peak is *self-shielded* (it eats every neutron at its exact energy in the fuel's outer skin, wasting the rest of its height); spreading that area into the **wings** moves absorption into energies where the neutron flux is not yet depleted, so **more** neutrons are actually captured. More resonance capture → lower resonance escape → lower $k$ → negative reactivity. It is negative for essentially any reactor with significant $^{238}$U, and it is **prompt**. (Full mechanism: [`reactor-physics` 5.2](../../reactor-physics/lessons/05-02-doppler-moderator-void-coefficients.md).)

**Moderator temperature / density coefficient, $\alpha_M$.** Heat the water and it expands — fewer molecules per cm³, so less slowing-down power. Whether that helps depends on the moderator-to-fuel ratio. A PWR is deliberately built **under-moderated**: it is slightly starved for moderator, so losing moderator density *lowers* reactivity, giving $\alpha_M<0$ (safe). An **over-moderated** core would gain reactivity as the water thins — $\alpha_M>0$ (dangerous). This feedback is **delayed** relative to Doppler; heat must first reach the coolant.

**Void coefficient, $\alpha_v$.** Boiling drives the density loss to the extreme by replacing liquid with steam bubbles — **voids** (void fraction $\bar\alpha$ from [3.3](03-03-quality-void-fraction-slip.md)). In a BWR the coolant *is* the moderator, so voids strip moderation and $\alpha_v$ is **strongly negative** (typ. order $-100\ \mathrm{pcm/\%void}$) — the mechanism that makes BWR power self-limiting. But in a **graphite-moderated** design (the Soviet RBMK) the graphite does the moderating and the water is mainly a neutron *absorber*; voiding the coolant removes an absorber, so $\alpha_v>0$. Same event, opposite sign — and that positive void coefficient, with a sluggish control system, is the physics behind the 1986 **Chernobyl** excursion.

**The stability rule.** The total **power coefficient** — the sum of all these, weighted by how much each variable moves as power rises — must be negative at operating conditions for the reactor to be inherently stable. Doppler is the anchor that guarantees it, because it is fast and always negative.

## Picture

![A horizontal sign line of feedback coefficients: Doppler, moderator-temperature and BWR-void bars extending left (negative, self-correcting, in blue) and the RBMK graphite void bar extending right (positive, self-amplifying, in coral), each labelled with its magnitude in pcm per kelvin or per percent void](assets/04-03-fig1.svg)

Three of the four bars point left of zero — negative, self-correcting. Only the graphite-moderated void coefficient points right. The lengths are schematic (a per-K and a per-%void coefficient don't share a scale), but the message is exact: you *engineer* the sign of the moderator and void terms, and getting the void term positive is how a reactor feeds its own excursion.

## Worked examples

**Example 1 (Doppler — the power defect).** A reactor is brought from a just-critical, near-cold state up to power. Doing so raises the average fuel temperature by $\Delta T_f=500\ \mathrm{K}$. With a Doppler coefficient $\alpha_D=-2.5\ \mathrm{pcm/K}$ (treated as constant over the swing):

$$\Delta\rho_{\mathrm{Doppler}}=\alpha_D\,\Delta T_f=(-2.5\ \mathrm{pcm/K})(500\ \mathrm{K})=-1250\ \mathrm{pcm}=-0.0125\ \Delta k/k.$$

Interpret the sign. As the fuel heats, Doppler feedback *removes* $1250\ \mathrm{pcm}$ of reactivity. So to actually *hold* the reactor critical at full power, the control system must **add back** $+1250\ \mathrm{pcm}$ (withdraw rods, dilute boron) to compensate. That make-up reactivity is the **power defect** — the reactivity price of being at power, paid in advance and refunded automatically the instant the fuel cools. It is also your safety cushion: if power tries to surge, the fuel heats *further* and this same negative term slams in harder, throttling the surge before any operator reacts.

*Units/sanity check.* $(\mathrm{pcm/K})(\mathrm{K})=\mathrm{pcm}$ ✓. Magnitude: ~1250 pcm ≈ 12.5 mk over a 500 K fuel swing is the right order for a Doppler brake (a couple pcm per degree is typical). Sign negative ✓ — hotter fuel must cost reactivity.

**Example 2 (void — why a BWR is self-limiting).** A BWR channel carries no boiling at its inlet but develops a substantial exit void; over the operating range the *core-average* void fraction rises by $\Delta\bar\alpha=40\%$. With a void coefficient $\alpha_v=-100\ \mathrm{pcm/\%void}$:

$$\Delta\rho_{\mathrm{void}}=\alpha_v\,\Delta\bar\alpha=(-100\ \mathrm{pcm/\%void})(40\ \%\mathrm{void})=-4000\ \mathrm{pcm}=-0.040\ \Delta k/k.$$

That is a large negative reactivity swing built directly into normal operation — and it is what makes the reactor stable *and* controllable by flow. Trace the loop: a power rise boils more coolant → void fraction climbs → this $\alpha_v<0$ term *subtracts* reactivity → power falls → boiling subsides. Self-limiting. It even hands the operators a control knob: **speed up the recirculation pumps** and you sweep bubbles out faster, void drops, reactivity *rises* by exactly this coefficient, and power climbs — BWR power is maneuvered by flow, no rod motion needed. Flip $\alpha_v$ positive (the RBMK) and every arrow in that loop reverses into a runaway.

*Units/sanity check.* $(\mathrm{pcm/\%void})(\%\mathrm{void})=\mathrm{pcm}$ ✓. A multi-thousand-pcm negative void worth over the full boiling range is realistic for a BWR and dwarfs the Doppler defect — which is exactly why the void coefficient dominates BWR dynamics. ✓

## Watch out

- **You might think "the temperature coefficient" is one number.** It is a *sum* of separate effects on separate clocks — Doppler in the fuel (microseconds, always negative), moderator/void in the coolant (seconds, sign is a design choice). A reactor can have a fine Doppler coefficient and still be unstable if its void coefficient is positive and large. Never let a healthy Doppler term paper over a positive moderator or void term.
- **You might think a negative void coefficient means boiling is harmless.** The sign tells you the reactor *pushes back* on boiling — it does **not** protect the cladding. Dryout / departure from nucleate boiling ([3.6](03-06-critical-heat-flux-dnb.md)) is a heat-transfer failure that happens at the wall regardless of what reactivity is doing; negative feedback limits power, it doesn't guarantee the wall stays wet.
- **You might think all void coefficients are negative because "voids remove moderator."** Only when the coolant *is* the moderator. Separate the two materials — graphite moderator, water coolant — and voiding the water removes an *absorber*, flipping the sign positive. The sign follows the material's neutronic role, not the word "void."

## One-liner

> Core temperature feeds back into reactivity through $\alpha_x=\partial\rho/\partial T_x$: Doppler is prompt and always negative (the fuel's instant brake), while the moderator/void coefficient's *sign* is something you engineer — negative in an under-moderated PWR or a BWR, and fatally positive in a graphite-moderated RBMK.

## Problems

**P1 (🟢)** A PWR has a Doppler coefficient $\alpha_D=-2.2\ \mathrm{pcm/K}$. Going from hot-zero-power to hot-full-power raises the average fuel temperature by $600\ \mathrm{K}$. (a) Find the Doppler reactivity change in pcm and in $\Delta k/k$. (b) How much reactivity must the control system supply to hold criticality at full power, and what is that quantity called? (c) In one sentence, why is the sign negative?

**P2 (🟡)** Two reactors each develop a core-average void fraction $\bar\alpha=8\%$. Reactor A is a light-water BWR with $\alpha_v=-95\ \mathrm{pcm/\%void}$; Reactor B is graphite-moderated with $\alpha_v=+45\ \mathrm{pcm/\%void}$. (a) Compute $\Delta\rho$ for each in pcm. (b) State whether each reactor's boiling is self-limiting or self-amplifying, and why. (c) If Reactor B has a delayed-neutron fraction $\beta=650\ \mathrm{pcm}$, what void fraction would make it prompt critical ($\Delta\rho\ge\beta$) on void feedback alone?

**P3 (🔴)** A PWR going from cold-zero-power to hot-full-power sees three feedbacks: Doppler $-1050\ \mathrm{pcm}$, moderator temperature $-600\ \mathrm{pcm}$, and a small void term $-120\ \mathrm{pcm}$. (a) What is the total power defect, and how much rod excess reactivity must be available just to reach full power? (b) A proposed core redesign would flip the moderator term to $+600\ \mathrm{pcm}$. Compute the new total. It is still net negative — so why is it a serious safety problem anyway?

<details>
<summary>Solutions</summary>

**P1.** (a) $\Delta\rho=\alpha_D\,\Delta T_f=(-2.2\ \mathrm{pcm/K})(600\ \mathrm{K})=-1320\ \mathrm{pcm}=-0.0132\ \Delta k/k.$

(b) Doppler removes $1320\ \mathrm{pcm}$, so the control system must add back $+1320\ \mathrm{pcm}$ to stay critical at full power. That make-up reactivity is the **power defect** (the Doppler part of it).

(c) Heating the fuel Doppler-broadens the $^{238}$U resonances; the same peak area spread into the unshielded wings captures more neutrons, so resonance escape and $k$ fall — negative reactivity.

*Check.* $(\mathrm{pcm/K})(\mathrm{K})=\mathrm{pcm}$ ✓; ~1300 pcm over a 600 K swing is a realistic Doppler defect, and the sign must be negative for the reactor to be self-regulating. ✓

**P2.** (a) Reactor A: $\Delta\rho=(-95)(8)=-760\ \mathrm{pcm}$. Reactor B: $\Delta\rho=(+45)(8)=+360\ \mathrm{pcm}$.

(b) Reactor A is **self-limiting**: boiling lowers reactivity, so power falls and boiling subsides — the disturbance damps out. Reactor B is **self-amplifying**: boiling *raises* reactivity, so power rises, more coolant boils, and each extra percent of void adds still more positive reactivity — a runaway loop.

(c) Prompt critical needs $\Delta\rho\ge\beta=650\ \mathrm{pcm}$. Solve $45\,\bar\alpha=650$: $\bar\alpha=650/45\approx14.4\%$.

*Check.* $(\mathrm{pcm/\%void})(\%\mathrm{void})=\mathrm{pcm}$ ✓. A void fraction under ~15% able to push a reactor prompt critical on boiling alone is exactly the hair-trigger a positive void coefficient creates. ✓

**P3.** (a) Power defect $=-1050-600-120=-1770\ \mathrm{pcm}$. The control system must supply $+1770\ \mathrm{pcm}$ of positive reactivity (rod withdrawal / boron dilution) just to hold criticality at full power, so at least that much rod excess must be available.

(b) New total $=-1050+600-120=-570\ \mathrm{pcm}$. Still net negative, so the reactor is *nominally* stable — **but** the margin has collapsed and, worse, the moderator term now works the wrong way: any transient that heats or voids the coolant *adds* reactivity instead of removing it. The reactor would then lean entirely on Doppler; if operating conditions ever let the positive moderator term outgrow Doppler, the total coefficient goes positive and self-regulation is lost. A negative *total* is not enough — you want every large contributor negative, and never rely on Doppler alone to cover a positive moderator/void term. This is precisely the design line separating a PWR from an RBMK.

*Check.* Sum arithmetic consistent; the qualitative danger (loss of margin, wrong-signed coolant feedback) matches the [`reactor-physics` 5.2](../../reactor-physics/lessons/05-02-doppler-moderator-void-coefficients.md) principle. ✓

</details>

## Flashback

**From Lesson 1.2 (Conduction with a heat source in a fuel pin):** A UO$_2$ pellet operates at a linear rating $q'=30\ \mathrm{kW/m}$ with an (assumed constant) conductivity $k=3\ \mathrm{W/(m\cdot K)}$. Find the centerline-to-surface temperature rise, $T_0-T_s$. (Fresh numbers — and notice this is precisely the fuel temperature that drives the Doppler coefficient of this lesson.)

<details>
<summary>Solution</summary>

The parabolic-source result from [1.2](01-02-conduction-heat-source-fuel-pin.md), independent of pellet radius for uniform $k$:

$$T_0-T_s=\frac{q'}{4\pi k}=\frac{30{,}000\ \mathrm{W/m}}{4\pi\,(3\ \mathrm{W/(m\cdot K)})}=\frac{30{,}000}{37.70}\approx 796\ \mathrm{K}.$$

*Check.* Units: $(\mathrm{W/m})/(\mathrm{W/(m\cdot K)})=\mathrm{K}$ ✓. An ~800 K drop across a single pellet at 30 kW/m is the right order (real UO$_2$ pins run centerlines many hundreds of degrees above the surface), and it is exactly this large fuel-temperature swing — pushed higher still if power surges — that gives Doppler feedback its prompt bite. ✓

</details>

## Connections

- **Backward:** the fuel temperature that sets $\alpha_D$ is the centerline rise you built in [1.2](01-02-conduction-heat-source-fuel-pin.md) and across the gap/clad in [1.3](01-03-gap-cladding-resistances.md); the void fraction $\bar\alpha$ that the void coefficient multiplies is the quantity from [3.3](03-03-quality-void-fraction-slip.md). The neutronic mechanism — Doppler broadening, resonance escape, under- vs. over-moderation — is [`reactor-physics` 5.1](../../reactor-physics/lessons/05-01-reactivity-feedback-temperature-coefficients.md) and [5.2](../../reactor-physics/lessons/05-02-doppler-moderator-void-coefficients.md).
- **Forward:** [4.4 Coupled TH/neutronic feedback](04-04-coupled-th-neutronic-feedback.md) closes the loop — power sets temperature (this whole course), temperature sets reactivity (this lesson), reactivity sets power — and finds the self-regulating equilibrium where they balance.
- **Sideways (dynamical systems / control):** a negative coefficient is negative feedback and a positive one is positive feedback in the exact control-theory sense. The sign of $\partial\rho/\partial(\text{state})$ decides whether the fixed point at criticality is a stable node (the self-limiting PWR/BWR) or a repeller (the RBMK) — the same stability-of-equilibria test you apply to any nonlinear system.
