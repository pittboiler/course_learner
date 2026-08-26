# Digital Logic Design · Lesson 1.4: Truth tables and canonical forms

> ⏱ ~15 min · Module 1: Binary and Boolean algebra · Builds on: [1.1 Number systems and bases](01-01-number-systems-and-bases.md), [1.3 Boolean algebra and logic gates](01-03-boolean-algebra-logic-gates.md) · Unlocks: [2.1 Karnaugh maps](02-01-karnaugh-maps.md)

## Why this matters

You are handed a spec: *"the alarm sounds when the door is open and the system is armed, or whenever the panic button is pressed."* Somewhere between that sentence and a soldered board, someone has to produce an actual arrangement of gates. This lesson is that bridge, and the remarkable thing is that it is **mechanical** — no cleverness required. Write the truth table, apply a recipe, out comes a circuit that provably matches the spec on every input.

That guarantee is the foundation of the whole field. It also settles a question that ought to worry you: is AND, OR and NOT *enough* to build anything? The recipe answers yes, by construction. And once you can always produce *a* circuit, the rest of the course is about producing a *cheap* one.

## The idea

Here is the claim, and it is worth saying boldly:

> **The truth table *is* the function.** Nothing else about a combinational circuit matters.

A function of $n$ inputs has $2^n$ possible input combinations, one per row. Fixing the output on every row leaves nothing undecided — two circuits with the same truth table are the same function, however different their schematics look. And since each of the $2^n$ rows can be assigned a 0 or a 1 independently, there are exactly

$$2^{2^n}$$

distinct Boolean functions of $n$ variables. For $n=1$ that's $2^2 = 4$ (constant 0, constant 1, $A$, $\overline{A}$ — and yes, that's all of them). For $n=2$: $2^4 = 16$. For $n=3$: $2^8 = 256$. For $n=4$: $2^{16} = 65{,}536$. The number explodes, which is exactly why we need a *procedure* rather than inspiration.

So: how do you get from a column of 0s and 1s to an expression? Two mirror-image strategies.

**Strategy 1 — detectors.** For each row where $F=1$, build an AND term that is 1 on *that row alone* — a detector for that exact input pattern. OR all the detectors together. The result is 1 precisely when the input matches one of the good rows. This is **sum of products (SOP)**.

**Strategy 2 — vetoes.** For each row where $F=0$, build an OR term that is 0 on *that row alone* — a veto for that exact input pattern. AND all the vetoes together. One veto firing drags the whole product to 0; if no veto fires, the answer is 1. This is **product of sums (POS)**.

Same table, two circuits, both exactly right. One is built from the 1s, the other from the 0s.

## The formal version

**Notation for this course.** Complement is $\overline{A}$ (some books write $A'$); AND is juxtaposition $AB$ or $A \cdot B$; OR is $A + B$. Note that "sum" and "product" here mean OR and AND, not arithmetic. Variables are ordered with **$A$ as the most significant bit**, and the **row index $i$ is the binary value of the input combination** — so for three variables, row 6 is $ABC = $ `110`.

**Minterm.** For $n$ variables, the minterm $m_i$ is the AND of all $n$ variables, each appearing exactly once, chosen so that $m_i = 1$ on row $i$ and nowhere else.

> **Building rule (minterm):** in row $i$, take each variable **plain if its bit is 1**, **complemented if its bit is 0**.

*In words: write the pattern down as a product that "asks" for exactly those bit values.* Row 6 = `110` gives $m_6 = AB\overline{C}$: it demands $A=1$, $B=1$, $C=0$. Any other input makes at least one factor 0.

**Maxterm.** The maxterm $M_i$ is the OR of all $n$ variables, each once, chosen so that $M_i = 0$ on row $i$ and nowhere else.

> **Building rule (maxterm):** in row $i$, take each variable **plain if its bit is 0**, **complemented if its bit is 1**. This is the *mirror* of the minterm rule.

*In words: an OR is 0 only when every term is 0, so to zero it on row $i$ you must arrange for each literal to be false there.* Row 6 = `110` gives $M_6 = \overline{A} + \overline{B} + C$, which is $0+0+0 = 0$ at `110` and 1 everywhere else. **The inversion is the single most-confused point in this lesson** — burn it in now.

All eight terms for three variables:

| $i$ | $ABC$ | $m_i$ | $M_i$ |
|---|---|---|---|
| 0 | `000` | $\overline{A}\,\overline{B}\,\overline{C}$ | $A + B + C$ |
| 1 | `001` | $\overline{A}\,\overline{B}C$ | $A + B + \overline{C}$ |
| 2 | `010` | $\overline{A}B\overline{C}$ | $A + \overline{B} + C$ |
| 3 | `011` | $\overline{A}BC$ | $A + \overline{B} + \overline{C}$ |
| 4 | `100` | $A\overline{B}\,\overline{C}$ | $\overline{A} + B + C$ |
| 5 | `101` | $A\overline{B}C$ | $\overline{A} + B + \overline{C}$ |
| 6 | `110` | $AB\overline{C}$ | $\overline{A} + \overline{B} + C$ |
| 7 | `111` | $ABC$ | $\overline{A} + \overline{B} + \overline{C}$ |

**Canonical SOP (sum of minterms).** Let $S$ be the set of row indices where $F = 1$. Then

$$\boxed{\,F = \sum_{i \in S} m_i \,}\qquad\text{written}\qquad F = \Sigma m(S).$$

*In words: OR together the minterms of the rows where the function is 1.* It works because on a row in $S$ exactly one minterm is 1 (so the OR is 1) and on any other row every minterm is 0.

**Canonical POS (product of maxterms).** Let $\overline{S}$ be the complementary set — the rows where $F = 0$. Then

$$\boxed{\,F = \prod_{i \in \overline{S}} M_i \,}\qquad\text{written}\qquad F = \Pi M(\overline{S}).$$

*In words: AND together the maxterms of the rows where the function is 0.*

**Three conversion facts.**

1. **Complementary index sets.** $\Sigma m(S) = \Pi M(\overline{S})$, where $\overline{S}$ is every index from $0$ to $2^n - 1$ *not* in $S$. The SOP list and the POS list of the same function never share an index and together account for every row.
2. **$m_i = \overline{M_i}$.** A minterm and the maxterm of the same index are complements. Check $i=1$ with De Morgan from [1.3](01-03-boolean-algebra-logic-gates.md): $\overline{m_1} = \overline{\overline{A}\,\overline{B}C} = A + B + \overline{C} = M_1$. ✓
3. **Complementing swaps the roles.** $\overline{F} = \Sigma m(\overline{S})$ — the minterms of the rows where $F = 0$.

Fact 1 is really a *consequence* of 2 and 3, not a separate axiom. Start from the complement, then De Morgan the whole thing:

$$F = \overline{\overline{F}} = \overline{\sum_{i \in \overline{S}} m_i} = \prod_{i \in \overline{S}} \overline{m_i} = \prod_{i \in \overline{S}} M_i .$$

*In words: the POS form is just the SOP form of the complement, turned inside out by De Morgan.*

## Picture

![A three-variable truth table for the majority function beside its two canonical realizations: four AND gates feeding one OR gate for the sum of minterms, and four OR gates feeding one AND gate for the product of maxterms, with row 6 highlighted in coral and traced to the AND gate it generates](assets/01-04-fig1.svg)

## Worked examples

**Example 1 — one table, both forms, verified.** Take the 3-input **majority** function: $F = 1$ when two or more inputs are 1.

| $i$ | $ABC$ | $F$ |
|---|---|---|
| 0 | `000` | 0 |
| 1 | `001` | 0 |
| 2 | `010` | 0 |
| 3 | `011` | 1 |
| 4 | `100` | 0 |
| 5 | `101` | 1 |
| 6 | `110` | 1 |
| 7 | `111` | 1 |

So $S = \{3,5,6,7\}$ and $\overline{S} = \{0,1,2,4\}$:

$$F = \Sigma m(3,5,6,7) = \overline{A}BC + A\overline{B}C + AB\overline{C} + ABC$$

$$F = \Pi M(0,1,2,4) = (A+B+C)(A+B+\overline{C})(A+\overline{B}+C)(\overline{A}+B+C)$$

*Verification — evaluate both on all eight rows.* For the SOP, exactly one minterm can be 1 at a time, so the OR is 1 iff the row is in $\{3,5,6,7\}$. For the POS, the product is 0 iff at least one listed maxterm is 0, and $M_i$ is 0 only on row $i$, so it is 0 iff the row is in $\{0,1,2,4\}$.

| $i$ | $ABC$ | $F$ | SOP: minterm that fires → value | POS: maxterm that zeroes → value |
|---|---|---|---|---|
| 0 | `000` | 0 | none → 0 | $M_0 = 0+0+0 = 0$ → 0 |
| 1 | `001` | 0 | none → 0 | $M_1 = 0+0+0 = 0$ → 0 |
| 2 | `010` | 0 | none → 0 | $M_2 = 0+0+0 = 0$ → 0 |
| 3 | `011` | 1 | $m_3$ → 1 | none (all four are 1) → 1 |
| 4 | `100` | 0 | none → 0 | $M_4 = 0+0+0 = 0$ → 0 |
| 5 | `101` | 1 | $m_5$ → 1 | none → 1 |
| 6 | `110` | 1 | $m_6$ → 1 | none → 1 |
| 7 | `111` | 1 | $m_7$ → 1 | none → 1 |

Spot-check one POS row by hand, row 5 (`101`): $M_0 = 1+0+1 = 1$, $M_1 = 1+0+0 = 1$, $M_2 = 1+1+1 = 1$, $M_4 = 0+0+1 = 1$; product $= 1$. ✓ Both columns reproduce $F$ exactly. And $\overline{F} = \Sigma m(0,1,2,4) = \Pi M(3,5,6,7)$ — the two lists simply trade places.

**Canonical is not minimal.** The canonical SOP above costs four 3-input ANDs plus a 4-input OR. But majority also equals

$$F = AB + BC + AC,$$

three 2-input ANDs and one 3-input OR — cheaper in gates *and* in wires. (Sanity check by re-expanding: $AB = AB(C + \overline{C}) = m_7 + m_6$; $BC = (A + \overline{A})BC = m_7 + m_3$; $AC = A(B+\overline{B})C = m_7 + m_5$. The union is $\{3,5,6,7\}$. ✓ Same function.) The canonical form is **unique** and usually **expensive**; a minimal form is **cheap** and generally **not unique**. Canonical forms are the standard *input* to minimization — [2.1 Karnaugh maps](02-01-karnaugh-maps.md) consumes a $\Sigma m$ list and hands back the short expression.

**Example 2 — why canonical forms prove something.** A set of gates is **functionally complete** if every Boolean function can be built from it alone.

$\{$AND, OR, NOT$\}$ is functionally complete — and the canonical SOP construction *is* the proof. Given any function whatever, write its truth table, build the minterms (NOTs and ANDs), OR them together. Done, for every one of the $2^{2^n}$ functions. One edge case: if the function is the constant 0 there are no minterms, so define the empty OR to be 0. That's the whole argument, and it's a satisfying one: an existence proof that comes with an algorithm.

Now squeeze further. Using De Morgan from [1.3](01-03-boolean-algebra-logic-gates.md), **NAND alone** is complete, because it can build all three:

- NOT: $\overline{A} = \overline{A \cdot A}$ — tie both inputs together.
- AND: $AB = \overline{\overline{A \cdot B}}$ — a NAND followed by a NAND-as-inverter.
- OR: $A + B = \overline{\overline{A} \cdot \overline{B}}$ — invert both inputs with NANDs, then NAND them.

By duality the same holds for **NOR alone** (that's P3). This is why real chip libraries are built from NAND and NOR: one cell type suffices, and in CMOS a NAND is 4 transistors while AND is 6 (NAND plus an inverter) — see [`electronics` 4.3](../../electronics/lessons/04-03-cmos-inverter-gates.md).

The idea is not vacuous, because some natural sets **fail**: $\{$AND, OR$\}$ *without* NOT is **not** complete. Every function built from ANDs and ORs of uncomplemented variables is **monotone** — flipping an input from 0 to 1 can never flip the output from 1 to 0 (true of AND and OR individually, and preserved under composition). But $\overline{A}$ goes from 1 down to 0 as $A$ rises. No amount of ANDing and ORing produces it. Complementation is a genuinely separate power.

**Two-level structure.** Look at the canonical SOP again: a layer of AND gates, then one OR gate. Ignoring the inverters that produce $\overline{A}, \overline{B}, \overline{C}$ at the inputs, a signal passes through exactly **two gate levels** — and the same for POS (ORs, then one AND). Level count is the currency of speed, one gate delay per level, and it is also why an AND-OR network converts one-for-one into a NAND-NAND network (De Morgan again, bubbles pushed) at the same depth. Gate-delay accounting in earnest arrives in [2.3 Arithmetic circuits](02-03-arithmetic-circuits.md), where a ripple-carry adder's depth grows with word length and two-level logic is the thing you wish you had.

## Watch out

- **You might think the maxterm rule matches the minterm rule.** It is inverted. Row `101` gives the minterm $A\overline{B}C$ but the maxterm $\overline{A} + B + \overline{C}$. Anchor on the *purpose*, not the pattern: a minterm must be **1** on its row, an OR is **0** only when everything in it is 0, so the maxterm must complement whatever the minterm keeps.
- **You might read the two index lists as describing different functions.** $\Sigma m(3,5,6,7)$ and $\Pi M(0,1,2,4)$ are the *same* function written two ways. SOP lists the 1-rows, POS lists the 0-rows; they always partition $\{0, 1, \ldots, 2^n-1\}$ between them. If your two lists overlap or don't cover every row, you have made an error. And neither is the circuit you should *build* — only the one you can always build.
- **You might forget to fix the variable order.** Row index depends on which variable is the MSB. With $A$ most significant, `110` is row 6; if you silently switched to $C$ most significant it would be row 3, and every index in your $\Sigma m$ list would be scrambled. State the order, then never change it.

## One-liner

> Every $F=1$ row hands you an AND term and every $F=0$ row hands you an OR term, so any truth table converts mechanically into $\Sigma m$ or $\Pi M$ — always correct, never minimal, and proof that AND-OR-NOT (or NAND alone) can build anything.

## Problems

**P1 (🟢)** $F(A,B,C) = 1$ exactly when the 3-bit input, read as an unsigned binary number with $A$ the most significant bit, is a multiple of 3 (count 0 as a multiple). Write the truth table, then give $F$ as a canonical SOP and as a canonical POS, in both index notation and expanded form.

**P2 (🟡)** A 4-variable function is given as $F(A,B,C,D) = \Sigma m(0,2,5,7,8,10,13,15)$, with $A$ the most significant variable. (a) Give $F$ in $\Pi M$ index notation. (b) Give $\overline{F}$ in both $\Sigma m$ and $\Pi M$ notation. (c) Identify what $F$ computes, in one sentence about the input bits.

**P3 (🔴)** Show that **NOR alone** is functionally complete by building NOT, OR, and AND from NOR gates only, and state how many NOR gates each costs. Then say, in one sentence, why this plus the canonical SOP construction means *every* Boolean function has a NOR-only realization.

<details>
<summary>Solutions</summary>

**P1** The multiples of 3 in `000`…`111` are 0, 3, and 6.

| $i$ | $ABC$ | value | $F$ |
|---|---|---|---|
| 0 | `000` | 0 | 1 |
| 1 | `001` | 1 | 0 |
| 2 | `010` | 2 | 0 |
| 3 | `011` | 3 | 1 |
| 4 | `100` | 4 | 0 |
| 5 | `101` | 5 | 0 |
| 6 | `110` | 6 | 1 |
| 7 | `111` | 7 | 0 |

$S = \{0,3,6\}$, so $\overline{S} = \{1,2,4,5,7\}$.

$$F = \Sigma m(0,3,6) = \overline{A}\,\overline{B}\,\overline{C} + \overline{A}BC + AB\overline{C}$$

$$F = \Pi M(1,2,4,5,7) = (A+B+\overline{C})(A+\overline{B}+C)(\overline{A}+B+C)(\overline{A}+B+\overline{C})(\overline{A}+\overline{B}+\overline{C})$$

*Check — evaluate the POS on every row.* Each $M_i$ is 0 only on its own row, so the product is 0 exactly on rows 1, 2, 4, 5, 7 and 1 on rows 0, 3, 6. Verifying two rows literally: row 0 (`000`) gives $M_1 = 0+0+1 = 1$, $M_2 = 0+1+0 = 1$, $M_4 = 1+0+0 = 1$, $M_5 = 1+0+1 = 1$, $M_7 = 1+1+1 = 1$, product 1 ✓; row 5 (`101`) gives $M_5 = \overline{A}+B+\overline{C} = 0+0+0 = 0$, product 0 ✓. The two index lists are disjoint and cover 0–7. ✓

**P2** There are $2^4 = 16$ rows, indices 0–15.

(a) $\overline{S}$ is everything not listed: $F = \Pi M(1,3,4,6,9,11,12,14)$.

(b) $\overline{F} = \Sigma m(1,3,4,6,9,11,12,14) = \Pi M(0,2,5,7,8,10,13,15)$ — the two lists trade places.

(c) Expand a few indices with $A$ as MSB: $0 =$ `0000`, $2 =$ `0010`, $5 =$ `0101`, $7 =$ `0111`, $8 =$ `1000`, $10 =$ `1010`, $13 =$ `1101`, $15 =$ `1111`. In every one, the $B$ bit equals the $D$ bit. So $F = 1$ exactly when $B = D$, i.e. $F = \overline{B \oplus D}$ — the XNOR of $B$ and $D$, ignoring $A$ and $C$ entirely.

*Check.* Take one index from the complement list, $11 =$ `1011`: $B = 0$, $D = 1$, unequal, so $F$ should be 0 — and 11 is indeed absent from the $\Sigma m$ list ✓. Count: exactly half of 16 rows have $B = D$, and the list has 8 entries ✓.

**P3** Write $A \downarrow B = \overline{A + B}$ for NOR.

- **NOT** (1 gate): $A \downarrow A = \overline{A + A} = \overline{A}$.
- **OR** (2 gates): $A + B = \overline{\overline{A+B}} = (A \downarrow B) \downarrow (A \downarrow B)$ — a NOR followed by a NOR-as-inverter.
- **AND** (3 gates): by De Morgan $AB = \overline{\overline{A} + \overline{B}} = \overline{A} \downarrow \overline{B} = (A \downarrow A) \downarrow (B \downarrow B)$ — invert each input, then NOR.

*Check the AND on all four rows.* $A{=}0,B{=}0$: inverters give 1, 1; $1 \downarrow 1 = 0$ ✓. $A{=}0,B{=}1$: 1, 0; $1 \downarrow 0 = 0$ ✓. $A{=}1,B{=}0$: 0, 1; $0 \downarrow 1 = 0$ ✓. $A{=}1,B{=}1$: 0, 0; $0 \downarrow 0 = 1$ ✓. Exactly the AND table.

Every Boolean function has a canonical SOP built only from NOT, AND, and OR; each of those three is now a small NOR-only sub-circuit, so substituting them gives a NOR-only realization of *any* function. (Dually for NAND — which is why a chip library can get away with essentially one cell type.)

</details>

## Flashback

**From Lesson 1.2 (Signed numbers and two's-complement arithmetic):** Work in **6-bit** two's complement. (a) Give the bit pattern for $-19$. (b) Compute $12 - 19$ by adding the two's complement of 19, give the 6-bit result and its decimal value, and state whether overflow occurred and how you know.

<details>
<summary>Solution</summary>

(a) $19 = $ `010011` in 6 bits. Invert: `101100`. Add 1: `101101`. So $-19 = $ `101101`.

*Check:* read `101101` as unsigned, $32+8+4+1 = 45$, and $45 - 64 = -19$ ✓ (the $n$-bit two's-complement value of a pattern is its unsigned value minus $2^n$ when the sign bit is set).

(b) $12 = $ `001100`. Add:

```
   001100   (12)
 + 101101   (-19)
 = 111001
```

Column by column from the right: $0+1=1$; $0+0=0$; $1+1=0$ carry 1; $1+1+1=1$ carry 1; $0+0+1=1$; $0+1+0=1$, carry out 0.

Result `111001`, whose value is $57 - 64 = -7$, and indeed $12 - 19 = -7$ ✓.

**No overflow.** Two ways to see it: the carry *into* the sign column is 0 and the carry *out* is 0, and equal carries mean no overflow; and structurally, adding a positive to a negative can never overflow, because the true sum lies between the two operands and both are already in range. (Note the carry out is 0 here while in many two's-complement subtractions it is 1 — carry out is not overflow.)

</details>

## Connections

- **Backward:** the row index is just [1.1](01-01-number-systems-and-bases.md)'s positional binary reading of the input bits, and every conversion here — $m_i = \overline{M_i}$, SOP ↔ POS — is De Morgan from [1.3](01-03-boolean-algebra-logic-gates.md) applied to a whole expression at once.
- **Forward:** [2.1 Karnaugh maps](02-01-karnaugh-maps.md) takes a $\Sigma m$ list and returns a minimal SOP; [2.2](02-02-dont-cares-pos-quine-mccluskey.md) does the same for POS and adds don't-cares, where some rows are neither 1 nor 0 and belong to neither list; [2.3](02-03-arithmetic-circuits.md) starts counting the gate levels this lesson introduced; [2.4](02-04-decoders-encoders-multiplexers.md) makes the idea physical — a binary decoder outputs *all* $2^n$ minterms at once, so a decoder plus one OR gate is a canonical SOP in silicon.
- **Sideways (discrete math):** canonical SOP and canonical POS are exactly **disjunctive normal form** and **conjunctive normal form** from [`discrete-mathematics` 1.1](../../discrete-mathematics/lessons/01-01-propositional-logic-boolean-algebra.md) — minterm is "conjunctive clause", maxterm is "disjunctive clause", and the same De Morgan duality connects them. CNF is also the input format for the satisfiability problem, the reference NP-complete problem in [`algorithms`](../../algorithms/syllabus.md): asking whether a POS can ever equal 1 is asking whether a truth table has any 1-row at all, which for large $n$ is brutally hard even though the $\Pi M$ list looks so innocent.
