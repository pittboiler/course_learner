# Transport Phenomena · Lesson 5.4: A taste of turbulent transport

> ⏱ ~15 min · Module 5: Analogies and interphase transport · Builds on: [5.1 The transport analogies](05-01-transport-analogies.md), [`fluid-dynamics` 4.4 Transition to turbulence](../../fluid-dynamics/lessons/04-04-transition-to-turbulence.md), [`fluid-dynamics` 4.5 Turbulence and the energy cascade](../../fluid-dynamics/lessons/04-05-turbulence-kolmogorov.md) · Unlocks: **course finale** — where laminar tidiness ends

## Why this matters

Every shell balance, every boundary layer, every $Nu = 0.332\,Re_x^{1/2}Pr^{1/3}$ in this course assumed the fluid moved in orderly layers — laminar flow, where transport is a molecular affair: momentum, heat, and mass creep across the streamlines one collision at a time. But the flows an engineer actually builds — the pipe, the heat exchanger, the packed column, the atmosphere — are almost always **turbulent**. There, chaotic eddies bodily haul parcels of fluid across the gradient, and they do it *hundreds of times* more effectively than molecular diffusion ever could. That is why real convective coefficients $h$ and $k_c$ are large.

Here is the twist that makes this the right note to end on. Turbulence is the messiest regime in the whole subject — no closed solution of Navier–Stokes exists for it ([`fluid-dynamics` 4.5](../../fluid-dynamics/lessons/04-05-turbulence-kolmogorov.md)). And yet it is *precisely where the transport analogies become most exact*. The same eddies carry momentum, heat, and mass, so the three "diffusivities" collapse onto one another. The clean one-flux-law story we started with in [1.1](01-01-one-flux-law-three-transports.md) is at its cleanest exactly where the flow is at its ugliest.

## The idea

Watch smoke rise off a cigarette: a smooth laminar column that suddenly buckles into churning chaos. In the smooth part, a molecule of momentum or heat gets across the stream by random molecular jostling — slow. In the churning part, a whole *blob* of fluid, a foot wide, lurches sideways carrying its momentum, its warmth, and its smoke **all at once**, then breaks up and dumps them somewhere new. That bulk ferrying is turbulent transport, and it dwarfs molecular diffusion because it moves fluid in packages, not molecules one by one.

To make equations of this, we can't track every eddy — there are too many, over too many scales. So we do what statisticians do with noise: **average**. Split each field into a steady mean plus a jittery fluctuation, $v = \bar v + v'$, and average the equations of change over time. The averaging kills the fluctuation *by itself* ($\overline{v'} = 0$), but it does **not** kill products of fluctuations. A term like $\overline{v_x' v_y'}$ survives — because when the sideways gust $v_y'$ and the streamwise gust $v_x'$ are correlated (a parcel thrown toward the wall tends to carry slow fluid), their product has a nonzero average. That surviving correlation *is* the turbulent flux. It is new physics the mean equations didn't have before.

The final idea is the payoff. Model those correlations as gradient transport — flux $= -(\text{diffusivity})\times\text{gradient}$, the one law again — with **eddy diffusivities** $\nu_t, \alpha_t, D_t$. Since the *same* eddy carries momentum, heat, and mass together, the three eddy diffusivities are nearly equal. The molecular $Pr$ and $Sc$, which measure how differently molecules carry the three, become almost irrelevant. The analogy gets *better*.

## The formal version

**Reynolds decomposition.** Write each field as mean plus fluctuation,
$$v_x = \bar v_x + v_x', \qquad T = \bar T + T', \qquad c_A = \bar c_A + c_A',$$
where the overbar is a time average and the prime is the fluctuation about it, with $\overline{v_x'} = \overline{T'} = \overline{c_A'} = 0$ by construction. *In words: peel every quantity into its steady part and its jitter.*

Substitute into the equations of change ([2.4](02-04-equation-of-motion-navier-stokes.md), [2.5](02-05-energy-equation-of-change.md), [2.6](02-06-species-continuity-equation.md)) and average. The linear terms just get overbars, but each convective term hides a product of fluctuations that does **not** average away. The averaged fluxes across a plane of constant $y$ pick up new, purely turbulent contributions:

$$\underbrace{\bar\tau_{yx}^{(t)} = \rho\,\overline{v_y' v_x'}}_{\text{turbulent momentum flux}}, \qquad \underbrace{\bar q_y^{(t)} = \rho c_p\,\overline{v_y' T'}}_{\text{turbulent heat flux}}, \qquad \underbrace{\bar N_{A,y}^{(t)} = \overline{v_y' c_A'}}_{\text{turbulent mass flux}}.$$

The momentum one, $-\rho\,\overline{v_x' v_y'}$, is the celebrated **Reynolds stress** (units $\mathrm{Pa}$): eddies transporting streamwise momentum in the $y$-direction act on the mean flow exactly like an extra shear stress. *In words: the correlated gusts behave as new stresses and fluxes that no molecular property produced — the eddies themselves are doing the carrying.*

**Eddy diffusivities.** Model each turbulent flux as gradient transport of the *mean* field, defining eddy diffusivities $\nu_t, \alpha_t, D_t$ (all units $\mathrm{m^2\,s^{-1}}$):
$$\overline{v_y' v_x'} = -\nu_t\,\frac{d\bar v_x}{dy}, \qquad \overline{v_y' T'} = -\alpha_t\,\frac{d\bar T}{dy}, \qquad \overline{v_y' c_A'} = -D_t\,\frac{d\bar c_A}{dy}.$$
The **total** flux is then molecular plus turbulent, side by side:
$$\bar\tau_{yx} = -\rho(\nu + \nu_t)\frac{d\bar v_x}{dy}, \quad \bar q_y = -\rho c_p(\alpha + \alpha_t)\frac{d\bar T}{dy}, \quad \bar N_{A,y} = -(D_{AB} + D_t)\frac{d\bar c_A}{dy}.$$
*In words: same one flux law — just add an eddy diffusivity to the molecular one.* But the eddy diffusivities differ from their molecular partners in two decisive ways: (1) they are properties **of the flow**, not of the fluid — they vanish at a wall, peak in the core, and grow with $Re$; and (2) in the turbulent bulk they are **orders of magnitude larger** than $\nu, \alpha, D_{AB}$.

**The clincher — turbulent $Pr_t$ and $Sc_t$.** Define the turbulent Prandtl and Schmidt numbers,
$$Pr_t = \frac{\nu_t}{\alpha_t}, \qquad Sc_t = \frac{\nu_t}{D_{AB,t}} \equiv \frac{\nu_t}{D_t}.$$
Because a single eddy carries momentum, heat, and species in the *same* parcel of fluid, $\nu_t \approx \alpha_t \approx D_t$, so
$$Pr_t \approx Sc_t \approx 1 \quad (\text{measured } \approx 0.7\text{–}0.9).$$
*In words: the eddies don't discriminate — they move all three the same way — so the turbulent versions of the ratios that plagued laminar analysis are all near one.* This is the whole reason **the transport analogies get better in turbulence**: the molecular $Pr, Sc$ that forced the awkward $Pr^{1/3}, Sc^{1/3}$ corrections only matter in the razor-thin near-wall sublayer where eddies die and molecules take over again.

**The closure problem.** We bought simplicity at a price. Averaging created new unknowns — $\overline{v_x' v_y'}$, $\overline{v_y' T'}$, and their kin — but no new equations. The averaged equations are not closed; they need a *model* for the eddy diffusivities. The simplest is Prandtl's **mixing length**, $\nu_t = \ell^2\,\lvert d\bar v_x/dy\rvert$ (a parcel travels a distance $\ell$ before mixing, like a mean free path for eddies); modern CFD uses two-equation models such as **k–ε**. All of them are empirical closures, not derivations — this is the unsolved heart of turbulence, and we only name it here.

**The law of the wall.** One robust experimental fact survives all the modeling. Nondimensionalize velocity and distance with the **friction velocity** $u_* = \sqrt{\tau_w/\rho}$ (units $\mathrm{m/s}$, built from the wall shear stress $\tau_w$), defining $u^+ = \bar v_x/u_*$ and $y^+ = y\,u_*/\nu$. Across an enormous range of turbulent wall flows the mean profile in the log-law region collapses onto a single **universal velocity profile**:
$$u^+ = \frac{1}{\kappa}\ln y^+ + B, \qquad \kappa \approx 0.41,\ B \approx 5.0.$$
*In words: measured in wall units, every turbulent boundary layer has the same logarithmic velocity profile* — stated here, derived in a fluids course. Very near the wall ($y^+ \lesssim 5$) eddies are choked off and $u^+ = y^+$ (the viscous sublayer, where molecular transport rules); the log law takes over beyond it.

## Picture

![A turbulent boundary layer: the full mean velocity profile rising steeply from the wall, a fluctuation v-prime overlaid, an eddy looping and carrying a single parcel down the gradient, the parcel labeled as carrying momentum, heat, and species together, with the viscous sublayer and log-law region marked](assets/05-04-fig1.svg)

The mean profile is *full* — steep at the wall, flat in the core — because eddies keep mixing fast core fluid down toward the wall. One eddy lifts a parcel from the fast, warm, species-rich outer flow and drops it near the wall, delivering momentum, heat, and mass in a single package. That is why $\nu_t \approx \alpha_t \approx D_t$: it is literally the same parcel. All the molecular action is squeezed into the thin viscous sublayer against the wall.

## Worked examples

**Example 1 (eddies vs. molecules: how big is $\nu_t/\nu$?).** Use Prandtl's mixing length to estimate the turbulent momentum diffusivity in the log-law region of a pipe flow, and compare it to the molecular value.

*Step 1 — the mixing length and the mean gradient.* Near the wall the eddies scale with distance from it, so Prandtl took $\ell = \kappa y$. Differentiating the log law $\bar v_x = u_*\big(\tfrac1\kappa\ln y^+ + B\big)$ gives the mean shear
$$\frac{d\bar v_x}{dy} = \frac{u_*}{\kappa y}.$$

*Step 2 — assemble $\nu_t$.* With $\nu_t = \ell^2\,\lvert d\bar v_x/dy\rvert$,
$$\nu_t = (\kappa y)^2\cdot\frac{u_*}{\kappa y} = \kappa\,y\,u_*.$$

*Step 3 — the ratio.* Divide by the molecular $\nu$ and recognize $y^+ = y u_*/\nu$:
$$\frac{\nu_t}{\nu} = \frac{\kappa\,y\,u_*}{\nu} = \kappa\,y^+.$$
At $y^+ = 150$ (well inside the log layer of a typical pipe), $\nu_t/\nu = 0.41\times150 \approx 62$; at $y^+ = 1000$, it is $\approx 410$. Eddy transport outguns molecular transport by **one to three orders of magnitude** through most of the flow.

*Why $h$ and $k_c$ are large.* The wall flux is $\bar\tau_{yx} = -\rho(\nu+\nu_t)\,d\bar v_x/dy$, and the same $(\alpha+\alpha_t)$, $(D_{AB}+D_t)$ appear for heat and mass. Once $\nu_t \gg \nu$, the effective diffusivity — and with it the transport coefficient — is set by the flow, not the fluid, and it is huge. This is the quantitative reason turbulent $h$ and $k_c$ tower over their laminar values (Example 2 of [3.4](03-04-forced-convection-transport-coefficients.md) already showed a turbulent $k_c$ beating the laminar one).

*Check.* $[\nu_t] = [\kappa\,y\,u_*] = (\text{–})\cdot\mathrm{m}\cdot\mathrm{m/s} = \mathrm{m^2/s}$ ✓, correct for a diffusivity. $\nu_t \to 0$ as $y \to 0$ ✓ — eddies vanish at the wall, exactly as required.

**Example 2 (why the analogies sharpen in turbulence).** Argue from $Pr_t \approx Sc_t \approx 1$ that the Reynolds and Chilton–Colburn analogies ([5.1](05-01-transport-analogies.md)) are *more* accurate for turbulent flow than for laminar flow.

*The resistances in series.* Momentum, heat, and mass each cross two regions to reach the wall: the turbulent **core**, then the thin **viscous sublayer**. In the core, transport is by eddies with $Pr_t \approx Sc_t \approx 1$ — the three species travel *identically*, which is exactly the condition the Reynolds analogy $St = C_f/2$ demands. So the core contributes **no** discrepancy between momentum, heat, and mass.

*Where the mismatch lives.* Only in the sublayer does molecular transport rule, and there the real $Pr$ and $Sc$ (which are not equal to 1) make heat and mass lag momentum by different amounts. The Chilton–Colburn factors $Pr^{2/3}$ and $Sc^{2/3}$ in $j_H = j_D = C_f/2$ are precisely the corrections for that sublayer mismatch — and that sublayer is a *thin sliver* of the flow.

*The trend.* As $Re$ rises, the viscous sublayer thins ($y^+_{\text{sublayer}} \approx 5$ is fixed in wall units, so its physical thickness $\approx 5\nu/u_*$ shrinks as $u_*$ grows). The molecular-controlled fraction of the total resistance therefore shrinks, and the flow approaches the ideal $Pr_t = Sc_t = 1$ limit where the bare Reynolds analogy $St = C_f/2$ holds *exactly*. In **laminar** flow the opposite is true: the *entire* layer is molecular, the full $Pr, Sc$ dependence is in play, and the simple Reynolds analogy fails unless $Pr = Sc = 1$ exactly — you are stuck with the awkward $Pr^{1/3}$ corrections everywhere.

*Conclusion.* Turbulence confines the molecular idiosyncrasies to a vanishing sublayer and lets the indiscriminate eddies dominate — so the momentum–heat–mass analogy, born approximate, becomes asymptotically exact. The regime with no analytic solution is the regime where the analogy you *can* write down works best.

*Check.* The logic is consistent with the correlations: Dittus–Boelter's mass twin $Sh = 0.023\,Re^{0.8}Sc^{1/3}$ shares the identical $0.023\,Re^{0.8}$ skeleton with its heat original ([3.4](03-04-forced-convection-transport-coefficients.md)) — the $Re$-part (the eddies) is common, and only a weak $Sc^{1/3}$ sublayer correction distinguishes them. ✓

## Watch out

- **You might think averaging the equations makes turbulence tractable.** It doesn't — it creates the **closure problem**. The averages $\overline{v_x' v_y'}$ are new unknowns with no new equations, which is why every practical turbulence result rests on an empirical model (mixing length, k–ε), not a first-principles solution.
- **You might think $\nu_t, \alpha_t, D_t$ are fluid properties like $\nu, \alpha, D_{AB}$.** They are properties **of the flow**: zero at the wall, large in the core, growing with $Re$, and different at every point in the field. You cannot look them up in a table the way you look up a viscosity.
- **You might think turbulence, being chaotic, wrecks the clean analogy.** The reverse: because one eddy carries all three quantities in the same parcel, $Pr_t \approx Sc_t \approx 1$ and the analogy is *sharper* in turbulent flow than laminar. Chaos in the velocity field buys you order in the transport correspondence.
- **You might think the log law is derived here.** It is an experimentally universal *statement*, not a derivation — a robust empirical collapse in wall units $u^+, y^+$ that any turbulence model must reproduce.

## One-liner

> In turbulence, eddies replace molecules as the carrier — bulk parcels haul momentum, heat, and mass together, so the eddy diffusivities collapse ($Pr_t \approx Sc_t \approx 1$) and the transport analogy is at its most exact right where the flow is at its messiest.

## Problems

**P1 (🟢)** In the log-law region of a turbulent pipe flow, the mixing-length model gives $\nu_t = \kappa\,y\,u_*$ with $\kappa = 0.41$. For water ($\nu = 1.0\times10^{-6}\ \mathrm{m^2/s}$) flowing with friction velocity $u_* = 0.05\ \mathrm{m/s}$, evaluate $\nu_t$ and the ratio $\nu_t/\nu$ at a point $y = 2\ \mathrm{mm}$ from the wall. By roughly what factor do eddies beat molecular momentum diffusion there?

**P2 (🟡)** A turbulent gas stream has $Pr = 0.70$ and $Sc = 0.60$ (molecular values), but its turbulent core has $Pr_t = Sc_t = 0.85$. Explain, in two or three sentences, why a single Chilton–Colburn correlation $j_H = j_D = C_f/2$ predicts *both* the heat- and mass-transfer coefficients well here, whereas in a **laminar** boundary layer the analogous prediction would carry a $(Sc/Pr)^{1/3}$ error between them. Which region of the flow is responsible for the residual difference?

**P3 (🔴)** The viscous sublayer extends to about $y^+ = 5$, i.e. physical thickness $\delta_{\text{sub}} \approx 5\nu/u_*$. For air ($\nu = 1.5\times10^{-5}\ \mathrm{m^2/s}$) in a duct with $u_* = 0.6\ \mathrm{m/s}$, find $\delta_{\text{sub}}$. Then, using $\nu_t = \kappa\,y\,u_*$, find the distance $y$ at which the eddy diffusivity first equals the molecular one ($\nu_t = \nu$), and comment on how it compares to $\delta_{\text{sub}}$.

<details>
<summary>Solutions</summary>

**P1** Directly,
$$\nu_t = \kappa\,y\,u_* = 0.41 \times (2\times10^{-3}) \times 0.05 = 4.1\times10^{-5}\ \mathrm{m^2/s}.$$
The ratio is
$$\frac{\nu_t}{\nu} = \frac{4.1\times10^{-5}}{1.0\times10^{-6}} = 41.$$
Equivalently $y^+ = y u_*/\nu = (2\times10^{-3})(0.05)/(10^{-6}) = 100$, and $\nu_t/\nu = \kappa y^+ = 0.41\times100 = 41$ ✓. Eddies move momentum roughly **40 times** faster than molecular diffusion at this point.

*Check.* $[\nu_t] = \mathrm{m}\cdot\mathrm{m/s} = \mathrm{m^2/s}$ ✓; the ratio is dimensionless and $\gg 1$, as expected in the log layer. ✓

**P2** In the turbulent core, eddies carry momentum, heat, and mass in the same parcels, so $Pr_t \approx Sc_t \approx 0.85 \approx 1$ — the three transports are nearly identical there, which is exactly the condition the Reynolds/Chilton–Colburn analogy requires, so the core contributes no mismatch between $h$ and $k_c$. The molecular $Pr = 0.70$ and $Sc = 0.60$ differ from each other (and from 1) only in the **thin viscous sublayer**, and that sliver is all the $Pr^{2/3}, Sc^{2/3}$ factors need to correct — a small, well-behaved fix. In a laminar boundary layer, by contrast, the *entire* layer is molecular, so the full $(Sc/Pr)^{1/3} = Le^{-1/3}$ discrepancy between heat and mass acts across the whole flow, not just a sublayer — the analogy is intrinsically less accurate. The residual difference in the turbulent case lives entirely in the viscous sublayer.

**P3** Sublayer thickness:
$$\delta_{\text{sub}} \approx \frac{5\nu}{u_*} = \frac{5\times(1.5\times10^{-5})}{0.6} = 1.25\times10^{-4}\ \mathrm{m} = 0.125\ \mathrm{mm}.$$
Crossover where $\nu_t = \nu$: set $\kappa\,y\,u_* = \nu$, so
$$y = \frac{\nu}{\kappa\,u_*} = \frac{1.5\times10^{-5}}{0.41\times0.6} = 6.1\times10^{-5}\ \mathrm{m} = 0.061\ \mathrm{mm}.$$
In wall units, $y^+ = y u_*/\nu = 1/\kappa = 2.4$ — the eddy diffusivity catches up to the molecular one at about $y^+ \approx 2.4$, *inside* the nominal sublayer edge at $y^+ = 5$. So eddies overtake molecular diffusion right at the outer part of the sublayer, and everywhere beyond it ($y^+ \gtrsim 5$) turbulent transport dominates — consistent with the picture that molecular transport is confined to a very thin wall film.

*Check.* Both lengths are sub-millimeter and $\delta_{\text{sub}} > y_{\text{crossover}}$ ✓; the crossover at $y^+ = 1/\kappa \approx 2.4$ is a clean, geometry-independent result of the mixing-length form. ✓

</details>

## Flashback

**From Lesson 5.1 (The transport analogies):** Air flows over a flat plate; a friction measurement gives a skin-friction coefficient $C_f = 6.0\times10^{-3}$. A trace species (naphthalene vapor) sublimes from the surface into the air, with $Sc = 2.5$ for that species. Use the **Chilton–Colburn analogy** $j_D = St_m\,Sc^{2/3} = C_f/2$ to find the mass-transfer Stanton number $St_m$. Would the plain Reynolds analogy ($St_m = C_f/2$, no $Sc$ correction) over- or under-predict $St_m$ here, and why?

<details>
<summary>Solution</summary>

Chilton–Colburn for mass: $St_m\,Sc^{2/3} = C_f/2$, so
$$St_m = \frac{C_f/2}{Sc^{2/3}} = \frac{3.0\times10^{-3}}{(2.5)^{2/3}}.$$
Now $(2.5)^{2/3} = (2.5^2)^{1/3} = 6.25^{1/3} = 1.84$, so
$$St_m = \frac{3.0\times10^{-3}}{1.84} = 1.63\times10^{-3}.$$
The **plain Reynolds analogy** would set $St_m = C_f/2 = 3.0\times10^{-3}$, i.e. it drops the $Sc^{2/3}$ divisor and **over-predicts** $St_m$ by the factor $Sc^{2/3} = 1.84$ (about 84%). The reason ties straight into this lesson: the Reynolds analogy assumes $Sc = 1$ (the species diffuses molecularly just like momentum), but here $Sc = 2.5 > 1$ — naphthalene diffuses *more slowly* than momentum in the near-wall region, so the true mass transfer is smaller. Chilton–Colburn's $Sc^{2/3}$ factor is exactly the sublayer correction for that mismatch.

*Check.* $St_m$ is dimensionless and smaller than $C_f/2$, as it must be when $Sc > 1$ ✓. Had $Sc = 1$, the two analogies would coincide — the ideal turbulent-core limit of this lesson. ✓

</details>

## Connections

- **Backward:** this closes the loop opened in [1.1](01-01-one-flux-law-three-transports.md) — the single law flux $= -(\text{diffusivity})\times\text{gradient} $ still holds, now with an *eddy* diffusivity added to the molecular one. The turbulent momentum/heat/mass fluxes are the averaged equations of change ([2.4](02-04-equation-of-motion-navier-stokes.md), [2.5](02-05-energy-equation-of-change.md), [2.6](02-06-species-continuity-equation.md)) carrying new correlation terms, and $Pr_t \approx Sc_t \approx 1$ is why the analogies of [5.1](05-01-transport-analogies.md) and the wet-bulb reasoning of [5.3](05-03-simultaneous-heat-mass-transfer.md) are so robust in real flows.
- **Sideways:** the eddy cascade, mixing length, and law of the wall belong to [`fluid-dynamics` 4.4](../../fluid-dynamics/lessons/04-04-transition-to-turbulence.md)–[4.5](../../fluid-dynamics/lessons/04-05-turbulence-kolmogorov.md); the mixing length $\ell$ is to eddies what the mean free path $\lambda$ ([1.4](01-04-transport-properties-kinetic-theory.md)) is to molecules — the same $\mu \approx \tfrac13\rho\bar c\lambda$ logic, one tier up.
- **Forward (beyond this course):** the **closure problem** — modeling $\overline{v_x' v_y'}$ — is the entire subject of turbulence modeling (RANS, k–ε, LES) in a CFD or advanced-transport course. And the eddy-diffusivity picture reappears wherever chaotic stirring dominates molecular diffusion: turbulent combustion, atmospheric dispersion, and stellar convection. This is where the laminar tidiness of the whole course finally ends — and, fittingly, where its central analogy is truest.

---

*Course complete.* Twenty-five lessons ago transport was three separate subjects; it ends as one flux law wearing three costumes — and turbulence, the least tractable flow of all, is where the costumes match most closely.
