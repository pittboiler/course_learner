# Deep Learning · Lesson 2.1: The convolution operation

> ⏱ ~15 min · Module 2: Convolutional networks · Builds on: [1.1 (from linear models to the MLP)](01-01-from-linear-models-to-the-mlp.md), [1.3 (backpropagation and automatic differentiation)](01-03-backpropagation-and-automatic-differentiation.md) · Unlocks: [2.2 (building a convolutional network)](02-02-building-a-convolutional-network.md)

## Why this matters

[1.1](01-01-from-linear-models-to-the-mlp.md) counted the parameters of a dense layer and found that the first layer dominates: 784 inputs times 256 units was three-quarters of the whole network. On a real image the arithmetic is far worse. A dense layer from a $32\times32$ colour image to a same-sized 16-channel feature map needs **50 million weights** — for one layer, on a tiny image.

Convolution replaces it with **448**.

The saving does not come from a clever factorisation. It comes from two assumptions about the data, both of which are true of images and neither of which is true in general: that what matters is *local*, and that a feature worth detecting in one place is worth detecting everywhere. Convolution is those two assumptions written as a constraint on a dense layer, and this lesson is about what they buy and what they cost.

## The idea

Start from a dense layer and take two things away.

**Locality.** Instead of connecting every output to every input, connect each output only to a small patch — say $3\times3$ — of the input around its own position. Most of the weights are gone, and the ones that remain are the ones that connect things that are near each other.

**Weight sharing.** Now notice that the patch at the top-left and the patch at the bottom-right are looking for the same kinds of things: edges, corners, textures. So use the **same** nine weights at every position. That collapses the remaining weights down to one small kernel.

What is left is a kernel that slides across the input, computing a dot product at each position. That is convolution — or strictly cross-correlation, since deep learning conventionally omits the kernel flip that [`signals-systems` 1.5](../../signals-systems/lessons/01-05-convolution-discrete-time.md) includes. The distinction is immaterial when the kernel is learned: flipping it just relabels which weight is which, and gradient descent finds whichever orientation works.

The property this buys is **translation equivariance**: shift the input and the output shifts identically. A dense layer has no such guarantee — it would have to learn the same feature separately for every position, from separate examples, with separate weights.

Three knobs control the geometry. **Stride** is how far the kernel moves between positions; stride 2 halves the output size. **Padding** adds a border of zeros so the output can keep the input's size. **Channels** are the depth: a kernel spans all input channels at once, and you have one kernel per output channel.

## The formal version

> **2-D convolution (cross-correlation).** For input $X$ with $C_{\text{in}}$ channels and a kernel $W$ of size $K \times K$,
> $$Y[c_{\text{out}}, i, j] = b[c_{\text{out}}] + \sum_{c=0}^{C_{\text{in}}-1}\ \sum_{u=0}^{K-1}\ \sum_{v=0}^{K-1} W[c_{\text{out}}, c, u, v]\; X[c,\ iS+u-P,\ jS+v-P],$$
> with stride $S$ and padding $P$.

In words: at each output position, take the patch of the input under the kernel — across **all** input channels — multiply elementwise, and sum. Do that once per output channel, with a different kernel each time.

> **Output size.**
> $$H_{\text{out}} = \left\lfloor \frac{H_{\text{in}} + 2P - K}{S} \right\rfloor + 1.$$

The cases worth memorising:

| $K$ | $S$ | $P$ | Effect |
|---|---|---|---|
| 3 | 1 | 1 | size preserved ("same" padding) |
| 3 | 1 | 0 | shrinks by 2 |
| 3 | 2 | 1 | halves |
| 1 | 1 | 0 | size preserved, mixes channels only |
| 7 | 2 | 3 | halves, large receptive field (a common first layer) |

**Same padding** for odd $K$ is $P = (K-1)/2$, which is why odd kernel sizes dominate: they have a well-defined centre and an exact size-preserving padding.

> **Parameter count.**
> $$\#\text{params} = K^{2}\,C_{\text{in}}\,C_{\text{out}} + C_{\text{out}}.$$

**The spatial size does not appear.** A $3\times3$ convolution costs the same on a $32\times32$ image as on a $4000\times4000$ one — the *compute* scales with area, the *parameters* do not. That is the single most important consequence of weight sharing and it is what makes convolutional networks transfer across resolutions ([2.4](02-04-transfer-learning-and-fine-tuning.md)).

> **Compute cost.**
> $$\#\text{multiply-adds} = H_{\text{out}} W_{\text{out}}\, K^{2}\, C_{\text{in}}\, C_{\text{out}}.$$

> **Equivariance.** Writing $T_\delta$ for a shift by $\delta$, convolution satisfies $\mathrm{Conv}(T_\delta X) = T_\delta\,\mathrm{Conv}(X)$ (away from the boundary).

Equivariance is not invariance. **The feature map moves with the object**; it does not ignore the move. Invariance comes later, from pooling and from the final global operation ([2.2](02-02-building-a-convolutional-network.md)), and the two are often confused.

> **The $1\times1$ convolution.** With $K=1$ the operation touches one spatial position at a time and mixes only channels: it is a dense layer applied identically at every pixel, with $C_{\text{in}}C_{\text{out}} + C_{\text{out}}$ parameters.

It looks pointless and is used constantly — to change the channel count cheaply before an expensive $3\times3$ (the bottleneck block of [2.3](02-03-deep-architectures-and-residual-connections.md)), and to add a nonlinearity per position without touching the spatial structure.

> **Gradients.** The kernel is used at every output position, so by [1.3](01-03-backpropagation-and-automatic-differentiation.md)'s accumulation rule its gradient is the **sum** over all positions:
> $$\bar W[c_{\text{out}},c,u,v] = \sum_{i,j} \bar Y[c_{\text{out}},i,j]\; X[c, iS+u-P, jS+v-P].$$

This is Example 2 of [1.3](01-03-backpropagation-and-automatic-differentiation.md) at scale: one parameter, thousands of uses, one summed gradient. A $3\times3$ kernel on a $224\times224$ map collects 50,176 contributions per step, which is why convolutional kernels see large gradients and why the layers around them rely on normalization ([1.6](01-06-normalization.md)).

## Picture

![A diagram in three parts. On the left, a four by four grid of input values with two overlapping three by three windows outlined, one solid and one dashed. In the middle, a single three by three kernel of weights, with arrows from both input windows pointing into it, annotated as reused at every window. On the right, the resulting two by two output grid, with the entries corresponding to the two highlighted windows picked out in matching colours. Captions below compare fifty million weights for a dense layer against four hundred and forty-eight for the convolution.](assets/02-01-fig1.svg)

Both arrows point into the **same** kernel. That is the entire mechanism: the top-left window and the centre window are processed by identical weights, so whatever feature those nine numbers detect is detected everywhere, and it is learned from every position in every training image at once.

A dense layer would have a separate set of weights for each window. It would have to see a cat in the top-left corner to learn that cats can appear in the top-left corner. **Weight sharing is a statement that position is not informative about identity**, and it is worth asking, for any new data type, whether that statement is true before reaching for a convolution.

## Worked examples

**Example 1 — a convolution by hand.**

Input $4\times4$, one channel, kernel $3\times3$, stride 1, no padding, so the output is $2\times2$ by the formula $\lfloor(4-3)/1\rfloor + 1 = 2$.

$$X = \begin{pmatrix}1&2&3&0\\0&1&2&3\\3&0&1&2\\2&3&0&1\end{pmatrix}, \qquad W = \begin{pmatrix}1&0&-1\\1&0&-1\\1&0&-1\end{pmatrix}.$$

The kernel subtracts the right column from the left, so it responds to **vertical intensity changes**.

Top-left output: the patch is rows 0–2, columns 0–2.

$$(1 - 3) + (0 - 2) + (3 - 1) = -2 - 2 + 2 = -2.$$

Bottom-left: rows 1–3, columns 0–2.

$$(0-2) + (3-1) + (2-0) = -2 + 2 + 2 = 2.$$

Completing all four:

$$Y = \begin{pmatrix}-2 & -2\\ 2 & -2\end{pmatrix}.$$

Note that the same nine weights produced all four numbers, and that a shift of the input by one pixel would shift the output by one position rather than changing it — equivariance, visible at this scale.

**Example 2 — the parameter saving, priced.**

Take a $32\times32\times3$ image and a layer producing a $32\times32\times16$ feature map.

*Dense.* Every one of the $32 \times 32 \times 16 = 16{,}384$ outputs connects to every one of the $32\times32\times3 = 3{,}072$ inputs:

$$3{,}072 \times 16{,}384 = 50{,}331{,}648 \text{ weights}.$$

*Convolutional*, $3\times3$ with same padding:

$$3^{2} \times 3 \times 16 + 16 = 432 + 16 = 448 \text{ parameters}.$$

**A factor of 112,000.** And the convolutional layer is not merely smaller; it is *better*, because the constraint it imposes is true of images. The dense layer would spend its 50 million weights learning, separately for each of 1,024 positions, that an edge is an edge.

The compute tells a different story, and the difference is worth internalising:

$$\text{multiply-adds} = 32 \times 32 \times 3^{2} \times 3 \times 16 = 442{,}368.$$

The dense layer needs 50 million. So convolution saves a factor of 112,000 in **memory** and only 114 in **arithmetic** — because each of its few parameters is reused at 1,024 positions. **Convolutional networks are parameter-light and compute-heavy**, which is exactly the shape that suits accelerators, and it is why they scaled to large images while dense networks did not.

One caution on reading these numbers: the saving comes from the *assumptions*, not from the operation. Apply a convolution to data where position is meaningful — a fixed-schema table where column 3 is age and column 4 is postcode — and weight sharing forces the model to treat those columns identically, which is simply wrong.

## Watch out

- You might think convolution here is the convolution of [`signals-systems` 1.5](../../signals-systems/lessons/01-05-convolution-discrete-time.md). It is cross-correlation: the kernel is not flipped. For a *learned* kernel this is a relabelling and nothing more, but it matters when you hand-build a kernel from a signal-processing reference or compare against an analytical filter.
- You might think convolution makes a network translation-invariant. It makes it **equivariant** — the features move with the input. Invariance requires a pooling or aggregation step that discards position, and a plain convolutional stack with a flatten at the end is not invariant at all.
- You might think a bigger kernel is the way to see more context. It is the expensive way: parameters grow as $K^{2}$. Two stacked $3\times3$ convolutions have the same receptive field as one $5\times5$, with $2 \times 9 = 18$ weights per channel pair instead of 25, and an extra nonlinearity in between ([2.2](02-02-building-a-convolutional-network.md)).

## One-liner

> Convolution is a dense layer with two constraints — look only nearby, and use the same weights everywhere — which costs a hundred thousand times fewer parameters and is correct exactly when those two assumptions are.

## Problems

**P1 (🟢)** Compute the output size for each configuration. (a) $H = 32$, $K = 5$, $S = 1$, $P = 0$. (b) $H = 32$, $K = 5$, $S = 1$, $P = 2$. (c) $H = 224$, $K = 7$, $S = 2$, $P = 3$. (d) $H = 28$, $K = 3$, $S = 2$, $P = 0$. Then give the padding that preserves size for $K = 7$, $S = 1$.

**P2 (🟡)** A layer takes a $64\times64\times128$ feature map to a $64\times64\times256$ one. (a) Give the parameter count and the multiply-add count for a $3\times3$ convolution with same padding. (b) Do the same for a $1\times1$ convolution. (c) A "bottleneck" replaces the $3\times3$ with three layers: $1\times1$ to 64 channels, $3\times3$ at 64 channels, $1\times1$ back to 256. Give its total parameters and compare.

**P3 (🔴, optional)** A team applies a 1-D convolution with a kernel of width 5 along the feature axis of a tabular dataset whose 40 columns are unrelated measurements — age, income, postcode, blood pressure, and so on — in the order they appeared in the source file. (a) State the two assumptions convolution makes and evaluate each against this data. (b) Predict what the model will and will not be able to learn. (c) Name the architecture that is appropriate and say what it shares across positions instead.

<details>
<summary>Solutions</summary>

**P1** Using $H_{\text{out}} = \lfloor (H + 2P - K)/S\rfloor + 1$:

(a) $\lfloor(32 + 0 - 5)/1\rfloor + 1 = 27 + 1 = \mathbf{28}$.

(b) $\lfloor(32 + 4 - 5)/1\rfloor + 1 = 31 + 1 = \mathbf{32}$ — size preserved, as expected since $P = (K-1)/2 = 2$.

(c) $\lfloor(224 + 6 - 7)/2\rfloor + 1 = \lfloor 223/2\rfloor + 1 = 111 + 1 = \mathbf{112}$. This is the standard first layer of a ResNet on ImageNet.

(d) $\lfloor(28 + 0 - 3)/2\rfloor + 1 = \lfloor 12.5 \rfloor + 1 = 12 + 1 = \mathbf{13}$. Note the floor: with no padding and stride 2, one column and row of the input are simply not covered.

Size-preserving padding for $K = 7$, $S = 1$: $P = (K-1)/2 = \mathbf{3}$.

**P2** (a) $3\times3$, $C_{\text{in}} = 128$, $C_{\text{out}} = 256$:

$$\text{params} = 9 \times 128 \times 256 + 256 = 294{,}912 + 256 = \mathbf{295{,}168}.$$

$$\text{multiply-adds} = 64 \times 64 \times 9 \times 128 \times 256 = \mathbf{1.208 \times 10^{9}}.$$

(b) $1\times1$:

$$\text{params} = 1 \times 128 \times 256 + 256 = \mathbf{33{,}024}, \qquad \text{mult-adds} = 64^{2} \times 128 \times 256 = \mathbf{1.342\times10^{8}}.$$

Nine times cheaper on both counts, as the $K^{2}$ factor predicts.

(c) The bottleneck, layer by layer:

| Layer | Params |
|---|---|
| $1\times1$, $128 \to 64$ | $128 \times 64 + 64 = 8{,}256$ |
| $3\times3$, $64 \to 64$ | $9 \times 64 \times 64 + 64 = 36{,}928$ |
| $1\times1$, $64 \to 256$ | $64 \times 256 + 256 = 16{,}640$ |
| **Total** | **61,824** |

Against 295,168 for the plain $3\times3$ — a **4.8-fold reduction**, with the same input and output shapes and the same $3\times3$ spatial receptive field.

The trick is that the expensive $K^{2}C_{\text{in}}C_{\text{out}}$ term is paid at 64 channels instead of at 128 and 256, and the two $1\times1$ layers that squeeze and expand are cheap because they have no spatial extent. This is exactly the bottleneck design of deeper ResNets ([2.3](02-03-deep-architectures-and-residual-connections.md)), and it buys two extra nonlinearities as well.

**P3** (a) The two assumptions:

- **Locality: neighbouring inputs are related.** **False here.** Column adjacency is an artefact of how the source file was written. Age and income sitting next to each other means nothing, and reordering the columns would change the model — which is a decisive sign that the inductive bias is wrong.
- **Weight sharing: the same detector is useful at every position.** **False here.** The relationship that matters for blood pressure is not the relationship that matters for postcode, and forcing one kernel to serve both means the model cannot treat them differently.

(b) The model **can** learn something — a width-5 kernel sliding over 40 columns still produces features that a downstream dense layer can use, and with enough capacity above it the network will fit. What it **cannot** do is learn a per-column transformation, which is precisely what this data needs. Expect it to train, to underperform a plain dense network on the same data, and to change its accuracy when the columns are shuffled — the last being the diagnostic that names the problem.

(c) The appropriate architecture is a **plain multilayer perceptron** ([1.1](01-01-from-linear-models-to-the-mlp.md)) with a dense first layer, which imposes no relationship between columns and gives each its own weights. With 40 features the parameter count is trivial, so there is nothing to save.

What a dense layer shares instead is **nothing across positions and everything across examples**: each of the 40 columns gets its own weight vector, and those weights are learned from all $n$ rows. That is the right sharing for this data. The general principle — and the reason this course spends a module each on convolution and attention — is that **an architecture is a hypothesis about which symmetries the data has**, and choosing one is choosing what to share. Convolution shares across space, recurrence shares across time ([3.1](03-01-rnns-and-backprop-through-time.md)), attention shares a content-based rule across all positions ([3.4](03-04-self-attention-queries-keys-values.md)), and a dense layer shares nothing.

(For tabular data specifically, gradient-boosted trees ([`machine-learning` 2.7](../../machine-learning/lessons/02-07-boosting.md)) usually beat any of these, which is worth knowing before reaching for a network at all.)

</details>

## Flashback

**From Lesson 1.3 (backpropagation and automatic differentiation):** A $3\times3$ kernel with one input and one output channel is applied to a $224\times224$ input with same padding. (a) Give the number of positions at which each weight is used, and therefore the number of contributions its gradient accumulates. (b) State what this implies about the magnitude of the kernel's gradient relative to a dense layer's weight gradient, and name one consequence for training.

<details>
<summary>Solution</summary>

(a) With same padding the output is also $224\times224$, so each of the nine weights is used at

$$224 \times 224 = 50{,}176$$

output positions. By the accumulation rule of [1.3](01-03-backpropagation-and-automatic-differentiation.md) — a node with many consumers sums what all of them send back — each weight's gradient is a **sum of 50,176 terms**.

(b) A dense layer's weight connects exactly one input to one output, so its gradient is a single term per example. The convolutional kernel's gradient is a sum of tens of thousands. If the individual terms were comparable in size and uncorrelated, the sum would be larger by roughly $\sqrt{50{,}176} \approx 224$; if they are positively correlated, which they are for natural images where neighbouring patches look alike, the sum is larger still — up to the full factor of 50,176 in the extreme.

Consequences for training:

- **Convolutional layers need a different effective step size from dense layers in the same network.** A single global learning rate will either overshoot on the kernels or crawl on the dense head. This is precisely the situation Adam's per-coordinate normalization was built for ([1.5](01-05-adaptive-optimizers-schedules-and-initialization.md)): it divides by the running gradient magnitude, so the 50,176-fold difference is normalised away and one $\eta$ serves both.
- **It is part of why normalization layers matter so much in convolutional networks** ([1.6](01-06-normalization.md)): with the scale of each layer's weights decoupled from its function, a large kernel gradient translates into a controlled change in the layer's behaviour rather than an uncontrolled one.
- **The gradient's magnitude depends on the input resolution**, since the number of positions does. A model trained at $224\times224$ and fine-tuned at $448\times448$ sees kernel gradients four times larger for the same content, which is a real reason to re-tune the learning rate when changing resolution.

</details>

## Connections

- **Backward:** convolution is [1.1](01-01-from-linear-models-to-the-mlp.md)'s dense layer with locality and sharing imposed, and its gradient is [1.3](01-03-backpropagation-and-automatic-differentiation.md)'s shared-weight accumulation with tens of thousands of terms.
- **Forward:** [2.2](02-02-building-a-convolutional-network.md) stacks these layers and tracks shapes and receptive fields through the stack; [2.3](02-03-deep-architectures-and-residual-connections.md) uses the $1\times1$ bottleneck priced in P2 to build very deep networks affordably.
- **Sideways:** the discrete convolution itself, with the kernel flip and the convolution theorem, is [`signals-systems` 1.5](../../signals-systems/lessons/01-05-convolution-discrete-time.md); the observation that an architecture encodes a symmetry assumption is the inductive-bias framing of [`statistical-learning` 1.4](../../statistical-learning/lessons/01-04-no-free-lunch-and-inductive-bias.md), and convolution is the clearest example in the library of no free lunch being paid for deliberately.
