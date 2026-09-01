# Geophysics · Lesson 3.2: The geodynamo

> ⏱ ~15 min · Module 3: Geomagnetism, palaeomagnetism & plate kinematics · Builds on: [3.1](03-01-the-main-field.md), [`em-refresher`](../../em-refresher/syllabus.md) · Unlocks: [3.4](03-04-magnetic-anomalies-reversals.md), [5.4](05-04-the-core.md)

## Why this matters

Three facts about the Earth's magnetic field are individually simple and jointly decisive. Iron loses its magnetization above 770 °C, and the core is several thousand degrees hotter. A field left over from the past would diffuse away in about twenty thousand years. And the rock record shows a field has existed continuously for at least 3.5 billion years.

Put together, they force a conclusion: **the field is being generated right now, continuously, by motion in the liquid outer core.** This lesson is about what that motion has to be, why the resulting field is a dipole, and why the dipole lines up with the rotation axis rather than pointing anywhere it likes.

The answer to that last question is the deepest one, and it is not obvious. Nothing in electromagnetism says a self-generating field must know about rotation. That it does is a consequence of the Coriolis force organizing the flow.

## The idea

**The field is in a race between stretching and diffusion.** Magnetic field lines in a good conductor are nearly frozen into the fluid ([plasma-physics 3.2](../../plasma-physics/lessons/03-02-ideal-mhd-frozen-flux.md)), so shearing and stretching the fluid stretches and intensifies the field. Meanwhile, finite resistivity lets field diffuse across the fluid and decay. **A dynamo is a flow in which stretching beats diffusion.**

**The scorekeeper is the magnetic Reynolds number.** $R_m = uL/\eta$ compares the two, exactly as the ordinary Reynolds number compares inertia to viscosity. Below about 40, any field decays; above it, a suitable flow can sustain one. The Earth's core runs at $R_m \approx 10^3$, comfortably supercritical. Note what is required: not a fast flow in absolute terms — half a millimetre per second — but a large $L$ and a low $\eta$.

**Something has to drive the flow, and there are two candidate engines.** The core is cooling, so it convects thermally. And as it cools, the inner core freezes out, expelling light elements (probably sulphur, oxygen, silicon) into the liquid above — **compositional convection**, which is far more efficient thermodynamically because it does not have to pay the Carnot penalty. The growth of the inner core is very likely the dynamo's main power supply, which is a striking thought: **the compass works because the centre of the Earth is freezing.**

**Rotation is what makes the field a dipole aligned with the spin axis.** In a rapidly rotating fluid, the Coriolis force dominates and forces motion to be nearly invariant along the rotation axis — the Taylor–Proudman constraint. Convection therefore organizes into **columns parallel to the axis**. Helical flow within those columns twists field lines systematically, and a flow with a preferred axis makes a field with the same preferred axis. **The dipole points along the rotation axis because the convection does.**

**And the field reverses, irregularly.** The dynamo equations have no preference between a field and its negative, so both polarities are equally good solutions. Transitions between them occur on average every few hundred thousand years, but with enormous variability — including a 40-million-year interval in the Cretaceous with no reversals at all. Reversals take a few thousand years, during which the dipole weakens and the field becomes structurally messy.

## The formal version

**The induction equation.** Combining Faraday's, Ampère's and Ohm's laws for a moving conductor:

$$\boxed{\ \frac{\partial\mathbf B}{\partial t} = \underbrace{\nabla\times(\mathbf u\times\mathbf B)}_{\text{induction}} + \underbrace{\eta\nabla^2\mathbf B}_{\text{diffusion}}\ }, \qquad \eta = \frac{1}{\mu_0\sigma}.$$

*In words: the field changes because the fluid drags it around, and because it leaks through the fluid.* $\eta$ is the **magnetic diffusivity**, with units m²/s. For the core, $\sigma \approx 5\times10^{5}\ \mathrm{S\,m^{-1}}$ gives $\eta \approx 1.6\ \mathrm{m^2\,s^{-1}}$.

**Free decay time.** With $\mathbf u = 0$, the induction equation is a diffusion equation, and the slowest-decaying mode in a sphere of radius $L$ has

$$\tau = \frac{\mu_0\sigma L^2}{\pi^2} = \frac{L^2}{\pi^2\eta}.$$

*In words: switch off the flow and the field dies in this time.*

**Magnetic Reynolds number.**

$$R_m = \frac{uL}{\eta}.$$

*In words: the ratio of induction to diffusion.* Dynamo action requires $R_m$ above a critical value of order 10 to 100, depending on flow geometry.

**Cowling's theorem.** A steady, **axisymmetric** field cannot be maintained by dynamo action. *In words: a dynamo cannot be as simple as it looks* — the flow must break axial symmetry even though the resulting mean field is nearly axisymmetric. This is why the problem resisted solution for so long and why the westward-drifting non-dipole field is not an inconvenience but a necessity.

**The two ingredients of a working dynamo.**

| Effect | What it does |
|---|---|
| $\omega$-effect | differential rotation shears poloidal field into toroidal field |
| $\alpha$-effect | helical (twisting) convection converts toroidal field back into poloidal |

Together they close a loop: poloidal → toroidal → poloidal, with gain. The internal **toroidal** field may be several times stronger than the poloidal field we observe, and it is entirely invisible from outside — a toroidal field has no external expression.

**Force balance and the Elsasser number.** In the core the leading balance is between Coriolis, pressure and Lorentz forces (**magnetostrophic** balance). Their ratio is

$$\Lambda = \frac{\sigma B^2}{2\rho\Omega},$$

and the field saturates near $\Lambda \sim 1$ — magnetic forces grow until they are comparable to Coriolis forces, and then stop. *In words: the field strength is set by a force balance, not by the driving.* For the Earth this predicts an internal field of a few millitesla, ten to a hundred times the surface field.

**Energy.** Core heat flow is estimated at 5 to 15 TW, of which perhaps 0.1 to 1 TW is converted to magnetic energy and dissipated ohmically. The dynamo is a very inefficient heat engine, but it does not need to be efficient.

## Picture

![Left: a diagram of the induction equation as a race between two boxes, a blue box labelled curl of u cross B, stretching, builds field, and a coral box labelled eta del-squared B, diffusion, kills field, with the magnetic Reynolds number between them. Notes state that below 40 the field decays and Earth's core runs near 1000; that iron loses its magnetism above 770 degrees while the core is 4000, so it cannot be a permanent magnet; that the free decay time is about 20,000 years against a field 3.5 billion years old in the rock record; and therefore that the field is being made right now, continuously. Right: a cross-section of the core with a shaded inner core and a dashed rotation axis marked with a curved arrow for omega. Four blue columns run parallel to the rotation axis on either side of the inner core, with elliptical tops. Notes state that Coriolis forces convection into columns aligned with the rotation axis, and that columns aligned with the spin axis make a dipole aligned with it too](assets/03-02-fig1.svg)

The alignment of the compass with the pole is not a coincidence and not a law of magnetism. It is the Coriolis force, showing up in the geometry of the flow.

## Worked examples

**Example 1 (mechanical — the two numbers that define the problem).** For the outer core take $\sigma = 5\times10^{5}\ \mathrm{S\,m^{-1}}$, $L = 3.48\times10^{6}$ m, and a flow speed inferred from the westward drift. (a) Find $\eta$ and the free decay time. (b) Find the flow speed implied by a westward drift of 0.2°/yr at the core surface, and hence $R_m$.

(a)
$$\eta = \frac{1}{\mu_0\sigma} = \frac{1}{4\pi\times10^{-7}\times5\times10^{5}} = \frac{1}{0.6283} = 1.59\ \mathrm{m^2\,s^{-1}}.$$

$$\tau = \frac{L^2}{\pi^2\eta} = \frac{(3.48\times10^{6})^2}{9.8696\times1.59} = \frac{1.211\times10^{13}}{15.69} = 7.72\times10^{11}\ \mathrm{s} = 24{,}500\ \mathrm{yr}.$$

(b) A drift of 0.2 degrees per year at radius 3480 km:

$$u = 0.2\times\frac{\pi}{180}\times3.48\times10^{6} = 3.491\times10^{-3}\times3.48\times10^{6} = 1.215\times10^{4}\ \mathrm{m\,yr^{-1}}$$
$$= \frac{1.215\times10^{4}}{3.156\times10^{7}} = 3.85\times10^{-4}\ \mathrm{m\,s^{-1}}.$$

About 12 km per year, or 0.4 mm/s.

$$R_m = \frac{uL}{\eta} = \frac{3.85\times10^{-4}\times3.48\times10^{6}}{1.59} = \frac{1340}{1.59} = 843.$$

**Comfortably supercritical.** Note how the largeness comes about: the flow is glacially slow by everyday standards, but the length scale is 3500 km and the diffusivity is small. Dynamos are geometry, not speed.

**Example 2 (why you'd care — closing the argument that it must be a dynamo).** Assemble the case that no alternative works, and estimate the power required.

*Alternative 1: a permanent magnet.* Iron's Curie temperature is 770 °C ($1043$ K); above it thermal agitation destroys magnetic ordering entirely. The core is at 4000 to 5500 K throughout. **Excluded by a factor of four in temperature** — not marginally, but overwhelmingly.

*Alternative 2: a fossil field, frozen in at formation.* From Example 1, $\tau \approx 24{,}500$ yr. Over 3.5 Gyr that is $3.5\times10^{9}/2.45\times10^{4} = 1.4\times10^{5}$ decay times, so a fossil field would have been reduced by $e^{-140{,}000}$ — a number with no physical meaning. **Excluded absolutely.**

*Alternative 3: an external source.* Gauss's separation ([3.1](03-01-the-main-field.md)) resolves internal from external terms and finds the external part is a fraction of a percent. **Excluded by measurement.**

*So: an active internal dynamo. What does it cost?* Estimate the ohmic dissipation of the large-scale field. Taking a core field of $B \approx 3$ mT and core volume $V = \tfrac43\pi(3.48\times10^{6})^3 = 1.77\times10^{20}\ \mathrm{m^3}$:

$$E_B = \frac{B^2}{2\mu_0}V = \frac{(3\times10^{-3})^2}{2\times4\pi\times10^{-7}}\times1.77\times10^{20} = 3.58\times1.77\times10^{20} = 6.3\times10^{20}\ \mathrm{J}.$$

$$P \sim \frac{E_B}{\tau} = \frac{6.3\times10^{20}}{7.72\times10^{11}} = 8\times10^{8}\ \mathrm{W} = 0.8\ \mathrm{GW}.$$

*And now the honest caveat, which is the interesting part.* Published estimates of the dynamo's ohmic dissipation are 0.1 to 1 **terawatt** — a hundred to a thousand times larger than this. The calculation above is not wrong; it is incomplete. It used the decay time of the *largest* mode, and diffusive decay goes as $L^2$, so small-scale field structures dissipate enormously faster. Most of the dissipation happens at scales far below anything observable from the surface, where the field is turbulent and tangled. **A calculation based on the observable field gives a firm lower bound and nothing more.**

That gap is not a nuisance; it is a live research question, because the required power constrains the core's heat budget, which constrains the thermal conductivity of iron at core pressures, which constrains how old the inner core is. When laboratory and *ab initio* estimates of iron's conductivity were revised upward around 2012, the dynamo's power requirement went up with them, and the estimated age of the inner core dropped from a few billion years to perhaps half a billion — with the awkward consequence that the dynamo must have been driven by something else for most of Earth history. That story continues in [5.4](05-04-the-core.md).

## Watch out

- **You might think** the observed surface field is the field in the core. **Actually** it is the poloidal part, attenuated by distance and filtered to degree 13 by the mantle ([3.1](03-01-the-main-field.md)). The **toroidal** field — possibly the stronger of the two — produces no external field at all, by construction. We are looking at a fraction of the field through a low-pass filter.
- **You might think** a dynamo needs a seed field to get started. **Actually** it needs a seed, but an arbitrarily small one: dynamo action is an *instability*, and any stray field — from the solar nebula, from a passing cosmic ray, from thermoelectric currents — is amplified exponentially once $R_m$ is supercritical. The seed sets the sign of the first polarity and is otherwise forgotten.
- **You might think** reversals are periodic and therefore predictable. **Actually** the reversal record is statistically consistent with a non-stationary Poisson process — random, with a slowly varying rate. Intervals range from tens of thousands of years to the 40-Myr Cretaceous Normal Superchron. There is no clock, and forecasts based on "we are overdue" have no physical basis.

## One-liner

> The field cannot be a permanent magnet and cannot be a fossil, so it must be regenerated by core flow faster than it diffuses away — and rotation forces that flow into axis-parallel columns, which is why the dipole points north.

## Problems

**P1 (🟢)** Take a hypothetical planetary core with $\sigma = 3\times10^{5}\ \mathrm{S\,m^{-1}}$ and radius 1800 km. (a) Compute the magnetic diffusivity. (b) Compute the free decay time. (c) If the core flow is $2\times10^{-4}\ \mathrm{m\,s^{-1}}$, compute $R_m$ and state whether a dynamo is plausible.

**P2 (🟡)** (a) Compute the Elsasser number for the Earth's core taking $\sigma = 5\times10^{5}$, $B = 2$ mT, $\rho = 1.1\times10^{4}\ \mathrm{kg\,m^{-3}}$, $\Omega = 7.29\times10^{-5}\ \mathrm{s^{-1}}$. (b) Comment on whether the field is in the expected saturated regime. (c) A planet rotating ten times slower, with everything else the same, saturates at $\Lambda \sim 1$; compute the field strength it would sustain, and comment on the scaling.

**P3 (🔴, bridges to [5.4](05-04-the-core.md))** The dynamo is powered by cooling and by inner-core growth. (a) The inner core has radius 1220 km and the latent heat of iron crystallization is about $10^{6}\ \mathrm{J\,kg^{-1}}$, with $\rho = 1.3\times10^{4}\ \mathrm{kg\,m^{-3}}$. Compute the total latent heat released in growing the present inner core. (b) If that growth took 1 Gyr, compute the average latent-heat power. (c) Compare with the estimated 0.1–1 TW of ohmic dissipation and comment on whether latent heat alone could plausibly power the dynamo. (d) Explain why compositional convection — light elements expelled at the inner-core boundary — is thermodynamically more effective than thermal convection at driving a dynamo, even at the same power.

<details>
<summary>Solutions</summary>

**P1** (a) $$\eta = \frac{1}{\mu_0\sigma} = \frac{1}{4\pi\times10^{-7}\times3\times10^{5}} = \frac{1}{0.3770} = 2.65\ \mathrm{m^2\,s^{-1}}.$$

(b) $$\tau = \frac{L^2}{\pi^2\eta} = \frac{(1.8\times10^{6})^2}{9.8696\times2.65} = \frac{3.24\times10^{12}}{26.15} = 1.24\times10^{11}\ \mathrm{s} = 3930\ \mathrm{yr}.$$

(c) $$R_m = \frac{uL}{\eta} = \frac{2\times10^{-4}\times1.8\times10^{6}}{2.65} = \frac{360}{2.65} = 136.$$

Above the critical value of order 10 to 100, so **a dynamo is plausible** — though not guaranteed, since the critical $R_m$ depends on flow geometry and 136 is not a large margin. This is roughly Mercury's situation, and Mercury does have a (weak) field.

**P2** (a) $$\Lambda = \frac{\sigma B^2}{2\rho\Omega} = \frac{5\times10^{5}\times(2\times10^{-3})^2}{2\times1.1\times10^{4}\times7.29\times10^{-5}} = \frac{5\times10^{5}\times4\times10^{-6}}{1.604} = \frac{2.0}{1.604} = 1.25.$$

(b) $\Lambda \approx 1$ is exactly the expected saturated state: **the Lorentz force has grown until it is comparable to the Coriolis force, and then stopped growing.** This is a satisfying consistency check, because the 2 mT internal field was not measured — it was inferred, partly from this very argument. The circularity is not vicious: numerical dynamo simulations that impose no such constraint nonetheless settle near $\Lambda \sim 1$, so the balance is a result rather than an assumption.

(c) Setting $\Lambda = 1$ with $\Omega' = \Omega/10$:

$$B = \sqrt{\frac{2\rho\Omega'}{\sigma}} = \sqrt{\frac{2\times1.1\times10^{4}\times7.29\times10^{-6}}{5\times10^{5}}} = \sqrt{\frac{0.1604}{5\times10^{5}}} = \sqrt{3.208\times10^{-7}} = 5.7\times10^{-4}\ \mathrm{T},$$

about 0.57 mT — a factor of $\sqrt{10} = 3.2$ weaker.

**Slower rotation gives a weaker field, but only as the square root.** This matters for comparative planetology: Venus rotates 243 times more slowly than Earth, which by this scaling would weaken its field by a factor of only 16 — nowhere near enough to explain why Venus has no detectable field at all. **So slow rotation is not the reason Venus lacks a dynamo**; the more likely reason is that its core is not convecting, because Venus has no plate tectonics to cool its mantle efficiently and therefore no way to extract heat from the core fast enough. The scaling argument is useful precisely because it *rules out* the tempting explanation.

**P3** (a) $$V_{ic} = \tfrac43\pi(1.22\times10^{6})^3 = 4.18879\times1.816\times10^{18} = 7.606\times10^{18}\ \mathrm{m^3}.$$
$$M_{ic} = 1.3\times10^{4}\times7.606\times10^{18} = 9.89\times10^{22}\ \mathrm{kg}.$$
$$Q_L = 10^{6}\times9.89\times10^{22} = 9.89\times10^{28}\ \mathrm{J}.$$

(b) $$1\ \mathrm{Gyr} = 3.156\times10^{16}\ \mathrm{s}, \qquad P = \frac{9.89\times10^{28}}{3.156\times10^{16}} = 3.13\times10^{12}\ \mathrm{W} = 3.1\ \mathrm{TW}.$$

(c) Against an ohmic dissipation of 0.1 to 1 TW, a latent-heat supply of 3.1 TW is **comfortably sufficient** — indeed it leaves room for the very poor thermodynamic efficiency a heat engine at these temperatures must have. So yes, inner-core growth alone can plausibly power the modern dynamo.

Two caveats worth stating. First, latent heat is *heat*, so converting it to magnetic energy is subject to a Carnot-like efficiency of order $\Delta T/T \sim 10$ percent, which brings the usable power to a few hundred GW — still enough, but not by a wide margin. Second, this is only available *since* the inner core began to freeze. Before that, the dynamo must have run on thermal convection alone, and if the inner core is young (see the conductivity revision in Example 2), that is most of Earth history. The palaeomagnetic record shows a field at 3.5 Ga, so something powered it then.

(d) Because **compositional convection releases gravitational potential energy directly, without passing through heat.** When light elements are expelled at the inner-core boundary, buoyant fluid rises from the bottom of the core to the top, and essentially all of the released gravitational energy is available to do work on the flow. Thermal convection, by contrast, is a heat engine: it takes heat in at the bottom and rejects most of it at the top, and only the Carnot fraction $\sim\Delta T/T$ — of order 10 percent in the core — can be converted into kinetic and hence magnetic energy.

So a watt of compositional buoyancy is worth roughly ten watts of thermal buoyancy for driving a dynamo. There is a second advantage: compositional buoyancy is released at the *bottom* of the outer core, at the inner-core boundary, where it drives motion through the full depth of the shell; thermal buoyancy is partly wasted because heat can also be carried by conduction along the adiabat without driving any motion at all. Both effects point the same way, which is why inner-core growth is regarded as the dynamo's most likely modern power source.

</details>

## Flashback

**From Lesson 3.1 (The main field):** At a site the field elements are $X = 21{,}000$ nT, $Y = 4100$ nT, $Z = -38{,}500$ nT. (a) Compute $H$, $F$, $D$ and $I$. (b) Determine the hemisphere. (c) Compute the dipole latitude.

<details>
<summary>Solution</summary>

(a) $$H = \sqrt{21{,}000^2 + 4100^2} = \sqrt{4.410\times10^{8}+1.681\times10^{7}} = \sqrt{4.578\times10^{8}} = 21{,}397\ \mathrm{nT}.$$
$$F = \sqrt{21{,}397^2 + 38{,}500^2} = \sqrt{4.578\times10^{8}+1.4823\times10^{9}} = \sqrt{1.9401\times10^{9}} = 44{,}047\ \mathrm{nT}.$$
$$D = \arctan\frac{4100}{21{,}000} = \arctan(0.19524) = +11.0^\circ \ \text{(east)}.$$
$$I = \arctan\frac{-38{,}500}{21{,}397} = \arctan(-1.7993) = -60.9^\circ.$$

(b) $I$ is negative, so the field points **upward** out of the ground — the **southern** hemisphere.

(c) $$\tan\lambda = \frac{\tan I}{2} = \frac{-1.7993}{2} = -0.89965 \;\Rightarrow\; \lambda = -41.98^\circ, \text{ i.e. } 42.0^\circ\mathrm{S}.$$

As always this is the *dipole* latitude, which differs from the true geographic latitude by the dipole tilt and the non-dipole field — several degrees at any single site, and the reason palaeomagnetic studies average many samples over thousands of years.

</details>

## Connections

- **Backward:** the internal-source conclusion and the surface field's spectrum are [3.1](03-01-the-main-field.md)'s; the liquid outer core in which all this happens was established seismologically in [1.4](01-04-travel-time-curves-deep-earth.md) from the absence of S waves.
- **Forward:** [3.3](03-03-paleomagnetism.md) and [3.4](03-04-magnetic-anomalies-reversals.md) use the field and its reversals as a recording medium without needing the mechanism; [5.4](05-04-the-core.md) works out the core's energy budget and the inner core's age, which is the constraint Example 2 ran into.
- **Sideways:** the induction equation, frozen-in flux and the magnetic Reynolds number are [plasma-physics 3.2](../../plasma-physics/lessons/03-02-ideal-mhd-frozen-flux.md)'s ideal MHD, applied to a liquid metal rather than an ionized gas — the same equations run the solar dynamo and the magnetic fields of galaxies. The Taylor–Proudman constraint that makes the convection columnar is the same rotational rigidity that produces geostrophic flow in [atmospheric-science 4.3](../../atmospheric-science/lessons/04-03-geostrophic-gradient-wind.md) and [oceanography 2.1](../../oceanography/lessons/02-01-geostrophy-dynamic-method.md); the core, the atmosphere and the ocean are all rotation-dominated fluids obeying the same constraint at wildly different scales.
