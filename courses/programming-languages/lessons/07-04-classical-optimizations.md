# Programming Languages · Lesson 7.4: Classical optimizations

> ⏱ ~15 min · Module 7: Compilation · Builds on: [7.3 (dataflow analysis)](07-03-dataflow-analysis-as-a-fixed-point.md), [7.2 (SSA)](07-02-control-flow-graphs-dominance-and-ssa.md) · Unlocks: [7.5 (abstract interpretation)](07-05-abstract-interpretation.md), [7.6 (code generation)](07-06-code-generation-and-the-back-end.md)

## Why this matters

Here is where the machinery pays off. Each optimization below is a few lines of code once the enabling analysis has run — and the interesting content is not the transformations themselves but **which analysis each one needs, and what makes it legal.**

That framing is what makes the catalogue worth learning rather than memorizing. Given an unfamiliar optimization you can ask the two questions — *what fact does this need?* and *what would make it unsound?* — and derive the rest. It also explains the ordering problem every compiler faces: optimizations enable each other, no order is best for all programs, and knowing which enables which is how a pass pipeline gets designed.

One thread runs through all of it: **an optimization is sound when it preserves the program's meaning**, in the denotational sense of [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md) — same partial function from inputs to outputs. That is a precise criterion, and [Lesson 6.2](06-02-state-references-and-the-store.md) is why it is hard: once there are effects, "same meaning" includes the effects and their order.

## The idea

Six transformations, each licensed by a fact.

- **Constant folding** — evaluate at compile time what does not depend on run time. `3 + 4` becomes `7`. *Needs nothing.*
- **Constant propagation** — replace a variable by its value where the value is known. *Needs reaching definitions* (or SSA).
- **Copy propagation** — after `y = x`, replace later `y` with `x`. *Needs reaching definitions.*
- **Common-subexpression elimination (CSE)** — reuse an expression already computed. *Needs available expressions.*
- **Dead-code elimination (DCE)** — delete a computation whose result is never read. *Needs liveness.*
- **Loop-invariant code motion (LICM)** — hoist a computation that does not change across iterations out of the loop. *Needs reaching definitions and loop structure.*

The pattern to notice: **each one is a rewrite guarded by a dataflow query**, and the analysis is the expensive half.

## The formal version

**Soundness.** A transformation $T$ is sound if $[\![ T(P) ]\!] = [\![ P ]\!]$ — same denotation, hence same observable behaviour on every input. Two caveats that bite in practice:

- *Non-termination counts.* A transformation that makes a diverging program terminate is unsound, so DCE may not delete a loop that might not halt, even if its result is unused.
- *Effects count.* Deleting a computation is only legal if it has no effects — no store, no I/O, no exception. That is why `x = a / b` cannot be deleted as dead in a language where division by zero traps: the division is observable.

**Constant folding** rewrites $x \leftarrow c_1\ \mathit{op}\ c_2$ to $x \leftarrow c$. The subtleties are all about **matching the target's arithmetic**: the compiler must fold with the same overflow, rounding and NaN behaviour the machine would produce. Folding `0.1 + 0.2` at compile time in a different rounding mode than the target uses is a real and famous class of bug.

**Constant propagation** replaces a use of $v$ by $c$ when *every* definition reaching that use assigns $c$. In SSA this is nearly free — a name has one definition, so the test is "is my definition a constant?" — and a phi whose arguments are all the same constant is that constant ([Lesson 7.2](07-02-control-flow-graphs-dominance-and-ssa.md)).

**CSE** replaces $t \leftarrow a\ \mathit{op}\ b$ by $t \leftarrow u$ when $a\ \mathit{op}\ b$ is **available** at that point — computed on every path here, with no intervening assignment to $a$ or $b$, and its value held in $u$. The "no intervening assignment" clause is the kill set doing its job ([Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md) P2).

**DCE** deletes $v \leftarrow e$ when $v \notin \mathrm{OUT}$ at that point and $e$ is effect-free. It is **iterative**: deleting one instruction can make its operands' definitions dead, so it runs to a fixed point — the same pattern once more.

**LICM** hoists $t \leftarrow a\ \mathit{op}\ b$ out of a loop into a **preheader** when $a$ and $b$ are loop-invariant (no definition inside the loop reaches them). The correctness condition people forget: the hoisted instruction now executes **even if the loop body never runs**, so it must be safe to execute unconditionally — which is why `a[i] / b` is not hoisted past a guard that established $b \ne 0$.

**They enable each other.** *(card: [optimizations and the analysis each needs](../reference.md#optimizations-and-the-analysis-each-needs))* Folding creates constants for propagation; propagation creates dead stores for DCE; CSE creates copies for copy propagation; LICM creates loop-invariant code that folds. So compilers run passes in a designed order and often repeat them. **No single order is optimal for all programs**, and finding a good one is an engineering problem, not a theorem — this is the "phase-ordering problem", and it is why `-O2` is a curated pass list rather than a principle.

## Picture

![Four columns headed lowered, fold, propagate and DCE. The lowered column lists t1 equals 3 plus 4; x equals t1; t2 equals x times 2; y equals t2; return y. The fold column shows t1 equals 7 with the rest unchanged. The propagate column shows t1 equals 7, x equals 7, t2 equals 14, y equals 14, return 14. The DCE column shows only return 14. Below, text notes that constant folding needs no analysis, propagation needs reaching definitions, and dead-code elimination needs liveness and removes all four remaining lines.](assets/07-04-fig1.svg)

Five instructions become one, and the columns are the passes. Read across any row and you see one value being computed earlier and earlier until it is a literal; read down the last column and you see that once every value is a literal, every *assignment* is dead.

**The last step is the one worth noticing.** The four assignments were not dead before propagation — `return y` read `y`, which read `t2`, and so on. Propagation is what broke the chain, by replacing the read with a literal, and DCE then cascaded backwards. That is the enabling relationship made concrete.

## Worked examples

**Example 1 (mechanical): the full pipeline on five instructions.** Lower `let x = 3 + 4; let y = x * 2; return y;` and optimize.

```
t1 = 3 + 4
x  = t1
t2 = x * 2
y  = t2
return y
```

| pass | action | result |
|---|---|---|
| constant folding | `3 + 4` has two literal operands | `t1 = 7` |
| constant propagation | `t1` is 7 at its use | `x = 7` |
| constant folding | now `7 * 2` has two literals | `t2 = 14` |
| constant propagation | `t2` is 14 at its use | `y = 14` |
| constant propagation | `y` is 14 at its use | `return 14` |
| dead-code elimination | `y` now unread | delete `y = 14` |
| dead-code elimination | `t2` now unread | delete `t2 = 14` |
| dead-code elimination | `x` now unread | delete `x = 7` |
| dead-code elimination | `t1` now unread | delete `t1 = 7` |

Final program:

```
return 14
```

**Note the interleaving** — folding and propagation alternate, because each creates work for the other, and DCE runs last and cascades through four instructions in reverse order. A compiler achieves this either by iterating the passes or, in an SSA-based compiler, by running *sparse conditional constant propagation*, which does the folding and propagation together to a fixed point in one pass.

**Example 2 (why you'd care): three loop optimizations and a trap.** Take

```
for (i = 0; i < n; i++) {
    t = a * b;
    arr[i] = t + i;
}
```

*LICM.* `a * b` does not change across iterations — neither `a` nor `b` is assigned in the loop — so hoist it into a preheader:

```
t = a * b;
for (i = 0; i < n; i++) { arr[i] = t + i; }
```

$n$ multiplications become 1.

*Then DCE inside the loop.* Nothing to remove here, but had `t` been unused the hoisted instruction would itself become dead, and DCE would delete it — another enabling chain.

**Now the trap.** Change the body to

```
for (i = 0; i < n; i++) {
    if (b != 0) { t = a / b; arr[i] = t; }
}
```

Is `a / b` loop-invariant? Yes — neither operand changes. **Hoisting it is still wrong.** In the original, the division executes only when `b != 0`; hoisted to the preheader it executes unconditionally, so a call with `b == 0` and `n > 0` now traps where it previously did not. The transformation changed a terminating program into a faulting one, which is not meaning-preserving.

The condition LICM must check is therefore not merely invariance but **safety to execute speculatively**: either the instruction cannot fault (pure arithmetic that cannot trap), or it **dominates** every loop exit ([Lesson 7.2](07-02-control-flow-graphs-dominance-and-ssa.md)), meaning it would have executed anyway on every path through the loop. Here it does neither — it sits inside a conditional — so it stays put.

**The general lesson: invariance licenses the *move*, and speculation-safety licenses the *unconditional execution*.** Conflating the two is one of the standard ways to write an unsound optimizer, and it is why real LICM implementations carry a `isSafeToSpeculativelyExecute` predicate.

## Watch out

- **You might think** an unused computation can always be deleted — **but actually** deleting it is legal only if it is effect-free and terminating. A call whose result is unused may still write to a file; a loop whose result is unused may not halt; a division may trap. DCE's guard is "no observable effect", not "no one reads the result".
- **You might think** more optimization passes always produce better code — **but actually** passes interact, and running them in a different order gives different results with no order best for all programs. Some optimizations even *inhibit* others: aggressive CSE lengthens live ranges, which increases register pressure and causes spills in [Lesson 7.6](07-06-code-generation-and-the-back-end.md).
- **You might think** constant folding is trivially safe — **but actually** the compiler must reproduce the target's arithmetic exactly, including integer overflow behaviour and floating-point rounding. A compiler folding on a host with different rounding than the target silently changes results, which is why cross-compilers use software arithmetic for folding rather than the host's.

## One-liner

> Each optimization is a small rewrite guarded by a dataflow query — the analysis is the expensive half, the soundness condition is "same meaning including effects and termination", and the passes enable each other in an order no theorem fixes.

## Problems

**P1 (🟢)** Name the analysis each transformation requires.

(a) replacing `y` with `x` after `y = x`
(b) deleting `t = a + b` when `t` is never read
(c) replacing the second `a + b` with a saved temporary
(d) folding `3 * 4` to `12`

**P2 (🟡)** Optimize each, naming every pass applied and giving the final code.

(a) `x = 2; y = x + 3; z = y * 2; return z;`
(b) `t1 = a + b; t2 = a + b; return t1 + t2;`
(c) `x = f(); y = 1; return y;` where `f` writes to a global

**P3 (🔴)** Consider

```
for (i = 0; i < n; i++) {
    if (flag) { s = arr[j] + 1; }
    total = total + i;
}
```

with `j` and `flag` not assigned in the loop.

(a) State whether `arr[j] + 1` is loop-invariant, with the reason.
(b) State whether LICM may hoist it, and give the precise condition that decides it.
(c) Give a value of `n` and `flag` for which naive hoisting changes the program's behaviour, and say what changes.
(d) Give one transformation of the loop that would make hoisting legal, and state what it costs.

<details>
<summary>Solutions</summary>

**P1**

(a) **Reaching definitions.** To replace a use of `y` with `x` you must know that the only definition of `y` reaching that use is `y = x`, and additionally that `x` has not been reassigned between the copy and the use. (In SSA this is free: `y`'s single definition is visible, and `x`'s name cannot have been reassigned.)

(b) **Live variables.** `t` is deletable at that point exactly when $t \notin \mathrm{OUT}$ — no subsequent read — plus the effect-freeness side condition.

(c) **Available expressions.** The replacement is legal when `a + b` is computed on **every** path to this point with no intervening assignment to `a` or `b`, which is precisely availability ([Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md) P2).

(d) **None.** Both operands are literals in the instruction itself, so the rewrite is purely local — which is why constant folding is the one optimization a compiler can do during parsing if it wants to.

**P2**

(a) `x = 2; y = x + 3; z = y * 2; return z;`

| pass | action |
|---|---|
| constant propagation | `x` is 2 at its use → `y = 2 + 3` |
| constant folding | → `y = 5` |
| constant propagation | `y` is 5 at its use → `z = 5 * 2` |
| constant folding | → `z = 10` |
| constant propagation | `z` is 10 at its use → `return 10` |
| dead-code elimination (×3) | `z`, `y`, `x` all now unread |

**Final: `return 10;`**

(b) `t1 = a + b; t2 = a + b; return t1 + t2;`

| pass | action |
|---|---|
| CSE | `a + b` is available at the second instruction (computed on the one path here, no assignment to `a` or `b` between) → `t2 = t1` |
| copy propagation | replace the use of `t2` with `t1` → `return t1 + t1` |
| dead-code elimination | `t2` now unread → delete `t2 = t1` |

**Final: `t1 = a + b; return t1 + t1;`** — one addition instead of two, plus the final one.

(A compiler might go further and note `t1 + t1` is `2 * t1` or `t1 << 1`; that is strength reduction, a peephole transformation of [Lesson 7.6](07-06-code-generation-and-the-back-end.md).)

(c) `x = f(); y = 1; return y;` where `f` writes to a global.

| pass | action |
|---|---|
| constant propagation | `y` is 1 at its use → `return 1` |
| dead-code elimination | `y` now unread → delete `y = 1` |
| dead-code elimination | `x` is never read — **but the call may not be deleted** |

**Final: `x = f(); return 1;`** — or, more precisely, `f();` with the assignment dropped but the call retained.

**The call must stay** because `f` writes to a global, which is an observable effect. Deleting it would change the program's meaning even though nothing reads its result. This is the Watch-out's point as a worked case: DCE's guard is effect-freeness, not unusedness, and a compiler that cannot prove `f` is pure must keep the call. (A compiler *can* delete it if interprocedural analysis or an attribute like `__attribute__((pure))` establishes purity — which is exactly why those attributes exist.)

**P3**

(a) **Yes, `arr[j] + 1` is loop-invariant.** Neither `j` nor `arr` is assigned inside the loop, so no definition inside the loop reaches either operand, and the expression computes the same value on every iteration. The loop counter `i` does not appear in it.

(b) **LICM may not hoist it as written.** Invariance licenses the *move*; what is missing is the second condition, **safety to execute speculatively**.

The precise condition: the instruction may be hoisted to the preheader only if either

- it cannot fault or otherwise have an observable effect (pure arithmetic on values already in registers), **or**
- it **dominates every exit of the loop** ([Lesson 7.2](07-02-control-flow-graphs-dominance-and-ssa.md)) — meaning every path that reaches a loop exit passes through it, so it would have executed anyway.

`arr[j]` is a memory load, which can fault if `j` is out of bounds, so it fails the first. And it sits inside `if (flag)`, so the block containing it does not dominate the loop exit — a path through the loop taking the false branch reaches the exit without it. It fails both.

(c) Take **`n = 0`** with `j` out of bounds for `arr` (or `arr` null). Any value of `flag` works.

*Original:* the loop guard `0 < 0` is false immediately, so the body never runs, `arr[j]` is never loaded, and the program proceeds normally.

*After naive hoisting:* the load is in the preheader, which executes **before** the guard is tested, so `arr[j]` is evaluated once regardless. With `j` out of bounds this **faults** — a segmentation fault, or an `ArrayIndexOutOfBoundsException` in a checked language.

**A program that returned normally now crashes.** That is not meaning-preserving, and it is the clearest possible demonstration that invariance alone is insufficient.

(A second witness: `n > 0` with **`flag` false** and `j` out of bounds. The body runs but never takes the `if`, so the load never happens; hoisted, it happens once and faults. This one shows the domination condition failing independently of the zero-trip case.)

(d) *Accept criterion:* any transformation after which the load either cannot fault or dominates every loop exit, with its cost named.

**Unswitch the loop** — hoist the loop-invariant condition `flag` outside and duplicate the loop body for each branch:

```
if (flag) {
    s = arr[j] + 1;              // unconditional: legal to hoist
    for (i = 0; i < n; i++) { total = total + i; }
} else {
    for (i = 0; i < n; i++) { total = total + i; }
}
```

Inside the `if (flag)` arm the load is no longer guarded by anything inside the loop, so it dominates that loop's exit and may be hoisted; the else arm has no load at all. **Loop unswitching is a standard pass that exists largely to enable this.**

*What it costs:* **code size** — the loop body is duplicated, once per value of the condition, and with $k$ invariant conditions the duplication is $2^k$. Larger code means more instruction-cache pressure, which can be a net loss for a loop that runs few iterations, and it is why compilers apply unswitching only under a size budget.

(Two other acceptable answers, each with its cost: **hoist with a guard** — put the load in the preheader under `if (flag && n > 0)`, which costs a branch and only helps if the loop runs many times; or **prove the access safe** — a bounds-check or range analysis showing `j` is in range, after which the load cannot fault and the first condition is satisfied, which costs analysis time and only works when the bound is statically known.)

</details>

## Flashback

**From Lesson 6.2 (State, references and the environment-store model):** Once there are references, `e + e` is no longer `2 * e`, and two expressions that look identical may compute different values.

CSE replaces a second computation of `a + b` with a saved temporary.

(a) State the precise condition on the store that makes this legal, and say which analysis establishes it.
(b) Suppose `a` and `b` are memory locations reached through pointers, and the code between the two computations writes through a third pointer `p`. State what the compiler must prove, and name the analysis.

<details>
<summary>Solution</summary>

(a) The condition is that **the store's values at `a` and `b` are unchanged between the two computations, on every path** — equivalently, no assignment to `a` or `b` occurs in between.

That is exactly the definition of `a + b` being **available** at the second point, and the analysis establishing it is **available expressions** ([Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md)): a forward must-analysis whose kill set removes every expression mentioning a variable the block assigns. [Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md) P2 is the worked case — with an intervening `a = 5` the expression is killed and the replacement is illegal; without it, availability holds and the replacement is sound.

Note this is precisely the guarantee [Lesson 6.2](06-02-state-references-and-the-store.md) said mutation destroys. In a pure language `a + b` always denotes the same value, so CSE needs no analysis at all; the entire availability machinery exists to buy back, path by path, a property that immutability would have given for free.

(b) The compiler must prove that **`p` cannot alias `a` or `b`** — that the write through `p` does not touch the locations `a` and `b` name.

The analysis is **alias analysis** (also called pointer analysis). Without it the compiler must assume the worst: a write through an arbitrary pointer may modify *any* location, so it kills every expression involving a memory operand, and CSE across a pointer write becomes impossible. That assumption is why C code with heavy pointer use optimizes poorly and why `restrict` exists — it is a programmer's promise of non-aliasing that the compiler cannot derive.

Alias analysis is undecidable in general (Rice's theorem again, [`theory-of-computation` 4.3](../../theory-of-computation/lessons/04-03-rices-theorem-and-more-undecidable-problems.md)), so every implementation is a sound approximation erring toward "these might alias" — which loses optimizations and never miscompiles, the same direction as every analysis in this module.

And this is where [Lesson 5.6](05-06-ownership-linearity-and-borrow-checking.md) reappears with a payoff nobody mentioned there: **a language whose type system guarantees aliasing XOR mutation has made alias analysis unnecessary for the mutable case.** An `&mut T` is provably unaliased, so a write through it cannot affect anything reached another way, and the compiler may optimize accordingly without any analysis at all. That is the `noalias` metadata Rust emits to LLVM, and it is a concrete performance dividend of a feature introduced for memory safety.

</details>

## Connections

- **Backward:** every optimization here consumes a [Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md) analysis, and SSA ([Lesson 7.2](07-02-control-flow-graphs-dominance-and-ssa.md)) makes constant propagation and DCE nearly free. The soundness criterion is [Lesson 2.3](02-03-denotational-semantics-and-fixed-points.md)'s denotational equality, and the difficulty of achieving it is [Lesson 6.2](06-02-state-references-and-the-store.md)'s loss of referential transparency.
- **Forward:** [Lesson 7.5](07-05-abstract-interpretation.md) shows why no optimizer can be complete, and what a deliberately approximate analysis buys. [Lesson 7.6](07-06-code-generation-and-the-back-end.md) is where CSE's cost reappears: longer live ranges mean more register pressure and more spills.
- **Sideways:** the phase-ordering problem — passes enabling and inhibiting each other with no optimal order — is a search problem, and modern compilers attack it with heuristics, profile-guided decisions, and in research settings with search over pass sequences. It is a genuine engineering limit, not a gap waiting for a theorem.
