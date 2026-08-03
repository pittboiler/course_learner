# Quantum Field Theory · Lesson 6.3: Recovering propagators and Feynman rules

> ⏱ ~15 min · Module 6: The path integral and renormalization · Builds on: [6.2 The path integral for fields; generating functionals](06-02-path-integral-fields-generating-functionals.md) · Unlocks: [6.4 Loops and ultraviolet divergences](06-04-loops-uv-divergences.md)

## Why this matters

We built the path-integral formalism ([6.1](06-01-path-integral-quantum-mechanics.md)–[6.2](06-02-path-integral-fields-generating-functionals.md)); now we cash it in by showing it reproduces *exactly* the same Feynman rules as canonical quantization (Module 3) — the **propagator** from a Gaussian integral, the **vertices** from expanding the interaction. This confirms the two formulations are equivalent and, more importantly, hands us the path-integral route to computing, which is the one that generalizes cleanly to gauge theories, loops, and renormalization (the rest of Module 6). The key realization: the **propagator is the inverse of the quadratic part of the action**, and the vertices are just the interaction terms — a clean, universal recipe that reads the Feynman rules straight off the Lagrangian.

## The idea

Split the action into a **free (quadratic)** part and an **interaction**: $S = S_0 + S_{\text{int}}$. The generating functional factorizes into "do the free Gaussian integral, then expand the interaction" (the picture).

**Free part → propagator.** The free action, integrated by parts, is $S_0 = -\frac12\int\phi(\Box + m^2)\phi$ — a *quadratic form* in $\phi$. The path integral $\int\mathcal{D}\phi\,e^{i(S_0 + \int J\phi)}$ is then a **Gaussian integral** (infinite-dimensional, but still Gaussian). Completing the square gives

$$Z_0[J] = Z_0[0]\,\exp\!\left(-\tfrac12\int d^4x\,d^4y\,J(x)D_F(x-y)J(y)\right),$$

where $D_F$ is the **inverse of the kinetic operator** $(\Box + m^2)$ — i.e. $D_F(x - y)$ with momentum-space form $\frac{i}{p^2 - m^2 + i\varepsilon}$. This is the Feynman propagator of [2.4](02-04-feynman-propagator.md), rederived: **the propagator is the inverse of the quadratic part of the action.** No operators, no time-ordering — it falls out of a Gaussian integral, the same way a covariance is the inverse of the quadratic form in a multivariate Gaussian ([`probability-theory`](../../probability-theory/syllabus.md)).

**Interaction → vertices.** For the interaction, expand $e^{iS_{\text{int}}} = e^{i\int\mathcal{L}_{\text{int}}}$ in powers of the coupling. Each factor of $\mathcal{L}_{\text{int}}$ (say $-\frac{\lambda}{4!}\phi^4$) becomes a **vertex**: in $Z[J]$, replace each field $\phi$ in the interaction by a functional derivative $-i\frac{\delta}{\delta J}$ acting on the free $Z_0[J]$. Differentiating brings down propagators, and the combinatorics reproduce exactly the Feynman diagrams — vertices connected by propagators, with the right symmetry factors ([3.4](03-04-feynman-diagrams-phi4.md)–[3.5](03-05-feynman-rules-amplitude.md)). The path integral gives the *same* rules as canonical quantization, mechanically and with less operator bookkeeping.

## The formal version

Split $S = S_0 + S_{\text{int}}$ with the free part $S_0 = \int d^4x\,\frac12[(\partial\phi)^2 - m^2\phi^2] = -\frac12\int d^4x\,\phi(\Box + m^2)\phi$ (integrating by parts).

**Free generating functional (Gaussian integral).** Completing the square in $\phi$:

$$Z_0[J] = Z_0[0]\exp\!\left(-\tfrac{i}{2}\int d^4x\,d^4y\,J(x)\,\Delta_F(x-y)\,J(y)\right), \qquad \Delta_F = -(\Box + m^2)^{-1},$$

with momentum-space propagator $\widetilde\Delta_F(p) = \frac{i}{p^2 - m^2 + i\varepsilon}$. *In words:* the propagator is $(\text{kinetic operator})^{-1}$ — the inverse of the quadratic action, exactly the Feynman propagator. **Two-point function:** $\langle 0|T\phi(x)\phi(y)|0\rangle = \frac{-i\delta}{\delta J(x)}\frac{-i\delta}{\delta J(y)}Z_0[J]|_{J=0} = \Delta_F(x-y)$ ([6.2](06-02-path-integral-fields-generating-functionals.md) P2).

**Interactions → vertices.** Write the full $Z[J] = e^{iS_{\text{int}}[-i\delta/\delta J]}Z_0[J]$ — the interaction with each field replaced by $-i\frac{\delta}{\delta J}$. Expanding in the coupling:

$$Z[J] = \left(1 + iS_{\text{int}}\Big[\tfrac{-i\delta}{\delta J}\Big] + \cdots\right)Z_0[J].$$

*In words:* each factor of $\mathcal{L}_{\text{int}} = -\frac{\lambda}{4!}\phi^4$ becomes a four-legged **vertex** ($-i\lambda$, with the $\frac1{4!}$ symmetry), the functional derivatives generate propagators connecting the legs, and the whole expansion reproduces the momentum-space **Feynman rules** of [3.5](03-05-feynman-rules-amplitude.md) — propagator $\frac{i}{p^2-m^2+i\varepsilon}$, vertex $-i\lambda$, symmetry factors, loop integrals. The two formulations are provably equivalent.

## Picture

![The path integral reproducing the Feynman rules: the free Gaussian integral gives Z-zero-of-J with the propagator as the inverse of the kinetic operator box plus m squared, and expanding the interaction exponential turns each interaction term into a vertex, yielding the same propagators and vertices as canonical quantization](assets/06-03-fig1.svg)

## Worked examples

**Example 1 (the propagator as the inverse kinetic operator).** The free action $S_0 = -\frac12\int\phi(\Box + m^2)\phi$ is a quadratic form $-\frac12\int\phi\,K\,\phi$ with $K = \Box + m^2$. This is exactly the structure of a multivariate Gaussian $\int d^n x\,e^{-\frac12 x^T A x + J^T x} \propto e^{\frac12 J^T A^{-1}J}$ — with the field $\phi$ playing the role of $x$ and the operator $K$ playing the role of the matrix $A$. So the "covariance" (propagator) is $K^{-1}$:

$$D_F = (\Box + m^2)^{-1} \quad\xrightarrow{\text{momentum space}}\quad \widetilde D_F(p) = \frac{1}{-p^2 + m^2} \to \frac{i}{p^2 - m^2 + i\varepsilon}$$

(the $\Box \to -p^2$, and the $i, i\varepsilon$ from the Lorentzian phase and the contour). **The propagator is the inverse of the quadratic part of the action** — a universal statement true for any field (scalar, fermion, photon). For the photon, the quadratic operator is degenerate (gauge invariance), which is *why* you must gauge-fix before inverting ([5.3](05-03-quantizing-photon-propagator.md)) — the path integral makes this obstruction manifest.

**Example 2 (an interaction vertex from the expansion).** Take $\mathcal{L}_{\text{int}} = -\frac{\lambda}{4!}\phi^4$. In $Z[J] = e^{iS_{\text{int}}[-i\delta/\delta J]}Z_0[J]$, the first-order term is $iS_{\text{int}} = -\frac{i\lambda}{4!}\int d^4x\,\left(\frac{-i\delta}{\delta J(x)}\right)^4$. Acting on $Z_0[J]$, the four functional derivatives each pull down a propagator (connecting to sources or to each other). This generates a **four-point vertex** at $x$ with factor $-i\lambda$ (the $\frac{1}{4!}$ cancelling against the $4!$ ways to attach legs, [3.5](03-05-feynman-rules-amplitude.md) P2), integrated over $x$ (giving momentum conservation), with propagators on the legs. The result is *identical* to the canonical Feynman rules — the same vertex $-i\lambda$, the same propagators, the same symmetry factors. The path integral is a bookkeeping machine that reads the Feynman rules off the Lagrangian: **quadratic terms → propagators (inverse), higher terms → vertices.**

## Watch out

- **You might struggle to invert a degenerate kinetic operator.** For gauge fields, the quadratic operator has zero eigenvalues (gauge directions, [5.3](05-03-quantizing-photon-propagator.md)) and can't be inverted — the path integral over-counts gauge-equivalent configurations. The fix (Faddeev–Popov gauge fixing) divides out the gauge volume, and for non-abelian theories introduces **ghosts** ([6.7](06-07-taste-non-abelian-gauge-theory.md)). The path integral makes this obstruction transparent.
- **You might forget the $i\varepsilon$ / contour.** The Gaussian path integral is oscillatory (Lorentzian $e^{iS}$), not damped; convergence requires the $i\varepsilon$ prescription (or Euclidean rotation), which also selects the Feynman contour giving the causal propagator. Without it the Gaussian is ill-defined.
- **You might think the path integral gives new physics.** It gives the *same* physics as canonical quantization — same propagators, vertices, amplitudes. Its value is *practical* (cleaner for gauge theories, symmetries, non-perturbative methods), not a different theory. Equivalence is a theorem.

## One-liner

> In the path integral, the propagator is the inverse of the quadratic part of the action (from a Gaussian integral) and vertices are the interaction terms (from expanding $e^{iS_{\text{int}}}$) — reproducing exactly the same Feynman rules as canonical quantization.

## Problems

**P1 (🟢)** State the general rule for reading Feynman rules off a Lagrangian in the path-integral formulation: how do you get (a) the propagator and (b) the vertices? Apply it to $\mathcal{L} = \frac12(\partial\phi)^2 - \frac12 m^2\phi^2 - \frac{g}{3!}\phi^3$.

**P2 (🟡)** The free scalar propagator is $(\Box + m^2)^{-1}$. Verify in momentum space that this gives $\frac{1}{-p^2 + m^2}$ (before the $i, i\varepsilon$ conventions), by noting $\Box \to -p^2$ under Fourier transform. Why is inverting the kinetic operator the same as solving $(\Box + m^2)D_F = \delta$?

**P3 (🔴, optional)** For the photon, the quadratic action gives the operator $M^{\mu\nu} = -k^2\eta^{\mu\nu} + k^\mu k^\nu$, which is **non-invertible** (it annihilates $k_\nu$, [5.3](05-03-quantizing-photon-propagator.md)). Explain, from the path-integral viewpoint, *why* this non-invertibility arises (gauge redundancy) and how gauge-fixing in the path integral (Faddeev–Popov) resolves it. What is being "divided out"?

<details>
<summary>Solutions</summary>

**P1** (a) The **propagator** is the inverse of the quadratic (kinetic) part of the action: identify the $\phi\,K\,\phi$ term, and the propagator is $iK^{-1}$ (in momentum space, invert the operator with the $+i\varepsilon$ prescription). (b) The **vertices** are read from the interaction terms: a term $-\frac{g}{n!}\phi^n$ gives an $n$-point vertex with factor $-ig$ (the $\frac1{n!}$ handled by leg-attachment combinatorics). For $\mathcal{L} = \frac12(\partial\phi)^2 - \frac12 m^2\phi^2 - \frac{g}{3!}\phi^3$: the quadratic part $\frac12[(\partial\phi)^2 - m^2\phi^2] = -\frac12\phi(\Box + m^2)\phi$ gives propagator $\frac{i}{p^2 - m^2 + i\varepsilon}$; the cubic term $-\frac{g}{3!}\phi^3$ gives a **three-point vertex** $-ig$. Two rules, whole theory.

**P2** Under Fourier transform $\phi(x) = \int\frac{d^4p}{(2\pi)^4}\tilde\phi(p)e^{-ip\cdot x}$, each $\partial_\mu \to -ip_\mu$, so $\Box = \partial_\mu\partial^\mu \to (-ip_\mu)(-ip^\mu) = -p^2$. Thus $(\Box + m^2) \to (-p^2 + m^2)$, and its inverse is $\frac{1}{-p^2 + m^2}$ (with $i, i\varepsilon$ conventions giving $\frac{i}{p^2 - m^2 + i\varepsilon}$). Inverting the kinetic operator *is* solving $(\Box + m^2)D_F(x-y) = \delta^4(x-y)$ because "$D_F$ is the inverse of $K = \Box + m^2$" means $K D_F = \mathbb{1}$, and the identity operator in position space is $\delta^4(x-y)$ — so $D_F$ is precisely the Green's function ([2.4](02-04-feynman-propagator.md), [1.4](01-04-klein-gordon-field.md) P3).

**P3** In the path integral $\int\mathcal{D}A\,e^{iS[A]}$, the Maxwell action $S[A]$ is invariant under gauge transformations $A_\mu \to A_\mu - \frac1e\partial_\mu\alpha$ ([5.1](05-01-gauge-invariance-photon.md)). This means the integrand is *constant* along gauge orbits (the directions $\partial_\mu\alpha \sim k_\mu$), so the path integral **over-counts**: it integrates over infinitely many physically-identical configurations, and the integral over the gauge volume is infinite (divergent). In operator language, this shows up as the kinetic operator $M^{\mu\nu}$ having a zero eigenvalue ($M^{\mu\nu}k_\nu = 0$) — the flat gauge direction — so it can't be inverted (no propagator). The **Faddeev–Popov** procedure inserts $1 = \int\mathcal{D}\alpha\,\delta(G[A^\alpha])\det(\cdots)$ (a resolution of identity fixing the gauge $G[A] = 0$), factoring out the infinite gauge volume $\int\mathcal{D}\alpha$ and leaving a well-defined integral over gauge-inequivalent configurations — with a gauge-fixing term (lifting the zero eigenvalue, giving the propagator) and, for non-abelian theories, a Jacobian determinant realized as **ghost** fields ([6.7](06-07-taste-non-abelian-gauge-theory.md)). What's "divided out" is the redundant gauge volume — the unphysical directions of the path integral. ∎

</details>

## Flashback

**From Lesson 6.2 (The path integral for fields; generating functionals):** For a Gaussian $Z[J] = Z[0]\exp(-\frac12\int JDJ)$, what is the two-point function, and how do you extract it?

<details>
<summary>Solution</summary>

The two-point function is $\langle 0|T\phi(x)\phi(y)|0\rangle = D(x - y)$, extracted by two functional derivatives: $\frac{1}{Z[0]}(\frac{-i\delta}{\delta J(x)})(\frac{-i\delta}{\delta J(y)})Z[J]|_{J=0}$. Differentiating the Gaussian exponent twice and setting $J = 0$ brings down exactly $D(x-y)$ (the term where both derivatives hit the quadratic form; the rest vanish at $J = 0$). So the Gaussian's "covariance" $D$ is the propagator. ✓

</details>

## Connections

- **Backward:** the propagator-as-inverse-kinetic-operator recovers [2.4](02-04-feynman-propagator.md); the vertices reproduce the Feynman rules of [3.5](03-05-feynman-rules-amplitude.md); the Gaussian integral is the field version of a multivariate Gaussian from [`probability-theory`](../../probability-theory/syllabus.md); the photon's degenerate operator is [5.3](05-03-quantizing-photon-propagator.md).
- **Forward:** [6.4](06-04-loops-uv-divergences.md) uses the path-integral Feynman rules to compute loops and finds UV divergences; [6.7](06-07-taste-non-abelian-gauge-theory.md) needs the Faddeev–Popov ghosts (P3) for non-abelian gauge fixing.
- **Sideways (stat-mech):** "propagator = inverse of the quadratic form" is exactly how the correlation function of a Gaussian statistical field is its inverse stiffness matrix ([`stat-mech`](../../stat-mech/syllabus.md)); Wick's theorem here is Isserlis' theorem for Gaussians ([3.3](03-03-wicks-theorem.md)).
