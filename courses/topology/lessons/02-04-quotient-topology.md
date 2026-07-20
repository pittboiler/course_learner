# Topology · Lesson 2.4: The quotient topology and gluing

> ⏱ ~15 min · Module 2: Continuity and new spaces from old · Builds on: [2.3](02-03-product-topology.md) · Unlocks: [2.5](02-05-topological-properties-invariants.md)

## Why this matters

The subspace and product topologies build spaces by *restricting* and *multiplying* — but every interesting surface in geometry and physics is built the opposite way, by **gluing**: tape the ends of a strip and you get a cylinder; glue its two boundary circles and you get a torus, the shape of a doughnut and the state space of two independent angles (a double pendulum, a point on a 2-torus phase space). The quotient topology is the single rule that says *which sets are open after you've glued* — it turns "identify these points" from hand-waving into an honest topological space. It is also how the circle $S^1$, the Möbius band, and the projective plane are officially born, and it sets up the fundamental group in Module 6.

## The idea

Take a space and press some of its points together until they become one point. Fold a sheet of paper so two edges land on top of each other; now those two edges *are* the same edge. That merging is a **quotient**.

The only real question is: after gluing, what counts as an "open set"? Here is the honest answer, and it writes itself. A glued space $Y$ sits below the original space $X$, connected by the map $q$ that sends each point of $X$ to whatever it became. A subset $V$ of the glued space $Y$ should be open exactly when its "shadow upstairs" — every point of $X$ that maps into it — is open in $X$. Nothing else could work: $q$ has to be continuous (open downstairs must pull back to open upstairs), and we greedily declare open *everything* that pull-back allows. That greed is the whole definition.

Concretely: the interval $[0,1]$ with its two endpoints declared equal is a circle. A little arc of the circle away from the glue point pulls back to a little arc of the interval — open, fine. A little arc *straddling* the glue point pulls back to **two** half-open pieces, one at each end of $[0,1]$ — and their union is open in $[0,1]$, so that straddling arc is open too. The topology knows the circle has no special "seam." Gluing done right leaves no scar.

## The formal version

**Setup.** Let $X$ be a topological space. Two equivalent ways to describe a gluing:

- A **surjection** $q:X\to Y$ onto a set $Y$ (each point downstairs is the image of at least one point upstairs); or
- An **equivalence relation** $\sim$ on $X$ — a rule for which points are "the same" — with $Y = X/\!\sim$ the set of equivalence classes $[x]=\{x'\in X: x'\sim x\}$, and $q(x)=[x]$ the map sending each point to its class.

These are the same data: a surjection groups $X$ into the fibers $q^{-1}(y)$, which are exactly the classes of an equivalence relation.

**Definition (quotient topology).** Given a surjection $q:X\to Y$ with $X$ a topological space, the **quotient topology** on $Y$ is
$$\tau_Y = \{\, V\subseteq Y : q^{-1}(V) \text{ is open in } X \,\}.$$

> In words: a set downstairs is declared open exactly when its full preimage upstairs is open. A map $q$ that carries the quotient topology this way is called a **quotient map**.

Check the axioms in one line each: $q^{-1}(\varnothing)=\varnothing$ and $q^{-1}(Y)=X$ are open; and $q^{-1}$ commutes with unions and finite intersections ($q^{-1}(\bigcup V_i)=\bigcup q^{-1}(V_i)$, $q^{-1}(V\cap W)=q^{-1}(V)\cap q^{-1}(W)$), so unions and finite intersections of quotient-open sets are quotient-open. It is a genuine topology.

**It is the finest topology making $q$ continuous.** Any topology $\tau'$ on $Y$ for which $q$ is continuous must satisfy: $V\in\tau' \Rightarrow q^{-1}(V)$ open — so $\tau'\subseteq\tau_Y$. The quotient topology *is* the collection of all such allowable opens, so it contains every competitor.

> In words: make $q$ continuous, then keep as many open sets as continuity will possibly allow — that maximum is the quotient topology.

**Universal property (mapping *out* of a quotient).** Let $q:X\to Y$ be a quotient map and $Z$ any space. A function $g:Y\to Z$ is continuous **if and only if** the composite $g\circ q:X\to Z$ is continuous.

> In words: to build a continuous map out of a glued space, build one on the *original* space that gives equal outputs to glued-together points — the gluing is automatically respected, and continuity transfers for free.

*Proof.* ($\Rightarrow$) If $g$ is continuous then $g\circ q$ is a composite of continuous maps, hence continuous. ($\Leftarrow$) Suppose $g\circ q$ is continuous and let $W\subseteq Z$ be open. Then $(g\circ q)^{-1}(W)=q^{-1}\big(g^{-1}(W)\big)$ is open in $X$. By the *definition* of the quotient topology, a subset of $Y$ whose preimage under $q$ is open is itself open — so $g^{-1}(W)$ is open in $Y$. Thus $g$ is continuous. $\blacksquare$

The engine here is exactly the defining biconditional "$V$ open $\iff q^{-1}(V)$ open," run in the reverse direction. Contrast [2.3](02-03-product-topology.md): the product's universal property was about mapping *into* a product (check each coordinate); the quotient's is about mapping *out* of a glued space (check it respects the glue). Products and quotients are dual constructions.

## Picture

![Left: the unit square with its top and bottom edges glued (single blue arrows, same direction) and its left and right edges glued (double red arrows, same direction), producing a torus. Right inset: the interval [0,1] with endpoints 0 and 1 identified, producing a circle.](assets/02-04-fig1.svg)

The **gluing diagram** is the working notation of the subject: draw the space, put matching arrows on edges that get identified, and read off the identifications from the arrows. Same color = same edge after gluing; arrow direction = which way to match them (head to head). The four corners of the square all carry the same $\sim$-class, so they fuse into a single point on the torus.

## Worked examples

**Example 1 (mechanical — the circle, and open sets across the seam).** Let $X=[0,1]$ and glue $0\sim 1$ (all other points only equivalent to themselves). Then $Y=X/\!\sim$ has one point for each of $0<x<1$ plus one merged point $p=[0]=[1]$. Claim: $Y$ is (topologically) the circle $S^1$.

Look at a basic open set around $p$. Downstairs, $q^{-1}(\{p\})=\{0,1\}$; a set $V\subseteq Y$ containing $p$ is open iff $q^{-1}(V)$ is open in $[0,1]$, which forces $q^{-1}(V)$ to contain an open neighborhood of *both* $0$ and $1$ — i.e. a half-open piece $[0,\varepsilon)$ **and** a half-open piece $(1-\varepsilon,1]$. Their images knit together into a single unbroken arc through $p$. So the merged point has honest arc-neighborhoods on *both sides*: no seam, exactly as on a circle. (That $Y$ is truly homeomorphic to $S^1\subseteq\mathbb{R}^2$, not merely circle-like, is proved cleanly once we have "continuous bijection from compact to Hausdorff is a homeomorphism" — see [4.3](04-03-heine-borel-continuous-maps.md) and Boss problem 4.)

**Example 2 (why you'd care — mapping out of the circle via the universal property).** How do you define a continuous map *from* the glued circle $Y=[0,1]/(0\sim1)$ into $Z=\mathbb{R}^2$? Don't fight the quotient — use the universal property. Define the map upstairs on $[0,1]$:
$$f(t) = \big(\cos 2\pi t,\ \sin 2\pi t\big).$$
This $f$ is continuous (coordinates are continuous). It *respects the gluing*: $f(0)=(1,0)=f(1)$, so glued points get equal outputs. Hence $f$ descends to a well-defined $g:Y\to\mathbb{R}^2$ with $g\circ q = f$, and by the universal property $g$ is continuous — no epsilon-chasing on the awkward quotient required. This is the standard recipe: **to map out of a quotient, write the map on $X$ and check it's constant on each glued class.** (It is also the beginning of the covering map $\mathbb{R}\to S^1$ that computes $\pi_1(S^1)=\mathbb{Z}$ in [6.2](06-02-the-fundamental-group.md).)

**The gallery (each with its identifications spelled out).** Start from the square $[0,1]^2$ and glue edges:

- **Cylinder** — glue only $(x,0)\sim(x,1)$: tape the top edge to the bottom edge, straight across. A finite tube.
- **Torus** — *also* glue $(0,y)\sim(1,y)$: now roll the tube's two boundary circles together. Both edge-pairs matched *in the same orientation* (the diagram's arrows agree). Result: $[0,1]^2$ with opposite edges identified — the standard **torus**, homeomorphic to $S^1\times S^1$ (one angle from each glued pair). This is the object of Boss problem 2.
- **Möbius band** — glue $(x,0)\sim(1-x,1)$: tape top to bottom, but with a *flip* (the $x\mapsto 1-x$ reverses the arrow). One boundary circle, one side, non-orientable.
- **Real projective space (brief)** — on the sphere $S^n=\{x\in\mathbb{R}^{n+1}:|x|=1\}$ glue every point to its antipode, $x\sim -x$. The quotient $\mathbb{RP}^n$ is the space of *lines through the origin*. For $n=2$: the disk with antipodal boundary points identified — the projective plane, which won't fit in $\mathbb{R}^3$ without self-crossing.

## Watch out

- **You might think a quotient map is open (sends open sets to open sets), but usually it is neither open nor closed.** For $q:[0,1]\to S^1$, the open set $[0,\tfrac12)$ upstairs maps to a *half-open* arc downstairs that is not open near $p$ (its preimage $[0,\tfrac12)$ misses a neighborhood of $1$). Quotient maps are continuous by construction and nothing more — don't expect them to preserve open or closed sets.
- **You might think a quotient of a beautiful space is beautiful, but gluing can destroy good behavior — even Hausdorffness.** Take two copies of $\mathbb{R}$ and glue every nonzero $x$ in one to the same $x$ in the other, leaving the two zeros unglued: the **line with two origins**. The two origins cannot be separated by disjoint open sets (every neighborhood of one overlaps every neighborhood of the other), so the quotient is not Hausdorff, though $\mathbb{R}$ is as nice as spaces get. Gluing needs care; niceness is not inherited (see the separation hierarchy in [2.5](02-05-topological-properties-invariants.md)).
- **You might think you define a map out of a quotient by "choosing a representative," but you must check the choice doesn't matter.** A rule on classes is only well-defined if it gives glued points equal values; the universal property is precisely the licensed way to do this — define on $X$, verify constancy on classes, descend. Skipping the check produces "functions" that aren't functions.
- **You might think "the torus quotient *is* $S^1\times S^1$" is obvious, but equality of the two constructions is a theorem, not a definition.** The glued square and the product surface are built by different machines; they're homeomorphic, but proving it uses compactness (a continuous bijection from the compact square-quotient to the Hausdorff product is a homeomorphism — [4.3](04-03-heine-borel-continuous-maps.md)).

## One-liner

> Gluing points together is a quotient, and a set survives as "open" downstairs exactly when its whole preimage was open upstairs — the finest topology that keeps the collapsing map continuous.

## Problems

**P1 (🟢)** Let $q:X\to Y$ be a quotient map. Prove the "closed-set version" of the definition: a set $C\subseteq Y$ is closed **iff** $q^{-1}(C)$ is closed in $X$.

**P2 (🟡)** Define $q:\mathbb{R}\to\{a,b,c\}$ by $q(x)=a$ if $x<0$, $q(0)=b$, and $q(x)=c$ if $x>0$, and give $\{a,b,c\}$ the quotient topology. List every open set. Is the resulting three-point space Hausdorff? (Identify which single point is the "bad" one.)

**P3 (🔴, optional)** Consider the square $[0,1]^2$ glued into a torus, $q:[0,1]^2\to T$. Using the universal property, show that the map $F:[0,1]^2\to\mathbb{R}^3$,
$$F(s,t)=\big((2+\cos 2\pi t)\cos 2\pi s,\ (2+\cos 2\pi t)\sin 2\pi s,\ \sin 2\pi t\big),$$
descends to a continuous map $\bar F:T\to\mathbb{R}^3$ — i.e. verify $F$ respects *both* edge identifications — and say in one sentence why $\bar F$ is the "doughnut in space" picture of the torus.

<details>
<summary>Solutions</summary>

**P1** Closed means complementary-to-open, and $q^{-1}$ respects complements: $q^{-1}(Y\setminus C)=X\setminus q^{-1}(C)$. Now, $C$ is closed in $Y$ $\iff$ $Y\setminus C$ is open in $Y$ $\iff$ (quotient definition) $q^{-1}(Y\setminus C)$ is open in $X$ $\iff$ $X\setminus q^{-1}(C)$ is open in $X$ $\iff$ $q^{-1}(C)$ is closed in $X$. Each step is an equivalence, so the endpoints are equivalent. $\blacksquare$ (This is why the closed-set characterization can be used interchangeably with the open one — handy when the glued fibers are closed sets.)

**P2** A set $V\subseteq\{a,b,c\}$ is open iff $q^{-1}(V)$ is open in $\mathbb{R}$. Compute preimages: $q^{-1}(a)=(-\infty,0)$ (open), $q^{-1}(c)=(0,\infty)$ (open), $q^{-1}(b)=\{0\}$ (**not** open), $q^{-1}(\{a,c\})=(-\infty,0)\cup(0,\infty)=\mathbb{R}\setminus\{0\}$ (open), $q^{-1}(\{a,b\})=(-\infty,0]$ (not open), $q^{-1}(\{b,c\})=[0,\infty)$ (not open). So the open sets are exactly those whose preimage avoids being pinned to include the non-open $\{0\}$:
$$\varnothing,\ \{a\},\ \{c\},\ \{a,c\},\ \{a,b,c\}.$$
**Not Hausdorff.** The bad point is $b$ (the image of $0$): every open set containing $b$ is the whole space $\{a,b,c\}$ (the only open set with $b$ in it is $\{a,b,c\}$, since $q^{-1}$ of any smaller set containing $b$ fails to be open). So $b$ cannot be separated from $a$ (or from $c$) by disjoint opens. This is a finite cartoon of the line-with-two-origins pathology: gluing collapsed a neighborhood structure and left a point you can't isolate.

**P3** By the universal property, $F$ descends to a continuous $\bar F$ with $\bar F\circ q=F$ **iff** $F$ is continuous and constant on each $\sim$-class — i.e. respects both identifications. Continuity: each coordinate is a composition/product of continuous functions of $s,t$. Now check the glue.
- Top–bottom, $(s,0)\sim(s,1)$: $\cos 2\pi\cdot 0=\cos 2\pi\cdot 1=1$ and $\sin 2\pi\cdot 0=\sin 2\pi\cdot 1=0$, so the $t$-dependent factors $2+\cos2\pi t$ and $\sin2\pi t$ agree at $t=0,1$; hence $F(s,0)=F(s,1)$. ✓
- Left–right, $(0,t)\sim(1,t)$: $\cos 2\pi\cdot 0=\cos 2\pi\cdot 1=1$ and $\sin 2\pi\cdot 0=\sin 2\pi\cdot 1=0$, so $F(0,t)=F(1,t)$. ✓

Both identifications are respected, so $\bar F:T\to\mathbb{R}^3$ exists and is continuous. It's the doughnut picture because $s$ sweeps the point around the big central hole (radius-2 circle) while $t$ sweeps it around the tube's cross-section — literally the "two independent angles" of $S^1\times S^1$ drawn as a surface of revolution in space. (It's a homeomorphism onto its image; that upgrade uses compact-to-Hausdorff, [4.3](04-03-heine-borel-continuous-maps.md).)

</details>

## Flashback

**From Lesson 2.3 (The product topology):** On the product $\mathbb{R}^2=\mathbb{R}\times\mathbb{R}$ with the product topology and projections $\pi_1,\pi_2:\mathbb{R}^2\to\mathbb{R}$, is the open first quadrant $U=\{(x,y):x>0,\,y>0\}$ a *basic* open set of the product topology, and is it open? Justify using the product's basis, and state which universal-property direction (mapping *into* vs *out of*) the projections belong to — contrasting today's quotient.

<details>
<summary>Solution</summary>

$U$ **is open** but is **not itself a basic open set** — it *is* one, in fact: the product-topology basis consists of products $A\times B$ with $A,B$ open in $\mathbb{R}$, and $U=(0,\infty)\times(0,\infty)$ with both factors open. So here $U$ happens to be a single basis element. (Contrast a set like an open disk, which is open — a *union* of basic rectangles — but is not any single product $A\times B$.) The projections belong to the **mapping-into** direction: the product's universal property says a map $h:Z\to\mathbb{R}^2$ is continuous iff each $\pi_i\circ h$ is continuous — you test a map *into* the product coordinate by coordinate. That is exactly dual to today's quotient, whose universal property governs maps *out of* a glued space (test that a map on $X$ respects the gluing). Products are probed by projecting out; quotients by lifting up. $\blacksquare$

</details>

## Connections

- **Backward:** the quotient is the third and last "new space from old" machine of Module 2, after the subspace topology (2.2) and the product ([2.3](02-03-product-topology.md)). Its universal property is the exact mirror image of the product's — one governs maps *out*, the other maps *in*.
- **Forward:** [2.5](02-05-topological-properties-invariants.md) uses invariants to prove glued spaces like the torus and the circle are genuinely *different* from the interval or the plane (Boss problem 2). Compactness in [4.3](04-03-heine-borel-continuous-maps.md) is what finally proves the glued square *is* $S^1\times S^1$ (compact-to-Hausdorff bijections are homeomorphisms). And the whole of Module 6 — the fundamental group and $\pi_1(S^1)=\mathbb{Z}$ in [6.2](06-02-the-fundamental-group.md) — runs on quotient/covering constructions like the circle built here.
- **Sideways (physics):** the torus $S^1\times S^1$ is the configuration space of two independent angles — a double rotor, or the phase-space torus of an integrable Hamiltonian system in classical mechanics; the Möbius and projective constructions reappear as the non-orientable state spaces and quotients that show up in gauge theory and the topology of `relativity`'s spacetimes.
