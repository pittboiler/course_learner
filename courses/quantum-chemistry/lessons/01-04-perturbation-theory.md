# Quantum Chemistry · Lesson 1.4: Perturbation Theory

> ⏱ ~15 min · Module 1: From Atoms to Molecules · Builds on: [1.3 Variational principle](01-03-variational-principle.md), [1.1 Quantum toolkit refreshed](01-01-quantum-toolkit-refreshed.md) · Unlocks: [1.5 Born–Oppenheimer approximation](01-05-born-oppenheimer-approximation.md)

## Why this matters

Almost no real molecule has a Schrödinger equation you can solve exactly. But often a molecule is *nearly* something you can solve — an electron in a field is nearly a free hydrogen atom, two interacting electrons are nearly two independent ones. **Perturbation theory** turns "nearly solvable" into a systematic set of corrections: keep the exact solution you have, and add the small extra piece order by order. In [1.3](01-03-variational-principle.md) the variational principle gave you an upper bound by optimizing a guess; perturbation theory is its complement — it needs no optimization, just a small knob $\lambda$ and some bookkeeping. It is also the literal skeleton of **MP2** ([3.3](03-03-moller-plesset-mp2.md)), the workhorse method for electron correlation: MP2's famous energy formula is nothing but the second-order result you'll derive here, applied to the electron–electron repulsion.

## The idea

Suppose your Hamiltonian splits into a part you've already solved and a small nuisance term:

$$\hat H = \hat H^{(0)} + \lambda\hat H',$$

where you know every eigenstate $|\psi_n^{(0)}\rangle$ and energy $E_n^{(0)}$ of $\hat H^{(0)}$, and $\lambda\hat H'$ is a *small* perturbation ($\lambda$ is a dial from 0 to 1 that tracks "how much perturbation"). The bet is simple: if the extra term is small, the true answer is close to the known one, and the gap can be written as a power series in $\lambda$ —

$$E_n = E_n^{(0)} + \lambda E_n^{(1)} + \lambda^2 E_n^{(2)} + \cdots$$

Two intuitions carry the whole lesson. **First order** asks: *without changing the state at all, how much energy does the new term add?* Answer: just its average in the state you already have. **Second order** asks: *the perturbation nudges the state, blending in a little of every other state — what does that blending buy you?* Answer: each neighbouring state $k$ gets mixed in by an amount set by how strongly $\hat H'$ couples $n$ to $k$, divided by how far apart they sit in energy. Close neighbours mix a lot; distant ones barely register. And that mixing *always lowers the ground state* — nearby states push it down, like two energy levels repelling each other.

## The formal version

Plug the series for both energy and state into $\hat H|\psi_n\rangle = E_n|\psi_n\rangle$ and demand it hold at each power of $\lambda$ separately (**Rayleigh–Schrödinger** perturbation theory). Write $H'_{kn} \equiv \langle\psi_k^{(0)}|\hat H'|\psi_n^{(0)}\rangle$ for the **coupling matrix element** between unperturbed states $k$ and $n$. Assume the levels are **non-degenerate** ($E_n^{(0)}\neq E_k^{(0)}$ for $k\neq n$). The results:

**First-order energy.**

$$\boxed{\,E_n^{(1)} = \langle\psi_n^{(0)}|\hat H'|\psi_n^{(0)}\rangle = H'_{nn}\,}$$

*In words: the leading correction is just the expectation value of the perturbation in the state you already have* — you don't even need to know how the state changes.

**First-order wavefunction.**

$$|\psi_n^{(1)}\rangle = \sum_{k\neq n}\frac{H'_{kn}}{E_n^{(0)}-E_k^{(0)}}\,|\psi_k^{(0)}\rangle$$

*In words: the perturbation mixes other unperturbed states into $n$, each weighted by its coupling $H'_{kn}$ over its energy gap to $n$.* Big coupling and small gap $\Rightarrow$ lots of mixing.

**Second-order energy.**

$$\boxed{\,E_n^{(2)} = \sum_{k\neq n}\frac{|H'_{kn}|^2}{E_n^{(0)}-E_k^{(0)}}\,}$$

*In words: sum over all other states the squared coupling divided by the energy gap.* For the **ground state** every other state lies *above* it, so every denominator $E_0^{(0)}-E_k^{(0)}$ is negative while every numerator $|H'_{k0}|^2$ is positive — so $E_0^{(2)}\le 0$ **always lowers the ground-state energy**. Geometrically each excited state "repels" the ground state downward (and, symmetrically, the ground state pushes them up): **level repulsion**. This exact structure — a sum over excitations of (coupling)²/(energy gap) — is what MP2 ([3.3](03-03-moller-plesset-mp2.md)) evaluates for the correlation energy.

**When to trust it.** The series converges fast when the perturbation is small *relative to the level spacing* — precisely, when $|H'_{kn}| \ll |E_n^{(0)}-E_k^{(0)}|$ for the states that couple. Small coupling, well-separated levels: two or three orders nail the answer.

**Where it fails: near-degeneracy.** If two unperturbed levels are close, $E_n^{(0)}-E_k^{(0)}\to 0$, the denominator blows up, and a single term of $E_n^{(2)}$ diverges — the "small correction" is no longer small and the expansion is worthless. The fix is **degenerate perturbation theory**: for the (near-)degenerate group, don't expand — instead diagonalize $\hat H'$ *within* that subspace directly (a small secular problem, exactly the [1.3](01-03-variational-principle.md) secular-determinant machinery), which mixes the close states by finite amounts and lifts the degeneracy. This breakdown is the quantum-chemistry phenomenon of **static (near-degeneracy) correlation** — when several configurations are comparably important, single-reference perturbation theory fails and you need a variational/CI treatment ([3.2](03-02-configuration-interaction.md), [3.1](03-01-correlation-problem.md)).

## Picture

![Energy-level diagram: blue unperturbed levels on the left with a gap ΔE; a coral mixing arrow between them weighted by 1/ΔE; coral perturbed levels on the right showing the lower level pushed down and the upper level pushed up (second-order level repulsion)](assets/01-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — a first-order shift).** Take a particle in a 1-D box of width $L$ (walls at $0$ and $L$), whose exact states are $\psi_n^{(0)}(x)=\sqrt{2/L}\,\sin(n\pi x/L)$ with $E_n^{(0)}=n^2\pi^2\hbar^2/2mL^2$ (from [1.1](01-01-quantum-toolkit-refreshed.md); also the physical-chemistry box model in [molecular energy levels](../../physical-chemistry/lessons/04-03-molecular-energy-levels-box-oscillator-rotor.md)). Now raise the floor of the *left half* by a constant $V_0$:

$$\hat H'(x) = \begin{cases} V_0, & 0\le x\le L/2 \\ 0, & L/2 < x \le L.\end{cases}$$

The first-order shift of the ground state is the average of $\hat H'$ in $\psi_1^{(0)}$:

$$E_1^{(1)} = \int_0^{L/2} V_0\,\frac{2}{L}\sin^2\!\Big(\frac{\pi x}{L}\Big)\,dx = \frac{2V_0}{L}\int_0^{L/2}\sin^2\!\Big(\frac{\pi x}{L}\Big)\,dx.$$

Use $\sin^2\theta=\tfrac12(1-\cos 2\theta)$:

$$\int_0^{L/2}\sin^2\!\Big(\frac{\pi x}{L}\Big)dx = \Big[\frac{x}{2}-\frac{L}{4\pi}\sin\!\Big(\frac{2\pi x}{L}\Big)\Big]_0^{L/2} = \frac{L}{4}-\frac{L}{4\pi}\underbrace{\sin\pi}_{=0} = \frac{L}{4}.$$

So $E_1^{(1)} = \dfrac{2V_0}{L}\cdot\dfrac{L}{4} = \dfrac{V_0}{2}$. **Intuition check:** the ground state is symmetric about the box center, so exactly half its probability sits in the left half — it feels half of $V_0$. No integral needed to guess the answer, only to confirm it.

**Example 2 (why you'd care — second order, and it's exact).** A charged harmonic oscillator (charge $q$, frequency $\omega$) in a uniform electric field $\mathcal E$. The unperturbed Hamiltonian is $\hat H^{(0)}=\hat p^2/2m+\tfrac12 m\omega^2\hat x^2$ with $E_n^{(0)}=\hbar\omega(n+\tfrac12)$; the field adds $\hat H' = -q\mathcal E\,\hat x$.

*First order* vanishes by symmetry: $E_0^{(1)}=-q\mathcal E\langle 0|\hat x|0\rangle = 0$, since $\langle 0|\hat x|0\rangle=0$ (the oscillator ground state is even, $\hat x$ is odd). A uniform field gives no first-order shift.

*Second order.* The position operator connects $|0\rangle$ only to $|1\rangle$: using $\langle 1|\hat x|0\rangle=\sqrt{\hbar/2m\omega}$ (the standard ladder-operator matrix element from [1.1](01-01-quantum-toolkit-refreshed.md)), the only nonzero coupling is $H'_{10}=-q\mathcal E\sqrt{\hbar/2m\omega}$, with gap $E_0^{(0)}-E_1^{(0)}=-\hbar\omega$:

$$E_0^{(2)} = \frac{|H'_{10}|^2}{E_0^{(0)}-E_1^{(0)}} = \frac{q^2\mathcal E^2\,(\hbar/2m\omega)}{-\hbar\omega} = -\frac{q^2\mathcal E^2}{2m\omega^2}.$$

Negative, as promised — the field lowers the ground state. And here you can check it *exactly*: completing the square, $\tfrac12 m\omega^2 x^2 - q\mathcal E x = \tfrac12 m\omega^2\big(x-\tfrac{q\mathcal E}{m\omega^2}\big)^2 - \tfrac{q^2\mathcal E^2}{2m\omega^2}$ — a shifted oscillator with its floor dropped by exactly $q^2\mathcal E^2/2m\omega^2$. Second-order perturbation theory reproduces the exact shift because the perturbation is linear (all higher orders vanish). The quantity $\alpha = q^2/m\omega^2$ read off here is the oscillator's **polarizability** — the same second-order response that describes how molecules polarize in a field.

## Watch out

- **You might think you need the corrected wavefunction to get the first-order energy.** You don't — $E_n^{(1)}=\langle\psi_n^{(0)}|\hat H'|\psi_n^{(0)}\rangle$ uses only the unperturbed state. The *state* correction is one order higher than the *energy* correction it produces (this is the variational "$2n+1$" theorem in disguise).
- **You might expect a first-order shift for every perturbation.** If $\hat H'$ has the wrong symmetry, $H'_{nn}=0$ and the leading effect is second order — as with the uniform field on the oscillator above. "No first-order term" does not mean "no effect."
- **You might read a big second-order correction as high accuracy.** The opposite: a large $|E_n^{(2)}|$ usually means a small denominator (near-degeneracy), which is exactly where the series is breaking down. Trust perturbation theory when the corrections are *shrinking* fast, not when order-two is huge.

## One-liner

> First order is the perturbation's average in the state you have; second order sums (coupling)²/(energy gap) over all other states, always dragging the ground state down — and it collapses when two levels get too close.

## Problems

**P1 (🟢)** For the particle in a box of Example 1, put the constant bump $V_0$ over the *middle third* of the box, $L/3 \le x \le 2L/3$, instead of the left half. Compute the first-order shift $E_1^{(1)}$ of the ground state. (Hint: same integral, new limits; you'll need $\sin(4\pi/3)$ and $\sin(2\pi/3)$.)

**P2 (🟡)** A two-level system has unperturbed energies $E_1^{(0)}=0$ and $E_2^{(0)}=4$ (in eV), with a perturbation whose only coupling is $H'_{12}=H'_{21}=0.5$ eV (and $H'_{11}=H'_{22}=0$). Compute the first- and second-order corrections to the lower level $E_1$, give the perturbed energy through second order, and say in one sentence what the sign of $E_1^{(2)}$ tells you.

**P3 (🔴)** Keep the two-level model of P2 but shrink the gap: let $E_2^{(0)}=\Delta$ with the same coupling $H'_{12}=0.5$ eV. (a) Write $E_1^{(2)}$ as a function of $\Delta$ and show it diverges as $\Delta\to 0$. (b) This model is exactly solvable — diagonalize $\begin{pmatrix}0 & 0.5\\ 0.5 & \Delta\end{pmatrix}$ for the lower eigenvalue and show it stays finite as $\Delta\to 0$. (c) In one or two sentences, say what perturbation theory got wrong and what you'd do instead, and name the quantum-chemistry phenomenon this represents.

<details>
<summary>Solutions</summary>

**P1** Same setup as Example 1 with limits $L/3$ to $2L/3$:

$$E_1^{(1)} = \frac{2V_0}{L}\int_{L/3}^{2L/3}\sin^2\!\Big(\frac{\pi x}{L}\Big)dx = \frac{2V_0}{L}\Big[\frac{x}{2}-\frac{L}{4\pi}\sin\!\Big(\frac{2\pi x}{L}\Big)\Big]_{L/3}^{2L/3}.$$

The $x/2$ piece gives $\tfrac12(2L/3 - L/3)=L/6$. The sine piece: at $x=2L/3$, $\sin(4\pi/3)=-\tfrac{\sqrt3}{2}$; at $x=L/3$, $\sin(2\pi/3)=+\tfrac{\sqrt3}{2}$. So

$$-\frac{L}{4\pi}\Big[\sin\tfrac{4\pi}{3}-\sin\tfrac{2\pi}{3}\Big] = -\frac{L}{4\pi}\Big[-\tfrac{\sqrt3}{2}-\tfrac{\sqrt3}{2}\Big] = -\frac{L}{4\pi}\big(-\sqrt3\big) = \frac{\sqrt3\,L}{4\pi}.$$

Therefore

$$E_1^{(1)} = \frac{2V_0}{L}\Big(\frac{L}{6}+\frac{\sqrt3 L}{4\pi}\Big) = V_0\Big(\frac13 + \frac{\sqrt3}{2\pi}\Big) \approx V_0(0.333+0.276) = 0.609\,V_0.$$

*Check.* The middle third is where the ground state's probability is densest (it peaks at the center), so it should feel *more* than a flat one-third of $V_0$ — and $0.609 > 1/3$. ✓

**P2** First order: $E_1^{(1)}=H'_{11}=0$. Second order, one term:

$$E_1^{(2)} = \frac{|H'_{21}|^2}{E_1^{(0)}-E_2^{(0)}} = \frac{(0.5)^2}{0-4} = \frac{0.25}{-4} = -0.0625\ \text{eV}.$$

Through second order, $E_1 \approx 0 + 0 - 0.0625 = -0.0625$ eV. The **negative** sign means the upper level pushes the lower one *down* — level repulsion; the ground state is stabilized by mixing with the excited state.

*Check.* Exact lower eigenvalue of $\begin{pmatrix}0&0.5\\0.5&4\end{pmatrix}$ is $2-\sqrt{4+0.25}=2-2.0616=-0.0616$ eV; the second-order estimate $-0.0625$ is within 2%, as expected when the coupling ($0.5$) is small next to the gap ($4$). ✓

**P3** (a) With $E_1^{(0)}=0$, $E_2^{(0)}=\Delta$:

$$E_1^{(2)} = \frac{(0.5)^2}{0-\Delta} = -\frac{0.25}{\Delta},$$

which $\to -\infty$ as $\Delta\to 0$: a single "correction" swamps the unperturbed energy — the series has broken down.

(b) Eigenvalues of $\begin{pmatrix}0 & 0.5\\ 0.5 & \Delta\end{pmatrix}$ solve $\lambda^2 - \Delta\lambda - 0.25 = 0$, so

$$\lambda_\pm = \frac{\Delta \pm \sqrt{\Delta^2 + 1}}{2}, \qquad \lambda_- = \frac{\Delta - \sqrt{\Delta^2+1}}{2}.$$

As $\Delta\to 0$, $\lambda_- \to -\tfrac12 = -0.5$ eV — perfectly finite. The true level is lowered by the full coupling $|H'_{12}|$, not by the divergent $-0.25/\Delta$.

(c) Perturbation theory assumed the state barely changes, but at $\Delta=0$ the two states are degenerate and mix by an *order-one* amount, not a small one — so the power series in $\lambda$ is invalid. The fix is **degenerate perturbation theory**: diagonalize $\hat H'$ within the degenerate pair directly (exactly what the $2\times2$ eigenproblem in (b) does), which lifts the degeneracy and gives finite splittings. This is **static (near-degeneracy) correlation** — when several configurations are comparably important a single-reference expansion like MP2 fails, and you need a variational/CI treatment ([3.1](03-01-correlation-problem.md), [3.2](03-02-configuration-interaction.md)).

</details>

## Flashback

**From Lesson 1.3 (Variational principle):** For a particle in a box of width $L$, use the un-normalized trial function $\phi(x)=x(L-x)$ (which correctly vanishes at both walls) to estimate the ground-state energy $E_1 = \pi^2\hbar^2/2mL^2$, and confirm your estimate is an upper bound. You may use $\int_0^L x^2(L-x)^2\,dx = L^5/30$ and $\int_0^L \phi\,(-\tfrac{\hbar^2}{2m}\phi'')\,dx$ with $\phi''=-2$.

<details>
<summary>Solution</summary>

The variational energy is the Rayleigh quotient $E[\phi]=\dfrac{\langle\phi|\hat H|\phi\rangle}{\langle\phi|\phi\rangle}$.

*Denominator (norm):* $\displaystyle\langle\phi|\phi\rangle=\int_0^L x^2(L-x)^2\,dx = \frac{L^5}{30}.$

*Numerator:* inside the box $\hat H=-\tfrac{\hbar^2}{2m}\dfrac{d^2}{dx^2}$, and $\phi''=\dfrac{d^2}{dx^2}[xL-x^2]=-2$, so $\hat H\phi = -\tfrac{\hbar^2}{2m}(-2)=\tfrac{\hbar^2}{m}$. Then

$$\langle\phi|\hat H|\phi\rangle = \int_0^L x(L-x)\cdot\frac{\hbar^2}{m}\,dx = \frac{\hbar^2}{m}\Big[\frac{Lx^2}{2}-\frac{x^3}{3}\Big]_0^L = \frac{\hbar^2}{m}\cdot\frac{L^3}{6}.$$

*Quotient:*

$$E[\phi] = \frac{(\hbar^2/m)(L^3/6)}{L^5/30} = \frac{\hbar^2}{m}\cdot\frac{L^3}{6}\cdot\frac{30}{L^5} = \frac{5\hbar^2}{mL^2} = \frac{10\,\hbar^2}{2mL^2}.$$

Compare the exact ground state $E_1=\pi^2\hbar^2/2mL^2 \approx 9.87\,\hbar^2/2mL^2$. The trial value $10\,\hbar^2/2mL^2$ is **above** it by about 1.3% — an upper bound, exactly as the variational principle guarantees, and impressively close for such a crude parabola. ✓

</details>

## Connections

- **Backward:** the divergence fix in P3 *is* the [1.3](01-03-variational-principle.md) secular-determinant / linear-variation problem — degenerate perturbation theory diagonalizes $\hat H'$ in a subspace, which is the variational method restricted to those states. Perturbation theory and the variational principle are the two complementary approximation engines of quantum chemistry.
- **Forward:** [1.5 Born–Oppenheimer](01-05-born-oppenheimer-approximation.md) treats the nuclear kinetic energy as the small term — a perturbation argument in the mass ratio $m_e/M_\text{nuc}$. The full second-order machinery reappears in [3.3 Møller–Plesset (MP2)](03-03-moller-plesset-mp2.md), where $\hat H'$ is the electron–electron repulsion left out of Hartree–Fock and $E^{(2)}$ *is* the correlation energy.
- **Sideways:** the same second-order sum computes molecular **polarizability** and dispersion (van der Waals) forces — the response of a system to a weak field, seen in Example 2 — linking this lesson to spectroscopy and intermolecular forces in physical chemistry. And the near-degeneracy breakdown is the origin of **static correlation** ([3.1](03-01-correlation-problem.md)), the reason bond-breaking needs multireference methods.
