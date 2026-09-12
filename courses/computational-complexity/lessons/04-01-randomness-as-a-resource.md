# Complexity Theory · Lesson 4.1: Randomness as a resource

> ⏱ ~15 min · Module 4: Randomized & interactive computation · Builds on: [1.2 (NP and nondeterministic time)](01-02-np-ntime-and-nondeterministic-time.md), [3.3 (approximate counting)](03-03-todas-theorem-and-approximate-counting.md) · Unlocks: [4.2 (amplification and placing BPP)](04-02-amplification-and-placing-bpp.md)

## Why this matters

[`algorithms` 4.4](../../algorithms/lessons/04-04-randomized-algorithms.md) teaches randomized *algorithms* — randomized quicksort, Karger's min-cut, the Monte Carlo and Las Vegas distinction. This lesson does the other half: the **classes**, and why there are four of them rather than one.

Four, because "the algorithm might be wrong" is not a single condition. A primality test that never calls a prime composite but might call a composite prime is a different object from one that might err either way, and both differ from one that is always right but occasionally slow. Those three profiles are three classes, and collapsing them loses exactly the information a practitioner needs. **When a library tells you its primality test is probabilistic, the useful question is not "how likely is it to be wrong" but "wrong in which direction".**

The classes also raise the question the rest of the module is about: does randomness *add power*, or only convenience? The current consensus is that it adds nothing — $\mathsf{P} = \mathsf{BPP}$ is widely believed — which makes randomness the one resource in this course expected to be free. [Lesson 4.2](04-02-amplification-and-placing-bpp.md) gives the evidence.

## The idea

A **probabilistic Turing machine** is a machine with a fair coin: at each step it may branch on a random bit. Equivalently, and more usefully for proofs, it is a deterministic machine $M(x, r)$ taking an extra input $r$ — the random string — drawn uniformly from $\{0,1\}^{p(n)}$.

That second formulation is worth keeping in mind because it makes the comparison with nondeterminism exact. A nondeterministic machine accepts if **some** $r$ leads to acceptance. A probabilistic machine accepts if **most** $r$ do. Same tree, different acceptance rule, and the difference is the whole distance between NP and BPP.

Now: what error profile do you allow?

**One-sided, never a false positive.** $\mathsf{RP}$: on a no-instance the machine always rejects; on a yes-instance it accepts with probability at least $1/2$. So a "yes" is *certain* and a "no" is provisional. The natural algorithms are witness-hunting — a satisfying assignment, a nonzero point of a polynomial, a nontrivial factor — where finding the witness proves the answer and failing to find it proves nothing.

**One-sided the other way.** $\mathsf{coRP}$: no-instances get "no" with certainty, yes-instances might be misreported. The Miller–Rabin primality test is here: a composite always has a witness to its compositeness that the test may or may not find, so "composite" is certain and "prime" is probable.

**Two-sided.** $\mathsf{BPP}$: the machine is right with probability at least $2/3$ whichever the answer is. This is the class meant to model "efficient randomized computation" in general.

**Zero-sided.** $\mathsf{ZPP}$: the machine is *always* right, but its running time is a random variable with polynomial expectation. Las Vegas algorithms. You never get a wrong answer; you occasionally wait.

**The constants do not matter, and the shapes do.** The $1/2$ in $\mathsf{RP}$ and the $2/3$ in $\mathsf{BPP}$ can be pushed to $1 - 2^{-n}$ by repetition, which [4.2](04-02-amplification-and-placing-bpp.md) makes precise. What repetition cannot do is turn a two-sided error into a one-sided one, or a one-sided error into none. **The class is determined by the shape of the error, not its size.**

## The formal version

**Definition ([probabilistic machine](../reference.md#probabilistic-turing-machine)).** A polynomial-time probabilistic TM is a deterministic polynomial-time $M(x,r)$ with $|r| = p(|x|)$; probabilities are over $r$ uniform.

**Definition ([the randomized classes](../reference.md#randomized-classes)).** $A \in$

| class | on $x \in A$ | on $x \notin A$ |
|---|---|---|
| $\mathsf{RP}$ | $\Pr[M \text{ accepts}] \ge 1/2$ | $\Pr[M \text{ accepts}] = 0$ |
| $\mathsf{coRP}$ | $\Pr[M \text{ accepts}] = 1$ | $\Pr[M \text{ accepts}] \le 1/2$ |
| $\mathsf{BPP}$ | $\Pr[M \text{ accepts}] \ge 2/3$ | $\Pr[M \text{ accepts}] \le 1/3$ |
| $\mathsf{ZPP}$ | always accepts, expected polynomial time | always rejects, expected polynomial time |

**Basic containments.**

$$\mathsf{P} \subseteq \mathsf{ZPP} \subseteq \mathsf{RP} \subseteq \mathsf{BPP}, \qquad \mathsf{RP}\subseteq\mathsf{NP}, \qquad \mathsf{coRP}\subseteq\mathsf{coNP}.$$

$\mathsf{RP}\subseteq\mathsf{NP}$ is worth seeing: if $\Pr_r[M(x,r) \text{ accepts}] \ge 1/2 > 0$ then *some* $r$ works, and that $r$ is an NP certificate; conversely on a no-instance no $r$ works. **The random string is a certificate you happened to guess rather than one you were handed.**

$\mathsf{BPP}$ has no known relationship to $\mathsf{NP}$ in either direction. It is closed under complement by definition (swap the roles of the two rows), which $\mathsf{RP}$ is not.

**Theorem ([ZPP is the intersection](../reference.md#zpp-equals-rp-cap-corp)).** $\mathsf{ZPP} = \mathsf{RP}\cap\mathsf{coRP}$.

*($\subseteq$)* Let $M$ be a zero-error machine with expected running time $T(n)$. Run it for $2T(n)$ steps. By **Markov's inequality**, $\Pr[\text{running time} > 2T] \le T/(2T) = 1/2$. If it finishes, output its (always correct) answer; if it times out, output "reject". That errs only by rejecting yes-instances, and only with probability at most $1/2$: an $\mathsf{RP}$ machine. Outputting "accept" on timeout instead gives a $\mathsf{coRP}$ machine.

*($\supseteq$)* Let $M_1$ be an $\mathsf{RP}$ machine and $M_2$ a $\mathsf{coRP}$ machine for $A$. Repeat: run $M_1$; if it accepts, output **accept** (certain, since $\mathsf{RP}$ has no false positives). Run $M_2$; if it rejects, output **reject** (certain). Otherwise loop.

On a yes-instance, $M_1$ accepts with probability $\ge 1/2$ per round, so a round is conclusive with probability $\ge 1/2$; the same holds on a no-instance via $M_2$. The number of rounds is geometric with parameter $\ge 1/2$, so its expectation is at most $\mathbf{2}$ and the expected running time is polynomial. Every answer given is correct. $\blacksquare$

**One caution about the model.** $\mathsf{ZPP}$'s bound is on *expected* time, so a $\mathsf{ZPP}$ machine has no worst-case bound at all — it may run arbitrarily long on an unlucky coin sequence. That is why $\mathsf{ZPP}$ is defined with expectation and the others with probability; mixing the two conventions is the commonest error in stating these definitions.

## Picture

![Four rows, each labelled with a class name and showing two boxes: what the machine does on a no-instance and on a yes-instance. RP must reject no-instances always and accepts yes-instances with probability at least one half. coRP is the mirror image. BPP is correct with probability at least two thirds on both sides. ZPP is always correct on both. A right-hand column labels the rows one-sided, one-sided, two-sided, and zero error with random running time.](assets/04-01-fig1.svg)

Read the table by columns rather than rows, because that is where the structure is. **A class is a pair of promises, one per kind of instance**, and the four classes are simply the four sensible combinations: certain on the left, certain on the right, certain on neither, certain on both.

The fourth row looks like it should be impossible — always correct, yet still randomized. The resolution is that $\mathsf{ZPP}$'s randomness is spent on *time* rather than on correctness. The machine keeps trying until it is sure, and the coin decides how long that takes.

Two readings follow from the picture directly. The first two rows are mirror images, so $\mathsf{coRP} = \{\overline A : A \in \mathsf{RP}\}$, and running both gives certainty whichever way the answer falls — which is the $\mathsf{ZPP} = \mathsf{RP}\cap\mathsf{coRP}$ theorem read off the diagram. The third row is symmetric in the two columns, so $\mathsf{BPP}$ is closed under complement, unlike the first two.

**And notice what the figure cannot show: where NP would go.** An NP machine accepts if *any* random string works, which is not a probability statement at all — it is compatible with an acceptance probability of $2^{-n}$. That is why $\mathsf{RP} \subseteq \mathsf{NP}$ and why nobody expects the reverse.

## Worked examples

**Example 1 (mechanical): classify four algorithms.** For each, name the class from the error profile.

*(a) Miller–Rabin primality.* On a composite $N$, at least $3/4$ of bases are witnesses, so the test reports "composite" with probability $\ge 3/4$; on a prime it always reports "prime". Taking the language to be COMPOSITE: yes-instances (composites) are accepted with probability $\ge 3/4$, no-instances (primes) never. **$\mathsf{RP}$** for COMPOSITE, equivalently **$\mathsf{coRP}$** for PRIMES. (Both are moot since AKS put primality in $\mathsf{P}$, but the algorithm is still what everyone runs.)

*(b) Polynomial identity testing.* Given an arithmetic circuit, is it the zero polynomial? Evaluate at a random point: if nonzero, the polynomial is certainly not zero; if zero, it probably is, by Schwartz–Zippel. Taking the language to be NONZERO: **$\mathsf{RP}$**. This is the flagship $\mathsf{RP}$ problem with no known deterministic polynomial algorithm.

*(c) Randomized quicksort.* Always sorts correctly; expected $O(n\log n)$ comparisons, worst case $O(n^2)$. **Las Vegas**, so the decision version sits in $\mathsf{ZPP}$.

*(d) An algorithm that samples 1000 random inputs and reports the majority behaviour.* Wrong in both directions with small probability. **$\mathsf{BPP}$**, and nothing stronger — no amount of repetition makes either side certain.

**Example 2 (why you'd care): the direction of the error is the engineering fact.** You are choosing a primality test for key generation in an RSA implementation ([`cryptography` 3.3](../../cryptography/lessons/03-03-rsa-encryption.md)).

Miller–Rabin is in $\mathsf{coRP}$ for PRIMES: it never calls a prime composite, and it may call a composite prime with probability at most $4^{-k}$ after $k$ rounds. Now ask what each failure mode costs.

- A prime misreported as composite: you discard a perfectly good candidate and draw another. Cost: a few milliseconds. **This failure cannot happen anyway.**
- A composite misreported as prime: you build an RSA modulus from a composite "prime". The scheme silently breaks — decryption fails, or worse, the modulus factors easily. Cost: catastrophic.

So the *only* failure mode is the expensive one, and the engineering response is to set $k$ so that $4^{-k}$ is below the probability of a hardware fault — typically $k = 40$, giving $4^{-40} \approx 10^{-24}$.

**Had the algorithm been in $\mathsf{BPP}$ rather than $\mathsf{coRP}$, the analysis would be identical**, because the dangerous side is the one with error either way. The value of knowing the class is that it tells you which side to bound. And had it been $\mathsf{RP}$ for PRIMES — certain on "prime", probable on "composite" — you could have run it once and been done.

## Watch out

- **You might think** $\mathsf{RP}$'s $1/2$ and $\mathsf{BPP}$'s $2/3$ are meaningful thresholds — **but actually** any constant bounded away from the trivial value gives the same class, by amplification. For $\mathsf{BPP}$ the requirement is $1/2 + 1/\mathrm{poly}(n)$; the one thing you cannot allow is success probability exactly $1/2$, which is a coin flip and defines no language.
- **You might think** $\mathsf{ZPP}$ machines have a polynomial worst-case running time — **but actually** the bound is on the *expectation*, and an unlucky coin sequence can run arbitrarily long. Defining $\mathsf{ZPP}$ by a worst-case bound would just give $\mathsf{P}$.
- **You might think** nondeterminism and randomness are variants of each other — **but actually** they differ in the acceptance rule: NP accepts if *some* branch accepts, $\mathsf{BPP}$ if *most* do. An NP machine with one accepting branch out of $2^n$ is a yes-instance; a $\mathsf{BPP}$ machine in the same position is a no-instance.
- **You might think** $\mathsf{BPP} \subseteq \mathsf{NP}$, since a randomized algorithm's successful run is a certificate — **but actually** no: the run that accepts proves nothing, because on a no-instance a third of the runs accept too. There is no known containment either way, and [4.2](04-02-amplification-and-placing-bpp.md)'s $\mathsf{BPP}\subseteq\Sigma_2^p$ is the best placement anyone has.
- **You might think** a randomized algorithm needs genuine randomness — **but actually** the widespread belief $\mathsf{P} = \mathsf{BPP}$ says it does not, and in practice a cryptographic pseudorandom generator is indistinguishable from random to any polynomial-time observer, which is exactly the condition the classes need.

## One-liner

> Four classes, because "might be wrong" has four shapes — wrong only on yes, only on no, on either, or never but slowly — and repetition can shrink an error without ever changing its shape.

## Problems

**P1 (🟢)** Classify each into $\mathsf{RP}$, $\mathsf{coRP}$, $\mathsf{BPP}$ or $\mathsf{ZPP}$ for the stated language, naming the side on which the algorithm is certain.

(a) Language NONZERO-POLYNOMIAL; algorithm: evaluate at a random point and accept iff the value is nonzero.
(b) Language COMPOSITE; algorithm: Miller–Rabin, accepting when it finds a witness.
(c) Language $L$; algorithm: runs two independent subroutines and accepts iff both accept, where each subroutine is correct with probability $0.9$ on every input.
(d) Language SORTED-CORRECTLY; algorithm: randomized quicksort, then verify the output is sorted and accept.

**P2 (🟡)** Prove $\mathsf{RP} \subseteq \mathsf{NP}$, and then explain in two sentences why the same argument does **not** show $\mathsf{BPP}\subseteq\mathsf{NP}$, referring to what the certificate would have to prove.

**P3 (🔴, optional)** This is Boss problem 4. Prove $\mathsf{ZPP} = \mathsf{RP}\cap\mathsf{coRP}$. (a) For $\subseteq$, give the timeout construction and state exactly which inequality bounds the timeout probability. (b) For $\supseteq$, give the Las Vegas procedure, state the distribution of the number of rounds, and compute its expectation. (c) State the probability that the procedure needs more than 20 rounds.

<details>
<summary>Solutions</summary>

**P1**

(a) **$\mathsf{RP}$**, certain on **yes**. A nonzero evaluation proves the polynomial is not identically zero; a zero evaluation is inconclusive, since a nonzero polynomial can vanish at the sampled point. So no-instances (the zero polynomial) are never accepted.

(b) **$\mathsf{RP}$**, certain on **yes**. A Fermat or strong-pseudoprime witness proves compositeness outright; failing to find one proves nothing. Primes are never accepted.

(c) **$\mathsf{BPP}$**, certain on neither. Each subroutine can err both ways, and the AND of two such answers can be wrong in either direction. Note the success probability of the combination is $0.81$ on inputs where both must accept, still above $2/3$, so the classification holds — and repetition cannot improve the *shape*.

(d) **$\mathsf{ZPP}$**, certain on **both**. The verification step makes the output always correct; only the running time is random. (This is the general recipe for turning a Las Vegas algorithm into a zero-error decision procedure: add a deterministic check.)

**P2**

*Proof that $\mathsf{RP}\subseteq\mathsf{NP}$.* Let $A \in \mathsf{RP}$ via $M(x,r)$ with $|r| = p(|x|)$. Define an NP verifier $V(x, r)$ that simply runs $M(x,r)$ and answers as it does. Then:

- If $x \in A$: $\Pr_r[M(x,r)\text{ accepts}] \ge 1/2 > 0$, so **at least one** $r$ makes $M$ accept, and that $r$ is a valid certificate of length $p(|x|)$.
- If $x \notin A$: $\Pr_r[M(x,r)\text{ accepts}] = 0$, so **no** $r$ makes $M$ accept and no certificate exists.

$V$ runs in polynomial time and the certificate is polynomially bounded, so $A \in \mathsf{NP}$. $\blacksquare$

*Why it fails for $\mathsf{BPP}$.* The argument used the fact that a no-instance has acceptance probability exactly **zero**, so the existence of a single accepting $r$ is conclusive; for $\mathsf{BPP}$ a no-instance may have acceptance probability up to $1/3$, so exhibiting one accepting $r$ proves nothing at all. A certificate would have to establish a statement about the *fraction* of accepting $r$, and counting or estimating a fraction is not something a single short string does — which is exactly why the best known placement goes through $\Sigma_2^p$ rather than NP.

**P3**

(a) *$\mathsf{ZPP}\subseteq\mathsf{RP}\cap\mathsf{coRP}$.* Let $M$ be zero-error with expected running time $T(n)$. Define $M'$: simulate $M$ for $2T(n)$ steps; if $M$ halts, output its answer; otherwise output **reject**.

The bounding inequality is **Markov's inequality**: for a nonnegative random variable $X$ with mean $\mu$, $\Pr[X \ge a] \le \mu/a$. With $X$ the running time, $\mu = T$ and $a = 2T$: $\Pr[\text{timeout}] \le 1/2$.

On a no-instance $M'$ rejects either way (correct answer, or timeout), so it never accepts wrongly. On a yes-instance it accepts unless it times out, with probability $\ge 1/2$. That is $\mathsf{RP}$. Replacing the timeout output with **accept** gives $\mathsf{coRP}$ by the mirror argument. Hence $\mathsf{ZPP}\subseteq\mathsf{RP}\cap\mathsf{coRP}$.

(b) *$\mathsf{RP}\cap\mathsf{coRP}\subseteq\mathsf{ZPP}$.* Let $M_1 \in \mathsf{RP}$ and $M_2 \in \mathsf{coRP}$ both decide $A$. Loop:

1. Run $M_1$ on $x$. If it **accepts**, halt and output *accept* — correct, since $\mathsf{RP}$ never accepts a no-instance.
2. Run $M_2$ on $x$. If it **rejects**, halt and output *reject* — correct, since $\mathsf{coRP}$ never rejects a yes-instance.
3. Otherwise repeat.

Every output is correct, so the error is zero.

*Distribution of the round count.* On a yes-instance, step 1 halts with probability $\ge 1/2$ each round; on a no-instance, step 2 halts with probability $\ge 1/2$. Either way the rounds are independent trials with success probability $p \ge 1/2$, so the round count is **geometric** with parameter $p$, and

$$\mathbb{E}[\text{rounds}] = \frac1p \le \mathbf{2}.$$

Each round costs polynomial time, so the expected total is polynomial. $\blacksquare$

(c) $\Pr[\text{more than } k \text{ rounds}] = (1-p)^k \le 2^{-k}$. At $k = 20$ that is $2^{-20} = 1/1{,}048{,}576 \approx \mathbf{9.5\times10^{-7}}$ — about one run in a million.

</details>

## Flashback

**From Lesson 2.5 (L, NL & NL-completeness):** Consider the 2CNF formula $(x_1 \vee x_2) \wedge (\lnot x_1 \vee \lnot x_2) \wedge (x_1 \vee \lnot x_2) \wedge (\lnot x_1 \vee x_2)$. (a) List the eight implications of its implication graph. (b) Determine whether some variable has paths in both directions between $x_i$ and $\lnot x_i$. (c) State whether the formula is satisfiable, and give the space a nondeterministic machine needs to perform this test.

<details>
<summary>Solution</summary>

(a) Each clause $(a\vee b)$ gives $\lnot a \to b$ and $\lnot b \to a$:

| clause | implications |
|---|---|
| $(x_1\vee x_2)$ | $\lnot x_1 \to x_2$, $\lnot x_2 \to x_1$ |
| $(\lnot x_1 \vee \lnot x_2)$ | $x_1 \to \lnot x_2$, $x_2 \to \lnot x_1$ |
| $(x_1 \vee \lnot x_2)$ | $\lnot x_1 \to \lnot x_2$, $x_2 \to x_1$ |
| $(\lnot x_1 \vee x_2)$ | $x_1 \to x_2$, $\lnot x_2 \to \lnot x_1$ |

(b) **Yes, for both variables.** From $x_1$: $x_1 \to x_2 \to \lnot x_1$, so $\lnot x_1$ is reachable from $x_1$. From $\lnot x_1$: $\lnot x_1 \to x_2 \to x_1$, so $x_1$ is reachable from $\lnot x_1$. Both directions close, so $x_1$ is forced to be both true and false.

(c) **Unsatisfiable** — confirmed directly, since the four clauses assert $x_1 \vee x_2$, $\lnot(x_1\wedge x_2)$, $x_2 \Rightarrow x_1$ and $x_1 \Rightarrow x_2$, and the last two force $x_1 = x_2$ while the first two forbid it.

The test needs **$O(\log n)$ space** on a nondeterministic machine: hold the current literal and a step counter, guess successor edges, and give up after $2n$ steps. That the *complement* test is also in $\mathsf{NL}$ is [Lesson 2.6](02-06-immerman-szelepcsenyi-and-the-class-map.md)'s Immerman–Szelepcsényi theorem.

</details>

## Connections

- **Backward:** the probabilistic machine is [1.2](01-02-np-ntime-and-nondeterministic-time.md)'s nondeterministic machine with the acceptance rule changed from "some branch" to "most branches", and that single change is what separates $\mathsf{RP}$ from $\mathsf{NP}$. The obstruction theorem of [3.3](03-03-todas-theorem-and-approximate-counting.md) leaned on $\mathsf{RP}$ before it was defined; this lesson supplies the definition.
- **Forward:** [4.2](04-02-amplification-and-placing-bpp.md) turns the arbitrary constants into anything you like and places $\mathsf{BPP}$ inside $\Sigma_2^p$ and $\mathsf{P/poly}$. [4.3](04-03-interactive-proofs.md) adds a second ingredient — an adversarial prover — to the randomness defined here, and the combination is far more powerful than either alone.
- **Sideways:** the one-sided/two-sided distinction is exactly the false-positive versus false-negative asymmetry that governs medical screening and spam filtering, where the right threshold depends on the relative cost of the two mistakes rather than on total accuracy; and Markov's inequality doing the work in the ZPP proof is the same tail bound that underlies the concentration arguments in [`probability-theory` 2.5](../../probability-theory/lessons/02-05-lp-spaces-inequalities.md).
