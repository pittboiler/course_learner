# Deep Learning · Lesson 2.4: Transfer learning & fine-tuning

> ⏱ ~15 min · Module 2: Convolutional networks · Builds on: [2.3 (deep architectures and residual connections)](02-03-deep-architectures-and-residual-connections.md), [1.7 (regularization)](01-07-regularization.md) · Unlocks: [3.1 (RNNs and backprop through time)](03-01-rnns-and-backprop-through-time.md)

## Why this matters

Most people who use a deep network never train one from scratch. They take a model somebody else trained on a large dataset and adapt it, usually with a few thousand examples and an afternoon.

That works because of a fact about what convolutional networks learn. The early layers converge to edge detectors, colour blobs and texture filters that are essentially the same across every vision task anyone has tried — they look like Gabor filters whether the network was trained on cats, chest X-rays or satellite images. Only the later layers specialise.

So a pretrained backbone is a **reusable feature extractor**, and adapting it is mostly a question of deciding how much of it to leave alone. This lesson is the decision procedure, and it generalises directly to the language models of [4.5](04-05-llms-self-supervision-and-scaling-laws.md), where the same reasoning appears under the name pretraining and fine-tuning.

## The idea

A trained network splits into two parts that behave very differently.

**The backbone** — everything up to the final pooling — computes a representation. Its early layers hold generic visual primitives, its later layers hold progressively more task-specific compositions.

**The head** — the final linear layer — maps that representation to the classes of the *original* task, and is useless for a new one.

The cheapest adaptation is therefore: throw away the head, attach a new one with the right number of outputs, and train only that. This is **feature extraction**, sometimes called a linear probe. The backbone is frozen, so training is fast, needs little memory, and cannot overfit much — there are only a few thousand trainable parameters.

If you have more data, unfreeze some of the backbone and continue training at a **low learning rate**. This is **fine-tuning**. The learning rate must be low because the pretrained weights are already good, and a normal-sized step destroys them before the gradient signal from a small new dataset can rebuild anything — a failure with a name, **catastrophic forgetting**.

Which to choose is decided by two questions: how much data do you have, and how far is your domain from the pretraining domain? The four combinations give four different answers, and the figure below is the whole decision.

One refinement worth knowing, because it follows from the layer structure: **unfreeze from the top down**. Later layers are the task-specific ones, so they are where the adaptation should happen, and freezing the early layers preserves exactly the features that transfer best.

## The formal version

> **Feature extraction.** Freeze all backbone parameters, replace the head, train only the head. For a ResNet-50 with a 2048-dimensional pooled feature and $C$ classes, the trainable count is
> $$2048\,C + C.$$

At $C = 10$ that is $20{,}490$ trainable parameters out of about 25.6 million — **0.08 percent of the model**. Training is a logistic regression on fixed features, which is why it takes minutes and why it is stable on a few hundred examples.

> **Fine-tuning.** Unfreeze some or all backbone parameters and continue training with a learning rate typically 10 to 100 times smaller than the original, often with a per-layer schedule (**discriminative learning rates**): near-zero for early layers, largest for the head.

> **The decision matrix.**

| | Little data | Lots of data |
|---|---|---|
| **Similar domain** | freeze backbone, train head | fine-tune everything, low learning rate |
| **Different domain** | freeze early layers, retrain later ones | fine-tune everything, or train from scratch |

The two diagonal cells are the interesting ones. **Little data and a similar domain** is the common case and the easy one — the frozen features are already right. **Lots of data and a different domain** is the only cell where pretraining may buy nothing, since you have enough data to learn your own features and the pretrained ones may not fit.

The remaining subtlety: with **little data and a different domain**, the instinct is to fine-tune hard because the features seem wrong. That is exactly backwards — little data plus many trainable parameters is the overfitting regime of [1.7](01-07-regularization.md). Freeze the early layers, which transfer regardless, and retrain only the top.

> **Catastrophic forgetting.** Continuing training on a new distribution overwrites the parameters encoding the old one. With a small dataset and a normal learning rate, the first few steps move weights far enough to destroy the pretrained features before the new task has provided enough signal to replace them.

Standard mitigations: a low learning rate, a warmup, freezing early layers, and **training the new head first for a few epochs before unfreezing anything** — otherwise the randomly initialized head produces large, meaningless gradients that flow straight into the backbone on step one.

> **Batch norm in a frozen backbone.** A frozen batch-norm layer must also be frozen in **evaluation mode**, using its stored running statistics. Left in training mode it recomputes statistics from the new data's batches, so the "frozen" backbone silently changes its function ([1.6](01-06-normalization.md)).

This is one of the most common and most confusing transfer-learning bugs: the parameters are frozen, the model's behaviour is not, and accuracy drifts for no visible reason.

> **Parameter-efficient fine-tuning.** Instead of updating $W$, learn a low-rank correction $W + BA$ with $B \in \mathbb{R}^{d\times r}$, $A \in \mathbb{R}^{r\times d}$ and $r \ll d$. This is **LoRA**, and it trains $2dr$ parameters instead of $d^{2}$.

For $d = 4096$ and $r = 8$: $65{,}536$ against $16.8$ million, **0.4 percent**. The full-rank weight is never modified, so one frozen base model can serve many tasks by swapping small adapter matrices — which is how a single large model is specialised dozens of ways in practice ([4.5](04-05-llms-self-supervision-and-scaling-laws.md)).

## Picture

![A two-by-two grid. The columns are labelled little data and lots of data; the rows are labelled similar domain and different domain. The top-left cell says to freeze the backbone and train a new head only; the top-right says to fine-tune everything at a low learning rate; the bottom-left says to freeze the early layers and retrain the later ones; the bottom-right says to fine-tune everything or train from scratch. Captions note that little data with a similar domain is the cheapest and most common case, and that lots of data with a different domain is the only cell where pretraining may not help.](assets/02-04-fig1.svg)

Read the grid by asking which risk dominates. **Along the data axis the risk is overfitting**: fewer examples means fewer trainable parameters, which means more freezing. **Along the domain axis the risk is mismatch**: a more distant domain means the later layers' features are wrong, which means unfreezing more of them.

The two risks pull in opposite directions, and the bottom-left cell is where they conflict. The resolution — freeze early, retrain late — works because the two risks apply to different *parts* of the network: the early layers are the ones that transfer, so freezing them costs nothing against mismatch while buying everything against overfitting.

## Worked examples

**Example 1 — adapting a ResNet-50 to 10 classes, three ways.**

The pretrained model has about 25.6 million parameters, of which the 1000-class head is $2048 \times 1000 + 1000 = 2{,}049{,}000$, leaving a backbone of roughly 23.5 million.

| Strategy | Trainable parameters | Share of model |
|---|---|---|
| Feature extraction (new head only) | $2048(10)+10 = 20{,}490$ | 0.08% |
| Fine-tune last residual stage + head | $\approx 15{,}000{,}000$ | 59% |
| Fine-tune everything | $23{,}571{,}490$ | 92% |

With **500 training images**, the first row is the right choice and the third is close to guaranteed overfitting: 23 million parameters against 500 examples, even with augmentation, is a memorisation machine.

With **50,000 images**, the third row wins, at a learning rate of perhaps $10^{-4}$ against the $10^{-1}$ the model was originally trained with.

The second row is the usual compromise and is worth noticing for a structural reason: ResNet-50's last residual stage holds most of the backbone's parameters, because channels double as spatial size halves ([2.2](02-02-building-a-convolutional-network.md)) and the $k^{2}C_{\text{in}}C_{\text{out}}$ cost is quadratic in channels. **"Unfreeze the last stage" is not a small change** — it unfreezes the majority of the weights, which surprises people who expect it to be a mild step between the other two.

**Example 2 — a transfer that goes wrong, and the diagnosis.**

A team fine-tunes an ImageNet ResNet-50 on 800 chest X-rays. They unfreeze everything, use the original learning rate of $0.1$, and report that training loss falls to near zero within three epochs while validation accuracy is 52 percent — barely above chance on a balanced binary task.

Three things are wrong and they compound:

**The learning rate is 1000 times too large for this job.** At $\eta = 0.1$ the first few steps move the pretrained weights a long way, so the carefully learned edge and texture filters are destroyed before the 800 examples can teach anything. This is catastrophic forgetting, and its signature is that the model performs worse than a frozen-backbone linear probe would have.

**The head was randomly initialized and not trained first.** On step one it produces meaningless outputs and therefore large gradients, which flow straight through the unfrozen backbone. The damage is worst at the very beginning, when the pretrained features are most valuable.

**800 examples against 23 million trainable parameters** is the overfitting regime of [1.7](01-07-regularization.md), and the near-zero training loss with chance-level validation is exactly the diagnostic pattern that lesson describes.

The corrected procedure:

1. Replace the head, freeze the backbone, and train the head alone for a few epochs. This alone often reaches respectable accuracy and gives a baseline the rest must beat.
2. Unfreeze the last stage, drop the learning rate to $10^{-4}$, and continue.
3. Keep frozen batch-norm layers in **evaluation mode**, so the backbone's function does not drift.
4. Augment aggressively — but only with label-preserving transformations. On chest X-rays a horizontal flip is *not* label-preserving in general, since organ laterality matters, which is the [1.7](01-07-regularization.md) point about augmentation being domain knowledge.

The domain caveat worth stating: X-rays are a genuinely different domain from ImageNet photographs — greyscale, different statistics, different scale of relevant structure. Transfer still helps, measurably, because the early layers are generic. But this is the bottom-left cell of the matrix, not the top-left, and the strategy should be chosen accordingly.

## Watch out

- You might think freezing the parameters freezes the model. For batch-norm layers it does not: in training mode they recompute batch statistics from the new data and the backbone's function changes. Freeze the parameters *and* set those layers to evaluation mode.
- You might think fine-tuning at the original learning rate is fine because it worked before. It worked with a million examples and a random initialization. With a thousand examples and a good initialization, the same rate destroys what you were trying to reuse.
- You might think a distant domain means you should fine-tune more aggressively. With little data it means the opposite: freeze the early layers, which transfer regardless of domain, and spend your limited data on the later ones.

## One-liner

> Early layers learn features that transfer everywhere and late layers learn the task, so adaptation is mostly a decision about how much to freeze — and the answer is set by how much data you have, not by how different your problem feels.

## Problems

**P1 (🟢)** A pretrained backbone outputs a 1280-dimensional pooled feature. You attach a head for a 5-class problem. (a) Give the number of trainable parameters under feature extraction. (b) You have 300 labelled examples. State whether this is a sensible ratio and give one sentence of justification. (c) State what you would do differently with 300,000 examples.

**P2 (🟡)** A team fine-tunes an ImageNet model on satellite imagery with 2,000 examples, unfreezing everything at learning rate $10^{-2}$. Training loss reaches 0.01; validation accuracy is poor. (a) Name the two distinct failures and say which cell of the decision matrix they are in. (b) Give a corrected three-step procedure. (c) State the one non-obvious thing to check about the frozen layers.

**P3 (🔴, optional)** A single 7-billion-parameter model must be specialised for 40 different customers. (a) Give the storage cost of 40 fully fine-tuned copies at 2 bytes per parameter. (b) With LoRA at rank $r = 16$ applied to the query and value projections of 32 layers, each $4096\times4096$, give the parameters per adapter and the storage for 40 of them. (c) State the serving advantage beyond storage, and one thing full fine-tuning can do that a low-rank adapter cannot.

<details>
<summary>Solutions</summary>

**P1** (a) A linear head from 1280 features to 5 classes:

$$1280 \times 5 + 5 = \mathbf{6{,}405} \text{ trainable parameters}.$$

(b) **Yes, this is a sensible ratio.** 300 examples against 6,405 parameters is still more parameters than examples, but the model is a linear classifier on fixed features — the hypothesis class is small, the optimization is convex, and it is exactly the regime where [`machine-learning` 1.4](../../machine-learning/lessons/01-04-regularization-ridge-and-lasso.md)'s ridge penalty controls things reliably. A modest weight decay makes it safe. Fine-tuning the backbone instead would put millions of parameters against 300 examples, which is not.

(c) With 300,000 examples, **fine-tune the whole backbone** at a low learning rate, perhaps $10^{-4}$, after first training the head for an epoch or two. At that data scale the frozen features become the limiting factor rather than the safeguard: there is enough signal to improve the representation itself, and leaving it fixed leaves accuracy on the table. This is the top-right or bottom-right cell depending on how far satellite-style data sits from the pretraining domain.

**P2** (a) Two distinct failures:

- **Catastrophic forgetting.** At $\eta = 10^{-2}$ on a pretrained model, the first steps move the weights far enough to destroy the pretrained features. The signature is that the fine-tuned model does worse than a frozen-backbone linear probe would.
- **Overfitting.** 2,000 examples against roughly 23 million unfrozen parameters, with training loss at 0.01 — the model has memorised the training set, which is [1.7](01-07-regularization.md)'s classic large-gap pattern.

The cell is **little data, different domain** — bottom-left. Satellite imagery differs from ImageNet photographs in viewpoint, scale, and often in the number of spectral bands, but 2,000 examples is firmly in the little-data column. The matrix's answer is *freeze the early layers and retrain the later ones*, which is the opposite of what the team did on both counts.

(b) Corrected procedure:

1. **Replace the head; freeze the entire backbone; train the head for several epochs** at a normal learning rate, say $10^{-3}$. Record the accuracy — this is the baseline everything else must beat, and it is often surprisingly hard to beat with 2,000 examples.
2. **Unfreeze the last stage only**, drop the learning rate to $10^{-4}$ or lower, and continue with strong augmentation and weight decay.
3. **Stop on validation accuracy** ([1.7](01-07-regularization.md)), and if step 2 does not beat step 1's baseline, keep step 1's model. Reverting is a legitimate outcome, and it is the one the decision matrix predicts for this cell.

(c) The non-obvious check: **the frozen batch-norm layers must be in evaluation mode.** Freezing their $\gamma$ and $\beta$ parameters is not enough — in training mode the layer still recomputes the batch mean and variance from the incoming satellite images, which have entirely different statistics from ImageNet photographs, so the "frozen" backbone computes a different function from the one whose weights you preserved. The symptom is that a frozen-backbone run produces different features on the same input depending on what else is in the batch, and accuracy that wanders between epochs for no visible reason.

**P3** (a) Full fine-tuning stores a complete copy of the model per customer:

$$40 \times 7\times10^{9} \times 2\ \text{bytes} = 5.6\times10^{11}\ \text{bytes} = \mathbf{560\ \text{GB}}.$$

(b) LoRA on two projections per layer, 32 layers, each matrix $4096\times4096$ at rank 16. Per matrix the adapter is $2dr = 2 \times 4096 \times 16 = 131{,}072$ parameters, and there are $2 \times 32 = 64$ such matrices:

$$64 \times 131{,}072 = 8{,}388{,}608 \approx \mathbf{8.4\ \text{million parameters per adapter}},$$

which is **0.12 percent** of the base model. At 2 bytes each:

$$40 \times 8.4\times10^{6} \times 2 = 6.7\times10^{8}\ \text{bytes} \approx \mathbf{0.67\ \text{GB}},$$

against 560 GB — a factor of about **830**, plus one shared 14 GB base model.

(c) **The serving advantage is that all 40 customers share one set of base weights in memory.** A server loads the 14 GB base model once and swaps a 17 MB adapter per request, so 40 specialisations fit on hardware that could hold two fully fine-tuned copies. Batched inference can even mix requests for different adapters, which is impossible with separate full models. The adapters can also be merged into the base weights when a single specialisation is deployed alone, giving zero inference overhead.

What full fine-tuning can do that a rank-16 adapter cannot: **change the model by more than a rank-16 correction per matrix.** If the new task requires genuinely different features — a new language, a new modality, a domain the base model never saw — the low-rank constraint is a real limit, and empirically LoRA matches full fine-tuning on tasks close to the pretraining distribution and falls short on distant ones. It also cannot change what is not adapted: layers left untouched, the embedding matrix, or the vocabulary. The trade is the same one this whole lesson is about — **constrain the adaptation to the amount of change the task actually needs, and pay for no more.**

</details>

## Flashback

**From Lesson 2.2 (building a convolutional network):** A pretrained backbone was trained at $224\times224$ and is being applied to $384\times384$ images with global average pooling and a new head. (a) State whether the backbone runs at all and what the feature map size becomes. (b) State what changes about the receptive field relative to the objects. (c) Give the standard remedy.

<details>
<summary>Solution</summary>

(a) **It runs.** Convolutional parameters do not depend on spatial size ([2.1](02-01-the-convolution-operation.md)), and global average pooling reduces whatever map it receives to one number per channel ([2.2](02-02-building-a-convolutional-network.md)). A ResNet downsamples by a factor of 32, so the final feature map goes from $7\times7$ at $224$ to

$$384/32 = 12, \qquad \mathbf{12\times12\times C}.$$

The pooled feature is $C$-dimensional either way, so the head is unaffected.

(b) The **receptive fields are unchanged in pixels** — they are a property of the architecture, computed by [2.2](02-02-building-a-convolutional-network.md)'s recursion — while the **objects are now larger in pixels** by a factor of $384/224 = 1.7$.

So every learned feature is being applied at the wrong scale. A filter tuned to an edge spanning 3 pixels now sees an edge spanning 5; a unit whose receptive field covered a whole object now covers a third of it. The features still fire, because natural images have structure at many scales, but they fire less selectively, and accuracy typically drops.

(c) Two standard remedies, usually combined:

- **Fine-tune at the target resolution**, even briefly. A few epochs at $384$ with a low learning rate re-tunes the filters to the new scale and usually recovers the loss and then some — models fine-tuned at higher resolution often beat their $224$ versions outright.
- **Train with scale augmentation** in the first place — random resized crops across a range of scales — so the backbone is never tuned to a single object size. This is standard practice precisely because it makes the resulting backbone transfer across resolutions.

One thing to carry over from [2.1](02-01-the-convolution-operation.md)'s flashback: at $384$ each kernel is applied at $(384/224)^{2} \approx 2.9$ times as many positions, so its accumulated gradient is correspondingly larger. The learning rate for the fine-tuning run should be re-checked rather than inherited.

</details>

## Connections

- **Backward:** transfer works because the backbone's parameters are independent of input size ([2.1](02-01-the-convolution-operation.md)) and because depth produces a hierarchy of increasingly specific features ([2.2](02-02-building-a-convolutional-network.md), [2.3](02-03-deep-architectures-and-residual-connections.md)); the choice of how much to unfreeze is [1.7](01-07-regularization.md)'s capacity-versus-data trade in a new costume.
- **Forward:** [4.5](04-05-llms-self-supervision-and-scaling-laws.md) is this lesson at a different scale — pretrain on a large unlabelled corpus, adapt cheaply — and LoRA is the parameter-efficient method that makes adaptation of a very large model routine.
- **Sideways:** freezing a backbone and fitting a linear head is exactly [`machine-learning` 1.5](../../machine-learning/lessons/01-05-logistic-regression-and-classification.md)'s logistic regression on engineered features, with the engineering done by a network instead of a person; the decision matrix is a bias–variance judgement of the kind [`statistical-learning` 1.2](../../statistical-learning/lessons/01-02-the-bias-variance-decomposition.md) formalises.
