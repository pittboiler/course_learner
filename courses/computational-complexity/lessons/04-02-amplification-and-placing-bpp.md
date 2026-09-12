# Complexity Theory · Lesson 4.2: Taming error — amplification & placement

> ⏱ ~15 min · Module 4: Randomized & interactive computation · Builds on: [4.1 (randomness as a resource)](04-01-randomness-as-a-resource.md), [2.2 (the polynomial hierarchy)](02-02-the-polynomial-hierarchy.md) · Unlocks: [4.4 (sumcheck)](04-04-arithmetization-sumcheck-and-ip-equals-pspace.md), [5.1 (circuits and P/poly)](05-01-boolean-circuits-and-p-poly.md)

## Why this matters

[Lesson 4.1](04-01-randomness-as-a-resource.md) defined $\mathsf{BPP}$ with the constant $2/3$ and asserted the constant does not matter. This lesson proves it, with a bound you can compute, and then answers the harder question: **where does $\mathsf{BPP}$ sit?**

The answer is uncomfortable at first. $\mathsf{BPP}$ has no known relationship with $\mathsf{NP}$ in either direction — a class modelling routine practical computation is not known to be inside a class modelling intractability. It is not even known to be inside $\mathsf{NP}$. The two placements that *are* known are indirect and both beautiful: $\mathsf{BPP}\subseteq\mathsf{P/poly}$, by a counting argument that finds a single random string working for every input of a given length; and $\mathsf{BPP}\subseteq\Sigma_2^p\cap\Pi_2^p$, which at least puts it low in the hierarchy.

And there is the belief. Almost everyone expects $\mathsf{P} = \mathsf{BPP}$ — that randomness buys convenience and not capability. That expectation is not idle: it follows from plausible circuit lower bounds, and the derandomization programme that establishes the connection is one of the successes of modern complexity. **Randomness is the one resource in this course that the field expects to be free**, and this lesson explains why.

## The idea

**Amplification is a majority vote.** Run a $\mathsf{BPP}$ machine $t$ times independently on the same input, with fresh randomness each time, and output the majority answer. Each run is correct with probability $p \ge 2/3$, so the majority is wrong only if at least half the runs are wrong — an event whose probability falls off exponentially in $t$.

The bound that quantifies it is Chernoff's, in the form that applies to a majority vote:

$$\Pr[\text{majority wrong}] \;\le\; e^{-2t(p - 1/2)^2}.$$

With $p = 2/3$ the exponent is $-t/18$, so the error decays by a factor of $e$ every 18 runs. Polynomially many runs give error $2^{-\mathrm{poly}(n)}$, which is smaller than the probability the hardware fails.

Two consequences follow immediately. Replacing $2/3$ by any constant above $1/2$ gives the same class, and so does replacing it by $1/2 + 1/\mathrm{poly}(n)$, since the exponent is then $-t/\mathrm{poly}$ and polynomially many runs still suffice. **What you cannot allow is exactly $1/2$**, which is a coin and carries no information at all.

**Adleman's argument: randomness can be hardwired.** Amplify until the error is below $2^{-(n+1)}$. Fix an input length $n$. Call a random string $r$ *bad for $x$* if $M(x,r)$ gives the wrong answer. Pick $r$ uniformly and count:

$$\mathbb{E}\big[\#\{x \in \{0,1\}^n : r \text{ is bad for } x\}\big] \;=\; \sum_{x} \Pr[r \text{ bad for } x] \;<\; 2^n \cdot 2^{-(n+1)} \;=\; \tfrac12.$$

An expectation below $1/2$ forces some outcome below $1/2$, and the count is an integer, so **some $r$ is bad for no input of length $n$ at all.** Hardwire that string as advice and you have a deterministic circuit family: $\mathsf{BPP} \subseteq \mathsf{P/poly}$.

The argument is worth pausing on because it is the probabilistic method in its purest form. It proves a good $r$ exists without giving any way to find one — and **finding one is exactly the derandomization problem**, which is open.

**Placement in the hierarchy.** $\mathsf{BPP}\subseteq\Sigma_2^p$ is proved by a *shifting* argument. Amplify so the accepting set of random strings is either almost all of $\{0,1\}^m$ or a vanishing fraction. Then "$x$ is a yes-instance" becomes: *there exist* a few shift vectors $s_1,\dots,s_k$ such that *for every* $r$, some $M(x, r \oplus s_i)$ accepts. On a yes-instance the accepting set is so large that a few random shifts cover the cube; on a no-instance it is so small that $k$ shifts cannot. That is an $\exists\forall$ sentence, so $\Sigma_2^p$ — and since $\mathsf{BPP}$ is closed under complement, also $\Pi_2^p$.

## The formal version

**Theorem ([amplification](../reference.md#amplification)).** Let $A$ be decided by a probabilistic machine correct with probability $p \ge 1/2 + \delta$ on every input. Running it $t$ times and taking the majority gives error at most $e^{-2t\delta^2}$.

*Proof.* Let $X_i = 1$ if run $i$ is correct. The $X_i$ are independent with mean $p$. The majority is wrong iff $\sum X_i \le t/2$, that is, iff the sample mean falls at least $\delta$ below $p$. Hoeffding's inequality bounds that by $e^{-2t\delta^2}$. $\blacksquare$

**Corollary ([robustness of BPP](../reference.md#bpp-robustness)).** Defining $\mathsf{BPP}$ with success probability $2/3$, with $0.51$, or with $1/2 + n^{-c}$ for any constant $c$ all give the same class; and any $\mathsf{BPP}$ language has a machine with error $2^{-n^k}$ for any desired $k$.

**Theorem ([Adleman](../reference.md#adlemans-theorem)).** $\mathsf{BPP}\subseteq\mathsf{P/poly}$.

*Proof.* Amplify $M$ so its error is below $2^{-(n+1)}$ on every input, using $m = \mathrm{poly}(n)$ random bits. For each $r \in \{0,1\}^m$ let $B(r) = \{x \in \{0,1\}^n : M(x,r) \text{ errs}\}$. Then

$$\mathbb{E}_r\big[|B(r)|\big] = \sum_{x\in\{0,1\}^n}\Pr_r[M(x,r)\text{ errs}] < 2^n\cdot 2^{-(n+1)} = \tfrac12.$$

Since $|B(r)|$ is a nonnegative integer with expectation below $1/2$, there exists $r^*$ with $|B(r^*)| = 0$. The circuit that hardwires $r^*$ and simulates $M(\cdot, r^*)$ is correct on **every** input of length $n$ and has polynomial size. Taking one such $r^*$ per length gives a polynomial-size circuit family. $\blacksquare$

**Theorem ([Sipser-Gacs-Lautemann](../reference.md#bpp-in-sigma-2)).** $\mathsf{BPP}\subseteq\Sigma_2^p\cap\Pi_2^p$.

*Sketch.* Amplify so that on a yes-instance the accepting set $S_x\subseteq\{0,1\}^m$ has $|S_x| \ge (1 - 2^{-m})2^m$, and on a no-instance $|S_x|\le 2^m/(3m)$. Set $k = m/\log m + 1$. Then

$$x \in A \iff \exists s_1,\dots,s_k \in \{0,1\}^m\ \forall r\in\{0,1\}^m\ \bigvee_{i=1}^k M(x, r\oplus s_i) = 1.$$

($\Leftarrow$) A small $S_x$ gives $|\bigcup_i (S_x\oplus s_i)| \le k|S_x| < 2^m$, so some $r$ escapes all shifts. ($\Rightarrow$) A large $S_x$ makes random shifts cover the cube with positive probability, so covering shifts exist. The right-hand side is $\exists\forall$ over polynomially long strings with a polynomial-time matrix: $\Sigma_2^p$. Closure under complement gives $\Pi_2^p$. $\blacksquare$

**The belief.** $\mathsf{P} = \mathsf{BPP}$ follows (Impagliazzo–Wigderson, 1997) from the hypothesis that some language in $\mathsf{E}$ requires circuits of size $2^{\Omega(n)}$ — a circuit lower bound most people expect to be true. **So derandomization is not a separate conjecture; it is a consequence of hardness**, and the mechanism is that a hard function can be stretched into a pseudorandom generator no polynomial-time test can distinguish from random.

## Picture

![A plot with the number of independent runs t on the horizontal axis from 0 to 1300 and error on a logarithmic vertical axis running from 1 down to two to the minus one hundred. A solid blue curve, the exact majority error at success probability two thirds, falls steadily; a dashed coral line, the Chernoff bound, falls slightly more steeply above it. A horizontal dashed line marks two to the minus one hundred, crossed by the blue curve at t equals 1121 and by the coral line at t equals 1248.](assets/04-02-fig1.svg)

Both curves are straight on a logarithmic scale, which is the whole point: **the error decays exponentially in the number of runs**, so pushing it to astronomically small values costs only a linear amount of work.

Read the two crossings. To reach error $2^{-100}$ — below any probability worth worrying about — the exact requirement is 1121 runs, and the Chernoff bound prescribes 1248. The bound overshoots by 11 percent, which is a good reminder that these inequalities are tight enough to use as design rules and not merely as existence proofs.

The practical reading: $2^{-100}$ is roughly $10^{-30}$, which is many orders of magnitude below the probability of an undetected memory error during the computation. **Beyond a certain point, amplifying further makes the algorithm's randomness the least of your worries**, and that is the real reason the constant in the definition of $\mathsf{BPP}$ does not matter.

What the figure cannot show is the one thing amplification cannot do. Repeating never converts two-sided error into one-sided error: the blue curve approaches zero and never reaches it, at any finite $t$.

## Worked examples

**Example 1 (mechanical): size an amplification.** An algorithm is correct with probability $0.55$ on every input. How many runs does a majority vote need for error below $10^{-9}$?

Here $\delta = p - 1/2 = 0.05$, so the Chernoff bound gives error $\le e^{-2t(0.05)^2} = e^{-t/200}$. Solve

$$e^{-t/200} \le 10^{-9} \quad\Longleftrightarrow\quad t \ge 200\ln(10^9) = 200 \times 20.72 = 4145.$$

So about **4150 runs**. Note the quadratic dependence on $\delta$: had the algorithm been correct with probability $0.6$, $\delta$ doubles, the exponent quadruples, and roughly 1040 runs suffice. **Improving a weak algorithm's success rate slightly is worth a lot more than running the weak one longer.**

A sanity check on the shape: at $p = 2/3$ we have $\delta = 1/6$, the exponent is $-t/18$, and error $2^{-100}$ needs $t \ge 100\ln 2\cdot 18 = 1248$, matching the figure.

**Example 2 (why you'd care): what $\mathsf{BPP}\subseteq\mathsf{P/poly}$ does and does not give you.** Adleman's theorem says every $\mathsf{BPP}$ language has polynomial-size circuits. It is tempting to read this as "so randomness can be eliminated".

It cannot, at least not usefully, and the reason is instructive. The theorem produces **one good random string per input length**, and proves its existence by counting without constructing it. To use the circuit you would have to find $r^*$, and the only known way to check whether a candidate $r^*$ is good is to test it against all $2^n$ inputs.

So the theorem is non-constructive in a strong sense: it converts randomness into **non-uniform advice**, which is a different resource entirely — [Lesson 5.1](05-01-boolean-circuits-and-p-poly.md) shows $\mathsf{P/poly}$ contains undecidable languages, so membership in it is weak evidence of tractability.

**What the theorem is actually used for is the contrapositive.** If you can show some language in $\mathsf{BPP}$ requires superpolynomial circuits, you have shown $\mathsf{BPP}\ne$ that language's class. And it feeds the $\mathsf{BPP}\subseteq\Sigma_2^p$ result and the Karp–Lipton style arguments of [5.2](05-02-karp-lipton-and-the-lower-bound-program.md), where "class $X$ has small circuits" is the hypothesis being refuted.

The genuinely constructive route to derandomization is the other one: build a pseudorandom generator from a hard function, and run the algorithm on its output. That is the Impagliazzo–Wigderson programme, and unlike Adleman it would give a real deterministic algorithm — **conditional on a circuit lower bound nobody has proved.**

## Watch out

- **You might think** amplification can reduce $\mathsf{BPP}$'s error to zero — **but actually** it approaches zero exponentially and never reaches it. Turning two-sided error into zero error would give $\mathsf{BPP} = \mathsf{ZPP}$, which is open.
- **You might think** the success probability in the definition of $\mathsf{BPP}$ could be $1/2 + 2^{-n}$ — **but actually** that is too weak: amplification would need $2^{\Omega(n)}$ runs, and the resulting class is all of $\mathsf{PP}$, which contains NP and is believed much larger. **The gap must be at least an inverse polynomial.**
- **You might think** Adleman's theorem gives a deterministic algorithm — **but actually** it gives a *circuit family* whose advice strings are proved to exist and not constructed. Non-uniform advice is a different resource from time, and [5.1](05-01-boolean-circuits-and-p-poly.md) shows how much stranger it is.
- **You might think** $\mathsf{BPP}\subseteq\Sigma_2^p$ is close to $\mathsf{BPP}\subseteq\mathsf{NP}$ — **but actually** the second is open and is not implied by the first. The shifting argument genuinely needs both quantifiers: an $\exists$ over shift vectors and a $\forall$ over random strings, and nobody knows how to remove either.
- **You might think** believing $\mathsf{P} = \mathsf{BPP}$ is a guess — **but actually** it follows from circuit lower bounds most people also believe, so the two beliefs are linked rather than independent. Arguing that randomness helps means arguing that no such hard function exists, which almost nobody wants to do.

## One-liner

> Repetition drives error down exponentially without ever reaching zero, and the two known placements of BPP both work by converting "most random strings succeed" into "one fixed string succeeds" — a move that is non-constructive by nature.

## Problems

**P1 (🟢)** A randomized algorithm is correct with probability $0.6$ on every input. (a) Give $\delta$ and the Chernoff exponent as a function of the number of runs $t$. (b) Give the number of runs needed for error below $10^{-6}$. (c) Repeat for an algorithm correct with probability $0.9$, and state the ratio of the two answers.

**P2 (🟡)** Adleman's argument amplifies to error below $2^{-(n+1)}$ before counting, which is more than it needs. (a) Show that error strictly below $2^{-n}$ already suffices: give the resulting expectation and name the property of $|B(r)|$ that finishes the argument. (b) Give the expectation if you amplify to $2^{-2n}$ instead, and state the stronger conclusion Markov's inequality then yields. (c) Explain in one sentence why the argument gives no way to *find* the good random string.

**P3 (🔴, optional)** (a) Prove $\mathsf{BPP}$ is closed under complement, in two sentences. (b) $\mathsf{RP}$ is not known to be closed under complement. Explain what goes wrong with the same argument. (c) Given (a) and the theorem $\mathsf{BPP}\subseteq\Sigma_2^p$, derive $\mathsf{BPP}\subseteq\Pi_2^p$, and state what would follow if someone additionally proved $\mathsf{BPP}\subseteq\mathsf{NP}$.

<details>
<summary>Solutions</summary>

**P1**

(a) $\delta = 0.6 - 0.5 = \mathbf{0.1}$, so the bound is $e^{-2t(0.1)^2} = \mathbf{e^{-t/50}}$.

(b) Solve $e^{-t/50}\le 10^{-6}$: $t \ge 50\ln(10^6) = 50 \times 13.816 = 690.8$, so **691 runs**.

(c) At $p = 0.9$, $\delta = 0.4$ and the bound is $e^{-2t(0.16)} = e^{-0.32t}$. Solving $e^{-0.32t}\le10^{-6}$ gives $t \ge 13.816/0.32 = 43.2$, so **44 runs**.

The ratio is $691/44 \approx \mathbf{16}$, which is exactly $(0.4/0.1)^2$ — the **quadratic dependence on $\delta$**. Quadrupling the gap cuts the work by sixteen.

**P2**

(a) There are $2^n$ inputs of length $n$. If the amplified machine errs on each with probability strictly below $2^{-n}$, then by linearity of expectation

$$\mathbb{E}_r\big[|B(r)|\big] = \sum_{x \in \{0,1\}^n}\Pr_r[M(x,r)\text{ errs}] \;<\; 2^n\cdot 2^{-n} = 1.$$

The finishing property is that $|B(r)|$ is a **nonnegative integer**. A nonnegative integer random variable with expectation strictly below 1 must take the value 0 with positive probability — if it were always at least 1 its expectation would be at least 1. So some $r^*$ has $B(r^*) = \emptyset$, and that is all the argument needs.

The $2^{-(n+1)}$ in the standard statement buys a factor of two of margin, which makes the strict inequality obvious rather than delicate; it is not required.

(b) With error below $2^{-2n}$ the expectation is $< 2^n\cdot 2^{-2n} = 2^{-n}$. Markov's inequality then gives

$$\Pr_r\big[|B(r)| \ge 1\big] \;\le\; \frac{\mathbb{E}[|B(r)|]}{1} \;<\; 2^{-n},$$

so **at least a $1 - 2^{-n}$ fraction of all random strings are good** — not merely one. A uniformly chosen advice string works with overwhelming probability.

(c) Because the argument is pure counting: it bounds the *average* number of inputs a random string fails on, and never inspects any particular string. **Verifying that a candidate $r^*$ is good means checking all $2^n$ inputs**, which is exactly the exhaustive work the result was supposed to avoid — and (b) shows the difficulty is not rarity, since almost every string works.

**P3**

(a) Let $A \in \mathsf{BPP}$ via $M$. Define $M'$ to run $M$ and output the opposite answer. On $x \in \overline A$ we have $x \notin A$, so $M$ accepts with probability at most $1/3$, so $M'$ accepts with probability at least $2/3$; symmetrically on $x \notin \overline A$. So $\overline A \in \mathsf{BPP}$. $\blacksquare$

(b) For $\mathsf{RP}$ the same flip fails because the two sides are not symmetric. An $\mathsf{RP}$ machine accepts yes-instances with probability $\ge 1/2$ and no-instances with probability exactly 0. Flipping gives a machine accepting the complement's yes-instances (the original no-instances) with probability **1**, and the complement's no-instances with probability up to $1/2$ — which is a $\mathsf{coRP}$ machine, not an $\mathsf{RP}$ one. So $\mathsf{coRP} = \{\overline A : A \in \mathsf{RP}\}$, and $\mathsf{RP} = \mathsf{coRP}$ is open.

(c) Let $A \in \mathsf{BPP}$. By (a), $\overline A \in \mathsf{BPP}$, so by the theorem $\overline A \in \Sigma_2^p$, hence $A \in \mathsf{co}\Sigma_2^p = \Pi_2^p$. Therefore $\mathsf{BPP}\subseteq\Sigma_2^p\cap\Pi_2^p$.

If additionally $\mathsf{BPP}\subseteq\mathsf{NP}$, then by closure under complement $\mathsf{BPP} \subseteq \mathsf{coNP}$ too, so $\mathsf{BPP}\subseteq\mathsf{NP}\cap\mathsf{coNP}$. That would be a substantial improvement on the current best placement and would in particular imply that no $\mathsf{BPP}$ language is NP-complete unless $\mathsf{NP} = \mathsf{coNP}$, by [Lesson 2.1](02-01-conp-and-the-shape-of-np.md)'s theorem.

</details>

## Flashback

**From Lesson 4.1 (randomness as a resource):** For each algorithm, name the class among $\mathsf{RP}$, $\mathsf{coRP}$, $\mathsf{BPP}$, $\mathsf{ZPP}$ for the stated language, and say on which side it is certain.

(a) Language ISOMORPHIC-GRAPHS; algorithm: guess a random permutation and accept iff it is an isomorphism.
(b) Language $L$; algorithm: run a $\mathsf{ZPP}$ machine for twice its expected time and output "reject" on timeout.
(c) Language $L$; algorithm: flip a fair coin and accept iff it comes up heads.

<details>
<summary>Solution</summary>

(a) **$\mathsf{RP}$**, certain on **no**. If the graphs are not isomorphic no permutation works, so a no-instance is never accepted. If they are isomorphic, a random permutation is an isomorphism with probability at least $1/n!$ — which is **exponentially small**, so this is a legal $\mathsf{RP}$ machine only if you first amplify, and amplifying an exponentially small success probability needs exponentially many runs. So the algorithm has the *shape* of $\mathsf{RP}$ but does not place graph isomorphism in $\mathsf{RP}$; it merely re-proves the problem is in $\mathsf{NP}$.

(b) **$\mathsf{RP}$**, certain on **no**. This is exactly the timeout construction from Boss problem 4: a zero-error machine plus a Markov cutoff gives one-sided error, with the wrong side being yes-instances that timed out, at probability at most $1/2$.

(c) **None of them** — it decides no language. Acceptance probability is exactly $1/2$ on every input, independent of the input, which meets no class's requirement: $\mathsf{BPP}$ needs a gap around $1/2$, and $\mathsf{RP}$ needs probability 0 on no-instances. This is the degenerate case that explains why the constant $1/2$ cannot itself be the threshold.

</details>

## Connections

- **Backward:** the classes being amplified are [4.1](04-01-randomness-as-a-resource.md)'s, and the $\Sigma_2^p$ that receives $\mathsf{BPP}$ is [2.2](02-02-the-polynomial-hierarchy.md)'s second level — the shifting argument is a concrete instance of the "read off the quantifier pattern" technique that lesson introduced.
- **Forward:** [5.1](05-01-boolean-circuits-and-p-poly.md) defines the $\mathsf{P/poly}$ that Adleman's theorem lands in and shows how strange non-uniform advice is, and [5.2](05-02-karp-lipton-and-the-lower-bound-program.md) uses the same "small circuits" hypothesis in the other direction. [4.4](04-04-arithmetization-sumcheck-and-ip-equals-pspace.md) needs amplification to make a single-round soundness gap useful.
- **Sideways:** the majority vote over independent trials is the ensemble idea — bagging and random forests amplify a weak learner exactly this way, and boosting's guarantee in [`machine-learning` 2.7](../../machine-learning/lessons/02-07-boosting.md) is the same exponential decay derived from the same concentration inequality. Adleman's counting step is the probabilistic method, which in [`graph-theory` 5.3](../../graph-theory/lessons/05-03-extremal-ramsey.md) proves graphs exist without building them.
