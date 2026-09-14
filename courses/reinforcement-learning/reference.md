# Reinforcement Learning · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Everything in this course is one equation — *value now = reward now + discounted value next* — under successively harsher restrictions: no model, no table, no stable objective, no cheap samples. This card collects the symbols, the update rules and the traps, grouped by the job they do rather than by the lesson they came from.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $S_t,\ A_t,\ R_{t+1}$ | state at step $t$, action taken there, reward that comes back — the reward is indexed $t+1$ because it arrives with the next state | [1.1](lessons/01-01-the-rl-problem.md) |
| $G_t$ | the **return** — total discounted future reward from $t$ onward. A random variable, not a number | [1.1](lessons/01-01-the-rl-problem.md) |
| $\gamma$ | discount factor; sets how much a reward one step later is worth. Effective horizon $\approx 1/(1-\gamma)$ | [1.1](lessons/01-01-the-rl-problem.md) |
| $p(s',r\mid s,a)$ | the environment's dynamics — one conditional distribution that specifies everything | [1.2](lessons/01-02-markov-decision-processes.md) |
| $\pi(a\mid s)$ | the policy: probability of taking $a$ in $s$. The agent's entire behaviour, as a rule not a plan | [1.2](lessons/01-02-markov-decision-processes.md) |
| $V^\pi(s),\ Q^\pi(s,a)$ | expected return from $s$ under $\pi$; expected return from $s$ if you take $a$ **once** and then follow $\pi$ | [1.3](lessons/01-03-value-functions-bellman-expectation.md) |
| $V^*,\ Q^*$ | the best achievable values, over all policies | [1.4](lessons/01-04-optimality-bellman-optimality.md) |
| $T,\ T^\pi$ | Bellman optimality / expectation **operators** — one sweep applied to a whole value function at once | [1.6](lessons/01-06-value-iteration-and-convergence.md) |
| $\lVert\cdot\rVert_\infty$ | max norm: the largest discrepancy at any single state | [1.6](lessons/01-06-value-iteration-and-convergence.md) |
| $\alpha$ | step size. Constant $\alpha$ forgets at rate $\alpha$; $1/N$ computes a true mean | [2.1](lessons/02-01-monte-carlo-prediction.md) |
| $\varepsilon$ | exploration rate of an $\varepsilon$-greedy policy | [2.2](lessons/02-02-monte-carlo-control.md) |
| $\delta_t$ | the TD error — how much the world surprised you at step $t$ | [2.3](lessons/02-03-temporal-difference-learning-td0.md) |
| $b,\ \pi$ | behaviour policy (chooses the actions) versus target policy (being evaluated) | [2.5](lessons/02-05-q-learning-off-policy-td-control.md) |
| $\rho_{t:T-1}$ | importance-sampling ratio along a trajectory, $\prod_k \pi(A_k\mid S_k)/b(A_k\mid S_k)$ | [2.6](lessons/02-06-off-policy-learning-importance-sampling.md) |
| $G_t^{(n)},\ G_t^\lambda$ | $n$-step return; $\lambda$-weighted average of all of them | [2.7](lessons/02-07-n-step-returns-and-the-lambda-return.md) |
| $\lambda$ | trace/estimator parameter. Unlike $\gamma$ it does **not** change what is optimal | [2.7](lessons/02-07-n-step-returns-and-the-lambda-return.md) |
| $e_t(s),\ \mathbf{e}_t$ | eligibility trace of a state; trace vector over weights | [2.8](lessons/02-08-eligibility-traces-backward-view.md) |
| $\mathbf{w},\ \mathbf{x}(s),\ \hat V(s;\mathbf{w})$ | approximator weights, feature vector, approximate value | [3.1](lessons/03-01-value-function-approximation.md) |
| $\mu(s)$ | on-policy state distribution — the fraction of time spent in $s$. Decides what an approximator learns | [3.1](lessons/03-01-value-function-approximation.md) |
| $\Pi$ | projection onto the representable value functions, in the $\mu$-weighted norm | [3.2](lessons/03-02-approximate-control-deadly-triad.md) |
| $\theta,\ \pi_\theta,\ J(\theta)$ | policy parameters, parameterized policy, performance measure | [3.3](lessons/03-03-the-policy-gradient-theorem.md) |
| $A^\pi(s,a)$ | advantage, $Q^\pi(s,a) - V^\pi(s)$ — how much better than usual this action is | [3.5](lessons/03-05-actor-critic-methods.md) |
| $\theta^-$ | target-network weights: a frozen copy of $\theta$ | [4.1](lessons/04-01-deep-q-networks.md) |
| $r_t(\theta)$ | PPO's importance ratio $\pi_\theta(A_t\mid S_t)/\pi_{\theta_\text{old}}(A_t\mid S_t)$ | [4.3](lessons/04-03-ppo-a-taste.md) |
| $\Delta_i,\ \mathcal{R}(T)$ | a bandit arm's gap from the best; cumulative regret over $T$ pulls | [4.4](lessons/04-04-bandits-and-principled-exploration.md) |
| $N(s,a)$ | visit count — of a bandit arm, or of a node in a search tree | [4.4](lessons/04-04-bandits-and-principled-exploration.md), [4.6](lessons/04-06-monte-carlo-tree-search-and-self-play.md) |

## Definitions

### Return

Everything you are still able to collect, with later rewards counted less.

$$G_t = R_{t+1} + \gamma R_{t+2} + \gamma^2R_{t+3} + \cdots = \sum_{k=0}^{\infty}\gamma^kR_{t+k+1}$$

It contains only what is still in the agent's power — sunk rewards are gone. It is a **random variable**; every value function is an expectation of it.

*Introduced:* [1.1](lessons/01-01-the-rl-problem.md)

### Discount factor

How much a reward one step later is worth, and therefore how far ahead the agent plans.

$$\gamma\in[0,1], \qquad \text{effective horizon} \approx \frac{1}{1-\gamma}$$

Three separate jobs: it makes infinite sums converge, it models genuine impatience, and it sets the planning horizon. **It is part of the problem statement** — changing it changes which policy is optimal.

*Introduced:* [1.1](lessons/01-01-the-rl-problem.md)

### Markov property

The current state is a good enough summary of the past: knowing it makes the history irrelevant.

$$\mathbb{P}[S_{t+1},R_{t+1}\mid S_t,A_t] = \mathbb{P}[S_{t+1},R_{t+1}\mid S_0,A_0,\dots,S_t,A_t]$$

It is a property of the **state representation you chose**, not of the world. Most violations are repaired by enlarging the state.

*Introduced:* [1.2](lessons/01-02-markov-decision-processes.md)

### Markov decision process

The environment, as a single conditional distribution, plus a discount.

$$(\mathcal{S},\mathcal{A},p,\gamma), \qquad p(s',r\mid s,a) = \mathbb{P}[S_{t+1}=s', R_{t+1}=r\mid S_t=s,A_t=a]$$

Whether you *know* $p$ is a separate question from whether the problem is an MDP: Module 1 knows it and plans, Modules 2 onward do not and learn.

*Introduced:* [1.2](lessons/01-02-markov-decision-processes.md)

### State-value function

What a situation is worth if you keep behaving the way you are behaving.

$$V^\pi(s) = \mathbb{E}_\pi[G_t\mid S_t = s]$$

*Introduced:* [1.3](lessons/01-03-value-functions-bellman-expectation.md)

### Action-value function

What an action is worth: take it **once**, then revert to the policy.

$$Q^\pi(s,a) = \mathbb{E}_\pi[G_t\mid S_t=s, A_t=a]$$

The "once" matters — $Q^\pi(s,a)$ is the value of a single deviation, not of a changed policy. Every model-free control method learns $Q$ rather than $V$, because $\arg\max_a Q(s,a)$ needs no model.

*Introduced:* [1.3](lessons/01-03-value-functions-bellman-expectation.md)

### Bellman expectation equation

Value now equals reward now plus discounted value next, averaged over the policy and the world.

$$V^\pi(s) = \sum_a\pi(a\mid s)\Big[r(s,a) + \gamma\sum_{s'}p(s'\mid s,a)V^\pi(s')\Big]$$

Holds for **every** policy, and is **linear** in $V$ — which is what makes it solvable in closed form.

*Introduced:* [1.3](lessons/01-03-value-functions-bellman-expectation.md)

### Optimal value function

The best value achievable from a state, over all policies.

$$V^*(s) = \max_\pi V^\pi(s), \qquad Q^*(s,a) = \max_\pi Q^\pi(s,a)$$

A single policy attains the maximum in **every state at once**, and it can be taken deterministic and stationary. $V^*$ and $Q^*$ are unique; the optimal policy need not be.

*Introduced:* [1.4](lessons/01-04-optimality-bellman-optimality.md)

### Bellman optimality equation

The same recursion with the policy average replaced by a maximum.

$$V^*(s) = \max_a\Big[r(s,a) + \gamma\sum_{s'}p(s'\mid s,a)V^*(s')\Big]$$

$$Q^*(s,a) = r(s,a) + \gamma\sum_{s'}p(s'\mid s,a)\max_{a'}Q^*(s',a')$$

The $\max$ sits **inside** the sum over $s'$: the agent chooses after the environment has moved, not before.

*Introduced:* [1.4](lessons/01-04-optimality-bellman-optimality.md)

### Iterative policy evaluation

Turn the expectation equation into an assignment and sweep until it stops moving.

$$V_{k+1}(s) \leftarrow \sum_a\pi(a\mid s)\Big[r(s,a) + \gamma\sum_{s'}p(s'\mid s,a)V_k(s')\Big]$$

A **full backup** — every successor, weighted by its true probability. Replacing that expectation with a sample is what turns dynamic programming into reinforcement learning.

*Introduced:* [1.5](lessons/01-05-policy-evaluation-and-policy-iteration.md)

### Bellman optimality operator

One sweep of value iteration, viewed as a map on whole value functions.

$$(TV)(s) = \max_a\Big[r(s,a)+\gamma\sum_{s'}p(s'\mid s,a)V(s')\Big]$$

$T$ is a $\gamma$-contraction in the max norm, so it has a unique fixed point ($V^*$) and iterates converge to it geometrically from any start. Intermediate iterates are generally the value function of **no policy**.

*Introduced:* [1.6](lessons/01-06-value-iteration-and-convergence.md)

### Monte Carlo prediction

Estimate a value by averaging complete sampled returns.

$$V(s) \approx \text{mean of } G_t \text{ over visits to } s$$

Unbiased, model-free, and — uniquely among the methods here — it never uses the Markov property. Its cost is variance and the requirement that episodes terminate.

*Introduced:* [2.1](lessons/02-01-monte-carlo-prediction.md)

### Incremental mean

The running-average update, and the template every later rule follows.

$$V(s) \leftarrow V(s) + \tfrac{1}{N(s)}\big[G_t - V(s)\big] \qquad\text{or}\qquad V(s)\leftarrow V(s)+\alpha\big[G_t - V(s)\big]$$

Every update in this course is *estimate ← estimate + step × (target − estimate)*; the methods differ only in the target. Constant $\alpha$ does not compute a mean — it tracks, forgetting at rate $\alpha$, which is what you want when the policy is still changing.

*Introduced:* [2.1](lessons/02-01-monte-carlo-prediction.md)

### Monte Carlo control

Generalized policy iteration with sampled evaluation: learn $Q$, act $\varepsilon$-greedily, improve after every episode.

Forces two changes on exact policy iteration — evaluate $Q$ rather than $V$ (no model to be greedy with), and keep exploring (a greedy policy stops collecting the evidence that would change its mind).

*Introduced:* [2.2](lessons/02-02-monte-carlo-control.md)

### Epsilon-greedy

Act greedily with probability $1-\varepsilon$, uniformly at random otherwise.

$$\pi(a\mid s) = \begin{cases}1-\varepsilon+\varepsilon/|\mathcal{A}| & a = \arg\max_{a'}Q(s,a')\\ \varepsilon/|\mathcal{A}| & \text{otherwise}\end{cases}$$

Policy improvement still holds within the $\varepsilon$-soft class — but with $\varepsilon$ fixed it converges to the best $\varepsilon$-*soft* policy, not to $\pi^*$. Decay $\varepsilon$ on a **GLIE** schedule (e.g. $\varepsilon_k = 1/k$) to reach $\pi^*$.

*Introduced:* [2.2](lessons/02-02-monte-carlo-control.md)

### TD(0)

Update toward the one-step lookahead instead of the full return.

$$V(S_t) \leftarrow V(S_t) + \alpha\big[R_{t+1}+\gamma V(S_{t+1}) - V(S_t)\big]$$

Samples like Monte Carlo, bootstraps like dynamic programming — so it learns online, from incomplete episodes, in continuing tasks, with far lower variance. Biased whenever $V \ne V^\pi$.

*Introduced:* [2.3](lessons/02-03-temporal-difference-learning-td0.md)

### TD error

How much the world surprised you at one step.

$$\delta_t = R_{t+1} + \gamma V(S_{t+1}) - V(S_t)$$

The single most reused object in the course: traces distribute it, actor–critic reinforces on it, GAE sums it. Its expectation given $(s,a)$ is the **advantage**.

*Introduced:* [2.3](lessons/02-03-temporal-difference-learning-td0.md)

### SARSA

On-policy TD control — bootstrap from the action you actually took next.

$$Q(S_t,A_t)\leftarrow Q(S_t,A_t)+\alpha\big[R_{t+1}+\gamma Q(S_{t+1},A_{t+1}) - Q(S_t,A_t)\big]$$

Because $A_{t+1}$ comes from the exploring policy, SARSA learns the value of the policy it is *really running* — so it routes around hazards that only hurt when exploration misfires.

*Introduced:* [2.4](lessons/02-04-sarsa-on-policy-td-control.md)

### Q-learning

Off-policy TD control — bootstrap from the best action, whatever you did.

$$Q(S_t,A_t)\leftarrow Q(S_t,A_t)+\alpha\big[R_{t+1}+\gamma\max_a Q(S_{t+1},a) - Q(S_t,A_t)\big]$$

Converges to $Q^*$ under any behaviour policy that keeps visiting everything — no GLIE needed. Needs no importance sampling, because it samples no action at $S_{t+1}$. Carries a **maximization bias**.

*Introduced:* [2.5](lessons/02-05-q-learning-off-policy-td-control.md)

### Importance sampling ratio

Reweight data from one policy to answer a question about another.

$$\rho_{t:T-1} = \prod_{k=t}^{T-1}\frac{\pi(A_k\mid S_k)}{b(A_k\mid S_k)}$$

The transition probabilities cancel, so it is computable without a model. Unbiased and usually unusable over long trajectories: the weight is either $0$ or enormous, and its variance grows exponentially in the trajectory length. **Weighted** importance sampling (divide by $\sum\rho$ instead of $n$) is biased and bounded, and is the practical choice.

*Introduced:* [2.6](lessons/02-06-off-policy-learning-importance-sampling.md)

### n-step return

Use $n$ real rewards, then bootstrap.

$$G_t^{(n)} = \sum_{k=1}^{n}\gamma^{k-1}R_{t+k} + \gamma^n V(S_{t+n})$$

$n=1$ is TD(0), $n=\infty$ is Monte Carlo, and the best $n$ is essentially always in between.

*Introduced:* [2.7](lessons/02-07-n-step-returns-and-the-lambda-return.md)

### Lambda-return

A geometric average of every $n$-step return.

$$G_t^\lambda = (1-\lambda)\sum_{n=1}^{\infty}\lambda^{n-1}G_t^{(n)}$$

$\lambda = 0$ gives TD(0), $\lambda = 1$ gives Monte Carlo. More robust to a badly chosen parameter than $n$-step returns are, because it hedges over depths instead of committing to one.

*Introduced:* [2.7](lessons/02-07-n-step-returns-and-the-lambda-return.md)

### Eligibility trace

A decaying memory of how recently and how often a state was visited.

$$e_t(s) = \gamma\lambda\,e_{t-1}(s) + \mathbb{1}[S_t = s]$$

Decays at $\gamma\lambda$ — **both** factors. *Accumulating* traces add $1$ on a revisit (can exceed $1$); *replacing* traces reset to $1$ and are more stable.

*Introduced:* [2.8](lessons/02-08-eligibility-traces-backward-view.md)

### TD-lambda

Hand each TD error out to every state in proportion to its eligibility.

$$V(s) \leftarrow V(s) + \alpha\,\delta_t\,e_t(s) \quad\text{for all }s$$

Offline, this produces **exactly** the $\lambda$-return's updates, without waiting for the episode to end — the forward and backward views compute the same double sum in opposite orders.

*Introduced:* [2.8](lessons/02-08-eligibility-traces-backward-view.md)

### Mean squared value error

What a function approximator is actually minimizing.

$$\overline{\text{VE}}(\mathbf{w}) = \sum_s\mu(s)\big[V^\pi(s) - \hat V(s;\mathbf{w})\big]^2$$

The weighting by $\mu$ is not a technicality: two agents with identical features and data learn different functions if they spend their time differently.

*Introduced:* [3.1](lessons/03-01-value-function-approximation.md)

### Semi-gradient TD

TD with an approximator, ignoring the target's dependence on the weights.

$$\mathbf{w}\leftarrow\mathbf{w}+\alpha\big[R_{t+1}+\gamma\hat V(S_{t+1};\mathbf{w}) - \hat V(S_t;\mathbf{w})\big]\nabla_\mathbf{w}\hat V(S_t;\mathbf{w})$$

**Not the gradient of any objective** — hence *semi*. Converges for linear approximators on-policy, to a TD fixed point within a factor $1/(1-\gamma)$ of the best possible fit. Can diverge off-policy.

*Introduced:* [3.1](lessons/03-01-value-function-approximation.md)

### Policy gradient theorem

The gradient of long-run performance, with the environment's dynamics absent.

$$\nabla_\theta J(\theta) \propto \mathbb{E}_{\pi_\theta}\big[Q^{\pi_\theta}(S_t,A_t)\,\nabla_\theta\log\pi_\theta(A_t\mid S_t)\big]$$

$\mu$ appears but is never differentiated — you only need to *sample* from it, which is why policy-gradient methods are inherently on-policy. The dynamics vanish because they do not depend on $\theta$.

*Introduced:* [3.3](lessons/03-03-the-policy-gradient-theorem.md)

### Score function

The direction in parameter space that makes an action more likely.

$$\nabla_\theta\log\pi_\theta(a\mid s), \qquad \text{softmax with linear preferences: } \mathbf{e}_a - \boldsymbol{\pi}$$

Its components sum to zero (probabilities must stay on the simplex), and it is largest when the action is least likely — so a confident policy barely moves.

*Introduced:* [3.3](lessons/03-03-the-policy-gradient-theorem.md)

### REINFORCE

The policy gradient with the Monte Carlo return in place of $Q$.

$$\theta \leftarrow \theta + \alpha\,G_t\,\nabla_\theta\log\pi_\theta(A_t\mid S_t)$$

Unbiased and extremely noisy. Must discard each episode after one use.

*Introduced:* [3.4](lessons/03-04-reinforce.md)

### Baseline

Any function of state subtracted from the multiplier.

$$\theta \leftarrow \theta + \alpha\big[G_t - b(S_t)\big]\nabla_\theta\log\pi_\theta(A_t\mid S_t)$$

Changes the expected gradient by **exactly zero** (since $\sum_a\nabla_\theta\pi_\theta(a\mid s) = 0$) and can change the variance by orders of magnitude. $b$ must not depend on the action.

*Introduced:* [3.4](lessons/03-04-reinforce.md)

### Advantage function

How much better an action is than the state's average.

$$A^\pi(s,a) = Q^\pi(s,a) - V^\pi(s), \qquad \mathbb{E}[\delta_t\mid s,a] = A^\pi(s,a)$$

The second identity is why the TD error can drive a policy gradient: it is an unbiased advantage estimate whenever the critic is correct.

*Introduced:* [3.5](lessons/03-05-actor-critic-methods.md)

### Actor-critic

Two learners sharing one error signal.

$$\mathbf{w}\leftarrow\mathbf{w}+\alpha^{\mathbf{w}}\delta_t\nabla_\mathbf{w}\hat V(S_t;\mathbf{w}), \qquad \theta\leftarrow\theta+\alpha^\theta\delta_t\nabla_\theta\log\pi_\theta(A_t\mid S_t)$$

The baseline *centres* the return; the bootstrap *truncates* everything downstream — which is a different and usually larger saving. The critic evaluates only; the policy lives entirely in the actor, so continuous actions need no arg-max.

*Introduced:* [3.5](lessons/03-05-actor-critic-methods.md)

### Experience replay

Store transitions and train on random samples of them.

Restores approximate independence, reuses each transition many times, and smooths the training distribution — at the price of making the method **off-policy**, which is the third leg of the deadly triad. Buffer size trades decorrelation against staleness.

*Introduced:* [4.1](lessons/04-01-deep-q-networks.md)

### Target network

A frozen copy $\theta^-$ of the weights, used only in the bootstrap target.

$$y = r + \gamma\max_{a'}Q(s',a';\theta^-), \qquad \theta^-\leftarrow\theta \text{ every } C \text{ steps}$$

Between copies the target is a constant, so each stretch is genuine supervised regression rather than a semi-gradient chase. The copy interval trades stability against how fast credit propagates.

*Introduced:* [4.1](lessons/04-01-deep-q-networks.md)

### Generalized advantage estimation

The λ-return applied to advantages.

$$\hat A_t^{\text{GAE}(\gamma,\lambda)} = (1-\lambda)\sum_{n\ge1}\lambda^{n-1}\hat A_t^{(n)} = \sum_{l\ge0}(\gamma\lambda)^l\,\delta_{t+l}$$

Computed by one backward pass, $\hat A_t = \delta_t + \gamma\lambda\hat A_{t+1}$. Effective lookahead $1/(1-\lambda)$; lower $\lambda$ when the critic is good, raise it when the critic is poor.

*Introduced:* [4.2](lessons/04-02-a2c-a3c-advantage-estimation.md)

### PPO clipped objective

Reuse a batch, but stop rewarding movement past a trust region.

$$L^{\text{CLIP}}(\theta) = \mathbb{E}_t\Big[\min\big(r_t(\theta)\hat A_t,\ \text{clip}(r_t(\theta),1-\epsilon,1+\epsilon)\hat A_t\big)\Big]$$

The $\min$ makes it a pessimistic bound: capped where moving helps, uncapped where moving hurts — so a bad step stays fully correctable. It bounds each **sample's** contribution, not the total policy change, so monitor the KL separately.

*Introduced:* [4.3](lessons/04-03-ppo-a-taste.md)

### Regret

How much worse a strategy did than always taking the best action.

$$\mathcal{R}(T) = T\mu^* - \mathbb{E}\Big[\sum_{t=1}^T\mu_{A_t}\Big] = \sum_i\Delta_i\,\mathbb{E}[N_i(T)]$$

Fixed-$\varepsilon$ exploration gives **linear** regret at rate $\varepsilon\overline{\Delta}$ — a permanent tax. $O(\ln T)$ is achievable and, by the Lai–Robbins bound, optimal.

*Introduced:* [4.4](lessons/04-04-bandits-and-principled-exploration.md)

### UCB1

Optimism proportional to ignorance.

$$A_t = \arg\max_i\left(\bar x_i + \sqrt{\frac{2\ln t}{N_i(t)}}\right)$$

The bonus measures **how little you know**, not how good the arm looks — it ignores the observed rewards entirely. It shrinks as $1/\sqrt{N_i}$ and grows as $\sqrt{\ln t}$, so nothing is abandoned for ever.

*Introduced:* [4.4](lessons/04-04-bandits-and-principled-exploration.md)

### Dyna

Real experience updates the model **and** the value; the model then manufactures extra experience.

Planning and learning use the **same update** — only the source of the data differs. Related to replay: a buffer replays real transitions, Dyna replays model-generated ones, and the two coincide for a deterministic tabular environment.

*Introduced:* [4.5](lessons/04-05-model-based-rl-and-planning.md)

### UCT

UCB1 run at every node of a search tree.

$$a = \arg\max_a\left(Q(s,a)+c\sqrt{\frac{\ln N(s)}{N(s,a)}}\right)$$

AlphaZero's PUCT variant folds in a network prior: $Q(s,a) + c_\text{puct}P(s,a)\sqrt{\textstyle\sum_b N(s,b)}/(1+N(s,a))$. The search's **visit distribution** is a policy improvement over the prior that seeded it.

*Introduced:* [4.6](lessons/04-06-monte-carlo-tree-search-and-self-play.md)

## Formulas and rules

### Every update, in one shape

All of them are *estimate ← estimate + step × (target − estimate)*. Only the target changes.

| method | target | needs |
|---|---|---|
| Monte Carlo | $G_t$ | the episode to end |
| TD(0) | $R_{t+1}+\gamma V(S_{t+1})$ | nothing |
| $n$-step | $\sum_{k=1}^n\gamma^{k-1}R_{t+k}+\gamma^nV(S_{t+n})$ | $n$ steps |
| TD($\lambda$) forward | $G_t^\lambda$ | the episode to end |
| SARSA | $R_{t+1}+\gamma Q(S_{t+1},A_{t+1})$ | the next action, chosen first |
| Expected SARSA | $R_{t+1}+\gamma\sum_a\pi(a\mid S_{t+1})Q(S_{t+1},a)$ | the policy |
| Q-learning | $R_{t+1}+\gamma\max_aQ(S_{t+1},a)$ | nothing |

*From* [2.1](lessons/02-01-monte-carlo-prediction.md), [2.3](lessons/02-03-temporal-difference-learning-td0.md), [2.4](lessons/02-04-sarsa-on-policy-td-control.md), [2.5](lessons/02-05-q-learning-off-policy-td-control.md), [2.7](lessons/02-07-n-step-returns-and-the-lambda-return.md)

### The three backups

| | bootstraps | samples | needs a model | needs episodes to end |
|---|---|---|---|---|
| dynamic programming | yes | no | **yes** | no |
| Monte Carlo | no | yes | no | **yes** |
| TD | yes | yes | no | no |

*From* [1.5](lessons/01-05-policy-evaluation-and-policy-iteration.md), [2.3](lessons/02-03-temporal-difference-learning-td0.md)

### Relations between value functions

| identity | says |
|---|---|
| $V^\pi(s) = \sum_a\pi(a\mid s)Q^\pi(s,a)$ | a state's value is the average of its action-values |
| $Q^\pi(s,a) = r(s,a)+\gamma\sum_{s'}p(s'\mid s,a)V^\pi(s')$ | an action's value is its reward plus where it takes you |
| $V^*(s) = \max_aQ^*(s,a)$ | the optimum takes the best action |
| $\pi^*(s)\in\arg\max_aQ^*(s,a)$ | knowing $Q^*$ solves the control problem outright |
| $A^\pi(s,a) = Q^\pi(s,a)-V^\pi(s)$ | the advantage |

The first two are a free consistency check on any hand computation.

*From* [1.3](lessons/01-03-value-functions-bellman-expectation.md), [1.4](lessons/01-04-optimality-bellman-optimality.md), [3.5](lessons/03-05-actor-critic-methods.md)

### Solving a known MDP

| | policy iteration | value iteration |
|---|---|---|
| cost per round | a full evaluation | one sweep |
| rounds needed | few | many, geometric in $\gamma$ |
| terminates exactly? | **yes** — finitely many policies, each strictly better | only in the limit |
| closed form for evaluation | $V^\pi = (I-\gamma P^\pi)^{-1}r^\pi$, cost $O(|\mathcal{S}|^3)$ | — |

Error bounds for value iteration:

$$\lVert V_k-V^*\rVert_\infty \le \gamma^k\lVert V_0-V^*\rVert_\infty, \qquad \lVert V_{k+1}-V^*\rVert_\infty \le \frac{\gamma}{1-\gamma}\lVert V_{k+1}-V_k\rVert_\infty$$

The second is the usable one. At $\gamma = 0.99$ the factor is $99$, so a sweep that moves values by $0.01$ still leaves you a full unit away.

*From* [1.5](lessons/01-05-policy-evaluation-and-policy-iteration.md), [1.6](lessons/01-06-value-iteration-and-convergence.md)

### Step sizes and schedules

| rule | gives | use when |
|---|---|---|
| $\alpha_k = 1/N$ | the true running mean | the target is stationary |
| $\alpha$ constant | exponential average, memory $1/\alpha$ | the policy is still changing (i.e. always, in control) |
| Robbins–Monro: $\sum\alpha=\infty$, $\sum\alpha^2<\infty$ | convergence with probability 1 | you want the theorem |
| GLIE: $\varepsilon_k = 1/k$ | convergence to $\pi^*$ | on-policy control |

$\varepsilon_k = 1/k$ works because the harmonic series diverges (so exploration never stops) while $\varepsilon_k\to0$ (so the policy becomes greedy). $\varepsilon_k = 1/k^2$ fails the first condition.

*From* [2.1](lessons/02-01-monte-carlo-prediction.md), [2.2](lessons/02-02-monte-carlo-control.md), [2.4](lessons/02-04-sarsa-on-policy-td-control.md)

### Bias, variance and the dials that trade them

| dial | low end | high end | notes |
|---|---|---|---|
| $n$ / $\lambda$ | more bias, less variance | less bias, more variance | the optimum is interior; on a 19-state walk $n=2$ beat both $n=1$ and Monte Carlo |
| critic vs return | low variance, biased | unbiased, high variance | a critic removes *downstream* noise a baseline cannot touch |
| model rollout length | trustworthy, short-sighted | far-seeing, compounding error | a model right $95\%$ per step is right on only $8\%$ of 50-step rollouts |
| $\alpha$ | slow, stable | fast, then floored | best $\alpha$ falls as $n$ rises, so they cannot be tuned independently |

*From* [2.3](lessons/02-03-temporal-difference-learning-td0.md), [2.7](lessons/02-07-n-step-returns-and-the-lambda-return.md), [3.5](lessons/03-05-actor-critic-methods.md), [4.2](lessons/04-02-a2c-a3c-advantage-estimation.md), [4.5](lessons/04-05-model-based-rl-and-planning.md)

### The deadly triad

Instability is possible only when all three are present:

1. **function approximation** — a shared representation with fewer parameters than states;
2. **bootstrapping** — targets built from current estimates;
3. **off-policy training** — the distribution of states you update on differs from the target policy's.

Remove any one and it is safe. The cause is that the Bellman operator contracts in the **max** norm while the projection is non-expansive in the **$\mu$-weighted** norm, and the composition $\Pi T^\pi$ need contract in neither.

| algorithm | legs | at risk? |
|---|---|---|
| tabular Q-learning | 2 | no |
| gradient Monte Carlo with a net | 1 | no |
| linear semi-gradient SARSA, on-policy | 2 | no |
| DQN | **3** | **yes** |

*From* [3.2](lessons/03-02-approximate-control-deadly-triad.md), [4.1](lessons/04-01-deep-q-networks.md)

### Policy-gradient family

| method | multiplier on $\nabla\log\pi$ | bias | variance |
|---|---|---|---|
| REINFORCE | $G_t$ | none | highest |
| $+$ baseline | $G_t-\hat V(S_t)$ | none | lower |
| actor–critic | $\delta_t$ | biased | much lower |
| A2C with GAE | $\hat A_t^{\text{GAE}(\gamma,\lambda)}$ | tunable | tunable |
| PPO | $\hat A_t$, with a clipped ratio | tunable | tunable, reusable |

*From* [3.3](lessons/03-03-the-policy-gradient-theorem.md)–[3.5](lessons/03-05-actor-critic-methods.md), [4.2](lessons/04-02-a2c-a3c-advantage-estimation.md), [4.3](lessons/04-03-ppo-a-taste.md)

### Decorrelating the data: two routes

| | replay buffer | parallel environments |
|---|---|---|
| samples | the past, at random | the present, across workers |
| data is | off-policy and stale | **on-policy** |
| triad legs | 3 | 2 |
| sample efficiency | high — each transition reused | low — used once |
| suits | expensive environment steps (robots) | cheap steps (simulators) |

*From* [4.1](lessons/04-01-deep-q-networks.md), [4.2](lessons/04-02-a2c-a3c-advantage-estimation.md)

### Exploration methods

| method | regret | mechanism |
|---|---|---|
| $\varepsilon$-greedy, fixed $\varepsilon$ | **linear**, rate $\varepsilon\overline{\Delta}$ | uniform randomness, forever |
| $\varepsilon$-greedy, GLIE | sublinear | decayed by a schedule, not by evidence |
| optimistic initialization | — | optimism spent after a few samples; fails under noise |
| UCB1 | $O(\ln T)$ | optimism proportional to ignorance |
| Thompson sampling | $O(\ln T)$, better constant | sample from the posterior |
| entropy bonus | — | penalizes a policy for becoming over-confident |

Lai–Robbins: $O(\ln T)$ is optimal. UCB1's loose Hoeffding constant means it can lose to $\varepsilon$-greedy over short horizons — on a 10-armed problem it only overtook at around $20{,}000$ pulls.

*From* [2.2](lessons/02-02-monte-carlo-control.md), [4.2](lessons/04-02-a2c-a3c-advantage-estimation.md), [4.4](lessons/04-04-bandits-and-principled-exploration.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| The Bellman equation and value iteration for a **known** MDP — this course owns the unknown-dynamics case and cites that one throughout | [operations-research 3.4](../operations-research/lessons/03-04-stochastic-dynamic-programming.md) |
| Banach fixed-point / contraction mapping theorem, used to prove value iteration converges | [real-analysis 2.4](../real-analysis/lessons/02-04-cauchy-sequences.md) |
| Hoeffding's inequality, which sets the width of UCB1's confidence bonus | [statistical-learning](../statistical-learning/reference.md#hoeffdings-inequality) |
| Law of large numbers, behind Monte Carlo's convergence | [probability-theory 4.2](../probability-theory/lessons/04-02-laws-of-large-numbers.md) |
| Conditional expectation, used whenever a value is written as $\mathbb{E}[\,\cdot\mid S_t = s]$ | [probability-theory 5.1](../probability-theory/lessons/05-01-conditional-expectation.md) |
| Borel–Cantelli, used to show a GLIE schedule visits every pair infinitely often | [probability-theory 3.3](../probability-theory/lessons/03-03-borel-cantelli-zero-one.md) |
| Stochastic gradient descent and step-size intuition | [machine-learning 1.6](../machine-learning/lessons/01-06-gradient-descent-for-learning.md) |
| The bias–variance decomposition, which reappears here as approximation vs estimation error | [machine-learning 1.2](../machine-learning/lessons/01-02-generalization-and-the-bias-variance-tradeoff.md) |
| Neural networks, backpropagation, and why they need i.i.d. minibatches | [deep-learning](../deep-learning/syllabus.md) |
| Discounting as present value, where $\gamma = 1/(1+r)$ | [micro-refresher](../micro-refresher/syllabus.md) |
| The overlap/positivity assumption, which is this course's coverage condition under another name | [econometrics 3.1](../econometrics/lessons/03-01-potential-outcomes-identification.md) |
| Algorithmic "dynamic programming" (knapsack, shortest paths) — a **different** use of the phrase, meaning memoized recursion rather than optimizing over policies | [algorithms 2.5](../algorithms/lessons/02-05-dynamic-programming-and-knapsack.md) |

## Pitfalls

### Reward, return and value

- **Reward is one step, return is the whole discounted future.** $R_{t+1}$ is what the environment emits; $G_t$ is what the agent maximizes. Most confusing equations resolve once you check which one a symbol is. *([1.1](lessons/01-01-the-rl-problem.md))*
- **The reward defines the goal — it does not hint at it.** Reward attached to a repeatable *event* invites the agent to repeat it; reward the *state of the world* instead. *([1.1](lessons/01-01-the-rl-problem.md))*
- **$\gamma$ is part of the problem, not a tuning knob.** Changing it changes which policy is optimal; a stream that is bad on average can beat a fixed alternative when its good rewards come first. *([1.1](lessons/01-01-the-rl-problem.md), [1.5](lessons/01-05-policy-evaluation-and-policy-iteration.md))*
- **$Q^\pi(s,a)$ means $a$ once, then $\pi$ forever** — not "$a$ always". *([1.3](lessons/01-03-value-functions-bellman-expectation.md))*

### Modelling

- **"Markov" is a property of your state variable, not of the world.** The question is never "is it Markov?" but "what must I add, and can I afford it?" *([1.2](lessons/01-02-markov-decision-processes.md))*
- **The agent–environment boundary is the limit of arbitrary control**, not the robot's skin — motors and the reward function are both on the environment's side. *([1.2](lessons/01-02-markov-decision-processes.md))*
- **A stochastic policy is genuinely optimal under aliasing**, and that is different from exploration. Exploration should decay; this randomness must not. *([1.2](lessons/01-02-markov-decision-processes.md), [3.3](lessons/03-03-the-policy-gradient-theorem.md))*

### Dynamic programming

- **Keep the $\max$ inside the expectation** in the $Q^*$ equation. Moving it outside computes the value of knowing the future before choosing, which is larger and unachievable. *([1.4](lessons/01-04-optimality-bellman-optimality.md))*
- **Optimal policies are not unique; $V^*$ and $Q^*$ are.** The stopping test must be "every action played is still greedy", not "the arg-max set is unchanged", or ties appearing at the optimum make the algorithm loop forever. *([1.4](lessons/01-04-optimality-bellman-optimality.md), [1.5](lessons/01-05-policy-evaluation-and-policy-iteration.md))*
- **Rankings settle long before magnitudes.** A value estimate off by a factor of seven can still give the correct greedy policy — which is what licenses truncated evaluation and value iteration. *([1.5](lessons/01-05-policy-evaluation-and-policy-iteration.md))*
- **A small change between sweeps does not mean you are close.** The gap can be $\gamma/(1-\gamma)$ times the change. *([1.6](lessons/01-06-value-iteration-and-convergence.md))*
- **Intermediate value-iteration iterates are the value function of no policy.** *([1.6](lessons/01-06-value-iteration-and-convergence.md))*

### Sampling and estimation

- **Constant $\alpha$ is not an approximation to the running mean** — it converges to something different, and that is usually what you want in control. *([2.1](lessons/02-01-monte-carlo-prediction.md))*
- **First-visit MC is unbiased; every-visit is not** (returns within an episode are correlated). Both are consistent. *([2.1](lessons/02-01-monte-carlo-prediction.md))*
- **Truncating Monte Carlo episodes introduces bias, not noise** — the omitted tail is systematic. *([2.1](lessons/02-01-monte-carlo-prediction.md))*
- **TD is biased, not unbiased.** The Bellman identity holds for $V^\pi$; TD substitutes the current estimate. *([2.3](lessons/02-03-temporal-difference-learning-td0.md))*
- **TD relies on the Markov property and Monte Carlo does not.** Under aliasing, batch TD converges to the value function of the wrong MDP while MC stays correct. *([2.3](lessons/02-03-temporal-difference-learning-td0.md))*
- **Unbiasedness is worthless without bounded variance.** Ordinary importance sampling can have *infinite* variance; weighted IS is biased, bounded, and the practical choice. *([2.6](lessons/02-06-off-policy-learning-importance-sampling.md))*
- **Larger $n$ is not better** — the extra real rewards are noisy real rewards. *([2.7](lessons/02-07-n-step-returns-and-the-lambda-return.md))*
- **Traces decay at $\gamma\lambda$, not $\lambda$.** *([2.8](lessons/02-08-eligibility-traces-backward-view.md))*

### Exploration and control

- **A greedy policy is self-sealing**: it stops collecting the evidence that would change its mind, and more experience does not help. *([2.2](lessons/02-02-monte-carlo-control.md))*
- **Fixed $\varepsilon$ converges to the best $\varepsilon$-soft policy, not $\pi^*$** — and running longer does not close the gap. *([2.2](lessons/02-02-monte-carlo-control.md), [2.4](lessons/02-04-sarsa-on-policy-td-control.md))*
- **Optimistic initialization is spent after a few samples**, so it fails under noise or non-stationarity. UCB's optimism is renewed by uncertainty instead. *([2.2](lessons/02-02-monte-carlo-control.md), [4.4](lessons/04-04-bandits-and-principled-exploration.md))*
- **"Converges to $Q^*$" and "behaves well" are different guarantees.** On the cliff, Q-learning learned the better policy and collected roughly twice the penalty. *([2.5](lessons/02-05-q-learning-off-policy-td-control.md))*
- **The $\max$ over noisy estimates overestimates**, systematically and cumulatively. Decouple selection from evaluation (Double Q-learning) to fix it. *([2.5](lessons/02-05-q-learning-off-policy-td-control.md), [4.1](lessons/04-01-deep-q-networks.md))*
- **The policy you train under must match the policy you deploy**, or you must know exactly how they differ. *([2.4](lessons/02-04-sarsa-on-policy-td-control.md))*
- **UCB's bonus measures ignorance, not promise** — two arms with means $1.0$ and $0.0$ have identical bonuses if they have identical counts. *([4.4](lessons/04-04-bandits-and-principled-exploration.md))*
- **Logarithmic regret still grows forever**; what converges is the average reward per step. *([4.4](lessons/04-04-bandits-and-principled-exploration.md))*

### Approximation and deep RL

- **Semi-gradient TD descends no objective at all.** Calling it "TD with a network" hides the thing that breaks. *([3.1](lessons/03-01-value-function-approximation.md))*
- **$\mu$ decides what is learned.** Identical features and data, different time spent — different answer. There is no "the" value function to converge to. *([3.1](lessons/03-01-value-function-approximation.md))*
- **A more expressive approximator is not safer.** The linear convergence guarantee is lost for nonlinear models. *([3.1](lessons/03-01-value-function-approximation.md))*
- **Divergence is structural, not a step-size problem.** In Baird's counterexample every positive $\alpha$ diverges; halving $\alpha$ only postpones it. *([3.2](lessons/03-02-approximate-control-deadly-triad.md))*
- **The triad is not about nonlinearity** — Baird's counterexample is linear. *([3.2](lessons/03-02-approximate-control-deadly-triad.md))*
- **"Off-policy" means the update distribution differs**, not merely that the target has a $\max$ in it. A replayed transition is off-policy data however you build its target. *([3.2](lessons/03-02-approximate-control-deadly-triad.md), [4.1](lessons/04-01-deep-q-networks.md))*
- **A bigger replay buffer is not better** — it trades decorrelation against staleness. *([4.1](lessons/04-01-deep-q-networks.md))*
- **Reward clipping changes the problem**, not just the scale. *([4.1](lessons/04-01-deep-q-networks.md))*

### Policy gradients

- **A baseline cannot bias the gradient** — for any function of state, exactly zero. What it changes is variance, sometimes by four orders of magnitude. It must not depend on the action. *([3.3](lessons/03-03-the-policy-gradient-theorem.md), [3.4](lessons/03-04-reinforce.md))*
- **Policy gradients are on-policy by construction.** The theorem needs samples from the current policy's state distribution; that is why REINFORCE discards every episode. *([3.3](lessons/03-03-the-policy-gradient-theorem.md), [3.4](lessons/03-04-reinforce.md))*
- **The return multiplies the learning rate.** A constant added to every reward leaves the optimal policy untouched and can multiply the gradient variance by thousands. *([3.4](lessons/03-04-reinforce.md))*
- **A confident softmax policy barely moves** — the score shrinks toward zero as probabilities approach one, which is a stabilizer and a trap. The entropy bonus exists to prevent the collapse. *([3.3](lessons/03-03-the-policy-gradient-theorem.md), [4.2](lessons/04-02-a2c-a3c-advantage-estimation.md))*
- **The critic being biased is the point, not a defect** — it is better because it is far less noisy. A badly wrong critic makes actor–critic worse than REINFORCE. *([3.5](lessons/03-05-actor-critic-methods.md))*
- **The actor is safe from the triad; the critic is not.** *([3.5](lessons/03-05-actor-critic-methods.md))*
- **Lower $\lambda$ first, not $\gamma$.** $\lambda$ changes only the estimator; $\gamma$ changes the objective. *([4.2](lessons/04-02-a2c-a3c-advantage-estimation.md))*
- **PPO's clip bounds each sample's contribution, not the total policy change.** Monitor the KL separately and stop early. *([4.3](lessons/04-03-ppo-a-taste.md))*
- **A high clip fraction is a diagnostic, not a quantity to minimize** — raising $\epsilon$ to reduce it just permits the drift. *([4.3](lessons/04-03-ppo-a-taste.md))*

### Models and search

- **More planning saturates.** Planning re-uses information already collected; it raises the speed of approach, never the ceiling. *([4.5](lessons/04-05-model-based-rl-and-planning.md))*
- **A planner actively seeks out its model's errors**, because among high ratings the erroneously optimistic ones are over-represented. Keep rollouts short. *([4.5](lessons/04-05-model-based-rl-and-planning.md))*
- **A stale model is worse than no model** — the planner routes confidently around a wall that has been removed. *([4.5](lessons/04-05-model-based-rl-and-planning.md))*
- **Play the most-visited child, not the highest-$Q$ one.** High $Q$ with low $N$ is an untested claim. *([4.6](lessons/04-06-monte-carlo-tree-search-and-self-play.md))*
- **Self-play can cycle rather than improve** in non-transitive games. *([4.6](lessons/04-06-monte-carlo-tree-search-and-self-play.md))*
