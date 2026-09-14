# Reinforcement Learning · Lesson 4.5: Model-based RL and planning

> ⏱ ~15 min · Module 4: Deep RL & Exploration · Builds on: [4.3 (PPO)](04-03-ppo-a-taste.md), [1.5 (policy evaluation and policy iteration)](01-05-policy-evaluation-and-policy-iteration.md) · Unlocks: [4.6 (Monte Carlo tree search and self-play)](04-06-monte-carlo-tree-search-and-self-play.md)

## Why this matters

Module 1 assumed the dynamics were known and computed the answer exactly. Modules 2 to 4 assumed they were unknown and paid for it — in variance, in sample counts, in the deadly triad. That framing has a gap: the dynamics are not *given*, but they can be **learned**, and once you have even an approximate model you can go back to planning.

The payoff is sample efficiency, and it is dramatic. On the maze below, an agent that does fifty planning steps per real step reaches a near-optimal policy in **five episodes** where a model-free agent needs about thirty. When each real step is a second of robot time or a dollar of compute, that ratio is the difference between feasible and not.

The catch is equally sharp: a planner is only as good as its model, and errors in a learned model do not stay small — a planner will find and exploit them.

## The idea

Two things an agent can do with experience:

- **Learn directly** — update the value function or policy from the transition, as every method since [Lesson 2.1](02-01-monte-carlo-prediction.md).
- **Learn a model** — fit $\hat p(s'\mid s,a)$ and $\hat r(s,a)$, then generate *simulated* transitions from it and learn from those too.

**Dyna** does both, and the elegance is that the update is identical either way:

> Real experience improves the model and the value function. The model then manufactures as much extra experience as you want, and the value function cannot tell the difference.

The second source is nearly free — no environment interaction, just computation. So the question stops being "how many samples can I afford?" and becomes "how much compute can I spend per sample, and how far can I trust the model?"

## The formal version

**Dyna-Q.** After each real step $(S,A,R,S')$:

1. **Direct learning:** $Q(S,A) \leftarrow Q(S,A) + \alpha\big[R + \gamma\max_a Q(S',a) - Q(S,A)\big]$.
2. **Model learning:** store $\text{Model}(S,A) \leftarrow (R, S')$ — for a deterministic environment, simply remember what happened.
3. **Planning:** repeat $n$ times — sample a previously-seen $(S_p, A_p)$, look up $(R_p, S_p')$ in the model, and apply **the same Q-learning update** to it.

*(card: [Dyna](../reference.md#dyna))*

**Step 3 is the whole idea, and it is not a different algorithm.** The planning update is character-for-character the learning update; only the origin of the data differs. That is why Dyna is described as "planning and learning are the same operation on different data".

**The relationship to replay.** [Lesson 4.1](04-01-deep-q-networks.md)'s replay buffer replays *real* transitions; Dyna replays *model-generated* ones. With a deterministic tabular environment the learned model is a lookup table of what happened, so Dyna-Q and replay are nearly identical. They diverge when the model **generalizes** — a learned model can produce transitions for state–action pairs never actually tried, which a buffer cannot. That is the upside and the danger.

**Where model-based methods win and lose:**

| | model-free | model-based |
|---|---|---|
| sample efficiency | low | **high** |
| computation per real step | low | **high** |
| asymptotic performance | ceiling set by the algorithm | **ceiling set by the model's accuracy** |
| robustness | no model to be wrong | fails when the model is wrong |
| changed environment | relearns | **model can be stale and actively misleading** |

**The compounding-error problem.** A model with per-step error $\epsilon$ used to roll out $H$ steps accumulates error that grows roughly like $\epsilon H$ at best and can grow exponentially when the rollout wanders into regions the model never saw. Worse, the planner is an *optimizer*: it actively seeks out the states the model rates highest, which are disproportionately the states where the model is **erroneously optimistic**. Model exploitation is not bad luck; it is what optimization does.

The standard responses: keep rollouts short ($5$–$10$ steps rather than hundreds), use an **ensemble** of models and act only where they agree, and re-fit the model constantly on fresh data.

**Dyna-Q+ and stale models.** If the environment changes, a model built from old data keeps generating obsolete transitions and the agent plans confidently into a wall. Dyna-Q+ adds an exploration bonus $\kappa\sqrt{\tau}$ to the simulated reward, where $\tau$ is the time since that transition was last actually tried — so long-untested beliefs gradually become attractive to re-check. **It is UCB's $\sqrt{\ln t/N}$ logic ([Lesson 4.4](04-04-bandits-and-principled-exploration.md)) applied to the model's own staleness.**

**Modern model-based RL** learns the model with a neural network, often in a compressed **latent space** rather than over raw observations, and plans by rolling out short imagined trajectories. Dreamer trains its policy entirely inside a learned world model; MuZero learns a model that need not predict observations at all, only the quantities planning consumes — reward, value and policy — which sidesteps the burden of modelling irrelevant detail. [Lesson 4.6](04-06-monte-carlo-tree-search-and-self-play.md) covers how that model is used.

## Picture

![Left: a diagram with an environment box, a model box labelled learned p and r, and a value or policy box. Real experience flows from the environment to the model, simulated experience flows from the model to the value, a separate arrow shows the same real step also updating the value directly, and a return arrow shows acting on the environment; a note says planning and learning use the same update and only the source of the data differs. Right: a semi-log plot of steps taken to reach the goal against episodes for a maze, with three curves for zero, five and fifty planning steps per real step, the fifty-step curve reaching the dashed shortest-path line of fourteen by about episode five while the zero-step curve is still above one hundred at episode ten](assets/04-05-fig1.svg)

The vertical gap between the curves is bought entirely with computation. The environment is the same, and so is the number of real steps on the horizontal axis.

## Worked examples

**Example 1 (mechanical): Dyna-Q on the maze.** A $6\times9$ gridworld with walls, a start and a goal; reward $1$ on reaching the goal and $0$ elsewhere; $\gamma = 0.95$, $\alpha = 0.1$, $\varepsilon = 0.1$. The shortest path is $14$ steps. Averaged over $30$ runs, the number of steps each episode takes:

| episode | $n = 0$ (plain Q-learning) | $n = 5$ | $n = 50$ |
|---|---|---|---|
| $2$ | $1125.8$ | $138.6$ | $\mathbf{40.5}$ |
| $5$ | $281.1$ | $23.8$ | $\mathbf{17.6}$ |
| $10$ | $138.4$ | $16.9$ | $17.1$ |
| $30$ | $18.8$ | $16.8$ | $17.5$ |
| $50$ | $18.0$ | $16.8$ | $17.2$ |

**Episode 2 is the striking one: $1126$ steps against $41$, a factor of $28$.** With $n=0$ the first episode's reward has propagated back exactly one state ([Lesson 2.3](02-03-temporal-difference-learning-td0.md)'s one-step-per-episode rule), so the agent is still wandering almost at random. With $n = 50$, that single episode's transitions have been replayed fifty times per step, and the value information has already spread back across the whole maze.

By episode $30$ all three have converged to about the same place. **Planning does not raise the ceiling — it raises the speed of approach**, which is exactly what you would expect from an operation that adds no new information about the world, only more computation on the information already collected.

(The converged figures of $17$–$18$ rather than $14$ are the $\varepsilon = 0.1$ exploration tax: a tenth of the steps are random, so the walk is a few steps longer than optimal. [Lesson 2.5](02-05-q-learning-off-policy-td-control.md)'s distinction between the policy learned and the policy executed, once again.)

**Example 2 (why you'd care): the planner exploits the model's errors.** Suppose a learned model is accurate almost everywhere but, from one rarely-visited state $s_{\text{rare}}$, wrongly predicts a transition to a high-value state — because it saw that pair twice and both times got lucky.

A model-free agent barely notices: it has visited $s_{\text{rare}}$ twice, so $Q(s_{\text{rare}},\cdot)$ carries little weight and it will be corrected the next time the state is visited.

A planner is different in kind. Planning samples state–action pairs and backs up values through the model, so the erroneous high value at $s_{\text{rare}}$ is propagated to **every state that can reach it**. Those states then look attractive, so the greedy policy steers toward $s_{\text{rare}}$, and the agent spends its real experience travelling to a place its model is wrong about.

**The optimization is working correctly; that is the problem.** A planner searches for whatever its model rates highest, and among the model's high ratings the erroneous ones are over-represented — precisely because an error that *overstates* a value survives the arg-max while one that understates it is ignored. This is [Lesson 2.5](02-05-q-learning-off-policy-td-control.md)'s maximization bias, applied to the model rather than the value estimates.

There is a silver lining, and it is the basis of the standard fix: steering toward the error means the agent goes and collects data there, which corrects the model. So a Dyna agent self-corrects — **provided the rollouts are short enough that it does not commit to a long fantasy first.** That is why practical model-based methods use horizons of five to ten steps and ensembles that flag disagreement, and it is the honest reason model-based RL remains harder to get working than PPO.

## Watch out

- **You might think** more planning steps are always better, since they cost no environment interaction — **but actually** planning only re-uses information already collected, so its value saturates. Beyond a point the extra updates are re-deriving conclusions the value function already holds, and with an imperfect model they amplify its errors. The maze shows this: $n=50$ beats $n=5$ dramatically at episode $2$ and is indistinguishable from it by episode $10$.
- **You might think** a model-based agent must eventually beat a model-free one, since it uses strictly more of the information — **but actually** its asymptotic performance is capped by the model's accuracy, while a model-free agent's is capped only by its own algorithm. On a complex environment a learned model is always somewhat wrong, so model-free methods often win in the limit and model-based methods win early. Hybrids exist for this reason.
- **You might think** a stale model is merely uninformative — **but actually** it is worse than no model, because the planner treats it as authoritative and plans confidently into a world that no longer exists. A model-free agent in a changed environment is merely wrong about values and corrects on contact; a model-based agent may never make contact, because its plan routes around a wall that has been removed. Dyna-Q+'s staleness bonus exists precisely for this.

## One-liner

> Learn a model, then practise against it — planning and learning are the same update on different data, and the only question is how far the model can be trusted.

## Problems

**P1 (🟢)** A Dyna-Q agent takes one real step per second and performs $n$ planning steps per real step, each costing $1$ ms.

(a) Compute the wall-clock time per real step at $n = 0$, $n = 50$ and $n = 500$.
(b) Using Example 1's table, state how many *real steps* the $n=50$ agent needs to reach a near-optimal policy versus the $n=0$ agent, taking episodes $5$ and $30$ respectively and using each agent's own episode lengths as a rough guide.
(c) State which agent finishes sooner in wall-clock time.
(d) State the condition on the cost of a real step that makes planning worth it.

**P2 (🟡)** A learned deterministic model is correct on $95\%$ of state–action pairs and wrong on $5\%$.

(a) Compute the probability that a $5$-step rollout is entirely correct.
(b) Compute it for a $50$-step rollout.
(c) State what (a) and (b) together imply about rollout horizons.
(d) A colleague notes that being "wrong" on one step need not ruin the rollout if the error is small. State the circumstance under which that optimism is unjustified, connecting it to Example 2.

**P3 (🔴)** Dyna-Q+ adds $\kappa\sqrt{\tau(s,a)}$ to the simulated reward for a pair last actually tried $\tau$ steps ago.

(a) State what happens to the agent's behaviour as $\kappa \to 0$ and as $\kappa\to\infty$.
(b) Compare the functional form $\sqrt{\tau}$ with UCB1's $\sqrt{2\ln t/N}$, and state what each is measuring.
(c) Explain why the bonus is added to the *simulated* reward rather than the real one, and what would go wrong if it were added to both.
(d) An environment changes so that a previously-blocked shortcut is now open. Explain how Dyna-Q+ discovers it and why plain Dyna-Q may never do so.

<details>
<summary>Solutions</summary>

**P1**

(a) The real step costs $1$ s; each planning step costs $1$ ms $= 0.001$ s.

| $n$ | time per real step |
|---|---|
| $0$ | $\mathbf{1.000}$ s |
| $50$ | $1 + 0.050 = \mathbf{1.050}$ s |
| $500$ | $1 + 0.500 = \mathbf{1.500}$ s |

(b) *Accept criterion: any reasonable summation of episode lengths up to the stated episode.*

The $n=50$ agent is near-optimal by episode $5$. Its episode lengths run roughly $1000$-ish (episode 1, before any learning), $40$, $25$, $20$, $18$ — call it about $1100$ real steps.

The $n=0$ agent needs about episode $30$, and its early episodes are enormous: episode 2 alone is $1126$, episode 5 is $281$, episode 10 is $138$, tapering to $19$. Summing the trend gives on the order of **$5000$–$6000$ real steps**.

So roughly a **five-fold reduction in real steps**.

(c) **The $n = 50$ agent, comfortably.** It needs about $1100$ real steps at $1.05$ s each $\approx 1155$ s. The $n=0$ agent needs about $5500$ real steps at $1.00$ s each $\approx 5500$ s. Planning costs $5\%$ more per step and saves $80\%$ of the steps.

(d) Planning is worth it when **the cost of a real step exceeds the cost of the planning steps it saves you**. Writing $c_{\text{real}}$ for the cost of an environment step, $c_{\text{plan}}$ for one planning step, and $f$ for the factor by which planning reduces the number of real steps needed:

$$n\,c_{\text{plan}} < c_{\text{real}}\left(1 - \tfrac1f\right)\times(\text{steps}).$$

In plain terms: planning wins when environment interaction is expensive relative to computation. That is why model-based methods dominate robotics and are less compelling in cheap simulators, where model-free methods with massive parallelism ([Lesson 4.2](04-02-a2c-a3c-advantage-estimation.md)) are simply easier to get right.

**P2**

(a) $0.95^5 = \mathbf{0.7738}$ — about a $77\%$ chance the whole rollout is correct, so nearly a quarter are already corrupted.

(b) $0.95^{50} = \mathbf{0.0769}$ — **under $8\%$**. More than nine rollouts in ten contain at least one modelling error.

(c) **Errors compound multiplicatively, so the usable horizon is short.** A model good enough to be useful for five steps is nearly useless for fifty, and the degradation is geometric rather than gradual: each extra step multiplies the survival probability by $0.95$.

This is why practical model-based methods use horizons of five to ten steps and then **bootstrap from a learned value function** for everything beyond — exactly [Lesson 2.7](02-07-n-step-returns-and-the-lambda-return.md)'s $n$-step compromise, with the model playing the role of the real rewards and the value function covering the tail.

(d) The optimism is unjustified when the planner is **optimizing over the rollouts**, which it is.

If rollouts were sampled and averaged, small errors in either direction would largely cancel and the colleague would be right. But a planner takes the *best* rollout it can find, and among many rollouts the ones that look best are disproportionately those where the model's error happened to be *favourable*. So the selection step systematically converts small symmetric errors into a large optimistic bias — Example 2's mechanism, and [Lesson 2.5](02-05-q-learning-off-policy-td-control.md)'s $\mathbb{E}[\max] \ge \max\mathbb{E}$ once again.

The practical consequence: the relevant statistic is not the model's *average* error but its error on the trajectories the planner selects, which is much larger and cannot be measured by validation loss on ordinary data.

**P3**

(a) As $\kappa\to0$ the bonus vanishes and **Dyna-Q+ becomes Dyna-Q** — it plans purely on its model's predictions and never re-checks stale beliefs.

As $\kappa\to\infty$ the bonus dominates the real rewards entirely, so the agent's planned policy is driven only by which transitions are oldest. It becomes a **systematic re-checker**, cycling through state–action pairs in order of staleness and ignoring reward altogether. Both extremes are useless; $\kappa$ is the usual exploration dial.

(b) Both are exploration bonuses that grow with *time elapsed* and shrink with *evidence*, but they measure different ignorance:

| | UCB1: $\sqrt{2\ln t/N}$ | Dyna-Q+: $\kappa\sqrt{\tau}$ |
|---|---|---|
| grows with | total time $t$ | time since this pair was tried |
| shrinks with | number of pulls $N$ | resets to $0$ when tried |
| measures | *statistical* uncertainty — how noisy is my estimate | *staleness* — how out of date is my belief |

UCB assumes a **stationary** world, so more samples permanently reduce uncertainty. Dyna-Q+ assumes a world that can **change**, so certainty decays with time no matter how many samples you once had. That is the essential difference, and it is why the second has no $N$ in it: a hundred old observations are no better than one old observation if the world has moved.

(c) Adding it to the simulated reward makes the bonus influence **planning** — the agent's internal valuation of untested options — while leaving its record of what actually happened untouched.

If it were added to the real reward as well, the model would learn the bonus as though it were part of the environment. Then $\hat r(s,a)$ would be permanently inflated for pairs that happened to be stale when they were tried, corrupting the model itself rather than merely biasing the plan. **The model must record the world as it is; the bonus belongs to the decision of where to look next**, which is the same separation of estimate from exploration that makes UCB's bonus an add-on to $\bar x_i$ rather than a modification of it.

(d) **Dyna-Q+ discovers it because the bonus eventually makes the stale belief worth re-testing.** The shortcut's state–action pair was tried long ago and found blocked, so $\tau$ grows without bound and $\kappa\sqrt{\tau}$ grows with it. At some point the bonus exceeds the value gap between the known route and the apparently-worthless shortcut, planning starts recommending it, the agent tries it for real, discovers it is open, and the model is corrected — after which $\tau$ resets and the genuine value takes over.

**Plain Dyna-Q may never find it** because it is caught in the self-sealing trap of [Lesson 2.2](02-02-monte-carlo-control.md), now at one remove. Its model says the shortcut is blocked, so planning gives it a low value, so the greedy policy never goes there, so the model is never contradicted. $\varepsilon$-greedy exploration gives it *some* chance, but that chance is uniform over all actions in whatever states the agent happens to occupy, and if the shortcut is far from the agent's current route it may take astronomically long to stumble on.

The general lesson: **a model lets you stop exploring, and that is exactly the danger.** The more you trust a model, the less data you gather to check it, so anything that makes a model-based agent safe in a changing world has to manufacture a reason to revisit its own assumptions.

</details>

## Flashback

**From Lesson 4.3 (PPO):** With $\epsilon = 0.25$, compute $L^{\text{CLIP}}$ for each case and state whether the gradient is zero.

(a) $r_t = 1.1$, $\hat A_t = 4$.
(b) $r_t = 1.6$, $\hat A_t = 4$.
(c) $r_t = 0.5$, $\hat A_t = -2$.
(d) $r_t = 1.6$, $\hat A_t = -2$.

<details>
<summary>Solution</summary>

The trust region is $[0.75,\ 1.25]$.

(a) Inside the region, so the clip is inactive:

$$L = \min(1.1(4),\ 1.1(4)) = \mathbf{4.4}. \qquad \text{Gradient is \textbf{nonzero}.}$$

(b) $r_t = 1.6$ clips to $1.25$; with $\hat A > 0$ the $\min$ takes the smaller product:

$$L = \min(1.6(4),\ 1.25(4)) = \min(6.4,\ 5.0) = \mathbf{5.0}. \qquad \text{Gradient is \textbf{zero}.}$$

(c) $r_t = 0.5$ clips to $0.75$; with $\hat A < 0$ the products are $0.5(-2) = -1.0$ and $0.75(-2) = -1.5$:

$$L = \min(-1.0,\ -1.5) = \mathbf{-1.5}. \qquad \text{Gradient is \textbf{zero}.}$$

(d) $r_t = 1.6$ clips to $1.25$; the products are $1.6(-2) = -3.2$ and $1.25(-2) = -2.5$:

$$L = \min(-3.2,\ -2.5) = \mathbf{-3.2}. \qquad \text{Gradient is \textbf{nonzero}.}$$

The pattern is the asymmetry the $\min$ creates. In (b) and (c) the policy has moved in the direction the advantage *wanted*, and gone too far — so the objective flattens and stops pushing. In (d) the policy has moved a bad action's probability *up* by $60\%$, which is the wrong direction entirely, and the unclipped penalty applies in full so the update pulls hard to reverse it.

**Clipping caps the reward for going too far the right way; it never caps the penalty for going the wrong way.** That one-sidedness is why PPO can safely take several epochs on one batch — a mistake made in an early epoch remains fully correctable in a later one.

</details>

## Connections

- **Backward:** the planning update is [Lesson 2.5](02-05-q-learning-off-policy-td-control.md)'s Q-learning applied to simulated data, and the whole scheme is [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md)'s planning loop with a learned model in place of a given one. Dyna's relationship to [Lesson 4.1](04-01-deep-q-networks.md)'s replay buffer is close enough that the two coincide in the deterministic tabular case, and Dyna-Q+'s staleness bonus is [Lesson 4.4](04-04-bandits-and-principled-exploration.md)'s optimism adapted to a non-stationary world.
- **Forward:** [Lesson 4.6](04-06-monte-carlo-tree-search-and-self-play.md) uses a model quite differently — not to generate training data but to search forward from the current state at decision time, which sidesteps the compounding-error problem by planning only where it is about to act.
- **Sideways:** the compounding-error analysis is the same as error propagation in numerical integration ([`numerical-analysis`](../../numerical-analysis/syllabus.md)), where a per-step truncation error accumulates over a trajectory and bounds the usable horizon — with the extra difficulty here that the "integrator" is being optimized against, so the relevant error is the worst case along the selected path rather than the average.
