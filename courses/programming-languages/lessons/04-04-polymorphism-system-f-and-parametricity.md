# Programming Languages · Lesson 4.4: Polymorphism, System F and parametricity

> ⏱ ~15 min · Module 4: Type systems · Builds on: [4.3 (unification and Hindley–Milner)](04-03-unification-and-hindley-milner.md), [4.2 (Curry–Howard)](04-02-type-checking-and-curry-howard.md) · Unlocks: [4.5 (type soundness)](04-05-type-soundness-progress-and-preservation.md), [5.3 (existentials and modules)](05-03-recursive-types-existentials-and-modules.md)

## Why this matters

[Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md)'s Flashback left a concrete annoyance: the Church booleans at type $\mathsf{Nat}$ and at type $\mathsf{Bool}$ are *different terms*, identical character for character, because the type system has no way to say "for any $\tau$". You must write the identity function once per type it is used at.

Polymorphism fixes this, and the fix has three parts worth separating. There is the **feature** (quantify over types), the **design decision** about where quantifiers may appear — which turns out to decide whether inference is possible at all — and a **theorem** that is one of the most useful things a type ever tells you: from a polymorphic type alone, with no access to the code, you can deduce what the function must do.

Along the way, a fact that quietly contradicts [Lesson 1.2](01-02-concrete-and-abstract-syntax.md): `let` is **not** sugar for an application, and the reason is in this lesson.

## The idea

Write $\forall \alpha.\ \tau$ for "for every type $\alpha$, a $\tau$". The identity is

$$\mathsf{id} \;:\; \forall \alpha.\ \alpha \to \alpha$$

and it can be **instantiated** at any type: $\mathsf{id}\ [\mathsf{Nat}] : \mathsf{Nat}\to\mathsf{Nat}$, $\mathsf{id}\ [\mathsf{Bool}] : \mathsf{Bool}\to\mathsf{Bool}$. One term, many types.

The design question is **where the $\forall$ may stand**.

- **Prenex (rank-1):** quantifiers only at the very outside. $\forall\alpha.\ \alpha\to\alpha$ is legal; $(\forall\alpha.\,\alpha\to\alpha)\to\mathsf{Nat}$ is not, because a $\forall$ sits inside an arrow's domain. This is Hindley–Milner's restriction.
- **First-class (System F):** quantifiers anywhere, so a function may *require* a polymorphic argument.

The restriction looks arbitrary and is not. **Prenex is exactly the boundary of decidable inference.** Allow one $\forall$ to the left of an arrow and type inference becomes undecidable. Every ML-family language sits at that boundary on purpose, and lets you cross it by writing the type yourself.

## The formal version

**Type schemes.** $\sigma ::= \tau \mid \forall\alpha.\,\sigma$. A **type** $\tau$ has no quantifiers; a **scheme** has them only at the front. HM's contexts map variables to schemes, and only `let`-bound variables ever get one.

**Generalization and instantiation.**

$$\frac{\Gamma \vdash e : \tau \qquad \alpha \notin \mathrm{ftv}(\Gamma)}{\Gamma \vdash e : \forall\alpha.\,\tau}\;(\mathsf{Gen}) \qquad\qquad \frac{\Gamma \vdash e : \forall\alpha.\,\tau}{\Gamma \vdash e : [\alpha := \tau']\,\tau}\;(\mathsf{Inst})$$

The side condition on $\mathsf{Gen}$ is essential: you may generalize a variable only if it is **not free in the context**. A variable appearing in $\Gamma$ is constrained by something outside, so quantifying it would be a lie.

**The `let` rule.** This is where HM gets its polymorphism:

$$\frac{\Gamma \vdash e_1 : \tau_1 \qquad \Gamma,\ x : \mathrm{gen}(\Gamma, \tau_1) \vdash e_2 : \tau_2}{\Gamma \vdash \mathsf{let}\ x = e_1\ \mathsf{in}\ e_2 \;:\; \tau_2}\;(\mathsf{T\text{-}Let})$$

where $\mathrm{gen}(\Gamma,\tau)$ quantifies every variable of $\tau$ not free in $\Gamma$. **A $\lambda$-bound variable is never generalized; a `let`-bound one is.** That asymmetry is the whole of let-polymorphism, and it has a consequence worth stating loudly.

**`let` is not sugar for an application.** [Lesson 1.2](01-02-concrete-and-abstract-syntax.md) desugared $\mathsf{let}\ x = e_1\ \mathsf{in}\ e_2$ to $(\lambda x.\,e_2)\,e_1$. Those two terms have identical *dynamic* behaviour — they $\beta$-reduce identically — and **different typability**:

| term | inferred type |
|---|---|
| $\mathsf{let}\ \mathsf{id} = \lambda x.\,x\ \mathsf{in}\ \mathsf{id}\ \mathsf{id}$ | $a \to a$ |
| $(\lambda \mathsf{id}.\ \mathsf{id}\ \mathsf{id})\ (\lambda x.\,x)$ | **rejected: occurs check** |

The first generalizes $\mathsf{id}$ to $\forall\alpha.\,\alpha\to\alpha$ and instantiates it twice, at $(\beta\to\beta)\to(\beta\to\beta)$ and at $\beta\to\beta$. The second gives the $\lambda$-bound $\mathsf{id}$ a single monotype $t_0$, and the self-application forces $t_0 = t_0 \to t_1$, which the occurs check rejects ([Lesson 4.3](04-03-unification-and-hindley-milner.md)).

**So a typed language cannot desugar `let` away before type checking.** Real compilers desugar it *after*, or keep it as a core construct. This is the clearest case in the course of a typing rule constraining the compiler's phase order.

**System F.** Make polymorphism explicit with type abstraction $\Lambda\alpha.\,e$ and type application $e\,[\tau]$:

$$\frac{\Gamma, \alpha \vdash e : \tau}{\Gamma \vdash \Lambda\alpha.\,e : \forall\alpha.\,\tau} \qquad\qquad \frac{\Gamma \vdash e : \forall\alpha.\,\tau}{\Gamma \vdash e\,[\tau'] : [\alpha := \tau']\,\tau}$$

The identity becomes $\Lambda\alpha.\,\lambda x{:}\alpha.\ x$. System F is strictly more expressive than HM — it types $\lambda x.\,x\,x$ given the annotation $x : \forall\alpha.\,\alpha\to\alpha$ — and

**Theorem (Wells, 1994).** Type inference for System F is **undecidable**.

So the choice is forced: annotation-free inference, or first-class polymorphism. Not both. Haskell's `RankNTypes` and Scala's and Rust's higher-rank features are the practical compromise — allow the types, require the annotation.

**Parametricity.** A polymorphic function cannot inspect the type it is instantiated at, so it must behave **uniformly**. Formalized by Reynolds and popularized by Wadler as "theorems for free", this yields real theorems from types alone:

| type | what the function must be |
|---|---|
| $\forall\alpha.\ \alpha \to \alpha$ | the identity, and nothing else |
| $\forall\alpha.\ \alpha \to \alpha \to \alpha$ | one of exactly two functions (first or second) |
| $\forall\alpha.\ [\alpha] \to [\alpha]$ | a permutation-and-selection of the input; it can never invent an element |
| $\forall\alpha\beta.\ (\alpha\to\beta) \to [\alpha] \to [\beta]$ | satisfies $\mathsf{map}\,f \circ g = g \circ \mathsf{map}\,f$ for the corresponding $g$ |

**The free theorem for lists.** If $r : \forall\alpha.\,[\alpha]\to[\alpha]$, then for every function $f$,

$$\mathsf{map}\ f \;\circ\; r \;=\; r \;\circ\; \mathsf{map}\ f$$

Proved with no knowledge of $r$'s code. It applies to `reverse`, `tail`, `sort`-by-nothing, `take 3`, and anything else you could write at that type, because none of them can look at the elements.

## Picture

![Two panels. The upper one, labelled Hindley-Milner prenex only, shows forall a dot a arrow a marked legal with inference decidable, and open paren forall a dot a arrow a close paren arrow Nat marked not a HM type. The lower panel, labelled System F with quantifiers anywhere, shows the same two types, the first marked legal and the second marked legal at rank 2 but with inference undecidable. A footer states the bargain: HM gives up expressiveness to keep principal types and annotation-free inference, and real languages let you opt back in by writing the type.](assets/04-04-fig1.svg)

The only difference between the panels is whether a $\forall$ may sit to the left of an arrow, and that one syntactic restriction is the difference between decidable and undecidable inference. It is worth internalizing as the sharpest example in the course of a type-system feature whose cost is paid by the *algorithm* rather than by the runtime.

## Worked examples

**Example 1 (mechanical): generalize, and check the side condition.** Infer types in

```
let pair = \x -> \y -> \s -> s x y in ...
```

Inference gives $\mathsf{pair} : t_0 \to t_1 \to (t_0 \to t_1 \to t_2) \to t_2$. None of $t_0, t_1, t_2$ is free in the (empty) context, so all three generalize:

$$\mathsf{pair} : \forall \alpha\beta\gamma.\ \alpha \to \beta \to (\alpha\to\beta\to\gamma) \to \gamma$$

Now contrast with a case where the side condition bites:

```
\z -> let f = \y -> z in (f 1, f True)
```

Inferring the inner `let`, $f$ gets type $t_1 \to t_0$ where $z : t_0$. **$t_0$ is free in the context** (it is $z$'s type), so $\mathrm{gen}$ quantifies only $t_1$:

$$f : \forall\beta.\ \beta \to t_0$$

That is enough — $f$ is applied to a number and to a boolean, and $\beta$ instantiates twice — but $t_0$ stays fixed, correctly, because both calls return *the same* $z$. Generalizing $t_0$ would claim $f$ could return a value of any type, which is false. **The side condition is not bookkeeping; it is what keeps generalization honest.**

**Example 2 (why you'd care): reading a function off its type.** Suppose a colleague hands you

```
mystery :: forall a. a -> a
```

and no source. What can it do?

It is handed a value of a type it knows nothing about. It cannot inspect it (no operations exist at an abstract type), cannot construct one (no constructors), cannot find one elsewhere (the type is quantified, so no global of that type can exist). Its only material is the argument. So it must return the argument, and

$$\mathsf{mystery} = \mathsf{id}$$

is the only possibility — **proved from the type, with the code unavailable.** (In a language with divergence or exceptions the statement weakens to "it is the identity or it does not return", which is exactly the $\mathsf{fix}$ caveat from [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md).)

Now a working example. A colleague's

```
dedupe :: forall a. [a] -> [a]
```

has a bug: it sometimes returns elements that were not in the input. **That bug is impossible**, and you know it without reading the code — parametricity says $r$ cannot invent an $\alpha$. So the report is wrong, or the real signature has an `Eq a` constraint (which supplies an operation on $\alpha$ and voids the argument — see [Lesson 5.4](05-04-type-classes-and-ad-hoc-polymorphism.md)), or the implementation uses `unsafeCoerce`. **Narrowing three possibilities from a type signature is the everyday payoff of parametricity**, and it is why "make the type more polymorphic" is a real debugging technique: it shrinks the space of things the code can be doing.

## Watch out

- **You might think** `let x = e1 in e2` and $(\lambda x.\,e_2)\,e_1$ are interchangeable because they reduce identically — **but actually** they differ in typability, and the table above is the counterexample. A typed compiler must type-check before that desugaring, which is a real constraint on phase order.
- **You might think** HM's prenex restriction is a simplification that a better algorithm could lift — **but actually** Wells' theorem says inference for System F is undecidable, so no algorithm can. Higher-rank polymorphism in Haskell, Scala and Rust is always accompanied by a requirement that you write the type.
- **You might think** parametricity is a heuristic about well-behaved code — **but actually** it is a theorem, with the caveat that it holds in a language without type-case, reflection, or unsafe casts. Java's erased generics mostly satisfy it; a language where you can ask "what type is this really?" does not, and that is precisely what reflection costs you.

## One-liner

> Quantify over types and one term serves every instantiation — but only if the quantifiers stay at the outside, because one $\forall$ to the left of an arrow costs you decidable inference, and the reward for the restriction is that a type alone can tell you what a function must do.

## Problems

**P1 (🟢)** For each, state whether it is a legal Hindley–Milner type scheme, and why.

(a) $\forall\alpha.\ \alpha \to \alpha$
(b) $\forall\alpha.\ [\alpha] \to \mathsf{Nat}$
(c) $(\forall\alpha.\ \alpha\to\alpha) \to \mathsf{Nat} \to \mathsf{Nat}$
(d) $\forall\alpha.\ \alpha \to (\forall\beta.\ \beta \to \beta) \to \alpha$

**P2 (🟡)** Using parametricity, say how many closed functions of each type there are (up to extensional equality), and name them.

(a) $\forall\alpha.\ \alpha \to \alpha$
(b) $\forall\alpha\beta.\ \alpha \to \beta \to \alpha$
(c) $\forall\alpha.\ \alpha \to \alpha \to \alpha$
(d) $\forall\alpha.\ [\alpha] \to \mathsf{Nat}$ — describe the family rather than counting.

**P3 (🔴)** Consider the two terms

$$A = \mathsf{let}\ f = \lambda x.\,x\ \mathsf{in}\ (f\ \overline{3},\ f\ \mathsf{true}) \qquad\qquad B = (\lambda f.\ (f\ \overline{3},\ f\ \mathsf{true}))\ (\lambda x.\,x)$$

(a) State the type HM infers for $A$, showing what $f$ generalizes to and both instantiations.
(b) State what HM does with $B$, naming the rule that is unavailable and the unification failure that results.
(c) $A$ and $B$ $\beta$-reduce to the same normal form. Say what this shows about the relationship between typability and dynamic behaviour.
(d) $B$ **is** typable in System F, given an annotation. Write the annotation, and state what it costs the compiler — naming the theorem.

<details>
<summary>Solutions</summary>

**P1**

(a) **Legal.** One quantifier, at the outside, over a quantifier-free type.

(b) **Legal.** Same shape; the body $[\alpha]\to\mathsf{Nat}$ contains no quantifier.

(c) **Not legal.** The $\forall\alpha$ sits inside the *domain* of the outer arrow, so this is a rank-2 type. HM requires all quantifiers at the very front, with a quantifier-free body. (This is a perfectly good System F type, and a Haskell one with `RankNTypes` — but then the annotation is mandatory.)

(d) **Not legal.** The outer $\forall\alpha$ is fine, but the body contains $\forall\beta$ to the left of an arrow, so again it is rank-2. Note the position matters, not the count: $\forall\alpha.\forall\beta.\ \alpha\to\beta\to\alpha$ has two quantifiers and *is* legal, because both are at the front.

**P2**

(a) **Exactly one:** the identity $\lambda x.\,x$. The function has a value of an unknown type and no way to inspect, construct, or obtain another, so the argument is its only possible result.

(b) **Exactly one:** $\lambda x.\lambda y.\ x$, the $K$ combinator. The result type is $\alpha$, and the only $\alpha$ available is the first argument; the $\beta$ cannot be converted to an $\alpha$.

(c) **Exactly two:** $\lambda x.\lambda y.\,x$ and $\lambda x.\lambda y.\,y$. Both arguments have type $\alpha$ and the result must be an $\alpha$, so the function must return one of them — and having no way to compare or inspect values of an abstract type, it cannot choose based on them. It must make the same choice every time.

These are exactly $\mathsf{tru}$ and $\mathsf{fls}$ of [Lesson 3.2](03-02-church-encodings-and-beta-reduction.md), and parametricity says the Church booleans are the *only* inhabitants of their type — which is why the encoding is not merely a clever trick but the canonical representation.

(d) The family is: **functions that depend only on the length of the list, not on its elements.** Since $\alpha$ is abstract, no element can be inspected or compared, so the only information available about the input is its shape — its length. Therefore every such function factors as $h \circ \mathsf{length}$ for some $h : \mathsf{Nat}\to\mathsf{Nat}$, and there is one for each such $h$ (infinitely many: `length`, `const 0`, `\xs -> 2 * length xs`, and so on).

**P3**

(a) Inferring $\lambda x.\,x$ gives $t_0 \to t_0$. The context is empty, so $t_0$ is not free in it and $\mathrm{gen}$ quantifies it:

$$f : \forall\alpha.\ \alpha \to \alpha$$

The body then instantiates $f$ twice, independently:

- $f\ \overline{3}$: instantiate $\alpha := \mathsf{Nat}$, giving $f : \mathsf{Nat}\to\mathsf{Nat}$ and a result of type $\mathsf{Nat}$.
- $f\ \mathsf{true}$: instantiate $\alpha := \mathsf{Bool}$, giving $f : \mathsf{Bool}\to\mathsf{Bool}$ and a result of type $\mathsf{Bool}$.

So $A : \mathsf{Nat} \times \mathsf{Bool}$.

(b) **HM rejects $B$.** The rule unavailable is $\mathsf{T\text{-}Let}$ and its $\mathrm{gen}$ step: $f$ here is $\lambda$-bound, not `let`-bound, and HM never generalizes a $\lambda$-bound variable. So $f$ carries a single monotype $t_0$ throughout the body.

The two uses then generate conflicting constraints. From $f\ \overline{3}$: $t_0 = \mathsf{Nat} \to t_1$. From $f\ \mathsf{true}$: $t_0 = \mathsf{Bool} \to t_2$. Unifying the two right-hand sides decomposes to unifying the domains, $\mathsf{Nat}$ against $\mathsf{Bool}$ — a **structural clash between two different base types** ([Lesson 4.3](04-03-unification-and-hindley-milner.md) step 3). Inference fails.

(c) It shows that **typability is a property of the term's syntax, not of its behaviour.** $A$ and $B$ have the same normal form and the same dynamics — $B$ $\beta$-reduces to $A$'s body with the identity substituted — so no observation of what they *compute* can distinguish them. Yet one is accepted and one rejected.

The consequence is the practical one stated in the Formal version: a type system with let-polymorphism constrains the compiler's phase order, because the desugaring of [Lesson 1.2](01-02-concrete-and-abstract-syntax.md) is meaning-preserving and **not** typing-preserving. Desugar before checking and you reject programs the language accepts.

It also sharpens the "sound but incomplete" point from [Lesson 4.3](04-03-unification-and-hindley-milner.md) P3(d): here the rejected term is not merely well-behaved but is *the very same computation* as an accepted one, differing only in how it was written.

(d) Annotate $f$ with a polymorphic type, making it a rank-2 argument:

$$B' = (\lambda f : (\forall\alpha.\ \alpha\to\alpha).\ (f\,[\mathsf{Nat}]\ \overline{3},\ f\,[\mathsf{Bool}]\ \mathsf{true}))\ (\Lambda\alpha.\,\lambda x{:}\alpha.\ x)$$

Now $f$ has a polymorphic type in the context and each use supplies its own type application, so both instantiations type-check.

**What it costs the compiler: the ability to infer this type on its own.** The annotation is not a convenience but a requirement, by **Wells' theorem (1994)**: type inference for System F is undecidable. The type $(\forall\alpha.\,\alpha\to\alpha)\to\cdots$ is rank-2, outside HM's prenex fragment, so the compiler cannot reconstruct it and the programmer must supply it. That is exactly the bargain in the Picture, and exactly what Haskell's `RankNTypes` extension does: it permits the type and requires the signature.

</details>

## Flashback

**From Lesson 3.2 (Church encodings and beta-reduction):** $\mathsf{pair} = \lambda a.\lambda b.\lambda s.\ s\,a\,b$, with $\mathsf{fst} = \lambda p.\ p\ (\lambda a.\lambda b.\,a)$ — a pair is a function awaiting a selector, and the selector for the first component is literally $\mathsf{tru}$.

(a) Example 1 inferred $\mathsf{pair} : \forall\alpha\beta\gamma.\ \alpha\to\beta\to(\alpha\to\beta\to\gamma)\to\gamma$. Give the type of $\mathsf{fst}$ that HM infers, and say which variable of $\mathsf{pair}$'s type the selector instantiates and to what.
(b) Parametricity says $\forall\alpha.\ \alpha\to\alpha\to\alpha$ has exactly two inhabitants (P2c). Use this to say something precise about how many *projections* out of a Church pair exist.

<details>
<summary>Solution</summary>

(a) $\mathsf{fst} = \lambda p.\ p\ (\lambda a.\lambda b.\,a)$ applies $p$ to a selector, so $p$'s type must be an arrow whose domain is the selector's type. The selector $\lambda a.\lambda b.\,a$ has type $\alpha\to\beta\to\alpha$. Hence

$$\mathsf{fst} : \forall\alpha\beta.\ \big((\alpha\to\beta\to\alpha) \to \gamma\big) \to \gamma$$

and since the only way to produce the $\gamma$ is through that application, HM infers (renaming) $\forall\alpha\beta\gamma.\ ((\alpha\to\beta\to\alpha)\to\gamma)\to\gamma$.

Matching against $\mathsf{pair}$'s type: after supplying two components, $\mathsf{pair}\ a\ b$ has type $(\alpha\to\beta\to\gamma)\to\gamma$. Applying $\mathsf{fst}$ to it forces the selector type $\alpha\to\beta\to\gamma$ to equal $\alpha\to\beta\to\alpha$, so **$\gamma$ instantiates to $\alpha$** — the result type of the projection is the type of the first component, which is exactly what "first projection" means. Choosing the other selector instantiates $\gamma := \beta$ instead, giving $\mathsf{snd}$.

So the pair's third type variable $\gamma$ is a *result-type slot*, and the selector's job is to decide which component's type fills it. That is a precise statement of what [Lesson 3.2](03-02-church-encodings-and-beta-reduction.md) described informally as "a pair is a function awaiting a selector".

(b) Specialize the pair to two components of the **same** type $\alpha$, so that a selector has type $\alpha\to\alpha\to\alpha$. By P2(c) there are exactly **two** closed functions of that type, $\lambda a.\lambda b.\,a$ and $\lambda a.\lambda b.\,b$.

Therefore there are exactly **two projections** out of such a pair — first and second — and no others. Not "two that anyone has thought of", but two in total: parametricity rules out any third selector, because a function at that type cannot inspect its arguments and so cannot make a choice depending on them, and cannot manufacture a new $\alpha$.

This is the encoding's completeness argument, and it is the same fact from a different direction as [Lesson 3.2](03-02-church-encodings-and-beta-reduction.md)'s observation that $\mathsf{fst}$'s selector *is* $\mathsf{tru}$: the type $\alpha\to\alpha\to\alpha$ is simultaneously the type of Church booleans and the type of selectors on a homogeneous pair, it has exactly two inhabitants, and those two are the two booleans and the two projections at once.

</details>

## Connections

- **Backward:** the $\mathsf{Nat}_\tau$ duplication of [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md) is what polymorphism fixes; the occurs-check failure on $\mathsf{id}\ \mathsf{id}$ is [Lesson 4.3](04-03-unification-and-hindley-milner.md)'s, and $\forall$ is the quantifier row of [Lesson 4.2](04-02-type-checking-and-curry-howard.md)'s dictionary. The `let`-is-not-an-application result corrects [Lesson 1.2](01-02-concrete-and-abstract-syntax.md)'s desugaring table for a typed setting.
- **Forward:** [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md) proves soundness for this system. [Lesson 5.3](05-03-recursive-types-existentials-and-modules.md) is the dual quantifier, $\exists$, which is what a module hides; [Lesson 5.4](05-04-type-classes-and-ad-hoc-polymorphism.md) adds constrained polymorphism, which deliberately gives up some parametricity in exchange for operations on the abstract type.
- **Sideways:** parametricity is a naturality condition — the free theorem $\mathsf{map}\,f \circ r = r \circ \mathsf{map}\,f$ is precisely the commuting square of a natural transformation in [`category-theory` 1.5](../../category-theory/lessons/01-05-natural-transformations.md), and [`category-theory` 2.3](../../category-theory/lessons/02-03-yoneda-lemma.md)'s Yoneda lemma is the statement that a fully polymorphic function is secretly just a piece of data.
