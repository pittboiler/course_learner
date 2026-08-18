# Cosmology · Lesson 4.3: Primordial perturbations from inflation

> ⏱ ~15 min · Module 4: Inflation, dark energy, and observational cosmology · Builds on: [4.2 The inflationary mechanism](04-02-inflationary-mechanism.md), [3.4 The matter power spectrum](03-04-matter-power-spectrum.md) · Unlocks: [4.4 Dark energy and cosmic acceleration](04-04-dark-energy-cosmic-acceleration.md)

## Why this matters

In [4.1](04-01-horizon-flatness-problems.md) inflation earned its keep by curing the horizon and flatness problems. But that is the *boring* half of the story — a patch on a broken model. The spectacular half is this: the same accelerated expansion that smooths the universe also **plants the seeds of everything in it**. The tiny density ripples that grew into galaxies, the temperature freckles on the CMB ([3.5](03-05-cmb-anisotropies-acoustic-oscillations.md)), the whole matter power spectrum $P(k)$ from [3.4](03-04-matter-power-spectrum.md) — all of it, inflation says, began as **quantum vacuum fluctuations** of a single scalar field, stretched to astronomical size. This is the boldest claim in cosmology: the largest structures in the universe are frozen quantum noise. And it comes with a sharp, falsifiable number — a spectrum tilted just slightly off scale-invariance — that the data confirmed.

## The idea

Every quantum field jitters, even in empty space. A quantum harmonic oscillator can never sit perfectly still at the bottom of its well — the uncertainty principle forbids it, leaving an irreducible **zero-point fluctuation** (the same $\tfrac12\hbar\omega$ ground-state energy you meet in quantum-mechanics — see the [quantum-mechanics syllabus](../../quantum-mechanics/syllabus.md)). The inflaton field $\phi$ from [4.2](04-02-inflationary-mechanism.md) is, mode by mode, just a collection of such oscillators. So it too jitters: $\phi = \bar\phi(t) + \delta\phi$, where $\bar\phi$ is the smooth rolling background and $\delta\phi$ is the quantum wobble.

Ordinarily that wobble is microscopic and averages away. Inflation does something violent to it: it **stretches** each wobble faster than light can cross it. Picture a mode of the field — a ripple of some fixed comoving wavelength. Early in inflation the ripple is tiny, snug inside the horizon, oscillating as a good quantum jitter should. But the universe is inflating, so the ripple's *physical* size balloons exponentially while the horizon barely grows. Soon the ripple is bigger than the horizon — its two ends can no longer talk to each other. With no time to keep oscillating, the fluctuation **freezes**: its amplitude locks in and just waits. Much later, after inflation ends and normal expansion resumes, the horizon catches back up, the ripple re-enters, and it is now a *classical* density perturbation of exactly the frozen amplitude — a ready-made seed for gravity to grow.

The magic ingredient is that during inflation $H$ is nearly constant. Every mode freezes at roughly the same amplitude, set by $H$ at the moment it crossed out. So the seeds come out **nearly the same size on every scale** — a near-scale-invariant spectrum. That is the fingerprint we go looking for.

## The formal version

**The comoving Hubble radius does the work.** Define the **comoving Hubble radius** $R_H = 1/(aH)$, where $a$ is the scale factor and $H=\dot a/a$ the Hubble rate. It is (roughly) the largest comoving distance over which physics can act coherently in one expansion time. A comoving mode of wavenumber $k$ (comoving wavelength $\sim 1/k$) is **sub-horizon** when $k > aH$ and **super-horizon** when $k < aH$. *In words: compare the ripple's size $1/k$ to the reach of causal physics $1/(aH)$ — smaller means the ripple still feels itself; bigger means it's frozen.*

During inflation $a$ grows exponentially while $H$ is nearly constant, so

$$R_H = \frac{1}{aH} \;\;\text{shrinks} \qquad (\text{inflation}),$$

and after inflation, in the ordinary radiation/matter universe, $R_H$ grows again. So a mode with fixed $k$ starts sub-horizon, **exits** the horizon during inflation (at $k = aH$), stays frozen while super-horizon, and **re-enters** the horizon during the hot Big Bang. *In words: inflation runs the horizon backward, pushing ripples out; the later universe lets them back in.*

**Horizon crossing and the frozen amplitude.** Solving the field equation for $\delta\phi$ in a de Sitter background (a quantum oscillator with a time-stretched frequency) gives, at the moment a mode crosses the horizon,

$$\langle \delta\phi^2 \rangle_k \;\approx\; \left(\frac{H}{2\pi}\right)^2.$$

*In words: each mode freezes with a root-mean-square field wobble of about $H/2\pi$* — the only scale available in a de Sitter phase. This field wobble becomes a wobble in *when* inflation ends from place to place, i.e. a curvature (density) perturbation $\mathcal R$. Translating $\delta\phi$ into the gauge-invariant curvature perturbation and using the slow-roll parameter $\epsilon$ from [4.2](04-02-inflationary-mechanism.md) gives the **scalar power spectrum**

$$\boxed{\;\mathcal P_{\mathcal R}(k) \;\approx\; \frac{1}{8\pi^2}\,\frac{H^2}{\epsilon\,M_{\text{Pl}}^2}\;}\qquad\text{evaluated at horizon crossing } k=aH,$$

where $M_{\text{Pl}}$ is the reduced Planck mass (we set $M_{\text{Pl}}=1$ in problems) and $\epsilon = \tfrac12 M_{\text{Pl}}^2 (V'/V)^2$ measures how fast the potential rolls. *In words: the seed amplitude is the Hubble scale squared, boosted by how flat the potential is — a slower roll (smaller $\epsilon$) means a bigger kick.*

**Near-scale-invariance and the spectral index.** Because $H$ and $\epsilon$ drift only slowly (slow roll!), modes that cross the horizon at different times get *almost* the same $\mathcal P_{\mathcal R}$. Almost — not exactly. Writing the spectrum as a power law $\mathcal P_{\mathcal R}(k)\propto k^{\,n_s-1}$, the small **tilt** is

$$\boxed{\;n_s - 1 = -6\epsilon + 2\eta\;}, \qquad \eta = M_{\text{Pl}}^2\,\frac{V''}{V},$$

with $\eta$ the second slow-roll parameter from [4.2](04-02-inflationary-mechanism.md). *In words: the spectrum is nearly flat ($n_s\approx1$), tilted a hair by how fast the roll speeds up ($\eta$) and how steep it is ($\epsilon$).* For typical potentials $\epsilon,\eta$ are small and positive-ish, giving $n_s$ slightly **below** 1 — a "**red tilt**," slightly more power on large scales. This connects straight to [3.4](03-04-matter-power-spectrum.md): the primordial matter power spectrum is $P(k)\propto k^{\,n_s}$, and a scale-invariant seed ($n_s=1$, the Harrison–Zel'dovich case) is the $\epsilon=\eta=0$ idealization. The measured value, from *Planck*, is

$$n_s \approx 0.965,$$

a few percent below 1 — exactly the small red tilt inflation predicts, and one of its cleanest confirmed forecasts.

**Tensor modes.** Inflation stretches not just the inflaton but the *metric itself*: quantum fluctuations of spacetime freeze into a background of primordial **gravitational waves** (tensor perturbations). Their amplitude, relative to the scalar seeds, is the **tensor-to-scalar ratio** $r = 16\epsilon$. Because $r$ depends only on $\epsilon$, a detection would directly measure the energy scale of inflation. These waves imprint a swirl pattern (**B-mode** polarization) on the CMB. None has been seen yet; the current bound is $r \lesssim 0.03$, which already rules out the steepest potentials.

**Why this is the strongest evidence for inflation.** The observed perturbations are (i) **nearly scale-invariant** with a small red tilt, (ii) **adiabatic** (all species perturbed together, as a single field ending inflation everywhere demands), and (iii) **Gaussian** (as free-field quantum vacuum noise should be). Inflation predicted all three before they were measured. No rival cleanly delivers the trio.

## Picture

![Comoving Hubble radius 1/(aH) forming a valley versus scale factor: it shrinks during inflation and grows afterward, while a fixed comoving mode 1/k (horizontal coral line) exits the horizon during inflation, stays frozen while super-horizon, and re-enters later.](assets/04-03-fig1.svg)

The blue curve is the comoving Hubble radius $1/(aH)$: it **shrinks** through inflation and **grows** afterward, carving a valley. The coral line is one comoving mode, fixed at $1/k$. Where the shrinking curve drops below it, the mode **exits** the horizon and freezes; where the growing curve rises back above it, the mode **re-enters**. Everything in between is the long quantum-to-classical freeze.

## Worked examples

**Example 1 (read the tilt).** Suppose a model predicts $\epsilon = 0.01$ and $\eta = 0.005$. Then

$$n_s - 1 = -6(0.01) + 2(0.005) = -0.06 + 0.01 = -0.05,\qquad n_s = 0.95,$$

a red tilt, and $r = 16\epsilon = 0.16$ — large enough that a B-mode search should have seen it. Since observations give $n_s\approx0.965$ and $r\lesssim0.03$, this particular model rolls a touch too fast: its $\epsilon$ is too big. The data are squeezing $\epsilon$ downward, toward flatter potentials.

**Example 2 (from a wobble to a galaxy).** Trace the logic end to end. (1) A mode of comoving size $1/k$ starts as a quantum jitter of the inflaton, amplitude $\delta\phi \sim H/2\pi$. (2) It exits the horizon and freezes — its amplitude is now locked at the value $H$ had *at that crossing*. (3) Different scales crossed at slightly different times, when $H$ was slightly different, so the frozen amplitudes differ by the tiny tilt $n_s-1$. (4) After inflation the mode re-enters the horizon as a classical density contrast $\delta\rho/\rho$; gravity ([3.2](03-02-gravitational-instability-linear-growth.md)) amplifies it. (5) The statistical spread of these seeds *is* the primordial $P(k)\propto k^{n_s}$ of [3.4](03-04-matter-power-spectrum.md), later reshaped by the transfer function into the spectrum we measure. A quantum fluctuation became a supercluster.

## Watch out

- **You might think the fluctuation keeps oscillating after it leaves the horizon.** It doesn't — once super-horizon, causal physics can't act across it in an expansion time, so $\mathcal R$ **freezes**, constant, until re-entry. That constancy is exactly what lets us connect an inflationary calculation to a CMB observation billions of years later.
- **You might read "scale-invariant" as "flat spectrum, $n_s=0$."** No — scale-invariant is $n_s = 1$ (the Harrison–Zel'dovich value); the primordial curvature power is *constant per log-interval*. The measured $n_s\approx0.965$ is a small departure *from 1*, not from 0.
- **You might think shrinking $R_H$ means the universe shrinks.** The opposite — $a$ grows fast; it's the *comoving Hubble radius* $1/(aH)$ that shrinks because $a$ races ahead of the nearly-constant $H$. Physical distances balloon; the causal patch, in comoving terms, contracts.
- **You might expect a bigger $\epsilon$ to raise the scalar amplitude.** It lowers it: $\mathcal P_{\mathcal R}\propto 1/\epsilon$. But a bigger $\epsilon$ *raises* $r=16\epsilon$. Flatter potentials give louder scalars and quieter tensors.

## One-liner

> Inflation stretches the inflaton's quantum zero-point jitter past the horizon, where it freezes into a near-scale-invariant ($n_s\approx0.965$) spectrum of classical density seeds — quantum noise, blown up to the size of galaxies.

## Problems

**P1 (🟢)** *Planck* measures $n_s = 0.965$. State the sign of the tilt (red or blue), compute $n_s - 1$, and say what the sign implies about the slow-roll parameters via $n_s-1=-6\epsilon+2\eta$.

**P2 (🟡, Boss-4 rehearsal)** For chaotic inflation with $V=\tfrac12 m^2\phi^2$ in units $M_{\text{Pl}}=1$, the slow-roll parameters are $\epsilon = 2/\phi^2$ and $\eta = 2/\phi^2$. At $N=60$ e-folds before the end of inflation, $\phi^2 \approx 4N = 240$. Compute $\epsilon$, $\eta$, the spectral index $n_s = 1 - 6\epsilon + 2\eta$, and the tensor-to-scalar ratio $r = 16\epsilon$. Compare with $n_s\approx0.965$ and $r\lesssim0.03$.

**P3 (🔴)** Explain, without heavy algebra, (a) why a **shrinking** comoving Hubble radius is the essential mechanism — what would go wrong if $1/(aH)$ grew throughout inflation — and (b) why a **nearly constant** $H$ produces a near-scale-invariant spectrum.

<details>
<summary>Solutions</summary>

**P1** The tilt is $n_s - 1 = 0.965 - 1 = -0.035$. It is **negative**, so the spectrum is **red-tilted** (slightly more power on large scales). From $n_s - 1 = -6\epsilon + 2\eta = -0.035$: since $\epsilon \ge 0$ always, the combination is pushed negative primarily by the $-6\epsilon$ term, so a red tilt is consistent with (indeed generic for) small positive slow-roll parameters with $3\epsilon > \eta$. In words: the potential is rolling and steepening slowly enough to nudge $n_s$ just below 1 — a genuine, non-trivial prediction, since $n_s$ could a priori have been 1 or blue.

*Check.* $-6\epsilon+2\eta=-0.035$ is easily solved by e.g. $\epsilon=0.007,\ \eta=0.0035$ (both small, both positive) → $-0.042+0.007=-0.035$ ✓, confirming small slow-roll values reproduce the observed tilt.

**P2** With $\phi^2 = 240$ and $M_{\text{Pl}}=1$:

$$\epsilon = \frac{2}{\phi^2} = \frac{2}{240} = \frac{1}{120} \approx 0.00833,\qquad \eta = \frac{2}{\phi^2} = \frac{1}{120} \approx 0.00833.$$

Spectral index (note $\epsilon=\eta$ here, so $-6\epsilon+2\eta = -4\epsilon = -8/\phi^2$):

$$n_s = 1 - 6\epsilon + 2\eta = 1 - \frac{8}{\phi^2} = 1 - \frac{8}{240} = 1 - 0.0333 \approx 0.967.$$

Tensor-to-scalar ratio:

$$r = 16\epsilon = \frac{32}{\phi^2} = \frac{32}{240} \approx 0.133.$$

Comparison: $n_s \approx 0.967$ sits beautifully on the observed $0.965$ — the $m^2\phi^2$ model nails the tilt. But $r \approx 0.13$ badly overshoots the bound $r \lesssim 0.03$. So B-mode/tensor limits **rule out** simple $\tfrac12 m^2\phi^2$ chaotic inflation, even though its spectral index looks perfect. A model can pass one test and fail another; both matter.

*Check.* $8/240 = 1/30 = 0.0333$ ✓ and $32/240 = 2/15 = 0.1333$ ✓. Consistency relation $r = 16\epsilon$ vs. $n_s-1=-4\epsilon$ gives $r = -4(n_s-1) = -4(-0.0333) = 0.133$ ✓.

**P3** (a) The whole point is to make a fixed comoving mode $1/k$ pass from *inside* the horizon (where quantum jitter lives and physics can generate it) to *outside* (where it freezes into a classical seed). That transition requires the comoving Hubble radius $1/(aH)$ to **shrink below** $1/k$. If $1/(aH)$ instead grew throughout, modes would only ever *enter* the horizon, never exit — there would be no super-horizon freezing, no mechanism to stretch sub-horizon quantum fluctuations up to cosmic scales, and no way to explain correlations across regions larger than the naive causal horizon (the very horizon problem of [4.1](04-01-horizon-flatness-problems.md)). Shrinking $1/(aH)$ is what "acausally" links distant patches and freezes seeds. (b) The amplitude a mode freezes with is set by $H$ at its horizon crossing, $\mathcal P_{\mathcal R}\sim H^2/(\epsilon M_{\text{Pl}}^2)$. Modes of different $k$ cross at different times, but if $H$ (and $\epsilon$) barely change during inflation, then every mode freezes with essentially the *same* amplitude — the spectrum is nearly independent of scale, i.e. near-scale-invariant. The tiny drift of $H$ and $\epsilon$ is exactly the small tilt $n_s-1=-6\epsilon+2\eta$.

</details>

## Flashback

**From Lesson 4.2 (The inflationary mechanism):** For the potential $V(\phi) = \tfrac12 m^2\phi^2$ with $M_{\text{Pl}}=1$, the number of e-folds from field value $\phi$ down to the end of inflation is $N(\phi) = \tfrac14\phi^2 - \tfrac12$. Roughly how large must $\phi$ (in Planck units) be to get the $N=60$ e-folds needed to solve the horizon problem? (Fresh variant — you're solving for $\phi$, not reading off $\epsilon$.)

<details>
<summary>Solution</summary>

Set $N=60$ and drop the $-\tfrac12$ as negligible against 60:

$$60 = \tfrac14\phi^2 - \tfrac12 \;\Longrightarrow\; \phi^2 = 4\left(60 + \tfrac12\right) = 242 \;\Longrightarrow\; \phi = \sqrt{242} \approx 15.6.$$

So inflation must start from $\phi \approx 15.6\,M_{\text{Pl}}$ — a **super-Planckian** field excursion. This is exactly the $\phi^2\approx 240$ used in P2 (dropping the $\tfrac12$ gives $\phi^2 = 4N = 240$), tying the e-fold count directly to the slow-roll prediction.

*Check.* $\sqrt{242}\approx 15.56$ and $15.56^2 = 242$ ✓. Large field values ($\phi \gg M_{\text{Pl}}$) are characteristic of "large-field"/chaotic inflation — and are precisely why such models tend to predict a sizable $r$, as P2's $r\approx0.13$ showed.

</details>

## Connections

- **Backward:** this closes the loop opened in [3.4](03-04-matter-power-spectrum.md) and [3.5](03-05-cmb-anisotropies-acoustic-oscillations.md) — those lessons *measured* the primordial spectrum $P(k)\propto k^{n_s}$ and the CMB anisotropies; here we finally *derive their origin*. The slow-roll parameters $\epsilon,\eta$ and the near-constant $H$ come straight from [4.2](04-02-inflationary-mechanism.md).
- **Forward:** [4.4 Dark energy and cosmic acceleration](04-04-dark-energy-cosmic-acceleration.md) returns to accelerated expansion — but *today's*, driven by dark energy rather than an inflaton. The comoving Hubble radius starts shrinking again now, a "second inflation," which is why the far future re-runs the horizon-exit story on the largest scales.
- **Sideways (quantum mechanics):** the frozen amplitude $\delta\phi\sim H/2\pi$ is nothing but the ground-state zero-point fluctuation of a harmonic oscillator, the $\tfrac12\hbar\omega$ vacuum jitter of the [quantum-mechanics course](../../quantum-mechanics/syllabus.md), stretched classical by expansion. Inflation is the only place in physics where zero-point vacuum noise is imaged directly on the sky.
