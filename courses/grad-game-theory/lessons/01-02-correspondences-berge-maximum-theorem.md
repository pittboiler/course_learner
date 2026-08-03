# Grad Game Theory · Lesson 1.2: Correspondences and Berge's maximum theorem

> ⏱ ~15 min · Module 1: Mathematical foundations · Builds on: [1.1 Convex sets, convex functions, and separating hyperplanes](01-01-convex-sets-functions-separating-hyperplanes.md) · Unlocks: [1.3 Brouwer and Kakutani fixed-point theorems](01-03-brouwer-kakutani-fixed-points.md)

## Why this matters

A Nash equilibrium is a profile where everyone is best-responding to everyone else — a fixed point of the best-response map. But that map is *not a function*: when a player is indifferent between two actions, she has a whole *set* of best responses. So the object we need a fixed point of sends each strategy profile to a **set** of profiles, and the continuity we need is continuity of a set-valued map. This lesson builds that machinery — correspondences, upper hemicontinuity, and **Berge's maximum theorem** — which is precisely the tool that certifies "best-response is well-behaved" and hands us to Kakutani (1.3) and Nash existence (2.3).

## The idea

Picture a knob $\theta$ you can turn (a parameter — a price, an opponent's strategy). For each setting you solve an optimization and read off the best choices. Two things can happen as you turn the knob smoothly.

First, the *set* of best choices can be genuinely more than one point — at a tie, both options are optimal. So the output isn't a number, it's a set. A map that sends each input to a set is a **correspondence**, written $\varphi: X \rightrightarrows Y$.

Second, ask how the output-set moves as you turn the knob. There are two independent ways it can misbehave in the limit. It can **explode outward** — you approach $\theta_0$ and the best-choice set suddenly jumps *up* to include a point that wasn't a limit of nearby choices. Ruling that out is **upper hemicontinuity** (uhc): the graph doesn't sprout new points from nowhere. Or the set can **implode** — nearby sets are fat but at $\theta_0$ the set collapses so some point of $\varphi(\theta_0)$ can't be reached as a limit from nearby. Ruling *that* out is **lower hemicontinuity** (lhc). These are different failures, and Berge's theorem tells us optimization gives us the first kind of good behavior for free — but not the second.

## The formal version

**Correspondence.** $\varphi: X \rightrightarrows Y$ assigns to each $x \in X$ a set $\varphi(x) \subseteq Y$. Its **graph** is $\operatorname{Gr}(\varphi) = \{(x,y) : y \in \varphi(x)\} \subseteq X \times Y$. It is **compact-valued** if every $\varphi(x)$ is compact, **nonempty-valued** if every $\varphi(x) \neq \varnothing$.

*In words:* instead of one output per input, you get a set; stack all the (input, point-of-output) pairs and you get the graph — a region in the plane, not a curve.

**Upper hemicontinuity (uhc).** $\varphi$ is uhc at $x_0$ if for every open $V \supseteq \varphi(x_0)$ there is a neighborhood $U$ of $x_0$ with $\varphi(x) \subseteq V$ for all $x \in U$.

*In words:* once you draw any open pouch around the output-set at $x_0$, all nearby output-sets fit inside that pouch — they can't bulge out past it.

**Sequential test (the workhorse).** If $Y$ is compact (or $\varphi$ has closed range in a compact set), then $\varphi$ is uhc *and* closed-valued $\iff$ its graph is closed: whenever $x_n \to x_0$, $y_n \in \varphi(x_n)$, and $y_n \to y_0$, we have $y_0 \in \varphi(x_0)$.

*In words:* no sequence riding along the graph can converge to a point that isn't on the graph. Limits of best choices are best choices. This "**closed graph**" form is exactly what Kakutani will demand.

**Lower hemicontinuity (lhc).** $\varphi$ is lhc at $x_0$ if for every open $V$ with $V \cap \varphi(x_0) \neq \varnothing$ there is a neighborhood $U$ of $x_0$ with $V \cap \varphi(x) \neq \varnothing$ for all $x \in U$. Sequentially: for every $y_0 \in \varphi(x_0)$ and every $x_n \to x_0$, there exist $y_n \in \varphi(x_n)$ with $y_n \to y_0$.

*In words:* every point of the output-set at $x_0$ is approachable — you can track it by choices from all nearby sets, so the set never suddenly implodes. **Continuous** means uhc *and* lhc.

**Berge's Maximum Theorem.** Let $\Theta$, $X$ be (metric) spaces, $f: X \times \Theta \to \mathbb{R}$ continuous, and $C: \Theta \rightrightarrows X$ a **continuous** (uhc + lhc), **compact-valued**, **nonempty-valued** correspondence. Define the value function and the argmax correspondence

$$V(\theta) = \max_{x \in C(\theta)} f(x,\theta), \qquad x^*(\theta) = \arg\max_{x \in C(\theta)} f(x,\theta) = \{\, x \in C(\theta) : f(x,\theta) = V(\theta)\,\}.$$

Then $V$ is **continuous**, and $x^*$ is **nonempty-valued, compact-valued, and uhc**.

*In words:* if the objective moves continuously and the feasible set moves continuously (both ways) while staying compact, then the best *value* you can achieve moves continuously, and the *set of maximizers* has a closed graph — it can shrink or jump between ties, but it never sprouts a maximizer out of nowhere. The compactness of $C(\theta)$ is what guarantees a max exists at all (a continuous function on a nonempty compact set attains its maximum — the extreme value theorem from [real analysis](../../real-analysis/syllabus.md)), and joint continuity of $f$ plus continuity of $C$ propagate that into $\theta$.

## Picture

![Left: an upper-hemicontinuous correspondence whose graph is closed, with a thick set-valued segment over x₀ whose endpoints belong to the graph. Right: uhc fails — as x→x₀ the branches converge to a high value that is not in φ(x₀), an open point that escaped the graph.](assets/01-02-fig1.svg)

The left graph is closed: the fat vertical segment $\varphi(x_0)$ *includes* its endpoints, so any sequence of nearby points converges into it. The right one is not closed: the branches climb toward the open circle, but that limit is missing from $\varphi(x_0)$ (which sits low) — a point escaped, so uhc fails.

## Worked examples

**Example 1 (a best-response-flavored correspondence).** A player chooses $x \in [0,1]$ against a parameter $\theta \in [-1,1]$ with payoff $f(x,\theta) = \theta x$ (linear — the payoff to "quantity" $x$ when the price signal is $\theta$). The best response is

$$x^*(\theta) = \arg\max_{x\in[0,1]} \theta x = \begin{cases} \{1\}, & \theta > 0,\\[2pt] [0,1], & \theta = 0,\\[2pt] \{0\}, & \theta < 0.\end{cases}$$

At $\theta = 0$ the player is indifferent across the *entire* interval — the tie makes the map genuinely set-valued. Is $x^*$ uhc? Check the closed graph directly. Take $\theta_n \to 0$ with $x_n \in x^*(\theta_n)$, $x_n \to x_0$. If $\theta_n > 0$ then $x_n = 1$, limit $1 \in [0,1] = x^*(0)$; if $\theta_n < 0$ then $x_n = 0$, limit $0 \in [0,1]$; mixed sequences give limits in $\{0,1\} \subset [0,1]$. Every graph-limit lands in $x^*(0)$, so the graph is closed and $x^*$ is uhc — exactly as Berge promises, since $f(x,\theta)=\theta x$ is continuous and $C(\theta) \equiv [0,1]$ is a constant (hence continuous, compact) constraint. Note it is **not lhc** at $\theta = 0$: the point $x=\tfrac12 \in x^*(0)$ is *not* the limit of any $x_n \in x^*(\theta_n)$ for $\theta_n \neq 0$ (those are pinned to $0$ or $1$). The argmax jumped.

**Example 2 (a uhc-not-lhc correspondence, and Berge applied).** Consider the constraint correspondence

$$C(\theta) = \begin{cases} \{0\}, & \theta \neq 0,\\ [-1,1], & \theta = 0,\end{cases}$$

on $\theta \in [-1,1]$. Its graph is closed (the only limit of the branches $\{0\}$ is $0 \in [-1,1]$), so $C$ is **uhc** and compact-valued — but it is **not lhc** at $0$: the point $x=1 \in C(0)$ is unreachable from nearby sets $\{0\}$. So $C$ is *not continuous*, and Berge's hypotheses fail. Watch the theorem's conclusion fail too: with $f(x,\theta)=x$,

$$V(\theta) = \max_{x\in C(\theta)} x = \begin{cases} 0, & \theta \neq 0,\\ 1, & \theta = 0,\end{cases}$$

which is **discontinuous** at $\theta=0$ — the value jumps to $1$ exactly at the instant the feasible set fattens. This is why Berge insists on lhc of $C$, not just uhc: without it, the achievable value can leap.

Now repair it. Take a genuinely continuous constraint $C(\theta) = [-|\theta|, |\theta|]$ (compact, nonempty, and both uhc and lhc — the endpoints move continuously with $\theta$) and the same $f(x,\theta)=x$. Then $V(\theta) = |\theta|$, which is **continuous**, and $x^*(\theta) = \{|\theta|\}$, a single point moving continuously — uhc, as Berge guarantees. All hypotheses hold, all conclusions hold.

## Watch out

- **You might think uhc and lhc are two names for the same "continuity," but they are independent.** Example 1's $x^*$ is uhc but not lhc; one can build maps that are lhc but not uhc (e.g. $\varphi(\theta)=\{0\}$ for $\theta\neq 0$ and $\varphi(0)=\{0\}$ perturbed to expand — an "imploding at the limit" pattern). A map can have either without the other; *continuous* requires both.
- **You might think uhc $\iff$ closed graph always, but the equivalence needs a compactness caveat.** The clean "closed graph $\Rightarrow$ uhc" direction requires the range to sit in a compact set (or local boundedness). Without it, closed graph and uhc genuinely differ — e.g. $\varphi(x)=\{1/x\}$ on $(0,\infty)$ has closed graph but is not uhc near $0$ because the values run off to infinity. In game theory strategy sets are compact (from [1.1](01-01-convex-sets-functions-separating-hyperplanes.md)), so we get to use the equivalence freely.
- **You might think Berge gives continuity of the argmax, but it only gives uhc.** The maximizer *set* $x^*(\theta)$ is uhc (closed graph) but generally **not lhc** — it can jump discontinuously between tied optima (Example 1). What is always continuous is the *value* $V$, not the *maximizer*.
- **You might forget a function is a special correspondence.** A single-valued $\varphi(x)=\{g(x)\}$ is uhc + lhc as a correspondence $\iff$ $g$ is continuous as a function. The correspondence language strictly generalizes ordinary continuity.

## One-liner

> Best-response is set-valued and Berge's theorem says optimizing over a continuously-moving compact feasible set makes the value continuous and the argmax upper-hemicontinuous — a closed graph, which is exactly the fuel Kakutani burns to produce Nash equilibrium.

## Problems

**P1 (🟢)** For $f(x,\theta) = -(x-\theta)^2$ on $x \in [0,1]$, $\theta \in \mathbb{R}$, with constant constraint $C(\theta)=[0,1]$, compute $x^*(\theta)$ and $V(\theta)$ explicitly. Confirm by inspection that $V$ is continuous and $x^*$ is a (single-valued) uhc correspondence, consistent with Berge.

**P2 (🟡)** Let $\varphi:[0,2]\rightrightarrows \mathbb{R}$ be $\varphi(x) = \{0\}$ for $x \in [0,1)$ and $\varphi(x) = [0,1]$ for $x \in [1,2]$. Determine whether $\varphi$ is uhc at $x=1$, whether it is lhc at $x=1$, and justify each with the sequential characterization.

**P3 (🔴, optional)** Two firms each choose a quantity $q_i \in [0,K]$; firm $i$'s payoff is $\pi_i(q_i,q_j) = q_i(a - q_i - q_j)$ (Cournot), with $a>0$ and $K$ large. Show firm $i$'s best-response correspondence $B_i(q_j) = \arg\max_{q_i\in[0,K]} \pi_i(q_i,q_j)$ is in fact single-valued and continuous, and explain which Berge hypotheses deliver that. (You need not solve for the equilibrium — just certify $B_i$ is uhc via Berge, then note why it's even better here.)

<details>
<summary>Solutions</summary>

**P1** $f(x,\theta)=-(x-\theta)^2$ is maximized (over all reals) at $x=\theta$; projected onto the box $[0,1]$ the maximizer is the clamp $x^*(\theta)=\operatorname{clip}(\theta,0,1)$:

$$x^*(\theta)=\begin{cases}0,&\theta<0,\\ \theta,&0\le\theta\le 1,\\ 1,&\theta>1,\end{cases}\qquad V(\theta)=\begin{cases}-\theta^2,&\theta<0,\\ 0,&0\le\theta\le 1,\\ -(1-\theta)^2,&\theta>1.\end{cases}$$

$x^*$ is single-valued and continuous (a clamp of a continuous function), hence uhc; $V$ is continuous (piecewise smooth, and the pieces agree at $\theta=0,1$: both give $0$). $f$ is continuous and $C\equiv[0,1]$ is a constant compact constraint, so Berge applies and its conclusions ($V$ continuous, $x^*$ uhc) hold — as computed. ✓

**P2** *uhc at $x=1$?* Test the closed graph (range sits in compact $[0,1]$, so uhc $\iff$ closed graph). Take $x_n\to 1$, $y_n\in\varphi(x_n)$, $y_n\to y_0$. If $x_n<1$ then $y_n=0\to 0\in[0,1]=\varphi(1)$; if $x_n\ge 1$ then $y_n\in[0,1]$ and its limit $y_0\in[0,1]=\varphi(1)$. Every graph-limit lands in $\varphi(1)$, so the graph is closed and $\varphi$ is **uhc** at $1$.

*lhc at $x=1$?* Take $y_0 = 1 \in \varphi(1)$ and the sequence $x_n = 1 - \tfrac1n \to 1$ (approaching from the left). We need $y_n\in\varphi(x_n)=\{0\}$ with $y_n\to 1$ — impossible, since the only choice is $y_n=0\to 0\neq 1$. So $\varphi$ is **not lhc** at $1$: the set implodes to $\{0\}$ as you approach from below, stranding the point $y_0=1$. (It *is* uhc but *not* lhc — the mirror image of Example 1's argmax, and a clean illustration that the two notions are independent.)

**P3** Fix $q_j$. Then $\pi_i(q_i,q_j)=q_i(a-q_i-q_j) = -q_i^2 + (a-q_j)q_i$ is a strictly concave quadratic in $q_i$ (coefficient $-1<0$), so it has a *unique* unconstrained maximizer $q_i = \tfrac{a-q_j}{2}$; clamped to $[0,K]$ (with $K$ large enough not to bind for relevant $q_j$) it gives the single-valued reaction $B_i(q_j)=\max\{0,\ \tfrac{a-q_j}{2}\}$, a continuous function of $q_j$.

Berge's certificate: $\pi_i$ is jointly continuous in $(q_i,q_j)$, and the constraint $C(q_j)\equiv[0,K]$ is a constant, hence continuous, compact, nonempty correspondence — so Berge gives $B_i$ uhc and $V$ (the max profit) continuous. Here we get more than Berge's generic uhc because **strict concavity forces a unique argmax**: a uhc correspondence that is single-valued *is* a continuous function (uhc + single-valued $\Rightarrow$ continuous). That upgrade — set-valued uhc becoming a genuine continuous function under strict concavity — is why Cournot can be handled with Brouwer, while games with ties (Example 1) need the full set-valued Kakutani machinery of 1.3. ✓

</details>

## Connections

- **Backward:** the compact, convex strategy sets from [1.1](01-01-convex-sets-functions-separating-hyperplanes.md) are exactly the compact-valued constraint sets $C(\theta)$ Berge needs; compactness is what makes maxima *exist* and the closed-graph characterization of uhc valid.
- **Forward:** [1.3](01-03-brouwer-kakutani-fixed-points.md) — Kakutani's fixed-point theorem requires a correspondence that is convex-valued *and has a closed graph* (uhc). Berge is the supplier of that hypothesis; without uhc there is no fixed point to call an equilibrium.
- **Forward (Nash existence):** in 2.3 the best-response correspondence $B(s) = \arg\max$ over each player's compact strategy set is uhc *by Berge* (continuous payoffs, continuous compact constraints), convex-valued by concavity, so Kakutani yields a fixed point — a Nash equilibrium. This lesson is the load-bearing lemma of the whole existence theorem.
- **Sideways (grad micro):** the very same theorem underwrites consumer theory — [grad-micro](../../grad-micro/syllabus.md) uses Berge to prove the Walrasian demand correspondence is uhc and the indirect utility / expenditure functions are continuous in prices, and it feeds general-equilibrium existence exactly as it feeds Nash existence here.
- **Sideways (real analysis):** the extreme value theorem and the sequential (closed-graph) reasoning come straight from [real analysis](../../real-analysis/syllabus.md); a correspondence is uhc + lhc at a point iff, when single-valued, the underlying function is continuous there — Berge is the set-valued generalization of "continuous function on a compact set attains a continuous max." See the [syllabus](../syllabus.md) for where Module 2 picks this up.
