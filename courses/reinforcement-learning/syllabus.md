# Reinforcement Learning — Syllabus

> Computer Science · Tier 2 · ~21 lessons · Prereqs: [machine-learning](../machine-learning/syllabus.md), [probability-theory](../probability-theory/syllabus.md) · Roadmap id: `reinforcement-learning`

## Goal

Learn how an agent can improve its behavior purely from reward — no labeled examples, only the consequences of its own choices. You will move from the mathematical skeleton (Markov decision processes and the Bellman equations) through the three classic families of solution methods (dynamic programming, Monte Carlo, temporal-difference) and up to the ideas powering modern deep RL (DQN, actor–critic, PPO) and principled exploration (bandits, UCB, Thompson sampling). This is a *taste* course: it deliberately skips cutting-edge research depth and heavy implementation engineering — you will understand why every method works and be able to derive its core update, not tune a production system.

## Dangerous Checklist

When you finish, you can:

- [ ] Formalize a decision problem as an MDP — states, actions, transitions, rewards, discount — and say what the Markov assumption buys you
- [ ] Write down and interpret the Bellman expectation and Bellman optimality equations for both $V$ and $Q$
- [ ] Run policy evaluation, policy iteration, and value iteration by hand on a small MDP and explain why each converges
- [ ] Estimate a value function from sampled episodes with Monte Carlo, and explain the bias–variance trade-off versus bootstrapping
- [ ] Derive and apply the TD(0), SARSA, and Q-learning updates, and say precisely which are on-policy vs off-policy
- [ ] Explain eligibility traces and how TD($\lambda$) interpolates between Monte Carlo and one-step TD
- [ ] Replace a lookup table with a function approximator and write the semi-gradient update, naming the "deadly triad" that can make it diverge
- [ ] State and use the policy gradient theorem, and derive the REINFORCE and actor–critic updates from it
- [ ] Explain the key stabilizing tricks in DQN (experience replay, target networks) and the clipped objective in PPO
- [ ] Balance exploration and exploitation with $\varepsilon$-greedy, UCB, and Thompson sampling, and quantify regret on a multi-armed bandit
- [ ] Explain at a conceptual level how model-based planning and self-play (AlphaGo-style) combine the pieces above

## Modules

### Module 1: MDPs & Dynamic Programming

The formal spine of RL: what problem we are actually solving, and how to solve it exactly when the environment's dynamics are known.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The RL Problem | Frame agent–environment interaction and the reward hypothesis | agent, environment, reward, return, exploration vs exploitation |
| 1.2 | Markov Decision Processes | Define an MDP and the discounted return | state, action, transition kernel, reward, discount $\gamma$, Markov property |
| 1.3 | Value Functions & the Bellman Expectation Equation | Express $V^\pi$ and $Q^\pi$ recursively | policy, state-value, action-value, Bellman expectation backup |
| 1.4 | Optimality & the Bellman Optimality Equation | Characterize the best policy and its value | optimal policy, $V^*$, $Q^*$, greedy improvement, existence of a deterministic optimum |
| 1.5 | Dynamic Programming | Solve a known MDP by iterating the Bellman operator | policy evaluation, policy iteration, value iteration, contraction & convergence |

**Boss problem 1:** A 2-state MDP has states $\{s_1, s_2\}$ and discount $\gamma = 0.9$. From $s_1$: action *stay* self-loops with reward $0$; action *switch* moves to $s_2$ with reward $+1$. From $s_2$: the only action self-loops with reward $+2$. Compute $V^*(s_1)$ and $V^*(s_2)$ by value iteration, state the optimal policy, and verify your answer satisfies the Bellman optimality equation exactly.

### Module 2: Model-Free Prediction & Control

Drop the assumption that we know the dynamics. Now we must *learn* from sampled experience — first evaluating a fixed policy, then improving it.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Monte Carlo Prediction | Estimate $V^\pi$ by averaging complete-episode returns | first-visit/every-visit MC, sample mean, no bootstrapping |
| 2.2 | Monte Carlo Control | Improve a policy from returns while keeping exploring | generalized policy iteration, exploring starts, $\varepsilon$-greedy |
| 2.3 | Temporal-Difference Learning: TD(0) | Update value estimates from single transitions | bootstrapping, TD error, TD vs MC bias–variance |
| 2.4 | SARSA — On-Policy TD Control | Learn action-values for the policy you are following | on-policy control, $Q(s,a)$ update, GLIE convergence |
| 2.5 | Q-Learning — Off-Policy TD Control | Learn the optimal action-values while behaving otherwise | off-policy control, max-bootstrap target, behavior vs target policy |
| 2.6 | Eligibility Traces & TD($\lambda$) | Interpolate smoothly between TD(0) and Monte Carlo | $n$-step returns, $\lambda$-return, forward/backward view, eligibility traces |

**Boss problem 2:** Run Q-learning with $\alpha = 0.5$, $\gamma = 1$, all $Q$ initialized to $0$, on the episode $(s_1,\text{right},r{=}{-}1,s_2),\ (s_2,\text{right},r{=}{+}10,\text{terminal})$. Compute every $Q$-value updated during the episode. Then state exactly what the *target* would have been under SARSA for the first update, assuming the agent's next chosen action from $s_2$ was *left* with $Q(s_2,\text{left})=0$ — and explain in one sentence why the two methods can learn different policies near a cliff.

### Module 3: Function Approximation & Policy Gradients

Tabular methods die when the state space is huge or continuous. Generalize with parametric approximators — first for values, then optimize the policy directly.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Value-Function Approximation | Replace the table with a parametric $\hat V(s;\mathbf{w})$ | features, linear approximation, semi-gradient TD, prediction objective |
| 3.2 | Control with Approximation & the Deadly Triad | Do SARSA/Q-learning with approximators, and know when it breaks | semi-gradient SARSA, the deadly triad (bootstrapping + off-policy + approximation) |
| 3.3 | The Policy Gradient Theorem | Optimize a parameterized policy by gradient ascent on return | policy parameterization, score function, $\nabla_\theta J(\theta)$ |
| 3.4 | REINFORCE | Turn the theorem into a Monte Carlo update | log-likelihood trick, return-weighted gradient, unbiasedness, variance |
| 3.5 | Actor–Critic Methods | Cut variance by learning a value baseline alongside the policy | advantage function, baseline, actor & critic, bootstrapped policy gradient |

**Boss problem 3:** A one-step bandit has two actions with a softmax policy $\pi_\theta(a) = \dfrac{e^{\theta_a}}{e^{\theta_1}+e^{\theta_2}}$, parameters $\theta = (\theta_1,\theta_2) = (0,0)$. You sample action $a_1$ and receive reward $R = 1$. Write the REINFORCE gradient $R\,\nabla_\theta \log \pi_\theta(a_1)$, compute the numerical update with step size $\alpha = 0.1$, and show that subtracting a constant baseline $b$ leaves the *expected* gradient unchanged.

### Module 4: Deep RL & Exploration

Assemble the pieces into the systems that beat Atari and Go, and give exploration the principled treatment it deserves.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Deep Q-Networks (DQN) | Stabilize Q-learning with a neural network | experience replay, target network, correlated-sample problem |
| 4.2 | A2C & A3C | Scale actor–critic with parallel workers and advantages | advantage actor–critic, parallelism, on-policy sampling |
| 4.3 | PPO — A Taste | Take large-but-safe policy steps with a clipped objective | trust region intuition, clipped surrogate objective, importance ratio |
| 4.4 | Bandits & Principled Exploration | Quantify and minimize regret in the pure-exploration setting | multi-armed bandits, regret, UCB1, Thompson sampling |
| 4.5 | Model-Based RL & Self-Play | See how planning and learning combine, up to AlphaGo | learned models, planning vs learning, Monte Carlo tree search, self-play |

**Boss problem 4:** A 3-armed bandit has been pulled so far with these results: arm 1 → rewards $\{1,0\}$; arm 2 → reward $\{1\}$; arm 3 → reward $\{0\}$ (so $t=4$ total pulls). Using UCB1, $a_t = \arg\max_i \big(\bar x_i + \sqrt{2\ln t / n_i}\big)$, compute the UCB score of each arm and state which arm is pulled at $t=5$. Then, in three sentences, explain why DQN's *target network* addresses a problem that plain online Q-learning with a neural net does not — and name which term in the UCB formula is the "exploration bonus" and why it shrinks over time.

## Sources of truth

- Sutton & Barto, *Reinforcement Learning: An Introduction* (2nd ed.) — primary reference for notation, MDP framing, and all tabular/approximation methods.
- David Silver's UCL RL course — lecture-level structure and the prediction-vs-control split.
- OpenAI *Spinning Up in Deep RL* — the deep policy-gradient and PPO taste (Module 4).
- Lattimore & Szepesvári, *Bandit Algorithms* — regret analysis and the UCB/Thompson treatment in Lesson 4.4.
