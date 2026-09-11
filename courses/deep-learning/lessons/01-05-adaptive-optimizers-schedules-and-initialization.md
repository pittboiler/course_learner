# Deep Learning · Lesson 1.5: Adaptive optimizers, schedules & initialization

> ⏱ ~15 min · Module 1: Neural nets, backpropagation & training · Builds on: [1.4 (SGD, mini-batches & momentum)](01-04-sgd-mini-batches-and-momentum.md), [1.1 (from linear models to the MLP)](01-01-from-linear-models-to-the-mlp.md) · Unlocks: [1.6 (normalization)](01-06-normalization.md)

## Why this matters

Momentum fixed one problem: a single global step size cannot serve a landscape whose curvature differs by orders of magnitude along different directions. It fixed it by *averaging over time*.

This lesson fixes it a second way, **per coordinate**. Adam gives every parameter its own step size, inferred from the recent magnitude of that parameter's gradient, and the effect is that one learning rate works across a whole network whose layers have gradients differing by factors of a thousand.

Then two things that decide whether training starts at all. **Schedules** control how the step size moves over the run, and **initialization** controls the scale of the activations before the first step. Get initialization wrong by a factor of $\sqrt{2}$ per layer and a 25-layer network's signal is gone before training begins — not slowly, but by a factor of $3 \times 10^{-8}$.

## The idea

**The problem adaptivity solves.** In a deep network, gradients for different parameters have wildly different magnitudes: an output-layer bias might see gradients of $10^{-1}$ and an early-layer weight $10^{-4}$. With a single $\eta$, SGD moves the first a thousand times further than the second. You cannot fix that with one number.

So divide each coordinate's gradient by a running estimate of its own magnitude. That is **RMSProp**: keep an exponential moving average of the squared gradient, and step by $g/\sqrt{v}$. The division makes the update **scale-free** — multiply a coordinate's gradients by a thousand and its step is unchanged.

**Adam** is RMSProp plus momentum: one moving average of the gradient (the direction) and one of its square (the scale). Its step along a coordinate with a steady gradient is almost exactly $\eta$, whatever that gradient's magnitude. That is why $\eta = 10^{-3}$ is a usable default across architectures in a way no SGD learning rate ever is.

Both averages start at zero, so early on they are biased toward zero — and biased *unequally*, because $\beta_2 = 0.999$ decays far more slowly than $\beta_1 = 0.9$. **Bias correction** divides each by $1 - \beta^{t}$. Skip it and the first step is about 3.2 times too large.

**Schedules.** A step size good for escaping the initial region is too large for settling into a minimum. So decay it: cosine decay is the modern default, and a **warmup** at the start ramps $\eta$ up from near zero. Warmup exists because early in training the curvature is at its worst and Adam's variance estimate is built from a handful of samples, so it is least trustworthy exactly when a large step is most dangerous.

**Initialization.** Think about what a layer does to the *scale* of its input. A layer with $n$ inputs sums $n$ products, so if the weights have variance $\sigma_w^{2}$ the output variance is about $n\sigma_w^{2}$ times the input variance. Set $\sigma_w^{2} = 1/n$ and scale is preserved — for a linear layer.

But ReLU throws away the negative half, halving the mean square. So a $1/n$ initialization shrinks the signal by a factor of 2 **per layer**, which over 25 layers is $2^{-25} \approx 3\times 10^{-8}$. He initialization puts the 2 back: $\sigma_w^{2} = 2/n$. That single factor of two is the difference between a deep ReLU network that trains and one that does not.

## The formal version

> **RMSProp.**
> $$v_t = \rho\, v_{t-1} + (1-\rho)\, g_t^{2}, \qquad \theta_{t+1} = \theta_t - \frac{\eta}{\sqrt{v_t} + \epsilon}\, g_t,$$
> with all operations elementwise.

> **Adam.**
> $$m_t = \beta_1 m_{t-1} + (1-\beta_1) g_t, \qquad v_t = \beta_2 v_{t-1} + (1-\beta_2) g_t^{2},$$
> $$\hat m_t = \frac{m_t}{1-\beta_1^{t}}, \qquad \hat v_t = \frac{v_t}{1-\beta_2^{t}}, \qquad \theta_{t+1} = \theta_t - \eta\,\frac{\hat m_t}{\sqrt{\hat v_t} + \epsilon}.$$
> Defaults: $\beta_1 = 0.9$, $\beta_2 = 0.999$, $\epsilon = 10^{-8}$, $\eta = 10^{-3}$.

**Why bias correction is needed.** With $m_0 = 0$, unrolling gives $m_t = (1-\beta_1)\sum_{k} \beta_1^{t-k} g_k$, whose expectation under a roughly constant gradient is $(1-\beta_1^{t})g$ — biased low by exactly that factor. The same holds for $v$. Since the update is a ratio, the net bias is

$$\frac{\text{corrected}}{\text{uncorrected}} = \frac{\sqrt{1-\beta_2^{t}}}{1-\beta_1^{t}},$$

which at $t=1$ is $\sqrt{0.001}/0.1 = 0.316$. So the **uncorrected first step is 3.16 times too large**, and the error decays over a few hundred steps. Correction is one division; omitting it is a real bug.

> **Scale invariance.** Under a constant gradient $g$, $\hat m_t = g$ and $\hat v_t = g^{2}$, so the step is
> $$\eta\,\frac{g}{|g| + \epsilon} \approx \eta \cdot \mathrm{sign}(g).$$

**Adam's step size is $\eta$, not $\eta g$.** This is the property that matters: two parameters with gradients of $10^{-4}$ and $10^{-1}$ get the *same* step from Adam and steps differing by a factor of a thousand from SGD.

> **AdamW.** Apply weight decay directly to the parameters rather than adding $\lambda\theta$ to the gradient:
> $$\theta_{t+1} = \theta_t - \eta\,\frac{\hat m_t}{\sqrt{\hat v_t}+\epsilon} - \eta\lambda\,\theta_t.$$

The distinction is real: added to the gradient, the decay term is divided by $\sqrt{\hat v}$ along with everything else, so parameters with large gradients get *less* decay — the opposite of the intent. Decoupling fixes it, and AdamW is the default for transformers ([1.7](01-07-regularization.md)).

> **Schedules.**

| Schedule | Rule |
|---|---|
| Step decay | multiply $\eta$ by $\gamma$ every $k$ epochs |
| Cosine | $\eta_t = \eta_{\min} + \tfrac12(\eta_{\max}-\eta_{\min})\big(1 + \cos(\pi t/T)\big)$ |
| Linear warmup | ramp $\eta$ from 0 to $\eta_{\max}$ over the first $T_w$ steps |

Cosine decay spends a long time near $\eta_{\max}$, turns over smoothly, and finishes near zero: at the quarter, half and three-quarter points its multiplier is $0.854$, $0.5$ and $0.146$.

> **Initialization by variance propagation.** For $z = \sum_{i=1}^{n} w_i a_i$ with independent, zero-mean $w$ and $a$,
> $$\operatorname{Var}(z) = n \operatorname{Var}(w) \operatorname{Var}(a).$$

**Xavier (Glorot)**, for tanh and other symmetric activations, balances the forward and backward passes:

$$\operatorname{Var}(w) = \frac{2}{n_{\text{in}} + n_{\text{out}}}.$$

**He**, for ReLU. Since $\mathbb{E}[\mathrm{ReLU}(z)^{2}] = \tfrac12\mathbb{E}[z^{2}]$ for symmetric $z$, preserving the mean square requires $n\operatorname{Var}(w)\cdot\tfrac12 = 1$:

$$\operatorname{Var}(w) = \frac{2}{n_{\text{in}}}.$$

**Biases initialize to zero** — they carry no symmetry problem, since the weights already differ.

> **Symmetry breaking.** If every weight in a layer is initialized to the same value, every unit in that layer computes the same function, receives the same gradient, and is updated identically — forever. The layer has the capacity of one unit, permanently. Random initialization is the ingredient that breaks it, and it is the only one that does.

## Picture

![A semi-logarithmic plot of mean squared activation against layer index, from zero to twenty-five. Three straight lines start together at one. The dashed coral line, labelled one over n, falls steadily to about three times ten to the minus eight by layer twenty-five. The blue line, labelled two over n or He, stays flat near one. The solid coral line, labelled three over n, climbs steadily to about thirty thousand. Captions note that the small initialization halves the signal every layer and that He's factor of two exactly compensates for ReLU discarding half the units.](assets/01-05-fig1.svg)

Three straight lines on a log axis means three **exponentials**, and the exponent is set entirely by the initialization constant. The gap between the dashed line and the blue one is a factor of $\sqrt{2}$ in the initial weight scale.

Note also that the gradient travels the same road backwards, multiplied by the transposed weights ([1.3](01-03-backpropagation-and-automatic-differentiation.md)). **A forward signal that decays by $2^{-25}$ has a backward gradient that decays similarly**, so the coral dashed case is not merely a scaling inconvenience — the early layers receive nothing to learn from.

## Worked examples

**Example 1 — Adam's step does not depend on the gradient's size.**

Two parameters, with steady gradients $g_A = 10^{-4}$ and $g_B = 10^{-1}$. Take $\eta = 10^{-3}$.

*SGD:* steps are $\eta g$, so $10^{-7}$ and $10^{-4}$ — a factor of **1,000 apart**. Parameter A effectively does not move.

*Adam:* after bias correction, $\hat m = g$ and $\hat v = g^{2}$, so the step is

$$\eta\,\frac{g}{\sqrt{g^{2}}} = \eta = 10^{-3}$$

for **both**. Confirmed by running the recursion: with a constant gradient of either $0.1$ or $100$, the step is $1.000\times10^{-3}$ at every iteration.

That is the whole case for Adam, and also the whole case against it. It normalises away the gradient's magnitude, which is exactly what you want when magnitudes vary by layer for uninteresting reasons — and exactly what you do not want when a small gradient genuinely means "this parameter is fine, leave it alone". Adam will keep moving it at full speed.

The behaviour on an *inconsistent* gradient is worth seeing too. With $g$ alternating $+1, -1, +1, \dots$, the steps are $1.0\times10^{-3}$, then $-5.3\times10^{-5}$, then $3.4\times10^{-4}$ — the momentum term cancels while the magnitude term stays large, so the step shrinks by more than an order of magnitude. **Adam takes big steps where the gradient is consistent and small ones where it is not**, which is the same principle as [1.4](01-04-sgd-mini-batches-and-momentum.md)'s valley picture, applied per coordinate.

**Example 2 — initialization, and what a factor of two costs over depth.**

A 25-layer network of width 512 with ReLU activations, inputs with mean square 1. Simulating the forward pass and recording the mean squared activation:

| Layer | 0 | 5 | 10 | 15 | 20 | 25 |
|---|---|---|---|---|---|---|
| $\operatorname{Var}(w) = 1/n$ | 1.00 | $3.3\times10^{-2}$ | $1.0\times10^{-3}$ | $3.4\times10^{-5}$ | $1.0\times10^{-6}$ | $3.4\times10^{-8}$ |
| $\operatorname{Var}(w) = 2/n$ (He) | 1.00 | 0.89 | 0.60 | 0.44 | 0.49 | 0.46 |
| $\operatorname{Var}(w) = 3/n$ | 1.00 | 10.0 | 97 | 800 | $6.4\times10^{3}$ | $3.1\times10^{4}$ |

The first row falls by a factor of about $0.45$ per layer — the predicted $\tfrac12$, as measured. Over 25 layers that is $2^{-25} \approx 3\times 10^{-8}$, matching the simulation's $3.4\times10^{-8}$.

The third row grows by about $1.5$ per layer, $1.5^{25} \approx 2.5\times10^{4}$, again matching. In 32-bit floating point, a few more layers of this and the activations overflow to infinity.

**The middle row is flat, and the only difference is a factor of $\sqrt 2$ in the initial weight standard deviation.** This is the clearest example in the course of a constant that is not a detail. It is also why a network can fail to train for reasons that have nothing to do with the optimizer, the data, or the architecture — and why the first diagnostic on a network that will not train is to print the activation statistics per layer.

## Watch out

- You might think Adam's default $\eta = 10^{-3}$ transfers to SGD. It does not, and the mistake is common. Adam's step is $\eta$ regardless of gradient scale; SGD's is $\eta g$. SGD on the same problem usually wants $\eta$ between $0.01$ and $1$, two to three orders of magnitude larger.
- You might think weight decay in Adam is L2 regularization. It is not, unless you use the decoupled AdamW form. Added to the gradient, the penalty passes through the $1/\sqrt{\hat v}$ division and ends up applied *least* to the parameters with the largest gradients.
- You might think initializing all weights to zero is a neutral starting point. It is the one starting point that cannot work: all units in a layer stay identical forever, so the layer has the capacity of a single unit. The same applies to any constant, and near-constant initializations are merely slow versions of the same failure.

## One-liner

> Adam gives every parameter a step size of about $\eta$ regardless of its gradient's magnitude, a schedule shrinks that $\eta$ as training settles, and an initialization off by $\sqrt{2}$ per layer kills a deep network before the first step.

## Problems

**P1 (🟢)** A layer has $n_{\text{in}} = 256$ and $n_{\text{out}} = 128$, with ReLU activations. (a) Give the He initialization variance and standard deviation for its weights. (b) Give the Xavier variance for comparison. (c) State the ratio of the two standard deviations and, for a 20-layer network of such layers, the factor by which the wrong choice changes the mean squared activation at the output.

**P2 (🟡)** A team runs Adam with $\beta_1 = 0.9$, $\beta_2 = 0.999$ and no bias correction, and reports that the loss spikes on the first few steps then recovers. (a) Compute the ratio of the uncorrected to the corrected step at $t = 1$, $t = 10$ and $t = 100$. (b) Explain the spike and the recovery in terms of your numbers. (c) State the fix and one alternative that mitigates the same symptom without touching the optimizer.

**P3 (🔴, optional)** A 40-layer ReLU network of constant width 1024 is initialized with $\operatorname{Var}(w) = 1.8/n$ — close to He but not exact. (a) Give the per-layer factor on the mean squared activation and the factor across all 40 layers. (b) State whether this network trains, and what symptom you would expect. (c) The team adds batch normalization after every layer and reports that the initialization no longer seems to matter. Explain why, and name one thing that is still sensitive to the initial scale.

<details>
<summary>Solutions</summary>

**P1** (a) He uses only the fan-in:

$$\operatorname{Var}(w) = \frac{2}{n_{\text{in}}} = \frac{2}{256} = 7.81\times10^{-3}, \qquad \sigma_w = \sqrt{7.81\times10^{-3}} = 0.0884.$$

(b) Xavier balances both:

$$\operatorname{Var}(w) = \frac{2}{n_{\text{in}}+n_{\text{out}}} = \frac{2}{384} = 5.21\times10^{-3}, \qquad \sigma_w = 0.0722.$$

(c) The ratio of standard deviations is $0.0884/0.0722 = 1.225$, and the ratio of variances is $7.81/5.21 = 1.5$.

The mean squared activation is multiplied by the variance ratio at every layer, so over 20 layers using Xavier where He is correct costs

$$\left(\frac{1}{1.5}\right)^{20} = 1.5^{-20} = 3.0\times10^{-4}.$$

A factor of about 3,000 in signal loss from a choice that looks like a rounding difference. It is survivable at 20 layers — the network will train, slowly — and it is not survivable at 100.

**P2** (a) The ratio of uncorrected to corrected is the reciprocal of $\sqrt{1-\beta_2^{t}}/(1-\beta_1^{t})$:

| $t$ | $\sqrt{1-\beta_2^{t}}$ | $1-\beta_1^{t}$ | corrected / uncorrected | uncorrected is larger by |
|---|---|---|---|---|
| 1 | 0.0316 | 0.100 | 0.316 | **3.16** |
| 10 | 0.0998 | 0.651 | 0.153 | **6.5** |
| 100 | 0.309 | 1.000 | 0.309 | 3.2 |

Note the ratio does not decay monotonically — it worsens through the first dozen steps before improving, because $1-\beta_1^{t}$ saturates at 1 long before $\sqrt{1-\beta_2^{t}}$ does. The bias is substantial for roughly the first thousand steps.

(b) **The spike:** the first steps are 3 to 6 times larger than intended, which at a learning rate tuned to be near the stability limit is enough to overshoot badly and drive the loss up — exactly the divergence arithmetic of [1.4](01-04-sgd-mini-batches-and-momentum.md).

**The recovery:** as $t$ grows, $\beta_2^{t} \to 0$ and the correction factor approaches 1, so the steps shrink back to their intended size and ordinary training resumes from whatever damaged point the spike left behind. The model recovers, but it has wasted steps and may have landed somewhere worse.

(c) **The fix is to implement bias correction** — two divisions, exactly as specified.

The alternative that mitigates without touching the optimizer is **learning-rate warmup**: ramping $\eta$ from near zero over the first few hundred steps means that even a 6-times-too-large step is 6 times a very small number. This is part of why warmup became standard for Adam-trained transformers, and it also covers a genuinely separate early-training risk that bias correction does not — that $\hat v$ is estimated from very few samples and is unreliable regardless of whether its bias is removed.

**P3** (a) The per-layer factor on mean squared activation is the ratio to He's $2/n$:

$$\frac{1.8/n}{2/n} = 0.9.$$

Across 40 layers:

$$0.9^{40} = 0.0148,$$

about a factor of **68 reduction**.

(b) **It trains.** A factor of 68 over 40 layers is a real attenuation but nothing like the $10^{-8}$ of a $1/n$ initialization, and it is well inside floating-point range. The expected symptom is **slow early progress**, concentrated in the early layers: gradients reaching layer 1 are attenuated by a comparable factor, so those layers move far less than the later ones for the first part of training, and the loss curve shows a long shallow start before it steepens.

A useful diagnostic here is the ratio of update magnitude to parameter magnitude per layer. If layer 1's is a hundred times smaller than layer 40's, the initialization is the reason.

(c) Batch normalization **rescales each layer's pre-activations to a fixed mean and variance at every forward pass** ([1.6](01-06-normalization.md)). Whatever scale the weights produce is immediately normalised away, so the geometric decay or growth that initialization controls simply cannot accumulate across layers. The network becomes invariant to the overall scale of each weight matrix, which is why practitioners report that initialization "stops mattering".

What remains sensitive: **the residual branch scale in very deep networks.** With residual connections ([2.3](02-03-deep-architectures-and-residual-connections.md)) the output is $x + F(x)$, and normalization inside $F$ does not control the *variance of the sum*, which grows with the number of blocks. This is why deep residual networks initialize the last layer of each block to zero, or scale the branch by $1/\sqrt{L}$ — a deliberate initialization choice that normalization does not subsume.

Two smaller ones: the very first layer, whose input is the data rather than a normalized activation, and any layer before the first normalization, both still need sensible scaling.

</details>

## Flashback

**From Lesson 1.3 (backpropagation and automatic differentiation):** An optimizer stores a running velocity and a running squared-gradient estimate for every parameter. (a) For a model with $10^{9}$ parameters in 32-bit floats, give the memory for the parameters, the gradients, and Adam's two states, and the total. (b) Compare with the activation memory estimate for a 96-layer model from [1.3](01-03-backpropagation-and-automatic-differentiation.md)'s P3 and state which dominates. (c) Name one change that halves the optimizer state and say what it costs.

<details>
<summary>Solution</summary>

(a) At 4 bytes per 32-bit float and $10^{9}$ parameters, each tensor of parameter shape costs 4 GB:

| Tensor | Size |
|---|---|
| Parameters $\theta$ | 4 GB |
| Gradients $g$ | 4 GB |
| Adam first moment $m$ | 4 GB |
| Adam second moment $v$ | 4 GB |
| **Total** | **16 GB** |

So **Adam costs three times the parameters in extra memory** — gradients plus two states — and a billion-parameter model needs 16 GB before a single activation is stored. Plain SGD with momentum would need 12 GB; SGD without momentum, 8 GB.

(b) [1.3](01-03-backpropagation-and-automatic-differentiation.md)'s P3 had 96 layers at 1.2 GB of activations each, or **115 GB** — about seven times the optimizer footprint.

So **activations dominate**, which is the usual situation for deep models at reasonable batch sizes, and it is why gradient checkpointing is the first lever pulled. The two scale differently, though: optimizer state scales with *parameters* and is independent of batch size, while activation memory scales with *batch size and depth*. Shrinking the batch attacks only the second, which is why very large models eventually need parameter-side techniques — sharding the optimizer state across devices — that no batch-size change can substitute for.

(c) **Store the optimizer state in 16-bit rather than 32-bit**, which halves $m$ and $v$ from 8 GB to 4 GB.

The cost is numerical. $v$ is a squared quantity, so it spans a very wide dynamic range and is the tensor least tolerant of a narrow exponent; the standard mitigations are to keep a 32-bit master copy of the *parameters* while running the states in 16-bit, or to use bfloat16, whose exponent range matches 32-bit float at the cost of precision. Done carelessly — particularly with 16-bit floats, whose range runs out near $6\times10^{-5}$ — the $\sqrt{\hat v}$ in Adam's denominator underflows and the update becomes garbage.

The other common answer is to drop to a single-state optimizer, such as momentum-free RMSProp or one of the memory-efficient Adam variants that factorises $v$, saving 4 GB at some cost in convergence.

</details>

## Connections

- **Backward:** Adam's first moment is [1.4](01-04-sgd-mini-batches-and-momentum.md)'s velocity with a $(1-\beta_1)$ scaling, and the per-coordinate division is a diagonal preconditioner attacking the same condition number momentum attacked by averaging; the activation derivatives that make initialization matter are [1.1](01-01-from-linear-models-to-the-mlp.md)'s table.
- **Forward:** [1.6](01-06-normalization.md) achieves by construction what He initialization achieves only at step zero, which is why the two are complements rather than alternatives; [1.7](01-07-regularization.md) takes up the AdamW weight-decay distinction properly.
- **Sideways:** the exponential moving averages are first-order recursive filters ([`signals-systems` 4.3](../../signals-systems/lessons/04-03-difference-equations-realizations.md)) with time constants $1/(1-\beta)$; the variance-propagation argument is the sum-of-independent-variables rule of [`prob-stat-refresher` 3.1](../../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md); and the underflow hazard in 16-bit state is the floating-point range question of [`numerical-analysis` 1.1](../../numerical-analysis/lessons/01-01-floating-point-roundoff.md).
