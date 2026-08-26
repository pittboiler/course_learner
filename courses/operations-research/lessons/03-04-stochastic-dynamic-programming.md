# Operations Research · Lesson 3.4: Stochastic dynamic programming

> ⏱ ~15 min · Module 3: Integer & Dynamic Programming · Builds on: [3.3 Deterministic dynamic programming](03-03-deterministic-dynamic-programming.md), [`prob-stat-refresher` 2.1](../../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md) · Unlocks: Module 4 (queueing), and the whole of [`reinforcement-learning`](../../reinforcement-learning/syllabus.md)

## Why this matters

[3.3](03-03-deterministic-dynamic-programming.md) gave you a machine for staged decisions — but it assumed you knew exactly where each decision would land you. Reality rarely obliges. You overhaul a machine and it *usually* comes back healthy. You stock 200 units and demand *might* be 150 or 400. The moment outcomes are random, the deterministic recursion breaks in one specific place, and it turns out you can patch it with a single operator: **expectation**.

What you get back is worth more than the patch suggests. The object you're optimizing stops being a *plan* — a list of moves — and becomes a **policy**: a rule telling you what to do in whatever state you find yourself. That shift is the conceptual heart of this lesson, and the formal object that carries it, the **Markov decision process**, is the foundation of inventory control, maintenance scheduling, optimal stopping, and every algorithm in modern reinforcement learning.

## The idea

Here is the entire change from [3.3](03-03-deterministic-dynamic-programming.md), in one sentence.

**Deterministic:** you're in state $s$, you pick action $a$, and you land in a *known* next state.
**Stochastic:** you're in state $s$, you pick action $a$, and you land in a *lottery* over next states.

Everything else survives. The principle of optimality still holds — whatever state tomorrow finds you in, you'll behave optimally from there — so you still work backward from the end, and you still summarize the entire future by a single number attached to each state. The only edit is that "the value of where I land" is no longer a number you can look up; it's a random quantity, so you take its **expected value**: average the successor values, weighted by how likely each successor is.

And that forces a change in what an answer *looks like*. In a deterministic staged problem, the solution is a sequence: do this, then that, then that. Under uncertainty you cannot commit to a sequence, because you don't know which state you'll be standing in when the second decision comes due. So the answer must be **contingent** — *if* the machine is worn, overhaul; *if* it's good, run it. That rule is the policy, and it is what backward recursion actually produces.

## The formal version

### The Markov decision process

A **Markov decision process (MDP)** is five things:

- a set of **states** $s$ — everything you need to know about the situation to decide well;
- a set of **actions** $a$ available in each state;
- **transition probabilities** $p(s' \mid s, a)$ — the probability the next state is $s'$ given you are in $s$ and take $a$, with $\sum_{s'} p(s' \mid s, a) = 1$ for every pair $(s,a)$;
- **rewards** $r(s,a)$ — what you collect this period (a cost is just a negative reward);
- a **discount factor** $\gamma$ for infinite-horizon problems.

The transition probabilities are conditional probabilities in exactly the sense of [`prob-stat-refresher` 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md), and the averaging below is the expectation of [`prob-stat-refresher` 2.1](../../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md); we use both freely rather than re-deriving them.

**The Markov property** is the load-bearing assumption: $p(s' \mid s, a)$ depends on the *current* state and action only — not on how you got here, not on anything that happened earlier. *In words: the state is a complete summary of the past, as far as the future is concerned.*

That is not a new idea. It is [3.3](03-03-deterministic-dynamic-programming.md)'s definition of a state, said in probability language. In 3.3 a state had to carry enough information that the remaining problem depended on nothing else; here it must carry enough that the *distribution* of the remaining problem depends on nothing else. If your model violates it — say tomorrow's failure odds depend on how many times you've overhauled before — the fix is the same as in 3.3: enlarge the state until it doesn't.

### The recursion

Index the stages $n = 1, 2, \dots, N$, and let $V_n(s)$ be the best expected total reward obtainable from stage $n$ onward given that you are in state $s$ at stage $n$. (This is 3.3's value function $f_n(s)$, now an *expected* value.) Then

$$\boxed{\,V_n(s) \;=\; \max_a \Big\{\, r(s,a) \;+\; \gamma \sum_{s'} p(s' \mid s,a)\, V_{n+1}(s') \,\Big\}\,}$$

with boundary condition $V_{N+1}(s) = 0$ (nothing is collected after the horizon).

*In words: the value of a state is the best you can do over actions, where each action is scored as its immediate reward plus the discounted average of the values of the states it might take you to.* Put the deterministic recursion beside it and the only difference is that $V_{n+1}(\text{next state})$ became $\sum_{s'} p(s'|s,a) V_{n+1}(s')$ — a single successor replaced by a probability-weighted blend of successors.

The **argmax** — the action attaining the maximum — is what you actually want. Collect it for every state and every stage and you have the **optimal policy** $\pi_n(s)$.

### The discount factor, and why it exists

For a horizon that never ends, $r + r + r + \cdots$ diverges and "maximize total reward" means nothing. Discounting fixes that: with $0 \le \gamma < 1$, a constant reward of 1 per period is worth

$$\sum_{t=0}^{\infty} \gamma^t = \frac{1}{1-\gamma} < \infty.$$

*In words: geometric weights make an infinite stream of rewards add up to a finite number.* It also encodes the economics — a dollar now beats a dollar later. If money earns interest rate $r$ per period, then $\gamma = 1/(1+r)$, because one dollar next period is worth $1/(1+r)$ dollars today. At $\gamma = 0.9$, that's $r = (1-\gamma)/\gamma = 0.1/0.9 \approx 0.111$, about 11.1 percent per period.

The useful reading of $\gamma$ is the **effective horizon**, roughly $1/(1-\gamma)$ periods: $\gamma = 0.9$ means you are, in effect, optimizing over about 10 periods; $\gamma = 0.99$ stretches that to about 100. Small $\gamma$ makes you myopic, $\gamma$ near 1 makes you patient.

## Picture

![Left panel: a decision tree for a two-state machine MDP, with each state branching to two action nodes and each action node branching to next states labelled with transition probabilities; the optimal action out of each state is drawn in coral. Right panel: a plot of the value-iteration sequence for both states rising toward dashed horizontal lines marking the fixed point](assets/03-04-fig1.svg)

## Worked examples

### Example 1 — a finite-horizon MDP, solved completely

A machine is either **G** (good) or **B** (worn). Each of 3 remaining stages you choose an action; profit is in thousands of dollars per stage and $\gamma = 0.9$.

| State $s$ | Action $a$ | Reward $r(s,a)$ | $p(G \mid s,a)$ | $p(B \mid s,a)$ |
|---|---|---|---|---|
| G | run | 10 | 0.7 | 0.3 |
| G | maintain | 6 | 1.0 | 0.0 |
| B | run | 4 | 0.0 | 1.0 |
| B | overhaul | 0 | 0.8 | 0.2 |

Reading the model: running a good machine earns the most but risks wearing it out; preventive maintenance costs you output but guarantees the machine stays good. A worn machine limps along at 4 forever unless you overhaul it, which earns nothing this stage but usually restores it.

**Stage 3 (last decision).** $V_4 \equiv 0$, so the recursion is just $\max_a r(s,a)$:

$$V_3(G) = \max\{10,\; 6\} = 10 \ (\text{run}), \qquad V_3(B) = \max\{4,\; 0\} = 4 \ (\text{run}).$$

With no future left, preventive work is pure waste. Run everything.

**Stage 2.** Now the successor values matter. In state $G$:

$$\text{run:} \quad 10 + 0.9\big[0.7(10) + 0.3(4)\big] = 10 + 0.9(7 + 1.2) = 10 + 0.9(8.2) = 10 + 7.38 = 17.38,$$
$$\text{maintain:} \quad 6 + 0.9\big[1.0(10)\big] = 6 + 9 = 15.$$

So $V_2(G) = 17.38$, **run**. In state $B$:

$$\text{run:} \quad 4 + 0.9\big[1.0(4)\big] = 4 + 3.6 = 7.6,$$
$$\text{overhaul:} \quad 0 + 0.9\big[0.8(10) + 0.2(4)\big] = 0.9(8 + 0.8) = 0.9(8.8) = 7.92.$$

So $V_2(B) = 7.92$, **overhaul**. The policy just *changed with the stage*: overhauling was worthless at stage 3 and is worth it at stage 2, because now there is a stage left to enjoy the restored machine.

**Stage 1.** In state $G$:

$$\text{run:} \quad 10 + 0.9\big[0.7(17.38) + 0.3(7.92)\big] = 10 + 0.9(12.166 + 2.376) = 10 + 0.9(14.542) = 23.0878,$$
$$\text{maintain:} \quad 6 + 0.9(17.38) = 6 + 15.642 = 21.642.$$

$V_1(G) = 23.0878$, **run**. In state $B$:

$$\text{run:} \quad 4 + 0.9(7.92) = 4 + 7.128 = 11.128,$$
$$\text{overhaul:} \quad 0 + 0.9\big[0.8(17.38) + 0.2(7.92)\big] = 0.9(13.904 + 1.584) = 0.9(15.488) = 13.9392.$$

$V_1(B) = 13.9392$, **overhaul**.

| Stage $n$ | $V_n(G)$ | action in G | $V_n(B)$ | action in B |
|---|---|---|---|---|
| 1 | 23.0878 | run | 13.9392 | overhaul |
| 2 | 17.38 | run | 7.92 | overhaul |
| 3 | 10 | run | 4 | run |

**The answer is that table, not a sequence of moves.** You cannot say "overhaul, then run, then run" — you don't know yet whether the overhaul will work. You can only say: *at stage 2, if worn, overhaul; if good, run.* That contingency is exactly what deterministic DP never needed.

**Verification (compute the chosen policy's expected reward directly).** Start in $B$ at stage 1 and follow the table. Stage 1: overhaul, reward 0; you land in $G$ with probability 0.8, $B$ with 0.2. Stage 2: in $G$ you run for 10; in $B$ you overhaul for 0. Stage 3 expected rewards, given the stage-2 state and action: from $G$-run you reach $G$ or $B$ with probabilities 0.7 / 0.3 and then run, giving $0.7(10) + 0.3(4) = 8.2$; from $B$-overhaul you reach $G$ or $B$ with 0.8 / 0.2 and then run, giving $0.8(10) + 0.2(4) = 8.8$. Total discounted:

$$0 + 0.9\big[0.8(10) + 0.2(0)\big] + 0.81\big[0.8(8.2) + 0.2(8.8)\big] = 7.2 + 0.81(6.56 + 1.76) = 7.2 + 6.7392 = 13.9392.$$

Matches $V_1(B)$ exactly. Sanity check on the policy itself: overhaul is chosen precisely when enough stages remain to recoup the lost output, and running dominates in $G$ everywhere because maintenance sacrifices 4 units of profit to buy only a 0.3 chance of avoiding wear — too expensive here.

### Example 2 — infinite horizon and value iteration

Drop the deadline. There is no "stage $N$" to start from, so there is no boundary condition and nothing to recurse backward from. Instead the value function is defined by the **Bellman equation**, a fixed-point condition:

$$V(s) = \max_a \Big\{ r(s,a) + \gamma \sum_{s'} p(s'\mid s,a) V(s') \Big\} \quad \text{for every } s.$$

*In words: $V$ is the function that reproduces itself when you apply one step of optimization.* Same formula as before with the stage subscripts erased — but it is now an *equation to solve*, not a recipe to run.

**Value iteration** solves it by brute repetition: start from any $V_0$ (zero is fine), apply the right-hand side to get $V_1$, then $V_2$, and so on. Each sweep is called applying the **Bellman operator**. It converges from any starting point because that operator is a **contraction with modulus $\gamma$** in the sup-norm — one application shrinks the distance between any two value functions by a factor of at least $\gamma$ — so the contraction-mapping (Banach fixed-point) theorem gives a unique fixed point and geometric convergence, $\lVert V_k - V \rVert_\infty \le \gamma^k \lVert V_0 - V \rVert_\infty$. We take that theorem on faith here.

Run it on the machine MDP with $\gamma = 0.9$, starting from $V_0(G) = V_0(B) = 0$. The first sweep is exactly the stage-3 calculation, the second exactly the stage-2 calculation, and so on — **value iteration from zero *is* the finite-horizon recursion**, with $V_k$ meaning "best expected reward with $k$ stages to go":

| $k$ | $V_k(G)$ | $V_k(B)$ | greedy action in G / B |
|---|---|---|---|
| 0 | 0 | 0 | — |
| 1 | 10 | 4 | run / run |
| 2 | 17.38 | 7.92 | run / overhaul |
| 3 | 23.0878 | 13.9392 | run / overhaul |
| 4 | 28.3089 | 19.1323 | run / overhaul |

The true fixed point is $V(G) = 8200/109 \approx 75.229$ and $V(B) = 7200/109 \approx 66.055$.

**Verification.** Plug them back into the Bellman equation. In $G$: run gives $10 + 0.9[0.7(75.229) + 0.3(66.055)] = 10 + 0.9(52.660 + 19.817) = 10 + 65.229 = 75.229$; maintain gives $6 + 0.9(75.229) = 73.706$, which is smaller — so $V(G) = 75.229$ with **run**. In $B$: overhaul gives $0.9[0.8(75.229) + 0.2(66.055)] = 0.9(60.183 + 13.211) = 0.9(73.394) = 66.055$; run gives $4 + 0.9(66.055) = 63.450$, smaller — so $V(B) = 66.055$ with **overhaul**. Both equations reproduce themselves; the fixed point checks out. The error bound also holds: after $k=3$ sweeps it promises error at most $0.9^3(75.229) = 54.84$, and the actual error is $75.229 - 23.088 = 52.14$.

Two practical notes. First, convergence is *slow* at $\gamma = 0.9$ — each sweep kills only 10 percent of the error, so driving the initial gap of about 75 down to 0.01 takes roughly 85 sweeps ($0.9^{85} \approx 1.3 \times 10^{-4}$). Second, the **policy** converged after two sweeps even though the values were nowhere near converged; that is typical, and it is why people stop on policy stability rather than value precision.

**Policy iteration** is the alternative: fix a policy, solve its linear system exactly for that policy's value (no max, so it's just $|S|$ linear equations), then act greedily with respect to that value to get a better policy, and repeat. Far fewer iterations, much more work per iteration.

## The curse of dimensionality, again

Same wall as [3.3](03-03-deterministic-dynamic-programming.md), and it bites harder. With $d$ state variables each taking $m$ values, the state space has $m^d$ entries and every sweep of value iteration must touch all of them, evaluating a sum over successors for each action. Ten binary machine components is $2^{10} = 1024$ states; twenty is over a million. Exact DP is therefore a small-state-space tool. The escape routes — state aggregation, approximate dynamic programming, and fitting $V$ with a parametric function approximator instead of tabulating it — exist and are large fields; we only name them here.

## Where this leads

An MDP where you *know* $p(s'|s,a)$ and $r(s,a)$ is a planning problem, and this lesson solves it. **Reinforcement learning** is the same MDP with the transition probabilities and rewards *unknown*: the agent must estimate them, or bypass them entirely, by acting and observing outcomes — which is why exploration and the explore/exploit trade-off appear there and not here. Every core RL algorithm is a stochastic-approximation cousin of the update you just ran; see [`reinforcement-learning`](../../reinforcement-learning/syllabus.md). Separately, in plain language: [`control-systems`](../../control-systems/syllabus.md) attacks the same problem with continuous states, continuous time, and a differential-equation model of the plant — optimal control's cost-to-go function is this lesson's value function, and its Hamilton–Jacobi–Bellman equation is the continuous-state Bellman equation.

## Watch out

- **You might think the answer is a sequence of actions, as in [3.3](03-03-deterministic-dynamic-programming.md). It's a policy.** Under uncertainty you cannot pre-commit to move 2 without knowing where move 1 lands you. Backward recursion delivers a decision for *every* state at *every* stage — most of which you will never use, and all of which you needed in order to take the expectation.
- **You might expect the optimal action in a state to be the same at every stage. In finite horizons it usually isn't.** Overhauling is worthless with one stage left and optimal with two, purely because investments need a future to pay off. Only the *infinite*-horizon problem has a stationary (stage-independent) optimal policy — every stage looks alike when there are always infinitely many left.
- **You might set $\gamma = 1$ in an infinite-horizon problem.** Then the sums diverge, the Bellman operator stops being a contraction, and value iteration need not converge. Undiscounted infinite-horizon problems need a different criterion — average reward per period — with its own theory.
- **You might average the successor *rewards* instead of the successor *values*.** The expectation is over $V_{n+1}(s')$, which already contains everything that happens after $s'$. Averaging one-step rewards throws the whole tail away.

## One-liner

> Replace "the next state" with "the expected value over next states" and dynamic programming survives intact — but the answer stops being a plan and becomes a policy.

## Problems

**P1 (🟢)** A machine is **G** (good) or **B** (worn), with two stages left, $\gamma = 1$ (no discounting), and this model:

| State | Action | Reward | $p(G\mid s,a)$ | $p(B \mid s,a)$ |
|---|---|---|---|---|
| G | run | 8 | 0.8 | 0.2 |
| G | replace | 3 | 1.0 | 0.0 |
| B | run | 2 | 0.0 | 1.0 |
| B | replace | 0 | 1.0 | 0.0 |

Find $V_2$, $V_1$, and the optimal action in each state at each stage.

**P2 (🟡)** Take the same MDP as an infinite-horizon problem with $\gamma = 0.9$. Value iteration has reached $V_k(G) = 20$, $V_k(B) = 12$. Compute $V_{k+1}(G)$ and $V_{k+1}(B)$, and give the greedy policy after this sweep.

**P3 (🔴)** Return to the lesson's machine MDP (rewards 10 / 6 / 4 / 0). With **two stages to go**, for which discount factors $\gamma$ is overhauling optimal in state $B$? Interpret the threshold as an interest rate.

<details>
<summary>Solutions</summary>

**P1** Boundary: $V_3 \equiv 0$, and $\gamma = 1$ so no discount factors appear.

*Stage 2.* $V_2(G) = \max\{8, 3\} = 8$, **run**. $V_2(B) = \max\{2, 0\} = 2$, **run**.

*Stage 1, state G.*
$$\text{run:} \quad 8 + \big[0.8(8) + 0.2(2)\big] = 8 + (6.4 + 0.4) = 8 + 6.8 = 14.8,$$
$$\text{replace:} \quad 3 + \big[1.0(8)\big] = 11.$$
So $V_1(G) = 14.8$, **run**.

*Stage 1, state B.*
$$\text{run:} \quad 2 + \big[1.0(2)\big] = 4, \qquad \text{replace:} \quad 0 + \big[1.0(8)\big] = 8.$$
So $V_1(B) = 8$, **replace**.

| Stage | $V(G)$ | action | $V(B)$ | action |
|---|---|---|---|---|
| 1 | 14.8 | run | 8 | replace |
| 2 | 8 | run | 2 | run |

*Check.* Enumerate the two-stage plans from $B$ directly: run-then-run gives $2 + 2 = 4$; replace-then-run gives $0 + 8 = 8$ (replacement is deterministic here, so no expectation is needed). Maximum 8 ✓. From $G$, run-then-best gives $8 + 0.8(8) + 0.2(2) = 14.8$; replace-then-run gives $3 + 8 = 11$ ✓. Note again the stage-dependence: replacing is optimal in $B$ at stage 1 and not at stage 2.

**P2** Apply one Bellman sweep with $\gamma = 0.9$ to $V_k = (20, 12)$.

State $G$:
$$\text{run:} \quad 8 + 0.9\big[0.8(20) + 0.2(12)\big] = 8 + 0.9(16 + 2.4) = 8 + 0.9(18.4) = 8 + 16.56 = 24.56,$$
$$\text{replace:} \quad 3 + 0.9(20) = 21.$$
$V_{k+1}(G) = 24.56$, greedy action **run**.

State $B$:
$$\text{run:} \quad 2 + 0.9(12) = 12.8, \qquad \text{replace:} \quad 0 + 0.9(20) = 18.$$
$V_{k+1}(B) = 18$, greedy action **replace**.

Greedy policy after the sweep: run in $G$, replace in $B$.

*Check.* Solve the Bellman equation exactly for that policy: $V(B) = 0.9V(G)$ and $V(G) = 8 + 0.9[0.8V(G) + 0.2V(B)] = 8 + 0.882V(G)$, so $V(G) = 8/0.118 \approx 67.80$ and $V(B) \approx 61.02$. Both alternatives lose at these values — replace in $G$ gives $3 + 0.9(67.80) = 64.02 < 67.80$, run in $B$ gives $2 + 0.9(61.02) = 56.92 < 61.02$ — so this greedy policy is in fact optimal, and $V_{k+1} = (24.56, 18)$ sits well below the fixed point, as it must when iterating upward from small values ✓.

**P3** With two stages to go, the last-stage values are $V_{\text{last}}(G) = 10$ and $V_{\text{last}}(B) = 4$ (run in both — no future, so the max is over immediate rewards, and this holds for any $\gamma$). Compare in state $B$:

$$\text{run:} \quad 4 + \gamma\big[1.0(4)\big] = 4 + 4\gamma, \qquad \text{overhaul:} \quad 0 + \gamma\big[0.8(10) + 0.2(4)\big] = 8.8\gamma.$$

Overhaul wins when $8.8\gamma > 4 + 4\gamma$, i.e. $4.8\gamma > 4$, i.e.

$$\gamma > \tfrac{5}{6} \approx 0.833.$$

*Check.* At $\gamma = 0.9$: run gives $7.6$, overhaul gives $7.92$ — overhaul, matching Example 1 ✓. At $\gamma = 0.8$: run gives $7.2$, overhaul gives $7.04$ — run wins, so the threshold sits between them ✓. At exactly $\gamma = 5/6$: run gives $4 + 10/3 = 22/3$ and overhaul gives $44/6 = 22/3$ — a tie, confirming the boundary ✓.

*Interpretation.* Using $\gamma = 1/(1+r)$, the threshold $\gamma = 5/6$ is $r = 1/\gamma - 1 = 6/5 - 1 = 0.2$, a 20 percent per-period interest rate. Above 20 percent, capital is expensive enough that giving up 4 units of profit today to buy a better machine tomorrow no longer pays. Impatience makes you run the worn machine into the ground.

</details>

## Flashback

**From Lesson 3.3 (Deterministic dynamic programming):** A shipment travels from A to F through a staged network. Stage-1 node A connects to stage-2 nodes B and C; those connect to stage-3 nodes D and E; those connect to the destination F. Costs: A to B is 4, A to C is 2; B to D is 3, B to E is 6; C to D is 5, C to E is 2; D to F is 4, E to F is 5. Find the cheapest route by backward recursion, reporting the value function $f_n$ at every node. (Fresh variant — and note as you go that no expectation appears anywhere, which is precisely what this lesson changed.)

<details>
<summary>Solution</summary>

Let $f_n(\text{node})$ be the cheapest cost from that node to F. Work backward.

*Stage 4:* $f_4(F) = 0$.

*Stage 3:* one arc each, so $f_3(D) = 4$, $f_3(E) = 5$.

*Stage 2:*
$$f_2(B) = \min\{3 + f_3(D),\; 6 + f_3(E)\} = \min\{3+4,\; 6+5\} = \min\{7, 11\} = 7 \ (\text{via } D),$$
$$f_2(C) = \min\{5 + f_3(D),\; 2 + f_3(E)\} = \min\{5+4,\; 2+5\} = \min\{9, 7\} = 7 \ (\text{via } E).$$

*Stage 1:*
$$f_1(A) = \min\{4 + f_2(B),\; 2 + f_2(C)\} = \min\{4+7,\; 2+7\} = \min\{11, 9\} = 9 \ (\text{via } C).$$

Trace the decisions forward: A to C to E to F, total cost $2 + 2 + 5 = 9$.

*Check by brute force* — all four routes: A-B-D-F $= 4+3+4 = 11$; A-B-E-F $= 4+6+5 = 15$; A-C-D-F $= 2+5+4 = 11$; A-C-E-F $= 2+2+5 = 9$. Minimum 9 ✓, and the recursion examined 5 comparisons instead of pricing 4 whole routes.

*The contrast.* Each $\min$ here reached into a single, certain successor value. Replace "the arc takes you to D" with "the arc takes you to D with probability 0.6 and E with 0.4" and every bracket becomes $0.6 f_3(D) + 0.4 f_3(E)$ — the one edit that turns this lesson's predecessor into this lesson.

</details>

## Connections

- **Backward:** this is [3.3](03-03-deterministic-dynamic-programming.md) with one operator inserted. Stages, states, the principle of optimality, the value function, and backward recursion all carry over unchanged; only "the next state" becomes "the distribution of next states." The Markov property is 3.3's "state = sufficient summary of the past," restated for randomness.
- **Forward:** Module 4 studies stochastic systems you *don't* control — Markov chains without the max, in [4.2 The M/M/1 queue](04-02-the-mm1-queue.md) — and [4.4 Inventory: EOQ and the newsvendor](04-04-inventory-eoq-newsvendor.md) is a one-period stochastic decision problem, the smallest possible MDP.
- **Sideways:** the discount factor $\gamma = 1/(1+r)$ is the same present-value factor finance uses to price cash flows, and the effective horizon $1/(1-\gamma)$ is the perpetuity formula in disguise. The value function is optimal control's cost-to-go, and the whole object is the environment model that [`reinforcement-learning`](../../reinforcement-learning/syllabus.md) must learn rather than assume.
