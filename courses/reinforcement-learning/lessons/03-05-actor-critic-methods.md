# Reinforcement Learning · Lesson 3.5: Actor–critic methods

> ⏱ ~15 min · Module 3: Function Approximation & Policy Gradients · Builds on: [3.4 (REINFORCE)](03-04-reinforce.md), [2.3 (temporal-difference learning)](02-03-temporal-difference-learning-td0.md) · Unlocks: [4.2 (A2C, A3C and advantage estimation)](04-02-a2c-a3c-advantage-estimation.md), [4.3 (PPO)](04-03-ppo-a-taste.md)

## Why this matters

[Lesson 3.4](03-04-reinforce.md) ended with a baseline that helps and does not help enough. Subtracting $\hat V(S_t)$ removes the part of the return explained by *which state you were in*. It does nothing about the part contributed by everything that happens **after** the action — and on any task with a long or noisy tail, that is most of the variance.

Actor–critic fixes this with the move that defined Module 2: stop waiting for the return and bootstrap. Replace $G_t$ by $R_{t+1} + \gamma\hat V(S_{t+1})$ and the entire downstream trajectory is collapsed into one estimate of its mean.

The payoff is large enough to check numerically below — on a small example the variance drops from $100$ to exactly $0$ with an unchanged expected gradient — and the architecture that results is the one everything modern is built on. A2C, A3C, PPO, DDPG, SAC and the RLHF pipelines used to fine-tune language models are all actor–critic.

## The idea

Two learners, sharing one error signal:

- the **actor** is the policy $\pi_\theta(a\mid s)$ — it chooses actions and is updated by the policy gradient;
- the **critic** is a value function $\hat V(s;\mathbf{w})$ — it evaluates and is updated by TD.

> The critic does not choose anything. It tells the actor whether what just happened was better or worse than expected, and the actor moves accordingly.

The connective tissue is the TD error, and the reason this works is one identity:

$$\mathbb{E}\big[\underbrace{R_{t+1} + \gamma V^\pi(S_{t+1}) - V^\pi(S_t)}_{\delta_t}\ \big|\ S_t = s,\ A_t = a\big] = Q^\pi(s,a) - V^\pi(s) = A^\pi(s,a)$$

**The TD error is an unbiased estimate of the advantage.** So the quantity [Lesson 2.3](02-03-temporal-difference-learning-td0.md) introduced as "how surprised were you" is exactly the quantity [Lesson 3.4](03-04-reinforce.md)'s policy gradient wants to multiply the score by. One number, computed once, serves both learners.

## The formal version

**One-step actor–critic.** At each step, observe $S_t, A_t, R_{t+1}, S_{t+1}$ and compute

$$\delta_t = R_{t+1} + \gamma\hat V(S_{t+1};\mathbf{w}) - \hat V(S_t;\mathbf{w})$$

then update both:

$$\mathbf{w} \leftarrow \mathbf{w} + \alpha^{\mathbf{w}}\,\delta_t\,\nabla_\mathbf{w}\hat V(S_t;\mathbf{w}) \qquad\qquad \theta \leftarrow \theta + \alpha^{\theta}\,\delta_t\,\nabla_\theta\log\pi_\theta(A_t\mid S_t)$$

*(card: [actor-critic](../reference.md#actor-critic), [advantage function](../reference.md#advantage-function))*

The first is [Lesson 3.1](03-01-value-function-approximation.md)'s semi-gradient TD; the second is [Lesson 3.4](03-04-reinforce.md)'s policy gradient with $\delta_t$ in place of $G_t - b$. **Neither is new. What is new is that they share $\delta_t$.**

**What changed relative to REINFORCE.** Three things at once:

| | REINFORCE + baseline | actor–critic |
|---|---|---|
| multiplier | $G_t - \hat V(S_t)$ | $R_{t+1} + \gamma\hat V(S_{t+1}) - \hat V(S_t)$ |
| bias | none | biased while $\hat V \ne V^\pi$ |
| variance | full trajectory | one step |
| updates | after the episode | **every step** |
| continuing tasks | no | **yes** |

The baseline's role has not gone away — $\hat V(S_t)$ is still subtracted. What is added is that $\hat V(S_{t+1})$ *replaces* the rest of the trajectory. **The baseline centres; the bootstrap truncates.**

**The bias is real and is the price.** $\hat V$ is wrong early in training, so $\delta_t$ is a biased estimate of the advantage and the actor is being pushed in a direction that is not quite the gradient. REINFORCE was unbiased and unusable; actor–critic is biased and works. This is [Lesson 2.3](02-03-temporal-difference-learning-td0.md)'s bias–variance trade, made once more at the level of the gradient rather than the value.

**Interpolating.** Nothing forces the one-step choice. Using an $n$-step return in the critic's target gives $n$-step actor–critic, and the $\lambda$-return of [Lesson 2.7](02-07-n-step-returns-and-the-lambda-return.md) gives a continuous dial between actor–critic ($\lambda = 0$) and REINFORCE-with-baseline ($\lambda = 1$). [Lesson 4.2](04-02-a2c-a3c-advantage-estimation.md)'s generalized advantage estimation is exactly this dial applied to the advantage.

**Two step sizes, and they matter.** $\alpha^{\mathbf{w}}$ is typically larger than $\alpha^\theta$: a critic that lags behind the policy gives the actor systematically wrong advantages, so the critic should track faster than the actor moves. Getting the ratio wrong is one of the commonest ways for an actor–critic implementation to fail quietly.

## Picture

![Left: an architecture diagram with three boxes — an actor holding the policy, a critic holding the value function, and the environment — with an action arrow from the actor down to the environment, a reward-and-next-state arrow returning up to both actor and critic, and a short coral arrow from the critic up to the actor labelled with the TD error delta, annotated that the critic trains itself on delta and hands the same delta to the actor. Right: a bar chart of the variance of the gradient estimate for three methods, showing REINFORCE at 100.25, REINFORCE plus a baseline at 100.00, and actor-critic at exactly zero, with a note that all three have the same mean of minus 0.5](assets/03-05-fig1.svg)

The middle bar is the point. A baseline that is theoretically correct and optimally chosen barely moved the variance, because the noise it needed to remove arrives after it has done its work.

## Worked examples

**Example 1 (mechanical): one actor–critic step.** Two actions, softmax preferences $\theta = (0,0)$ so $\boldsymbol{\pi} = (0.5,0.5)$. Critic estimates $\hat V(s) = 4$ and $\hat V(s') = 7$. The agent takes $a_1$, receives $R = 2$, and lands in $s'$. Take $\gamma = 0.9$, $\alpha^\theta = 0.1$, $\alpha^{\mathbf{w}} = 0.2$, and a tabular critic (so $\nabla_\mathbf{w}\hat V(s) $ is the indicator for $s$).

$$\delta = 2 + 0.9(7) - 4 = 2 + 6.3 - 4 = \mathbf{4.3}$$

*Critic:* $\hat V(s) \leftarrow 4 + 0.2(4.3) = \mathbf{4.86}$.

*Actor:* the score for $a_1$ is $(1,0) - (0.5,0.5) = (0.5,-0.5)$, so

$$\theta \leftarrow (0,0) + 0.1(4.3)(0.5,\ -0.5) = \mathbf{(0.215,\ -0.215)},$$

giving $\pi(a_1) = \dfrac{e^{0.215}}{e^{0.215}+e^{-0.215}} = \mathbf{0.6058}$, up from $0.5$.

**One observation drove two updates.** The critic learned that $s$ is worth more than it thought; the actor learned that $a_1$ is worth taking. Both conclusions came from the single number $4.3$, and the agent never waited for the episode to end.

**Example 2 (why you'd care): the baseline barely helps and the critic removes everything.** A two-step MDP, $\gamma = 1$. From $s_0$, action $a_1$ earns $0$ and action $a_2$ earns $2$; **both** lead to $s_1$. From $s_1$ the single action earns $+20$ or $-20$ with probability $\tfrac12$ each and terminates.

The true values: $V^\pi(s_1) = 0$, $Q^\pi(s_0,a_1) = 0$, $Q^\pi(s_0,a_2) = 2$, so with $\boldsymbol{\pi} = (0.5,0.5)$, $V^\pi(s_0) = 1$ and the advantages are $-1$ and $+1$.

Enumerate all four outcomes (action $\times$ coin) and compute the first component of each gradient estimator. The score is $(0.5,-0.5)$ for $a_1$ and $(-0.5,0.5)$ for $a_2$.

| estimator | the four values | mean | variance |
|---|---|---|---|
| REINFORCE, $G\nabla\log\pi$ | $10,\ -10,\ -11,\ 9$ | $-0.5$ | $\mathbf{100.25}$ |
| $+$ baseline, $(G-V(s_0))\nabla\log\pi$ | $9.5,\ -10.5,\ -10.5,\ 9.5$ | $-0.5$ | $\mathbf{100.00}$ |
| actor–critic, $\delta\nabla\log\pi$ | $-0.5,\ -0.5,\ -0.5,\ -0.5$ | $-0.5$ | $\mathbf{0.00}$ |

**All three have the identical mean, which is the true gradient.** The baseline — correctly chosen as $V^\pi(s_0) = 1$ — reduced the variance from $100.25$ to $100$, a quarter of one percent. The critic reduced it to zero.

The reason is visible in the numbers. The dominant noise is the $\pm20$ coin flip in $s_1$, which happens **after** the action being evaluated and has nothing to do with it. A baseline $b(s_0)$ is a single constant subtracted at $s_0$; it cannot know which way the coin will land, so it cannot remove that noise from the multiplier. The TD error never contains the coin at all: $\delta = R_{t+1} + \gamma\hat V(s_1) - \hat V(s_0)$ substitutes $\hat V(s_1) = 0$, the *mean* of the coin, for the coin itself.

**The critic's job is to stand in for the future so the actor never has to sample it.** That is a different job from the baseline's, which is why doing both is better than doing either.

Two honest caveats. The zero is exact here because the critic is exact and the reward at $s_0$ is deterministic; with an imperfect $\hat V$ the variance is small rather than zero, and the error becomes bias instead. And the advantage is being estimated from a *biased* quantity the moment $\hat V \ne V^\pi$ — which is the whole trade, stated once more.

## Watch out

- **You might think** the critic makes the actor's updates better because it is more accurate than a sampled return — **but actually** it is *less* accurate, in the sense of being biased. It is better because it is enormously less noisy, and in practice a biased low-variance estimate beats an unbiased high-variance one. If the critic is badly wrong, actor–critic is genuinely worse than REINFORCE, which is the failure mode when $\alpha^{\mathbf{w}}$ is too small.
- **You might think** the critic is a value-based controller that the actor consults for the best action — **but actually** it evaluates only, and it evaluates $V$, not $Q$, so it could not name a best action if asked. The policy lives entirely in the actor. This is why actor–critic handles continuous actions without difficulty: nothing ever takes an arg-max.
- **You might think** actor–critic escapes [Lesson 3.2](03-02-approximate-control-deadly-triad.md)'s deadly triad because it optimizes a real objective — **but actually** only the *actor* does. The critic is semi-gradient TD with function approximation, so if its data goes off-policy — a replay buffer, or stale trajectories from parallel workers — the critic has all three legs and can diverge, taking the actor with it. This is the main reason A3C ([Lesson 4.2](04-02-a2c-a3c-advantage-estimation.md)) keeps its workers nearly on-policy.

## One-liner

> One TD error, computed once: it teaches the critic what states are worth and simultaneously tells the actor whether the action it just took beat expectations.

## Problems

**P1 (🟢)** An actor–critic agent has $\hat V(s) = -3$, $\hat V(s') = 1$, takes an action with softmax probabilities $(0.3,\ 0.7)$, selects $a_1$, and receives $R = -1$. Take $\gamma = 0.9$, $\alpha^\theta = 0.5$, $\alpha^{\mathbf{w}} = 0.1$, tabular critic.

(a) Compute $\delta$.
(b) Update the critic and give the new $\hat V(s)$.
(c) Compute $\nabla_\theta\log\pi(a_1)$ and update the actor.
(d) State whether $\pi(a_1)$ rose or fell, and reconcile that with the fact that $R$ was negative.

**P2 (🟡)** In Example 2's MDP, suppose the critic is imperfect: $\hat V(s_0) = 1$ (correct) but $\hat V(s_1) = 3$ (should be $0$).

(a) Compute the four values of the actor–critic estimator's first component.
(b) Compute its mean and variance.
(c) State whether the estimator is still unbiased, and identify the source of any bias.
(d) Compare with the correct-critic case and state what the error in $\hat V(s_1)$ cost.

**P3 (🔴)** The identity $\mathbb{E}[\delta_t\mid S_t=s,A_t=a] = A^\pi(s,a)$ is what licenses using the TD error as the actor's multiplier.

(a) Prove it, stating where you use the definition of $Q^\pi$.
(b) The proof assumes $\hat V = V^\pi$. State what $\mathbb{E}[\delta_t\mid s,a]$ equals when $\hat V \ne V^\pi$, writing $\epsilon(s) = \hat V(s) - V^\pi(s)$.
(c) Using (b), state the condition on $\epsilon$ under which the actor's expected update is still exactly the policy gradient, even with a wrong critic.
(d) Explain why the condition in (c) is not as useless as it looks, by connecting it to the baseline-invariance result of [Lesson 3.3](03-03-the-policy-gradient-theorem.md).

<details>
<summary>Solutions</summary>

**P1**

(a) $\delta = R + \gamma\hat V(s') - \hat V(s) = -1 + 0.9(1) - (-3) = -1 + 0.9 + 3 = \mathbf{2.9}$.

(b) $\hat V(s) \leftarrow -3 + 0.1(2.9) = \mathbf{-2.71}$.

(c) $\nabla_\theta\log\pi(a_1) = (1,0) - (0.3,0.7) = \mathbf{(0.7,\ -0.7)}$.

$$\theta \leftarrow \theta + 0.5(2.9)(0.7,\ -0.7) = \theta + (1.015,\ -1.015).$$

(d) **$\pi(a_1)$ rose** — the update added $1.015$ to $a_1$'s preference and subtracted the same from $a_2$'s, so the log-odds shifted by $2.03$ in $a_1$'s favour.

Reconciling with the negative reward: **the actor responds to $\delta$, not to $R$.** The state $s$ was believed to be worth $-3$, i.e. quite bad. Receiving $-1$ and landing somewhere worth $+1$ is a *much better* outcome than $-3$ predicted, so $\delta = +2.9$ and the action that produced it deserves reinforcing.

This is the whole reason the advantage is the right multiplier. In a state where everything is bad, the best action still produces a positive $\delta$, and an agent that reinforced on raw reward would suppress every action it ever took there.

**P2**

(a) With $\hat V(s_0) = 1$ and $\hat V(s_1) = 3$, the TD error at $s_0$ is $\delta = r_1 + 1\cdot(3) - 1 = r_1 + 2$, where $r_1 = 0$ for $a_1$ and $2$ for $a_2$. The coin at $s_1$ does not enter.

- $a_1$: $\delta = 2$, score first component $0.5$, so the estimate is $\mathbf{1.0}$ (both coin outcomes).
- $a_2$: $\delta = 4$, score first component $-0.5$, so the estimate is $\mathbf{-2.0}$ (both coin outcomes).

The four values are $1.0,\ 1.0,\ -2.0,\ -2.0$.

(b) $\mathbb{E} = \tfrac12(1.0) + \tfrac12(-2.0) = \mathbf{-0.5}$.

$$\operatorname{Var} = \tfrac12(1.0 + 0.5)^2 + \tfrac12(-2.0+0.5)^2 = \tfrac12(2.25)+\tfrac12(2.25) = \mathbf{2.25}.$$

(c) **It is still unbiased here** — the mean is $-0.5$, exactly the true gradient.

That is a coincidence worth explaining rather than celebrating: the error $\epsilon(s_1) = 3$ is added to $\delta$ identically for **both** actions, since both lead to $s_1$. A constant added across actions is a baseline, and by [Lesson 3.3](03-03-the-policy-gradient-theorem.md)'s invariance it contributes nothing to the expected gradient. Had the two actions led to *different* successor states with different critic errors, the bias would have been real.

(d) With a correct critic the variance was $0$; here it is $2.25$. **The error in $\hat V(s_1)$ cost variance, not bias** — the estimator now distinguishes the two actions by $3$ units instead of $2$, inflating the spread.

The general reading: a critic's error becomes **bias** when it differs across the actions available at a state, and **variance inflation** when it is common to them. Since a real critic's errors are state-dependent and the states reached depend on the action, both usually occur — which is why the critic's learning rate has to keep it ahead of the actor.

**P3**

(a) Condition on $S_t = s$ and $A_t = a$ and take the expectation over the reward and the next state:

$$\mathbb{E}\big[R_{t+1} + \gamma V^\pi(S_{t+1})\ \big|\ s,a\big] = r(s,a) + \gamma\sum_{s'}p(s'\mid s,a)V^\pi(s') = Q^\pi(s,a),$$

which is exactly the definition of $Q^\pi$ in terms of $V^\pi$ from [Lesson 1.3](01-03-value-functions-bellman-expectation.md). The remaining term $V^\pi(S_t) = V^\pi(s)$ is constant given the conditioning, so

$$\mathbb{E}[\delta_t\mid s,a] = Q^\pi(s,a) - V^\pi(s) = A^\pi(s,a). \qquad\blacksquare$$

(b) Write $\hat V = V^\pi + \epsilon$. Then

$$\delta_t = R_{t+1} + \gamma\big[V^\pi(S_{t+1}) + \epsilon(S_{t+1})\big] - \big[V^\pi(s) + \epsilon(s)\big],$$

so taking expectations,

$$\mathbb{E}[\delta_t\mid s,a] = A^\pi(s,a) + \gamma\,\mathbb{E}\big[\epsilon(S_{t+1})\mid s,a\big] - \epsilon(s).$$

(c) The actor's expected update is the true policy gradient provided the extra term contributes nothing after being multiplied by the score and averaged over actions. By [Lesson 3.3](03-03-the-policy-gradient-theorem.md)'s invariance, a term that **does not depend on the action** contributes exactly zero. The $-\epsilon(s)$ piece already qualifies. So the condition is that

$$\gamma\,\mathbb{E}\big[\epsilon(S_{t+1})\mid s,a\big] \ \text{ does not depend on } a,$$

i.e. the critic's *expected error at the successor* is the same whichever action is taken.

(d) Because it says the critic is allowed to be **wrong**, sometimes badly, as long as it is wrong **evenly across the actions at each state** — and that is a far weaker requirement than accuracy.

A critic that systematically underestimates every state by $50$, or that has learned the shape of the value function but not its scale, satisfies the condition and leaves the actor's expected update exactly correct. P2 is a concrete instance: $\hat V(s_1)$ was off by $3$, both actions led to $s_1$, and the gradient was unbiased anyway.

This is also the practical reason actor–critic tolerates a rough critic early in training. What it does *not* tolerate is a critic whose errors correlate with the action — which is precisely what happens when one action leads to a well-visited region the critic knows and another leads somewhere it has barely seen. **The danger is not an inaccurate critic but an unevenly accurate one**, and it is another reason to keep exploration broad.

</details>

## Flashback

**From Lesson 3.4 (REINFORCE):** A two-action bandit has $\boldsymbol{\pi} = (0.4,\ 0.6)$ and deterministic rewards $R(a_1) = 6$, $R(a_2) = 1$.

(a) Compute the score vector for each action.
(b) Compute the expected first component of the un-baselined gradient estimator, $\mathbb{E}[R\nabla\log\pi]$.
(c) Compute its variance.
(d) Recompute the variance with the baseline $b = V^\pi$, and state the reduction factor.

<details>
<summary>Solution</summary>

(a) With $\boldsymbol{\pi} = (0.4, 0.6)$:

$$\nabla\log\pi(a_1) = (1,0) - (0.4,0.6) = \mathbf{(0.6,\ -0.6)}, \qquad \nabla\log\pi(a_2) = (0,1)-(0.4,0.6) = \mathbf{(-0.4,\ 0.4)}.$$

(b) The first component takes the value $6(0.6) = 3.6$ with probability $0.4$, and $1(-0.4) = -0.4$ with probability $0.6$:

$$\mathbb{E} = 0.4(3.6) + 0.6(-0.4) = 1.44 - 0.24 = \mathbf{1.2}.$$

(c) $$\operatorname{Var} = 0.4(3.6-1.2)^2 + 0.6(-0.4-1.2)^2 = 0.4(5.76) + 0.6(2.56) = 2.304 + 1.536 = \mathbf{3.84}.$$

(d) $V^\pi = 0.4(6) + 0.6(1) = 2.4 + 0.6 = 3$. With $b = 3$ the first component is $(6-3)(0.6) = 1.8$ with probability $0.4$, and $(1-3)(-0.4) = 0.8$ with probability $0.6$:

$$\mathbb{E} = 0.4(1.8) + 0.6(0.8) = 0.72 + 0.48 = \mathbf{1.2}\ \checkmark \text{ (unchanged)}$$
$$\operatorname{Var} = 0.4(1.8-1.2)^2 + 0.6(0.8-1.2)^2 = 0.4(0.36) + 0.6(0.16) = 0.144 + 0.096 = \mathbf{0.24}.$$

The reduction factor is $3.84 / 0.24 = \mathbf{16}$.

Worth noting that unlike [Lesson 3.4](03-04-reinforce.md)'s symmetric example the variance does not reach zero, because with $\boldsymbol{\pi}$ unequal the variance-minimizing baseline is not $V^\pi$ — it is the score-weighted average, which here is $\dfrac{0.4(0.36)(6) + 0.6(0.16)(1)}{0.4(0.36)+0.6(0.16)} = \dfrac{0.864+0.096}{0.24} = 4$, giving a variance of $0.4(1.2-1.2)^2 + 0.6(1.2-1.2)^2 = 0$.

So $V^\pi$ is a *good* baseline, not the optimal one — a sixteen-fold reduction where the best possible is infinite. It is used anyway because it is what a critic naturally learns, and because this lesson's bootstrapping gains dwarf the remaining gap.

</details>

## Connections

- **Backward:** the actor's update is [Lesson 3.4](03-04-reinforce.md)'s with $\delta_t$ replacing $G_t - b$, and the critic's is [Lesson 3.1](03-01-value-function-approximation.md)'s semi-gradient TD. The identity making them compatible rests on [Lesson 1.3](01-03-value-functions-bellman-expectation.md)'s relation between $Q^\pi$ and $V^\pi$, and the bias–variance trade is [Lesson 2.3](02-03-temporal-difference-learning-td0.md)'s.
- **Forward:** [Lesson 4.2](04-02-a2c-a3c-advantage-estimation.md) runs many actors in parallel and generalizes the one-step advantage to the $\lambda$-weighted estimator of [Lesson 2.7](02-07-n-step-returns-and-the-lambda-return.md); [Lesson 4.3](04-03-ppo-a-taste.md) keeps the architecture and makes the actor's step safe to take many times on the same batch. Every modern policy-gradient system, including the RLHF pipelines used to fine-tune language models, is this diagram with a larger network in each box.
- **Sideways:** the two-timescale structure — a fast inner estimator supplying a signal to a slow outer optimizer — is the same pattern as the E-step/M-step alternation in [`machine-learning` 3.6](../../machine-learning/lessons/03-06-the-em-algorithm.md) and as the discriminator/generator pairing in adversarial training, with the same practical hazard: if the inner learner falls behind, the outer one optimizes against a stale signal.
