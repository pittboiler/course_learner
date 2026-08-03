# Functional Analysis · Lesson 5.4: Stone's theorem and time evolution

> ⏱ ~15 min · Module 5: Unbounded operators and quantum mechanics · Builds on: [5.3 The spectral theorem for unbounded self-adjoint operators](05-03-spectral-theorem-unbounded.md) · Unlocks: (capstone — the end of the course)

## Why this matters

Quantum mechanics makes one non-negotiable promise: a particle that exists now still exists a moment later. In the formalism, "exists" means "total probability equals one," and probability is the squared norm $\|\psi\|^2$ of the state. So time evolution must be a family of operators $U(t)$ that *never change the norm* — it must be **unitary**. The question this lesson answers is the deepest one in the course: *which operators can legitimately generate such an evolution?* Stone's theorem gives a razor-sharp answer — exactly the self-adjoint ones, no more, no less — and in doing so it explains why every fussy domain question from lessons 5.1 and 5.2 was secretly a question about physics being well-posed.

## The idea

Think of the states of a system as points on the surface of an infinite-dimensional sphere: every allowed state has $\|\psi\| = 1$, and evolving in time slides the point around the sphere without ever letting it fall off. A motion that keeps every point on the sphere and preserves all the angles between points is a **rotation** — that's what a unitary operator is (5.3, 3.5). So time evolution is a continuous one-parameter family of rotations $U(t)$: do nothing at $t=0$, and evolving for time $t$ then $s$ is the same as evolving for $t+s$.

Now the punchline. Any smooth one-parameter family of rotations has a *velocity at the identity* — the instantaneous "which way and how fast are we turning" — and that velocity is a single fixed operator $A$, the **generator**. Finite-dimensionally you've seen this exactly: a rotation matrix is $e^{tK}$ for an *antisymmetric* $K$, and $e^{itA}$ for a *self-adjoint* $A$. Stone's theorem says the same dictionary holds in infinite dimensions, unbounded operators and all: **unitary flow $\iff$ self-adjoint generator**. Knowing the generator (the Hamiltonian) is knowing the entire future; and the generator being self-adjoint is precisely what guarantees that future exists and conserves probability.

## The formal version

**Strongly continuous one-parameter unitary group.** A family $\{U(t)\}_{t\in\mathbb{R}}$ of unitary operators on a Hilbert space $\mathcal{H}$ such that

$$U(t+s) = U(t)\,U(s), \qquad U(0) = I, \qquad t \mapsto U(t)\psi \text{ is continuous for every } \psi \in \mathcal{H}.$$

In words: evolving by $t$ then $s$ equals evolving by $t+s$ (a "flow"), doing nothing takes zero time, and nudging the clock nudges the state continuously — no sudden jumps.

**Stone's theorem.** There is a *bijection* between strongly continuous one-parameter unitary groups $U(t)$ and self-adjoint operators $A$ on $\mathcal{H}$, given by

$$U(t) = e^{itA}, \qquad A\psi = -i\,\lim_{t\to 0}\frac{U(t)\psi - \psi}{t}.$$

The generator $A$ is defined exactly on the domain $D(A)$ of vectors $\psi$ for which that limit exists.

In words: every probability-preserving flow is $e^{itA}$ for a *unique* self-adjoint $A$, and every self-adjoint $A$ produces one; the generator is recovered by watching the flow's velocity at $t = 0$, and its natural domain is the set of states for which that velocity is a finite vector. Here $e^{itA}$ is built by the **functional calculus** of 5.3 — feed the bounded function $\lambda \mapsto e^{it\lambda}$ to the spectral measure of $A$ — *not* by any power series (the series $\sum (itA)^n/n!$ makes no sense for unbounded $A$).

**Schrödinger evolution.** The time-dependent Schrödinger equation

$$i\hbar\,\partial_t \psi(t) = H\psi(t), \qquad \psi(0) = \psi_0,$$

with $H$ the (self-adjoint) Hamiltonian and $\hbar$ Planck's constant, is solved by the unitary group

$$\psi(t) = U(t)\psi_0 = e^{-itH/\hbar}\,\psi_0.$$

In words: set $A = -H/\hbar$ in Stone's theorem; the abstract flow *is* the physics. Unitarity of $U(t)$ gives $\|\psi(t)\| = \|\psi_0\|$ for all $t$ — total probability is conserved forever, purchased entirely by the self-adjointness of $H$.

## Concrete instance — free-particle evolution via Fourier

Take the free particle on $L^2(\mathbb{R})$ with $H = -\dfrac{d^2}{dx^2}$ (this is $P^2$ up to constants, momentum squared). By 5.3, the Fourier transform $\mathcal{F}$ diagonalizes it: $H = \mathcal{F}^{-1} M_{\xi^2}\,\mathcal{F}$, where $M_{\xi^2}$ multiplies by $\xi^2$. So $H$ is *just multiplication by $\xi^2$* in disguise, and the functional calculus is trivial there — apply any function of $H$ by applying that function to $\xi^2$:

$$\widehat{U(t)\psi}(\xi) = e^{-it\xi^2}\,\hat\psi(\xi).$$

Each Fourier mode $\xi$ simply spins its phase at rate $\xi^2$ — high-frequency (wiggly) modes race ahead of slow ones, which is precisely the **dispersion** you met in [pdes 4.3](../../pdes/syllabus.md). Because $|e^{-it\xi^2}| = 1$ pointwise, the multiplier never changes any mode's magnitude, so by Plancherel the total norm is untouched: the flow is a pure rotation of the state.

```
     |ψ̂(ξ)|²  (probability in each mode)         each mode's phase spins,
                                                  magnitude frozen:
        ▁▃▅█▅▃▁         ───────►  U(t)           e^{-itξ²},  |·| = 1
     ────────────ξ                            ────────────ξ  (same heights)
```

The heights (probabilities) are invariant; only the phases turn. That is unitarity, made completely explicit by diagonalization.

## Worked examples

**Example 1 (free evolution is unitary and solves Schrödinger).** Continue $H = -d^2/dx^2$ on $L^2(\mathbb{R})$, and set $U(t) = e^{-itH}$ via the functional calculus, i.e. $\widehat{U(t)\psi}(\xi) = e^{-it\xi^2}\hat\psi(\xi)$.

*Norm preservation.* By Plancherel, $\|U(t)\psi\|^2 = \|\widehat{U(t)\psi}\|^2 = \int_{\mathbb{R}} |e^{-it\xi^2}|^2\,|\hat\psi(\xi)|^2\,d\xi = \int_{\mathbb{R}} |\hat\psi(\xi)|^2\,d\xi = \|\psi\|^2.$ The multiplier has modulus $1$, so it drops out — $U(t)$ is unitary and total probability is conserved.

*Group law.* $\widehat{U(t)U(s)\psi}(\xi) = e^{-it\xi^2}e^{-is\xi^2}\hat\psi(\xi) = e^{-i(t+s)\xi^2}\hat\psi(\xi) = \widehat{U(t+s)\psi}(\xi)$, and $U(0)=I$. So $\{U(t)\}$ is a one-parameter group, strongly continuous because $e^{-it\xi^2}\to 1$ as $t\to 0$ and dominated convergence controls the integral.

*It solves the equation.* Differentiate in $t$ on the Fourier side (legitimate for $\psi$ with $\int \xi^4|\hat\psi|^2 < \infty$, i.e. $\psi \in D(H)$):

$$\partial_t\,\widehat{U(t)\psi}(\xi) = -i\xi^2\,e^{-it\xi^2}\hat\psi(\xi) = -i\,\widehat{H\,U(t)\psi}(\xi),$$

which is $i\,\partial_t \psi(t) = H\psi(t)$ back on the $x$ side. The generator recovered from the flow is exactly $-i\lim_{t\to0}(U(t)-I)/t = H$, confirming Stone. (Set $\hbar=1$; restoring it just rescales $t$.)

**Example 2 (particle on a ring / in a box — Boss-5 tie-in).** Put the particle on a circle of circumference $2\pi$, so $\mathcal{H} = L^2([0,2\pi])$ with *periodic* boundary conditions $\psi(0)=\psi(2\pi)$ — this is one of the self-adjoint extensions chosen in 5.2, and choosing it is what makes $H = -d^2/dx^2$ genuinely self-adjoint rather than merely symmetric. The eigenfunctions are $\varphi_n(x) = \frac{1}{\sqrt{2\pi}}e^{inx}$ for $n \in \mathbb{Z}$, with

$$H\varphi_n = n^2\,\varphi_n, \qquad E_n = n^2,$$

a *discrete* real spectrum with an orthonormal eigenbasis $\{\varphi_n\}$ (compare the discrete spectra of 4.4). Expand any state $\psi = \sum_n c_n \varphi_n$ with $c_n = \langle \varphi_n, \psi\rangle$. The functional calculus acts mode-by-mode:

$$U(t)\psi = e^{-itH}\psi = \sum_{n\in\mathbb{Z}} e^{-itE_n}\,c_n\,\varphi_n, \qquad c_n \mapsto e^{-itn^2}c_n.$$

Each eigenmode just *rotates its phase*; nothing mixes. Unitarity is now immediate by Parseval:

$$\|U(t)\psi\|^2 = \sum_n |e^{-itE_n}c_n|^2 = \sum_n |c_n|^2 = \|\psi\|^2,$$

because every $|e^{-itE_n}| = 1$. This works *only* because the $E_n$ are **real**, which is *only* guaranteed because $H$ is self-adjoint. Had we picked a merely symmetric operator — say $-d^2/dx^2$ on smooth functions vanishing at both ends of an interval, whose deficiency indices force the "wrong" boundary condition — its spectral analysis can throw up non-real generalized eigenvalues, and $e^{-itE_n}$ would have $|e^{-itE_n}| \neq 1$. Some modes would decay, others blow up: probability leaks away or explodes, and the evolution is no longer a rotation of the sphere. The boundary condition isn't bookkeeping; it's the difference between physics and nonsense.

## Watch out

- **Symmetric is not enough — only self-adjoint generates a unitary group.** You might think any Hamiltonian that "looks Hermitian" ($\langle H\phi,\psi\rangle = \langle\phi,H\psi\rangle$ on its domain) gives good evolution. But Stone requires genuine self-adjointness ($H = H^*$, *equal domains*, 5.2). A merely symmetric $H$ generates at best a non-unitary semigroup — probability isn't conserved and the dynamics can be ill-posed or non-unique. This is *why* 5.2's domain care is physically essential, not pedantry.
- **$e^{itA}$ is the functional calculus, not a power series.** You might reach for $e^{itA} = \sum_n (itA)^n/n!$. For unbounded $A$ that series diverges on almost every state (each $A^n\psi$ can grow without bound). The exponential is *defined* by feeding the bounded function $e^{it\lambda}$ to $A$'s spectral measure (5.3); that's what makes it a bounded, in fact unitary, operator.
- **Stone is an "iff," and the domain is part of the data.** You might remember only "generators are self-adjoint." The theorem is a *bijection* both ways — every self-adjoint operator also produces a group. And the generator's domain $D(A)$ is not all of $\mathcal{H}$: it's exactly where $(U(t)-I)\psi/t$ converges, i.e. the "differentiable" states. States outside $D(A)$ still evolve (via $U(t)$), they just aren't in the domain where $A$ itself acts.

## One-liner

> Unitary time evolution and self-adjoint Hamiltonians are the same fact seen twice: $U(t) = e^{-itH/\hbar}$, and $H = H^*$ is exactly what makes probability last forever.

## Problems

**P1 (🟢)** Let $A$ be self-adjoint with $U(t) = e^{itA}$. Using only $\|U(t)\psi\| = \|\psi\|$ and the group law, show directly that $U(t)^{-1} = U(-t) = U(t)^*$. (No spectral theorem needed — the group axioms do it.)

**P2 (🟡)** On the ring of Example 2, take the state $\psi = \frac{1}{\sqrt2}(\varphi_1 + \varphi_2)$ (an equal superposition of the $n=1$ and $n=2$ modes, $E_1 = 1$, $E_2 = 4$). Write $\psi(t) = U(t)\psi$ explicitly, confirm $\|\psi(t)\| = 1$ for all $t$, and find the smallest $t > 0$ at which $\psi(t)$ returns to $\psi$ up to an overall phase.

**P3 (🔴, optional)** *(Why symmetry alone fails.)* Consider $A = -i\,\dfrac{d}{dx}$ on $L^2([0,1])$ defined on smooth functions with $\psi(0) = \psi(1) = 0$. Show $A$ is symmetric but that the candidate flow "translate to the right," $(U(t)\psi)(x) = \psi(x - t)$, cannot be a unitary group on $L^2([0,1])$ — mass falls off the right end. Explain in one sentence which ingredient of Stone's theorem this violates, and how a boundary condition from 5.2 (periodicity) repairs it.

<details>
<summary>Solutions</summary>

**P1** From $U(t)U(-t) = U(t + (-t)) = U(0) = I$ and likewise $U(-t)U(t) = I$, we get $U(t)^{-1} = U(-t)$. For the adjoint: unitarity means $U(t)^* U(t) = I$, so $U(t)^* = U(t)^{-1} = U(-t)$. (Concretely, $\|U(t)\psi\| = \|\psi\|$ for all $\psi$ gives $\langle U(t)\psi, U(t)\psi\rangle = \langle\psi,\psi\rangle$, i.e. $\langle U(t)^*U(t)\psi,\psi\rangle = \langle\psi,\psi\rangle$; polarizing over all pairs forces $U(t)^*U(t) = I$, and combined with surjectivity of $U(t)$, also $U(t)U(t)^* = I$.) So $U(t)^* = U(-t) = U(t)^{-1}$. ∎

**P2** Each mode rotates its phase at rate $E_n$:

$$\psi(t) = U(t)\psi = \tfrac{1}{\sqrt2}\big(e^{-iE_1 t}\varphi_1 + e^{-iE_2 t}\varphi_2\big) = \tfrac{1}{\sqrt2}\big(e^{-it}\varphi_1 + e^{-4it}\varphi_2\big).$$

*Norm.* Since $\{\varphi_1,\varphi_2\}$ are orthonormal and $|e^{-it}| = |e^{-4it}| = 1$,

$$\|\psi(t)\|^2 = \tfrac12\big(|e^{-it}|^2 + |e^{-4it}|^2\big) = \tfrac12(1 + 1) = 1. \checkmark$$

*Recurrence up to phase.* We need $\psi(t) = e^{i\theta}\psi$ for some real $\theta$, i.e. both mode phases equal $e^{i\theta}$:

$$e^{-iE_1 t} = e^{-iE_2 t} = e^{i\theta} \iff e^{-i(E_2 - E_1)t} = 1 \iff (E_2 - E_1)t \in 2\pi\mathbb{Z}.$$

Here $E_2 - E_1 = 4 - 1 = 3$, so the smallest $t > 0$ is $t = \dfrac{2\pi}{3}$. (At that moment each mode has turned by a common $\theta = -E_1 t = -2\pi/3$, so $\psi(t) = e^{-2\pi i/3}\psi$ — same physical state.) Only *relative* phases between modes are observable; a common phase is invisible.

**P3** *Symmetric.* Integrate by parts on $[0,1]$ with $\phi,\psi$ smooth and vanishing at both endpoints:

$$\langle A\phi,\psi\rangle = \int_0^1 \overline{(-i\phi')}\,\psi\,dx = \int_0^1 i\,\overline{\phi'}\,\psi\,dx = \big[i\overline\phi\psi\big]_0^1 - \int_0^1 i\,\overline\phi\,\psi'\,dx.$$

The boundary term $[i\overline\phi\psi]_0^1$ vanishes because $\phi,\psi$ are zero at $0$ and $1$, leaving $\langle A\phi,\psi\rangle = \int_0^1 \overline\phi\,(-i\psi')\,dx = \langle\phi,A\psi\rangle$. So $A$ is symmetric.

*The flow is not unitary.* Translation $(U(t)\psi)(x) = \psi(x-t)$ is generated by $-i\,d/dx$ (indeed $\partial_t \psi(x-t) = -\psi'(x-t) = -i\,(A U(t)\psi)(x)$... up to the $i$, $\partial_t U(t)\psi = -A U(t)\psi \cdot$ etc.), but on the *bounded* interval $[0,1]$ shifting a bump to the right pushes part of it past $x = 1$, where the space ends. That mass is simply lost, so

$$\|U(t)\psi\|^2 = \int_0^1 |\psi(x - t)|^2\,dx = \int_{-t}^{1-t}|\psi(u)|^2\,du < \int_0^1 |\psi|^2\,dx = \|\psi\|^2$$

for a state supported near the right end. Norm strictly decreases — probability leaks out — so $U(t)$ is *not* unitary.

*Which ingredient fails.* Stone requires the generator to be **self-adjoint**, but this $A$ (on functions vanishing at both ends) is only *symmetric*: its adjoint acts the same way but with a *larger* domain (no boundary condition), so $A \neq A^*$. The fix from 5.2 is to impose **periodic** boundary conditions $\psi(0)=\psi(1)$, which makes the boundary term vanish for the adjoint too, forces $A = A^*$, and turns translation into rotation *around the ring* — nothing falls off the end, and $U(t)$ becomes unitary. The boundary condition is exactly the self-adjoint extension that Stone demands.

</details>

## Flashback

**From Lesson 5.3 (The spectral theorem for unbounded self-adjoint operators):** Let $A$ be self-adjoint with spectral measure $E(\cdot)$, so that for a bounded Borel function $f$ the operator $f(A) = \int_{\sigma(A)} f(\lambda)\,dE(\lambda)$. Fix a unit vector $\psi$ and let $\mu_\psi(\Omega) = \langle\psi, E(\Omega)\psi\rangle$ be its spectral measure. Show that $\big\langle \psi, e^{itA}\psi\big\rangle = \int_{\sigma(A)} e^{it\lambda}\,d\mu_\psi(\lambda)$, and use this to prove $|\langle\psi, U(t)\psi\rangle| \le 1$ with equality at $t = 0$.

<details>
<summary>Solution</summary>

Apply the functional calculus to the bounded function $f(\lambda) = e^{it\lambda}$ (bounded since $|e^{it\lambda}| = 1$). The defining property of the spectral integral is that for any bounded Borel $f$,

$$\langle\psi, f(A)\psi\rangle = \int_{\sigma(A)} f(\lambda)\,d\langle\psi, E(\lambda)\psi\rangle = \int_{\sigma(A)} f(\lambda)\,d\mu_\psi(\lambda).$$

With $f = e^{it\lambda}$ and $e^{itA} = U(t)$ this reads $\langle\psi, U(t)\psi\rangle = \int_{\sigma(A)} e^{it\lambda}\,d\mu_\psi(\lambda)$ — the "characteristic function" of the spectral measure. Now $\mu_\psi$ is a probability measure: $\mu_\psi(\sigma(A)) = \langle\psi, E(\sigma(A))\psi\rangle = \langle\psi, I\psi\rangle = \|\psi\|^2 = 1$, and it is nonnegative. Hence

$$|\langle\psi, U(t)\psi\rangle| = \left|\int e^{it\lambda}\,d\mu_\psi\right| \le \int |e^{it\lambda}|\,d\mu_\psi = \int 1\,d\mu_\psi = 1,$$

and at $t = 0$ the integrand is $e^0 = 1$, giving $\int 1\,d\mu_\psi = 1$ exactly. So the survival amplitude $\langle\psi, U(t)\psi\rangle$ starts at $1$ and can only shrink in magnitude — the physicist's "the state overlaps itself most at $t=0$," now a two-line consequence of the spectral measure being a probability measure. ∎

</details>

## Connections

- **Backward:** Stone rests on the whole tower. The functional calculus of [5.3](05-03-spectral-theorem-unbounded.md) *builds* $e^{itA}$; the self-adjoint-vs-symmetric distinction of [5.2](05-02-symmetric-vs-self-adjoint.md) is the exact hypothesis, so 5.2's domains were physics all along; the unbounded operators of [5.1](05-01-unbounded-operators-domains.md) are the Hamiltonians in play; and "unitary" is the norm-preserving operator of [3.5](03-05-adjoints-bounded-operators.md). The discrete-spectrum picture of Example 2 echoes [4.4](04-04-spectral-theorem-compact-self-adjoint.md), and the spectral-measure viewpoint continues [4.5](04-05-bounded-self-adjoint-spectral-theorem.md).
- **Forward:** this is the terminus — the mathematical statement of *why quantum mechanics is consistent*. Every "why is this operator self-adjoint?" you'll ever ask downstream is really "is time evolution well-posed?"
- **Sideways (quantum mechanics):** this is the course's payoff for [quantum-mechanics](../../quantum-mechanics/syllabus.md). The Schrödinger equation *is* a unitary flow $U(t) = e^{-itH/\hbar}$; conservation of probability, the reality of energy eigenvalues, and the phase-rotation of stationary states $\varphi_n \mapsto e^{-iE_n t/\hbar}\varphi_n$ are all Stone's theorem in physicist's clothing.
- **Sideways (PDEs):** the free propagator of the Concrete instance is the dispersive evolution of [pdes](../../pdes/syllabus.md) 4.3 — the Fourier multiplier $e^{-it\xi^2}$ that spreads wave packets is Stone's $e^{itA}$ for $A = -H$, unitary because $|e^{-it\xi^2}| = 1$.
- **Sideways (analytical mechanics):** classically, a Hamiltonian generates a *flow* on phase space that preserves the symplectic volume ([analytical-mechanics](../../analytical-mechanics/syllabus.md)). Quantum mechanics is the exact echo: a self-adjoint Hamiltonian generates a *unitary* flow on Hilbert space that preserves the norm. Same slogan — "the Hamiltonian is the generator of time translation" — one classical, one quantum.

---

**Capstone reflection.** Look back at the arc. We began with **complete normed spaces** (Module 1) — the insistence that limits of Cauchy sequences actually land somewhere. We gave those spaces **geometry** with inner products, orthogonality, and Fourier bases (Module 2). We studied the **bounded operators** between them and proved the four load-bearing theorems — Hahn–Banach, uniform boundedness, open mapping, closed graph (Module 3). We learned to read an operator through its **spectrum**, first for compact operators, then for bounded self-adjoint ones (Module 4). And finally we let operators be **unbounded** — where the physically important ones (position, momentum, energy) actually live — learned that *self-adjointness*, not mere symmetry, is the property that matters, and diagonalized them with the spectral theorem (Module 5). Stone's theorem is where the whole structure discharges its debt: it says that the honest mathematical skeleton of quantum mechanics — Hilbert space, self-adjoint Hamiltonian, unitary evolution, conserved probability — is not a physicist's convenient fiction but a theorem. Complete geometry plus self-adjoint generators *forces* consistent quantum dynamics. That is the course.
