# Programming Languages & Compilers — Syllabus

> Computer Science · Tier 2 · ~21 lessons · Prereqs: [theory-of-computation](../theory-of-computation/syllabus.md), [algorithms](../algorithms/syllabus.md) · Roadmap id: `programming-languages`

## Goal

Learn to see a programming language as an object with a precise anatomy — a surface syntax, a formal meaning, and a runtime — so you can read a language's design as a set of deliberate choices rather than a pile of features. You'll turn source text into an abstract syntax tree (lexing and parsing, from hand-written recursive descent to a taste of LR), pin down what a program *means* with operational and denotational semantics, and meet the lambda calculus as the one-page core that every functional language expands. From there you'll build type systems that catch errors before a program runs — checking, Hindley–Milner inference, polymorphism, and the soundness theorem that makes "well-typed programs don't go wrong" a theorem and not a slogan — and follow a program all the way down through closures, continuations, garbage collection, and code generation. Deliberately skipped: production-compiler backend engineering (register allocation heuristics, instruction scheduling, LLVM internals) and the minutiae of any one language's implementation — you'll understand *why* the machinery works, not ship a shipping compiler.

## Dangerous Checklist

When you finish, you can:

- [ ] Write a context-free grammar for a small language, show whether it's ambiguous, and rewrite it to encode precedence and associativity
- [ ] Build a lexer as a set of regular expressions and explain why lexing is a regular-language problem while parsing is not
- [ ] Hand-write a recursive-descent parser for an expression grammar and say exactly what makes a grammar LL(1)
- [ ] Trace a shift-reduce (LR) parse and explain what a parser generator buys you over recursive descent
- [ ] Give a small-step *and* a big-step operational semantics for a toy language and prove a one-line property by rule induction
- [ ] Reduce a lambda term to normal form, encode data and control as pure functions (Church encodings), and state what confluence guarantees
- [ ] Predict how call-by-value, call-by-name, and lazy evaluation differ on the same term — including which ones diverge
- [ ] Type-check a term in the simply-typed lambda calculus and read the Curry–Howard correspondence off the rules
- [ ] Run Hindley–Milner inference by hand: generate constraints, unify them, and report the principal (most general) type
- [ ] State progress and preservation and explain how together they make a type system *sound*
- [ ] Model scope and closures with an environment, and explain lexical vs dynamic scope and what a continuation captures
- [ ] Trace a mark-and-sweep or copying garbage collector on a heap, and lower a snippet to three-address IR and optimize it

## Modules

### Module 1: Syntax & parsing

From flat text to a tree the rest of the compiler can walk. This module is applied automata theory: regular languages do the lexing, context-free grammars do the parsing, and the payoff is a clean abstract syntax tree.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Languages, paradigms & the design space | Read a language as a set of deliberate choices along a few axes | imperative/functional/logic/OO paradigms, expressions vs statements, mutability, static vs dynamic, the syntax/semantics/pragmatics split |
| 1.2 | Grammars, ambiguity & abstract syntax | Specify a language's shape and distinguish concrete from abstract syntax | context-free grammars, BNF/EBNF, derivations & parse trees, ambiguity, abstract syntax tree (AST) |
| 1.3 | Lexical analysis: from regular languages to tokens | Turn a character stream into tokens and see why this is a regular problem | tokens & lexemes, regex → NFA → DFA, maximal munch, keywords vs identifiers, ties to `theory-of-computation` |
| 1.4 | Recursive-descent & predictive parsing | Hand-write a parser and know exactly when the technique applies | top-down parsing, FIRST/FOLLOW, LL(1), left-recursion removal, precedence climbing |
| 1.5 | A taste of LR parsing | Read a shift-reduce parse and know what a parser generator gives you | bottom-up parsing, shift/reduce, LR(0) items & the item automaton, conflicts, LL vs LR tradeoffs |

**Boss problem 1:** Given the grammar $E \to E + E \mid E * E \mid (E) \mid \texttt{num}$, prove it is ambiguous by drawing two distinct parse trees for `1 + 2 * 3`. Then rewrite it into an unambiguous, left-associative grammar that gives `*` higher precedence than `+`, and hand-trace a recursive-descent parse of `1 + 2 * 3` on your new grammar, showing the AST it builds.

### Module 2: Semantics & the lambda calculus

Now that a program is a tree, what does it *mean*? Two answers — meaning-as-execution (operational) and meaning-as-mathematical-object (denotational) — and the one-page calculus that is the beating heart of every functional language.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Operational semantics: meaning by execution | Define a language by how it runs, and prove a property by rule induction | small-step vs big-step, inference rules & judgments, evaluation contexts, stuck states, rule induction |
| 2.2 | Denotational semantics: meaning as mathematical objects | Map programs to functions and see why loops need fixed points | semantic domains, compositional meaning, environments, least fixed points, the $\bot$ (nontermination) element |
| 2.3 | The untyped lambda calculus | Compute with nothing but functions | abstraction & application, free vs bound variables, $\alpha$-equivalence, capture-avoiding substitution, currying |
| 2.4 | Church encodings & $\beta$-reduction | Encode booleans, numbers, and recursion as pure functions | Church numerals & booleans, $\beta$-reduction, normal forms, confluence (Church–Rosser), the $Y$ combinator |
| 2.5 | Evaluation strategies | Predict which reduction order terminates and which diverges | call-by-value, call-by-name, normal order, lazy evaluation & thunks, strictness, why order can change termination |

**Boss problem 2:** Using the Church encodings $\overline{0} = \lambda f.\lambda x.\,x$ and $\mathrm{SUCC} = \lambda n.\lambda f.\lambda x.\, f\,(n\,f\,x)$, reduce $\mathrm{SUCC}\,(\mathrm{SUCC}\,\overline{0})$ to normal form and confirm it is the numeral $\overline{2}$. Then let $\Omega = (\lambda x.\,x\,x)(\lambda x.\,x\,x)$ and evaluate $(\lambda x.\lambda y.\,y)\,\Omega$ under call-by-name and under call-by-value, showing that one reaches a normal form and the other diverges — and say which reduction the confluence theorem does *not* rescue.

### Module 3: Type systems & functional programming

Types are a lightweight proof system bolted onto a language: they reject bad programs before they run. Build them from the simply-typed core up through inference, polymorphism, and the soundness theorem — then meet the functional-programming features that fall out for free.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The simply-typed lambda calculus | Add types to the lambda calculus and type-check a term with a derivation | typing judgment $\Gamma \vdash e : \tau$, function types, typing rules, type derivations, normalization (a taste) |
| 3.2 | Type checking & the Curry–Howard glimpse | Implement checking as tree-walking, and read types as propositions | bidirectional checking, syntax-directed rules, Curry–Howard (types ↔ propositions, programs ↔ proofs) |
| 3.3 | Type inference: Hindley–Milner & unification | Recover the most general type with no annotations | constraint generation, unification, occurs check, principal types, Algorithm W (sketch) |
| 3.4 | Polymorphism & type soundness | Generalize over types and prove well-typed programs don't go wrong | parametric polymorphism, `let`-generalization, progress & preservation, "well-typed programs don't get stuck" |
| 3.5 | Algebraic data types & pattern matching | Build data from sums and products and destructure it exhaustively | product & sum types, recursive datatypes, pattern matching, exhaustiveness, higher-order functions (map/fold) |

**Boss problem 3:** Run Hindley–Milner inference by hand on `twice = λf. λx. f (f x)`: introduce type variables, generate the equality constraints from each application, unify them (naming any occurs-check step), and report the principal type. Then attempt the same on self-application `λx. x x`, show precisely where unification fails, and connect that failure to what type soundness is protecting you from.

### Module 4: Language features, compilation & runtime

Follow a program the rest of the way down. First the features that make languages expressive — scope, closures, continuations — then the runtime and back-end that turn a typed AST into something a machine executes.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Names, scope & closures | Model variable binding with an environment and explain what a closure captures | lexical vs dynamic scope, environments, closures = code + captured environment, free-variable capture, `let`/`letrec` |
| 4.2 | State, references & the environment–store model | Add mutation without breaking your semantics | mutable references, aliasing, the store, `env → store → value`, side effects, evaluation order and mutation |
| 4.3 | Continuations & control | Reify "the rest of the computation" and build control operators from it | continuations, continuation-passing style (CPS), exceptions, `call/cc`, tail calls |
| 4.4 | Memory management & garbage collection | Explain who owns memory and how a collector reclaims it | stack vs heap, manual vs automatic, reference counting & cycles, mark-and-sweep, copying/generational GC |
| 4.5 | The compiler pipeline & intermediate representations | See the phases and why an IR sits in the middle | front/middle/back end, three-address code, control-flow graphs, SSA (a taste), lowering |
| 4.6 | Code generation & optimization | Emit code and improve it without changing meaning | instruction selection (sketch), constant folding & propagation, dead-code elimination, common-subexpression elimination, cost/benefit |

**Boss problem 4:** Lower the snippet `let x = 3 + 4; let y = x * 2; return y;` to three-address code, then apply constant folding, constant propagation, and dead-code elimination step by step, ending with the smallest equivalent program and naming which instruction each pass removes or rewrites. Second part: given a heap of five objects with two roots — where objects form one reachable chain and one unreachable 2-cycle — run mark-and-sweep, list what the mark phase colors live, and say which objects the sweep reclaims (and why reference counting alone would not).

## Sources of truth

- **Pierce, *Types and Programming Languages* (TAPL)** — the canonical reference for the lambda calculus, typing judgments, inference, and soundness (progress + preservation). Notation for Modules 2–3 follows it.
- **Aho, Lam, Sethi & Ullman, *Compilers: Principles, Techniques, and Tools* (the Dragon Book)** — lexing, LL/LR parsing, IRs, and optimization conventions for Modules 1 and 4.
- **Winskel, *The Formal Semantics of Programming Languages*** — operational and denotational semantics, rule induction, and fixed-point meaning in Module 2.
- **Friedman & Wand, *Essentials of Programming Languages* (EOPL)** — the environment/store interpreter model and continuations underpinning Module 4.
