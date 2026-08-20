# Waves & Optics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

One idea, four disguises. A mass on a spring obeys $\ddot x + \omega_0^2 x = 0$;
a million of them in a row obey the wave equation; light is that wave in the
$\mathbf E$ and $\mathbf B$ fields; and when light's wavelength stops being
negligible you get interference, diffraction, and polarization. Mid-problem, the
two things you'll actually come back for are the **sign conventions** (mirrors
and lenses) and the **interference/diffraction condition table** — which
combination gives a maximum and which gives a minimum.

## Notation

Symbols are listed in first-appearance order. Several are reused across modules
with different meanings — see *Symbol collisions* at the end of the table.

| Symbol | Means | Units | First used |
|---|---|---|---|
| $k$ | spring constant — stiffness, how hard the spring pulls back per meter of stretch | N/m | [1.1](lessons/01-01-simple-harmonic-motion.md) |
| $\omega_0$ | natural angular frequency — the tempo the system rings at on its own | rad/s | [1.1](lessons/01-01-simple-harmonic-motion.md) |
| $A$ | amplitude — the farthest displacement from equilibrium | m | [1.1](lessons/01-01-simple-harmonic-motion.md) |
| $\phi$ | phase constant — where in the cycle you were at $t=0$ | rad | [1.1](lessons/01-01-simple-harmonic-motion.md) |
| $T$ | period — seconds for one full cycle | s | [1.1](lessons/01-01-simple-harmonic-motion.md) |
| $f$ | frequency — cycles per second, $f = 1/T = \omega/2\pi$ | Hz | [1.1](lessons/01-01-simple-harmonic-motion.md) |
| $U''(x_0)$ | curvature of a potential well at its bottom — the effective spring constant | N/m | [1.1](lessons/01-01-simple-harmonic-motion.md) |
| $b$ | damping coefficient — the drag force per unit speed | N·s/m | [1.2](lessons/01-02-damped-oscillations.md) |
| $\beta = b/2m$ | damping constant — how fast the *amplitude* envelope decays | s⁻¹ | [1.2](lessons/01-02-damped-oscillations.md) |
| $\gamma = 2\beta$ | energy decay rate — energy dies twice as fast as amplitude | s⁻¹ | [1.2](lessons/01-02-damped-oscillations.md) |
| $\omega_1$ | damped free-ringing frequency, $\sqrt{\omega_0^2-\beta^2}$ — always below $\omega_0$ | rad/s | [1.2](lessons/01-02-damped-oscillations.md) |
| $Q$ | quality factor — roughly how many radians of ringing the energy survives | — | [1.2](lessons/01-02-damped-oscillations.md) |
| $\Omega$ | drive angular frequency — the tempo *you* impose | rad/s | [1.3](lessons/01-03-driven-oscillations-resonance.md) |
| $F_0$ | drive amplitude — peak size of the applied push | N | [1.3](lessons/01-03-driven-oscillations-resonance.md) |
| $\Omega_r$ | amplitude-resonance frequency, $\sqrt{\omega_0^2-2\beta^2}$ — where the response peaks | rad/s | [1.3](lessons/01-03-driven-oscillations-resonance.md) |
| $\delta$ | phase lag — how far behind the drive the mass arrives | rad | [1.3](lessons/01-03-driven-oscillations-resonance.md) |
| $\Delta\omega$ | full width of the resonance peak at $1/\sqrt2$ of its height | rad/s | [1.3](lessons/01-03-driven-oscillations-resonance.md) |
| $y(x,t)$ | displacement of the medium at position $x$, time $t$ | m | [2.1](lessons/02-01-wave-equation-traveling-waves.md) |
| $v$ | wave speed — how fast the *pattern* moves (the medium doesn't) | m/s | [2.1](lessons/02-01-wave-equation-traveling-waves.md) |
| $k$ | wavenumber, $2\pi/\lambda$ — radians of cosine per meter | rad/m | [2.1](lessons/02-01-wave-equation-traveling-waves.md) |
| $\lambda$ | wavelength — crest-to-crest distance | m | [2.1](lessons/02-01-wave-equation-traveling-waves.md) |
| $\omega$ | angular frequency, $2\pi f$ — radians of cosine per second | rad/s | [2.1](lessons/02-01-wave-equation-traveling-waves.md) |
| $T$ | tension — the pull along a stretched string | N | [2.2](lessons/02-02-waves-on-strings-sound.md) |
| $\mu$ | linear mass density — mass per meter of string | kg/m | [2.2](lessons/02-02-waves-on-strings-sound.md) |
| $B$ | bulk modulus — a fluid's stiffness against compression | Pa | [2.2](lessons/02-02-waves-on-strings-sound.md) |
| $\rho$ | mass density of a fluid | kg/m³ | [2.2](lessons/02-02-waves-on-strings-sound.md) |
| $Z = \sqrt{T\mu}$ | impedance — how hard the medium pushes back for a given wiggle speed | kg/s | [2.2](lessons/02-02-waves-on-strings-sound.md) |
| $r$ | amplitude reflection coefficient — the signed fraction bounced back | — | [2.2](lessons/02-02-waves-on-strings-sound.md) |
| $\bar P$ | time-averaged power carried down the string | W | [2.2](lessons/02-02-waves-on-strings-sound.md) |
| $L$ | length of the vibrating string or pipe | m | [2.3](lessons/02-03-superposition-standing-waves-beats.md) |
| $n$ | harmonic number — which mode, $n=1$ the fundamental | — | [2.3](lessons/02-03-superposition-standing-waves-beats.md) |
| $f_n$ | frequency of the $n$-th harmonic; $f_1$ is the fundamental | Hz | [2.3](lessons/02-03-superposition-standing-waves-beats.md) |
| $f_{\text{beat}}$ | loudness swells per second when two near tones overlap | Hz | [2.3](lessons/02-03-superposition-standing-waves-beats.md) |
| $\mathbf E$, $E_0$ | electric field and its peak amplitude | V/m | [2.4](lessons/02-04-light-as-em-wave.md) |
| $\mathbf B$, $B_0$ | magnetic field and its peak amplitude | T | [2.4](lessons/02-04-light-as-em-wave.md) |
| $c$ | speed of light in vacuum, $1/\sqrt{\mu_0\varepsilon_0}$ | m/s | [2.4](lessons/02-04-light-as-em-wave.md) |
| $\varepsilon_0$ | electric constant (permittivity of free space) | F/m | [2.4](lessons/02-04-light-as-em-wave.md) |
| $\mu_0$ | magnetic constant (permeability of free space) | T·m/A | [2.4](lessons/02-04-light-as-em-wave.md) |
| $I$ | intensity — time-averaged power per unit area (brightness) | W/m² | [2.4](lessons/02-04-light-as-em-wave.md) |
| $n$ | index of refraction, $c/v$ — how many times slower light goes in this stuff | — | [3.1](lessons/03-01-reflection-refraction-snell.md) |
| $\theta_1,\theta_2$ | angles of the ray in medium 1 and 2, **always from the normal** | rad or deg | [3.1](lessons/03-01-reflection-refraction-snell.md) |
| $\theta_c$ | critical angle — beyond it, total internal reflection | rad or deg | [3.1](lessons/03-01-reflection-refraction-snell.md) |
| $R$ | radius of curvature of a mirror (or of a lens surface, $R_1,R_2$) | m | [3.2](lessons/03-02-mirrors-image-formation.md) |
| $f$ | focal length — where parallel rays cross; $f = R/2$ for a mirror | m | [3.2](lessons/03-02-mirrors-image-formation.md) |
| $d_o$, $d_i$ | object distance and image distance, measured from the mirror/lens | m | [3.2](lessons/03-02-mirrors-image-formation.md) |
| $h_o$, $h_i$ | object height and image height (signed: $h_i<0$ is inverted) | m | [3.2](lessons/03-02-mirrors-image-formation.md) |
| $m$ | magnification $h_i/h_o = -d_i/d_o$ — size ratio, with sign = orientation | — | [3.2](lessons/03-02-mirrors-image-formation.md) |
| $M$ | angular magnification of a telescope, $-f_o/f_e$ | — | [3.3](lessons/03-03-lenses-optical-instruments.md) |
| $d$ | slit separation (double slit) or grating line spacing | m | [4.1](lessons/04-01-interference-double-slit-thin-films.md) |
| $\delta$ | path difference — extra distance one beam travels | m | [4.1](lessons/04-01-interference-double-slit-thin-films.md) |
| $m$ | order — the integer counting wavelengths in the path difference | — | [4.1](lessons/04-01-interference-double-slit-thin-films.md) |
| $L$ | slit-to-screen distance | m | [4.1](lessons/04-01-interference-double-slit-thin-films.md) |
| $\Delta y$ | fringe spacing on the screen, $\lambda L/d$ | m | [4.1](lessons/04-01-interference-double-slit-thin-films.md) |
| $t$ | thin-film thickness | m | [4.1](lessons/04-01-interference-double-slit-thin-films.md) |
| $2nt$ | optical path length of the round trip inside a film | m | [4.1](lessons/04-01-interference-double-slit-thin-films.md) |
| $a$ | slit **width** (as opposed to spacing $d$) | m | [4.2](lessons/04-02-diffraction-gratings-resolution.md) |
| $N$ | number of slits ruled on a grating | — | [4.2](lessons/04-02-diffraction-gratings-resolution.md) |
| $D$ | diameter of a circular aperture (pupil, lens, mirror) | m | [4.2](lessons/04-02-diffraction-gratings-resolution.md) |
| $\theta_{\min}$ | Rayleigh resolution limit — smallest resolvable angular separation | rad | [4.2](lessons/04-02-diffraction-gratings-resolution.md) |
| $\theta$ (Malus) | angle between the light's polarization and the analyzer axis | rad or deg | [4.3](lessons/04-03-polarization.md) |
| $\theta_B$ | Brewster's angle — reflection is fully polarized here | rad or deg | [4.3](lessons/04-03-polarization.md) |
| $A(k)$ | spectrum — how much of wavenumber $k$ is in the packet | m·(amplitude) | [4.4](lessons/04-04-wave-packets-dispersion-fourier.md) |
| $\omega(k)$ | dispersion relation — the medium's rule linking frequency to wavenumber | rad/s | [4.4](lessons/04-04-wave-packets-dispersion-fourier.md) |
| $v_p$, $v_g$ | phase velocity $\omega/k$ (one crest) and group velocity $d\omega/dk$ (the lump) | m/s | [4.4](lessons/04-04-wave-packets-dispersion-fourier.md) |
| $\Delta x$, $\Delta k$ | spatial width of a packet and the spread of wavenumbers in it | m, rad/m | [4.4](lessons/04-04-wave-packets-dispersion-fourier.md) |

**Symbol collisions** (read them off context, and check units):

- $k$ = spring constant (N/m) in Module 1, wavenumber (rad/m) from 2.1 on.
- $T$ = period (s) in Module 1, tension (N) in 2.2–2.3.
- $f$ = frequency (Hz) in Modules 1–2, focal length (m) in Module 3.
- $n$ = harmonic number (2.3), refractive index (3.1 on), integer index elsewhere.
- $m$ = mass (kg) in Module 1, magnification in Module 3, interference order in Module 4.
- $L$ = string length (2.3), slit-to-screen distance (4.1).
- $\delta$ = phase lag in rad (1.3), path difference in m (4.1).
- $B$ = bulk modulus (Pa) in 2.2, magnetic field (T) from 2.4 on.
- $t$ = time (s) everywhere except film thickness (m) in 4.1.

## Definitions

### Simple harmonic motion

Motion under a restoring force proportional to displacement — the thing every
smooth potential well does near its bottom, and the seed of every wave here.

$$F = -kx \;\Longrightarrow\; \ddot x + \omega_0^2 x = 0, \qquad x(t) = A\cos(\omega_0 t + \phi), \qquad \omega_0 = \sqrt{k/m}$$

*Introduced:* [1.1](lessons/01-01-simple-harmonic-motion.md)

### Isochronism

The period doesn't care how hard you pulled: $A$ appears nowhere in
$T = 2\pi/\omega_0$. A wide swing just moves faster to cover more ground in the
same time.

*Introduced:* [1.1](lessons/01-01-simple-harmonic-motion.md)

### Damping constant

How fast the oscillation's envelope bleeds away — the drag force per unit speed,
normalized by twice the mass so it sits cleanly in the ODE.

$$m\ddot x + b\dot x + kx = 0 \;\Longleftrightarrow\; \ddot x + 2\beta\dot x + \omega_0^2 x = 0, \qquad \beta = \frac{b}{2m}$$

*Introduced:* [1.2](lessons/01-02-damped-oscillations.md)

### Quality factor

How many times the thing rings before it dies. High $Q$ = light damping = a tall,
narrow resonance; $Q = \tfrac12$ is exactly critical damping.

$$Q = \frac{\omega_0}{2\beta} = \frac{\omega_0}{\gamma} = \frac{\omega_0}{\Delta\omega}, \qquad \frac{\text{energy lost per cycle}}{\text{energy stored}} \approx \frac{2\pi}{Q}$$

*Introduced:* [1.2](lessons/01-02-damped-oscillations.md)

### Resonance

Push a damped oscillator near its own favorite tempo and each push lands where it
helps, so the response swells far out of proportion to the drive. In steady state
the mass oscillates at **your** frequency $\Omega$, not at $\omega_0$.

$$A(\Omega) = \frac{F_0/m}{\sqrt{(\omega_0^2-\Omega^2)^2 + 4\beta^2\Omega^2}}, \qquad A(\Omega_r) \approx Q\,\frac{F_0}{k}$$

*Introduced:* [1.3](lessons/01-03-driven-oscillations-resonance.md)

### Wave equation

"Acceleration in time equals a fixed speed-squared times curvature in space" —
the one PDE every wave in this course obeys.

$$\frac{\partial^2 y}{\partial t^2} = v^2\,\frac{\partial^2 y}{\partial x^2}$$

*Introduced:* [2.1](lessons/02-01-wave-equation-traveling-waves.md)

### Traveling wave (d'Alembert form)

*Any* twice-differentiable shape, rigidly slid along at speed $v$, solves the
wave equation — one bump running right, one running left, and that's the general
solution.

$$y(x,t) = f(x-vt) + g(x+vt)$$

*Introduced:* [2.1](lessons/02-01-wave-equation-traveling-waves.md)

### Phase velocity

The speed of a point of constant phase — one particular crest. Hold
$kx - \omega t$ fixed and differentiate.

$$v_p = \frac{\omega}{k} = \lambda f$$

*Introduced:* [2.1](lessons/02-01-wave-equation-traveling-waves.md), *reused in* [4.4](lessons/04-04-wave-packets-dispersion-fourier.md)

### Transverse vs. longitudinal

**Transverse:** the displacement is perpendicular to the travel direction (string
waves, light). **Longitudinal:** the displacement is along it (sound). Same wave
equation; only the meaning of "$y$" changes — but only transverse waves can be
polarized.

*Introduced:* [2.1](lessons/02-01-wave-equation-traveling-waves.md), *cashed in at* [4.3](lessons/04-03-polarization.md)

### Impedance

How hard a medium pushes back for a given wiggle speed. Reflection at a boundary
is entirely a story about mismatched impedance.

$$Z = \sqrt{T\mu}, \qquad r = \frac{Z_1 - Z_2}{Z_1 + Z_2}$$

*Introduced:* [2.2](lessons/02-02-waves-on-strings-sound.md)

### Superposition principle

The wave equation is linear, so where two waves overlap the medium's displacement
is the plain arithmetic sum. They pass through each other unchanged — no
collision, no memory. This is the foundation of every standing wave, beat, and
interference fringe in the course.

$$y_1, y_2 \text{ solutions} \;\Longrightarrow\; a\,y_1 + b\,y_2 \text{ a solution}$$

*Introduced:* [2.3](lessons/02-03-superposition-standing-waves-beats.md)

### Standing wave

Two identical waves running opposite ways add to a pattern that doesn't travel —
it breathes in place. Space and time separate, and net energy transport is zero.

$$A\cos(kx-\omega t) + A\cos(kx+\omega t) = 2A\cos(kx)\cos(\omega t)$$

*Introduced:* [2.3](lessons/02-03-superposition-standing-waves-beats.md)

### Node and antinode

**Nodes** never move (where the spatial factor vanishes); **antinodes** swing with
full amplitude $2A$. They alternate, spaced $\lambda/2$ apart node-to-node, with
an antinode halfway between.

*Introduced:* [2.3](lessons/02-03-superposition-standing-waves-beats.md)

### Beats

Two nearly-equal tones add to a fast tone at the average pitch inside a slow
envelope. You *hear* a swell each time the envelope's magnitude peaks — twice per
envelope cycle — so the beat rate is the full frequency difference.

$$f_{\text{beat}} = |f_1 - f_2|, \qquad f_{\text{carrier}} = \tfrac12(f_1+f_2)$$

*Introduced:* [2.3](lessons/02-03-superposition-standing-waves-beats.md)

### Electromagnetic wave

A changing $\mathbf E$ births a $\mathbf B$ and vice versa, so the pair leapfrogs
through empty space with no medium at all. Transverse, mutually perpendicular,
**in phase**, with $E = cB$ at every instant.

$$c = \frac{1}{\sqrt{\mu_0\varepsilon_0}}, \qquad \mathbf E \times \mathbf B \parallel \text{direction of travel}$$

*Introduced:* [2.4](lessons/02-04-light-as-em-wave.md)

### Intensity

Brightness: time-averaged power per unit area. It goes as the **square** of the
field amplitude, which is why interference bookkeeping done on fields shows up
squared on the screen.

$$I = \tfrac12 c\,\varepsilon_0 E_0^2 \quad (\mathrm{W/m^2}), \qquad I \propto E_0^2$$

*Introduced:* [2.4](lessons/02-04-light-as-em-wave.md)

### Index of refraction

How many times slower light travels in a material than in vacuum. Frequency is
fixed by the source, so slowing the wave shortens it.

$$n = \frac{c}{v} \ \ (\ge 1), \qquad v = \frac{c}{n}, \qquad \lambda_{\text{medium}} = \frac{\lambda_{\text{vacuum}}}{n}, \qquad f \text{ unchanged}$$

*Introduced:* [3.1](lessons/03-01-reflection-refraction-snell.md)

### Ray approximation

When the wavelength is tiny next to the apertures and optics involved, spreading
is negligible and light travels in straight lines you can draw with a ruler. This
is the licence for all of Module 3 — and it expires in Module 4.

*Introduced:* [3.1](lessons/03-01-reflection-refraction-snell.md)

### Total internal reflection

Going dense → rare, the refracted ray bends away from the normal; past the
critical angle Snell's law would need $\sin\theta_2 > 1$, so nothing escapes and
the boundary becomes a perfect mirror.

$$\sin\theta_c = \frac{n_2}{n_1} \qquad (n_1 > n_2 \text{ required})$$

*Introduced:* [3.1](lessons/03-01-reflection-refraction-snell.md)

### Fermat's principle

Light takes the path of least time. Reflection's equal angles and Snell's law
both fall out of it — refraction is a lifeguard running farther on sand to swim
less.

$$\frac{\sin\theta_1}{v_1} = \frac{\sin\theta_2}{v_2} \;\Longleftrightarrow\; n_1\sin\theta_1 = n_2\sin\theta_2$$

*Introduced:* [3.1](lessons/03-01-reflection-refraction-snell.md)

### Real vs. virtual image

A **real** image is where light actually crosses — you could catch it on a card.
A **virtual** image is where the backward extensions of diverging rays only
*appear* to come from. The sign of $d_i$ tells you which, and the convention for
that sign differs between mirrors and lenses (see the sign table below).

*Introduced:* [3.2](lessons/03-02-mirrors-image-formation.md)

### Magnification

How many times taller the image is, with the sign carrying orientation:
negative = inverted, positive = upright. Chain optics multiply.

$$m = \frac{h_i}{h_o} = -\frac{d_i}{d_o}, \qquad m_{\text{total}} = m_1 m_2$$

*Introduced:* [3.2](lessons/03-02-mirrors-image-formation.md), *chained in* [3.3](lessons/03-03-lenses-optical-instruments.md)

### Virtual object

If the first lens's rays are still converging toward a point *beyond* the second
lens when the second lens grabs them, the second lens's object distance comes out
negative. That's legal — substitute the negative number straight in.

$$d_{o2} = (\text{separation}) - d_{i1}, \qquad d_{o2} < 0 \Rightarrow \text{virtual object}$$

*Introduced:* [3.3](lessons/03-03-lenses-optical-instruments.md)

### Coherence

Two beams interfere into *stable* fringes only if they hold a fixed phase
relationship. Independent bulbs reshuffle their relative phase billions of times a
second and average to gray — which is why Young split **one** source in two, and
why lasers give the cleanest fringes.

*Introduced:* [4.1](lessons/04-01-interference-double-slit-thin-films.md)

### Optical path length

Distance weighted by index, because light is slower (shorter-wavelength) inside a
medium. A round trip through a film of thickness $t$ counts as $2nt$ — which is
why you then compare against the **vacuum** wavelength.

*Introduced:* [4.1](lessons/04-01-interference-double-slit-thin-films.md)

### Reflection phase flip

A wave reflecting off a boundary from **low** index to **high** index inverts —
it gains an extra half-wavelength ($\pi$). High-to-low does not. This is the same
inversion a rope pulse suffers at a fixed end ([2.2](lessons/02-02-waves-on-strings-sound.md)),
and counting flips is what decides bright-vs-dark for a thin film.

*Introduced:* [4.1](lessons/04-01-interference-double-slit-thin-films.md)

### Order

The integer $m$ counting whole wavelengths in a path difference. $m=0$ is the
straight-ahead central fringe for a double slit or grating — but for
**single-slit minima** the counting starts at $m = \pm1$, because $m=0$ there is
the bright central peak.

*Introduced:* [4.1](lessons/04-01-interference-double-slit-thin-films.md), *sharpened in* [4.2](lessons/04-02-diffraction-gratings-resolution.md)

### Missing order

A grating's slits have both a spacing $d$ and a width $a$. The sharp interference
peaks (from $d$) sit inside the single-slit envelope (from $a$); when a peak lands
exactly on an envelope zero, it's suppressed.

$$\frac{m}{m'} = \frac{d}{a} \quad\Longrightarrow\quad \text{orders that are multiples of } d/a \text{ vanish } (d = 3a \Rightarrow m = 3,6,9,\dots)$$

*Introduced:* [4.2](lessons/04-02-diffraction-gratings-resolution.md)

### Rayleigh criterion

Two points are *just* resolved when the central maximum of one lands on the first
diffraction minimum of the other. This is a hard physical ceiling on every
telescope, microscope, and eye — not a build-quality issue.

$$\theta_{\min} \approx 1.22\,\frac{\lambda}{D} \quad (\text{circular aperture of diameter } D)$$

*Introduced:* [4.2](lessons/04-02-diffraction-gratings-resolution.md)

### Polarization

Which way light's transverse $\vec E$ shakes. **Linear** = a fixed line;
**circular** = two equal perpendicular components a quarter-cycle out of phase,
so the tip traces a circle; **elliptical** = the general case. Sound, being
longitudinal, cannot be polarized at all.

*Introduced:* [4.3](lessons/04-03-polarization.md)

### Brewster's angle

The one incidence angle at which the reflected beam is 100 percent polarized
(perpendicular to the plane of incidence) — equivalently, where the reflected and
refracted rays are exactly 90 degrees apart.

$$\tan\theta_B = \frac{n_2}{n_1}$$

*Introduced:* [4.3](lessons/04-03-polarization.md)

### Wave packet

A localized burst of oscillation, built by adding a continuum of sinusoids — the
honest picture of any real signal. Beats are the two-component ancestor; a packet
is the limit with infinitely many.

*Introduced:* [4.4](lessons/04-04-wave-packets-dispersion-fourier.md)

### Group velocity

The speed of the *envelope* — the lump that carries the energy and the message.
It's a **derivative**, not an average of crest speeds.

$$v_g = \frac{d\omega}{dk} \quad\text{versus}\quad v_p = \frac{\omega}{k}$$

*Introduced:* [4.4](lessons/04-04-wave-packets-dispersion-fourier.md)

### Dispersion

A medium is dispersive when $\omega(k)$ is *curved*, so different wavelengths
travel at different speeds, $v_g \neq v_p$, and a packet spreads. Straight
$\omega = vk$ (vacuum, ideal string) means the packet holds its shape forever.
**Normal** dispersion: $n$ rises toward the blue (prisms, rainbows).
**Anomalous:** the trend reverses near absorption bands.

*Introduced:* [4.4](lessons/04-04-wave-packets-dispersion-fourier.md)

## Formulas and rules

### The oscillator: three regimes

Solve $\ddot x + 2\beta\dot x + \omega_0^2 x = 0$ by $x = e^{rt}$; the
characteristic roots are $r = -\beta \pm \sqrt{\beta^2 - \omega_0^2}$, and the
sign under that root is the whole story.

| Regime | Condition | Solution | Behavior |
|---|---|---|---|
| Underdamped | $\beta < \omega_0$ | $A e^{-\beta t}\cos(\omega_1 t + \phi)$, $\ \omega_1 = \sqrt{\omega_0^2-\beta^2}$ | rings inside a shrinking envelope |
| Critically damped | $\beta = \omega_0$ | $(A + Bt)e^{-\beta t}$ | fastest return, no overshoot ($Q = \tfrac12$) |
| Overdamped | $\beta > \omega_0$ | $C_1 e^{r_1 t} + C_2 e^{r_2 t}$, both $r<0$ | crawls home — *slower* than critical |

Useful conversions: $\beta = b/2m$, $\ \omega_0 = \sqrt{k/m}$, critical damping at
$b_c = 2m\omega_0 = 2\sqrt{mk}$, amplitude $\propto e^{-\beta t}$, energy
$\propto e^{-\gamma t} = e^{-2\beta t}$.

*From* [1.1](lessons/01-01-simple-harmonic-motion.md) *and* [1.2](lessons/01-02-damped-oscillations.md)

### Oscillator timing and energy

$$\omega_0 = \sqrt{\frac{k}{m}} \ \text{(spring)}, \qquad \omega_0 = \sqrt{\frac{g}{L}} \ \text{(pendulum, small angle)}, \qquad \omega_0 = \sqrt{\frac{U''(x_0)}{m}} \ \text{(any smooth well)}$$

$$T = \frac{2\pi}{\omega_0}, \qquad f = \frac{1}{T} = \frac{\omega_0}{2\pi}, \qquad v_{\max} = A\omega_0$$

$$E = \tfrac12 kx^2 + \tfrac12 mv^2 = \tfrac12 kA^2 = \text{constant}$$

*From* [1.1](lessons/01-01-simple-harmonic-motion.md)

### Driven oscillator and resonance

Steady state after the transient dies: the mass oscillates at the **drive**
frequency, lagging by $\delta$.

$$x(t) = A(\Omega)\cos(\Omega t - \delta), \qquad A(\Omega) = \frac{F_0/m}{\sqrt{(\omega_0^2-\Omega^2)^2 + 4\beta^2\Omega^2}}, \qquad \tan\delta = \frac{2\beta\Omega}{\omega_0^2 - \Omega^2}$$

| Drive regime | Phase lag $\delta$ | What it looks like |
|---|---|---|
| $\Omega \ll \omega_0$ | $\to 0^\circ$ | mass rides along with the force |
| $\Omega = \omega_0$ | $90^\circ$ | force in phase with **velocity** — power in fastest |
| $\Omega \gg \omega_0$ | $\to 180^\circ$ | inertia wins; mass fights the push |

**Three frequencies, all different, all near each other for light damping:**

$$\omega_0 \ \ (\text{natural}) \;>\; \omega_1 = \sqrt{\omega_0^2-\beta^2} \ \ (\text{free ring}) \;>\; \Omega_r = \sqrt{\omega_0^2-2\beta^2} \ \ (\text{amplitude peak})$$

A peak exists at all only if $\beta < \omega_0/\sqrt2$ — a threshold *below*
critical damping. Peak height $\approx Q\,(F_0/k)$, i.e. $Q$ times the static
deflection; peak width $\Delta\omega \approx 2\beta$.

*From* [1.3](lessons/01-03-driven-oscillations-resonance.md)

### Wave relations — the ones you use constantly

$$\frac{\partial^2 y}{\partial t^2} = v^2\frac{\partial^2 y}{\partial x^2}, \qquad y = f(x-vt) + g(x+vt), \qquad y = A\cos(kx - \omega t + \varphi)$$

$$\boxed{\,v = \lambda f = \frac{\omega}{k}\,}, \qquad k = \frac{2\pi}{\lambda}, \qquad \omega = 2\pi f = \frac{2\pi}{T}$$

Sign of the argument: $kx - \omega t$ travels toward $+x$; $kx + \omega t$ toward
$-x$. In one period a crest advances exactly one wavelength.

*From* [2.1](lessons/02-01-wave-equation-traveling-waves.md)

### Wave speed from the medium

Every one of these is $\sqrt{\text{restoring stiffness}/\text{inertia}}$.

| Medium | Speed | Notes |
|---|---|---|
| stretched string | $v = \sqrt{T/\mu}$ | $T$ tension (N), $\mu$ linear density (kg/m) |
| fluid / gas (sound) | $v = \sqrt{B/\rho}$ | $B$ bulk modulus (Pa); air at room temp $\approx 343$ m/s |
| vacuum (light) | $c = 1/\sqrt{\mu_0\varepsilon_0}$ | $\approx 3.00\times10^8$ m/s |
| transparent medium (light) | $v = c/n$ | $n \ge 1$ the refractive index |

Because of the square root, **quadrupling** the tension only **doubles** the
speed. Average power carried by a sinusoidal string wave:
$\bar P = \tfrac12\mu\omega^2A^2 v$ — quadratic in *both* $\omega$ and $A$.

*From* [2.2](lessons/02-02-waves-on-strings-sound.md) *and* [2.4](lessons/02-04-light-as-em-wave.md)

### Reflection at a boundary

$$r = \frac{Z_1 - Z_2}{Z_1 + Z_2}, \qquad Z = \sqrt{T\mu}$$

| Boundary | $r$ | Reflected pulse |
|---|---|---|
| fixed end ($Z_2 \to \infty$) | $-1$ | **inverted** (a $\pi$ flip) |
| free end ($Z_2 \to 0$) | $+1$ | upright |
| light string → heavy ($Z_1 < Z_2$) | $r < 0$ | inverted, partial (rest transmits) |
| heavy string → light ($Z_1 > Z_2$) | $r > 0$ | upright, partial |

The optical twin: reflecting off a **higher**-index medium flips the phase; off a
lower-index one it doesn't. That is exactly the thin-film flip rule in 4.1.

*From* [2.2](lessons/02-02-waves-on-strings-sound.md)

### Standing waves and normal modes

Nodes sit where the spatial factor vanishes, spaced $\lambda/2$ apart; antinodes
halfway between, amplitude $2A$.

| Boundaries | Allowed wavelengths | Frequencies |
|---|---|---|
| both ends fixed (string) — or a pipe open at both ends | $\lambda_n = \dfrac{2L}{n}$, $n = 1,2,3,\dots$ | $f_n = n\dfrac{v}{2L} = n f_1$ (all harmonics) |
| one end fixed, one free — a pipe closed at one end | $\lambda_n = \dfrac{4L}{n}$, $n = 1,3,5,\dots$ | $f_n = n\dfrac{v}{4L}$ (odd harmonics only) |

The lessons work the fixed–fixed case; the second row is the standard companion
you'll want the moment a problem says "pipe closed at one end." For a string,
$f_1 = \dfrac{1}{2L}\sqrt{\dfrac{T}{\mu}}$ — tighten it and every harmonic rises.

Beats: $f_{\text{beat}} = |f_1 - f_2|$, carrier at the average. A beat gives you
the *magnitude* of the mismatch, never its sign — change the tension a hair and
listen to whether the throb speeds up or slows down.

*From* [2.3](lessons/02-03-superposition-standing-waves-beats.md)

### Light as an EM wave

$$E = cB \ \text{(at every point and instant)}, \qquad I = \tfrac12 c\varepsilon_0 E_0^2, \qquad c = \lambda f$$

Spectrum, increasing frequency: radio → microwave → infrared → **visible
(~400 nm violet to ~700 nm red)** → ultraviolet → X-ray → gamma. Crossing into a
medium: $f$ fixed, $v \to c/n$, $\lambda \to \lambda_0/n$.

*From* [2.4](lessons/02-04-light-as-em-wave.md)

### Geometric optics: Snell, mirrors, lenses

All angles from the **normal**, never from the surface.

$$\theta_i = \theta_r, \qquad n_1\sin\theta_1 = n_2\sin\theta_2, \qquad \sin\theta_c = \frac{n_2}{n_1}\ (n_1>n_2)$$

$$\boxed{\;\frac{1}{d_o} + \frac{1}{d_i} = \frac{1}{f}\;} \qquad m = \frac{h_i}{h_o} = -\frac{d_i}{d_o}$$

The **same** equation serves mirrors and thin lenses; only the sign conventions
differ. Supporting relations:

$$f = \frac{R}{2}\ (\text{mirror}), \qquad \frac{1}{f} = (n-1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)\ (\text{lensmaker}), \qquad M = -\frac{f_o}{f_e}\ (\text{telescope})$$

**Two-lens chaining:** solve lens 1, then feed its image in as lens 2's object at
$d_{o2} = (\text{separation}) - d_{i1}$ (negative is legal — a virtual object),
and multiply: $m = m_1 m_2$.

*From* [3.1](lessons/03-01-reflection-refraction-snell.md), [3.2](lessons/03-02-mirrors-image-formation.md), [3.3](lessons/03-03-lenses-optical-instruments.md)

### Sign conventions — the table to check every time

| Quantity | Mirror | Lens |
|---|---|---|
| $f > 0$ | concave (converging) | convex (converging) |
| $f < 0$ | convex (diverging), $f = -R/2$ | concave (diverging) |
| $d_o > 0$ | real object in front | real object on the incoming side |
| $d_i > 0$ | image **in front** (same side as object) → **real, inverted** | image on the **far** side → **real, inverted** |
| $d_i < 0$ | image behind the mirror → **virtual, upright** | image on the object's side → **virtual, upright** |
| $m > 0$ | upright (and virtual) | upright (and virtual) |
| $m < 0$ | inverted (and real) | inverted (and real) |

$|m| > 1$ enlarged, $|m| < 1$ reduced. Note the trap: "$d_i > 0$" means *in
front* for a mirror and *behind* for a lens — because one reflects and the other
transmits.

**Concave mirror, object marched inward** (with $C$ at $2f$):

| Object at… | Image | Type |
|---|---|---|
| beyond $C$ | between $C$ and $F$ | real, inverted, reduced |
| at $C$ | at $C$ | real, inverted, same size |
| between $C$ and $F$ | beyond $C$ | real, inverted, enlarged |
| at $F$ | at infinity | rays exit parallel — no image |
| inside $F$ | behind the mirror | virtual, upright, enlarged (shaving mirror) |

A **convex** mirror has only one case: virtual, upright, reduced, always.

**Principal rays.** Mirror: (1) parallel in → through $F$; (2) through $F$ →
parallel out; (3) through $C$ → straight back on itself. Lens: (1) parallel in →
through the far focus $F'$; (2) through the lens center → undeviated;
(3) through the near focus $F$ → parallel out.

*From* [3.2](lessons/03-02-mirrors-image-formation.md) *and* [3.3](lessons/03-03-lenses-optical-instruments.md)

### Interference and diffraction — maxima vs. minima

The one table worth opening the drawer for. In every row, $\lambda$ is the
**vacuum** wavelength and $m$ is an integer.

| Setup | Maxima (bright) | Minima (dark) |
|---|---|---|
| Double slit, separation $d$ | $d\sin\theta = m\lambda$, $\ m = 0,\pm1,\pm2,\dots$ | $d\sin\theta = (m+\tfrac12)\lambda$ |
| Grating, $N$ slits spaced $d$ | $d\sin\theta = m\lambda$ (same condition, far sharper peaks) | everything between the principal maxima |
| Single slit, **width** $a$ | $m = 0$ is the broad central max | $a\sin\theta = m\lambda$, $\ m = \pm1,\pm2,\dots$ (**never** $m=0$) |
| Thin film, **one** low→high reflection (soap/oil in air) | $2nt = (m+\tfrac12)\lambda$ | $2nt = m\lambda$ |
| Thin film, **zero or two** flips (AR coating: air→coating→glass) | $2nt = m\lambda$ | $2nt = (m+\tfrac12)\lambda$ |

Supporting results:

$$\delta = d\sin\theta, \qquad \phi = \frac{2\pi}{\lambda}\delta, \qquad I = I_0\cos^2\!\left(\frac{\pi d\sin\theta}{\lambda}\right)$$

$$y_m \approx \frac{m\lambda L}{d}, \qquad \Delta y = \frac{\lambda L}{d} \quad (\text{small angles: } \sin\theta \approx \tan\theta \approx y/L)$$

$$\theta_{\text{half}} \approx \frac{\lambda}{a} \ (\text{single-slit central lobe, which is } \textbf{twice} \text{ as wide as a side lobe}), \qquad \theta_{\min} \approx 1.22\frac{\lambda}{D}$$

Grating count: orders exist only while $\sin\theta \le 1$, i.e. $m \le d/\lambda$;
of those, orders that are multiples of $d/a$ are **missing**. Thinnest film for
either extreme condition at $m=0$: $t = \lambda/(4n)$, a quarter wave measured
inside the film.

*From* [4.1](lessons/04-01-interference-double-slit-thin-films.md) *and* [4.2](lessons/04-02-diffraction-gratings-resolution.md)

### Polarization: Malus and Brewster

$$\boxed{\,I = I_0\cos^2\theta\,} \ \text{(Malus, polarized input)}, \qquad I = \tfrac12 I_0 \ \text{(unpolarized input, first polarizer only)}, \qquad \tan\theta_B = \frac{n_2}{n_1}$$

$\theta$ is measured between the incoming polarization and the analyzer axis — so
for a stack, use the angle between *consecutive* axes. Quick values:
$\theta = 0^\circ$ passes everything, $45^\circ$ passes half, $90^\circ$ passes
nothing. Crossed polarizers with a third at $\theta$ between them transmit
$I_0\sin^2(2\theta)/8$, maximal at $\theta = 45^\circ$.

Ways to polarize: selective absorption (Polaroid), scattering (blue sky at 90
degrees), reflection (glare off water is polarized **horizontally**, so
sunglasses run their axis vertical), birefringence (calcite, wave plates).

*From* [4.3](lessons/04-03-polarization.md)

### Wave packets, bandwidth and dispersion

$$f(x) = \int_{-\infty}^{\infty} A(k)\,e^{ikx}\,dk, \qquad \boxed{\;\Delta x\,\Delta k \gtrsim 1\;}, \qquad \Delta t\,\Delta\omega \gtrsim 1$$

$$v_p = \frac{\omega}{k}, \qquad v_g = \frac{d\omega}{dk}, \qquad \omega = vk \ \Rightarrow\ v_g = v_p \ (\text{no spreading})$$

Worked dispersion relations to calibrate against: deep-water waves
$\omega = \sqrt{gk}$ give $v_g = \tfrac12 v_p$; $\omega = \alpha k^2$ gives
$v_g = 2v_p$. Square wave from odd harmonics only:

$$f_{\text{sq}}(x) = \frac{4}{\pi}\sum_{n\ \text{odd}} \frac{1}{n}\sin nk_0x$$

*From* [4.4](lessons/04-04-wave-packets-dispersion-fourier.md)

### Trig identities these lessons lean on

Stated nowhere in the course, used repeatedly — the standing-wave and beat
derivations are entirely this first line.

$$\cos P + \cos Q = 2\cos\!\left(\frac{P+Q}{2}\right)\cos\!\left(\frac{P-Q}{2}\right), \qquad \sin\theta\cos\theta = \tfrac12\sin2\theta$$

$$\langle \cos^2 \rangle = \tfrac12 \ \text{(average over a full turn — the source of both } I=\tfrac12c\varepsilon_0E_0^2 \text{ and the unpolarized } \tfrac12), \qquad \sin\theta \approx \theta \ (\theta \ll 1)$$

*Used in* [2.3](lessons/02-03-superposition-standing-waves-beats.md), [2.4](lessons/02-04-light-as-em-wave.md), [4.3](lessons/04-03-polarization.md)

### Constants and typical values

| Quantity | Value |
|---|---|
| $c$ | $3.00\times10^8$ m/s |
| $\varepsilon_0$ | $8.85\times10^{-12}$ F/m |
| $\mu_0$ | $4\pi\times10^{-7}$ T·m/A |
| $g$ | $9.8$ m/s² |
| speed of sound in air (room temp) | $\approx 343$ m/s |
| visible wavelengths | $\approx 400$ nm (violet) to $700$ nm (red) |
| $n$: air / water / glass / diamond | $1.00$ / $1.33$ / $\approx 1.5$ / $2.42$ |
| $\theta_c$: water→air / glass→air / diamond→air | $48.8^\circ$ / $41.8^\circ$ / $\approx 24^\circ$ |
| eye's near point (for magnifier gain $25\,\mathrm{cm}/f$) | $25$ cm |

## Assumed, not taught here

This is a Tier 0 refresher: it *uses* the following without deriving them. Every
row points at the course where the derivation actually lives.

| Fact | Where it's taught |
|---|---|
| Newton's second law $F = ma$ (used on the mass, then on a string element) | [mechanics-refresher 1.2](../mechanics-refresher/lessons/01-02-newtons-laws.md) |
| Hooke's law and the mechanics of SHM | [mechanics-refresher 3.1](../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md) |
| Kinetic/potential energy and conservation of energy | [mechanics-refresher 2.2](../mechanics-refresher/lessons/02-02-potential-energy-conservation.md) |
| Second-order constant-coefficient ODEs: guess $e^{rt}$, characteristic roots, the real/repeated/complex trichotomy, Euler's formula | [ode-refresher 2.1](../ode-refresher/lessons/02-01-second-order-constant-coefficient.md) |
| Damped-oscillator ODE solutions in their pure-math form | [ode-refresher 2.2](../ode-refresher/lessons/02-02-oscillations-damping.md) |
| Forced ODEs: transient (homogeneous) + steady state (particular) | [ode-refresher 2.3](../ode-refresher/lessons/02-03-forcing-resonance.md) |
| Chain rule (the whole proof that $f(x-vt)$ solves the wave equation) | [calc-refresher 1.2](../calc-refresher/lessons/01-02-differentiation-rules.md) |
| Partial derivatives — the $\partial$ in the wave equation | [calc-refresher 4.1](../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md) |
| Taylor expansion: small-angle $\sin\theta\approx\theta$, and "every well is a parabola" | [calc-refresher 1.3](../calc-refresher/lessons/01-03-linearization-and-taylor.md) |
| Setting a derivative to zero to maximize (locating $\Omega_r$, and Fermat's least-time crossing point) | [calc-refresher 1.4](../calc-refresher/lessons/01-04-optimization.md) |
| Curl $\nabla\times$ | [calc-refresher 5.1](../calc-refresher/lessons/05-01-vector-fields-div-curl.md) |
| Maxwell's equations themselves | [em-refresher 4.1](../em-refresher/lessons/04-01-maxwells-equations.md) |
| The derivation that $\mathbf E$ and $\mathbf B$ obey the wave equation with $c = 1/\sqrt{\mu_0\varepsilon_0}$ | [em-refresher 4.2](../em-refresher/lessons/04-02-electromagnetic-waves.md) |
| Poynting vector and $I = \tfrac12 c\varepsilon_0 E_0^2$ | [em-refresher 4.3](../em-refresher/lessons/04-03-energy-poynting.md) |
| Radians, and why $\omega$ and $f$ differ by $2\pi$ | [precalculus 3.1](../precalculus/lessons/03-01-trig-functions-for-calculus.md), [trigonometry 2.1](../trigonometry/lessons/02-01-radian-measure.md) |
| Angle-sum formulas — the sum-to-product identity above is two of them added; no lesson in the library states sum-to-product directly | [trigonometry 3.2](../trigonometry/lessons/03-02-fundamental-identities.md) |
| Fourier series (the harmonics $f_n = nf_1$ *are* its terms) and the Fourier transform | [fourier-analysis 1.1](../fourier-analysis/lessons/01-01-periodic-functions-fourier-coefficients.md), [2.1](../fourier-analysis/lessons/02-01-series-to-fourier-transform.md) |
| The bandwidth/uncertainty theorem $\Delta x\,\Delta k \gtrsim 1$, proved properly | [fourier-analysis 2.4](../fourier-analysis/lessons/02-04-plancherel-uncertainty.md) |
| d'Alembert's solution as PDE theory, and the wave equation as the model hyperbolic PDE | [pdes 2.2](../pdes/lessons/02-02-wave-equation-dalembert.md) |

## Pitfalls

### Oscillators

- Amplitude is nowhere in the period — a bigger pull does **not** slow the swing (until a pendulum's angle grows and $\sin\theta\approx\theta$ fails). *([1.1](lessons/01-01-simple-harmonic-motion.md))*
- $\omega_0$ and $f$ differ by $2\pi$; plug $\omega_0$, not $f$, into $\cos(\omega_0 t + \phi)$. *([1.1](lessons/01-01-simple-harmonic-motion.md), [2.1](lessons/02-01-wave-equation-traveling-waves.md))*
- Drop the minus in $F = -kx$ and you get runaway exponentials, not oscillation — the restoring sign is the whole game. *([1.1](lessons/01-01-simple-harmonic-motion.md))*
- Overdamped is **not** fastest: friction fights the return trip too, so critical damping settles soonest. *([1.2](lessons/01-02-damped-oscillations.md))*
- A damped oscillator rings at $\omega_1 = \sqrt{\omega_0^2-\beta^2}$, and a driven one peaks at $\Omega_r = \sqrt{\omega_0^2-2\beta^2}$ — three distinct frequencies, and if $\beta > \omega_0/\sqrt2$ the peak is gone entirely. *([1.2](lessons/01-02-damped-oscillations.md), [1.3](lessons/01-03-driven-oscillations-resonance.md))*
- Amplitude decays at $\beta$, energy at $\gamma = 2\beta$ — check which "decay rate" is meant. *([1.2](lessons/01-02-damped-oscillations.md))*
- In steady state the mass oscillates at the **drive** frequency $\Omega$; $\omega_0$ only sets how *hard* it responds and dies with the transient. *([1.3](lessons/01-03-driven-oscillations-resonance.md))*
- At resonance the displacement lags the force by $90^\circ$, not $0^\circ$ — assume in-step and your power balance is wrong. *([1.3](lessons/01-03-driven-oscillations-resonance.md))*

### Waves and media

- The medium doesn't travel — a cork bobs while the ripple passes. Shape and energy move; matter stays home. *([2.1](lessons/02-01-wave-equation-traveling-waves.md))*
- $k$ lives with space (rad/m, partners $\lambda$), $\omega$ with time (rad/s, partners $f$ and $T$). Don't swap them. *([2.1](lessons/02-01-wave-equation-traveling-waves.md))*
- $kx - \omega t$ moves **right**, $kx + \omega t$ moves **left**; trace a crest if you doubt it. *([2.1](lessons/02-01-wave-equation-traveling-waves.md))*
- Speed depends on the *ratio* $T/\mu$, under a square root: quadruple the tension to double the speed. *([2.2](lessons/02-02-waves-on-strings-sound.md))*
- Not every reflection inverts — only off something *stiffer* (fixed end, light→heavy, low→high index). Free ends and heavy→light reflect upright. *([2.2](lessons/02-02-waves-on-strings-sound.md), [4.1](lessons/04-01-interference-double-slit-thin-films.md))*

### Superposition

- A standing wave transports **no net energy** — it has no $(x-vt)$ structure, it just breathes in place. *([2.3](lessons/02-03-superposition-standing-waves-beats.md))*
- $f_{\text{beat}} = |f_1-f_2|$, not $\Delta f/2$: loudness peaks on *both* humps of each envelope cycle. This factor of two is the classic beats error. *([2.3](lessons/02-03-superposition-standing-waves-beats.md))*
- Only $\lambda_n = 2L/n$ fits a fixed–fixed string — and changing an end condition changes the whole allowed set. *([2.3](lessons/02-03-superposition-standing-waves-beats.md))*

### Light as a wave

- $B_0 \ll E_0$ numerically is a units artifact of $E = cB$; the energy splits evenly between the fields. *([2.4](lessons/02-04-light-as-em-wave.md))*
- $\mathbf E$ and $\mathbf B$ are in phase in time (both peak together); the $90^\circ$ between them is *spatial*. *([2.4](lessons/02-04-light-as-em-wave.md))*
- Entering glass does **not** change the frequency or the color — $f$ is fixed by the source; $v$ and $\lambda$ shrink by $n$. *([2.4](lessons/02-04-light-as-em-wave.md), [3.1](lessons/03-01-reflection-refraction-snell.md))*

### Rays and boundaries

- Every optics angle is measured from the **normal**, never from the surface — a grazing ray has $\theta \to 90^\circ$. *([3.1](lessons/03-01-reflection-refraction-snell.md))*
- Total internal reflection happens **only** dense → rare; going into a denser medium there is no critical angle to reach. *([3.1](lessons/03-01-reflection-refraction-snell.md))*

### Sign conventions

- A negative $d_i$ isn't an error — it's the algebra telling you the image is virtual and upright. Read it, don't discard it. *([3.2](lessons/03-02-mirrors-image-formation.md))*
- A convex mirror (and a diverging lens) has $f < 0$. Forget the minus and you'll predict a real image that cannot exist. *([3.2](lessons/03-02-mirrors-image-formation.md), [3.3](lessons/03-03-lenses-optical-instruments.md))*
- $m < 0$ means inverted (and real here); $m > 0$ means upright (and virtual). The *magnitude* is size — report both, e.g. "inverted, half-size" is $m = -0.5$. *([3.2](lessons/03-02-mirrors-image-formation.md))*
- "$d_i > 0$" means **in front** for a mirror but **on the far side** for a lens. Same equation, opposite geometry. *([3.3](lessons/03-03-lenses-optical-instruments.md))*
- Lens 2's object distance is measured from lens 2 to *lens 1's image*, $d_{o2} = \text{separation} - d_{i1}$ — not to the original object. A negative result is a legal virtual object. *([3.3](lessons/03-03-lenses-optical-instruments.md))*
- Two converging lenses don't always magnify more: multiply the *signed* magnifications; two inversions cancel to upright. *([3.3](lessons/03-03-lenses-optical-instruments.md))*

### Interference and diffraction

- Only **coherent** beams give standing fringes; two flashlights interfere every instant but reshuffle to gray. *([4.1](lessons/04-01-interference-double-slit-thin-films.md))*
- Count the low→high reflections before writing a thin-film condition: **one** flip reverses the plain bright/dark rules, **zero or two** restore them. Miscounting flips the answer. *([4.1](lessons/04-01-interference-double-slit-thin-films.md))*
- Use the **vacuum** $\lambda$ in film formulas — the index is already inside the optical path $2nt$. *([4.1](lessons/04-01-interference-double-slit-thin-films.md))*
- $m = 0$ is a bright *maximum* for a double slit and a grating, but for single-slit **minima** the counting starts at $m = \pm1$. *([4.2](lessons/04-02-diffraction-gratings-resolution.md))*
- A wider slit gives a **narrower** pattern, $\theta_{\text{half}} = \lambda/a$ — confinement causes spreading. *([4.2](lessons/04-02-diffraction-gratings-resolution.md))*
- The Rayleigh factor is $1.22$ for a *circular* aperture (1 for a slit); use it for anything round. *([4.2](lessons/04-02-diffraction-gratings-resolution.md))*
- Before reporting an order, check whether it's a multiple of $d/a$ — the single-slit envelope can zero it out. *([4.2](lessons/04-02-diffraction-gratings-resolution.md))*

### Polarizers and analyzers

- The factor $\tfrac12$ applies **once**, to unpolarized light at the first polarizer. After that use $I_0\cos^2\theta$ with the real angle — never re-apply the half. *([4.3](lessons/04-03-polarization.md))*
- Crossed polarizers *can* transmit the moment something between rotates the polarization (a third sheet, sugar solution, stressed plastic) — that leak runs every LCD. *([4.3](lessons/04-03-polarization.md))*
- Malus's $\theta$ is between the incoming polarization and the analyzer axis, not from lab vertical; in a stack, use consecutive pairs. *([4.3](lessons/04-03-polarization.md))*

### Packets and dispersion

- $v_g$ is a **derivative** $d\omega/dk$, not an average of crest speeds — deep water's factor $\tfrac12$ comes straight from differentiating $\sqrt{k}$. *([4.4](lessons/04-04-wave-packets-dispersion-fourier.md))*
- Narrower is not purer: small $\Delta x$ forces large $\Delta k$. A pure tone is infinitely long; a sharp click contains everything. *([4.4](lessons/04-04-wave-packets-dispersion-fourier.md))*
- Not every pulse spreads — only in a dispersive medium. Straight $\omega = vk$ is exactly why d'Alembert's pulse glides rigidly forever. *([4.4](lessons/04-04-wave-packets-dispersion-fourier.md))*
