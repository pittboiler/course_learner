# Programming Languages · Lesson 7.5: Abstract interpretation and sound-but-incomplete analysis

> ⏱ ~15 min · Module 7: Compilation · Builds on: [7.3 (dataflow analysis)](07-03-dataflow-analysis-as-a-fixed-point.md), [7.4 (classical optimizations)](07-04-classical-optimizations.md) · Unlocks: [7.6 (code generation)](07-06-code-generation-and-the-back-end.md)

## Why this matters

Two courses have pointed here. [`theory-of-computation` 4.3](../../theory-of-computation/lessons/04-03-rices-theorem-and-more-undecidable-problems.md) says: *"In programming-languages, abstract interpretation and type systems are the standard responses: approximate the semantic property by a decidable syntactic one, chosen so that a positive answer is always trustworthy."* [`theory-of-computation` 3.4](../../theory-of-computation/lessons/03-04-decidable-vs-turing-recognizable.md) says the same of "sound but incomplete" as a design constraint rather than a shortcoming. This lesson is the response those forward references promised.

The framing matters more than the technique. Rice's theorem says every non-trivial semantic property of programs is undecidable, so **no analysis can be both sound and complete** — and rather than treating that as a defeat, abstract interpretation treats it as a *specification*: choose the direction you will be wrong in, prove you are never wrong in the other, and make the imprecision a tunable parameter.

Once you see it, every analysis in this course is an instance. Type checking is abstract interpretation over a domain of types. [Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md)'s dataflow analyses are abstract interpretation over domains of syntactic facts. The strictness analysis of [Lesson 3.4](03-04-evaluation-strategies.md) P3(d) is one too, and so is the escape analysis of [Lesson 6.4](06-04-memory-layout-and-reference-counting.md).

## The idea

**Run the program, but on approximate values.**

Instead of tracking that `x` is 7, track that `x` is *positive*. Instead of "y is -3", track "y is negative". Then `x * y` can be evaluated **in the approximation**: positive times negative is negative, and you know the sign of the result without knowing either number.

The approximate values form an **abstract domain**, and it must include a "could be anything" element $\top$ because sometimes the approximation cannot decide: positive plus negative is neither reliably.

$$\text{concrete: } \mathbb{Z} \qquad\rightsquigarrow\qquad \text{abstract: } \{\bot,\ \mathrm{neg},\ \mathrm{zero},\ \mathrm{pos},\ \top\}$$

**Two rules make this sound.**

1. Every abstract value must **over-approximate** the set of concrete values it stands for. $\mathrm{pos}$ means "definitely in $\{1,2,3,\ldots\}$", and when you are unsure you must move *up* the lattice toward $\top$, never sideways or down.
2. Every abstract operation must be a **sound over-approximation** of its concrete counterpart: whatever the real result would be, the abstract result must include it.

Follow both and the analysis can lose precision but can never lie. That is the whole design, and it is why an abstract interpreter's answers are trustworthy in one direction only.

## The formal version

**Galois connection.** Relate concrete and abstract by a pair of monotone maps

$$\alpha : \mathcal{P}(C) \to A \quad\text{(abstraction)} \qquad \gamma : A \to \mathcal{P}(C) \quad\text{(concretization)}$$

with $\alpha(S) \sqsubseteq a \iff S \subseteq \gamma(a)$. In words: **$\alpha$ takes a set of real values to the best abstract description of it, and $\gamma$ takes an abstract value back to every real value it could stand for.** For the sign domain, $\alpha(\{1,5,9\}) = \mathrm{pos}$ and $\gamma(\mathrm{pos}) = \{1,2,3,\ldots\}$.

**Soundness condition.** An abstract operation $f^\sharp$ is sound for a concrete $f$ when

$$\alpha(f(S)) \;\sqsubseteq\; f^\sharp(\alpha(S)) \qquad\text{equivalently}\qquad f(\gamma(a)) \subseteq \gamma(f^\sharp(a))$$

In words: **the abstract answer must cover every concrete answer.** $f^\sharp$ may be less precise than necessary — returning $\top$ always is sound and useless — but it may never omit a possibility.

**Two domains worth knowing.**

*Signs*: $\{\bot, \mathrm{neg}, \mathrm{zero}, \mathrm{pos}, \top\}$. Multiplication is exact ($\mathrm{neg}\times\mathrm{neg} = \mathrm{pos}$); addition loses precision ($\mathrm{neg}+\mathrm{pos} = \top$). Five elements, so iteration is trivially terminating.

*Intervals*: $[\ell, u]$ with $\ell \in \mathbb{Z}\cup\{-\infty\}$, $u \in \mathbb{Z}\cup\{+\infty\}$. Far more precise — it can prove an array index in bounds, which is the basis of bounds-check elimination — and **infinite**, which creates a problem.

**Widening.** *(card: [widening](../reference.md#widening))* [Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md)'s termination argument required a *finite* lattice. The interval domain has infinite ascending chains: analyzing `while (c) i = i + 1` produces $[0,0]$, $[0,1]$, $[0,2],\dots$ for ever.

A **widening operator** $\nabla$ forces termination by jumping to a bound when it sees growth:

$$[0,1] \;\nabla\; [0,2] \;=\; [0,+\infty]$$

The rule is: *any bound that moved, send to infinity.* This is sound — a larger interval over-approximates a smaller one — and it deliberately sacrifices precision to guarantee the analysis halts. A **narrowing** pass afterwards can recover some of what widening threw away, by re-running the equations from the widened result.

**Widening is where the imprecision is a tuning knob**, not an accident: widen after $k$ iterations instead of 1, and you keep more precision at more cost. That is the parameter Rice's theorem forces every analysis to have.

**The two directions of error.** For a null-check eliminator:

- *Analysis says possibly-null, reality is non-null.* A redundant check survives. **Cost: performance.**
- *Analysis says definitely-non-null, reality is null.* A check is deleted and the program crashes. **Cost: a miscompile.**

By Rice's theorem one of these must be possible, so the analysis must be built to make **only the first** possible. **Sound means never wrong in the dangerous direction; incomplete means often wrong in the safe one.**

## Picture

![A five-element lattice. At the top, T, annotated could be anything. Below it, three nodes side by side labelled neg, zero and pos, each connected upward to T. Below those, a bottom element, annotated unreachable, connected upward to each of the three. Text below notes that three values plus top and bottom make a finite lattice so iteration must terminate, that neg times neg equals pos is exact, and that neg plus pos equals T is where precision is lost -- and that losing it upward is what keeps the analysis sound.](assets/07-05-fig1.svg)

The shape is the whole design. **Moving up loses information and stays sound; moving down would gain information the program never established, and would be a lie.** $\top$ is the escape hatch that makes every operation total — there is always *some* answer, even if it is "could be anything" — and $\bot$ marks code the analysis has proved unreachable.

Five elements means the ascending chain has length at most 2, so [Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md)'s iteration converges almost immediately. Richer domains buy precision and pay for it in convergence, which is the trade the whole field is organized around.

## Worked examples

**Example 1 (mechanical): interpret a program over signs.** Take

```
x = 5;
y = -3;
z = x * y;
w = z + x;
if (z < 0) { v = z * z; }
```

| statement | abstract state |
|---|---|
| `x = 5` | $x : \mathrm{pos}$ |
| `y = -3` | $y : \mathrm{neg}$ |
| `z = x * y` | $z : \mathrm{neg}$ — $\mathrm{pos}\times\mathrm{neg}$ is exactly $\mathrm{neg}$ |
| `w = z + x` | $w : \top$ — $\mathrm{neg}+\mathrm{pos}$ could be anything |
| `v = z * z` | $v : \mathrm{pos}$ — $\mathrm{neg}\times\mathrm{neg}$ is exactly $\mathrm{pos}$ |

**Two exact answers and one loss**, and the loss is where it has to be: the analysis genuinely cannot know whether $-15 + 5$ is negative without the magnitudes, and the sign domain discarded them. Note the payoff at `v`: the analysis proved `z * z` is positive *without computing it*, which is enough to delete a runtime check that `v > 0`.

Note also what the `if` did: the guard `z < 0` is consistent with $z : \mathrm{neg}$, so the branch is analyzed. Had the analysis derived $z : \mathrm{pos}$, the guard would be unsatisfiable and the branch could be marked $\bot$ — **unreachable code, proved by the abstraction**, which is how compilers delete dead branches.

**Example 2 (why you'd care): widening on a real loop.** Take

```
i = 0;
while (i < 100) { i = i + 1; }
```

Analyze `i` over intervals, at the loop header.

| iteration | interval at the header |
|---|---|
| 1 | $[0,0]$ |
| 2 | $[0,0] \sqcup [1,1] = [0,1]$ |
| 3 | $[0,2]$ |
| 4 | $[0,3]$ |
| … | … |
| 101 | $[0,100]$ |

It terminates here — after 101 iterations — because the guard bounds it. But change the loop to `while (c)` with an unknown condition and the chain never stops: $[0,0], [0,1], [0,2], \ldots$ for ever, and the analysis hangs.

*With widening applied at the second step:*

$$[0,0] \;\nabla\; [0,1] \;=\; [0,+\infty]$$

and the next iteration confirms $[0,+\infty]$ is a fixed point. **Two steps instead of 101, or instead of never.**

*With narrowing afterwards*, re-run the equations from $[0,+\infty]$: the loop guard `i < 100` restricts the value entering the body to $[0,99]$, so after the increment it is $[1,100]$, and joining with the entry $[0,0]$ gives $[0,100]$ — **the precise answer recovered**, in two more steps.

**The point is the trade being explicit.** Widening after the first change is fast and blunt; widening after $k$ changes keeps more precision and costs more; not widening at all may not terminate. Rice's theorem guarantees that *some* such knob must exist, and abstract interpretation's contribution is making it a parameter you set rather than a limitation you discover.

**And this is what a production analyzer is.** Astrée, the analyzer that verified the absence of run-time errors in the Airbus A340/A380 flight-control software, is an abstract interpreter with carefully engineered domains and widening strategies. Its guarantee is exactly the one-directional one: **if it reports no errors, there are none; if it reports a possible error, there may or may not be.** The engineering is all in reducing the second category.

## Watch out

- **You might think** a false positive means the analysis is broken — **but actually** false positives are the *designed* failure mode. Rice's theorem guarantees an analysis must have false positives or false negatives, and a sound analysis chooses the former. The engineering question is never "how do we eliminate them" but "how do we reduce them enough to be usable".
- **You might think** a more precise domain is always better — **but actually** precision costs time and space per program point, and can cost termination. Intervals beat signs on precision and need widening; relational domains (octagons, polyhedra) beat intervals and cost polynomial or exponential time. Every real analyzer picks a point on that curve, per property.
- **You might think** widening is a hack to paper over non-termination — **but actually** it is the principled answer to an infinite lattice, and its soundness is provable: a widened value over-approximates, so the conclusion remains trustworthy. What it sacrifices is precision, on purpose, and narrowing exists to recover some of it.

## One-liner

> Rice's theorem says no analysis is both sound and complete, so pick the direction you will be wrong in and never be wrong in the other — run the program on approximate values, move up the lattice when unsure, and widen when the lattice is infinite.

## Problems

**P1 (🟢)** Evaluate in the sign domain $\{\bot, \mathrm{neg}, \mathrm{zero}, \mathrm{pos}, \top\}$.

(a) $\mathrm{pos} \times \mathrm{pos}$
(b) $\mathrm{neg} + \mathrm{neg}$
(c) $\mathrm{pos} + \mathrm{neg}$
(d) $\mathrm{zero} \times \top$

**P2 (🟡)** For each analysis, state which direction of error is safe and which would be a miscompile, and say which way it must therefore err.

(a) "This array index is definitely in bounds" — used to delete a bounds check.
(b) "This variable is definitely dead" — used to delete a store.
(c) "This function definitely terminates" — used to delete a call whose result is unused.
(d) "These two pointers definitely do not alias" — used to reorder two memory operations.

**P3 (🔴)** Analyze over intervals:

```
x = 10;
while (x > 0) { x = x - 2; }
```

(a) Give the first four intervals for `x` at the loop header with no widening, and say whether the chain terminates.
(b) Apply widening at the second step and give the resulting fixed point.
(c) Apply one narrowing pass and give the improved interval, showing the step.
(d) The true set of values `x` takes at the header is $\{10, 8, 6, 4, 2, 0\}$. State the most precise interval describing it, say whether the interval domain can express the true set exactly, and name a domain that could do better.

<details>
<summary>Solutions</summary>

**P1**

(a) $\mathrm{pos} \times \mathrm{pos} = \mathbf{\mathrm{pos}}$. A positive times a positive is always positive — **exact**, no precision lost.

(b) $\mathrm{neg} + \mathrm{neg} = \mathbf{\mathrm{neg}}$. Adding two negatives always gives a negative — also **exact**.

(c) $\mathrm{pos} + \mathrm{neg} = \boldsymbol{\top}$. The result could be positive ($5 + (-3)$), negative ($3 + (-5)$) or zero ($5 + (-5)$), so no sign element covers every possibility and the analysis must move up to $\top$.

This is the sign domain's characteristic loss: **it tracks signs and discards magnitudes, so any operation whose result's sign depends on magnitudes must give up.**

(d) $\mathrm{zero} \times \top = \mathbf{\mathrm{zero}}$.

This is the one worth pausing on. $\top$ means "could be anything", so a careless implementation returns $\top$ — but zero times *any* integer is zero, so the exact answer is available even though one operand is completely unknown. A sound analysis is allowed to return $\top$ here, and a *good* one returns $\mathrm{zero}$: **soundness is the floor, precision is the engineering**, and the difference between a usable analyzer and a useless one is a long list of special cases like this.

**P2**

(a) **Bounds check.** Safe error: saying "possibly out of bounds" when it is in bounds — the check survives and costs a comparison. Miscompile: saying "definitely in bounds" when it is not — the check is deleted and the program reads or writes memory it should not. **Must err toward "possibly out of bounds".**

(b) **Dead store.** Safe error: saying "possibly live" when the variable is dead — the store survives and costs an instruction. Miscompile: saying "definitely dead" when it is live — the store is deleted and a later read gets a stale value. **Must err toward "possibly live"** (which is why liveness is a *may* analysis, [Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md)).

(c) **Termination.** Safe error: saying "possibly non-terminating" when it terminates — the call survives. Miscompile: saying "definitely terminates" when it does not — the call is deleted and a program that looped for ever now returns, which [Lesson 7.4](07-04-classical-optimizations.md) noted is a genuine change of meaning. **Must err toward "possibly non-terminating".**

(d) **Aliasing.** Safe error: saying "may alias" when they do not — the reordering is forbidden and an optimization is lost. Miscompile: saying "definitely do not alias" when they do — the operations are reordered and a write is observed out of order, changing the program's result. **Must err toward "may alias"**, which is precisely why conservative alias analysis makes pointer-heavy C optimize poorly ([Lesson 7.4](07-04-classical-optimizations.md)'s Flashback).

The uniform pattern: **the optimization fires on a positive answer, so the analysis must under-approximate the set of positives.** Every row is the same principle.

**P3**

(a) At the loop header, joining the entry value with the value coming round the back edge:

| iteration | interval at header | from |
|---|---|---|
| 1 | $[10,10]$ | entry only |
| 2 | $[8,10]$ | join with $[8,8]$ (body applied to $[10,10]$) |
| 3 | $[6,10]$ | join with $[6,8]$ |
| 4 | $[4,10]$ | join with $[4,8]$ |

**The chain does terminate**, at $[0,10]$ — the guard `x > 0` means values at or below 0 do not re-enter the body, so the lower bound stops descending at 0. It takes 6 iterations.

But termination here is luck of the arithmetic, not a guarantee: replace the guard with an unknown condition, or the decrement with something that does not reach a bound, and the chain descends for ever. **The interval lattice has infinite chains, so no bound on iterations can be promised in general** — which is exactly why widening exists.

(b) Widening at the second step compares $[10,10]$ with $[8,10]$. The **lower bound moved** (10 down to 8) and the upper bound did not, so widening sends the moved bound to infinity and keeps the stable one:

$$[10,10] \;\nabla\; [8,10] \;=\; [-\infty, 10]$$

The next iteration confirms this is a fixed point: applying the body to $[-\infty,10]$ and joining gives $[-\infty,10]$ again. **Fixed point $[-\infty, 10]$, reached in two steps.**

It is sound — every value `x` actually takes is in $[-\infty,10]$ — and badly imprecise: it has forgotten that `x` never goes below 0.

(c) Narrowing re-runs the equations from the widened result, *without* widening, and keeps any improvement.

Starting from $[-\infty, 10]$ at the header: the loop guard `x > 0` restricts the value entering the body to $[1, 10]$; the body computes `x - 2`, giving $[-1, 8]$; joining with the entry value $[10,10]$ gives

$$[-1, 8] \sqcup [10,10] \;=\; [-1, 10]$$

**Improved interval: $[-1, 10]$.** The lower bound has come back from $-\infty$ to $-1$, recovered by the guard, and a second narrowing pass confirms it is stable.

($-1$ rather than $0$ because the last iteration can start at $x = 1$ and decrement to $-1$; the true minimum at the header is 0, reachable only from an even start. The interval domain cannot see the parity, which is (d)'s point.)

(d) The true set is $\{10, 8, 6, 4, 2, 0\}$, so the most precise interval containing it is $\mathbf{[0, 10]}$.

**The interval domain cannot express the true set exactly.** An interval is a contiguous range, and this set has gaps — it omits 9, 7, 5, 3 and 1. Any interval containing 10 and 0 necessarily contains all of them, so the best the domain can do is $[0,10]$, which over-approximates by a factor of about two.

A domain that could do better: **congruences**, which track values modulo a constant. It would derive $x \equiv 0 \pmod 2$, and combined with an interval (a *reduced product* of the two domains) gives exactly $\{x : 0 \le x \le 10,\ x \equiv 0 \bmod 2\}$ — the true set, precisely.

(Other acceptable answers: a **finite powerset domain** with a bound on cardinality, which stores the six values explicitly until it exceeds its budget; or **strided intervals** $[\ell, u]_s$, which pair a range with a stride and are used in binary analysis for exactly this reason.)

The general lesson: **precision is a property of the domain, not of the effort.** No amount of iterating or narrowing recovers parity information, because intervals have nowhere to store it — so improving an analyzer usually means changing or combining domains, which is why abstract interpretation is organized around a catalogue of domains and ways to combine them.

</details>

## Flashback

**From Lesson 4.5 (Type soundness: progress and preservation):** A type system is sound but not complete: it rejects every program that could go wrong, and also some that never would — [Lesson 4.3](04-03-unification-and-hindley-milner.md) P3(d) exhibited $\lambda x.\lambda y.\ x\,y\,x$, a term that reduces perfectly well and has no Hindley–Milner type.

(a) State what the abstract domain is when the "analysis" is type checking, and what $\top$ would correspond to.
(b) Say which direction of error a type system makes, in this lesson's vocabulary, and connect it to Rice's theorem.

<details>
<summary>Solution</summary>

(a) **The abstract domain is the set of types.** A type is an abstract value standing for a set of concrete values: $\mathsf{Nat}$ concretizes to $\{0,1,2,\ldots\}$, $\mathsf{Bool}$ to $\{\mathsf{true},\mathsf{false}\}$, $\tau_1\to\tau_2$ to the set of functions with that behaviour. Type checking is running the program over that domain — the typing rules of [Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md) are precisely abstract transfer functions, computing the type of a compound expression from the types of its parts exactly as $\mathrm{pos}\times\mathrm{neg} = \mathrm{neg}$ does.

**$\top$ corresponds to a "could be anything" type** — a universal supertype like Java's `Object`, or `any` in TypeScript, or the dynamic type in a gradually typed language. It is the element the analysis moves to when it cannot say anything more specific, and it has exactly $\top$'s character: always sound, never informative, and the thing that makes every operation total.

(That correspondence explains something about `any` that is otherwise puzzling: it is not a *type* in the ordinary sense so much as an abstraction failure, which is why using it silences errors rather than describing values, and why type systems that lack it must reject more programs.)

(b) A type system makes **false positives**: it reports a problem (rejects the program) when there is none. It never makes false negatives — it never accepts a program that gets stuck, which is exactly what [Lesson 4.5](04-05-type-soundness-progress-and-preservation.md)'s progress-and-preservation theorem proves.

In this lesson's terms it **over-approximates the set of bad programs**, erring in the safe direction: a rejected program may have been fine, but an accepted one is guaranteed not to get stuck. That is the same one-directional trustworthiness as the null-check analyzer and as Astrée.

The connection to Rice's theorem is direct. "This program never gets stuck" is a non-trivial semantic property of programs, so by [`theory-of-computation` 4.3](../../theory-of-computation/lessons/04-03-rices-theorem-and-more-undecidable-problems.md) it is undecidable — **no checker can be both sound and complete for it.** A type system therefore *must* be wrong in one direction, and the design decision is which. Choosing false positives means the cost is rejected good programs, which the programmer can see and work around; choosing false negatives would mean accepted bad programs, which nobody sees until run time.

And the entire history of type systems is the story of reducing the false-positive rate without touching soundness: parametric polymorphism ([Lesson 4.4](04-04-polymorphism-system-f-and-parametricity.md)) accepts programs simple types rejected, type classes ([Lesson 5.4](05-04-type-classes-and-ad-hoc-polymorphism.md)) accept more, dependent types more still. **That is precisely "make the imprecision a tunable parameter", which is this lesson's thesis, arrived at independently by a different community.**

</details>

## Connections

- **Backward:** the fixed-point iteration is [Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md)'s, generalized from sets of syntactic facts to arbitrary lattices — and widening is what replaces that lesson's finiteness assumption. The optimizations of [Lesson 7.4](07-04-classical-optimizations.md) are the consumers, and the strictness analysis promised in [Lesson 3.4](03-04-evaluation-strategies.md) P3(d) and the escape analysis of [Lesson 6.4](06-04-memory-layout-and-reference-counting.md) are both instances.
- **Forward:** [Lesson 7.6](07-06-code-generation-and-the-back-end.md) closes the pipeline, and its register allocator is an approximation too — graph colouring is NP-complete, so the allocator uses a heuristic and spills when it fails.
- **Sideways:** this is the answer to [`theory-of-computation` 4.3](../../theory-of-computation/lessons/04-03-rices-theorem-and-more-undecidable-problems.md)'s and [3.4](../../theory-of-computation/lessons/03-04-decidable-vs-turing-recognizable.md)'s forward references, and the Flashback shows type checking ([Lesson 4.5](04-05-type-soundness-progress-and-preservation.md)) is the same construction. The sound-but-incomplete bargain recurs in [Lesson 5.6](05-06-ownership-linearity-and-borrow-checking.md)'s borrow checker and [Lesson 6.5](06-05-tracing-garbage-collection.md)'s use of reachability for liveness.
