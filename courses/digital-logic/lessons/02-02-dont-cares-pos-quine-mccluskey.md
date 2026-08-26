# Digital Logic Design · Lesson 2.2: Don't-cares, POS maps, and Quine–McCluskey

> ⏱ ~15 min · Module 2: Combinational logic design · Builds on: [2.1 Karnaugh maps](02-01-karnaugh-maps.md), [1.3 Boolean algebra and logic gates](01-03-boolean-algebra-logic-gates.md), [1.4 Truth tables and canonical forms](01-04-truth-tables-canonical-forms.md) · Unlocks: [2.3 Arithmetic circuits](02-03-arithmetic-circuits.md), [4.2 Counters](04-02-counters.md)

## Why this matters

[2.1](02-01-karnaugh-maps.md) gave you a beautiful tool with three cracks in it. It assumes every input combination matters — but a BCD digit only uses ten of sixteen codes, so six rows of your truth table are fiction you're paying gates for. It only minimizes sums of products — but some functions are dramatically cheaper as products of sums. And it runs on human pattern recognition, which dies at six variables — but synthesis tools chew through functions of forty. This lesson patches all three, and then delivers the bad news that even a perfectly minimal circuit can output the wrong answer for a few nanoseconds.

## The idea

**Don't-cares are free real estate.** If an input combination physically cannot occur, the truth table has no opinion about the output there. So *you* get the opinion. Put an `X` in that cell and read it as whatever makes your groups bigger — 1 if a 1 helps you swallow it into a group, 0 if you'd rather ignore it. Each `X` is decided independently, and each one you absorb is a variable you stop paying for.

**Products of sums are the mirror image.** A K-map has 0s on it too, and grouping 0s minimizes $\overline{F}$ by exactly the same rules. Complement that answer with De Morgan and you have a minimal product of sums for $F$. The two forms are not equally expensive — for some functions the POS is half the gates — so the honest procedure is to do both and pick.

**Quine–McCluskey is the K-map with the pictures taken away.** Two cells are adjacent when their binary indices differ in one bit. A computer can test that without seeing a grid, so the whole method becomes: repeatedly merge index pairs that differ in one bit, collect whatever never merged, then choose a cheap subset of those that covers everything. Same answer, no geometry, no five-variable ceiling.

**And then hazards.** Gates have delay. A minimal circuit is a set of product terms handing off to each other as inputs change, and if one lets go before the next takes hold, the output dips — briefly, wrongly, for real. The fix is to add back a term the minimization just deleted.

## The formal version

Notation, carried from [1.3](01-03-boolean-algebra-logic-gates.md) and [1.4](01-04-truth-tables-canonical-forms.md): $\overline{A}$ is NOT $A$ (some books write $A'$), juxtaposition is AND, $+$ is OR. $A$ is always the most significant variable. A **literal** is a variable or its complement, and literal count is our cost proxy — it's roughly the number of gate inputs you must wire.

### Don't-cares

**Definition.** A **don't-care** is an input combination for which the specification does not define an output — because the combination cannot occur, or because nothing downstream reads the result when it does. Written `X` in a table or on a map, and $d$ in canonical notation:

$$F(A,B,C,D) = \Sigma m(5,6,7,8,9) + d(10,11,12,13,14,15).$$

*In words: $F$ is 1 on minterms 5 through 9, is 0 everywhere not listed, and is unspecified on 10 through 15.*

**The rule.** When grouping, each `X` may be counted as 1 or as 0, **independently of every other `X`**, whichever yields larger groups. But a group must still contain at least one real 1 — a group made entirely of `X` cells buys you nothing and costs a gate.

$$\boxed{\;\text{Include an } X \text{ in a group iff doing so enlarges the group.}\;}$$

**The caution.** A don't-care is a *promise* that the combination will not arrive. Break the promise and the circuit still outputs something — whatever your grouping happened to imply, which you never chose deliberately. In [4.2](04-02-counters.md) this bites for real: a mod-10 counter has six unused states, and if noise drops the counter into one, a don't-care design can strand it in a loop that never returns to a legal count. The remedy there is a **self-correcting** design, which deliberately pins the don't-cares to a known state instead of spending them on cheaper gates. Cheap and safe are different objectives; know which one you bought.

### POS minimization on a K-map

Same map, mirrored procedure:

1. Group the **0s** of $F$ with the ordinary K-map rules. What you read off is a minimal SOP for $\overline{F}$.
2. Complement it with De Morgan ([1.3](01-03-boolean-algebra-logic-gates.md)): $\overline{X + Y} = \overline{X}\cdot\overline{Y}$ and $\overline{XY} = \overline{X} + \overline{Y}$. Each product term becomes a sum term; each literal flips.

*In words: minimize the "off" set, then turn the whole answer inside out.*

**The round trip.** Take $F(A,B,C,D) = \Sigma m(0,1,2,4,5,6,8,9,10)$, equivalently $\Pi M(3,7,11,12,13,14,15)$. Its map (rows $AB$ = `00`, `01`, `11`, `10`; columns $CD$ = `00`, `01`, `11`, `10`):

| $AB \backslash CD$ | `00` | `01` | `11` | `10` |
|---|---|---|---|---|
| `00` | 1 | 1 | 0 | 1 |
| `01` | 1 | 1 | 0 | 1 |
| `11` | 0 | 0 | 0 | 0 |
| `10` | 1 | 1 | 0 | 1 |

The zeros are exactly one full column and one full row — two clean quads:

$$\overline{F} = CD + AB \quad\Longrightarrow\quad F = \overline{CD + AB} = \overline{CD}\cdot\overline{AB} = (\overline{C}+\overline{D})(\overline{A}+\overline{B}).$$

Now minimize the same $F$ as an SOP by grouping the 1s. Every quad you can find is one of $\overline{A}\,\overline{C}$, $\overline{A}\,\overline{D}$, $\overline{B}\,\overline{C}$, $\overline{B}\,\overline{D}$ — and all four are essential (cell 5 lies only in $\overline{A}\,\overline{C}$, cell 6 only in $\overline{A}\,\overline{D}$, cell 9 only in $\overline{B}\,\overline{C}$, cell 10 only in $\overline{B}\,\overline{D}$), so none can be dropped:

$$F = \overline{A}\,\overline{C} + \overline{A}\,\overline{D} + \overline{B}\,\overline{C} + \overline{B}\,\overline{D}.$$

| form | terms | literals | gates (two-level) |
|---|---|---|---|
| minimal SOP | 4 | 8 | 4 ANDs + 1 four-input OR = 5 |
| minimal POS | 2 | 4 | 2 ORs + 1 AND = 3 |

Same function, half the literals. (Sanity check: distributing $(\overline{C}+\overline{D})(\overline{A}+\overline{B})$ reproduces the four SOP terms exactly.) POS is not *always* the winner — it just wins often enough that skipping the check is a habit that costs gates.

### Quine–McCluskey

The K-map made mechanical. Every minterm is written as a binary index with $A$ leftmost; a `-` marks a variable that has been eliminated.

1. **Sort** the minterms into groups by the number of 1s in their index.
2. **Combine.** Compare every entry in group $k$ with every entry in group $k+1$. If two differ in exactly one bit position, write a new entry with `-` there, and tick both parents as *used*. (Only neighbouring groups can differ by one bit, which is what makes this cheap.)
3. **Repeat** on the new list — entries combine only if their `-` positions match and they differ in one remaining bit — until nothing more combines. Every entry never ticked as used, at any stage, is a **prime implicant** (PI): a group that cannot be enlarged.
4. **Cover.** Build the **prime-implicant chart**: PIs as rows, the original minterms as columns, a mark where a PI covers a minterm. A column with exactly one mark forces that PI into the answer — it is **essential**. Take all essentials, delete the minterms they cover, and pick a cheapest set of remaining PIs to cover the rest.

*In words: merge until you can't, keep the leftovers, then choose the cheapest handful that covers every 1.*

Steps 1–3 are pure bookkeeping and always terminate. Step 4 is the hard one: it is exactly the **set-cover** problem, which is NP-hard ([`algorithms`](../../algorithms/syllabus.md)), so no known method beats exhaustive search in general. Real synthesis tools — Espresso is the classic — therefore stop insisting on the true minimum and use heuristics that get close, fast.

### Static hazards

Everything so far treats gates as instantaneous. They aren't: a signal takes a real propagation delay to cross one, and an inverter is one more gate in the path (the transistor-level reason is in [`electronics` 4.3](../../electronics/lessons/04-03-cmos-inverter-gates.md)). So consider a two-level SOP where a single input change moves you from one product term's territory into another's. The first term switches off; the second switches on; they are not synchronized. If the off happens first, the OR gate sees all-zeros for a moment and the output dips to 0 even though the correct value is 1 before *and* after. That momentary wrong output is a **static-1 hazard** — a glitch.

Concretely, $F = AB + \overline{A}C$ with $B = C = 1$ and $A$ falling from 1 to 0. Before: $AB = 1$. After: $\overline{A}C = 1$. In between, $A$ reaches the $AB$ gate directly but reaches the $\overline{A}C$ gate only after the inverter's delay, so for that window both terms are 0 and $F$ glitches low. On the map (panel b of the figure) the two groups are cells 1,3 and cells 6,7: adjacent, touching along the $BC=11$ column, but **not overlapping**. The glitch lives in that seam.

The fix is to cover the seam with a redundant group. The pair spanning it is cells 3 and 7, the term $BC$:

$$F = AB + \overline{A}C + BC.$$

This term is logically unnecessary — by the consensus theorem from [1.3](01-03-boolean-algebra-logic-gates.md), $XY + \overline{X}Z + YZ = XY + \overline{X}Z$ — which is precisely why minimization deleted it. But when $B = C = 1$, $BC$ is 1 regardless of what $A$ is doing, so it holds the OR gate high straight through the handover. The general rule: **a two-level SOP is hazard-free for single-input changes iff every pair of adjacent 1-cells is covered by some common product term.** The POS dual is a **static-0 hazard**, fixed by adding a redundant *sum* term.

The moral is uncomfortable: **minimal is not the same as correct, once time exists.** You can pay gates to suppress hazards, or you can arrange never to look at the output while it's settling — which is exactly what a clock does. That is a large part of why Module 3's synchronous discipline, not clever asynchronous logic, is how real systems are built.

## Picture

![Two K-map panels: on the left a four-variable map with don't-care X cells where a two-cell group grows into an eight-cell group by absorbing them, on the right a three-variable map whose two minimal groups touch without overlapping, with a dashed consensus group bridging the seam](assets/02-02-fig1.svg)

## Worked examples

**Example 1 (don't-cares — what they're worth).** A BCD digit arrives on $A,B,C,D$ with $A$ the most significant bit, so its value is $8A + 4B + 2C + D$ and only `0000`–`1001` can occur. Build $F$ = "this digit is 5 or more" — the round-half-up decision in decimal arithmetic.

$$F = \Sigma m(5,6,7,8,9) + d(10,11,12,13,14,15).$$

*Ignoring the don't-cares* (every `X` forced to 0), the 1s at 5, 6, 7, 8, 9 admit only three groups, all pairs, and all three are essential — cell 6 appears only in $\{6,7\}$, cell 8 only in $\{8,9\}$, cell 5 only in $\{5,7\}$:

$$F = \overline{A}BD + \overline{A}BC + A\overline{B}\,\overline{C} \qquad \text{9 literals, three 3-input ANDs} + \text{one 3-input OR}.$$

*Exploiting them*, three groups grow:

- $\{8,9\}$ absorbs `1010`–`1111` and becomes the octet $\{8,\dots,15\}$ — the entire bottom half of the map — which is the single literal $A$.
- $\{5,7\}$ absorbs 13 and 15 to become the quad $\{5,7,13,15\} = BD$.
- $\{6,7\}$ absorbs 14 and 15 to become the quad $\{6,7,14,15\} = BC$.

$$\boxed{\,F = A + BC + BD\,} \qquad \text{5 literals, two 2-input ANDs} + \text{one 3-input OR}.$$

Nine literals down to five, and one whole term became a bare wire. *Check by re-expansion, restricted to the legal digits:* $A \to$ 8, 9; $BC = $ `-11-` $\to$ 6, 7 (its other cells 14, 15 are illegal); $BD = $ `-1-1` $\to$ 5, 7 (others 13, 15 illegal). Union $= \{5,6,7,8,9\}$, and no legal digit below 5 is hit — digits 0–4 all have $A=0$ and $B=1$ only for digit 4 = `0100`, where $C=D=0$. Correct.

Note what you bought: if a corrupted input `1100` ever arrives, this circuit answers 1 ("≥ 5") while the don't-care-free version answers 0. Neither is wrong; the spec was silent.

**Example 2 (Quine–McCluskey, one complete pass).** Minimize $F(A,B,C,D) = \Sigma m(0,1,2,5,7,8,10)$.

*Column 1 — sort by number of 1s.*

| # of 1s | minterm | $ABCD$ |
|---|---|---|
| 0 | 0 | `0000` |
| 1 | 1 | `0001` |
| 1 | 2 | `0010` |
| 1 | 8 | `1000` |
| 2 | 5 | `0101` |
| 2 | 10 | `1010` |
| 3 | 7 | `0111` |

*Column 2 — combine adjacent groups.* Compare each entry with each entry one group down; keep the pairs differing in exactly one bit.

| combines | pattern | eliminated | used later? |
|---|---|---|---|
| 0, 1 | `000-` | $D$ | no → **PI** |
| 0, 2 | `00-0` | $C$ | yes |
| 0, 8 | `-000` | $A$ | yes |
| 1, 5 | `0-01` | $B$ | no → **PI** |
| 2, 10 | `-010` | $A$ | yes |
| 8, 10 | `10-0` | $C$ | yes |
| 5, 7 | `01-1` | $C$ | no → **PI** |

Every original minterm got combined at least once, so column 1 contributes no prime implicants. (Rejected on inspection: 1 vs 10 differ in three bits, 2 vs 5 in three, 8 vs 5 in three, 10 vs 7 in three.)

*Column 3 — combine again.* Two entries merge only if their `-` sits in the same position and they differ in one remaining bit.

| combines | pattern | from |
|---|---|---|
| 0, 2, 8, 10 | `-0-0` | `-000` with `-010`, and equally `00-0` with `10-0` |

Nothing else pairs: `000-` has no partner with a `-` in the $D$ slot, `0-01` none in the $B$ slot, and `01-1` differs from `00-0` and `10-0` in two bits. Column 3 holds a single entry, so nothing combines further and it is a prime implicant too.

*The four prime implicants.*

| | cells | pattern | term |
|---|---|---|---|
| P1 | 0, 1 | `000-` | $\overline{A}\,\overline{B}\,\overline{C}$ |
| P2 | 1, 5 | `0-01` | $\overline{A}\,\overline{C}D$ |
| P3 | 5, 7 | `01-1` | $\overline{A}BD$ |
| P4 | 0, 2, 8, 10 | `-0-0` | $\overline{B}\,\overline{D}$ |

*Column 4 — the prime-implicant chart.* Rows are PIs, columns the original minterms; `*` marks coverage.

| | 0 | 1 | 2 | 5 | 7 | 8 | 10 |
|---|---|---|---|---|---|---|---|
| P1 | `*` | `*` | | | | | |
| P2 | | `*` | | `*` | | | |
| P3 | | | | `*` | `*` | | |
| P4 | `*` | | `*` | | | `*` | `*` |

Columns 2, 8, 10 each carry exactly one mark, all in P4 → **P4 is essential**. Column 7 carries exactly one mark → **P3 is essential**. Taking both covers 0, 2, 5, 7, 8, 10; only minterm 1 is left, and P1 and P2 each cover it at the same cost of three literals. So the minimum has three terms and eight literals, and it is not unique:

$$F = \overline{B}\,\overline{D} + \overline{A}BD + \overline{A}\,\overline{B}\,\overline{C} \qquad\text{or}\qquad F = \overline{B}\,\overline{D} + \overline{A}BD + \overline{A}\,\overline{C}D.$$

*Check 1 — re-expand to minterms.* $\overline{B}\,\overline{D} = $ `-0-0` $\to$ 0, 2, 8, 10. $\overline{A}BD = $ `01-1` $\to$ 5, 7. $\overline{A}\,\overline{B}\,\overline{C} = $ `000-` $\to$ 0, 1. Union $= \{0,1,2,5,7,8,10\}$ — exactly the given minterm set, nothing extra. Correct.

*Check 2 — against the K-map.* Same function plotted:

| $AB \backslash CD$ | `00` | `01` | `11` | `10` |
|---|---|---|---|---|
| `00` | 1 | 1 | 0 | 1 |
| `01` | 0 | 1 | 1 | 0 |
| `11` | 0 | 0 | 0 | 0 |
| `10` | 1 | 0 | 0 | 1 |

$\overline{B}\,\overline{D}$ is the four-corners group; $\overline{A}BD$ is the pair in the middle of row `01`; $\overline{A}\,\overline{B}\,\overline{C}$ is the leftmost pair of row `00`. Identical answer — which is the point: Quine–McCluskey found the four-corner wrap-around with no notion of corners at all, just indices differing in one bit.

## Watch out

- **You might think a don't-care means "the output can be anything at run time."** It means the *input* cannot occur. Once you group, the output there is pinned to a definite value — you just never chose it deliberately. If the combination can actually arrive (a corrupted BCD digit, a counter knocked into an unused state), you are relying on an accident, which is why [4.2](04-02-counters.md) sometimes spends the don't-cares on safety instead of area.
- **You might think grouping the 0s gives you $F$ in POS form directly.** It gives you $\overline{F}$ in SOP form. Forgetting the De Morgan step at the end produces the complement of what you wanted — a circuit that is exactly wrong. Always sanity-check one row: here $F(1,1,0,0)$ should be 0, and $(\overline{C}+\overline{D})(\overline{A}+\overline{B}) = (1+1)(0+0) = 0$. Good.
- **You might think a minimal circuit is a correct circuit.** It is correct in steady state only. A minimal SOP whose groups merely touch will glitch on the transition across that seam, and downstream asynchronous logic — a latch's set input, an edge-triggered clock — can capture the glitch permanently. Minimality and hazard-freedom are different objectives, and the redundant term you add for the second one is the term the first one removed.

## One-liner

> An `X` is a variable you get for free, the 0s of a map minimize the complement, Quine–McCluskey is adjacency without pictures — and the term minimization deletes last is sometimes the one that keeps the output from glitching.

## Problems

**P1 (🟢)** A BCD digit arrives on $A,B,C,D$ ($A$ the most significant bit; only `0000`–`1001` occur). Let $F = 1$ when the digit is prime, i.e. $F = \Sigma m(2,3,5,7) + d(10,11,12,13,14,15)$. Give the minimal SOP, and state how many literals the don't-cares saved you.

**P2 (🟡)** Run a complete Quine–McCluskey pass on $F(A,B,C,D) = \Sigma m(0,4,5,7,12,13)$: show the combining stages, list the prime implicants, build the chart, and give the minimal SOP.

**P3 (🔴)** For $G(A,B,C) = \Sigma m(0,1,2,5)$ with $A$ the most significant bit: (a) find the minimal SOP by grouping 1s; (b) the result carries a static-1 hazard — name the input transition that exposes it and the redundant prime implicant that removes it.

<details>
<summary>Solutions</summary>

**P1** Map the 1s at 2, 3, 5, 7 with `X` at 10–15 (rows $AB$, columns $CD$, both in `00`, `01`, `11`, `10` order):

| $AB \backslash CD$ | `00` | `01` | `11` | `10` |
|---|---|---|---|---|
| `00` | 0 | 0 | 1 | 1 |
| `01` | 0 | 1 | 1 | 0 |
| `11` | X | X | X | X |
| `10` | 0 | 0 | X | X |

- $\{2,3\}$ absorbs 10 and 11 to become the quad $\{2,3,10,11\} = $ `-01-` $= \overline{B}C$. It cannot grow further: the octet `--1-` would need cell 6, which is 0, and `-0--` would need cells 0 and 1, also 0.
- $\{5,7\}$ absorbs 13 and 15 to become $\{5,7,13,15\} = $ `-1-1` $= BD$. Growing to `---1` needs cells 1 and 9 (both 0); to `-1--` needs 4 and 6 (both 0).
- $\{3,7\}$ absorbs 11 and 15 to give $CD$, a third prime implicant.

Chart over the required minterms 2, 3, 5, 7: cell 2 lies only in $\overline{B}C$ and cell 5 lies only in $BD$, so **both are essential**, and together they already cover 3 and 7. $CD$ is redundant.

$$F = \overline{B}C + BD \qquad \text{4 literals}.$$

*Check.* $\overline{B}C = $ `-01-` $\to$ 2, 3, 10, 11; only 2 and 3 are legal digits. $BD = $ `-1-1` $\to$ 5, 7, 13, 15; only 5 and 7 are legal. Union over legal digits $= \{2,3,5,7\}$ — the primes below 10, exactly. Correct.

*Saving.* With every `X` forced to 0 the only groups are the pairs $\{2,3\} = \overline{A}\,\overline{B}C$, $\{3,7\} = \overline{A}CD$, $\{5,7\} = \overline{A}BD$; cell 2 forces the first and cell 5 forces the third, and those two cover everything, giving $F = \overline{A}\,\overline{B}C + \overline{A}BD$ at **6 literals**. So the don't-cares saved 2 literals (6 → 4), and shrank both AND gates from 3 inputs to 2.

**P2** Sort by number of 1s: 0 = `0000` (zero 1s); 4 = `0100` (one); 5 = `0101` and 12 = `1100` (two); 7 = `0111` and 13 = `1101` (three).

*Combining, column 2:*

| combines | pattern | used later? |
|---|---|---|
| 0, 4 | `0-00` | no → **PI** |
| 4, 5 | `010-` | yes |
| 4, 12 | `-100` | yes |
| 5, 7 | `01-1` | no → **PI** |
| 5, 13 | `-101` | yes |
| 12, 13 | `110-` | yes |

(0 vs nothing else in the one-1 group; 4 vs 5 and 12 only — 4 vs 7 differs in two bits; 12 vs 7 in three; 12 vs 13 and 5 vs 7, 5 vs 13 are the rest.) All six minterms were combined, so column 1 yields no PIs.

*Column 3:* `-100` with `-101` differ only in $D$ → `-10-`. Equally, `010-` with `110-` differ only in $A$ → `-10-`. Same entry. `0-00` (dash in the $B$ slot) and `01-1` (dash in the $C$ slot) have no partner sharing their dash position, so they stay unused.

| combines | pattern | term |
|---|---|---|
| 4, 5, 12, 13 | `-10-` | $B\overline{C}$ |

One entry in column 3 → nothing more to combine; it is a PI.

*Prime implicants:* P1 $= (0,4) = $ `0-00` $= \overline{A}\,\overline{C}\,\overline{D}$; P2 $= (5,7) = $ `01-1` $= \overline{A}BD$; P3 $= (4,5,12,13) = $ `-10-` $= B\overline{C}$.

*Chart:*

| | 0 | 4 | 5 | 7 | 12 | 13 |
|---|---|---|---|---|---|---|
| P1 | `*` | `*` | | | | |
| P2 | | | `*` | `*` | | |
| P3 | | `*` | `*` | | `*` | `*` |

Column 0 has one mark (P1), column 7 has one mark (P2), columns 12 and 13 have one mark each (P3). All three PIs are essential, so the minimum is unique:

$$F = \overline{A}\,\overline{C}\,\overline{D} + \overline{A}BD + B\overline{C} \qquad \text{8 literals}.$$

*Check by re-expansion.* `0-00` $\to$ 0, 4. `01-1` $\to$ 5, 7. `-10-` $\to$ 4, 5, 12, 13. Union $= \{0,4,5,7,12,13\}$ — exactly the given set, nothing extra. Correct.

**P3** (a) Three variables, $A$ most significant; 1s at 0 = `000`, 1 = `001`, 2 = `010`, 5 = `101`:

| $A \backslash BC$ | `00` | `01` | `11` | `10` |
|---|---|---|---|---|
| `0` | 1 | 1 | 0 | 1 |
| `1` | 0 | 1 | 0 | 0 |

Prime implicants: $\{0,1\} = $ `00-` $= \overline{A}\,\overline{B}$; $\{0,2\} = $ `0-0` $= \overline{A}\,\overline{C}$; $\{1,5\} = $ `-01` $= \overline{B}C$. (No quad exists: `-0-` would need cell 4, `--0` would need 4 and 6, `0--` would need 3.) Cell 2 lies only in $\overline{A}\,\overline{C}$ and cell 5 only in $\overline{B}C$, so both are essential — and together they cover 0, 1, 2, 5, leaving $\overline{A}\,\overline{B}$ redundant:

$$G = \overline{A}\,\overline{C} + \overline{B}C \qquad \text{4 literals}.$$

*Check.* $\overline{A}\,\overline{C} \to$ `000`, `010` = 0, 2. $\overline{B}C \to$ `001`, `101` = 1, 5. Union $= \{0,1,2,5\}$. Correct.

(b) The two groups are cells $\{0,2\}$ and cells $\{1,5\}$. Cells 0 and 1 are adjacent (they differ only in $C$) but no single term covers both, so that is the seam. Set $A = 0$, $B = 0$ and let $C$ fall from 1 to 0: before, $\overline{B}C = 1$; after, $\overline{A}\,\overline{C} = 1$. In between, $C$ reaches the $\overline{B}C$ gate directly and turns it off, while the $\overline{A}\,\overline{C}$ gate must wait for the inverter on $C$ — so both terms sit at 0 for one inverter delay and $G$ glitches to 0. (The rising transition $C: 0 \to 1$ is safe by the same argument, since then the direct path turns a term *on* first.)

The bridging term is the pair $\{0,1\}$, i.e. the discarded prime implicant $\overline{A}\,\overline{B}$ — the consensus of $\overline{A}\,\overline{C}$ and $\overline{B}C$ with respect to $C$. With $A = B = 0$ it holds at 1 no matter what $C$ does:

$$G_{\text{hazard-free}} = \overline{A}\,\overline{C} + \overline{B}C + \overline{A}\,\overline{B}.$$

One extra AND gate, bought back to buy out the glitch.

</details>

## Flashback

**From Lesson 1.4 (Truth tables and canonical forms):** A three-variable function is specified as $H(A,B,C) = \Sigma m(0,2,4,7)$, with $A$ the most significant bit. Write $H$ in $\Pi M$ notation, and give its canonical product-of-sums expression in full.

<details>
<summary>Solution</summary>

With three variables there are $2^3 = 8$ index positions. The maxterm indices are whatever the minterm list omits:

$$H = \Sigma m(0,2,4,7) = \Pi M(1,3,5,6).$$

Each maxterm $M_j$ is the sum term that is 0 *only* at index $j$, so a bit of 0 in $j$ contributes the plain variable and a bit of 1 contributes its complement — the opposite of the minterm rule:

| $j$ | $ABC$ | $M_j$ |
|---|---|---|
| 1 | `001` | $A + B + \overline{C}$ |
| 3 | `011` | $A + \overline{B} + \overline{C}$ |
| 5 | `101` | $\overline{A} + B + \overline{C}$ |
| 6 | `110` | $\overline{A} + \overline{B} + C$ |

$$H = (A + B + \overline{C})(A + \overline{B} + \overline{C})(\overline{A} + B + \overline{C})(\overline{A} + \overline{B} + C).$$

*Check.* At $ABC = $ `001` the first factor is $0 + 0 + 0 = 0$, so $H = 0$ — and 1 is indeed not in the minterm list. At $ABC = $ `111` the factors evaluate to $1+1+0 = 1$, $1+0+0 = 1$, $0+1+0 = 1$, $0+0+1 = 1$, so $H = 1$ — and 7 is in the list. Correct.

</details>

## Connections

- **Backward:** every rule here is [2.1](02-01-karnaugh-maps.md)'s — adjacency, prime implicants, essential prime implicants — applied to a wider set of cells (`X` cells in the don't-care section, 0-cells in the POS section) or stripped of its geometry (Quine–McCluskey). The final De Morgan flip is straight from [1.3](01-03-boolean-algebra-logic-gates.md), and the $\Sigma m$ / $\Pi M$ bookkeeping from [1.4](01-04-truth-tables-canonical-forms.md).
- **Forward:** don't-cares are the standard tool for decoders driven by BCD or other sparse codes in [2.4](02-04-decoders-encoders-multiplexers.md), and they reappear as *unused states* in [4.2](04-02-counters.md), where treating them as free is exactly the mistake self-correcting design avoids. Hazards are the reason [3.2](03-02-flip-flops-and-clocking.md) samples only at a clock edge, once everything has settled.
- **Sideways (algorithms):** the prime-implicant chart is a set-cover instance — rows are sets, columns are elements to cover — and the essential-PI rule plus row dominance are the standard reductions before you resort to search ([`algorithms`](../../algorithms/syllabus.md)). The delay that makes hazards real is the CMOS gate delay derived in [`electronics` 4.3](../../electronics/lessons/04-03-cmos-inverter-gates.md).
