# Programming Languages · Lesson 4.2: Type checking and the Curry–Howard correspondence

> ⏱ ~15 min · Module 4: Type systems · Builds on: [4.1 (the simply-typed lambda calculus)](04-01-the-simply-typed-lambda-calculus.md), [2.1 (small-step semantics)](02-01-small-step-operational-semantics.md) · Unlocks: [4.3 (unification and Hindley–Milner)](04-03-unification-and-hindley-milner.md), [5.5 (effects and monads)](05-05-effects-monads-and-the-categorical-view.md)

## Why this matters

Two things, and they turn out to be one thing.

**The algorithm.** [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md) gave rules; rules are not a program. The rules as written are *syntax-directed*, so a naive recursive walk works — but real type systems are not fully syntax-directed, and the technique that saves them, **bidirectional** type checking, is worth learning here where it is easy. It is also what makes good error messages possible, because it decides where a type is *expected* and where it is *produced*, which is exactly the information an error message needs.

**The correspondence.** Write the typing rules next to the rules of intuitionistic propositional logic and they are the *same rules*, symbol for symbol. This is not a metaphor and not a loose analogy: it is an isomorphism, discovered independently several times, and it is the foundation of every proof assistant in use. A term is a proof, a type is a proposition, and running a program is normalizing a proof.

## The idea

**Checking versus synthesis.** A type checker has two modes, and separating them is the whole technique:

- **Synthesis** $\Gamma \vdash e \Rightarrow \tau$ — "I can work out $e$'s type from $e$ alone." Variables synthesize (look them up); applications synthesize (from the function's type).
- **Checking** $\Gamma \vdash e \Leftarrow \tau$ — "given that $\tau$ is expected here, is $e$ acceptable?" Abstractions check naturally: to check $\lambda x.\,e$ against $\tau_1 \to \tau_2$, put $x{:}\tau_1$ in the context and check $e$ against $\tau_2$ — and note **no annotation was needed**, because the expected type supplied it.

That last point is why real languages need so few annotations. You write the type of a top-level function once and it flows inward, checking every lambda inside it.

**The correspondence.** Take the typing rule for application and the logical rule modus ponens:

$$\frac{\Gamma \vdash e_1 : \tau_1 \to \tau_2 \qquad \Gamma \vdash e_2 : \tau_1}{\Gamma \vdash e_1\,e_2 : \tau_2} \qquad\qquad \frac{\Gamma \vdash A \Rightarrow B \qquad \Gamma \vdash A}{\Gamma \vdash B}$$

Delete the terms from the left and you have the right. Delete the propositions from the right and add terms and you have the left. Every rule pairs off this way, and the pairing is a bijection: **a type is inhabited if and only if the corresponding proposition is provable, and the inhabitant is the proof.**

## The formal version

**Bidirectional rules.** Split the judgment in two, and the annotations move to exactly one place.

$$\frac{x : \tau \in \Gamma}{\Gamma \vdash x \Rightarrow \tau} \qquad \frac{\Gamma \vdash e_1 \Rightarrow \tau_1 \to \tau_2 \qquad \Gamma \vdash e_2 \Leftarrow \tau_1}{\Gamma \vdash e_1\,e_2 \Rightarrow \tau_2}$$

$$\frac{\Gamma, x{:}\tau_1 \vdash e \Leftarrow \tau_2}{\Gamma \vdash \lambda x.\,e \Leftarrow \tau_1 \to \tau_2} \qquad \frac{\Gamma \vdash e \Rightarrow \tau}{\Gamma \vdash e \Leftarrow \tau}\;(\mathsf{sub}) \qquad \frac{\Gamma \vdash e \Leftarrow \tau}{\Gamma \vdash (e : \tau) \Rightarrow \tau}\;(\mathsf{ann})$$

Read the application rule: **the function synthesizes, the argument checks.** The function's type tells you what the argument must be, so you never have to guess — you always have an expected type when you descend into an argument. The $(\mathsf{sub})$ rule is where the two modes meet: when checking $e$ against $\tau$ and $e$ happens to synthesize, synthesize and compare. And $(\mathsf{ann})$ is the escape hatch: an explicit annotation turns a checkable term into a synthesizing one.

**The consequence for annotations.** A term needs an annotation exactly where a $\lambda$ appears in a position with no expected type — that is, at the head of a redex or at the top level. So `map (\x -> x + 1) xs` needs none (`map`'s type supplies the expectation) while a bare `\x -> x + 1` at the top level does. That rule of thumb is the practical content of bidirectionality, and it explains the annotation discipline of Scala, TypeScript, Rust and modern Haskell.

**The Curry–Howard correspondence.** The dictionary:

| Types | Logic |
|---|---|
| type $\tau$ | proposition |
| term $e : \tau$ | proof of $\tau$ |
| $\tau_1 \to \tau_2$ | $\tau_1 \Rightarrow \tau_2$ (implication) |
| $\tau_1 \times \tau_2$ (pair) | $\tau_1 \wedge \tau_2$ (conjunction) |
| $\tau_1 + \tau_2$ (sum) | $\tau_1 \vee \tau_2$ (disjunction) |
| $\mathsf{Unit}$ | $\top$ (truth) |
| $\mathsf{Void}$ (uninhabited) | $\bot$ (falsehood) |
| $\mathsf{T\text{-}App}$ | modus ponens |
| $\mathsf{T\text{-}Abs}$ | implication introduction (discharge an assumption) |
| $\beta$-reduction | proof normalization (cut elimination) |
| $\forall \alpha.\ \tau$ ([Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md)) | universal quantification |

**Theorem (Curry–Howard).** $\tau$ is inhabited by a closed term of the simply-typed lambda calculus **iff** the corresponding formula is a theorem of intuitionistic propositional logic.

The logic is **intuitionistic**, not classical, and that restriction is exactly right. Classical logic's extra axiom is the law of excluded middle, $A \vee \neg A$, and its type is $\forall \alpha.\ \alpha + (\alpha \to \mathsf{Void})$ — a term of that type would have to *decide*, for an arbitrary type $\alpha$, whether it is inhabited, producing either an $\alpha$ or a refutation. No program can do that, so the type is uninhabited, and the logic you get from types is constructive. **A proof in this system always carries a program that computes the witness**, which is why proof assistants can extract running code from proofs.

## Picture

![A two-column table split by a dashed vertical line, with TYPES on the left and LOGIC on the right. The rows pair type with proposition, term with proof, A arrow B with A implies B, A times B pair with A and B, A plus B sum with A or B, Void the empty type with falsehood, Unit with truth, function application with modus ponens, and beta-reduction with proof normalization. A caption states that an inhabited type is a provable proposition and that a term of that type is the proof.](assets/04-02-fig1.svg)

The dashed line is the only thing separating the two columns, and it is doing no work. Any question you can ask on one side is the same question on the other — "does a program of this type exist?" is "is this proposition provable?", and "does this program terminate?" is "does this proof normalize?" ([Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md)'s strong normalization is cut elimination, which is why a total language must stay total to stay consistent).

## Worked examples

**Example 1 (mechanical): read three types as propositions and find the proofs.**

*(a)* $\alpha \to \alpha$. As a proposition: $A \Rightarrow A$. Provable trivially, and the proof is the identity:

$$\lambda x.\,x$$

*(b)* $\alpha \to \beta \to \alpha$. As a proposition: $A \Rightarrow (B \Rightarrow A)$ — "if $A$, then $B$ implies $A$", a theorem (assume $A$, assume $B$, you still have $A$). The proof is the $K$ combinator:

$$\lambda x.\,\lambda y.\,x$$

*(c)* $(\alpha \to \beta \to \gamma) \to (\alpha \to \beta) \to \alpha \to \gamma$. As a proposition, this is the axiom schema $S$ of propositional logic. The proof is the $S$ combinator:

$$\lambda f.\,\lambda g.\,\lambda x.\ f\,x\,(g\,x)$$

**$K$ and $S$ are exactly the two axiom schemes of the standard Hilbert system for implicational intuitionistic logic**, and that is not a coincidence: they are the two combinators from which every closed lambda term can be built. The proof system and the programming language were the same object, written by different communities.

**Example 2 (why you'd care): a type with no program, and why.** Consider

$$\alpha \to \beta$$

Is there a closed term of this type? As a proposition it reads $A \Rightarrow B$ for *arbitrary, unrelated* $A$ and $B$, which is plainly not a theorem. And the program side says the same thing more concretely: such a term would be a function that, handed a value of a type it knows nothing about, produces a value of a *different* type it knows nothing about. It has no way to make one — it cannot construct a $\beta$ from thin air, and the $\alpha$ it was given is useless.

Now a subtler one:

$$((\alpha \to \beta) \to \alpha) \to \alpha$$

This is **Peirce's law**, and it is a theorem of classical logic and not of intuitionistic logic. So there is *no* closed simply-typed term of this type, even though a classical mathematician would call the proposition true. Adding a term for it to a language is exactly adding classical reasoning — and remarkably, the operator that inhabits it is `call/cc`, the control operator of [Lesson 6.3](06-03-continuations-and-control.md). **First-class continuations are classical logic**, which is one of the more startling facts in this course and completely precise.

**Why this matters to a working programmer.** The correspondence turns "what functions of this type could exist?" into a decidable question you can reason about before writing any code. A signature like

```
forall a. [a] -> [a]
```

can only permute, duplicate and drop elements — it can never invent one, because there is no way to construct an `a`. That is a theorem about the type, provable without looking at the implementation, and it is [Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md)'s parametricity.

## Watch out

- **You might think** bidirectional checking is a performance optimization — **but actually** it is about *where information flows*. It lets a language get away with far fewer annotations and, just as importantly, decides which of two subterms an error is blamed on. A checker that only synthesizes reports errors at the point of mismatch, which is often far from the mistake.
- **You might think** Curry–Howard is an analogy — **but actually** it is a bijection between typing derivations and proof trees, and the theorem is an "if and only if". Proof assistants like Coq, Agda, Lean and Idris are built directly on it: you write a program, and its type is the statement you proved.
- **You might think** every true proposition has a program — **but actually** the logic is intuitionistic, so excluded middle and Peirce's law have no proof terms. Classical theorems correspond to control operators, not to ordinary functions, and a language without `call/cc` is a constructive logic whether its designers intended that or not.

## One-liner

> Split the judgment into "I can work this out" and "here is what I expect", and annotations nearly vanish — and the rules you are left with are, symbol for symbol, the rules of intuitionistic logic, with programs as proofs.

## Problems

**P1 (🟢)** For each type, give a closed term inhabiting it, or state that none exists.

(a) $\alpha \to \beta \to \beta$
(b) $(\alpha \to \beta) \to (\beta \to \gamma) \to \alpha \to \gamma$
(c) $\alpha \to (\alpha \to \beta) \to \beta$
(d) $(\alpha \to \beta) \to \alpha$

**P2 (🟡)** Using the bidirectional rules, say for each term whether it needs an annotation, and if so where and why.

(a) $\lambda x.\ x$, at the top level with no expected type
(b) $\lambda x.\ x$, as the argument of a function of known type $(\mathsf{Nat} \to \mathsf{Nat}) \to \mathsf{Nat}$
(c) $(\lambda x.\ x)\ \overline{3}$
(d) $f\,(\lambda x.\ x)$, where $f : (\mathsf{Bool} \to \mathsf{Bool}) \to \mathsf{Bool}$ is in the context

**P3 (🔴)** Let $\mathsf{Void}$ be the empty type (no constructors, no closed inhabitants) and define $\neg \tau = \tau \to \mathsf{Void}$.

(a) Give a closed term of type $\alpha \to \neg\neg\alpha$, and state the logical theorem it proves.
(b) State whether there is a closed term of type $\neg\neg\alpha \to \alpha$, and say what its existence would mean logically.
(c) Parts (a) and (b) are not symmetric. Explain the asymmetry in terms of what a program of each type would have to *do*.
(d) Given (b), name the operator from later in this course that inhabits the classically-valid Peirce's law $((\alpha \to \beta) \to \alpha) \to \alpha$, and state in one sentence what its presence does to the logic a language corresponds to.

<details>
<summary>Solutions</summary>

**P1**

(a) $\alpha \to \beta \to \beta$. Inhabited:

$$\lambda x.\ \lambda y.\ y$$

Take an $\alpha$, ignore it, take a $\beta$, return it. Logically $A \Rightarrow (B \Rightarrow B)$, which is a theorem since $B \Rightarrow B$ is.

(b) $(\alpha \to \beta) \to (\beta \to \gamma) \to \alpha \to \gamma$. Inhabited — this is **function composition** with the arguments in diagrammatic order:

$$\lambda f.\ \lambda g.\ \lambda x.\ g\,(f\,x)$$

Logically it is the transitivity of implication: from $A\Rightarrow B$ and $B\Rightarrow C$ conclude $A \Rightarrow C$.

(c) $\alpha \to (\alpha \to \beta) \to \beta$. Inhabited — apply the function to the value:

$$\lambda x.\ \lambda f.\ f\,x$$

Logically this is modus ponens with its premises swapped. (It is also the Church encoding pattern from [Lesson 3.2](03-02-church-encodings-and-beta-reduction.md): a value packaged as "give me a consumer and I will feed myself to it" — which is exactly a continuation, [Lesson 6.3](06-03-continuations-and-control.md).)

(d) $(\alpha \to \beta) \to \alpha$. **No closed term exists.** Logically it claims $(A \Rightarrow B) \Rightarrow A$ for arbitrary unrelated $A$ and $B$, which is not a theorem — take $A$ false and $B$ false, then $A \Rightarrow B$ is true and $A$ is false.

Program-side, the same fact: the term is handed a function from $\alpha$ to $\beta$ and must produce an $\alpha$. It cannot call the function (it has no $\alpha$ to pass), and it has no other source of an $\alpha$. There is nothing it can do.

**P2**

(a) **Needs an annotation.** $\lambda x.\,x$ is a *checkable* form — the only rule for $\lambda$ concludes $\Leftarrow$ — so with no expected type there is nothing to check against and no rule applies. Write $(\lambda x.\,x : \mathsf{Nat} \to \mathsf{Nat})$, which the $(\mathsf{ann})$ rule turns into a synthesizing term.

(b) **No annotation needed.** The function's type is known, so the application rule checks the argument against the expected domain $\mathsf{Nat} \to \mathsf{Nat}$; the $\lambda$ rule then puts $x{:}\mathsf{Nat}$ in the context and checks the body against $\mathsf{Nat}$. The expected type supplied everything the annotation would have.

(c) **Needs an annotation**, on the $\lambda$. To synthesize a type for the application, the function position must *synthesize* — and $\lambda x.\,x$ does not. So this is the redex case mentioned in the Formal version: a $\lambda$ at the head of an application has no expected type. Write $((\lambda x.\,x : \mathsf{Nat} \to \mathsf{Nat})\ \overline{3})$.

(d) **No annotation needed.** $f$ is in the context so it synthesizes $(\mathsf{Bool}\to\mathsf{Bool}) \to \mathsf{Bool}$; the application rule then checks $\lambda x.\,x$ against $\mathsf{Bool}\to\mathsf{Bool}$, which succeeds with $x{:}\mathsf{Bool}$.

Comparing (c) and (d) gives the practical rule precisely: **the head of a redex needs an annotation, an argument does not** — which is why you almost never annotate lambdas passed to `map` or `filter`, and why a `let`-bound function usually does want a signature.

**P3**

(a) $\alpha \to \neg\neg\alpha$ unfolds to $\alpha \to ((\alpha \to \mathsf{Void}) \to \mathsf{Void})$. Inhabited:

$$\lambda x.\ \lambda k.\ k\,x$$

Take an $\alpha$, take a refutation $k$ of $\alpha$, and feed the value to the refutation to obtain $\mathsf{Void}$.

Logically it proves $A \Rightarrow \neg\neg A$ — **double-negation introduction**, which is a theorem of intuitionistic logic.

(Note this is P1(c) with $\beta := \mathsf{Void}$. The same program proves both, which is the correspondence doing real work: one term, two readings.)

(b) **No closed term exists.** Its existence would mean $\neg\neg A \Rightarrow A$ — **double-negation elimination** — is intuitionistically provable. It is not; it is equivalent to the law of excluded middle and to Peirce's law, and all three are exactly the axioms separating classical from intuitionistic logic.

(c) The asymmetry is about what each program must *construct*.

For (a), the program is **handed** an $\alpha$ as its first argument. Everything it needs is in hand; it just routes the value to the continuation. Constructing the output $\mathsf{Void}$ is never actually required — the term never returns normally, it hands off to $k$ — so no impossible construction occurs.

For (b), the program is handed only a *function* of type $(\alpha \to \mathsf{Void}) \to \mathsf{Void}$ and must **produce an $\alpha$**. To call its argument it would need a refutation $\alpha \to \mathsf{Void}$, which it has no way to build (that would require producing a $\mathsf{Void}$ from an $\alpha$, and $\mathsf{Void}$ has no inhabitants). And even if it could call the argument, the call returns $\mathsf{Void}$, not $\alpha$. There is no route to an $\alpha$ at all.

In one line: **(a) only has to route a value it was given; (b) has to manufacture one out of a proof that it cannot fail to exist.** "It cannot fail to exist" is not the same as "here it is", and that gap is precisely what constructive logic refuses to cross.

(d) **`call/cc`** — the call-with-current-continuation operator of [Lesson 6.3](06-03-continuations-and-control.md).

Its presence makes the language correspond to **classical** rather than intuitionistic logic: a program can capture its continuation, which is exactly the ability to "assume the negation, derive a contradiction, and jump back", so every classical theorem acquires a proof term. The cost is that the program's value may now depend on control flow that is not visible in its type, which is the computational face of classical logic being non-constructive — a classical proof no longer hands you the witness directly.

</details>

## Flashback

**From Lesson 2.1 (Small-step operational semantics and rule induction):** A judgment holds exactly when there is a **finite derivation tree** of rule applications ending in it, and nothing else holds — which is what makes rule induction a valid proof technique.

Typing is also given by inference rules.

(a) State what "a finite derivation tree ending in $\Gamma \vdash e : \tau$" *is*, under the Curry–Howard reading.
(b) A typing derivation for a term of type $\tau$ is finite. Use this, plus the reading in (a), to say why a language whose types have no inhabitant for $\mathsf{Void}$ is logically consistent — and what [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md)'s $\mathsf{fix}$ rule does to that argument.

<details>
<summary>Solution</summary>

(a) Under Curry–Howard it **is a proof** — literally, not by analogy. The derivation tree for $\Gamma \vdash e : \tau$ is a natural-deduction proof of the proposition $\tau$ from the assumptions in $\Gamma$, with each typing rule playing the role of the corresponding logical rule: $\mathsf{T\text{-}Var}$ is "use an assumption", $\mathsf{T\text{-}Abs}$ is implication introduction (discharging the assumption $x{:}\tau_1$), and $\mathsf{T\text{-}App}$ is modus ponens.

The term $e$ is the proof written in linear notation; the tree is the same proof written as a tree. Type *checking* is proof checking, which is why a proof assistant's trusted core can be small: it need only verify a derivation, not find one.

(b) **Consistency argument.** A logic is consistent when falsehood has no proof. Under the correspondence, falsehood is $\mathsf{Void}$ and a proof of it is a closed term of type $\mathsf{Void}$. So "no closed term inhabits $\mathsf{Void}$" *is* the consistency statement.

Why the simply-typed calculus has that property: $\mathsf{Void}$ has no introduction rule — no constructor produces one — so a closed term of type $\mathsf{Void}$ could only arise by eliminating something, and strong normalization ([Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md)) says every well-typed term reduces to a normal form. A closed normal-form term of type $\mathsf{Void}$ would have to be built by some constructor, and there is none. So none exists, and the logic is consistent.

**What $\mathsf{fix}$ does to it: destroys it.** The rule $\dfrac{\Gamma \vdash e : \tau \to \tau}{\Gamma \vdash \mathsf{fix}\ e : \tau}$ inhabits *every* type — including $\mathsf{Void}$, via $\mathsf{fix}\ (\lambda x{:}\mathsf{Void}.\ x)$. Under Curry–Howard that is a proof of falsehood, so the logic becomes inconsistent and every proposition becomes provable.

Of course the term diverges: it never produces a value, so no *contradiction is ever computed*. But logical consistency is a statement about whether a proof term **exists**, not about whether it terminates — and that is exactly why the two goals split. A programming language accepts the inconsistency because it only cares that well-typed programs do not get *stuck* ([Lesson 4.5](04-05-type-soundness-progress-and-preservation.md)), and a divergent program is not stuck. A proof assistant cannot, because a non-terminating "proof" of falsehood is still a proof of falsehood — which is why Agda and Coq enforce termination checking and reject general recursion, and why [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md) P3(d) said they cannot simply adopt the rule.

</details>

## Connections

- **Backward:** the rules being syntax-directed is [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md)'s observation, made into an algorithm; the derivation-tree-as-proof reading is [Lesson 2.1](02-01-small-step-operational-semantics.md)'s inductive definitions seen through Curry–Howard.
- **Forward:** [Lesson 4.3](04-03-unification-and-hindley-milner.md) removes the annotations bidirectionality still needs, by solving equations. The $\forall$ row of the dictionary is [Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md), where "what can a function of this type possibly do?" becomes a theorem. `call/cc` and its classical logic are [Lesson 6.3](06-03-continuations-and-control.md); the categorical third leg of the correspondence is [Lesson 5.5](05-05-effects-monads-and-the-categorical-view.md).
- **Sideways:** the logic side is [`mathematical-logic` 1.4](../../mathematical-logic/lessons/01-04-proof-system-completeness.md)'s natural deduction, and the constructive restriction connects to [`mathematical-logic` 5.1](../../mathematical-logic/lessons/05-01-incompleteness-first-theorem.md)'s concern with what a proof *exhibits*. The categorical leg — cartesian closed categories as models of this calculus — is [`category-theory` 4.3](../../category-theory/lessons/04-03-applications-higher-categories.md)'s Curry–Howard–Lambek triangle.
