# Reinforcement Learning · Lesson 2.3: Temporal-difference learning — TD(0)

> ⏱ ~15 min · Module 2: Model-Free Prediction & Control · Builds on: [2.1 (Monte Carlo prediction)](02-01-monte-carlo-prediction.md), [1.3 (value functions and the Bellman expectation equation)](01-03-value-functions-bellman-expectation.md) · Unlocks: [2.4 (SARSA)](02-04-sarsa-on-policy-td-control.md), [2.7 (n-step returns and the λ-return)](02-07-n-step-returns-and-the-lambda-return.md)

## Why this matters

Monte Carlo and dynamic programming each gave up something. DP needed a model. MC needed the episode to end, and paid for its honesty with a standard deviation of $22$ on a quantity of size $27$.

Temporal-difference learning takes what is good from both, and it is the genuinely original idea in reinforcement learning — the one with no counterpart in supervised learning or classical dynamic programming. **It samples like Monte Carlo and bootstraps like dynamic programming.** The result learns online, from incomplete episodes, in continuing tasks, with far less variance — and it is the foundation of SARSA, Q-learning, DQN and every actor–critic method in this course.

The idea is also a little unsettling the first time: TD updates a guess toward another guess, with no guarantee that either is right. Understanding why that works, and exactly what it converges to, is the point of this lesson.

## The idea

Monte Carlo waits for the actual return $G_t$ and moves its estimate toward it. But [Lesson 1.3](01-03-value-functions-bellman-expectation.md) says

$$V^\pi(s) = \mathbb{E}_\pi\big[R_{t+1} + \gamma V^\pi(S_{t+1}) \mid S_t = s\big],$$

so "immediate reward plus the discounted value of the next state" is *also* an unbiased target for $V^\pi$ — if you knew $V^\pi$. You do not. Use your current estimate instead.

> TD drives the estimate at $s$ toward the reward you just got plus your own estimate at the state you just reached.

That substitution is **bootstrapping**, and it buys three things at once:

- **No waiting.** One transition is enough. Learning happens during the episode, and continuing tasks are fine.
- **Much lower variance.** $G_t$ accumulates the randomness of every remaining step; $R_{t+1} + \gamma V(S_{t+1})$ contains one random reward and one random transition.
- **Bias.** $V(S_{t+1})$ is wrong, especially early, so the target is wrong. The bias shrinks as the estimates improve.

## The formal version

**The update.**

$$V(S_t) \leftarrow V(S_t) + \alpha\underbrace{\big[\,\underbrace{R_{t+1} + \gamma V(S_{t+1})}_{\text{TD target}} - V(S_t)\,\big]}_{\text{TD error } \delta_t}$$

In words: nudge the current estimate toward the one-step lookahead. Compare Monte Carlo's $V(S_t) \leftarrow V(S_t) + \alpha[G_t - V(S_t)]$ — **the only change is the target.** *(card: [TD(0)](../reference.md#td0), [TD error](../reference.md#td-error))*

The quantity $\delta_t = R_{t+1} + \gamma V(S_{t+1}) - V(S_t)$ is the **TD error**: the amount by which the world surprised you. It is the single most reused object in the rest of the course — [Lesson 2.8](02-08-eligibility-traces-backward-view.md) distributes it backwards over a trace, and [Lesson 3.5](03-05-actor-critic-methods.md)'s actor–critic uses it directly as the signal that reinforces an action.

**The three backups, side by side.** The methods differ along exactly two axes — whether they sample, and whether they bootstrap:

| | bootstraps | samples | needs a model | needs episodes to end |
|---|---|---|---|---|
| **DP** ([1.5](01-05-policy-evaluation-and-policy-iteration.md)) | yes | no | **yes** | no |
| **MC** ([2.1](02-01-monte-carlo-prediction.md)) | no | yes | no | **yes** |
| **TD(0)** | yes | yes | no | no |

The fourth cell — neither sampling nor bootstrapping — is exhaustive search over the whole tree. **TD occupies the only corner with no disqualifying requirement**, which is why it is the workhorse.

**Convergence.** With a fixed policy, tabular representation, and step sizes satisfying $\sum_k \alpha_k = \infty$ and $\sum_k \alpha_k^2 < \infty$, TD(0) converges to $V^\pi$ with probability $1$. The reason is [Lesson 1.6](01-06-value-iteration-and-convergence.md)'s contraction plus noise: **the expected TD update is exactly one application of the policy-evaluation operator $T^\pi$**, since $\mathbb{E}[R_{t+1}+\gamma V(S_{t+1})\mid S_t=s] = (T^\pi V)(s)$. So TD(0) is a stochastic approximation of a contraction, and the step-size conditions ensure the noise averages out ($\sum\alpha^2 < \infty$) while there is still enough movement to reach the fixed point ($\sum\alpha = \infty$). A constant $\alpha$ does not satisfy the second condition, so it converges only to a neighbourhood — which is the right behaviour when the policy is changing.

**What TD and MC converge to on finite data.** This is the sharpest way to see the difference. Given a fixed batch of episodes, replayed until convergence:

- **Batch MC** converges to the estimate minimizing squared error on the observed returns.
- **Batch TD(0)** converges to the value function of the **maximum-likelihood MDP** implied by the data — count the transitions, treat those frequencies as the true dynamics, and solve exactly.

TD's answer is called the **certainty-equivalence** estimate. It exploits the Markov property; MC's does not. That is why TD usually wins on Markov problems and why MC is safer when the Markov assumption is doubtful.

## Picture

![Left: two backup diagrams. The TD(0) backup is a single state circle with one reward dot below it leading to one more state circle, annotated that it stops there and reuses the estimate, with a note that the next state's value is a guess. The Monte Carlo backup beside it is a long unbranched chain of four rewards and states running down to a square terminal state, annotated wait for the end. Right: a plot of root-mean-square error over the five states against episodes for a five-state random walk, showing two coral Monte Carlo curves that descend slowly and two blue TD curves that descend faster and settle lower](assets/02-03-fig1.svg)

The left panel is [Lesson 2.1](02-01-monte-carlo-prediction.md)'s figure with a single step taken out of it. The right panel is what that truncation is worth.

## Worked examples

**Example 1 (mechanical): TD and MC on the same episode.** A three-state episode with $\gamma = 1$, all values initialized to $0$, $\alpha = 0.5$:

$$C \xrightarrow{\ r=0\ } D \xrightarrow{\ r=0\ } E \xrightarrow{\ r=1\ } \text{terminal}$$

**Monte Carlo.** Every state's return is $1$, so after the episode $V(C) = V(D) = V(E) = 0 + 0.5(1-0) = 0.5$. All three move equally.

**TD(0)**, updating online as the episode runs:

| transition | target | update | result |
|---|---|---|---|
| $C \to D$, $r=0$ | $0 + V(D) = 0$ | $V(C) \leftarrow 0 + 0.5(0-0)$ | $V(C) = \mathbf{0}$ |
| $D \to E$, $r=0$ | $0 + V(E) = 0$ | $V(D) \leftarrow 0 + 0.5(0-0)$ | $V(D) = \mathbf{0}$ |
| $E \to$ term, $r=1$ | $1 + 0 = 1$ | $V(E) \leftarrow 0 + 0.5(1-0)$ | $V(E) = \mathbf{0.5}$ |

**Only $V(E)$ moved.** TD propagates information one step per episode: $E$ learns about the reward now, $D$ learns about $E$ next episode, $C$ the episode after. Monte Carlo credits all three immediately.

That looks like MC winning, and on this single episode it is — but MC credited $C$ with $1$ on the evidence of one trajectory, while TD refused to credit $C$ until it had a reason to believe $D$ was valuable. **MC is faster to propagate and quicker to be fooled**; over many episodes the difference reverses, which is the next example.

**Example 2 (why you'd care): the five-state random walk.** States $A,B,C,D,E$ in a row, starting at $C$, stepping left or right with probability $\tfrac12$. Exiting left gives reward $0$, exiting right gives $1$; $\gamma=1$. The true values are the probabilities of exiting right:

$$V^\pi = \left(\tfrac16,\ \tfrac26,\ \tfrac36,\ \tfrac46,\ \tfrac56\right) = (0.167,\ 0.333,\ 0.5,\ 0.667,\ 0.833).$$

Initialize everything to $0.5$ and run both methods with constant $\alpha$, averaging RMS error over $200$ independent runs:

| episodes | MC ($\alpha{=}0.02$) | MC ($\alpha{=}0.04$) | TD ($\alpha{=}0.05$) | TD ($\alpha{=}0.10$) |
|---|---|---|---|---|
| $10$ | $0.198$ | $0.182$ | $0.175$ | $0.128$ |
| $25$ | $0.157$ | $0.137$ | $0.110$ | $0.058$ |
| $50$ | $0.112$ | $0.110$ | $0.054$ | $0.052$ |
| $100$ | $0.088$ | $0.110$ | $\mathbf{0.037}$ | $0.058$ |

**TD's best setting reaches an error of $0.037$; MC's best manages $0.088$.** TD is not marginally better here, it is better by a factor of well over two, and it is ahead at every horizon.

Notice also that the larger step sizes ($\alpha = 0.10$ for TD, $0.04$ for MC) descend fastest early but then *rise* — a constant $\alpha$ does not satisfy the Robbins–Monro conditions, so the estimate keeps bouncing around the answer with a variance proportional to $\alpha$. **Fast early, floored later**: that trade is why practical implementations decay the step size, and why comparing methods at a single $\alpha$ is meaningless.

**Where the advantage comes from.** TD exploits the Markov property. When the walk reaches $D$ and then exits right, TD's update to $V(D)$ uses $V(E)$ — an estimate built from *every* episode that ever visited $E$, no matter how it got there. MC's update to $V(D)$ uses only what happened on this one trajectory. **TD is pooling information across episodes through the value function; MC treats each episode as a separate observation.**

## Watch out

- **You might think** updating a guess toward another guess must be circular — **but actually** the loop is broken at the terminal states, whose values are known to be zero exactly. Real information enters there and propagates backwards one step per episode, as Example 1 shows. Nothing is circular because one end of the chain is pinned.
- **You might think** TD is unbiased because the Bellman equation is an identity — **but actually** the identity holds for $V^\pi$, and TD substitutes the current *estimate* $V$. The target $R_{t+1} + \gamma V(S_{t+1})$ is unbiased for $T^\pi V$, not for $V^\pi$, so TD is biased whenever $V \ne V^\pi$. It is *consistent* — the bias vanishes as the estimates converge — but at any finite time the target is wrong, and this is exactly the bias that becomes fatal under function approximation in [Lesson 3.2](03-02-approximate-control-deadly-triad.md).
- **You might think** TD is always the better choice — **but actually** it relies on the state being Markov. On a partially observed problem, TD's bootstrapped target is built from a $V(S_{t+1})$ that averages over genuinely different situations, and the certainty-equivalence estimate it converges to is the value function of the wrong MDP. Monte Carlo, which never uses the Markov property, degrades more gracefully. This is the one clear advantage MC retains.

## One-liner

> Don't wait to find out how the episode ended — move your estimate toward the reward you just received plus what you already believe about where you landed.

## Problems

**P1 (🟢)** A single episode with $\gamma = 0.9$ and $\alpha = 0.1$, starting from $V(X) = 5$, $V(Y) = 2$:

$$X \xrightarrow{\ r=3\ } Y \xrightarrow{\ r=-1\ } \text{terminal}$$

(a) Compute the TD error $\delta$ for the first transition and the resulting $V(X)$.
(b) Compute the TD error for the second transition and the resulting $V(Y)$.
(c) Compute the Monte Carlo return $G$ from $X$ and the resulting $V(X)$ under an MC update from the same starting values.
(d) State which method produced the larger change to $V(X)$, and explain why in terms of what each target used.

**P2 (🟡)** Eight episodes are observed in a two-state MDP with $\gamma = 1$:

- one episode: $A \xrightarrow{0} B \xrightarrow{0}$ terminal
- six episodes: $B \xrightarrow{1}$ terminal
- one episode: $B \xrightarrow{0}$ terminal

(a) Compute $V(B)$ — both methods agree.
(b) Give the batch Monte Carlo estimate of $V(A)$, and say what it is minimizing.
(c) Give the batch TD(0) estimate of $V(A)$, and say what model it corresponds to.
(d) State which you would expect to predict better on *future* episodes, and why.

**P3 (🔴)** A process is **not** Markov in the states the agent sees: the observation $B$ is really two distinct underlying situations, $B_{\text{hot}}$ and $B_{\text{cold}}$, which the agent cannot tell apart. From $B_{\text{hot}}$ the terminal reward is always $1$; from $B_{\text{cold}}$ it is always $0$. State $A$ always leads to $B_{\text{cold}}$, while episodes that start at $B$ directly are $B_{\text{hot}}$ nine times out of ten.

(a) Compute the true $V(A)$.
(b) Compute what batch TD(0) converges to for $V(A)$, using data in which $A$ appears once and direct-$B$ starts appear many times.
(c) Compute what batch Monte Carlo converges to for $V(A)$.
(d) State which is correct, and what general principle about bootstrapping this illustrates.

<details>
<summary>Solutions</summary>

**P1**

(a) $\delta = R + \gamma V(Y) - V(X) = 3 + 0.9(2) - 5 = 3 + 1.8 - 5 = \mathbf{-0.2}$.

$$V(X) \leftarrow 5 + 0.1(-0.2) = \mathbf{4.98}.$$

(b) The next state is terminal, so its value is $0$: $\delta = -1 + 0.9(0) - 2 = \mathbf{-3}$.

$$V(Y) \leftarrow 2 + 0.1(-3) = \mathbf{1.7}.$$

(c) $G = 3 + 0.9(-1) = 3 - 0.9 = \mathbf{2.1}$, so

$$V(X) \leftarrow 5 + 0.1(2.1 - 5) = 5 + 0.1(-2.9) = \mathbf{4.71}.$$

(d) **Monte Carlo moved $V(X)$ much further** — by $0.29$ against TD's $0.02$.

The reason is what each target believed about the future after $Y$. TD used $\gamma V(Y) = 1.8$, its standing estimate of what $Y$ is worth, which happened to be optimistic; the target $4.8$ was therefore close to the current $V(X) = 5$ and the update was tiny. MC used what *actually happened* from $Y$ — a reward of $-1$ and then termination — so its target was $2.1$, far below $5$.

**TD's update is small because TD trusts its own estimate of $Y$; MC's is large because MC trusts the single trajectory.** Neither is right yet: $V(Y) = 2$ is badly wrong (this episode suggests $-1$), and TD will fix it on the *next* visit to $X$, after (b)'s update has pulled $V(Y)$ down to $1.7$.

**P2**

(a) $B$ appears as the starting point of $8$ transitions in total — six with reward $1$, one with reward $0$ (the eighth episode), and one with reward $0$ (the tail of the $A$ episode). So

$$V(B) = \frac{6}{8} = \mathbf{0.75}.$$

(b) $A$ occurs in exactly one episode, whose return was $0 + 0 = 0$. So batch MC gives $V(A) = \mathbf{0}$.

It is minimizing the squared error **on the observed returns**: with a single observation, the sample mean that minimizes $\sum(G - V(A))^2$ is that observation itself. MC's answer is the best possible fit to the training data, and it is exactly right about the data it saw.

(c) Batch TD converges to $V(A) = \mathbf{0.75}$.

The model it corresponds to is the **maximum-likelihood MDP** built by counting: $A$ was observed transitioning to $B$ once out of one time, so $\hat p(B\mid A) = 1$ with reward $0$; $B$ terminates with reward $1$ in six of eight observations, so $\hat r(B) = 0.75$. Solving that MDP exactly gives $V(A) = 0 + \hat p(B\mid A)V(B) = 0.75$.

(d) **TD's $0.75$ predicts better on future episodes.**

Every observation of $A$ says it leads to $B$. If $B$ is worth $0.75$ — and eight observations say it is — then $A$ must be worth $0.75$ too, because reaching $A$ means reaching $B$. MC's answer of $0$ throws away all six episodes that established $B$'s value, on the grounds that they did not begin at $A$.

**TD wins because it uses the Markov property to pool evidence across trajectories**, and the property genuinely holds here. MC's answer minimizes error on the training set and generalizes worse — which is the same overfitting/structure trade-off as [`machine-learning` 1.2](../../machine-learning/lessons/01-02-generalization-and-the-bias-variance-tradeoff.md)'s, with the Markov assumption playing the role of the inductive bias.

**P3**

(a) $A$ always leads to $B_{\text{cold}}$, from which the terminal reward is always $0$. So

$$V(A) = \mathbf{0}.$$

(b) Batch TD estimates $V(B)$ by pooling all visits to the observation $B$. Since direct-$B$ starts dominate the data and are $B_{\text{hot}}$ nine times in ten,

$$\hat V(B) \approx 0.9(1) + 0.1(0) = 0.9,$$

and since $A$ always transitions to $B$, batch TD gives $V(A) = 0 + \hat V(B) \approx \mathbf{0.9}$.

(c) Batch MC averages the returns *actually observed from $A$*. Every episode through $A$ goes to $B_{\text{cold}}$ and terminates with $0$, so every such return is $0$ and

$$V(A) = \mathbf{0}.$$

(d) **Monte Carlo is correct; TD is off by $0.9$ — the entire range of the value function.**

The principle: **bootstrapping is only as good as the state representation.** TD's target for $A$ is $R + \gamma V(S_{t+1})$, and it substitutes the *pooled* value of the observation $B$ — an average over two situations that behave completely differently. The Markov property is what licenses that substitution, and here it fails: knowing you are at $B$ does not determine the future, because the history (did you arrive via $A$?) still carries information.

Monte Carlo never makes that substitution. It uses the actual return along the actual trajectory, so the pooling never happens and the aliasing costs it nothing.

This is the precise sense in which [Lesson 2.1](02-01-monte-carlo-prediction.md)'s "MC does not need the Markov property" is a real advantage rather than a technicality, and it is the reason the repair in [Lesson 1.2](01-02-markov-decision-processes.md) — enlarge the state until it *is* Markov — is not optional housekeeping. Note also that the damage is proportional to how badly the aliased states differ: had $B_{\text{hot}}$ and $B_{\text{cold}}$ been nearly the same, TD's bias would have been small, which is why bootstrapping remains usable under mild partial observability.

</details>

## Flashback

**From Lesson 2.1 (Monte Carlo prediction):** Two episodes with $\gamma = 0.5$, written as (state, reward-on-leaving):

- Episode 1: $P \xrightarrow{+4} Q \xrightarrow{-2} P \xrightarrow{+6} T$
- Episode 2: $Q \xrightarrow{+8} Q \xrightarrow{0} T$

(a) Compute every return by the backward recursion.
(b) Give the first-visit estimates of $V(P)$ and $V(Q)$.
(c) Give the every-visit estimate of $V(Q)$.
(d) State which estimate of $V(Q)$ is unbiased and identify, in this specific data, the correlation that biases the other.

<details>
<summary>Solution</summary>

(a) Walk each episode backwards with $G \leftarrow R + 0.5\,G$.

*Episode 1.* Last $P$: $G = 6$. Then $Q$: $G = -2 + 0.5(6) = 1$. Then first $P$: $G = 4 + 0.5(1) = 4.5$.

*Episode 2.* Second $Q$: $G = 0$. Then first $Q$: $G = 8 + 0.5(0) = 8$.

| episode | visits in order | returns |
|---|---|---|
| 1 | $P,\ Q,\ P$ | $4.5,\ 1,\ 6$ |
| 2 | $Q,\ Q$ | $8,\ 0$ |

(b) First-visit $V(P)$: only episode 1 contains $P$, first visit gives $4.5$. So $V(P) = \mathbf{4.5}$.

First-visit $V(Q)$: episode 1 gives $1$, episode 2 gives $8$. So $V(Q) = \dfrac{1+8}{2} = \mathbf{4.5}$.

(c) Every-visit $V(Q)$: returns $1$, $8$, $0$, so $V(Q) = \dfrac{9}{3} = \mathbf{3}$.

(d) **First-visit is unbiased.** Each episode contributes exactly one sample, and the episodes are independent draws, so the sample mean has the right expectation.

The correlation that biases every-visit is visible in episode 2: the two returns from $Q$ are $8$ and $0$, and they are not independent — the first *contains* the second, since $8 = 8 + 0.5(0)$. Including both counts the second visit's outcome twice (once on its own and once inside the first return, discounted) and gives episode 2 two votes against episode 1's one. Here that drags the estimate down from $4.5$ to $3$, because the extra sample it admits is the low one.

**The disagreement is substantial — $4.5$ versus $3$ on identical data** — and it comes entirely from a single revisit in a single episode. With many episodes the two converge, since the reweighting averages out, but this is a good reminder that "consistent" says nothing about what happens at the sample sizes you actually have.

</details>

## Connections

- **Backward:** the TD target is [Lesson 1.3](01-03-value-functions-bellman-expectation.md)'s Bellman expectation equation with the expectation replaced by a single sample and $V^\pi$ replaced by the current estimate — so TD sits between [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md)'s full backup and [Lesson 2.1](02-01-monte-carlo-prediction.md)'s sampled return. Its convergence proof is [Lesson 1.6](01-06-value-iteration-and-convergence.md)'s contraction plus stochastic-approximation noise control.
- **Forward:** [Lesson 2.4](02-04-sarsa-on-policy-td-control.md) applies this update to $Q$ instead of $V$ and plugs it into the control loop; [Lesson 2.5](02-05-q-learning-off-policy-td-control.md) changes one symbol in the target and gets an off-policy method. [Lesson 2.7](02-07-n-step-returns-and-the-lambda-return.md) shows TD(0) and MC are the two ends of a continuum, and the TD error $\delta_t$ defined here is the quantity that [Lesson 2.8](02-08-eligibility-traces-backward-view.md) spreads over a trace and [Lesson 3.5](03-05-actor-critic-methods.md) uses as an actor's learning signal.
- **Sideways:** the update is a stochastic-approximation scheme of the Robbins–Monro type, the same algorithm family as the stochastic gradient descent of [`machine-learning` 1.6](../../machine-learning/lessons/01-06-gradient-descent-for-learning.md) — with the crucial difference that TD is *not* a gradient of any objective, a fact that becomes important in [Lesson 3.1](03-01-value-function-approximation.md) under the name "semi-gradient". The TD error is also the canonical model of dopamine signalling in the brain's reward system, one of the few places where an RL algorithm predicted a neuroscientific measurement.
