# Reinforcement Learning · Lesson 3.2: Control with approximation, and the deadly triad

> ⏱ ~15 min · Module 3: Function Approximation & Policy Gradients · Builds on: [3.1 (value-function approximation)](03-01-value-function-approximation.md), [2.6 (off-policy learning and importance sampling)](02-06-off-policy-learning-importance-sampling.md) · Unlocks: [4.1 (deep Q-networks)](04-01-deep-q-networks.md), [3.3 (the policy gradient theorem)](03-03-the-policy-gradient-theorem.md)

## Why this matters

Combining [Lesson 3.1](03-01-value-function-approximation.md)'s approximation with [Lesson 2.4](02-04-sarsa-on-policy-td-control.md)'s control is mechanical — swap $\hat V$ for $\hat q$ and you have semi-gradient SARSA, which is what most classical RL systems ran on.

The reason this lesson exists is the other combination. Take three ingredients that are each individually reasonable, each individually convergent, and each independently desirable for good reasons — **and put all three together, and the weights can diverge to infinity on a problem whose true value function is zero.** Not converge slowly, not converge to the wrong answer: diverge, exponentially, forever.

That is the **deadly triad**, and it is the single most important negative result in the subject. Every stabilizing trick in [Lesson 4.1](04-01-deep-q-networks.md) — target networks, replay buffers, gradient clipping — is an attempt to live with it, and knowing which leg is causing trouble is what turns "my agent diverged" from a mystery into a diagnosis.

## The idea

Control with approximation is the obvious substitution. Learn $\hat q(s,a;\mathbf{w})$ instead of a table, act $\varepsilon$-greedily with respect to it, and update with the semi-gradient rule.

Then the warning. Three properties:

1. **Function approximation** — a representation with fewer parameters than states, so updates generalize.
2. **Bootstrapping** — targets built from current estimates rather than complete returns.
3. **Off-policy training** — updating on a distribution of states different from the one the target policy would produce.

> Any two of these are safe. All three together can diverge.

Each is wanted for a real reason: approximation to scale, bootstrapping for variance and online learning, off-policy training to reuse data and learn about a policy you are not following. That is why the triad keeps reappearing — nobody includes all three by accident.

## The formal version

**Semi-gradient SARSA.** With $\hat q(s,a;\mathbf{w})$:

$$\mathbf{w} \leftarrow \mathbf{w} + \alpha\big[R_{t+1} + \gamma\,\hat q(S_{t+1},A_{t+1};\mathbf{w}) - \hat q(S_t,A_t;\mathbf{w})\big]\nabla_\mathbf{w}\hat q(S_t,A_t;\mathbf{w})$$

and act $\varepsilon$-greedily. For **linear** $\hat q$ this is well behaved: it converges to a bounded region around the TD fixed point, and it is the workhorse of pre-deep RL. Replacing $\hat q(S_{t+1},A_{t+1})$ with $\max_a \hat q(S_{t+1},a)$ gives semi-gradient Q-learning — and adds the third leg of the triad.

**Where the danger comes from.** Two facts from earlier lessons collide.

[Lesson 1.6](01-06-value-iteration-and-convergence.md): the Bellman operator $T^\pi$ is a $\gamma$-contraction in the max norm, which is why tabular TD converges.

[Lesson 3.1](03-01-value-function-approximation.md): an update does not set a value, it fits a function — so each step also applies a **projection** $\Pi$ onto the representable subspace, minimizing $\mu$-weighted error.

The algorithm therefore iterates $\Pi T^\pi$, not $T^\pi$. And:

- $T^\pi$ contracts in the **max norm**;
- $\Pi$ is a non-expansion in the **$\mu$-weighted norm** — but *not* in the max norm.

**The two operators are non-expansive in different norms, and their composition need not contract in either.** On-policy, the $\mu$ under which $\Pi$ is a non-expansion is the same $\mu$ that $T^\pi$ respects, the mismatch closes, and convergence is restored. Off-policy, the states are visited under $b$ while the values being backed up belong to $\pi$, the two norms genuinely differ, and $\Pi T^\pi$ can expand.

**Removing any one leg fixes it:**

| drop | what you get | why it is safe |
|---|---|---|
| function approximation | tabular methods | $\Pi$ is the identity, so only $T^\pi$ acts and it contracts |
| bootstrapping | gradient Monte Carlo | the target does not depend on $\mathbf{w}$, so it is honest SGD on a fixed objective |
| off-policy training | on-policy TD, SARSA | the projection's norm matches the distribution the updates are drawn from |

**Baird's counterexample.** Seven states, eight weights, **every reward zero**, so $V^\pi(s) = 0$ everywhere and $\mathbf{w} = \mathbf{0}$ represents the truth exactly. The features are deliberately overlapping — each upper state $i$ has $\hat V(i) = 2w_i + w_8$, and the lower state has $\hat V(7) = w_7 + 2w_8$ — so every update to a shared weight moves several states at once. The target policy always takes the *solid* action into state $7$; the behaviour policy mostly takes the *dashed* action, spreading visits over the upper states.

Running semi-gradient off-policy TD with $\gamma = 0.99$, $\alpha = 0.01$ from $\mathbf{w}_0 = (1,1,1,1,1,1,10,1)$:

| sweeps | largest $|\hat V(s)|$, off-policy | on-policy, for contrast |
|---|---|---|
| $0$ | $12.0$ | $12.0$ |
| $500$ | $163.1$ | $9.35$ |
| $1000$ | $676.9$ | $7.28$ |
| $2000$ | $8{,}065.7$ | $4.41$ |
| $3000$ | $\mathbf{88{,}844.5}$ | $\mathbf{2.68}$ |

**The true value is zero at every state.** The off-policy version's growth ratio over successive blocks of $200$ sweeps is $1.672,\ 1.631,\ 1.619,\ 1.615$ — essentially constant, so the divergence is *exponential*, not a slow drift. A smaller $\alpha$ slows it and does not stop it: the iteration matrix has an eigenvalue outside the unit circle, and step size only rescales time.

The on-policy column is the control: **same features, same bootstrapping, same $\alpha$ — only the distribution of updates changed**, and the weights head toward the truth.

**What actually fixes it.** Three practical responses, in increasing order of principle:

- *Engineering* — target networks and replay buffers ([Lesson 4.1](04-01-deep-q-networks.md)): make the target change slowly so the fixed point stops moving. Effective, not a proof.
- *Better objectives* — **gradient-TD** methods (GTD2, TDC) perform true stochastic gradient descent on a projected Bellman error, and converge under all three legs at the cost of a second set of weights.
- *Avoid the triad* — policy-gradient methods ([Lesson 3.3](03-03-the-policy-gradient-theorem.md)) optimize an objective directly and are on-policy by construction, which is a large part of why PPO ([Lesson 4.3](04-03-ppo-a-taste.md)) dominates in settings where stability matters more than sample efficiency.

## Picture

![Left: a coral triangle with a labelled dot at each vertex reading function approximation, bootstrapping, and off-policy training, with the words instability is possible in the centre and a note that each leg is individually harmless. Right: a semi-log plot of the largest estimated value against sweeps on a problem whose true value is zero everywhere, showing a coral off-policy curve rising from twelve to nearly one hundred thousand as a straight line on the log scale, and a blue on-policy curve settling downward toward zero](assets/03-02-fig1.svg)

A straight line on a log plot is exponential growth. Nothing about the problem is hard — seven states, zero rewards, and the correct answer sits inside the representable set.

## Worked examples

**Example 1 (mechanical): semi-gradient SARSA on a linear approximator.** Two features for each state–action pair, $\mathbf{x}(s,a)$, with $\hat q = \mathbf{w}^\top\mathbf{x}$. Take $\mathbf{w} = (2,\ -1)$, $\gamma = 0.9$, $\alpha = 0.1$, and a transition with

$$\mathbf{x}(S_t,A_t) = (1,\ 3), \qquad R_{t+1} = 1, \qquad \mathbf{x}(S_{t+1},A_{t+1}) = (1,\ 1).$$

$$\hat q(S_t,A_t) = 2 - 3 = -1, \qquad \hat q(S_{t+1},A_{t+1}) = 2 - 1 = 1$$
$$\delta = 1 + 0.9(1) - (-1) = \mathbf{2.9}$$
$$\mathbf{w} \leftarrow (2,-1) + 0.1(2.9)(1,3) = (2 + 0.29,\ -1 + 0.87) = \mathbf{(2.29,\ -0.13)}.$$

Recheck the two estimates: $\hat q(S_t,A_t) = 2.29 - 0.39 = 1.90$ and $\hat q(S_{t+1},A_{t+1}) = 2.29 - 0.13 = 2.16$. **The value of the next state moved too** — from $1$ to $2.16$ — even though nothing was observed about it. The target the update was aiming at, $1 + 0.9(1) = 1.9$, has now become $1 + 0.9(2.16) = 2.94$.

**The target moved because we chased it.** In the tabular case it would have stayed put. This is the mechanism of the triad in one step: with shared parameters, bootstrapping is chasing a target that the chase itself displaces, and whether that loop converges depends on whether the displacement is smaller than the progress.

**Example 2 (why you'd care): which leg do you drop?** Suppose your deep RL agent's values are exploding. All three legs are present — a network, TD targets, and a replay buffer. Each removal has a price:

| remove | how | cost |
|---|---|---|
| approximation | tabular | impossible at scale; this is why you had a network |
| bootstrapping | Monte Carlo returns | [Lesson 2.7](02-07-n-step-returns-and-the-lambda-return.md)'s table: three times the error on the random walk, plus no continuing tasks |
| off-policy | drop the replay buffer, learn on-policy | sample efficiency collapses — each transition is used once instead of many times |

**None of these is acceptable, which is exactly why the triad is a standing problem rather than a solved one.** What practice does instead is weaken the legs rather than remove them:

- *Weaken bootstrapping* — use $n$-step returns ([Lesson 2.7](02-07-n-step-returns-and-the-lambda-return.md)). Larger $n$ means less of the target comes from the estimate, and the contraction per update is $\gamma^n$ rather than $\gamma$, which damps the loop.
- *Weaken off-policyness* — keep the replay buffer small, or discard old transitions, so the data distribution stays close to the current policy's.
- *Weaken the coupling* — a target network holds the bootstrap values fixed for many steps, so the target stops moving while you chase it, which is precisely the failure Example 1 exhibited.

Each is a dial, not a switch, and tuning them is a large part of what makes deep RL finicky. **The honest summary: the triad is not solved, it is managed** — and knowing the three legs tells you which dial to reach for.

## Watch out

- **You might think** divergence means the step size is too large — **but actually** in Baird's counterexample any positive $\alpha$ diverges. The iteration matrix has an eigenvalue of modulus greater than one, so $\alpha$ changes the rate and not the direction. If halving the learning rate only postpones the blow-up, the problem is structural rather than numerical.
- **You might think** the triad is about nonlinear approximation, and a linear model is safe — **but actually** Baird's counterexample *is* linear. Nonlinearity makes matters worse and is not the cause; what matters is that the representation is shared across states while the update distribution does not match the policy being evaluated.
- **You might think** SARSA and Q-learning behave alike under approximation because they differ by one symbol — **but actually** that symbol is the third leg. Semi-gradient SARSA is on-policy and converges to a bounded region with a linear approximator; semi-gradient Q-learning is off-policy and has no such guarantee. This is the practical reason SARSA is sometimes preferred with function approximation despite converging to a worse policy.

## One-liner

> Function approximation, bootstrapping and off-policy updates are each safe alone and each desirable — and together they can drive the weights to infinity on a problem whose answer is zero.

## Problems

**P1 (🟢)** For each algorithm, state which of the three legs it has and whether it is at risk of divergence.

(a) Tabular Q-learning.
(b) Gradient Monte Carlo with a neural network, on-policy.
(c) Semi-gradient SARSA with a linear approximator, on-policy.
(d) DQN — a neural network, TD targets, and a replay buffer.

**P2 (🟡)** In Baird's counterexample the off-policy weights grow by a factor of about $1.62$ every $200$ sweeps.

(a) Compute the per-sweep growth factor.
(b) Starting from a largest value of $12$, compute the number of sweeps to exceed $10^6$.
(c) The step size is halved to $\alpha = 0.005$. State qualitatively what happens to your answer in (b) and whether the divergence stops.
(d) State what the on-policy column of the table establishes, and why it is the right control experiment.

**P3 (🔴)** Consider a two-state problem with a **single** weight: $\hat V(s_1) = w$ and $\hat V(s_2) = 2w$. The dynamics are deterministic: $s_1 \to s_2$ with reward $0$, and $s_2 \to s_2$ with reward $0$. Let $\gamma = 1$ — so the true values are $V(s_1) = V(s_2) = 0$.

(a) Write the semi-gradient TD update for $w$ following the transition $s_1 \to s_2$ only (an off-policy update distribution that visits $s_1$ exclusively).
(b) Determine the values of $\alpha$ for which $w$ converges to $0$, and the values for which it diverges.
(c) Now suppose the updates are drawn from the transition $s_2 \to s_2$ instead. Write that update and determine when it converges.
(d) Explain how (b) and (c) together illustrate the triad, and identify which leg the two cases differ in.

<details>
<summary>Solutions</summary>

**P1**

| | approximation | bootstrapping | off-policy | at risk? |
|---|---|---|---|---|
| (a) tabular Q-learning | no | yes | yes | **no** |
| (b) gradient MC, on-policy net | yes | no | no | **no** |
| (c) linear semi-gradient SARSA | yes | yes | no | **no** |
| (d) DQN | yes | yes | yes | **yes** |

(a) Two legs — Q-learning's $\max$ makes it off-policy and its target bootstraps — but the table means each state is updated independently, so $\Pi$ is the identity and the Bellman contraction applies directly.

(b) Two legs are absent: the target is the actual return, which does not depend on $\mathbf{w}$, so this is genuine stochastic gradient descent on a fixed objective and inherits [`machine-learning` 1.6](../../machine-learning/lessons/01-06-gradient-descent-for-learning.md)'s guarantees (a local optimum, given the network's non-convexity).

(c) On-policy, so the projection's weighting matches the update distribution; linear semi-gradient SARSA converges to a bounded region around the TD fixed point.

(d) **All three.** DQN is the triad assembled deliberately, which is exactly why it needs target networks and why it was considered unlikely to work before it did.

**P2**

(a) $1.62^{1/200} = e^{\ln(1.62)/200} = e^{0.4824/200} = e^{0.002412} = \mathbf{1.002415}$ per sweep — about a quarter of a percent.

(b) Solve $12 \times 1.002415^n > 10^6$:

$$n > \frac{\ln(10^6/12)}{\ln 1.002415} = \frac{\ln(83{,}333)}{0.002412} = \frac{11.331}{0.002412} \approx \mathbf{4700\ \text{sweeps}}.$$

A quarter of a percent per sweep sounds negligible and reaches a million in a few thousand steps. **That is the character of the failure: it looks fine, then it does not.**

(c) The blow-up is **postponed, roughly doubling** the number of sweeps to any given threshold — the per-sweep growth exponent is approximately proportional to $\alpha$ for small $\alpha$, so halving $\alpha$ roughly halves the growth rate and doubles the time.

**The divergence does not stop.** The update is a linear map $\mathbf{w} \leftarrow (I + \alpha A)\mathbf{w}$, and here $A$ has an eigenvalue with positive real part, so $I + \alpha A$ has an eigenvalue of modulus $> 1$ for *every* $\alpha > 0$. Shrinking $\alpha$ moves the eigenvalue closer to $1$ but never inside the unit circle.

(d) It establishes that **off-policyness alone is responsible.** The on-policy run uses the identical features (so identical approximation), the identical bootstrapped target, the identical $\gamma$, the identical $\alpha$ and the identical initial weights; the *only* difference is the distribution the updates are drawn from. One diverges to $88{,}845$ and the other settles toward $0$.

That is the right control because the triad is a claim about a *conjunction*, and the way to test a conjunction is to hold two members fixed and vary the third. Any difference in features or step size between the two runs would have left the conclusion open.

**P3**

(a) With $\hat V(s_1) = w$, $\hat V(s_2) = 2w$, reward $0$ and $\gamma = 1$, the TD error for $s_1 \to s_2$ is

$$\delta = 0 + \hat V(s_2) - \hat V(s_1) = 2w - w = w,$$

and $\nabla_w \hat V(s_1) = 1$, so

$$w \leftarrow w + \alpha\,\delta\cdot 1 = w + \alpha w = \boxed{(1+\alpha)w}.$$

(b) The map is multiplication by $(1+\alpha)$. Since $\alpha > 0$, we have $|1+\alpha| > 1$ always, so

$$w_n = (1+\alpha)^n w_0 \to \pm\infty \quad\text{for every } \alpha > 0 \text{ and } w_0 \ne 0.$$

**It diverges for every positive step size, and converges for none.** This is Baird's counterexample in one dimension, and it makes the mechanism transparent: the update raises $\hat V(s_1)$ toward $\hat V(s_2)$, but the shared weight raises $\hat V(s_2)$ by *twice* as much, so the target retreats faster than the estimate advances.

(c) For $s_2 \to s_2$ the TD error is $\delta = 0 + \hat V(s_2) - \hat V(s_2) = 0$... which is degenerate, so take the more informative variant where the reward is still $0$ but we write the update out with $\nabla_w\hat V(s_2) = 2$:

$$\delta = 0 + \gamma\hat V(s_2) - \hat V(s_2) = (\gamma - 1)(2w), \qquad w \leftarrow w + \alpha(\gamma-1)(2w)\cdot 2 = \big(1 + 4\alpha(\gamma-1)\big)w.$$

With $\gamma < 1$ the factor $1 + 4\alpha(\gamma-1)$ is less than $1$, and it exceeds $-1$ provided $\alpha < \dfrac{1}{2(1-\gamma)}$. So updating from $s_2$ **converges to $0$** for all sufficiently small $\alpha$ — and at $\gamma = 1$ exactly it neither grows nor shrinks, since $s_2$ is an absorbing state with zero reward and the update is vacuous.

(d) In (b) every update is drawn from $s_1$, a state whose *successor* $s_2$ carries twice the weight-sensitivity — so the projection pulls in a direction the Bellman backup does not, and the composition expands. In (c) the updates are drawn from the state being backed up, the two directions agree, and it contracts.

**The leg that differs is off-policy training — specifically, the distribution the updates are drawn from.** Both cases share the same approximator (one weight, two states, shared) and the same bootstrapped target. Only the state distribution changed, and it flipped the dynamics from divergence to convergence.

This is why "off-policy" in the triad means something broader than "behaviour policy differs from target policy": what matters is that **the distribution of states you update on differs from the distribution the target policy induces**, which is exactly the $\mu$-weighting that [Lesson 3.1](03-01-value-function-approximation.md)'s objective depends on.

</details>

## Flashback

**From Lesson 2.6 (Off-policy learning and importance sampling):** A behaviour policy $b$ is $\varepsilon$-greedy with $\varepsilon = 0.4$ over three actions; the target policy $\pi$ is the deterministic greedy one.

(a) Compute $b(\text{greedy}\mid s)$ and the per-step importance ratio when the greedy action is taken.
(b) Compute the probability that a $10$-step trajectory has a nonzero weight, and the weight in that case.
(c) Compute $\operatorname{Var}[\rho_{0:9}]$.
(d) State how this variance would change if $\pi$ were $\varepsilon$-greedy with $\varepsilon = 0.4$ as well, and why.

<details>
<summary>Solution</summary>

(a) $b(\text{greedy}\mid s) = 1 - \varepsilon + \varepsilon/|\mathcal{A}| = 1 - 0.4 + 0.4/3 = 0.6 + 0.1\overline{3} = \mathbf{0.7\overline{3}}$.

The ratio when the greedy action is taken is $\dfrac{1}{0.7\overline{3}} = \mathbf{1.3636}$, and it is $0$ for any other action, since $\pi$ is deterministic.

(b) $\mathbb{P}[\text{nonzero}] = (0.7\overline{3})^{10} = \mathbf{0.0450}$ — about four and a half percent. The weight in that case is

$$(1.3636)^{10} = \frac{1}{0.0450} \approx \mathbf{22.23}.$$

Their product is $1$, which is the unbiasedness.

(c) $\mathbb{E}[\rho^2] = (0.7\overline{3})^{10}\,(1.3636)^{20} = (1.3636)^{10} = 22.23$, so

$$\operatorname{Var}[\rho_{0:9}] = 22.23 - 1 = \mathbf{21.23}.$$

A standard deviation of about $4.6$ on a quantity whose mean is $1$ — after only ten steps.

(d) **The variance would collapse to zero.** If $\pi = b$ then every per-step ratio is exactly $1$, so $\rho_{0:9} = 1$ with probability $1$: there is no mismatch to correct, and no variance in correcting it.

The general principle is that the variance of the trajectory ratio grows with how far apart the two policies are, and it does so *multiplicatively* in the trajectory length. Note the direct link to this lesson: the triad's third leg is exactly this mismatch, and both the variance here and the instability there shrink as $\pi$ and $b$ are brought together. **That is why the practical fixes — small replay buffers, PPO's clipping, keeping the behaviour policy near the target — attack both problems with one move.**

</details>

## Connections

- **Backward:** the projection view combines [Lesson 3.1](03-01-value-function-approximation.md)'s $\mu$-weighted objective with [Lesson 1.6](01-06-value-iteration-and-convergence.md)'s max-norm contraction, and the mismatch between the two norms is the whole story. The off-policy leg is [Lesson 2.6](02-06-off-policy-learning-importance-sampling.md)'s behaviour/target split, and the bootstrapping leg is [Lesson 2.3](02-03-temporal-difference-learning-td0.md)'s.
- **Forward:** [Lesson 4.1](04-01-deep-q-networks.md) assembles all three legs on purpose and survives by freezing the target and shaping the data distribution; [Lesson 4.3](04-03-ppo-a-taste.md)'s clipping keeps the behaviour and target policies close, which is the same medicine applied to the policy side. [Lesson 3.3](03-03-the-policy-gradient-theorem.md) sidesteps the triad entirely by optimizing a genuine objective with a genuine gradient.
- **Sideways:** the failure is a fixed-point iteration whose map is not a contraction, which is [`numerical-analysis`](../../numerical-analysis/syllabus.md)'s standard diagnosis for a divergent iterative scheme — and the eigenvalue test in P2(c) is the same stability criterion used for numerical integrators in [`numerical-analysis`](../../numerical-analysis/syllabus.md), where a step size can likewise change the rate of an instability without curing it.
