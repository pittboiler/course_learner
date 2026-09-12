# Complexity Theory · Lesson 4.5: Probabilistically checkable proofs

> ⏱ ~15 min · Module 4: Randomized & interactive computation · Builds on: [4.3 (interactive proofs)](04-03-interactive-proofs.md), [4.4 (arithmetization and sumcheck)](04-04-arithmetization-sumcheck-and-ip-equals-pspace.md) · Unlocks: [5.5 (hardness of approximation)](05-05-hardness-of-approximation.md)

## Why this matters

Here is a claim that should sound false. **Every theorem with a proof of length $\ell$ can be rewritten, in a fixed mechanical format of length polynomial in $\ell$, such that a checker who reads three randomly chosen bits of it will catch any flaw at least half the time.**

Not "reads a summary". Not "reads a random page". Three bits.

That is the PCP theorem, proved in 1992 by Arora, Lund, Motwani, Sudan and Szegedy, and it is the deepest theorem in this course. It says that NP has a proof format in which errors cannot hide — a wrong proof is not wrong in one subtle place, it is wrong nearly everywhere, by construction.

The consequence that made it famous is not about proofs at all. **The PCP theorem is equivalent to a statement about approximation**: that it is NP-hard to distinguish a satisfiable 3CNF formula from one where only 90 percent of clauses can be satisfied. That reformulation is what turned inapproximability from a collection of ad hoc arguments into a systematic theory, and it is [Lesson 5.5](05-05-hardness-of-approximation.md)'s entire subject.

## The idea

**The model.** A **PCP verifier** gets an input $x$ and *oracle access* to a proof string $\pi$ — it may read any bit of $\pi$ it likes, but each read is counted. It tosses $r(n)$ random coins, uses them to decide which $q(n)$ positions to read, applies a polynomial-time test to what it sees, and accepts or rejects. The class $\mathsf{PCP}(r,q)$ contains languages with a verifier satisfying:

- **Completeness:** $x \in A \Rightarrow$ some $\pi$ makes the verifier accept with probability 1.
- **Soundness:** $x \notin A \Rightarrow$ every $\pi$ is rejected with probability at least $1/2$.

Two sanity checks fix the scale. $\mathsf{PCP}(0, \mathrm{poly}(n)) = \mathsf{NP}$: no randomness, polynomially many queries — the verifier reads the whole certificate, which is exactly NP. And $\mathsf{PCP}(O(\log n), 0) = \mathsf{P}$: randomness but no proof, and the randomness can be enumerated since there are only polynomially many coin sequences.

**The theorem sits between them.** $\mathsf{PCP}(O(\log n), O(1)) = \mathsf{NP}$. Logarithmic randomness, **constant** queries. Since $O(\log n)$ coins give $\mathrm{poly}(n)$ coin sequences and each reads $O(1)$ positions, the proof has polynomial length — it is a rewritten certificate, not a magical object.

**Why it is possible at all.** The obstruction to reading few bits is that a wrong proof might be wrong in one place. Read three random bits of a million-bit proof with one bad bit and you will essentially never find it.

So the proof format must **spread the error out**. That is what the encoding does: it is built so that a proof of a false statement disagrees with every valid proof in a *constant fraction* of positions. Then three random bits find a problem with constant probability, and the verifier's test is local.

This is an error-correcting code idea, and not by analogy. Low-degree polynomial encodings are exactly the tool — the same Schwartz–Zippel property that gave [Lesson 4.4](04-04-arithmetization-sumcheck-and-ip-equals-pspace.md) its soundness, now used to force a wrong proof to be wrong in many places at once.

**The gap reformulation.** Define the promise problem GAP-3SAT$_{1,1-\varepsilon}$: given a 3CNF formula promised to be either satisfiable, or such that no assignment satisfies more than a $(1-\varepsilon)$ fraction of clauses, decide which.

The PCP theorem is **equivalent** to: there is a constant $\varepsilon > 0$ for which GAP-3SAT$_{1,1-\varepsilon}$ is NP-hard.

Sketch of one direction. A PCP verifier reading $q$ bits with $r$ coins defines, for each coin sequence, a constraint on $q$ proof bits — rewrite it as a constant number of 3-clauses over variables representing the proof bits. A proof accepted always satisfies all clauses; a proof rejected half the time falsifies at least one clause in half the coin sequences, hence a constant fraction of all clauses. **Verifier acceptance probability becomes fraction of clauses satisfied**, and the soundness gap becomes an approximation gap.

## The formal version

**Definition ([PCP verifier](../reference.md#pcp-verifier)).** $A \in \mathsf{PCP}(r(n), q(n))$ if there is a polynomial-time verifier $V$ that, on input $x$ with $|x| = n$, tosses $O(r(n))$ coins, makes $O(q(n))$ oracle queries to a proof string $\pi$, and satisfies

$$x\in A \Rightarrow \exists\pi:\ \Pr[V^{\pi}(x) = 1] = 1, \qquad x\notin A \Rightarrow \forall\pi:\ \Pr[V^{\pi}(x) = 1] \le \tfrac12.$$

**Proposition ([the two endpoints](../reference.md#pcp-endpoints)).** $\mathsf{PCP}(0,\mathrm{poly}) = \mathsf{NP}$ and $\mathsf{PCP}(O(\log n), 0) = \mathsf{P}$.

*Proof of the second.* With no queries the verifier's answer depends only on $x$ and its coins. Since there are $2^{O(\log n)} = \mathrm{poly}(n)$ coin sequences, a deterministic machine enumerates them all, computes the exact acceptance probability, and compares with $1/2$. $\blacksquare$

**Proposition ([proof length](../reference.md#pcp-proof-length)).** A $\mathsf{PCP}(r,q)$ verifier reads at most $q\,2^{r}$ distinct positions over all coin sequences, so without loss of generality the proof has length at most $q\,2^{r}$. For $r = O(\log n)$ and $q = O(1)$ that is $\mathrm{poly}(n)$.

**Theorem ([the PCP theorem](../reference.md#pcp-theorem)).** $\mathsf{NP} = \mathsf{PCP}(O(\log n), O(1))$.

The containment $\supseteq$ is easy: a $\mathsf{PCP}(O(\log n),O(1))$ verifier is simulated by an NP machine that guesses the whole (polynomial-length) proof and checks all $\mathrm{poly}(n)$ coin sequences. The containment $\subseteq$ is the theorem, and its proof is long — it is the one result in this course whose interior we genuinely skip.

**Theorem ([the gap version](../reference.md#gap-3sat)).** There is a constant $\varepsilon > 0$ such that the following promise problem is NP-hard: given a 3CNF $\varphi$, distinguish *"$\varphi$ is satisfiable"* from *"no assignment satisfies more than $(1-\varepsilon)m$ of the $m$ clauses"*.

**Corollary.** For that $\varepsilon$, no polynomial-time algorithm approximates MAX-3SAT within a factor better than $1-\varepsilon$ unless $\mathsf{P} = \mathsf{NP}$ — because such an algorithm would distinguish the two cases of the promise. [Lesson 5.5](05-05-hardness-of-approximation.md) sharpens $\varepsilon$ all the way to Håstad's optimal $1/8$.

**Sharpened parameters.** Håstad's 3-query PCP achieves completeness $1-\delta$ and soundness $1/2 + \delta$ with **exactly 3 queries** and a test that is a single parity check on the three bits. That is where "three bits" in this lesson's opening comes from.

## Picture

![A long horizontal bar divided into fifty small cells representing the proof string, with three cells highlighted in coral. Three arrows run from those cells down to a blue box labelled verifier, which uses order log n random bits and reads three positions before applying one local test. Below, two boxes: on the left, x is in the language, some proof makes the verifier accept always; on the right, x is not in the language, every proof is rejected with probability at least one half.](assets/04-05-fig1.svg)

The bar is the proof and the three coral cells are everything the verifier ever sees on a given run. The randomness chooses which three, and that is the only role randomness plays.

**The two boxes at the bottom are the theorem.** The left one is unremarkable — of course a true statement has a proof that passes every check. The right one is the content: *every* proof of a false statement, including ones designed by an adversary who knows the verifier's code, fails at least half the time under a three-bit spot check.

Think about what that forces on the encoding. A dishonest proof cannot be *almost* right, because almost-right would survive a three-bit sample. So the format must guarantee that any string not encoding a genuine certificate differs from every genuine one in a constant fraction of positions. **The proof format is an error-correcting code, and the verifier is running a randomized distance test.**

One detail the picture makes concrete: the proof's length is bounded by the number of coin sequences times the queries per sequence, $q\,2^r$. With $r = O(\log n)$ and $q = 3$ that is polynomial — so this is a *rewriting* of an ordinary NP certificate, at polynomial cost, into a format that is robust to local inspection.

## Worked examples

**Example 1 (mechanical): read the parameters.** A verifier uses $r = 4\log_2 n$ coins and $q = 5$ queries, on inputs of length $n = 1000$.

(a) *Coin sequences:* $2^r = n^4 = 10^{12}$.

(b) *Proof length:* at most $q\,2^r = 5\times10^{12}$ bits. That is polynomial in $n$ — and enormous in absolute terms, which is worth noticing. **The PCP theorem is a statement about polynomial blow-up, and the polynomial is not small.**

(c) *Verifier cost per run:* 5 bit-reads plus a polynomial-time test on 5 bits, so constant work after the coins are tossed. Crucially, the verifier's running time is *not* bounded by 5 — it must compute which positions to read, which takes polynomial time in $n$.

(d) *Amplification:* repeating the check $k$ times independently drops soundness error to $2^{-k}$ while using $kr$ coins and $kq$ queries. To get error $2^{-30}$ you read $150$ bits — still constant in $n$.

**Example 2 (why you'd care): from a proof format to an approximation barrier.** Why does a statement about proof-checking say anything about optimization?

Take the PCP verifier for 3SAT with $r = O(\log n)$ coins and $q = O(1)$ queries. Introduce a Boolean variable $y_i$ for each bit of the proof. For each coin sequence $\rho$ — there are $\mathrm{poly}(n)$ of them — the verifier's test is a function of the $q$ bits it reads, so it is a constraint on $q$ variables, expressible as a constant number of 3-clauses. Collect them all into one 3CNF formula $\Psi$ with $m = \mathrm{poly}(n)$ clauses.

Now read off both cases.

- **$\varphi$ satisfiable.** A correct proof exists and is accepted on every coin sequence, so the corresponding assignment to the $y_i$ satisfies **every** clause of $\Psi$. $\Psi$ is satisfiable.
- **$\varphi$ unsatisfiable.** Every proof is rejected on at least half the coin sequences. Each rejected coin sequence contributes at least one falsified clause, and each coin sequence contributed only $O(1)$ clauses, so **at least a constant fraction $\varepsilon$ of $\Psi$'s clauses are falsified** by every assignment.

So a polynomial-time algorithm that approximates MAX-3SAT within $1-\varepsilon$ would tell the two cases apart, and hence decide 3SAT.

**The translation is exact: acceptance probability becomes fraction of clauses satisfied.** That is the whole trick, and it is worth stating as a slogan because the same move recurs throughout inapproximability — a soundness gap in a proof system *is* a hardness gap for an optimization problem.

Before 1992, proving a problem hard to approximate meant finding a bespoke gap-producing reduction for it, and only a handful were known. Afterwards, every such result reduces from GAP-3SAT, and the field became systematic.

## Watch out

- **You might think** the verifier does only constant work — **but actually** only its *queries* are constant. It still spends polynomial time deciding which positions to read and running its test's bookkeeping. The constant is a bound on proof access, not on computation.
- **You might think** the proof is short — **but actually** it is polynomially long, and typically a large polynomial. The theorem says you read constantly many bits *of a long proof*, not that the proof is small.
- **You might think** the completeness condition could be relaxed to $2/3$ without consequence — **but actually** perfect completeness matters for some applications, and Håstad's optimal 3-query result deliberately gives it up ($1-\delta$ rather than 1) to buy better soundness. The trade is real.
- **You might think** the gap version follows trivially from the PCP theorem — **but actually** the two are *equivalent*, and the reverse direction (gap hardness implies the PCP characterization) is a genuine construction too. Neither is a restatement of the other.
- **You might think** three random bits catching a flaw means the proof has few possible flaws — **but actually** it means the opposite: **the encoding guarantees a flawed proof is flawed in a constant fraction of positions**, so flaws are abundant rather than rare. The theorem works by making errors impossible to localize.

## One-liner

> Rewrite a proof so that being wrong anywhere makes it wrong nearly everywhere, and then three random bits suffice — and the same gap, read as an optimization statement, is where inapproximability comes from.

## Problems

**P1 (🟢)** A PCP verifier uses $r = 3\log_2 n$ coins and $q = 4$ queries on inputs of length $n = 256$. (a) Give the number of coin sequences. (b) Give the bound on proof length in bits. (c) Give the number of queries needed to push the soundness error below $2^{-40}$ by independent repetition, and say whether that number depends on $n$.

**P2 (🟡)** For each parameter setting, name the resulting class or say what is known, with a one-clause reason.

(a) $\mathsf{PCP}(0, O(1))$.
(b) $\mathsf{PCP}(O(\log n), \mathrm{poly}(n))$.
(c) $\mathsf{PCP}(\mathrm{poly}(n), O(1))$.
(d) $\mathsf{PCP}(O(\log n), O(1))$.

**P3 (🔴, optional)** Show that the PCP theorem implies the gap version. (a) Describe the 3CNF formula $\Psi$ built from the verifier, giving its variables and the number of clauses in terms of $r$ and $q$. (b) Prove the completeness direction: $\varphi$ satisfiable implies $\Psi$ satisfiable. (c) Prove the soundness direction, and give the constant $\varepsilon$ in terms of the number of clauses contributed per coin sequence.

<details>
<summary>Solutions</summary>

**P1**

(a) $2^r = 2^{3\log_2 256} = 256^3 = \mathbf{16{,}777{,}216}$ coin sequences.

(b) At most $q\,2^r = 4 \times 16{,}777{,}216 = \mathbf{67{,}108{,}864}$ bits, about 8 megabytes. Polynomial in $n$ — specifically $4n^3$ — and, as the lesson notes, not small.

(c) Each independent repetition multiplies the soundness error by $1/2$, so $k$ repetitions give $2^{-k}$ and $k = \mathbf{40}$ suffices, reading $40\times4 = \mathbf{160}$ bits.

That number **does not depend on $n$**, which is the point: 160 bits of an 8-megabyte proof, on inputs of any length, with confidence $1 - 2^{-40}$.

**P2**

(a) $\mathsf{PCP}(0, O(1)) = \mathsf{P}$. With no randomness the verifier is deterministic and reads a fixed constant number of positions, so a machine can try all $2^{O(1)}$ possible values of those bits itself — a constant amount of extra work — and decide without a proof.

(b) $\mathsf{PCP}(O(\log n), \mathrm{poly}(n)) = \mathsf{NP}$. The proof has polynomial length, so an NP machine guesses the whole thing and checks all $\mathrm{poly}(n)$ coin sequences deterministically. This is the easy containment, and the queries being polynomial makes it uninteresting.

(c) $\mathsf{PCP}(\mathrm{poly}(n), O(1)) = \mathsf{NEXP}$, by Babai, Fortnow and Lund. With polynomially many coins the proof may be exponentially long, and constant queries into an exponentially long proof characterizes nondeterministic exponential time — the result that historically came *first* and was then scaled down to give the PCP theorem.

(d) $\mathsf{PCP}(O(\log n), O(1)) = \mathsf{NP}$ — the PCP theorem itself.

**P3**

(a) *Variables.* One Boolean variable $y_i$ per bit of the proof string. By the proof-length bound there are at most $q\,2^{r}$ of them, so $\mathrm{poly}(n)$ when $r = O(\log n)$, $q = O(1)$.

*Clauses.* For each coin sequence $\rho$ — there are $2^{r} = \mathrm{poly}(n)$ — the verifier reads $q$ positions $i_1(\rho),\dots,i_q(\rho)$ and applies a predicate $T_\rho$ to those bits. Any predicate on $q$ Boolean variables is expressible as a CNF with at most $2^{q}$ clauses of width $q$, and each width-$q$ clause splits into at most $q-2$ clauses of width 3 using fresh variables ([Lesson 1.4](01-04-cook-levin-computation-is-satisfiability.md)). So each coin sequence contributes at most $c = 2^{q}(q-2)$ clauses, a **constant**, and

$$m = |\Psi| \le c\,2^{r} = \mathrm{poly}(n).$$

(b) *Completeness.* If $\varphi$ is satisfiable, the PCP theorem's completeness gives a proof $\pi$ accepted with probability 1, that is, on **every** coin sequence $\rho$. Set $y_i = \pi_i$. Then for each $\rho$ the predicate $T_\rho$ holds on the bits read, so all the clauses encoding $T_\rho$ are satisfied. Since this holds for every $\rho$, all $m$ clauses of $\Psi$ are satisfied, plus the auxiliary variables from clause-splitting can be set consistently. **$\Psi$ is satisfiable.** $\blacksquare$

(c) *Soundness.* Suppose $\varphi$ is unsatisfiable, and take any assignment to the $y_i$. Reading it as a proof string $\pi$, PCP soundness says the verifier rejects on at least half the coin sequences — at least $2^{r}/2$ of them.

For each rejecting $\rho$, the predicate $T_\rho$ fails on the bits read, so at least one of the clauses encoding $T_\rho$ is falsified. Distinct coin sequences contribute disjoint clause groups, so the number of falsified clauses is at least $2^{r}/2$.

As a fraction of the total,

$$\frac{\text{falsified}}{m} \;\ge\; \frac{2^{r}/2}{c\,2^{r}} \;=\; \frac{1}{2c} \;=\; \varepsilon,$$

with $c = 2^{q}(q-2)$ the constant number of clauses per coin sequence. So **no assignment satisfies more than a $(1-\varepsilon)$ fraction**, with $\varepsilon = 1/(2c)$ a constant depending only on $q$. $\blacksquare$

Note how small this $\varepsilon$ is — for $q = 3$ it is $1/16$ — and that it is nonetheless a constant, which is all the argument needs. Håstad's work replaces this crude accounting with a tailored 3-query test and pushes the honest constant to $1/8$, which [Lesson 5.5](05-05-hardness-of-approximation.md) shows is optimal.

</details>

## Flashback

**From Lesson 4.3 (interactive proofs):** A verifier and prover run the graph non-isomorphism protocol, but with a modification: the verifier picks $i$ uniformly from $\{1,2,3\}$ among **three** graphs $G_1, G_2, G_3$ and sends a random shuffle of $G_i$, and the prover must name $i$. (a) State the completeness probability when the three graphs are pairwise non-isomorphic. (b) State the soundness probability when all three are isomorphic to each other. (c) Give the number of rounds needed for soundness error below $10^{-9}$, and compare it with the two-graph version.

<details>
<summary>Solution</summary>

(a) **1.** If the three are pairwise non-isomorphic, a shuffle of $G_i$ is isomorphic to exactly one of them, so an unbounded prover identifies $i$ with certainty every round.

(b) **$1/3$.** If all three are isomorphic, the distribution of the shuffled graph is identical whichever $i$ was chosen — the same bijection argument as in the two-graph case, composed with an isomorphism — so the posterior on $i$ is uniform on three values and no prover beats $1/3$.

(c) Soundness error after $k$ rounds is $3^{-k}$. Solve $3^{-k}\le10^{-9}$: $k \ge 9\log_3 10 = 9 \times 2.096 = 18.86$, so $k = \mathbf{19}$.

The two-graph version needs $2^{-k}\le10^{-9}$, so $k \ge 9\log_2 10 = 29.9$, that is $k = \mathbf{30}$ rounds. **The three-graph version is cheaper by about a third**, because each round extracts $\log_2 3 \approx 1.58$ bits of evidence rather than 1. The general pattern: a challenge with more possible answers amplifies faster per round, which is the same reason a large field makes [Lesson 4.4](04-04-arithmetization-sumcheck-and-ip-equals-pspace.md)'s sumcheck sound in a single pass.

</details>

## Connections

- **Backward:** the low-degree encoding that makes local checking possible is [4.4](04-04-arithmetization-sumcheck-and-ip-equals-pspace.md)'s arithmetization pushed much further, and the completeness-and-soundness framing is [4.3](04-03-interactive-proofs.md)'s with the conversation compiled into a static string.
- **Forward:** [5.5](05-05-hardness-of-approximation.md) is this lesson's gap version cashed out — Håstad's optimal constants, the $7/8$ threshold for MAX-3SAT, and a first look at the unique games conjecture. [5.4](05-04-approximation-as-a-class-apx-and-max-3sat.md) supplies the algorithmic side that the gap result meets exactly.
- **Sideways:** "encode so that any error is spread out" is the defining property of a code with large minimum distance, which is [`communications` 4.3](../../communications/lessons/04-03-block-codes.md)'s subject — there the point is that noise cannot destroy the message, here that a liar cannot hide the lie, and the same distance parameter governs both. Locally testable and locally decodable codes are the direct descendants of this theorem.
