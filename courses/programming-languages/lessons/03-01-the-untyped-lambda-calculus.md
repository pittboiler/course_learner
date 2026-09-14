# Programming Languages · Lesson 3.1: The untyped lambda calculus

> ⏱ ~15 min · Module 3: The lambda calculus · Builds on: [2.3 (denotational semantics)](02-03-denotational-semantics-and-fixed-points.md), [1.6 (name resolution)](01-06-name-resolution-and-the-semantic-phase.md) · Unlocks: [3.2 (Church encodings)](03-02-church-encodings-and-beta-reduction.md), [4.1 (the simply-typed lambda calculus)](04-01-the-simply-typed-lambda-calculus.md)

## Why this matters

Everything in Module 1 and 2 was about a language with numbers, assignment, conditionals and loops — a lot of constructs, each needing its own rules. The lambda calculus asks how few constructs a Turing-complete language can have, and the answer is startling: **three**, and one of them is "a variable".

That matters for three reasons, in increasing order of importance. First, it is the smallest place to study evaluation order, so [Lesson 3.4](03-04-evaluation-strategies.md) can isolate call-by-value from call-by-name without any other feature confusing the picture. Second, it is the notation every type system in Module 4 is stated in — TAPL and every paper you will read define types over lambda terms, not over `while` loops. Third, it is the actual core of every functional language: Haskell, ML, Scheme, and the lambda-bearing parts of Python, Java and JavaScript are this calculus plus conveniences, and [Lesson 1.2](01-02-concrete-and-abstract-syntax.md)'s desugaring is the map back.

This lesson does the syntax and the one operation that is harder than it looks: substitution.

## The idea

Three forms:

- a **variable**, `x`;
- an **abstraction**, $\lambda x.\,t$ — the anonymous function taking $x$ to $t$;
- an **application**, $t_1\,t_2$ — call $t_1$ on $t_2$.

No numbers, no booleans, no conditionals, no loops, no assignment. Everything is a function, every function takes exactly one argument, and computation is one rule: *when a function meets an argument, substitute.*

The deep move is that a function taking one argument loses nothing. A two-argument function is a function returning a function:

$$\lambda x.\,\lambda y.\ (\text{body using } x \text{ and } y)$$

Apply it to one argument and you get back a function waiting for the second. This is **currying**, and it is why "functions of one argument" is a simplification rather than a restriction. In practice it is also useful — partial application falls out for free.

The thing that needs care is names. $\lambda x.\,x$ and $\lambda y.\,y$ are obviously the same function, so names of bound variables must not matter. Making that precise, and then making substitution respect it, is the technical content of this lesson.

## The formal version

**Definition (terms).** The set of terms is given by

$$t ::= x \mid \lambda x.\,t \mid t\ t$$

**Conventions.** Application associates to the **left**: $t_1\,t_2\,t_3$ means $(t_1\,t_2)\,t_3$. Abstraction extends as far **right** as possible: $\lambda x.\,t_1\,t_2$ means $\lambda x.\,(t_1\,t_2)$, not $(\lambda x.\,t_1)\,t_2$. And $\lambda x.\lambda y.\,t$ abbreviates to $\lambda x\,y.\,t$. These are pure [Lesson 1.2](01-02-concrete-and-abstract-syntax.md) concrete-syntax conventions — they save parentheses and mean nothing.

**Definition (free variables).**

$$FV(x) = \{x\} \qquad FV(\lambda x.\,t) = FV(t) \setminus \{x\} \qquad FV(t_1\,t_2) = FV(t_1) \cup FV(t_2)$$

An occurrence of $x$ is **bound** if it lies inside some $\lambda x.\,\cdots$, and **free** otherwise. A term with no free variables is **closed** (a *combinator*). In words: $\lambda$ is the only binder, and it removes its variable from the free set of its body — exactly the scope-stack push of [Lesson 1.6](01-06-name-resolution-and-the-semantic-phase.md), with one name per frame.

**Definition ($\alpha$-equivalence).** Two terms are $\alpha$-equivalent if one can be obtained from the other by consistently renaming bound variables. $\lambda x.\,x \equiv_\alpha \lambda y.\,y$; but $\lambda x.\,z \not\equiv_\alpha \lambda x.\,w$, because $z$ and $w$ are free and refer to something outside. **We work with terms up to $\alpha$-equivalence throughout** — that is, a "term" really means an $\alpha$-equivalence class, and the name of a bound variable is never information.

**Definition (substitution).** $[x := s]\,t$ replaces every free occurrence of $x$ in $t$ by $s$:

$$[x := s]\,x = s \qquad\qquad [x := s]\,y = y \quad (y \ne x)$$

$$[x := s]\,(t_1\,t_2) = ([x := s]\,t_1)\ ([x := s]\,t_2)$$

$$[x := s]\,(\lambda y.\,t) = \begin{cases} \lambda y.\,t & y = x \\ \lambda y.\,[x := s]\,t & y \ne x,\ y \notin FV(s) \\ \lambda y'.\,[x := s]\,([y := y']\,t) & y \ne x,\ y \in FV(s),\ y' \text{ fresh} \end{cases}$$

In words, the three abstraction cases are: stop (the binder shadows $x$, so no occurrence of $x$ below is free); descend (safe); **rename first, then descend** (the binder would capture a free variable of $s$).

**Why the third case exists — variable capture.** Compute $[x := y]\,(\lambda y.\,x\,y)$ naively, by descending without renaming:

$$\lambda y.\ y\,y \qquad \text{(wrong)}$$

The $y$ that was free in the substituted term has been swallowed by the binder, and now refers to the function's own parameter. The term went from "a function that applies the outer $y$ to its argument" to "a function that applies its argument to itself" — a completely different function. Case three renames the binder first:

$$[x := y]\,(\lambda y.\,x\,y) = \lambda y'.\ y\,y' \qquad \text{(correct)}$$

**Capture-avoiding substitution is the only subtle definition in the calculus**, and essentially every practical bug in an implementation of a language with closures, macros or templates is a version of getting it wrong. [Lesson 1.2](01-02-concrete-and-abstract-syntax.md)'s "bind the subexpression to a fresh temporary" rule is the same precaution, and hygienic macro systems exist entirely to automate it.

## Picture

![The term lambda x dot lambda y dot x open paren z y close paren written out, with two curved arcs drawn above it. The first arc runs from the lambda x binder to the occurrence of x and is labelled binds. The second runs from the lambda y binder to the occurrence of y and is also labelled binds. An arrow points up at z from below labelled free. Text below states that the free variable set is z alone, that renaming x or y changes nothing, which is what alpha-equivalence says, and that renaming z changes the term because z refers to something outside. A final line notes that lambda a dot lambda b dot a open paren z b close paren is the same term while lambda x dot lambda y dot x open paren w y close paren is not.](assets/03-01-fig1.svg)

The arcs are the resolution pointers of [Lesson 1.6](01-06-name-resolution-and-the-semantic-phase.md), drawn on a term instead of a program. Once they are drawn, the *letters* are redundant — which is the content of $\alpha$-equivalence, and the basis of an implementation technique (de Bruijn indices) that replaces each variable by the number of binders between it and its own, eliminating names entirely.

## Worked examples

**Example 1 (mechanical): free variables and $\alpha$-equivalence.**

| term | $FV$ | closed? |
|---|---|---|
| $\lambda x.\,x$ | $\emptyset$ | yes |
| $\lambda x.\,y$ | $\{y\}$ | no |
| $(\lambda x.\,x)\,(\lambda y.\,y\,z)$ | $\{z\}$ | no |
| $\lambda x.\,\lambda y.\,x\,(z\,y)$ | $\{z\}$ | no |
| $\lambda f.\,\lambda x.\,f\,(f\,x)$ | $\emptyset$ | yes |

And two $\alpha$-equivalence checks:

- $\lambda x.\,\lambda y.\,x\,y \;\equiv_\alpha\; \lambda a.\,\lambda b.\,a\,b$ — consistent renaming of both binders. ✓
- $\lambda x.\,\lambda y.\,x\,y \;\not\equiv_\alpha\; \lambda x.\,\lambda y.\,y\,x$ — this swaps *which binder* each occurrence points at, which changes the arcs, not just the letters. ✗

The test is always the arcs: if the binding structure is identical, the terms are $\alpha$-equivalent regardless of spelling; if any arc moves, they are not.

**Example 2 (why you'd care): the same bug in three languages.** Capture is not an exotic concern about a toy calculus. Here it is three times.

*In a naive macro system.* Define `SWAP(a, b)` to expand to `{ int tmp = a; a = b; b = tmp; }`. Now call `SWAP(tmp, x)`. The expansion is

```
{ int tmp = tmp; tmp = x; x = tmp; }
```

The caller's `tmp` has been captured by the macro's own binder. This is exactly $[x := y](\lambda y.\ \cdots)$, and it is why C programmers historically named macro locals `__tmp_unlikely_name__` and why Scheme and Rust have **hygienic** macros that rename automatically — case three of the substitution definition, automated.

*In a template or generic.* The same problem arises when a type parameter's name collides with a type in scope at the instantiation site, which is why substitution in type systems ([Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md)) is defined capture-avoidingly too.

*In an optimizing compiler.* Inlining a function body into a caller substitutes the call's arguments for the parameters. If the caller happens to have a local with the same name as one of the callee's locals, and the inliner does not rename, the caller's variable is captured. Real compilers avoid this by renaming to fresh names during inlining — which is one of the motivations for SSA form in [Lesson 7.2](07-02-control-flow-graphs-dominance-and-ssa.md), where every variable has exactly one definition and collisions are impossible by construction.

**The single definition in this lesson turns out to be the correctness condition for macros, generics and inlining.** That is the case for learning it properly here, where there is nothing else going on.

## Watch out

- **You might think** the third substitution case is a rare edge case that rarely fires — **but actually** it fires whenever you substitute a term containing a free variable under a binder of the same name, which in an inliner or macro expander is a routine occurrence. It is rare in hand-written examples and common in machine-generated ones, which is the worst combination.
- **You might think** $\lambda x.\,y$ and $\lambda x.\,z$ might be $\alpha$-equivalent since neither mentions $x$ — **but actually** $y$ and $z$ are *free*, so they denote whatever the surrounding context binds them to, and renaming them changes the term's meaning. $\alpha$-equivalence renames **bound** variables only.
- **You might think** restricting to one-argument functions loses expressiveness — **but actually** currying recovers multi-argument functions exactly, and $\lambda x.\lambda y.\,t$ applied to two arguments behaves identically to a two-argument function. What it does change is *partial* application, which becomes free — and that is a gain.

## One-liner

> Three constructs, one rule, and the only genuinely delicate definition is substitution — which must rename a binder rather than let it capture a free variable, and which is the correctness condition for every macro expander and inliner ever written.

## Problems

**P1 (🟢)** For each term, list $FV$ and say whether it is closed.

(a) $\lambda x.\,x\,y$
(b) $(\lambda x.\,x)\,x$
(c) $\lambda x.\,\lambda y.\,\lambda z.\,x\,z\,(y\,z)$
(d) $\lambda x.\,(\lambda y.\,y)\,z$

**P2 (🟡)** Compute each substitution, applying the rename case where required and naming it when you do.

(a) $[x := \lambda z.\,z]\,(\lambda y.\ x\,y)$
(b) $[x := y]\,(\lambda y.\ x\,y)$
(c) $[x := y\,z]\,(\lambda z.\ x)$
(d) $[x := w]\,(\lambda x.\ x\,y)$

**P3 (🔴)** Restore the parentheses that the conventions elide, then answer (d).

(a) $\lambda x.\,x\,y\,z$
(b) $(\lambda x.\,x)\,\lambda y.\,y\,w$
(c) $\lambda f.\,\lambda x.\,f\,(f\,x)\,x$
(d) One of (a)–(c) changes meaning if abstraction were made to extend only as far as the next application rather than as far right as possible. Say which, give both readings, and state which convention real functional languages use.

<details>
<summary>Solutions</summary>

**P1**

(a) $\lambda x.\,x\,y$: the $x$ is bound by the $\lambda$, the $y$ is not. $FV = \{y\}$. **Not closed.**

(b) $(\lambda x.\,x)\,x$: inside the abstraction $x$ is bound, but the $x$ on the right of the application is outside it and free. $FV = \{x\}$. **Not closed.** (The same letter appears bound and free in one term, which is legal and a good reason to work up to $\alpha$-equivalence: rename to $(\lambda a.\,a)\,x$ and the situation is clearer.)

(c) $\lambda x.\,\lambda y.\,\lambda z.\,x\,z\,(y\,z)$: all three of $x$, $y$, $z$ are bound by the three binders. $FV = \emptyset$. **Closed.** (This is the combinator $S$ — see [Lesson 4.3](04-03-unification-and-hindley-milner.md).)

(d) $\lambda x.\,(\lambda y.\,y)\,z$: $y$ is bound, $x$ is bound but unused, $z$ is free. $FV = \{z\}$. **Not closed.**

**P2**

(a) $[x := \lambda z.\,z]\,(\lambda y.\ x\,y)$. The binder is $y$, which differs from $x$, and $FV(\lambda z.\,z) = \emptyset$, so $y \notin FV(s)$ — **case two, descend safely**:

$$= \lambda y.\ (\lambda z.\,z)\ y$$

(b) $[x := y]\,(\lambda y.\ x\,y)$. The binder is $y$ and $FV(y) = \{y\}$, so $y \in FV(s)$ — **case three, rename the binder first**. Choose fresh $y'$:

$$= \lambda y'.\ y\ y'$$

Not $\lambda y.\,y\,y$, which would have captured the substituted $y$. This is the Picture's case.

(c) $[x := y\,z]\,(\lambda z.\ x)$. The binder is $z$ and $FV(y\,z) = \{y, z\}$, so $z \in FV(s)$ — **case three, rename**:

$$= \lambda z'.\ y\,z$$

Renaming the binder to $z'$ leaves the substituted $z$ free, as it must be. Descending without renaming would give $\lambda z.\,y\,z$, in which the $z$ from the argument is now the parameter — wrong.

(d) $[x := w]\,(\lambda x.\ x\,y)$. The binder **is** $x$ — **case one, stop immediately**:

$$= \lambda x.\ x\,y$$

No occurrence of $x$ inside is free, so nothing is replaced. This is shadowing, and it is the same rule as the scope-stack lookup stopping at the first frame in [Lesson 1.6](01-06-name-resolution-and-the-semantic-phase.md).

**P3**

(a) $\lambda x.\,x\,y\,z$. Abstraction extends maximally right, so the body is everything after the dot; application associates left within it:

$$\lambda x.\,((x\,y)\,z)$$

(b) $(\lambda x.\,x)\,\lambda y.\,y\,w$. The first abstraction is explicitly parenthesized; the second extends maximally right:

$$(\lambda x.\,x)\ (\lambda y.\ (y\,w))$$

(c) $\lambda f.\,\lambda x.\,f\,(f\,x)\,x$. Both binders extend maximally right, and the body $f\,(f\,x)\,x$ associates left:

$$\lambda f.\ \lambda x.\ ((f\,(f\,x))\ x)$$

(d) **(b)** is the one. Under the maximal-extent convention it reads as above: the identity applied to the single argument $\lambda y.\,(y\,w)$, which $\beta$-reduces to $\lambda y.\,y\,w$.

Under the alternative — abstraction extending only to the end of the next application — the term would parse as

$$((\lambda x.\,x)\ (\lambda y.\,y))\ w$$

the identity applied to the identity, all applied to $w$, which reduces to $w$. **Completely different results**: a function under one reading, the variable $w$ under the other.

(Terms (a) and (c) are unaffected: in both, the abstraction is outermost and there is nothing to its right that could fall outside its body under either convention.)

Real functional languages use the **maximal-extent** convention. Haskell's `\y -> y w`, OCaml's `fun y -> y w` and Scheme's parenthesized `(lambda (y) (y w))` all take the body to run to the end of the enclosing expression, so `f (\y -> y) w` needs no parentheses around the lambda for it to be a complete argument, and `\y -> y w` never means `(\y -> y) w`. This is why a lambda in an argument position is so often written with explicit parentheses even when they are not required — the maximal-extent rule is correct but easy to misread.

</details>

## Flashback

**From Lesson 2.3 (Denotational semantics and least fixed points):** A variable's denotation cannot be an integer; it is a function $\lambda s.\,s(x)$ from states to integers, and the general move is "when a meaning depends on context, make the meaning a function of the context".

In this lesson, a term with free variables is *not closed*.

(a) Connect the two: state what a term's free variable set corresponds to in the denotational picture.
(b) A closed term needs no environment. State what its denotation is a function of, and give one closed term from Example 1 whose denotation you can name outright.

<details>
<summary>Solution</summary>

(a) A term's free variable set is exactly **the part of the context its meaning depends on**. Where [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md) made $[\![ a ]\!]$ a function of the whole state $s$, here $[\![ t ]\!]$ is a function of an environment $\rho$ — and it only ever consults $\rho$ at the names in $FV(t)$. Two environments agreeing on $FV(t)$ give $t$ the same meaning, which is the precise sense in which $FV$ is the term's interface to the outside world.

This is why $\lambda x.\,y$ and $\lambda x.\,z$ are not $\alpha$-equivalent, as the Watch-out noted: they read different slots of $\rho$, so they are different functions of the context. And it is why bound names are immaterial: a bound name is never looked up in $\rho$ at all — the $\lambda$ supplies it — so its spelling cannot affect anything.

(b) A **closed** term has $FV = \emptyset$, so its denotation consults no slot of $\rho$ and is therefore a **constant function of the environment** — equivalently, just a value, the same one in every context. That is what makes closed terms self-contained enough to be called *combinators*, and why they can be shipped around, cached, and evaluated once.

From Example 1: $\lambda x.\,x$ denotes the **identity function**. Its meaning is fixed with no context whatever, which is why `id` means the same thing in every program that defines it.

(The interesting case is in between. An open term's denotation is a genuine function of $\rho$, and pairing such a term with a *particular* $\rho$ — freezing the context it needs — is precisely what a **closure** is. That is [Lesson 6.1](06-01-names-scope-and-closures.md), and $FV$ is exactly the list of what a closure must capture.)

</details>

## Connections

- **Backward:** binding and free variables are [Lesson 1.6](01-06-name-resolution-and-the-semantic-phase.md)'s resolution problem with one name per scope, and the conventions in the Formal version are [Lesson 1.2](01-02-concrete-and-abstract-syntax.md)'s concrete syntax. The fresh-temporary rule for desugaring is capture-avoidance in another costume.
- **Forward:** [Lesson 3.2](03-02-church-encodings-and-beta-reduction.md) adds the one computation rule and shows this three-form calculus encoding booleans, numbers and pairs. Substitution is the engine of $\beta$-reduction there, of the typing rules in [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md), and of type substitution in [Lesson 4.3](04-03-unification-and-hindley-milner.md). $FV$ is the capture list of a closure in [Lesson 6.1](06-01-names-scope-and-closures.md).
- **Sideways:** $\lambda$-abstraction and application are a cartesian closed category's exponential and evaluation map — the currying adjunction $(-\times A) \dashv (-)^A$ of [`category-theory` 3.4](../../category-theory/lessons/03-04-adjoint-functors.md) is *exactly* the statement that a two-argument function is the same as a function returning a function. [Lesson 5.5](05-05-effects-monads-and-the-categorical-view.md) makes that correspondence precise.
