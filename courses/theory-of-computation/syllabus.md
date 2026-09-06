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

**Boss problem 1:** (a) Build a DFA for $\{w \in \{0,1\}^* : w \text{ contains } 101 \text{ and has an even number of } 0\text{s}\}$ (**both** conditions) by the product construction, saying what each coordinate tracks and how many states are reachable. (b) Convert your machine's "contains $101$" component to a regular expression by state elimination, and check your answer against three strings. (c) Prove $\{0^i1^j : i \ne j\}$ is not regular — most cleanly by closure: assume it is, complement it, intersect with $0^*1^*$, and reduce to a language you already know is not regular.

### Module 2: Context-Free Languages & Pushdown Automata

Add one stack of unbounded memory — enough to match brackets and nest structure, not enough to count three things at once.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Context-free grammars, derivations & parse trees | Write a CFG, derive strings, build parse trees, and spot ambiguity | CFG $(V,\Sigma,R,S)$, derivation, leftmost derivation, parse tree, ambiguity, Chomsky normal form & parsing (taste) |
| 2.2 | Pushdown automata & CFG equivalence | Design a PDA and know PDAs recognize exactly the CFLs | PDA, stack operations, nondeterministic acceptance, CFG $\equiv$ PDA, empty-stack vs. final-state acceptance |
| 2.3 | The CFL pumping lemma & closure properties | Prove a language non-context-free and use CFL closure | CFL pumping lemma, $\{a^nb^nc^n\}$, closure under $\cup,\cdot,{}^*$, non-closure under $\cap$/complement, $\cap$ with a regular language |

**Boss problem 2:** (a) Give a CFG for $\{a^ib^jc^k : i + k = j\}$ and show a leftmost derivation of $aabbbc$. *(Hint: the $a$s pair with the leading $b$s and the $c$s with the trailing $b$s — so the language is a concatenation of two simpler ones.)* (b) Design a PDA for the same language, say what each state is for and what the stack holds at the moment the $b$s run out, and trace $aabbbc$ as configurations. (c) Prove $\{a^p : p \text{ is prime}\}$ is not context-free: take $s = a^q$ for a prime $q > p$, and pump to $i = q+1$ so the resulting length factors.

### Module 3: Turing Machines & Computability

Give the machine a read-write tape and it becomes as powerful as any computer will ever be — the fixed point the Church–Turing thesis names.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Turing machines | Design a TM and distinguish accepting, rejecting, and looping | TM (7-tuple), tape/head, configuration, accept/reject/loop, decider vs. recognizer |
| 3.2 | TM variants & robustness | Show multitape and nondeterministic TMs match the single-tape model | multitape TM, nondeterministic TM, simulation, robustness of the model, enumerators (taste) |
| 3.3 | The Church–Turing thesis & the universal machine | Encode a machine as a string and run it on a universal TM | Church–Turing thesis, encoding $\langle M\rangle$, universal Turing machine, "algorithm" $=$ TM |
| 3.4 | Decidable vs. Turing-recognizable languages | Separate the two classes and prove the recognizability theorem | decidable (recursive), Turing-recognizable (r.e.), co-recognizable, decidable $\iff$ both recognizable, $A_{\mathrm{DFA}}$ decidable |

**Boss problem 3:** (a) Give a Turing machine deciding $\{w \# w^{R} : w \in \{0,1\}^*\}$ — note the **reversal** — and state its running time as a function of $|w|$, deriving the exponent from the algorithm's structure. (b) Prove the decidable languages are closed under **concatenation**, being explicit about how you handle the unknown split point and why your procedure still halts on every input. (c) Prove $A_{\mathrm{REX}} = \{\langle R,w\rangle : R \text{ is a regular expression matching } w\}$ is decidable, naming every Module 1 construction you invoke.

### Module 4: Undecidability & Reductions

Some languages defeat every machine. Diagonalization builds the first one; reductions spread the damage; Rice's theorem shows almost every interesting question is infected.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Diagonalization & the halting problem | Prove $A_{\mathrm{TM}}$ and the halting problem undecidable | countability of strings, diagonalization, $A_{\mathrm{TM}}$ undecidable, the halting problem, uncomputability |
| 4.2 | Reducibility & mapping reductions | Transfer undecidability from one problem to another | mapping reduction $\le_m$, reduction proofs, $E_{\mathrm{TM}}$, $EQ_{\mathrm{TM}}$, complements & co-recognizability |
| 4.3 | Rice's theorem & more undecidable problems | Classify semantic properties of programs as undecidable | Rice's theorem, nontrivial semantic property, $\mathit{REGULAR}_{\mathrm{TM}}$, property depends only on $L(M)$ |
| 4.4 | A first look at P vs NP | Set up the complexity question this course hands off | time complexity on a TM, class $\mathrm{P}$, verifier, class $\mathrm{NP}$, the $\mathrm{P}$ vs $\mathrm{NP}$ question |

**Boss problem 4:** (a) Use Rice's theorem to show $\{\langle M\rangle : L(M) \text{ contains at least one palindrome}\}$ is undecidable, verifying **both** hypotheses explicitly; then say whether the language is Turing-recognizable and justify. (b) Give a mapping reduction $A_{\mathrm{TM}} \le_m \{\langle M\rangle : L(M) \text{ is infinite}\}$, checking both directions of the iff — then say what the explicit reduction buys you that Rice's one-line verdict does not. (c) Give a polynomial-time verifier for $\mathit{CLIQUE} = \{\langle G,k\rangle : G \text{ has a } k\text{-clique}\}$ with its running time, and explain in two sentences why exhibiting it does **not** show $\mathit{CLIQUE} \notin \mathrm{P}$.

## Sources of truth

- Sipser, *Introduction to the Theory of Computation* (primary — definitions, notation $\langle M\rangle$, proof register, and the pumping-lemma/reduction style)
- Hopcroft, Motwani & Ullman, *Introduction to Automata Theory, Languages, and Computation* (automata and grammar constructions)
- Kozen, *Automata and Computability* (alternate rigor and the lecture-sized decomposition of topics)

---

*Revision note (2026-09-01):* built in full (16 lessons) as the pilot for the
Computer Science field, under the analytical framing of `CS-BUILD-BRIEF.md`.
**The module structure, lesson list and lesson count were not changed** — the
syllabus mapped one-to-one onto the brief's problem archetypes with no
re-scoping needed, which is itself the pilot's main finding.

**All four boss problems were re-aimed.** As originally written they duplicated
material the lessons now cover directly: Boss 1(a) was lesson 1.1's P2 verbatim,
Boss 1(b) was lesson 1.2's P1, Boss 2(a) was lesson 2.1's P2(a), and Boss
problems 1(c), 2(b), 2(c), 3(a), 3(b), 3(c), 4(a), 4(b) and 4(c) each restated a
worked example or a solved problem from the corresponding lesson. Since boss
problems are administered after the module's last lesson **and** seed the app's
quiz synthesis (see `CLAUDE.md`), a duplicate is worse than useless — it tests
recall of a solution already read. The replacements cover the same skills at a
synthesis level and share no instance with any lesson problem: each now combines
at least two lessons (e.g. Boss 1 chains the product construction, state
elimination and a closure-based non-regularity argument; Boss 3 chains a Turing
machine, a closure proof and a Module 1 conversion). Every replacement was
machine-verified before being written down.

**Archetype mix as built** (from the brief's six): proof-and-invariant and
reduction-and-impossibility dominate, as predicted; hand-tracing carries Module 1
and the PDA/TM configuration work; counterexample construction appears in every
module and turned out to be the highest-value type here (find the shortest string
a buggy machine misclassifies; find the error in a bogus pumping proof; find the
error in a backwards reduction). Cost derivation appears mainly in 1.2, 3.1 and
3.2 (state-count blow-ups, exact step counts, simulation overheads) and carries
4.4. Design-under-constraint is the one archetype this course has little use for
— it belongs to `computer-architecture`, `databases` and `distributed-systems`.
