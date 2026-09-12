# Complexity Theory · Lesson 5.6: Relativization, natural proofs & algebrization

> ⏱ ~15 min · Module 5: Circuits, approximation & the barriers · Builds on: [5.3 (NC and P-completeness)](05-03-nc-parallelism-and-p-completeness.md), [1.3 (the hierarchy theorems)](01-03-the-hierarchy-theorems.md), [5.2 (Karp–Lipton)](05-02-karp-lipton-and-the-lower-bound-program.md) · Unlocks: [6.1 (ETH and SETH)](06-01-eth-seth-and-the-exponential-time-view.md)

## Why this matters

Fifty years of failure on P versus NP admits two readings. The charitable one is that nobody has been clever enough. The accurate one is that **three separate theorems say the available techniques cannot work**, and this lesson is those three theorems.

That matters more than it sounds. A barrier result is not a complaint; it is a proof that a whole family of arguments is doomed, and it therefore tells you what a successful proof would have to look like. Each barrier has been informative in exactly that way:

- **Relativization** (1975) killed diagonalization and simulation, which was everything anyone had. It was circumvented in 1990 by arithmetization, producing $\mathsf{IP} = \mathsf{PSPACE}$ — a result the barrier had made look false.
- **Natural proofs** (1994) killed the combinatorial circuit lower-bound technique that produced the $\mathsf{AC}^0$ and monotone results, and did so by connecting it to cryptography: a natural proof would break pseudorandom generators.
- **Algebrization** (2008) was built specifically to catch arithmetization, the technique that escaped the first barrier, and it does.

So every known technique is ruled out by at least one barrier. **That is the honest state of the problem**, and knowing it is the difference between informed pessimism and the belief that a clever afternoon might do it.

## The idea

**Relativization.** Give every machine access to an oracle $A$ — a set it may query in one step — and you get relativized classes $\mathsf{P}^A$, $\mathsf{NP}^A$. A proof technique **relativizes** if it works unchanged in the presence of any oracle.

Diagonalization does. [Lesson 1.3](01-03-the-hierarchy-theorems.md)'s hierarchy theorem never opens the machine it simulates — it treats it as a black box, runs it, and flips the answer — so bolting an oracle onto both machines changes nothing. The same is true of every simulation argument.

Baker, Gill and Solovay then observed the fatal consequence. There is an oracle $A$ with $\mathsf{P}^A = \mathsf{NP}^A$ and an oracle $B$ with $\mathsf{P}^B \ne \mathsf{NP}^B$. **So no relativizing proof can settle P versus NP either way**, because such a proof would apply to both worlds and prove contradictory things.

The constructions are short. For $A$, take any PSPACE-complete language: with it as oracle both classes collapse to $\mathsf{PSPACE}$, since a machine can solve any PSPACE problem in one query and nondeterminism buys nothing on top. For $B$, diagonalize: build $B$ in stages so that the language $L_B = \{1^n : B \text{ contains a string of length } n\}$ is in $\mathsf{NP}^B$ by guessing the string, while defeating each polynomial-time machine in turn by looking at what it queries and putting a string where it did not look.

**Natural proofs.** Razborov and Rudich asked what the successful circuit lower bounds have in common, and found two properties.

- **Largeness.** The property used to distinguish the hard function from easy ones holds for a large fraction of all Boolean functions — a random function has it.
- **Constructivity.** The property is checkable in time polynomial in the truth table's size, $2^n$.

Almost every combinatorial lower-bound argument has both, because both are what make the argument go through: you find a property, show random functions have it (so it is not vacuous), and show small circuits do not.

And that is fatal. A property that is large and constructive is a **statistical test distinguishing random functions from functions with small circuits** — which is exactly what a pseudorandom generator must defeat. So a natural proof against general circuits would show that strong pseudorandom generators do not exist, breaking the cryptographic hardness assumptions almost everyone believes. **You cannot have both a natural circuit lower bound and secure cryptography.**

The $\mathsf{AC}^0$ and monotone results escape because they are natural only against those restricted classes, where the relevant generators do not exist anyway.

**Algebrization.** Arithmetization escaped relativization by looking inside the formula rather than at a black box. Aaronson and Wigderson strengthened the barrier to match: instead of an oracle $A$, give the machines access to a **low-degree polynomial extension** $\tilde A$ of $A$ over a field — which is exactly the object arithmetization manufactures.

A technique **algebrizes** if it survives that. And there are oracles $A, \tilde A$ giving contradictory answers to P versus NP in the algebrized setting, so no algebrizing proof settles it. Arithmetization algebrizes. **The technique that broke the first barrier is caught by the second.**

## The formal version

**Definition ([oracle machine](../reference.md#oracle-machine)).** An oracle TM has an extra query tape; writing $y$ and entering the query state returns, in one step, whether $y \in A$. $\mathsf{P}^A$ and $\mathsf{NP}^A$ are the corresponding classes.

**Definition ([relativizing proof](../reference.md#relativization)).** A proof of a containment or separation relativizes if the identical argument establishes the same statement for $\mathsf{C}_1^A$ and $\mathsf{C}_2^A$, for every oracle $A$.

**Theorem ([Baker-Gill-Solovay, 1975](../reference.md#baker-gill-solovay)).** There exist oracles $A$ and $B$ with

$$\mathsf{P}^A = \mathsf{NP}^A \qquad\text{and}\qquad \mathsf{P}^B \ne \mathsf{NP}^B.$$

*Proof of the first.* Let $A$ be any PSPACE-complete language, say TQBF. Then $\mathsf{NP}^A\subseteq\mathsf{NPSPACE} = \mathsf{PSPACE}$ by [Savitch](02-03-space-as-a-resource-and-savitch.md), since a polynomial-space machine can answer the oracle queries itself. And $\mathsf{PSPACE}\subseteq\mathsf{P}^A$, since any PSPACE problem reduces to TQBF in polynomial time and one query settles it. Chaining: $\mathsf{P}^A\subseteq\mathsf{NP}^A\subseteq\mathsf{PSPACE}\subseteq\mathsf{P}^A$, so all are equal.

*Proof of the second.* Let $L_B = \{1^n : B\cap\{0,1\}^n \ne \emptyset\}$. For any $B$, $L_B\in\mathsf{NP}^B$: guess a string of length $n$ and query it. Build $B$ in stages, one per polynomial-time oracle machine $M_i$. At stage $i$, pick $n$ larger than any string yet decided and large enough that $M_i$ on $1^n$ runs for fewer than $2^n$ steps. Run $M_i^B(1^n)$; it queries fewer than $2^n$ strings of length $n$, so some length-$n$ string $w$ is unqueried. If $M_i$ accepted, put no length-$n$ string into $B$; if it rejected, put $w$ into $B$. Either way $M_i^B(1^n) \ne [1^n\in L_B]$. So no polynomial-time machine decides $L_B$, giving $L_B\in\mathsf{NP}^B\setminus\mathsf{P}^B$. $\blacksquare$

**Corollary.** No relativizing proof settles $\mathsf{P}$ versus $\mathsf{NP}$. In particular the diagonalization of [1.3](01-03-the-hierarchy-theorems.md) cannot, however refined.

**Definition ([natural proof](../reference.md#natural-proofs)).** A **combinatorial property** $\mathcal{C}$ of Boolean functions is *natural against circuit class $\Lambda$* if:

- **useful:** no function in $\Lambda$ has property $\mathcal{C}$;
- **large:** a uniformly random function on $n$ inputs has $\mathcal{C}$ with probability at least $1/n^{O(1)}$;
- **constructive:** given a function's truth table ($2^n$ bits), membership in $\mathcal{C}$ is decidable in time $2^{O(n)}$, that is, polynomial in the table.

**Theorem ([Razborov-Rudich, 1994](../reference.md#razborov-rudich)).** If a natural property useful against $\mathsf{P/poly}$ exists, then there are no pseudorandom function families computable in $\mathsf{P/poly}$ — and hence no strong one-way functions. In particular, standard cryptographic hardness assumptions fail.

*The mechanism.* Largeness plus constructivity make $\mathcal{C}$ an efficient statistical test passed by random functions. Usefulness means functions with small circuits fail it. A pseudorandom function family is computable by small circuits and indistinguishable from random, so it would both pass and fail. Contradiction.

**Definition ([algebrization](../reference.md#algebrization)).** For an oracle $A$ and a finite field $\mathbb{F}$, an **algebraic extension** $\tilde A$ is a low-degree polynomial over $\mathbb{F}$ agreeing with $A$'s characteristic function on Boolean points. A statement $\mathsf{C}_1\subseteq\mathsf{C}_2$ *algebrizes* if $\mathsf{C}_1^{A}\subseteq\mathsf{C}_2^{\tilde A}$ for all $A$ and all extensions.

**Theorem ([Aaronson-Wigderson, 2008](../reference.md#aaronson-wigderson)).** $\mathsf{IP} = \mathsf{PSPACE}$ and the other arithmetization results algebrize. But there are oracles showing that no algebrizing proof can settle $\mathsf{P}$ versus $\mathsf{NP}$, or prove $\mathsf{NP}\not\subseteq\mathsf{P/poly}$.

## Picture

![Three labelled boxes side by side — Relativization, Natural proofs, Algebrization — each with a year and authors beneath and a short description of what it rules out. Below a horizontal rule, a block of text headed what survives, noting that arithmetization got past relativization in 1990 by looking inside the formula, and that monotone and bounded-depth lower bounds got past natural proofs by working on restricted classes where the relevant pseudorandom generators do not exist.](assets/05-06-fig1.svg)

Three barriers, thirty-three years apart, each catching the techniques that escaped the last.

Read the chronology as a conversation. Relativization (1975) said black-box arguments are hopeless. Arithmetization (1990) replied by refusing to treat the input as a black box, and delivered $\mathsf{IP} = \mathsf{PSPACE}$ against the barrier's apparent verdict. Algebrization (2008) answered by extending the barrier to cover exactly that move. **The field's history here is a sequence of barriers and the specific evasions that prompted the next one.**

The bottom panel is the part worth remembering, because it names what a successful proof would need. It must be **non-relativizing** — it has to look inside the machine or the formula. It must be **non-natural** — its distinguishing property must either be rare among Boolean functions, or be hard to check given a truth table. And it must be **non-algebrizing** — it has to use more about the object than its low-degree extension.

No technique with all three properties is known. That is not the same as saying none exists, and progress since has come from arguments that are deliberately non-constructive or that exploit uniformity in ways an oracle cannot capture. But anyone proposing a short proof of $\mathsf{P}\ne\mathsf{NP}$ should be able to say which of the three their argument evades, and how.

## Worked examples

**Example 1 (mechanical): build the oracle with $\mathsf{P}^A = \mathsf{NP}^A$.** Take $A = \text{TQBF}$, which is PSPACE-complete by [Lesson 2.4](02-04-tqbf-and-pspace-completeness.md). Chase the inclusions.

$$\mathsf{P}^{\text{TQBF}} \;\subseteq\; \mathsf{NP}^{\text{TQBF}} \;\subseteq\; \mathsf{NPSPACE} \;=\; \mathsf{PSPACE} \;\subseteq\; \mathsf{P}^{\text{TQBF}}.$$

- The first is trivial (ignore nondeterminism).
- The second: a nondeterministic polynomial-time machine with a TQBF oracle can be simulated in polynomial space, because the queries are polynomially long and a polynomial-space machine answers each one itself by [2.4](02-04-tqbf-and-pspace-completeness.md)'s recursive evaluator, reusing the space.
- The third is Savitch's theorem ([2.3](02-03-space-as-a-resource-and-savitch.md)).
- The fourth: any $A\in\mathsf{PSPACE}$ reduces to TQBF in polynomial time by PSPACE-completeness, so one oracle query decides it.

The cycle forces equality throughout, so $\mathsf{P}^{\text{TQBF}} = \mathsf{NP}^{\text{TQBF}}$.

**The construction costs nothing** — it just hands both classes a problem so powerful that the distinction between them evaporates. And that is the barrier's whole content: a technique blind to what is inside the oracle cannot see a difference that the oracle can erase.

**Example 2 (why you'd care): auditing a proposed proof.** Every year brings claimed proofs of $\mathsf{P}\ne\mathsf{NP}$. The barriers give a fast triage, and it is worth knowing how to apply it.

*Does the argument relativize?* If it works by simulating machines, counting steps, or diagonalizing — and never uses a property of the *input encoding* or the circuit's internal structure — it relativizes and is dead by Baker–Gill–Solovay. **This disposes of most claims immediately**, because diagonalization is the technique people reach for.

*Is the distinguishing property natural?* If the argument identifies a property of SAT that small circuits lack, ask two questions. Does a random Boolean function have the property? Can you check the property from a truth table in time polynomial in its length? Two yeses mean the proof, if correct, also breaks every pseudorandom generator — so either it is wrong, or it is a far larger result than claimed.

*Does it algebrize?* If it works by replacing Boolean values with field elements and reasoning about degrees, it likely algebrizes and is dead by Aaronson–Wigderson.

**The point is not to dismiss unread.** It is that a serious proof must *say* which barrier it evades, because all three are theorems and none has an exception. A paper that does not address them has not engaged with the problem's actual difficulty, and a paper that does address them is at least asking the right question.

The same triage applies to your own attempts, which is the more useful direction. **If your idea is diagonalization with a twist, you can stop before writing it down.**

## Watch out

- **You might think** an oracle separation is evidence a statement is false — **but actually** $\mathsf{IP} = \mathsf{PSPACE}$ is the standing counterexample: there is an oracle making it false, and it is true. An oracle result says a *technique family* fails, not that the statement does.
- **You might think** the natural proofs barrier rules out circuit lower bounds — **but actually** it rules out lower bounds whose distinguishing property is both large and constructive. The $\mathsf{AC}^0$ parity bound and Razborov's monotone bound are real theorems; they evade the barrier by being useful only against restricted classes.
- **You might think** the barriers are heuristic guidance — **but actually** all three are theorems with proofs, and the natural-proofs one is conditional only on the existence of strong pseudorandom functions, which is the assumption underlying deployed cryptography.
- **You might think** evading all three barriers would prove $\mathsf{P}\ne\mathsf{NP}$ — **but actually** it is necessary, not sufficient. The barriers say what a proof cannot be; they give no hint of what one would be.
- **You might think** diagonalization is useless after Baker–Gill–Solovay — **but actually** it still proves the hierarchy theorems, which are the only unconditional separations anyone has ([1.3](01-03-the-hierarchy-theorems.md)). It is useless for P versus NP specifically, because that question is invariant under the oracles the technique cannot see past.

## One-liner

> Three theorems say diagonalization, combinatorial circuit arguments, and arithmetization each cannot settle P versus NP — so the honest summary is not that nobody has been clever enough, but that we know the clever things do not work.

## Problems

**P1 (🟢)** For each proof technique, name the barrier that rules it out for P versus NP, and give the year and the authors.

(a) Simulating one machine with another and flipping the answer.
(b) Finding a property that a random Boolean function has, that no small circuit has, and that is checkable from a truth table in polynomial time.
(c) Replacing a Boolean formula by a low-degree polynomial over a finite field and reasoning about degrees.

**P2 (🟡)** (a) Prove $\mathsf{P}^{\text{TQBF}} = \mathsf{NP}^{\text{TQBF}}$, giving all four inclusions in the cycle and naming the theorem behind each. (b) Explain in two sentences why this does **not** suggest $\mathsf{P} = \mathsf{NP}$. (c) Name the property of the hierarchy-theorem proof that makes it relativize.

**P3 (🔴, optional)** (a) State the three conditions defining a natural property and say which two make the barrier bite. (b) Explain in three sentences why a natural property useful against $\mathsf{P/poly}$ would break pseudorandom function families. (c) The $\mathsf{AC}^0$ parity lower bound uses a property that is large and constructive. Explain why it nonetheless does not contradict Razborov–Rudich.

<details>
<summary>Solutions</summary>

**P1**

(a) **Relativization**, Baker, Gill and Solovay, **1975**. Simulation and diagonalization treat the simulated machine as a black box, so they work unchanged with any oracle attached — and there are oracles giving both answers.

(b) **Natural proofs**, Razborov and Rudich, **1994**. The three stated conditions are exactly usefulness, largeness and constructivity, so such a property would be a natural proof against $\mathsf{P/poly}$ and would break pseudorandom functions.

(c) **Algebrization**, Aaronson and Wigderson, **2008**. This describes arithmetization, which was built to evade relativization and is caught by the algebraic strengthening.

**P2**

(a) The cycle, with its justifications:

| inclusion | reason |
|---|---|
| $\mathsf{P}^{\text{TQBF}}\subseteq\mathsf{NP}^{\text{TQBF}}$ | a deterministic machine is a nondeterministic one that never branches |
| $\mathsf{NP}^{\text{TQBF}}\subseteq\mathsf{NPSPACE}$ | queries are polynomially long, and a polynomial-space machine answers each itself with [2.4](02-04-tqbf-and-pspace-completeness.md)'s recursive TQBF evaluator, reusing the space between queries |
| $\mathsf{NPSPACE} = \mathsf{PSPACE}$ | **Savitch's theorem** ([2.3](02-03-space-as-a-resource-and-savitch.md)) |
| $\mathsf{PSPACE}\subseteq\mathsf{P}^{\text{TQBF}}$ | **TQBF is PSPACE-complete** under polynomial-time reductions ([2.4](02-04-tqbf-and-pspace-completeness.md)), so one query decides any PSPACE language |

A cycle of inclusions forces equality at every step. $\blacksquare$

(b) Because handing both classes a PSPACE oracle does not compare $\mathsf{P}$ and $\mathsf{NP}$ — it compares two classes that have both been given enough power to swamp the distinction. The result is a statement about a *relativized world*, and the existence of the second oracle $B$ with $\mathsf{P}^B\ne\mathsf{NP}^B$ shows that relativized worlds disagree, which is precisely why neither tells you anything about the unrelativized question.

(c) The hierarchy-theorem proof **never inspects the description of the machine it simulates**: it runs it under a step budget and negates the output. Since the simulation is black-box, attaching the same oracle to the universal simulator and to the simulated machine changes nothing in the argument, so the theorem holds relative to every oracle — which is the definition of relativizing.

**P3**

(a) The three conditions are **useful** (no function in the circuit class has the property), **large** (a random function has it with probability at least $1/n^{O(1)}$), and **constructive** (membership is decidable in time polynomial in the $2^n$-bit truth table).

The two that make the barrier bite are **largeness** and **constructivity**. Usefulness is what makes the property a lower-bound proof at all; the other two are what turn it into an efficient statistical test, which is the object cryptography must defeat.

(b) A pseudorandom function family $\{f_s\}$ is computable by polynomial-size circuits and is indistinguishable from a truly random function by any efficient test. Now suppose $\mathcal{C}$ is natural and useful against $\mathsf{P/poly}$: by largeness a random function has $\mathcal{C}$ with noticeable probability, and by usefulness every $f_s$ — having small circuits — lacks it, so testing for $\mathcal{C}$ separates the two distributions with noticeable advantage. By constructivity that test runs in time polynomial in the truth table, hence in $2^{O(n)}$, which is efficient at the relevant security parameter; so the family is distinguishable and is not pseudorandom.

(c) Because Razborov–Rudich rules out natural properties useful against **$\mathsf{P/poly}$** — general polynomial-size circuits. The parity property is useful only against **$\mathsf{AC}^0$**, constant-depth circuits, and that is a much weaker requirement.

The reason this matters is not bookkeeping. Pseudorandom function families **cannot be computed in $\mathsf{AC}^0$** — constant-depth circuits cannot even compute parity, let alone a cryptographic primitive — so there is nothing in $\mathsf{AC}^0$ for the natural property to break. The barrier's argument needs the circuit class to be rich enough to contain pseudorandom functions, and $\mathsf{AC}^0$ is not.

**That is exactly why the technique cannot be pushed upward.** As the circuit class grows to the point where it could contain pseudorandom functions, the barrier switches on, and the class where that happens is somewhere between $\mathsf{AC}^0$ and $\mathsf{P/poly}$ — which is precisely the range where circuit lower bounds have stalled.

</details>

## Flashback

**From Lesson 5.3 (NC, parallelism & P-completeness):** (a) Give the depth of a ripple-carry adder and of a prefix adder on $n = 1024$ bits, using $\Theta(n)$ and $2\log_2 n$. (b) State the one strict containment in the chain $\mathsf{AC}^0\subseteq\mathsf{NC}^1\subseteq\mathsf{L}\subseteq\mathsf{NL}\subseteq\mathsf{NC}^2$, and the function that witnesses it. (c) State what follows if maximum flow is shown to be in $\mathsf{NC}$.

<details>
<summary>Solution</summary>

(a) Ripple-carry: $\Theta(n)$, about $2n = \mathbf{2048}$ gate delays. Prefix: $2\log_2 1024 = 2\times10 = \mathbf{20}$ levels. A ratio of roughly 100 at this width.

(b) The one strict containment is $\mathsf{AC}^0\subsetneq\mathsf{NC}^1$, witnessed by **parity**: it is computable by a binary XOR tree of depth $\log n$, and provably not by constant-depth unbounded-fan-in circuits of polynomial size (Furst–Saxe–Sipser; Håstad's switching lemma gives the size bound $2^{\Omega(n^{1/(d-1)})}$ at depth $d$). Every other containment in the chain is open.

(c) Maximum flow is **P-complete** under logspace reductions, and $\mathsf{NC}$ is closed under logspace reductions, so a P-complete problem landing in $\mathsf{NC}$ forces $\mathbf{\mathsf{NC} = \mathsf{P}}$ — every polynomial-time problem would be solvable in polylogarithmic depth. That is a major open conjecture believed false, which is why "max-flow is P-complete" is read as evidence that it is inherently sequential.

</details>

## Connections

- **Backward:** the relativizing technique being ruled out is [1.3](01-03-the-hierarchy-theorems.md)'s diagonalization, the circuit programme being ruled out is [5.2](05-02-karp-lipton-and-the-lower-bound-program.md)'s, and the arithmetization being ruled out is [4.4](04-04-arithmetization-sumcheck-and-ip-equals-pspace.md)'s — so this lesson is a systematic audit of everything Modules 1, 4 and 5 built.
- **Forward:** [6.1](06-01-eth-seth-and-the-exponential-time-view.md) responds to exactly this situation. If unconditional separations are out of reach, conditional ones on stronger hypotheses are the honest alternative, and fine-grained complexity is that programme carried out inside $\mathsf{P}$.
- **Sideways:** the natural-proofs barrier's dependence on cryptography makes it the one place where an applied field constrains a pure one — the existence of secure encryption in [`cryptography` 1.4](../../cryptography/lessons/01-04-computational-security-and-pseudorandomness.md) is what forbids a class of mathematical arguments. The general pattern, that a technique's generality is exactly what makes it too weak, is the same phenomenon as a proof that relativizes being unable to see inside the box.
