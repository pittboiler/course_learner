# Fluid Dynamics · Lesson 4.3: Hydrodynamic instability — Kelvin–Helmholtz and Rayleigh–Bénard

> ⏱ ~15 min · Module 4: Waves, instability, and turbulence · Builds on: [4.2 Sound waves](04-02-sound-waves.md), [4.1 Surface gravity and capillary waves](04-01-surface-waves.md), [2.1 Bernoulli's theorem](02-01-bernoulli.md) · Unlocks: [4.4 The transition to turbulence](04-04-transition-to-turbulence.md)

## Why this matters

Every smooth flow you have solved so far — Couette, Poiseuille, potential flow past a cylinder — is a *solution* of the equations, but that does not make it the flow you actually see. Nature only shows you flows that survive being nudged. Wind blowing over water raises ripples that grow into whitecaps; the flat interface between two sliding air layers curls into the rolling billows you see in some clouds; a pan of oil heated from below suddenly organizes itself into a tidy honeycomb of cells. In every case a *smooth* base state exists on paper but is **unstable**: tiny perturbations grow instead of fading, and the flow reorganizes into something new. This lesson is the machinery for deciding *which* — the same "does a small nudge grow or die?" question that governs a buckling beam, a laser turning on, or a population near a bifurcation. It is also the on-ramp to turbulence ([4.4](04-04-transition-to-turbulence.md)): turbulence is what you get when instabilities pile up without end.

## The idea

Take any exact flow — call it the **base flow**. Add a whisper of a disturbance and watch. If the disturbance dies away, the base flow is *stable* and is what you observe. If the disturbance grows, the base flow is *unstable*: it exists mathematically but never appears, because the smallest imperfection (and there is always one) blows it apart into whatever grows instead.

The genius trick is that a *small* disturbance obeys *linear* equations — drop everything quadratic in the small quantity — and linear equations love waves. So you feed in a single trial ripple $\propto e^{i(kx-\omega t)}$ and ask the equations for its frequency $\omega$. Here is the whole plot: $\omega$ can come out **complex**. Write $\omega = \omega_r + i\,\omega_i$. Then

$$e^{-i\omega t} = e^{-i\omega_r t}\,e^{\omega_i t},$$

so the ripple oscillates at rate $\omega_r$ but its *amplitude* is multiplied by $e^{\omega_i t}$. If $\omega_i > 0$ the amplitude runs away — **unstable**; if $\omega_i < 0$ it decays — **stable**. One sign decides everything.

And whether that sign flips is controlled by a single knob — a **dimensionless control parameter**. Turn the knob (crank up the shear, the temperature difference, the flow speed) and at a **critical value** the growth rate crosses zero: the flow switches from stable to unstable. That crossing is a **bifurcation**, exactly the object [`dynamical-systems`](../../dynamical-systems/syllabus.md) studies — a fluid wearing the same clothes. Underneath both of our examples sits one story: a **destabilizing drive** (shear energy, or buoyancy) fights **stabilizing dissipation** (viscosity, diffusion), and a dimensionless number measuring their ratio decides who wins.

## The formal version

**Linear stability analysis, in four steps.** Given a base flow $\mathbf{U}(\mathbf{x})$ (an exact steady solution):

1. Write every field as base plus a small perturbation: $\mathbf{u} = \mathbf{U} + \mathbf{u}'$, $p = P + p'$, with $|\mathbf{u}'|\ll|\mathbf{U}|$.
2. Substitute into Navier–Stokes and **keep only terms linear** in the primed quantities (the base flow already satisfies the equations, so it cancels; products like $\mathbf{u}'\cdot\nabla\mathbf{u}'$ are second-order and dropped).
3. The linearized equations have constant or simply-structured coefficients, so seek **normal-mode** solutions $\mathbf{u}'(\mathbf{x},t) = \hat{\mathbf{u}}(\mathbf{x})\,e^{i(kx-\omega t)}$ for each wavenumber $k$ (units $\mathrm{m^{-1}}$).
4. The equations then fix $\omega$ as a function of $k$ and the flow parameters — the **dispersion relation** $\omega(k)$. Read off the imaginary part.

$$\boxed{\ \operatorname{Im}\omega > 0 \ \Rightarrow\ \text{grows (unstable)};\qquad \operatorname{Im}\omega < 0 \ \Rightarrow\ \text{decays (stable)}.\ }$$

*In words: plant a single wave in the flow and ask how fast its amplitude changes; a positive imaginary frequency is exponential growth.* The marginal case $\operatorname{Im}\omega = 0$ (for the most dangerous $k$) is the **stability boundary** — the critical setting of the control parameter.

**Kelvin–Helmholtz instability (shear).** Two ideal fluids slide past each other across a flat interface: speed $+U$ above, $-U$ below (velocity jump $\Delta U = 2U$), densities $\rho_1$ (top) and $\rho_2$ (bottom), gravity $g$ stabilizing the heavier fluid on the bottom. Linearizing the interface dynamics gives, for a disturbance of wavenumber $k$,

$$\omega = k\,\frac{\rho_2 U_2 + \rho_1 U_1}{\rho_1+\rho_2}\ \pm\ \sqrt{\ \underbrace{gk\,\frac{\rho_2-\rho_1}{\rho_1+\rho_2}}_{\text{gravity: stabilizing}}\ -\ \underbrace{k^2\,\frac{\rho_1\rho_2}{(\rho_1+\rho_2)^2}(U_1-U_2)^2}_{\text{shear: destabilizing}}\ }.$$

The whole question is the sign of what is under the root. If the shear term wins, the root is imaginary, $\omega$ picks up an imaginary part, and the mode grows. *In words: shear always destabilizes, and it does so more violently at short wavelengths (large $k$), because the destabilizing piece scales as $k^2$ while gravity's stabilizing piece scales only as $k$.* With no density difference and no gravity ($\rho_1=\rho_2$, or $g\to 0$), **any** velocity jump is unstable to short-enough waves — a bare shear layer always rolls up.

*Why, physically (Bernoulli, [2.1](02-01-bernoulli.md)).* Ripple the interface upward. The upper fluid must squeeze over the bump, so it speeds up; by Bernoulli its pressure **drops** right where the interface poked up — sucking the bump *further* up. The disturbance feeds itself. The result is the rolling **"cat's-eye" billows** of the figure: clouds (Kelvin–Helmholtz clouds), wind-driven water, the lee of mountain ranges, the birth of ocean whitecaps.

**Stratification stabilizes (Richardson number, briefly).** Stable density stratification — light fluid genuinely on top of heavy — resists the overturning, because lifting heavy fluid costs gravitational energy that the shear must supply. The competition is measured by the **Richardson number**

$$Ri = \frac{N^2}{(\mathrm{d}U/\mathrm{d}z)^2},\qquad N^2 = -\frac{g}{\rho}\frac{\mathrm{d}\rho}{\mathrm{d}z}\ \ (\text{buoyancy frequency squared}),$$

the ratio of stabilizing buoyancy to destabilizing shear. A classic theorem: $Ri > \tfrac14$ everywhere is **sufficient for stability**. *In words: enough stable stratification relative to the shear shuts the instability off.*

**Rayleigh–Bénard convection (buoyancy).** A fluid layer of depth $d$ sits between a hot bottom plate and a cold top plate, temperature difference $\Delta T$. Hot fluid at the bottom is *less dense* (thermal expansion coefficient $\alpha$, units $\mathrm{K^{-1}}$) and "wants" to rise — a top-heavy arrangement. But rising is opposed by two dissipative brakes: **viscosity** $\nu$ drags a moving blob, and **thermal diffusion** $\kappa$ (units $\mathrm{m^2/s}$) leaks a warm blob's buoyancy away before it can climb. The dimensionless referee is the **Rayleigh number**

$$\boxed{\ Ra = \frac{g\,\alpha\,\Delta T\,d^{3}}{\nu\,\kappa}\ } \qquad(\text{buoyant drive} \div \text{diffusive damping}).$$

*In words: the top of the fraction is how hard buoyancy pushes; the bottom is how effectively viscosity and heat diffusion smother it.* Convection turns on only when the drive beats the brakes:

$$Ra > Ra_c \approx 1708 \quad(\text{rigid plates top and bottom}).$$

Below $Ra_c$ the layer sits still and heat crosses by pure conduction; cross $Ra_c$ and steady **convection rolls** switch on — the regular cells of the figure, of a heated pan, of Earth's mantle, and of the granulation on the Sun's surface (feeding [`astrophysics`](../../astrophysics/syllabus.md): stellar convection zones). The onset also selects a wavelength: the first rolls appear at $k_c d \approx 3.12$, so a cell is about as wide as the layer is deep.

**The common structure.** Both instabilities are: *destabilizing drive* (shear kinetic energy / buoyancy) versus *stabilizing dissipation* (viscosity, gravity/stratification, thermal diffusion), refereed by *one dimensionless number* whose *critical value* flips the outcome. That is the same logic as the Reynolds number $Re$ deciding laminar-versus-turbulent in [4.4](04-04-transition-to-turbulence.md).

## Picture

![Left: a Kelvin–Helmholtz shear layer with upper flow U and lower flow −U rolling the interface into two coral cat's-eye billows. Right: Rayleigh–Bénard convection between a hot bottom plate and cold top plate, four counter-rotating rolls rising on the hot (coral) side and sinking on the cooled (blue) side, active only when Ra exceeds 1708.](assets/04-03-fig1.svg)

## Worked examples

**Example 1 (read stability off the sign of $\operatorname{Im}\omega$).** A shear layer has dispersion relation $\omega = Uk \pm \sqrt{gk - U^2k^2}$ (equal densities, gravity retained, $g$ and $U$ in SI). Take $g = 9.8\ \mathrm{m/s^2}$, $U = 1\ \mathrm{m/s}$. Which wavelengths are unstable?

The mode grows when the quantity under the root is negative, $gk - U^2k^2 < 0$, i.e. $k > g/U^2$. With the numbers, $k > 9.8/1 = 9.8\ \mathrm{m^{-1}}$, i.e. wavelength

$$\lambda = \frac{2\pi}{k} < \frac{2\pi}{9.8} \approx 0.64\ \mathrm{m}.$$

*So waves shorter than ~64 cm grow; longer ones are held stable by gravity.* Short waves are the dangerous ones — exactly the $k^2$-beats-$k$ statement above. This is why a light breeze first raises small ripples, not long swells.

**Example 2 (will the pan convect? compute $Ra$).** A 3 mm layer of olive oil sits on a plate 5 K hotter than the air above. For oil, $\alpha \approx 7\times10^{-4}\ \mathrm{K^{-1}}$, $\nu \approx 8\times10^{-5}\ \mathrm{m^2/s}$, $\kappa \approx 1\times10^{-7}\ \mathrm{m^2/s}$. Does it convect?

$$Ra = \frac{g\,\alpha\,\Delta T\,d^3}{\nu\kappa} = \frac{9.8 \times 7\times10^{-4}\times 5 \times (3\times10^{-3})^3}{8\times10^{-5}\times 1\times10^{-7}}.$$

Numerator: $9.8\times7\times10^{-4} = 6.86\times10^{-3}$; $\times 5 = 3.43\times10^{-2}$; $\times (2.7\times10^{-8}) = 9.26\times10^{-10}$. Denominator: $8\times10^{-12}$. So

$$Ra \approx \frac{9.26\times10^{-10}}{8\times10^{-12}} \approx 116.$$

Since $116 < 1708$, **no convection** — heat crosses by conduction and the oil sits still. Note the ferocious $d^3$: triple the depth to 9 mm ($27\times$) and $Ra \approx 3100 > 1708$, so it *does* convect. Depth is the most powerful knob, which is why thin films are so hard to convect and deep layers (oceans, mantle, stars) convect readily.

## Watch out

- **You might think "$\omega$ complex" is a mistake.** It is the whole point. In a *conservative* wave problem ([4.1](04-01-surface-waves.md), [4.2](04-02-sound-waves.md)) $\omega$ is real and the wave just propagates; in a *stability* problem the imaginary part is the physics — it is the growth rate. Do not "throw away" the imaginary part.
- **Sign of the growth rate depends on the sign convention.** With the convention $e^{-i\omega t}$ used here, growth is $\operatorname{Im}\omega > 0$. If instead you write the mode as $e^{i\omega t}$, growth flips to $\operatorname{Im}\omega < 0$. And if you use a real growth rate $e^{st}$ (common for convection), instability is simply $\operatorname{Re}s > 0$. Always check which form the author wrote before reading the sign.
- **You might think heating from the top could also convect.** It cannot. Heat the *top* and the hot, light fluid is already on top — a stable arrangement ($\Delta T$ enters with the opposite sign, $Ra < 0$), so buoyancy *damps* disturbances and heat crosses by pure conduction. Only heating from *below* makes the layer top-heavy and able to overturn. Gravity's direction relative to the temperature gradient is everything.
- **$Ra_c \approx 1708$ is for rigid (no-slip) plates.** Two free surfaces give $Ra_c = 27\pi^4/4 \approx 657$; one of each is in between. The *number* depends on the boundary conditions, but the *existence of a threshold* does not.

## One-liner

> Perturb a base flow with a mode $e^{i(kx-\omega t)}$ and watch $\operatorname{Im}\omega$: a destabilizing drive (shear or buoyancy) beats stabilizing dissipation (viscosity, diffusion, stratification) once a dimensionless number — $Re$-like for shear, $Ra > 1708$ for convection — crosses its critical value, and the smooth flow rolls up.

## Problems

**P1 (🟢)** A normal mode evolves as $e^{i(kx-\omega t)}$ with $\omega = 4 - 3i\ \mathrm{s^{-1}}$. Does its amplitude grow or decay, and with what characteristic time? What if instead $\omega = 4 + 3i\ \mathrm{s^{-1}}$?

**P2 (🟡)** A water layer of depth $d = 2\ \mathrm{cm}$ is heated from below with $\Delta T = 8\ \mathrm{K}$. For water, $\alpha = 2.1\times10^{-4}\ \mathrm{K^{-1}}$, $\nu = 1.0\times10^{-6}\ \mathrm{m^2/s}$, $\kappa = 1.4\times10^{-7}\ \mathrm{m^2/s}$. Compute $Ra$ and decide whether convection occurs. Then find the $\Delta T$ at which convection just begins.

**P3 (🔴, optional)** In the equal-density shear layer with gravity, $\omega = Uk \pm \sqrt{gk - U^2 k^2}$, show that the shortest *stable* wavelength is $\lambda_{\min} = 2\pi U^2/g$, and explain in one sentence why heavier-over-lighter stratification would make the layer unstable at *every* wavelength.

<details>
<summary>Solutions</summary>

**P1** Write $\omega = \omega_r + i\omega_i$; the time factor is $e^{-i\omega t} = e^{-i\omega_r t}e^{\omega_i t}$, so the amplitude goes as $e^{\omega_i t}$.

For $\omega = 4 - 3i$: $\omega_i = -3\ \mathrm{s^{-1}} < 0$, so the amplitude **decays** as $e^{-3t}$, with characteristic time $\tau = 1/|\omega_i| = 1/3 \approx 0.33\ \mathrm{s}$ — stable.

For $\omega = 4 + 3i$: $\omega_i = +3 > 0$, the amplitude **grows** as $e^{+3t}$, e-folding time $\tau = 1/3\ \mathrm{s}$ — unstable. The real part ($\omega_r = 4$) only sets the oscillation; it says nothing about stability.

*Check.* $\tau$ has units $1/\mathrm{s^{-1}} = \mathrm{s}$ ✓, and flipping the sign of $\omega_i$ flips growth to decay, as it must. ✓

**P2** Rayleigh number:

$$Ra = \frac{g\alpha\Delta T\,d^3}{\nu\kappa} = \frac{9.8 \times 2.1\times10^{-4}\times 8 \times (0.02)^3}{1.0\times10^{-6}\times 1.4\times10^{-7}}.$$

Numerator: $9.8\times2.1\times10^{-4} = 2.058\times10^{-3}$; $\times 8 = 1.646\times10^{-2}$; $\times (8\times10^{-6}) = 1.317\times10^{-7}$. Denominator: $1.4\times10^{-13}$. So

$$Ra \approx \frac{1.317\times10^{-7}}{1.4\times10^{-13}} \approx 9.4\times10^{5}.$$

Since $9.4\times10^5 \gg 1708$, the layer **convects** vigorously. The onset $\Delta T$ solves $Ra_c = g\alpha\,\Delta T_c\,d^3/(\nu\kappa)$:

$$\Delta T_c = \frac{Ra_c\,\nu\kappa}{g\alpha d^3} = \frac{1708 \times (1.0\times10^{-6})(1.4\times10^{-7})}{9.8\times2.1\times10^{-4}\times(0.02)^3}.$$

Numerator: $1708 \times 1.4\times10^{-13} = 2.39\times10^{-10}$. Denominator: $9.8\times2.1\times10^{-4} = 2.058\times10^{-3}$; $\times 8\times10^{-6} = 1.646\times10^{-8}$. So $\Delta T_c \approx 2.39\times10^{-10}/1.646\times10^{-8} \approx 0.015\ \mathrm{K}$.

*Check.* $Ra$ is dimensionless (verify: $\tfrac{(\mathrm{m/s^2})(\mathrm{K^{-1}})(\mathrm{K})(\mathrm{m^3})}{(\mathrm{m^2/s})(\mathrm{m^2/s})} = \tfrac{\mathrm{m^4/s^2}}{\mathrm{m^4/s^2}} = 1$ ✓). Consistency: our $Ra = 9.4\times10^5$ is $(8/0.015)\approx 530\times$ above threshold, and indeed $530\times Ra_c \approx 9.0\times10^5$ ✓ (matches, since $Ra\propto\Delta T$). A hundredth of a kelvin sets a 2 cm water layer convecting — deep layers are exquisitely unstable.

**P3** The mode is stable when the radicand is non-negative, $gk - U^2k^2 \ge 0$, i.e. $k(g - U^2 k)\ge 0$, i.e. $k \le g/U^2$. Stability therefore holds for all $k$ up to $k_{\max} = g/U^2$; the corresponding shortest stable wavelength is

$$\lambda_{\min} = \frac{2\pi}{k_{\max}} = \frac{2\pi U^2}{g}.$$

Waves *longer* than this are stabilized by gravity; waves shorter are unstable. Heavier-over-lighter stratification (a top-heavy interface, $\rho_1 > \rho_2$) flips the sign of the gravity term from $+gk$ to $-gk$: now **both** terms under the root are negative for every $k$, so the radicand is negative at all wavelengths — the interface is Rayleigh–Taylor unstable at every scale, shear or no shear.

*Check.* Units: $U^2/g = (\mathrm{m/s})^2/(\mathrm{m/s^2}) = \mathrm{m}$ ✓. Limit: as $U\to 0$, $\lambda_{\min}\to 0$ — with no shear, *all* wavelengths are stable (pure gravity waves), consistent with [4.1](04-01-surface-waves.md). ✓

</details>

## Flashback

**From Lesson 4.1 (Surface gravity and capillary waves):** Deep-water gravity waves obey $\omega^2 = gk$. Compute the phase speed $c = \omega/k$ of a swell with wavelength $\lambda = 100\ \mathrm{m}$, and state whether longer or shorter waves travel faster. (Fresh variant — a numeric phase-speed evaluation, not the dispersion derivation.)

<details>
<summary>Solution</summary>

Wavenumber $k = 2\pi/\lambda = 2\pi/100 \approx 0.0628\ \mathrm{m^{-1}}$. From $\omega^2 = gk$, the phase speed is

$$c = \frac{\omega}{k} = \sqrt{\frac{g}{k}} = \sqrt{\frac{9.8}{0.0628}} \approx \sqrt{156} \approx 12.5\ \mathrm{m/s}.$$

Because $c = \sqrt{g/k} = \sqrt{g\lambda/2\pi}$, **longer waves travel faster** — a 100 m swell outruns a 10 m one by a factor $\sqrt{10}\approx 3.2$. That is why the long swells from a distant storm arrive first, sorted by wavelength.

*Check.* Units: $\sqrt{(\mathrm{m/s^2})/\mathrm{m^{-1}}} = \sqrt{\mathrm{m^2/s^2}} = \mathrm{m/s}$ ✓. Sanity: $\sim$12 m/s for an ocean swell is realistic. ✓

</details>

## Connections

- **Backward:** the linearize-and-seek-normal-modes method is exactly the wave machinery of [4.1](04-01-surface-waves.md) and [4.2](04-02-sound-waves.md) — same trial solution $e^{i(kx-\omega t)}$, same dispersion relation — but now read for its *imaginary* part rather than its real one. The Kelvin–Helmholtz mechanism runs on Bernoulli's pressure–speed trade from [2.1](02-01-bernoulli.md), and the viscosity/diffusion that stabilize convection are the $\nu\nabla^2\mathbf{u}$ term from [1.6](01-06-navier-stokes.md).
- **Forward:** [4.4 The transition to turbulence](04-04-transition-to-turbulence.md) stacks instabilities — one bifurcation feeds the next — with the Reynolds number $Re$ ([3.1](03-01-reynolds-number.md)) playing the control-parameter role that $Ra$ plays here, until the flow becomes chaotic.
- **Sideways:** a growth rate crossing zero at a critical parameter *is* a bifurcation — the loss-of-stability and threshold logic of [`dynamical-systems`](../../dynamical-systems/syllabus.md), now in fluid dress. And Rayleigh–Bénard convection is the engine of stellar convection zones and solar granulation in [`astrophysics`](../../astrophysics/syllabus.md), and of mantle convection driving plate tectonics.
