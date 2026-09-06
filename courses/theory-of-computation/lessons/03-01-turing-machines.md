# Automata & Computability · Lesson 3.1: Turing machines

> ⏱ ~15 min · Module 3: Turing Machines & Computability · Builds on: [2.2 (pushdown automata)](02-02-pushdown-automata-and-cfg-equivalence.md), [2.3 (what one stack cannot do)](02-03-cfl-pumping-lemma-and-closure.md) · Unlocks: 3.2 (TM variants & robustness)

## Why this matters

Two walls so far, each broken by adding memory. Finite states could not count, so we added a stack. One stack could not run two comparisons, so now we add the last thing: **a tape you can read, write, and walk in both directions.**

This is the end of the escalation. Not because nobody thought of anything better, but because — as Lesson 3.3 makes precise — every attempt to define "computable" more generously has landed on exactly this class. So the Turing machine is not one model among many; it is *the* definition of algorithm, and everything Module 4 proves impossible is impossible for any machine, any language, any programmer, forever.

The immediate payoff is concrete: the Turing machine decides $\{a^nb^nc^n\}$ in a few lines, and it does so with a technique — mark, sweep, repeat — that is recognizably an algorithm rather than a trick. The immediate cost is new and permanent: a Turing machine can **run forever**. That third outcome is what separates *decidable* from *recognizable* (Lesson 3.4) and it is the crack through which undecidability enters (Lesson 4.1).

## The idea

A Turing machine is a finite control — a DFA, essentially — attached to an infinite tape by a read-write head. At each step it reads the symbol under the head and, based on that and its current state, does three things at once: **write** a symbol in that cell, **move** the head one cell left or right, and **change state**.

That is it. The finite control is the same bounded memory you have had since Lesson 1.1; the tape is the unbounded part. What makes the tape stronger than a stack is that nothing is destroyed by being read. A stack forgets what it pops; a tape keeps everything and lets you come back.

Concretely, that is what unlocks $\{a^nb^nc^n\}$. The reason a PDA failed was that checking $\#a = \#b$ consumed the $a$-count, leaving nothing to check against the $c$s. A Turing machine instead **marks** rather than consumes: cross off one `a`, one `b`, one `c`, walk back to the start, and repeat until nothing is left. The crossings are a record on the tape, and the machine can sweep across them as often as it likes.

The new hazard comes from the same freedom. A DFA reads each symbol once and stops; a PDA the same. A Turing machine chooses where to move, so it can move left and right forever. Its input has three possible fates: **accept**, **reject**, or **loop**. And "loop" is not a bug to be engineered away — it is unavoidable in general, and the whole of Module 4 is about why.

## The formal version

A **Turing machine** is a 7-tuple $M = (Q, \Sigma, \Gamma, \delta, q_0, q_{\text{accept}}, q_{\text{reject}})$ where

- $Q$ is a finite set of states, with $q_{\text{accept}} \ne q_{\text{reject}}$ both in $Q$,
- $\Sigma$ is the **input alphabet**, not containing the blank symbol $\sqcup$,
- $\Gamma \supseteq \Sigma \cup \{\sqcup\}$ is the finite **tape alphabet**,
- $\delta : (Q \setminus \{q_{\text{accept}}, q_{\text{reject}}\}) \times \Gamma \to Q \times \Gamma \times \{L, R\}$ is the transition function,
- $q_0 \in Q$ is the start state.

In words: $\delta(q, a) = (r, b, D)$ means "in state $q$ reading $a$: write $b$, move in direction $D$, enter state $r$." The two halting states have no outgoing transitions — reaching either stops the machine immediately.

Initially the tape holds the input followed by infinitely many blanks, the head is on the leftmost cell, and the state is $q_0$. A move $L$ from the leftmost cell leaves the head where it is.

A **configuration** is written $u\,q\,v$: the tape contents are $uv$ (followed by blanks), the state is $q$, and the head is on the first symbol of $v$. Configuration $C_1$ **yields** $C_2$ if one move takes $M$ from $C_1$ to $C_2$. $M$ **accepts** $w$ if there is a sequence $C_0, C_1, \dots, C_k$ with $C_0$ the start configuration on $w$, each yielding the next, and $C_k$ in state $q_{\text{accept}}$.

Three outcomes and two classes:

- $M$ **recognizes** $A$ if $A = \{w : M \text{ accepts } w\}$. Such an $A$ is **Turing-recognizable** (classically, *recursively enumerable*). On a string outside $A$, $M$ may reject **or loop forever** — either is allowed.
- $M$ is a **decider** if it halts on *every* input — never loops. A language recognized by a decider is **decidable** (classically, *recursive*).

Every decidable language is recognizable. The converse is false, and exhibiting a language that separates them is Lesson 4.1. Hold onto the asymmetry: recognizing is *searching* — you say yes when you find the evidence, and you may search forever if there is none. Deciding is *answering* — you commit to a verdict in finite time.

**High-level descriptions are legitimate.** Nobody writes 7-tuples past the first few examples. A description like "scan right to the first uncrossed `b`; if there is none, reject" is a complete specification, because each such step is obviously implementable with a handful of states and a bounded number of tape symbols. This lesson gives one machine in full detail so that you know the translation is real; afterwards, prose.

## Picture

![Nine successive tape configurations of a Turing machine deciding a-to-the-n b-to-the-n c-to-the-n on the input abc. Each row shows the current state, the four tape cells with the head cell outlined, and a note. The symbols a, b, c are successively overwritten by X, Y, Z and the machine finishes in the accept state.](assets/03-01-fig1.svg)

Compare this to the PDA picture in [Lesson 2.2](02-02-pushdown-automata-and-cfg-equivalence.md), which showed a stack rising and falling. Here nothing rises or falls: the machine **annotates in place**. After the first sweep the tape reads `XYZ`, and every fact the machine needs is still sitting there to be re-read. That is the whole difference between the two models, drawn.

Note also the head's path: right, right, then *left* all the way back, then right again. Two-way motion is the second thing the stack lacked, and it is what makes "repeat until done" expressible at all.

## Worked examples

**Example 1 (mechanical): a decider for $\{a^nb^nc^n : n \ge 0\}$** — the language [Lesson 2.3](02-03-cfl-pumping-lemma-and-closure.md) proved is not context-free.

$\Gamma = \{a,b,c,X,Y,Z,\sqcup\}$, states $q_0 \ldots q_4$ plus the two halting states. Each state has a job:

| state | job |
|---|---|
| $q_0$ | at the left end: start a new sweep by crossing off an `a` |
| $q_1$ | scan right for the first uncrossed `b`; cross it |
| $q_2$ | scan right for the first uncrossed `c`; cross it |
| $q_3$ | walk back left to the crossed region, then re-enter $q_0$ |
| $q_4$ | no `a`s left: verify only crossed symbols remain |

The transitions, in full:

$$\delta(q_0,a) = (q_1, X, R), \quad \delta(q_0,X) = (q_0,X,R), \quad \delta(q_0,Y) = (q_4,Y,R), \quad \delta(q_0,\sqcup) = (q_{\text{accept}}, \sqcup, R),$$
$$\delta(q_1,a) = (q_1,a,R), \quad \delta(q_1,Y) = (q_1,Y,R), \quad \delta(q_1,b) = (q_2,Y,R),$$
$$\delta(q_2,b) = (q_2,b,R), \quad \delta(q_2,Z) = (q_2,Z,R), \quad \delta(q_2,c) = (q_3,Z,L),$$
$$\delta(q_3,s) = (q_3,s,L) \ \text{ for } s \in \{a,b,Y,Z\}, \qquad \delta(q_3,X) = (q_0,X,R),$$
$$\delta(q_4,Y) = (q_4,Y,R), \quad \delta(q_4,Z) = (q_4,Z,R), \quad \delta(q_4,\sqcup) = (q_{\text{accept}}, \sqcup, R).$$

Every pair not listed goes to $q_{\text{reject}}$ — which is how the machine catches wrong order (a `c` before a `b`, say) and wrong counts (running out of `b`s while `a`s remain). The Picture is the run on $abc$; the run on $aabbcc$ takes 23 steps and two sweeps.

Two things to notice. First, **it is a decider**: the head sweeps right then left, and each full sweep crosses off exactly one symbol of each kind, so the number of sweeps is bounded by $n$ and the machine always halts. Second, the **cost** is quadratic — running it out gives exactly $4n^2 + 3n + 1$ steps on $a^nb^nc^n$ (verified for $n \le 11$), because each of the $n$ sweeps traverses a tape of length $3n$. That is the price of a one-tape machine with no random access: the walk back is pure overhead, and Lesson 3.2's two-tape variant removes it.

(Machine-checked: this machine accepts exactly $\{a^nb^nc^n\}$ and halts on every string over $\{a,b,c\}$ of length $\le 7$.)

**Example 2 (why you'd care): decider versus recognizer, concretely.** Consider

$$\mathit{COMP} = \{\, 1^x : x \ge 2 \text{ and } x \text{ is composite} \,\}$$

(inputs in unary). Here is a machine $M_1$ for it:

> On input $1^x$: for $d = 2, 3, 4, 5, \dots$ in turn, test whether $d$ divides $x$. If it does and $d < x$, **accept**. Otherwise try the next $d$.

$M_1$ **recognizes** $\mathit{COMP}$: if $x$ is composite it has a proper divisor, the search reaches it, and the machine accepts. But $M_1$ is **not a decider** — on a prime input it tries $d = 2, 3, 4, \dots$ forever and never halts. It never says "no"; it just stops saying anything.

The repair here is obvious: stop at $d > \sqrt{x}$ and reject. Call that $M_2$; it halts on every input, so $\mathit{COMP}$ is **decidable**, and $M_1$ was merely a badly written program for a perfectly decidable language.

Now hold both thoughts, because the distinction that matters is between them:

- $M_1$ vs $M_2$ is about the **machine**. A recognizer can sometimes be upgraded to a decider by finding a bound on the search.
- Recognizable vs decidable is about the **language**. Some languages are recognizable and *no* machine for them can be upgraded, because no such bound exists — not "we have not found one," but *provably none*.

The halting problem is the second kind (Lesson 4.1), and $\{\langle M, w\rangle : M$ accepts $w\}$ is the canonical example: you can always simulate, so you can recognize; you can never bound the simulation, so you cannot decide. **Every undecidability result in this course is the gap between those two bullets.**

## Watch out

- **You might think** rejecting and looping amount to the same thing, since neither accepts — **but actually** the difference is the entire subject. A rejection is an *answer* delivered in finite time; a loop is the absence of one, and an observer cannot tell a loop from a computation that is merely slow. That indistinguishability is what makes the halting problem hard, and it is why "recognizable" is a genuinely weaker property than "decidable."
- **You might think** the tape being infinite means the machine has infinite memory available at any moment — **but actually** after $t$ steps it has visited at most $t+1$ cells, so its memory use is always finite and grows only as fast as its running time. "Infinite tape" means *unbounded*, not *actually infinite*; it is the same idealization as an unbounded stack in Lesson 2.2.
- **You might think** the formal 7-tuple is what you must produce to specify a machine — **but actually** a high-level description is a complete proof of existence, provided each step is evidently implementable with finitely many states and tape symbols. Writing $\delta$ out is a check that the translation is mechanical, done once (Example 1) and thereafter assumed.

## One-liner

> Give the finite control a tape it can write on and walk back over, and it can mark instead of consume — which is exactly the power a stack lacked, bought at the price of a third outcome, running forever.

## Problems

**P1 (🟢)** The following machine decides $\{0^n1^n : n \ge 0\}$ by crossing off. States $s$ (start), $r_1$, $r_2$, $s_2$; tape alphabet $\{0,1,X,Y,\sqcup\}$; every unlisted pair goes to $q_{\text{reject}}$.

$$\delta(s,0) = (r_1,X,R), \quad \delta(s,Y) = (s_2,Y,R), \quad \delta(s,\sqcup) = (q_{\text{accept}},\sqcup,R),$$
$$\delta(r_1,0) = (r_1,0,R), \quad \delta(r_1,Y) = (r_1,Y,R), \quad \delta(r_1,1) = (r_2,Y,L),$$
$$\delta(r_2,0) = (r_2,0,L), \quad \delta(r_2,Y) = (r_2,Y,L), \quad \delta(r_2,X) = (s,X,R),$$
$$\delta(s_2,Y) = (s_2,Y,R), \quad \delta(s_2,\sqcup) = (q_{\text{accept}},\sqcup,R).$$

(a) Write the full configuration sequence on $0011$. (b) Do the same for $001$ and say exactly which move sends it to $q_{\text{reject}}$. (c) In one line, say what each of $X$ and $Y$ records.

**P2 (🟡)** Give a Turing machine deciding $\{\, w \# w : w \in \{0,1\}^* \,\}$. A high-level description is enough, but it must be precise about (i) how the machine remembers which symbol it is looking for while crossing the `#`, and (ii) how it returns to the correct position on the left. Then state what happens on inputs with zero or two `#`s.

**P3 (🔴)** For each machine, say whether it is a **decider**, a **recognizer that is not a decider as written**, or **neither**. Justify in one or two sentences, and for the middle case say whether a decider for the same language exists.

(a) $M_a$: on input $1^x$, try $d = 2,3,4,\dots$; accept if $d$ divides $x$ with $1 < d < x$.
(b) $M_b$: on input $w \in \{0,1\}^*$, sweep right to the first blank counting `1`s mod 2; accept if even, reject if odd.
(c) $M_c$: on input $w$, move right one cell, then left one cell, and repeat forever; never enter a halting state.
(d) $M_d$: on input $\langle p \rangle$ encoding a polynomial $p$ in one variable with integer coefficients, try integer values $x = 0, 1, -1, 2, -2, \dots$ and accept if $p(x) = 0$.

Then: the Example 1 machine takes $4n^2 + 3n + 1$ steps on $a^nb^nc^n$. Derive the $n^2$ from the algorithm's structure in one sentence, and say what a second tape would buy you.

<details>
<summary>Solutions</summary>

**P1** (a) On $0011$ — 13 steps:

$$[s]0011 \vdash X[r_1]011 \vdash X0[r_1]11 \vdash X[r_2]0Y1 \vdash [r_2]X0Y1 \vdash X[s]0Y1 \vdash XX[r_1]Y1$$
$$\vdash XXY[r_1]1 \vdash XX[r_2]YY \vdash X[r_2]XYY \vdash XX[s]YY \vdash XXY[s_2]Y \vdash XXYY[s_2]\sqcup \vdash XXYY\sqcup[q_{\text{accept}}]\sqcup.$$

(Notation: $u[q]v$ means state $q$ with the head on the first symbol of $v$.) **Accept.**

(b) On $001$ — 7 steps to a dead end:

$$[s]001 \vdash X[r_1]01 \vdash X0[r_1]1 \vdash X[r_2]0Y \vdash [r_2]X0Y \vdash X[s]0Y \vdash XX[r_1]Y \vdash XXY[r_1]\sqcup.$$

The rejecting move is the last one: the machine is in $r_1$ — hunting rightward for a `1` to pair with the `0` it just crossed — and finds $\sqcup$ instead. $\delta(r_1, \sqcup)$ is unlisted, so it goes to $q_{\text{reject}}$. In words: **it ran out of `1`s while an uncrossed `0` was still owed one.**

(c) $X$ records "a `0` that has already been matched"; $Y$ records "a `1` that has already been matched." Together they mark off matched pairs, and $s_2$'s job is to confirm that after the last `0` is crossed nothing remains but $Y$s — which catches surplus `1`s.

**P2** *The machine.* On input $u$:

1. If $u$ contains no `#`, reject; if it contains two or more, reject. (Both checks are a single left-to-right sweep with a two-state counter — "seen none / seen one / seen two" — in the finite control.)
2. Scan right from the left end to the first symbol that is not already crossed. If it is `#`, go to step 4.
3. That symbol is a `0` or a `1`. **Remember which by entering a different state** — this is (i): the finite control has one state for "looking for a `0`" and one for "looking for a `1`," which is legal because there are only two possibilities, a bounded amount of information. Cross the symbol off — write $x$ for a crossed `0`, $y$ for a crossed `1` — then scan right past the `#` to the first uncrossed symbol on the right side. If it is missing, or if it does not match the remembered symbol, reject. Otherwise cross it off (write $v$) and go to step 3's return: **scan left until the head reads an $x$ or $y$, then move one cell right** — this is (ii). Because the left side is crossed off strictly left to right, the crossed cells there form a prefix, so the first $x$ or $y$ met while walking left is the last one crossed, and one step right lands exactly on the next uncrossed left symbol. Return to step 2.
4. The left side is exhausted. Scan right from the `#`: if every remaining cell is a $v$ until the blank, accept; if any uncrossed `0` or `1` remains, reject (the right side is longer).

*Why the two marker families.* Using distinct marks for the left side ($x, y$) and the right side ($v$) is what makes step (ii)'s "walk left to the first mark" unambiguous. With one mark alphabet the machine could not tell which side of the `#` it was on while walking back.

*The `#` cases.* Zero `#`s: rejected at step 1, since $w\#w$ requires exactly one separator. Two or more: also rejected at step 1 — note that without this check a string like $0\#0\#0$ could confuse step 3's rightward scan.

(Machine-checked: an implementation of this design accepts exactly $\{w\#w\}$ and halts on every string over $\{0,1,\#\}$ of length $\le 7$, taking exactly $2(|w|+1)^2$ steps on an accepted input.)

**P3**

(a) **Recognizer, not a decider as written.** On a prime $x$ the search runs forever. But a decider exists: stop at $d > \sqrt{x}$ and reject, since a composite $x$ always has a divisor at most $\sqrt{x}$. So the language is decidable and only the *program* was at fault. (This is Example 2.)

(b) **Decider.** One left-to-right sweep, terminating at the first blank, then a halt either way. It halts on every input, in $|w|+2$ steps.

(c) **Neither.** It halts on nothing, so it recognizes $\varnothing$ — and $\varnothing$ *is* recognizable (and decidable), so strictly this machine does recognize a language. But it is not a decider, and it is a recognizer only in the degenerate sense that its language is empty. The useful answer: **it is a recognizer for $\varnothing$ and not a decider**, and the point is that "recognizes $L$" constrains the machine only on strings *in* $L$ — a machine that never accepts anything is a perfectly good recognizer for the empty language.

(d) **Recognizer, not a decider as written** — and here the situation is genuinely different from (a). The machine accepts exactly the polynomials with an integer root, so it recognizes the language; on a polynomial with no root it searches forever. For *one-variable* polynomials a decider does exist (a root of $\sum a_ix^i$ divides $a_0$ over the integers, so the search is bounded — the rational root theorem). But the same machine for **multivariable** polynomials recognizes a language that is **undecidable**: that is Hilbert's tenth problem, resolved negatively by Matiyasevich in 1970. Same program shape, and whether it can be repaired depends on a deep theorem, not on the code.

*The cost.* The algorithm performs one sweep per `a`, so $n$ sweeps; each sweep walks right to a `c` and back to the left end across a tape of length $3n$, so $\Theta(n)$ steps per sweep. Product: $\Theta(n^2)$, matching $4n^2 + 3n + 1$.

A **second tape** removes the walking. Copy the `b`s to tape 2 and the `c`s to tape 3 (or use one extra tape and two passes), then advance heads in parallel and compare — a constant number of passes, so $\Theta(n)$ total. The general fact is [Lesson 3.2](03-02-tm-variants-and-robustness.md)'s: extra tapes never change *what* is computable, but they can change the running time by a polynomial factor, and it is exactly this that makes "which model?" matter for [computational-complexity](../../computational-complexity/syllabus.md) and not at all for this course.

</details>

## Flashback

**From Lesson 2.2 (Pushdown automata):** Design a PDA recognizing $\{\, a^i b^j : i > j \ge 0 \,\}$. Give $\delta$, say in one line what each state is for, and trace $aaab$. Then say in one sentence which part of the machine enforces the strict inequality.

<details>
<summary>Solution</summary>

States $q$ (reading `a`s), $p$ (reading `b`s), $f$ (accept); $\Gamma = \{A, \$\}$; initial stack $\$$; $F = \{f\}$.

$$\delta(q,a,\varepsilon) = \{(q,A)\}, \qquad \delta(q,\varepsilon,\varepsilon) = \{(p,\varepsilon)\}, \qquad \delta(p,b,A) = \{(p,\varepsilon)\}, \qquad \delta(p,\varepsilon,A) = \{(f,A)\}.$$

- $q$ — push one $A$ per `a`;
- $p$ — pop one $A$ per `b`, entered by a guessed $\varepsilon$-move;
- $f$ — accept.

Trace $aaab$:

$$(q,aaab,\$) \vdash (q,aab,A\$) \vdash (q,ab,AA\$) \vdash (q,b,AAA\$) \vdash (p,b,AAA\$) \vdash (p,\varepsilon,AA\$) \vdash (f,\varepsilon,AA\$). \quad \textbf{Accept.}$$

**What enforces $i > j$:** the last transition, $\delta(p,\varepsilon,A) = \{(f,A)\}$, requires an $A$ on top of the stack to fire. So acceptance demands at least one $A$ *left over* after all the `b`s have been popped — i.e. strictly more `a`s than `b`s. Change that rule to $\delta(p,\varepsilon,\$)$ and you get $i = j$; offer both and you get $i \ge j$. **The accept condition is where the inequality lives**, which is the general design point: the stack counts, and the final test decides what counting result is acceptable.

(Machine-checked against the definition on every string over $\{a,b\}$ of length $\le 9$.)

</details>

## Connections

- **Backward:** the finite control is [Lesson 1.1's](01-01-deterministic-finite-automata.md) DFA unchanged, and the crossing-off technique is what [Lesson 2.3](02-03-cfl-pumping-lemma-and-closure.md) proved a single stack cannot do. The two-stack remark at the end of [Lesson 2.2](02-02-pushdown-automata-and-cfg-equivalence.md) is the shortest bridge: two stacks *are* a tape, split at the head.
- **Forward:** Lesson 3.2 shows extra tapes and nondeterminism add no power; Lesson 3.3 encodes a machine as a string so that one machine can run another; Lesson 3.4 makes the decider/recognizer gap of Example 2 into a theorem, and Lesson 4.1 exhibits a language on the wrong side of it.
- **Sideways:** the quadratic cost of the one-tape machine is the first appearance of a theme [computational-complexity](../../computational-complexity/syllabus.md) is built on — the model you choose changes running time by polynomial factors, which is exactly why $\mathrm{P}$ is defined up to polynomials. The mark-and-sweep pattern of Example 1 is also, literally, how a mark-and-sweep garbage collector works in [operating-systems](../../operating-systems/syllabus.md).
