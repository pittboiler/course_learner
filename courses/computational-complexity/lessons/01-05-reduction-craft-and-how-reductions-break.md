# Complexity Theory · Lesson 1.5: Reduction craft & how reductions break

> ⏱ ~15 min · Module 1: Time, hierarchy & NP-completeness · Builds on: [1.4 (Cook–Levin)](01-04-cook-levin-computation-is-satisfiability.md), [`algorithms` 4.2 (the NP-complete zoo)](../../algorithms/lessons/04-02-the-np-complete-zoo.md) · Unlocks: [1.6 (Ladner and self-reducibility)](01-06-ladner-self-reducibility-search-vs-decision.md), [6.1 (ETH and SETH)](06-01-eth-seth-and-the-exponential-time-view.md)

## Why this matters

You can already build a reduction. [`algorithms` 4.2](../../algorithms/lessons/04-02-the-np-complete-zoo.md) gives the four obligations and works the graph chain — 3SAT to Independent Set to Vertex Cover to Clique — where the gadgets are triangles and edges and the intuition is visual.

This lesson is about the two things that course does not cover, and both are the ones that bite in practice.

**Arithmetic gadgets.** When the target problem's objects are *numbers* rather than graphs, the design discipline changes completely. You are no longer wiring vertices together; you are laying out digit columns and making sure nothing carries. The technique is beautiful, it is the basis of the SUBSET-SUM, PARTITION and KNAPSACK hardness results, and it produces a distinction — strong versus weak NP-hardness — with real algorithmic consequences.

**Diagnosis.** Most reductions you will read in the wild are broken, and they break in a small number of stereotyped ways. Being able to construct the counterexample instance that kills a proposed reduction is a more useful skill than being able to write a correct one from scratch, because you will do it far more often. It is also the thing that stays hard when a language model is writing the first draft.

## The idea

**Numbers as vectors of digits.** Pick a base large enough that no column can ever overflow — usually 10, sometimes $b = m+1$. Then a number is simply a vector of independent counters, and *adding numbers adds the counters componentwise*. The target number is a vector of required totals. Subset-sum over such numbers is therefore a constraint satisfaction problem in disguise, one constraint per digit column, and your entire design job is choosing what each column means.

For 3SAT this is remarkably direct. Give each variable a column, each clause a column, and each *literal* a row:

- Variable column $x_i$: the rows $y_i$ (meaning $x_i$ is true) and $z_i$ (meaning $x_i$ is false) each put a 1 there, and the target is 1. **So exactly one of the two is chosen** — that is your consistency gadget, and it costs one digit.
- Clause column $C_j$: every literal row that satisfies $C_j$ puts a 1 there. The target is 3. **So the chosen literals must cover the clause** — that is your choice gadget.

The target 3 is the one awkward part, because a clause might be satisfied by only one or two of its literals. The fix is two **slack rows** per clause, each contributing 1 to that column and nothing else, letting a clause top up from 1 or 2 to 3. Slack rows are the standard way to convert "at least one" into "exactly $k$", and they are exactly why this reduction is not parsimonious.

**The no-carry discipline.** All of this only works if the columns stay independent. Count the worst case: a clause column receives at most three literal rows plus two slack rows, so at most 5; a variable column receives at most 2. Both are below 10, so no column can carry into its neighbour, and base 10 is safe. **If you ever design an arithmetic reduction, this bound is the thing to check first**, because a carry silently couples two constraints that were supposed to be independent and the proof quietly becomes false.

**The four ways a reduction breaks.** Every broken reduction I have seen fails one of these, and they are worth having as a checklist:

1. **Backwards.** Reducing your problem *to* a known-hard one proves nothing about your problem. The known-hard problem goes on the left.
2. **Missing converse.** Only yes-maps-to-yes is proved. Without the other direction you could map everything to a fixed yes-instance.
3. **Exponential in disguise.** The map is described in a page of English and its output is exponentially large — numbers in unary, a graph with $2^n$ vertices, a padding argument that blows up.
4. **Leaky gadget.** The construction admits solutions that do not come from any solution of the source. Carries are the arithmetic version; in graph reductions it is a vertex set that satisfies the size bound without respecting the intended structure.

Failures 2 and 4 are the same failure seen from two sides, and both are found the same way: **try to build a solution of the target instance that does not decode.**

## The formal version

**Theorem ([3SAT reduces to SUBSET-SUM](../reference.md#subset-sum-reduction)).** $\text{3SAT} \le_p \text{SUBSET-SUM}$, hence SUBSET-SUM is NP-complete.

Given $\varphi$ with variables $x_1,\dots,x_n$ and clauses $C_1,\dots,C_m$, produce $2n + 2m$ numbers of $n + m$ decimal digits each:

| row | digit $x_i$ | digit $x_{i'}$ ($i' \ne i$) | digit $C_j$ |
|---|---|---|---|
| $y_i$ (set $x_i$ true) | 1 | 0 | 1 if $x_i \in C_j$, else 0 |
| $z_i$ (set $x_i$ false) | 1 | 0 | 1 if $\lnot x_i \in C_j$, else 0 |
| $g_j, h_j$ (slack) | 0 | 0 | 1 if this is column $j$, else 0 |

Target $T = \underbrace{1\cdots1}_{n}\underbrace{3\cdots3}_{m}$.

*($\Rightarrow$)* A satisfying assignment picks $y_i$ or $z_i$ per variable, making every variable digit 1 and every clause digit between 1 and 3; add slack rows to reach 3.

*($\Leftarrow$)* A subset summing to $T$ must, by the variable digits, contain exactly one of $y_i, z_i$ for each $i$ — read that as an assignment. Slack rows contribute at most 2 to a clause digit, so reaching 3 requires at least one literal row, meaning the assignment satisfies that clause.

*Cost.* $O((n+m)^2)$ digits written, polynomial. And no carries: the largest column sum is $3 + 2 = 5 < 10$. $\blacksquare$

**Definition ([strong and weak NP-hardness](../reference.md#strong-vs-weak-np-hardness)).** A number problem is **strongly** NP-hard if it remains NP-hard when all numbers in the input are bounded by a polynomial in the input length; otherwise its hardness is **weak**, and it typically admits a **pseudo-polynomial** algorithm — one polynomial in the input length *and the numeric values*, rather than their logarithms.

SUBSET-SUM is weakly NP-hard: the standard dynamic program runs in $O(nT)$ time, which is polynomial in $T$ but exponential in the $\log T$ bits it takes to write $T$ down. 3-PARTITION is strongly NP-hard, which is why it is the right source when reducing to a problem whose numbers must stay small.

## Picture

![A ten by five grid of digit cells. Rows are labelled y one, z one, y two, z two, y three, z three, then g one, h one, g two, h two. Columns are labelled x one, x two, x three in blue and C one, C two in coral. Cells holding a one are marked; the rest are blank. A final highlighted row below gives the target digits one, one, one, three, three.](assets/01-05-fig1.svg)

This is the reduction applied to $(x_1 \vee x_2 \vee \lnot x_3) \wedge (\lnot x_1 \vee \lnot x_2 \vee x_3)$, and it is worth reading column by column rather than row by row, because **the columns are the constraints.**

The three blue columns each hold exactly two 1s, in the $y_i$ and $z_i$ rows, against a target of 1. There is no way to satisfy that except by choosing exactly one — a variable cannot be both true and false, and cannot be neither. The gadget costs one digit and admits no leaks.

The two coral columns hold the literal rows that satisfy each clause, plus the two slack rows, against a target of 3. The maximum possible column sum here is 5, comfortably under 10, so the columns never interact. That number — 5 — is the entire correctness argument for using base 10, and it is the first thing to check in any reduction of this shape.

The figure also shows the non-parsimony directly. Exhaustive search over all $2^{10}$ subsets finds **12** that hit the target, while the formula has only **6** satisfying assignments. Each assignment picks up one or two extensions depending on how many slack rows it needs, and that factor is invisible to a decision reduction and fatal to a counting one.

## Worked examples

**Example 1 (mechanical): run the reduction and decode a solution.** Take $\varphi = (x_1 \vee x_2 \vee \lnot x_3) \wedge (\lnot x_1 \vee \lnot x_2 \vee x_3)$, the formula in the figure. The ten numbers are

$$y_1 = 10010,\quad z_1 = 10001,\quad y_2 = 01010,\quad z_2 = 01001,\quad y_3 = 00101,\quad z_3 = 00110,$$
$$g_1 = h_1 = 00010,\quad g_2 = h_2 = 00001, \qquad T = 11133.$$

One solution is $\{y_1, y_2, y_3, g_1, g_2, h_2\}$. Check it:

$$10010 + 1010 + 101 + 10 + 1 + 1 = 11133. \checkmark$$

Decode: $y_1, y_2, y_3$ chosen means $x_1 = x_2 = x_3 = \text{true}$. Verify against $\varphi$: clause 1 is satisfied by $x_1$; clause 2 is satisfied by $x_3$. ✓

And read off the slack usage, because it explains the count. Clause 1 has two true literals ($x_1$ and $x_2$), so it needs one slack row and could have used either $g_1$ or $h_1$ — two choices. Clause 2 has one true literal ($x_3$), so it needs both $g_2$ and $h_2$ — one choice. This assignment therefore corresponds to $2 \times 1 = 2$ subsets. Summing that product over all 6 satisfying assignments gives exactly the 12 found by exhaustive search.

**Example 2 (why you'd care): diagnose two broken reductions.** Both of these are plausible-looking modifications of the construction above, and both are wrong. The skill is producing the instance that proves it.

*Broken version A: drop the slack rows.* Keep the literal rows, keep the target digit 3 for each clause.

The counterexample is any satisfying assignment that does not make all three literals of some clause true. Take $\varphi$ above with $x_1 = x_2 = x_3 = \text{false}$: it satisfies $\varphi$ (clause 1 by $\lnot x_3$, clause 2 by $\lnot x_1$), but clause 1 gets only 1 and clause 2 only 2. Exhaustive search confirms the diagnosis: **with slack rows there are 12 solutions; without them there are 0**, even though $\varphi$ is satisfiable. This is failure mode 4, a leaky gadget in reverse — the gadget is too tight, and a yes-instance maps to a no-instance.

*Broken version B: one row per variable instead of two.* Use only $y_i$, meaning "$x_i$ is true", with target digit 1 on variable columns and the convention that an unchosen row means false.

Now negative literals contribute nothing to any clause column, because there is no row representing $\lnot x_i$. Witness: $\varphi' = (\lnot x_1 \vee \lnot x_2 \vee \lnot x_3)$ has **7** satisfying assignments, but in the reduced instance every clause column receives 0 from every row, so the target digit 3 is unreachable and the instance is a no. Yes maps to no again, from a different cause — this time an encoding that cannot express half the literals.

**The general move.** In both cases the diagnosis came from asking *which yes-instances does the construction fail to represent?*, and then building the smallest one. That is faster and more reliable than re-reading the argument prose looking for the flawed sentence.

## Watch out

- **You might think** base 10 is a convention — **but actually** it is a theorem about your gadget: the base must exceed the largest possible column sum, which here is 5. Add a third slack row and the same construction in base 10 is still fine; add six and it silently breaks, and the resulting "proof" reads exactly the same.
- **You might think** SUBSET-SUM being NP-complete means no efficient algorithm exists — **but actually** the $O(nT)$ dynamic program is fast whenever the numbers are small, and the numbers produced by this very reduction are about $10^{n+m}$, which is why it does not help. **NP-hardness of a number problem is a statement about instances with large numbers**, unless the problem is strongly NP-hard.
- **You might think** proving both directions is a formality once the construction is right — **but actually** the converse is where the leaks live, because it is the direction that asks "could the target instance be solved in a way I did not intend?". Both broken versions above pass a casual forward check.
- **You might think** a reduction that preserves yes and no answers is good enough for any purpose — **but actually** this one multiplies the number of solutions by a factor that varies from instance to instance. That is invisible here and fatal in [Module 3](03-01-sharp-p-counting-is-harder-than-deciding.md), where the count is the answer.

## One-liner

> In an arithmetic reduction the digit columns are the constraints, the base is the proof that they do not interact, and the fastest way to kill a bad reduction is to build the yes-instance it cannot represent.

## Problems

**P1 (🟢)** Apply the SUBSET-SUM reduction to $\varphi = (x_1 \vee \lnot x_2) \wedge (\lnot x_1 \vee x_2)$, treating each clause as having two literals (so the clause target digit is 2 and each clause gets **one** slack row). (a) Give the number of rows and the number of digits per number. (b) Write the row for $z_2$ (meaning $x_2$ is false) as a digit string. (c) Give the target, and state the largest possible sum in any clause column.

**P2 (🟡)** A colleague proposes this reduction to show HALF-CLIQUE $= \{\langle G\rangle : G$ on $2k$ vertices has a clique of size $k\}$ is NP-hard:

> Given an instance $\langle G, k \rangle$ of CLIQUE with $G$ on $n$ vertices, output the graph $G$ itself.

(a) Name which of the four failure modes this hits. (b) Give a concrete instance $\langle G, k\rangle$ — at most 5 vertices — on which the reduction gives the wrong answer, and state both answers. (c) In one sentence, what would a correct reduction have to add?

**P3 (🔴, optional)** SUBSET-SUM has a dynamic program running in $O(nT)$ time on $n$ numbers with target $T$. (a) Explain in two sentences why this does not show SUBSET-SUM $\in \mathsf{P}$, referring to the input length. (b) For the instance produced by this lesson's reduction from a formula with $n = 50$ variables and $m = 100$ clauses, give $T$ as a power of 10 and say whether the dynamic program is usable. (c) State what would have to be true of a reduction for it to prove SUBSET-SUM **strongly** NP-hard, and say why this reduction does not.

<details>
<summary>Solutions</summary>

**P1**

(a) Two variables and two clauses, so $2n = 4$ literal rows plus $m = 2$ slack rows (one per clause, since a two-literal clause needs to top up from 1 to 2): **6 rows**. Each number has $n + m = 2 + 2 = \mathbf{4}$ digits.

(b) $z_2$ means $x_2$ is false, so it puts a 1 in column $x_2$, and a 1 in any clause column containing the literal $\lnot x_2$. Clause 1 is $(x_1 \vee \lnot x_2)$, which contains $\lnot x_2$. Clause 2 is $(\lnot x_1 \vee x_2)$, which does not. Columns in order $x_1, x_2, C_1, C_2$:

$$z_2 = \mathbf{0110}.$$

(c) Target $= \mathbf{1122}$. The largest possible sum in a clause column is 2 literal rows plus 1 slack row $= \mathbf{3}$, well under 10, so base 10 carries nothing.

**P2**

(a) **Failure mode 2 and 4 together, but the cleanest name is that it is not a reduction at all**: the map ignores $k$, so it cannot preserve the answer in both directions. Formally it fails the converse, since $f(\langle G,k\rangle) \in$ HALF-CLIQUE says something about a clique of size $n/2$, not of size $k$.

(b) Take $G = C_5$, the 5-cycle on vertices $1,\dots,5$, with $k = 2$.

- CLIQUE answer: **yes** — any edge, say $\{1,2\}$, is a clique of size 2.
- The reduction outputs $C_5$ itself. HALF-CLIQUE asks about a graph on $2k'$ vertices with a clique of size $k'$; $C_5$ has 5 vertices, an odd number, so it is not even a legal instance. Repair the example by taking $G = C_6$ with $k = 2$: CLIQUE says **yes** (any edge), while HALF-CLIQUE on 6 vertices asks for a clique of size 3, and $C_6$ is triangle-free, so it says **no**.

So $\langle C_6, 2\rangle$ is a yes-instance of CLIQUE mapping to a no-instance of HALF-CLIQUE.

(c) A correct reduction must **pad** $G$ so that the required clique size and the vertex count line up: add vertices to force $n' = 2k$ while controlling the clique number — the standard construction adds either a set of isolated vertices or a disjoint clique, whichever the arithmetic demands, and then proves both directions.

**P3**

(a) The input length is $O(n \log T)$, because each number is written in binary or decimal, not in unary. A running time of $O(nT)$ is therefore exponential in the input length: doubling the number of bits in $T$ squares $T$ and squares the running time. A polynomial-time algorithm would have to run in time polynomial in $\log T$.

(b) The numbers have $n + m = 150$ digits, so $T \approx \mathbf{10^{150}}$. The dynamic program would need a table with about $50 \times 10^{150}$ entries, which exceeds the number of atoms in the observable universe by roughly 70 orders of magnitude. **Unusable, and that is exactly why the reduction is valid**: it produces the regime where the pseudo-polynomial algorithm has no purchase.

(c) To prove strong NP-hardness the reduction would have to produce instances in which **every number is bounded by a polynomial in the instance's length**. This one does the opposite: it produces numbers of $n+m$ digits, so their magnitude is exponential in the instance size. The point is not a defect in the reduction — SUBSET-SUM genuinely is only weakly NP-hard, since the $O(nT)$ algorithm settles every polynomially-bounded instance — and that is why 3-PARTITION, whose hardness survives the restriction, is the standard source when the target problem's numbers must stay small.

</details>

## Flashback

**From Lesson 1.4 (Cook–Levin):** A machine's transition function includes $\delta(q_1, 0) = (q_2, 1, R)$: in state $q_1$ scanning a 0, write 1, move right, enter $q_2$. Following the convention that the state symbol is written immediately to the left of the scanned cell, decide for each proposed $2\times3$ window whether $\varphi_{\text{move}}$ should accept it, and give the reason in a clause.

| | top row | bottom row |
|---|---|---|
| (a) | $a\ \ q_1\ \ 0$ | $a\ \ 1\ \ q_2$ |
| (b) | $a\ \ q_1\ \ 0$ | $a\ \ 0\ \ q_2$ |
| (c) | $a\ \ b\ \ c$ | $a\ \ b\ \ c$ |
| (d) | $a\ \ q_1\ \ 0$ | $q_2\ \ 1\ \ 0$ |

<details>
<summary>Solution</summary>

(a) **Legal.** The head was on the 0, wrote 1 in its place, and moved right — so the state symbol now sits to the left of the next cell, which is the third position. This is exactly $\delta(q_1,0) = (q_2,1,R)$ executed.

(b) **Illegal.** The transition writes 1, and this window shows a 0 left behind. Everything else about it is right, which is the point: a single wrong symbol is caught locally, with no reference to the rest of the tableau.

(c) **Legal.** No state symbol appears anywhere in the window, so the head is elsewhere and every cell must copy down unchanged. It does.

(d) **Illegal.** The symbol written is correct but the head moved **left**, putting $q_2$ at the start of the bottom row. The transition says $R$. Note this window would be legal for a machine whose transition ended in $L$ — legality is relative to $\delta$, which is why the set of legal windows is computed once from the machine and is then a constant.

The general lesson is the one the theorem turns on: each of these judgements used only the six cells shown. That is why $\varphi_{\text{move}}$ is a conjunction of constant-size formulas and why the whole encoding stays polynomial.

</details>

## Connections

- **Backward:** 3SAT, the source of this reduction, is NP-complete because of [1.4](01-04-cook-levin-computation-is-satisfiability.md), and the four obligations being discharged are [`algorithms` 4.2](../../algorithms/lessons/04-02-the-np-complete-zoo.md)'s. The graph chain that course builds and this one does not repeat gives you Independent Set, Vertex Cover and Clique for free as alternative sources.
- **Forward:** [3.2](03-02-sharp-p-completeness-and-parsimonious-reductions.md) needs reductions that preserve the *number* of solutions, and the slack rows here are precisely what breaks that. [6.1](06-01-eth-seth-and-the-exponential-time-view.md) asks a finer question about the same reductions — not whether they are polynomial, but whether they blow the parameter up, since a reduction that squares $n$ destroys any $2^{o(n)}$ conclusion.
- **Sideways:** the digit-column technique is the same idea as encoding several constraints in one integer in [`operations-research` 3.1](../../operations-research/lessons/03-01-modeling-with-integer-variables.md)'s big-$M$ formulations, and the no-carry condition is the discrete analogue of choosing a modulus large enough to avoid wraparound — which is exactly the sizing argument behind the Chinese remainder reconstructions in [`number-theory` 2.4](../../number-theory/lessons/02-04-chinese-remainder-theorem.md).
