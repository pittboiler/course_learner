# Quantum Optics & Photonics · Lesson 2.2: Spatial coherence

> ⏱ ~15 min · Module 2: Coherence & the classical-to-quantum bridge · Builds on: [2.1 Temporal coherence and $g^{(1)}$](02-01-temporal-coherence-g1.md), [waves-optics 4.1 (double-slit interference)](../../waves-optics/lessons/04-01-interference-double-slit-thin-films.md) · Unlocks: [2.3 Photon statistics and $g^{(2)}$](02-03-photon-statistics-g2.md)

## Why this matters

In [2.1](02-01-temporal-coherence-g1.md) we asked: does the field at one point stay in step with *itself* a moment later? That's **temporal** coherence — a question about time, or equivalently about distance *along* the beam. Now rotate the question by ninety degrees: do two points *side by side across* the wavefront march in step? That's **spatial** coherence, and it answers a completely different practical question — whether a source can make sharp interference fringes, form a diffraction-limited focus, or feed a single-mode fiber. Remarkably, the answer is fixed almost entirely by one number you can often read off the sky: the **angular size of the source**. Push this idea hard enough and it becomes a measuring tool: it's how Michelson weighed the diameter of a star he could never resolve with any telescope.

## The idea

Temporal coherence lives along the direction the light travels; spatial coherence lives *transverse* to it — across the face of the beam. Picture the wavefront arriving at a wall and ask about two points on it, $P_1$ and $P_2$, a distance $a$ apart. Are their oscillations locked together, or do they wander independently?

Here's the intuition for what controls it. A single *point* source sends one clean expanding wave; every point on a distant wavefront is a faithful copy of the same oscillation, just delayed — perfectly locked. Now fatten the source into an *extended* blob. Each little patch of the blob sends its own wavefront, tilted slightly because it sits at a slightly different angle. At $P_1$ and $P_2$ these tilted contributions pile up with different relative phases, and if the source is wide enough the phases smear across a full cycle — the two points lose their lockstep. So: **small source ⇒ high spatial coherence; big source ⇒ low.** Not brightness — *angular size*.

The probe that reads this out is [Young's double slit](../../waves-optics/lessons/04-01-interference-double-slit-thin-films.md). Put the two slits at $P_1$ and $P_2$. If those points are coherent, the two beams interfere and you get crisp bright-and-dark fringes; if they're incoherent, the "fringes" from every source patch land in different places and average into a flat gray wash. **Fringe contrast is a direct meter of spatial coherence.**

## The formal version

**The complex degree of spatial coherence.** For two transverse points $\mathbf r_1,\mathbf r_2$ on the wavefront, compare the fields at the *same instant* $t$ (that's what makes it spatial, not temporal):

$$g^{(1)}(\mathbf r_1,\mathbf r_2)=\frac{\langle E^*(\mathbf r_1,t)\,E(\mathbf r_2,t)\rangle}{\sqrt{\langle |E(\mathbf r_1,t)|^2\rangle\,\langle |E(\mathbf r_2,t)|^2\rangle}},$$

where $E$ is the complex field amplitude, $E^*$ its complex conjugate, and $\langle\cdot\rangle$ a long-time (ensemble) average. *In words: it's the normalized correlation between what the field does at one point and what it does at another, at the same moment.* Its magnitude runs $0\le |g^{(1)}|\le 1$: $|g^{(1)}|=1$ means fully coherent (locked), $|g^{(1)}|=0$ fully incoherent (independent), in between partially coherent. This is the transverse twin of the temporal $g^{(1)}(\tau)$ from [2.1](02-01-temporal-coherence-g1.md) — same correlation idea, separation in *space* instead of *delay*.

**Visibility measures it.** Run the two points through a double slit of equal illumination. The fringe **visibility**

$$V=\frac{I_{\max}-I_{\min}}{I_{\max}+I_{\min}}=|g^{(1)}(\mathbf r_1,\mathbf r_2)|$$

with $I_{\max},I_{\min}$ the brightest and darkest fringe intensities. *In words: measure how deep the fringes cut, and you've measured the degree of coherence between the slit positions — no extra theory needed.*

**Transverse coherence length.** For a source of angular size $\theta_s$ (radians) — a disk of diameter $D$ seen from distance $R$ subtends $\theta_s = D/R$ — the wavefront stays coherent out to a transverse separation

$$\boxed{\;\ell_\perp \approx \frac{\lambda}{\theta_s}=\frac{\lambda R}{D}\;}$$

with $\lambda$ the wavelength. *In words: two points closer than $\ell_\perp$ are locked; farther apart, they aren't.* Fringes are sharp while the slit separation $a\lesssim\ell_\perp$ and wash out once $a\gtrsim\ell_\perp$. The **coherence area** is roughly $A_c\approx \ell_\perp^{\,2}\approx(\lambda/\theta_s)^2$ — the patch of wavefront that acts as one coherent unit.

**Van Cittert–Zernike theorem (intuition-level).** For an incoherent source, the complex degree of coherence $g^{(1)}$ across a distant observation plane is the **normalized Fourier transform of the source's intensity distribution**:

$$g^{(1)}(\mathbf a)\;\propto\;\int I_{\text{src}}(\boldsymbol\theta)\,e^{-\,i\,k\,\mathbf a\cdot\boldsymbol\theta}\,d^2\theta,\qquad k=\frac{2\pi}{\lambda},$$

where $\mathbf a$ is the separation (baseline) between the two points and $\boldsymbol\theta$ runs over the source's angular extent. *In words: how coherence falls off as you pull the two points apart is literally the Fourier transform of the source's shape on the sky.* A tiny source (near a delta function) has a broad, slowly-decaying transform — coherent over long baselines; a broad source has a narrow transform — coherence dies quickly. Crucially it runs backwards too: **measure $V$ versus baseline $a$, inverse-transform, and you recover the source's angular size and shape** without ever resolving it in an image.

**Stellar interferometry.** That inversion is Michelson's stellar interferometer: widen the baseline $a$ between two collecting apertures until the fringes first vanish. For a uniform circular disk of angular diameter $\theta_s$, the van Cittert–Zernike transform is the Airy pattern $2J_1(x)/x$, whose first zero fixes the baseline:

$$\theta_s\approx\frac{1.22\,\lambda}{a_{\max}},$$

with $a_{\max}$ the baseline at first null. *In words: the star's angular diameter is $1.22\lambda$ divided by the aperture separation that kills the fringes* — the same $1.22$ as the Rayleigh criterion, because it's the same Airy zero, now read on a baseline instead of a lens.

## Picture

![Extended source of angular size theta_s illuminating a double slit of separation a; top row a < coherence length gives sharp fringes, bottom row a > coherence length gives washed-out fringes, with a coral marker for the transverse coherence length](assets/02-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — is the source coherent across the slits?).** A distant lamp of diameter $D=2\ \mathrm{mm}$ sits $R=4\ \mathrm{m}$ away; you illuminate it in green light, $\lambda=500\ \mathrm{nm}$. Its angular size is $\theta_s=D/R=2\times10^{-3}/4=5\times10^{-4}\ \mathrm{rad}$, so

$$\ell_\perp\approx\frac{\lambda}{\theta_s}=\frac{5\times10^{-7}}{5\times10^{-4}}=10^{-3}\ \mathrm{m}=1\ \mathrm{mm}.$$

Slits $0.5\ \mathrm{mm}$ apart ($a<\ell_\perp$) sit inside one coherence patch → strong fringes, $V$ close to 1. Slits $3\ \mathrm{mm}$ apart ($a>\ell_\perp$) straddle several patches → fringes wash out, $V\to0$. Same lamp, same brightness — only the *separation* relative to $\ell_\perp$ decides.

**Example 2 (why you'd care — sizing something you can't resolve).** A telescope of aperture $d=1\ \mathrm{m}$ can resolve angles down to $\sim1.22\lambda/d\approx0.7\times10^{-6}\ \mathrm{rad}\approx0.14''$ — far too coarse to see a star as anything but a point. But coherence doesn't care about a single aperture: split the light into two small mirrors and slide them apart on a rail until the fringes die. If that happens at $a_{\max}=6\ \mathrm{m}$ (at $\lambda=550\ \mathrm{nm}$), then $\theta_s\approx1.22\lambda/a_{\max}=1.22\times5.5\times10^{-7}/6\approx1.1\times10^{-7}\ \mathrm{rad}\approx0.023''$. You've measured a stellar diameter six times finer than the telescope could resolve — because a wide baseline of *coherence measurement* substitutes for a wide *aperture*. That's van Cittert–Zernike doing the work: the baseline of first null is one point on the Fourier transform of the star's disk.

## Watch out

- **You might think "coherence" is one number.** It's two independent axes. Temporal coherence (set by bandwidth $\Delta\nu$, along the beam — [2.1](02-01-temporal-coherence-g1.md)) and spatial coherence (set by angular size $\theta_s$, across the beam) are decoupled: a pinhole in front of a white lamp is spatially coherent but temporally awful, while a multimode laser can be temporally sharp yet spatially messy. Fringes need *both* to survive — small path difference *and* small baseline.
- **You might think a brighter source is more coherent.** Brightness is irrelevant; only *angular size* $\theta_s$ counts. Cranking up the lamp power leaves $\ell_\perp$ unchanged. To buy spatial coherence you either shrink the source (a pinhole) or move it farther away (smaller $\theta_s$) — the "spatial filter" trick.
- **You might invert the relation.** $\ell_\perp\approx\lambda/\theta_s$ means *smaller* source → *larger* coherence length. A point source ($\theta_s\to0$) gives $\ell_\perp\to\infty$ (coherent everywhere); a huge source gives a tiny coherence patch. If your fringes died, the source is too *big* (or the baseline too wide), not too dim.

## One-liner

> Spatial coherence is set by the source's angular size: two points on a wavefront stay locked out to $\ell_\perp\approx\lambda/\theta_s$, so fringe visibility versus baseline Fourier-images the source — even a star you can't resolve.

## Problems

**P1 (🟢)** A source subtends angular size $\theta_s=1.0\times10^{-3}\ \mathrm{rad}$. Working at $\lambda=633\ \mathrm{nm}$, find the transverse coherence length $\ell_\perp$. Will a double slit with separation $a=0.4\ \mathrm{mm}$ produce visible fringes?

**P2 (🟡)** The Sun subtends about $\theta_s\approx0.5^\circ$ from Earth. Estimate its transverse coherence length and coherence area on the ground at $\lambda=500\ \mathrm{nm}$, and comment on what that means for doing a double-slit experiment in raw sunlight.

**P3 (🔴)** The red supergiant Betelgeuse has an angular diameter of about $\theta_s\approx0.044''$ (arcseconds). At $\lambda=550\ \mathrm{nm}$, what interferometer baseline $a_{\max}$ drives the fringe visibility to its first null? Explain, via van Cittert–Zernike, why finding that one baseline is enough to give the diameter — and what wider baselines would add.

<details>
<summary>Solutions</summary>

**P1** Directly from the boxed relation,

$$\ell_\perp\approx\frac{\lambda}{\theta_s}=\frac{6.33\times10^{-7}\ \mathrm{m}}{1.0\times10^{-3}}=6.33\times10^{-4}\ \mathrm{m}\approx0.63\ \mathrm{mm}.$$

The slit separation $a=0.4\ \mathrm{mm}$ is smaller than $\ell_\perp\approx0.63\ \mathrm{mm}$, so the two slits fall inside one coherence patch: $|g^{(1)}|$ is still appreciable and the fringes are **visible** (moderate-to-high visibility). Push the slits past $\sim0.6\ \mathrm{mm}$ and they'd wash out.

*Check.* Units: $\mathrm{m}/\mathrm{rad}=\mathrm{m}$ (radians are dimensionless) ✓. Sanity: a milliradian source is fairly small, so a sub-millimeter coherence length is reasonable.

**P2** Convert the angular size: $\theta_s=0.5^\circ=0.5\times\pi/180\approx8.7\times10^{-3}\ \mathrm{rad}$. Then

$$\ell_\perp\approx\frac{\lambda}{\theta_s}=\frac{5\times10^{-7}}{8.7\times10^{-3}}\approx5.7\times10^{-5}\ \mathrm{m}\approx57\ \mu\mathrm{m}$$

(the uniform-disk first-null form $1.22\lambda/\theta_s$ nudges this to $\approx70\ \mu\mathrm{m}$; same ballpark). The coherence area is

$$A_c\approx\ell_\perp^{\,2}\approx(6\times10^{-5}\ \mathrm{m})^2\approx3\times10^{-9}\ \mathrm{m}^2\approx3\times10^{3}\ \mu\mathrm{m}^2,$$

a patch only about $0.06\ \mathrm{mm}$ across. **Comment:** raw sunlight is spatially coherent over just tens of microns, so any double slit with the usual $\sim0.1$–$1\ \mathrm{mm}$ spacing sees essentially independent light at the two slits — no fringes. To see Young's fringes in sunlight you must first pass it through a pinhole (or narrow slit) to shrink the *effective* source angle and blow $\ell_\perp$ up past your slit separation. This is exactly why Young used a pinhole.

*Check.* Sunlight's tiny coherence area is a famous fact; the classic pinhole-then-double-slit setup is the fix. ✓

**P3** Convert the angular diameter to radians: $1''=4.85\times10^{-6}\ \mathrm{rad}$, so $\theta_s\approx0.044\times4.85\times10^{-6}\approx2.13\times10^{-7}\ \mathrm{rad}$. The uniform-disk first null is at

$$a_{\max}\approx\frac{1.22\,\lambda}{\theta_s}=\frac{1.22\times5.5\times10^{-7}}{2.13\times10^{-7}}\approx3.1\ \mathrm{m}.$$

So the fringes should first disappear at a baseline of about $3\ \mathrm{m}$ — which is essentially what Michelson and Pease measured for Betelgeuse in 1920 (~3.07 m), the first stellar diameter ever obtained.

*Why one baseline suffices:* by van Cittert–Zernike, the visibility $V(a)=|g^{(1)}(a)|$ is the magnitude of the Fourier transform of the star's brightness on the sky. For a disk of *unknown size but assumed uniform, circular shape*, that transform is the Airy function $|2J_1(x)/x|$ with $x=\pi a\theta_s/\lambda$ — a one-parameter curve whose only unknown is $\theta_s$. Locating a single feature of it — the first zero — pins that parameter, hence the diameter. *What wider baselines add:* sampling $V(a)$ at *many* baselines traces out more of the transform, and inverse-transforming reveals departures from a plain uniform disk — limb darkening, spots, oblateness, or a companion — i.e. the source's actual shape, not just its size. That is the principle behind aperture-synthesis and modern optical interferometers (VLTI, CHARA).

*Check.* Units: $\lambda/\theta_s=\mathrm{m}/\mathrm{rad}=\mathrm{m}$ ✓. The historical match (~3 m) and the $1.22$ Airy factor (shared with telescope resolution) both land correctly. ✓

</details>

## Flashback

**From Lesson 2.1 (Temporal coherence and $g^{(1)}$):** A near-monochromatic source has a spectral bandwidth $\Delta\nu=1.5\ \mathrm{GHz}$. Estimate its coherence time $\tau_c$ and coherence length $\ell_c$. In a Michelson interferometer, up to roughly what *path-length difference* between the two arms will you still see fringes? (Fresh variant — a bandwidth, not a linewidth-in-nm, and asked as a path difference.)

<details>
<summary>Solution</summary>

Coherence time is the inverse bandwidth:

$$\tau_c\approx\frac{1}{\Delta\nu}=\frac{1}{1.5\times10^{9}\ \mathrm{Hz}}\approx6.7\times10^{-10}\ \mathrm{s}=0.67\ \mathrm{ns}.$$

Coherence length is how far light travels in that time:

$$\ell_c=c\,\tau_c\approx(3\times10^{8}\ \mathrm{m/s})(6.7\times10^{-10}\ \mathrm{s})\approx0.20\ \mathrm{m}=20\ \mathrm{cm}.$$

Fringes persist while the arm-length *path difference* stays within $\ell_c$: beyond a path difference of about $0.2\ \mathrm{m}$ the two beams no longer overlap in phase and the fringes wash out. (Equivalently the movable mirror can be displaced by up to $\ell_c/2\approx0.1\ \mathrm{m}$, since a mirror shift changes the path by twice its motion.)

*Check.* Units: $1/\mathrm{Hz}=\mathrm{s}$ ✓, $\mathrm{(m/s)}\cdot\mathrm{s}=\mathrm{m}$ ✓. Note the parallel with this lesson: temporal coherence caps the tolerable *path difference* ($\ell_c$, longitudinal), while spatial coherence caps the tolerable *transverse separation* ($\ell_\perp$) — same "how far before phases scramble" logic on the two orthogonal axes. ✓

</details>

## Connections

- **Backward:** this is the transverse partner of [2.1](02-01-temporal-coherence-g1.md)'s temporal $g^{(1)}(\tau)$ — same normalized field correlation, now in space rather than delay — and it uses the [double-slit interference](../../waves-optics/lessons/04-01-interference-double-slit-thin-films.md) machinery from waves-optics as its measuring instrument. The $1.22$ in the stellar-diameter formula is the very same Airy-disk zero as the Rayleigh resolution limit for a lens.
- **Forward:** [2.3 Photon statistics and $g^{(2)}$](02-03-photon-statistics-g2.md) moves from *field* correlations ($g^{(1)}$, amplitude-and-phase) to *intensity* correlations ($g^{(2)}$, photon coincidences) — a jump that reveals the particle side of light and leads straight into the Hanbury Brown–Twiss experiment, which (not coincidentally) was invented as an *intensity*-based stellar interferometer to sidestep the atmospheric fragility of Michelson's amplitude fringes.
- **Sideways (Fourier analysis):** van Cittert–Zernike is a Fourier-transform pair — coherence-vs-baseline $\leftrightarrow$ source brightness distribution — the spatial-domain cousin of the Wiener–Khinchin pair (temporal $g^{(1)}$ $\leftrightarrow$ power spectrum) you met in [2.1](02-01-temporal-coherence-g1.md). Recovering a source from sampled visibilities is the same inverse-transform problem as radio aperture synthesis.
