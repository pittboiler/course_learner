# Probability Theory · Lesson 5.5: Martingale convergence and what's next

> ⏱ ~15 min · Module 5: Conditional expectation and martingales · Builds on: [5.4](05-04-stopping-times-optional-stopping.md), [5.3](05-03-martingales.md) · Unlocks: the whole theory of stochastic processes — Markov chains, Brownian motion, Itô calculus

## Why this matters

Here is a theorem that feels like it shouldn't be free: a fair game that stays honestly bounded *must converge* — the randomness eventually stops mattering and the process homes in on a single limiting value, with probability one. No formula for the limit, no assumption that anything special is happening; boundedness in $L^1$ alone forces convergence. That is one of the most useful existence theorems in all of probability, and it is why martingales are the workhorse behind branching-process survival, the Radon–Nikodym theorem, stochastic-approximation algorithms, and half of modern concentration. It is also the natural place to close this course: everything you built — measure, integral, independence, limit theorems, conditioning — converges here, and points forward to processes in continuous time.

## The idea

Picture a fair game where your fortune $X_n$ is a martingale: on average it neither rises nor falls. Suppose additionally it can't run off to infinity (it stays bounded in an average sense). What can it do? It can't *drift* — a martingale has no trend. It can't *blow up* — we forbade that. The only remaining option is to **oscillate**. But oscillation isn't free either: to swing repeatedly from a low value $a$ up to a high value $b$, the game would have to keep manufacturing gains, and a fair game can't reliably do that. So the swings must eventually shrink and die out. The path **settles down**.

Doob turned this hand-waving into a proof with a beautiful trick: **count the crossings**. Fix a band $[a,b]$. Every time the path travels from below $a$ up through to above $b$, that's one "upcrossing." Here is the gambling reading: adopt the strategy *"buy the moment the price dips below $a$, sell the moment it rises above $b$."* Each completed upcrossing books you a profit of at least $b-a$. But betting on a fair game can't make money on average — so the *expected number of upcrossings is bounded*. A path that oscillates forever would need infinitely many upcrossings of some band; that's ruled out. No infinite oscillation $\Rightarrow$ the limit exists.

## The formal version

Throughout, $(X_n)_{n\ge 0}$ is adapted to a filtration $(\mathcal F_n)$ — a growing family of $\sigma$-algebras encoding "what's known by time $n$" (Lesson [5.3](05-03-martingales.md)) — and $\mathbb E[\,\cdot\mid\mathcal F_n]$ is conditional expectation (Lesson 5.1). Recall a **martingale** satisfies $\mathbb E[X_{n+1}\mid\mathcal F_n]=X_n$ (a fair game); a **supermartingale** has $\le$ (unfavorable), a **submartingale** has $\ge$ (favorable).

**Upcrossings.** For a band $a<b$, let $U_n[a,b]$ be the number of completed upcrossings of $[a,b]$ by the path $X_0,\dots,X_n$: the number of times it goes from $\le a$ up to $\ge b$.

**Doob's Upcrossing Inequality.** If $(X_n)$ is a *supermartingale*, then
$$(b-a)\,\mathbb E\big[U_n[a,b]\big]\;\le\;\mathbb E\big[(X_n-a)^-\big],$$
where $y^-=\max(-y,0)$ is the negative part. (For a submartingale the twin bound is $(b-a)\,\mathbb E[U_n[a,b]]\le\mathbb E[(X_n-a)^+]-\mathbb E[(X_0-a)^+]$; a martingale is both, so either applies.)

> In words: the expected number of times a fair-or-unfavorable game can climb across a fixed band is *bounded*, and the bound is controlled by how far the current value sits from the band. Oscillation is a finite resource.

**The idea of the proof.** Define a $\{0,1\}$-valued *previsible* strategy $C_n$ — "$C_n=1$ (holding) once $X$ drops to $\le a$, until it next reaches $\ge b$, then $0$." Previsible means $C_n$ is decided from $\mathcal F_{n-1}$, i.e. *before* seeing the next move — no clairvoyance. The resulting winnings process $Y_n=\sum_{k\le n}C_k\,(X_k-X_{k-1})$ is again a supermartingale (betting on an unfavorable game keeps it unfavorable), so $\mathbb E[Y_n]\le 0$. But by construction each completed upcrossing contributes at least $(b-a)$ to $Y_n$, and the final incomplete stretch costs at most $(X_n-a)^-$. Rearranging $\mathbb E[Y_n]\le 0$ gives the inequality. $\square$

**Martingale Convergence Theorem (Doob).** If $(X_n)$ is a supermartingale (in particular, a martingale) that is **bounded in $L^1$**, meaning
$$\sup_n \mathbb E|X_n|<\infty,$$
then there is an integrable random variable $X_\infty$ with
$$X_n\longrightarrow X_\infty\quad\text{almost surely},\qquad \mathbb E|X_\infty|<\infty.$$

> In words: a fair (or unfavorable) game that stays bounded on average converges to a definite limiting value, for almost every outcome $\omega$. Existence for free.

**Proof sketch.** A path fails to converge exactly when $\liminf_n X_n<\limsup_n X_n$ — and that gap means there are rationals $a<b$ with $\liminf X_n<a<b<\limsup X_n$, so the path crosses the band $[a,b]$ *infinitely often*: $U_\infty[a,b]=\lim_n U_n[a,b]=\infty$. But the upcrossing inequality plus monotone convergence gives $(b-a)\,\mathbb E[U_\infty[a,b]]\le \sup_n\mathbb E[(X_n-a)^-]\le |a|+\sup_n\mathbb E|X_n|<\infty$, so $\mathbb E[U_\infty[a,b]]<\infty$, hence $U_\infty[a,b]<\infty$ almost surely. There are only *countably many* rational bands, and a countable union of null sets is null (this is why we needed [1.4](01-04-constructing-lebesgue-measure.md)'s "almost everywhere" to be closed under countable unions), so almost surely *no* band is crossed infinitely often. On that full-probability set $\liminf X_n=\limsup X_n$: the limit $X_\infty$ exists (possibly $\pm\infty$ a priori). Finally Fatou's lemma (Lesson [2.4](02-04-convergence-theorems.md)) gives $\mathbb E|X_\infty|=\mathbb E[\liminf|X_n|]\le\liminf\mathbb E|X_n|\le\sup_n\mathbb E|X_n|<\infty$, so $X_\infty$ is integrable, and in particular finite a.s. $\blacksquare$

**Corollary (the version you'll use most).** A **nonnegative** supermartingale (in particular, a nonnegative martingale) converges almost surely.

> In words: no boundedness check needed — nonnegativity does the work.

*Why:* for a nonnegative martingale $\mathbb E|X_n|=\mathbb E[X_n]=\mathbb E[X_0]$ is constant, so $\sup_n\mathbb E|X_n|=\mathbb E[X_0]<\infty$ automatically; for a nonnegative supermartingale $\mathbb E|X_n|=\mathbb E[X_n]\le\mathbb E[X_0]$ likewise. Either way it's $L^1$-bounded, and the theorem applies.

**Stronger modes (stated).** Almost-sure convergence is the baseline; extra hypotheses buy more.

- **Uniform integrability $\Rightarrow$ $L^1$ convergence and closure.** If $(X_n)$ is a uniformly integrable martingale, then $X_n\to X_\infty$ in $L^1$ *as well as* a.s., and the martingale is **closed**: $X_n=\mathbb E[X_\infty\mid\mathcal F_n]$ for every $n$. That is exactly the Doob/Lévy martingale of Lesson [5.3](05-03-martingales.md) — a single terminal random variable projected back onto the growing filtration.
- **$L^2$-bounded $\Rightarrow$ $L^2$ convergence.** If $\sup_n\mathbb E[X_n^2]<\infty$, the martingale converges in $L^2$ too (its orthogonal increments have summable variances).
- **Lévy's upward theorem (a 0–1 law of information).** For any integrable $X$, as the filtration grows to $\mathcal F_\infty=\sigma\big(\bigcup_n\mathcal F_n\big)$,
$$\mathbb E[X\mid\mathcal F_n]\longrightarrow \mathbb E[X\mid\mathcal F_\infty]\quad\text{a.s. and in }L^1.$$
In words: your best estimate of $X$ given ever-more information converges to your best estimate given *all* of it. When $X$ is $\mathcal F_\infty$-measurable the limit is $X$ itself — accumulate all the information and you recover the answer.

**Applications, in one breath.** The Radon–Nikodym theorem (which we *used* to build conditional expectation in Lesson 5.1) can itself be *proved* by running the martingale of density approximations to its limit. Branching processes: $Z_n/\mu^n$ is a nonnegative martingale, so it converges — the gateway to extinction-vs-survival (Problem 3). Concentration and stochastic approximation (SGD, Robbins–Monro): the "error" is a supermartingale that converges to $0$.

## Picture

![A nonnegative martingale path oscillating with decreasing amplitude, crossing a band [a,b] twice before settling onto its almost-sure limit X-infinity](assets/05-05-fig1.svg)

The path swings wildly at first — two upcrossings of the band $[a,b]$ are marked — but the swings must shrink (each upcrossing spends from a finite budget), and the path settles onto the horizontal asymptote $X_\infty$. The upcrossing inequality is the accountant that guarantees the amplitude runs out.

## Worked examples

**Example 1 (mechanical — nonnegativity forces convergence).** Let $Y_1,Y_2,\dots$ be i.i.d. with $\mathbb P(Y_i=0)=\mathbb P(Y_i=2)=\tfrac12$, so $\mathbb E[Y_i]=1$, and set $M_n=\prod_{i=1}^n Y_i$ (with $M_0=1$), $\mathcal F_n=\sigma(Y_1,\dots,Y_n)$. Then $M_n\ge 0$, and
$$\mathbb E[M_{n+1}\mid\mathcal F_n]=M_n\,\mathbb E[Y_{n+1}\mid\mathcal F_n]=M_n\cdot 1=M_n,$$
using that $Y_{n+1}$ is independent of $\mathcal F_n$ (independence $\Rightarrow$ conditioning drops to the plain mean, Lesson 5.2). So $(M_n)$ is a nonnegative martingale, and by the corollary it converges a.s. — no further computation needed. *What's the limit?* Almost surely some $Y_i=0$ eventually (the chance all of $Y_1,\dots,Y_n$ avoid $0$ is $2^{-n}\to0$), and once a factor is $0$ the product is pinned at $0$ forever. So $M_n\to 0$ a.s. Note $\mathbb E[M_n]=1$ for every $n$ while $\mathbb E[M_\infty]=0$: the mean did **not** pass to the limit. Convergence held, but only almost surely — the Watch-out below is exactly this.

**Example 2 (why you'd care — closing a martingale reconstructs the answer).** Flip a biased coin with unknown bias $\Theta$, where $\Theta$ is itself random with some prior on $[0,1]$; let $\mathcal F_n$ record the first $n$ flips. Your running estimate of the bias is $X_n=\mathbb E[\Theta\mid\mathcal F_n]$ — a Doob martingale, bounded in $[0,1]$ hence uniformly integrable. Lévy's upward theorem says $X_n\to\mathbb E[\Theta\mid\mathcal F_\infty]$ a.s.; and since the flip-frequency reveals $\Theta$ by the strong law (Lesson [4.2](04-02-laws-of-large-numbers.md)), $\Theta$ is $\mathcal F_\infty$-measurable, so $X_n\to\Theta$. In words: keep updating your posterior mean and it converges to the truth. This is Bayesian learning as a martingale — the exact mechanism `grad-game-theory` leans on when players update beliefs in Bayesian games.

## Watch out

- **You might think $L^1$-boundedness gives $L^1$ convergence, but it only gives *almost-sure* convergence.** For $L^1$ convergence (and for $\mathbb E[X_n]\to\mathbb E[X_\infty]$) you need **uniform integrability**. Example 1 is the standing counterexample: a nonnegative martingale with $\mathbb E[M_n]=1$ for all $n$ that converges a.s. to $0$ — mass escapes to infinity along rare huge values. A.s. and $L^1$ are genuinely different modes (Lesson [4.1](04-01-modes-of-convergence.md)).
- **"Converges" means almost surely, not everywhere.** There is a null set of outcomes on which the path may misbehave; the theorem simply says $\mathbb P(\text{path converges})=1$. And the limit $X_\infty$ can be **degenerate** — a constant, or even $0$ as in Example 1. Existence of the limit is not a promise that it's interesting.
- **For supermartingales, check the *right* one-sided bound.** The convergence theorem needs $L^1$-boundedness; the clean sufficient condition is bounded **below** (e.g. *nonnegative*), which makes $\mathbb E|X_n|=\mathbb E[X_n]\le\mathbb E[X_0]$. A supermartingale bounded *above* need not converge — don't flip the sign convention. (Mnemonic: a nonnegative supermartingale is a fortune in an unfavorable game that can't go into debt; it has nowhere to go but down to a limit.)

## One-liner

> A martingale that can't drift and can't blow up has only one option left — to settle down — and counting how often it crosses a band proves it does so almost surely.

## Problems

**P1 (🟢)** Let $(M_n)$ be a martingale with $M_n\ge 0$ and $\mathbb E[M_0]=1$. (a) Quote the theorem that guarantees $M_n$ converges a.s., and state what has to be checked. (b) Must $\mathbb E[M_\infty]=1$? Give the one-word reason and name the extra hypothesis that *would* force it.

**P2 (🟡)** Let $(X_n)$ be a martingale with $|X_n|\le C$ for a constant $C$ (a *bounded* martingale). Show it converges both almost surely **and** in $L^1$. (Hint: boundedness is a very strong form of uniform integrability.)

**P3 (🔴, optional — branching processes)** A Galton–Watson process: start with $Z_0=1$ individual; each individual in generation $n$ independently has a random number of children with mean $\mu>0$, and $Z_{n+1}$ is the total in generation $n+1$. Let $\mathcal F_n=\sigma(Z_0,\dots,Z_n)$. (a) Show $M_n=Z_n/\mu^n$ is a nonnegative martingale, so it converges a.s. to some $W\ge 0$. (b) In the **subcritical** case $\mu<1$, use Markov's inequality on $Z_n$ to prove extinction is certain ($Z_n\to0$), and identify $W$.

<details>
<summary>Solutions</summary>

**P1** (a) The **martingale convergence theorem**, via its nonnegative corollary. What to check: $L^1$-boundedness, $\sup_n\mathbb E|M_n|<\infty$ — and here it's automatic, because $M_n\ge 0$ gives $\mathbb E|M_n|=\mathbb E[M_n]=\mathbb E[M_0]=1$ for all $n$ (constant expectation of a martingale). So $M_n\to M_\infty$ a.s. with $\mathbb E|M_\infty|<\infty$.

(b) **No.** One-word reason: *escape* (mass leaks to infinity). Fatou only guarantees $\mathbb E[M_\infty]\le\liminf\mathbb E[M_n]=1$, and the inequality can be strict — Example 1 has $\mathbb E[M_\infty]=0<1$. The extra hypothesis that forces $\mathbb E[M_\infty]=1$ is **uniform integrability**, which upgrades a.s. convergence to $L^1$ convergence and hence $\mathbb E[M_n]\to\mathbb E[M_\infty]$.

**P2** *A.s.:* a bounded martingale is $L^1$-bounded, since $\mathbb E|X_n|\le C$ for all $n$, so $\sup_n\mathbb E|X_n|\le C<\infty$. The convergence theorem gives $X_n\to X_\infty$ a.s., with $|X_\infty|\le C$.

*$L^1$:* $|X_n-X_\infty|\le|X_n|+|X_\infty|\le 2C$, so the differences are dominated by the constant (integrable) $2C$. Since $X_n\to X_\infty$ a.s., the **dominated convergence theorem** (Lesson [2.4](02-04-convergence-theorems.md)) gives $\mathbb E|X_n-X_\infty|\to0$, i.e. $X_n\to X_\infty$ in $L^1$. (Equivalently: a uniformly bounded family is uniformly integrable, and UI + a.s. convergence $\Rightarrow$ $L^1$ convergence.) In particular $\mathbb E[X_n]=\mathbb E[X_0]\to\mathbb E[X_\infty]$, so a bounded martingale is closed: $X_n=\mathbb E[X_\infty\mid\mathcal F_n]$.

**P3** (a) Given $\mathcal F_n$, generation $n+1$ is the sum of $Z_n$ independent offspring counts, each with mean $\mu$, so $\mathbb E[Z_{n+1}\mid\mathcal F_n]=\mu\,Z_n$ (Wald-style: a random-sized sum of i.i.d. mean-$\mu$ terms, independent of the count $Z_n$). Then
$$\mathbb E[M_{n+1}\mid\mathcal F_n]=\frac{\mathbb E[Z_{n+1}\mid\mathcal F_n]}{\mu^{n+1}}=\frac{\mu Z_n}{\mu^{n+1}}=\frac{Z_n}{\mu^n}=M_n,$$
and $M_n=Z_n/\mu^n\ge0$. So $(M_n)$ is a nonnegative martingale; by the corollary it converges a.s. to some $W\ge0$.

(b) Taking expectations in the martingale relation, $\mathbb E[Z_n]=\mu^n$. Since $Z_n$ is a nonnegative *integer*, $\{Z_n\ge1\}=\{Z_n\neq0\}$, and Markov's inequality gives
$$\mathbb P(Z_n\ge 1)\le \mathbb E[Z_n]=\mu^n\xrightarrow[n\to\infty]{}0\quad(\mu<1).$$
So $\mathbb P(Z_n\ge1)\to0$; because $\{Z_n=0\}$ is absorbing and increasing in $n$, extinction $\{\exists n: Z_n=0\}$ has probability $1$ — the line dies out. Hence $Z_n\to0$, and $M_n=Z_n/\mu^n\to0$ too (indeed $Z_n=0$ eventually), so $W=0$ a.s. (When $\mu>1$ the martingale limit $W$ can be strictly positive with positive probability — that event is precisely *survival*, and $Z_n\approx W\mu^n$ grows geometrically.)

</details>

## Flashback

**From Lesson 5.4 (Stopping times and optional stopping):** A symmetric simple random walk starts at $S_0=2$ and stops when it first hits $0$ or $5$; let $T$ be that stopping time. Using optional stopping on the right martingales, find (a) the probability it reaches $5$ before $0$, and (b) the expected duration $\mathbb E[T]$.

<details>
<summary>Solution</summary>

Let $S_n$ be the walk, $\pm1$ steps each with probability $\tfrac12$. Both $S_n$ and $S_n^2-n$ are martingales (Lesson [5.3](05-03-martingales.md)), and $T$ is an a.s.-finite stopping time bounded in the relevant sense — the walk is confined to $\{0,\dots,5\}$, so optional stopping applies (Lesson [5.4](05-04-stopping-times-optional-stopping.md)).

(a) Apply optional stopping to $S_n$: $\mathbb E[S_T]=S_0=2$. At time $T$ the walk is at $0$ or $5$, so with $p=\mathbb P(\text{hit }5\text{ first})$, $\mathbb E[S_T]=5p+0\cdot(1-p)=5p=2$, giving $p=\tfrac{2}{5}$. (General gambler's ruin from $k$ with barriers $0,N$: probability $k/N$.)

(b) Apply optional stopping to $S_n^2-n$: $\mathbb E[S_T^2-T]=S_0^2=4$, so $\mathbb E[T]=\mathbb E[S_T^2]-4$. Now $S_T^2$ is $0$ or $25$, so $\mathbb E[S_T^2]=25p=25\cdot\tfrac25=10$. Therefore $\mathbb E[T]=10-4=6$. (General: $\mathbb E[T]=k(N-k)=2\cdot3=6$. ✓)

</details>

## Connections

- **Backward — the whole arc closes here.** The proof reached back through the entire course: **Fatou's lemma** ([2.4](02-04-convergence-theorems.md)) bounds $\mathbb E|X_\infty|$; **almost-everywhere / countable unions of null sets** ([1.4](01-04-constructing-lebesgue-measure.md)) let us handle all rational bands at once; **modes of convergence** ([4.1](04-01-modes-of-convergence.md)) name the gap between a.s. and $L^1$; **conditional expectation** (Lesson 5.1–5.2) and **martingales** ([5.3](05-03-martingales.md)) are the objects; **optional stopping** ([5.4](05-04-stopping-times-optional-stopping.md)) built the strategy that proves the upcrossing bound. That is the spine of the course in one theorem: measure & $\sigma$-algebras (Module 1) → random variables & the Lebesgue integral (Module 2) → independence & sums (Module 3) → the LLN and CLT (Module 4) → conditioning & martingales (Module 5).
- **Forward — this is the doorway to processes.** Discrete-time martingales converge; the sequel replaces $n$ with continuous time $t$. The road ahead: **Markov chains** (memoryless processes, where martingales measure harmonic functions), **Brownian motion** (the continuous martingale, limit of rescaled random walks — a martingale whose paths never settle because it isn't $L^1$-bounded on all of time), and **Itô stochastic calculus** (integration against Brownian motion, where the martingale property becomes the defining feature of a "stochastic integral"). Continuous-time martingale convergence and the optional stopping theorem carry over almost verbatim — you already own the discrete skeleton.
- **Sideways — the measure-theoretic backbone.** This course is the prerequisite for `grad-game-theory` (Bayesian games and belief updating are Doob martingales, as in Example 2; existence proofs run on these convergence theorems), `stat-mech` (ensembles are probability measures on phase space; the thermodynamic limit is a law-of-large-numbers/martingale statement), and mathematical finance and econometrics (asset prices are martingales under the risk-neutral measure; the fundamental theorem of asset pricing *is* a martingale existence result). You now have the foundation all of them stand on.
