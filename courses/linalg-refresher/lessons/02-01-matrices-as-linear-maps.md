# Linear Algebra · Lesson 2.1: Matrices as linear transformations

> ⏱ ~15 min · Module 2: Matrices as linear maps · Builds on: [1.3 Linear systems, elimination, and rank](01-03-linear-systems-elimination-rank.md), [1.1 Vectors, linear combinations, and span](01-01-vectors-span-linear-combinations.md) · Unlocks: 2.2 (inverses and the four subspaces)

## Why this matters

Every rotation of a video-game camera, every change of coordinates in physics, every "predict next year's state from this year's" transition in economics is a matrix — not because someone likes grids of numbers, but because these are all **linear maps**, and a matrix is the complete fingerprint of one. Once you read $A\mathbf x$ as *"where the map $A$ sends the point $\mathbf x$,"* the rest of the course opens up: eigenvectors become the directions a map leaves alone, determinants become how much it stretches volume, the SVD becomes the map's cleanest description. This lesson makes the switch from noun to verb.

## The idea

Stop looking at a matrix as a static block of numbers. A matrix is a **machine that moves the plane** (or space): feed it a point, it hands you back a new point, and it does so *rigidly and predictably* — grid lines stay straight, evenly spaced, and the origin stays put. That predictability has a name: linearity.

Here's the whole trick. Because the map is linear, you don't need to know what it does to *every* point — you only need to know what it does to the two basis arrows $\mathbf e_1 = (1,0)$ and $\mathbf e_2 = (0,1)$. Every other point is just a combination of those two ($ (x,y) = x\mathbf e_1 + y\mathbf e_2$), and a linear map sends a combination to *the same combination of the outputs*. So if you tell me where $\mathbf e_1$ and $\mathbf e_2$ land, I can tell you where everything lands. **Those two landing spots, stacked as columns, are the matrix.** A matrix is nothing more than a record of where the basis vectors go.

## The formal version

**Linear map.** A function $T:\mathbb{R}^n \to \mathbb{R}^m$ is **linear** if for all vectors $\mathbf u,\mathbf v$ and scalars $c$:

$$T(\mathbf u + \mathbf v) = T\mathbf u + T\mathbf v, \qquad T(c\,\mathbf v) = c\,T\mathbf v.$$

In words: the map doesn't care whether you add/scale *before* or *after* applying it — arrows in, arrows out, no bending. ($\mathbf u,\mathbf v$ are input vectors; $c$ is a number; $T\mathbf v$ is the image of $\mathbf v$.)

**Matrix–vector product as a combination of columns.** Write $A = [\,\mathbf a_1 \; \mathbf a_2 \; \cdots \; \mathbf a_n\,]$ with columns $\mathbf a_j$. Then for $\mathbf x = (x_1,\dots,x_n)$,

$$A\mathbf x = x_1\mathbf a_1 + x_2\mathbf a_2 + \cdots + x_n\mathbf a_n.$$

In words: $A\mathbf x$ is the linear combination of $A$'s columns weighted by the entries of $\mathbf x$ — exactly the "span" machinery from [1.1](01-01-vectors-span-linear-combinations.md). The reachable outputs are precisely the span of the columns.

**The key fact.** Setting $\mathbf x = \mathbf e_j$ (a $1$ in slot $j$, zeros elsewhere) picks out one column:

$$A\mathbf e_j = \mathbf a_j.$$

In words: **the $j$-th column of $A$ is the image of the $j$-th basis vector.** To build the matrix of a map, just apply it to each $\mathbf e_j$ and write the answers as columns.

**Matrix multiplication is composition.** If $B$ maps first and $A$ maps second, the combined map $\mathbf x \mapsto A(B\mathbf x)$ is itself linear, and its matrix is the product $AB$, *defined* so that

$$(AB)\mathbf x = A(B\mathbf x).$$

In words: $AB$ means "do $B$, then $A$" (right-to-left, like $f(g(x))$). Its columns are $A$ applied to the columns of $B$: $\;(AB)\mathbf e_j = A(B\mathbf e_j)$. This is why multiplication is **associative** ($(AB)C = A(BC)$ — composing maps in the same order) but **not commutative** ($AB \neq BA$ — rotating then shearing is not shearing then rotating).

## Picture

![Left: the unit square with basis vectors e1, e2. Right: their images under the shear A = [[1,1],[0,1]], forming a parallelogram whose edges are the columns of A.](assets/02-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — read $A\mathbf x$ two ways).** Let

$$A = \begin{bmatrix} 2 & 1 \\ 0 & 3 \end{bmatrix}, \qquad \mathbf x = \begin{bmatrix} 1 \\ 2 \end{bmatrix}.$$

*Column view (the one to internalize):* $A\mathbf x$ is $1$ of column one plus $2$ of column two:

$$A\mathbf x = 1\begin{bmatrix} 2 \\ 0 \end{bmatrix} + 2\begin{bmatrix} 1 \\ 3 \end{bmatrix} = \begin{bmatrix} 2 \\ 0 \end{bmatrix} + \begin{bmatrix} 2 \\ 6 \end{bmatrix} = \begin{bmatrix} 4 \\ 6 \end{bmatrix}.$$

*Row view (the mechanical dot-product):* $(2\cdot 1 + 1\cdot 2,\; 0\cdot 1 + 3\cdot 2) = (4,6)$. Same answer. The column view tells you *why*: the map sends $\mathbf e_1$ to $(2,0)$ and $\mathbf e_2$ to $(1,3)$ — those columns are the images — and $\mathbf x=(1,2)$ lands at the matching combination.

**Example 2 (why you'd care — composing rotations adds angles).** Let $R(\theta)$ rotate the plane counterclockwise by $\theta$. Tracking where $\mathbf e_1,\mathbf e_2$ go (a unit turn) gives its columns:

$$R(\theta) = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}.$$

Rotate by $\theta$, *then* by $\varphi$: the combined map is $R(\varphi)R(\theta)$, and it had better equal $R(\theta+\varphi)$. Multiply and watch the trig fall out:

$$R(\varphi)R(\theta) = \begin{bmatrix} \cos\varphi\cos\theta - \sin\varphi\sin\theta & -(\cos\varphi\sin\theta + \sin\varphi\cos\theta) \\ \sin\varphi\cos\theta + \cos\varphi\sin\theta & \cos\varphi\cos\theta - \sin\varphi\sin\theta \end{bmatrix} = \begin{bmatrix} \cos(\theta+\varphi) & -\sin(\theta+\varphi) \\ \sin(\theta+\varphi) & \cos(\theta+\varphi) \end{bmatrix}.$$

Matrix multiplication *is* function composition, so it silently encodes the angle-addition formulas — and this is literally how a graphics or robotics pipeline stacks transforms into one matrix.

## Watch out

- You might think $A\mathbf x$ is *only* "dot each row with $\mathbf x$." That computes the right numbers, but the column view — a weighted sum of columns — is the meaning, and it's what connects outputs to the span of the columns (the column space of [2.2](02-02-inverses-and-four-subspaces.md)).
- You might think $AB = BA$. Order is *apply $B$ first, then $A$*; swapping changes which map touches the raw input, and the results generally differ. Reflect-then-rotate $\neq$ rotate-then-reflect.
- You might think a matrix is a grid of numbers you memorize. It's a **verb** — an action on space. The grid is just its coordinates in the standard basis; change the basis and the same map wears a different grid.

## One-liner

> A matrix is a verb: its columns say where the basis vectors land, and linearity carries every other point along for the ride.

## Problems

**P1 (🟢)** (a) By tracking where $\mathbf e_1$ and $\mathbf e_2$ go, write the matrix $R$ that rotates $\mathbb{R}^2$ by $90^\circ$ counterclockwise. (b) Apply it to $\mathbf v = (3,1)$ and check the answer is a $90^\circ$ turn of $\mathbf v$.

**P2 (🟡)** Let $A = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$ (shear) and $B = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$ ($90^\circ$ rotation). Compute $AB$ and $BA$, confirm they differ, and say in words which composition each one is.

**P3 (🔴, optional)** (a) Find the matrix $P$ that projects every point onto the $x$-axis, by tracking $\mathbf e_1,\mathbf e_2$. (b) Verify $P^2 = P$ (idempotent) and explain geometrically why that's obvious. (c) Now the reflection across the $x$-axis: write its matrix $F$ and show $F^2 = I$, not $F$ — why the different verdict?

<details>
<summary>Solutions</summary>

**P1** (a) A $90^\circ$ CCW turn sends $\mathbf e_1=(1,0)\mapsto(0,1)$ and $\mathbf e_2=(0,1)\mapsto(-1,0)$. Stack these as columns:

$$R = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}.$$

(This is $R(90^\circ)$ from Example 2, since $\cos 90^\circ = 0,\ \sin 90^\circ = 1$.)

(b) $R\begin{bmatrix}3\\1\end{bmatrix} = 3\begin{bmatrix}0\\1\end{bmatrix} + 1\begin{bmatrix}-1\\0\end{bmatrix} = \begin{bmatrix}-1\\3\end{bmatrix}.$ Check: $(3,1)$ points right-and-slightly-up; a $90^\circ$ CCW turn should point up-and-slightly-left — $(-1,3)$ does. (Also $\mathbf v\cdot R\mathbf v = 3(-1)+1(3)=0$, so they're perpendicular, as a $90^\circ$ rotation demands.)

**P2** Using the column-combination view for each product:

$$AB = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & -1 \\ 1 & 0 \end{bmatrix}, \qquad BA = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}\begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 0 & -1 \\ 1 & 1 \end{bmatrix}.$$

They differ, so $AB \neq BA$. $AB$ means **rotate first ($B$), then shear ($A$)**; $BA$ means **shear first ($A$), then rotate ($B$)**. Spot-check $AB$ via the key fact: $AB\,\mathbf e_1 = A(B\mathbf e_1) = A(0,1) = (1,1)$ — matching column one of $AB$. ✓

**P3** (a) Projection onto the $x$-axis keeps the $x$-part and kills the $y$-part: $\mathbf e_1=(1,0)\mapsto(1,0)$, $\mathbf e_2=(0,1)\mapsto(0,0)$. So

$$P = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}.$$

(b) $P^2 = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix} = P.$ Geometrically obvious: once a point is *on* the $x$-axis, projecting it again does nothing — the shadow of a shadow is the shadow.

(c) Reflection across the $x$-axis flips the $y$-part: $\mathbf e_1\mapsto(1,0)$, $\mathbf e_2\mapsto(0,-1)$, so $F = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$ and $F^2 = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = I.$ Different verdict because reflection loses no information — flip twice and you're back where you started ($F^2=I$), whereas projection *discards* the $y$-coordinate permanently, so repeating changes nothing ($P^2=P$).

</details>

## Flashback

**From Lesson 1.3 (Linear systems, elimination, and rank):** Read the system below as $A\mathbf x = \mathbf b$, solve it by elimination, and state the rank of $A$.

$$\begin{aligned} x + 2y &= 5 \\ 3x - \phantom{2}y &= 1 \end{aligned}$$

<details>
<summary>Solution</summary>

Here $A = \begin{bmatrix} 1 & 2 \\ 3 & -1 \end{bmatrix}$, $\mathbf b = \begin{bmatrix} 5 \\ 1 \end{bmatrix}$. Eliminate: subtract $3\times$(row 1) from row 2: $(3x-y) - 3(x+2y) = 1 - 15 \Rightarrow -7y = -14 \Rightarrow y = 2$. Back-substitute: $x = 5 - 2(2) = 1$. Solution $(x,y) = (1,2)$; check row 2: $3(1)-2 = 1$ ✓. Both rows are pivots (they're independent), so $\operatorname{rank}A = 2$ — full rank, hence the unique solution.

</details>

## Connections

- **Backward:** the column view of $A\mathbf x$ is exactly the linear-combination/span idea from [1.1](01-01-vectors-span-linear-combinations.md); solving $A\mathbf x = \mathbf b$ from [1.3](01-03-linear-systems-elimination-rank.md) is now the question *"which input does the map $A$ send to $\mathbf b$?"*
- **Forward:** [2.2](02-02-inverses-and-four-subspaces.md) asks when a map can be *undone* (the inverse) and names the column space — the set of reachable outputs — as one of the four fundamental subspaces; [2.3](02-03-determinants.md) measures how much the map stretches area/volume; eigenvectors ([3.1](03-01-eigenvalues-eigenvectors.md)) are the input directions the verb merely stretches.
- **Sideways (graphics/physics):** Example 2 is the transform stack in every rendering and robotics pipeline — poses compose by matrix multiplication; the same composition rule turns a change of reference frame in mechanics into a product of matrices.
