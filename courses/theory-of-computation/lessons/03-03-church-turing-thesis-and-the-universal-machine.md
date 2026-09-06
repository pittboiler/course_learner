# Automata & Computability · Lesson 3.3: The Church–Turing thesis & the universal machine

> ⏱ ~15 min · Module 3: Turing Machines & Computability · Builds on: [3.1 (Turing machines)](03-01-turing-machines.md), [3.2 (variants & robustness)](03-02-tm-variants-and-robustness.md) · Unlocks: 3.4 (decidable vs Turing-recognizable)

## Why this matters

Two loose ends from Lesson 3.2, and this lesson ties both.

The first is philosophical and turns out to be the most consequential claim in the subject: the **Church–Turing thesis**, that *anything a human or machine could reasonably call an algorithm is computable by a Turing machine*. It is not a theorem — there is nothing formal on the left-hand side to prove things about — but the evidence is overwhelming, and accepting it is what converts "no Turing machine decides this" into "**no algorithm** decides this, ever, in any language, on any hardware." Every impossibility result you will meet in Module 4 depends on it for its force.

The second is technical and turns out to be the most consequential *construction*: a machine is a finite object, so it can be written down as a string, so it can be fed to another machine as input. That gives the **universal Turing machine** — one fixed machine that runs any other. In 1936 that was a mathematical device; by 1945 it was the stored-program computer, and it is why you have one machine on your desk that runs everything rather than a different appliance per task.

It also makes something new possible: a machine can be given a description of *itself*. Self-reference is now on the table, and Lesson 4.1 uses it to break everything.

## The idea

Start with what a Turing machine actually is: a finite set of states, a finite alphabet, and a finite transition table. Every part is finite, so the whole thing can be written down — as a string of symbols, in a fixed format. Call that string $\langle M \rangle$.

Once you can do that, **a program is data.** You can hand $\langle M \rangle$ to another Turing machine, which can read the table and imitate $M$ step by step: keep track of $M$'s current state, keep a copy of $M$'s tape, and to take a step, look up the rule for the current (state, symbol) pair in $\langle M \rangle$ and apply it. That machine is $U$, the universal Turing machine, and it needs no capability the ordinary definition does not already give it — just tape, and patience.

This is exactly what an interpreter does, and the observation that it can be done at all is Turing's, before there was anything to interpret.

The Church–Turing thesis is the other side. People proposed several independent definitions of "effectively calculable" in the 1930s, from wildly different starting points: Church's $\lambda$-calculus (substitution in expressions), Gödel and Herbrand's $\mu$-recursive functions (arithmetic closed under a search operator), Post's rewriting systems, Turing's machines. Every one turned out to define **the same class of functions**. Add anything since — register machines, cellular automata, C, Python, quantum circuits — and the answer is still the same class. Nothing has ever escaped it.

So the thesis is an empirical claim about a definition: *this is what "algorithm" means.* And its practical use is a licence to stop writing state tables. Once you accept it, describing a procedure in ordinary careful prose is a complete proof that a Turing machine exists.

## The formal version

**Encoding.** For any finite object $O$ — a machine, a grammar, a graph, a pair of machines — write $\langle O \rangle$ for a string encoding it over some fixed alphabet. A usable encoding must be

1. **unambiguous** — distinct objects get distinct strings; and
2. **decodable by a Turing machine** — some TM, given $\langle O \rangle$, can extract any component.

Any two encodings meeting these conditions can be converted into each other by a machine, so **nothing in this course depends on which one you fix.**

A concrete scheme over $\{0,1\}$: number the states $q_1, \dots, q_k$ and the tape symbols $a_1, \dots, a_m$, and write a number $i$ in unary as $1^i$. Encode the transition $\delta(q_i, a_j) = (q_k, a_\ell, D)$ as

$$1^i\,0\,1^j\,0\,1^k\,0\,1^\ell\,0\,1^{d}, \qquad d = 1 \text{ for } L,\ 2 \text{ for } R,$$

separate transitions by $00$, and wrap the whole table in $000 \ldots 000$. Since a run of $1$s never contains a $0$, the delimiters are unambiguous and a machine can parse it. (Implemented and round-tripped: a 6-transition machine encodes to a 102-bit string that decodes back to the original table exactly.)

**Theorem (the universal Turing machine).** There is a TM $U$ such that for every TM $M$ and string $w$,

$$U \text{ on input } \langle M, w \rangle \ \text{ accepts iff } M \text{ accepts } w, \ \text{ rejects iff } M \text{ rejects } w, \ \text{ and loops iff } M \text{ loops on } w.$$

*Proof sketch.* Use a 3-tape machine (legitimate by [Lesson 3.2](03-02-tm-variants-and-robustness.md)): tape 1 holds $\langle M \rangle$ unchanged, tape 2 holds $M$'s simulated tape, tape 3 holds $M$'s current state. Initialize tape 2 with $w$ and tape 3 with $q_1$. Repeat: read the symbol under the simulated head, scan tape 1 for the matching transition, write the new symbol, move the simulated head, update tape 3. If tape 3 ever holds $M$'s accept state, accept; its reject state, reject. $\blacksquare$

Two consequences to state plainly.

- **$U$ is a recognizer, not a decider.** If $M$ loops on $w$, $U$ loops on $\langle M, w \rangle$ — it has no way to notice. So the language $A_{\mathrm{TM}} = \{\langle M, w\rangle : M \text{ accepts } w\}$ is Turing-recognizable. Whether it is *decidable* is exactly the question Lesson 4.1 answers, negatively.
- **Self-reference is now available.** Nothing stops you from running $U$ on $\langle M, \langle M \rangle \rangle$ — a machine reading its own description. This is not a paradox; it is a construction, and it is the one diagonalization needs.

**The Church–Turing thesis.** *The intuitively computable functions are exactly the Turing-computable functions.*

It cannot be proved, because "intuitively computable" is not a formal notion. The evidence is convergence: $\lambda$-definable $=$ $\mu$-recursive $=$ Turing-computable $=$ Post-computable $=$ register-machine-computable $=$ what your programming language computes, all proved equal, all defined independently. (**Not** in the class: models with genuinely infinite ingredients — an oracle for the halting problem, unbounded parallelism completing infinitely many steps in finite time, exact real-number arithmetic. These are studied, and they are *not* claims about physically realizable computation.)

**What the thesis licenses.** From here on, "there is an algorithm that…" is a complete and rigorous claim, and its proof is a clear description of the procedure. That is why Module 4's proofs read like prose about programs rather than tables of transitions.

## Picture

![A single tape divided into three labelled regions: a large block holding the encoded machine M, a small block holding M's current state, and a block holding M's simulated tape with a dot on the head cell. Below, a four-step loop: read the dotted symbol, scan the encoding for the matching rule, rewrite and move, halt if the state is accepting or rejecting.](assets/03-03-fig1.svg)

Everything in the top row is data on one tape. The block on the left is the *program*, and $U$ never modifies it — it only reads. The block in the middle is one state name, which is why the simulated machine's finite control costs $U$ essentially nothing. The block on the right is the simulated tape, and it is the only part that grows.

The loop below is the interpreter's fetch–decode–execute cycle, invented for this proof a decade before there was a machine to run it on. And the line in coral is the price: $U$ inherits $M$'s non-termination. **A simulator cannot be more decisive than the thing it simulates**, which is the sentence Module 4 turns into a theorem.

## Worked examples

**Example 1 (mechanical): encoding a machine.** Take the two-working-state TM $M$ over $\Sigma = \{0,1\}$ that accepts exactly the strings beginning with `1`:

$$\delta(q_1,1) = (q_2,1,R), \quad \delta(q_1,0) = (q_{\text{rej}},0,R), \quad \delta(q_1,\sqcup) = (q_{\text{rej}},\sqcup,R),$$
$$\delta(q_2,0) = (q_2,0,R), \quad \delta(q_2,1) = (q_2,1,R), \quad \delta(q_2,\sqcup) = (q_{\text{acc}},\sqcup,R).$$

Number the states $q_1 = 1$, $q_2 = 2$, $q_{\text{acc}} = 3$, $q_{\text{rej}} = 4$ and the symbols $\texttt{0} = 1$, $\texttt{1} = 2$, $\sqcup = 3$. Then, for instance,

$$\delta(q_1,1) = (q_2,1,R) \ \longmapsto\ \underbrace{1}_{q_1}\,0\,\underbrace{11}_{\texttt{1}}\,0\,\underbrace{11}_{q_2}\,0\,\underbrace{11}_{\texttt{1}}\,0\,\underbrace{11}_{R} \;=\; 1011011011011,$$

$$\delta(q_2,\sqcup) = (q_{\text{acc}},\sqcup,R) \ \longmapsto\ 11\,0\,111\,0\,111\,0\,111\,0\,11 \;=\; 11011101110111011.$$

Concatenate all six with `00` between and `000` at each end: $\langle M \rangle$ is a specific 102-bit string. (Encoder and decoder implemented; the string round-trips to the original table.)

The only thing that matters is that this is **mechanical and reversible**. A machine can be told to "read the third field of the rule for $(q_2, \sqcup)$" and it can do it, by counting `1`s between `0`s. That is the entire content of "programs are data."

Note what the encoding is *not*: it is not a semantic summary. $\langle M \rangle$ tells you $M$'s table, not $M$'s language. Extracting $L(M)$ from $\langle M \rangle$ is precisely what Lesson 4.3 proves impossible.

**Example 2 (why you'd care): the thesis as a proof technique.** Here is a claim, stated at the level of rigor the rest of this course will use:

> **Claim.** $\{\langle G \rangle : G \text{ is a CFG generating at least one string}\}$ is decidable.
>
> **Proof.** On input $\langle G \rangle$: mark every terminal of $G$. Then repeat until no change: mark a variable $A$ if some rule $A \to \alpha$ has every symbol of $\alpha$ already marked. Accept iff the start variable ends up marked. Each round marks at least one new variable or stops, and there are finitely many variables, so the loop runs at most $|V|$ times and the procedure always halts. $\square$

That is a complete proof. It contains no states, no tape, no $\delta$ — and by the Church–Turing thesis it is nevertheless a proof that a **Turing machine** decides the language, because every step (parsing $\langle G \rangle$, maintaining a set of marks, scanning a finite rule list) is obviously implementable with finitely many states and a tape.

**This is the working method for the rest of the course.** Compare it with the alternative: writing out the 7-tuple would take a page, obscure the idea, and add no confidence. The judgement being trained is knowing when a prose description is genuinely mechanical — every step bounded, every loop terminating for a stated reason — and when it is quietly assuming something unbounded. The word "repeat until no change" is fine here *because the argument bounds the number of rounds*; drop that clause and the same prose would describe a recognizer, not a decider.

## Watch out

- **You might think** the Church–Turing thesis is a theorem — **but actually** it cannot be, because one side of the equation ("effectively calculable") is informal. It is a claim that a formal definition correctly captures an intuitive notion, supported by ninety years of independent formalizations converging on the same class and nothing ever escaping it. Treat it as a definition you have very good reasons to accept, not as something with a proof.
- **You might think** a "more powerful computer" — quantum, massively parallel, analogue — could compute something a Turing machine cannot. **But actually** none of these changes the class of computable functions. Quantum computers are believed to change what is *efficiently* computable (a complexity claim) and are known not to change what is *computable at all*; parallelism buys speed, not power. The models that do escape (halting oracles, infinite-time machines) are the ones that assume something physically unavailable.
- **You might think** $U$'s existence means you can always tell what a program does by running it — **but actually** $U$ gives you exactly one thing: a faithful simulation, including faithful non-termination. It answers "does $M$ accept $w$?" only when the answer is yes. Every question of the form "will this program eventually…" inherits that asymmetry, and Module 4 shows the asymmetry is permanent.

## One-liner

> A machine is a finite object, so it is a string, so one fixed machine can run any other — and the thesis that this one model captures *every* algorithm is what turns "no Turing machine can" into "nobody can, ever."

## Problems

**P1 (🟢)** Using the encoding of Example 1 (states $q_1 = 1$, $q_2 = 2$, $q_{\text{acc}} = 3$, $q_{\text{rej}} = 4$; symbols $\texttt{0} = 1$, $\texttt{1} = 2$, $\sqcup = 3$; $L = 1$, $R = 2$):

(a) Encode the transition $\delta(q_2, 0) = (q_1, 1, L)$. (b) Decode the string `110110111011011` back into a transition. (c) The string `1101101110110` is **not** a well-formed rule. Say why, and say in one sentence why any machine that takes $\langle M \rangle$ as input has to check for this.

**P2 (🟡)** For each description, say whether it establishes that the language is **decidable**, only **Turing-recognizable**, or **neither as written** — and say which clause of the description settles it.

(a) On input $\langle G \rangle$ for a CFG $G$ and a string $w$: try every derivation of $G$ in order of length; accept if one yields $w$.
(b) On input $\langle D \rangle$ for a DFA $D$: mark the start state, then repeatedly mark any state reachable in one step from a marked state, until no change; accept iff some accept state is marked.
(c) On input $\langle M \rangle$ for a TM $M$: run $M$ on every string of $\Sigma^*$ in order, and accept if any of them accepts.
(d) On input $\langle M, w \rangle$: run $M$ on $w$ for $|w|^2$ steps; accept if it has accepted by then, reject otherwise.

**P3 (🔴)** A colleague argues:

> "The universal machine $U$ simulates any $M$ on any $w$. So to decide whether $M$ accepts $w$, run $U$ on $\langle M, w\rangle$. If it accepts, output yes; if it rejects, output no; and if it is still running after a long time, output no — it is clearly stuck. Therefore $A_{\mathrm{TM}}$ is decidable."

(a) Identify the exact step that fails, and say precisely what would have to be true for it to work.
(b) Give a concrete pair $(M, w)$ for which the "long time" rule gives the wrong answer for *any* fixed time bound the colleague chooses.
(c) The colleague retreats to: "fine, but for each $\langle M,w\rangle$ there *exists* a bound that works — accept if $M$ accepts within it, reject otherwise. That is a decider." Say what is wrong with this weaker claim, being careful about the difference between "a bound exists" and "a bound is computable."

<details>
<summary>Solutions</summary>

**P1** (a) $q_2 = 2$, symbol $\texttt{0} = 1$, $q_1 = 1$, symbol $\texttt{1} = 2$, $L = 1$, so the five fields are $11,\ 1,\ 1,\ 11,\ 1$ joined by single `0`s:

$$\underbrace{11}_{q_2}\,0\,\underbrace{1}_{\texttt{0}}\,0\,\underbrace{1}_{q_1}\,0\,\underbrace{11}_{\texttt{1}}\,0\,\underbrace{1}_{L} \;=\; \texttt{11010101101} \quad (11 \text{ bits}).$$

(b) Split `110110111011011` at single `0`s: the fields are $11,\ 11,\ 111,\ 11,\ 11$, i.e. the numbers $2, 2, 3, 2, 2$. Reading them in order (state, symbol, new state, new symbol, direction):

$$\delta(q_2,\, \texttt{1}) = (q_{\text{acc}},\, \texttt{1},\, R).$$

(c) `1101101110110` splits into $11,\ 11,\ 111,\ 11,\ \varepsilon$ — the fifth field is **empty**, so it names direction number $0$, and there is no such direction. (Equivalently: the string ends in a separator with nothing after it, so it has only four complete fields where a rule needs five.)

A machine taking $\langle M \rangle$ as input must check for this because **most strings are not valid encodings**, and a decidability claim is about a machine that halts on *every* input — including garbage. This is why every proof in Module 4 opens with "if the input is not a well-formed encoding, reject": it costs one sentence and it is the difference between a decider and a machine with undefined behaviour.

**P2** (a) **Recognizable only, as written.** "Try every derivation in order of length" is an unbounded search: if $w \notin L(G)$ it never terminates. The settling clause is the absence of any stopping rule. (The *language* is nonetheless decidable — a CFG in Chomsky normal form derives a string of length $n$ in exactly $2n-1$ steps, so you can bound the search, and the CYK algorithm does this in $O(n^3)$. Once again, the program was at fault, not the problem.)

(b) **Decidable.** The settling clause is "until no change" combined with a finite state set: each round either marks a new state or stops, and there are $|Q|$ states, so the loop runs at most $|Q|$ times. This decides $E_{\mathrm{DFA}}$'s complement — is $L(D)$ non-empty — and it is exactly the shape of Example 2's argument.

(c) **Neither, as written.** "Run $M$ on every string in order" is worse than an unbounded search: if $M$ loops on the *first* string, the procedure never even reaches the second, so it may fail to accept a machine that accepts some later string. It does not even recognize the intended language. The repair is dovetailing ([Lesson 3.2](03-02-tm-variants-and-robustness.md)): run $M$ for $i$ steps on each of the first $i$ strings, for $i = 1, 2, 3, \dots$ — that yields a genuine **recognizer** for $\{\langle M \rangle : L(M) \ne \varnothing\}$ (and Lesson 4.3 shows it is not decidable).

(d) **Decidable.** The settling clause is the explicit step bound $|w|^2$: the procedure always halts, having simulated a bounded number of steps. Note carefully that this decides a *different* language from $A_{\mathrm{TM}}$ — namely $\{\langle M,w\rangle : M \text{ accepts } w \text{ within } |w|^2 \text{ steps}\}$ — which is the whole point of P3.

**P3** (a) The failing step is **"if it is still running after a long time, output no."** Nothing about a computation's having run for a long time implies it will never halt: a machine may accept on step $10^{100}$. For the rule to be sound you would need, for each $\langle M, w \rangle$, a bound $B(M,w)$ such that *if $M$ accepts $w$ at all, it does so within $B(M,w)$ steps* — **and** you would need to be able to compute $B$. Neither is available, and (c) explains why the second is the deeper problem.

(b) Fix any bound $B$ the colleague names. Let $M_B$ be the machine that, on any input, moves right for exactly $B+1$ steps and then accepts, and take $w = \varepsilon$. Then $\langle M_B, \varepsilon \rangle \in A_{\mathrm{TM}}$ — $M_B$ does accept — but the colleague's procedure gives up at step $B$ and answers no. Since $M_B$ is constructible for every $B$, **no fixed bound works**, and the counterexample is uniform in $B$.

(This is the same shape as [Lesson 1.2's P3](01-02-nfa-and-the-subset-construction.md) and [Lesson 1.5's](01-05-pumping-lemma-and-non-regularity.md) adversary game: the opponent picks the bound first, you construct the witness afterwards.)

(c) The weaker claim confuses **existence** with **computability**, and it also mis-states the decider. Taking the pieces in order:

*The existence is trivially true and useless.* For each individual $\langle M, w\rangle$, either $M$ accepts $w$ at some step $t$ — take $B = t$ — or it never does, and then any $B$ "works" in the sense that rejecting is correct. So a suitable $B$ always exists.

*But a decider must be one machine that works for all inputs.* It has to **compute** $B$ from $\langle M, w \rangle$, and no such computable function exists: if $B(M,w)$ were computable, you could decide $A_{\mathrm{TM}}$ by simulating for $B(M,w)$ steps and answering — and Lesson 4.1 shows $A_{\mathrm{TM}}$ is undecidable. So the assumption is false by contradiction.

*The general moral.* "For every input there exists a correct answer" is true of **every** language whatsoever, decidable or not — it says nothing. Decidability is the demand that a single algorithm produce that answer uniformly. Pointing at the existence of the answer is the most common way a wrong undecidability argument goes wrong.

</details>

## Flashback

**From Lesson 3.1 (Turing machines):** Give a Turing machine deciding $L = \{\, 0^{2^n} : n \ge 0 \,\}$ — the strings of `0`s whose length is a power of two. A high-level description plus the key transitions is enough. Say why it halts on every input, and trace it on $0000$.

<details>
<summary>Solution</summary>

*The algorithm.* A number is a power of two iff you can halve it repeatedly and reach exactly 1, never hitting an odd number greater than 1. So: repeatedly sweep the tape crossing off **every other** `0`. Accept when exactly one `0` survives; reject if a sweep ever finds an odd count greater than one.

*The machine.* Tape alphabet $\{0, x, \sqcup\}$, states $q_1 \ldots q_5$:

$$\delta(q_1,0) = (q_2,\sqcup,R), \qquad \delta(q_1,\sqcup) = (q_{\text{rej}},\sqcup,R)$$
$$\delta(q_2,x) = (q_2,x,R), \qquad \delta(q_2,\sqcup) = (q_{\text{acc}},\sqcup,R), \qquad \delta(q_2,0) = (q_3,x,R)$$
$$\delta(q_3,x) = (q_3,x,R), \qquad \delta(q_3,0) = (q_4,0,R), \qquad \delta(q_3,\sqcup) = (q_5,\sqcup,L)$$
$$\delta(q_4,x) = (q_4,x,R), \qquad \delta(q_4,0) = (q_3,x,R), \qquad \delta(q_4,\sqcup) = (q_{\text{rej}},\sqcup,R)$$
$$\delta(q_5,0) = (q_5,0,L), \qquad \delta(q_5,x) = (q_5,x,L), \qquad \delta(q_5,\sqcup) = (q_2,\sqcup,R)$$

The jobs: $q_1$ blanks the very first cell once, creating a left-end marker. $q_2$ starts a sweep and is where acceptance is tested — reaching a blank with no uncrossed `0` left means exactly one survived. $q_3$ and $q_4$ alternate: $q_3$ has just crossed one off and is looking for the next `0` to *keep*; $q_4$ has just kept one and is looking for the next to *cross*. Hitting a blank in $q_4$ means the count was odd and greater than one — reject. $q_5$ rewinds to the left marker.

*Why it halts.* Each sweep strictly decreases the number of uncrossed `0`s (from $m$ to $\lceil m/2 \rceil$ counting only survivors, and at least one is crossed whenever $m \ge 2$), so after at most $\log_2 m + 1$ sweeps the machine reaches a halting state. Each sweep is a finite left-to-right pass plus a rewind, so every input halts.

*Trace on $0000$ (21 steps, writing $u[q]v$ as in [3.1's P1](03-01-turing-machines.md)):*

$$[q_1]0000 \vdash \sqcup[q_2]000 \vdash \sqcup x[q_3]00 \vdash \sqcup x0[q_4]0 \vdash \sqcup x0x[q_3]\sqcup \vdash \sqcup x0[q_5]x \vdash^* [q_5]\sqcup x0x \vdash \sqcup[q_2]x0x$$
$$\vdash \sqcup x[q_2]0x \vdash \sqcup xx[q_3]x \vdash \sqcup xxx[q_3]\sqcup \vdash^* [q_5]\sqcup xxx \vdash \sqcup[q_2]xxx \vdash^* \sqcup xxx[q_2]\sqcup \vdash \sqcup xxx\sqcup[q_{\text{acc}}]\sqcup.$$

Two sweeps: the first takes four `0`s to two, the second takes two to one, and the third pass finds nothing left to cross. **Accept.**

(Machine-checked: this machine accepts exactly $\{0^{2^n}\}$ and halts on $0^m$ for every $m < 40$; the run lengths on $m = 1, 2, 4, 8, 16$ are $2, 7, 21, 57, 145$ steps.)

</details>

## Connections

- **Backward:** the universal machine is built on [Lesson 3.2's](03-02-tm-variants-and-robustness.md) multitape theorem (three tapes, then collapse to one) and on the fact that enlarging a finite alphabet is free. That every model coincides — the evidence for the thesis — is that lesson's robustness generalized beyond machines.
- **Forward:** Lesson 3.4 uses $U$ to place $A_{\mathrm{TM}}$ among the recognizable languages; Lesson 4.1 uses self-reference — a machine reading $\langle M \rangle$ where $M$ is itself — to prove $A_{\mathrm{TM}}$ undecidable; and every reduction in Lesson 4.2 is a machine that *builds another machine's description* and hands it on, which only makes sense because of the encoding here.
- **Sideways:** $U$ is the stored-program computer, and Example 1's encoding is a machine-code format. The same "programs are data" move is the compiler, the interpreter, `eval`, and the virtual machine; the same self-reference is the quine and the fixed-point theorem of [mathematical-logic](../../mathematical-logic/syllabus.md), where Gödel's incompleteness theorems are the arithmetic twin of Lesson 4.1's undecidability.
