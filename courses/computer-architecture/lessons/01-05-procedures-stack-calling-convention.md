# Computer Architecture · Lesson 1.5: Procedures, the stack, and the calling convention

> ⏱ ~15 min · Module 1: The instruction set and assembly · Builds on: [1.4 (branches and control flow)](01-04-branches-loops-control-flow.md) · Unlocks: 2.1 (the ALU), 4.3 (virtual memory)

## Why this matters

A function call looks like one operation in source code and is nothing of the sort at the machine level. The caller must put arguments somewhere the callee will look, remember where to come back to, and protect any values it still needs. The callee must not trample anything it promised to preserve, and must find its way home.

None of that is enforced by hardware. It is a **convention** — an agreement between separately compiled pieces of code — and it is the reason a C function can call a Rust function, or code compiled in 2010 can call a library built yesterday. It is also where the stack comes from, why recursion works, and how buffer overflows hijack control.

## The idea

Two problems have to be solved, and they are different.

**Getting there and back.** `jal` jumps and simultaneously records the address of the following instruction in a register. The callee returns by jumping to that saved address. That much is hardware.

**Not destroying each other's data.** There are only 32 registers and both functions want them. Without an agreement, every call would clobber the caller's work.

The agreement splits the registers into two groups. Some are **caller-saved**: the callee may freely destroy them, so if the caller cares, it must save them first. Others are **callee-saved**: the callee must leave them exactly as it found them, saving and restoring if it wants to use them.

Neither group is better — the split exists to make the *common* case cheap. Registers a function uses briefly should be caller-saved (usually nobody needs them preserved); registers holding long-lived values should be callee-saved (usually the callee doesn't touch them, so nothing is spent).

Anything that must survive but has no register goes on the **stack**, a region of memory that grows downward, with `sp` marking the current top.

## The formal version

**Call and return.**

| Operation | Instruction | Effect |
|---|---|---|
| call | `jal ra, func` | `ra = PC + 4`; jump to `func` |
| return | `jalr x0, 0(ra)` (`ret`) | jump to the address in `ra` |

`ret` is a pseudo-instruction for `jalr x0, 0(ra)` — jump to `ra`, discarding the new return address into `x0`.

**The register convention (this is ABI, not ISA).**

| Registers | ABI names | Role | Preserved across a call? |
|---|---|---|---|
| `x10`–`x17` | `a0`–`a7` | arguments; `a0`–`a1` also return values | **No** |
| `x5`–`x7`, `x28`–`x31` | `t0`–`t6` | temporaries | **No** |
| `x8`–`x9`, `x18`–`x27` | `s0`–`s11` | saved registers | **Yes** |
| `x1` | `ra` | return address | **Yes** (if the callee calls anything) |
| `x2` | `sp` | stack pointer | **Yes** |

The distinction between ISA and ABI matters here, and it is the point [1.1](01-01-isa-contract-stored-program.md)'s P1 made. That `jal` writes to `ra` is architectural. That `s0` survives a call is a *promise between compilers* — hardware would happily let you break it, and what breaks is linking against code you did not compile.

**The stack.** `sp` points at the lowest occupied address; the stack grows toward lower addresses.

> **Prologue and epilogue.** A function that needs to preserve anything opens by making room and closes by giving it back.

```
func:
    addi sp, sp, -16      # allocate 16 bytes
    sw   ra, 12(sp)       # save return address
    sw   s0, 8(sp)        # save a callee-saved register we intend to use
    # ... body, free to use s0 and to call other functions ...
    lw   s0, 8(sp)        # restore
    lw   ra, 12(sp)
    addi sp, sp, 16       # deallocate
    ret
```

Two rules make this work. `sp` must be **restored exactly** — a function that returns with `sp` changed corrupts its caller. And RISC-V requires `sp` to stay **16-byte aligned**, which is why the example allocates 16 rather than the 8 it strictly needs.

**Leaf versus non-leaf.** A **leaf** function calls nothing. It need not save `ra` (nothing will overwrite it) and, if it uses only `t` registers and `a` registers, needs no stack frame at all — a genuinely free call. A **non-leaf** function must save `ra` before making its own call, because that call overwrites it.

**Why recursion works.** Each invocation executes its own prologue, moving `sp` down and creating a fresh frame. Twenty nested calls means twenty frames, each with its own saved `ra` and locals. The stack is what gives each activation private storage — and running out of it is stack overflow.

**Arguments beyond eight** go on the stack, as do large structures passed by value. Return values beyond two words are handled by the caller passing a hidden pointer to space it has allocated.

## Picture

![A vertical stack diagram with high addresses at top showing a caller frame above saved return address and saved register slots and a local array, with sp pointing at the lowest occupied address and an arrow indicating downward growth, beside a table of which registers are caller-saved versus callee-saved](assets/01-05-fig1.svg)

The frame is created by one `addi sp, sp, -16` and destroyed by its mirror image. Everything above `sp` belongs to callers and must not be touched; everything the function needs to survive its own calls lives in the slots shown. The table on the right is the entire contract — and note `ra` carries an asterisk, because a leaf function never has to spill it.

## Worked examples

**Example 1 (mechanical): a leaf function needs no frame.** Compile `int add3(int a, int b, int c) { return a + b + c; }`.

Arguments arrive in `a0`, `a1`, `a2`; the result goes in `a0`.

```
add3:
    add  a0, a0, a1       # a0 = a + b
    add  a0, a0, a2       # a0 = (a+b) + c
    ret                   # jalr x0, 0(ra)
```

**Three instructions, no stack traffic at all.** This function calls nothing, so `ra` is safe; it uses only argument registers, which are caller-saved and therefore free to destroy. No prologue, no epilogue, no memory access.

That is why leaf functions are cheap and why compilers work hard to keep functions leaf — inlining a small callee often converts a non-leaf function into a leaf one, eliminating an entire frame.

**Example 2 (why you'd care): the missing save that corrupts a loop.** Someone writes a function that sums an array by calling a helper:

```
sumloop:
    li   s0, 0            # sum, in a callee-saved register
    li   s1, 0            # i
loop:
    bge  s1, a1, done
    # ... compute A[i] into a0 ...
    jal  ra, helper       # <-- calls something
    add  s0, s0, a0
    addi s1, s1, 1
    j    loop
done:
    mv   a0, s0
    ret
```

This is wrong twice, and both errors have the same cause: **`sumloop` is not a leaf function and has no prologue.**

*First error.* `jal ra, helper` overwrites `ra` with the address inside `sumloop`. When `sumloop` later executes `ret`, it jumps back into its own loop rather than to its caller — an infinite loop, or a crash.

*Second error.* `sumloop` uses `s0` and `s1`, which are callee-saved. It never saved them, so it is destroying values its own caller promised itself would survive. The caller's variables silently change.

The fix is the prologue and epilogue:

```
sumloop:
    addi sp, sp, -16
    sw   ra, 12(sp)
    sw   s0, 8(sp)
    sw   s1, 4(sp)
    # ... loop as before ...
    lw   s1, 4(sp)
    lw   s0, 8(sp)
    lw   ra, 12(sp)
    addi sp, sp, 16
    ret
```

Note also what `helper` may do to `a0`: it is an argument register, caller-saved, so `helper` is entitled to clobber it — which is fine here because the code *reads* `a0` as `helper`'s return value immediately after. But if the loop had needed a value in a temporary across the call, that value would have to live in an `s` register or on the stack.

The general habit worth building: **whenever you write a `jal`, ask what it destroys.** It destroys `ra`, every `t` register, and every `a` register. If you need any of those afterward, they were in the wrong place.

## Watch out

- **You might think** a function can use `s0` freely because it is "saved" — **but actually** "callee-saved" means *this* function is the one responsible for saving it. The name describes the obligation, not a guarantee you get for free.
- **You might think** you can leave `sp` wherever it ends up, since the caller has its own copy — **but actually** the caller has no copy; `sp` is a single shared register and is callee-saved. Returning with it changed makes the caller's `lw ra, 12(sp)` read the wrong word, which usually means returning to a garbage address.
- **You might think** the return address is safe once saved — **but actually** it is sitting in ordinary writable memory just above the local variables. A local array written past its end overwrites the saved `ra`, and the function then "returns" wherever the attacker chose. That is stack-smashing, and it is why modern compilers insert stack canaries and why hardware vendors added shadow stacks.

## One-liner

> `jal` gets you there and leaves a breadcrumb in `ra`; everything else is a convention about which registers survive a call, and the stack is where anything that must survive but has no register goes — one frame per invocation, which is exactly why recursion works.

## Problems

**P1 (🟢)** Which of these functions needs a stack frame, and why? (a) one that computes `a*b + c` from its arguments and returns; (b) one that calls `printf` once; (c) one that uses `s2` as a loop counter but calls nothing; (d) one that takes ten arguments.

**P2 (🟡)** Write the prologue and epilogue for a function that (i) calls another function, (ii) uses `s0` and `s1`, and (iii) needs a 12-byte local buffer. Give the total frame size honouring 16-byte alignment, and state the offset of each saved item from `sp`.

**P3 (🔴, optional)** Trace `fact(3)` for the recursive factorial below, showing the stack contents at maximum depth. Give the number of frames, the total stack bytes consumed, and the value of `ra` saved in each frame (symbolically, as "the address after the `jal` in `fact`").
```
fact:
    addi sp, sp, -16
    sw   ra, 12(sp)
    sw   s0, 8(sp)
    mv   s0, a0            # s0 = n
    li   t0, 1
    ble  s0, t0, base      # if n <= 1 return 1
    addi a0, s0, -1
    jal  ra, fact          # a0 = fact(n-1)
    mul  a0, a0, s0        # n * fact(n-1)
    j    epi
base:
    li   a0, 1
epi:
    lw   s0, 8(sp)
    lw   ra, 12(sp)
    addi sp, sp, 16
    ret
```

<details>
<summary>Solutions</summary>

**P1**

| | Frame needed? | Why |
|---|---|---|
| (a) computes `a*b + c` | **No** | leaf function using only argument registers; `ra` cannot be clobbered because nothing is called |
| (b) calls `printf` once | **Yes** | non-leaf — the `jal` overwrites `ra`, which must be saved to return correctly |
| (c) uses `s2`, calls nothing | **Yes** | `s2` is callee-saved, so it must be preserved and restored; `ra` need not be saved, but a frame is still required for `s2` |
| (d) takes ten arguments | **Yes** (in the caller) | only `a0`–`a7` exist, so arguments 9 and 10 are passed on the stack — the *caller* allocates that space |

The instructive pair is (a) versus (c). Both are leaf functions, and only one needs a frame — because the trigger is not "does it call something" but **"does it need to preserve something."** A leaf using only `t` and `a` registers preserves nothing and pays nothing; a leaf using an `s` register still owes its caller a restoration.

Case (d) is the one people mis-assign: the extra arguments are the *caller's* responsibility to place, so the frame in question belongs to the caller, not to the ten-argument function itself.

**P2** Three things must be preserved or allocated:

| item | bytes |
|---|---|
| `ra` (function is non-leaf) | 4 |
| `s0` | 4 |
| `s1` | 4 |
| local buffer | 12 |
| **subtotal** | **24** |

RISC-V requires `sp` to remain 16-byte aligned, so round 24 up to the next multiple of 16:
$$\boxed{\text{frame size} = 32 \text{ bytes}}$$

A conventional layout places saved registers at the **top** of the frame (highest offsets) and locals below, so that the local buffer growing past its end runs into the saved registers rather than into the caller's frame:

| offset from `sp` | contents |
|---|---|
| `28(sp)` | saved `ra` |
| `24(sp)` | saved `s0` |
| `20(sp)` | saved `s1` |
| `8(sp)`–`19(sp)` | 12-byte local buffer |
| `0(sp)`–`7(sp)` | padding for alignment |

```
    addi sp, sp, -32
    sw   ra, 28(sp)
    sw   s0, 24(sp)
    sw   s1, 20(sp)
    # ... body; buffer is at 8(sp) ...
    lw   s1, 20(sp)
    lw   s0, 24(sp)
    lw   ra, 28(sp)
    addi sp, sp, 32
    ret
```

Restoring in reverse order is conventional rather than required, but it keeps the epilogue a mirror of the prologue, which makes an omission easy to spot by eye.

**P3** Each invocation allocates 16 bytes and saves `ra` and `s0`. `fact(3)` calls `fact(2)`, which calls `fact(1)`, which hits the base case and calls nothing further.

*Maximum depth is reached* when `fact(1)` is executing, with three frames live:

| frame | `s0` (= `n`) | saved `ra` points to | saved `s0` holds |
|---|---|---|---|
| `fact(3)` — outermost | 3 | the **original caller** | caller's `s0` |
| `fact(2)` | 2 | the `mul` in `fact` (address after the `jal`) | 3 |
| `fact(1)` — innermost | 1 | the `mul` in `fact` (same address) | 2 |

**Three frames**, and
$$\text{total stack} = 3 \times 16 = \boxed{48 \text{ bytes}} .$$

*The saved `ra` values.* This is the part worth being careful about. In the two **inner** frames, the saved `ra` is the *same address* — the instruction following `jal ra, fact`, i.e. the `mul a0, a0, s0`. That is not a bug; it is the point. Every recursive call returns to the same place in the code, and what distinguishes the invocations is not the return address but the **frame**: each has its own `s0` holding its own `n`.

The outermost frame is the exception: its saved `ra` points back into whatever called `fact(3)` originally.

*Why each frame must save `s0`.* `s0` is callee-saved and each invocation overwrites it with its own `n`. Without saving, `fact(2)` would destroy `fact(3)`'s copy of $n=3$, and the `mul` on the way back out would multiply by the wrong value. Restoring on the way out is what lets the unwinding compute $1 \times 2 \times 3$ correctly.

*Unwinding.* `fact(1)` returns 1. `fact(2)` computes $1 \times 2 = 2$ after restoring its `s0 = 2`. `fact(3)` computes $2 \times 3 = 6$ after restoring `s0 = 3`. The result is 6 in `a0`, `sp` is back where it started, and the caller's `s0` is intact.

The general lesson: **recursion needs no special hardware support at all.** It works because the stack gives each activation private storage, and the calling convention guarantees that storage is not disturbed. A machine with registers but no stack could not do it, which is the practical reason every general-purpose ISA has a stack pointer convention.

</details>

## Flashback

**From Lesson 1.3 (arithmetic, logic, and data transfer):** Translate `C[k] = A[k] - B[k];` into RISC-V, with `A`, `B`, `C` bases in `a0`, `a1`, `a2`, the index `k` in `t0`, and 4-byte elements. Give the dynamic instruction count, and say how many of those instructions touch memory.

<details>
<summary>Solution</summary>

The byte offset is the same for all three arrays, so compute it once and reuse it against each base — the common-subexpression saving from [1.3](01-03-arithmetic-logic-data-transfer.md) P2.

```
slli t1, t0, 2        # t1 = k * 4
add  t2, a0, t1       # &A[k]
add  t3, a1, t1       # &B[k]
add  t4, a2, t1       # &C[k]
lw   t5, 0(t2)        # A[k]
lw   t6, 0(t3)        # B[k]
sub  t5, t5, t6       # A[k] - B[k]
sw   t5, 0(t4)        # C[k] = ...
```

**Dynamic instruction count: 8.**

**Memory accesses: 3** — two `lw` and one `sw`. Every other instruction operates strictly on registers, which is the load/store discipline of [1.3](01-03-arithmetic-logic-data-transfer.md) visible in the ratio: 3 of 8 instructions touch memory, and the other 5 exist to compute addresses and do the arithmetic.

Two observations worth carrying forward.

First, the address arithmetic is **half the instruction count** — one shift and three adds to service three loads and stores. This is the overhead RISC accepts, and it is why real compilers hoist such calculations out of loops (strength reduction: keep running pointers and add 4 each iteration rather than recomputing $k \times 4$ from scratch).

Second, those three memory accesses are what [4.1](04-01-caches-and-locality.md) will care about. If `k` walks sequentially through the arrays, all three streams have excellent spatial locality and most accesses hit in cache; if `k` jumps around, the identical eight instructions can run an order of magnitude slower. The instruction count is a property of the program, but the *time* is not — which is the gap between [1.1](01-01-isa-contract-stored-program.md)'s two sides of the ISA line.

</details>

## Connections

- **Backward:** `jal` and `jalr` are [1.4](01-04-branches-loops-control-flow.md)'s jumps, used with a saved return address; the prologue and epilogue are [1.3](01-03-arithmetic-logic-data-transfer.md)'s `lw`/`sw` with `sp` as the base register. That `x0` makes `ret` expressible as `jalr x0, 0(ra)` is [1.2](01-02-registers-memory-instruction-formats.md)'s hardwired zero paying off again.
- **Forward:** the stack region is what [4.3](04-03-virtual-memory-and-the-tlb.md)'s virtual memory has to map and grow on demand, and stack accesses have such strong locality that they almost always hit in the cache of [4.1](04-01-caches-and-locality.md). Function calls are also where [3.5](03-05-control-hazards-and-branch-prediction.md)'s prediction gets hard: a `ret` is an indirect jump whose target changes every call, which is why processors keep a dedicated return-address stack predictor.
- **Sideways:** the calling convention is a pure interface-compatibility artefact, exactly like the ISA itself but one level up — it is what lets separately compiled translation units, and separately written *languages*, call each other at all. And its most consequential property is an accident: putting the return address in writable memory adjacent to local buffers is the structural cause of stack-smashing attacks.
