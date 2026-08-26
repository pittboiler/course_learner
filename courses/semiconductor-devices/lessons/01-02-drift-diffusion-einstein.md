# Semiconductor Devices · Lesson 1.2: Drift, diffusion and the Einstein relation

> ⏱ ~15 min · Module 1: Carriers and transport · Builds on: [1.1 Carriers, doping and the Fermi level](01-01-carriers-doping-fermi-level.md), [`condensed-matter` 4.4](../../condensed-matter/lessons/04-04-transport-mobility-hall.md) · Unlocks: [1.3 Generation and recombination](01-03-generation-recombination.md), [1.4 The continuity equations](01-04-continuity-equations.md)

## Why this matters

[1.1](01-01-carriers-doping-fermi-level.md) counted carriers at equilibrium. Equilibrium devices are called resistors. Everything else — every diode, transistor, solar cell — works by pushing carriers *out* of equilibrium and harvesting the current that flows back.

There are exactly two ways to make carriers move, and a device engineer's whole vocabulary is built from them. **Drift** is a field pushing charge; you know it as Ohm's law, and [`condensed-matter` 4.4](../../condensed-matter/lessons/04-04-transport-mobility-hall.md) derived it from scattering. **Diffusion** is a concentration gradient spreading charge, and it has no analogue in ordinary circuit theory at all — it is the mechanism that makes a p–n junction work, and it is genuinely new here.

The lesson's punchline is that these two are not independent. One relation, [Einstein's](../reference.md#einstein-relation), ties them together with nothing but $k_BT/q$, and that single factor of 26 mV turns up in the diode equation, the subthreshold slope of every MOSFET, and the thermal-voltage constant on every datasheet.

## The idea

**Drift** is the familiar one. Apply a field, carriers accelerate, they scatter after an average time $\tau$, and the result is a steady average velocity proportional to the field: $v_d = \mu\mathcal{E}$. All the microscopic mess is buried in one number, the mobility.

**Diffusion** needs no field at all. If carriers are denser on the left than the right, then purely because more of them are wandering rightward from the crowded side than leftward from the sparse side, there is a net rightward flux. Nothing pushes them; they are simply spreading. The flux is proportional to the *gradient*, not to the concentration.

Now the connection. Put a semiconductor in the dark, in equilibrium, with non-uniform doping — say heavily doped on the left, lightly on the right. Electrons diffuse rightward. But as they leave, they expose fixed positive donors on the left, building a field that pulls them back. Equilibrium means **exactly zero net current**, so the drift and diffusion currents must cancel *pointwise*. Impose that, and out falls a rigid relationship between $D$ and $\mu$:

$$D = \frac{k_BT}{q}\mu.$$

It is not a coincidence or an approximation. Both processes are the same random thermal motion viewed two ways — mobility measures how that motion responds to a push, diffusivity measures how it spreads a crowd — so the same $k_BT$ that sets the thermal energy links them.

Finally, once carriers are out of equilibrium, the single Fermi level of [1.1](01-01-carriers-doping-fermi-level.md) can no longer describe both populations. Electrons and holes fall out of equilibrium *with each other*, so each gets its own **quasi-Fermi level**. Their separation is the single best measure of how hard a device is being driven — and in a solar cell, it literally *is* the voltage you can extract.

## The formal version

**Drift.** From [`condensed-matter` 4.4](../../condensed-matter/lessons/04-04-transport-mobility-hall.md), scattering with mean free time $\tau$ gives

$$v_d = \mu\mathcal{E}, \qquad \mu = \frac{q\tau}{m^*},$$

$$J_n^{\rm drift} = qn\mu_n\mathcal{E}, \qquad J_p^{\rm drift} = qp\mu_p\mathcal{E}, \qquad \sigma = q(n\mu_n+p\mu_p).$$

*In words: current density is charge times density times drift velocity — and both carrier types drift in the same direction of current despite moving oppositely, because their charges are opposite too.*

**Diffusion (the new part).** Fick's law applied to charge:

$$\boxed{\;J_n^{\rm diff} = +qD_n\frac{dn}{dx}, \qquad J_p^{\rm diff} = -qD_p\frac{dp}{dx}.\;}$$

*In words: carriers flow down their concentration gradient, and the sign difference is because electrons carry negative charge — so an electron flux to the right is a current to the left.* Getting these two signs right is the single most common error in the subject; the Watch out section gives the check.

**Total current.**

$$J_n = qn\mu_n\mathcal{E}+qD_n\frac{dn}{dx}, \qquad J_p = qp\mu_p\mathcal{E}-qD_p\frac{dp}{dx}, \qquad J = J_n+J_p.$$

These two lines, plus Poisson's equation and the continuity equations of [1.4](01-04-continuity-equations.md), are the **complete** set of semiconductor device equations. Everything in the remaining seventeen lessons is a special case.

**The Einstein relation.** Take a non-uniformly doped sample in equilibrium. Equilibrium requires $J_n = 0$ everywhere, so

$$qn\mu_n\mathcal{E} = -qD_n\frac{dn}{dx}.$$

In equilibrium $E_F$ is flat, and from [1.1](01-01-carriers-doping-fermi-level.md), $n = n_ie^{(E_F-E_i)/k_BT}$. Since the bands bend with the electrostatic potential, $E_i(x) = -q\psi(x)+\text{const}$, and with $\mathcal{E} = -d\psi/dx$:

$$\frac{dn}{dx} = n\cdot\frac{d}{dx}\left(\frac{E_F-E_i}{k_BT}\right) = n\cdot\frac{q}{k_BT}\frac{d\psi}{dx} = -\frac{qn}{k_BT}\mathcal{E}.$$

Substituting:

$$qn\mu_n\mathcal{E} = -qD_n\left(-\frac{qn}{k_BT}\mathcal{E}\right) \quad\Longrightarrow\quad \mu_n = \frac{q D_n}{k_BT},$$

$$\boxed{\;\frac{D}{\mu} = \frac{k_BT}{q} \equiv V_T = 0.0259\ \mathrm{V\ at\ 300\ K}.\;}$$

*In words: the diffusivity and the mobility are the same physics in different units, converted by the thermal voltage.* $V_T$ — the **thermal voltage** — is the most important constant in the course.

**Quasi-Fermi levels.** Out of equilibrium, define $F_n$ and $F_p$ by

$$n = n_ie^{(F_n-E_i)/k_BT}, \qquad p = n_ie^{(E_i-F_p)/k_BT} \quad\Longrightarrow\quad np = n_i^2\,e^{(F_n-F_p)/k_BT}.$$

*In words: keep the equilibrium formulas but give each carrier its own reference level; their separation measures the departure from equilibrium.*

- Equilibrium: $F_n = F_p = E_F$, and $np = n_i^2$ ✓ — mass action recovered.
- Forward-biased junction or illuminated cell: $F_n > F_p$, so $np > n_i^2$ (excess carriers).
- Reverse-biased or depleted region: $F_n < F_p$, so $np < n_i^2$ (carriers swept out).

And the payoff identity: the total current of *each* carrier is proportional to the gradient of *its own* quasi-Fermi level,

$$J_n = n\mu_n\frac{dF_n}{dx}, \qquad J_p = p\mu_p\frac{dF_p}{dx}.$$

*In words: drift and diffusion collapse into one term — the slope of the quasi-Fermi level is the driving force.* A flat quasi-Fermi level means zero current for that carrier, whatever the field and gradient are doing individually. This is the fastest way to read a biased band diagram, and [2.2](02-02-ideal-diode-equation.md) leans on it.

**Mobility is not a constant.** Two dependencies matter for devices.

*Doping.* Ionized impurities scatter, so mobility falls as doping rises. For silicon at 300 K:

| $N$ (cm$^{-3}$) | $\mu_n$ | $\mu_p$ | $D_n$ | $D_p$ |
|---|---|---|---|---|
| $\le10^{15}$ | 1350 | 480 | 34.9 | 12.4 |
| $10^{16}$ | 1200 | 400 | 31.1 | 10.4 |
| $10^{17}$ | 800 | 300 | 20.7 | 7.8 |
| $10^{18}$ | 350 | 150 | 9.1 | 3.9 |
| $10^{19}$ | 150 | 75 | 3.9 | 1.9 |

(Units: $\mu$ in cm²/V·s, $D$ in cm²/s. Recall from [1.1](01-01-carriers-doping-fermi-level.md) P3 that it is the **total** ionized impurity count that scatters, not the net.)

*Field.* At low fields $v_d = \mu\mathcal{E}$; but the drift velocity cannot exceed the thermal velocity scale, and above about $10^4$ V/cm in silicon it **saturates**:

$$v_{\rm sat}\approx1\times10^{7}\ \mathrm{cm/s}\ \text{(electrons in Si)}.$$

*In words: past a critical field, pushing harder stops making carriers faster.* A modern MOSFET with 1 V across a 20 nm channel sees $5\times10^5$ V/cm — fifty times the critical field — so it operates **entirely** in velocity saturation, and the square-law model of [3.5](03-05-mosfet-iv.md) is wrong for it. This is one of the central facts of [3.6](03-06-short-channel-effects-scaling.md).

## Picture

![Two panels. Left: a bar of semiconductor with carriers denser on the left, arrows showing electrons diffusing rightward down the gradient while the exposed fixed donor charge builds a field that drives a leftward drift, with the two current arrows drawn equal and opposite and labelled J_drift + J_diff = 0. Right: a band diagram under forward bias showing E_i bending, with two separate dashed quasi-Fermi levels F_n and F_p split apart by qV, and the separation labelled as the measure of departure from equilibrium.](assets/01-02-fig1.svg)

Left is the Einstein derivation as a picture: in equilibrium the diffusion flux and the drift flux are not merely both present, they cancel **pointwise**, and demanding that cancellation is what forces $D/\mu = k_BT/q$. Right is the quasi-Fermi picture you will use for the rest of the course: one flat $E_F$ becomes two levels, and their separation $F_n-F_p$ is $qV$ across a forward-biased junction. A device is doing work exactly when those two levels are pulled apart.

## Worked examples

**Example 1 (which mechanism wins, and where).** An $n$-type silicon bar doped $N_d = 10^{16}\ \mathrm{cm^{-3}}$ carries a hole population that falls from $\delta p = 10^{14}\ \mathrm{cm^{-3}}$ at $x=0$ to zero over 10 µm, linearly. A field of 10 V/cm is also applied. Compare the hole drift and diffusion currents.

*Diffusion.* At $N_d = 10^{16}$, $D_p = 10.4\ \mathrm{cm^2/s}$. The gradient is

$$\frac{dp}{dx} = \frac{0-10^{14}}{10\times10^{-4}\ \mathrm{cm}} = -1\times10^{17}\ \mathrm{cm^{-4}}.$$

$$J_p^{\rm diff} = -qD_p\frac{dp}{dx} = -(1.602\times10^{-19})(10.4)(-1\times10^{17}) = 0.167\ \mathrm{A/cm^2}.$$

*Drift.* The hole density is the *excess* $\delta p$ plus the equilibrium $p_0 = n_i^2/N_d = 10^4\ \mathrm{cm^{-3}}$ — utterly negligible. Take $p\approx 10^{14}$ at $x=0$, with $\mu_p = 400$:

$$J_p^{\rm drift} = qp\mu_p\mathcal{E} = (1.602\times10^{-19})(10^{14})(400)(10) = 6.4\times10^{-2}\ \mathrm{A/cm^2}.$$

Diffusion beats drift by 2.6× here. *At what field would they tie?* Setting them equal at $x=0$:

$$\mathcal{E} = \frac{D_p}{\mu_p}\cdot\frac{1}{p}\left|\frac{dp}{dx}\right| = V_T\frac{1}{p}\left|\frac{dp}{dx}\right| = 0.0259\times\frac{10^{17}}{10^{14}} = 25.9\ \mathrm{V/cm}.$$

Note how the Einstein relation collapsed the whole comparison into $V_T$ times the fractional gradient — **drift and diffusion balance when the potential drops by about $V_T$ over one gradient scale length**. That is a rule of thumb worth carrying: 26 mV per decay length is the natural unit of "field" in semiconductor transport.

*Which dominates in a real diode?* In the neutral regions of a forward-biased diode the field is tiny (they are quasi-neutral, near-zero resistance) while minority gradients are steep — so **minority-carrier transport is essentially pure diffusion**. That is the assumption that makes [2.2](02-02-ideal-diode-equation.md)'s derivation tractable. Inside the depletion region the opposite holds: fields of $10^4$–$10^5$ V/cm and drift dominates completely.

**Example 2 (quasi-Fermi splitting as a voltage).** A silicon solar cell is doped $N_a = 10^{17}\ \mathrm{cm^{-3}}$ on the illuminated side. Under one sun, illumination raises the minority electron concentration to $n = 10^{13}\ \mathrm{cm^{-3}}$. Find the quasi-Fermi splitting.

*Carrier concentrations.* Majority holes are essentially unchanged (adding $10^{13}$ electron–hole pairs to $10^{17}$ holes is a 0.01% perturbation — this is **low-level injection**, the assumption that makes almost everything in this course linear):

$$p \approx 10^{17}, \qquad n = 10^{13} \quad\text{(against an equilibrium } n_0 = n_i^2/N_a = 10^3).$$

*Splitting.* From $np = n_i^2e^{(F_n-F_p)/k_BT}$:

$$F_n-F_p = k_BT\ln\frac{np}{n_i^2} = 0.0259\ln\frac{(10^{13})(10^{17})}{10^{20}} = 0.0259\ln(10^{10}) = 0.0259(23.03) = 0.596\ \mathrm{eV}.$$

*The interpretation, which is the whole point.* That 0.596 eV **is** the open-circuit voltage the cell can deliver: $V_{oc} = (F_n-F_p)/q = 0.596$ V. A real silicon cell delivers 0.6–0.7 V, and this calculation is why.

Notice what set it. The electron concentration rose by ten orders of magnitude ($10^3\to10^{13}$) and the hole concentration did not move at all — so essentially the entire splitting came from the **minority** carrier. That is the general rule: *illumination and forward bias act on the minority carrier, and the majority carrier just watches.* It is also why [4.3](04-03-solar-cell.md) shows $V_{oc}$ rising only logarithmically with light intensity — ten times the sunlight raises $n$ tenfold, which adds only $k_BT\ln10 = 60$ mV.

## Watch out

- **You might get the diffusion sign wrong.** The check: carriers always flow *down* their gradient, so for holes (positive) the current follows the flux and picks up a minus sign against $dp/dx$; for electrons (negative) the current opposes the flux, and the two minus signs cancel to a plus. Memorize the pair $J_p = -qD_p\,dp/dx$, $J_n = +qD_n\,dn/dx$ and check the physics rather than the algebra.
- **You might think $D$ and $\mu$ are independent material parameters to look up.** They are one parameter. Given either, the other follows from $D = V_T\mu$ exactly — the Einstein relation is a theorem for non-degenerate carriers, not a fit. (It does acquire corrections at degenerate doping above $\sim10^{19}$, where Boltzmann statistics fail.)
- **You might carry $\mu_n = 1350$ everywhere.** That is the *lightly doped* value. At $10^{18}$ it is 350 — a factor of four. Device regions are usually heavily doped, so using the intrinsic-silicon mobility overestimates currents severely. Look it up in the table each time.
- **You might apply the square-law MOSFET model to a modern transistor.** Its channel field is far above $10^4$ V/cm, so carriers move at $v_{\rm sat}$ and current scales *linearly* with gate overdrive, not quadratically. See [3.6](03-06-short-channel-effects-scaling.md).
- **You might think quasi-Fermi levels are an approximation.** They are a *definition* — exact by construction. The approximation is assuming each carrier population is internally in equilibrium (true when intraband scattering, at ~1 ps, is far faster than recombination, at ~1 µs — a margin of a million).

## One-liner

> Fields push and gradients spread, but they are the same thermal motion seen twice, so $D = (k_BT/q)\mu$ — and the 26 mV thermal voltage that links them reappears in every device equation in this course.

## Problems

**P1 (🟢)** Silicon is doped $N_d = 10^{17}\ \mathrm{cm^{-3}}$. (a) Look up $\mu_n$ and find $D_n$ from the Einstein relation; check it against the table. (b) Find the conductivity and resistivity. (c) A field of 100 V/cm is applied. Find the electron drift velocity and the drift current density. (d) Is the sample in velocity saturation?

**P2 (🟡)** In an $n$-type region, the excess hole concentration decays exponentially: $\delta p(x) = \delta p(0)e^{-x/L}$ with $L = 20\ \mu$m and $\delta p(0) = 10^{14}\ \mathrm{cm^{-3}}$, with $D_p = 12\ \mathrm{cm^2/s}$. (a) Write $J_p^{\rm diff}(x)$. (b) Evaluate it at $x=0$ and at $x=L$. (c) Find the field that would make drift equal diffusion at $x=0$, and again at $x = L$. (d) Explain why the answer to (c) is the same at both points, and what that tells you about exponential profiles.

**P3 (🔴)** A silicon sample has a doping that varies exponentially: $N_d(x) = N_0e^{-x/\lambda}$ with $\lambda = 1\ \mu$m, $N_0 = 10^{18}\ \mathrm{cm^{-3}}$, in equilibrium and in the dark. (a) Show that a built-in field exists and find it. (b) Evaluate it numerically. (c) Explain how this field can exist with zero current flowing. (d) This is the operating principle of the **drift-field** (graded-base) bipolar transistor. Explain in two sentences why grading the base doping speeds the transistor up.

<details>
<summary>Solutions</summary>

**P1** (a) From the table at $10^{17}$: $\mu_n = 800\ \mathrm{cm^2/V\cdot s}$.

$$D_n = V_T\mu_n = 0.0259\times800 = 20.7\ \mathrm{cm^2/s} \ \checkmark \text{(matches the table)}.$$

(b) With $n = N_d = 10^{17}$ and negligible hole contribution:

$$\sigma = qn\mu_n = (1.602\times10^{-19})(10^{17})(800) = 12.8\ (\Omega\cdot\mathrm{cm})^{-1},$$

$$\rho = \frac{1}{\sigma} = 0.078\ \Omega\cdot\mathrm{cm}.$$

(c) $$v_d = \mu_n\mathcal{E} = 800\times100 = 8\times10^4\ \mathrm{cm/s},$$

$$J_n = qn v_d = (1.602\times10^{-19})(10^{17})(8\times10^4) = 1.28\times10^{3}\ \mathrm{A/cm^2}.$$

(Check: $J = \sigma\mathcal{E} = 12.8\times100 = 1280$ ✓.)

(d) No. $v_d = 8\times10^4$ cm/s is more than two orders of magnitude below $v_{\rm sat} = 10^7$ cm/s, and the field of 100 V/cm is a hundredth of the ~$10^4$ V/cm onset. Comfortably in the linear regime. (To saturate, this sample would need about $10^4$ V/cm — 1 V across 1 µm.)

**P2** (a) $\dfrac{d\,\delta p}{dx} = -\dfrac{\delta p(0)}{L}e^{-x/L}$, so

$$J_p^{\rm diff}(x) = -qD_p\frac{d\,\delta p}{dx} = \frac{qD_p\,\delta p(0)}{L}e^{-x/L}.$$

(b) At $x=0$, with $L = 20\times10^{-4}$ cm:

$$J_p^{\rm diff}(0) = \frac{(1.602\times10^{-19})(12)(10^{14})}{20\times10^{-4}} = \frac{1.922\times10^{-4}}{2\times10^{-3}} = 9.6\times10^{-2}\ \mathrm{A/cm^2}.$$

At $x=L$: multiply by $e^{-1} = 0.368$:

$$J_p^{\rm diff}(L) = 3.5\times10^{-2}\ \mathrm{A/cm^2}.$$

(c) Setting $qp\mu_p\mathcal{E} = |J_p^{\rm diff}|$ with $p\approx\delta p(x)$:

$$\mathcal{E} = \frac{D_p}{\mu_p}\frac{1}{\delta p}\left|\frac{d\,\delta p}{dx}\right| = V_T\cdot\frac{1}{L} = \frac{0.0259}{20\times10^{-4}} = 12.95\ \mathrm{V/cm}.$$

Same at both points: **13.0 V/cm**.

(d) Because for an exponential, the *fractional* gradient $\frac{1}{p}\frac{dp}{dx} = -\frac{1}{L}$ is **constant** — that is the defining property of an exponential. Both drift and diffusion currents fall off as $e^{-x/L}$, so their ratio never changes.

What this tells you: an exponential profile has a single characteristic field, $V_T/L$, at which drift and diffusion are comparable everywhere. Since $V_T = 26$ mV, a profile decaying over 1 µm has a characteristic field of 260 V/cm; over 20 µm, 13 V/cm. Long, gentle profiles are diffusion-dominated at any realistic field — which is precisely why the wide neutral regions of a diode are treated as pure diffusion in [2.2](02-02-ideal-diode-equation.md), while the sub-micron depletion region, with fields of $10^4$–$10^5$ V/cm, is pure drift.

**P3** (a) In equilibrium $J_n = 0$, so drift must cancel diffusion:

$$qn\mu_n\mathcal{E} = -qD_n\frac{dn}{dx} \quad\Longrightarrow\quad \mathcal{E} = -\frac{D_n}{\mu_n}\frac{1}{n}\frac{dn}{dx} = -V_T\frac{1}{n}\frac{dn}{dx}.$$

With $n\approx N_d(x) = N_0e^{-x/\lambda}$, the fractional gradient is $-1/\lambda$:

$$\boxed{\ \mathcal{E} = \frac{V_T}{\lambda}\ }$$

— a **constant** field, pointing in the $+x$ direction (toward the lightly doped end).

(b) $$\mathcal{E} = \frac{0.0259\ \mathrm{V}}{1\times10^{-4}\ \mathrm{cm}} = 259\ \mathrm{V/cm}.$$

(c) Because "zero current" does not mean "nothing is happening" — it means two large, opposite things cancel. Electrons continuously diffuse from the heavily doped end toward the lightly doped end; as they go they leave behind uncompensated fixed positive donor ions, which build up a field; that field drives an equal and opposite drift current back. The steady state is a dynamic balance with two big fluxes summing to zero, not a static absence of motion.

This is exactly the same mechanism as the built-in field of a p–n junction ([2.1](02-01-junction-electrostatics.md)) — a junction is just the extreme case where the doping gradient is abrupt and changes sign. And it is why $E_F$ is flat in equilibrium: a flat quasi-Fermi level *is* the statement $J_n = 0$, from the identity $J_n = n\mu_n\,dF_n/dx$.

(d) In a uniformly doped base, minority carriers cross by **diffusion only** — a random walk, whose transit time scales as $W_B^2/D$. Grading the base doping (heavy at the emitter, light at the collector) builds exactly the constant field derived above, which **drifts** the minority carriers across in addition to their diffusion, cutting the transit time substantially and raising the frequency at which the transistor still has gain.

The quantitative flavour: a base graded over $W_B$ with a doping ratio $\eta = N(0)/N(W_B)$ has a built-in field $\mathcal{E} = V_T\ln\eta/W_B$, and the transit time improves by roughly a factor of $\ln\eta$ for large grading. A decade of grading ($\ln 10 = 2.3$) is worth better than a factor of two in speed — for free, since it costs only a change in the implant profile, not a change in dimensions. Every high-frequency bipolar transistor since the 1960s has a graded base, and the modern SiGe heterojunction bipolar transistor grades the *band gap* as well to get a larger field still ([2.5](02-05-metal-semiconductor-heterojunctions.md)).

</details>

## Flashback

*(Retrieval practice starts in [1.3](01-03-generation-recombination.md) — this is the course's second lesson.)*

## Connections

- **Backward:** drift, $\mu = q\tau/m^*$ and $\sigma = q(n\mu_n+p\mu_p)$ come from [`condensed-matter` 4.4](../../condensed-matter/lessons/04-04-transport-mobility-hall.md); the carrier formulas being differentiated are [1.1](01-01-carriers-doping-fermi-level.md)'s.
- **Forward:** [1.3](01-03-generation-recombination.md) adds the sources and sinks these currents flow between; [1.4](01-04-continuity-equations.md) combines transport and recombination into the master equation; [2.2](02-02-ideal-diode-equation.md) solves it across a junction.
- **Sideways:** Fick's law and the Einstein relation are the same pair you meet in [`biophysics` 1.4](../../biophysics/lessons/01-04-einstein-relation.md) for molecules in solution and in [`stat-mech` 6.1](../../stat-mech/lessons/06-01-brownian-langevin.md) for Brownian motion — $D = \mu k_BT$ is a fluctuation–dissipation relation, and the semiconductor version is the same theorem with $q$ converting energy to volts.
