# Complexity Theory · Lesson 1.1: Time, the model & the class P

> ⏱ ~15 min · Module 1: Time, hierarchy & NP-completeness · Builds on: [`theory-of-computation` 3.2 (model robustness)](../../theory-of-computation/lessons/03-02-tm-variants-and-robustness.md) · Unlocks: [1.2 (NP and nondeterministic time)](01-02-np-ntime-and-nondeterministic-time.md)

## Why this matters

[`theory-of-computation`](../../theory-of-computation/syllabus.md) established one liberating fact and one uncomfortable one. The liberating fact: what is computable does not depend on the machine. Every reasonable model computes the same set of functions, so "decidable" is a property of the *problem*.

The uncomfortable fact, from that course's [Lesson 3.2](../../theory-of-computation/lessons/03-02-tm-variants-and-robustness.md): **how fast is not model-independent.** Palindrome recognition takes linear time on two tapes and provably quadratic time on one. So "this problem takes $n^2$ steps" is a statement about a machine, not about a problem, and a subject built on such statements would be a subject about hardware.

Complexity theory gets out of this by being deliberately coarse. It draws its lines where the model changes cannot reach them. That single design decision — not any theorem — is why the class $\mathsf{P}$ is defined as *polynomial* time rather than $n^2$ time, and it is the first thing to understand about the whole field.

## The idea

Fix a deterministic Turing machine $M$ that halts on every input. Its running time is a function of input *length*, taken as a **worst case**: $t(n)$ is the largest number of steps $M$ takes on any input of length $n$. Worst case, not average, because we want a guarantee rather than a hope.

Now: which functions $t$ should count as "the same"?

Two forces decide this, and both push the same way.

**Constants are meaningless.** There is a theorem — the linear speedup theorem — saying that any machine running in time $t(n)$ can be rebuilt to run in time $t(n)/c + O(n)$ for any constant $c$ you like. The trick is to compress $c$ tape symbols into one symbol of a bigger alphabet, so one step of the new machine does $c$ steps of the old. You get to divide the running time by a hundred for free. A theory in which "runs in $5n^2$ steps" differed from "runs in $n^2$ steps" would be measuring your choice of alphabet.

**Model changes cost you an exponent.** A $k$-tape machine running in $t$ steps simulates on one tape in $O(t^2)$ steps; a random-access machine simulates on tapes with another polynomial blow-up. So any class you define had better be closed under raising the running time to a power, or it will change when you change your mind about the hardware.

Put those together and there is essentially one answer: **collect all the polynomial bounds into a single class and stop distinguishing between them.** Squaring a polynomial gives a polynomial, so the class survives every model change above. Multiplying a polynomial by a constant gives a polynomial, so the class survives linear speedup. That class is $\mathsf{P}$, and its robustness is the entire reason it is the object of study.

The price is that $\mathsf{P}$ is a bad model of "practical". An algorithm running in $n^{100}$ steps is in $\mathsf{P}$ and will never run. The defence is empirical rather than mathematical: problems found to be in $\mathsf{P}$ almost always turn out to be in $\mathsf{P}$ with a small exponent and a small constant, and the exceptions are famous enough to name. That empirical claim is the [Cobham-Edmonds thesis](../reference.md#cobham-edmonds-thesis), and it is a thesis, not a theorem.

## The formal version

**Definition ([running time](../reference.md#running-time)).** For a deterministic TM $M$ halting on all inputs, $t_M(n) = \max\{\,\text{steps } M \text{ takes on } w : |w| = n\,\}$.

*In words: the worst input of that length decides the cost.*

**Definition ([TIME](../reference.md#time-and-space-classes)).** For $t : \mathbb{N} \to \mathbb{R}^{+}$,

$$\mathrm{TIME}(t(n)) = \{\, A : \text{some deterministic multitape TM decides } A \text{ in } O(t(n)) \text{ steps} \,\}.$$

*In words: the problems you can decide within that time bound, up to a constant factor.*

**Definition ([the class P](../reference.md#the-class-p)).**

$$\boxed{\ \mathsf{P} \;=\; \bigcup_{k \ge 1} \mathrm{TIME}(n^k). \ }$$

*In words: decidable in time bounded by some fixed power of the input length. Which power is not part of the definition.*

**Theorem ([linear speedup](../reference.md#linear-speedup)).** If $A \in \mathrm{TIME}(t(n))$ with $t(n)$ superlinear, then for every $c > 0$, $A$ is decided by some machine in time $t(n)/c + O(n)$.

*Sketch.* Encode $c$ symbols of the old tape alphabet into one symbol of a new one. The new machine reads a block, and in a constant number of steps simulates all $c$ old steps that could occur inside it. $\blacksquare$

The consequence is the one that matters: **constant factors are not a property of a problem**, so complexity classes must be defined up to constant factors. This is *why* the $O(\cdot)$ in the definition of $\mathrm{TIME}$ is there, not a convenience.

**Theorem ([simulation overhead](../reference.md#simulation-overhead)).** Let $t(n) \ge n$.

| from | to | cost |
|---|---|---|
| $k$-tape TM in time $t$ | single-tape TM | $O(t^2)$ |
| $k$-tape TM in time $t$ | two-tape TM | $O(t \log t)$ |
| random-access machine in time $t$ | multitape TM | $O(t^3)$ |

Each is proved by describing how the target model stores and shuffles the source model's configuration; the proofs live in [`theory-of-computation` 3.2](../../theory-of-computation/lessons/03-02-tm-variants-and-robustness.md).

**Corollary ([robustness of P](../reference.md#robustness-of-p)).** $\mathsf{P}$ is the same class whether defined by single-tape TMs, multitape TMs, or random-access machines.

*Proof.* Each row of the table maps a polynomial bound to a polynomial bound, because a polynomial of a polynomial is a polynomial. $\blacksquare$

That corollary is the whole point. **$\mathrm{TIME}(n^2)$ is a statement about a machine; $\mathsf{P}$ is a statement about a problem.**

## Picture

![Two panels. On the left, three boxes stacked vertically labelled RAM, k-tape TM and one-tape TM, joined by downward arrows labelled t becomes order t cubed and t becomes order t squared, with a dashed bracket spanning all three annotated polynomial in, polynomial out. On the right, a plot with input size n on the horizontal axis from 0 to 600 and a logarithmic vertical axis running from 1 to ten to the fourteen. A blue curve for n to the fifth rises steeply then flattens, and a coral curve for two to the power zero point one n starts lower and crosses it, the crossing marked at n equals 439.](assets/01-01-fig1.svg)

The left panel is the robustness argument as a picture. Each arrow costs you an exponent, and no arrow takes you out of the bracket. That is the only property of $\mathsf{P}$ that its definition was designed to have.

The right panel is the honest caveat, and it is worth reading as a cost derivation rather than a slogan. Below $n = 439$ the exponential algorithm is *faster* than the polynomial one, and on a real machine at a billion steps a second that is not a tiny window — it is every input up to length 438, at a cost of a few hours. **"Polynomial" is a statement about the limit, and the limit can be far away.** What the asymptotic claim buys you is that the coral curve eventually wins and then keeps winning by ever-larger factors, which the blue curve can never reverse.

## Worked examples

**Example 1 (mechanical): from a multitape bound to a class.** A 5-tape machine decides $L$ in $3n^2 + 7n$ steps. Place $L$.

First simplify: $3n^2 + 7n = O(n^2)$, so $L \in \mathrm{TIME}(n^2)$ *for multitape machines*. Now suppose someone insists on a single tape. By the simulation theorem the single-tape cost is $O\big((n^2)^2\big) = O(n^4)$, so on that model $L \in \mathrm{TIME}(n^4)$.

Two different $\mathrm{TIME}$ classes, one problem. But $n^2$ and $n^4$ are both polynomials, so **$L \in \mathsf{P}$ on either model**, and that is the statement worth making. Notice also what the speedup theorem does here: it lets you drop the 3 and the $7n$ without a second thought, because a machine achieving $n^2 + O(n)$ exists.

**Example 2 (why you'd care): choosing between an exponential and a polynomial algorithm.** Algorithm A runs in $2^{n/10}$ steps, algorithm B in $n^5$ steps, on a machine doing $10^9$ steps per second.

| $n$ | A: $2^{n/10}$ steps | A: time | B: $n^5$ steps | B: time | faster |
|---|---|---|---|---|---|
| 400 | $1.10\times10^{12}$ | 18 min | $1.02\times10^{13}$ | 2.8 h | A |
| 438 | $1.53\times10^{13}$ | 4.25 h | $1.61\times10^{13}$ | 4.48 h | A |
| 439 | $1.64\times10^{13}$ | 4.56 h | $1.63\times10^{13}$ | 4.53 h | B |
| 450 | $3.52\times10^{13}$ | 9.8 h | $1.85\times10^{13}$ | 5.1 h | B |

The crossover is at $n = 439$: A is faster on every input up to length 438.

The point is not that asymptotics lie. It is that **the asymptotic classification and the engineering decision are different questions**, and complexity theory only answers the first. If your inputs are capped at 300, ship A. If they are not capped, ship B, because by $n = 600$ algorithm A needs 19 days and B needs 22 hours, and the gap only widens.

There is a reason to care about the first question anyway: it is the one that transfers. "B is polynomial" survives a change of language, machine, and decade. "A is faster below 439" does not survive any of them.

## Watch out

- **You might think** polynomial time means practical — **but actually** $n^{100}$ is in $\mathsf{P}$ and is useless, and Example 2's exponential algorithm beats a quintic one on every input anyone would call small. $\mathsf{P}$ is a robustness class first and a tractability proxy second.
- **You might think** $\mathrm{TIME}(n^2)$ is a property of the problem the way $\mathsf{P}$ is — **but actually** it moves when you change the machine model: the same language sat in $\mathrm{TIME}(n^2)$ and $\mathrm{TIME}(n^4)$ in Example 1. Only the union over all exponents is model-independent.
- **You might think** the constants in "$3n^2 + 7n$" are worth optimizing in this theory — **but actually** linear speedup gives them away for free, so no theorem here can depend on them. Constants are an engineering question and a real one; they are just not this subject's question.
- **You might think** "polynomial" was chosen because polynomials are practical — **but actually** it was chosen because polynomials are the smallest natural class closed under composition, which is exactly what the simulation table demands. The practicality is a happy empirical accident, and it is what the Cobham-Edmonds thesis asserts rather than proves.

## One-liner

> $\mathsf{P}$ is defined up to polynomials not because polynomials are fast, but because that is the coarsest resolution at which changing the machine cannot change the answer.

## Problems

**P1 (🟢)** A 5-tape Turing machine decides $L$ in $3n^2 + 7n$ steps. (a) Give the best bound the simulation theorem yields for a single-tape machine deciding $L$, as a $\mathrm{TIME}$ class. (b) Is $L \in \mathsf{P}$? Answer yes or no and name the property of polynomials that settles it.

**P2 (🟡)** Algorithm A runs in $2^{n/10}$ steps and algorithm B in $n^5$ steps. (a) Find the largest input length $n$ at which A uses no more steps than B. (b) At $10^9$ steps per second, give both running times at that $n$, to two significant figures. (c) One sentence: which algorithm would you ship if inputs are guaranteed to have length at most 250, and why is that not a statement about complexity classes?

**P3 (🔴, optional)** Show that $\mathsf{P}$ is closed under composition: if $f$ is computable in polynomial time and $A \in \mathsf{P}$, then $\{x : f(x) \in A\} \in \mathsf{P}$. Then exhibit a $k$ for which $\mathrm{TIME}(n^k)$ is **not** closed under composition in the same sense, and say in one sentence what that shows about why $\mathsf{P}$ is defined as a union.

<details>
<summary>Solutions</summary>

**P1**

(a) The multitape running time is $3n^2 + 7n = O(n^2)$. The simulation theorem converts a $k$-tape machine running in time $t$ into a single-tape machine running in $O(t^2)$, so here the bound is $O\big((n^2)^2\big) = O(n^4)$, giving $L \in \mathrm{TIME}(n^4)$ on single-tape machines.

(b) **Yes.** The property is that **a polynomial composed with a polynomial is a polynomial**: $n^2$ was squared and came back as $n^4$, still of the form $n^k$. Since $\mathsf{P} = \bigcup_k \mathrm{TIME}(n^k)$ contains both $\mathrm{TIME}(n^2)$ and $\mathrm{TIME}(n^4)$, the membership does not depend on which model you used.

**P2**

(a) Solve $2^{n/10} \le n^5$. Taking $\log_2$: $n/10 \le 5\log_2 n$, i.e. $n \le 50 \log_2 n$. Checking integers near the root, at $n = 438$ we get $2^{43.8} = 1.53\times10^{13}$ against $438^5 = 1.61\times10^{13}$, so A wins; at $n = 439$ we get $1.64\times10^{13}$ against $1.63\times10^{13}$, so B wins. **The largest such $n$ is 438.**

(b) At $n = 438$, dividing by $10^9$ steps per second: A takes $1.5\times10^{4}$ seconds, which is **4.3 hours**; B takes $1.6\times10^{4}$ seconds, which is **4.5 hours**.

(c) Ship **A**: at $n \le 250$ it uses $2^{25} \approx 3.4\times10^{7}$ steps, about 0.03 seconds, against B's $250^5 \approx 9.8\times10^{11}$ steps, about 16 minutes. This is not a statement about complexity classes because a complexity class is a statement about all input lengths, and a guarantee on input size removes exactly the limit that the classification describes. A is in no polynomial time class no matter how well it does below 250.

**P3**

*Accept criterion:* any correct closure proof that composes two polynomial bounds and observes the result is polynomial, plus any single $k$ with a witness showing $\mathrm{TIME}(n^k)$ fails.

*Closure.* Let $f$ be computable in time $O(n^a)$ and let $A$ be decided in time $O(m^b)$ on inputs of length $m$. On input $x$ of length $n$: compute $f(x)$, then run $A$'s decider on it. The first stage costs $O(n^a)$. Because a machine writes at most one symbol per step, $|f(x)| = O(n^a)$ too — this step is easy to skip and it is what makes the argument work. So the second stage costs $O\big((n^a)^b\big) = O(n^{ab})$, and the total is $O(n^a + n^{ab}) = O(n^{ab})$ for $a, b \ge 1$. That is a polynomial, so the composed language is in $\mathsf{P}$. $\blacksquare$

*Failure at fixed $k$.* Take $k = 1$. Let $f(x) = x x$ (the input doubled), computable in time $O(n)$, and let $A$ be any language decided in $O(m)$ but not in $o(m)$ — for instance $\{ww : w \in \{0,1\}^*\}$ on a multitape machine. Then $A \in \mathrm{TIME}(n)$ and $f$ is linear-time computable, but the composition runs $A$ on an input of length $2n$; that is still $O(n)$, so $k=1$ is a poor witness. Take $k = 2$ instead with $f(x) = x^{\#|x|}$ padding to length $n^2$: the composition then costs $O((n^2)^2) = O(n^4) \notin \mathrm{TIME}(n^2)$ by the hierarchy theorem of [Lesson 1.3](01-03-the-hierarchy-theorems.md). Either way the moral is the same.

*What it shows.* Composition raises the exponent, and a class pinned to one exponent cannot absorb that. Since the simulation table in this lesson consists entirely of such compositions, **any class meant to be model-independent must be closed under raising the exponent — which forces the union over all $k$.** The definition of $\mathsf{P}$ is not a convention; it is the smallest choice that works.

</details>

## Connections

- **Backward:** this is [`theory-of-computation` 3.2](../../theory-of-computation/lessons/03-02-tm-variants-and-robustness.md)'s simulation theorems read for a new purpose. There they showed *what* is computable does not move; here the same polynomial overheads dictate where the class boundary has to be drawn.
- **Forward:** [1.2](01-02-np-ntime-and-nondeterministic-time.md) adds nondeterminism to the clock and gets NP, and [1.3](01-03-the-hierarchy-theorems.md) proves the first genuine separations with a diagonalization that needs exactly the constructible-bound care this lesson's asymptotics gloss over.
- **Sideways:** the worst-case-over-inputs convention is the same one that makes the approximation ratios of [`algorithms` 4.3](../../algorithms/lessons/04-03-approximation-algorithms.md) worst-case guarantees rather than benchmark averages, and the "coarse enough to be robust" design move reappears whenever a subject needs an invariant: it is why topology measures shape up to continuous deformation rather than by coordinates.
