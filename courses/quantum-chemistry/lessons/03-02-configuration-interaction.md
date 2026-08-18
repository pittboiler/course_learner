# Quantum Chemistry · Lesson 3.2: Configuration Interaction

> ⏱ ~15 min · Module 3: Electron Correlation and DFT · Builds on: [3.1 The correlation problem](03-01-correlation-problem.md), [1.3 The variational principle](01-03-variational-principle.md) · Unlocks: [3.3 Møller–Plesset (MP2)](03-03-moller-plesset-mp2.md)

## Why this matters

Hartree–Fock hands each electron a single "average" arrangement of the others and stops there — that missing correlation energy ([3.1](03-01-correlation-problem.md)) is exactly the part that decides bond strengths, reaction barriers, and whether a molecule dissociates into sensible fragments. **Configuration interaction (CI)** is the most direct cure imaginable: HF gave you one arrangement of the electrons (one determinant); CI lets the wavefunction be a *superposition* of many arrangements and asks the variational principle which mixture has the lowest energy. It is conceptually the cleanest post-HF method, it defines the exact benchmark (Full CI), and its one fatal flaw — size inconsistency — is precisely what motivates coupled cluster ([3.4](03-04-coupled-cluster-taste.md)). Throughout, energies are in **hartree** (atomic units, $E_\text{h} \approx 27.2$ eV $\approx 627.5$ kcal/mol).

## The idea

Picture the HF ground state $|\Psi_0\rangle$: electrons packed into the lowest available molecular orbitals, the rest of the orbitals (the **virtuals**) sitting empty. That single filling is one "configuration." But the real electrons dodge each other, and you can *describe* dodging by letting them momentarily occupy those empty orbitals — promote one electron from an occupied orbital $i$ to a virtual $a$ and you get a **singly excited** determinant $|\Psi_i^a\rangle$; promote two ($i,j \to a,b$) and you get a **doubly excited** determinant $|\Psi_{ij}^{ab}\rangle$; and so on.

CI writes the true wavefunction as a weighted blend of the reference plus all these excited snapshots, then uses the [variational principle](01-03-variational-principle.md) to pick the weights that minimize the energy. That minimization is not guesswork — it is exactly the **secular (matrix eigenvalue) problem** from Lesson 1.3, now with the determinants playing the role of basis functions: build the Hamiltonian matrix in the space of configurations and diagonalize it. The lowest eigenvalue is the CI ground-state energy, guaranteed at or below HF, and its drop below HF *is* the correlation energy you're chasing. Include *every* possible excitation and you get the exact answer in that orbital basis; that's the payoff — and, unavoidably, the cost.

## The formal version

Expand the wavefunction over the reference and its excited determinants:

$$|\Psi_\text{CI}\rangle = c_0|\Psi_0\rangle + \sum_{i,a} c_i^a\,|\Psi_i^a\rangle + \sum_{i<j,\,a<b} c_{ij}^{ab}\,|\Psi_{ij}^{ab}\rangle + \cdots$$

*In words: the trial wavefunction is a linear combination of the HF determinant and all the ways to move electrons up into empty orbitals.* Here $i,j$ label **occupied** spin orbitals, $a,b$ label **virtual** ones, and the $c$'s are the mixing coefficients to be determined.

Because the coefficients enter *linearly*, minimizing $\langle\Psi_\text{CI}|\hat H|\Psi_\text{CI}\rangle$ subject to normalization is the linear variation problem of [1.3](01-03-variational-principle.md): stack the coefficients into a vector $\mathbf c$, build the CI Hamiltonian matrix $H_{IJ} = \langle\Psi_I|\hat H|\Psi_J\rangle$ over configurations $I,J$, and solve the eigenvalue equation

$$\mathbf{H}\,\mathbf c = E\,\mathbf c.$$

*In words: diagonalize the Hamiltonian in the basis of determinants; the eigenvalues are the allowed CI energies, the lowest is the correlated ground state.* (The determinants are orthonormal, so there is no overlap matrix — the secular problem is a plain eigenvalue problem, the $S=1$ special case of 1.3's $\mathbf{Hc}=E\mathbf{Sc}$.)

**Full CI.** Keep *all* excitations (singles through $N$-fold, for $N$ electrons) in a given one-electron basis. The result is the **exact** solution of the electronic Schrödinger equation *within that basis* — the correlation-energy benchmark every approximate method is measured against. The catch: the number of determinants grows **factorially** with electrons and orbitals, so Full CI is feasible only for tiny systems.

**Brillouin's theorem.** Singly excited determinants have *zero* Hamiltonian matrix element with the HF reference:

$$\langle\Psi_0|\hat H|\Psi_i^a\rangle = 0.$$

*In words: singles do not couple directly to the HF ground state.* The reason is that this matrix element equals an off-diagonal Fock-matrix element $F_{ia}$, and the HF orbitals were chosen precisely to make the Fock matrix diagonal (that *was* the SCF condition). So the leading correction to $|\Psi_0\rangle$ comes from the **doubles** — they are the first excitations that mix in directly, and they dominate the correlation energy. (Singles still matter, but only indirectly, by coupling to the doubles, and for one-electron properties.)

**Truncations and their price.** Full CI being unaffordable, you truncate by excitation level. **CISD** keeps singles and doubles — affordable and often accurate near equilibrium. But truncated CI carries a serious defect: it is **not size-consistent**. The energy of two identical molecules held infinitely far apart does *not* equal twice the energy of one:

$$E_\text{CISD}(A\cdots A) \neq 2\,E_\text{CISD}(A).$$

*In words: a method that can't add up non-interacting pieces correctly can't be trusted on big systems or reaction energies.* Full CI is size-consistent; every truncated CI is not — the flaw that coupled cluster ([3.4](03-04-coupled-cluster-taste.md)) is engineered to remove.

## Picture

![Left: the HF reference determinant plus singly and doubly excited determinants formed by promoting electrons from occupied into virtual orbitals. Right: the two-by-two H2 CI, where coupling K pushes the reference level E0 down to a lower CI root E-, the gap being the correlation energy.](assets/03-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — build a $2\times2$ CI).** Minimal-basis $\ce{H2}$ has just two molecular orbitals: the bonding $\sigma_g$ (call it MO 1) and the antibonding $\sigma_u^*$ (MO 2). The HF reference puts both electrons in the bonding MO, $|\Psi_0\rangle = |\sigma_g^2\rangle$. The *only* excitation that respects spin and symmetry is the **double** that promotes both electrons to the antibonding MO, $|\Psi_{11}^{22}\rangle = |\sigma_u^2\rangle$. (A single $\sigma_g \to \sigma_u^*$ is ruled out — Brillouin plus symmetry — so it does not even appear.) The entire CI space is two determinants, and the Hamiltonian matrix is

$$\mathbf H = \begin{pmatrix} E_0 & K \\ K & E_2 \end{pmatrix}, \qquad E_0 = \langle\Psi_0|\hat H|\Psi_0\rangle,\;\; E_2 = \langle\Psi_{11}^{22}|\hat H|\Psi_{11}^{22}\rangle,\;\; K = \langle\Psi_0|\hat H|\Psi_{11}^{22}\rangle,$$

with $E_0$ the HF energy, $E_2 > E_0$ the energy of the doubly-excited configuration, and $K$ the coupling (a two-electron exchange integral). Diagonalizing this is the whole method for $\ce{H2}$ — and it is Boss Problem 3 below.

**Example 2 (why you'd care — CISD can't count to two).** Take two $\ce{H2}$ molecules, $A$ and $B$, a mile apart. Each *alone* needs its double excitation ($\sigma_g^2 \to \sigma_u^2$) to get its correlation energy. To correlate *both* at once, the supersystem wavefunction needs the determinant with $A$ doubly excited **and** $B$ doubly excited simultaneously — but that is a **quadruple** excitation of the combined 4-electron system. CISD, truncated at doubles, throws that term away. So CISD on the pair recovers the correlation of at most one molecule's worth of doubles, and

$$E_\text{CISD}(\ce{H2}\cdots\ce{H2}) > 2\,E_\text{CISD}(\ce{H2}).$$

The error grows with the number of fragments, so CISD steadily *underbinds* large systems. That is not a rounding issue — it is the structural reason quantum chemistry moved to coupled cluster, whose exponential ansatz $e^{\hat T}$ manufactures those missing disconnected quadruples ($\tfrac12\hat T_2^2$) for free.

## Watch out

- **You might think singles are the leading correction because they're the "smallest" excitation.** They aren't the leading term at all — Brillouin's theorem kills their direct coupling to $|\Psi_0\rangle$, so **doubles** carry the correlation energy. Singles enter only second-hand.
- **You might think "variational" makes truncated CI safe.** CISD *is* variational (its energy is a rigorous upper bound), yet it is **not size-consistent** — two good properties are not the same property. A variational method can still mis-add non-interacting fragments.
- **You might read "Full CI = exact" as exact, period.** Exact only *within the chosen one-electron basis*. A small basis has a small Full CI limit; the basis-set error is a separate, additive problem ([2.5 basis sets](02-05-basis-sets.md)).
- **You might expect the double excitation to matter only as a small tweak.** Near equilibrium, yes. But as a bond stretches, $E_2 \to E_0$ and the "excited" configuration becomes *as important as the reference* — the static-correlation regime, where a single determinant fails outright (P3).

## One-liner

> CI mixes excited determinants into the HF reference and diagonalizes — Full CI is exact-in-basis, doubles dominate (Brillouin), and truncating breaks size consistency.

## Problems

**P1 (🟢)** A closed-shell reference $|\Psi_0\rangle$ fills spin orbitals $\chi_1,\chi_2,\chi_3,\chi_4$ (occupied); $\chi_5,\chi_6,\dots$ are virtual. Classify each determinant as singly or doubly excited and name the promotion(s): (a) $\chi_3 \to \chi_5$; (b) $\chi_3,\chi_4 \to \chi_5,\chi_6$; (c) $\chi_1 \to \chi_6$. Which class couples directly to $|\Psi_0\rangle$, and which dominates the correlation energy? State the theorem you're using.

**P2 (🟡)** In one or two sentences define **size consistency**, then explain — using the two-far-apart-molecules picture — why CISD fails it while Full CI does not. What kind of excitation is the culprit?

**P3 (🔴, Boss-3)** For minimal-basis $\ce{H2}$, diagonalize the CI matrix
$$\mathbf H = \begin{pmatrix} E_0 & K \\ K & E_2 \end{pmatrix}, \qquad E_2 > E_0,\; K \neq 0.$$
(i) Give the lower eigenvalue in closed form and prove it lies strictly below $E_0$ (so the drop is the correlation energy). (ii) Evaluate it for $E_0 = -1.10$, $E_2 = -0.60$, $K = 0.10$ (hartree). (iii) Explain how mixing in the antibonding configuration $|\sigma_u^2\rangle$ lets $\ce{H2}$ dissociate into two *neutral* H atoms, which the HF reference alone cannot do (static correlation).

<details>
<summary>Solutions</summary>

**P1** Count how many occupied orbitals are vacated.

- (a) $\chi_3 \to \chi_5$: one electron promoted → **single**, $|\Psi_3^5\rangle$.
- (b) $\chi_3,\chi_4 \to \chi_5,\chi_6$: two electrons promoted → **double**, $|\Psi_{34}^{56}\rangle$.
- (c) $\chi_1 \to \chi_6$: one electron promoted → **single**, $|\Psi_1^6\rangle$.

By **Brillouin's theorem**, $\langle\Psi_0|\hat H|\Psi_i^a\rangle = 0$: the singles (a) and (c) do **not** couple directly to the reference. The **doubles** (b) are the ones with nonzero direct coupling to $|\Psi_0\rangle$, so they **dominate the correlation energy**.

**P2** *Size consistency*: the energy computed for a system of non-interacting fragments equals the sum of the fragments' separately computed energies — $E(A\cdots B) = E(A) + E(B)$ when $A$ and $B$ are infinitely separated.

Correlating molecule $A$ needs a double excitation on $A$; correlating $B$ needs a double on $B$. Describing *both* correlated at once requires the determinant that is doubly excited on $A$ **and** on $B$ simultaneously — a **quadruple** excitation of the combined system. Full CI includes it, so it adds up correctly. CISD stops at doubles and omits it, so it captures less than two molecules' worth of correlation: $E_\text{CISD}(A\cdots B) > 2E_\text{CISD}(A)$. The culprit is the **simultaneous double-on-each = quadruple** excitation.

**P3** (i) For a symmetric $2\times2$ matrix the eigenvalues solve $(E_0 - E)(E_2 - E) - K^2 = 0$, i.e. $E^2 - (E_0+E_2)E + (E_0 E_2 - K^2) = 0$. Hence

$$E_\pm = \frac{E_0 + E_2}{2} \pm \sqrt{\left(\frac{E_2 - E_0}{2}\right)^2 + K^2}.$$

Take the lower root $E_-$. Writing the gap half-width $\Delta \equiv \tfrac12(E_2 - E_0) > 0$,

$$E_- - E_0 = \frac{E_0+E_2}{2} - E_0 - \sqrt{\Delta^2 + K^2} = \Delta - \sqrt{\Delta^2 + K^2}.$$

Since $K \neq 0$, $\sqrt{\Delta^2 + K^2} > \sqrt{\Delta^2} = \Delta$, so $E_- - E_0 < 0$: the ground state is pushed **strictly below** $E_0$. That drop, $E_\text{corr} = E_- - E_0 = \Delta - \sqrt{\Delta^2+K^2}$, is the correlation energy. (For a small coupling it reduces to the second-order form $E_\text{corr} \approx -K^2/(E_2 - E_0)$ — the shape of the MP2 expression in [3.3](03-03-moller-plesset-mp2.md).)

(ii) With $E_0 = -1.10$, $E_2 = -0.60$, $K = 0.10$ hartree: $\Delta = \tfrac12(-0.60 + 1.10) = 0.25$, so

$$\sqrt{\Delta^2 + K^2} = \sqrt{0.0625 + 0.01} = \sqrt{0.0725} = 0.26926,$$
$$E_- = \frac{-1.10 - 0.60}{2} - 0.26926 = -0.85 - 0.26926 = -1.1193\ \text{hartree}.$$

Correlation energy $E_\text{corr} = E_- - E_0 = -1.1193 - (-1.10) = -0.0193$ hartree $\approx -12$ kcal/mol. Below $E_0$, as proved. ✓

(iii) Write the MOs from the two atomic $1s$ orbitals $a,b$ (one per atom): $\sigma_g \propto (a+b)$, $\sigma_u^* \propto (a-b)$. The spatial parts of the two configurations are

$$\sigma_g^2 \propto (a{+}b)_1(a{+}b)_2 = \underbrace{a_1a_2 + b_1b_2}_{\text{ionic } \ce{H- H+}} + \underbrace{a_1b_2 + b_1a_2}_{\text{covalent } \ce{H\bond{...}H}},$$
$$\sigma_u^2 \propto (a{-}b)_1(a{-}b)_2 = \underbrace{a_1a_2 + b_1b_2}_{\text{ionic}} - \underbrace{(a_1b_2 + b_1a_2)}_{\text{covalent}}.$$

The HF reference $\sigma_g^2$ is stuck with a **50% ionic** admixture (both electrons on the same atom) no matter how far the atoms separate — so RHF dissociates $\ce{H2}$ into an unphysical half-$\ce{H- H+}$ mixture, far too high in energy. Now take the CI combination $\Psi = \sigma_g^2 - \lambda\,\sigma_u^2$. The ionic part carries weight $(1-\lambda)$ and the covalent part $(1+\lambda)$. As the bond stretches, $E_2 \to E_0$, the two configurations mix ever more strongly, and the variational optimum drives $\lambda \to 1$: the **ionic terms cancel** and the wavefunction becomes purely covalent $a_1b_2 + b_1a_2$ — exactly one electron on each atom, i.e. **two neutral H atoms**. That is static correlation: a second determinant, mixed in variationally, repairs the dissociation that a single determinant cannot. ✓

</details>

## Flashback

**From Lesson 1.3 (The variational principle):** For an orthonormal two-function basis, linear variation gives the secular matrix
$$\mathbf H = \begin{pmatrix} \alpha & \beta \\ \beta & \alpha \end{pmatrix}, \qquad \beta < 0.$$
Find both eigenvalues and the *normalized* eigenvector belonging to the lower one. (Fresh variant — note the **equal** diagonal entries, unlike the CI matrix above.)

<details>
<summary>Solution</summary>

The characteristic equation is $(\alpha - E)^2 - \beta^2 = 0$, so $\alpha - E = \pm\beta$ and

$$E_\pm = \alpha \pm \beta.$$

Because $\beta < 0$, the **lower** energy is $E_- = \alpha + \beta$. Its eigenvector solves $(\mathbf H - E_-\mathbf I)\mathbf c = 0$: the top row gives $(\alpha - (\alpha+\beta))c_1 + \beta c_2 = -\beta c_1 + \beta c_2 = 0 \Rightarrow c_1 = c_2$. Normalizing $c_1^2 + c_2^2 = 1$:

$$\mathbf c_- = \frac{1}{\sqrt2}\begin{pmatrix} 1 \\ 1 \end{pmatrix}.$$

The symmetric (in-phase) combination is the ground state — the same "diagonalize a $2\times2$ secular matrix" move the CI Boss Problem used, here with degenerate diagonal so the mixing is exactly 50/50. (This is also the bonding-MO result of $\ce{H2+}$ LCAO when overlap is neglected.)

</details>

## Connections

- **Backward:** CI *is* the [linear variation / secular problem of 1.3](01-03-variational-principle.md) with Slater determinants as the basis — the lowest eigenvalue is a variational upper bound, and its gap below Hartree–Fock is the correlation energy defined in [3.1](03-01-correlation-problem.md). The bonding/antibonding MOs it mixes are the same LCAO pair from general chemistry's [MO picture](../../general-chemistry/lessons/01-05-molecular-shape-vsepr-hybridization-mo.md).
- **Forward:** [3.3 Møller–Plesset (MP2)](03-03-moller-plesset-mp2.md) gets the double-excitation correction *cheaply* by perturbation theory instead of diagonalization — its energy denominators are the small-$K$ limit $-K^2/(E_2-E_0)$ you saw in P3 — and, unlike CISD, it is size-consistent. [3.4 Coupled cluster](03-04-coupled-cluster-taste.md) fixes CISD's size-consistency flaw outright with the exponential ansatz.
- **Sideways:** the $2\times2$ level-repulsion in $\ce{H2}$ — two states coupled by an off-diagonal element, the lower pushed down — is the identical algebra behind bonding/antibonding splitting, two-state perturbation theory, and avoided crossings; the static-correlation breakdown at long bond length is why single-reference methods fail for bond-breaking and diradicals.
