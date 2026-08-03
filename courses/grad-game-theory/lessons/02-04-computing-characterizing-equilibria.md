# Grad Game Theory · Lesson 2.4: Computing and characterizing equilibria

> ⏱ ~15 min · Module 2: Nash equilibrium — existence and structure · Builds on: [2.3 Existence of Nash equilibrium](02-03-existence-of-nash-equilibrium.md) · Unlocks: [2.5 Correlated equilibrium](02-05-correlated-equilibrium.md)

## Why this matters

Lesson 2.3 promised, via Kakutani, that a Nash equilibrium *exists* — but the proof is a fixed-point argument, nonconstructive to the bone. It swears the equilibrium is somewhere in the simplex and hands you no address. This lesson turns "exists" into "here it is, all of them." The key realization: an equilibrium is pinned down entirely by its **support** — the set of actions each player randomizes over — and once you fix the supports, finding the equilibrium is just solving a linear system. That reduces the whole search to a finite (if large) checklist. This is how you actually solve Cournot duopolies, auctions, and the $3\times 3$ games that show up on every problem set — and it exposes a deep fact: generic games have an *odd* number of equilibria, which doubles as a free error-check on your work.

## The idea

Recall the indifference principle from [2.2](02-02-nash-equilibrium-mixed-strategies.md): if a player mixes over several actions in equilibrium, every action she uses must earn her the *same* expected payoff — otherwise she'd shift weight toward the better one. So a mixed equilibrium is a bundle of indifference equations.

Here's the leverage. Suppose you *knew*, magically, which actions each player plays with positive probability — call these the two **supports** $S_1, S_2$. Then the equilibrium is forced:

- Each player is indifferent across her own support. That's a system of *linear* equations in the opponent's probabilities (a payoff is linear in the mix). Solve it.
- The solution had better be an honest probability distribution: weights $\ge 0$, summing to $1$.
- And no action you *left out* of the support should secretly pay more than the ones you kept.

You don't know the supports, so you try them all: enumerate every candidate pair $(S_1, S_2)$, solve, and keep the ones that pass all three tests. That's **support enumeration** — it makes 2.2's guess-and-check systematic and exhaustive. The catch is the number of supports is exponential, so this is a brute-force tool, not an efficient one; the clever pivoting method (Lemke–Howson) walks a smarter path, which we'll sketch.

## The formal version

Fix a finite two-player game. Player $i$ has action set $A_i$ and payoff $u_i$; a mixed strategy $\sigma_i$ is a probability vector over $A_i$, and its **support** is $\mathrm{supp}(\sigma_i) = \{a \in A_i : \sigma_i(a) > 0\}$.

**Characterization (indifference + outside condition).** A profile $(\sigma_1, \sigma_2)$ with supports $(S_1, S_2)$ is a Nash equilibrium **iff** for each player $i$, letting $j$ be the opponent:

$$u_i(a, \sigma_j) = u_i(a', \sigma_j) \ \ \text{for all } a, a' \in S_i \qquad\text{(indifference)}$$
$$u_i(a, \sigma_j) \ \ge\ \ u_i(b, \sigma_j) \ \ \text{for all } a \in S_i,\ b \notin S_i \qquad\text{(outside condition)}$$

*In words:* every action you actually play ties for first place, and no action you benched would have beaten them. The first line makes you willing to randomize; the second makes randomizing optimal against the whole action set.

**Support-enumeration algorithm.** For each candidate pair of supports $(S_1, S_2)$ with $S_1 \subseteq A_1$, $S_2 \subseteq A_2$:

1. **Solve** the indifference equations for $\sigma_1$ (over $S_1$) and $\sigma_2$ (over $S_2$). Player $i$'s *own* probabilities are chosen to make the *opponent* indifferent — the mix comes from the other side of the table (2.2's twist).
2. **Feasibility:** check every weight is $\ge 0$ and each $\sigma_i$ sums to $1$.
3. **Outside condition:** check no benched action $b \notin S_i$ strictly beats the support payoff.

Every profile surviving all three is a Nash equilibrium; every equilibrium is found this way (its own support is one of the candidates). *In words:* it's an exhaustive sweep — slow, but it misses nothing.

**Oddness (Wilson's theorem).** For a *generic* finite game — one with no accidental payoff ties — the number of Nash equilibria is **finite and odd**.

*In words:* count your equilibria; an even total means you dropped one or double-counted. Oddness is a completeness check, not a computational tool. (Degenerate games with exact ties can have a whole continuum, escaping the count — watch for those.)

**Lemke–Howson (the idea, not the machinery).** Each player's mixed strategies live in a polytope (the simplex, cut by best-response inequalities). Label each vertex by the actions that are either *unplayed* or *best responses* there; an equilibrium is a **completely labeled** vertex pair (every action gets a label from one side or the other). Lemke–Howson starts at an "almost complete" vertex and **pivots** — exactly like the simplex method for linear programs — following a path of almost-completely-labeled edges until it lands on a completely labeled pair: an equilibrium. Because the path has two endpoints and one is artificial, the *other* endpoints pair up, which **constructively re-proves oddness**. Take it on faith here; the point is that a directed pivoting walk beats blind enumeration, and it's the same polytope-pivoting geometry as in [linalg-refresher](../../linalg-refresher/syllabus.md).

## Picture

![Left: a 3×2 game with two pure-NE cells circled and row B greyed as never-a-best-response. Right: the support-enumeration search listing candidate support pairs, three surviving (two pure + one mixed) and the {T,B} candidate failing the outside condition, tallying to 3 — odd.](assets/02-04-fig1.svg)

## Worked examples

**Example 1 (find *all* equilibria by support enumeration — Boss Problem 2, first half).** Player 1 chooses a row $T, M, B$; player 2 a column $L, R$:

$$
\begin{array}{c|cc}
 & L & R\\\hline
T & 3,\,2 & 0,\,0\\
M & 0,\,0 & 2,\,3\\
B & 1,\,1 & 1,\,1
\end{array}
$$

Write $q = \Pr(L)$ for player 2 and $(p_T, p_M, p_B)$ for player 1. Player 1's payoffs to each row, as a function of $q$: $u_1(T) = 3q$, $u_1(M) = 2(1-q)$, $u_1(B) = 1$.

*Pure supports first.* Check each cell for a profitable deviation.
- $(T,L)$: payoffs $3,2$. P1 to $M$: $0$; to $B$: $1$ — both worse. P2 to $R$: $0 < 2$. **NE.** ✓
- $(M,R)$: payoffs $2,3$. Symmetric check — **NE.** ✓
- All others ($(T,R),(M,L),(B,L),(B,R)$) let someone jump to a strictly better cell. Not equilibria.

*Row B is never a best response.* $u_1(B)=1$ beats both $T$ and $M$ only if $3q \le 1$ and $2(1-q) \le 1$, i.e. $q \le \tfrac13$ **and** $q \ge \tfrac12$ — impossible. So no equilibrium support contains $B$ (equivalently, $B$ is strictly dominated by $0.4\,T + 0.6\,M$: that mix pays $1.2$ against $L$ and $1.2$ against $R$, both above $1$). Every candidate support with $B$ dies at the outside condition. This prunes the search hard.

*Mixed support $\{T,M\}\times\{L,R\}$.* Player 1 mixes $T,M$ only if indifferent between them:
$$3q = 2(1-q) \ \Rightarrow\ 5q = 2 \ \Rightarrow\ q = \tfrac{2}{5}.$$
Player 2 mixes $L,R$ only if indifferent, and *her* payoffs depend on player 1's weights: $u_2(L) = 2p_T$ (only $(T,L)$ pays her, and $2$), $u_2(R) = 3p_M$. With $p_B = 0$, so $p_T + p_M = 1$:
$$2p_T = 3p_M = 3(1-p_T) \ \Rightarrow\ 5p_T = 3 \ \Rightarrow\ p_T = \tfrac{3}{5},\ p_M = \tfrac{2}{5}.$$
Feasibility: all weights in $(0,1)$. ✓ Outside condition: player 1's equilibrium payoff is $3q = \tfrac{6}{5} = 1.2$; benched action $B$ pays $1 < 1.2$, so $B$ doesn't beat it. ✓ Player 2 has no benched actions. **Mixed NE:** player 1 plays $(\tfrac35, \tfrac25, 0)$, player 2 plays $q=\tfrac25$.

*The trap — support $\{T,B\}\times\{L,R\}$.* Indifference $u_1(T)=u_1(B)$: $3q = 1 \Rightarrow q = \tfrac13$, a perfectly valid probability. Feasibility passes. But now the outside condition: benched action $M$ pays $u_1(M) = 2(1-\tfrac13) = \tfrac43 \approx 1.33$, which *beats* the support payoff of $1$. **Fail.** Indifference solving cleanly is not enough — the benched action bites.

*Count:* two pure $+$ one mixed $= \mathbf{3}$ equilibria. Odd, as Wilson's theorem demands — a reassuring sign we found them all.

**Example 2 (multiplicity and the selection problem — Stag Hunt).** Both players hunt Stag or Hare; Stag needs cooperation, Hare is a sure thing:

$$
\begin{array}{c|cc}
 & \text{Stag} & \text{Hare}\\\hline
\text{Stag} & 4,\,4 & 0,\,3\\
\text{Hare} & 3,\,0 & 3,\,3
\end{array}
$$

Enumerate. Pure: $(\text{Stag},\text{Stag})$ — deviating to Hare drops you $4 \to 3$, so it holds; $(\text{Hare},\text{Hare})$ — deviating to Stag drops you $3 \to 0$, holds. Mixed: with $q = \Pr(\text{other plays Stag})$, $u(\text{Stag}) = 4q$, $u(\text{Hare}) = 3q + 3(1-q) = 3$; indifference $4q = 3 \Rightarrow q = \tfrac34$. Three equilibria — odd. ✓

Now the hard question the math *doesn't* answer: which gets played? $(\text{Stag},\text{Stag})$ is **payoff-dominant** — everyone strictly prefers it ($4 > 3$). Yet $(\text{Hare},\text{Hare})$ is **risk-dominant**: it's the best response against a coin-flip opponent ($u(\text{Hare})=3$ vs $u(\text{Stag}) = 4(\tfrac12) = 2$), so it's the safe choice when you're unsure of your partner. Nash cannot break the tie. **Harsanyi–Selten** proposed formal selection axioms (they'd pick risk-dominance here); Schelling argued real players coordinate on **focal points** — salient cues (labels, history, "we always hunt stag on Tuesdays") outside the payoff matrix. Multiplicity is not a bug to be computed away; it's a modeling gap where institutions, norms, and communication enter.

## Watch out

- **Indifference solving is necessary, not sufficient — always run the outside check.** Example 1's $\{T,B\}$ support gave $q = \tfrac13$, a clean valid probability, yet was *not* an equilibrium because benched $M$ paid more. Skipping the outside condition is the single most common support-enumeration error.
- **A negative weight means "no equilibrium here," not "round up to zero."** If the indifference system returns $p_T = 1.4, p_M = -0.4$, that support pair simply fails feasibility — you don't clip it. A probability that isn't a probability isn't an equilibrium.
- **Your mixing probabilities come from the *opponent's* indifference, not your own.** In Example 1, player 1's weights $(\tfrac35,\tfrac25)$ were set to make *player 2* indifferent, and vice versa. The 2.2 twist: you randomize precisely so the other player is willing to randomize back. Solving your own indifference for your own weights is the classic sign error.
- **Enumeration is worst-case exponential.** With $m$ actions each, there are $(2^m - 1)^2$ support pairs to try. Finding a Nash equilibrium is **PPAD-complete** — believed intractable in general — so "just enumerate" scales terribly; it's a tool for small games and a conceptual scaffold, not an industrial solver.
- **Oddness assumes genericity.** Games with exact payoff ties (e.g. a row that ties another everywhere) can have a *continuum* of equilibria; the count is then not odd because it's infinite. If your tally comes out even, suspect either a missed equilibrium or a hidden degeneracy.

## One-liner

> An equilibrium is determined by its support: guess who randomizes over what, solve the opponent-indifference equations, then verify the weights are real probabilities and no benched action beats them — and in a generic game the survivors number odd.

## Problems

**P1 (🟢)** In this game find all pure-strategy Nash equilibria, then the mixed equilibrium over the remaining support, verifying feasibility:

$$
\begin{array}{c|cc}
 & L & R\\\hline
U & 2,\,1 & 0,\,0\\
D & 0,\,0 & 1,\,2
\end{array}
$$

**P2 (🟡)** For the $3\times 2$ game of Example 1, a student claims "$(B, \text{mix } q=\tfrac12)$ is an equilibrium — with $q=\tfrac12$ player 1 is indifferent enough, and $B$ is safe." Diagnose the error precisely using the outside condition, and state what player 1 actually does at $q=\tfrac12$.

**P3 (🔴, optional)** Consider the symmetric $3\times 3$ Rock–Paper–Scissors game (winner $+1$, loser $-1$, tie $0$). (a) Argue no *pure* strategy is a best response to any pure strategy, so no pure NE exists. (b) Find the symmetric fully-mixed equilibrium by imposing indifference across all three actions, and verify the outside condition is vacuous. (c) How many equilibria does the game have, and is that consistent with oddness?

<details>
<summary>Solutions</summary>

**P1** *Pure NE.* $(U,L)$: payoffs $2,1$; P1 to $D$ gives $0$, P2 to $R$ gives $0$ — both worse, so **NE**. $(D,R)$: payoffs $1,2$; symmetric — **NE**. $(U,R)$ and $(D,L)$ each let someone jump to a better cell — not equilibria.

*Mixed NE over $\{U,D\}\times\{L,R\}$.* Let $q=\Pr(L)$, $p=\Pr(U)$. Player 1 indifferent: $u_1(U)=2q$, $u_1(D)=1(1-q)$; set $2q = 1-q \Rightarrow 3q = 1 \Rightarrow q = \tfrac13$. Player 2 indifferent (her payoffs depend on $p$): $u_2(L)=1\cdot p$, $u_2(R)=2(1-p)$; set $p = 2(1-p) \Rightarrow 3p = 2 \Rightarrow p = \tfrac23$. Feasibility: $q=\tfrac13,\ p=\tfrac23 \in (0,1)$. ✓ So player 1 plays $(\tfrac23,\tfrac13)$, player 2 plays $(\tfrac13,\tfrac23)$. Note again: $p$ was fixed by *player 2's* indifference, $q$ by *player 1's*. Total $= 3$ equilibria, odd. ✓

**P2** The claim conflates two different things. Player 1 is *not* indifferent at $q=\tfrac12$: $u_1(T)=3(\tfrac12)=1.5$, $u_1(M)=2(\tfrac12)=1$, $u_1(B)=1$. The unique best response is $T$ (payoff $1.5$), not $B$. So at $q=\tfrac12$ player 1 strictly plays $T$, and $B$ fails the outside condition badly (both $T$ and $M$-region actions can beat it). More generally $B$ is never a best response for *any* $q$ (Example 1), so it cannot appear in any equilibrium support. "$B$ is safe" describes a *maximin* motive, which is not the Nash best-response criterion. **What player 1 actually does at $q=\tfrac12$: play $T$ with certainty.**

**P3** (a) Against any pure choice by the opponent, exactly one action wins outright (e.g. against Rock, Paper wins $+1$), so the best response is that unique winner — a pure profile always has a loser who wants to deviate to the action that beats the winner. Hence no pure NE.

(b) By symmetry seek $\sigma = (r,p,s)$ played by both. Indifference across all three requires equal expected payoffs. Against opponent mix $(r,p,s)$: payoff to Rock $= 0\cdot r + (-1)p + (+1)s = s - p$; to Paper $= (+1)r + 0\cdot p + (-1)s = r - s$; to Scissors $= (-1)r + (+1)p + 0\cdot s = p - r$. Set equal: $s-p = r-s = p-r$. From $s-p = p-r$: $s + r = 2p$. From $r - s = p - r$: $2r = p + s$. With $r+p+s=1$, these give $r = p = s = \tfrac13$, and the common payoff is $0$. So the equilibrium is each player uniformly mixing $(\tfrac13,\tfrac13,\tfrac13)$.

(c) The outside condition is vacuous because the support is *all* actions — there are no benched actions to check; feasibility ($\tfrac13$ each $\ge 0$) is all that remains, and it holds. This is the **only** equilibrium: one, which is odd. ✓ (Consistent with Wilson — and a reminder that "odd" includes the case of exactly one.)

</details>

## Flashback

**From Lesson 2.2 (Nash equilibrium and mixed strategies):** In the game below, find the mixed-strategy equilibrium. State explicitly whose indifference determines each player's probabilities.

$$
\begin{array}{c|cc}
 & L & R\\\hline
T & 4,\,0 & 0,\,3\\
B & 0,\,3 & 2,\,0
\end{array}
$$

<details>
<summary>Solution</summary>

No pure NE (check: every cell has a deviator — e.g. at $(T,L)$ player 2 wants $R$; at $(T,R)$ player 1 wants $B$; and so on around the cycle). So the equilibrium is mixed over full support.

Let $p=\Pr(T)$ for player 1, $q=\Pr(L)$ for player 2.

*Player 1's probabilities $p$ are set by player 2's indifference.* $u_2(L)=3(1-p)$ (player 2 earns $3$ only at $(B,L)$), $u_2(R)=3p$ (only at $(T,R)$). Set $3(1-p)=3p \Rightarrow p=\tfrac12$.

*Player 2's probabilities $q$ are set by player 1's indifference.* $u_1(T)=4q$, $u_1(B)=2(1-q)$. Set $4q = 2(1-q) \Rightarrow 6q = 2 \Rightarrow q = \tfrac13$.

Equilibrium: player 1 plays $(\tfrac12,\tfrac12)$, player 2 plays $(\tfrac13,\tfrac23)$. Feasible. The crossover is the whole point — $p$ came from player 2's indifference equation, $q$ from player 1's; each player mixes exactly so the *other* is willing to.

</details>

## Connections

- **Backward (2.2):** the indifference conditions here are [2.2](02-02-nash-equilibrium-mixed-strategies.md)'s equal-payoff principle, now organized into an exhaustive algorithm. The recurring "your mix serves the opponent's indifference" twist is 2.2's, promoted to a solving procedure.
- **Backward (2.3):** [existence](02-03-existence-of-nash-equilibrium.md) is what *guarantees the search succeeds* — Kakutani says at least one support pair must survive all three tests, so enumeration can never come up empty. Computation without an existence theorem would be a hunt with no promise of prey.
- **Forward (2.5):** [correlated equilibrium](02-05-correlated-equilibrium.md) is defined by *linear* inequalities, so its whole set is a polytope computable by a single **linear program** — dramatically easier than Nash's disjunctive support search. The contrast (LP vs PPAD) is a headline of the next lesson.
- **Sideways (grad-micro):** solving for Cournot and Bertrand equilibria is this same best-response-intersection logic in continuous action spaces — set each firm's marginal condition (the continuous analogue of indifference) and solve the system: [grad-micro](../../grad-micro/syllabus.md).
- **Sideways (linear algebra):** the indifference systems are linear solves, and Lemke–Howson is simplex-style vertex pivoting on best-response polytopes — the polytope and pivoting machinery of [linalg-refresher](../../linalg-refresher/syllabus.md). See also the course [syllabus](../syllabus.md) for where Boss Problem 2 lands.
