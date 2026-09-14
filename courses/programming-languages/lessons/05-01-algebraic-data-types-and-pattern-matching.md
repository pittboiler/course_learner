# Programming Languages · Lesson 5.1: Algebraic data types and pattern matching

> ⏱ ~15 min · Module 5: Type-system design choices · Builds on: [4.5 (type soundness)](04-05-type-soundness-progress-and-preservation.md), [3.2 (Church encodings)](03-02-church-encodings-and-beta-reduction.md) · Unlocks: [5.2 (subtyping and variance)](05-02-subtyping-records-and-variance.md), [5.3 (recursive types and modules)](05-03-recursive-types-existentials-and-modules.md)

## Why this matters

[Lesson 3.2](03-02-church-encodings-and-beta-reduction.md) built booleans, numbers and pairs out of pure functions, and the technique was "make the value do its own case analysis". Algebraic data types are that idea given syntax, types, and a compiler check — and the check is the part that changes how you program.

The claim worth taking seriously is this: **two type formers, sum and product, generate every data structure you have ever used.** Lists, trees, options, syntax trees, JSON, protocol messages — all of them. And because a sum type forces the consumer to say what it does in *every* case, the compiler can tell you when you have forgotten one. That single check is the reason `Option` is a better answer to "this might be missing" than `null`, and the reason the abstract syntax of [Lesson 1.2](01-02-concrete-and-abstract-syntax.md) is written the way it is.

## The idea

**Products bundle.** A `Point` has an `x` *and* a `y`. Writing $\tau_1 \times \tau_2$, a value is a pair, and you take it apart with projections.

**Sums choose.** A `Shape` is a `Circle` *or* a `Rect`. Writing $\tau_1 + \tau_2$, a value is one of the two, *tagged* with which — and the tag is the essential part. Without it you could not tell a `Circle` carrying a radius from a `Rect` carrying a width.

"Algebraic" is meant literally. Count the values:

$$|\tau_1 \times \tau_2| = |\tau_1| \cdot |\tau_2| \qquad\qquad |\tau_1 + \tau_2| = |\tau_1| + |\tau_2|$$

So `Bool × Bool` has 4 values and `Bool + Bool` has 4 as well; `Unit + τ` has $1 + |\tau|$, which is exactly `Option τ`. The arithmetic is not a pun — it is why the isomorphism $\tau \times (\sigma + \rho) \cong (\tau\times\sigma) + (\tau\times\rho)$ holds, and why a type with $|\tau| = 0$ (`Void`) annihilates a product exactly as zero does.

**Pattern matching** is the eliminator. To use a sum you must handle every tag, and the compiler checks that you did.

## The formal version

**Declaration.** A datatype declaration introduces a sum of products:

$$\mathsf{data}\ T = C_1\ \tau_{11} \cdots \tau_{1k_1} \mid \cdots \mid C_n\ \tau_{n1} \cdots \tau_{nk_n}$$

Each $C_i$ is a **constructor** — an injection into the sum, with type $\tau_{i1} \to \cdots \to \tau_{ik_i} \to T$. Constructors are the only way to build a $T$, which is what makes the case analysis complete.

**Typing rules.** Products:

$$\frac{\Gamma \vdash e_1 : \tau_1 \quad \Gamma \vdash e_2 : \tau_2}{\Gamma \vdash (e_1, e_2) : \tau_1\times\tau_2} \qquad \frac{\Gamma \vdash e : \tau_1\times\tau_2}{\Gamma \vdash \mathsf{fst}\ e : \tau_1}$$

Sums, with $\mathsf{inl}$ and $\mathsf{inr}$ the two injections:

$$\frac{\Gamma \vdash e : \tau_1}{\Gamma \vdash \mathsf{inl}\ e : \tau_1+\tau_2} \qquad \frac{\Gamma \vdash e : \tau_1+\tau_2 \quad \Gamma, x{:}\tau_1 \vdash e_1 : \tau \quad \Gamma, y{:}\tau_2 \vdash e_2 : \tau}{\Gamma \vdash \mathsf{case}\ e\ \mathsf{of}\ \mathsf{inl}\ x \to e_1 \mid \mathsf{inr}\ y \to e_2 \;:\; \tau}$$

Read the case rule: **both branches must produce the same type $\tau$**, and each branch gets its own binding of the payload. There is no way to reach the payload without going through the case, so a `Circle`'s radius cannot be read out of a `Rect`.

**Recursive types.** A datatype may mention itself:

$$\mathsf{data}\ \mathsf{List}\ \alpha = \mathsf{Nil} \mid \mathsf{Cons}\ \alpha\ (\mathsf{List}\ \alpha)$$

Formally $\mathsf{List}\ \alpha = \mu\beta.\ 1 + \alpha\times\beta$, a least fixed point of a type-level function — the same $\mathrm{lfp}$ idea as [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md), now on types rather than partial functions, and "least" again meaning finite lists only. [Lesson 5.3](05-03-recursive-types-existentials-and-modules.md) does the $\mu$ machinery properly.

**Exhaustiveness checking.** Given a match, the compiler computes the set of value shapes each pattern covers and checks the union is everything. This is decidable and cheap — it is a coverage computation over a finite set of constructors, refined recursively for nested patterns — and it also detects **redundant** patterns (one covering nothing the earlier ones missed), which usually means a typo or a shadowed case.

**Why this beats `null`.** In a language with `null`, *every* reference type silently contains an extra value, and nothing forces you to consider it. With `Option τ = None | Some τ` the absence is a *constructor*, so the case analysis is checked. The difference is not expressive power — it is that one is opt-in and checked and the other is compulsory and unchecked. Tony Hoare called `null` his "billion-dollar mistake", and this is the precise statement of what the mistake was.

## Picture

![Two columns. The left, headed PRODUCT and, shows Point equals a record with x and y of type Nat, annotated you have an x AND a y, with cardinality the size of Nat times the size of Nat. The right, headed SUM or, shows Shape equals Circle carrying a Nat or Rect carrying two Nats, annotated you have a Circle OR a Rect, with cardinality the size of Nat plus the size of Nat squared. Below a dashed rule, three recursive sums are listed: List a equals Nil or Cons a of List a; Tree a equals Leaf or Node of Tree a, a, Tree a; Option a equals None or Some a. A caption states that a sum forces the consumer to say what it does in every case, which is exhaustiveness.](assets/05-01-fig1.svg)

The bottom three lines are the point: every structure is a sum of products, recursively. Once you can read a declaration as "an or of ands", an unfamiliar datatype in an unfamiliar language becomes immediately legible — and you know exactly what a total function consuming it must look like, namely one branch per constructor.

## Worked examples

**Example 1 (mechanical): count values and read off the isomorphisms.**

| type | cardinality | note |
|---|---|---|
| $\mathsf{Bool}$ | 2 | $1 + 1$ |
| $\mathsf{Bool}\times\mathsf{Bool}$ | 4 | $2 \cdot 2$ |
| $\mathsf{Bool}+\mathsf{Bool}$ | 4 | $2 + 2$; the tag distinguishes the two copies |
| $\mathsf{Option}\ \mathsf{Bool}$ | 3 | $1 + 2$ — `None`, `Some true`, `Some false` |
| $\mathsf{Unit}\times\tau$ | $|\tau|$ | $1 \cdot n$; so $\mathsf{Unit}$ is the product identity |
| $\mathsf{Void}+\tau$ | $|\tau|$ | $0 + n$; so $\mathsf{Void}$ is the sum identity |
| $\mathsf{Void}\times\tau$ | 0 | $0 \cdot n$; a pair needs both, and there is no $\mathsf{Void}$ |
| $\tau \to \sigma$ | $|\sigma|^{|\tau|}$ | one choice of result per argument — which is why $\to$ is written as an exponential |

The last row is worth pausing on. $\mathsf{Bool}\to\mathsf{Bool}$ has $2^2 = 4$ values (identity, negation, constant-true, constant-false), and you can name all four. The exponential notation of [`category-theory` 3.4](../../category-theory/lessons/03-04-adjoint-functors.md) is this arithmetic.

**Example 2 (why you'd care): exhaustiveness catches the bug a test suite misses.** Here is the abstract syntax of [Lesson 1.2](01-02-concrete-and-abstract-syntax.md), as a datatype:

```
data Expr = Num Int
          | Var String
          | Add Expr Expr
          | Mul Expr Expr
```

and an evaluator:

```
eval env e = case e of
    Num n     -> n
    Var x     -> lookup x env
    Add e1 e2 -> eval env e1 + eval env e2
    Mul e1 e2 -> eval env e1 * eval env e2
```

Now the language grows a construct — `If Expr Expr Expr`. Add it to the datatype and **every function consuming `Expr` fails to compile**, each with a message naming the missing case. The type checker has just handed you the complete list of places that need updating, across the whole program, before you have run anything.

Contrast the alternatives. With a visitor interface and a default method, the new node silently takes the default. With a tag field and a `switch` with a `default: return 0`, the new node silently returns zero. With dynamic dispatch on a class hierarchy, you find out at run time on the first input that uses it. **In every case the failure is silent and deferred; with an exhaustive match it is loud and immediate.**

This is why a compiler is written this way, and it generalizes past compilers: any time you have a fixed set of cases that will grow, a sum type converts "remember to update everything" into a compile error. The cost is the dual, and it is real — adding a *new consumer* is easy, adding a *new case* touches every consumer. An object-oriented class hierarchy makes exactly the opposite trade: new cases are cheap, new operations touch every class. That is the **expression problem**, and no mainstream language solves both sides cleanly.

## Watch out

- **You might think** a sum type is a tagged union and therefore just a struct with a tag field — **but actually** the difference is that the tag cannot be inspected or bypassed independently of the payload. In C you may read the wrong union member; here the payload is reachable only through a case that has already established the tag, and that is what makes the pattern sound.
- **You might think** exhaustiveness checking is a nicety — **but actually** it is the entire reason to prefer `Option` to `null`, and the mechanism that makes a growing datatype safe to extend. A language with sums but *without* the check (an untagged union, or a `default` clause everyone writes) has given the feature up.
- **You might think** a catch-all pattern `_ -> ...` is harmless — **but actually** it defeats exhaustiveness for that match: add a constructor and this site silently takes the catch-all instead of failing to compile. Use it where the default is genuinely right for all future cases, and expand the cases otherwise.

## One-liner

> Two formers, sum and product, generate every data structure — and because a value of a sum carries its tag and can only be opened by a case, the compiler can hand you the complete list of places a new constructor breaks.

## Problems

**P1 (🟢)** Give the number of distinct values of each type, assuming $|\mathsf{Bool}| = 2$ and $|\mathsf{Unit}| = 1$.

(a) $\mathsf{Option}\ (\mathsf{Bool}\times\mathsf{Bool})$
(b) $\mathsf{Bool} \to \mathsf{Option}\ \mathsf{Unit}$
(c) $(\mathsf{Bool}+\mathsf{Unit}) \times \mathsf{Bool}$
(d) $\mathsf{Option}\ (\mathsf{Option}\ \mathsf{Bool})$

**P2 (🟡)** Write each as an algebraic data type declaration, and give its cardinality where finite.

(a) A traffic light: red, amber or green.
(b) A result that is either a success carrying a value of type $\alpha$ or a failure carrying an error message.
(c) A binary tree whose *leaves* carry values of type $\alpha$ and whose internal nodes carry nothing.
(d) A JSON value: null, a boolean, a number, a string, an array of JSON values, or an object mapping strings to JSON values.

**P3 (🔴)** A codebase models a shape as

```
data Shape = Circle Double | Square Double | Rect Double Double
```

with an `area` function matching all three constructors, and a `perimeter` function written as

```
perimeter s = case s of
    Circle r -> 2 * pi * r
    _        -> 4 * sideOf s
```

(a) A developer adds `Triangle Double Double Double`. State exactly which of the two functions fails to compile and which silently misbehaves, and say why.
(b) State the general rule this illustrates about catch-all patterns.
(c) Now suppose instead the codebase used a class hierarchy with an abstract `Shape` class and one subclass per shape, each implementing `area` and `perimeter`. State what adding `Triangle` costs, and what adding a *new operation* `boundingBox` costs.
(d) Name the problem that (a) and (c) are the two horns of, and state in one sentence what each approach makes cheap.

<details>
<summary>Solutions</summary>

**P1**

(a) $|\mathsf{Option}\ \tau| = 1 + |\tau|$ and $|\mathsf{Bool}\times\mathsf{Bool}| = 4$, so $1 + 4 = \mathbf{5}$.

(b) $|\tau\to\sigma| = |\sigma|^{|\tau|}$. Here $|\mathsf{Option}\ \mathsf{Unit}| = 1 + 1 = 2$ and $|\mathsf{Bool}| = 2$, so $2^2 = \mathbf{4}$.

(c) $|\mathsf{Bool}+\mathsf{Unit}| = 2 + 1 = 3$, times $|\mathsf{Bool}| = 2$, gives $\mathbf{6}$.

(d) $|\mathsf{Option}\ \mathsf{Bool}| = 1 + 2 = 3$, so $|\mathsf{Option}\ (\mathsf{Option}\ \mathsf{Bool})| = 1 + 3 = \mathbf{4}$.

Worth noting: the four values are `None`, `Some None`, `Some (Some true)`, `Some (Some false)` — all distinct, because each `Option` layer carries its own tag. This is exactly what nullable types in languages with `null` cannot do: a nullable nullable string is just a nullable string, the layers collapse, and "the lookup returned nothing" becomes indistinguishable from "the lookup returned a null value".

**P2**

(a) `data Light = Red | Amber | Green` — three nullary constructors. Cardinality $1+1+1 = \mathbf{3}$.

(b) `data Result a = Ok a | Err String`. Cardinality $|\alpha| + |\mathsf{String}|$, **infinite** for any inhabited $\alpha$ since strings are unbounded.

(c) `data Tree a = Leaf a | Node (Tree a) (Tree a)`. Cardinality **infinite** — the type is recursive with a branching constructor, so trees of every size exist.

(Note the placement: values live on `Leaf` and `Node` carries none, which is what the question specified. The more common shape, values at internal nodes, is `data Tree a = Empty | Node (Tree a) a (Tree a)`.)

(d)

```
data JSON = JNull
          | JBool Bool
          | JNum Double
          | JStr String
          | JArr [JSON]
          | JObj [(String, JSON)]
```

Cardinality **infinite**. This is the canonical demonstration that the two formers suffice: six alternatives (a sum), two of which carry pairs or lists (products, recursively), and the whole of JSON is described in six lines with an exhaustiveness guarantee for every consumer.

**P3**

(a) **`area` fails to compile.** It matches all three constructors explicitly, so adding a fourth leaves a value shape uncovered and the exhaustiveness checker reports a non-exhaustive match, naming `Triangle`.

**`perimeter` compiles and silently misbehaves.** Its catch-all `_` covers every constructor other than `Circle`, so `Triangle` falls into it and the function computes `4 * sideOf s` — a square's perimeter formula applied to a triangle. Nothing warns, and the wrong number is returned at run time.

That is the worst possible outcome: the function that was *incomplete* was caught, and the function that was *wrong* was not.

(b) **A catch-all pattern converts a future compile error into a future silent bug.** It tells the checker "I have considered every remaining case and they are all handled this way", which is a claim about cases that do not exist yet — and you cannot have considered them.

The rule: use `_` only when the default is genuinely correct for every constructor that could ever be added (typically when the branch does something like "return the input unchanged"). When the default is correct merely for the constructors that happen to exist today, enumerate them, and accept the compile error as the feature it is.

(c) With a class hierarchy:

**Adding `Triangle` is cheap** — write one new class implementing `area` and `perimeter`, touching no existing code. The compiler enforces completeness in the other direction: the abstract methods must all be implemented, so you cannot forget one.

**Adding `boundingBox` is expensive** — it must be added to the abstract class and implemented in *every* subclass, touching every existing file. The compiler does help (an unimplemented abstract method is an error), but the edit is spread across the whole hierarchy.

(d) This is the **expression problem**.

The trade in one sentence: **algebraic data types make new operations cheap and new cases expensive; class hierarchies make new cases cheap and new operations expensive** — and no mainstream language lets you add both without modifying existing code, which is why the choice between the two should be made by asking which axis your program is actually going to grow along.

(For a compiler, the set of AST node kinds is nearly fixed while the set of passes grows constantly, so ADTs are clearly right — which is why compilers are written this way. For a GUI toolkit the widget set grows and the operations are fixed, and the class hierarchy is right.)

</details>

## Flashback

**From Lesson 3.2 (Church encodings and beta-reduction):** A pair is $\lambda a.\lambda b.\lambda s.\ s\,a\,b$ — a function awaiting a selector — and a boolean is its own `if`.

(a) Write the Church encoding of a **sum** type: give terms $\mathsf{inl}$, $\mathsf{inr}$ and $\mathsf{case}$ such that $\mathsf{case}\ (\mathsf{inl}\ v)\ f\ g$ reduces to $f\,v$ and $\mathsf{case}\ (\mathsf{inr}\ v)\ f\ g$ reduces to $g\,v$.
(b) Compare your $\mathsf{inl}$ and $\mathsf{inr}$ with $\mathsf{tru}$ and $\mathsf{fls}$, and say what the extra structure is.

<details>
<summary>Solution</summary>

(a) Encode a sum value as **a function that takes the two handlers and applies the right one to its payload**:

$$\mathsf{inl} = \lambda v.\ \lambda f.\lambda g.\ f\,v \qquad\qquad \mathsf{inr} = \lambda v.\ \lambda f.\lambda g.\ g\,v$$

$$\mathsf{case} = \lambda s.\lambda f.\lambda g.\ s\,f\,g$$

Check the first reduction:

$$\mathsf{case}\ (\mathsf{inl}\ v)\ f\ g \;\to_\beta^*\; (\mathsf{inl}\ v)\ f\ g \;\to_\beta\; (\lambda f.\lambda g.\ f\,v)\ f\ g \;\to_\beta^*\; f\,v$$

and symmetrically $\mathsf{case}\ (\mathsf{inr}\ v)\ f\ g \to_\beta^* g\,v$.

As with $\mathsf{test}$ in [Lesson 3.2](03-02-church-encodings-and-beta-reduction.md), $\mathsf{case}$ does nothing but hand the handlers to the value — the value performs its own dispatch, so one usually writes $s\,f\,g$ directly.

(b) $\mathsf{tru} = \lambda t.\lambda f.\,t$ and $\mathsf{inl}\ v = \lambda f.\lambda g.\ f\,v$ have the same shape: both take two arguments and use the first. The difference is that the boolean **returns** its chosen argument while the injection **applies** it to a payload.

So the extra structure is exactly the payload: a sum is a boolean that is carrying something. Formally, $\mathsf{Bool} \cong \mathsf{Unit} + \mathsf{Unit}$ — a choice between two alternatives that carry nothing — and the Church encodings line up with that isomorphism precisely. Set $v$ to a dummy and $\mathsf{inl}$ collapses to $\mathsf{tru}$ (up to an application of the handler to the dummy).

This is the same observation as [Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md)'s Flashback from the other side: there, parametricity showed $\forall\alpha.\ \alpha\to\alpha\to\alpha$ has exactly two inhabitants, which are simultaneously the two booleans and the two projections. Here, the type of a Church sum is $\forall\gamma.\ (\alpha\to\gamma)\to(\beta\to\gamma)\to\gamma$, and specializing $\alpha = \beta = \mathsf{Unit}$ recovers the booleans' type. **The encoding of a datatype is its case analysis, typed** — which is why the Church encoding of a sum is exactly the type of its eliminator.

</details>

## Connections

- **Backward:** the encodings are [Lesson 3.2](03-02-church-encodings-and-beta-reduction.md)'s, now typed and given syntax; the abstract syntax of [Lesson 1.2](01-02-concrete-and-abstract-syntax.md) is a recursive sum of products, and Example 2's evaluator is [Lesson 2.2](02-02-big-step-semantics-and-environments.md)'s big-step rules written as code. The case rule's "both branches, same type" is the constraint that rejected [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md) P1(d).
- **Forward:** the $\mu$ making recursive types precise is [Lesson 5.3](05-03-recursive-types-existentials-and-modules.md); the expression problem's other horn, subtyping and dynamic dispatch, is [Lesson 5.2](05-02-subtyping-records-and-variance.md). Compiling a pattern match into efficient tag tests is a real back-end problem touched in [Lesson 7.6](07-06-code-generation-and-the-back-end.md).
- **Sideways:** sum and product are the categorical coproduct and product of [`category-theory` 3.1](../../category-theory/lessons/03-01-products-coproducts.md) — a record *is* a product and a tagged union *is* a coproduct, and the cardinality arithmetic, including $\tau\to\sigma$ as an exponential, is that structure counted.
