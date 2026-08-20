# Quantum Field Theory · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

QFT is one machine run in two directions. *Downhill:* write a Lorentz-invariant
Lagrangian density, quantize the field, expand the S-matrix, and read amplitudes
off diagrams until you have a cross-section a detector can check. *Uphill:*
demand a symmetry (local phase invariance) and let it dictate which Lagrangian
you were allowed to write in the first place. This card carries the conventions,
the Feynman-rule dictionaries, the gamma-matrix algebra, and the renormalization
vocabulary — the things you'd otherwise stop mid-problem to hunt for.

**Conventions this course uses everywhere — check these first when a sign looks wrong:**

- **Natural units** $\hbar = c = 1$ throughout (from [1.1](lessons/01-01-why-qm-relativity-forces-fields.md) on). Every quantity is a power of mass: energy, momentum, and mass share one unit, and length and time are its inverse. Restore factors with $\hbar c \approx 197\ \text{MeV·fm}$.
- **Mostly-minus metric** (Peskin): $\eta_{\mu\nu} = \operatorname{diag}(+1,-1,-1,-1)$, so $p^2 = E^2 - \mathbf{p}^2$, $a\cdot b = a^0b^0 - \mathbf{a}\cdot\mathbf{b}$, and $(\partial\phi)^2 = \dot\phi^2 - (\nabla\phi)^2$. Mass terms enter a scalar Lagrangian as $-\tfrac12 m^2\phi^2$. The mostly-plus convention flips signs everywhere — never mix sources mid-calculation ([1.2](lessons/01-02-classical-field-theory-lagrangian.md)).
- **Relativistic state normalization:** $[a_{\mathbf p}, a_{\mathbf q}^\dagger] = (2\pi)^3\delta^3(\mathbf p - \mathbf q)$ and $|\mathbf p\rangle = \sqrt{2\omega_{\mathbf p}}\,a_{\mathbf p}^\dagger|0\rangle$, so $\langle\mathbf p|\mathbf q\rangle = 2\omega_{\mathbf p}(2\pi)^3\delta^3(\mathbf p - \mathbf q)$. Cross-sections depend on these factors ([2.2](lessons/02-02-creation-annihilation-fock-space.md)).
- **Feynman slash:** ${\not}p \equiv \gamma^\mu p_\mu$, ${\not}\partial \equiv \gamma^\mu\partial_\mu$ ([4.2](lessons/04-02-dirac-equation.md)).
- **Every propagator carries $+i\varepsilon$** in the denominator — the Feynman (causal) contour, not decoration ([2.4](lessons/02-04-feynman-propagator.md)).

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\eta_{\mu\nu}$ | Minkowski metric, mostly-minus — raises/lowers indices | [1.2](lessons/01-02-classical-field-theory-lagrangian.md) |
| $\partial_\mu$, $\Box$ | spacetime gradient $(\partial_t, \nabla)$ and the d'Alembertian $\partial_\mu\partial^\mu = \partial_t^2 - \nabla^2$ | [1.2](lessons/01-02-classical-field-theory-lagrangian.md) |
| $\mathcal{L}$, $S$ | Lagrangian **density** (per unit volume) and the action $S = \int d^4x\,\mathcal{L}$ | [1.2](lessons/01-02-classical-field-theory-lagrangian.md) |
| $\pi(x)$, $\mathcal{H}$ | conjugate momentum density $\partial\mathcal{L}/\partial\dot\phi$ and energy density $\pi\dot\phi - \mathcal{L}$ | [1.2](lessons/01-02-classical-field-theory-lagrangian.md) |
| $j^\mu$, $Q$ | Noether current (conserved when $\partial_\mu j^\mu = 0$) and its charge $\int j^0 d^3x$ | [1.3](lessons/01-03-symmetries-noether-for-fields.md) |
| $T^{\mu\nu}$ | energy–momentum tensor — the current of spacetime translations | [1.3](lessons/01-03-symmetries-noether-for-fields.md) |
| $\omega_{\mathbf p}$ | on-shell energy $\sqrt{\mathbf p^2 + m^2}$ of one quantum of momentum $\mathbf p$ | [1.1](lessons/01-01-why-qm-relativity-forces-fields.md) |
| $\lambda_C$ | Compton wavelength $1/m$ — the length below which "one particle" stops meaning anything | [1.1](lessons/01-01-why-qm-relativity-forces-fields.md) |
| $\phi(x)$ | scalar field — an **operator** at each spacetime point, not a wavefunction | [1.4](lessons/01-04-klein-gordon-field.md) |
| $a_{\mathbf p}$, $a_{\mathbf p}^\dagger$ | annihilate / create one boson of momentum $\mathbf p$ | [2.2](lessons/02-02-creation-annihilation-fock-space.md) |
| $\lvert 0\rangle$, $N$ | the vacuum (killed by every $a_{\mathbf p}$) and the number operator | [2.2](lessons/02-02-creation-annihilation-fock-space.md) |
| $:\!\mathcal{O}\!:$ | normal ordering — all $a^\dagger$ moved left, discarding the vacuum energy | [2.3](lessons/02-03-particles-as-excitations-energy-momentum.md) |
| $T\{\cdots\}$ | time ordering — later operators to the left (with a $-$ for each fermion swap) | [2.4](lessons/02-04-feynman-propagator.md) |
| $D_F$, $\widetilde D_F(p)$ | scalar Feynman propagator in position / momentum space | [2.4](lessons/02-04-feynman-propagator.md) |
| $i\varepsilon$ | the pole prescription that sends particles forward and antiparticles backward in time | [2.4](lessons/02-04-feynman-propagator.md) |
| $S$, $S_{fi}$ | S-matrix operator and its matrix element $\langle f\lvert S\rvert i\rangle$ (**not** the symmetry factor) | [3.1](lessons/03-01-interaction-picture-s-matrix.md) |
| $\mathcal{M}$ | the reduced amplitude: $S_{fi}$ with $(2\pi)^4\delta^4(p_f - p_i)$ stripped off | [3.1](lessons/03-01-interaction-picture-s-matrix.md) |
| $\overline{\phi_i\phi_j}$ | a **contraction** — one Feynman propagator | [3.3](lessons/03-03-wicks-theorem.md) |
| $L$, $I$, $V$ | loops, internal lines, vertices of a diagram ($L = I - V + 1$) | [3.4](lessons/03-04-feynman-diagrams-phi4.md) |
| $\ell$ | an unconstrained loop momentum, integrated $\int d^4\ell/(2\pi)^4$ | [3.4](lessons/03-04-feynman-diagrams-phi4.md) |
| $\mathcal{S}$ | symmetry factor of a diagram — divide by it | [3.5](lessons/03-05-feynman-rules-amplitude.md) |
| $s, t, u$ | Mandelstam invariants: CM energy², and the two momentum transfers² | [3.6](lessons/03-06-cross-sections-decay-rates.md) |
| $\sigma$, $\Gamma$ | cross-section (an area) and decay rate (a width; lifetime $\tau = 1/\Gamma$) | [3.6](lessons/03-06-cross-sections-decay-rates.md) |
| $(j_1, j_2)$ | Lorentz-representation label — the field's spin content | [4.1](lessons/04-01-lorentz-group-spinors.md) |
| $\psi_L$, $\psi_R$ | two-component Weyl spinors of definite handedness | [4.1](lessons/04-01-lorentz-group-spinors.md) |
| $\gamma^\mu$, ${\not}p$ | the four $4\times4$ gamma matrices; ${\not}p = \gamma^\mu p_\mu$ | [4.2](lessons/04-02-dirac-equation.md) |
| $\{A, B\}$ | anticommutator $AB + BA$ (Clifford algebra, fermion quantization) | [4.2](lessons/04-02-dirac-equation.md) |
| $\bar\psi$ | Dirac adjoint $\psi^\dagger\gamma^0$ — the thing Lorentz-invariant bilinears are built from | [4.2](lessons/04-02-dirac-equation.md) |
| $\gamma^5$ | chirality matrix $i\gamma^0\gamma^1\gamma^2\gamma^3$; projectors $P_{L,R} = \tfrac12(1 \mp \gamma^5)$ | [4.2](lessons/04-02-dirac-equation.md) |
| $u^s(p)$, $v^s(p)$ | on-shell particle / antiparticle spinors, $s = 1,2$ | [4.3](lessons/04-03-solutions-spin-antiparticles.md) |
| $\xi^s$ | two-component spin basis inside $u, v$ | [4.3](lessons/04-03-solutions-spin-antiparticles.md) |
| $\sigma^\mu$, $\bar\sigma^\mu$ | $(\mathbb{1}, \boldsymbol\sigma)$ and $(\mathbb{1}, -\boldsymbol\sigma)$ — Pauli matrices packaged as four-vectors | [4.3](lessons/04-03-solutions-spin-antiparticles.md) |
| $b_{\mathbf p}^{s\dagger}$ | creates an **antiparticle** (the $a^{s\dagger}$'s partner) | [4.4](lessons/04-04-quantizing-dirac-anticommutators.md) |
| $S_F$ | Dirac propagator, a $4\times4$ matrix | [4.5](lessons/04-05-dirac-propagator.md) |
| $A_\mu$, $F_{\mu\nu}$ | gauge field (not observable) and its field strength (observable: $\mathbf E, \mathbf B$) | [5.1](lessons/05-01-gauge-invariance-photon.md) |
| $D_\mu$ | covariant derivative $\partial_\mu + ieA_\mu$ — the derivative that respects a local phase | [5.1](lessons/05-01-gauge-invariance-photon.md) |
| $\alpha(x)$ | the local gauge parameter (**not** the fine-structure constant) | [5.1](lessons/05-01-gauge-invariance-photon.md) |
| $e$, $\alpha$ | electric charge and the fine-structure constant $e^2/4\pi \approx 1/137$ | [5.2](lessons/05-02-minimal-coupling-qed-lagrangian.md) |
| $\xi$ | gauge-fixing parameter ($1$ = Feynman gauge, $0$ = Landau); drops out of observables | [5.3](lessons/05-03-quantizing-photon-propagator.md) |
| $\epsilon_\mu^\lambda(k)$ | photon polarization vector, transverse ($\epsilon\cdot k = 0$) | [5.3](lessons/05-03-quantizing-photon-propagator.md) |
| $\overline{\lvert\mathcal{M}\rvert^2}$ | spin-averaged squared amplitude (average initial spins, sum final) | [5.6](lessons/05-06-squaring-amplitude-cross-section.md) |
| $\int\mathcal{D}\phi$ | functional integral — a sum over every field configuration | [6.2](lessons/06-02-path-integral-fields-generating-functionals.md) |
| $Z[J]$, $W[J]$ | generating functional of all correlators; $W = -i\log Z$ generates the connected ones | [6.2](lessons/06-02-path-integral-fields-generating-functionals.md) |
| $\delta/\delta J(x)$ | functional derivative, $\delta J(y)/\delta J(x) = \delta^4(x-y)$ | [6.2](lessons/06-02-path-integral-fields-generating-functionals.md) |
| $\Gamma[\phi_{\text{cl}}]$ | effective action (Legendre transform of $W$) — **not** a decay rate | [6.2](lessons/06-02-path-integral-fields-generating-functionals.md) |
| $D$ | superficial degree of divergence of a diagram | [6.4](lessons/06-04-loops-uv-divergences.md) |
| $\Lambda$ | UV momentum cutoff (regulator) | [6.4](lessons/06-04-loops-uv-divergences.md) |
| $\epsilon$ in $d = 4 - \epsilon$ | dimensional-regularization parameter; divergences show up as $1/\epsilon$ poles | [6.5](lessons/06-05-regularization-renormalization.md) |
| $\lambda_0$ vs $\lambda_R$ | bare (unobservable) vs renormalized (measured) parameter; $\delta\lambda$ is the counterterm | [6.5](lessons/06-05-regularization-renormalization.md) |
| $\mu$ | renormalization scale — the energy at which a coupling is *defined* | [6.6](lessons/06-06-running-couplings-renormalization-group.md) |
| $\beta(g)$ | beta function $\mu\,dg/d\mu$ — how fast the coupling runs | [6.6](lessons/06-06-running-couplings-renormalization-group.md) |
| $T^a$, $f^{abc}$ | non-abelian generators and structure constants, $[T^a, T^b] = if^{abc}T^c$ | [6.7](lessons/06-07-taste-non-abelian-gauge-theory.md) |

## Definitions

### Lagrangian density

The theory, in one line: a Lorentz-scalar function of the field and its slopes,
whose spacetime integral is the action. Choosing $\mathcal{L}$ *is* choosing the theory.

$$S = \int d^4x\;\mathcal{L}(\phi, \partial_\mu\phi)$$

*Introduced:* [1.2](lessons/01-02-classical-field-theory-lagrangian.md)

### Euler–Lagrange field equation

Lagrange's equation with $\tfrac{d}{dt}$ promoted to a spacetime divergence — the
field equation you get by extremizing the action.

$$\partial_\mu\!\left(\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\right) - \frac{\partial\mathcal{L}}{\partial\phi} = 0$$

*Introduced:* [1.2](lessons/01-02-classical-field-theory-lagrangian.md)

### Noether current

A continuous symmetry of the action gives a locally conserved flow of "something";
its space integral is a constant of motion. Conservation holds **on-shell** only.

$$j^\mu = \frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\,\delta\phi - K^\mu, \qquad \partial_\mu j^\mu = 0, \qquad Q = \int d^3x\,j^0$$

*Introduced:* [1.3](lessons/01-03-symmetries-noether-for-fields.md)

### Energy–momentum tensor

The Noether current of spacetime translations: $T^{00}$ is energy density, $T^{0i}$
momentum density. Homogeneity of spacetime *is* energy–momentum conservation.

$$T^{\mu\nu} = \frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\partial^\nu\phi - \eta^{\mu\nu}\mathcal{L}, \qquad \partial_\mu T^{\mu\nu} = 0$$

*Introduced:* [1.3](lessons/01-03-symmetries-noether-for-fields.md)

### Klein–Gordon equation

The wave equation with a mass term — the field equation of a free spin-$0$ field,
and the statement "$p^2 = m^2$" in disguise.

$$(\Box + m^2)\phi = 0$$

*Introduced:* [1.4](lessons/01-04-klein-gordon-field.md)

### Mass shell

The surface in momentum space where a **real** particle can live. Off it, momenta
belong to virtual particles on internal lines.

$$p^2 = m^2 \quad\Longleftrightarrow\quad E = \pm\,\omega_{\mathbf p}, \qquad \omega_{\mathbf p} = \sqrt{\mathbf p^2 + m^2}$$

*Introduced:* [1.4](lessons/01-04-klein-gordon-field.md)

### Canonical quantization

Promote field and conjugate momentum to operators and impose the continuum
version of $[q_i, p_j] = i\delta_{ij}$ — at **equal times**.

$$[\phi(\mathbf x), \pi(\mathbf y)] = i\,\delta^3(\mathbf x - \mathbf y), \qquad [\phi,\phi] = [\pi,\pi] = 0$$

*Introduced:* [2.1](lessons/02-01-canonical-quantization-field-operators.md)

### Fock space

The variable-particle-number Hilbert space: the vacuum, plus everything you can
build by stacking creation operators on it.

$$\mathcal{F} = \bigoplus_{n=0}^{\infty}\mathcal{H}^{(n)}, \qquad a_{\mathbf p}|0\rangle = 0, \qquad |\mathbf p\rangle = \sqrt{2\omega_{\mathbf p}}\,a_{\mathbf p}^\dagger|0\rangle$$

*Introduced:* [2.2](lessons/02-02-creation-annihilation-fock-space.md) *(demanded by* [1.1](lessons/01-01-why-qm-relativity-forces-fields.md)*)*

### Normal ordering

Reorder a product so every annihilation operator sits to the right, where it
kills the vacuum — a bookkeeping rule that discards the (unobservable) zero-point
energy. It handles only that constant, not the real loop divergences.

$$:\!a_{\mathbf p}a_{\mathbf q}^\dagger\!: \;=\; a_{\mathbf q}^\dagger a_{\mathbf p}, \qquad \langle 0|\!:\!H\!:\!|0\rangle = 0$$

*Introduced:* [2.3](lessons/02-03-particles-as-excitations-energy-momentum.md)

### Feynman propagator

The amplitude for a quantum to travel between two spacetime points — and the
causal Green's function of the field's wave operator. Every internal line is one.

$$D_F(x-y) = \langle 0|T\phi(x)\phi(y)|0\rangle, \qquad \widetilde D_F(p) = \frac{i}{p^2 - m^2 + i\varepsilon}, \qquad (\Box_x + m^2)D_F = -i\delta^4(x-y)$$

*Introduced:* [2.4](lessons/02-04-feynman-propagator.md)

### Microcausality

Spacelike-separated measurements must not disturb each other, so their operators
commute. It holds because the particle amplitude one way cancels the antiparticle
amplitude the other — which is *why* antiparticles exist with equal mass.

$$[\phi(x), \phi(y)] = 0 \quad\text{for } (x-y)^2 < 0$$

*Introduced:* [2.5](lessons/02-05-causality-microcausality.md)

### S-matrix

The operator carrying free incoming particles in the far past to free outgoing
particles in the far future; $|S_{fi}|^2$ is the transition probability.

$$S = U(+\infty, -\infty), \qquad S = 1 + iT, \qquad \langle f|iT|i\rangle = (2\pi)^4\delta^4(p_f - p_i)\,i\mathcal{M}$$

*Introduced:* [3.1](lessons/03-01-interaction-picture-s-matrix.md)

### Interaction picture

Give the free evolution to the operators and the interaction to the states. The
payoff: interaction-picture fields are **free** fields, so all of Module 2's
machinery survives inside an interacting theory.

$$\mathcal{O}_I(t) = e^{iH_0t}\,\mathcal{O}_S\,e^{-iH_0t}, \qquad i\frac{d}{dt}|\psi\rangle_I = H_{\text{int}}^I(t)|\psi\rangle_I$$

*Introduced:* [3.1](lessons/03-01-interaction-picture-s-matrix.md)

### Unitarity

Something must happen: total probability is conserved, which ties the imaginary
part of a forward amplitude to the total cross-section (optical theorem) and
forces loops to accompany the tree processes they can produce.

$$S^\dagger S = 1 \quad\Longrightarrow\quad \sum_f |S_{fi}|^2 = 1, \qquad 2\,\text{Im}\,T = T^\dagger T$$

*Introduced:* [3.1](lessons/03-01-interaction-picture-s-matrix.md)

### Dyson series

The S-matrix as a time-ordered exponential — perturbation theory, order by order
in the coupling. Time ordering is forced because $H_{\text{int}}$ at different times
doesn't commute.

$$S = T\exp\!\left(-i\int_{-\infty}^{\infty}dt\,H^I_{\text{int}}(t)\right) = T\exp\!\left(i\int d^4x\,\mathcal{L}_{\text{int}}\right)$$

*Introduced:* [3.2](lessons/03-02-dyson-series-time-ordering.md)

### Contraction

Pairing two fields inside a time-ordered product and replacing them by a number:
the Feynman propagator.

$$\overline{\phi(x)\,\phi(y)} = \langle 0|T\phi(x)\phi(y)|0\rangle = D_F(x-y)$$

*Introduced:* [3.3](lessons/03-03-wicks-theorem.md)

### Wick's theorem

Time-ordering equals normal-ordering plus every possible pairing — so a vacuum
expectation value is a pure sum over complete pairings, each a product of
propagators. Operator algebra becomes combinatorics.

$$\langle 0|T\{\phi_1\cdots\phi_n\}|0\rangle = \sum_{\text{complete pairings}}\;\prod_{\text{pairs }(i,j)} D_F(x_i - x_j)$$

*Introduced:* [3.3](lessons/03-03-wicks-theorem.md)

### Feynman diagram

A picture of one Wick contraction pattern: vertices from the interaction,
external lines for real particles, internal lines for propagators (virtual,
off-shell), closed cycles for loop momenta you must integrate.

*Introduced:* [3.4](lessons/03-04-feynman-diagrams-phi4.md)

### Connected diagram

A diagram in which every piece traces back to an external particle. Disconnected
"vacuum bubbles" factor out and cancel against the vacuum normalization, so only
connected diagrams contribute to physical amplitudes.

*Introduced:* [3.4](lessons/03-04-feynman-diagrams-phi4.md)

### Symmetry factor

The residue of the coupling's $1/n!$ that the external-leg attachments don't eat:
the number of ways to permute internal lines and vertices leaving the diagram
unchanged. Divide the diagram by it.

$$\text{tree } \mathcal{S}=1, \quad \text{one-loop bubble } \mathcal{S}=2, \quad \text{tadpole } \mathcal{S}=2, \quad \text{double bubble } \mathcal{S}=8$$

*Introduced:* [3.5](lessons/03-05-feynman-rules-amplitude.md)

### Mandelstam variables

The three Lorentz-invariant ways to combine the momenta of a $2\to2$ process:
$s$ is the squared CM energy (timelike), $t$ and $u$ are squared momentum
transfers (spacelike).

$$s = (p_1+p_2)^2, \qquad t = (p_1-p_3)^2, \qquad u = (p_1-p_4)^2, \qquad s+t+u = \sum_{i=1}^{4} m_i^2$$

*Introduced:* [3.6](lessons/03-06-cross-sections-decay-rates.md)

### Lorentz-invariant phase space

The count of available final states, weighted so the answer is frame-independent:
one factor per outgoing particle, times the conservation delta.

$$d\Pi = (2\pi)^4\delta^4\Big(\textstyle\sum p\Big)\prod_{\text{final}}\frac{d^3p_f}{(2\pi)^3\,2E_f}$$

*Introduced:* [3.6](lessons/03-06-cross-sections-decay-rates.md)

### Lorentz representation $(j_1, j_2)$

Spin is a label, not a spinning ball: the Lorentz algebra splits into two
commuting $su(2)$'s, so a field is classified by a pair of half-integers, with
$(2j_1+1)(2j_2+1)$ components.

$$\mathbf J_\pm = \tfrac12(\mathbf J \pm i\mathbf K), \qquad [J_+^i, J_-^j] = 0$$

*Introduced:* [4.1](lessons/04-01-lorentz-group-spinors.md)

### Weyl spinor

A two-component object in $(\tfrac12,0)$ (left-handed) or $(0,\tfrac12)$
(right-handed) — irreducible spin $\tfrac12$. Transformations use **half angles**,
so a $2\pi$ rotation returns $-\psi$ (the $SL(2,\mathbb{C})$ double cover).

$$\psi \to \exp\!\left(i\boldsymbol\theta\cdot\tfrac{\boldsymbol\sigma}{2} \pm \boldsymbol\eta\cdot\tfrac{\boldsymbol\sigma}{2}\right)\psi, \qquad e^{i\pi\sigma_z} = -\mathbb{1}$$

*Introduced:* [4.1](lessons/04-01-lorentz-group-spinors.md)

### Dirac spinor

Left and right Weyl pieces stacked: four components, the representation a
*massive* spin-$\tfrac12$ particle needs (a mass term couples $L$ to $R$).

$$\psi = \begin{pmatrix}\psi_L\\\psi_R\end{pmatrix} \in \left(\tfrac12,0\right)\oplus\left(0,\tfrac12\right)$$

*Introduced:* [4.1](lessons/04-01-lorentz-group-spinors.md)

### Dirac equation

The first-order "square root" of Klein–Gordon. Demanding that it square to
$(\Box + m^2)$ forces the Clifford algebra, hence matrices, hence four components.

$$(i\gamma^\mu\partial_\mu - m)\psi = 0, \qquad (i{\not}\partial - m)\psi = 0$$

*Introduced:* [4.2](lessons/04-02-dirac-equation.md)

### Clifford algebra

The gamma matrices' defining relation: they anticommute for $\mu \neq \nu$ and
square to $\pm\mathbb{1}$. No numbers satisfy it; $4\times4$ matrices are the
minimum in four dimensions.

$$\{\gamma^\mu, \gamma^\nu\} = 2\eta^{\mu\nu}\mathbb{1}$$

*Introduced:* [4.2](lessons/04-02-dirac-equation.md)

### Dirac adjoint

The bar, not the dagger: $\bar\psi = \psi^\dagger\gamma^0$ is what makes bilinears
Lorentz-covariant, and it gives the Dirac current a **positive** density — the
cure for Klein–Gordon's negative "probability."

$$\bar\psi = \psi^\dagger\gamma^0, \qquad j^\mu = \bar\psi\gamma^\mu\psi, \qquad j^0 = \psi^\dagger\psi \geq 0$$

*Introduced:* [4.2](lessons/04-02-dirac-equation.md)

### Chirality and helicity

**Chirality** is the $\gamma^5$ eigenvalue (Lorentz-invariant, but not conserved
when $m \neq 0$); **helicity** is spin along the direction of motion (conserved,
but frame-dependent for $m \neq 0$). For massless fermions the two coincide.

$$\gamma^5 = i\gamma^0\gamma^1\gamma^2\gamma^3, \qquad P_{L,R} = \tfrac12(1 \mp \gamma^5), \qquad h = \mathbf S\cdot\hat{\mathbf p}$$

*Introduced:* [4.2](lessons/04-02-dirac-equation.md) *and* [4.3](lessons/04-03-solutions-spin-antiparticles.md)

### $u$ and $v$ spinors

The four plane-wave solutions: two spin states of the particle ($u$, positive
frequency) and two of the antiparticle ($v$, negative frequency). A $v$ is **not**
a negative-energy particle.

$$({\not}p - m)u^s(p) = 0, \qquad ({\not}p + m)v^s(p) = 0, \qquad \bar u^s u^{s'} = 2m\delta^{ss'},\ \ \bar v^s v^{s'} = -2m\delta^{ss'}$$

*Introduced:* [4.3](lessons/04-03-solutions-spin-antiparticles.md)

### Spin-statistics theorem

In any Lorentz-invariant, microcausal theory with energy bounded below: integer
spin must be quantized with commutators (bosons), half-integer spin with
anticommutators (fermions). Commutators on the Dirac field make the energy
unbounded below; anticommutators flip the sign and fix it.

$$\{\psi_a(\mathbf x), \psi_b^\dagger(\mathbf y)\} = \delta_{ab}\delta^3(\mathbf x - \mathbf y), \qquad \{b^\dagger, b^\dagger\} = 0 \Rightarrow (b^\dagger)^2 = 0$$

*Introduced:* [4.4](lessons/04-04-quantizing-dirac-anticommutators.md)

### Dirac propagator

The inverse of the Dirac operator: the scalar pole dressed with the spin-carrying
numerator ${\not}p + m$ (which is the particle spin sum).

$$\widetilde S_F(p) = \frac{i({\not}p + m)}{p^2 - m^2 + i\varepsilon} = \frac{i}{{\not}p - m + i\varepsilon}, \qquad (i{\not}\partial_x - m)S_F(x-y) = i\delta^4(x-y)$$

*Introduced:* [4.5](lessons/04-05-dirac-propagator.md)

### Gauge transformation (local $U(1)$)

Let the phase convention vary from point to point. The ordinary derivative
notices and complains; a compensating field $A_\mu$ is what silences it.

$$\psi \to e^{i\alpha(x)}\psi, \qquad A_\mu \to A_\mu - \tfrac1e\partial_\mu\alpha$$

*Introduced:* [5.1](lessons/05-01-gauge-invariance-photon.md)

### Covariant derivative

The derivative that transforms like the field it differentiates — the entire
content of "gauge symmetry dictates the interaction."

$$D_\mu = \partial_\mu + ieA_\mu, \qquad D_\mu\psi \to e^{i\alpha}D_\mu\psi$$

*Introduced:* [5.1](lessons/05-01-gauge-invariance-photon.md)

### Field strength

The gauge-invariant, observable part of $A_\mu$ (the $\mathbf E$ and $\mathbf B$
fields) — and, read geometrically, the curvature of the gauge connection.

$$F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu = -\tfrac{i}{e}[D_\mu, D_\nu]$$

*Introduced:* [5.1](lessons/05-01-gauge-invariance-photon.md)

### Minimal coupling

The prescription $\partial_\mu \to D_\mu$. It writes the interaction for you: the
conserved current coupled to the photon, with one universal charge.

$$\bar\psi(i{\not}D - m)\psi = \bar\psi(i{\not}\partial - m)\psi - e\,\bar\psi\gamma^\mu\psi\,A_\mu$$

*Introduced:* [5.2](lessons/05-02-minimal-coupling-qed-lagrangian.md)

### QED Lagrangian

Free electron plus free photon plus the one forced interaction. No photon mass
term is allowed — it isn't gauge-invariant, so the photon is exactly massless.

$$\mathcal{L}_{\text{QED}} = \bar\psi(i{\not}\partial - m)\psi - \tfrac14 F_{\mu\nu}F^{\mu\nu} - e\bar\psi\gamma^\mu\psi\,A_\mu$$

*Introduced:* [5.2](lessons/05-02-minimal-coupling-qed-lagrangian.md)

### Gauge fixing

The Maxwell kinetic operator has a zero eigenvalue along the gauge direction, so
it can't be inverted. Adding a gauge-fixing term lifts it and yields a propagator;
the parameter $\xi$ is bookkeeping and must cancel from observables.

$$\mathcal{L}_{\text{gf}} = -\frac{1}{2\xi}(\partial_\mu A^\mu)^2, \qquad M^{\mu\nu}k_\nu = (-k^2\eta^{\mu\nu} + k^\mu k^\nu)k_\nu = 0$$

*Introduced:* [5.3](lessons/05-03-quantizing-photon-propagator.md)

### Ward identity

Amplitudes are transverse to the photon momentum. This is current conservation at
the amplitude level: it kills the $k_\mu k_\nu$ part of the propagator, decouples
the unphysical polarizations, and licenses the replacement
$\sum_\lambda\epsilon_\mu\epsilon_\nu^{*} \to -\eta_{\mu\nu}$.

$$k_\mu\mathcal{M}^\mu = 0$$

*Introduced:* [5.3](lessons/05-03-quantizing-photon-propagator.md)

### Casimir's trick

Never write out spinor components: when you sum over spins, the outer products
collapse via the completeness relations, and the whole squared amplitude becomes
a trace of gamma matrices.

$$\sum_{\text{spins}}\big[\bar u(p')\Gamma u(p)\big]\big[\bar u(p')\Gamma' u(p)\big]^{*} = \text{Tr}\big[({\not}p' + m)\Gamma({\not}p + m)\bar\Gamma'\big], \qquad \bar\Gamma' = \gamma^0\Gamma'^\dagger\gamma^0$$

*Introduced:* [5.6](lessons/05-06-squaring-amplitude-cross-section.md)

### Path integral

The amplitude as a sum over histories, each weighted by the phase $e^{iS}$. The
classical path is simply where neighbouring paths stop cancelling.

$$\langle x_f|e^{-iHT}|x_i\rangle = \int\mathcal{D}x(t)\;e^{iS[x]/\hbar}, \qquad \hbar \to 0:\ \frac{\delta S}{\delta x(t)} = 0$$

*Introduced:* [6.1](lessons/06-01-path-integral-quantum-mechanics.md)

### Generating functional

Couple the field to a source $J$; then every time-ordered correlator is a
functional derivative away. One object holds the whole theory.

$$Z[J] = \int\mathcal{D}\phi\;e^{i\left(S[\phi] + \int d^4x\,J\phi\right)}, \qquad \langle 0|T\phi(x_1)\cdots\phi(x_n)|0\rangle = \frac{1}{Z[0]}\prod_k\frac{-i\,\delta}{\delta J(x_k)}\,Z[J]\bigg|_{J=0}$$

*Introduced:* [6.2](lessons/06-02-path-integral-fields-generating-functionals.md)

### Superficial degree of divergence

Power-counting the large-loop-momentum behaviour: measure minus propagators.
$D \geq 0$ diverges ($D = 0$ logarithmically), $D < 0$ converges — *superficially*,
since a divergent subdiagram can still spoil it.

$$D = 4L - 2P_B - P_F$$

*Introduced:* [6.4](lessons/06-04-loops-uv-divergences.md)

### Renormalizable theory

One in which finitely many counterterms absorb every divergence at every order —
equivalently, one whose couplings have mass-dimension $\geq 0$. Negative-dimension
couplings (gravity's $G_N$) need infinitely many inputs and survive only as
*effective* theories below a cutoff.

*Introduced:* [6.4](lessons/06-04-loops-uv-divergences.md) *and* [6.5](lessons/06-05-regularization-renormalization.md)

### Regularization

A temporary device that makes a divergent loop finite so you can see the
divergence: a hard cutoff $\Lambda$ (breaks Lorentz/gauge invariance) or
$d = 4 - \epsilon$ dimensions (keeps them — the modern default). It must vanish
from every physical answer.

*Introduced:* [6.5](lessons/06-05-regularization-renormalization.md)

### Renormalization

Split each unobservable bare parameter into a finite measured part plus a
divergent counterterm chosen to cancel the loop. Nothing is swept away: you are
expressing predictions in terms of quantities you can actually measure.

$$\lambda_0 = \lambda_R + \delta\lambda, \qquad m_0^2 = m_R^2 + \delta m^2, \qquad \phi_0 = \sqrt{Z}\,\phi_R$$

*Introduced:* [6.5](lessons/06-05-regularization-renormalization.md)

### Beta function and running coupling

Physics can't depend on the arbitrary scale $\mu$ at which you defined a coupling,
so the coupling must move when $\mu$ does. That motion is measured, not formal.

$$\beta(g) = \mu\frac{dg}{d\mu}$$

*Introduced:* [6.6](lessons/06-06-running-couplings-renormalization-group.md)

### Asymptotic freedom

A negative beta function: the coupling *shrinks* at high energy. Quarks are
nearly free when probed hard and permanently confined at low energy — one sign,
both phenomena.

*Introduced:* [6.6](lessons/06-06-running-couplings-renormalization-group.md) *(mechanism in* [6.7](lessons/06-07-taste-non-abelian-gauge-theory.md)*)*

### Yang–Mills (non-abelian gauge theory)

Same gauge principle, non-commuting group. The extra term in the field strength
makes the gauge bosons carry the charge they mediate — hence gluon
self-interaction, antiscreening, and confinement.

$$F_{\mu\nu}^a = \partial_\mu A_\nu^a - \partial_\nu A_\mu^a - g\,f^{abc}A_\mu^b A_\nu^c, \qquad D_\mu = \partial_\mu + igA_\mu^aT^a$$

*Introduced:* [6.7](lessons/06-07-taste-non-abelian-gauge-theory.md)

## Formulas and rules

### Mass dimensions in four dimensions

Every term of $\mathcal{L}$ must have dimension $4$, since $S$ is dimensionless.
This one table decides renormalizability.

| Object | Mass dimension |
|---|---|
| $\mathcal{L}$ | $4$ |
| $\partial_\mu$, $p^\mu$, $m$ | $1$ |
| scalar $\phi$, gauge field $A_\mu$ | $1$ |
| Dirac field $\psi$ | $3/2$ |
| $\delta^3(\mathbf x)$, $\delta^4(x)$ | $3$, $4$ |
| $\lambda$ in $\phi^4$, $e$ in QED | $0$ — renormalizable |
| $g_6$ in $\phi^6$, $G_N$ | $-2$ — non-renormalizable |
| cross-section $\sigma$ | $-2$ (an area) |

*From* [2.1](lessons/02-01-canonical-quantization-field-operators.md) *and* [5.2](lessons/05-02-minimal-coupling-qed-lagrangian.md)

### Classical field machinery

$$\pi = \frac{\partial\mathcal{L}}{\partial\dot\phi}, \qquad \mathcal{H} = \pi\dot\phi - \mathcal{L}$$

For the real Klein–Gordon field
$\mathcal{L} = \tfrac12(\partial_\mu\phi)(\partial^\mu\phi) - \tfrac12 m^2\phi^2$:

$$\pi = \dot\phi, \qquad \mathcal{H} = \tfrac12\dot\phi^2 + \tfrac12(\nabla\phi)^2 + \tfrac12 m^2\phi^2$$

Adding $-\tfrac{\lambda}{4!}\phi^4$ gives $(\Box + m^2)\phi = -\tfrac{\lambda}{6}\phi^3$.
The complex field's phase symmetry gives
$j^\mu = i(\phi^{*}\partial^\mu\phi - \phi\,\partial^\mu\phi^{*})$, whose charge is net
particle number — the electric charge once the field is coupled to the photon.
$\mathcal{L}$ is defined only up to a total derivative $\partial_\mu K^\mu$.

*From* [1.2](lessons/01-02-classical-field-theory-lagrangian.md), [1.3](lessons/01-03-symmetries-noether-for-fields.md) *and* [1.4](lessons/01-04-klein-gordon-field.md)

### Free scalar field: modes, algebra, observables

$$\phi(x) = \int\!\frac{d^3p}{(2\pi)^3}\frac{1}{\sqrt{2\omega_{\mathbf p}}}\Big(a_{\mathbf p}e^{-ip\cdot x} + a_{\mathbf p}^\dagger e^{+ip\cdot x}\Big)\bigg|_{p^0 = \omega_{\mathbf p}}$$

$$\pi(x) = \int\!\frac{d^3p}{(2\pi)^3}(-i)\sqrt{\tfrac{\omega_{\mathbf p}}{2}}\Big(a_{\mathbf p}e^{i\mathbf p\cdot\mathbf x} - a_{\mathbf p}^\dagger e^{-i\mathbf p\cdot\mathbf x}\Big)$$

$$[a_{\mathbf p}, a_{\mathbf q}^\dagger] = (2\pi)^3\delta^3(\mathbf p - \mathbf q), \qquad [a_{\mathbf p}, a_{\mathbf q}] = [a_{\mathbf p}^\dagger, a_{\mathbf q}^\dagger] = 0$$

$$H = \int\!\frac{d^3p}{(2\pi)^3}\,\omega_{\mathbf p}\,a_{\mathbf p}^\dagger a_{\mathbf p}, \qquad \mathbf P = \int\!\frac{d^3p}{(2\pi)^3}\,\mathbf p\,a_{\mathbf p}^\dagger a_{\mathbf p}, \qquad N = \int\!\frac{d^3p}{(2\pi)^3}\,a_{\mathbf p}^\dagger a_{\mathbf p}$$

Useful consequences: $[N, a_{\mathbf p}^\dagger] = a_{\mathbf p}^\dagger$,
$[H, a_{\mathbf p}^\dagger] = \omega_{\mathbf p}a_{\mathbf p}^\dagger$, and $[H, N] = 0$ for the
**free** field (an interaction like $\phi^4$ breaks it — that's what scattering is).
The dropped zero-point term is $\tfrac12\omega_{\mathbf p}(2\pi)^3\delta^3(0)$, infinite but
constant; its *variations* are the Casimir effect.

*From* [2.2](lessons/02-02-creation-annihilation-fock-space.md) *and* [2.3](lessons/02-03-particles-as-excitations-energy-momentum.md)

### Perturbation-theory combinatorics

| Quantity | Value |
|---|---|
| Complete pairings of $2k$ fields | $(2k-1)!! = (2k-1)(2k-3)\cdots 1$ — so $1$, $3$, $15$ for $2,4,6$ fields |
| Odd-point function of a free (or $\phi\to-\phi$ symmetric) theory | $0$ — can't pair an odd number |
| Loops of a connected diagram | $L = I - V + 1$ |
| Order in the coupling | one power per vertex |
| Vacuum bubbles | cancel against $\langle 0|S|0\rangle$; draw only connected diagrams |

$$T\{H(t_1)H(t_2)\} = \theta(t_1-t_2)H(t_1)H(t_2) + \theta(t_2-t_1)H(t_2)H(t_1)$$

The $1/n!$ in the Dyson series exactly compensates the $n!$ orderings that $T$
lets contribute over the full integration region.

*From* [3.2](lessons/03-02-dyson-series-time-ordering.md), [3.3](lessons/03-03-wicks-theorem.md) *and* [3.4](lessons/03-04-feynman-diagrams-phi4.md)

### Feynman rules — $\phi^4$ theory

For $\mathcal{L}_{\text{int}} = -\frac{\lambda}{4!}\phi^4$: draw all connected diagrams at
the desired order and multiply.

| Element | Factor |
|---|---|
| Vertex (four lines meet) | $-i\lambda$ |
| Internal line, momentum $p$ | $\dfrac{i}{p^2 - m^2 + i\varepsilon}$ |
| External line | $1$ |
| Each vertex | momentum conservation; one overall $(2\pi)^4\delta^4(p_f - p_i)$ is stripped into $\mathcal{M}$ |
| Each loop | $\displaystyle\int\frac{d^4\ell}{(2\pi)^4}$ |
| Whole diagram | divide by the symmetry factor $\mathcal{S}$ |

Tree $2\to2$: $i\mathcal{M} = -i\lambda$, so $\mathcal{M} = -\lambda$ — momentum-independent,
because a contact interaction has no propagator to carry angle dependence. One
loop: $i\mathcal{M} = \tfrac12(-i\lambda)^2\int\frac{d^4\ell}{(2\pi)^4}\frac{i}{\ell^2-m^2+i\varepsilon}\frac{i}{(k-\ell)^2-m^2+i\varepsilon}$.
For $\phi^3$ ($-\frac{g}{3!}\phi^3$) the vertex is $-ig$ with three lines and tree
$2\to2$ has $s$-, $t$-, $u$-channel diagrams with internal propagators.

*From* [3.5](lessons/03-05-feynman-rules-amplitude.md)

### Amplitude to observable

$$\frac{d\sigma}{d\Omega} = \frac{1}{64\pi^2 s}\,\frac{|\mathbf p_f|}{|\mathbf p_i|}\,|\mathcal{M}|^2 \qquad (\text{CM frame};\ |\mathbf p_f| = |\mathbf p_i| \text{ if elastic})$$

$$\Gamma = \frac{|\mathbf p|}{8\pi m^2}|\mathcal{M}|^2 \qquad (1\to2 \text{ decay; } \tau = 1/\Gamma)$$

Divide by $2$ for **identical** particles in the final state (integrating the full
solid angle double-counts). Worked benchmark: $\phi^4$ tree level gives
$\frac{d\sigma}{d\Omega} = \frac{\lambda^2}{64\pi^2 s}$ and $\sigma = \frac{\lambda^2}{32\pi s}$.
Near a resonance the $s$-channel propagator becomes Breit–Wigner,
$\frac{1}{s - m^2 + im\Gamma}$, giving a peak of width set by $\Gamma$. In the CM frame
$t = -4|\mathbf p|^2\sin^2(\theta/2)$, which is why a $1/t^2$ amplitude produces the
Rutherford $1/\sin^4(\theta/2)$ forward peak.

*From* [3.6](lessons/03-06-cross-sections-decay-rates.md) *and* [5.6](lessons/05-06-squaring-amplitude-cross-section.md)

### Gamma-matrix algebra

$$\{\gamma^\mu,\gamma^\nu\} = 2\eta^{\mu\nu}, \qquad (\gamma^0)^2 = \mathbb{1}, \qquad (\gamma^i)^2 = -\mathbb{1}, \qquad {\not}a{\not}b + {\not}b{\not}a = 2\,a\cdot b$$

$$(\gamma^5)^2 = \mathbb{1}, \qquad \{\gamma^5, \gamma^\mu\} = 0, \qquad {\not}p\,{\not}p = p^2\,\mathbb{1}$$

Dirac representation (one valid choice among many, all similarity-equivalent):

$$\gamma^0 = \begin{pmatrix}\mathbb{1} & 0\\0 & -\mathbb{1}\end{pmatrix}, \qquad \gamma^i = \begin{pmatrix}0 & \sigma^i\\-\sigma^i & 0\end{pmatrix}$$

**Contraction identities in four dimensions** (used constantly when simplifying
traces; the lessons use the second one without stating the family):

$$\gamma^\mu\gamma_\mu = 4\mathbb{1}, \qquad \gamma^\mu{\not}a\gamma_\mu = -2{\not}a, \qquad \gamma^\mu{\not}a{\not}b\gamma_\mu = 4(a\cdot b)\mathbb{1}, \qquad \gamma^\mu{\not}a{\not}b{\not}c\gamma_\mu = -2{\not}c{\not}b{\not}a$$

*From* [4.2](lessons/04-02-dirac-equation.md), [4.3](lessons/04-03-solutions-spin-antiparticles.md) *and* [5.6](lessons/05-06-squaring-amplitude-cross-section.md)

### Trace theorems

$$\text{Tr}[\mathbb{1}] = 4, \qquad \text{Tr}[\text{odd number of }\gamma] = 0, \qquad \text{Tr}[\gamma^\mu\gamma^\nu] = 4\eta^{\mu\nu}, \qquad \text{Tr}[{\not}a{\not}b] = 4(a\cdot b)$$

$$\text{Tr}[\gamma^\mu\gamma^\nu\gamma^\rho\gamma^\sigma] = 4\big(\eta^{\mu\nu}\eta^{\rho\sigma} - \eta^{\mu\rho}\eta^{\nu\sigma} + \eta^{\mu\sigma}\eta^{\nu\rho}\big)$$

$$\text{Tr}[{\not}a{\not}b{\not}c{\not}d] = 4\big[(a\cdot b)(c\cdot d) - (a\cdot c)(b\cdot d) + (a\cdot d)(b\cdot c)\big]$$

With $\gamma^5$ (standard, and needed the moment a weak-interaction-style vertex
appears — not stated in the lessons):

$$\text{Tr}[\gamma^5] = 0, \qquad \text{Tr}[\gamma^\mu\gamma^\nu\gamma^5] = 0, \qquad \text{Tr}[\gamma^\mu\gamma^\nu\gamma^\rho\gamma^\sigma\gamma^5] = -4i\,\varepsilon^{\mu\nu\rho\sigma}$$

Traces are cyclic; use that plus $(\gamma^5)^2 = \mathbb{1}$ to kill the odd ones.

*From* [5.6](lessons/05-06-squaring-amplitude-cross-section.md)

### Spin and polarization sums

$$\sum_{s=1,2} u^s(p)\bar u^s(p) = {\not}p + m, \qquad \sum_{s=1,2} v^s(p)\bar v^s(p) = {\not}p - m$$

$$\sum_\lambda \epsilon_\mu^\lambda(k)\,\epsilon_\nu^{\lambda*}(k) \;\to\; -\eta_{\mu\nu} \qquad (\text{legitimate only via the Ward identity})$$

Explicit spinor (Dirac basis): $u^s(p) = \begin{pmatrix}\sqrt{p\cdot\sigma}\,\xi^s\\\sqrt{p\cdot\bar\sigma}\,\xi^s\end{pmatrix}$
with $\sigma^\mu = (\mathbb{1},\boldsymbol\sigma)$, $\bar\sigma^\mu = (\mathbb{1},-\boldsymbol\sigma)$.
At rest, $u^s = \sqrt{2m}\begin{pmatrix}\xi^s\\0\end{pmatrix}$.

*From* [4.3](lessons/04-03-solutions-spin-antiparticles.md) *and* [5.3](lessons/05-03-quantizing-photon-propagator.md)

### Feynman rules — QED (Feynman gauge)

| Element | Factor |
|---|---|
| Vertex | $-ie\gamma^\mu$ (QED has exactly **one**) |
| Internal electron, momentum $p$ | $\dfrac{i({\not}p + m)}{p^2 - m^2 + i\varepsilon}$ |
| Internal photon, momentum $k$ | $\dfrac{-i\eta_{\mu\nu}}{k^2 + i\varepsilon}$ |
| Incoming electron / outgoing electron | $u^s(p)$ / $\bar u^s(p)$ |
| Incoming positron / outgoing positron | $\bar v^s(p)$ / $v^s(p)$ |
| Incoming photon / outgoing photon | $\epsilon_\mu^\lambda(k)$ / $\epsilon_\mu^{\lambda*}(k)$ |
| Each loop | $\displaystyle\int\frac{d^4\ell}{(2\pi)^4}$ |
| Each **closed fermion loop** | $(-1)$ and a $\text{Tr}[\cdots]$ over its spinor indices |
| Diagrams differing by exchange of identical external fermions | relative $(-1)$ |

Write each fermion line **against its arrow**: outgoing $\bar u$ on the left,
then vertices and propagators, incoming $u$ on the right. General-$\xi$ photon
propagator: $\frac{-i}{k^2+i\varepsilon}\left(\eta_{\mu\nu} - (1-\xi)\frac{k_\mu k_\nu}{k^2}\right)$
($\xi=1$ Feynman, $\xi=0$ Landau). The photon has $4 - 1 - 1 = 2$ physical
transverse polarizations.

*From* [4.5](lessons/04-05-dirac-propagator.md), [5.3](lessons/05-03-quantizing-photon-propagator.md) *and* [5.4](lessons/05-04-qed-feynman-rules.md)

### The worked QED benchmark: $e^-\mu^- \to e^-\mu^-$

One tree diagram ($t$-channel photon exchange, $q = p_1 - p_3$, $q^2 = t$):

$$\mathcal{M} = \frac{e^2}{q^2}\big[\bar u(p_3)\gamma^\mu u(p_1)\big]\big[\bar u(p_4)\gamma_\mu u(p_2)\big]$$

$$\overline{|\mathcal{M}|^2} = \frac{2e^4(s^2 + u^2)}{t^2}, \qquad \frac{d\sigma}{d\Omega} = \frac{e^4(s^2+u^2)}{32\pi^2 s\,t^2} = \frac{\alpha^2(s^2+u^2)}{2s\,t^2} \qquad (m \to 0)$$

The transition current is conserved, $q_\mu[\bar u(p_3)\gamma^\mu u(p_1)] = 0$, which
follows from the Dirac equation and is the Ward identity in action. For
$e^+e^-\to\mu^+\mu^-$ the same skeleton runs in the $s$-channel with $q = p_1+p_2$,
$q^2 = s$, and $\bar v$, $v$ on the annihilating/created pair.

*From* [5.5](lessons/05-05-tree-level-qed-amplitude.md) *and* [5.6](lessons/05-06-squaring-amplitude-cross-section.md)

### Path integral and generating functionals

$$Z_0[J] = Z_0[0]\exp\!\left(-\tfrac{i}{2}\int d^4x\,d^4y\;J(x)\Delta_F(x-y)J(y)\right), \qquad \widetilde\Delta_F(p) = \frac{i}{p^2 - m^2 + i\varepsilon}$$

**Two rules read straight off the Lagrangian:** the propagator is the *inverse of
the quadratic part of the action*; a term $-\frac{g}{n!}\phi^n$ is an $n$-point
vertex $-ig$. Interactions enter as
$Z[J] = e^{iS_{\text{int}}[-i\delta/\delta J]}\,Z_0[J]$.

The finite-dimensional Gaussian this mirrors (worth keeping in view, since the
functional version is defined by analogy to it):

$$\int d^n x\;e^{-\frac12 x^{T}\!Ax\, +\, J^{T}x} = \sqrt{\frac{(2\pi)^n}{\det A}}\;e^{\frac12 J^{T}A^{-1}J}$$

— the "covariance" is the inverse of the quadratic form, exactly as the propagator
is the inverse of the kinetic operator. Wick's theorem is the operator version of
the same Gaussian pairing identity.

*From* [6.2](lessons/06-02-path-integral-fields-generating-functionals.md) *and* [6.3](lessons/06-03-recovering-propagators-feynman-rules.md)

### Divergences, counterterms, and running

| Divergence, in words | What it means physically |
|---|---|
| Zero-point energy $\tfrac12\sum_{\mathbf p}\omega_{\mathbf p}$ | an unobservable constant offset; only its *variation* (Casimir) is measurable — removed by normal ordering |
| Log UV divergence, $D = 0$ ($\phi^4$ vertex, QED vertex/self-energies) | the amplitude depends on unknown short-distance physics only through $\ln\Lambda$ — absorbed into a coupling, and its leftover $\mu$-dependence is the running |
| Power UV divergence, $D > 0$ (e.g. self-energies) | a stronger short-distance sensitivity, absorbed into mass and field-normalization counterterms; symmetry can soften it (gauge invariance forbids a photon mass counterterm) |
| Landau pole (coupling formally diverges at finite energy) | the theory is only *effective*: it needs UV completion above that scale |
| $\Lambda$ or $1/\epsilon$ surviving in a final answer | an error, or a non-renormalizable theory — the regulator must always cancel |

One-loop $\phi^4$: $D = 4L - 2I = 4 - 4 = 0$, so $\mathcal{M} \sim -\lambda_0 + C\lambda_0^2\ln(\Lambda/\mu)$,
cured by $\delta\lambda = C\lambda_R^2\ln(\Lambda/\mu) + \text{finite}$, the finite part
fixed by the renormalization scheme. In $d$ dimensions $D = dL - 2I$, so the fish
is convergent for $d < 4$ — which is exactly why $d = 4 - \epsilon$ works as a regulator.

**Running couplings** (one loop, $\beta = b\,g^3$ integrates to $g^{-2}(\mu) = g^{-2}(\mu_0) - 2b\ln(\mu/\mu_0)$):

| Theory | Beta function | Behaviour |
|---|---|---|
| $\phi^4$ | $\beta(\lambda) = \dfrac{3\lambda^2}{16\pi^2} > 0$ | grows with energy; Landau pole |
| QED | $\beta(e) = \dfrac{e^3}{12\pi^2} > 0$ | screening: $\alpha(0) \approx 1/137 \to \alpha(m_Z) \approx 1/128$ |
| QCD | $\beta(g_s) = -\dfrac{g_s^3}{16\pi^2}\left(11 - \tfrac23 n_f\right) < 0$ for $n_f < 16.5$ | antiscreening: asymptotic freedom above $\Lambda_{\text{QCD}} \approx 200$ MeV, confinement below |

$$\lambda(\mu) = \frac{\lambda(\mu_0)}{1 - \frac{3\lambda(\mu_0)}{16\pi^2}\ln\frac{\mu}{\mu_0}}, \qquad \alpha_s(\mu) = \frac{\alpha_s(\mu_0)}{1 + \frac{\alpha_s(\mu_0)}{2\pi}\left(11 - \frac23 n_f\right)\ln\frac{\mu}{\mu_0}}$$

*From* [2.3](lessons/02-03-particles-as-excitations-energy-momentum.md), [6.4](lessons/06-04-loops-uv-divergences.md), [6.5](lessons/06-05-regularization-renormalization.md) *and* [6.6](lessons/06-06-running-couplings-renormalization-group.md)

### Field content by Lorentz representation

| $(j_1, j_2)$ | Components | Field |
|---|---|---|
| $(0,0)$ | $1$ | scalar (Klein–Gordon; Higgs, pions) |
| $(\tfrac12, 0)$ / $(0, \tfrac12)$ | $2$ each | left- / right-handed Weyl spinor |
| $(\tfrac12,0)\oplus(0,\tfrac12)$ | $4$ | Dirac spinor (the electron) |
| $(\tfrac12,\tfrac12)$ | $4$ | vector $A_\mu$ (the photon: $2$ physical polarizations) |

Massive spin-1 has $3$ polarizations; masslessness is exactly what removes the
third. The Standard Model is $SU(3)_C \times SU(2)_L \times U(1)_Y$ — $8$ gluons
($SU(N)$ has $N^2-1$ generators) plus $W^\pm, Z, \gamma$ — every non-gravitational
force built by minimal coupling, differing only in the group. Non-abelian gauge
fixing in the path integral needs Faddeev–Popov ghosts.

*From* [4.1](lessons/04-01-lorentz-group-spinors.md), [5.3](lessons/05-03-quantizing-photon-propagator.md) *and* [6.7](lessons/06-07-taste-non-abelian-gauge-theory.md)

## Assumed, not taught here

This is a Tier 2 apex course: it leans hard on three prerequisites and borrows
freely from a few neighbours. Each row says where the *derivation* lives.

| Fact | Where it's taught |
|---|---|
| Harmonic-oscillator ladder operators, $[a,a^\dagger]=1$ and the $a^\dagger$-built spectrum | [quantum-mechanics 3.2](../quantum-mechanics/lessons/03-02-harmonic-oscillator-ladder-operators.md) |
| Canonical quantization $[q_i,p_j] = i\delta_{ij}$; commutators and uncertainty | [quantum-mechanics 3.3](../quantum-mechanics/lessons/03-03-commutators-uncertainty.md) |
| Heisenberg picture, $\dot{\mathcal{O}} = i[H,\mathcal{O}]$ | [quantum-mechanics 3.5](../quantum-mechanics/lessons/03-05-heisenberg-picture-ehrenfest.md) |
| Interaction picture and time-dependent perturbation theory | [quantum-mechanics 6.5](../quantum-mechanics/lessons/06-05-time-dependent-perturbation.md) |
| Fermi's golden rule (the non-relativistic ancestor of the rate formulas) | [quantum-mechanics 6.6](../quantum-mechanics/lessons/06-06-fermi-golden-rule-radiation.md) |
| Angular-momentum $su(2)$ algebra and its spin-$j$ representations | [quantum-mechanics 4.2](../quantum-mechanics/lessons/04-02-angular-momentum-algebra.md), [representation-theory 4.4](../representation-theory/lessons/04-04-su2-representations-angular-momentum.md) |
| Pauli matrices $\boldsymbol\sigma$ and spin-$\tfrac12$ states | [quantum-mechanics 4.5](../quantum-mechanics/lessons/04-05-spin-pauli-stern-gerlach.md) |
| $SU(2)$ as the double cover of $SO(3)$ (why $2\pi$ gives $-1$) | [representation-theory 4.3](../representation-theory/lessons/04-03-su2-so3-double-cover.md) |
| Exchange symmetry of identical particles (Bose/Fermi) | [quantum-mechanics 5.1](../quantum-mechanics/lessons/05-01-identical-particles.md) |
| Four-vectors, four-momentum, $E^2 = \mathbf p^2 + m^2$ | [relativity 1.5](../relativity/lessons/01-05-four-vectors-momentum.md) |
| Index notation, the Minkowski metric, raising and lowering | [relativity 2.1](../relativity/lessons/02-01-index-notation-minkowski-metric.md) |
| Lorentz transformations, boosts, rapidity | [relativity 1.2](../relativity/lessons/01-02-lorentz-transformations.md) |
| Spacelike vs timelike separation, light cones, invariant interval | [relativity 1.4](../relativity/lessons/01-04-spacetime-interval-causality.md) |
| Field action and Euler–Lagrange for fields (rederived in [1.2](lessons/01-02-classical-field-theory-lagrangian.md), first built there) | [relativity 3.1](../relativity/lessons/03-01-field-action-euler-lagrange.md), [analytical-mechanics 4.5](../analytical-mechanics/lessons/04-05-classical-fields.md) |
| Noether's theorem, and the stress–energy tensor | [analytical-mechanics 2.2](../analytical-mechanics/lessons/02-02-noethers-theorem.md), [relativity 3.2](../relativity/lessons/03-02-noether-fields.md), [relativity 3.3](../relativity/lessons/03-03-stress-energy-tensor.md) |
| Least action, Lagrangian and Hamiltonian mechanics, Legendre transform | [analytical-mechanics 1.2](../analytical-mechanics/lessons/01-02-least-action-lagrange.md), [analytical-mechanics 3.1](../analytical-mechanics/lessons/03-01-legendre-hamiltons-equations.md) |
| Poisson brackets (what commutators quantize) | [analytical-mechanics 3.3](../analytical-mechanics/lessons/03-03-poisson-brackets.md) |
| $F_{\mu\nu}$, $-\tfrac14F^2$, and Maxwell as a classical field theory | [relativity 3.5](../relativity/lessons/03-05-em-field-theory.md), [relativity 3.6](../relativity/lessons/03-06-em-lagrangian-stress-energy.md), [em-refresher 4.1](../em-refresher/lessons/04-01-maxwells-equations.md) |
| Dirac delta, Fourier transforms, and Green's functions | [mathematical-methods-physics 4.2](../mathematical-methods-physics/lessons/04-02-dirac-delta-distributions.md), [mathematical-methods-physics 4.1](../mathematical-methods-physics/lessons/04-01-fourier-series-transform.md), [mathematical-methods-physics 4.4](../mathematical-methods-physics/lessons/04-04-greens-functions.md) |
| Contour integration and residues (how the $p^0$ integral in $D_F$ is done) | [complex-analysis 6.1](../complex-analysis/lessons/06-01-residue-theorem.md), [mathematical-methods-physics 2.4](../mathematical-methods-physics/lessons/02-04-real-integrals-by-residues.md) |
| A singular (zero-eigenvalue) operator has no inverse — the gauge-fixing obstruction | [linalg-refresher 3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md), [linalg-refresher 2.2](../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md) |
| Partition function and the Boltzmann weight (the Euclidean path integral's twin) | [stat-mech 3.2](../stat-mech/lessons/03-02-partition-function.md) |
| Fermi–Dirac vs Bose–Einstein occupation (statistics downstream of spin-statistics) | [stat-mech 4.2](../stat-mech/lessons/04-02-bose-einstein-fermi-dirac.md) |
| Wilson's renormalization group and critical phenomena | [stat-mech 5.5](../stat-mech/lessons/05-05-renormalization-group.md) |
| Connections, curvature as $[\nabla_\mu,\nabla_\nu]$, fiber bundles | [differential-geometry 5.4](../differential-geometry/lessons/05-04-fiber-bundles-connections.md), [differential-geometry 4.4](../differential-geometry/lessons/04-04-riemann-curvature-tensor.md) |
| $SU(3)$, structure constants, roots and weights | [representation-theory 4.6](../representation-theory/lessons/04-06-roots-weights-su3.md) |

Two things this course uses but *nothing* in the library derives, so they are
stated on this card and nowhere else: the Gaussian integral with a source (in
**Path integral and generating functionals** above) and the gamma-matrix
contraction and $\gamma^5$ trace identities (in **Gamma-matrix algebra** and
**Trace theorems**).

## Pitfalls

### Conventions and bookkeeping

- Mostly-minus vs mostly-plus flips signs everywhere; pick Peskin's $(+,-,-,-)$ and never mix sources mid-calculation. *([1.2](lessons/01-02-classical-field-theory-lagrangian.md))*
- $\mathcal{L}$ is not the energy — the energy density is $\mathcal{H} = \pi\dot\phi - \mathcal{L}$. *([1.2](lessons/01-02-classical-field-theory-lagrangian.md))*
- Dropping the $(2\pi)^3$ or $\sqrt{2\omega_{\mathbf p}}$ factors silently misnormalizes every cross-section; the $2E$'s are what make phase space Lorentz-invariant. *([2.2](lessons/02-02-creation-annihilation-fock-space.md), [3.6](lessons/03-06-cross-sections-decay-rates.md))*
- $S_{fi}$, the delta function, and $\mathcal{M}$ are three different objects: $\langle f|iT|i\rangle = (2\pi)^4\delta^4(p_f-p_i)\,i\mathcal{M}$. *([3.1](lessons/03-01-interaction-picture-s-matrix.md))*
- Track the $i$'s: vertex $-i\lambda$, propagator $+i/(p^2-m^2+i\varepsilon)$. A dropped $i$ or sign wrecks interference. *([3.5](lessons/03-05-feynman-rules-amplitude.md))*
- Say which $s,t,u$ you mean, and don't confuse $\sqrt{s}$ (CM energy) with $s$. *([3.6](lessons/03-06-cross-sections-decay-rates.md))*

### Fields, states, and particles

- A field is an **operator**, not a wavefunction; $a_{\mathbf p}^\dagger$ is an operator, the *state* is $a_{\mathbf p}^\dagger|0\rangle$. This operator-vs-state distinction is the pivot of the whole course. *([1.1](lessons/01-01-why-qm-relativity-forces-fields.md), [2.2](lessons/02-02-creation-annihilation-fock-space.md))*
- $j^0$ for Klein–Gordon is a **charge** density (may be negative), not a probability density — the single-particle reading is what fails, not the equation. *([1.4](lessons/01-04-klein-gordon-field.md))*
- Negative-energy solutions can't be discarded (a second-order equation needs both) and mustn't be read as negative energy: quantized, they *create antiparticles* with positive energy. *([1.4](lessons/01-04-klein-gordon-field.md), [4.3](lessons/04-03-solutions-spin-antiparticles.md))*
- Antiparticles are not optional decoration — causality forces them, with equal mass. *([1.1](lessons/01-01-why-qm-relativity-forces-fields.md), [2.5](lessons/02-05-causality-microcausality.md))*
- Particle number is not conserved: $[H_{\text{int}}, N] \neq 0$ is exactly what scattering is. *([2.3](lessons/02-03-particles-as-excitations-energy-momentum.md))*
- Spin is a representation label, not a spinning ball, and the $(\tfrac12,0)\oplus(0,\tfrac12)$ doubling (handedness) is a *different* doubling from particle/antiparticle. *([4.1](lessons/04-01-lorentz-group-spinors.md))*

### Quantization and statistics

- Canonical commutators are imposed at **equal times** only; the unequal-time commutator is dynamics, and its vanishing at spacelike separation is a derived result, not an input. *([2.1](lessons/02-01-canonical-quantization-field-operators.md), [2.5](lessons/02-05-causality-microcausality.md))*
- Ordering matters: $aa^\dagger \neq a^\dagger a$, and the difference *is* the zero-point energy. *([2.3](lessons/02-03-particles-as-excitations-energy-momentum.md))*
- Normal ordering removes only the vacuum constant — it is not renormalization. *([2.3](lessons/02-03-particles-as-excitations-energy-momentum.md))*
- Quantizing the Dirac field with commutators gives energy unbounded below; half-integer spin *requires* anticommutators. Pauli exclusion is then a consequence, not a separate postulate. *([2.1](lessons/02-01-canonical-quantization-field-operators.md), [4.4](lessons/04-04-quantizing-dirac-anticommutators.md))*

### Propagators and causality

- It's the **commutator**, not the propagator, that vanishes outside the light cone; $D_F$ is nonzero at spacelike separation and that's fine. *([2.5](lessons/02-05-causality-microcausality.md))*
- Without the $T$, $\langle 0|\phi(x)\phi(y)|0\rangle$ is not the propagator and is not the KG Green's function. *([2.4](lessons/02-04-feynman-propagator.md))*
- The $+i\varepsilon$ is not decoration: change it and you get the retarded or advanced Green's function instead of the causal one. *([2.4](lessons/02-04-feynman-propagator.md))*
- Propagators live **off** the mass shell — that's the point of internal lines; the pole only marks where a real particle would appear. *([2.4](lessons/02-04-feynman-propagator.md))*

### Diagrams and amplitudes

- Time-ordering is not optional in the Dyson series, and neither is the $1/n!$ that compensates the $n!$ orderings. *([3.2](lessons/03-02-dyson-series-time-ordering.md))*
- The perturbation series is **asymptotic**, not convergent — excellent for $\alpha \approx 1/137$, useless for strongly coupled QCD. *([3.2](lessons/03-02-dyson-series-time-ordering.md))*
- Wick contractions inside $T\{\cdots\}$ give the *Feynman* propagator; a normal-ordered or equal-time product is a different two-point function. *([3.3](lessons/03-03-wicks-theorem.md))*
- The symmetry factor is the classic $\phi^4$ error — when unsure, go back to the Wick combinatorics, which generate $\mathcal{S}$ automatically. *([3.3](lessons/03-03-wicks-theorem.md), [3.5](lessons/03-05-feynman-rules-amplitude.md))*
- $\phi^4$'s tree $2\to2$ is a *contact* vertex with no internal line (unlike $\phi^3$'s $s,t,u$ channels), and disconnected vacuum bubbles never contribute. *([3.4](lessons/03-04-feynman-diagrams-phi4.md))*
- External momenta are fixed and on-shell; only one momentum *per loop* is integrated. *([3.5](lessons/03-05-feynman-rules-amplitude.md))*
- Identical final-state particles are double-counted over the full solid angle — the missing factor $\tfrac12$ is the difference between $\frac{\lambda^2}{16\pi s}$ and the correct $\frac{\lambda^2}{32\pi s}$. *([3.6](lessons/03-06-cross-sections-decay-rates.md))*

### Spinors, gammas, and fermion signs

- The Clifford algebra has no solution in numbers — gammas must be matrices, minimum $4\times4$, which is *why* $\psi$ has four components. *([4.2](lessons/04-02-dirac-equation.md))*
- Bilinears use $\bar\psi = \psi^\dagger\gamma^0$, not $\psi^\dagger$; the gamma representation is a choice, and physics can't depend on it. *([4.2](lessons/04-02-dirac-equation.md))*
- The spin sums differ by a sign: $\sum u\bar u = {\not}p + m$ but $\sum v\bar v = {\not}p - m$. *([4.3](lessons/04-03-solutions-spin-antiparticles.md))*
- Chirality and helicity coincide only for massless fermions — keep them apart when $m \neq 0$. *([4.3](lessons/04-03-solutions-spin-antiparticles.md))*
- The propagator numerator ${\not}p + m$ is a matrix carrying spinor indices, not a scalar factor, and fermion lines are directed: read them against the arrow, $\bar u \cdots u$. *([4.5](lessons/04-05-dirac-propagator.md), [5.4](lessons/05-04-qed-feynman-rules.md))*
- $(-1)$ per closed fermion loop and a relative $(-1)$ between diagrams exchanging identical external fermions are mandatory — dropping them breaks gauge invariance and the cross-section. *([4.5](lessons/04-05-dirac-propagator.md), [5.4](lessons/05-04-qed-feynman-rules.md))*
- Antiparticle external factors run "backwards": incoming positron $\bar v$, outgoing positron $v$. *([5.4](lessons/05-04-qed-feynman-rules.md))*
- Never sum spins component by component — recognize the $\sum u\bar u$ pattern and go straight to a trace; and keep mass terms consistently (the clean $s^2+u^2$ result is the massless limit). *([5.6](lessons/05-06-squaring-amplitude-cross-section.md))*

### Gauge theory

- Once you demand local invariance the gauge field is *forced*; and gauge symmetry is a **redundancy** of description, not a symmetry relating distinct states. *([5.1](lessons/05-01-gauge-invariance-photon.md))*
- $A_\mu$ is not observable; $F_{\mu\nu}$ is. *([5.1](lessons/05-01-gauge-invariance-photon.md))*
- Sign conventions for $D_\mu$ and for the electron's charge differ between books — fix one and check the physics (the sign of the Coulomb force) at the end. *([5.2](lessons/05-02-minimal-coupling-qed-lagrangian.md))*
- The photon propagator has $k^2$, not $k^2 - m^2$: a photon mass term isn't gauge-invariant, and masslessness is what gives the $1/r$ Coulomb tail and only $2$ polarizations. *([5.1](lessons/05-01-gauge-invariance-photon.md), [5.3](lessons/05-03-quantizing-photon-propagator.md))*
- $\xi$ is bookkeeping: if a cross-section depends on it, you erred. Likewise, using all four photon polarizations as physical is wrong — the Ward identity is what licenses $\sum\epsilon\epsilon^{*}\to-\eta_{\mu\nu}$. *([5.3](lessons/05-03-quantizing-photon-propagator.md), [5.6](lessons/05-06-squaring-amplitude-cross-section.md))*
- For distinct particles ($e^-\mu^-$) there is exactly one tree diagram — no annihilation channel, no exchange diagram; don't invent extra ones. *([5.5](lessons/05-05-tree-level-qed-amplitude.md))*
- The photon does **not** self-interact ($U(1)$ is abelian, $f^{abc}=0$); gluon self-interaction is the non-abelian feature that drives everything in QCD. *([6.7](lessons/06-07-taste-non-abelian-gauge-theory.md))*

### Path integral, loops, and renormalization

- Paths are integration variables, not trajectories the particle takes, and $\int\mathcal{D}x$ is a formal (time-sliced or lattice) object, not an ordinary integral. The stationary path is stationary, not necessarily minimal. *([6.1](lessons/06-01-path-integral-quantum-mechanics.md))*
- Divide by $Z[0]$ (it removes vacuum bubbles), and keep $Z[J]$ (all correlators) distinct from $W[J]$ (connected only). *([6.2](lessons/06-02-path-integral-fields-generating-functionals.md))*
- The path integral gives the *same* physics as canonical quantization — its value is practical. A degenerate kinetic operator (gauge fields) simply cannot be inverted until you gauge-fix. *([6.3](lessons/06-03-recovering-propagators-feynman-rules.md))*
- $D$ is only a *superficial* count: a diagram with $D<0$ can still diverge through a divergent subdiagram, and symmetries can make the true divergence milder than $D$ suggests. *([6.4](lessons/06-04-loops-uv-divergences.md))*
- A divergent loop means the theory is incomplete at short distances, not wrong; renormalization is not a trick — the bare parameters were never measurable. *([6.4](lessons/06-04-loops-uv-divergences.md), [6.5](lessons/06-05-regularization-renormalization.md))*
- The regulator must drop out; not every theory is renormalizable, and non-renormalizable ones still work as effective theories below a cutoff. *([6.5](lessons/06-05-regularization-renormalization.md))*
- The running coupling is measured physics, not an artifact — but don't extrapolate one-loop running naively to a Landau pole. "What is $\alpha$?" is incomplete without "at what scale?". *([6.6](lessons/06-06-running-couplings-renormalization-group.md))*
- Non-abelian theories are not QED with extra indices: confinement is non-perturbative and unproven, gauge fixing needs ghosts, and gravity is still outside the whole framework. *([6.7](lessons/06-07-taste-non-abelian-gauge-theory.md))*
