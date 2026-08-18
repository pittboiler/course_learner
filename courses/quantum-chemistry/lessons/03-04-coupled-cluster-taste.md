# Quantum Chemistry · Lesson 3.4: Coupled Cluster — A Taste

> ⏱ ~15 min · Module 3: Electron Correlation and DFT · Builds on: [3.2 Configuration Interaction](03-02-configuration-interaction.md), [3.3 Møller–Plesset (MP2)](03-03-moller-plesset-mp2.md) · Unlocks: 3.5 (DFT and the Hohenberg–Kohn theorems)

## Why this matters

When a computational chemist reports a number and calls it *the answer* — a reaction energy, an atomization energy, a barrier height good to about 1 kcal/mol — the method behind it is almost always **coupled cluster**, usually the flavor written CCSD(T) and nicknamed the "gold standard." It is the most accurate single-reference method you can afford for a small-to-medium closed-shell molecule. But it earns that crown not by being a bigger, more expensive version of CI ([3.2](03-02-configuration-interaction.md)) — it earns it through a single structural trick: writing the wavefunction as an **exponential**. That one choice repairs the fatal size-consistency flaw of truncated CI, and this lesson is about *why*.

## The idea

Recall the two methods you already have. **CISD** ([3.2](03-02-configuration-interaction.md)) writes the correlated wavefunction as a *sum*: reference plus a bit of every single and double excitation, $|\Psi\rangle = (1 + \hat C_1 + \hat C_2)|\Psi_0\rangle$. It's variational but **not size-consistent** — stretch two molecules infinitely far apart and CISD gives you *less* than twice the energy of one, which is nonsense. **MP2** ([3.3](03-03-moller-plesset-mp2.md)) is size-consistent but not systematically improvable and it can blow up when orbital energy gaps get small.

Coupled cluster changes one thing: instead of *adding* the excitation operator, it puts it in an **exponent**. Write $|\Psi_\text{CC}\rangle = e^{\hat T}|\Psi_0\rangle$, where $\hat T$ collects the excitations. Now expand the exponential: $e^{\hat T} = 1 + \hat T + \tfrac12\hat T^2 + \tfrac16\hat T^3 + \cdots$. The linear $1 + \hat T$ piece looks just like CI. But the $\tfrac12\hat T^2$ and higher pieces are *free bonus terms* — products of excitations you already have.

Here's the payoff in one picture. Suppose you keep only double excitations, $\hat T \approx \hat T_2$ (this is essentially CCD; add singles and it's CCSD). The exponential automatically contains $\tfrac12\hat T_2^2$ — a *product of two independent double excitations*. If your system is two molecules far apart, one double can happen on molecule A while another, completely independent double happens on molecule B. That product is a **quadruple excitation** overall, but it costs nothing extra to describe: it's just "a pair excitation here AND a pair excitation there." That is exactly the physics that makes two far-apart molecules give twice one molecule's energy. CISD, being a plain sum truncated at doubles, has *no* quadruple term and so can't represent both pairs excited at once — which is precisely why it fails.

## The formal version

**The exponential ansatz.** The coupled-cluster wavefunction is

$$|\Psi_\text{CC}\rangle = e^{\hat T}\,|\Psi_0\rangle, \qquad \hat T = \hat T_1 + \hat T_2 + \hat T_3 + \cdots + \hat T_N,$$

where $|\Psi_0\rangle$ is the Hartree–Fock reference (a single Slater determinant) and $\hat T$ is the **cluster operator**, a sum of excitation operators. *In words: apply "all possible clusters of excitations, exponentiated" to the HF determinant.*

Each $\hat T_k$ generates all $k$-fold excitations, weighted by unknown numbers called **amplitudes**:

$$\hat T_1 = \sum_{i,a} t_i^{a}\,\hat a_a^\dagger \hat a_i, \qquad \hat T_2 = \sum_{i<j,\,a<b} t_{ij}^{ab}\,\hat a_a^\dagger \hat a_b^\dagger \hat a_j \hat a_i .$$

Here $i,j$ label **occupied** spin-orbitals and $a,b$ label **virtual** (empty) ones; $\hat a_a^\dagger$ creates an electron in virtual orbital $a$ and $\hat a_i$ removes one from occupied orbital $i$ (the second-quantization notation from [2.1](02-01-many-electrons-antisymmetry.md)). *In words: $\hat T_1$ promotes one electron from an occupied to a virtual orbital (a **single**); $\hat T_2$ promotes two at once (a **double**); the $t$'s say how much of each.*

**The exponential expands into connected and disconnected pieces.** With $\hat T \approx \hat T_2$,

$$e^{\hat T_2} = 1 + \hat T_2 + \tfrac12\hat T_2^2 + \tfrac16\hat T_2^3 + \cdots$$

- $\hat T_2$ is a **connected** double — one genuine four-index correlation event.
- $\tfrac12\hat T_2^2$ is a **disconnected** quadruple — a product of two *independent* doubles (see the Picture). It is fully determined by the double amplitudes; it introduces no new unknowns.

*In words: truncating $\hat T$ at doubles does NOT truncate the wavefunction at doubles — the exponential quietly folds in quadruples, sextuples, … as products of the doubles you already solved for.*

**The hierarchy.** Truncating $\hat T$ defines the standard ladder of methods:

$$\hat T \approx \hat T_2 \;\Rightarrow\; \text{CCD}, \qquad \hat T \approx \hat T_1 + \hat T_2 \;\Rightarrow\; \text{CCSD}, \qquad \hat T \approx \hat T_1+\hat T_2+\hat T_3 \;\Rightarrow\; \text{CCSDT}.$$

Full CCSDT is very accurate but costs $\sim N^8$ ($N$ = system size) — too much. The workhorse compromise is **CCSD(T)**: run CCSD (cost $\sim N^6$), then add the effect of triple excitations *perturbatively* (in the MP spirit of [3.3](03-03-moller-plesset-mp2.md)) rather than solving for them, at cost $\sim N^7$. *In words: CCSD(T) = CCSD plus a cheap, one-shot estimate of triples — the "(T)" is a perturbative dessert, not a full course.* For single-reference molecules this routinely hits **chemical accuracy**, about 1 kcal/mol.

**Size-extensivity, made precise.** A method is **size-extensive** if the correlation energy of $M$ identical non-interacting copies is exactly $M$ times that of one. Coupled cluster is size-extensive at *every* truncation level, because the exponential factorizes over independent subsystems:

$$e^{\hat T_A + \hat T_B} = e^{\hat T_A}\,e^{\hat T_B} \quad\text{when A and B don't interact.}$$

*In words: the exponential of a sum is a product, so two non-interacting parts multiply into separate wavefunctions and their energies simply add — automatically, at any truncation.* Truncated CI has no such factorization, so CISD is not size-extensive. (Size-consistency is the closely related physical statement about a molecule dissociating into fragments; the terms are often used interchangeably.)

## Picture

![Left: a single connected double excitation from T-hat-2. Right: two far-apart molecular fragments A and B each carrying their own double excitation — the product one-half T-hat-2-squared, a disconnected quadruple, the term that makes coupled cluster size-extensive.](assets/03-04-fig1.svg)

## Worked examples

**Example 1 (the mechanics — what each piece excites).** Take a tiny system: 2 occupied spin-orbitals $\{i,j\}$ and 2 virtuals $\{a,b\}$.

- $\hat T_1|\Psi_0\rangle$ produces singles like $|\Psi_i^a\rangle$ (electron moved $i\to a$).
- $\hat T_2|\Psi_0\rangle$ produces the double $|\Psi_{ij}^{ab}\rangle$ (both electrons moved, $i\to a$ and $j\to b$).
- $\tfrac12\hat T_2^2|\Psi_0\rangle$ would need a *second* double, but there's only one pair of occupieds and one pair of virtuals here — so $\hat T_2^2 = 0$ in this cramped space.

That last point is the whole idea: the disconnected quadruple only appears once the system is **big enough to hold two separate pair-excitations**. In a real molecule (dozens of orbitals) there is abundant room, and $\tfrac12\hat T_2^2$ becomes large and essential. Size-extensivity is a large-system property, and the exponential is built to deliver it exactly where CI can't.

**Example 2 (why you'd care — the dissociation test).** Model two helium atoms pulled infinitely far apart; each He has a HF reference and a correlation energy $\varepsilon$ from its own doubles. What does each method give for the pair?

- **Exact / size-extensive:** correlation energy $= 2\varepsilon$. To describe *both* atoms correlated simultaneously you need the state "double on atom 1 AND double on atom 2" — a quadruple.
- **CCSD:** $e^{\hat T_2}$ contains $\tfrac12\hat T_2^2$, which supplies exactly that quadruple as the product of atom 1's double and atom 2's double. Result: $2\varepsilon$. ✓
- **CISD:** truncated at doubles, the sum $1+\hat C_1+\hat C_2$ has **no** quadruple term, so it cannot excite both atoms at once. It recovers *less* than $2\varepsilon$, and the per-atom correlation energy shrinks as you add more atoms — the size-consistency error grows with system size. ✗

This is the concrete reason coupled cluster displaced truncated CI as the accurate-correlation method of choice: same doubles, but the exponential packaging fixes the physics.

## Watch out

- **You might think CCSD only contains singles and doubles.** It's the *cluster operator* $\hat T$ that stops at doubles — the *wavefunction* $e^{\hat T}$ contains quadruples, hextuples, and beyond, as disconnected products. Truncating $\hat T$ is not truncating $|\Psi\rangle$. That distinction is the entire advantage over CISD.
- **You might expect coupled cluster to give a rigorous upper bound like the variational methods.** It does not. CC is **not variational** — the amplitude equations are solved by projection, not by minimizing $\langle\Psi|\hat H|\Psi\rangle$, so the energy can dip slightly *below* the true value. You trade the guaranteed upper bound of [3.2](03-02-configuration-interaction.md)'s CI (and the [variational principle from quantum mechanics](../../quantum-mechanics/syllabus.md)) for size-extensivity and far better accuracy — a trade almost always worth making.
- **You might reach for CCSD(T) on any hard problem.** It rests on a *single* HF reference being a good starting point. For **strong (static) correlation** — bond breaking, biradicals, some transition metals — no single determinant dominates, the perturbative "(T)" can diverge, and CCSD(T) degrades or fails, exactly as MP2 does ([3.3](03-03-moller-plesset-mp2.md)). Those cases need **multireference** methods (multireference CC or CASPT2). CCSD(T) is the gold standard *for single-reference problems*, not universally.

## One-liner

> Put the excitations in an exponent, $e^{\hat T}$, and truncating at doubles still generates the disconnected quadruples ($\tfrac12\hat T_2^2$) that make the energy scale correctly with size — the size-extensivity CISD lacks and the reason CCSD(T) is the gold standard.

## Problems

**P1 (🟢)** (a) In one sentence each, say what $\hat T_1$ and $\hat T_2$ do to the reference determinant, and state which excitations CCSD keeps in the cluster operator. (b) Rank these five by accuracy for a well-behaved closed-shell molecule, and separately note the rough cost scaling of CCSD and CCSD(T): Hartree–Fock, MP2, CISD, CCSD(T), full CI.

**P2 (🟡)** Explain size-extensivity for two non-interacting copies of a molecule, and show — using the expansion of $e^{\hat T_2}$ — which specific term lets CCSD get it right. Why can't CISD produce that term?

**P3 (🔴)** You have two jobs. **(a)** Predict the atomization energy of a medium closed-shell organic molecule to within ~1 kcal/mol. **(b)** Compute the energy profile for homolytically breaking a single bond into two radicals (a biradical near the midpoint). For each job choose among HF, MP2, CCSD(T), and a multireference method, and justify the choice in terms of single- vs multi-reference character and cost.

<details>
<summary>Solutions</summary>

**P1** (a) $\hat T_1$ promotes a single electron from an occupied spin-orbital to a virtual one (generates all singles); $\hat T_2$ promotes two electrons at once from occupied to virtual orbitals (generates all doubles). **CCSD keeps $\hat T \approx \hat T_1 + \hat T_2$** — singles and doubles in the cluster operator (and therefore, via the exponential, disconnected products of them: quadruples, etc.).

(b) Accuracy, worst to best:

$$\text{HF} \;<\; \text{MP2} \;\lesssim\; \text{CISD} \;<\; \text{CCSD(T)} \;<\; \text{full CI (exact in the basis)}.$$

HF has no correlation at all. MP2 and CISD both add correlation at roughly the "doubles" level; MP2 is size-extensive but low-order, CISD is variational but *not* size-extensive, so neither is reliably better — they sit close together and both fall well short of CCSD(T). CCSD(T) reaches chemical accuracy (~1 kcal/mol) for single-reference systems. Full CI is exact within the given basis but is only tractable for tiny systems. Cost scaling: **CCSD $\sim N^6$**, and the perturbative triples push **CCSD(T) $\sim N^7$** (with $N$ a measure of system size).

**P2** *Size-extensivity:* for two identical, non-interacting copies A and B, the total correlation energy must equal exactly twice that of one copy, $E_\text{corr}(\text{A}+\text{B}) = 2E_\text{corr}(\text{A})$, and more generally $M$ copies give $M\times$. The cluster operator splits as $\hat T = \hat T_A + \hat T_B$ (each acts only on its own fragment), and because $A$ and $B$ don't interact these commute, so

$$e^{\hat T} = e^{\hat T_A + \hat T_B} = e^{\hat T_A}\,e^{\hat T_B}.$$

The wavefunction factorizes into independent fragment wavefunctions, so the energies add — automatically. Concretely, expanding at the doubles level,

$$e^{\hat T_2} = 1 + (\hat T_{2,A} + \hat T_{2,B}) + \tfrac12(\hat T_{2,A} + \hat T_{2,B})^2 + \cdots$$

contains the cross term $\hat T_{2,A}\hat T_{2,B}$ — "a double on A **and** a double on B simultaneously," a disconnected quadruple. This is the term that lets both fragments be correlated at once, giving $2E_\text{corr}$.

*Why CISD can't:* CISD writes a truncated **sum**, $|\Psi\rangle = (1 + \hat C_1 + \hat C_2)|\Psi_0\rangle$, cut off at doubles. It has no quadruple term at all, so it cannot represent "both fragments doubly excited simultaneously." With only one fragment excitable at a time, it recovers less than $2E_\text{corr}$, and the shortfall grows with the number of fragments — the hallmark size-consistency failure. The exponential's product structure, absent from any truncated sum, is what fixes it.

**P3** **(a) Medium closed-shell molecule, ~1 kcal/mol → CCSD(T).** A stable closed-shell molecule at equilibrium is well described by a single HF determinant (single-reference), which is exactly CCSD(T)'s home turf; it is the standard route to chemical accuracy and the cost ($\sim N^7$) is acceptable for a medium molecule. HF alone (no correlation) and MP2 (low-order, typically several kcal/mol off) won't reliably hit 1 kcal/mol; a multireference method is unnecessary overkill here and harder to use routinely.

**(b) Bond homolysis into two radicals → multireference method** (e.g. multireference CC, CASSCF/CASPT2, or another MRCI-type approach). Near the dissociation midpoint the bonding and antibonding configurations become near-degenerate: **no single determinant dominates**, so the problem is strongly (statically) correlated and single-reference character is lost. CCSD(T) and MP2 both assume a good single reference and degrade or diverge here — in particular the perturbative "(T)" and the MP denominators blow up as the relevant orbital gap collapses. Only a genuinely multireference treatment, which builds in several determinants on an equal footing, describes the whole curve correctly. (HF is hopeless for both correlation *and* the near-degeneracy.)

</details>

## Flashback

**From Lesson 3.2 (Configuration Interaction):** Consider $M$ identical, infinitely separated $\ce{H2}$ molecules, each with an *exact* correlation energy $\varepsilon$ in some basis. (a) What is the exact total correlation energy of the collection? (b) A size-*consistent* method returns what fraction of the exact answer as $M$ grows; and what happens to CISD's recovered fraction as $M$ increases? (Fresh variant — reason it out, no arithmetic needed.)

<details>
<summary>Solution</summary>

(a) The molecules don't interact, so correlation energy is additive: the exact total is $M\varepsilon$.

(b) A **size-consistent (size-extensive)** method returns the full $M\varepsilon$ for every $M$ — the recovered fraction stays at 100%, because (as in P2) its wavefunction factorizes over the independent molecules. **CISD does not.** Truncated at doubles, it can excite at most one $\ce{H2}$'s pair at a time and lacks the higher (quadruple, sextuple, …) excitations needed to correlate several molecules simultaneously. So the fraction of $\varepsilon$ it recovers *per molecule* shrinks as $M$ grows: the absolute error grows without bound and, in the limit of many molecules, CISD collapses toward the uncorrelated HF result per molecule. This is precisely the flaw the exponential ansatz $e^{\hat T}$ repairs — the point of this lesson.

</details>

## Connections

- **Backward:** this is the fix for [3.2](03-02-configuration-interaction.md)'s size-consistency failure — same singles-and-doubles building blocks, but exponentiated instead of summed. The perturbative "(T)" correction borrows the machinery of [3.3](03-03-moller-plesset-mp2.md)'s Møller–Plesset perturbation theory, and both inherit the [second-quantized excitation operators of 2.1](02-01-many-electrons-antisymmetry.md). The lost variational upper bound is the [variational principle you met in quantum mechanics](../../quantum-mechanics/syllabus.md), now deliberately traded away.
- **Forward:** CCSD(T) is the accuracy benchmark against which cheaper methods are judged — including [3.5](03-05-dft-hohenberg-kohn.md)'s density functional theory, which chases coupled-cluster accuracy at a fraction of the cost by reformulating everything in terms of the electron density rather than the wavefunction. When you later read a calculation critically (Module 4), "CCSD(T)/large basis" is the phrase that signals a trustworthy single-reference result.
- **Sideways:** the "exponential of a sum becomes a product over independent subsystems" identity is the same structural fact behind **extensivity in statistical mechanics** — non-interacting subsystems multiply their partition functions ($Z = Z_A Z_B$) and *add* their free energies, exactly as coupled cluster's fragments multiply their wavefunctions and add their energies. Size-extensivity is the electronic-structure face of that thermodynamic additivity you met in physical chemistry.
