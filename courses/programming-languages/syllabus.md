# Programming Languages & Compilers — Syllabus

> Computer Science · Tier 2 · ~36 lessons · Prereqs: [theory-of-computation](../theory-of-computation/syllabus.md), [algorithms](../algorithms/syllabus.md) · Roadmap id: `programming-languages`

## Goal

Learn to see a programming language as an object with a precise anatomy — a surface syntax, a formal meaning, a type discipline, and a runtime — so you can read a language's design as a set of deliberate choices rather than a pile of features. You'll turn source text into an abstract syntax tree (lexing, recursive descent, and the LR item automaton), pin down what a program *means* three different ways (operational, denotational, axiomatic), and meet the lambda calculus as the one-page core that every functional language expands. From there you'll build type systems that catch errors before a program runs — checking, Hindley–Milner inference, polymorphism and parametricity, and the soundness theorem that makes "well-typed programs don't go wrong" a theorem and not a slogan — then study the design choices layered on top (subtyping and variance, abstraction and modules, type classes, effects, ownership). Finally you'll follow a program all the way down through closures, continuations, garbage collection, SSA, dataflow analysis, and code generation. Deliberately skipped: production-compiler backend engineering (register-allocation heuristics, instruction scheduling, LLVM internals) and the minutiae of any one language's implementation — you'll understand *why* the machinery works, not ship a shipping compiler.

**What this course does not re-teach.** Context-free grammars, derivations, parse trees, ambiguity, the precedence-layering repair, and the dangling-else *as a grammar property* belong to [theory-of-computation 2.1](../theory-of-computation/lessons/02-01-context-free-grammars-derivations-parse-trees.md); regular expressions, Thompson's construction and the subset construction belong to [theory-of-computation 1.2–1.3](../theory-of-computation/lessons/01-03-regular-expressions-and-kleenes-theorem.md). This course starts where those stop: it asks what a *parser* does with a grammar, what a *lexer* does with a regular language, and what happens after the tree exists. Likewise, [category-theory](../category-theory/syllabus.md) owns monads, adjunctions and cartesian closed categories as categorical objects; Lesson 5.5 owns them as a *programming* construct and cites that course for the mathematics.

## Dangerous Checklist

When you finish, you can:

- [ ] Separate concrete from abstract syntax, encode associativity with recursion direction, and desugar a surface form into a core language
- [ ] Explain maximal munch and rule priority, and say why a lexer needs feedback from the parser in C but not in Go
- [ ] Hand-write a recursive-descent parser, compute FIRST and FOLLOW, build an LL(1) table and name every conflict in it
- [ ] Build an LR(0) item automaton, run a shift-reduce trace, and classify a conflict as shift-reduce or reduce-reduce
- [ ] Resolve a name against a scope stack and say which errors a grammar structurally cannot catch
- [ ] Give small-step *and* big-step semantics for a toy language and prove determinism by rule induction
- [ ] Read a denotational definition, and explain why a `while` loop needs a least fixed point
- [ ] Verify a loop with a Hoare triple: find the invariant, discharge the three obligations, and prove termination with a variant
- [ ] Reduce a lambda term to normal form, encode data and control as pure functions, and state what confluence does and does not guarantee
- [ ] Predict how call-by-value, call-by-name, and lazy evaluation differ on the same term — including which ones diverge
- [ ] Type-check a term in the simply-typed lambda calculus and read the Curry–Howard correspondence off the rules
- [ ] Run unification and Hindley–Milner inference by hand, report the principal type, and locate an occurs-check failure
- [ ] State progress and preservation and explain how together they make a type system *sound*
- [ ] Decide a subtyping question with the variance rule, and exhibit the unsoundness in covariant arrays
- [ ] Say what an existential type buys a module, and what a type class buys that parametric polymorphism cannot
- [ ] Explain what a linear type forbids, and trace a borrow checker over an aliasing bug
- [ ] Model scope and closures with an environment, thread a store through a semantics, and say what a continuation captures
- [ ] Trace mark-and-sweep, reference counting, and a copying collector on the same heap, and say what each one gets wrong
- [ ] Lower a snippet to three-address code, place SSA phi-functions from the dominance frontier, and run a dataflow analysis to a fixed point
- [ ] Apply constant folding, propagation, dead-code elimination and CSE, and explain why an abstract interpreter must be sound but cannot be complete

## Modules

### Module 1: Syntax and parsing

From flat text to a tree the rest of the compiler can walk, and then to a tree whose names mean something. This module is applied automata theory — but the applied half is the point, since [theory-of-computation](../theory-of-computation/syllabus.md) already owns the grammars and the automata themselves.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Languages, paradigms and the design space | Read a language as a set of deliberate choices along a few axes | imperative/functional/logic/OO, expressions vs statements, mutability, static vs dynamic, strong vs weak, syntax/semantics/pragmatics |
| 1.2 | Concrete syntax, abstract syntax and desugaring | Separate what you type from what the compiler reasons about | concrete vs abstract syntax, the AST as a datatype, associativity from recursion direction, EBNF, desugaring to a core language |
| 1.3 | Lexical analysis in practice | Turn a character stream into tokens, and meet the cases where that is hard | tokens vs lexemes, maximal munch, rule priority, keywords vs identifiers, the lexer hack, significant indentation, automatic semicolon insertion |
| 1.4 | Recursive descent, LL(1) and precedence climbing | Hand-write a parser and know exactly when the technique applies | top-down parsing, FIRST/FOLLOW, LL(1) tables and conflicts, left-recursion removal, left factoring, precedence climbing |
| 1.5 | LR parsing and the item automaton | Build the machine a parser generator builds, and read its conflicts | bottom-up parsing, shift/reduce, LR(0) items, the item automaton, SLR(1) tables, shift-reduce vs reduce-reduce conflicts, LL vs LR |
| 1.6 | Name resolution and the semantic phase | Give every identifier a referent, and see what a grammar cannot check | symbol tables, the scope stack, binding vs use occurrence, shadowing, forward references, context-sensitive checks |

**Boss problem 1:** Take the dangling-else grammar $S \to \texttt{i}\,E\,\texttt{t}\,S\,S' \mid \texttt{a}$, $S' \to \texttt{e}\,S \mid \varepsilon$, $E \to \texttt{b}$. (a) Compute FIRST and FOLLOW for all three nonterminals and build the LL(1) table; report every conflict and say which table cell it lands in. (b) Build the LR(0) item automaton and the SLR(1) table; report every conflict, naming the state, the lookahead, and whether it is shift-reduce or reduce-reduce. (c) You should find exactly one conflict each way. Explain why both techniques fail at exactly one place, why that is a fact about the *grammar* and not about LL or LR, and show that resolving both the same way — "consume the `else` now" — produces nearest-`if` binding. (d) Contrast with the layered expression grammar $E \to E + T \mid T$, $T \to T * F \mid F$, $F \to (E) \mid \texttt{n}$: state its LL(1) conflict count and its SLR(1) conflict count, and explain what the difference tells you about the two techniques.

### Module 2: Semantics — three ways to say what a program means

A program is a tree; what does it *mean*? There are three classical answers, and a working language designer uses all three: meaning-as-execution (operational), meaning-as-mathematical-object (denotational), and meaning-as-what-you-can-prove (axiomatic).

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Small-step operational semantics and rule induction | Define a language by single steps, and prove a property by induction on the rules | judgments and inference rules, the step relation, evaluation contexts, values vs stuck terms, rule induction, determinism |
| 2.2 | Big-step semantics and the environment model | Define a language by whole evaluations, and see what that hides | big-step judgment, environments, why big-step cannot distinguish divergence from stuckness, when each style is the right tool |
| 2.3 | Denotational semantics and least fixed points | Map programs to mathematical functions and see why loops need fixed points | semantic domains, compositionality, partial orders and $\bot$, monotone and continuous functions, the least fixed point of a loop |
| 2.4 | Hoare logic and loop invariants | Prove a program correct without running it | Hoare triples, partial vs total correctness, the rules of consequence and assignment, loop invariants, variants and termination, weakest preconditions |

**Boss problem 2:** Consider integer division by repeated subtraction: `q := 0; r := x; while r >= y do (r := r - y; q := q + 1)`. (a) Give a small-step operational semantics for the `while` rule alone and use it to trace the program on $x = 17$, $y = 5$, listing the state $(q, r)$ after each iteration. (b) Prove the Hoare triple $\{\,x \ge 0 \wedge y > 0\,\}\ C\ \{\,x = q \cdot y + r \wedge 0 \le r < y\,\}$: state the loop invariant, discharge the three obligations (invariant holds on entry, is preserved by the body, and with the negated guard implies the postcondition), and give a variant proving termination. (c) The invariant $x = q\cdot y + r$ alone is not enough to prove the postcondition. Say exactly which conjunct is missing and which of the three obligations fails without it.

### Module 3: The lambda calculus

Three lines of grammar, one rewrite rule, and it computes everything computable. This is the core that every functional language expands, the notation every type system is stated in, and the smallest place to study evaluation order.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The untyped lambda calculus | Compute with nothing but functions | abstraction and application, free vs bound variables, $\alpha$-equivalence, capture-avoiding substitution, currying |
| 3.2 | Church encodings and beta-reduction | Encode booleans, numbers and pairs as pure functions | $\beta$-reduction, Church booleans and numerals, `succ`/`plus`/`mult`, pairs and projections, the predecessor problem |
| 3.3 | Confluence, normal forms and the Y combinator | Know when "the" normal form is well-defined, and get recursion for free | redexes, normal form, Church–Rosser confluence, uniqueness of normal forms, fixed-point combinators, $Y$ and $Z$ |
| 3.4 | Evaluation strategies: call-by-value, call-by-name, lazy | Predict which reduction order terminates and which diverges | call-by-value, call-by-name, normal order, laziness and thunks, sharing, strictness, why confluence does not save call-by-value |

**Boss problem 3:** Let $\overline{0} = \lambda f.\lambda x.\,x$ and $\mathrm{SUCC} = \lambda n.\lambda f.\lambda x.\, f\,(n\,f\,x)$. (a) Reduce $\mathrm{SUCC}\,(\mathrm{SUCC}\,\overline{0})$ to normal form in normal order, showing every step, and confirm the result is $\alpha$-equivalent to $\overline{2}$. State how many $\beta$-steps it took. (b) Let $\Omega = (\lambda x.\,x\,x)(\lambda x.\,x\,x)$. Evaluate $(\lambda x.\lambda y.\,y)\,\Omega$ under call-by-name and under call-by-value; show that one reaches a normal form in one step and the other never terminates. (c) The term has a normal form, and confluence says every reduction sequence that *reaches* a normal form reaches the same one. Explain precisely why this does not contradict (b) — that is, state what confluence guarantees and what it conspicuously does not.

### Module 4: Type systems

Types are a lightweight proof system bolted onto a language: they reject bad programs before they run, and the price is that they also reject some good ones. Build them from the simply-typed core up through inference, polymorphism, and the soundness theorem.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The simply-typed lambda calculus | Add types to the lambda calculus and build a typing derivation | the judgment $\Gamma \vdash e : \tau$, function types, typing rules, derivation trees, strong normalization and the loss of $Y$ |
| 4.2 | Type checking and the Curry–Howard correspondence | Implement checking as a tree walk, and read types as propositions | syntax-directed rules, bidirectional checking (synthesis vs checking), types as propositions, programs as proofs, what has no proof term |
| 4.3 | Unification and Hindley–Milner inference | Recover the most general type with no annotations at all | constraint generation, Robinson unification, the occurs check, substitutions and composition, Algorithm W, principal types |
| 4.4 | Polymorphism, System F and parametricity | Generalize over types, and get theorems from types alone | `let`-generalization, prenex vs first-class polymorphism, System F, parametricity and free theorems, why HM is decidable and System F is not |
| 4.5 | Type soundness: progress and preservation | Prove that well-typed programs do not get stuck | canonical forms, progress, preservation, the syntactic soundness proof, what "stuck" means and what soundness does not promise |

**Boss problem 4:** (a) Run Hindley–Milner inference by hand on $\texttt{twice} = \lambda f.\lambda x.\; f\,(f\,x)$: introduce a type variable for each binder, generate the equality constraint from each application, solve them by unification showing each substitution, and report the principal type. (b) Attempt the same on self-application $\lambda x.\; x\,x$. Show the exact constraint that arises and the exact step at which unification fails, naming the check that rejects it. (c) $\lambda x.\,x\,x$ is a perfectly good untyped term — it reduces fine. Say what a type system is buying by rejecting it, and connect your answer to the strong-normalization property from 4.1: what could the simply-typed lambda calculus no longer express, and what did it gain?

### Module 5: Type-system design choices

Everything past the simply-typed core is a design decision with a cost. Each lesson here is one feature real languages argue about: what it buys, what it breaks, and what it costs the checker.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Algebraic data types and pattern matching | Build data from sums and products and take it apart exhaustively | product and sum types, recursive datatypes, constructors, pattern matching, exhaustiveness and redundancy checking, `Option` vs null |
| 5.2 | Subtyping, records and variance | Decide when one type may stand in for another, and when that is a hole | record subtyping, width and depth, the subsumption rule, the function-subtyping rule, covariance and contravariance, covariant arrays as a soundness bug |
| 5.3 | Recursive types, existentials and modules | Make abstraction a type-level guarantee | iso- vs equi-recursive types, `fold`/`unfold`, existential types, abstract data types, signatures and modules, representation independence |
| 5.4 | Type classes and ad-hoc polymorphism | Dispatch on type without giving up inference | overloading vs parametric polymorphism, type classes and instances, dictionary-passing translation, coherence, traits and interfaces compared |
| 5.5 | Effects, monads and the categorical view | Put "this computation does something" into the type | effects as types, the monad interface, `Maybe`/`State`/`IO`, the three monad laws, do-notation, Kleisli composition, why a cartesian closed category is the model |
| 5.6 | Ownership, linearity and borrow checking | Use the type system to decide who may free, and who may alias | linear and affine types, move semantics, ownership, shared vs mutable borrows, lifetimes, aliasing XOR mutation |

**Boss problem 5:** (a) Given `Cat <: Animal`, decide each of these three subtyping questions and give the rule that settles it: `Cat[] <: Animal[]`, `List<Cat> <: List<Animal>`, and `(Animal -> Cat) <: (Cat -> Animal)`. (b) Java answers the first one "yes". Write a four-line program that type-checks under that answer and then fails at run time, name the exception Java throws, and state which direction of the function-subtyping rule the array rule violates. (c) Verify the three monad laws for `Maybe` with `return x = Just x` and `Just x >>= f = f x`, `Nothing >>= f = Nothing`. (d) A `Maybe`-returning function and an exception both express "this can fail". State one thing the type-level version gives you that the exception does not, and one cost it imposes that the exception does not.

### Module 6: Runtime — names, control and memory

Follow a program while it runs. Everything here is what has to exist at run time because the language promised something at compile time: a closure exists because scope is lexical, a store exists because assignment exists, a collector exists because the language promised you would never free anything.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | Names, scope and closures | Model binding with an environment and say what a closure captures | lexical vs dynamic scope, environments, closure = code + captured environment, the loop-variable capture bug, `let` vs `letrec` |
| 6.2 | State, references and the environment-store model | Add mutation without breaking the semantics | mutable references, the store, the $\text{env} \to \text{store} \to (\text{value}, \text{store})$ shape, aliasing, evaluation order made observable |
| 6.3 | Continuations, CPS and control operators | Reify "the rest of the computation" and build control out of it | continuations, continuation-passing style, tail calls and tail-call elimination, exceptions as continuations, `call/cc`, generators |
| 6.4 | Memory layout, allocation and reference counting | Say who owns memory and what prompt reclamation costs | stack vs heap, activation records, manual allocation and its failure modes, reference counting, cycles, weak references |
| 6.5 | Tracing garbage collection | Reclaim memory by reachability, and pay for it in pauses | roots, mark-and-sweep, fragmentation, Cheney copying, generational collection and the weak generational hypothesis, write barriers, pause time vs throughput |

**Boss problem 6:** A heap holds six objects. `A` points to `B`; `B` points to `C`; `C` points back to `B`; `D` points to `E`; `E` points back to `D`; `F` points to nothing. The only root is `A`. (a) Run mark-and-sweep: give the mark order from a breadth-first scan of the roots, list the live set, and list exactly what the sweep reclaims. (b) Give the reference count of every object while `A` is rooted, and say which object — if any — a reference-counting collector frees *immediately*, without any collection cycle running. (c) Now suppose the root `A` is dropped. State exactly what a reference-counting collector reclaims and what it leaks, and explain what the live set's own `B`–`C` cycle shows about why tracing does not have that problem. (d) Give the to-space order a Cheney copying collector produces from root `A`, and name one cost this pays that mark-and-sweep does not.

### Module 7: Compilation — from tree to machine

The back end. An IR sits in the middle so that $m$ front ends and $n$ back ends cost $m + n$ pieces of work rather than $m \times n$; SSA makes dataflow cheap; dataflow licenses the optimizations; and abstract interpretation explains why none of it can ever be complete.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 7.1 | The compiler pipeline and intermediate representations | See the phases, and why an IR sits in the middle | front/middle/back end, the $m + n$ argument, three-address code, temporaries, lowering, basic blocks |
| 7.2 | Control-flow graphs, dominance and SSA | Build the graph optimizations run on, and give every variable one definition | control-flow graphs, dominators, immediate dominators, the dominance frontier, SSA form, phi-function placement, out-of-SSA |
| 7.3 | Dataflow analysis as a lattice fixed point | Run any dataflow analysis as one algorithm with four parameters | lattices and meet, transfer functions, gen/kill, forward vs backward, may vs must, iterating to a fixed point, termination and monotonicity |
| 7.4 | Classical optimizations | Improve code without changing its meaning, and know what licenses each one | constant folding and propagation, dead-code elimination, common-subexpression elimination, copy propagation, loop-invariant code motion, which analysis each needs |
| 7.5 | Abstract interpretation and sound-but-incomplete analysis | Approximate the undecidable on purpose, in a chosen direction | abstract domains, the sign and interval domains, concretization and abstraction, soundness, false positives, widening, Rice's theorem as the reason |
| 7.6 | Code generation and the back end | Emit real instructions and see what the last mile costs | instruction selection, calling conventions, register allocation as graph colouring (a sketch), spilling, peephole optimization, what a compiler cannot fix |

**Boss problem 7:** (a) Lower `let x = 3 + 4; let y = x * 2; return y;` to three-address code, then apply constant folding, constant propagation and dead-code elimination step by step. Name which pass rewrites or removes each instruction, and give the smallest equivalent program. (b) Take the loop CFG with entry block $B_0$, header $B_1$, body $B_2$ and exit $B_3$, with edges $B_0 \to B_1$, $B_1 \to B_2$, $B_2 \to B_1$, $B_1 \to B_3$. Compute the dominator set of each block, the immediate dominator of each, and the dominance frontier of each. (c) A variable `i` is defined in $B_0$ and redefined in $B_2$. Using the iterated dominance frontier, say exactly which blocks need a phi-function for `i`, and explain why $B_1$ appears in its own dominance frontier. (d) Run a backward may-analysis (liveness) over the same graph with gen/kill sets of your choosing and state how many passes over the blocks it takes to reach the fixed point — then say what property of the transfer functions guarantees it reaches one at all.

## Sources of truth

- **Pierce, *Types and Programming Languages* (TAPL)** — the canonical reference for the lambda calculus, typing judgments, inference, subtyping, existentials and soundness (progress + preservation). Notation for Modules 3–5 follows it.
- **Aho, Lam, Sethi & Ullman, *Compilers: Principles, Techniques, and Tools* (the Dragon Book)** — lexing, LL/LR parsing, symbol tables, IRs, dataflow and optimization conventions for Modules 1 and 7. The FIRST/FOLLOW and SLR table conventions in 1.4–1.5 are its.
- **Winskel, *The Formal Semantics of Programming Languages*** — operational, denotational and axiomatic semantics, rule induction, and fixed-point meaning in Module 2.
- **Friedman & Wand, *Essentials of Programming Languages* (EOPL)** — the environment/store interpreter model, closures and continuations underpinning Module 6.
- **Appel, *Modern Compiler Implementation*** — dominance, SSA construction and the dataflow framework in Module 7.
- **Cousot & Cousot (1977)** — abstract interpretation, for 7.5.

---

## Revision note — 2026-09-14

Rebuilt from **21 lessons in 4 modules** to **36 lessons in 7 modules** before any lesson
was written. The original was audited against the built library first; five defects
justified the rebuild.

1. **Two lessons restated the prerequisite.** [theory-of-computation 2.1](../theory-of-computation/lessons/02-01-context-free-grammars-derivations-parse-trees.md)
   already owns context-free grammars, derivations, parse trees, ambiguity, the
   precedence-layering repair *and* the dangling-else — which was essentially the whole of
   the old lesson 1.2, and the old **Boss problem 1 was that lesson's Example 2 and P3
   verbatim**. Old 1.3 similarly re-derived regex → NFA → DFA, owned by
   [theory-of-computation 1.2–1.3](../theory-of-computation/lessons/01-03-regular-expressions-and-kleenes-theorem.md).
   Both were re-aimed rather than cut: 1.2 now owns the concrete/abstract split,
   associativity-from-recursion-direction and desugaring; 1.3 owns maximal munch, rule
   priority and the lexical hacks (the C typedef problem, significant indentation,
   semicolon insertion). Boss problem 1 was rewritten to a question theory-of-computation
   does not ask — *how the two parsing techniques fail on the same ambiguity* — and every
   number in it was verified against a generated LL(1) and SLR(1) table.
2. **Four topics were promised by other built courses and taught nowhere here.**
   [programming-foundations 2.3](../programming-foundations/lessons/02-03-linked-lists.md)
   says this course "formalizes with linear types and borrow checking";
   [theory-of-computation 4.3](../theory-of-computation/lessons/04-03-rices-theorem-and-more-undecidable-problems.md)
   and [3.4](../theory-of-computation/lessons/03-04-decidable-vs-turing-recognizable.md) say
   "abstract interpretation and type systems are the standard responses";
   [category-theory](../category-theory/syllabus.md) forward-references this course for
   monads-as-effects in three separate lessons (4.1, 4.2, 4.3). Those became 5.6, 7.5 and
   5.5. The fourth: the course taught two of the three classical semantics, leaving
   axiomatic semantics absent — now 2.4, which also lands
   [programming-foundations 1.2](../programming-foundations/lessons/01-02-functions-contracts-and-invariants.md)'s
   "contracts scale up to formal specification".
3. **Lessons carrying two separable skills were split.** Old 3.4 carried polymorphism *and*
   the soundness theorem (now 4.4 and 4.5); old 4.5 carried IRs, control-flow graphs *and*
   SSA (now 7.1 and 7.2); old 4.6 carried instruction selection *and* four optimizations
   with no analysis to license them (now 7.3, 7.4 and 7.6); old 4.4 carried reference
   counting *and* three tracing collectors (now 6.4 and 6.5).
4. **Whole branches were missing.** Subtyping and variance, abstraction and modules, type
   classes — three of the loudest arguments in real language design — appeared nowhere.
   They are Module 5, along with the two promised topics above.
5. **A gap between parsing and typing.** Nothing resolved names. That is where shadowing,
   forward references and the errors a grammar structurally cannot catch live, and
   [theory-of-computation 2.3](../theory-of-computation/lessons/02-03-cfl-pumping-lemma-and-closure.md)
   points here for it ("they go in a type checker instead"). It is now 1.6.

**Boss-problem audit.** All seven were verified before any lesson was written, against a
purpose-built toolkit: a grammar engine (FIRST/FOLLOW, LL(1), LR(0) item automaton, SLR(1),
shift-reduce traces), a lambda-calculus evaluator with three reduction strategies, an
Algorithm W implementation with unification traces, a three-address-code optimizer, and
dominance/SSA/dataflow and garbage-collection simulators. The grammar engine was validated
against the Dragon Book's published tables (it reproduces the 12-state LR(0) automaton and
the exact SLR parse of `id + id * id`), and the type engine against the known principal
types of the S and K combinators. Boss 1's conflict counts, Boss 2's invariant (checked
exhaustively over a range of inputs), Boss 3's step count, Boss 4's constraints and
occurs-check failure, Boss 6's mark order and reference counts, and Boss 7's optimization
trace and dominance frontiers are all generated output, not assertions.

**Answer-input doctrine** (standing for every CS course, per Jacob's steer): every problem
resolves to a number, a bit or hex string, a classification *with its named reason*, a short
table, an explicit ordered trace, a concrete counterexample instance, or a hand derivation.
Never "draw the AST" or "implement the parser" — the app has no drawing input and free-form
code has many correct answers that cannot be self-graded. Diagrams appear *in* lessons as
SVG; they are never the deliverable. Problems whose correct answer is **not unique** —
counterexamples, desugarings, gen/kill choices, invariants — open their solution with a
one-line **accept criterion** before the worked exemplar.
