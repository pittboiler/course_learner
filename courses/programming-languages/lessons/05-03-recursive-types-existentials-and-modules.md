# Programming Languages · Lesson 5.3: Recursive types, existentials and modules

> ⏱ ~15 min · Module 5: Type-system design choices · Builds on: [5.1 (algebraic data types)](05-01-algebraic-data-types-and-pattern-matching.md), [4.4 (polymorphism and parametricity)](04-04-polymorphism-system-f-and-parametricity.md) · Unlocks: [5.4 (type classes)](05-04-type-classes-and-ad-hoc-polymorphism.md), [6.1 (closures)](06-01-names-scope-and-closures.md)

## Why this matters

Two loose ends, and a payoff that is the same in both cases: making a *convention* into a *theorem*.

**Loose end one.** [Lesson 5.1](05-01-algebraic-data-types-and-pattern-matching.md) wrote `List a = Nil | Cons a (List a)` and waved at the self-reference. That needs an account, because [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md) established that types are finite trees and $\alpha = \alpha \to \beta$ has no solution. Something must license a type equation that *does* have one.

**Loose end two.** Every language has some way to say "this is a `Stack`; don't look inside". In C it is a convention plus a header file. In Java it is `private`, enforced by the compiler but circumventable by reflection. What would it take to make it a *theorem* — a guarantee that no client program, however written, can depend on the representation?

The answer is the **existential quantifier**, and it is the exact dual of the $\forall$ from [Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md). Where $\forall$ meant "the caller chooses the type", $\exists$ means "the implementer chose, and you cannot find out". That is data abstraction with a proof, and it is the theoretical content of every module system.

## The idea

**Recursive types.** Write $\mu\beta.\ \tau$ for the type $\beta$ satisfying $\beta = \tau$. So

$$\mathsf{List}\ \alpha \;=\; \mu\beta.\ \mathsf{Unit} + \alpha\times\beta$$

reading "a list is either nothing, or an element paired with a list". The $\mu$ is a fixed point on types, and as in [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md) it is the *least* one — which is why the type contains finite lists and not infinite ones.

**Existentials.** Write $\exists\alpha.\ \tau$ for "there is some type $\alpha$ such that $\tau$". A value of this type is a **package**: a concrete type together with operations over it, where the concrete type is sealed inside. The client can use the operations and cannot learn what $\alpha$ is — not by inspection, not by casting, not at all, because the type system provides no way to ask.

The duality with $\forall$ is worth stating plainly:

- $\forall\alpha.\ \tau$ — **the user picks $\alpha$**; the implementation must work for all of them.
- $\exists\alpha.\ \tau$ — **the implementation picked $\alpha$**; the user must work without knowing it.

Universal quantification gives you *generic code*; existential quantification gives you *abstract data types*. Same machinery, opposite direction.

## The formal version

**Recursive types: `fold` and `unfold`.** There are two presentations.

*Equi-recursive:* $\mu\beta.\tau$ and $[\beta := \mu\beta.\tau]\tau$ are literally the same type, and the checker must decide equality of possibly-infinite type trees. Elegant, and the equality check is a coinductive automaton comparison.

*Iso-recursive:* they are distinct types, connected by explicit coercions:

$$\frac{\Gamma \vdash e : [\beta := \mu\beta.\tau]\,\tau}{\Gamma \vdash \mathsf{fold}\ e : \mu\beta.\tau} \qquad\qquad \frac{\Gamma \vdash e : \mu\beta.\tau}{\Gamma \vdash \mathsf{unfold}\ e : [\beta := \mu\beta.\tau]\,\tau}$$

Nearly every real language is **iso-recursive**, and the `fold`/`unfold` are hidden inside the datatype's constructors and pattern matching — `Cons` *is* a `fold` and matching on `Cons` *is* an `unfold`. That is why you never write them.

**Why $\mu$ is allowed when $\alpha = \alpha\to\beta$ was not.** [Lesson 4.3](04-03-unification-and-hindley-milner.md)'s occurs check rejects a type *variable* being equated with a type containing it, because unification must produce a finite substitution. $\mu$ is different: it is an explicit type *constructor* that names the fixed point, so the type is still a finite tree — $\mu\beta.\ \mathsf{Unit}+\alpha\times\beta$ has five nodes. **The recursion is in the type's meaning, not in its syntax**, which is exactly what the occurs check was protecting.

**Recursive types restore Turing-completeness.** With $\mu$ you can type self-application: give $x$ the type $\mu\beta.\ \beta\to\tau$, and $\mathsf{unfold}\ x$ has type $(\mu\beta.\beta\to\tau)\to\tau$, which accepts $x$. So $\Omega$ becomes typable and [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md)'s strong normalization is lost — the second way to lose it, after $\mathsf{fix}$, and it is the reason a total language restricts recursive types to *strictly positive* occurrences.

**Existentials: `pack` and `open`.**

$$\frac{\Gamma \vdash e : [\alpha := \tau']\,\tau}{\Gamma \vdash \mathsf{pack}\ \langle \tau', e\rangle \;\mathsf{as}\; \exists\alpha.\tau \;:\; \exists\alpha.\tau}\;(\mathsf{T\text{-}Pack})$$

$$\frac{\Gamma \vdash e_1 : \exists\alpha.\tau \qquad \Gamma, \alpha, x{:}\tau \vdash e_2 : \tau_2 \qquad \alpha \notin \mathrm{ftv}(\tau_2)}{\Gamma \vdash \mathsf{open}\ e_1\ \mathsf{as}\ \langle\alpha, x\rangle\ \mathsf{in}\ e_2 \;:\; \tau_2}\;(\mathsf{T\text{-}Open})$$

$\mathsf{pack}$ seals a concrete type $\tau'$ inside; $\mathsf{open}$ unseals it, but binds $\alpha$ as a **fresh abstract type variable**, not as $\tau'$. So inside the body you may use $\alpha$-typed values only through the operations the package supplied.

**The side condition $\alpha \notin \mathrm{ftv}(\tau_2)$ is where the guarantee lives.** The result type may not mention $\alpha$, so the hidden type cannot leak out of the `open`. Without it a client could return a value of the abstract type and hand it somewhere that knows the representation, and abstraction would be a suggestion rather than a theorem.

**Representation independence.** Because a client can only use the supplied operations, **two implementations with different internal types are indistinguishable to every client**, provided they agree on the operations' behaviour. That is a theorem (a consequence of parametricity, [Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md)), not a code-review convention — and it is the precise sense in which a module hides its representation.

## Picture

![Two boxes joined by an arrow. The left box, labelled inside the module, lists type Counter equals Nat, new equals 0, tick equals lambda c dot c plus 1, and read equals lambda c dot c. The right box, dashed and labelled what a client sees, gives exists C dot a record with new of type C, tick of type C arrow C, and read of type C arrow Nat. Below, text notes that the client knows a C exists and cannot learn that it is Nat, so it cannot write read applied to 7, and the implementer is free to change Nat to anything else. A closing line states that abstraction stops being a convention and becomes a theorem.](assets/05-03-fig1.svg)

The client has `new`, `tick` and `read` and nothing else. It cannot write `read 7`, because 7 has type $\mathsf{Nat}$ and `read` demands a $C$ — and there is no coercion, no cast, and no reflection that could supply one. It also cannot add two counters, compare them, or print one, because no such operation was exported. **The interface is not a documented restriction; it is the complete list of things that type-check.**

## Worked examples

**Example 1 (mechanical): unfold a list type twice.** Let $L = \mu\beta.\ \mathsf{Unit} + \mathsf{Nat}\times\beta$.

$$\mathsf{unfold}\ L \;=\; \mathsf{Unit} + \mathsf{Nat}\times L \;=\; \mathsf{Unit} + \mathsf{Nat}\times(\mathsf{Unit} + \mathsf{Nat}\times L) \;=\; \cdots$$

Reading the expansion: a list is nothing, or one number and nothing, or two numbers and nothing, or… — the finite lists, as promised by *least* fixed point.

Now the `fold`/`unfold` in practice. The list $[3]$ is

$$\mathsf{fold}\ (\mathsf{inr}\ (\overline{3}, \mathsf{fold}\ (\mathsf{inl}\ ())))$$

which in ordinary syntax is `Cons 3 Nil`. **The constructors are the `fold`s and the pattern match is the `unfold`**, and that identification is the whole reason a working programmer never sees this machinery.

**Example 2 (why you'd care): two counters, indistinguishable.** Package the counter of the Picture two ways.

*Implementation A, counting up:*

```
pack <Nat, { new = 0, tick = \c -> c + 1, read = \c -> c }>
  as exists C. { new : C, tick : C -> C, read : C -> Nat }
```

*Implementation B, counting down from a base:*

```
pack <Nat, { new = 100, tick = \c -> c - 1, read = \c -> 100 - c }>
  as exists C. { new : C, tick : C -> C, read : C -> Nat }
```

The internal representations disagree about everything: after three `tick`s, A holds 3 and B holds 97. **No client can tell them apart.** A client may only compose `new`, `tick` and `read`, and every such composition — `read (tick (tick new))` — yields 2 under both.

*Why this is a theorem and not an observation.* By the $\mathsf{T\text{-}Open}$ side condition, $\alpha$ cannot escape, so every value of the abstract type the client holds was produced by `new` or `tick` and can only be consumed by `tick` or `read`. Parametricity ([Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md)) then says the client's behaviour is uniform in $\alpha$, so it cannot depend on which representation arrived. **This is exactly why the implementer may change `Nat` to `String`, or add a field, without breaking any client** — and why the guarantee is stronger than Java's `private`, which reflection can defeat, or C's header convention, which a cast can defeat.

*The connection to closures.* Notice what the package is: some hidden state plus functions that operate on it. That is a closure ([Lesson 6.1](06-01-names-scope-and-closures.md)) and it is also an object. **An object is an existential package**, and the correspondence is exact — private fields are the hidden $\alpha$, public methods are the record of operations, and "encapsulation" is the $\mathsf{T\text{-}Open}$ side condition.

## Watch out

- **You might think** $\mu$ contradicts the occurs check — **but actually** the occurs check rejects an *implicit* equation $\alpha = \alpha\to\beta$ discovered during unification, where no finite substitution exists. $\mu$ is an *explicit* constructor naming the fixed point, and the resulting type is a finite tree. Inference will never introduce a $\mu$ on its own; it must be written or come from a datatype declaration.
- **You might think** $\exists$ is the same as $\forall$ with the quantifier turned around — **but actually** they point opposite ways. $\forall$ obliges the *implementation* to handle every type and lets the caller choose; $\exists$ obliges the *client* to work with any type and lets the implementation choose. Generic code versus abstract data type.
- **You might think** the $\alpha \notin \mathrm{ftv}(\tau_2)$ side condition is a technicality — **but actually** it is the abstraction guarantee. Drop it and a client can return a value of the hidden type, hand it to code that knows the representation, and the theorem collapses. Every escape hatch in a real module system is a violation of this condition.

## One-liner

> $\mu$ names a type's fixed point so recursion lives in a type's meaning rather than its syntax, and $\exists$ is $\forall$ pointed the other way — the implementer picks and the client cannot find out, which turns data abstraction from a convention into a theorem.

## Problems

**P1 (🟢)** Write each type using $\mu$, $+$, $\times$ and $\mathsf{Unit}$.

(a) A list of booleans.
(b) A binary tree with $\mathsf{Nat}$ at internal nodes and nothing at leaves.
(c) A non-empty list of $\alpha$.
(d) A "stream" — an infinite list of $\mathsf{Nat}$, with no empty case.

**P2 (🟡)** Consider the package type $\exists\alpha.\ \{\mathit{empty} : \alpha,\ \mathit{push} : \mathsf{Nat}\to\alpha\to\alpha,\ \mathit{pop} : \alpha \to \mathsf{Option}\ (\mathsf{Nat}\times\alpha)\}$.

(a) Give an implementation packaging $\alpha := [\mathsf{Nat}]$ (a list).
(b) Give a second implementation with a different $\alpha$ that no client can distinguish from the first.
(c) State one expression a client can write, and one it cannot, with the reason for the second.

**P3 (🔴)** A designer loosens $\mathsf{T\text{-}Open}$ by dropping the side condition $\alpha \notin \mathrm{ftv}(\tau_2)$.

(a) Using the counter package, write a client expression that is now well-typed and should not be.
(b) State what goes wrong when two *different* counter packages are opened in the same program.
(c) Name the property from [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md) that fails, and say at which point.
(d) Java's `private` is enforced by the compiler but defeated by reflection. State whether Java's abstraction is a theorem or a convention, and say what reflection corresponds to in this lesson's terms.

<details>
<summary>Solutions</summary>

**P1**

(a) $\mu\beta.\ \mathsf{Unit} + \mathsf{Bool}\times\beta$ — nothing, or a boolean and the rest.

(b) $\mu\beta.\ \mathsf{Unit} + \beta\times\mathsf{Nat}\times\beta$ — a leaf (carrying nothing), or a left subtree, a number, and a right subtree.

(c) $\mu\beta.\ \alpha + \alpha\times\beta$ — either a final element on its own, or an element and a non-empty tail. There is no $\mathsf{Unit}$ summand, which is exactly what makes it non-empty: every value contains at least one $\alpha$.

(d) $\mu\beta.\ \mathsf{Nat}\times\beta$ — a number and the rest, with no base case.

**But note the caveat**: under the *least* fixed-point reading this type is **empty**. Every value of a $\mu$-type must be built by finitely many `fold`s, and with no base case there is nothing to start from. A genuine stream requires either laziness (the tail is a thunk, so `fold` can be applied to an unevaluated tail — [Lesson 3.4](03-04-evaluation-strategies.md)) or the *greatest* fixed point $\nu\beta.\ \mathsf{Nat}\times\beta$, the coinductive reading, which admits infinite values. This is the same least-versus-greatest choice as [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md) P3(d), and it is why Haskell can have infinite lists and ML cannot without explicit laziness.

**P2**

(a) Represent a stack as a list, with `push` as cons and `pop` as a match:

```
pack <[Nat], { empty = Nil,
               push  = \n s -> Cons n s,
               pop   = \s -> case s of Nil -> None
                                       Cons n r -> Some (n, r) }>
  as exists a. { empty : a, push : Nat -> a -> a, pop : a -> Option (Nat * a) }
```

(b) *Accept criterion:* any second implementation with a different $\alpha$ whose operations satisfy the same equations (`pop empty = None`, and `pop (push n s) = Some (n, s)`).

Represent a stack as a **pair of a list and its length**, $\alpha := [\mathsf{Nat}]\times\mathsf{Nat}$:

```
pack <[Nat] * Nat, { empty = (Nil, 0),
                     push  = \n (s, k) -> (Cons n s, k + 1),
                     pop   = \(s, k) -> case s of Nil -> None
                                                  Cons n r -> Some (n, (r, k - 1)) }>
  as exists a. { ... }
```

The cached length is real internal state the first implementation does not have, and it is completely invisible: no exported operation reveals it, so no client composition can depend on it.

(c) **Can write:** `pop (push 3 (push 5 empty))`, which yields `Some (3, s)` for some abstract $s$. Every operation used is from the package and the result type $\mathsf{Option}(\mathsf{Nat}\times\alpha)$ is fine inside the `open`.

**Cannot write:** `push 3 Nil`. The reason is that `push` demands its second argument at type $\alpha$, and `Nil` has type $[\mathsf{Nat}]$ — and inside the `open`, $\alpha$ is a **fresh abstract variable**, not an alias for $[\mathsf{Nat}]$. The type checker has no rule equating them, so there is no way to produce an $\alpha$ except by calling `empty` or `push`.

(A second example: the client cannot write `length s` for an abstract stack $s$, even under implementation (a) where $s$ really is a list — the representation is unavailable, not merely discouraged.)

**P3**

(a) With the side condition gone, the result of an `open` may mention $\alpha$, so a counter value can escape:

```
let c = open counterPkg as <C, ops> in ops.tick ops.new
```

This now type-checks with $c : C$ for a $C$ that is in scope nowhere — a value of a type that has escaped its binder. The immediate consequence is that $c$ can be passed to another `open`'s body, or stored, or handed to code that knows the representation is $\mathsf{Nat}$ and does arithmetic on it. The abstraction is gone.

(b) Open two counter packages, A (counting up) and B (counting down from 100), each yielding an abstract type and operations. With $\alpha$ escaping, a value produced by A's `tick` can be passed to B's `read` — the two abstract types are no longer kept distinct, so the checker accepts the mix.

The result is nonsense: A's `tick` applied twice to A's `new` gives the internal value 2, and B's `read` computes $100 - 2 = 98$. The client asked for the count and got 98 instead of 2. **The representations were compatible enough to type-check and semantically unrelated**, which is the worst combination — no error is raised anywhere.

(c) **Preservation fails**, at the point where the escaped value is consumed by an operation from a different package.

The mechanism is the [Lesson 5.2](05-02-subtyping-records-and-variance.md) one: the term is well-typed by the (loosened) rules, and a step produces a state in which a value is used at a type its provenance does not support. The freshness of $\alpha$ at `open` is precisely what made two different packages' abstract types incomparable; dropping the side condition merges them, and preservation is what notices.

(d) Java's abstraction is a **convention** — a compile-time one, enforced by the compiler against ordinary code and defeated by `setAccessible(true)`.

In this lesson's terms, **reflection is an operation that violates the $\mathsf{T\text{-}Open}$ side condition**: it lets a client obtain and manipulate values at the hidden representation type, which is exactly what the side condition forbids. Equivalently, it is a `type-case` — the ability to ask "what type is this really?" — and [Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md)'s Watch out already flagged that parametricity holds only in a language without it.

So the representation-independence theorem of Example 2 is **false for Java**: two implementations with different private fields *are* distinguishable, by a client willing to use reflection. That is not a criticism of Java, which wants reflection for serialization, dependency injection and debuggers — it is a statement of what those features cost. You cannot have both reflection and the theorem, and a language picks one.

</details>

## Flashback

**From Lesson 2.3 (Denotational semantics and least fixed points):** A loop's meaning is the **least** fixed point, and larger fixed points were rejected because they assert termination the equation never forced.

$\mu\beta.\,\tau$ is also a fixed point — of a function on types rather than on partial functions.

(a) Say what the least fixed point gives for $\mu\beta.\ \mathsf{Unit}+\mathsf{Nat}\times\beta$, and what the greatest would give.
(b) Use this to explain, in one sentence each, why ML's lists are finite and Haskell's may be infinite.

<details>
<summary>Solution</summary>

(a) The type equation is $\beta = \mathsf{Unit} + \mathsf{Nat}\times\beta$, and both fixed points satisfy it.

**Least fixed point** ($\mu$): the *finite* lists. Building a value requires finitely many applications of the constructors, starting from the $\mathsf{Unit}$ summand, so every inhabitant is $\mathsf{Cons}\ n_1\ (\cdots(\mathsf{Cons}\ n_k\ \mathsf{Nil}))$ for some finite $k$. This is the same construction as $\bigsqcup_n F^n(\bot)$ in [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md) — approximate from below, and the limit contains exactly what finitely many steps can reach.

**Greatest fixed point** ($\nu$): the finite lists **and** the infinite ones. Here membership is not "can be built from below" but "cannot be ruled out" — a value belongs as long as every observation of it is consistent with the equation, so an endless stream of `Cons` cells qualifies. This is the coinductive reading, and it is the type-level counterpart of the greatest fixed point [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md) P3(d) declined to use for loops.

The slogan: **$\mu$-types are *constructed* and eliminated by recursion; $\nu$-types are *observed* and constructed by corecursion.**

(b) **ML's lists are finite** because it is strict ([Lesson 3.4](03-04-evaluation-strategies.md)): a constructor's arguments are evaluated before the cell is built, so constructing an infinite list would require infinitely much work before the first cell exists, and the least fixed point is the honest description of what can be built.

**Haskell's may be infinite** because it is lazy: `Cons n thunk` is built without forcing the tail, so a finite amount of work produces a cell whose tail is a recipe — and `nats = 0 : map (+1) nats` is a legal, terminating definition whose inhabitant lives in the greatest fixed point rather than the least.

The consequence follows immediately and is worth stating: a function consuming a Haskell list **cannot** assume it will reach `Nil`, so structural recursion is no longer a termination argument there, whereas in ML it is. That is the same trade as [Lesson 3.4](03-04-evaluation-strategies.md)'s — laziness buys infinite data and gives up a guarantee — appearing here as a fact about which fixed point the type denotes.

</details>

## Connections

- **Backward:** the datatypes of [Lesson 5.1](05-01-algebraic-data-types-and-pattern-matching.md) are $\mu$-types with `fold`/`unfold` hidden in the constructors; $\exists$ is the dual of [Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md)'s $\forall$, and representation independence is a consequence of the parametricity proved there. Why $\mu$ escapes the occurs check is [Lesson 4.3](04-03-unification-and-hindley-milner.md)'s finiteness requirement, read carefully.
- **Forward:** a package is hidden state plus operations, which is a closure ([Lesson 6.1](06-01-names-scope-and-closures.md)) and an object; [Lesson 5.4](05-04-type-classes-and-ad-hoc-polymorphism.md) is the other way to ship operations with a type, resolved by the compiler rather than packaged by hand.
- **Sideways:** $\mu$ and $\nu$ are initial algebras and final coalgebras — [`category-theory` 4.2](../../category-theory/lessons/04-02-algebras-monoidal-categories.md)'s algebras of a functor — which is why `fold` is the unique map out of a $\mu$-type and gives structural recursion its universal property.
