# Quantum Mechanics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Quantum mechanics is linear algebra on a Hilbert space with a probabilistic
reading: states are unit vectors, observables are Hermitian operators, and the
Born rule turns an overlap into odds. This card holds the postulates as stated,
the exactly-solvable systems with their spectra and degeneracies, the
commutator/ladder toolkits, the angular-momentum addition rules, and every
approximation formula with the condition that makes it legal — plus the
constants and standard integrals the lessons use without stopping to write down.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $h$, $\hbar=h/2\pi$ | Planck's constant and its per-radian version; units of *action* (energy × time) | [1.1](lessons/01-01-why-quantum.md) |
| $\psi(x,t)$, $\Psi$ | wavefunction — one complex amplitude attached to each point of space | [1.2](lessons/01-02-wavefunction-born-rule.md) |
| $\psi^{*}$, $\lvert\psi\rvert^2$ | complex conjugate; probability **density** (per unit length), not a probability | [1.2](lessons/01-02-wavefunction-born-rule.md) |
| $j(x,t)$ | probability current — the flow of probability past a point | [1.2](lessons/01-02-wavefunction-born-rule.md) |
| $\lvert\psi\rangle$, $\langle\psi\rvert$ | ket (the state as an abstract vector) and bra (its dual, the row-vector version) | [1.3](lessons/01-03-hilbert-space-dirac-notation.md) |
| $\langle\phi\vert\psi\rangle$ | inner product — how much of $\phi$ is inside $\psi$; linear in the ket, antilinear in the bra | [1.3](lessons/01-03-hilbert-space-dirac-notation.md) |
| $\lvert n\rangle\langle n\rvert$ | outer product — an **operator** (the projector onto $\lvert n\rangle$), not a number | [1.3](lessons/01-03-hilbert-space-dirac-notation.md) |
| $\delta_{mn}$, $\delta(x-x')$ | Kronecker delta (discrete basis) and Dirac delta (continuous basis) | [1.3](lessons/01-03-hilbert-space-dirac-notation.md) |
| $\hat A$, $\hat A^{\dagger}$ | operator and its adjoint (conjugate transpose); Hermitian means $\hat A=\hat A^{\dagger}$ | [1.4](lessons/01-04-observables-hermitian-operators.md) |
| $\hat x$, $\hat p$ | position (multiply by $x$) and momentum ($-i\hbar\,\partial_x$) operators | [1.4](lessons/01-04-observables-hermitian-operators.md) |
| $c_n=\langle a_n\vert\psi\rangle$ | amplitude for outcome $a_n$; $\lvert c_n\rvert^2$ is the probability | [1.5](lessons/01-05-measurement-expectation-values.md) |
| $\langle\hat A\rangle$, $\sigma_A=\Delta A$ | ensemble mean of $\hat A$, and its standard deviation (the "uncertainty") | [1.5](lessons/01-05-measurement-expectation-values.md) |
| $\hat H$, $E_n$, $\varphi_n$ | Hamiltonian (energy operator), its eigenvalues, its eigenfunctions | [2.1](lessons/02-01-schrodinger-equation.md) |
| $\omega_{mn}=(E_n-E_m)/\hbar$ | Bohr frequency — the beat rate set by an energy **gap**, not by either level | [2.2](lessons/02-02-stationary-states-time-evolution.md) |
| $k=\sqrt{2mE}/\hbar$ | wavenumber in a classically allowed region (oscillatory $\psi$) | [2.3](lessons/02-03-infinite-square-well.md) |
| $\kappa=\sqrt{2m(V-E)}/\hbar$ | decay rate in a forbidden region; $1/\kappa$ is the penetration depth | [2.4](lessons/02-04-finite-square-well.md) |
| $z_0=\tfrac{a}{\hbar}\sqrt{2mV_0}$ | well strength — depth, width and mass bundled into one dimensionless number | [2.4](lessons/02-04-finite-square-well.md) |
| $R$, $T$ | reflection and transmission probabilities, $R+T=1$ | [2.5](lessons/02-05-scattering-barriers-tunneling.md) |
| $\phi(k)$ | momentum-space wavefunction — the Fourier transform of $\psi(x,0)$, with $p=\hbar k$ | [2.6](lessons/02-06-free-particle-wave-packets.md) |
| $v_p$, $v_g$ | phase velocity (a single crest) and group velocity (the lump = the particle) | [2.6](lessons/02-06-free-particle-wave-packets.md) |
| $\xi=\sqrt{m\omega/\hbar}\,x$ | dimensionless oscillator coordinate ($\sqrt{\hbar/m\omega}$ is the well's natural length) | [3.1](lessons/03-01-harmonic-oscillator-analytic.md) |
| $H_n(\xi)$ | Hermite polynomial — supplies the oscillator's $n$ nodes on top of the Gaussian | [3.1](lessons/03-01-harmonic-oscillator-analytic.md) |
| $a$, $a^{\dagger}$, $N=a^{\dagger}a$ | lowering, raising, and number operators; $a,a^{\dagger}$ are **not** observables | [3.2](lessons/03-02-harmonic-oscillator-ladder-operators.md) |
| $[\hat A,\hat B]$ | commutator $\hat A\hat B-\hat B\hat A$ — the exact price of measuring in the wrong order | [3.3](lessons/03-03-commutators-uncertainty.md) |
| CSCO | complete set of commuting observables — the shortest list of labels naming every state once | [3.4](lessons/03-04-compatible-observables.md) |
| $\hat U(t)=e^{-i\hat Ht/\hbar}$, $\hat A_H$ | the unitary time-evolution "clock", and a Heisenberg-picture operator | [3.5](lessons/03-05-heisenberg-picture-ehrenfest.md) |
| $\{f,g\}$ | Poisson bracket — the classical object that becomes $\tfrac{1}{i\hbar}[\hat f,\hat g\,]$ | [3.5](lessons/03-05-heisenberg-picture-ehrenfest.md) |
| $u(r)=rR(r)$, $V_{\text{eff}}$ | the radial function that obeys a 1D equation, in potential + centrifugal barrier | [4.1](lessons/04-01-schrodinger-3d.md) |
| $\hat L^2$, $\hat L_z$, $\hat L_{\pm}$ | total angular momentum squared, its $z$-component, and the raising/lowering pair | [4.2](lessons/04-02-angular-momentum-algebra.md) |
| $\epsilon_{ijk}$ | Levi-Civita symbol: $+1$ cyclic, $-1$ anticyclic, $0$ on a repeat | [4.2](lessons/04-02-angular-momentum-algebra.md) |
| $\ell$, $m$ | angular-momentum labels: length $\sqrt{\ell(\ell+1)}\,\hbar$, $z$-shadow $m\hbar$ | [4.2](lessons/04-02-angular-momentum-algebra.md) |
| $Y_\ell^{m}(\theta,\phi)$, $d\Omega$ | spherical harmonic (standing wave on a sphere) and solid-angle element $\sin\theta\,d\theta\,d\phi$ | [4.3](lessons/04-03-spherical-harmonics-rigid-rotor.md) |
| $I$ | moment of inertia of the rigid rotor (not the identity — that is $\mathbb 1$) | [4.3](lessons/04-03-spherical-harmonics-rigid-rotor.md) |
| $n$, $a$ (Bohr radius) | hydrogen's principal quantum number, and the atom's natural length $0.529$ Å | [4.4](lessons/04-04-hydrogen-atom.md) |
| $R_\infty$ | Rydberg constant — the $1/\lambda$ scale of the hydrogen spectral lines | [4.4](lessons/04-04-hydrogen-atom.md) |
| $\chi$, $\boldsymbol\sigma$ | two-component spinor, and the vector of Pauli matrices ($\hat{\mathbf S}=\tfrac{\hbar}{2}\boldsymbol\sigma$) | [4.5](lessons/04-05-spin-pauli-stern-gerlach.md) |
| $\gamma$, $g$, $\mu_B$ | gyromagnetic ratio, $g$-factor ($\approx 2$ for the electron), Bohr magneton | [4.5](lessons/04-05-spin-pauli-stern-gerlach.md) |
| $\langle j_1m_1\,j_2m_2\vert j\,m\rangle$ | Clebsch–Gordan coefficient — the dictionary between "know each part" and "know the whole" | [4.6](lessons/04-06-addition-angular-momenta.md) |
| $\hat P_{12}$ | exchange operator: swaps two particles; eigenvalues $\pm1$ | [5.1](lessons/05-01-identical-particles.md) |
| $\otimes$ | tensor product — joins two systems, dimensions **multiply** (contrast $\oplus$) | [5.2](lessons/05-02-tensor-products-entanglement.md) |
| $\lvert\Phi^{\pm}\rangle$, $\lvert\Psi^{\pm}\rangle$ | the four Bell states, an orthonormal basis of maximally entangled two-qubit states | [5.2](lessons/05-02-tensor-products-entanglement.md) |
| $E(\hat a,\hat b)$, $S$ | correlation of two spin measurements, and the CHSH combination of four of them | [5.3](lessons/05-03-bell-inequality-nonlocality.md) |
| $\rho$, $\operatorname{Tr}$, $\rho_A$ | density operator, trace, and the reduced density matrix of subsystem $A$ | [5.4](lessons/05-04-density-matrix-mixed-states.md) |
| $\hat H'$, $\lambda$ | the perturbation and its bookkeeping dial (set $\lambda=1$ at the end) | [6.1](lessons/06-01-perturbation-theory-nondegenerate.md) |
| $E_n^{1}$, $E_n^{2}$, $\lvert n^{1}\rangle$ | first- and second-order energy shifts, first-order state correction | [6.1](lessons/06-01-perturbation-theory-nondegenerate.md) |
| $W_{ij}$ | the perturbation restricted to a degenerate subspace — the matrix you diagonalize | [6.2](lessons/06-02-degenerate-perturbation-theory.md) |
| $\alpha$ | the adjustable dial in a variational trial state $\psi_\alpha$ | [6.3](lessons/06-03-variational-principle.md) |
| $p(x)=\sqrt{2m(E-V)}$ | local classical momentum — the WKB wavelength driver | [6.4](lessons/06-04-wkb-approximation.md) |
| $\omega_0$, $\Omega$ | the atom's gap frequency $(E_b-E_a)/\hbar$, and the generalized Rabi frequency | [6.5](lessons/06-05-time-dependent-perturbation.md) |
| $\Gamma$, $\rho(E_f)$ | transition rate (probability per unit time) and density of final states | [6.6](lessons/06-06-fermi-golden-rule-radiation.md) |

**Overloaded letters, read from context.** $a$ is the lowering operator in 3.2, the
half-width of a well or barrier in 2.4–2.5, and the Bohr radius in 4.4. $\rho$ is
the density operator in 5.4 and the density of states in 6.6. $m$ is a mass
everywhere except in $\lvert\ell,m\rangle$, where it is the magnetic quantum number.

## Definitions

### The postulates

The whole framework in seven statements. Everything else in the course is these
being applied.

1. **State.** A system is described by a normalized vector $\lvert\psi\rangle$ in a Hilbert space $\mathcal H$; an overall phase $e^{i\alpha}\lvert\psi\rangle$ is physically invisible. *([1.2](lessons/01-02-wavefunction-born-rule.md), [1.3](lessons/01-03-hilbert-space-dirac-notation.md))*
2. **Observables.** Every measurable quantity is a Hermitian operator $\hat A=\hat A^{\dagger}$ on $\mathcal H$; in the position representation $\hat x\psi=x\psi$ and $\hat p\psi=-i\hbar\,\partial_x\psi$. *([1.4](lessons/01-04-observables-hermitian-operators.md))*
3. **Outcomes.** A measurement of $\hat A$ returns one of its eigenvalues $a_n$ and nothing else. *([1.5](lessons/01-05-measurement-expectation-values.md))*
4. **Born rule.** The probability of outcome $a_n$ is $P(a_n)=\lvert\langle a_n\vert\psi\rangle\rvert^2$; for a degenerate $a_n$ sum over its eigenspace, and for position $dP=\lvert\psi(x)\rvert^2dx$. *([1.2](lessons/01-02-wavefunction-born-rule.md), [1.5](lessons/01-05-measurement-expectation-values.md))*
5. **Collapse.** Immediately after the reading $a_n$, the state becomes $\hat P_n\lvert\psi\rangle/\lVert\hat P_n\lvert\psi\rangle\rVert$, with $\hat P_n$ the projector onto that eigenspace. *([1.5](lessons/01-05-measurement-expectation-values.md))*
6. **Dynamics.** Between measurements the state obeys $i\hbar\,\partial_t\lvert\psi\rangle=\hat H\lvert\psi\rangle$, which is unitary and therefore preserves all probabilities. *([2.1](lessons/02-01-schrodinger-equation.md))*
7. **Symmetrization.** A state of identical particles must be an eigenstate of exchange: symmetric for bosons (integer spin), antisymmetric for fermions (half-integer spin). *([5.1](lessons/05-01-identical-particles.md))*

### Wavefunction

A complex amplitude spread over space; its squared magnitude is a probability
**density**, so probabilities only appear after integrating over a region.

$$P(a\le x\le b)=\int_a^b\lvert\psi(x,t)\rvert^2\,dx,\qquad \int_{-\infty}^{\infty}\lvert\psi\rvert^2\,dx=1$$

*Introduced:* [1.2](lessons/01-02-wavefunction-born-rule.md)

### Born rule

Squared overlap is odds: project the state onto the outcome you are asking about
and square the length. Everything predictive in the course is this one rule
applied in some basis.

$$P(a_n)=\lvert\langle a_n\vert\psi\rangle\rvert^2=\lvert c_n\rvert^2,\qquad dP=\lvert\psi(x,t)\rvert^2\,dx,\qquad \sum_n\lvert c_n\rvert^2=1$$

Probabilities total 1 in *every* orthonormal basis — that is completeness plus
normalization, not a separate axiom.

*Introduced:* [1.2](lessons/01-02-wavefunction-born-rule.md), [1.5](lessons/01-05-measurement-expectation-values.md)

### Square-integrable

The legality test for a state: the total probability must be finite (then it can
be scaled to 1). A bare plane wave fails it and is a basis element, never a state.

*Introduced:* [1.2](lessons/01-02-wavefunction-born-rule.md)

### Probability current

The flow of probability past a point — what makes normalization stay true
forever. Only a *varying phase* carries current, so a real $\psi$ carries none.

$$j=\frac{\hbar}{2mi}\left(\psi^{*}\frac{\partial\psi}{\partial x}-\psi\frac{\partial\psi^{*}}{\partial x}\right)=\frac{\hbar}{m}\lvert\psi\rvert^2\,\theta'(x),\qquad \frac{\partial\lvert\psi\rvert^2}{\partial t}+\frac{\partial j}{\partial x}=0$$

*Introduced:* [1.2](lessons/01-02-wavefunction-born-rule.md)

### Hilbert space

The arena: a complex vector space with an inner product, complete enough that
infinite expansions behave. States are its unit vectors.

*Introduced:* [1.3](lessons/01-03-hilbert-space-dirac-notation.md)

### Completeness relation

The single most-used trick in the subject: a complete orthonormal basis has
projectors that add up to "do nothing," so you may insert it anywhere for free.

$$\sum_n\lvert n\rangle\langle n\rvert=\mathbb 1,\qquad \int\lvert x\rangle\langle x\rvert\,dx=\mathbb 1,\qquad \psi(x)=\langle x\vert\psi\rangle$$

*Introduced:* [1.3](lessons/01-03-hilbert-space-dirac-notation.md)

### Hermitian operator

An operator you may let act to the left or the right with the same result. That
one property buys real eigenvalues **and** an orthonormal eigenbasis — exactly
what a measurement needs.

$$\hat A=\hat A^{\dagger}=(\hat A^{*})^{\mathsf T},\qquad \hat A=\sum_a a\,\lvert a\rangle\langle a\rvert$$

*Introduced:* [1.4](lessons/01-04-observables-hermitian-operators.md)

### Unitary operator

The transformations rather than the observables: they preserve every inner
product, hence every norm and probability. Time evolution is one.

$$\hat U^{\dagger}\hat U=\mathbb 1,\qquad \langle \hat U\phi\vert \hat U\psi\rangle=\langle\phi\vert\psi\rangle$$

*Introduced:* [1.4](lessons/01-04-observables-hermitian-operators.md)

### Expectation value

The long-run average over many identically prepared copies — usually *not* a
possible outcome, and never a prediction for one run.

$$\langle\hat A\rangle=\langle\psi\rvert\hat A\lvert\psi\rangle=\sum_n a_n\lvert c_n\rvert^2,\qquad \sigma_A^2=\langle\hat A^2\rangle-\langle\hat A\rangle^2$$

*Introduced:* [1.5](lessons/01-05-measurement-expectation-values.md)

### Determinate state

A state that gives the same reading every time. It happens exactly when the state
is an eigenstate of that observable ($\sigma_A=0\iff$ eigenstate).

*Introduced:* [1.5](lessons/01-05-measurement-expectation-values.md)

### Hamiltonian

The total-energy **operator**, obtained by canonical quantization of
$H=p^2/2m+V$. It is what generates time evolution.

$$\hat H=-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}+V(x)$$

*Introduced:* [2.1](lessons/02-01-schrodinger-equation.md)

### Stationary state

A single energy eigenstate. Its phase spins forever but every density and
expectation value is frozen — "stationary" describes the observables, not $\psi$.

$$\psi_n(x,t)=\varphi_n(x)\,e^{-iE_nt/\hbar},\qquad \hat H\varphi_n=E_n\varphi_n$$

*Introduced:* [2.2](lessons/02-02-stationary-states-time-evolution.md)

### Bound state

A state trapped by the potential: energy below the escape threshold, wavefunction
normalizable, spectrum discrete. In 1D an attractive well always binds at least
one; in 3D it may bind none.

*Introduced:* [2.4](lessons/02-04-finite-square-well.md)

### Tunneling

Transmission through a region where $E<V$: the wave does not stop at the wall, it
decays as a real exponential and re-emerges, exponentially attenuated.

*Introduced:* [2.5](lessons/02-05-scattering-barriers-tunneling.md)

### Wave packet

A normalizable superposition of plane waves over a band of $k$. The envelope is
the particle; its spread in $x$ and spread in $k$ trade off by Fourier duality.

$$\Psi(x,t)=\frac{1}{\sqrt{2\pi}}\int\phi(k)\,e^{i(kx-\omega(k)t)}\,dk,\qquad \Delta x\,\Delta k\gtrsim\tfrac12$$

*Introduced:* [2.6](lessons/02-06-free-particle-wave-packets.md)

### Zero-point energy

The energy a confined particle cannot give up. Pinning position sharpens $x$ and
so forces a spread in $p$; the ground state is the optimal compromise, never rest.

$$E_0=\tfrac12\hbar\omega\ \ (\text{oscillator}),\qquad E_1=\frac{\pi^2\hbar^2}{2mL^2}\ \ (\text{box})$$

*Introduced:* [3.1](lessons/03-01-harmonic-oscillator-analytic.md)

### Ladder operators

The two complex "halves" of $\hat x$ and $\hat p$. They step between rungs of the
oscillator spectrum; they are not Hermitian, so they are bookkeeping, not
observables.

$$a=\sqrt{\tfrac{m\omega}{2\hbar}}\left(\hat x+\tfrac{i\hat p}{m\omega}\right),\qquad a^{\dagger}=\sqrt{\tfrac{m\omega}{2\hbar}}\left(\hat x-\tfrac{i\hat p}{m\omega}\right),\qquad [a,a^{\dagger}]=1$$

*Introduced:* [3.2](lessons/03-02-harmonic-oscillator-ladder-operators.md)

### Commutator

How much the order of two operations matters. Zero means compatible; nonzero is
the exact exchange rate between sharpness in one observable and the other.

$$[\hat A,\hat B]\equiv\hat A\hat B-\hat B\hat A$$

*Introduced:* [3.3](lessons/03-03-commutators-uncertainty.md)

### Compatible observables

Two observables that can be sharp at once, because they share a complete
orthonormal eigenbasis. This happens **exactly** when they commute.

$$[\hat A,\hat B]=0\iff \hat A,\hat B\ \text{share a common orthonormal eigenbasis}$$

*Introduced:* [3.4](lessons/03-04-compatible-observables.md)

### Complete set of commuting observables

The shortest list of mutually commuting observables whose joint eigenvalue tuple
names each state uniquely. For hydrogen with spin it is $(n,\ell,m,m_s)$.

*Introduced:* [3.4](lessons/03-04-compatible-observables.md)

### Heisenberg picture

Move the time dependence off the state and onto the operator. Same predictions;
the payoff is that you can now ask how fast an operator changes.

$$\hat A_H(t)=\hat U^{\dagger}(t)\,\hat A_S\,\hat U(t),\qquad \hat U(t)=e^{-i\hat Ht/\hbar}$$

*Introduced:* [3.5](lessons/03-05-heisenberg-picture-ehrenfest.md)

### Centrifugal barrier

Rotational kinetic energy reclassified as potential energy once you freeze the
angular motion at fixed $\ell$ — a repulsive $1/r^2$ wall that keeps high-$\ell$
states away from the origin.

$$V_{\text{eff}}(r)=V(r)+\frac{\hbar^2\ell(\ell+1)}{2mr^2}$$

*Introduced:* [4.1](lessons/04-01-schrodinger-3d.md)

### Spherical harmonics

The standing waves of a sphere: the simultaneous eigenfunctions of $\hat L^2$ and
$\hat L_z$, and therefore the angular factor of *every* central-potential state.

$$Y_\ell^{m}(\theta,\phi)=N_{\ell m}\,P_\ell^{m}(\cos\theta)\,e^{im\phi}$$

*Introduced:* [4.3](lessons/04-03-spherical-harmonics-rigid-rotor.md)

### Accidental degeneracy

Hydrogen's energies depend on $n$ alone, so states of different $\ell$ pile onto
one level. Not luck — a hidden $SO(4)$ symmetry of the exact $1/r$ law, and any
deviation from $1/r$ splits it.

*Introduced:* [4.4](lessons/04-04-hydrogen-atom.md)

### Spinor

A two-component column vector holding the entire spin state of a spin-$\tfrac12$
particle. Spin has no position dependence — the arena is just $\mathbb C^2$.

$$\chi=\begin{pmatrix}a\\ b\end{pmatrix}=a\lvert{\uparrow}\rangle+b\lvert{\downarrow}\rangle,\qquad \lvert a\rvert^2+\lvert b\rvert^2=1$$

*Introduced:* [4.5](lessons/04-05-spin-pauli-stern-gerlach.md)

### Clebsch–Gordan coefficients

The change-of-basis matrix between "know what each part is doing" (uncoupled) and
"know what the whole is doing" (coupled).

$$\lvert j\,m\rangle=\sum_{m_1+m_2=m}\langle j_1m_1\,j_2m_2\vert j\,m\rangle\,\lvert j_1m_1\rangle\lvert j_2m_2\rangle$$

*Introduced:* [4.6](lessons/04-06-addition-angular-momenta.md)

### Exchange symmetry

Identical particles carry no labels, so swapping them can only multiply the state
by $\pm1$ — and which sign you get is fixed by spin (spin–statistics).

$$\hat P_{12}\Psi=+\Psi\ (\text{bosons}),\qquad \hat P_{12}\Psi=-\Psi\ (\text{fermions})$$

*Introduced:* [5.1](lessons/05-01-identical-particles.md)

### Entangled state

A joint state that refuses to factor into one state for $A$ and one for $B$: only
the pair has a state.

$$\text{separable}\iff\lvert\chi\rangle=\lvert\psi\rangle_A\otimes\lvert\varphi\rangle_B\iff\text{Schmidt rank}=1$$

*Introduced:* [5.2](lessons/05-02-tensor-products-entanglement.md)

### Local hidden variables

The hypothesis that each particle carries pre-set answers $\lambda$ and that
Alice's outcome cannot depend on Bob's setting. It is exactly what a Bell
violation rules out.

*Introduced:* [5.3](lessons/05-03-bell-inequality-nonlocality.md)

### Density operator

The state when you have classical ignorance too. Its off-diagonal entries are the
**coherences** — what a superposition has and a mixture has thrown away.

$$\rho=\sum_ip_i\lvert\psi_i\rangle\langle\psi_i\rvert,\qquad \rho^{\dagger}=\rho,\qquad \rho\ge0,\qquad \operatorname{Tr}\rho=1$$

*Introduced:* [5.4](lessons/05-04-density-matrix-mixed-states.md)

### Reduced density matrix

What one half of a composite system looks like on its own: trace out the partner.
A pure entangled whole has mixed parts — local mixedness *is* entanglement.

$$\rho_A=\operatorname{Tr}_B\rho_{AB}$$

*Introduced:* [5.4](lessons/05-04-density-matrix-mixed-states.md)

### Good states

In a degenerate subspace, the particular basis the perturbation refuses to mix —
the eigenvectors of $W$. Only in that basis do the nondegenerate formulas work.

*Introduced:* [6.2](lessons/06-02-degenerate-perturbation-theory.md)

### Rayleigh quotient

The variational estimator: the energy average of a trial state, normalized by its
own length so you never have to renormalize while tuning.

$$E(\alpha)=\frac{\langle\psi_\alpha\rvert\hat H\lvert\psi_\alpha\rangle}{\langle\psi_\alpha\vert\psi_\alpha\rangle}\ \ge\ E_0$$

*Introduced:* [6.3](lessons/06-03-variational-principle.md)

### Semiclassical (WKB) regime

Where the de Broglie wavelength changes little over its own length — the
potential is nearly constant across one wavelength. It fails at every turning
point, where $p\to0$.

$$\hbar\lvert p'\rvert\ll p^2\quad\Longleftrightarrow\quad\left\lvert\frac{d\lambda}{dx}\right\rvert\ll1$$

*Introduced:* [6.4](lessons/06-04-wkb-approximation.md)

### Rabi oscillation

Driven two-level population does not leak, it **sloshes**: on resonance it swings
all the way to the upper state and back, periodically.

$$P_{a\to b}(t)=\frac{\lvert V_{ba}\rvert^2/\hbar^2}{\Omega^2}\sin^2\!\left(\frac{\Omega t}{2}\right),\qquad \Omega=\sqrt{(\omega-\omega_0)^2+\lvert V_{ba}\rvert^2/\hbar^2}$$

*Introduced:* [6.5](lessons/06-05-time-dependent-perturbation.md)

### Density of states

The number of final states per unit energy. Without a continuum there is no
constant rate — a single discrete final state Rabi-oscillates instead.

*Introduced:* [6.6](lessons/06-06-fermi-golden-rule-radiation.md)

## Formulas and rules

### Constants and handy numbers

Quoted where the lessons use them; keep this row of numbers within reach.

| Quantity | Value |
|---|---|
| Planck constant | $h=6.626\times10^{-34}$ J·s, $\hbar=h/2\pi=1.055\times10^{-34}$ J·s |
| Conversion factors | $\hbar c=197.3$ eV·nm, $hc=1240$ eV·nm, $1\ \text{eV}=1.602\times10^{-19}$ J |
| Photon shortcut | $E(\text{eV})=1240/\lambda(\text{nm})$; visible light is $1.6$–$3.3$ eV |
| Electron | $m_e=9.11\times10^{-31}$ kg, $m_ec^2=0.511$ MeV, $e=1.602\times10^{-19}$ C |
| Bohr radius | $a=\dfrac{4\pi\epsilon_0\hbar^2}{m e^2}=0.529$ Å $=5.29\times10^{-11}$ m |
| Rydberg | $13.6$ eV; $R_\infty=13.6\ \text{eV}/hc\approx1.097\times10^{7}\ \text{m}^{-1}$ |
| Bohr magneton | $\mu_B=e\hbar/2m_e=9.274\times10^{-24}$ J/T $=5.788\times10^{-5}$ eV/T |
| Electron $g$-factor | $g\approx2$ (measured $2.00232\dots$) |
| Boltzmann constant | $k_B=1.381\times10^{-23}$ J/K $=8.617\times10^{-5}$ eV/K |
| Electron decay rate | $\kappa\approx5.12\sqrt{(V_0-E)/\text{eV}}\ \text{nm}^{-1}$ (barrier shortcut) |

*From* [1.1](lessons/01-01-why-quantum.md), [2.5](lessons/02-05-scattering-barriers-tunneling.md), [4.4](lessons/04-04-hydrogen-atom.md) *and* [4.5](lessons/04-05-spin-pauli-stern-gerlach.md)

### The quantum-classical bridge

$$E=\hbar\omega=h\nu,\qquad p=\hbar k,\qquad \lambda=\frac{h}{p},\qquad K_{\max}=h\nu-W=eV_0$$

Energy from frequency, count from intensity. Every particle has a wavelength; a
baseball's is $10^{-34}$ m, which is why nothing diffracts it.

**Classical radiation loss (the Larmor formula).** An accelerating charge radiates,
which is why a classical orbiting electron cannot survive — 1.1's P3 needs this and
**no course in this library derives it**, so it is written down here:

$$P=\frac{e^2a^2}{6\pi\epsilon_0c^3}=\frac{2}{3}\frac{k\,e^2a^2}{c^3},\qquad k=\frac{1}{4\pi\epsilon_0},\qquad T_{\text{collapse}}=\frac{r_0^3c^3m_e^2}{4(ke^2)^2}\approx1.6\times10^{-11}\ \text{s}$$

Here $a$ is the acceleration (not the Bohr radius) and $r_0$ the starting orbital
radius. Sixteen picoseconds is the number that kills the classical atom.

*From* [1.1](lessons/01-01-why-quantum.md)

### Operators in the position representation

| Observable | Operator |
|---|---|
| position | $\hat x\psi=x\psi$ |
| momentum | $\hat p=-i\hbar\,\dfrac{\partial}{\partial x}$ (the $-i\hbar$ is what makes it Hermitian) |
| kinetic energy | $\hat T=\dfrac{\hat p^2}{2m}=-\dfrac{\hbar^2}{2m}\dfrac{\partial^2}{\partial x^2}$ |
| energy | $\hat H=\hat T+V(\hat x)$ |
| angular momentum | $\hat{\mathbf L}=\hat{\mathbf r}\times\hat{\mathbf p}$; $\hat L_z=-i\hbar\,\dfrac{\partial}{\partial\phi}$ |
| spin | $\hat{\mathbf S}=\tfrac{\hbar}{2}\boldsymbol\sigma$ on $\mathbb C^2$ |

Canonical quantization: write the classical $H(x,p)$, then substitute $x\to\hat x$, $p\to-i\hbar\partial_x$.

*From* [1.4](lessons/01-04-observables-hermitian-operators.md), [2.1](lessons/02-01-schrodinger-equation.md), [4.2](lessons/04-02-angular-momentum-algebra.md) *and* [4.5](lessons/04-05-spin-pauli-stern-gerlach.md)

### The Schrödinger equation and time evolution

$$i\hbar\frac{\partial\psi}{\partial t}=\hat H\psi \quad\xrightarrow{\ V=V(x)\ }\quad \hat H\varphi=E\varphi\ \ \text{(TISE)},\qquad f(t)=e^{-iEt/\hbar}$$

$$\Psi(x,t)=\sum_nc_n\varphi_n(x)e^{-iE_nt/\hbar},\qquad c_n=\langle\varphi_n\vert\Psi(\cdot,0)\rangle,\qquad P(E_n)=\lvert c_n\rvert^2\ \text{constant in }t$$

**The algorithm:** decompose into energy eigenstates → spin each phase at
$E_n/\hbar$ → recombine. Any moving observable moves at a Bohr frequency:

$$\langle\hat Q\rangle(t)=\lvert c_m\rvert^2Q_{mm}+\lvert c_n\rvert^2Q_{nn}+2\operatorname{Re}\!\left[c_m^{*}c_nQ_{mn}e^{-i(E_n-E_m)t/\hbar}\right]$$

*From* [2.1](lessons/02-01-schrodinger-equation.md) *and* [2.2](lessons/02-02-stationary-states-time-evolution.md)

### The solved systems

The four you are expected to know cold, plus the two scattering cases.

| System | Potential | Energies | Eigenstates | Quantum numbers | Degeneracy |
|---|---|---|---|---|---|
| Infinite square well, width $L$ | $V=0$ on $0<x<L$, $\infty$ outside | $E_n=\dfrac{n^2\pi^2\hbar^2}{2mL^2}$ | $\varphi_n=\sqrt{\tfrac{2}{L}}\sin\dfrac{n\pi x}{L}$ | $n=1,2,3,\dots$ | none |
| Finite well, depth $V_0$, half-width $a$ | $V=-V_0$ for $\lvert x\rvert<a$ | roots of $k\tan ka=\kappa$ (even), $-k\cot ka=\kappa$ (odd) | oscillatory inside, $e^{-\kappa\lvert x\rvert}$ tails | finitely many, $N=\lceil z_0/(\pi/2)\rceil$ | none |
| Free particle | $V=0$ | $E=\dfrac{\hbar^2k^2}{2m}$, continuous | $e^{i(kx-\omega t)}$, not normalizable — use packets | $k\in\mathbb R$ | 2-fold ($\pm k$) |
| Harmonic oscillator | $V=\tfrac12m\omega^2x^2$ | $E_n=\hbar\omega\!\left(n+\tfrac12\right)$ | $\varphi_n=N_nH_n(\xi)e^{-\xi^2/2}$, $\xi=\sqrt{m\omega/\hbar}\,x$ | $n=0,1,2,\dots$ | none |
| Rigid rotor | none; $\hat H=\hat L^2/2I$ | $E_\ell=\dfrac{\hbar^2\ell(\ell+1)}{2I}$, $E_0=0$ | $Y_\ell^{m}(\theta,\phi)$ | $\ell=0,1,2,\dots$; $m=-\ell,\dots,\ell$ | $2\ell+1$ |
| Hydrogen | $V=-\dfrac{e^2}{4\pi\epsilon_0r}$ | $E_n=-\dfrac{13.6\ \text{eV}}{n^2}$ | $\psi_{n\ell m}=R_{n\ell}(r)Y_\ell^{m}(\theta,\phi)$ | $n\ge1$; $\ell=0,\dots,n-1$; $m=-\ell,\dots,\ell$ | $n^2$ ($2n^2$ with spin) |

Reading the table:

- **Node counting.** Box: $n-1$ interior nodes. Oscillator: $n$ nodes, parity $(-1)^n$. Hydrogen: $n-\ell-1$ radial nodes and $\ell$ angular nodal lines.
- **Scalings.** Box energies go as $1/L^2$ and $1/m$ — halve the box and *quadruple* every level. Oscillator rungs are evenly spaced; box rungs spread as $n^2$; hydrogen rungs crowd toward $E=0$ as $1/n^3$.
- **Normalizations.** $N_n=\left(\dfrac{m\omega}{\pi\hbar}\right)^{1/4}\dfrac{1}{\sqrt{2^nn!}}$ (stated here, not in a lesson); ground states $\varphi_0=\left(\dfrac{m\omega}{\pi\hbar}\right)^{1/4}e^{-m\omega x^2/2\hbar}$ and $\psi_{100}=\dfrac{1}{\sqrt{\pi a^3}}e^{-r/a}$.
- **Well strength.** $z_0=\dfrac{a}{\hbar}\sqrt{2mV_0}$, and $\xi^2+\eta^2=z_0^2$ with $\xi=ka$, $\eta=\kappa a$: bound states are where the branches cross that circle. In 1D there is always at least one.
- **Orthonormality.** $\displaystyle\int_0^L\varphi_m\varphi_n\,dx=\delta_{mn}$, $\displaystyle\int Y_\ell^{m}\big(Y_{\ell'}^{m'}\big)^{*}d\Omega=\delta_{\ell\ell'}\delta_{mm'}$, $\langle m\vert n\rangle=\delta_{mn}$ everywhere.

*From* [2.3](lessons/02-03-infinite-square-well.md), [2.4](lessons/02-04-finite-square-well.md), [2.6](lessons/02-06-free-particle-wave-packets.md), [3.1](lessons/03-01-harmonic-oscillator-analytic.md), [4.3](lessons/04-03-spherical-harmonics-rigid-rotor.md) *and* [4.4](lessons/04-04-hydrogen-atom.md)

### Scattering, barriers, and tunneling

$$R=\left(\frac{k-k'}{k+k'}\right)^2\ \ (\text{step},\ E>V_0),\qquad k=\frac{\sqrt{2mE}}{\hbar},\ \ k'=\frac{\sqrt{2m(E-V_0)}}{\hbar}$$

$$T=\left[1+\frac{V_0^{\,2}\sinh^2(\kappa a)}{4E(V_0-E)}\right]^{-1}\ \xrightarrow{\ \kappa a\gg1\ }\ T\approx\frac{16E(V_0-E)}{V_0^{\,2}}e^{-2\kappa a},\qquad \kappa=\frac{\sqrt{2m(V_0-E)}}{\hbar}$$

$R+T=1$ always. When the two sides have **different** potentials, weight by the
current: $T=(k_{\text{trans}}/k_{\text{inc}})\lvert F/A\rvert^2$. For $E>V_0$ the
interior oscillates, $\kappa\to ik'$ and $\sinh\to i\sin$, which can vanish —
transmission resonances with $T=1$.

*From* [2.5](lessons/02-05-scattering-barriers-tunneling.md)

### Free particle and wave packets

$$\omega(k)=\frac{\hbar k^2}{2m},\qquad v_p=\frac{\omega}{k}=\frac{\hbar k}{2m},\qquad v_g=\left.\frac{d\omega}{dk}\right\rvert_{k_0}=\frac{\hbar k_0}{m}=\frac{p_0}{m}=2v_p$$

$$\phi(k)=\frac{1}{\sqrt{2\pi}}\int\Psi(x,0)e^{-ikx}dx,\qquad \sigma(t)=\sigma_0\sqrt{1+\left(\frac{\hbar t}{2m\sigma_0^2}\right)^2}$$

The envelope carries the particle at the classical speed; sharper packets spread
faster.

*From* [2.6](lessons/02-06-free-particle-wave-packets.md)

### Commutator toolkit

| Identity / relation | Value |
|---|---|
| antisymmetry | $[\hat A,\hat B]=-[\hat B,\hat A]$ |
| Leibniz (right) | $[\hat A,\hat B\hat C]=[\hat A,\hat B]\hat C+\hat B[\hat A,\hat C]$ |
| Leibniz (left) | $[\hat A\hat B,\hat C]=\hat A[\hat B,\hat C]+[\hat A,\hat C]\hat B$ |
| canonical | $[\hat x,\hat p]=i\hbar$, $[\hat x_i,\hat p_j]=i\hbar\delta_{ij}$, $[\hat x_i,\hat x_j]=[\hat p_i,\hat p_j]=0$ |
| with a function | $[f(\hat x),\hat p]=i\hbar f'(\hat x)$, $[\hat x,g(\hat p)]=i\hbar g'(\hat p)$ |
| with the Hamiltonian | $[\hat H,\hat x]=-\dfrac{i\hbar\hat p}{m}$, $[\hat H,\hat p]=i\hbar V'(\hat x)$ |
| oscillator ladder | $[a,a^{\dagger}]=1$, $[N,a]=-a$, $[N,a^{\dagger}]=+a^{\dagger}$ |
| angular momentum | $[\hat L_i,\hat L_j]=i\hbar\epsilon_{ijk}\hat L_k$, $[\hat L^2,\hat L_i]=0$ |
| angular ladder | $[\hat L_z,\hat L_{\pm}]=\pm\hbar\hat L_{\pm}$, $[\hat L^2,\hat L_{\pm}]=0$ |
| Pauli | $[\sigma_i,\sigma_j]=2i\epsilon_{ijk}\sigma_k$, $\{\sigma_i,\sigma_j\}=2\delta_{ij}I$ |

*From* [3.3](lessons/03-03-commutators-uncertainty.md), [3.2](lessons/03-02-harmonic-oscillator-ladder-operators.md), [4.2](lessons/04-02-angular-momentum-algebra.md), [4.5](lessons/04-05-spin-pauli-stern-gerlach.md) *and* [3.5](lessons/03-05-heisenberg-picture-ehrenfest.md)

### Uncertainty relations

$$\sigma_A\sigma_B\ge\tfrac12\left\lvert\langle[\hat A,\hat B]\rangle\right\rvert\quad\Longrightarrow\quad \sigma_x\sigma_p\ge\frac{\hbar}{2}$$

The bound is **state-dependent** in general (for $[\hat L_x,\hat L_y]=i\hbar\hat L_z$
it is $\tfrac{\hbar}{2}\lvert\langle\hat L_z\rangle\rvert$, which can vanish). Equality
requires a Gaussian, which is why the oscillator ground state sits exactly on the
floor. The energy–time relation $\Delta E\,\Delta t\ge\hbar/2$ is **not** a
commutator: $\Delta t=\sigma_Q/\lvert d\langle Q\rangle/dt\rvert$ is the time for
the system to change appreciably.

*From* [3.3](lessons/03-03-commutators-uncertainty.md)

### Oscillator ladder algebra

$$\hat H=\hbar\omega\!\left(a^{\dagger}a+\tfrac12\right),\qquad N\lvert n\rangle=n\lvert n\rangle,\qquad a^{\dagger}\lvert n\rangle=\sqrt{n+1}\,\lvert n+1\rangle,\qquad a\lvert n\rangle=\sqrt{n}\,\lvert n-1\rangle,\qquad a\lvert0\rangle=0$$

$$\hat x=\sqrt{\frac{\hbar}{2m\omega}}\,(a+a^{\dagger}),\qquad \hat p=i\sqrt{\frac{m\hbar\omega}{2}}\,(a^{\dagger}-a)$$

| Matrix element | Value |
|---|---|
| $\langle n\rvert\hat x\lvert n\rangle$, $\langle n\rvert\hat p\lvert n\rangle$ | $0$ ($\hat x$ and $\hat p$ connect only $n\to n\pm1$) |
| $\langle n+1\rvert\hat x\lvert n\rangle$ | $\sqrt{\hbar(n+1)/2m\omega}$ |
| $\langle n\rvert\hat x^2\lvert n\rangle$ | $\dfrac{\hbar}{m\omega}\!\left(n+\tfrac12\right)$ |
| $\langle n\rvert\hat p^2\lvert n\rangle$ | $m\hbar\omega\!\left(n+\tfrac12\right)$ |
| $\Delta x\,\Delta p$ | $\hbar\!\left(n+\tfrac12\right)$ — saturating the bound only at $n=0$ |

Hermite polynomials: $H_0=1$, $H_1=2\xi$, $H_2=4\xi^2-2$, $H_3=8\xi^3-12\xi$.

*From* [3.2](lessons/03-02-harmonic-oscillator-ladder-operators.md) *and* [3.1](lessons/03-01-harmonic-oscillator-analytic.md)

### Heisenberg equation and Ehrenfest's theorem

$$\frac{d\hat A_H}{dt}=\frac{i}{\hbar}\big[\hat H,\hat A_H\big]+\left(\frac{\partial\hat A}{\partial t}\right)_H,\qquad \frac{d\langle\hat A\rangle}{dt}=\frac{i}{\hbar}\big\langle[\hat H,\hat A]\big\rangle$$

$$\frac{d\langle\hat x\rangle}{dt}=\frac{\langle\hat p\rangle}{m},\qquad \frac{d\langle\hat p\rangle}{dt}=-\big\langle V'(\hat x)\big\rangle=\langle\hat F\rangle$$

If $[\hat H,\hat A]=0$ the expectation is conserved. Dirac's quantization rule:
$\{f,g\}\mapsto\tfrac{1}{i\hbar}[\hat f,\hat g\,]$, so $\{x,p\}=1$ becomes
$[\hat x,\hat p]=i\hbar$.

*From* [3.5](lessons/03-05-heisenberg-picture-ehrenfest.md)

### Central potentials in 3D

$$-\frac{\hbar^2}{2m}u''(r)+\left[V(r)+\frac{\hbar^2\ell(\ell+1)}{2mr^2}\right]u(r)=E\,u(r),\qquad u(r)=rR(r)$$

Boundary conditions: $u(0)=0$ (else $R\sim1/r$ blows up) and
$\int_0^\infty\lvert u\rvert^2dr<\infty$. Watch the measure: the 3D norm is
$\int\lvert R\rvert^2r^2dr$, which is what makes $\int\lvert u\rvert^2dr$ the clean
1D norm.

*From* [4.1](lessons/04-01-schrodinger-3d.md)

### Angular momentum: spectrum and ladder

$$\hat L^2\lvert\ell,m\rangle=\hbar^2\ell(\ell+1)\lvert\ell,m\rangle,\qquad \hat L_z\lvert\ell,m\rangle=\hbar m\lvert\ell,m\rangle,\qquad m=-\ell,-\ell+1,\dots,+\ell$$

$$\hat L_{\pm}=\hat L_x\pm i\hat L_y,\qquad \hat L_{\pm}\lvert\ell,m\rangle=\hbar\sqrt{\ell(\ell+1)-m(m\pm1)}\;\lvert\ell,m\pm1\rangle,\qquad \hat L_{\mp}\hat L_{\pm}=\hat L^2-\hat L_z^2\mp\hbar\hat L_z$$

The algebra permits $\ell=0,\tfrac12,1,\tfrac32,\dots$; orbital angular momentum
realizes only the integers (single-valuedness on the sphere), and nature uses the
half-integers as **spin**. Length is $\sqrt{\ell(\ell+1)}\,\hbar$, strictly larger
than $\ell\hbar$ — the cone can never collapse onto the axis.

*From* [4.2](lessons/04-02-angular-momentum-algebra.md)

### Spherical harmonics

$$Y_0^0=\frac{1}{\sqrt{4\pi}},\qquad Y_1^{0}=\sqrt{\frac{3}{4\pi}}\cos\theta,\qquad Y_1^{\pm1}=\mp\sqrt{\frac{3}{8\pi}}\sin\theta\,e^{\pm i\phi}$$

$$Y_2^{0}=\sqrt{\frac{5}{16\pi}}\left(3\cos^2\theta-1\right),\qquad Y_2^{\pm1}=\mp\sqrt{\frac{15}{8\pi}}\sin\theta\cos\theta\,e^{\pm i\phi},\qquad Y_2^{\pm2}=\sqrt{\frac{15}{32\pi}}\sin^2\theta\,e^{\pm2i\phi}$$

(The $\ell=2$ row is standard and used implicitly, not stated in a lesson.)
Nodes: $\lvert m\rvert$ azimuthal planes and $\ell-\lvert m\rvert$ polar cones,
$\ell$ in total — hence $s$ ($\ell=0$), $p$ ($\ell=1$), $d$ ($\ell=2$). The real
orbitals are combinations: $p_z=Y_1^0$ and
$p_{x},p_{y}\propto\tfrac{1}{\sqrt2}\left(Y_1^{-1}\mp Y_1^{1}\right)$; each bare
$Y_1^{\pm1}$ is a donut about $z$, not a lobe.

*From* [4.3](lessons/04-03-spherical-harmonics-rigid-rotor.md)

### Hydrogen: quantum numbers, degeneracy, radial averages

$$E_n=-\left[\frac{m}{2\hbar^2}\left(\frac{e^2}{4\pi\epsilon_0}\right)^2\right]\frac{1}{n^2}=-\frac{13.6\ \text{eV}}{n^2},\qquad \sum_{\ell=0}^{n-1}(2\ell+1)=n^2$$

$$R_{n\ell}(r)=N_{n\ell}\left(\frac{r}{a}\right)^{\ell}e^{-r/na}\,L_{n-\ell-1}^{2\ell+1}\!\left(\frac{2r}{na}\right),\qquad \frac{1}{\lambda}=R_\infty\left(\frac{1}{n_f^2}-\frac{1}{n_i^2}\right)$$

The first three radial functions (standard, quoted here — the lessons give only
the general Laguerre form and $\psi_{100}$):

$$R_{10}=\frac{2}{a^{3/2}}e^{-r/a},\qquad R_{20}=\frac{1}{\sqrt2\,a^{3/2}}\left(1-\frac{r}{2a}\right)e^{-r/2a},\qquad R_{21}=\frac{1}{\sqrt{24}\,a^{3/2}}\frac{r}{a}\,e^{-r/2a}$$

| Quantity | Value |
|---|---|
| ground state | $\psi_{100}=\dfrac{1}{\sqrt{\pi a^3}}e^{-r/a}$ |
| most probable radius ($1s$) | $a$ |
| $\langle r\rangle$ ($1s$) | $\tfrac32a\approx0.79$ Å |
| $\langle r\rangle_{n\ell}$ | $\tfrac{a}{2}\left[3n^2-\ell(\ell+1)\right]$ (standard, quoted here) |
| $\langle 1/r\rangle_{n\ell}$ | $1/(n^2a)$ (standard, quoted here) |
| radial nodes | $n-\ell-1$ |
| series | $n_f=1$ Lyman (UV), $n_f=2$ Balmer (visible) |

*From* [4.4](lessons/04-04-hydrogen-atom.md)

### Spin-$\tfrac12$ toolkit

$$\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad \sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad \sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad \sigma_i^2=I,\qquad \sigma_x\sigma_y=i\sigma_z\ (\text{cyclic})$$

$$\hat{\mathbf n}\cdot\boldsymbol\sigma=\begin{pmatrix}\cos\theta&\sin\theta\,e^{-i\phi}\\ \sin\theta\,e^{i\phi}&-\cos\theta\end{pmatrix},\qquad \lvert{\uparrow}\rangle_{\mathbf n}=\begin{pmatrix}\cos\tfrac{\theta}{2}\\[2pt]e^{i\phi}\sin\tfrac{\theta}{2}\end{pmatrix}$$

$\hat S^2=\tfrac34\hbar^2$ for every spin-$\tfrac12$ state; any axis gives only
$\pm\tfrac{\hbar}{2}$. Magnetic coupling: $\boldsymbol\mu=\gamma\hat{\mathbf S}$
with $\gamma=-g\,e/2m$, $H=-\boldsymbol\mu\cdot\mathbf B$, and in a gradient field
$\mathbf F=\nabla(\boldsymbol\mu\cdot\mathbf B)$ — two spots, not a smear.

*From* [4.5](lessons/04-05-spin-pauli-stern-gerlach.md)

### Adding two angular momenta

$$m=m_1+m_2,\qquad \lvert j_1-j_2\rvert\le j\le j_1+j_2\ \text{in integer steps},\qquad \sum_{j=\lvert j_1-j_2\rvert}^{j_1+j_2}(2j+1)=(2j_1+1)(2j_2+1)$$

**Conventions (Condon–Shortley).** Coefficients $\langle j_1m_1\,j_2m_2\vert j\,m\rangle$
are real; they vanish unless $m=m_1+m_2$ *and* the triangle rule holds, so a CG
table is block-diagonal in $m$. The stretched state is
$\lvert j_1+j_2,\,j_1+j_2\rangle=\lvert j_1j_1\rangle\lvert j_2j_2\rangle$ with
coefficient $+1$, and in each multiplet's top state the coefficient of the largest
$m_1$ is taken positive. Reading a table: a **column** expands one coupled
$\lvert j\,m\rangle$ over uncoupled products; a **row** does the reverse; entries
are listed square-rooted with the sign kept outside.

**Building the multiplets:** start at the stretched state, apply
$\hat J_-=\hat J_{1-}+\hat J_{2-}$ with
$\hat J_-\lvert j\,m\rangle=\hbar\sqrt{j(j+1)-m(m-1)}\,\lvert j\,m-1\rangle$ to walk
down, then take the **orthogonal** combination at each $m$ to start the next
smaller multiplet. Repeat.

Two spin-$\tfrac12$ ($\tfrac12\otimes\tfrac12=1\oplus0$, and $4=3+1$):

$$\lvert1,1\rangle=\lvert{\uparrow\uparrow}\rangle,\qquad \lvert1,0\rangle=\tfrac{1}{\sqrt2}\left(\lvert{\uparrow\downarrow}\rangle+\lvert{\downarrow\uparrow}\rangle\right),\qquad \lvert1,-1\rangle=\lvert{\downarrow\downarrow}\rangle,\qquad \lvert0,0\rangle=\tfrac{1}{\sqrt2}\left(\lvert{\uparrow\downarrow}\rangle-\lvert{\downarrow\uparrow}\rangle\right)$$

Orbital plus spin-$\tfrac12$ (the fine-structure workhorse; standard, quoted here):

$$\left\lvert \ell+\tfrac12,\,m\right\rangle=\sqrt{\frac{\ell+m+\tfrac12}{2\ell+1}}\,\lvert m-\tfrac12\rangle\lvert{\uparrow}\rangle+\sqrt{\frac{\ell-m+\tfrac12}{2\ell+1}}\,\lvert m+\tfrac12\rangle\lvert{\downarrow}\rangle$$

$$\left\lvert \ell-\tfrac12,\,m\right\rangle=-\sqrt{\frac{\ell-m+\tfrac12}{2\ell+1}}\,\lvert m-\tfrac12\rangle\lvert{\uparrow}\rangle+\sqrt{\frac{\ell+m+\tfrac12}{2\ell+1}}\,\lvert m+\tfrac12\rangle\lvert{\downarrow}\rangle$$

*From* [4.6](lessons/04-06-addition-angular-momenta.md)

### Identical particles

$$\Psi_{\pm}(x_1,x_2)=\frac{1}{\sqrt2}\left[\psi_a(x_1)\psi_b(x_2)\pm\psi_b(x_1)\psi_a(x_2)\right]$$

Setting $b=a$ kills $\Psi_-$: Pauli exclusion is a theorem, not an extra rule. For
$N$ fermions use the **Slater determinant** $\Psi=\tfrac{1}{\sqrt{N!}}\det[\psi_{a_i}(x_j)]$
— rows are states, columns are particles, so swapping particles flips the sign and
repeating a state gives zero. Electrons need the **total** space $\otimes$ spin
state antisymmetric:

$$(\text{spatial symmetric})\otimes(\text{spin singlet})\quad\text{or}\quad(\text{spatial antisymmetric})\otimes(\text{spin triplet})$$

*From* [5.1](lessons/05-01-identical-particles.md)

### Tensor products and entanglement

$$\left(\langle a\rvert\otimes\langle b\rvert\right)\left(\lvert c\rangle\otimes\lvert d\rangle\right)=\langle a\vert c\rangle\langle b\vert d\rangle,\qquad \dim(\mathcal H_A\otimes\mathcal H_B)=d_Ad_B$$

Two-qubit separability test: $\lvert\chi\rangle=a\lvert00\rangle+b\lvert01\rangle+c\lvert10\rangle+d\lvert11\rangle$
is separable **iff** $ad=bc$ (the coefficient matrix has rank 1). In general,
separable $\iff$ Schmidt rank 1; the Schmidt values are the singular values of
that matrix. Bell basis:

$$\lvert\Phi^{\pm}\rangle=\tfrac{1}{\sqrt2}\left(\lvert00\rangle\pm\lvert11\rangle\right),\qquad \lvert\Psi^{\pm}\rangle=\tfrac{1}{\sqrt2}\left(\lvert01\rangle\pm\lvert10\rangle\right)$$

*From* [5.2](lessons/05-02-tensor-products-entanglement.md)

### Bell / CHSH

$$E(\hat a,\hat b)=-\,\hat a\cdot\hat b=-\cos\theta_{ab},\qquad S=E(\hat a,\hat b)-E(\hat a,\hat b')+E(\hat a',\hat b)+E(\hat a',\hat b')$$

Every local-hidden-variable theory obeys $\lvert S\rvert\le2$. Quantum mechanics
reaches $\lvert S\rvert=2\sqrt2$ (the **Tsirelson bound**, the maximum any quantum
theory allows) at the coplanar angles $0^\circ,45^\circ,90^\circ,135^\circ$.
Marginals stay flat, so no signal rides the correlation.

*From* [5.3](lessons/05-03-bell-inequality-nonlocality.md)

### Density-matrix rules

| Job | Rule |
|---|---|
| predictions | $\langle\hat A\rangle=\operatorname{Tr}(\rho\hat A)$ |
| pure vs mixed | $\operatorname{Tr}(\rho^2)=1\iff$ pure; $<1\iff$ mixed; minimum $1/d$ |
| pure state | $\rho=\lvert\psi\rangle\langle\psi\rvert$, $\rho^2=\rho$ |
| partial trace | $\operatorname{Tr}_B\!\left(\lvert a\rangle\langle a'\rvert\otimes\lvert b\rangle\langle b'\rvert\right)=\lvert a\rangle\langle a'\rvert\,\langle b'\vert b\rangle$ |
| entanglement test | $\rho_{AB}$ pure and $\rho_A$ mixed $\iff$ entangled |

*From* [5.4](lessons/05-04-density-matrix-mixed-states.md)

### Perturbation theory — every formula with its licence

| Result | Formula | Valid when |
|---|---|---|
| first-order energy | $E_n^{1}=\langle n^0\rvert\hat H'\lvert n^0\rangle$ | level $n$ nondegenerate |
| first-order state | $\lvert n^{1}\rangle=\displaystyle\sum_{m\ne n}\frac{\langle m^0\rvert\hat H'\lvert n^0\rangle}{E_n^0-E_m^0}\lvert m^0\rangle$ | no vanishing denominator |
| second-order energy | $E_n^{2}=\displaystyle\sum_{m\ne n}\frac{\left\lvert\langle m^0\rvert\hat H'\lvert n^0\rangle\right\rvert^2}{E_n^0-E_m^0}$ | same; gap is **signed** (level repulsion) |
| convergence test | $\left\lvert\langle m^0\rvert\hat H'\lvert n^0\rangle\right\rvert\ll\left\lvert E_n^0-E_m^0\right\rvert$ | for every $m\ne n$ |
| ground-state sign | $E_0^{2}\le0$ always | $n=0$ (every other level lies above) |
| degenerate case | eigenvalues of $W_{ij}=\langle i^0\rvert\hat H'\lvert j^0\rangle$, i.e. $\det(W-E^{(1)}I)=0$ | level $g$-fold degenerate; eigenvectors are the good states |
| symmetry shortcut | $W$ already diagonal in eigenstates of any $\hat A$ commuting with both $\hat H_0$ and $\hat H'$ | such an $\hat A$ exists |
| variational bound | $E(\alpha)=\dfrac{\langle\psi_\alpha\rvert\hat H\lvert\psi_\alpha\rangle}{\langle\psi_\alpha\vert\psi_\alpha\rangle}\ge E_0$, minimize over $\alpha$ | any trial state; bounds $E_1$ instead if $\langle\psi\vert0\rangle=0$ (an odd trial in an even $\hat H$) |
| first-order transition | $c_b(t)\approx-\dfrac{i}{\hbar}\displaystyle\int_0^tH'_{ba}(t')e^{i\omega_0t'}dt'$ | $P_{a\to b}\ll1$ |
| driven two-level | $P_{a\to b}\approx\dfrac{\lvert V_{ba}\rvert^2}{\hbar^2}\dfrac{\sin^2\!\left[(\omega-\omega_0)t/2\right]}{(\omega-\omega_0)^2}$ | weak sinusoidal drive, near resonance (rotating-wave approximation) |
| Rabi flopping | $P=\dfrac{\lvert V_{ba}\rvert^2/\hbar^2}{\Omega^2}\sin^2\!\left(\dfrac{\Omega t}{2}\right)$ | exact within the two-level + RWA model, any coupling strength |
| Fermi's golden rule | $\Gamma_{i\to f}=\dfrac{2\pi}{\hbar}\left\lvert\langle f\rvert\hat H'\lvert i\rangle\right\rvert^2\rho(E_f)$ | **continuum** of final states; $t$ long enough to sharpen the $\operatorname{sinc}^2$, short enough that $P\ll1$ |

The unperturbed level ordering also matters: a first-order shift of zero is common
(symmetry), and the physics then lives at second order. A $k$-th order state
correction delivers the energy to order $2k+1$.

*From* [6.1](lessons/06-01-perturbation-theory-nondegenerate.md), [6.2](lessons/06-02-degenerate-perturbation-theory.md), [6.3](lessons/06-03-variational-principle.md), [6.5](lessons/06-05-time-dependent-perturbation.md) *and* [6.6](lessons/06-06-fermi-golden-rule-radiation.md)

### WKB

$$\psi(x)\approx\frac{1}{\sqrt{p(x)}}\exp\!\left(\pm\frac{i}{\hbar}\int p\,dx\right)\ (E>V),\qquad \psi(x)\approx\frac{1}{\sqrt{\kappa(x)}}\exp\!\left(\pm\frac{1}{\hbar}\int\kappa\,dx\right)\ (E<V)$$

$$\int_a^bp(x)\,dx=\left(n+\tfrac12\right)\pi\hbar,\qquad T\approx\exp\!\left(-\frac{2}{\hbar}\int_a^b\sqrt{2m\left(V(x)-E\right)}\,dx\right)$$

The $\tfrac12$ is two $\pi/4$ phase losses, one per **soft** turning point: one
soft turning point and one hard wall gives $\left(n+\tfrac34\right)$; two hard
walls gives $(n+1)$. The amplitude $1/\sqrt p$ is physics —
$\lvert\psi\rvert^2\propto1/v$ is the classical dwell time. The tunneling formula
is the exponential factor only, useful when the exponent is large.

*From* [6.4](lessons/06-04-wkb-approximation.md)

### Radiation: dipole coupling and selection rules

$$\hat H'=-\mathbf d\cdot\mathbf E,\qquad \mathbf d=q\mathbf r,\qquad \boxed{\Delta\ell=\pm1,\qquad \Delta m=0,\pm1}$$

Valid in the **electric-dipole approximation** (wavelength large compared with the
atom). The rules are parity plus angular-momentum conservation: $\mathbf r$ is
odd, hydrogenic parity is $(-1)^\ell$, and the photon carries one unit of angular
momentum. "Forbidden" means the dipole element vanishes — higher multipoles can
still drive it, orders of magnitude more slowly. Einstein coefficients:
$A/B\propto\omega^3$, and $\tau=1/A$ (a few nanoseconds for allowed optical lines).

*From* [6.6](lessons/06-06-fermi-golden-rule-radiation.md)

### Integrals the lessons use without stating

| Integral | Value |
|---|---|
| $\displaystyle\int_{-\infty}^{\infty}e^{-\beta x^2}dx$ | $\sqrt{\pi/\beta}$ |
| $\displaystyle\int_{-\infty}^{\infty}x^2e^{-\beta x^2}dx$ | $\tfrac12\sqrt{\pi/\beta^3}$ |
| $\displaystyle\int_0^{\infty}x^{n}e^{-\beta x}dx$ | $n!/\beta^{n+1}$ |
| $\displaystyle\int_0^{L}\sin\frac{m\pi x}{L}\sin\frac{n\pi x}{L}\,dx$ | $\tfrac{L}{2}\delta_{mn}$ |
| $\displaystyle\int_{-\infty}^{\infty}\frac{\sin^2(\omega t/2)}{(\omega/2)^2}\,d\omega$ | $2\pi t$ — the $\operatorname{sinc}^2$ kernel behind the golden rule |

Odd integrand over a symmetric range integrates to zero — the fastest way to kill
$\langle x\rangle$ in a symmetric state.

*From* [1.2](lessons/01-02-wavefunction-born-rule.md), [2.3](lessons/02-03-infinite-square-well.md), [3.1](lessons/03-01-harmonic-oscillator-analytic.md), [4.4](lessons/04-04-hydrogen-atom.md) *and* [6.6](lessons/06-06-fermi-golden-rule-radiation.md)

## Assumed, not taught here

This is a Tier 2 course: it leans on the following without deriving them.

| Fact | Where it's taught |
|---|---|
| Spectral theorem: Hermitian $\Rightarrow$ real eigenvalues + orthonormal eigenbasis | [linalg-refresher 5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md) |
| Eigenvalue problems, characteristic polynomial, diagonalization | [linalg-refresher 3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md), [3.2](../linalg-refresher/lessons/03-02-diagonalization.md) |
| Inner products, orthogonality, Cauchy–Schwarz (the uncertainty proof) | [linalg-refresher 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) |
| Determinants (Slater determinant, secular equation) | [linalg-refresher 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| Singular value decomposition (the Schmidt decomposition *is* the SVD) | [linalg-refresher 5.2](../linalg-refresher/lessons/05-02-svd.md) |
| Hamiltonian mechanics, $H(q,p)$, canonical variables | [analytical-mechanics 3.1](../analytical-mechanics/lessons/03-01-legendre-hamiltons-equations.md) |
| Poisson brackets (what commutators quantize) | [analytical-mechanics 3.3](../analytical-mechanics/lessons/03-03-poisson-brackets.md) |
| Action and the variational principle behind $h$ as a quantum of action | [analytical-mechanics 1.2](../analytical-mechanics/lessons/01-02-least-action-lagrange.md) |
| Effective potential and the classical central-force problem | [mechanics-refresher 5.2](../mechanics-refresher/lessons/05-02-orbits-effective-potential.md) |
| Complex modulus/argument, $Re^{i\theta}$, Euler's formula | [complex-analysis 1.1](../complex-analysis/lessons/01-01-complex-numbers-geometry.md), [1.3](../complex-analysis/lessons/01-03-exponential-log-trig.md) |
| Fourier transform pair (position $\leftrightarrow$ momentum wavefunctions) | [fourier-analysis 2.1](../fourier-analysis/lessons/02-01-series-to-fourier-transform.md) |
| Plancherel and the Fourier uncertainty inequality $\Delta x\,\Delta k\gtrsim\tfrac12$ | [fourier-analysis 2.4](../fourier-analysis/lessons/02-04-plancherel-uncertainty.md) |
| The Dirac delta and its sifting property ($\langle x\vert x'\rangle=\delta(x-x')$) | [fourier-analysis 3.1](../fourier-analysis/lessons/03-01-dirac-delta-sifting.md) |
| Frobenius / power-series solution and termination of a recursion | [mathematical-methods-physics 3.1](../mathematical-methods-physics/lessons/03-01-power-series-frobenius.md) |
| Hermite polynomials and their properties | [mathematical-methods-physics 3.4](../mathematical-methods-physics/lessons/03-04-hermite-generating-functions.md) |
| Legendre functions $P_\ell^{m}$ and the derivation of $Y_\ell^{m}$ | [mathematical-methods-physics 3.2](../mathematical-methods-physics/lessons/03-02-legendre-spherical-harmonics.md) |
| Sturm–Liouville theory: why eigenfunction expansions are complete | [mathematical-methods-physics 3.5](../mathematical-methods-physics/lessons/03-05-sturm-liouville-orthogonal-expansions.md) |
| The Laplacian in spherical coordinates (quoted in 4.1, never derived) | [mathematical-methods-physics 1.4](../mathematical-methods-physics/lessons/01-04-curvilinear-coordinates.md) |
| Separation of variables for a PDE | [pdes 3.1](../pdes/lessons/03-01-separation-of-variables.md), [ode-refresher 4.2](../ode-refresher/lessons/04-02-intro-pdes-separation.md) |
| Probability density, expectation, variance | [prob-stat-refresher 1.3](../prob-stat-refresher/lessons/01-03-random-variables-distributions.md), [2.1](../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md) |
| Improper integrals and when they converge (normalizability) | [calc-refresher 2.3](../calc-refresher/lessons/02-03-improper-integrals-and-models.md) |
| Group velocity, dispersion, and packet spreading in classical waves | [waves-optics 4.4](../waves-optics/lessons/04-04-wave-packets-dispersion-fourier.md) |
| Magnetic moments and forces in a field (Stern–Gerlach, Zeeman) | [em-refresher 3.1](../em-refresher/lessons/03-01-magnetic-force.md) |
| Fields, Poynting flux, and that light carries energy and momentum | [em-refresher 4.3](../em-refresher/lessons/04-03-energy-poynting.md) |
| Larmor radiation from an accelerating charge (1.1 P3) | **nowhere in this library** — the formula is stated above under *The quantum-classical bridge* |
| The spin–statistics theorem itself (stated in 5.1, provable only in QFT) | [qft](../qft/reference.md) — outside this course |

## Pitfalls

### States, phases, and probability

- $\lvert\psi(x)\rvert^2$ is a **density** with units of $1/\text{length}$; it can exceed 1, and a probability only exists after integrating. *([1.2](lessons/01-02-wavefunction-born-rule.md))*
- A **global** phase $e^{i\alpha}$ is invisible; a **relative** phase between components is the entire content of interference. *([1.2](lessons/01-02-wavefunction-born-rule.md), [1.3](lessons/01-03-hilbert-space-dirac-notation.md), [2.1](lessons/02-01-schrodinger-equation.md))*
- $\langle\phi\vert\psi\rangle=\langle\psi\vert\phi\rangle^{*}$ — swapping without conjugating is the most common Dirac-notation error. *([1.3](lessons/01-03-hilbert-space-dirac-notation.md))*
- $\langle n\vert n\rangle$ is a **number**, $\lvert n\rangle\langle n\rvert$ is an **operator**. The order of the bars is everything. *([1.3](lessons/01-03-hilbert-space-dirac-notation.md))*
- $\lvert x\rangle$ is not a state: $\langle x\vert x'\rangle=\delta(x-x')$ blows up. It is a reference direction, legal only inside an integral. *([1.3](lessons/01-03-hilbert-space-dirac-notation.md))*
- The probability of an outcome is $\lvert c_n\rvert^2$, not $c_n$, and only for a normalized state. *([2.3](lessons/02-03-infinite-square-well.md))*
- $\langle\hat A\rangle$ is an **ensemble** average — many fresh copies each measured once — and is usually not even an eigenvalue. Measuring one system repeatedly just returns the collapsed value forever. *([1.5](lessons/01-05-measurement-expectation-values.md))*
- A superposition is not hidden ignorance: unless the state is an eigenstate, the value is genuinely indefinite. *([1.5](lessons/01-05-measurement-expectation-values.md))*
- Total probability is conserved; **local** density is not — the continuity equation permits $\lvert\psi\rvert^2$ to change, just not without a current. *([1.2](lessons/01-02-wavefunction-born-rule.md))*

### Operators and Hermiticity

- Symmetric is not Hermitian for complex matrices — you need conjugate **and** transpose. *([1.4](lessons/01-04-observables-hermitian-operators.md))*
- Real eigenvalues alone do not certify an observable; Hermiticity is what also buys the orthonormal eigenbasis. *([1.4](lessons/01-04-observables-hermitian-operators.md))*
- $d/dx$ is anti-Hermitian; the physical momentum is $-i\hbar\,d/dx$, and the factor is the fix, not decoration. (For unbounded operators, Hermiticity also carries a boundary/domain condition.) *([1.4](lessons/01-04-observables-hermitian-operators.md))*
- Ladder operators are **not** observables: $a^{\dagger}\ne a$ and $\hat L_+^{\dagger}=\hat L_-$. Only Hermitian combinations are measurable. *([3.2](lessons/03-02-harmonic-oscillator-ladder-operators.md), [4.2](lessons/04-02-angular-momentum-algebra.md))*
- $\hat H$ is an operator, not a number; it returns an energy only on its own eigenstates. *([2.1](lessons/02-01-schrodinger-equation.md))*

### Dynamics and time evolution

- Sign trap: the temporal factor is $e^{-iEt/\hbar}$. A plus sign reverses every wave and every Bohr frequency. *([2.1](lessons/02-01-schrodinger-equation.md))*
- Separation of variables requires $V$ to be **time-independent**; with $V(x,t)$ there is no single $E$. *([2.1](lessons/02-01-schrodinger-equation.md))*
- "Stationary" describes the observables, not $\psi$ — the phase never stops turning. And only a **single** eigenstate is stationary; two energies always beat. *([2.2](lessons/02-02-stationary-states-time-evolution.md))*
- A superposition has no definite energy, so you cannot factor out one $e^{-iEt/\hbar}$ and name it "the" energy. *([2.2](lessons/02-02-stationary-states-time-evolution.md))*
- The Heisenberg sandwich is $\hat U^{\dagger}\hat A\hat U$, in that order; reversed daggers flip every sign in the equation of motion. *([3.5](lessons/03-05-heisenberg-picture-ehrenfest.md))*
- $\langle V'(\hat x)\rangle\ne V'(\langle\hat x\rangle)$ unless $V$ is at most quadratic — that gap is the leading quantum correction to Newton. *([3.5](lessons/03-05-heisenberg-picture-ehrenfest.md))*

### Wells, barriers, and packets

- The ground state of a box is $n=1$, not $n=0$ ($n=0$ means no particle), and $E_1>0$ is mandatory. *([2.3](lessons/02-03-infinite-square-well.md))*
- Box energies scale as $1/L^2$: doubling the box **quarters** them. *([2.3](lessons/02-03-infinite-square-well.md))*
- $\varphi'$ is continuous everywhere except where $V$ is genuinely infinite; at the walls of the infinite well $\varphi$ has a kink. *([2.3](lessons/02-03-infinite-square-well.md))*
- A finite well's $\varphi$ does **not** vanish at the wall — it leaks out as $e^{-\kappa\lvert x\rvert}$; and the matching condition has no closed form, so solve it graphically or numerically. *([2.4](lessons/02-04-finite-square-well.md))*
- In 1D even an arbitrarily shallow attractive well binds one state; "too weak to bind" is a 3D phenomenon. *([2.4](lessons/02-04-finite-square-well.md))*
- Nothing "borrows energy" to cross a barrier — what lives inside is an evanescent amplitude, and $T=\lvert F/A\rvert^2$ only when both sides share the same potential. *([2.5](lessons/02-05-scattering-barriers-tunneling.md))*
- Do not confuse $\sinh$ ($E<V_0$, evanescent) with $\sin$ ($E>V_0$, oscillatory and capable of $T=1$ resonances). *([2.5](lessons/02-05-scattering-barriers-tunneling.md))*
- The plane wave is a basis element, not a state; the particle moves at $v_g$, not at $v_p$; and free packets spread all by themselves, with no measurement or force involved. *([2.6](lessons/02-06-free-particle-wave-packets.md))*

### Oscillator and ladders

- $E_0=\tfrac12\hbar\omega\ne0$, and the missing $\tfrac12$ is exactly the ordering mismatch between $a^{\dagger}a$ and $aa^{\dagger}$. *([3.1](lessons/03-01-harmonic-oscillator-analytic.md), [3.2](lessons/03-02-harmonic-oscillator-ladder-operators.md))*
- The Gaussian $e^{-\xi^2/2}$ is only the envelope; $H_n(\xi)$ supplies every excited state's nodes. *([3.1](lessons/03-01-harmonic-oscillator-analytic.md))*
- The growing solution is discarded because it is **not normalizable** — quantization here comes from normalizability, not from walls. *([3.1](lessons/03-01-harmonic-oscillator-analytic.md))*
- Lowering carries $\sqrt{n}$ (the rung you leave), raising carries $\sqrt{n+1}$ (the rung you enter). *([3.2](lessons/03-02-harmonic-oscillator-ladder-operators.md))*

### Uncertainty and compatibility

- Uncertainty is a property of the **state**, not of a clumsy apparatus; and the bound $\tfrac12\lvert\langle[\hat A,\hat B]\rangle\rvert$ is state-dependent, so non-commuting operators can still both be sharp in special states. *([3.3](lessons/03-03-commutators-uncertainty.md), [3.4](lessons/03-04-compatible-observables.md))*
- $\Delta E\,\Delta t\ge\hbar/2$ is not a commutator relation — there is no time operator, and energy is exactly conserved. *([3.3](lessons/03-03-commutators-uncertainty.md))*
- Sign trap: $[\hat x,\hat p]=+i\hbar$ but $[\hat p,\hat x]=-i\hbar$. *([3.3](lessons/03-03-commutators-uncertainty.md))*
- Commuting means shared **eigenvectors**, not shared eigenvalues — and inside a degenerate eigenspace most vectors are still not joint eigenstates until you diagonalize there. *([3.4](lessons/03-04-compatible-observables.md))*
- Only *independent* observables enlarge a CSCO; adding $\hat A^2$ next to $\hat A$ buys nothing. *([3.4](lessons/03-04-compatible-observables.md))*

### Angular momentum, spin, and coupling

- The separation constant is not a free knob: normalizability on the sphere forces $\ell(\ell+1)$ with integer $\ell\ge0$. And $u=rR$ obeys a *different*, cleaner equation than $R$, at the cost of $u(0)=0$ — while the radial norm carries the $r^2$. *([4.1](lessons/04-01-schrodinger-3d.md))*
- The length of $\mathbf L$ is $\sqrt{\ell(\ell+1)}\,\hbar$, strictly bigger than $\ell\hbar$ — the vector can never align with an axis. *([4.2](lessons/04-02-angular-momentum-algebra.md))*
- The ladder coefficient is $\sqrt{\ell(\ell+1)-m(m\pm1)}$; dropping the $m$-dependence is the most common matrix-element error, and it is what makes the ladder terminate. *([4.2](lessons/04-02-angular-momentum-algebra.md))*
- Half-integer $\ell$ is not a spurious root — it is spin. *([4.2](lessons/04-02-angular-momentum-algebra.md), [4.5](lessons/04-05-spin-pauli-stern-gerlach.md))*
- $Y_\ell^{m}$ is only the angular factor, $Y_1^{\pm1}$ is a donut (not a lobe), and the rotor's ground state genuinely has $E_0=0$ — no zero-point tumbling. Rotational *levels* spread as $\ell(\ell+1)$ while the *lines* stay evenly spaced. *([4.3](lessons/04-03-spherical-harmonics-rigid-rotor.md))*
- Spin is not a spinning ball, $\hat S^2=\tfrac34\hbar^2$ never changes, and the half-angle $\theta/2$ (not $\theta$) appears in the spinor amplitudes. *([4.5](lessons/04-05-spin-pauli-stern-gerlach.md))*
- You cannot know $j$ and $m_1,m_2$ together; $j$ steps down to $\lvert j_1-j_2\rvert$, not to 0; and the $\pm$ sign is what separates triplet from singlet. A CG coefficient with $m\ne m_1+m_2$ is zero before you look it up. *([4.6](lessons/04-06-addition-angular-momenta.md))*

### Hydrogen

- Energy depends on $n$ alone — higher $\ell$ costs nothing here, unlike a rotor or a generic central well. Do not export that to other potentials. *([4.4](lessons/04-04-hydrogen-atom.md))*
- $E_n<0$ means **bound**, with $E=0$ chosen as the ionized state. *([4.4](lessons/04-04-hydrogen-atom.md))*
- $\ell\le n-1$ strictly (no $1p$, no $2d$), and $n$ is not a node count: radial nodes are $n-\ell-1$. *([4.4](lessons/04-04-hydrogen-atom.md))*
- Most probable radius $\ne\langle r\rangle$ ($a$ versus $\tfrac32a$ for the ground state) because $r^2\lvert R\rvert^2$ is skewed. *([4.4](lessons/04-04-hydrogen-atom.md))*

### Many particles, entanglement, mixtures

- "Electron 1 in $a$, electron 2 in $b$" is unphysical; only $\Psi_{\pm}$ is legal, and Pauli forbids the same **total** (space $\otimes$ spin) state, not the same spatial orbital. *([5.1](lessons/05-01-identical-particles.md))*
- The exchange "force" is no term in the Hamiltonian — it is a correlation manufactured by symmetry, and its effect fades when the states stop overlapping. *([5.1](lessons/05-01-identical-particles.md))*
- Entanglement is not interaction and cannot signal: measuring $A$ changes your *description* of $B$, never $B$'s marginal statistics. *([5.2](lessons/05-02-tensor-products-entanglement.md), [5.3](lessons/05-03-bell-inequality-nonlocality.md))*
- $\otimes$ multiplies dimensions and joins different systems; $\oplus$ adds them and stacks alternatives within one. *([5.2](lessons/05-02-tensor-products-entanglement.md))*
- "The particles were just correlated at the source" *is* the local-hidden-variable hypothesis, and it is what $\lvert S\rvert\le2$ rules out; a real test must also close the detection and locality loopholes. *([5.3](lessons/05-03-bell-inequality-nonlocality.md))*
- A superposition and a mixture agree in **one** basis only; rotate and the coherences reappear. *([5.4](lessons/05-04-density-matrix-mixed-states.md))*
- A pure whole can have mixed parts, the ensemble recipe is **not** recoverable from $\rho$, and $\operatorname{Tr}(\rho^2)>1$ is always an arithmetic slip. *([5.4](lessons/05-04-density-matrix-mixed-states.md))*

### Approximations

- You do not need $\lvert n^{1}\rangle$ to get $E_n^{1}$; and $E_n^{1}=0$ does not mean "no effect" — the physics often waits at second order. *([6.1](lessons/06-01-perturbation-theory-nondegenerate.md))*
- The denominator $E_n^0-E_m^0$ is **signed** (that is level repulsion), and near a degeneracy the whole expansion is invalid. *([6.1](lessons/06-01-perturbation-theory-nondegenerate.md))*
- In a degenerate subspace the shifts are the **eigenvalues** of $W$, not its diagonal entries — unless a symmetry has already diagonalized it. A repeated eigenvalue means the degeneracy is only partly lifted. *([6.2](lessons/06-02-degenerate-perturbation-theory.md))*
- The eigenvectors of $W$ are the good **zeroth-order** states, not the first-order corrections. *([6.2](lessons/06-02-degenerate-perturbation-theory.md))*
- A low variational energy does not certify an accurate wavefunction (first-order shape error, second-order energy error), the raw method bounds only the ground state, and forgetting to divide by $\langle\psi\vert\psi\rangle$ destroys the bound. *([6.3](lessons/06-03-variational-principle.md))*
- WKB needs the wavelength to vary slowly, so it fails at every turning point; the quantization rule keeps its $\tfrac12$; and $T\approx e^{-2\gamma}$ is the exponential factor only, useful for **thick** barriers. *([6.4](lessons/06-04-wkb-approximation.md))*
- First-order time-dependent theory dies once $P$ stops being small ($P\propto t^2$ would exceed 1); the honest long-time answer is the bounded Rabi $\sin^2$. Diagonal matrix elements only shift phases — transitions ride on the off-diagonal element. *([6.5](lessons/06-05-time-dependent-perturbation.md))*
- Do not confuse the atom's gap $\omega_0$ with the drive $\omega$ you control. *([6.5](lessons/06-05-time-dependent-perturbation.md))*
- The golden rule gives a **rate**, needs a continuum ($\rho(E_f)$ is not optional), and "forbidden" means slow, not impossible. *([6.6](lessons/06-06-fermi-golden-rule-radiation.md))*
