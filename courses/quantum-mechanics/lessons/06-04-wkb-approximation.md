# Quantum Mechanics · Lesson 6.4: The WKB approximation

> ⏱ ~15 min · Module 6: Approximation methods · Builds on: [6.3 The variational principle](#/lesson/quantum-mechanics/06-03-variational-principle.md), [2.5 Scattering, barriers, and tunneling](#/lesson/quantum-mechanics/02-05-scattering-barriers-tunneling.md), [3.1 The harmonic oscillator (analytic)](#/lesson/quantum-mechanics/03-01-harmonic-oscillator-analytic.md) · Unlocks: 6.5 Time-dependent perturbation theory

## Why this matters

Perturbation theory needs a small parameter; the variational method needs a lucky guess. WKB needs neither — it works whenever the potential is **smooth on the scale of a wavelength**, which covers most real potentials that aren't a textbook square well. From one idea it delivers two of the most-used results in physics: a quantization rule that reproduces bound-state spectra (exactly, for the harmonic oscillator), and a tunneling formula that gives the lifetime of a radioactive nucleus. Alpha decay spanning 24 orders of magnitude in half-life, the current in a scanning tunneling microscope, electron field emission from a cold cathode — all are one WKB exponential. This is the bridge from quantum mechanics back to the classical world, and the tool that made nuclear physics quantitative.

## The idea

Think about a wave whose wavelength changes gently from place to place — light through an atmosphere of slowly varying density, or a water wave rolling onto a gradually shelving beach. Locally it still looks like a plane wave; you just have to let its wavelength and amplitude drift as the medium changes. That is the whole of WKB: treat $\psi$ as a plane wave $e^{ipx/\hbar}$ but promote the momentum $p$ to a slowly varying local momentum $p(x)=\sqrt{2m(E-V(x))}$, the momentum a *classical* particle of energy $E$ would have at $x$.

Two consequences fall out immediately, before any algebra.

**Where the particle is slow, it is likely to be found.** A classical particle lingers near the turning points where it nearly stops and races through the bottom of a well. The quantum probability $|\psi|^2$ copies this: the WKB amplitude goes as $1/\sqrt{p(x)}$, so $|\psi|^2\propto 1/p\propto 1/v$ — probability piles up exactly where the particle dawdles. Quantum mechanics reproduces the classical dwell-time distribution.

**Where $E<V$, momentum turns imaginary and the wave stops oscillating.** Set $p=\sqrt{2m(E-V)}$ in a region where $V>E$ and you get $p=i\kappa$ with $\kappa=\sqrt{2m(V-E)}$. The "wave" $e^{ipx/\hbar}$ becomes $e^{-\kappa x/\hbar}$ — a decaying exponential. That is the mathematics of tunneling: the amplitude bleeds through a forbidden region, shrinking but not vanishing, and the surviving fraction is what makes it out the far side.

The approximation is good precisely when the wavelength $\lambda=2\pi\hbar/p$ changes little over its own length, i.e. the potential is nearly constant across one de Broglie wavelength. Equivalently, it is the small-$\hbar$ (short-wavelength, "semiclassical") limit — quantum mechanics dissolving into classical mechanics.

## The formal version

**The ansatz.** Any nonzero $\psi$ can be written $\psi(x)=e^{iS(x)/\hbar}$ for some complex function $S$. Substitute into the time-independent Schrödinger equation $-\frac{\hbar^2}{2m}\psi''+V\psi=E\psi$. Using $\psi''=\frac{i}{\hbar}\big(S''+\frac{i}{\hbar}(S')^2\big)\psi$, it becomes exactly

$$(S')^2 - i\hbar\,S'' = 2m(E-V).$$

*In words: one exact nonlinear equation for the phase $S$ — no approximation yet.*

**Expand in $\hbar$.** Write $S=S_0+\hbar S_1+\dots$ and collect powers. The leading (classical) order drops the $i\hbar S''$ term:

$$(S_0')^2 = 2m(E-V)\;\Rightarrow\; S_0'=\pm p(x),\qquad p(x)\equiv\sqrt{2m\big(E-V(x)\big)}.$$

The next order fixes the amplitude: $2S_0'S_1'=iS_0''$, giving $S_1'=\frac{i}{2}\frac{p'}{p}$, so $e^{i\hbar S_1/\hbar}=e^{iS_1}=p^{-1/2}$. Assembling:

$$\boxed{\;\psi(x)\approx \frac{1}{\sqrt{p(x)}}\,\exp\!\Big(\pm\frac{i}{\hbar}\!\int p(x)\,dx\Big)\;}\qquad(\text{allowed region},\ E>V).$$

*In words: a locally-plane wave with slowly drifting wavelength $2\pi\hbar/p$ and amplitude $1/\sqrt{p}$.* The condition for the dropped term to be small is $\hbar|p'|\ll p^2$, i.e. $\big|\frac{d\lambda}{dx}\big|\ll 1$ — the wavelength varies slowly.

**Forbidden region.** Where $E<V$, replace $p\to i\kappa$ with $\kappa(x)=\sqrt{2m\big(V(x)-E\big)}$:

$$\psi(x)\approx \frac{1}{\sqrt{\kappa(x)}}\,\exp\!\Big(\pm\frac{1}{\hbar}\!\int \kappa(x)\,dx\Big).$$

*In words: same envelope, but the oscillation becomes exponential growth or decay — the tunneling wave.*

**Connection formulas (stated, not derived).** WKB blows up at a turning point $x=a$ where $p\to 0$ (the $1/\sqrt p$ envelope diverges). There the potential is locally linear, the Schrödinger equation is locally the Airy equation, and its known solution stitches the oscillatory and exponential branches together. The upshot, for a turning point with the allowed region on the left:

$$\frac{2}{\sqrt{p}}\cos\!\Big(\tfrac{1}{\hbar}\!\int_x^a p\,dx-\tfrac{\pi}{4}\Big)\ \longleftrightarrow\ \frac{1}{\sqrt{\kappa}}\exp\!\Big(-\tfrac{1}{\hbar}\!\int_a^x\kappa\,dx\Big).$$

The load-bearing detail is the **$\pi/4$ phase loss** at each soft turning point — that is what puts the $\tfrac12$ into the quantization rule below.

**Bohr–Sommerfeld quantization.** For a bound state trapped between two turning points $a,b$, demanding the cosine match up at *both* ends (each costing $\pi/4$) forces the enclosed phase to be a half-integer multiple of $\pi$:

$$\boxed{\ \int_a^b p(x)\,dx=\Big(n+\tfrac12\Big)\pi\hbar,\qquad n=0,1,2,\dots\ }$$

Equivalently $\oint p\,dx=2\pi\hbar\big(n+\tfrac12\big)$ around a full classical orbit. *In words: fit a half-integer-plus-quarter number of wavelengths between the walls; the allowed energies are the ones that fit.* This is the old Bohr–Sommerfeld rule reborn with the correct $\tfrac12$. It is **exact for the harmonic oscillator** (Problem 1) and excellent for high $n$ everywhere, since large $n$ means short wavelength means deep semiclassical regime.

**Tunneling through a barrier.** For a particle of energy $E$ hitting a barrier $V(x)>E$ between turning points $a,b$, the amplitude decays by $\exp\!\big(-\tfrac1\hbar\int_a^b\kappa\,dx\big)$, so the transmission probability (amplitude squared) is

$$\boxed{\ T\approx \exp\!\Big(-\frac{2}{\hbar}\int_a^b \sqrt{2m\big(V(x)-E\big)}\,dx\Big).\ }$$

*In words: the barrier's "opacity" is the total area of $\kappa(x)$ under the forbidden hump.* For a rectangular barrier of height $V_0$ and width $L$ this integral is just $\kappa L$ and $T\approx e^{-2\kappa L}$ — recovering the thick-barrier result from [2.5](#/lesson/quantum-mechanics/02-05-scattering-barriers-tunneling.md). WKB generalizes it to any smooth barrier shape.

## Picture

![A smooth potential well with a horizontal energy level; between the two turning points the WKB wavefunction oscillates with a 1/√p envelope, and outside them it decays exponentially into the classically forbidden regions.](assets/06-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — quantize a well).** Take a particle in the linear-in-energy well and read off the WKB integral geometry. For any well, the quantization integral $\int_a^b p\,dx$ is the **area enclosed in phase space** by the classical orbit of energy $E$; Bohr–Sommerfeld says that area equals $(n+\tfrac12)\cdot 2\pi\hbar\cdot\tfrac12=(n+\tfrac12)\pi\hbar$ per half-orbit. For the harmonic oscillator the orbit is an ellipse in the $(x,p)$ plane with semi-axes $\sqrt{2mE}$ (in $p$) and $\sqrt{2E/m\omega^2}$ (in $x$), so its full area is $\pi\cdot\sqrt{2mE}\cdot\sqrt{2E/m\omega^2}=2\pi E/\omega$. Setting $\oint p\,dx=2\pi E/\omega=2\pi\hbar(n+\tfrac12)$ gives $E_n=\hbar\omega(n+\tfrac12)$ on sight — the exact spectrum, no differential equation. (Problem 1 does this the integral way.)

**Example 2 (why you'd care — the Gamow factor for alpha decay).** An alpha particle of energy $E$ inside a nucleus sees the Coulomb barrier $V(r)=\frac{Z_1Z_2e^2}{4\pi\epsilon_0 r}$ once it clears the nuclear surface at $r=R$. It tunnels out between $r=R$ and the outer turning point $b=\frac{Z_1Z_2e^2}{4\pi\epsilon_0 E}$ where $V=E$. The WKB exponent

$$\gamma=\frac{1}{\hbar}\int_R^b\sqrt{2m\Big(\tfrac{Z_1Z_2e^2}{4\pi\epsilon_0 r}-E\Big)}\,dr$$

evaluates (for $R\ll b$) to $\gamma\approx \frac{\pi Z_1Z_2 e^2}{4\pi\epsilon_0\hbar}\sqrt{\frac{m}{2E}}$ — the **Gamow factor**. The decay rate is $\lambda\approx f\,e^{-2\gamma}$, where $f\sim 10^{21}\,\mathrm{s^{-1}}$ is the rate the alpha "rattles" against the barrier. Because $\gamma\propto 1/\sqrt E$ sits in an exponent, a factor-of-2 change in alpha energy swings the half-life by *many* orders of magnitude — this is the **Geiger–Nuttall law**, $\ln\lambda = A - B/\sqrt E$, which WKB explains in one line. Field emission (electrons pulled out of a metal by a strong field, Problem 2) is the same calculation with a triangular barrier.

## Watch out

- You might think WKB is valid "when $\hbar$ is small." $\hbar$ is a fixed constant — what must be small is $\hbar$ *compared to the classical action*, equivalently the wavelength compared to the scale over which $V$ varies. WKB fails wherever $V$ changes fast: sharp steps, deltas, and — crucially — **at every turning point**, where $p\to0$ and $\lambda\to\infty$. That failure is exactly why connection formulas exist.
- You might think the quantization rule is $\int p\,dx=n\pi\hbar$. The $\tfrac12$ is not optional: it is the sum of two $\pi/4$ phase losses, one per soft turning point. A problem with *one* soft turning point and one hard wall (a bouncing ball) gets $(n+\tfrac34)$; a problem with two hard walls (infinite square well) gets $(n+1)$, i.e. integer — check that WKB then reproduces the exact box spectrum.
- You might read $T\approx e^{-2\gamma}$ as the full transmission coefficient. It is only the exponential (dominant) factor; a prefactor of order unity is dropped. For thin or low barriers where $\gamma\lesssim1$ the estimate is crude — WKB tunneling is a tool for *thick* barriers, where the exponent dwarfs everything else.
- Don't forget the amplitude carries physics too. The $1/\sqrt{p}$ is not cosmetic bookkeeping — it *is* the statement that $|\psi|^2\propto1/v$, the quantum echo of classical dwell time. Drop it and normalization and probability densities come out wrong.

## One-liner

> Let the wavelength drift with the local momentum $p=\sqrt{2m(E-V)}$: oscillate with amplitude $1/\sqrt p$ where $E>V$, decay as $e^{-\int\kappa\,dx/\hbar}$ where $E<V$, and fit $(n+\tfrac12)$ half-wavelengths between the turning points.

## Problems

**P1 (🟢)** Apply Bohr–Sommerfeld $\displaystyle\int_a^b p\,dx=(n+\tfrac12)\pi\hbar$ to the harmonic oscillator $V(x)=\tfrac12 m\omega^2x^2$ and show it yields $E_n=\hbar\omega(n+\tfrac12)$ **exactly**. (Hint: the turning points are where $E=V$; the integral $\int_{-1}^{1}\sqrt{1-u^2}\,du=\pi/2$.)

**P2 (🟡)** A metal surface holds electrons behind a barrier of height $V_0$ above their energy $E$; a strong applied field $\mathcal F$ tilts the barrier into a triangle, $V(x)=V_0-\mathcal Fx$ for $x>0$ (measuring $V$ from the electron energy so effectively $V_0-E$ at $x=0$, falling linearly to $E$ at $x=L=(V_0-E)/\mathcal F$). Using the WKB tunneling formula, show the exponent is $\tfrac23$ that of a *rectangular* barrier of the same height and width $L$ — i.e. $T\approx e^{-\frac43\kappa L}$ with $\kappa=\sqrt{2m(V_0-E)}/\hbar$. This is the heart of the Fowler–Nordheim field-emission law.

**P3 (🔴, optional)** Apply WKB quantization to the symmetric linear well $V(x)=F|x|$ ($F>0$). Find $E_n$ and show the spectrum scales as $E_n\propto(n+\tfrac12)^{2/3}$. Compare the growth of levels with the harmonic oscillator $(\propto n)$ and the infinite square well $(\propto n^2)$ — and explain the ordering physically.

<details>
<summary>Solutions</summary>

**P1** The turning points satisfy $E=\tfrac12 m\omega^2 x^2$, so $x=\pm a$ with $a=\sqrt{2E/m\omega^2}$. The local momentum is

$$p(x)=\sqrt{2m\big(E-\tfrac12 m\omega^2x^2\big)}=\sqrt{2mE}\,\sqrt{1-\tfrac{x^2}{a^2}}.$$

Integrate between turning points, substituting $u=x/a$ ($dx=a\,du$):

$$\int_{-a}^{a}p\,dx=\sqrt{2mE}\,a\int_{-1}^{1}\sqrt{1-u^2}\,du=\sqrt{2mE}\cdot a\cdot\frac{\pi}{2}.$$

Now $\sqrt{2mE}\cdot a=\sqrt{2mE}\cdot\sqrt{2E/m\omega^2}=\sqrt{4E^2/\omega^2}=2E/\omega$. So

$$\int_{-a}^{a}p\,dx=\frac{2E}{\omega}\cdot\frac{\pi}{2}=\frac{\pi E}{\omega}.$$

Set equal to $(n+\tfrac12)\pi\hbar$:

$$\frac{\pi E}{\omega}=\Big(n+\tfrac12\Big)\pi\hbar\;\Longrightarrow\;\boxed{E_n=\hbar\omega\Big(n+\tfrac12\Big)}.$$

Exact — including the zero-point energy. The oscillator is special because its potential is *quadratic*, which is precisely the case where the Airy-function connection (linearization at the turning point) captures the curvature correctly at every $n$. For any other potential WKB is only asymptotically exact as $n\to\infty$.

**P2** Forbidden region runs from $x=0$ (where $V-E=V_0-E$) to $x=L$ (where $V-E=0$). The integrand is $\sqrt{2m(V-E)}=\sqrt{2m(V_0-E-\mathcal Fx)}$. Let $w=(V_0-E)-\mathcal Fx$, $dw=-\mathcal F\,dx$; as $x:0\to L$, $w:(V_0-E)\to0$:

$$\int_0^L\sqrt{2m(V_0-E-\mathcal Fx)}\,dx=\frac{\sqrt{2m}}{\mathcal F}\int_0^{V_0-E}\sqrt{w}\,dw=\frac{\sqrt{2m}}{\mathcal F}\cdot\frac{2}{3}(V_0-E)^{3/2}.$$

The exponent is $\gamma=\frac1\hbar\int\kappa\,dx=\frac{2\sqrt{2m}}{3\hbar\mathcal F}(V_0-E)^{3/2}$. Now use $\mathcal F=(V_0-E)/L$:

$$\gamma=\frac{2\sqrt{2m}}{3\hbar}\cdot\frac{(V_0-E)^{3/2}}{(V_0-E)/L}=\frac{2}{3}\cdot\frac{\sqrt{2m(V_0-E)}}{\hbar}\,L=\frac{2}{3}\,\kappa L.$$

Hence $T\approx e^{-2\gamma}=e^{-\frac{4}{3}\kappa L}$. For a rectangular barrier of the same height and width, $\gamma_{\text{rect}}=\kappa L$ and $T=e^{-2\kappa L}$. The triangle's exponent is $\tfrac23$ as large — it transmits **more**, because on average the barrier is lower (it slopes down). Since $(V_0-E)^{3/2}/\mathcal F$ appears in $\gamma$, a stronger field $\mathcal F$ shrinks the exponent and floods out electrons: the exponential dependence $T\sim e^{-c\,(V_0-E)^{3/2}/\mathcal F}$ is the Fowler–Nordheim law.

**P3** Turning points: $E=F|x|\Rightarrow x=\pm b$, $b=E/F$. By symmetry,

$$\int_{-b}^{b}p\,dx=2\int_0^b\sqrt{2m(E-Fx)}\,dx.$$

Substitute $w=E-Fx$, $dw=-F\,dx$; $x:0\to b$, $w:E\to0$:

$$2\int_0^b\sqrt{2m(E-Fx)}\,dx=\frac{2\sqrt{2m}}{F}\int_0^E\sqrt{w}\,dw=\frac{2\sqrt{2m}}{F}\cdot\frac{2}{3}E^{3/2}=\frac{4\sqrt{2m}}{3F}E^{3/2}.$$

Bohr–Sommerfeld:

$$\frac{4\sqrt{2m}}{3F}E^{3/2}=\Big(n+\tfrac12\Big)\pi\hbar\;\Longrightarrow\;E_n=\left[\frac{3\pi\hbar F}{4\sqrt{2m}}\Big(n+\tfrac12\Big)\right]^{2/3}.$$

Cleaning up the constants, $E_n=\left(\tfrac{3\pi}{4}\right)^{2/3}\left(\dfrac{\hbar^2F^2}{2m}\right)^{1/3}\big(n+\tfrac12\big)^{2/3}$, so $\boxed{E_n\propto(n+\tfrac12)^{2/3}}$.

**Physical ordering.** The exponent tracks how steeply the walls confine: infinite square well $\propto n^2$ (vertical walls, hardest confinement, fastest-rising levels), harmonic oscillator $\propto n$ (walls grow like $x^2$), linear well $\propto n^{2/3}$ (walls grow only like $|x|$, the gentlest — so the levels crowd together most slowly... i.e. spread most slowly). Steeper walls squeeze the wavefunction into a smaller box as energy rises, driving the kinetic energy up faster. A **bouncing ball** ($V=mgz$ for $z>0$, hard floor at $z=0$) is the half-well version: it keeps the $E\propto(n+\tfrac34)^{2/3}$ scaling but with $\tfrac34$ instead of $\tfrac12$, because it has one soft turning point (top) and one hard wall (floor).

</details>

## Flashback

**From Lesson 2.5 (Scattering, barriers, and tunneling):** An electron of energy $E$ meets a *rectangular* barrier that stands $V_0-E=4\ \mathrm{eV}$ above it and is $L=0.30\ \mathrm{nm}$ wide. Compute the decay constant $\kappa$ and estimate the transmission $T\approx e^{-2\kappa L}$. Then state in one sentence how the general WKB tunneling integral reduces to this when $V$ is constant.

<details>
<summary>Solution</summary>

$\kappa=\dfrac{\sqrt{2m(V_0-E)}}{\hbar}$. A handy shortcut for electrons: $\kappa\approx 5.12\,\mathrm{nm^{-1}}\times\sqrt{V_0-E\ \text{in eV}}$ (from $\sqrt{2m\cdot 1\,\mathrm{eV}}/\hbar=5.12\times10^{9}\,\mathrm{m^{-1}}$). With $V_0-E=4\ \mathrm{eV}$:

$$\kappa\approx 5.12\times\sqrt{4}=10.2\ \mathrm{nm^{-1}}=1.02\times10^{10}\ \mathrm{m^{-1}}.$$

Then $2\kappa L=2(10.2\,\mathrm{nm^{-1}})(0.30\,\mathrm{nm})=6.1$, so

$$T\approx e^{-6.1}\approx 2\times10^{-3}.$$

About one electron in 500 tunnels through — a 3-ångström gap already suppresses transmission a thousandfold, which is exactly why STM tunneling current is so exquisitely sensitive to tip height. **Reduction:** when $V$ is constant across the barrier, $\kappa(x)=\kappa$ is constant, so $\frac1\hbar\int_a^b\kappa\,dx=\kappa L$ and the WKB formula $T\approx e^{-\frac2\hbar\int\kappa\,dx}$ collapses to $e^{-2\kappa L}$.

</details>

## Connections

- **Backward:** WKB *is* [2.5](#/lesson/quantum-mechanics/02-05-scattering-barriers-tunneling.md)'s tunneling and [2.4](#/lesson/quantum-mechanics/02-04-finite-square-well.md)'s exponential penetration, generalized from constant $\kappa$ to a position-dependent $\kappa(x)$ integrated over the forbidden region. It also recovers [3.1](#/lesson/quantum-mechanics/03-01-harmonic-oscillator-analytic.md)'s oscillator spectrum exactly — the one bound state you can check to the last decimal.
- **Forward:** the semiclassical amplitude and phase reappear in the path-integral formulation (the stationary-phase / classical-action limit) and underlie instanton methods for tunneling in field theory. The tunneling exponent is the template for every barrier-penetration rate you will meet, from Josephson junctions to chemical reaction rates.
- **Sideways (classical mechanics):** $\oint p\,dx$ is the **action variable** $J=\oint p\,dx$ from analytical mechanics (the adiabatic invariant of action–angle theory). Bohr–Sommerfeld says nature quantizes that classical action in units of $2\pi\hbar$ — the sharpest statement of the old quantum theory, and the reason $\hbar$ has units of action. The $p(x)$ here is literally the classical momentum along a trajectory of energy $E$.
