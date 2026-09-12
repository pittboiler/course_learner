# Complexity Theory · Lesson 4.3: Interactive proofs

> ⏱ ~15 min · Module 4: Randomized & interactive computation · Builds on: [4.1 (randomness as a resource)](04-01-randomness-as-a-resource.md), [3.3 (Toda and approximate counting)](03-03-todas-theorem-and-approximate-counting.md) · Unlocks: [4.4 (sumcheck and IP = PSPACE)](04-04-arithmetization-sumcheck-and-ip-equals-pspace.md), [4.5 (PCP)](04-05-probabilistically-checkable-proofs.md)

## Why this matters

A certificate is a monologue. Someone hands you a string, you check it, you are done. That is NP, and [Lesson 2.1](02-01-conp-and-the-shape-of-np.md) showed its limits: there is no known short string proving a formula unsatisfiable, or proving two graphs non-isomorphic.

This lesson changes the format from a monologue to a **conversation**. A verifier with a coin may ask questions, and an all-powerful prover must answer them before knowing what comes next. That single change turns out to be enormously more powerful, and the reason is worth stating up front: **a prover who does not know your questions in advance cannot prepare for all of them.**

The first payoff is graph non-isomorphism, which has an interactive proof and no known certificate. The second, in [Lesson 4.4](04-04-arithmetization-sumcheck-and-ip-equals-pspace.md), is the theorem that stunned the field in 1990: $\mathsf{IP} = \mathsf{PSPACE}$. Interaction with randomness buys you everything polynomial space can decide — vastly more than NP, and nobody saw it coming.

Interactive proofs are also the direct ancestor of deployed technology. Zero-knowledge proofs, the succinct arguments behind verifiable computation, and the proof systems in modern blockchains are all this model with extra requirements bolted on.

## The idea

**The model.** A verifier $V$ runs in polynomial time and has private random coins. A prover $P$ has unlimited computational power and wants to convince $V$ that $x \in A$. They exchange polynomially many messages, and $V$ finally accepts or rejects. The requirements are:

- **Completeness:** if $x \in A$, some prover makes $V$ accept with probability at least $2/3$.
- **Soundness:** if $x \notin A$, **every** prover makes $V$ accept with probability at most $1/3$.

Soundness is quantified over *all* provers, including malicious ones that deviate arbitrarily. That is the only reason the model is meaningful: the prover is not trusted, it is tested.

$\mathsf{IP}$ is the class of languages with such a protocol. Setting the number of messages to one recovers NP (with randomness), so $\mathsf{NP}\subseteq\mathsf{IP}$, and $\mathsf{BPP}\subseteq\mathsf{IP}$ trivially by ignoring the prover.

**Why interaction helps: graph non-isomorphism.** Given $G_1$ and $G_2$, you want to be convinced they are *not* isomorphic. No short certificate is known — you would have to rule out all $n!$ permutations.

The protocol is three lines. The verifier picks $i \in \{1,2\}$ at random and a random permutation $\pi$, and sends $H = \pi(G_i)$ — a shuffled copy of one of the two graphs, with which one kept secret. The prover replies with a guess $j$. The verifier accepts iff $j = i$.

- If $G_1 \not\cong G_2$: the prover (being all-powerful) can test $H$ against both graphs and always identify the source. It answers correctly every time. **Verifier accepts with probability 1.**
- If $G_1 \cong G_2$: then $\pi(G_1)$ and $\pi(G_2)$ have *identical* distributions, so $H$ carries no information about $i$. No prover, however powerful, beats a coin flip. **Verifier accepts with probability exactly $1/2$.**

Repeat $k$ times independently to push the soundness error to $2^{-k}$.

**What just happened.** The proof is not an object; it is a *demonstrated ability*. The prover convinces you by repeatedly passing a test it could not pass if the claim were false. The randomness is essential — a deterministic verifier's challenge is predictable, so the prover could prepare an answer in advance, and the protocol would degenerate to a certificate.

**Private versus public coins.** In the protocol above, the verifier's coins are *private*: the prover must not see $i$. That looks essential, and it is one of the surprises of the subject that it is not. Goldwasser and Sipser proved that any private-coin protocol can be simulated by a public-coin one — where the verifier simply broadcasts its random bits — at the cost of two extra rounds. Public-coin interactive proofs are called **Arthur–Merlin** games, and the equivalence means the two models define the same classes.

## The formal version

**Definition ([interactive proof system](../reference.md#interactive-proof)).** An **interactive proof** for $A$ is a pair $(P, V)$ where $V$ is a probabilistic polynomial-time machine and $P$ is an unbounded function, exchanging $\mathrm{poly}(|x|)$ messages, with

$$x\in A \Rightarrow \Pr[\,(P,V)(x) = \text{accept}\,] \ge \tfrac23, \qquad x\notin A \Rightarrow \forall P^*\ \Pr[\,(P^*,V)(x) = \text{accept}\,] \le \tfrac13.$$

$\mathsf{IP}$ is the class of languages with an interactive proof.

**Basic facts.**

- $\mathsf{NP}\subseteq\mathsf{IP}$: one message, the certificate; the verifier ignores its coins.
- $\mathsf{BPP}\subseteq\mathsf{IP}$: zero messages.
- $\mathsf{IP}\subseteq\mathsf{PSPACE}$: a polynomial-space machine computes, by recursion over the message tree, the maximum over prover strategies of the acceptance probability. [Lesson 4.4](04-04-arithmetization-sumcheck-and-ip-equals-pspace.md) proves the converse.
- The constants $2/3$ and $1/3$ amplify as in [4.2](04-02-amplification-and-placing-bpp.md); in fact completeness can always be made **perfect** (probability 1).

**Theorem ([graph non-isomorphism is in IP](../reference.md#graph-non-isomorphism-in-ip)).** $\overline{\text{GI}} \in \mathsf{IP}$, by the protocol above.

*Completeness.* If the graphs are non-isomorphic, $H$ is isomorphic to exactly one of them, so the prover's answer is determined and correct. Acceptance probability 1.

*Soundness.* Suppose $G_1 \cong G_2$ via some $\tau$. For any fixed graph $H$ in the support, the number of pairs $(1,\pi)$ producing $H$ equals the number of pairs $(2,\pi')$ producing it — compose with $\tau$ to biject them. Since $i$ and $\pi$ are uniform, the posterior on $i$ given $H$ is uniform. So any prover's guess is correct with probability exactly $1/2$, whatever it computes. $\blacksquare$

**Definition ([Arthur-Merlin](../reference.md#arthur-merlin)).** An $\mathsf{AM}$ protocol is a two-message public-coin protocol: Arthur (the verifier) sends random bits, Merlin (the prover) replies, Arthur decides deterministically.

**Theorem ([Goldwasser-Sipser](../reference.md#private-vs-public-coins)).** Private coins add no power: any $k$-round interactive proof has a $(k+2)$-round public-coin one. Consequently $\overline{\text{GI}}\in\mathsf{AM}$, and therefore $\text{GI}\in\mathsf{coAM}$.

**Corollary ([why GI is probably not NP-complete](../reference.md#gi-not-np-complete)).** If an NP-complete problem were in $\mathsf{coAM}$, the polynomial hierarchy would collapse to $\Sigma_2^p$ (Boppana–Håstad–Zachos). Since $\text{GI}\in\mathsf{coAM}$, graph isomorphism being NP-complete would collapse PH — which is [Lesson 2.2](02-02-the-polynomial-hierarchy.md)'s promised argument, now with its missing ingredient supplied.

## Picture

![A message sequence chart with two vertical lines, a blue one on the left labelled Verifier and a coral one on the right labelled Prover. The verifier's line is annotated: picks i in one two at random and a random permutation pi. An arrow runs left to right labelled H equals pi of G sub i. The prover's line is annotated: decides which one H came from. An arrow runs right to left labelled a guess j in one two. The verifier's line is then annotated accepts iff j equals i.](assets/04-03-fig1.svg)

Two messages and one secret. The secret is $i$, and everything turns on the prover not knowing it when it answers.

**Read the two cases as a question about distributions.** If the graphs are non-isomorphic, the distribution of $H$ given $i = 1$ and the distribution given $i = 2$ have *disjoint supports* — a shuffle of $G_1$ is never a shuffle of $G_2$ — so an unbounded prover can tell them apart perfectly. If the graphs are isomorphic, the two distributions are *identical*, so no computation whatsoever distinguishes them. There is no middle ground and no cleverness available; the gap is information-theoretic.

That is the general shape of every soundness proof in this module. **You do not argue that a cheating prover would have to work hard; you argue that the information it needs is not present in what it received.** Compare NP, where soundness comes from there being no valid certificate to send, and note the difference: here the certificate would exist, the prover simply cannot know which one to send.

One more thing the figure makes visible. Reverse the arrows — let the prover speak first — and the protocol collapses. A prover who commits to $j$ before seeing $H$ is guessing, and a prover who sees $H$ before the verifier commits to $i$ learns nothing either. **The ordering of the messages is the protocol.**

## Worked examples

**Example 1 (mechanical): compute the error of a repeated protocol.** The graph non-isomorphism protocol is run $k$ times independently, and the verifier accepts only if all $k$ rounds succeed.

*Completeness.* On non-isomorphic graphs the prover is correct every round, so acceptance probability stays at $1$ for every $k$. **Perfect completeness**, which is worth noting: the verifier never rejects a true claim.

*Soundness.* On isomorphic graphs each round is correct with probability exactly $1/2$, independently, so

$$\Pr[\text{all } k \text{ rounds pass}] = 2^{-k}.$$

| $k$ | soundness error |
|---|---|
| 1 | $0.5$ |
| 10 | $9.8\times10^{-4}$ |
| 30 | $9.3\times10^{-10}$ |
| 100 | $7.9\times10^{-31}$ |

At $k = 100$ the chance a cheating prover survives is below the chance of a hardware fault, and the whole conversation is 200 messages.

Contrast this with [Lesson 4.2](04-02-amplification-and-placing-bpp.md)'s $\mathsf{BPP}$ amplification, which needed **1121** repetitions for error $2^{-100}$. Here 100 suffice, because the per-round failure probability is exactly $1/2$ and the events are independent, with no majority vote needed — **a conjunctive test amplifies far faster than a majority vote.**

**Example 2 (why you'd care): what interaction proves that a certificate cannot.** Ask what the prover is actually demonstrating in the non-isomorphism protocol.

It is not exhibiting an object. There is no "proof of non-isomorphism" being transmitted — the messages are a shuffled graph and a single bit. Over $k$ rounds the prover sends $k$ bits total, which is far less than any conceivable certificate.

What it demonstrates is **the ability to perform a computation it could only perform if the claim were true.** Distinguishing a shuffle of $G_1$ from a shuffle of $G_2$ is possible exactly when they are non-isomorphic, and the verifier tests that ability rather than auditing a document.

This reframing is what makes the model so useful in practice.

- **Zero knowledge.** Notice the verifier learns nothing except the answer — it already knew $i$, so the transcript tells it nothing it did not generate itself. Formalizing "the verifier learns nothing" gives zero-knowledge proofs, and this protocol is the standard first example. See [`cryptography` 4.4](../../cryptography/lessons/04-04-zero-knowledge-proofs.md).
- **Verifiable computation.** If you outsource a computation, you want to check the result without redoing it. A certificate would be as long as the computation; an interactive proof can be far shorter, which is [4.4](04-04-arithmetization-sumcheck-and-ip-equals-pspace.md)'s sumcheck protocol and the basis of modern succinct-argument systems.

**The complexity-theoretic and the engineering readings are again the same statement**, as with Cook–Levin: interaction plus randomness lets a weak party test a strong one, and that is a theorem about classes and a design pattern at once.

## Watch out

- **You might think** soundness need only hold against provers that follow the protocol — **but actually** it is quantified over **all** strategies, including ones that ignore the protocol entirely. A proof system sound only against honest provers proves nothing, since a cheating prover is the only threat.
- **You might think** the verifier's private coins are essential — **but actually** Goldwasser–Sipser shows public coins are just as powerful, at a cost of two rounds. The intuition that hiding the challenge is what makes the protocol work is *locally* right and *globally* wrong.
- **You might think** more rounds always help — **but actually** for constant-round public-coin protocols, $\mathsf{AM}[k] = \mathsf{AM}[2]$ for every constant $k \ge 2$: any constant number of rounds collapses to two. Growth in power requires a **polynomial** number of rounds, which is what gets you to PSPACE.
- **You might think** $\mathsf{IP}$'s power comes from the prover being unbounded — **but actually** the prover in NP is effectively unbounded too, since nothing constrains how the certificate was produced. The new ingredient is the verifier's randomness and the ordering of messages, not the prover's strength.
- **You might think** an interactive proof gives the verifier a transcript it can show to a third party — **but actually** it usually does not: the transcript of the non-isomorphism protocol could have been fabricated by the verifier alone, which is precisely why the protocol is zero-knowledge and precisely why it convinces nobody else.

## One-liner

> A certificate is a document you audit; an interactive proof is a test the prover can only pass if the claim is true, and the verifier's unpredictability is what makes passing impossible to fake.

## Problems

**P1 (🟢)** The graph non-isomorphism protocol is run $k$ times, the verifier accepting only if every round succeeds. (a) Give the completeness and soundness probabilities as functions of $k$. (b) Give the smallest $k$ making the soundness error below $10^{-6}$. (c) Give the total number of bits the prover sends across those $k$ rounds.

**P2 (🟡)** For each proposed protocol, say whether it satisfies completeness and soundness for the stated language, and if not, name which condition fails and give the cheating strategy.

(a) Language $\overline{\text{GI}}$. Verifier sends $G_1$ and $G_2$; prover replies "not isomorphic"; verifier accepts.
(b) Language $\overline{\text{GI}}$. Verifier picks $i$ at random, sends $H = \pi(G_i)$ **together with $i$**; prover replies $j$; verifier accepts iff $j = i$.
(c) Language SAT. Verifier sends $\varphi$; prover replies with an assignment; verifier accepts iff it satisfies $\varphi$.
(d) Language UNSAT. Verifier sends $\varphi$; prover replies "unsatisfiable"; verifier picks a random assignment and accepts iff it fails to satisfy $\varphi$.

**P3 (🔴, optional)** (a) Prove the soundness of the non-isomorphism protocol carefully: show that when $G_1\cong G_2$, the posterior distribution of $i$ given $H$ is uniform. Name the bijection you use. (b) Explain in two sentences why this argument would break if the verifier chose $\pi$ from a small set of permutations rather than uniformly from all $n!$. (c) State what the argument shows about a prover with **unbounded** power, and why that is the strongest possible form of soundness.

<details>
<summary>Solutions</summary>

**P1**

(a) **Completeness: 1**, for every $k$ — on non-isomorphic graphs the prover identifies the source correctly in every round, so all $k$ rounds pass with certainty. **Soundness: $2^{-k}$** — on isomorphic graphs each round passes with probability exactly $1/2$, independently.

(b) Solve $2^{-k} \le 10^{-6}$: $k \ge 6\log_2 10 = 19.93$, so $k = \mathbf{20}$, giving error $2^{-20} \approx 9.5\times10^{-7}$.

(c) The prover sends one bit per round (the guess $j \in \{1,2\}$), so **20 bits** in total. That is the entire "proof" of a statement with no known short certificate.

**P2**

(a) **Soundness fails.** The prover simply says "not isomorphic" whatever the truth, and the verifier accepts. A cheating prover succeeds with probability 1 on every no-instance. There is no test at all.

(b) **Soundness fails.** Revealing $i$ destroys the secret the protocol depends on: the prover reads $i$ off the message and replies $j = i$, succeeding with probability 1 whether or not the graphs are isomorphic. **This is the precise sense in which the verifier's privacy is doing the work** — and note it is the privacy of *this* protocol, not of interactive proofs in general, which Goldwasser–Sipser shows can be dispensed with by redesigning the protocol.

(c) **Both hold**, trivially. This is just NP with the certificate sent as a message: completeness because a satisfiable formula has an assignment to send, soundness because an unsatisfiable one has none, with error 0 on both sides. It uses no randomness and no interaction, which is exactly the observation $\mathsf{NP}\subseteq\mathsf{IP}$.

(d) **Soundness fails**; completeness holds. On a genuinely unsatisfiable formula every assignment fails to satisfy it, so the verifier accepts with probability 1 — completeness is fine.

The cheating strategy needs no strategy. Take a *satisfiable* formula with exactly one satisfying assignment out of $2^n$. The verifier's random assignment misses it with probability $1 - 2^{-n}$, so the verifier accepts this false claim with probability nearly 1, against the required bound of $1/3$.

The deeper defect is that the prover's message is never used, so this is a $\mathsf{BPP}$ algorithm wearing a proof system's clothes — and a bad one, since sampling assignments cannot distinguish an unsatisfiable formula from a barely satisfiable one.

**P3**

(a) Suppose $G_1 \cong G_2$, and fix an isomorphism $\tau$ with $\tau(G_1) = G_2$. Fix any graph $H$ that the verifier could send.

Let $S_1 = \{\pi : \pi(G_1) = H\}$ and $S_2 = \{\pi' : \pi'(G_2) = H\}$. The bijection is $\pi \mapsto \pi\circ\tau^{-1}$: if $\pi(G_1) = H$ then $(\pi\circ\tau^{-1})(G_2) = \pi(\tau^{-1}(G_2)) = \pi(G_1) = H$, so it maps $S_1$ into $S_2$; composing with $\tau$ gives the inverse map, so it is a bijection and $|S_1| = |S_2|$.

Now $i$ is uniform on $\{1,2\}$ and $\pi$ uniform on $S_n$, independently, so

$$\Pr[i = 1 \mid H] = \frac{\tfrac12\cdot\frac{|S_1|}{n!}}{\tfrac12\cdot\frac{|S_1|}{n!} + \tfrac12\cdot\frac{|S_2|}{n!}} = \frac{|S_1|}{|S_1| + |S_2|} = \frac12.$$

The prover's reply is a function of $H$ alone (and its own randomness), so it is correct with probability exactly $1/2$. $\blacksquare$

(b) The bijection $\pi\mapsto\pi\circ\tau^{-1}$ maps the permutation set into itself only because that set is **closed under composition with $\tau^{-1}$** — which a small subset generally is not. With $\pi$ drawn from a restricted family, the distributions of $\pi(G_1)$ and $\pi(G_2)$ can differ even for isomorphic graphs, and a powerful prover could exploit the difference to guess $i$ better than half the time.

(c) The argument shows that a prover with **unbounded computational power** still succeeds with probability exactly $1/2$ — the bound is **information-theoretic**, not computational. Nothing is assumed about how hard the prover works or what problems it can solve; the information identifying $i$ is simply absent from the message it received.

That is the strongest possible form of soundness. A computational soundness guarantee ("no polynomial-time prover can cheat") rests on a hardness assumption that could turn out false; this one rests on nothing at all and cannot be broken by any advance in algorithms, hardware, or cryptanalysis.

</details>

## Flashback

**From Lesson 3.3 (Toda's theorem & approximate counting):** Consider the DNF formula $\Phi = (x_1\wedge x_2)\vee(\lnot x_1\wedge x_3)$ on three variables. (a) Give each term's cube size and $N = \sum_i|C_i|$. (b) Compute the exact number of satisfying assignments. (c) Give the Karp–Luby acceptance probability, and state whether an FPRAS for $\#\Phi$-style formulas contradicts any standard hypothesis.

<details>
<summary>Solution</summary>

(a) Each term fixes 2 of the 3 variables, so each cube has $2^{3-2} = 2$ points, and $N = 2 + 2 = \mathbf{4}$.

(b) The first term is satisfied by $110$ and $111$; the second by $001$ and $011$. These four are distinct — the terms disagree on $x_1$, so the cubes are **disjoint** — giving $\mathbf{4}$ satisfying assignments.

(c) $\Pr[\text{accept}] = |\bigcup C_i|/N = 4/4 = \mathbf{1}$. Every sample is accepted, because with disjoint cubes no point is ever covered by a lower-indexed term than the one it was drawn from. The guaranteed floor $1/m = 1/2$ is met with room to spare, and the estimator is exact after a single sample.

**No contradiction.** An FPRAS for $\#\text{DNF}$ implies only that DNF satisfiability is in $\mathsf{RP}$, and DNF satisfiability is already in $\mathsf{P}$ — one scan for a term containing a variable and its negation. The obstruction theorem bites only when the decision version is NP-hard, which is why $\#3\text{SAT}$ is ruled out and $\#\text{DNF}$ is not.

</details>

## Connections

- **Backward:** the verifier is [4.1](04-01-randomness-as-a-resource.md)'s probabilistic machine given a second input it does not control, and the amplification that makes $2^{-k}$ soundness usable is [4.2](04-02-amplification-and-placing-bpp.md)'s. The polynomial hierarchy that graph isomorphism would collapse is [2.2](02-02-the-polynomial-hierarchy.md)'s.
- **Forward:** [4.4](04-04-arithmetization-sumcheck-and-ip-equals-pspace.md) shows this model reaches all of PSPACE, by giving the prover algebraic claims to defend rather than graphs to identify. [4.5](04-05-probabilistically-checkable-proofs.md) removes the interaction again but keeps the randomness, and lands somewhere stranger still.
- **Sideways:** the "test an ability rather than audit a document" pattern is the simulation paradigm of [`cryptography` 4.4](../../cryptography/lessons/04-04-zero-knowledge-proofs.md), and the identical distribution argument used for soundness is exactly the indistinguishability argument underlying the one-time pad's perfect secrecy in [`cryptography` 1.2](../../cryptography/lessons/01-02-perfect-secrecy-and-the-one-time-pad.md) — in both cases the security is information-theoretic because the distinguishing information is genuinely absent.
