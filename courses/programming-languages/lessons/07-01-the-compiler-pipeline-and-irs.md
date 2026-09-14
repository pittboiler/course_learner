# Programming Languages · Lesson 7.1: The compiler pipeline and intermediate representations

> ⏱ ~15 min · Module 7: Compilation · Builds on: [6.3 (continuations and CPS)](06-03-continuations-and-control.md), [1.6 (name resolution)](01-06-name-resolution-and-the-semantic-phase.md) · Unlocks: [7.2 (control-flow graphs and SSA)](07-02-control-flow-graphs-dominance-and-ssa.md), [7.4 (classical optimizations)](07-04-classical-optimizations.md)

## Why this matters

You have built every phase of a front end — lexing, parsing, name resolution, type checking — and studied what the language means and what it needs at run time. What remains is turning the typed, resolved tree into something a machine executes.

The single structural decision in that half of the compiler is to **not** translate the tree to machine code directly. Instead, lower it to an intermediate representation, optimize *that*, and translate the IR to machine code. The argument is an arithmetic one, it is decisive, and it explains the shape of every production compiler: GCC, LLVM, the JVM, .NET, V8 and Go all have an IR in the middle, and several have more than one.

It also explains why so much of this module is about a representation rather than an algorithm. Choosing the IR settles what the optimizations can see, and [Lesson 7.2](07-02-control-flow-graphs-dominance-and-ssa.md)'s SSA is a change of representation that makes several analyses trivial without changing what the program computes.

## The idea

**The $m + n$ argument.** With $m$ source languages and $n$ target architectures, direct translation needs $m\times n$ compilers. Route everything through one IR and you need $m$ front ends and $n$ back ends: $m + n$.

At 3 and 3 that is 6 against 9. At 10 and 10 it is **20 against 100**, and the optimizations — which are the bulk of the work — are written *once*, against the IR, rather than once per pair.

**But the arithmetic is not the whole reason.** An IR is also chosen to make the analyses you want *easy*:

- an AST is shaped for *the programmer*, with nested expressions, scopes and sugar;
- an IR is shaped for *the compiler*, with explicit temporaries, explicit control flow and no nesting.

Nested expressions are the specific problem. In `a + b * c` the multiplication's result has no name, so there is nothing to attach a fact to — no way to say "this value is a constant" or "this value is already in a register". **Lowering invents a name for every intermediate value**, and having names is what makes every later analysis expressible.

## The formal version

**The phases.**

| phase | input → output | owned by |
|---|---|---|
| lexing | characters → tokens | [1.3](01-03-lexical-analysis-in-practice.md) |
| parsing | tokens → AST | [1.4](01-04-recursive-descent-and-ll1.md), [1.5](01-05-lr-parsing-and-the-item-automaton.md) |
| name resolution | AST → resolved AST | [1.6](01-06-name-resolution-and-the-semantic-phase.md) |
| type checking | resolved AST → typed AST | [4.1](04-01-the-simply-typed-lambda-calculus.md)–[4.3](04-03-unification-and-hindley-milner.md) |
| **lowering** | typed AST → IR | this lesson |
| **optimization** | IR → better IR | [7.3](07-03-dataflow-analysis-as-a-fixed-point.md)–[7.5](07-05-abstract-interpretation.md) |
| **code generation** | IR → machine code | [7.6](07-06-code-generation-and-the-back-end.md) |

The first four are the **front end** (language-specific), the last is the **back end** (target-specific), and the middle two are the **middle end**, which is neither.

**Three-address code.** The classical IR. Every instruction has at most three operands:

$$x \leftarrow y \ \mathit{op}\ z \qquad x \leftarrow y \qquad x \leftarrow \mathit{op}\ y$$

plus `goto L`, `if x goto L`, `x ← M[y]`, `M[x] ← y`, `call f, n`, and `return x`.

**Lowering an expression tree** is a post-order walk that allocates a fresh temporary per interior node:

$$a + b*c \qquad\rightsquigarrow\qquad t_1 \leftarrow b * c;\quad t_2 \leftarrow a + t_1$$

The nesting has become sequencing, and the anonymous intermediate has the name $t_1$. **Every optimization in this module needs that name to exist.**

**Control flow becomes explicit.** Structured constructs lower to conditional jumps:

$$\mathsf{while}\ b\ \mathsf{do}\ c \qquad\rightsquigarrow\qquad L_1: \ \text{eval } b \to t;\ \ \mathsf{ifFalse}\ t\ \mathsf{goto}\ L_2;\ \ c;\ \ \mathsf{goto}\ L_1;\ \ L_2:$$

So an IR has no `while`, `for`, `break` or `if` — only labels and jumps, which is why the optimizer needs to *recover* the loop structure ([Lesson 7.2](07-02-control-flow-graphs-dominance-and-ssa.md)) rather than being handed it.

**Basic blocks.** A maximal straight-line run of instructions with one entry (only the first instruction is a jump target) and one exit (only the last is a jump). Within a block, control flow is trivial — execution enters at the top and leaves at the bottom — so analyses are a single pass. Between blocks it is a graph, which is [Lesson 7.2](07-02-control-flow-graphs-dominance-and-ssa.md)'s subject.

**IRs differ, deliberately.** LLVM IR is SSA-form three-address code with types; the JVM and CPython use a stack machine (no temporaries, operands on a stack — compact, easy to generate, harder to optimize); SML/NJ and several Scheme compilers use CPS ([Lesson 6.3](06-03-continuations-and-control.md)), which is known to be equivalent to SSA. Real compilers use several IRs at different heights: a high one keeping loops and array accesses for loop optimization, and a low one close to the machine for scheduling.

## Picture

![Three boxes on the left labelled C, Rust and Go, three on the right labelled x86, ARM and RISC-V, and one in the middle labelled IR. Arrows run from each left box into the IR and from the IR out to each right box. Text below notes that three front ends plus three back ends is six pieces of work through an IR versus nine direct translations, that at ten and ten it is twenty versus one hundred, and that the IR is also where optimization happens once.](assets/07-01-fig1.svg)

Count the arrows: six, against the nine a complete bipartite graph would need. The saving grows quadratically, which is why no compiler with more than one target is built the other way.

And the second sentence matters as much as the first. **The optimizations are the expensive part**, and they live in the middle — so a new front end inherits every optimization for free, and a new back end does too. That is why adding a language to LLVM is a tractable project.

## Worked examples

**Example 1 (mechanical): lower a function.** Take

```
f(a, b) { if (a > b) { return a * 2; } else { return b + 1; } }
```

Lowering to three-address code:

```
f:
      t1 = a > b
      ifFalse t1 goto L1
      t2 = a * 2
      return t2
      goto L2
L1:   t3 = b + 1
      return t3
L2:
```

Three basic blocks: the entry block (down to the first jump), the then-block (`t2` and its return), and the else-block at `L1`. Note what happened: the nested `if` became a test plus a conditional jump, both expressions got temporaries, and the block structure is now implicit in where the labels and jumps fall.

**Example 2 (why you'd care): what the tree could not say.** Take `(a + b) * (a + b)` and compare the two representations.

*On the AST*, the two `a + b` subtrees are **structurally identical and distinct objects**. To notice they compute the same value you must compare subtrees for equality, and then you must ask whether `a` or `b` changed between them — a question about evaluation order that the tree does not represent.

*Lowered:*

```
t1 = a + b
t2 = a + b
t3 = t1 * t2
```

Now the question is a *dataflow* one: is the expression `a + b` **available** at the second instruction — that is, computed on every path to here with no intervening assignment to `a` or `b`? That is a decidable analysis over the control-flow graph ([Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md)), and if the answer is yes, common-subexpression elimination rewrites the second line to `t2 = t1` and copy propagation finishes the job:

```
t1 = a + b
t3 = t1 * t1
```

**One addition instead of two, and the enabling step was giving the intermediate a name.** Before lowering there was nothing to say "is available"; afterwards it is a set membership.

The same argument explains why an IR's instructions are so simple. Each does one thing to named operands, so "what does this compute?" and "what does it depend on?" are both read off syntactically — and every optimization in [Lesson 7.4](07-04-classical-optimizations.md) is stated in exactly those terms.

## Watch out

- **You might think** the IR is a detail of implementation convenience — **but actually** it decides what the optimizer can express. A stack-machine IR makes common-subexpression elimination awkward because intermediates have no names; SSA ([Lesson 7.2](07-02-control-flow-graphs-dominance-and-ssa.md)) makes several analyses nearly free. **Choosing the representation is choosing the analyses.**
- **You might think** lowering loses information and that is simply a cost — **but actually** it loses information *deliberately*, and the loss is sometimes a real problem: an IR with only jumps has forgotten which jumps form a loop, so loop optimizations must reconstruct that from the graph. Real compilers keep a higher IR precisely to avoid re-deriving what the source already said.
- **You might think** more temporaries means slower code — **but actually** the temporaries are virtual registers, and [Lesson 7.6](07-06-code-generation-and-the-back-end.md)'s register allocator assigns them to machine registers or spills them. Generating many short-lived temporaries and letting the allocator coalesce them is standard, and produces better code than trying to be frugal early.

## One-liner

> Put one representation in the middle and $m\times n$ becomes $m+n$ — and lower the tree into it so that every anonymous intermediate value gets a name, because a name is what an analysis attaches a fact to.

## Problems

**P1 (🟢)** Lower each to three-address code, using as few temporaries as you can.

(a) `x = a + b * c`
(b) `x = (a + b) * (c - d)`
(c) `if (a < b) x = 1; else x = 2;`
(d) `while (i < n) i = i + 1;`

**P2 (🟡)** For each, give the number of basic blocks and state where each block begins.

(a) The code from P1(c)
(b) The code from P1(d)
(c) A straight-line sequence of ten assignments with no jumps
(d) A function with one `if` inside a `while`

**P3 (🔴)** A compiler team maintains front ends for 4 languages and back ends for 6 architectures.

(a) Give the number of translation components with and without a shared IR.
(b) They now add a 5th language and a 7th architecture. Give both counts again, and the number of *new* components each approach requires.
(c) They wish to add a new optimization. State how many places it must be written under each approach.
(d) Name one genuine cost the IR approach imposes that direct translation does not, and give a concrete example of a program it can make slower.

<details>
<summary>Solutions</summary>

**P1**

(a) `x = a + b * c`. Post-order: multiply first (it binds tighter), then add.

```
t1 = b * c
x  = a + t1
```

One temporary.

(b) `x = (a + b) * (c - d)`. Both operands of `*` are compound, so each needs a temporary.

```
t1 = a + b
t2 = c - d
x  = t1 * t2
```

Two temporaries. (The general rule: one temporary per interior node of the expression tree, minus those whose result is written directly to a named destination.)

(c) `if (a < b) x = 1; else x = 2;`

```
      t1 = a < b
      ifFalse t1 goto L1
      x = 1
      goto L2
L1:   x = 2
L2:
```

(d) `while (i < n) i = i + 1;`

```
L1:   t1 = i < n
      ifFalse t1 goto L2
      i = i + 1
      goto L1
L2:
```

Note the test is at the top and re-executed each iteration, with an unconditional jump back — the shape the $\mathsf{while}$ lowering in the Formal version prescribes.

**P2**

(a) **Four blocks.** A block begins at the first instruction, at any jump target, and at any instruction following a jump.

| block | begins at |
|---|---|
| 1 | `t1 = a < b` (first instruction) |
| 2 | `x = 1` (follows the conditional jump) |
| 3 | `L1: x = 2` (a jump target) |
| 4 | `L2:` (a jump target) |

(b) **Three blocks.**

| block | begins at |
|---|---|
| 1 | `L1: t1 = i < n` (first instruction, and a jump target) |
| 2 | `i = i + 1` (follows the conditional jump) |
| 3 | `L2:` (a jump target) |

Block 1 is the loop header — it is both the entry and a jump target, which is exactly the property [Lesson 7.2](07-02-control-flow-graphs-dominance-and-ssa.md) exploits.

(c) **One block.** No instruction is a jump target and none is a jump, so the whole sequence is a single maximal straight-line run. This is the case where analyses are a single forward pass with no fixed-point iteration at all.

(d) **Six blocks** (for the standard shape). Working through: the loop header with the test; the loop body's `if` test; the then-branch; the else-branch; the join after the `if` (which jumps back to the header); and the exit block after the loop. If the `if` has no else, it drops to five.

The point of the progression (c) → (d) is that block count tracks *branching*, not code size — ten instructions can be one block and four instructions can be four.

**P3**

(a) With $m = 4$, $n = 6$:

- **Without an IR:** $m \times n = 4 \times 6 = \mathbf{24}$ translators, one per language-architecture pair.
- **With an IR:** $m + n = 4 + 6 = \mathbf{10}$ components — 4 front ends and 6 back ends.

(b) With $m = 5$, $n = 7$:

- **Without:** $5 \times 7 = \mathbf{35}$, so $35 - 24 = \mathbf{11}$ new translators (the new language needs one per existing architecture, the new architecture one per language, plus the pair).
- **With:** $5 + 7 = \mathbf{12}$, so $\mathbf{2}$ new components — one front end and one back end.

**Eleven against two**, and the gap widens with every addition. This is why a new LLVM target is one back end rather than one per source language, and why a new language targeting LLVM gets every architecture at once.

(c) **Without an IR: 24 places** (or 35 after the expansion) — once in every translator, since each one goes straight from source to machine code and there is no shared stage to put it in.

**With an IR: one place** — the middle end, against the IR, where every front end's output and every back end's input passes through.

This is the larger of the two savings in practice. Optimizations are the bulk of a compiler's code and the hardest part to get right, and writing one 24 times is not merely expensive but a guarantee of 24 slightly different behaviours.

(d) *Accept criterion:* any cost arising specifically from routing through a common representation, with a concrete program.

**The cost: the IR is a lowest common denominator, so target-specific and source-specific information is lost at the boundary.** A front end knows things the IR cannot express, and a back end has instructions the IR cannot name.

Concrete example — **a saturating add**. ARM has an instruction that adds and clamps to the type's range in one operation. A source language with saturating arithmetic must lower it into the IR as a sequence of add, compare and select, because the IR has no saturating-add operation. The back end then has to *recognize* that sequence to emit the single instruction, and if the middle end reordered or partly optimized the sequence in between, the pattern no longer matches and the target emits three or four instructions where one would do.

(Other valid answers: a source language's guarantee that array indices are in bounds, lost when lowering to raw loads, so the back end re-inserts checks or fails to; or a language's aliasing guarantee — Rust's, from [Lesson 5.6](05-06-ownership-linearity-and-borrow-checking.md) — which LLVM's IR could not originally express, so Rust code was optimized as conservatively as C until `noalias` metadata was added.)

The general shape: **the IR buys reuse by forgetting what is specific, and every optimization that needed the forgotten fact must either re-derive it or be given a channel to carry it.** That is why real IRs accumulate metadata and intrinsics, which are precisely such channels.

</details>

## Flashback

**From Lesson 6.3 (Continuations, CPS and control operators):** The CPS transform makes every call a tail call and turns the control stack into a chain of closures, and the lesson noted that CPS is a real compiler IR.

(a) State what CPS makes explicit that three-address code does not.
(b) Both CPS and three-address code give every intermediate value a name. State what each does with *control* flow, and say why that makes them comparable in power.

<details>
<summary>Solution</summary>

(a) CPS makes **control flow explicit as data** — every "what happens next" is a named function, passed as an argument. Three-address code leaves control implicit in the ordering of instructions and in jump targets: to know what happens after an instruction you look at the next line or follow a label, and neither is a value the program manipulates.

The practical consequence is that in CPS a return, a jump, an exception and a function call are all the same construct — a call to a continuation — whereas three-address code has `return`, `goto`, `if..goto` and `call` as four separate instruction kinds with four sets of rules. That uniformity is why compilers for languages with first-class control ([Lesson 6.3](06-03-continuations-and-control.md)'s `callcc`) favour CPS: the feature is already in the representation rather than needing special treatment.

CPS also fixes the **evaluation order** in the nesting, which three-address code fixes in the instruction order — so both settle it, but CPS settles it during the transform rather than during lowering.

(b) *Three-address code* represents control flow as a **graph of basic blocks**: instructions run in sequence within a block, and jumps move between blocks. Its unit is "where do I go next", drawn as edges.

*CPS* represents control flow as **nested function calls**: each computation ends by calling the continuation it was given, and a branch chooses between two continuations. Its unit is "whom do I call next", drawn as closures.

They are comparable in power because these are the same information in two encodings — and it is a known theorem that **SSA form and CPS are equivalent**, with a direct translation each way: a basic block corresponds to a continuation (a function taking the block's live values), a jump to a call, and an SSA phi-function ([Lesson 7.2](07-02-control-flow-graphs-dominance-and-ssa.md)) to a continuation *parameter* — the several incoming values of a phi are exactly the several call sites passing different arguments to one continuation.

That correspondence is the reason this module can present the imperative side (blocks, dominance, phi) without loss: choosing between them is a choice about which analyses are natural to write, not about what can be expressed. Compilers for imperative languages take the graph view because loops and mutation are the common case; compilers for functional languages take the CPS view because closures and control operators are.

</details>

## Connections

- **Backward:** the typed, resolved AST entering the lowering phase is built by Modules 1 and 4, and lowering `while` to jumps is the small-step $\mathsf{While}$ unfolding of [Lesson 2.1](02-01-small-step-operational-semantics.md) made permanent. CPS ([Lesson 6.3](06-03-continuations-and-control.md)) is the alternative IR.
- **Forward:** [Lesson 7.2](07-02-control-flow-graphs-dominance-and-ssa.md) turns the basic blocks into a graph and renames the temporaries so each is assigned once; [Lesson 7.3](07-03-dataflow-analysis-as-a-fixed-point.md) computes facts over that graph, and [Lesson 7.4](07-04-classical-optimizations.md) uses them. Example 2's available-expressions question is answered in [7.3](07-03-dataflow-analysis-as-a-fixed-point.md).
- **Sideways:** the $m+n$ argument is the same modularity argument as an abstract data type's ([Lesson 5.3](05-03-recursive-types-existentials-and-modules.md)) — fix an interface in the middle and both sides vary independently — and its cost is the same too: the interface is a lowest common denominator, so information not expressible in it is lost.
