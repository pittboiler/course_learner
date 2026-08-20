# Automata & Computability — Syllabus

> Computer Science · Tier 1 · ~16 lessons · Prereqs: [discrete-mathematics](../discrete-mathematics/syllabus.md) · Roadmap id: `theory-of-computation`

## Goal

Learn what machines can and cannot compute, starting from the simplest possible computer and climbing to the limits of computation itself. You will define languages precisely, build automata of increasing power (finite → pushdown → Turing), prove that a problem is beyond a given machine, and finally prove that some problems are beyond *every* machine — the halting problem and its relatives. Deliberately skipped: full complexity theory (time/space hierarchies, NP-completeness proofs, PSPACE — see [computational-complexity](../computational-complexity/syllabus.md)) and real compiler/parsing engineering (LR/LL tables, grammar tooling). This is the Tier 1 bridge from [discrete-mathematics](../discrete-mathematics/syllabus.md) into [computational-complexity](../computational-complexity/syllabus.md) and [programming-languages](../programming-languages/syllabus.md).

## Dangerous Checklist

When you finish, you can:

- [ ] Design a DFA and an NFA for a given language, and trace a string through each to decide acceptance
- [ ] Convert any NFA (with ε-moves) to an equivalent DFA by the subset construction
- [ ] Translate between regular expressions and finite automata in both directions
- [ ] Build new regular languages with closure properties and the product construction
- [ ] Prove a language is *not* regular using the pumping lemma
- [ ] Write a context-free grammar, derive strings, draw parse trees, and diagnose ambiguity
- [ ] Convert between a context-free grammar and a pushdown automaton
- [ ] Prove a language is *not* context-free using the CFL pumping lemma
- [ ] Design a Turing machine (single- or multi-tape) that decides a given language
- [ ] Explain the Church–Turing thesis and why the standard TM variants have equal power
- [ ] Separate decidable from Turing-recognizable, and prove a language decidable iff it and its complement are both recognizable
- [ ] Prove the halting problem undecidable by diagonalization, transfer undecidability by mapping reduction, and apply Rice's theorem

## Modules

### Module 1: Finite Automata & Regular Languages

The simplest useful computer — finite memory, one pass — and the exact class of languages it captures.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Deterministic finite automata | Build a DFA, trace a run, and state the language a machine recognizes | DFA $(Q,\Sigma,\delta,q_0,F)$, transition function, run/computation, acceptance, regular language, state diagram |
| 1.2 | Nondeterministic FA & the subset construction | Design an NFA and convert it to an equivalent DFA | NFA, $\varepsilon$-transitions, nondeterminism, subset (powerset) construction, NFA $\equiv$ DFA |
| 1.3 | Regular expressions & Kleene's theorem | Convert between regular expressions and finite automata both ways | regular expression, union/concatenation/Kleene star, Kleene's theorem, GNFA, state elimination |
| 1.4 | Closure properties of regular languages | Combine regular languages and know the class stays regular | closure under $\cup,\cap,\overline{\,\cdot\,},\cdot,{}^*$, product construction, reversal, homomorphism (taste) |
| 1.5 | The pumping lemma & non-regularity | Prove a language is not regular by an adversary argument | pumping lemma, pumping length, adversary/decomposition argument, $\{0^n1^n\}$, Myhill–Nerode (taste) |

**Boss problem 1:** (a) Construct a DFA over $\Sigma=\{a,b\}$ accepting exactly the strings with an even number of $a$'s **and** an odd number of $b$'s. (b) Convert to a DFA by subset construction the NFA with states $\{q_0,q_1\}$, start $q_0$, accept $q_1$, and $\delta(q_0,a)=\{q_0,q_1\}$, $\delta(q_0,b)=\{q_0\}$, $\delta(q_1,b)=\{q_1\}$; then describe its language in one sentence. (c) Prove $\{0^n1^n : n\ge 0\}$ is not regular with the pumping lemma.

### Module 2: Context-Free Languages & Pushdown Automata

Add one stack of unbounded memory — enough to match brackets and nest structure, not enough to count three things at once.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Context-free grammars, derivations & parse trees | Write a CFG, derive strings, build parse trees, and spot ambiguity | CFG $(V,\Sigma,R,S)$, derivation, leftmost derivation, parse tree, ambiguity, Chomsky normal form & parsing (taste) |
| 2.2 | Pushdown automata & CFG equivalence | Design a PDA and know PDAs recognize exactly the CFLs | PDA, stack operations, nondeterministic acceptance, CFG $\equiv$ PDA, empty-stack vs. final-state acceptance |
| 2.3 | The CFL pumping lemma & closure properties | Prove a language non-context-free and use CFL closure | CFL pumping lemma, $\{a^nb^nc^n\}$, closure under $\cup,\cdot,{}^*$, non-closure under $\cap$/complement, $\cap$ with a regular language |

**Boss problem 2:** (a) Give a CFG for the palindromes over $\{a,b\}$ and show a leftmost derivation of $abba$. (b) Describe a PDA accepting $\{a^nb^n : n\ge 0\}$ by its stack behavior, and say why one stack suffices here. (c) Prove $\{a^nb^nc^n : n\ge 0\}$ is not context-free with the CFL pumping lemma.

### Module 3: Turing Machines & Computability

Give the machine a read-write tape and it becomes as powerful as any computer will ever be — the fixed point the Church–Turing thesis names.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Turing machines | Design a TM and distinguish accepting, rejecting, and looping | TM (7-tuple), tape/head, configuration, accept/reject/loop, decider vs. recognizer |
| 3.2 | TM variants & robustness | Show multitape and nondeterministic TMs match the single-tape model | multitape TM, nondeterministic TM, simulation, robustness of the model, enumerators (taste) |
| 3.3 | The Church–Turing thesis & the universal machine | Encode a machine as a string and run it on a universal TM | Church–Turing thesis, encoding $\langle M\rangle$, universal Turing machine, "algorithm" $=$ TM |
| 3.4 | Decidable vs. Turing-recognizable languages | Separate the two classes and prove the recognizability theorem | decidable (recursive), Turing-recognizable (r.e.), co-recognizable, decidable $\iff$ both recognizable, $A_{\mathrm{DFA}}$ decidable |

**Boss problem 3:** (a) Sketch a Turing machine that decides $\{a^nb^nc^n : n\ge 0\}$, and say in one line why this shows the language is decidable yet (by Boss problem 2c) not context-free. (b) Prove a language is decidable **iff** both it and its complement are Turing-recognizable. (c) Prove $A_{\mathrm{DFA}}=\{\langle D,w\rangle : D \text{ is a DFA that accepts } w\}$ is decidable.

### Module 4: Undecidability & Reductions

Some languages defeat every machine. Diagonalization builds the first one; reductions spread the damage; Rice's theorem shows almost every interesting question is infected.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Diagonalization & the halting problem | Prove $A_{\mathrm{TM}}$ and the halting problem undecidable | countability of strings, diagonalization, $A_{\mathrm{TM}}$ undecidable, the halting problem, uncomputability |
| 4.2 | Reducibility & mapping reductions | Transfer undecidability from one problem to another | mapping reduction $\le_m$, reduction proofs, $E_{\mathrm{TM}}$, $EQ_{\mathrm{TM}}$, complements & co-recognizability |
| 4.3 | Rice's theorem & more undecidable problems | Classify semantic properties of programs as undecidable | Rice's theorem, nontrivial semantic property, $\mathit{REGULAR}_{\mathrm{TM}}$, property depends only on $L(M)$ |
| 4.4 | A first look at P vs NP | Set up the complexity question this course hands off | time complexity on a TM, class $\mathrm{P}$, verifier, class $\mathrm{NP}$, the $\mathrm{P}$ vs $\mathrm{NP}$ question |

**Boss problem 4:** (a) Assuming $A_{\mathrm{TM}}$ is undecidable, prove the halting problem $\mathit{HALT}_{\mathrm{TM}}=\{\langle M,w\rangle : M \text{ halts on } w\}$ is undecidable by giving a mapping reduction $A_{\mathrm{TM}}\le_m \mathit{HALT}_{\mathrm{TM}}$. (b) State Rice's theorem precisely and use it to conclude $\{\langle M\rangle : L(M)=\{0\}\}$ is undecidable, verifying both hypotheses. (c) Explain in two sentences why every language in $\mathrm{P}$ lies in $\mathrm{NP}$.

## Sources of truth

- Sipser, *Introduction to the Theory of Computation* (primary — definitions, notation $\langle M\rangle$, proof register, and the pumping-lemma/reduction style)
- Hopcroft, Motwani & Ullman, *Introduction to Automata Theory, Languages, and Computation* (automata and grammar constructions)
- Kozen, *Automata and Computability* (alternate rigor and the lecture-sized decomposition of topics)
