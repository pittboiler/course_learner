# Reinforcement Learning · Lesson 4.2: A2C, A3C and advantage estimation

> ⏱ ~15 min · Module 4: Deep RL & Exploration · Builds on: [3.5 (actor–critic methods)](03-05-actor-critic-methods.md), [2.7 (n-step returns and the λ-return)](02-07-n-step-returns-and-the-lambda-return.md) · Unlocks: [4.3 (PPO)](04-03-ppo-a-taste.md)

## Why this matters

[Lesson 4.1](04-01-deep-q-networks.md) solved the correlated-data problem with a replay buffer, and paid for it with the third leg of the deadly triad. A3C solved the same problem a different way — **run many environments at once** — and paid nothing, because a batch drawn across simultaneous independent environments is already decorrelated *and* still on-policy.

That is the practical half of this lesson. The theoretical half is the estimator these methods use for the advantage. [Lesson 3.5](03-05-actor-critic-methods.md) used the one-step TD error; [Lesson 2.7](02-07-n-step-returns-and-the-lambda-return.md) showed that one step is rarely the right lookahead. **Generalized advantage estimation** is [Lesson 2.7](02-07-n-step-returns-and-the-lambda-return.md)'s λ-return applied to the advantage, and it is the estimator inside every modern policy-gradient implementation, PPO included.

## The idea

Two independent improvements to [Lesson 3.5](03-05-actor-critic-methods.md)'s actor–critic.

**Parallelism instead of replay.** Run $N$ copies of the environment side by side with the same policy. At any instant they are at different points in different episodes, so a batch assembled across them spans unrelated situations.

> Replay decorrelates by sampling the past; parallelism decorrelates by sampling the present. The second keeps the data on-policy.

**A2C versus A3C.** A3C (*asynchronous* advantage actor–critic) lets each worker compute gradients and apply them to shared parameters whenever it is ready, so workers run on slightly stale parameters. A2C is the synchronous version: wait for all workers, average the gradients, take one step. **A2C is simpler, uses GPUs better, and performs about as well** — the asynchrony turned out to be incidental rather than essential, which is a useful reminder that the published explanation for why something works is not always right.

**A better advantage.** The one-step TD error is one of many estimators:

$$\hat A^{(1)}_t = \delta_t, \qquad \hat A^{(2)}_t = \delta_t + \gamma\delta_{t+1}, \qquad \hat A^{(n)}_t = \sum_{l=0}^{n-1}\gamma^l\delta_{t+l}$$

Larger $n$ means more real reward and less reliance on the critic: less bias, more variance. Average them geometrically and you get GAE.

## The formal version

**The $n$-step advantage.** Equivalently written as a return minus a baseline:

$$\hat A^{(n)}_t = \underbrace{R_{t+1} + \gamma R_{t+2} + \cdots + \gamma^{n-1}R_{t+n} + \gamma^n\hat V(S_{t+n})}_{n\text{-step return}} - \hat V(S_t)$$

**Generalized advantage estimation.** Take the $\lambda$-weighted average of all of them:

$$\hat A^{\text{GAE}(\gamma,\lambda)}_t = (1-\lambda)\sum_{n=1}^{\infty}\lambda^{n-1}\hat A^{(n)}_t \;=\; \sum_{l=0}^{\infty}(\gamma\lambda)^l\,\delta_{t+l}$$

*(card: [generalized advantage estimation](../reference.md#generalized-advantage-estimation))*

**The second form is the one you implement**, and the equality is not obvious — it is the telescoping identity of [Lesson 2.8](02-08-eligibility-traces-backward-view.md) applied to advantages rather than returns. Checked numerically over $400$ randomly generated trajectories with random $\gamma$, $\lambda$, rewards and critic values, the two expressions agree to $4\times10^{-15}$.

It also makes GAE cheap: compute the $\delta$'s once, then accumulate backwards through the batch with

$$\hat A_t = \delta_t + \gamma\lambda\,\hat A_{t+1},$$

a single reverse pass with no extra storage. **That is the same backward accumulation as an eligibility trace**, and for the same reason.

**The two knobs.** $\gamma$ and $\lambda$ look similar and do different jobs:

| | $\gamma$ | $\lambda$ |
|---|---|---|
| belongs to | the **problem** — it defines the return | the **estimator** — it does not change what is optimal |
| effect of raising it | longer horizon, more variance | more real reward in the estimate, less critic |
| endpoints | $0$ myopic, $1$ undiscounted | $0$ is [3.5](03-05-actor-critic-methods.md)'s one-step, $1$ is [3.4](03-04-reinforce.md)'s Monte Carlo |

The effective lookahead is $1/(1-\lambda)$ — so $\lambda = 0.95$, the near-universal default, averages over roughly $20$ steps. Variance grows with that lookahead and bias falls with it:

| $\lambda$ | effective lookahead | relative variance on a chain with i.i.d. rewards |
|---|---|---|
| $0$ | $1$ | $1\times$ |
| $0.5$ | $2$ | $2\times$ |
| $0.9$ | $10$ | $10\times$ |
| $0.95$ | $20$ | $20\times$ |
| $1$ | $\infty$ | Monte Carlo |

**The full update.** Collect $T$ steps in each of $N$ environments, compute advantages by the backward recursion, then take one gradient step on

$$\mathcal{L} = \underbrace{-\hat A_t\log\pi_\theta(A_t\mid S_t)}_{\text{actor}} \;+\; c_1\underbrace{\big(\hat V(S_t;\mathbf{w}) - \hat R_t\big)^2}_{\text{critic}} \;-\; c_2\underbrace{H\big(\pi_\theta(\cdot\mid S_t)\big)}_{\text{entropy bonus}}$$

averaged over the batch. The third term is new and it matters: the **entropy bonus** rewards the policy for staying uncertain, which keeps exploration alive without any $\varepsilon$. It is the policy-gradient answer to [Lesson 2.2](02-02-monte-carlo-control.md)'s self-sealing problem — a softmax policy that collapses to near-determinism early has a vanishing score ([Lesson 3.3](03-03-the-policy-gradient-theorem.md)) and effectively stops learning, and the entropy term prevents that collapse.

## Picture

![Left: five stacked boxes labelled env 1 through env 5, each with an arrow feeding into a single box labelled one shared actor-critic, annotated that each environment is at a different point in its own episode so a batch across them is already decorrelated, with no replay buffer needed and the data staying on-policy. Right: a semi-log plot of the effective lookahead, one over one minus lambda, against lambda, rising from one to beyond one hundred, with marked points at lambda equals zero labelled actor-critic one step and lambda equals 0.95 labelled the usual choice, and a note that lambda approaching one gives REINFORCE with a baseline](assets/04-02-fig1.svg)

The left panel replaces [Lesson 4.1](04-01-deep-q-networks.md)'s replay buffer with wall-clock parallelism; the right panel is [Lesson 2.7](02-07-n-step-returns-and-the-lambda-return.md)'s spectrum, relabelled for advantages.

## Worked examples

**Example 1 (mechanical): GAE by backward recursion.** A four-step segment with $\gamma = 0.99$, $\lambda = 0.95$, and TD errors

$$\delta_0 = 1.0, \qquad \delta_1 = -0.5, \qquad \delta_2 = 2.0, \qquad \delta_3 = 0.3,$$

with the segment ending at a terminal state, so $\hat A_4 = 0$. The decay factor is $\gamma\lambda = 0.9405$. Accumulate backwards with $\hat A_t = \delta_t + \gamma\lambda\hat A_{t+1}$:

| $t$ | computation | $\hat A_t$ |
|---|---|---|
| $3$ | $0.3 + 0.9405(0)$ | $\mathbf{0.3000}$ |
| $2$ | $2.0 + 0.9405(0.3)$ | $\mathbf{2.2822}$ |
| $1$ | $-0.5 + 0.9405(2.2822)$ | $\mathbf{1.6464}$ |
| $0$ | $1.0 + 0.9405(1.6464)$ | $\mathbf{2.5484}$ |

**Check against the forward sum** at $t = 0$: $\sum_l (0.9405)^l\delta_l = 1.0 + 0.9405(-0.5) + 0.8845(2.0) + 0.8319(0.3) = 1.0 - 0.4703 + 1.7690 + 0.2496 = 2.5484$ ✓

Now the same data at $\lambda = 0$: $\hat A_0 = \delta_0 = 1.0$ — the one-step actor–critic estimate. And at $\lambda = 1$ with $\gamma = 0.99$: $\hat A_0 = 1.0 - 0.495 + 1.9602 + 0.2911 = 2.756$, essentially the Monte Carlo advantage.

**The three numbers $1.00$, $2.55$, $2.76$ are estimates of the same quantity.** The spread between them is the bias–variance dial: the $\lambda = 0$ estimate trusts the critic's opinion of step 1 and discards the $+2.0$ surprise at step 2 entirely; the $\lambda = 1$ estimate uses every surprise and inherits all their noise.

**Example 2 (why you'd care): parallelism buys what replay buys, without the debt.** Compare the two routes to decorrelated data.

| | replay buffer ([4.1](04-01-deep-q-networks.md)) | parallel environments |
|---|---|---|
| decorrelation | sample randomly from the past | sample across the present |
| data is | off-policy, up to $10^6$ steps stale | **on-policy** |
| deadly triad legs | all three | **two** — off-policy leg removed |
| sample efficiency | high: each transition reused many times | low: each used once |
| wall-clock efficiency | one environment | $N$ environments in parallel |

**The trade is sample efficiency against stability and wall-clock time.** A replay agent extracts far more learning per environment step, which matters when steps are expensive (a real robot). A parallel agent throws each step away after one use but can run sixteen or sixty-four environments simultaneously in a simulator, where steps are cheap, and it stays on-policy — which is what allows it to use a policy gradient at all, since [Lesson 3.3](03-03-the-policy-gradient-theorem.md)'s theorem requires samples from the current policy's state distribution.

That last point is the structural one. **DQN can use replay because Q-learning is off-policy by construction; A2C cannot, because a policy gradient is not.** The parallelism is not an optimization bolted onto actor–critic — it is the only way to get decorrelated on-policy data, and therefore the enabling trick for the whole family. [Lesson 4.3](04-03-ppo-a-taste.md) is what you do when even that is not sample-efficient enough.

## Watch out

- **You might think** $\lambda$ and $\gamma$ are interchangeable discount-like parameters and can be tuned together — **but actually** $\gamma$ changes the problem (it defines which policy is optimal, as [Lesson 1.1](01-01-the-rl-problem.md)'s crossover showed) while $\lambda$ changes only the estimator. Lowering $\gamma$ to reduce variance silently makes the agent myopic; lowering $\lambda$ reduces variance with no change to the objective. Reach for $\lambda$ first.
- **You might think** the entropy bonus is a minor regularizer — **but actually** without it a softmax policy commonly collapses to near-determinism within a few thousand updates, and once it has, [Lesson 3.3](03-03-the-policy-gradient-theorem.md)'s score term is tiny and the policy is effectively frozen wherever it happens to have landed. It is the main exploration mechanism in policy-gradient methods, and its coefficient is one of the two or three settings worth tuning.
- **You might think** A3C's asynchrony is what makes it work, given the name — **but actually** the synchronous A2C matches it. The credit belongs to the parallelism (decorrelated on-policy batches), not to the asynchronous updates, which mainly add stale-gradient noise. This was only established after A3C was published, and it is a good caution against accepting a paper's own account of which component is load-bearing.

## One-liner

> Run many environments to get decorrelated on-policy data, and let λ decide how much of the advantage comes from real rewards and how much from the critic's opinion.

## Problems

**P1 (🟢)** A three-step segment with $\gamma = 1$, $\lambda = 0.8$, TD errors $\delta_0 = 2$, $\delta_1 = -1$, $\delta_2 = 4$, terminating after step $2$.

(a) Compute $\hat A_2$, $\hat A_1$, $\hat A_0$ by the backward recursion.
(b) Verify $\hat A_0$ against the forward sum $\sum_l(\gamma\lambda)^l\delta_l$.
(c) Compute $\hat A_0$ at $\lambda = 0$ and at $\lambda = 1$.
(d) State which of the three values of $\hat A_0$ has the largest variance as an estimator, and why.

**P2 (🟡)** An A2C agent runs $N = 16$ environments for $T = 5$ steps between updates.

(a) State the batch size of one update.
(b) After $10^6$ environment steps in total, state how many gradient updates have occurred.
(c) A DQN agent with a batch size of $32$ performs one update per environment step. State how many updates *it* performs in $10^6$ steps, and comment on the comparison.
(d) State what the comparison in (c) implies about which method you would choose if environment steps were the expensive resource, and which if wall-clock time were.

**P3 (🔴)** GAE's two forms are $(1-\lambda)\sum_n\lambda^{n-1}\hat A^{(n)}_t$ and $\sum_l(\gamma\lambda)^l\delta_{t+l}$.

(a) Verify their equality for a two-step episode with $\gamma = 1$: rewards $R_1, R_2$, values $\hat V(S_0), \hat V(S_1)$, terminal after $S_1$.
(b) State what $\hat A^{\text{GAE}}$ becomes at $\lambda = 1$, in terms of the return, and confirm it matches [Lesson 3.4](03-04-reinforce.md)'s REINFORCE-with-baseline multiplier.
(c) Suppose the critic is perfect, $\hat V = V^\pi$. State what happens to the *bias* of $\hat A^{\text{GAE}}$ as $\lambda$ varies, and what this implies about the right $\lambda$ in that case.
(d) Using (c), explain the practical rule that $\lambda$ should be lowered when the critic is good and raised when it is poor.

<details>
<summary>Solutions</summary>

**P1**

(a) With $\gamma\lambda = 0.8$ and $\hat A_3 = 0$:

| $t$ | computation | $\hat A_t$ |
|---|---|---|
| $2$ | $4 + 0.8(0)$ | $\mathbf{4}$ |
| $1$ | $-1 + 0.8(4)$ | $\mathbf{2.2}$ |
| $0$ | $2 + 0.8(2.2)$ | $\mathbf{3.76}$ |

(b) $\sum_l (0.8)^l\delta_l = 2 + 0.8(-1) + 0.64(4) = 2 - 0.8 + 2.56 = \mathbf{3.76}$ ✓

(c) At $\lambda = 0$: $\hat A_0 = \delta_0 = \mathbf{2}$.

At $\lambda = 1$ (so $\gamma\lambda = 1$): $\hat A_0 = 2 - 1 + 4 = \mathbf{5}$.

(d) **$\lambda = 1$ has the largest variance.** It is the sum of all three TD errors with no discounting, so it inherits the randomness of every reward and every transition to the end of the episode — it *is* the Monte Carlo advantage, $G_0 - \hat V(S_0)$.

The $\lambda = 0$ estimate contains only $\delta_0$, hence one random reward and one random transition, and replaces everything after that with the critic's estimate. The $\lambda = 0.8$ estimate sits between, which is visible in the numbers: $2 < 3.76 < 5$.

**P2**

(a) $N \times T = 16\times5 = \mathbf{80}$ transitions per update.

(b) Each update consumes $80$ environment steps, so

$$\frac{10^6}{80} = \mathbf{12{,}500\ \text{updates}}.$$

(c) One update per environment step gives $\mathbf{10^6}$ updates — **eighty times as many**, each on a batch of $32$.

The comparison shows how differently the two methods spend their data. DQN performs $10^6$ updates on $10^6$ transitions, which means each transition participates in roughly $32$ updates on average (batch size $32$, one update per step). A2C performs $12{,}500$ updates and **each transition is used exactly once, then discarded**, because after a single gradient step the policy has changed and the data is no longer on-policy.

(d) **If environment steps are expensive — a real robot, a physical experiment, a system with a human in the loop — choose the replay-based method.** Extracting thirty-two updates from each transition instead of one is the difference between a feasible and an infeasible experiment.

**If wall-clock time is the constraint and steps are cheap — a simulator — choose the parallel method.** Sixteen environments generate data sixteen times faster in real time, the batches are on-policy (which is what a policy gradient requires), and the method sheds a leg of the deadly triad. The fact that it wastes data is irrelevant when data is free.

This is why robotics research leans on off-policy methods with replay and why large-scale game-playing results have mostly come from massively parallel on-policy ones.

**P3**

(a) Two steps, terminal after $S_1$, so $\hat V(S_2) = 0$. The TD errors are

$$\delta_0 = R_1 + \hat V(S_1) - \hat V(S_0), \qquad \delta_1 = R_2 - \hat V(S_1).$$

The $n$-step advantages from $t=0$ are

$$\hat A^{(1)} = R_1 + \hat V(S_1) - \hat V(S_0) = \delta_0, \qquad \hat A^{(2)} = R_1 + R_2 - \hat V(S_0).$$

*Weighted form*, truncating at the episode end (weight $(1-\lambda)$ on $\hat A^{(1)}$ and the remaining $\lambda$ on $\hat A^{(2)}$):

$$(1-\lambda)\hat A^{(1)} + \lambda\hat A^{(2)} = (1-\lambda)\big[R_1 + \hat V(S_1) - \hat V(S_0)\big] + \lambda\big[R_1 + R_2 - \hat V(S_0)\big]$$
$$= R_1 - \hat V(S_0) + (1-\lambda)\hat V(S_1) + \lambda R_2.$$

*Delta form:*

$$\delta_0 + \lambda\delta_1 = R_1 + \hat V(S_1) - \hat V(S_0) + \lambda\big[R_2 - \hat V(S_1)\big] = R_1 - \hat V(S_0) + (1-\lambda)\hat V(S_1) + \lambda R_2.$$

Identical. ✓

(b) At $\lambda = 1$ every $\delta$ enters with weight $\gamma^l$, and the sum telescopes:

$$\sum_{l\ge0}\gamma^l\delta_{t+l} = G_t - \hat V(S_t),$$

since the intermediate $\hat V$ terms cancel in pairs. That is exactly [Lesson 3.4](03-04-reinforce.md)'s multiplier, the return minus the baseline. ✓

(c) **With a perfect critic, $\hat A^{\text{GAE}}$ is unbiased for every $\lambda$.** Each $\hat A^{(n)}$ is built from an $n$-step return whose expectation is $Q^\pi(s,a)$ when $\hat V = V^\pi$, so every one of them — and therefore any weighted average of them — has expectation $A^\pi(s,a)$.

So bias is not a consideration at all, and the right choice is whichever $\lambda$ minimizes variance: **$\lambda = 0$**, the pure one-step estimate. There is no reason to look further ahead when the critic already knows the answer.

(d) The rule follows directly. $\lambda$ controls how much of the estimate comes from **real observed rewards** and how much from the **critic's opinion**.

*Good critic:* its opinion is nearly correct and nearly noiseless, so leaning on it costs almost no bias and saves a great deal of variance. Lower $\lambda$.

*Poor critic:* its opinion is systematically wrong, and that error enters the estimate as bias that no amount of data removes. Real rewards are noisy but honest. Raise $\lambda$ to lean on them instead.

In practice the critic is poor early in training and improves, which suggests annealing $\lambda$ downward — and the common fixed default of $0.95$ is a compromise sitting closer to the "trust the rewards" end, chosen because an over-trusted bad critic is a more dangerous failure than an over-noisy estimate.

</details>

## Flashback

**From Lesson 3.5 (Actor–critic methods):** An actor–critic agent has $\hat V(s) = 6$, $\hat V(s') = 2$, softmax probabilities $(0.25,\ 0.75)$ over two actions, takes $a_2$, and receives $R = 1$. Take $\gamma = 0.9$, $\alpha^\theta = 0.4$, $\alpha^{\mathbf{w}} = 0.2$, tabular critic.

(a) Compute $\delta$.
(b) Update the critic.
(c) Compute the score for $a_2$ and update the actor.
(d) State whether $\pi(a_2)$ rose or fell, and explain it in terms of the advantage rather than the reward.

<details>
<summary>Solution</summary>

(a) $\delta = R + \gamma\hat V(s') - \hat V(s) = 1 + 0.9(2) - 6 = 1 + 1.8 - 6 = \mathbf{-3.2}$.

(b) $\hat V(s) \leftarrow 6 + 0.2(-3.2) = 6 - 0.64 = \mathbf{5.36}$.

(c) $\nabla_\theta\log\pi(a_2) = (0,1) - (0.25,0.75) = \mathbf{(-0.25,\ 0.25)}$.

$$\theta \leftarrow \theta + 0.4(-3.2)(-0.25,\ 0.25) = \theta + (0.32,\ -0.32).$$

(d) **$\pi(a_2)$ fell** — its preference dropped by $0.32$ while $a_1$'s rose by the same, so the log-odds moved $0.64$ against $a_2$.

Explaining it by the advantage rather than the reward: the reward was **positive** ($+1$), which a naive reading would take as encouragement. But the state $s$ was believed to be worth $6$, and the action delivered $+1$ and a landing spot worth only $2$, for a total of $1 + 1.8 = 2.8$ against an expectation of $6$. **Relative to what was expected, this was a bad outcome**, and $\delta = -3.2$ records exactly that.

The critic simultaneously concluded it had been over-optimistic about $s$ and marked it down from $6$ to $5.36$. Both conclusions — the state is worth less, and this action is not the way to realize it — came from the same number, which is the whole economy of actor–critic.

Note the connection to this lesson: $\delta$ here is $\hat A^{(1)}$, the $\lambda = 0$ advantage estimate. A GAE-based agent would blend it with $\delta$'s from subsequent steps, and if the following steps went unexpectedly well the blended advantage could come out positive — a different verdict on the same action, reached by looking further ahead.

</details>

## Connections

- **Backward:** the architecture is [Lesson 3.5](03-05-actor-critic-methods.md)'s, and GAE is [Lesson 2.7](02-07-n-step-returns-and-the-lambda-return.md)'s λ-return applied to advantages, computed by [Lesson 2.8](02-08-eligibility-traces-backward-view.md)'s backward recursion. The parallelism addresses the same correlated-data problem as [Lesson 4.1](04-01-deep-q-networks.md)'s replay, while avoiding the off-policy leg of [Lesson 3.2](03-02-approximate-control-deadly-triad.md)'s triad.
- **Forward:** [Lesson 4.3](04-03-ppo-a-taste.md) keeps this entire setup — parallel workers, GAE advantages, shared actor–critic, entropy bonus — and changes only the actor's objective, so that a batch can be reused for several epochs instead of one gradient step. That single change is most of what separates A2C from the current default.
- **Sideways:** the entropy bonus is the same maximum-entropy principle that appears as the soft Bellman operator in [Lesson 1.6](01-06-value-iteration-and-convergence.md)'s P3, and as entropy regularization throughout [`machine-learning`](../../machine-learning/syllabus.md) — in every case, a penalty for over-confidence that keeps a distribution from collapsing before the evidence justifies it.
