# Programming Languages & Compilers · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

A language is a point in a design space, and this course follows one program all
the way through: characters to tokens to a tree to a meaning to a type to an IR
to machine code. This card is the lookup surface for that journey — the notation
of seven different formal systems, the rules that are easy to state and easy to
get backwards (assignment in Hoare logic, variance, the arrow subtyping rule),
and the tables you would otherwise go hunting through lessons for.

## Scope and ownership

This course shares borders with four built courses. Where a topic is owned
elsewhere, this card says so rather than restating it.

| Topic | Owner | What this course adds |
|---|---|---|
| Context-free grammars, derivations, parse trees, ambiguity, precedence layering, the dangling-else *as a grammar property* | [`theory-of-computation` 2.1](../theory-of-computation/lessons/02-01-context-free-grammars-derivations-parse-trees.md) | what a *parser* does with a grammar: LL(1) and LR tables, and how both techniques fail on the same ambiguity ([1.4](lessons/01-04-recursive-descent-and-ll1.md), [1.5](lessons/01-05-lr-parsing-and-the-item-automaton.md)) |
| Regular expressions, Thompson's construction, subset construction | [`theory-of-computation` 1.2–1.3](../theory-of-computation/lessons/01-03-regular-expressions-and-kleenes-theorem.md) | what a *lexer* does with them: maximal munch, rule priority, the lexical hacks ([1.3](lessons/01-03-lexical-analysis-in-practice.md)) |
| Monads, adjunctions, cartesian closed categories *as mathematics* | [`category-theory` 3.4, 4.1–4.3](../category-theory/lessons/04-01-monads.md) | monads as a *programming* construct: the three laws as refactoring guarantees, do-notation, effect typing ([5.5](lessons/05-05-effects-monads-and-the-categorical-view.md)) |
| Dijkstra, BFS/DFS, dynamic programming, NP-completeness | [`algorithms`](../algorithms/syllabus.md) | their use inside a compiler — GC tracing, instruction-selection tiling, register allocation ([6.5](lessons/06-05-tracing-garbage-collection.md), [7.6](lessons/07-06-code-generation-and-the-back-end.md)) |

**Convention warning.** Two notations for "meaning" appear in this course and
mean different things: $\Downarrow$ is a *big-step* judgment (term to final
value, [2.2](lessons/02-02-big-step-semantics-and-environments.md)) and
$[\![\cdot]\!]$ is a *denotation* (term to mathematical object,
[2.3](lessons/02-03-denotational-semantics-and-fixed-points.md)). They agree on
terminating programs and disagree about everything else.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\mathsf{eof}$ | the end-of-input marker in a FIRST/FOLLOW set or parse table | [1.4](lessons/01-04-recursive-descent-and-ll1.md) |
| $A \to \alpha \cdot \beta$ | an LR **item**: production with a dot marking how far the parser has got | [1.5](lessons/01-05-lr-parsing-and-the-item-automaton.md) |
| $\langle e, s\rangle \to \langle e', s\rangle$ | small-step: $e$ in state $s$ takes **one** step | [2.1](lessons/02-01-small-step-operational-semantics.md) |
| $\langle c, s\rangle \Downarrow s'$ | big-step: $c$ started in $s$ **terminates** in $s'$ | [2.2](lessons/02-02-big-step-semantics-and-environments.md) |
| $\rho$ | environment — names to values (or to locations, from [6.2](lessons/06-02-state-references-and-the-store.md)) | [2.2](lessons/02-02-big-step-semantics-and-environments.md) |
| $\sigma$ | store — locations to values; global and mutable | [6.2](lessons/06-02-state-references-and-the-store.md) |
| $[\![ e ]\!]$ | the denotation of $e$ — a mathematical object, not a run | [2.3](lessons/02-03-denotational-semantics-and-fixed-points.md) |
| $\sqsubseteq$, $\bot$ | the information order and its least element (here: the empty partial function) | [2.3](lessons/02-03-denotational-semantics-and-fixed-points.md) |
| $\mathrm{lfp}\,F$ | least fixed point of $F$ — the limit of $\bot, F(\bot), F^2(\bot),\dots$ | [2.3](lessons/02-03-denotational-semantics-and-fixed-points.md) |
| $\{P\}\ c\ \{Q\}$ | Hoare triple — **partial** correctness unless a variant is also given | [2.4](lessons/02-04-hoare-logic-and-loop-invariants.md) |
| $P[a/x]$ | $P$ with every free $x$ replaced by $a$ | [2.4](lessons/02-04-hoare-logic-and-loop-invariants.md) |
| $\lambda x.\,t$, $t_1\,t_2$ | abstraction and application; application binds **left**, $\lambda$ extends **right** | [3.1](lessons/03-01-the-untyped-lambda-calculus.md) |
| $FV(t)$ | the free variables of $t$ — also exactly what a closure must capture | [3.1](lessons/03-01-the-untyped-lambda-calculus.md) |
| $[x := s]\,t$ | capture-avoiding substitution | [3.1](lessons/03-01-the-untyped-lambda-calculus.md) |
| $\equiv_\alpha$, $\to_\beta$, $\to_\eta$ | renaming of bound variables; the one computation rule; extensionality | [3.1](lessons/03-01-the-untyped-lambda-calculus.md), [3.2](lessons/03-02-church-encodings-and-beta-reduction.md) |
| $\overline{n}$ | the Church numeral: $\lambda f.\lambda x.\ f^n\,x$ | [3.2](lessons/03-02-church-encodings-and-beta-reduction.md) |
| $\Omega$, $Y$ | $(\lambda x.x\,x)(\lambda x.x\,x)$; the fixed-point combinator | [3.3](lessons/03-03-confluence-and-the-y-combinator.md) |
| $\Gamma \vdash e : \tau$ | typing judgment — under assumptions $\Gamma$, $e$ has type $\tau$ | [4.1](lessons/04-01-the-simply-typed-lambda-calculus.md) |
| $\tau_1 \to \tau_2$ | function type; $\to$ associates **right**, matching currying | [4.1](lessons/04-01-the-simply-typed-lambda-calculus.md) |
| $\Rightarrow$ / $\Leftarrow$ | bidirectional checking: synthesize a type / check against an expected one | [4.2](lessons/04-02-type-checking-and-curry-howard.md) |
| $S$, $S\tau$ | a type substitution and its application | [4.3](lessons/04-03-unification-and-hindley-milner.md) |
| $\forall\alpha.\,\tau$ | polymorphic scheme — **the caller** chooses $\alpha$ | [4.4](lessons/04-04-polymorphism-system-f-and-parametricity.md) |
| $\Lambda\alpha.\,e$, $e\,[\tau]$ | System F type abstraction and type application | [4.4](lessons/04-04-polymorphism-system-f-and-parametricity.md) |
| $\exists\alpha.\,\tau$ | existential — **the implementation** chose $\alpha$ and you cannot find out | [5.3](lessons/05-03-recursive-types-existentials-and-modules.md) |
| $\mu\beta.\,\tau$, $\nu\beta.\,\tau$ | least / greatest fixed point of a type: finite / possibly-infinite values | [5.3](lessons/05-03-recursive-types-existentials-and-modules.md) |
| $S <: T$ | $S$ may be used wherever a $T$ is expected | [5.2](lessons/05-02-subtyping-records-and-variance.md) |
| $C\,\alpha \Rightarrow \tau$ | a class constraint — an extra dictionary parameter after elaboration | [5.4](lessons/05-04-type-classes-and-ad-hoc-polymorphism.md) |
| $\mathbin{>\!\!>\!\!=}$, $\mathbin{>\!\!=\!\!>}$ | monadic bind; Kleisli composition | [5.5](lessons/05-05-effects-monads-and-the-categorical-view.md) |
| `&T`, `&mut T` | shared borrow (many, read-only) / mutable borrow (exactly one) | [5.6](lessons/05-06-ownership-linearity-and-borrow-checking.md) |
| $\phi(x_1, x_2)$ | SSA phi-function — a note recording a merge, not an instruction | [7.2](lessons/07-02-control-flow-graphs-dominance-and-ssa.md) |
| $\mathrm{DF}(B)$, $\mathrm{DF}^+(S)$ | dominance frontier; its iterated closure | [7.2](lessons/07-02-control-flow-graphs-dominance-and-ssa.md) |
| $\bigwedge$ | the dataflow **meet** — union for *may*, intersection for *must* | [7.3](lessons/07-03-dataflow-analysis-as-a-fixed-point.md) |
| $\alpha$, $\gamma$ | abstraction and concretization maps of a Galois connection | [7.5](lessons/07-05-abstract-interpretation.md) |
| $\top$, $\nabla$ | "could be anything"; the widening operator | [7.5](lessons/07-05-abstract-interpretation.md) |

## Definitions

### The six design axes

A language is a point in a design space, not a pile of features. The axes, each
of which becomes a later module:

| # | axis | question | where |
|---|---|---|---|
| 1 | values and expressions | does every construct produce a value? | [1.2](lessons/01-02-concrete-and-abstract-syntax.md) |
| 2 | evaluation order | is an argument evaluated before the call? | [3.4](lessons/03-04-evaluation-strategies.md) |
| 3 | state and mutability | can a name be rebound, a value modified in place? | [6.2](lessons/06-02-state-references-and-the-store.md) |
| 4 | type discipline | *when* checked (static/dynamic), *how strictly* (strong/weak), *written or inferred* — three **independent** sub-axes | Modules 4–5 |
| 5 | memory | who decides when storage may be reused? | [5.6](lessons/05-06-ownership-linearity-and-borrow-checking.md), [6.4](lessons/06-04-memory-layout-and-reference-counting.md), [6.5](lessons/06-05-tracing-garbage-collection.md) |
| 6 | abstraction mechanism | how does one piece of code serve many types? | Module 5 |

**Static/dynamic and strong/weak are independent** — all four combinations are
occupied (Haskell static+strong, Python dynamic+strong, C static+weak,
JavaScript dynamic+weak). *Syntax* is which strings are legal, *semantics* what
a legal program means, *pragmatics* everything else.

*Introduced:* [1.1](lessons/01-01-languages-paradigms-and-the-design-space.md)

### Concrete and abstract syntax

Concrete syntax is a user interface; abstract syntax is a data structure. The
parse tree records the derivation (every parenthesis, every grammar variable);
the AST records the program (one node per meaningful construct).

*Introduced:* [1.2](lessons/01-02-concrete-and-abstract-syntax.md)

### Associativity from recursion direction

Precedence is encoded by **layering** variables; associativity by **which side
recurses**. $E \to E - T$ is left-recursive hence left-associative;
$E \to T - E$ is right-recursive hence right-associative. Both generate the same
strings and different trees.

*Introduced:* [1.2](lessons/01-02-concrete-and-abstract-syntax.md)

### Maximal munch

At each position take the **longest** string matching any token pattern; break
length ties by **earliest rule**. Irrevocable — the lexer never reconsiders.

*Introduced:* [1.3](lessons/01-03-lexical-analysis-in-practice.md)

### FIRST and FOLLOW

$\mathrm{FIRST}(\alpha)$ is the set of terminals that can begin a string derived
from $\alpha$, plus $\varepsilon$ if $\alpha$ can vanish.
$\mathrm{FOLLOW}(A)$ is the set of terminals that can immediately follow $A$,
plus $\mathsf{eof}$ if $A$ can end a derivation.

*Introduced:* [1.4](lessons/01-04-recursive-descent-and-ll1.md)

### LL(1)

A grammar is LL(1) when no cell of its parse table holds two productions. A
cell with two entries is a **conflict**, naming the exact nonterminal and
lookahead where one token is not enough.

*Introduced:* [1.4](lessons/01-04-recursive-descent-and-ll1.md)

### LR(0) item and the item automaton

An **item** is a production with a dot. A parser state is a *set* of items; the
automaton's states are built by closure and goto, and it recognizes exactly the
**viable prefixes** — stack contents that could still lead to a successful parse.

*Introduced:* [1.5](lessons/01-05-lr-parsing-and-the-item-automaton.md)

### Shift-reduce and reduce-reduce conflict

**Shift-reduce:** a state can both shift on $a$ and reduce on $a$ — "I cannot
tell whether this construct is finished". Usually an ambiguity or a missing
precedence declaration; generators default to *shift*.
**Reduce-reduce:** two different reductions on the same lookahead — "I cannot
tell which construct I just finished". Almost always a wrong grammar.

*Introduced:* [1.5](lessons/01-05-lr-parsing-and-the-item-automaton.md)

### Binding and use occurrence

A **binding** occurrence introduces a name; a **use** occurrence refers to one.
Name resolution is a total function from uses to bindings on well-formed
programs, computed with a stack of scope frames.

*Introduced:* [1.6](lessons/01-06-name-resolution-and-the-semantic-phase.md)

### let versus letrec

`let` resolves the initializer **before** inserting the name, so the name is not
in scope in its own definition; `letrec` inserts **first**, so it is. That single
ordering is the whole difference, and it is why recursion needs a special form.

*Introduced:* [1.6](lessons/01-06-name-resolution-and-the-semantic-phase.md)

### Value, steps, stuck

A term is a **value** if it is finished; **steps** if a rule applies; **stuck**
if it is neither. Stuck is the precise meaning of "goes wrong", and
distinguishing it from non-termination is why soundness is stated small-step.

*Introduced:* [2.1](lessons/02-01-small-step-operational-semantics.md)

### Rule induction

To prove every derivable judgment has property $P$, show each rule preserves
$P$. Induction is on the **derivation**, not the term — necessary because a rule
like $\mathsf{While}$ has a conclusion larger than its premise.

*Introduced:* [2.1](lessons/02-01-small-step-operational-semantics.md)

### Complete partial order and least fixed point

Partial functions ordered by extension form a CPO with least element $\bot$ (the
empty function). A monotone continuous $F$ has
$\mathrm{lfp}\,F = \bigsqcup_n F^n(\bot)$. **Least** matters: larger fixed points
assert termination the equations never forced.

*Introduced:* [2.3](lessons/02-03-denotational-semantics-and-fixed-points.md)

### Loop invariant and variant

An **invariant** $I$ holds on entry and is preserved by the body; with the
negated guard it must imply the postcondition. A **variant** is a natural number
that strictly decreases each iteration, proving termination.

*Introduced:* [2.4](lessons/02-04-hoare-logic-and-loop-invariants.md)

### Partial versus total correctness

$\{P\}\,c\,\{Q\}$ asserts $Q$ **if $c$ terminates**. $\{\mathsf{true}\}\ c\ \{\mathsf{false}\}$
is derivable for any divergent $c$. Partial correctness plus a variant is total.

*Introduced:* [2.4](lessons/02-04-hoare-logic-and-loop-invariants.md)

### Capture-avoiding substitution

$[x := s]\,t$ replaces free occurrences of $x$, **renaming a binder** whenever it
would capture a free variable of $s$. This is the correctness condition for
macros, generics and inlining alike.

*Introduced:* [3.1](lessons/03-01-the-untyped-lambda-calculus.md)

### Redex, normal form, confluence

A **redex** is a subterm $(\lambda x.t)\,s$; a **normal form** has none.
**Confluence** (Church–Rosser): reductions that fork can always reconverge.
Consequence: at most one normal form. **Not** a consequence: that every order
finds it.

*Introduced:* [3.3](lessons/03-03-confluence-and-the-y-combinator.md)

### Standardization

If a term has a normal form, **normal order** (leftmost-outermost) reduction
finds it. This is the completeness result confluence does not give.

*Introduced:* [3.3](lessons/03-03-confluence-and-the-y-combinator.md)

### Thunk and sharing

A **thunk** is a heap cell holding an unevaluated term with its environment, or
the value once forced. **Sharing** means all copies point at one cell, so the
first force overwrites it — the difference between call-by-name and call-by-need.

*Introduced:* [3.4](lessons/03-04-evaluation-strategies.md)

### Strong normalization

Every well-typed term of the simply-typed lambda calculus reduces to a normal
form under every order. Equivalent to **not being Turing-complete**, which is why
practical languages postulate a $\mathsf{fix}$ rule and give the theorem up.

*Introduced:* [4.1](lessons/04-01-the-simply-typed-lambda-calculus.md)

### Bidirectional type checking

Split the judgment into **synthesis** ($\Rightarrow$, work the type out) and
**checking** ($\Leftarrow$, verify against an expected type). Applications
synthesize, abstractions check — so an annotation is needed exactly where a
$\lambda$ sits with no expected type.

*Introduced:* [4.2](lessons/04-02-type-checking-and-curry-howard.md)

### Curry-Howard correspondence

A type is a proposition, a term of that type is a proof, $\to$ is implication,
application is modus ponens, $\beta$-reduction is proof normalization. The logic
is **intuitionistic** unless the language has first-class continuations.

*Introduced:* [4.2](lessons/04-02-type-checking-and-curry-howard.md)

### Most general unifier and the occurs check

$S$ unifies $\tau_1,\tau_2$ if $S\tau_1 = S\tau_2$; it is **most general** if
every unifier factors through it. The **occurs check** rejects binding $\alpha$
to a type containing $\alpha$ — types are finite trees, so no such type exists.

*Introduced:* [4.3](lessons/04-03-unification-and-hindley-milner.md)

### Principal type

$\tau$ is principal for $e$ if every type $e$ has is a substitution instance of
$\tau$. Hindley–Milner guarantees one exists and Algorithm W computes it; adding
subtyping or first-class polymorphism destroys the guarantee.

*Introduced:* [4.3](lessons/04-03-unification-and-hindley-milner.md)

### Parametricity

A polymorphic function cannot inspect the type it is instantiated at, so it
behaves uniformly — which yields theorems from types alone. Holds only in a
language **without** type-case, reflection or unsafe casts.

*Introduced:* [4.4](lessons/04-04-polymorphism-system-f-and-parametricity.md)

### Progress and preservation

**Progress:** a well-typed closed term is a value or can step.
**Preservation:** if a well-typed term steps, the result is well-typed at the
same type. Together: a well-typed program never gets **stuck** — though it may
diverge.

*Introduced:* [4.5](lessons/04-05-type-soundness-progress-and-preservation.md)

### Canonical forms

A value's type determines its shape: a value of $\tau_1\to\tau_2$ is an
abstraction, of $\mathsf{Bool}$ is `true` or `false`. The workhorse lemma inside
progress, and the first thing an unsound coercion rule breaks.

*Introduced:* [4.5](lessons/04-05-type-soundness-progress-and-preservation.md)

### Sum and product

A **product** bundles (you have an $x$ *and* a $y$); a **sum** chooses, carrying
a **tag** (a `Circle` *or* a `Rect`). The tag is what makes the payload reachable
only through a case that established it.

*Introduced:* [5.1](lessons/05-01-algebraic-data-types-and-pattern-matching.md)

### Exhaustiveness checking

A match is exhaustive when its patterns cover every value shape. Decidable and
cheap, and the entire reason `Option` beats `null` — the absence is a
constructor, so the case analysis is checked.

*Introduced:* [5.1](lessons/05-01-algebraic-data-types-and-pattern-matching.md)

### Width and depth subtyping

**Width:** more fields is a subtype — a record with extras stands in wherever
fewer are needed. **Depth:** a field may be replaced by a subtype, **only if the
record is immutable**.

*Introduced:* [5.2](lessons/05-02-subtyping-records-and-variance.md)

### Variance

**Covariant** where the parameter is produced, **contravariant** where consumed,
**invariant** where both. A mutable container is always both, hence invariant.

*Introduced:* [5.2](lessons/05-02-subtyping-records-and-variance.md)

### Iso- versus equi-recursive types

**Equi-recursive:** $\mu\beta.\tau$ and its unfolding are the same type.
**Iso-recursive:** distinct types joined by explicit `fold`/`unfold` — which real
languages hide inside constructors and pattern matching.

*Introduced:* [5.3](lessons/05-03-recursive-types-existentials-and-modules.md)

### Existential type and representation independence

$\exists\alpha.\,\tau$ packages a hidden type with operations over it. The
`open` rule forbids $\alpha$ escaping, so **two implementations with different
internal types are indistinguishable to every client** — abstraction as a
theorem, not a convention.

*Introduced:* [5.3](lessons/05-03-recursive-types-existentials-and-modules.md)

### Dictionary-passing translation

A class becomes a record type, an instance a value of it, a conditional instance
a function, and a constrained signature an extra parameter. Resolution happens
at **compile time, by type**; what runs is ordinary function application.

*Introduced:* [5.4](lessons/05-04-type-classes-and-ad-hoc-polymorphism.md)

### Coherence

Every way of resolving a constraint yields the same dictionary. This is what
lets the compiler choose freely, and why Haskell forbids two instances for one
type. Scala's implicits give it up in exchange for scoped instances.

*Introduced:* [5.4](lessons/05-04-type-classes-and-ad-hoc-polymorphism.md)

### Monad

A type former $M$ with $\mathsf{return}$ and $\mathbin{>\!\!>\!\!=}$ satisfying
three laws. Read $M\,\alpha$ as "a computation producing an $\alpha$, with some
context"; bind is **sequencing**, and each instance decides what that means.

*Introduced:* [5.5](lessons/05-05-effects-monads-and-the-categorical-view.md)

### Linear and affine types

**Linear:** a value must be used *exactly* once (drop contraction and weakening).
**Affine:** *at most* once (drop contraction only) — Rust's discipline, which is
why dropping is legal and runs a destructor.

*Introduced:* [5.6](lessons/05-06-ownership-linearity-and-borrow-checking.md)

### Aliasing XOR mutation

At any moment a value has either any number of shared borrows or exactly one
mutable borrow, never both. One rule excluding use-after-free, iterator
invalidation and data races — three bugs that are all an alias plus a write.

*Introduced:* [5.6](lessons/05-06-ownership-linearity-and-borrow-checking.md)

### Closure

Code plus the environment its free variables need — captured at the point of
**definition**, which is what lexical scope costs at run time. The capture set
is exactly $FV(\text{body})$.

*Introduced:* [6.1](lessons/06-01-names-scope-and-closures.md)

### Lexical versus dynamic scope

**Lexical:** free variables resolve in the environment where the function was
*written*. **Dynamic:** where it is *called*. The rules differ by one symbol —
which environment the body is evaluated under.

*Introduced:* [6.1](lessons/06-01-names-scope-and-closures.md)

### Environment-store model

$\rho : \mathrm{Name}\to\mathrm{Loc}$ is scoped and immutable;
$\sigma : \mathrm{Loc}\to\mathrm{Value}$ is global and mutable. **Aliasing** is
$\rho(a) = \rho(b)$ — expressible only because the two maps are separate.

*Introduced:* [6.2](lessons/06-02-state-references-and-the-store.md)

### Continuation

"The rest of the computation", reified as a function. In CPS no function
returns; each calls its continuation, so every call is a tail call and the
control stack becomes a chain of closures on the heap.

*Introduced:* [6.3](lessons/06-03-continuations-and-control.md)

### Tail call and tail-call elimination

A call is in **tail position** when its result is the enclosing function's
result. **Elimination** reuses the caller's frame, turning recursion into a loop
with constant stack depth — required by Scheme, absent on the JVM.

*Introduced:* [6.3](lessons/06-03-continuations-and-control.md)

### Escape analysis

A value may live on the stack exactly when its lifetime is contained in its
frame's. It **escapes** if returned, stored into a heap object, captured by an
escaping closure, or passed somewhere that might do any of those.

*Introduced:* [6.4](lessons/06-04-memory-layout-and-reference-counting.md)

### Reachability versus liveness

*Live* means "will be used again" — undecidable. *Reachable* means "a path of
pointers leads here from a root" — a graph traversal. Every collector uses
reachability as a conservative over-approximation of liveness.

*Introduced:* [6.5](lessons/06-05-tracing-garbage-collection.md)

### Weak generational hypothesis

Most objects die young. An empirical claim, and the justification for collecting
a nursery often with a copying collector (cost $O(\text{live})$) and older
generations rarely.

*Introduced:* [6.5](lessons/06-05-tracing-garbage-collection.md)

### Basic block

A maximal straight-line run with one entry (only the first instruction is a jump
target) and one exit (only the last is a jump). Within a block, analysis is one
pass; between blocks it is a graph.

*Introduced:* [7.1](lessons/07-01-the-compiler-pipeline-and-irs.md)

### Dominance and the dominance frontier

$B$ **dominates** $C$ if every path from entry to $C$ passes through $B$.
$\mathrm{DF}(B)$ is where $B$'s influence *stops* — reachable from $B$, and also
reachable without it. A loop header is in its own dominance frontier.

*Introduced:* [7.2](lessons/07-02-control-flow-graphs-dominance-and-ssa.md)

### Static single assignment

Every variable assigned exactly once, with **phi-functions** at the iterated
dominance frontier of the definition sites recording merges. Converts mutation
into binding; eliminated before code generation.

*Introduced:* [7.2](lessons/07-02-control-flow-graphs-dominance-and-ssa.md)

### May versus must analysis

**May** = true on *some* path, combined with **union**, initialized **empty**.
**Must** = true on *every* path, combined with **intersection**, initialized
**full**. The optimistic start is what lets a must-property survive a loop.

*Introduced:* [7.3](lessons/07-03-dataflow-analysis-as-a-fixed-point.md)

### Galois connection

Monotone maps $\alpha : \mathcal{P}(C)\to A$ and $\gamma : A \to \mathcal{P}(C)$
with $\alpha(S)\sqsubseteq a \iff S \subseteq \gamma(a)$ — the best abstract
description of a set of concrete values, and everything an abstract value could
stand for.

*Introduced:* [7.5](lessons/07-05-abstract-interpretation.md)

### Widening

An operator $\nabla$ forcing termination on an infinite lattice by jumping to a
bound when a value grows: $[0,1]\ \nabla\ [0,2] = [0,+\infty]$. Sound, and
deliberately imprecise; **narrowing** recovers some of the loss afterwards.

*Introduced:* [7.5](lessons/07-05-abstract-interpretation.md)

### Interference and spilling

Two variables **interfere** if both are live at the same point. Register
allocation is $k$-colouring the interference graph; when no node has degree
$< k$, something must **spill** to memory.

*Introduced:* [7.6](lessons/07-06-code-generation-and-the-back-end.md)

## Formulas and rules

### Grammar transformations

| Problem | Repair |
|---|---|
| left recursion $A \to A\alpha \mid \beta$ | $A \to \beta A'$, $A' \to \alpha A' \mid \varepsilon$ |
| common prefix $A \to \alpha\beta_1 \mid \alpha\beta_2$ | left factoring: $A \to \alpha A'$, $A' \to \beta_1\mid\beta_2$ |
| lost left-associativity after the above | accumulate in a **loop**, not a recursive call |

*From* [1.4](lessons/01-04-recursive-descent-and-ll1.md)

### LL(1) table construction

For each production $A\to\alpha$: put it in $M[A,a]$ for every
$a\in\mathrm{FIRST}(\alpha)\setminus\{\varepsilon\}$; and if
$\varepsilon\in\mathrm{FIRST}(\alpha)$, also for every $a\in\mathrm{FOLLOW}(A)$.
Two productions in one cell = not LL(1).

*From* [1.4](lessons/01-04-recursive-descent-and-ll1.md)

### Precedence climbing

```
parseExpr(minPrec):
    left = parseAtom()
    while lookahead is binary with prec(op) >= minPrec:
        op = consume()
        nextMin = prec(op) + 1 if leftAssoc(op) else prec(op)
        right = parseExpr(nextMin)
        left = BinOp(op, left, right)
    return left
```

The `+ 1` is what produces left-associativity; dropping it gives
right-associativity, which is what `^` and `=` want.

*From* [1.4](lessons/01-04-recursive-descent-and-ll1.md)

### SLR(1) table construction

| item in state $i$ | action |
|---|---|
| $A\to\alpha\cdot a\beta$, $a$ terminal | $\mathrm{shift}\ \mathrm{goto}(I_i,a)$ |
| $A\to\alpha\cdot$, $A \ne S'$ | $\mathrm{reduce}\ A\to\alpha$ for every $a \in \mathrm{FOLLOW}(A)$ |
| $S'\to S\cdot$ | accept on $\mathsf{eof}$ |

Hierarchy: $\text{LL}(1) \subsetneq \text{SLR}(1) \subsetneq \text{LALR}(1) \subsetneq \text{LR}(1)$.

*From* [1.5](lessons/01-05-lr-parsing-and-the-item-automaton.md)

### Desugaring rules

| Surface | Core | Temporary needed? |
|---|---|---|
| `a && b` | `if (a, b, false)` | no |
| `a \|\| b` | `if (a, true, b)` | no |
| `for (i=e; c; s) body` | `i=e; while (c) { body; s }` | no |
| `let x = e1 in e2` | `app(lam(x, e2), e1)` — **but see the typing caveat** | no |
| `a?.b` | `let t = a in if (t == null, null, t.b)` | **yes** — `a` used twice |
| `m[i] += e` | `let a=m in let j=i in a[j] = a[j] + e` | **yes** — `i` used twice |

**The rule:** a fresh temporary is required exactly when the rewrite mentions a
subexpression more than once.

*From* [1.2](lessons/01-02-concrete-and-abstract-syntax.md), [1.3](lessons/01-03-lexical-analysis-in-practice.md)

### Hoare logic

$$\frac{}{\{P[a/x]\}\ x := a\ \{P\}} \qquad \frac{\{P\}c_1\{R\}\quad\{R\}c_2\{Q\}}{\{P\}\ c_1;c_2\ \{Q\}} \qquad \frac{\{I\wedge b\}\ c\ \{I\}}{\{I\}\ \mathsf{while}\ b\ \mathsf{do}\ c\ \{I\wedge\neg b\}}$$

$$\frac{P\Rightarrow P'\quad \{P'\}c\{Q'\}\quad Q'\Rightarrow Q}{\{P\}\ c\ \{Q\}}\;(\mathsf{Conseq})$$

**Assignment runs backwards.** Three loop obligations: $P \Rightarrow I$
(establishment); $\{I\wedge b\}c\{I\}$ (preservation); $I\wedge\neg b \Rightarrow Q$
(sufficiency). Plus a variant for termination.

*From* [2.4](lessons/02-04-hoare-logic-and-loop-invariants.md)

### Weakest preconditions

$$\mathrm{wp}(x := a,\ Q) = Q[a/x] \qquad \mathrm{wp}(c_1;c_2,\ Q) = \mathrm{wp}(c_1,\ \mathrm{wp}(c_2,\ Q))$$

Loop-free verification is therefore **mechanical**: push the postcondition
backwards and check the resulting implication. Loops are where the calculus
stops and asks for an invariant.

*From* [2.4](lessons/02-04-hoare-logic-and-loop-invariants.md)

### Church encodings

| Name | Term |
|---|---|
| $\mathsf{tru}$, $\mathsf{fls}$ | $\lambda t.\lambda f.\,t$ ; $\lambda t.\lambda f.\,f$ |
| $\mathsf{and}$, $\mathsf{or}$, $\mathsf{not}$ | $\lambda p.\lambda q.\ p\,q\,p$ ; $\lambda p.\lambda q.\ p\,p\,q$ ; $\lambda p.\lambda a.\lambda b.\ p\,b\,a$ |
| $\overline{n}$ | $\lambda f.\lambda x.\ f^n\,x$ |
| $\mathsf{succ}$ | $\lambda n.\lambda f.\lambda x.\ f\,(n\,f\,x)$ |
| $\mathsf{plus}$, $\mathsf{mult}$, $\mathsf{exp}$ | $\lambda m.\lambda n.\lambda f.\lambda x.\ m\,f\,(n\,f\,x)$ ; $\lambda m.\lambda n.\lambda f.\ m\,(n\,f)$ ; $\lambda m.\lambda n.\ n\,m$ |
| $\mathsf{iszro}$ | $\lambda n.\ n\,(\lambda x.\mathsf{fls})\,\mathsf{tru}$ |
| $\mathsf{pair}$, $\mathsf{fst}$, $\mathsf{snd}$ | $\lambda a.\lambda b.\lambda s.\ s\,a\,b$ ; $\lambda p.\ p\,(\lambda a.\lambda b.a)$ ; $\lambda p.\ p\,(\lambda a.\lambda b.b)$ |
| $\Omega$ | $(\lambda x.\,x\,x)(\lambda x.\,x\,x)$ |
| $Y$ | $\lambda f.\ (\lambda x.\ f\,(x\,x))\,(\lambda x.\ f\,(x\,x))$ |
| $Z$ (call-by-value safe) | $\lambda f.\ (\lambda x.\ f\,(\lambda v.\ x\,x\,v))\,(\lambda x.\ f\,(\lambda v.\ x\,x\,v))$ |

**Caveat:** $\mathsf{exp}\ \overline{m}\ \overline{0}$ reduces to $\lambda x.x$,
which equals $\overline{1}$ only up to $\eta$, not $\alpha$.

*From* [3.2](lessons/03-02-church-encodings-and-beta-reduction.md), [3.3](lessons/03-03-confluence-and-the-y-combinator.md)

### Evaluation strategies: cost and termination

With $k$ = number of free occurrences of the parameter in the body, and $c$ = cost of the argument:

| strategy | argument evaluations | terminates when |
|---|---|---|
| call-by-value | $1$ always | the argument terminates **and** the body does |
| call-by-name | $k$ | the body terminates (argument may diverge if $k=0$) |
| call-by-need (lazy) | $\min(k,1)$ | same as call-by-name |

**CBN's termination advantage is confined to $k = 0$.** Once the parameter is
used, a divergent argument sinks every strategy.

*From* [3.4](lessons/03-04-evaluation-strategies.md)

### Typing rules (simply-typed core)

$$\frac{x:\tau\in\Gamma}{\Gamma\vdash x:\tau} \qquad \frac{\Gamma,x{:}\tau_1\vdash e:\tau_2}{\Gamma\vdash\lambda x{:}\tau_1.e : \tau_1\to\tau_2} \qquad \frac{\Gamma\vdash e_1:\tau_1\to\tau_2\quad\Gamma\vdash e_2:\tau_1}{\Gamma\vdash e_1\,e_2:\tau_2}$$

$$\frac{\Gamma\vdash e:\tau\to\tau}{\Gamma\vdash\mathsf{fix}\ e:\tau}\;(\text{postulated; costs strong normalization}) \qquad \frac{\Gamma\vdash e : S\quad S <: T}{\Gamma\vdash e : T}\;(\mathsf{Sub})$$

*From* [4.1](lessons/04-01-the-simply-typed-lambda-calculus.md), [5.2](lessons/05-02-subtyping-records-and-variance.md)

### Robinson unification

1. $\tau_1 = \alpha$: return $\{\}$ if equal; **fail if $\alpha$ occurs in $\tau_2$**; else $\{\alpha\mapsto\tau_2\}$.
2. symmetric if $\tau_2$ is a variable.
3. same base type → $\{\}$; different → fail.
4. both arrows: $S_1 = \mathrm{unify}(a_1,a_2)$, then $S_2 = \mathrm{unify}(S_1b_1, S_1b_2)$, return $S_2\circ S_1$.
5. otherwise fail (structural clash).

**Apply $S_1$ before the second call** in step 4, or the result is inconsistent.

*From* [4.3](lessons/04-03-unification-and-hindley-milner.md)

### Generalization and instantiation

$$\frac{\Gamma\vdash e:\tau\quad \alpha\notin\mathrm{ftv}(\Gamma)}{\Gamma\vdash e : \forall\alpha.\tau}\;(\mathsf{Gen}) \qquad \frac{\Gamma\vdash e:\forall\alpha.\tau}{\Gamma\vdash e : [\alpha:=\tau']\tau}\;(\mathsf{Inst})$$

**Only `let`-bound variables generalize; $\lambda$-bound ones never do.** The
side condition on $\mathsf{Gen}$ is load-bearing — a variable free in the context
is constrained from outside.

*From* [4.4](lessons/04-04-polymorphism-system-f-and-parametricity.md)

### `let` is not sugar for an application, in a typed language

| term | HM result |
|---|---|
| $\mathsf{let}\ \mathsf{id} = \lambda x.x\ \mathsf{in}\ \mathsf{id}\ \mathsf{id}$ | $a \to a$ |
| $(\lambda \mathsf{id}.\ \mathsf{id}\ \mathsf{id})\,(\lambda x.x)$ | **rejected** (occurs check) |
| $\mathsf{let}\ f = \lambda x.x\ \mathsf{in}\ (f\ \overline{3},\ f\ \mathsf{true})$ | $(\mathsf{Int},\mathsf{Bool})$ |
| $(\lambda f.\ (f\ \overline{3},\ f\ \mathsf{true}))\,(\lambda x.x)$ | **rejected** (Int vs Bool clash) |

Consequence: a compiler cannot apply [1.2](lessons/01-02-concrete-and-abstract-syntax.md)'s
`let` desugaring **before** type checking.

*From* [4.4](lessons/04-04-polymorphism-system-f-and-parametricity.md)

### Free theorems from parametricity

| type | what it must be |
|---|---|
| $\forall\alpha.\ \alpha\to\alpha$ | the identity, uniquely |
| $\forall\alpha.\ \alpha\to\alpha\to\alpha$ | exactly two: first or second |
| $\forall\alpha\beta.\ \alpha\to\beta\to\alpha$ | uniquely $K$ |
| $\forall\alpha.\ [\alpha]\to\mathsf{Nat}$ | factors through `length` |
| $\forall\alpha.\ [\alpha]\to[\alpha]$ | satisfies $\mathsf{map}\,f\circ r = r\circ\mathsf{map}\,f$ |

**A constraint is a hole in parametricity:** for $\mathsf{Ord}\,\alpha\Rightarrow[\alpha]\to[\alpha]$
the last identity holds only for **monotone** $f$.

*From* [4.4](lessons/04-04-polymorphism-system-f-and-parametricity.md), [5.4](lessons/05-04-type-classes-and-ad-hoc-polymorphism.md)

### Cardinality of types

$$|\tau_1\times\tau_2| = |\tau_1|\cdot|\tau_2| \qquad |\tau_1+\tau_2| = |\tau_1|+|\tau_2| \qquad |\tau\to\sigma| = |\sigma|^{|\tau|}$$

with $|\mathsf{Unit}| = 1$ the product identity, $|\mathsf{Void}| = 0$ the sum
identity, and $|\mathsf{Option}\,\tau| = 1 + |\tau|$. A recursive $\mu$-type with
no base case is **empty**.

*From* [5.1](lessons/05-01-algebraic-data-types-and-pattern-matching.md), [5.3](lessons/05-03-recursive-types-existentials-and-modules.md)

### Subtyping rules

$$\frac{}{\{\ell_1{:}\tau_1,\ldots,\ell_n{:}\tau_n,\ell{:}\tau\} <: \{\ell_1{:}\tau_1,\ldots,\ell_n{:}\tau_n\}}\;(\mathsf{Width})$$

$$\frac{\tau_i <: \sigma_i \text{ for each } i}{\{\overline{\ell{:}\tau}\} <: \{\overline{\ell{:}\sigma}\}}\;(\mathsf{Depth, immutable only}) \qquad \frac{T_1 <: S_1 \quad S_2 <: T_2}{S_1\to S_2 \;<:\; T_1\to T_2}\;(\mathsf{Arrow})$$

**The arrow rule is the one to memorize: contravariant in the argument,
covariant in the result.** Be liberal in what you accept, conservative in what
you produce.

*From* [5.2](lessons/05-02-subtyping-records-and-variance.md)

### Variance by position

| the parameter appears | variance | example |
|---|---|---|
| only as a return type | covariant | `Supplier<a>`, `&T`, an immutable list |
| only as a parameter type | contravariant | `Consumer<a>`, `Comparator<a>` |
| as both | **invariant** | `Box<a>`, `Ref<a>`, `&mut T`, any mutable collection |

Java's arrays are covariant and **unsound**, repaired by a runtime store check
(`ArrayStoreException`); Java's generics are invariant, with use-site wildcards
(`? extends` / `? super`, "PECS") to opt in.

*From* [5.2](lessons/05-02-subtyping-records-and-variance.md)

### The monad laws

$$\mathsf{return}\ a \mathbin{>\!\!>\!\!=} f = f\,a \qquad m \mathbin{>\!\!>\!\!=} \mathsf{return} = m \qquad (m\mathbin{>\!\!>\!\!=}f)\mathbin{>\!\!>\!\!=}g = m\mathbin{>\!\!>\!\!=}(\lambda x.\ f\,x\mathbin{>\!\!>\!\!=}g)$$

In Kleisli form: $\mathsf{return}$ is a two-sided identity for $\mathbin{>\!\!=\!\!>}$,
which is associative. **Associativity is what licenses extracting statements into
a helper** — no compiler checks it.

Do-notation: $\mathsf{do}\{x \leftarrow m; r\} \rightsquigarrow m \mathbin{>\!\!>\!\!=} \lambda x.\ \mathsf{do}\{r\}$.

*From* [5.5](lessons/05-05-effects-monads-and-the-categorical-view.md)

### Memory management compared

| | who decides | run-time cost | fails on |
|---|---|---|---|
| manual | you | none | use-after-free, double free, leak — silently |
| reference counting | a counter per object | inc/dec per pointer write, atomic if shared | **cycles**, permanently |
| tracing GC | a collector | $O(\text{live})$ per collection, pauses, headroom | reachable-but-dead (a "leak" in a GC'd language) |
| ownership types | the type checker | none | programs it cannot prove, e.g. a doubly linked list |

Mark-and-sweep: mark $O(\text{live})$, sweep $O(\text{heap})$, fragments.
Copying (Cheney): $O(\text{live})$ only, compacts, needs 2× address space, moves objects.
Generational: nursery copying + a **write barrier** on every pointer store.

*From* [6.4](lessons/06-04-memory-layout-and-reference-counting.md), [6.5](lessons/06-05-tracing-garbage-collection.md), [5.6](lessons/05-06-ownership-linearity-and-borrow-checking.md)

### The CPS transform

$$[\![ x ]\!]\,k = k\,x \qquad [\![ \lambda x.e ]\!]\,k = k\,(\lambda x.\lambda k'.\ [\![ e ]\!]\,k')$$

$$[\![ e_1\,e_2 ]\!]\,k = [\![ e_1 ]\!]\big(\lambda f.\ [\![ e_2 ]\!](\lambda v.\ f\,v\,k)\big)$$

**The nesting fixes the evaluation order.** A tail call passes $k$ through
unchanged; a non-tail call wraps it — and the wrapping *is* the stack frame.

$\mathsf{callcc} : ((\tau\to\sigma)\to\tau)\to\tau$ is **Peirce's law**;
setting the answer type to $\mathsf{Void}$ makes CPS the double-negation
translation.

*From* [6.3](lessons/06-03-continuations-and-control.md)

### The dataflow framework

$$\mathrm{IN}[B] = \bigwedge_{P\in\mathrm{pred}(B)}\mathrm{OUT}[P] \qquad \mathrm{OUT}[B] = \mathrm{gen}[B]\cup(\mathrm{IN}[B]\setminus\mathrm{kill}[B])$$

| analysis | direction | meet | init | licenses |
|---|---|---|---|---|
| reaching definitions | forward | union (may) | empty | constant & copy propagation |
| available expressions | forward | intersection (must) | **full** | common-subexpression elimination |
| live variables | backward | union (may) | empty | dead-store elimination, register allocation |
| very busy expressions | backward | intersection (must) | **full** | code hoisting |

**Terminates** because the transfer functions are monotone on a **finite**
lattice. Backward analyses swap IN/OUT and pred/succ.

*From* [7.3](lessons/07-03-dataflow-analysis-as-a-fixed-point.md)

### Optimizations and the analysis each needs

| optimization | needs | soundness side condition |
|---|---|---|
| constant folding | nothing | must match the **target's** arithmetic |
| constant propagation | reaching definitions (free in SSA) | every reaching definition assigns the same constant |
| copy propagation | reaching definitions | the source is not reassigned in between |
| common-subexpression elimination | available expressions | no intervening assignment; alias analysis if operands are memory |
| dead-code elimination | liveness | the instruction must be **effect-free and terminating** |
| loop-invariant code motion | reaching definitions + loop structure | invariance licenses the move; **speculation-safety** licenses unconditional execution |

*From* [7.4](lessons/07-04-classical-optimizations.md)

### Chaitin's register allocation

1. **Simplify** — while some node has degree $< k$, remove it and push it on a stack.
2. **Spill** — if every node has degree $\ge k$, pick one by $\mathrm{degree}/\mathrm{uses}$ and remove it.
3. **Select** — pop the stack, assigning each node a colour differing from its coloured neighbours.

Phi elimination inserts copies at the ends of the predecessor blocks;
**coalescing** removes most of them by giving non-interfering names one register.
Coalescing and spilling pull in opposite directions.

*From* [7.6](lessons/07-06-code-generation-and-the-back-end.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Context-free grammars, derivations, parse trees, ambiguity, the precedence-layering repair, the dangling-else | [`theory-of-computation` 2.1](../theory-of-computation/lessons/02-01-context-free-grammars-derivations-parse-trees.md) |
| Regular expressions, NFA/DFA equivalence, Thompson's construction, the subset construction | [`theory-of-computation` 1.2–1.3](../theory-of-computation/lessons/01-03-regular-expressions-and-kleenes-theorem.md) |
| The pumping lemma for regular languages (why indentation needs a stack) | [`theory-of-computation` 1.5](../theory-of-computation/lessons/01-05-pumping-lemma-and-non-regularity.md) |
| The CFL pumping lemma (why "declared before use" is not context-free) | [`theory-of-computation` 2.3](../theory-of-computation/lessons/02-03-cfl-pumping-lemma-and-closure.md) |
| Pushdown automata and their equivalence with CFGs | [`theory-of-computation` 2.2](../theory-of-computation/lessons/02-02-pushdown-automata-and-cfg-equivalence.md) |
| Rice's theorem — why no analysis is both sound and complete | [`theory-of-computation` 4.3](../theory-of-computation/lessons/04-03-rices-theorem-and-more-undecidable-problems.md) |
| Structural induction and well-founded descent | [`discrete-mathematics` 1.4](../discrete-mathematics/lessons/01-04-induction-and-strong-induction.md) |
| Breadth-first search (the mark phase of a collector) | [`algorithms` 3.1](../algorithms/lessons/03-01-graph-search-bfs-and-dfs.md) |
| Dynamic programming (instruction-selection tiling) | [`algorithms` 2.5](../algorithms/lessons/02-05-dynamic-programming-and-knapsack.md) |
| NP-completeness (graph colouring, hence register allocation) | [`algorithms` 4.2](../algorithms/lessons/04-02-the-np-complete-zoo.md) |
| Greedy algorithms and their counterexamples (maximal munch is one) | [`algorithms` 2.1](../algorithms/lessons/02-01-the-greedy-method-and-interval-scheduling.md) |
| Monads, adjunctions, natural transformations, cartesian closed categories | [`category-theory` 4.1](../category-theory/lessons/04-01-monads.md), [3.4](../category-theory/lessons/03-04-adjoint-functors.md), [1.5](../category-theory/lessons/01-05-natural-transformations.md) |
| Products and coproducts as universal constructions | [`category-theory` 3.1](../category-theory/lessons/03-01-products-coproducts.md) |
| Natural deduction, soundness and completeness of a proof system | [`mathematical-logic` 1.4](../mathematical-logic/lessons/01-04-proof-system-completeness.md) |
| Monotone convergence of a bounded increasing sequence | [`real-analysis` 2.1](../real-analysis/lessons/02-01-convergence-epsilon-n.md) |
| Contracts, preconditions and the loop-invariant discipline, informally | [`programming-foundations` 1.2](../programming-foundations/lessons/01-02-functions-contracts-and-invariants.md) |
| Linked lists, and the aliasing question this course formalizes | [`programming-foundations` 2.3](../programming-foundations/lessons/02-03-linked-lists.md) |

## Pitfalls

### Grammars and parsing

- "Strongly typed" and "statically typed" are **different axes**; using them interchangeably makes it impossible to say the useful thing about C. *([1.1](lessons/01-01-languages-paradigms-and-the-design-space.md))*
- A paradigm label tells you which bundle of defaults the designer started from, not how the language behaves — read the coordinates. *([1.1](lessons/01-01-languages-paradigms-and-the-design-space.md))*
- Removing left recursion **silently flips associativity**; put it back with a loop-accumulator, not a recursive call. *([1.4](lessons/01-04-recursive-descent-and-ll1.md))*
- LL(1) is a property of the **grammar**, not the language — most languages have both LL(1) and non-LL(1) grammars. *([1.4](lessons/01-04-recursive-descent-and-ll1.md))*
- FOLLOW is needed **only** because of $\varepsilon$-productions; with none, the table is built from FIRST alone. *([1.4](lessons/01-04-recursive-descent-and-ll1.md))*
- The LR stack holds **states**, not symbols; the symbols in a trace table are for humans. *([1.5](lessons/01-05-lr-parsing-and-the-item-automaton.md))*
- A shift-reduce conflict means one token of lookahead is insufficient *for this construction* — diagnose before silencing it with the generator's default. *([1.5](lessons/01-05-lr-parsing-and-the-item-automaton.md))*
- Maximal munch is a **specification**, not a heuristic: `a+++b` is `a ++ + b` and the other reading is unreachable. *([1.3](lessons/01-03-lexical-analysis-in-practice.md))*
- Write one identifier rule plus a keyword **set lookup**; per-keyword regexes mis-handle `iffy`. *([1.3](lessons/01-03-lexical-analysis-in-practice.md))*
- "Undefined variable" is a **semantic** error, not a syntax error — the program parsed fine. *([1.6](lessons/01-06-name-resolution-and-the-semantic-phase.md))*
- Shadowing **hides**, it does not overwrite; no binding is ever destroyed. *([1.6](lessons/01-06-name-resolution-and-the-semantic-phase.md))*

### Semantics

- Big-step **cannot distinguish divergence from stuckness** — both simply lack a derivation. This is structural, not a gap. *([2.2](lessons/02-02-big-step-semantics-and-environments.md))*
- Rule induction is on the **derivation**, not the term; $\mathsf{While}$'s conclusion is larger than its premise. *([2.1](lessons/02-01-small-step-operational-semantics.md))*
- $\bot$ is the **empty function**, a point in the space of meanings — not a value a program can compute. *([2.3](lessons/02-03-denotational-semantics-and-fixed-points.md))*
- The **least** fixed point is forced, not chosen: larger ones assert termination the equations never established. *([2.3](lessons/02-03-denotational-semantics-and-fixed-points.md))*
- Hoare's assignment rule runs **backwards** — substitute into the postcondition. Test any candidate on `x := x + 1`. *([2.4](lessons/02-04-hoare-logic-and-loop-invariants.md))*
- A valid triple is **partial** correctness only; the variant is the obligation people forget. *([2.4](lessons/02-04-hoare-logic-and-loop-invariants.md))*
- An invariant too strong fails preservation, too weak fails sufficiency — it must be exactly strong enough. *([2.4](lessons/02-04-hoare-logic-and-loop-invariants.md))*

### Lambda calculus and evaluation

- Substitution's **rename case** fires whenever you substitute under a binder of the same name — rare by hand, routine in an inliner or macro expander. *([3.1](lessons/03-01-the-untyped-lambda-calculus.md))*
- $\alpha$-equivalence renames **bound** variables only; $\lambda x.y$ and $\lambda x.z$ are different terms. *([3.1](lessons/03-01-the-untyped-lambda-calculus.md))*
- Confluence guarantees agreement **among orders that terminate**; it says nothing about which terminate. *([3.3](lessons/03-03-confluence-and-the-y-combinator.md))*
- $Y$ diverges under call-by-value; a strict language needs $Z$ or a `letrec` primitive. *([3.3](lessons/03-03-confluence-and-the-y-combinator.md))*
- Lazy $\ne$ call-by-name: the difference is **sharing**, and it changes the cost from $k$ to $\min(k,1)$. *([3.4](lessons/03-04-evaluation-strategies.md))*
- An unforced thunk retains its whole environment — the space leak no collector can fix. *([3.4](lessons/03-04-evaluation-strategies.md), [6.4](lessons/06-04-memory-layout-and-reference-counting.md))*

### Types

- Strong normalization is **equivalent to not being Turing-complete**; `fix` buys expressiveness and costs the theorem (soundness survives). *([4.1](lessons/04-01-the-simply-typed-lambda-calculus.md))*
- A type error means the checker **could not prove** safety, not that the program would crash. *([4.1](lessons/04-01-the-simply-typed-lambda-calculus.md), [4.3](lessons/04-03-unification-and-hindley-milner.md))*
- The occurs check is the **soundness condition**, not a performance guard — omitting it admits infinite types. *([4.3](lessons/04-03-unification-and-hindley-milner.md))*
- A suspiciously general inferred type is a common sign of a bug. *([4.3](lessons/04-03-unification-and-hindley-milner.md))*
- Soundness means never **stuck**; it permits divergence, wrong answers and exhausted memory. *([4.5](lessons/04-05-type-soundness-progress-and-preservation.md))*
- Progress requires a **closed** term — an open one is neither a value nor able to step. *([4.5](lessons/04-05-type-soundness-progress-and-preservation.md))*
- Which lemma breaks is diagnostic: **progress** fails ⟹ a term the semantics cannot run; **preservation** fails ⟹ a value can arrive at a type it should not, and a runtime check is now required. *([4.5](lessons/04-05-type-soundness-progress-and-preservation.md))*
- Parametricity holds only **without** reflection, type-case or unsafe casts — which is what Java's reflection costs. *([4.4](lessons/04-04-polymorphism-system-f-and-parametricity.md), [5.3](lessons/05-03-recursive-types-existentials-and-modules.md))*

### Type-system design

- A catch-all pattern `_` converts a future **compile error** into a future **silent bug**. *([5.1](lessons/05-01-algebraic-data-types-and-pattern-matching.md))*
- Width subtyping reads backwards on purpose: the subtype has **more fields** and **fewer values**. *([5.2](lessons/05-02-subtyping-records-and-variance.md))*
- Depth subtyping requires **immutability**; a mutable field must be invariant. *([5.2](lessons/05-02-subtyping-records-and-variance.md))*
- Unsound typing rules do not disappear — they become **run-time checks**, and you keep paying. *([5.2](lessons/05-02-subtyping-records-and-variance.md))*
- $\mu$ escapes the occurs check because it is an **explicit constructor**, so the type is still a finite tree. *([5.3](lessons/05-03-recursive-types-existentials-and-modules.md))*
- $\forall$ and $\exists$ point opposite ways: the caller chooses versus the implementation chose. *([5.3](lessons/05-03-recursive-types-existentials-and-modules.md))*
- A type class is **not** an interface: it dispatches on the *type*, so `mempty` and `read` work and have no interface equivalent. *([5.4](lessons/05-04-type-classes-and-ad-hoc-polymorphism.md))*
- Adding a constraint costs **parametricity** — prefer the unconstrained signature when it suffices. *([5.4](lessons/05-04-type-classes-and-ad-hoc-polymorphism.md))*
- The monad laws are **not compiler-checked**; a law-breaking instance silently breaks the refactorings do-notation promises. *([5.5](lessons/05-05-effects-monads-and-the-categorical-view.md))*
- `IO a` is a **description** of an action, not a performed one — nothing runs until `main`. *([5.5](lessons/05-05-effects-monads-and-the-categorical-view.md))*
- The borrow checker forbids **unsynchronized** shared mutation, not sharing; `Rc<RefCell<T>>` moves the check to run time. *([5.6](lessons/05-06-ownership-linearity-and-borrow-checking.md))*
- Rejected programs are often correct — the doubly linked list is the standing case. *([5.6](lessons/05-06-ownership-linearity-and-borrow-checking.md))*

### Runtime

- A closure captures exactly $FV(\text{body})$, not the enclosing scope — but a closure that *does* capture something large keeps it alive. *([6.1](lessons/06-01-names-scope-and-closures.md))*
- Lexical/dynamic and by-reference/by-value are **independent axes**; Python is lexical *and* by-reference, which is what produces `[2,2,2]`. *([6.1](lessons/06-01-names-scope-and-closures.md))*
- The environment cannot map names directly to values — **aliasing would be inexpressible**. *([6.2](lessons/06-02-state-references-and-the-store.md))*
- **Every** rule must thread the store, not just assignment; that pervasiveness is what the `State` monad automates. *([6.2](lessons/06-02-state-references-and-the-store.md))*
- Specifying evaluation order makes it deterministic, not irrelevant — reordering two subexpressions is still unsafe. *([6.2](lessons/06-02-state-references-and-the-store.md))*
- CPS **relocates** the stack to the heap; it does not eliminate it. *([6.3](lessons/06-03-continuations-and-control.md))*
- Tail-call elimination is a **correctness requirement** in a language without loops, and absent on the JVM. *([6.3](lessons/06-03-continuations-and-control.md))*
- Reference counting's cost is *higher* in aggregate than tracing; what it buys is **promptness**, not throughput. *([6.4](lessons/06-04-memory-layout-and-reference-counting.md))*
- A collector frees the **unreachable**, not the dead — a stale cache entry or unregistered listener is a leak in a GC'd language. *([6.5](lessons/06-05-tracing-garbage-collection.md))*
- "GC is slow" is not a claim: **throughput** and **pause time** trade against each other, and only one of them is usually your problem. *([6.5](lessons/06-05-tracing-garbage-collection.md))*

### Compilation

- The IR decides what the optimizer can **express** — a stack machine makes CSE awkward, SSA makes several analyses free. *([7.1](lessons/07-01-the-compiler-pipeline-and-irs.md))*
- The IR is a lowest common denominator: source- and target-specific facts are lost at the boundary, and must be re-derived or carried as metadata. *([7.1](lessons/07-01-the-compiler-pipeline-and-irs.md))*
- A phi-function is a **note**, not an instruction; eliminating it inserts real copies, which coalescing then mostly removes. *([7.2](lessons/07-02-control-flow-graphs-dominance-and-ssa.md), [7.6](lessons/07-06-code-generation-and-the-back-end.md))*
- Phis belong at the **iterated** dominance frontier — the iteration matters, because a phi is itself a definition. *([7.2](lessons/07-02-control-flow-graphs-dominance-and-ssa.md))*
- Dominance is the **every-path** quantifier; reachability is the **some-path** one. Hence intersection versus union. *([7.2](lessons/07-02-control-flow-graphs-dominance-and-ssa.md), [7.3](lessons/07-03-dataflow-analysis-as-a-fixed-point.md))*
- A must-analysis initialized to $\emptyset$ is a fixed point immediately and reports nothing — start **full**. *([7.3](lessons/07-03-dataflow-analysis-as-a-fixed-point.md))*
- Dataflow answers are **sound approximations**, considering paths no execution takes. *([7.3](lessons/07-03-dataflow-analysis-as-a-fixed-point.md))*
- An unused computation is deletable only if it is **effect-free and terminating**. *([7.4](lessons/07-04-classical-optimizations.md))*
- LICM needs **two** conditions: invariance licenses the move, speculation-safety licenses unconditional execution. *([7.4](lessons/07-04-classical-optimizations.md))*
- Passes interact and inhibit each other — aggressive CSE lengthens live ranges and causes spills. No pass order is optimal for all programs. *([7.4](lessons/07-04-classical-optimizations.md), [7.6](lessons/07-06-code-generation-and-the-back-end.md))*
- False positives are an analysis's **designed** failure mode, forced by Rice's theorem — the question is how few, never whether. *([7.5](lessons/07-05-abstract-interpretation.md))*
- A more precise domain costs time, space and sometimes termination; widening is the principled answer, not a hack. *([7.5](lessons/07-05-abstract-interpretation.md))*
- **A compiler owns the constant factor; you own the exponent.** No optimizer changes asymptotic complexity. *([7.6](lessons/07-06-code-generation-and-the-back-end.md))*
