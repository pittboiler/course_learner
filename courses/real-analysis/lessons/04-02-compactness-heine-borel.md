# Real Analysis · Lesson 4.2: Compactness and Heine–Borel

> ⏱ ~15 min · Module 4: Topology of the real line · Builds on: [4.1 Open sets, closed sets, limit points](04-01-open-closed-limit-points.md), [1.3 Consequences of completeness](01-03-consequences-of-completeness.md), [2.3 Subsequences and Bolzano–Weierstrass](02-03-subsequences-bolzano-weierstrass.md) · Unlocks: Module 5 — [5.1 Limits of functions and continuity](05-01-limits-and-continuity.md)

## Why this matters

Compactness is the single most important idea in the middle of this course, and it has a bad reputation for being abstract. It shouldn't. It's the property that lets you upgrade a fact that's true *near every point* into a fact that's true *on the whole set at once* — and every marquee theorem of next module needs exactly that upgrade. A continuous function has a max on $[a,b]$ (Extreme Value Theorem); a continuous function on $[a,b]$ is *uniformly* continuous (Heine–Cantor). Both are false on the open interval $(0,1)$, and the one thing $(0,1)$ lacks is compactness. Learn this and Module 5 is downhill.

## The idea

Think of covering a stretch of road with the beams of streetlights. Each lamp lights an open patch. If the road is the whole infinite line, you genuinely need infinitely many lamps — no finite crew ever finishes. But if the road is a *closed, bounded* segment, something magical happens: no matter how you scatter the lamps, no matter how many you brought, **finitely many of them already light the entire segment**. You can always throw the rest away.

That "you can always get away with finitely many" is compactness. It's a kind of *finiteness for infinite sets*: a compact set is small enough that infinite covering schemes always collapse to finite ones. And finiteness is powerful — with finitely many patches you can take a **minimum** of finitely many local quantities and get something positive, or a **maximum** and get something bounded. That min/max step, impossible over infinitely many patches, is precisely the move that proves the theorems in Module 5.

The catch that makes it non-trivial: it must work for *every* cover, including adversarial ones designed to need many patches. And exactly two things can spoil it — a **hole/edge you don't include** (a point can be approached but never reached, so patches shrink toward it forever) or **running off to infinity** (no finite crew reaches the far end). Rule out both — closed *and* bounded — and on the real line you're compact. That's Heine–Borel.

## The formal version

**Open cover.** Let $K\subseteq\mathbb{R}$. An **open cover** of $K$ is a collection $\{U_\alpha\}_{\alpha\in A}$ of open sets (the index set $A$ may be infinite) with

$$K\subseteq\bigcup_{\alpha\in A}U_\alpha.$$

A **subcover** is a subcollection $\{U_\alpha\}_{\alpha\in A'}$, $A'\subseteq A$, that *still* covers $K$. It is a **finite subcover** if $A'$ is finite.

> In words: an open cover is any pile of open patches whose union swallows $K$; a subcover keeps some of those same patches and still swallows $K$.

**Compactness (the open-cover definition).** A set $K\subseteq\mathbb{R}$ is **compact** if *every* open cover of $K$ has a finite subcover.

> In words: however you try to cover $K$ with open patches, you never actually needed more than finitely many of them.

**Sequential compactness.** $K$ is **sequentially compact** if every sequence $(x_n)$ with all $x_n\in K$ has a subsequence converging to a limit that also lies in $K$.

> In words: no sequence in $K$ can escape — some subsequence always settles down to a point still inside $K$.

For subsets of $\mathbb{R}$ these two notions coincide: **$K$ is compact $\iff$ $K$ is sequentially compact.** (We'll use whichever is more convenient, and lean on the sequential form for one direction of the proof below.)

**Heine–Borel Theorem.** A set $K\subseteq\mathbb{R}$ is compact **if and only if** it is closed and bounded.

> In words: on the real line, "compact" and "closed-and-bounded" are the same thing — the covering property you can't picture equals two properties you can.

## Picture

![An open cover of the interval [a,b]: several overlapping open patches U₁…U₅ above the line, finitely many already covering the whole interval](assets/04-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — an explicit cover with no finite subcover shows $(0,1)$ is *not* compact).** Take the collection

$$U_n=\left(\tfrac1n,\,1\right),\qquad n=2,3,4,\dots$$

Each $U_n$ is open. They cover $(0,1)$: given any $x\in(0,1)$, the Archimedean property (from [1.3](01-03-consequences-of-completeness.md)) gives an $n$ with $\tfrac1n<x$, so $x\in U_n$. Now try to keep only finitely many, say $U_{n_1},\dots,U_{n_k}$. Their union is the single largest one, $\left(\tfrac{1}{N},1\right)$ where $N=\max n_i$ — and that misses every point of $\left(0,\tfrac1N\right]$, e.g. $\tfrac{1}{N+1}$. So **no finite subcollection covers $(0,1)$**: this open cover has no finite subcover, and $(0,1)$ fails the definition. The patches shrink toward the missing endpoint $0$ forever — the "hole you don't include" spoiler, made concrete.

The same trick kills unbounded sets. For $[0,\infty)$, the cover $V_n=(-1,n)$, $n\in\mathbb{N}$, has union $[0,\infty)$, but any finite subcollection tops out at $(-1,N)$ and misses $N$. No finite subcover — running off to infinity, made concrete.

**Example 2 (why you'd care — $[a,b]$ *is* compact).** This is the theorem that makes Module 5 work, so we prove it. We give the **bisection** argument, which uses only the nested interval theorem from [1.3](01-03-consequences-of-completeness.md).

*Claim.* Every open cover $\{U_\alpha\}$ of $I_0=[a,b]$ has a finite subcover.

*Proof (bisection / contradiction).* Suppose not: $\{U_\alpha\}$ covers $[a,b]$ but **no** finite subcollection does. Cut $I_0$ in half at its midpoint. If *both* halves admitted finite subcovers, gluing those two finite lists would be a finite subcover of all of $I_0$ — contradiction. So at least one half, call it $I_1$, has **no finite subcover**. Bisect $I_1$ and repeat: at every stage the "bad" half $I_{n+1}\subseteq I_n$ still has no finite subcover, and its length is

$$\text{len}(I_n)=\frac{b-a}{2^n}\longrightarrow 0.$$

This produces nested closed intervals $I_0\supseteq I_1\supseteq I_2\supseteq\cdots$ with lengths shrinking to $0$. By the **nested interval theorem** ([1.3](01-03-consequences-of-completeness.md)), their intersection is a single point $x^\ast\in[a,b]$.

Now spring the trap. Since $\{U_\alpha\}$ covers $[a,b]$, some patch $U_{\alpha^\ast}$ contains $x^\ast$; being open, it contains a whole neighborhood $(x^\ast-\varepsilon,\,x^\ast+\varepsilon)\subseteq U_{\alpha^\ast}$. But $\text{len}(I_n)\to0$ and every $I_n$ contains $x^\ast$, so for $n$ large enough $I_n\subseteq(x^\ast-\varepsilon,x^\ast+\varepsilon)\subseteq U_{\alpha^\ast}$. That means $I_n$ is covered by the *single* set $U_{\alpha^\ast}$ — a finite subcover (one patch!) — contradicting that $I_n$ has no finite subcover. The assumption was impossible, so a finite subcover exists. $\blacksquare$

**Consequence — the full Heine–Borel.** With Example 2 as the engine, both directions follow.

*(⟸) Closed and bounded $\Rightarrow$ compact.* Let $K$ be closed and bounded. Bounded means $K\subseteq[a,b]$ for some $a,b$. Given any open cover $\{U_\alpha\}$ of $K$, add one more open set $U_0=\mathbb{R}\setminus K$ (open because $K$ is closed, by [4.1](04-01-open-closed-limit-points.md)). Now $\{U_\alpha\}\cup\{U_0\}$ covers all of $\mathbb{R}$, in particular $[a,b]$, which is compact by Example 2 — so finitely many of them cover $[a,b]\supseteq K$. Discard $U_0$ (it contains no point of $K$ anyway); the remaining finitely many $U_\alpha$ still cover $K$. Finite subcover found. $\blacksquare$

*(⟹) Compact $\Rightarrow$ closed and bounded.* We show a set that fails either condition can't be compact, by exhibiting a bad cover.

- **Not bounded $\Rightarrow$ not compact.** If $K$ is unbounded, the cover $\{(-n,n)\}_{n\in\mathbb{N}}$ covers all of $\mathbb{R}\supseteq K$, but any finite subcollection has union $(-N,N)$, which — since $K$ is unbounded — misses some point of $K$. No finite subcover.
- **Not closed $\Rightarrow$ not compact.** If $K$ is not closed, by [4.1](04-01-open-closed-limit-points.md) it has a limit point $p\notin K$. Cover $K$ by the open sets that steer clear of $p$:
$$W_n=\Big\{x:\ |x-p|>\tfrac1n\Big\}=\left(-\infty,\,p-\tfrac1n\right)\cup\left(p+\tfrac1n,\,\infty\right),\qquad n\in\mathbb{N}.$$
Each $W_n$ is open, and $\bigcup_n W_n=\mathbb{R}\setminus\{p\}\supseteq K$ (since $p\notin K$). But any finite subcollection is contained in a single largest $W_N$, which excludes the punctured neighborhood $(p-\tfrac1N,\,p+\tfrac1N)\setminus\{p\}$ — and because $p$ is a limit point of $K$, that neighborhood contains a point of $K$. So no finite subcollection covers $K$. No finite subcover.

Either failure breaks compactness, so a compact $K$ must be both closed and bounded. Combined with (⟸), that is Heine–Borel. $\blacksquare$

(A second route to Example 2 avoids bisection: use **sequential compactness**. Any sequence in $[a,b]$ is bounded, so by **Bolzano–Weierstrass** ([2.3](02-03-subsequences-bolzano-weierstrass.md)) it has a convergent subsequence; the limit lies in $[a,b]$ because $[a,b]$ is closed. So $[a,b]$ is sequentially compact — equivalently compact. Same theorem, powered by the completeness workhorse from Module 2 instead of nested intervals.)

## Watch out

- You might think "closed and bounded $\Rightarrow$ compact" is the *definition* or a universal law — but it's a **theorem special to $\mathbb{R}$ (and $\mathbb{R}^n$)**. The open-cover definition is the real one, and it's what `topology` carries to general spaces, where closed-and-bounded no longer implies compact (e.g. the closed unit ball in an infinite-dimensional space is closed and bounded but *not* compact). Memorize the covering definition; treat Heine–Borel as a bonus the real line happens to grant.
- You might think you can invent a *new*, cleverer finite cover to satisfy the definition — but the finite subcover must be drawn from the **given** cover. Compactness says: hand me any cover, and I'll find finitely many *of those very patches* that suffice. Producing some unrelated finite cover proves nothing.
- You might think closed *or* bounded alone is enough. Neither is: $[0,\infty)$ is closed but unbounded and not compact (cover $\{(-1,n)\}$); $(0,1)$ is bounded but not closed and not compact (cover $\{(\tfrac1n,1)\}$). You need **both**, working together.

## One-liner

> Compact = "finiteness for infinite sets": every open cover has a finite subcover, which on the real line is exactly closed-and-bounded — and it's the hinge that turns local facts into global theorems.

## Problems

**P1 (🟢)** Give an explicit open cover of the set $A=\{\,1/n : n\in\mathbb{N}\,\}=\{1,\tfrac12,\tfrac13,\dots\}$ that has **no** finite subcover, and conclude $A$ is not compact. Then explain in one sentence which Heine–Borel hypothesis $A$ fails. (Bounded it certainly is.)

**P2 (🟡)** Prove that $A\cup\{0\}=\{0\}\cup\{1/n:n\in\mathbb{N}\}$ **is** compact — directly from the open-cover definition, not by quoting Heine–Borel. (Hint: whichever patch covers $0$ swallows the whole tail of the sequence; only finitely many terms are left outside it.)

**P3 (🔴, optional)** Prove that a **closed subset $F$ of a compact set $K$ is compact**, directly from the definition. (This is the abstract fact behind Boss problem 4's nested compact sets.) Then use it to explain in one line why any closed subset of $[a,b]$ is automatically compact.

<details>
<summary>Solutions</summary>

**P1** The points $1/n$ get arbitrarily close together as $n\to\infty$, piling up at $0$ (which is *not* in $A$). Isolate each point with a tiny patch that catches only it: since consecutive terms satisfy $\tfrac1n-\tfrac1{n+1}=\tfrac{1}{n(n+1)}$, put

$$U_n=\left(\tfrac1n-\tfrac{1}{2n(n+1)},\ \ \tfrac1n+\tfrac{1}{2n(n+1)}\right),\qquad n\in\mathbb{N},$$

an open interval around $1/n$ narrow enough to contain no other term $1/m$. Then $\{U_n\}$ covers $A$ (each point sits in its own patch), but $U_n$ is the *only* patch containing $1/n$, so dropping any $U_n$ uncovers $1/n$. A finite subcollection covers only finitely many points of the infinite set $A$ — no finite subcover. Hence $A$ is not compact. It fails **closedness**: $0$ is a limit point of $A$ not contained in $A$ (this is exactly the "not closed $\Rightarrow$ not compact" mechanism from the lesson, and the patches-shrinking-toward-the-hole picture).

**P2** Let $K=\{0\}\cup\{1/n:n\in\mathbb{N}\}$ and let $\{U_\alpha\}$ be any open cover. Some patch $U_{\alpha_0}$ contains $0$; being open, it contains an interval $(-\varepsilon,\varepsilon)$ for some $\varepsilon>0$. By the Archimedean property, there is an $N$ with $\tfrac1N<\varepsilon$, so **every** term with $n\ge N$ satisfies $0<\tfrac1n\le\tfrac1N<\varepsilon$ and thus lies in $U_{\alpha_0}$. That single patch already covers $0$ and the entire tail $\{1/n:n\ge N\}$. Only the finitely many points $1,\tfrac12,\dots,\tfrac{1}{N-1}$ remain; pick one patch $U_{\alpha_k}$ covering each (possible since $\{U_\alpha\}$ covers $K$). Then

$$U_{\alpha_0},\,U_{\alpha_1},\,\dots,\,U_{\alpha_{N-1}}$$

is a finite subcover. Every open cover has one, so $K$ is compact. (Adding the limit point $0$ is exactly what "closes the hole" — and Heine–Borel agrees: $K$ is now closed and bounded.)

**P3** Let $F\subseteq K$ with $F$ closed and $K$ compact. Let $\{U_\alpha\}$ be any open cover of $F$. Adjoin the single open set $U_0=\mathbb{R}\setminus F$ (open because $F$ is closed, [4.1](04-01-open-closed-limit-points.md)). Every point of $K$ is either in $F$ (covered by some $U_\alpha$) or outside $F$ (covered by $U_0$), so $\{U_\alpha\}\cup\{U_0\}$ is an open cover of $K$. By compactness of $K$ it has a finite subcover; that finite list uses finitely many $U_\alpha$'s together with possibly $U_0$. Discard $U_0$ — it contains no point of $F$ — and the remaining finitely many $U_\alpha$ still cover $F$. So $F$ is compact. $\blacksquare$

Since $[a,b]$ is compact (Example 2), **any closed subset of $[a,b]$ is compact** — no separate argument needed, closedness inside a compact set is enough.

</details>

## Flashback

**From Lesson 4.1 (Open sets, closed sets, limit points):** Prove that the set $S=\left\{\,\tfrac{n}{n+1}:n\in\mathbb{N}\,\right\}=\left\{\tfrac12,\tfrac23,\tfrac34,\dots\right\}$ is **not closed** by finding a limit point of $S$ that does not belong to $S$. Is $S$ open?

<details>
<summary>Solution</summary>

The terms $\tfrac{n}{n+1}=1-\tfrac{1}{n+1}$ increase toward $1$. **Claim: $1$ is a limit point of $S$.** For any $\varepsilon>0$, the Archimedean property gives $N$ with $\tfrac{1}{N+1}<\varepsilon$; then for $n\ge N$,

$$\Big|\tfrac{n}{n+1}-1\Big|=\tfrac{1}{n+1}\le\tfrac{1}{N+1}<\varepsilon,$$

so every punctured neighborhood $(1-\varepsilon,1+\varepsilon)\setminus\{1\}$ contains points of $S$ (indeed infinitely many, and none equal to $1$). Thus $1$ is a limit point of $S$. But $\tfrac{n}{n+1}=1$ would force $n=n+1$, impossible, so $1\notin S$. A set that omits one of its limit points is **not closed** ([4.1](04-01-open-closed-limit-points.md)).

$S$ is **not open** either: take any point $\tfrac{n}{n+1}\in S$. Any interval around it contains irrational numbers (the rationals aren't the whole line), none of which are in $S$, so no neighborhood of the point lies inside $S$ — $S$ has empty interior. So $S$ is neither open nor closed. (By Heine–Borel it also can't be compact: not closed. Its "completion" $S\cup\{1\}$, which plugs the one hole, *is* compact — the same move as P2.)

</details>

## Connections

- **Backward:** compactness is built on [4.1](04-01-open-closed-limit-points.md)'s open/closed/limit-point vocabulary, and its proof runs on Module 1–2 completeness — the **nested interval theorem** ([1.3](01-03-consequences-of-completeness.md)) for the bisection argument, or **Bolzano–Weierstrass** ([2.3](02-03-subsequences-bolzano-weierstrass.md)) for the sequential one. Heine–Borel is where the topology of $\mathbb{R}$ and the completeness of $\mathbb{R}$ turn out to be the same fact wearing two coats.
- **Forward:** this is the load-bearing lemma for all of Module 5. [5.1](05-01-limits-and-continuity.md) sets up continuity; Lesson 5.2 then uses "the continuous image of a compact set is compact" to prove the **Extreme Value Theorem** and **uniform continuity** (Heine–Cantor) — the finite-subcover step is precisely where a max/min over finitely many patches becomes possible. Boss problem 4's nested compact sets use P3.
- **Sideways (`topology`):** the open-cover definition is the *only* one that survives the jump to abstract topological spaces — that's why we lead with it. `topology` keeps "every open cover has a finite subcover" verbatim and drops "closed and bounded," which stops being sufficient off the real line. This lesson is your first look at the definition that whole subject is built on.
