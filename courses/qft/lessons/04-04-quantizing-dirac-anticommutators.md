# Quantum Field Theory · Lesson 4.4: Quantizing the Dirac field: anticommutators

> ⏱ ~15 min · Module 4: Fermions and the Dirac field · Builds on: [4.3 Solutions, spin, and antiparticles](04-03-solutions-spin-antiparticles.md) · Unlocks: [4.5 The Dirac propagator](04-05-dirac-propagator.md)

## Why this matters

Why can't two electrons occupy the same state? Why does all of chemistry — the periodic table, the stability of matter — exist? The answer is that fermions obey **anticommutation** relations, not commutation, and this lesson shows it's *forced*: quantize the Dirac field with commutators (as we did for the scalar) and you get a Hamiltonian **unbounded below** (energy with no floor — catastrophe) or a non-causal theory. Switch to **anticommutators** and everything works: positive energy, causality, and — automatically — the **Pauli exclusion principle**. This is the **spin-statistics theorem** in action: half-integer spin *must* be quantized with anticommutators (fermions), integer spin with commutators (bosons). It's one of the deepest results in physics, and it's why matter is stable.

## The idea

For the scalar field we imposed *commutators* and got bosons ([2.2](02-02-creation-annihilation-fock-space.md)). Try the same for the Dirac field and disaster strikes. The Dirac Hamiltonian, expanded in modes, contains an antiparticle piece; with commutators, that piece comes out as $-\omega\,b_{\mathbf p}b_{\mathbf p}^\dagger$, and reordering gives $-\omega\,b^\dagger b$ + constant — a *negative* contribution to the energy. Creating antiparticles would *lower* the energy without bound: the vacuum is unstable, energy has no floor. Fatal.

The fix (the picture): quantize with **anticommutators** $\{b_{\mathbf p}, b_{\mathbf p}^\dagger\} = \delta$ instead of commutators. Now reordering $b b^\dagger$ picks up a crucial *sign*: $b b^\dagger = -b^\dagger b + \delta$, turning the dangerous $-\omega\,b b^\dagger$ into $+\omega\,b^\dagger b$ + constant — **positive** energy. The Hamiltonian is bounded below, the vacuum is stable. Anticommutators are not a choice; they're the only way to make the spin-$\tfrac12$ field consistent.

And they hand you the **Pauli exclusion principle** for free. Anticommutation means $\{b_{\mathbf p}^\dagger, b_{\mathbf p}^\dagger\} = 0$, so $(b_{\mathbf p}^\dagger)^2 = 0$ — you *cannot* create two fermions in the same mode. Each mode is either empty or singly occupied (occupation $0$ or $1$), and multiparticle states are automatically **antisymmetric** under exchange (swap two fermions, get a minus sign). This is the entire foundation of atomic structure. The **spin-statistics theorem** makes it a law: in any Lorentz-invariant, causal, positive-energy QFT, integer-spin fields use commutators (bosons), half-integer-spin fields use anticommutators (fermions) — no exceptions.

## The formal version

Quantize the Dirac field by imposing **equal-time anticommutation relations**:

$$\{\psi_a(\mathbf{x}), \psi_b^\dagger(\mathbf{y})\} = \delta_{ab}\,\delta^3(\mathbf{x} - \mathbf{y}), \qquad \{\psi_a, \psi_b\} = \{\psi_a^\dagger, \psi_b^\dagger\} = 0,$$

($a, b$ = spinor indices). In terms of mode operators (expanding $\psi$ in $u, v$ spinors), this is

$$\{a_{\mathbf p}^s, a_{\mathbf q}^{r\dagger}\} = \{b_{\mathbf p}^s, b_{\mathbf q}^{r\dagger}\} = (2\pi)^3\delta^{sr}\delta^3(\mathbf{p} - \mathbf{q}),$$

all other anticommutators zero. Here $a^\dagger$ creates a **particle**, $b^\dagger$ creates an **antiparticle**. The Hamiltonian becomes (after normal ordering, which for fermions carries signs)

$$H = \int\frac{d^3p}{(2\pi)^3}\,\omega_{\mathbf p}\sum_s\big(a_{\mathbf p}^{s\dagger}a_{\mathbf p}^s + b_{\mathbf p}^{s\dagger}b_{\mathbf p}^s\big),$$

**positive** — both particles and antiparticles carry positive energy. *In words:* the anticommutator's sign flip is exactly what makes the antiparticle energy positive; commutators would give a $-b^\dagger b$ term (unbounded below).

**Pauli exclusion.** From $\{b_{\mathbf p}^{s\dagger}, b_{\mathbf p}^{s\dagger}\} = 0$: $(b_{\mathbf p}^{s\dagger})^2 = 0$, so no mode holds two identical fermions — occupation number $\in \{0, 1\}$. Multiparticle states are **antisymmetric**: $a_{\mathbf p}^\dagger a_{\mathbf q}^\dagger|0\rangle = -a_{\mathbf q}^\dagger a_{\mathbf p}^\dagger|0\rangle$. *In words:* exchange antisymmetry and exclusion are the same fact — the minus sign of anticommutation. This builds the **Fermi–Dirac Fock space** (each mode $0$ or $1$).

**Spin-statistics theorem.** In a Lorentz-invariant, microcausal QFT with a stable (energy-bounded-below) vacuum: integer-spin fields *must* be quantized with commutators (bosons), half-integer-spin with anticommutators (fermions). *In words:* the connection between spin and statistics is a theorem, not an assumption — it follows from relativity plus causality plus positivity.

## Picture

![A fork: integer-spin fields quantized with commutators give bosons (symmetric states, any occupation, e.g. scalar and photon); half-integer-spin fields quantized with anticommutators give fermions (antisymmetric states, Pauli exclusion 0 or 1 per mode, e.g. electron and quarks); with a note that commutators on the Dirac field make energy unbounded below](assets/04-04-fig1.svg)

## Worked examples

**Example 1 (commutators give unbounded energy — Boss Problem 4).** Expand the Dirac Hamiltonian in modes. The antiparticle part, *if* we used commutators, would appear as $\int\omega_{\mathbf p}(-b_{\mathbf p}b_{\mathbf p}^\dagger)$ (the negative-frequency solutions contribute with a $-$). Reordering with a **commutator** $b b^\dagger = b^\dagger b + \delta$:

$$-\omega\,b b^\dagger = -\omega(b^\dagger b + \delta) = -\omega\,b^\dagger b - \omega\delta.$$

The $-\omega\,b^\dagger b$ term is *negative*: creating antiparticles lowers the energy without bound — the spectrum has no floor, the vacuum decays catastrophically. Now use an **anticommutator** $b b^\dagger = -b^\dagger b + \delta$:

$$-\omega\,b b^\dagger = -\omega(-b^\dagger b + \delta) = +\omega\,b^\dagger b - \omega\delta.$$

The sign flips: $+\omega\,b^\dagger b$ is *positive*. Energy bounded below, vacuum stable. The anticommutator's minus sign is precisely what rescues the theory — half-integer spin *requires* it. (The infinite $-\omega\delta$ constant is the fermionic zero-point energy, removed by normal ordering — with a sign, since fermionic normal ordering carries anticommutation signs.)

**Example 2 (Pauli exclusion from anticommutation).** Try to put two identical fermions in the same mode: apply $b_{\mathbf p}^{s\dagger}$ twice. From the anticommutator $\{b_{\mathbf p}^{s\dagger}, b_{\mathbf p}^{s\dagger}\} = 2(b_{\mathbf p}^{s\dagger})^2 = 0$:

$$(b_{\mathbf p}^{s\dagger})^2 = 0 \quad\Longrightarrow\quad b_{\mathbf p}^{s\dagger}b_{\mathbf p}^{s\dagger}|0\rangle = 0.$$

You **cannot** create two fermions in the same momentum-and-spin state — the state is identically zero. This is the **Pauli exclusion principle**, and it fell out of anticommutation with no extra assumption. It's why electrons in an atom fill successive shells (giving the periodic table and all of chemistry), why white dwarfs and neutron stars resist gravitational collapse (degeneracy pressure), and why matter takes up space at all. One minus sign, the entire structure of matter.

## Watch out

- **You might quantize fermions with commutators by analogy with scalars.** This gives an energy spectrum unbounded below (Example 1) or violates causality — the theory is inconsistent. Half-integer spin *demands* anticommutators; it's not a stylistic choice but a requirement of the spin-statistics theorem.
- **You might forget the signs in fermionic normal ordering and Wick's theorem.** Because fermion operators anticommute, reordering them introduces minus signs. Fermion loops in diagrams carry an extra $(-1)$, and swapping external fermion lines flips the amplitude's sign — a common source of errors in QED calculations ([5.6](05-06-squaring-amplitude-cross-section.md)).
- **You might think Pauli exclusion is a separate postulate.** It's not — it's a *consequence* of anticommutation, which is itself forced by spin-statistics. In QFT, "electrons are fermions" and "no two electrons share a state" are the same statement, both derived from the electron's spin $\tfrac12$.

## One-liner

> The Dirac field must be quantized with anticommutators — commutators give energy unbounded below — and anticommutation automatically yields positive energy, antisymmetric states, and the Pauli exclusion principle: the spin-statistics theorem, and the reason matter is stable.

## Problems

**P1 (🟢)** From the anticommutator $\{b^\dagger, b^\dagger\} = 0$, show $(b^\dagger)^2 = 0$ and hence that any mode's occupation number is $0$ or $1$. Contrast with the bosonic case, where $(a^\dagger)^n|0\rangle \neq 0$ for all $n$.

**P2 (🟡)** Show that a two-fermion state is antisymmetric under exchange: $a_{\mathbf p}^\dagger a_{\mathbf q}^\dagger|0\rangle = -a_{\mathbf q}^\dagger a_{\mathbf p}^\dagger|0\rangle$. Explain why this antisymmetry *is* the Pauli exclusion principle when $\mathbf{p} = \mathbf{q}$.

**P3 (🔴, optional)** Sketch the logic of the spin-statistics theorem: given (i) Lorentz invariance, (ii) microcausality (spacelike-separated fields (anti)commute), and (iii) a stable vacuum (energy bounded below), argue why integer spin forces commutators and half-integer spin forces anticommutators. *Hint:* the field's spacelike (anti)commutator involves a function that is *even* or *odd* under $(x - y) \to -(x - y)$ depending on the spin; matching it to causality fixes the statistics.

<details>
<summary>Solutions</summary>

**P1** $\{b^\dagger, b^\dagger\} = b^\dagger b^\dagger + b^\dagger b^\dagger = 2(b^\dagger)^2 = 0$, so $(b^\dagger)^2 = 0$. Applying $b^\dagger$ to a state with the mode already occupied ($b^\dagger|0\rangle$) gives $(b^\dagger)^2|0\rangle = 0$ — you can't add a second fermion. So the occupation number is $0$ (empty) or $1$ (occupied), never more. In the **bosonic** case, $[a^\dagger, a^\dagger] = 0$ (commutator, not anticommutator) does *not* imply $(a^\dagger)^2 = 0$; instead $(a^\dagger)^n|0\rangle$ is the $n$-boson state (nonzero for all $n$) — any number of bosons can pile into a mode (Bose–Einstein condensation).

**P2** From $\{a_{\mathbf p}^\dagger, a_{\mathbf q}^\dagger\} = 0$: $a_{\mathbf p}^\dagger a_{\mathbf q}^\dagger = -a_{\mathbf q}^\dagger a_{\mathbf p}^\dagger$, so $a_{\mathbf p}^\dagger a_{\mathbf q}^\dagger|0\rangle = -a_{\mathbf q}^\dagger a_{\mathbf p}^\dagger|0\rangle$ — the two-fermion state flips sign under exchange of the two particles. This *is* Pauli exclusion when $\mathbf{p} = \mathbf{q}$: setting the two momenta (and spins) equal, the state equals *minus itself*, so it must be zero — two identical fermions cannot coexist. Exchange antisymmetry and exclusion are one fact.

**P3** The field's spacelike (anti)commutator is built from the two-point function $D(x-y) - (\pm)D(y-x)$, where the sign depends on whether you use commutators ($-$) or anticommutators ($+$ inside). For **microcausality** to hold (this object vanishes for spacelike separation), you need the combination to be *odd* under $(x-y) \to -(x-y)$ (so it cancels under the boost that reverses spacelike vectors, as in [2.5](02-05-causality-microcausality.md)). Now, the two-point function of a spin-$j$ field carries $2j$ factors that are *odd* under this reversal for half-integer $j$ and *even* for integer $j$ (the spin structure contributes a $(-1)^{2j}$). Matching: integer spin needs the *commutator* to be odd (⟹ commutators, bosons); half-integer spin needs the *anticommutator* to be odd (⟹ anticommutators, fermions). Choosing the wrong statistics makes the spacelike (anti)commutator nonzero (acausal) *or* the energy unbounded below — so causality + positivity + Lorentz invariance *uniquely* fix the connection. This is the spin-statistics theorem (Pauli, 1940). ∎

</details>

## Flashback

**From Lesson 4.3 (Solutions, spin, and antiparticles):** State the spin-sum (completeness) relations for the Dirac $u$ and $v$ spinors.

<details>
<summary>Solution</summary>

$\sum_{s=1,2} u^s(p)\bar u^s(p) = \not{p} + m$ and $\sum_{s=1,2} v^s(p)\bar v^s(p) = \not{p} - m$ (note the sign difference). These convert spin-summed spinor products into gamma-matrix expressions, which is exactly what's needed to turn $\sum_{\text{spins}}|\mathcal{M}|^2$ into traces (Casimir's trick, [5.6](05-06-squaring-amplitude-cross-section.md)). ✓

</details>

## Connections

- **Backward:** the anticommutators are forced by the $2\pi \to -1$ double-valuedness of spinors ([4.1](04-01-lorentz-group-spinors.md)); the $a^\dagger, b^\dagger$ create the particle/antiparticle states of [4.3](04-03-solutions-spin-antiparticles.md); this parallels (with the opposite sign) the scalar quantization of [2.2](02-02-creation-annihilation-fock-space.md), and causality is the microcausality of [2.5](02-05-causality-microcausality.md).
- **Forward:** [4.5](04-05-dirac-propagator.md) builds the fermion propagator (with its time-ordering signs); QED loop diagrams carry fermion-loop minus signs from anticommutation; the Fermi–Dirac Fock space underlies all of many-body fermion physics.
- **Sideways (matter):** Pauli exclusion is the foundation of the periodic table and chemistry, of electron degeneracy pressure (white dwarfs, [`astrophysics`](../../astrophysics/syllabus.md)), and of Fermi–Dirac statistics in [`stat-mech`](../../stat-mech/syllabus.md) — "matter is stable and takes up space" is this lesson's minus sign.

*Module 4 capstone (Boss Problem 4): showing commutators give a Hamiltonian unbounded below while anticommutators fix it (Example 1), and verifying $\sum_s u^s\bar u^s = \not{p} + m$ ([4.3](04-03-solutions-spin-antiparticles.md)) — deriving spin-statistics for spin-$\tfrac12$ by hand.*
