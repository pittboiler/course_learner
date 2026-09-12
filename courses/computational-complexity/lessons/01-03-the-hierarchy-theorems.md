# Complexity Theory · Lesson 1.3: The hierarchy theorems

> ⏱ ~15 min · Module 1: Time, hierarchy & NP-completeness · Builds on: [1.1 (time, the model & P)](01-01-time-the-model-and-p.md), [`theory-of-computation` 4.1 (diagonalization)](../../theory-of-computation/lessons/04-01-diagonalization-and-the-halting-problem.md) · Unlocks: [1.6 (Ladner)](01-06-ladner-self-reducibility-search-vs-decision.md), [5.6 (the barriers)](05-06-relativization-natural-proofs-algebrization.md)

## Why this matters

Almost everything in this course is conditional. $\mathsf{P} \ne \mathsf{NP}$ is open. $\mathsf{NP} \ne \mathsf{coNP}$ is open. Whether the polynomial hierarchy is infinite is open. A reader could be forgiven for concluding that complexity theory proves nothing and merely files things.

This lesson is the counterexample, and it is the only one of its size. **More time provably buys more power.** There is a language decidable in $n^3$ steps and not in $n^2$ steps, and the proof is three paragraphs long. The same argument in space gives a sharper version. Out of them fall the only unconditional separations anyone has: $\mathsf{P} \subsetneq \mathsf{EXP}$, $\mathsf{L} \subsetneq \mathsf{PSPACE}$, $\mathsf{NL} \subsetneq \mathsf{PSPACE}$.

And then there is the second reason, which matters more. Once you see *how* the proof works, you can see exactly why it cannot be pointed at P versus NP — the technique needs the simulator to be the same kind of machine as the thing simulated, and a deterministic machine simulating a nondeterministic one is not. That observation becomes the relativization barrier in [Lesson 5.6](05-06-relativization-natural-proofs-algebrization.md). **The hierarchy theorem is both the field's best tool and the clearest statement of its limits.**

## The idea

[`theory-of-computation` 4.1](../../theory-of-computation/lessons/04-01-diagonalization-and-the-halting-problem.md) built an undecidable language by disagreeing with every machine somewhere. List the machines $M_1, M_2, \dots$ and the inputs $w_1, w_2, \dots$, then define $D$ to do the opposite of what $M_i$ does on $w_i$. Then $D$ differs from every $M_i$ on at least one input, so no $M_i$ decides $D$.

That construction has one flaw as it stands: to know what $M_i$ does on $w_i$, $D$ has to run $M_i$, and $M_i$ might not halt. Undecidability is exactly what that flaw proves.

**Now put a clock on it.** Define $D$ to simulate $M_i$ on $w_i$ for *at most* $g(n)$ steps, then flip the answer — and if the simulation has not finished by then, just reject. Now $D$ always halts, in about $g(n)$ steps. So $D \in \mathrm{TIME}(g)$.

What has $D$ achieved? It differs from every machine that runs *within the budget*. If $M_i$ decides its language in $f(n)$ steps and $f$ is comfortably below $g$, the simulation finishes and $D$ genuinely flips the answer, so $M_i$ does not decide $D$. Hence $D \in \mathrm{TIME}(g) \setminus \mathrm{TIME}(f)$, and the two classes are different.

That is the whole proof. The only real work is in "comfortably below", and that phrase hides the one technical fact worth carrying away: **simulating a machine costs a logarithmic factor.** A universal machine reading $M_i$'s description and stepping it cannot do so for free; the best general simulation of $f$ steps costs $O(f \log f)$. So the gap you need is not $f < g$ but $f \log f = o(g)$, and the logarithm in the theorem statement is a simulation cost, not decoration.

The space version has no such logarithm, because a universal machine can simulate $f$ cells of tape in $O(f)$ cells without the bookkeeping overhead. That is why the space hierarchy is tight and the time hierarchy is not.

## The formal version

**Definition ([constructible bounds](../reference.md#constructible-functions)).** $f : \mathbb{N} \to \mathbb{N}$ with $f(n) \ge n \log n$ is **time-constructible** if the map $1^n \mapsto \langle f(n)\rangle$ is computable in time $O(f(n))$. It is **space-constructible** (for $f(n) \ge \log n$) if that map is computable in space $O(f(n))$.

*In words: the machine can work out its own budget within that budget.* Every function you would write down — $n^2$, $n\log n$, $2^n$ — is constructible. The condition is not decoration: without it the **gap theorem** produces bizarre $f$ with $\mathrm{TIME}(f) = \mathrm{TIME}(2^f)$, and no separation is possible at all.

**Theorem ([time hierarchy](../reference.md#time-hierarchy-theorem)).** For time-constructible $g$, if

$$f(n)\log f(n) = o\big(g(n)\big) \qquad\text{then}\qquad \mathrm{TIME}(f(n)) \subsetneq \mathrm{TIME}(g(n)).$$

*In words: give a machine asymptotically more than a log-factor's worth of extra time and it can do something new.*

*Proof.* Define $D$ on input $w$: let $n = |w|$, compute $g(n)$ (constructible), read $w$ as the encoding of a machine $M$, and simulate $M$ on $w$ for $g(n)/\log g(n)$ steps using a universal machine. If $M$ halts within that budget, output the opposite of its answer; otherwise reject.

$D$ runs in $O(g(n))$ steps, so $L(D) \in \mathrm{TIME}(g)$.

Suppose some machine $M$ decided $L(D)$ in time $O(f(n))$. Simulating $M$ for $f(n)$ steps costs $O(f(n)\log f(n))$, which by hypothesis is $o(g(n))$ — so for all sufficiently long encodings $w$ of $M$ (pad the encoding to make $|w|$ as large as needed), the simulation *completes*. On such a $w$, $D$ outputs the opposite of $M(w)$, so $L(D) \ne L(M)$. Contradiction. $\blacksquare$

**Theorem ([space hierarchy](../reference.md#space-hierarchy-theorem)).** For space-constructible $g$, if $f(n) = o(g(n))$ then $\mathrm{SPACE}(f(n)) \subsetneq \mathrm{SPACE}(g(n))$.

The proof is the same with one change: the simulation overhead is a constant factor rather than a logarithmic one, so the condition sharpens from $f \log f = o(g)$ to $f = o(g)$. (There is one extra detail — the simulation must also count steps to detect a looping machine that never leaves its space bound, which costs no extra space.)

**Corollaries ([the known separations](../reference.md#known-separations)).**

| separation | how it follows |
|---|---|
| $\mathrm{TIME}(n^2) \subsetneq \mathrm{TIME}(n^3)$ | $n^2 \cdot 2\log n = o(n^3)$ |
| $\mathsf{P} \subsetneq \mathsf{EXP}$ | $\mathsf{P} \subseteq \mathrm{TIME}(2^n)$, and $\mathrm{TIME}(2^n) \subsetneq \mathrm{TIME}(2^{2n}) \subseteq \mathsf{EXP}$ |
| $\mathsf{L} \subsetneq \mathsf{PSPACE}$ | $\log n = o(n)$ |
| $\mathsf{NL} \subsetneq \mathsf{PSPACE}$ | $\mathsf{NL} \subseteq \mathrm{SPACE}(\log^2 n)$ by Savitch ([2.3](02-03-space-as-a-resource-and-savitch.md)), and $\log^2 n = o(n)$ |

**The corollary that hurts.** Combining $\mathsf{P} \subsetneq \mathsf{EXP}$ with [Lesson 1.2](01-02-np-ntime-and-nondeterministic-time.md)'s $\mathsf{P} \subseteq \mathsf{NP} \subseteq \mathsf{EXP}$: **at least one of those two containments is strict.** Nobody knows which. That is the entire unconditional state of knowledge about the relationship between P and NP.

## Picture

![A six by six grid of cells, rows labelled M one through M six and columns labelled w one through w six, each cell reading accept or reject. The six diagonal cells are outlined in coral. Below the grid, a seventh row labelled D is outlined in blue, whose entry in each column is the opposite of the coral diagonal cell above it in that column.](assets/01-03-fig1.svg)

Read the coral diagonal: it is what machine $M_i$ does on input $w_i$. The blue row is $D$, defined to be its pointwise negation. $D$ therefore disagrees with $M_1$ in column 1, with $M_2$ in column 2, and so on — **it cannot be any row of the table.**

The clock is what is missing from the picture and is the entire difference from the undecidability version. Without it, some diagonal cell might be blank, because $M_i$ never halts on $w_i$, and $D$ would be undefined there. With it, every cell has a value: run the simulation to the budget and, if it is still going, write *reject*. The table is complete, $D$ is total, and $D$ lives in the larger time class.

That also shows exactly what the technique needs. The simulator and the simulated must be the **same kind of machine**, so that "the opposite of what it does" is a thing the simulator can output. A deterministic machine diagonalizing against nondeterministic ones fails right here: flipping the answer of a nondeterministic computation is not a nondeterministic computation, because "some branch accepts" does not negate to "some branch rejects".

## Worked examples

**Example 1 (mechanical): check a proposed separation.** Does the time hierarchy theorem give $\mathrm{TIME}(n^2) \subsetneq \mathrm{TIME}(n^2 \log^2 n)$?

Apply the test with $f = n^2$, $g = n^2\log^2 n$:

$$f\log f = n^2 \cdot \log(n^2) = 2n^2\log n, \qquad \frac{f\log f}{g} = \frac{2n^2\log n}{n^2\log^2 n} = \frac{2}{\log n} \longrightarrow 0.$$

So $f\log f = o(g)$ and **yes**, the separation follows. Notice how little slack was needed: a single extra $\log n$ factor beyond the simulation cost, and the classes are provably different.

Now the same test on a case that fails. Does it give $\mathrm{TIME}(n^2) \subsetneq \mathrm{TIME}(n^2\log n)$? Here $f\log f/g = 2n^2\log n / (n^2 \log n) = 2$, which does not tend to zero. **The theorem is silent** — it does not say the classes are equal, only that this technique does not separate them. That distinction is worth being strict about, and it is the same distinction as in the P versus NP case, only smaller.

**Example 2 (why you'd care): the strongest unconditional statement anyone can make about P versus NP.** We want $\mathsf{P} \subsetneq \mathsf{EXP}$ and its consequence.

*Step 1: $\mathsf{P} \subseteq \mathrm{TIME}(2^n)$.* Every $n^k$ is eventually below $2^n$. Concretely, for $k = 10$: $\log_2(n^{10}) = 10\log_2 n$, which at $n = 50$ is 56.4 (still above 50) and at $n = 60$ is 59.1 (now below 60). So $n^{10} < 2^n$ for all $n \ge 60$, and similar thresholds exist for each $k$.

*Step 2: $\mathrm{TIME}(2^n) \subsetneq \mathrm{TIME}(2^{2n})$.* Apply the theorem with $f = 2^n$, $g = 2^{2n} = 4^n$. Then $f \log f = n\,2^n$, and comparing logarithms, $\log_2(n 2^n) = n + \log_2 n$ against $\log_2 g = 2n$. At $n = 40$ that is 45.3 against 80. The ratio $\to 0$, so the hypothesis holds and the separation follows.

*Step 3.* Chain them: $\mathsf{P} \subseteq \mathrm{TIME}(2^n) \subsetneq \mathrm{TIME}(2^{2n}) \subseteq \mathsf{EXP}$, hence $\mathsf{P} \subsetneq \mathsf{EXP}$.

*The consequence.* [Lesson 1.2](01-02-np-ntime-and-nondeterministic-time.md) gave $\mathsf{P} \subseteq \mathsf{NP} \subseteq \mathsf{EXP}$. If both containments were equalities we would get $\mathsf{P} = \mathsf{EXP}$, contradicting step 3. **So at least one is strict.**

Sit with how weak that is. It is consistent with everything proved that $\mathsf{P} = \mathsf{NP}$, provided $\mathsf{NP} \ne \mathsf{EXP}$. The hierarchy theorem, the sharpest unconditional tool in the subject, cannot rule out the answer that nobody believes.

## Watch out

- **You might think** the $\log$ in $f\log f = o(g)$ is an artefact that a cleverer proof would remove — **but actually** it is the cost of universal simulation, and removing it would require a universal machine with constant-factor overhead, which is not known to exist. The space hierarchy has no such factor precisely because simulating tape cells is cheaper than simulating steps.
- **You might think** constructibility is a technical hygiene condition — **but actually** dropping it destroys the theorem outright. Borodin's gap theorem produces a computable $f$ with $\mathrm{TIME}(f) = \mathrm{TIME}(2^f)$: an exponential increase in budget buying *nothing*. Such $f$ are not constructible, and that is the only thing standing between you and the theorem being false.
- **You might think** the theorem produces an interesting language — **but actually** $D$ is a diagonal artefact defined by "do the opposite of the machine your input encodes". Nobody has ever cared about it for its own sake. The theorem separates classes; it does not hand you a natural problem sitting in the gap, and [Lesson 1.6](01-06-ladner-self-reducibility-search-vs-decision.md) shows that the same is true of Ladner's construction.
- **You might think** that since diagonalization separates $\mathsf{P}$ from $\mathsf{EXP}$, harder work will separate $\mathsf{P}$ from $\mathsf{NP}$ — **but actually** the technique structurally cannot. It needs the diagonalizing machine to negate the simulated machine's answer within the same resource bound, and negating a nondeterministic computation is not something a nondeterministic machine can do. [Lesson 5.6](05-06-relativization-natural-proofs-algebrization.md) turns that observation into a theorem about all relativizing proofs.

## One-liner

> Diagonalization with a clock is the only unconditional separation tool we have, and the same feature that makes it work — the simulator must be able to negate the simulated — is exactly what stops it reaching P versus NP.

## Problems

**P1 (🟢)** For each pair, say whether the time hierarchy theorem establishes $\mathrm{TIME}(f) \subsetneq \mathrm{TIME}(g)$, and give the value or limit of $f\log f / g$ that settles it.

(a) $f = n$, $g = n^2$.
(b) $f = n^3$, $g = n^3 \log n$.
(c) $f = n^3$, $g = n^3 \log^2 n$.
(d) $f = 2^n$, $g = n^{100}$.

**P2 (🟡)** The space hierarchy theorem needs only $f = o(g)$, with no logarithmic factor. (a) Give the one-sentence reason the time version needs the extra factor and the space version does not. (b) Use the space version to prove $\mathrm{SPACE}(\log n) \subsetneq \mathrm{SPACE}(\log^2 n)$, stating the limit you check. (c) Name the extra complication the space proof has that the time proof does not, and say in one clause how it is handled.

**P3 (🔴, optional)** Call $B$ **EXP-complete** if $B \in \mathsf{EXP}$ and $A \le_p B$ for every $A \in \mathsf{EXP}$, where $\le_p$ is the polynomial-time reduction of [`algorithms` 4.1](../../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md). (a) Prove that no EXP-complete language is in $\mathsf{P}$. (b) The analogous claim for NP-complete languages — that no NP-complete language is in $\mathsf{P}$ — is not provable by the same route. Say in two sentences exactly which step breaks and why no strengthening of this lesson's theorems repairs it.

<details>
<summary>Solutions</summary>

**P1**

(a) **Yes.** $f\log f / g = n\log n / n^2 = \log n / n \to 0$.

(b) **No.** $f \log f / g = n^3 \cdot 3\log n / (n^3\log n) = 3$, a constant, so the hypothesis fails. The theorem is silent; it does **not** assert the classes are equal.

(c) **Yes.** $f\log f/g = 3n^3\log n / (n^3\log^2 n) = 3/\log n \to 0$.

(d) **No**, and for a different reason: $g = n^{100}$ is far *smaller* than $f = 2^n$, so the question has the containment backwards. $\mathrm{TIME}(n^{100}) \subseteq \mathrm{TIME}(2^n)$, not the other way round, and the theorem applied in the correct direction gives $\mathrm{TIME}(n^{100}) \subsetneq \mathrm{TIME}(2^n)$ since $100 n^{100}\log n = o(2^n)$.

**P2**

(a) The time version's simulation cost is $O(f \log f)$: a universal machine must locate the simulated machine's current state and tape position among $f$ cells at every one of $f$ steps, and that lookup is logarithmic. The space version's overhead is a constant factor, because storing another machine's $f$ tape cells plus its finite state takes $O(f)$ cells and no per-step lookup is ever charged to space.

(b) Take $f = \log n$ and $g = \log^2 n$, which is space-constructible. Then $f/g = 1/\log n \to 0$ — at $n = 2^{20}$ it is $1/20$ — so $f = o(g)$ and $\mathrm{SPACE}(\log n) \subsetneq \mathrm{SPACE}(\log^2 n)$, that is, $\mathsf{L} \subsetneq \mathrm{SPACE}(\log^2 n)$.

(c) A machine can run forever inside a bounded amount of space, so the diagonalizer must detect looping. It is handled by a step counter: a machine using $s$ cells has at most $|Q| \cdot s \cdot |\Gamma|^{s} = 2^{O(s)}$ distinct configurations, so counting to that bound takes $O(s)$ cells and any machine exceeding it is looping and can be rejected. **The counter costs space $O(s)$, which is why it is affordable at all.**

**P3**

(a) Suppose $B$ is EXP-complete and $B \in \mathsf{P}$. Let $A$ be any language in $\mathsf{EXP}$. By completeness there is a polynomial-time computable $f$ with $x \in A \iff f(x) \in B$. Decide $A$ on input $x$ by computing $f(x)$ and running $B$'s polynomial-time decider on it — this is exactly the closure of $\mathsf{P}$ under polynomial-time reductions proved in [Lesson 1.1](01-01-time-the-model-and-p.md), P3, and it costs $O(n^{ab})$ where $f$ is computable in $O(n^a)$ and $B$ is decided in $O(m^b)$.

So $A \in \mathsf{P}$. Since $A$ was arbitrary, $\mathsf{EXP} \subseteq \mathsf{P}$, and with $\mathsf{P} \subseteq \mathsf{EXP}$ that gives $\mathsf{P} = \mathsf{EXP}$ — contradicting this lesson's $\mathsf{P} \subsetneq \mathsf{EXP}$. Hence no EXP-complete language is in $\mathsf{P}$. $\blacksquare$

This is worth pausing on: it is the only kind of statement in this course that says a concrete, natural problem is intractable **with no hypothesis attached**. Generalized chess on an $n \times n$ board and the succinct circuit value problem are EXP-complete, so they are provably not in $\mathsf{P}$. Everything else you will meet — every NP-hardness result in the library — is conditional.

(b) The step that breaks is the last one. Running the identical argument with NP in place of EXP yields $\mathsf{NP} \subseteq \mathsf{P}$, hence $\mathsf{P} = \mathsf{NP}$ — which is not a contradiction, because $\mathsf{P} \ne \mathsf{NP}$ is exactly what is unproved. Everything before it goes through unchanged; the argument needs a *separation* to contradict, and it has none.

No strengthening of this lesson's theorems supplies one, because every hierarchy theorem here compares two classes of the same machine type, and it works by having the diagonalizer negate the simulated machine's answer within the larger budget. A deterministic machine can negate a deterministic one, so $\mathsf{P}$ versus $\mathsf{EXP}$ is reachable; nothing can negate a nondeterministic computation within nondeterministic time, since the complement of "some branch accepts" is "every branch rejects", which is a different kind of quantifier. That is the gap between what diagonalization proves and what P versus NP asks, and [Lesson 5.6](05-06-relativization-natural-proofs-algebrization.md) makes it a theorem.

</details>

## Flashback

**From Lesson 1.1 (time, the model & P):** A Turing machine decides $L$ in $10n^3 + 500n$ steps on four tapes. (a) By linear speedup, what bound on the four-tape running time can you achieve? (b) Give the $\mathrm{TIME}$ class on four tapes and on one tape. (c) Does the answer to "is $L \in \mathsf{P}$?" depend on which of those two you use?

<details>
<summary>Solution</summary>

(a) Linear speedup says that for any constant $c$ the machine can be rebuilt to run in $t(n)/c + O(n)$. Taking $c = 10$ gives $n^3 + O(n)$, so a four-tape machine achieving **$n^3 + O(n)$ steps** exists. The 10 and the $500n$ are both free.

(b) On four tapes, $10n^3 + 500n = O(n^3)$, so $L \in \mathrm{TIME}(n^3)$. Converting to one tape squares the bound: $O((n^3)^2) = O(n^6)$, so $L \in \mathrm{TIME}(n^6)$ there.

(c) **No.** Both $n^3$ and $n^6$ are of the form $n^k$, and $\mathsf{P} = \bigcup_k \mathrm{TIME}(n^k)$ contains both classes. That is the robustness property $\mathsf{P}$ was defined to have — and it is worth contrasting with this lesson: $\mathrm{TIME}(n^3)$ and $\mathrm{TIME}(n^6)$ are now known to be genuinely *different* classes by the hierarchy theorem, since $3n^3\log n = o(n^6)$. So the model change really does move you to a strictly larger class, and $\mathsf{P}$ is coarse enough not to notice.

</details>

## Connections

- **Backward:** this is [`theory-of-computation` 4.1](../../theory-of-computation/lessons/04-01-diagonalization-and-the-halting-problem.md)'s diagonalization with a step budget bolted on, and the budget is what converts "no machine decides this" into "no *fast* machine decides this". The simulation overheads it charges are [1.1](01-01-time-the-model-and-p.md)'s table read at a finer resolution than $\mathsf{P}$ can see.
- **Forward:** [1.6](01-06-ladner-self-reducibility-search-vs-decision.md) runs the same delayed-diagonalization idea to build an NP-intermediate language, and [5.6](05-06-relativization-natural-proofs-algebrization.md) proves that no argument of this shape can settle P versus NP. [2.3](02-03-space-as-a-resource-and-savitch.md) supplies the Savitch inclusion the corollary table borrows.
- **Sideways:** the "more resource buys strictly more power" shape recurs wherever a hierarchy is built by diagonalization — the arithmetical hierarchy in logic is the same argument with oracles instead of clocks, and [2.2](02-02-the-polynomial-hierarchy.md)'s polynomial hierarchy is its bounded cousin, with the crucial difference that *there* nobody can prove the levels are distinct.
