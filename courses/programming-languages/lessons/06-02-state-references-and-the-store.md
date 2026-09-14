# Programming Languages · Lesson 6.2: State, references and the environment-store model

> ⏱ ~15 min · Module 6: Runtime · Builds on: [6.1 (names, scope and closures)](06-01-names-scope-and-closures.md), [2.2 (big-step semantics)](02-02-big-step-semantics-and-environments.md) · Unlocks: [6.3 (continuations)](06-03-continuations-and-control.md), [6.4 (memory layout)](06-04-memory-layout-and-reference-counting.md)

## Why this matters

[Lesson 1.1](01-01-languages-paradigms-and-the-design-space.md)'s axis 3 claimed that a language without mutation has a much simpler semantics, and promised this lesson would show *how much* simpler. Here is the accounting.

Adding assignment does not add a rule. It adds a **second component to every judgment** — every rule in the language must now thread it — and with it come three things that did not exist before: aliasing, an observable evaluation order, and the possibility that evaluating an expression changes what a *different* expression means. Those three are not independent features; they are one consequence, and it is the reason [Lesson 2.1](02-01-small-step-operational-semantics.md) P2 could not answer its own question about evaluation order until now.

It also settles a modelling question that looks pedantic and is not: an environment maps names to **locations**, not to values. Collapsing the two makes aliasing inexpressible, and aliasing is the whole point.

## The idea

Split the one map into two.

$$\text{environment } \rho : \mathrm{Name} \to \mathrm{Loc} \qquad\qquad \text{store } \sigma : \mathrm{Loc} \to \mathrm{Value}$$

The **environment** says which box a name refers to. The **store** says what is in each box. And they behave completely differently:

- $\rho$ is **scoped and immutable** — entering a scope extends it, leaving restores it, and nobody writes to an existing entry.
- $\sigma$ is **global and mutable** — it threads through the whole computation, and every assignment updates it.

Two names bound to the same location are **aliases**. That is expressible only because the two maps are separate: with a single $\rho : \mathrm{Name}\to\mathrm{Value}$ there is nowhere for the sharing to live, and assigning to `a` could never affect `b`.

## The formal version

**The judgment gains a component.** Where [Lesson 2.2](02-02-big-step-semantics-and-environments.md) had $\rho \vdash e \Downarrow v$, we now need

$$\rho \vdash \langle e, \sigma\rangle \Downarrow \langle v, \sigma'\rangle$$

read: "in environment $\rho$, evaluating $e$ with store $\sigma$ yields value $v$ and the updated store $\sigma'$". **Every rule must thread $\sigma$**, even rules about constructs that cannot possibly change it — that threading is the cost, and it is pervasive.

$$\frac{\rho \vdash \langle e_1,\sigma\rangle \Downarrow \langle n_1,\sigma_1\rangle \qquad \rho \vdash \langle e_2,\sigma_1\rangle \Downarrow \langle n_2,\sigma_2\rangle}{\rho \vdash \langle e_1 + e_2,\ \sigma\rangle \Downarrow \langle n_1+n_2,\ \sigma_2\rangle}\;(\mathsf{Add})$$

**Look at the store subscripts.** $\sigma$ goes into the left operand, $\sigma_1$ comes out and goes into the right, $\sigma_2$ comes out. *That chain is the evaluation order, written down.* Swap the two premises' stores and you have specified right-to-left evaluation. In [Lesson 2.2](02-02-big-step-semantics-and-environments.md) there was no chain to swap, which is why the order was unobservable there and is observable here.

**References.**

$$\frac{\rho\vdash\langle e,\sigma\rangle \Downarrow \langle v,\sigma'\rangle \qquad \ell \notin \mathrm{dom}(\sigma')}{\rho\vdash\langle \mathsf{ref}\ e,\ \sigma\rangle \Downarrow \langle \ell,\ \sigma'[\ell\mapsto v]\rangle}\;(\mathsf{Ref})$$

$$\frac{\rho\vdash\langle e,\sigma\rangle \Downarrow \langle \ell,\sigma'\rangle}{\rho\vdash\langle !e,\ \sigma\rangle \Downarrow \langle \sigma'(\ell),\ \sigma'\rangle}\;(\mathsf{Deref}) \qquad \frac{\rho\vdash\langle e_1,\sigma\rangle\Downarrow\langle\ell,\sigma_1\rangle \quad \rho\vdash\langle e_2,\sigma_1\rangle\Downarrow\langle v,\sigma_2\rangle}{\rho\vdash\langle e_1 := e_2,\ \sigma\rangle \Downarrow \langle (),\ \sigma_2[\ell\mapsto v]\rangle}\;(\mathsf{Assign})$$

$\mathsf{ref}$ allocates a fresh location; $!$ reads; $:=$ writes. **A location is a first-class value** — that is what makes a reference storable, passable and aliasable.

**Aliasing, precisely.** Names $a$ and $b$ alias when $\rho(a) = \rho(b)$. Then $a := 5$ changes $\sigma$ at that location, and a subsequent $!b$ reads 5. Nothing about the environment changed; the *contents* did, and the sharing was already there.

**Three consequences, all from the same chain.**

1. **Evaluation order becomes observable.** $f() + g()$ can give different answers under the two orders if either writes to a location the other reads. C leaves the order unspecified precisely to let compilers choose, and then must declare programs that depend on it undefined.
2. **Referential transparency is lost.** $e + e$ is no longer $2e$ when $e$ has an effect; you can no longer substitute equals for equals, which is the foundation every optimization in [Lesson 7.4](07-04-classical-optimizations.md) has to work around.
3. **Reasoning becomes non-local.** A function's behaviour now depends on the store, which any caller may have modified — which is why the Hoare logic of [Lesson 2.4](02-04-hoare-logic-and-loop-invariants.md) has assertions about program *state* rather than merely about values.

**And this is exactly the State monad.** The shape $\sigma \to (v, \sigma')$ is [Lesson 5.5](05-05-effects-monads-and-the-categorical-view.md)'s `State s a = s -> (a, s)`, and the store-threading in $\mathsf{Add}$ is what `>>=` does automatically. **Threading a store by hand *is* the monad, written out** — which is the honest answer to why Haskell bothers: not to avoid state, but to avoid writing those subscripts in every rule.

## Picture

![Two boxes joined by arrows. The left box, labelled environment, lists a mapping to loc 1, b mapping to loc 1, and c mapping to loc 2. The right box, labelled store, lists loc 1 holding 7 and loc 2 holding 0. Three arrows run from the environment entries to the store entries, with both a and b pointing at loc 1. Below, text notes that a and b name the same location so assigning through a changes b, that this is aliasing and is invisible in the environment alone, and that binding is scoped and immutable while the store is global and mutable.](assets/06-02-fig1.svg)

Two arrows converging on `loc 1` is the entire content of aliasing, and it is a picture you cannot draw with one map. Note also what the picture does *not* show: which of `a` and `b` was created first, or whether they are in the same scope. Aliasing is a property of the store's shape, not of the program's structure — which is why it is hard to reason about and why [Lesson 5.6](05-06-ownership-linearity-and-borrow-checking.md) attacks it with a type system rather than a convention.

## Worked examples

**Example 1 (mechanical): thread the store.** Evaluate `let a = ref 1 in let b = a in (a := 5; !b)`.

| step | environment | store | result |
|---|---|---|---|
| `ref 1` | — | $[\ell_1 \mapsto 1]$ | $\ell_1$ |
| `let a = ...` | $[a\mapsto \ell_1]$ | $[\ell_1\mapsto 1]$ | — |
| `let b = a` | $[a\mapsto\ell_1,\ b\mapsto\ell_1]$ | $[\ell_1\mapsto 1]$ | — |
| `a := 5` | unchanged | $[\ell_1\mapsto 5]$ | $()$ |
| `!b` | unchanged | $[\ell_1\mapsto 5]$ | **5** |

`b` was never assigned to and its value changed. The environment never changed after the two `let`s — **all the action was in the store**, and the sharing was established by `let b = a`, which copied a *location*, not a value.

Contrast `let b = ref (!a)`, which would allocate a fresh $\ell_2$ holding 1 and leave `!b` at 1 after the assignment. That is the copy-versus-alias distinction, and it is exactly [Lesson 6.1](06-01-names-scope-and-closures.md) P3's capture-by-value versus capture-by-reference, one level down.

**Example 2 (why you'd care): evaluation order becomes a language decision.** Consider

```
let a = ref 0 in
let f = \_ -> (a := !a + 1; !a) in
let g = \_ -> (a := !a * 10; !a) in
f () + g ()
```

*Left to right.* `f()` sets $a$ to 1 and returns 1; `g()` sets $a$ to 10 and returns 10. Sum **11**.

*Right to left.* `g()` sets $a$ to 0 and returns 0; `f()` sets $a$ to 1 and returns 1. Sum **1**.

**11 versus 1, from an unspecified order.** In a pure language this could not happen — [Lesson 2.1](02-01-small-step-operational-semantics.md) P2(b) argued the orders were confluent, and P2(c) predicted exactly this as the thing that would break it.

So a language must choose, and the choice is a real trade:

- **Specify it** (Java, C#, JavaScript, Python: left to right). Programs are portable and predictable; the compiler loses freedom to reorder for better register allocation or instruction scheduling.
- **Leave it unspecified** (C, C++ before C++17). The compiler may pick whichever is faster per call site, and any program that depends on the order has undefined behaviour — a well-known and frequently-hit hazard.

**The general principle: effects convert an implementation freedom into a specification obligation.** Every question the pure semantics could leave open, the impure one must answer, and every answer costs either performance or portability. That is the precise version of [Lesson 1.1](01-01-languages-paradigms-and-the-design-space.md)'s claim that immutability makes evaluation order stop mattering.

## Watch out

- **You might think** the environment could map names directly to values, with the store as an optimization — **but actually** aliasing is then inexpressible: with $\rho : \mathrm{Name}\to\mathrm{Value}$ there is no way for two names to share, so `a := 5` could never be observed through `b`. The indirection is the model's content, not its overhead.
- **You might think** the store threads through only the rules for assignment — **but actually** *every* rule must thread it, including addition, application, and constants. That pervasiveness is the cost of adding state to a semantics, and it is what the State monad automates.
- **You might think** specifying evaluation order left-to-right makes the problem go away — **but actually** it makes it *deterministic*, which is better but not the same. The program still behaves differently depending on which operand you wrote first, so reordering two subexpressions is no longer a safe refactoring, and that is a permanent tax on reasoning.

## One-liner

> Assignment does not add a rule, it adds a component to every rule — and the chain of stores through the premises *is* the evaluation order, which is why order stops mattering exactly when effects do.

## Problems

**P1 (🟢)** Give the final value and the final store for each, starting from an empty store.

(a) `let a = ref 3 in (a := !a + 1; !a)`
(b) `let a = ref 3 in let b = ref 3 in (a := 9; !b)`
(c) `let a = ref 3 in let b = a in (b := 9; !a)`
(d) `let a = ref 3 in let b = ref (!a) in (a := 9; !b)`

**P2 (🟡)** For each pair of expressions, say whether they are interchangeable in a language with references, and give a store and a counterexample if not.

(a) `e + e` and `2 * e`
(b) `let x = e in x + x` and `e + e`
(c) `f () + g ()` and `g () + f ()`
(d) `(a := 1; a := 1)` and `a := 1`

**P3 (🔴)** A designer wants the simplicity of the pure semantics *and* mutable state, and proposes: keep $\rho : \mathrm{Name}\to\mathrm{Value}$ and implement assignment by **rebinding the name** in the environment.

(a) State what this gives up, with a two-line program distinguishing it from the store model.
(b) State what it gains — name a specific class of reasoning that becomes valid again.
(c) A language that made exactly this choice would resemble a feature you have already seen in this course. Name it and say what plays the role of the rebinding.
(d) Give the scoping problem that arises when the rebinding happens inside an inner scope, and name the two possible answers.

<details>
<summary>Solutions</summary>

**P1**

(a) `ref 3` allocates $\ell_1 \mapsto 3$. Then `a := !a + 1` reads 3, writes 4. Then `!a` reads 4.

**Value 4**, store $[\ell_1 \mapsto 4]$.

(b) Two separate `ref`s allocate two locations: $\ell_1\mapsto 3$ and $\ell_2\mapsto 3$. `a := 9` writes to $\ell_1$ only, and `!b` reads $\ell_2$.

**Value 3**, store $[\ell_1\mapsto 9,\ \ell_2\mapsto 3\,]$. Equal *values* do not make aliases; only a shared location does.

(c) `let b = a` copies the location, so $\rho(a) = \rho(b) = \ell_1$. `b := 9` writes $\ell_1$, and `!a` reads it.

**Value 9**, store $[\ell_1\mapsto 9]$. This is the alias.

(d) `ref (!a)` reads `a`'s *value* (3) and allocates a **fresh** location for it: $\ell_2\mapsto 3$. `a := 9` writes $\ell_1$; `!b` reads $\ell_2$.

**Value 3**, store $[\ell_1\mapsto 9,\ \ell_2\mapsto 3]$.

Comparing (c) and (d) gives the rule: `let b = a` shares, `let b = ref (!a)` copies — and the difference is one dereference-and-reallocate.

**P2**

(a) **Not interchangeable.** With `e = (a := !a + 1; !a)` and store $[\ell_a \mapsto 0]$: `e + e` evaluates the effect twice, giving $1 + 2 = 3$; `2 * e` evaluates it once, giving $2 \cdot 1 = 2$.

(b) **Not interchangeable**, and this is the pair worth studying. With the same `e` and store: `let x = e in x + x` evaluates `e` **once**, binds 1, and gives $1+1 = 2$. `e + e` evaluates it **twice**, giving $1 + 2 = 3$.

This is exactly [Lesson 1.2](01-02-concrete-and-abstract-syntax.md)'s fresh-temporary rule, and it shows why that rule exists: `let` is the construct that evaluates once and uses many times, and replacing it with duplication changes the number of effects.

(c) **Not interchangeable** in general — this is Example 2, which gave 11 one way and 1 the other. They *are* interchangeable when neither `f` nor `g` writes to a location the other reads, which is the condition an optimizing compiler must establish before reordering ([Lesson 7.4](07-04-classical-optimizations.md)).

(d) **Interchangeable**, for a plain reference. Both leave $\sigma(\ell_a) = 1$ and return $()$, and no intermediate state is observable by any single-threaded continuation, since nothing runs between the two writes.

The caveats are worth knowing, because both are real: if the location is `volatile`, memory-mapped hardware, or shared with another thread, the two writes are distinguishable by an outside observer. And dropping the redundant store is exactly what **dead-store elimination** ([Lesson 7.4](07-04-classical-optimizations.md)) does — an optimization that is sound under the single-threaded semantics here and requires extra care under a memory model.

**P3**

(a) It gives up **aliasing**, and with it the ability for a mutation to be observed through a different name.

Two-line distinguisher:

```
let a = ref 3 in let b = a in (a := 9; !b)
```

Under the store model this is **9** (P1c): `a` and `b` share $\ell_1$, and writing through one is read through the other.

Under rebinding, `let b = a` copies `a`'s current *value* into a new binding for `b`, and `a := 9` rebinds only `a`. So `!b` is **3**. The two models disagree, and the disagreement is exactly the aliasing.

(The same program also shows mutation cannot escape a function: a callee rebinding its parameter cannot affect the caller's binding, so there are no out-parameters and no mutation through a reference argument.)

(b) It gains back **local reasoning about values** — specifically, **referential transparency within a scope**. If a name's value can only change by a rebinding you can see in the enclosing text, then reading the code of a block tells you every value each name can take, with no need to consider what any callee might have done to a shared location.

Concretely, the substitution of equals for equals becomes valid again for names: two occurrences of `x` between its binding and the next rebinding of `x` denote the same value, which is what licenses common-subexpression elimination on variables without an alias analysis ([Lesson 7.4](07-04-classical-optimizations.md)).

(c) It resembles **capture by value** from [Lesson 6.1](06-01-names-scope-and-closures.md) P3 — and more sharply, it resembles the **State monad** of [Lesson 5.5](05-05-effects-monads-and-the-categorical-view.md) with the state being the environment itself rather than a separate store.

What plays the role of the rebinding: producing a **new environment** and passing it forward, rather than mutating a cell. That is precisely `s -> (a, s)`, and it is why a purely functional "state" implemented with an updated record has no aliasing — each update yields a new value, and nobody else's handle changes.

(This is also, at a different scale, how SSA form works: [Lesson 7.2](07-02-control-flow-graphs-dominance-and-ssa.md) gives each assignment a *new name* rather than overwriting, which is rebinding rather than mutation, and it is done precisely to recover the local reasoning of (b).)

(d) The problem: if `a := 9` inside an inner block means "rebind `a`", does the new binding survive the block's end?

The two possible answers:

1. **The rebinding is scoped** — it dies with the block, and the outer `a` reverts to its old value on exit. Assignment becomes a `let` with a funny spelling, and cannot be used to communicate a result out of a loop body or a conditional. Nearly useless as an imperative construct.
2. **The rebinding escapes the block** — the inner assignment updates the binding visible outside. This restores usefulness but reintroduces non-local effect: reading a block no longer tells you the outer bindings are unchanged, and now you need a rule for what happens when the inner block *shadows* `a` with its own binding first.

Real languages that assign without a store face exactly this and answer (2) with a shadowing rule — Python's `global` and `nonlocal` keywords exist precisely to say which binding an assignment targets, and JavaScript's `var`-versus-`let` hoisting is the same question. **Removing the store does not remove the difficulty; it moves it into the scoping rules**, which is the honest assessment of the proposal.

</details>

## Flashback

**From Lesson 5.5 (Effects, monads and the categorical view):** The `State` monad has $M\alpha = s \to (\alpha, s)$, with `return a = \s -> (a, s)` and bind threading the state from the first computation into the second.

(a) Write the $\mathsf{Add}$ rule of this lesson as a do-block in the `State` monad.
(b) State which of the three monad laws corresponds to a property of store-threading you have already relied on in this lesson, and name that property.

<details>
<summary>Solution</summary>

(a) The rule threads $\sigma \to \sigma_1 \to \sigma_2$ through two sub-evaluations and combines the results. In do-notation the threading is implicit:

```
eval (Add e1 e2) = do
    n1 <- eval e1
    n2 <- eval e2
    return (n1 + n2)
```

which desugars ([Lesson 5.5](05-05-effects-monads-and-the-categorical-view.md)) to

$$\mathsf{eval}\ e_1 \mathbin{>\!\!>\!\!=} \lambda n_1.\ \mathsf{eval}\ e_2 \mathbin{>\!\!>\!\!=} \lambda n_2.\ \mathsf{return}\ (n_1+n_2)$$

**Every $\sigma$ subscript has disappeared.** They are still there — `>>=` for `State` is exactly $\lambda\sigma.\ \mathsf{let}\ (a,\sigma') = m\,\sigma\ \mathsf{in}\ f\,a\,\sigma'$ — but written once, in the instance, instead of once per rule. That is the whole practical argument for the abstraction: the inference rules of this lesson are correct and tedious, and the tedium is mechanical.

Note also that the *order* is still visible: `n1` is bound before `n2`, so `e1` is evaluated first. Swapping the two lines specifies right-to-left evaluation, which is the do-notation version of swapping the store subscripts.

(b) **Associativity**, and the property it corresponds to is that **store-threading is well-defined regardless of how you group a sequence of effects** — equivalently, that a sequence of statements can be factored into a helper without changing the result.

Concretely, the law

$$(m \mathbin{>\!\!>\!\!=} f) \mathbin{>\!\!>\!\!=} g \;=\; m \mathbin{>\!\!>\!\!=} (\lambda x.\ f\,x \mathbin{>\!\!>\!\!=} g)$$

says that evaluating $e_1$ then ($e_2$ then $e_3$) gives the same final store as ($e_1$ then $e_2$) then $e_3$ — the store flows through in one order either way. You relied on it in Example 1 without noticing: the three-step sequence `a := 5; !b` was treated as a single chain from $\sigma$ to the final store, with no attention to bracketing.

It is also what made P2(d) a legitimate question at all: asking whether two adjacent writes can be collapsed presupposes that "two adjacent writes" is a well-defined thing independent of grouping.

And the converse is the useful warning: [Lesson 5.5](05-05-effects-monads-and-the-categorical-view.md) P3's law-breaking "zip monad" showed what happens when associativity fails — extracting a few statements into a helper silently changes the answer. For state-threading that failure would mean the store depended on how you bracketed your semicolons, which is a language nobody could reason about.

</details>

## Connections

- **Backward:** the environment is [Lesson 6.1](06-01-names-scope-and-closures.md)'s, now indirected through locations so that closures can share mutable state (P3(b) there needed exactly this). The observable evaluation order is what [Lesson 2.1](02-01-small-step-operational-semantics.md) P2(c) predicted would break confluence, and the store is [Lesson 5.5](05-05-effects-monads-and-the-categorical-view.md)'s `State` monad written out.
- **Forward:** locations are heap cells, so [Lesson 6.4](06-04-memory-layout-and-reference-counting.md) and [Lesson 6.5](06-05-tracing-garbage-collection.md) are about who removes entries from $\sigma$. The loss of referential transparency is the constraint every optimization in [Lesson 7.4](07-04-classical-optimizations.md) works under, and alias analysis is what buys some of it back.
- **Sideways:** aliasing is precisely what [Lesson 5.6](05-06-ownership-linearity-and-borrow-checking.md)'s ownership types restrict — "aliasing XOR mutation" is a rule about this store, and the reason it eliminates three bug classes is that all three need two names for one location plus a write.
