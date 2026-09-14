# Programming Languages · Lesson 4.5: Type soundness — progress and preservation

> ⏱ ~15 min · Module 4: Type systems · Builds on: [4.4 (polymorphism and parametricity)](04-04-polymorphism-system-f-and-parametricity.md), [2.1 (small-step semantics)](02-01-small-step-operational-semantics.md) · Unlocks: [5.1 (algebraic data types)](05-01-algebraic-data-types-and-pattern-matching.md), [5.2 (subtyping and variance)](05-02-subtyping-records-and-variance.md)

## Why this matters

"Well-typed programs don't go wrong" is the slogan every type system is sold on. This lesson is where it stops being a slogan.

Making it a theorem requires three things, and every one has already been built. It requires a precise meaning for "go wrong", which is [Lesson 2.1](02-01-small-step-operational-semantics.md)'s **stuck**. It requires a small-step semantics, because the claim is about states *reachable mid-computation*, which [Lesson 2.2](02-02-big-step-semantics-and-environments.md) showed big-step cannot describe. And it requires the typing rules of [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md).

The proof splits into two lemmas that are worth knowing by name, because when you add a feature to a language — subtyping, exceptions, mutable state, each of Module 5 — the way you check you have not broken anything is to re-prove exactly these two. **Which one fails tells you what kind of mistake you made**, and [Lesson 5.2](05-02-subtyping-records-and-variance.md) contains a famous case where one of them does.

## The idea

Soundness is the claim that a well-typed program never reaches a state where the semantics has nothing to say. It follows from two lemmas that fit together as an induction.

- **Progress:** a well-typed term is either a value or can take a step. *It is not stuck right now.*
- **Preservation** (subject reduction): if a well-typed term steps, the result is well-typed, **at the same type**. *Whatever it stepped to is still covered.*

Chain them. Start with a well-typed term. Progress says it is a value (done) or steps. Preservation says what it stepped to is well-typed. Apply progress again. By induction, **no state in the whole computation is ever stuck.** The computation either reaches a value or runs forever; those are the only outcomes.

Note what is *not* claimed. Soundness says nothing about termination — a well-typed program may loop forever, which is exactly what adding $\mathsf{fix}$ in [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md) allowed. Divergence is not going wrong.

## The formal version

**Definition (stuck).** A term is **stuck** if it is not a value and no evaluation rule applies. This is [Lesson 2.1](02-01-small-step-operational-semantics.md)'s definition; $\mathsf{if}\ \overline{3}\ \mathsf{then}\ \cdots$ and $\mathsf{true}\ \overline{5}$ (applying a boolean) are the canonical examples.

**Lemma (canonical forms).** If $\vdash v : \tau_1 \to \tau_2$ and $v$ is a value, then $v$ has the form $\lambda x{:}\tau_1.\,e$. If $\vdash v : \mathsf{Bool}$ and $v$ is a value, then $v$ is $\mathsf{true}$ or $\mathsf{false}$.

In words: **a value's type determines its shape.** This unglamorous lemma is the workhorse — it is what lets progress conclude that the thing in function position really is a function, and it is proved by inspecting which typing rules can conclude each type.

**Theorem (progress).** If $\vdash e : \tau$ (in the *empty* context), then $e$ is a value or there is an $e'$ with $e \to e'$.

*Proof sketch.* Induction on the typing derivation.

- $\mathsf{T\text{-}Var}$: impossible — the context is empty, so no variable is well-typed here. (This is why progress needs closed terms.)
- $\mathsf{T\text{-}Abs}$: an abstraction is a value. Done.
- $\mathsf{T\text{-}App}$, with $\vdash e_1 : \tau_1\to\tau_2$ and $\vdash e_2 : \tau_1$. By the induction hypothesis $e_1$ is a value or steps; if it steps, the congruence rule steps the application. If $e_1$ is a value, canonical forms says it is $\lambda x{:}\tau_1.\,e$. Apply the hypothesis to $e_2$: if it steps, step; if it is a value, $\beta$ applies. **In every case a rule fires.** $\blacksquare$

**Theorem (preservation).** If $\Gamma \vdash e : \tau$ and $e \to e'$, then $\Gamma \vdash e' : \tau$.

*Proof sketch.* Induction on the typing derivation, with one non-trivial case: $\beta$-reduction, $(\lambda x{:}\tau_1.\,e)\,v \to [x := v]\,e$. To conclude $\Gamma \vdash [x:=v]\,e : \tau_2$ you need the

**Substitution lemma.** If $\Gamma, x{:}\tau_1 \vdash e : \tau_2$ and $\Gamma \vdash v : \tau_1$, then $\Gamma \vdash [x := v]\,e : \tau_2$.

In words: substituting a term of the right type for a variable preserves the type of the whole. This is the technical heart, it is proved by induction on $e$, and it is where the capture-avoidance of [Lesson 3.1](03-01-the-untyped-lambda-calculus.md) earns its keep — a capturing substitution would put the wrong binding in scope and the lemma would be false.

**Theorem (soundness).** If $\vdash e : \tau$ and $e \to^* e'$ with $e'$ irreducible, then $e'$ is a value.

*Proof.* Induction on the length of the reduction. Preservation keeps every intermediate term well-typed; progress says a well-typed term irreducible must be a value. $\blacksquare$

**The two failure modes, and what each means.** When you add a feature and the proof breaks, *which* lemma breaks is diagnostic:

- **Progress fails** ⟹ your rules accept a term the semantics cannot execute. Usually a missing evaluation rule or a typing rule that is too permissive about shape.
- **Preservation fails** ⟹ evaluation can change a term's type, so a value can arrive somewhere its type said it could not. This is the dangerous one: it means a runtime check is needed to restore safety. **Java's covariant arrays fail preservation**, which is why the JVM inserts a store check and throws `ArrayStoreException` — [Lesson 5.2](05-02-subtyping-records-and-variance.md) works it out.

## Picture

![A horizontal chain of four circular nodes labelled t0 through t3, each annotated well-typed, connected by arrows labelled step, with a final arrow leading to the word value. Below the chain sits a dashed box labelled STUCK, crossed out. Two lines state the theorems: progress says a well-typed term is a value or can step, so it is not stuck now; preservation says the step lands on a well-typed term, so the argument repeats.](assets/04-05-fig1.svg)

The crossed-out box is the content of the theorem. Progress keeps you out of it at the current step; preservation guarantees you arrive at another well-typed term, so progress applies again. Neither lemma alone suffices: progress without preservation would keep you safe for one step and say nothing about the next; preservation without progress would keep types consistent while allowing you to be stuck at every one.

**And note what the picture permits:** an infinite chain, never reaching `value`. That is a well-typed divergent program, and it is not a soundness violation.

## Worked examples

**Example 1 (mechanical): apply the lemmas to a reduction.** Take $e = (\lambda f{:}\mathsf{Nat}\to\mathsf{Nat}.\ f\,\overline{3})\ (\lambda y{:}\mathsf{Nat}.\ y)$ with $\vdash e : \mathsf{Nat}$.

| step | term | progress says | preservation says |
|---|---|---|---|
| 0 | $(\lambda f.\ f\,\overline{3})\ (\lambda y.\,y)$ | not a value; the function position is a value and so is the argument, so $\beta$ fires | — |
| 1 | $(\lambda y{:}\mathsf{Nat}.\,y)\ \overline{3}$ | not a value; $\beta$ fires again | still $: \mathsf{Nat}$ — by the substitution lemma, since $\lambda y.\,y : \mathsf{Nat}\to\mathsf{Nat}$ matched $f$'s type |
| 2 | $\overline{3}$ | it is a value; done | still $: \mathsf{Nat}$ |

At no point was the term stuck, and the type $\mathsf{Nat}$ was preserved throughout — which is what let you predict the *final* value's type from the *initial* term's, without running anything. That prediction is the practical content of soundness: it is why a compiler can allocate a machine word for the result before the program runs.

**Example 2 (why you'd care): a language where preservation fails.** Suppose a designer adds a rule permitting any $\mathsf{Nat}$ to be used where a $\mathsf{Bool}$ is expected, "for convenience":

$$\frac{\Gamma \vdash e : \mathsf{Nat}}{\Gamma \vdash e : \mathsf{Bool}}\;(\mathsf{T\text{-}Coerce})$$

Nothing is added to the *semantics* — no evaluation rule turns a numeral into a boolean. Now consider $\mathsf{if}\ \overline{3}\ \mathsf{then}\ \overline{1}\ \mathsf{else}\ \overline{2}$.

It type-checks: $\overline{3} : \mathsf{Nat}$, so by $\mathsf{T\text{-}Coerce}$ also $\overline{3} : \mathsf{Bool}$, so the $\mathsf{if}$ rule applies and the term has type $\mathsf{Nat}$.

But **progress fails**. The term is not a value. The evaluation rules for $\mathsf{if}$ require the guard to be $\mathsf{true}$, $\mathsf{false}$, or a term that can step. $\overline{3}$ is a value and is neither boolean, so no rule fires. The term is **stuck**, and it was well-typed. Soundness is gone.

*Tracing the break to a lemma.* The failure is in **canonical forms**: with $\mathsf{T\text{-}Coerce}$ present, a value of type $\mathsf{Bool}$ need no longer be $\mathsf{true}$ or $\mathsf{false}$ — it might be a numeral. Progress's $\mathsf{if}$ case relied on that lemma, and the lemma is now false.

**Two honest repairs, and they are the two real options.**

1. **Add the evaluation rule.** Make the semantics coerce too: $\mathsf{if}\ \overline{0}$ takes the false branch, any other numeral the true branch. Now progress holds again. This is C's and JavaScript's choice, and the cost is not unsoundness but the weak-typing surprises of [Lesson 1.1](01-01-languages-paradigms-and-the-design-space.md) — the language is sound and does something you may not have wanted.
2. **Drop the rule.** Require an explicit conversion. This is ML's and Haskell's choice.

**What you may not do is keep the typing rule and not the evaluation rule.** That is the shape of essentially every real type-hole, and the discipline of checking both lemmas after every addition is what catches it — which is why this proof, and not the slogan, is the thing to remember.

## Watch out

- **You might think** soundness means well-typed programs cannot fail — **but actually** it means they cannot get *stuck*. They can diverge, exhaust memory, divide by zero (if the semantics defines that as an error transition rather than stuckness), or compute the wrong answer. Soundness is about the semantics having something to say, not about the program being right.
- **You might think** progress needs no hypothesis about the context — **but actually** it requires the term to be **closed**. An open term $x + 1$ is well-typed under $\Gamma = x{:}\mathsf{Nat}$ and is neither a value nor able to step. That is why the theorem is stated with the empty context.
- **You might think** a type system with a runtime check is unsound — **but actually** it is sound *because of* the check. Java's array store check is what restores progress after covariance broke preservation; the check is not a patch over unsoundness but the mechanism that makes the combined system safe, at the cost of a run-time failure the type system was supposed to prevent.

## One-liner

> Progress says a well-typed term is never stuck now and preservation says it is still well-typed next, so together they say it is never stuck ever — and when you add a feature, which of the two breaks tells you what kind of mistake you made.

## Problems

**P1 (🟢)** For each term, say whether it is a **value**, **steps**, or is **stuck**, and whether it is well-typed in the simply-typed calculus with $\mathsf{Nat}$ and $\mathsf{Bool}$.

(a) $\lambda x{:}\mathsf{Nat}.\ x\,\overline{1}$
(b) $(\lambda x{:}\mathsf{Nat}.\ x)\ \overline{4}$
(c) $\mathsf{true}\ \overline{5}$
(d) $\mathsf{if}\ \mathsf{true}\ \mathsf{then}\ \overline{1}\ \mathsf{else}\ \mathsf{false}$

**P2 (🟡)** For each proposed change to a sound language, say which lemma breaks (progress, preservation, or neither) and give a one-line witness term.

(a) Add a typing rule letting any value of type $\mathsf{Bool}$ be used where $\mathsf{Nat}$ is expected, with no new evaluation rule.
(b) Add an evaluation rule $\overline{n} + \mathsf{true} \to \overline{n}$, with no new typing rule.
(c) Add $\mathsf{fix}$ with the rule from [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md), plus the evaluation rule $\mathsf{fix}\ e \to e\ (\mathsf{fix}\ e)$.

**P3 (🔴)** A designer adds a `head` operation on lists with the typing rule $\dfrac{\Gamma \vdash e : [\tau]}{\Gamma \vdash \mathsf{head}\ e : \tau}$ and the evaluation rule $\mathsf{head}\ (v :: vs) \to v$, saying nothing about the empty list.

(a) State which lemma fails, and give the witness term.
(b) Give three distinct repairs a real language could make, and name a language that takes each.
(c) One of your repairs keeps the type $\tau$ and one changes it. State which, and say what the change costs the caller.
(d) A fourth "repair" is to leave the behaviour undefined, as C does for reading past an array. State precisely what this does to the soundness theorem — is the language sound, unsound, or is the question altered? Answer in two sentences.

<details>
<summary>Solutions</summary>

**P1**

(a) $\lambda x{:}\mathsf{Nat}.\ x\,\overline{1}$. **It is a value** — abstractions are values, and the body is never evaluated until applied.

**Not well-typed**, however: the body applies $x : \mathsf{Nat}$ to $\overline{1}$, and $\mathsf{T\text{-}App}$ requires the function position to have an arrow type. So this is a value that is ill-typed, which is perfectly possible — being a value is a syntactic property and says nothing about typing.

(b) $(\lambda x{:}\mathsf{Nat}.\ x)\ \overline{4}$. **Steps**, to $\overline{4}$ by $\beta$. **Well-typed** at $\mathsf{Nat}$.

(c) $\mathsf{true}\ \overline{5}$. **Stuck** — it is not a value (it is an application), and no rule applies: $\beta$ needs an abstraction in function position, and $\mathsf{true}$ is a value that is not one.

**Not well-typed**: $\mathsf{T\text{-}App}$ needs $\mathsf{true}$ to have an arrow type and it has type $\mathsf{Bool}$. This is exactly the situation soundness promises: stuck terms are ill-typed. If you ever find a stuck term that *is* well-typed, you have found a soundness bug.

(d) $\mathsf{if}\ \mathsf{true}\ \mathsf{then}\ \overline{1}\ \mathsf{else}\ \mathsf{false}$. **Steps**, to $\overline{1}$ by the $\mathsf{if}$-true rule.

**Not well-typed**: the $\mathsf{if}$ rule requires both branches to have the *same* type, and here they are $\mathsf{Nat}$ and $\mathsf{Bool}$.

This one is instructive — it is well-behaved *on this execution* (it steps to $\overline{1}$ and finishes) and is still rejected, because the checker must reason about all executions and the other branch would produce a $\mathsf{Bool}$ where a $\mathsf{Nat}$ was promised. Another instance of sound-but-incomplete.

**P2**

(a) **Progress fails.** Witness: $\overline{1} + \mathsf{true}$. It type-checks (the rule gives $\mathsf{true} : \mathsf{Nat}$), it is not a value, and no evaluation rule for $+$ matches a boolean operand — so it is stuck. The underlying break is again **canonical forms**: a value of type $\mathsf{Nat}$ need no longer be a numeral.

(b) **Preservation fails** — or more precisely, the mismatch shows up there. The evaluation rule lets $\overline{1} + \mathsf{true}$ step to $\overline{1}$, but the term was never well-typed to begin with, so preservation's hypothesis is never satisfied and it holds vacuously.

The honest answer is **neither lemma fails**, and this is the case worth getting right: adding an evaluation rule for an ill-typed term cannot break soundness, because soundness only quantifies over well-typed terms. The new rule is simply dead code — no well-typed program can reach it. (It is still a bad idea, because it makes the semantics larger with no benefit, and because a later typing-rule addition might suddenly reach it.)

(c) **Neither fails — the system stays sound.** Progress: $\mathsf{fix}\ e$ is not a value and the new evaluation rule always applies, so it can always step. Preservation: if $\vdash e : \tau\to\tau$ then $\vdash \mathsf{fix}\ e : \tau$ and $\vdash e\,(\mathsf{fix}\ e) : \tau$ by $\mathsf{T\text{-}App}$ — the same type. Both lemmas go through.

What is lost is **strong normalization**, not soundness, exactly as [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md) P3 concluded. $\mathsf{fix}\ (\lambda x{:}\mathsf{Nat}.\,x)$ is well-typed and diverges — an infinite chain in the Picture, never reaching `value`, and not stuck at any point.

**P3**

(a) **Progress fails.** Witness: $\mathsf{head}\ \mathsf{nil}$, at any element type — say $\mathsf{head}\ (\mathsf{nil} : [\mathsf{Nat}])$.

It type-checks at $\mathsf{Nat}$ by the given rule. It is not a value. The only evaluation rule for $\mathsf{head}$ matches a cons cell, and $\mathsf{nil}$ is not one, so no rule fires. **Stuck, and well-typed** — a soundness violation.

(b) *Accept criterion:* any three repairs that restore progress, each with a real language that takes it.

1. **Make it an error transition.** Add a rule $\mathsf{head}\ \mathsf{nil} \to \mathsf{error}$, with $\mathsf{error}$ a distinguished term that propagates and is well-typed at every type. Progress is restored because a rule now fires. **Haskell** (`head []` raises), **OCaml** (`Failure "hd"`), **Java** (an exception).
2. **Change the result type to an option.** $\mathsf{head} : [\tau] \to \mathsf{Option}\ \tau$, returning $\mathsf{None}$ on the empty list. Progress is restored because both cases have rules. **Rust** (`slice::first` returns `Option<&T>`), **Scala** (`headOption`), **Haskell**'s `safeHead` idiom.
3. **Refine the argument type.** Require a provably non-empty list — a separate `NonEmpty` type whose only constructor takes a head and a tail, so $\mathsf{head}\ \mathsf{nil}$ does not type-check. Progress is restored because the witness is no longer well-typed. **Haskell**'s `Data.List.NonEmpty`, and dependently typed vectors in **Idris** and **Agda**.

(c) Repairs 1 and 3 **keep the type $\tau$**; repair 2 **changes it** to $\mathsf{Option}\ \tau$.

What the change costs the caller: they must now handle the $\mathsf{None}$ case explicitly at every call site — pattern-match, or use a combinator like `map`/`getOrElse`. That is more code, and it is the point: the possibility of failure has moved from something that happens at run time into something the type system forces you to confront at compile time. The cost is verbosity; the benefit is that the failure cannot be forgotten.

Repair 3 pushes the obligation further back still, to whoever *constructs* the list, and costs nothing at the call site — which is why it is the most attractive and the hardest to retrofit.

(d) Leaving it undefined **alters the question rather than answering it.** The soundness theorem is a statement about a formal semantics, and "undefined behaviour" means the semantics declines to define a transition — so the term is still stuck in the formal model, and the theorem as stated is still false.

What C actually does is narrow the theorem's scope: the standard's guarantees apply only to programs that do not exhibit undefined behaviour, so soundness becomes conditional — *well-typed programs that never read past an array do not go wrong* — and the obligation of checking the side condition is transferred from the compiler to the programmer. That is a coherent design, and it is why C's type system is called weak: it type-checks programs whose behaviour it does not constrain.

</details>

## Flashback

**From Lesson 2.2 (Big-step semantics and the environment model):** Big-step semantics cannot distinguish a divergent program from a stuck one — both simply have no derivation — and Example 2 there argued this is structural rather than repairable.

(a) State why the soundness theorem of this lesson cannot be formulated in big-step style, referring to what its statement quantifies over.
(b) A colleague proposes proving soundness in big-step form as: "if $\vdash e : \tau$ and $e \Downarrow v$ then $\vdash v : \tau$." State whether this is provable, and what it fails to rule out.

<details>
<summary>Solution</summary>

(a) Because soundness quantifies over **states reachable mid-computation**: it says that for every $e'$ with $e \to^* e'$, that $e'$ is a value or can step. Big-step semantics has no such states — its judgment $e \Downarrow v$ relates a term directly to its final value, and there is no term representing "$e$ after three steps". So the set the theorem quantifies over does not exist in the model, and the statement cannot be written down.

The same gap appears in the definition of the property being ruled out. "Stuck" means *not a value and no rule applies*, which is a statement about a term having no successor. Big-step has no successor relation, so it has no notion of stuck either — as [Lesson 2.2](02-02-big-step-semantics-and-environments.md) showed, $\mathsf{while\ true\ do\ skip}$ and $x := \mathsf{true} + 1$ receive identical treatment, namely no derivation at all.

(b) **It is provable**, and it is a real theorem — it is the big-step form of preservation, sometimes called *type preservation for evaluation*, proved by induction on the evaluation derivation.

What it fails to rule out is **precisely the thing soundness was for**: getting stuck. The statement is conditional on $e \Downarrow v$ — on the program having produced a value — and says nothing whatever about programs that do not. A stuck program has no derivation, so the hypothesis is false and the implication holds vacuously. A program that diverges is in the same position.

So the big-step statement tells you "if you get an answer, it has the type you expected", which is worth having, and is strictly weaker than "you will not fail to get an answer for a reason the semantics cannot describe". Distinguishing those two requires the intermediate states, hence a small-step semantics — which is why every soundness proof in the literature is small-step, and why [Lesson 2.1](02-01-small-step-operational-semantics.md) insisted on the value/steps/stuck trichotomy before any type system had been introduced.

</details>

## Connections

- **Backward:** "stuck" and the step relation are [Lesson 2.1](02-01-small-step-operational-semantics.md)'s, the rules are [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md)'s, and the substitution lemma depends on [Lesson 3.1](03-01-the-untyped-lambda-calculus.md)'s capture-avoidance. That soundness survives adding $\mathsf{fix}$ while strong normalization does not is [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md) P3(c).
- **Forward:** every feature in Module 5 has to re-establish these two lemmas — and [Lesson 5.2](05-02-subtyping-records-and-variance.md) contains the case where preservation genuinely fails in a shipped language, with a runtime check inserted to restore safety. [Lesson 5.6](05-06-ownership-linearity-and-borrow-checking.md) is a type system whose soundness theorem rules out a different class of error entirely.
- **Sideways:** "sound but not complete" is the same trade as [`theory-of-computation` 4.3](../../theory-of-computation/lessons/04-03-rices-theorem-and-more-undecidable-problems.md)'s Rice's theorem forces on every program analysis, and [Lesson 7.5](07-05-abstract-interpretation.md) makes the same bargain with the same justification — approximate in the direction where a positive answer is trustworthy.
