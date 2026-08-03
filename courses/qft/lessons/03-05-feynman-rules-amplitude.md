# Quantum Field Theory · Lesson 3.5: Feynman rules and the amplitude

> ⏱ ~15 min · Module 3: Interactions and perturbation theory · Builds on: [3.4 Feynman diagrams for $\phi^4$ theory](03-04-feynman-diagrams-phi4.md) · Unlocks: [3.6 Cross-sections and decay rates](03-06-cross-sections-decay-rates.md)

## Why this matters

This is the lesson where diagrams become *numbers*. The **Feynman rules** are a dictionary: each piece of a diagram — vertex, internal line, external line, loop — translates into a specific algebraic factor, and multiplying them (plus a symmetry factor) gives the amplitude $i\mathcal{M}$ directly, with no operator algebra at all. This is the payoff of the whole module: once you have the rules, computing a scattering amplitude is drawing diagrams and multiplying factors. The rules encode everything — the propagators from Wick contractions, the coupling from the interaction, momentum conservation from translation invariance — into a recipe a student can apply mechanically. Every QED calculation in Module 5 is the same procedure with a richer dictionary.

## The idea

The Feynman rules are just Wick's theorem and the Dyson series, pre-digested into momentum space (the picture — the dictionary). Instead of writing time-ordered products and contracting, you read the factors straight off the diagram:

- **Each vertex** (an interaction $-\frac{\lambda}{4!}\phi^4$) → a factor $-i\lambda$.
- **Each internal line** (a propagator) → $\dfrac{i}{p^2 - m^2 + i\varepsilon}$, with $p$ the momentum flowing along it.
- **Each external line** (a real particle) → $1$ (for a scalar; richer for spin, Module 5).
- **Momentum conservation** at each vertex → a delta function forcing momenta in = momenta out.
- **Each loop** → an integral $\displaystyle\int\frac{d^4\ell}{(2\pi)^4}$ over the undetermined internal momentum.
- **Divide by the symmetry factor** $S$ — the number of ways to rearrange the diagram's internal lines/vertices without changing it.

Multiply all factors, sum over all diagrams contributing to the process, and you have $i\mathcal{M}$. The overall energy–momentum-conserving $(2\pi)^4\delta^4(\sum p)$ is stripped off (it's in the definition of $\mathcal{M}$, [3.1](03-01-interaction-picture-s-matrix.md)). At tree level (no loops), there are no integrals — just a product of vertex and propagator factors, a pure algebraic expression. Loops bring the momentum integrals where the real subtlety (divergences, Module 6) lives.

The one part that trips everyone is the **symmetry factor**. The $\frac{1}{4!}$ in the coupling is there to cancel the many ways of attaching lines; for the tree diagram it cancels completely ($S = 1$), but loop diagrams and diagrams with repeated internal structure keep a residual $1/S$ (e.g. $S = 2$ for the one-loop bubble). Get $S$ right and the amplitude is exact to that order.

## The formal version

**Momentum-space Feynman rules for $\phi^4$ theory** ($\mathcal{L}_{\text{int}} = -\frac{\lambda}{4!}\phi^4$). To compute $i\mathcal{M}$ for a process, draw all connected diagrams at the desired order and, for each:

1. **Vertex:** factor $-i\lambda$.
2. **Internal line** of momentum $p$: factor $\dfrac{i}{p^2 - m^2 + i\varepsilon}$.
3. **External line:** factor $1$ (scalar).
4. **Momentum conservation:** impose $\sum p_{\text{in}} = \sum p_{\text{out}}$ at every vertex (a $(2\pi)^4\delta^4$ per vertex; one overall delta is the external $\delta^4(p_f - p_i)$, the rest fix internal momenta).
5. **Loops:** integrate each undetermined loop momentum, $\displaystyle\int\frac{d^4\ell}{(2\pi)^4}$.
6. **Symmetry factor:** divide by $S$ = order of the diagram's automorphism group (ways to permute internal lines/vertices leaving it invariant).

Then $i\mathcal{M} = \sum_{\text{diagrams}}(\text{product of factors})$. *In words:* the amplitude is the sum over diagrams of "vertices $\times$ propagators $\div$ symmetry factor, with loop momenta integrated." **Tree level** (no loops) gives a closed-form algebraic $\mathcal{M}$; loops give integrals.

**Symmetry factor examples:** tree $2\to2$ vertex, $S = 1$; one-loop "bubble" (two propagators joining two vertices), $S = 2$ (the two internal lines can be swapped); "tadpole" (a loop on a single line), $S = 2$; double bubble, $S = 8$. *In words:* $S$ counts the internal permutation symmetry — the residual of the $\frac{1}{4!}$ not eaten by external-leg attachments.

## Picture

![A Feynman-rules dictionary for phi-4 theory: a four-line vertex equals minus i lambda, an internal line equals i over p squared minus m squared plus i epsilon, an external leg equals 1, plus momentum conservation at vertices, a loop integral per loop, and division by the symmetry factor](assets/03-05-fig1.svg)

## Worked examples

**Example 1 (tree-level $2 \to 2$ — Boss Problem 3, the amplitude).** The only diagram at order $\lambda$ is the single four-point vertex, all four external legs attached, no internal line. Apply the rules: one vertex ($-i\lambda$), four external lines ($1$ each), no propagators, no loops, symmetry factor $S = 1$ (the $4!$ external attachments cancel the $\frac{1}{4!}$):

$$i\mathcal{M} = -i\lambda \quad\Longrightarrow\quad \mathcal{M} = -\lambda.$$

The amplitude is a **constant** — momentum-independent, isotropic scattering. That's the entire tree-level content of $\phi^4$: a contact interaction of strength $\lambda$. Squaring and folding in phase space (next lesson) gives the cross-section. This one-line result is what "compute a scattering amplitude" reduces to once the rules are in hand.

**Example 2 (the one-loop diagram with its symmetry factor).** The one-loop correction (the "fish/bubble," order $\lambda^2$) has two vertices joined by two internal lines carrying $\ell$ and $k - \ell$ ($k$ = total incoming momentum). Apply the rules: two vertices $(-i\lambda)^2$, two propagators, one loop integral, and symmetry factor $S = 2$ (the two internal lines are interchangeable):

$$i\mathcal{M}_{\text{1-loop}} = \frac{1}{2}(-i\lambda)^2\int\frac{d^4\ell}{(2\pi)^4}\,\frac{i}{\ell^2 - m^2 + i\varepsilon}\,\frac{i}{(k-\ell)^2 - m^2 + i\varepsilon}.$$

The $\frac12$ is the symmetry factor. As shown in [3.4](03-04-feynman-diagrams-phi4.md) P3, this integral is **logarithmically UV-divergent** ($\sim \ln\Lambda$ at large $\ell$) — the first infinity of interacting QFT, tamed by renormalizing $\lambda$ ([6.5](06-05-regularization-renormalization.md)). The rules generate the divergent integral mechanically; making sense of it is Module 6.

## Watch out

- **You might botch the symmetry factor.** $S$ is the single most error-prone part of $\phi^4$ diagrams. Count the ways to permute internal lines and vertices that leave the diagram (with its external legs fixed) unchanged. Tree $S=1$; bubble $S=2$. When unsure, go back to Wick's theorem — the combinatorics there give $S$ automatically.
- **You might forget the $i$'s and signs.** Vertex is $-i\lambda$; propagator is $+i/(p^2 - m^2 + i\varepsilon)$. These $i$'s combine to give the correct phase of $\mathcal{M}$; dropping them (or the $-$ sign) flips signs in interference and cross-sections. Track them carefully.
- **You might integrate external momenta or leave loop momenta fixed.** External momenta are *fixed* (the physical in/out particles, on-shell); only *loop* momenta are integrated. Momentum conservation at vertices fixes all internal momenta *except* one per loop — those, and only those, are integrated over.

## One-liner

> The Feynman rules translate each diagram piece into a factor — vertex $-i\lambda$, propagator $i/(p^2-m^2+i\varepsilon)$, external line $1$, loop $\int d^4\ell/(2\pi)^4$, divided by the symmetry factor — so $i\mathcal{M}$ is read straight off the picture, with the tree $2\to2$ amplitude just $-i\lambda$.

## Problems

**P1 (🟢)** Using the Feynman rules, write $i\mathcal{M}$ for the tree-level $2\to2$ process in $\phi^4$, and state its value. Why is it momentum-independent (constant scattering)?

**P2 (🟡)** Apply the Feynman rules to write down (not evaluate) the amplitude for the one-loop "fish" diagram, including the correct symmetry factor $S = 2$. Then use the large-$\ell$ behavior to state whether the loop integral converges. (You may quote [3.4](03-04-feynman-diagrams-phi4.md) P3.)

**P3 (🔴, optional)** Consider $\phi^3$ theory with $\mathcal{L}_{\text{int}} = -\frac{g}{3!}\phi^3$ (vertex factor $-ig$, three lines per vertex). Write the tree-level $2\to2$ amplitude, which now has *three* diagrams ($s$-, $t$-, $u$-channels) with an internal propagator. *Hint:* each channel is two vertices joined by one internal propagator carrying momentum $s = (p_1+p_2)^2$, $t = (p_1-p_3)^2$, or $u = (p_1-p_4)^2$.

<details>
<summary>Solutions</summary>

**P1** Single vertex, four external legs, no internal line or loop, $S = 1$: $i\mathcal{M} = -i\lambda$, so $\mathcal{M} = -\lambda$. It's momentum-independent because the $\phi^4$ vertex is a *contact* interaction (no propagator carries momentum dependence at tree level) — the four fields meet at a single point, so the amplitude can't depend on how momentum is shared. Scattering is isotropic (same in all directions) at leading order.

**P2** Two vertices $(-i\lambda)^2 = -\lambda^2$, two internal propagators carrying $\ell$ and $k-\ell$, one loop integral, symmetry factor $\frac12$:

$$i\mathcal{M}_{\text{1-loop}} = \frac{(-i\lambda)^2}{2}\int\frac{d^4\ell}{(2\pi)^4}\,\frac{i}{\ell^2-m^2+i\varepsilon}\cdot\frac{i}{(k-\ell)^2-m^2+i\varepsilon}.$$

At large $\ell$, each propagator $\sim 1/\ell^2$ and $d^4\ell \sim \ell^3 d\ell$, so the integrand behaves as $\ell^3/\ell^4 = 1/\ell$ — the integral is **logarithmically divergent** (diverges as $\ln\Lambda$). It does not converge; renormalization is needed ([6.5](06-05-regularization-renormalization.md)).

**P3** In $\phi^3$, each vertex is $-ig$ with three lines. Tree $2\to2$ has three diagrams, each with two vertices and one internal propagator: $s$-channel (internal momentum $p_1+p_2$, $s = (p_1+p_2)^2$), $t$-channel ($p_1-p_3$, $t = (p_1-p_3)^2$), $u$-channel ($p_1-p_4$, $u = (p_1-p_4)^2$). Applying the rules ($(-ig)^2$ and one propagator per diagram):

$$i\mathcal{M} = (-ig)^2\left[\frac{i}{s - m^2} + \frac{i}{t - m^2} + \frac{i}{u - m^2}\right] = -ig^2\left[\frac{1}{s-m^2} + \frac{1}{t-m^2} + \frac{1}{u-m^2}\right]\cdot i^{?}.$$

Cleanly: $i\mathcal{M} = (-ig)^2\sum_{X=s,t,u}\frac{i}{X-m^2+i\varepsilon}$, so $\mathcal{M} = -g^2\left[\frac{1}{s-m^2}+\frac{1}{t-m^2}+\frac{1}{u-m^2}\right]$ (up to overall $i$-bookkeeping). Unlike $\phi^4$, this amplitude *depends on the kinematics* ($s, t, u$) through the internal propagators — the poles at $s = m^2$ (etc.) signal a real intermediate particle (a resonance). ∎

</details>

## Flashback

**From Lesson 3.4 (Feynman diagrams for $\phi^4$ theory):** Explain, by counting contractions, why the tree-level $2\to2$ amplitude in $\phi^4$ is $-i\lambda$ (and not $-i\lambda/4!$).

<details>
<summary>Solution</summary>

The vertex carries $\frac{1}{4!}$ and four field operators. The four fields must contract with the four distinct external particles ($\mathbf{p}_1, \mathbf{p}_2$ in; $\mathbf{p}_3, \mathbf{p}_4$ out), and there are $4! = 24$ ways to make these assignments. The combinatorial factor $\frac{1}{4!}\times 4! = 1$ cancels the coupling's denominator, so $i\mathcal{M} = -i\lambda$. The $\frac{1}{4!}$ was chosen precisely so the leading amplitude is clean. ✓

</details>

## Connections

- **Backward:** the rules encode the Dyson series ([3.2](03-02-dyson-series-time-ordering.md)) + Wick's theorem ([3.3](03-03-wicks-theorem.md)) in momentum space; the propagator factor is [2.4](02-04-feynman-propagator.md); the vertex is the interaction of [1.2](01-02-classical-field-theory-lagrangian.md); symmetry factors come from the contraction combinatorics.
- **Forward:** [3.6](03-06-cross-sections-decay-rates.md) squares $\mathcal{M}$ and integrates over phase space for the cross-section; Module 5 extends the rules to QED (spinor and photon lines, vertices), and Module 6's loop divergences are the loop-integral rule taken seriously.
- **Sideways (computation):** the Feynman rules are algorithmic enough to automate — modern amplitude calculations use software (FeynRules, FormCalc) that implements exactly this dictionary, generating and evaluating thousands of diagrams for collider predictions.
