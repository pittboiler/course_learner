# Quantum Field Theory · Lesson 4.5: The Dirac propagator

> ⏱ ~15 min · Module 4: Fermions and the Dirac field · Builds on: [4.4 Quantizing the Dirac field: anticommutators](04-04-quantizing-dirac-anticommutators.md) · Unlocks: [5.1 Gauge invariance and the photon](05-01-gauge-invariance-photon.md)

## Why this matters

Just as the scalar propagator is the internal line of scalar diagrams, the **Dirac propagator** is the internal line for every fermion — every virtual electron in a QED diagram. It's the last piece of machinery needed before assembling QED (Module 5). The propagator inherits the scalar's $\frac{i}{p^2 - m^2 + i\varepsilon}$ pole structure but carries a **spinor numerator** $\not{p} + m$ (a $4\times4$ matrix) that encodes the fermion's spin and, thanks to fermionic time-ordering, a crucial **minus sign** that makes closed fermion loops come with a factor of $-1$. Getting this propagator — numerator, pole, and signs — right is what lets you compute real QED processes.

## The idea

The fermion propagator is the time-ordered two-point function of the Dirac field, $S_F(x - y) = \langle 0|T\psi(x)\bar\psi(y)|0\rangle$ (the picture — a directed internal line). Two features distinguish it from the scalar case:

**A spinor numerator.** The Dirac propagator should be the inverse of the Dirac operator $(\not{p} - m)$ — but $\not{p} - m$ is a *matrix*, so "inverse" means matrix inverse. Rationalize it: multiply top and bottom by $(\not{p} + m)$, and since $\not{p}\not{p} = p^2$ ([4.3](04-03-solutions-spin-antiparticles.md)), the denominator becomes the scalar $p^2 - m^2$:

$$\frac{i}{\not{p} - m} = \frac{i(\not{p} + m)}{(\not{p} - m)(\not{p} + m)} = \frac{i(\not{p} + m)}{p^2 - m^2}.$$

So the propagator is $\frac{i(\not{p} + m)}{p^2 - m^2 + i\varepsilon}$ — same pole as the scalar (a real fermion at $p^2 = m^2$), but with the matrix numerator $\not{p} + m$ carrying the spin structure (it's the spin-sum projector from [4.3](04-03-solutions-spin-antiparticles.md)).

**A minus sign from fermionic time-ordering.** Because fermion fields *anticommute* ([4.4](04-04-quantizing-dirac-anticommutators.md)), the time-ordering symbol for fermions is defined with a minus sign when you swap operators: $T\{\psi(x)\bar\psi(y)\} = -\bar\psi(y)\psi(x)$ for $y^0 > x^0$. This sign propagates through Wick's theorem: every **closed fermion loop** contributes an extra factor of $(-1)$, and swapping two external fermion lines flips the amplitude's sign. These signs are physical — they encode Fermi statistics in the diagrammatics and are essential for getting QED cross-sections right.

## The formal version

The **Dirac (Feynman) propagator** is the time-ordered vacuum two-point function:

$$S_F(x - y) = \langle 0|T\psi(x)\bar\psi(y)|0\rangle, \qquad T\{\psi(x)\bar\psi(y)\} = \begin{cases}\psi(x)\bar\psi(y) & x^0 > y^0\\ -\bar\psi(y)\psi(x) & y^0 > x^0,\end{cases}$$

with the **minus sign** for fermionic reordering. In **momentum space**,

$$\widetilde S_F(p) = \frac{i(\not{p} + m)}{p^2 - m^2 + i\varepsilon} = \frac{i}{\not{p} - m + i\varepsilon}.$$

*In words:* the fermion propagator is the inverse of the Dirac operator $(\not{p} - m)$, written with the rationalized numerator $\not{p} + m$; the pole at $p^2 = m^2$ is a real on-shell fermion, and the numerator is the spin-sum matrix. It is a Green's function of the Dirac operator: $(i\not\partial_x - m)S_F(x - y) = i\delta^4(x - y)$.

**Diagrammatic sign rules** (from anticommutation):

- Each **closed fermion loop** → a factor of $(-1)$.
- Interchanging two external fermion lines (identical fermions) → relative $(-1)$ (Fermi antisymmetry of the amplitude).
- Fermion lines carry **arrows** (fermion-number flow); the propagator numerator direction ($\not{p} + m$ with $p$ along the arrow) must be tracked consistently.

*In words:* the anticommutators of [4.4](04-04-quantizing-dirac-anticommutators.md) show up in diagrams as minus signs on fermion loops and on exchanged fermions — Fermi statistics made pictorial.

## Picture

![A directed fermion internal line from y to x carrying momentum p, labeled with the Dirac propagator i times gamma-dot-p plus m over p squared minus m squared plus i epsilon, and a note that fermionic time-ordering gives a minus sign so each closed fermion loop carries a factor of minus one](assets/04-05-fig1.svg)

## Worked examples

**Example 1 (rationalizing the propagator).** Start from "the propagator is the inverse of the Dirac operator," $\widetilde S_F = \frac{i}{\not{p} - m}$. Since $\not{p} - m$ is a matrix, interpret $\frac{1}{\not{p} - m}$ as its matrix inverse and rationalize by multiplying numerator and denominator by $(\not{p} + m)$:

$$\widetilde S_F = \frac{i}{\not{p} - m}\cdot\frac{\not{p} + m}{\not{p} + m} = \frac{i(\not{p} + m)}{(\not{p} - m)(\not{p} + m)} = \frac{i(\not{p} + m)}{\not{p}\not{p} - m^2} = \frac{i(\not{p} + m)}{p^2 - m^2},$$

using $\not{p}\not{p} = p^2$ (Clifford algebra, [4.3](04-03-solutions-spin-antiparticles.md) P3). Add the $+i\varepsilon$ for the Feynman contour: $\widetilde S_F = \frac{i(\not{p} + m)}{p^2 - m^2 + i\varepsilon}$. The numerator $\not{p} + m$ is exactly the particle spin-sum projector $\sum_s u\bar u$ — near the mass-shell pole, the propagator factorizes into the physical spinors of a real fermion, which is why external legs contribute $u, \bar u$ factors while internal lines contribute the full propagator.

**Example 2 (the fermion-loop minus sign).** Consider a diagram with a closed fermion loop (e.g. the photon self-energy in QED, an electron going around a loop). Wick-contracting the fermion fields around the loop requires cyclically reordering an odd permutation of anticommuting operators, which produces an overall factor of $(-1)$. Concretely, a loop of $n$ propagators involves $\text{Tr}[S_F S_F \cdots]$ (the trace closes the spinor indices around the loop), and the anticommutation of the fields that formed the loop leaves a leftover $-1$:

$$\text{(closed fermion loop)} = (-1)\int\frac{d^4\ell}{(2\pi)^4}\,\text{Tr}\big[\cdots S_F(\ell)\cdots\big].$$

This minus sign is **not optional** — it's required for gauge invariance and for correct cross-sections (e.g. it makes the QED vacuum polarization come out with the right sign, and it's crucial in cancellations like anomalies). Forgetting it is one of the classic QED errors. It is Fermi statistics — the anticommutators of [4.4](04-04-quantizing-dirac-anticommutators.md) — showing up as a sign rule in the diagrams.

## Watch out

- **You might drop the numerator $\not{p} + m$ or treat it as a scalar.** The fermion propagator's numerator is a $4\times4$ matrix $\not{p} + m$ — it carries spinor indices that connect to the vertices and external spinors. It is *not* just $\frac{i}{p^2 - m^2}$ (that's the scalar). The matrix structure is where the spin lives.
- **You might forget the fermion-loop and exchange minus signs.** Anticommutation gives $(-1)$ per closed fermion loop and a relative $(-1)$ for exchanged external fermions. These signs are physical (Fermi statistics) and essential — dropping them gives wrong (and often gauge-non-invariant) results.
- **You might ignore the arrow direction.** Fermion lines are *directed* (fermion-number flow); the propagator $\frac{i(\not{p} + m)}{\cdots}$ has $p$ oriented along the arrow, and reading a fermion line against its arrow (with $\bar u \ldots u$ ordering) matters. Get the direction wrong and the spinor contractions don't close.

## One-liner

> The Dirac propagator $\frac{i(\not{p} + m)}{p^2 - m^2 + i\varepsilon}$ is the inverse of the Dirac operator — the scalar pole dressed with the spin-carrying numerator $\not{p} + m$ — and fermionic time-ordering gives each closed fermion loop a factor of $-1$.

## Problems

**P1 (🟢)** Verify $(i\not\partial_x - m)S_F(x - y) = i\delta^4(x - y)$ from the momentum-space propagator, confirming $S_F$ is the Green's function of the Dirac operator. *Hint:* $i\not\partial \to \not{p}$ in momentum space; act on $\frac{i(\not{p}+m)}{p^2-m^2}$ with $(\not{p} - m)$ and use $(\not{p} - m)(\not{p} + m) = p^2 - m^2$.

**P2 (🟡)** Show that near the mass shell $p^2 \to m^2$, the propagator numerator $\not{p} + m$ factorizes into the spin sum $\sum_s u^s(p)\bar u^s(p)$. Why does this mean external fermion legs contribute a single spinor ($u$ or $\bar u$) while internal lines contribute the full propagator?

**P3 (🔴, optional)** Argue that a closed fermion loop must carry a factor of $(-1)$ by considering the simplest loop (a single fermion propagator closing on itself at one vertex, or the two-vertex vacuum polarization). *Hint:* Wick-contracting fields around a loop requires bringing a $\psi$ next to a $\bar\psi$ that are separated by an odd number of anticommuting fields, producing one net minus sign. Contrast with a boson loop (no sign).

<details>
<summary>Solutions</summary>

**P1** In momentum space, $(i\not\partial_x - m) \to (\not{p} - m)$ acting on $\widetilde S_F(p) = \frac{i(\not{p}+m)}{p^2-m^2}$: $(\not{p} - m)\frac{i(\not{p}+m)}{p^2-m^2} = \frac{i(\not{p}-m)(\not{p}+m)}{p^2-m^2} = \frac{i(p^2-m^2)}{p^2-m^2} = i$ (using $(\not{p}-m)(\not{p}+m) = \not{p}^2 - m^2 = p^2 - m^2$). Fourier-transforming back, $(i\not\partial_x - m)S_F(x-y) = i\int\frac{d^4p}{(2\pi)^4}e^{-ip\cdot(x-y)} = i\delta^4(x-y)$. So $S_F$ is the Green's function of the Dirac operator. ✓

**P2** On the mass shell $p^2 = m^2$, $\not{p} + m = \sum_s u^s(p)\bar u^s(p)$ (the completeness relation, [4.3](04-03-solutions-spin-antiparticles.md)). So near the pole, $\widetilde S_F \approx \frac{i\sum_s u^s\bar u^s}{p^2 - m^2}$ — the propagator's residue at the pole is the projector onto physical particle states. When an internal line goes on-shell (a real intermediate particle), it "splits" into an outgoing $u$ and an incoming $\bar u$; this is why **external legs** (real particles) carry a single spinor factor $u$ (incoming) or $\bar u$ (outgoing), while **internal lines** (virtual, off-shell) carry the full propagator matrix $\frac{i(\not{p}+m)}{p^2-m^2}$. The factorization at the pole is the diagrammatic statement of "a virtual particle becoming real."

**P3** In a closed fermion loop, the fields are contracted cyclically: $\langle T\psi_1\bar\psi_2\rangle\langle T\psi_2\bar\psi_3\rangle\cdots\langle T\psi_n\bar\psi_1\rangle$, which closes into a **trace** over spinor indices. To assemble this trace from the Wick contractions, you must move the last $\bar\psi_1$ (or equivalently cyclically permute the anticommuting operators) past an odd number of fermion fields to bring it next to $\psi_1$ — each transposition of anticommuting fields gives a $(-1)$, and the net effect of closing the loop is one overall minus sign: $(\text{loop}) = -\text{Tr}[\cdots]$. A **boson** loop has commuting fields, so no such sign appears. This $(-1)$ per fermion loop is a direct diagrammatic consequence of the anticommutators ([4.4](04-04-quantizing-dirac-anticommutators.md)) — Fermi statistics in the Feynman rules. ∎

</details>

## Flashback

**From Lesson 4.4 (Quantizing the Dirac field: anticommutators):** Show that $(b^\dagger)^2 = 0$ from the anticommutator, and state which physical principle this is.

<details>
<summary>Solution</summary>

$\{b^\dagger, b^\dagger\} = 2(b^\dagger)^2 = 0$, so $(b^\dagger)^2 = 0$: you cannot create two identical fermions in the same mode ($b^\dagger b^\dagger|0\rangle = 0$). This is the **Pauli exclusion principle** — each mode holds occupation $0$ or $1$ — a direct consequence of anticommutation, and the reason electrons fill atomic shells. ✓

</details>

## Connections

- **Backward:** the propagator is the inverse of the Dirac operator ([4.2](04-02-dirac-equation.md)); its numerator is the spin-sum projector ([4.3](04-03-solutions-spin-antiparticles.md)); the loop minus signs are the anticommutators of [4.4](04-04-quantizing-dirac-anticommutators.md); the pole/$i\varepsilon$ structure mirrors the scalar propagator ([2.4](02-04-feynman-propagator.md)).
- **Forward:** Module 5 uses $S_F$ for internal electron lines in QED diagrams ([5.4](05-04-qed-feynman-rules.md)) and the loop minus sign in the photon self-energy; [5.6](05-06-squaring-amplitude-cross-section.md)'s trace technology contracts these numerators; [6.4](06-04-loops-uv-divergences.md) meets fermion-loop divergences.
- **Sideways (many-body physics):** the fermion propagator (Green's function) with its $\not{p} + m$ structure is the relativistic version of the single-particle Green's function of condensed-matter many-body theory, where the same $(-1)$-per-loop rule organizes the diagrammatic expansion.
