# Algebraic Topology · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Algebraic topology is one move repeated: attach algebra to a space so that
*continuous maps become homomorphisms*, then let algebra prove what geometry
can't. Two invariants do the work — the fundamental group $\pi_1$ (loops, one
dimension, usually nonabelian) and homology $H_n$ (holes in every dimension,
always abelian, actually computable). The lookups you'll want mid-problem are
the **invariants grid**, the **exact-sequence toolkit** (van Kampen,
Mayer–Vietoris, the LES of a pair) with the hypotheses each one demands, and the
**cell-structure recipes** that turn a picture into a presentation or a chain
complex. Point-set prerequisites live on the
[topology card](../topology/reference.md).

## Notation

| Symbol | Means | First used |
|---|---|---|
| $I$ | the unit interval $[0,1]$ — the time axis of every homotopy | [1.1](lessons/01-01-homotopy-of-maps.md) |
| $f\simeq g$ | homotopic maps (or, between spaces, homotopy equivalent) | [1.1](lessons/01-01-homotopy-of-maps.md) |
| $H(x,t)$, $H_t$ | the homotopy as a movie, and its frame at time $t$ | [1.1](lessons/01-01-homotopy-of-maps.md) |
| $\gamma\cdot\delta$ | concatenation: run $\gamma$, then $\delta$, each at double speed | [1.2](lessons/01-02-paths-loops-pi1.md) |
| $\bar\gamma$ | the reversed path, $\bar\gamma(s)=\gamma(1-s)$ — the inverse in $\pi_1$ | [1.2](lessons/01-02-paths-loops-pi1.md) |
| $c_{x_0}$ | the constant loop at $x_0$ — the identity of $\pi_1$ | [1.2](lessons/01-02-paths-loops-pi1.md) |
| $[\gamma]$ | path-homotopy class of $\gamma$ (endpoints pinned) | [1.2](lessons/01-02-paths-loops-pi1.md) |
| $\pi_1(X,x_0)$ | fundamental group: loops at $x_0$ up to deformation | [1.2](lessons/01-02-paths-loops-pi1.md) |
| $f_*$ | the homomorphism a map induces — on $\pi_1$, later on $H_n$ | [1.3](lessons/01-03-basepoints-functoriality.md) |
| $\beta_h$ | change-of-basepoint isomorphism along a path $h$ | [1.3](lessons/01-03-basepoints-functoriality.md) |
| $p\colon\tilde X\to X$ | a covering map; $\tilde X$ the total space, $X$ the base | [2.1](lessons/02-01-covering-spaces-lifting.md) |
| $\tilde\gamma$ | the lift of $\gamma$ — the same walk taken upstairs | [2.1](lessons/02-01-covering-spaces-lifting.md) |
| $p^{-1}(x_0)$ | the fiber over $x_0$: the discrete pile of sheets above it | [2.1](lessons/02-01-covering-spaces-lifting.md) |
| $\deg\gamma$, $\deg f$ | winding number of a loop; later, degree of a self-map of $S^n$ | [1.4](lessons/01-04-pi1-of-the-circle.md), [4.3](lessons/04-03-degree-applications.md) |
| $H=p_*\pi_1(\tilde X)$ | the subgroup a cover names — the loops that lift to loops | [2.2](lessons/02-02-lifting-criterion-classification.md) |
| $\operatorname{Deck}(\tilde X/X)$ | deck group: self-symmetries of the cover invisible downstairs | [2.3](lessons/02-03-deck-transformations-galois.md) |
| $N(H)$ | normalizer of $H$ — the largest subgroup in which $H$ is normal | [2.3](lessons/02-03-deck-transformations-galois.md) |
| $F(S)$, $F_n$ | free group on a set $S$; on $n$ letters | [2.4](lessons/02-04-free-groups-presentations.md) |
| $\langle S\mid R\rangle$ | presentation: generators $S$, relators $R$ set to $1$ | [2.4](lessons/02-04-free-groups-presentations.md) |
| $\langle\!\langle R\rangle\!\rangle$ | normal closure of $R$ — $R$ and all its conjugates | [2.4](lessons/02-04-free-groups-presentations.md) |
| $[a,b]$ | commutator $aba^{-1}b^{-1}$; it is $1$ exactly when $a,b$ commute | [2.4](lessons/02-04-free-groups-presentations.md) |
| $\bigvee$ | wedge: spaces glued at one common basepoint | [2.4](lessons/02-04-free-groups-presentations.md) |
| $A*B$, $A*_C B$ | free product; free product amalgamated over $C$ | [2.5](lessons/02-05-seifert-van-kampen.md) |
| $G^{\mathrm{ab}}$ | abelianization $G/[G,G]$ — kill the order of multiplication | [2.6](lessons/02-06-van-kampen-in-the-wild.md) |
| $\Delta^n$, $[v_0,\dots,v_n]$ | standard $n$-simplex, with its vertex order = its orientation | [3.1](lessons/03-01-simplicial-delta-complexes.md) |
| $\widehat{v_i}$ | "omit this vertex" — how a face is named | [3.1](lessons/03-01-simplicial-delta-complexes.md) |
| $C_n$, $\partial_n$ | chain group in degree $n$, and the boundary map down to $C_{n-1}$ | [3.2](lessons/03-02-simplicial-homology.md) |
| $Z_n$, $B_n$ | cycles $\ker\partial_n$; boundaries $\operatorname{im}\partial_{n+1}$ | [3.2](lessons/03-02-simplicial-homology.md) |
| $H_n(X)$ | $n$-th homology: cycles modulo boundaries — the honest holes | [3.2](lessons/03-02-simplicial-homology.md) |
| $\tilde H_n(X)$ | reduced homology: same, but a point has nothing at all | [4.1](lessons/04-01-les-of-a-pair.md) |
| $X^{(n)}$, $e^n_\alpha$, $\varphi_\alpha$ | $n$-skeleton, an $n$-cell, and the map gluing its rim on | [3.4](lessons/03-04-cw-cellular-homology.md) |
| $d_n$ | cellular boundary map — its entries are degrees | [3.4](lessons/03-04-cw-cellular-homology.md) |
| $H_n(X,A)$ | relative homology: holes of $X$ not already filled inside $A$ | [4.1](lessons/04-01-les-of-a-pair.md) |
| $\partial_*$ | connecting homomorphism — drops a class one dimension | [4.1](lessons/04-01-les-of-a-pair.md) |
| $\Phi,\Psi$ | the two Mayer–Vietoris maps, $(i_*,-j_*)$ and $k_*+l_*$ | [4.2](lessons/04-02-mayer-vietoris.md) |
| $H^n(X;R)$, $\delta$ | cohomology with coefficients in $R$, and the coboundary $\partial^{*}$ | [4.4](lessons/04-04-cohomology-cup-products.md) |
| $\smile$ | cup product: multiplication on $H^{*}$ | [4.4](lessons/04-04-cohomology-cup-products.md) |
| $\chi(X)$ | Euler characteristic — the alternating cell (or rank) count | [3.1](lessons/03-01-simplicial-delta-complexes.md) |
| $\Sigma_g$, $K$, $T^2$ | closed orientable genus-$g$ surface, Klein bottle, torus | [2.6](lessons/02-06-van-kampen-in-the-wild.md) |
| $\mathbb{RP}^n$, $\mathbb{CP}^n$ | real / complex projective space | [2.1](lessons/02-01-covering-spaces-lifting.md), [4.4](lessons/04-04-cohomology-cup-products.md) |

## Definitions

### Homotopy

A movie deforming one map into another without ever jumping.

$$H\colon X\times I\to Y \text{ continuous},\qquad H_0=f,\quad H_1=g$$

*Introduced:* [1.1](lessons/01-01-homotopy-of-maps.md)

### Homotopy equivalence

Maps back and forth whose round trips are *deformable* to the identity — not
equal to it. Coarser than homeomorphism: it forgets dimension, compactness, even
cardinality.

$$g\circ f\simeq\operatorname{id}_X,\qquad f\circ g\simeq\operatorname{id}_Y$$

*Introduced:* [1.1](lessons/01-01-homotopy-of-maps.md)

### Contractible

The whole space sweeps continuously into one of its own points; equivalently it
is homotopy equivalent to a point. Every convex set is contractible.

*Introduced:* [1.1](lessons/01-01-homotopy-of-maps.md)

### Deformation retract

A subspace you can reel the whole space onto, holding the subspace fixed the
entire time. It certifies $A\simeq X$, which a bare retraction does not.

$$H_0=\operatorname{id}_X,\qquad H_1(X)\subseteq A,\qquad H_t|_A=\operatorname{id}_A$$

*Introduced:* [1.1](lessons/01-01-homotopy-of-maps.md)

### Retraction

A map that squashes $X$ onto a subspace while fixing that subspace pointwise:
$r\colon X\to A$ with $r\circ i=\operatorname{id}_A$. It forces $i_*$ to be
injective, which is how the no-retraction lemma kills impossible maps.

*Introduced:* [1.1](lessons/01-01-homotopy-of-maps.md), used in [1.5](lessons/01-05-first-payoffs.md)

### Path homotopy

A homotopy of paths with **both endpoints nailed down for every frame**. That
extra rigidity is exactly what makes loop multiplication well defined.

$$H(s,0)=\gamma,\quad H(s,1)=\delta,\quad H(0,t)=a,\quad H(1,t)=b$$

*Introduced:* [1.2](lessons/01-02-paths-loops-pi1.md)

### Fundamental group

Deformation classes of loops at a basepoint, multiplied by running one loop then
the other. Timing is invisible to homotopy, which is why the group axioms hold.

$$\pi_1(X,x_0)=\{\text{loops at }x_0\}/\simeq,\qquad [\gamma][\delta]=[\gamma\cdot\delta]$$

*Introduced:* [1.2](lessons/01-02-paths-loops-pi1.md)

### Simply connected

Path-connected with $\pi_1=1$: every loop shrinks to a point. Contractible
implies simply connected, never the reverse ($S^2$ is the standing example).

*Introduced:* [1.2](lessons/01-02-paths-loops-pi1.md), [2.2](lessons/02-02-lifting-criterion-classification.md)

### Induced homomorphism

Push a loop through the map and take its class. This is the whole reason $\pi_1$
exists: maps of spaces become maps of groups.

$$f_*\colon\pi_1(X,x_0)\to\pi_1(Y,f(x_0)),\qquad f_*[\gamma]=[f\circ\gamma]$$

*Introduced:* [1.3](lessons/01-03-basepoints-functoriality.md)

### Change of basepoint

Ferry a loop home along a path: walk out on $h$, loop, walk back. An isomorphism
— but one that depends on $h$, up to an inner automorphism.

$$\beta_h([\gamma])=[\,h\cdot\gamma\cdot\bar h\,]$$

*Introduced:* [1.3](lessons/01-03-basepoints-functoriality.md)

### Covering space

A space unrolled into stacked copies: over a small enough patch, $p$ is just
"patch times a discrete set."

$$p^{-1}(U)=\bigsqcup_\alpha V_\alpha,\qquad p|_{V_\alpha}\colon V_\alpha\xrightarrow{\ \cong\ }U$$

*Introduced:* [2.1](lessons/02-01-covering-spaces-lifting.md)

### Evenly covered

The property above, stated of a *neighborhood* $U$, not of a point: the whole
preimage splits into disjoint sheets each homeomorphic to $U$. A fold is never a
covering.

*Introduced:* [2.1](lessons/02-01-covering-spaces-lifting.md)

### Lift

The same walk taken upstairs: $\tilde\gamma$ with $p\circ\tilde\gamma=\gamma$.
One choice of starting sheet determines it completely.

*Introduced:* [2.1](lessons/02-01-covering-spaces-lifting.md)

### Monodromy

$\pi_1$ of the base acting on the fiber: follow a loop, see which sheet you land
on. The stabilizer of a point is the cover's subgroup $H$.

$$\tilde x\cdot[\gamma]:=\tilde\gamma(1)$$

*Introduced:* [2.1](lessons/02-01-covering-spaces-lifting.md)

### Universal cover

The cover that unwraps everything: $\tilde X$ simply connected, so
$p_*\pi_1(\tilde X)=1$. It is the largest cover and maps onto every other one.

*Introduced:* [2.2](lessons/02-02-lifting-criterion-classification.md)

### Semilocally simply connected

Every point has a neighborhood whose loops already die in the big space. The
mild finiteness condition that lets a universal cover exist at all (the Hawaiian
earring fails it).

*Introduced:* [2.2](lessons/02-02-lifting-criterion-classification.md)

### Deck transformation

A self-homeomorphism of the cover that projects to the identity — it reshuffles
sheets and nothing else. Rigid: fixing one point makes it the identity, so the
action is free.

$$p\circ\phi=p$$

*Introduced:* [2.3](lessons/02-03-deck-transformations-galois.md)

### Regular (normal) cover

A cover whose subgroup is normal, equivalently one whose deck group acts
transitively on each fiber — any sheet can be carried to any other.

$$H\trianglelefteq\pi_1(X,x_0)\iff \operatorname{Deck}\ \text{transitive on}\ p^{-1}(x_0)$$

*Introduced:* [2.3](lessons/02-03-deck-transformations-galois.md)

### Free group

All reduced words in the letters and their inverses, with nothing cancelling but
a letter meeting its own inverse. Characterized by: a homomorphism out of it is
*any* assignment of the generators, no conditions to check.

*Introduced:* [2.4](lessons/02-04-free-groups-presentations.md)

### Presentation

The freest group on some generators, crushed by exactly the equations you demand
— and their conjugates.

$$\langle S\mid R\rangle=F(S)/\langle\!\langle R\rangle\!\rangle$$

*Introduced:* [2.4](lessons/02-04-free-groups-presentations.md)

### Normal closure

The smallest normal subgroup containing $R$: all products of conjugates
$wrw^{-1}$. You must conjugate, because a relation is meant to hold from every
basepoint.

*Introduced:* [2.4](lessons/02-04-free-groups-presentations.md)

### Free product and amalgamated free product

$A*B$ is words alternating between $A$ and $B$ with no relations across;
$A*_C B$ additionally declares the two readings of each element of $C$ equal. It
is the **pushout** of groups.

$$A*_C B=(A*B)\big/\big\langle\!\big\langle\, i(c)j(c)^{-1}\,\big\rangle\!\big\rangle$$

*Introduced:* [2.5](lessons/02-05-seifert-van-kampen.md)

### Simplex

The convex hull of $n+1$ points in general position — the fattest shape in each
dimension. Its vertex ordering *is* its orientation, and swapping two vertices
negates it.

$$\Delta^n=\Big\{\textstyle\sum_i t_i v_i\ :\ t_i\ge0,\ \sum_i t_i=1\Big\}$$

*Introduced:* [3.1](lessons/03-01-simplicial-delta-complexes.md)

### Delta-complex

A space assembled by affinely gluing standard simplices along whole faces, with
faces again cells of the structure. Looser than a simplicial complex: a cell may
be glued to itself, which is why the torus needs only two triangles.

*Introduced:* [3.1](lessons/03-01-simplicial-delta-complexes.md)

### Boundary operator

Drop each vertex in turn and alternate signs. The signs are the induced
orientation, and they are exactly what makes double-drops cancel.

$$\partial_n[v_0,\dots,v_n]=\sum_{i=0}^n(-1)^i[v_0,\dots,\widehat{v_i},\dots,v_n]$$

*Introduced:* [3.1](lessons/03-01-simplicial-delta-complexes.md), [3.2](lessons/03-02-simplicial-homology.md)

### Chain complex

A sequence of abelian groups with maps whose composite is zero, so images nest
inside kernels and the quotient below makes sense.

$$\cdots\to C_{n+1}\xrightarrow{\ \partial_{n+1}\ }C_n\xrightarrow{\ \partial_n\ }C_{n-1}\to\cdots,\qquad \partial_{n-1}\partial_n=0$$

*Introduced:* [3.2](lessons/03-02-simplicial-homology.md)

### Cycles, boundaries, homology

A cycle closes up; a boundary is the rim of something one dimension higher.
Every boundary is a cycle; homology is the cycles that refuse to bound.

$$Z_n=\ker\partial_n,\quad B_n=\operatorname{im}\partial_{n+1},\quad H_n=Z_n/B_n$$

*Introduced:* [3.2](lessons/03-02-simplicial-homology.md)

### Singular simplex

*Any* continuous map $\sigma\colon\Delta^n\to X$ — allowed to fold, pinch, or
collapse. Using all of them at once makes homology defined for every space, with
no triangulation to choose.

*Introduced:* [3.3](lessons/03-03-singular-homology.md)

### Reduced homology

Homology normalized so that a point has *nothing*: $\tilde H_0(X)$ is one rank
smaller than $H_0(X)$ for nonempty $X$, and $\tilde H_n=H_n$ for $n>0$. It is
what makes contractible pieces contribute zero in the exact sequences.

*Introduced:* [4.1](lessons/04-01-les-of-a-pair.md), [4.2](lessons/04-02-mayer-vietoris.md)

### CW complex

A space built one dimension at a time by gluing balls: choose an attaching map
$\varphi_\alpha\colon S^{n-1}\to X^{(n-1)}$ for each $n$-cell and paste. Almost
every space in this course has one.

*Introduced:* [3.4](lessons/03-04-cw-cellular-homology.md)

### Cellular chain complex

Free abelian on the cells, with a boundary map whose entries are degrees. The
chain *groups* ignore the gluing entirely; all the gluing lives in $d_n$.

$$d_n(e^n_\alpha)=\sum_\beta \deg(\Delta_{\alpha\beta})\,e^{n-1}_\beta$$

*Introduced:* [3.4](lessons/03-04-cw-cellular-homology.md)

### Homology theory (Eilenberg–Steenrod)

A functor on pairs plus natural connecting maps satisfying five axioms —
homotopy, exactness, excision, additivity, dimension. On CW pairs the axioms
pin the answer down uniquely once you say what a point weighs.

*Introduced:* [3.5](lessons/03-05-eilenberg-steenrod-axioms.md)

### Excision

You may delete a chunk buried strictly inside $A$ without changing relative
homology — it only feels the frontier of $A$.

$$\overline{Z}\subseteq\operatorname{int}(A)\ \Longrightarrow\ H_n(X\setminus Z,\,A\setminus Z)\cong H_n(X,A)$$

*Introduced:* [3.5](lessons/03-05-eilenberg-steenrod-axioms.md)

### Relative homology

Homology of $X$ with every chain lying in $A$ declared zero — the features of
$X$ that stick out past $A$.

$$C_n(X,A)=C_n(X)/C_n(A),\qquad H_n(X,A)=\ker\partial/\operatorname{im}\partial$$

*Introduced:* [4.1](lessons/04-01-les-of-a-pair.md)

### Relative cycle

A chain whose failure to close up has been pushed entirely into $A$: a path
across a disk with endpoints on the rim. It is a class in $H_n(X,A)$ even though
$\partial\alpha\ne0$.

$$\alpha\in C_n(X)\ \text{with}\ \partial\alpha\in C_{n-1}(A)$$

*Introduced:* [4.1](lessons/04-01-les-of-a-pair.md)

### Connecting homomorphism

"Hand me the leftover boundary." It turns an $n$-dimensional relative feature
into an honest $(n-1)$-cycle of $A$, and it is what glues three homologies into
one long sequence.

$$\partial_*[\alpha]=[\partial\alpha]\in H_{n-1}(A)$$

*Introduced:* [4.1](lessons/04-01-les-of-a-pair.md)

### Good pair

$A$ nonempty, closed, and a deformation retract of some neighborhood (every CW
pair qualifies). Then collapsing loses nothing.

$$H_n(X,A)\cong\tilde H_n(X/A)$$

*Introduced:* [4.1](lessons/04-01-les-of-a-pair.md)

### Exact sequence

At every spot, the image coming in equals the kernel going out — no information
created or lost. A term squeezed between two zeros is determined.

*Introduced:* [3.5](lessons/03-05-eilenberg-steenrod-axioms.md), [4.1](lessons/04-01-les-of-a-pair.md)

### Degree

The integer by which a self-map of $S^n$ scales the top homology class — the
winding number, promoted to every dimension.

$$f_*(\alpha)=(\deg f)\,\alpha\quad\text{on }H_n(S^n)\cong\mathbb{Z}$$

*Introduced:* [1.4](lessons/01-04-pi1-of-the-circle.md) (as winding number), [4.3](lessons/04-03-degree-applications.md)

### Local degree

The signed contribution of one preimage: how many times, with which
orientation, $f$ wraps a small ball around $x_i$ over a small ball around $y$.
Global degree is the sum of these over $f^{-1}(y)$.

*Introduced:* [4.3](lessons/04-03-degree-applications.md)

### Cohomology

Homology read backwards: a cochain measures chains, and the coboundary is the
transpose of $\partial$, so it raises degree.

$$C^n(X;R)=\operatorname{Hom}(C_n(X),R),\qquad (\delta\varphi)(\sigma)=\varphi(\partial\sigma)$$

*Introduced:* [4.4](lessons/04-04-cohomology-cup-products.md)

### Cup product

Multiply two measuring devices: split a simplex into a front $p$-face and a back
$q$-face, measure each, multiply. It makes $H^{*}(X;R)$ a graded ring.

$$(\varphi\smile\psi)(\sigma)=\varphi\big(\sigma|_{[v_0,\dots,v_p]}\big)\cdot\psi\big(\sigma|_{[v_p,\dots,v_{p+q}]}\big)$$

*Introduced:* [4.4](lessons/04-04-cohomology-cup-products.md)

### Local homology

The homology of $X$ *as seen from one point* — blind to everything far away,
because excision says it depends only on a tiny neighborhood. Its degree records
dimension.

$$H_k\big(X,\,X\setminus\{x\}\big)$$

*Introduced:* [4.5](lessons/04-05-invariance-of-domain.md)

### Euler characteristic

Alternate-sum the cells (equivalently, the Betti numbers). It is a homotopy
invariant and the cheapest sanity check on any homology computation.

$$\chi(X)=\sum_n(-1)^n\,\#\{n\text{-cells}\}=\sum_n(-1)^n\operatorname{rank}H_n(X)$$

*Introduced:* [3.1](lessons/03-01-simplicial-delta-complexes.md) (used, not stated)

## Formulas and rules

### The invariants grid

The table you'll reach for most. All spaces are path-connected unless noted, so
$H_0=\mathbb{Z}$ throughout; only the interesting degrees are listed. Torsion is
written out.

| Space | $\pi_1$ | $H_n$ (beyond $H_0=\mathbb{Z}$) | $\chi$ |
|---|---|---|---|
| point, $D^n$, $\mathbb{R}^n$, any convex set | $1$ | all $0$ | $1$ |
| $S^1$ | $\mathbb{Z}$ | $H_1=\mathbb{Z}$ | $0$ |
| $S^n$, $n\ge2$ | $1$ | $H_n=\mathbb{Z}$ | $1+(-1)^n$ |
| $\mathbb{R}^n\setminus\{0\}\simeq S^{n-1}$, annulus, Möbius band $\simeq S^1$ | as the sphere it retracts to | as the sphere | as the sphere |
| $\bigvee_{k}S^1$ (wedge of $k$ circles, e.g. figure-eight) | $F_k$ | $H_1=\mathbb{Z}^k$ | $1-k$ |
| $T^2=S^1\times S^1$ | $\langle a,b\mid[a,b]\rangle\cong\mathbb{Z}^2$ | $H_1=\mathbb{Z}^2$, $H_2=\mathbb{Z}$ | $0$ |
| Klein bottle $K$ | $\langle a,b\mid abab^{-1}\rangle\cong\mathbb{Z}\rtimes\mathbb{Z}$ | $H_1=\mathbb{Z}\oplus\mathbb{Z}/2$, $H_2=0$ | $0$ |
| $\Sigma_g$, genus $g$ orientable | $\big\langle a_i,b_i\mid\prod_{i=1}^g[a_i,b_i]\big\rangle$ | $H_1=\mathbb{Z}^{2g}$, $H_2=\mathbb{Z}$ | $2-2g$ |
| $\mathbb{RP}^2$ | $\mathbb{Z}/2$ | $H_1=\mathbb{Z}/2$, $H_2=0$ | $1$ |
| $\mathbb{RP}^n$, $n\ge2$ | $\mathbb{Z}/2$ | $\mathbb{Z}/2$ in odd $i<n$, $0$ in even $0<i<n$; $H_n=\mathbb{Z}$ ($n$ odd) or $0$ ($n$ even) | $1$ ($n$ even), $0$ ($n$ odd) |
| $\mathbb{CP}^n$ | $1$ | $\mathbb{Z}$ in every even degree $\le 2n$ | $n+1$ |
| $S^2\vee S^4$ | $1$ | $H_2=H_4=\mathbb{Z}$ | $3$ |
| knot complement $S^3\setminus K$ | Wirtinger presentation (trefoil: $\langle x,y\mid xyx=yxy\rangle$) | $H_1=\mathbb{Z}$ for *every* knot | — |

Read across: $\pi_1$ and $H_1$ never disagree by accident —
**Hurewicz** says $H_1(X)\cong\pi_1(X)^{\mathrm{ab}}$ for path-connected $X$.
The knot row is the standing proof that $\pi_1$ still earns its keep after
homology arrives: every knot complement has the same $H_1$, but only the unknot
has abelian $\pi_1$.

*From* [1.4](lessons/01-04-pi1-of-the-circle.md), [2.6](lessons/02-06-van-kampen-in-the-wild.md), [3.2](lessons/03-02-simplicial-homology.md), [3.4](lessons/03-04-cw-cellular-homology.md), [4.2](lessons/04-02-mayer-vietoris.md), [4.4](lessons/04-04-cohomology-cup-products.md)

### Standard homology facts the computations lean on

| Fact | Statement |
|---|---|
| spheres | $H_k(S^n)=\mathbb{Z}$ for $k=0,n$; else $0$ (for $n\ge1$); reduced: $\tilde H_k(S^n)=\mathbb{Z}$ iff $k=n$ |
| $H_0$ | free abelian on the **path** components: $H_0(X)\cong\mathbb{Z}^{\#\text{components}}$ |
| contractible | homology of a point; so $\tilde H_k=0$ for all $k$ |
| homotopy invariance | $f\simeq g\Rightarrow f_*=g_*$; a homotopy equivalence induces isomorphisms on every $H_n$ |
| disjoint union / wedge | $H_n(\bigsqcup X_\alpha)=\bigoplus H_n(X_\alpha)$; $\tilde H_n(\bigvee X_\alpha)=\bigoplus\tilde H_n(X_\alpha)$ |
| disk rel sphere | $H_k(D^n,S^{n-1})\cong\tilde H_{k-1}(S^{n-1})=\mathbb{Z}$ iff $k=n$ |
| suspension pattern | $\tilde H_k(S^n)\cong\tilde H_{k-1}(S^{n-1})$ — the Mayer–Vietoris induction |
| local homology | $H_k(\mathbb{R}^n,\mathbb{R}^n\setminus\{0\})=\mathbb{Z}$ iff $k=n$ — the dimension detector |
| product (Künneth pattern) | for torsion-free factors, $H_*(X\times Y)$ is $H_*(X)\otimes H_*(Y)$ degree by degree — visible in $H_*(T^2)$ |

The wedge and product rows are used without being proved in the lessons; the
sphere and $H_0$ rows are proved in [3.3](lessons/03-03-singular-homology.md) and
[4.2](lessons/04-02-mayer-vietoris.md).

*From* [3.3](lessons/03-03-singular-homology.md), [4.1](lessons/04-01-les-of-a-pair.md), [4.2](lessons/04-02-mayer-vietoris.md), [4.5](lessons/04-05-invariance-of-domain.md)

### Functoriality conventions

Everything in this course is one of these two functors, so the bookkeeping is
identical in both.

| | $\pi_1$ | $H_n$ |
|---|---|---|
| objects | pointed spaces $(X,x_0)$ | spaces, or pairs $(X,A)$ |
| a map gives | $f_*[\gamma]=[f\circ\gamma]$ | $f_*[z]=[f\circ z]$, from $f_\#\sigma=f\circ\sigma$ |
| axioms | $(\operatorname{id})_*=\operatorname{id}$, $(g\circ f)_*=g_*\circ f_*$ | same two |
| homotopy | $f\simeq g$ (rel basepoint) $\Rightarrow f_*=g_*$; free homotopy costs a $\beta_h$ | $f\simeq g\Rightarrow f_*=g_*$, no basepoint caveat |
| equivalence | homotopy equivalence $\Rightarrow$ isomorphism | homotopy equivalence $\Rightarrow$ isomorphism in every degree |
| what it does **not** inherit | injectivity or surjectivity of $f$ | same |

Write induced maps as $i_*$, $p_*$, $f_*$ — subscript star, never a backslash-star.
The retraction trick used all course long: $r\circ i=\operatorname{id}_A$ gives
$r_*\circ i_*=\operatorname{id}$, so $i_*$ is **injective** — and an injection
$\mathbb{Z}\hookrightarrow 0$ is the contradiction that proves no-retraction,
Brouwer, and the fundamental theorem of algebra.

*From* [1.3](lessons/01-03-basepoints-functoriality.md), [1.5](lessons/01-05-first-payoffs.md), [3.3](lessons/03-03-singular-homology.md)

### Seifert–van Kampen

**Hypotheses (all four, or it breaks):** $X=U\cup V$ with $U,V$ **open**; $U$,
$V$, and $U\cap V$ all **path-connected**; the basepoint in $U\cap V$.

$$\pi_1(X)\;\cong\;\pi_1(U)\ *_{\pi_1(U\cap V)}\ \pi_1(V)$$

Presentation form — this is how you actually compute:

$$\pi_1(X)=\big\langle\,S_U\sqcup S_V\ \big|\ R_U,\ R_V,\ i_*(\gamma_k)=j_*(\gamma_k)\ \text{for each generator }\gamma_k\text{ of }\pi_1(U\cap V)\,\big\rangle$$

| Situation | Result |
|---|---|
| $\pi_1(U\cap V)=1$ | free product $\pi_1(U)*\pi_1(V)$ — e.g. $\pi_1(S^1\vee S^1)=F_2$ |
| $\pi_1(V)=1$ | $\pi_1(U)$ modulo the normal closure of the overlap's image |
| attaching a 2-cell along $w$ | $\pi_1(Y\cup_\varphi e^2)=\pi_1(Y)/\langle\!\langle w\rangle\!\rangle$ |
| $U\cap V$ disconnected | theorem does not apply — you need the groupoid version |

*From* [2.5](lessons/02-05-seifert-van-kampen.md), [2.6](lessons/02-06-van-kampen-in-the-wild.md)

### The long exact sequence of a pair

**Hypotheses:** none beyond $A\subseteq X$ (it comes from the short exact
sequence $0\to C_*(A)\to C_*(X)\to C_*(X,A)\to 0$ and the snake lemma). Holds in
reduced homology too.

$$\cdots\to H_n(A)\xrightarrow{\ i_*\ }H_n(X)\xrightarrow{\ j_*\ }H_n(X,A)\xrightarrow{\ \partial_*\ }H_{n-1}(A)\to\cdots$$

**How to drive it.** A term with a $0$ on its **left** has its incoming map
injective; a term with a $0$ on its **right** has its outgoing map surjective;
zeros on both sides of a map make it an isomorphism. That "squeeze" is how
$H_k(D^n,S^{n-1})$ and all of $H_*(\mathbb{R}^n,\mathbb{R}^n\setminus 0)$ fall out.

*From* [4.1](lessons/04-01-les-of-a-pair.md), [3.5](lessons/03-05-eilenberg-steenrod-axioms.md)

### Mayer–Vietoris

**Hypotheses:** $X=A\cup B$ with the **interiors of $A$ and $B$ already covering
$X$** (open $A,B$ is the safe case; CW pairs work). For the reduced version,
also $A\cap B\ne\varnothing$.

$$\cdots\to H_n(A\cap B)\xrightarrow{\ \Phi\ }H_n(A)\oplus H_n(B)\xrightarrow{\ \Psi\ }H_n(X)\xrightarrow{\ \partial\ }H_{n-1}(A\cap B)\to\cdots$$

$$\Phi(x)=(i_*x,\,-j_*x),\qquad \Psi(a,b)=k_*a+l_*b$$

Exactly one of the two maps must carry the minus sign; some texts move it to
$\Psi=k_*-l_*$ instead. The connecting map: subdivide a cycle as $z=a+b$ with
$a$ in $A$, $b$ in $B$; then $\partial a=-\partial b$ lives in the overlap and
$\partial[z]=[\partial a]$.

**The move it exists for:** cover $S^n$ by two contractible caps overlapping in
a band $\simeq S^{n-1}$; both middle terms vanish, so
$\tilde H_k(S^n)\cong\tilde H_{k-1}(S^{n-1})$, and induction down to $S^0$ gives
every sphere at once.

*From* [4.2](lessons/04-02-mayer-vietoris.md)

### Which tool for which shape

| You have | Use | Gives |
|---|---|---|
| $X$ cut into two open pieces | van Kampen ([2.5](lessons/02-05-seifert-van-kampen.md)) / Mayer–Vietoris ([4.2](lessons/04-02-mayer-vietoris.md)) | $\pi_1(X)$ / all $H_n(X)$ |
| a subspace $A\subseteq X$ | LES of the pair ([4.1](lessons/04-01-les-of-a-pair.md)) | $H_n(X,A)$, or an unknown term squeezed |
| a cell structure | $\pi_1$ presentation ([2.6](lessons/02-06-van-kampen-in-the-wild.md)) / cellular chain complex ([3.4](lessons/03-04-cw-cellular-homology.md)) | $\pi_1$ / all $H_n$ |
| a covering map | subgroup dictionary ([2.2](lessons/02-02-lifting-criterion-classification.md)) | $\pi_1(\tilde X)$ as a subgroup, sheet count |
| a self-map of $S^n$ | degree ([4.3](lessons/04-03-degree-applications.md)) | fixed points, vector fields, homotopy class |
| identical homology groups | cup product ([4.4](lessons/04-04-cohomology-cup-products.md)) | the ring that still separates them |

### Reading a group presentation off a cell structure

For a connected CW complex with a **single 0-cell**:

$$\pi_1(X)=\big\langle\ \text{one generator per 1-cell}\ \big|\ \text{one relator per 2-cell, its attaching word}\ \big\rangle$$

Cells of dimension $\ge3$ are invisible to $\pi_1$ (their boundary spheres are
simply connected). If the corners do *not* all identify to one vertex, first
collapse a spanning tree of the 1-skeleton.

| Surface | Polygon word | $\pi_1$ | $H_1$ (abelianize) |
|---|---|---|---|
| $T^2$ | $aba^{-1}b^{-1}$ | $\mathbb{Z}^2$ | $\mathbb{Z}^2$ |
| $K$ | $abab^{-1}$ | $\langle a,b\mid abab^{-1}\rangle$, nonabelian | $\mathbb{Z}\oplus\mathbb{Z}/2$ |
| $\mathbb{RP}^2$ | $a^2$ | $\mathbb{Z}/2$ | $\mathbb{Z}/2$ |
| $\Sigma_g$ | $\prod_{i=1}^g[a_i,b_i]$ | surface group | $\mathbb{Z}^{2g}$ |

*From* [2.6](lessons/02-06-van-kampen-in-the-wild.md), [2.4](lessons/02-04-free-groups-presentations.md)

### Cellular boundary maps in practice

| Degree | Rule |
|---|---|
| $d_1$ | heads minus tails: $d_1(e^1)=\varphi(+1)-\varphi(-1)$; a loop at one vertex gives $0$ |
| $d_2$ | read the attaching word: coefficient of an edge is its **signed** count ($a^{+1}$ adds, $a^{-1}$ subtracts) |
| general $d_n$ | attach, then **collapse** $X^{(n-2)}$ and every other $(n-1)$-cell; take the degree of the resulting self-map of $S^{n-1}$ |

Worked contrast, same three cell counts: the torus word $aba^{-1}b^{-1}$ cancels
($d_2=0$, giving $H_1=\mathbb{Z}^2$, $H_2=\mathbb{Z}$), while $\mathbb{RP}^2$'s
word $a^2$ doubles ($d_2=\times2$, giving $H_1=\mathbb{Z}/2$, $H_2=0$). One sign
is the entire difference.

*From* [3.4](lessons/03-04-cw-cellular-homology.md)

### The covering-space dictionary

Standing hypotheses: $X$ path-connected, **locally path-connected**, and
semilocally simply connected. Write $H=p_*\pi_1(\tilde X,\tilde x_0)$.

| Topology | Algebra |
|---|---|
| connected cover with basepoint | subgroup $H\le\pi_1(X,x_0)$ — and $p_*$ is always **injective** |
| forget the basepoint | conjugacy class of $H$ |
| number of sheets | index $[\pi_1(X):H]$ (monodromy is transitive, stabilizer $=H$) |
| universal cover | $H=1$; $\operatorname{Deck}\cong\pi_1(X)$ and $X\cong\tilde X/\pi_1(X)$ |
| identity cover $X\to X$ | $H=\pi_1(X)$ |
| deck group of any cover | $N(H)/H$ |
| regular (normal) cover | $H\trianglelefteq\pi_1(X)$, and then $\operatorname{Deck}\cong\pi_1(X)/H$ |
| bigger cover | *smaller* subgroup — the correspondence is order-**reversing** |

**Lifting criterion.** For $Y$ path-connected and locally path-connected and
$f\colon(Y,y_0)\to(X,x_0)$, a lift $\tilde f$ with $\tilde f(y_0)=\tilde x_0$
exists **iff**

$$f_*\pi_1(Y,y_0)\ \subseteq\ p_*\pi_1(\tilde X,\tilde x_0),$$

and it is then unique. Paths and homotopies always lift (take $Y$ a point or a
square), and a lifted homotopy rel endpoints keeps its endpoints — which is why
the endpoint of a lifted loop is an invariant of its class.

Worked instances: $\mathbb{R}\to S^1$ ($H=0$, infinitely many sheets,
$\operatorname{Deck}=\mathbb{Z}$); $z\mapsto z^n$ on $S^1$ ($H=n\mathbb{Z}$, $n$
sheets, $\operatorname{Deck}=\mathbb{Z}/n$); $S^n\to\mathbb{RP}^n$ (2 sheets,
$\operatorname{Deck}=\mathbb{Z}/2$).

*From* [2.1](lessons/02-01-covering-spaces-lifting.md), [2.2](lessons/02-02-lifting-criterion-classification.md), [2.3](lessons/02-03-deck-transformations-galois.md)

### Degree

| Fact | Value |
|---|---|
| identity | $\deg=1$ |
| constant, or any non-surjective map | $\deg=0$ |
| composition | $\deg(f\circ g)=\deg f\cdot\deg g$ |
| reflection in one coordinate | $\deg=-1$ |
| antipodal map $a(x)=-x$ on $S^n$ | $\deg=(-1)^{n+1}$ |
| $z\mapsto z^k$ on $S^1$ (as $f_*$ on $\pi_1$) | multiplication by $k$ |
| local degrees | $\deg f=\sum_i\deg f|_{x_i}$ over $f^{-1}(y)$ |
| homotopy | $f\simeq g\Rightarrow\deg f=\deg g$; **Hopf**: the converse holds on $S^n$ |

**The three theorems it buys.** No retraction $D^{n+1}\to S^n$; **Brouwer** —
every continuous $g\colon D^{n+1}\to D^{n+1}$ has a fixed point; **hairy ball** —
$S^n$ carries a nowhere-zero tangent field iff $n$ is odd (a unit field gives
$H(x,t)=(\cos\pi t)x+(\sin\pi t)v(x)$, a homotopy from the identity to the
antipode, forcing $(-1)^{n+1}=1$).

*From* [4.3](lessons/04-03-degree-applications.md), [1.5](lessons/01-05-first-payoffs.md)

### Cohomology: coefficients and rings

**Universal coefficients** — cohomology is the dual of homology, plus the
torsion of one degree *below*, shifted up:

$$0\to\operatorname{Ext}^1_{\mathbb{Z}}\big(H_{n-1}(X),R\big)\to H^n(X;R)\to\operatorname{Hom}\big(H_n(X),R\big)\to0$$

Over a field the $\operatorname{Ext}$ term dies and $H^n\cong(H_n)^{*}$. Over
$\mathbb{Z}$ it does not: $H^2(\mathbb{RP}^2;\mathbb{Z})=\mathbb{Z}/2$ while
$H_2(\mathbb{RP}^2)=0$.

**Graded commutativity:** $\alpha\smile\beta=(-1)^{pq}\beta\smile\alpha$. So an
odd-degree class has $2\alpha^2=0$, hence $\alpha^2=0$ whenever the target is
torsion-free. Even-degree classes are unconstrained — which is what lets
$\mathbb{CP}^2$ have $x^2\ne0$.

| Space | Ring $H^{*}(-;\mathbb{Z})$ |
|---|---|
| $T^2$ | exterior algebra $\Lambda[\alpha,\beta]$, $\deg\alpha=\deg\beta=1$, $\alpha\beta$ the top class |
| $\mathbb{CP}^2$ | $\mathbb{Z}[x]/(x^3)$, $\deg x=2$ — here $x^2$ **generates** $H^4$ |
| $S^2\vee S^4$ | same groups as $\mathbb{CP}^2$, but every positive-degree product is $0$ |

Slogan: **cup product = intersection of Poincaré duals.** Two loops on the torus
crossing once give a generator of $H^2$; a loop pushed off itself is disjoint, so
$\alpha^2=0$. A homotopy equivalence induces a ring isomorphism, which is why
$\mathbb{CP}^2\not\simeq S^2\vee S^4$ even though no homology group separates them.

*From* [4.4](lessons/04-04-cohomology-cup-products.md)

### Dimension, from local homology

$$H_k\big(\mathbb{R}^n,\mathbb{R}^n\setminus\{x\}\big)=\begin{cases}\mathbb{Z},&k=n\\0,&\text{else}\end{cases}$$

Poke a hole, the punctured space retracts to $S^{n-1}$, and the LES pushes that
class up one degree. Consequences: $\mathbb{R}^m\cong\mathbb{R}^n\Rightarrow m=n$;
and **invariance of domain** — an injective continuous $f\colon U\to\mathbb{R}^n$
on an open $U\subseteq\mathbb{R}^n$ is an open map, hence a homeomorphism onto
its image. Neither smoothness nor surjectivity is needed; injectivity and equal
dimensions are.

*From* [4.5](lessons/04-05-invariance-of-domain.md)

### Finitely generated abelian groups — how answers are reported

Every homology group in this course is finitely generated abelian, so it is
$\mathbb{Z}^r\oplus(\text{torsion})$ with the torsion a sum of cyclic groups.
Report $H_n$ in that normal form; $r$ is the **Betti number** feeding $\chi$.
Quotienting $\mathbb{Z}^k$ by a **primitive** vector (entries with gcd $1$, e.g.
$(1,1,-1)$ for the torus) leaves $\mathbb{Z}^{k-1}$, torsion-free; quotienting by
a non-primitive one (e.g. $(2,0)$ for $\mathbb{RP}^2$ and the Klein bottle)
leaves torsion. Smith normal form is the algorithm that does this for any
boundary matrix.

*Used by* [3.2](lessons/03-02-simplicial-homology.md), [3.4](lessons/03-04-cw-cellular-homology.md)

## Assumed, not taught here

This is a Tier 2 course, so its prerequisites are two full courses rather than
scattered facts. Everything below is *used* without proof.

| Fact | Where it's taught |
|---|---|
| Continuity, joint continuity on a product, the **pasting lemma** on closed sets | [topology 2.1](../topology/lessons/02-01-continuity-and-homeomorphisms.md), [topology card](../topology/reference.md#continuity-equivalent-forms-and-how-to-build-maps) |
| Subspace and **quotient topology** (every gluing, every polygon identification) | [topology 2.2](../topology/lessons/02-02-subspace-topology.md), [topology 2.4](../topology/lessons/02-04-quotient-topology.md) |
| Compactness of $[0,1]$ and the **Lebesgue number lemma** (every lifting and subdivision argument) | [topology 4.1](../topology/lessons/04-01-compactness-open-covers.md), [topology 4.2](../topology/lessons/04-02-compactness-metric-spaces.md) |
| Connectedness: a continuous map into a discrete set is constant (uniqueness of lifts, invariance of degree) | [topology 3.1](../topology/lessons/03-01-connectedness.md), [topology 3.2](../topology/lessons/03-02-path-connectedness-components.md) |
| A continuous bijection from a compact space to a Hausdorff space is a homeomorphism (invariance of domain) | [topology 4.3](../topology/lessons/04-03-heine-borel-continuous-maps.md), [topology 5.1](../topology/lessons/05-01-separation-axioms-hausdorff.md) |
| One-point compactification $\mathbb{R}^n=S^n\setminus\{\infty\}$ | [topology 4.5](../topology/lessons/04-05-local-compactness-compactification.md) |
| Homotopy, $\pi_1$, $\pi_1(S^1)$, Brouwer in dimension 2 — first pass, rebuilt here | [topology 6.1–6.5](../topology/lessons/06-01-homotopy-of-paths.md), [topology card](../topology/reference.md#fundamental-group) |
| Group axioms, homomorphisms, kernels, images | [abstract-algebra 1.1](../abstract-algebra/lessons/01-01-group-axioms-first-examples.md), [2.1](../abstract-algebra/lessons/02-01-homomorphisms-kernels-images.md) |
| Normal subgroups, quotient groups, the isomorphism theorems (every "descends to the quotient" step) | [abstract-algebra 2.2](../abstract-algebra/lessons/02-02-normal-subgroups-quotients.md), [2.3](../abstract-algebra/lessons/02-03-isomorphism-theorems.md) |
| Cosets, index, Lagrange (sheets $=$ index) | [abstract-algebra 1.5](../abstract-algebra/lessons/01-05-cosets-lagrange.md) |
| Group actions, **orbit–stabilizer** (monodromy on a fiber), conjugacy and inner automorphisms | [abstract-algebra 2.4](../abstract-algebra/lessons/02-04-group-actions.md), [2.5](../abstract-algebra/lessons/02-05-orbits-stabilizers-conjugacy.md) |
| Cyclic groups $\mathbb{Z}/n$, dihedral and symmetric groups (the targets you recognize a presentation by) | [abstract-algebra 1.2](../abstract-algebra/lessons/01-02-cyclic-groups-order.md), [1.3](../abstract-algebra/lessons/01-03-dihedral-symmetric-groups.md) |
| The Galois correspondence the covering dictionary imitates | [abstract-algebra 4.4](../abstract-algebra/lessons/04-04-galois-automorphisms-taste.md) |
| Structure of finitely generated abelian groups, and Smith normal form | **not taught anywhere in the library** — the working statement is on this card under *Finitely generated abelian groups*; the cyclic-group and quotient pieces are [abstract-algebra 1.2](../abstract-algebra/lessons/01-02-cyclic-groups-order.md), [2.2](../abstract-algebra/lessons/02-02-normal-subgroups-quotients.md) |
| $\operatorname{Hom}$, $\operatorname{Ext}^1$, and the snake lemma (homological algebra) | **stated only here** — used as black boxes in [4.1](lessons/04-01-les-of-a-pair.md) and [4.4](lessons/04-04-cohomology-cup-products.md) |
| Winding number as $\frac{1}{2\pi i}\oint\frac{dz}{z}$, the argument principle | [complex-analysis 6.3](../complex-analysis/lessons/06-03-argument-principle-rouche.md) |

## Pitfalls

### Homotopy vs. homeomorphism

- Homotopy equivalence is far weaker than homeomorphism — a point and $\mathbb{R}^2$ are equivalent. When an invariant fails to separate two spaces, that may be the truth, not a failure. *([1.1](lessons/01-01-homotopy-of-maps.md))*
- A retraction is not a deformation retraction: the first only needs to exist, the second supplies the homotopy that certifies $A\simeq X$. *([1.1](lessons/01-01-homotopy-of-maps.md))*
- A homotopy must be continuous **jointly** on $X\times I$ — frame-by-frame continuity is not enough. *([1.1](lessons/01-01-homotopy-of-maps.md))*
- Equal invariants never prove sameness: $S^2$ and a point share $\pi_1=1$ but differ in $H_2$. Invariants certify *difference* only. *([1.3](lessons/01-03-basepoints-functoriality.md))*

### The fundamental group

- Concatenation is **not** associative as functions — only after passing to classes. The group lives on classes, never on loops. *([1.2](lessons/01-02-paths-loops-pi1.md))*
- $\gamma\cdot\bar\gamma$ is homotopic to the constant loop, not equal to it. *([1.2](lessons/01-02-paths-loops-pi1.md))*
- Drop "fixed endpoints" and well-definedness collapses; free homotopy of loops only sees conjugacy classes. *([1.2](lessons/01-02-paths-loops-pi1.md))*
- $\pi_1$ is usually **nonabelian** — write it multiplicatively, and never assume $[\gamma][\delta]=[\delta][\gamma]$. *([1.2](lessons/01-02-paths-loops-pi1.md))*
- $\beta_h$ depends on the path $h$: two paths differ by conjugation, so only the *abstract* group is basepoint-free (the ambiguity vanishes iff $\pi_1$ is abelian). *([1.3](lessons/01-03-basepoints-functoriality.md))*
- $f_*$ inherits neither injectivity nor surjectivity from $f$: an inclusion can be injective yet zero on $\pi_1$. *([1.3](lessons/01-03-basepoints-functoriality.md))*
- Brouwer needs a compact contractible domain: rotation of the annulus and translation of $\mathbb{R}$ both have no fixed point. *([1.5](lessons/01-05-first-payoffs.md))*

### Covers and lifting

- The lift of a loop is usually **not** a loop — the failure to close up *is* the monodromy. Only classes inside $H$ lift to loops. *([2.1](lessons/02-01-covering-spaces-lifting.md))*
- "Evenly covered" is a statement about a neighborhood, not a point; a fold like $z\mapsto z^2$ on the closed disk is not a covering. *([2.1](lessons/02-01-covering-spaces-lifting.md))*
- $p_*$ is always injective; what it fails to be is surjective — and the missing loops are the point. *([2.2](lessons/02-02-lifting-criterion-classification.md))*
- The lifting criterion does not need $Y$ simply connected, but it does need $Y$ **locally** path-connected, or the constructed lift can fail to be continuous. *([2.2](lessons/02-02-lifting-criterion-classification.md))*
- Based covers match subgroups; unbased covers match only **conjugacy classes**. The distinction is invisible when $\pi_1$ is abelian, which is why the circle's list looks so tidy. *([2.2](lessons/02-02-lifting-criterion-classification.md))*
- $\operatorname{Deck}\cong\pi_1$ only for the *universal* cover; in general it is $N(H)/H$, and a non-normal cover can have trivial deck group. *([2.3](lessons/02-03-deck-transformations-galois.md))*
- The correspondence is order-**reversing**: the trivial subgroup sits opposite the largest cover. *([2.3](lessons/02-03-deck-transformations-galois.md))*

### Presentations and gluing

- Relation vs. relator: "$ab=ba$" and the word $aba^{-1}b^{-1}$ are the same single item. *([2.4](lessons/02-04-free-groups-presentations.md))*
- Quotient by the **normal closure**, not by the subgroup — killing $w$ kills every conjugate $gwg^{-1}$, which is also why attaching a 2-cell imposes $\langle\!\langle w\rangle\!\rangle$. *([2.4](lessons/02-04-free-groups-presentations.md), [2.6](lessons/02-06-van-kampen-in-the-wild.md))*
- "Free" means no imposed relations, not abelian and not small: $F_n$ is nonabelian for $n\ge2$. Different presentations can name the same group. *([2.4](lessons/02-04-free-groups-presentations.md))*
- Free product is **not** direct product: $\mathbb{Z}*\mathbb{Z}=F_2$ is nonabelian; $\mathbb{Z}\times\mathbb{Z}$ is what you get only when the gluing supplies a commuting relation. *([2.5](lessons/02-05-seifert-van-kampen.md))*
- You may not cut along a curve or a point — **thicken** to open sets with an open collar, or van Kampen does not apply. *([2.5](lessons/02-05-seifert-van-kampen.md))*
- A disconnected overlap breaks the theorem outright (two arcs covering $S^1$ would "give" $\pi_1=1$). *([2.5](lessons/02-05-seifert-van-kampen.md))*
- The cell-structure presentation needs a **single 0-cell**; otherwise collapse a spanning tree first. Cells of dimension $\ge3$ never change $\pi_1$. *([2.6](lessons/02-06-van-kampen-in-the-wild.md))*

### Chains, boundaries, and computation

- The alternating signs $(-1)^i$ are the engine, not decoration: drop them and $\partial^2\ne0$ and homology is meaningless. Reordering vertices by an odd permutation negates the simplex. *([3.1](lessons/03-01-simplicial-delta-complexes.md), [3.2](lessons/03-02-simplicial-homology.md))*
- A $\Delta$-complex is looser than a simplicial complex — self-gluing is allowed, which is why the torus needs two triangles instead of seven. *([3.1](lessons/03-01-simplicial-delta-complexes.md))*
- "Cycle" does not mean "loop": it means zero boundary in any degree, and every boundary is automatically a cycle. *([3.2](lessons/03-02-simplicial-homology.md))*
- Homology does not depend on the chosen triangulation or cell structure — pick the smallest one. *([3.2](lessons/03-02-simplicial-homology.md), [3.3](lessons/03-03-singular-homology.md))*
- $H_1=\pi_1$ only when $\pi_1$ is already abelian; in general $H_1$ is the abelianization, and nonabelian information is lost. *([3.2](lessons/03-02-simplicial-homology.md), [2.6](lessons/02-06-van-kampen-in-the-wild.md))*
- $\partial\sigma$ restricts the **map** to a face of the *domain*; it does not delete a point of the image. *([3.3](lessons/03-03-singular-homology.md))*
- $H_0$ counts **path** components, not connected components. *([3.3](lessons/03-03-singular-homology.md))*
- The cellular chain groups do not know the gluing — only $d_n$ does. Torus, Klein bottle, and $S^2\vee S^1\vee S^1$ share chain groups and differ only in degrees. *([3.4](lessons/03-04-cw-cellular-homology.md))*
- The degree formula wants the attaching map **after collapsing** $X^{(n-2)}$ and the other cells — skipping the collapse is the most common error. Opposite traversals cancel; same-direction ones add. *([3.4](lessons/03-04-cw-cellular-homology.md))*

### Exactness and the axioms

- The homotopy axiom is about **maps**, not spaces; the space-level statement (contractible has a point's homology) is a corollary you derive. *([3.5](lessons/03-05-eilenberg-steenrod-axioms.md))*
- Excision needs $\overline{Z}\subseteq\operatorname{int}(A)$ strictly — excise something touching the frontier of $A$ and it fails. *([3.5](lessons/03-05-eilenberg-steenrod-axioms.md))*
- Dropping the dimension axiom does not break the machine; it only removes uniqueness (K-theory, cobordism still have LES and Mayer–Vietoris). *([3.5](lessons/03-05-eilenberg-steenrod-axioms.md))*
- A relative cycle is usually not a cycle: it needs $\partial\alpha\in C_{n-1}(A)$, not $\partial\alpha=0$. Conflating them makes $\partial_*$ look like the zero map. *([4.1](lessons/04-01-les-of-a-pair.md))*
- Exactness at a spot means image $=$ kernel, not "the map is zero" — track which side you are using to conclude injective vs. surjective. *([4.1](lessons/04-01-les-of-a-pair.md))*
- $H_n(X,A)\cong\tilde H_n(X/A)$ needs a **good pair**; for pathological $A$ the quotient has the wrong homology. *([4.1](lessons/04-01-les-of-a-pair.md))*
- Mayer–Vietoris needs the **interiors** to cover: two closed hemispheres meeting in the bare equator do not qualify. Thicken the overlap. *([4.2](lessons/04-02-mayer-vietoris.md))*
- One of $\Phi,\Psi$ must carry a minus sign; pick a convention and keep it. The reduced version also needs $A\cap B\ne\varnothing$. *([4.2](lessons/04-02-mayer-vietoris.md))*

### Degree, cohomology, dimension

- Degree $0$ does not mean non-surjective — a fold onto a hemisphere is onto with cancelling local degrees. *([4.3](lessons/04-03-degree-applications.md))*
- Local degree is $\pm1$ only at a local homeomorphism; where $f$ is locally $k$-to-$1$ it is $k$. *([4.3](lessons/04-03-degree-applications.md))*
- Hopf's converse ("equal degree implies homotopic") is special to self-maps of spheres — do not export it. *([4.3](lessons/04-03-degree-applications.md))*
- $H^n$ is not simply $\operatorname{Hom}(H_n,\mathbb{Z})$ — the $\operatorname{Ext}$ term carries torsion up from degree $n-1$. Duality is clean only over a field. *([4.4](lessons/04-04-cohomology-cup-products.md))*
- The cup product is **graded**-commutative; the sign is harmless in even degrees and lethal in odd ones, and at cochain level it is not commutative at all. *([4.4](lessons/04-04-cohomology-cup-products.md))*
- Counting components after removing a point separates $\mathbb{R}^1$ from the rest and nothing more — you need the *degree* the local $\mathbb{Z}$ sits in. *([4.5](lessons/04-05-invariance-of-domain.md))*
- A continuous surjection may raise dimension (Peano curves); a continuous **injection** on an open set may not. That hypothesis is the entire theorem. *([4.5](lessons/04-05-invariance-of-domain.md))*
