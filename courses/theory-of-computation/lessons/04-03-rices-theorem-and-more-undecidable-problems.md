# Automata & Computability · Lesson 4.3: Rice's theorem & more undecidable problems

> ⏱ ~15 min · Module 4: Undecidability & Reductions · Builds on: [4.1 (the halting problem)](04-01-diagonalization-and-the-halting-problem.md), [4.2 (mapping reductions)](04-02-reducibility-and-mapping-reductions.md) · Unlocks: 4.4 (a first look at P vs NP)

## Why this matters

Lesson 4.2 made undecidability cheap: build a reduction and you are done. This lesson makes it **free**, and vastly more sweeping.

Rice's theorem says: *every* non-trivial question about **what a program computes** is undecidable. Not a long list of hard cases with a promising remainder — the entire class, in one theorem, with two hypotheses you check in about ten seconds.

The consequence is the shape of the whole field of program analysis. "Does this function ever return null?", "do these two implementations agree?", "is this loop equivalent to that vectorized version?", "does this code compute the identity?" — all semantic, all non-trivial, all undecidable. Meanwhile "does this file have more than 500 lines?" and "does this function call `malloc`?" are questions about the *text*, and they are trivially decidable. **The line between the two is what every static analysis tool is built around**, and Rice's theorem is where you find it.

The judgement being trained here is not proving undecidability. It is looking at a proposed feature and classifying it in seconds: *is this a question about the code, or about the behaviour?*

## The idea

Look back at the reduction in [Lesson 4.2's Example 2](04-02-reducibility-and-mapping-reductions.md). Given $\langle M, w\rangle$, it built a machine whose language was $\{w\}$ if $M$ accepted $w$ and $\varnothing$ otherwise, then asked an emptiness question. The specific target — emptiness — barely mattered. All the construction needed was **two different languages that the target property distinguishes**.

Generalize that. Suppose someone hands you a property $P$ of languages that *some* recognizable language has and *some other one* lacks. Pick a language $L_1$ that has it, and a machine $M_1$ recognizing $L_1$. Now, given $\langle M, w\rangle$, build

> **$M_x$ = on input $x$:** run $M$ on $w$ (ignoring $x$). If $M$ accepts, run $M_1$ on $x$ and accept iff $M_1$ accepts.

If $M$ accepts $w$, the first phase always finishes and $M_x$ behaves exactly like $M_1$, so $L(M_x) = L_1$ — which **has** the property. If $M$ does not accept $w$, the first phase never finishes for any $x$, so $M_x$ accepts nothing and $L(M_x) = \varnothing$ — which, arranged correctly, **lacks** it.

So deciding "does $L(M_x)$ have the property?" would decide whether $M$ accepts $w$. The property was arbitrary. **One construction kills every non-trivial semantic property at once.**

The two hypotheses fall straight out of what the construction needed: you need a language *with* the property and one *without* (non-triviality), and the property has to be about the language rather than about the machine's description (semantic), since $M_x$'s description is nothing like $M_1$'s while its language is identical.

## The formal version

Let $P$ be a set of Turing-recognizable languages — think of it as a **property**, with $L \in P$ meaning "$L$ has the property." Define the corresponding language of machine descriptions

$$L_P = \{\, \langle M\rangle : M \text{ is a TM and } L(M) \in P \,\}.$$

Two conditions:

- $P$ is **non-trivial** if some recognizable language is in $P$ and some recognizable language is not — i.e. $P \ne \varnothing$ and $P$ is not *all* recognizable languages.
- $L_P$ is automatically **semantic**: it is defined through $L(M)$, so two machines with the same language are treated identically. (Equivalently: if $L(M) = L(N)$ then $\langle M\rangle \in L_P \iff \langle N\rangle \in L_P$.) A property of machine descriptions that fails this test is **syntactic** and Rice says nothing about it.

**Rice's theorem.** If $P$ is non-trivial, then $L_P$ is undecidable.

*Proof.* Assume first that $\varnothing \notin P$. (If $\varnothing \in P$, run the whole argument on the complementary property $\overline{P}$, which is also non-trivial; $L_{\overline{P}} = \overline{L_P}$ up to malformed encodings, and decidability is closed under complement, so $L_P$ is decidable iff $L_{\overline{P}}$ is.)

Since $P \ne \varnothing$, choose $L_1 \in P$ and a TM $M_1$ with $L(M_1) = L_1$. Define $f$:

> **$f$ = on input $\langle M, w\rangle$:** if it is not a valid encoding, output a fixed $\langle M_{\text{rej}}\rangle$ (which recognizes $\varnothing \notin P$). Otherwise construct
>
> > **$M_x$ = on input $x$:** run $M$ on $w$. If $M$ accepts, run $M_1$ on $x$ and accept iff $M_1$ accepts.
>
> and output $\langle M_x\rangle$.

$f$ is computable: it writes out $M_x$'s description by concatenating a hard-coded copy of $w$, the table of $M$, and the table of $M_1$, with wiring between them. **It never runs anything.**

Now the two directions.

- If $M$ **accepts** $w$: for every $x$, $M_x$ finishes its first phase and then simulates $M_1$ on $x$, so $M_x$ accepts $x$ iff $M_1$ does. Hence $L(M_x) = L_1 \in P$, so $\langle M_x\rangle \in L_P$.
- If $M$ **does not accept** $w$ (rejects or loops): for every $x$, $M_x$ never gets past its first phase, so it never accepts. Hence $L(M_x) = \varnothing \notin P$, so $\langle M_x\rangle \notin L_P$.

So $\langle M,w\rangle \in A_{\mathrm{TM}} \iff f(\langle M,w\rangle) \in L_P$, i.e. $A_{\mathrm{TM}} \le_m L_P$. By [Lesson 4.2's](04-02-reducibility-and-mapping-reductions.md) [transfer theorem](../reference.md#reduction-transfer-rules) and the undecidability of $A_{\mathrm{TM}}$, $L_P$ is undecidable. $\blacksquare$

**Immediate corollaries.** Each of these is a non-trivial semantic property, so each language is undecidable — and the proof is one line: *name a language with the property and one without.*

| language | witness with $P$ | witness without $P$ |
|---|---|---|
| $\{\langle M\rangle : L(M) = \varnothing\}$ | $\varnothing$ | $\Sigma^*$ |
| $\{\langle M\rangle : L(M) = \{0\}\}$ | $\{0\}$ | $\varnothing$ |
| $\{\langle M\rangle : L(M) \text{ is regular}\}$ | $\varnothing$ (regular) | $\{0^n1^n\}$ |
| $\{\langle M\rangle : L(M) \text{ is infinite}\}$ | $\Sigma^*$ | $\varnothing$ |
| $\{\langle M\rangle : L(M) \text{ contains } 01\}$ | $\Sigma^*$ | $\varnothing$ |
| $\{\langle M_1,M_2\rangle : L(M_1) = L(M_2)\}$ | — (fix $M_2$; the property "$L = L(M_2)$" is non-trivial) | — |

**What Rice does not give you.** It is a statement about **decidability only**. It says nothing about whether $L_P$ is recognizable — $\{\langle M\rangle : L(M) \ne \varnothing\}$ is recognizable and $\{\langle M\rangle : L(M) = \varnothing\}$ is not, yet Rice treats them identically. For recognizability you still need [Lesson 3.4's](03-04-decidable-vs-turing-recognizable.md) theorem and a reduction.

## Picture

![A decision tree. The root asks whether the answer depends only on L(M). The no branch leads to a box of syntactic properties, labelled Rice says nothing. The yes branch leads to semantic properties and then to a second question, whether the property is non-trivial; a no leads to a decidable leaf and a yes to an undecidable leaf marked by Rice's theorem.](assets/04-03-fig1.svg)

Use the tree as a checklist on any proposed analysis feature. The left branch is where all the decidable questions about programs live, and note how modest they are: they are questions about the *text*. The right branch collapses almost entirely — the only survivors are the trivial properties, which are decidable because the answer never changes.

The left branch is also a warning. "Rice says nothing" is not "decidable." *Halts on every input* is syntactic in Rice's sense — the machine that rejects everything and the machine that loops on everything have the same language $\varnothing$ but differ on it — and it is still undecidable, by a direct reduction. **Rice is a sufficient condition for undecidability, never a necessary one.**

## Worked examples

**Example 1 (mechanical): applying the theorem.** Show $\mathit{REGULAR}_{\mathrm{TM}} = \{\langle M\rangle : L(M) \text{ is regular}\}$ is undecidable.

*Semantic?* The condition is stated purely in terms of $L(M)$, so two machines with the same language get the same verdict. ✓

*Non-trivial?* Exhibit both witnesses. $M_{\text{rej}}$, which rejects everything, has $L = \varnothing$, which is regular — so some recognizable language is in $P$. A machine deciding $\{0^n1^n\}$ ([Lesson 3.1](03-01-turing-machines.md)) has a language that is **not** regular by [Lesson 1.5](01-05-pumping-lemma-and-non-regularity.md) — so some recognizable language is out of $P$. ✓

By Rice, $\mathit{REGULAR}_{\mathrm{TM}}$ is undecidable. $\blacksquare$

That is the whole proof. Compare it with doing it by hand: you would build a machine whose language is $\Sigma^*$ (regular) when $M$ accepts $w$ and $\{0^n1^n\}$ (not regular) otherwise, then verify both directions. Rice packages that construction once and hands it to you. **The only creative work left is naming the two witnesses**, and if you cannot name them, the property is trivial and the language is decidable.

Same drill on $\{\langle M\rangle : L(M) = \{0\}\}$: semantic ✓; the language $\{0\}$ has the property and $\varnothing$ does not ✓; undecidable.

**Example 2 (why you'd care): sorting real analysis features.** Here is the classification that matters in practice. Consider a proposed static-analysis feature and ask the tree's two questions.

**Undecidable by Rice** (semantic, non-trivial):

- *"Does this function ever return null?"* — a property of the set of behaviours; witnesses: a function that always returns null, one that never does.
- *"Are these two implementations equivalent?"* — $EQ_{\mathrm{TM}}$; fix one side and the property "$L = L(M_2)$" is non-trivial.
- *"Is this branch reachable on some input?"* — the emptiness question of [Lesson 4.2](04-02-reducibility-and-mapping-reductions.md).
- *"Does this optimization preserve behaviour?"* — equivalence again.

**Decidable, and unglamorously so** (syntactic):

- *"Does this file exceed 500 lines?"*, *"does this function call `malloc`?"*, *"is this identifier used anywhere?"*, *"does the code typecheck?"* — every one is a finite computation on the program text.

**Undecidable, but not by Rice** (syntactic in Rice's sense, still impossible):

- *"Does this program halt on every input?"* Two machines can recognize the same language and differ here: $M_{\text{rej}}$ rejects everything and halts always, while $M_{\text{spin}}$ loops on everything — both have $L = \varnothing$, but only one is total. So the property is not a property of $L(M)$ and Rice does not apply. It is undecidable anyway, by a direct reduction from $A_{\mathrm{TM}}$.
- *"Does this machine ever write a blank symbol?"* Same situation, and again undecidable by a direct reduction.

**The working method.** When someone proposes a tool feature, ask: *would two programs computing the same function always get the same answer?* If yes and the answer is not constant, stop — it is undecidable, and the design question becomes which compromise to make ([Lesson 4.1's](04-01-diagonalization-and-the-halting-problem.md) three: restrict the question, accept one-sided error, or demand annotations). If no, you are in the syntactic branch and you have to think — it might be easy, it might still be undecidable.

That five-second triage is worth more than any individual proof in this module, and it is exactly the sort of judgement that a confident-sounding proposal will get wrong.

## Watch out

- **You might think** Rice's theorem says everything about programs is undecidable — **but actually** it says every non-trivial property **of the language** is. Properties of the *description* are outside its scope and are often perfectly decidable (state counts, symbol usage, whether the transition table is well-formed). Every compiler and linter lives in that gap, and it is not a small gap.
- **You might think** a property escaping Rice must therefore be decidable — **but actually** Rice gives a sufficient condition for undecidability, not a characterization. "Halts on every input" and "ever writes a blank" both escape Rice and are both undecidable. Failing the semantic test tells you only that you need a different argument.
- **You might think** Rice classifies recognizability too — **but actually** it is silent on it. $\{\langle M\rangle : L(M) \ne \varnothing\}$ is recognizable (dovetail $M$ over all inputs, accept when any accepts) while its complement $E_{\mathrm{TM}}$ is not, yet Rice pronounces both undecidable and stops there. Recognizability needs [Lesson 3.4's](03-04-decidable-vs-turing-recognizable.md) theorem.

## One-liner

> Every non-trivial question about *what* a program computes is undecidable — one construction settles them all — while questions about *how it is written* are a different branch of the tree, and that branch is where every working analysis tool lives.

## Problems

**P1 (🟢)** For each language, apply Rice's theorem if it applies: state whether the property is semantic, and if so name a recognizable language **with** it and a recognizable language **without** it. If Rice does not apply, say why.

(a) $\{\langle M\rangle : L(M) \text{ is finite}\}$
(b) $\{\langle M\rangle : M \text{ has exactly 12 states}\}$
(c) $\{\langle M\rangle : L(M) \text{ contains at least two strings}\}$
(d) $\{\langle M\rangle : L(M) \text{ is Turing-recognizable}\}$
(e) $\{\langle M\rangle : M \text{ halts on every input}\}$

**P2 (🟡)** Prove that $\mathit{ALL}_{\mathrm{TM}} = \{\langle M\rangle : L(M) = \Sigma^*\}$ is undecidable, twice:

(a) in one line by Rice, naming the two witnesses; (b) directly, by exhibiting a mapping reduction $A_{\mathrm{TM}} \le_m \mathit{ALL}_{\mathrm{TM}}$ — describe the machine your $f$ builds and check both directions. (c) Say what (b) gives you that (a) does not.

**P3 (🔴)** A colleague argues:

> "$\mathit{TOTAL} = \{\langle M\rangle : M \text{ halts on every input}\}$ is undecidable by Rice's theorem. It is clearly a non-trivial property — some machines halt on everything and some do not — so Rice applies."

(a) The conclusion is true but the argument is wrong. Identify the failing hypothesis and give **two specific machines** that demonstrate the failure.
(b) Give a correct proof that $\mathit{TOTAL}$ is undecidable, by a mapping reduction from $A_{\mathrm{TM}}$. Check both directions.
(c) State in one sentence the general test for whether a property of $\langle M\rangle$ is semantic, and apply it to *"$M$ accepts at least one string of length 5"* and to *"$M$ makes at most 100 moves on the empty input."*

<details>
<summary>Solutions</summary>

**P1** (a) **Rice applies.** Semantic: "finite" is a property of the set $L(M)$. Witnesses: $\varnothing$ is finite (recognized by $M_{\text{rej}}$); $\Sigma^*$ is infinite (recognized by the machine that accepts immediately). Undecidable.

(b) **Rice does not apply** — the property is **syntactic**. It is about the machine's description, not its language. Two machines can recognize the same language with different state counts (pad any machine with an unreachable state). This particular property is in fact **decidable**: parse $\langle M\rangle$ and count the state symbols. A clean example of the left branch of the tree.

(c) **Rice applies.** Semantic. Witnesses: $\Sigma^*$ contains at least two strings; $\varnothing$ does not. Undecidable.

(d) **Rice does not apply** — the property is semantic but **trivial**. $L(M)$ is Turing-recognizable for *every* TM $M$ by definition, so $P$ contains every recognizable language and the non-triviality hypothesis fails. The language is $\{\langle M\rangle : M \text{ is a valid encoding}\}$, which is **decidable** (parse the input). Trivial properties are the decidable leaf of the tree.

(e) **Rice does not apply** — the property is **syntactic** (see P3(a)). It is nevertheless undecidable, by P3(b).

**P2** (a) Semantic ✓ — the condition is about $L(M)$. Non-trivial ✓ — $\Sigma^*$ has the property (recognized by the machine that accepts immediately), and $\varnothing$ does not (recognized by $M_{\text{rej}}$). By Rice, $\mathit{ALL}_{\mathrm{TM}}$ is undecidable. $\blacksquare$

(b) **$f$ = on input $\langle M,w\rangle$:** if it is not a valid encoding, output $\langle M_{\text{rej}}\rangle$. Otherwise construct

> **$N$ = on input $x$:** ignore $x$. Run $M$ on $w$. If $M$ accepts, accept.

and output $\langle N\rangle$. ($\langle M\rangle$ and $w$ are hard-coded into $N$; $f$ never runs anything, so it is computable.)

- **Forward.** If $M$ accepts $w$, then for every $x$, $N$ reaches the acceptance and accepts. So $L(N) = \Sigma^*$ and $\langle N\rangle \in \mathit{ALL}_{\mathrm{TM}}$. ✓
- **Backward.** If $M$ does not accept $w$ — rejecting or looping — then $N$ never accepts any $x$, so $L(N) = \varnothing \ne \Sigma^*$ (as long as $\Sigma \ne \varnothing$, and note $\varepsilon \in \Sigma^*$ is not accepted). So $\langle N\rangle \notin \mathit{ALL}_{\mathrm{TM}}$. ✓

Hence $A_{\mathrm{TM}} \le_m \mathit{ALL}_{\mathrm{TM}}$ and $\mathit{ALL}_{\mathrm{TM}}$ is undecidable. $\blacksquare$

(c) The explicit reduction gives you **more than undecidability**: it is a concrete $\le_m$ relation you can compose with others and apply [Lesson 4.2's](04-02-reducibility-and-mapping-reductions.md) transfer property (3) to. Here, applying (4) to the same $f$ gives $\overline{A_{\mathrm{TM}}} \le_m \overline{\mathit{ALL}_{\mathrm{TM}}}$, and since $\overline{A_{\mathrm{TM}}}$ is unrecognizable, so is $\overline{\mathit{ALL}_{\mathrm{TM}}}$. (In fact $\mathit{ALL}_{\mathrm{TM}}$ is unrecognizable too — a separate reduction.) **Rice gives one bit; a reduction gives a relation.** That is why Lesson 4.2 comes first and is not superseded.

**P3** (a) The failing hypothesis is **semantic** — $\mathit{TOTAL}$ is not a property of $L(M)$. Two machines with the same language give different answers:

- $M_{\text{rej}}$: on any input, immediately reject. $L(M_{\text{rej}}) = \varnothing$, and it **halts on every input**, so $\langle M_{\text{rej}}\rangle \in \mathit{TOTAL}$.
- $M_{\text{spin}}$: on any input, move right forever. $L(M_{\text{spin}}) = \varnothing$ as well — it accepts nothing — but it **halts on no input**, so $\langle M_{\text{spin}}\rangle \notin \mathit{TOTAL}$.

Same language, opposite verdicts. So $\mathit{TOTAL}$ is not of the form $L_P$ for any set of languages $P$, and Rice's theorem simply does not speak about it. The colleague checked non-triviality (correctly) and skipped the other hypothesis — which is the usual failure, since non-triviality is the easy one.

(b) **$f$ = on input $\langle M,w\rangle$:** if it is not a valid encoding, output $\langle M_{\text{spin}}\rangle$ — the machine that loops on everything, which is **not** in $\mathit{TOTAL}$, as required, since a malformed input is not in $A_{\mathrm{TM}}$ either. Otherwise construct

> **$T$ = on input $x$:** ignore $x$. Run $M$ on $w$. If $M$ accepts, **halt (accept)**. If $M$ rejects, enter an infinite loop.

and output $\langle T\rangle$. $f$ is computable — it writes $T$'s table, hard-coding $w$, and runs nothing.

- **Forward.** If $M$ accepts $w$: for every $x$, $T$ runs $M$ on $w$, which terminates by accepting, and $T$ halts. So $T$ halts on every input and $\langle T\rangle \in \mathit{TOTAL}$. ✓
- **Backward.** If $M$ does not accept $w$: either $M$ rejects, in which case $T$ enters its spin loop, or $M$ loops, in which case $T$ never gets past the simulation. Either way $T$ halts on **no** input — in particular not on all of them — so $\langle T\rangle \notin \mathit{TOTAL}$. ✓

Hence $A_{\mathrm{TM}} \le_m \mathit{TOTAL}$ and $\mathit{TOTAL}$ is undecidable. $\blacksquare$

(c) **The test:** a property of $\langle M\rangle$ is semantic iff *any two machines recognizing the same language always receive the same verdict* — equivalently, the property can be stated using only $L(M)$ and never mentions states, moves, running time, or the transition table.

- *"$M$ accepts at least one string of length 5"* — **semantic**: it says $L(M) \cap \Sigma^5 \ne \varnothing$, a condition on the set alone. (Non-trivial too: $\Sigma^*$ has it, $\varnothing$ does not — so undecidable by Rice.)
- *"$M$ makes at most 100 moves on the empty input"* — **not semantic**: it counts moves, and $M_{\text{rej}}$ (1 move) and a padded version that shuffles back and forth 200 times before rejecting have the same language $\varnothing$ but different verdicts. Rice does not apply — and here the property is in fact **decidable**: simulate $M$ on $\varepsilon$ for 100 steps and look.

Note the pair in the last bullet: the two properties look superficially similar (both count something small), and they land on opposite branches of the tree. **The count is over inputs in the first case and over moves in the second**, and that is the whole difference.

</details>

## Flashback

**From Lesson 4.1 (Diagonalization & the halting problem):** Let

$$\mathit{SA} = \{\, \langle M\rangle : M \text{ is a TM that does } \textbf{not} \text{ accept } \langle M \rangle \,\}.$$

Prove directly, by diagonalization and without using any result from Lesson 4.2 or 4.3, that $\mathit{SA}$ is **not Turing-recognizable**.

<details>
<summary>Solution</summary>

Suppose, for contradiction, that some TM $R$ recognizes $\mathit{SA}$ — that is, $L(R) = \mathit{SA}$. Since $\langle R \rangle$ is a string, we may ask whether $R$ accepts it. Two cases, and both close.

**Case 1: $R$ accepts $\langle R\rangle$.** Then $\langle R\rangle \in L(R) = \mathit{SA}$. But membership in $\mathit{SA}$ means *$R$ does not accept $\langle R\rangle$*. Contradiction.

**Case 2: $R$ does not accept $\langle R\rangle$.** Then by the definition of $\mathit{SA}$, $\langle R\rangle \in \mathit{SA} = L(R)$, which means $R$ **does** accept $\langle R\rangle$. Contradiction.

Both cases are impossible, and they exhaust the possibilities (either $R$ accepts $\langle R\rangle$ or it does not — note this is a genuine dichotomy even though "does not accept" includes both rejecting and looping). So no such $R$ exists: $\mathit{SA}$ is not Turing-recognizable. $\blacksquare$

**Two things worth noticing.**

First, this proof is **shorter than Lesson 4.1's** and proves something stronger — unrecognizability, not just undecidability. It gets away with that because $\mathit{SA}$ is *already* the diagonal: it is defined by disagreeing with each machine at its own description, so there is nothing left to construct. In Lesson 4.1 the machine $D$ had to be built out of the assumed decider $H$; here the diagonal is the language itself.

Second, the argument needs **no halting assumption anywhere** — that is exactly why it yields unrecognizability. Compare [Lesson 4.1's Example 1](04-01-diagonalization-and-the-halting-problem.md), whose second case used "$H$ halts, so $D$ halts, so $D$ rejects." Remove that step and only undecidability survives. **The strength of the conclusion tracks how much you assumed about halting**, which is a good general instinct for reading proofs in this module.

(For the record, $\overline{\mathit{SA}} = \{\langle M\rangle : M \text{ accepts } \langle M\rangle\}$ *is* recognizable — run $M$ on $\langle M\rangle$ with the universal machine — so by [Lesson 3.4's](03-04-decidable-vs-turing-recognizable.md) theorem $\mathit{SA}$'s unrecognizability also follows from $\overline{\mathit{SA}}$ being undecidable. The direct argument above is the more instructive one.)

</details>

## Connections

- **Backward:** the construction is [Lesson 4.2's Example 2](04-02-reducibility-and-mapping-reductions.md) with the target property left as a variable, and the transfer step is that lesson's theorem. The witnesses in Example 1 come from [Lesson 1.5](01-05-pumping-lemma-and-non-regularity.md) (a non-regular language) and [Lesson 3.1](03-01-turing-machines.md) (a machine deciding it) — the earlier modules supply Rice's raw material.
- **Forward:** Lesson 4.4 leaves the question of *possibility* behind and asks about *time*, where the analogous "everything non-trivial is hard" statement is false and the landscape is much richer. [computational-complexity](../../computational-complexity/syllabus.md) picks that up.
- **Sideways:** Rice's theorem is the theorem behind "sound but incomplete" as a design constraint rather than a shortcoming. In [programming-languages](../../programming-languages/syllabus.md), abstract interpretation and type systems are the standard responses: approximate the semantic property by a decidable syntactic one, chosen so that a positive answer is always trustworthy. The same theorem is why no compiler can perform every valid optimization, and why "provably equivalent" refactoring tools work on syntactic patterns rather than on behaviour.
