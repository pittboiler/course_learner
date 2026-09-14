# Programming Languages · Lesson 4.1: The simply-typed lambda calculus

> ⏱ ~15 min · Module 4: Type systems · Builds on: [3.4 (evaluation strategies)](03-04-evaluation-strategies.md), [3.1 (the untyped lambda calculus)](03-01-the-untyped-lambda-calculus.md) · Unlocks: [4.2 (type checking and Curry–Howard)](04-02-type-checking-and-curry-howard.md), [4.5 (type soundness)](04-05-type-soundness-progress-and-preservation.md)

## Why this matters

The untyped calculus computes everything computable, and that is precisely its problem: it also computes $\Omega$, and it happily forms $x\,x$, and it lets you apply a Church numeral to a Church boolean and get a term with no sensible reading. Nothing in the syntax distinguishes a program that will produce an answer from one that is meaningless.

A type system is a **decidable, syntactic** approximation of "this program is meaningful". The simply-typed lambda calculus is the smallest one worth studying, and everything in Modules 4 and 5 is built by adding features to it. It is also where you see the fundamental bargain for the first time: the system rejects every meaningless program *and* some meaningful ones, and what it buys with that trade is a theorem — here, an extremely strong one.

## The idea

Give every term a type. There are base types (say `Bool`, `Nat`) and one type former:

$$\tau_1 \to \tau_2$$

the type of functions taking a $\tau_1$ and producing a $\tau_2$. That is the entire type language — no polymorphism, no subtyping, no generics, nothing else until Module 5.

Typing is *relative to a context*, because the type of `x` depends on what `x` was declared as. So the judgment has three parts:

$$\Gamma \vdash e : \tau$$

read "under the assumptions $\Gamma$, the term $e$ has type $\tau$". $\Gamma$ is a list of `variable : type` pairs — it is [Lesson 1.6](01-06-name-resolution-and-the-semantic-phase.md)'s scope stack a third time, now holding types instead of declarations or values.

The rules then write themselves. A variable's type is looked up. An abstraction $\lambda x{:}\tau_1.\,e$ has a function type, found by typing $e$ with $x$ added to the context. An application requires the function's argument type to *match* the argument's type — and that single matching requirement is where every type error comes from.

## The formal version

**Types.** $\tau ::= \mathsf{Bool} \mid \mathsf{Nat} \mid \tau \to \tau$, with $\to$ associating to the **right**: $\tau_1 \to \tau_2 \to \tau_3$ means $\tau_1 \to (\tau_2 \to \tau_3)$. That is the right convention because it matches currying — a curried two-argument function *is* a function returning a function.

**Terms.** As in [Lesson 3.1](03-01-the-untyped-lambda-calculus.md), but abstractions carry an annotation: $e ::= x \mid \lambda x{:}\tau.\,e \mid e\,e$.

**Rules.**

$$\frac{x : \tau \in \Gamma}{\Gamma \vdash x : \tau}\;(\mathsf{T\text{-}Var}) \qquad \frac{\Gamma, x{:}\tau_1 \vdash e : \tau_2}{\Gamma \vdash \lambda x{:}\tau_1.\,e \;:\; \tau_1 \to \tau_2}\;(\mathsf{T\text{-}Abs})$$

$$\frac{\Gamma \vdash e_1 : \tau_1 \to \tau_2 \qquad \Gamma \vdash e_2 : \tau_1}{\Gamma \vdash e_1\,e_2 \;:\; \tau_2}\;(\mathsf{T\text{-}App})$$

In words. $\mathsf{T\text{-}Var}$: look it up. $\mathsf{T\text{-}Abs}$: to type a function, assume the parameter has its annotated type and type the body; the result is the arrow. $\mathsf{T\text{-}App}$: to type a call, the function must *be* a function, and its domain must be **exactly** the argument's type.

**The rules are syntax-directed.** Exactly one rule applies to each term shape, so type checking is a single recursive walk with no search and no backtracking — which is why it is fast enough to run on every keystroke in an editor. [Lesson 4.2](04-02-type-checking-and-curry-howard.md) turns that observation into an algorithm.

**What gets rejected.** $x\,x$ has no type in any context. Suppose $\Gamma \vdash x : \tau$. For $\mathsf{T\text{-}App}$ to apply, $\tau$ must be an arrow $\tau_1 \to \tau_2$ *and* the argument's type $\tau$ must equal $\tau_1$. So $\tau = \tau \to \tau_2$, and no finite type satisfies that — the left side has fewer arrows than the right. **Self-application is untypable**, which [Lesson 4.3](04-03-unification-and-hindley-milner.md) detects mechanically as the *occurs check*.

Since $\Omega = (\lambda x.\,x\,x)(\lambda x.\,x\,x)$ and $Y$ both contain $x\,x$ ([Lesson 3.3](03-03-confluence-and-the-y-combinator.md)), **both are untypable.** And that is not an accident:

**Theorem (strong normalization).** *(card: [strong normalization](../reference.md#strong-normalization))* Every well-typed term of the simply-typed lambda calculus reduces to a normal form, under *every* reduction order, in finitely many steps.

In words: **a well-typed program always terminates.** No infinite loops, no divergence, no matter what you write.

That is an extraordinary guarantee and a fatal limitation in the same sentence. A language with this property is not Turing-complete — it cannot express a program whose termination is unknown, because every program terminates. The price of banning $\Omega$ was banning $Y$ with it, since both are built from self-application.

**So a real typed language adds recursion back, deliberately, as a primitive.** ML has `let rec`; Haskell has `fix :: (a -> a) -> a`; every practical typed language has *something*, and adding it is precisely the moment the language stops being strongly normalizing and becomes Turing-complete. The cleanest way to see it is the typing rule for a fixed-point operator:

$$\frac{\Gamma \vdash e : \tau \to \tau}{\Gamma \vdash \mathsf{fix}\ e : \tau}\;(\mathsf{T\text{-}Fix})$$

This rule cannot be derived; it must be *postulated*. And once you postulate it, `fix (\x -> x)` type-checks at every type $\tau$ and diverges — so the system now has a well-typed non-terminating term, and strong normalization is gone. **That is the trade every practical language has made**, and knowing exactly which rule costs you the theorem is worth more than knowing the theorem.

## Picture

![A five-line typing derivation, read bottom to top. The bottom line concludes that the empty context types lambda f of type A arrow A dot lambda x of type A dot f applied to f x at type open paren A arrow A close paren arrow A arrow A, by T-Abs. Above it, the context f of type A arrow A types the inner lambda at type A arrow A, by T-Abs. Above that, the context f of type A arrow A and x of type A types f applied to f x at type A, by T-App, and above that the same context types f x at type A, also by T-App. At the top, the same context types x at type A, by T-Var.](assets/04-01-fig1.svg)

Read it bottom to top and it is the checker running: to type the outer $\lambda$, extend the context and type the body; to type an application, type both sides and check the match. Read it top to bottom and it is a proof. The two readings are the same object, which is the observation [Lesson 4.2](04-02-type-checking-and-curry-howard.md) makes into a theorem.

Note that **every type in the derivation was forced by the annotations**. There is no guessing in this system — which is exactly what [Lesson 4.3](04-03-unification-and-hindley-milner.md) removes, at the cost of having to solve equations.

## Worked examples

**Example 1 (mechanical): type three terms, or explain the failure.**

*(a)* $\lambda x{:}\mathsf{Nat}.\ x$. By $\mathsf{T\text{-}Var}$, $x{:}\mathsf{Nat} \vdash x : \mathsf{Nat}$; by $\mathsf{T\text{-}Abs}$, $\vdash \lambda x{:}\mathsf{Nat}.\,x : \mathsf{Nat} \to \mathsf{Nat}$.

*(b)* $\lambda f{:}\mathsf{Nat}\to\mathsf{Nat}.\ \lambda x{:}\mathsf{Nat}.\ f\,(f\,x)$. The Picture's derivation with $A = \mathsf{Nat}$, giving

$$(\mathsf{Nat} \to \mathsf{Nat}) \to \mathsf{Nat} \to \mathsf{Nat}$$

*(c)* $\lambda f{:}\mathsf{Nat}\to\mathsf{Nat}.\ \lambda x{:}\mathsf{Bool}.\ f\,x$. Here $\mathsf{T\text{-}App}$ needs the function's domain $\mathsf{Nat}$ to equal the argument's type $\mathsf{Bool}$. It does not. **No derivation exists** — this is a type error, and notice the error is local: it is one rule's side condition failing at one node.

**Example 2 (why you'd care): the Church numerals survive, the Y combinator does not.** This pair is the whole story of the system.

*Numerals type fine.* $\overline{2} = \lambda f.\lambda x.\ f\,(f\,x)$ is (b) above once annotated, with type $(\tau \to \tau) \to \tau \to \tau$ for any $\tau$. Give the abbreviation $\mathsf{Nat}_\tau = (\tau\to\tau)\to\tau\to\tau$; then $\mathsf{succ}$, $\mathsf{plus}$ and $\mathsf{mult}$ all type at the obvious arrow types over $\mathsf{Nat}_\tau$. The arithmetic of [Lesson 3.2](03-02-church-encodings-and-beta-reduction.md) is entirely available.

*But the type must be fixed in advance.* $\mathsf{Nat}_{\mathsf{Bool}}$ and $\mathsf{Nat}_{\mathsf{Nat}}$ are **different types**, so a numeral usable as a loop over booleans is not the same term as one usable as a loop over numbers. You must write the term twice. That is the limitation [Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md) fixes with polymorphism, and it is worth feeling the pain now.

*$Y$ does not type, and the argument is short.* $Y$'s body contains $x\,x$; by the argument above that requires $\tau = \tau \to \tau_2$, which no finite type satisfies. So $Y$ is untypable, and by strong normalization it *had* to be — a typable $Y$ would let you write a non-terminating well-typed program, contradicting the theorem.

**The consequence to take away:** in the simply-typed calculus, *"it type-checks" implies "it terminates"*, which is far stronger than anything a real language promises. When your compiler type-checks a Haskell program it is emphatically not telling you the program halts, and the reason is one postulated rule.

## Watch out

- **You might think** the annotation on $\lambda x{:}\tau.\,e$ is a convenience that could be dropped — **but actually** without it $\mathsf{T\text{-}Abs}$ has nothing to put in the context and the rules stop being syntax-directed. Dropping annotations is exactly the problem [Lesson 4.3](04-03-unification-and-hindley-milner.md) solves, and solving it requires equation-solving rather than a single walk.
- **You might think** strong normalization is a pure win — **but actually** it is equivalent to not being Turing-complete. A language with it cannot express an interpreter for itself, or a general loop, or any program whose termination is unknown. Total languages like Agda and Idris accept this on purpose and provide a separate mechanism for provably-terminating recursion; everyone else adds `fix` and gives up the theorem.
- **You might think** a type error means the program would have crashed — **but actually** it means the checker *could not prove* it would not. Example 1(c) would have crashed; but $\lambda x.\,x\,x$ applied to the identity reduces perfectly well ([Lesson 3.3](03-03-confluence-and-the-y-combinator.md) P1a) and is still rejected. The system is sound, not complete, and [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md) makes that precise.

## One-liner

> One type former, three rules, and a theorem so strong it is a limitation: every well-typed term terminates — which is why every practical typed language postulates a fixed-point rule and knowingly gives the theorem up.

## Problems

**P1 (🟢)** Give the type of each term, or say which rule's requirement fails.

(a) $\lambda x{:}\mathsf{Bool}.\ \lambda y{:}\mathsf{Nat}.\ x$
(b) $\lambda f{:}\mathsf{Nat}\to\mathsf{Bool}.\ \lambda x{:}\mathsf{Nat}.\ f\,x$
(c) $\lambda f{:}\mathsf{Nat}\to\mathsf{Bool}.\ \lambda x{:}\mathsf{Nat}.\ f\,(f\,x)$
(d) $\lambda g{:}(\mathsf{Nat}\to\mathsf{Nat})\to\mathsf{Nat}.\ \lambda h{:}\mathsf{Nat}\to\mathsf{Nat}.\ g\,h$

**P2 (🟡)** Consider $\lambda x{:}\tau.\ x\,x$.

(a) Write the equation that $\tau$ must satisfy for $\mathsf{T\text{-}App}$ to apply to the body.
(b) Argue that no simple type satisfies it. Use a measure on types, and say what the measure is.
(c) Name one term from Module 3 that is therefore untypable, and state which theorem of this lesson guarantees it must be.

**P3 (🔴)** A designer adds the rule $\dfrac{\Gamma \vdash e : \tau \to \tau}{\Gamma \vdash \mathsf{fix}\ e : \tau}$ to the simply-typed calculus.

(a) Give the type of $\mathsf{fix}\ (\lambda x{:}\mathsf{Nat}.\ x)$ and say what it evaluates to.
(b) Use (a) to state precisely which theorem of this lesson is now false, and why the counterexample is decisive.
(c) The designer argues the rule is harmless because "it only allows what recursion already allows in any real language". Assess this: state what the language gains and what it loses, and name the property from [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md) that it *keeps*.
(d) Explain in one sentence why a total language such as Agda cannot simply adopt this rule, referring to what such languages are for.

<details>
<summary>Solutions</summary>

**P1**

(a) $x{:}\mathsf{Bool}, y{:}\mathsf{Nat} \vdash x : \mathsf{Bool}$ by $\mathsf{T\text{-}Var}$; two applications of $\mathsf{T\text{-}Abs}$ give

$$\mathsf{Bool} \to \mathsf{Nat} \to \mathsf{Bool}$$

(the $K$ combinator, typed). Note $\to$ associates right, so this is $\mathsf{Bool} \to (\mathsf{Nat} \to \mathsf{Bool})$.

(b) $f\,x$ needs $f$'s domain $\mathsf{Nat}$ to equal $x$'s type $\mathsf{Nat}$ — it does, and the result is $\mathsf{Bool}$. Two $\mathsf{T\text{-}Abs}$ steps give

$$(\mathsf{Nat} \to \mathsf{Bool}) \to \mathsf{Nat} \to \mathsf{Bool}$$

(c) **$\mathsf{T\text{-}App}$ fails.** The inner $f\,x$ types at $\mathsf{Bool}$. The outer application then needs $f$'s domain $\mathsf{Nat}$ to equal the argument's type $\mathsf{Bool}$, and it does not. No derivation exists.

This is the general reason $f\,(f\,x)$ requires $f$ to have type $\tau \to \tau$: iterating a function demands that its output be acceptable as its input.

(d) $g\,h$ needs $g$'s domain $\mathsf{Nat}\to\mathsf{Nat}$ to equal $h$'s type $\mathsf{Nat}\to\mathsf{Nat}$ — it does, giving $\mathsf{Nat}$. Two $\mathsf{T\text{-}Abs}$ steps give

$$((\mathsf{Nat}\to\mathsf{Nat})\to\mathsf{Nat}) \to (\mathsf{Nat}\to\mathsf{Nat}) \to \mathsf{Nat}$$

**P2**

(a) In the body $x\,x$ we have $x : \tau$ from the context. $\mathsf{T\text{-}App}$ requires the function position to have an arrow type whose domain matches the argument's type, so we need $\tau_2$ with

$$\tau \;=\; \tau \to \tau_2$$

(b) **Measure: the number of $\to$ symbols in the type** (equivalently, the number of internal nodes of the type's tree — any measure that strictly increases when you build an arrow will do).

Let $n(\sigma)$ be that count. The right-hand side is an arrow whose left subtree is $\tau$ itself, so

$$n(\tau \to \tau_2) \;=\; n(\tau) + n(\tau_2) + 1 \;\ge\; n(\tau) + 1 \;>\; n(\tau)$$

If $\tau = \tau \to \tau_2$ then $n(\tau) > n(\tau)$, which is impossible. So no simple type satisfies the equation, and $\lambda x{:}\tau.\,x\,x$ is untypable for every choice of $\tau$.

(The measure argument is exactly the **occurs check** of [Lesson 4.3](04-03-unification-and-hindley-milner.md): a type variable cannot be equated with a type properly containing it, because types are finite trees.)

(c) $\Omega = (\lambda x.\,x\,x)(\lambda x.\,x\,x)$ is untypable, since both halves are the term just shown to have no type. ($Y$ is equally good as an answer — its body also contains $x\,x$.)

The theorem guaranteeing it: **strong normalization**. $\Omega$ reduces only to itself and has no normal form ([Lesson 3.3](03-03-confluence-and-the-y-combinator.md) P3a), so if it were well-typed it would be a well-typed term with no normal form, contradicting the theorem. The argument runs in the useful direction too: *any* non-terminating term must be untypable, without inspecting its structure.

**P3**

(a) $\lambda x{:}\mathsf{Nat}.\,x$ has type $\mathsf{Nat} \to \mathsf{Nat}$, which matches the premise's $\tau \to \tau$ with $\tau = \mathsf{Nat}$. So

$$\mathsf{fix}\ (\lambda x{:}\mathsf{Nat}.\ x) \;:\; \mathsf{Nat}$$

Its evaluation: $\mathsf{fix}\,e$ is characterized by $\mathsf{fix}\,e \to e\,(\mathsf{fix}\,e)$, so here it steps to $(\lambda x{:}\mathsf{Nat}.\,x)\ (\mathsf{fix}\ (\lambda x{:}\mathsf{Nat}.\,x))$, which $\beta$-reduces back to $\mathsf{fix}\ (\lambda x{:}\mathsf{Nat}.\,x)$. **It diverges**, reducing to itself forever — the typed analogue of $\Omega$.

(b) **Strong normalization is now false.** The term in (a) is well-typed (at type $\mathsf{Nat}$) and has no normal form.

The counterexample is decisive because strong normalization is a universally quantified statement — *every* well-typed term normalizes — so a single well-typed non-normalizing term refutes it outright. There is no weakened version that survives: the identity function is about as innocuous a term as exists, so the failure is not confined to pathological programs.

(c) The assessment: the designer is right about the practical point and wrong to call it harmless.

**Gained:** Turing-completeness. Without $\mathsf{fix}$ the language cannot express general recursion, cannot write an interpreter for itself, and cannot express any algorithm whose termination is not structurally evident. That rules out most useful programs, so the gain is not marginal — it is the difference between a proof language and a programming language.

**Lost:** strong normalization, and with it the guarantee that type-checking implies termination. The compiler can no longer tell you your program halts, and "it type-checks" becomes a much weaker statement.

**Kept: type soundness** — progress and preservation ([Lesson 4.5](04-05-type-soundness-progress-and-preservation.md)). A well-typed term is still never *stuck*: it is a value, or it can take a step, and the step lands on a well-typed term. What is lost is the guarantee that the stepping ever stops. That is precisely why [Lesson 2.1](02-01-small-step-operational-semantics.md) insisted on distinguishing "stuck" from "loops forever": with $\mathsf{fix}$ in the language, soundness rules out the first and says nothing about the second, and a semantics that conflated them could not state the surviving theorem.

(d) Because a total language is used to write **proofs**, and under Curry–Howard ([Lesson 4.2](04-02-type-checking-and-curry-howard.md)) a term of type $\tau$ is a proof of the proposition $\tau$ — so a $\mathsf{fix}$ rule that inhabits *every* type would produce a proof of every proposition, including falsehood, making the logic inconsistent and every proof worthless.

</details>

## Flashback

**From Lesson 3.2 (Church encodings and beta-reduction):** $\mathsf{tru} = \lambda t.\lambda f.\,t$ and $\mathsf{fls} = \lambda t.\lambda f.\,f$, and $\mathsf{test}\ b\ m\ n$ reduces to $m$ or $n$ according to $b$.

Annotate and type these in the simply-typed calculus.

(a) Give types for $\mathsf{tru}$ and $\mathsf{fls}$ that make them the *same* type, and state what that type is with both branches at type $\tau$.
(b) State the restriction this imposes on a conditional, compared with what you can write in the untyped calculus, and name the lesson that lifts it.

<details>
<summary>Solution</summary>

(a) Annotate both branches at the same type $\tau$:

$$\mathsf{tru} = \lambda t{:}\tau.\ \lambda f{:}\tau.\ t \qquad\qquad \mathsf{fls} = \lambda t{:}\tau.\ \lambda f{:}\tau.\ f$$

Both type by $\mathsf{T\text{-}Var}$ then two $\mathsf{T\text{-}Abs}$ steps, and both receive

$$\mathsf{Bool}_\tau \;=\; \tau \to \tau \to \tau$$

They have to share a type — otherwise a conditional could not accept either one in the same position — and the shared type is the encoded booleans' type, exactly as $\mathsf{Nat}_\tau = (\tau\to\tau)\to\tau\to\tau$ was the numerals'.

(b) **Both branches must have the same type, and that type is baked into the boolean itself.**

The first half is a restriction every typed language keeps: `if c then 1 else "hello"` is rejected in ML, Haskell and Java alike, because there is no single type for the result. That is a genuine and desirable check.

The second half is the one that hurts. $\mathsf{Bool}_{\mathsf{Nat}}$ and $\mathsf{Bool}_{\mathsf{Bool}}$ are *different types*, so a boolean used to choose between two numbers is a different term from one used to choose between two booleans. In the untyped calculus there was one $\mathsf{tru}$; here there is one per result type, and you must write it out again for each.

**[Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md) lifts it**, with parametric polymorphism: a single term of type $\forall \alpha.\ \alpha \to \alpha \to \alpha$ that can be instantiated at any $\tau$. That is the whole motivation for polymorphism, and it is worth noticing that the motivation arrived here as a concrete annoyance rather than as an abstraction — one term, needed at many types, and a system with no way to say so.

</details>

## Connections

- **Backward:** the context $\Gamma$ is [Lesson 1.6](01-06-name-resolution-and-the-semantic-phase.md)'s scope stack holding types, the third appearance of that structure after the environment of [Lesson 2.2](02-02-big-step-semantics-and-environments.md). The terms are [Lesson 3.1](03-01-the-untyped-lambda-calculus.md)'s with annotations, and the untypability of $x\,x$ is what kills [Lesson 3.3](03-03-confluence-and-the-y-combinator.md)'s $Y$ and $\Omega$ together.
- **Forward:** [Lesson 4.2](04-02-type-checking-and-curry-howard.md) turns these syntax-directed rules into an algorithm and reads them as logic; [Lesson 4.3](04-03-unification-and-hindley-milner.md) removes the annotations; [Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md) fixes the $\mathsf{Nat}_\tau$ duplication; [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md) proves the theorem that survives adding $\mathsf{fix}$.
- **Sideways:** the types and terms of this calculus are the objects and morphisms of a cartesian closed category, with $\tau_1 \to \tau_2$ the exponential — the currying adjunction of [`category-theory` 3.4](../../category-theory/lessons/03-04-adjoint-functors.md) is why $\to$ associating right is the same fact as a two-argument function being a function returning a function.
