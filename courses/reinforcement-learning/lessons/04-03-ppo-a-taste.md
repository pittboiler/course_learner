# Reinforcement Learning · Lesson 4.3: PPO — a taste

> ⏱ ~15 min · Module 4: Deep RL & Exploration · Builds on: [4.2 (A2C, A3C and advantage estimation)](04-02-a2c-a3c-advantage-estimation.md), [2.6 (off-policy learning and importance sampling)](02-06-off-policy-learning-importance-sampling.md) · Unlocks: [4.4 (bandits and principled exploration)](04-04-bandits-and-principled-exploration.md)

## Why this matters

[Lesson 4.2](04-02-a2c-a3c-advantage-estimation.md)'s A2C throws away every batch after one gradient step, because a policy gradient requires on-policy data and one step makes the data stale. That is brutally wasteful — and the obvious fix, taking several steps on the same batch, breaks the algorithm in a specific and severe way.

**A policy-gradient step that is too large is not merely slow to recover from; it can be unrecoverable.** In supervised learning a bad step is corrected by the next batch, drawn from the same fixed distribution. Here the policy *generates* its own data, so a step that collapses the policy into a bad region collapses the data too, and the agent may never see the experience that would tell it what went wrong. This is [Lesson 1.1](01-01-the-rl-problem.md)'s third difficulty — policy-dependent data — arriving as a training failure.

PPO's answer is one of the highest value-per-line ideas in the field: a clipped objective that lets you take many steps on one batch while making the objective stop rewarding you once you have moved far enough. It is the default algorithm for continuous control and the workhorse of RLHF for language models.

## The idea

To reuse a batch, you must evaluate a new policy $\pi_\theta$ on data collected by an old one $\pi_{\theta_{\text{old}}}$. [Lesson 2.6](02-06-off-policy-learning-importance-sampling.md) says how: reweight by the importance ratio

$$r_t(\theta) = \frac{\pi_\theta(A_t\mid S_t)}{\pi_{\theta_{\text{old}}}(A_t\mid S_t)}, \qquad L^{\text{IS}}(\theta) = \mathbb{E}\big[r_t(\theta)\,\hat A_t\big].$$

At $\theta = \theta_{\text{old}}$ the ratio is $1$ and the gradient of this is exactly the policy gradient. But [Lesson 2.6](02-06-off-policy-learning-importance-sampling.md) also says why this fails: the ratio's variance explodes as the policies separate, and — worse for optimization — $L^{\text{IS}}$ is *unbounded*. An optimizer handed it will happily drive $r_t$ to $50$ on a transition whose advantage was positive, because that is where the objective is largest. The advantage estimate was never accurate enough to justify a fiftyfold change.

> The estimate is only trustworthy near the policy that produced it. So build an objective that stops improving once you leave that neighbourhood.

TRPO did this with an explicit constraint — maximize $L^{\text{IS}}$ subject to $\text{KL}(\pi_{\text{old}}\,\|\,\pi_\theta) \le \delta$ — which works and requires second-order machinery. PPO achieves nearly the same effect by **clipping**, and needs nothing but a first-order optimizer.

## The formal version

**The clipped surrogate objective.**

$$L^{\text{CLIP}}(\theta) = \mathbb{E}_t\Big[\min\big(r_t(\theta)\hat A_t,\ \ \text{clip}\big(r_t(\theta),\,1-\epsilon,\,1+\epsilon\big)\hat A_t\big)\Big]$$

with $\epsilon$ typically $0.1$–$0.3$. *(card: [PPO clipped objective](../reference.md#ppo-clipped-objective))*

**Reading the two cases** is the whole lesson, and the $\min$ is what makes them work.

*Positive advantage* ($\hat A_t > 0$ — the action was better than expected, so raise its probability). The objective is $\hat A_t\min(r_t,\ 1+\epsilon)$: it rises with $r_t$ up to $1+\epsilon$ and is **flat thereafter**. Flat means zero gradient, so past $1+\epsilon$ the update simply stops pulling. There is nothing to gain from making a good action twenty times more likely on the evidence of one batch.

*Negative advantage* ($\hat A_t < 0$ — lower its probability). The objective is $\hat A_t\max(r_t,\ 1-\epsilon)$: flat at $(1-\epsilon)\hat A_t$ for $r_t \le 1-\epsilon$ and falling for larger $r_t$. Again the incentive to push further than $1-\epsilon$ is removed.

**Why the $\min$ rather than just clipping.** Clipping alone would also flatten the objective in the *wrong* direction — it would cap the penalty for a step that moved the ratio the wrong way. The $\min$ makes $L^{\text{CLIP}}$ a **pessimistic lower bound** on the unclipped objective: where moving helps it is capped, and where moving hurts the full penalty still applies. So the update is always free to undo a bad move and never rewarded for an extravagant good one.

**The algorithm.** Per iteration:

1. Run $N$ parallel actors for $T$ steps with $\pi_{\theta_{\text{old}}}$ ([Lesson 4.2](04-02-a2c-a3c-advantage-estimation.md)).
2. Compute advantages by GAE.
3. Optimize $L^{\text{CLIP}} - c_1(\text{value loss}) + c_2(\text{entropy})$ for **several epochs** of minibatch SGD on that batch.
4. Set $\theta_{\text{old}} \leftarrow \theta$ and repeat.

Step 3 is the whole gain: typically $3$–$10$ epochs instead of A2C's single step, so each transition does several times the work.

**Why it is called "proximal."** The optimization is kept *near* the old policy — not by a constraint, but by an objective that has nothing further to offer once you have gone far enough. It is a soft trust region enforced by flat gradients.

**What PPO is not.** It does not make the data genuinely on-policy, and it does not bound the KL divergence: nothing prevents a sequence of small clipped steps from accumulating into a large total move. Implementations therefore monitor the KL and stop early if it exceeds a threshold — **the safety net is in the training loop, not in the objective**, which is worth knowing before debugging a PPO run.

## Picture

![Two panels plotting the clipped objective against the importance ratio r with epsilon of 0.2. Left, for a positive advantage: the solid clipped curve rises linearly and then goes flat at r equal to 1.2, while the dashed unclipped product keeps rising; a shaded band marks the region between 0.8 and 1.2. Right, for a negative advantage: the solid curve is flat at minus 0.8 up to r equal to 0.8 and then falls linearly, tracking the dashed unclipped product downward. A note says that flat means zero gradient, so past the boundary the update simply stops pulling](assets/04-03-fig1.svg)

The dashed line is the temptation and the flat stretch is the refusal. Note the asymmetry in each panel: the curve is flat on the side that would over-reward the step and slanted on the side that would penalize it — that is the $\min$ doing its work.

## Worked examples

**Example 1 (mechanical): the objective at a range of ratios.** Take $\epsilon = 0.2$, so the trust region is $[0.8,\ 1.2]$.

| $r_t$ | $\hat A_t = +1$ | $\hat A_t = -1$ |
|---|---|---|
| $0.5$ | $0.50$ | $\mathbf{-0.80}$ (clipped) |
| $0.8$ | $0.80$ | $-0.80$ |
| $1.0$ | $1.00$ | $-1.00$ |
| $1.2$ | $1.20$ | $-1.20$ |
| $1.5$ | $\mathbf{1.20}$ (clipped) | $-1.50$ |
| $2.0$ | $\mathbf{1.20}$ (clipped) | $-2.00$ |

Read each column separately.

With $\hat A_t = +1$ the objective climbs to $1.20$ and stops. At $r_t = 2.0$ the unclipped objective would have been $2.00$; the clip gives $1.20$, so **the gradient there is zero and the optimizer has no reason to go on.**

With $\hat A_t = -1$ the objective is flat at $-0.80$ for every $r_t \le 0.8$ — no further gain from suppressing the action harder — but it keeps falling for $r_t > 0.8$, reaching $-2.00$ at $r_t = 2.0$. **The penalty for moving the wrong way is not capped**, which is exactly the asymmetry the $\min$ was for: if a previous epoch pushed a bad action's probability up, the objective still pulls hard to undo it.

**Example 2 (why you'd care): how many epochs, and what goes wrong.** The reason to clip is to reuse the batch. Suppose a batch of $2048$ transitions, minibatches of $64$, and $K$ epochs. The number of gradient steps per batch is $K \times 2048/64 = 32K$.

| $K$ | gradient steps per batch | what happens |
|---|---|---|
| $1$ | $32$ | essentially A2C — safe, wasteful |
| $4$ | $128$ | the usual setting: most of the gain, ratios stay near $1$ |
| $10$ | $320$ | ratios drift; many samples sit in the clipped region contributing nothing |
| $50$ | $1600$ | the policy is optimized against a stale batch; performance collapses |

The failure at large $K$ is instructive, because it is **not** the objective breaking. $L^{\text{CLIP}}$ keeps doing exactly what it promises — it declines to reward ratios beyond $1\pm\epsilon$. What fails is the **advantage estimates**: $\hat A_t$ was computed from a critic and a trajectory belonging to $\pi_{\theta_{\text{old}}}$, and after many epochs the policy has moved somewhere those numbers no longer describe. The clip limits how far each *sample* can push, and does nothing about the estimates being wrong.

A concrete symptom worth recognizing: as $K$ grows, the fraction of samples in the clipped region rises, and once most samples are clipped **most of the batch contributes zero gradient** — the effective batch size collapses and training stalls even though the loss looks well behaved. This is why implementations log the "clip fraction" and the KL divergence, and stop early when the KL exceeds a target.

**The right mental model: $\epsilon$ bounds the per-sample step, $K$ controls how much you squeeze one batch, and the KL check is the actual safety net.** All three are needed; none substitutes for the others.

## Watch out

- **You might think** clipping bounds the total change in the policy — **but actually** it bounds each *sample's* contribution to the objective, not the accumulated movement. Many small clipped steps across many minibatches and epochs can move the policy a long way, which is precisely why real implementations also monitor the KL divergence and terminate an iteration early. The clip is a brake on each push, not a fence around the policy.
- **You might think** a sample in the clipped region is being ignored, so a larger $\epsilon$ would use more data — **but actually** the clipped region is where the objective has decided the data no longer supports a bigger move. Raising $\epsilon$ does use more of the batch and pushes PPO back toward the unbounded importance-sampled objective it was designed to avoid, with the variance problem of [Lesson 2.6](02-06-off-policy-learning-importance-sampling.md) returning. The clip fraction is a diagnostic, not a quantity to minimize.
- **You might think** PPO is off-policy because it uses importance ratios — **but actually** it is *near*-on-policy: the ratio corrects for a policy that has moved a few gradient steps, not for a replay buffer holding transitions a million steps old. It cannot learn from arbitrary logged data the way [Lesson 4.1](04-01-deep-q-networks.md)'s DQN can, and it discards each batch after its few epochs. The ratio buys a handful of epochs, not genuine off-policy learning.

## One-liner

> Reuse the batch, but make the objective go flat once the policy has moved as far as one batch of advantage estimates can justify.

## Problems

**P1 (🟢)** With $\epsilon = 0.1$, compute $L^{\text{CLIP}}$ for each case.

(a) $r_t = 1.05$, $\hat A_t = 2$.
(b) $r_t = 1.4$, $\hat A_t = 2$.
(c) $r_t = 0.6$, $\hat A_t = -3$.
(d) $r_t = 1.3$, $\hat A_t = -3$.

**P2 (🟡)** A PPO run reports that $60\%$ of samples are in the clipped region after the fourth epoch of each batch.

(a) State what fraction of the batch is contributing a nonzero gradient in that epoch.
(b) State two distinct changes to the hyperparameters that would reduce the clip fraction, and what each costs.
(c) State why a clip fraction near zero in the *first* epoch would be expected, and what it would mean if it were not.
(d) The run's average KL divergence from $\pi_{\theta_\text{old}}$ is rising across epochs even though every sample is clipped at $1\pm\epsilon$. Explain how both can be true.

**P3 (🔴)** Consider a single state with two actions, $\pi_{\theta_\text{old}} = (0.5,\ 0.5)$, and an advantage estimate $\hat A = +1$ for $a_1$ (and $\hat A = -1$ for $a_2$). Take $\epsilon = 0.2$.

(a) Compute the largest $\pi_\theta(a_1)$ that is not clipped.
(b) Compute the smallest $\pi_\theta(a_2)$ that is not clipped, and check the two are consistent with probabilities summing to one.
(c) State what happens to the gradient contribution of the $a_1$ samples and the $a_2$ samples once $\pi_\theta(a_1)$ exceeds your answer to (a).
(d) Using (c), explain why PPO's effective step is governed by whichever constraint binds first, and what that implies for a policy over many actions.

<details>
<summary>Solutions</summary>

**P1**

The trust region is $[0.9,\ 1.1]$.

(a) $r_t = 1.05$ is **inside** the region, so clipping does nothing:

$$L = \min\big(1.05(2),\ 1.05(2)\big) = \mathbf{2.10}.$$

(b) $r_t = 1.4$ clips to $1.1$. With $\hat A > 0$, $L = \hat A\min(r_t, 1+\epsilon)$:

$$L = \min\big(1.4(2),\ 1.1(2)\big) = \min(2.8,\ 2.2) = \mathbf{2.20}.$$

The gradient here is **zero** — increasing $r_t$ further changes nothing.

(c) $r_t = 0.6$ clips to $0.9$. With $\hat A < 0$ the products are $0.6(-3) = -1.8$ and $0.9(-3) = -2.7$, and the $\min$ takes the smaller:

$$L = \min(-1.8,\ -2.7) = \mathbf{-2.70}.$$

Gradient **zero** — the action has already been suppressed as far as this batch justifies.

(d) $r_t = 1.3$ clips to $1.1$. The products are $1.3(-3) = -3.9$ and $1.1(-3) = -3.3$:

$$L = \min(-3.9,\ -3.3) = \mathbf{-3.90}.$$

Here the **unclipped** value is selected, and the gradient is nonzero and large — the policy has moved a bad action's probability *up* by $30\%$, and the objective pulls hard to reverse it. This is the asymmetry the $\min$ creates: no cap on undoing a mistake.

**P2**

(a) **$40\%$.** The clipped samples sit on the flat part of the objective, where the derivative with respect to $\theta$ is exactly zero, so they contribute nothing to the gradient.

Effectively the batch size for that epoch has been cut to $40\%$ of nominal — worth knowing, because the gradient noise is correspondingly larger than the reported batch size suggests.

(b) *Accept criterion: any two changes that reduce how far the ratio drifts, each with its stated cost.*

**Fewer epochs per batch.** Less optimization on each batch means the policy moves less from $\theta_\text{old}$, so fewer ratios leave the region. Cost: less learning extracted per environment step — back toward A2C's wastefulness.

**A smaller learning rate.** Smaller steps, less drift. Cost: slower progress per gradient step, so more wall-clock time for the same improvement.

(A third: raise $\epsilon$. This reduces the clip fraction by definition but does not reduce the *drift* — it merely permits it, which is the "Watch out" point. It is not a fix.)

(c) In the first epoch $\theta$ is still very close to $\theta_\text{old}$ — at the very first minibatch they are identical, so every $r_t = 1$ exactly and nothing is clipped. The clip fraction should therefore start near zero and grow across epochs.

If it were **not** near zero in the first epoch, something is wrong with the implementation: either $\theta_\text{old}$ was not snapshotted correctly before the epoch began, or the learning rate is so large that a single minibatch moves the policy out of the trust region. Both are bugs rather than tuning issues, and the clip fraction is the cheapest way to detect them.

(d) Because clipping constrains the **objective**, not the **policy**.

The clip guarantees only that a sample whose ratio has left $[1-\epsilon,1+\epsilon]$ stops contributing gradient. It does not stop *other* samples — those still inside the region — from continuing to push $\theta$, and it does not stop a state's action probabilities from having already moved a long way. Across many minibatches and several epochs, the accumulated movement can be substantial while every individual ratio sits at its boundary.

There is also a subtler route: the ratio is computed per *sampled action*, so a state whose sampled action's ratio is pinned at $1+\epsilon$ may still have the probability of its *other* actions changing freely, and KL is a sum over all actions.

**This is exactly why the KL is monitored separately and why implementations stop an iteration early when it exceeds a target.** The objective's flatness is a per-sample brake; the KL check is the only thing watching the total.

**P3**

(a) $r(a_1) = \pi_\theta(a_1)/0.5$, so clipping begins at $r = 1+\epsilon = 1.2$:

$$\pi_\theta(a_1) = 1.2 \times 0.5 = \mathbf{0.60}.$$

(b) For $a_2$ the advantage is negative, so the relevant boundary is $r = 1-\epsilon = 0.8$:

$$\pi_\theta(a_2) = 0.8\times0.5 = \mathbf{0.40}.$$

Consistent: $0.60 + 0.40 = 1$ ✓. **The two constraints bind simultaneously**, which is a special feature of a two-action policy — raising $a_1$ to $0.6$ *forces* $a_2$ to $0.4$, so neither can be violated without the other.

(c) Once $\pi_\theta(a_1)$ exceeds $0.60$, **both** groups stop contributing.

The $a_1$ samples have $r > 1.2$ with $\hat A > 0$, so they sit on the flat part and their gradient is zero. The $a_2$ samples then necessarily have $\pi_\theta(a_2) < 0.40$, i.e. $r < 0.8$ with $\hat A < 0$ — also the flat part, also zero gradient.

So the entire batch contributes nothing, and the policy stops moving at $(0.6,\ 0.4)$ no matter how many further epochs are run. **PPO has enforced a hard step limit on this state.**

(d) With two actions the two constraints coincide. With **many** actions they do not: raising $\pi_\theta(a_1)$ takes probability from all the others in proportion ([Lesson 3.4](03-04-reinforce.md)'s softmax redistribution), so each other action's ratio falls at its own rate, and whichever hits its boundary first stops contributing while the rest carry on.

Two consequences. First, **the effective step size per state is set by the fastest-moving ratio**, not by the average — so a state with one very low-probability action can be throttled early, since a small absolute change in that action's probability is a large *relative* change and therefore a large ratio move. Second, the throttle is uneven across the action set: the update keeps reshaping the tail of the distribution after the head has been pinned.

This is the practical reason PPO interacts badly with very peaked policies, and part of why the entropy bonus of [Lesson 4.2](04-02-a2c-a3c-advantage-estimation.md) matters: keeping the policy from collapsing keeps the ratios well conditioned, so the clip constrains the step rather than freezing it.

</details>

## Flashback

**From Lesson 4.2 (A2C, A3C and advantage estimation):** A four-step segment with $\gamma = 1$, $\lambda = 0.5$, and TD errors $\delta_0 = 3$, $\delta_1 = 1$, $\delta_2 = -2$, $\delta_3 = 4$, terminating after step $3$.

(a) Compute $\hat A_3$ through $\hat A_0$ by the backward recursion.
(b) Verify $\hat A_0$ with the forward sum.
(c) Compute $\hat A_0$ at $\lambda = 0$ and $\lambda = 1$.
(d) State which value you would trust more if the critic had been trained for a long time on plentiful data, and why.

<details>
<summary>Solution</summary>

(a) With $\gamma\lambda = 0.5$ and $\hat A_4 = 0$:

| $t$ | computation | $\hat A_t$ |
|---|---|---|
| $3$ | $4 + 0.5(0)$ | $\mathbf{4}$ |
| $2$ | $-2 + 0.5(4)$ | $\mathbf{0}$ |
| $1$ | $1 + 0.5(0)$ | $\mathbf{1}$ |
| $0$ | $3 + 0.5(1)$ | $\mathbf{3.5}$ |

(b) $\sum_l(0.5)^l\delta_l = 3 + 0.5(1) + 0.25(-2) + 0.125(4) = 3 + 0.5 - 0.5 + 0.5 = \mathbf{3.5}$ ✓

(c) At $\lambda = 0$: $\hat A_0 = \delta_0 = \mathbf{3}$.

At $\lambda = 1$ (with $\gamma = 1$): $\hat A_0 = 3 + 1 - 2 + 4 = \mathbf{6}$.

(d) **The $\lambda = 0$ value of $3$**, and by extension small $\lambda$ generally.

A well-trained critic on plentiful data has small error, so the bias it injects into a short-lookahead estimate is small — while the variance it *saves* is large, because every additional $\delta$ in the sum brings the randomness of another reward and another transition. The $\lambda = 1$ estimate of $6$ uses four noisy surprises; the $\lambda = 0$ estimate of $3$ uses one and trusts the critic for the rest.

The spread between $3$ and $6$ on the same four steps is itself the evidence: these are estimates of one number, and they disagree by a factor of two, which is the variance the longer lookahead is admitting.

The rule generalizes to the opposite case as well. Early in training, or on a task where the critic is struggling, a large $\lambda$ is the safer choice — real rewards are noisy but honest, whereas a bad critic is confidently wrong, and bias does not average away.

</details>

## Connections

- **Backward:** the ratio $r_t(\theta)$ is [Lesson 2.6](02-06-off-policy-learning-importance-sampling.md)'s importance-sampling ratio for a single step, and the clip is a direct response to the variance explosion diagnosed there. Everything around the objective — parallel actors, GAE advantages, shared actor–critic, entropy bonus — is [Lesson 4.2](04-02-a2c-a3c-advantage-estimation.md)'s, unchanged.
- **Forward:** [Lesson 4.4](04-04-bandits-and-principled-exploration.md) turns to the exploration that PPO handles only implicitly through its entropy term, and asks what optimal exploration would look like. PPO is also the algorithm underneath the reinforcement-learning-from-human-feedback stage described in [`deep-learning` 4.5](../../deep-learning/lessons/04-05-llms-self-supervision-and-scaling-laws.md), where the "environment" is a learned reward model over text.
- **Sideways:** the trust-region idea — optimize a surrogate that is only trusted locally, and limit how far you move per step — is the same principle as trust-region and line-search methods in [`numerical-analysis`](../../numerical-analysis/syllabus.md) and [`convex-optimization` 4.2](../../convex-optimization/lessons/04-02-newtons-method.md), where a quadratic model of the objective is trusted only within a radius that shrinks when the model turns out to have been wrong.
