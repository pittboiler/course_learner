# Algebraic Topology · Lesson 2.2: The lifting criterion & classification

> ⏱ ~15 min · Module 2: Covering Spaces & Seifert–van Kampen · Builds on: [Lesson 2.1](02-01-covering-spaces-lifting.md) · Unlocks: [Lesson 2.3](02-03-deck-transformations-galois.md)

## Why this matters

Lesson 2.1 gave you the machine — paths and homotopies lift, uniquely, through a covering map. This lesson cashes it out into the single most useful theorem in the subject: a complete dictionary translating **covers of a space** into **subgroups of its fundamental group**. Once you have it, questions about maps and spaces become questions about groups you can actually compute. "Does this map have a continuous logarithm?" becomes "is this subgroup contained in that one?"; "how many connected double covers does a surface have?" becomes "count the index-2 subgroups." This is the topological shadow of Galois theory — subfields of an extension are cover-shaped, and the analogy is exact.

## The idea

Start with the one fact that makes the whole dictionary run. A cover $p\colon \tilde X \to X$ with basepoints $p(\tilde x_0)=x_0$ pushes loops down: a loop in $\tilde X$ maps to a loop in $X$, giving a homomorphism $p_*\colon \pi_1(\tilde X,\tilde x_0)\to \pi_1(X,x_0)$. The picture from 2.1 says **this loses nothing**: if a downstairs loop bounds a disk (is nullhomotopic), lifting that disk shows the upstairs loop already bounded one. So $p_*$ is **injective** — the fundamental group of the cover *is* a subgroup of the fundamental group of the base. Every cover names a subgroup.

Now run it the other way. Which maps into $X$ can I "see" from up in the cover? A map $f\colon Y\to X$ lifts to $\tilde X$ exactly when the loops $Y$ carries, viewed in $X$, are loops the cover can already unwrap — i.e. when $f$'s loops live inside the subgroup $p_*\pi_1(\tilde X)$. That is the **lifting criterion**, and it is nothing more than "a loop lifts to a loop iff it's in the subgroup," extended from loops to whole maps.

Push this to its limit. The cover that unwraps *everything* — where $\tilde X$ has no loops at all, so the subgroup is trivial — is the **universal cover**. It's the biggest cover, it sits over the smallest subgroup, and (by the criterion) it maps onto every other cover. At the other extreme sits $X$ over itself, the trivial one-sheeted cover, over the whole group. In between, each subgroup gets its own cover, and the number of sheets is exactly the **index** of the subgroup. That's the classification theorem.

## The formal version

Throughout, $X$ is path-connected and **locally path-connected** (every neighborhood of a point contains a path-connected open neighborhood) — the standing hypotheses that make covering theory behave. Fix $p\colon (\tilde X,\tilde x_0)\to (X,x_0)$, a covering map of path-connected spaces.

**Proposition (the induced subgroup).** $p_*\colon \pi_1(\tilde X,\tilde x_0)\to\pi_1(X,x_0)$ is **injective**. Hence $H := p_*\pi_1(\tilde X,\tilde x_0)$ is a subgroup of $\pi_1(X,x_0)$ isomorphic to $\pi_1(\tilde X,\tilde x_0)$.

*In words:* the fundamental group of a cover is a copy of a subgroup of the base's fundamental group — the cover's own loops, seen downstairs.

*Proof.* Suppose $[\tilde\gamma]\in\ker p_*$, i.e. the loop $\gamma := p\circ\tilde\gamma$ is nullhomotopic in $X$: there is a homotopy $H_t$ rel endpoints from $\gamma$ to the constant loop $c_{x_0}$. By **homotopy lifting** (2.1) this homotopy lifts to $\tilde H_t$ in $\tilde X$ starting at $\tilde\gamma$. The lift $\tilde H_1$ covers the constant loop $c_{x_0}$; a lift of a constant loop is constant (unique lifting), so $\tilde H_1 = c_{\tilde x_0}$. And $\tilde H_t$ is a homotopy rel endpoints — the endpoints stay in the discrete fiber, so they can't move. Thus $\tilde\gamma\simeq c_{\tilde x_0}$, i.e. $[\tilde\gamma]=1$. $\blacksquare$

**Theorem (Lifting Criterion).** Let $Y$ be path-connected and locally path-connected, and $f\colon (Y,y_0)\to (X,x_0)$ continuous. A lift $\tilde f\colon (Y,y_0)\to(\tilde X,\tilde x_0)$ with $p\circ\tilde f = f$ exists **if and only if**
$$f_*\pi_1(Y,y_0)\ \subseteq\ p_*\pi_1(\tilde X,\tilde x_0).$$
When a lift exists it is **unique** (given the basepoint choice $\tilde f(y_0)=\tilde x_0$).

*In words:* $f$ lifts exactly when every loop $f$ produces downstairs is one the cover can unwrap; there's then only one way to do it.

*Proof.* ($\Rightarrow$) If $f = p\circ\tilde f$ then $f_* = p_*\circ\tilde f_*$, so $\operatorname{im} f_* = p_*(\operatorname{im}\tilde f_*)\subseteq p_*\pi_1(\tilde X,\tilde x_0)$.

($\Leftarrow$) *Define* $\tilde f$. Given $y\in Y$, pick a path $\alpha$ from $y_0$ to $y$ (uses path-connectedness). Then $f\circ\alpha$ is a path in $X$ from $x_0$; lift it (path lifting, 2.1) to a path $\widetilde{f\alpha}$ in $\tilde X$ starting at $\tilde x_0$, and set $\tilde f(y) := \widetilde{f\alpha}(1)$. **Well-defined:** if $\beta$ is another path $y_0\to y$, then $\alpha\cdot\bar\beta$ is a loop at $y_0$, so $[f\circ(\alpha\cdot\bar\beta)]\in f_*\pi_1(Y,y_0)\subseteq H$. Being in $H = p_*\pi_1(\tilde X)$ means this loop lifts to a *loop* at $\tilde x_0$; unwinding, the lifts of $f\alpha$ and $f\beta$ share the same endpoint. **Continuous:** here is where *local* path-connectedness is essential — around any $y$ choose a path-connected neighborhood inside the preimage of an evenly-covered set, and check $\tilde f$ agrees with the local sheet-inverse of $p$ composed with $f$. $\blacksquare$

**Definition (universal cover).** A cover $p\colon\tilde X\to X$ is **universal** if $\tilde X$ is simply connected, equivalently $p_*\pi_1(\tilde X)=\{1\}$.

**Existence.** A universal cover exists iff $X$ is path-connected, locally path-connected, and **semilocally simply connected**: every point has a neighborhood $U$ such that the inclusion-induced $\pi_1(U)\to\pi_1(X)$ is trivial.

*In words:* small loops must already be killable in the big space — no infinitely-fine looping (like the shrinking-circles "Hawaiian earring") allowed. It's the mild finiteness condition that lets you build the one cover with no loops.

By the criterion, a universal cover $\tilde X$ maps to *every* connected cover $\hat X$ (since $\pi_1(\tilde X)=\{1\}$ lands in any subgroup), and that map is itself a covering — this is why "universal": it dominates all others (you prove it in P2).

**Classification Theorem.** Let $X$ be path-connected, locally path-connected, and semilocally simply connected. Then:

- **Based version.** $(\tilde X,\tilde x_0)\ \mapsto\ H = p_*\pi_1(\tilde X,\tilde x_0)$ is a **bijection** between basepoint-preserving isomorphism classes of path-connected covers and **subgroups** $H\le\pi_1(X,x_0)$.
- **Unbased version.** Forgetting basepoints, isomorphism classes of connected covers correspond to **conjugacy classes** of subgroups.
- The **universal cover** $\leftrightarrow$ the **trivial subgroup** $\{1\}$; the identity cover $X\to X$ $\leftrightarrow$ the **whole group**.
- The **number of sheets** of $p$ equals the **index** $[\,\pi_1(X,x_0):p_*\pi_1(\tilde X,\tilde x_0)\,]$.

*In words:* connected covers and subgroups are the same data; moving the basepoint conjugates the subgroup, so unbased covers see only conjugacy classes; and how many times the cover wraps is precisely how many cosets the subgroup has.

*Why sheets = index.* The fiber $p^{-1}(x_0)$ carries a right action of $\pi_1(X,x_0)$: a loop $\gamma$ sends $\tilde x_0$ to the endpoint of the lift of $\gamma$ starting at $\tilde x_0$ (this is the **monodromy** of 2.1). The action is transitive because $\tilde X$ is path-connected, and the stabilizer of $\tilde x_0$ is exactly the set of loops whose lift closes up — i.e. $H = p_*\pi_1(\tilde X,\tilde x_0)$. By orbit–stabilizer the fiber is in bijection with the cosets $H\backslash\pi_1(X,x_0)$, so $|p^{-1}(x_0)| = [\pi_1(X):H]$. $\blacksquare$

## Picture

The cleanest instance is $X = S^1$, where $\pi_1 = \mathbb{Z}$ is abelian, so conjugacy classes *are* subgroups and the dictionary is a clean list. The subgroups of $\mathbb{Z}$ are $\{0\}$ and $n\mathbb{Z}$ for $n\ge 1$; each names exactly one connected cover.

![Correspondence between connected covers of the circle and subgroups of its fundamental group Z: the universal cover R sits over the trivial subgroup with infinitely many sheets, the n-fold cover sits over nZ with n sheets, and the circle itself sits over all of Z with one sheet.](assets/02-02-fig1.svg)

The universal cover $\mathbb{R}\to S^1$ (the exponential map, $t\mapsto e^{2\pi i t}$) sits over $\{0\}$ with infinitely many sheets. The $n$-fold cover $z\mapsto z^n$ sits over $n\mathbb{Z}$ with $n$ sheets — and indeed $[\mathbb{Z}:n\mathbb{Z}]=n$. The identity sits over all of $\mathbb{Z}$. Bigger cover, smaller subgroup, more sheets.

## Worked examples

**Example 1 (the criterion, both verdicts).** Let $p\colon S^1\to S^1$, $p(w)=w^2$ be the double cover, so $p_*\pi_1(S^1) = 2\mathbb{Z}\le\mathbb{Z}$ (going around the cover once wraps the base twice). For a map $f\colon S^1\to S^1$, the criterion reads: $f$ lifts through $p$ iff $f_*\pi_1(S^1)\subseteq 2\mathbb{Z}$, i.e. iff $\deg f$ is even.

- $f(z)=z^4$: $f_*$ is multiplication by $4$, image $4\mathbb{Z}\subseteq 2\mathbb{Z}$. **Lifts.** Construct it: we need $\tilde f$ with $\tilde f(z)^2 = z^4$; take $\tilde f(z)=z^2$, and indeed $p(\tilde f(z)) = (z^2)^2 = z^4 = f(z)$. ✓
- $f(z)=z^3$: image $3\mathbb{Z}\not\subseteq 2\mathbb{Z}$ (e.g. $3\notin 2\mathbb{Z}$). **No lift.** Any candidate $\tilde f$ with $\tilde f^2 = z^3$ would force a continuous square root of an odd power — impossible globally, exactly as the criterion predicts.

**Example 2 (read off the subgroup and sheet count of a concrete cover).** Take $X = S^1\vee S^1$, the wedge of two circles, with $\pi_1(X,x_0) = F_2 = \langle a,b\rangle$, the free group on two generators (proved in [Lesson 2.4](02-04-free-groups-presentations.md); for now, loops around the two circles that don't simplify). Consider the homomorphism $\varphi\colon F_2\to\mathbb{Z}/2$ sending $a\mapsto 1,\ b\mapsto 1$, and the associated cover:

Build a graph with **two vertices** $v_0,v_1$ (labeled by $0,1\in\mathbb{Z}/2$). For each generator $a,b$ put an edge from $v_0$ to $v_1$ *and* one from $v_1$ to $v_0$ (four edges total). Projecting both vertices to $x_0$ and each pair of edges down to the corresponding circle gives a covering map $p\colon \tilde X\to X$.

- **Sheets.** The fiber over $x_0$ is $\{v_0,v_1\}$: **2 sheets**. By the theorem this equals the index $[F_2 : p_*\pi_1(\tilde X)]$, so $p_*\pi_1(\tilde X)$ is an **index-2** subgroup.
- **Which subgroup.** This cover is the one attached to $\varphi$, and $p_*\pi_1(\tilde X,\tilde v_0) = \ker\varphi$: the loops downstairs that lift to loops are exactly the words of *even total length* in $a,b$ (each letter flips the vertex; you return to $v_0$ iff you flipped an even number of times). Index $2$ ✓, matching $|\mathbb{Z}/2|=2$.
- **Bonus (what the cover's own group is).** As a connected graph with $V=2$ vertices and $E=4$ edges, $\tilde X$ is homotopy equivalent to a wedge of $E-V+1 = 3$ circles, so $\pi_1(\tilde X)\cong F_3$ — free of rank $3$. This is the Nielsen–Schreier index formula $\operatorname{rank} = 1 + [\,F_2:H\,](2-1) = 1 + 2 = 3$ in the flesh: **a finite-index subgroup of a free group is free**, and the cover *sees* the rank.

## Watch out

- **You might think $p_*$ could collapse loops** (be non-injective) — but it never does. Injectivity is the whole engine: it's what lets a *cover* stand in for a *subgroup* at all. What $p_*$ can do is fail to be *surjective* — that's the point; the missing loops are the ones that don't close up.
- **You might think the lifting criterion needs $Y$ simply connected.** It doesn't — it works for any path-connected, locally path-connected $Y$; simple connectivity of $Y$ is just the special case where the condition $\{1\}\subseteq H$ holds automatically (so *every* map lifts). Do not, however, drop **local** path-connectedness of $Y$: without it the constructed $\tilde f$ can fail to be continuous.
- **You might conflate the based and unbased pictures.** The clean subgroup bijection is *basepoint-preserving*. Move $\tilde x_0$ within the fiber and the subgroup $H$ changes to a conjugate $gHg^{-1}$. So unbased covers see only **conjugacy classes** — invisible when $\pi_1$ is abelian (as for $S^1$), which is why the circle's list looked so tidy.

## One-liner

> Connected covers *are* subgroups: injective $p_*$ names one, the lifting criterion tests membership in it, the universal cover sits over $\{1\}$, and the sheet count is the index.

## Problems

**P1 (🟢)** Let $p\colon S^1\to S^1$, $p(w)=w^6$. (a) Which subgroup of $\mathbb{Z}=\pi_1(S^1)$ is $p_*\pi_1(S^1)$, and how many sheets does $p$ have? (b) Of the maps $f(z)=z^9$ and $g(z)=z^{10}$, which lifts through $p$? For each one that does, write down an explicit lift $\tilde f$ (or $\tilde g$) and verify $p\circ\tilde f = f$.

**P2 (🟡)** Prove the *universal* property of the universal cover. Let $X$ be path-connected, locally path-connected, semilocally simply connected, let $p\colon(\tilde X,\tilde x_0)\to(X,x_0)$ be its universal cover, and let $q\colon(\hat X,\hat x_0)\to(X,x_0)$ be any connected cover. Show there is a (unique, basepoint-preserving) lift $r\colon(\tilde X,\tilde x_0)\to(\hat X,\hat x_0)$ with $q\circ r = p$. (You do **not** need to prove $r$ is itself a covering map — just produce the map from the lifting criterion.)

**P3 (🔴, optional — bridge to complex analysis)** The exponential $\exp\colon \mathbb{C}\to\mathbb{C}\setminus\{0\}$, $z\mapsto e^{z}$, is the universal cover of $\mathbb{C}\setminus\{0\}$ (note $\mathbb{C}\setminus\{0\}\simeq S^1$, so $\pi_1 = \mathbb{Z}$ counts winding). Let $g\colon S^1\to\mathbb{C}\setminus\{0\}$ be continuous. Use the lifting criterion to prove: **$g$ admits a continuous logarithm** — a continuous $h\colon S^1\to\mathbb{C}$ with $e^{h}=g$ — **if and only if the winding number of $g$ about $0$ is zero.** (This is the argument principle's topological skeleton.)

<details>
<summary>Solutions</summary>

**P1** (a) Going once around the cover $S^1$ maps, under $w\mapsto w^6$, to six times around the base, so $p_*$ sends the generator to $6$: $p_*\pi_1(S^1) = 6\mathbb{Z}$. The number of sheets is $|p^{-1}(1)| = |\{w: w^6=1\}| = 6$, matching the index $[\mathbb{Z}:6\mathbb{Z}]=6$. ✓

(b) The criterion: $f(z)=z^k$ lifts through $p$ iff $f_*\pi_1(S^1)=k\mathbb{Z}\subseteq 6\mathbb{Z}$ iff $6\mid k$.
- $f(z)=z^9$: $6\nmid 9$, so $9\mathbb{Z}\not\subseteq 6\mathbb{Z}$ (e.g. $9\notin 6\mathbb{Z}$). **No lift.**
- $g(z)=z^{10}$: $6\nmid 10$ either ($10\notin 6\mathbb{Z}$). **No lift.**

So *neither* lifts. (The trap is arithmetic: a power $z^k$ lifts through the 6-fold cover only when $6\mid k$ — e.g. $z^{12}$ would, with lift $z^{2}$. Grade yourself on getting the divisibility right, not on producing a lift that cannot exist.)

**P2** By the lifting criterion applied to the map $p\colon(\tilde X,\tilde x_0)\to(X,x_0)$ *as a map into the cover $q$*, a lift $r\colon(\tilde X,\tilde x_0)\to(\hat X,\hat x_0)$ with $q\circ r = p$ exists iff
$$p_*\pi_1(\tilde X,\tilde x_0)\ \subseteq\ q_*\pi_1(\hat X,\hat x_0).$$
We must check the hypotheses and the inclusion. The domain $\tilde X$ is path-connected and locally path-connected (a covering space of a locally path-connected space is locally path-connected, since $p$ is a local homeomorphism). The inclusion is automatic: $\tilde X$ is simply connected (universal cover), so $p_*\pi_1(\tilde X,\tilde x_0) = \{1\}$, which is contained in *every* subgroup, in particular in $q_*\pi_1(\hat X,\hat x_0)$. Hence $r$ exists, and it is unique among basepoint-preserving lifts by the uniqueness clause of the criterion (equivalently, unique lifting from 2.1, since $\tilde X$ is connected). $\blacksquare$

*(Remark: one can further check $r$ is a covering map, which is what makes $\tilde X$ the universal cover of $\hat X$ too — but that wasn't asked.)*

**P3** Set $p=\exp\colon\mathbb{C}\to\mathbb{C}\setminus\{0\}$. Since $\mathbb{C}$ is simply connected, this is the universal cover and $p_*\pi_1(\mathbb{C}) = \{0\}\le\mathbb{Z}=\pi_1(\mathbb{C}\setminus\{0\})$. The domain $S^1$ is path-connected and locally path-connected, so the lifting criterion applies to $g\colon S^1\to\mathbb{C}\setminus\{0\}$: a lift $h\colon S^1\to\mathbb{C}$ with $\exp\circ h = g$ (i.e. $e^{h}=g$, a continuous logarithm of $g$) exists **iff**
$$g_*\pi_1(S^1)\ \subseteq\ p_*\pi_1(\mathbb{C}) = \{0\}.$$
Now $g_*\colon \pi_1(S^1)=\mathbb{Z}\to\pi_1(\mathbb{C}\setminus\{0\})=\mathbb{Z}$ is multiplication by the winding number $n$ of $g$ about $0$ (the induced map on $\pi_1$ of a self-map of the circle-homotopy-type is multiplication by its degree, and here that degree is precisely the winding number — this is the $\pi_1(S^1)\cong\mathbb{Z}$ computation of [Lesson 1.4](01-04-pi1-of-the-circle.md)). Its image is $n\mathbb{Z}$. Thus a continuous logarithm exists iff $n\mathbb{Z}\subseteq\{0\}$ iff $n=0$.

*Reading it back:* winding number $0$ means the loop $g$ never truly encircles the puncture, so you can choose the branch of $\log$ consistently all the way around; a nonzero winding forces the imaginary part of any would-be $\log$ to jump by $2\pi n$ on return — no continuous $h$. This is exactly why $\oint \frac{dz}{z} = 2\pi i\,n$ detects winding in complex analysis. $\blacksquare$

</details>

## Flashback

**From [Lesson 2.1](02-01-covering-spaces-lifting.md) (unique path lifting & monodromy):** For the exponential cover $p\colon\mathbb{R}\to S^1$, $p(t) = (\cos 2\pi t,\ \sin 2\pi t)$, consider the loop $\omega\colon[0,1]\to S^1$, $\omega(s) = (\cos 6\pi s,\ \sin 6\pi s)$ based at $(1,0)$. (a) Find the unique lift $\tilde\omega$ starting at $\tilde\omega(0)=0\in\mathbb{R}$, and give its endpoint $\tilde\omega(1)$. (b) What does the monodromy action of $[\omega]$ do to the fiber point $0$, and what integer does $[\omega]$ correspond to under $\pi_1(S^1)\cong\mathbb{Z}$?

<details>
<summary>Solution</summary>

(a) We need $\tilde\omega$ continuous with $p\circ\tilde\omega = \omega$ and $\tilde\omega(0)=0$. Since $\omega(s) = (\cos 6\pi s,\sin 6\pi s) = p(3s)$, the map $\tilde\omega(s) = 3s$ works: $p(3s) = (\cos 2\pi(3s),\sin 2\pi(3s)) = (\cos 6\pi s,\sin 6\pi s) = \omega(s)$, and $\tilde\omega(0)=0$. By **unique path lifting** this is *the* lift. Its endpoint is $\tilde\omega(1) = 3$.

(b) Monodromy sends the fiber point $0$ to the endpoint of the lift, namely $3$: $0\mapsto 3$ (and every integer $k\mapsto k+3$, since a different starting point just translates the lift). The loop $\omega$ wraps the circle three times counterclockwise, so under $\pi_1(S^1)\cong\mathbb{Z}$ it corresponds to $\mathbf{3}$. This is the winding-number-equals-endpoint-shift principle that Lesson 2.1's monodromy formalizes and this lesson turns into "sheets = index." $\blacksquare$

</details>

## Connections

- **Backward:** the injectivity of $p_*$ and the whole criterion are just [Lesson 2.1](02-01-covering-spaces-lifting.md)'s path- and homotopy-lifting, dressed as a statement about subgroups; the sheets-equals-index count is monodromy plus orbit–stabilizer. The $\pi_1(S^1)\cong\mathbb{Z}$ engine of [Lesson 1.4](01-04-pi1-of-the-circle.md) is what makes every $S^1$ example concrete.
- **Forward:** [Lesson 2.3](02-03-deck-transformations-galois.md) refines the unbased picture — *normal* (regular) covers correspond to *normal* subgroups, and the deck-transformation group realizes the quotient $N(H)/H$, completing the Galois correspondence. [Lesson 2.4](02-04-free-groups-presentations.md) supplies the free group $F_2 = \pi_1(S^1\vee S^1)$ that Example 2 leaned on, and Nielsen–Schreier (finite-index subgroups of free groups are free) is exactly the "finite covers of a wedge of circles are graphs" fact used there.
- **Sideways (complex analysis):** P3 is the topological heart of the **continuous/holomorphic logarithm** and the **argument principle** — a function has a well-defined $\log$ around a loop iff its winding number vanishes, the bridge named explicitly in complex-analysis. The exponential cover $\exp\colon\mathbb{C}\to\mathbb{C}\setminus\{0\}$ is the same $\mathbb{R}\to S^1$ story with the imaginary axis doing the wrapping.
- **Sideways (Galois theory / abstract-algebra):** the classification is a functor turning the subgroup lattice of $\pi_1(X)$ into the lattice of covers of $X$, order-reversed — structurally identical to the Galois correspondence between subgroups of $\operatorname{Gal}(L/K)$ and intermediate fields, with the universal cover playing the role of the algebraic closure.
