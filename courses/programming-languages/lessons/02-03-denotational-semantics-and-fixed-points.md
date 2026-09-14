# Programming Languages · Lesson 2.3: Denotational semantics and least fixed points

> ⏱ ~15 min · Module 2: Semantics · Builds on: [2.2 (big-step semantics)](02-02-big-step-semantics-and-environments.md), [1.6 (name resolution)](01-06-name-resolution-and-the-semantic-phase.md) · Unlocks: [2.4 (Hoare logic)](02-04-hoare-logic-and-loop-invariants.md), [7.3 (dataflow analysis)](07-03-dataflow-analysis-as-a-fixed-point.md)

## Why this matters

Both semantics so far define meaning by *running* the program — one step at a time or all at once, but running. That makes some questions awkward. Are these two programs equal? An operational answer must quantify over all inputs and all execution paths. Is this optimization sound? Same problem.

Denotational semantics takes the other route: assign each program a **mathematical object**, and then program equality is just equality of objects. `while false do c` and `skip` both denote the identity function, so they are equal — no execution, no quantification, one line.

The technical obstacle is loops, and overcoming it produces the single most reusable idea in this course. A loop's meaning is defined in terms of itself, which is not a definition. The repair — define it as the **least fixed point** of a monotone operator, reached by iterating from "completely undefined" — is exactly the machinery that computes FIRST and FOLLOW in [Lesson 1.4](01-04-recursive-descent-and-ll1.md), every dataflow analysis in [Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md), and every abstract interpreter in [Lesson 7.5](07-05-abstract-interpretation.md). Learn it properly once here.

## The idea

Write $[\![ \cdot ]\!]$ for "the meaning of". The rule is **compositionality**: the meaning of a construct is built from the meanings of its parts, and from nothing else.

For expressions this is easy. An expression denotes a *function from states to integers*:

$$[\![ a_1 + a_2 ]\!]\,s \;=\; [\![ a_1 ]\!]\,s \;+\; [\![ a_2 ]\!]\,s$$

The `+` on the left is a piece of syntax; the `+` on the right is honest addition on $\mathbb{Z}$. That is the whole trick — syntax on the left, mathematics on the right.

For commands, a command denotes a function *from states to states*. Sequencing is composition, `skip` is identity, and `if` is a case split. Every one of these is a one-liner.

Then you reach `while`, and compositionality has nothing to offer: the loop's parts are $b$ and $c$, and its meaning is not built from theirs by any finite combination — the loop can run any number of times. What you can write down is an *equation the meaning must satisfy*:

$$[\![ \mathsf{while}\ b\ \mathsf{do}\ c ]\!] \;=\; \lambda s.\ \text{if } [\![ b ]\!]\,s \ \text{ then } [\![ \mathsf{while}\ b\ \mathsf{do}\ c ]\!]\,([\![ c ]\!]\,s) \ \text{ else } s$$

This is circular as a definition. But read it as an *equation in an unknown function* $W$, and it says $W = F(W)$ for a specific operator $F$. Solving it means finding a fixed point — and the rest of the lesson is about which fixed point, and why one always exists.

## The formal version

**Semantic domains.** $[\![ a ]\!] : \Sigma \to \mathbb{Z}$ for expressions, where $\Sigma$ is the set of states. For commands,

$$[\![ c ]\!] : \Sigma \rightharpoonup \Sigma$$

a **partial** function. Partiality is how divergence is recorded: if $c$ loops forever on $s$, then $[\![ c ]\!]$ is simply undefined at $s$. This is the answer to [Lesson 2.2](02-02-big-step-semantics-and-environments.md)'s P3 — no rule produces a $\bot$ result, because $\bot$ is not a result. It is the absence of one.

**The clauses.**

$$[\![ \mathsf{skip} ]\!] = \mathrm{id} \qquad [\![ x := a ]\!]\,s = s[x \mapsto [\![ a ]\!]\,s] \qquad [\![ c_1; c_2 ]\!] = [\![ c_2 ]\!] \circ [\![ c_1 ]\!]$$

$$[\![ \mathsf{if}\ b\ \mathsf{then}\ c_1\ \mathsf{else}\ c_2 ]\!]\,s = \begin{cases} [\![ c_1 ]\!]\,s & \text{if } [\![ b ]\!]\,s \\ [\![ c_2 ]\!]\,s & \text{otherwise}\end{cases}$$

Sequencing is literally function composition, and note the order: $c_1$ runs first and appears on the *right*, because that is how $\circ$ works.

**The order on partial functions.** Write $g \sqsubseteq h$ when $h$ **extends** $g$: wherever $g$ is defined, $h$ is defined and agrees. Equivalently, $\mathrm{graph}(g) \subseteq \mathrm{graph}(h)$.

In words: "$h$ knows at least as much as $g$." The least element $\bot$ is the **empty** function, defined nowhere — total ignorance. This order makes $\Sigma \rightharpoonup \Sigma$ a **complete partial order (CPO)**: every increasing chain $g_0 \sqsubseteq g_1 \sqsubseteq \cdots$ has a least upper bound, namely the union of their graphs. (The union is a function because the $g_i$ agree wherever two are both defined.)

**The loop operator.** Define $F : (\Sigma \rightharpoonup \Sigma) \to (\Sigma \rightharpoonup \Sigma)$ by

$$F(g) \;=\; \lambda s.\ \text{if } [\![ b ]\!]\,s \ \text{ then } g([\![ c ]\!]\,s) \ \text{ else } s$$

In words: $F$ takes a candidate loop-meaning $g$ and returns the meaning of "check the guard; if false stop, if true run the body once and then behave like $g$". So $F(g)$ knows how to run **one more iteration** than $g$ does.

**Theorem (Kleene fixed point).** *(card: [complete partial order and least fixed point](../reference.md#complete-partial-order-and-least-fixed-point))* If $F$ is monotone ($g \sqsubseteq h \Rightarrow F(g) \sqsubseteq F(h)$) and continuous (it commutes with least upper bounds of chains) on a CPO with least element $\bot$, then $F$ has a least fixed point, and it is

$$\mathrm{lfp}\,F \;=\; \bigsqcup_{n \ge 0} F^n(\bot)$$

In words: start from total ignorance and apply $F$ over and over; the limit is the answer, and it is the *smallest* solution of $W = F(W)$.

**Definition.** $[\![ \mathsf{while}\ b\ \mathsf{do}\ c ]\!] = \mathrm{lfp}\,F$.

**Why the *least* fixed point.** Larger fixed points exist and they are wrong. For `while true do skip`, $F(g) = \lambda s.\,g(s) = g$, so **every** partial function is a fixed point — including the identity, which would claim the loop terminates leaving the state unchanged. The least one is $\bot$, undefined everywhere, which is correct: the loop diverges on every input. **The least fixed point is the one that assumes nothing it was not forced to.**

## Picture

![Six horizontal bars of increasing length, one per iteration. F to the zero of bottom is a bar of zero length, defined nowhere, undefined everywhere. F to the one is short, defined when r is less than y, the loop runs zero times. F to the two is longer, defined when r is less than two y, the loop runs at most once. F to the three is longer still, defined when r is less than three y, at most twice. An ellipsis follows. The last bar, the least fixed point of F, is longest and defined for all r greater than or equal to zero, and is labelled the loop semantics.](assets/02-03-fig1.svg)

The figure is the division loop `while r >= y do r := r - y` with $y = 5$. Each iterate is a genuine partial function, and each extends the one above it. $F^n(\bot)$ is defined exactly on the states where the loop runs **fewer than $n$ times** — that is, where $r < n\cdot y$ — so the chain covers more and more of $\Sigma$ and its union covers all of it. For a loop that diverges on some states, the chain simply never reaches them, and the least upper bound is undefined there. **That is the whole mechanism**: the $n$-th approximation knows how to run $n$ iterations, and the limit knows how to run as many as the program needs.

## Worked examples

**Example 1 (mechanical): compute the iterates.** Take `while r >= y do r := r - y` with $y = 5$ fixed, tracking only $r$. Then

$$F(g)\,r = \begin{cases} g(r - 5) & r \ge 5 \\ r & r < 5 \end{cases}$$

| iterate | domain | value on its domain |
|---|---|---|
| $F^0(\bot) = \bot$ | $\emptyset$ | — |
| $F^1(\bot)$ | $\{0,\dots,4\}$ | $r$ |
| $F^2(\bot)$ | $\{0,\dots,9\}$ | $r \bmod 5$ |
| $F^3(\bot)$ | $\{0,\dots,14\}$ | $r \bmod 5$ |
| $\mathrm{lfp}\,F$ | all $r \ge 0$ | $r \bmod 5$ |

Check one cell. Is $F^2(\bot)$ defined at $r = 7$? $F^2(\bot)\,7 = F^1(\bot)\,2$, and $F^1(\bot)$ is defined at 2 with value 2. So yes, and the answer is 2 — correct, since $7 \bmod 5 = 2$. Is it defined at $r = 12$? $F^2(\bot)\,12 = F^1(\bot)\,7$, and $F^1(\bot)$ is **undefined** at 7 (since $7 \ge 5$). So no — and indeed the loop needs three iterations from 12, which $F^2$ does not yet know how to do.

The pattern $F^n(\bot)$ defined exactly when $r < 5n$ is the Picture, and it confirms the general statement: **the $n$-th iterate is the loop truncated to at most $n-1$ iterations.**

**Example 2 (why you'd care): proving two programs equal.** Show that

$$\mathsf{while}\ b\ \mathsf{do}\ c \;\;=\;\; \mathsf{if}\ b\ \mathsf{then}\ (c;\ \mathsf{while}\ b\ \mathsf{do}\ c)\ \mathsf{else\ skip}$$

as programs — that is, that they denote the same partial function. This is exactly the small-step $\mathsf{While}$ rule of [Lesson 2.1](02-01-small-step-operational-semantics.md), and here it is a one-line theorem rather than a rule you had to postulate.

Let $W = [\![ \mathsf{while}\ b\ \mathsf{do}\ c ]\!] = \mathrm{lfp}\,F$. Compute the right-hand side's denotation directly from the clauses:

$$[\![ \mathsf{if}\ b\ \mathsf{then}\ (c;\ W)\ \mathsf{else\ skip} ]\!]\,s = \begin{cases} W([\![ c ]\!]\,s) & \text{if } [\![ b ]\!]\,s \\ s & \text{otherwise}\end{cases} \;=\; F(W)\,s$$

And $W$ is a fixed point of $F$, so $F(W) = W$. The two sides are equal. $\blacksquare$

Notice what this cost: no induction, no case analysis on the number of iterations, no quantifying over executions. **Unfolding a loop once is sound because the loop's meaning is a fixed point**, and that is the entire argument. Compare the operational route, where you would have to show that every terminating execution of one has a matching execution of the other and conversely.

This is the practical payoff of the denotational style, and it is why compiler correctness proofs often adopt it: an optimization is a syntactic rewrite, and soundness is the claim that the two sides denote the same object.

## Watch out

- **You might think** the least fixed point is a technical choice among several reasonable ones — **but actually** the larger fixed points make false claims. For `while true do skip` every function is a fixed point, and any non-$\bot$ choice asserts the loop terminates. "Least" means "assumes only what the equation forces", which is the only defensible reading.
- **You might think** $\bot$ is a special value programs can compute, like a null — **but actually** it is the *empty function*, a point in the space of meanings, not a point in the space of states. No program ever produces $\bot$; a program's denotation is merely undefined at some inputs. Conflating the two leads to expecting `if diverges() then 1 else 2` to have a meaning it does not.
- **You might think** denotational semantics can distinguish divergence from stuckness since it handles divergence so cleanly — **but actually** both come out as "undefined at that state", exactly as in big-step. Each of the three styles has one thing it says best: small-step distinguishes stuck from looping, big-step is your interpreter, denotational makes program equality cheap.

## One-liner

> Give every program a mathematical object so that program equality becomes object equality — and when the loop's equation refers to itself, take the least fixed point, which is what you get by starting from total ignorance and iterating.

## Problems

**P1 (🟢)** Using the clauses above, give $[\![ c ]\!]$ explicitly as a function of the state for each program. Say for each whether it is total or partial.

(a) `x := 1; x := x + 1`
(b) `if x >= 0 then y := x else y := 0 - x`
(c) `while false do x := x + 1`

**P2 (🟡)** For the loop `while x >= 1 do x := x - 1`, define $F$ explicitly and compute $F^0(\bot)$, $F^1(\bot)$, $F^2(\bot)$ and $F^3(\bot)$ as partial functions of $x$ (give domain and value). Then state $\mathrm{lfp}\,F$, including its behaviour on negative inputs.

**P3 (🔴)** Consider `while true do skip`, so $[\![ b ]\!]\,s = \mathsf{true}$ always and $[\![ c ]\!] = \mathrm{id}$.

(a) Write $F(g)$ explicitly and show that **every** partial function $g$ is a fixed point of $F$.
(b) Compute $F^n(\bot)$ for every $n$ and state $\mathrm{lfp}\,F$.
(c) The identity function is also a fixed point. State precisely what false claim about the program the identity would encode, and use this to explain in one sentence why "least" is forced rather than chosen.
(d) A *greatest* fixed point is used in some semantics. Given (a), say what $\mathrm{gfp}\,F$ is here and what it would claim about the program.

<details>
<summary>Solutions</summary>

**P1**

(a) $[\![ x := 1; x := x+1 ]\!] = [\![ x := x+1 ]\!] \circ [\![ x := 1 ]\!] = \lambda s.\ s[x \mapsto 2]$.

Every state maps to that state with $x$ set to 2. **Total** — defined on all of $\Sigma$. (Worth noting: the meaning does not mention the incoming value of $x$ at all, which is a fact the compiler can use — see dead-store elimination in [Lesson 7.4](07-04-classical-optimizations.md).)

(b) $[\![ c ]\!] = \lambda s.\ s[y \mapsto |s(x)|]$, since the two branches assign $x$ and $-x$ according to the sign. **Total.**

(c) The guard is false in every state, so $F(g) = \lambda s.\ s$ for every $g$ — the operator ignores its argument entirely. Hence $F^1(\bot) = \mathrm{id}$ and every further iterate is also $\mathrm{id}$, so $\mathrm{lfp}\,F = \mathrm{id} = [\![ \mathsf{skip} ]\!]$. **Total**, and this is the promised one-line proof that `while false do c` equals `skip`.

**P2** Tracking only $x$, the body is $x \mapsto x - 1$ and the guard is $x \ge 1$:

$$F(g)\,x = \begin{cases} g(x-1) & x \ge 1 \\ x & x < 1\end{cases}$$

| iterate | domain | value |
|---|---|---|
| $F^0(\bot) = \bot$ | $\emptyset$ | — |
| $F^1(\bot)$ | $\{x : x \le 0\}$ | $x$ |
| $F^2(\bot)$ | $\{x : x \le 1\}$ | $\min(x, 0)$ |
| $F^3(\bot)$ | $\{x : x \le 2\}$ | $\min(x, 0)$ |

Checking $F^2(\bot)$ at $x = 1$: it is $F^1(\bot)\,0 = 0$, defined. At $x = 2$: it is $F^1(\bot)\,1$, and $F^1(\bot)$ is undefined at 1 (since $1 \ge 1$), so $F^2(\bot)$ is undefined at 2. So $F^n(\bot)$ has domain $\{x : x \le n-1\}$ — the states from which the loop runs at most $n-1$ times.

$$\mathrm{lfp}\,F = \lambda x.\ \min(x, 0), \quad \text{defined for every integer } x$$

**On negative inputs the loop terminates immediately** and leaves $x$ unchanged, which is why the value is $\min(x,0)$ rather than $0$: from $x = -3$ the guard is already false and the answer is $-3$. The function is **total** — this loop diverges on nothing, because $x$ strictly decreases and the integers below any start value reach 0 in finitely many steps. (That decreasing quantity is the *variant* of [Lesson 2.4](02-04-hoare-logic-and-loop-invariants.md).)

**P3**

(a) With the guard always true and the body the identity,

$$F(g) = \lambda s.\ \text{if true then } g(\mathrm{id}(s)) \text{ else } s = \lambda s.\ g(s) = g$$

So $F$ is the **identity operator** on partial functions. Every $g$ satisfies $F(g) = g$, so every partial function is a fixed point.

(b) Since $F$ is the identity operator, $F^n(\bot) = \bot$ for every $n$, including $n = 0$. The chain is constant, so its least upper bound is $\bot$:

$$\mathrm{lfp}\,F = \bot, \quad \text{the empty function.}$$

This is correct: the program terminates on no input, so its denotation should be defined nowhere.

(c) The identity function claims that for **every** state $s$, the program started in $s$ terminates and leaves the state exactly $s$ — that is, that `while true do skip` is equivalent to `skip`. That is flatly false: the program never terminates from any state.

"Least" is forced because the fixed-point equation is a *constraint*, not a definition — here it constrains nothing at all, and any choice beyond the minimum is information the program's text never supplied. Taking the least fixed point is the discipline of asserting termination only where the iteration actually established it, and here it establishes it nowhere.

(d) Since every partial function is a fixed point, the greatest is the largest element of the order — but the order $\sqsubseteq$ on *partial functions* has no single greatest element in general (any two total functions that differ are incomparable, and neither extends the other). In the standard setting where the greatest fixed point is wanted, one works in a domain with a top element, and there $\mathrm{gfp}\,F$ would be $\top$: the meaning that is defined everywhere with an arbitrary, unconstrained result.

What it would claim is that the program terminates on every input, with a result nothing pins down. That is exactly backwards for a semantics of a programming language, which is why the least fixed point is standard here. (Greatest fixed points are the right tool elsewhere — for *coinductive* definitions such as bisimulation of infinite processes, or the "may" analyses of [Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md), where the question is what can *never* be ruled out rather than what is forced.)

</details>

## Flashback

**From Lesson 1.6 (Name resolution and the semantic phase):** The scope-stack algorithm resolves a use occurrence by searching frames from the top down and stopping at the first hit.

Denotational semantics insists on **compositionality**: a construct's meaning is a function of its parts' meanings only.

(a) Explain why $[\![ x ]\!]$ cannot be a plain integer, and state what it is instead.
(b) Use (a) to say precisely what job the state $s$ is doing, and connect it to the scope stack.

<details>
<summary>Solution</summary>

(a) Because a variable has no meaning in isolation. The expression `x` denotes 3 in one state and 17 in another, and compositionality forbids the meaning of `x + 1` from depending on anything except the meanings of `x` and `1` — so if $[\![ x ]\!]$ were a bare integer, the semantics would have to fix which one, once and for all, which is obviously wrong.

Instead $[\![ x ]\!]$ is a **function**:

$$[\![ x ]\!] = \lambda s.\ s(x) \;:\; \Sigma \to \mathbb{Z}$$

The meaning of a variable is "look me up in whatever state you have". Everything else follows: $[\![ a_1 + a_2 ]\!] = \lambda s.\ [\![ a_1 ]\!]s + [\![ a_2 ]\!]s$ is compositional because both parts are functions of the same $s$, and the composite is too.

This is the general move — when a meaning depends on context, make the meaning a **function of the context** rather than smuggling the context in. It recurs throughout the course: a command's meaning is a function of the state, a typing judgment is relative to a context $\Gamma$ ([Lesson 4.1](04-01-the-simply-typed-lambda-calculus.md)), and a closure is literally a function paired with the environment it needs ([Lesson 6.1](06-01-names-scope-and-closures.md)).

(b) The state $s$ is **the resolved scope stack, evaluated**. Lesson 1.6's algorithm turned each use occurrence of `x` into a pointer at its binding occurrence; $s$ is the map from those binding occurrences to the values they currently hold, and $s(x)$ is the lookup that pointer licenses.

The two phases split the work cleanly: name resolution settles *which* binding each `x` refers to, using only the nesting structure and no values at all, and the semantics settles *what value* that binding holds, using $s$. Because resolution already happened, $s(x)$ in the semantics needs no search — the frame-walking is compile-time work, and by the time the denotation runs, `x` is a slot, not a name. That separation is why [Lesson 6.1](06-01-names-scope-and-closures.md) can implement environments as arrays indexed by position rather than as hash maps of strings.

</details>

## Connections

- **Backward:** the partial function of this lesson is the answer to [Lesson 2.2](02-02-big-step-semantics-and-environments.md)'s P3 — divergence as absence from a domain rather than a rule with a negative premise. The loop-unfolding theorem of Example 2 is [Lesson 2.1](02-01-small-step-operational-semantics.md)'s $\mathsf{While}$ rule, demoted from axiom to consequence.
- **Forward:** the same least-fixed-point machinery, on a finite lattice instead of a CPO, is every dataflow analysis in [Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md) and every abstract interpreter in [Lesson 7.5](07-05-abstract-interpretation.md), where finiteness is what makes the iteration terminate. [Lesson 2.4](02-04-hoare-logic-and-loop-invariants.md) gives the third semantics, and its loop rule is this fixed point viewed as an invariant.
- **Sideways:** a CPO with a least element and continuous maps is the setting [`real-analysis` 2.1](../../real-analysis/lessons/02-01-convergence-epsilon-n.md)'s monotone convergence theorem lives in, one order-theoretic level up — an increasing chain that is bounded has a limit, and you reach it by iterating. The $Y$ combinator of [Lesson 3.3](03-03-confluence-and-the-y-combinator.md) is this same "recursion = fixed point" idea carried out syntactically instead of semantically.
