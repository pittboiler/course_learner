# Algebraic Topology — Syllabus

> Mathematics · Tier 2 · ~21 lessons · Prereqs: [topology](../topology/syllabus.md), [abstract-algebra](../abstract-algebra/syllabus.md) · Roadmap id: `algebraic-topology`

## Goal

Turn spaces into algebra you can compute with: attach groups to a space that are invariant under continuous deformation, so "these two spaces are genuinely different" becomes a finite calculation instead of a hunch. You will build the fundamental group and homology from the ground up, learn the covering-space dictionary between subgroups and connected covers, and cash it all out in fixed-point and dimension theorems. We deliberately stop before spectral sequences, stable homotopy, and the machinery of characteristic classes — this is the working toolkit, not the frontier.

## Dangerous Checklist

When you finish, you can:

- [ ] Decide whether two loops are homotopic, and compute $\pi_1$ of a space from a good picture of it
- [ ] Prove $\pi_1(S^1) \cong \mathbb{Z}$ and use it to derive Brouwer in dimension 2 and the fundamental theorem of algebra
- [ ] Lift maps and homotopies through a covering space, and read off when a lift exists from the subgroup condition
- [ ] Classify the connected covers of a space via the subgroups of its fundamental group (the Galois correspondence)
- [ ] Compute a fundamental group by cutting the space into pieces and running Seifert–van Kampen
- [ ] Write down a group presentation and recognize the group a van Kampen calculation hands you
- [ ] Build a $\Delta$- or CW-structure on a space and read its cellular chain complex off the picture
- [ ] Compute simplicial and singular homology of spheres, surfaces, and projective spaces
- [ ] Use the long exact sequence of a pair and Mayer–Vietoris to bootstrap unknown homology from known
- [ ] Apply the Eilenberg–Steenrod axioms to identify a homology theory without touching its construction
- [ ] Compute a cup product and use the ring structure to distinguish spaces homology alone cannot
- [ ] Prove Brouwer in all dimensions, invariance of domain, and compute the degree of a self-map of $S^n$

## Modules

### Module 1: Homotopy & the Fundamental Group

From "continuously deform" to a group: define homotopy, build $\pi_1$, prove it's a functor, and compute the one example that powers everything downstream.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Homotopy of maps | Say precisely when two maps or spaces are "the same up to deformation" | homotopy, homotopy equivalence, contractible, deformation retract |
| 1.2 | Paths, loops, and $\pi_1$ | Multiply loops and prove the product makes a group | path homotopy, concatenation, basepoint, the group axioms |
| 1.3 | Basepoints and functoriality | Move between basepoints and turn maps of spaces into maps of groups | change-of-basepoint isomorphism, induced homomorphism $f_*$, functor |
| 1.4 | $\pi_1(S^1) \cong \mathbb{Z}$ | Compute the circle's fundamental group via winding | lifting to $\mathbb{R}$, degree/winding number, the exponential cover |
| 1.5 | First payoffs | Turn one computation into classic theorems | Brouwer in dim 2, no-retraction lemma, fundamental theorem of algebra |

**Boss problem 1:** Prove the Borsuk–Ulam theorem in dimension 2 — every continuous $f\colon S^2 \to \mathbb{R}^2$ identifies some antipodal pair — by assuming otherwise, building the induced map on $S^1$, and deriving a contradiction from $\pi_1(S^1) \cong \mathbb{Z}$. Then deduce that $S^2$ is not homeomorphic to any subset of $\mathbb{R}^2$ (the "ham sandwich in disguise").

### Module 2: Covering Spaces & Seifert–van Kampen

The two engines for computing fundamental groups: unwrap a space into a cover and read subgroups off it, or cut a space into pieces and glue their groups.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Covering spaces & lifting | Recognize a cover and lift paths and homotopies uniquely | covering map, evenly covered, path/homotopy lifting, monodromy |
| 2.2 | The lifting criterion & classification | Decide when a map lifts and match connected covers to subgroups | lifting criterion, $p_*\pi_1$ subgroup, universal cover, classification theorem |
| 2.3 | Deck transformations & the Galois correspondence | Read a cover's symmetries as a quotient of $\pi_1$ | deck group, normal/regular covers, $N(H)/H$, subgroup lattice ↔ cover lattice |
| 2.4 | Free groups & presentations | Write groups by generators and relations, and recognize free ones | free group, universal property, presentation, wedge of circles |
| 2.5 | Seifert–van Kampen | Compute $\pi_1$ of a union from its pieces | pushout of groups, amalgamated free product, open cover hypotheses |
| 2.6 | Van Kampen in the wild | Compute $\pi_1$ of surfaces and CW complexes from a cell structure | surface relations, $\pi_1$ from a 2-complex, knot-complement taste |

**Boss problem 2:** Compute $\pi_1$ of the closed orientable genus-2 surface via a van Kampen decomposition of its octagon identification, obtaining the presentation $\langle a_1,b_1,a_2,b_2 \mid [a_1,b_1][a_2,b_2]\rangle$. Then use the covering-space dictionary to describe the connected double cover corresponding to the abelianization mod 2, and state its genus.

### Module 3: Homology

Homotopy sees loops; homology sees holes of every dimension and — crucially — is computable. Build it two ways, prove they agree, and compute.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Simplicial & $\Delta$-complexes | Assemble spaces from simplices and orient them | simplex, $\Delta$-complex, boundary orientation, face maps |
| 3.2 | Simplicial homology | Turn a $\Delta$-complex into groups $H_n$ via $\partial^2 = 0$ | chain group, boundary operator, cycles/boundaries, $H_n = \ker\partial/\operatorname{im}\partial$ |
| 3.3 | Singular homology | Define homology for any space, no triangulation required | singular simplex, singular chain complex, homotopy invariance |
| 3.4 | CW complexes & cellular homology | Compute homology fast from a cell structure | CW complex, attaching maps, cellular chain complex, degree of attaching |
| 3.5 | The Eilenberg–Steenrod axioms | Identify a homology theory by its axioms, not its guts | homotopy, exactness, excision, dimension axioms; uniqueness |

**Boss problem 3:** Give $\mathbb{RP}^2$ a CW structure with one cell in each dimension $0,1,2$, write down the cellular chain complex (getting the boundary map $\times 2$), and compute $H_0 = \mathbb{Z}$, $H_1 = \mathbb{Z}/2$, $H_2 = 0$. Then explain in one paragraph why the $\mathbb{Z}/2$ torsion class is invisible to $\pi_1$'s abelianization computed any other way — i.e. reconcile it with $\pi_1(\mathbb{RP}^2) = \mathbb{Z}/2$.

### Module 4: Exact Sequences, Cohomology & Applications

Homology becomes a machine when it comes in exact sequences. Then dualize to cohomology for a ring structure, and spend the theory on the theorems that made it famous.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The long exact sequence of a pair | Compute relative homology and chase the connecting map | relative homology $H_n(X,A)$, LES, connecting homomorphism $\partial$, diagram chasing |
| 4.2 | Mayer–Vietoris | Bootstrap $H_n$ of a union from an overlap | MV sequence, derivation from excision, computing spheres and tori |
| 4.3 | Degree & applications | Assign an integer to a self-map of $S^n$ and harvest theorems | degree, Brouwer in all dimensions, hairy ball theorem, local degree |
| 4.4 | Cohomology & cup products | Dualize homology and multiply cohomology classes | cochains, $H^n$, cup product, cohomology ring, distinguishing $S^2\vee S^4$ from $\mathbb{CP}^2$ |
| 4.5 | Invariance of domain | Prove open sets of $\mathbb{R}^n$ stay open, and dimension is a topological invariant | invariance of domain, local homology $H_n(X,X\setminus x)$, $\mathbb{R}^m \not\cong \mathbb{R}^n$ |

**Boss problem 4:** Using Mayer–Vietoris on the standard cover of $S^n$ by two hemispheres, prove by induction that $H_k(S^n) = \mathbb{Z}$ for $k \in \{0,n\}$ and $0$ otherwise. Then, taking degree as known, deduce that $S^n$ admits a nonvanishing tangent vector field if and only if $n$ is odd (the hairy ball theorem), spelling out where the parity of the antipodal map's degree $(-1)^{n+1}$ enters.

## Sources of truth

- Hatcher, *Algebraic Topology* — the primary spine for definitions, the CW viewpoint, and problem style.
- May, *A Concise Course in Algebraic Topology* — for the clean, axiomatic (Eilenberg–Steenrod) treatment when Hatcher is hands-on.
- Munkres, *Topology* (Part II) and *Elements of Algebraic Topology* — for the careful point-set lifting arguments and simplicial homology bookkeeping.
