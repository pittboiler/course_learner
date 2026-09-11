# Deep Learning · Lesson 1.4: SGD, mini-batches & momentum

> ⏱ ~15 min · Module 1: Neural nets, backpropagation & training · Builds on: [1.3 (backpropagation and automatic differentiation)](01-03-backpropagation-and-automatic-differentiation.md), [`machine-learning` 1.6 (gradient descent for learning)](../../machine-learning/lessons/01-06-gradient-descent-for-learning.md) · Unlocks: [1.5 (adaptive optimizers, schedules & initialization)](01-05-adaptive-optimizers-schedules-and-initialization.md)

## Why this matters

You have the gradients ([1.3](01-03-backpropagation-and-automatic-differentiation.md)). Descending them is the subject of [`machine-learning` 1.6](../../machine-learning/lessons/01-06-gradient-descent-for-learning.md) and, with convergence rates, of [`convex-optimization` 4.1](../../convex-optimization/lessons/04-01-first-order-methods.md). Neither is repeated here.

Two things change when the objective is a deep network, and both change the practice.

**The gradient is estimated, not computed.** A full-dataset gradient over a million examples costs a million forward-backward passes per step. Nobody pays that. Every step uses a small random sample, so the gradient is a noisy estimate — and the noise turns out to be a feature, not merely a cost.

**The landscape is not convex.** Everything [`convex-optimization`](../../convex-optimization/syllabus.md) guarantees — local minimum equals global minimum, clean rates — is unavailable. What replaces it is a set of empirical facts and one useful piece of high-dimensional geometry: in a million dimensions, the things that stall you are overwhelmingly **saddle points**, not local minima.

## The idea

**Mini-batching.** Split the sum. The true gradient is an average over $N$ examples; a mini-batch of $B$ examples gives an average over $B$ of them, drawn at random. That estimate is **unbiased** — its expectation is the true gradient — and its standard deviation falls as $1/\sqrt{B}$.

So batch size is a knob on a trade. Small batches give cheap, noisy steps; large batches give expensive, accurate ones. And because the cost is linear in $B$ while the noise reduction is only $\sqrt{B}$, **small batches are more efficient per unit of compute** — going from 32 to 512 costs sixteen times more per step and buys only a fourfold noise reduction.

The noise also does something useful. A noisy gradient does not settle into a sharp, narrow minimum; it gets kicked out. It settles in wide, flat ones, and flat minima empirically generalize better. **SGD's noise is a regularizer you get for free**, which is part of why very large batches often need extra regularization to match small-batch results.

**Momentum.** Picture a long, narrow valley: steep across, nearly flat along. Gradient descent must use a step small enough to be stable across the steep direction, and that same small step makes the flat direction crawl. So it zigzags — bouncing between the walls while creeping toward the minimum.

Momentum fixes this by averaging. Keep a running velocity, add each gradient to it, and step along the velocity. In the steep direction consecutive gradients alternate sign and largely cancel. In the flat direction they all point the same way and **accumulate**, reaching an effective step of $\eta/(1-\beta)$ — ten times the plain step at $\beta = 0.9$.

The formal payoff is a change of exponent. On a quadratic with condition number $\kappa$, gradient descent's error contracts by about $\frac{\kappa-1}{\kappa+1}$ per step and momentum's by $\frac{\sqrt{\kappa}-1}{\sqrt{\kappa}+1}$. **The square root is the whole gain**, and at $\kappa = 1000$ it is a factor of thirty in iterations.

## The formal version

> **The objective.** With per-example loss $\ell$ and parameters $\theta$,
> $$L(\theta) = \frac{1}{N}\sum_{i=1}^{N} \ell(f_\theta(x_i), y_i).$$

> **Mini-batch gradient.** For a batch $\mathcal{B}$ of size $B$ drawn uniformly,
> $$g_{\mathcal B}(\theta) = \frac{1}{B}\sum_{i \in \mathcal B} \nabla_\theta \ell_i, \qquad \mathbb{E}[g_{\mathcal B}] = \nabla L(\theta), \qquad \operatorname{Var}[g_{\mathcal B}] = \frac{\sigma^{2}}{B},$$
> where $\sigma^{2}$ is the per-example gradient variance.

In words: **unbiased, with standard deviation $\sigma/\sqrt{B}$.** The unbiasedness is what makes SGD converge at all; the $1/\sqrt{B}$ is what makes batch size a diminishing return.

> **SGD.** $\theta_{t+1} = \theta_t - \eta\, g_{\mathcal B}(\theta_t)$.

> **Momentum (heavy ball).**
> $$v_{t+1} = \beta v_t + g_{\mathcal B}(\theta_t), \qquad \theta_{t+1} = \theta_t - \eta\, v_{t+1}.$$

> **Effective step.** If the gradient is constant at $g$, the velocity converges to a geometric sum:
> $$v_\infty = g\sum_{k=0}^{\infty}\beta^{k} = \frac{g}{1-\beta},$$
> so the asymptotic step is $\dfrac{\eta}{1-\beta}\,g$.

| $\beta$ | $1/(1-\beta)$ |
|---|---|
| 0.9 | 10 |
| 0.95 | 20 |
| 0.99 | 100 |

**This is why you must lower $\eta$ when you raise $\beta$.** Switching from $\beta = 0.9$ to $\beta = 0.99$ without touching $\eta$ multiplies the effective step by ten, and the usual symptom is a loss that goes to infinity in a few steps.

> **Nesterov momentum** evaluates the gradient *after* the momentum step, at $\theta_t - \eta\beta v_t$, which lets it correct an overshoot one step earlier. Slightly better in theory and in practice; same cost.

> **Convergence on a quadratic.** With curvature eigenvalues in $[\mu, \Lambda]$ and $\kappa = \Lambda/\mu$, the optimal contraction factor per step is
> $$\text{GD: } \frac{\kappa-1}{\kappa+1}, \qquad \text{momentum: } \frac{\sqrt{\kappa}-1}{\sqrt{\kappa}+1}.$$

| $\kappa$ | GD factor | steps for $10^{-3}$ | momentum factor | steps | speedup |
|---|---|---|---|---|---|
| 10 | 0.818 | 34 | 0.520 | 10 | 3.3 |
| 100 | 0.980 | 345 | 0.818 | 34 | 10 |
| 1000 | 0.998 | 3,453 | 0.939 | 109 | 32 |

The stability limit is $\eta < 2/\Lambda$ for gradient descent: exceed it and the steep direction diverges, which is the single most common cause of a loss that becomes `NaN` on the first few steps.

> **Saddle points.** At a critical point the Hessian's eigenvalue signs decide the type: all positive is a minimum, all negative a maximum, mixed a saddle. In $d$ dimensions, a critical point of a generic high-dimensional landscape has all $d$ signs agreeing only by an enormous coincidence.

The consequence for practice: **local minima are not the problem people once feared**. What slows training is long stretches near saddles, where the gradient is small but an escape direction exists. Momentum and gradient noise both help escape; this is one of the clearest places where SGD's noise earns its keep.

> **Linear scaling rule.** When multiplying the batch size by $k$, multiply the learning rate by $k$ as well, with a warmup over the first few epochs.

The heuristic follows from matching the total movement per epoch: $k$ times fewer steps, each $k$ times larger. It holds over a useful range and breaks at very large batches, where training degrades regardless — the regime where the noise regularizer has been removed.

## Picture

![A contour plot of an elongated quadratic bowl, with ellipses stretched horizontally around a central minimum. Two trajectories start at the far left. The plain gradient descent path, in coral, zigzags sharply up and down across the narrow vertical axis while creeping slowly to the right, and after eighteen steps is still well short of the centre. The momentum path, in blue, oscillates far less and reaches the minimum within the same eighteen steps. Captions note that both use the same learning rate and that the effective step along a consistent direction is the learning rate divided by one minus beta.](assets/01-04-fig1.svg)

Both paths use the **same** learning rate and the same number of steps. The coral path's step size is not a bad choice — it is the largest stable choice, capped by the steep vertical axis — and that cap is precisely what makes the horizontal progress so slow.

Momentum does not raise the learning rate. It **reuses** past gradients, so the vertical components, which alternate sign, partially cancel in the velocity, while the horizontal components, which agree, add up. The blue path is what "$\eta/(1-\beta)$ along a consistent direction" looks like.

## Worked examples

**Example 1 — pricing a batch size.**

A dataset has $N = 10^{6}$ examples and a per-example gradient standard deviation $\sigma$.

| $B$ | steps per epoch | gradient noise | cost per step |
|---|---|---|---|
| 32 | 31,250 | $\sigma/5.7$ | 1 |
| 256 | 3,906 | $\sigma/16$ | 8 |
| 512 | 1,953 | $\sigma/22.6$ | 16 |

Going from 32 to 512 costs **16 times** more compute per step and reduces noise by only $\sqrt{16} = 4$ times. Per unit of compute, the small batch extracts more progress, which is the basic argument for mini-batching over full-batch descent.

So why use large batches at all? **Hardware.** A batch of 32 leaves an accelerator idle; a batch of 512 saturates its matrix units, so the 16 times more arithmetic may take only 3 or 4 times longer in wall-clock. The right question is never "which batch size is most statistically efficient" but "which gives the most progress per second on this machine", and the answer is usually the largest batch that still trains well.

And there is a ceiling. Push $B$ high enough and the noise regularizer disappears; models trained at very large batch sizes generalize worse unless the learning rate, the schedule and the regularization are all retuned. **Batch size is a modelling hyperparameter wearing a systems costume.**

**Example 2 — how much momentum is worth, in steps.**

Take a quadratic with $\kappa = 100$, a realistic figure for a poorly conditioned layer.

*Gradient descent.* Contraction $\frac{99}{101} = 0.9802$ per step. To reduce the error by $10^{3}$:

$$n = \frac{\ln 10^{-3}}{\ln 0.9802} = \frac{-6.908}{-0.02} \approx 345 \text{ steps}.$$

*Momentum.* Contraction $\frac{\sqrt{100}-1}{\sqrt{100}+1} = \frac{9}{11} = 0.8182$:

$$n = \frac{-6.908}{\ln 0.8182} = \frac{-6.908}{-0.2007} \approx 34 \text{ steps}.$$

**Ten times fewer steps, at identical cost per step** — momentum stores one extra vector and adds two vector operations, which is negligible next to a forward and backward pass.

At $\kappa = 1000$ the ratio is 32. The speedup grows as $\sqrt{\kappa}$, so the worse-conditioned your problem, the more momentum is worth — and deep networks are badly conditioned, which is why essentially no one trains without it.

A caution on reading these numbers: they are for a *quadratic*, which a neural network is not. They are the right intuition for the local behaviour near a minimum and for why the zigzag happens, and they are not a prediction of how many steps your model needs.

## Watch out

- You might think a noisy gradient is purely a cost to be minimised. The noise is doing regularization work: it prevents settling into sharp minima, and removing it by going to very large batches typically *hurts* test accuracy unless you compensate elsewhere.
- You might think training gets stuck in local minima. In high dimensions the overwhelmingly common critical points are saddles, and the observed symptom — a loss plateau that eventually breaks — is what escaping a saddle looks like. Diagnosing a plateau as a local minimum leads to the wrong fix.
- You might think $\beta$ and $\eta$ are independent knobs. They are not: the effective step is $\eta/(1-\beta)$, so raising $\beta$ from 0.9 to 0.99 multiplies the step by ten. Change one and retune the other.

## One-liner

> Estimate the gradient on a small random batch, and average your estimates over time with momentum: the noise regularizes, and the averaging turns a condition number into its square root.

## Problems

**P1 (🟢)** A model trains with $B = 64$, giving a mini-batch gradient with standard deviation $s$. (a) Give the batch size that halves that standard deviation. (b) Give the cost multiplier per step for the change. (c) State in one sentence why teams make this trade anyway.

**P2 (🟡)** Training diverges to `NaN` within ten steps. The configuration is $\eta = 0.1$, $\beta = 0.99$, and the largest curvature eigenvalue is estimated at $\Lambda = 40$. (a) Compute the effective step and compare it to the stability limit $2/\Lambda$. (b) Give two separate single-parameter fixes, each with a specific value, and state which you would try first. (c) State what would have happened with $\beta = 0$ and the same $\eta$.

**P3 (🔴, optional)** A team trains at $B = 256$ with $\eta = 0.1$ and moves to $B = 4096$ on new hardware. (a) Apply the linear scaling rule: give the new learning rate and say why a warmup is needed. (b) Test accuracy drops by 2 points despite the training loss reaching the same value. Name the mechanism and explain why it is *not* an optimization failure. (c) Give three changes that could recover the accuracy, and say what each replaces.

<details>
<summary>Solutions</summary>

**P1** (a) Noise scales as $1/\sqrt{B}$, so halving it requires quadrupling the batch:

$$\frac{1}{\sqrt{B'}} = \frac12 \cdot \frac{1}{\sqrt{64}} \implies \sqrt{B'} = 2\sqrt{64} = 16 \implies B' = 256.$$

(b) Cost per step is linear in $B$, so $256/64 = \mathbf{4}$ times more compute per step, for a factor of 2 in noise. This is the diminishing return: **noise halves while cost quadruples.**

(c) Because accelerators are throughput devices, not latency devices: a batch of 64 may leave most of the matrix units idle, so the fourfold arithmetic can cost far less than fourfold in wall-clock, and the larger batch gives more progress per second even though it gives less progress per FLOP.

**P2** (a) The effective step along a consistent direction is

$$\frac{\eta}{1-\beta} = \frac{0.1}{0.01} = 10.$$

The stability limit for the steepest direction is

$$\frac{2}{\Lambda} = \frac{2}{40} = 0.05.$$

The effective step exceeds the limit by a factor of **200**. Divergence is not a surprise; it is arithmetic. Each step in the steep direction multiplies the error by roughly $|1 - 10 \times 40| \approx 399$, so ten steps amplify it by about $10^{26}$ — comfortably into `NaN`.

(b) Two single-parameter fixes:

- **Lower $\eta$** to at most $0.05 \times (1-\beta) = 0.05 \times 0.01 = 5 \times 10^{-4}$, and in practice a factor of a few below that, say $\eta = 10^{-4}$.
- **Lower $\beta$** to $0.5$, which makes the effective step $0.1/0.5 = 0.2$ — still four times the limit, so $\beta$ alone is not enough here; you would need $\beta = 0$ and $\eta \le 0.05$.

**Try lowering $\eta$ first.** It is the parameter with the larger safety margin to recover, it does not change the optimizer's character, and $\beta = 0.9$ to $0.99$ is a range people deliberately want for the averaging. The general rule: **the learning rate is the knob you retune, and momentum is the knob you set once.**

(c) With $\beta = 0$ and $\eta = 0.1$, the effective step is $0.1$, against a limit of $0.05$. Still unstable — by a factor of 2 rather than 200 — so it would also diverge, but slowly: the error would multiply by $|1 - 0.1 \times 40| = 3$ per step rather than 399, so the loss would climb visibly over tens of steps rather than becoming `NaN` immediately. **The slow climb is the more dangerous failure**, because it looks like a bad model rather than a broken configuration.

**P3** (a) The batch grows by $4096/256 = 16$, so the linear scaling rule gives

$$\eta' = 16 \times 0.1 = 1.6.$$

A **warmup** — ramping $\eta$ from near zero to 1.6 over the first few epochs — is needed because the rule matches the *average* movement per epoch and says nothing about the first steps, where the parameters are at their initialization, the loss surface is at its most curved, and a step of 1.6 is wildly outside the stable region. Early training is exactly when the stability limit $2/\Lambda$ is smallest; warmup buys time for $\Lambda$ to fall.

(b) The mechanism is the **loss of gradient noise**. At $B = 4096$ the mini-batch gradient's standard deviation is four times smaller than at $B=256$, so SGD behaves much more like deterministic gradient descent: it converges into whichever minimum is nearest rather than being shaken out of sharp ones, and sharp minima generalize worse.

It is not an optimization failure precisely because **the training loss reached the same value** — the optimizer did its job and found an equally good fit. What changed is *which* solution it found, among many that fit the training data equally well. That is a statement about implicit regularization, not about convergence, and it is the same phenomenon [`statistical-learning` 5.5](../../statistical-learning/lessons/05-05-why-does-deep-learning-generalize.md) studies under the name implicit bias: with far more parameters than constraints, the algorithm chooses the solution, and changing the algorithm changes the choice.

(c) Three recoveries, each replacing the lost noise with something else:

- **Explicit regularization** — raise weight decay, add or strengthen dropout, increase data augmentation ([1.7](01-07-regularization.md)). This substitutes a deliberate bias for the accidental one.
- **A longer warmup and a decaying schedule** — for example cosine decay with several epochs of warmup ([1.5](01-05-adaptive-optimizers-schedules-and-initialization.md)). A schedule that keeps $\eta$ high for longer keeps the effective noise scale, $\eta/B$, closer to its small-batch value.
- **Back off the batch size**, or scale $\eta$ by $\sqrt{16} = 4$ rather than 16. The square-root rule matches the *noise* rather than the movement, and is the better rule in the large-batch regime where linear scaling is known to break down.

The unifying view: the quantity that matters is the **noise scale** $\eta/B$, not $\eta$ or $B$ alone. Any change that holds it fixed tends to preserve the solution's character, and any change that collapses it has to be paid for with explicit regularization.

</details>

## Flashback

**From Lesson 1.2 (universal approximation):** A network computes $g^{(k)}$, the $k$-fold composition of the triangle map, using 3 ReLU units per layer. (a) Give the number of units at depth $k = 12$ and the number a one-hidden-layer network would need. (b) The team builds the depth-12 version and finds it will not train past chance. Name the two most likely causes, and say which one this lesson addresses and which one it does not.

<details>
<summary>Solution</summary>

(a) Depth 12 at 3 units per layer is **36 units**. A one-hidden-layer ReLU network needs at least $2^{12} - 1 = \mathbf{4{,}095}$ units, since it produces at most $m+1$ linear pieces and the target has $2^{12} = 4{,}096$.

A factor of about 114, and the gap doubles with every further layer.

(b) Two likely causes:

- **An unstable or badly scaled optimization.** Twelve layers of composition means the loss surface has curvature that varies enormously by direction, so the condition number is large and a fixed learning rate either diverges in the steep directions or crawls in the flat ones. **This lesson addresses that**: momentum turns $\kappa$ into $\sqrt{\kappa}$, and the stability limit $\eta < 2/\Lambda$ tells you what step is admissible. Initialization ([1.5](01-05-adaptive-optimizers-schedules-and-initialization.md)) and normalization ([1.6](01-06-normalization.md)) attack the same problem from the other side by controlling $\Lambda$ itself.

- **The function is hard to *find*, not hard to represent.** The sawtooth has $4{,}096$ pieces, so its loss surface is wildly non-convex with an enormous number of near-symmetric configurations, and gradient descent from a random initialization has no reason to land on the specific composition that produces it. **This lesson does not address that, and neither does any other** — it is the gap [1.2](01-02-universal-approximation.md) named as the difference between representation and learnability.

The second is the deeper point and worth stating plainly. Telgarsky's construction proves a depth-12 network *can* compute $g^{(12)}$ with 36 units. It says nothing about whether SGD will find those 36 units, and empirically it does not: the sawtooth is a standard example of a function that is cheap to represent and very hard to learn. **Existence proofs in this field are about the hypothesis class, and training is a separate problem with no comparable guarantees.**

</details>

## Connections

- **Backward:** the gradients being descended come from [1.3](01-03-backpropagation-and-automatic-differentiation.md), and plain gradient descent with its step-size analysis is [`machine-learning` 1.6](../../machine-learning/lessons/01-06-gradient-descent-for-learning.md) and [`convex-optimization` 4.1](../../convex-optimization/lessons/04-01-first-order-methods.md); what is new here is that the gradient is sampled and the objective is not convex.
- **Forward:** [1.5](01-05-adaptive-optimizers-schedules-and-initialization.md) adds per-parameter step sizes on top of this velocity and gives initialization schemes that lower $\Lambda$ directly; [1.6](01-06-normalization.md) reshapes the landscape so that $\kappa$ is smaller to begin with.
- **Sideways:** the $\sqrt{\kappa}$ improvement is the acceleration result of [`convex-optimization` 4.1](../../convex-optimization/lessons/04-01-first-order-methods.md); the $1/\sqrt{B}$ noise scaling is the standard error of [`prob-stat-refresher` 3.2](../../prob-stat-refresher/lessons/03-02-sums-and-law-of-large-numbers.md); and the velocity recursion $v_{t+1} = \beta v_t + g_t$ is a first-order low-pass filter, the discrete-time system of [`signals-systems` 4.3](../../signals-systems/lessons/04-03-difference-equations-realizations.md), with $1/(1-\beta)$ as its DC gain.
