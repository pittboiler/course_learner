# Group & Representation Theory — Syllabus

> Tier 2 · ~20 lessons · Prereqs: [`abstract-algebra`](../abstract-algebra/syllabus.md), [`linalg-refresher`](../linalg-refresher/syllabus.md) · Roadmap id: `representation-theory`

## Goal

Learn to see symmetry as linear algebra: a representation turns an abstract group into matrices, and the whole subject is the study of how those matrices decompose. You will be able to break any finite-group representation into irreducible pieces, build and read a character table, and — the payoff — recognize $SU(2)/SO(3)$ representation theory as the angular momentum and spin of quantum mechanics, with a first look at how Lie algebras encode continuous symmetry in physics. Deliberately skipped: the full classification of semisimple Lie algebras (Dynkin diagrams appear only as a taste), infinite-dimensional representations (one note), and modular/characteristic-$p$ representation theory beyond why we stay over $\mathbb{C}$.

## Dangerous Checklist

When you finish, you can:

- [ ] Write down a representation of a group and check whether two representations are equivalent
- [ ] Find an invariant subspace and decide whether a representation is reducible
- [ ] Apply Maschke's theorem to split a finite-group representation into irreducibles, and say why it needs $\mathbb{C}$ (or characteristic zero)
- [ ] Use Schur's lemma to pin down the commutant of an irreducible and count multiplicities
- [ ] Compute the character of a representation and use column/row orthogonality
- [ ] Construct the character table of a small group ($S_3$, $D_4$, $A_4$) from scratch
- [ ] Decompose a given representation into irreducibles by taking inner products of characters
- [ ] Reduce a tensor product via Clebsch–Gordan and read off selection rules and degeneracy splitting
- [ ] Pass between a Lie group and its Lie algebra through the exponential map
- [ ] Build the spin-$j$ irreducibles of $\mathfrak{su}(2)$ with ladder operators and recover the angular-momentum spectrum
- [ ] Explain the $SU(2)\to SO(3)$ double cover and why spin-$\tfrac12$ needs a $4\pi$ rotation
- [ ] Read a weight diagram and sketch how $SU(3)$ organizes the quark model

## Modules

### Module 1: Representations of finite groups

What a representation is, and the two theorems everything downstream rests on.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | What is a representation? | Turn a group into matrices and know when two count as the same | homomorphism $G\to GL(V)$, degree, matrix vs abstract view, equivalence (conjugacy) |
| 1.2 | Examples and unitarity | Build the reps you will use all course and make them unitary | trivial/sign/regular/permutation reps, averaging trick, every finite-group rep is unitarizable |
| 1.3 | Reducibility and invariant subspaces | Spot when a representation hides a smaller one inside | invariant subspace, subrepresentation, direct sum, (ir)reducibility |
| 1.4 | Maschke's theorem | Prove complete reducibility — the reason finite-group rep theory is clean | complete reducibility, averaging a projection, why characteristic $0$ / $\mathbb{C}$ |
| 1.5 | Schur's lemma | Get the rigidity lemma that makes irreducibles behave like scalars | intertwiners, Schur's lemma (both parts), commutant, scalar maps over $\mathbb{C}$ |

**Boss problem 1:** Take the 6-dimensional regular representation of $S_3$. Exhibit an explicit $G$-invariant inner product, then use invariant subspaces to split it by hand into the trivial, sign, and (twice) the 2-dimensional irreducible — verifying Maschke concretely — and use Schur's lemma to confirm the 2-dimensional piece is irreducible by computing its commutant.

### Module 2: Character theory

Trade matrices for a single number per conjugacy class — and recover everything.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Characters | Compress a representation to a class function without losing what matters | character $\chi(g)=\operatorname{tr}\rho(g)$, class functions, $\chi$ determines the rep |
| 2.2 | Orthogonality relations | Get the inner product that separates irreducibles | first orthogonality (rows), inner product of characters, irreducibility test $\langle\chi,\chi\rangle=1$ |
| 2.3 | Building a character table | Assemble the full table from counts and constraints | number of irreducibles = number of classes, $\sum d_i^2=|G|$, column orthogonality |
| 2.4 | Decomposing a representation | Read off how many copies of each irreducible you have | multiplicity $=\langle\chi,\chi_i\rangle$, isotypic components, canonical decomposition |
| 2.5 | The regular representation | See every irreducible appear, and count dimensions | regular character, $\rho_{\text{reg}}=\bigoplus d_i\,\rho_i$, $\sum d_i^2=|G|$ revisited |

**Boss problem 2:** Construct the complete character table of $S_3$ (equivalently the symmetry group of an equilateral triangle) from scratch — conjugacy classes, dimensions via $\sum d_i^2=|G|$, and orthogonality. Then decompose the natural 3-dimensional permutation representation into irreducibles two ways: by inner products of characters, and by exhibiting the invariant subspaces directly.

### Module 3: Symmetry in action

Where the machinery earns its keep — combining representations and reading physics off them.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Tensor products of representations | Combine two systems and know the character rule | tensor product rep, $\chi_{V\otimes W}=\chi_V\chi_W$, symmetric/antisymmetric squares |
| 3.2 | Clebsch–Gordan decomposition | Break a product back into irreducibles | Clebsch–Gordan series, coupling, worked finite-group example |
| 3.3 | Restriction and induction (a taste) | Move representations between a group and a subgroup | restriction $\operatorname{Res}$, induction $\operatorname{Ind}$, Frobenius reciprocity (statement + use) |
| 3.4 | Molecular vibrations and selection rules | Use characters to predict which modes and transitions are allowed | reducible rep of displacements, symmetry-adapted modes, IR/Raman selection rules |
| 3.5 | Degeneracy and symmetry breaking | Explain why energy levels split when symmetry lowers | symmetry $\Rightarrow$ degeneracy, subducing to a subgroup, level splitting / crystal field |

**Boss problem 3:** For a molecule with $C_{3v}$ symmetry, build the reducible representation carried by its atomic displacements, subtract translations and rotations, and decompose the remainder into irreducibles to classify the vibrational modes. Then lower the symmetry to $C_s$ and show, via subduction, exactly which degenerate modes split — the representation-theory picture of symmetry breaking.

### Module 4: Lie groups and Lie algebras

Continuous symmetry — and the module where $SU(2)$ *is* spin.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | From finite to continuous: Lie groups | See a symmetry group that is also a smooth manifold | Lie group, matrix groups $GL_n,U(n),SO(n),SU(n)$, one-parameter subgroups |
| 4.2 | Lie algebras and the exponential map | Linearize a group at the identity and get back with $\exp$ | tangent space at $e$, bracket $[X,Y]$, $\exp$, structure constants |
| 4.3 | $SU(2)$, $SO(3)$, and the double cover | Understand why spin-$\tfrac12$ needs a $4\pi$ turn | $\mathfrak{su}(2)\cong\mathfrak{so}(3)$, $2\!:\!1$ cover, spinors, Pauli matrices |
| 4.4 | Representations of $\mathfrak{su}(2)$ — angular momentum | Build every irreducible with ladder operators | $J_\pm,J_z$, highest weight $j$, spin-$j$ $(2j+1)$-dim irreducible, the QM spectrum |
| 4.5 | Adding angular momenta | Recover $SU(2)$ Clebsch–Gordan as a physics tool | $j_1\otimes j_2=\bigoplus_{|j_1-j_2|}^{j_1+j_2}j$, CG coefficients, coupled basis |
| 4.6 | Roots, weights, and a taste of $SU(3)$ | Read a weight diagram and meet the quark model | Cartan subalgebra, weights/roots, weight diagrams, $SU(3)$ fundamental, quarks (Dynkin diagram as a taste only) |

**Boss problem 4:** Starting from the abstract algebra $[J_z,J_\pm]=\pm J_\pm$, $[J_+,J_-]=2J_z$, construct the spin-$j$ irreducible representation for general $j$ using ladder operators — deriving the matrix elements $\langle j,m'|J_\pm|j,m\rangle$ and the dimension $2j+1$ — and show this reproduces the quantized angular-momentum spectrum ($J^2\to j(j+1)$, $J_z\to m$) used in [`quantum-mechanics`](../quantum-mechanics/syllabus.md).

## Sources of truth

- Fulton & Harris, *Representation Theory: A First Course* (overall arc; finite groups → Lie theory in one book)
- Serre, *Linear Representations of Finite Groups* (Modules 1–2: the clean, canonical treatment of characters)
- Georgi, *Lie Algebras in Particle Physics* (Module 4: physicist's $\mathfrak{su}(2)$, $SU(3)$, weights and the quark model)
- Zee, *Group Theory in a Nutshell for Physicists* (intuition and physics motivation throughout)

## Notes

- This is where symmetry pays off in physics. The $SU(2)/SO(3)$ representations of Module 4 **are** the angular momentum and spin of [`quantum-mechanics`](../quantum-mechanics/syllabus.md): spin-$j$ multiplets, ladder operators, and adding angular momenta are the same math seen from the group side. The Lie groups and algebras built here are the language of gauge symmetry in [`qft`](../qft/syllabus.md) — $U(1)$, $SU(2)$, and $SU(3)$ are exactly the gauge groups of the Standard Model, and the $SU(3)$ weight diagrams here are its quark content.
- Character theory (Module 3) is the standard tool for degeneracy, selection rules, and symmetry breaking in quantum systems — the same "symmetry forces degeneracy, breaking it splits levels" logic recurs from atomic physics to crystal fields.
