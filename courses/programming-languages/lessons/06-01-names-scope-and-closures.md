# Programming Languages · Lesson 6.1: Names, scope and closures

> ⏱ ~15 min · Module 6: Runtime · Builds on: [2.2 (big-step semantics and environments)](02-02-big-step-semantics-and-environments.md), [1.6 (name resolution)](01-06-name-resolution-and-the-semantic-phase.md) · Unlocks: [6.2 (state and the store)](06-02-state-references-and-the-store.md), [6.3 (continuations)](06-03-continuations-and-control.md)

## Why this matters

Module 6 follows a program down into the runtime, and the organizing question is: **what has to exist at run time because the language promised something at compile time?** A closure exists because scope is lexical. A store exists because assignment exists. A collector exists because the language promised you would never free anything.

This lesson does the first. Lexical scope — a variable means whatever the enclosing *text* says it means — is so universal now that it looks inevitable, but it is a choice, it was contested, and honouring it forces a specific run-time object into existence. Understanding that object explains the single most-reported closure bug in every language that has them, and it explains why [Lesson 5.3](05-03-recursive-types-existentials-and-modules.md) could say an object *is* an existential package.

## The idea

A function's body may mention names it does not bind. $\lambda y.\ x + y$ has $FV = \{x\}$ ([Lesson 3.1](03-01-the-untyped-lambda-calculus.md)), and to call it later you need a value for $x$. Where does it come from?

**Lexical (static) scope:** from the environment in force where the function was *written*. **Dynamic scope:** from the environment in force where the function is *called*.

Lexical is what every mainstream language does today, and it has a cost: the environment at the definition site must be kept alive after the defining call returns, so that the function can still be called. That retained bundle — the code together with the bindings its free variables need — is a **closure**.

$$\mathsf{closure} \;=\; \text{code} \;+\; \text{captured environment}$$

The capture list is exactly $FV(\text{body})$, which is why [Lesson 3.1](03-01-the-untyped-lambda-calculus.md)'s free-variable computation is not a formality: it is the compiler deciding what a closure must hold on to.

## The formal version

**Values.** A function value is not the syntax $\lambda x.\,e$ but the pair

$$\langle \lambda x.\,e,\ \rho\rangle$$

of the term and the environment $\rho$ captured at the point of definition.

**The rules.** Big-step, in the style of [Lesson 2.2](02-02-big-step-semantics-and-environments.md):

$$\frac{}{\rho \vdash \lambda x.\,e \Downarrow \langle\lambda x.\,e,\ \rho\rangle}\;(\mathsf{Lam}) \qquad \frac{\rho \vdash e_1 \Downarrow \langle\lambda x.\,e,\ \rho'\rangle \quad \rho \vdash e_2 \Downarrow v \quad \rho'[x\mapsto v] \vdash e \Downarrow w}{\rho \vdash e_1\,e_2 \Downarrow w}\;(\mathsf{App})$$

**Everything is in the third premise.** The body is evaluated under $\rho'$ — the environment the closure *captured* — extended with the parameter, and **not** under $\rho$, the caller's environment. Change $\rho'$ to $\rho$ and you have dynamic scope, in a one-symbol edit.

**Why dynamic scope lost.** Under it, a function's meaning depends on its caller, so:

- you cannot tell what a function does by reading it — a caller's local named `x` silently captures the function's free `x`;
- renaming a local variable is not a safe refactoring, anywhere in the program;
- names cannot be resolved at compile time, so every lookup is a run-time search up the call chain;
- $\alpha$-equivalence ([Lesson 3.1](03-01-the-untyped-lambda-calculus.md)) fails — renaming a *bound* variable can change the program's meaning.

Early Lisp had it by accident (the "funarg problem"), and the fix was closures. It survives in deliberately scoped places where the dynamic behaviour is the point: exception handlers, `let`-bound special variables in Common Lisp, thread-locals, and React's context — all "whoever is calling me, in whatever context".

**Capturing the variable or the value.** Two languages can both be lexically scoped and disagree here.

- **By reference:** the closure holds the *binding*, so later assignments to it are visible inside. Python, JavaScript, C# and Java's lambdas over effectively-final locals all do this in effect.
- **By value:** the closure holds a copy of the value at capture time. C++ lets you choose per variable (`[x]` versus `[&x]`).

The distinction is invisible until something mutates the captured variable — and a loop counter does exactly that.

**Representation.** A closure is a heap-allocated record: a code pointer plus one slot per captured variable. That is why a closure allocates and a plain function does not, and it is the connection to [Lesson 5.3](05-03-recursive-types-existentials-and-modules.md) — *hidden state plus operations over it* is an existential package, a closure, and an object, and the three are the same thing with three names. A one-method object is a closure; a closure with several entry points is an object.

## Picture

![Two boxes joined by a plus sign. The left box, labelled code, contains lambda y dot x plus y, with a note that the free variable is x. The right box, labelled captured environment, contains x maps to 10, with a note saying and nothing else. Below a dashed rule, text states that what is captured is exactly the free variables of the body, asks the question a language must answer -- whether the closure captures the variable or its value at capture time -- and notes that capturing the variable means a loop counter is shared by every closure it makes.](assets/06-01-fig1.svg)

The right box holds *only* $x$. A closure does not capture the whole enclosing scope; it captures $FV(\text{body})$, which is why a closure over one variable in a function with forty locals is cheap, and why a compiler computing free variables is doing allocation planning.

The line in coral is the question Example 2 turns on, and it is orthogonal to lexical-versus-dynamic: both by-reference and by-value capture are lexical.

## Worked examples

**Example 1 (mechanical): lexical and dynamic scope disagree.** Evaluate

```
let x = 10 in
let f = \y -> x + y in
let x = 100 in
f 1
```

*Lexical.* At the definition of `f`, the environment has $x \mapsto 10$, so the closure is $\langle \lambda y.\ x+y,\ [x\mapsto 10]\rangle$. The later `let x = 100` creates a *new* binding and does not touch the captured one. Calling `f 1` evaluates the body under $[x\mapsto 10, y\mapsto 1]$, giving **11**.

*Dynamic.* No environment is captured. At the call, the environment has $x\mapsto 100$, so the body evaluates to **101**.

**11 versus 101, from the same text.** And notice what lexical scope bought: you could determine `f`'s answer by reading the three lines above it, without knowing where it is called from.

**Example 2 (why you'd care): the loop-variable capture bug.** In Python:

```python
fs = []
for i in range(3):
    fs.append(lambda: i)
[f() for f in fs]        # [2, 2, 2]
```

Not `[0, 1, 2]`. Three closures were made, and **all three captured the same binding** — Python's `for` reuses one binding for `i` rather than making a fresh one per iteration. After the loop, that binding holds 2, so every closure reads 2.

This is by-reference capture meeting a shared binding, and it appears in every language that has both. JavaScript's `var` version returns `[3,3,3]` (the counter runs to 3 before the test fails); the `let` version returns `[0,1,2]`, because ES6 specified **a fresh binding per iteration** precisely to fix this.

Two repairs, both verified:

```python
# default arg copies the value at capture time
fs = [ (lambda i=i: i) for i in range(3) ]      # [0, 1, 2]
def mk(x): return lambda: x
# mk gives a fresh binding per call
fs = [ mk(i) for i in range(3) ]                # [0, 1, 2]
```

Both work by the same mechanism: **create a new binding whose value is fixed at capture time.** The default-argument trick copies the value into a parameter; `mk` creates a fresh `x` per call, and the closure captures *that*.

**The diagnostic worth keeping.** When closures made in a loop all see the same value, ask two questions: *does the language give each iteration its own binding?* and *does the closure capture the binding or the value?* Getting `[2,2,2]` requires "no" to the first and "the binding" to the second, and knowing which one your language answers differently tells you which fix to reach for.

## Watch out

- **You might think** a closure captures the enclosing scope — **but actually** it captures exactly $FV(\text{body})$, and compilers compute that set precisely. A closure capturing one small variable does not retain a large enclosing frame, which matters for memory: a closure that *does* capture something large keeps it alive for as long as the closure lives, and that is a common leak.
- **You might think** lexical versus dynamic and by-reference versus by-value are the same axis — **but actually** they are independent. Python is lexical *and* captures by reference, which is exactly the combination that produces Example 2. Lexical scope settles *which binding*; capture mode settles *whether later writes to it are seen*.
- **You might think** the loop bug is a language defect — **but actually** by-reference capture is what makes a counter or accumulator shared between closures work at all, which is frequently what you want. JavaScript's `let` fix was to change the *binding* discipline, not the capture mode, and that is the right place to fix it.

## One-liner

> Lexical scope means a function's free variables come from where it was written, so the run-time must keep that environment alive — and a closure is exactly the code plus the free variables it needs, which is also what an object is.

## Problems

**P1 (🟢)** Give the value under lexical scope and under dynamic scope.

(a) `let a = 1 in let g = \_ -> a in let a = 2 in g 0`
(b) `let a = 1 in let h = \a -> a in let a = 2 in h 5`
(c) `let a = 1 in let k = \y -> a + y in (let a = 10 in k 1) + k 1`

**P2 (🟡)** For each closure, list exactly what it must capture.

(a) `\y -> x + y`, with `x` bound outside
(b) `\y -> y + 1`
(c) `\y -> x * z + y - x`, with `x` and `z` bound outside
(d) `\y -> (\x -> x + y) 3`, with `x` also bound outside

**P3 (🔴)** A language is lexically scoped and captures **by value**: a closure copies each free variable's current value at the moment the closure is created.

(a) Give the result of the Python loop example under this rule, and say why.
(b) Give a program that works under by-reference capture and breaks under by-value.
(c) State which of the two makes a closure cheaper to represent, and which makes the loop bug impossible.
(d) C++ lets you choose per variable: `[x]` copies, `[&x]` captures by reference. State one concrete risk `[&x]` carries that `[x]` does not, and connect it to a lesson in Module 5.

<details>
<summary>Solutions</summary>

**P1**

(a) The closure for `g` captures $a \mapsto 1$ at its definition; the later `let a = 2` makes a new binding.

**Lexical: 1. Dynamic: 2.**

(b) `h` is $\lambda a.\ a$ — its parameter *shadows* any outer `a`, so the body's `a` is bound, not free, and $FV = \emptyset$. A closure with no captures behaves identically under both disciplines.

**Lexical: 5. Dynamic: 5.**

This is the case worth noticing: the two disciplines differ only on **free** variables. A closed function is immune to the choice, which is why the distinction never arises for combinators.

(c) `k` captures $a \mapsto 1$.

*Lexical:* both calls use the captured $a = 1$, so each gives $1 + 1 = 2$, and the sum is **4**.

*Dynamic:* the first call is inside `let a = 10`, so it gives $10 + 1 = 11$; the second is outside it, where $a = 1$, giving 2. The sum is **13**.

The lexical answer is the same for both calls, and the dynamic answer depends on where each call sits — which is the whole complaint against dynamic scope stated as arithmetic.

**P2**

(a) **$\{x\}$.** The parameter `y` is bound; `x` is free.

(b) **$\emptyset$.** Both `y` and the literal are self-contained, so this closure captures nothing and can be allocated once and shared — or compiled to a plain function pointer with no allocation at all.

(c) **$\{x, z\}$.** Note `x` occurs twice and is captured once; the capture set is a *set*, and the two occurrences read the same slot.

(d) **$\emptyset$.** This is the trap. The inner `\x -> x + y` binds `x`, so the outer `x` is shadowed and never referenced. The `y` inside is bound by the outer parameter. So the whole body has no free variables, despite `x` being in scope outside.

The general point: **a variable being in scope is not the same as being captured.** Only names that are genuinely free in the body are captured, which is why the compiler computes $FV$ rather than snapshotting the environment.

**P3**

(a) **`[0, 1, 2]`.**

Each `lambda: i` is created during a different iteration, and by-value capture copies `i`'s *current value* at creation time — 0, then 1, then 2. The later reassignments of the loop variable are invisible to a closure that already copied.

So by-value capture makes the loop bug impossible, without changing the binding discipline at all.

(b) *Accept criterion:* any program where a closure must observe a write made after its creation.

```
let count = 0 in
let tick = \_ -> (count := count + 1) in
let read = \_ -> count in
tick (); tick (); read ()
```

Under by-reference this gives **2**: both closures share the binding, `tick`'s writes are visible to `read`.

Under by-value each closure copied `count = 0` at creation, so `tick` increments its private copy and `read` returns its own frozen **0**. The counter is broken.

More generally, **any two closures that are supposed to communicate through a shared variable** break: a memoization cache, an accumulator, a mutable object built from closures, an event handler that updates state. That is precisely the [Lesson 5.3](05-03-recursive-types-existentials-and-modules.md) counter — hidden state plus operations — and by-value capture destroys the sharing that makes it an object.

(c) **By-value makes a closure cheaper to represent**: it stores plain values inline in the closure record, so a read is a direct field access and the closure does not keep the enclosing frame alive. By-reference must store a pointer to a shared cell (and, in a language where locals normally live on the stack, must *promote* the captured local to the heap so it outlives its frame — "boxing" the variable), which costs an indirection on every read and an allocation on capture.

**By-value makes the loop bug impossible**, as (a) showed.

So the trade is the usual one: by-value is cheaper and safer against the loop bug, and cannot express shared mutable state between closures; by-reference is the reverse. Languages that want both offer the choice.

(d) `[&x]` risks a **dangling reference**: the lambda holds a reference to `x`, and if the lambda outlives `x`'s scope — stored in a container, returned, or passed to another thread — it refers to a destroyed object. `[x]` copies, so the copy's lifetime is the lambda's and nothing can dangle.

The Module 5 connection is [Lesson 5.6](05-06-ownership-linearity-and-borrow-checking.md): this is exactly a borrow outliving its referent, the case the lifetime check rejects at compile time (`&x` where `x` does not live long enough, Example 1(d) there). C++ offers the same two capture modes and checks neither, so `[&x]` is a documented footgun; Rust's closures capture by borrow or by move, and the borrow checker decides at compile time whether the closure may escape. **Same feature, same risk, one language checks it.**

</details>

## Flashback

**From Lesson 5.3 (Recursive types, existentials and modules):** A package $\exists\alpha.\ \{\ldots\}$ bundles a hidden type with operations over it, and Example 2 there noted that a package *is* a closure and *is* an object.

(a) Write the counter of [Lesson 5.3](05-03-recursive-types-existentials-and-modules.md)'s Picture using closures over a shared mutable variable, with `tick` and `read` as two closures.
(b) State which capture mode from this lesson your answer requires, and what plays the role of the existential's hidden type.

<details>
<summary>Solution</summary>

(a) Return a pair of closures sharing one captured binding:

```
let makeCounter = \_ ->
      let n = ref 0 in
      ( \_ -> n := !n + 1 ,        -- tick
        \_ -> !n )                 -- read
in
let (tick, read) = makeCounter () in
tick (); tick (); tick (); read ()      -- 3
```

Both closures capture the same `n`. `makeCounter` has returned by the time either is called, so `n` cannot live on its stack frame — it is kept alive precisely because the closures reference it, which is the run-time obligation lexical scope imposes.

(b) **It requires by-reference capture.** The two closures must see each other's writes, so they must share the binding rather than each holding a copy — by-value capture would give each its own `n` and `read` would always return 0, exactly P3(b).

**The captured environment plays the role of the hidden type.** In [Lesson 5.3](05-03-recursive-types-existentials-and-modules.md) the client received $\exists C.\ \{\mathit{tick} : C\to C,\ \mathit{read} : C\to \mathsf{Nat}\}$ and could not learn that $C$ was $\mathsf{Nat}$; here the client receives two functions and has no syntax whatsoever for reaching `n` — it is not a field, not a parameter, and not in scope anywhere the client can write.

The correspondence is exact and worth stating in both directions:

| existential package | closure pair |
|---|---|
| hidden type $C$ | the captured environment |
| the operations record | the tuple of closures |
| $\mathsf{T\text{-}Open}$'s side condition ($\alpha$ may not escape) | lexical scope (`n` is not in the client's scope) |
| representation independence | the client can only call `tick` and `read` |

And the difference is *where the guarantee comes from*: the package's is a **typing rule**, checked by the compiler and provable as a theorem; the closure's is a **scoping rule**, equally effective here but defeated by anything that can inspect a closure's captured environment — a debugger, a reflective runtime, `__closure__` in Python. Which is the same reflection caveat as [Lesson 5.3](05-03-recursive-types-existentials-and-modules.md) P3(d).

</details>

## Connections

- **Backward:** the environment is [Lesson 2.2](02-02-big-step-semantics-and-environments.md)'s, and the capture set is [Lesson 3.1](03-01-the-untyped-lambda-calculus.md)'s $FV$ — which is why that lesson insisted the free-variable computation was not a formality. The scope stack of [Lesson 1.6](01-06-name-resolution-and-the-semantic-phase.md) is what makes the capture decidable at compile time.
- **Forward:** [Lesson 6.2](06-02-state-references-and-the-store.md) adds the store that P3(b)'s counter needs, and makes aliasing explicit. A closure's captured environment must be heap-allocated and is therefore a root for [Lesson 6.5](06-05-tracing-garbage-collection.md)'s collector — and a closure retaining something large is a classic leak.
- **Sideways:** a closure and an object are the same construct ([Lesson 5.3](05-03-recursive-types-existentials-and-modules.md)), which is why a language with first-class functions does not strictly need objects and vice versa — and the choice between them is the expression problem of [Lesson 5.1](05-01-algebraic-data-types-and-pattern-matching.md) P3(d) in another costume.
