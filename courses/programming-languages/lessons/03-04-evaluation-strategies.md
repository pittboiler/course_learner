# Programming Languages · Lesson 3.4: Evaluation strategies — call-by-value, call-by-name, lazy

> ⏱ ~15 min · Module 3: The lambda calculus · Builds on: [3.3 (confluence and the Y combinator)](03-03-confluence-and-the-y-combinator.md), [2.4 (Hoare logic)](02-04-hoare-logic-and-loop-invariants.md) · Unlocks: [4.1 (the simply-typed lambda calculus)](04-01-the-simply-typed-lambda-calculus.md), [6.4 (memory layout)](06-04-memory-layout-and-reference-counting.md)

## Why this matters

[Lesson 3.3](03-03-confluence-and-the-y-combinator.md) left a precise gap. Confluence says every reduction order that reaches a normal form reaches the *same* one; standardization says normal order always reaches one when it exists. Neither says anything about the orders a real language actually uses, and real languages do not use normal order.

So the question this lesson answers is the practical one: **given the same program, which strategies terminate, and what does each cost?** The answer is not a ranking. Call-by-value and call-by-name each terminate on programs the other diverges on, and each is asymptotically faster on programs where the other is slower. Knowing which is which is the difference between "Haskell is lazy" as a slogan and being able to predict when a Haskell program will eat all your memory.

This is [Lesson 1.1](01-01-languages-paradigms-and-the-design-space.md)'s axis 2, now with the machinery to be precise about it.

## The idea

A strategy answers one question: **when you apply a function to an argument, do you evaluate the argument first?**

- **Call-by-value (CBV):** yes, always. Reduce the argument to a value, then substitute. Used by ML, OCaml, Scheme, Java, Python, C, Rust, Go — essentially everything except Haskell.
- **Call-by-name (CBN):** no, never. Substitute the argument unreduced; it gets evaluated at each place it is used, if it is used.
- **Call-by-need (lazy):** substitute unreduced, like CBN, but arrange that all copies share one cell, so the first use evaluates it and the rest read the answer. Haskell.

Two further choices are usually bundled in without comment, and both matter:

- **Do you reduce under $\lambda$?** Normal order does; CBV, CBN and lazy do not. A function body is a value and stays unevaluated until the function is called. That is why `\x -> 1/0` is a perfectly good value in every real language.
- **In which order do you evaluate a function's several arguments?** Left to right, right to left, or unspecified. With no side effects it cannot matter ([Lesson 2.1](02-01-small-step-operational-semantics.md) P2); with side effects it decides your program's behaviour, and C famously leaves it open.

## The formal version

Both strategies are one line of big-step semantics, in the style of [Lesson 2.2](02-02-big-step-semantics-and-environments.md). Values are exactly the abstractions: $v ::= \lambda x.\,t$.

**Call-by-value.**

$$\frac{t_1 \Downarrow \lambda x.\,t \qquad t_2 \Downarrow v_2 \qquad [x := v_2]\,t \Downarrow v}{t_1\,t_2 \Downarrow v}\;(\mathsf{App\text{-}CBV})$$

**Call-by-name.**

$$\frac{t_1 \Downarrow \lambda x.\,t \qquad [x := t_2]\,t \Downarrow v}{t_1\,t_2 \Downarrow v}\;(\mathsf{App\text{-}CBN})$$

The rules differ in **exactly one premise**: CBV has $t_2 \Downarrow v_2$ and substitutes the value; CBN has no premise for $t_2$ at all and substitutes the term. Every consequence in this lesson follows from that single difference.

**Termination.** CBN is strictly more terminating than CBV:

> If $t \Downarrow_{\mathrm{CBV}} v$ then $t \Downarrow_{\mathrm{CBN}} v'$ for some $v'$, but not conversely.

The witness for "not conversely" is $(\lambda x.\lambda y.\,y)\ \Omega$, which CBN reduces to $\lambda y.\,y$ in one step and CBV never reduces at all. The reason is structural: CBV's extra premise demands a value for an argument that may be discarded, so it can fail on work the program never needed.

**Cost.** Neither dominates. Let $k$ be the number of *free occurrences* of $x$ in the body $t$, and let evaluating $t_2$ cost $c$.

| | argument evaluations |
|---|---|
| CBV | $1$, always |
| CBN | $k$ |
| lazy | $\min(k, 1)$ |

So CBN wins when $k = 0$ (it pays nothing, CBV pays $c$ — and if $c$ is infinite this is the termination difference again), CBV wins when $k \ge 2$ (it pays $c$, CBN pays $kc$), and they tie at $k = 1$. **Lazy evaluation takes the best of both columns**, at the cost of the machinery that makes it possible.

**Call-by-need, concretely.** Substitute not the term but a **thunk**: a heap cell containing either the unevaluated term plus its environment, or, once forced, the resulting value. Every copy of the parameter points at the *same* cell. The first use forces it and overwrites the cell in place; later uses find a value and return it.

This is memoization at the level of the evaluator. It is why Haskell can write `let xs = [1..]` and take five elements, and it is also why Haskell has a space-leak problem that strict languages do not: **an unforced thunk retains everything its environment refers to**, so a chain of unforced thunks can hold megabytes of data that a strict evaluator would have collapsed to one number. This interacts directly with garbage collection ([Lesson 6.5](06-05-tracing-garbage-collection.md)), because the collector cannot know the thunk would have produced a small value.

## Picture

![Two panels. The upper panel, labelled call-by-name reduce the outer redex first, shows the term open paren lambda x dot lambda y dot y close paren applied to OMEGA, with an arrow down annotated argument never used discard it, reaching lambda y dot y, marked normal form in one step. The lower panel, labelled call-by-value reduce the argument first, shows OMEGA written out as open paren lambda x dot x x close paren applied to open paren lambda x dot x x close paren, with an arrow down to the identical term again, annotated reduces to itself forever, and a final line saying the outer redex is never reached.](assets/03-04-fig1.svg)

One term, two strategies, and the disagreement is total: one answer in a single step, versus no answer ever. The argument $\Omega$ is *never used* — the function discards it — so CBN's refusal to look at it is not a lucky guess but a consequence of the rule, and CBV's insistence is likewise not bad luck. Each strategy is doing exactly what it says.

## Worked examples

**Example 1 (mechanical): the same term under three strategies.** Take

$$t \;=\; (\lambda x.\ \mathsf{plus}\ x\ x)\ (\mathsf{plus}\ \overline{1}\ \overline{2})$$

Here $k = 2$ (the parameter $x$ occurs twice) and the argument costs one addition.

| strategy | what happens | additions performed |
|---|---|---|
| CBV | evaluate `plus 1 2` to $\overline{3}$, then substitute: `plus 3 3` | **2** (the argument once, the body once) |
| CBN | substitute unreduced: `plus (plus 1 2) (plus 1 2)`, then evaluate | **3** (the argument twice, the body once) |
| lazy | substitute a thunk shared by both occurrences; the first forces it to $\overline{3}$, the second reads it | **2** |

All three reach $\overline{6}$ — confluence guarantees that, since all three terminate. CBN did one extra addition, and with $k$ occurrences it would do $k-1$ extra. Lazy matched CBV.

This is [Lesson 3.3](03-03-confluence-and-the-y-combinator.md) Example 1's duplication, quantified.

**Example 2 (why you'd care): infinite data, and the bill for it.** Consider, in Haskell notation,

```
nats   = 0 : map (+1) nats
take 5 nats
```

`nats` is defined in terms of itself and is infinite. Under CBV this is meaningless — evaluating `nats` requires evaluating `map (+1) nats`, which requires `nats`, and the definition diverges before anything is returned. Under laziness, `nats` is a thunk; `take 5` forces exactly five cells, each forcing one more `map` step, and the computation stops with four cells of the list still unevaluated.

**The gain is genuine and it is not only about infinite lists.** Laziness lets you write `head (sort xs)` and have a good compiler do selection rather than a full sort, because `sort`'s output is produced on demand. It lets a producer and a consumer be written separately and fused. It makes `if` definable as an ordinary function rather than a special form ([Lesson 1.2](01-02-concrete-and-abstract-syntax.md)'s `&&` problem disappears entirely).

**The bill arrives as space.** Consider summing a large list with a left fold:

```
foldl (+) 0 [1..1000000]
```

Under laziness the accumulator is never forced until the end, so the evaluator builds a chain of a million unforced additions — `(((0+1)+2)+3)+...` — in the heap before evaluating any of it. A strict fold uses constant space; this one uses linear space and can exhaust the stack when finally forced. The fix is to force the accumulator at each step (`foldl'`), which is why every Haskell tutorial has a section on strictness annotations.

So the trade is: **laziness converts time you might not have spent into space you definitely occupy**, and the cases where that is a bad deal are common enough to need language-level tools. A strict language makes the opposite bet, and pays for it whenever an argument turns out to be unused or infinite.

## Watch out

- **You might think** lazy and call-by-name are synonyms — **but actually** they differ in exactly one thing, sharing, and that one thing changes the cost column from $k$ to $\min(k,1)$. Call-by-name is a specification; call-by-need is the implementation that makes it affordable, and nearly every real "lazy" language is call-by-need.
- **You might think** CBV is simply worse because it terminates less often — **but actually** it is asymptotically better whenever a parameter is used more than once without sharing, its space behaviour is predictable, and its evaluation order is the one your profiler and debugger can explain. The termination advantage of CBN is real and so is the cost advantage of CBV; neither is a strict improvement.
- **You might think** "Haskell is lazy" means every expression is deferred — **but actually** pattern matching, arithmetic on unboxed types, and anything marked strict force evaluation, and the compiler's strictness analyser converts a great deal of laziness to strictness when it can prove the value is needed. That analysis is an abstract interpretation, which is [Lesson 7.5](07-05-abstract-interpretation.md).

## One-liner

> One premise separates call-by-value from call-by-name — whether the argument must be a value before substitution — and from it follow every difference in termination, in asymptotic cost, and in whether your space leak is possible.

## Problems

**P1 (🟢)** For each term, say whether CBV and CBN each terminate, and give the result where one does. Recall $\Omega = (\lambda x.\,x\,x)(\lambda x.\,x\,x)$.

(a) $(\lambda x.\ \overline{5})\ \Omega$
(b) $(\lambda x.\ x)\ ((\lambda y.\,y)\ \overline{3})$
(c) $(\lambda x.\ x\,x)\ (\lambda y.\ y)$
(d) $(\lambda x.\ \Omega)\ \overline{7}$

**P2 (🟡)** Let $t = (\lambda x.\ f\ x\ x\ x)\ e$, where evaluating $e$ costs $c$ units and $f$ is a variable.

(a) State the number of times $e$ is evaluated under CBV, CBN and lazy.
(b) Give the value of $k$ for which CBV and CBN do equal work, and say which is cheaper on either side of it.
(c) Now let $e$ be a term that diverges. State what each of the three strategies does, and reconcile this with your answer to (b).

**P3 (🔴)** A language designer wants call-by-name's termination behaviour without call-by-need's thunks, and proposes: "substitute the argument unreduced, but first check whether the parameter occurs more than once in the body; if it does, evaluate the argument first instead."

(a) On Example 1's term, state which branch the rule takes and what it costs. Compare with lazy.
(b) Give a term on which this rule **diverges** where lazy terminates. (Hint: the rule commits based on a syntactic count, before knowing whether the occurrences are reached.)
(c) State the general principle your counterexample illustrates, in terms of what a syntactic occurrence count can and cannot tell you.
(d) Real compilers *do* perform this optimization, under the name strictness analysis, and it is sound. State the one extra condition they establish before converting a lazy binding to a strict one, and name the lesson in this course where that analysis lives.

<details>
<summary>Solutions</summary>

**P1**

(a) $(\lambda x.\ \overline{5})\ \Omega$. The parameter $x$ does not occur in the body, so $k = 0$.

- **CBV: diverges.** It must evaluate $\Omega$ to a value first, and $\Omega \to_\beta \Omega$ forever.
- **CBN: terminates**, yielding $\overline{5}$ in one step — the argument is substituted (nowhere, since $k=0$) and discarded.

(b) $(\lambda x.\ x)\ ((\lambda y.\,y)\ \overline{3})$. Here $k = 1$.

- **CBV: terminates**, yielding $\overline{3}$. It evaluates the argument to $\overline{3}$ (1 step), then applies the identity (1 step): 2 steps.
- **CBN: terminates**, yielding $\overline{3}$. It substitutes the unreduced argument (1 step), then evaluates it (1 step): 2 steps.

Equal work, as the $k=1$ row of the cost table predicts.

(c) $(\lambda x.\ x\,x)\ (\lambda y.\ y)$. The argument is already a value.

- **CBV: terminates**, yielding $\lambda y.\,y$. The argument needs no evaluation, so both strategies do the same thing.
- **CBN: terminates**, yielding $\lambda y.\,y$.

(When the argument is already a value, the strategies cannot differ — CBV's extra premise is discharged in zero steps.)

(d) $(\lambda x.\ \Omega)\ \overline{7}$. The divergence is in the **body**, not the argument.

- **CBV: diverges.** The argument $\overline{7}$ evaluates fine, then the body $\Omega$ is evaluated and never stops.
- **CBN: diverges**, for the same reason.

**Both diverge**, which is the point of including this one: CBN's advantage is confined to arguments that are discarded. A divergent body is divergent under every strategy, and no evaluation order rescues a program whose answer genuinely does not exist.

**P2** The body is $f\,x\,x\,x$, so $k = 3$.

(a) **CBV: once.** **CBN: three times** — one per occurrence of $x$. **Lazy: once** — the three occurrences share a thunk; the first forces it, the other two read the value.

(b) They do equal work at $k = 1$.

- For $k = 0$, CBN is cheaper: it pays 0 and CBV pays $c$.
- For $k \ge 2$, CBV is cheaper: it pays $c$ and CBN pays $kc$.

At $k=3$, CBN does $3c$ against CBV's $c$ — three times the work.

(c) If $e$ diverges ($c = \infty$):

- **CBV: diverges**, since it must evaluate $e$ before substituting.
- **CBN: diverges.** The parameter occurs, so the first occurrence is evaluated and never returns.
- **Lazy: diverges**, for the same reason as CBN.

*Reconciling with (b):* the cost table already predicts this. At $k = 3$ the costs are $c$, $3c$ and $c$; with $c = \infty$ all three are infinite, so the "CBV is cheaper" conclusion is about the *constant factor* and is silent about termination. **CBN's termination advantage exists only at $k = 0$** — when the parameter is used at all, a divergent argument sinks every strategy. That is the honest scope of the advantage, and it is narrower than the slogan "lazy evaluation terminates more often" suggests.

**P3**

(a) On $t = (\lambda x.\ \mathsf{plus}\ x\ x)\ (\mathsf{plus}\ \overline{1}\ \overline{2})$, the parameter occurs twice, so the rule takes the **evaluate-first** branch, behaving as CBV: **2 additions**. Lazy also does 2. On this term the rule matches lazy exactly, which is why it looks promising.

(b) *Accept criterion:* any term in which the parameter occurs at least twice, all occurrences sit in a position that is not reached, and the argument diverges.

$$(\lambda x.\ (\lambda y.\ \overline{5})\ (\mathsf{plus}\ x\ x))\ \Omega$$

The parameter $x$ occurs **twice** in the body, so the rule evaluates the argument $\Omega$ first — and diverges.

Lazy substitutes a thunk for $x$. The body is $(\lambda y.\,\overline{5})\,(\mathsf{plus}\ x\ x)$, whose own parameter $y$ is unused, so the argument $\mathsf{plus}\ x\ x$ is never forced, so the thunk for $x$ is never forced. Lazy **terminates**, returning $\overline{5}$.

(A shorter witness works too: $(\lambda x.\ \mathsf{tru}\ \overline{5}\ (\mathsf{plus}\ x\ x))\ \Omega$, where the conditional discards the branch mentioning $x$.)

(c) **A syntactic occurrence count tells you how many times a parameter *appears*; it cannot tell you how many times it is *evaluated*.** Occurrences sitting in an unselected conditional branch, in a discarded argument, or in a function body never called are counted by the syntax and never reached by the execution. Since the cost and termination arguments both depend on the number of *evaluations*, a rule that commits based on the count is committing on the wrong number.

The deeper version: the property the rule actually needs is "is this argument definitely needed?", which is a semantic property of the program's behaviour, and by Rice's theorem ([`theory-of-computation` 4.3](../../theory-of-computation/lessons/04-03-rices-theorem-and-more-undecidable-problems.md)) no algorithm decides it exactly. Any syntactic approximation must therefore be wrong somewhere — the only question is in which direction.

(d) The extra condition is **strictness**: the compiler must prove that the function is strict in that parameter — that is, that if the argument diverges then the whole call diverges anyway. Formally, $f\,\bot = \bot$.

That is exactly what the counterexample violates. In (b) the function is *not* strict in $x$ — applying it to a divergent argument still returns $\overline{5}$ — so the transformation is unsound there, and a correct analyser would decline it. Where strictness does hold, evaluating early changes nothing observable (the program was going to diverge regardless), so the thunk can be skipped and the value computed directly, saving both the allocation and the indirection.

The analysis is a **strictness analysis**, and it is an instance of [Lesson 7.5](07-05-abstract-interpretation.md)'s abstract interpretation: it runs the program over an abstract domain (roughly, "definitely diverges" versus "might not") and is deliberately **sound but incomplete** — it converts a lazy binding to a strict one only when it can prove strictness, and leaves the thunk in place whenever it cannot. Missing an opportunity costs performance; taking a wrong one would change the program's meaning, so the analysis is built to err in the safe direction.

</details>

## Flashback

**From Lesson 2.4 (Hoare logic and loop invariants):** A Hoare triple $\{P\}\,c\,\{Q\}$ asserts **partial** correctness — if $P$ holds and $c$ terminates, then $Q$ holds — and $\{\mathsf{true}\}\,c\,\{\mathsf{false}\}$ is derivable for any divergent $c$. Total correctness needs a separate variant.

(a) A program is verified partially correct and then compiled by a call-by-value implementation instead of the call-by-name one it was written for. State whether the partial-correctness proof still holds, with a reason.
(b) State whether the *total*-correctness proof still holds, and give a term from this lesson that settles it.

<details>
<summary>Solution</summary>

(a) **The partial-correctness proof still holds.**

Partial correctness is a claim conditioned on termination: *if* the program terminates, the postcondition holds. Confluence ([Lesson 3.3](03-03-confluence-and-the-y-combinator.md)) guarantees that any two strategies reaching a normal form reach the *same* one. So on every input where the CBV implementation terminates, it produces exactly the answer the CBN implementation would have produced — and the proof covered that answer. Changing strategy cannot make a terminating run produce a different result, so it cannot falsify a partial-correctness claim.

(b) **The total-correctness proof does not survive.**

Total correctness adds "and $c$ terminates", and termination is exactly the property the two strategies disagree on. The theorem in the Formal version is one-directional: everything CBV evaluates, CBN evaluates too, and not conversely — so switching *from* CBN *to* CBV can destroy termination.

The witness is the Picture's term, $(\lambda x.\lambda y.\,y)\ \Omega$: it terminates under CBN in one step and diverges under CBV. A program containing it was totally correct under the strategy it was written for and merely partially correct under the new one, with the variant argument silently invalidated — the variant was a claim about the original evaluation, and the new strategy performs evaluations the old one never did.

This is worth stating as a general fact about program verification: **a correctness proof is relative to a semantics, and the evaluation strategy is part of the semantics.** The half of a proof that survives a strategy change is the half confluence protects; the half that does not is the half about termination, which is precisely the half that needed its own separate argument in [Lesson 2.4](02-04-hoare-logic-and-loop-invariants.md).

</details>

## Connections

- **Backward:** the gap this lesson fills was opened by [Lesson 3.3](03-03-confluence-and-the-y-combinator.md) — confluence settles the answer, not the termination — and the duplication in the cost table is that lesson's Example 1 counted. Axis 2 of [Lesson 1.1](01-01-languages-paradigms-and-the-design-space.md) is what this makes precise.
- **Forward:** thunks are heap objects, so laziness is a memory-management decision as much as an evaluation one — [Lesson 6.4](06-04-memory-layout-and-reference-counting.md) and [Lesson 6.5](06-05-tracing-garbage-collection.md) show what a retained thunk costs a collector. The strictness analysis of P3 is [Lesson 7.5](07-05-abstract-interpretation.md). [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md) types the calculus, after which $\Omega$ is untypable and the termination question changes shape entirely.
- **Sideways:** call-by-need's "compute once, reuse" is memoization, the same move that turns exponential recursion into a polynomial dynamic program in [`algorithms` 2.5](../../algorithms/lessons/02-05-dynamic-programming-and-knapsack.md) — here applied by the evaluator to every binding rather than by the programmer to one function.
