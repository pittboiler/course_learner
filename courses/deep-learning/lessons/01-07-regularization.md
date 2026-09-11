# Deep Learning · Lesson 1.7: Regularization

> ⏱ ~15 min · Module 1: Neural nets, backpropagation & training · Builds on: [1.6 (normalization)](01-06-normalization.md), [`machine-learning` 1.4 (regularization: ridge and lasso)](../../machine-learning/lessons/01-04-regularization-ridge-and-lasso.md) · Unlocks: [2.1 (the convolution operation)](02-01-the-convolution-operation.md)

## Why this matters

Deep networks have more parameters than training examples, routinely by a factor of a hundred. They can fit the training set exactly — including a training set with the labels randomly shuffled — and yet they generalize. Why that happens is genuinely open, and [`statistical-learning` 5.5](../../statistical-learning/lessons/05-05-why-does-deep-learning-generalize.md) is where the question is taken seriously.

This lesson is about the practical side of the same fact: given a model that *is* overfitting, what do you actually do?

There are four standard tools and they are not interchangeable. Each closes a different gap, and reaching for one before you have named the gap is guesswork. **The diagnostic comes first, the regularizer second** — which is why this lesson's picture is a pair of loss curves rather than a formula.

## The idea

Start with the diagnostic, because it decides everything else. Plot training loss and validation loss against epoch.

**Both high, small gap:** you are underfitting. Nothing in this lesson helps — you need more capacity, more training, or a higher learning rate. Adding regularization here makes things worse, and doing so is the most common misapplication of everything below.

**Training low, validation much higher:** you are overfitting, and the four tools apply.

**Weight decay** shrinks the weights toward zero at every step. The shrinkage story is [`machine-learning` 1.4](../../machine-learning/lessons/01-04-regularization-ridge-and-lasso.md)'s and the Bayesian-prior reading is [`statistical-learning` 2.5](../../statistical-learning/lessons/02-05-regularization-as-a-bayesian-prior.md)'s; neither is repeated. What is new is that in a deep network the interaction with Adam and with normalization layers is subtle enough that the naive implementation does something other than what it says.

**Dropout** zeroes a random subset of units at every training step. The effect is that no unit can rely on any particular other unit being present, so the network cannot build brittle co-adapted chains. It is also, approximately, training an ensemble of exponentially many thinned networks and averaging them at test time.

**Data augmentation** enlarges the training set with transformations that preserve the label — a rotated cat is a cat. This is the only tool on the list that adds *information* rather than removing capacity, and it is usually the most effective. It is also where domain knowledge enters: which transformations preserve the label is a fact about your problem, not about learning.

**Early stopping** simply stops at the validation minimum. It is free, it is the first thing to do, and on a quadratic it is provably equivalent to a particular amount of L2 regularization — fewer steps means a stronger penalty.

## The formal version

> **Weight decay / L2.** Add $\frac{\lambda}{2}\|\theta\|^{2}$ to the loss, giving the gradient an extra $\lambda\theta$ and the update an extra $-\eta\lambda\theta$.

> **Decoupled weight decay (AdamW).** Apply the shrinkage directly to the parameters, outside the adaptive scaling:
> $$\theta_{t+1} = \theta_t - \eta\,\frac{\hat m_t}{\sqrt{\hat v_t}+\epsilon} \;-\; \eta\lambda\,\theta_t.$$

**With Adam these are not the same thing** ([1.5](01-05-adaptive-optimizers-schedules-and-initialization.md)). Folded into the gradient, the $\lambda\theta$ term passes through the $1/\sqrt{\hat v}$ division, so parameters with large gradients receive *less* decay — the opposite of the intent. Decoupling restores uniform shrinkage, and it is why AdamW rather than Adam is the default for transformers.

Two parameter groups are conventionally **excluded** from decay: the $\gamma$ and $\beta$ of normalization layers, and all biases. Decaying a normalized layer's weights does not regularize the function at all — it only raises the effective learning rate ([1.6](01-06-normalization.md)).

> **Dropout.** At training time, for each unit independently draw $r \sim \mathrm{Bernoulli}(p)$ and set
> $$\tilde a = \frac{r}{p}\,a.$$
> At evaluation, use $a$ unchanged.

The division by $p$ is **inverted dropout**, and it keeps the expectation right: $\mathbb{E}[\tilde a] = \frac{p}{p}a = a$, so the units downstream see the same average input in both modes and no rescaling is needed at test time. Typical $p$ is 0.5 for fully connected layers and 0.8 to 0.9 for convolutional ones, which have far fewer parameters per unit and need less.

> **Dropout as an ensemble.** A layer of $n$ units has $2^{n}$ possible dropout masks, so training visits an astronomically large family of thinned subnetworks that share weights, and evaluation with all units present approximates their geometric-mean prediction.

At $n = 512$ that is $2^{512} \approx 10^{154}$ subnetworks. The ensemble reading is an approximation — exact only for linear models — but it is the right intuition for why dropout behaves like averaging.

> **Data augmentation.** Replace each example $(x,y)$ by $(T(x), y)$ for a random label-preserving $T$.

| Domain | Typical transformations |
|---|---|
| Images | crop, flip, rotate, colour jitter, cutout, mixup |
| Audio | time stretch, pitch shift, noise, spectrogram masking |
| Text | synonym substitution, back-translation, span masking |

**Label preservation is the whole constraint, and it is domain knowledge.** A horizontal flip preserves "cat" and destroys "the digit 2". Getting this wrong teaches the network that two different labels share an input, which is worse than no augmentation.

> **Early stopping and L2.** For a quadratic loss with curvature $\lambda$ and optimum $w^{*}$, gradient descent from $w_0 = 0$ gives
> $$w_t = w^{*}\big(1 - (1-\eta\lambda)^{t}\big),$$
> while ridge with penalty $\alpha$ gives $w_{\text{ridge}} = w^{*}\dfrac{\lambda}{\lambda+\alpha}$. Matching them, for small $\eta\lambda t$,
> $$\alpha \approx \frac{1}{\eta t}.$$

| $t$ (at $\eta\lambda = 0.01$) | $w_t/w^{*}$ | equivalent $\alpha$ | $1/(\eta t)$ |
|---|---|---|---|
| 10 | 0.096 | 9.46 | 10.0 |
| 50 | 0.395 | 1.53 | 2.0 |
| 100 | 0.634 | 0.58 | 1.0 |
| 500 | 0.993 | 0.007 | 0.2 |

**Training time is a regularization hyperparameter.** The approximation is good early and degrades as training proceeds, but the direction is exact: more steps means less effective penalty, which is why a run that overfits late can be fixed by stopping earlier and equally by decaying more.

> **Label smoothing.** Replace the one-hot target by $(1-\epsilon)y + \epsilon/K$, typically $\epsilon = 0.1$. It stops the network driving its logits to infinity to squeeze out the last of the cross-entropy, and it improves calibration.

**Which gap does each close?**

| Symptom | Reach for |
|---|---|
| Training loss near zero, large validation gap | more data, augmentation, weight decay, dropout |
| Gap appears only late in training | early stopping, a faster learning-rate decay |
| Both losses high | **none of these** — underfitting; add capacity or train longer |
| Confident but wrong predictions | label smoothing, temperature calibration |
| Validation noisy and unstable | larger batch, lower learning rate, check batch-norm statistics |

## Picture

![A plot of loss against training epoch. The blue training curve falls smoothly and keeps falling toward a low plateau. The coral validation curve falls with it at first, reaches a minimum around epoch forty, then turns and rises steadily. A dashed vertical line at the minimum is labelled early stopping, and a vertical segment near the right edge marks the widening gap between the two curves. Captions below state that a large gap with low training loss calls for weight decay, dropout, more data or augmentation, while a small gap with both losses high is underfitting and calls for less regularization rather than more.](assets/01-07-fig1.svg)

The two curves separate, and **where they separate is the whole diagnosis.** Before the dashed line the model is learning things that transfer; after it, things that do not.

Notice what early stopping costs: it throws away the part of training after the minimum, which is real optimization progress on the training objective. That is the trade every regularizer makes in some form — **give up fit to close the gap** — and it is why the underfitting row of the table above matters so much. If the gap is already small, there is nothing to buy and you are paying anyway.

## Worked examples

**Example 1 — dropout at train and test, with the scaling.**

A hidden layer outputs $a = (2, 4, 6, 8)$ with dropout keep probability $p = 0.5$.

*Training step.* Suppose the mask is $r = (1, 0, 1, 0)$. Inverted dropout scales the survivors by $1/p = 2$:

$$\tilde a = \frac{r}{p}\odot a = (4,\ 0,\ 12,\ 0).$$

The sum is $16$, against the undropped sum of $20$. Over many masks the expectation is right: each unit contributes $a_i$ with probability $0.5$ at double value, so $\mathbb{E}[\tilde a_i] = 0.5 \times 2a_i = a_i$.

*Evaluation.* No mask, no scaling: $a = (2,4,6,8)$, sum 20.

**The $1/p$ is what makes the two modes consistent.** Without it, training-time activations would average $p$ times the evaluation-time ones, and every downstream layer would see a systematically different input scale in the two modes — the same class of train–eval mismatch that makes batch norm's mode switch dangerous ([1.6](01-06-normalization.md)).

Two consequences worth knowing. Dropout **increases gradient noise**, so it interacts with the learning rate and typically needs a longer training run. And dropout before a batch-norm layer is a known bad combination: dropout changes the activation variance between train and eval, and batch norm's running statistics are then estimated on the wrong distribution. The usual resolution is to put dropout after normalization, or to skip dropout entirely in convolutional networks where batch norm already regularizes.

**Example 2 — a diagnosis, worked through.**

A team reports: training accuracy 99.8 percent, validation accuracy 71 percent, and the validation curve reached its best value at epoch 18 of 60.

*The gap is 29 points and the training loss is essentially zero.* This is overfitting, unambiguously — the model has the capacity to memorise and has used it.

Ranked responses:

1. **Early stopping at epoch 18.** Free, immediate, and it recovers whatever the validation curve had at its minimum. Do this first because it costs nothing and it bounds how much the other fixes need to achieve.
2. **Data augmentation.** The only intervention that adds information. If these are images, flips and random crops typically move validation accuracy several points, and it composes with everything else.
3. **Weight decay**, raised from whatever it is by a factor of 3 to 10, excluding norm parameters and biases.
4. **Dropout** in the fully connected head, $p = 0.5$.
5. **More data**, which dominates all of the above when it is available.

*What not to do.* Do not reduce the model size first. It is the intervention most likely to help and most likely to cost you the ceiling — a smaller model regularizes by being unable to fit, which caps what it can ever reach. The modern practice is the opposite: keep the large model and regularize it harder, because a large regularized model reliably beats a small unregularized one.

*A check worth running before any of it.* A 29-point gap is large enough to suspect a **leak or distribution shift** rather than pure overfitting — duplicate images across the split, a preprocessing step fitted on the full dataset, or a validation set drawn from a different source. Verify the split is clean first; no regularizer fixes a broken evaluation, and [`machine-learning` 4.3](../../machine-learning/lessons/04-03-diagnosing-models-in-practice.md) is the discipline for this.

## Watch out

- You might think regularization always helps a model that is performing badly. It helps only when the *gap* is the problem. If training and validation loss are both high the model is underfitting, and adding dropout or decay makes it strictly worse — the single most common misdiagnosis in practice.
- You might think weight decay and L2 are the same thing. With SGD they are; with Adam they are not, and the difference is why AdamW exists. And on a layer followed by normalization, weight decay does not regularize the function at all — it raises the effective learning rate.
- You might think dropout is always worth adding. In convolutional networks with batch norm it usually is not: batch norm already injects noise, and the two together often underperform either alone. Dropout's home is fully connected layers and transformer sublayers.

## One-liner

> Name the gap first: regularization trades training fit for the train–test gap, and every tool here is worthless, or harmful, when the gap is not the problem.

## Problems

**P1 (🟢)** A layer outputs $a = (1, 5, 3, 7, 2)$ and dropout is applied with keep probability $p = 0.4$ and mask $r = (1,0,0,1,1)$. (a) Give the training-time output with inverted dropout. (b) Give the evaluation-time output. (c) State what the training-time output would be without the $1/p$ scaling and what would go wrong.

**P2 (🟡)** For each situation, name the single intervention you would try first and say in one sentence why. (a) Training loss 0.02, validation loss 0.9, gap widening from epoch 5. (b) Training loss 1.8, validation loss 1.9, both flat for 20 epochs. (c) Training loss 0.3, validation loss 0.35, but the model assigns 99 percent confidence to its wrong answers. (d) Training and validation loss both fall smoothly but validation is extremely noisy epoch to epoch.

**P3 (🔴, optional)** A team trains a transformer with AdamW, weight decay $\lambda = 0.1$ applied to **all** parameters including layer-norm gains and biases. (a) State what the decay does to the layer-norm $\gamma$ parameters and why that is not regularization in the usual sense. (b) The model's layer-norm weights drift toward zero over training. Explain the effect on the layer's output and on the next layer's effective learning rate. (c) Give the standard fix and state which parameter groups it creates.

<details>
<summary>Solutions</summary>

**P1** (a) Inverted dropout scales the survivors by $1/p = 1/0.4 = 2.5$:

$$\tilde a = \frac{r}{p}\odot a = (2.5,\ 0,\ 0,\ 17.5,\ 5).$$

(b) At evaluation there is no mask and no scaling: $a = (1, 5, 3, 7, 2)$.

(c) Without the scaling the training output would be $r \odot a = (1, 0, 0, 7, 2)$, with sum 10 against the evaluation sum of 18.

What goes wrong: **the downstream layer sees inputs that are on average $p = 0.4$ times as large in training as at evaluation.** Every weight after the dropout layer is fitted against the smaller scale and then applied to the larger one, so the network's outputs are systematically inflated at test time — by a factor of $1/p$ per dropout layer, compounding through the stack.

The historical alternative was to scale at *test* time by $p$ instead, which is mathematically equivalent. Inverted dropout is preferred because it keeps the inference path free of any dropout-related arithmetic, so a deployed model needs no knowledge that dropout was ever used.

**P2** (a) **Early stopping**, at or just past epoch 5. The gap is enormous and it starts early, so the validation minimum is the cheapest available improvement, and knowing its value tells you how much the heavier interventions — augmentation, decay, more data — still need to find. It costs one run's bookkeeping and nothing else.

(b) **Nothing from this lesson.** Both losses are high and equal: the model is **underfitting**, so it has not extracted what the data contains. Increase capacity, train longer, raise the learning rate, or check that the optimization is working at all — a flat loss for 20 epochs also looks like a learning rate that is too small, a dead-ReLU layer ([1.1](01-01-from-linear-models-to-the-mlp.md)), or an initialization that has killed the signal ([1.5](01-05-adaptive-optimizers-schedules-and-initialization.md)). Adding regularization here makes it strictly worse.

(c) **Label smoothing**, with $\epsilon = 0.1$. The gap is small, so generalization is fine and the problem is **calibration**: cross-entropy on one-hot targets rewards pushing logits toward infinity, which produces extreme confidence on everything including errors. Label smoothing caps the reward for confidence. Temperature scaling on a held-out set is the post-hoc alternative and does not require retraining.

(d) **A larger validation batch, or simply a larger validation set.** Epoch-to-epoch noise in validation with smooth training curves usually means the validation estimate itself is noisy, not the model. If the set cannot grow, check whether batch-norm running statistics have converged ([1.6](01-06-normalization.md)) — an unstable normalizer produces exactly this symptom — and lower the learning rate if the model's parameters are genuinely still moving a long way each epoch.

**P3** (a) Weight decay on a layer-norm gain $\gamma$ pulls it toward **zero**, and $\gamma = 0$ makes the layer output the constant $\beta$ for that feature, destroying the feature entirely.

This is not regularization in the usual sense because **$\gamma$ is not a capacity parameter.** The shrinkage story of [`machine-learning` 1.4](../../machine-learning/lessons/01-04-regularization-ridge-and-lasso.md) is about penalising a model for relying heavily on any one input direction; $\gamma$ does not select directions, it sets the scale of an already-normalized one. Shrinking it does not simplify the function class, it just turns features off. The same applies to biases, which shift rather than scale and carry no capacity in the relevant sense.

(b) As $\gamma \to 0$ the layer's output collapses toward the constant $\beta$, so the information the layer was passing on is attenuated toward nothing — the feature is being deleted by an optimizer instruction that has nothing to do with the loss.

For the **next** layer, the effect compounds with [1.6](01-06-normalization.md)'s scale invariance. That layer's weights see a shrinking input, so to maintain the same pre-activation scale they must grow; but if they too are followed by a normalization, their magnitude does not affect the function and the shrinking input simply means the whole block operates at a smaller scale with a correspondingly larger *relative* gradient. The practical symptom is a training run whose effective learning rate drifts upward over time and that becomes unstable late for no visible reason.

(c) The fix is **parameter groups**: exclude from weight decay every parameter that is not a "real" weight matrix. Concretely, two groups:

| Group | Contains | Weight decay |
|---|---|---|
| decayed | weight matrices of linear, convolutional and attention projections; embedding matrices in some recipes | $\lambda$ |
| not decayed | all biases; normalization $\gamma$ and $\beta$; usually positional embeddings | 0 |

This is the standard "no decay" list in every modern training script, and it is worth knowing that it is a list of exceptions maintained by hand rather than something derivable — which is why it is also a recurring source of quiet bugs when a new parameter type is added to a model and nobody updates the grouping.

</details>

## Flashback

**From Lesson 1.5 (adaptive optimizers, schedules & initialization):** A team switches from Adam with $\lambda\theta$ added to the gradient, to AdamW with the same $\lambda$. (a) Explain what changes for a parameter whose recent gradients have been large, and for one whose gradients have been small. (b) State whether the same distinction exists for plain SGD with momentum, and why. (c) State what must be retuned after the switch.

<details>
<summary>Solution</summary>

(a) With the penalty folded into the gradient, Adam's update contains

$$\eta\,\frac{\widehat{m(g + \lambda\theta)}}{\sqrt{\hat v}+\epsilon},$$

so the decay term is divided by $\sqrt{\hat v}$, the running root-mean-square of that coordinate's gradient.

- **Large recent gradients** means large $\hat v$, so the decay term is divided by a large number and the parameter is decayed **weakly**.
- **Small recent gradients** means small $\hat v$, so the decay is divided by a small number and the parameter is decayed **strongly**.

That is backwards from the intent. The parameters doing the most work — those with the largest gradients, typically the ones the model relies on most — receive the least regularization, and dormant parameters are shrunk hardest. AdamW removes the coupling: every parameter is multiplied by $(1 - \eta\lambda)$ per step regardless of its gradient history, which is what "weight decay" was always supposed to mean.

(b) **No — for plain SGD the two are identical.** The update is

$$\theta_{t+1} = \theta_t - \eta(g + \lambda\theta_t) = \theta_t - \eta g - \eta\lambda\theta_t,$$

which is exactly the decoupled form. Nothing divides the gradient, so nothing divides the penalty either. The distinction is created entirely by Adam's per-coordinate scaling, which is why it went unnoticed for years: the equivalence people had internalised from SGD was silently false for the optimizer everyone had switched to.

With momentum there is a second-order difference — the decay term enters the velocity and is therefore smoothed over time rather than applied instantly — but it is small and of the same character in both formulations.

(c) **$\lambda$ must be retuned, upward, usually by one to two orders of magnitude.** Under the coupled form the effective decay was being divided by $\sqrt{\hat v}$, which for typical gradient scales is a number well below 1, so the realised shrinkage was much larger than $\lambda$ suggested. Decoupling removes that amplification, so a $\lambda$ that was regularizing adequately before will barely regularize at all after.

Concretely, typical values reflect this: Adam recipes often used $\lambda \approx 10^{-4}$ or smaller, while AdamW recipes for transformers use $\lambda = 0.1$. The learning rate usually does not need to change, since the optimizer's step-size behaviour is untouched — but the two interact through $\eta\lambda$, so a large change in $\lambda$ is worth re-checking against a short run.

</details>

## Connections

- **Backward:** the shrinkage view of the L2 penalty is [`machine-learning` 1.4](../../machine-learning/lessons/01-04-regularization-ridge-and-lasso.md) and its Bayesian reading is [`statistical-learning` 2.5](../../statistical-learning/lessons/02-05-regularization-as-a-bayesian-prior.md); the decoupling problem is [1.5](01-05-adaptive-optimizers-schedules-and-initialization.md)'s adaptive scaling seen from the regularizer's side, and the normalized-layer caveat is [1.6](01-06-normalization.md)'s scale invariance.
- **Forward:** augmentation becomes a first-class architectural concern in [2.4](02-04-transfer-learning-and-fine-tuning.md), where a pretrained backbone is itself a form of regularization; dropout reappears inside every transformer sublayer in [3.5](03-05-the-transformer-block.md).
- **Sideways:** the diagnosis-before-treatment discipline is [`machine-learning` 4.3](../../machine-learning/lessons/04-03-diagnosing-models-in-practice.md)'s, and the question of why an unregularized over-parameterised network generalizes at all — which none of these tools explains — is [`statistical-learning` 5.5](../../statistical-learning/lessons/05-05-why-does-deep-learning-generalize.md).
