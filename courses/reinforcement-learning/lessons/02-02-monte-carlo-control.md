# Reinforcement Learning · Lesson 2.2: Monte Carlo control

> ⏱ ~15 min · Module 2: Model-Free Prediction & Control · Builds on: [2.1 (Monte Carlo prediction)](02-01-monte-carlo-prediction.md), [1.5 (policy evaluation and policy iteration)](01-05-policy-evaluation-and-policy-iteration.md) · Unlocks: [2.3 (temporal-difference learning)](02-03-temporal-difference-learning-td0.md), [4.4 (bandits and principled exploration)](04-04-bandits-and-principled-exploration.md)

## Why this matters

[Lesson 2.1](02-01-monte-carlo-prediction.md) can evaluate a policy without a model. [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md) can improve a policy given an evaluation. Putting them together looks like a formality — and it is not, because dropping the model breaks the improvement step in two separate ways.

The first break is easy to repair and you already know the repair: greedy improvement on $V$ needs $p(s'\mid s,a)$ to compare actions, so learn $Q$ instead. That was flagged in [Lesson 1.3](01-03-value-functions-bellman-expectation.md) and this is where the bill arrives.

The second break has no cheap repair, and it is the deeper subject of this lesson. **A greedy policy generates the data used to evaluate it**, and a greedy policy never tries the action it currently believes is worse — so the estimate that condemned that action is never revised. The agent's own competence is what keeps it ignorant. Every exploration technique in this course, up to [Lesson 4.4](04-04-bandits-and-principled-exploration.md)'s UCB and Thompson sampling, exists to break that loop.

## The idea

Run [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md)'s loop with sampled evaluation:

$$\pi \xrightarrow{\ \text{play episodes, average returns}\ } Q^\pi \xrightarrow{\ \text{be greedy}\ } \pi' \longrightarrow \cdots$$

Two changes from the exact version, one cosmetic and one not.

**Cosmetic: evaluate $Q$, not $V$.** Without a model, $\arg\max_a Q(s,a)$ is the only greedy step you can compute. The cost is a table of size $|\mathcal{S}|\times|\mathcal{A}|$ and the need to sample every *pair*, not every state.

**Not cosmetic: you must keep exploring.** Estimating $Q^\pi(s,a)$ requires visiting $(s,a)$. A deterministic greedy policy visits exactly one action per state. So all the other action-values freeze at whatever they were initialized to, and if that initialization made them look bad, they look bad for ever.

> A greedy policy is *self-sealing*: it stops collecting the evidence that could change its mind.

## The formal version

**The algorithm (every-visit, constant $\alpha$).** Repeat: generate an episode with $\pi$; compute returns backwards; for each $(S_t, A_t)$ in it,

$$Q(S_t, A_t) \leftarrow Q(S_t,A_t) + \alpha\big[G_t - Q(S_t,A_t)\big],$$

then set $\pi$ to be $\varepsilon$-greedy with respect to $Q$. *(card: [Monte Carlo control](../reference.md#monte-carlo-control))*

Note the improvement happens **after every episode**, not after $Q$ has converged. That is [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md)'s truncated evaluation taken to its limit, and it is legitimate for the same reason: improvement needs the ranking, not the magnitudes.

**Two ways to maintain exploration.**

*Exploring starts.* Begin each episode at a state–action pair chosen uniformly at random, then follow $\pi$. Every pair is then visited infinitely often by construction. It is clean theoretically and usually impossible in practice — you rarely get to place a robot in an arbitrary configuration — so it functions as a proof device rather than a method.

*$\varepsilon$-soft policies.* Require $\pi(a\mid s) \ge \varepsilon/|\mathcal{A}|$ for every action. The standard instance is **$\varepsilon$-greedy**:

$$\pi(a\mid s) = \begin{cases} 1 - \varepsilon + \dfrac{\varepsilon}{|\mathcal{A}|} & a = \arg\max_{a'} Q(s,a')\\[2mm] \dfrac{\varepsilon}{|\mathcal{A}|} & \text{otherwise}\end{cases}$$

In words: act greedily with probability $1-\varepsilon$, otherwise pick uniformly at random. *(card: [epsilon-greedy](../reference.md#epsilon-greedy))*

**Policy improvement still works for $\varepsilon$-greedy.** This needs checking — [Lesson 1.4](01-04-optimality-bellman-optimality.md)'s theorem was about fully greedy policies, and $\varepsilon$-greedy deliberately plays bad actions. Let $\pi'$ be $\varepsilon$-greedy with respect to $Q^\pi$, where $\pi$ is $\varepsilon$-soft. Then

$$Q^\pi(s,\pi'(s)) = \sum_a \pi'(a\mid s)\,Q^\pi(s,a) = \frac{\varepsilon}{|\mathcal{A}|}\sum_a Q^\pi(s,a) + (1-\varepsilon)\max_a Q^\pi(s,a).$$

The trick is to bound the $\max$ from below by a *particular* weighted average — the one whose weights are $\pi$'s own, rescaled:

$$\max_a Q^\pi(s,a) \ \ge\ \sum_a \frac{\pi(a\mid s) - \varepsilon/|\mathcal{A}|}{1-\varepsilon}\,Q^\pi(s,a),$$

legitimate because those coefficients are non-negative (this is exactly where $\pi$ being $\varepsilon$-soft is used) and sum to $1$. Substituting, the $\varepsilon$-terms cancel and the right-hand side collapses to $\sum_a \pi(a\mid s)Q^\pi(s,a) = V^\pi(s)$. So $Q^\pi(s,\pi'(s)) \ge V^\pi(s)$, which is [Lesson 1.4](01-04-optimality-bellman-optimality.md)'s hypothesis, and $V^{\pi'} \ge V^\pi$ follows.

**What this does and does not give you.** It gives monotone improvement *within the class of $\varepsilon$-soft policies*, converging to the best $\varepsilon$-soft policy — **not** to $\pi^*$. With $\varepsilon$ fixed, the agent is permanently committed to acting randomly a fraction $\varepsilon$ of the time, and the best policy subject to that handicap is worse than the unconstrained optimum. [Lesson 2.5](02-05-q-learning-off-policy-td-control.md) measures exactly how much worse, on the cliff.

**GLIE.** To reach $\pi^*$, decay the exploration. A schedule is **GLIE** (*greedy in the limit with infinite exploration*) if every pair is visited infinitely often and the policy becomes greedy in the limit. The canonical choice is $\varepsilon_k = 1/k$: the harmonic series diverges, so exploration never stops, yet $\varepsilon_k \to 0$, so the policy becomes greedy. With a GLIE schedule and a step size satisfying the Robbins–Monro conditions ($\sum\alpha = \infty$, $\sum\alpha^2 < \infty$), Monte Carlo control converges to $Q^*$.

## Picture

![Left: a two-action episodic Markov decision process. From state s, action A earns reward plus one and terminates; action B earns zero and leads to state t, from which the single action earns plus ten and terminates. A note records that the action-value of A is one while the action-value of B is ten, and that a greedy agent which tries A first never tries B again. Right: a plot of the chance the better action has been tried against the number of episodes, showing a flat coral line at one half for pure greedy and a rising blue curve for epsilon-greedy which passes 0.81 at twenty episodes and approaches one](assets/02-02-fig1.svg)

The flat line is the whole problem. More experience does not help a greedy agent here, because the experience it collects is generated by the very belief that needs correcting.

## Worked examples

**Example 1 (mechanical): the self-sealing trap, exactly.** The MDP in the figure, with $\gamma = 1$. From $s$: action $A$ earns $+1$ and ends the episode; action $B$ earns $0$ and moves to $t$, whose only action earns $+10$ and ends the episode. So

$$Q^*(s,A) = 1, \qquad Q^*(s,B) = 0 + 10 = 10.$$

Initialize $Q \equiv 0$ and act **greedily**, breaking ties at random. Episode 1 is a tie, so the agent picks $A$ or $B$ with probability $\tfrac12$ each.

- If it picks $B$: it observes a return of $10$, sets $Q(s,B) = 10 > 0 = Q(s,A)$, and plays $B$ for ever. Correct.
- If it picks $A$: it observes a return of $1$, sets $Q(s,A) = 1 > 0 = Q(s,B)$, and plays $A$ for ever. **$Q(s,B)$ is never updated again**, because greedy never selects it.

So the greedy agent is permanently wrong with probability exactly $\tfrac12$, **and that number does not improve with more episodes** — at one episode, a thousand, or a million, it is $\tfrac12$. This is the flat line in the figure.

Now $\varepsilon$-greedy with $\varepsilon = 0.1$. When the greedy action is $A$, the agent still selects $B$ with probability $\varepsilon/|\mathcal{A}| = 0.05$ per episode. So

$$\mathbb{P}[\text{$B$ untried after $n$ episodes}] = \tfrac12 (0.95)^{\,n-1},$$

giving $0.81$ found by episode $20$, $0.96$ by $50$, and $0.997$ by $100$. The expected wait after a bad start is $1/0.05 = 20$ episodes. **A simulation of ten thousand runs of $200$ episodes gives $0.4978$ for greedy and $1.0000$ for $\varepsilon$-greedy** — matching the closed forms $0.5$ and $1 - \tfrac12(0.95)^{199} = 1.0000$.

**Example 2 (why you'd care): exploration is not free, and $\varepsilon$ is the price.** The trap above makes exploration look like a pure gift. It is not — the agent that explores keeps playing $A$ five percent of the time even after it knows $B$ is worth ten times more.

Quantify it. Once $\varepsilon$-greedy has learned the truth, its expected return per episode is

$$\underbrace{(1 - \varepsilon + \tfrac{\varepsilon}{2})}_{\mathbb{P}[B]}\,(10) + \underbrace{\tfrac{\varepsilon}{2}}_{\mathbb{P}[A]}\,(1) = 0.95(10) + 0.05(1) = \mathbf{9.55},$$

against the unconstrained optimum of $10$. The best $\varepsilon$-soft policy is worth $9.55$, and that is the ceiling the fixed-$\varepsilon$ agent converges to, exactly as the improvement theorem above predicted.

So there are three different numbers in play, and confusing them is the standard error:

| quantity | value here |
|---|---|
| the optimal policy, executed exactly | $10$ |
| the best $\varepsilon$-soft policy ($\varepsilon = 0.1$) | $9.55$ |
| a greedy learner's expected outcome | $\tfrac12(10) + \tfrac12(1) = 5.5$ |

**Permanent exploration costs $4.5\%$ here; refusing to explore costs $45\%$.** That ratio is why fixed $\varepsilon$ is the default in practice despite being provably suboptimal, and why GLIE — decaying $\varepsilon$ toward zero — is the theoretically right answer: it pays the exploration cost early, when information is valuable, and stops paying once it is not. [Lesson 4.4](04-04-bandits-and-principled-exploration.md) makes "when information is valuable" precise instead of scheduling it by hand.

## Watch out

- **You might think** the fix for the trap is a better initialization, since $Q \equiv 0$ is what made $B$ look bad — **but actually** that only relocates the problem. *Optimistic* initialization (set $Q$ high everywhere) does work nicely here: every untried action looks attractive, so greedy explores it once, and this is a genuinely useful trick. But it explores each action only until the optimism is corrected, so it fails as soon as rewards are noisy or the environment changes, and it requires knowing an upper bound on the returns. It is a heuristic, not a substitute for a policy that keeps exploring.
- **You might think** $\varepsilon$-greedy converges to $\pi^*$ — **but actually** with $\varepsilon$ held fixed it converges to the best $\varepsilon$-*soft* policy, which is strictly worse whenever a random action can hurt. Example 2 measures the gap as $9.55$ against $10$. You get $\pi^*$ only by decaying $\varepsilon$ to zero on a GLIE schedule.
- **You might think** exploring starts and $\varepsilon$-soft policies are two interchangeable implementations of the same idea — **but actually** exploring starts fix the *distribution of visits* while leaving the policy greedy, whereas $\varepsilon$-soft changes the *policy itself* and so changes what is being learned. That is why $\varepsilon$-greedy converges to a handicapped optimum and exploring starts converge to the true $Q^*$: the handicap is in the policy, not in the sampling.

## One-liner

> Model-free control must learn $Q$ rather than $V$, and must be deliberately a little bit stupid — because a policy that only ever does what it currently thinks is best destroys the evidence that would change its mind.

## Problems

**P1 (🟢)** An agent uses $\varepsilon$-greedy with $\varepsilon = 0.2$ in a state with four actions, where $Q(s,a_1) = 5$ is the unique maximum.

(a) Give $\pi(a_1\mid s)$ and $\pi(a_2\mid s)$.
(b) Verify the four probabilities sum to $1$.
(c) If the other three actions are worth $1$, $2$ and $0$, compute the expected value of one action selection, $\sum_a \pi(a\mid s)Q(s,a)$.
(d) State how much this falls short of $\max_a Q(s,a)$, and what that shortfall is called.

**P2 (🟡)** In the trap MDP of Example 1, an agent uses **optimistic initialization** instead of exploration: it sets $Q(s,A) = Q(s,B) = 20$ and acts greedily with a $1/N$ running mean.

(a) Trace the first three episodes, giving $Q(s,A)$ and $Q(s,B)$ after each. (Break the first tie toward $A$.)
(b) State whether the agent finds the better action, and after how many episodes.
(c) Now suppose action $B$'s return is noisy: $+10$ with probability $0.5$ and $0$ otherwise, so $Q^*(s,B) = 5$, still better than $A$'s $1$. State what can go wrong with optimistic initialization that could not go wrong in (a).
(d) State the general condition under which optimistic initialization is a safe substitute for $\varepsilon$-greedy.

**P3 (🔴)** A colleague argues that GLIE is unnecessary: "just run $\varepsilon$-greedy with a small $\varepsilon$, say $0.001$ — the loss is only $0.1\%$."

(a) Using the trap MDP, compute the expected number of episodes before $B$ is tried, given the agent started with $A$, at $\varepsilon = 0.001$.
(b) Compute the expected total reward forgone during that wait, relative to an agent that already knew.
(c) State the trade-off that (a) and (b) together reveal, and why a *fixed* $\varepsilon$ cannot escape it.
(d) Explain how $\varepsilon_k = 1/k$ escapes it, and verify the two GLIE conditions for that schedule.

<details>
<summary>Solutions</summary>

**P1**

(a) With $|\mathcal{A}| = 4$ and $\varepsilon = 0.2$: the greedy action gets $1 - \varepsilon + \varepsilon/|\mathcal{A}| = 0.8 + 0.05 = \mathbf{0.85}$, and each other action gets $\varepsilon/|\mathcal{A}| = \mathbf{0.05}$.

(b) $0.85 + 3(0.05) = 0.85 + 0.15 = 1$ ✓

(c) $0.85(5) + 0.05(1) + 0.05(2) + 0.05(0) = 4.25 + 0.05 + 0.10 + 0 = \mathbf{4.40}$.

(d) It falls short of $5$ by $\mathbf{0.60}$. That is the **cost of exploration** — the expected reward given up per decision in exchange for continuing to gather information about the three non-greedy actions. (In the vocabulary of [Lesson 4.4](04-04-bandits-and-principled-exploration.md) it is the per-step *regret* of the $\varepsilon$-greedy policy, and it accumulates linearly with the number of decisions — which is precisely why fixed $\varepsilon$ is not asymptotically optimal.)

**P2**

(a) Both start at $20$; $\gamma = 1$; the running mean is $Q \leftarrow Q + \tfrac1N(G - Q)$.

| episode | action (greedy) | return | update | $Q(s,A)$ | $Q(s,B)$ |
|---|---|---|---|---|---|
| — | — | — | initial | $20$ | $20$ |
| 1 | $A$ (tie, broken to $A$) | $1$ | $20 + \tfrac11(1-20)$ | $\mathbf{1}$ | $20$ |
| 2 | $B$ ($20 > 1$) | $10$ | $20 + \tfrac11(10-20)$ | $1$ | $\mathbf{10}$ |
| 3 | $B$ ($10 > 1$) | $10$ | $10 + \tfrac12(10-10)$ | $1$ | $\mathbf{10}$ |

(b) **Yes, after two episodes.** The optimism made the untried action $B$ the greedy choice as soon as $A$'s inflated estimate was corrected, so the agent explored without any randomness at all. From episode 3 onward it plays $B$ for ever and earns the optimum $10$ — strictly better than the $\varepsilon$-greedy agent's $9.55$, because it pays no ongoing exploration tax.

(c) With a noisy $B$, the agent may sample $B$ once, receive the $0$ outcome, and set $Q(s,B) = 0 < 1 = Q(s,A)$ — **and then never select $B$ again**, exactly the trap of Example 1. The optimism is spent after a single sample, and a single sample of a noisy quantity can be arbitrarily unrepresentative.

In (a) this was impossible because the returns were deterministic: one sample revealed the truth exactly. **Optimistic initialization explores each action a number of times proportional to how long the optimism survives, which under noise may be once.**

(d) Optimistic initialization is a safe substitute when **the environment is stationary and the returns are near-deterministic** (so that a small number of samples pins down each action-value), **and** a valid upper bound on the returns is known so the initial values are genuinely optimistic rather than accidentally pessimistic.

It fails when returns are noisy (as in (c)), when the environment is non-stationary (the optimism is spent early and never renewed, so a change after that is never detected), or when the state space is large enough that "try every action once" is itself unaffordable. Those three failures are why the field did not stop at optimistic initialization, and they are what [Lesson 4.4](04-04-bandits-and-principled-exploration.md)'s UCB fixes by making the optimism *shrink with the evidence* rather than being spent once.

**P3**

(a) Each episode the agent selects $B$ with probability $\varepsilon/|\mathcal{A}| = 0.001/2 = 0.0005$. The wait is geometric, so its expectation is

$$\frac{1}{0.0005} = \mathbf{2000\ \text{episodes}}.$$

(b) During the wait the agent earns $1$ per episode instead of the $10$ it could have had, a shortfall of $9$ per episode over $2000$ episodes:

$$9 \times 2000 = \mathbf{18{,}000}\ \text{in forgone reward}.$$

(For comparison, at $\varepsilon = 0.1$ the wait is $20$ episodes and the shortfall is $9 \times 20 = 180$ — a hundred times less.)

(c) **A fixed $\varepsilon$ trades a permanent per-step tax against a one-time cost of ignorance, and shrinking one inflates the other.** The asymptotic loss from exploring scales like $\varepsilon$; the time to discover anything scales like $1/\varepsilon$. Their product is constant, so no fixed choice can make both small — the colleague's $0.1\%$ asymptotic loss is bought with a $2000$-episode period of near-total ignorance, and during that period the agent is losing $90\%$ of the available reward.

A fixed $\varepsilon$ cannot escape because it applies the *same* exploration rate at episode $1$, when the agent knows nothing and information is extremely valuable, and at episode $10^6$, when it knows everything and information is worthless. The rate is decoupled from how much there is to learn.

(d) $\varepsilon_k = 1/k$ escapes it by **exploring hard when ignorant and barely at all once informed**: at episode $1$ it explores with probability $1$, by episode $100$ with probability $0.01$, and the asymptotic tax tends to zero.

Verifying the two GLIE conditions:

- *Infinite exploration.* The probability of selecting any given action at episode $k$ is at least $\varepsilon_k/|\mathcal{A}| = 1/(k|\mathcal{A}|)$, and $\sum_k 1/(k|\mathcal{A}|) = \infty$ since the harmonic series diverges. By the second Borel–Cantelli lemma ([`probability-theory` 3.3](../../probability-theory/lessons/03-03-borel-cantelli-zero-one.md)), every state–action pair is visited infinitely often with probability $1$. **The divergence of the harmonic series is doing the real work here** — a schedule like $\varepsilon_k = 1/k^2$ has a convergent sum and can stop exploring for ever after finitely many episodes.
- *Greedy in the limit.* $\varepsilon_k = 1/k \to 0$, so $\pi_k(a\mid s) \to 1$ for the greedy action. ✓

Both conditions hold, so Monte Carlo control with this schedule converges to $Q^*$ — the outcome no fixed $\varepsilon$ achieves.

</details>

## Flashback

**From Lesson 1.6 (Value iteration and why it converges):** A three-state MDP has states $U$, $W$ and a terminal $T$, with $\gamma = 0.5$. From $U$: action *jump* earns $8$ and terminates; action *drift* earns $0$ and moves to $W$. From $W$: the only action earns $12$ and moves back to $U$.

(a) Write the Bellman optimality equations for $V^*(U)$ and $V^*(W)$.
(b) Run value iteration from $V_0 \equiv 0$ for four sweeps.
(c) Solve exactly by testing each branch of the $\max$.
(d) State the optimal policy and verify both equations.

<details>
<summary>Solution</summary>

(a)

$$V^*(U) = \max\big\{\underbrace{8}_{\text{jump, terminates}},\ \underbrace{0 + 0.5\,V^*(W)}_{\text{drift}}\big\}, \qquad V^*(W) = 12 + 0.5\,V^*(U).$$

(b) Sweeps of $V_{k+1} = TV_k$ from $V_0 = (0,0)$:

| $k$ | $V_k(U)$ | $V_k(W)$ |
|---|---|---|
| $1$ | $\max\{8,\ 0\} = \mathbf{8}$ | $12 + 0 = \mathbf{12}$ |
| $2$ | $\max\{8,\ 6\} = \mathbf{8}$ | $12 + 4 = \mathbf{16}$ |
| $3$ | $\max\{8,\ 8\} = \mathbf{8}$ | $12 + 4 = \mathbf{16}$ |
| $4$ | $\max\{8,\ 8\} = \mathbf{8}$ | $12 + 4 = \mathbf{16}$ |

Converged after three sweeps.

(c) **Branch 1 — *jump* attains the max.** Then $V^*(U) = 8$, so $V^*(W) = 12 + 4 = 16$, and the *drift* branch would be worth $0.5(16) = 8$. That ties with $8$, so *jump* does attain the max (jointly). **Consistent.**

**Branch 2 — *drift* attains the max.** Then $V^*(U) = 0.5V^*(W)$ and $V^*(W) = 12 + 0.5V^*(U)$. Substituting, $V^*(U) = 0.5(12 + 0.5V^*(U)) = 6 + 0.25V^*(U)$, so $0.75V^*(U) = 6$ and $V^*(U) = 8$ — the *same* answer, with $V^*(W) = 16$. Check: the *jump* branch is worth $8$, which ties. **Also consistent.**

Both branches give $V^*(U) = 8$, $V^*(W) = 16$. The uniqueness guaranteed by [Lesson 1.6](01-06-value-iteration-and-convergence.md)'s contraction says this had to happen: the fixed point is unique, so no two consistent branches can disagree.

(d) **Both actions are optimal at $U$** — the two branches tie at $8$, so *jump*, *drift*, and any mixture of them are all optimal policies. At $W$ there is only one action.

Verification: $V^*(U) = \max\{8,\ 0 + 0.5(16)\} = \max\{8, 8\} = 8$ ✓ and $V^*(W) = 12 + 0.5(8) = 16$ ✓.

This is the "optimal policies are not unique" point from [Lesson 1.4](01-04-optimality-bellman-optimality.md) arising naturally rather than by construction: taking $8$ now and taking a delayed $12$-then-$8$ discounted to $0.5(16) = 8$ are worth precisely the same. It is also a good illustration of why the stopping test in [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md) must be "every action played is greedy" rather than "the arg-max set is unchanged" — here the arg-max set at $U$ grows from $\{\text{jump}\}$ at sweep 1 to $\{\text{jump},\text{drift}\}$ at sweep 3, and a test demanding set equality would never terminate.

</details>

## Connections

- **Backward:** the loop is [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md)'s generalized policy iteration with [Lesson 2.1](02-01-monte-carlo-prediction.md)'s sampled evaluation dropped into the evaluation slot, and the $\varepsilon$-greedy improvement proof is [Lesson 1.4](01-04-optimality-bellman-optimality.md)'s theorem with the $\max$ bounded below by a cleverly chosen average. The switch from $V$ to $Q$ is the consequence flagged in [Lesson 1.3](01-03-value-functions-bellman-expectation.md).
- **Forward:** [Lesson 2.4](02-04-sarsa-on-policy-td-control.md) is this same loop with the Monte Carlo return replaced by a bootstrapped target, and it inherits both the $Q$-table and the $\varepsilon$-greedy exploration unchanged. [Lesson 2.5](02-05-q-learning-off-policy-td-control.md) shows how to learn about the *greedy* policy while behaving $\varepsilon$-greedily, which dissolves the "best $\varepsilon$-soft policy" ceiling found here — and [Lesson 2.6](02-06-off-policy-learning-importance-sampling.md) gives the general machinery for that separation. [Lesson 4.4](04-04-bandits-and-principled-exploration.md) replaces $\varepsilon$-greedy with exploration that is directed rather than random.
- **Sideways:** the trap in Example 1 is the classic *exploration–exploitation* dilemma, which appears as the multi-armed bandit in clinical trial design and as the explore/exploit trade-off in [`operations-research`](../../operations-research/syllabus.md)'s sequential decision problems. The optimistic-initialization idea in P2 is the same principle as the confidence bonus in [Lesson 4.4](04-04-bandits-and-principled-exploration.md), with the crucial difference that UCB's optimism is renewed by uncertainty rather than spent once.
