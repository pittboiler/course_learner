# Programming Languages · Lesson 5.4: Type classes and ad-hoc polymorphism

> ⏱ ~15 min · Module 5: Type-system design choices · Builds on: [4.4 (polymorphism and parametricity)](04-04-polymorphism-system-f-and-parametricity.md), [5.3 (existentials and modules)](05-03-recursive-types-existentials-and-modules.md) · Unlocks: [5.5 (effects and monads)](05-05-effects-monads-and-the-categorical-view.md), [5.6 (ownership and linearity)](05-06-ownership-linearity-and-borrow-checking.md)

## Why this matters

Parametric polymorphism ([Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md)) is powerful precisely because the function knows *nothing* about the type it is instantiated at. That is what makes `forall a. [a] -> [a]` obey a free theorem — and what makes it impossible to write `sort`, because sorting needs to compare elements and comparison is an operation on the abstract type.

So you need a middle ground: polymorphism that carries *some* operations with the type. Every language has one. Java has interfaces and bounded generics, C++ has overloading and concepts, Rust has traits, Haskell has type classes — and they are all doing the same thing, which this lesson makes precise. The precise version is worth having because it explains why some of them keep type inference and some of them do not, and because the translation into ordinary code (**dictionary passing**) shows you exactly what the feature costs at run time.

It also sets up [Lesson 5.5](05-05-effects-monads-and-the-categorical-view.md): monads are a type class, and they are not comprehensible until this mechanism is.

## The idea

**Ad-hoc polymorphism** is when one name has different implementations at different types, chosen by the type. `+` on integers and `+` on strings are different code; overloading picks between them.

The naive version — C++-style overloading resolved by the argument types at the call site — does not compose. You cannot write a *generic* function that uses `+` on its abstract parameter, because at the point of definition there is no concrete type to resolve against.

The fix is to make the requirement part of the **type**:

$$\mathsf{sort} \;:\; \forall\alpha.\ \mathsf{Ord}\ \alpha \Rightarrow [\alpha] \to [\alpha]$$

read "for any $\alpha$ **that has an ordering**, a function from lists to lists". The $\mathsf{Ord}\ \alpha \Rightarrow$ part is a **constraint**, and it travels with the type. Now the generic function can use `<=`, and any caller must supply a type for which `<=` exists — checked at compile time, at the call site.

The implementation idea is simpler than it looks: **the constraint is an extra parameter**, holding a record of the operations. The compiler inserts it and fills it in.

## The formal version

**Class and instance.**

```
class Eq a where
    eq :: a -> a -> Bool

instance Eq Nat where
    eq = primEqNat

instance Eq a => Eq [a] where      -- a conditional instance
    eq Nil        Nil        = True
    eq (Cons x xs) (Cons y ys) = eq x y && eq xs ys
    eq _          _          = False
```

The third declaration is the interesting one: **lists are comparable if their elements are**, so instances compose and the compiler can discharge `Eq [[Nat]]` by chaining.

**Qualified types.** The type language grows a constraint arrow:

$$\sigma ::= \forall\overline{\alpha}.\ \overline{C} \Rightarrow \tau$$

and the typing rule for using a class method introduces the constraint, while instance resolution discharges it:

$$\frac{\Gamma \vdash e : \forall\alpha.\ C\,\alpha \Rightarrow \tau \qquad \vdash C\,\tau' \ \text{(by instance resolution)}}{\Gamma \vdash e : [\alpha := \tau']\,\tau}$$

**Dictionary-passing translation.** This is the whole implementation, and it uses no new machinery:

- a **class** becomes a record type: `data EqDict a = EqDict { eq :: a -> a -> Bool }`;
- an **instance** becomes a value of that type: `eqNat = EqDict primEqNat`;
- a **conditional instance** becomes a function: `eqList :: EqDict a -> EqDict [a]`;
- a **constrained signature** becomes an extra parameter: `elem :: EqDict a -> a -> [a] -> Bool`;
- a **call** becomes an application with the dictionary the compiler resolved.

So `elem (3 :: Nat) xs` elaborates to `elem eqNat 3 xs`, and `elem [1,2] xss` elaborates to `elem (eqList eqNat) [1,2] xss`. **The resolution happens at compile time, by type**, and what runs is ordinary function application.

**Coherence.** The property that *every* way of resolving a constraint yields the same dictionary. It is what lets the compiler choose freely, and it is why Haskell forbids two instances for the same type — if both `instance Eq Nat` declarations existed, `eq` would mean different things in different modules, and a `Set Nat` built with one could be searched with the other. Rust enforces the same discipline with its orphan rule; Scala's implicits deliberately give coherence up in exchange for scoped instances, which is why Scala can have two orderings for `Int` in different scopes and Haskell cannot.

**What is given up: parametricity.** $\forall\alpha.\ [\alpha]\to[\alpha]$ obeys the free theorem $\mathsf{map}\,f\circ r = r\circ\mathsf{map}\,f$. Add a constraint and it does not:

$$\mathsf{sort} : \forall\alpha.\ \mathsf{Ord}\ \alpha \Rightarrow [\alpha]\to[\alpha]$$

$\mathsf{map}\,f\,(\mathsf{sort}\,xs) \ne \mathsf{sort}\,(\mathsf{map}\,f\,xs)$ in general — take $f$ to be a function that does not preserve order. **The constraint is exactly the hole in parametricity**, and the weakened theorem holds only for *monotone* $f$. That is a precise statement of what a constraint costs: the operations it supplies are operations the function can use to look at the abstract type, so it is no longer uniform in it.

## Picture

![Two panels connected by a downward arrow labelled elaboration. The upper panel, headed what you write, shows the signature elem with an Eq a constraint, taking an a and a list of a to Bool. The lower panel, headed what the compiler produces, shows elem taking an EqDict of a as an extra first parameter, and below it the definition of EqDict a as a record containing a field eq of type a arrow a arrow Bool. A caption states that the constraint is a parameter and that resolution happens at compile time, by type.](assets/05-04-fig1.svg)

The elaboration arrow is the whole feature. Above it is a language with a new concept; below it is the simply-typed language you already have, with one extra argument. **Nothing new happens at run time** — no method table lookup by name, no dynamic search — which is why type classes cost about as much as passing a record, and why they can be inlined away entirely when the instance is known statically.

## Worked examples

**Example 1 (mechanical): elaborate a constrained call.** Take

```
member :: Eq a => a -> [a] -> Bool
member x Nil         = False
member x (Cons y ys) = eq x y || member x ys
```

The dictionary translation:

```
member :: EqDict a -> a -> [a] -> Bool
member d x Nil         = False
member d x (Cons y ys) = (eq d) x y || member d x ys
```

Note `member d` in the recursive call — **the dictionary is threaded through the recursion**, because the element type does not change. Now two call sites:

| source | elaborated | dictionary built |
|---|---|---|
| `member (3::Nat) ns` | `member eqNat 3 ns` | the base instance |
| `member [1,2] nss` | `member (eqList eqNat) [1,2] nss` | conditional instance applied to the base |
| `member [[1]] nsss` | `member (eqList (eqList eqNat)) ...` | chained twice |

The third row shows resolution being genuinely compositional: the compiler builds a dictionary by *proof search* over the instance declarations, and the term it constructs mirrors the derivation. That search is a form of unification against instance heads — the [Lesson 4.3](04-03-unification-and-hindley-milner.md) algorithm again, now over class constraints.

**Example 2 (why you'd care): three languages, one mechanism.** The same function in four forms.

*Haskell:* `sort :: Ord a => [a] -> [a]` — the constraint is on the type, the dictionary is implicit, resolution is by type at compile time.

*Rust:* `fn sort<T: Ord>(v: &mut Vec<T>)` — the trait bound is the constraint; monomorphization generates a separate specialized copy per `T` rather than passing a dictionary (so it is faster and produces more code). Rust also has `dyn Trait`, which *does* pass a vtable — the dictionary made explicit and dynamic.

*Java:* `static <T extends Comparable<T>> void sort(List<T> l)` — the bound is the constraint, and the "dictionary" is the object itself: `compareTo` is found by the receiver's vtable at run time.

*ML:* no type classes; you pass the module explicitly — `MakeSort(struct type t = int; val compare = Int.compare end)`. **The functor argument is the dictionary, written by hand.**

The comparison is the point. **All four pass a dictionary; they differ in who writes it and when it is chosen.** Haskell: compiler writes it, chosen at compile time by type. Rust: compiler specializes, no dictionary at run time. Java: the value carries it, chosen at run time by the receiver. ML: you write it, chosen by you.

And the trade is visible in what each gives up. Java's version cannot sort `int[]` (primitives have no vtable) and cannot have two orderings for one type without wrapper objects. ML's is completely coherent and completely explicit — nothing is inferred, and a deeply nested constraint means a deeply nested functor application. Haskell's is inferred and coherent but permits exactly one instance per type globally, so you cannot have two `Ord` instances for `Int` without a `newtype` wrapper. **Each language chose a different point on the same trade, and knowing the mechanism lets you predict the trade.**

## Watch out

- **You might think** type classes are interfaces — **but actually** the dispatch differs in a way that matters. An interface is dispatched on the *value* (the receiver carries its vtable), so it cannot dispatch on a return type; a type class is resolved on the *type*, so `read :: Read a => String -> a` and `mempty :: Monoid a => a` work, and have no interface equivalent. This is why Java has no `Comparable.parse` and Haskell does.
- **You might think** adding a constraint is free — **but actually** it costs parametricity, which is a real loss: the free theorems weaken, and a constrained function can observe its type parameter in ways an unconstrained one provably cannot. Prefer the unconstrained signature when it suffices.
- **You might think** coherence is an implementation detail — **but actually** it is what allows the compiler to resolve without asking you, and giving it up (Scala implicits) buys scoped instances at the price of the same value being in a `Set` under one ordering and looked up under another. Neither choice is wrong; the bug it enables is specific and worth recognizing.

## One-liner

> Make the requirement part of the type, and the compiler turns it into an extra argument holding a record of operations — which is why type classes, traits, bounded generics and ML functors are one mechanism with four answers to "who writes the dictionary, and when".

## Problems

**P1 (🟢)** For each signature, say whether it needs a constraint and why.

(a) $\forall\alpha.\ [\alpha] \to \mathsf{Nat}$ (the length)
(b) $\forall\alpha.\ [\alpha] \to [\alpha]$ (remove adjacent duplicates)
(c) $\forall\alpha.\ [\alpha] \to \alpha$ (the maximum)
(d) $\forall\alpha.\ \alpha \to [\alpha] \to [\alpha]$ (prepend)

**P2 (🟡)** Elaborate each call to explicit dictionary-passing, given `instance Eq Nat`, `instance Eq a => Eq [a]`, and `instance (Eq a, Eq b) => Eq (a, b)`.

(a) `eq (3 :: Nat) 4`
(b) `eq [1,2] [1,3]`
(c) `eq (1, [2]) (1, [3])`
(d) `eq [(1,[2])] [(1,[3])]`

**P3 (🔴)** Consider `sort :: Ord a => [a] -> [a]` and `reverse :: [a] -> [a]`.

(a) State the free theorem for `reverse`, and verify it informally on a two-element list with $f$ an arbitrary function.
(b) State why the corresponding equation fails for `sort`, giving a concrete $f$, a concrete list, and both sides' values.
(c) Give the weakened theorem that *does* hold for `sort`, naming the condition on $f$.
(d) A colleague proposes strengthening the signature to `sort :: [Nat] -> [Nat]` to "get parametricity back". Assess this in two sentences.

<details>
<summary>Solutions</summary>

**P1**

(a) **No constraint.** Computing a length inspects only the list's structure, never an element, so nothing about $\alpha$ is needed. (By parametricity this is the *only* thing such a function can do — it must factor through the length, as [Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md) P2(d) established.)

(b) **Constraint needed:** $\mathsf{Eq}\ \alpha$. Removing duplicates requires deciding whether two elements are equal, and equality is not available on an abstract type. The signature must be $\forall\alpha.\ \mathsf{Eq}\ \alpha \Rightarrow [\alpha]\to[\alpha]$.

(c) **Constraint needed:** $\mathsf{Ord}\ \alpha$. Finding a maximum requires comparing elements.

(There is a second problem this signature has, independent of the constraint: it is a lie for the empty list. The honest type is $\mathsf{Ord}\ \alpha \Rightarrow [\alpha]\to\mathsf{Option}\ \alpha$, or a non-empty list as its input — [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md) P3's repairs, and [Lesson 5.3](05-03-recursive-types-existentials-and-modules.md) P1(c)'s type.)

(d) **No constraint.** Prepending puts the element at the front without examining it. The function is fully parametric, and by parametricity it can only be some rearrangement of the given element and list.

**P2**

(a) `eq eqNat 3 4` — the base instance directly.

(b) `eq (eqList eqNat) [1,2] [1,3]` — the conditional instance `Eq a => Eq [a]` applied to the dictionary for the element type.

(c) `eq (eqPair eqNat (eqList eqNat)) (1,[2]) (1,[3])` — the pair instance needs two dictionaries, one per component: $\mathsf{Nat}$ for the first and $[\mathsf{Nat}]$ for the second, and the latter is itself built by `eqList eqNat`.

(d) `eq (eqList (eqPair eqNat (eqList eqNat))) [(1,[2])] [(1,[3])]`

Working outward from the type $[(\mathsf{Nat}, [\mathsf{Nat}])]$: the outermost former is a list, so `eqList` applied to a dictionary for $(\mathsf{Nat},[\mathsf{Nat}])$; that is `eqPair` applied to dictionaries for $\mathsf{Nat}$ and $[\mathsf{Nat}]$; and the latter is `eqList eqNat`.

**The dictionary's structure mirrors the type's structure exactly** — which is the point: instance resolution is a recursive walk over the type, and the term it builds is the derivation tree. That is why a deeply nested type produces a deeply nested dictionary expression, and why resolution can be slow for very large types.

**P3**

(a) The free theorem for $\mathsf{reverse} : \forall\alpha.\ [\alpha]\to[\alpha]$ is

$$\mathsf{map}\ f \circ \mathsf{reverse} \;=\; \mathsf{reverse} \circ \mathsf{map}\ f$$

Verify on $[a, b]$ with arbitrary $f$:

- left: $\mathsf{reverse}[a,b] = [b,a]$, then $\mathsf{map}\,f\,[b,a] = [f(b), f(a)]$.
- right: $\mathsf{map}\,f\,[a,b] = [f(a), f(b)]$, then $\mathsf{reverse}[f(a),f(b)] = [f(b),f(a)]$.

Equal. And the reason it must be is parametricity: `reverse` cannot inspect the elements, so the positions it moves them to cannot depend on what they are — mapping before or after therefore makes no difference.

(b) For `sort` the equation fails because the constraint gives it access to the elements' ordering, so *where* an element ends up depends on its value, and applying $f$ first changes that.

Concretely, take $f(n) = -n$ on integers and $xs = [1, 2]$:

- $\mathsf{map}\ f\ (\mathsf{sort}\ [1,2]) = \mathsf{map}\ f\ [1,2] = [-1, -2]$
- $\mathsf{sort}\ (\mathsf{map}\ f\ [1,2]) = \mathsf{sort}\ [-1,-2] = [-2, -1]$

$[-1,-2] \ne [-2,-1]$. The two sides disagree, so the free theorem does not hold.

(c) The weakened theorem: for every **monotone** $f$ (that is, $x \le y \Rightarrow f(x) \le f(y)$ with respect to the relevant orderings),

$$\mathsf{map}\ f \circ \mathsf{sort} \;=\; \mathsf{sort} \circ \mathsf{map}\ f$$

The condition is exactly that $f$ respects the structure the constraint supplied. This is the general shape of a free theorem under a constraint: the quantification over *all* functions narrows to the functions that are **homomorphisms for the class's operations** — for $\mathsf{Ord}$, the monotone ones; for $\mathsf{Eq}$, those that preserve and reflect equality; for $\mathsf{Monoid}$, the monoid homomorphisms.

(Negation fails the condition, since $1 \le 2$ but $-1 \ge -2$ — which is precisely why it was the counterexample in (b).)

(d) The proposal does not do what it claims. **Parametricity is a property of quantifying over types, and `[Nat] -> [Nat]` quantifies over nothing** — there is no $\forall\alpha$, so there is no free theorem to recover; you have exchanged a weakened theorem for none at all, and given up the ability to sort anything but numbers.

The colleague has the relationship backwards: the way to get parametricity back is to *remove* the need for the constraint, not to specialize the type. Concretely, `sortBy :: (a -> a -> Ordering) -> [a] -> [a]` takes the comparison as an explicit argument, restoring $\forall\alpha$ with no constraint — and its free theorem then holds for every $f$ that is compatible with the supplied comparator, which is the honest general statement. (That signature is also what the dictionary translation produces, which is not a coincidence: passing the dictionary explicitly *is* making the constrained function parametric again.)

</details>

## Flashback

**From Lesson 4.3 (Unification and Hindley-Milner inference):** Robinson's algorithm unifies two types by recursing on structure, binding a variable to a type when the two sides differ, and failing on a structural clash or an occurs-check violation.

Instance resolution for `Eq [[Nat]]` also proceeds by structural recursion, against the instance heads `Eq Nat` and `Eq a => Eq [a]`.

(a) Run the resolution step by step, saying at each step which instance head is matched and what the remaining goal is.
(b) State what plays the role of unification here, and what plays the role of the substitution it produces.
(c) Give a set of instance declarations for which resolution would **not** terminate, and say which of Robinson's two failure modes it does *not* correspond to.

<details>
<summary>Solution</summary>

(a) The goal is $\mathsf{Eq}\ [[\mathsf{Nat}]]$.

| step | goal | matched head | remaining goal |
|---|---|---|---|
| 1 | $\mathsf{Eq}\ [[\mathsf{Nat}]]$ | $\mathsf{Eq}\ [a]$ with $a := [\mathsf{Nat}]$ | $\mathsf{Eq}\ [\mathsf{Nat}]$ |
| 2 | $\mathsf{Eq}\ [\mathsf{Nat}]$ | $\mathsf{Eq}\ [a]$ with $a := \mathsf{Nat}$ | $\mathsf{Eq}\ \mathsf{Nat}$ |
| 3 | $\mathsf{Eq}\ \mathsf{Nat}$ | $\mathsf{Eq}\ \mathsf{Nat}$ (base instance) | none — done |

The dictionary the compiler builds mirrors the derivation exactly: `eqList (eqList eqNat)`, which is P2(d) of this lesson arrived at from the other direction.

(b) **Matching the goal against an instance head is unification** — specifically the one-sided variant usually called *matching*, in which only the head's variables may be bound and the goal is treated as ground. Step 1 unifies $[[\mathsf{Nat}]]$ with $[a]$, which decomposes the list constructor on both sides and binds $a := [\mathsf{Nat}]$ exactly as [Lesson 4.3](04-03-unification-and-hindley-milner.md)'s step 4 would.

**The dictionary expression plays the role of the substitution.** Unification returns a substitution witnessing *why* two types are equal; resolution returns a term witnessing *why* a constraint is satisfied — and in both cases the witness is built compositionally from the recursive calls. That correspondence is not an analogy: instance resolution is proof search in a Horn-clause logic, and the dictionary is the proof term, which is why the same machinery runs Prolog.

(c) *Accept criterion:* any instance set whose resolution generates an infinite chain of strictly larger goals.

```
instance Eq [a] => Eq a
```

Resolving $\mathsf{Eq}\ \mathsf{Nat}$ matches this head with $a := \mathsf{Nat}$, leaving the goal $\mathsf{Eq}\ [\mathsf{Nat}]$; that matches again with $a := [\mathsf{Nat}]$, leaving $\mathsf{Eq}\ [[\mathsf{Nat}]]$, and so on for ever — the goal **grows** at every step instead of shrinking.

**This corresponds to neither of Robinson's failure modes.** It is not a structural clash (nothing ever conflicts) and it is not an occurs-check failure (no variable is ever equated with a type containing it). It is a *third* kind of failure that unification cannot have: **non-termination**.

Robinson's algorithm is guaranteed to terminate, because each step either binds a variable — strictly reducing the number of unbound ones — or decomposes an equation into smaller ones, and both measures are well-founded ([Lesson 4.3](04-03-unification-and-hindley-milner.md)'s Flashback). Instance resolution has no such guarantee, because a conditional instance may produce a context *larger* than the head it discharged.

That is why Haskell imposes the **Paterson conditions** on instance declarations — each constraint in the context must be structurally smaller than the head — which is precisely a syntactic well-foundedness check, reinstating the decreasing measure that unification gets for free. Relaxing them with `UndecidableInstances` is exactly a promise to the compiler that you have checked termination yourself.

</details>

## Connections

- **Backward:** the constraint is the hole in [Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md)'s parametricity, and instance resolution is [Lesson 4.3](04-03-unification-and-hindley-milner.md)'s unification run over instance heads. The dictionary is [Lesson 5.3](05-03-recursive-types-existentials-and-modules.md)'s operations record with the type exposed rather than hidden.
- **Forward:** [Lesson 5.5](05-05-effects-monads-and-the-categorical-view.md) is a type class — `Monad` — and the do-notation it enables is unreadable without this elaboration in mind. [Lesson 5.6](05-06-ownership-linearity-and-borrow-checking.md)'s marker traits (`Copy`, `Send`, `Sync`) are constraints carrying no operations at all, used purely to record a property.
- **Sideways:** dictionary passing is a compile-time resolution that produces ordinary code, which is the same shape as the monomorphization decisions of [Lesson 7.6](07-06-code-generation-and-the-back-end.md) — resolve statically and specialize, or pass a pointer and dispatch. The trade between them is code size against indirection, and it recurs throughout compilation.
