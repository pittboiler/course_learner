# Plasma Physics · Lesson 4.3: Electromagnetic & Alfvén waves

> ⏱ ~15 min · Module 4: Waves & instabilities · Builds on: [4.2 Ion-acoustic waves](04-02-ion-acoustic-waves.md), [3.3 Magnetic pressure, tension & plasma beta](03-03-magnetic-pressure-tension-beta.md) · Unlocks: [4.4 Instabilities: two-stream, drift & interchange](04-04-instabilities-two-stream-drift.md)

## Why this matters

Langmuir waves (4.1) ride charge separation; ion-acoustic waves (4.2) ride electron pressure. Both are things the *electric* field does. But once you magnetize the fluid — the MHD picture of Module 3 — a brand-new restoring force appears that has no electrostatic analogue at all: **magnetic tension**. In [3.3](03-03-magnetic-pressure-tension-beta.md) you saw that a curved field line pulls straight like a stretched string, with tension $B^2/\mu_0$. A stretched string under tension carries waves. So must a magnetized plasma — and it does. That wave, the **Alfvén wave**, is the single most important wave in space and astrophysics: it carries energy out of the Sun, heats the corona, shakes sunspots, and turns the solar wind into a sea of MHD turbulence. It is also how a tokamak "rings," and the tool (MHD spectroscopy) fusion physicists use to sound out a plasma's interior. This lesson derives it and completes the plasma's wave triad.

## The idea

Picture the frozen-in field of [3.2](03-02-ideal-mhd-frozen-flux.md): the plasma is threaded by magnetic field lines and glued to them, so the field lines are like taut strings running through a heavy fluid. Grab a bundle of these strings and pluck them *sideways*. Two things happen, exactly as for a guitar string. The tension $B^2/\mu_0$ wants to straighten the line — that's the **restoring force**. And the plasma frozen to the line has to be dragged along — its mass density $\rho$ is the **inertia**. Restoring force plus inertia equals oscillation, and an oscillation that can hand itself to the next bit of string equals a **wave travelling along the field**. That is the **shear Alfvén wave**: a transverse ripple running down $\mathbf{B}$, plucking the field lines like strings, at the **Alfvén speed** $v_A = B/\sqrt{\mu_0\rho}$.

The string analogy even gives you the speed for free. A string carries waves at $\sqrt{\text{tension}/\text{mass}}$. Per unit cross-section the field's tension is a stress $B^2/\mu_0$ (in pascals) and the mass is $\rho$ (in $\mathrm{kg/m^3}$), so the wave speed is $\sqrt{(B^2/\mu_0)/\rho} = B/\sqrt{\mu_0\rho} = v_A$. Everything below is just making that honest.

There is a second thing you can do to a magnetized plasma: instead of plucking the lines sideways, *squeeze* them. Now you compress the field (which fights back with magnetic pressure $B^2/2\mu_0$) **and** compress the plasma (which fights back with its thermal pressure) at the same time. Two restoring forces working together give a faster wave — the **fast magnetosonic wave** — and it can travel *across* the field, not just along it. A third combination gives the **slow magnetosonic wave**. Shear Alfvén, fast, and slow are the **MHD wave triad**: the complete set of small oscillations of a magnetized fluid.

## The formal version

**The linearized ideal-MHD equations.** Take a uniform plasma at rest: density $\rho_0$, pressure $p_0$, uniform field $\mathbf{B}_0 = B_0\hat{\mathbf z}$, and $\mathbf{v}_0 = 0$. Nudge it: $\mathbf{v} = \mathbf{v}_1$, $\mathbf{B} = \mathbf{B}_0 + \mathbf{B}_1$, with all perturbations small and $\propto e^{i(\mathbf{k}\cdot\mathbf{x} - \omega t)}$. The two equations that carry the magnetic physics are the momentum and induction equations of ideal MHD ([3.2](03-02-ideal-mhd-frozen-flux.md)):

$$\rho_0\,\frac{\partial \mathbf{v}_1}{\partial t} = -\nabla p_1 + \frac{1}{\mu_0}(\nabla\times\mathbf{B}_1)\times\mathbf{B}_0, \qquad \frac{\partial \mathbf{B}_1}{\partial t} = \nabla\times(\mathbf{v}_1\times\mathbf{B}_0).$$

*In words: the fluid is pushed by pressure gradients and by the $\mathbf{J}\times\mathbf{B}$ force ($\mathbf{J}_1 = \nabla\times\mathbf{B}_1/\mu_0$); and the field is dragged frozen-in by the flow.* Here $\mu_0$ is the vacuum permeability and $\rho_0 = n_i m_i$ is the mass density (ion mass $m_i$ dominates).

**The shear Alfvén wave.** Send the wave *along* the field, $\mathbf{k} = k_\parallel\hat{\mathbf z}$, and pluck *across* it: let $\mathbf{v}_1 = v_1\hat{\mathbf x}$. Because $\mathbf{v}_1$ points along $\hat{\mathbf x}$ but varies only along $\hat{\mathbf z}$, the flow is incompressible ($\nabla\cdot\mathbf{v}_1 = 0$), so nothing gets compressed: $\rho_1 = 0$ and $p_1 = 0$. Pressure drops out entirely — this wave is *purely* magnetic. The induction equation, using $\nabla\cdot\mathbf{B}_0=0$ and uniform fields, collapses to $\partial\mathbf{B}_1/\partial t = (\mathbf{B}_0\cdot\nabla)\mathbf{v}_1 = B_0\,\partial\mathbf{v}_1/\partial z$, i.e.

$$-i\omega B_{1x} = i k_\parallel B_0\, v_1 \;\Longrightarrow\; B_{1x} = -\frac{k_\parallel B_0}{\omega}\,v_1.$$

*In words: the ripple in the flow tips the field line, generating a transverse field perturbation $B_{1x}$.* Now the magnetic force. With $\mathbf{B}_1 = B_{1x}(z)\hat{\mathbf x}$, one finds $\nabla\times\mathbf{B}_1 = (\partial B_{1x}/\partial z)\hat{\mathbf y}$ and $(\nabla\times\mathbf{B}_1)\times\mathbf{B}_0 = B_0(\partial B_{1x}/\partial z)\hat{\mathbf x}$, so the momentum equation's $\hat{\mathbf x}$-component is

$$-i\omega\rho_0 v_1 = \frac{B_0}{\mu_0}\,(i k_\parallel) B_{1x}.$$

Substitute $B_{1x}$ from above:

$$-i\omega\rho_0 v_1 = \frac{i k_\parallel B_0}{\mu_0}\left(-\frac{k_\parallel B_0}{\omega}v_1\right) = -\frac{i k_\parallel^2 B_0^2}{\mu_0\,\omega}\,v_1.$$

Cancel $-i v_1$ and rearrange:

$$\boxed{\;\omega^2 = k_\parallel^2\,\frac{B_0^2}{\mu_0\rho_0} \equiv k_\parallel^2\, v_A^2, \qquad v_A \equiv \frac{B_0}{\sqrt{\mu_0\rho_0}}\;}$$

*In words: the shear Alfvén wave obeys $\omega = k_\parallel v_A$ — it travels along the field at the Alfvén speed, and only the field-parallel wavenumber matters.* It is **non-dispersive** (speed independent of $k$), **transverse** (fluid and field wiggle across $\mathbf{B}$), and **incompressible** (density never changes). Tension $B^2/\mu_0$ restores; mass $\rho$ resists. A plucked string, exactly.

**How big is $v_A$?** In SI, for a hydrogen plasma ($\rho = n m_p$),

$$v_A = \frac{B}{\sqrt{\mu_0\rho}} \approx 2.18\times10^{16}\,\frac{B\,[\mathrm{T}]}{\sqrt{n\,[\mathrm{m^{-3}}]}}\ \frac{\mathrm{m}}{\mathrm{s}}\quad(\text{protons}).$$

It can be enormous: the **solar corona** ($B\sim10\ \mathrm{G}$, tenuous) reaches $v_A\sim1000\ \mathrm{km/s}$; a **tokamak** ($B\sim$ several tesla) reaches $v_A\sim10^6$–$10^7\ \mathrm{m/s}$. A useful identity ties it to the ion frequencies of Module 1:

$$v_A = c\,\frac{\omega_{ci}}{\omega_{pi}}, \qquad \omega_{ci} = \frac{eB}{m_i},\quad \omega_{pi} = \sqrt{\frac{n e^2}{\varepsilon_0 m_i}},$$

so $v_A/c = \omega_{ci}/\omega_{pi}$. *In words: since a dense plasma has $\omega_{pi}\gg\omega_{ci}$, the Alfvén speed is comfortably sub-light — ideal MHD stays non-relativistic.* (Derivation: $c\,\omega_{ci}/\omega_{pi} = cB\sqrt{\varepsilon_0/(n m_i)}$, and with $c=1/\sqrt{\varepsilon_0\mu_0}$ this is $B/\sqrt{\mu_0 n m_i} = v_A$.)

**The compressional (magnetosonic) waves.** Now let the wave compress the plasma. Two pressures resist compression: the thermal pressure, with sound speed $c_s = \sqrt{\gamma p_0/\rho_0}$ (the ion-acoustic-like speed of [4.2](04-02-ion-acoustic-waves.md)), and the magnetic pressure $B^2/2\mu_0$. Doing the full linear algebra for a wave at angle $\theta$ to $\mathbf{B}$ gives, besides the Alfvén root $\omega^2 = k^2 v_A^2\cos^2\theta$, two magnetosonic roots:

$$\frac{\omega^2}{k^2} = \tfrac12\Big[(v_A^2 + c_s^2) \pm \sqrt{(v_A^2 + c_s^2)^2 - 4 v_A^2 c_s^2\cos^2\theta}\,\Big],$$

the $+$ sign the **fast** wave, the $-$ sign the **slow** wave. The clean limits are what to remember. **Across the field** ($\theta = 90^\circ$): the slow and Alfvén waves vanish, and the fast wave travels at

$$v_{\text{fast}}(90^\circ) = \sqrt{v_A^2 + c_s^2}.$$

*In words: to move across $\mathbf{B}$ you must compress both field and gas, so magnetic and thermal pressure add in quadrature.* **Along the field** ($\theta = 0$): the two magnetosonic speeds decouple into $v_A$ and $c_s$ separately (pure Alfvén and pure sound). Ordering the three at any angle, $v_{\text{slow}} \le v_{\text{Alfvén}} \le v_{\text{fast}}$ — the **MHD wave triad**. Their phase speeds plotted against angle make the **Friedrichs diagram** (the inset below).

## Picture

![Three grey magnetic field lines plucked into a transverse ripple with the plasma (blue beads) frozen to them, coral arrows showing the tension B-squared-over-mu-zero restoring the lines and the wave propagating along B at the Alfvén speed; an inset Friedrichs polar diagram shows the slow, Alfvén, and fast phase speeds versus angle to B](assets/04-03-fig1.svg)

## Worked examples

**Example 1 (the Alfvén speed of a coronal loop).** A magnetic loop in the solar corona has $B = 10\ \mathrm{G} = 10^{-3}\ \mathrm{T}$ and proton density $n = 5\times10^{14}\ \mathrm{m^{-3}}$, so $\rho = n m_p = 5\times10^{14}\times1.67\times10^{-27} = 8.4\times10^{-13}\ \mathrm{kg/m^3}$. Then

$$v_A = \frac{B}{\sqrt{\mu_0\rho}} = \frac{10^{-3}}{\sqrt{(4\pi\times10^{-7})(8.4\times10^{-13})}} = \frac{10^{-3}}{\sqrt{1.05\times10^{-18}}} = \frac{10^{-3}}{1.02\times10^{-9}} \approx 9.8\times10^{5}\ \mathrm{m/s}.$$

So $v_A\approx980\ \mathrm{km/s}$, and $v_A/c\approx3\times10^{-3}$ — fast, but firmly non-relativistic. A transverse kink plucked into this loop at one footpoint reaches the other in seconds; observing those oscillations and inverting $v_A = B/\sqrt{\mu_0\rho}$ for $B$ is **coronal seismology**, one of the few ways to measure the Sun's magnetic field where you can't put a probe.

**Example 2 (the triad from two speeds).** A different loop has $v_A = 1000\ \mathrm{km/s}$ and sound speed $c_s = 200\ \mathrm{km/s}$ (so it is magnetically dominated — low plasma beta, since $c_s^2/v_A^2 = \gamma\beta/2$ from [3.3](03-03-magnetic-pressure-tension-beta.md)). Then:

- **Fast wave across $\mathbf{B}$:** $v_{\text{fast}} = \sqrt{v_A^2 + c_s^2} = \sqrt{1000^2 + 200^2} = \sqrt{1.04\times10^6} \approx 1020\ \mathrm{km/s}$ — barely above $v_A$, because when $v_A\gg c_s$ the magnetic pressure does almost all the work.
- **Along $\mathbf{B}$:** the two compressional roots are just $v_A = 1000$ and $c_s = 200\ \mathrm{km/s}$; the shear Alfvén wave also runs at $v_A = 1000\ \mathrm{km/s}$.
- **Which force sets which wave?** Tension sets the Alfvén wave; thermal + magnetic pressure together set the fast wave; the slow wave is the compromise in which they partly *oppose*. In this low-beta loop, magnetic tension and pressure dominate everything.

## Watch out

- **You might think the shear Alfvén wave compresses the plasma.** It doesn't — it's transverse and incompressible, so $\rho_1 = 0$ and thermal pressure never enters. That's why $v_A$ contains $B$ and $\rho$ but *no temperature*. The **compressional** (fast/slow) waves are the ones that squeeze the gas and feel $c_s$.
- **You might think $v_A$ depends on the full wavevector.** For the shear wave only $k_\parallel = k\cos\theta$ matters: $\omega = k_\parallel v_A$. Tilt the wave toward perpendicular and the shear Alfvén frequency drops to zero at $90^\circ$ — it simply cannot propagate across the field. (The *fast* wave is the one that crosses field lines.)
- **You might confuse tension $B^2/\mu_0$ with pressure $B^2/2\mu_0$.** Both live in the Maxwell stress ([3.3](03-03-magnetic-pressure-tension-beta.md)): field lines push sideways with pressure $B^2/2\mu_0$ and pull lengthwise with tension $B^2/\mu_0$. It is the **tension** that plucks the shear Alfvén wave; putting the pressure coefficient in would give the wrong speed by $\sqrt2$.
- **You might expect the plasma frequency to appear.** It doesn't: MHD has already assumed quasineutrality and dropped the fast electron dynamics, so charge-separation waves (Langmuir, 4.1) live in a different regime. Alfvén waves are the low-frequency, $\omega\ll\omega_{ci}$ end of the spectrum.

## One-liner

> A magnetized plasma is a bundle of strings under tension $B^2/\mu_0$ loaded with mass $\rho$; pluck them and the ripple runs along $\mathbf{B}$ at $v_A = B/\sqrt{\mu_0\rho}$ — while squeezing them adds thermal pressure to give the fast/slow magnetosonic pair.

## Problems

**P1 (🟢)** The solar wind at 1 AU has $B\approx5\ \mathrm{nT} = 5\times10^{-9}\ \mathrm{T}$ and proton density $n\approx5\times10^{6}\ \mathrm{m^{-3}}$. Compute the Alfvén speed $v_A$. The wind flows outward at about $400\ \mathrm{km/s}$ — is the flow faster or slower than $v_A$ (i.e. is it super- or sub-Alfvénic)?

**P2 (🟡)** A magnetized plasma has $v_A = 200\ \mathrm{km/s}$ and sound speed $c_s = 150\ \mathrm{km/s}$. (a) Find the fast magnetosonic speed for propagation *across* $\mathbf{B}$. (b) Name the two magnetosonic phase speeds for propagation *along* $\mathbf{B}$. (c) Of the three plasma waves — Langmuir, ion-acoustic, shear Alfvén — which one has magnetic tension as its restoring force, and what provides the inertia?

**P3 (🔴, optional)** Reproduce $v_A$ from the string picture. A stretched string with tension $\tau$ (N) and linear mass density $\lambda$ (kg/m) carries transverse waves at $\sqrt{\tau/\lambda}$. Model a magnetized plasma as a bundle of such strings filling a cross-sectional area $A$: the field's tension force across that area is the stress $B^2/\mu_0$ times $A$, and the mass per unit length is $\rho A$. Show the wave speed is $v_A = B/\sqrt{\mu_0\rho}$, independent of $A$. Then check the units of $B^2/\mu_0$ are those of pressure.

<details>
<summary>Solutions</summary>

**P1** With $\rho = n m_p = 5\times10^{6}\times1.67\times10^{-27} = 8.35\times10^{-21}\ \mathrm{kg/m^3}$,

$$v_A = \frac{5\times10^{-9}}{\sqrt{(4\pi\times10^{-7})(8.35\times10^{-21})}} = \frac{5\times10^{-9}}{\sqrt{1.05\times10^{-26}}} = \frac{5\times10^{-9}}{1.02\times10^{-13}} \approx 4.9\times10^{4}\ \mathrm{m/s} \approx 49\ \mathrm{km/s}.$$

The bulk flow ($\sim400\ \mathrm{km/s}$) is about eight times $v_A$, so the solar wind is **super-Alfvénic**. (This matters physically: because the flow outruns Alfvén waves, information can't propagate back upstream against it — which is exactly why a *bow shock* stands in front of Earth's magnetosphere.)

*Check.* Units: $B/\sqrt{\mu_0\rho}$ gives $\mathrm{T}/\sqrt{(\mathrm{T\,m/A})(\mathrm{kg/m^3})}$; with $\mathrm{T} = \mathrm{kg/(A\,s^2)}$ this reduces to $\mathrm{m/s}$ ✓. Order of magnitude: solar-wind $v_A$ is textbook-quoted at tens of km/s. ✓

**P2** (a) Across $\mathbf{B}$: $v_{\text{fast}} = \sqrt{v_A^2 + c_s^2} = \sqrt{200^2 + 150^2} = \sqrt{40000 + 22500} = \sqrt{62500} = 250\ \mathrm{km/s}.$

(b) Along $\mathbf{B}$ the compressional roots decouple into the Alfvén speed and the sound speed separately: $v_A = 200\ \mathrm{km/s}$ (fast, here the larger) and $c_s = 150\ \mathrm{km/s}$ (slow, the smaller). The shear Alfvén wave also propagates at $v_A = 200\ \mathrm{km/s}$.

(c) The **shear Alfvén wave**: its restoring force is magnetic **tension** $B^2/\mu_0$, and the inertia is the plasma **mass density** $\rho$. (Langmuir is restored by electrostatic charge separation with electron inertia; ion-acoustic by electron pressure with ion inertia.)

*Check.* The $(3,4,5)$-scaled triangle makes (a) exact: $\sqrt{200^2+150^2}=250$. And $v_{\text{fast}}\ge v_A \ge$ nothing-smaller-here, respecting $v_{\text{slow}}\le v_{\text{Alfvén}}\le v_{\text{fast}}$. ✓

**P3** A single string carries transverse waves at $c = \sqrt{\tau/\lambda}$. For the bundle over area $A$: the tension force is the magnetic stress times the area, $\tau = (B^2/\mu_0)\,A$, and the mass per unit length is $\lambda = \rho A$. Hence

$$c = \sqrt{\frac{\tau}{\lambda}} = \sqrt{\frac{(B^2/\mu_0)A}{\rho A}} = \sqrt{\frac{B^2}{\mu_0\rho}} = \frac{B}{\sqrt{\mu_0\rho}} = v_A,$$

and $A$ cancels, as it must — the speed can't depend on how we slice the bundle. Units of $B^2/\mu_0$: $\mathrm{T}^2/(\mathrm{T\,m/A}) = \mathrm{T\,A/m}$; using $\mathrm{T} = \mathrm{kg/(A\,s^2)}$ this is $\mathrm{kg/(m\,s^2)} = \mathrm{N/m^2} = \mathrm{Pa}$ ✓ — a genuine pressure/stress.

*Check.* The dimensional route reproduces the exact coefficient (no stray factor of 2), confirming it is **tension** $B^2/\mu_0$, not pressure $B^2/2\mu_0$, that sets $v_A$. ✓

</details>

## Flashback

**From Lesson 4.2 (Ion-acoustic waves):** A deuterium plasma ($m_i = 2m_p$) has electron temperature $T_e = 50\ \mathrm{eV}$ and cold ions ($T_i \ll T_e$). Compute the ion-acoustic speed $c_s = \sqrt{k_B T_e/m_i}$, and state in one line why the condition $T_e \gg T_i$ is needed for the wave to exist. (Fresh numbers — a different plasma than 4.2's.)

<details>
<summary>Solution</summary>

Convert the temperature to joules: $k_B T_e = eT_e[\mathrm{eV}] = 1.6\times10^{-19}\times50 = 8.0\times10^{-18}\ \mathrm{J}$, and $m_i = 2\times1.67\times10^{-27} = 3.34\times10^{-27}\ \mathrm{kg}$. Then

$$c_s = \sqrt{\frac{k_B T_e}{m_i}} = \sqrt{\frac{8.0\times10^{-18}}{3.34\times10^{-27}}} = \sqrt{2.4\times10^{9}} \approx 4.9\times10^{4}\ \mathrm{m/s} \approx 49\ \mathrm{km/s}.$$

The wave needs $T_e \gg T_i$ because otherwise the ions are as hot as the wave is fast ($\omega/k \sim c_s \sim v_{th,i}$), so a large fraction of ions sit at the resonant velocity and **ion Landau damping** (Module 2) kills the wave before it propagates. Cold ions push the resonance out onto the sparse tail of the ion distribution, and the wave survives.

*Check.* Using the handy form $c_s \approx 9.79\times10^{3}\sqrt{T_e[\mathrm{eV}]/\mu}\ \mathrm{m/s}$ with $\mu = 2$: $9.79\times10^{3}\sqrt{25} = 9.79\times10^{3}\times5 = 4.9\times10^{4}\ \mathrm{m/s}$ ✓. (Curiously the same $\sim49\ \mathrm{km/s}$ as the solar-wind $v_A$ in P1 — coincidence of these particular numbers, but a reminder that $c_s$ and $v_A$ are generally comparable, and their ratio measures $\beta$.)

</details>

## Connections

- **Backward:** the restoring force is the magnetic **tension** $B^2/\mu_0$ derived in [3.3](03-03-magnetic-pressure-tension-beta.md) from the Maxwell stress, and the "field lines glued to the plasma" that lets you pluck them is the **frozen-in flux** of [3.2](03-02-ideal-mhd-frozen-flux.md). The whole derivation is the linearized MHD momentum + induction equations of Module 3. Structurally it is the same wave equation as [`mechanics-refresher` 3.1](../../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md), restoring force over inertia setting the frequency.
- **Forward:** [4.4 Instabilities](04-04-instabilities-two-stream-drift.md) turns waves into *growing* modes by adding free energy — and the interchange/Rayleigh–Taylor instability is precisely what happens when magnetic tension is too weak to hold a plasma against "bad" field-line curvature. The magnetosonic and Alfvén waves also reappear as the carriers of energy in the solar wind ([5.3](../../plasma-physics/syllabus.md)) and reconnection outflows ([5.4](../../plasma-physics/syllabus.md)).
- **Sideways (fluid dynamics):** the Alfvén wave is literally magnetic *sound* — same linearized-continuity/momentum machinery as an acoustic wave in [`fluid-dynamics`](../../fluid-dynamics/syllabus.md), but with field-line tension supplying a restoring force that an ordinary gas simply doesn't have. The three-wave contrast completes the plasma's dispersion picture: **Langmuir** (electrostatic, charge separation, $\omega_p$), **ion-acoustic** (electron pressure, $c_s$), **Alfvén** (magnetic tension, $v_A$) — three restoring forces, three waves.
