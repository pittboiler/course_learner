# Quantum Field Theory · Lesson 6.2: The path integral for fields; generating functionals

> ⏱ ~15 min · Module 6: The path integral and renormalization · Builds on: [6.1 The path integral in quantum mechanics](06-01-path-integral-quantum-mechanics.md) · Unlocks: [6.3 Recovering propagators and Feynman rules](06-03-recovering-propagators-feynman-rules.md)

## Why this matters

Promote the path integral from particles to fields and you get the most powerful formulation of QFT. Instead of summing over particle *paths*, you sum over field *configurations* — every possible $\phi(x)$ — weighted by $e^{iS[\phi]}$. The master object is the **generating functional** $Z[J]$: add a "source" $J$ coupled to the field, and *every* correlation function (Green's function) of the theory comes out by taking **functional derivatives** with respect to $J$. This packages the entire content of the theory — all scattering amplitudes, all propagators, all vertices — into a single functional. It's the formulation that makes gauge theories, symmetries, and non-perturbative methods tractable, and it's how modern QFT is actually done. This lesson sets up $Z[J]$; the next recovers the Feynman rules from it.

## The idea

In QM the path integral summed over paths $x(t)$; for a field theory, sum over **field configurations** $\phi(x)$ — every way the field could be arranged throughout spacetime — weighted by $e^{iS[\phi]}$:

$$Z = \int\mathcal{D}\phi\;e^{iS[\phi]}, \qquad S[\phi] = \int d^4x\,\mathcal{L}(\phi, \partial\phi).$$

This vacuum-to-vacuum amplitude is fine, but to extract *observables* we need correlation functions like $\langle 0|T\phi(x_1)\cdots\phi(x_n)|0\rangle$ (the Green's functions from which scattering amplitudes are built, [2.4](02-04-feynman-propagator.md), [3.3](03-03-wicks-theorem.md)). The trick (the picture): couple the field to an external **source** $J(x)$ and define the **generating functional**

$$Z[J] = \int\mathcal{D}\phi\;e^{i\big(S[\phi] + \int d^4x\,J(x)\phi(x)\big)}.$$

Now the magic: **functional differentiation** with respect to $J$ brings down factors of $\phi$. Each $\frac{\delta}{\delta J(x)}$ acting on $Z[J]$ pulls out a $\phi(x)$ from the exponent; setting $J = 0$ afterward gives the vacuum correlation function. So

$$\langle 0|T\phi(x_1)\cdots\phi(x_n)|0\rangle = \frac{1}{Z[0]}\left(\frac{-i\,\delta}{\delta J(x_1)}\right)\cdots\left(\frac{-i\,\delta}{\delta J(x_n)}\right)Z[J]\bigg|_{J=0}.$$

One functional $Z[J]$ *generates* all correlators — hence "generating functional." It's the QFT analog of a moment-generating function in probability (differentiate to get moments). The related $W[J] = -i\log Z[J]$ generates the **connected** correlators (the ones corresponding to connected Feynman diagrams, [3.4](03-04-feynman-diagrams-phi4.md)), stripping off disconnected pieces automatically.

## The formal version

The **field path integral** sums over field configurations:

$$Z = \int\mathcal{D}\phi\;e^{iS[\phi]}, \qquad Z[J] = \int\mathcal{D}\phi\;\exp\!\left(i\int d^4x\,\big[\mathcal{L}(\phi) + J(x)\phi(x)\big]\right).$$

*In words:* $Z[J]$ is the vacuum amplitude in the presence of a source $J$ that can create/destroy field quanta. **Correlation functions** (time-ordered Green's functions) come from functional derivatives:

$$\langle 0|T\phi(x_1)\cdots\phi(x_n)|0\rangle = \frac{1}{Z[0]}\prod_{k=1}^n\left(\frac{-i\,\delta}{\delta J(x_k)}\right)Z[J]\bigg|_{J=0},$$

using the **functional derivative** rule $\dfrac{\delta J(y)}{\delta J(x)} = \delta^4(x - y)$ (and $\frac{\delta}{\delta J(x)}\int J\phi = \phi(x)$). *In words:* differentiating $Z[J]$ $n$ times pulls down $n$ fields; dividing by $Z[0]$ removes vacuum bubbles. The **connected** generating functional $W[J] = -i\log Z[J]$ yields connected correlators $\langle\phi(x_1)\cdots\phi(x_n)\rangle_c = \prod(-i\frac{\delta}{\delta J})\,iW[J]|_{J=0}$, and the **effective action** $\Gamma[\phi_{\text{cl}}]$ (Legendre transform of $W$) generates one-particle-irreducible vertices — the loop-corrected couplings. *In words:* $Z \to$ all correlators, $W \to$ connected ones, $\Gamma \to$ irreducible vertices — a hierarchy that organizes perturbation theory.

## Picture

![The generating functional Z[J] as a machine: the field path integral with a source J, from which functional derivatives delta over delta J extract every time-ordered correlation function, with the functional-derivative rule delta J(y) over delta J(x) equals delta-four(x minus y), and connected correlators coming from W[J] = minus i log Z[J]](assets/06-02-fig1.svg)

## Worked examples

**Example 1 (the two-point function from $Z[J]$).** The simplest nontrivial correlator is the propagator, $\langle 0|T\phi(x)\phi(y)|0\rangle$. Extract it by differentiating $Z[J]$ twice:

$$\langle 0|T\phi(x)\phi(y)|0\rangle = \frac{1}{Z[0]}\left(\frac{-i\delta}{\delta J(x)}\right)\left(\frac{-i\delta}{\delta J(y)}\right)Z[J]\bigg|_{J=0}.$$

For the **free** theory, we'll see next lesson that $Z[J] = Z[0]\exp\!\left(-\frac12\int J D_F J\right)$ (a Gaussian in $J$), and differentiating twice brings down exactly $D_F(x - y)$ — the Feynman propagator. So the path integral reproduces the propagator of [2.4](02-04-feynman-propagator.md) with no operators, no time-ordering by hand — it's automatic. Each functional derivative is like "insert a field at this point"; two insertions give the amplitude to propagate between them.

**Example 2 (functional derivatives — the basic rule).** The functional derivative $\frac{\delta}{\delta J(x)}$ is the continuum analog of $\frac{\partial}{\partial J_i}$ for a discrete set of variables. The defining rule is $\frac{\delta J(y)}{\delta J(x)} = \delta^4(x - y)$ (the "components" $J(y)$ are independent, labeled by the continuous index $y$). So, for the source term in the exponent:

$$\frac{\delta}{\delta J(x)}\int d^4y\,J(y)\phi(y) = \int d^4y\,\delta^4(x - y)\phi(y) = \phi(x).$$

Each derivative "pulls down" one field $\phi(x)$ from the exponential $e^{i\int J\phi}$ (via the chain rule, $\frac{\delta}{\delta J(x)}e^{i\int J\phi} = i\phi(x)e^{i\int J\phi}$) — which is why $n$ derivatives give the $n$-point function. This is *exactly* how a moment-generating function works in probability: $\langle X^n\rangle = \frac{d^n}{dt^n}\langle e^{tX}\rangle|_{t=0}$, with $J$ playing the role of $t$ and $\phi$ the role of $X$. The path integral makes QFT look like (functional) probability theory.

## Watch out

- **You might forget to divide by $Z[0]$.** The normalization $\frac{1}{Z[0]}$ removes the disconnected vacuum-to-vacuum diagrams (vacuum bubbles, [3.4](03-04-feynman-diagrams-phi4.md)) — without it, every correlator is multiplied by an (infinite) vacuum factor. The division is what makes physical correlators finite and bubble-free.
- **You might confuse $Z[J]$ (all correlators) with $W[J]$ (connected only).** $Z[J]$ generates *all* time-ordered correlators including disconnected products; $W[J] = -i\log Z[J]$ generates only the **connected** ones (the physically relevant, connected Feynman diagrams). The $\log$ is precisely the "connected" operation, familiar from the linked-cluster theorem.
- **You might treat $\int\mathcal{D}\phi$ as rigorously defined.** Like the QM path integral, the field integral is *formally* defined (via time-slicing / lattice regularization, or perturbatively). For free fields it's a well-defined Gaussian; for interacting fields it's usually defined by its perturbative expansion or non-perturbatively on a lattice. Rigor is subtle (a Millennium Prize problem for Yang–Mills).

## One-liner

> The field path integral $Z[J] = \int\mathcal{D}\phi\,e^{i(S + \int J\phi)}$ is a generating functional: functional derivatives $\frac{-i\delta}{\delta J}$ extract every time-ordered correlation function, with $W = -i\log Z$ giving the connected ones — the entire theory in one object.

## Problems

**P1 (🟢)** Using $\frac{\delta J(y)}{\delta J(x)} = \delta^4(x-y)$, compute $\frac{\delta}{\delta J(x)}\left(\int d^4y\,J(y)\phi(y)\right)$ and $\frac{\delta}{\delta J(x)}e^{i\int J\phi}$. Why does each functional derivative "insert a field"?

**P2 (🟡)** For a Gaussian generating functional $Z[J] = Z[0]\exp\left(-\frac12\int d^4x\,d^4y\,J(x)D(x-y)J(y)\right)$, compute the two-point function $\frac{1}{Z[0]}(\frac{-i\delta}{\delta J(x)})(\frac{-i\delta}{\delta J(y)})Z[J]|_{J=0}$ and show it equals $D(x - y)$. *Hint:* differentiate the exponential twice, then set $J = 0$ (only the term where both derivatives hit the exponent's $J$'s, not a pre-existing factor, survives).

**P3 (🔴, optional)** Explain why $W[J] = -i\log Z[J]$ generates *connected* correlators. *Hint:* think about how $\log$ relates the sum of all diagrams (in $Z$) to the sum of connected diagrams (the "linked-cluster theorem": $Z = e^{i W}$ means all diagrams = exponential of connected diagrams). Why does exponentiating connected pieces reproduce disconnected ones?

<details>
<summary>Solutions</summary>

**P1** $\frac{\delta}{\delta J(x)}\int d^4y\,J(y)\phi(y) = \int d^4y\,\frac{\delta J(y)}{\delta J(x)}\phi(y) = \int d^4y\,\delta^4(x-y)\phi(y) = \phi(x)$. For the exponential, by the chain rule: $\frac{\delta}{\delta J(x)}e^{i\int J\phi} = \left(i\frac{\delta}{\delta J(x)}\int J\phi\right)e^{i\int J\phi} = i\phi(x)\,e^{i\int J\phi}$. Each functional derivative brings down a factor of $i\phi(x)$ — it "inserts a field at $x$" — because $J$ is coupled linearly to $\phi$ in the exponent, so differentiating in $J$ extracts $\phi$. This is why $n$ derivatives give the $n$-point correlator.

**P2** Let $E = \exp(-\frac12\int JDJ)$. First derivative: $\frac{\delta E}{\delta J(y)} = -\left(\int d^4z\,D(y-z)J(z)\right)E$ (differentiating the quadratic form). Second derivative $\frac{\delta}{\delta J(x)}$: by the product rule, either hits the prefactor $\int D(y-z)J(z)$ — giving $-D(y-x)$ — or hits $E$ again — giving another factor of $\int DJ$. At $J = 0$, the second term (with a leftover $\int DJ$) vanishes, leaving $\frac{\delta^2 E}{\delta J(x)\delta J(y)}\big|_{J=0} = -D(x-y)\cdot E|_{J=0} = -D(x-y)Z[0]/Z[0]$... including the $(-i)^2 = -1$ from the two $(-i\delta/\delta J)$: $\langle\phi(x)\phi(y)\rangle = (-i)^2\cdot\frac{1}{Z[0]}\cdot(-D(x-y))Z[0] = (-1)(-D(x-y)) = D(x-y)$. ✓ The Gaussian $Z[J]$ has $D$ as its propagator.

**P3** Write $Z[J] = \sum(\text{all diagrams})$ and $iW[J] = \log Z[J] = \sum(\text{connected diagrams})$. The **linked-cluster theorem** states $Z = e^{iW}$: exponentiating the connected diagrams reproduces *all* diagrams, because a general (possibly disconnected) diagram is a product of connected pieces, and the exponential $e^{\sum_c(\text{connected})} = \prod_c(1 + (\text{connected}) + \frac12(\text{connected})^2 + \cdots)$ generates all products of connected pieces with the correct symmetry factors ($1/n!$ for $n$ identical disconnected components). Taking the $\log$ inverts this: $W = -i\log Z$ keeps *only* the connected diagrams (the $\log$ "subtracts" the disconnected products). Since physical amplitudes come from connected correlators (disconnected pieces factor into independent sub-processes), $W[J]$ is the physically relevant generating functional. ∎

</details>

## Flashback

**From Lesson 6.1 (The path integral in quantum mechanics):** In the $\hbar \to 0$ limit, which paths dominate the path integral, and what equation do they obey?

<details>
<summary>Solution</summary>

The paths of **stationary action** dominate, satisfying $\frac{\delta S}{\delta x(t)} = 0$ — the Euler–Lagrange equation, i.e. the classical equation of motion (principle of least action). Away from the classical path, the phase $e^{iS/\hbar}$ oscillates rapidly and contributions cancel; only near the stationary path do neighboring paths interfere constructively. So classical mechanics is the $\hbar \to 0$ limit of the quantum sum over histories. ✓

</details>

## Connections

- **Backward:** this is [6.1](06-01-path-integral-quantum-mechanics.md)'s path integral with $x(t) \to \phi(x)$; the correlators it generates are the time-ordered Green's functions of [2.4](02-04-feynman-propagator.md)/[3.3](03-03-wicks-theorem.md); the source-derivative trick mirrors moment-generating functions in [`probability-theory`](../../probability-theory/syllabus.md).
- **Forward:** [6.3](06-03-recovering-propagators-feynman-rules.md) evaluates the free Gaussian $Z[J]$ to recover the propagator and derives the Feynman rules from the interaction; the effective action $\Gamma$ leads into the loop expansion and renormalization ([6.4](06-04-loops-uv-divergences.md)–[6.5](06-05-regularization-renormalization.md)).
- **Sideways (stat-mech / probability):** $Z[J]$ is the QFT partition function with sources; its Euclidean version *is* a statistical-mechanics generating functional ([`stat-mech`](../../stat-mech/syllabus.md)), and the "connected correlators from $\log Z$" is the cumulant expansion of [`probability-theory`](../../probability-theory/syllabus.md).
