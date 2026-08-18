# Measure Theory · Lesson 3.2: Egorov's and Lusin's theorems

> ⏱ ~15 min · Module 3: $L^p$ spaces and modes of convergence · Builds on: [3.1 Modes of convergence](03-01-modes-of-convergence.md) · Unlocks: [3.3 The $L^p$ spaces: Hölder and Minkowski](03-03-lp-holder-minkowski.md)

## Why this matters

Measurable objects are wild — a measurable function can be discontinuous everywhere, a.e. convergence can fail to be uniform at every scale. These two theorems say the wildness is *thin*: it lives on a set you can shrink below any $\delta$ you name. Delete a sliver and pointwise-a.e. convergence becomes **uniform** (Egorov); delete a sliver and a measurable function becomes **continuous** (Lusin). That is the working analyst's escape hatch — it is how you steal uniform estimates and continuity theorems for functions that have no right to them, and it is the honest content of Littlewood's slogan that measure theory is "just" analysis with a small bad set swept aside.

## The idea

You already saw in [Lesson 3.1](03-01-modes-of-convergence.md) that $f_n \to f$ almost everywhere is a *pointwise* statement: each $x$ eventually settles down, but the "eventually" can depend viciously on $x$ (the escaping bump was the warning shot). Uniform convergence demands a *single* rate that works for all $x$ at once — much stronger.

**Egorov** says: on a space of finite total measure, the gap between the two is small in exactly the measure-theoretic sense. The points where the rate is slow are few. Round up all the slow points into a set $E$ of tiny measure, throw it out, and on what remains the rates line up into a uniform one.

**Lusin** is the same move for a single function instead of a sequence. A measurable $f$ can jump around madly, but the "bad" behavior — the part that spoils continuity — is confined to a set you can delete below any $\delta$; restricted to the compact remainder, $f$ is continuous. Both are instances of one meta-principle:

> **Littlewood's three principles.** (1) Every measurable set is *nearly* a finite union of intervals (nearly open). (2) Every measurable function is *nearly* continuous (Lusin). (3) Every a.e.-convergent sequence is *nearly* uniformly convergent (Egorov).

"Nearly" always means the same thing: *off a set of arbitrarily small measure.*

## The formal version

Fix a measure space $(X,\mathcal{M},\mu)$. All functions are measurable and finite-valued a.e., with values in $\mathbb{R}$ (or $\mathbb{C}$).

**Egorov's Theorem.** Suppose $\mu(X) < \infty$ and $f_n \to f$ almost everywhere. Then for every $\delta > 0$ there is a measurable set $E \subseteq X$ with $\mu(E) < \delta$ such that $f_n \to f$ **uniformly** on $X \setminus E$.

*In words:* on a finite-measure space, a.e. convergence is uniform once you delete a set of measure less than any $\delta$ you fix in advance. (This is the mode called **almost uniform convergence** in 3.1.)

*Proof.* Discard the null set where $f_n \not\to f$; so assume $f_n(x) \to f(x)$ for every $x$. For integers $n,k \ge 1$ define the "still-bad after step $n$, at tolerance $1/k$" set
$$E_n^k \;=\; \bigcup_{m \ge n} \Big\{\, x : |f_m(x) - f(x)| \ge \tfrac1k \,\Big\}.$$
Fix $k$. As $n$ grows the union runs over fewer terms, so $E_1^k \supseteq E_2^k \supseteq \cdots$ decreases, and
$$\bigcap_{n=1}^\infty E_n^k \;=\; \big\{\, x : |f_m(x)-f(x)| \ge \tfrac1k \text{ for infinitely many } m \,\big\}.$$
No $x$ lies in this intersection: since $f_m(x) \to f(x)$, eventually $|f_m(x)-f(x)| < 1/k$. So $\mu\!\left(\bigcap_n E_n^k\right) = 0$.

**Here is the one place finite measure is used.** Because $\mu(X) < \infty$ we have $\mu(E_1^k) < \infty$, so **continuity from above** ([Lesson 1.3](01-03-measures-properties.md)) applies to the decreasing sequence:
$$\mu(E_n^k) \;\downarrow\; \mu\!\Big(\bigcap_n E_n^k\Big) = 0 \qquad (n\to\infty).$$
Hence for each $k$ we may pick $n_k$ with $\mu\big(E_{n_k}^k\big) < \delta\, 2^{-k}$. Set
$$E \;=\; \bigcup_{k=1}^\infty E_{n_k}^k, \qquad \mu(E) \;\le\; \sum_{k=1}^\infty \mu\big(E_{n_k}^k\big) \;<\; \sum_{k=1}^\infty \delta\,2^{-k} \;=\; \delta.$$
Uniformity off $E$: let $\varepsilon > 0$ and choose $k$ with $1/k < \varepsilon$. If $x \notin E$ then in particular $x \notin E_{n_k}^k$, which means $|f_m(x)-f(x)| < 1/k$ for *all* $m \ge n_k$. The threshold $n_k$ depends on $k$ (hence on $\varepsilon$) but **not on $x$** — that is uniform convergence on $X \setminus E$. $\blacksquare$

**Lusin's Theorem.** Let $f : [a,b] \to \mathbb{R}$ be Lebesgue measurable (and finite a.e.). Then for every $\delta > 0$ there is a compact set $K \subseteq [a,b]$ with $m([a,b]\setminus K) < \delta$ such that the restriction $f|_K$ is continuous.

*In words:* a measurable function on an interval is continuous once you restrict it to a compact set whose complement has measure less than any $\delta$.

*Proof (three ingredients).* **(i) Simple approximation** ([Lesson 2.2](02-02-simple-functions-integral.md)): there are simple functions $s_j \to f$ pointwise a.e. on $[a,b]$. **(ii) Each simple function is almost continuous.** Write $s_j = \sum_i c_i \chi_{A_i}$; by inner regularity of Lebesgue measure ([Lesson 1.5](01-05-lebesgue-measure-rn.md)) each $A_i$ contains a compact $C_i$ with $m(A_i \setminus C_i)$ tiny. On the disjoint compact union $F_j = \bigsqcup_i C_i$ the function $s_j$ is locally constant, hence continuous; choose $F_j$ so that $m([a,b]\setminus F_j) < \delta\,2^{-j-2}$. **(iii) Egorov glues it.** Since $[a,b]$ has finite measure and $s_j \to f$ a.e., Egorov gives a set $B$ with $m(B) < \delta/4$ off which $s_j \to f$ *uniformly*. On the set $\big(\bigcap_j F_j\big)\setminus B$ every $s_j$ is continuous and $s_j \to f$ uniformly, so $f$ is a uniform limit of continuous functions and is therefore continuous there. Its complement has measure $< \sum_j \delta\,2^{-j-2} + \delta/4 < \delta/2$. Finally shrink to a compact $K$ inside it, losing another $<\delta/2$ by inner regularity. Total deleted $< \delta$. $\blacksquare$

*(By Tietze's extension theorem one can then extend $f|_K$ to a function continuous on all of $[a,b]$ agreeing with $f$ on $K$ — often how Lusin is stated.)*

## Picture

The cleanest Egorov instance is $f_n(x) = x^n$ on $[0,1]$ with Lebesgue measure. Pointwise $x^n \to 0$ for $x \in [0,1)$ and $1^n = 1$ — so $f_n \to 0$ a.e. (the lone bad point $x=1$ is null). Convergence is **not** uniform: $\sup_{[0,1]} x^n = 1$ for every $n$, and the trouble hugs $x=1$. Delete the thin strip $E=(1-\delta,1]$ of measure $\delta$; on $[0,1-\delta]$ the sup is $(1-\delta)^n \to 0$, so convergence there is uniform. All of Egorov's bad set collapses into a sliver at the right edge.

![Curves y=x^n on [0,1] converging to 0, with a thin deleted strip near x=1 off which convergence is uniform](assets/03-02-fig1.svg)

## Worked examples

**Example 1 (Egorov's exceptional set, built by hand for $f_n(x)=x^n$).** Take $f\equiv 0$ on $[0,1]$. Compute the sets from the proof. Since $x \mapsto x^m$ is decreasing in $m$ on $[0,1)$, the largest term over $m \ge n$ is $x^n$, so
$$E_n^k = \bigcup_{m\ge n}\{x : x^m \ge \tfrac1k\} = \{x : x^n \ge \tfrac1k\} = \big[\,k^{-1/n},\,1\,\big],\qquad m(E_n^k) = 1 - k^{-1/n}.$$
As $n\to\infty$, $k^{-1/n}\to 1$, so $m(E_n^k)\downarrow 0$ — exactly the continuity-from-above collapse (and $\bigcap_n E_n^k = \{1\}$, null). Given $\delta$, pick $n_k$ large enough that $1 - k^{-1/n_k} < \delta 2^{-k}$. Then $E=\bigcup_k E_{n_k}^k$ is a union of intervals all abutting $1$, hence $E = [c,1]$ with $c = \inf_k k^{-1/n_k}$, and $m(E) = 1-c < \delta$. Off $E$, i.e. on $[0,c]$, we get $\sup_{x\le c} x^n = c^n \to 0$: uniform. The machine reproduces exactly the by-hand answer "delete a strip near $1$."

**Example 2 (Lusin for the Dirichlet function).** Let $f = \chi_{\mathbb{Q}\cap[0,1]}$ — the indicator of the rationals, which is discontinuous at *every* point of $[0,1]$. Enumerate the rationals in $[0,1]$ as $q_1,q_2,\dots$ and around each put an open interval $I_j$ of length $\delta\,2^{-j}$. Let $U = \bigcup_j I_j$, an open set with $m(U) \le \sum_j \delta 2^{-j} = \delta$, and let $K = [0,1]\setminus U$. Then $K$ is closed and bounded (compact), $m([0,1]\setminus K) = m(U\cap[0,1]) \le \delta$, and $K$ contains **no** rational, so $f \equiv 0$ on $K$ — constant, hence $f|_K$ is continuous. A nowhere-continuous function, made continuous by deleting a set of measure $\delta$.

## Watch out

- **"$f|_K$ continuous" is not "$f$ continuous at the points of $K$."** In Example 2 every point of $K$ is still a discontinuity of $f$ *as a function on $[0,1]$* (rationals cluster arbitrarily close). Lusin only asserts continuity of the *restriction* — the subspace where you have simply forgotten the deleted points exist. Don't upgrade it to continuity in the ambient interval.
- **Finite measure is essential in Egorov — it is not a technical convenience.** On $\mathbb{R}$ take $f_n = \chi_{[n,n+1]}$: then $f_n(x) \to 0$ for every $x$, yet you cannot make it almost uniform (Problem 1). Continuity from above needs a set of finite measure to start from; without it, $\mu(E_n^k)$ can sit at $\infty$ forever.
- **You cannot in general take $\delta = 0$.** Egorov does not give a *single* null set off which convergence is uniform, and $x^n$ shows why: on any $[0,1-\eta]$ it is uniform, but on $[0,1)$ itself the sup is $1$ for all $n$. The bad set shrinks but never vanishes.
- **Lusin needs $f$ finite a.e.** If $f = +\infty$ on a positive-measure set there is nothing continuous to restrict to; the standard statement bakes in finiteness a.e.

## One-liner

> Wildness in measure theory is always thin: delete a set of measure $<\delta$ and a.e. convergence turns uniform (Egorov), a measurable function turns continuous (Lusin).

## Problems

**P1 (🟢)** Show Egorov fails without finite measure. On $\mathbb{R}$ with Lebesgue measure let $f_n = \chi_{[n,n+1]}$. (a) Show $f_n \to 0$ pointwise everywhere. (b) Show there is **no** set $E$ with $m(E) < \tfrac12$ such that $f_n \to 0$ uniformly on $\mathbb{R}\setminus E$. (Hint: uniform convergence off $E$ forces $[n,n+1]\subseteq E$ for all large $n$.)

**P2 (🟡)** Use Egorov to prove: on a finite-measure space, $f_n \to f$ a.e. $\Rightarrow$ $f_n \to f$ in measure. (This is one of the implications flagged but not proved in [Lesson 3.1](03-01-modes-of-convergence.md); Egorov is the clean way to get it.)

**P3 (🔴, optional)** Use Lusin to prove that every measurable $f:[0,1]\to\mathbb{R}$ (finite a.e.) is the a.e. limit of a sequence of *continuous* functions $g_n$ on $[0,1]$. (Hint: apply Lusin with $\delta = 2^{-n}$, use Tietze to extend, and a Borel–Cantelli argument to control where $g_n \ne f$.)

<details>
<summary>Solutions</summary>

**P1** (a) Fix $x$. For every integer $n > x$ we have $x \notin [n,n+1]$, so $f_n(x) = 0$ for all such $n$; hence $f_n(x) \to 0$. This holds for every $x \in \mathbb{R}$, so $f_n \to 0$ pointwise everywhere (a fortiori a.e.).

(b) Suppose $f_n \to 0$ uniformly on $\mathbb{R}\setminus E$. Then there is $N$ with $\sup_{x\notin E}|f_n(x)| < \tfrac12$ for all $n \ge N$. But $f_n = \chi_{[n,n+1]}$ takes the value $1$ on all of $[n,n+1]$; for the sup off $E$ to be below $\tfrac12$ we need every point of $[n,n+1]$ to lie in $E$, i.e. $[n,n+1]\subseteq E$ for all $n \ge N$. Then
$$E \supseteq \bigcup_{n\ge N}[n,n+1] = [N,\infty), \qquad m(E) = \infty,$$
contradicting $m(E) < \tfrac12$. So no such $E$ exists — the sequence converges pointwise everywhere yet is not almost uniformly convergent. Finite measure in Egorov cannot be dropped. $\blacksquare$

**P2** Recall $f_n \to f$ **in measure** means: for every $\varepsilon > 0$, $\mu(\{|f_n - f| \ge \varepsilon\}) \to 0$. Fix $\varepsilon > 0$ and $\eta > 0$. By Egorov (valid since $\mu(X)<\infty$ and $f_n\to f$ a.e.), choose $E$ with $\mu(E) < \eta$ such that $f_n \to f$ uniformly on $X\setminus E$. Uniformity gives an $N$ with $|f_n(x)-f(x)| < \varepsilon$ for all $x \in X\setminus E$ and all $n \ge N$. Hence for $n \ge N$ the set $\{|f_n-f|\ge \varepsilon\}$ is contained in $E$, so
$$\mu(\{|f_n-f|\ge \varepsilon\}) \le \mu(E) < \eta.$$
Since $\eta>0$ was arbitrary, $\mu(\{|f_n-f|\ge\varepsilon\}) \to 0$. As $\varepsilon>0$ was arbitrary, $f_n \to f$ in measure. $\blacksquare$

*(Note the finite-measure hypothesis is doing real work: on $\mathbb{R}$, $f_n=\chi_{[n,n+1]}\to 0$ a.e. but **not** in measure, since $m(\{f_n\ge \tfrac12\})=1$ for all $n$ — the same counterexample as P1.)*

**P3** For each $n \ge 1$ apply Lusin with $\delta = 2^{-n}$: get a compact $K_n \subseteq [0,1]$ with $m([0,1]\setminus K_n) < 2^{-n}$ and $f|_{K_n}$ continuous. By Tietze's extension theorem extend $f|_{K_n}$ to a continuous $g_n : [0,1]\to\mathbb{R}$ with $g_n = f$ on $K_n$.

Claim $g_n \to f$ a.e. Let $B_N = \bigcup_{n\ge N}([0,1]\setminus K_n)$ and $B = \bigcap_N B_N = \limsup_n ([0,1]\setminus K_n)$. Then
$$m(B_N) \le \sum_{n\ge N} m([0,1]\setminus K_n) < \sum_{n\ge N} 2^{-n} = 2^{-N+1} \xrightarrow{\;N\to\infty\;} 0,$$
and since $B \subseteq B_N$ for every $N$, we get $m(B) = 0$ (this is the measure half of the Borel–Cantelli lemma). Now take any $x \notin B$: then $x \notin B_N$ for some $N$, i.e. $x \in K_n$ for all $n \ge N$, so $g_n(x) = f(x)$ for all $n \ge N$ and in particular $g_n(x) \to f(x)$. Thus $g_n \to f$ everywhere off the null set $B$, i.e. a.e. $\blacksquare$

*(So Lusin upgrades to: measurable functions on $[0,1]$ are exactly the a.e. limits of continuous ones — continuity is dense in measurability.)*

</details>

## Flashback

**From [Lesson 3.1](03-01-modes-of-convergence.md) (modes of convergence — the Chebyshev implication):** Prove that convergence in $L^1$ implies convergence in measure: if $\int_X |f_n - f|\,d\mu \to 0$, then for every $\varepsilon>0$, $\mu(\{|f_n-f|\ge\varepsilon\})\to 0$.

<details>
<summary>Solution</summary>

This is **Chebyshev's (Markov's) inequality** applied to $g = f_n - f$. For any $\varepsilon > 0$, integrating over the set where $|g| \ge \varepsilon$,
$$\int_X |g|\,d\mu \;\ge\; \int_{\{|g|\ge \varepsilon\}} |g|\,d\mu \;\ge\; \varepsilon\,\mu(\{|g|\ge \varepsilon\}),$$
so $\displaystyle \mu(\{|g|\ge\varepsilon\}) \le \frac{1}{\varepsilon}\int_X |g|\,d\mu = \frac{1}{\varepsilon}\lVert f_n - f\rVert_1$. As $n\to\infty$ the right side $\to 0$ by hypothesis, hence $\mu(\{|f_n-f|\ge\varepsilon\})\to 0$: convergence in measure. $\blacksquare$

*(The same one-line estimate with $|g|^p$ and $\varepsilon^p$ gives $L^p \Rightarrow$ in measure for any $1 \le p < \infty$. Note the converse fails — the typewriter sequence from 3.1 converges in measure but at no point.)*

</details>

## Connections

- **Backward:** the engine of Egorov's proof is **continuity from above** for measures ([Lesson 1.3](01-03-measures-properties.md)) — the step that silently demands $\mu(X)<\infty$. Lusin runs on **simple approximation** ([Lesson 2.2](02-02-simple-functions-integral.md)) and **inner regularity** of Lebesgue measure ([Lesson 1.5](01-05-lebesgue-measure-rn.md)), i.e. Littlewood's first principle. Both slot into the modes-of-convergence map from [Lesson 3.1](03-01-modes-of-convergence.md): Egorov *is* the statement "a.e. $\Rightarrow$ almost uniform on finite measure," and P2 derives "a.e. $\Rightarrow$ in measure" from it.
- **Forward:** in [Lesson 3.4](03-04-completeness-riesz-fischer.md) the extraction of an a.e.-convergent subsequence — the heart of the Riesz–Fischer completeness proof — pairs with Egorov to turn $L^p$ Cauchy-ness into pointwise control. Almost uniform convergence is the missing mode that makes the whole $L^p$ picture cohere.
- **Sideways (probability-theory):** on a probability space $\mu(X)=1<\infty$, so Egorov *always* applies — a.e. convergence (a.s. convergence) is automatically almost uniform, and P2 is exactly "almost sure convergence implies convergence in probability," a staple of the probabilist's convergence hierarchy. This course is the rigorous floor under that statement.
- **Sideways (fourier-analysis / functional-analysis):** Lusin's "measurable $\approx$ continuous" is why continuous functions are *dense* in $L^p$ — the fact that lets you prove Fourier-analytic estimates first for nice functions and then pass to all of $L^p$ by density, the same completeness that makes $L^2$ a Hilbert space where Fourier series converge in mean.
