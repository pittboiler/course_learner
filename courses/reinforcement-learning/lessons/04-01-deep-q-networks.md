# Reinforcement Learning · Lesson 4.1: Deep Q-networks

> ⏱ ~15 min · Module 4: Deep RL & Exploration · Builds on: [3.2 (control with approximation and the deadly triad)](03-02-approximate-control-deadly-triad.md), [2.5 (Q-learning)](02-05-q-learning-off-policy-td-control.md) · Unlocks: [4.2 (A2C, A3C and advantage estimation)](04-02-a2c-a3c-advantage-estimation.md), [4.5 (model-based RL and planning)](04-05-model-based-rl-and-planning.md)

## Why this matters

[Lesson 3.2](03-02-approximate-control-deadly-triad.md) established that function approximation, bootstrapping and off-policy learning together can diverge — and Q-learning with a neural network is precisely all three. The theoretical position was that this should not be expected to work.

DQN made it work anyway, on forty-nine Atari games from raw pixels, with one architecture and one set of hyperparameters. It did not solve the triad; it **engineered around it**, with two ideas that are now standard equipment everywhere in deep RL. Understanding what each one fixes — and which they do not fix — is the difference between tuning an agent and guessing.

## The idea

Take [Lesson 2.5](02-05-q-learning-off-policy-td-control.md)'s update, replace the table with a convolutional network $Q(s,a;\theta)$ over pixels, and train it by regression toward the Q-learning target.

That alone fails, for two distinct reasons:

1. **The data is not i.i.d.** Consecutive frames of a game are almost identical and strongly correlated. A network trained on a stream of them fits the last few seconds of play and forgets the rest — the opposite of what stochastic gradient descent assumes.
2. **The target moves.** The regression target $R + \gamma\max_a Q(S',a;\theta)$ contains the very parameters being updated, so every gradient step shifts the thing being chased. [Lesson 3.1](03-01-value-function-approximation.md)'s worked example showed a single step *widening* the error this way.

DQN's two fixes address exactly these:

> **Experience replay** stores transitions and trains on random samples of them, restoring something close to independence. **A target network** holds a frozen copy of the weights for thousands of steps, so the goalposts stay still while you aim.

## The formal version

**Experience replay.** Store each transition $(S_t,A_t,R_{t+1},S_{t+1})$ in a buffer of about a million; sample minibatches uniformly at random to train. *(card: [experience replay](../reference.md#experience-replay))*

Three benefits, and they are separable:

- **Decorrelation.** A random minibatch spans very different situations, so the gradient is not dominated by one moment of play.
- **Data efficiency.** Each transition is used many times rather than once, which matters enormously against REINFORCE's discard-after-one-use ([Lesson 3.4](03-04-reinforce.md)).
- **Smoothing the distribution.** The buffer averages over recent policies, so the training distribution changes gradually rather than jumping when the policy does.

The cost: replay requires the method to be **off-policy**, since the stored actions came from older policies. That is the third leg of the triad, added deliberately.

**Target network.** Keep a second set of weights $\theta^-$, a periodic copy of $\theta$, and use them only in the target:

$$L(\theta) = \mathbb{E}_{(s,a,r,s')\sim\mathcal{D}}\left[\Big(r + \gamma\max_{a'}Q(s',a';\theta^-) - Q(s,a;\theta)\Big)^2\right]$$

with $\theta^- \leftarrow \theta$ every $C$ steps ($C = 10{,}000$ in the original). *(card: [target network](../reference.md#target-network))*

**What this buys is worth stating precisely.** Between copies, the target is a *constant* with respect to $\theta$, so each period of training is genuine supervised regression onto a fixed target — not a semi-gradient chase. The update is still not a gradient of any global objective, but the loop that destabilizes it has been broken into stretches where it cannot act.

**Maximization bias, and Double DQN.** [Lesson 2.5](02-05-q-learning-off-policy-td-control.md) flagged that $\max_a$ over noisy estimates overestimates, because $\mathbb{E}[\max_a X_a] \ge \max_a\mathbb{E}[X_a]$. With a network the estimates are noisy everywhere, so the bias is pervasive. **Double DQN** splits selection from evaluation:

$$\underbrace{r + \gamma\,Q\big(s',\ \arg\max_{a'}Q(s',a';\theta)\ ;\ \theta^-\big)}_{\text{Double DQN}} \qquad\text{versus}\qquad \underbrace{r + \gamma\max_{a'}Q(s',a';\theta^-)}_{\text{DQN}}$$

The online network picks the action; the target network scores it. One line of code, and it removes most of the overestimation — with the caveat from [Lesson 2.5](02-05-q-learning-off-policy-td-control.md) that the two networks are correlated rather than independent, so the correction is partial.

**Other pieces of the original system**, each doing a specific job: **frame stacking** (four consecutive frames, because one frame is not Markov — [Lesson 1.2](01-02-markov-decision-processes.md)'s repair, applied literally); **reward clipping** to $[-1,1]$, so one learning rate works across games (at the cost of making the agent indifferent between a small and a huge reward); and **$\varepsilon$ annealed** from $1.0$ to $0.1$, which is a GLIE-flavoured schedule ([Lesson 2.2](02-02-monte-carlo-control.md)) stopped short of zero.

**Later refinements**, briefly: *prioritized replay* samples transitions with large TD error more often; *dueling* architectures split the network into value and advantage streams; *distributional* RL predicts the whole return distribution rather than its mean. Combined, these are "Rainbow", and each contributes measurably.

## Picture

![Left: a diagram with an environment box feeding a replay buffer holding a million transitions, which feeds an online network on a random minibatch rather than the latest steps; the online network sends actions back to the environment, and a target network beside it is annotated as being copied over every ten thousand steps, with a note that without replay consecutive frames are nearly identical and the network overfits the last few seconds. Right: a plot of how often the agent takes the worse action against episodes, with a coral Q-learning curve that starts near 0.95 and decays only slowly, a blue Double Q-learning curve that falls quickly toward the dashed correct level of 0.05, and labels explaining that Q-learning is fooled by a maximum over ten noisy estimates](assets/04-01-fig1.svg)

The left panel is the engineering; the right panel is the one bug the engineering does *not* fix, which is why Double DQN came next.

## Worked examples

**Example 1 (mechanical): one DQN minibatch element.** A network gives, for a sampled transition with $r = 1$, $\gamma = 0.99$, and a non-terminal $s'$:

$$Q(s,a;\theta) = 3.2, \qquad Q(s',\cdot\,;\theta^-) = (4.0,\ 5.5,\ 2.1), \qquad Q(s',\cdot\,;\theta) = (4.6,\ 5.2,\ 2.3).$$

*DQN target:* take the max under the target network:

$$y = 1 + 0.99(5.5) = 1 + 5.445 = \mathbf{6.445}, \qquad \text{TD error} = 6.445 - 3.2 = 3.245.$$

*Double DQN target:* the **online** network selects ($\arg\max$ of $(4.6, 5.2, 2.3)$ is action $2$), the **target** network evaluates it ($Q(s',a_2;\theta^-) = 5.5$):

$$y = 1 + 0.99(5.5) = \mathbf{6.445}.$$

**Identical here** — because both networks happen to rank action $2$ highest. Change the online estimates to $(5.9,\ 5.2,\ 2.3)$ and the online network selects action $1$ instead, which the target network scores at $4.0$:

$$y_{\text{Double}} = 1 + 0.99(4.0) = \mathbf{4.96}, \qquad y_{\text{DQN}} = 1 + 0.99(5.5) = \mathbf{6.445}.$$

**Double DQN's target is $1.5$ lower.** The disagreement is the point: DQN takes the largest of the target network's estimates whatever its provenance, while Double DQN is forced to score an action chosen on other evidence. Where the two networks disagree — which is exactly where noise is driving the max — the double estimator declines to take the optimistic number.

**Example 2 (why you'd care): maximization bias costs real decisions.** A two-state MDP. From $A$, the action *right* terminates with reward $0$; the action *left* goes to $B$, from which **ten** actions each terminate with a reward drawn from $\mathcal{N}(-0.1, 1)$. So *left* is worse in expectation — it is worth $-0.1$ against $0$ — and a correct agent takes it only when exploring, i.e. $\varepsilon/2 = 5\%$ of the time.

Running both algorithms with $\varepsilon = 0.1$, $\alpha = 0.1$, averaged over $4000$ runs:

| episode | Q-learning takes *left* | Double Q-learning takes *left* |
|---|---|---|
| $1$ | $94.8\%$ | $94.8\%$ |
| $10$ | $94.6\%$ | $26.2\%$ |
| $50$ | $80.1\%$ | $11.2\%$ |
| $100$ | $42.7\%$ | $8.4\%$ |
| $300$ | $11.6\%$ | $\mathbf{6.0\%}$ |

**Q-learning spends the first fifty episodes taking the worse action four times out of five**, and after three hundred is still at twice the correct rate. Double Q-learning is essentially right by episode fifty.

The mechanism is exactly [Lesson 2.5](02-05-q-learning-off-policy-td-control.md)'s: the ten action-values at $B$ are all truly $-0.1$, but after a few noisy samples the *largest* of ten estimates is well above zero — the expected maximum of ten standard normals is about $1.54$. Q-learning backs that maximum up to $Q(A,\text{left})$ as though it were signal, so $A$ looks like a gateway to something worth $+1.5$. It takes hundreds of samples for every one of the ten to be pinned down before the illusion dissolves.

**In DQN this happens at every state with more than one plausible action, continuously.** Published value estimates from DQN on Atari are visibly higher than the returns actually achieved; Double DQN closes most of that gap and improves scores. It is the cheapest correction in deep RL.

## Watch out

- **You might think** the target network's only role is to slow learning down for stability — **but actually** it changes the algorithm's character. Between copies, the target is a fixed function, so each stretch is ordinary supervised regression with all the guarantees that carries. It is not a damping constant; it is a way of converting a chase into a sequence of well-posed fits.
- **You might think** a larger replay buffer is always better, since more data is more decorrelated — **but actually** a very large buffer holds transitions from policies long since abandoned, pushing the training distribution further from the current policy and strengthening the off-policy leg of the triad. Buffer size is a dial between decorrelation and staleness, and both ends are bad.
- **You might think** reward clipping to $[-1,1]$ is a harmless normalization — **but actually** it makes the agent unable to distinguish a reward of $1$ from a reward of $1000$, so it changes the problem. It is the reason DQN plays some games in a way that maximizes the *number* of scoring events rather than the score, and it is why later work moved to less destructive normalizations.

## One-liner

> Deep Q-learning is the deadly triad assembled on purpose, kept alive by sampling the past at random and by refusing to move the target while you aim at it.

## Problems

**P1 (🟢)** A DQN minibatch element has $r = -2$, $\gamma = 0.95$, $s'$ non-terminal, $Q(s,a;\theta) = 1.5$, and

$$Q(s',\cdot\,;\theta^-) = (0.5,\ 3.0,\ 1.0), \qquad Q(s',\cdot\,;\theta) = (0.8,\ 2.6,\ 3.4).$$

(a) Compute the DQN target and its TD error.
(b) Compute the Double DQN target and its TD error.
(c) State which is larger and explain why they differ here.
(d) State the condition under which the two targets always coincide.

**P2 (🟡)** DQN uses a replay buffer of $10^6$ transitions and a target network copied every $10^4$ steps, and acts once per step.

(a) If the agent has collected $4\times10^6$ transitions, state the age range of the transitions in the buffer.
(b) Compute how many target-network copies occur while the buffer turns over once.
(c) A colleague raises the copy interval to $10^6$ steps. State the effect on stability and on learning speed.
(d) A second colleague shrinks the buffer to $10^3$. State which of the three benefits of replay is most damaged and why.

**P3 (🔴)** DQN is off-policy but uses **no importance sampling**, even though its replay buffer contains actions chosen by older policies.

(a) State the property of Q-learning's target that makes this legitimate, recalling [Lesson 2.6](02-06-off-policy-learning-importance-sampling.md).
(b) Now consider replacing the one-step target with a $3$-step return computed from three consecutive stored transitions. State precisely which of the actions in it would need correcting.
(c) Explain why practitioners nevertheless often use $n$-step returns in replay-based agents without any correction, and what they are trading away.
(d) Identify the remaining distributional mismatch that even the one-step target does not remove, and name the requirement it imposes.

<details>
<summary>Solutions</summary>

**P1**

(a) DQN takes the maximum of the target network's values: $\max(0.5, 3.0, 1.0) = 3.0$.

$$y = -2 + 0.95(3.0) = -2 + 2.85 = \mathbf{0.85}, \qquad \text{TD error} = 0.85 - 1.5 = \mathbf{-0.65}.$$

(b) The online network selects: $\arg\max(0.8, 2.6, 3.4)$ is action $3$. The target network evaluates action $3$: $Q(s',a_3;\theta^-) = 1.0$.

$$y = -2 + 0.95(1.0) = \mathbf{-1.05}, \qquad \text{TD error} = -1.05 - 1.5 = \mathbf{-2.55}.$$

(c) **DQN's target is larger**, by $1.9$.

They differ because the two networks disagree about which action is best at $s'$: the online net prefers $a_3$, the target net prefers $a_2$. DQN takes the target network's maximum ($3.0$, at $a_2$) regardless of whether any other evidence supports $a_2$. Double DQN is obliged to evaluate the action the *online* net believes in, and the target net scores that one at only $1.0$.

**Disagreement between the two networks is a symptom of noise**, and Double DQN's design makes that noise reduce the target rather than inflate it.

(d) They coincide exactly whenever the two networks have the same arg-max at $s'$ — that is, $\arg\max_{a'}Q(s',a';\theta) = \arg\max_{a'}Q(s',a';\theta^-)$.

Since $\theta^-$ is a recent copy of $\theta$, this is usually the case, which is why Double DQN is a cheap modification rather than a different algorithm. It differs precisely on the transitions where the estimates are least settled — which are the ones where the bias does damage.

**P2**

(a) The buffer holds the most recent $10^6$ transitions, so with $4\times10^6$ collected it contains transitions numbered $3\times10^6 + 1$ through $4\times10^6$ — **between $0$ and $10^6$ steps old**, i.e. up to a million steps of staleness.

(b) The buffer turns over once every $10^6$ steps, and a copy happens every $10^4$ steps:

$$\frac{10^6}{10^4} = \mathbf{100\ \text{copies}}.$$

So the target network is refreshed a hundred times in the span over which the data is fully replaced — the target moves much faster than the data distribution does, which is the intended ordering.

(c) **Stability improves; learning slows, badly.**

With a copy interval of $10^6$ the target is frozen for the entire lifetime of the buffer, so the regression is extremely well posed and divergence is very unlikely. But no new reward information propagates backwards more than one step per freeze period: the values learned in one period only reach the target at the next copy, so information travels one state per million steps. On any task needing long chains of credit assignment this is fatal.

**The copy interval is the dial between the two failure modes**: too short and the target chases (instability), too long and credit cannot propagate (no learning).

(d) **Decorrelation is most damaged.**

A buffer of $10^3$ holds roughly the last thousand steps — a few seconds of play — so a random minibatch drawn from it still consists of highly similar, temporally adjacent frames. The whole point of replay was to break that correlation, and at this size it barely does.

Data efficiency also falls (each transition is reused fewer times before eviction), but that is a matter of degree. Distribution smoothing is arguably *improved*, since the buffer is closer to on-policy — which is the one benefit a small buffer preserves, and the reason small buffers appear in agents that care more about on-policyness than sample reuse.

**P3**

(a) The target $r + \gamma\max_{a'}Q(s',a')$ **samples no action at $s'$** — it maximizes over all of them. Importance sampling exists to correct a mismatch in which action was sampled, and there is no sampled choice at $s'$ to correct. The action $a$ at $s$ needs no correction either, since the update is about $Q(s,a)$ and conditioning on $a$ is the point.

(b) A $3$-step target is $r_1 + \gamma r_2 + \gamma^2 r_3 + \gamma^3\max_{a'}Q(s_3,a')$. The two **intermediate** actions — the one taken at $s_1$ and the one taken at $s_2$ — were chosen by the old behaviour policy and determined the rewards $r_2$, $r_3$ and the state $s_3$. They need correcting by

$$\frac{\pi(a_1\mid s_1)}{b(a_1\mid s_1)}\cdot\frac{\pi(a_2\mid s_2)}{b(a_2\mid s_2)}.$$

The first action $a_0$ and the final $\max$ need no correction, for the reasons in (a). With a greedy target policy this product is zero whenever either intermediate action was exploratory, which truncates most $n$-step targets back toward the one-step case.

(c) Because the correction is **either zero or large**, and both are bad: a ratio of zero throws the transition away (and with $\varepsilon$-greedy data a large fraction of $n$-step windows contain an exploratory action), while a nonzero ratio inflates the variance multiplicatively, exactly as [Lesson 2.6](02-06-off-policy-learning-importance-sampling.md)'s table showed. Uncorrected $n$-step targets keep all the data at a constant weight.

**What is traded away is correctness of the fixed point.** The uncorrected target estimates the value of a policy that is part $\pi$ and part $b$ — a blend, not $Q^*$. In practice the bias is small when the buffer is recent (so $b\approx\pi$) and $n$ is small, which is why the standard recipe is $n = 3$ with a modest buffer rather than $n = 20$ with a huge one. It is an accepted, bounded error rather than an oversight.

(d) The mismatch that remains is in **which states appear in the data at all.** The one-step target is correct for whatever $(s,a)$ it is given, but the *set* of pairs the buffer contains was chosen by the behaviour policies, and the network is only trained where they went.

The requirement this imposes is [Lesson 2.5](02-05-q-learning-off-policy-td-control.md)'s surviving condition: **every state–action pair must keep being visited**. In a table this is a convergence hypothesis; with a network it is worse, because the network will happily extrapolate a confident value for a pair it has never seen, and the $\max$ will then select it. That is the central failure of offline RL — the agent's optimism is highest exactly where its evidence is absent — and it is [Lesson 2.6](02-06-off-policy-learning-importance-sampling.md)'s coverage condition reappearing as an engineering crisis.

</details>

## Flashback

**From Lesson 3.2 (Control with approximation, and the deadly triad):** For each of the following, state which of the three legs are present and whether divergence is possible.

(a) DQN with the replay buffer removed, training on the current transition only.
(b) DQN with the $\max$ replaced by the value of the action actually stored (an on-policy-flavoured target), still using replay.
(c) Gradient Monte Carlo with a network, trained on a replay buffer of complete episodes.
(d) State which of (a)–(c) you would expect to be most stable, and whether stability is the only thing that matters.

<details>
<summary>Solution</summary>

(a) **Approximation** (a network) and **bootstrapping** (a TD target). Off-policy is gone — training on the current transition with an $\varepsilon$-greedy behaviour policy and a greedy target is still technically off-policy because of the $\max$, but the *state distribution* is now the behaviour policy's own, which is what the triad's third leg actually refers to ([Lesson 3.2](03-02-approximate-control-deadly-triad.md), P3).

So: **two legs, much safer** — this is essentially semi-gradient Q-learning online. It will also learn very poorly, because the data is correlated.

(b) **All three legs are still present.** Replacing the $\max$ removes the target policy's greediness, but the replay buffer means the *states and actions* come from old policies, which is the distributional mismatch the triad cares about. This is off-policy SARSA-with-replay, and it is not safe.

The instructive point: **"on-policy" means the update distribution matches, not that the target formula lacks a $\max$.** A stored transition from a policy three hundred thousand steps ago is off-policy data however you build the target from it.

(c) **Approximation only.** The target is a complete Monte Carlo return, which does not depend on the weights, so there is no bootstrapping — and with the target fixed, the off-policy leg loses its bite, since the update is honest supervised regression onto a fixed label. (The state distribution is still the old policies', so the *objective* being minimized is weighted by a stale $\mu$, but the iteration cannot diverge.)

**One leg. Safe.**

(d) **(c) is the most stable** — it is ordinary supervised learning on stored targets, and it cannot diverge.

But stability is emphatically not all that matters. (c) inherits [Lesson 2.1](02-01-monte-carlo-prediction.md)'s Monte Carlo variance, needs complete episodes (so no continuing tasks), and cannot learn from a partial trajectory. [Lesson 2.7](02-07-n-step-returns-and-the-lambda-return.md) measured the cost of pure Monte Carlo at more than three times the error of a well-chosen bootstrapped method on a simple random walk.

**The field uses (a modified form of) the unstable option because the stable one learns too slowly** — which is the whole reason target networks and replay buffers exist rather than a retreat to Monte Carlo. The triad is a warning about what to monitor, not an instruction to avoid the combination.

</details>

## Connections

- **Backward:** the update is [Lesson 2.5](02-05-q-learning-off-policy-td-control.md)'s Q-learning with [Lesson 3.1](03-01-value-function-approximation.md)'s approximation, assembling all three legs of [Lesson 3.2](03-02-approximate-control-deadly-triad.md)'s triad. Frame stacking is [Lesson 1.2](01-02-markov-decision-processes.md)'s state-construction repair applied to pixels, and the maximization bias is the one [Lesson 2.5](02-05-q-learning-off-policy-td-control.md) derived from Jensen's inequality.
- **Forward:** [Lesson 4.2](04-02-a2c-a3c-advantage-estimation.md) takes the opposite route to decorrelation — many parallel actors instead of a buffer — which keeps the data on-policy and removes a leg of the triad. [Lesson 4.5](04-05-model-based-rl-and-planning.md)'s Dyna is replay with a *learned model* generating the transitions rather than a buffer replaying real ones, which is the same idea with a different source of data.
- **Sideways:** experience replay is the i.i.d. assumption of [`machine-learning`](../../machine-learning/syllabus.md) being manufactured rather than assumed, and the target network is the same device as the frozen teacher in knowledge distillation and the slowly-updated copies used to stabilize adversarial training in [`deep-learning`](../../deep-learning/syllabus.md) — in every case, breaking a feedback loop by making one side of it hold still.
