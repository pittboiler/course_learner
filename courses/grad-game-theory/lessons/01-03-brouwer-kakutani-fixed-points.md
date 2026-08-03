# Grad Game Theory · Lesson 1.3: Brouwer and Kakutani fixed-point theorems

> ⏱ ~15 min · Module 1: Mathematical foundations · Builds on: [1.2 Correspondences and Berge's maximum theorem](01-02-correspondences-berge-maximum-theorem.md) · Unlocks: [1.4 Zero-sum games, minimax, and LP duality](01-04-zero-sum-minimax-lp-duality.md)

## Why this matters

Every existence proof in this course — Nash equilibrium, Walrasian equilibrium, the minimax value — ends the same way: you cook up a map whose *fixed point is the thing you want to exist*, then invoke a theorem that hands you a fixed point for free. The whole game is translation. "An equilibrium exists" becomes "this map has a point it doesn't move," and two theorems, Brouwer and its set-valued cousin Kakutani, close the deal. Learn the two theorems and their hypotheses once, and Nash's theorem (Lesson 2.3) becomes a five-line checklist rather than a magic trick.

## The idea

Take a continuous function that maps an interval into *itself* — say $f:[0,1]\to[0,1]$. Draw its graph inside the unit square. The graph starts somewhere on the left edge (at height $f(0)\ge 0$) and ends somewhere on the right edge (at height $f(1)\le 1$). Now draw the diagonal $y=x$. At $x=0$ the graph sits *on or above* the diagonal; at $x=1$ it sits *on or below*. A continuous curve that starts above a line and ends below it **must cross it** — and a crossing point is exactly a spot where $f(x)=x$, a **fixed point**. You can't avoid it. That's the entire content of Brouwer's theorem in one dimension, and higher dimensions are the same fact dressed up.

The catch is that "maps into itself" has to be enforced by *geometry*, and the geometry needs three properties: the domain must be **compact** (closed and bounded — no escaping to infinity or through a missing point) and **convex** (no holes to rotate around), and the map must be **continuous** (no jumps to leap over the diagonal). Kill any one and the crossing can be dodged.

Game theory then throws a wrench: best responses aren't functions. A player facing a tie is happy with *any* mix of the tied strategies — the "reply" to a situation is a whole *set*, not a point. So we need a fixed-point theorem for **correspondences** (set-valued maps, Lesson 1.2). That's Kakutani: same conclusion, but the graph is now a "thick" band, and it still has to cross the diagonal.

## The formal version

**Brouwer's fixed-point theorem.** Let $K \subseteq \mathbb{R}^n$ be nonempty, compact, and convex, and let $f:K\to K$ be continuous. Then there exists $x^* \in K$ with $f(x^*)=x^*$.

*In words:* a continuous map that sends a nonempty compact convex set into itself always pins at least one point in place.

All three domain/map hypotheses are load-bearing — each has a counterexample that breaks the conclusion the moment it's dropped:

- **Drop compactness.** On $K=\mathbb{R}$ (convex, but not bounded — hence not compact), the shift $f(x)=x+1$ is continuous and maps $\mathbb{R}$ into itself, yet $f(x)=x$ has no solution. The fixed point escaped to infinity.
- **Drop convexity.** On the unit circle $K=\{x\in\mathbb{R}^2:\|x\|=1\}$ (compact, but not convex — it has a hole), rotation by $90^\circ$ is continuous and maps the circle onto itself, yet moves *every* point. Convexity is what forbids the "spin around the hole" escape.
- **Drop continuity.** On $K=[0,1]$ the jump map $f(x)=1$ for $x<\tfrac12$ and $f(x)=0$ for $x\ge\tfrac12$ sends $[0,1]$ into itself but leaps clean over the diagonal — no fixed point. Continuity is what makes "starts above, ends below" force a crossing.

**Kakutani's fixed-point theorem.** Let $K\subseteq\mathbb{R}^n$ be nonempty, compact, and convex, and let $\varphi:K\rightrightarrows K$ be a correspondence that is (i) **nonempty-valued** ($\varphi(x)\neq\varnothing$ for all $x$), (ii) **convex-valued** ($\varphi(x)$ is a convex set for all $x$), and (iii) has a **closed graph** (the set $\{(x,y): y\in\varphi(x)\}$ is closed in $K\times K$). Then there exists $x^*\in K$ with $x^*\in\varphi(x^*)$.

*In words:* a set-valued map on a compact convex set that always returns a nonempty convex "blob," with no sudden jumps in the blob, has a point that lies inside its own image.

Why each new hypothesis is exactly the right one for us:

- **Convex-valued** is the set-valued replacement for "single-valued." It's automatic in game theory because a best-response set is a set of *mixtures* over tied pure strategies — and a set of mixtures is convex (Lesson 1.1's simplex). Without it, Kakutani fails: the correspondence $\varphi(x)=\{-\operatorname{sign}(x)\}$ on $[-1,1]$ (with $\varphi(0)=\{-1,+1\}$, a *non*-convex two-point set) has a closed graph and nonempty values but no fixed point — the graph jumps from $+1$ to $-1$ straight through the diagonal without ever touching it. Fill in the gap — make the value at $0$ the whole segment $[-1,1]$ — and $0$ becomes a fixed point. Convexity is precisely that filled gap.
- **Closed graph** is the correspondence version of continuity, and it's exactly what Berge's maximum theorem (Lesson 1.2) delivers: a best-response correspondence built by maximizing a continuous payoff over a compact set is upper hemicontinuous with closed values, i.e. has a closed graph. So Kakutani's third hypothesis is a Berge output. That's not a coincidence — it's the whole reason we proved Berge first.

**The application template (memorize this — it's the spine of every equilibrium existence proof).** To show a game/economy has an equilibrium:

1. **Domain.** Take $K=\prod_i S_i$, a *product of compact convex strategy sets* (each $S_i$ a mixed-strategy simplex from Lesson 1.1). A product of compact convex sets is compact and convex — hypotheses of Kakutani on $K$, done.
2. **Map.** Define the best-response correspondence $\varphi(s)=\prod_i \mathrm{BR}_i(s_{-i})$, where $\mathrm{BR}_i(s_{-i})=\arg\max_{s_i\in S_i} u_i(s_i,s_{-i})$.
3. **Check Kakutani's three hypotheses.**
   - *Nonempty-valued:* $u_i$ is continuous and $S_i$ is compact, so Weierstrass guarantees the max is attained — $\mathrm{BR}_i\neq\varnothing$.
   - *Convex-valued:* $u_i$ is linear (hence quasiconcave) in own mixed strategy $s_i$, so the set of maximizers is convex (Lesson 1.1).
   - *Closed graph:* $\mathrm{BR}_i$ is the argmax of a continuous function over a compact set, so Berge's maximum theorem (Lesson 1.2) makes it upper hemicontinuous with closed values → closed graph. Products of closed-graph correspondences have closed graph.
4. **Conclude.** Kakutani gives $s^*\in\varphi(s^*)$, i.e. $s_i^*\in\mathrm{BR}_i(s_{-i}^*)$ for every $i$: nobody wants to deviate. That is a **Nash equilibrium**.

Lesson 2.3 just *instantiates* this template. Grad-micro runs the identical machine with the excess-demand map to get a Walrasian equilibrium.

## Picture

![Left: a continuous f from [0,1] into itself must cross the diagonal y=x at a fixed point. Right: a correspondence with a thick convex-valued graph crosses the diagonal too (Kakutani).](assets/01-03-fig1.svg)

## Worked examples

**Example 1 (the 1-D Brouwer case, proved via IVT).** *Claim:* every continuous $f:[0,1]\to[0,1]$ has a fixed point.

Define $g(x)=f(x)-x$. Since $f$ is continuous and $x$ is continuous, $g$ is continuous on $[0,1]$. Evaluate at the endpoints:

$$g(0)=f(0)-0=f(0)\ge 0 \qquad(\text{because } f(0)\in[0,1]),$$
$$g(1)=f(1)-1\le 0 \qquad(\text{because } f(1)\in[0,1]).$$

So $g(0)\ge 0\ge g(1)$. If either endpoint gives equality we already have a fixed point ($f(0)=0$ or $f(1)=1$). Otherwise $g(0)>0>g(1)$, and the Intermediate Value Theorem gives some $x^*\in(0,1)$ with $g(x^*)=0$, i.e. $f(x^*)=x^*$. $\blacksquare$

Notice how the three hypotheses entered: **compactness** gave us honest endpoints $0$ and $1$ to evaluate (on an open interval there'd be no endpoints to trap the sign); **the codomain being $[0,1]$** (self-map) forced the sign inequalities; **continuity** powered the IVT. Higher-dimensional Brouwer replaces IVT with a topological degree/no-retraction argument, but the *shape* of the proof is this.

**Example 2 (the Kakutani template on a $2\times2$ game).** Take a coordination game — both players choose $A$ or $B$, and matching pays $1$, mismatching pays $0$:

$$
\begin{array}{c|cc}
 & A & B\\\hline
A & 1,1 & 0,0\\
B & 0,0 & 1,1
\end{array}
$$

Parametrize player 1's mixed strategy by $p=\Pr(\text{play }A)$ and player 2's by $q$, so the domain is the square $K=[0,1]^2$ (compact, convex — a product of two simplices). Player 1's expected payoff to playing $A$ is $q$; to playing $B$ is $1-q$. So her best response is

$$
\mathrm{BR}_1(q)=
\begin{cases}
\{1\} & q>\tfrac12 \quad(\text{prefer } A)\\[2pt]
[0,1] & q=\tfrac12 \quad(\text{indifferent — } \textbf{any } p \text{ is optimal})\\[2pt]
\{0\} & q<\tfrac12 \quad(\text{prefer } B)
\end{cases}
$$

and by symmetry $\mathrm{BR}_2(p)$ has the same shape in $p$. **Check the hypotheses:** each $\mathrm{BR}$ is nonempty (values $\{0\},\{1\}$, or $[0,1]$); convex-valued (a point or a full interval — the interval at $q=\tfrac12$ is exactly the convexity we needed, and it's there because payoff is linear in own $p$); and has a closed graph (the vertical segment at $q=\tfrac12$ *connects* the branches $\{0\}$ and $\{1\}$ — no gap, no jump — which is upper hemicontinuity from Berge).

**Locate the fixed points** of $\varphi(p,q)=\mathrm{BR}_1(q)\times\mathrm{BR}_2(p)$, i.e. all $(p,q)$ with $p\in\mathrm{BR}_1(q)$ and $q\in\mathrm{BR}_2(p)$:

- $(1,1)$: $q=1>\tfrac12\Rightarrow p=1$ ✓, and symmetrically ✓ — both play $A$.
- $(0,0)$: both play $B$ ✓.
- $(\tfrac12,\tfrac12)$: $q=\tfrac12\Rightarrow p\in[0,1]$, and $p=\tfrac12$ is allowed ✓; symmetrically ✓ — the mixed equilibrium.

Three fixed points, three Nash equilibria. Kakutani only *promised* one; it doesn't count them, and it certainly doesn't tell you which one gets played. Existence, not uniqueness. And note the mixed equilibrium lives at the *indifference point* $q=\tfrac12$ — precisely where the correspondence goes thick. Had the values not been convex there, the graph would have jumped $\{0\}\to\{1\}$ across the diagonal and the interior equilibrium would not exist. That convex value **is** the reason mixed equilibria exist.

## Watch out

- **Brouwer needs all three of compact + convex + continuous.** Drop compactness → the shift $x\mapsto x+1$ on $\mathbb{R}$ (fixed point at infinity). Drop convexity → $90^\circ$ rotation of the circle (spins around the hole). Drop continuity → the jump map on $[0,1]$ (leaps the diagonal). Name the killer before you trust the theorem.
- **Kakutani needs convex values AND closed graph, not just one.** A correspondence that's uhc but with non-convex values ($x\mapsto\{-\operatorname{sign}(x)\}$) has a closed graph and still misses the diagonal. Non-convex values are exactly the trap these theorems exist to rule out — and the fix ("fill the gap to a convex set") is why game theory mixes strategies in the first place.
- **A fixed point is existence, not construction or uniqueness.** Kakutani is *nonconstructive*: it swears a fixed point is somewhere in $K$ but hands you no algorithm to find it and no promise it's alone (Example 2 had three). Computing equilibria is a genuinely separate, harder problem.
- **Domain convexity is why we mix.** Pure-strategy best responses live in a *finite* set of vertices — which is not convex, so Brouwer/Kakutani can't even be stated on it. Passing to mixed strategies convexifies the domain into a simplex. Mixing isn't a modeling flourish; it's the price of admission to the fixed-point theorems.

## One-liner

> "An equilibrium exists" is always "this self-map has a point it can't move" — Brouwer for functions, Kakutani (convex values + closed graph) for the set-valued best responses game theory actually produces.

## Problems

**P1 (🟢)** Let $f:[0,1]\to[0,1]$ be defined by $f(x)=\tfrac12 x + \tfrac14$. Find its fixed point directly, and separately confirm the IVT argument by checking the signs of $g(x)=f(x)-x$ at $x=0$ and $x=1$.

**P2 (🟡)** For each map, say whether Brouwer *guarantees* a fixed point; if a hypothesis fails, name which one and say whether a fixed point happens to exist anyway.
(a) $f(x)=x^2$ on $K=[0,1]$.
(b) $f(x)=x+\tfrac{1}{1+x^2}$ on $K=\mathbb{R}$.
(c) $f(x)=\tfrac{x+1}{2}$ on $K=(0,1)$ (open interval).

**P3 (🔴, optional)** Consider matching pennies: players choose $A$ or $B$; player 1 wins ($+1$, and player 2 gets $-1$) on a *match*, player 2 wins on a *mismatch*. With $p=\Pr_1(A)$, $q=\Pr_2(A)$:
(a) Write player 1's best-response correspondence $\mathrm{BR}_1(q)$ and player 2's $\mathrm{BR}_2(p)$.
(b) Verify Kakutani's three hypotheses hold for $\varphi(p,q)=\mathrm{BR}_1(q)\times\mathrm{BR}_2(p)$.
(c) Find the unique fixed point, and explain why it *had* to be an interior (fully mixed) point — connect this to why convex values were essential.

<details>
<summary>Solutions</summary>

**P1** Fixed point: solve $\tfrac12 x+\tfrac14=x\Rightarrow \tfrac14=\tfrac12 x\Rightarrow x^*=\tfrac12$. And $f(\tfrac12)=\tfrac12\cdot\tfrac12+\tfrac14=\tfrac12$ ✓. IVT check: $g(x)=f(x)-x=-\tfrac12 x+\tfrac14$, so $g(0)=\tfrac14>0$ and $g(1)=-\tfrac14<0$. Sign change on a continuous $g$ over $[0,1]$ ⇒ a root, namely $g(\tfrac12)=0$, matching $x^*=\tfrac12$. (Here $f$ is a contraction, so the fixed point is also unique — but Brouwer alone only promised existence.)

**P2**
(a) $K=[0,1]$ compact and convex, $f(x)=x^2$ continuous, maps $[0,1]$ into $[0,1]$. **Brouwer applies** — guaranteed fixed point. (Indeed $x^2=x$ at $x=0$ and $x=1$.)
(b) $K=\mathbb{R}$ is convex and $f$ is continuous, but $\mathbb{R}$ is **not compact** (unbounded), so Brouwer does not apply. In fact $f(x)-x=\tfrac{1}{1+x^2}>0$ for all $x$, so there is **no** fixed point — the missing hypothesis really does bite.
(c) $f$ is continuous and maps $(0,1)$ into itself, and $(0,1)$ is convex, but it is **not compact** (not closed — missing endpoints), so Brouwer does not apply. Solving $\tfrac{x+1}{2}=x$ gives $x=1$, which is *not in* the open interval — so no fixed point in $K$. Exactly the endpoint that compactness would have supplied is the one that escaped.

**P3**
(a) Player 1 (wants a match): payoff to $A$ is $q$ (prob 2 also plays $A$) minus... more carefully, playing $A$ pays $(+1)q+(-1)(1-q)=2q-1$; playing $B$ pays $(-1)q+(+1)(1-q)=1-2q$. She prefers $A$ when $2q-1>1-2q\iff q>\tfrac12$. So
$$\mathrm{BR}_1(q)=\begin{cases}\{1\}& q>\tfrac12\\ [0,1]& q=\tfrac12\\ \{0\}& q<\tfrac12.\end{cases}$$
Player 2 (wants a mismatch): playing $A$ pays $(-1)p+(+1)(1-p)=1-2p$; playing $B$ pays $2p-1$. She prefers $A$ (i.e. $q=1$) when $1-2p>2p-1\iff p<\tfrac12$. So
$$\mathrm{BR}_2(p)=\begin{cases}\{1\}& p<\tfrac12\\ [0,1]& p=\tfrac12\\ \{0\}& p>\tfrac12.\end{cases}$$
(b) *Nonempty:* every branch is a point or $[0,1]$ — never empty. *Convex-valued:* each value is a single point or a full interval, both convex (payoffs are linear in own probability, so maximizer sets are convex). *Closed graph:* at the switch point $q=\tfrac12$ (resp. $p=\tfrac12$) the value jumps up to the whole segment $[0,1]$, which *bridges* the branches $\{0\}$ and $\{1\}$ with no gap — that vertical segment is exactly upper hemicontinuity, so the graph is closed. Kakutani's hypotheses hold on the compact convex square $[0,1]^2$.
(c) Fixed point needs $p\in\mathrm{BR}_1(q)$ and $q\in\mathrm{BR}_2(p)$ simultaneously. If $q>\tfrac12$ then $p=1$, but $p=1>\tfrac12$ forces $q=0<\tfrac12$ — contradiction. Every pure/corner attempt loops like this (the players chase and flee), so no corner works. The only consistent point is $p=q=\tfrac12$: then $q=\tfrac12\Rightarrow p\in[0,1]\ni\tfrac12$ ✓ and $p=\tfrac12\Rightarrow q\in[0,1]\ni\tfrac12$ ✓. **Unique fixed point $(\tfrac12,\tfrac12)$.** It *had* to be interior because the pursuit structure rules out every corner — the only place best responses can mutually agree is where both players are *indifferent*, and indifference lives at $p=q=\tfrac12$ where the correspondence is thick. That thick (convex) value is what lets the graph meet the diagonal; with non-convex values the graph would jump across and matching pennies would have *no* equilibrium — which is why von Neumann needed mixed strategies.

</details>

## Flashback

**From Lesson 1.2 (Correspondences and Berge's maximum theorem):** The correspondence $\varphi:[0,1]\rightrightarrows\mathbb{R}$ given by $\varphi(x)=\{0\}$ for $x<\tfrac12$, $\varphi(\tfrac12)=[0,1]$, and $\varphi(x)=\{1\}$ for $x>\tfrac12$. Is $\varphi$ upper hemicontinuous? Is it lower hemicontinuous? (Recall: uhc ≈ the graph can't suddenly *shrink* as you approach a point; lhc ≈ it can't suddenly *jump up*.)

<details>
<summary>Solution</summary>

**Upper hemicontinuous: yes.** The only suspect point is $x=\tfrac12$. Take any sequence $x_n\to\tfrac12$ with $y_n\in\varphi(x_n)$ and $y_n\to y$; each $y_n\in\{0\}\cup\{1\}\cup[0,1]$, so $y\in[0,1]=\varphi(\tfrac12)$. The limit stays inside the value at $\tfrac12$ — the graph is closed, so uhc holds. The generous value $[0,1]$ at the switch is exactly what *makes* it uhc: it's big enough to catch limits coming from both sides.

**Lower hemicontinuous: no.** Fail at $x=\tfrac12$: the point $y=\tfrac12\in\varphi(\tfrac12)$ must be approachable from nearby values, but for $x$ just below $\tfrac12$ we have $\varphi(x)=\{0\}$, whose closest point to $\tfrac12$ is $0$ — a full distance $\tfrac12$ away, not converging to $\tfrac12$. So the value *collapses* as you approach and lhc fails.

This is the canonical picture: an argmax correspondence (like a best response at an indifference point) is upper hemicontinuous but not lower — and uhc with convex values is precisely Kakutani's fuel.

</details>

## Connections

- **Backward (1.1):** the domain of every fixed-point argument is a product of compact convex *simplices* (mixed-strategy sets), and "convex-valued" is the convexity of a set of mixtures — a simplex is the canonical convex set, and its convexity is exactly [1.1](01-01-convex-sets-functions-separating-hyperplanes.md)'s subject. Convexity is the through-line.
- **Backward (1.2):** Kakutani's "closed graph" hypothesis is literally the *output* of [1.2](01-02-correspondences-berge-maximum-theorem.md)'s Berge maximum theorem — uhc + closed values. We built Berge specifically to feed Kakutani.
- **Forward (1.4):** the [minimax theorem](01-04-zero-sum-minimax-lp-duality.md) is a fixed-point/duality statement — the value of a zero-sum game exists for the same self-map reason, and dovetails with LP duality.
- **Forward (2.3):** Nash's existence theorem is the application template above, run verbatim. If you own this lesson, 2.3 is a corollary.
- **Sideways (grad-micro):** existence of Walrasian (competitive) equilibrium runs the *identical* machine — replace the best-response map with the excess-demand / price-adjustment map on the price simplex and apply Brouwer/Kakutani. Same theorem, same three checks: [grad-micro](../../grad-micro/syllabus.md).
- **Sideways (topology / real-analysis):** Brouwer is at heart a *topological* theorem (no continuous retraction of a ball onto its boundary), and its 1-D proof is pure real-analysis IVT — see [topology](../../topology/syllabus.md) for the degree-theoretic proof and [real-analysis](../../real-analysis/syllabus.md) for the compactness and IVT foundations.
