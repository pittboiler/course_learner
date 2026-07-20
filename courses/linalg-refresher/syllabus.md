# Linear Algebra — Syllabus

> Tier 0 · 13 lessons · Prereqs: none · Roadmap id: `linalg-refresher`

## Goal

Rebuild linear algebra as *geometry you can compute with*: vectors and the spaces they span, matrices as the linear maps that move those spaces, and the two decompositions that everything downstream leans on — the spectral theorem (symmetric matrices) and the SVD (every matrix). Emphasis on meaning first (span, rank, orthogonality, eigen-directions as the map's "grain") and fluent 2×2/3×3 computation second. Reaches inner-product spaces at the level quantum mechanics and least-squares statistics actually use. Deliberately skipped: abstract field theory, Jordan canonical form (mentioned, not drilled), infinite-dimensional subtleties (that's functional analysis), and heavy numerical stability.

## Dangerous Checklist

When you finish, you can:

- [ ] Decide whether a set of vectors is independent, and produce a basis and dimension for a span
- [ ] Solve a linear system by elimination and read off rank, pivot columns, and the solution set's shape
- [ ] Read a matrix as a linear map and predict its geometric action on a shape
- [ ] Find the four fundamental subspaces of a matrix and state the two orthogonality relations between them
- [ ] Compute a determinant and explain it as signed volume scaling (and why det = 0 means collapse)
- [ ] Find eigenvalues and eigenvectors, and diagonalize when possible
- [ ] Use diagonalization to compute matrix powers and long-run behavior of a linear dynamical system
- [ ] Compute inner products, lengths, and angles, and test orthogonality
- [ ] Project a vector onto a subspace and solve a least-squares problem
- [ ] Run Gram–Schmidt to build an orthonormal basis (and read it as a QR factorization)
- [ ] Orthogonally diagonalize a symmetric matrix and classify its quadratic form (positive definite?)
- [ ] Compute an SVD, and explain singular values as the axes of the image ellipsoid

## Modules

### Module 1: Vectors, spaces, and linear systems

The raw material: vectors, the spaces they fill out, and the elimination that solves everything.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Vectors, linear combinations, and span | See a vector two ways (arrow / list) and describe every reachable point as a span | vector, linear combination, span, subspace |
| 1.2 | Linear independence, basis, and dimension | Test for redundancy and pin down the minimal spanning set | linear independence, basis, dimension, coordinates |
| 1.3 | Linear systems, elimination, and rank | Solve $A\mathbf x=\mathbf b$ by elimination and read the solution set's shape | Gaussian elimination, pivots, rank, homogeneous vs. particular solutions |

**Boss problem 1:** Given four vectors in $\mathbb{R}^3$, find a basis for their span and its dimension; then given a matrix $A$, describe the full solution set of $A\mathbf x=\mathbf b$ (particular + null-space) and connect its dimension to the rank.

### Module 2: Matrices as linear maps

Stop seeing a matrix as a number grid and start seeing it as a transformation.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Matrices as linear transformations | Read $A\mathbf x$ as "where the map sends $\mathbf x$", with columns = images of the basis | linear map, matrix–vector product, composition = matrix multiplication |
| 2.2 | Inverses and the four fundamental subspaces | Invert a map when possible; name the four subspaces and their orthogonality | inverse, column/row space, null space, left null space, rank–nullity |
| 2.3 | Determinants: volume, orientation, invertibility | Compute a determinant and read it as signed volume scaling | determinant, cofactor/row-reduction, $\det = 0 \iff$ singular, orientation |

**Boss problem 2:** For a given 3×3 matrix, describe its geometric action, compute its determinant and inverse (or show none exists), find all four fundamental subspaces, and verify rank + nullity = 3 and the two orthogonality relations.

### Module 3: Eigenvalues and diagonalization

Find the directions a map merely stretches — its natural coordinate system.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Eigenvalues and eigenvectors | Find the directions preserved by a map and their stretch factors | eigenvalue, eigenvector, characteristic polynomial, eigenspace |
| 3.2 | Diagonalization and matrix powers | Rewrite $A = PDP^{-1}$ and use it to compute $A^k$ and long-run dynamics | diagonalization, similar matrices, $A^k$, Markov/dynamical-system limit |

**Boss problem 3:** Diagonalize a 2×2 matrix and use it to get a closed form for a linear recurrence (e.g. Fibonacci) or the steady state of a Markov chain; interpret the dominant eigenvalue.

### Module 4: Inner products and orthogonality

Add lengths and angles, and the geometry of "closest point."

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Inner products, norms, and orthogonality | Measure length and angle; test orthogonality; work in a general inner-product space | dot/inner product, norm, Cauchy–Schwarz, orthogonality, orthonormal set |
| 4.2 | Orthogonal projection and least squares | Project onto a subspace and solve the unsolvable system in the best-fit sense | orthogonal projection, residual ⊥ subspace, normal equations, least squares |
| 4.3 | Gram–Schmidt and QR | Turn any basis into an orthonormal one and factor $A = QR$ | Gram–Schmidt, orthonormal basis, QR factorization |

**Boss problem 4:** Fit a least-squares line to a small data set by projecting onto a column space; independently build an orthonormal basis for that column space via Gram–Schmidt and re-express the projection, confirming the two agree.

### Module 5: The spectral theorem and SVD

The two decompositions the rest of mathematics runs on.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Symmetric matrices, the spectral theorem, and quadratic forms | Orthogonally diagonalize a symmetric matrix and classify $\mathbf x^\top A\mathbf x$ | symmetric matrix, real eigenvalues, orthogonal eigenvectors, $A=Q\Lambda Q^\top$, positive definiteness |
| 5.2 | The singular value decomposition | Factor *any* matrix as rotate–stretch–rotate and read the geometry | singular values, $A=U\Sigma V^\top$, $\Sigma$ from eigenvalues of $A^\top A$, image ellipsoid, low-rank approximation |

**Boss problem 5:** For a symmetric matrix, produce the spectral decomposition $A = Q\Lambda Q^\top$ and classify its quadratic form; then compute the SVD of a non-square matrix, relate its singular values to the eigenvalues of $A^\top A$, and describe the unit sphere's image geometrically. Name the bridge to `calc-refresher` 4.2 (the Hessian's definiteness is the second-derivative test).

## Sources of truth

- Strang, *Introduction to Linear Algebra* (computational style, the four-subspaces framing, applications)
- Axler, *Linear Algebra Done Right* (the operator / basis-free viewpoint and inner-product spaces)
- 3Blue1Brown, *Essence of Linear Algebra* (the geometric register this course teaches in)
