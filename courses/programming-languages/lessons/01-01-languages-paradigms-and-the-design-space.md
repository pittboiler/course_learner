# Programming Languages · Lesson 1.1: Languages, paradigms and the design space

> ⏱ ~15 min · Module 1: Syntax and parsing · Builds on: [`programming-foundations` 1.1 (values, variables, control flow)](../../programming-foundations/lessons/01-01-values-variables-and-control-flow.md) · Unlocks: [1.2 (concrete and abstract syntax)](01-02-concrete-and-abstract-syntax.md)

## Why this matters

You will read far more code in languages you did not choose than code in languages you did. When a language surprises you — a number silently becomes a string, a closure captures the wrong variable, a `null` arrives where the signature said it could not — the surprise is almost never a bug in the implementation. It is a design decision, made deliberately, decades ago, by someone trading one guarantee for another.

This course is about reading those decisions. By the end you will be able to look at an unfamiliar language and place it: how it decides what is legal, when it decides, what it does at run time to keep the promises it made at compile time, and what it gave up to make those promises cheap. This first lesson lays out the axes. Everything after it is one axis in detail.

## The idea

A language is not a pile of features. It is a **point in a design space**, and most of what feels arbitrary about a language is one coordinate propagating outward.

Take one example and watch it spread. Suppose you decide that a variable's type is fixed before the program runs. That single choice means you need a type checker, which means the checker has to run on *something*, which means you need a phase that turns text into a tree with names resolved — so you get a compiler with phases. It means you can dispatch a method call by a table offset rather than a hash lookup, so calls get fast. It means generic code needs a story (templates? erasure? dictionaries?), so you acquire a polymorphism design. And it means some correct programs are now rejected, so you acquire an escape hatch — casts, `any`, reflection — and every argument about your language for the next thirty years will be about that escape hatch.

The opposite choice propagates just as far in the other direction. Neither is wrong. They are different points, and they cost different things.

The useful move is to learn the axes so you can ask, of any language, "where does it sit, and what did that force?"

## The formal version

Six axes carry most of the weight. Each gets at least one lesson later in the course.

**1. What is a value, and is everything an expression?** In an **expression-oriented** language every construct produces a value, so `if` can appear on the right of an assignment and there is no separate statement category. In a **statement-oriented** language some constructs only have effects. This is a grammar-level choice with semantic consequences, and it is settled in Lesson 1.2.

**2. Evaluation order.** When you write `f(g(x))`, when does `g(x)` run — before `f` is entered (**call-by-value**), or only if `f` actually uses its argument (**call-by-name**/**lazy**)? Lesson 3.4 shows two programs that differ only in this and disagree about whether they terminate.

**3. State and mutability.** Can a name be rebound? Can a value be modified in place? A language with no mutation has no aliasing questions, no evaluation-order-observable side effects, and a much simpler semantics — Lesson 6.2 shows exactly how much simpler, by adding mutation to a semantics and watching it grow a second component.

**4. The type discipline.** Three *independent* sub-axes that are constantly conflated:

- **Static vs dynamic** — *when* are types checked, before the program runs or during?
- **Strong vs weak** — *how strictly* are type distinctions enforced, i.e. how willing is the language to silently coerce one type to another?
- **Manifest vs inferred** — must you *write* the types, or does the compiler reconstruct them?

In words: static/dynamic is a question about time, strong/weak is a question about strictness, and manifest/inferred is a question about notation. A language picks one coordinate on each, and all eight combinations of the first two exist in the wild.

**5. Memory.** Who decides when a value's storage can be reused — you (manual), a counter attached to the value (reference counting), a collector that periodically walks the heap (tracing), or the type system at compile time (ownership)? Module 6 does all four.

**6. The abstraction mechanism.** How do you write one piece of code that works for many types — by parametric polymorphism, by subtyping, by overloading and dispatch, or by not checking at all? Module 5 is a lesson per answer.

**Paradigms** are bundles of these choices with names attached. *Imperative* = statements plus mutable state plus explicit control flow. *Functional* = expression-oriented, mutation discouraged or forbidden, functions as values. *Object-oriented* = state bundled with the operations on it, dispatch chosen by the receiver. *Logic* = you state relations and a search procedure finds values satisfying them. Real languages are blends, and the paradigm label is less informative than the six coordinates.

Finally, a vocabulary split used for the rest of the course. **Syntax** is which strings are legal programs. **Semantics** is what a legal program means. **Pragmatics** is everything else a real language needs — error messages, compilation speed, tooling, the standard library — which this course mostly sets aside but which decides more language adoptions than semantics does.

## Picture

![A two-by-two grid with the horizontal axis labelled static on the left and dynamic on the right, and the vertical axis labelled strong at the top and weak at the bottom. Haskell, Rust and Java sit in the static-strong quadrant; Python and Ruby in the dynamic-strong quadrant; C in the static-weak quadrant; JavaScript in the dynamic-weak quadrant.](assets/01-01-fig1.svg)

All four quadrants are occupied, which is the whole point: **static/dynamic and strong/weak are independent**. C is static and weak — it checks types at compile time and then lets you reinterpret any pointer as any other. Python is dynamic and strong — it checks at run time, but `1 + "a"` raises rather than guessing. The common sloppy usage where "strongly typed" means "statically typed" collapses two axes into one and makes both unusable.

## Worked examples

**Example 1 (mechanical): place four languages.** For each, give the coordinate on the first two sub-axes of axis 4, with the deciding evidence.

| Language | Static/dynamic | Evidence | Strong/weak | Evidence |
|---|---|---|---|---|
| Java | static | a type error stops compilation | strong | no implicit reference reinterpretation; a bad cast raises |
| Python | dynamic | a type error surfaces only when the line runs | strong | `1 + "a"` raises `TypeError` rather than coercing |
| C | static | declarations required, checked at compile time | weak | a `union` or a pointer cast reinterprets bytes with no check |
| JavaScript | dynamic | no declarations, checked at run time | weak | `1 + "a"` yields the string `"1a"` |

The deciding evidence for strong/weak is always the same question: **is there a construct that lets one type be treated as another without a check?** Not "does the language have casts" — Java has casts — but "does the cast go unchecked."

**Example 2 (why you'd care): one choice, four consequences.** Consider a language that decides values are **immutable by default**. Trace the consequences, none of which is about mutation directly:

1. *Aliasing stops mattering.* If nobody can write through a reference, two names for one value are indistinguishable from two copies. A whole category of bug — action at a distance — is gone, and so is a whole category of reasoning.
2. *Evaluation order stops being observable.* With no side effects, `f(a(), b())` gives the same answer whichever of `a` and `b` runs first, so the compiler may reorder them, run them in parallel, or skip one entirely.
3. *Laziness becomes affordable.* Deferring a computation is only safe if the deferred thing cannot observe a changed world in the meantime. Immutability is what makes call-by-name a serious option rather than a curiosity (Lesson 3.4).
4. *Memory pressure rises.* "Change one field" becomes "build a new value", so the allocator runs hotter and the garbage collector matters more (Lesson 6.5). Persistent data structures exist to claw this back.

So "immutable by default" is not a preference about assignment. It is a bet that the reasoning and parallelism are worth the allocation, and a language that takes it is pushed toward laziness and toward a good collector whether it intended to be or not. **That is what it means to say the axes are not independent in practice.**

## Watch out

- **You might think** a dynamically typed language has no types — **but actually** it has exactly the same types; it attaches them to *values* at run time rather than to *expressions* at compile time. `1 + "a"` raising a `TypeError` in Python is a type system doing its job, just later. The real difference is that a static checker makes a claim about *all* executions, while a dynamic one reports on the execution that happened.
- **You might think** "strongly typed" and "statically typed" are synonyms — **but actually** the Picture shows all four combinations occupied. Using them interchangeably makes it impossible to say the useful thing about C, which is that it checks early and then declines to enforce what it checked.
- **You might think** a paradigm label tells you how a language behaves — **but actually** it tells you which bundle of defaults the designer started from. Two "object-oriented" languages can differ on evaluation order, mutability, dispatch mechanism and memory model — that is, on four of the six axes. Read the coordinates, not the label.

## One-liner

> A language is a point in a design space, not a pile of features — and most of what feels arbitrary in one is a single early coordinate, propagating.

## Problems

**P1 (🟢)** For each language below, give its coordinate on **both** sub-axes (static/dynamic *and* strong/weak) and name the one piece of evidence that settles each. Answer as a four-row table.

(a) Haskell  (b) JavaScript  (c) C  (d) Python

**P2 (🟡)** A language designer proposes: "types are checked at compile time, and there is no cast, no reflection, and no `any` — the checker's word is final." Name the single largest cost of this decision, and say which of the six axes absorbs it. One sentence each.

**P3 (🔴)** Classify each of the following surprises by which axis produced it, and in one sentence name the trade the designer made. Give the axis number.

(a) In JavaScript, `[] + {}` evaluates to the string `"[object Object]"` rather than raising.
(b) In Haskell, `take 5 [1..]` terminates and returns five elements, although `[1..]` is an infinite list.
(c) In C, a function may return a pointer to a local variable, and the program compiles cleanly and then misbehaves at run time.

<details>
<summary>Solutions</summary>

**P1**

| Language | Static/dynamic | Evidence | Strong/weak | Evidence |
|---|---|---|---|---|
| (a) Haskell | static | the compiler rejects an ill-typed expression before anything runs; types are *inferred*, which is a different axis and does not make it dynamic | strong | there is no unchecked coercion between types; converting requires an explicit total function such as `fromIntegral` |
| (b) JavaScript | dynamic | a variable may hold a number on one line and a string on the next, with no declaration and no compile-time complaint | weak | `1 + "a"` is `"1a"` — the operator coerces rather than rejecting |
| (c) C | static | every variable is declared with a type and the compiler checks assignments | weak | a pointer cast or a `union` reinterprets the same bytes as a different type with no run-time check |
| (d) Python | dynamic | `def f(x): return x.foo` compiles fine and fails only when called with something lacking `foo` | strong | `1 + "a"` raises `TypeError`; the language declines to guess |

The trap is (a): type *inference* is the manifest/inferred axis. Haskell writes few type annotations and is nonetheless the most statically typed language on the list.

**P2** The cost is **rejected correct programs**. A static checker is necessarily conservative — it must reject every program it cannot prove safe, and by Rice's theorem ([theory-of-computation 4.3](../../theory-of-computation/lessons/04-03-rices-theorem-and-more-undecidable-problems.md)) no checker can be both sound and complete for any non-trivial semantic property. So there will always be programs that never go wrong and that the checker refuses, and with no escape hatch the programmer cannot overrule it.

The cost is absorbed by **axis 6, the abstraction mechanism**: the language must make its type system expressive enough that the programs you actually want to write are provable within it. That is the pressure that produces parametric polymorphism, then generics with bounds, then higher-kinded types, then dependent types — each one an attempt to make the checker accept more correct programs without accepting any incorrect one. Lesson 4.5 states this as the precise sense in which soundness is the property you keep and completeness is the one you give up.

**P3**

(a) **Axis 4, the strong/weak sub-axis.** Neither operand of `+` is a number or a string, so the language coerces both to strings rather than reporting an error. The trade: fewer run-time failures in sloppy code — a script keeps running instead of dying — paid for with silent nonsense, which is strictly worse to debug because the failure surfaces far from its cause.

(b) **Axis 2, evaluation order.** The list is produced lazily, so `[1..]` is a recipe rather than a structure, and `take 5` forces exactly five elements. The trade: infinite and self-referential data become ordinary values, paid for with unpredictable *when* — space leaks from unevaluated thunks, and a profile that is hard to reason about because the cost of an expression is not where you wrote it. Lesson 3.4 makes this precise.

(c) **Axis 5, memory.** The local's storage lives in the activation record, which is reclaimed on return, and nothing in the language tracks whether a pointer outlives its referent. The trade: no run-time bookkeeping at all — no counter, no collector, no pauses — paid for with a class of bug the language cannot detect. Lesson 5.6 shows the ownership-typing answer that keeps the performance and rejects the program at compile time instead, and Lesson 6.4 shows what the storage actually looks like.

</details>

## Connections

- **Backward:** the values, variables and control flow of [`programming-foundations` 1.1](../../programming-foundations/lessons/01-01-values-variables-and-control-flow.md) are the raw material; this lesson asks which of them a language designer could have chosen differently. The contracts-and-invariants discipline of [`programming-foundations` 1.2](../../programming-foundations/lessons/01-02-functions-contracts-and-invariants.md) is the informal version of what Lesson 2.4 makes a proof system.
- **Forward:** every axis here is a later module. Axis 1 → Lesson 1.2; axis 2 → Lesson 3.4; axis 3 → Lesson 6.2; axis 4 → Modules 4 and 5; axis 5 → Lessons 6.4 and 6.5; axis 6 → Module 5.
- **Sideways:** the "no checker is both sound and complete" fact behind P2 is [theory-of-computation 4.3](../../theory-of-computation/lessons/04-03-rices-theorem-and-more-undecidable-problems.md)'s Rice's theorem, which is why Lesson 7.5 builds analyses that are deliberately, provably incomplete in a chosen direction.
