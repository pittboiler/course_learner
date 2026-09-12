# Complexity Theory · Lesson 1.2: NP, NTIME & nondeterministic time

> ⏱ ~15 min · Module 1: Time, hierarchy & NP-completeness · Builds on: [1.1 (time, the model & P)](01-01-time-the-model-and-p.md), [`algorithms` 4.1 (P, NP & reductions)](../../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md) · Unlocks: [1.4 (Cook–Levin)](01-04-cook-levin-computation-is-satisfiability.md)

## Why this matters

You already know what NP is. [`algorithms` 4.1](../../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md) and [`theory-of-computation` 4.4](../../theory-of-computation/lessons/04-04-a-first-look-at-p-vs-np.md) both define it, both give the verifier picture and the guessing-machine picture, and both tell you the two are the same class.

Neither proves it, and the proof is not a formality. It is a **resource accounting argument**, and the accounting is where the content is: it tells you exactly how long a certificate may be (and why that bound is forced rather than chosen), exactly what a nondeterministic step costs when you simulate it, and therefore exactly how big the gap between NP and P could possibly be. That last number — $2^{O(n^k)}$, not worse — is the reason the P versus NP question is a question about a *bounded* gap rather than an unbounded one, and it is what makes Module 1's hierarchy theorem bite.

This lesson is the one that turns NP from a picture into a machine with a clock on it.

## The idea

A nondeterministic machine is not a machine. It is a *tree*.

Run a nondeterministic TM on input $w$ and, instead of a single line of configurations, you get a branching structure: at each step the transition function may offer several moves, and the machine's computation splits. The machine accepts $w$ if **some** branch reaches an accepting state. Nothing in this is physical — you cannot build it — and that is fine, because it is a definition of a class, not a proposal for hardware.

Two facts about that tree do all the work.

**Its depth is the running time, and its width is the price.** If the machine runs for $t$ steps with at most $b$ choices per step, the tree has depth $t$ and at most $b^t$ leaves. Walking the whole tree deterministically therefore costs about $b^t$, which is exponential in $t$ — and *only* exponential in $t$. That ceiling is a theorem, not a concession.

**A branch is a string.** Write down which choice the machine made at each step and you have a sequence of at most $t$ symbols. That sequence is all a deterministic machine needs to replay the branch. So "there exists an accepting branch" and "there exists a short string that a deterministic machine accepts alongside $w$" are the same sentence written twice — which is precisely the verifier definition.

That correspondence is the equivalence, and it is exact enough to carry the time bounds across. Guess-and-check is not an analogy for nondeterminism. It is nondeterminism, transcribed.

One consequence deserves its own line, because it is easy to state carelessly. The certificate must be polynomially long, and you do not have to *require* that: a polynomial-time verifier cannot read more than polynomially many symbols, so anything longer is unread and might as well be truncated. **The length bound on certificates is forced by the time bound on the verifier.**

## The formal version

**Definition ([NTIME](../reference.md#ntime)).** A nondeterministic TM $N$ *decides* $A$ in time $t(n)$ if every branch on every input of length $n$ halts within $t(n)$ steps, and $w \in A$ exactly when some branch accepts. Then

$$\mathrm{NTIME}(t(n)) = \{\, A : \text{some nondeterministic TM decides } A \text{ in } O(t(n)) \text{ steps} \,\}, \qquad \mathsf{NP} = \bigcup_{k \ge 1} \mathrm{NTIME}(n^k).$$

*In words: NP is what a guessing machine decides in polynomial time, where "decides" means the whole tree is shallow, not just the lucky branch.*

**Definition ([verifier](../reference.md#verifier-and-certificate)).** $V$ is a polynomial-time verifier for $A$ if $V$ is a deterministic polynomial-time TM and

$$w \in A \iff \exists\, c,\ |c| \le p(|w|),\ V(\langle w, c \rangle) = \text{accept}$$

for some polynomial $p$. The string $c$ is a **certificate**.

**Theorem ([the two definitions agree](../reference.md#np-two-definitions)).** $A$ has a polynomial-time verifier $\iff$ $A \in \mathsf{NP}$.

*Proof.*

($\Leftarrow$) Let $N$ decide $A$ nondeterministically in time $n^k$, with at most $b$ choices per step. Define $V(\langle w, c\rangle)$: read $c$ as a sequence of at most $n^k$ symbols over $\{1, \dots, b\}$ and simulate $N$ on $w$, taking the $c_i$-th available choice at step $i$; accept iff that branch accepts. Each simulated step costs $O(1)$ bookkeeping, so $V$ runs in time $O(n^k)$, and $|c| \le n^k \lceil \log_2 b\rceil$ bits. Some branch accepts iff some such $c$ makes $V$ accept. ✓

($\Rightarrow$) Let $V$ be a verifier running in time $n^{k}$, with certificates of length at most $p(n)$. Define $N$ on $w$: nondeterministically write down a string $c$ of length $p(|w|)$, one symbol per step, then run $V$ on $\langle w, c\rangle$. The guessing phase takes $p(n)$ steps and the checking phase $O((n + p(n))^{k})$, both polynomial, and every branch halts. Some branch accepts iff some certificate works. $\blacksquare$

**Corollary ([certificate length is forced](../reference.md#certificate-length-bound)).** If $V$ runs in time $n^k$ then certificates longer than $n^k$ are pointless: $V$ cannot move its head past position $n^k$, so truncating $c$ to its first $n^k$ symbols changes nothing.

**Theorem ([nondeterminism costs an exponential, and no more](../reference.md#nondeterministic-simulation)).**

$$\mathrm{NTIME}(t(n)) \subseteq \mathrm{TIME}\big(2^{O(t(n))}\big) \quad \text{for } t(n) \ge n.$$

*Proof.* Search the computation tree breadth-first. It has depth $t(n)$ and branching at most $b$, hence at most $\frac{b^{t+1}-1}{b-1} = 2^{O(t)}$ nodes, and reconstructing a node's configuration costs $O(t)$ work. Total $O(t)\cdot 2^{O(t)} = 2^{O(t)}$. Breadth-first, not depth-first, because a depth-first search could descend forever if branches had different lengths; here they do not, but the habit is the right one. $\blacksquare$

**Corollary ([where NP sits](../reference.md#p-np-exp)).** With $\mathsf{EXP} = \bigcup_k \mathrm{TIME}(2^{n^k})$,

$$\mathsf{P} \subseteq \mathsf{NP} \subseteq \mathsf{EXP}.$$

And [Lesson 1.3](01-03-the-hierarchy-theorems.md) will prove $\mathsf{P} \subsetneq \mathsf{EXP}$ outright — from which **at least one of the two containments above is strict**, though no one can say which. That is the most anyone has proved about P versus NP in fifty years, and it is a good measure of how little that is.

## Picture

![A binary computation tree four levels deep, drawn as circles joined by lines. All nodes and edges are grey except one root-to-leaf path drawn thick in coral, whose leaf is annotated accept. Level labels on the right read step 0 through step 3, and a note below states that the choices along the coral path are one, zero, one.](assets/01-02-fig1.svg)

The tree is the machine and the coral path is the certificate — those are not two objects, they are one object described twice. Reading down the coral path gives the choice sequence $1, 0, 1$; handing those three bits to a deterministic machine along with $w$ lets it walk the same path without any searching, which is the ($\Leftarrow$) direction of the theorem in miniature.

Now count. The tree has depth 3 and 8 leaves here, but the exponent is the point: at depth $t$ there are $2^t$ leaves, so **finding the coral path unaided costs exponentially more than checking it once shown.** The whole P versus NP question is whether that gap is real or whether some cleverness collapses it, and the figure shows why nobody expects an easy answer — there is no structure in a bare tree to exploit.

Note what the figure does *not* show: any branch that runs longer than the others. The definition of $\mathrm{NTIME}$ requires **every** branch to halt within the bound, which is why the tree is a clean complete binary tree of fixed depth. Drop that requirement and the class changes.

## Worked examples

**Example 1 (mechanical): accounting for one nondeterministic machine.** $N$ decides $L$ nondeterministically in $4n$ steps with at most 2 choices per step. Give (a) a certificate length, (b) the deterministic simulation cost, (c) the classes $L$ belongs to.

(a) One bit per step, $4n$ steps: certificates of **$4n$ bits** suffice. At $n = 10$ that is 40 bits.

(b) The tree has depth $4n$ and at most $2^{4n+1} - 1$ nodes; at $n = 10$ that is $2^{41} - 1 \approx 2.2 \times 10^{12}$ nodes. Each node costs $O(n)$ to reconstruct, so the total is about $8.8\times10^{13}$ elementary steps at $n = 10$ — roughly a day at $10^9$ steps per second, for an input of length **ten**.

(c) $L \in \mathrm{NTIME}(n) \subseteq \mathsf{NP}$, and $L \in \mathrm{TIME}(2^{O(n)}) \subseteq \mathsf{EXP}$. Both memberships are immediate from the definitions; neither tells you whether $L \in \mathsf{P}$.

Part (b) is the lesson. **A linear-time nondeterministic machine is already hopeless to simulate**, which is why "just try all the branches" is never an answer.

**Example 2 (why you'd care): the certificate bound decides a modelling question.** Someone proposes that the following language is in NP:

$$\text{ALL-SAT} = \{\, \langle \varphi \rangle : \text{every assignment satisfies } \varphi \,\}.$$

The natural certificate is "the list of all satisfying assignments". Is that legal?

No, and the corollary says why in one line: there are $2^n$ assignments, so the list has length at least $2^n$, and a polynomial-time verifier cannot read it. A certificate is not allowed to be a transcript of the search; it must be a *short* witness. And ALL-SAT has no obvious short witness — a **no**-instance has one (a falsifying assignment, checkable instantly), but a yes-instance does not.

That asymmetry is not a failure of imagination. ALL-SAT is the complement of satisfiability, it is the canonical coNP-complete problem, and whether it is in NP is exactly the open question [Lesson 2.1](02-01-conp-and-the-shape-of-np.md) is about. **The certificate-length bound is what turns a vague "that feels too big" into a proof that the proposed certificate is illegal.**

## Watch out

- **You might think** a nondeterministic machine only needs its accepting branch to run in time $t$ — **but actually** $\mathrm{NTIME}$ requires **every** branch on every input to halt within $t$. Relax that and you are defining a recognizability class, not a complexity class, and the tree is no longer of bounded depth.
- **You might think** the polynomial bound on certificate length is an extra condition in the definition of NP — **but actually** it is forced: a verifier running in time $n^k$ physically cannot read past symbol $n^k$. Stating it separately is convenience, not content.
- **You might think** $\mathsf{NP} \subseteq \mathsf{EXP}$ is a weak result, so a better simulation might give $\mathsf{NP} \subseteq \mathsf{P}$ — **but actually** the tree search is the *only* general simulation known, and fifty years of failing to improve it is what the P versus NP question has become. The exponential ceiling is cheap to prove; every attempt to lower it has failed.
- **You might think** "nondeterministic" suggests randomness — **but actually** the two are unrelated. A nondeterministic machine accepts if *any* branch accepts, with no probability attached; a probabilistic machine accepts if *most* branches do. [Lesson 4.1](04-01-randomness-as-a-resource.md) makes that difference precise, and it changes the class completely.

## One-liner

> A nondeterministic computation is a tree of depth $t$ and width $2^t$; the certificate is one path written down, and the entire P versus NP question is whether finding that path is really harder than reading it.

## Problems

**P1 (🟢)** A nondeterministic Turing machine $N$ decides $L$ in $3n$ steps with at most 4 choices at each step. (a) Give a sufficient certificate length in bits. (b) Give the number of leaves in $N$'s computation tree on an input of length 8, as a power of 2. (c) Name the smallest of $\mathsf{P}$, $\mathsf{NP}$, $\mathsf{EXP}$ that $L$ is guaranteed to be in, and say in one clause why the one below it is not guaranteed.

**P2 (🟡)** For each language, say whether it is in NP as far as this lesson's tools can establish, and if so give the certificate and its length in terms of the input size $n$. If not, name the specific obstacle.

(a) $\{\langle G, k\rangle : G$ has a clique of size $k\}$.
(b) $\{\langle G \rangle : G$ has **no** clique of size 5$\}$.
(c) $\{\langle M, w, 1^t\rangle : $ the nondeterministic TM $M$ accepts $w$ within $t$ steps$\}$.
(d) $\{\langle \varphi \rangle : \varphi$ has exactly one satisfying assignment$\}$.

**P3 (🔴, optional)** Prove that $\mathsf{NP} \subseteq \mathsf{EXP}$ directly from the verifier definition, rather than from the tree-search theorem. Then say in two sentences exactly which step of your proof would have to be improved to show $\mathsf{NP} \subseteq \mathsf{P}$, and why that step is not obviously wasteful.

<details>
<summary>Solutions</summary>

**P1**

(a) Four choices need 2 bits each, and there are $3n$ steps, so **$6n$ bits** suffice.

(b) The tree has depth $3n$ and branching 4, so at $n = 8$ it has $4^{24}$ leaves $= (2^2)^{24} = \mathbf{2^{48}}$.

(c) $\mathsf{NP}$. It is guaranteed because $L \in \mathrm{NTIME}(n) \subseteq \mathsf{NP}$ by definition. $\mathsf{P}$ is **not** guaranteed because the only general way to remove the nondeterminism is to search the tree, which costs $2^{\Theta(n)}$ — and whether a cleverer deterministic algorithm exists is precisely the open question.

**P2**

(a) **In NP.** Certificate: the list of $k$ vertices forming the clique, which is $O(n \log n)$ bits for a graph on $n$ vertices. The verifier checks all $\binom{k}{2}$ pairs are edges, in polynomial time.

(b) **In NP — in fact in $\mathsf{P}$, and the certificate is empty.** The clique size 5 is a *constant*, not part of the input, so a machine can simply test all $\binom{n}{5} = O(n^5)$ five-element subsets and report whether any is a clique. That is polynomial time, and $\mathsf{P} \subseteq \mathsf{NP}$.

This is the trap in the question. The word "no" makes it look like a complement problem with no short witness, and against part (a) it looks strictly harder. Neither reading survives noticing where $k$ lives: in (a) the size varies with the input and brute force costs $\binom{n}{k}$, which is not polynomial; here it is pinned at 5 and the same brute force is quintic. **Always check whether a parameter is input or constant before reasoning about a problem's class.**

(c) **In NP.** Certificate: the sequence of nondeterministic choices along an accepting branch, at most $t$ symbols. The input includes $1^t$, so $t \le n$, and the certificate is therefore polynomially long in the input and the verifier's simulation of $t$ steps is polynomial. **The unary $1^t$ is doing all the work** — with $t$ written in binary the certificate would be exponential in the input length and the argument collapses.

(d) **Not established.** A satisfying assignment certifies existence but not uniqueness, and certifying uniqueness needs a proof that all $2^n - 1$ others fail, which no short witness obviously provides. (This language is the canonical problem for the class $\mathsf{US}$, and Valiant–Vazirani in [Lesson 3.3](03-03-todas-theorem-and-approximate-counting.md) shows it is hard in a precise sense.)

**P3**

*Accept criterion:* the proof must enumerate all certificates of the bounded length and run the verifier on each, with the count $2^{p(n)}$ and the per-run cost stated explicitly.

*Proof.* Let $A \in \mathsf{NP}$ with verifier $V$ running in time $n^k$ and certificate bound $p(n) = n^k$ (legitimate by the corollary). On input $w$ of length $n$, the deterministic machine enumerates every string $c \in \{0,1\}^{\le n^k}$ — there are $2^{n^k + 1} - 1$ of them — and runs $V(\langle w, c\rangle)$ on each, accepting if any run accepts. Each run costs $O((n + n^k)^k) = O(n^{k^2})$. Total time is $O\!\left(n^{k^2} \cdot 2^{n^k+1}\right) = 2^{O(n^k)}$, so $A \in \mathrm{TIME}(2^{n^{k'}}) \subseteq \mathsf{EXP}$. $\blacksquare$

*What would have to improve.* The wasteful step is the enumeration: the algorithm tries all $2^{n^k}$ certificates while treating $V$ as a black box, so it learns nothing from a rejected certificate about which to try next. To get $\mathsf{NP} \subseteq \mathsf{P}$ you would need to exploit the *internal structure* of $V$ to search the certificate space in polynomial time.

That is not obviously wasteful in the sense of being obviously improvable, and this is the honest part: for a general $V$ there is no structure to exploit, and [Lesson 5.6](05-06-relativization-natural-proofs-algebrization.md) makes that precise — with $V$ replaced by an oracle, the enumeration is provably optimal. So any proof that $\mathsf{P} = \mathsf{NP}$ must use something about $V$ that a black box does not have, and any proof that $\mathsf{P} \ne \mathsf{NP}$ must do the same. That is the relativization barrier, stated a module early.

</details>

## Connections

- **Backward:** [1.1](01-01-time-the-model-and-p.md) argued that classes must be robust to model changes; this lesson adds a model change of a different kind — allowing the machine to guess — and measures its cost exactly, at one exponential.
- **Forward:** [1.4](01-04-cook-levin-computation-is-satisfiability.md) takes the verifier of this lesson and encodes its entire computation as a Boolean formula, which is how NP gets its first complete problem. [2.1](02-01-conp-and-the-shape-of-np.md) takes the definition's built-in asymmetry between yes and no seriously and gets coNP out of it.
- **Sideways:** the tree here is the same object as the nondeterministic automaton's computation tree in [`theory-of-computation` 1.2](../../theory-of-computation/lessons/01-02-nfa-and-the-subset-construction.md), with one crucial difference: there the subset construction removes the nondeterminism at an exponential cost in *states*, paid once at compile time and therefore free at run time. Here the exponential is paid per input, which is why the same trick that makes NFAs harmless makes NP hard.
