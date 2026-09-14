# Reinforcement Learning · Lesson 3.3: The policy gradient theorem

> ⏱ ~15 min · Module 3: Function Approximation & Policy Gradients · Builds on: [3.1 (value-function approximation)](03-01-value-function-approximation.md), [1.3 (value functions and the Bellman expectation equation)](01-03-value-functions-bellman-expectation.md) · Unlocks: [3.4 (REINFORCE)](03-04-reinforce.md), [3.5 (actor–critic methods)](03-05-actor-critic-methods.md)

## Why this matters

Everything so far learns a value function and *reads* a policy off it by taking an arg-max. That indirection has three costs, and this lesson removes all three at once by parameterizing the policy itself and doing gradient ascent on performance.

The costs are concrete. A greedy policy **changes discontinuously**: an arbitrarily small change to $Q$ can flip the arg-max and swap the action entirely, which is exactly the kind of discontinuity that makes convergence proofs hard and training unstable. A greedy policy is **deterministic**, and the worked example below exhibits a problem where the optimal policy is a coin weighted $0.586$ and every near-deterministic policy is nearly four times worse. And an arg-max over a **continuous** action space is itself an optimization problem, so value-based control does not extend to robot torques without extra machinery.

The theorem that makes the alternative possible is genuinely surprising: **you can compute the gradient of long-run performance without differentiating the environment.** That the unknown transition dynamics drop out is what turns a dead end into the foundation of REINFORCE, actor–critic, A2C and PPO.

## The idea

Parameterize the policy directly, $\pi_\theta(a\mid s)$ — typically a softmax over action preferences, or a Gaussian for continuous actions — and climb the performance measure $J(\theta)$:

$$\theta \leftarrow \theta + \alpha\nabla_\theta J(\theta)$$

The obstacle looks fatal. $J(\theta)$ depends on $\theta$ through two channels: which actions get chosen (fine, we know $\pi_\theta$) **and which states get visited** (not fine — that runs through the environment's transition probabilities, which we do not know and cannot differentiate).

> The policy gradient theorem says the second channel contributes nothing you need to compute. The state distribution appears in the answer, but only as something to *sample from* — never as something to differentiate.

The trick that makes it work is one line of calculus, the **likelihood-ratio** or **score function** identity:

$$\nabla_\theta \pi_\theta(a\mid s) = \pi_\theta(a\mid s)\,\nabla_\theta\log\pi_\theta(a\mid s)$$

This converts a gradient of a probability into a probability times a gradient — which is to say, into something you can estimate by sampling.

## The formal version

**The objective.** For episodic tasks, performance is the value of the start state:

$$J(\theta) = V^{\pi_\theta}(s_0)$$

**The theorem.**

$$\boxed{\;\nabla_\theta J(\theta) \;\propto\; \sum_s \mu(s)\sum_a Q^{\pi_\theta}(s,a)\,\nabla_\theta\pi_\theta(a\mid s)\;}$$

where $\mu$ is the on-policy state distribution. In words: **to improve, push up the probability of actions with high action-value, averaged over the states you actually visit.** *(card: [policy gradient theorem](../reference.md#policy-gradient-theorem))*

**What is remarkable is what is absent.** There is no $\nabla_\theta\mu(s)$. Changing $\theta$ certainly changes which states get visited — and that effect is real and is part of $\nabla J$ — yet it contributes nothing that must be computed. The derivative of the state distribution is not in the formula.

**The sampling form.** Apply the score-function identity and fold $\mu$ and $\pi$ into the expectation:

$$\nabla_\theta J(\theta) \propto \mathbb{E}_{\pi_\theta}\!\big[\,Q^{\pi_\theta}(S_t,A_t)\,\nabla_\theta\log\pi_\theta(A_t\mid S_t)\,\big]$$

Every term is now something a running agent produces: the state and action are what happened, $Q$ can be estimated ([Lesson 3.4](03-04-reinforce.md) uses the return; [Lesson 3.5](03-05-actor-critic-methods.md) uses a learned critic), and $\nabla\log\pi_\theta$ is an analytic derivative of your own policy. *(card: [score function](../reference.md#score-function))*

**Reading the update.** The direction $\nabla_\theta\log\pi_\theta(a\mid s)$ is the direction in parameter space that makes action $a$ *more likely* at $s$. Multiplying by $Q$ scales it by how good the action is: good actions get pushed up, bad ones (negative $Q$) pushed down, in proportion. That is the entire algorithm.

**Softmax policies.** With preferences $h(s,a;\theta)$ and $\pi_\theta(a\mid s) = \dfrac{e^{h(s,a;\theta)}}{\sum_{a'}e^{h(s,a';\theta)}}$, the score has a clean form:

$$\nabla_\theta\log\pi_\theta(a\mid s) = \nabla_\theta h(s,a;\theta) - \sum_{a'}\pi_\theta(a'\mid s)\nabla_\theta h(s,a';\theta)$$

In words: raise the chosen action's preference and lower every action's preference in proportion to how likely it already was. For linear preferences $h = \theta_a$ this reduces to $\mathbb{1}[a'=a] - \pi_\theta(a'\mid s)$, which is what [Lesson 3.4](03-04-reinforce.md)'s worked example uses.

**Why the state distribution drops out — the shape of the proof.** Differentiate $V^\pi(s) = \sum_a\pi_\theta(a\mid s)Q^\pi(s,a)$ with the product rule:

$$\nabla V^\pi(s) = \sum_a\Big[\nabla\pi_\theta(a\mid s)Q^\pi(s,a) + \pi_\theta(a\mid s)\nabla Q^\pi(s,a)\Big].$$

The first term is the one we want. Expand the second with $Q^\pi(s,a) = r(s,a) + \gamma\sum_{s'}p(s'\mid s,a)V^\pi(s')$ — and note that $r$ and $p$ do **not** depend on $\theta$, so $\nabla Q^\pi(s,a) = \gamma\sum_{s'}p(s'\mid s,a)\nabla V^\pi(s')$. The gradient of the value at $s$ is therefore the "want" term plus a discounted gradient at the successor states. Unrolling that recursion gives a sum over all states weighted by how often they are reached — which is $\mu$ — with only the "want" terms surviving.

**The reason the dynamics vanish is that they do not depend on $\theta$.** The environment is fixed; only the policy moves. That is the whole content of the theorem, and it is why this works without a model.

**Three advantages over value-based control**, now precise:

1. **Smooth policy change.** $\pi_\theta$ moves continuously with $\theta$ — no arg-max discontinuity.
2. **Stochastic optimal policies are representable**, which matters whenever the state is aliased (Example 2 below) or an opponent can exploit predictability.
3. **Continuous action spaces** need no arg-max: output the parameters of a distribution and sample.

The cost is that policy gradients are **on-policy** and **high-variance**, which is what the next two lessons attack.

## Picture

![Left: a corridor of three identical-looking square states followed by a terminal square, with the middle state highlighted in coral and labelled actions reversed here, annotated that every step costs minus one and that going right from the third state ends the episode, and that a value-based agent must pick one action per appearance while every state has the same appearance. Right: a plot of the value of the start state against the probability of choosing right, a curve peaking at about minus 11.66 near probability 0.586, with the optimum marked and two coral points at probabilities 0.05 and 0.95 marking where an epsilon-greedy agent is confined](assets/03-03-fig1.svg)

The right panel is the case for this lesson. The peak is interior, and the two points a value-based method can reach are both far down the sides.

## Worked examples

**Example 1 (mechanical): the score function of a softmax.** Two actions with preferences $\theta = (\theta_1,\theta_2) = (0.5,\ 0)$, so

$$\pi(a_1) = \frac{e^{0.5}}{e^{0.5}+e^{0}} = \frac{1.6487}{2.6487} = 0.6225, \qquad \pi(a_2) = 0.3775.$$

For linear preferences the score is $\nabla_\theta\log\pi(a_1) = \mathbf{e}_1 - \boldsymbol{\pi}$, where $\mathbf{e}_1 = (1,0)$:

$$\nabla_\theta\log\pi(a_1) = (1 - 0.6225,\ -0.3775) = (0.3775,\ -0.3775).$$

Suppose $Q(s,a_1) = 3$. Then the policy-gradient contribution is $3(0.3775,\ -0.3775) = (1.1325,\ -1.1325)$, and with $\alpha = 0.1$,

$$\theta \leftarrow (0.5 + 0.1133,\ 0 - 0.1133) = (0.6133,\ -0.1133),$$

which gives $\pi(a_1) = 0.6739$ — **up from $0.6225$, as it should be for an action worth $+3$.**

Two structural facts worth extracting. First, **the score components always sum to zero** ($0.3775 - 0.3775 = 0$), because the probabilities must keep summing to one — so raising one action necessarily lowers the others. Second, the score is *largest* when the action is *least* likely: at $\pi(a_1) = 0.5$ the score is $\pm0.5$, while at $\pi(a_1) = 0.99$ it is only $\pm0.01$. **A policy that is already confident barely moves**, which is a built-in brake and also a way to get stuck.

**Example 2 (why you'd care): the best policy is a weighted coin.** A corridor of three non-terminal states in a row. Every step costs $-1$. From $s_0$, *right* moves to $s_1$ and *left* is blocked; from $s_2$, *right* ends the episode and *left* goes back to $s_1$. **In $s_1$ the actions are reversed**: *right* goes back to $s_0$ and *left* goes forward to $s_2$.

The catch is that all three states produce the **identical** feature vector, so any policy — value-based or not — must use the same action probabilities in all three. Let $p$ be the probability of *right*. Solving the three-equation system gives an exact closed form:

$$J(p) = \frac{2(2-p)}{p(p-1)}$$

Differentiating, the critical point in $(0,1)$ is $p^* = 2 - \sqrt2 \approx 0.5858$, at which

$$J^* = -6 - 4\sqrt2 \approx \mathbf{-11.66}.$$

Now the comparison. A value-based agent with $\varepsilon$-greedy exploration has a deterministic greedy action, so its actual behaviour is pinned near $p = \varepsilon/2$ or $p = 1-\varepsilon/2$:

| policy | $J$ |
|---|---|
| $p = 0.05$ (almost always *left*) | $-82.11$ |
| $p = 0.95$ (almost always *right*) | $-44.21$ |
| **$p = 0.586$ (optimal)** | $\mathbf{-11.66}$ |

**The best an $\varepsilon$-greedy value-based agent can do here is $-44.2$, nearly four times worse than the optimum**, and no amount of learning fixes it — the deficiency is in what the policy class can represent, not in the estimates. A policy-gradient method parameterizes $p$ directly and climbs straight to $0.586$.

Why a stochastic policy is genuinely needed: the agent cannot tell the three states apart, and the middle one rewards the opposite action. Any deterministic choice is right in two states and wrong in the third, and being wrong in $s_1$ means bouncing back to $s_0$ for ever. **Randomizing is the only way to eventually get past a state you cannot identify** — the same conclusion as [Lesson 1.2](01-02-markov-decision-processes.md)'s aliased corridor, now with the cost measured exactly.

## Watch out

- **You might think** the policy gradient theorem avoids the state distribution — **but actually** $\mu$ is right there in the formula. What it avoids is *differentiating* $\mu$. You still need samples from it, which is why policy gradient methods are inherently **on-policy**: the expectation is taken under the current policy's state distribution, and using data from an older policy requires the importance-sampling correction of [Lesson 2.6](02-06-off-policy-learning-importance-sampling.md) — which is exactly what [Lesson 4.3](04-03-ppo-a-taste.md)'s ratio is.
- **You might think** softmax policies converge to deterministic ones automatically as learning proceeds — **but actually** they converge to whatever is optimal, which may be stochastic (Example 2), and when the optimum *is* deterministic the preferences must diverge to infinity to express it. That is slow, and it makes the policy increasingly insensitive to further learning, since the score shrinks toward zero as the policy becomes confident.
- **You might think** the theorem's proportionality constant can be ignored because it is absorbed into $\alpha$ — **but actually** for episodic tasks the constant is the average episode length, which changes as the policy improves. A policy that shortens its episodes silently shrinks its own effective step size. It is usually harmless, and it is one of the reasons policy-gradient methods are sensitive to learning rates in a way that supervised learning is not.

## One-liner

> Push up the log-probability of actions in proportion to how good they turned out — and the environment's unknown dynamics cancel out of the gradient, because they do not depend on your parameters.

## Problems

**P1 (🟢)** A softmax policy over three actions has preferences $\theta = (1,\ 0,\ 0)$.

(a) Compute the three action probabilities.
(b) Compute $\nabla_\theta\log\pi(a_2)$ using $\mathbf{e}_2 - \boldsymbol{\pi}$.
(c) Verify the components sum to zero and explain why they must.
(d) With $Q(s,a_2) = -2$ and $\alpha = 0.1$, give the updated $\theta$ and state whether $\pi(a_2)$ rose or fell.

**P2 (🟡)** For the corridor of Example 2, with $J(p) = \dfrac{2(2-p)}{p(p-1)}$:

(a) Evaluate $J(0.5)$ and $J(0.586)$, and state the gap.
(b) Compute $J(p)$ as $p \to 0^+$ and as $p\to1^-$, and explain both limits in words.
(c) A colleague suggests fixing the problem by giving the agent a step counter so the three states become distinguishable. State what the optimal policy becomes and its value.
(d) State the general lesson about when a stochastic policy is genuinely optimal, as opposed to merely useful for exploration.

**P3 (🔴)** The **baseline invariance** result, which [Lesson 3.4](03-04-reinforce.md) relies on: for any function $b(s)$ that does not depend on the action,

$$\sum_a b(s)\,\nabla_\theta\pi_\theta(a\mid s) = 0.$$

(a) Prove it in two lines.
(b) State what this means for the policy gradient: which quantity may be replaced by which, and why the gradient is unchanged.
(c) Verify it numerically for the two-action softmax of Example 1 ($\boldsymbol{\pi} = (0.6225,\ 0.3775)$) with $b = 5$.
(d) If the expected gradient is unchanged, explain why choosing a good baseline nonetheless matters enormously in practice.

<details>
<summary>Solutions</summary>

**P1**

(a) $e^1 = 2.7183$, $e^0 = 1$, $e^0 = 1$, summing to $4.7183$:

$$\pi = \left(\frac{2.7183}{4.7183},\ \frac{1}{4.7183},\ \frac{1}{4.7183}\right) = (\mathbf{0.5761},\ \mathbf{0.2119},\ \mathbf{0.2119}).$$

(b) $\nabla_\theta\log\pi(a_2) = \mathbf{e}_2 - \boldsymbol{\pi} = (0,1,0) - (0.5761, 0.2119, 0.2119)$

$$= (\mathbf{-0.5761},\ \mathbf{0.7881},\ \mathbf{-0.2119}).$$

(c) $-0.5761 + 0.7881 - 0.2119 = 0.0001 \approx \mathbf{0}$ (rounding).

They must sum to zero because $\sum_a\pi(a) = 1$ identically in $\theta$, so differentiating both sides gives $\sum_a\nabla_\theta\pi(a) = \nabla_\theta(1) = 0$. **The probabilities live on a simplex, and a gradient must be tangent to it** — any move that raises one action's probability has to lower the others by the same total.

(d) The update is $\theta \leftarrow \theta + \alpha Q\nabla\log\pi(a_2) = (1,0,0) + 0.1(-2)(-0.5761, 0.7881, -0.2119)$:

$$= (1,0,0) + (0.1152,\ -0.1576,\ 0.0424) = (\mathbf{1.1152},\ \mathbf{-0.1576},\ \mathbf{0.0424}).$$

New probabilities: $e^{1.1152} = 3.0503$, $e^{-0.1576} = 0.8542$, $e^{0.0424} = 1.0433$, summing to $4.9478$, so $\pi(a_2) = 0.8542/4.9478 = \mathbf{0.1726}$.

**It fell**, from $0.2119$ to $0.1726$ — correct, since $a_2$ was worth $-2$. Note that the negative $Q$ flipped the sign of the whole update, so an action with negative value is pushed *down* by the same mechanism that pushes a good one up.

**P2**

(a) $J(0.5) = \dfrac{2(1.5)}{0.5(-0.5)} = \dfrac{3}{-0.25} = \mathbf{-12}$.

$J(0.586) = \dfrac{2(1.414)}{0.586(-0.414)} = \dfrac{2.828}{-0.2426} = \mathbf{-11.657}$.

The gap is only $\mathbf{0.34}$ — an unweighted coin is almost as good as the optimal one. **The peak is flat**, which is good news for a gradient method (it does not need to land precisely) and a reminder that the dramatic numbers in the table come from the *ends*, not from fine-tuning near the top.

(b) As $p\to0^+$: the numerator tends to $4$ and the denominator $p(p-1)\to 0^-$, so $J \to -\infty$. In words: an agent that never goes right **never leaves $s_0$**, since *left* there is blocked, and accumulates $-1$ for ever.

As $p\to1^-$: the numerator tends to $2$ and $p(p-1)\to 0^-$, so again $J\to-\infty$. In words: an agent that always goes right **oscillates between $s_0$ and $s_1$ for ever** — right takes it from $s_0$ to $s_1$, and right in the reversed state $s_1$ takes it straight back.

**Both deterministic policies fail, in different ways**, which is precisely why the optimum is interior.

(c) With a step counter the three states are distinguishable, so the policy can specify a different action for each. The optimal deterministic policy is then *right* in $s_0$, *left* in $s_1$ (the reversed state, so *left* moves forward), and *right* in $s_2$ — reaching the terminal state in **three steps**, for a value of $\mathbf{-3}$.

That is nearly four times better than $-11.66$, and it is the real lesson about representation: **enlarging the state ([Lesson 1.2](01-02-markov-decision-processes.md)) beats optimizing within an impoverished one.** The stochastic policy is the best answer to the wrong problem.

(d) A stochastic policy is genuinely optimal when **the agent cannot distinguish states that require different actions** — i.e. under partial observability or function approximation that aliases states — and, more generally, when being predictable is itself costly, as against an adversary in a game.

This is distinct from exploration. Exploratory randomness is a temporary device for gathering information, and it should decay to nothing (the GLIE schedules of [Lesson 2.2](02-02-monte-carlo-control.md)). The randomness here is **permanent and load-bearing**: it is the optimal behaviour even with perfect knowledge of the MDP, and decaying it to zero would take the value from $-11.66$ to $-\infty$.

**P3**

(a) $b(s)$ does not depend on $a$, so it comes out of the sum, and the sum of the probabilities is identically $1$:

$$\sum_a b(s)\nabla_\theta\pi_\theta(a\mid s) = b(s)\,\nabla_\theta\sum_a \pi_\theta(a\mid s) = b(s)\,\nabla_\theta(1) = 0. \qquad\blacksquare$$

(b) It means $Q^{\pi}(s,a)$ in the theorem may be replaced by $Q^\pi(s,a) - b(s)$ for **any** state-dependent $b$, and the gradient is exactly unchanged:

$$\nabla_\theta J \propto \sum_s\mu(s)\sum_a\big[Q^\pi(s,a) - b(s)\big]\nabla_\theta\pi_\theta(a\mid s),$$

since the subtracted piece contributes zero at every state by (a). The natural choice is $b(s) = V^\pi(s)$, which makes the bracket the **advantage** $A^\pi(s,a) = Q^\pi(s,a) - V^\pi(s)$ — the subject of [Lesson 3.5](03-05-actor-critic-methods.md).

(c) With $\boldsymbol{\pi} = (0.6225, 0.3775)$, the score for $a_1$ is $(0.3775, -0.3775)$ and for $a_2$ it is $\mathbf{e}_2 - \boldsymbol{\pi} = (-0.6225, 0.6225)$. Now $\nabla\pi(a) = \pi(a)\nabla\log\pi(a)$:

$$\nabla\pi(a_1) = 0.6225(0.3775,-0.3775) = (0.2350,\ -0.2350)$$
$$\nabla\pi(a_2) = 0.3775(-0.6225,\ 0.6225) = (-0.2350,\ 0.2350)$$

Summing with the constant baseline $b = 5$:

$$5\big[(0.2350,-0.2350) + (-0.2350,0.2350)\big] = 5(0,\ 0) = \mathbf{(0,0)}\ \checkmark$$

(d) Because the theorem is about the **expectation**, and the algorithm only ever sees **samples**.

Subtracting a baseline leaves the mean of the gradient estimator untouched while changing its *variance*, sometimes by orders of magnitude. Concretely: if every $Q$ in a task lies between $990$ and $1010$, the unbaselined estimator multiplies each score by a number around $1000$, so the sampling noise is scaled up a thousandfold and the useful signal — the $\pm10$ spread that distinguishes good actions from bad — is swamped. Subtracting $b = 1000$ leaves scores multiplied by numbers in $[-10,10]$, with identical mean and a hundredfold smaller variance.

**Same expected direction, dramatically different number of samples needed to see it** — which is the difference between an algorithm that works and one that does not. This is why [Lesson 3.4](03-04-reinforce.md) introduces the baseline immediately after REINFORCE, and why [Lesson 3.5](03-05-actor-critic-methods.md) is built around learning the best available one.

</details>

## Flashback

**From Lesson 3.1 (Value-function approximation):** Features $\mathbf{x}(s) = (1,\ s)$, weights $\mathbf{w} = (1,\ 0.5)$, $\gamma = 0.8$, $\alpha = 0.05$. The agent moves from $s = 4$ to $s' = 6$ with reward $R = -1$.

(a) Compute $\hat V(4)$ and $\hat V(6)$.
(b) Compute the TD error and perform the semi-gradient update.
(c) Compute $\hat V(4)$ and $\hat V(6)$ after the update.
(d) State whether the TD error would now be smaller, and explain what that reveals about semi-gradient methods.

<details>
<summary>Solution</summary>

(a) $\hat V(4) = 1 + 0.5(4) = \mathbf{3}$ and $\hat V(6) = 1 + 0.5(6) = \mathbf{4}$.

(b) $\delta = R + \gamma\hat V(6) - \hat V(4) = -1 + 0.8(4) - 3 = -1 + 3.2 - 3 = \mathbf{-0.8}$.

$$\mathbf{w} \leftarrow (1,\ 0.5) + 0.05(-0.8)(1,\ 4) = (1,0.5) + (-0.04,\ -0.16) = \mathbf{(0.96,\ 0.34)}.$$

(c) $\hat V(4) = 0.96 + 0.34(4) = 0.96 + 1.36 = \mathbf{2.32}$ and $\hat V(6) = 0.96 + 0.34(6) = 0.96 + 2.04 = \mathbf{3.00}$.

(d) The new TD error is

$$\delta' = -1 + 0.8(3.00) - 2.32 = -1 + 2.40 - 2.32 = \mathbf{-0.92},$$

which is **larger in magnitude** than the original $-0.8$.

This is the key revelation: the update moved $\hat V(4)$ toward its target of $2.2$ — good — but because the weights are shared, it also dragged $\hat V(6)$ down from $4$ to $3$, which *lowered the target itself* from $2.2$ to $1.4$. The estimate advanced by $0.68$ while the target retreated by $0.8$, so the gap widened.

**Semi-gradient methods chase a target that their own updates move**, and there is no guarantee the chase closes. Here one step made things worse; whether repeated steps converge depends on whether the target's retreat is smaller than the estimate's advance in the long run, and [Lesson 3.2](03-02-approximate-control-deadly-triad.md)'s Baird counterexample is the case where it is not.

Note the contrast with this lesson's subject: a policy gradient differentiates a genuine objective $J(\theta)$, so it always has an honest ascent direction and nothing analogous can happen. That structural difference — a real gradient of a real objective — is much of why policy-gradient methods are preferred when stability matters.

</details>

## Connections

- **Backward:** the theorem's $Q^{\pi_\theta}$ is [Lesson 1.3](01-03-value-functions-bellman-expectation.md)'s action-value function, and the on-policy distribution $\mu$ is the same one weighting [Lesson 3.1](03-01-value-function-approximation.md)'s objective. The aliasing that makes a stochastic policy optimal is [Lesson 1.2](01-02-markov-decision-processes.md)'s partial observability with a price attached.
- **Forward:** [Lesson 3.4](03-04-reinforce.md) turns the sampling form into an algorithm by estimating $Q$ with the Monte Carlo return, and immediately adds P3's baseline to control the variance. [Lesson 3.5](03-05-actor-critic-methods.md) replaces the return with a learned critic, and [Lesson 4.3](04-03-ppo-a-taste.md) makes the update safe to take in large steps. The on-policy requirement flagged here is what forces PPO's importance ratio.
- **Sideways:** the score-function identity is the same trick behind the REINFORCE estimator in variational inference and the likelihood-ratio method in [`operations-research`](../../operations-research/syllabus.md)'s simulation optimization — in all three cases it converts "differentiate a distribution" into "sample and weight", which is the only move available when the distribution is known but the system it drives is not.
