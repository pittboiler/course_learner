# Quantum Chemistry · Lesson 3.1: The Correlation Problem

> ⏱ ~15 min · Module 3: Electron Correlation and DFT · Builds on: [2.2 The Hartree–Fock equations](02-02-hartree-fock-equations.md), [2.1 Many electrons and antisymmetry](02-01-many-electrons-antisymmetry.md) · Unlocks: [3.2 Configuration interaction](03-02-configuration-interaction.md)

## Why this matters

Hartree–Fock is the best single-determinant wavefunction there is — and it is still *wrong*, systematically, by an amount called the **correlation energy**. That leftover is small (usually ~1% of the total energy) but it is the entire chemistry: bond energies, reaction barriers, and how molecules come apart all live inside the piece HF throws away. Every method in this module — CI, MP2, coupled cluster, DFT — exists to claw back that 1%. So before we build them, we need to know exactly what HF misses, and why. The punchline is a picture you will meet as boss problem 3: HF cannot even break the bond in $\ce{H2}$ correctly.

## The idea

HF's one simplifying move (from [2.2](02-02-hartree-fock-equations.md)) is the **mean field**: each electron moves in the *average* smeared-out cloud of all the others, not their instantaneous positions. That is like navigating a crowded room by staring at a time-lapse photo of where people usually stand — you'd bump into everyone, because real people *dodge each other in the moment*. Electrons dodge too: they repel via $1/r_{12}$, so when one is *here*, the others are pushed *there*, right now. That instantaneous "you go left, I'll go right" is **electron correlation**, and averaging destroys it.

HF isn't blind to *all* of this. Antisymmetry (the [2.1](02-01-many-electrons-antisymmetry.md) Slater determinant) already keeps two **same-spin** electrons apart — that is the **Fermi hole** (exchange), and HF has it built in for free. What HF misses is the **Coulomb hole**: the extra dodging that *opposite-spin* electrons should also do, purely to lower their repulsion, but which antisymmetry does not enforce. The energy you recover by letting opposite-spin electrons dodge is the correlation energy. It is always a *lowering*, because HF was already doing the best a single determinant can — there is nowhere to go but down.

## The formal version

**Correlation energy.**

$$\boxed{\,E_\text{corr} = E_\text{exact} - E_\text{HF}\,} \qquad E_\text{corr} < 0.$$

*In words: the correlation energy is how much lower the true energy sits below Hartree–Fock — and it is always negative.* The sign is not luck. The variational principle you met in quantum mechanics ([syllabus](../../quantum-mechanics/syllabus.md)) guarantees any trial wavefunction gives an energy $\ge$ the true ground state, and the HF determinant is one such trial function, so $E_\text{HF} \ge E_\text{exact}$. "Exact" here means the exact non-relativistic energy *in the same one-electron basis* — the **full configuration interaction (full CI)** limit, i.e. what you'd get by letting the electrons occupy the available orbitals in every allowed combination (that machinery is [3.2](03-02-configuration-interaction.md)). So:

$$E_\text{HF} \;\ge\; E_\text{full CI} = E_\text{exact (in basis)}, \qquad E_\text{corr} = E_\text{full CI} - E_\text{HF} \le 0.$$

**Two flavors of correlation.** They differ in *how many* determinants you need to fix the error.

- **Dynamic correlation** — many small, short-range corrections: the Coulomb hole, electrons instantaneously dodging. No single excited configuration dominates; you recover it by mixing in *many* excited determinants each with a small weight. This is the target of **MP2** ([3.3](03-03-moller-plesset-mp2.md)) and **coupled cluster** ([3.4](03-04-coupled-cluster-taste.md)). *In words: lots of tiny fixes that add up.*

- **Static (nondynamic) correlation** — one big qualitative failure: two or more configurations are *near-degenerate* and both physically essential, so a single determinant is simply the wrong shape to begin with. Arises in bond breaking, biradicals, and transition-metal near-degeneracies. No amount of "small fixes" helps; you need a genuinely **multi-configuration** wavefunction (CI / CASSCF, [3.2](03-02-configuration-interaction.md)). *In words: HF picked the wrong starting picture, not just a slightly-off one.*

**The canonical failure — $\ce{H2}$ dissociation.** Restricted HF (RHF) forces both electrons into the *same* spatial orbital, the bonding MO $\sigma_g = \tfrac{1}{\sqrt{2(1+S)}}(1s_A + 1s_B)$ (the LCAO picture from [1.6](01-06-h2-plus-lcao.md), $S$ = overlap). The two-electron spatial part is then the product $\sigma_g(1)\,\sigma_g(2)$. Expand it at large separation $R$, where $1s_A$ and $1s_B$ barely overlap:

$$\sigma_g(1)\sigma_g(2) \propto \underbrace{1s_A(1)1s_B(2) + 1s_B(1)1s_A(2)}_{\text{covalent: } \ce{H\cdot} + \ce{H\cdot}} \;+\; \underbrace{1s_A(1)1s_A(2) + 1s_B(1)1s_B(2)}_{\text{ionic: } \ce{H+} + \ce{H-}}.$$

*In words: forcing both electrons into one delocalized MO gives a 50/50 mixture of "one electron on each atom" and "both electrons on the same atom."* At large $R$ the ionic pieces cost a huge amount of energy (you paid to strip an electron off one H and cram it onto the other), so RHF dissociates $\ce{H2}$ to an energy far *above* two neutral H atoms — the **static-correlation error** in the picture below. The cure is to mix in the doubly-excited configuration $\sigma_u^{2}$ (both electrons in the *antibonding* MO $\sigma_u = 1s_A - 1s_B$); the right combination exactly cancels the ionic terms and leaves clean covalent dissociation. That mixing of two near-degenerate configurations *is* static correlation, and building it is the job of [3.2](03-02-configuration-interaction.md).

## Picture

![H2 potential energy curves: the exact curve levels off at twice the energy of a hydrogen atom, while the restricted Hartree–Fock curve climbs above it at large bond length; the widening gap between them is the correlation energy, and the plateau difference is the dissociation error](assets/03-01-fig1.svg)

Near equilibrium $R_e$ the two curves nearly coincide — HF is good there, missing only a little *dynamic* correlation. As the bond stretches, the coral RHF curve peels away *upward* and plateaus too high: that growing gap is *static* correlation, and it is the single-determinant model failing outright.

## Worked examples

**Example 1 (the sign, concretely).** For $\ce{H2}$ at equilibrium in a given basis, suppose $E_\text{HF} = -1.1336$ hartree and full CI gives $E_\text{exact} = -1.1516$ hartree (1 hartree = 1 atomic unit of energy $\approx 27.21$ eV; atomic units set $\hbar = m_e = e = 4\pi\varepsilon_0 = 1$). Then

$$E_\text{corr} = E_\text{exact} - E_\text{HF} = -1.1516 - (-1.1336) = -0.0180\ \text{hartree} \approx -0.49\ \text{eV}.$$

Negative, as it must be, and about 1.6% of the total — small in fraction, but half an eV is a solid chunk of a chemical bond. Note the *direction* of the check: if you ever compute $E_\text{corr} > 0$, you have a bug (or your "exact" number isn't variational).

**Example 2 (which hole, and why it's opposite-spin).** In ground-state $\ce{H2}$ the two electrons have *opposite* spin (they share one spatial orbital, so the Pauli principle forces $\uparrow\downarrow$). Antisymmetry — the Fermi hole — only keeps *same*-spin electrons apart, so here it does *nothing* to separate the pair. The only thing that should keep these two opposite-spin electrons on opposite atoms is their mutual repulsion: the **Coulomb hole**. RHF, having no Coulomb hole, happily lets both electrons pile onto the same atom half the time — which is exactly the spurious ionic term above. This is why $\ce{H2}$ dissociation is the textbook correlation failure: the one interaction that matters is the one HF cannot see.

## Watch out

- **You might think correlation energy could be positive if HF "overshoots."** It can't. HF is a valid variational trial function, so $E_\text{HF} \ge E_\text{exact}$ *always*; $E_\text{corr} \le 0$ is a theorem, not a tendency.
- **You might think HF ignores electron repulsion entirely.** It doesn't — HF includes the full *average* Coulomb repulsion (the $J$ terms) and *exact* exchange (the $K$ terms / Fermi hole) from [2.2](02-02-hartree-fock-equations.md). What it misses is only the *instantaneous* opposite-spin avoidance. "No correlation" means "no Coulomb hole," not "no repulsion."
- **You might think adding more determinants always means dynamic correlation.** Not so. For $\ce{H2}$ at large $R$ you add essentially *one* determinant ($\sigma_u^2$) with a *large* weight — that's static correlation. Dynamic correlation is the regime of *many* determinants each with *small* weight. It's the weight profile, not the count, that names the flavor.
- **You might think "exact" means experiment.** Here it means exact *within the chosen basis* — the full CI limit. Basis-set error is a separate problem ([2.5](02-05-basis-sets.md)); correlation energy is defined at fixed basis.

## One-liner

> Correlation energy is the always-negative gap $E_\text{exact}-E_\text{HF}$ that the mean field misses — the opposite-spin Coulomb hole HF can't see — and its most dramatic form, static correlation, is why single-determinant RHF dissociates $\ce{H2}$ to a half-ionic, too-high energy.

## Problems

**P1 (🟢)** Define the correlation energy $E_\text{corr}$ and state its sign, justifying the sign in one sentence. Then say which of the two "holes" Hartree–Fock captures and which it misses, naming the physical origin of each.

**P2 (🟡)** Distinguish *dynamic* from *static* correlation. Give one concrete chemical example of each, and name the method family you'd reach for to recover each one.

**P3 (🔴)** Explain the RHF $\ce{H2}$ dissociation failure. Specifically: why does forcing both electrons into the bonding MO $\sigma_g$ produce a wavefunction that is half-ionic at large $R$, and what single additional configuration must be mixed in to fix it? (This previews the configuration interaction of [3.2](03-02-configuration-interaction.md).)

<details>
<summary>Solutions</summary>

**P1** The correlation energy is the difference between the exact energy (full CI limit, same basis) and the Hartree–Fock energy:

$$E_\text{corr} = E_\text{exact} - E_\text{HF}.$$

It is **always negative** ($E_\text{corr} \le 0$): HF is a single-determinant variational trial function, so by the variational principle $E_\text{HF} \ge E_\text{exact}$, and the difference can only be a lowering.

HF **captures** the **Fermi hole** (exchange correlation between *same-spin* electrons), which comes for free from the antisymmetry of the Slater determinant ([2.1](02-01-many-electrons-antisymmetry.md)). HF **misses** the **Coulomb hole** — the instantaneous avoidance of *opposite-spin* electrons driven by $1/r_{12}$ repulsion — because the mean-field approximation replaces the other electrons by their time-averaged density, erasing instantaneous dodging.

**P2** *Dynamic* correlation is the sum of many small, short-range corrections — the Coulomb hole, electrons instantaneously avoiding each other — where no single excited determinant dominates and you mix in *many* determinants each with a *small* weight. Example: the correlation energy of a closed-shell molecule near equilibrium, e.g. the electron pairs in $\ce{H2O}$ or $\ce{CH4}$ at its equilibrium geometry. Method family: single-reference post-HF methods — **MP2** ([3.3](03-03-moller-plesset-mp2.md)), **coupled cluster** ([3.4](03-04-coupled-cluster-taste.md)).

*Static (nondynamic)* correlation appears when two or more configurations are near-degenerate and *both essential*, so a single determinant is qualitatively the wrong wavefunction. Example: a stretched/breaking bond such as $\ce{H2}$ at large $R$ (also biradicals, or transition-metal centers with near-degenerate $d$ configurations). Method family: **multi-configuration** methods — CI / **CASSCF** ([3.2](03-02-configuration-interaction.md)).

**P3** RHF forces *both* electrons into the same bonding spatial orbital $\sigma_g \propto 1s_A + 1s_B$, so the spatial two-electron function is the product $\sigma_g(1)\sigma_g(2)$. Multiplying out,

$$\sigma_g(1)\sigma_g(2) \propto \big[1s_A(1)1s_B(2) + 1s_B(1)1s_A(2)\big] + \big[1s_A(1)1s_A(2) + 1s_B(1)1s_B(2)\big].$$

The first bracket is **covalent** (one electron on each atom, $\ce{H\cdot} + \ce{H\cdot}$); the second is **ionic** (both electrons on the same atom, $\ce{H+} + \ce{H-}$). The single MO gives them equal weight, so the RHF state is 50% ionic *at every* $R$. Near equilibrium that's fine, but as $R \to \infty$ the ionic terms cost a huge energy (an electron transferred against Coulomb attraction), so RHF dissociates to an energy far above two neutral H atoms — the static-correlation error.

The fix is to mix in the **doubly-excited configuration** $\sigma_u^{2}$, both electrons in the *antibonding* MO $\sigma_u \propto 1s_A - 1s_B$. Since $\sigma_u(1)\sigma_u(2) \propto [\text{covalent}] - [\text{ionic}]$ (same covalent terms, *opposite*-sign ionic terms), the combination

$$c_g\,\sigma_g^2 + c_u\,\sigma_u^2$$

can be tuned so the ionic parts cancel as $R$ grows (in the dissociation limit $c_g \to -c_u$), leaving a purely covalent wavefunction that correctly gives two neutral H atoms. Needing *two* near-degenerate configurations with comparable weight is precisely static correlation, and constructing this two-configuration wavefunction is configuration interaction ([3.2](03-02-configuration-interaction.md)).

</details>

## Flashback

**From Lesson 2.2 (The Hartree–Fock equations):** In the HF energy of a closed-shell system, the electron–electron interaction between two occupied spatial orbitals $i$ and $j$ enters as $2J_{ij} - K_{ij}$, where $J_{ij}$ is the Coulomb integral and $K_{ij}$ the exchange integral. (a) In one phrase each, what physical effect does each term represent? (b) The exchange term $K_{ij}$ acts only between electrons of a particular spin relationship — which, and what earlier-in-this-lesson "hole" is it responsible for?

<details>
<summary>Solution</summary>

(a) $J_{ij}$ is the classical **Coulomb repulsion** between the two charge clouds $|\phi_i|^2$ and $|\phi_j|^2$ — the average electrostatic energy of one electron in the mean field of the other. $K_{ij}$ is the **exchange interaction**, a purely quantum term with no classical analog, arising from the antisymmetry of the wavefunction; it *lowers* the energy by keeping like-spin electrons apart.

(b) Exchange acts only between electrons of the **same spin** (the $K$ term survives only for parallel spins; for opposite spins the spin integral kills it). It is responsible for the **Fermi hole** — the same-spin avoidance that HF gets for free, as opposed to the opposite-spin Coulomb hole it misses. The factor $2J_{ij} - K_{ij}$ encodes this: both same-spin *and* opposite-spin pairs feel Coulomb repulsion ($J$ counted for both spins, giving the 2), but only the same-spin pair also gets the exchange lowering ($K$ once).

</details>

## Connections

- **Backward:** correlation is defined *relative to* the mean-field HF energy of [2.2](02-02-hartree-fock-equations.md), and the Fermi hole HF already owns is the antisymmetry of the Slater determinant from [2.1](02-01-many-electrons-antisymmetry.md). The $\sigma_g/\sigma_u$ MOs whose mixing cures $\ce{H2}$ are the LCAO bonding/antibonding orbitals of [1.6](01-06-h2-plus-lcao.md) — themselves the quantitative face of general chemistry's bonding/antibonding picture ([gen-chem 1.5](../../general-chemistry/lessons/01-05-molecular-shape-vsepr-hybridization-mo.md)).
- **Forward:** every remaining Module 3 method is a strategy for recovering $E_\text{corr}$ — [3.2 configuration interaction](03-02-configuration-interaction.md) (static, via multiple determinants), [3.3 MP2](03-03-moller-plesset-mp2.md) and [3.4 coupled cluster](03-04-coupled-cluster-taste.md) (dynamic, via perturbation/exponential ansätze), and [3.5–3.6 DFT](03-05-dft-hohenberg-kohn.md) (both, folded into an exchange–correlation functional).
- **Sideways:** the $\ce{H2}$ static-correlation failure is the same "single reference is the wrong shape" problem that plagues transition-metal and biradical chemistry — a bridge to why inorganic and organometallic modeling leans on multireference methods, and why a computed bond-dissociation curve must be read critically ([4.4](04-04-reading-calculation-critically.md)).
