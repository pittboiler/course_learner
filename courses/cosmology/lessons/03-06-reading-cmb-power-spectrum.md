# Cosmology · Lesson 3.6: Reading the CMB power spectrum

> ⏱ ~15 min · Module 3: The CMB and structure formation · Builds on: [3.5 CMB anisotropies and acoustic oscillations](03-05-cmb-anisotropies-acoustic-oscillations.md) · Unlocks: [4.1 The horizon and flatness problems](04-01-horizon-flatness-problems.md)

## Why this matters

Every number you have used in this course — $\Omega_m \approx 0.31$, $\Omega_\Lambda \approx 0.69$, $\Omega_b h^2 \approx 0.022$, $H_0 \approx 67$, a flat universe ([1.5](01-05-cosmic-energy-budget-lambda-cdm.md)) — comes, to percent precision, from **one plot**: the CMB angular power spectrum. In [3.5](03-05-cmb-anisotropies-acoustic-oscillations.md) you learned *why* the last-scattering surface rings with acoustic oscillations. This lesson teaches you to **read the ringing**: to look at a graph of bumps and pull the entire contents of the universe out of it. The location of the first bump tells you space is flat (that is Boss Problem 3, which you will derive here); the relative heights weigh the atoms and the dark matter; the fade-out at small scales measures how photons diffused. This is the single most information-dense measurement in cosmology.

## The idea

The CMB sky is a temperature map: slightly hotter here, slightly colder there, at the level of one part in $10^5$. You cannot summarize a map with a single number, but you *can* ask: **how much of the wiggling happens at each angular scale?** Is the sky mostly mottled in big degree-sized patches, or in fine arcminute speckle? The answer — power as a function of angular scale — is the **power spectrum**, and it is all you need, because the primordial fluctuations were random with no preferred direction (statistical isotropy). The map has more detail than the spectrum, but none of that extra detail carries cosmological information; it is just one particular random draw.

Think of it exactly like sound. A struck bell produces a complicated pressure wave, but what you actually *hear* — what identifies the bell — is its spectrum of tones: a fundamental plus overtones, each with a certain loudness. The last-scattering surface is a bell that rang once. The power spectrum is its tone chart. The **fundamental** is the sound horizon (the farthest a pressure wave traveled before recombination froze it), and it shows up as the tallest peak; the **overtones** are the smaller peaks marching off to the right. Reading the pitch of the fundamental tells you the geometry of the room the sound crossed to reach us; reading the loudness of each overtone tells you what the gas was made of.

## The formal version

**Spherical-harmonic expansion.** The temperature fluctuation in direction $\hat n$ (a unit vector on the sky) is

$$\frac{\Delta T}{T}(\hat n) = \sum_{\ell=0}^{\infty}\sum_{m=-\ell}^{\ell} a_{\ell m}\, Y_{\ell m}(\hat n),$$

where $Y_{\ell m}$ are the spherical harmonics and $a_{\ell m}$ are complex coefficients. *In words: decompose the temperature map into wiggles of definite angular size, exactly the way a Fourier series decomposes a signal into sines* — the $Y_{\ell m}$ are the Fourier basis on a sphere (bridge to Fourier analysis, and the same spirit as the Fourier decomposition of the density field in [3.4](03-04-matter-power-spectrum.md)). The index $\ell$ (the **multipole**) counts how many times the pattern oscillates around the sky: $\ell=0$ is the mean, $\ell=1$ the dipole, and large $\ell$ means fine structure. The index $m$ labels orientation.

**Angular scale.** A multipole $\ell$ corresponds to an angular scale

$$\theta \approx \frac{\pi}{\ell}, \qquad\text{equivalently}\qquad \ell \approx \frac{\pi}{\theta}.$$

*In words: big $\ell$ = small angles, small $\ell$ = big angles.* A degree-sized patch ($\theta \approx 1^\circ = \pi/180$ rad) sits at $\ell \approx 180$.

**The power spectrum.** Because the sky is statistically isotropic, the physics depends only on $\ell$, not on $m$ or orientation. The **angular power spectrum** is the variance of the coefficients at each multipole,

$$C_\ell = \big\langle |a_{\ell m}|^2 \big\rangle,$$

the average taken over the $2\ell+1$ values of $m$. *In words: $C_\ell$ is how much temperature variance lives at angular scale $\theta \approx \pi/\ell$.* By universal convention we plot not $C_\ell$ but

$$\boxed{\;\mathcal{D}_\ell \equiv \frac{\ell(\ell+1)}{2\pi}\,C_\ell\;}$$

against $\ell$, because $\mathcal{D}_\ell$ is (roughly) the power per logarithmic interval in $\ell$ — it makes the flat Sachs–Wolfe plateau look flat and puts the acoustic peaks on honest display. This $\mathcal{D}_\ell$-vs-$\ell$ curve is *the* plot.

**Three things to read off it:**

1. **The first-peak location $\Rightarrow$ geometry (flatness).** The tallest peak sits at the angular scale of the **sound horizon** $r_s$ — the comoving distance a pressure wave crossed before recombination ([3.5](03-05-cmb-anisotropies-acoustic-oscillations.md)) — viewed across the comoving distance to last scattering $D_A$:

$$\theta_1 \approx \frac{r_s}{D_A}, \qquad \ell_1 \approx \frac{\pi}{\theta_1} = \frac{\pi D_A}{r_s}.$$

*In words: the loudest tone is the biggest sound wave that had time to complete; its apparent size on the sky is a standard ruler.* For a **flat** universe this lands at $\ell_1 \approx 200$ (about $1^\circ$). Spatial curvature bends photon paths on the way to us and changes the apparent size — closed geometry (positive curvature) acts as a converging lens and pushes the peak to **lower** $\ell$ (larger angles); open geometry pushes it to **higher** $\ell$. Measured value: $\ell_1 \approx 220 \Rightarrow \Omega_k \approx 0$, space is flat. (This is Boss Problem 3.)

2. **The peak heights $\Rightarrow$ the budget.**
   - **Baryons ($\Omega_b h^2$).** Baryons add inertia to the photon–baryon fluid ("baryon loading"), deepening the compressions relative to the rarefactions. Compressions are the *odd* peaks (1st, 3rd), rarefactions the *even* peaks (2nd). So more baryons **raise odd peaks over even ones**: the **1st/2nd peak-height ratio measures $\Omega_b h^2$**. The value it returns, $\Omega_b h^2 \approx 0.022$, agrees with the utterly independent measurement from Big Bang nucleosynthesis ([2.4](02-04-big-bang-nucleosynthesis.md)) — two epochs, three minutes and 380{,}000 years old, giving the same answer. A genuine triumph.
   - **Matter ($\Omega_m h^2$).** The total matter density sets the redshift of matter–radiation equality $z_\text{eq}$ and how much the decaying radiation "drives" the oscillations; it controls the **overall peak heights and especially the third peak**. More dark matter damps the driving and lowers the first two peaks relative to the third.

3. **The damping tail $\Rightarrow$ diffusion.** At high $\ell$ (small scales) the peaks fade away. Recombination is not instantaneous, and during it photons random-walk out of the smallest hot and cold spots (**Silk / diffusion damping**), erasing them. Power falls off roughly exponentially beyond the third peak.

**The low-$\ell$ plateau.** At the smallest $\ell$ (largest angles, scales bigger than the sound horizon), no oscillation could occur — those regions never had time to ring. Here $\mathcal{D}_\ell$ is a flat **Sachs–Wolfe plateau**, set by the gravitational redshift of photons climbing out of the primordial potential wells, and it fixes the overall amplitude of the fluctuations.

## Picture

![The CMB angular power spectrum: D_ell versus multipole ell, showing the Sachs–Wolfe plateau at low ell, the first acoustic peak near ell = 220 marked as the flatness probe, a harmonic series of decreasing peaks, the 1st-to-2nd height ratio marked as the baryon probe, and the Silk damping tail at high ell](assets/03-06-fig1.svg)

## Worked examples

**Example 1 (read the ruler).** Where on the sky is the first peak? Using $\ell_1 \approx 220$,

$$\theta_1 \approx \frac{\pi}{\ell_1} = \frac{\pi}{220} = 0.0143\ \text{rad} = 0.0143 \times \frac{180^\circ}{\pi} \approx 0.82^\circ.$$

So the hot and cold spots of the CMB are typically about eight-tenths of a degree across — roughly one and a half full moons. Every degree-scale blob you see in a CMB map is one acoustic wavelength of the primordial plasma, frozen in place. That angular size is the standard ruler that certifies flatness.

**Example 2 (why the ratio weighs the atoms).** Imagine two universes identical except one has twice the baryons. In the baryon-heavy one, the fluid is heavier, so gravity pulls it *deeper* into the potential wells during each compression — but the rebound (rarefaction) is no stronger. Compressions are enhanced, rarefactions are not. Since the 1st and 3rd peaks are compressions and the 2nd is a rarefaction, the baryon-heavy universe has a **taller 1st peak relative to its 2nd**. Measuring how much taller pins $\Omega_b h^2$ without ever counting a single atom — and it matches what deuterium abundance told us in [2.4](02-04-big-bang-nucleosynthesis.md). Two clocks, same time.

## Watch out

- **You might think each $a_{\ell m}$ carries information you're throwing away by averaging into $C_\ell$.** For a Gaussian, statistically isotropic field, *all* the cosmological information is in the $C_\ell$; the individual $a_{\ell m}$ are just one random realization. What the average loses is only the luck of our particular sky. (At the lowest $\ell$ there are few $m$'s to average over, so the estimate is intrinsically noisy — that irreducible uncertainty is **cosmic variance**.)
- **You might think the peak location by itself nails every parameter.** It does not. Different combinations of $\Omega_m$, $\Omega_\Lambda$, and $H_0$ can hold $\ell_1$ fixed while shuffling their values — the **geometric degeneracy**. The peak location tightly constrains the *curvature* ($\Omega_k$), but breaking the remaining degeneracy needs the peak *heights* plus outside data: baryon acoustic oscillations, gravitational lensing, and direct $H_0$. Planck plus these delivers percent-level parameters.
- **You might read "first peak at $\ell \approx 200$" as an exact prediction.** The crude standard-ruler estimate $\ell_1 = \pi D_A/r_s$ gives the *acoustic scale* (also the peak spacing), $\approx 300$; the observed first peak sits a bit lower, near $220$, because radiation driving shifts it. The robust statement is "a few hundred," and that alone already forces $\Omega_k \approx 0$ — an open or closed universe would move it far outside that window.

## One-liner

> Expand the CMB sky in spherical harmonics, plot $\mathcal{D}_\ell = \ell(\ell+1)C_\ell/2\pi$, and the whole universe falls out: peak *location* $\Rightarrow$ flat space, peak *heights* $\Rightarrow$ the baryon and matter budget, the fading *tail* $\Rightarrow$ photon diffusion.

## Problems

**P1 (🟢)** Using $\ell \approx \pi/\theta$: (a) convert the first-peak multipole $\ell_1 \approx 220$ to an angular scale $\theta_1$ in degrees. (b) Conversely, a feature at angular scale $\theta = 1^\circ$ sits at what multipole $\ell$?

**P2 (🟡, Boss-3 rehearsal)** Take the comoving sound horizon $r_s \approx 150$ Mpc and the comoving distance to last scattering $D_A \approx 14$ Gpc $= 14{,}000$ Mpc. (a) Estimate the angular scale $\theta_1 = r_s/D_A$ of the first peak, in radians and degrees. (b) Estimate $\ell_1 \approx \pi/\theta_1$. (c) You get a few hundred — argue why this certifies a flat universe, and reconcile it with the measured $\ell_1 \approx 220$.

**P3 (🔴)** (a) Explain physically why a **closed** (positively curved) universe shifts the first peak to *lower* $\ell$ than the flat prediction. (b) Explain how the **1st/2nd peak-height ratio** pins down $\Omega_b$, and why its agreement with BBN ([2.4](02-04-big-bang-nucleosynthesis.md)) is a non-trivial check rather than circular reasoning.

<details>
<summary>Solutions</summary>

**P1** (a) $\theta_1 \approx \pi/\ell_1 = \pi/220 = 0.0143$ rad. Convert: $0.0143 \times (180^\circ/\pi) = 0.818^\circ \approx 0.8^\circ$. (b) $\theta = 1^\circ = \pi/180 = 0.01745$ rad, so $\ell = \pi/\theta = \pi/0.01745 = 180$. *Check:* the two are consistent — a slightly-under-one-degree spot ($0.82^\circ$) sits at a slightly-above-180 multipole (220), and shrinking the angle to a full degree drops $\ell$ to 180, matching the inverse relation $\ell \propto 1/\theta$. ✓

**P2** (a) $\theta_1 = r_s/D_A = 150/14{,}000 = 0.0107$ rad $= 0.0107 \times (180^\circ/\pi) = 0.61^\circ$. (b) $\ell_1 \approx \pi/\theta_1 = 3.1416/0.0107 \approx 293$. (c) The prediction is a *few hundred* — order $\ell \sim 200$–$300$. This is decisive for geometry because curvature would move it by a large factor: an open universe (say $\Omega_m \sim 0.3$ with no $\Lambda$ to flatten it) would push the first peak out toward $\ell \sim 400$–$600$, a closed one down toward $\ell \sim 100$. The measured $\ell_1 \approx 220$ lands squarely in the flat window, so $\Omega_k \approx 0$. The gap between our crude $293$ and the observed $220$ is real and understood: $\pi D_A/r_s \approx 293$ is the fundamental **acoustic scale** (and the peak *spacing*), while the first peak itself sits about $25\%$ lower because the decaying radiation potential "drives" and phase-shifts the oscillation. The order of magnitude — a couple hundred, not a couple thousand and not ten — is what carries the flatness verdict, and it is airtight. (If instead you round $\theta_1$ up to the famous "$\approx 1^\circ$," you recover the textbook mnemonic $\ell_1 \approx \pi/(\pi/180) = 180 \approx 200$.) ✓

**P3** (a) The sound horizon $r_s$ is a fixed *physical* length laid down at recombination; what we measure is the *angle* it subtends. In a closed universe space has positive curvature, so light rays from the two ends of the ruler converge as they travel toward us (like lines of longitude bending together toward a pole) — a converging-lens effect. Convergence makes the ruler look **bigger**: $\theta_1$ increases. Since $\ell_1 \approx \pi/\theta_1$, a larger angle means a **smaller** $\ell_1$ — the peak moves to lower multipole (larger angular scale). (An open universe curves the other way, rays diverge, the ruler looks smaller, and the peak moves to higher $\ell$.) The geometry enters through $D_A$: curvature changes how a comoving ruler at last scattering projects onto an observed angle. (b) Baryon loading deepens the *compression* half-cycles without strengthening the *rarefactions*. The 1st and 3rd peaks are compressions, the 2nd is a rarefaction, so adding baryons raises the odd peaks relative to the even one: the **1st/2nd height ratio grows monotonically with $\Omega_b h^2$**, letting you read the baryon density straight off the graph. The agreement with BBN is non-circular because the two measurements share *no* physics and *no* epoch: BBN sets $\Omega_b h^2$ from nuclear reaction rates and light-element abundances (deuterium, helium) at $t \sim 3$ minutes and $T \sim 10^9$ K, while the CMB sets it from the acoustic dynamics of a photon–baryon fluid at $t \sim 380{,}000$ years and $T \sim 3000$ K. Two independent windows on the early universe return the same $\Omega_b h^2 \approx 0.022$ — a stringent consistency test of the hot Big Bang, not an assumption baked into both. ✓

</details>

## Flashback

**From Lesson 2.4 (Big Bang nucleosynthesis):** BBN sets the light-element abundances through the **baryon-to-photon ratio** $\eta = n_b/n_\gamma$, which is tied to the baryon density by $\eta_{10} \equiv 10^{10}\,\eta \approx 274\,\Omega_b h^2$. The CMB power spectrum's 1st/2nd peak ratio (this lesson) measures $\Omega_b h^2 \approx 0.022$. (a) Compute $\eta$. (b) Roughly how many photons are there per baryon, and what is the significance of BBN and the CMB agreeing on this number?

<details>
<summary>Solution</summary>

(a) $\eta_{10} = 274 \times 0.022 = 6.0$, so $\eta = 6.0 \times 10^{-10}$.

(b) The universe holds about $1/\eta \approx 1/(6.0\times10^{-10}) \approx 1.7 \times 10^{9}$ photons for every baryon — roughly a billion and a half photons per proton or neutron. Its significance: $\eta$ is the *single* free parameter of standard BBN (it sets the reaction rates that fix how much deuterium and helium form), and it is *also* fixed independently by the CMB acoustic peaks half a million years later. That two completely separate physical regimes — nuclear reactions at $t\sim 3$ min and photon–baryon acoustics at $t\sim 380{,}000$ yr — demand the same tiny value, $\eta \approx 6\times10^{-10}$, is one of the strongest quantitative confirmations that the hot Big Bang picture is correct.

*Check:* $274 \times 0.022 = 6.03$; and $\eta = 6\times10^{-10}$ inverts to $1.67\times10^{9}$ photons per baryon. ✓ This is the same $\Omega_b h^2$ appearing in two roles — the nuclear clock of [2.4](02-04-big-bang-nucleosynthesis.md) and the acoustic clock of this lesson.

</details>

## Connections

- **Backward:** this lesson is the measurement that closes Module 3. It reads out the acoustic oscillations of [3.5](03-05-cmb-anisotropies-acoustic-oscillations.md) (sound horizon, baryon loading, compressions vs rarefactions), uses the comoving distances of [1.3](01-03-redshift-cosmic-distances.md), delivers the flat, $\Omega_m \approx 0.31$, $\Omega_b h^2 \approx 0.022$ budget of [1.5](01-05-cosmic-energy-budget-lambda-cdm.md), and cross-checks the baryon density of [2.4](02-04-big-bang-nucleosynthesis.md). The spherical-harmonic decomposition is a Fourier analysis on the sphere — the angular cousin of the matter power spectrum $P(k)$ from [3.4](03-04-matter-power-spectrum.md).
- **Forward:** the flatness verdict $\Omega_k \approx 0$ you derive here is precisely the fine-tuning puzzle that opens the next module — [4.1 The horizon and flatness problems](04-01-horizon-flatness-problems.md) asks *why* the early universe was so exquisitely flat, and inflation is the proposed answer.
- **Sideways (relativity):** the standard-ruler argument lives or dies on how a comoving length at last scattering projects to an observed angle — the angular diameter distance in a curved FLRW spacetime. That geometry is set by the [relativity](../../relativity/syllabus.md) course's FLRW metric and its curvature term $k$; the CMB peak location is, quite literally, a measurement of the curvature of space.
