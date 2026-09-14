# Programming Languages · Lesson 4.3: Unification and Hindley–Milner inference

> ⏱ ~15 min · Module 4: Type systems · Builds on: [4.2 (type checking and Curry–Howard)](04-02-type-checking-and-curry-howard.md), [3.3 (confluence and the Y combinator)](03-03-confluence-and-the-y-combinator.md) · Unlocks: [4.4 (polymorphism and parametricity)](04-04-polymorphism-system-f-and-parametricity.md), [5.4 (type classes)](05-04-type-classes-and-ad-hoc-polymorphism.md)

## Why this matters

Bidirectional checking reduced the annotation burden but did not remove it: a $\lambda$ with no expected type still needs one. Hindley–Milner removes it entirely. You write

```
compose f g x = f (g x)
```

with no types at all, and the compiler answers $(\beta \to \gamma) \to (\alpha \to \beta) \to \alpha \to \gamma$ — and not merely *a* correct type but the **most general** one, of which every other valid type for that term is an instance.

That is a strong and slightly surprising guarantee, and it rests on one algorithm: **unification**, which solves systems of equations between terms. Unification is not a type-systems curiosity — it is the engine of Prolog's execution model, of pattern matching in term rewriting, and of the E-graph equality saturation used in modern optimizers. Learning it here, where the terms are types, is the cheapest place to learn it.

## The idea

Type inference is **constraint solving in two phases**.

*Phase one — generate.* Walk the term. Give every binder a fresh type variable. Every application produces one equation: if $e_1$ has type $\tau_1$ and $e_2$ has type $\tau_2$, then for $e_1\,e_2$ to type-check you need

$$\tau_1 \;=\; \tau_2 \to \beta \qquad (\beta \text{ fresh})$$

Nothing is decided during the walk; you just accumulate equations.

*Phase two — solve.* Run unification on the equation set. It either produces a **substitution** — an assignment of types to type variables making every equation true — or reports failure, which is a type error.

The substitution it produces is the *most general* one: it commits to nothing the equations did not force. That is what makes the resulting type principal, and it is the same "assume only what you were forced to" discipline as the least fixed point of [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md).

## The formal version

**Definition (substitution).** A map $S$ from type variables to types, applied to a type by replacing each variable. Composition $S_2 \circ S_1$ means "apply $S_1$, then $S_2$".

**Definition (unifier).** $S$ unifies $\tau_1$ and $\tau_2$ if $S\tau_1 = S\tau_2$. It is a **most general unifier (mgu)** if every other unifier $S'$ factors as $S' = R \circ S$ for some $R$.

**Robinson's algorithm.** $\mathrm{unify}(\tau_1, \tau_2)$:

1. If $\tau_1$ is a variable $\alpha$: if $\tau_1 = \tau_2$, return the empty substitution. **If $\alpha$ occurs in $\tau_2$, fail (the occurs check).** Otherwise return $\{\alpha \mapsto \tau_2\}$.
2. Symmetrically if $\tau_2$ is a variable.
3. If both are the same base type, return the empty substitution; if different base types, fail.
4. If both are arrows, $\tau_1 = a_1 \to b_1$ and $\tau_2 = a_2 \to b_2$: let $S_1 = \mathrm{unify}(a_1, a_2)$, then $S_2 = \mathrm{unify}(S_1 b_1, S_1 b_2)$, and return $S_2 \circ S_1$.
5. Otherwise fail (a structural clash — arrow against base type).

**Theorem (Robinson).** *(card: [most general unifier and the occurs check](../reference.md#most-general-unifier-and-the-occurs-check))* If two types have any unifier, this algorithm finds one, and it is most general.

**The occurs check is the whole difficulty.** Without step 1's check, $\mathrm{unify}(\alpha,\ \alpha \to \beta)$ would return $\{\alpha \mapsto \alpha \to \beta\}$, and substituting into itself gives $(\alpha\to\beta)\to\beta$, then $((\alpha\to\beta)\to\beta)\to\beta$ — an **infinite type**. Types are finite trees, so no such type exists, and the check is what enforces that. It is exactly [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md) P2's counting argument, mechanized.

**Algorithm W.** Walk the term, threading a substitution:

| term | what W does |
|---|---|
| $x$ | look up $x$ in $\Gamma$; return its type |
| $\lambda x.\,e$ | fresh $\alpha$; infer $e$ under $\Gamma, x{:}\alpha$ giving $(S, \tau)$; return $(S,\; S\alpha \to \tau)$ |
| $e_1\,e_2$ | infer $e_1$ giving $(S_1,\tau_1)$; infer $e_2$ under $S_1\Gamma$ giving $(S_2,\tau_2)$; fresh $\beta$; $S_3 = \mathrm{unify}(S_2\tau_1,\ \tau_2 \to \beta)$; return $(S_3 \circ S_2 \circ S_1,\ S_3\beta)$ |

**Definition (principal type).** $\tau$ is principal for $e$ if $\vdash e : \tau$ and every $\tau'$ with $\vdash e : \tau'$ is a substitution instance of $\tau$.

**Theorem (Hindley–Milner).** Every typable term has a principal type, and Algorithm W computes it.

This is stronger than "inference is possible". It says there is a **single best answer**, so the compiler never has to choose between incomparable types, and a programmer's written signature can be checked by asking whether it is an instance of the inferred one. That property is what makes ML-family languages feel the way they do.

## Picture

![A worked constraint trace. It opens by assigning fresh variables f to t0 and x to t1. Two constraints follow from the two applications: t0 equals t1 arrow t2 from the inner f applied to x, and t0 equals t2 arrow t3 from the outer f applied to f x. Below a dashed rule, the solving step equates t1 arrow t2 with t2 arrow t3, yielding t1 assigned t2 from the domains and t2 assigned t3 from the codomains. The conclusion states that t1 equals t2 equals t3, that f has type t3 arrow t3 and x has type t3, and gives the principal type as open paren a arrow a close paren arrow a arrow a.](assets/04-03-fig1.svg)

Two constraints, both saying "$f$'s type is an arrow", and unifying them forces the domain and codomain to coincide. **Nothing in the term said $f$ must have type $\alpha \to \alpha$** — that fell out of applying $f$ to its own result. This is what inference means: the constraints are latent in the term's structure, and the algorithm reads them off.

## Worked examples

**Example 1 (mechanical): unify four pairs.**

*(a)* $\mathrm{unify}(\alpha,\ \mathsf{Nat} \to \mathsf{Bool})$. Step 1: $\alpha$ is a variable and does not occur in the right side. Result $\{\alpha \mapsto \mathsf{Nat}\to\mathsf{Bool}\}$.

*(b)* $\mathrm{unify}(\alpha \to \mathsf{Nat},\ \mathsf{Bool} \to \beta)$. Step 4: unify domains $\alpha$ and $\mathsf{Bool}$, giving $\{\alpha\mapsto\mathsf{Bool}\}$; then codomains $\mathsf{Nat}$ and $\beta$, giving $\{\beta\mapsto\mathsf{Nat}\}$. Composite: $\{\alpha\mapsto\mathsf{Bool},\ \beta\mapsto\mathsf{Nat}\}$.

*(c)* $\mathrm{unify}(\mathsf{Nat},\ \mathsf{Bool})$. Step 3: different base types. **Fail** — a structural clash, which surfaces as "expected Nat, found Bool".

*(d)* $\mathrm{unify}(\alpha,\ \alpha \to \mathsf{Nat})$. Step 1: $\alpha$ **occurs** in the right side. **Fail** — the occurs check.

The two failure modes are worth distinguishing, because they produce different error messages and different user mistakes. (c) means you passed the wrong thing; (d) means you wrote something self-referential, usually a missing argument or a misplaced recursive call.

**Example 2 (why you'd care): inference on `twice`, and what breaks on self-application.**

*Infer $\lambda f.\lambda x.\ f\,(f\,x)$.* Give $f : t_0$ and $x : t_1$.

- The inner application $f\,x$ requires $t_0 = t_1 \to t_2$, with $t_2$ fresh.
- The outer application $f\,(f\,x)$ requires $t_0 = t_2 \to t_3$, with $t_3$ fresh.

Unify the two right-hand sides, $t_1 \to t_2 = t_2 \to t_3$:

- domains: $t_1 := t_2$
- codomains: $t_2 := t_3$

So $t_1 = t_2 = t_3$; call it $a$. Then $f : a \to a$ and $x : a$, and the whole term has type

$$(a \to a) \to a \to a$$

which is principal: every type `twice` has is obtained by substituting for $a$.

*Now try $\lambda x.\ x\,x$.* Give $x : t_0$. The single application requires

$$t_0 \;=\; t_0 \to t_1$$

Unification hits step 1 with $\alpha = t_0$ and $\tau_2 = t_0 \to t_1$, and **$t_0$ occurs in $t_0 \to t_1$**. The occurs check fires and inference fails.

**What the rejection is protecting.** $\lambda x.\,x\,x$ is a perfectly good untyped term — it reduces fine on the identity ([Lesson 3.3](03-03-confluence-and-the-y-combinator.md) P1a). But self-application is the ingredient of $\Omega$ and $Y$, and [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md)'s strong normalization theorem says a system admitting it cannot guarantee termination. The occurs check is where that guarantee is enforced, one equation at a time — and it is the same failure a beginner sees on an infinite-type error in OCaml or Haskell.

## Watch out

- **You might think** the occurs check is a performance guard or an implementation detail — **but actually** it is the soundness condition. Omitting it produces infinite types, and a language that allows them (Prolog, without `occurs_check`, for speed) accepts cyclic terms that no finite type describes.
- **You might think** inference finding a type means the program is right — **but actually** it means the constraints were consistent. A term with a suspiciously general inferred type is a common sign of a bug — if you meant to write a function on lists of numbers and the compiler says $\forall\alpha.\,[\alpha]\to[\alpha]$, you probably forgot to use the numbers.
- **You might think** principal types exist for every type system — **but actually** this is a special property of Hindley–Milner, and it is exactly what is lost when you add first-class polymorphism or subtyping. [Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md) shows what HM gives up to keep it.

## One-liner

> Generate one equation per application, solve them all with unification, and the most general solution is the principal type — with the occurs check standing where an infinite type would otherwise be, which is exactly where self-application lives.

## Problems

**P1 (🟢)** Run $\mathrm{unify}$ on each pair, giving the resulting substitution or naming the failure.

(a) $\mathrm{unify}(\alpha \to \beta,\ \mathsf{Nat} \to \mathsf{Nat})$
(b) $\mathrm{unify}(\alpha \to \alpha,\ \mathsf{Nat} \to \mathsf{Bool})$
(c) $\mathrm{unify}(\alpha,\ \beta \to \beta)$
(d) $\mathrm{unify}(\alpha \to \beta,\ \beta \to \alpha)$

**P2 (🟡)** Infer the principal type of each term by generating and solving constraints. Show the constraints.

(a) $\lambda x.\lambda y.\ x$
(b) $\lambda f.\lambda g.\lambda x.\ f\,(g\,x)$
(c) $\lambda f.\lambda x.\ f\,x\,x$

**P3 (🔴)** Consider $\lambda x.\lambda y.\ x\,y\,x$.

(a) Assign fresh variables and generate every constraint, labelling which application produced each.
(b) Solve them, showing each unification step, and report where the algorithm stops.
(c) Name the failing check and give the exact type variable and type at which it fires.
(d) A colleague says the rejection shows the term is meaningless. Give a reduction of $(\lambda x.\lambda y.\ x\,y\,x)$ applied to two arguments that produces a perfectly ordinary answer, and state in one sentence the property this illustrates about the type system.

<details>
<summary>Solutions</summary>

**P1**

(a) Both are arrows. Domains: $\mathrm{unify}(\alpha, \mathsf{Nat}) = \{\alpha\mapsto\mathsf{Nat}\}$. Codomains: $\mathrm{unify}(\beta, \mathsf{Nat}) = \{\beta\mapsto\mathsf{Nat}\}$. Composite:

$$\{\alpha\mapsto\mathsf{Nat},\ \beta\mapsto\mathsf{Nat}\}$$

(b) Both are arrows. Domains: $\mathrm{unify}(\alpha,\mathsf{Nat}) = \{\alpha\mapsto\mathsf{Nat}\}$. Now apply that substitution before unifying codomains, as step 4 requires: the codomains become $\mathsf{Nat}$ and $\mathsf{Bool}$. **Fail — structural clash** between two different base types.

This is why step 4 applies $S_1$ before the second call. Without it the algorithm would unify $\alpha$ with $\mathsf{Nat}$ and separately with $\mathsf{Bool}$ and return an inconsistent substitution.

(c) $\alpha$ is a variable and does not occur in $\beta \to \beta$. Result:

$$\{\alpha \mapsto \beta \to \beta\}$$

(d) Both are arrows. Domains: $\mathrm{unify}(\alpha, \beta) = \{\alpha\mapsto\beta\}$. Apply it to the codomains, which become $\beta$ and $\beta$; unifying those gives the empty substitution. Composite:

$$\{\alpha \mapsto \beta\}$$

No failure — the two types are unified to $\beta \to \beta$. (The occurs check does **not** fire: $\alpha$ does not occur in $\beta$.)

**P2**

(a) $\lambda x.\lambda y.\ x$. Give $x : t_0$, $y : t_1$. The body is just $x$, so there are **no applications and no constraints**. The type is

$$t_0 \to t_1 \to t_0, \qquad\text{i.e.}\qquad a \to b \to a$$

With no constraints, nothing is forced, and the two variables stay independent — which is the most general possible answer.

(b) $\lambda f.\lambda g.\lambda x.\ f\,(g\,x)$. Give $f : t_0$, $g : t_1$, $x : t_2$.

- $g\,x$ requires $t_1 = t_2 \to t_3$ ($t_3$ fresh).
- $f\,(g\,x)$ requires $t_0 = t_3 \to t_4$ ($t_4$ fresh).

The two constraints share only $t_3$ and neither forces anything further, so no unification work remains. Reading off:

$$(t_3 \to t_4) \to (t_2 \to t_3) \to t_2 \to t_4, \qquad\text{i.e.}\qquad (b \to c) \to (a \to b) \to a \to c$$

which is function composition — and, under [Lesson 4.2](04-02-type-checking-and-curry-howard.md)'s dictionary, the transitivity of implication.

(c) $\lambda f.\lambda x.\ f\,x\,x$. Give $f : t_0$, $x : t_1$. The body is $(f\,x)\,x$:

- $f\,x$ requires $t_0 = t_1 \to t_2$.
- $(f\,x)\,x$ requires $t_2 = t_1 \to t_3$.

Substituting the second into the first, $t_0 = t_1 \to t_1 \to t_3$. The type is

$$(t_1 \to t_1 \to t_3) \to t_1 \to t_3, \qquad\text{i.e.}\qquad (a \to a \to b) \to a \to b$$

**No occurs-check failure here** — $f$ is applied to $x$ twice, but never to itself, so no variable is equated with a type containing it. Worth contrasting with P3.

**P3**

(a) Give $x : t_0$ and $y : t_1$. The body is $(x\,y)\,x$, two applications:

- **inner, $x\,y$:** the function is $x : t_0$, the argument is $y : t_1$, so with $t_2$ fresh

$$\text{(1)}\qquad t_0 \;=\; t_1 \to t_2$$

- **outer, $(x\,y)\,x$:** the function is $x\,y : t_2$, the argument is $x : t_0$, so with $t_3$ fresh

$$\text{(2)}\qquad t_2 \;=\; t_0 \to t_3$$

(b) Solve (1) first: $t_0$ is a variable not occurring in $t_1 \to t_2$, so

$$S_1 = \{t_0 \mapsto t_1 \to t_2\}$$

Apply $S_1$ to (2). The left side $t_2$ is unchanged; the right side $t_0 \to t_3$ becomes $(t_1 \to t_2) \to t_3$. So the remaining equation is

$$t_2 \;=\; (t_1 \to t_2) \to t_3$$

Now $\mathrm{unify}$ is called with a variable on the left, so step 1 runs its occurs check — and **stops here**.

(c) The failing check is the **occurs check**, at

$$\alpha = t_2, \qquad \tau_2 = (t_1 \to t_2) \to t_3$$

$t_2$ occurs inside $\tau_2$ (in the domain $t_1 \to t_2$), so no finite type satisfies the equation and the algorithm fails. Any candidate solution would have to be the infinite type $t_2 = ((t_1 \to ((t_1 \to \cdots) \to t_3)) \to t_3)$.

(d) *Accept criterion:* any application of the term to two arguments that reduces to a normal form is a correct answer.

Take $x := \lambda a.\lambda b.\ a$ (the $K$ combinator) and $y := c$:

$$(\lambda x.\lambda y.\ x\,y\,x)\ (\lambda a.\lambda b.\,a)\ c \;\to_\beta^*\; (\lambda a.\lambda b.\,a)\ c\ (\lambda a.\lambda b.\,a) \;\to_\beta\; (\lambda b.\ c)\ (\lambda a.\lambda b.\,a) \;\to_\beta\; c$$

A perfectly ordinary normal form, reached in four $\beta$-steps, with nothing anomalous anywhere.

The property this illustrates: **the type system is sound but not complete.** It rejects every term that could go wrong, and it also rejects some terms that never do. Hindley–Milner must assign $x$ a *single* type throughout the body, and here $x$ is used both as a function and as that function's own argument, which needs two different types for one variable. The term is fine; the *system* cannot express why.

This is not a defect to be engineered away — by Rice's theorem ([`theory-of-computation` 4.3](../../theory-of-computation/lessons/04-03-rices-theorem-and-more-undecidable-problems.md)) no decidable system can accept exactly the well-behaved programs, so every type system draws this line somewhere. What varies is *where*, and [Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md) shows that a system with first-class polymorphism accepts more terms of this shape — at the price of losing the principal-types theorem and decidable inference that make this one so pleasant to use.

</details>

## Flashback

**From Lesson 1.4 (Recursive descent, LL(1) and precedence climbing):** FIRST and FOLLOW are computed by iterating a set of monotone rules until nothing changes — a least fixed point.

Unification also runs to completion on a constraint set.

(a) State whether unification is a fixed-point iteration of the same kind, and give the reason.
(b) Both algorithms can fail to produce a usable result, but they fail in structurally different ways. Compare an LL(1) conflict with an occurs-check failure: what does each tell you about the input?

<details>
<summary>Solution</summary>

(a) **No — unification is not a fixed-point iteration of that kind, and the difference is instructive.**

FIRST and FOLLOW are computed by *accumulating*: each pass may add terminals to a set, never removes any, and the sets grow monotonically until they stabilize. Termination follows from the sets being bounded (there are finitely many terminals) and monotone growth in a finite lattice — the pattern of [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md) and [Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md).

Unification instead *reduces*: each step either eliminates a variable (binding it, so it never reappears) or decomposes an equation between arrows into two smaller equations between their components. Termination follows from a **decreasing measure** — the number of unbound variables strictly decreases on a binding step, and the total size of the equations strictly decreases on a decomposition step. That is the well-founded-descent argument of a *variant* ([Lesson 2.4](02-04-hoare-logic-and-loop-invariants.md)), not the ascending-chain argument of a fixed point.

The two patterns are the two standard ways to prove an iterative algorithm terminates, and it is worth being able to tell them apart: ascending in a bounded lattice, or descending in a well-ordering.

(b) Both are failures of the input to have a property the algorithm needs, but they say different things.

**An LL(1) conflict** says the *grammar* is unsuitable for this technique. It is not a statement about any particular input string — the grammar may well be unambiguous and describe a perfectly good language, and the usual fix is to rewrite the grammar (remove left recursion, left-factor) or switch to a stronger technique. A conflict is a property of the specification.

**An occurs-check failure** says this *particular term* has no type. It is not a defect in the language or the algorithm, and no rewriting of the type system's rules within Hindley–Milner will accept it — the equation genuinely has no finite solution. The fix is to change the program (or move to a system with different rules, at a cost).

Put in one line: **an LL(1) conflict is a problem with your grammar, an occurs-check failure is a problem with your program.** The first is the tool complaining about its configuration; the second is the tool doing its job.

</details>

## Connections

- **Backward:** the rules being syntax-directed ([Lesson 4.2](04-02-type-checking-and-curry-howard.md)) is what makes constraint generation a single walk, and the occurs check mechanizes [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md) P2's counting argument against $x\,x$ — which is why $Y$ and $\Omega$ from [Lesson 3.3](03-03-confluence-and-the-y-combinator.md) are rejected here too.
- **Forward:** [Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md) adds generalization, shows why `let` is not merely sugar for an application, and shows what is lost when polymorphism becomes first-class. Unification reappears as the mechanism resolving type-class instances in [Lesson 5.4](05-04-type-classes-and-ad-hoc-polymorphism.md).
- **Sideways:** unification is the execution model of logic programming — a Prolog query is a goal unified against clause heads, and Prolog's optional `occurs_check` flag is this very check, disabled by default for speed at the cost of admitting cyclic terms. The "most general" notion is a least upper bound in the lattice of substitutions ordered by instantiation.
