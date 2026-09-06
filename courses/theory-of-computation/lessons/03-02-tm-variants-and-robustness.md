# Automata & Computability · Lesson 3.2: TM variants & robustness

> ⏱ ~15 min · Module 3: Turing Machines & Computability · Builds on: [3.1 (Turing machines)](03-01-turing-machines.md) · Unlocks: 3.3 (the Church–Turing thesis & the universal machine)

## Why this matters

The Turing machine of Lesson 3.1 looks arbitrary. One tape, why not five? Deterministic, why not guessing? Head moves one cell, why not jump anywhere? Any of these could have been the definition, and if the choice changed what is computable, then "computable" would be a property of a modelling whim rather than of the problem.

It does not. **Every reasonable variant recognizes exactly the same languages.** That robustness is what promotes the Turing machine from "a model" to "the definition of algorithm" — the content of the Church–Turing thesis in Lesson 3.3 — and it is what makes Module 4's impossibility results permanent rather than provisional.

There is a second, sharper reason to care. Robustness holds for *what* is computable and fails for *how fast*. A $k$-tape machine can be simulated on one tape with a quadratic slowdown; a nondeterministic machine can be simulated deterministically, but the best known cost is **exponential**. That gap is not an artefact of a clumsy simulation — closing it is the P vs NP problem (Lesson 4.4). So this lesson is where computability and complexity part company, and knowing which of your claims survives the change of model is exactly the judgement being trained.

## The idea

The proofs are all simulations, and they all have the same shape: **encode the fancier machine's whole state of affairs onto the plain machine's single tape, and pay in time for the encoding.**

For **multiple tapes**, write all $k$ tapes end to end on one tape, separated by a delimiter `#`. You now need to know where each virtual head is, so mark those cells with dotted versions of the symbols — a second copy of the tape alphabet, still finite, which is all the definition asks. To simulate one step of the $k$-tape machine, sweep across the whole tape to read all $k$ dotted symbols, then sweep back writing the updates and shifting the dots. Two passes per simulated step.

For **nondeterminism**, think of the machine's possible runs as a tree: each configuration branches into its available successors. The machine accepts iff *some* node in that tree is accepting. A deterministic machine can search the tree — but it must search it **breadth-first**. Depth-first is fatal, because one branch may run forever and a depth-first search would follow it and never come back to try the accepting branch sitting one step away.

For **enumerators** — machines that print a list of strings instead of answering questions — the equivalence with recognizers is the crispest statement of what "recognizable" means: a language is recognizable exactly when you can *list* its members, in some order, possibly forever. That is why the classical name is *recursively enumerable*.

Notice what all three simulations have in common: none needs any new capability, only more tape and more time. **The tape was already enough.**

## The formal version

**Multitape Turing machines.** A $k$-tape TM has $k$ tapes with independent heads; the input starts on tape 1 and the others start blank. Its transition function is

$$\delta : Q \times \Gamma^k \to Q \times \Gamma^k \times \{L,R,S\}^k$$

(the extra $S$ = "stay put" is itself a variant that adds nothing: simulate $S$ by $R$ then $L$).

**Theorem.** Every $k$-tape TM $M$ has an equivalent single-tape TM $S$.

*Proof.* $S$ keeps the string $\#\,w_1\,\#\,w_2\,\#\cdots\#\,w_k\,\#$ on its tape, where $w_i$ is tape $i$'s content, with the symbol under head $i$ written in a dotted variant. To simulate one step: scan left to right recording the $k$ dotted symbols in the finite control (possible because $k$ and $|\Gamma|$ are fixed, so there are finitely many combinations), then scan back applying $\delta$ — rewriting each dotted cell and moving its dot. If a virtual head runs off the right end of its block, shift everything to its right one cell over and insert a blank. $\blacksquare$

**Cost.** If $M$ runs for $t$ steps it uses at most $t$ cells per tape, so $S$'s tape has length $O(kt)$, and each simulated step costs $O(kt)$. Total: $O(kt^2)$ — a **quadratic** slowdown, polynomial in $t$.

**Nondeterministic Turing machines.** An NTM has $\delta : Q \times \Gamma \to \mathcal{P}(Q \times \Gamma \times \{L,R\})$ and accepts $w$ if *some* branch of its computation reaches $q_{\text{accept}}$.

**Theorem.** Every NTM $N$ has an equivalent deterministic TM $D$.

*Proof.* Let $b$ be the largest number of choices at any step, so every node of $N$'s computation tree has at most $b$ children and a branch of length $t$ is named by a string in $\{1,\dots,b\}^t$. $D$ uses three tapes: the input (never altered), a simulation tape, and an **address tape** holding a string over $\{1,\dots,b\}$. $D$ loops: copy the input to the simulation tape, run $N$ along the branch named by the address tape (aborting that branch if the address ever names a choice that does not exist, or if $N$ rejects), accept if that branch accepts; otherwise replace the address by the next string in **shortlex order** — all strings of length 0, then all of length 1, then all of length 2, and so on — and repeat. Since shortlex enumerates every finite address, any accepting branch at depth $d$ is found after finitely many iterations. $\blacksquare$

**Cost.** Exploring the tree to depth $t$ visits $O(b^t)$ nodes, each costing $O(t)$ to replay: **exponential**. No sub-exponential simulation is known, and finding one for a suitable class of problems would resolve P vs NP.

**Enumerators.** An enumerator is a TM with a printer: it runs forever if it likes and prints strings as it goes. It *enumerates* the set of strings it eventually prints (order arbitrary, repeats allowed).

**Theorem.** $A$ is Turing-recognizable **iff** some enumerator enumerates $A$.

*($\Leftarrow$)* Given enumerator $E$, recognize $A$ by running $E$ and accepting as soon as it prints the input. If the input is not in $A$, this loops forever — which is exactly what a recognizer is allowed to do.
*($\Rightarrow$)* Given recognizer $M$, enumerate $A$ by **dovetailing**: for $i = 1, 2, 3, \dots$, run $M$ for $i$ steps on each of the first $i$ strings of $\Sigma^*$, printing any that accept. Every accepted string is found at some finite $(i, \text{string})$ pair, and no rejected one is ever printed. $\blacksquare$

Dovetailing is the standard cure for "one of these computations might not halt": never commit to running any single computation to completion — interleave them all, giving each a growing time budget. It is the same idea as the breadth-first requirement above.

**Variants that add nothing** (each by a simulation of the same flavour): two-way infinite tape, a "stay put" move, $k$ tapes, nondeterminism, two stacks in place of the tape, random access to a computed cell index, any finite number of heads. **A variant that takes something away**: a machine that may not write. That one is strictly weaker, and P3 pins down how much.

## Picture

![Above, a three-tape machine mid-computation, each tape drawn as a row of cells with its head cell outlined. Below, a single tape holding the same information: the three tapes' contents concatenated between hash delimiters, with the three virtual head positions marked by dots.](assets/03-02-fig1.svg)

The dots are the whole trick. A single-tape machine has one physical head, so it cannot be in three places at once — but it does not need to be, as long as the tape *records* where the three virtual heads are and the machine is willing to walk over to each in turn. Walking is what costs the extra factor of $t$.

The alphabet doubling is worth pausing on. It is legal because the definition only requires $\Gamma$ to be **finite**, and $|\Gamma_{\text{new}}| = 2|\Gamma| + 1$ is finite. Almost every simulation in this course buys something with exactly this move: put more information into each cell by enlarging the alphabet, at zero cost to the model.

## Worked examples

**Example 1 (mechanical): what a second tape buys.** [Lesson 3.1's](03-01-turing-machines.md) one-tape decider for $\{a^nb^nc^n\}$ takes exactly $4n^2 + 3n + 1$ steps, because each of its $n$ sweeps re-walks a tape of length $3n$.

With **two** tapes: sweep the input once, copying every `a` onto tape 2 as a tally mark. Then continue rightward over the `b`s while moving tape 2's head *left*, one cell per `b`; if the heads do not hit the start of tape 2 exactly when the `b`s run out, reject. Rewind tape 2 (or reuse the marks) and repeat for the `c`s. Every phase is a single left-to-right or right-to-left pass, and there are a constant number of phases: $\Theta(n)$ steps.

So two tapes take a $\Theta(n^2)$ algorithm to $\Theta(n)$. And by the simulation theorem, that speed-up is bounded — one tape can always recover the multitape result within a square. The general statement:

$$\text{$k$-tape time } t \quad\Longrightarrow\quad \text{1-tape time } O(kt^2).$$

**What survives a change of model and what does not.** "$\{a^nb^nc^n\}$ is decidable" survives — it is true for every variant. "$\{a^nb^nc^n\}$ is decidable in linear time" does *not* — it is true for two tapes and false for one (there is a known $\Omega(n^2)$ lower bound for one-tape machines on languages of this kind). **Computability claims are model-independent; complexity claims are not**, which is why complexity theory fixes a model and why $\mathrm{P}$ is defined as *polynomial* time — polynomials are exactly the class closed under the slowdowns above.

**Example 2 (why you'd care): why the search must be breadth-first.** Consider this NTM $N$ over $\Sigma = \{0\}$. In state $q_0$ on any symbol it has two choices:

1. go to $q_{\text{spin}}$, which moves right forever, never halting; or
2. go to $q_{\text{accept}}$.

$N$ accepts every input, since choice 2 is always available. Now simulate it deterministically.

**Depth-first** search picks a branch and follows it to the end. If it picks branch 1 first, there is no end: the simulator moves right forever, never backtracks, and never discovers branch 2 sitting one step away. The simulation fails to accept a string the NTM accepts — so it is not an equivalent machine.

**Breadth-first** (the shortlex address enumeration above) tries the address `1` for one step, then `2` for one step, then `11`, `12`, `21`, `22`, and so on. It reaches the accepting node at depth 1 immediately, whatever order the branches are numbered in.

The general principle is worth stating on its own, because it recurs in every proof in Module 4:

> **When some of the computations you must explore might not halt, never run one to completion. Interleave them, giving each a bounded and growing budget.**

That is dovetailing, and it is the same move as the enumerator construction. It is also why the deterministic simulation is exponential and not merely slow: you cannot prune a branch you have not finished, so you must keep them all alive.

## Watch out

- **You might think** a depth-first simulation of an NTM is fine as long as you detect loops — **but actually** detecting whether a branch loops is the halting problem (Lesson 4.1), so there is no such detector. Breadth-first is not an optimization; it is the only correct option.
- **You might think** "all models are equivalent" means the choice of model never matters — **but actually** it means the choice never changes *what* is computable, while routinely changing *how fast* by a polynomial (multitape) or an exponential (nondeterminism). Quoting a robustness theorem to defend a running-time claim is a category error, and it is the most common one in this area.
- **You might think** enlarging the tape alphabet is cheating — **but actually** the definition demands only that $\Gamma$ be finite, and every simulation here exploits that: dotted symbols, block delimiters, tally marks. What you may *not* do is make the alphabet depend on the input length; that would be an infinite family of machines, not a machine.

## One-liner

> Every reasonable extension of the Turing machine can be simulated by the plain one with more tape and more time — so *what* is computable is model-independent, while *how fast* is not, and the gap between those two facts is where complexity theory lives.

## Problems

**P1 (🟢)** A 3-tape machine $M$ decides some language in $t(n)$ steps on inputs of length $n$.

(a) Give the running time of the single-tape simulation $S$, in $O(\cdot)$ form, and derive it in one sentence.
(b) If $t(n) = 5n$, what is $S$'s running time?
(c) A colleague concludes: "so tapes are irrelevant — every multitape algorithm is a single-tape algorithm." State precisely what is right and what is wrong about that sentence.

**P2 (🟡)** Let $N$ be an NTM whose computation tree has branching factor at most $b$ and where every accepting branch has length at most $d$.

(a) How many nodes does the deterministic simulator visit in the worst case, as a function of $b$ and $d$? (b) Give a concrete NTM (three states will do) on which a *depth-first* simulator fails to accept a string that $N$ accepts, and say exactly which string and which branch. (c) Explain in one sentence why "just detect the infinite branch and back out" is not a repair.

**P3 (🔴)** For each modification, say whether the class of **recognizable languages** changes, and justify — a simulation sketch if it does not, a characterization if it does.

(a) The tape is infinite in **both** directions.
(b) The machine has **two stacks** instead of a tape.
(c) The machine may compute a cell index and **jump the head there** in one step.
(d) The machine may **never write** — the head reads and moves left or right, but the tape is immutable.
(e) The machine has **two heads** on one tape, moving independently.

<details>
<summary>Solutions</summary>

**P1** (a) $O(t(n)^2)$ — more precisely $O(k\,t(n)^2)$ with $k = 3$, so $O(t(n)^2)$. **Derivation:** in $t$ steps $M$ visits at most $t$ cells on each of its 3 tapes, so $S$'s tape is $O(t)$ long; simulating one of $M$'s steps costs two sweeps of that tape, i.e. $O(t)$; and there are $t$ steps to simulate. Product: $O(t^2)$.

(b) $O(n^2)$. A linear-time 3-tape algorithm becomes a quadratic-time 1-tape one.

(c) **Right:** every language decided by a multitape machine is decided by a single-tape machine, so multitape adds no *computational power* — which is what makes the multitape model a legitimate shorthand for describing algorithms. **Wrong:** the algorithms are not interchangeable, because the translation costs a square. A 3-tape algorithm running in $O(n)$ becomes an $O(n^2)$ single-tape one, and for some languages that loss is provably necessary. The sentence conflates *decidability* (model-independent) with *efficiency* (model-dependent) — the error Example 1 is built to expose.

**P2** (a) The tree has at most $b^0 + b^1 + \cdots + b^d = \frac{b^{d+1}-1}{b-1} = O(b^d)$ nodes, and the simulator replays each candidate branch from the start, costing up to $O(d)$ per node — so $O(d\,b^d)$ steps in the worst case. **Exponential in the depth**, whatever $b \ge 2$ is.

(b) Three states, $\Sigma = \{0\}$, and $\delta(q_0, s)$ offers exactly two choices for every $s$:

$$\delta(q_0, s) \;=\; \big\{\,(q_{\text{spin}},\, s,\, R),\ \ (q_{\text{accept}},\, s,\, R)\,\big\}, \qquad \delta(q_{\text{spin}}, s) = \{(q_{\text{spin}}, s, R)\}.$$

$N$ accepts **every** string, including $\varepsilon$, because the second choice at the first step goes straight to $q_{\text{accept}}$.

Now run a depth-first simulator on $\varepsilon$ that tries choice 1 first. It enters $q_{\text{spin}}$ and moves right forever: it never halts, never backtracks, and so never tries choice 2. The simulator fails to accept $\varepsilon$, which $N$ accepts. **The failing string is $\varepsilon$ (indeed any string), and the fatal branch is the one that enters $q_{\text{spin}}$ at step 1.**

(c) Because "does this branch run forever?" is exactly the halting problem, and Lesson 4.1 shows no machine decides it — so the proposed loop-detector cannot exist. (Bounded-depth heuristics like "back out after $10^6$ steps" are not a repair either: they turn the simulator into a machine that rejects some strings $N$ accepts, namely those whose only accepting branch is longer than the bound.)

**P3**

**(a) No change.** Simulate a two-way infinite tape on a one-way one by folding it at the origin: keep two tracks in one cell (again, alphabet $\Gamma \times \Gamma$ — finite), with the upper track holding cells $0, 1, 2, \dots$ and the lower track holding $-1, -2, -3, \dots$. The finite control remembers which track it is on and reverses the direction of every move while on the lower track. Constant-factor slowdown.

**(b) No change.** A two-stack machine simulates a TM: keep the tape contents to the *left* of the head on stack 1 (top = nearest the head) and the contents from the head rightward on stack 2 (top = the head cell). Moving right pops stack 2 and pushes onto stack 1; moving left does the reverse; reading and writing act on stack 2's top. Conversely a TM simulates two stacks by keeping them on two tapes and applying (a) and the multitape theorem. (This is the remark promised in [Lesson 2.2's third Watch out](02-02-pushdown-automata-and-cfg-equivalence.md): **one** stack is a PDA, **two** stacks is a full Turing machine — there is nothing in between.)

**(c) No change.** The jump is simulable: write the target index in binary on a work tape and walk the head there while decrementing, then apply the multitape theorem. This costs a polynomial factor, so the *class* is unchanged. (Practically this is the RAM model, which is why real programs with array indexing are still just Turing machines — and why complexity theory can talk about "polynomial time" without specifying whether it means a tape or a RAM.)

**(d) Yes — strictly weaker.** A machine that cannot write is a **two-way finite automaton**: its entire memory is its state plus the head position, and the tape is a fixed read-only input. By the Rabin–Scott / Shepherdson theorem, two-way finite automata recognize exactly the **regular languages** — the ability to re-read the input, without the ability to record anything, buys nothing over one left-to-right pass. So this variant drops you from all recognizable languages back to [Module 1](01-01-deterministic-finite-automata.md), and in particular it cannot decide $\{0^n1^n\}$.

This is the entry that makes the whole list meaningful. Robustness is not the trivial observation that models tend to agree; it is a substantive fact about *which* features carry the power. Here: **writing is the essential one.** Two-way motion alone gives regular; writing plus one-way LIFO access gives context-free; writing plus two-way access gives everything.

**(e) No change.** Two heads on one tape is simulable exactly as in the Picture — mark each head's cell with a distinct dotted symbol and sweep to service them in turn, paying $O(t)$ per simulated step for an $O(t^2)$ total. (Two heads on one tape is in fact *weaker-looking* than two tapes and equally powerful; the general principle is that any fixed, finite number of finite-state observers over a writable tape adds no power.)

</details>

## Flashback

**From Lesson 2.3 (The CFL pumping lemma):** Prove that $L = \{\, 0^n1^n0^n : n \ge 0 \,\}$ is not context-free. State how condition (iii) constrains the adversary's window, and which $i$ you pump to.

<details>
<summary>Solution</summary>

Suppose $L$ is context-free with pumping length $p$. Take

$$s = 0^p1^p0^p,$$

which is in $L$ and has length $3p \ge p$. ✓

*The constraint.* The adversary splits $s = uvxyz$ with $|vy| > 0$ and $|vxy| \le p$. Each block has length exactly $p$, so a contiguous window of length $\le p$ **cannot meet both the first block and the third** — reaching from one to the other requires spanning the entire middle block plus at least one symbol on each side, hence length $> p$. So $v$ and $y$ live inside at most two *adjacent* blocks.

*The kill.* Take $i = 2$, adding $|vy| > 0$ symbols spread over at most two adjacent blocks. Since the window misses at least one of the three blocks entirely, at least one block keeps its length $p$ while at least one other grows past $p$. Case by case:

- window inside blocks 1–2: the final $0$-block is stranded at $p$ while the leading $0$-block or the $1$-block grows — so either the two $0$-counts differ, or the $1$-count exceeds them.
- window inside blocks 2–3: the leading $0$-block is stranded at $p$, and the same argument applies from the other end.
- window inside a single block: the other two are stranded.

In every case the pumped string fails to have the form $0^n1^n0^n$ with all three counts equal, so $uv^2xy^2z \notin L$. Contradiction; $L$ is not context-free. $\blacksquare$

(Verified exhaustively: for every $p \le 6$, every legal split of $0^p1^p0^p$ is killed by $i = 2$ — here, unlike [Lesson 2.3's P2](02-03-cfl-pumping-lemma-and-closure.md), a single pump direction suffices, because the language is defined by equalities rather than a chain of inequalities and so has no slack in either direction.)

Note the structural point: this is the *same* proof as $\{a^nb^nc^n\}$, and it is the same because what matters is not which letters appear but that there are **three blocks whose lengths must agree** and a window that can reach only two.

</details>

## Connections

- **Backward:** every simulation here is the [Lesson 1.4](01-04-closure-properties-of-regular-languages.md) trick of enlarging the state space, moved to the tape alphabet; and P3(b) closes the loop on [Lesson 2.2's](02-02-pushdown-automata-and-cfg-equivalence.md) claim that two stacks make a Turing machine. Nondeterminism recurs from [Lesson 1.2](01-02-nfa-and-the-subset-construction.md) — but where the subset construction was polynomial and lossless, here it is exponential and stubbornly so.
- **Forward:** Lesson 3.3 turns this robustness into the Church–Turing thesis and builds the universal machine that runs an arbitrary encoded machine; the dovetailing here is used again in Lesson 3.4 to prove the recognizability theorem, and in Lesson 4.4 the deterministic/nondeterministic time gap becomes P vs NP.
- **Sideways:** the multitape-to-single-tape simulation is why [computational-complexity](../../computational-complexity/syllabus.md) defines $\mathrm{P}$ with polynomials rather than a fixed exponent — the class must be closed under changing your mind about the machine. And the breadth-first requirement in Example 2 is the same argument that makes iterative deepening, not depth-first search, the correct default for a search tree of unknown depth, a point [algorithms](../../algorithms/syllabus.md) makes about graph search.
