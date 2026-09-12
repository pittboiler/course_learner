# Complexity Theory · Lesson 2.3: Space as a resource & Savitch

> ⏱ ~15 min · Module 2: Space complexity & the polynomial hierarchy · Builds on: [1.1 (time, the model & P)](01-01-time-the-model-and-p.md), [1.3 (the hierarchy theorems)](01-03-the-hierarchy-theorems.md) · Unlocks: [2.4 (TQBF)](02-04-tqbf-and-pspace-completeness.md), [2.5 (L and NL)](02-05-l-nl-and-nl-completeness.md)

## Why this matters

Everything so far has measured time. Switching to space is not a change of units — it changes the answers, and it changes them in a direction that is genuinely surprising.

For time, nondeterminism appears to cost an exponential: the only general simulation searches the whole computation tree, and whether you can do better is the P versus NP question. For space, nondeterminism costs **a square**, and that is a theorem, not a conjecture. Savitch proved it in 1970 and it has never been improved or matched by a lower bound.

The reason for the difference is the single most useful intuition about space: **space is reusable and time is not.** You cannot un-spend a step, but you can overwrite a tape cell. That one asymmetry is why a space-bounded machine has only finitely many configurations, why its behaviour is a question about a *graph* rather than about a tree, and why a whole class of exponential searches collapses to polynomial space.

It also gives the course its second most important class. PSPACE is where games live — perfect play, adversarial search, quantified reasoning — and [Lesson 2.4](02-04-tqbf-and-pspace-completeness.md) makes that precise.

## The idea

**Measuring space needs one convention.** If you count the input tape, no machine can use less than $n$ space, and classes below linear would be empty. So the model is a machine with a **read-only input tape** plus a separate read-write work tape, and only the work tape is charged. That makes logarithmic space meaningful: $O(\log n)$ cells is enough to hold a constant number of pointers into the input, which is exactly the intended reading.

**The configuration graph.** A configuration is everything you would need to resume the machine: its state, the head positions, and the work-tape contents. If the machine uses $s$ cells of work tape on an input of length $n$, the number of distinct configurations is

$$|Q| \cdot n \cdot s \cdot |\Gamma|^{s} \;=\; 2^{O(s + \log n)},$$

finite and explicitly countable. Now put an edge from each configuration to each configuration it can move to in one step. A deterministic machine's graph has out-degree 1 — a path. A nondeterministic machine's graph has higher out-degree, and **the machine accepts iff there is a path from the start configuration to an accepting one.** Every question about a space-bounded machine has just become a reachability question on a finite graph.

Two consequences fall out immediately. A halting machine can never repeat a configuration, so it runs for fewer steps than it has configurations: $\mathrm{SPACE}(s) \subseteq \mathrm{TIME}(2^{O(s)})$. And a machine can be *made* to halt by counting steps up to the configuration bound, which costs $O(s)$ more space.

**Savitch's idea.** How do you test reachability without storing the path? The path may have $2^{O(s)}$ vertices and writing it down is hopeless.

Instead, ask a recursive question: *is $b$ reachable from $a$ in at most $2^i$ steps?* Answer it by trying every possible **midpoint** $m$, and checking whether $m$ is reachable from $a$ in $2^{i-1}$ steps **and** $b$ from $m$ in $2^{i-1}$ steps. The two halves run one after the other, so only one of them is in memory at a time.

The cost is the striking part. The recursion has depth $i = \log(\text{number of configurations}) = O(s)$, and each stack frame stores three configuration identifiers of $O(s)$ bits each. Depth times frame size is $O(s^2)$. **Trading time for space, and getting a square rather than an exponential** — the time blows up horribly, but nobody was counting time.

## The formal version

**Definition ([space classes](../reference.md#time-and-space-classes)).** With the read-only-input model,

$$\mathrm{SPACE}(s(n)) = \{A : \text{some deterministic TM decides } A \text{ using } O(s(n)) \text{ work cells}\},$$

and $\mathrm{NSPACE}(s(n))$ likewise with a nondeterministic machine, every branch respecting the bound. Then

$$\mathsf{L} = \mathrm{SPACE}(\log n), \qquad \mathsf{NL} = \mathrm{NSPACE}(\log n), \qquad \mathsf{PSPACE} = \bigcup_k \mathrm{SPACE}(n^k).$$

**Lemma ([configuration count](../reference.md#configuration-graph)).** A machine using $s(n) \ge \log n$ work cells has at most $|Q|\,n\,s(n)\,|\Gamma|^{s(n)} = 2^{O(s(n))}$ configurations on an input of length $n$.

**Theorem ([Savitch](../reference.md#savitchs-theorem)).** For space-constructible $s(n) \ge \log n$,

$$\mathrm{NSPACE}(s(n)) \subseteq \mathrm{SPACE}\big(s(n)^2\big).$$

*Proof.* Let $N$ be nondeterministic using $s$ cells, with configuration graph $G_N$ on $2^{d s}$ vertices for a constant $d$. Define

```
REACH(a, b, i):              # b reachable from a in <= 2^i steps?
    if i = 0:  return (a = b) or (a -> b is one legal move)
    for each configuration m:     # 2^{ds} of them, one at a time
        if REACH(a, m, i-1) and REACH(m, b, i-1):
            return true
    return false
```

Accept iff `REACH(start, acc, ds)` for the (single, by convention) accepting configuration.

*Space.* Recursion depth is $ds = O(s)$. Each frame holds $a$, $b$, $m$ and the counter $i$: $O(s)$ bits. The loop reuses one $m$ slot, and the two recursive calls are sequential, so only one branch of the tree is ever live. Total $O(s)\times O(s) = O(s^2)$. $\blacksquare$

**Corollary ([PSPACE = NPSPACE](../reference.md#pspace-equals-npspace)).** $\mathsf{PSPACE} = \mathsf{NPSPACE}$, since the square of a polynomial is a polynomial. **Nondeterminism is free at the polynomial-space level** — which is exactly what nobody can prove or disprove at the polynomial-time level.

**Corollary.** $\mathsf{NL} \subseteq \mathrm{SPACE}(\log^2 n)$, which with the space hierarchy theorem gives $\mathsf{NL} \subsetneq \mathsf{PSPACE}$ — one of the three unconditional separations from [Lesson 1.3](01-03-the-hierarchy-theorems.md).

**The inclusion chain ([time and space together](../reference.md#time-space-inclusions)).** For $s(n) \ge \log n$ and $t(n) \ge n$:

$$\mathrm{TIME}(t) \subseteq \mathrm{SPACE}(t), \qquad \mathrm{SPACE}(s) \subseteq \mathrm{TIME}\big(2^{O(s)}\big), \qquad \mathrm{NSPACE}(s) \subseteq \mathrm{TIME}\big(2^{O(s)}\big).$$

The first because a machine touches at most one new cell per step; the second and third because a halting machine cannot repeat a configuration. Chaining them gives $\mathsf{L} \subseteq \mathsf{NL} \subseteq \mathsf{P} \subseteq \mathsf{NP} \subseteq \mathsf{PSPACE} \subseteq \mathsf{EXP}$.

## Picture

![Four horizontal bars stacked vertically, each spanning the same width from a point labelled a to a point labelled b. The top bar is a single blue segment labelled length two to the k. The second is divided into two alternately coloured halves labelled two halves. The third into four quarters, the fourth into eight. Text below explains the recursion depth and the space accounting.](assets/02-03-fig1.svg)

Each row is the same journey from $a$ to $b$, cut one level finer. The recursion works downward: to certify the top bar you guess a midpoint and certify both halves of row two, and so on until row $k$, where each segment is a single move and can be checked directly against the transition function.

The accounting is what makes it a theorem, and it hangs on one word: **sequentially.** The two halves are not explored at the same time. The machine finishes the left half, forgets everything about it except the single bit "yes" or "no", then does the right half in the same cells. So the memory in use at any moment is one root-to-leaf path of this picture, not the whole picture.

Count that path: $k = O(s)$ frames, each holding three configuration names of $O(s)$ bits. The product is $O(s^2)$, and the entire content of Savitch's theorem is that this product is a square rather than the $2^{O(s)}$ you would pay to store the path itself.

**Time, meanwhile, is catastrophic.** Each level multiplies the work by the number of candidate midpoints, $2^{O(s)}$, over $O(s)$ levels. Savitch's algorithm is not something you would ever run; it is a proof that the space is available.

## Worked examples

**Example 1 (mechanical): count configurations and read off the bounds.** A machine has $|Q| = 6$ states and work-tape alphabet $|\Gamma| = 3$, and uses $s = 10$ work cells on inputs of length $n = 1024$.

$$\text{configurations} = |Q| \cdot n \cdot s \cdot |\Gamma|^{s} = 6 \cdot 1024 \cdot 10 \cdot 3^{10} = 3{,}627{,}970{,}560 \approx 2^{31.8}.$$

The factors are: which state, where the input head is, where the work head is, and what the work tape says. From that single number three facts follow.

- **It halts, or loops forever.** A halting run visits distinct configurations, so it takes fewer than $2^{31.8}$ steps. That is $\mathrm{SPACE}(s) \subseteq \mathrm{TIME}(2^{O(s)})$.
- **It can be forced to halt.** Add a step counter that gives up after $2^{32}$ steps; the counter needs 32 bits, which is $O(s + \log n)$ — affordable.
- **Savitch would cost $O(s^2) = O(100)$ cells**, against the roughly $2^{31.8}$ cells needed to write down a path.

Note that $s$ appears in the exponent and $n$ only linearly. **Space is exponentially more valuable than input length**, which is why $\log n$ space is a meaningful and quite powerful budget.

**Example 2 (why you'd care): why $\mathsf{PSPACE} = \mathsf{NPSPACE}$ and $\mathsf{P} = \mathsf{NP}$ are not the same kind of question.** Both ask whether nondeterminism can be removed. One is a fifty-year-old theorem, the other the field's central open problem. What is actually different?

*The deterministic simulation of a nondeterministic machine must explore the computation tree.* For time, that tree has $2^{O(t)}$ nodes and you must **visit** them, so you spend $2^{O(t)}$ time — the resource being measured is consumed by the exploration itself, and there is no way to un-spend it.

*For space, the tree's nodes are reusable.* Exploring a second branch costs no new space, because you overwrite the first. So the only thing you must pay for is the bookkeeping needed to know where you are, and Savitch's insight is that the bookkeeping can be made logarithmic in the tree size by recursing on midpoints instead of walking the tree.

**The asymmetry is the resource, not the nondeterminism.** A reusable resource is cheap to search with; a consumable one is not. That is why every attempt to transplant Savitch's argument to time fails at the first line — there is no time analogue of "reuse the cells".

It is worth recording what is *not* known. Nobody has shown Savitch is tight: $\mathsf{NL} \subseteq \mathrm{SPACE}(\log^2 n)$ has never been improved, and $\mathsf{L} = \mathsf{NL}$ has never been refuted. The square may be an artefact of the proof.

## Watch out

- **You might think** the input tape counts toward space — **but actually** the standard model charges only the work tape, which is the only convention under which sublinear classes like $\mathsf{L}$ exist. If you charged the input, $\mathsf{L}$ would be empty and the whole lower half of the class map would vanish.
- **You might think** Savitch's theorem gives a usable algorithm — **but actually** its running time is $2^{O(s^2)}$, far worse than the naive breadth-first search it replaces. It is a *space* result, and trading exponentially more time for quadratically less space is only ever a theoretical bargain.
- **You might think** $\mathsf{NSPACE}(s) \subseteq \mathrm{SPACE}(s^2)$ means nondeterminism is almost useless for space — **but actually** whether the square is needed at all is wide open: $\mathsf{L} = \mathsf{NL}$ is consistent with everything known. The theorem bounds the cost; it does not show the cost is real.
- **You might think** a space-bounded machine automatically halts — **but actually** it can loop forever within its bound, which is why the space hierarchy theorem needs a step counter and why "decides in space $s$" carries a halting requirement. The counter is affordable precisely because $\log(2^{O(s)}) = O(s)$.

## One-liner

> Space is reusable, so a space-bounded computation is a path in a finite graph rather than a branch in an infinite tree — and searching a graph by midpoints costs a square, where searching a tree costs an exponential.

## Problems

**P1 (🟢)** A nondeterministic machine has $|Q| = 8$ states, work alphabet $|\Gamma| = 4$, and uses $s = 7$ work cells on inputs of length $n = 100$. (a) Give the number of configurations, as an exact figure and as a power of 2 to one decimal place. (b) Give the space Savitch's construction would use, as a multiple of $s^2$, and the number of bits in one stack frame. (c) Give the largest number of steps a halting run can take.

**P2 (🟡)** (a) Prove $\mathrm{TIME}(t(n)) \subseteq \mathrm{SPACE}(t(n))$ for $t(n) \ge n$, in two sentences. (b) Prove $\mathrm{SPACE}(s(n)) \subseteq \mathrm{TIME}(2^{O(s(n))})$ for $s(n) \ge \log n$, naming the fact about halting runs you use. (c) Using (a) and (b) plus Savitch, write the full chain $\mathsf{L} \subseteq \mathsf{NL} \subseteq \mathsf{P} \subseteq \mathsf{NP} \subseteq \mathsf{PSPACE} \subseteq \mathsf{EXP}$ and mark, for each of the five containments, whether it is known to be strict.

**P3 (🔴, optional)** Savitch's recursion tries every configuration as a midpoint. A colleague suggests an improvement: "instead of trying all $2^{O(s)}$ midpoints, do a binary search on the midpoint — that would cut the branching factor to $\log$ of what it was." (a) Say why this does not work, in one sentence about the structure of the problem. (b) Give the actual cost of Savitch's algorithm in **time**, as a function of $s$. (c) State what would follow if someone improved Savitch to $\mathrm{NSPACE}(s) \subseteq \mathrm{SPACE}(s)$, naming a specific class equality.

<details>
<summary>Solutions</summary>

**P1**

(a) $|Q|\cdot n\cdot s\cdot |\Gamma|^s = 8 \cdot 100 \cdot 7 \cdot 4^7 = 8 \cdot 100 \cdot 7 \cdot 16384 = \mathbf{91{,}750{,}400} \approx \mathbf{2^{26.5}}$.

(b) The recursion depth is $\log_2(\text{configurations}) \approx 27$, which is $O(s)$; each frame holds three configuration identifiers of $\lceil 26.5\rceil = 27$ bits each plus a small counter, so about $\mathbf{81\text{ bits per frame}}$ (plus $O(\log s)$ for the level counter). Total space is $O(s^2)$; with $s = 7$ that is a small constant times $49$ — the asymptotic statement, not a literal 49 cells.

(c) A halting run cannot repeat a configuration, so it takes at most $\mathbf{91{,}750{,}400}$ steps — one per configuration.

**P2**

(a) A Turing machine's head moves at most one cell per step, so in $t(n)$ steps it visits at most $t(n)$ distinct cells and can write on no more than that. Hence any machine running in time $t$ uses at most $t$ space, giving $\mathrm{TIME}(t) \subseteq \mathrm{SPACE}(t)$.

(b) A machine using $s(n)$ space has $2^{O(s(n))}$ configurations (using $s \ge \log n$ to absorb the $n$ factor). **A halting run never repeats a configuration** — if it did, the machine would be in a loop and never halt, since the machine is deterministic and a configuration determines the entire future. So a halting run is shorter than the configuration count, that is, $2^{O(s(n))}$ steps.

(c) The chain, with justifications:

| containment | reason | strict? |
|---|---|---|
| $\mathsf{L} \subseteq \mathsf{NL}$ | a deterministic machine is a nondeterministic one | **open** |
| $\mathsf{NL} \subseteq \mathsf{P}$ | $\mathrm{NSPACE}(\log n) \subseteq \mathrm{TIME}(2^{O(\log n)}) = \mathrm{TIME}(n^{O(1)})$ by (b) | **open** |
| $\mathsf{P} \subseteq \mathsf{NP}$ | ignore the certificate | **open** |
| $\mathsf{NP} \subseteq \mathsf{PSPACE}$ | try each certificate in turn, reusing the space | **open** |
| $\mathsf{PSPACE} \subseteq \mathsf{EXP}$ | by (b) with $s = n^k$ | **open** |

**Not one of the five is known to be strict.** What *is* known, from [Lesson 1.3](01-03-the-hierarchy-theorems.md), is that $\mathsf{L} \subsetneq \mathsf{PSPACE}$, $\mathsf{NL} \subsetneq \mathsf{PSPACE}$ (via Savitch) and $\mathsf{P} \subsetneq \mathsf{EXP}$ — so each of those spans contains at least one strict step, but nobody can say which.

**P3**

(a) Binary search requires the search space to be **ordered so that the answer is monotone** in the position, and the set of candidate midpoints has no such structure: whether a given configuration $m$ lies on some $a$-to-$b$ path is not a monotone function of $m$'s index in any enumeration. Midpoints must be tried exhaustively because the predicate is arbitrary in $m$.

(b) Let $T(i)$ be the time to answer a level-$i$ query on a graph with $C = 2^{ds}$ configurations. Each call loops over $C$ midpoints and makes two recursive calls: $T(i) = 2C\,T(i-1)$, with $T(0) = O(1)$. The depth is $ds$, so

$$T(ds) = (2C)^{ds} = 2^{O(s^2)}.$$

That is **exponential in $s^2$** — worse than the $2^{O(s)}$ of a plain breadth-first search of the configuration graph, which is the trade being made.

(c) It would give $\mathsf{L} = \mathsf{NL}$ immediately (take $s = \log n$), and $\mathsf{NSPACE}(s) = \mathrm{SPACE}(s)$ at every level. It would **not** settle $\mathsf{P}$ versus $\mathsf{NP}$ — the two questions are about different resources, and $\mathsf{PSPACE} = \mathsf{NPSPACE}$ is already known without shedding any light on the time version. $\mathsf{L} = \mathsf{NL}$ is widely believed and would be a major result.

</details>

## Flashback

**From Lesson 1.6 (Ladner, self-reducibility & search vs decision):** You have an oracle answering "does this graph contain a clique of size $k$?" and you want to *find* one. The self-reduction is by vertex deletion: for each vertex $v$ in turn, ask whether the current graph minus $v$ still has a $k$-clique; delete $v$ if so, keep it if not.

Run it on the graph with vertices $0..5$ and edges $\{0,1\},\{1,2\},\{0,2\},\{2,3\},\{3,4\},\{4,5\},\{3,5\},\{1,4\},\{0,5\}$ with $k = 3$, processing vertices in increasing order. Give the query table, the clique found, and the number of queries.

<details>
<summary>Solution</summary>

The graph has exactly two triangles, $\{0,1,2\}$ and $\{3,4,5\}$ — but the procedure sees only yes and no.

| query | graph minus $v$ | still has a 3-clique? | action |
|---|---|---|---|
| 1 | $\{1,2,3,4,5\}$ | yes ($\{3,4,5\}$) | delete 0 |
| 2 | $\{2,3,4,5\}$ | yes ($\{3,4,5\}$) | delete 1 |
| 3 | $\{3,4,5\}$ | yes ($\{3,4,5\}$) | delete 2 |
| 4 | $\{4,5\}$ | no | keep 3 |
| 5 | $\{3,5\}$ | no | keep 4 |
| 6 | $\{3,4\}$ | no | keep 5 |

Clique found: $\{3,4,5\}$ — verify the three edges $\{3,4\},\{4,5\},\{3,5\}$ are all present. ✓

**6 queries**, one per vertex, so $n$ in general.

The invariant is the same as the SAT version: *the current graph still contains a $k$-clique*. A **no** answer is the informative one — it proves $v$ lies in every remaining $k$-clique, so $v$ must be kept. When no vertex can be removed, the remaining graph has a $k$-clique and exactly $k$ vertices, so it **is** the clique.

Note the procedure found $\{3,4,5\}$ rather than $\{0,1,2\}$ purely because it processes vertices in increasing order and the early deletions were all permitted by the surviving second triangle.

</details>

## Connections

- **Backward:** the configuration graph is [1.2](01-02-np-ntime-and-nondeterministic-time.md)'s computation tree with repeated configurations identified — which is exactly what reusability means — and that single change turns an exponential search into a graph-reachability question.
- **Forward:** [2.4](02-04-tqbf-and-pspace-completeness.md) finds the problem that is complete for PSPACE and shows it is a game, and [2.5](02-05-l-nl-and-nl-completeness.md) takes the reachability question isolated here and proves it complete for NL. [2.6](02-06-immerman-szelepcsenyi-and-the-class-map.md) shows nondeterministic space is closed under complement, which is the second surprise of the space world.
- **Sideways:** the midpoint recursion is divide-and-conquer with the recursion depth budgeted rather than the work — the same structure as the repeated-squaring trick in [`cryptography` 3.1](../../cryptography/lessons/03-01-the-number-theoretic-toolkit.md), where $2^i$-step reachability plays the role of $x^{2^i}$, and as the doubling in binary lifting for lowest common ancestors.
