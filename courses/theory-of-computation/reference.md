# Automata & Computability · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

The course is one escalation, run four times. Each tier adds memory to a finite
control and asks what the new machine can do: nothing extra (finite states), one
stack (pushdown), a read-write tape (Turing), and then the tape asked about
itself (undecidability). Mid-problem, this card is where the five machine
definitions, the two pumping lemmas with their adversary games, the closure
tables, the standard decidable and undecidable languages, and the reduction
recipe all live in one place.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\Sigma$ | the input alphabet — a finite set of symbols | [1.1](lessons/01-01-deterministic-finite-automata.md) |
| $\Sigma^*$ | **every** finite string over $\Sigma$, including the empty one | [1.1](lessons/01-01-deterministic-finite-automata.md) |
| $\varepsilon$ | the empty string — length 0, and $\varepsilon \ne \varnothing$ | [1.1](lessons/01-01-deterministic-finite-automata.md) |
| $\lvert w\rvert$ | the length of the string $w$ | [1.1](lessons/01-01-deterministic-finite-automata.md) |
| $\delta$ | the transition function; its type is what distinguishes the machine models | [1.1](lessons/01-01-deterministic-finite-automata.md) |
| $\hat\delta(q,w)$ | the state reached from $q$ by running the whole string $w$ | [1.1](lessons/01-01-deterministic-finite-automata.md) |
| $L(M)$ | the language of $M$ — **exactly** the strings it accepts, no more, no fewer | [1.1](lessons/01-01-deterministic-finite-automata.md) |
| $F$ | the set of accept states | [1.1](lessons/01-01-deterministic-finite-automata.md) |
| $\mathcal P(Q)$ | the power set of $Q$ — every subset, the codomain of an NFA's $\delta$ | [1.2](lessons/01-02-nfa-and-the-subset-construction.md) |
| $E(S)$ | the $\varepsilon$-closure of a set of states: everywhere reachable for free | [1.2](lessons/01-02-nfa-and-the-subset-construction.md) |
| $R_1 \cup R_2$, $R_1R_2$, $R^*$ | regular-expression union, concatenation, Kleene star | [1.3](lessons/01-03-regular-expressions-and-kleenes-theorem.md) |
| $\varnothing$ | the empty **language** — matches nothing at all, unlike $\varepsilon$ | [1.3](lessons/01-03-regular-expressions-and-kleenes-theorem.md) |
| $\overline{A}$ | the complement $\Sigma^* \setminus A$ | [1.4](lessons/01-04-closure-properties-of-regular-languages.md) |
| $w^R$, $A^R$ | a string reversed; the language of all its members reversed | [1.4](lessons/01-04-closure-properties-of-regular-languages.md) |
| $p$ | the **pumping length** — the adversary's opening move | [1.5](lessons/01-05-pumping-lemma-and-non-regularity.md) |
| $s = xyz$ | the regular pumping decomposition; $y$ is the loop | [1.5](lessons/01-05-pumping-lemma-and-non-regularity.md) |
| $V$, $R$, $S$ | a grammar's variables, rules, and start variable | [2.1](lessons/02-01-context-free-grammars-derivations-parse-trees.md) |
| $\alpha \Rightarrow \beta$, $\Rightarrow^*$ | one derivation step; zero or more | [2.1](lessons/02-01-context-free-grammars-derivations-parse-trees.md) |
| $A \to \alpha \mid \beta$ | two rules for $A$, written together | [2.1](lessons/02-01-context-free-grammars-derivations-parse-trees.md) |
| $\Gamma$ | the stack alphabet (PDA) or tape alphabet (TM) | [2.2](lessons/02-02-pushdown-automata-and-cfg-equivalence.md) |
| $Z_0$, $\$$ | the initial / bottom-of-stack marker | [2.2](lessons/02-02-pushdown-automata-and-cfg-equivalence.md) |
| $(q, u, \gamma)$ | a PDA configuration: state, unread input, stack (top written leftmost) | [2.2](lessons/02-02-pushdown-automata-and-cfg-equivalence.md) |
| $C_1 \vdash C_2$, $\vdash^*$ | one machine move; zero or more | [2.2](lessons/02-02-pushdown-automata-and-cfg-equivalence.md) |
| $s = uvxyz$ | the CFL pumping decomposition; $v$ and $y$ pump together | [2.3](lessons/02-03-cfl-pumping-lemma-and-closure.md) |
| $\sqcup$ | the blank tape symbol; never in $\Sigma$ | [3.1](lessons/03-01-turing-machines.md) |
| $u\,q\,v$ | a TM configuration: tape $uv$, state $q$, head on the first symbol of $v$ | [3.1](lessons/03-01-turing-machines.md) |
| $q_{\text{accept}}$, $q_{\text{reject}}$ | the two halting states; no transitions leave them | [3.1](lessons/03-01-turing-machines.md) |
| $L$, $R$, $S$ (in $\delta$) | head moves left, right, stay put | [3.2](lessons/03-02-tm-variants-and-robustness.md) |
| $\langle O \rangle$ | a string encoding the finite object $O$ (machine, grammar, tuple) | [3.3](lessons/03-03-church-turing-thesis-and-the-universal-machine.md) |
| $U$ | the universal Turing machine | [3.3](lessons/03-03-church-turing-thesis-and-the-universal-machine.md) |
| $A_{\mathrm{TM}}$, $\mathit{HALT}_{\mathrm{TM}}$, $E_{\mathrm{TM}}$, … | the standard languages about machines (table below) | [3.4](lessons/03-04-decidable-vs-turing-recognizable.md) |
| $A \le_m B$ | $A$ is mapping reducible to $B$ — **arrow points from known to unknown** | [4.2](lessons/04-02-reducibility-and-mapping-reductions.md) |
| $L_P$ | $\{\langle M\rangle : L(M) \in P\}$ — the language of a property $P$ | [4.3](lessons/04-03-rices-theorem-and-more-undecidable-problems.md) |
| $\le_{\mathrm{P}}$ | polynomial-time mapping reduction | [4.4](lessons/04-04-a-first-look-at-p-vs-np.md) |
| $\mathrm{P}$, $\mathrm{NP}$ | polynomial-time solvable; polynomial-time **checkable** | [4.4](lessons/04-04-a-first-look-at-p-vs-np.md) |

## Definitions

### Deterministic finite automaton

A machine with one sticky note: finitely many facts it can hold, updated once per input symbol, never re-reading the input.

$$M = (Q, \Sigma, \delta, q_0, F), \qquad \delta : Q \times \Sigma \to Q \ \text{ (total, single-valued)}.$$

$M$ accepts $w$ iff the unique run ends in $F$. A language is **regular** iff some DFA recognizes it.

*Introduced:* [1.1](lessons/01-01-deterministic-finite-automata.md)

### Trap state

A non-accepting state whose transitions all loop back to itself. It is how a DFA "rejects early" while keeping $\delta$ total.

*Introduced:* [1.1](lessons/01-01-deterministic-finite-automata.md)

### Nondeterministic finite automaton

A DFA allowed to guess: several successors, or none, and moves that consume no input.

$$N = (Q,\Sigma,\delta,q_0,F), \qquad \delta : Q \times (\Sigma \cup \{\varepsilon\}) \to \mathcal P(Q).$$

$N$ accepts $w$ iff **some** run ends in $F$. Dead branches never count against it.

*Introduced:* [1.2](lessons/01-02-nfa-and-the-subset-construction.md)

### Subset construction

Determinize an NFA by making each DFA state the **set of NFA states still alive**.

$$\delta_D(S,a) = E\Big(\bigcup_{q\in S}\delta(q,a)\Big), \qquad q_{0,D} = E(\{q_0\}),$$
$$F_D = \{S : S \cap F \ne \varnothing\}.$$

At most $2^{|Q|}$ states on paper; only the reachable ones are built.

*Introduced:* [1.2](lessons/01-02-nfa-and-the-subset-construction.md)

### Distinguishable strings

$u$ and $v$ are distinguishable for $A$ if some suffix $z$ has exactly one of $uz$, $vz$ in $A$. Two distinguishable strings can never end in the same DFA state, which is the standard way to prove a **lower bound** on state count.

*Introduced:* [1.2](lessons/01-02-nfa-and-the-subset-construction.md); used again in [1.5](lessons/01-05-pumping-lemma-and-non-regularity.md)

### Regular expression

A recipe that *builds* strings, defined inductively from $a \in \Sigma$, $\varepsilon$, $\varnothing$ by union, concatenation and star.

$$L(R_1 \cup R_2) = L(R_1)\cup L(R_2), \quad L(R_1R_2) = \{xy\}, \quad L(R^*) = \bigcup_{n\ge0} L(R)^n \ni \varepsilon.$$

Precedence: star, then concatenation, then union.

*Introduced:* [1.3](lessons/01-03-regular-expressions-and-kleenes-theorem.md)

### Kleene's theorem

A language is regular **iff** some regular expression describes it. Both directions are constructive: Thompson's construction (expression $\to$ NFA, $O(m)$ states) and state elimination (automaton $\to$ expression).

*Introduced:* [1.3](lessons/01-03-regular-expressions-and-kleenes-theorem.md)

### Product construction

Run two DFAs on the same input and remember the pair.

$$\delta\big((p,q),a\big) = \big(\delta_A(p,a),\ \delta_B(q,a)\big), \qquad |Q| = |Q_A|\cdot|Q_B|.$$

$F = F_A\times F_B$ gives intersection; $(F_A\times Q_B)\cup(Q_A\times F_B)$ gives union. One machine, two theorems.

*Introduced:* [1.4](lessons/01-04-closure-properties-of-regular-languages.md)

### Pumping lemma (regular)

If $A$ is regular there is a $p \ge 1$ such that every $s \in A$ with $|s| \ge p$ splits as $s = xyz$ with

$$xy^iz \in A \ \ \forall i \ge 0, \qquad |y| > 0, \qquad |xy| \le p.$$

Proof: a run of length $\ge p$ repeats a state (pigeonhole); the repeat is a loop.

*Introduced:* [1.5](lessons/01-05-pumping-lemma-and-non-regularity.md)

### Myhill-Nerode theorem

$A$ is regular **iff** the number of pairwise-distinguishable strings is finite, and the minimal DFA has exactly that many states. Unlike pumping, this is an if-and-only-if.

*Introduced:* [1.5](lessons/01-05-pumping-lemma-and-non-regularity.md)

### Context-free grammar

$$G = (V,\Sigma,R,S), \qquad \text{every rule } A \to \alpha \text{ with } A \in V,\ \alpha \in (V\cup\Sigma)^*.$$

"Context-free" = the left side of every rule is a **single variable**, so a rule fires regardless of neighbours. $L(G) = \{w \in \Sigma^* : S \Rightarrow^* w\}$.

*Introduced:* [2.1](lessons/02-01-context-free-grammars-derivations-parse-trees.md)

### Leftmost derivation, parse tree, ambiguity

A derivation is **leftmost** if every step rewrites the leftmost variable. Parse trees and leftmost derivations correspond one-to-one. $G$ is **ambiguous** if some string has two distinct parse trees (equivalently, two distinct leftmost derivations) — a defect of the *grammar*, usually repairable by giving each precedence level its own variable.

*Introduced:* [2.1](lessons/02-01-context-free-grammars-derivations-parse-trees.md)

### Chomsky normal form

Every rule is $A \to BC$ or $A \to a$ (plus $S \to \varepsilon$ if needed). Every CFG has an equivalent CNF grammar. Parse trees become binary, a derivation of a length-$n$ string takes exactly $2n-1$ steps, and both CYK parsing and the CFL pumping lemma depend on this.

*Introduced:* [2.1](lessons/02-01-context-free-grammars-derivations-parse-trees.md)

### Pushdown automaton

An NFA with one unbounded stack.

$$P = (Q,\Sigma,\Gamma,\delta,q_0,F),$$
$$\delta : Q\times(\Sigma\cup\{\varepsilon\})\times(\Gamma\cup\{\varepsilon\}) \to \mathcal P(Q\times\Gamma^*).$$

Accepts $w$ if $(q_0,w,Z_0)\vdash^*(q_f,\varepsilon,\gamma)$ for some $q_f \in F$. A language is context-free **iff** some PDA recognizes it.

*Introduced:* [2.2](lessons/02-02-pushdown-automata-and-cfg-equivalence.md)

### Deterministic PDA

A PDA with at most one available move from every configuration. **DPDA languages $\subsetneq$ CFLs**, strictly — $\{ww^R\}$ separates them. This is the LR/LL parsing boundary, and the reason a parser generator reports conflicts.

*Introduced:* [2.2](lessons/02-02-pushdown-automata-and-cfg-equivalence.md)

### Pumping lemma (context-free)

If $L$ is context-free there is a $p\ge1$ such that every $s\in L$ with $|s|\ge p$ splits as $s = uvxyz$ with

$$uv^ixy^iz \in L \ \ \forall i\ge0, \qquad |vy| > 0, \qquad |vxy| \le p.$$

Proof: a tall CNF parse tree repeats a variable on a root-to-leaf path; graft the upper subtree into the lower one. **Two chunks pumped together, inside a window of width $p$.**

*Introduced:* [2.3](lessons/02-03-cfl-pumping-lemma-and-closure.md)

### Turing machine

$$M = (Q,\Sigma,\Gamma,\delta,q_0,q_{\text{accept}},q_{\text{reject}}),$$
$$\delta : Q'\times\Gamma \to Q\times\Gamma\times\{L,R\},$$

with $Q' = Q\setminus\{q_{\text{accept}},q_{\text{reject}}\}$ and $\sqcup \in \Gamma\setminus\Sigma$. Each step writes, moves, and changes state. Three outcomes: accept, reject, **loop**.

*Introduced:* [3.1](lessons/03-01-turing-machines.md)

### Decider vs recognizer

$M$ **recognizes** $A$ if $A$ is exactly the set it accepts (it may loop on non-members). $M$ is a **decider** if it halts on every input. Decidable $\Rightarrow$ recognizable; the converse is false.

Recognizing is *searching* (say yes when you find evidence, search forever if there is none); deciding is *answering* (commit in finite time).

*Introduced:* [3.1](lessons/03-01-turing-machines.md)

### Dovetailing

Never run one possibly-non-halting computation to completion. Interleave them all with a growing budget: for $i = 1,2,3,\dots$ run each of the first $i$ computations for $i$ steps. Used for NTM simulation, enumerators, and the decidability theorem below.

*Introduced:* [3.2](lessons/03-02-tm-variants-and-robustness.md)

### Enumerator

A TM with a printer that may run forever. $A$ is Turing-recognizable **iff** some enumerator prints exactly the members of $A$ (in any order, with repeats allowed) — hence the classical name *recursively enumerable*. If the enumeration is in **increasing order of length**, the language is decidable.

*Introduced:* [3.2](lessons/03-02-tm-variants-and-robustness.md)

### Encoding

$\langle O\rangle$ is a string encoding a finite object. Requirements: **unambiguous** and **machine-decodable**. Any two such encodings are inter-convertible by a machine, so nothing depends on which you fix. A machine taking $\langle O\rangle$ as input must reject malformed strings.

*Introduced:* [3.3](lessons/03-03-church-turing-thesis-and-the-universal-machine.md)

### Universal Turing machine

A fixed $U$ with: $U$ on $\langle M,w\rangle$ accepts iff $M$ accepts $w$, rejects iff $M$ rejects $w$, **loops iff $M$ loops**. So $A_{\mathrm{TM}}$ is recognizable, and $U$ is a recognizer, never a decider.

*Introduced:* [3.3](lessons/03-03-church-turing-thesis-and-the-universal-machine.md)

### Church–Turing thesis

*The intuitively computable functions are exactly the Turing-computable functions.* Not a theorem — one side is informal — but supported by every independent formalization ($\lambda$-calculus, $\mu$-recursive functions, Post systems, register machines, every programming language) landing on the same class.

Its practical use: a careful prose description of a procedure is a complete proof that a Turing machine exists.

*Introduced:* [3.3](lessons/03-03-church-turing-thesis-and-the-universal-machine.md)

### The recognizability theorem

$$A \text{ decidable} \iff A \text{ and } \overline{A} \text{ are both Turing-recognizable}.$$

($\Leftarrow$) run both recognizers in parallel, alternating steps; exactly one accepts.
**Corollary (the one you use):** if $A$ is recognizable and undecidable, then $\overline{A}$ is **not recognizable**.

*Introduced:* [3.4](lessons/03-04-decidable-vs-turing-recognizable.md)

### Mapping reduction

$A \le_m B$ iff some **computable, total** $f$ satisfies

$$w \in A \iff f(w) \in B \qquad \text{for every } w.$$

$f$ is a compiler, not an interpreter: it writes a machine's description and never runs it. Both directions of the iff must be checked; the no-direction is where reductions break.

*Introduced:* [4.2](lessons/04-02-reducibility-and-mapping-reductions.md)

### Rice's theorem

Let $P$ be a **non-trivial** set of recognizable languages (some recognizable language is in $P$, some is not) and $L_P = \{\langle M\rangle : L(M) \in P\}$. Then $L_P$ is **undecidable**.

Two hypotheses, both required: **semantic** (the answer depends only on $L(M)$) and **non-trivial**. It says nothing about recognizability.

*Introduced:* [4.3](lessons/04-03-rices-theorem-and-more-undecidable-problems.md)

### P, NP, verifier

$\mathrm{P} = \bigcup_k \mathrm{TIME}(n^k)$ — solvable in polynomial time. A **verifier** for $A$ is a polynomial-time $V$ with $A = \{w : V \text{ accepts } \langle w,c\rangle \text{ for some } c\}$; $\mathrm{NP}$ is the class of languages with one. Equivalently, decidable by a polynomial-time **nondeterministic** machine.

$\mathrm{P} \subseteq \mathrm{NP} \subseteq \mathrm{EXPTIME}$; both containments are open. "NP" means *nondeterministic polynomial*, **not** "not polynomial."

*Introduced:* [4.4](lessons/04-04-a-first-look-at-p-vs-np.md)

### NP-complete

$B$ is NP-complete if $B \in \mathrm{NP}$ **and** every $A \in \mathrm{NP}$ satisfies $A \le_{\mathrm{P}} B$. Dropping the first condition gives NP-**hard**, which is strictly weaker (an undecidable language can be NP-hard). Cook–Levin: SAT is NP-complete.

*Introduced:* [4.4](lessons/04-04-a-first-look-at-p-vs-np.md)

## Formulas and rules

### The four machine models at a glance

| model | memory | $\delta$ maps to | recognizes | nondeterminism adds power? |
|---|---|---|---|---|
| DFA | finite state | one state | regular | — |
| NFA | finite state | a **set** of states | regular | no (subset construction) |
| PDA | state + one stack | set of (state, push) | context-free | **yes** ($\{ww^R\}$) |
| TM | state + read-write tape | state, symbol, direction | recognizable | no (breadth-first simulation) |

*From* [1.1](lessons/01-01-deterministic-finite-automata.md), [1.2](lessons/01-02-nfa-and-the-subset-construction.md), [2.2](lessons/02-02-pushdown-automata-and-cfg-equivalence.md), [3.1](lessons/03-01-turing-machines.md), [3.2](lessons/03-02-tm-variants-and-robustness.md)

### Closure properties

| operation | regular | context-free | decidable | recognizable |
|---|---|---|---|---|
| union | ✓ | ✓ | ✓ | ✓ |
| intersection | ✓ | ✗ | ✓ | ✓ |
| intersection with a **regular** language | ✓ | ✓ | ✓ | ✓ |
| complement | ✓ | ✗ | ✓ | ✗ |
| concatenation | ✓ | ✓ | ✓ | ✓ |
| star | ✓ | ✓ | ✓ | ✓ |
| reversal | ✓ | ✓ | ✓ | ✓ |

The two ✗ in the CFL column are the same fact: $\{a^nb^nc^m\} \cap \{a^mb^nc^n\} = \{a^nb^nc^n\}$, and complement would give intersection by De Morgan. The recognizable ✗ is $\overline{A_{\mathrm{TM}}}$.

*From* [1.4](lessons/01-04-closure-properties-of-regular-languages.md), [2.3](lessons/02-03-cfl-pumping-lemma-and-closure.md), [3.4](lessons/03-04-decidable-vs-turing-recognizable.md), [4.2](lessons/04-02-reducibility-and-mapping-reductions.md)

### The pumping game, both versions

| move | who | regular | context-free |
|---|---|---|---|
| 1 | adversary | picks $p \ge 1$ | picks $p \ge 1$ |
| 2 | **you** | pick $s \in A$, $\lvert s\rvert \ge p$ | pick $s \in L$, $\lvert s\rvert \ge p$ |
| 3 | adversary | splits $s = xyz$, $\lvert y\rvert>0$, $\lvert xy\rvert \le p$ | splits $s = uvxyz$, $\lvert vy\rvert>0$, $\lvert vxy\rvert \le p$ |
| 4 | **you** | pick $i$ with $xy^iz \notin A$ | pick $i$ with $uv^ixy^iz \notin L$ |

Move 2 is the whole proof: choose $s$ so that constraint (iii) leaves the adversary no useful freedom. **Both lemmas are necessary, not sufficient** — languages exist that pump and are not in the class.

*From* [1.5](lessons/01-05-pumping-lemma-and-non-regularity.md), [2.3](lessons/02-03-cfl-pumping-lemma-and-closure.md)

### Standard non-membership witnesses

| language | not | proved by |
|---|---|---|
| $\{0^n1^n\}$ | regular | pump $0^p1^p$; $y$ is all `0`s |
| $\{0^m1^n : m>n\}$ | regular | pump $0^{p+1}1^p$ **down** |
| $\{a^nb^{2n}\}$ | regular | pump $a^pb^{2p}$; ratio breaks |
| $\{w : \#0 = \#1\}$ | regular | intersect with $0^*1^*$ |
| balanced parentheses | regular | intersect with `(`$^*$`)`$^*$ |
| $\{a^nb^nc^n\}$ | context-free | window of width $p$ misses a block |
| $\{0^n1^n0^n\}$ | context-free | same |
| $\{a^ib^jc^k : i \le j \le k\}$ | context-free | two cases, **opposite** pump directions |
| $\{w : \#a=\#b=\#c\}$ | context-free | intersect with $a^*b^*c^*$ |

*From* [1.5](lessons/01-05-pumping-lemma-and-non-regularity.md), [2.3](lessons/02-03-cfl-pumping-lemma-and-closure.md), [3.2](lessons/03-02-tm-variants-and-robustness.md)

### Simulation costs

| from | to | cost | lesson |
|---|---|---|---|
| NFA with $k$ states | DFA | up to $2^k$ states (achieved by "$k$-th symbol from the end") | [1.2](lessons/01-02-nfa-and-the-subset-construction.md) |
| regex of length $m$ | NFA | $O(m)$ states (Thompson) | [1.3](lessons/01-03-regular-expressions-and-kleenes-theorem.md) |
| $k$-tape TM, time $t$ | 1-tape TM | $O(k\,t^2)$ — **polynomial** | [3.2](lessons/03-02-tm-variants-and-robustness.md) |
| NTM, branching $b$, depth $t$ | deterministic TM | $O(t\,b^t)$ — **exponential** | [3.2](lessons/03-02-tm-variants-and-robustness.md) |

Exact step counts for the worked machines: the 1-tape $\{a^nb^nc^n\}$ decider takes $4n^2+3n+1$ steps; the $\{0^n1^n\}$ decider $2n^2+2n+1$; the $\{w\#w\}$ decider $2(\lvert w\rvert+1)^2$. All $\Theta(n^2)$ — one sweep per crossed symbol, over a tape of length $\Theta(n)$.

*From* [3.1](lessons/03-01-turing-machines.md), [3.2](lessons/03-02-tm-variants-and-robustness.md)

### Model variants: which change the class

| variant | changes recognizable languages? | why |
|---|---|---|
| two-way infinite tape | no | fold the tape into two tracks |
| "stay put" move | no | $R$ then $L$ |
| $k$ tapes, $k$ heads | no | dotted symbols on one tape |
| nondeterminism | no | breadth-first search of the tree |
| two stacks instead of a tape | no | left of head / right of head |
| computed-index head jump | no | polynomial slowdown |
| **may never write** | **yes** — drops to **regular** | two-way DFA (Rabin–Scott) |
| **head may only move right** | **yes** — drops to **regular** | writes are never re-read |

Both essential ingredients: **writing** and **two-way motion**. Either alone gives only the regular languages.

*From* [3.2](lessons/03-02-tm-variants-and-robustness.md), [3.4](lessons/03-04-decidable-vs-turing-recognizable.md)

### Decidable questions about automata and grammars

| language | question | algorithm |
|---|---|---|
| $A_{\mathrm{DFA}}$, $A_{\mathrm{NFA}}$, $A_{\mathrm{REX}}$ | does it accept $w$? | convert if needed, simulate $\lvert w\rvert$ steps |
| $E_{\mathrm{DFA}}$ | is $L(D) = \varnothing$? | mark reachable states; no accept state marked |
| $EQ_{\mathrm{DFA}}$ | do two DFAs agree? | symmetric-difference DFA, then $E_{\mathrm{DFA}}$ |
| $\mathit{FIN}_{\mathrm{DFA}}$ | is $L(D)$ finite? | no cycle reachable-from-start and co-reachable-to-$F$ |
| $A_{\mathrm{CFG}}$ | does $G$ generate $w$? | CNF, then all $2n-1$-step derivations (or CYK, $O(n^3)$) |
| $E_{\mathrm{CFG}}$ | is $L(G) = \varnothing$? | mark terminals, then variables with fully-marked right-hand sides |

Each halts for a stated reason: a step bound, or a marking loop over a finite set. **$EQ_{\mathrm{CFG}}$ is undecidable** — the $EQ_{\mathrm{DFA}}$ trick needs complement, which CFLs lack.

*From* [3.4](lessons/03-04-decidable-vs-turing-recognizable.md), [4.1](lessons/04-01-diagonalization-and-the-halting-problem.md)

### The standard undecidable languages

| language | undecidable | recognizable? | complement recognizable? |
|---|---|---|---|
| $A_{\mathrm{TM}} = \{\langle M,w\rangle : M \text{ accepts } w\}$ | diagonalization | **yes** ($U$) | no |
| $\mathit{HALT}_{\mathrm{TM}} = \{\langle M,w\rangle : M \text{ halts on } w\}$ | $A_{\mathrm{TM}} \le_m$ it | **yes** | no |
| $E_{\mathrm{TM}} = \{\langle M\rangle : L(M)=\varnothing\}$ | Rice / reduction | no | **yes** |
| $\mathit{ALL}_{\mathrm{TM}} = \{\langle M\rangle : L(M)=\Sigma^*\}$ | Rice | no | no |
| $\mathit{REGULAR}_{\mathrm{TM}}$ | Rice | no | no |
| $EQ_{\mathrm{TM}}$ | Rice (fix one side) | no | no |
| $\mathit{TOTAL} = \{\langle M\rangle : M \text{ halts on all inputs}\}$ | **not Rice** (syntactic); direct reduction | no | no |
| $\mathit{SA} = \{\langle M\rangle : M \text{ does not accept }\langle M\rangle\}$ | direct diagonalization | **no** | yes |

*From* [4.1](lessons/04-01-diagonalization-and-the-halting-problem.md), [4.2](lessons/04-02-reducibility-and-mapping-reductions.md), [4.3](lessons/04-03-rices-theorem-and-more-undecidable-problems.md)

### Reduction transfer rules

Given $A \le_m B$:

$$B \text{ decidable} \Rightarrow A \text{ decidable}, \qquad \textbf{A undecidable} \Rightarrow \textbf{B undecidable},$$
$$B \text{ recognizable} \Rightarrow A \text{ recognizable}, \qquad A \text{ unrecognizable} \Rightarrow B \text{ unrecognizable},$$
$$A \le_m B \iff \overline{A} \le_m \overline{B} \quad (\text{same } f).$$

**The direction rule:** to prove *your* problem hard, reduce a **known-hard** problem **to** it. The arrow points from what you know to what you are asking about. The same rule governs $\le_{\mathrm{P}}$ and NP-completeness.

*From* [4.2](lessons/04-02-reducibility-and-mapping-reductions.md), [4.4](lessons/04-04-a-first-look-at-p-vs-np.md)

### The reduction template

> **$f$ = on input $\langle M,w\rangle$:** if it is not a valid encoding, output a fixed string on the correct side of the target. Otherwise construct the description of a machine $M'$ that *(ignores or filters its own input and runs $M$ on $w$)*. Output $\langle M'\rangle$. **Never run $M'$.**

Three standard $M'$ bodies:

| want $L(M')$ to be | $M'$ = on input $x$ |
|---|---|
| $\{w\}$ or $\varnothing$ | if $x \ne w$ reject; else run $M$ on $w$ |
| $\Sigma^*$ or $\varnothing$ | ignore $x$; run $M$ on $w$; accept if it accepts |
| $L_1$ or $\varnothing$ (Rice) | run $M$ on $w$; if it accepts, run $M_1$ on $x$ |

*From* [4.2](lessons/04-02-reducibility-and-mapping-reductions.md), [4.3](lessons/04-03-rices-theorem-and-more-undecidable-problems.md)

### Rice's decision tree

1. **Does the answer depend only on $L(M)$?** No $\Rightarrow$ syntactic; Rice is silent (could be easy, could still be undecidable — e.g. $\mathit{TOTAL}$).
2. **Is it non-trivial** (some recognizable language has it, some does not)? No $\Rightarrow$ decidable. Yes $\Rightarrow$ **undecidable, no further work**.

*From* [4.3](lessons/04-03-rices-theorem-and-more-undecidable-problems.md)

## Assumed, not taught here

This is a Tier 1 course whose only listed prerequisite is
[discrete-mathematics](../discrete-mathematics/syllabus.md), and it leans on that
course heavily. It also uses asymptotic notation, which properly belongs to
[algorithms](../algorithms/syllabus.md).

| Fact | Where it's taught |
|---|---|
| Pigeonhole principle (both pumping lemmas, and P3 of 4.1) | [discrete-mathematics 3.3](../discrete-mathematics/lessons/03-03-inclusion-exclusion-and-pigeonhole.md) |
| Induction and strong induction (every correctness proof in the course) | [discrete-mathematics 1.4](../discrete-mathematics/lessons/01-04-induction-and-strong-induction.md) |
| Sets, subsets, power set, Cartesian product (NFA states, product construction) | [discrete-mathematics 2.1](../discrete-mathematics/lessons/02-01-sets-and-set-operations.md) |
| Functions, injections, and **countability** (the counting half of 4.1) | [discrete-mathematics 2.3](../discrete-mathematics/lessons/02-03-functions-and-cardinality.md) |
| Modular arithmetic and the Chinese remainder theorem (the "divisible by $k$" machines) | [discrete-mathematics 4.3](../discrete-mathematics/lessons/04-03-modular-arithmetic-and-congruences.md) |
| Rooted trees, height, leaves (parse trees; the CFL pumping bound $2^{h}$) | [discrete-mathematics 5.3](../discrete-mathematics/lessons/05-03-trees-and-graph-coloring.md) |
| Graph reachability and breadth-first search (the marking algorithms of 3.4) | [discrete-mathematics 5.2](../discrete-mathematics/lessons/05-02-graphs-paths-connectivity-euler-hamilton.md) |
| Propositional formulas and satisfiability (SAT in 4.4) | [discrete-mathematics 1.1](../discrete-mathematics/lessons/01-01-propositional-logic-boolean-algebra.md) |
| Big-O / $\Theta$ / $\Omega$ notation and the growth hierarchy | [algorithms 1.1](../algorithms/lessons/01-01-asymptotic-notation.md) |
| Semirings and idempotent algebra (why the Kleene-algebra identities of 1.3 hold) | [abstract-algebra](../abstract-algebra/syllabus.md) |

**Deliberately deferred to other courses** (used or mentioned, never developed
here): the time and space hierarchy theorems, Cook–Levin, NP-completeness
catalogues and PSPACE ([computational-complexity](../computational-complexity/syllabus.md));
LR/LL parsing tables and lexer/parser generators, type systems and abstract
interpretation ([programming-languages](../programming-languages/syllabus.md));
KMP and string matching, dynamic programming and CYK
([algorithms](../algorithms/syllabus.md)); Gödel's incompleteness theorems and
Tarski undefinability ([mathematical-logic](../mathematical-logic/syllabus.md)).

## Pitfalls

### Automata and acceptance

- Only the state **after the last symbol** counts. Passing through an accept state mid-run means nothing. *([1.1](lessons/01-01-deterministic-finite-automata.md))*
- A DFA's $\delta$ is **total**. If a symbol should be fatal, send it to an explicit trap state — a missing arrow is a bug, not a rejection. *([1.1](lessons/01-01-deterministic-finite-automata.md))*
- A state summarizes the **whole prefix read so far**, not a position in the input. A transition may only discard what the new symbol genuinely invalidates. *([1.1](lessons/01-01-deterministic-finite-automata.md))*
- NFA acceptance is **existential** — one accepting run is enough and dead branches never count against you. *([1.2](lessons/01-02-nfa-and-the-subset-construction.md))*
- With $\varepsilon$-transitions, close **before the first symbol and after every symbol**. Forgetting the initial closure silently loses strings. *([1.2](lessons/01-02-nfa-and-the-subset-construction.md))*
- The subset construction usually collapses: build only the **reachable** sets, not all $2^{|Q|}$. The exponential is a worst case some languages genuinely achieve. *([1.2](lessons/01-02-nfa-and-the-subset-construction.md))*

### Regular expressions and closure

- $\varnothing \ne \varepsilon$: $\varnothing$ matches nothing, $\varepsilon$ matches exactly one string. $R\varnothing = \varnothing$ but $R\varepsilon = R$. *([1.3](lessons/01-03-regular-expressions-and-kleenes-theorem.md))*
- Backreferences (`(a*)b\1`) are **not** regular expressions in this course's sense and recognize non-regular languages. *([1.3](lessons/01-03-regular-expressions-and-kleenes-theorem.md))*
- Testing strings can **refute** a claimed identity but never confirm one. Refutation is finite work; confirmation is a proof. *([1.3](lessons/01-03-regular-expressions-and-kleenes-theorem.md), [1.5](lessons/01-05-pumping-lemma-and-non-regularity.md))*
- Swapping accept states complements a **deterministic, total** machine only. On an NFA it computes "some run ends outside $F$," which is usually $\Sigma^*$. *([1.4](lessons/01-04-closure-properties-of-regular-languages.md))*
- Closure says nothing about languages **outside** the class: $\{0^n1^n\}\cap\{1^n0^n\} = \{\varepsilon\}$, regular from two non-regular parts. *([1.4](lessons/01-04-closure-properties-of-regular-languages.md))*
- The product construction needs a **shared alphabet**; different alphabets must be extended (with trap transitions) first. *([1.4](lessons/01-04-closure-properties-of-regular-languages.md))*

### Pumping arguments

- **You do not choose the decomposition.** The adversary does. "Take $y$ to be the block of `1`s" proves nothing. *([1.5](lessons/01-05-pumping-lemma-and-non-regularity.md))*
- Pump in the direction that **consumes the slack**: inequalities usually need $i=0$, equalities usually need $i=2$. Pumping the wrong way succeeds harmlessly and proves nothing. *([1.5](lessons/01-05-pumping-lemma-and-non-regularity.md), [2.3](lessons/02-03-cfl-pumping-lemma-and-closure.md))*
- Neither lemma is sufficient: non-regular languages can pump, and so can non-context-free ones. Passing is not evidence. *([1.5](lessons/01-05-pumping-lemma-and-non-regularity.md), [2.3](lessons/02-03-cfl-pumping-lemma-and-closure.md))*
- The CFL condition bounds $|vxy|$, **not** $|vy|$ — the untouched middle is inside the window, and that is what wins the proofs. *([2.3](lessons/02-03-cfl-pumping-lemma-and-closure.md))*
- CFL condition (ii) is only $|vy|>0$: the adversary may set $y = \varepsilon$, and your case analysis must survive that. *([2.3](lessons/02-03-cfl-pumping-lemma-and-closure.md))*
- Reach for **intersect-with-a-regular-language** before rolling your own pump; it is shorter and fails less often. *([1.5](lessons/01-05-pumping-lemma-and-non-regularity.md), [2.3](lessons/02-03-cfl-pumping-lemma-and-closure.md))*

### Grammars and stacks

- Many derivations, one tree. Ambiguity means two distinct **parse trees** (equivalently, two distinct leftmost derivations) — fix a discipline before counting. *([2.1](lessons/02-01-context-free-grammars-derivations-parse-trees.md))*
- Ambiguity is a property of the **grammar**, usually repairable by adding a variable per precedence level. Inherently ambiguous *languages* are rare. *([2.1](lessons/02-01-context-free-grammars-derivations-parse-trees.md))*
- "Context-free" describes the **rules** (single variable on the left), not the language. $\{a^nb^nc^n\}$ sounds context-free and is not. *([2.1](lessons/02-01-context-free-grammars-derivations-parse-trees.md))*
- A PDA cannot test for an **empty stack** — push a private bottom marker $\$$ and test for that. *([2.2](lessons/02-02-pushdown-automata-and-cfg-equivalence.md))*
- Bounded, order-like facts go in the **states**; unbounded counting goes on the **stack**. Merging the two loses one of them. *([2.2](lessons/02-02-pushdown-automata-and-cfg-equivalence.md))*
- Nondeterminism is a **strict** increase in power for PDAs, unlike for NFAs. There is no subset construction for stacks. *([2.2](lessons/02-02-pushdown-automata-and-cfg-equivalence.md))*
- One stack is a PDA; **two stacks is a full Turing machine**. There is nothing in between. *([2.2](lessons/02-02-pushdown-automata-and-cfg-equivalence.md), [3.2](lessons/03-02-tm-variants-and-robustness.md))*

### Turing machines and models

- Rejecting and looping are **not** the same. A rejection is an answer; a loop is the absence of one, and no observer can tell it from slowness. *([3.1](lessons/03-01-turing-machines.md))*
- "Infinite tape" means **unbounded**: after $t$ steps at most $t+1$ cells have been touched. *([3.1](lessons/03-01-turing-machines.md))*
- A careful prose description **is** a machine, provided each step is bounded and each loop terminates for a stated reason. Look for that reason — it is what separates a decider from a recognizer. *([3.1](lessons/03-01-turing-machines.md), [3.3](lessons/03-03-church-turing-thesis-and-the-universal-machine.md))*
- Model robustness is about **what** is computable, never **how fast**. Quoting it to defend a running-time claim is a category error. *([3.2](lessons/03-02-tm-variants-and-robustness.md))*
- Simulating an NTM depth-first is **wrong**, not merely slow: one branch may never halt, and detecting that is the halting problem. *([3.2](lessons/03-02-tm-variants-and-robustness.md))*
- Enlarging a finite tape alphabet is free and is how most simulations work. Making it depend on the input length is not allowed. *([3.2](lessons/03-02-tm-variants-and-robustness.md))*
- The Church–Turing thesis is **not a theorem**, and no physically realizable model (quantum included) is known to escape it. *([3.3](lessons/03-03-church-turing-thesis-and-the-universal-machine.md))*
- $\langle M\rangle$ records $M$'s **table**, not $M$'s language. Extracting $L(M)$ from $\langle M\rangle$ is exactly what Rice forbids. *([3.3](lessons/03-03-church-turing-thesis-and-the-universal-machine.md))*
- Every machine that takes an encoding as input must handle **malformed** input — "if it is not a valid encoding, reject." *([3.3](lessons/03-03-church-turing-thesis-and-the-universal-machine.md))*

### Decidability, reductions, complexity

- "Undecidable" and "unrecognizable" are different, and the second is strictly stronger. There is a real class between them, and $A_{\mathrm{TM}}$ lives in it. *([3.4](lessons/03-04-decidable-vs-turing-recognizable.md))*
- You cannot complement a **recognizer** by swapping halting states — there may be no verdict to invert. Same trap as the NFA case. *([3.4](lessons/03-04-decidable-vs-turing-recognizable.md), [1.4](lessons/01-04-closure-properties-of-regular-languages.md))*
- Automata questions are decidable because automata are **analysable**, not because they are small. *([3.4](lessons/03-04-decidable-vs-turing-recognizable.md))*
- Undecidable means **no single algorithm settles every instance** — not that individual instances cannot be settled. *([4.1](lessons/04-01-diagonalization-and-the-halting-problem.md))*
- "For every input a correct answer exists" is true of every language and says nothing. Decidability demands one algorithm producing it uniformly. *([3.3](lessons/03-03-church-turing-thesis-and-the-universal-machine.md), [4.1](lessons/04-01-diagonalization-and-the-halting-problem.md))*
- **Reduction direction**: $A \le_m B$ with $A$ undecidable shows $B$ undecidable. The reverse shows nothing — every decidable language reduces to $A_{\mathrm{TM}}$. *([4.2](lessons/04-02-reducibility-and-mapping-reductions.md))*
- $f$ must be **total computable**: it writes a machine's description, never runs one. "Simulate $M$ on $w$, then…" is not a reduction. *([4.2](lessons/04-02-reducibility-and-mapping-reductions.md))*
- Check the **no-direction** of the iff first; the yes-direction is usually true by construction and the bug is in the other one. *([4.2](lessons/04-02-reducibility-and-mapping-reductions.md))*
- Rice needs **both** hypotheses. Non-triviality is the easy one; the semantic test is where arguments fail ($\mathit{TOTAL}$ is the standard trap). *([4.3](lessons/04-03-rices-theorem-and-more-undecidable-problems.md))*
- Rice is **sufficient, not necessary**: escaping it does not make a property decidable. *([4.3](lessons/04-03-rices-theorem-and-more-undecidable-problems.md))*
- Rice classifies **decidability only** — it says nothing about recognizability. *([4.3](lessons/04-03-rices-theorem-and-more-undecidable-problems.md))*
- NP is an **upper** bound on difficulty, not a lower one; $\mathrm{P}\subseteq\mathrm{NP}$, so easy problems are in NP too. *([4.4](lessons/04-04-a-first-look-at-p-vs-np.md))*
- "My algorithm is exponential" is a fact about the algorithm. Ruling out **every** polynomial algorithm is a lower bound and those are rare. *([4.4](lessons/04-04-a-first-look-at-p-vs-np.md))*
- Polynomial means polynomial in the **number of bits**, not in a numeric value written in binary — the pseudo-polynomial trap. *([4.4](lessons/04-04-a-first-look-at-p-vs-np.md))*
- NP-hard $\ne$ NP-complete: completeness also requires membership in NP, and that half is easy to forget. *([4.4](lessons/04-04-a-first-look-at-p-vs-np.md))*
