# Programming Languages · Lesson 5.6: Ownership, linearity and borrow checking

> ⏱ ~15 min · Module 5: Type-system design choices · Builds on: [5.2 (subtyping and variance)](05-02-subtyping-records-and-variance.md), [5.4 (type classes)](05-04-type-classes-and-ad-hoc-polymorphism.md) · Unlocks: [6.4 (memory layout and reference counting)](06-04-memory-layout-and-reference-counting.md), [6.5 (tracing garbage collection)](06-05-tracing-garbage-collection.md)

## Why this matters

[`programming-foundations` 2.3](../../programming-foundations/lessons/02-03-linked-lists.md) raised a question and handed it here: *"the aliasing and ownership questions raised by 'who else holds a reference to this node?' are what programming-languages formalizes with linear types and borrow checking."* This is that lesson.

The question matters because of a choice [Lesson 1.1](01-01-languages-paradigms-and-the-design-space.md) posed on axis 5 and Module 6 will study: who decides when memory can be reused? The classical answers are *you* (manual, fast and unsafe) and *a collector* (automatic, safe and with pauses). Ownership types are a third answer that had not been practical before Rust shipped it: **the type system decides, at compile time, with no run-time cost and no collector.**

And the mechanism turns out to rule out more than memory errors. Use-after-free, iterator invalidation and data races look like three unrelated bug classes; they are one, and one rule excludes all three.

## The idea

Every type system so far has treated values as freely **duplicable** and **discardable**: use `x` twice, or never, and nothing complains. That is fine for a number and wrong for a file handle — closing one twice is a bug, and never closing it is a leak.

A **linear** type is one whose values must be used **exactly once**. An **affine** type relaxes this to *at most* once: you may drop it, you may not duplicate it. Rust's ownership is affine, and dropping is what runs the destructor.

From "at most once" everything follows. If a value has one owner, then when the owner goes out of scope the value can be freed — and the compiler knows exactly where that is, so it inserts the free. No counter, no collector, no pause.

But exclusive ownership alone is unusable: you could not pass a value to a function and keep it. So you add **borrowing** — temporary access that does not transfer ownership — and one rule:

> **At any moment, either one mutable borrow, or any number of shared borrows. Never both.**

*Aliasing XOR mutation.* That is the whole discipline.

## The formal version

**Structural rules.** *(card: [linear and affine types](../reference.md#linear-and-affine-types))* Ordinary type systems admit three rules usually left implicit:

$$\frac{\Gamma, x{:}\tau, y{:}\tau \vdash e : \sigma}{\Gamma, z{:}\tau \vdash [x,y := z]\,e : \sigma}\;(\mathsf{Contraction}) \qquad \frac{\Gamma \vdash e : \sigma}{\Gamma, x{:}\tau \vdash e : \sigma}\;(\mathsf{Weakening})$$

Contraction lets one variable serve two uses (**duplication**); weakening lets a variable go unused (**discarding**). A **linear** type system drops both; an **affine** one drops contraction and keeps weakening. **That is the entire formal content**: which structural rules you admit decides whether a value may be copied or dropped.

**Ownership, moves and borrows.** In Rust's terms:

- A value has exactly one **owner**. When the owner's scope ends, the value is dropped.
- Assignment or argument-passing **moves** ownership; the source is then invalid, and using it is a compile error.
- A type may opt back into duplication by implementing `Copy` — a marker trait ([Lesson 5.4](05-04-type-classes-and-ad-hoc-polymorphism.md)'s dictionaries, carrying no operations) asserting that a bitwise copy is a valid second value. Integers are `Copy`; a heap-owning `String` is not.
- `&T` is a **shared borrow** (read-only, many at once); `&mut T` is a **mutable borrow** (read-write, exactly one, and no shared borrows may coexist).

**The rule, stated precisely.** For any value, at any program point, the set of live borrows is either

$$\{\,\text{any number of } \&T\,\} \qquad\text{or}\qquad \{\,\text{exactly one } \&\mathsf{mut}\ T\,\}$$

**Lifetimes.** A borrow is annotated with a region of the program over which it is valid, written `&'a T`. The checker verifies that no borrow outlives its referent — which is what rejects returning a reference to a local. Most lifetimes are inferred; the annotations appear where a function relates several of them, because then the compiler must be told which output borrows from which input.

**Three bugs, one cause.** Each of these is aliasing plus mutation:

| bug | the alias | the mutation |
|---|---|---|
| use-after-free | a pointer to a freed object | the free |
| iterator invalidation | the iterator's internal pointer | pushing to the container |
| data race | two threads' references | one of them writes |

Forbid their coexistence and all three become type errors. The data-race case needs a little more — the `Send` and `Sync` marker traits, tracking which types may cross a thread boundary — but the core is this rule, which is why Rust advertises "fearless concurrency" as a consequence of a memory-safety mechanism rather than as a separate feature.

**The cost.** Some correct programs are rejected. A doubly linked list has two pointers to each node, so it violates exclusive ownership outright and must be written with reference counting (`Rc`/`RefCell`, moving the check to run time) or `unsafe`. Cyclic graphs are the standing example. This is [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md)'s sound-but-incomplete trade again, at a new place on the dial — and the language provides escape hatches precisely because the dial was set aggressively.

## Picture

![Two lists. Under the heading allowed: many shared borrows, written ampersand T repeated, annotated read-only with no writer to race with; and exactly one mutable borrow, written ampersand mut T, annotated a writer but no other reader. Under the heading rejected: ampersand mut T together with ampersand T, annotated a writer and a reader at once; and two ampersand mut T, annotated two writers. A closing note states that one rule rules out iterator invalidation, use-after-free and data races, three bugs that look unrelated until you see they are all aliasing plus mutation.](assets/05-06-fig1.svg)

The two allowed configurations are exactly the two in which no reader can observe a write it did not make. Many readers is safe because nothing changes; one writer is safe because nobody else is looking. **Every rejected configuration has a reader and a writer**, and that is the invariant the checker maintains.

## Worked examples

**Example 1 (mechanical): trace the checker over four snippets.**

*(a) A move, then a use.*
```rust
let s = String::from("hi");
let t = s;              // ownership MOVES from s to t
println!("{}", s);      // ERROR: borrow of moved value `s`
```
`String` owns heap memory and is not `Copy`, so line 2 moves. Line 3 uses an invalidated binding. **Rejected.** (Had `s` been an `i32`, which is `Copy`, line 2 would duplicate and line 3 would be fine — the same syntax, a different rule, decided by a marker trait.)

*(b) Two shared borrows.*
```rust
let v = vec![1, 2, 3];
let a = &v;
let b = &v;
println!("{} {}", a[0], b[1]);   // fine
```
Two `&T`, no `&mut T`. **Accepted** — the first allowed configuration.

*(c) A shared and a mutable borrow.*
```rust
let mut v = vec![1, 2, 3];
let a = &v;
v.push(4);              // needs &mut v, while `a` is still live
println!("{}", a[0]);   // ERROR: cannot borrow `v` as mutable
```
**Rejected.** And this is not a technicality: `push` may reallocate the vector's buffer, after which `a`'s internal pointer dangles. The checker rejected a genuine use-after-free — the same bug C++ calls iterator invalidation, caught at compile time by the general rule rather than by a special case for vectors.

*(d) A dangling return.*
```rust
fn bad() -> &i32 {
    let x = 5;
    &x                  // ERROR: `x` does not live long enough
}
```
The borrow's lifetime must not exceed its referent's, and `x` dies at the end of `bad`. **Rejected** — which is exactly [Lesson 1.1](01-01-languages-paradigms-and-the-design-space.md) P3(c)'s C bug, where the same program compiles cleanly and misbehaves at run time.

**Example 2 (why you'd care): three memory strategies compared.** For the same program — build a list, hand it to a function, keep using it — the three answers:

| | who decides | run-time cost | failure mode |
|---|---|---|---|
| **manual** (C) | you | none | use-after-free, double free, leak — all silent |
| **tracing GC** (Java, Go, Haskell) | a collector | pauses, extra memory, a write barrier | none of the above; unpredictable latency |
| **ownership** (Rust) | the type checker | none | rejected programs you must restructure |

The ownership column's cost is paid **entirely at compile time**, in two currencies: programs you have to rewrite, and a checker you have to learn. In exchange there is no collector, no pause, and the class of bug the other two trade between is gone.

**Where each wins.** Manual is right where you control the whole program and need the last few percent. Tracing GC is right where graph-shaped data with sharing and cycles is the natural model — a compiler's own AST with parent pointers, say, which ownership handles awkwardly. Ownership is right where predictable latency matters and the data has a clear owner: systems software, embedded, game engines, anything with a deadline.

**And the reason this is in a type-systems module, not a memory module:** it is the same machinery. Ownership is a type system whose soundness theorem says *no value is used after it is freed and no data race occurs* — [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md)'s progress and preservation, with a different definition of "goes wrong". [Lessons 6.4](06-04-memory-layout-and-reference-counting.md) and [6.5](06-05-tracing-garbage-collection.md) do the other two columns.

## Watch out

- **You might think** the borrow checker forbids shared mutable state — **but actually** it forbids *unsynchronized* shared mutable state, and provides types (`Rc<RefCell<T>>`, `Arc<Mutex<T>>`) that move the check to run time where the static one is too strict. The rule is not "never share and mutate" but "prove the exclusion, statically or dynamically".
- **You might think** rejected programs are buggy programs — **but actually** many are perfectly correct and simply outside what the checker can prove, exactly as in [Lesson 4.3](04-03-unification-and-hindley-milner.md) P3(d). A doubly linked list is the standard case: correct, useful, and not expressible under exclusive ownership without escape hatches.
- **You might think** linear and affine are interchangeable — **but actually** linear means *exactly* once and affine *at most* once, and the difference is whether you may drop a value. Rust is affine, which is why dropping is legal and runs a destructor; a genuinely linear system would force you to consume every file handle explicitly, which is stricter and rarer.

## One-liner

> Drop the structural rule that lets a value be duplicated, add borrowing with one rule — aliasing or mutation, never both — and the type checker can decide every deallocation at compile time, eliminating three bug classes that only look unrelated.

## Problems

**P1 (🟢)** For each, say whether the borrow checker accepts or rejects, and name the rule.

(a) `let a = &v; let b = &v;` with `v` never mutated
(b) `let a = &mut v; let b = &mut v;`
(c) `let a = &mut v; let b = &v;`
(d) `let n: i32 = 5; let m = n; println!("{}", n);`

**P2 (🟡)** For each bug, state which of the two ingredients — aliasing or mutation — the borrow rule removes, and say which allowed configuration the fixed program lands in.

(a) A C++ iterator invalidated by `push_back` during iteration.
(b) Two threads incrementing a shared counter without a lock.
(c) A pointer used after `free`.

**P3 (🔴)** A doubly linked list gives each node a pointer to its successor and its predecessor.

(a) State precisely which ownership rule this violates, and for which pointer.
(b) Give two ways to build one in a language with affine ownership, and state what each gives up.
(c) A colleague concludes the type system is defective. Assess this, referring to the property from [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md) that is at stake.
(d) A tracing collector handles a doubly linked list with no difficulty at all. State what it pays for that, and name the lesson where the cost is worked out.

<details>
<summary>Solutions</summary>

**P1**

(a) **Accepted.** Two shared borrows `&v` and no mutable borrow — the first allowed configuration. Many readers are safe because nothing can change beneath them.

(b) **Rejected.** Two mutable borrows of the same value. The rule permits *exactly one* `&mut`, and two writers is the second rejected configuration.

(c) **Rejected.** A mutable borrow coexisting with a shared one. This is the first rejected configuration — a writer and a reader at once — and it is the general form of the iterator-invalidation bug in Example 1(c).

(d) **Accepted.** `i32` implements `Copy`, so `let m = n` **duplicates** rather than moving, and `n` remains valid. Contrast Example 1(a), where `String` is not `Copy` and the identical syntax moves. The marker trait is the whole difference, which is a good illustration of [Lesson 5.4](05-04-type-classes-and-ad-hoc-polymorphism.md)'s point that a constraint can carry a property rather than an operation.

**P2**

(a) **Iterator invalidation.** The iterator holds an alias into the container's buffer, and `push_back` mutates (possibly reallocating) it. The rule removes the **coexistence**: holding the iterator is a live `&` borrow, so the `&mut` needed by `push_back` cannot be taken.

The fixed program lands in the **many-shared-borrows** configuration during iteration, with any mutation moved outside the loop (collect the indices to change, then mutate afterwards) — or, if mutation during traversal is essential, in the **one-mutable-borrow** configuration using an iterator that itself holds the `&mut`.

(b) **Data race.** Two threads hold aliases to the counter and at least one writes. The rule removes the coexistence again: two `&mut` are impossible, and `&` alone cannot write.

The fixed program lands in the **one-mutable-borrow** configuration, but obtained *dynamically*: `Arc<Mutex<i32>>` shares the value (many `Arc` handles, so many aliases) while `lock()` hands out a single `&mut` at a time. The mutex is what re-establishes exclusion at run time, and the type system requires you to go through it.

(c) **Use-after-free.** The pointer is an alias to a region, and `free` is the mutation — it invalidates the object. The rule removes the coexistence by making the free happen exactly when the *owner* goes out of scope, at which point no borrow may still be live, since a borrow may not outlive its referent.

The fixed program lands in **whichever configuration the surviving borrows are in** — the point is that after the owner is dropped there are none, by the lifetime check. (Example 1(d) is the compile error that enforces this.)

**P3**

(a) It violates **exclusive ownership** — the rule that every value has exactly one owner — and the offending pointer is the **predecessor** pointer.

The successor chain is fine: each node can own its `next`, forming a tree. But then node $B$'s `prev` must also point at node $A$, which $A$'s owner already owns, so $B$ would be a second owner of $A$. Worse, $A$ owns $B$ (through `next`) while $B$ points back to $A$, so the ownership relation has a cycle and cannot be a tree — and "drop the owner, drop the value" has no well-defined order.

(b) *Accept criterion:* any two approaches that build a working doubly linked list, each with its concession named.

1. **Reference counting with interior mutability** — `Rc<RefCell<Node>>` for the forward links and `Weak<RefCell<Node>>` for the back links. *Gives up:* static checking. The exclusion rule is now enforced at run time by `RefCell`, which panics if you take two mutable borrows, and by the refcount, which costs an increment on every clone. It also gives up leak-freedom unless the back links are `Weak` — two `Rc`s pointing at each other never reach zero, which is the cycle problem of [Lesson 6.4](06-04-memory-layout-and-reference-counting.md).

2. **An arena with indices** — store all nodes in a `Vec` and let `next` and `prev` be `usize` indices rather than pointers. *Gives up:* the guarantee that a link is valid. An index is just a number, so a stale index is a logic bug the compiler cannot see; you have traded a memory-safety problem for a correctness problem, though a far less dangerous one (a wrong index reads a real node, not freed memory). This is the standard technique in Rust graph and compiler code.

(A third: `unsafe` with raw pointers, giving up the checker entirely for that module and taking on the obligation to justify soundness by hand. This is what the standard library's `LinkedList` does, behind a safe interface.)

(c) The colleague is wrong, and the property at stake is that **the type system is sound but not complete** ([Lesson 4.5](04-05-type-soundness-progress-and-preservation.md)).

Soundness is the guarantee that every accepted program is free of use-after-free, double-free and data races. Completeness — accepting every program that happens to be free of them — is not available: by Rice's theorem ([`theory-of-computation` 4.3](../../theory-of-computation/lessons/04-03-rices-theorem-and-more-undecidable-problems.md)) no decidable checker can accept exactly the safe programs, so every such system rejects some correct ones. The doubly linked list is one, and its existence is evidence about *where the line is drawn*, not that a line exists.

What would be a real defect is the opposite: an accepted program that is unsafe. That is the preservation failure of [Lesson 5.2](05-02-subtyping-records-and-variance.md)'s covariant arrays, and it is why Java needed a run-time check.

The honest criticism is about the *position* of the line, not its existence: ownership draws it tightly enough that a common data structure falls outside, which is a real cost and the reason the escape hatches in (b) exist and are used.

(d) A tracing collector pays **run-time cost and unpredictable latency**: it must periodically walk the reachable heap, which costs time proportional to the live data, introduces pause times the program cannot control, and requires headroom — a collected heap typically needs several times the live set to perform well. It also needs a write barrier in generational designs, taxing every pointer store.

What it buys is exactly what ownership cannot give: cycles and arbitrary sharing are free, because reachability does not care about the shape of the graph. A doubly linked list, a cyclic object graph and a mutually recursive AST are all ordinary.

The cost is worked out in **[Lesson 6.5](06-05-tracing-garbage-collection.md)** (mark-and-sweep, copying and generational collection, with pause time versus throughput), and the cycle problem that makes reference counting an insufficient substitute is **[Lesson 6.4](06-04-memory-layout-and-reference-counting.md)**.

</details>

## Flashback

**From Lesson 5.2 (Subtyping, records and variance):** A type former is covariant where the parameter appears in output position, contravariant where it appears in input position, and invariant where it appears in both — which is why a mutable cell must be invariant.

Rust has `&T` and `&mut T`.

(a) State the variance of each in its referent type $T$, and give the reason from what each permits.
(b) Both this lesson's borrow rule and [Lesson 5.2](05-02-subtyping-records-and-variance.md)'s invariance rule follow from one underlying observation. State it.


<details>
<summary>Solution</summary>

(a) **`&T` is covariant in $T$.** A shared borrow permits only reading, so $T$ appears solely in output position — `*r` produces a $T$ and nothing consumes one. Hence `&Cat` may be used where `&Animal` is expected: every cat you read out is an animal.

**`&mut T` is invariant in $T$.** A mutable borrow permits both reading (`*r` produces a $T$) and writing (`*r = v` consumes one), so $T$ appears in both positions and neither direction of subtyping is safe. Covariance would let you write a `Dog` through an `&mut Animal` that really borrows a `Cat`; contravariance would let you read a `Dog` where a `Cat` was promised.

This is [Lesson 5.2](05-02-subtyping-records-and-variance.md)'s producer/consumer analysis applied unchanged, and it is worth noticing that Rust's two reference types are *exactly* the split that analysis calls for — the read-only one can be covariant, and the read-write one cannot.

(b) The underlying observation: **reading and writing impose opposite requirements on a type, so a thing that does both is constrained by both, and the intersection of the two constraints is trivial.**

For variance, "constrained by both" means the parameter must be simultaneously covariant and contravariant, and the only relation satisfying both is equality — hence invariance.

For borrowing, "constrained by both" means a reader needs the value to be stable and a writer needs permission to change it, and the only way to satisfy both is to have at most one of them at a time — hence aliasing XOR mutation.

So the two rules are one principle with two conclusions: in the *type* dimension it forbids subtyping through a mutable cell; in the *time* dimension it forbids a reader and a writer coexisting. Both are answers to "what can safely be true when a value may change underneath you", and once you see that, [Lesson 5.2](05-02-subtyping-records-and-variance.md)'s covariant-array bug and this lesson's iterator-invalidation bug become the same bug — an alias whose type or whose contents the holder did not expect to change.

</details>

## Connections

- **Backward:** the aliasing question is [`programming-foundations` 2.3](../../programming-foundations/lessons/02-03-linked-lists.md)'s, handed here explicitly; `Copy`, `Send` and `Sync` are [Lesson 5.4](05-04-type-classes-and-ad-hoc-polymorphism.md)'s marker constraints, carrying a property rather than an operation; and the `&T`/`&mut T` variance split is [Lesson 5.2](05-02-subtyping-records-and-variance.md)'s producer/consumer rule.
- **Forward:** this is the third of [Lesson 1.1](01-01-languages-paradigms-and-the-design-space.md)'s axis-5 answers, and [Lesson 6.4](06-04-memory-layout-and-reference-counting.md) and [Lesson 6.5](06-05-tracing-garbage-collection.md) work out the other two. The reference-counting fallback of P3(b) is exactly [Lesson 6.4](06-04-memory-layout-and-reference-counting.md)'s mechanism, cycles and all.
- **Sideways:** dropping contraction and weakening is **linear logic** (Girard, 1987), the substructural logic whose Curry–Howard image this is — so a linear type system is a programming language whose logic tracks how many times a hypothesis is used, and [Lesson 4.2](04-02-type-checking-and-curry-howard.md)'s correspondence extends to it unchanged.
