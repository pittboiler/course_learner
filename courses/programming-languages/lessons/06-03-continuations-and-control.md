# Programming Languages · Lesson 6.3: Continuations, CPS and control operators

> ⏱ ~15 min · Module 6: Runtime · Builds on: [6.2 (state and the store)](06-02-state-references-and-the-store.md), [4.2 (Curry–Howard)](04-02-type-checking-and-curry-howard.md) · Unlocks: [6.4 (memory layout)](06-04-memory-layout-and-reference-counting.md), [7.1 (the compiler pipeline)](07-01-the-compiler-pipeline-and-irs.md)

## Why this matters

Exceptions, generators, coroutines, `async`/`await`, early `return`, backtracking search — every language accumulates a pile of control constructs, each with its own syntax and its own interaction rules with the others. They look like six features. They are one.

Each is an answer to "don't continue normally — continue *there* instead", and once you can name "the rest of the computation" as a value, all of them are ordinary function calls. That naming is the **continuation**, and the transformation that makes every continuation explicit (**CPS**) is both a way to understand control and a real compiler intermediate representation — SML/NJ and Scheme compilers have used it as their IR, and it is the foundation of how a compiler implements generators and `async` today.

There is also a surprise waiting: [Lesson 4.2](04-02-type-checking-and-curry-howard.md) P3(d) said `call/cc` inhabits Peirce's law. First-class continuations *are* classical logic, and this is where that gets cashed out.

## The idea

Evaluate $3 + (4 \times f\,5)$. While $f\,5$ is running, something is pending: multiply by 4, then add 3. Write that down as a function:

$$k \;=\; \lambda v.\ 3 + (4 \times v)$$

$k$ is **the continuation of $f\,5$** — the rest of the computation, waiting for a value. It exists in every language; what differs is whether you can get your hands on it.

**Continuation-passing style** makes it explicit everywhere. Rewrite every function to take an extra argument, its continuation, and to *call* it instead of returning:

$$f\,x = x + 1 \qquad\rightsquigarrow\qquad f\,x\,k = k\,(x+1)$$

In CPS **no function ever returns**. Each one finishes by calling its continuation, so every call is in tail position, so the control stack stops growing — the stack has been turned into a chain of closures on the heap. That is a real implementation strategy, not a thought experiment.

And once continuations are values, "control" is just "which continuation do I call?" Return normally: call the one you were given. Throw: call the handler's. Yield: call the consumer's, keeping your own for later. Await: register your own and call the scheduler's.

## The formal version

**The CPS transform.** *(card: [the cps transform](../reference.md#the-cps-transform))* Write $[\![ e ]\!]\,k$ for "evaluate $e$ and pass the result to $k$".

$$[\![ x ]\!]\,k = k\,x \qquad\qquad [\![ \lambda x.\,e ]\!]\,k = k\,(\lambda x.\lambda k'.\ [\![ e ]\!]\,k')$$

$$[\![ e_1\,e_2 ]\!]\,k \;=\; [\![ e_1 ]\!]\,\big(\lambda f.\ [\![ e_2 ]\!]\,(\lambda v.\ f\,v\,k)\big)$$

Read the application clause: evaluate the function, then the argument, then call. **The order is written into the nesting** — the transform *fixes* the evaluation order that [Lesson 6.2](06-02-state-references-and-the-store.md) showed becomes observable with effects. Swap the two inner transforms and you have specified right-to-left. That is why CPS is a useful IR: it makes an implementation decision explicit and unambiguous.

**Tail calls.** A call is in **tail position** when its result is the enclosing function's result — nothing remains to do afterwards, so the caller's frame is dead at the moment of the call and can be **reused** rather than pushed on top of. **Tail-call elimination** performs that reuse, turning recursion into a loop and making the stack depth constant.

$$\mathsf{loop}\ n = \mathsf{if}\ n = 0\ \mathsf{then}\ 0\ \mathsf{else}\ \mathsf{loop}\ (n-1)$$

runs in constant space with elimination and overflows without it. Scheme *requires* it, ML and Haskell provide it, and the JVM does not — which is why Scala's `@tailrec` exists and why functional code on the JVM uses explicit loops or trampolines. **In CPS every call is a tail call**, which is the precise sense in which CPS conversion eliminates the stack.

**Control operators.**

$$\mathsf{callcc} : ((\tau\to\sigma)\to\tau)\to\tau$$

`callcc f` applies $f$ to the current continuation, reified as a function $k$. Calling $k\,v$ **abandons** wherever you are and returns $v$ from the `callcc`. If $f$ returns normally instead, that value is the result.

Two uses, both one-liners:

*Early exit.* `callcc (\k -> ... k 42 ...)` escapes to the `callcc` from arbitrarily deep inside — this is `return`, `break` and `goto`-out-of-a-loop, unified.

*Exceptions.* `try e with h` installs a handler by capturing the continuation of the `try`; `raise v` calls the innermost captured one. So an exception is a non-local jump to a saved continuation, and the handler stack is a stack of continuations.

**The classical-logic connection.** The type of `callcc` is

$$((\tau\to\sigma)\to\tau)\to\tau$$

which is **Peirce's law**, classically valid and intuitionistically unprovable ([Lesson 4.2](04-02-type-checking-and-curry-howard.md)). So a language with first-class continuations corresponds to *classical* logic, and one without to intuitionistic. The computational reading of a classical proof is "assume the negation, and if you derive a contradiction, jump back" — which is exactly what capturing and invoking a continuation does.

## Picture

![Text explaining that while evaluating 3 plus open paren 4 times f of 5 close paren, what is left over is k equals lambda v dot 3 plus open paren 4 times v close paren, labelled the continuation of f 5. Below a dashed rule, two columns: direct style showing f x equals x plus 1, and continuation-passing style showing f x k equals k of x plus 1. Below, text notes that in CPS no function returns, each one calls its continuation instead, so every call is a tail call and the stack stops growing -- the control stack has become an ordinary chain of closures on the heap. A closing line states that exceptions, generators and async are all "call a different continuation".](assets/06-03-fig1.svg)

The two-column comparison is the whole transform. On the left, `f` produces a value and the caller decides what to do with it; on the right, the caller has already said what to do, and `f` does it. **The information is the same; what changed is who holds it** — and holding it as a value is what makes it manipulable.

## Worked examples

**Example 1 (mechanical): CPS-convert and trace.** Convert $f\,x = x+1$ and $g\,y = f\,(y \times 2)$, then evaluate $g\,5$.

$$f\,x\,k = k\,(x+1) \qquad\qquad g\,y\,k = f\,(y\times 2)\,k$$

Note $g$'s body: the call to $f$ is in tail position, so $g$ passes **its own** continuation straight through rather than wrapping it. Now $g\,5\,\mathsf{halt}$:

| step | term |
|---|---|
| 0 | $g\ 5\ \mathsf{halt}$ |
| 1 | $f\ 10\ \mathsf{halt}$ |
| 2 | $\mathsf{halt}\ 11$ |

Two calls, and **the continuation never grew**. Contrast a non-tail version, $h\,y = 1 + f\,y$:

$$h\,y\,k = f\,y\,(\lambda v.\ k\,(1+v))$$

Here $h$ builds a *new* continuation wrapping $k$, because something remains to be done after $f$ returns. **That wrapping is the stack frame**, made visible as a closure — and the depth of nested lambdas is exactly the stack depth. Tail calls pass $k$ along; non-tail calls wrap it.

**Example 2 (why you'd care): a generator is a saved continuation.** A generator produces values one at a time, suspending between them:

```
gen = yield 1; yield 2; yield 3
```

Implement it with continuations. When `yield v` runs, it must (i) hand $v$ to the consumer, and (ii) save *its own* continuation so the producer can be resumed. So:

```
yield v = callcc (\resume ->
              producerState := resume;     -- save where we are
              consumerCont v)        -- jump to the consumer
```

and `next()` on the consumer side does the mirror image: save the consumer's continuation, then invoke the saved `producerState`.

**The two sides are symmetric**, which is the insight: a generator is not a special kind of function, it is two computations each holding the other's continuation and alternating. That is why generators, coroutines and `async`/`await` are the same mechanism — `await` saves the caller's continuation and registers it with a scheduler, and `async` functions are exactly functions the compiler has CPS-converted.

**How real compilers do it.** Rather than exposing `callcc`, a compiler transforms an `async` or generator function into a **state machine**: the local variables become fields of a heap object, each `await`/`yield` point becomes a case label, and resuming means calling back in with the saved state. That is a *defunctionalized* continuation — instead of a closure, an integer tag plus the captured variables. Same content, cheaper representation, and it is why C#, Rust and JavaScript can offer `async` without offering `callcc`.

**The cost of full `callcc`.** A continuation captured by `callcc` may be invoked *more than once*, so it must be immutable — and if the stack is a mutable array, capturing means copying the whole thing. That is why Scheme implementations pay for `callcc` and why almost every mainstream language offers the restricted forms (exceptions, generators, `async`) that can be compiled to state machines, rather than the general one.

## Watch out

- **You might think** CPS eliminates the stack — **but actually** it *relocates* it, from the control stack to a chain of closures on the heap. The information is identical; what changes is that the chain is now ordinary data a collector manages, and that it can be captured, stored and re-entered. Example 1's nested lambdas are the frames.
- **You might think** tail-call elimination is an optional optimization — **but actually** in a language without loops it is a correctness requirement: Scheme *requires* it, because recursion is the only iteration construct and without elimination every loop overflows. On the JVM it is absent, which is a language-level constraint on everything hosted there.
- **You might think** `callcc` is exotic and unrelated to your daily work — **but actually** every `try`/`catch`, every generator, and every `await` is a restricted continuation. Those restrictions are what let a compiler implement them as state machines rather than stack copies, which is a deliberate and sensible trade.

## One-liner

> Name "the rest of the computation" and every control construct becomes a function call — return, throw, yield and await differ only in which continuation they invoke, and CPS is the transform that writes them all down.

## Problems

**P1 (🟢)** CPS-convert each definition.

(a) $\mathsf{double}\ x = x \times 2$
(b) $\mathsf{inc4}\ x = \mathsf{double}\ (x+2)$
(c) $\mathsf{plus1}\ x = 1 + \mathsf{double}\ x$
(d) $\mathsf{comp}\ x = \mathsf{double}\ (\mathsf{double}\ x)$

**P2 (🟡)** For each call, say whether it is in tail position, and state the stack depth of evaluating the function on input $n$ with tail-call elimination and without.

(a) `fact n = if n == 0 then 1 else n * fact (n-1)`
(b) `factAcc n a = if n == 0 then a else factAcc (n-1) (n*a)`
(c) `len xs = case xs of Nil -> 0; Cons _ r -> 1 + len r`

**P3 (🔴)** Consider `callcc (\k -> 1 + k 10)`.

(a) Give its value, and say what happens to the `1 +`.
(b) Give the value of `1 + callcc (\k -> k 10)` and explain the difference from (a).
(c) Give the value of `callcc (\k -> 1 + 10)` — note `k` is unused — and state the general rule your three answers illustrate.
(d) `callcc` has type $((\tau\to\sigma)\to\tau)\to\tau$. State which logical law this is, whether it is intuitionistically provable, and what its presence does to the logic the language corresponds to.

<details>
<summary>Solutions</summary>

**P1**

(a) $\mathsf{double}\ x\ k = k\,(x\times 2)$ — the body is a primitive computation, so it is handed straight to the continuation.

(b) $\mathsf{inc4}\ x\ k = \mathsf{double}\ (x+2)\ k$.

The call to `double` is in **tail position** — nothing happens after it — so the continuation is **passed through unchanged**. No new closure is built.

(c) $\mathsf{plus1}\ x\ k = \mathsf{double}\ x\ (\lambda v.\ k\,(1+v))$.

Here the call is **not** in tail position: after `double` returns, 1 must be added. So a **new continuation is built**, wrapping $k$ — and that wrapper is the stack frame.

(d) $\mathsf{comp}\ x\ k = \mathsf{double}\ x\ (\lambda v.\ \mathsf{double}\ v\ k)$.

The inner call is not in tail position (its result feeds the outer `double`), so it gets a wrapper; the outer call *is* in tail position within that wrapper, so it receives $k$ directly. **One level of wrapping for one level of pending work**, which is the general pattern.

**P2**

(a) `fact`: the recursive call is **not in tail position** — after it returns, the multiplication by `n` must happen.

Stack depth on input $n$: $\Theta(n)$ **both with and without** tail-call elimination. Elimination cannot help, because the call is not a tail call: there is genuinely pending work, and it has to be recorded somewhere.

(b) `factAcc`: the recursive call **is in tail position** — its result is the function's result, with nothing after it. The accumulator carries the pending multiplication forward instead of leaving it behind.

Stack depth: $\Theta(1)$ **with** elimination (the frame is reused, and the recursion is a loop), $\Theta(n)$ **without**.

Comparing (a) and (b) is the point of accumulator-passing style: it is a source-level transformation that converts a non-tail recursion into a tail one, and it is what makes (b) safe on inputs where (a) overflows. The accumulator is playing the role the continuation plays in CPS — carrying the pending work forward rather than leaving it on the stack.

(c) `len`: the recursive call is **not in tail position** — `1 +` remains.

Stack depth: $\Theta(n)$ in the length of the list, both ways. (The standard fix is the same as (b): `len' xs a = case xs of Nil -> a; Cons _ r -> len' r (a+1)`.)

**P3**

(a) **10.**

`callcc` applies its argument to the current continuation $k$, which here is "return this value from the `callcc`". Inside, `k 10` is invoked — and invoking a continuation **abandons the current context**. So the `1 +` is *discarded*: it was part of the computation inside the lambda, and jumping to $k$ throws that away. The `callcc` expression yields 10.

(b) **11.**

The difference is *where the addition sits*. Here `1 +` is **outside** the `callcc`, so it is part of the continuation $k$ itself. Invoking `k 10` jumps to that continuation with the value 10, and the continuation's job is to add 1. Result 11.

So (a) and (b) contain the same three symbols and differ in which side of the `callcc` boundary the `1 +` falls on: **inside is abandoned, outside is the continuation.**

(c) **11.**

`k` is never invoked, so no jump occurs and the lambda simply **returns normally** with $1 + 10 = 11$. That value becomes the `callcc`'s value.

The general rule the three illustrate: **`callcc f` yields whichever comes first — the value $f$ passes to $k$, or the value $f$ returns normally.** Invoking $k$ is an abandoning jump that discards the rest of $f$'s body; falling off the end of $f$ is an ordinary return. That is exactly the semantics of an early `return` inside a block, and it is why `callcc` subsumes `return`, `break` and exception-raising.

(d) The type $((\tau\to\sigma)\to\tau)\to\tau$ is **Peirce's law**.

It is **not intuitionistically provable** — it is one of the standard axioms (equivalent to excluded middle and to double-negation elimination) that separate classical from intuitionistic logic. [Lesson 4.2](04-02-type-checking-and-curry-howard.md) P3(b) established that no closed simply-typed term inhabits it, which is exactly why `callcc` must be a primitive rather than something you can define.

Its presence makes the language correspond to **classical** rather than intuitionistic logic, so every classical theorem acquires a proof term. The cost, as [Lesson 4.2](04-02-type-checking-and-curry-howard.md) P3(d) noted, is that such a proof is no longer constructive: a classical proof of "there exists an $x$ with property $P$" need not hand you an $x$, and the computational counterpart is that a `callcc`-using program's value can depend on control flow its type does not record. That is the precise sense in which classical logic and first-class control are the same thing.

</details>

## Flashback

**From Lesson 4.2 (Type checking and the Curry-Howard correspondence):** P1(c) gave $\lambda x.\lambda f.\ f\,x$ as an inhabitant of $\alpha \to (\alpha\to\beta)\to\beta$, and P3(a) gave the *same term* as an inhabitant of $\alpha \to \neg\neg\alpha$, where $\neg\tau = \tau \to \mathsf{Void}$.

(a) State the relationship between that term and the CPS transform of a value, reading the type.
(b) Use it to say what the CPS transform does to a *program's type*, and name the logical translation this coincides with.

<details>
<summary>Solution</summary>

(a) $\lambda x.\lambda f.\ f\,x$ **is** the CPS transform of a value. Compare the transform's first clause:

$$[\![ x ]\!]\,k = k\,x \qquad\text{i.e.}\qquad [\![ x ]\!] = \lambda k.\ k\,x$$

So CPS-converting the value $x$ produces exactly $\lambda k.\ k\,x$, and the term above is that operation packaged as a function — "take a value, return its CPS form".

The type says the same thing, once you read $\beta$ as the answer type: $\alpha\to\beta$ is the type of a **continuation** expecting an $\alpha$, and $(\alpha\to\beta)\to\beta$ is the type of a computation that will hand an $\alpha$ to any such continuation. So

$$\alpha \;\to\; \underbrace{(\alpha\to\beta)\to\beta}_{\text{CPS of an }\alpha}$$

is literally "every value can be presented as a computation that feeds itself to a consumer". That is also [Lesson 3.2](03-02-church-encodings-and-beta-reduction.md)'s slogan — data encoded by what you can do with it — applied to control rather than to data.

(b) CPS transforms a program of type $\tau$ into one of type $(\tau\to\rho)\to\rho$, where $\rho$ is the answer type. Setting $\rho := \mathsf{Void}$ gives

$$\tau \quad\rightsquigarrow\quad (\tau\to\mathsf{Void})\to\mathsf{Void} \;=\; \neg\neg\tau$$

so **the CPS transform is the double-negation translation**, which is the standard embedding of classical logic into intuitionistic logic (Gödel–Gentzen, and in this precise form the Kolmogorov/Friedman translation).

The coincidence is exact and explains the lesson's other surprise from both sides. P3(d) observed that `callcc` inhabits Peirce's law and so makes the language classical. This says *why* the embedding works: a classical proof of $A$ is an intuitionistic proof of $\neg\neg A$, and computationally an intuitionistic proof of $\neg\neg A$ **is** a CPS-converted program — one that never returns a value but instead hands it to a continuation. "Assume the negation, derive a contradiction, jump back" and "capture the continuation and invoke it later" are the same operation, read in logic and in code.

It also explains P3(b)'s asymmetry cleanly. $\alpha\to\neg\neg\alpha$ is inhabited because every value *can* be put in CPS; $\neg\neg\alpha\to\alpha$ is not, because running a CPS computation to extract its value requires an answer type you do not have — you would need to supply a continuation $\alpha\to\mathsf{Void}$, and none exists.

</details>

## Connections

- **Backward:** the evaluation order the transform fixes is what [Lesson 6.2](06-02-state-references-and-the-store.md) showed becomes observable once effects exist; continuations-as-closures are [Lesson 6.1](06-01-names-scope-and-closures.md)'s closures, and `callcc`'s type is [Lesson 4.2](04-02-type-checking-and-curry-howard.md)'s Peirce's law, promised there and cashed here.
- **Forward:** CPS-converted code allocates its frames on the heap, so [Lesson 6.4](06-04-memory-layout-and-reference-counting.md)'s stack-versus-heap distinction is exactly what the transform trades. CPS is a real IR, and [Lesson 7.1](07-01-the-compiler-pipeline-and-irs.md)'s three-address code plus [Lesson 7.2](07-02-control-flow-graphs-dominance-and-ssa.md)'s SSA are the imperative alternative — SSA and CPS are known to be equivalent formulations.
- **Sideways:** the continuation monad is [Lesson 5.5](05-05-effects-monads-and-the-categorical-view.md)'s machinery applied here — $M\alpha = (\alpha\to\rho)\to\rho$, whose `>>=` *is* the CPS application clause, which is why `async`/`await` is do-notation for it.
