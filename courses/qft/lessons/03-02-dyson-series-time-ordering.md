# Quantum Field Theory · Lesson 3.2: The Dyson series and time ordering

> ⏱ ~15 min · Module 3: Interactions and perturbation theory · Builds on: [3.1 The interaction picture and the S-matrix](03-01-interaction-picture-s-matrix.md) · Unlocks: [3.3 Wick's theorem](03-03-wicks-theorem.md)

## Why this matters

The S-matrix $S = U(+\infty, -\infty)$ is defined but not yet computable. The **Dyson series** makes it computable: it expands $S$ as a power series in the coupling constant, order by order, each term a **time-ordered** product of interaction Hamiltonians. This is the backbone of perturbative QFT — every Feynman diagram is a term in this series, and the "loop expansion" is literally counting powers of the coupling. The one subtlety, **time ordering**, is forced because interaction Hamiltonians at different times don't commute; getting it right is what makes the series both correct and (via Wick's theorem next lesson) tractable. Master the Dyson series and you can, in principle, compute any scattering amplitude to any order.

## The idea

The state evolves by $i\frac{d}{dt}|\psi\rangle = H_{\text{int}}(t)|\psi\rangle$ ([3.1](03-01-interaction-picture-s-matrix.md)). If $H_{\text{int}}$ were a number, the solution would be a simple exponential $e^{-i\int H\,dt}$. But $H_{\text{int}}(t)$ is an *operator* that doesn't commute with itself at different times, so we solve iteratively: integrate the equation, substitute back, and repeat. Each iteration brings down one more power of $H_{\text{int}}$ (one more power of the coupling), generating a series (the picture):

$$S = 1 + (-i)\!\int\! H_{\text{int}}\,dt + \frac{(-i)^2}{2!}\!\iint\! T\{H_{\text{int}}(t_1)H_{\text{int}}(t_2)\}\,dt_1 dt_2 + \cdots$$

The first term ("$1$") is no scattering; the $n$-th term is order $\lambda^n$ in the coupling. Crucially, each multiple integral comes **time-ordered** ($T$): later times to the left. This isn't optional — the iterative solution naturally produces $t_1 > t_2 > \cdots$, and the time-ordering symbol $T$ symmetrizes the integration region so we can write clean, unrestricted integrals with a $1/n!$ out front. Compactly, the whole series is a **time-ordered exponential**:

$$S = T\exp\!\left(-i\int_{-\infty}^{\infty} H_{\text{int}}(t)\,dt\right) = T\exp\!\left(i\int d^4x\,\mathcal{L}_{\text{int}}\right),$$

the last form using $H_{\text{int}} = -\int d^3x\,\mathcal{L}_{\text{int}}$ for the theories we treat (so the exponent is manifestly Lorentz-invariant — a spacetime integral of the interaction Lagrangian density). Perturbation theory is now just "expand this exponential and evaluate each term."

## The formal version

The time-evolution operator $U(t, t_0)$ solves $i\partial_t U = H_{\text{int}}^I(t)\,U$ with $U(t_0, t_0) = 1$. Iterating gives the **Dyson series**:

$$U(t, t_0) = \sum_{n=0}^\infty \frac{(-i)^n}{n!}\int_{t_0}^t dt_1\cdots\int_{t_0}^t dt_n\; T\{H_{\text{int}}^I(t_1)\cdots H_{\text{int}}^I(t_n)\},$$

where the **time-ordering operator** $T$ arranges the factors with later times to the left:

$$T\{H(t_1)H(t_2)\} = \theta(t_1 - t_2)H(t_1)H(t_2) + \theta(t_2 - t_1)H(t_2)H(t_1).$$

*In words:* the $n$-th term is $\frac{1}{n!}$ times the time-ordered product of $n$ interaction Hamiltonians, integrated over all times — the $1/n!$ compensating the overcounting when $T$ lets all $n!$ orderings contribute. The **S-matrix** is the $t_0 \to -\infty$, $t \to +\infty$ limit:

$$S = T\exp\!\left(-i\int_{-\infty}^{\infty}dt\,H_{\text{int}}^I(t)\right) = T\exp\!\left(i\int d^4x\,\mathcal{L}_{\text{int}}(x)\right).$$

*In words:* the S-matrix is the time-ordered exponential of the interaction; the second form (in the Lagrangian density) is manifestly Lorentz-covariant, integrating over spacetime. Each order in the expansion is a power of the coupling constant, defining **perturbation theory**.

## Picture

![The S-matrix as a time-ordered exponential expanded order by order: the identity (no scattering), the order-lambda single-interaction term, and the order-lambda-squared time-ordered double integral, with a time axis showing that T places later operators to the left](assets/03-02-fig1.svg)

## Worked examples

**Example 1 (deriving the first two terms by iteration).** Solve $i\partial_t U = H(t)U$ with $U(t_0, t_0) = 1$ by integrating: $U(t, t_0) = 1 - i\int_{t_0}^t dt_1\,H(t_1)U(t_1, t_0)$. Substitute this expression for $U$ back into itself (Picard iteration):

$$U = 1 - i\int_{t_0}^t dt_1\,H(t_1)\Big[1 - i\int_{t_0}^{t_1}dt_2\,H(t_2)U(t_2, t_0)\Big] = 1 - i\int_{t_0}^t dt_1 H(t_1) + (-i)^2\int_{t_0}^t dt_1\int_{t_0}^{t_1}dt_2\,H(t_1)H(t_2) + \cdots$$

Note the second-order term has $t_1 > t_2$ (the inner integral's upper limit is $t_1$) with $H(t_1)$ on the **left** — automatically time-ordered. Symmetrizing over $t_1 \leftrightarrow t_2$ (each ordering contributes equally under $T$) lets you extend both integrals to the full range and divide by $2!$: $\frac{(-i)^2}{2!}\iint T\{H(t_1)H(t_2)\}$. This is the Dyson series' $n=2$ term. The time-ordering is not imposed — it *emerges* from the nested limits of iteration.

**Example 2 (the order-$\lambda$ term in $\phi^4$ theory).** For $\mathcal{L}_{\text{int}} = -\frac{\lambda}{4!}\phi^4$ (so $H_{\text{int}} = +\frac{\lambda}{4!}\int d^3x\,\phi^4$), the first nontrivial term of $S$ is

$$S^{(1)} = -i\int d^4x\,\frac{\lambda}{4!}\,\phi_I^4(x) \quad\Big(= i\int d^4x\,\mathcal{L}_{\text{int}}\Big),$$

with $\phi_I$ the *free* field (interaction picture, [3.1](03-01-interaction-picture-s-matrix.md)). This single interaction vertex, sandwiched between in- and out-states, produces the tree-level $2 \to 2$ scattering: two of the four $\phi$'s annihilate the incoming particles, two create the outgoing ones. Evaluating $\langle f|S^{(1)}|i\rangle$ requires reducing the product of field operators to a number — which is exactly what **Wick's theorem** ([3.3](03-03-wicks-theorem.md)) does, and the result is the amplitude $\mathcal{M} = -\lambda$ (Boss Problem 3). Higher orders ($\lambda^2, \lambda^3, \ldots$) give loops. The coupling $\lambda$ being small is what makes truncating the series a good approximation.

## Watch out

- **You might drop the time-ordering.** Without $T$, the multiple integrals are wrong — $H_{\text{int}}(t_1)$ and $H_{\text{int}}(t_2)$ don't commute, so the order matters, and only the time-ordered arrangement matches the iterative solution. The $T$ is what lets you write the clean $\frac{1}{n!}\int\cdots\int$ form.
- **You might forget the $1/n!$.** It compensates the $n!$ equivalent orderings that $T$ allows: extending each integral to the full range overcounts by $n!$, exactly cancelled by the $1/n!$. Omitting it (or double-counting) misnormalizes every amplitude.
- **You might think the series always converges.** The Dyson/perturbation series is generally **asymptotic**, not convergent — it gives excellent approximations when the coupling is small (QED's $\alpha \approx 1/137$ makes it superb), but resumming all orders is subtle, and strong-coupling theories (like low-energy QCD) need nonperturbative methods. Perturbation theory is a tool, not the whole truth.

## One-liner

> The Dyson series expands the S-matrix as a time-ordered exponential $S = T\exp(i\int d^4x\,\mathcal{L}_{\text{int}})$, order by order in the coupling — each term a time-ordered product of interactions, and each Feynman diagram one such term.

## Problems

**P1 (🟢)** Write out the $n = 0, 1, 2$ terms of the Dyson series for $S$ explicitly (in terms of $H_{\text{int}}$), and identify which power of the coupling constant each carries for $\phi^4$ theory.

**P2 (🟡)** Show that $T\{H(t_1)H(t_2)\}$ is symmetric under $t_1 \leftrightarrow t_2$, and use this to explain why $\int_{t_0}^t dt_1\int_{t_0}^{t_1}dt_2\,H(t_1)H(t_2) = \frac{1}{2!}\int_{t_0}^t dt_1\int_{t_0}^t dt_2\,T\{H(t_1)H(t_2)\}$ (the two forms of the second-order term agree). *Hint:* the ordered region $t_1 > t_2$ is half the full square; the $T$ symmetrizes over both halves.

**P3 (🔴, optional)** The Dyson series is a time-ordered exponential, *not* an ordinary one: $T\exp(-i\int H\,dt) \neq \exp(-i\int H\,dt)$ in general. Explain when they'd be equal (what condition on $H$ at different times), and why that condition fails for interacting QFT. *Hint:* think about $[H(t_1), H(t_2)]$.

<details>
<summary>Solutions</summary>

**P1** $S = \underbrace{1}_{n=0,\ \lambda^0} + \underbrace{(-i)\int_{-\infty}^\infty dt\,H_{\text{int}}(t)}_{n=1,\ \lambda^1} + \underbrace{\frac{(-i)^2}{2!}\int\int dt_1 dt_2\,T\{H_{\text{int}}(t_1)H_{\text{int}}(t_2)\}}_{n=2,\ \lambda^2} + \cdots$. For $\phi^4$ theory, $H_{\text{int}} \propto \lambda$, so the $n$-th term carries $\lambda^n$: $n=0$ is $\lambda^0$ (no scattering), $n=1$ is $\lambda^1$ (tree-level $2\to2$), $n=2$ is $\lambda^2$ (one loop or two-vertex trees), etc.

**P2** $T\{H(t_1)H(t_2)\} = \theta(t_1 - t_2)H(t_1)H(t_2) + \theta(t_2 - t_1)H(t_2)H(t_1)$. Swapping $t_1 \leftrightarrow t_2$: the two theta terms exchange, giving $\theta(t_2-t_1)H(t_2)H(t_1) + \theta(t_1-t_2)H(t_1)H(t_2)$ — the same expression. So $T\{HH\}$ is symmetric. The full square $\int_{t_0}^t\int_{t_0}^t dt_1 dt_2$ splits into the region $t_1 > t_2$ and $t_1 < t_2$; on the first, $T\{H(t_1)H(t_2)\} = H(t_1)H(t_2)$, on the second $= H(t_2)H(t_1)$. By the symmetry both regions give equal contributions, so $\frac{1}{2!}\int\int_{\text{full}}T\{HH\} = \int_{t_1>t_2}H(t_1)H(t_2)$ — the ordered form. The $1/2!$ accounts for the two equal halves.

**P3** A time-ordered exponential equals an ordinary one iff the Hamiltonians at different times **commute**: $[H(t_1), H(t_2)] = 0$ for all $t_1, t_2$. Then the ordering is irrelevant and $T\exp = \exp$. For interacting QFT, $H_{\text{int}}(t)$ is built from field operators at time $t$, and fields at different times generically **don't commute** (their commutator is the nontrivial dynamical two-point structure, related to the propagator) — so $[H(t_1), H(t_2)] \neq 0$ and the time-ordering genuinely matters. The failure of commutativity is exactly what makes the propagator (and all of scattering) nontrivial; a theory with commuting $H(t)$'s would have no genuine dynamics. ∎

</details>

## Flashback

**From Lesson 3.1 (The interaction picture and the S-matrix):** Why do interaction-picture fields satisfy the *free* equation of motion, and why is this convenient?

<details>
<summary>Solution</summary>

Interaction-picture operators evolve as $\mathcal{O}_I(t) = e^{iH_0 t}\mathcal{O}_S e^{-iH_0 t}$, i.e. with the *free* Hamiltonian $H_0$, giving $i\dot{\mathcal{O}}_I = [\mathcal{O}_I, H_0]$ — the free Heisenberg equation. So $\phi_I$ obeys the free Klein–Gordon equation and has the free mode expansion in $a, a^\dagger$. This is convenient because the entire Dyson series is built from these *free* fields, so all of Module 2's machinery (propagator, Fock states, commutators) applies — the interaction enters only through the $H_{\text{int}}$'s in the series, not through the fields themselves. ✓

</details>

## Connections

- **Backward:** the Dyson series solves the interaction-picture Schrödinger equation of [3.1](03-01-interaction-picture-s-matrix.md); the interaction-picture fields it contains are free ([2.1](02-01-canonical-quantization-field-operators.md)–[2.2](02-02-creation-annihilation-fock-space.md)); it's the relativistic version of time-dependent perturbation theory from [`quantum-mechanics`](../../quantum-mechanics/syllabus.md).
- **Forward:** [3.3](03-03-wicks-theorem.md) evaluates the time-ordered products via Wick's theorem (turning them into propagators); [3.4](03-04-feynman-diagrams-phi4.md) draws each term as a diagram; [6.4](06-04-loops-uv-divergences.md) identifies the loop terms (higher orders) where divergences appear.
- **Sideways (math/QM):** the time-ordered exponential is the same "Dyson/path-ordered exponential" that appears in the Magnus expansion, in Wilson lines/holonomy of gauge theory ([5.1](05-01-gauge-invariance-photon.md)), and in the interaction-picture propagator of ordinary quantum mechanics.
