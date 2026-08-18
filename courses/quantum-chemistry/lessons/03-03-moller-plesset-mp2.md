# Quantum Chemistry · Lesson 3.3: Møller–Plesset (MP2)

> ⏱ ~15 min · Module 3: Electron Correlation and DFT · Builds on: [1.4 Perturbation theory](01-04-perturbation-theory.md), [3.1 The correlation problem](03-01-correlation-problem.md) · Unlocks: [3.4 Coupled cluster — a taste](03-04-coupled-cluster-taste.md)

## Why this matters

Hartree–Fock gives each electron an averaged view of the others, so it misses the instantaneous *dodging* between electrons — the **dynamic correlation** of [3.1](03-01-correlation-problem.md) — and with it the last ~1% of the energy that decides bond strengths, reaction barriers, and conformer orderings. Configuration interaction ([3.2](03-02-configuration-interaction.md)) recovers that energy variationally, but full CI is astronomically expensive and truncated CI (CISD) loses **size-consistency**. **Møller–Plesset perturbation theory** takes the other road from [1.4](01-04-perturbation-theory.md): don't optimize anything, just treat electron correlation as a small perturbation on top of Hartree–Fock and add the leading correction. The second-order result, **MP2**, is cheap ($\sim N^5$), size-consistent, and recovers 80–90% of the dynamic correlation for well-behaved molecules — which is why it is the default correlated method for medium-sized systems. Its famous energy formula is nothing but the $E^{(2)}$ you already derived in [1.4](01-04-perturbation-theory.md), aimed at the electron–electron repulsion.

## The idea

Perturbation theory needs a split $\hat H = \hat H^{(0)} + \hat H'$ where you already know everything about $\hat H^{(0)}$. Møller and Plesset made the natural choice for a molecule: let $\hat H^{(0)}$ be the **sum of the one-electron Fock operators** — the very operator Hartree–Fock diagonalized. Then the zeroth-order eigenstates are *determinants built from HF orbitals*, and the zeroth-order energy of a determinant is just the sum of its occupied **orbital energies** $\varepsilon$. The perturbation $\hat H' = \hat H - \hat H^{(0)}$ is exactly the piece Hartree–Fock got wrong: the difference between the true electron–electron repulsion and the averaged (mean-field) version baked into the Fock operator. Correlation *is* the perturbation.

Now feed this into [1.4](01-04-perturbation-theory.md)'s machinery. Zeroth plus first order, $E^{(0)}+E^{(1)}$, turns out to reproduce **exactly the Hartree–Fock energy** — first-order Møller–Plesset tells you nothing you didn't already know. So the *first genuinely new* number, the first taste of correlation, is the **second-order** term: that is MP2. And [1.4](01-04-perturbation-theory.md)'s $E^{(2)}$ is a sum over states that mix into the ground state, weighted by (coupling)² over an energy gap. Here the only states that mix in are **double excitations** — promote two electrons at once from occupied orbitals into empty ones — and the "energy gap" is the difference of orbital energies. That single formula is the whole method.

## The formal version

Let the occupied HF spin-orbitals be labelled $i, j, \dots$ with orbital energies $\varepsilon_i$, and the empty (**virtual**) ones $a, b, \dots$ with energies $\varepsilon_a$. *(Energies are in **hartree**, atomic units: $1\ E_\mathrm{h} = 27.211\ \text{eV}$; orbital energies come straight out of solving $\hat F\,\phi = \varepsilon\,\phi$.)* The **Møller–Plesset partition** is

$$\hat H^{(0)} = \sum_n \hat F(n), \qquad \hat H' = \hat H - \hat H^{(0)},$$

the sum running over electrons $n$. *In words: take the zeroth-order Hamiltonian to be the sum of Fock operators, so the HF determinant $|\Psi_0\rangle$ is its ground eigenstate.* Its zeroth-order energy is the sum of occupied orbital energies, $E^{(0)} = \sum_{i} \varepsilon_i$.

**First order returns Hartree–Fock.** The first-order energy is $E^{(1)} = \langle\Psi_0|\hat H'|\Psi_0\rangle$, and it precisely cancels the double-counting of electron repulsion in $E^{(0)}$:

$$E^{(0)} + E^{(1)} = \langle\Psi_0|\hat H^{(0)}|\Psi_0\rangle + \langle\Psi_0|\hat H'|\Psi_0\rangle = \langle\Psi_0|\hat H|\Psi_0\rangle = E_\text{HF}.$$

*In words: through first order, MP theory just rebuilds the HF energy — no correlation yet.* (This is why the method starts counting at "MP2," not "MP1.")

**Second order is MP2.** Apply [1.4](01-04-perturbation-theory.md)'s $E^{(2)}=\sum_{k\neq 0}|\langle\Psi_k|\hat H'|\Psi_0\rangle|^2/(E_0^{(0)}-E_k^{(0)})$, letting $|\Psi_k\rangle$ run over all excited determinants. Two facts collapse the sum to doubles:

- **Brillouin's theorem:** the HF determinant does not couple to *singly* excited determinants, $\langle\Psi_i^a|\hat H|\Psi_0\rangle = 0$ — that vanishing is exactly the stationarity condition that defined the HF orbitals.
- **Slater–Condon rules:** $\hat H$ contains only one- and two-electron operators, so its matrix element between determinants differing by **more than two** spin-orbitals is zero — triples and higher don't couple to $|\Psi_0\rangle$ at all.

Singles are killed, triples-and-up are zero, so only **doubles** survive. The coupling element is an antisymmetrized two-electron integral $\langle ij||ab\rangle \equiv \langle ij|ab\rangle - \langle ij|ba\rangle$, and the energy denominator is the sum of orbital-energy differences:

$$\boxed{\,E_\text{MP2} = \sum_{i<j}\ \sum_{a<b} \frac{\big|\langle ij||ab\rangle\big|^2}{\varepsilon_i + \varepsilon_j - \varepsilon_a - \varepsilon_b}\,}$$

*In words: for every way of lifting a pair of electrons out of occupied orbitals $(i,j)$ into virtuals $(a,b)$, add the squared coupling divided by how much orbital energy the promotion costs.* The restrictions $i<j$, $a<b$ count each distinct double excitation once. Because every occupied orbital sits below every virtual one, each denominator $\varepsilon_i+\varepsilon_j-\varepsilon_a-\varepsilon_b$ is **negative** while each numerator is a nonnegative square — so **$E_\text{MP2}\le 0$ always lowers the energy**, the same level-repulsion sign you saw in [1.4](01-04-perturbation-theory.md). The total energy is $E = E_\text{HF} + E_\text{MP2}$.

**Why it earns its keep.**

- **Size-consistent.** The energy of two non-interacting fragments computed together equals the sum of their separate energies — CISD famously fails this, MP2 does not. Correlation energy scales correctly with system size.
- **Cheap.** The bottleneck is transforming the two-electron integrals into the orbital basis, $\sim N^5$ in the number of basis functions $N$ — one power above HF's $\sim N^4$, and far below CISD's $N^6$ or CCSD's $N^6$–$N^7$.
- **Accurate for single-reference systems.** Recovers ~80–90% of the dynamic correlation when one determinant dominates the wavefunction.

**Where it breaks: near-degeneracy.** If a virtual orbital falls close in energy to an occupied one — a small HOMO–LUMO gap — then $\varepsilon_i+\varepsilon_j-\varepsilon_a-\varepsilon_b \to 0$ and that term **diverges**. This is [1.4](01-04-perturbation-theory.md)'s near-degenerate breakdown wearing chemical clothes: it is exactly the **static (near-degeneracy) correlation** of [3.1](03-01-correlation-problem.md). It appears whenever HF is a poor starting point — stretched/breaking bonds, biradicals, transition-metal and metallic systems. There MP2 misbehaves or blows up, and the Møller–Plesset series is not even guaranteed to converge (MP3, MP4, … can oscillate). MP2 can also *over*estimate long-range dispersion in some regimes. The cure is a method built for several comparably-important configurations: multireference or variational CI, or coupled cluster ([3.4](03-04-coupled-cluster-taste.md)).

## Picture

![MO energy ladder: two occupied HF levels ε_i, ε_j (blue, filled) below two virtual levels ε_a, ε_b (grey, empty) across the HOMO–LUMO gap; coral arrows promote one electron i→a and one j→b (a double excitation), with the MP2 contribution |⟨ij||ab⟩|² over the negative denominator ε_i+ε_j−ε_a−ε_b annotated at right](assets/03-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — one term of the MP2 sum).** Suppose a calculation gives occupied orbital energies $\varepsilon_i = -0.60$, $\varepsilon_j = -0.50$ and virtual energies $\varepsilon_a = +0.20$, $\varepsilon_b = +0.30$ (all in hartree), with antisymmetrized integral $\langle ij||ab\rangle = 0.10\ E_\mathrm{h}$ for the double excitation $ij\to ab$. Its contribution to $E_\text{MP2}$ is

$$\frac{|\langle ij||ab\rangle|^2}{\varepsilon_i+\varepsilon_j-\varepsilon_a-\varepsilon_b} = \frac{(0.10)^2}{(-0.60)+(-0.50)-(0.20)-(0.30)} = \frac{0.010}{-1.60} = -6.25\times10^{-3}\ E_\mathrm{h}.$$

That is $-6.25\times10^{-3}\times 27.211 \approx -0.17\ \text{eV}$ — a small **lowering**, as every MP2 term must be. The full MP2 energy sums thousands to millions of such terms, one per double excitation.

**Example 2 (why you'd care — size-consistency).** Put two helium atoms infinitely far apart. Physically the correlation energy of the pair must be exactly twice one atom's, since they don't interact. MP2 delivers: with no integrals bridging the two atoms, every $\langle ij||ab\rangle$ has both indices on the *same* atom, so the double-excitation sum splits cleanly into an "atom A" block plus an "atom B" block, giving $E_\text{MP2}(\text{A}\cdots\text{B}) = E_\text{MP2}(\text{A}) + E_\text{MP2}(\text{B})$. Truncated CI cannot do this — CISD on the pair allows only *double* excitations total, so it cannot place a double on A *and* a double on B simultaneously (that would be a quadruple), and the pair's correlation energy comes out *less* than twice the monomer's. This size-consistency is the practical reason MP2 is trusted for reaction energies, where reactants and products contain different numbers of fragments.

## Watch out

- **You might call the leading correction "MP1."** There is no useful MP1 correction: $E^{(0)}+E^{(1)}$ *is* the Hartree–Fock energy, so the first new physics is second order. MP2 is the first rung that beats HF.
- **You might expect singles to contribute** (they're the smallest excitations). They don't — Brillouin's theorem makes $\langle\Psi_0|\hat H|\text{singles}\rangle = 0$, so the HF determinant couples only to doubles at this order. Singles matter for *properties* and reappear in coupled cluster, but not in the MP2 energy.
- **You might read a huge MP2 correction as high accuracy.** As in [1.4](01-04-perturbation-theory.md), a large $|E_\text{MP2}|$ usually signals a *small denominator* — near-degeneracy — which is exactly where MP2 is failing, not excelling. Trust it when the gap is comfortably large and one determinant dominates.

## One-liner

> MP2 is [1.4](01-04-perturbation-theory.md)'s second-order formula with the Fock operators as $\hat H^{(0)}$: sum $|\langle ij||ab\rangle|^2/(\varepsilon_i+\varepsilon_j-\varepsilon_a-\varepsilon_b)$ over double excitations — cheap, size-consistent, always lowering, and doomed the moment an orbital gap collapses.

## Problems

**P1 (🟢)** Explain in a few sentences why Møller–Plesset perturbation theory gives no correlation energy at first order — i.e. why $E^{(0)}+E^{(1)}=E_\text{HF}$ — and therefore why MP2 is the first correction beyond Hartree–Fock. Then state which class of excited determinants actually contributes to $E_\text{MP2}$, and why singles and triples do not.

**P2 (🟡)** A double excitation has occupied orbital energies $\varepsilon_i = -0.70$, $\varepsilon_j = -0.55$ and virtual energies $\varepsilon_a = +0.15$, $\varepsilon_b = +0.40$ (hartree), with antisymmetrized integral $\langle ij||ab\rangle = 0.20\ E_\mathrm{h}$. Compute this term's contribution to $E_\text{MP2}$ in hartree and in eV, and state its sign with one sentence of justification.

**P3 (🔴)** As a diatomic bond is stretched toward dissociation, the antibonding $\sigma^*$ virtual orbital falls in energy until it is nearly degenerate with the bonding $\sigma$ occupied orbital. (a) Show what happens to the MP2 term for the double excitation $\sigma\sigma \to \sigma^*\sigma^*$ as $\varepsilon_{\sigma^*}\to\varepsilon_\sigma$. (b) Explain how this is the same failure mode as the near-degenerate breakdown of ordinary perturbation theory in [1.4](01-04-perturbation-theory.md), and name the correlation phenomenon from [3.1](03-01-correlation-problem.md) that it represents. (c) State what kind of method you would use instead and why.

<details>
<summary>Solutions</summary>

**P1** Choose $\hat H^{(0)}=\sum_n\hat F(n)$, the sum of Fock operators, so the HF determinant $|\Psi_0\rangle$ is the zeroth-order ground state and $E^{(0)}=\sum_i\varepsilon_i$. The first-order energy is the expectation value of the perturbation, $E^{(1)}=\langle\Psi_0|\hat H'|\Psi_0\rangle$ with $\hat H'=\hat H-\hat H^{(0)}$. Adding them,

$$E^{(0)}+E^{(1)}=\langle\Psi_0|\hat H^{(0)}|\Psi_0\rangle+\langle\Psi_0|\hat H'|\Psi_0\rangle=\langle\Psi_0|\hat H|\Psi_0\rangle=E_\text{HF}.$$

So through first order MP theory only reconstructs the Hartree–Fock energy — the $E^{(1)}$ term exactly removes the mean-field double-counting of electron repulsion contained in $E^{(0)}=\sum_i\varepsilon_i$. No correlation appears, so the **second-order** term is the first genuine correction: that is MP2.

Only **double excitations** contribute to $E_\text{MP2}$. The second-order sum needs the coupling $\langle\Psi_k|\hat H|\Psi_0\rangle$. **Singles** vanish by Brillouin's theorem ($\langle\Psi_i^a|\hat H|\Psi_0\rangle=0$, the HF stationarity condition). **Triples and higher** vanish by the Slater–Condon rules: $\hat H$ has at most two-electron operators, so it cannot connect determinants differing in more than two spin-orbitals. Doubles are the only excitations that both couple to $|\Psi_0\rangle$ and survive — hence MP2 sums over $ij\to ab$.

**P2** Denominator:

$$\varepsilon_i+\varepsilon_j-\varepsilon_a-\varepsilon_b = (-0.70)+(-0.55)-(0.15)-(0.40) = -1.80\ E_\mathrm{h}.$$

Numerator: $|\langle ij||ab\rangle|^2 = (0.20)^2 = 0.040\ E_\mathrm{h}^2$. Contribution:

$$\frac{0.040}{-1.80} = -2.22\times10^{-2}\ E_\mathrm{h}.$$

In eV: $-2.22\times10^{-2}\times 27.211 \approx -0.605\ \text{eV}$.

The sign is **negative**: the numerator is a square (nonnegative) and the denominator is negative because every occupied energy lies below every virtual energy, so $\varepsilon_i+\varepsilon_j<\varepsilon_a+\varepsilon_b$. Every MP2 term therefore lowers the energy. ✓

**P3** (a) The MP2 contribution of $\sigma\sigma\to\sigma^*\sigma^*$ has denominator $2\varepsilon_\sigma - 2\varepsilon_{\sigma^*} = -2(\varepsilon_{\sigma^*}-\varepsilon_\sigma)$. As $\varepsilon_{\sigma^*}\to\varepsilon_\sigma$ this $\to 0^-$, so with a nonzero coupling the term

$$\frac{|\langle\sigma\sigma||\sigma^*\sigma^*\rangle|^2}{2\varepsilon_\sigma-2\varepsilon_{\sigma^*}} \longrightarrow -\infty$$

diverges — a single "correction" swamps the total energy, and MP2 gives a qualitatively wrong (over-stabilized, eventually nonsensical) dissociation curve.

(b) It is precisely [1.4](01-04-perturbation-theory.md)'s near-degeneracy breakdown: second-order perturbation theory assumes the reference state barely mixes with others, valid only when couplings are small *relative to the energy gaps* in the denominator. When two levels approach degeneracy the gap $\to 0$, the "small" correction becomes order-one (or infinite), and the power series is invalid. Chemically the near-degeneracy of $\sigma$ and $\sigma^*$ at bond-breaking means a *second* determinant (the doubly-excited $\sigma^{*2}$ configuration) becomes comparably important to the HF reference — this is **static (near-degeneracy) correlation** from [3.1](03-01-correlation-problem.md), where a single determinant is a poor description.

(c) Use a **multireference or variational method** — CASSCF / multireference CI, or coupled cluster ([3.4](03-04-coupled-cluster-taste.md)) for milder cases. The point is that single-reference perturbation theory expands around one determinant; when several configurations are near-degenerate you must treat them on an equal footing (diagonalize within that space, à la degenerate perturbation theory / CI) rather than perturbatively. Variational CI also stays bounded from below — it can't diverge the way MP2 does.

</details>

## Flashback

**From Lesson 1.4 (Perturbation theory):** A two-level system has unperturbed energies $E_1^{(0)}=0$ and $E_2^{(0)}=6$ (eV), coupled only through $H'_{12}=H'_{21}=1.0$ eV (with $H'_{11}=H'_{22}=0$). (a) Compute the second-order correction $E_1^{(2)}$ to the lower level and give its energy through second order. (b) The model is exactly solvable — find the lower eigenvalue and compare. (c) In one sentence, connect the sign and structure of $E_1^{(2)}$ to the MP2 denominator you met this lesson.

<details>
<summary>Solution</summary>

(a) With one coupling term,

$$E_1^{(2)} = \frac{|H'_{21}|^2}{E_1^{(0)}-E_2^{(0)}} = \frac{(1.0)^2}{0-6} = -\frac{1}{6} \approx -0.167\ \text{eV},$$

so through second order $E_1 \approx 0 + 0 - 0.167 = -0.167$ eV. The negative sign is level repulsion: the upper state pushes the lower one down.

(b) Eigenvalues of $\begin{pmatrix}0 & 1\\ 1 & 6\end{pmatrix}$ solve $\lambda^2-6\lambda-1=0$, giving $\lambda_-=\dfrac{6-\sqrt{36+4}}{2}=\dfrac{6-\sqrt{40}}{2}\approx -0.162$ eV. The second-order estimate $-0.167$ eV is within ~3% — good, because the coupling ($1.0$) is comfortably smaller than the gap ($6$).

(c) This $|\text{coupling}|^2/(\text{energy gap})$ with a negative denominator is exactly the structure of one MP2 term: $\langle ij||ab\rangle$ plays the role of $H'_{21}$, and the orbital-energy gap $\varepsilon_i+\varepsilon_j-\varepsilon_a-\varepsilon_b<0$ plays the role of $E_1^{(0)}-E_2^{(0)}<0$ — which is why every MP2 term, like this correction, comes out negative and blows up if the gap closes. ✓

</details>

## Connections

- **Backward:** MP2 is the direct chemical payoff of [1.4](01-04-perturbation-theory.md)'s second-order energy — same $|\text{coupling}|^2/\text{gap}$ formula, same always-lowering sign, same near-degeneracy catastrophe — with $\hat H^{(0)}$ chosen as the sum of Fock operators from Hartree–Fock ([2.2](02-02-hartree-fock-equations.md)). It targets the **dynamic correlation** that [3.1](03-01-correlation-problem.md) identified as HF's blind spot.
- **Forward:** [3.4 Coupled cluster](03-04-coupled-cluster-taste.md) keeps the same double-excitation physics but sums it to *infinite* order (via the exponential ansatz $e^{\hat T}$), curing the non-convergence and much of the near-degeneracy trouble that limits MP2 — MP2 is in fact the leading term of the coupled-cluster (CCSD) expansion.
- **Sideways:** contrast with variational CI ([3.2](03-02-configuration-interaction.md)) — CI is bounded and can't diverge but isn't size-consistent when truncated; MP2 is size-consistent but unbounded and can diverge. The two failure modes are mirror images, and choosing between them is a recurring judgment call in computational chemistry ([4.4](04-04-reading-calculation-critically.md)).
