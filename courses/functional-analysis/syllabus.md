# Functional Analysis — Syllabus

> Tier 1 · ~22 lessons · Prereqs: [`real-analysis`](../real-analysis/syllabus.md), [`linalg-refresher`](../linalg-refresher/syllabus.md), [`topology`](../topology/syllabus.md) · Roadmap id: `functional-analysis`

## Goal

Learn to do linear algebra where the vectors are functions and the dimension is infinite — the setting where analysis and geometry fuse and where quantum mechanics actually lives. You will work fluently in Banach and Hilbert spaces, wield the four cornerstone theorems (Hahn–Banach, uniform boundedness, open mapping, closed graph), and build the spectral theorem from compact self-adjoint operators up to unbounded self-adjoint ones — ending with Stone's theorem, the honest statement of "the Schrödinger equation is a unitary flow." Deliberately skipped: heavy measure theory (we lean on [`real-analysis`](../real-analysis/syllabus.md) and [`probability-theory`](../probability-theory/syllabus.md) for $L^p$ and just cite completeness), locally convex spaces and distribution theory beyond a first taste, and C\*-algebra theory. A Tier 1 course: it assumes the $\varepsilon$–$\delta$ analysis of [`real-analysis`](../real-analysis/syllabus.md), the finite-dimensional intuition of [`linalg-refresher`](../linalg-refresher/syllabus.md), and the open-set/compactness/completeness vocabulary of [`topology`](../topology/syllabus.md).

## Dangerous Checklist

When you finish, you can:

- [ ] Check whether a normed space is complete, and name the standard Banach and Hilbert spaces ($\ell^p$, $C[a,b]$, $L^p$, $\ell^2$)
- [ ] Explain why all norms are equivalent in finite dimensions and how that fails infinitely — with the unit ball's non-compactness as the tell
- [ ] Use the projection theorem to drop a perpendicular onto a closed subspace and split a Hilbert space as $M \oplus M^\perp$
- [ ] Expand a vector in an orthonormal basis, apply Bessel/Parseval, and recognize a Fourier series as one instance
- [ ] Apply the Riesz representation theorem to identify a Hilbert space with its dual — and justify Dirac's bra–ket notation
- [ ] Compute an operator norm and find the adjoint of a bounded operator
- [ ] State and apply Hahn–Banach in both its extension and separation forms
- [ ] Deploy uniform boundedness, the open mapping theorem, and the closed graph theorem in a proof
- [ ] Find the spectrum of an operator, distinguish it from the eigenvalue set, and use the Fredholm alternative
- [ ] Diagonalize a compact self-adjoint operator and expand in its eigenbasis
- [ ] State the spectral theorem for bounded self-adjoint operators and read it as "measure how much of each spectral value the vector contains"
- [ ] Explain why position and momentum are unbounded, distinguish symmetric from self-adjoint, and read Stone's theorem as quantum time evolution

## Modules

### Module 1: Metric, normed, and Banach spaces

Set the stage: infinite-dimensional spaces of functions, and the one property — completeness — that makes analysis possible in them.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Metric spaces and completeness, revisited | Recall the machinery and see why completeness is the whole game | metric, Cauchy sequence, completeness, completion, dense subset |
| 1.2 | Normed and Banach spaces | Add a compatible length to a vector space and demand completeness | norm, normed space, Banach space, series & absolute convergence |
| 1.3 | The standard examples: $\ell^p$, $C[a,b]$, $L^p$ | Meet the spaces every later theorem is tested against | $\ell^p$ and $\ell^\infty$, sup norm on $C[a,b]$, $L^p$ as a normed space (completeness cited), Hölder & Minkowski |
| 1.4 | Finite vs infinite dimensions | See exactly where infinite dimension breaks finite-dimensional intuition | equivalence of norms in finite dim, non-compactness of the unit ball, Riesz's lemma, separability |

**Boss problem 1:** Prove that $C[0,1]$ with the sup norm is complete but with the $L^1$ norm is not, exhibiting an explicit Cauchy sequence whose limit leaves the space — then explain what "completion" repairs and name the completed space.

### Module 2: Hilbert spaces — the geometry of quantum mechanics

Reintroduce angles and perpendicularity. This is the richest setting, and the one QM is built on.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Inner products and the Cauchy–Schwarz inequality | Recover geometry — angle, orthogonality, length — from an inner product | inner product, induced norm, Cauchy–Schwarz, parallelogram law, Hilbert space |
| 2.2 | Orthogonality and the projection theorem | Drop a perpendicular onto a closed subspace and split the space | orthogonal complement, closest-point projection, $M \oplus M^\perp$, orthogonal projection operator |
| 2.3 | Orthonormal bases and Fourier expansions | Write any vector as a (possibly infinite) sum of basis components | orthonormal set, Bessel's inequality, Parseval, completeness of an ONB, Gram–Schmidt, Fourier series as an instance |
| 2.4 | The Riesz representation theorem | Identify a Hilbert space with its own dual — and justify bra–ket notation | bounded linear functional, Riesz representation, self-duality, bras as inner-product-with-a-ket |

**Boss problem 2:** Prove the Riesz representation theorem (every bounded linear functional $f$ on a Hilbert space $H$ is $f(x)=\langle x, y\rangle$ for a unique $y\in H$), then use it to explain precisely why Dirac's "$\langle\phi|$" is well-defined as the functional $|\psi\rangle \mapsto \langle\phi|\psi\rangle$ and why every bra corresponds to a ket.

### Module 3: Bounded operators, dual spaces, and the big theorems

The four cornerstone theorems of the subject, and the operator/dual-space language they run on.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Bounded linear operators and the operator norm | Measure the "gain" of a linear map and see continuity = boundedness | bounded operator, operator norm, $B(X,Y)$ as a Banach space, continuity ⇔ boundedness |
| 3.2 | Dual spaces and the Hahn–Banach theorem | Guarantee enough functionals exist, and separate points from sets | dual space, Hahn–Banach extension, sublinear/seminorm dominated, separation form, geometric corollaries |
| 3.3 | The uniform boundedness principle | Turn pointwise bounds into a uniform bound via Baire category | Baire category theorem, uniform boundedness / Banach–Steinhaus, application to pointwise limits |
| 3.4 | Open mapping and closed graph theorems | Get automatic continuity from surjectivity or a closed graph | open mapping theorem, bounded inverse theorem, closed graph theorem |
| 3.5 | Adjoints of bounded operators | Transpose an operator abstractly and read off self-adjointness | Hilbert-space adjoint $T^*$, properties, self-adjoint / unitary / normal operators |

**Boss problem 3:** Use the closed graph theorem to prove that a linear operator $T$ on a Hilbert space that satisfies $\langle Tx, y\rangle = \langle x, Ty\rangle$ for all $x,y$ (everywhere-defined and symmetric) is automatically bounded — the Hellinger–Toeplitz theorem — and explain why this forces genuinely quantum operators like momentum to be defined on a *proper* subspace, foreshadowing Module 5.

### Module 4: Spectral theory

Generalize "eigenvalues and diagonalization" to infinite dimensions — culminating in the spectral theorem.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The spectrum of an operator | Replace "eigenvalues" with the right infinite-dimensional notion | resolvent, spectrum, point/continuous/residual spectrum, spectral radius, why $\sigma(T)$ is nonempty & compact |
| 4.2 | Compact operators | Isolate the operators that behave almost finite-dimensionally | compact operator, finite-rank approximation, why compactness tames the spectrum |
| 4.3 | The Fredholm alternative | Solve $ (T-\lambda)x = y$ with a clean either/or | Fredholm alternative, $I - K$ theory, existence vs uniqueness dichotomy |
| 4.4 | Spectral theorem for compact self-adjoint operators | Diagonalize: a genuine orthonormal eigenbasis with eigenvalues $\to 0$ | real discrete spectrum, orthonormal eigenbasis, eigenfunction expansion, min-max |
| 4.5 | The bounded self-adjoint spectral theorem | Upgrade to a "continuous diagonalization" when eigenvectors run out | spectral measure / projection-valued measure, functional calculus, multiplication-operator form |

**Boss problem 4:** For the integral operator $(Kf)(x)=\int_0^1 k(x,t)f(t)\,dt$ with a symmetric continuous kernel $k(x,t)=k(t,x)$, verify $K$ is compact and self-adjoint on $L^2[0,1]$, find its eigenvalues and orthonormal eigenfunctions for a concrete separable kernel, and write the resulting eigenfunction expansion (Mercer-style) of a given $f$.

### Module 5: Unbounded operators and quantum mechanics

The honest foundation: the operators QM cares about aren't bounded, and getting their domains right is the whole subtlety.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Unbounded operators and domains | Accept that the interesting operators live on dense subspaces | densely defined operator, domain, closed operator, graph, why position/momentum can't be bounded |
| 5.2 | Symmetric vs self-adjoint | Learn the distinction that trips up every physics course | adjoint of an unbounded operator, symmetric operator, self-adjoint, essentially self-adjoint, deficiency indices (overview) |
| 5.3 | The spectral theorem for unbounded self-adjoint operators | State the theorem that makes "observable = self-adjoint operator" precise | spectral measure for unbounded $A$, functional calculus, observables & measurement outcomes as spectrum |
| 5.4 | Stone's theorem and time evolution | Read the Schrödinger equation as a one-parameter unitary group | strongly continuous unitary group, generator, Stone's theorem, $U(t)=e^{-itH/\hbar}$ as quantum time evolution |

**Boss problem 5:** On $L^2[0,1]$, take the momentum operator $A = -i\,d/dx$ and show that its self-adjointness depends entirely on the boundary conditions defining its domain: exhibit boundary conditions making it self-adjoint (a one-parameter family) versus merely symmetric, compute the corresponding spectrum, and connect the choice to a physical "particle in a box / on a ring" and to Stone's theorem generating the time evolution.

## Sources of truth

- Kreyszig, *Introductory Functional Analysis with Applications* (primary; definitions, worked examples, gentle rigor)
- Brezis, *Functional Analysis, Sobolev Spaces and PDEs* (the big theorems and the analyst's viewpoint)
- Reed & Simon, *Methods of Modern Mathematical Physics, Vol. 1: Functional Analysis* (spectral theory and the quantum-mechanics-facing treatment of unbounded operators)

## Notes

- This course is the rigorous home of [`quantum-mechanics`](../quantum-mechanics/syllabus.md): state vectors *are* elements of a Hilbert space (Module 2), observables *are* self-adjoint operators (Modules 4–5), measurement outcomes *are* points of the spectrum, and time evolution *is* the one-parameter unitary group of Stone's theorem (5.4). It also underwrites [`pdes`](../pdes/syllabus.md) (eigenfunction expansions and the spectral theory of differential operators) and [`stochastic-calculus`](../stochastic-calculus/syllabus.md) (the $L^2$ Hilbert-space geometry behind $L^2$ limits, conditional expectation as orthogonal projection, and semigroups of operators).
