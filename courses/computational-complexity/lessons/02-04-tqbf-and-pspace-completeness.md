# Complexity Theory · Lesson 2.4: TQBF & PSPACE-completeness

> ⏱ ~15 min · Module 2: Space complexity & the polynomial hierarchy · Builds on: [2.2 (the polynomial hierarchy)](02-02-the-polynomial-hierarchy.md), [2.3 (space and Savitch)](02-03-space-as-a-resource-and-savitch.md) · Unlocks: [2.6 (the class map)](02-06-immerman-szelepcsenyi-and-the-class-map.md), [4.4 (IP = PSPACE)](04-04-arithmetization-sumcheck-and-ip-equals-pspace.md)

## Why this matters

Every complexity class earns its keep by having a complete problem you recognize. NP has SAT, and through it the thousands of optimization problems that made [`algorithms`](../../algorithms/syllabus.md) Module 4 worth writing. PSPACE has TQBF — and through it, **games**.

That is the sentence to hang onto. Deciding whether the first player can force a win in a generalized board game is, in essentially every case anyone has checked, PSPACE-complete. Generalized geography, Hex, Othello, and $n \times n$ versions of many others. It explains something you may have noticed empirically: puzzle solvers and game engines have different characters. A Sudoku solver searches for a certificate and, when it finds one, is done. A chess engine cannot ever be "done" with a position, because every move it considers is answered by a move it does not control, and the answer to *that* is answered again.

The formal difference is exactly one quantifier alternation per move. A puzzle is $\exists$. A game is $\exists\forall\exists\forall\cdots$, with the alternation count growing with the length of play — which is precisely what takes you past [Lesson 2.2](02-02-the-polynomial-hierarchy.md)'s hierarchy, where the number of alternations is a constant, and lands you at PSPACE.

## The idea

A **quantified Boolean formula** is a Boolean formula with every variable bound by $\exists$ or $\forall$:

$$\exists x_1 \forall x_2 \exists x_3 \; \big[(x_1 \vee x_2) \wedge (\lnot x_2 \vee x_3)\big].$$

It has no free variables, so it is simply true or false. TQBF is the language of the true ones.

**Read it as a game.** Two players fill in the variables in order. At an $\exists$ variable, the *prover* chooses; at a $\forall$ variable, the *adversary* chooses. After all variables are set, the prover wins if the formula is true. The QBF is true exactly when the prover has a winning strategy — so TQBF is literally the question "who wins this game?", and a QBF's quantifier prefix is a script for whose turn it is.

**Why it needs only polynomial space.** Evaluate recursively. To evaluate $\exists x_i\, \psi$, evaluate $\psi$ with $x_i$ set to true; if that is true, return true; otherwise evaluate $\psi$ with $x_i$ false and return that. For $\forall$, the same with "and". The two sub-evaluations happen **one after the other**, reusing the same memory, so the only thing that accumulates is the recursion stack: one bit per variable, depth $n$.

Space $O(n)$. Time $2^n$. That trade is the whole reason PSPACE is larger than anyone can prove NP to be: you can afford to explore an exponential tree as long as you never have to remember more than one path through it.

**Why every PSPACE problem reduces to it.** Take a machine using polynomial space and look at its configuration graph from [2.3](02-03-space-as-a-resource-and-savitch.md). Acceptance is reachability from the start configuration to the accepting one. Write $\phi_i(a,b)$ for "$b$ is reachable from $a$ in at most $2^i$ steps", and build it by Savitch's midpoint recursion:

$$\phi_i(a,b) \;=\; \exists m\; \forall (c,d) \in \{(a,m),(m,b)\}\; \phi_{i-1}(c,d).$$

The $\forall$ is the trick, and it is worth pausing on. The obvious recursion would write $\phi_{i-1}(a,m) \wedge \phi_{i-1}(m,b)$ — two copies, so the formula doubles at every level and ends up exponentially large. Quantifying over *which* of the two pairs to check keeps a single copy, so the formula grows by an additive constant per level instead. **Depth $O(\text{poly})$ and constant growth per level gives a polynomial formula**, and that is the entire content of the hardness proof.

## The formal version

**Definition ([TQBF](../reference.md#tqbf)).** A **quantified Boolean formula** is $Q_1x_1 Q_2x_2\cdots Q_nx_n\,\varphi(x_1,\dots,x_n)$ with each $Q_i \in \{\exists,\forall\}$ and $\varphi$ quantifier-free. $\text{TQBF} = \{\langle\Phi\rangle : \Phi \text{ is a true quantified Boolean formula}\}$.

**Definition ([PSPACE-completeness](../reference.md#pspace-completeness)).** $B$ is PSPACE-complete if $B \in \mathsf{PSPACE}$ and $A \le_p B$ for every $A \in \mathsf{PSPACE}$. Note the reduction is **polynomial-time**, not polynomial-space: a polynomial-space reduction would be useless, since it could solve any PSPACE problem itself.

**Theorem ([TQBF is PSPACE-complete](../reference.md#tqbf-is-pspace-complete)).**

*Membership.* The recursive evaluator above uses one bit per variable for the current assignment plus $O(\log n)$ bookkeeping per frame, over a stack of depth $n$: $O(n \log n)$ space on a formula of size $n$. So $\text{TQBF} \in \mathsf{PSPACE}$.

*Hardness.* Let $A \in \mathsf{PSPACE}$ be decided by $M$ in space $n^k$, with configuration graph of size $2^{dn^k}$ for a constant $d$. Define $\phi_i(a,b)$ meaning "$M$ goes from configuration $a$ to $b$ in at most $2^i$ steps":

- $\phi_0(a,b)$: $a = b$ or $a \to b$ is a legal move — a constant-size formula on the configuration bits, from the transition function, exactly as in [Cook–Levin](01-04-cook-levin-computation-is-satisfiability.md).
- $\phi_i(a,b) \;=\; \exists m\,\forall c\,\forall d\,\Big[\big((c,d) = (a,m) \vee (c,d) = (m,b)\big) \Rightarrow \phi_{i-1}(c,d)\Big].$

Output $\phi_{dn^k}(\text{start},\text{accept})$.

*Size.* Each level adds a fixed number of quantifiers over configuration-sized tuples, $O(n^k)$ variables, and a constant-size propositional part, while containing **one** copy of $\phi_{i-1}$. So $|\phi_i| = |\phi_{i-1}| + O(n^k)$, and over $dn^k$ levels the total is $O(n^{2k})$: polynomial, computable in polynomial time. $\blacksquare$

**Corollary ([games are PSPACE](../reference.md#games-and-pspace)).** **Generalized geography** — given a directed graph and a start vertex, two players alternately move along edges to unvisited vertices, and a player unable to move loses — is PSPACE-complete. The reduction from TQBF builds one gadget per quantified variable: a diamond whose two branches are the two truth values, arranged so that the player who chooses corresponds to the quantifier.

**Where this sits.** $\mathsf{PH} \subseteq \mathsf{PSPACE}$, because a $\Sigma_k^p$ formula is a QBF with $k$ blocks. TQBF is not in PH unless PH collapses — the number of alternations in the hardness construction grows with $n$, which no fixed level of the hierarchy allows. **A constant number of alternations is PH; a growing number is PSPACE.**

## Picture

![A binary game tree three levels deep above a row of eight leaves. The three internal levels are labelled FORALL x one, EXISTS x two and FORALL x three, with the two universal levels drawn in coral and the existential level in blue. Each node carries a T or F. The eight leaf boxes hold, from left to right, F F F F T T F T, and the values propagate upward to a root reading F.](assets/02-04-fig1.svg)

The formula is $\forall x_1 \exists x_2 \forall x_3\,\big[(x_1\vee x_2 \vee x_3) \wedge (\lnot x_2 \vee x_3) \wedge (x_1 \vee \lnot x_3)\big]$, and the leaves are its truth value at each of the eight assignments.

Values propagate upward by whose turn it is. A coral $\forall$ node takes the **and** of its children, because the adversary will pick whichever branch hurts you. A blue $\exists$ node takes the **or**, because you pick. The root is F, so the formula is false and the adversary has a winning first move — namely $x_1 = 0$, the branch under which no choice of $x_2$ saves you.

Now read the figure as a resource argument, which is the reason it is here. The tree has $2^n$ leaves, so evaluating it takes exponential **time** no matter what. But at any moment the evaluator holds only the path from the root to where it currently is: $n$ bits. It descends, returns one bit, and overwrites. **The tree is exponentially wide and only linearly deep, and space is charged for depth.** That is why PSPACE contains problems nobody can place in NP, and why the same picture drawn for a *puzzle* — a single $\exists$ layer over $2^n$ leaves — collapses to a certificate you could just be handed.

## Worked examples

**Example 1 (mechanical): evaluate two QBFs over the same formula.** Let $\varphi = (x_1 \vee x_2) \wedge (\lnot x_2 \vee x_3) \wedge (\lnot x_1 \vee \lnot x_3)$.

*First, $\exists x_1 \forall x_2 \exists x_3\,\varphi$.* Try $x_1 = 1$. The adversary picks $x_2$; take $x_2 = 1$. Now the third clause with $x_1 = 1$ forces $x_3 = 0$, but the second clause with $x_2 = 1$ forces $x_3 = 1$. No $x_3$ works, so $x_1 = 1$ fails. Try $x_1 = 0$. The adversary picks $x_2 = 0$; then the first clause $(x_1 \vee x_2)$ is already false whatever $x_3$ is. So $x_1 = 0$ fails too. **False.**

*Now $\forall x_1 \exists x_2 \forall x_3\,\varphi$.* The adversary moves first and can play $x_1 = 0$, which as just noted lets them later reach a false leaf; in fact with $x_1 = 0$ and any $x_2$, the adversary's final choice of $x_3$ defeats you. **False** as well.

Both false, but note this is not automatic: swapping quantifiers can and usually does change the answer. On $\varphi' = (x_1 \vee x_2 \vee x_3) \wedge (\lnot x_1 \vee \lnot x_2 \vee \lnot x_3)$, the prefix $\forall x_1\forall x_2 \exists x_3$ is **true** — whatever the adversary does to $x_1, x_2$, you can pick $x_3$ to break the tie. **Quantifier order is the game's turn order, and turn order decides games.**

**Example 2 (why you'd care): who wins this geography game?** Directed graph on $\{0,\dots,5\}$ with edges $0\to1$, $0\to2$, $1\to3$, $2\to4$, $4\to5$, starting at vertex 0. Players alternate, each moving along an edge to a vertex not yet visited; a player with no legal move loses.

Player 1 has two opening moves, and only one of them wins.

| opening | continuation | who runs out |
|---|---|---|
| $0 \to 1$ | Player 2 plays $1 \to 3$; vertex 3 has no outgoing edges | **Player 1** loses |
| $0 \to 2$ | Player 2 must play $2\to4$; Player 1 plays $4\to5$; vertex 5 has no outgoing edges | **Player 2** loses |

So Player 1 wins, and $0\to2$ is the unique winning move.

The reason this is the right example for PSPACE: notice that **evaluating the position required examining the whole game tree**, and that no short certificate of "Player 1 wins" exists. Exhibiting the move $0\to2$ proves nothing by itself — you have to also show every Player 2 reply loses, and every reply to those, and so on. **A winning strategy is a tree, not a path, and a tree of depth $n$ has exponentially many nodes.** That is the structural reason games sit above NP, and it is why an $n\times n$ generalization of a board game is PSPACE-complete rather than NP-complete.

## Watch out

- **You might think** TQBF is in PH because it is built from quantifiers — **but actually** PH allows only a **constant** number of alternations, while TQBF's prefix grows with the input. TQBF being in PH would collapse the hierarchy, since a PH-complete problem forces a collapse ([2.2](02-02-the-polynomial-hierarchy.md)).
- **You might think** the hardness proof can write $\phi_{i-1}(a,m)\wedge\phi_{i-1}(m,b)$ — **but actually** that doubles the formula at every level and gives an exponentially long output, breaking the fourth obligation of a reduction. The $\forall$ over which pair to check is not stylistic; it is the only reason the reduction is polynomial.
- **You might think** a game being PSPACE-complete means it is hard to play well — **but actually** it means deciding *perfect play on arbitrary positions of the generalized game* is hard. Real chess on an $8\times8$ board is a finite object with a fixed answer; complexity only becomes meaningful once the board size is a parameter.
- **You might think** all board games are PSPACE-complete — **but actually** games where play can last exponentially long, such as generalized chess and Go with certain rule sets, are **EXPTIME**-complete, and so are provably not in P by [Lesson 1.3](01-03-the-hierarchy-theorems.md). The PSPACE-complete ones are those whose play length is polynomially bounded, which is exactly the condition that lets the recursion stack stay polynomial.

## One-liner

> A puzzle asks whether a path exists; a game asks whether a strategy tree exists — and the difference between the two is the difference between NP and PSPACE.

## Problems

**P1 (🟢)** Let $\varphi = (x_1 \vee x_2 \vee x_3) \wedge (\lnot x_1 \vee \lnot x_2 \vee \lnot x_3)$. Decide the truth of each quantified formula, and for each give either the prover's winning first choice or the adversary's.

(a) $\forall x_1 \forall x_2 \exists x_3\, \varphi$.
(b) $\exists x_1 \exists x_2 \forall x_3\, \varphi$.
(c) $\forall x_1 \exists x_2 \forall x_3\, \varphi$.

**P2 (🟡)** In the generalized geography graph $0\to1$, $0\to2$, $1\to3$, $2\to4$, $4\to5$, add the single edge $3\to 0$. (a) Does Player 1 still win, and by which opening? (b) Explain in one sentence why the no-revisiting rule is what makes the game finite. (c) Give the number of vertices a play can visit at most, and say what that bound implies about which complexity class the game sits in.

**P3 (🔴, optional)** The hardness reduction produces a formula of size $O(n^{2k})$ from a machine using $n^k$ space. (a) Give the size the naive recursion $\phi_{i-1}(a,m) \wedge \phi_{i-1}(m,b)$ would produce, as a function of $n$ and $k$, and say which reduction obligation it violates. (b) The $\forall$ trick replaces two copies by one. State the recurrence for $|\phi_i|$ under each version and solve both. (c) Explain in one sentence what this has in common with Savitch's space accounting.

<details>
<summary>Solutions</summary>

**P1** The formula $\varphi$ says "not all three equal" — at least one of the three is true and at least one is false. All three parts come out **true**; the interest is in who has the strategy and what it is.

(a) **True.** The adversary fixes $x_1$ and $x_2$; the prover answers with $x_3$. The rule "set $x_3 \ne x_1$" always works: it guarantees one true and one false among $x_1, x_3$, satisfying both clauses whatever $x_2$ is.

(b) **True.** The prover commits to $x_1, x_2$ and must then survive *both* values of $x_3$. Checking the four openings:

| $x_1, x_2$ | does $\varphi$ hold for both values of $x_3$? |
|---|---|
| $0, 0$ | no — $x_3 = 0$ falsifies the first clause |
| $0, 1$ | **yes** |
| $1, 0$ | **yes** |
| $1, 1$ | no — $x_3 = 1$ falsifies the second clause |

So the prover's winning openings are exactly $\mathbf{x_1 \ne x_2}$: play $0,1$ or $1,0$, and the tie is already broken before $x_3$ is chosen.

(c) **True.** The adversary opens, the prover answers, the adversary closes. Whatever $x_1$ the adversary plays, the prover replies $x_2 \ne x_1$, and then both clauses hold regardless of $x_3$ — the same "break the tie early" idea as (b), now available because the prover moves second rather than first.

Comparing (b) and (c) is the point: the prover wins both, but in (b) the winning move had to anticipate the adversary, while in (c) it could react. **Moving later is never worse, and the quantifier prefix is exactly the record of who moves when.**

**P2**

(a) **Yes, by the same opening $0 \to 2$.** The new edge $3 \to 0$ only lengthens the line through vertex 1, and vertex 0 has already been visited so $3\to0$ is illegal when reached: after $0\to1$, Player 2 plays $1\to3$, and Player 1 at vertex 3 has only the edge to 0, which is visited — so Player 1 still loses on that branch. The branch $0\to2\to4\to5$ is untouched and still leaves Player 2 stuck.

(b) Because each move consumes a vertex permanently, and there are finitely many, so play cannot continue past $|V|$ moves — without the rule a cycle would let the game run forever and "a player unable to move" would never occur.

(c) At most $|V|$ vertices, so play lasts at most $|V| - 1$ moves — **polynomially bounded**. That is exactly the condition under which the recursive strategy evaluator's stack stays polynomial, so the game is in **PSPACE** (and in fact PSPACE-complete). Games whose play can last exponentially long escape to EXPTIME.

**P3**

(a) The naive recursion doubles the formula at each of the $dn^k$ levels, giving size $2^{\Theta(n^k)}$ — exponential. It violates the obligation that the reduction be computable in **polynomial time**, and equivalently that its output be of polynomial size; a machine cannot even write the formula down.

(b) Naive: $|\phi_i| = 2|\phi_{i-1}| + O(n^k)$, which solves to $|\phi_i| = \Theta(2^i n^k)$, so at $i = dn^k$ it is $2^{\Theta(n^k)}$.

With the $\forall$ trick: $|\phi_i| = |\phi_{i-1}| + O(n^k)$, which solves to $|\phi_i| = O(i\, n^k)$, so at $i = dn^k$ it is $O(n^{2k})$ — polynomial.

(c) Both are the same move: **replace two things that would be held simultaneously with one thing visited twice.** Savitch runs the two halves of the path sequentially and reuses the cells; the reduction quantifies over which half to check and reuses the sub-formula. In each case the resource being economized — space, or formula length — is one that can be reused, and the cost is paid in a resource nobody is counting.

</details>

## Flashback

**From Lesson 2.2 (the polynomial hierarchy):** Place each problem in the tightest level among $\mathsf{P}, \Sigma_1^p, \Pi_1^p, \Sigma_2^p, \Pi_2^p$ that its natural definition yields, and give the quantifier form.

(a) $\{\langle G, k\rangle : G$ has a dominating set of size $\le k\}$.
(b) $\{\langle\varphi\rangle : \varphi$ is satisfiable and every satisfying assignment sets $x_1$ true$\}$.
(c) $\{\langle G\rangle : $ the diameter of $G$ is at most 3$\}$.

<details>
<summary>Solution</summary>

(a) $\exists S : |S| \le k$ and every vertex is in $S$ or adjacent to it. One existential block; the inner "every vertex" ranges over the graph's $n$ vertices, which is a polynomial-time loop and not an alternation. **$\Sigma_1^p = \mathsf{NP}$.**

(b) $\exists a\,[\varphi(a)] \;\wedge\; \forall b\,[\varphi(b) \Rightarrow b(x_1) = 1]$. An NP condition conjoined with a coNP condition, which is the $\exists\forall$ pattern: **$\Sigma_2^p$.** This is the shape of every "exists, and is the only kind that exists" statement, and it is the same shape as EXACT-CLIQUE.

(c) $\forall u \forall v\, \exists$ a path of length $\le 3$ from $u$ to $v$. All three quantifiers range over polynomially sized sets — pairs of vertices, and paths of length at most 3, of which there are $O(n^2)$ — so none of them is an alternation over certificate strings. The whole thing is a polynomial-time computation. **$\mathsf{P}$.**

The point of (c) is the one [2.2](02-02-the-polynomial-hierarchy.md) flags as the commonest misplacement: **a quantifier over a polynomial-size domain is a loop, not a level.** Only quantifiers over exponentially many candidate certificates push you up the hierarchy.

</details>

## Connections

- **Backward:** the hardness reduction *is* [2.3](02-03-space-as-a-resource-and-savitch.md)'s Savitch recursion transcribed into logic, with the $\forall$ over the two halves playing the role of running them sequentially. The propositional base case $\phi_0$ is [1.4](01-04-cook-levin-computation-is-satisfiability.md)'s window formula.
- **Forward:** [2.6](02-06-immerman-szelepcsenyi-and-the-class-map.md) places PSPACE in the full map and records what is and is not known about its neighbours. [4.4](04-04-arithmetization-sumcheck-and-ip-equals-pspace.md) revisits TQBF with an astonishing result: despite having no short certificate, it has a short *interactive* proof, which gives $\mathsf{IP} = \mathsf{PSPACE}$.
- **Sideways:** the and/or propagation up the game tree is exactly minimax, so alpha-beta pruning is an optimization of this lesson's evaluator; and the same alternating structure drives the adversarial arguments in [`game-theory-refresher` 2.1](../../game-theory-refresher/lessons/02-01-extensive-form-backward-induction.md), where backward induction on a finite game tree is the identical recursion with payoffs instead of truth values.
