# Group & Representation Theory · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

A representation turns an abstract group into matrices, and the entire subject is
the study of how those matrices break apart. Two theorems make the finite case
clean (Maschke: everything splits; Schur: the atoms are rigid), one gadget makes
it *computable* (the character — one number per conjugacy class), and one
continuous sequel makes it physics ($SU(2)$ representations are angular momentum
and spin). Mid-problem, this card is mostly three things: the orthogonality
relations, the character tables you keep reusing, and the ladder-operator formulas.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\rho: G \to GL(V)$ | a representation — each group element becomes an invertible matrix on $V$ | [1.1](lessons/01-01-what-is-a-representation.md) |
| $\deg\rho = \dim V$ | degree (dimension) of the representation — the size of its matrices | [1.1](lessons/01-01-what-is-a-representation.md) |
| $\rho \cong \rho'$ | equivalent: one fixed $T$ conjugates the *whole* family, $\rho'(g) = T\rho(g)T^{-1}$ | [1.1](lessons/01-01-what-is-a-representation.md) |
| $\mathbb{C}[G]$ | group algebra — one basis vector $e_g$ per group element | [1.2](lessons/01-02-examples-unitarity.md) |
| $\rho_{\text{reg}}$ | regular representation: $G$ shuffling its own name tags, $e_h \mapsto e_{gh}$ | [1.2](lessons/01-02-examples-unitarity.md) |
| $M^\dagger$ | conjugate transpose; unitary means $M^\dagger M = I$ | [1.2](lessons/01-02-examples-unitarity.md) |
| $\langle\cdot,\cdot\rangle_G$ | an inner product averaged over the group — the one $G$ preserves | [1.2](lessons/01-02-examples-unitarity.md) |
| $W \subseteq V$, $W^\perp$ | an invariant subspace and its orthogonal complement | [1.3](lessons/01-03-reducibility-invariant-subspaces.md) |
| $V_1 \oplus V_2$ | direct sum — block-diagonal, the two systems side by side | [1.3](lessons/01-03-reducibility-invariant-subspaces.md) |
| $\operatorname{Hom}_G(V,W)$, $\operatorname{End}_G(V)$ | intertwiners between reps; self-intertwiners (the **commutant**) | [1.5](lessons/01-05-schur-lemma.md) |
| $\chi_\rho(g) = \operatorname{tr}\rho(g)$ | the character — the basis-blind shadow of a representation | [2.1](lessons/02-01-characters.md) |
| $\chi_i$, $d_i = \chi_i(e)$ | the $i$-th irreducible character and its dimension | [2.1](lessons/02-01-characters.md) |
| $\langle \chi,\psi\rangle$ | class-function inner product, $\frac{1}{\lvert G\rvert}\sum_g \chi(g)\overline{\psi(g)}$ | [2.2](lessons/02-02-orthogonality-relations.md) |
| $[g]$, $\lvert C_j\rvert$ | a conjugacy class and its size (the weight in every class-sum) | [2.2](lessons/02-02-orthogonality-relations.md) |
| $C_G(g)$ | centralizer of $g$; $\lvert C_G(g)\rvert = \lvert G\rvert / \lvert [g]\rvert$ | [2.3](lessons/02-03-building-character-table.md) |
| $m_i$, $V^{(i)}$, $P_i$ | multiplicity of $V_i$, its isotypic component, and the projector onto it | [2.4](lessons/02-04-decomposing-a-representation.md) |
| $V \otimes W$ | tensor product — both systems at once, $\dim$ multiplies | [3.1](lessons/03-01-tensor-products.md) |
| $\operatorname{Sym}^2 V$, $\Lambda^2 V$ | symmetric and antisymmetric squares (bosons / fermions) | [3.1](lessons/03-01-tensor-products.md) |
| $N_{ij}^k$ | Clebsch–Gordan series: multiplicity of $V_k$ in $V_i \otimes V_j$ | [3.2](lessons/03-02-clebsch-gordan-decomposition.md) |
| $V_i^*$ | dual (conjugate) representation, character $\overline{\chi_i}$ | [3.2](lessons/03-02-clebsch-gordan-decomposition.md) |
| $\operatorname{Res}^G_H V$, $V\!\downarrow_H$ | restriction — the same space, only $H$'s elements acting | [3.3](lessons/03-03-restriction-induction.md) |
| $\operatorname{Ind}^G_H W$ | induction — one copy of $W$ per coset, $\dim = [G:H]\dim W$ | [3.3](lessons/03-03-restriction-induction.md) |
| $A_1, A_2, B_1, B_2, E, T$ | Mulliken labels — chemists' names for a point group's irreducibles | [3.4](lessons/03-04-molecular-vibrations-selection-rules.md) |
| $\Gamma_{\text{total}}$, $\Gamma_{\text{vib}}$ | the $3N$-dimensional displacement rep, and what's left after removing translations and rotations | [3.4](lessons/03-04-molecular-vibrations-selection-rules.md) |
| $\ominus$ | subtract a representation (remove those irreducible summands) | [3.4](lessons/03-04-molecular-vibrations-selection-rules.md) |
| $[H,\rho(g)] = 0$ | the Hamiltonian commutes with every symmetry — the source of degeneracy | [3.5](lessons/03-05-degeneracy-symmetry-breaking.md) |
| $GL_n, U(n), SU(n), O(n), SO(n)$ | the matrix Lie groups (see the table below) | [4.1](lessons/04-01-lie-groups.md) |
| $d\mu(g)$ | Haar measure — the invariant "average" that replaces $\frac{1}{\lvert G\rvert}\sum_g$ | [4.1](lessons/04-01-lie-groups.md) |
| $\mathfrak{g} = T_eG$ | the Lie algebra — legal velocities at the identity ($\mathfrak{su}(2)$, $\mathfrak{so}(3)$, …) | [4.2](lessons/04-02-lie-algebras-exponential-map.md) |
| $[X,Y] = XY - YX$ | Lie bracket — how much two group directions fail to commute | [4.2](lessons/04-02-lie-algebras-exponential-map.md) |
| $e^{tX}$ | exponential map — flow along the direction $X$ for time $t$ | [4.2](lessons/04-02-lie-algebras-exponential-map.md) |
| $f_{abc}$, $\varepsilon_{abc}$ | structure constants; the totally antisymmetric symbol ($\varepsilon_{123} = +1$) | [4.2](lessons/04-02-lie-algebras-exponential-map.md) |
| $T_a = -\frac{i}{2}\sigma_a$, $J_a = \frac12\sigma_a$ | anti-Hermitian (math) and Hermitian (physics) generators of $\mathfrak{su}(2)$ | [4.2](lessons/04-02-lie-algebras-exponential-map.md) |
| $\sigma_x, \sigma_y, \sigma_z$ | the Pauli matrices | [4.3](lessons/04-03-su2-so3-double-cover.md) |
| $\mathbf v\cdot\boldsymbol\sigma$ | a real $3$-vector packaged as a traceless Hermitian matrix | [4.3](lessons/04-03-su2-so3-double-cover.md) |
| $J_\pm = J_x \pm iJ_y$ | ladder operators — step $m$ up or down by one (not observables) | [4.4](lessons/04-04-su2-representations-angular-momentum.md) |
| $J^2$ | the Casimir $J_x^2+J_y^2+J_z^2$ — commutes with everything, so it labels the irrep | [4.4](lessons/04-04-su2-representations-angular-momentum.md) |
| $j$, $m$, $\lvert j,m\rangle$ | highest weight (spin), the $J_z$-eigenvalue, and the state carrying both | [4.4](lessons/04-04-su2-representations-angular-momentum.md) |
| $D_j$ | the spin-$j$ irreducible of $\mathfrak{su}(2)$, dimension $2j+1$ | [4.5](lessons/04-05-adding-angular-momenta.md) |
| $\mathfrak{h}$, rank | Cartan subalgebra (the mutually commuting generators) and its dimension | [4.6](lessons/04-06-roots-weights-su3.md) |
| $(t_3, y)$ | an $\mathfrak{su}(3)$ weight: isospin and hypercharge eigenvalues | [4.6](lessons/04-06-roots-weights-su3.md) |
| $\mathbf 3$, $\bar{\mathbf 3}$, $\mathbf 8$, $\mathbf{10}$ | $SU(3)$ irreducibles named by dimension (quarks, antiquarks, octet, decuplet) | [4.6](lessons/04-06-roots-weights-su3.md) |

## Definitions

### Representation

A dictionary that turns group elements into matrices so that the group's
multiplication table becomes matrix multiplication.

$$\rho: G \to GL(V) \quad \text{with} \quad \rho(gh) = \rho(g)\rho(h), \qquad \rho(e) = I, \quad \rho(g^{-1}) = \rho(g)^{-1}$$

*Introduced:* [1.1](lessons/01-01-what-is-a-representation.md)

### Equivalence of representations

Two representations are the same one seen in different bases — and it must be
**one** change-of-basis matrix working for every group element at once.

$$\rho'(g) = T\,\rho(g)\,T^{-1} \quad \text{for all } g \in G$$

*Introduced:* [1.1](lessons/01-01-what-is-a-representation.md)

### Faithful representation

No two group elements get the same matrix — $\rho$ is injective, so the group is
literally a group of matrices. (Not required: the trivial rep is faithful only for
the trivial group.)

*Introduced:* [1.1](lessons/01-01-what-is-a-representation.md)

### Permutation representation

Whenever $G$ shuffles a finite set $X$, it shuffles the basis vectors indexed by
$X$ — a representation for free, with permutation matrices.

$$\rho(g)\,e_x = e_{g\cdot x}, \qquad \chi(g) = \#\{x \in X : g\cdot x = x\}$$

*Introduced:* [1.2](lessons/01-02-examples-unitarity.md)

### Regular representation

The group acting on its own name tags: one basis vector per group element,
shifted by left multiplication. It contains every irreducible.

$$\rho_{\text{reg}}(g)\,e_h = e_{gh}, \qquad \dim = |G|$$

*Introduced:* [1.2](lessons/01-02-examples-unitarity.md) · *decomposed:* [2.5](lessons/02-05-regular-representation.md)

### Unitary representation

Every $\rho(g)$ preserves lengths and angles — a rigid motion of complex space.
For a finite group you can *always* arrange this by averaging the inner product.

$$\rho(g)^\dagger \rho(g) = I \quad \text{for all } g$$

*Introduced:* [1.2](lessons/01-02-examples-unitarity.md)

### Invariant subspace

A room the group action cannot leave. Invariant is **not** "pointwise fixed" —
vectors may swirl freely inside.

$$\rho(g)\,W \subseteq W \quad \text{for all } g \in G \quad (\text{hence } \rho(g)W = W)$$

*Introduced:* [1.3](lessons/01-03-reducibility-invariant-subspaces.md)

### Subrepresentation

The restriction of $\rho$ to an invariant subspace — a legitimate smaller
representation living inside the big one.

*Introduced:* [1.3](lessons/01-03-reducibility-invariant-subspaces.md)

### Irreducible representation

An atom: no invariant subspace except $\{0\}$ and everything. Reducible means such
a subspace exists, i.e. all $\rho(g)$ are simultaneously block-upper-triangular.

*Introduced:* [1.3](lessons/01-03-reducibility-invariant-subspaces.md)

### Completely reducible

The whole space splits as a *direct sum* of invariant pieces — all $\rho(g)$
become block-**diagonal** at once, with no leftover corner block.

$$V = V_1 \oplus \cdots \oplus V_m, \qquad \rho(g) = \operatorname{diag}\big(\rho_1(g), \dots, \rho_m(g)\big)$$

*Introduced:* [1.3](lessons/01-03-reducibility-invariant-subspaces.md)

### Intertwiner

A linear map that doesn't care whether you act first or map first — the
structure-preserving morphism of representation theory.

$$T\,\rho_V(g) = \rho_W(g)\,T \quad \text{for all } g \in G$$

*Introduced:* [1.5](lessons/01-05-schur-lemma.md)

### Commutant

All the self-intertwiners of $V$ collected into one algebra. Its dimension is a
computable irreducibility test.

$$\operatorname{End}_G(V) = \{T : T\rho(g) = \rho(g)T \ \forall g\}, \qquad \dim\operatorname{End}_G(V) = 1 \iff V \text{ irreducible}$$

*Introduced:* [1.5](lessons/01-05-schur-lemma.md)

### Character

Compress a representation to one number per group element — the trace, which is
blind to the choice of basis and therefore intrinsic.

$$\chi_\rho(g) = \operatorname{tr}\rho(g)$$

*Introduced:* [2.1](lessons/02-01-characters.md)

### Class function

Any function on the group that is constant on conjugacy classes. Characters are
the primary example, and the irreducible characters are an orthonormal *basis* of
this space.

$$f(hgh^{-1}) = f(g) \quad \text{for all } g,h$$

*Introduced:* [2.1](lessons/02-01-characters.md)

### Character table

The grid holding all of a finite group's representation theory: one row per
irreducible, one column per conjugacy class (and it is square — rows $=$ columns).

*Introduced:* [2.3](lessons/02-03-building-character-table.md)

### Multiplicity

How many copies of the irreducible $V_i$ sit inside $V$ — a Fourier coefficient on
the group.

$$m_i = \langle \chi_V, \chi_i\rangle, \qquad V \cong \bigoplus_i m_i V_i$$

*Introduced:* [2.4](lessons/02-04-decomposing-a-representation.md)

### Isotypic component

All the copies of one irreducible, added together. The *total* is canonical; the
individual copies are not (when $m_i \ge 2$ you can mix them freely).

$$V^{(i)} = \underbrace{V_i \oplus \cdots \oplus V_i}_{m_i \text{ copies}}, \qquad \dim V^{(i)} = m_i d_i$$

*Introduced:* [2.4](lessons/02-04-decomposing-a-representation.md)

### Tensor product representation

Glue two systems together: the same group element acts on both factors at once,
and dimensions **multiply**.

$$(\rho_V \otimes \rho_W)(g)\,(v\otimes w) = \big(\rho_V(g)v\big)\otimes\big(\rho_W(g)w\big), \qquad \dim(V\otimes W) = \dim V \cdot \dim W$$

*Introduced:* [3.1](lessons/03-01-tensor-products.md)

### Symmetric and antisymmetric square

Tensoring a rep with itself, the swap operator splits the result into its $+1$ and
$-1$ eigenspaces — symmetric states (bosons) and antisymmetric ones (fermions).

$$V \otimes V = \operatorname{Sym}^2 V \oplus \Lambda^2 V, \qquad \dim\operatorname{Sym}^2 V = \tfrac{d(d+1)}{2}, \quad \dim\Lambda^2 V = \tfrac{d(d-1)}{2}$$

*Introduced:* [3.1](lessons/03-01-tensor-products.md)

### Clebsch–Gordan series

The multiplicities telling you which combined symmetry types appear when you
couple two irreducibles — the *shape* of the decomposition, not the change of basis.

$$V_i \otimes V_j = \bigoplus_k N_{ij}^k\, V_k, \qquad N_{ij}^k = \langle \chi_i\chi_j, \chi_k\rangle$$

*Introduced:* [3.2](lessons/03-02-clebsch-gordan-decomposition.md)

### Clebsch–Gordan coefficients

The actual change of basis from the **product** basis (a state of each factor) to
the **coupled** basis (a state in a definite irreducible piece).

$$|i,a\rangle \otimes |j,b\rangle = \sum_{k,c} C^{\,kc}_{ia,\,jb}\,|k,c\rangle$$

*Introduced:* [3.2](lessons/03-02-clebsch-gordan-decomposition.md)

### Restriction (subduction)

Forget the elements outside a subgroup $H \le G$ and keep the same space. A
$G$-irreducible is usually *reducible* over $H$ — that decomposition is the
**branching rule**.

$$\chi_{\operatorname{Res}^G_H V}(h) = \chi_V(h), \qquad h \in H$$

*Introduced:* [3.3](lessons/03-03-restriction-induction.md)

### Induction

Build a $G$-rep out of an $H$-rep by making one copy per coset and letting $G$
shuffle the copies.

$$\operatorname{Ind}^G_H W = \{f: G \to W \mid f(hg) = \sigma(h)f(g)\}, \qquad \dim = [G:H]\cdot\dim W$$

*Introduced:* [3.3](lessons/03-03-restriction-induction.md)

### Molecular point group

The finite group of rotations and reflections that map a molecule onto itself —
e.g. $C_{3v}$ for ammonia: $\{E,\ 2C_3,\ 3\sigma_v\}$.

*Introduced:* [3.4](lessons/03-04-molecular-vibrations-selection-rules.md)

### Accidental degeneracy

Degeneracy larger than any irreducible dimension of the symmetry group you wrote
down. It means you missed a symmetry (hydrogen's $n^2$ degeneracy hides an
$SO(4)$), not that the theory failed.

*Introduced:* [3.5](lessons/03-05-degeneracy-symmetry-breaking.md)

### Lie group

A group that is also a smooth manifold — symmetry you can differentiate — with
multiplication and inversion smooth.

*Introduced:* [4.1](lessons/04-01-lie-groups.md)

### One-parameter subgroup

A smooth flow through the identity that composes by adding its parameter; its
velocity at $t = 0$ is a Lie-algebra element.

$$g(s+t) = g(s)g(t), \qquad g(0) = I$$

*Introduced:* [4.1](lessons/04-01-lie-groups.md)

### Lie algebra

The flat shadow of a curved group: the tangent space at the identity, i.e. the
matrices whose one-parameter subgroups stay inside $G$. It is a vector space
closed under the bracket, and $\dim\mathfrak{g} = \dim G$.

$$\mathfrak{g} = \{X : e^{tX} \in G \ \text{for all } t \in \mathbb{R}\}$$

*Introduced:* [4.2](lessons/04-02-lie-algebras-exponential-map.md)

### Lie bracket

The commutator — the one extra operation that stores the group's
non-commutativity. It closes on $\mathfrak{g}$, so the algebra is self-contained.

$$[X,Y] = XY - YX$$

*Introduced:* [4.2](lessons/04-02-lie-algebras-exponential-map.md)

### Exponential map

Reinflate a velocity into an actual group element — a straight ray in the algebra
becomes a curved one-parameter subgroup in the group. It is a local
diffeomorphism near the identity, and only *locally* onto.

$$\exp: \mathfrak{g}\to G, \qquad \exp(X) = e^X = \sum_{k\ge 0}\frac{X^k}{k!}$$

*Introduced:* [4.2](lessons/04-02-lie-algebras-exponential-map.md)

### Structure constants

Pick a basis of the algebra; every bracket is then a combination of basis
elements, and that finite table of numbers encodes the whole local group.

$$[T_a, T_b] = \sum_c f_{abc}\,T_c$$

*Introduced:* [4.2](lessons/04-02-lie-algebras-exponential-map.md)

### Double cover

A $2$-to-$1$ homomorphism onto a group: every element downstairs has exactly two
preimages. $SU(2) \to SO(3)$ is the case that matters, with kernel $\{\pm I\}$.

$$SO(3) \cong SU(2)/\{\pm I\}$$

*Introduced:* [4.3](lessons/04-03-su2-so3-double-cover.md)

### Spinor

A vector in a half-integer-$j$ representation — it lives upstairs on $SU(2)$ and
feels the covering, so a $2\pi$ rotation sends $\psi \mapsto -\psi$ and only $4\pi$
brings it home.

*Introduced:* [4.3](lessons/04-03-su2-so3-double-cover.md)

### Ladder operators

Non-Hermitian bookkeeping operators built from $J_x, J_y$ that move a state one
rung up or down the $J_z$ ladder instead of measuring anything.

$$J_\pm = J_x \pm iJ_y, \qquad J_\pm^\dagger = J_\mp$$

*Introduced:* [4.4](lessons/04-04-su2-representations-angular-momentum.md)

### Casimir operator

The total-length-squared operator. It commutes with every generator, so by Schur
it is a scalar on each irreducible — and that scalar *labels* the irreducible.

$$J^2 = J_x^2 + J_y^2 + J_z^2 = J_-J_+ + J_z^2 + J_z = J_+J_- + J_z^2 - J_z, \qquad J^2 = j(j+1)I$$

*Introduced:* [4.4](lessons/04-04-su2-representations-angular-momentum.md)

### Highest weight

The top rung: the state with the largest $J_z$-eigenvalue, annihilated by the
raising operator. Its eigenvalue $j$ names the whole irreducible.

$$J_+|j,j\rangle = 0, \qquad J_z|j,j\rangle = j\,|j,j\rangle$$

*Introduced:* [4.4](lessons/04-04-su2-representations-angular-momentum.md)

### Coupled and uncoupled bases

Two orthonormal bases for the *same* product space: uncoupled states have each
part's projection sharp, coupled states have the *total* $J^2$ and $J_z$ sharp.
The Clebsch–Gordan coefficients are the overlap between them.

$$|j_1,m_1\rangle|j_2,m_2\rangle \quad \longleftrightarrow \quad |j,m\rangle = \sum_{m_1+m_2 = m}\langle j_1 m_1; j_2 m_2 | j\,m\rangle\;|j_1,m_1\rangle|j_2,m_2\rangle$$

*Introduced:* [4.5](lessons/04-05-adding-angular-momenta.md)

### Cartan subalgebra and rank

The biggest batch of generators you can diagonalize simultaneously — the
"measure-at-once" quantum numbers. Its dimension is the **rank**: $1$ for
$\mathfrak{su}(2)$ (just $J_z$), $2$ for $\mathfrak{su}(3)$ ($T_3$ and $Y$).

*Introduced:* [4.6](lessons/04-06-roots-weights-su3.md)

### Weight

A state's address in eigenvalue space: the tuple of simultaneous Cartan
eigenvalues. Plot every state's weight and the representation becomes a
constellation — the **weight diagram**.

$$T_3|\lambda\rangle = t_3|\lambda\rangle, \quad Y|\lambda\rangle = y|\lambda\rangle \ \Rightarrow\ \text{weight } (t_3,y)$$

*Introduced:* [4.6](lessons/04-06-roots-weights-su3.md)

### Root

The vector a ladder operator adds to a state's weight — equivalently a weight of
the **adjoint** representation (the algebra acting on itself). $\mathfrak{su}(2)$
has roots $\pm 1$; $\mathfrak{su}(3)$ has six, forming a hexagon.

*Introduced:* [4.6](lessons/04-06-roots-weights-su3.md)

## Formulas and rules

### Averaging trick

Everything in Module 1 is one move: sum over the group and divide by $|G|$.
Average an inner product and it becomes $G$-invariant; average a projection and it
becomes $G$-equivariant; average matrix entries and you get orthogonality.

| Average this | Get this | Used for |
|---|---|---|
| $\langle v,w\rangle_G = \frac{1}{\lvert G\rvert}\sum_g \langle\rho(g)v, \rho(g)w\rangle$ | a $G$-invariant inner product | unitarizability |
| $P_0 = \frac{1}{\lvert G\rvert}\sum_g \rho(g)P\rho(g)^{-1}$ | a $G$-equivariant projection; $\ker P_0$ is invariant | Maschke |
| $\tilde T = \frac{1}{\lvert G\rvert}\sum_g \sigma(g)T\rho(g)^{-1}$ | an intertwiner from any linear $T$ | orthogonality relations |

*From* [1.2](lessons/01-02-examples-unitarity.md), [1.4](lessons/01-04-maschke-theorem.md), [2.2](lessons/02-02-orthogonality-relations.md)

### Maschke's theorem

Over $\mathbb{C}$ (or any field whose characteristic does not divide $|G|$), a
finite group can't hide a triangle: every invariant subspace has an invariant
complement, so every representation is a direct sum of irreducibles.

$$V \cong V_1 \oplus \cdots \oplus V_m \quad (\text{each } V_i \text{ irreducible}), \qquad \text{needs } \operatorname{char}k \nmid |G|$$

The hypothesis is load-bearing: over $\mathbb{F}_p$ the rep $1 \mapsto \begin{pmatrix}1&1\\0&1\end{pmatrix}$ of $\mathbb{Z}/p$ is reducible but **not** completely reducible, because $\frac{1}{|G|}$ doesn't exist.

*From* [1.4](lessons/01-04-maschke-theorem.md)

### Schur's lemma

Irreducibles are rigid: you cannot partially connect two of them, and an
irreducible's only self-maps are overall rescalings.

| Situation | Conclusion |
|---|---|
| $T: V \to W$ intertwiner, $V,W$ irreducible | $T = 0$ or $T$ is an isomorphism |
| $T: V \to V$ intertwiner, $V$ irreducible over $\mathbb{C}$ | $T = \lambda I$ for some $\lambda \in \mathbb{C}$ |
| $G$ abelian | every irreducible is $1$-dimensional |
| $V$ irreducible | $\dim\operatorname{End}_G(V) = 1$ (the computable test) |

Part 2 needs $\mathbb{C}$: over $\mathbb{R}$ a rotation is a non-scalar self-intertwiner.

*From* [1.5](lessons/01-05-schur-lemma.md)

### Character properties

| Property | Statement | In words |
|---|---|---|
| degree | $\chi_\rho(e) = \dim V$ | the identity column reads off dimensions |
| class function | $\chi_\rho(hgh^{-1}) = \chi_\rho(g)$ | one value per conjugacy class |
| basis-blind | $\rho \cong \rho' \Rightarrow \chi_\rho = \chi_{\rho'}$ | equivalent reps share a character |
| inverses | $\chi_\rho(g^{-1}) = \overline{\chi_\rho(g)}$ | eigenvalues are roots of unity |
| additivity | $\chi_{V\oplus W} = \chi_V + \chi_W$ | direct sums add characters |
| products | $\chi_{V\otimes W} = \chi_V\,\chi_W$ | tensor products multiply them |
| determines | $\chi_V = \chi_W \iff V \cong W$ | the character loses nothing (over $\mathbb{C}$) |

*From* [2.1](lessons/02-01-characters.md), [3.1](lessons/03-01-tensor-products.md)

### Inner product of class functions

Average one character against the conjugate of another. In practice you sum over
**classes**, weighted by class size — that weight is the most-forgotten factor in
the course.

$$\langle \chi,\psi\rangle = \frac{1}{|G|}\sum_{g\in G}\chi(g)\overline{\psi(g)} = \frac{1}{|G|}\sum_{j=1}^{k}|C_j|\,\chi(g_j)\overline{\psi(g_j)}$$

*From* [2.2](lessons/02-02-orthogonality-relations.md)

### Orthogonality relations

Two relations, two different jobs. **Rows** decompose representations; **columns**
fill in missing table entries.

| Relation | Formula | What it's for |
|---|---|---|
| First / row orthogonality | $\langle \chi_i, \chi_j\rangle = \delta_{ij}$ | irreducible characters are an orthonormal basis — use it to test irreducibility and extract multiplicities |
| Column orthogonality | $\sum_i \chi_i(g)\overline{\chi_i(h)} = 0$ if $[g]\neq[h]$ | solve for unknown entries of a half-built character table |
| Column norm | $\sum_i \lvert\chi_i(g)\rvert^2 = \lvert C_G(g)\rvert = \dfrac{\lvert G\rvert}{\lvert [g]\rvert}$ | check a finished column (columns are orthogonal, **not** orthonormal) |
| Irreducibility test | $\langle \chi,\chi\rangle = \sum_i m_i^2$, so $=1 \iff$ irreducible | one number diagnoses any character |

*From* [2.2](lessons/02-02-orthogonality-relations.md), [2.3](lessons/02-03-building-character-table.md)

### Decomposition recipe

Given any character, read off the complete decomposition without touching a
matrix: project it onto each row of the table.

$$m_i = \langle \chi_V, \chi_i\rangle = \frac{1}{|G|}\sum_{\text{classes } C}|C|\;\chi_V(C)\,\overline{\chi_i(C)}$$

$$V \cong \bigoplus_i m_i V_i, \qquad \dim V = \sum_i m_i d_i \ \ (\text{audit}), \qquad \langle\chi_V,\chi_V\rangle = \sum_i m_i^2 \ \ (\text{checksum})$$

Every $m_i$ must be a non-negative integer; a fraction means a wrong class size or
a dropped conjugate.

*From* [2.4](lessons/02-04-decomposing-a-representation.md)

### Projection onto an isotypic component

When you need the actual vectors and not just the counts, average the
representation matrices weighted by the conjugate character.

$$P_i = \frac{d_i}{|G|}\sum_{g\in G}\overline{\chi_i(g)}\;\rho(g), \qquad P_i^2 = P_i, \quad \sum_i P_i = I, \quad \operatorname{rank}P_i = m_i d_i$$

For the trivial rep this is plain group-averaging $\frac{1}{|G|}\sum_g \rho(g)$, which lands on the invariant vectors.

*From* [2.4](lessons/02-04-decomposing-a-representation.md)

### Building a character table

| Step | Rule |
|---|---|
| count rows | number of irreducibles $=$ number of conjugacy classes |
| get dimensions | $\sum_i d_i^2 = \lvert G\rvert$, each $d_i \ge 1$ and $d_i$ divides $\lvert G\rvert$ |
| free rows | the trivial rep is a row of $1$s; the $1$-dimensional reps are the characters of the abelianization $G/[G,G]$, and there are $\lvert G/[G,G]\rvert$ of them |
| fill the rest | row orthogonality against known rows, or column orthogonality against the identity column |
| verify | every row has norm $1$ and is orthogonal to the others; every column $g$ has norm$^2$ $\lvert G\rvert/\lvert [g]\rvert$ |

*From* [2.3](lessons/02-03-building-character-table.md), [2.5](lessons/02-05-regular-representation.md)

### The regular representation

Its character is a spike at the identity, which makes every multiplicity collapse
to a dimension — and hands you the master identity.

$$\chi_{\text{reg}}(e) = |G|, \qquad \chi_{\text{reg}}(g) = 0 \ (g \neq e)$$

$$\rho_{\text{reg}} = \bigoplus_i d_i\,V_i, \qquad \sum_i d_i^2 = |G|, \qquad \sum_i d_i\,\chi_i(g) = 0 \ \ (g\neq e)$$

Multiplicity is $d_i$; the dimension *contributed* is $d_i^2$ — don't conflate them.

*From* [2.5](lessons/02-05-regular-representation.md)

### Character table: cyclic group $\mathbb{Z}/n$

Every element is its own class, every irreducible is $1$-dimensional, and the
table is the discrete Fourier matrix: with $\omega = e^{2\pi i/n}$,

$$\chi_k(j) = \omega^{kj} = e^{2\pi i k j/n}, \qquad k,j = 0,1,\dots,n-1$$

The case $n = 4$ ($\omega = i$), classes $0,1,2,3$:

| $\mathbb{Z}/4$ | $0$ | $1$ | $2$ | $3$ |
|:--|:--:|:--:|:--:|:--:|
| $\chi_0$ | $1$ | $1$ | $1$ | $1$ |
| $\chi_1$ | $1$ | $i$ | $-1$ | $-i$ |
| $\chi_2$ | $1$ | $-1$ | $1$ | $-1$ |
| $\chi_3$ | $1$ | $-i$ | $-1$ | $i$ |

*From* [1.5](lessons/01-05-schur-lemma.md), [2.3](lessons/02-03-building-character-table.md)

### Character table: Klein four-group

$V = \mathbb{Z}/2 \times \mathbb{Z}/2$: abelian, four classes, four sign patterns.

| $V$ | $e$ | $a$ | $b$ | $ab$ |
|:--|:--:|:--:|:--:|:--:|
| $\chi_1$ | $1$ | $1$ | $1$ | $1$ |
| $\chi_2$ | $1$ | $1$ | $-1$ | $-1$ |
| $\chi_3$ | $1$ | $-1$ | $1$ | $-1$ |
| $\chi_4$ | $1$ | $-1$ | $-1$ | $1$ |

*From* [2.3](lessons/02-03-building-character-table.md)

### Character table: $S_3$ (= $D_3$ = $C_{3v}$)

The course's running example. Classes: identity (size 1), transpositions (size 3),
$3$-cycles (size 2); $|G| = 6$ and $1^2+1^2+2^2 = 6$.

| $S_3$ | $e\ (1)$ | transposition $(3)$ | $3$-cycle $(2)$ |
|:--|:--:|:--:|:--:|
| trivial $\chi_{\text{triv}}$ | $1$ | $1$ | $1$ |
| sign $\chi_{\text{sgn}}$ | $1$ | $-1$ | $1$ |
| standard $\chi_{\text{std}}$ | $2$ | $0$ | $-1$ |
| permutation $\chi_{\text{perm}}$ | $3$ | $1$ | $0$ |
| regular $\chi_{\text{reg}}$ | $6$ | $0$ | $0$ |

Reusable decompositions: $\text{perm} \cong \text{triv}\oplus\text{std}$; $\text{std}\otimes\text{std} \cong \text{triv}\oplus\text{sgn}\oplus\text{std}$; $\text{sgn}\otimes\text{std}\cong\text{std}$; $\rho_{\text{reg}} \cong \text{triv}\oplus\text{sgn}\oplus 2\,\text{std}$; $\Lambda^2(\text{std}) = \text{sgn}$.

*From* [2.1](lessons/02-01-characters.md), [2.3](lessons/02-03-building-character-table.md), [3.2](lessons/03-02-clebsch-gordan-decomposition.md)

### Character table: $S_4$

Five classes by cycle type ($|G| = 24$, dimensions $1,1,2,3,3$ with $1+1+4+9+9=24$). The $3$-dimensional standard rep is again "fixed points minus one."

| $S_4$ | $e\ (1)$ | $(ab)\ (6)$ | $(ab)(cd)\ (3)$ | $(abc)\ (8)$ | $(abcd)\ (6)$ |
|:--|:--:|:--:|:--:|:--:|:--:|
| trivial | $1$ | $1$ | $1$ | $1$ | $1$ |
| sign | $1$ | $-1$ | $1$ | $1$ | $-1$ |
| $2$-dim | $2$ | $0$ | $2$ | $-1$ | $0$ |
| standard | $3$ | $1$ | $-1$ | $0$ | $-1$ |
| standard $\otimes$ sign | $3$ | $-1$ | $-1$ | $0$ | $1$ |

*Standard table, used implicitly whenever a lesson decomposes a permutation representation via* [2.4](lessons/02-04-decomposing-a-representation.md)

### Character table: $A_4$

Four classes, dimensions $1,1,1,3$ (the case worked in 2.5's dimension hunt); $\omega = e^{2\pi i/3}$.

| $A_4$ | $e\ (1)$ | $(ab)(cd)\ (3)$ | $(abc)\ (4)$ | $(acb)\ (4)$ |
|:--|:--:|:--:|:--:|:--:|
| trivial | $1$ | $1$ | $1$ | $1$ |
| $\chi'$ | $1$ | $1$ | $\omega$ | $\omega^2$ |
| $\chi''$ | $1$ | $1$ | $\omega^2$ | $\omega$ |
| $3$-dim | $3$ | $-1$ | $0$ | $0$ |

*From* [2.5](lessons/02-05-regular-representation.md)

### Character table: $D_4$ and $Q_8$

Order $8$, five classes, dimensions $1,1,1,1,2$ — the two groups share this table
even though they are not isomorphic. For $D_4 = \langle r,s\rangle$ the classes are
$\{e\}, \{r^2\}, \{r,r^3\}, \{s,r^2s\}, \{rs,r^3s\}$; for $Q_8$ they are
$\{1\},\{-1\},\{\pm i\},\{\pm j\},\{\pm k\}$.

| | $C_1\ (1)$ | $C_2\ (1)$ | $C_3\ (2)$ | $C_4\ (2)$ | $C_5\ (2)$ |
|:--|:--:|:--:|:--:|:--:|:--:|
| $\chi_1$ | $1$ | $1$ | $1$ | $1$ | $1$ |
| $\chi_2$ | $1$ | $1$ | $1$ | $-1$ | $-1$ |
| $\chi_3$ | $1$ | $1$ | $-1$ | $1$ | $-1$ |
| $\chi_4$ | $1$ | $1$ | $-1$ | $-1$ | $1$ |
| $\chi_5$ | $2$ | $-2$ | $0$ | $0$ | $0$ |

$Q_8$'s $2$-dimensional irreducible has a **real-valued character but no real matrix form** (it is quaternionic — the Pauli-type matrices) — the standard warning that real entries in a table are weaker than real matrices.

*From* [2.1](lessons/02-01-characters.md), [2.3](lessons/02-03-building-character-table.md), [2.5](lessons/02-05-regular-representation.md)

### Character tables: the point groups used for molecules

$C_{3v}$ (ammonia, chloroform), $h = 6$, classes $E,\ 2C_3,\ 3\sigma_v$:

| $C_{3v}$ | $E\ (1)$ | $2C_3\ (2)$ | $3\sigma_v\ (3)$ | linear / rotations | quadratic |
|:--|:--:|:--:|:--:|:--|:--|
| $A_1$ | $1$ | $1$ | $1$ | $z$ | $x^2+y^2,\ z^2$ |
| $A_2$ | $1$ | $1$ | $-1$ | $R_z$ | — |
| $E$ | $2$ | $-1$ | $0$ | $(x,y),\ (R_x,R_y)$ | $(x^2-y^2,\,xy),\ (xz,\,yz)$ |

$C_{2v}$ (water), $h = 4$, all classes of size $1$, order $E,\ C_2,\ \sigma_v(xz),\ \sigma_v'(yz)$:

| $C_{2v}$ | $E$ | $C_2$ | $\sigma_v(xz)$ | $\sigma_v'(yz)$ | linear / rotations | quadratic |
|:--|:--:|:--:|:--:|:--:|:--|:--|
| $A_1$ | $1$ | $1$ | $1$ | $1$ | $z$ | $x^2,\ y^2,\ z^2$ |
| $A_2$ | $1$ | $1$ | $-1$ | $-1$ | $R_z$ | $xy$ |
| $B_1$ | $1$ | $-1$ | $1$ | $-1$ | $x,\ R_y$ | $xz$ |
| $B_2$ | $1$ | $-1$ | $-1$ | $1$ | $y,\ R_x$ | $yz$ |

$C_s = \{e,\sigma\}$: two irreducibles, $A'$ with $\chi = (1,1)$ and $A''$ with $\chi = (1,-1)$.

*From* [3.4](lessons/03-04-molecular-vibrations-selection-rules.md), [3.5](lessons/03-05-degeneracy-symmetry-breaking.md)

### Tensor products and squares

| Object | Character |
|---|---|
| $V \otimes W$ | $\chi_V(g)\,\chi_W(g)$ |
| $\operatorname{Sym}^2 V$ | $\tfrac12\big(\chi_V(g)^2 + \chi_V(g^2)\big)$ |
| $\Lambda^2 V$ | $\tfrac12\big(\chi_V(g)^2 - \chi_V(g^2)\big)$ |
| $\Lambda^2 V$ for $\dim V = 2$ | the determinant rep $g \mapsto \det\rho(g)$ |
| $V^*$ (dual) | $\overline{\chi_V(g)} = \chi_V(g^{-1})$ |

To use the $\operatorname{Sym}^2/\Lambda^2$ formulas you must first build the **class map** $g \mapsto [g^2]$ and read the character there.

*From* [3.1](lessons/03-01-tensor-products.md)

### Coupling and the invariance criterion

$$N_{ij}^k = \langle \chi_i\chi_j,\ \chi_k\rangle = \frac{1}{|G|}\sum_{g}\chi_i(g)\chi_j(g)\overline{\chi_k(g)}$$

$$N_{ij}^{\text{triv}} = \delta_{i,\,j^*}: \quad \text{the trivial rep sits in } V_i\otimes V_j \text{ exactly when } V_j \cong V_i^*, \text{ and then once}$$

Equivalently: a $G$-invariant pairing of $V_i$ with $V_j$ exists iff they are dual. Tensoring by a $1$-dimensional rep never changes dimension — it just permutes the irreducibles.

*From* [3.2](lessons/03-02-clebsch-gordan-decomposition.md)

### Frobenius reciprocity

Stated exactly: for any $G$-representation $V$ and $H$-representation $W$, with $H \le G$,

$$\big\langle \operatorname{Res}^G_H V,\ W \big\rangle_H \;=\; \big\langle V,\ \operatorname{Ind}^G_H W \big\rangle_G$$

*In words:* how many copies of $W$ appear when $V$ is **broken down** to $H$ equals
how many copies of $V$ appear when $W$ is **built up** to $G$. The left average runs
over $H$ (divide by $|H|$), the right over $G$ (divide by $|G|$) — different
groups, same number. Always compute the restriction side: it is just deleting
columns.

The induced character, when you do need it:

$$\chi_{\operatorname{Ind}^G_H W}(g) = \frac{1}{|H|}\sum_{\substack{x \in G \\ x^{-1}gx \in H}} \chi_W\big(x^{-1}gx\big), \qquad \chi_{\operatorname{Ind}}(e) = [G:H]\dim W$$

Inducing the trivial rep of $H$ gives the permutation representation of $G$ on the cosets $G/H$.

*From* [3.3](lessons/03-03-restriction-induction.md)

### Molecular vibrations recipe

1. Build $\chi_{\text{total}}(g) = (\text{atoms left in place by } g)\times(\text{contribution per unmoved atom})$.
2. Decompose $\Gamma_{\text{total}}$ with the usual multiplicity formula ($h = |G|$, class sizes $g_c$).
3. Subtract the rigid motions: $\Gamma_{\text{vib}} = \Gamma_{\text{total}} \ominus \Gamma_{\text{trans}} \ominus \Gamma_{\text{rot}}$, where $\Gamma_{\text{trans}}$ carries $x,y,z$ and $\Gamma_{\text{rot}}$ carries $R_x,R_y,R_z$ (both printed in the table).
4. Audit: $\dim\Gamma_{\text{total}} = 3N$ and $\dim\Gamma_{\text{vib}} = 3N-6$ ($3N-5$ if linear).

| Operation | Per-unmoved-atom contribution |
|---|---|
| proper rotation by $\theta$ ($E$ is $\theta = 0$) | $1 + 2\cos\theta$ |
| improper ($\sigma$, $S_n$, inversion) | $-1 + 2\cos\theta$ |
| identity $E$ | $+3$ |
| $C_2$ | $-1$ |
| $C_3$ | $0$ |
| mirror $\sigma$ ($\theta = 0$, improper) | $+1$ |
| inversion $i$ ($\theta = 180^\circ$, improper) | $-3$ |

*From* [3.4](lessons/03-04-molecular-vibrations-selection-rules.md)

### Selection rules

A matrix element survives only if the three symmetry types can couple to something
totally symmetric:

$$\langle f|\mu|i\rangle \neq 0 \iff A_1 \subseteq \Gamma_f \otimes \Gamma_\mu \otimes \Gamma_i$$

For a fundamental from the totally symmetric ground state this collapses to:

- **IR-active** — the mode's irreducible carries $x$, $y$, or $z$ (it modulates the dipole).
- **Raman-active** — its irreducible carries a quadratic $x^2, y^2, z^2, xy, xz, yz$ (it modulates the polarizability).
- **Mutual exclusion** — in a centrosymmetric molecule, $g$ modes are Raman-only and $u$ modes IR-only, never both.

*From* [3.4](lessons/03-04-molecular-vibrations-selection-rules.md)

### Degeneracy and symmetry breaking

If $[H,\rho(g)] = 0$ for all $g$, each energy eigenspace is $G$-invariant, and (Schur)
a $G$-invariant operator is a scalar on each irreducible block. So:

$$\text{degeneracy of a level} = \dim(\text{the irreducible it carries})$$

The multiset $\{d_i\}$ is therefore the group's complete menu of allowed
degeneracies — $C_{3v}$ ($1,1,2$) can never force a triplet; $T_d$ ($1,1,2,3,3$) can.

Break the symmetry to $H \le G$ and the level subduces:

$$\sigma\!\downarrow_H = \bigoplus_j m_j \tau_j, \qquad m_j = \frac{1}{|H|}\sum_{h\in H}\chi_\sigma(h)\,\overline{\chi_{\tau_j}(h)}, \qquad \sum_j m_j \dim\tau_j = \dim\sigma$$

One sublevel per branch. Standard cases: $E\!\downarrow_{C_s} = A' \oplus A''$ (a doublet splits into two singlets); $D^{(l=2)}\!\downarrow_{O_h} = e_g \oplus t_{2g}$ (the crystal-field splitting $2+3 = 5$).

*From* [3.5](lessons/03-05-degeneracy-symmetry-breaking.md)

### Matrix Lie groups

| Group | Entries | Condition | Real dimension |
|---|---|---|---|
| $GL_n(\mathbb{C})$ | complex | $\det M \neq 0$ | $2n^2$ |
| $U(n)$ | complex | $M^\dagger M = I$ | $n^2$ |
| $SU(n)$ | complex | $M^\dagger M = I,\ \det M = 1$ | $n^2 - 1$ |
| $O(n)$ | real | $M^{\mathsf T}M = I$ | $\binom{n}{2}$ |
| $SO(n)$ | real | $M^{\mathsf T}M = I,\ \det M = 1$ | $\binom{n}{2}$ |

Landmarks: $\dim SU(2) = 3$ and $SU(2) \cong S^3$ (the unit $3$-sphere, since every element is $\begin{pmatrix} a & b \\ -\bar b & \bar a\end{pmatrix}$ with $|a|^2+|b|^2 = 1$); $\dim SO(3) = 3$; $\dim SU(3) = 8$ (the eight Gell-Mann generators / gluons); $U(1) = \{e^{i\theta}\}$ is the circle.

*From* [4.1](lessons/04-01-lie-groups.md)

### Compact groups: what survives

Replace $\frac{1}{|G|}\sum_{g \in G}$ by the invariant **Haar** integral $\int_G d\mu(g)$ with $\int_G d\mu = 1$, and every Module 1–2 proof goes through:

> Every finite-dimensional representation of a **compact** group is unitarizable and completely reducible; Schur and character orthogonality hold verbatim.

Complete reducibility is a *compactness* theorem, not a Lie-group one: $U(n), SU(n), SO(n)$ are compact and behave like finite groups; the non-compact Lorentz group has no finite-dimensional unitary representations.

Baby case $U(1)$: its irreducibles are the Fourier modes $\rho(e^{i\theta}) = e^{in\theta}$ with $n \in \mathbb{Z}$ — the integrality forced by $2\pi$-periodicity (compactness) — and character orthogonality is $\frac{1}{2\pi}\int_0^{2\pi} e^{-im\theta}e^{in\theta}\,d\theta = \delta_{mn}$.

*From* [4.1](lessons/04-01-lie-groups.md)

### Lie algebras of the matrix groups

To find $\mathfrak{g}$, substitute $g(t) = e^{tX}$ into the group's defining
equation and differentiate at $t = 0$. The three matrix-exponential facts the
lessons use without proof:

$$e^{X} = \sum_{k\ge0}\frac{X^k}{k!} \ (\text{always converges}), \qquad \frac{d}{dt}e^{tX}\Big|_{t=0} = X, \qquad \det\big(e^{X}\big) = e^{\operatorname{tr}X}$$

Also $\big(e^X\big)^\dagger = e^{X^\dagger}$ and, when $X^\dagger = -X$, $\big(e^X\big)^\dagger = e^{-X} = \big(e^X\big)^{-1}$ — so anti-Hermitian generators exponentiate to unitary matrices.

| Group | Condition | Differentiates to | Lie algebra | $\dim$ |
|---|---|---|---|---|
| $U(n)$ | $g^\dagger g = I$ | $X^\dagger + X = 0$ | $\mathfrak{u}(n)$: anti-Hermitian | $n^2$ |
| $SU(n)$ | also $\det g = 1$ | also $\operatorname{tr}X = 0$ | $\mathfrak{su}(n)$: anti-Hermitian traceless | $n^2-1$ |
| $SO(n)$ | $g^{\mathsf T}g = I$, $\det g = 1$ | $X^{\mathsf T} + X = 0$ | $\mathfrak{so}(n)$: real antisymmetric | $\frac{n(n-1)}{2}$ |

Baker–Campbell–Hausdorff — the group product is addition in the algebra, corrected by brackets:

$$e^Xe^Y = \exp\!\Big(X + Y + \tfrac12[X,Y] + \tfrac{1}{12}\big([X,[X,Y]] + [Y,[Y,X]]\big) + \cdots\Big)$$

So $e^Xe^Y = e^{X+Y}$ **only** when $[X,Y] = 0$.

*From* [4.2](lessons/04-02-lie-algebras-exponential-map.md)

### Math vs. physics conventions

| Convention | Generators | Group element | Brackets |
|---|---|---|---|
| mathematician | $T_a = -\frac{i}{2}\sigma_a$ anti-Hermitian | $e^{X}$ | $[T_a,T_b] = \varepsilon_{abc}T_c$ |
| physicist | $J_a = iT_a = \frac12\sigma_a$ Hermitian (observables) | $U = e^{-i\theta J}$ | $[J_a,J_b] = i\varepsilon_{abc}J_c$ |

Spot the convention by the $i$ in the bracket. Physically: generators $\leftrightarrow$ observables, $\exp$ $\leftrightarrow$ symmetry transformation, brackets $\leftrightarrow$ canonical commutators such as $[J_a,J_b] = i\hbar\,\varepsilon_{abc}J_c$.

*From* [4.2](lessons/04-02-lie-algebras-exponential-map.md)

### Pauli matrices

$$\sigma_x = \begin{pmatrix}0&1\\1&0\end{pmatrix}, \qquad \sigma_y = \begin{pmatrix}0&-i\\i&0\end{pmatrix}, \qquad \sigma_z = \begin{pmatrix}1&0\\0&-1\end{pmatrix}$$

Hermitian, traceless, each squaring to $I$, and pairwise anticommuting:

$$\sigma_a\sigma_b = \delta_{ab}I + i\,\varepsilon_{abc}\sigma_c, \qquad [\sigma_a,\sigma_b] = 2i\,\varepsilon_{abc}\sigma_c, \qquad (\hat{\mathbf n}\cdot\boldsymbol\sigma)^2 = I$$

The half-angle exponential that generates every $SU(2)$ element:

$$e^{-i\frac{\theta}{2}(\hat{\mathbf n}\cdot\boldsymbol\sigma)} = \cos\tfrac{\theta}{2}\,I - i\sin\tfrac{\theta}{2}\,(\hat{\mathbf n}\cdot\boldsymbol\sigma)$$

*From* [4.3](lessons/04-03-su2-so3-double-cover.md)

### $SU(2) \to SO(3)$: the double cover

$\mathfrak{su}(2) \cong \mathfrak{so}(3)$ — both have structure constants $\varepsilon_{abc}$, with $(L_a)_{jk} = -\varepsilon_{ajk}$ on the $\mathfrak{so}(3)$ side. Locally the same, globally not.

Package a vector as a matrix and conjugate; the result is a rotation:

$$\mathbf v\cdot\boldsymbol\sigma \ \longmapsto\ U(\mathbf v\cdot\boldsymbol\sigma)U^\dagger = \mathbf v'\cdot\boldsymbol\sigma, \qquad \det(\mathbf v\cdot\boldsymbol\sigma) = -|\mathbf v|^2$$

| Fact | Consequence |
|---|---|
| $U \mapsto R(U)$ is onto with kernel $\{\pm I\}$ | $U$ and $-U$ give the same rotation: $2$-to-$1$ |
| $U(2\pi) = -I$ while $R(2\pi) = I$ | a spinor is negated by one full turn; $U(4\pi) = +I$ |
| $SU(2) \cong S^3$ simply connected, $SO(3)\cong\mathbb{RP}^3$ with $\pi_1 = \mathbb{Z}/2$ | the belt trick; a $2\pi$ twist cannot be undone, a $4\pi$ one can |
| spin-$j$ rep of $-I$ is $(-1)^{2j}I$ | integer $j$ descends to an honest $SO(3)$ rep; half-integer $j$ is $SU(2)$-only (projective over $SO(3)$) |

*From* [4.3](lessons/04-03-su2-so3-double-cover.md)

### The spin-$j$ irreducible of $\mathfrak{su}(2)$

Everything below follows from just $[J_z,J_\pm] = \pm J_\pm$ and $[J_+,J_-] = 2J_z$.

$$J_z|j,m\rangle = m\,|j,m\rangle, \qquad J_\pm|j,m\rangle = \sqrt{j(j+1) - m(m\pm 1)}\;|j,m\pm 1\rangle$$

$$J^2 = j(j+1)\,I, \qquad m = j, j-1, \dots, -j, \qquad \dim = 2j+1, \qquad j \in \{0, \tfrac12, 1, \tfrac32, \dots\}$$

The two smallest cases, written out:

$$j = \tfrac12: \quad J_z = \tfrac12\begin{pmatrix}1&0\\0&-1\end{pmatrix}, \quad J_+ = \begin{pmatrix}0&1\\0&0\end{pmatrix}, \quad J_- = \begin{pmatrix}0&0\\1&0\end{pmatrix}, \quad J_a = \tfrac12\sigma_a$$

$$j = 1: \quad J_z = \begin{pmatrix}1&0&0\\0&0&0\\0&0&-1\end{pmatrix}, \quad J_+ = \begin{pmatrix}0&\sqrt2&0\\0&0&\sqrt2\\0&0&0\end{pmatrix}, \quad J_- = J_+^{\mathsf T}$$

Phase convention: Condon–Shortley makes every ladder coefficient real and non-negative.

*From* [4.4](lessons/04-04-su2-representations-angular-momentum.md)

### Adding angular momenta ($SU(2)$ Clebsch–Gordan)

$$D_{j_1} \otimes D_{j_2} = \bigoplus_{j = |j_1-j_2|}^{j_1+j_2} D_j \qquad (\text{integer steps, each } j \text{ once})$$

$$(2j_1+1)(2j_2+1) = \sum_{j=|j_1-j_2|}^{j_1+j_2}(2j+1) \quad (\text{dimension audit})$$

Generators act on the product by the Leibniz rule $J_a = J_a^{(1)}\otimes I + I \otimes J_a^{(2)}$, so **projections add**: $m = m_1 + m_2$. Weight counting then gives the multiplicities directly:

$$\#\{\text{copies of } D_j\} = N(m = j) - N(m = j+1), \qquad N(m) = \#\{\text{product states with } m_1+m_2 = m\}$$

To get the coefficients: start from the unique top state $|j_1+j_2, j_1+j_2\rangle = |j_1,j_1\rangle|j_2,j_2\rangle$, apply $J_- = J_-^{(1)} + J_-^{(2)}$ repeatedly, then take the orthogonal combination in the next $m$-subspace as the top of the next multiplet, and repeat.

Standard results:

$$\tfrac12\otimes\tfrac12 = 1 \oplus 0, \qquad 1\otimes\tfrac12 = \tfrac32\oplus\tfrac12, \qquad 1\otimes 1 = 2\oplus 1\oplus 0$$

$$|1,1\rangle = |{\uparrow\uparrow}\rangle, \quad |1,0\rangle = \tfrac{1}{\sqrt2}\big(|{\uparrow\downarrow}\rangle + |{\downarrow\uparrow}\rangle\big), \quad |1,-1\rangle = |{\downarrow\downarrow}\rangle, \quad |0,0\rangle = \tfrac{1}{\sqrt2}\big(|{\uparrow\downarrow}\rangle - |{\downarrow\uparrow}\rangle\big)$$

The triplet is symmetric ($\operatorname{Sym}^2$), the singlet antisymmetric ($\Lambda^2$) — which is why two electrons sharing an orbital are locked into the singlet.

*From* [4.5](lessons/04-05-adding-angular-momenta.md)

### $SU(3)$ weights and the quark multiplets

Rank $2$, dimension $8$. The fundamental $\mathbf 3$ has weights $(t_3, y)$

$$u = \big(\tfrac12, \tfrac13\big), \qquad d = \big(-\tfrac12, \tfrac13\big), \qquad s = \big(0, -\tfrac23\big)$$

forming a triangle centered at the origin (weights of any irrep sum to zero). The conjugate $\bar{\mathbf 3}$ has all weights negated — an inverted triangle, **not** related to the first by a rotation, so $\mathbf 3 \not\cong \bar{\mathbf 3}$.

Weights **add** under tensor products (the $\mathfrak{su}(3)$ version of $m = m_1+m_2$), which gives the multiplets:

| Product | Decomposition | Physics |
|---|---|---|
| $\mathbf 3 \otimes \bar{\mathbf 3}$ | $\mathbf 8 \oplus \mathbf 1$ ($9 = 8+1$) | meson nonet: octet plus the singlet $\frac{1}{\sqrt3}(u\bar u + d\bar d + s\bar s)$ |
| $\mathbf 3 \otimes \mathbf 3$ | $\mathbf 6 \oplus \bar{\mathbf 3}$ | intermediate step for baryons |
| $\mathbf 3 \otimes \mathbf 3 \otimes \mathbf 3$ | $\mathbf{10} \oplus \mathbf 8 \oplus \mathbf 8 \oplus \mathbf 1$ ($27$) | baryon decuplet + two octets + singlet |

The decuplet's corners are $uuu = \Delta^{++}$, $ddd = \Delta^-$, and $sss = \Omega^-$ — the slot Gell-Mann predicted. Each simple Lie algebra is encoded by a **Dynkin diagram** ($\mathfrak{su}(3)$'s is two linked nodes); classifying those classifies all simple Lie algebras.

*From* [4.6](lessons/04-06-roots-weights-su3.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Group, homomorphism, $\rho(e) = I$ and $\rho(g^{-1}) = \rho(g)^{-1}$ | [abstract-algebra: Homomorphism](../abstract-algebra/reference.md#homomorphism) |
| Group actions, orbits, stabilizers, orbit–stabilizer | [abstract-algebra 2.4–2.5](../abstract-algebra/lessons/02-04-group-actions.md) |
| Burnside's orbit-counting lemma (used in 2.1's P3) | [abstract-algebra 2.6](../abstract-algebra/lessons/02-06-burnside-counting.md) |
| Conjugacy class, centralizer, class equation | [abstract-algebra: Conjugacy class](../abstract-algebra/reference.md#conjugacy-class) |
| Conjugacy in $S_n$ = same cycle type; sign of a permutation | [abstract-algebra: Permutation arithmetic](../abstract-algebra/reference.md#permutation-arithmetic) |
| Cosets, index $[G:H]$, Lagrange's theorem | [abstract-algebra: Coset](../abstract-algebra/reference.md#coset) |
| Commutator subgroup and abelianization $G/[G,G]$ | [abstract-algebra: Quotient group](../abstract-algebra/reference.md#quotient-group) |
| Cyclic, dihedral, symmetric, alternating, quaternion groups | [abstract-algebra: The standard cast of groups](../abstract-algebra/reference.md#the-standard-cast-of-groups) |
| Characteristic of a field, why $\frac{1}{\lvert G\rvert}$ may not exist | [abstract-algebra: Characteristic](../abstract-algebra/reference.md#characteristic) |
| Change of basis, similar matrices, $\operatorname{tr}(P^{-1}AP) = \operatorname{tr}A$ | [linalg-refresher: Similar matrices](../linalg-refresher/reference.md#similar-matrices) |
| Eigenvalues, eigenvectors, characteristic polynomial | [linalg-refresher: Eigenvector and eigenvalue](../linalg-refresher/reference.md#eigenvector-and-eigenvalue) |
| Diagonalizability (a matrix with squarefree minimal polynomial diagonalizes) | [linalg-refresher: Diagonalizable](../linalg-refresher/reference.md#diagonalizable) |
| Hermitian inner products, positive definiteness, orthonormal bases | [linalg-refresher: Inner product](../linalg-refresher/reference.md#inner-product) |
| Orthogonal complements and orthogonal projection | [linalg-refresher: Orthogonal projection](../linalg-refresher/reference.md#orthogonal-projection) |
| Unitary / orthogonal matrices preserve lengths | [linalg-refresher: Orthogonal matrix](../linalg-refresher/reference.md#orthogonal-matrix) |
| Spectral theorem, Cholesky-style factorization $H = P^\dagger P$ | [linalg-refresher: Spectral theorem](../linalg-refresher/reference.md#spectral-theorem) |
| Power series and convergence (so that $e^X = \sum X^k/k!$ makes sense) | [calc-refresher 3.2](../calc-refresher/lessons/03-02-power-and-taylor-series.md) |
| Smooth manifolds, charts, "smooth map" | [differential-geometry 2.1](../differential-geometry/lessons/02-01-charts-atlases-smooth-manifolds.md) |
| Tangent space at a point (what $\mathfrak{g} = T_eG$ means) | [differential-geometry 2.3](../differential-geometry/lessons/02-03-tangent-space.md) |
| Kronecker product of matrices and $\operatorname{tr}(A\otimes B) = \operatorname{tr}A\,\operatorname{tr}B$ | defined in this course, [3.1](lessons/03-01-tensor-products.md) |
| Matrix exponential facts ($\det e^X = e^{\operatorname{tr}X}$, etc.) | no course covers these — see the [Lie algebras](#lie-algebras-of-the-matrix-groups) block above |

## Pitfalls

### Equivalence and homomorphisms

- One $T$ must conjugate the **whole family** — conjugating a single $\rho(g)$ into a nice form proves nothing. *([1.1](lessons/01-01-what-is-a-representation.md))*
- The law is $\rho(gh) = \rho(g)\rho(h)$ even when the group is written additively: in $\mathbb{Z}/n$ the group adds but the matrices multiply. *([1.1](lessons/01-01-what-is-a-representation.md))*
- The trivial rep is $\rho(g) = 1$, not $0$ — "trivial" means *acts* trivially, and it is a genuine, useful building block. *([1.2](lessons/01-02-examples-unitarity.md))*

### Reducibility

- "Invariant" $\neq$ "pointwise fixed": the group is free to swirl vectors around inside an invariant subspace. *([1.3](lessons/01-03-reducibility-invariant-subspaces.md))*
- Reducible does **not** imply completely reducible in general — the splitting is a gift of unitarity/finiteness, and $W^\perp$ is invariant only because the rep is unitary. *([1.3](lessons/01-03-reducibility-invariant-subspaces.md), [1.4](lessons/01-04-maschke-theorem.md))*
- Irreducibility is basis-independent; a messy-looking rep can be irreducible and a full-looking one reducible. And it depends on the **field**: a plane rotation is irreducible over $\mathbb{R}$, reducible over $\mathbb{C}$. *([1.3](lessons/01-03-reducibility-invariant-subspaces.md))*
- Finiteness (or compactness) is load-bearing, not decoration — with no finite average there is no invariant inner product, and genuinely non-unitarizable reps exist (the shears of $(\mathbb{R},+)$). *([1.2](lessons/01-02-examples-unitarity.md), [1.4](lessons/01-04-maschke-theorem.md))*
- Finite group is not enough: Maschke also needs $\operatorname{char}k \nmid |G|$. Modular representation theory is a separate, thornier subject for exactly this reason. *([1.4](lessons/01-04-maschke-theorem.md))*
- Averaging changes the *inner product* (equivalently the basis), not the representation — same rep, better ruler. Permutation matrices are already unitary, so the trick looks vacuous until you meet a shear. *([1.2](lessons/01-02-examples-unitarity.md))*

### Schur and irreducibility tests

- Schur part (b) needs $\mathbb{C}$: over $\mathbb{R}$ an irreducible can have a $2$-dimensional commutant. *([1.5](lessons/01-05-schur-lemma.md))*
- The commutant test is about **all** of $G$ — check every generator, not one convenient matrix. *([1.5](lessons/01-05-schur-lemma.md))*
- Non-isomorphic irreducibles have *only* the zero intertwiner; "isomorphic" does not mean literally the same space. *([1.5](lessons/01-05-schur-lemma.md))*

### Character arithmetic

- **Weight by class size.** The compressed sum is $\frac{1}{|G|}\sum_j |C_j|\chi(g_j)\overline{\psi(g_j)}$; dropping $|C_j|$ breaks every check. *([2.2](lessons/02-02-orthogonality-relations.md), [2.3](lessons/02-03-building-character-table.md), [3.2](lessons/03-02-clebsch-gordan-decomposition.md))*
- **Conjugate the second argument.** Invisible for real tables like $S_3$, fatal for $\mathbb{Z}/n$ — a dropped bar silently swaps a rep for its dual. *([2.2](lessons/02-02-orthogonality-relations.md), [2.4](lessons/02-04-decomposing-a-representation.md), [3.3](lessons/03-03-restriction-induction.md))*
- Multiplicities and $\langle\chi,\chi\rangle$ are **non-negative integers**; a fraction or a negative number means an arithmetic slip. Audit with $\sum_i m_i d_i = \chi_V(e)$. *([2.2](lessons/02-02-orthogonality-relations.md), [2.4](lessons/02-04-decomposing-a-representation.md))*
- Rows are orthonormal, columns are only orthogonal — a column's squared length is $|C_G(g)| = |G|/|[g]|$, which varies. Don't conflate the two relations. *([2.2](lessons/02-02-orthogonality-relations.md), [2.3](lessons/02-03-building-character-table.md))*
- A character is a *function*, compared class by class — never as a single scalar. And equality of characters implies equivalence only over $\mathbb{C}$. *([2.1](lessons/02-01-characters.md))*
- A real-valued character does **not** mean the rep has real matrices ($Q_8$'s $2$-dimensional irrep is the counterexample). *([2.1](lessons/02-01-characters.md))*
- $\sum d_i^2 = |G|$ constrains but doesn't determine — you usually also need the class count and the abelianization. And multiplicity in $\rho_{\text{reg}}$ is $d_i$, while the dimension contributed is $d_i^2$. *([2.3](lessons/02-03-building-character-table.md), [2.5](lessons/02-05-regular-representation.md))*
- The regular character's spike sits at $e$ and nowhere else; any nonzero off-identity value means mis-built permutation matrices. *([2.5](lessons/02-05-regular-representation.md))*
- "Number of irreducibles $=$ number of classes" is a statement over $\mathbb{C}$. *([2.5](lessons/02-05-regular-representation.md))*

### Decomposition

- Isotypic components are canonical; individual copies are not. When $m_i \ge 2$ there is no "*the* first copy of $V_i$". *([2.4](lessons/02-04-decomposing-a-representation.md))*
- Counting and locating are different jobs: $\langle\chi_V,\chi_i\rangle$ says how many and of what; only the projector $P_i$ produces vectors. *([2.4](lessons/02-04-decomposing-a-representation.md))*

### Tensor products and coupling

- $\dim$ **multiplies** for $\otimes$ and adds for $\oplus$; likewise characters multiply for $\otimes$ and add for $\oplus$. *([2.1](lessons/02-01-characters.md), [3.1](lessons/03-01-tensor-products.md))*
- $\operatorname{Sym}^2$ is not $\tfrac12\chi^2$ — the diagonal terms survive, so you need the correction $\chi(g^2)$, and you need $g^2$'s **class**, not the element. *([3.1](lessons/03-01-tensor-products.md))*
- A tensor product of irreducibles is usually reducible; don't expect the product row to already be in your table. Multiplicities $N_{ij}^k > 1$ are normal in bigger groups. *([3.1](lessons/03-01-tensor-products.md), [3.2](lessons/03-02-clebsch-gordan-decomposition.md))*
- The CG *series* (block sizes) is not the CG *coefficients* (the change of basis) — the second needs projection operators. *([3.2](lessons/03-02-clebsch-gordan-decomposition.md))*

### Restriction, induction, and splitting

- Restriction almost never preserves irreducibility — expect branching and check dimensions. Induction is not "reinterpretation": remember the factor $[G:H]$. *([3.3](lessons/03-03-restriction-induction.md))*
- The two inner products in Frobenius reciprocity average over *different* groups; that they still agree is the theorem, not a normalization accident. *([3.3](lessons/03-03-restriction-induction.md))*
- When subducing, restrict the character **element by element** onto $H$ and then regroup by $H$'s classes — a $G$-class can fracture. *([3.5](lessons/03-05-degeneracy-symmetry-breaking.md))*
- Lowering symmetry doesn't split *every* level: $1$-dimensional irreducibles never split, and some stay irreducible under a large subgroup. Dimension is always conserved. *([3.5](lessons/03-05-degeneracy-symmetry-breaking.md))*
- Degeneracy $=$ irreducible dimension only for degeneracy forced by the group you wrote down; extra degeneracy means a hidden symmetry. *([3.5](lessons/03-05-degeneracy-symmetry-breaking.md))*

### Molecules and spectra

- Only **unmoved** atoms contribute to $\chi_{\text{total}}$, and the count changes class by class. *([3.4](lessons/03-04-molecular-vibrations-selection-rules.md))*
- A mirror is an improper operation with $\theta = 0$, contributing $-1 + 2 = +1$ per unmoved atom — not $-1$. Sanity-check against $3N$. *([3.4](lessons/03-04-molecular-vibrations-selection-rules.md))*
- "IR-active" means the vibration *changes* the dipole (transforms like $x,y,z$), not that the molecule has one. *([3.4](lessons/03-04-molecular-vibrations-selection-rules.md))*
- Symmetry gives you the number, type, degeneracy, and activity of modes — never the frequencies. *([3.4](lessons/03-04-molecular-vibrations-selection-rules.md))*

### Continuous groups

- Continuous does not mean non-abelian: $U(1)$ and $SO(2)$ are both. Non-commutativity comes from having $\ge 2$ independent rotation axes. *([4.1](lessons/04-01-lie-groups.md))*
- Complete reducibility is a **compactness** theorem, not a Lie-group theorem — non-compact groups lose it. *([4.1](lessons/04-01-lie-groups.md))*
- $e^Xe^Y \neq e^{X+Y}$ unless $[X,Y] = 0$ — that failure is exactly why a Lie algebra needs a bracket. *([4.2](lessons/04-02-lie-algebras-exponential-map.md))*
- $\exp$ is only *locally* onto: nothing in $\mathfrak{so}(3)$ exponentiates to a reflection, and the algebra is blind to other components. *([4.2](lessons/04-02-lie-algebras-exponential-map.md))*
- Track the convention: brackets with an $i$ mean Hermitian (physics) generators, without it anti-Hermitian (math) ones. Same algebra, shuffled factors of $i$. *([4.2](lessons/04-02-lie-algebras-exponential-map.md))*
- Sharing a Lie algebra does not mean being the same group — $SU(2)$ and $SO(3)$ are the standard counterexample; the algebra sees only a neighborhood of the identity. *([4.2](lessons/04-02-lie-algebras-exponential-map.md), [4.3](lessons/04-03-su2-so3-double-cover.md))*
- The half-angle in $e^{-i\theta(\hat{\mathbf n}\cdot\boldsymbol\sigma)/2}$ is the whole point — drop the $\tfrac12$ and you lose spin. And the $2$-dimensional rep is a rep of $SU(2)$, only a projective (double-valued) one of $SO(3)$. *([4.3](lessons/04-03-su2-so3-double-cover.md))*

### Angular momentum

- The magnitude is $\sqrt{j(j+1)}$, not $j$: the spin vector can never point fully along $z$, or $J_x$ and $J_y$ would both be sharply zero. *([4.4](lessons/04-04-su2-representations-angular-momentum.md))*
- $J_\pm$ are not observables — they aren't Hermitian ($J_\pm^\dagger = J_\mp$); only $J_x, J_y, J_z$ are measured. *([4.4](lessons/04-04-su2-representations-angular-momentum.md))*
- Ladder formulas fix magnitudes only; the signs are the Condon–Shortley convention. Be consistent or the CG coefficients will fight you. *([4.4](lessons/04-04-su2-representations-angular-momentum.md), [4.5](lessons/04-05-adding-angular-momenta.md))*
- Only the projections add. Total $j$ spreads over a whole range because $J^2 \neq (J^{(1)})^2 + (J^{(2)})^2$ — the cross term $2\,\vec J^{(1)}\!\cdot\!\vec J^{(2)}$ is what does it. *([4.5](lessons/04-05-adding-angular-momenta.md))*
- The singlet is the **antisymmetric** $\frac{1}{\sqrt2}(|{\uparrow\downarrow}\rangle - |{\downarrow\uparrow}\rangle)$; the symmetric one is the triplet's $m = 0$ member. Same kets, opposite sign, different total spin — and "zero total spin" does not mean trivial: $|0,0\rangle$ is entangled. *([4.5](lessons/04-05-adding-angular-momenta.md))*

### Weights and roots

- Weights label a representation's states; roots are the weights of the **adjoint** — the arrows between points, not the points. *([4.6](lessons/04-06-roots-weights-su3.md))*
- Rank is not dimension: $\mathfrak{su}(3)$ has $8$ generators but only $2$ can be diagonalized at once. *([4.6](lessons/04-06-roots-weights-su3.md))*
- Weight **multiplicity** carries the decomposition, not just weight location — the triply-occupied origin splitting $2+1$ is exactly why $\mathbf 3\otimes\bar{\mathbf 3} = \mathbf 8\oplus\mathbf 1$ and not an irreducible $\mathbf 9$. *([4.6](lessons/04-06-roots-weights-su3.md))*
- Don't assume a fundamental is self-conjugate: $\bar{\mathbf 3}\not\cong\mathbf 3$ for $SU(3)$, which is why quarks and antiquarks are physically distinct. *([4.6](lessons/04-06-roots-weights-su3.md))*
