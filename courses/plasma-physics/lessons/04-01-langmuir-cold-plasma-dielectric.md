# Plasma Physics · Lesson 4.1: Electron waves — Langmuir & the cold-plasma dielectric

> ⏱ ~15 min · Module 4: Waves & instabilities · Builds on: [3.5 MHD stability & the energy principle](03-05-mhd-stability-energy-principle.md), [1.2 Plasma frequency & the plasma parameter](01-02-plasma-frequency-parameter.md) · Unlocks: [4.2 Ion-acoustic waves](04-02-ion-acoustic-waves.md)

## Why this matters

A plasma is a bundle of restoring forces — electrostatic pull, thermal pressure, magnetic tension — so it rings in many different ways. Module 4 is the catalogue of those rings, and this lesson hands you the master key that opens every entry: the **dispersion-relation method**. Perturb the equations, ride a single wave $e^{i(kx-\omega t)}$, and demand the algebra be consistent — out drops $\omega(k)$, the wave's whole personality. We cut our teeth on the simplest case, the **Langmuir wave**: the plasma oscillation of [1.2](01-02-plasma-frequency-parameter.md), now given a small thermal push so it actually *travels*. Then we compress all of it into one object, the **cold-plasma dielectric** $\varepsilon(\omega)=1-\omega_p^2/\omega^2$ — the number that decides whether a radio wave sails through a plasma or bounces off it. That single formula is why AM radio skips over the horizon, why a spacecraft goes silent on re-entry, and why talking to satellites needs a high enough frequency.

## The idea

Recall the plasma oscillation from [1.2](01-02-plasma-frequency-parameter.md): shove the electrons sideways off the fixed ions, the exposed charge sheets pull them back, they overshoot, and the slab hums at the plasma frequency $\omega_p$. But that was a *local* twitch — every electron sloshing in place, nothing handed to its neighbor. It stands still; it doesn't propagate. A pure plasma oscillation is a wave with **zero group velocity**.

Now warm the electrons up. They have thermal pressure, and pressure *communicates*: a bunched-up region doesn't just feel the electrostatic pull home, it also pushes outward on the gas next door, nudging *those* electrons. The disturbance walks. The electrostatic restoring force still sets the basic pitch $\omega_p$, and thermal pressure adds a small, wavelength-dependent stiffening on top — shorter wavelengths (bigger $k$) feel more pressure and ring a touch faster. That is the **Bohm–Gross** dispersion, and its extra term is exactly what turns a standing oscillation into a real, traveling **Langmuir wave**. It is longitudinal (electrons bunch *along* the direction of travel) and electrostatic (the wave's field is the field of those bunches — no magnetic part).

The second idea is bookkeeping genius. Instead of re-deriving the electron response every time, package it once as a **dielectric constant** $\varepsilon(\omega)$: treat the plasma as a transparent medium whose "permittivity" depends on frequency. For cold electrons that number is $\varepsilon(\omega)=1-\omega_p^2/\omega^2$ — and *everything* follows from where it is zero (a natural electrostatic oscillation) and where it is negative (a wave that can't get in).

## The formal version

### The method: perturb, linearize, demand a nontrivial solution

Take a uniform equilibrium (density $n_0$, everything at rest) and add a small ripple to every quantity. For a wave running along $x$ we try

$$n_1,\,u_1,\,E_1 \ \propto\ e^{i(kx-\omega t)},$$

with $k$ the wavenumber (rad/m, so wavelength $\lambda=2\pi/k$) and $\omega$ the angular frequency (rad/s). *In words: guess that the disturbance is a single sinusoid and let the equations tell us which pairs $(k,\omega)$ are allowed.* The magic of this ansatz is that calculus becomes algebra: $\partial/\partial t \to -i\omega$ and $\partial/\partial x \to ik$. We linearize (throw away products of small quantities like $u_1\,\partial u_1/\partial x$), reduce everything to one homogeneous equation, and demand it have a **nontrivial** solution. That condition is the **dispersion relation** $\omega(k)$.

### Langmuir waves: warm electrons, immobile ions

The ions are $\sim$2000+ times heavier, so on electron timescales treat them as a fixed neutralizing background of density $n_0$. The warm electron fluid obeys three equations — mass, momentum, and the field it makes.

**Continuity** (electrons are neither created nor destroyed), with electron fluid velocity $u$:

$$\frac{\partial n}{\partial t}+\frac{\partial (n u)}{\partial x}=0.$$

**Momentum** for an electron fluid element (mass $m_e$, charge $-e$), pushed by the electric force $-eE$ and by its own pressure gradient:

$$m_e n\left(\frac{\partial u}{\partial t}+u\frac{\partial u}{\partial x}\right)=-n e E-\frac{\partial p_e}{\partial x}.$$

For a 1-D adiabatic compression (the electrons can't share heat sideways during a fast oscillation, so the relevant ratio of specific heats is $\gamma=3$, not $5/3$), the pressure tracks density as $p_e\propto n^{\gamma}$, giving the linearized pressure force

$$\frac{\partial p_e}{\partial x}=\gamma k_B T_e\frac{\partial n}{\partial x}=3k_B T_e\frac{\partial n_1}{\partial x},$$

where $k_B$ is Boltzmann's constant and $T_e$ the electron temperature. **Poisson's equation** ties the field to the charge the ripple exposes (ions fixed at $n_0$, electrons at $n=n_0+n_1$, so net charge density is $-e\,n_1$):

$$\frac{\partial E}{\partial x}=\frac{-e\,n_1}{\varepsilon_0},$$

with $\varepsilon_0$ the permittivity of free space. Now linearize ($n=n_0+n_1$, $u=u_1$, $E=E_1$, all small $\propto e^{i(kx-\omega t)}$) and swap derivatives for factors:

$$
\begin{aligned}
\text{continuity:}&\quad -i\omega\,n_1+n_0\,ik\,u_1=0 &&\Rightarrow\quad \omega\,n_1=n_0 k\,u_1,\\[2pt]
\text{momentum:}&\quad -i\omega\,m_e n_0\,u_1=-n_0 e\,E_1-3ik\,k_B T_e\,n_1,\\[2pt]
\text{Poisson:}&\quad ik\,E_1=\frac{-e\,n_1}{\varepsilon_0} &&\Rightarrow\quad E_1=\frac{i e\,n_1}{k\varepsilon_0}.
\end{aligned}
$$

Use continuity to write $u_1=\omega n_1/(n_0 k)$ and Poisson to eliminate $E_1$; the momentum equation becomes (dividing through by $-i n_1$)

$$\frac{\omega^2 m_e}{k}=\frac{n_0 e^2}{k\varepsilon_0}+3k\,k_B T_e.$$

Multiply by $k/m_e$ and read off the **Bohm–Gross dispersion relation**:

$$\boxed{\ \omega^2=\omega_p^2+3k^2 v_{th,e}^2=\omega_p^2\bigl(1+3k^2\lambda_D^2\bigr)\ }$$

where $\omega_p=\sqrt{n_0 e^2/\varepsilon_0 m_e}$ is the plasma frequency from [1.2](01-02-plasma-frequency-parameter.md), $v_{th,e}\equiv\sqrt{k_B T_e/m_e}$ is the electron thermal speed, and $\lambda_D=v_{th,e}/\omega_p=\sqrt{\varepsilon_0 k_B T_e/n_0 e^2}$ is the Debye length ($\lambda_D^2=v_{th,e}^2/\omega_p^2$ links the two forms). *In words: electrons slosh at the plasma frequency $\omega_p$, and thermal pressure adds a small $k$-dependent stiffening.*

**Why it now travels.** The group velocity — the speed the energy/envelope moves — is

$$v_g=\frac{d\omega}{dk}=\frac{3k v_{th,e}^2}{\omega}.$$

At long wavelength ($k\to 0$) we get $\omega\to\omega_p$ and $v_g\to 0$: this is the standing plasma oscillation of [1.2], recovered exactly. It's the pressure term that lifts $v_g$ off zero and makes it a genuine wave. Two sanity notes: (i) the fluid derivation quietly *missed* something — a kinetic treatment ([2.4 Landau damping](02-04-landau-damping.md)) shows this same wave loses energy to electrons surfing at $v\approx\omega/k$, an effect the smooth fluid picture can't see; the two descriptions are complementary, not contradictory. (ii) Langmuir waves make sense only for $k\lambda_D\lesssim 1$; once the wavelength shrinks to the Debye length, Landau damping is so fierce the wave can't exist.

### The cold-plasma dielectric

Set $T_e=0$ (drop the pressure term). The electron momentum equation alone, $-i\omega m_e u_1=-eE_1$, gives an electron current $J=-en_0 u_1$, and stuffing that into Ampère's law repackages the plasma as a dielectric medium with

$$\boxed{\ \varepsilon(\omega)=1-\frac{\omega_p^2}{\omega^2}\ }$$

*In words: below $\omega_p$ the electrons respond so vigorously that they over-cancel the wave's field, and the effective permittivity goes negative.* Two consequences flow from this one line:

- **Longitudinal (electrostatic) modes** need $\varepsilon(\omega)=0$ — a field that sustains itself with no external drive. That happens at $\omega=\omega_p$: the cold Langmuir oscillation, the $k\to 0$ tip of the Bohm–Gross curve.
- **Transverse EM waves** crossing the plasma obey $k^2c^2=\omega^2\varepsilon(\omega)$, i.e.

$$\omega^2=\omega_p^2+c^2k^2,$$

with $c$ the speed of light. This branch has a **cutoff at $\omega_p$**: for $\omega>\omega_p$, $k$ is real and the wave transmits; for $\omega<\omega_p$, $k^2<0$ so $k$ is imaginary, the wave is **evanescent** (it decays as $e^{-|k|x}$) and is **reflected**. This is precisely the "mirror below $f_p$, window above" rule from [1.2]: the ionosphere ($f_p\sim$ several MHz) bounces AM radio back to Earth, and any spacecraft link must sit *above* the local $f_p$ to punch through.

In a magnetic field the single number $\varepsilon(\omega)$ becomes the **cold-plasma dielectric tensor** — a $3\times 3$ object whose cutoffs and resonances organize the entire magnetized-wave zoo (that's the general framework named here; we meet its Alfvén corner in [4.3](04-03-em-alfven-waves.md)).

## Picture

![Dispersion diagram, ω versus k. A blue Langmuir/Bohm–Gross branch starts at ω_p at k=0 and curves gently upward; a coral electromagnetic branch also starts at ω_p and climbs steeply toward the light line ω=ck. The region ω below ω_p is shaded as forbidden — waves there are evanescent and reflected.](assets/04-01-fig1.svg)

Both branches are born at the same cutoff $\omega_p$ but grow up differently: the Langmuir branch (blue) stiffens slowly, its slope set by the tiny thermal speed $\sqrt{3}\,v_{th,e}$; the EM branch (coral) shoots up toward the light line $\omega=ck$. Nothing lives in the shaded band $\omega<\omega_p$.

## Worked examples

**Example 1 (Bohm–Gross frequency and group velocity).** A lab plasma has $n_0=10^{12}\ \mathrm{cm^{-3}}=10^{18}\ \mathrm{m^{-3}}$ and $T_e=2\ \mathrm{eV}$. From [1.2], $\omega_p\approx 5.64\times10^{4}\sqrt{n[\mathrm{cm^{-3}}]}=5.64\times10^{10}\ \mathrm{rad/s}$. The thermal speed: $k_B T_e=2\times1.602\times10^{-19}=3.20\times10^{-19}\ \mathrm{J}$, so

$$v_{th,e}=\sqrt{\frac{k_B T_e}{m_e}}=\sqrt{\frac{3.20\times10^{-19}}{9.11\times10^{-31}}}\approx 5.93\times10^{5}\ \mathrm{m/s},\qquad \lambda_D=\frac{v_{th,e}}{\omega_p}\approx 1.05\times10^{-5}\ \mathrm{m}.$$

Take a Langmuir wave with $k\lambda_D=0.3$ (so $k\approx 0.3/\lambda_D\approx 2.86\times10^{4}\ \mathrm{m^{-1}}$, wavelength $\approx 0.22$ mm). Then

$$\omega=\omega_p\sqrt{1+3(0.3)^2}=\omega_p\sqrt{1.27}\approx1.127\,\omega_p\approx 6.36\times10^{10}\ \mathrm{rad/s},$$
$$v_g=\frac{3k v_{th,e}^2}{\omega}=\frac{3(2.86\times10^{4})(5.93\times10^{5})^2}{6.36\times10^{10}}\approx 4.7\times10^{5}\ \mathrm{m/s}\approx 0.8\,v_{th,e}.$$

The frequency sits just 13% above $\omega_p$, and the wave crawls along at under a thermal speed — a very slow, very stiff wave, exactly as the near-flat blue branch predicts.

**Example 2 (cutoff and the re-entry blackout).** A spacecraft plows into the atmosphere and its shock heats a plasma sheath to $n_0\approx 10^{13}\ \mathrm{cm^{-3}}$. Its cutoff frequency is

$$f_p\approx 8.98\times10^{3}\sqrt{n[\mathrm{cm^{-3}}]}=8.98\times10^{3}\sqrt{10^{13}}\approx 2.84\times10^{10}\ \mathrm{Hz}=28.4\ \mathrm{GHz}.$$

A ground radar or comms link at $10\ \mathrm{GHz}$ (X-band) has $f<f_p$: $\varepsilon<0$, the wave is evanescent, it **reflects** — this is the infamous communications blackout. A $35\ \mathrm{GHz}$ (Ka-band) link has $f>f_p$: $\varepsilon>0$, it **transmits**. That's exactly why blackout is beaten by going to higher frequency (or thinning the sheath).

## Watch out

- **A plasma oscillation is not yet a wave.** At $k\to 0$ the Langmuir "wave" has $v_g\to 0$: it doesn't carry energy anywhere. Only the thermal ($3k^2v_{th}^2$) term gives it legs. Don't picture $\omega_p$ as a traveling wave — it's the *pitch* of a standing ring, and the cutoff of the propagating branches.
- **The factor is 3, not 1 (nor $5/3$).** The adiabatic index for a fast 1-D compression with one degree of freedom is $\gamma=(2+N)/N=3$. Using isothermal ($\gamma=1$) or 3-D adiabatic ($5/3$) gives the wrong Bohm–Gross coefficient. The "3" is worth memorizing.
- **The fluid Langmuir wave looks undamped — it isn't.** The fluid model has no information about individual particle velocities, so it misses **Landau damping** ([2.4](02-04-landau-damping.md)) entirely. Fluid gives you the real part of $\omega$; you need kinetics for the imaginary part.
- **Cutoff vs. resonance.** A cutoff is $k\to 0$ (wavelength $\to\infty$, wave reflects); a resonance is $k\to\infty$ (wave absorbed). Here $\omega_p$ is a cutoff. The magnetized tensor adds resonances too — don't conflate the two.

## One-liner

> Perturb $\propto e^{i(kx-\omega t)}$ and demand consistency: warm electrons give the Bohm–Gross wave $\omega^2=\omega_p^2+3k^2v_{th}^2$, and cold ones collapse to the dielectric $\varepsilon=1-\omega_p^2/\omega^2$, whose zero is the plasma oscillation and whose sign flip at $\omega_p$ reflects every wave below it.

## Problems

**P1 (🟢)** A Langmuir wave lives in a plasma with $n_0=10^{16}\ \mathrm{m^{-3}}$ and $T_e=3\ \mathrm{eV}$, at $k\lambda_D=0.2$. (a) By what factor does $\omega$ exceed $\omega_p$? (b) Is this wave "nearly non-propagating," and what quantity makes you say so? (You may leave $v_g$ as a multiple of $v_{th,e}$.)

**P2 (🟡)** A shortwave radio operator relies on the ionospheric layer with $n_0=1.2\times10^{12}\ \mathrm{m^{-3}}$. (a) Find its plasma (cutoff) frequency $f_p$. (b) A $5\ \mathrm{MHz}$ signal and a $15\ \mathrm{MHz}$ signal are aimed skyward — which reflects back to Earth (skip propagation) and which escapes to space? (Use $f_p\approx 8.98\times10^{3}\sqrt{n[\mathrm{cm^{-3}}]}\ \mathrm{Hz}$; note $10^{12}\ \mathrm{m^{-3}}=10^{6}\ \mathrm{cm^{-3}}$.)

**P3 (🔴, optional)** An EM wave at $\omega=0.8\,\omega_p$ is incident on a plasma with $n_0=10^{12}\ \mathrm{cm^{-3}}$ ($\omega_p=5.64\times10^{10}\ \mathrm{rad/s}$). (a) Using $\varepsilon(\omega)=1-\omega_p^2/\omega^2$, show the wave is evanescent and that the field decays as $e^{-x/\delta}$ with skin depth $\delta=c/\sqrt{\omega_p^2-\omega^2}$. (b) Evaluate $\delta$. (c) What is the one $\omega$ (with $k=0$) at which the cold plasma supports a self-sustaining *longitudinal* oscillation, and why?

<details>
<summary>Solutions</summary>

**P1** (a) Bohm–Gross with $k\lambda_D=0.2$:
$$\frac{\omega}{\omega_p}=\sqrt{1+3(0.2)^2}=\sqrt{1+0.12}=\sqrt{1.12}\approx 1.058.$$
So $\omega$ is only about **6% above $\omega_p$**. (b) Yes — nearly non-propagating. The tell is the group velocity: $v_g=3k v_{th,e}^2/\omega=3(k\lambda_D)(v_{th,e}\omega_p/\omega)\cdot? $ Cleanly, write $v_g=3k v_{th}^2/\omega$ and use $k=0.2/\lambda_D$, $\lambda_D=v_{th}/\omega_p$:
$$v_g=\frac{3(0.2/\lambda_D)v_{th}^2}{\omega}=\frac{0.6\,v_{th}^2/\lambda_D}{\omega}=\frac{0.6\,v_{th}\omega_p}{\omega}=\frac{0.6\,v_{th}}{1.058}\approx 0.57\,v_{th,e}.$$
Since $v_g$ is a fraction of the (small) thermal speed — and vanishes entirely as $k\to0$ — the wave barely transports energy; it is close to the standing plasma oscillation.

*Check.* Dimensionless $k\lambda_D=0.2\ll1$, so we expect $\omega\approx\omega_p$ and small $v_g$ — consistent. Units: $v_g\propto v_{th}$, a speed. ✓

**P2** (a) $n_0=1.2\times10^{12}\ \mathrm{m^{-3}}=1.2\times10^{6}\ \mathrm{cm^{-3}}$, so
$$f_p\approx 8.98\times10^{3}\sqrt{1.2\times10^{6}}=8.98\times10^{3}(1.095\times10^{3})\approx 9.8\times10^{6}\ \mathrm{Hz}\approx 9.8\ \mathrm{MHz}.$$
(b) The $5\ \mathrm{MHz}$ signal has $f<f_p$ → **reflects** (skips back to Earth — long-distance shortwave). The $15\ \mathrm{MHz}$ signal has $f>f_p$ → **escapes to space**.

*Check.* Ionospheric critical frequencies really do sit at a few–10 MHz, and the shortwave band straddles the cutoff — matching the everyday fact that lower HF bands "skip" farther. ✓

**P3** (a) At $\omega=0.8\,\omega_p$, $\varepsilon=1-1/0.8^2=1-1.5625=-0.5625<0$. The EM dispersion $k^2c^2=\omega^2\varepsilon$ then gives $k^2<0$, so $k=i\kappa$ is pure imaginary; $e^{ikx}=e^{-\kappa x}$ decays. With $k^2c^2=\omega^2-\omega_p^2$ (from $\omega^2=\omega_p^2+c^2k^2$), $\kappa^2=(\omega_p^2-\omega^2)/c^2$, so the field falls as $e^{-x/\delta}$ with
$$\delta=\frac{1}{\kappa}=\frac{c}{\sqrt{\omega_p^2-\omega^2}}.$$
(b) $\omega_p^2-\omega^2=\omega_p^2(1-0.64)=0.36\,\omega_p^2$, so $\sqrt{\omega_p^2-\omega^2}=0.6\,\omega_p=3.38\times10^{10}\ \mathrm{s^{-1}}$, and
$$\delta=\frac{3\times10^{8}}{3.38\times10^{10}}\approx 8.9\times10^{-3}\ \mathrm{m}\approx 0.9\ \mathrm{cm}.$$
(c) $\omega=\omega_p$, the root of $\varepsilon(\omega)=0$. A longitudinal mode needs a field that sustains itself with no drive; $\varepsilon=0$ is exactly the condition for a nonzero $E$ with zero external charge — the cold plasma oscillation.

*Check.* $\delta=c/\sqrt{\omega_p^2-\omega^2}$: as $\omega\to\omega_p^-$ the skin depth $\to\infty$ (the wave *just* gets in — a cutoff), and deep below cutoff ($\omega\ll\omega_p$) it shrinks to the collisionless skin depth $c/\omega_p$. Both limits make sense. ✓

</details>

## Flashback

**From Module 3 (magnetic pressure & plasma beta):** A tokamak plasma has magnetic field $B=5\ \mathrm{T}$, density $n=1\times10^{20}\ \mathrm{m^{-3}}$, and $T_e=T_i=10\ \mathrm{keV}$. Compute the plasma beta $\beta=p/(B^2/2\mu_0)$, taking the kinetic pressure $p=n k_B(T_e+T_i)$, and say whether the configuration is magnetically dominated. (Use $\mu_0=4\pi\times10^{-7}\ \mathrm{H/m}$, $1\ \mathrm{eV}=1.602\times10^{-19}\ \mathrm{J}$. Fresh numbers — not the lesson's example.)

<details>
<summary>Solution</summary>

Kinetic pressure (both species at $10\ \mathrm{keV}=10^{4}\ \mathrm{eV}$):
$$p=n k_B(T_e+T_i)=10^{20}\,(2\times10^{4}\times1.602\times10^{-19})=10^{20}\times3.20\times10^{-15}\approx 3.2\times10^{5}\ \mathrm{Pa}.$$
Magnetic pressure:
$$\frac{B^2}{2\mu_0}=\frac{25}{2(4\pi\times10^{-7})}=\frac{25}{2.513\times10^{-6}}\approx 9.95\times10^{6}\ \mathrm{Pa}.$$
$$\beta=\frac{3.2\times10^{5}}{9.95\times10^{6}}\approx 0.032\approx 3\%.$$
$\beta\ll 1$, so the field carries far more pressure than the plasma — **magnetically dominated**, a low-beta configuration typical of tokamaks (the field does the confining, and there's plenty of magnetic "budget" to spare).

*Check.* Units: $[p]=\mathrm{Pa}$, $[B^2/\mu_0]=\mathrm{T^2/(H/m)}=\mathrm{Pa}$ ✓; $\beta$ dimensionless ✓. A few-percent beta is the textbook tokamak value, and low $\beta$ is why MHD stability (the energy principle of [3.5](03-05-mhd-stability-energy-principle.md)) even has a chance of holding the plasma together. ✓

</details>

## Connections

- **Backward:** this is the plasma oscillation of [1.2](01-02-plasma-frequency-parameter.md) grown up — the standing ring at $\omega_p$, given thermal pressure, becomes the traveling Bohm–Gross wave, and $\omega_p$ returns as both the wave's cutoff and the zero of $\varepsilon(\omega)$. The perturb-and-linearize machinery is the wave-theory cousin of the equilibrium-nudge in [3.5](03-05-mhd-stability-energy-principle.md): there a real $\omega^2>0$ meant stability; here it means a propagating wave (a growing mode, $\omega^2<0$, is the instability we chase in [4.4](04-04-instabilities-two-stream-drift.md)).
- **Forward:** [4.2 Ion-acoustic waves](04-02-ion-acoustic-waves.md) lets the ions move too and finds the plasma's "sound"; [4.3 EM & Alfvén waves](04-03-em-alfven-waves.md) turns the scalar $\varepsilon$ into the magnetized dielectric tensor and adds magnetic tension as a new restoring force. Both reuse today's method verbatim.
- **Sideways:** the same Langmuir wave, treated kinetically, is where **Landau damping** ([2.4](02-04-landau-damping.md)) appears — the fluid picture here deliberately misses it, so the two are complementary halves of one story. The cutoff-and-reflection physics is ordinary wave-in-a-medium optics from [`em-refresher`](../../em-refresher/syllabus.md) (evanescent waves, skin depth), and the warm-fluid continuity/momentum system is the same structure as acoustic waves in [`fluid-dynamics`](../../fluid-dynamics/syllabus.md) — Langmuir is "sound" with an electrostatic restoring force bolted on.
