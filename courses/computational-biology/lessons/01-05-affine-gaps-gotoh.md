# Computational Biology · Lesson 1.5: Affine gaps (Gotoh)

> ⏱ ~15 min · Module 1: Sequence alignment & database search · Builds on: [1.3](01-03-needleman-wunsch-global-alignment.md) (global alignment), [1.4](01-04-smith-waterman-local-alignment.md) (local and semi-global) · Unlocks: [1.6](01-06-blast-seeded-heuristic-search.md) (BLAST), [3.1](03-01-markov-chains-to-hmms.md) (states as memory)

## Why this matters

A linear gap penalty charges a 3-residue gap exactly three times what it charges a 1-residue gap. Biology disagrees. An insertion or deletion is usually **one mutational event** — a polymerase slip, an unequal crossover — that removes or adds a whole stretch at once. One event of length 3 is far more likely than three separate events of length 1. Linear penalties get this backwards, so aligners using them scatter gaps all over the place to pick up the odd extra match.

The fix is to charge a large cost to *open* a gap and a small cost to *extend* it. Every serious aligner, BLAST included, does this. The catch is that one DP table can no longer do the job, and the reason it can't is a small, deep idea you'll meet again in HMMs: **the table has to remember what state the alignment is in.**

## The idea

Under an affine penalty, the cost of the next gap column depends on the column before it. If the previous column was already a gap in the same sequence, you pay the cheap extension. If it wasn't, you pay the expensive opening.

A single number $F(i,j)$ — "best score of any alignment of these prefixes" — throws that information away. Worse, **the best alignment of a prefix may be the wrong one to extend.** A slightly lower-scoring partial alignment that *ends in a gap* can overtake a higher one ending in a match, because it continues the gap cheaply (Problem 3 has a concrete case).

So keep **three** numbers per cell, one per kind of last column:

- $M(i,j)$: best score of an alignment of the prefixes that ends with $x_i$ aligned to $y_j$;
- $X(i,j)$: best score ending with $x_i$ against a gap;
- $Y(i,j)$: best score ending with $y_j$ against a gap.

Each is built from the three tables at the neighbouring cell, charging "open" when moving into a gap state from $M$ and "extend" when staying in the same gap state. It's still one pass over the grid, just three times the bookkeeping, so the time is still $\Theta(mn)$.

## The formal version

**Affine gap penalty.** A gap of length $L \ge 1$ costs

$$\gamma(L) = -\big(d + (L-1)\,e\big), \qquad d \ge e > 0,$$

where $d$ is the **gap-open** penalty (charged for the first gap position) and $e$ the **gap-extend** penalty (each further position). This is the [affine gap penalty](../reference.md#affine-gap-penalty). *In words: pay $d$ to start a gap, then $e$ per extra position.* Linear penalties are the special case $d = e$.

**Gotoh's recurrence** (global version, [three-state DP](../reference.md#gotoh-three-state-recurrence)):

$$M(i,j) = s(x_i, y_j) + \max\{\,M(i-1,j-1),\ X(i-1,j-1),\ Y(i-1,j-1)\,\}$$

$$X(i,j) = \max\{\,M(i-1,j) - d,\ \ X(i-1,j) - e\,\}$$

$$Y(i,j) = \max\{\,M(i,j-1) - d,\ \ Y(i,j-1) - e\,\}$$

with $M(0,0) = 0$, $X(i,0) = -d-(i-1)e$, $Y(0,j) = -d-(j-1)e$, and every other boundary entry $-\infty$. The score is $\max\{M(m,n), X(m,n), Y(m,n)\}$. *In words: an aligned pair can follow anything; a gap position either opens a new gap after an aligned pair or extends a gap of the same kind.* (This common form disallows a gap in $x$ directly followed by a gap in $y$; with sensible scores that is never optimal anyway.)

Traceback walks back through the *states* as well as the cells: from $X(i,j)$ you move to $M(i-1,j)$ or $X(i-1,j)$, whichever produced the value.

**Local version.** Add a $0$ option to $M(i,j)$ and take the maximum over all cells, as in [1.4](01-04-smith-waterman-local-alignment.md).

**Why affine specifically?** For an *arbitrary* gap cost $\gamma(L)$, the DP must consider every possible gap length ending at each cell:
$F(i,j) = \max_{L}\{F(i-L,j) + \gamma(L)\}$, which costs $\Theta(mn(m+n))$. The affine form is exactly the case where "the best way to end in a gap of length $L$" depends only on the previous cell's gap state. That is what lets three tables replace a scan over all lengths.

**Probabilistic reading.** Suppose gaps open with probability $\delta$ and each extends with probability $\varepsilon$. A gap of length $L$ then has probability $\delta\,\varepsilon^{L-1}$, and its log is $\log\delta + (L-1)\log\varepsilon$ — affine in $L$. So an affine penalty says gap lengths are **geometrically distributed**. The three tables are the three states of a pair hidden Markov model, which is where [3.1](03-01-markov-chains-to-hmms.md) picks up.

## Picture

![Left: a plot of gap cost against gap length from 1 to 6, with the linear penalty 2L rising steeply from 2 to 12 and the affine penalty 5 plus L minus 1 rising gently from 5 to 10, the lines crossing at length 4. Right: a three-state diagram with M at the top and gap states X and Y below; arrows from M into X and into Y are labelled minus d, each gap state has a self-loop labelled minus e, and dashed arrows return to M.](assets/01-05-fig1.svg)

On the left, the affine line starts higher (opening a gap is expensive) but climbs slowly. Long gaps are cheap relative to linear, short gaps dear. Three separate 1-gaps cost 15 under the affine rule, one 3-gap costs 7. On the right is the same rule as a machine. Entering a gap state costs $d$, staying in it costs $e$, and returning to $M$ is free apart from the pair score. The three DP tables are just the best score of being in each state at each cell.

## Worked examples

**Example 1 (mechanical): the same pair under two gap models.** Align $x = $ `CTGCGAT` with $y = $ `CCGT` (match $+1$, mismatch $-1$).

With a **linear** penalty of 2 per position, the unique optimum is

```
C T G C G A T
C - - C G - T
```

Four matches and three gap positions: $4 - 6 = \mathbf{-2}$.

With an **affine** penalty, $d = 5$ and $e = 1$, the unique optimum is instead

```
C T G C G A T
C C G - - - T
```

Three matches (C, G, T), one mismatch (T/C) and a single gap of length 3: $3 - 1 - (5 + 1 + 1) = \mathbf{-5}$.

Cross-check both alignments under both schemes:

| alignment | linear (2 per position) | affine ($d = 5$, $e = 1$) |
|---|---|---|
| `C--CG-T` (two gaps, lengths 2 and 1) | $4 - 6 = -2$ | $4 - (5+1) - 5 = -7$ |
| `CCG---T` (one gap of length 3) | $3 - 1 - 6 = -4$ | $3 - 1 - 7 = -5$ |

Linear scoring prefers two indel events and no mismatch. Affine scoring prefers one indel event plus a substitution. For proteins and DNA the affine story is usually the realistic one, which is why it's the default.

**Example 2 (why you'd care): BLAST's numbers and the convention trap.** BLAST's protein default is BLOSUM62 with "gap existence 11, extension 1". NCBI's convention charges a gap of length $L$ the cost $a + bL$, with $a = 11$ and $b = 1$. So:

| gap length $L$ | cost $11 + L$ | in this lesson's $d + (L-1)e$ form |
|---|---|---|
| 1 | 12 | $d = 12$ |
| 2 | 13 | $d + e = 13$ |
| 5 | 16 | $d + 4e = 16$ |

So BLAST's "open 11" is $d = 12$ here. Put in terms of BLOSUM62 scores: a single-residue gap costs as much as losing a W-W match (11) plus a little. A 5-residue gap costs only 4 more than a 1-residue gap. The penalties say "gaps are rare, but once one happens, its length hardly matters". That matches the observed distribution of indel lengths in homologous proteins, whose tail is long.

## Watch out

- **You might think** you can keep one table plus a flag saying whether the best path into each cell ended in a gap — **but actually** the best path into a cell is not always the best one to *extend*. A lower-scoring alignment that ends in a gap can win two columns later. Problem 3 is a concrete failure. You need all three values per cell.
- **You might copy** gap parameters between tools without checking conventions — **but actually** "open 11, extend 1" means a length-1 gap costs 12 in NCBI's $a + bL$ form and 11 in the $d + (L-1)e$ form used here and in many textbooks. The same numbers give different alignments.
- **You might set** $d = e$ to "turn off" affine gaps and expect a different result from Needleman–Wunsch — **but actually** $d = e$ *is* linear scoring. The three-table DP then returns exactly [1.3](01-03-needleman-wunsch-global-alignment.md)'s score.

## One-liner

> Real indels are single events, so charge a big price to open a gap and a small one to extend it — and because the next column's cost depends on the last column's state, keep three tables (match, gap in $x$, gap in $y$) instead of one.

## Problems

**P1 (🟢)** Two alignments of `ATTAA` with `TT`:

```
(i)  A T T A A        (ii)  A T T A A
     - T T - -              T T - - -
```

Match $+1$, mismatch $-1$. (a) Score both with a linear penalty of 2 per gap position. (b) Score both with an affine penalty $d = 4$, $e = 1$. (c) Which does each model prefer?

**P2 (🟡)** Aligning $x = $ `AAAT` with $y = $ `AA` under match $+1$, mismatch $-1$, $d = 4$, $e = 1$, the Gotoh tables at row 3 (prefix `AAA`) and at cell $(4,1)$ are

| entry | $M$ | $X$ | $Y$ |
|---|---|---|---|
| $(3,1)$ | −4 | −6 | $-\infty$ |
| $(3,2)$ | −2 | −2 | −8 |
| $(4,1)$ | −7 | −7 | $-\infty$ |

(a) Compute $M(4,2)$, $X(4,2)$ and $Y(4,2)$. Careful: $M(4,2)$ uses the diagonal neighbour $(3,1)$, whose $X$ entry is $-6$. (b) Give the optimal score and the state it ends in. (c) Write the optimal alignment.

**P3 (🔴)** A colleague implements affine gaps with **one** table $F$ and, per cell, a flag recording whether the best path into that cell ended with a gap in $x$, a gap in $y$, or a match. When a new gap position follows a cell whose flag is the same gap type, they charge $e$; otherwise $d$. Consider $x = $ `ATTAA`, $y = $ `TT`, match $+1$, mismatch $-1$, $d = 4$, $e = 1$.

(a) The true optimal score is $-6$. Give the alignment that achieves it. (b) At cell $(3,2)$ — prefixes `ATT` and `TT` — the best partial alignment scores $-2$ and ends in a match. What is the best partial alignment that ends with `A`, `T` or `T` of $x$ over a gap, and what does it score? (c) Explain, using (b), why the colleague's method returns $-8$ at $(5,2)$. (d) State the general principle in one sentence.

<details>
<summary>Solutions</summary>

**P1** (a) Linear: (i) has 2 matches and 3 gap positions, $2 - 6 = \mathbf{-4}$. (ii) has one mismatch (A/T), one match (T/T) and 3 gap positions, $-1 + 1 - 6 = \mathbf{-6}$.

(b) Affine: (i) has two gaps, of lengths 1 and 2, costing $4$ and $4 + 1 = 5$: $2 - 9 = \mathbf{-7}$. (ii) has one gap of length 3, costing $4 + 1 + 1 = 6$: $0 - 6 = \mathbf{-6}$.

(c) Linear prefers **(i)** ($-4 > -6$); affine prefers **(ii)** ($-6 > -7$). Both are the respective optima for this pair.

**P2** (a)
$M(4,2) = s(T,A) + \max\{M(3,1), X(3,1), Y(3,1)\} = -1 + \max\{-4, -6, -\infty\} = -1 - 4 = \mathbf{-5}$.

$X(4,2) = \max\{M(3,2) - d,\ X(3,2) - e\} = \max\{-2 - 4,\ -2 - 1\} = \max\{-6, -3\} = \mathbf{-3}$.

$Y(4,2) = \max\{M(4,1) - d,\ Y(4,1) - e\} = \max\{-7 - 4,\ -\infty\} = \mathbf{-11}$.

(b) $\max\{-5, -3, -11\} = \mathbf{-3}$, ending in state **X** ($x$'s last letter over a gap).

(c) $X(4,2)$ came from $X(3,2)$ (extend), which came from $M(2,2)$ (open), which is the two A's matched:

```
A A A T
A A - -
```

Two matches and one gap of length 2: $2 - (4 + 1) = -3$.

**P3** (a)

```
A T T A A
T T - - -
```

A/T mismatch, T/T match, one gap of length 3: $-1 + 1 - (4 + 1 + 1) = -6$.

(b) The best partial alignment ending in a gap at $(3,2)$ is

```
A T T
T T -
```

A/T mismatch ($-1$), T/T match ($+1$), then $x$'s third letter over a gap ($-4$): $\mathbf{-4}$. (It is Gotoh's $X(3,2)$.)

(c) The colleague's cell $(3,2)$ keeps only $-2$ (`ATT` over `-TT`, flagged "match") and discards the $-4$ alignment that ends in a gap. From then on, every gap position running down column 2 is charged as a fresh **opening**:

- at $(4,2)$ the gap option is $-2 - 4 = -6$, so the cell takes the mismatch option $F(3,1) + s(A,T) = -4 - 1 = -5$ instead (flag "match");
- at $(5,2)$ the gap option is $-5 - 4 = -9$ and the mismatch option $F(4,1) + s(A,T) = -7 - 1 = -8$ wins.

So the method returns $-8$. Gotoh's tables keep $X(3,2) = -4$ and extend it for 1 per step: $X(4,2) = -5$, $X(5,2) = -6$. The discarded alignment was 2 points behind at $(3,2)$ and saved 3 points on each of the next two gap positions.

(d) With affine gaps, the best partial solution into a cell is not necessarily a prefix of the best full solution, because the cost of what comes next depends on how the partial solution *ended*. Keep the best score **for each ending state**, and optimal substructure is restored.

</details>

## Flashback

**From Lesson 1.3 (Needleman–Wunsch):** Align $x = $ `TACGA` (side) with $y = $ `TCGGA` (top) using match $+2$, mismatch $-1$ and linear gap $-2$. (a) Fill the matrix. (b) Give the optimal score. (c) Give every optimal alignment.

<details>
<summary>Solution</summary>

*Accept criterion: score 4 and all three alignments below.*

(a)

| | − | T | C | G | G | A |
|---|---|---|---|---|---|---|
| **−** | 0 | −2 | −4 | −6 | −8 | −10 |
| **T** | −2 | 2 | 0 | −2 | −4 | −6 |
| **A** | −4 | 0 | 1 | −1 | −3 | −2 |
| **C** | −6 | −2 | 2 | 0 | −2 | −4 |
| **G** | −8 | −4 | 0 | 4 | 2 | 0 |
| **A** | −10 | −6 | −2 | 2 | 3 | 4 |

(b) Score **4**.

(c) Three co-optimal alignments:

```
T A C G A      T A C - G A      T A C G - A
T C G G A      T - C G G A      T - C G G A
```

The first has three matches and two mismatches: $6 - 2 = 4$. The other two each have four matches and two gaps: $8 - 4 = 4$. With match worth $+2$, trading two mismatches for two gaps and one extra match breaks even. Under an affine penalty the gapped versions would lose, since each has two separate gaps to open.

</details>

## Connections

- **Backward:** [1.3](01-03-needleman-wunsch-global-alignment.md) and [1.4](01-04-smith-waterman-local-alignment.md) are the $d = e$ special case; the "keep the best per state" repair mirrors how [algorithms 2.5](../../algorithms/lessons/02-05-dynamic-programming-and-knapsack.md) enlarges a DP's state until optimal substructure holds.
- **Forward:** [1.6](01-06-blast-seeded-heuristic-search.md)'s gapped extension uses exactly these three tables; [3.1](03-01-markov-chains-to-hmms.md) recasts $M$, $X$, $Y$ as hidden states and the gap penalties as log transition probabilities; profile HMMs ([3.5](03-05-profile-hmms.md)) make the open and extend costs position-specific.
- **Sideways:** "remember which regime you're in" is the state register of a Mealy machine, whose output depends on both the input and the current state ([digital-logic 3.3](../../digital-logic/lessons/03-03-analysis-of-synchronous-circuits.md)), and the geometric length distribution behind affine gaps is the same memoryless waiting time used for ORF lengths in [1.1](01-01-sequences-alphabets-databases.md).
