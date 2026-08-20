# Linear Algebra Refresher · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Linear algebra is one question asked over and over: *given some vectors, what can
you build, and what does a map do to what you built?* Spans and bases answer the
first; matrices, rank, determinants, eigenvalues, and the two big factorizations
(spectral, SVD) answer the second. Everything below is lookup material for the
middle of a problem — the formulas, the tests, and the prerequisite facts the
lessons use without stopping to derive.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\mathbf v$, $v_i$ | a vector (boldface) and its $i$-th coordinate | [1.1](lessons/01-01-vectors-span-linear-combinations.md) |
| $\mathbb R^n$ | the set of columns with $n$ real coordinates | [1.1](lessons/01-01-vectors-span-linear-combinations.md) |
| $\operatorname{span}(\mathbf v_1,\dots,\mathbf v_k)$ | every point reachable by scaling and adding those vectors | [1.1](lessons/01-01-vectors-span-linear-combinations.md) |
| $\mathbf 0$ | the zero vector — the origin, and the only point every subspace must contain | [1.1](lessons/01-01-vectors-span-linear-combinations.md) |
| $\mathbf e_j$ | the $j$-th standard basis vector: a $1$ in slot $j$, zeros elsewhere | [1.2](lessons/01-02-linear-independence-basis-dimension.md) |
| $\dim V$ | dimension — how many independent directions $V$ has | [1.2](lessons/01-02-linear-independence-basis-dimension.md) |
| $A$, $a_{ij}$, $\mathbf a_j$ | a matrix, its entry in row $i$ column $j$, and its $j$-th **column** | [1.3](lessons/01-03-linear-systems-elimination-rank.md) |
| $[\,A \mid \mathbf b\,]$ | augmented matrix — the system with its right-hand side glued on | [1.3](lessons/01-03-linear-systems-elimination-rank.md) |
| $\operatorname{rank}(A)$ | number of pivots = number of genuinely independent columns | [1.3](lessons/01-03-linear-systems-elimination-rank.md) |
| $\mathbf x_p$, $\mathbf x_h$ | one particular solution, and any null-space (homogeneous) shift of it | [1.3](lessons/01-03-linear-systems-elimination-rank.md) |
| $\mathbf a\times\mathbf b$ | cross product — a **vector**, perpendicular to both, length = the spanned area | [1.4](lessons/01-04-cross-product-and-orientation.md) |
| $\hat i, \hat j, \hat k$ | the physics courses' names for $\mathbf e_1,\mathbf e_2,\mathbf e_3$ | [1.4](lessons/01-04-cross-product-and-orientation.md) |
| $T$, $T\mathbf v$ | a linear map and the image of $\mathbf v$ under it | [2.1](lessons/02-01-matrices-as-linear-maps.md) |
| $I$ | identity matrix — the map that does nothing | [2.2](lessons/02-02-inverses-and-four-subspaces.md) |
| $A^{-1}$ | the map that undoes $A$ (exists only for square, full-rank $A$) | [2.2](lessons/02-02-inverses-and-four-subspaces.md) |
| $A^\top$ | transpose — flip across the diagonal, rows become columns | [2.2](lessons/02-02-inverses-and-four-subspaces.md) |
| $C(A)$, $N(A)$, $C(A^\top)$, $N(A^\top)$ | column space, null space, row space, left null space | [2.2](lessons/02-02-inverses-and-four-subspaces.md) |
| $\perp$ | "is orthogonal to" — inner product zero | [2.2](lessons/02-02-inverses-and-four-subspaces.md) |
| $\det A$ | signed volume-scaling factor of the map $A$ | [2.3](lessons/02-03-determinants.md) |
| $\lambda$ | eigenvalue — the stretch factor along an eigen-direction | [3.1](lessons/03-01-eigenvalues-eigenvectors.md) |
| $\operatorname{tr}(A)$ | trace — sum of the diagonal entries (also the sum of the eigenvalues) | [3.1](lessons/03-01-eigenvalues-eigenvectors.md) |
| $E_\lambda$ | eigenspace — the whole line/plane of eigenvectors for one $\lambda$ | [3.1](lessons/03-01-eigenvalues-eigenvectors.md) |
| $P$, $D$ | eigenvector matrix and eigenvalue-diagonal matrix in $A = PDP^{-1}$ | [3.2](lessons/03-02-diagonalization.md) |
| $\langle\mathbf u,\mathbf v\rangle$, $\mathbf u\cdot\mathbf v$ | inner product / dot product — one number carrying length and angle | [4.1](lessons/04-01-inner-products-orthogonality.md) |
| $\lVert\mathbf v\rVert$ | norm — the length of $\mathbf v$ | [4.1](lessons/04-01-inner-products-orthogonality.md) |
| $\mathbf q_i$ | a vector of an **orthonormal** set (unit length, mutually perpendicular) | [4.1](lessons/04-01-inner-products-orthogonality.md) |
| $\hat{\mathbf b}$, $\mathbf e$ | the projection of $\mathbf b$, and the residual $\mathbf b - \hat{\mathbf b}$ | [4.2](lessons/04-02-projection-least-squares.md) |
| $\hat{\mathbf x}$ | the least-squares coefficients — best fit, not an exact solution | [4.2](lessons/04-02-projection-least-squares.md) |
| $\delta_{ij}$ | Kronecker delta: $1$ if $i=j$, else $0$ | [4.3](lessons/04-03-gram-schmidt-qr.md) |
| $Q$, $R$ | orthonormal-column matrix and upper-triangular bookkeeping in $A = QR$ | [4.3](lessons/04-03-gram-schmidt-qr.md) |
| $\Lambda$ | diagonal matrix of eigenvalues in the spectral form $A = Q\Lambda Q^\top$ | [5.1](lessons/05-01-spectral-theorem-quadratic-forms.md) |
| $q(\mathbf x) = \mathbf x^\top A\mathbf x$ | quadratic form — the multivariable version of $ax^2$ | [5.1](lessons/05-01-spectral-theorem-quadratic-forms.md) |
| $U$, $\Sigma$, $V$, $\sigma_i$ | the SVD's two rotations, the stretch matrix, and the singular values | [5.2](lessons/05-02-svd.md) |

**Two symbol clashes to keep straight.** $P$ is the eigenvector matrix in
[3.2](lessons/03-02-diagonalization.md) but the **projection** matrix in
[4.2](lessons/04-02-projection-least-squares.md). And $\mathbf e$ is the least-squares
residual in [4.2](lessons/04-02-projection-least-squares.md), while $\mathbf e_j$ with a
subscript is always a standard basis vector.

## Definitions

### Linear combination

Pick a weight for each vector, scale each by its weight, add the pile.

$$c_1\mathbf v_1 + c_2\mathbf v_2 + \cdots + c_k\mathbf v_k, \qquad c_i \in \mathbb R$$

*Introduced:* [1.1](lessons/01-01-vectors-span-linear-combinations.md)

### Span

Every destination those vectors can take you to — a point, a line, a plane, or all
of $\mathbb R^n$, always through the origin.

$$\operatorname{span}(\mathbf v_1,\dots,\mathbf v_k) = \{\, c_1\mathbf v_1 + \cdots + c_k\mathbf v_k \;:\; c_i \in \mathbb R \,\}$$

*Introduced:* [1.1](lessons/01-01-vectors-span-linear-combinations.md)

### Subspace

A set you can never fall out of by adding or scaling — and it must contain the
origin, so a line missing the origin does not qualify. Every span is a subspace.

*Introduced:* [1.1](lessons/01-01-vectors-span-linear-combinations.md)

### Linear independence

No freeloaders: no vector in the set is a combination of the others, so deleting
any one strictly shrinks the span.

$$c_1\mathbf v_1 + \cdots + c_k\mathbf v_k = \mathbf 0 \;\Longrightarrow\; c_1 = \cdots = c_k = 0$$

*Introduced:* [1.2](lessons/01-02-linear-independence-basis-dimension.md)

### Basis

The sweet spot: enough vectors to reach everything, not one more than necessary —
independent **and** spanning. Equivalently, a minimal spanning set.

*Introduced:* [1.2](lessons/01-02-linear-independence-basis-dimension.md)

### Dimension

How many independent directions a space has. Well-defined because every basis of
a given space has the same number of vectors.

*Introduced:* [1.2](lessons/01-02-linear-independence-basis-dimension.md)

### Coordinates

A basis turns every vector into a unique list of numbers — the weights that
rebuild it. Uniqueness is exactly what independence buys.

$$\mathbf x = c_1\mathbf v_1 + \cdots + c_n\mathbf v_n \quad\Longrightarrow\quad \mathbf x \text{ has coordinates } (c_1,\dots,c_n)$$

*Introduced:* [1.2](lessons/01-02-linear-independence-basis-dimension.md)

### Pivot and free variable

A pivot is a staircase corner in row echelon form; its column's variable is
pinned down. A column without a pivot leaves a variable you can set to anything.

*Introduced:* [1.3](lessons/01-03-linear-systems-elimination-rank.md)

### Rank

The number of directions the matrix genuinely sees — pivots counted, redundancy
discarded.

$$\operatorname{rank}(A) = \#\{\text{pivots}\} = \dim C(A) = \dim C(A^\top)$$

*Introduced:* [1.3](lessons/01-03-linear-systems-elimination-rank.md)

### Null space

Everything the map crushes to nothing — equivalently, every dependency among the
columns written as a weight vector.

$$N(A) = \{\mathbf x \in \mathbb R^n : A\mathbf x = \mathbf 0\}, \qquad \dim N(A) = n - \operatorname{rank}(A)$$

*Introduced:* [1.3](lessons/01-03-linear-systems-elimination-rank.md)

### Cross product

Two vectors in $\mathbb R^3$ multiplied into a **third vector**: it points out of
the plane they span (right-hand rule), and its length is that plane-patch's area.
Zero exactly when they're parallel — the mirror image of the
[dot product](#dot-product), which is zero exactly when they're perpendicular.

$$\lVert\mathbf a\times\mathbf b\rVert = \lVert\mathbf a\rVert\,\lVert\mathbf b\rVert\sin\theta, \qquad (\mathbf a\times\mathbf b)\perp\mathbf a, \quad (\mathbf a\times\mathbf b)\perp\mathbf b$$

*Introduced:* [1.4](lessons/01-04-cross-product-and-orientation.md)

### Scalar triple product

Cross two vectors, dot with a third: the signed volume of the box they span, and
a genuine $3\times3$ determinant. Zero $\iff$ the three are coplanar (dependent).

$$\mathbf a\cdot(\mathbf b\times\mathbf c) = \det\begin{bmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3\end{bmatrix}$$

*Introduced:* [1.4](lessons/01-04-cross-product-and-orientation.md)

### Linear map

A function that doesn't care whether you add and scale before or after applying
it — arrows in, arrows out, no bending, origin fixed.

$$T(\mathbf u + \mathbf v) = T\mathbf u + T\mathbf v, \qquad T(c\mathbf v) = c\,T\mathbf v$$

*Introduced:* [2.1](lessons/02-01-matrices-as-linear-maps.md)

### Matrix–vector product

A matrix is a **verb**: its columns record where the basis vectors land, and
$A\mathbf x$ is the matching combination of those columns.

$$A\mathbf x = x_1\mathbf a_1 + \cdots + x_n\mathbf a_n, \qquad A\mathbf e_j = \mathbf a_j$$

*Introduced:* [2.1](lessons/02-01-matrices-as-linear-maps.md)

### Inverse

The map that undoes $A$. It exists only when $A$ is square and crushes nothing —
full rank.

$$A^{-1}A = AA^{-1} = I \quad\Longrightarrow\quad A\mathbf x = \mathbf b \ \text{has the unique solution}\ \mathbf x = A^{-1}\mathbf b$$

*Introduced:* [2.2](lessons/02-02-inverses-and-four-subspaces.md)

### Four fundamental subspaces

One map, four subspaces, two right angles: what the map reaches, what it crushes,
and the mirror pair on the other side. (Table with dimensions below.)

*Introduced:* [2.2](lessons/02-02-inverses-and-four-subspaces.md)

### Determinant

The signed factor by which the map scales area or volume. Positive keeps
handedness, negative mirrors it, zero means space got flattened.

$$\det\begin{bmatrix} a & b \\ c & d \end{bmatrix} = ad - bc$$

*Introduced:* [2.3](lessons/02-03-determinants.md)

### Singular matrix

A square matrix that collapses a dimension — no inverse, dependent columns,
nontrivial null space, zero determinant. All four say the same thing.

*Introduced:* [2.3](lessons/02-03-determinants.md)

### Eigenvector and eigenvalue

The directions the map only *stretches* — the grain of the wood — and the stretch
factors. Eigenvectors must be nonzero; eigenvalues may be zero, negative, or complex.

$$A\mathbf v = \lambda\mathbf v, \qquad \mathbf v \neq \mathbf 0$$

*Introduced:* [3.1](lessons/03-01-eigenvalues-eigenvectors.md)

### Characteristic polynomial

The equation that finds the eigenvalues: the $\lambda$ that make $A - \lambda I$
collapse. Degree $n$, so $n$ eigenvalues with multiplicity.

$$p(\lambda) = \det(A - \lambda I) = 0$$

*Introduced:* [3.1](lessons/03-01-eigenvalues-eigenvectors.md)

### Eigenspace

Once you have $\lambda$, its eigenvectors are a whole subspace — so report a
*direction*, never a specific magnitude.

$$E_\lambda = N(A - \lambda I)$$

*Introduced:* [3.1](lessons/03-01-eigenvalues-eigenvectors.md)

### Diagonalizable

The matrix has a full set of $n$ independent eigenvectors, so there's a basis in
which it is pure scaling.

$$A = PDP^{-1}, \qquad P = [\,\mathbf v_1\ \cdots\ \mathbf v_n\,], \quad D = \operatorname{diag}(\lambda_1,\dots,\lambda_n)$$

*Introduced:* [3.2](lessons/03-02-diagonalization.md)

### Similar matrices

Two matrices that are the *same map* written in different bases. They share
eigenvalues, determinant, and trace.

$$A = PBP^{-1}$$

*Introduced:* [3.2](lessons/03-02-diagonalization.md)

### Defective matrix

A matrix with a repeated eigenvalue that doesn't supply enough eigenvectors to
fill $P$ — so it cannot be diagonalized. (Jordan form is the fallback; flagged,
not drilled.)

*Introduced:* [3.2](lessons/03-02-diagonalization.md)

### Inner product

The one gadget that installs length and angle on a vector space: symmetric,
linear in each slot, and positive on every nonzero vector.

$$\langle\mathbf u,\mathbf v\rangle = \langle\mathbf v,\mathbf u\rangle, \qquad \langle a\mathbf u + b\mathbf w, \mathbf v\rangle = a\langle\mathbf u,\mathbf v\rangle + b\langle\mathbf w,\mathbf v\rangle, \qquad \langle\mathbf v,\mathbf v\rangle > 0 \ \text{ for } \mathbf v \neq \mathbf 0$$

*Introduced:* [4.1](lessons/04-01-inner-products-orthogonality.md)

### Dot product

The standard inner product on $\mathbb R^n$: multiply slot-by-slot, add up. One
number out, carrying both length (dot with self) and angle (dot with another).

$$\mathbf u\cdot\mathbf v = \mathbf u^\top\mathbf v = \sum_{i=1}^{n} u_i v_i = \lVert\mathbf u\rVert\,\lVert\mathbf v\rVert\cos\theta$$

*Introduced:* [4.1](lessons/04-01-inner-products-orthogonality.md)

### Norm

Length, defined as the square root of a vector paired with itself.

$$\lVert\mathbf v\rVert = \sqrt{\langle\mathbf v,\mathbf v\rangle} = \sqrt{v_1^2 + \cdots + v_n^2}$$

*Introduced:* [4.1](lessons/04-01-inner-products-orthogonality.md)

### Unit vector

A vector of length $1$ — a pure direction with the magnitude divided out.
"Normalizing" means producing one.

$$\hat{\mathbf v} = \frac{\mathbf v}{\lVert\mathbf v\rVert}, \qquad \lVert\hat{\mathbf v}\rVert = 1$$

*Introduced:* [4.1](lessons/04-01-inner-products-orthogonality.md)

### Orthogonal

Perpendicular — and perpendicularity is exactly the zero set of the inner
product. It's a relationship, not a smallness.

$$\mathbf u \perp \mathbf v \iff \langle\mathbf u,\mathbf v\rangle = 0$$

*Introduced:* [4.1](lessons/04-01-inner-products-orthogonality.md)

### Orthonormal set

Mutually perpendicular unit vectors — the cleanest possible coordinate system.

$$\langle\mathbf q_i,\mathbf q_j\rangle = \delta_{ij}$$

*Introduced:* [4.1](lessons/04-01-inner-products-orthogonality.md)

### Orthogonal projection

The closest reachable point to a target: drop a perpendicular onto the subspace.
*Closest* and *perpendicular* are the same condition.

$$\hat{\mathbf b} \in C(A), \qquad \mathbf e = \mathbf b - \hat{\mathbf b} \perp C(A)$$

*Introduced:* [4.2](lessons/04-02-projection-least-squares.md)

### Residual

The part of the target you were forced to give up. It lives in the left null
space $N(A^\top)$, which is why $A^\top\mathbf e = \mathbf 0$.

*Introduced:* [4.2](lessons/04-02-projection-least-squares.md)

### Least squares

Solving the unsolvable: minimize $\lVert A\mathbf x - \mathbf b\rVert^2$ instead
of demanding equality. Same thing as the orthogonal projection above.

*Introduced:* [4.2](lessons/04-02-projection-least-squares.md)

### Projection matrix

The single operator that sends any vector to its shadow on a subspace. Projecting
twice changes nothing.

$$P = A(A^\top A)^{-1}A^\top, \qquad P^\top = P, \qquad P^2 = P$$

*Introduced:* [4.2](lessons/04-02-projection-least-squares.md)

### Orthogonal matrix

A square matrix whose columns are orthonormal — a rotation or reflection. Its
inverse is free: just transpose it.

$$Q^\top Q = I \quad\Longleftrightarrow\quad Q^{-1} = Q^\top$$

*Introduced:* [4.3](lessons/04-03-gram-schmidt-qr.md)

### QR factorization

Gram–Schmidt written down: $Q$ holds the straightened orthonormal axes, $R$ holds
the bookkeeping that rebuilds the original columns from them.

$$A = QR, \qquad Q^\top Q = I, \quad R = Q^\top A \ \text{upper triangular}$$

*Introduced:* [4.3](lessons/04-03-gram-schmidt-qr.md)

### Symmetric matrix

The matrix reads the same by rows as by columns. These are the ones that actually
show up: covariances, Hessians, inertia tensors.

$$A = A^\top \quad (a_{ij} = a_{ji})$$

*Introduced:* [5.1](lessons/05-01-spectral-theorem-quadratic-forms.md)

### Spectral theorem

Every real symmetric matrix has real eigenvalues and an **orthonormal** basis of
eigenvectors — so it diagonalizes by a pure rotation, no inverse to compute.

$$A = Q\Lambda Q^\top, \qquad Q^\top Q = I$$

*Introduced:* [5.1](lessons/05-01-spectral-theorem-quadratic-forms.md)

### Quadratic form

A pure degree-2 function of the coordinates — squares and cross-terms, no linear
or constant part. In the eigenbasis it becomes a weighted sum of squares.

$$q(\mathbf x) = \mathbf x^\top A\mathbf x = \sum_{i,j} a_{ij}x_i x_j \;\xrightarrow{\ \mathbf y = Q^\top\mathbf x\ }\; \lambda_1 y_1^2 + \cdots + \lambda_n y_n^2$$

*Introduced:* [5.1](lessons/05-01-spectral-theorem-quadratic-forms.md)

### Positive definite

The form is an upward bowl: every direction curves up. Equivalent to all
eigenvalues being positive.

$$\mathbf x^\top A\mathbf x > 0 \ \text{ for all } \mathbf x \neq \mathbf 0 \iff \lambda_i > 0 \ \text{ for every } i$$

*Introduced:* [5.1](lessons/05-01-spectral-theorem-quadratic-forms.md)

### Singular value

The honest "how much do I stretch" numbers of any map — the semi-axis lengths of
the ellipse the unit circle maps to. Always real, nonnegative, and sorted.

$$\sigma_i = \sqrt{\lambda_i(A^\top A)}, \qquad \sigma_1 \ge \sigma_2 \ge \cdots \ge 0$$

*Introduced:* [5.2](lessons/05-02-svd.md)

### Singular value decomposition

Every matrix — square or not, invertible or not — is rotate, stretch along axes,
rotate again.

$$A = U\Sigma V^\top, \qquad U^\top U = I, \quad V^\top V = I, \quad \Sigma \ \text{diagonal},\ \sigma_i \ge 0$$

*Introduced:* [5.2](lessons/05-02-svd.md)

## Formulas and rules

### Solving a linear system

Row-reduce $[\,A\mid\mathbf b\,]$ to echelon form and read the pivot pattern. The
three allowed moves — swap rows, scale a row by a nonzero number, add a multiple
of one row to another — never change the solution set.

| What you see in echelon form | Verdict |
|---|---|
| a row $[\,0\ \cdots\ 0 \mid c\,]$ with $c \neq 0$ | **no solution** (the impossible $0 = c$) |
| consistent, every column a pivot column ($\operatorname{rank} = n$) | **unique solution** |
| consistent, some column without a pivot | **infinitely many** — one parameter per free variable |

Consistency restated: solvable $\iff \operatorname{rank}[\,A\mid\mathbf b\,] = \operatorname{rank}(A)$.
The full answer is always one particular solution plus the whole null space:

$$\mathbf x = \mathbf x_p + \mathbf x_h, \qquad \mathbf x_h \in N(A), \qquad \#\{\text{free variables}\} = n - \operatorname{rank}(A)$$

*From* [1.3](lessons/01-03-linear-systems-elimination-rank.md)

### Cross products, areas, and normals

The whole 3D toolkit the mechanics and EM courses point here for. With
$\mathbf a = (a_1,a_2,a_3)$, $\mathbf b = (b_1,b_2,b_3)$, and $\theta$ the angle between them:

$$\mathbf a\times\mathbf b = \begin{vmatrix} \mathbf e_1 & \mathbf e_2 & \mathbf e_3 \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix} = \big(a_2b_3 - a_3b_2,\;\; a_3b_1 - a_1b_3,\;\; a_1b_2 - a_2b_1\big)$$

Expand along the top row with the $+\,-\,+$ checkerboard — the minus on the middle
term is the sign people drop. Each slot uses the other two in the cyclic order
$1\to2\to3\to1$.

| Rule | Statement |
|---|---|
| magnitude | $\lVert\mathbf a\times\mathbf b\rVert = \lVert\mathbf a\rVert\lVert\mathbf b\rVert\sin\theta$ (**sin**, not cos) |
| anticommutative | $\mathbf b\times\mathbf a = -\,(\mathbf a\times\mathbf b)$, and $\mathbf a\times\mathbf a = \mathbf 0$ |
| distributive | $\mathbf a\times(\mathbf b+\mathbf c) = \mathbf a\times\mathbf b + \mathbf a\times\mathbf c$, $\ (c\mathbf a)\times\mathbf b = c(\mathbf a\times\mathbf b)$ |
| **not** associative | $\mathbf a\times(\mathbf b\times\mathbf c) \neq (\mathbf a\times\mathbf b)\times\mathbf c$ — always parenthesize |
| parallel test | $\mathbf a\times\mathbf b = \mathbf 0 \iff \mathbf a\parallel\mathbf b \iff$ dependent (vs. $\mathbf a\cdot\mathbf b = 0 \iff$ perpendicular) |
| Lagrange identity | $\lVert\mathbf a\times\mathbf b\rVert^2 + (\mathbf a\cdot\mathbf b)^2 = \lVert\mathbf a\rVert^2\lVert\mathbf b\rVert^2$ — a free check on any computation |
| basis cycle | $\mathbf e_1\times\mathbf e_2 = \mathbf e_3$, $\ \mathbf e_2\times\mathbf e_3 = \mathbf e_1$, $\ \mathbf e_3\times\mathbf e_1 = \mathbf e_2$; backward picks up a minus |
| 2D shortcut | $\omega\,\mathbf e_3\times(x,y,0) = \omega(-y,x,0)$ — rotate 90° counterclockwise, then scale |
| dimension | exists only in $\mathbb R^3$: perpendicular-to-both has dimension $n-2$, and only $n=3$ makes that a single line |

| Want | Recipe |
|---|---|
| area of the parallelogram on $\mathbf a,\mathbf b$ | $\lVert\mathbf a\times\mathbf b\rVert$ |
| area of the triangle on $\mathbf a,\mathbf b$ | $\tfrac12\lVert\mathbf a\times\mathbf b\rVert$ |
| unit normal to the plane of $\mathbf a,\mathbf b$ | $(\mathbf a\times\mathbf b)/\lVert\mathbf a\times\mathbf b\rVert$ |
| volume of the box on $\mathbf a,\mathbf b,\mathbf c$ | $\lvert\mathbf a\cdot(\mathbf b\times\mathbf c)\rvert$ |
| are three vectors coplanar? | yes $\iff \mathbf a\cdot(\mathbf b\times\mathbf c) = 0$ |

Where it shows up: the moment $\vec M_O = \vec r\times\vec F$ and the moment about
an axis $M_a = \hat u\cdot(\vec r\times\vec F)$
([statics 1.3](../statics/lessons/01-03-moment-of-a-force.md)); rigid-body velocity
$\mathbf v = \boldsymbol\omega\times\mathbf r$
([engineering-dynamics 3.1](../engineering-dynamics/lessons/03-01-rotation-instantaneous-center.md));
torque and $\mathbf L = \mathbf r\times\mathbf p$
([mechanics 4.1](../mechanics-refresher/lessons/04-01-rotational-dynamics.md)–[4.2](../mechanics-refresher/lessons/04-02-angular-momentum.md));
the magnetic force $q\,\mathbf v\times\mathbf B$
([em-refresher 3.1](../em-refresher/lessons/03-01-magnetic-force.md)); and the curl
$\nabla\times\mathbf F$
([calc-refresher 5.1](../calc-refresher/lessons/05-01-vector-fields-div-curl.md)).

*From* [1.4](lessons/01-04-cross-product-and-orientation.md)

### The four fundamental subspaces

| Subspace | Symbol | Lives in | Meaning | Dimension |
|---|---|---|---|---|
| Column space | $C(A)$ | $\mathbb R^m$ | all reachable outputs $A\mathbf x$ | $r$ |
| Null space | $N(A)$ | $\mathbb R^n$ | everything crushed to $\mathbf 0$ | $n - r$ |
| Row space | $C(A^\top)$ | $\mathbb R^n$ | span of the rows — what the map sees faithfully | $r$ |
| Left null space | $N(A^\top)$ | $\mathbb R^m$ | all $\mathbf y$ with $A^\top\mathbf y = \mathbf 0$ | $m - r$ |

$$\text{rank–nullity:}\quad \operatorname{rank}(A) + \dim N(A) = n$$
$$\text{orthogonality:}\quad C(A^\top) \perp N(A) \ \text{in } \mathbb R^n, \qquad C(A) \perp N(A^\top) \ \text{in } \mathbb R^m$$

For a basis of $C(A)$, take the pivot columns **of the original $A$** — elimination
locates which columns are pivots but changes the column space itself.

*From* [2.2](lessons/02-02-inverses-and-four-subspaces.md)

### Invertibility — all one condition

For a square $n\times n$ matrix $A$, these are all the same statement:

$$A^{-1} \text{ exists} \iff \operatorname{rank}(A) = n \iff \text{columns independent} \iff N(A) = \{\mathbf 0\} \iff \det A \neq 0 \iff \lambda = 0 \text{ is not an eigenvalue}$$

$$\begin{bmatrix} a & b \\ c & d \end{bmatrix}^{-1} = \frac{1}{ad-bc}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix} \qquad (\text{swap the diagonal, negate the off-diagonal, divide by } \det)$$

Bigger matrices: row-reduce $[\,A \mid I\,]$ until the left block is $I$; the right
block is $A^{-1}$ (Gauss–Jordan).

*From* [2.2](lessons/02-02-inverses-and-four-subspaces.md) *and* [2.3](lessons/02-03-determinants.md)

### Matrix algebra — the rules the lessons use silently

$$(AB)C = A(BC), \qquad AB \neq BA \ \text{in general}, \qquad (AB)\mathbf x = A(B\mathbf x) \ (\text{do } B \text{ first})$$
$$(AB)^\top = B^\top A^\top, \qquad (A^\top)^\top = A, \qquad (A + B)^\top = A^\top + B^\top$$
$$(AB)^{-1} = B^{-1}A^{-1}, \qquad (A^{-1})^\top = (A^\top)^{-1}$$
$$\operatorname{tr}(A) = \sum_i a_{ii}, \qquad \operatorname{tr}(AB) = \operatorname{tr}(BA)$$

Reversal on the last two is not optional — it's what makes
$(U\Sigma V^\top)^\top(U\Sigma V^\top) = V\Sigma^\top\Sigma V^\top$ work in
[5.2](lessons/05-02-svd.md). Left-multiplying acts on **rows**, right-multiplying on
**columns**.

*From* [2.1](lessons/02-01-matrices-as-linear-maps.md) *and* [2.2](lessons/02-02-inverses-and-four-subspaces.md)

### Standard 2D transformation matrices

Not stated in one place by any lesson, but used throughout — build any of them by
tracking where $\mathbf e_1$ and $\mathbf e_2$ land, then stacking those images as columns.

| Map | Matrix | $\det$ |
|---|---|---|
| rotate CCW by $\theta$ | $\begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}$ | $1$ |
| reflect across the $x$-axis | $\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$ | $-1$ |
| reflect across $y = x$ (swap coordinates) | $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$ | $-1$ |
| horizontal shear by $k$ | $\begin{bmatrix} 1 & k \\ 0 & 1 \end{bmatrix}$ | $1$ |
| project onto the $x$-axis | $\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}$ | $0$ |
| scale everything by $c$ | $\begin{bmatrix} c & 0 \\ 0 & c \end{bmatrix}$ | $c^2$ |

A projection satisfies $P^2 = P$ (a shadow of a shadow is the shadow); a reflection
satisfies $F^2 = I$ (flip twice, back where you started).

*From* [2.1](lessons/02-01-matrices-as-linear-maps.md) *and* [2.3](lessons/02-03-determinants.md)

### Computing and using determinants

$$2\times2:\quad \det\begin{bmatrix} a & b \\ c & d \end{bmatrix} = ad - bc$$

$$3\times3 \ \text{(cofactor expansion along the first row)}:\quad \det A = a_{11}\det\!\begin{bmatrix} a_{22} & a_{23} \\ a_{32} & a_{33}\end{bmatrix} - a_{12}\det\!\begin{bmatrix} a_{21} & a_{23} \\ a_{31} & a_{33}\end{bmatrix} + a_{13}\det\!\begin{bmatrix} a_{21} & a_{22} \\ a_{31} & a_{32}\end{bmatrix}$$

Expand along **any** row or column with the checkerboard sign pattern
$\begin{smallmatrix}+&-&+\\-&+&-\\+&-&+\end{smallmatrix}$ — pick the one with the
most zeros, then cross-check with a second expansion.

| Property | Statement |
|---|---|
| multiplicative | $\det(AB) = \det A \,\det B$ |
| inverse | $\det(A^{-1}) = 1/\det A$ |
| transpose | $\det(A^\top) = \det A$ |
| triangular | $\det = $ product of the diagonal entries |
| elimination | $\det A = \pm(\text{product of the pivots})$, sign flipping once per row swap |
| scaling | $\det(cA) = c^n\det A$ for $n\times n$ — **not** $c\det A$ |
| **not** additive | $\det(A+B) \neq \det A + \det B$ |

*From* [2.3](lessons/02-03-determinants.md)

### Finding eigenvalues and eigenvectors

1. Solve $\det(A - \lambda I) = 0$ for the eigenvalues.
2. For each $\lambda$, solve $(A - \lambda I)\mathbf v = \mathbf 0$ — the eigenvector is any nonzero null-space vector.
3. Verify by plugging back into $A\mathbf v = \lambda\mathbf v$.

Free checks and shortcuts:

$$\sum_i \lambda_i = \operatorname{tr}(A), \qquad \prod_i \lambda_i = \det(A)$$

| Situation | Fact |
|---|---|
| triangular (or diagonal) $A$ | eigenvalues are the diagonal entries |
| $\det A = 0$ | $\lambda = 0$ is an eigenvalue |
| $A\mathbf v = \lambda\mathbf v$ | $A^k\mathbf v = \lambda^k\mathbf v$, and $A^{-1}\mathbf v = \lambda^{-1}\mathbf v$ when $\lambda \neq 0$ |
| $n$ distinct eigenvalues | guaranteed diagonalizable |
| pure rotation | no real eigenvector; eigenvalues are complex on the unit circle |
| symmetric $A$ | real eigenvalues, orthogonal eigenvectors |

For a $2\times2$, the characteristic polynomial is
$\lambda^2 - \operatorname{tr}(A)\,\lambda + \det(A) = 0$ — quicker than expanding the
determinant by hand.

*From* [3.1](lessons/03-01-eigenvalues-eigenvectors.md)

### Diagonalization, powers, and long-run dynamics

$$A = PDP^{-1} \quad\Longrightarrow\quad A^k = PD^kP^{-1}, \qquad D^k = \operatorname{diag}(\lambda_1^k,\dots,\lambda_n^k)$$

$P$ and $P^{-1}$ appear exactly **once each**, on the outside; only $D$ gets
powered. Column $j$ of $P$ must match slot $j$ of $D$.

Iterating $\mathbf x_k = A\mathbf x_{k-1}$, expand the start state in the eigenbasis
and each mode evolves alone:

$$\mathbf x_k = c_1\lambda_1^k\mathbf v_1 + \cdots + c_n\lambda_n^k\mathbf v_n$$

The **largest-magnitude eigenvalue wins the long run**: the state swings toward its
eigenvector and grows (or decays) at rate $|\lambda_{\max}|$. A **stochastic
matrix** (transition columns summing to $1$) always has $\lambda = 1$ with every
other $|\lambda| \le 1$, so its $\lambda = 1$ eigenvector, rescaled to sum to $1$,
is the **steady state**.

*From* [3.2](lessons/03-02-diagonalization.md)

### Length, angle, and orthogonality

The whole toolkit that turns bare algebra into geometry — and the entries
`calc-refresher` points here for.

| Quantity | Formula |
|---|---|
| dot product | $\mathbf u\cdot\mathbf v = \mathbf u^\top\mathbf v = \sum_i u_i v_i$ |
| length | $\lVert\mathbf v\rVert = \sqrt{\mathbf v\cdot\mathbf v} = \sqrt{v_1^2 + \cdots + v_n^2}$ |
| unit vector | $\hat{\mathbf v} = \mathbf v/\lVert\mathbf v\rVert$ |
| angle | $\cos\theta = \dfrac{\mathbf u\cdot\mathbf v}{\lVert\mathbf u\rVert\,\lVert\mathbf v\rVert}$ |
| perpendicular test | $\mathbf u\perp\mathbf v \iff \mathbf u\cdot\mathbf v = 0$ |
| coordinate read-off | $\mathbf v\cdot\mathbf e_i = v_i$ |

$$\text{Cauchy–Schwarz:}\quad |\langle\mathbf u,\mathbf v\rangle| \le \lVert\mathbf u\rVert\,\lVert\mathbf v\rVert \quad(\text{equality iff parallel})$$
$$\text{triangle inequality:}\quad \lVert\mathbf u+\mathbf v\rVert \le \lVert\mathbf u\rVert + \lVert\mathbf v\rVert$$
$$\text{expansion:}\quad \lVert\mathbf u+\mathbf v\rVert^2 = \lVert\mathbf u\rVert^2 + 2\langle\mathbf u,\mathbf v\rangle + \lVert\mathbf v\rVert^2 \;\xrightarrow{\ \mathbf u\perp\mathbf v\ }\; \lVert\mathbf u\rVert^2 + \lVert\mathbf v\rVert^2 \ \ (\text{Pythagoras})$$

Any symmetric, bilinear, positive-definite pairing counts as an inner product —
including $\langle f,g\rangle = \int f g$ on functions, which is what makes
$\sin x$ and $\cos x$ perpendicular.

*From* [4.1](lessons/04-01-inner-products-orthogonality.md)

### Projection and least squares

| Reachable set | Projection of $\mathbf b$ |
|---|---|
| line through $\mathbf a$ | $\operatorname{proj}_{\mathbf a}\mathbf b = \dfrac{\mathbf a\cdot\mathbf b}{\mathbf a\cdot\mathbf a}\,\mathbf a$, matrix $P = \dfrac{\mathbf a\mathbf a^\top}{\mathbf a^\top\mathbf a}$ |
| column space of $A$ | $\hat{\mathbf b} = A\hat{\mathbf x}$, matrix $P = A(A^\top A)^{-1}A^\top$ |
| span of orthonormal $\mathbf q_1,\dots,\mathbf q_k$ | $\hat{\mathbf b} = \sum_i \langle\mathbf b,\mathbf q_i\rangle\,\mathbf q_i$ — just dot products |

$$\text{normal equations:}\quad A^\top A\,\hat{\mathbf x} = A^\top\mathbf b \qquad\Longrightarrow\qquad \hat{\mathbf x} = (A^\top A)^{-1}A^\top\mathbf b \ \ (\text{columns independent})$$

The one demand behind all of it: the residual is orthogonal to everything
reachable, $A^\top(\mathbf b - A\hat{\mathbf x}) = \mathbf 0$. Checking
$\mathbf e \perp$ every column is the receipt that you projected correctly.

**Fitting a line** $y = c + dx$ to points $(x_i, y_i)$: the columns of $A$ are
$\mathbf 1$ and the $x$-values, and $\mathbf b$ holds the $y$-values. If the
$x_i$ are centred (they sum to zero), $A^\top A$ comes out diagonal and the solve
is two divisions.

*From* [4.2](lessons/04-02-projection-least-squares.md)

### Gram–Schmidt and QR

$$\mathbf u_k = \mathbf v_k - \sum_{i=1}^{k-1}\langle\mathbf v_k,\mathbf q_i\rangle\,\mathbf q_i, \qquad \mathbf q_k = \frac{\mathbf u_k}{\lVert\mathbf u_k\rVert}$$

Straighten each axis by removing what already points along the earlier ones, then
normalize. The first step is just $\mathbf q_1 = \mathbf v_1/\lVert\mathbf v_1\rVert$.

$$A = QR, \qquad R_{ij} = \langle\mathbf v_j,\mathbf q_i\rangle \ (i \le j), \qquad R_{ii} = \lVert\mathbf u_i\rVert$$

With an orthonormal basis in hand, expanding a vector needs no inverse:

$$\mathbf v = \sum_i \langle\mathbf v,\mathbf q_i\rangle\,\mathbf q_i$$

and least squares collapses from the normal equations to one triangular
back-substitution:

$$R\,\hat{\mathbf x} = Q^\top\mathbf b \qquad (\text{since } A^\top A = R^\top R \text{ and } Q^\top Q = I)$$

*From* [4.3](lessons/04-03-gram-schmidt-qr.md)

### Symmetric matrices and quadratic forms

$$A = A^\top \;\Longrightarrow\; A = Q\Lambda Q^\top \;\Longrightarrow\; q(\mathbf x) = \mathbf x^\top A\mathbf x = \lambda_1 y_1^2 + \cdots + \lambda_n y_n^2, \qquad \mathbf y = Q^\top\mathbf x$$

**Reading a form into a matrix:** diagonal entries are the pure-square
coefficients; each cross-term coefficient is **split in half** across the two
off-diagonal slots.

$$q = ax^2 + 2bxy + cy^2 \quad\longleftrightarrow\quad A = \begin{bmatrix} a & b \\ b & c \end{bmatrix}$$

| Eigenvalue signs | Classification | Level set $q = 1$ |
|---|---|---|
| all $\lambda_i > 0$ | positive definite (bowl, local min) | ellipse / ellipsoid |
| all $\lambda_i < 0$ | negative definite (dome, local max) | empty |
| mixed signs | indefinite (saddle) | hyperbola |
| some $\lambda_i = 0$ | semidefinite / degenerate | parallel lines or a cylinder |

For a $2\times2$, **Sylvester's criterion**: positive definite $\iff a_{11} > 0$
**and** $\det A > 0$. On the ellipse $q = 1$, the principal axes point along the
eigenvectors with semi-axis lengths $1/\sqrt{\lambda_i}$ — **big eigenvalue,
steep climb, short axis.**

*From* [5.1](lessons/05-01-spectral-theorem-quadratic-forms.md)

### Computing an SVD

1. Form $A^\top A$ (symmetric, positive semidefinite) and find its eigenvalues and orthonormal eigenvectors.
2. $\mathbf v_i$ = those eigenvectors (columns of $V$); $\sigma_i = \sqrt{\lambda_i}$, sorted largest first.
3. $\mathbf u_i = A\mathbf v_i/\sigma_i$ for every $\sigma_i > 0$; fill out $U$ with any orthonormal completion for the zero singular values.

$$A = U\Sigma V^\top = \sum_i \sigma_i\,\mathbf u_i\mathbf v_i^\top, \qquad A_k = \sum_{i \le k}\sigma_i\,\mathbf u_i\mathbf v_i^\top \ \text{ is the best rank-}k\text{ approximation (Eckart–Young)}$$

| Check or fact | Statement |
|---|---|
| volume check (square $A$) | $\sigma_1\sigma_2\cdots\sigma_n = |\det A|$ |
| rank | $\operatorname{rank}(A) = \#\{\sigma_i > 0\}$; a zero $\sigma$ marks a crushed direction |
| symmetric $A$ | $\sigma_i = |\lambda_i|$ — the sign is absorbed into $U$ |
| condition number | $\sigma_1/\sigma_n$, how much the map amplifies error |
| geometry | the unit sphere maps to the ellipsoid with semi-axes $\sigma_i\mathbf u_i$ |

*From* [5.2](lessons/05-02-svd.md)

## Assumed, not taught here

This is a Tier 0 refresher: it uses the following without deriving them. Each row
points at where the derivation actually lives.

| Fact | Where it's taught |
|---|---|
| Solving small linear systems by substitution/elimination (the hand-arithmetic under every worked example) | [algebra-foundations 2.3](../algebra-foundations/lessons/02-03-systems-of-linear-equations.md) |
| Factoring a quadratic, and the quadratic formula with its discriminant — used on every characteristic polynomial | [algebra-foundations 3.2](../algebra-foundations/lessons/03-02-factoring.md), [algebra-foundations 4.1](../algebra-foundations/lessons/04-01-quadratic-equations.md) |
| Simplifying radicals (singular values, normalizing by $\sqrt2$, $\sqrt5$, …) | [algebra-foundations 4.3](../algebra-foundations/lessons/04-03-radicals-and-rational-exponents.md) |
| The Pythagorean theorem — the reason $\lVert\mathbf v\rVert = \sqrt{\sum v_i^2}$ measures length | [geometry 2.3](../geometry/lessons/02-03-pythagorean-theorem.md) |
| $\sin$, $\cos$ on the unit circle and radian measure — the entries of the rotation matrix | [trigonometry 2.2](../trigonometry/lessons/02-02-the-unit-circle.md), [precalculus 3.1](../precalculus/lessons/03-01-trig-functions-for-calculus.md) |
| Angle-addition identities — what falls out of $R(\varphi)R(\theta) = R(\theta+\varphi)$ in [2.1](lessons/02-01-matrices-as-linear-maps.md) | [trigonometry 3.2](../trigonometry/lessons/03-02-fundamental-identities.md) |
| $\arccos$ — turning a cosine back into an angle, as in [4.1](lessons/04-01-inner-products-orthogonality.md) | [trigonometry 1.2](../trigonometry/lessons/01-02-finding-angles-and-applications.md) |
| The imaginary unit $i$ and complex roots — why $\lambda^2 + 1 = 0$ gives $\lambda = \pm i$ for a rotation | [precalculus 2.4](../precalculus/lessons/02-04-complex-numbers.md) (arithmetic, the complex plane, and why modulus $1$ + argument $\pm90^\circ$ *is* a rotation); [complex-analysis 1.1](../complex-analysis/lessons/01-01-complex-numbers-geometry.md) at Tier 2 |
| Ellipse and hyperbola standard forms, semi-axes, asymptotes — the level sets of a quadratic form | [precalculus 4.1](../precalculus/lessons/04-01-conic-sections.md) |
| Sigma notation and index shifting | [precalculus 3.2](../precalculus/lessons/03-02-sequences-and-sigma-notation.md) |
| $\int_{-\pi}^{\pi}\sin x\cos x\,dx = 0$ — the double-angle rewrite plus odd-function symmetry, in [4.1](lessons/04-01-inner-products-orthogonality.md)'s Fourier example | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md), identity from [trigonometry 3.2](../trigonometry/lessons/03-02-fundamental-identities.md) |
| The Hessian and the multivariable second-derivative test — the bridge [5.1](lessons/05-01-spectral-theorem-quadratic-forms.md) names but doesn't build | [calc-refresher 4.2](../calc-refresher/lessons/04-02-multivariable-optimization-lagrange.md) |

Going the other way, `calc-refresher` assumes **this** course for the dot product,
vector length, unit vectors, and $2\times2$ determinants — all first-class entries
above. So do `statics`, `engineering-dynamics`, `mechanics-refresher`, and
`em-refresher` for the **cross product**, which now lives in
[1.4](lessons/01-04-cross-product-and-orientation.md).

## Pitfalls

### Span, independence, and dimension

- Adding a vector already inside the span grows nothing — that vector is redundant, not new reach. *([1.1](lessons/01-01-vectors-span-linear-combinations.md))*
- A subspace must contain the origin: the line $y = x + 1$ looks like one and isn't. *([1.1](lessons/01-01-vectors-span-linear-combinations.md))*
- A span is the whole infinite set of combinations, not the handful of arrows you drew. *([1.1](lessons/01-01-vectors-span-linear-combinations.md))*
- *Distinct* is not *independent*: $(1,2)$ and $(2,4)$ are different vectors and still dependent. The test is whether a nontrivial combination hits $\mathbf 0$. *([1.2](lessons/01-02-linear-independence-basis-dimension.md))*
- Past the dimension, extra vectors are pure redundancy — any 3 vectors in $\mathbb R^2$ are automatically dependent. *([1.2](lessons/01-02-linear-independence-basis-dimension.md))*
- Spanning is not being a basis: $\{\mathbf e_1, \mathbf e_2, \mathbf e_1+\mathbf e_2\}$ spans $\mathbb R^2$ but gives no unique coordinates. *([1.2](lessons/01-02-linear-independence-basis-dimension.md))*

### Elimination and rank

- A row of all zeros including the right-hand side is the harmless $0 = 0$ (a free variable). Only $[\,0\ \cdots\ 0 \mid c\,]$ with $c \neq 0$ kills the system. *([1.3](lessons/01-03-linear-systems-elimination-rank.md))*
- Rank counts **pivots**, not equations — three equations reducing to two pivots have rank 2. *([1.3](lessons/01-03-linear-systems-elimination-rank.md))*
- You don't choose how many free variables there are: the count is fixed at $n - \operatorname{rank}(A)$; only *which* columns end up free is up to the elimination. *([1.3](lessons/01-03-linear-systems-elimination-rank.md))*
- Read the column space off the pivot columns of the **original** matrix, never of the reduced one — elimination changes the column space. *([2.2](lessons/02-02-inverses-and-four-subspaces.md))*

### The cross product

- Order matters: $\mathbf b\times\mathbf a = -(\mathbf a\times\mathbf b)$. In a moment problem that sign is clockwise vs. counterclockwise, and $\vec r\times\vec F$ is never $\vec F\times\vec r$. *([1.4](lessons/01-04-cross-product-and-orientation.md))*
- $\mathbf a\times\mathbf b = \mathbf 0$ does **not** mean one of them is zero — it means they're **parallel**. Two long vectors on the same line cross to zero. *([1.4](lessons/01-04-cross-product-and-orientation.md))*
- Cross uses $\sin\theta$, dot uses $\cos\theta$; cross dies on parallel vectors, dot dies on perpendicular ones. Swapping them is the most common error here. *([1.4](lessons/01-04-cross-product-and-orientation.md))*
- The middle term of the determinant expansion carries a **minus**: the $\mathbf e_2$ slot is $a_3b_1 - a_1b_3$, not $a_1b_3 - a_3b_1$. *([1.4](lessons/01-04-cross-product-and-orientation.md))*
- It is not associative — $\mathbf a\times\mathbf b\times\mathbf c$ is meaningless without parentheses. *([1.4](lessons/01-04-cross-product-and-orientation.md))*
- $\lVert\boldsymbol\omega\times\mathbf r\rVert = \omega\lVert\mathbf r\rVert\sin\theta$ measures distance to the **axis**, not to the origin. *([1.4](lessons/01-04-cross-product-and-orientation.md))*

### Matrices as maps

- $A\mathbf x$ computed as row-by-row dot products gives the right numbers, but the **column** view is the meaning — it's what ties outputs to the column space. *([2.1](lessons/02-01-matrices-as-linear-maps.md))*
- $AB \neq BA$: $AB$ means do $B$ first. Reflect-then-rotate is not rotate-then-reflect, and you can never "cancel" matrices in a product. *([2.1](lessons/02-01-matrices-as-linear-maps.md), [2.2](lessons/02-02-inverses-and-four-subspaces.md))*
- A matrix isn't a grid to memorize — it's a verb. Change the basis and the same map wears a different grid. *([2.1](lessons/02-01-matrices-as-linear-maps.md))*
- Square does **not** mean invertible: a square matrix that squashes any direction to $\mathbf 0$ has no inverse. *([2.2](lessons/02-02-inverses-and-four-subspaces.md))*

### Determinants

- Big entries do not mean a big determinant — what matters is whether the columns are independent. *([2.3](lessons/02-03-determinants.md))*
- The sign is information, not noise: it flags a flipped orientation (a reflection or an odd number of row swaps). *([2.3](lessons/02-03-determinants.md))*
- Determinants **multiply**, they don't add: $\det(A+B) \neq \det A + \det B$ (try $A = B = I_2$). *([2.3](lessons/02-03-determinants.md))*

### Eigenvalues and diagonalization

- $\mathbf 0$ is never an eigenvector (it would make every number an eigenvalue), but $\lambda = 0$ is a perfectly good eigenvalue — it means the matrix is singular. *([3.1](lessons/03-01-eigenvalues-eigenvectors.md))*
- An eigenvector is a whole line, not one arrow: report the direction, not a magnitude. *([3.1](lessons/03-01-eigenvalues-eigenvectors.md))*
- A real matrix need not have a real eigenvector — a rotation has none, and its complex eigenvalues are the *signature* of rotation, not a failure. *([3.1](lessons/03-01-eigenvalues-eigenvectors.md))*
- Not every square matrix diagonalizes. A repeated eigenvalue is the warning sign: check whether it supplies enough independent eigenvectors. *([3.2](lessons/03-02-diagonalization.md))*
- $A^k = PD^kP^{-1}$, **not** $P^kD^kP^{-k}$ — the interior pairs cancel, so only $D$ gets powered. *([3.2](lessons/03-02-diagonalization.md))*
- Column $j$ of $P$ must match diagonal slot $j$ of $D$; swap one without the other and $PDP^{-1}$ stops being $A$. *([3.2](lessons/03-02-diagonalization.md))*

### Inner products and orthogonality

- Length and angle are not baked into a vector — they come from the *choice* of inner product; reweight it and "perpendicular" changes. *([4.1](lessons/04-01-inner-products-orthogonality.md))*
- Not every slot-by-slot rule is an inner product: without positive-definiteness there is no honest norm (spacetime's pairing fails this on purpose). *([4.1](lessons/04-01-inner-products-orthogonality.md))*
- Inner product zero means **perpendicular**, not small — two long vectors at a right angle pair to exactly zero. *([4.1](lessons/04-01-inner-products-orthogonality.md))*
- Only drop the $\langle\mathbf q_i,\mathbf q_i\rangle$ denominator once the axis is **normalized**; projecting onto un-normalized vectors keeps it. *([4.3](lessons/04-03-gram-schmidt-qr.md))*
- Gram–Schmidt depends on the order of the input vectors: same span, different frame. *([4.3](lessons/04-03-gram-schmidt-qr.md))*
- A step producing $\mathbf u_k = \mathbf 0$ isn't a bug — it's the process detecting linear dependence. *([4.3](lessons/04-03-gram-schmidt-qr.md))*

### Projection and least squares

- For an over-determined system there is no exact solution; you must pre-multiply by $A^\top$ to get the solvable normal equations. *([4.2](lessons/04-02-projection-least-squares.md))*
- $P = A(A^\top A)^{-1}A^\top$ does **not** simplify to $I$ — $A$ is rectangular and has no inverse to split off. *([4.2](lessons/04-02-projection-least-squares.md))*
- The residual is orthogonal to the **column space** (that's what $A^\top\mathbf e = \mathbf 0$ says), not to $\hat{\mathbf x}$ or to individual entries. *([4.2](lessons/04-02-projection-least-squares.md))*

### Symmetric matrices, forms, and the SVD

- Split the cross-term in half when reading $q$ into a matrix: $q = 4xy$ needs $a_{12} = a_{21} = 2$, not $4$ and $0$. *([5.1](lessons/05-01-spectral-theorem-quadratic-forms.md))*
- $Q^{-1} = Q^\top$ only after the eigenvectors are normalized — orthogonal-but-unnormalized columns do not give $Q^\top Q = I$. *([5.1](lessons/05-01-spectral-theorem-quadratic-forms.md))*
- The level set $q = 1$ is an ellipse only when $A$ is definite; indefinite eigenvalues make it a hyperbola, and a zero eigenvalue degenerates it into lines. *([5.1](lessons/05-01-spectral-theorem-quadratic-forms.md))*
- Singular values equal the absolute values of eigenvalues **only** for symmetric matrices — in general they live on $A^\top A$, not on $A$. *([5.2](lessons/05-02-svd.md))*
- $\Sigma$ being diagonal does not make $A$ diagonal-ish: the stretch is sandwiched between two rotations, and dropping them loses the map. *([5.2](lessons/05-02-svd.md))*
- Sort the singular values (and permute the columns of $U$ and $V$ to match) — "keep the top $k$" is meaningless otherwise. *([5.2](lessons/05-02-svd.md))*
- $\mathbf u_i = A\mathbf v_i/\sigma_i$ breaks down when $\sigma_i = 0$; those columns are filled by an orthonormal completion instead. *([5.2](lessons/05-02-svd.md))*
