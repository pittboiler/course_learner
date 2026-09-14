# Reinforcement Learning · Lesson 1.5: Policy evaluation and policy iteration

> ⏱ ~15 min · Module 1: MDPs & Dynamic Programming · Builds on: [1.4 (optimality and the Bellman optimality equation)](01-04-optimality-bellman-optimality.md), [1.3 (value functions and the Bellman expectation equation)](01-03-value-functions-bellman-expectation.md) · Unlocks: [1.6 (value iteration and convergence)](01-06-value-iteration-and-convergence.md), [2.1 (Monte Carlo prediction)](02-01-monte-carlo-prediction.md)

## Why this matters

[Lesson 1.3](01-03-value-functions-bellman-expectation.md) gave a closed form for $V^\pi$ and [Lesson 1.4](01-04-optimality-bellman-optimality.md) proved that being greedy on it improves the policy. Bolting those together gives the first complete algorithm in this course — an algorithm that provably finds an optimal policy for any finite MDP whose dynamics you know.

It matters far beyond the case where you know the dynamics. The two-phase structure it introduces — **evaluate, then improve, then repeat** — survives every generalization in this course. Monte Carlo control, SARSA, actor–critic and PPO are all this loop with one or both phases replaced by something approximate. Getting the exact version straight now means the approximate versions read as substitutions rather than new ideas.

## The idea

Two operations, each of which breaks what the other fixes:

- **Evaluation** makes the value function honest about the current policy. It leaves the policy alone.
- **Improvement** makes the policy greedy with respect to the current value function. It leaves the value function alone — and thereby makes it *dishonest*, since it now describes the old policy.

Run them alternately. Evaluation drags $V$ toward $V^\pi$; improvement drags $\pi$ toward greedy-in-$V$. Each move undoes some of the other's work, but [Lesson 1.4](01-04-optimality-bellman-optimality.md)'s theorem guarantees the policy never gets worse, so the process cannot cycle. The only place it can stop is where **both conditions hold at once** — $V$ is right for $\pi$ *and* $\pi$ is greedy for $V$ — and that is exactly the Bellman optimality equation.

This alternation is called **generalized policy iteration**, and it is the organizing idea of the entire field.

## The formal version

**Iterative policy evaluation.** Rather than inverting $(I - \gamma P^\pi)$, turn the Bellman expectation equation into an assignment and iterate it:

$$V_{k+1}(s) \;\leftarrow\; \sum_a \pi(a\mid s)\left[r(s,a) + \gamma \sum_{s'} p(s'\mid s,a)\,V_k(s')\right]$$

In words: replace each state's estimate with what the equation says it should be, given the current estimates of its neighbours. One pass over all states is a **sweep**. Starting from any $V_0$, $V_k \to V^\pi$. *(card: [iterative policy evaluation](../reference.md#iterative-policy-evaluation))*

The update is called a **full backup** — full because it uses *every* successor state weighted by its true probability, not a sample. Every method in Module 2 replaces this with a sampled backup, and that substitution is the whole difference between dynamic programming and reinforcement learning.

**Why iterate when a closed form exists?** Three reasons, and the third is the one that matters later:

1. The inverse costs $O(|\mathcal{S}|^3)$; a sweep costs $O(|\mathcal{S}|^2|\mathcal{A}|)$, and you usually need far fewer sweeps than a factor of $|\mathcal{S}|$.
2. You can stop early. The closed form is all-or-nothing; iteration gives you a usable answer at any point.
3. **The iterative form survives the loss of the model.** Replace the expectation with a sample and you have [TD(0)](02-03-temporal-difference-learning-td0.md); the matrix inverse has no such sampled analogue.

**Policy iteration.** Alternate the two phases:

$$\pi_0 \xrightarrow{\ \text{E}\ } V^{\pi_0} \xrightarrow{\ \text{I}\ } \pi_1 \xrightarrow{\ \text{E}\ } V^{\pi_1} \xrightarrow{\ \text{I}\ } \pi_2 \;\cdots\; \pi^* \xrightarrow{\ \text{E}\ } V^*$$

with the improvement step $\pi_{k+1}(s) = \arg\max_a\big[r(s,a) + \gamma\sum_{s'}p(s'\mid s,a)V^{\pi_k}(s')\big]$, and stop when the policy is unchanged.

**It terminates, in finitely many iterations.** The argument is short and worth having: a finite MDP has finitely many deterministic policies ($|\mathcal{A}|^{|\mathcal{S}|}$ of them). [Lesson 1.4](01-04-optimality-bellman-optimality.md) guarantees each improvement step yields $V^{\pi_{k+1}} \ge V^{\pi_k}$, and the inequality is **strict somewhere** unless the policy is already greedy with respect to its own value — in which case it satisfies the Bellman optimality equation and is optimal. So the sequence of policies never repeats, and a finite set with no repeats must stop. **Policy iteration cannot cycle and cannot stall**; it hits an optimal policy exactly.

**The stopping test needs care with ties.** "The policy is unchanged" should mean *every action the policy plays is still in the arg-max set*, not that the arg-max set is identical to last round. Ties can appear as the values settle, and demanding set equality makes the algorithm loop forever between two equally optimal policies.

**You do not have to evaluate to convergence.** The improvement step only needs $V$ accurate enough to rank the actions correctly. Truncating evaluation after a fixed number of sweeps gives **modified policy iteration**, which is usually faster. Truncate it all the way down to *one* sweep and the two phases merge into a single update — that is [Lesson 1.6](01-06-value-iteration-and-convergence.md)'s value iteration.

## Picture

![Left: two straight lines forming a narrow wedge that converges at a point on the right labelled V star and pi star. The lower line is labelled V equals V-pi, the evaluation target, and the upper line is labelled pi equals greedy of V, the improvement target. A zigzag of arrows bounces alternately between the two lines, each arrow shorter than the last, converging on the meeting point. Right: a three by three grid showing the optimal value in each cell and coral arrows marking every optimal action, with the bottom-right cell marked GOAL](assets/01-05-fig1.svg)

The wedge is the picture to keep. Each line is a *constraint*; each arrow satisfies one constraint and violates the other a little less than before. The solution is where the constraints intersect, and neither operation alone would ever get there.

## Worked examples

**Example 1 (mechanical): evaluating the random policy by sweeps.** The $3\times3$ gridworld: goal bottom-right, $-1$ per move, bumping a wall leaves you in place, $\gamma = 1$, uniform random policy. Start from $V_0 \equiv 0$ and sweep. Each cell becomes $\frac14\sum_a\big[-1 + V_k(s')\big]$.

**Sweep 1.** Every successor has value $0$, so every non-terminal cell becomes $-1$:

| $-1$ | $-1$ | $-1$ |
|---|---|---|
| $-1$ | $-1$ | $-1$ |
| $-1$ | $-1$ | $0$ |

**Sweep 2.** Now the neighbours carry $-1$, except the terminal corner which stays $0$. The cell left of the goal has successors (up: $-1$, left: $-1$, down: bumps, so itself at $-1$, right: terminal at $0$), giving $-1 + \tfrac14(-1-1-1+0) = -1.75$. Cells not touching the goal get $-1 + (-1) = -2$:

| $-2$ | $-2$ | $-2$ |
|---|---|---|
| $-2$ | $-2$ | $-1.75$ |
| $-2$ | $-1.75$ | $0$ |

Continue, and the corner reads $-3$ after sweep 3 and $-4$ after sweep 4. But the exact answer from [Lesson 1.3](01-03-value-functions-bellman-expectation.md) is $V^\pi(\text{corner}) = -27$, so the sweeps have travelled $4/27$ of the way. **This is the characteristic behaviour of policy evaluation at $\gamma = 1$: information about the terminal state propagates outward one cell per sweep, and the values keep sinking long after the shape is right.** In full: $-9.38$ at sweep $10$, $-24.10$ at sweep $50$, $-26.70$ at $100$, and $-27.00$ to four decimals only by sweep $400$.

That slowness is the point of the next paragraph.

**Example 2 (why you'd care): the policy is right long before the values are.** Take the value estimate after **sweep 3** — nowhere near $V^\pi$ — and be greedy with respect to it. Then do the same with the fully converged $V^\pi$. Compare the two resulting policies.

At sweep 3 the table is

| $-3$ | $-3$ | $-2.94$ |
|---|---|---|
| $-3$ | $-2.88$ | $-2.44$ |
| $-2.94$ | $-2.44$ | $0$ |

The greedy action at the centre compares $-1 + V(\text{up}) = -4$, $-1 + V(\text{left}) = -4$, $-1+V(\text{down}) = -3.44$, $-1+V(\text{right}) = -3.44$ — so *down* or *right*. The greedy action from the converged $V^\pi$ ($-21.5$ at the centre, successors $-25,-25,-16,-16$) compares $-26, -26, -17, -17$ — also *down* or *right*. **Identical policies, from value estimates that differ by nearly twenty.**

Now run full policy iteration on this gridworld and watch how short it is:

| round | evaluate | value at corner | then be greedy |
|---|---|---|---|
| 1 | $V^{\text{random}}$ | $-27$ | policy changes |
| 2 | $V^{\pi_1}$ | $-4$ | **policy is stable — stop** |

**One improvement step takes the uniform random policy to an optimal one.** The corner's value goes from $-27$ to $-4$, and $-4$ is exactly the Manhattan distance to the goal, which is the best any policy can do. The second evaluation exists only to *prove* optimality; the answer was found in round 1.

The lesson generalizes: **improvement is cheap and evaluation is expensive, and improvement tolerates a sloppy evaluation.** Every practical variant of this loop exploits that asymmetry, and [Lesson 1.6](01-06-value-iteration-and-convergence.md) pushes the exploitation to its limit.

## Watch out

- **You might think** the values must converge before you can improve the policy — **but actually** improvement only needs the *ranking* of actions to be right, and rankings settle long before magnitudes do. Example 2 is the demonstration: a value estimate off by a factor of seven produced the correct greedy policy. This is why truncated evaluation works and why [Lesson 1.6](01-06-value-iteration-and-convergence.md)'s one-sweep version is legitimate rather than a hack.
- **You might think** a sweep must use the previous sweep's values throughout (a *synchronous* update with two arrays) — **but actually** overwriting values in place as you go (*in-place*, one array) also converges, and usually faster, because later states in the sweep get to use the newly improved earlier ones. The order of the sweep then matters: sweeping the gridworld from the goal outward propagates information far quicker than sweeping toward it.
- **You might think** policy iteration could oscillate between two policies of equal value — **but actually** it cannot, provided the stopping test is "every action played is still greedy" rather than "the arg-max set is unchanged". With the wrong test, ties that appear as values settle will make it alternate forever between two optimal policies. The gridworld does this: greedy on the random policy's values picks *down* alone at the top-middle cell, and greedy on the optimal values finds *down* and *right* tied there.

## One-liner

> Evaluate, be greedy, repeat — each step provably no worse than the last, and the only resting place is the Bellman optimality equation.

## Problems

**P1 (🟢)** A two-state MDP has $\gamma = 0.5$. In state $X$ the policy $\pi$ always takes an action with reward $2$ that leads to $Y$; in state $Y$ it always takes an action with reward $-1$ that leads back to $X$.

(a) Run iterative policy evaluation from $V_0(X) = V_0(Y) = 0$ for three sweeps, writing $V_1$, $V_2$, $V_3$.
(b) Solve the two-equation linear system for $V^\pi$ exactly.
(c) State the max-norm error $\lVert V_3 - V^\pi\rVert_\infty$.

**P2 (🟡)** In the $3\times3$ gridworld of the examples, the sweep-2 value table is the one printed in Example 1.

(a) Compute the greedy action(s) at the **bottom-middle** cell using the sweep-2 values.
(b) Compute the greedy action(s) there using the converged $V^\pi$ (bottom row $-22.5, -16, 0$; middle row $-25, -21.5, -16$).
(c) State whether the two agree, and what this illustrates.
(d) At the **top-left corner**, the sweep-2 values give all four actions the value $-3$ except the two wall-bumps, which also give $-3$. State what the greedy step does here and why it is harmless.

**P3 (🔴)** A colleague implements policy iteration but truncates evaluation to exactly **one sweep** per round, starting each round's sweep from the previous round's value estimate rather than from zero.

(a) Write down the combined update this produces, in one line, by substituting the greedy policy into the evaluation sweep.
(b) State which algorithm this is.
(c) The termination proof given in this lesson used "finitely many policies, each strictly better". Explain why that proof does **not** apply to the colleague's version.
(d) State what must be proved instead, and name the property of the update that supplies it.

<details>
<summary>Solutions</summary>

**P1**

(a) The policy is deterministic, so each sweep is $V_{k+1}(X) = 2 + 0.5\,V_k(Y)$ and $V_{k+1}(Y) = -1 + 0.5\,V_k(X)$.

| $k$ | $V_k(X)$ | $V_k(Y)$ |
|---|---|---|
| $0$ | $0$ | $0$ |
| $1$ | $2 + 0.5(0) = \mathbf{2}$ | $-1 + 0.5(0) = \mathbf{-1}$ |
| $2$ | $2 + 0.5(-1) = \mathbf{1.5}$ | $-1 + 0.5(2) = \mathbf{0}$ |
| $3$ | $2 + 0.5(0) = \mathbf{2}$ | $-1 + 0.5(1.5) = \mathbf{-0.25}$ |

(b) Solve $V(X) = 2 + 0.5V(Y)$ and $V(Y) = -1 + 0.5V(X)$ simultaneously. Substituting the second into the first:

$$V(X) = 2 + 0.5(-1 + 0.5V(X)) = 1.5 + 0.25V(X) \Rightarrow 0.75V(X) = 1.5 \Rightarrow V(X) = \mathbf{2}.$$

Then $V(Y) = -1 + 0.5(2) = \mathbf{0}$.

(c) $\lVert V_3 - V^\pi\rVert_\infty = \max\{|2-2|,\ |-0.25 - 0|\} = \mathbf{0.25}$.

Note the iterates oscillate around the answer rather than approaching from one side — $V_k(X)$ goes $0, 2, 1.5, 2$ — because the chain alternates between the states and the rewards have opposite signs. Nothing is wrong: the contraction of [Lesson 1.6](01-06-value-iteration-and-convergence.md) bounds the error by $\gamma^k\lVert V_0 - V^\pi\rVert_\infty = 0.5^3(2) = 0.25$, which this hits exactly.

**P2**

(a) Sweep-2 values: bottom row $-2, -1.75, 0$; middle row $-2, -2, -1.75$. From the bottom-middle cell:

| action | destination | value | $Q = -1 + V$ |
|---|---|---|---|
| right | goal | $0$ | $\mathbf{-1}$ |
| up | centre | $-2$ | $-3$ |
| left | bottom-left | $-2$ | $-3$ |
| down | wall — stays | $-1.75$ | $-2.75$ |

**Greedy: *right*.**

(b) Converged values: right $\to 0$ gives $-1$; up $\to -21.5$ gives $-22.5$; left $\to -22.5$ gives $-23.5$; down bumps into the wall and stays at $-16$, giving $-17$. **Greedy: *right*.**

(c) **They agree.** The value estimates differ enormously — $-1.75$ versus $-16$ at that very cell — and the greedy action is the same, because *right* reaches the terminal state in one step and no amount of refinement will make a one-step finish look worse than a detour. This is Example 2's point in a second place: **the ranking of actions stabilizes long before the magnitudes do**, which is exactly what licenses truncated evaluation.

(d) At the top-left corner after sweep 2, every action is worth $-1 + (-2) = -3$ — the two that move ($-2$ each) and the two that bump into walls (also landing on $-2$, the corner's own value). All four tie, so the greedy step picks **arbitrarily among them**, possibly including a wall-bump.

This is harmless because the *next* evaluation will expose the difference: once values distinguish the interior from the corner, the wall-bumping actions become strictly worse and the following improvement drops them. **A greedy step is only ever as good as the values it is given, and policy iteration's guarantee is monotone improvement, not immediate correctness** — a tie broken badly costs one more round, not the answer.

**P3**

(a) Substituting the greedy policy into the one-sweep evaluation, the round's update at each state is

$$V_{k+1}(s) \leftarrow \max_a\left[r(s,a) + \gamma\sum_{s'}p(s'\mid s,a)V_k(s')\right].$$

The greedy step chooses the maximizing action and the evaluation sweep immediately applies it, so the two collapse into a single $\max$ and the policy never needs to be stored at all.

(b) **Value iteration** — the subject of [Lesson 1.6](01-06-value-iteration-and-convergence.md).

(c) The proof relied on completing a *full* evaluation each round, so that $V^{\pi_k}$ was the true value of $\pi_k$ and [Lesson 1.4](01-04-optimality-bellman-optimality.md)'s policy improvement theorem applied. With one sweep, $V_k$ is **not the value function of any policy** — it is a partly-updated estimate — so there is no $\pi_k$ whose value it is, and nothing licenses the claim $V^{\pi_{k+1}} \ge V^{\pi_k}$.

The "finitely many policies, each strictly better" argument therefore has no sequence of policies to run on. There is also no guarantee the implied greedy policy improves monotonically round to round, and in general it does not.

(d) What must be proved instead is that **the update itself converges to a unique fixed point**, from any starting $V_0$ — a statement about the map, not about any policy.

The property that supplies it is that the Bellman optimality operator is a **contraction in the max norm**, with modulus $\gamma$. The Banach fixed-point theorem then gives a unique fixed point and geometric convergence to it, and the fixed point is $V^*$ because the Bellman optimality equation is exactly the fixed-point condition. That is [Lesson 1.6](01-06-value-iteration-and-convergence.md), and it is the argument [`operations-research` 3.4](../../operations-research/lessons/03-04-stochastic-dynamic-programming.md) states without proving.

</details>

## Flashback

**From Lesson 1.1 (The RL problem):** An agent's episode produces the reward sequence $R_1 = 3$, $R_2 = -6$, $R_3 = 3$, $R_4 = -6$, repeating that four-step block forever.

(a) Compute $G_0$ at $\gamma = 0.9$. (Use the geometric-series structure rather than summing terms.)
(b) Compute $G_0$ at $\gamma = 0.5$.
(c) The agent may instead take a single action at $t=0$ that ends the episode immediately with reward $-4$. State which $\gamma$ of the two makes that the better choice, and why the answer is not obvious from the sign of the average reward.

<details>
<summary>Solution</summary>

(a) The block $(3,-6,3,-6)$ repeats with period $4$. Write $B(\gamma)$ for the discounted value of one block starting at its first reward:

$$B(\gamma) = 3 - 6\gamma + 3\gamma^2 - 6\gamma^3.$$

Since the whole stream is that block repeated, with each repetition discounted by $\gamma^4$,

$$G_0 = B(\gamma)\left(1 + \gamma^4 + \gamma^8 + \cdots\right) = \frac{B(\gamma)}{1-\gamma^4}.$$

At $\gamma = 0.9$: $\gamma^2 = 0.81$, $\gamma^3 = 0.729$, $\gamma^4 = 0.6561$.

$$B(0.9) = 3 - 5.4 + 2.43 - 4.374 = -4.344, \qquad G_0 = \frac{-4.344}{1 - 0.6561} = \frac{-4.344}{0.3439} \approx \mathbf{-12.63}.$$

(b) At $\gamma = 0.5$: $\gamma^2 = 0.25$, $\gamma^3 = 0.125$, $\gamma^4 = 0.0625$.

$$B(0.5) = 3 - 3 + 0.75 - 0.75 = 0, \qquad G_0 = \frac{0}{0.9375} = \mathbf{0}.$$

The block is worth exactly nothing at $\gamma = 0.5$ — the $+3$s and the $-6$s cancel precisely, since each $-6$ is discounted by one extra factor of $\tfrac12$ relative to the $+3$ before it.

(c) **At $\gamma = 0.9$** the immediate exit is better: $-4 > -12.63$. At $\gamma = 0.5$ it is worse: $-4 < 0$.

Why the sign of the average reward does not settle it: the undiscounted average reward per step is $\tfrac14(3 - 6 + 3 - 6) = -1.5$, negative at both discounts, which might suggest exiting is better in both cases. But the *first* reward in the block is the positive one, and discounting weights it most heavily. At $\gamma = 0.5$ that front-loading is strong enough to cancel the stream's long-run losses entirely; at $\gamma = 0.9$ it is not, and the accumulated losses dominate.

**The discount does not merely rescale the return — it reweights the order in which rewards arrive**, and a stream that is bad on average can be worth more than a fixed alternative when its good rewards come first. This is the same reversal as [Lesson 1.1](01-01-the-rl-problem.md)'s Example 1, with the crossover here somewhere between $0.5$ and $0.9$ rather than at a single computed root.

</details>

## Connections

- **Backward:** the evaluation sweep is [Lesson 1.3](01-03-value-functions-bellman-expectation.md)'s Bellman expectation equation turned into an assignment, and the improvement step is [Lesson 1.4](01-04-optimality-bellman-optimality.md)'s policy improvement theorem applied once per round. The termination proof rests entirely on that theorem's strictness clause.
- **Forward:** [Lesson 1.6](01-06-value-iteration-and-convergence.md) truncates evaluation to a single sweep and proves convergence by contraction instead of by policy counting. [Lesson 2.1](02-01-monte-carlo-prediction.md) replaces the full backup with an average of sampled returns, and [Lesson 2.2](02-02-monte-carlo-control.md) plugs that into this same evaluate–improve loop, at which point the loop becomes the *generalized* policy iteration that organizes the rest of the course.
- **Sideways:** the wedge diagram is a coordinate-descent picture — alternately minimizing over two coordinate blocks — and the same alternation appears as the E-step and M-step of [`machine-learning` 3.6](../../machine-learning/lessons/03-06-the-em-algorithm.md), with the same guarantee (monotone improvement) and the same failure mode (it finds a point where neither step moves, which need not be a global optimum when the problem is not an MDP).
