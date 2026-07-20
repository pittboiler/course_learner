# Real Analysis · Lesson 5.2: Continuity on compact sets

> ⏱ ~15 min · Module 5: Continuity · Builds on: [5.1 Limits of functions and continuity](05-01-limits-and-continuity.md), [4.2 Compactness and Heine–Borel](04-02-compactness-heine-borel.md) · Unlocks: [5.3 The Intermediate Value Theorem](05-03-intermediate-value-theorem.md)

## Why this matters

Continuity, as you built it in [5.1](05-01-limits-and-continuity.md), is a purely *local* promise: near each point, small input changes make small output changes. That promise says nothing global — a continuous function can still shoot off to infinity, sidle up to a value it never reaches, or demand a finer and finer $\delta$ as you move along. This lesson is where Module 4 pays off: **compactness is exactly the extra hypothesis that upgrades every local promise into a global guarantee.** Add it and a continuous function suddenly can't escape to infinity, *must* attain a highest and a lowest value, and can't wiggle arbitrarily fast. That last fact — uniform continuity — is what makes the Riemann integral of Module 7 work and what every "$f_n\to f$ uniformly" argument in Module 8 secretly relies on.

## The idea

Picture a continuous curve drawn over a *closed* interval $[a,b]$ — both endpoints included. Trace it with your pen. You cannot lift off to $+\infty$ (the domain has no escape hatch to run toward), and somewhere along the way your pen reaches its highest point and its lowest point — it *touches* them, they aren't merely approached. That's the Extreme Value Theorem, and everything about it hinges on the interval being **closed and bounded**, i.e. compact.

Now open one end. On $(0,1)$ the function $f(x)=x$ is perfectly continuous, but it has no maximum: it gets arbitrarily close to $1$ without ever reaching it, because $1$ was evicted from the domain. Nothing went wrong with the *function* — the *domain* stopped being compact, and the guarantee evaporated.

The second gift is subtler. Ordinary continuity lets $\delta$ depend on *where* you are: at a steep part of the graph you need a tiny $\delta$, at a flat part a big one is fine. **Uniform** continuity demands a *single* $\delta$ that works everywhere at once. That's a real restriction — $1/x$ near $0$ needs an ever-smaller $\delta$ and never settles on one. But over a compact domain, the pointwise $\delta$'s can never spiral to zero: there are, in a sense, only finitely many "hard spots," and the worst one sets a floor. That's Heine–Cantor.

The engine underneath both is the same one machine from Module 4: **the continuous image of a compact set is compact.** Prove that once, and the rest falls out.

## The formal version

Throughout, $D\subseteq\mathbb{R}$ and $f:D\to\mathbb{R}$. Recall from [4.2](04-02-compactness-heine-borel.md) that $K\subseteq\mathbb{R}$ is **compact** iff every sequence in $K$ has a subsequence converging to a point of $K$ (sequential compactness), equivalently — by Heine–Borel — iff $K$ is closed and bounded. We use the **sequential criterion for continuity** from [5.1](05-01-limits-and-continuity.md): $f$ is continuous at $c$ iff $x_n\to c$ (with $x_n\in D$) forces $f(x_n)\to f(c)$.

**Theorem (continuous image of a compact set is compact).** If $K\subseteq\mathbb{R}$ is compact and $f:K\to\mathbb{R}$ is continuous, then $f(K)=\{f(x):x\in K\}$ is compact.

> In words: continuity can't turn a "no escape, no gaps" set into one with an escape or a gap. Squeeze a compact set through a continuous map and it stays compact.

*Proof.* We show $f(K)$ is sequentially compact. Take any sequence $(y_n)$ in $f(K)$; each $y_n=f(x_n)$ for some $x_n\in K$. Since $K$ is compact, $(x_n)$ has a subsequence $x_{n_k}\to x$ with $x\in K$. By continuity (sequential criterion), $f(x_{n_k})\to f(x)$, i.e. $y_{n_k}\to f(x)$, and $f(x)\in f(K)$. So every sequence in $f(K)$ has a subsequence converging inside $f(K)$: $f(K)$ is compact. $\blacksquare$

**Extreme Value Theorem (EVT).** If $f:[a,b]\to\mathbb{R}$ is continuous, then $f$ attains a maximum and a minimum: there exist $c,d\in[a,b]$ with $f(d)\le f(x)\le f(c)$ for all $x\in[a,b]$.

> In words: a continuous function on a closed bounded interval doesn't just have a supremum and infimum of its values — it actually *hits* them at genuine points of the domain.

*Proof.* $[a,b]$ is compact (Heine–Borel), so by the Theorem $f([a,b])$ is compact, hence **closed and bounded**. Bounded means $M=\sup f([a,b])$ is a finite real number. Being a supremum, $M$ is a limit of values in $f([a,b])$ — there is a sequence $y_n\in f([a,b])$ with $y_n\to M$ — so $M$ is a limit point of the set (or already in it). Because $f([a,b])$ is **closed**, it contains its limit points, so $M\in f([a,b])$: there is a $c\in[a,b]$ with $f(c)=M$. That $c$ is the maximizer. The same argument on $m=\inf f([a,b])$ produces a minimizer $d$. $\blacksquare$

**Uniform continuity.** $f:D\to\mathbb{R}$ is **uniformly continuous** on $D$ if
$$\forall\varepsilon>0\;\exists\delta>0\;\forall x,y\in D:\quad |x-y|<\delta\;\Rightarrow\;|f(x)-f(y)|<\varepsilon.$$

> In words: one $\delta$ handles the whole set. Name the tolerance $\varepsilon$, and there's a single closeness $\delta$ such that *any* two points within $\delta$ of each other — no matter where they sit in $D$ — have outputs within $\varepsilon$.

The order of quantifiers is the entire point. Compare ordinary continuity at every point: $\forall x\,\forall\varepsilon\,\exists\delta\,\forall y\,(\dots)$ — the $\delta$ comes *after* $x$, so it may depend on $x$. In uniform continuity the $\delta$ comes *before* $x$ and $y$: it must be chosen up front, blind to location.

**Heine–Cantor Theorem.** If $K\subseteq\mathbb{R}$ is compact and $f:K\to\mathbb{R}$ is continuous, then $f$ is uniformly continuous on $K$.

> In words: on a compact domain the distinction collapses — continuity is *automatically* uniform. Compactness is precisely what stops the required $\delta$ from shrinking to zero.

*Proof (by contradiction).* Suppose $f$ is continuous but **not** uniformly continuous. Negating the definition: there is one bad $\varepsilon_0>0$ such that *no* $\delta$ works. In particular $\delta=\tfrac1n$ fails for each $n$, so we can pick points $x_n,y_n\in K$ with
$$|x_n-y_n|<\tfrac1n \quad\text{but}\quad |f(x_n)-f(y_n)|\ge\varepsilon_0.$$
By compactness of $K$, $(x_n)$ has a subsequence $x_{n_k}\to x\in K$ (this is Bolzano–Weierstrass inside $K$). Since $|x_{n_k}-y_{n_k}|<\tfrac{1}{n_k}\to0$, the matching subsequence $y_{n_k}\to x$ too. By continuity at $x$, $f(x_{n_k})\to f(x)$ and $f(y_{n_k})\to f(x)$, so
$$|f(x_{n_k})-f(y_{n_k})|\to|f(x)-f(x)|=0.$$
But every term is $\ge\varepsilon_0>0$ — a contradiction. So $f$ must be uniformly continuous. $\blacksquare$

## Picture

![A continuous curve over the closed interval [a,b], with dots marking the attained maximum M (at c) and minimum m (at d), dashed lines dropping to both axes](assets/05-02-fig1.svg)

The curve is drawn over the *closed* interval $[a,b]$, so its endpoints are fair game. It rises to a genuine highest point — the blue dot at height $M$, reached at $x=c$ — and sinks to a genuine lowest point — the red dot at height $m$, reached at $x=d$. EVT guarantees both dots *exist and lie on the graph*. Evict an endpoint (make it $(a,b)$) or punch a hole in the curve (drop continuity), and one of the dots can slip through your fingers.

## Worked examples

**Example 1 (mechanical — one $\delta$ works, or it doesn't).** Show $f(x)=x^2$ is uniformly continuous on $[0,3]$ but not on all of $\mathbb{R}$.

*On $[0,3]$:* for $x,y\in[0,3]$,
$$|x^2-y^2|=|x+y|\,|x-y|\le 6\,|x-y|,$$
since $|x+y|\le 6$. So given $\varepsilon>0$, take $\delta=\varepsilon/6$ (chosen up front, independent of $x,y$): then $|x-y|<\delta\Rightarrow|x^2-y^2|\le 6\delta=\varepsilon$. One $\delta$, whole interval — uniform. (Heine–Cantor promised this for free, since $[0,3]$ is compact; here we see it concretely.)

*On $\mathbb{R}$:* the bound $|x+y|\le 6$ is gone, and it must be. Take $x_n=n$ and $y_n=n+\tfrac1n$. Then $|x_n-y_n|=\tfrac1n\to0$, yet
$$|x_n^2-y_n^2|=\left(2n+\tfrac1n\right)\cdot\tfrac1n = 2+\tfrac{1}{n^2}\ge 2.$$
Points get arbitrarily close while their outputs stay $\ge 2$ apart — the exact failure the Heine–Cantor proof exploits. No single $\delta$ can work, because far out the parabola is arbitrarily steep. The culprit is that $\mathbb{R}$ is **not compact** (unbounded).

**Example 2 (why you'd care — $1/x$ near a hole).** $f(x)=1/x$ on $(0,1)$ is continuous everywhere on its domain, yet *not* uniformly continuous. Take $x_n=\tfrac1n$ and $y_n=\tfrac1{n+1}$. Then
$$|x_n-y_n|=\frac1n-\frac1{n+1}=\frac{1}{n(n+1)}\to0,\qquad |f(x_n)-f(y_n)|=|n-(n+1)|=1\ \not\to 0.$$
As you approach $0$, the graph steepens without bound, so the $\delta$ that continuity hands you at each point marches steadily toward $0$ and never settles on a positive floor. Again the domain is the problem: $(0,1)$ is bounded but **not closed** — the bad behavior piles up at the missing endpoint $0$. Restrict to any compact $[a,1]$ with $a>0$ and Heine–Cantor kicks in: uniform continuity returns. Non-compactness, not the formula, is what breaks uniformity.

## Watch out

- You might think EVT holds for any continuous function on a bounded interval, but it needs the interval **closed** too. On $(0,1)$, $f(x)=x$ has $\sup=1$ that is never attained — the compactness of $[a,b]$ (closed *and* bounded) is load-bearing, and dropping either half kills the theorem.
- You might think a discontinuity is harmless if the domain is compact, but EVT needs **both** hypotheses. On the compact $[0,1]$, the function $f(x)=x$ for $x<1$ and $f(1)=0$ climbs toward $1$ yet never reaches it (the one point that would attain the sup was moved) — continuity is just as load-bearing as compactness.
- You might think uniform continuity is something a function has "at a point," but it is a property of $f$ on a **whole set**. It makes no sense at a single point — the definition quantifies over *all* pairs $x,y$ in $D$. And "continuous" alone never upgrades to "uniformly continuous": you need a reason, and on the real line that reason is almost always compactness of the domain.

## One-liner

> Compactness is the hypothesis that turns continuity's local promises global: on a compact set a continuous function stays compact-valued, hence attains its max and min (EVT), and can never wiggle faster than one universal $\delta$ allows (Heine–Cantor).

## Problems

**P1 (🟢)** Let $f:[1,4]\to\mathbb{R}$ be continuous with $f(1)=2$, $f(4)=5$, and suppose $f$ takes the value $7$ somewhere. Does $f$ attain a maximum on $[1,4]$? State the theorem you're using and check its hypotheses. Then give a continuous function on the *open* interval $(1,4)$ with no maximum, to show the hypothesis can't be relaxed.

**P2 (🟡)** Prove directly from the definition that $f(x)=\sqrt{x}$ is uniformly continuous on $[0,\infty)$. (Hint: for $x,y\ge0$, establish $|\sqrt{x}-\sqrt{y}|\le\sqrt{|x-y|}$ — split into the cases $|x-y|\le 1$ and $>1$, or square and compare. Note $[0,\infty)$ is *not* compact, so Heine–Cantor does not apply — you must do it by hand.)

**P3 (🔴, optional)** Suppose $f:\mathbb{R}\to\mathbb{R}$ is continuous and $\lim_{x\to+\infty}f(x)=\lim_{x\to-\infty}f(x)=0$. Prove that $f$ is uniformly continuous on $\mathbb{R}$, and prove that $f$ attains a maximum or a minimum (possibly both) — even though $\mathbb{R}$ is not compact. (Hint: the tails are nearly flat; find a compact interval outside which $|f|<\varepsilon$, apply Heine–Cantor inside it, and stitch.)

<details>
<summary>Solutions</summary>

**P1** Yes. Use the **Extreme Value Theorem**: $f$ is continuous on the closed, bounded — hence compact — interval $[1,4]$, so it attains both a maximum and a minimum. (The specific values $2,5,7$ are a red herring; the two hypotheses "continuous" and "domain $=[a,b]$ compact" are all EVT needs. Incidentally $f$ reaches at least $7$, so its max is $\ge 7$.)

*Open-interval failure:* $g(x)=x$ on $(1,4)$ is continuous with $\sup g=4$, but $4\notin(1,4)$, so no point attains the supremum — $g$ has no maximum. Dropping "closed" (the domain is no longer compact) breaks EVT. (Or $g(x)=1/(x-1)$ on $(1,4)$, which is even unbounded.)

**P2** First establish $|\sqrt{x}-\sqrt{y}|\le\sqrt{|x-y|}$ for $x,y\ge0$. WLOG $x\ge y\ge0$. Then $\sqrt{x}-\sqrt{y}\ge0$, and since $\sqrt{y}\ge0$,
$$(\sqrt{x}-\sqrt{y})^2=x-2\sqrt{xy}+y\le x - 2y + y = x-y=|x-y|,$$
using $\sqrt{xy}\ge\sqrt{y\cdot y}=y$ (because $x\ge y$). Taking square roots: $|\sqrt{x}-\sqrt{y}|=\sqrt{x}-\sqrt{y}\le\sqrt{x-y}=\sqrt{|x-y|}$.

Now, given $\varepsilon>0$, choose $\delta=\varepsilon^2$ (up front, independent of $x,y$). If $|x-y|<\delta=\varepsilon^2$, then
$$|\sqrt{x}-\sqrt{y}|\le\sqrt{|x-y|}<\sqrt{\varepsilon^2}=\varepsilon.$$
So $f$ is uniformly continuous on all of $[0,\infty)$. (Notice the single $\delta=\varepsilon^2$ works even though the domain is unbounded and the derivative $\tfrac{1}{2\sqrt{x}}$ blows up at $0$ — the $\sqrt{\cdot}$ growth is *slow enough* that no runaway steepness accumulates. Uniform continuity does not require compactness; it's just that compactness *guarantees* it, while off a compact set you must check.)

**P3** *Uniform continuity.* Fix $\varepsilon>0$. Since $f(x)\to0$ at $\pm\infty$, there is $R>0$ with $|f(x)|<\varepsilon/2$ whenever $|x|\ge R$. The interval $[-R-1,\,R+1]$ is compact, so by Heine–Cantor $f$ is uniformly continuous there: get $\delta_0>0$ such that for $x,y$ in that interval, $|x-y|<\delta_0\Rightarrow|f(x)-f(y)|<\varepsilon$. Put $\delta=\min(\delta_0,1)$ and take any $x,y\in\mathbb{R}$ with $|x-y|<\delta$.
- If both $|x|,|y|\ge R$: then $|f(x)-f(y)|\le|f(x)|+|f(y)|<\varepsilon/2+\varepsilon/2=\varepsilon$.
- Otherwise at least one, say $x$, has $|x|<R$; since $|x-y|<\delta\le1$, both $x,y$ lie in $[-R-1,R+1]$, so the Heine–Cantor $\delta_0$ gives $|f(x)-f(y)|<\varepsilon$.

Either way $|f(x)-f(y)|<\varepsilon$, so $f$ is uniformly continuous on $\mathbb{R}$.

*Attains an extremum.* If $f\equiv0$ it attains both trivially. Otherwise pick a point $x_0$ with $f(x_0)\ne0$; say $f(x_0)>0$ (the $f(x_0)<0$ case is identical with min). Let $\varepsilon=f(x_0)/2>0$. Choose $R$ with $|f(x)|<\varepsilon$ for $|x|\ge R$, and enlarge $R$ so $x_0\in[-R,R]$. On the compact $[-R,R]$, EVT gives a maximizer $c$: $f(c)\ge f(x_0)=2\varepsilon$. For any $x$ *outside* $[-R,R]$, $f(x)<\varepsilon<2\varepsilon\le f(c)$. So $f(c)$ dominates $f$ everywhere on $\mathbb{R}$ — a global maximum. (Vanishing tails act as a "soft lid," recreating the effect of a compact domain: all the action is confined to a compact core.)

</details>

## Flashback

**From Lesson 4.2 (Compactness and Heine–Borel):** For each set, decide whether it is compact and justify — via Heine–Borel where it applies, or by exhibiting an open cover with no finite subcover.
(a) $A=\{0\}\cup\{1/n : n\in\mathbb{N}\}=\{0,1,\tfrac12,\tfrac13,\dots\}$.
(b) $B=(0,1]$.

<details>
<summary>Solution</summary>

**(a) Compact.** $A$ is clearly bounded (all points lie in $[0,1]$). It is closed: its only limit point is $0$ (the points $1/n$ accumulate only at $0$; each $1/n$ is isolated), and $0\in A$, so $A$ contains all its limit points and is closed. Closed and bounded $\Rightarrow$ compact by **Heine–Borel**. (Sanity check via covers: any open cover has a set $U_0\ni0$; since $1/n\to0$, $U_0$ contains all but finitely many $1/n$, and we cover the finitely many stragglers with one set each — a finite subcover always exists. Including the limit point $0$ is exactly what makes this work.)

**(b) Not compact.** $B=(0,1]$ is bounded but **not closed**: $0$ is a limit point of $B$ (points $1/n\in B$ approach it) yet $0\notin B$. Heine–Borel then denies compactness. Explicit witness: the cover $\{U_n\}_{n\ge1}$ with $U_n=(\tfrac1n,\,2)$ is open and $\bigcup_n U_n=(0,2)\supseteq B$, but any *finite* subcollection has a largest index $N$, whose union is $(\tfrac1N,2)$ — missing every point of $(0,\tfrac1N]\cap B\ne\varnothing$. No finite subcover, so $B$ is not compact. (This is the same missing-endpoint pathology that broke uniform continuity for $1/x$ in Example 2 — non-compactness has one recurring face.)

</details>

## Connections

- **Backward:** this lesson is the reason [4.2](04-02-compactness-heine-borel.md) existed. Compactness looked like abstract point-set bookkeeping; here it becomes the single hypothesis powering EVT and Heine–Cantor. The proofs run on Bolzano–Weierstrass (Module 2) and the sequential criterion for continuity from [5.1](05-01-limits-and-continuity.md) — Modules 2, 4, and 5 converging on one payoff.
- **Forward:** [5.3](05-03-intermediate-value-theorem.md) supplies the *other* topological gift — **connectedness** gives the Intermediate Value Theorem, the "no gaps in the output" companion to EVT's "attains its extremes." Together they pin down the shape of a continuous function's range. Uniform continuity returns as the crucial lemma when Module 7 proves every continuous function on $[a,b]$ is Riemann integrable, and again in Module 8 whenever uniform convergence is at stake.
- **Sideways (optimization / econ):** EVT is the existence theorem beneath every "the maximum exists" claim in economics — a continuous utility or profit function on a compact (closed, bounded) budget/feasible set *attains* its optimum, which is what lets `micro-refresher`'s Lagrange method and later constrained-optimization arguments assume a maximizer to solve for in the first place. No compact feasible set, no guaranteed optimum.
