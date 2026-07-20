# Probability Theory · Lesson 4.1: Modes of convergence

> ⏱ ~15 min · Module 4: Convergence and the limit theorems · Builds on: [2.5](02-05-lp-spaces-inequalities.md), [2.4](02-04-convergence-theorems.md) · Unlocks: [4.2](04-02-laws-of-large-numbers.md)

## Why this matters

The two crown jewels ahead say "$X_n\to X$" — but for *random* variables that arrow is dangerously ambiguous. The law of large numbers ([4.2](04-02-laws-of-large-numbers.md)) comes in two grades, a **weak** one and a **strong** one, and the only difference between them is *which* meaning of $\to$ they claim. The central limit theorem asserts a *third* kind of convergence entirely — the one where the histogram, not the random variable, settles down. Read those theorems with the wrong mode in mind and you'll either believe far too much (that the sample mean is eventually *equal* to $\mu$) or far too little. This lesson installs the four meanings and the map of which one forces which, so every limit statement in the rest of the course parses correctly on the first read.

## The idea

A sequence of numbers has one honest way to converge. A sequence of *random variables* — functions $X_n:\Omega\to\mathbb R$ on a probability space $(\Omega,\mathcal F,\mathbb P)$ — has four, because there are four different things you might mean by "close."

- You could ask the outcomes themselves to settle: for (almost) **every** coin-flip history $\omega$, the number $X_n(\omega)$ converges. That's the strongest, **almost sure** convergence — pointwise, off a negligible set.
- You could relax to a *polling* statement: at each stage, the **fraction** of outcomes where $X_n$ is still far from $X$ shrinks to zero — even if no single outcome ever fully settles. That's **in probability**.
- You could measure closeness by **average size of the error**, $\mathbb E|X_n-X|^p\to 0$ — the $L^p$ distance from [2.5](02-05-lp-spaces-inequalities.md). That's **in $L^p$**.
- Or you could give up on comparing the variables at all and only ask that their **distributions** line up: the histogram of $X_n$ approaches the histogram of $X$. That's **in distribution**, the weakest — and the only one where $X_n$ and $X$ needn't even live on the same probability space.

The whole lesson is one picture: **a.s.** and **$L^p$** are the two strong modes; each forces **in probability**, the hub; which in turn forces **in distribution**, the weak floor. None of the arrows reverses, and — the subtle part — the two strong modes don't imply *each other*. Get that diagram in your bones and the limit theorems become easy to state precisely.

## The formal version

Throughout, $X_n, X$ are random variables on $(\Omega,\mathcal F,\mathbb P)$, $\varepsilon>0$ is an arbitrary tolerance, and $F_Y(x)=\mathbb P(Y\le x)$ denotes the **cumulative distribution function** (CDF) of a random variable $Y$.

**Almost surely** ($X_n\xrightarrow{a.s.}X$).
$$\mathbb P\big(\{\omega:X_n(\omega)\to X(\omega)\}\big)=1.$$
In words: pin down an outcome $\omega$ and you get an ordinary sequence of numbers $X_n(\omega)$; a.s. convergence says that sequence converges for all $\omega$ except a set of probability $0$.

**In probability** ($X_n\xrightarrow{P}X$).
$$\forall\varepsilon>0,\qquad \mathbb P\big(|X_n-X|>\varepsilon\big)\to 0\ \text{ as }n\to\infty.$$
In words: for any fixed tolerance, the *chance* of still being off by more than $\varepsilon$ dies out — but which outcomes are the offenders may keep changing forever.

**In $L^p$** ($X_n\xrightarrow{L^p}X$), for $1\le p<\infty$.
$$\mathbb E\,|X_n-X|^p\to 0.$$
In words: the average $p$-th-power error shrinks to zero — closeness measured by the norm $\|X_n-X\|_p$ of [2.5](02-05-lp-spaces-inequalities.md). ($p=1$ is mean absolute error; $p=2$ is mean-square.)

**In distribution** ($X_n\xrightarrow{d}X$).
$$F_{X_n}(x)\to F_X(x)\quad\text{at every }x\text{ where }F_X\text{ is continuous.}$$
In words: the distributions align — the CDFs converge everywhere the limiting CDF has no jump. Only the *laws* are compared, so $X_n$ and $X$ need not share a probability space at all.

### The implications (Tier 1 proofs)

**(1) a.s. $\Rightarrow$ in probability.** *Continuity of measure kills the leftover.* Fix $\varepsilon>0$ and set the "still bad from $N$ on" event
$$B_N=\bigcup_{n\ge N}\{|X_n-X|>\varepsilon\}.$$
The $B_N$ *decrease* as $N$ grows. If $\omega$ is a point where $X_n(\omega)\to X(\omega)$, then eventually $|X_n(\omega)-X(\omega)|\le\varepsilon$, so $\omega\notin B_N$ for all large $N$; hence $\bigcap_N B_N$ is contained in the non-convergence set, which has probability $0$. By continuity of measure for decreasing events (Module 1, [3.3](03-03-borel-cantelli-zero-one.md) uses the same tool),
$$\mathbb P(B_N)\to\mathbb P\Big(\bigcap_N B_N\Big)=0.$$
Since $\{|X_N-X|>\varepsilon\}\subseteq B_N$, we get $\mathbb P(|X_N-X|>\varepsilon)\le\mathbb P(B_N)\to0$. $\blacksquare$

**(2) $L^p\Rightarrow$ in probability.** *One line of Markov.* Apply Markov's inequality ([2.5](02-05-lp-spaces-inequalities.md)) to the nonnegative variable $|X_n-X|^p$ at level $\varepsilon^p$:
$$\mathbb P\big(|X_n-X|>\varepsilon\big)=\mathbb P\big(|X_n-X|^p>\varepsilon^p\big)\le\frac{\mathbb E\,|X_n-X|^p}{\varepsilon^p}\longrightarrow 0. \qquad\blacksquare$$
(For $p=2$ this is precisely the Chebyshev step that will prove the weak law.)

**(3) in probability $\Rightarrow$ in distribution.** *Squeeze the CDF.* Let $x$ be a continuity point of $F_X$ and fix $\delta>0$. Splitting on whether $X$ is within $\delta$ of the threshold,
$$\{X_n\le x\}\subseteq\{X\le x+\delta\}\cup\{|X_n-X|>\delta\},$$
so $F_{X_n}(x)\le F_X(x+\delta)+\mathbb P(|X_n-X|>\delta)$. Symmetrically, $\{X\le x-\delta\}\subseteq\{X_n\le x\}\cup\{|X_n-X|>\delta\}$ gives $F_X(x-\delta)\le F_{X_n}(x)+\mathbb P(|X_n-X|>\delta)$. Let $n\to\infty$; the $\mathbb P(|X_n-X|>\delta)$ term vanishes by hypothesis, leaving
$$F_X(x-\delta)\le\liminf_n F_{X_n}(x)\le\limsup_n F_{X_n}(x)\le F_X(x+\delta).$$
Now let $\delta\downarrow0$: since $F_X$ is continuous at $x$, both ends tend to $F_X(x)$, forcing $F_{X_n}(x)\to F_X(x)$. $\blacksquare$

So the picture is: **a.s.** $\Rightarrow$ **P** and **$L^p$** $\Rightarrow$ **P** $\Rightarrow$ **d**. Two strong modes, a hub, a weak floor.

### The non-implications (a counterexample for each)

None of the four arrows reverses. All examples below live on $([0,1],\lambda)$ with $\lambda$ = Lebesgue (uniform) probability measure.

- **P (and $L^p$) $\;\not\Rightarrow$ a.s. — the "typewriter."** March a window of shrinking width across $[0,1]$, then restart from the left: for $n=2^k+j$ with $0\le j<2^k$, let $X_n=\mathbf 1_{[\,j/2^k,\,(j+1)/2^k\,]}$. The window has width $2^{-k}\to0$, so $\mathbb P(|X_n|>\varepsilon)=2^{-k}\to0$ (in probability) and $\mathbb E|X_n|^p=2^{-k}\to0$ (in $L^p$). But for *every* $\omega$ the window sweeps back over it again and again, so $X_n(\omega)=1$ infinitely often and $=0$ infinitely often — $X_n(\omega)$ converges for **no** $\omega$. Strong on average, hopeless pointwise.
- **a.s. (and P) $\;\not\Rightarrow$ $L^p$ — the "escaping spike."** $X_n=n\,\mathbf 1_{(0,1/n)}$. For each fixed $\omega>0$ the spike eventually slides off it, so $X_n\to0$ a.s. (hence in probability). But $\mathbb E|X_n|=n\cdot\frac1n=1\not\to0$: no convergence in $L^1$. This is exactly the escaping-mass failure of DCT from [2.4](02-04-convergence-theorems.md) — the mass doesn't shrink, it flees up the thinning spike, and no integrable function dominates the whole sequence.
- **d $\;\not\Rightarrow$ P — independent copies.** Let $X,X_1,X_2,\dots$ be i.i.d. fair signs, $\mathbb P(X=\pm1)=\tfrac12$, with each $X_n$ *independent* of $X$. Every $X_n$ has the same law as $X$, so trivially $X_n\xrightarrow{d}X$. Yet $\mathbb P(|X_n-X|>1)=\mathbb P(X_n\ne X)=\tfrac12\not\to0$: no convergence in probability. Matching histograms says nothing about the variables tracking each other.

The first two show the two strong modes are **incomparable**: the spike is a.s. but not $L^p$, the typewriter is $L^p$ but not a.s. Neither implies the other.

### Two rescue facts (state and use)

When an arrow you want is missing, one of these often repairs it.

**Subsequence principle.** $X_n\xrightarrow{P}X$ **iff** every subsequence $(X_{n_k})$ has a *further* subsequence $(X_{n_{k_j}})$ with $X_{n_{k_j}}\xrightarrow{a.s.}X$. In words: convergence in probability is exactly "a.s. convergence along a sub-subsequence, always available." In particular, from any sequence converging in probability you can *extract* one that converges a.s. — the standard trick for importing a.s.-only theorems into the in-probability world.

**In probability $+$ domination $\Rightarrow$ $L^p$.** If $X_n\xrightarrow{P}X$ and $|X_n|\le Y$ for all $n$ with $Y\in L^p$ (i.e. $\mathbb E|Y|^p<\infty$), then $X_n\xrightarrow{L^p}X$. This is DCT ([2.4](02-04-convergence-theorems.md)) wearing convergence-in-probability clothes: a fixed integrable ceiling is exactly what the escaping spike lacked. It's the bridge back up from the hub to the $L^p$ mode.

**Convergence in distribution to a constant $\Rightarrow$ in probability.** If $X_n\xrightarrow{d}c$ for a *constant* $c$, then $X_n\xrightarrow{P}c$. The limit law is a step at $c$, so the mass is forced to pile up there — the one case where the weak floor lifts all the way to the hub. This is the clean way to finish a weak law once characteristic functions ([4.3](04-03-characteristic-functions.md)) hand you convergence in distribution.

## Picture

![Implication diagram: boxes for almost surely and in L^p (the two strong, incomparable modes) each arrow down into in probability (the hub), which arrows down into in distribution (the weak floor); each blocked reverse is tagged with its counterexample — typewriter, escaping spike, independent copies](assets/04-01-fig1.svg)

Read it top to bottom as *decreasing strength*. The two blue boxes up top — **a.s.** and **$L^p$** — are the strong modes, joined by a dashed "incomparable" link because neither implies the other. Both point down into the **in-probability** hub, which points down into the **in-distribution** floor. Every solid arrow is a theorem proved above; every arrow's *reverse* is blocked, and the red tag names the counterexample that blocks it.

## Worked examples

**Example 1 (mechanical — $L^p$ and P without a.s., via independence).** Let $A_1,A_2,\dots$ be *independent* events with $\mathbb P(A_n)=1/n$, and set $X_n=\mathbf 1_{A_n}$. Then:

- *In probability and in $L^p$:* $\mathbb P(|X_n|>\varepsilon)=\mathbb P(A_n)=\tfrac1n\to0$, and $\mathbb E|X_n|^p=\mathbb P(A_n)=\tfrac1n\to0$ for every $p$. So $X_n\to0$ in probability and in every $L^p$.
- *Not almost surely:* the $A_n$ are independent and $\sum_n\mathbb P(A_n)=\sum_n\frac1n=\infty$, so the second Borel–Cantelli lemma ([3.3](03-03-borel-cantelli-zero-one.md)) gives $\mathbb P(A_n\text{ i.o.})=1$ — the event $A_n$ recurs infinitely often almost surely. Thus $X_n(\omega)=1$ infinitely often for a.e. $\omega$, and $X_n(\omega)\not\to0$. 

Same lesson as the typewriter, now driven by genuine randomness: strong-on-average convergence with *no* pointwise convergence anywhere. The divergent sum $\sum\frac1n$ is precisely what lets the ones keep coming back.

**Example 2 (why you'd care — the weak law is "$L^2\Rightarrow$ P").** Let $Y_1,Y_2,\dots$ be i.i.d. with mean $\mu$ and finite variance $\sigma^2$, and let $\bar Y_n=\frac1n\sum_{i=1}^n Y_i$ be the sample mean. Because variance adds over independent summands ([3.4](03-04-sums-of-random-variables.md)),
$$\mathbb E[\bar Y_n]=\mu,\qquad \operatorname{Var}(\bar Y_n)=\frac{\sigma^2}{n},\qquad\text{so}\qquad \mathbb E\big[(\bar Y_n-\mu)^2\big]=\frac{\sigma^2}{n}\to0.$$
That last line says $\bar Y_n\xrightarrow{L^2}\mu$ outright. Feed it through implication (2) with $p=2$ (this *is* Chebyshev):
$$\mathbb P\big(|\bar Y_n-\mu|>\varepsilon\big)\le\frac{\operatorname{Var}(\bar Y_n)}{\varepsilon^2}=\frac{\sigma^2}{n\varepsilon^2}\to0,$$
so $\bar Y_n\xrightarrow{P}\mu$ — the **weak law of large numbers**. The entire proof is "$L^2$ convergence is easy to see, and $L^2\Rightarrow$ P." The strong law of [4.2](04-02-laws-of-large-numbers.md) will upgrade this to $\bar Y_n\xrightarrow{a.s.}\mu$ — a strictly stronger claim, and much harder, because the a.s. arrow is not one Chebyshev can buy.

## Watch out

- **You might think convergence in distribution says $X_n$ is close to $X$ — it does not.** It only compares *laws*. Independent fair signs all share a distribution, so $X_n\xrightarrow{d}X$, yet $X_n$ and $X$ disagree half the time. The three other modes compare the variables themselves (pointwise, or in norm); in-distribution compares only their histograms — the $X_n$ needn't even live on one space.
- **You might think the two strong modes are nested — they are incomparable.** a.s. does *not* imply $L^p$ (the escaping spike converges a.s. but its mean error stays $1$), and $L^p$ does *not* imply a.s. (the typewriter converges in every $L^p$ but pointwise nowhere). Neither is stronger; both separately imply only "in probability." To pass from one to the other you need a rescue hypothesis — domination, or a dominating tail bound.
- **You might think convergence in distribution to a *non*constant limit constrains the joint behavior — it says nothing about it.** $X_n\xrightarrow{d}X$ with $X$ non-degenerate leaves the dependence between $X_n$ and $X$ completely free. Only the **constant**-limit case is special: there the floor lifts all the way to convergence in probability.

## One-liner

> Four arrows of decreasing strength — a.s. and $L^p$ (incomparable) each force *in probability*, which forces *in distribution* — and no arrow reverses without a rescue hypothesis; the LLN lives on the strong end, the CLT on the weak.

## Problems

**P1 (🟢)** Let $X_n$ satisfy $\mathbb P(X_n=n)=\tfrac1n$ and $\mathbb P(X_n=0)=1-\tfrac1n$. (a) Show $X_n\xrightarrow{P}0$. (b) Does $X_n\to0$ in $L^1$? Compute $\mathbb E|X_n|$ and conclude. Which single arrow of the diagram does this sequence violate the reverse of?

**P2 (🟡)** Let $X,X_1,X_2,\dots$ be i.i.d. with $\mathbb P(X=0)=\mathbb P(X=1)=\tfrac12$, each $X_n$ independent of $X$. Prove $X_n\xrightarrow{d}X$ but $X_n\not\xrightarrow{P}X$. (Compute $\mathbb P(|X_n-X|>\tfrac12)$ exactly.) Which non-implication of the lesson is this?

**P3 (🔴, optional)** Prove the rescue fact **convergence in distribution to a constant $\Rightarrow$ convergence in probability**: if $X_n\xrightarrow{d}c$ for a constant $c$, then $X_n\xrightarrow{P}c$. (Hint: the limiting CDF is the step $F(x)=\mathbf 1_{\{x\ge c\}}$, continuous everywhere except at $c$; bound $\mathbb P(|X_n-c|>\varepsilon)$ using $F_{X_n}$ at the two continuity points $c\pm\varepsilon$.)

<details>
<summary>Solutions</summary>

**P1** (a) For any $\varepsilon\in(0,1)$ and all $n$ with $n>\varepsilon$, $\{|X_n|>\varepsilon\}=\{X_n=n\}$, so $\mathbb P(|X_n|>\varepsilon)=\tfrac1n\to0$. Hence $X_n\xrightarrow{P}0$.

(b) $\mathbb E|X_n|=n\cdot\tfrac1n+0\cdot(1-\tfrac1n)=1$ for every $n$, so $\mathbb E|X_n-0|=1\not\to0$: **no** convergence in $L^1$. This is the discrete cousin of the escaping spike, and it violates the reverse of the **$L^1\Rightarrow$ P** arrow — convergence in probability does not buy convergence in $L^1$ (the mass $=1$ escapes to $+\infty$ instead of shrinking). No integrable dominator exists, so the rescue fact doesn't apply.

**P2** *In distribution.* Each $X_n$ has the identical law of $X$ (both are fair $\{0,1\}$), so $F_{X_n}=F_X$ exactly for all $n$; convergence of CDFs is immediate, giving $X_n\xrightarrow{d}X$.

*Not in probability.* Since $X_n$ and $X$ are independent fair bits, $X_n-X\in\{-1,0,1\}$ with $|X_n-X|=1$ exactly when $X_n\ne X$:
$$\mathbb P\big(|X_n-X|>\tfrac12\big)=\mathbb P(X_n\ne X)=\mathbb P(X_n=0,X=1)+\mathbb P(X_n=1,X=0)=\tfrac14+\tfrac14=\tfrac12.$$
This equals $\tfrac12$ for every $n$, so it does not tend to $0$; $X_n\not\xrightarrow{P}X$. This is the **d $\not\Rightarrow$ P** non-implication ("independent copies").

**P3** Fix $\varepsilon>0$. The limiting CDF is $F(x)=\mathbf 1_{\{x\ge c\}}$, whose only discontinuity is at $c$; so $c-\varepsilon$ and $c+\tfrac{\varepsilon}{2}$ are continuity points, where $X_n\xrightarrow{d}c$ gives $F_{X_n}\to F$. Now
$$\mathbb P(|X_n-c|>\varepsilon)=\mathbb P(X_n<c-\varepsilon)+\mathbb P(X_n>c+\varepsilon)\le F_{X_n}(c-\varepsilon)+\big(1-F_{X_n}(c+\tfrac{\varepsilon}{2})\big),$$
using $\mathbb P(X_n<c-\varepsilon)\le\mathbb P(X_n\le c-\varepsilon)=F_{X_n}(c-\varepsilon)$ and $\mathbb P(X_n>c+\varepsilon)\le\mathbb P(X_n>c+\tfrac\varepsilon2)=1-F_{X_n}(c+\tfrac\varepsilon2)$. As $n\to\infty$, $F_{X_n}(c-\varepsilon)\to F(c-\varepsilon)=0$ and $F_{X_n}(c+\tfrac\varepsilon2)\to F(c+\tfrac\varepsilon2)=1$, so the right side $\to 0+0=0$. Hence $\mathbb P(|X_n-c|>\varepsilon)\to0$ for every $\varepsilon>0$: $X_n\xrightarrow{P}c$. $\blacksquare$

</details>

## Flashback

**From Lesson 2.5 ($L^p$ spaces and the key inequalities):** A nonnegative random variable $X$ has $\mathbb E[X]=4$ and $\mathbb E[X^2]=25$. Bound $\mathbb P(X\ge10)$ two ways — (i) Markov applied to $X$, and (ii) Markov applied to the second moment $X^2$ — and say which is tighter and why.

<details>
<summary>Solution</summary>

(i) **Markov on $X$:** $\mathbb P(X\ge10)\le\dfrac{\mathbb E[X]}{10}=\dfrac{4}{10}=0.4.$

(ii) **Markov on $X^2$:** since $X\ge0$, $\{X\ge10\}=\{X^2\ge100\}$, so $\mathbb P(X\ge10)=\mathbb P(X^2\ge100)\le\dfrac{\mathbb E[X^2]}{100}=\dfrac{25}{100}=0.25.$

The **second-moment bound (0.25) is tighter.** Using $\mathbb E[X^2]$ exploits more information about $X$ than $\mathbb E[X]$ alone, and squaring stretches the far tail harder — higher moments always give sharper tail bounds when they're finite (this is moment nesting from [2.5](02-05-lp-spaces-inequalities.md) put to work). As a cross-check, Chebyshev is consistent: $\operatorname{Var}(X)=25-16=9$, and $\{X\ge10\}\subseteq\{|X-4|\ge6\}$, so $\mathbb P(X\ge10)\le\dfrac{9}{36}=0.25$ — the same bound. $\blacksquare$

</details>

## Connections

- **Backward:** implication (2) is nothing but Markov/Chebyshev from [2.5](02-05-lp-spaces-inequalities.md), and the escaping-spike separation is the exact DCT counterexample from [2.4](02-04-convergence-theorems.md) — "no dominator" is why $L^1$ convergence fails there and why the rescue fact needs one. The a.s. $\Rightarrow$ P proof runs on continuity of measure from Module 1, the same engine as Borel–Cantelli in [3.3](03-03-borel-cantelli-zero-one.md).
- **Forward:** [4.2](04-02-laws-of-large-numbers.md) is this diagram in action — the *weak* law is convergence in probability (Example 2), the *strong* law is convergence almost surely, and the gap between them is precisely the a.s.-vs-P gap you just mapped. The CLT ([4.5](04-05-central-limit-theorem.md)) lives entirely in the weakest mode, convergence in distribution, which [4.4](04-04-weak-convergence.md) makes fully rigorous; the "$d$-to-a-constant $\Rightarrow$ P" rescue is what converts a characteristic-function limit ([4.3](04-03-characteristic-functions.md)) into a weak law.
- **Sideways (`real-analysis`):** these are the probabilist's names for modes of function convergence — a.s. is convergence a.e., $L^p$ is norm convergence, and in probability is convergence in measure. The subsequence principle ("in-measure convergence has an a.e.-convergent subsequence") is a standard measure-theory theorem there, reused here verbatim. In statistics, "in probability" is **consistency** of an estimator and "in distribution" is what every sampling-distribution / confidence-interval argument secretly invokes.
