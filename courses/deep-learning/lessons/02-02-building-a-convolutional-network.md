# Deep Learning · Lesson 2.2: Building a convolutional network

> ⏱ ~15 min · Module 2: Convolutional networks · Builds on: [2.1 (the convolution operation)](02-01-the-convolution-operation.md) · Unlocks: [2.3 (deep architectures and residual connections)](02-03-deep-architectures-and-residual-connections.md)

## Why this matters

One convolution sees a $3\times3$ patch. A classifier has to see a whole object. Getting from one to the other is what a convolutional *stack* does, and the arithmetic that governs it — output shapes, receptive fields, channel counts — is the most routinely useful calculation in the subject.

It is also the calculation that goes wrong quietly. A stack whose receptive field never reaches the size of the thing it is supposed to recognise will train, will report a plausible loss, and will be structurally incapable of the task. You cannot see that from the loss curve. You can see it in three lines of arithmetic, and this lesson is those three lines plus the design conventions they explain.

## The idea

Two things have to happen as you go up the stack: the **spatial** size has to come down, and the **channel** count has to go up.

Spatial size comes down by **pooling** or by **strided convolution**. Max pooling takes the largest value in each $2\times2$ window, halving both dimensions and keeping the strongest response. It has no parameters. Modern architectures often use a stride-2 convolution instead, which does the same downsampling with learnable weights.

Channels go up because as the spatial resolution falls, each position stands for a larger region and so needs to encode more. The convention is to **double the channels whenever you halve the spatial size**, which keeps the compute per layer roughly constant: area falls by 4, channel-pairs rise by 4.

The quantity that ties it together is the **receptive field** — how large a patch of the original input one unit can see. It grows by two mechanisms, and they are very different in strength.

A plain $3\times3$ convolution adds 2 to the receptive field. Six of them reach 13 pixels. That is **linear** growth and it is far too slow.

Downsampling changes the *rate*. After a stride-2 layer, every subsequent unit step covers two input pixels, so the next $3\times3$ convolution adds 4 instead of 2, then 8, then 16. **Downsampling makes receptive-field growth geometric**, and that is its real purpose — the compute saving is a bonus.

At the top, the feature map is flattened or, better, **globally average pooled**: average each channel over all positions, giving one number per channel. That is what converts equivariance into invariance, it removes the dependence on input size, and it eliminates the enormous dense layer that flattening would require.

## The formal version

> **Receptive field recursion.** Let $r_\ell$ be the receptive field after layer $\ell$ and $j_\ell$ the **jump** — the input-pixel spacing between adjacent units. With $r_0 = 1$, $j_0 = 1$:
> $$r_\ell = r_{\ell-1} + (k_\ell - 1)\,j_{\ell-1}, \qquad j_\ell = j_{\ell-1}\cdot s_\ell.$$

In words: each layer widens the view by $k-1$ *units of the current jump*, and each stride multiplies the jump. **The jump is what makes later layers cheap in receptive field**, and it only grows through striding.

> **Pooling.** Max pooling with window $k$ and stride $s$ outputs $\max$ over each window; average pooling outputs the mean. Both follow the same output-size formula as convolution and have **no parameters**.

> **Global average pooling.** Average each channel over all spatial positions: $H \times W \times C \to C$.

Three benefits, all of which matter. It has no parameters where a flatten-plus-dense would have many. It makes the network accept **any input size**, since the output is $C$ regardless of $H$ and $W$. And it forces each channel to correspond to something whose average presence is meaningful, which is a mild but real regularizer.

> **A canonical stack.** For a $32\times32$ input:

| Layer | $k$, $s$ | Output spatial | Receptive field | Jump |
|---|---|---|---|---|
| input | — | 32 | 1 | 1 |
| conv $3\times3$ | 3, 1 | 32 | 3 | 1 |
| conv $3\times3$ | 3, 1 | 32 | 5 | 1 |
| max pool | 2, 2 | 16 | 6 | 2 |
| conv $3\times3$ | 3, 1 | 16 | 10 | 2 |
| conv $3\times3$ | 3, 1 | 16 | 14 | 2 |
| max pool | 2, 2 | 8 | 16 | 4 |
| conv $3\times3$ | 3, 1 | 8 | 24 | 4 |
| conv $3\times3$ | 3, 1 | 8 | **32** | 4 |

**The last row is the design target.** After six convolutions and two pools, one unit sees the entire $32\times32$ input — exactly, not approximately. Six convolutions with no pooling would have reached 13.

> **Stacking small kernels.** Two $3\times3$ convolutions have the same $5\times5$ receptive field as one $5\times5$, with $2(9) = 18$ weights per channel pair instead of 25, and an extra nonlinearity between them. Three $3\times3$ match one $7\times7$: 27 weights against 49.

This is the VGG argument, and it is why $3\times3$ became the near-universal kernel size. **Depth is a cheaper way to buy receptive field than width of kernel.**

> **The channel-doubling convention.** Halving spatial size divides the multiply-add count by 4; doubling channels multiplies it by 4. Holding both together keeps per-layer compute roughly flat across the stack.

> **Parameter and compute counts** (from [2.1](02-01-the-convolution-operation.md)):
> $$\#\text{params} = k^{2}C_{\text{in}}C_{\text{out}} + C_{\text{out}}, \qquad \#\text{mult-adds} = H_{\text{out}}W_{\text{out}}\,k^{2}C_{\text{in}}C_{\text{out}}.$$

A structural fact worth knowing: in a classic convolutional network, **most of the parameters are in the dense head and most of the compute is in the early convolutions.** Early layers work on large maps with few channels (cheap in parameters, expensive in arithmetic); the final dense layer sees a flattened map with no sharing at all (expensive in parameters, cheap in arithmetic). Global average pooling exists to delete the second half of that sentence.

## Picture

![A stacked diagram with one horizontal line per layer, labelled from input at the top through alternating convolution and pooling layers. On each line a thick segment centred in the middle shows the receptive field of one output unit, measured against the thirty-two-pixel input axis. The segment grows slowly through the first two convolutions, then accelerates after each pooling layer, until on the final row it spans the entire input. Annotations give the receptive field and feature map size for each row, and the recursion for the receptive field and the jump.](assets/02-02-fig1.svg)

Watch the thick segment grow. Through the first two convolutions it adds 2 each time. After the first pool it adds 4 each time, after the second 8. **The acceleration is entirely due to the jump**, and the jump only changes when you downsample.

That is the design lesson: if your receptive field is too small, adding more $3\times3$ convolutions is the expensive fix. Adding a downsampling step, or dilating the convolutions, changes the growth rate rather than adding a constant.

## Worked examples

**Example 1 — a full stack, shapes and parameters.**

A $32\times32\times3$ image through: conv ($5\times5$, 16 filters, stride 1, no padding) → $2\times2$ max pool → conv ($3\times3$, 32 filters, stride 1, padding 1) → $2\times2$ max pool → flatten → dense to 10.

*Shapes.* First convolution: $\lfloor(32-5)/1\rfloor + 1 = 28$, so $28\times28\times16$. Pool: $14\times14\times16$. Second convolution with padding 1: $\lfloor(14+2-3)/1\rfloor+1 = 14$, so $14\times14\times32$. Pool: $7\times7\times32$. Flatten: $7 \times 7 \times 32 = 1{,}568$.

*Parameters.*

| Layer | Count |
|---|---|
| conv 1 | $5^{2}\cdot3\cdot16 + 16 = 1{,}216$ |
| conv 2 | $3^{2}\cdot16\cdot32 + 32 = 4{,}640$ |
| dense | $1{,}568 \cdot 10 + 10 = 15{,}690$ |
| **Total** | **21,546** |

*Receptive field of a unit in the second convolution.* Apply the recursion: after conv 1, $r = 1 + 4(1) = 5$ with $j = 1$; after the pool, $r = 5 + 1(1) = 6$ with $j = 2$; after conv 2, $r = 6 + 2(2) = \mathbf{10}$.

*The comparison that matters.* A single dense layer straight from the raw image to 10 outputs needs

$$32 \cdot 32 \cdot 3 \cdot 10 + 10 = 30{,}730 \text{ parameters}$$

— **more than the entire convolutional network above**, and it can only ever compute a linear function of the pixels. Convolution bought a genuinely nonlinear, hierarchical model for fewer parameters than one linear layer.

Notice also where the parameters sit: the dense head is 73 percent of the total, and the two convolutional layers together are 27 percent. Replace the flatten with global average pooling and the head becomes $32 \times 10 + 10 = 330$, cutting the network to 6,186 parameters — a 3.5-fold reduction with no change to the convolutional part.

**Example 2 — diagnosing a receptive field that is too small.**

A team builds a network for $224\times224$ medical images where the finding of interest spans roughly 60 pixels. Their stack is ten $3\times3$ convolutions with same padding and **no downsampling**, then global average pooling.

Receptive field after ten layers, with the jump staying at 1 throughout:

$$r = 1 + 10 \times 2 = 21 \text{ pixels}.$$

**Twenty-one pixels against a 60-pixel finding.** No unit in the network ever sees the whole thing. The model can detect local texture and will train to some non-trivial accuracy on correlated cues, but it structurally cannot represent the feature the task is about — and no amount of data or training fixes that.

Three repairs, in order of how much they change:

- **Add downsampling.** Inserting three stride-2 steps among the ten convolutions gives jumps of 1, 2, 4, 8 and a receptive field well past 200. Cheapest and standard.
- **Dilate the convolutions.** A dilation of $d$ makes a $3\times3$ kernel span $2d+1$ pixels, so the recursion becomes $r \mathrel{+}= (k-1)\,d\,j$ with no loss of resolution. This is what segmentation architectures do, where downsampling is costly because the output must be per-pixel.
- **Add more layers.** Reaching 60 pixels needs 30 convolutions, three times the depth for the same result. This is the expensive fix and the one teams reach for first.

**The diagnostic is worth making routine: compute the receptive field, compare it to the size of the thing you are trying to detect, and do it before training rather than after.**

## Watch out

- You might think more convolutional layers is the way to see more context. It adds a constant per layer. Changing the *jump*, by striding or dilating, changes the growth rate, and that is almost always the right lever.
- You might think max pooling and stride-2 convolution are interchangeable. They downsample identically, but pooling has no parameters and picks the strongest response, while a strided convolution learns what to keep. Modern architectures mostly prefer the latter; pooling survives where its parameter-free invariance is wanted.
- You might think flattening and global average pooling differ only in parameter count. Flattening ties the model to one input size and preserves position; global average pooling accepts any size and discards position. If your task needs to know *where* something is, averaging it away is a modelling error, not an efficiency win.

## One-liner

> Track three numbers up the stack — spatial size, channels, receptive field — and remember that only downsampling changes how fast the third one grows.

## Problems

**P1 (🟢)** An input of $64\times64\times3$ passes through: conv ($3\times3$, 32 filters, stride 1, padding 1) → conv ($3\times3$, 32 filters, stride 1, padding 1) → max pool $2\times2$ → conv ($3\times3$, 64 filters, stride 1, padding 1) → max pool $2\times2$. Give the spatial size and channel count after each stage, and the parameter count of each convolutional layer.

**P2 (🟡)** For the stack in P1, compute the receptive field and jump after every layer using the recursion. Then state the receptive field a unit in the final feature map has, and how many more $3\times3$ convolutions at that point would be needed to reach 64.

**P3 (🔴, optional)** A network ends with a $7\times7\times512$ feature map. Option A flattens and applies a dense layer to 1000 classes. Option B applies global average pooling and then a dense layer to 1000 classes. (a) Give both parameter counts. (b) State what each does with spatial position and name one task where A's choice is correct. (c) The team trains with option B at $224\times224$ and then evaluates at $448\times448$ without retraining. State whether this works, what the feature map size becomes, and one thing that degrades anyway.

<details>
<summary>Solutions</summary>

**P1** Shapes, using $\lfloor(H+2P-k)/s\rfloor+1$:

| Stage | Output |
|---|---|
| input | $64\times64\times3$ |
| conv $3\times3$, 32, $P=1$ | $64\times64\times32$ |
| conv $3\times3$, 32, $P=1$ | $64\times64\times32$ |
| max pool $2\times2$ | $32\times32\times32$ |
| conv $3\times3$, 64, $P=1$ | $32\times32\times64$ |
| max pool $2\times2$ | $16\times16\times64$ |

Parameters:

- conv 1: $9 \times 3 \times 32 + 32 = 864 + 32 = \mathbf{896}$
- conv 2: $9 \times 32 \times 32 + 32 = 9{,}216 + 32 = \mathbf{9{,}248}$
- conv 3: $9 \times 32 \times 64 + 64 = 18{,}432 + 64 = \mathbf{18{,}496}$

Total $28{,}640$, and the pooling layers contribute nothing. Note that conv 2 costs ten times conv 1 despite identical shape and kernel — the input channel count went from 3 to 32.

**P2** Applying $r_\ell = r_{\ell-1} + (k_\ell-1)j_{\ell-1}$ and $j_\ell = j_{\ell-1}s_\ell$:

| Layer | $k$ | $s$ | $r$ | $j$ |
|---|---|---|---|---|
| input | — | — | 1 | 1 |
| conv 1 | 3 | 1 | $1 + 2(1) = 3$ | 1 |
| conv 2 | 3 | 1 | $3 + 2(1) = 5$ | 1 |
| pool | 2 | 2 | $5 + 1(1) = 6$ | 2 |
| conv 3 | 3 | 1 | $6 + 2(2) = 10$ | 2 |
| pool | 2 | 2 | $10 + 1(2) = 12$ | 4 |

A unit in the final $16\times16\times64$ map has a receptive field of **12 pixels** out of 64, with a jump of 4.

To reach 64 from 12 with $3\times3$ convolutions at jump 4, each adds $(3-1)\times4 = 8$:

$$12 + 8n \ge 64 \implies n \ge 6.5 \implies n = \mathbf{7} \text{ more convolutions}.$$

Alternatively, one more pooling layer would raise the jump to 8, after which each convolution adds 16 and only four are needed — **the point of the lesson in one comparison**.

**P3** (a) *Option A, flatten and dense:*

$$7 \times 7 \times 512 = 25{,}088 \text{ inputs}, \qquad 25{,}088 \times 1000 + 1000 = \mathbf{25{,}089{,}000}.$$

*Option B, global average pool then dense:*

$$512 \text{ inputs}, \qquad 512 \times 1000 + 1000 = \mathbf{513{,}000}.$$

A factor of **49** — exactly the $7\times7$ that was averaged away.

(b) **Option A preserves position:** each of the 25,088 inputs is a specific channel at a specific location, and the dense layer can learn that "this feature in the top-left" means something different from the same feature at the bottom-right. **Option B discards position entirely**, keeping only "how much of each feature is present somewhere".

A task where A is correct: anything where **location is part of the label**. Predicting a bounding box, estimating a pose, or reading a fixed-layout document where the field's position identifies it. Also any task on data that is not translation-invariant — a chess board, where a piece's square is its meaning, is the clean example.

For ordinary object classification B is better and not merely cheaper: a cat is a cat wherever it is, so averaging over position is the correct invariance, and forcing the model to learn it from data instead wastes 25 million parameters on the attempt.

(c) **It works.** Global average pooling averages over whatever spatial extent it is given, so its output is 512 numbers regardless. At $448\times448$ the feature map becomes $14\times14\times512$ — the convolutional stack downsamples by the same factor of 32 — and the pooling reduces it to 512 as before. Option A would fail outright here, since the dense layer expects exactly 25,088 inputs and would receive 100,352.

What degrades anyway: **the objects are now twice as large in pixels relative to the network's receptive fields.** Every learned feature was tuned to a scale, and at double resolution an edge that spanned 3 pixels spans 6, a texture that filled a receptive field now fills a quarter of it. Accuracy typically drops unless the model was trained with scale augmentation or is fine-tuned at the new resolution. The related point from [2.1](02-01-the-convolution-operation.md)'s flashback: kernel gradients grow with the number of positions, so fine-tuning at the higher resolution also needs a re-tuned learning rate.

</details>

## Flashback

**From Lesson 2.1 (the convolution operation):** A designer wants a $7\times7$ receptive field in one step and is choosing between a single $7\times7$ convolution and three stacked $3\times3$ convolutions, all with $C$ input and $C$ output channels and same padding. (a) Give both parameter counts. (b) Give both multiply-add counts on an $H\times W$ map. (c) State the two advantages of the stack beyond the counts, and one situation where the single large kernel is preferable.

<details>
<summary>Solution</summary>

(a) *Single $7\times7$:* $49C^{2} + C$.

*Three $3\times3$:* $3(9C^{2} + C) = 27C^{2} + 3C$.

The stack uses about **55 percent** of the parameters, $27/49$.

(b) Multiply-adds are $HW k^{2}C_{\text{in}}C_{\text{out}}$ per layer, and same padding keeps $H,W$ fixed:

*Single:* $49\,HWC^{2}$. *Stack:* $3 \times 9\,HWC^{2} = 27\,HWC^{2}$.

The same ratio, $27/49$, since compute and parameters scale together when the spatial size is unchanged.

(c) Two advantages of the stack:

- **Two extra nonlinearities.** The single kernel computes one linear map of a $7\times7$ patch followed by one activation; the stack interleaves three. By the composition argument of [1.2](01-02-universal-approximation.md), that strictly enlarges the function class — the stack can represent things the single layer cannot, at fewer parameters.
- **A hierarchy of intermediate features.** The stack's first layer produces $3\times3$ features and its second $5\times5$ ones, which are available to the rest of the network and are exactly the kind of reusable, general features that make a backbone transferable ([2.4](02-04-transfer-learning-and-fine-tuning.md)). The single $7\times7$ produces nothing in between.

Where the single large kernel wins: **the very first layer**, operating on the raw image. Here $C_{\text{in}} = 3$, so the $k^{2}C_{\text{in}}C_{\text{out}}$ cost is small whatever $k$ is, and a large kernel buys receptive field immediately without three layers of depth and three layers of latency. This is why ResNet's first layer is a $7\times7$ stride-2 convolution and every layer after it is $3\times3$ — the argument for small kernels is an argument about the expensive middle of the network, not about its edges.

A second case: **when memory bandwidth rather than arithmetic is the bottleneck**, since three layers means writing and re-reading three feature maps where one layer writes one. This is a real consideration on mobile hardware and is why some efficient architectures reintroduce larger kernels.

</details>

## Connections

- **Backward:** the shape and parameter formulas are [2.1](02-01-the-convolution-operation.md)'s, applied repeatedly; the compute-versus-parameter asymmetry noted there is what makes the channel-doubling convention keep per-layer cost flat.
- **Forward:** [2.3](02-03-deep-architectures-and-residual-connections.md) asks what happens when this stack gets much deeper and finds that it degrades without skip connections; [2.4](02-04-transfer-learning-and-fine-tuning.md) reuses a trained stack as a feature extractor, which is possible precisely because the convolutional parameters do not depend on input size.
- **Sideways:** the receptive-field recursion is a cone of dependence, the same structure that governs information propagation in cellular automata and in the dependency chains of [`algorithms` 3.2](../../algorithms/lessons/03-02-topological-sort-and-strongly-connected-components.md); the choice to average position away is an invariance assumption in the sense of [`statistical-learning` 1.4](../../statistical-learning/lessons/01-04-no-free-lunch-and-inductive-bias.md).
