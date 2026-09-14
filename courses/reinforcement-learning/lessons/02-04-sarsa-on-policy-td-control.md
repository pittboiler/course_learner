# Reinforcement Learning · Lesson 2.4: SARSA — on-policy TD control

> ⏱ ~15 min · Module 2: Model-Free Prediction & Control · Builds on: [2.2 (Monte Carlo control)](02-02-monte-carlo-control.md), [2.3 (temporal-difference learning)](02-03-temporal-difference-learning-td0.md) · Unlocks: [2.5 (Q-learning)](02-05-q-learning-off-policy-td-control.md), [2.7 (n-step returns and the λ-return)](02-07-n-step-returns-and-the-lambda-return.md)

## Why this matters

Two pieces are now on the table. [Lesson 2.2](02-02-monte-carlo-control.md) has the control loop: learn $Q$, act $\varepsilon$-greedily, improve after every episode. [Lesson 2.3](02-03-temporal-difference-learning-td0.md) has a prediction method that learns online with a fraction of the variance. SARSA is what you get by putting the second inside the first — and it is the first algorithm in this course that a practitioner would actually deploy.

It also forces a distinction that the rest of the course turns on. When TD bootstraps in a *control* setting, it must bootstrap from *some* action's value at the next state. SARSA uses the action the agent genuinely went on to take. [Lesson 2.5](02-05-q-learning-off-policy-td-control.md) uses the best one instead. One symbol separates them, and it changes what the algorithm converges to, how it behaves near danger, and whether it can learn from someone else's data.

## The idea

Replace the Monte Carlo return in [Lesson 2.2](02-02-monte-carlo-control.md)'s update with [Lesson 2.3](02-03-temporal-difference-learning-td0.md)'s one-step target, applied to $Q$ instead of $V$:

$$\underbrace{G_t}_{\text{MC: the whole episode}} \quad\longrightarrow\quad \underbrace{R_{t+1} + \gamma\,Q(S_{t+1}, A_{t+1})}_{\text{SARSA: one step, then bootstrap}}$$

The name is the data it consumes: the quintuple $(S_t, A_t, R_{t+1}, S_{t+1}, A_{t+1})$ — **S, A, R, S, A**.

The essential point is buried in that last symbol. $A_{t+1}$ is the action the $\varepsilon$-greedy policy *actually selected*, which some of the time is a random one. So the value SARSA learns includes the cost of the agent's own exploration:

> SARSA evaluates the policy the agent is really running, clumsiness and all — not an idealized version of it.

That makes it **on-policy**: the policy generating the data is the policy being improved. The consequence, which [Lesson 2.5](02-05-q-learning-off-policy-td-control.md) makes vivid, is that SARSA learns to be *careful* — it will route around hazards that only hurt when exploration misfires, because to SARSA those costs are real.

## The formal version

**The update.**

$$Q(S_t,A_t) \leftarrow Q(S_t,A_t) + \alpha\big[R_{t+1} + \gamma\,Q(S_{t+1},A_{t+1}) - Q(S_t,A_t)\big]$$

with $Q(\text{terminal}, \cdot) = 0$. *(card: [SARSA](../reference.md#sarsa))*

**The loop.** For each episode: initialize $S$; choose $A$ $\varepsilon$-greedily from $Q$; then repeat — take $A$, observe $R$ and $S'$, **choose $A'$ $\varepsilon$-greedily from $Q$**, apply the update, and set $S \leftarrow S'$, $A \leftarrow A'$. The next action must be selected *before* the update, because the update needs it.

Note that $A'$ is chosen once and used twice: as the bootstrap target now, and as the action actually taken next. **That single reuse is the entire meaning of "on-policy."** In [Lesson 2.5](02-05-q-learning-off-policy-td-control.md) the two roles come apart.

**Convergence.** SARSA converges to $Q^*$ with probability $1$ provided:

1. every state–action pair is visited infinitely often;
2. the policy is **GLIE** — greedy in the limit with infinite exploration ([Lesson 2.2](02-02-monte-carlo-control.md)), e.g. $\varepsilon_k = 1/k$;
3. the step sizes satisfy Robbins–Monro: $\sum_k\alpha_k = \infty$, $\sum_k\alpha_k^2 < \infty$.

**Condition 2 is the one people drop, and dropping it changes the answer.** With $\varepsilon$ held fixed, SARSA converges not to $Q^*$ but to the action-value function of the best $\varepsilon$-soft policy — precisely the ceiling computed in [Lesson 2.2](02-02-monte-carlo-control.md). That is not a defect: if the deployed agent will keep exploring, the best $\varepsilon$-soft policy is the right target. It is only a defect if you meant to learn $Q^*$.

**Expected SARSA.** A useful variant replaces the sampled $Q(S_{t+1},A_{t+1})$ with its expectation under the policy:

$$Q(S_t,A_t) \leftarrow Q(S_t,A_t) + \alpha\Big[R_{t+1} + \gamma\sum_{a}\pi(a\mid S_{t+1})\,Q(S_{t+1},a) - Q(S_t,A_t)\Big]$$

This removes the variance due to the random choice of $A_{t+1}$ while keeping the same expected update, so it is strictly better-behaved at a modest extra cost per step — and it is the bridge to [Lesson 2.5](02-05-q-learning-off-policy-td-control.md), since replacing $\pi$ with the greedy policy turns the sum into a $\max$ and Expected SARSA into Q-learning.

## Picture

![Left: the SARSA backup diagram, a vertical chain from a solid state-action dot labelled S comma A, through a small reward dot labelled R, to a hollow next-state circle labelled S prime, and then to a second solid dot labelled A prime, annotated that A prime is the action the policy really chose and is sometimes a random one, with a note that there is one sample, one branch and no maximum anywhere. Right: a plot of episodes completed against time steps on the windy gridworld, with a blue curve for fixed epsilon of 0.1 that completes more episodes and a coral curve for epsilon equal to one over k that is slower but ends optimal](assets/02-04-fig1.svg)

Compare the left panel with [Lesson 1.3](01-03-value-functions-bellman-expectation.md)'s $Q^\pi$ backup: the same shape, with every branch replaced by a single sampled edge. SARSA is that diagram, sampled.

## Worked examples

**Example 1 (mechanical): one SARSA update, and how it differs from the alternatives.** An agent in state $s$ takes action $a$, receives $R = 2$, lands in $s'$, and then selects $a'$. The current estimates are

$$Q(s,a) = 1, \qquad Q(s',a_1) = 10, \qquad Q(s',a_2) = 3,$$

with $\gamma = 0.9$, $\alpha = 0.5$, and an $\varepsilon$-greedy policy with $\varepsilon = 0.2$ over two actions.

Suppose exploration fires and the agent selects $a' = a_2$, the worse action. SARSA's target is

$$R + \gamma Q(s',a_2) = 2 + 0.9(3) = 4.7 \quad\Longrightarrow\quad Q(s,a) \leftarrow 1 + 0.5(4.7 - 1) = \mathbf{2.85}.$$

Three alternatives on the *same* transition:

| method | target | new $Q(s,a)$ |
|---|---|---|
| SARSA (took $a_2$) | $2 + 0.9(3) = 4.7$ | $2.85$ |
| SARSA (had it taken $a_1$) | $2 + 0.9(10) = 11$ | $6.0$ |
| Expected SARSA | $2 + 0.9[0.9(10) + 0.1(3)] = 2 + 0.9(9.3) = 10.37$ | $5.685$ |
| Q-learning ([2.5](02-05-q-learning-off-policy-td-control.md)) | $2 + 0.9\max\{10,3\} = 11$ | $6.0$ |

The $\varepsilon$-greedy weights for Expected SARSA are $1 - 0.2 + 0.2/2 = 0.9$ on the greedy action $a_1$ and $0.2/2 = 0.1$ on $a_2$.

**SARSA's answer depends on a coin flip; Expected SARSA's does not.** SARSA would have given $6.0$ had the coin landed the other way, so its update has a spread of more than three units caused purely by the policy's randomness. Expected SARSA averages that away and sits where SARSA's updates sit *on average* ($0.9(6.0) + 0.1(2.85) = 5.685$ ✓), with none of the noise. And Q-learning ignores the policy entirely, giving what SARSA would give if exploration never happened.

**Example 2 (why you'd care): the windy gridworld, and what GLIE actually costs.** A $7\times10$ grid with a start, a goal, and an upward wind whose strength varies by column ($0,0,0,1,1,1,2,2,1,0$). Every move costs $-1$, $\gamma = 1$, and the wind shifts the agent up by the column's strength in addition to its own move. The shortest path takes **15 steps**.

Run SARSA with $\alpha = 0.5$ for $8000$ time steps, $30$ runs, under two exploration schedules:

| schedule | episodes finished in 8000 steps | greedy path length at the end (median over 30 runs) |
|---|---|---|
| $\varepsilon = 0.1$ fixed | $161.6$ | $16$ |
| $\varepsilon_k = 1/k$ (GLIE) | $72.3$ | $\mathbf{15}$ — optimal |

**The GLIE agent finished fewer than half as many episodes and ended up with the better policy.** Both halves of that sentence are the point.

The fixed-$\varepsilon$ agent is efficient from the start — $\varepsilon = 0.1$ is never very wasteful — and it converges quickly to a policy that is *one step off* optimal. It is stuck there: it is converging to the best $\varepsilon$-soft policy, and with wind and a fixed exploration rate that is not the 15-step path.

The GLIE agent begins with $\varepsilon_1 = 1$ — pure random walking — and its first episodes are enormous. That is a real cost, visible as the shallow early slope on the figure's coral curve. But its exploration decays to nothing, so its limit is $Q^*$, and by $8000$ steps it has found the 15-step path.

**The right choice depends on what the number of episodes is for.** If the agent is learning in simulation and only the final policy matters, decay $\varepsilon$. If it is learning on a real system where every episode is a real cost, the fixed-$\varepsilon$ agent's cheaper start may be worth its slightly worse ceiling. This is the same trade-off as [Lesson 2.2](02-02-monte-carlo-control.md)'s P3, now measured on a real task.

## Watch out

- **You might think** SARSA's $A_{t+1}$ is just a sampling detail that averages out — **but actually** it is the definition of what the algorithm learns. Because $A_{t+1}$ is drawn from the $\varepsilon$-greedy policy, the exploratory actions and their consequences are baked into $Q$, so SARSA's $Q$ is the value of *exploring while acting*, not the value of acting well. On the cliff of [Lesson 2.5](02-05-q-learning-off-policy-td-control.md) this produces a visibly different, and safer, policy.
- **You might think** you can pick $A'$ after doing the update, since it is the next iteration's action anyway — **but actually** the update *needs* $A'$, so it must be selected first, and the same selection must then be used. Re-sampling a fresh action for the next step would break the on-policy property and, worse, would make the agent evaluate one action while taking another.
- **You might think** a fixed $\varepsilon$ is a minor approximation to GLIE — **but actually** it changes the fixed point, not just the rate. Fixed-$\varepsilon$ SARSA converges to something that is genuinely not $Q^*$, and running it longer does not close the gap. The windy gridworld shows a one-step penalty; the cliff in [Lesson 2.5](02-05-q-learning-off-policy-td-control.md) shows a much larger one.

## One-liner

> Bootstrap from the action you actually took next, and you learn the value of the policy you are actually running — exploration mistakes included.

## Problems

**P1 (🟢)** An agent uses SARSA with $\gamma = 1$, $\alpha = 0.5$, all $Q$ initialized to $0$, on the episode

$$(s_1, \text{a}, R{=}2, s_2),\quad (s_2, \text{b}, R{=}3, \text{terminal}).$$

The action selected at $s_2$ was $\text{b}$.

(a) Compute the update for $(s_1, \text{a})$, giving the target explicitly.
(b) Compute the update for $(s_2,\text{b})$.
(c) State what $Q(s_1,\text{a})$ would become if the *same* episode were replayed a second time with the updated values.
(d) Explain why the first episode taught $(s_1,\text{a})$ nothing about the $+3$.

**P2 (🟡)** Using Example 1's numbers ($Q(s,a)=1$, $Q(s',a_1)=10$, $Q(s',a_2)=3$, $R=2$, $\gamma = 0.9$, $\alpha = 0.5$, $\varepsilon = 0.2$, two actions):

(a) Compute the expected SARSA target under the $\varepsilon$-greedy policy, and confirm it matches the table.
(b) Compute the variance of SARSA's target across the two possible choices of $a'$.
(c) State the variance of Expected SARSA's target, and explain the difference in one sentence.
(d) Now let $\varepsilon \to 0$. State what Expected SARSA's target tends to, and which algorithm it becomes.

**P3 (🔴)** An engineer runs fixed-$\varepsilon$ SARSA ($\varepsilon = 0.1$) on a task, is satisfied with the learned $Q$, and deploys the agent with exploration **switched off** — acting fully greedily with respect to the learned $Q$.

(a) State whether the deployed greedy policy is optimal for the task, and why the answer is not simply "yes, greedy on $Q$ is optimal".
(b) Give a qualitative description of a task where this deployment would perform *better* than the agent did during training, and one where it would perform *worse*.
(c) In the trap MDP of [Lesson 2.2](02-02-monte-carlo-control.md) (action $A$ gives $+1$ and terminates; action $B$ gives $0$ then $+10$ and terminates), compute what fixed-$\varepsilon$ SARSA converges to for both action-values, and what the deployed greedy policy then earns.
(d) State the general lesson about the relationship between the policy you train under and the policy you deploy.

<details>
<summary>Solutions</summary>

**P1**

(a) The target is $R + \gamma Q(s_2, \text{b}) = 2 + 1(0) = 2$, since $Q(s_2,\text{b})$ is still $0$ when this update is made.

$$Q(s_1,\text{a}) \leftarrow 0 + 0.5(2 - 0) = \mathbf{1}.$$

(b) $s_2$'s successor is terminal, so the target is $3 + 1(0) = 3$:

$$Q(s_2,\text{b}) \leftarrow 0 + 0.5(3 - 0) = \mathbf{1.5}.$$

(c) Replaying with $Q(s_1,\text{a}) = 1$ and $Q(s_2,\text{b}) = 1.5$, the first update's target is now $2 + 1.5 = 3.5$:

$$Q(s_1,\text{a}) \leftarrow 1 + 0.5(3.5 - 1) = \mathbf{2.25}.$$

(d) Because the update for $(s_1,\text{a})$ was applied **before** $Q(s_2,\text{b})$ had been touched, so it bootstrapped from $Q(s_2,\text{b}) = 0$ — an estimate that knew nothing about the $+3$ waiting there.

This is [Lesson 2.3](02-03-temporal-difference-learning-td0.md)'s "one step per episode" propagation, in control form: reward information moves backwards one state per pass. (Updating in reverse order within the episode would fix it here, and the general fix is the eligibility traces of [Lesson 2.8](02-08-eligibility-traces-backward-view.md), which credit the whole recent trajectory at once.)

**P2**

(a) $\varepsilon$-greedy with $\varepsilon = 0.2$ over two actions puts $1 - 0.2 + 0.1 = 0.9$ on the greedy $a_1$ and $0.1$ on $a_2$:

$$2 + 0.9\big[0.9(10) + 0.1(3)\big] = 2 + 0.9(9 + 0.3) = 2 + 0.9(9.3) = 2 + 8.37 = \mathbf{10.37}\ \checkmark$$

(b) SARSA's target is $11$ with probability $0.9$ and $4.7$ with probability $0.1$. The mean is $0.9(11) + 0.1(4.7) = 9.9 + 0.47 = 10.37$ (matching (a), as it must). The variance:

$$0.9(11 - 10.37)^2 + 0.1(4.7-10.37)^2 = 0.9(0.3969) + 0.1(32.1489) = 0.3572 + 3.2149 = \mathbf{3.572}.$$

(c) **Zero.** Expected SARSA's target is a deterministic function of $S_{t+1}$ and the current $Q$ — the policy's randomness has been integrated out rather than sampled, so no coin flip enters the target at all.

(This eliminates only the variance from choosing $A_{t+1}$; variance from the random reward $R_{t+1}$ and the random transition to $S_{t+1}$ remains in both methods.)

(d) As $\varepsilon \to 0$ the policy weights tend to $1$ on the greedy action and $0$ elsewhere, so

$$\sum_a \pi(a\mid s')Q(s',a) \ \longrightarrow\ \max_a Q(s',a) = 10,$$

and the target tends to $2 + 0.9(10) = 11$. **That is Q-learning's target** — Expected SARSA with a greedy target policy *is* Q-learning, which is [Lesson 2.5](02-05-q-learning-off-policy-td-control.md)'s subject and the cleanest way to see that the two algorithms are one family.

**P3**

(a) **Not in general.** Greedy with respect to $Q^*$ is optimal, but fixed-$\varepsilon$ SARSA does not converge to $Q^*$ — it converges to $Q^{\pi_\varepsilon}$, the action-values of the best $\varepsilon$-soft policy. Acting greedily on *that* gives the policy that is best assuming you will continue to explore, deployed in a setting where you will not.

(b) *Accept criterion: the "better" case must be one where exploration was costly and the greedy path is safe; the "worse" case must be one where the learned values relied on exploration actually happening.*

**Better:** a task with a hazard adjacent to the optimal route — the cliff of [Lesson 2.5](02-05-q-learning-off-policy-td-control.md). SARSA learned a detour because random actions near the edge were expensive. With exploration off, the detour is unnecessary, so the deployed agent walks it safely but takes more steps than it needs. If instead the detour is only mildly longer and the greedy policy near the hazard is now safe, turning exploration off removes the falls entirely and performance improves sharply over training.

**Worse:** a task where the agent must reach several distinct goals, or where the environment drifts. Exploration was the mechanism keeping the value estimates fresh and the agent's coverage broad; removing it freezes the policy, and a greedy agent following a stale $Q$ in a changed world never discovers the change. The trap MDP of [Lesson 2.2](02-02-monte-carlo-control.md) is the extreme case, and (c) makes it quantitative.

(c) With $\gamma = 1$, both actions terminate the episode or lead to a state with a single action, so bootstrapping does not enter and SARSA's estimates converge to the true returns of each action:

$$Q(s,A) \to 1, \qquad Q(s,B) \to 0 + 10 = 10.$$

Fixed $\varepsilon$ guarantees $B$ is sampled ($\varepsilon/2 = 0.05$ of the time), so $Q(s,B)$ does converge to $10$ rather than staying stuck. The deployed greedy policy therefore plays $B$ and earns $\mathbf{10}$ — better than the $9.55$ it averaged during training, because it no longer pays the exploration tax.

**So here, deployment-without-exploration helps.** The reason is that nothing in this MDP punishes the agent for an exploratory action *beyond the reward forgone on that step* — there is no hazard whose cost SARSA had to route around. The cliff is the counterexample, and comparing the two is the cleanest way to see what SARSA's on-policy values actually encode.

(d) **The policy you train under determines what your value function means, so it must match the policy you deploy — or you must know precisely how they differ.**

On-policy methods learn the value of the behaviour policy; if you then deploy something else, the values you optimized are values of a policy nobody is running. The clean solutions are either to deploy the same $\varepsilon$ you trained with, to decay $\varepsilon$ to zero during training so the two coincide in the limit (GLIE), or to use an **off-policy** method that deliberately learns about the greedy policy while behaving exploratorily — which is exactly the separation [Lesson 2.5](02-05-q-learning-off-policy-td-control.md) introduces and [Lesson 2.6](02-06-off-policy-learning-importance-sampling.md) formalizes.

</details>

## Flashback

**From Lesson 2.2 (Monte Carlo control):** An agent runs $\varepsilon$-greedy Monte Carlo control with $\varepsilon = 0.25$ in a state $s$ with three actions, having learned $Q(s,a_1) = 8$, $Q(s,a_2) = 6$, $Q(s,a_3) = -2$.

(a) Write the three action probabilities.
(b) Compute $\sum_a \pi(a\mid s)Q(s,a)$, the expected value of one selection.
(c) Compute the exploration cost — how far this falls short of $\max_a Q(s,a)$.
(d) A colleague proposes cutting the cost by removing $a_3$ from the action set, since it is clearly bad. State the risk in one sentence, and name the situation in which the colleague would be right.

<details>
<summary>Solution</summary>

(a) With $|\mathcal{A}| = 3$ and $\varepsilon = 0.25$, each action carries a floor of $\varepsilon/3 = 1/12$, and the greedy action $a_1$ additionally gets $1 - \varepsilon = 0.75$:

$$\pi(a_1\mid s) = 0.75 + \tfrac{1}{12} = \tfrac{5}{6} \approx \mathbf{0.8333}, \qquad \pi(a_2\mid s) = \pi(a_3\mid s) = \tfrac{1}{12} \approx \mathbf{0.0833}.$$

Check: $\tfrac56 + \tfrac1{12} + \tfrac1{12} = \tfrac{10+1+1}{12} = 1$ ✓

(b)

$$\tfrac56(8) + \tfrac1{12}(6) + \tfrac1{12}(-2) = \tfrac{40}{6} + \tfrac{6}{12} - \tfrac{2}{12} = 6.6\overline{6} + 0.5 - 0.1\overline{6} = \mathbf{7.0}.$$

(c) $\max_a Q(s,a) = 8$, so the exploration cost is $8 - 7 = \mathbf{1.0}$ per selection.

Most of it comes from $a_3$: the $\tfrac1{12}$ chance of taking an action worth $-2$ instead of $8$ costs $\tfrac1{12}(10) = 0.8\overline{3}$, while $a_2$ costs only $\tfrac1{12}(2) = 0.1\overline{6}$. **Uniform exploration spends the same effort on an obviously terrible action as on a nearly-tied one**, which is its central inefficiency and precisely what [Lesson 4.4](04-04-bandits-and-principled-exploration.md)'s directed methods fix.

(d) **The risk is that $Q(s,a_3) = -2$ is an estimate, and removing $a_3$ makes it permanent** — the agent can never collect the evidence that would revise it, which is exactly the self-sealing failure of [Lesson 2.2](02-02-monte-carlo-control.md)'s Example 1 reintroduced deliberately.

The colleague is right when $a_3$'s value is known rather than estimated — a hard constraint from domain knowledge (an action that is physically unsafe, or illegal, or known by construction to be dominated). Pruning on *knowledge* shrinks the problem for free; pruning on *current estimates* is the mistake exploration exists to prevent.

</details>

## Connections

- **Backward:** SARSA is [Lesson 2.2](02-02-monte-carlo-control.md)'s control loop with [Lesson 2.3](02-03-temporal-difference-learning-td0.md)'s bootstrapped target in place of the Monte Carlo return, and its backup diagram is [Lesson 1.3](01-03-value-functions-bellman-expectation.md)'s $Q^\pi$ diagram with every branch sampled. The GLIE conditions and the $\varepsilon$-soft improvement guarantee are [Lesson 2.2](02-02-monte-carlo-control.md)'s.
- **Forward:** [Lesson 2.5](02-05-q-learning-off-policy-td-control.md) changes $Q(S_{t+1},A_{t+1})$ to $\max_a Q(S_{t+1},a)$ and gets an off-policy method with visibly different behaviour; [Lesson 2.6](02-06-off-policy-learning-importance-sampling.md) explains what that separation costs in general and why Q-learning escapes the cost. [Lesson 2.7](02-07-n-step-returns-and-the-lambda-return.md) generalizes the one-step target to $n$ steps, and [Lesson 3.2](03-02-approximate-control-deadly-triad.md) runs this update with a function approximator, where SARSA's on-policy character turns out to be exactly what keeps it stable.
- **Sideways:** the on-policy/off-policy distinction is the same one that separates *evaluating the policy you run* from *evaluating a counterfactual policy* in [`econometrics`](../../econometrics/syllabus.md)'s treatment-effect problems — and [Lesson 2.6](02-06-off-policy-learning-importance-sampling.md)'s importance-sampling repair is the same reweighting trick used there to recover a counterfactual mean from observational data.
