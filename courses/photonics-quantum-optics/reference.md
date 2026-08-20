# Quantum Optics & Photonics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course runs one continuous argument: a laser beam is a classical wave until
you look at *when its photons arrive*, and then it isn't. Module 1 is the
machinery of making light (atoms, gain, cavities); Module 2 is the two
correlation functions that describe light without ever saying "photon"; Module 3
quantizes the field and populates it with the state zoo — number, coherent,
squeezed, thermal; Module 4 puts single photons through beam splitters, cavities,
and crystals. Mid-problem you most likely want one of four things: the
**quantum-state zoo table**, the **cavity/laser relations**, the **beam-splitter
convention**, or the **phase-matching rules**. They are all below, grouped by job.

## Notation

Several symbols are reused across modules with different meanings. Those
collisions are flagged here and repeated in *Pitfalls* — check which module you're
in before trusting a symbol.

| Symbol | Means | First used |
|---|---|---|
| $w_0$, $w(z)$ | beam waist and beam radius at $z$ — the $1/e^2$-**intensity** radius, not a hard edge | [1.1](lessons/01-01-classical-em-waves-gaussian-beams.md) |
| $z_R$ | Rayleigh range — how far from the waist before the beam visibly widens | [1.1](lessons/01-01-classical-em-waves-gaussian-beams.md) |
| $\theta$ | far-field divergence **half**-angle (the cone opens by $2\theta$) | [1.1](lessons/01-01-classical-em-waves-gaussian-beams.md) |
| $R(z)$, $\zeta(z)$ | wavefront radius of curvature, and the Gouy phase $\arctan(z/z_R)$ | [1.1](lessons/01-01-classical-em-waves-gaussian-beams.md) |
| $d$ | dipole matrix element $\langle e\lvert\hat d\rvert g\rangle$ — **also** used for the dark-count rate in 3.6 | [1.2](lessons/01-02-two-level-atom-rabi-oscillations.md) |
| $\Omega$, $\tilde\Omega$ | Rabi frequency (drive strength in rad/s) and its generalized, detuned version | [1.2](lessons/01-02-two-level-atom-rabi-oscillations.md) |
| $\Delta$ | detuning — laser minus atom, $\omega-\omega_0$ in 1.2; atom minus cavity, $\omega_0-\omega$ in 4.2 | [1.2](lessons/01-02-two-level-atom-rabi-oscillations.md) |
| $A_{21}$, $B_{12}$, $B_{21}$ | Einstein coefficients: spontaneous rate, absorption, stimulated emission | [1.3](lessons/01-03-absorption-spontaneous-stimulated-emission.md) |
| $\rho(\omega)$ | spectral energy density of the light bath — energy per volume per unit $\omega$ | [1.3](lessons/01-03-absorption-spontaneous-stimulated-emission.md) |
| $\bar n$ | mean photons per mode; thermal value $1/(e^{\hbar\omega/k_BT}-1)$ | [1.3](lessons/01-03-absorption-spontaneous-stimulated-emission.md) |
| $\sigma$ | stimulated-emission cross section — the target area one atom shows a photon | [1.4](lessons/01-04-gain-population-inversion-laser-threshold.md) |
| $\gamma$, $\gamma_0$, $\alpha_i$ | gain coefficient, its small-signal value, and distributed internal loss (all per metre) | [1.4](lessons/01-04-gain-population-inversion-laser-threshold.md) |
| $\Delta N$ | population inversion $N_2-N_1$ per unit volume — positive only when pumped | [1.4](lessons/01-04-gain-population-inversion-laser-threshold.md) |
| $I_\text{sat}$ | saturation intensity — where the gain has dropped to half $\gamma_0$ | [1.4](lessons/01-04-gain-population-inversion-laser-threshold.md) |
| $\Delta\nu_\text{FSR}$, $\mathcal F$, $\delta\nu$ | cavity mode spacing, finesse, and single-mode linewidth | [1.5](lessons/01-05-optical-cavities-laser-modes.md) |
| $Q$ | cavity quality factor $\nu/\delta\nu$ — **also** the Mandel parameter in 2.3 | [1.5](lessons/01-05-optical-cavities-laser-modes.md) |
| $\tau_c$ | cavity photon lifetime in 1.5; **coherence time** from 2.1 onward — different quantities | [1.5](lessons/01-05-optical-cavities-laser-modes.md) |
| $g^{(1)}(\tau)$ | first-order (field) correlation — how well light remembers its own phase | [2.1](lessons/02-01-temporal-coherence-g1.md) |
| $V$ | fringe visibility $(I_{\text{max}}-I_{\text{min}})/(I_{\text{max}}+I_{\text{min}})$ — **also** quantization volume (3.1) and a variance (3.6) | [2.1](lessons/02-01-temporal-coherence-g1.md) |
| $\ell_c$, $\ell_\perp$ | longitudinal coherence length $c\tau_c$, and transverse coherence length | [2.1](lessons/02-01-temporal-coherence-g1.md) |
| $S(\omega)$ | power spectrum — **also** the CHSH quantity in 4.4 and the squeeze operator in 3.5 | [2.1](lessons/02-01-temporal-coherence-g1.md) |
| $\theta_s$, $A_c$ | source angular size, and coherence area $\approx\ell_\perp^{\,2}$ | [2.2](lessons/02-02-spatial-coherence.md) |
| $g^{(2)}(\tau)$ | second-order (intensity) correlation — how much photons clump in time | [2.3](lessons/02-03-photon-statistics-g2.md) |
| $\hat a$, $\hat a^\dagger$, $\hat n$ | annihilation, creation, and number operator $\hat a^\dagger\hat a$ for one mode | [2.3](lessons/02-03-photon-statistics-g2.md) |
| $\mathcal E_0$ | "electric field per photon", $\sqrt{\hbar\omega/2\varepsilon_0 V}$ — grows as the mode shrinks | [3.1](lessons/03-01-quantizing-em-field.md) |
| $\lvert n\rangle$ | Fock (number) state — exactly $n$ photons, no phase at all | [3.2](lessons/03-02-fock-states-vacuum-zero-point.md) |
| $\alpha$, $\hat D(\alpha)$ | complex coherent amplitude ($\langle n\rangle=\lvert\alpha\rvert^2$) and the displacement operator | [3.3](lessons/03-03-coherent-states.md) |
| $\hat X_1$, $\hat X_2$ | quadratures — the cosine and sine amplitudes of the field, its "position and momentum" | [3.4](lessons/03-04-quadratures-phase-space-shot-noise.md) |
| $\hat S(\xi)$, $\xi=re^{i\theta}$ | squeeze operator; $r$ is the squeeze parameter, $\theta$ picks which quadrature gets quiet | [3.5](lessons/03-05-squeezed-states.md) |
| $\eta$ | quantum efficiency — probability an incident photon actually produces a click | [3.6](lessons/03-06-single-photon-sources-photodetection.md) |
| $\hat c$, $\hat d$ | the two beam-splitter **output** modes ($\hat a,\hat b$ are the inputs) | [4.1](lessons/04-01-quantum-beam-splitter-hong-ou-mandel.md) |
| $v$ | internal-state overlap $\lvert\langle\phi_a\lvert\phi_b\rangle\rvert$ of two photons — the HOM dip has visibility $v^2$ | [4.1](lessons/04-01-quantum-beam-splitter-hong-ou-mandel.md) |
| $g$, $\kappa$ | atom–cavity coupling (single-photon Rabi frequency) and the cavity photon-leak rate | [4.2](lessons/04-02-cavity-qed-jaynes-cummings.md) |
| $\hat\sigma_z$, $\hat\sigma_\pm$ | atomic inversion, and the raise/lower operators $\lvert e\rangle\langle g\rvert$, $\lvert g\rangle\langle e\rvert$ | [4.2](lessons/04-02-cavity-qed-jaynes-cummings.md) |
| $\lvert n,\pm\rangle$ | dressed states — the mixed atom-plus-field eigenstates on excitation rung $n$ | [4.2](lessons/04-02-cavity-qed-jaynes-cummings.md) |
| $\chi^{(n)}$ | $n$-th order susceptibility; $\chi^{(2)}$ is the frequency-mixing term | [4.3](lessons/04-03-nonlinear-optics-parametric-down-conversion.md) |
| $p$, $s$, $i$ | pump, signal, idler — the three modes of down-conversion | [4.3](lessons/04-03-nonlinear-optics-parametric-down-conversion.md) |
| $\lvert\Psi^-\rangle$ | the polarization singlet, the Bell state type-II SPDC delivers | [4.4](lessons/04-04-entangled-photons-bell-tests.md) |
| $E(a,b)$ | correlation of Alice's and Bob's $\pm1$ outcomes at analyzer angles $a$ and $b$ | [4.4](lessons/04-04-entangled-photons-bell-tests.md) |
| $\lvert H\rangle,\lvert V\rangle,\lvert\pm\rangle$ | rectilinear and diagonal polarization bases — conjugate to each other | [4.5](lessons/04-05-quantum-information-taste.md) |

## Definitions

### Gaussian beam

The lowest-order paraxial solution of Maxwell's equations: a bell-shaped
transverse intensity profile that pinches to a waist and flares into a cone.
Sideways confinement forces sideways spreading, so tight focus and long collimation
are mutually exclusive.

$$I(r,z)=I_0\left(\frac{w_0}{w(z)}\right)^2\exp\!\left(-\frac{2r^2}{w(z)^2}\right)$$

*Introduced:* [1.1](lessons/01-01-classical-em-waves-gaussian-beams.md)

### Diffraction limit

The one relation that fixes the whole trade-off: waist times divergence is set by
the wavelength alone. The only way to improve both at once is a shorter $\lambda$.

$$w_0\,\theta=\frac{\lambda}{\pi}$$

*Introduced:* [1.1](lessons/01-01-classical-em-waves-gaussian-beams.md)

### Rabi frequency

How fast a resonant field sloshes an atom between ground and excited state:
dipole size times field strength, in frequency units.

$$\Omega=\frac{d\,E_0}{\hbar}, \qquad \tilde\Omega=\sqrt{\Omega^2+\Delta^2}$$

*Introduced:* [1.2](lessons/01-02-two-level-atom-rabi-oscillations.md)

### Rotating-wave approximation

Split the drive into a piece that rotates *with* the atom and one that rotates
against it, then throw the counter-rotating piece away because it averages to
nothing. Excellent whenever $\Omega,\lvert\Delta\rvert\ll\omega_0$, which is
essentially always in optics.

*Introduced:* [1.2](lessons/01-02-two-level-atom-rabi-oscillations.md)

### Einstein coefficients

The three rate constants of light–matter energy exchange. $A_{21}$ is spontaneous
decay (happens in the dark); $B_{12}\rho$ and $B_{21}\rho$ are absorption and
stimulated emission (need light present).

$$\underbrace{B_{12}\rho N_1}_{\text{absorption}},\qquad \underbrace{B_{21}\rho N_2}_{\text{stimulated}},\qquad \underbrace{A_{21}N_2}_{\text{spontaneous}}$$

*Introduced:* [1.3](lessons/01-03-absorption-spontaneous-stimulated-emission.md)

### Stimulated emission

A passing photon talks an excited atom into emitting a **clone** — same mode,
frequency, direction, polarization, and phase. That cloning, not mere brightness,
is what makes laser light coherent.

*Introduced:* [1.3](lessons/01-03-absorption-spontaneous-stimulated-emission.md)

### Population inversion

More atoms upstairs than down. Thermal equilibrium forbids it (Boltzmann always
packs the lower level), so it must be pumped — and a two-level atom cannot be
pumped there by light, because absorption and stimulated emission are equally
strong.

$$\Delta N \equiv N_2-N_1 > 0$$

*Introduced:* [1.4](lessons/01-04-gain-population-inversion-laser-threshold.md)

### Gain coefficient

Fractional growth of the beam per metre — a headcount times a cross section.
Positive means amplification; flip its sign and it is exactly Beer's-law
absorption, $\gamma=-\alpha$.

$$\gamma = \sigma\,(N_2-N_1) = \sigma\,\Delta N, \qquad I(z)=I_0e^{\gamma z}$$

*Introduced:* [1.4](lessons/01-04-gain-population-inversion-laser-threshold.md)

### Saturation intensity

The brightness at which the beam has eaten enough of its own inversion to halve
the gain. This self-limiting is what pins a running laser to a steady output.

$$\gamma(I)=\frac{\gamma_0}{1+I/I_\text{sat}}$$

*Introduced:* [1.4](lessons/01-04-gain-population-inversion-laser-threshold.md)

### Free spectral range

The spacing of a cavity's frequency comb — one over the round-trip time. Longer
cavity, finer comb.

$$\Delta\nu_\text{FSR}=\frac{c}{2L}$$

*Introduced:* [1.5](lessons/01-05-optical-cavities-laser-modes.md)

### Finesse

How sharp each comb tooth is relative to the tooth spacing — roughly the number of
round trips a photon survives, times $\pi$. A mirror-quality number, independent of
which mode you look at.

$$\mathcal F=\frac{\Delta\nu_\text{FSR}}{\delta\nu}=\frac{\pi(R_1R_2)^{1/4}}{1-\sqrt{R_1R_2}}$$

*Introduced:* [1.5](lessons/01-05-optical-cavities-laser-modes.md)

### Quality factor

How many optical cycles the field rings before leaking away — linewidth measured
against the optical frequency itself, so it is vastly larger than the finesse.

$$Q=\frac{\nu}{\delta\nu}=\omega\tau_c=\mathcal F\cdot\frac{\nu}{\Delta\nu_\text{FSR}}$$

*Introduced:* [1.5](lessons/01-05-optical-cavities-laser-modes.md)

### First-order coherence

How well the field at one moment still lines up with itself a delay $\tau$ later —
a phase-memory scorecard, normalized so zero delay scores exactly 1 for *any*
light.

$$g^{(1)}(\tau)=\frac{\langle E^*(t)E(t+\tau)\rangle}{\langle\lvert E(t)\rvert^2\rangle}$$

*Introduced:* [2.1](lessons/02-01-temporal-coherence-g1.md)

### Coherence time and coherence length

The width of $\lvert g^{(1)}(\tau)\rvert$ — how long the phase memory lasts — and
the distance light travels in that time. Set by spectral width alone:
$\tau_c\sim1/\Delta\nu$.

$$\ell_c=c\,\tau_c$$

*Introduced:* [2.1](lessons/02-01-temporal-coherence-g1.md)

### Fringe visibility

Fringe contrast in an interferometer. It *equals* the magnitude of the relevant
first-order coherence, which is how you measure coherence without ever touching a
phase.

$$V=\frac{I_{\text{max}}-I_{\text{min}}}{I_{\text{max}}+I_{\text{min}}}=\lvert g^{(1)}\rvert$$

*Introduced:* [2.1](lessons/02-01-temporal-coherence-g1.md)

### Wiener–Khinchin theorem

Phase memory in time is the Fourier transform of colour content in frequency —
so "narrow line" and "long coherence" are the same statement twice.

$$g^{(1)}(\tau)=\frac{\int_0^\infty S(\omega)e^{-i\omega\tau}d\omega}{\int_0^\infty S(\omega)\,d\omega}$$

*Introduced:* [2.1](lessons/02-01-temporal-coherence-g1.md)

### Spatial coherence

The same correlation question rotated ninety degrees: do two points *across* the
wavefront oscillate in lockstep at the same instant? Controlled by the source's
angular size, never by its brightness.

$$g^{(1)}(\mathbf r_1,\mathbf r_2)=\frac{\langle E^*(\mathbf r_1,t)E(\mathbf r_2,t)\rangle}{\sqrt{\langle\lvert E(\mathbf r_1,t)\rvert^2\rangle\langle\lvert E(\mathbf r_2,t)\rvert^2\rangle}}$$

*Introduced:* [2.2](lessons/02-02-spatial-coherence.md)

### Transverse coherence length

How far apart two points on a wavefront can be and still interfere. A small source
subtends a small angle and gives a large coherent patch.

$$\ell_\perp\approx\frac{\lambda}{\theta_s}=\frac{\lambda R}{D}, \qquad A_c\approx\ell_\perp^{\,2}$$

*Introduced:* [2.2](lessons/02-02-spatial-coherence.md)

### Van Cittert–Zernike theorem

For an incoherent source, coherence-versus-baseline is the Fourier transform of the
source's brightness on the sky. Run it backwards and fringe visibility measures a
star you cannot resolve.

*Introduced:* [2.2](lessons/02-02-spatial-coherence.md)

### Second-order coherence

The probability of two *simultaneous* detections, divided by what independent
arrivals would give. Above 1 means clumpy, exactly 1 random, below 1 impossible for
any classical wave.

$$g^{(2)}(\tau)=\frac{\langle I(t)I(t+\tau)\rangle}{\langle I(t)\rangle^2}, \qquad g^{(2)}(0)=\frac{\langle\hat n(\hat n-1)\rangle}{\langle\hat n\rangle^2}$$

*Introduced:* [2.3](lessons/02-03-photon-statistics-g2.md)

### Bunching and antibunching

Bunched light arrives in clumps ($g^{(2)}(0)>1$, thermal is the canonical case);
antibunched light arrives spaced out ($g^{(2)}(0)<1$), which is the fingerprint of
a source that physically cannot emit two photons at once.

*Introduced:* [2.3](lessons/02-03-photon-statistics-g2.md)

### Mandel Q parameter

A rescaled Fano factor: one number whose sign says whether the photon count is
narrower or wider than Poisson. Negative is nonclassical.

$$Q=\frac{\operatorname{Var}(n)-\langle n\rangle}{\langle n\rangle}=\langle n\rangle\big(g^{(2)}(0)-1\big)$$

*Introduced:* [2.3](lessons/02-03-photon-statistics-g2.md)

### Hanbury Brown–Twiss experiment

Split a beam on a 50:50 splitter, put a detector on each output, and count
coincidences versus delay. That trace *is* $g^{(2)}(\tau)$ — no fringes, no
recombination, so it measures intensity correlations, not field correlations.

*Introduced:* [2.4](lessons/02-04-hanbury-brown-twiss.md)

### Classical bound on $g^{(2)}$

Any real, non-negative fluctuating intensity has non-negative variance, which
forces two inequalities. Violating either is a theorem-level proof that the field
is quantized.

$$g^{(2)}(0)\ge 1 \qquad\text{and}\qquad g^{(2)}(0)\ge g^{(2)}(\tau)$$

*Introduced:* [2.4](lessons/02-04-hanbury-brown-twiss.md)

### Field quantization

Every mode of the electromagnetic field stores energy exactly like a mass on a
spring, so quantizing light needs no new machinery: promote each mode's amplitude
to an operator and a photon is one rung of the resulting ladder.

$$\hat H=\hbar\omega\left(\hat a^\dagger\hat a+\tfrac12\right), \qquad [\hat a,\hat a^\dagger]=1$$

*Introduced:* [3.1](lessons/03-01-quantizing-em-field.md)

### Field per photon

The electric-field scale one quantum brings to a mode of volume $V$. It grows as
the mode shrinks — the entire design principle behind cavity QED.

$$\mathcal E_0=\sqrt{\frac{\hbar\omega}{2\varepsilon_0 V}}$$

*Introduced:* [3.1](lessons/03-01-quantizing-em-field.md)

### Fock state

Light with an *exactly* known photon number and therefore no phase whatsoever. Its
mean field is zero at every $n$, but its energy is not.

$$\hat n\lvert n\rangle=n\lvert n\rangle, \qquad \lvert n\rangle=\frac{(\hat a^\dagger)^n}{\sqrt{n!}}\lvert 0\rangle$$

*Introduced:* [3.2](lessons/03-02-fock-states-vacuum-zero-point.md)

### Zero-point energy and vacuum fluctuations

The ground rung is not "nothing": the mode keeps half a quantum, and its field has
zero mean but nonzero variance. That jitter is what drives spontaneous emission and
pushes Casimir plates together.

$$E_0=\tfrac12\hbar\omega, \qquad \langle 0\lvert\hat E\rvert 0\rangle=0 \ \text{ but } \ \langle 0\lvert\hat E^2\rvert 0\rangle\neq0$$

*Introduced:* [3.2](lessons/03-02-fock-states-vacuum-zero-point.md)

### Coherent state

The vacuum blob slid out to amplitude $\alpha$ without being reshaped — the state a
laser actually emits, and the closest quantum light comes to a classical wave.
Equivalently, the one state that is unchanged when you remove a photon.

$$\hat a\lvert\alpha\rangle=\alpha\lvert\alpha\rangle, \qquad \lvert\alpha\rangle=\hat D(\alpha)\lvert 0\rangle=e^{-\lvert\alpha\rvert^2/2}\sum_n\frac{\alpha^n}{\sqrt{n!}}\lvert n\rangle$$

*Introduced:* [3.3](lessons/03-03-coherent-states.md)

### Displacement operator

The unitary that translates a state rigidly through phase space — no spreading, no
squashing. Applied to the vacuum it manufactures every coherent state.

$$\hat D(\alpha)=e^{\alpha\hat a^\dagger-\alpha^*\hat a}$$

*Introduced:* [3.3](lessons/03-03-coherent-states.md)

### Quadrature operators

The Hermitian cosine and sine amplitudes of the field — its "position and
momentum". They are conjugate, so a state is never a point in phase space, always a
point plus a blur.

$$\hat X_1=\tfrac12(\hat a+\hat a^\dagger), \qquad \hat X_2=\tfrac{1}{2i}(\hat a-\hat a^\dagger), \qquad [\hat X_1,\hat X_2]=\tfrac{i}{2}$$

*Introduced:* [3.4](lessons/03-04-quadratures-phase-space-shot-noise.md)

### Shot noise and the standard quantum limit

The leftover vacuum blur riding on any coherent beam. It is not electronics: it is
the noise floor ordinary light imposes, and it improves only as the square root of
the photon number.

$$\Delta n=\sqrt{\langle n\rangle}, \qquad \text{SNR}=\sqrt{\langle n\rangle}, \qquad \Delta\phi\approx\frac{1}{2\sqrt{\langle n\rangle}}$$

*Introduced:* [3.4](lessons/03-04-quadratures-phase-space-shot-noise.md)

### Squeezed state

A minimum-uncertainty state with a *lopsided* blob: one quadrature quieter than the
vacuum, the other correspondingly louder. The uncertainty product is untouched —
you have only moved the tax, not avoided it.

$$\hat S(\xi)=\exp\!\left[\tfrac12\big(\xi^*\hat a^2-\xi\hat a^{\dagger2}\big)\right], \qquad \lvert\xi\rangle=\hat S(\xi)\lvert0\rangle$$

*Introduced:* [3.5](lessons/03-05-squeezed-states.md)

### Squeeze parameter

The single number $r$ controlling how hard you squeeze; the angle $\theta$ in
$\xi=re^{i\theta}$ picks *which* quadrature gets quiet. Get $\theta$ wrong and you
inject extra noise instead.

$$\Delta X_1^2=\tfrac14e^{-2r}, \qquad \Delta X_2^2=\tfrac14e^{+2r}$$

*Introduced:* [3.5](lessons/03-05-squeezed-states.md)

### Normal ordering

Putting every $\hat a^\dagger$ to the left of every $\hat a$. This is the operator
bookkeeping of photodetection: absorption applies $\hat a$ first, and since
$\hat a\lvert0\rangle=0$, the vacuum's half-quantum never trips a detector.

$$R=\eta\langle\hat a^\dagger\hat a\rangle, \qquad g^{(2)}(0)=\frac{\langle\hat a^\dagger\hat a^\dagger\hat a\hat a\rangle}{\langle\hat a^\dagger\hat a\rangle^2}$$

*Introduced:* [3.6](lessons/03-06-single-photon-sources-photodetection.md)

### Quantum efficiency

The probability an incident photon actually produces a click. Modelled as a beam
splitter of transmission $\eta$ with vacuum entering the unused port — which is why
loss is corrosive: it dilutes your state with plain vacuum.

$$\hat a_\text{out}=\sqrt{\eta}\,\hat a+\sqrt{1-\eta}\,\hat v$$

*Introduced:* [3.6](lessons/03-06-single-photon-sources-photodetection.md)

### Heralding

Use a pair source: detect the idler and you have *announced* that a lone signal
photon exists right now, without disturbing it. The Klyshko (heralding) efficiency
turns out to be just the signal-arm efficiency.

$$\eta_H=\frac{R_\text{coinc}}{R_\text{herald}}=\eta_s$$

*Introduced:* [3.6](lessons/03-06-single-photon-sources-photodetection.md)

### Beam-splitter transformation

A lossless 50:50 splitter is a unitary on two modes. It must preserve commutators,
which is what forces the relative minus sign — the whole source of two-photon
interference.

$$\hat c=\tfrac{1}{\sqrt2}(\hat a+\hat b), \qquad \hat d=\tfrac{1}{\sqrt2}(\hat a-\hat b)$$

*Introduced:* [4.1](lessons/04-01-quantum-beam-splitter-hong-ou-mandel.md)

### Hong–Ou–Mandel dip

Feed one identical photon into each port and the "both transmit" and "both reflect"
amplitudes cancel: coincidences vanish and the photons always leave together. The
depth of the dip is a calibration-free ruler for how identical two photons are.

$$\lvert1\rangle_a\lvert1\rangle_b \to \tfrac{1}{\sqrt2}\big(\lvert2\rangle_c\lvert0\rangle_d-\lvert0\rangle_c\lvert2\rangle_d\big)$$

*Introduced:* [4.1](lessons/04-01-quantum-beam-splitter-hong-ou-mandel.md)

### Jaynes–Cummings model

One two-level atom coupled to one quantized mode: field energy, plus atom energy,
plus a term that trades one photon for one atomic excitation.

$$\hat H=\hbar\omega\,\hat a^\dagger\hat a+\tfrac12\hbar\omega_0\,\hat\sigma_z+\hbar g\big(\hat a\hat\sigma_++\hat a^\dagger\hat\sigma_-\big)$$

*Introduced:* [4.2](lessons/04-02-cavity-qed-jaynes-cummings.md)

### Dressed states

The eigenstates of one excitation rung — mixtures of "atom up with $n$ photons" and
"atom down with $n+1$ photons". Total excitation is conserved, so the Hamiltonian
falls apart into independent $2\times2$ blocks.

$$\lvert n,\pm\rangle=\tfrac{1}{\sqrt2}\big(\lvert e,n\rangle\pm\lvert g,n+1\rangle\big) \quad (\Delta=0)$$

*Introduced:* [4.2](lessons/04-02-cavity-qed-jaynes-cummings.md)

### Vacuum Rabi splitting

Even the *empty* cavity splits the joint levels, because the coupling carries
$\sqrt{n+1}$ and the "+1" survives at $n=0$. A classical field of zero amplitude
does nothing; a quantized field of zero photons still flops the atom.

$$E_{0,+}-E_{0,-}=2\hbar g, \qquad P_e(t)=\cos^2(gt)$$

*Introduced:* [4.2](lessons/04-02-cavity-qed-jaynes-cummings.md)

### Strong coupling

Not merely "large $g$" — it means the coherent exchange outruns every leak, so the
excitation sloshes many times before anything escapes. Below it you are in the
irreversible (Purcell) regime with no oscillations at all.

$$g\gg\kappa,\ \gamma$$

*Introduced:* [4.2](lessons/04-02-cavity-qed-jaynes-cummings.md)

### Nonlinear susceptibility

The medium's polarization expanded in powers of the field. The $\chi^{(2)}$ term is
a frequency mixer, since a squared sum of cosines produces sum and difference
frequencies.

$$P=\varepsilon_0\big(\chi^{(1)}E+\chi^{(2)}E^2+\chi^{(3)}E^3+\cdots\big)$$

*Introduced:* [4.3](lessons/04-03-nonlinear-optics-parametric-down-conversion.md)

### Phase matching

Momentum conservation for the three photons. Energy conservation alone allows a
continuum of splits; it is the momentum condition that selects which frequencies
come out in which direction.

$$\omega_p=\omega_s+\omega_i, \qquad \mathbf k_p=\mathbf k_s+\mathbf k_i$$

*Introduced:* [4.3](lessons/04-03-nonlinear-optics-parametric-down-conversion.md)

### Spontaneous parametric down-conversion

One pump photon coherently splits into a signal–idler pair inside a $\chi^{(2)}$
crystal. Nothing is absorbed — the crystal is a catalyst, hence "parametric" — and
the two children are born at the same instant.

$$\hat H_\text{int}\propto\hat a_p\hat a_s^\dagger\hat a_i^\dagger+\hat a_p^\dagger\hat a_s\hat a_i$$

*Introduced:* [4.3](lessons/04-03-nonlinear-optics-parametric-down-conversion.md)

### Bell states

The four maximally entangled two-qubit states. The singlet is the one type-II SPDC
delivers where the cones cross, and it looks the same in *every* measurement
basis — perfectly anti-correlated whatever angle you choose.

$$\lvert\Psi^-\rangle=\tfrac{1}{\sqrt2}\big(\lvert H\rangle_A\lvert V\rangle_B-\lvert V\rangle_A\lvert H\rangle_B\big)$$

*Introduced:* [4.4](lessons/04-04-entangled-photons-bell-tests.md)

### CHSH inequality

Bell's test made measurable. Any theory in which each photon carries a pre-set
answer sheet, unaffected by the distant setting, is capped at 2; quantum mechanics
reaches $2\sqrt2$ (the Tsirelson bound).

$$S=E(a,b)-E(a,b')+E(a',b)+E(a',b'), \qquad \lvert S\rvert\le2 \ \text{(local realism)}$$

*Introduced:* [4.4](lessons/04-04-entangled-photons-bell-tests.md)

### Conjugate bases

Two encodings such that a crisp bit in one is a perfect coin flip in the other.
Asking the wrong question gives a random answer *and* destroys the state — the
security engine of BB84.

$$\lvert\pm\rangle=\tfrac{1}{\sqrt2}\big(\lvert H\rangle\pm\lvert V\rangle\big), \qquad \lvert\langle H\lvert+\rangle\rvert^2=\tfrac12$$

*Introduced:* [4.5](lessons/04-05-quantum-information-taste.md)

### No-cloning theorem

No single unitary copies an arbitrary unknown qubit. Unitarity preserves inner
products, so a universal copier would force $x=x^2$ on every overlap — leaving only
orthogonal or identical states.

$$\text{no } U \text{ with } U\big(\lvert\psi\rangle\lvert0\rangle\big)=\lvert\psi\rangle\lvert\psi\rangle \ \text{ for all } \lvert\psi\rangle$$

*Introduced:* [4.5](lessons/04-05-quantum-information-taste.md)

### Quantum bit error rate

The disagreement rate on a sacrificial sample of the sifted key. A clean channel
sits near zero; a full intercept-resend eavesdropper drives it to 25 percent, and
real protocols abort above roughly 11 percent.

*Introduced:* [4.5](lessons/04-05-quantum-information-taste.md)

## Formulas and rules

### The quantum-state zoo for light

The spine of the course. One table, four questions: how many photons, how noisy is
the count, do they clump, and how is the noise split between quadratures. The
quadrature column uses the $\hat X=\tfrac12(\hat a\pm\ldots)$ convention, in which
the vacuum sits at $\tfrac14$.

| State | $P(n)$ | $\langle n\rangle$ | $\operatorname{Var}(n)$ | $g^{(2)}(0)$ | $\Delta X_1^2$ | $\Delta X_2^2$ |
|---|---|---|---|---|---|---|
| Vacuum $\lvert0\rangle$ | 1 at $n=0$ | $0$ | $0$ | undefined ($0/0$) | $\tfrac14$ | $\tfrac14$ |
| Fock $\lvert n\rangle$ | 1 at that $n$ | $n$ | $0$ | $1-\dfrac1n$ | $\dfrac{2n+1}{4}$ | $\dfrac{2n+1}{4}$ |
| Coherent $\lvert\alpha\rangle$ | $e^{-\lvert\alpha\rvert^2}\dfrac{\lvert\alpha\rvert^{2n}}{n!}$ | $\lvert\alpha\rvert^2$ | $\lvert\alpha\rvert^2$ | $1$ | $\tfrac14$ | $\tfrac14$ |
| Thermal / chaotic | $\dfrac{\bar n^{\,n}}{(1+\bar n)^{n+1}}$ | $\bar n$ | $\bar n(1+\bar n)$ | $2$ | $\dfrac{2\bar n+1}{4}$ | $\dfrac{2\bar n+1}{4}$ |
| Squeezed vacuum $\lvert\xi\rangle$ | even $n$ only | $\sinh^2 r$ | $2\bar n(\bar n+1)$ | $3+\dfrac{1}{\bar n}$ | $\tfrac14e^{-2r}$ | $\tfrac14e^{+2r}$ |

Read across the $g^{(2)}(0)$ column and you have the course's whole classification:

| $g^{(2)}(0)$ | Statistics | Mandel $Q$ | Arrival pattern | Classically possible? |
|---|---|---|---|---|
| $>1$ (thermal: $2$) | super-Poissonian | $Q>0$ | bunched | yes — a flickering intensity does it |
| $=1$ (coherent) | Poissonian | $Q=0$ | random | yes — a steady wave |
| $<1$ (Fock $\lvert1\rangle$: $0$) | sub-Poissonian | $Q<0$ | antibunched | **no** — violates $g^{(2)}(0)\ge1$ |

Two facts that are easy to lose and matter constantly: the squeezed vacuum is both
nonclassical *and* strongly bunched (its $g^{(2)}(0)>2$), so "nonclassical" is not a
synonym for "antibunched"; and a Fock state's $g^{(2)}(0)=1-1/n$ creeps up toward 1
as $n$ grows without ever reaching it.

*From* [2.3](lessons/02-03-photon-statistics-g2.md), [3.2](lessons/03-02-fock-states-vacuum-zero-point.md), [3.3](lessons/03-03-coherent-states.md), [3.5](lessons/03-05-squeezed-states.md). The thermal and squeezed quadrature variances and the squeezed $g^{(2)}(0)$ are standard results the lessons use without stating.

### Gaussian-beam propagation

| Quantity | Formula | Note |
|---|---|---|
| beam radius | $w(z)=w_0\sqrt{1+(z/z_R)^2}$ | $w(z_R)=\sqrt2\,w_0$, area doubled |
| Rayleigh range | $z_R=\dfrac{\pi w_0^2}{\lambda}$ | scales as $w_0^2$ — halve the waist, quarter the reach |
| divergence half-angle | $\theta=\dfrac{\lambda}{\pi w_0}$ | full cone is $2\theta$ |
| diffraction limit | $w_0\theta=\dfrac{\lambda}{\pi}$ | the trade-off, fixed by wavelength alone |
| wavefront curvature | $R(z)=z\big[1+(z_R/z)^2\big]$ | flat at the waist, $R\approx z$ far away |
| Gouy phase | $\zeta(z)=\arctan(z/z_R)$ | a slow $\pi$ slip through focus; shifts cavity resonances |
| depth of focus | $2z_R$ | the *full* axial length, not $z_R$ |
| far field | $w(L)\approx\theta L=\dfrac{\lambda L}{\pi w_0}$ | smaller waist gives a *bigger* distant spot |

Plane-wave companions: $\omega=ck$, $k=2\pi/\lambda$, $\mathbf E\perp\mathbf k$, and
the time-averaged intensity $I=\tfrac12c\varepsilon_0\lvert\mathbf E_0\rvert^2$.

*From* [1.1](lessons/01-01-classical-em-waves-gaussian-beams.md)

### Two-level atom driven by a classical field

$$\hat H_\text{int}=-\hat{\mathbf d}\cdot\mathbf E(t), \qquad \Omega=\frac{dE_0}{\hbar}, \qquad \Delta=\omega-\omega_0$$

$$P_e(t)=\frac{\Omega^2}{\tilde\Omega^2}\sin^2\!\left(\frac{\tilde\Omega t}{2}\right), \qquad \tilde\Omega=\sqrt{\Omega^2+\Delta^2}$$

| Condition | Result |
|---|---|
| on resonance ($\Delta=0$) | $P_e=\sin^2(\Omega t/2)$ — full inversion is reachable |
| $\pi$-pulse | $\Omega t=\pi$, atom entirely in $\lvert e\rangle$ |
| $\pi/2$-pulse | $\Omega t=\pi/2$, equal superposition, $P_e=\tfrac12$ |
| off resonance | faster ($\tilde\Omega>\Omega$) but capped at $P_e^{\max}=\Omega^2/\tilde\Omega^2<1$ |
| short times | $b_e\propto t$, so $P_e\propto t^2$ — the seed of the golden-rule *rate* |

*From* [1.2](lessons/01-02-two-level-atom-rabi-oscillations.md)

### Einstein relations and thermal light

$$B_{12}=B_{21} \qquad\text{and}\qquad \frac{A_{21}}{B_{21}}=\frac{\hbar\omega^3}{\pi^2c^3}$$

Both follow from demanding that detailed balance reproduce the Planck law at *every*
temperature. Two consequences you use constantly:

$$\frac{\text{stimulated}}{\text{spontaneous}}=\frac{B_{21}\rho}{A_{21}}=\bar n=\frac{1}{e^{\hbar\omega/k_BT}-1} \quad(\text{thermal }\rho)$$

$$\frac{A_{21}}{B_{21}}\propto\omega^3 \ \Longrightarrow\ \text{spontaneous emission is negligible at microwave, brutal at X-ray}$$

Stimulated emission wins exactly when there is more than one photon per mode. Thermal
light at optical frequencies has $\bar n\ll1$, which is why a hot lamp can never
lase; a laser cavity funnels $\bar n\sim10^9$–$10^{12}$ into one mode.

*From* [1.3](lessons/01-03-absorption-spontaneous-stimulated-emission.md)

### Laser gain and threshold

$$\gamma=\sigma\,\Delta N, \qquad I(z)=I_0e^{\gamma z}, \qquad G=e^{\gamma\ell} \ \text{(single pass)}$$

$$\gamma(I)=\frac{\gamma_0}{1+I/I_\text{sat}} \qquad\text{(saturation)}$$

Round-trip threshold in a cavity of length $L$ with mirror reflectivities $R_1,R_2$
and internal loss $\alpha_i$:

$$R_1R_2\,e^{2\gamma_\text{th}L}e^{-2\alpha_iL}=1 \ \Longrightarrow\ \gamma_\text{th}=\alpha_i+\frac{1}{2L}\ln\frac{1}{R_1R_2}, \qquad \Delta N_\text{th}=\frac{\gamma_\text{th}}{\sigma}$$

| Pumping scheme | Lower laser level | Cost to invert |
|---|---|---|
| three-level (ruby) | the ground state | must lift **more than half** of all ions — high threshold |
| four-level (Nd:YAG) | drained by a fast decay, $N_1\approx0$ | any $N_2>0$ already inverts — low threshold |

*From* [1.4](lessons/01-04-gain-population-inversion-laser-threshold.md) *and* [1.5](lessons/01-05-optical-cavities-laser-modes.md)

### Cavity relations

| Quantity | Formula |
|---|---|
| longitudinal modes | $\nu_q=q\,\dfrac{c}{2L}$, from $L=q\lambda/2$ |
| free spectral range | $\Delta\nu_\text{FSR}=\dfrac{c}{2L}$ |
| finesse (equal mirrors) | $\mathcal F=\dfrac{\pi\sqrt R}{1-R}$ |
| cavity linewidth | $\delta\nu=\dfrac{\Delta\nu_\text{FSR}}{\mathcal F}=\dfrac{1}{2\pi\tau_c}$ |
| quality factor | $Q=\dfrac{\nu}{\delta\nu}=\omega\tau_c$ |
| lasing modes under the gain curve | $N\approx\dfrac{\Delta\nu_\text{gain}}{\Delta\nu_\text{FSR}}=\dfrac{2L\,\Delta\nu_\text{gain}}{c}$ |

High $R$ implies high $\mathcal F$ implies long $\tau_c$ implies narrow $\delta\nu$
implies high $Q$ — five names for "the mirrors are good". Transverse modes are the
Hermite–Gaussian $\text{TEM}_{mn}$ family; $\text{TEM}_{00}$ is exactly the Gaussian
beam of 1.1.

*From* [1.5](lessons/01-05-optical-cavities-laser-modes.md)

### Coherence: lineshapes and interferometers

| Lineshape | Physical origin | $\lvert g^{(1)}(\tau)\rvert$ | Coherence time |
|---|---|---|---|
| Lorentzian | collision- or lifetime-broadened; single-mode laser | $e^{-\lvert\tau\rvert/\tau_c}$ | $\tau_c=\dfrac{1}{\pi\Delta\nu}$ |
| Gaussian | Doppler-broadened gas | $\exp\!\big[-(\pi\Delta\nu\tau)^2/4\ln2\big]$ | $\Delta\nu\,\tau_c\approx0.66$ |
| two sharp lines split by $\Delta\nu_s$ | a doublet | $\lvert\cos(\pi\Delta\nu_s\tau)\rvert$ | visibility *beats*, first null at $\tau=1/2\Delta\nu_s$ |

Michelson output and the delay conversion:

$$I(\tau)=I_0\big[1+\lvert g^{(1)}(\tau)\rvert\cos(\omega_0\tau+\varphi)\big], \qquad \tau=\frac{\Delta L}{c}$$

Spatial side: $\ell_\perp\approx\lambda/\theta_s$; for a uniform circular disk the
first visibility null sits at $\theta_s\approx1.22\lambda/a_{\max}$ (the same Airy
zero as the Rayleigh criterion, read on a baseline instead of a lens).

For chaotic light the two correlation orders are locked by the **Siegert relation**:

$$g^{(2)}(\tau)=1+\lvert g^{(1)}(\tau)\rvert^2$$

so bunching decays over the *same* $\tau_c$ that kills the fringes, and the HBT bump
doubles as a coherence-time meter (FWHM $=\tau_c\ln2$ for a Lorentzian line).

*From* [2.1](lessons/02-01-temporal-coherence-g1.md), [2.2](lessons/02-02-spatial-coherence.md), [2.4](lessons/02-04-hanbury-brown-twiss.md)

### Ladder-operator algebra

$$[\hat a,\hat a^\dagger]=1, \qquad \hat a\hat a^\dagger=\hat n+1, \qquad [\hat n,\hat a]=-\hat a, \qquad [\hat n,\hat a^\dagger]=+\hat a^\dagger$$

$$\hat a\lvert n\rangle=\sqrt n\,\lvert n-1\rangle, \qquad \hat a^\dagger\lvert n\rangle=\sqrt{n+1}\,\lvert n+1\rangle, \qquad \hat a\lvert0\rangle=0$$

$$\hat q=\sqrt{\frac{\hbar}{2\omega}}(\hat a+\hat a^\dagger), \qquad \hat p=-i\sqrt{\frac{\hbar\omega}{2}}(\hat a-\hat a^\dagger)$$

Multi-mode: $[\hat a_{\mathbf k,s},\hat a^\dagger_{\mathbf k',s'}]=\delta_{\mathbf k\mathbf k'}\delta_{ss'}$ — independent modes never talk.

*From* [3.1](lessons/03-01-quantizing-em-field.md) *and* [3.2](lessons/03-02-fock-states-vacuum-zero-point.md)

### Quadratures, squeezing, and decibels

$$\Delta X_1\,\Delta X_2\ge\tfrac14, \qquad \text{vacuum and every coherent state: } \Delta X_1=\Delta X_2=\tfrac12$$

$$\hat S^\dagger(\xi)\hat a\hat S(\xi)=\hat a\cosh r-\hat a^\dagger\sinh r \quad(\theta=0)$$

$$\text{squeezing (dB)}=10\log_{10}\!\big(e^{-2r}\big)=-\frac{20r}{\ln10}$$

| $r$ | noise power $e^{-2r}$ | dB | phase-sensitivity gain $e^{r}$ |
|---|---|---|---|
| $0.35$ | $0.50$ | $-3$ | $1.42$ |
| $0.6$ | $0.30$ | $-5.2$ | $1.82$ |
| $0.69$ | $0.25$ | $-6$ | $2.0$ |
| $1.15$ | $0.10$ | $-10$ | $3.16$ |

Squeezed vacuum has $\langle\hat n\rangle=\sinh^2r$ and contains **only even** photon
numbers — the generator makes photons in pairs. Displacing it with $\hat D(\alpha)$
gives a *bright* squeezed state you can actually see on a detector. Careful: dB of
noise **power** is twice dB of noise amplitude, so $-10$ dB buys only a factor
$\sqrt{10}$ in measured phase noise.

*From* [3.4](lessons/03-04-quadratures-phase-space-shot-noise.md) *and* [3.5](lessons/03-05-squeezed-states.md)

### Photodetection, loss, and heralding

$$R_\text{total}=\eta\Phi+d \qquad (\Phi \text{ incident flux}, \ d \text{ dark-count rate})$$

How the two nonclassical signatures fare under pure loss $\eta$ — the single most
useful contrast in Module 3:

| Quantity | Under loss $\eta$ | Verdict |
|---|---|---|
| count rate | $\langle\hat n\rangle\to\eta\langle\hat n\rangle$ | falls proportionally |
| $g^{(2)}(0)$ | **unchanged** (numerator and denominator both pick up $\eta^2$) | antibunching is robust |
| quadrature variance | $V_\text{out}=\eta V_\text{sig}+(1-\eta)V_\text{vac}$ | squeezing is fragile |

Pair-source rates, with pair probability $p$ per pulse at repetition rate $f$:

$$R_\text{herald}=f\,p\,\eta_i, \qquad R_\text{coinc}=f\,p\,\eta_i\,\eta_s, \qquad \eta_H=\eta_s$$

Detector menu: PMT (dynode chain), SPAD/APD in Geiger mode, and SNSPD
($\eta\gtrsim90$ percent, low jitter). Other figures of merit: dark counts, dead
time, timing jitter. The single-photon certificate is $g^{(2)}(0)<0.5$.

*From* [3.6](lessons/03-06-single-photon-sources-photodetection.md)

### Beam-splitter and interferometer conventions

Our convention throughout (real and symmetric), stated for the **output** modes and
then inverted for the creation operators you actually substitute:

$$\hat c=\tfrac{1}{\sqrt2}(\hat a+\hat b), \qquad \hat d=\tfrac{1}{\sqrt2}(\hat a-\hat b)$$

$$\hat a^\dagger\to\tfrac{1}{\sqrt2}(\hat c^\dagger+\hat d^\dagger), \qquad \hat b^\dagger\to\tfrac{1}{\sqrt2}(\hat c^\dagger-\hat d^\dagger)$$

Method: write the input state as creation operators acting on $\lvert0\rangle$,
substitute, expand, and use $\hat c^{\dagger n}\lvert0\rangle=\sqrt{n!}\,\lvert n\rangle$.

| Input | Output | Coincidence probability |
|---|---|---|
| $\lvert1\rangle_a\lvert0\rangle_b$ | $\tfrac{1}{\sqrt2}\big(\lvert1\rangle_c\lvert0\rangle_d+\lvert0\rangle_c\lvert1\rangle_d\big)$ | $0$ — only one photon exists |
| $\lvert0\rangle_a\lvert1\rangle_b$ | $\tfrac{1}{\sqrt2}\big(\lvert1\rangle_c\lvert0\rangle_d-\lvert0\rangle_c\lvert1\rangle_d\big)$ | $0$ — the orthogonal path qubit |
| $\lvert1\rangle_a\lvert1\rangle_b$, identical | $\tfrac{1}{\sqrt2}\big(\lvert2\rangle_c\lvert0\rangle_d-\lvert0\rangle_c\lvert2\rangle_d\big)$ | $0$ — the HOM dip |
| $\lvert1\rangle_a\lvert1\rangle_b$, overlap $v$ | partially cancelling cross terms | $P_\text{cc}=\tfrac12(1-v^2)$, dip visibility $v^2$ |
| $\lvert1\rangle_a\lvert1\rangle_b$, distinguishable | four independent outcomes | $\tfrac12$, the classical baseline |
| signal $\hat a$ plus loss | $\sqrt\eta\,\hat a+\sqrt{1-\eta}\,\hat v$ | the loss model of 3.6 |

Michelson (amplitude interferometry) measures $g^{(1)}$; Hanbury Brown–Twiss
(two detectors, no recombination) measures $g^{(2)}$; Hong–Ou–Mandel is a
two-photon *amplitude* effect with no classical analogue. Some texts use the
$\hat c=\tfrac{1}{\sqrt2}(\hat a+i\hat b)$ convention instead — the physics is
identical, only the signs and $i$'s move.

*From* [4.1](lessons/04-01-quantum-beam-splitter-hong-ou-mandel.md), [2.4](lessons/02-04-hanbury-brown-twiss.md), [3.6](lessons/03-06-single-photon-sources-photodetection.md)

### Cavity QED (Jaynes–Cummings)

$$g=\frac{d\,\mathcal E_0}{\hbar}, \qquad \hat N_\text{exc}=\hat a^\dagger\hat a+\lvert e\rangle\langle e\rvert \ \text{ is conserved}$$

$$E_{n,\pm}=\hbar\omega\left(n+\tfrac12\right)\pm\frac{\hbar}{2}\sqrt{\Delta^2+4g^2(n+1)}, \qquad \Delta=\omega_0-\omega$$

| Situation | Result |
|---|---|
| splitting on rung $n$ | $\hbar\sqrt{\Delta^2+4g^2(n+1)}$ |
| on resonance | $2\hbar g\sqrt{n+1}$ — doublets fan wider as you climb |
| vacuum rung $n=0$ | $2\hbar g$, the vacuum Rabi splitting |
| start in $\lvert e,0\rangle$ | $P_e(t)=\cos^2(gt)$, population beating at $2g$ |
| mixing angle | $\tan(2\theta_n)=2g\sqrt{n+1}/\Delta$ |
| coherent-state drive | collapse at $t\sim1/g$, revival near $t\sim2\pi\sqrt{\bar n}/g$ |

The coupling is the classical Rabi frequency with $E_0$ replaced by the
single-photon field $\mathcal E_0$ — which is why $g$ is called the single-photon
Rabi frequency, and why $\mathcal E_0\propto V^{-1/2}$ makes small mode volume the
design goal.

*From* [4.2](lessons/04-02-cavity-qed-jaynes-cummings.md)

### Nonlinear optics and phase-matching vocabulary

| Term | What it means |
|---|---|
| $\chi^{(2)}$ process | three-wave mixing: SHG ($\omega+\omega\to2\omega$), sum- and difference-frequency, and SPDC in reverse |
| centrosymmetric | looks the same under $E\to-E$, so $\chi^{(2)}=0$ — glass and most cubic crystals cannot down-convert |
| usable crystals | non-centrosymmetric and birefringent: BBO, KDP, PPKTP |
| signal / idler | the two daughter photons; degenerate means $\omega_s=\omega_i=\omega_p/2$, so $\lambda_s=\lambda_i=2\lambda_p$ |
| phase matching | satisfying $\mathbf k_p=\mathbf k_s+\mathbf k_i$; normal dispersion fights it |
| angle tuning | rotate a birefringent crystal so the pump rides the lower (extraordinary) index and cancels dispersion |
| quasi-phase-matching | periodically flip the sign of $\chi^{(2)}$ (poling period $\Lambda$) so the mismatch resets before it cancels the output |
| Type-I | signal and idler share one polarization; nested emission cones |
| Type-II | signal and idler orthogonally polarized; two crossing cones, and the crossings are where entanglement is born |

Energy conservation in wavelength form, the version you actually compute with:

$$\frac{1}{\lambda_p}=\frac{1}{\lambda_s}+\frac{1}{\lambda_i}$$

Collinear degenerate phase matching requires $n_p=(n_s+n_i)/2$, which normal
dispersion ($n$ rising with frequency, and the pump highest) makes impossible with a
single polarization — hence birefringence or poling. Treating the pump as classical
leaves $\hat H_\text{int}\propto\hat a_s^\dagger\hat a_i^\dagger+\hat a_s\hat a_i$,
the **two-mode squeezing** interaction, producing
$\lvert0,0\rangle+\lambda\lvert1,1\rangle+\lambda^2\lvert2,2\rangle+\cdots$ with
$\lambda\ll1$.

*From* [4.3](lessons/04-03-nonlinear-optics-parametric-down-conversion.md)

### Entanglement, CHSH, and BB84

Single-photon Malus law and the singlet's correlation function:

$$P_\text{pass}=\lvert\langle\theta\lvert\phi\rangle\rvert^2=\cos^2(\theta-\phi), \qquad E(a,b)=-\cos\big[2(a-b)\big]$$

$$P_{++}=P_{--}=\tfrac12\sin^2(a-b), \qquad P_{+-}=P_{-+}=\tfrac12\cos^2(a-b)$$

| Analyzer settings | $\lvert S\rvert$ |
|---|---|
| local hidden variables, any settings | $\le2$ |
| all analyzers aligned | $2$ — saturates but never violates |
| $a=0^\circ,\ a'=45^\circ,\ b=22.5^\circ,\ b'=67.5^\circ$ | $2\sqrt2\approx2.83$, the Tsirelson bound |

The proof that $\lvert S\rvert\le2$ classically: for one hidden variable, either
$B(b)-B(b')$ or $B(b)+B(b')$ vanishes and the other is $\pm2$, so $s(\lambda)=\pm2$
run by run, and averaging cannot grow a magnitude.

BB84 bookkeeping: bases match half the time, so the sifted key is about half the
photons. A full intercept-resend eavesdropper guesses the basis wrong half the time
and then flips the bit half of *those*, injecting $\tfrac12\times\tfrac12=25$ percent
QBER; the chance of surviving $n$ compared bits is $(3/4)^n$, so $n=16$ catches her
with 99 percent confidence and $n=48$ with $1-10^{-6}$.

*From* [4.4](lessons/04-04-entangled-photons-bell-tests.md) *and* [4.5](lessons/04-05-quantum-information-taste.md)

## Assumed, not taught here

This is a Tier 2 course: it leans hard on `quantum-mechanics`, `em-refresher`, and
the wave-optics track, and uses the following without deriving them.

| Fact | Where it's taught |
|---|---|
| Maxwell's equations; transverse plane waves; $\omega=ck$ | [em-refresher 4.1](../em-refresher/lessons/04-01-maxwells-equations.md), [4.2](../em-refresher/lessons/04-02-electromagnetic-waves.md) |
| Intensity as $\tfrac12c\varepsilon_0E_0^2$ (Poynting flux) | [em-refresher 4.3](../em-refresher/lessons/04-03-energy-poynting.md) |
| Diffraction, double-slit interference, fringe formation | [waves-optics 4.1](../waves-optics/lessons/04-01-interference-double-slit-thin-films.md) |
| The Airy pattern and the $1.22\lambda/D$ Rayleigh criterion | [waves-optics 4.2](../waves-optics/lessons/04-02-diffraction-gratings-resolution.md) |
| Polarization states and Malus's law (the classical parent of 4.4's $\cos^2$) | [waves-optics 4.3](../waves-optics/lessons/04-03-polarization.md) |
| Standing waves from boundary conditions (the cavity mode condition) | [waves-optics 2.3](../waves-optics/lessons/02-03-superposition-standing-waves-beats.md) |
| Resonance, ringdown, and $Q$ for a driven damped oscillator | [waves-optics 1.3](../waves-optics/lessons/01-03-driven-oscillations-resonance.md) |
| Dispersion $n(\omega)$ and group velocity (why phase matching is hard) | [waves-optics 4.4](../waves-optics/lessons/04-04-wave-packets-dispersion-fourier.md) |
| Harmonic-oscillator ladder operators and the $E_n=\hbar\omega(n+\tfrac12)$ spectrum | [quantum-mechanics 3.2](../quantum-mechanics/lessons/03-02-harmonic-oscillator-ladder-operators.md) |
| The generalized uncertainty relation $\sigma_A\sigma_B\ge\tfrac12\lvert\langle[\hat A,\hat B]\rangle\rvert$ | [quantum-mechanics 3.3](../quantum-mechanics/lessons/03-03-commutators-uncertainty.md) |
| Dirac notation, inner products, and the Born rule | [quantum-mechanics 1.3](../quantum-mechanics/lessons/01-03-hilbert-space-dirac-notation.md), [1.2](../quantum-mechanics/lessons/01-02-wavefunction-born-rule.md) |
| Time-dependent perturbation theory and the two-level/RWA setup | [quantum-mechanics 6.5](../quantum-mechanics/lessons/06-05-time-dependent-perturbation.md) |
| Fermi's golden rule (why $t^2$ growth becomes a constant decay rate) | [quantum-mechanics 6.6](../quantum-mechanics/lessons/06-06-fermi-golden-rule-radiation.md) |
| Pauli operators and the Bloch sphere for a two-level system | [quantum-mechanics 4.5](../quantum-mechanics/lessons/04-05-spin-pauli-stern-gerlach.md) |
| Tensor products, entangled states, and the Bell basis | [quantum-mechanics 5.2](../quantum-mechanics/lessons/05-02-tensor-products-entanglement.md) |
| The Bell/CHSH argument in its abstract spin form | [quantum-mechanics 5.3](../quantum-mechanics/lessons/05-03-bell-inequality-nonlocality.md) |
| Boltzmann factor and thermal population ratios | [stat-mech 3.1](../stat-mech/lessons/03-01-canonical-ensemble-boltzmann-factor.md) |
| The Planck blackbody law used in the Einstein-coefficient derivation | [stat-mech 4.3](../stat-mech/lessons/04-03-photon-gas-blackbody.md) |
| Bose–Einstein occupation $\bar n=1/(e^{\hbar\omega/k_BT}-1)$ | [stat-mech 4.2](../stat-mech/lessons/04-02-bose-einstein-fermi-dirac.md) |
| Fourier transform pairs and the time–bandwidth uncertainty relation | [fourier-analysis 2.4](../fourier-analysis/lessons/02-04-plancherel-uncertainty.md) |
| Poisson and geometric distributions; mean, variance, factorial moments | [prob-stat-refresher 2.2](../prob-stat-refresher/lessons/02-02-discrete-distributions.md), [2.1](../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md) |
| The Cauchy–Schwarz inequality (the classical $g^{(2)}(0)\ge1$ proof) | [linalg-refresher 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) |
| Diagonalizing a $2\times2$ Hermitian matrix (every Jaynes–Cummings block) | [linalg-refresher 3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md) |

## Pitfalls

### Symbols that collide

- $\tau_c$ is the cavity **photon lifetime** in 1.5 and the **coherence time** from 2.1 onward — unrelated quantities that both live in a laser. *([1.5](lessons/01-05-optical-cavities-laser-modes.md), [2.1](lessons/02-01-temporal-coherence-g1.md))*
- $Q$ is the cavity quality factor in 1.5 and the Mandel parameter in 2.3; $V$ is fringe visibility (2.1), quantization volume (3.1), and a variance (3.6); $S$ is a power spectrum (2.1), the squeeze operator (3.5), and the CHSH quantity (4.4). *([1.5](lessons/01-05-optical-cavities-laser-modes.md), [2.3](lessons/02-03-photon-statistics-g2.md), [3.5](lessons/03-05-squeezed-states.md))*
- $\Delta$ is laser-minus-atom in 1.2 but atom-minus-cavity in 4.2; $\gamma$ is the gain coefficient in 1.4 but the atom's free-space decay rate in 4.2; $d$ is the dipole matrix element in 1.2 but the dark-count rate in 3.6. *([1.2](lessons/01-02-two-level-atom-rabi-oscillations.md), [4.2](lessons/04-02-cavity-qed-jaynes-cummings.md), [3.6](lessons/03-06-single-photon-sources-photodetection.md))*

### Beams and cavities

- You cannot engineer a beam that is both tightly focused and non-spreading — $w_0\theta=\lambda/\pi$ is fixed, and $z_R\propto w_0^2$ punishes small waists twice. *([1.1](lessons/01-01-classical-em-waves-gaussian-beams.md))*
- $w_0$ is the $1/e^2$ **intensity** radius, not an edge; about 86 percent of the power lies inside $r<w$. And $\theta$ is a half-angle while depth of focus is the full $2z_R$. *([1.1](lessons/01-01-classical-em-waves-gaussian-beams.md))*
- The mirror-loss term is $\frac{1}{2L}\ln\frac{1}{R_1R_2}$, not $\frac1L$ — the $2L$ is the round trip. Dropping it doubles your predicted threshold. *([1.5](lessons/01-05-optical-cavities-laser-modes.md))*
- Finesse and $Q$ are not the same ruler: $\mathcal F$ compares linewidth to mode spacing, $Q$ compares it to the optical frequency, so $Q=\mathcal F\cdot q$ with $q$ huge. *([1.5](lessons/01-05-optical-cavities-laser-modes.md))*
- More longitudinal modes means more power but *less* coherence — single-mode lasers deliberately throw away power for spectral purity. *([1.5](lessons/01-05-optical-cavities-laser-modes.md))*

### Atoms, gain, and emission

- At fixed $\Omega$, detuning can only lower the ceiling and speed up the wobble — you cannot out-*time* a detuning to reach full inversion; only $\Delta=0$ does. *([1.2](lessons/01-02-two-level-atom-rabi-oscillations.md))*
- Coherent driving is reversible: keep driving past the $\pi$-pulse and the atom hands its energy *back*. Irreversibility only arrives with spontaneous decay. *([1.2](lessons/01-02-two-level-atom-rabi-oscillations.md))*
- Spontaneous emission is not a bolt-on classical decay — detailed balance forces it, and it *is* emission stimulated by vacuum fluctuations. *([1.3](lessons/01-03-absorption-spontaneous-stimulated-emission.md), [3.2](lessons/03-02-fock-states-vacuum-zero-point.md))*
- $B_{12}=B_{21}$ does **not** mean absorption and emission balance — the *rates* carry $N_1$ versus $N_2$, and which wins is entirely a headcount. *([1.3](lessons/01-03-absorption-spontaneous-stimulated-emission.md))*
- No beam, however strong, inverts a two-level atom: equal up and down rates cap you at transparency. Extra pump levels are mandatory, not a convenience. *([1.4](lessons/01-04-gain-population-inversion-laser-threshold.md))*
- More pump does not mean more gain forever — $\gamma_0/(1+I/I_\text{sat})$ falls as the beam eats its own inversion, and a running laser sits exactly where saturated gain equals loss. *([1.4](lessons/01-04-gain-population-inversion-laser-threshold.md))*
- $\alpha$ and $\gamma$ are one coefficient with two signs, $\gamma=-\alpha$, both equal to $\sigma(N_2-N_1)$. *([1.4](lessons/01-04-gain-population-inversion-laser-threshold.md))*

### Coherence and correlation functions

- $\lvert g^{(1)}(0)\rvert=1$ for *every* field, laser or lamp — all the information is in how fast it decays. *([2.1](lessons/02-01-temporal-coherence-g1.md))*
- Delay and path difference differ by a factor $c$: $\tau=\Delta L/c$. Feeding $\Delta L$ into an exponential written in $\tau$ is off by $3\times10^8$. *([2.1](lessons/02-01-temporal-coherence-g1.md))*
- $g^{(1)}$ cannot tell a laser from a filtered lamp of the same lineshape — it only sees the spectrum. That distinction lives entirely in $g^{(2)}$. *([2.1](lessons/02-01-temporal-coherence-g1.md), [2.3](lessons/02-03-photon-statistics-g2.md))*
- Coherence is two independent axes: temporal (set by bandwidth, along the beam) and spatial (set by angular size, across it). Fringes need both. *([2.2](lessons/02-02-spatial-coherence.md))*
- Brightness has nothing to do with spatial coherence — only $\theta_s$ counts, and *smaller* source means *larger* $\ell_\perp$. Dead fringes mean the source is too big, not too dim. *([2.2](lessons/02-02-spatial-coherence.md))*
- HBT does not measure $g^{(1)}$ despite the beam splitter: there is no recombination and no fringe, only $\langle I_1I_2\rangle$. *([2.4](lessons/02-04-hanbury-brown-twiss.md))*
- Bunching proves nothing quantum — a flickering classical intensity gives $g^{(2)}(0)=2$. Only the dip *below* 1 rules the classical picture out. *([2.3](lessons/02-03-photon-statistics-g2.md), [2.4](lessons/02-04-hanbury-brown-twiss.md))*
- Bunching is not photons attracting each other; it is a statistical shadow of the source's intensity fluctuating. *([2.3](lessons/02-03-photon-statistics-g2.md))*
- Attenuating a laser makes photons rare, not antibunched: it stays Poissonian with $g^{(2)}(0)=1$ and still delivers the occasional pair. *([2.4](lessons/02-04-hanbury-brown-twiss.md), [3.6](lessons/03-06-single-photon-sources-photodetection.md))*

### Operators and photon states

- Normal ordering gives $\hat a^\dagger\hat a^\dagger\hat a\hat a=\hat n(\hat n-1)$, not $\hat n^2$. Lose the $-1$ and a single photon looks classical. *([2.3](lessons/02-03-photon-statistics-g2.md))*
- $\hat a$ and $\hat a^\dagger$ are not Hermitian and so are not observables; only combinations like $\hat a+\hat a^\dagger$ are measurable. *([3.1](lessons/03-01-quantizing-em-field.md))*
- Order matters absolutely: $\hat a^\dagger\hat a=\hat n$ but $\hat a\hat a^\dagger=\hat n+1$, and that stray $+1$ *is* the zero-point energy. *([3.1](lessons/03-01-quantizing-em-field.md))*
- "$n$ photons" is not $n$ little balls in the box — a photon is a unit of excitation of a delocalized mode. *([3.1](lessons/03-01-quantizing-em-field.md))*
- $\hat a^\dagger\lvert n\rangle=\sqrt{n+1}\lvert n+1\rangle$, with the root. The one genuine exception people misremember is $\hat a\lvert0\rangle=0$, the *number* zero. *([3.2](lessons/03-02-fock-states-vacuum-zero-point.md))*
- $\langle\hat E\rangle=0$ does not mean "no light" — a Fock state's phase is random, so the mean field cancels while $\langle\hat E^2\rangle$ stays large. *([3.2](lessons/03-02-fock-states-vacuum-zero-point.md))*
- A bright Fock state does not become classical: $g^{(2)}(0)=1-1/n$ creeps toward 1 but stays sub-Poissonian and phaseless. Classical-looking light is the *coherent* state. *([3.2](lessons/03-02-fock-states-vacuum-zero-point.md))*
- $\alpha$ is an amplitude, not a count: $\alpha=10$ means $\langle n\rangle=100$ and $\Delta n=10$. And $\lvert\alpha\rangle$ has a definite *phase*, never a definite photon number. *([3.3](lessons/03-03-coherent-states.md))*
- Coherent states are not orthogonal and form an overcomplete set: $\lvert\langle\beta\lvert\alpha\rangle\rvert^2=e^{-\lvert\alpha-\beta\rvert^2}$. *([3.3](lessons/03-03-coherent-states.md))*

### Noise, squeezing, and detection

- "Most classical" does not mean noiseless: a coherent state carries the full vacuum blob of radius $\tfrac12$. Shot noise is the price of admission. *([3.4](lessons/03-04-quadratures-phase-space-shot-noise.md))*
- Absolute noise $\Delta n=\sqrt{\langle n\rangle}$ grows with brightness while *relative* noise falls as $1/\sqrt{\langle n\rangle}$ — those are not in conflict. *([3.4](lessons/03-04-quadratures-phase-space-shot-noise.md))*
- The numbers $\tfrac12$ and $\tfrac14$ belong to the $\hat X=\tfrac12(\hat a\pm\ldots)$ convention; the $1/\sqrt2$ convention rescales every digit. Check the normalization before trusting a source. *([3.4](lessons/03-04-quadratures-phase-space-shot-noise.md))*
- Squeezing does not reduce total noise — the product stays at $\tfrac14$. The win exists only because your measurement listens to one quadrature, so a wrong squeeze angle *adds* noise. *([3.5](lessons/03-05-squeezed-states.md))*
- A squeezed *vacuum* is not empty: $\langle\hat n\rangle=\sinh^2r$, and its photons come in pairs (even Fock numbers only). *([3.5](lessons/03-05-squeezed-states.md))*
- Low detector efficiency does **not** inflate a measured $g^{(2)}(0)$; only genuine two-photon admixture does. Squeezing is the opposite — there, efficiency is everything. *([3.6](lessons/03-06-single-photon-sources-photodetection.md))*
- The vacuum's half-quantum cannot trip a detector, because absorption applies $\hat a$ and $\hat a\lvert0\rangle=0$. *([3.6](lessons/03-06-single-photon-sources-photodetection.md))*

### Interference, entanglement, and information

- HOM photons do not collide or repel — a beam splitter is linear optics. The bunching is cancelling amplitudes between two indistinguishable histories. *([4.1](lessons/04-01-quantum-beam-splitter-hong-ou-mandel.md))*
- Dip depth measures *indistinguishability*, not photon number. Single-photon purity ($g^{(2)}(0)\approx0$) and indistinguishability (deep dip) are separate benchmarks. *([4.1](lessons/04-01-quantum-beam-splitter-hong-ou-mandel.md))*
- An empty cavity is not inert: the coupling carries $\sqrt{n+1}$, so the vacuum rung still splits by $2\hbar g$ and flops the atom. *([4.2](lessons/04-02-cavity-qed-jaynes-cummings.md))*
- $P_e=\cos^2(gt)$ beats at $2g$, not $g$ — population at the full splitting, amplitude at half. And "strong coupling" means $g\gg\kappa,\gamma$, not merely large $g$. *([4.2](lessons/04-02-cavity-qed-jaynes-cummings.md))*
- Down-conversion is coherent splitting, not absorption — energy and momentum both come back out. And energy conservation alone does not fix the output; the momentum condition picks the cones. *([4.3](lessons/04-03-nonlinear-optics-parametric-down-conversion.md))*
- Pumping harder raises the two-pair rate faster than the pair rate, so brightness trades directly against heralded single-photon purity. Keep $\lambda\ll1$, typically $p\lesssim0.05$–$0.1$. *([4.3](lessons/04-03-nonlinear-optics-parametric-down-conversion.md), [3.6](lessons/03-06-single-photon-sources-photodetection.md))*
- Entanglement does not let Alice signal Bob: each side alone is a perfect coin, and the correlation appears only when the two lists are compared. *([4.4](lessons/04-04-entangled-photons-bell-tests.md))*
- A CHSH violation kills *local realism*, not locality — quantum mechanics keeps no-signalling and drops pre-existing values. *([4.4](lessons/04-04-entangled-photons-bell-tests.md))*
- Aligned analyzers give exactly 2 and never violate; you must stagger the settings in $22.5^\circ$ steps to reach $2\sqrt2$. *([4.4](lessons/04-04-entangled-photons-bell-tests.md))*
- In BB84 they publicly compare **bases**, plus a sacrificial sample of bits — never the key itself. Revealing a bit spends it. *([4.5](lessons/04-05-quantum-information-taste.md))*
- No-cloning forbids copying *unknown* qubits only; states you already know how to prepare, or a promised orthogonal set, copy fine. *([4.5](lessons/04-05-quantum-information-taste.md))*
