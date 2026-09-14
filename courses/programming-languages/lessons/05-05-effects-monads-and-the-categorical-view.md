# Programming Languages · Lesson 5.5: Effects, monads and the categorical view

> ⏱ ~15 min · Module 5: Type-system design choices · Builds on: [5.4 (type classes)](05-04-type-classes-and-ad-hoc-polymorphism.md), [4.2 (Curry–Howard)](04-02-type-checking-and-curry-howard.md) · Unlocks: [5.6 (ownership and linearity)](05-06-ownership-linearity-and-borrow-checking.md), [6.2 (state and the store)](06-02-state-references-and-the-store.md)

## Why this matters

A type says what a function *returns*. It usually says nothing about what the function *does* — whether it writes a file, throws, reads a global, or blocks. In most languages `Int -> Int` covers both a pure doubling function and one that launches a missile and returns 4.

Putting the effect in the type is the last major design choice in this module, and it is the one [`category-theory`](../../category-theory/syllabus.md) has been pointing at: that course's Lessons 4.1, 4.2 and 4.3 all forward-reference this one for monads-as-effects, having built the mathematics. Here is the programming side, which owes that course the structure and owns the use.

The practical payoff is not philosophical. The `Maybe` monad is null-safety, the `State` monad is a threaded store, the list monad is nondeterminism, and `IO` is why Haskell can be pure and still print — and all four are the *same three operations satisfying the same three laws*, which is why one notation (`do`) works for all of them and why a refactoring that is safe in one is safe in all.

## The idea

A monad is a type former $M$ with two operations:

$$\mathsf{return} : \alpha \to M\,\alpha \qquad\qquad (\mathbin{>\!\!>\!\!=}) : M\,\alpha \to (\alpha \to M\,\beta) \to M\,\beta$$

Read $M\,\alpha$ as "a computation producing an $\alpha$, with some context". Then $\mathsf{return}$ builds the trivial computation that just produces a value and does nothing, and $\mathbin{>\!\!>\!\!=}$ ("bind") is **sequencing**: run the first computation, feed its result to the rest.

The reason this is worth a name rather than being four separate ideas: **sequencing is the thing every notion of effect needs, and each one means something different by it.**

- For `Maybe`, sequencing short-circuits — if the first step produced nothing, the rest does not run.
- For lists, sequencing branches — run the rest once per result and concatenate.
- For `State`, sequencing threads — pass the updated state along.
- For `IO`, sequencing orders — the actions happen in this order.

Four behaviours, one operator, and the operator's type is identical in all four. That is the abstraction.

## The formal version

**The class** ([Lesson 5.4](05-04-type-classes-and-ad-hoc-polymorphism.md)'s machinery, so `Monad` is a dictionary of two functions):

```
class Monad m where
    return :: a -> m a
    (>>=)  :: m a -> (a -> m b) -> m b
```

**The three laws.** These are not checked by the compiler; they are obligations on the implementer, and every useful consequence depends on them.

$$\textbf{left identity:}\quad \mathsf{return}\ a \mathbin{>\!\!>\!\!=} f \;=\; f\ a$$

$$\textbf{right identity:}\quad m \mathbin{>\!\!>\!\!=} \mathsf{return} \;=\; m$$

$$\textbf{associativity:}\quad (m \mathbin{>\!\!>\!\!=} f) \mathbin{>\!\!>\!\!=} g \;=\; m \mathbin{>\!\!>\!\!=} (\lambda x.\ f\,x \mathbin{>\!\!>\!\!=} g)$$

In words: `return` adds no effect on either side, and **the bracketing of a sequence does not matter**. That last one is exactly what licenses refactoring — pulling three statements out of a block into a helper and calling it is a legal transformation *because* of associativity, and in a monad that violated it, it would not be.

**Kleisli composition** makes the laws look like what they are. Define

$$(f \mathbin{>\!\!=\!\!>} g)\ x \;=\; f\,x \mathbin{>\!\!>\!\!=} g \qquad\text{for } f : \alpha\to M\beta,\ g : \beta\to M\gamma$$

Then the three laws say precisely: $\mathsf{return}$ is a **two-sided identity** for $\mathbin{>\!\!=\!\!>}$, and $\mathbin{>\!\!=\!\!>}$ is **associative**. A monad is a monoid-like structure on effectful functions, which is the whole content — and it is why [`category-theory` 4.1](../../category-theory/lessons/04-01-monads.md) presents it as $\eta$ (unit) and $\mu$ (join) with the same two laws in diagram form.

**Do-notation is pure sugar** — [Lesson 1.2](01-02-concrete-and-abstract-syntax.md)'s desugaring, applied to effects:

$$\mathsf{do}\ \{x \leftarrow m;\ \mathit{rest}\} \;\rightsquigarrow\; m \mathbin{>\!\!>\!\!=} \lambda x.\ \mathsf{do}\ \{\mathit{rest}\}$$

$$\mathsf{do}\ \{m;\ \mathit{rest}\} \;\rightsquigarrow\; m \mathbin{>\!\!>\!\!=} \lambda\_.\ \mathsf{do}\ \{\mathit{rest}\} \qquad\qquad \mathsf{do}\ \{m\} \;\rightsquigarrow\; m$$

So imperative-looking code is a chain of binds, and **the semicolon is a function call**. Change the monad and the same source text means something different — this is the feature, not a trick.

**The categorical view.** [`category-theory` 4.1](../../category-theory/lessons/04-01-monads.md) defines a monad as an endofunctor $T$ with natural transformations $\eta : \mathrm{Id}\Rightarrow T$ and $\mu : T^2 \Rightarrow T$ satisfying unit and associativity laws. The translation is exact: $\eta$ is `return`, $\mu$ is `join :: m (m a) -> m a`, and `bind` is `join . fmap f`. The **Kleisli category** has the same objects and arrows $\alpha\to M\beta$, with $\mathbin{>\!\!=\!\!>}$ as composition and `return` as identity — so the three laws are literally the category axioms, and [`category-theory` 4.2](../../category-theory/lessons/04-02-algebras-monoidal-categories.md) gets them for free.

The third leg: the types and terms of [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md) form a **cartesian closed category**, with $\times$ the product, $\to$ the exponential, and the currying adjunction of [`category-theory` 3.4](../../category-theory/lessons/03-04-adjoint-functors.md) as `curry`/`uncurry`. Together with [Lesson 4.2](04-02-type-checking-and-curry-howard.md)'s correspondence this is **Curry–Howard–Lambek**: proofs, programs and morphisms are three readings of one object.

## Picture

![A definition line reading M a is a value of type a plus some context, with the two operation signatures return from a to M a and bind from M a and a function a to M b to M b. Below a dashed rule, four rows: Maybe a, meaning a or nothing, where failure short-circuits; a list of a, meaning zero or more results, where nondeterminism branches; s to a pair of a and s, meaning a while threading a state, where the state is passed along; and IO a, meaning a after touching the world, where the actions are sequenced. Below a second rule, the do-notation desugaring is given, with a caption noting that sequencing is not a keyword but one operator, and each M decides what it means.](assets/05-05-fig1.svg)

The four rows have nothing in common as data structures. What they share is that each has a sensible answer to "and then", and the interface is exactly that question. **Notice the last column: it is the only place the four differ**, and it is not part of the interface — it lives in each instance's `>>=`.

## Worked examples

**Example 1 (mechanical): verify the laws for `Maybe`.** With $\mathsf{return}\ x = \mathsf{Just}\ x$ and

$$\mathsf{Just}\ x \mathbin{>\!\!>\!\!=} f = f\ x, \qquad \mathsf{Nothing} \mathbin{>\!\!>\!\!=} f = \mathsf{Nothing}$$

*Left identity.* $\mathsf{return}\ a \mathbin{>\!\!>\!\!=} f = \mathsf{Just}\ a \mathbin{>\!\!>\!\!=} f = f\ a$. ✓ (One step, by the first bind clause.)

*Right identity.* Two cases.
- $m = \mathsf{Just}\ x$: $\mathsf{Just}\ x \mathbin{>\!\!>\!\!=} \mathsf{return} = \mathsf{return}\ x = \mathsf{Just}\ x = m$. ✓
- $m = \mathsf{Nothing}$: $\mathsf{Nothing} \mathbin{>\!\!>\!\!=} \mathsf{return} = \mathsf{Nothing} = m$. ✓

*Associativity.* Two cases.
- $m = \mathsf{Just}\ x$: left side is $(\mathsf{Just}\,x \mathbin{>\!\!>\!\!=} f)\mathbin{>\!\!>\!\!=} g = f\,x \mathbin{>\!\!>\!\!=} g$; right side is $\mathsf{Just}\,x \mathbin{>\!\!>\!\!=} (\lambda y.\ f\,y\mathbin{>\!\!>\!\!=} g) = f\,x\mathbin{>\!\!>\!\!=} g$. Equal. ✓
- $m = \mathsf{Nothing}$: left is $\mathsf{Nothing}\mathbin{>\!\!>\!\!=} g = \mathsf{Nothing}$; right is $\mathsf{Nothing}$. Equal. ✓

All three hold on the nose. **The `Nothing` case of associativity is where short-circuiting is proved to compose** — a failure anywhere in a chain produces `Nothing` regardless of how the chain is bracketed, which is the property you rely on every time you write a pipeline of fallible lookups.

**Example 2 (why you'd care): the same code, four meanings.** Take the do-block

```
do x <- p
   y <- q
   return (x + y)
```

which desugars to `p >>= \x -> q >>= \y -> return (x + y)`. Now vary the monad.

| $M$ | `p`, `q` | result |
|---|---|---|
| `Maybe` | `Just 1`, `Nothing` | `Nothing` — short-circuits at `q`, and `x + y` never evaluates |
| `[]` | `[1,2]`, `[10,20]` | `[11,21,12,22]` — all four combinations |
| `State s` | two stateful reads | the sum, with the state threaded through both |
| `IO` | two `readLn`s | the sum, with the reads performed in that order |

**Identical source text; four different control flows.** The `Maybe` row is an exception mechanism, the list row is a nested loop, the `State` row is imperative variable-passing, the `IO` row is sequencing — and none of that is written anywhere in the block. It is all in the dictionary [Lesson 5.4](05-04-type-classes-and-ad-hoc-polymorphism.md) says the compiler passes.

*Why `IO` solves Haskell's problem.* A value of type `IO a` is a *description* of an action, not a performed one. Building it is pure; the runtime performs the one named `main`. So `putStrLn "hi" :: IO ()` is a value you can put in a list or discard, and the type `String -> IO ()` honestly reports that the function may do something to the world, while `String -> Int` honestly reports that it may not. **The effect is in the type because `IO` is in the type**, and referential transparency survives.

*And the cost, which is real.* Once a function is in a monad, everything calling it must be too — the "colour" spreads up the call graph, and mixing two monads (`State` and `IO`, say) needs transformers or an effect system, which is a genuine complexity. Lesson [5.6](05-06-ownership-linearity-and-borrow-checking.md)'s ownership types are a different answer to the same question, and the async/await keyword in mainstream languages is this exact pattern with one monad hard-coded.

## Watch out

- **You might think** the monad laws are checked by the compiler — **but actually** they are not, in any language. A `Monad` instance that violates associativity compiles fine and silently breaks the refactorings do-notation is supposed to make safe. The laws are a contract, in the [`programming-foundations` 1.2](../../programming-foundations/lessons/01-02-functions-contracts-and-invariants.md) sense, and testing them is what QuickCheck-style property tests are for.
- **You might think** `IO a` is a computation that has already happened — **but actually** it is a value describing one, and nothing runs until the runtime executes `main`. That distinction is what keeps the language pure, and it is why you can store, pass and duplicate `IO` actions without them firing.
- **You might think** a monad is a design pattern you could ignore — **but actually** if your language has `async`/`await`, optional chaining `?.`, `Result` with `?`, or a for-comprehension, it already has one monad hard-coded into the syntax. The general version is what lets you stop adding a keyword per effect.

## One-liner

> Put the effect in the type and you need one operation to sequence them; three laws make that operation behave like composition, and the same do-block then means short-circuiting, branching, state-threading or I/O depending only on which dictionary is passed.

## Problems

**P1 (🟢)** Evaluate each expression in the `Maybe` monad, with `safeDiv a 0 = Nothing` and `safeDiv a b = Just (a / b)`.

(a) `Just 10 >>= \x -> safeDiv x 2`
(b) `Just 10 >>= \x -> safeDiv x 0`
(c) `Nothing >>= \x -> safeDiv x 2`
(d) `Just 10 >>= \x -> safeDiv x 0 >>= \y -> Just (y + 1)`

**P2 (🟡)** Desugar each do-block into explicit binds, then evaluate in the list monad, where `m >>= f = concat (map f m)` and `return x = [x]`.

(a) `do { x <- [1,2]; return (x * 10) }`
(b) `do { x <- [1,2]; y <- [3,4]; return (x + y) }`
(c) `do { x <- [1,2]; _ <- []; return x }`

**P3 (🔴)** Define a candidate `Monad` instance for lists that uses `zip` rather than the cross product:

$$m \mathbin{>\!\!>\!\!=} f \;=\; \text{the } i\text{-th element of } f(m_i), \text{ for } i \text{ up to the shorter length} \qquad \mathsf{return}\ x = [x]$$

(a) Check left identity on `[1,2] `. State whether it holds.
(b) Check right identity on `[1,2]`. State whether it holds.
(c) Give the standard `return` that would be needed to make the identities hold, and say what goes wrong with it.
(d) Name which law this "zip monad" is usually said to fail, and state in one sentence what a programmer would observe if a library shipped it as a `Monad` instance anyway.

<details>
<summary>Solutions</summary>

**P1**

(a) `Just 10 >>= \x -> safeDiv x 2`. The first bind clause applies with $x = 10$, giving `safeDiv 10 2` = **`Just 5`**.

(b) `Just 10 >>= \x -> safeDiv x 0` gives `safeDiv 10 0` = **`Nothing`** — the division by zero is reported as an absent value rather than an exception.

(c) `Nothing >>= \x -> safeDiv x 2`. The second bind clause applies: **`Nothing`**, and the function is never called. This is short-circuiting: `safeDiv` did not run at all.

(d) Associativity lets us bracket either way; take the left. `Just 10 >>= \x -> safeDiv x 0` is `Nothing` by (b), and `Nothing >>= \y -> Just (y + 1)` is **`Nothing`**.

The chain failed at step two and the third step never ran — which is exactly the behaviour a sequence of `if (p == null) return null` checks would give, obtained here from one operator and no checks in the source.

**P2**

(a) Desugars to `[1,2] >>= \x -> return (x * 10)`.

$\mathsf{concat}(\mathsf{map}\ (\lambda x.\ [x*10])\ [1,2]) = \mathsf{concat}\ [[10],[20]] = \mathbf{[10, 20]}$.

With a singleton-producing function, bind behaves exactly like `map` — which is why the list monad generalizes comprehensions.

(b) Desugars to `[1,2] >>= \x -> ([3,4] >>= \y -> return (x + y))`.

Inner, for $x = 1$: $\mathsf{concat}[[4],[5]] = [4,5]$. For $x = 2$: $[5,6]$.
Outer: $\mathsf{concat}[[4,5],[5,6]] = \mathbf{[4,5,5,6]}$.

**Note the duplicate 5** — it appears once from $(1,4)$ and once from $(2,3)$. The list monad is a *multiset* of results, not a set, which matters: it is a nested loop, and a nested loop produces both.

(c) Desugars to `[1,2] >>= \x -> ([] >>= \_ -> return x)`.

The inner bind is $\mathsf{concat}(\mathsf{map}\ f\ []) = \mathsf{concat}\ [] = []$ for any $f$. So the outer becomes $\mathsf{concat}\ [[],[]] = \mathbf{[]}$.

**The empty list annihilates**, exactly as `Nothing` did in P1 — it is the list monad's failure, and this is the mechanism behind a guard in a list comprehension.

**P3**

(a) *Left identity* requires $\mathsf{return}\ a \mathbin{>\!\!>\!\!=} f = f\ a$.

Take $a = 1$ and $f\,x = [x, x+100]$. Then $\mathsf{return}\ 1 = [1]$, a list of length 1, so the zip-bind produces a result of length 1: the 0-th element of $f(1) = [1, 101]$, giving $[1]$.

But $f\,1 = [1, 101]$, of length 2. $[1] \ne [1,101]$, so **left identity fails**.

The mechanism: zip truncates to the shorter length, and `return` produces a singleton, so every bind after a `return` is truncated to one element.

(b) *Right identity* requires $m \mathbin{>\!\!>\!\!=} \mathsf{return} = m$.

Take $m = [1,2]$. For each index $i$, take the $i$-th element of $\mathsf{return}(m_i) = [m_i]$ — a singleton, whose 0-th element is $m_i$. Index 0 gives $m_0 = 1$; index 1 asks for the *1st* element of $[2]$, which does not exist.

Under the "up to the shorter length" reading the result is truncated to length 1, giving $[1] \ne [1,2]$, so **right identity fails**. (Under a reading that indexes $f(m_i)$ at position $i$ with singletons padded, the same problem appears as an out-of-range access.)

(c) The `return` that makes the identities work is the **infinite repeating list**:

$$\mathsf{return}\ x = [x, x, x, \ldots] = \mathsf{repeat}\ x$$

With this, $\mathsf{return}\ a \mathbin{>\!\!>\!\!=} f$ is no longer truncated, and $m \mathbin{>\!\!>\!\!=} \mathsf{return}$ returns $m$ at every index.

What goes wrong: **the value is infinite**, so it only exists in a lazy language ([Lesson 3.4](03-04-evaluation-strategies.md)), and even there it is not a value of the finite-list type — it lives in the greatest fixed point, not the least ([Lesson 5.3](05-03-recursive-types-existentials-and-modules.md) P1(d)). A strict language cannot construct it at all. This is exactly why the zip structure is packaged in Haskell as `ZipList` with an **`Applicative`** instance and no `Monad` instance: `pure = repeat` makes the applicative laws work, and the monad laws still do not.

(d) It is usually said to fail **associativity** (and, as shown above, the identity laws too once `return` is the singleton).

What a programmer would observe if it shipped as a `Monad`: **refactorings that should be invisible would change results.** Pulling the last two lines of a do-block out into a helper function and calling it is precisely the re-bracketing that associativity licenses; in a law-breaking instance the extracted version computes something different — typically a list truncated at a different length. The bug appears at the moment of an unrelated tidy-up, with no error message, which is the worst diagnostic profile a bug can have. That is the concrete reason the laws matter even though no compiler checks them.

</details>

## Flashback

**From Lesson 1.2 (Concrete syntax, abstract syntax and desugaring):** A desugaring rule that uses a subexpression more than once must bind it to a fresh temporary first, or the effect is duplicated.

Do-notation desugars $\mathsf{do}\{x \leftarrow m;\ \mathit{rest}\}$ to $m \mathbin{>\!\!>\!\!=} \lambda x.\ \mathsf{do}\{\mathit{rest}\}$.

(a) State whether this rule needs a fresh temporary, with the reason.
(b) A designer proposes an alternative rule $\mathsf{do}\{x \leftarrow m;\ \mathit{rest}\} \rightsquigarrow \mathit{rest}[x := \mathsf{extract}\ m]$ for a monad supplying $\mathsf{extract} : M\alpha \to \alpha$. Give two distinct reasons this is wrong.

<details>
<summary>Solution</summary>

(a) **No fresh temporary is needed**, and the reason is [Lesson 1.2](01-02-concrete-and-abstract-syntax.md)'s test applied directly: $m$ appears **exactly once** on the right-hand side, and $\mathit{rest}$ appears exactly once. No subexpression is duplicated, so no effect can be duplicated, and the rule is safe as written.

This is worth noticing because do-notation is a desugaring over *effectful* code, where duplication would be maximally damaging — a rule that mentioned $m$ twice would perform its effect twice. The bind operator's type $M\alpha \to (\alpha\to M\beta)\to M\beta$ is what makes single mention possible: the result of $m$ is delivered to the continuation as a parameter rather than by re-evaluating $m$.

(b) Two reasons, either sufficient:

**1. Most monads have no such $\mathsf{extract}$.** For `Maybe`, extracting an $\alpha$ from `Nothing` is impossible — there is no value to produce, so the function cannot be total. For the list monad, extracting one $\alpha$ from `[]` is impossible and from `[1,2]` is ambiguous. For `IO`, an $\mathsf{extract}$ would be `unsafePerformIO`, which breaks referential transparency and is named accordingly. The interface deliberately does **not** include extraction, and that absence is what lets `Maybe` and `[]` be monads at all.

**2. The substitution duplicates the computation.** $\mathit{rest}[x := \mathsf{extract}\ m]$ replaces *every* occurrence of $x$ in $\mathit{rest}$, so if $\mathit{rest}$ mentions $x$ three times, $m$'s effect is performed three times. This is exactly the [Lesson 1.2](01-02-concrete-and-abstract-syntax.md) P2(d) failure — the compound-assignment bug — arriving in a context where the duplicated thing is a file read or a network call rather than an array index.

The bind version has neither problem: it requires nothing beyond the interface, and it evaluates $m$ once and binds its result to a $\lambda$ parameter, so multiple uses of $x$ read one value rather than re-running one computation. **The reason `>>=` takes a *function* rather than extracting a value is precisely to avoid both**, which is a good example of an interface's shape being determined by what it must not permit.

</details>

## Connections

- **Backward:** `Monad` is a type class, so [Lesson 5.4](05-04-type-classes-and-ad-hoc-polymorphism.md)'s dictionary passing is what makes the same do-block mean four things. The desugaring is [Lesson 1.2](01-02-concrete-and-abstract-syntax.md)'s, and the short-circuiting of `Maybe` is that lesson's `&&` rule generalized.
- **Forward:** [Lesson 6.2](06-02-state-references-and-the-store.md) threads a store through a semantics by hand, which is the `State` monad written out; [Lesson 6.3](06-03-continuations-and-control.md)'s CPS transform is the continuation monad, and exceptions are `Maybe` with a payload. [Lesson 5.6](05-06-ownership-linearity-and-borrow-checking.md) is the alternative answer — control effects with types, without wrapping every value.
- **Sideways:** this lesson owns the programming side of what [`category-theory` 4.1](../../category-theory/lessons/04-01-monads.md) and [4.2](../../category-theory/lessons/04-02-algebras-monoidal-categories.md) own mathematically: `return` is $\eta$, `join` is $\mu$, the three laws are the Kleisli category's axioms, and the types-and-terms of [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md) form the cartesian closed category that [`category-theory` 4.3](../../category-theory/lessons/04-03-applications-higher-categories.md) calls the third leg of Curry–Howard–Lambek.
