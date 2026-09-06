# Automata & Computability · Lesson 4.2: Reducibility & mapping reductions

> ⏱ ~15 min · Module 4: Undecidability & Reductions · Builds on: [3.4 (decidable vs recognizable)](03-04-decidable-vs-turing-recognizable.md), [4.1 (the halting problem)](04-01-diagonalization-and-the-halting-problem.md) · Unlocks: 4.3 (Rice's theorem)

## Why this matters

Lesson 4.1 was hard work for one theorem. Doing that again for every problem you meet would be unbearable, and it is unnecessary: once you have **one** undecidable language, you get the rest by **translation**.

The move is this. If you can mechanically turn any instance of problem $A$ into an equivalent instance of problem $B$, then a solver for $B$ would give you a solver for $A$. So if $A$ is known impossible, $B$ is too. One diagonalization, then a lifetime of reductions.

This is the single most transferable technique in the whole of computer science. Change "impossible" to "hard" and the identical argument is NP-completeness ([Lesson 4.4](04-04-a-first-look-at-p-vs-np.md) and [computational-complexity](../../computational-complexity/syllabus.md)); change it to "insecure" and it is the security reduction that underwrites [cryptography](../../cryptography/syllabus.md). Learning to build a reduction — and, more often, to spot that someone has built one **backwards** — is the durable skill in this lesson.

## The idea

To show $B$ is at least as hard as $A$, write a **translator**: a program $f$ that reads an instance of $A$ and outputs an instance of $B$ with the same answer.

$$w \in A \quad\Longleftrightarrow\quad f(w) \in B.$$

Given such an $f$ and a solver for $B$, you solve $A$ by: translate, then ask. That pipeline is a solver for $A$. So if $A$ has no solver, neither does $B$.

Two things trip everyone up, and they are worth stating before any formalism.

**The direction.** "Reduce $A$ to $B$" means *$A$ is the problem you already know about* and $B$ is the one you are learning about. To prove $B$ **undecidable**, reduce a known-undecidable $A$ **to** $B$ — write $A \le_m B$. Doing it the other way, $B \le_m A$, tells you only that $B$ is no harder than something impossible, which is no information at all. The mnemonic that actually works: **the arrow points from what you know to what you want to know.**

**Both directions of the iff.** $f$ must send yes-instances to yes-instances *and* no-instances to no-instances. A translator that maps everything into $B$ satisfies the first half and is useless. This is where wrong proofs usually hide, because the yes-direction is the one you think about while designing $f$ and the no-direction is the one you forget to check.

And one construction to get used to, because every reduction in this module uses it: **$f$ builds a new machine's source code.** Given $\langle M, w\rangle$, the translator writes out the description of some *other* machine $M'$ tailored to $M$ and $w$ — and it does this without running anything. Writing code is a finite, mechanical text operation; that is the whole reason $f$ is computable.

## The formal version

A function $f : \Sigma^* \to \Sigma^*$ is **computable** if some Turing machine, started on $w$, halts with just $f(w)$ on its tape.

Language $A$ is **mapping reducible** to $B$, written $A \le_m B$, if there is a computable $f$ with

$$w \in A \iff f(w) \in B \qquad \text{for every } w \in \Sigma^*.$$

$f$ is the **reduction**. Note it need not be injective, surjective, or invertible; it need only preserve membership in both directions.

**Theorem (transfer).** Suppose $A \le_m B$. Then:

1. $B$ decidable $\Rightarrow$ $A$ decidable. *(Decide $A$: on $w$, compute $f(w)$ — halts, since $f$ is computable — then run $B$'s decider on it and copy the answer.)*
2. **$A$ undecidable $\Rightarrow$ $B$ undecidable.** *(Contrapositive of 1 — this is the one you use.)*
3. $B$ recognizable $\Rightarrow$ $A$ recognizable, and hence **$A$ unrecognizable $\Rightarrow$ $B$ unrecognizable.**
4. $A \le_m B$ **iff** $\overline{A} \le_m \overline{B}$, with the same $f$. *(The definition is symmetric in the two directions of the iff.)*

Point 4 is what lets you handle problems whose natural reduction lands on a complement, and it is used in Example 2.

**Two standard undecidable languages.** Write $A_{\mathrm{TM}} = \{\langle M,w\rangle : M \text{ accepts } w\}$, undecidable by [Lesson 4.1](04-01-diagonalization-and-the-halting-problem.md). Then:

$$\mathit{HALT}_{\mathrm{TM}} = \{\langle M,w\rangle : M \text{ halts on } w\}, \qquad E_{\mathrm{TM}} = \{\langle M\rangle : L(M) = \varnothing\},$$
$$EQ_{\mathrm{TM}} = \{\langle M_1,M_2\rangle : L(M_1) = L(M_2)\}, \qquad \mathit{REGULAR}_{\mathrm{TM}} = \{\langle M\rangle : L(M) \text{ is regular}\}$$

are all undecidable — the first two in the examples below, the last two by the same pattern (or by [Lesson 4.3's](04-03-rices-theorem-and-more-undecidable-problems.md) Rice's theorem in one line). $EQ_{\mathrm{TM}}$ is worse still: neither it nor its complement is recognizable, so it sits strictly outside both rings of [Lesson 3.4's](03-04-decidable-vs-turing-recognizable.md) picture.

**The reduction template.** Almost every reduction in this module follows one [template](../reference.md#the-reduction-template):

> **$f$ = on input $\langle M, w\rangle$:** construct the description of a machine $M'$ that behaves as follows *(here describe $M'$, which typically ignores or filters its own input and runs $M$ on $w$)*. Output $\langle M', \dots \rangle$. **Do not run $M'$.**

The last sentence is not a formality. $f$ must halt on every input, so it may only *write* $M'$'s description — a text-manipulation job — never execute it.

## Picture

![Two large rounded rectangles, each labelled sigma-star, one holding a region A and one holding a region B. A blue arrow labelled f runs from the A region to the B region; a coral arrow labelled f runs from the outside-A region to the outside-B region. Below, a four-box pipeline: input w, compute f of w, run B's decider, answer the same.](assets/04-02-fig1.svg)

The two arrows are the two halves of the iff, and the caption is the warning: keeping only the blue one would let $f$ dump every input into $B$, which proves nothing about $A$. In practice, when you check a reduction you have written, **check the coral arrow first** — the blue one is usually true by construction, and the coral one is where the bug is.

The pipeline below is the transfer theorem drawn as a program. Nothing in it can loop: $f$ halts because it is computable, $B$'s decider halts because it is a decider. That is why the composite is a decider for $A$, and therefore why the existence of $B$'s decider is impossible when $A$ is undecidable.

## Worked examples

**Example 1 (mechanical): $A_{\mathrm{TM}} \le_m \mathit{HALT}_{\mathrm{TM}}$.**

We want a computable $f$ with $\langle M,w\rangle \in A_{\mathrm{TM}} \iff f(\langle M,w\rangle) \in \mathit{HALT}_{\mathrm{TM}}$. The mismatch to fix: $M$ might halt on $w$ by *rejecting*, which is a yes for $\mathit{HALT}_{\mathrm{TM}}$ but a no for $A_{\mathrm{TM}}$. So build a machine that turns rejection into looping.

> **$f$ = on input $\langle M,w\rangle$:** if it is not a valid encoding, output some fixed string not in $\mathit{HALT}_{\mathrm{TM}}$. Otherwise construct
>
> > **$M'$ = on input $x$:** run $M$ on $x$. If $M$ **accepts**, accept. If $M$ **rejects**, deliberately enter an infinite loop.
>
> and output $\langle M', w\rangle$.

*$f$ is computable.* Producing $\langle M'\rangle$ is a text edit on $\langle M\rangle$: copy the transition table and redirect every transition into $q_{\text{reject}}$ to a new two-state spin loop instead. Finite, mechanical, and it never runs $M$.

*Both directions.*

- If $M$ accepts $w$, then $M'$ on $w$ runs $M$ on $w$, sees it accept, and accepts. So $M'$ halts on $w$: $\langle M',w\rangle \in \mathit{HALT}_{\mathrm{TM}}$. ✓
- If $M$ does **not** accept $w$, there are two cases and both must be checked. If $M$ rejects $w$, then $M'$ enters its spin loop and does not halt. If $M$ loops on $w$, then $M'$ loops too, since it is simulating $M$. Either way $\langle M',w\rangle \notin \mathit{HALT}_{\mathrm{TM}}$. ✓

So $A_{\mathrm{TM}} \le_m \mathit{HALT}_{\mathrm{TM}}$, and by transfer (2), $\mathit{HALT}_{\mathrm{TM}}$ is undecidable. $\blacksquare$

Notice how the no-direction needed a **case split** on the two ways of "not accepting." That is the standard place a reduction fails, and it is exactly what the coral arrow in the Picture is asking you to verify.

**Example 2 (why you'd care): $E_{\mathrm{TM}}$, and reducing to a complement.**

$E_{\mathrm{TM}} = \{\langle M\rangle : L(M) = \varnothing\}$ — "does this program ever accept anything?" The practical version is dead-code detection: *is this branch reachable on any input?*

The natural translation from $A_{\mathrm{TM}}$ makes a machine whose language is non-empty exactly when $M$ accepts $w$ — which is membership in $\overline{E_{\mathrm{TM}}}$, not $E_{\mathrm{TM}}$. That is fine; transfer property (4) handles it.

> **$f$ = on input $\langle M,w\rangle$:** construct
>
> > **$M_1$ = on input $x$:** if $x \ne w$, **reject**. If $x = w$, run $M$ on $w$ and accept iff $M$ accepts.
>
> and output $\langle M_1\rangle$.

Note that $M_1$ has $w$ **hard-coded** — $f$ writes $w$ into $M_1$'s description as a constant to compare against. This is the standard trick, and it is why the constructed machine can ignore its own input.

*The language of $M_1$.* Every $x \ne w$ is rejected outright, so $L(M_1) \subseteq \{w\}$. And $w \in L(M_1)$ iff $M$ accepts $w$. Therefore

$$L(M_1) = \begin{cases} \{w\} & \text{if } M \text{ accepts } w,\\ \varnothing & \text{otherwise.}\end{cases}$$

So $\langle M,w\rangle \in A_{\mathrm{TM}} \iff \langle M_1\rangle \notin E_{\mathrm{TM}} \iff \langle M_1\rangle \in \overline{E_{\mathrm{TM}}}$, i.e. $A_{\mathrm{TM}} \le_m \overline{E_{\mathrm{TM}}}$. By transfer (2), $\overline{E_{\mathrm{TM}}}$ is undecidable; and decidability is closed under complement ([Lesson 3.4](03-04-decidable-vs-turing-recognizable.md) — swap a decider's halting states), so **$E_{\mathrm{TM}}$ is undecidable**. $\blacksquare$

A bonus from the same reduction, using transfer (3). $\overline{A_{\mathrm{TM}}}$ is unrecognizable ([Lesson 3.4](03-04-decidable-vs-turing-recognizable.md)), and applying (4) to the reduction above gives $\overline{A_{\mathrm{TM}}} \le_m E_{\mathrm{TM}}$ — so **$E_{\mathrm{TM}}$ is not even Turing-recognizable.** You cannot write a program that reliably confirms "this code is dead," even given forever. (Its complement *is* recognizable: dovetail $M$ over all inputs and accept when any accepts.)

That asymmetry is exactly what real tooling exhibits. A coverage tool can prove a line **is** reachable — by exhibiting an input that reaches it — but no tool can certify in general that a line is unreachable. So dead-code warnings are heuristics, and they are heuristics for a proved reason.

## Watch out

- **You might think** it does not much matter which way round you write the reduction — **but actually** the two directions say opposite things, and only one of them is a proof. $A \le_m B$ with $A$ undecidable shows **$B$ is undecidable**; $B \le_m A$ with $A$ undecidable shows *nothing whatsoever* about $B$ (every decidable language reduces to $A_{\mathrm{TM}}$). This is P3, and it is the single most common error in the subject.
- **You might think** the reduction $f$ may simulate the machine it is given — **but actually** $f$ must halt on every input, and simulating $M$ risks not halting. $f$ is a **compiler**, not an interpreter: it reads $\langle M\rangle$ and writes $\langle M'\rangle$, and every reduction in this lesson is a text transformation performed without running anything.
- **You might think** showing $w \in A \Rightarrow f(w) \in B$ is the substance and the converse is bookkeeping — **but actually** the converse is where reductions break. Example 1's no-direction needed a case split on *reject* versus *loop*; a translator that only guarantees the forward implication can map all of $\Sigma^*$ into $B$ and prove nothing.

## One-liner

> Do the hard work once, then translate: if every instance of a known-impossible problem can be mechanically rewritten as an instance of yours, yours is impossible too — and the arrow always points from what you know to what you are asking about.

## Problems

**P1 (🟢)** For each proposed $f$, decide whether it is a valid mapping reduction from $A_{\mathrm{TM}}$ to the stated language $B$. If not, say which requirement fails and give a concrete instance where it fails.

(a) $B = \mathit{HALT}_{\mathrm{TM}}$; $f(\langle M,w\rangle) = \langle M,w\rangle$ (the identity).
(b) $B = \mathit{HALT}_{\mathrm{TM}}$; $f(\langle M,w\rangle) = \langle M', w\rangle$ where $M'$ runs $M$ on its input and loops if $M$ rejects (Example 1).
(c) $B = A_{\mathrm{TM}}$; $f(\langle M,w\rangle) = $ "simulate $M$ on $w$; if it accepts output $\langle M_{\text{yes}}, \varepsilon\rangle$, else output $\langle M_{\text{no}}, \varepsilon\rangle$," where $M_{\text{yes}}$ accepts everything and $M_{\text{no}}$ rejects everything.

**P2 (🟡)** Let

$$L_{01} = \{\, \langle M\rangle : M \text{ is a TM that accepts the string } 01 \,\}.$$

(a) Give a mapping reduction $A_{\mathrm{TM}} \le_m L_{01}$, describing the machine your $f$ constructs. (b) Verify **both** directions of the iff. (c) Conclude that $L_{01}$ is undecidable, and say in one sentence why $f$ is computable.

**P3 (🔴)** A colleague submits this proof.

> **Claim.** $E_{\mathrm{TM}} = \{\langle M\rangle : L(M) = \varnothing\}$ is undecidable.
> **Proof.** We reduce $E_{\mathrm{TM}}$ to $A_{\mathrm{TM}}$. Given $\langle M\rangle$, let $f(\langle M\rangle) = \langle M, \varepsilon\rangle$. If we had a decider for $A_{\mathrm{TM}}$ we could ask whether $M$ accepts $\varepsilon$. Since $A_{\mathrm{TM}}$ is undecidable, $E_{\mathrm{TM}}$ is undecidable. $\square$

(a) The conclusion is true but the proof is wrong in **two** independent ways. Identify both.
(b) For the direction error, state precisely what $E_{\mathrm{TM}} \le_m A_{\mathrm{TM}}$ would establish if it held, and why that is not what was wanted.
(c) For the $f$ error, give a concrete $M$ on which the claimed equivalence $\langle M \rangle \in E_{\mathrm{TM}} \iff \langle M,\varepsilon\rangle \in A_{\mathrm{TM}}$ fails.
(d) State the general check that would have caught both errors before writing a word of proof.

<details>
<summary>Solutions</summary>

**P1** (a) **Not a valid reduction.** $f$ is certainly computable (it is the identity), and the forward direction holds: if $M$ accepts $w$ then $M$ halts on $w$. But the **backward** direction fails: $\langle M,w\rangle$ can be in $\mathit{HALT}_{\mathrm{TM}}$ without being in $A_{\mathrm{TM}}$.

Concrete instance: let $M_{\text{rej}}$ be the machine that immediately rejects every input, and $w = \varepsilon$. Then $\langle M_{\text{rej}},\varepsilon\rangle \in \mathit{HALT}_{\mathrm{TM}}$ (it halts, by rejecting) but $\langle M_{\text{rej}},\varepsilon\rangle \notin A_{\mathrm{TM}}$ (it does not accept). So $f(w) \in B$ does not imply $w \in A$.

(b) **Valid** — this is Example 1. $f$ is computable (a text edit on $\langle M\rangle$, redirecting transitions into $q_{\text{reject}}$ to a spin loop); the forward direction holds because $M'$ accepts $w$ whenever $M$ does; and the backward direction holds because when $M$ rejects, $M'$ spins, and when $M$ loops, $M'$ loops.

(c) **Not a valid reduction** — $f$ is **not computable**. It says "simulate $M$ on $w$," which does not halt when $M$ loops on $w$. A reduction must be a total computable function, halting on *every* input, and this one is undefined exactly on the instances that make the problem hard. (Note the equivalence it claims would be perfectly correct if $f$ were computable; correctness of the iff and computability of $f$ are independent requirements, and this one satisfies only the first.)

**P2** (a) **$f$ = on input $\langle M,w\rangle$:** if it is not a valid encoding, output the description of a machine that rejects everything. Otherwise construct

> **$N$ = on input $x$:** ignore $x$ entirely. Run $M$ on $w$. If $M$ accepts, accept.

and output $\langle N\rangle$. ($w$ and $\langle M\rangle$ are hard-coded into $N$'s description by $f$.)

(b) The language of $N$: since $N$ ignores its input, it behaves identically on every $x$. So

$$L(N) = \begin{cases} \Sigma^* & \text{if } M \text{ accepts } w,\\ \varnothing & \text{otherwise (}N\text{ loops or rejects, whatever }x\text{ is)}.\end{cases}$$

- **Forward.** If $M$ accepts $w$, then $L(N) = \Sigma^* \ni 01$, so $N$ accepts $01$ and $\langle N\rangle \in L_{01}$. ✓
- **Backward.** If $M$ does not accept $w$ — whether it rejects or loops — then $N$ never accepts anything, so in particular it does not accept $01$, and $\langle N\rangle \notin L_{01}$. ✓

(Both cases of "does not accept" are covered, which is the check Example 1 flagged.)

(c) By transfer (2), since $A_{\mathrm{TM}}$ is undecidable and $A_{\mathrm{TM}} \le_m L_{01}$, **$L_{01}$ is undecidable**.

$f$ is computable because building $\langle N\rangle$ is pure text manipulation: emit a fixed preamble that erases the input tape and writes $w$, followed by a copy of $\langle M\rangle$'s transition table. It never executes $M$, so it always halts. $\blacksquare$

**P3** (a) Two independent errors:

1. **The direction is backwards.** The proof establishes (or tries to) $E_{\mathrm{TM}} \le_m A_{\mathrm{TM}}$, whereas showing $E_{\mathrm{TM}}$ undecidable requires reducing a known-undecidable language **to** $E_{\mathrm{TM}}$, i.e. $A_{\mathrm{TM}} \le_m E_{\mathrm{TM}}$ (or, as in Example 2, to its complement).
2. **The function $f$ is not a reduction anyway.** $f(\langle M\rangle) = \langle M,\varepsilon\rangle$ does not satisfy $\langle M\rangle \in E_{\mathrm{TM}} \iff \langle M,\varepsilon\rangle \in A_{\mathrm{TM}}$ — in fact the two conditions are close to opposites, since $L(M) = \varnothing$ implies $M$ does *not* accept $\varepsilon$.

(b) $E_{\mathrm{TM}} \le_m A_{\mathrm{TM}}$ would establish only that **$E_{\mathrm{TM}}$ is no harder than $A_{\mathrm{TM}}$** — that a decider for $A_{\mathrm{TM}}$ would yield one for $E_{\mathrm{TM}}$. Since no decider for $A_{\mathrm{TM}}$ exists, the implication has a false antecedent and is vacuous. Worse, the relation is nearly free: **every** decidable language reduces to $A_{\mathrm{TM}}$ (map yes-instances to some fixed member and no-instances to some fixed non-member), so "$X \le_m A_{\mathrm{TM}}$" is compatible with $X$ being trivially easy. It carries no lower-bound information at all.

(c) Take $M_{\text{all}}$, the machine that accepts every input immediately. Then $L(M_{\text{all}}) = \Sigma^* \ne \varnothing$, so $\langle M_{\text{all}}\rangle \notin E_{\mathrm{TM}}$ — but $M_{\text{all}}$ does accept $\varepsilon$, so $\langle M_{\text{all}}, \varepsilon\rangle \in A_{\mathrm{TM}}$. The claimed iff fails: false on the left, true on the right.

(Equally, take $M_{\text{rej}}$ rejecting everything: $\langle M_{\text{rej}}\rangle \in E_{\mathrm{TM}}$ but $\langle M_{\text{rej}},\varepsilon\rangle \notin A_{\mathrm{TM}}$ — the iff fails in the other direction too.)

(d) **Before writing the proof, state the two ends explicitly:** *"I know $X$ is undecidable. I want to show $Y$ is undecidable. So I must build $f$ taking an instance of $X$ to an instance of $Y$, and verify $x \in X \iff f(x) \in Y$ in both directions."*

Writing that sentence catches error 1 immediately — the colleague's $f$ takes an instance of $E_{\mathrm{TM}}$ (the unknown) and produces an instance of $A_{\mathrm{TM}}$ (the known), which is the wrong way round. And it catches error 2, because it forces you to write the iff down and test it, at which point $M_{\text{all}}$ falls out in seconds. **Both failures are visible before any reasoning, purely from the types of $f$ and the statement of the equivalence.**

</details>

## Flashback

**From Lesson 3.4 (Decidable vs Turing-recognizable):** Let $A$ and $B$ be languages over $\Sigma$.

(a) Prove that if $A$ and $B$ are both **decidable**, so are $A \cup B$, $A \cap B$ and $\overline{A}$.
(b) Prove that if $A$ and $B$ are both **Turing-recognizable**, so are $A \cup B$ and $A \cap B$.
(c) Show that the recognizable languages are **not** closed under complement, and say which of your constructions in (a) breaks.

<details>
<summary>Solution</summary>

(a) Let $D_A$ and $D_B$ be deciders.

- $A \cup B$: on $w$, run $D_A$; if it accepts, accept; otherwise run $D_B$ and copy its answer. Both calls terminate, so this halts, and it accepts iff $w$ is in one of them.
- $A \cap B$: run $D_A$; if it rejects, reject; otherwise run $D_B$ and copy its answer.
- $\overline{A}$: run $D_A$ and output the **opposite** verdict. This is legal precisely because $D_A$ always halts, so there is always a verdict to invert.

(b) Let $R_A$ and $R_B$ be recognizers. Now sequential execution is unsafe, so **dovetail** ([Lesson 3.2](03-02-tm-variants-and-robustness.md)).

- $A \cup B$: on $w$, run $R_A$ and $R_B$ in parallel, alternating one step of each. Accept as soon as **either** accepts. If $w \in A \cup B$, one of them accepts after finitely many of its own steps, so the interleaved machine reaches that point and accepts. If $w \notin A \cup B$, neither accepts and the machine loops — permitted.
- $A \cap B$: run both in parallel and accept only when **both** have accepted. If $w \in A \cap B$, both accept in finite time, so both events occur. Otherwise at least one never accepts and the machine loops.

(*Why the parallelism matters for union:* running $R_A$ to completion first would hang on a $w \in B \setminus A$ if $R_A$ loops on it, missing a string that should be accepted.)

(c) Suppose the recognizable languages were closed under complement. Then $A_{\mathrm{TM}}$, which is recognizable ([Lesson 3.3](03-03-church-turing-thesis-and-the-universal-machine.md)), would have a recognizable complement, and by [Lesson 3.4's](03-04-decidable-vs-turing-recognizable.md) theorem $A_{\mathrm{TM}}$ would be decidable — contradicting [Lesson 4.1](04-01-diagonalization-and-the-halting-problem.md). So the class is not closed under complement, and $\overline{A_{\mathrm{TM}}}$ is a witness. $\blacksquare$

**The construction that breaks** is the complement one in (a): "run the machine and invert the verdict." For a recognizer there may be no verdict to invert — on a string outside the language the machine may simply run forever, and inverting a non-answer is not a thing you can do. This is the exact analogue of [Lesson 1.4's](01-04-closure-properties-of-regular-languages.md) NFA complement trap, where "some run accepts" also could not be negated by flipping accept states. **Complementation always needs a model that produces a definite verdict.**

</details>

## Connections

- **Backward:** the base case of every reduction here is [Lesson 4.1's](04-01-diagonalization-and-the-halting-problem.md) diagonalization; transfer property (4) plus [Lesson 3.4's](03-04-decidable-vs-turing-recognizable.md) theorem is what upgraded $E_{\mathrm{TM}}$ from undecidable to unrecognizable; and "$f$ writes a machine's description" is only meaningful because of [Lesson 3.3's](03-03-church-turing-thesis-and-the-universal-machine.md) encoding.
- **Forward:** Lesson 4.3 generalizes Example 2's construction into Rice's theorem, which replaces "invent a reduction" with "check two hypotheses"; Lesson 4.4 introduces the *polynomial-time* version of $\le_m$, which is how NP-completeness is defined.
- **Sideways:** the identical argument shape carries the whole of NP-completeness in [computational-complexity](../../computational-complexity/syllabus.md) (reduce 3-SAT to your problem, in polynomial time), and the security reductions of [cryptography](../../cryptography/syllabus.md) (an attack on my scheme yields an algorithm for factoring, which is assumed hard). In each case the direction rule is the same, and getting it backwards is the same worthless claim.
