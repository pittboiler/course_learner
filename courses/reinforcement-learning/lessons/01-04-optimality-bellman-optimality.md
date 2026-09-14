# Reinforcement Learning · Lesson 1.4: Optimality and the Bellman optimality equation

> ⏱ ~15 min · Module 1: MDPs & Dynamic Programming · Builds on: [1.3 (value functions and the Bellman expectation equation)](01-03-value-functions-bellman-expectation.md) · Unlocks: [1.5 (policy evaluation and policy iteration)](01-05-policy-evaluation-and-policy-iteration.md), [1.6 (value iteration and convergence)](01-06-value-iteration-and-convergence.md)

## Why this matters

[Lesson 1.3](01-03-value-functions-bellman-expectation.md) ended with a tempting observation: the gridworld's random policy had $Q^\pi(s,\text{right}) = -1$ next to a state worth $-16$, so acting greedily on its own evaluation would obviously help. This lesson turns "obviously" into a theorem — and the theorem is less obvious than it looks, for a reason worth sitting with.

"Better" is not a total order. A policy is a whole *vector* of values, one per state, and two policies can each be better somewhere. Nothing in the definitions so far rules out an MDP where you must choose which states to be good at. That such an MDP does not exist — that one policy is simultaneously at least as good as every other, **in every state at once** — is a genuine theorem, and it is the reason the word "optimal" is well defined here at all.

## The idea

Order policies by domination: $\pi \ge \pi'$ means $V^\pi(s) \ge V^{\pi'}(s)$ **for every** $s$. This is a *partial* order — two policies can be incomparable, each winning in a different state.

The **optimal policy theorem** says the partial order nevertheless has a top element:

> There is a policy $\pi^*$ with $\pi^* \ge \pi$ for every $\pi$. It can be taken deterministic and stationary, and all such policies share the same value function $V^*$.

Three separate claims, and each could have failed. The existence of a simultaneous maximum is the surprising one; that it can be achieved without randomizing and without a clock is a bonus that makes the whole computational story possible.

Why it works, in one sentence: because the maximization at each state can be done **independently**, and stitching the per-state winners together gives a policy that is at least as good everywhere — which is exactly what the policy improvement theorem below proves.

## The formal version

**The optimal value functions.**

$$V^*(s) = \max_\pi V^\pi(s), \qquad\qquad Q^*(s,a) = \max_\pi Q^\pi(s,a)$$

In words: the best achievable value from $s$, and the best achievable value from $s$ given that you take $a$ first. *(card: [optimal value function](../reference.md#optimal-value-function))*

**The Bellman optimality equations.** Replace [Lesson 1.3](01-03-value-functions-bellman-expectation.md)'s average-over-$\pi$ with a maximum:

$$\boxed{\;V^*(s) = \max_a\left[r(s,a) + \gamma\sum_{s'} p(s'\mid s,a)\,V^*(s')\right]\;}$$

$$\boxed{\;Q^*(s,a) = r(s,a) + \gamma \sum_{s'} p(s'\mid s,a)\,\max_{a'} Q^*(s',a')\;}$$

In words: the value of a state is what the *best* action gets you; the value of an action is its reward plus the discounted value of acting best afterwards. *(card: [Bellman optimality equation](../reference.md#bellman-optimality-equation))*

Note where the $\max$ sits in the second equation — **inside** the expectation over $s'$. The agent gets to choose afresh in whatever state it lands in, so the max is taken after the environment has moved, not before. Writing $\max_{a'}$ outside the sum would be claiming the agent knows $s'$ before choosing $a'$, which it does not, and it gives a strictly larger and wrong answer.

**Reading a policy off.** The two are linked by $V^*(s) = \max_a Q^*(s,a)$, and

$$\pi^*(s) \in \arg\max_a\, Q^*(s,a)$$

is optimal. **Knowing $Q^*$ means the control problem is solved with no further computation** — one $\arg\max$ per state, no model needed. Knowing $V^*$ leaves you one step short: you still need $p$ and $r$ to compare actions. That asymmetry, first flagged in [Lesson 1.3](01-03-value-functions-bellman-expectation.md), is why Module 2 learns $Q$.

**The policy improvement theorem.** This is the engine. Let $\pi$ and $\pi'$ be policies with

$$Q^\pi\big(s, \pi'(s)\big) \ \ge\ V^\pi(s) \qquad \text{for every } s.$$

In words: at every state, doing what $\pi'$ would do — *once* — and then reverting to $\pi$ is no worse than just following $\pi$. Then $V^{\pi'}(s) \ge V^\pi(s)$ for every $s$: a single-step improvement is a whole-policy improvement.

**The proof is a telescoping argument**, and it is worth following once because the same unrolling appears in [Lesson 2.5](02-05-q-learning-off-policy-td-control.md) and again in [Lesson 4.3](04-03-ppo-a-taste.md). Apply the hypothesis repeatedly, each time expanding the $Q^\pi$ term by its definition and using the hypothesis again one step deeper:

$$V^\pi(s) \le Q^\pi(s,\pi'(s)) = \mathbb{E}_{\pi'}\big[R_{t+1} + \gamma V^\pi(S_{t+1}) \mid S_t = s\big]$$
$$\le \mathbb{E}_{\pi'}\big[R_{t+1} + \gamma\, Q^\pi(S_{t+1},\pi'(S_{t+1})) \mid S_t = s\big] = \mathbb{E}_{\pi'}\big[R_{t+1} + \gamma R_{t+2} + \gamma^2 V^\pi(S_{t+2}) \mid S_t=s\big]$$
$$\le \ \cdots\ \le\ \mathbb{E}_{\pi'}\big[R_{t+1} + \gamma R_{t+2} + \gamma^2 R_{t+3} + \cdots \mid S_t = s\big] = V^{\pi'}(s).$$

Each inequality substitutes "one more step of $\pi'$" for "revert to $\pi$ now", and the hypothesis says that never loses. In the limit every step is $\pi'$, and the $\gamma^k V^\pi$ remainder vanishes because $\gamma < 1$ and values are bounded. **What makes this work is that the hypothesis holds at *every* state** — the agent may land anywhere, and the argument needs the inequality wherever it lands.

**The greedy policy always satisfies the hypothesis.** If $\pi'(s) = \arg\max_a Q^\pi(s,a)$, then $Q^\pi(s,\pi'(s)) = \max_a Q^\pi(s,a) \ge \sum_a \pi(a\mid s)Q^\pi(s,a) = V^\pi(s)$, since a maximum is at least an average. So **being greedy with respect to your own value function never hurts, and the improvement is strict unless you were already greedy** — in which case $\max_a Q^\pi(s,a) = V^\pi(s)$ everywhere, which *is* the Bellman optimality equation, so $\pi$ was already optimal.

That last sentence is the whole of [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md) in advance: evaluate, be greedy, repeat, stop when nothing changes.

## Picture

![Left: a two-state Markov decision process drawn as two circles. State s1 has a self-loop and two actions, trade with reward 5 and idle with reward minus 1, both of which keep the agent in s1. State s2 has a self-loop for the hold action with reward minus 2, and an arrow to s1 for the move action with reward 5 which goes to s1 half the time. Right: a scatter plot whose axes are the value of s1 and the value of s2, with four policies plotted as points, dashed lines marking the dominance region above and to the right of policies A and B, and policy C sitting inside both regions](assets/01-04-fig1.svg)

The right panel is the partial order made geometric. A policy is a *point*, "better" means up-and-to-the-right, and incomparable policies are the ones neither of which is in the other's corner. The theorem says the set of achievable points always has a member in the corner of every other — here, $C$.

## Worked examples

**Example 1 (mechanical): incomparable policies, and the one that beats both.** The MDP in the figure, with $\gamma = \tfrac12$. In $s_1$ both actions keep you in $s_1$: *trade* pays $5$, *idle* pays $-1$. In $s_2$, *hold* pays $-2$ and stays; *move* pays $5$ and sends you to $s_1$ with probability $\tfrac12$, staying otherwise.

Since $s_1$ is absorbing, its value is an immediate geometric sum: $V(s_1) = r/(1-\gamma) = 2r$. So *trade* gives $V(s_1) = 10$ and *idle* gives $V(s_1) = -2$.

For $s_2$ under *hold*: $V(s_2) = -2 + \tfrac12 V(s_2) \Rightarrow V(s_2) = -4$. Under *move*, $V(s_2) = 5 + \tfrac12\big[\tfrac12 V(s_1) + \tfrac12 V(s_2)\big]$, which depends on what $s_1$ is worth. All four deterministic policies, written as (action in $s_1$, action in $s_2$):

| policy | $V(s_1)$ | $V(s_2)$ |
|---|---|---|
| $A$ = (trade, hold) | $10$ | $-4$ |
| $B$ = (idle, move) | $-2$ | $6$ |
| $C$ = (trade, move) | $10$ | $10$ |
| $D$ = (idle, hold) | $-2$ | $-4$ |

**$A$ and $B$ are incomparable**: $A$ wins in $s_1$ ($10 > -2$), $B$ wins in $s_2$ ($6 > -4$). Neither dominates, and if these were the only two policies the word "optimal" would have no referent. But $C$ beats both everywhere, and it is exactly "the better action in each state, chosen independently".

Verify $C$ against the Bellman optimality equation with $V^* = (10, 10)$:

$$\text{in } s_1:\ \max\{\underbrace{5 + \tfrac12(10)}_{\text{trade}} = 10,\ \underbrace{-1 + \tfrac12(10)}_{\text{idle}} = 4\} = 10 = V^*(s_1)\ \checkmark$$

$$\text{in } s_2:\ \max\{\underbrace{-2 + \tfrac12(10)}_{\text{hold}} = 3,\ \underbrace{5 + \tfrac12\left[\tfrac12(10)+\tfrac12(10)\right]}_{\text{move}} = 10\} = 10 = V^*(s_2)\ \checkmark$$

Both equations reproduce themselves, and the arg-maxes are *trade* and *move* — policy $C$.

**Example 2 (why you'd care): why the theorem is not free.** Look at what could have gone wrong. $B$'s choice in $s_2$ (*move*) is good **only because $s_1$ is worth something**: *move* pays its dividend by delivering the agent to $s_1$. But $B$ ruins $s_1$ by idling there. So $B$ is a policy whose good decision is undercut by its own bad one — the states are coupled, and a change of action in $s_1$ changes the value of $s_2$.

That coupling is precisely why the theorem has content. "Take the best action in each state" is not obviously well defined when the best action in $s_2$ depends on what you do in $s_1$, which in general depends back on $s_2$. In a two-player game, or under partial observability ([Lesson 1.2](01-02-markov-decision-processes.md), P3), the analogous stitching genuinely fails and no dominating deterministic policy need exist.

What rescues the MDP case is the policy improvement theorem: it does not ask you to guess the right combination, only to be greedy with respect to a *consistent* evaluation $V^\pi$ — one that already accounts for the coupling, because $V^\pi$ was computed with the whole policy in place. **The evaluation absorbs the interaction between states, and greedy improvement on top of it is then safe.** Run it here: start from $D = $ (idle, hold), whose values are $(-2,-4)$. Greedy in $s_1$: $\max\{5 + \tfrac12(-2), -1 + \tfrac12(-2)\} = \max\{4,-2\}$, so *trade*. Greedy in $s_2$: $\max\{-2+\tfrac12(-4),\ 5 + \tfrac12[\tfrac12(-2)+\tfrac12(-4)]\} = \max\{-4, 3.5\}$, so *move*. One sweep from the worst policy lands on $C$, the optimal one.

## Watch out

- **You might think** an optimal policy is unique — **but actually** only $V^*$ and $Q^*$ are. Ties in the $\arg\max$ give several optimal policies, and every one of them achieves $V^*$; in the gridworld of [Lesson 1.3](01-03-value-functions-bellman-expectation.md) most cells have two optimal actions. Uniqueness of the *value* is what the algorithms of [Lesson 1.6](01-06-value-iteration-and-convergence.md) converge to; uniqueness of the policy is not on offer and is not needed.
- **You might think** $\max_a$ can be moved outside the sum over $s'$ in the $Q^*$ equation — **but actually** that computes the value of knowing the future before choosing, which is strictly larger and is not achievable. The gap between the two is the **value of information**, and it is exactly what a planning agent does *not* get. Keep the max inside.
- **You might think** the policy improvement theorem says greedy improvement gets you to optimal in one step — **but actually** it says only that the new policy is no worse. One step sufficed in both examples here because they are tiny; in general you must re-evaluate and be greedy again, which is [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md)'s policy iteration. The theorem guarantees monotone progress, not immediate arrival.

## One-liner

> Being greedy with respect to an honest evaluation of your own policy never makes it worse — and the only policy that cannot be improved this way is one that already satisfies the Bellman optimality equation.

## Problems

**P1 (🟢)** Using the MDP of Example 1 ($\gamma = \tfrac12$, values $V^* = (10,10)$):

(a) Compute $Q^*(s_1,\text{trade})$, $Q^*(s_1,\text{idle})$, $Q^*(s_2,\text{hold})$ and $Q^*(s_2,\text{move})$.
(b) State the greedy policy from your $Q^*$ table and confirm it is $C$.
(c) Verify $V^*(s) = \max_a Q^*(s,a)$ at both states.

**P2 (🟡)** Start from policy $A = (\text{trade}, \text{hold})$, whose value is $V^A = (10, -4)$.

(a) Compute $Q^A(s_2, \text{hold})$ and $Q^A(s_2,\text{move})$.
(b) State the greedy policy $\pi'$ with respect to $V^A$.
(c) The policy improvement theorem guarantees $V^{\pi'} \ge V^A$ at *every* state. Verify this numerically using the table in Example 1, and state by how much each state improved.
(d) Explain why the improvement at $s_1$ is zero even though the policy changed.

**P3 (🔴)** An engineer proposes a shortcut: rather than evaluating $\pi$ and then being greedy, just pick, at each state independently, the action with the largest **immediate reward** $r(s,a)$ — a "greedy on reward" policy.

(a) Apply this rule to the MDP of Example 1 and state the resulting policy and its value.
(b) State whether it is optimal here.
(c) Construct a two-state MDP where greedy-on-reward is strictly worse than optimal at some state, and give both values. (You may reuse the structure of Example 1 with different rewards.)
(d) State in one sentence the precise hypothesis of the policy improvement theorem that greedy-on-reward fails to satisfy.

<details>
<summary>Solutions</summary>

**P1**

(a) Using $Q^*(s,a) = r(s,a) + \gamma\sum_{s'}p(s'\mid s,a)V^*(s')$ with $V^* = (10,10)$ and $\gamma = \tfrac12$:

| $(s,a)$ | computation | $Q^*$ |
|---|---|---|
| $(s_1,\text{trade})$ | $5 + \tfrac12(10)$ | $\mathbf{10}$ |
| $(s_1,\text{idle})$ | $-1 + \tfrac12(10)$ | $\mathbf{4}$ |
| $(s_2,\text{hold})$ | $-2 + \tfrac12(10)$ | $\mathbf{3}$ |
| $(s_2,\text{move})$ | $5 + \tfrac12\big[\tfrac12(10) + \tfrac12(10)\big]$ | $\mathbf{10}$ |

(b) $\arg\max$ at $s_1$ is **trade**; at $s_2$ it is **move**. That is policy $C$. ✓

(c) $\max\{10,4\} = 10 = V^*(s_1)$ ✓ and $\max\{3,10\} = 10 = V^*(s_2)$ ✓.

**P2**

(a) With $V^A = (10,-4)$:

$$Q^A(s_2,\text{hold}) = -2 + \tfrac12(-4) = \mathbf{-4}, \qquad Q^A(s_2,\text{move}) = 5 + \tfrac12\big[\tfrac12(10) + \tfrac12(-4)\big] = 5 + \tfrac12(3) = \mathbf{6.5}.$$

(b) At $s_2$, *move* wins ($6.5 > -4$). At $s_1$: $Q^A(s_1,\text{trade}) = 5 + \tfrac12(10) = 10$ and $Q^A(s_1,\text{idle}) = -1 + \tfrac12(10) = 4$, so *trade* stays. Hence $\pi' = (\text{trade}, \text{move}) = C$.

(c) $V^{\pi'} = V^C = (10, 10)$ against $V^A = (10,-4)$:

- $s_1$: $10 \ge 10$, improvement $\mathbf{0}$.
- $s_2$: $10 \ge -4$, improvement $\mathbf{14}$.

Both are non-negative, as the theorem requires.

(d) Because $\pi'$ and $A$ **agree at $s_1$** — both play *trade* — and $s_1$ is absorbing, so from $s_1$ the two policies generate identical trajectories and identical returns. The policy changed only at $s_2$, and $s_2$ is unreachable from $s_1$.

The general principle worth taking away: a policy change improves a state's value only if the changed state is reachable from it. Here the improvement is quarantined in $s_2$; had $s_1$ been able to reach $s_2$, the $+14$ would have propagated back into $V(s_1)$ as well.

**P3**

(a) Largest immediate reward: at $s_1$, *trade* ($5 > -1$); at $s_2$, *move* ($5 > -2$). That is policy $C = (\text{trade},\text{move})$, with value $(10,10)$.

(b) **Yes, optimal here** — by coincidence. The rewards happen to point the same way as the values.

(c) *Accept criterion: any MDP in which the action with the larger immediate reward at some state has the smaller $Q^*$ there. A single state suffices.*

Keep the structure of Example 1 ($\gamma = \tfrac12$, $s_1$ absorbing) and change two numbers: let *trade* in $s_1$ pay $5$ and *idle* pay $-1$ as before, but in $s_2$ let **hold pay $+4$ and stay**, and **move pay $0$ and go to $s_1$ with probability $1$**.

Greedy-on-reward picks *hold* at $s_2$ ($4 > 0$), giving $V(s_2) = 4 + \tfrac12 V(s_2) = \mathbf{8}$.

The alternative picks *move*, giving $V(s_2) = 0 + \tfrac12 V(s_1) = \tfrac12(10) = \mathbf{5}$ — so here *hold* is genuinely better and the rule still wins. Push it further: make *trade* in $s_1$ pay $\mathbf{20}$, so $V(s_1) = 40$. Now greedy-on-reward still picks *hold* at $s_2$ (since $4 > 0$) for $V(s_2) = 8$, while *move* gives $V(s_2) = \tfrac12(40) = \mathbf{20}$.

**Greedy-on-reward: $V(s_2) = 8$. Optimal: $V(s_2) = 20$.** The rule sacrifices a gateway to a rich state for a small immediate payout, and loses $12$ at $s_2$. (Values at $s_1$ agree at $40$, since both policies play *trade* there.)

(d) Greedy-on-reward maximizes $r(s,a)$, whereas the theorem's hypothesis requires maximizing $Q^\pi(s,a) = r(s,a) + \gamma\sum_{s'}p(s'\mid s,a)V^\pi(s')$ — **it drops the discounted continuation term, so it is greedy with respect to a function that is not any policy's value function**, and the theorem simply does not apply.

Equivalently: greedy-on-reward is greedy with respect to $V \equiv 0$, which is the value function of no policy in this MDP, and being greedy on a wrong evaluation carries no guarantee whatsoever. It is exactly the $\gamma = 0$ myopia of [Lesson 1.1](01-01-the-rl-problem.md), applied at every state.

</details>

## Flashback

**From Lesson 1.3 (Value functions and the Bellman expectation equation):** A three-state chain has states $L$, $M$, $N$ with $\gamma = 0.5$. State $N$ is terminal (value $0$). From $M$, the only action moves to $N$ with reward $+6$. From $L$, the policy $\pi$ takes *forward* with probability $0.75$ (reward $-2$, moves to $M$) and *wait* with probability $0.25$ (reward $+1$, stays at $L$).

(a) Compute $V^\pi(M)$.
(b) Compute $Q^\pi(L,\text{forward})$ and $Q^\pi(L,\text{wait})$ in terms of $V^\pi(L)$, then solve for $V^\pi(L)$.
(c) Check your answer with $V^\pi(L) = \sum_a \pi(a\mid L)Q^\pi(L,a)$.
(d) State which action is greedy at $L$, and what the policy improvement theorem then guarantees about the policy "always forward".

<details>
<summary>Solution</summary>

(a) From $M$ the single action earns $+6$ and terminates, so

$$V^\pi(M) = 6 + 0.5(0) = \mathbf{6}.$$

(b) The two action-values:

$$Q^\pi(L,\text{forward}) = -2 + 0.5\,V^\pi(M) = -2 + 3 = \mathbf{1}, \qquad Q^\pi(L,\text{wait}) = 1 + 0.5\,V^\pi(L).$$

The Bellman expectation equation at $L$:

$$V^\pi(L) = 0.75(1) + 0.25\big(1 + 0.5\,V^\pi(L)\big) = 0.75 + 0.25 + 0.125\,V^\pi(L) = 1 + 0.125\,V^\pi(L)$$

so $0.875\,V^\pi(L) = 1$ and $V^\pi(L) = \dfrac{1}{0.875} = \dfrac{8}{7} \approx \mathbf{1.143}$.

(c) With $V^\pi(L) = 8/7$ we get $Q^\pi(L,\text{wait}) = 1 + 0.5(8/7) = 1 + 4/7 = 11/7$. Then

$$0.75(1) + 0.25\left(\tfrac{11}{7}\right) = \tfrac{3}{4} + \tfrac{11}{28} = \tfrac{21 + 11}{28} = \tfrac{32}{28} = \tfrac{8}{7}. \checkmark$$

(d) **The greedy action at $L$ is *wait***, since $11/7 \approx 1.571 > 1 = Q^\pi(L,\text{forward})$.

So the policy improvement theorem guarantees nothing good about "always forward" — it points the other way. Being greedy here means *waiting more*, and the improved policy "always wait" has value

$$V(L) = 1 + 0.5\,V(L) \quad\Longrightarrow\quad V(L) = \mathbf{2},$$

which indeed beats $8/7$. That is also optimal, since $Q^*(L,\text{forward}) = -2 + 0.5(6) = 1 < 2$.

Worth noticing why the "obvious" answer is wrong: *forward* is the action that makes progress toward the $+6$, and it is still a loser. With $\gamma = 0.5$ the $+6$ arrives two steps away and is discounted to $1.5$, against a cost of $2$ to set off — while *wait* collects $+1$ every single step forever. **Heavy discounting can make a standing reward beat a distant prize**, which is the crossover computed in [Lesson 1.1](01-01-the-rl-problem.md)'s Example 1 showing up again in a control problem.

</details>

## Connections

- **Backward:** the $\max$ here replaces the policy-average of [Lesson 1.3](01-03-value-functions-bellman-expectation.md)'s expectation equation, and that one substitution is the whole difference between prediction and control. The telescoping proof reuses the one-step split $G_t = R_{t+1} + \gamma G_{t+1}$ of [Lesson 1.1](01-01-the-rl-problem.md).
- **Forward:** [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md) turns the policy improvement theorem into the policy-iteration algorithm, and [Lesson 1.6](01-06-value-iteration-and-convergence.md) shows the optimality equation is a contraction so that iterating it converges. From [Lesson 2.4](02-04-sarsa-on-policy-td-control.md) onward, the $\arg\max_a Q$ here becomes the target that off-policy methods bootstrap from, and the difference between using $\max_a$ and using the action actually taken is exactly what separates [Q-learning](02-05-q-learning-off-policy-td-control.md) from [SARSA](02-04-sarsa-on-policy-td-control.md).
- **Sideways:** the Bellman optimality equation written here for known dynamics is the one solved in [`operations-research` 3.4](../../operations-research/lessons/03-04-stochastic-dynamic-programming.md), and its continuous-time analogue is the Hamilton–Jacobi–Bellman equation of optimal control. The "maximum beats the average" step that makes greedy improvement work is the same inequality that drives [`grad-macro` 1.2](../../grad-macro/lessons/01-02-principle-of-optimality.md)'s principle of optimality.
