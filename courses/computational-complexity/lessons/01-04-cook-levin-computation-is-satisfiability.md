# Complexity Theory · Lesson 1.4: Cook–Levin — computation is satisfiability

> ⏱ ~15 min · Module 1: Time, hierarchy & NP-completeness · Builds on: [1.2 (NP and nondeterministic time)](01-02-np-ntime-and-nondeterministic-time.md), [`algorithms` 4.1 (reductions and completeness)](../../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md) · Unlocks: [1.5 (reduction craft)](01-05-reduction-craft-and-how-reductions-break.md), [3.2 (parsimonious reductions)](03-02-sharp-p-completeness-and-parsimonious-reductions.md)

## Why this matters

[`algorithms` 4.1](../../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md) defines NP-completeness and then says, reasonably, that the first complete problem has to come from somewhere and that this course supplies it. This is that lesson.

It is worth being clear about why this one theorem carries so much weight. Every other NP-completeness proof in existence is a reduction *from* a problem already known to be complete. That is a chain, and a chain needs an anchor. Cook–Levin is the anchor, and it is the only result in the subject proved directly from the definition of NP rather than from another problem.

The idea it runs on is also the most reusable thing in Module 1: **a computation is a two-dimensional array of symbols, and being a legal computation is a purely local property of that array.** That observation reappears in the PCP theorem ([4.5](04-05-probabilistically-checkable-proofs.md)), in the arithmetization of [4.4](04-04-arithmetization-sumcheck-and-ip-equals-pspace.md), and in the circuit encodings of [5.1](05-01-boolean-circuits-and-p-poly.md). Learn it once here.

## The idea

Take the verifier $V$ from [Lesson 1.2](01-02-np-ntime-and-nondeterministic-time.md), running in $n^k$ steps on input $w$ and certificate $c$. We want a Boolean formula that is satisfiable exactly when some $c$ makes $V$ accept.

**Write the computation down as a rectangle.** One row per time step, one column per tape cell. Row $i$ is the machine's configuration after $i$ steps: the tape contents, with the current state written in the cell the head is on. The machine runs for at most $n^k$ steps and so can touch at most $n^k$ cells, giving an $n^k \times n^k$ grid called the **tableau**. The whole history of the computation is in that grid.

**Make the grid the variables.** Introduce a Boolean variable $x_{i,j,s}$ meaning "cell $(i,j)$ contains symbol $s$". A truth assignment to these variables is a filled-in grid — possibly a nonsensical one, with two symbols in a cell or a machine that teleports.

**Write a formula that says the grid is a legal accepting computation.** This is where it could have gone wrong, and where it does not. The formula has to say four things:

1. Every cell holds exactly one symbol.
2. The first row is the correct starting configuration on $w$ and the certificate cells are unconstrained.
3. Some cell contains the accept state.
4. Every row follows from the one above it by a legal move.

The first three are easy. The fourth looks impossible — "follows by a legal move" seems to be a statement about entire rows, and a formula constraining $n^k$ cells at once would be enormous.

**The trick is that it is not.** A Turing machine changes one cell and moves one square per step. So if you look at any $2 \times 3$ window of the tableau — two consecutive rows, three consecutive columns — you can tell whether it is consistent with the transition function *without looking at anything else*. Every cell far from the head simply copies down; the cells near the head must match one of the finitely many legal patterns. And a row follows from the row above **if and only if** every $2 \times 3$ window in that pair of rows is legal. The "only if" is the direction that needs a moment's thought and is genuinely true: if the head is somewhere in the row, any illegal change anywhere is caught by the window centred on it.

Locality is everything. There are only $n^k \times n^k$ windows, each constrained by a formula of constant size, so the whole thing stays polynomial.

## The formal version

**Theorem ([Cook-Levin](../reference.md#cook-levin-theorem)).** SAT is NP-complete.

*In words: satisfiability is at least as hard as every problem whose solutions can be checked quickly — because checking quickly is itself a satisfiability question.*

*Proof.* SAT $\in \mathsf{NP}$: the certificate is a satisfying assignment, checked by evaluation in linear time.

For hardness, let $A \in \mathsf{NP}$ be arbitrary, decided by a nondeterministic TM $N$ in time $n^k$ (legitimate by [1.2](01-02-np-ntime-and-nondeterministic-time.md)). Given $w$ with $|w| = n$, build the tableau: an $n^k \times n^k$ grid over the symbol set $C = Q \cup \Gamma \cup \{\#\}$, where $\#$ delimits the rows. Variables $x_{i,j,s}$ for $1 \le i,j \le n^k$ and $s \in C$. Set

$$\varphi \;=\; \varphi_{\text{cell}} \wedge \varphi_{\text{start}} \wedge \varphi_{\text{accept}} \wedge \varphi_{\text{move}},$$

with:

| part | formula | says | size |
|---|---|---|---|
| $\varphi_{\text{cell}}$ | $\displaystyle\bigwedge_{i,j}\Big[\big(\bigvee_{s\in C} x_{i,j,s}\big) \wedge \bigwedge_{s\ne t}\big(\overline{x_{i,j,s}} \vee \overline{x_{i,j,t}}\big)\Big]$ | exactly one symbol per cell | $O(n^{2k})$ |
| $\varphi_{\text{start}}$ | $x_{1,1,\#} \wedge x_{1,2,q_0} \wedge x_{1,3,w_1} \wedge \cdots$ | row 1 is the start configuration | $O(n^{k})$ |
| $\varphi_{\text{accept}}$ | $\displaystyle\bigvee_{i,j} x_{i,j,q_{\text{acc}}}$ | the accept state appears | $O(n^{2k})$ |
| $\varphi_{\text{move}}$ | $\displaystyle\bigwedge_{i,j}\big(\text{window } (i,j) \text{ is legal}\big)$ | every step is a legal move | $O(n^{2k})$ |

"Window $(i,j)$ is legal" expands to a disjunction over the finitely many legal $2 \times 3$ patterns, each a conjunction of six variables. The number of legal patterns depends only on $N$, not on $n$ — a constant.

*Correctness.* $\varphi$ is satisfiable $\iff$ some assignment describes a grid that is a well-formed, correctly started, accepting, legal computation of $N$ on $w$ $\iff$ $N$ accepts $w$ $\iff$ $w \in A$.

*Cost.* Total size $O(n^{2k})$, and each clause is emitted by a fixed rule, so $\varphi$ is computable in time $O(n^{2k})$. That is polynomial, which is the fourth obligation of the reduction template from [`algorithms` 4.2](../../algorithms/lessons/04-02-the-np-complete-zoo.md). $\blacksquare$

**Corollary ([3SAT is NP-complete](../reference.md#3sat)).** Convert each clause of length $\ell > 3$ into $\ell - 2$ clauses of length exactly 3 using $\ell - 3$ fresh variables:

$$(a_1 \vee \cdots \vee a_\ell) \;\longmapsto\; (a_1 \vee a_2 \vee y_1) \wedge (\overline{y_1} \vee a_3 \vee y_2) \wedge \cdots \wedge (\overline{y_{\ell-3}} \vee a_{\ell-1} \vee a_\ell).$$

Satisfiability is preserved in both directions, and the blow-up is linear.

**A property to bank for Module 3.** The tableau reduction is **parsimonious**: given $w$, each accepting computation of $N$ corresponds to exactly one satisfying assignment of $\varphi$, because the certificate determines the entire tableau. So $\varphi$ has exactly as many satisfying assignments as $N$ has accepting branches. The clause-splitting step above is **not** parsimonious — verified on a five-literal clause, where 31 satisfying assignments of the original become 82 of the 3CNF, with different original assignments picking up 1, 2, 3 or 4 extensions each. [Lesson 3.2](03-02-sharp-p-completeness-and-parsimonious-reductions.md) is about why that difference matters.

## Picture

![A grid seven rows deep and nine columns wide, each cell holding a tape symbol such as hash, zero, one, underscore, or a state label q zero through q accept. Rows are labelled step zero through step six down the left side. A two by three block of cells straddling rows three and four is outlined in coral, marking one window.](assets/01-04-fig1.svg)

The rows are time and the columns are tape. Reading down column by column you can watch the head, marked by the blue state symbol, walk right through the input and then halt in the accept state.

The coral block is the entire proof in one object. Those six cells are all a checker needs to see to decide whether the step from row 3 to row 4 was legal *at that position* — the state symbol and its neighbours on the old row, and what they became on the new row. No information from the rest of the tableau is required, which is why the constraint fits in a constant-size formula.

Count them: a tableau of side $n^k$ has fewer than $n^{2k}$ such windows. Multiply by a constant-size formula each and the whole of $\varphi_{\text{move}}$ is $O(n^{2k})$. **The polynomial bound in the theorem is a consequence of the window being small, and the window is small because a Turing machine is slow** — it touches one cell per step. A machine that could rewrite its whole tape in one step would break this proof, and would also not be a Turing machine.

## Worked examples

**Example 1 (mechanical): count the clauses for a small tableau.** Suppose the symbol set is $C = \{0, 1, \sqcup, \#, q_0, q_{\text{acc}}\}$, so $|C| = 6$, and consider a $2 \times 2$ tableau. How many clauses does $\varphi_{\text{cell}}$ have, and how long are they?

Per cell, $\varphi_{\text{cell}}$ contributes:

- one clause $\big(x_{i,j,0} \vee x_{i,j,1} \vee \cdots\big)$ of **6 literals**, saying at least one symbol is present;
- $\binom{6}{2} = 15$ clauses of **2 literals** each, one per pair, saying no two are present.

That is 16 clauses per cell, so $4 \times 16 = \mathbf{64}$ clauses for the whole $2\times 2$ tableau.

Now scale it. For an $n^k \times n^k$ tableau the count is $n^{2k}\big(1 + \binom{|C|}{2}\big)$. The bracket is a constant fixed by the machine, so this group is $\Theta(n^{2k})$ — and the same shape of count applies to the other three groups. **Nothing in the construction depends on $n$ except the number of cells**, which is the entire size argument.

**Example 2 (why you'd care): reading the theorem as an engineering fact.** Cook–Levin says more than "SAT is hard". Read the reduction in the direction it actually gets used and it says: *any* problem with a polynomial-time checker can be **mechanically translated into a SAT instance of polynomial size.**

That is what a SAT solver is for. Take bounded model checking of a circuit: "is there an input sequence of length at most 20 driving this hardware into a bad state?" The checker is obvious — simulate 20 steps and look. So the problem is in NP, so Cook–Levin translates it to SAT, and the translation is exactly the tableau: one copy of the circuit's state variables per time step, plus constraints linking consecutive steps. Industrial model checkers build precisely this formula and hand it to a solver.

The complexity-theoretic reading and the engineering reading are the same statement. **Cook–Levin says NP-complete problems are hopeless in the worst case; it also says SAT solvers are universal front ends, and both follow from the same tableau.** Which of the two you experience depends on whether your instances are worst case, and in practice they usually are not.

## Watch out

- **You might think** $\varphi_{\text{move}}$ has to constrain whole rows — **but actually** the $2\times3$ window suffices in both directions, and that is the load-bearing claim. The "only if" half matters: an illegal change to a cell far from the head still shows up, because the window over that cell would show a symbol changing with no state adjacent to it.
- **You might think** the theorem gives a practical translation — **but actually** the formula has $\Theta(n^{2k})$ variables, so a verifier running in $n^3$ produces a formula with about $n^6$ variables. At $n = 100$ that is $10^{12}$ variables. The reduction is polynomial and thoroughly unusable as written; real encodings exploit the structure of the specific problem.
- **You might think** proving SAT NP-complete required knowing something about SAT — **but actually** the proof never uses a property of satisfiability beyond "a formula can express a conjunction of local constraints". Any problem expressive enough to encode local consistency would have served, which is why so many problems turn out complete.
- **You might think** the SAT-to-3SAT step is a harmless technicality — **but actually** it changes the number of satisfying assignments, as the verified example above shows. For deciding satisfiability that is irrelevant; for the counting problems of [Module 3](03-01-sharp-p-counting-is-harder-than-deciding.md) it is fatal, and the distinction between a reduction that preserves answers and one that preserves *counts* is the whole subject of [3.2](03-02-sharp-p-completeness-and-parsimonious-reductions.md).

## One-liner

> A computation is a rectangle whose legality is checkable one small window at a time, and a Boolean formula is exactly the right language for saying "every window is legal".

## Problems

**P1 (🟢)** A nondeterministic machine has 4 states and a tape alphabet of 3 symbols, so $|C| = 4 + 3 + 1 = 8$ counting the row delimiter. It runs in $n^2$ steps. For an input of length $n = 5$: (a) give the tableau's dimensions and its number of cells; (b) give the number of clauses contributed by $\varphi_{\text{cell}}$; (c) give the number of $2 \times 3$ windows.

**P2 (🟡)** Convert the clause $(a \vee b \vee c \vee d \vee e \vee f)$ into 3CNF by the standard chain construction. (a) Write the resulting clauses. (b) Give the number of clauses and the number of new variables, and check them against the general formula. (c) The assignment $a = \text{true}$ and $b = c = d = e = f = \text{false}$ satisfies the original clause. Give **all** extensions of it to the new variables that satisfy your 3CNF, and say what this shows about the reduction.

**P3 (🔴, optional)** The proof needs the tableau to be $n^k$ columns wide, on the grounds that a machine running $n^k$ steps cannot touch more than $n^k$ cells. Suppose instead you are reducing from a machine with a **two-dimensional** tape, which in $t$ steps can reach $O(t^2)$ cells. (a) State the tableau dimensions and the resulting formula size. (b) Is the reduction still polynomial? Answer yes or no with the one-line reason. (c) State the general condition on a machine model under which this proof technique produces a polynomial-size formula.

<details>
<summary>Solutions</summary>

**P1**

(a) The machine runs $n^2 = 25$ steps, so the tableau is $25 \times 25$: **625 cells**.

(b) Per cell: one clause of $|C| = 8$ literals, plus $\binom{8}{2} = 28$ two-literal clauses, so 29 clauses. Total $625 \times 29 = \mathbf{18{,}125}$ clauses.

(c) Windows are indexed by their top-left corner, which must leave room for 2 rows and 3 columns: $(25 - 1)\times(25 - 2) = 24 \times 23 = \mathbf{552}$.

Sanity check on the growth: at $n = 5$ these are all a few hundred to a few thousand; at $n = 50$ the tableau is $2500 \times 2500$ and $\varphi_{\text{cell}}$ alone has about $1.8\times10^{8}$ clauses. Polynomial, and enormous.

**P2**

(a) With $\ell = 6$ and fresh variables $y_1, y_2, y_3$:

$$(a \vee b \vee y_1) \wedge (\overline{y_1} \vee c \vee y_2) \wedge (\overline{y_2} \vee d \vee y_3) \wedge (\overline{y_3} \vee e \vee f).$$

(b) **4 clauses and 3 new variables.** The general formula gives $\ell - 2 = 4$ clauses and $\ell - 3 = 3$ variables. ✓

(c) With $a$ true and $b,c,d,e,f$ false, work right to left. The last clause $(\overline{y_3}\vee e \vee f)$ has $e = f = \text{false}$, so $y_3$ must be **false**. Then $(\overline{y_2} \vee d \vee y_3)$ has $d$ and $y_3$ false, so $y_2$ must be **false**. Then $(\overline{y_1} \vee c \vee y_2)$ forces $y_1$ **false**. Finally $(a \vee b \vee y_1)$ is satisfied by $a$. So there is **exactly one** extension: $y_1 = y_2 = y_3 = \text{false}$.

What it shows: for *this* assignment the reduction happens to be one-to-one. It is not in general — if $a$ and $f$ are both true the chain is satisfied from both ends and several $y$ patterns work. Counting over all assignments of a five-literal clause gives 31 originals and 82 extensions, so **the map preserves satisfiability but not the number of solutions.** Any argument that needs the count must use a different reduction; see [Lesson 3.2](03-02-sharp-p-completeness-and-parsimonious-reductions.md).

**P3**

(a) In $t = n^k$ steps the head reaches $O(t^2) = O(n^{2k})$ cells, so a row of the tableau must be $O(n^{2k})$ wide while there are still $n^k$ rows. Dimensions $n^k \times O(n^{2k})$, giving $O(n^{3k})$ cells and a formula of size $O(n^{3k})$.

(b) **Yes.** $n^{3k}$ is a polynomial in $n$, and a bigger polynomial is still a polynomial — the same closure property that makes $\mathsf{P}$ robust in [Lesson 1.1](01-01-time-the-model-and-p.md) makes the reduction survive here. Note the locality argument is unchanged: a two-dimensional head still modifies one cell per step, so a constant-size window (now a $2 \times 3 \times 3$ neighbourhood) still decides legality.

(c) The technique produces a polynomial-size formula whenever the model satisfies two conditions: **(i)** a $t$-step computation touches at most polynomially many cells in $t$, so the tableau is polynomial; and **(ii)** one step changes the configuration only within a bounded-size neighbourhood, so legality is checkable by a constant-size window. Condition (ii) is the one that fails for exotic models — a machine that could permute its whole tape in one step would need a window as large as the tape, and the formula would blow up even though the tableau did not.

</details>

## Flashback

**From Lesson 1.2 (NP, NTIME & nondeterministic time):** A nondeterministic machine $N$ decides $L$ in $n^2$ steps with at most 3 choices at each step. (a) Give a sufficient certificate length in bits. (b) Give the best bound on a deterministic simulation from the tree-search theorem, and name the class it puts $L$ in. (c) A colleague reads part (b) and says "so $L$ is in EXP, but we don't know whether it's in NP". Correct them in one sentence.

<details>
<summary>Solution</summary>

(a) Three choices need $\lceil \log_2 3 \rceil = 2$ bits to encode, and there are $n^2$ steps, so **$2n^2$ bits** suffice.

(b) The computation tree has depth $n^2$ and branching 3, hence at most $\frac{3^{n^2+1}-1}{2} = 2^{O(n^2)}$ nodes, each costing $O(n^2)$ to reconstruct. Total $2^{O(n^2)}$, so $L \in \mathrm{TIME}(2^{O(n^2)}) \subseteq \mathsf{EXP}$.

(c) The colleague has it backwards: $L \in \mathrm{NTIME}(n^2) \subseteq \mathsf{NP}$ **by the definition we started from** — that is given, not derived — and the simulation in (b) is what additionally places $L$ in EXP. The open question for a language like this is never whether it is in NP; it is whether it is in $\mathsf{P}$.

</details>

## Connections

- **Backward:** the verifier being encoded is [1.2](01-02-np-ntime-and-nondeterministic-time.md)'s, and the polynomial bound on its running time is what caps the tableau at $n^k$ on a side. The four-obligation reduction template being discharged is [`algorithms` 4.2](../../algorithms/lessons/04-02-the-np-complete-zoo.md)'s.
- **Forward:** [1.5](01-05-reduction-craft-and-how-reductions-break.md) takes 3SAT as the new anchor and reduces it to arithmetic problems, where the gadgets are numbers rather than graphs. [3.2](03-02-sharp-p-completeness-and-parsimonious-reductions.md) reuses this reduction's parsimony to prove a counting problem complete, and [4.5](04-05-probabilistically-checkable-proofs.md) replaces "check every window" with "check a constant number of randomly chosen ones".
- **Sideways:** the tableau is the same object as the unrolled circuit in bounded model checking, and the same "one copy of the state per time step" trick underlies the time-expanded graphs used for scheduling in [`operations-research` 3.1](../../operations-research/lessons/03-01-modeling-with-integer-variables.md). It is also, structurally, the space-time diagram of a cellular automaton, where local rules generating global behaviour is the whole subject.
