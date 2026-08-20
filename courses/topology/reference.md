# Topology · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Topology is one idea — *which sets are open* — and everything else rebuilt on top
of it: nearness without distance, continuity without $\varepsilon$, "one piece"
(connected), "finite enough" (compact), "can the space tell points apart"
(separation), and finally an algebraic fingerprint for holes ($\pi_1$). Most
mid-problem lookups here are one of three things: *what exactly does this word
demand*, *which standard space is the counterexample*, and *does this property
survive a subspace / product / quotient / continuous map*. The two big tables
below answer the last two.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $(X,d)$, $d(x,y)$ | a set with a metric — a distance obeying three axioms | [1.1](lessons/01-01-metric-spaces.md) |
| $B(x,r)$ | open ball: everything strictly within $r$ of $x$; its **shape** depends on $d$ | [1.1](lessons/01-01-metric-spaces.md) |
| $d_1, d_2, d_\infty$ | taxicab, Euclidean, sup metrics — same topology on $\mathbb{R}^n$, different balls | [1.1](lessons/01-01-metric-spaces.md) |
| $\mathcal{T}_d$ | the metric topology: all sets that are unions of $d$-balls | [1.2](lessons/01-02-open-sets-metric-topology.md) |
| $(X,\tau)$, $\tau$ | a topological space and its topology — a **set of subsets**, the open ones | [1.3](lessons/01-03-topological-spaces-axioms.md) |
| $\tau\subseteq\tau'$ | $\tau'$ is **finer** (more open sets); $\tau$ is **coarser** | [1.3](lessons/01-03-topological-spaces-axioms.md) |
| $\mathcal{B}$, $\mathcal{S}$ | basis (unions give all opens) and subbasis (finite intersections give a basis) | [1.4](lessons/01-04-bases-and-subbases.md) |
| $\mathbb{R}_\ell$, $[a,b)$ | the lower-limit (Sorgenfrey) line and its basis blocks | [1.4](lessons/01-04-bases-and-subbases.md) |
| $A^\circ$, $\operatorname{int}(A)$ | interior — the largest open set inside $A$ | [1.5](lessons/01-05-closure-interior-boundary.md) |
| $\overline{A}$ | closure — the smallest closed set containing $A$ | [1.5](lessons/01-05-closure-interior-boundary.md) |
| $\partial A$ | boundary — the skin, $\overline A\setminus A^\circ$ | [1.5](lessons/01-05-closure-interior-boundary.md) |
| $A'$ | derived set — all limit points of $A$ (need not lie in $A$) | [1.5](lessons/01-05-closure-interior-boundary.md) |
| $f^{-1}(V)$ | preimage: the inputs landing in $V$ — needs no inverse function | [2.1](lessons/02-01-continuity-and-homeomorphisms.md) |
| $X\cong Y$ | homeomorphic — the same space to topology | [2.1](lessons/02-01-continuity-and-homeomorphisms.md) |
| $\tau_A$, $A\hookrightarrow X$ | subspace topology on $A$, and the inclusion map | [2.2](lessons/02-02-subspace-topology.md) |
| $\prod_\alpha X_\alpha$, $\pi_\beta$ | product space and the projection reading off coordinate $\beta$ | [2.3](lessons/02-03-product-topology.md) |
| $\mathbb{R}^\omega$ | countably many copies of $\mathbb{R}$ — the standard box-vs-product test bed | [2.3](lessons/02-03-product-topology.md) |
| $X/\!\sim$, $[x]$, $q$ | quotient space, equivalence class, and the collapsing map $q(x)=[x]$ | [2.4](lessons/02-04-quotient-topology.md) |
| $S^n$, $D^2$, $\mathbb{RP}^n$ | $n$-sphere, closed unit disk, real projective space | [2.4](lessons/02-04-quotient-topology.md) |
| cut point | a point whose removal raises the number of components | [2.5](lessons/02-05-topological-properties-invariants.md) |
| $\gamma:[0,1]\to X$ | a path — the **map**, not the curve it traces | [3.2](lessons/03-02-path-connectedness-components.md) |
| $\mathcal{U}=\{U_\alpha\}$ | an open cover; a **subcover** is a subfamily of it that still covers | [4.1](lessons/04-01-compactness-open-covers.md) |
| $\varepsilon$-net | a finite set whose $\varepsilon$-balls blanket the space | [4.2](lessons/04-02-compactness-metric-spaces.md) |
| $\delta$ (Lebesgue number) | one uniform size below which no set can straddle a cover | [4.2](lessons/04-02-compactness-metric-spaces.md) |
| $\ell^2$ | square-summable sequences — where "closed and bounded" stops meaning compact | [4.2](lessons/04-02-compactness-metric-spaces.md) |
| $X^+ = X\cup\{\infty\}$ | one-point (Alexandroff) compactification | [4.5](lessons/04-05-local-compactness-compactification.md) |
| $T_0,T_1,T_2,T_3,T_4$ | rungs of the separation ladder ($T_2$ = Hausdorff, $T_3$ regular, $T_4$ normal) | [5.1](lessons/05-01-separation-axioms-hausdorff.md) |
| $d(x,A)$ | distance from a point to a set, $\inf_{a\in A}d(x,a)$ — the metric-space separator | [5.2](lessons/05-02-normal-spaces-urysohn.md) |
| $[0,1]^\omega$ | the Hilbert cube — the universal metric home in Urysohn metrization | [5.4](lessons/05-04-metrization.md) |
| $f\simeq g$, $\gamma_0\simeq_p\gamma_1$ | homotopic maps; path-homotopic paths (endpoints pinned every frame) | [6.1](lessons/06-01-homotopy-of-paths.md) |
| $H(x,s)$ | a homotopy — the whole movie, frame $s$, continuous **jointly** in $(x,s)$ | [6.1](lessons/06-01-homotopy-of-paths.md) |
| $\pi_1(X,x_0)$, $[\gamma]$ | fundamental group at basepoint $x_0$; a path-homotopy class of loops | [6.2](lessons/06-02-the-fundamental-group.md) |
| $\gamma\cdot\delta$, $\bar\gamma$, $e_{x_0}$ | concatenation, reverse loop, constant loop (the group identity) | [6.2](lessons/06-02-the-fundamental-group.md) |
| $p:\mathbb{R}\to S^1$, $\tilde\gamma$ | the covering map $p(t)=e^{2\pi i t}$, and the lift of a loop $\gamma$ | [6.3](lessons/06-03-fundamental-group-of-circle.md) |
| $\deg[\gamma]$ | winding number — the integer height the lift has climbed at $t=1$ | [6.3](lessons/06-03-fundamental-group-of-circle.md) |
| $f_*$ | the homomorphism $\pi_1(X,x_0)\to\pi_1(Y,y_0)$ induced by a continuous $f$ | [6.4](lessons/06-04-induced-homomorphisms-invariance.md) |

## Definitions

### Metric

Distance stripped to what proofs actually use: never negative and zero only in
place, symmetric, and no detour is shorter than the direct route.

$$d(x,y)=0\iff x=y,\qquad d(x,y)=d(y,x),\qquad d(x,z)\le d(x,y)+d(y,z)$$

*Introduced:* [1.1](lessons/01-01-metric-spaces.md)

### Open ball

Everything strictly closer than $r$ to the center. "Ball" is a name, not a shape —
a diamond under $d_1$, a square under $d_\infty$, and $\{x\}$ under the discrete metric.

$$B(x,r)=\{y\in X: d(x,y)<r\}$$

*Introduced:* [1.1](lessons/01-01-metric-spaces.md)

### Open set

Every point has wiggle room: a whole ball's worth of company still inside.

$$U \text{ open} \iff \forall x\in U\ \exists r>0:\ B(x,r)\subseteq U$$

*Introduced:* [1.2](lessons/01-02-open-sets-metric-topology.md)

### Equivalent metrics

Two rulers that disagree on almost every distance but declare exactly the same
sets open — topologically indistinguishable. On $\mathbb{R}^n$, $d_1,d_2,d_\infty$ are equivalent.

$$\mathcal{T}_d=\mathcal{T}_{d'}$$

*Introduced:* [1.2](lessons/01-02-open-sets-metric-topology.md)

### Topology

A decision about which subsets count as open, subject to three sanity rules. The
metric's *conclusions*, kept after the metric itself is thrown away.

$$\textbf{(T1)}\ \varnothing,X\in\tau \qquad \textbf{(T2)}\ \textstyle\bigcup_{i\in I}U_i\in\tau \ (\text{any } I) \qquad \textbf{(T3)}\ \textstyle\bigcap_{k=1}^{n}U_k\in\tau \ (\text{finite only})$$

*Introduced:* [1.3](lessons/01-03-topological-spaces-axioms.md)

### Finer and coarser

More open sets means finer (more distinctions you can draw). Discrete is the
finest possible, indiscrete the coarsest; most pairs are simply incomparable.

$$\tau_1\subseteq\tau_2:\quad \tau_2 \text{ finer},\ \tau_1 \text{ coarser}$$

*Introduced:* [1.3](lessons/01-03-topological-spaces-axioms.md)

### Basis

A starter kit of open sets whose unions give every open set — how topologies are
actually specified, since you can never list them all.

$$\textbf{(B1)}\ \text{the blocks cover } X \qquad \textbf{(B2)}\ x\in B_1\cap B_2 \Rightarrow \exists B_3:\ x\in B_3\subseteq B_1\cap B_2$$

*Introduced:* [1.4](lessons/01-04-bases-and-subbases.md)

### Subbasis

Any family covering $X$. Close it under **finite intersections** to get a basis,
then under unions — the coarsest topology in which your chosen sets are open.

*Introduced:* [1.4](lessons/01-04-bases-and-subbases.md)

### Interior

The points sitting safely deep inside $A$ — those with an open set around them
that never pokes out.

$$A^\circ=\bigcup\{U\in\tau: U\subseteq A\}$$

*Introduced:* [1.5](lessons/01-05-closure-interior-boundary.md)

### Closure

$A$ fattened by everything it presses against — the smallest closed set that
still contains it.

$$\overline{A}=\bigcap\{C \text{ closed}: A\subseteq C\}$$

*Introduced:* [1.5](lessons/01-05-closure-interior-boundary.md)

### Boundary

The skin: in the closure but not in the interior. Every neighborhood of a
boundary point straddles the fence.

$$\partial A=\overline{A}\setminus A^\circ = \overline{A}\cap\overline{X\setminus A}$$

*Introduced:* [1.5](lessons/01-05-closure-interior-boundary.md)

### Limit point

$A$ crowds arbitrarily close to $x$ — no open set can pull $x$ clear of $A$, even
after deleting $x$ itself. A limit point need not belong to $A$.

$$x\in A' \iff \text{every open } U\ni x \text{ meets } A\setminus\{x\}$$

*Introduced:* [1.5](lessons/01-05-closure-interior-boundary.md)

### Dense

A set so thickly spread that no nonempty open set can avoid it — like $\mathbb{Q}$ in $\mathbb{R}$.

$$\overline{A}=X$$

*Introduced:* [1.5](lessons/01-05-closure-interior-boundary.md)

### Continuous

Pull any open set backwards through $f$ and it stays open. No distances, no
limits, no $\varepsilon$ — and composition becomes a one-line proof.

$$f \text{ continuous} \iff f^{-1}(V) \text{ open in } X \text{ for every open } V\subseteq Y$$

*Introduced:* [2.1](lessons/02-01-continuity-and-homeomorphisms.md)

### Homeomorphism

A perfect two-way dictionary between points **and** open sets. Not just a
continuous bijection — the inverse must be continuous too.

$$f \text{ bijective},\ f \text{ and } f^{-1} \text{ continuous} \quad\Longrightarrow\quad X\cong Y$$

*Introduced:* [2.1](lessons/02-01-continuity-and-homeomorphisms.md)

### Subspace topology

A subset inherits its topology by tracing the ambient open sets onto it — which
manufactures new open sets (like $[0,\tfrac12)$ in $[0,1]$) that were never open upstairs.

$$\tau_A=\{A\cap U: U\in\tau\}$$

*Introduced:* [2.2](lessons/02-02-subspace-topology.md)

### Embedding

A map that reproduces $Z$'s topology faithfully on its image — a homeomorphism
onto $f(Z)$ with the subspace topology, not merely an injection.

*Introduced:* [2.2](lessons/02-02-subspace-topology.md)

### Product topology

The cheapest topology keeping every projection continuous. Basic open sets
constrain only **finitely many** coordinates and leave the rest as whole factors.

$$\mathcal{S}=\{\pi_\beta^{-1}(U): U \text{ open in } X_\beta\}, \qquad \mathcal{B}=\{U\times V\} \text{ for two factors}$$

*Introduced:* [2.3](lessons/02-03-product-topology.md)

### Box topology

The greedy alternative: allow $\prod_\alpha U_\alpha$ with *every* coordinate constrained.
Strictly finer than the product topology on infinite products, and it breaks
things — the diagonal $t\mapsto(t,t,\dots)$ stops being continuous, and Tychonoff fails.

*Introduced:* [2.3](lessons/02-03-product-topology.md)

### Quotient topology

Glue points together, then keep as many open sets as continuity of the collapsing
map will possibly allow — the **finest** topology making $q$ continuous.

$$\tau_Y=\{V\subseteq Y: q^{-1}(V) \text{ open in } X\}$$

*Introduced:* [2.4](lessons/02-04-quotient-topology.md)

### Topological invariant

Any yes/no feature a homeomorphism can never change. The contrapositive is the
working tool: **one differing invariant proves two spaces are different.**

*Introduced:* [2.5](lessons/02-05-topological-properties-invariants.md)

### Separation and connected

A separation is a clean break into two nonempty **open** halves; connected means
no such break exists. Connectedness is defined negatively on purpose.

$$U,V \text{ open},\ U,V\neq\varnothing,\ U\cap V=\varnothing,\ U\cup V=X$$

*Introduced:* [3.1](lessons/03-01-connectedness.md)

### Clopen

Open and closed at once. $\varnothing$ and $X$ always are; a *third* clopen set is
exactly a separation in disguise.

*Introduced:* [3.1](lessons/03-01-connectedness.md)

### Path-connected

You can drive between any two points along a continuous road. Strictly stronger
than connected — the topologist's sine curve is connected but un-drivable.

$$\forall a,b\ \exists \gamma:[0,1]\to X \text{ continuous},\ \gamma(0)=a,\ \gamma(1)=b$$

*Introduced:* [3.2](lessons/03-02-path-connectedness-components.md)

### Connected component

The maximal connected chunk a point belongs to. Components partition the space
and are always closed — but not always open ($\mathbb{Q}$'s components are single points).

*Introduced:* [3.2](lessons/03-02-path-connectedness-components.md)

### Compact

However you cover the space with open sets, finitely many of them already
suffice. "Finiteness for infinite spaces" — the property that upgrades every
point-by-point promise into a global one.

$$\text{every open cover } \mathcal{U} \text{ has a finite subcover}$$

*Introduced:* [4.1](lessons/04-01-compactness-open-covers.md)

### Sequentially compact

Every sequence has a subsequence homing in on a point *of the space*. Equivalent
to compact **for metric spaces only**.

*Introduced:* [4.2](lessons/04-02-compactness-metric-spaces.md)

### Totally bounded

At every scale $\varepsilon$, finitely many $\varepsilon$-balls blanket the space. Strictly stronger
than bounded: an infinite discrete metric space is bounded but not totally bounded.

$$\forall \varepsilon>0\ \exists x_1,\dots,x_m:\ X=\textstyle\bigcup_{i=1}^m B(x_i,\varepsilon)$$

*Introduced:* [4.2](lessons/04-02-compactness-metric-spaces.md)

### Locally compact

Compact *near* every point: each $x$ sits inside an open set inside a compact set.
$\mathbb{R}^n$ qualifies, $\mathbb{Q}$ and infinite-dimensional function spaces do not.

$$\forall x\ \exists U \text{ open},\ K \text{ compact}:\ x\in U\subseteq K$$

*Introduced:* [4.5](lessons/04-05-local-compactness-compactification.md)

### One-point compactification

Buy compactness by adding a single point $\infty$, where "near $\infty$" means
"escaped every compact set." Wraps the line into a circle, the plane into a sphere.

$$X^+=X\cup\{\infty\}; \quad \text{opens} = \{U \text{ open in } X\}\cup\{\{\infty\}\cup(X\setminus K): K \text{ compact and closed}\}$$

*Introduced:* [4.5](lessons/04-05-local-compactness-compactification.md)

### Hausdorff ($T_2$)

Distinct points get non-overlapping bubbles. The whole content is the word
**disjoint** — and it is exactly what makes a limit unique.

$$x\neq y \Rightarrow \exists\, U\ni x,\ V\ni y \text{ open with } U\cap V=\varnothing$$

*Introduced:* [5.1](lessons/05-01-separation-axioms-hausdorff.md)

### Regular ($T_3$)

A point and a closed set missing it can be housed in non-overlapping open rooms
(plus $T_1$).

*Introduced:* [5.2](lessons/05-02-normal-spaces-urysohn.md)

### Normal ($T_4$)

Any two disjoint **closed sets** can be housed in disjoint open rooms (plus $T_1$).
Metric spaces and compact Hausdorff spaces both clear this bar.

$$A,B \text{ closed disjoint} \Rightarrow \exists\, U\supseteq A,\ V\supseteq B \text{ open},\ U\cap V=\varnothing$$

*Introduced:* [5.2](lessons/05-02-normal-spaces-urysohn.md)

### First countable

Each point has a *countable* stock of shrinking neighborhoods — precisely the
license to keep testing closure and continuity with plain sequences instead of nets.

*Introduced:* [5.3](lessons/05-03-countability-separability.md)

### Second countable

One countable basis generates the whole topology. The strongest of the four
countability axioms: it forces first countable, separable, and Lindelöf.

*Introduced:* [5.3](lessons/05-03-countability-separability.md)

### Separable

A countable dense subset exists — countably many points that no open set can
avoid, like $\mathbb{Q}$ inside $\mathbb{R}$.

*Introduced:* [5.3](lessons/05-03-countability-separability.md)

### Lindelöf

Every open cover has a **countable** subcover — compactness weakened one cardinal step.

*Introduced:* [5.3](lessons/05-03-countability-separability.md)

### Metrizable

Some metric — any metric — produces exactly the open sets you already have. It
asks whether the family of compatible metrics is non-empty, never which one is "the" distance.

*Introduced:* [5.4](lessons/05-04-metrization.md)

### Homotopy

The whole movie of a continuous deformation, one frame per instant $s$, continuous
**jointly** in $(x,s)$ — not merely frame by frame.

$$H:X\times[0,1]\to Y,\qquad H(x,0)=f(x),\quad H(x,1)=g(x)$$

*Introduced:* [6.1](lessons/06-01-homotopy-of-paths.md)

### Path homotopy

Same movie, but the two endpoints are nailed down in **every** frame — the pins
are what let a loop feel a hole.

$$H(t,0)=\gamma_0(t),\ H(t,1)=\gamma_1(t),\qquad H(0,s)=x_0,\ H(1,s)=x_1\ \ \forall s$$

*Introduced:* [6.1](lessons/06-01-homotopy-of-paths.md)

### Homotopy equivalence and contractible

Two maps that are inverse *up to deformation* rather than on the nose. A space
homotopy equivalent to a point is **contractible**. Strictly weaker than
homeomorphism — and that looseness is what makes $\pi_1$ computable.

$$g\circ f\simeq \mathrm{id}_X,\qquad f\circ g\simeq \mathrm{id}_Y$$

*Introduced:* [6.1](lessons/06-01-homotopy-of-paths.md)

### Deformation retract

Continuously reel a whole space onto a subspace, holding that subspace fixed
throughout. It is a homotopy equivalence, so it preserves $\pi_1$ — this is how
the punctured plane and the annulus inherit the circle's group.

$$H(x,0)=x,\quad H(x,1)\in A,\quad H(a,s)=a\ \ \forall a\in A$$

*Introduced:* [6.2](lessons/06-02-the-fundamental-group.md)

### Fundamental group

Loops at a basepoint, blurred together by deformation, multiplied by "do one then
the other." Elements are **classes**, never individual loops.

$$\pi_1(X,x_0)=\{[\gamma]:\gamma \text{ a loop at } x_0\},\qquad [\gamma][\delta]=[\gamma\cdot\delta]$$

*Introduced:* [6.2](lessons/06-02-the-fundamental-group.md)

### Simply connected

Path-connected with trivial $\pi_1$: you can get anywhere, and every loop contracts.
No snags, no holes.

*Introduced:* [6.2](lessons/06-02-the-fundamental-group.md)

### Covering map

A map that wraps one space onto another, invertibly in the small: every point
downstairs has an arc $U$ whose preimage is a disjoint stack of sheets, each mapped
homeomorphically onto $U$.

$$p:\mathbb{R}\to S^1,\qquad p(t)=e^{2\pi i t},\qquad p^{-1}(1)=\mathbb{Z}$$

*Introduced:* [6.3](lessons/06-03-fundamental-group-of-circle.md)

### Degree (winding number)

Unroll the loop onto the line and read how far the lift has climbed. An integer,
because a loop must land back over its start.

$$\deg[\gamma]=\tilde\gamma(1)\in\mathbb{Z}, \qquad \tilde\gamma(0)=0,\ p\circ\tilde\gamma=\gamma$$

*Introduced:* [6.3](lessons/06-03-fundamental-group-of-circle.md)

### Induced homomorphism

Photograph a loop through $f$ and take the class of the picture. This is what lets
a group attached to a space *travel* along maps.

$$f_*:\pi_1(X,x_0)\to\pi_1(Y,y_0),\qquad f_*[\gamma]=[f\circ\gamma]$$

*Introduced:* [6.4](lessons/06-04-induced-homomorphisms-invariance.md)

### Retraction

A continuous map of a space onto a subspace that leaves that subspace pointwise
fixed. Whether one exists is a question $\pi_1$ answers instantly.

$$r:X\to A \text{ continuous},\quad r(a)=a\ \ \forall a\in A \quad\Longleftrightarrow\quad r\circ i=\mathrm{id}_A$$

*Introduced:* [6.5](lessons/06-05-fixed-points-applications.md)

## Formulas and rules

### The standard example spaces

The working zoo. Nearly every "is that true?" in this course is settled by finding
the right row.

| Space / construction | What it is | Properties it has | The counterexample it serves as |
|---|---|---|---|
| **Discrete** $\tau=\mathcal{P}(X)$ | every subset open; comes from the metric $d(x,y)=1$ for $x\neq y$ | $T_2$, metrizable, first countable, locally compact, every map out of it continuous; every subset clopen | totally disconnected; not compact and not separable when $X$ is infinite/uncountable; bounded but not totally bounded ([1.1](lessons/01-01-metric-spaces.md), [4.2](lessons/04-02-compactness-metric-spaces.md), [5.3](lessons/05-03-countability-separability.md)) |
| **Indiscrete** $\tau=\{\varnothing,X\}$ | only the two forced open sets | compact, connected, separable; every map *into* it continuous | fails even $T_0$ — every sequence converges to every point, and $\{a\}$ is compact but not closed ([1.3](lessons/01-03-topological-spaces-axioms.md), [4.1](lessons/04-01-compactness-open-covers.md), [5.1](lessons/05-01-separation-axioms-hausdorff.md)) |
| **Cofinite** on infinite $X$ | open = $\varnothing$ or "misses only finitely many points" | $T_1$ (points closed), compact, connected; the coarsest $T_1$ topology | $T_1$ but **not** $T_2$ — any two nonempty opens meet, limits are wildly non-unique, and it is not metrizable ([1.3](lessons/01-03-topological-spaces-axioms.md), [5.1](lessons/05-01-separation-axioms-hausdorff.md), [5.4](lessons/05-04-metrization.md)) |
| **Standard (order) topology on $\mathbb{R}$** | basis of open intervals $(a,b)$ read off the order | metrizable, second countable, separable, Lindelöf, normal, connected, locally compact | the baseline everything else is compared against; $\mathbb{R}$ itself is closed in itself yet not compact ([1.4](lessons/01-04-bases-and-subbases.md), [4.1](lessons/04-01-compactness-open-covers.md)) |
| **Sorgenfrey line $\mathbb{R}_\ell$** | basis of half-open $[a,b)$ — **strictly finer** than standard | $T_2$, normal, separable, first countable, Lindelöf; $[0,1)$ is clopen | separable but **not second countable**, hence not metrizable; incomparable to the upper-limit topology ([1.4](lessons/01-04-bases-and-subbases.md), [5.3](lessons/05-03-countability-separability.md), [5.4](lessons/05-04-metrization.md)) |
| **Sorgenfrey plane $\mathbb{R}_\ell\times\mathbb{R}_\ell$** | the product of two Sorgenfrey lines | separable | product of two normal Lindelöf spaces that is **neither normal nor Lindelöf** — the anti-diagonal is closed, discrete, uncountable ([5.3](lessons/05-03-countability-separability.md)) |
| **Sierpiński space** $\{0,1\}$, $\tau=\{\varnothing,\{1\},X\}$ | one point open, the other not | $T_0$, compact, connected | the minimal "$T_0$ but not $T_1$" — $\{1\}$ is not closed ([1.3](lessons/01-03-topological-spaces-axioms.md), [5.1](lessons/05-01-separation-axioms-hausdorff.md)) |
| **Line with two origins** | two copies of $\mathbb{R}$ glued along every nonzero point | locally Euclidean, first countable, path-connected | a **quotient of a Hausdorff space that is not Hausdorff** — the two origins have no disjoint neighborhoods ([2.4](lessons/02-04-quotient-topology.md)) |
| **Subspace** $\tau_A=\{A\cap U\}$ | trace ambient opens onto $A$; coarsest making $\iota$ continuous | inherits $T_0,T_1,T_2$, metrizable, second/first countable; transitive; closed subsets inherit compactness | "open in $A$" does **not** mean "open in $X$" ($[0,\tfrac12)\subseteq[0,1]$); normality, Lindelöf, separability, connectedness and compactness can all fail downward ([2.2](lessons/02-02-subspace-topology.md), [5.2](lessons/05-02-normal-spaces-urysohn.md)) |
| **Product** $\prod_\alpha X_\alpha$ | coarsest making every $\pi_\beta$ continuous; only finitely many coordinates constrained | preserves $T_2$, compactness (Tychonoff), connectedness, path-connectedness; countable products preserve metrizability and second countability | the **box** topology on the same set breaks the diagonal map and Tychonoff; normality and Lindelöf fail (Sorgenfrey plane) ([2.3](lessons/02-03-product-topology.md), [4.4](lessons/04-04-tychonoff-theorem.md)) |
| **Quotient** $X/\!\sim$ | finest making $q$ continuous; glue by an equivalence relation | preserves compactness, connectedness, path-connectedness (continuous images) | destroys Hausdorffness (line with two origins); $q$ is generally **neither open nor closed** ([2.4](lessons/02-04-quotient-topology.md)) |

Gluings worth having memorized, all from the square $[0,1]^2$ ([2.4](lessons/02-04-quotient-topology.md)):
cylinder $(x,0)\sim(x,1)$ · torus also $(0,y)\sim(1,y)$, homeomorphic to $S^1\times S^1$ ·
Möbius band $(x,0)\sim(1-x,1)$ (a flip) · $\mathbb{RP}^n = S^n$ with $x\sim -x$ ·
circle $=[0,1]/(0\sim 1)$.

### What survives which construction

Read a row to know whether a property passes to subspaces, to products, and
forward through continuous maps. "Hereditary" means *every* subspace inherits it.

| Property | Hereditary? | Products? | Continuous images? | Fine print |
|---|:---:|:---:|:---:|---|
| **Hausdorff** ($T_2$) | ✓ | ✓ (any number of factors) | ✗ | quotients of Hausdorff spaces can fail it — line with two origins ([5.1](lessons/05-01-separation-axioms-hausdorff.md), [2.4](lessons/02-04-quotient-topology.md)) |
| **Compact** | ✗ | ✓ **Tychonoff** (any index set, product topology) | ✓ | ✓ for **closed** subspaces; a compact subset of a Hausdorff space is closed ([4.1](lessons/04-01-compactness-open-covers.md), [4.4](lessons/04-04-tychonoff-theorem.md)) |
| **Connected** | ✗ | ✓ | ✓ | survives closure: $A\subseteq B\subseteq\overline A$ with $A$ connected $\Rightarrow$ $B$ connected ([3.1](lessons/03-01-connectedness.md)) |
| **Path-connected** | ✗ | ✓ | ✓ | implies connected, never the converse ([3.2](lessons/03-02-path-connectedness-components.md), [3.3](lessons/03-03-connectedness-applications.md)) |
| **Metrizable** | ✓ | ✓ for **countable** products only | ✗ | $\{0,1\}^{\mathbb{R}}$ is compact Hausdorff yet not metrizable (not first countable) ([5.4](lessons/05-04-metrization.md)) |
| **Second countable** | ✓ | ✓ for **countable** products only | ✗ | forces first countable + separable + Lindelöf ([5.3](lessons/05-03-countability-separability.md)) |
| First countable | ✓ | ✓ countable products | ✗ | the license to use sequences ([5.3](lessons/05-03-countability-separability.md)) |
| Separable | ✗ | ✓ countable products (and the Sorgenfrey plane) | ✓ | fails for subspaces — the Sorgenfrey plane's anti-diagonal ([5.3](lessons/05-03-countability-separability.md)) |
| Lindelöf | ✗ (✓ closed subspaces) | ✗ | ✓ | Lindelöf + regular $\Rightarrow$ normal ([5.3](lessons/05-03-countability-separability.md)) |
| Normal ($T_4$) | ✗ (✓ closed subspaces) | ✗ | ✗ | the fragile one — Sorgenfrey plane is the standing witness ([5.2](lessons/05-02-normal-spaces-urysohn.md)) |

### Other standing counterexamples

| Specimen | What it kills |
|---|---|
| $\mathbb{Q}\subseteq\mathbb{R}$ | dense and gapless to the eye, yet **totally disconnected** (components are points) and **not locally compact** ([3.1](lessons/03-01-connectedness.md), [4.5](lessons/04-05-local-compactness-compactification.md)) |
| Topologist's sine curve $S=\{(x,\sin(1/x)):0<x\le1\}\cup(\{0\}\times[-1,1])$ | **connected but not path-connected** (and not locally connected) ([3.2](lessons/03-02-path-connectedness-components.md)) |
| $(0,1)$ with cover $\{(1/n,1)\}$; $\mathbb{R}$ with $\{(-n,n)\}$ | the two leaky covers that prove non-compactness on demand ([4.1](lessons/04-01-compactness-open-covers.md)) |
| Closed unit ball of $\ell^2$; the vectors $e_n$ sit $\sqrt2$ apart | **closed and bounded but not compact** — Heine–Borel is a finite-dimensional miracle ([4.2](lessons/04-02-compactness-metric-spaces.md), [4.3](lessons/04-03-heine-borel-continuous-maps.md)) |
| $f:[0,2\pi)\to S^1$, $t\mapsto(\cos t,\sin t)$ | a **continuous bijection that is not a homeomorphism** — the domain isn't compact ([2.1](lessons/02-01-continuity-and-homeomorphisms.md), [4.3](lessons/04-03-heine-borel-continuous-maps.md)) |
| $N=\{(x,y):\lvert x\rvert<1/(1+y^2)\}$ in $\mathbb{R}^2$ | an open set around a whole slice containing **no tube** — the tube lemma needs a compact factor ([4.4](lessons/04-04-tychonoff-theorem.md)) |
| $\{0,1\}^{\mathbb{R}}$ | compact Hausdorff and normal, yet **not first countable**, hence not metrizable ([5.4](lessons/05-04-metrization.md)) |
| Figure-eight (two circles joined at a point) | $\pi_1$ need **not be abelian** — it is free on two generators ([6.2](lessons/06-02-the-fundamental-group.md)) |

### Generating and comparing topologies

$$\tau \text{ generated by } \mathcal{B}: \quad U\in\tau \iff \forall x\in U\ \exists B\in\mathcal{B}:\ x\in B\subseteq U \iff U \text{ is a union of basis elements}$$

**Basis criterion.** For $\mathcal{B}$ generating $\tau$ and $\mathcal{B}'$ generating $\tau'$ on the same set,

$$\tau\subseteq\tau' \iff \forall B\in\mathcal{B},\ \forall x\in B,\ \exists B'\in\mathcal{B}':\ x\in B'\subseteq B.$$

Finer means *smaller blocks near each point*, hence **more** open sets. The same
topology has many bases (rational-endpoint intervals also generate standard $\mathbb{R}$).
Worked verdict: $\tau_{\text{standard}}\subsetneq\tau_\ell$, since $[x,b)\subseteq(a,b)$ but no interval around $0$ fits in $[0,1)$.

*From* [1.3](lessons/01-03-topological-spaces-axioms.md) *and* [1.4](lessons/01-04-bases-and-subbases.md)

### Interior, closure, boundary — the working identities

$$x\in\overline A \iff \text{every open } U\ni x \text{ meets } A \qquad\qquad \overline A = A\cup A'$$
$$A \text{ closed} \iff A'\subseteq A \iff A=\overline A \qquad\qquad X\setminus A^\circ=\overline{X\setminus A}$$
$$\partial A=\overline A\setminus A^\circ=\overline A\cap\overline{X\setminus A}=\partial(X\setminus A) \qquad\qquad A \text{ dense} \iff \overline A = X$$

Closure in a subspace: $\overline{C}^{\,A}=\overline{C}\cap A$. Sample readings of the same set
$A=(0,1)$: in standard $\mathbb{R}$, $A^\circ=(0,1)$, $\overline A=[0,1]$, $\partial A=\{0,1\}$; in the cofinite
topology on $\mathbb{R}$, $A^\circ=\varnothing$, $\overline A=\mathbb{R}$, $\partial A=\mathbb{R}$. In the discrete topology every $A$
has $A^\circ=\overline A=A$, $\partial A=A'=\varnothing$.

*From* [1.5](lessons/01-05-closure-interior-boundary.md)

### Continuity — equivalent forms and how to build maps

| Form | Statement |
|---|---|
| definition | $f^{-1}(V)$ open for every open $V$ |
| closed-set form | $f^{-1}(C)$ closed for every closed $C$ |
| closure form | $f(\overline A)\subseteq\overline{f(A)}$ for every $A\subseteq X$ |
| pointwise form | $\forall$ open $V\ni f(x)$, $\exists$ open $U\ni x$ with $f(U)\subseteq V$ — the $\varepsilon$–$\delta$ cousin |
| metric case | the topological definition **is** $\varepsilon$–$\delta$: open $V$ around $f(x)$ plays the $\varepsilon$-ball, "$f^{-1}(V)$ open" plays "a $\delta$ exists" |

Cheap constructions: constants and $\mathrm{id}$ are continuous; composites of continuous maps
are continuous; restrictions $f|_A=f\circ\iota$ are continuous; a map **into** a product is
continuous iff every coordinate is; a map **out of** a quotient is continuous iff it
is continuous after precomposing with $q$; and the **pasting lemma** — a map
continuous on each of two closed sets covering the space, agreeing on the overlap,
is continuous on the union.

*From* [2.1](lessons/02-01-continuity-and-homeomorphisms.md), [2.2](lessons/02-02-subspace-topology.md), [2.3](lessons/02-03-product-topology.md), [2.4](lessons/02-04-quotient-topology.md), [6.1](lessons/06-01-homotopy-of-paths.md)

### The three constructions, side by side

| Construction | Defined as | Extremal characterization | Universal property |
|---|---|---|---|
| subspace $A\subseteq X$ | $\{A\cap U\}$ | **coarsest** making $\iota:A\hookrightarrow X$ continuous | $g:Z\to A$ continuous $\iff$ $\iota\circ g$ continuous |
| product $\prod_\alpha X_\alpha$ | subbasis $\{\pi_\beta^{-1}(U)\}$ | **coarsest** making every $\pi_\beta$ continuous | $f:Z\to\prod X_\alpha$ continuous $\iff$ every $\pi_\alpha\circ f$ continuous |
| quotient $X/\!\sim$ | $\{V: q^{-1}(V) \text{ open}\}$ | **finest** making $q$ continuous | $g:Y\to Z$ continuous $\iff$ $g\circ q$ continuous |

Products govern maps *in*; quotients govern maps *out*. To define a map out of a
glued space, write it on $X$ and check it is constant on each glued class.
If $A$ is open in $X$, "open in $A$" upgrades to "open in $X$" (same for closed).

*From* [2.2](lessons/02-02-subspace-topology.md), [2.3](lessons/02-03-product-topology.md), [2.4](lessons/02-04-quotient-topology.md)

### Connectedness toolkit

| Fact | Use |
|---|---|
| $X$ connected $\iff$ only clopen sets are $\varnothing,X$ $\iff$ every continuous $f:X\to\{0,1\}$ (discrete) is constant | three interchangeable ways to run the proof |
| the connected subsets of $\mathbb{R}$ are exactly the **intervals** | needs the least-upper-bound property |
| continuous image of connected is connected | connectedness can't be torn by a map |
| **gluing lemma**: connected sets sharing a common point have connected union | build big connected sets out of small ones |
| $A$ connected and $A\subseteq B\subseteq\overline A$ $\Rightarrow$ $B$ connected | how the topologist's sine curve is proved connected |
| path-connected $\Rightarrow$ connected; convex $\Rightarrow$ path-connected | the everyday supply of connected spaces |
| components partition $X$ and are closed; path components refine them | they coincide when the space is locally path-connected |

**Generalized IVT.** $X$ connected and $f:X\to\mathbb{R}$ continuous $\Rightarrow$ $f(X)$ is an interval:
$f$ attains every value between any two it attains. The classical IVT is the case $X=[a,b]$.
Two standard cash-outs: every continuous $f:[0,1]\to[0,1]$ has a fixed point (apply
it to $g(x)=f(x)-x$), and every continuous $f:S^1\to\mathbb{R}$ has an antipodal pair with
$f(x)=f(-x)$ (apply it to $g(x)=f(x)-f(-x)$, which is odd — 1-D Borsuk–Ulam).
**Removing points** is the invariant machine: $\mathbb{R}\setminus\{0\}$ is disconnected while
$\mathbb{R}^2\setminus\{p\}$ is not, so $\mathbb{R}\not\cong\mathbb{R}^2$; $S^1$ has no cut point while $[0,1]$ does, so $[0,1]\not\cong S^1$.

*From* [3.1](lessons/03-01-connectedness.md), [3.2](lessons/03-02-path-connectedness-components.md), [3.3](lessons/03-03-connectedness-applications.md), [2.5](lessons/02-05-topological-properties-invariants.md)

### Compactness toolkit

| Theorem | Statement | Hypothesis that does the work |
|---|---|---|
| closed-in-compact | a closed subset of a compact space is compact | enlarge the cover by the complement, then discard it |
| compact-in-Hausdorff | a compact subset of a Hausdorff space is closed | **finite** intersection of the point's neighborhoods |
| continuous image | $X$ compact, $f$ continuous $\Rightarrow$ $f(X)$ compact | pull the cover back through $f^{-1}$ |
| finite unions | $K_1,K_2$ compact $\Rightarrow$ $K_1\cup K_2$ compact | fails for infinite unions |
| **tube lemma** | $Y$ compact, $N$ open $\supseteq\{x_0\}\times Y$ $\Rightarrow$ $N$ contains a tube $W\times Y$ | compactness of $Y$; false without it |
| **Tychonoff** | any product of compact spaces is compact in the **product** topology | equivalent to the axiom of choice; false for the box topology |
| **Heine–Borel** | $K\subseteq\mathbb{R}^n$ compact $\iff$ closed and bounded | finite dimension; the $[a,b]$ case needs the lub property |
| **Extreme Value Theorem** | $X$ compact, $f:X\to\mathbb{R}$ continuous $\Rightarrow$ $f$ attains a max and a min | compact domain **and** continuity — neither alone |
| **compact-to-Hausdorff** | continuous bijection from compact to Hausdorff is a homeomorphism | closed $\to$ compact $\to$ compact $\to$ closed |
| **Heine–Cantor** | continuous on a compact metric space $\Rightarrow$ uniformly continuous | Lebesgue number lemma supplies one global $\delta$ |
| **Lebesgue number lemma** | compact metric + open cover $\Rightarrow$ some $\delta>0$ with every set of diameter $<\delta$ inside one cover member | "small enough" becomes a uniform size |

**In a metric space only:**

$$\text{compact} \iff \text{sequentially compact} \iff \text{complete} + \text{totally bounded}$$

Drop either dial and it dies: $\mathbb{R}$ is complete but not totally bounded; $(0,1)$ is
totally bounded but not complete. Beyond metric spaces the covering and sequential
notions genuinely differ.

*From* [4.1](lessons/04-01-compactness-open-covers.md), [4.2](lessons/04-02-compactness-metric-spaces.md), [4.3](lessons/04-03-heine-borel-continuous-maps.md), [4.4](lessons/04-04-tychonoff-theorem.md)

### The separation ladder

| Rung | What gets separated by disjoint opens | Key equivalent or payoff |
|---|---|---|
| $T_0$ | some open set contains exactly one of $x,y$ | the topology at least notices they differ |
| $T_1$ | each of $x,y$ has an open set missing the other | $\iff$ every singleton $\{x\}$ is closed |
| $T_2$ Hausdorff | $x$ and $y$ in **disjoint** opens | $\Rightarrow$ limits are unique; compact subsets are closed |
| $T_3$ regular | a point and a disjoint closed set ($+T_1$) | regular + second countable $\Rightarrow$ normal |
| $T_4$ normal | two disjoint closed sets ($+T_1$) | $\iff$ Urysohn functions exist; gives Tietze |

$T_2\Rightarrow T_1\Rightarrow T_0$, all strictly (cofinite is $T_1$ not $T_2$; Sierpiński is $T_0$ not $T_1$).
Two big supplies of normality: **every metric space** (put each point on the side of
the nearer closed set, using $d(x,A)$) and **every compact Hausdorff space** (run the
finite-subcover separation twice — point vs. compact, then compact vs. compact).

**Urysohn's lemma.** $X$ is normal $\iff$ for all disjoint closed $A,B$ there is a
continuous $f:X\to[0,1]$ with $f\equiv 0$ on $A$ and $f\equiv 1$ on $B$. (Built by nesting
open buffers indexed by dyadic rationals and reading off the altitude at which the
buffers first swallow a point. It does not promise $A=f^{-1}(0)$.)

**Tietze extension.** $X$ normal, $C\subseteq X$ closed $\Rightarrow$ every continuous $g:C\to\mathbb{R}$ extends
continuously to all of $X$, with the same bounds.

*From* [5.1](lessons/05-01-separation-axioms-hausdorff.md), [5.2](lessons/05-02-normal-spaces-urysohn.md)

### Countability and metrization

$$\text{second countable} \Rightarrow \text{first countable},\ \text{separable},\ \text{Lindelöf}$$
$$\text{in a metric space:}\quad \text{second countable} \iff \text{separable} \iff \text{Lindelöf}$$

**First countable $\Rightarrow$ sequences suffice:** $x\in\overline A$ iff some sequence in $A$ converges
to $x$. Without it you need **nets**.

**Necessary for metrizability:** Hausdorff, normal, first countable. Failing any one
is an instant disqualification — that is the fastest diagnostic on the card.

**Urysohn metrization theorem.** Second countable $+$ regular $+$ Hausdorff $\Rightarrow$ metrizable.
Proof shape: Urysohn's lemma manufactures countably many coordinate functions $f_n$
that separate points from closed sets; then $F(x)=(f_1(x),f_2(x),\dots)$ embeds $X$ in the
**Hilbert cube** $[0,1]^\omega$, which carries the metric

$$d(\mathbf a,\mathbf b)=\sum_{n=1}^{\infty}2^{-n}\lvert a_n-b_n\rvert,$$

under which convergence is exactly coordinatewise. Sufficient, not necessary — an
uncountable discrete space is metrizable without a countable basis; the honest
"if and only if" is **Nagata–Smirnov** (regular Hausdorff with a $\sigma$-locally-finite basis).

*From* [5.3](lessons/05-03-countability-separability.md), [5.4](lessons/05-04-metrization.md)

### Homotopy and the fundamental group

Group laws in $\pi_1(X,x_0)$, all proved by "same route, different clock" reparametrizations:

$$[e_{x_0}][\gamma]=[\gamma]=[\gamma][e_{x_0}],\qquad [\gamma][\bar\gamma]=[e_{x_0}],\qquad ([\gamma][\delta])[\eta]=[\gamma]([\delta][\eta])$$

**Change of basepoint.** A path $\alpha$ from $x_0$ to $x_1$ gives an isomorphism
$\hat\alpha([\gamma])=[\alpha\cdot\gamma\cdot\bar\alpha]$ — so on a path-connected space $\pi_1(X)$ is well defined up to isomorphism.

**Functoriality** (the whole engine of Module 6):

$$(\mathrm{id}_X)_* = \mathrm{id}_{\pi_1(X,x_0)},\qquad (g\circ f)_* = g_*\circ f_*,\qquad f_*[\gamma]=[f\circ\gamma]$$

Consequences: a homeomorphism induces an isomorphism, so **different $\pi_1$ proves
not homeomorphic**; homotopic maps induce the same $f_*$, so homotopy equivalence
(in particular a deformation retract) already forces isomorphic $\pi_1$; and equal $\pi_1$
proves nothing.

| Space | $\pi_1$ | Why |
|---|---|---|
| convex subset of $\mathbb{R}^n$, $\mathbb{R}^n$, $D^2$ | $0$ | straight-line homotopy contracts every loop |
| any contractible space | $0$ | $\mathrm{id}\simeq$ constant, and $c_*$ is trivial |
| $S^1$ | $\mathbb{Z}$ | winding number; generated by the once-around loop |
| annulus, $\mathbb{R}^2\setminus\{0\}$ | $\mathbb{Z}$ | each deformation-retracts onto $S^1$ |
| torus $S^1\times S^1$ | $\mathbb{Z}\times\mathbb{Z}$ | $\pi_1(X\times Y)\cong\pi_1(X)\times\pi_1(Y)$ |
| $S^n$, $n\ge2$ | $0$ | stated, not proved here |
| figure-eight | free group on two generators | non-abelian |

**Computing $\pi_1(S^1)=\mathbb{Z}$.** Lift through $p(t)=e^{2\pi i t}$: every loop $\gamma$ at $1$ has a unique
lift $\tilde\gamma$ with $\tilde\gamma(0)=0$, and $\deg[\gamma]=\tilde\gamma(1)\in p^{-1}(1)=\mathbb{Z}$. It is well defined (homotopies
lift, and a continuous path inside the discrete fibre is constant), additive
(shift the second lift up by the first's endpoint), surjective ($t\mapsto nt$), and
injective ($\mathbb{R}$ is convex, so equal endpoints give a straight-line homotopy, then push down by $p$).

**The three payoffs**, all the single fact that $\mathbb{Z}\to 0\to\mathbb{Z}$ cannot be $\mathrm{id}_{\mathbb{Z}}$:

- **No-retraction.** No continuous $r:D^2\to S^1$ fixes $S^1$ pointwise — $r\circ i=\mathrm{id}_{S^1}$ would give $r_*\circ i_*=\mathrm{id}_\mathbb{Z}$ through the trivial group.
- **Brouwer (2-D).** Every continuous $f:D^2\to D^2$ has a fixed point — otherwise the ray from $f(x)$ through $x$ builds the forbidden retraction.
- **Fundamental Theorem of Algebra.** If $p$ never vanished, the loops $\gamma_R(t)=p(Re^{2\pi it})$ would all be homotopic in $\mathbb{C}\setminus\{0\}$, forcing winding number $0$ (at $R=0$) to equal $n$ (for large $R$).

*From* [6.1](lessons/06-01-homotopy-of-paths.md), [6.2](lessons/06-02-the-fundamental-group.md), [6.3](lessons/06-03-fundamental-group-of-circle.md), [6.4](lessons/06-04-induced-homomorphisms-invariance.md), [6.5](lessons/06-05-fixed-points-applications.md)

## Assumed, not taught here

This is a Tier 1 course: it generalizes `real-analysis` rather than re-deriving it,
and Module 6 borrows group vocabulary wholesale.

| Fact | Where it's taught |
|---|---|
| Least-upper-bound property (completeness of $\mathbb{R}$) — the step in "$[a,b]$ is compact" and "intervals are connected" | [real-analysis 1.2](../real-analysis/lessons/01-02-suprema-infima-completeness.md) |
| Archimedean property and density of $\mathbb{Q}$ in $\mathbb{R}$ | [real-analysis 1.3](../real-analysis/lessons/01-03-consequences-of-completeness.md) |
| Countable sets; a finite or countable union of countable sets is countable; $\mathbb{R}$ is uncountable | [real-analysis 1.4](../real-analysis/lessons/01-04-countable-and-uncountable.md) |
| $\varepsilon$–$\delta$ limits and continuity on $\mathbb{R}$ (recovered from the open-set definition in 2.1) | [real-analysis 5.1](../real-analysis/lessons/05-01-limits-and-continuity.md) |
| Cauchy sequences and completeness | [real-analysis 2.4](../real-analysis/lessons/02-04-cauchy-sequences.md) |
| Bolzano–Weierstrass (the sequential-compactness ancestor) | [real-analysis 2.3](../real-analysis/lessons/02-03-subsequences-bolzano-weierstrass.md) |
| Open sets, closed sets, and limit points on the real line; Heine–Borel on $\mathbb{R}$ | [real-analysis 4.1](../real-analysis/lessons/04-01-open-closed-limit-points.md), [4.2](../real-analysis/lessons/04-02-compactness-heine-borel.md) |
| Classical IVT; EVT and uniform continuity on compact sets | [real-analysis 5.3](../real-analysis/lessons/05-03-intermediate-value-theorem.md), [5.2](../real-analysis/lessons/05-02-continuity-on-compact-sets.md) |
| Uniform convergence as convergence in the sup metric | [real-analysis 8.1](../real-analysis/lessons/08-01-pointwise-vs-uniform.md) |
| Proof by contradiction and contrapositive (nearly every proof here is one) | [proofs-primer 2.2](../proofs-primer/lessons/02-02-contrapositive-and-contradiction.md) |
| Set algebra, De Morgan, the element method | [proofs-primer 3.1](../proofs-primer/lessons/03-01-sets-and-element-method.md) |
| Injections, surjections, bijections, and preimages | [proofs-primer 3.2](../proofs-primer/lessons/03-02-functions-injective-surjective-bijective.md) |
| Equivalence relations, classes, and partitions (the input to every quotient) | [discrete-mathematics 2.2](../discrete-mathematics/lessons/02-02-relations-equivalence-and-order.md) |
| Group axioms, identity, inverses, abelian; what "free group" means | [abstract-algebra 1.1](../abstract-algebra/lessons/01-01-group-axioms-first-examples.md) |
| $\mathbb{Z}$ under addition as the infinite cyclic group | [abstract-algebra 1.2](../abstract-algebra/lessons/01-02-cyclic-groups-order.md) |
| Homomorphism, isomorphism, the trivial group, the zero map | [abstract-algebra 2.1](../abstract-algebra/lessons/02-01-homomorphisms-kernels-images.md) |
| The complex exponential $e^{2\pi i t}$ and $\lvert z\rvert$ | [complex-analysis 1.1](../complex-analysis/lessons/01-01-complex-numbers-geometry.md), [1.3](../complex-analysis/lessons/01-03-exponential-log-trig.md) |
| Winding number as the argument principle's integer | [complex-analysis 6.3](../complex-analysis/lessons/06-03-argument-principle-rouche.md) |
| The axiom of choice (Tychonoff is equivalent to it) | [mathematical-logic 3.4](../mathematical-logic/lessons/03-04-axiom-of-choice.md) |
| Norms, $\lVert x\rVert$, and $\mathbb{R}^n$ as an inner-product space | [linalg-refresher 1.1](../linalg-refresher/lessons/01-01-vectors-span-linear-combinations.md), [4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) |
| $\ell^2$ and infinite-dimensional normed spaces (the non-compact closed ball) | [functional-analysis 1.3](../functional-analysis/lessons/01-03-standard-examples-lp-c-lp.md), [1.4](../functional-analysis/lessons/01-04-finite-vs-infinite-dimensions.md) |

## Pitfalls

### "Open" is never absolute

- Openness is a property of the **pair** (set, topology) — and of the ambient space. $\{0\}$ is open in the discrete topology and not in standard $\mathbb{R}$; $[0,\tfrac12)$ is open in $[0,1]$ and not in $\mathbb{R}$. Always say "open *in* ___". *([1.2](lessons/01-02-open-sets-metric-topology.md), [1.3](lessons/01-03-topological-spaces-axioms.md), [2.2](lessons/02-02-subspace-topology.md))*
- Interior, closure, boundary, and limit points shift with the topology too: $\overline{(0,1)}$ is $[0,1]$ in standard $\mathbb{R}$ and all of $\mathbb{R}$ in the cofinite topology. *([1.5](lessons/01-05-closure-interior-boundary.md))*
- "Open in $A$" upgrades to "open in $X$" only when $A$ is itself open in $X$. The subspace topology is not "the ambient opens that happen to fit inside $A$" — you must intersect. *([2.2](lessons/02-02-subspace-topology.md))*
- $\tau$ is a set **of sets**: "$U\in\tau$" and "$x\in U$" are different levels of membership. *([1.3](lessons/01-03-topological-spaces-axioms.md))*

### Axioms, bases, and metrics

- Intersections of opens stay open only for **finitely many**: $\bigcap_n(-1/n,1/n)=\{0\}$ is the standing counterexample, in both the metric and axiomatic settings. *([1.2](lessons/01-02-open-sets-metric-topology.md), [1.3](lessons/01-03-topological-spaces-axioms.md))*
- Don't assume a ball is round — under $d_1$ it's a diamond, under $d_\infty$ a square, under the discrete metric $B(x,1)=\{x\}$ while $B(x,2)=X$. *([1.1](lessons/01-01-metric-spaces.md))*
- Metric axiom (M1) is an **iff**; drop positive-definiteness and you have a pseudometric where distinct points sit at distance zero. *([1.1](lessons/01-01-metric-spaces.md))*
- Very different distances can define the identical topology ($d_1,d_2,d_\infty$), and topology cannot see the difference. *([1.2](lessons/01-02-open-sets-metric-topology.md))*
- A basis is not the topology — you still take unions. And (B2) says every *point* of an overlap has a block inside it, not that the overlap is a block. *([1.4](lessons/01-04-bases-and-subbases.md))*
- Finer means **more** open sets, even though the blocks get smaller. *([1.3](lessons/01-03-topological-spaces-axioms.md), [1.4](lessons/01-04-bases-and-subbases.md))*
- "$x\in\overline A$" requires **every** neighborhood to meet $A$, not some. And a limit point need not lie in $A$, while a point of $A$ (like an isolated one) need not be a limit point. *([1.5](lessons/01-05-closure-interior-boundary.md))*

### Continuity, homeomorphism, invariants

- It is the **preimage** that must stay open. Sending open sets forward is a different property (an open map): $x^2$ maps $(-1,1)$ to $[0,1)$. *([2.1](lessons/02-01-continuity-and-homeomorphisms.md))*
- A continuous bijection need not be a homeomorphism — $[0,2\pi)\to S^1$ tears at the seam. It *is* one when the domain is compact and the target Hausdorff. *([2.1](lessons/02-01-continuity-and-homeomorphisms.md), [4.3](lessons/04-03-heine-borel-continuous-maps.md))*
- "Is $f$ continuous?" is meaningless until **both** topologies are named; the same set-map flips verdict when you swap them. *([2.1](lessons/02-01-continuity-and-homeomorphisms.md))*
- Homeo**morphism** (spaces) is not homo**morphism** (groups) — and in Module 6 the first induces the second. *([2.1](lessons/02-01-continuity-and-homeomorphisms.md))*
- Boundedness, completeness, and diameter are facts about a *metric*, not invariants: $(0,1)\cong\mathbb{R}$ disagrees on both. *([2.5](lessons/02-05-topological-properties-invariants.md))*
- Failing to find a distinguishing invariant proves nothing — it means your kit is too weak, which is why $\pi_1$ exists. Match the number of deleted points on each side of a cut-point argument. *([2.5](lessons/02-05-topological-properties-invariants.md), [3.3](lessons/03-03-connectedness-applications.md), [6.4](lessons/06-04-induced-homomorphisms-invariance.md))*

### Building new spaces

- In the product topology a basic open set constrains only **finitely many** coordinates; open rectangles are a basis, not the open sets. The box topology is a cautionary example, never the default. *([2.3](lessons/02-03-product-topology.md))*
- Quotient maps are continuous by construction and nothing more — generally neither open nor closed. *([2.4](lessons/02-04-quotient-topology.md))*
- Gluing destroys good behavior: a quotient of $\mathbb{R}$ can fail Hausdorff (line with two origins). Niceness is not inherited downward. *([2.4](lessons/02-04-quotient-topology.md))*
- Defining a map on a quotient by "choosing a representative" requires checking that glued points get equal values — define on $X$, verify constancy on classes, descend. *([2.4](lessons/02-04-quotient-topology.md))*
- "The glued square **is** $S^1\times S^1$" is a theorem (via compact-to-Hausdorff), not a definition. *([2.4](lessons/02-04-quotient-topology.md), [4.3](lessons/04-03-heine-borel-continuous-maps.md))*

### Connectedness

- A separation needs all four conditions — nonempty, disjoint, **open**, covering. $[0,1]\cup(1,2]$ splits $[0,2]$ into disjoint covering pieces but $[0,1]$ isn't open there. *([3.1](lessons/03-01-connectedness.md))*
- "No visible gap" does not mean connected: $\mathbb{Q}$ is dense in $\mathbb{R}$ and totally disconnected. *([3.1](lessons/03-01-connectedness.md))*
- Connected does not imply path-connected (topologist's sine curve); the implication runs one way only. *([3.2](lessons/03-02-path-connectedness-components.md))*
- Components are always closed but not always open. A path is a **map**, not the curve it traces. *([3.2](lessons/03-02-path-connectedness-components.md))*
- The IVT needs the **domain** connected — $1/x$ on $\mathbb{R}\setminus\{0\}$ takes $-1$ and $+1$ and never $0$ — and it gives existence only, never a location or a count. *([3.3](lessons/03-03-connectedness-applications.md))*

### Compactness

- Exhibiting one finite cover proves nothing; **every** cover must have a finite **sub**cover drawn from that cover. Non-compactness, by contrast, is proved by one leaky cover. *([4.1](lessons/04-01-compactness-open-covers.md))*
- "Compact $\Rightarrow$ closed" needs Hausdorff; "closed and bounded $\Rightarrow$ compact" is Heine–Borel and needs finite dimension. Closed alone and bounded alone give nothing. *([4.1](lessons/04-01-compactness-open-covers.md), [4.2](lessons/04-02-compactness-metric-spaces.md), [4.3](lessons/04-03-heine-borel-continuous-maps.md))*
- Bounded is not totally bounded ("one ball of some radius" vs. "finitely many balls of every radius"), and completeness alone is not compactness — $\mathbb{R}$ is complete and wildly non-compact. *([4.2](lessons/04-02-compactness-metric-spaces.md))*
- Sequential and covering compactness agree **for metric spaces only** — that's a theorem, not a definition. *([4.1](lessons/04-01-compactness-open-covers.md), [4.2](lessons/04-02-compactness-metric-spaces.md))*
- EVT needs compactness *and* continuity; uniform continuity needs a compact domain ($1/x$ on $(0,1)$ is continuous, not uniformly so). *([4.3](lessons/04-03-heine-borel-continuous-maps.md))*
- Tychonoff is false in the box topology and has no cardinality limit in the product topology; the tube lemma needs one factor **compact**. *([4.4](lessons/04-04-tychonoff-theorem.md))*
- Locally compact means compact **neighborhood**, not compact space, and it is genuinely restrictive: $\mathbb{Q}$ and infinite-dimensional function spaces fail it. $X^+$ is Hausdorff only when $X$ is locally compact Hausdorff, and adding one point can change the global shape entirely. *([4.5](lessons/04-05-local-compactness-compactification.md))*

### Separation, countability, metrization

- $T_1$ (points closed) is **not** enough for unique limits — cofinite on $\mathbb{N}$ is $T_1$ and $x_n=n$ converges to everything. Hausdorff means *disjoint*, not merely distinct, neighborhoods. *([5.1](lessons/05-01-separation-axioms-hausdorff.md))*
- Normal separates disjoint **closed sets**; point-vs-closed is regular, point-vs-point is Hausdorff. And normality is the fragile axiom — not hereditary, not productive (Sorgenfrey plane). *([5.2](lessons/05-02-normal-spaces-urysohn.md), [5.3](lessons/05-03-countability-separability.md))*
- Urysohn's function is $0$ **on** $A$ and $1$ **on** $B$; it may also take those values elsewhere. *([5.2](lessons/05-02-normal-spaces-urysohn.md))*
- Separable $\Rightarrow$ second countable is a metric-space privilege; the Sorgenfrey line breaks it in general. *([5.3](lessons/05-03-countability-separability.md), [5.4](lessons/05-04-metrization.md))*
- Sequences test closure and continuity only when the space is **first countable**; otherwise you need nets. *([5.3](lessons/05-03-countability-separability.md))*
- Metrizable names a *topology*, not a metric — many compatible metrics, none canonical. Urysohn's theorem is sufficient, not necessary, and "Hausdorff + normal" without countability is not enough. *([5.4](lessons/05-04-metrization.md))*

### Homotopy and $\pi_1$

- Path homotopy pins the endpoints in **every** frame; drop the pins and any two paths in a path-connected space become homotopic, which detects nothing. *([6.1](lessons/06-01-homotopy-of-paths.md))*
- A homotopy must be continuous **jointly** in $(x,s)$ — sharp frames that jump-cut are not a homotopy. *([6.1](lessons/06-01-homotopy-of-paths.md))*
- Homotopy equivalence is strictly weaker than homeomorphism ($D^2\simeq$ a point, $\mathbb{R}^2\setminus\{0\}\simeq S^1$) — and that weakness is the feature. *([6.1](lessons/06-01-homotopy-of-paths.md), [6.4](lessons/06-04-induced-homomorphisms-invariance.md))*
- Elements of $\pi_1$ are **classes**, not loops: raw concatenation is neither associative nor invertible. $\pi_1$ need not be abelian, and it only sees the basepoint's path component. *([6.2](lessons/06-02-the-fundamental-group.md))*
- The lifted endpoint is an integer only because $\gamma$ is a **loop**, and the lift is unique only once you fix $\tilde\gamma(0)=0$. $\pi_1(S^1)$ is $\mathbb{Z}$, not $\mathbb{Z}/n$ — windings never wrap around. *([6.3](lessons/06-03-fundamental-group-of-circle.md))*
- $\pi_1$ is **covariant**: $f:X\to Y$ gives $f_*:\pi_1(X)\to\pi_1(Y)$, no arrow flip. Different $\pi_1$ proves not-equivalent; equal $\pi_1$ proves nothing. *([6.4](lessons/06-04-induced-homomorphisms-invariance.md))*
- The Brouwer proof here is **2-D only** — higher dimensions need homology or higher homotopy groups. And a fixed point is existence, never a recipe. *([6.5](lessons/06-05-fixed-points-applications.md))*
