# Waves & Optics — Syllabus

> Physics · Tier 0 · ~14 lessons · Prereqs: [calc-refresher](../calc-refresher/syllabus.md), [ode-refresher](../ode-refresher/syllabus.md) · Roadmap id: `waves-optics`

## Goal

Trace one idea — oscillation — from a single mass on a spring all the way to light bending through a lens and colors shimmering on a soap film. You'll build the harmonic oscillator (simple, damped, driven) as the second-order ODE it really is, promote it to the wave equation, and then watch superposition explain standing waves, beats, interference, and diffraction. The back half is optics: light as an electromagnetic wave, geometric optics (Snell, mirrors, lenses, image formation), and physical optics (double slit, thin films, gratings, resolution, polarization), closing with a taste of wave packets and Fourier synthesis. Deliberately skipped: the full derivation of Maxwell's equations (that's [`em-refresher`](../em-refresher/syllabus.md)), quantum optics (its own course, `photonics-quantum-optics`), and nonlinear optics.

## Dangerous Checklist

When you finish, you can:

- [ ] Set up and solve the simple, damped, and driven harmonic-oscillator ODEs, and classify the damping regime
- [ ] Locate a resonance peak and estimate the quality factor $Q$ of an oscillator
- [ ] Write down the wave equation, test whether a given function solves it, and read off speed, wavelength, and frequency
- [ ] Compute the speed of a wave on a string or a sound wave from the medium's properties
- [ ] Build standing waves and normal modes by superposition, and find harmonic and beat frequencies
- [ ] Explain what makes light an electromagnetic wave and place a wavelength on the spectrum
- [ ] Apply Snell's law to trace refraction and find the critical angle for total internal reflection
- [ ] Use the mirror and thin-lens equations to locate an image, size it, and say whether it's real or inverted — and draw the ray diagram
- [ ] Predict double-slit and thin-film interference fringe positions and film colors
- [ ] Predict single-slit and grating diffraction patterns, and apply the Rayleigh criterion to a resolution limit
- [ ] Analyze polarized light with Malus's law and find Brewster's angle
- [ ] Explain how dispersion spreads a wave packet, and sketch how Fourier synthesis builds a pulse from sinusoids

## Modules

### Module 1: Oscillations & resonance

The harmonic oscillator is a second-order ODE wearing a physics costume — master it once and it recurs everywhere.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Simple harmonic motion | Recognize SHM, solve $\ddot x + \omega_0^2 x = 0$, and read amplitude/phase/energy | Hooke's law, $\omega_0=\sqrt{k/m}$, phase, energy exchange, small-angle pendulum |
| 1.2 | Damped oscillations | Add friction and classify under-/critical-/over-damped motion | damping term, characteristic roots, decay envelope, quality factor $Q$ |
| 1.3 | Driven oscillations & resonance | Drive the oscillator sinusoidally and find where amplitude peaks | steady-state response, amplitude/phase vs. frequency, resonance, $\omega_r=\sqrt{\omega_0^2-2\beta^2}$ |

**Boss problem 1:** A mass on a spring sits in a viscous fluid and is driven by a sinusoidal force. Given $m$, $k$, the damping coefficient $b$, and drive amplitude, find the natural frequency $\omega_0$, classify the damping, find the drive frequency that maximizes the steady-state amplitude, and estimate $Q$. Explain physically why the resonant frequency sits *below* $\omega_0$.

### Module 2: Waves & superposition

Promote one oscillator to a continuum of coupled oscillators and the wave equation falls out; superposition does the rest.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The wave equation & traveling waves | Write the wave equation and test $f(x\pm vt)$ solutions; read off $v,\lambda,f,k,\omega$ | wave equation, traveling waves, wavenumber $k$, $v=\lambda f=\omega/k$, phase |
| 2.2 | Waves on strings & sound | Derive wave speed from a medium's properties and handle reflection at a boundary | $v=\sqrt{T/\mu}$, tension/density, sound as a pressure wave, impedance, energy & power |
| 2.3 | Superposition, standing waves & beats | Add waves to make standing waves, normal modes, and beats | superposition, boundary conditions, harmonics, nodes/antinodes, beat frequency |
| 2.4 | Light as an electromagnetic wave | See light as coupled $\mathbf E$ and $\mathbf B$ fields and place it on the spectrum | EM wave, transverse fields, $c=1/\sqrt{\mu_0\varepsilon_0}$, spectrum, intensity |

**Boss problem 2:** A string of length $L$, tension $T$, and linear density $\mu$ is fixed at both ends. Find the wave speed, the fundamental frequency, and the third harmonic. Then, when the fundamental is sounded against a 220 Hz tuning fork you hear 3 beats per second — list the possible string frequencies and explain how you'd tell which is right by tightening the string.

### Module 3: Geometric optics

When the wavelength is tiny compared to the lens, light travels in rays — and a handful of equations locate every image.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Reflection, refraction & Snell's law | Bend a ray across a boundary and find total internal reflection | law of reflection, Snell's law, index of refraction, critical angle, Fermat's principle |
| 3.2 | Mirrors & image formation | Locate images from curved mirrors by ray tracing and the mirror equation | concave/convex mirrors, focal length, $1/f=1/d_o+1/d_i$, magnification, real vs. virtual |
| 3.3 | Lenses & optical instruments | Use the thin-lens equation and chain two lenses into an instrument | converging/diverging lenses, thin-lens equation, ray diagrams, two-lens systems |

**Boss problem 3:** An object stands 30 cm in front of a converging lens of focal length 20 cm. Locate the image, give its magnification, and say whether it's real or inverted. Now place a second converging lens ($f=15$ cm) 90 cm beyond the first: treat the first image as the object for the second and find the final image and total magnification. Draw the ray diagram for the first lens.

### Module 4: Physical optics

Let the wavelength matter again and light interferes with itself — fringes, colors, diffraction limits, and polarization.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Interference: double slit & thin films | Predict fringe positions and the colors of a soap film or oil slick | coherence, path difference, $d\sin\theta=m\lambda$, thin-film phase shifts, optical path length |
| 4.2 | Diffraction, gratings & resolution | Predict single-slit and grating patterns and apply the Rayleigh limit | single-slit minima, diffraction gratings, missing orders, Rayleigh criterion $\theta\approx1.22\lambda/D$ |
| 4.3 | Polarization | Control light's polarization and read intensity through analyzers | linear/circular polarization, Malus's law, Brewster's angle, birefringence (taste) |
| 4.4 | Wave packets, dispersion & Fourier synthesis | Build a pulse from sinusoids and watch dispersion spread it | superposition of frequencies, group vs. phase velocity, dispersion, Fourier synthesis |

**Boss problem 4:** A double slit has slit separation $d$ and slit width $a$ with $d=3a$, illuminated by light of wavelength $\lambda$. Find the angles of the first few interference maxima, identify which interference maxima are *missing* because they land on single-slit diffraction minima, and explain why. Then, if this pattern were formed by a telescope of aperture $D$, state the smallest angular separation of two stars it could resolve.

## Sources of truth

- French, *Vibrations and Waves* — the canonical undergrad register for Modules 1–2 (oscillators, the wave equation, superposition).
- Hecht, *Optics* — geometric and physical optics conventions (sign rules, interference, diffraction, polarization).
- Georgi, *The Physics of Waves* — normal modes, dispersion, and the Fourier/wave-packet picture in Module 4.
- Halliday, Resnick & Walker, *Fundamentals of Physics* — problem style and the intuition-first framing for a Tier 0 refresher.

<!-- 2026-08-04: Landed at 14 lessons (vs. ~12 target, +17%). Kept "light as an EM wave" and "wave packets/dispersion/Fourier" as their own lessons rather than cramming them, per the split-don't-cram rule. -->
