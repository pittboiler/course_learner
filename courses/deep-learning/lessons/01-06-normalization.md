# Deep Learning · Lesson 1.6: Normalization

> ⏱ ~15 min · Module 1: Neural nets, backpropagation & training · Builds on: [1.5 (adaptive optimizers, schedules & initialization)](01-05-adaptive-optimizers-schedules-and-initialization.md) · Unlocks: [1.7 (regularization)](01-07-regularization.md)

## Why this matters

[1.5](01-05-adaptive-optimizers-schedules-and-initialization.md) showed that a network's activation scale is an exponential in depth, and that He initialization sets the exponent to zero. But it sets it to zero **only at step zero**. Training moves the weights, the per-layer scales drift, and by epoch ten the careful initialization is a memory.

Normalization fixes the scale at every forward pass instead of once. Insert a layer that subtracts a mean and divides by a standard deviation, and the activations entering the next layer have a controlled scale no matter what the weights have done.

The payoff is large and slightly mysterious. Networks train faster, tolerate much larger learning rates, and become far less sensitive to initialization. The original explanation for why — "reducing internal covariate shift" — has not held up, and the honest current account is different and more interesting.

## The idea

Take the activations arriving at a layer, subtract their mean, divide by their standard deviation. Then, because forcing every layer's output to mean 0 and variance 1 would throw away information the network may want, give it two learnable parameters per feature to scale and shift back: $\gamma$ and $\beta$. The layer can undo the normalization entirely if that is what minimises the loss — but it has to *choose* to.

The only real question is **what you average over**, and the answers give the two main variants.

**Batch normalization** averages each feature down the batch: for feature $j$, compute the mean and variance of $x_{ij}$ over all examples $i$ in the mini-batch. Every example's normalized value therefore depends on the other examples in its batch — a strange property for a function that is supposed to classify one image.

**Layer normalization** averages each example across its own features: for example $i$, compute the mean and variance over all $j$. No batch dependence at all, so it behaves identically for a batch of 1 and a batch of 1,000.

That difference decides where each belongs. Batch norm is standard in convolutional networks, where batches are large and homogeneous. Layer norm is standard in transformers and recurrent networks, where sequence lengths vary, batches are small, and generation happens one token at a time — a setting in which batch statistics are meaningless.

**Why it helps.** The original claim was that it reduces "internal covariate shift", the drift in each layer's input distribution during training. Later work showed you can *inject* covariate shift after a normalization layer and training remains fast, so that story is not the mechanism.

The better account is about **scale invariance**. With normalization after a linear layer, multiplying $W$ by any constant leaves the output unchanged — the constant cancels in the division. So the *direction* of $W$ is what the function depends on, and its magnitude only affects the gradient's size. That makes the loss surface far smoother in the directions that matter, allows much larger learning rates without divergence, and gives the network an automatic per-layer step-size adjustment that nobody has to tune.

## The formal version

> **Batch normalization.** For a mini-batch of size $B$ and feature $j$:
> $$\mu_j = \frac{1}{B}\sum_{i=1}^{B} x_{ij}, \qquad \sigma_j^{2} = \frac{1}{B}\sum_{i=1}^{B}(x_{ij}-\mu_j)^{2},$$
> $$\hat x_{ij} = \frac{x_{ij}-\mu_j}{\sqrt{\sigma_j^{2}+\epsilon}}, \qquad y_{ij} = \gamma_j \hat x_{ij} + \beta_j.$$

> **Layer normalization.** For example $i$ over its $d$ features:
> $$\mu_i = \frac{1}{d}\sum_{j=1}^{d} x_{ij}, \qquad \sigma_i^{2} = \frac{1}{d}\sum_{j=1}^{d}(x_{ij}-\mu_i)^{2},$$
> then the same standardise-scale-shift, with $\gamma, \beta$ still per feature.

**The learnable $\gamma$ and $\beta$ matter.** Without them the layer would force every feature to mean 0 and variance 1, which would, among other things, confine a sigmoid to its near-linear region. With them the network can recover any mean and variance it wants, and normalization becomes a *reparameterization* rather than a constraint.

> **Train and evaluation differ, for batch norm only.** At training time the batch statistics are used. At evaluation the layer uses running averages accumulated during training:
> $$\mu_{\text{run}} \leftarrow (1-\alpha)\mu_{\text{run}} + \alpha\mu_{\text{batch}},$$
> and likewise for the variance, with $\alpha$ typically $0.1$.

This is a genuine behaviour change between modes, and forgetting to switch is one of the most common bugs in practice: a model in training mode at evaluation time normalises test examples by *each other*, so its prediction for one input depends on what else is in the batch — and accuracy is silently wrong rather than obviously broken. **Layer norm has no such mode**, which is one of its practical advantages.

> **Scale invariance.** If a linear layer's output is immediately batch- or layer-normalised, then for any $a > 0$ the network's function is unchanged under $W \mapsto aW$, and the gradient satisfies
> $$\nabla_{aW} L = \frac{1}{a}\nabla_{W}L.$$

In words: **the weight magnitude has no effect on the function and an inverse effect on the gradient.** So a layer whose weights have grown large automatically takes smaller steps relative to its own scale. This is an implicit per-layer learning-rate schedule, and it is a large part of why normalized networks tolerate learning rates that would make an unnormalized network diverge.

It also interacts with weight decay in a way worth knowing: since the function ignores $\|W\|$, decay's only effect on a normalized layer is to shrink $\|W\|$ and thereby *raise* the effective learning rate ([1.7](01-07-regularization.md)).

> **Batch-size dependence.** The relative standard error of a variance estimated from $B$ samples is $\sqrt{2/(B-1)}$.

| $B$ | 2 | 4 | 8 | 32 | 64 | 256 |
|---|---|---|---|---|---|---|
| relative error of $\sigma^{2}$ | 141% | 82% | 54% | 25% | 18% | 9% |

**Batch norm degrades at small batch sizes**, and this is not a tuning issue but arithmetic. It is the reason detection and segmentation models, which use batches of 2 to 8 per device because the images are large, moved to **group normalization** — which splits the channels into groups and normalizes within each group per example, giving layer norm's batch independence with some of batch norm's per-channel structure.

The variants in use:

| Norm | Averages over | Batch-dependent | Typical home |
|---|---|---|---|
| Batch | batch, per feature (and per spatial position, for conv) | yes | convolutional networks |
| Layer | features, per example | no | transformers, RNNs |
| Group | channel groups, per example | no | small-batch vision |
| RMSNorm | features, per example, **no mean subtraction** | no | large language models |

RMSNorm divides by the root mean square and skips centring entirely, which costs nothing measurable in quality and saves a pass over the data — the kind of simplification that matters only at scale.

**Placement.** In transformers, **pre-norm** — normalizing the input to each sublayer, inside the residual branch — trains far more stably at depth than **post-norm**, which normalizes after the residual addition. Post-norm puts a normalization on the identity path and interferes with exactly the clean gradient route that makes residual networks work ([2.3](02-03-deep-architectures-and-residual-connections.md)).

## Picture

![Two identical grids of cells, five rows by six columns, with rows labelled as batch examples and columns as features. In the left grid, headed batch norm, a single column is outlined, indicating that the mean and variance are computed down one feature across all examples. In the right grid, headed layer norm, a single row is outlined, indicating that they are computed across one example's features. Captions below note that batch norm makes one example's output depend on the others in its batch, while layer norm normalizes each example alone.](assets/01-06-fig1.svg)

The picture is the entire distinction, and everything else follows from it. **The outlined column crosses examples**, so batch norm's output for one input depends on its batch-mates — hence the train/eval split, the small-batch degradation, and the awkwardness at generation time when there is only one sequence. **The outlined row stays inside one example**, so layer norm has none of those properties and needs no running statistics.

Read the grid for a convolutional layer and batch norm's column is wider than drawn: it pools over the batch *and* over every spatial position, so a $32 \times 32$ feature map with batch 64 gives each channel $65{,}536$ samples. That is why batch norm's statistics are so stable in vision and so fragile in a transformer, where there is no spatial axis to pool over.

## Worked examples

**Example 1 — batch norm by hand.**

One feature, batch of four, values $x = (1, 3, 5, 7)$, with $\gamma = 2$, $\beta = 1$, and $\epsilon$ negligible.

$$\mu = \frac{1+3+5+7}{4} = 4, \qquad \sigma^{2} = \frac{9+1+1+9}{4} = 5, \qquad \sigma = 2.236.$$

$$\hat x = \left(\frac{1-4}{2.236},\ \frac{3-4}{2.236},\ \frac{5-4}{2.236},\ \frac{7-4}{2.236}\right) = (-1.342,\ -0.447,\ 0.447,\ 1.342).$$

Check: these have mean 0 and mean square $(1.8+0.2+0.2+1.8)/4 = 1$. Then

$$y = \gamma\hat x + \beta = (-1.683,\ 0.106,\ 1.894,\ 3.683).$$

Now the fact to sit with: **the output for the first example, $-1.683$, was computed using the other three examples' values.** Replace the 7 with a 70 and the first example's output changes, though nothing about that example changed. During training this is a feature — it is where the regularizing noise comes from. At evaluation it is unacceptable, which is exactly why running statistics exist.

**Example 2 — why small batches break batch norm, in numbers.**

A segmentation model processes images so large that only $B = 2$ fit per device.

The variance estimate from 2 samples has relative standard error $\sqrt{2/1} = 141$ percent. So the divisor $\sqrt{\sigma^{2}+\epsilon}$ is, on a typical batch, wrong by a factor that is itself of order 1 — sometimes 0.3, sometimes 3. Each training step normalises by a different, wildly wrong scale.

Two consequences follow, and they are different. **Training is noisy**, which is survivable and even mildly regularizing. **Training and evaluation disagree**, which is not: the running averages converge to the true population statistics, so at evaluation the layer normalises correctly, by a scale it has essentially never seen during training. The model was tuned for the wrong normalizer.

Compare the alternatives at $B = 2$ for a layer with 256 channels and $64 \times 64$ spatial positions:

| Norm | Samples per statistic | Relative error |
|---|---|---|
| Batch norm | $2 \times 64 \times 64 = 8{,}192$ | 1.6% |
| Batch norm, no spatial pooling | 2 | 141% |
| Group norm (32 groups) | $8 \times 64 \times 64 = 32{,}768$ per example | 0.8% |
| Layer norm | $256 \times 64 \times 64 = 1{,}048{,}576$ | 0.1% |

**The spatial axis rescues convolutional batch norm even at $B=2$** — 8,192 samples is plenty. The real failure is not the sample count but the *train–eval mismatch*: with $B=2$ the two images in a batch are highly correlated within themselves, so the effective sample size is far below 8,192, and the batch means wander. Group norm avoids the issue entirely by never depending on the batch, which is why it is the standard choice here despite being slightly worse at large batch sizes.

## Watch out

- You might think normalization works by reducing internal covariate shift. That explanation is not supported: deliberately injecting distribution shift after a batch-norm layer leaves training fast. The better account is scale invariance and the smoother loss surface it produces — and being honest about this matters, because the covariate-shift story predicts things that are false.
- You might think a batch-norm model behaves the same in training and evaluation. It does not, by design. Leaving the model in training mode at evaluation makes each prediction depend on the rest of its batch; leaving it in evaluation mode during training freezes the statistics and breaks the regularizing noise. Both are silent failures.
- You might think you can use batch norm with a batch of 1. You cannot: the variance of one sample is zero, so the layer divides by $\sqrt{\epsilon}$ and outputs $\beta$ for every feature. Use layer norm or group norm when batch sizes are small or variable.

## One-liner

> Normalize the activations at every step rather than hoping the initialization holds, and choose the axis by whether you can afford to make one example's output depend on the rest of its batch.

## Problems

**P1 (🟢)** A batch-norm layer sees the values $x = (2, 4, 4, 4, 6)$ for one feature, with $\gamma = 3$ and $\beta = -1$. (a) Compute $\mu$, $\sigma^{2}$, the normalized values, and the outputs. (b) State what the same layer would output for the first element if the batch were $(2, 20, 20, 20, 20)$ instead, and what this shows.

**P2 (🟡)** A transformer is trained with layer norm and a colleague proposes switching to batch norm "since it works so well in vision". (a) Give two specific reasons this fails for a transformer, one about the data and one about how the model is used at inference. (b) State what happens at generation time when the model produces one token at a time. (c) Name the normalization actually used in most large language models and the one simplification it makes.

**P3 (🔴, optional)** A network's linear layer is immediately followed by batch norm. The team applies weight decay to that layer's weights and observes that the layer's weight norm shrinks steadily while the training loss keeps improving. (a) Explain why shrinking $\|W\|$ does not change the layer's function. (b) Derive what it does to the effective step size on $W$, using the gradient-scaling property. (c) State the practical consequence and the standard fix.

<details>
<summary>Solutions</summary>

**P1** (a) With $x = (2,4,4,4,6)$:

$$\mu = \frac{2+4+4+4+6}{5} = 4, \qquad \sigma^{2} = \frac{4+0+0+0+4}{5} = 1.6, \qquad \sigma = 1.2649.$$

$$\hat x = \left(\frac{-2}{1.2649}, 0, 0, 0, \frac{2}{1.2649}\right) = (-1.5811,\ 0,\ 0,\ 0,\ 1.5811).$$

$$y = 3\hat x - 1 = (-5.7434,\ -1,\ -1,\ -1,\ 3.7434).$$

(b) With the batch $(2, 20, 20, 20, 20)$: $\mu = 16.4$ and

$$\sigma^{2} = \frac{(-14.4)^{2} + 4(3.6)^{2}}{5} = \frac{207.36 + 51.84}{5} = 51.84, \qquad \sigma = 7.2.$$

$$\hat x_1 = \frac{2 - 16.4}{7.2} = -2, \qquad y_1 = 3(-2) - 1 = -7.$$

The first element's input was **2 in both cases**, and its output changed from $-5.74$ to $-7$.

What this shows: **batch norm is not a function of a single example.** Its output for an input depends on which other inputs happen to share the batch, which is why it must switch to fixed running statistics at evaluation time, and why it injects noise during training that acts as a regularizer.

**P2** (a) Two reasons:

- **About the data:** transformer batches contain sequences of **different lengths**, padded to a common length. Batch statistics computed across the batch at a given position would pool real tokens with padding, and position 400 might have three real tokens and sixty pads. There is no clean axis to average over, and the statistics at each position are computed from wildly varying effective sample sizes. Vision has no analogue — every image has the same shape.

- **About inference:** transformers are used **autoregressively**, one token at a time, frequently with a batch of one. A layer whose output depends on batch-mates has nothing to depend on, and the running statistics were accumulated over a training distribution of sequence positions that may not match the generation context at all.

(b) At generation time the batch is a single sequence, extended one token per step. Batch norm would fall back to its running statistics — so the model would apply *training-time average* statistics to every generated token regardless of context. Worse, if the implementation were left in training mode, the variance over a single example is zero and the layer would emit $\beta$ for every feature, destroying the representation completely.

Layer norm has neither problem: it normalizes each token's own feature vector, so a batch of one behaves exactly as a batch of a thousand and training matches inference bit for bit.

(c) Most large language models use **RMSNorm**. Its simplification is to **drop the mean subtraction** and divide only by the root mean square:

$$y = \gamma \cdot \frac{x}{\sqrt{\tfrac1d\sum_j x_j^{2} + \epsilon}}.$$

Empirically the centring contributes almost nothing to quality, and removing it saves one pass over the feature vector and one subtraction per element — negligible in isolation and worth having when the operation runs billions of times per second.

**P3** (a) Batch norm standardises its input, so for a linear layer followed by normalization, replacing $W$ by $aW$ scales the pre-activations by $a$, which scales the batch mean by $a$ and the batch standard deviation by $a$ as well. In the quotient

$$\frac{a(Wx)_j - a\mu_j}{\sqrt{a^{2}\sigma_j^{2}+\epsilon}} \approx \frac{(Wx)_j - \mu_j}{\sqrt{\sigma_j^{2}+\epsilon}}$$

the factor cancels (exactly, up to the $\epsilon$). **The layer's function depends only on $W$'s direction**, not its magnitude, so shrinking $\|W\|$ changes nothing the loss can see.

(b) By the scale-invariance property, $\nabla_{aW}L = \tfrac{1}{a}\nabla_{W}L$. So a plain gradient step changes the weights by $\eta\|\nabla L\|/a$, while the weights themselves have magnitude $a\|W\|$. The **relative** step — which is all that matters, since only the direction is meaningful — is

$$\frac{\eta\|\nabla L\|/a}{a\|W\|} = \frac{\eta\|\nabla L\|}{a^{2}\|W\|} \propto \frac{1}{a^{2}}.$$

So halving the weight norm **quadruples** the effective learning rate on that layer's direction.

(c) The practical consequence: weight decay on a normalized layer is not regularizing the function at all — it is silently, continuously **raising the effective learning rate**, and it does so more and more as training proceeds and $\|W\|$ shrinks. A run that looks stable early can become unstable late for no visible reason, or the layer can end up training far faster than the ones around it.

The standard fix is to **exclude normalized layers' weights, and the $\gamma$ and $\beta$ parameters and all biases, from weight decay** — the standard "no decay" parameter group in every modern training script. Where the effect is wanted deliberately, the principled version is to reparameterise the weights as a direction and a separately controlled magnitude, which is what weight normalization and the various LARS-style layerwise-rate methods do.

</details>

## Flashback

**From Lesson 1.4 (SGD, mini-batches & momentum):** A convolutional network with batch norm trains at $B = 256$. The team moves to $B = 8$ to fit a larger model. (a) Give the change in gradient noise. (b) Give the change in batch norm's statistic quality, and say whether it is as bad as the raw batch size suggests. (c) State which of the two effects you would expect to dominate the accuracy drop and why.

<details>
<summary>Solution</summary>

(a) Gradient noise scales as $1/\sqrt{B}$, so shrinking the batch by a factor of 32 **multiplies the noise standard deviation by $\sqrt{32} = 5.7$**. By [1.4](01-04-sgd-mini-batches-and-momentum.md)'s reasoning the learning rate should come down correspondingly — the linear scaling rule in reverse gives $\eta/32$, though in the small-batch direction the square-root rule, $\eta/5.7$, is often the better guide.

(b) The naive reading is that the variance estimate now uses 8 samples instead of 256, with relative error rising from 9 percent to 54 percent.

**It is not as bad as that**, because a convolutional batch-norm layer pools over the spatial positions as well as the batch. For a $64 \times 64$ feature map the sample count is $8 \times 4096 = 32{,}768$ rather than 8, with a nominal relative error of 0.8 percent.

The real degradation is subtler: pixels within one image are **strongly correlated**, so the effective sample size is much closer to the number of images than to the number of pixels. With 8 images the batch statistics wander noticeably from batch to batch, and — the part that actually hurts — the running averages used at evaluation are computed over that wandering, so the train and evaluation normalizers diverge.

(c) I would expect **the batch-norm effect to dominate**, for two reasons.

The gradient-noise change is *correctable*: retune the learning rate and the schedule and much of the loss is recovered, as [1.4](01-04-sgd-mini-batches-and-momentum.md)'s P3 describes in the opposite direction. It changes how well the optimizer works, and the optimizer has knobs.

The batch-norm effect is a **train–evaluation mismatch**, which no learning-rate change reaches: the model is optimised against one normalizer and evaluated against another. That is a systematic bias, not extra variance, and it shows up as the characteristic symptom of a good training curve with disappointing validation accuracy.

The fix is correspondingly structural rather than a retune: switch to **group normalization**, which is batch-independent and was introduced for exactly this small-batch regime, and then retune the learning rate for the noise.

</details>

## Connections

- **Backward:** normalization does at every step what [1.5](01-05-adaptive-optimizers-schedules-and-initialization.md)'s He initialization does once, which is why the two are complements; the scale-invariance property is why a normalized network tolerates the large learning rates that [1.4](01-04-sgd-mini-batches-and-momentum.md)'s stability limit would otherwise forbid.
- **Forward:** [1.7](01-07-regularization.md) takes up the weight-decay interaction; [2.3](02-03-deep-architectures-and-residual-connections.md) pairs normalization with residual connections, where placement inside or outside the identity path decides whether very deep networks train; [3.5](03-05-the-transformer-block.md) uses pre-norm layer normalization in every transformer sublayer.
- **Sideways:** the running average of batch statistics is the same exponential moving average as [1.5](01-05-adaptive-optimizers-schedules-and-initialization.md)'s optimizer states and the low-pass filter of [`signals-systems` 4.3](../../signals-systems/lessons/04-03-difference-equations-realizations.md); the $\sqrt{2/(B-1)}$ error of a variance estimate is the sampling distribution of [`prob-stat-refresher` 4.2](../../prob-stat-refresher/lessons/04-02-confidence-intervals.md).
