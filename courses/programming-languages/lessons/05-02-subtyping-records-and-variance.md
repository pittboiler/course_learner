# Programming Languages · Lesson 5.2: Subtyping, records and variance

> ⏱ ~15 min · Module 5: Type-system design choices · Builds on: [4.5 (type soundness)](04-05-type-soundness-progress-and-preservation.md), [5.1 (algebraic data types)](05-01-algebraic-data-types-and-pattern-matching.md) · Unlocks: [5.3 (existentials and modules)](05-03-recursive-types-existentials-and-modules.md), [5.4 (type classes)](05-04-type-classes-and-ad-hoc-polymorphism.md)

## Why this matters

Subtyping is the feature that makes object-oriented programming type-check, and it is the feature most often got wrong. The rule for when `Cat[] <: Animal[]` is not a matter of taste — it is forced by the soundness argument of [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md), and Java got it wrong on purpose, knowingly, and pays for it with a runtime check in every array store your programs execute.

This lesson gives you the rule that decides every such question, in a form you can apply in any language: **covariant where values come out, contravariant where they go in, invariant where both.** Once you have it, the answers to "why is `List<Cat>` not a `List<Animal>` in Java?", "why does Rust's `&mut T` behave differently from `&T`?" and "why does adding a parameter to an overridden method fail?" are all the same answer.

## The idea

$S <: T$ means "an $S$ may be used wherever a $T$ is expected". The rule licensing it is **subsumption**:

$$\frac{\Gamma \vdash e : S \qquad S <: T}{\Gamma \vdash e : T}\;(\mathsf{T\text{-}Sub})$$

which is the first typing rule in this course that is *not* syntax-directed — it applies to any term, so a checker must decide when to use it, which is exactly what [Lesson 4.2](04-02-type-checking-and-curry-howard.md)'s bidirectional discipline is for.

Now the question that generates all the difficulty: if $S <: T$, what is the relationship between $F(S)$ and $F(T)$ for a type former $F$? Three answers:

- **Covariant** — $F(S) <: F(T)$. Correct when $F$ only ever *produces* values of the parameter type.
- **Contravariant** — $F(T) <: F(S)$, reversed. Correct when $F$ only ever *consumes* them.
- **Invariant** — neither. Forced when $F$ both produces and consumes.

The reasoning is always the same substitution test: **if I hand an $F(S)$ to code expecting an $F(T)$, what can that code do, and is every such action safe?**

## The formal version

**Record subtyping.** Two independent rules.

$$\frac{}{\{\ell_1{:}\tau_1, \ldots, \ell_n{:}\tau_n, \ell{:}\tau\} \;<:\; \{\ell_1{:}\tau_1,\ldots,\ell_n{:}\tau_n\}}\;(\mathsf{Width})$$

$$\frac{\tau_i <: \sigma_i \ \text{for each } i}{\{\ell_1{:}\tau_1,\ldots,\ell_n{:}\tau_n\} \;<:\; \{\ell_1{:}\sigma_1,\ldots,\ell_n{:}\sigma_n\}}\;(\mathsf{Depth})$$

Width: **more fields is a subtype** — a record with extra fields can stand in wherever fewer are needed, because every field the client asks for is present. (It reads backwards the first time; the *smaller* type has the *larger* set of values.) Depth: fields may be replaced by subtypes, **provided the record is immutable** — see the Watch out.

**The function rule.** *(card: [variance](../reference.md#variance))* The one to memorize:

$$\frac{T_1 <: S_1 \qquad S_2 <: T_2}{S_1 \to S_2 \;<:\; T_1 \to T_2}\;(\mathsf{Arrow})$$

**Contravariant in the argument, covariant in the result.** The argument condition is reversed, and here is why. Client code holding a $T_1 \to T_2$ will call it with any $T_1$. For your $S_1 \to S_2$ to survive that, it must accept every $T_1$ — so it must accept *at least as much*, i.e. $T_1 <: S_1$. And whatever it returns will be used as a $T_2$, so it must return *at most as much*, i.e. $S_2 <: T_2$.

The slogan: **be liberal in what you accept, conservative in what you produce**, and subtyping makes that a typing rule.

**Mutable cells must be invariant.** Let $\mathsf{Ref}\ \tau$ have $\mathsf{get} : \mathsf{Ref}\ \tau \to \tau$ (producing) and $\mathsf{set} : \mathsf{Ref}\ \tau \to \tau \to \mathsf{Unit}$ (consuming). The parameter appears in both positions, so covariance breaks `set` and contravariance breaks `get`. **Neither direction is safe**, so $\mathsf{Ref}$ is invariant. This is the complete explanation of Java's generics, Rust's `&mut T` and C#'s `where T : ...` restrictions.

**Java's arrays are covariant, and it is unsound.** Java declares `S[] <: T[]` whenever `S <: T`, despite arrays being mutable. The consequence is a genuine **failure of preservation** in the sense of [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md): the static type says a store is fine and the store would corrupt the heap. Java restores safety with a **run-time check on every array store**, throwing `ArrayStoreException`. So the language is sound overall, at the price of a check on an operation the type system was supposed to have proved safe.

Why it was done: Java 1.0 had no generics, and without array covariance you could not write a method taking `Object[]` and have it work on a `String[]`. It was a deliberate trade of soundness for expressiveness in the absence of polymorphism, and when generics arrived in Java 5 they were made **invariant** — the designers did not repeat it.

## Picture

![Given Cat is a subtype of Animal, three rows. Producer of Cat is a subtype of Producer of Animal, marked COVARIANT, because the parameter is in output position. Consumer of Animal is a subtype of Consumer of Cat, marked CONTRAVARIANT, because the parameter is in input position. List of Cat versus List of Animal is marked INVARIANT, because the parameter is read and written. Below a dashed rule, the function rule is given: S1 arrow S2 is a subtype of T1 arrow T2 if and only if T1 is a subtype of S1 and S2 is a subtype of T2, annotated contravariant in the argument and covariant in the result. A closing line notes that a mutable cell is both a producer and a consumer, so it must be invariant.](assets/05-02-fig1.svg)

The three rows are one rule applied three times, and the function rule at the bottom is the general case — it contains both variances because a function both consumes and produces, in different positions. **Reading a type former's variance off its operations' signatures is the entire technique**: find where the parameter appears, and if it appears on both sides, you are invariant.

## Worked examples

**Example 1 (mechanical): decide six subtyping questions.** Assume $\mathsf{Cat} <: \mathsf{Animal}$.

| question | answer | rule |
|---|---|---|
| $\{n{:}\mathsf{String}, a{:}\mathsf{Nat}\} <: \{n{:}\mathsf{String}\}$ | **yes** | width — extra field is fine |
| $\{n{:}\mathsf{String}\} <: \{n{:}\mathsf{String}, a{:}\mathsf{Nat}\}$ | **no** | the client would read a missing $a$ |
| $\{p{:}\mathsf{Cat}\} <: \{p{:}\mathsf{Animal}\}$ | **yes**, if immutable | depth |
| $\mathsf{Animal}\to\mathsf{Cat} \;<:\; \mathsf{Cat}\to\mathsf{Animal}$ | **yes** | arrow: $\mathsf{Cat} <: \mathsf{Animal}$ (argument, contravariant) and $\mathsf{Cat} <: \mathsf{Animal}$ (result, covariant) |
| $\mathsf{Cat}\to\mathsf{Animal} \;<:\; \mathsf{Animal}\to\mathsf{Cat}$ | **no** | the argument condition would need $\mathsf{Animal} <: \mathsf{Cat}$ |
| $\mathsf{Ref}\ \mathsf{Cat} <: \mathsf{Ref}\ \mathsf{Animal}$ | **no** | invariant — `set` would accept a `Dog` |

Row four is the one to internalize. A function that accepts *any* animal and is guaranteed to return a *cat* is safely usable wherever a function accepting only cats and returning some animal is wanted — it is better in both positions, and "better" means *wider* input and *narrower* output.

**Example 2 (why you'd care): the four lines that break Java.**

```java
String[] strings = new String[1];
Object[] objects = strings;          // legal: String[] <: Object[]
objects[0] = Integer.valueOf(42);    // compiles fine
String s = strings[0];          // reads an Integer as a String
```

Every line type-checks. Line 2 uses array covariance. Line 3 stores an `Integer` into something statically typed `Object[]`, which the type rules permit. Line 4 reads through the original alias, whose static type says `String`.

Without intervention, line 4 hands you a `String` reference pointing at an `Integer` — heap corruption, and a program that has "gone wrong" in exactly [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md)'s sense.

**Java's fix is a run-time check.** Line 3 throws `java.lang.ArrayStoreException` — the JVM checks, on *every* array store to a reference array, that the value's dynamic type is compatible with the array's actual element type. Line 4 is never reached.

Locate the break precisely. **Preservation fails**: the store is well-typed by the static rules and would produce a heap in which `strings[0] : String` is false. Progress is fine — the program can always step. So the diagnostic of [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md) tells you exactly what kind of repair is needed: a runtime check that re-establishes the invariant the static rule failed to guarantee.

**Generics got it right.** `List<String>` is **not** a subtype of `List<Object>` in Java, precisely because `List` is mutable and therefore invariant. When you want the flexibility you ask for it explicitly, at the use site:

- `List<? extends Animal>` — covariant, and **you may not add to it** (the compiler rejects `add`, since it does not know the real element type).
- `List<? super Cat>` — contravariant, and **you may not read a `Cat` out of it** (only `Object`).

That is the variance rule enforced rather than assumed, and the mnemonic is PECS — *Producer Extends, Consumer Super*, which is the Picture's first two rows with Java's spelling.

## Watch out

- **You might think** depth subtyping on records is always safe — **but actually** it requires immutability, for exactly the array reason. If $\{p{:}\mathsf{Cat}\} <: \{p{:}\mathsf{Animal}\}$ and the field is mutable, a client holding the supertype writes a `Dog` into $p$ and the original alias now reads a `Dog` as a `Cat`. Mutable fields must be invariant.
- **You might think** width subtyping is backwards because the subtype has *more* fields — **but actually** that is right, and the set-theoretic reading is the check: $\{n, a\}$ has *fewer values* than $\{n\}$ (each must supply both fields), and subtyping tracks subsets of values, not subsets of field names.
- **You might think** Java's array covariance is a historical bug nobody would repeat — **but actually** it was deliberate, made for a real reason (no generics in 1.0), and Java still pays for it in every array store. The lesson is not "the designers erred" but that **unsound typing rules do not disappear; they turn into run-time checks**, and you keep paying.

## One-liner

> Covariant where values come out, contravariant where they go in, invariant where both — and a mutable container is always both, which is why covariant arrays cost Java a check on every store.

## Problems

**P1 (🟢)** With $\mathsf{Cat} <: \mathsf{Animal}$, decide each and name the rule.

(a) $\{\mathit{name}{:}\mathsf{String}, \mathit{pet}{:}\mathsf{Cat}\} <: \{\mathit{name}{:}\mathsf{String}\}$
(b) $\mathsf{Animal}\to\mathsf{Animal} \;<:\; \mathsf{Cat}\to\mathsf{Animal}$
(c) $\mathsf{Cat}\to\mathsf{Cat} \;<:\; \mathsf{Cat}\to\mathsf{Animal}$
(d) $\mathsf{Cat}\to\mathsf{Cat} \;<:\; \mathsf{Animal}\to\mathsf{Animal}$

**P2 (🟡)** For each interface, state the correct variance of the parameter $\alpha$ and give the reason from the signatures.

(a) `interface Supplier<a> { a get(); }`
(b) `interface Consumer<a> { void accept(a x); }`
(c) `interface Box<a> { a get(); void set(a x); }`
(d) `interface Comparator<a> { int compare(a x, a y); }`

**P3 (🔴)** A language adds covariant mutable generics: `List<S> <: List<T>` whenever `S <: T`, with `List` supporting both `get` and `add`.

(a) Write four lines exhibiting the unsoundness, in the style of Example 2.
(b) State which of progress and preservation fails, and at which line.
(c) Give two repairs that restore safety without removing covariance from the language entirely, and name a language taking each.
(d) One repair catches the problem at compile time and one at run time. State which is which, and give one concrete advantage of the run-time approach — it is not "simplicity".

<details>
<summary>Solutions</summary>

**P1**

(a) **Yes**, by **width subtyping**. The left record has every field the right one requires ($\mathit{name} : \mathsf{String}$) plus an extra, and any client of the right type asks only for $\mathit{name}$.

(b) **Yes**, by the **arrow rule**. Argument (contravariant): need $\mathsf{Cat} <: \mathsf{Animal}$ ✓. Result (covariant): need $\mathsf{Animal} <: \mathsf{Animal}$ ✓. A function accepting any animal is safely usable where one accepting only cats is expected.

(c) **Yes**, by the **arrow rule**. Argument: $\mathsf{Cat} <: \mathsf{Cat}$ ✓. Result: $\mathsf{Cat} <: \mathsf{Animal}$ ✓. Returning something more specific than promised is always safe.

(d) **No.** The arrow rule requires, for the argument position, $\mathsf{Animal} <: \mathsf{Cat}$ — which is false. A function that only accepts cats cannot stand in where any animal might be passed; a client would hand it a dog.

(This is the case people get wrong most often, because the naive "subtype everywhere" reading suggests yes. The result position is fine; the argument position is what fails.)

**P2**

(a) **Covariant.** $\alpha$ appears only as a **return** type — the interface only produces. So `Supplier<Cat> <: Supplier<Animal>`: anything expecting a supplier of animals is happy to receive a supplier of cats, since every cat produced is an animal.

(b) **Contravariant.** $\alpha$ appears only as a **parameter** — the interface only consumes. So `Consumer<Animal> <: Consumer<Cat>`: anything expecting something that consumes cats is happy to receive something that consumes any animal.

(c) **Invariant.** $\alpha$ appears in **both** positions — as `get`'s return type and as `set`'s parameter. Covariance would break `set` (a `Box<Cat>` used as a `Box<Animal>` would accept a `Dog`); contravariance would break `get` (a `Box<Animal>` used as a `Box<Cat>` would return a `Dog` where a `Cat` was expected). Neither direction is safe.

(d) **Contravariant.** Despite appearances, $\alpha$ appears only in **parameter** positions — `compare` takes two $\alpha$s and returns an `int`, which does not mention $\alpha$. So `Comparator<Animal> <: Comparator<Cat>`: a comparator that can order any two animals can certainly order two cats.

This is the row worth checking carefully, because "it takes two of them and returns a number" looks symmetric. The rule does not care how many times the parameter appears or what the return type is — only *which side of the arrow* each occurrence sits on. (Java's `Collections.sort` signature takes `Comparator<? super T>` for exactly this reason.)

**P3**

(a) *Accept criterion:* any four-line sequence where each line type-checks under the stated rule and the last reads a value at the wrong type.

```
List<Cat> cats = new List<Cat>();
List<Animal> animals = cats;        // legal: covariance
animals.add(new Dog());             // compiles: Dog <: Animal
Cat c = cats.get(0);                // reads a Dog as a Cat
```

(b) **Preservation fails, at line 3.** The `add` is well-typed by the static rules (the receiver's static type is `List<Animal>` and `Dog <: Animal`), and executing it produces a heap state in which the claim `cats : List<Cat>` is false — a value has arrived at a type its static type excluded.

Progress holds throughout: every line can execute. The program never gets *stuck*; it computes a wrong answer, or crashes later at a cast. That is the signature of a preservation failure, and it is why preservation is the more dangerous of the two to lose.

(c) *Two repairs, each with a language:*

1. **Use-site variance (wildcards).** Keep `List` invariant, and let a *use* opt into covariance with a marker that removes the unsafe operations: `List<? extends Animal>` permits `get` and forbids `add`. The unsoundness is prevented because line 3 no longer compiles. **Java** (`? extends` / `? super`), and **Scala** also supports this form.

2. **Declaration-site variance.** Let the type's *author* annotate the parameter's variance, and have the compiler check that the annotation matches how the parameter is used — a covariant parameter may not appear in an input position. An author writing `class List[+A]` with an `add(x: A)` method is rejected at the declaration. **Scala** (`+A` / `-A`), **Kotlin** (`out` / `in`), **C#** (`out` / `in` on interfaces).

(A third, less satisfying repair: keep covariance and insert a store check as Java does for arrays. That is the run-time option in part (d).)

(d) **Both repairs in (c) are compile-time**; the run-time approach is the Java-array one — permit the covariance and check on every store, throwing on mismatch.

A concrete advantage of the run-time approach: **it requires no annotations and no changes to existing code, so it can be added to a language that already exists.** Every collection type becomes usable covariantly immediately, with no need for library authors to revisit their declarations or for callers to write wildcards. That is precisely why Java took it in 1.0 — array covariance was available on day one, whereas a use-site or declaration-site scheme demands that every generic type in the ecosystem be annotated or every call site be adjusted.

The second advantage, more subtle: a run-time check is **complete** where the static schemes are conservative. `List<? extends Animal>` forbids `add` on *every* such list, including the many cases where the added element really would have been a `Cat`. The check rejects only the stores that are genuinely wrong. Paying per-store for precision is a real trade, not merely a failure of nerve — it is the same sound-versus-complete choice as [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md) P3's `head`, decided the other way.

</details>

## Flashback

**From Lesson 4.4 (Polymorphism, System F and parametricity):** Hindley–Milner has **principal types** — every typable term has a single most general type, of which all its other types are instances.

Subtyping adds the rule $\mathsf{T\text{-}Sub}$, which lets any term have any supertype of its type.

(a) State whether principal types survive the addition, and give a term illustrating your answer.
(b) Say what the analogous notion is in a system with subtyping, and name the practical consequence for type inference.

<details>
<summary>Solution</summary>

(a) **Principal types in the HM sense do not survive**, because the set of a term's types is no longer generated by substitution alone.

Take a record term $r = \{n{:}\text{"a"},\ a{:}\overline{3}\}$. Its types include $\{n{:}\mathsf{String}, a{:}\mathsf{Nat}\}$, and by width subtyping also $\{n{:}\mathsf{String}\}$, $\{a{:}\mathsf{Nat}\}$ and $\{\}$. None of the smaller ones is a *substitution instance* of the largest — no assignment of types to type variables turns $\{n{:}\mathsf{String}, a{:}\mathsf{Nat}\}$ into $\{n{:}\mathsf{String}\}$, because dropping a field is not substitution.

So the HM theorem, "every type of $e$ is $S\tau$ for a single $\tau$ and some substitution $S$", is false here.

(b) The replacement notion is a **minimal** (or *principal*) type with respect to the subtyping order: a type $\tau$ such that $\vdash e : \tau$ and $\tau <: \tau'$ for every other $\tau'$ the term has. In the example above, $\{n{:}\mathsf{String}, a{:}\mathsf{Nat}\}$ is minimal — it is a subtype of all the others.

Systems with only width and depth subtyping on records do have minimal types, and inference remains tractable. The trouble arrives when subtyping is combined with polymorphism: inference then produces not a substitution but a set of **subtyping constraints** ($\alpha <: \mathsf{Animal}$, $\mathsf{Cat} <: \beta$, …), and the inferred type must carry those constraints with it. The practical consequences are the ones you see in real languages:

- The algorithm is *constraint solving over an ordering*, not unification, and it is substantially more expensive.
- Inferred types become large and unreadable unless aggressively simplified, which is a research problem in its own right.
- Complete inference is undecidable for the full combination, so every real language restricts something.

Which is why **languages with subtyping require far more annotations than ML-family languages**: Java and C# demand types on every field, parameter and return; Scala and TypeScript infer locally but require annotations at module boundaries. The annotation burden is not conservatism — it is the price of $\mathsf{T\text{-}Sub}$ not being syntax-directed, and it is the same bargain as [Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md)'s: an expressiveness feature paid for by the inference algorithm.

</details>

## Connections

- **Backward:** the preservation failure in Example 2 is exactly the diagnostic of [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md), and $\mathsf{T\text{-}Sub}$ being non-syntax-directed is what makes [Lesson 4.2](04-02-type-checking-and-curry-howard.md)'s bidirectional discipline necessary rather than merely convenient. Records are the products of [Lesson 5.1](05-01-algebraic-data-types-and-pattern-matching.md).
- **Forward:** [Lesson 5.3](05-03-recursive-types-existentials-and-modules.md) is the other way to get abstraction — hiding a type rather than ordering types — and [Lesson 5.4](05-04-type-classes-and-ad-hoc-polymorphism.md) is a third, which keeps inference by constraining polymorphism rather than ordering types. The `&T` versus `&mut T` distinction of [Lesson 5.6](05-06-ownership-linearity-and-borrow-checking.md) is this lesson's producer/consumer split enforced at the language level.
- **Sideways:** the subtyping order is a poset, and a poset is a category with at most one arrow between objects — the view [`category-theory` 1.2](../../category-theory/lessons/01-02-categories-everywhere.md) takes, where variance is functoriality and a contravariant type former is a functor on the opposite category.
