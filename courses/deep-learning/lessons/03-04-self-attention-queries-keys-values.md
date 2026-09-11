# Deep Learning · Lesson 3.4: Self-attention — queries, keys, values

> ⏱ ~15 min · Module 3: Sequence models & attention · Builds on: [3.3 (seq2seq and the attention mechanism)](03-03-seq2seq-and-the-attention-mechanism.md) · Unlocks: [3.5 (the transformer block)](03-05-the-transformer-block.md)

## Why this matters

[3.3](03-03-seq2seq-and-the-attention-mechanism.md) added attention between an encoder and a decoder, as a fix for a bottleneck. The obvious next question — and it took three years for anyone to act on it — is what happens if a sequence attends to **itself**, and whether the recurrence is needed at all once it does.

The answer is that it is not. Self-attention alone, stacked, outperforms recurrence on essentially every sequence task, and it does so while being fully parallel across positions rather than strictly sequential. That combination is why every large language model is built from this operation.

This lesson is the operation itself: three projections, one scaled dot product, one softmax. It is a short formula, and two things about it repay careful attention — why there are three projections rather than one, and why a $\sqrt{d_k}$ appears in the denominator.

## The idea

In [3.3](03-03-seq2seq-and-the-attention-mechanism.md) the decoder state was the query and the encoder states were both the things being matched against and the things being averaged. Self-attention separates those two roles and adds a third, so that each token plays **three parts at once**.

**Query:** what this token is looking for. **Key:** what this token offers as a label, so that others can find it. **Value:** what this token contributes when someone does attend to it.

Why separate the key from the value? Because what makes a token *findable* and what makes it *useful* are different things. The word "bank" should be findable by a query about financial institutions and by a query about riversides; what it contributes once found is its meaning in context. Tying the two would force one vector to serve both, and the whole point of the mechanism is that it does not have to.

Each role is a learned linear projection of the same input: $Q = XW_Q$, $K = XW_K$, $V = XW_V$. Then the operation is one line:

$$\mathrm{Attention}(Q,K,V) = \mathrm{softmax}\!\left(\frac{QK^{\top}}{\sqrt{d_k}}\right)V.$$

Read it left to right. $QK^{\top}$ is every query against every key — a $T\times T$ matrix of similarities. Divide by $\sqrt{d_k}$, softmax each row so it sums to 1, and use those weights to average the values.

Now the $\sqrt{d_k}$, which is not a fudge factor. If the components of $q$ and $k$ are independent with mean 0 and variance 1, then $q\cdot k$ is a sum of $d_k$ such products, so it has **variance $d_k$ and standard deviation $\sqrt{d_k}$**. At $d_k = 64$ the logits are spread over roughly $\pm 24$, and a softmax of logits that far apart is essentially one-hot. A saturated softmax has gradient $p(1-p) \approx 0$, so **the whole attention layer stops learning**. Dividing by $\sqrt{d_k}$ restores the logits to order 1 and the softmax to something differentiable.

Two properties fall out of the formula, and they set up the rest of the module. The cost is $T^{2}$ scores — **quadratic in sequence length**, and fully parallel. And the operation is **permutation equivariant**: shuffle the tokens and the outputs shuffle identically. Nothing in it knows about order, which is why [3.5](03-05-the-transformer-block.md) must add positional information explicitly.

## The formal version

> **Scaled dot-product self-attention.** For input $X \in \mathbb{R}^{T\times d}$ and learned projections $W_Q, W_K \in \mathbb{R}^{d\times d_k}$ and $W_V \in \mathbb{R}^{d\times d_v}$:
> $$Q = XW_Q, \quad K = XW_K, \quad V = XW_V, \qquad \mathrm{Attention} = \mathrm{softmax}\!\left(\frac{QK^{\top}}{\sqrt{d_k}}\right)V.$$
> The softmax is taken over each row, so the attention matrix $A \in \mathbb{R}^{T\times T}$ has rows summing to 1, and the output is $AV \in \mathbb{R}^{T\times d_v}$.

In words: **one matrix multiply to score, one softmax, one matrix multiply to gather.** Three dense operations, no recurrence, no convolution.

> **Why $\sqrt{d_k}$.** If $q, k \in \mathbb{R}^{d_k}$ have independent components with mean 0 and variance 1, then
> $$\mathbb{E}[q\cdot k] = 0, \qquad \operatorname{Var}(q\cdot k) = \sum_{i=1}^{d_k}\operatorname{Var}(q_i k_i) = d_k,$$
> so the standard deviation is $\sqrt{d_k}$ and dividing by it gives logits of unit variance.

Simulation confirms it: sampling random Gaussian pairs gives measured dot-product standard deviations of $1.98$, $4.00$, $7.98$ and $16.07$ for $d_k = 4, 16, 64, 256$, against $\sqrt{d_k} = 2, 4, 8, 16$.

> **What saturation costs.** For a softmax output $p_i$, $\partial p_i/\partial z_i = p_i(1-p_i)$.

| Logits | Softmax | $p(1-p)$ at the max |
|---|---|---|
| $(8, 2, -2, -8)$ — unscaled at $d_k = 64$ | $(0.9975,\ 0.0025,\ 0.0000,\ 0.0000)$ | $0.0025$ |
| $(1, 0.25, -0.25, -1)$ — the same, scaled | $(0.528,\ 0.249,\ 0.151,\ 0.071)$ | $0.249$ |

**A hundredfold difference in gradient**, from one division. And the unscaled case gets worse as $d_k$ grows, so without the scaling attention would become *less* trainable as models got bigger — which is the opposite of what you want from a mechanism meant to scale.

> **Permutation equivariance.** For any permutation matrix $P$, $\mathrm{Attention}(PX) = P\,\mathrm{Attention}(X)$.

*Why:* $Q, K, V$ are computed rowwise, so permuting rows of $X$ permutes their rows; $QK^{\top}$ has its rows and columns permuted, the rowwise softmax is unaffected by the relabelling, and $AV$ comes out permuted. **The model treats a sequence as a set**, which is a genuine property of the operation and a problem for language, where order carries meaning.

> **Cost.**

| Operation | Time | Memory |
|---|---|---|
| $QK^{\top}$ | $O(T^{2}d_k)$ | $O(T^{2})$ if materialised |
| softmax | $O(T^{2})$ | $O(T^{2})$ |
| $AV$ | $O(T^{2}d_v)$ | $O(Td_v)$ |
| projections | $O(Td^{2})$ | $O(Td)$ |

Compare with a recurrent layer's $O(Td^{2})$ sequential steps. **Self-attention does more arithmetic and does it in parallel**, so at the sequence lengths where $T < d$ it is also faster in wall-clock terms — and when $T \gg d$ the $T^{2}$ term dominates, which is the constraint of [3.6](03-06-full-transformer-architectures.md).

The other axis on which it wins is the one [3.3](03-03-seq2seq-and-the-attention-mechanism.md) named:

| Architecture | Path length between positions $i$ and $j$ | Sequential steps |
|---|---|---|
| RNN | $|i-j|$ | $O(T)$ |
| Convolution, kernel $k$ | $O(\log_k|i-j|)$ with dilation | $O(1)$ |
| Self-attention | $O(1)$ | $O(1)$ |

## Picture

![A diagram in two parts. On the left, a box of input tokens feeds three parallel projection boxes labelled Q equals X times W-Q, K equals X times W-K, and V equals X times W-V, each annotated with the role it plays: what I am looking for, what I offer as a label, and what I contribute. Below, a flow line reads scores equals Q times K transpose divided by the square root of d-k, then softmax over keys, then weighted sum of V. On the right, a panel explains the scaling: a dot product of two vectors with d-k unit-variance components has standard deviation the square root of d-k, so at sixty-four the logits spread over plus or minus twenty-four, the softmax becomes one-hot, and its gradient collapses from 0.25 to 0.0025.](assets/03-04-fig1.svg)

The three boxes on the left are the design decision. **One input, three linear maps, three different jobs** — and because they are learned, the network decides what "findable" and "useful" mean for itself.

The panel on the right is the piece most often taken on faith. It is a variance calculation, it has a specific number attached, and the number is large: the difference between a gradient of $0.25$ and one of $0.0025$ is the difference between a layer that learns and one that does not.

## Worked examples

**Example 1 — one self-attention head by hand.**

Two tokens, $d_k = d_v = 2$. Suppose the projections have already produced

$$q_1 = (1,0), \quad q_2 = (0,1), \qquad k_1 = (1,1), \quad k_2 = (1,-1), \qquad v_1 = (2,0), \quad v_2 = (0,2).$$

*Token 1.* Raw scores $q_1\cdot k_1 = 1$ and $q_1\cdot k_2 = 1$. Scale by $\sqrt{2} = 1.414$:

$$(0.707,\ 0.707) \ \longrightarrow\ \text{softmax} \ \longrightarrow\ (0.5,\ 0.5).$$

Equal scores give equal weights, so

$$\text{out}_1 = 0.5(2,0) + 0.5(0,2) = (1,\ 1).$$

*Token 2.* Raw scores $q_2\cdot k_1 = 1$ and $q_2\cdot k_2 = -1$. Scaled: $(0.707, -0.707)$. Exponentiate: $e^{0.707} = 2.028$, $e^{-0.707} = 0.493$, sum $2.521$:

$$\alpha_2 = (0.804,\ 0.196), \qquad \text{out}_2 = 0.804(2,0) + 0.196(0,2) = (1.609,\ 0.391).$$

**The two tokens got different outputs from the same values**, because they asked different questions. That is the mechanism: $V$ is fixed per token, and what varies is the weighting, computed from the match between one token's query and every token's key.

Now check the equivariance claim. Swap the two tokens — relabel so token 2 comes first — and recompute: the scores matrix has its rows and columns swapped, the softmax is unaffected, and the outputs come back as $(\text{out}_2, \text{out}_1)$. **The values are identical, only reordered.** The operation genuinely cannot tell which token came first.

**Example 2 — the scaling, and what happens without it.**

A head with $d_k = 64$ and well-normalized inputs, so query and key components have roughly unit variance.

*Without scaling.* Logits $q\cdot k$ have standard deviation $\sqrt{64} = 8$, so across a row of a hundred keys they span roughly $\pm 24$ — three standard deviations either side. A softmax over logits spread 48 apart puts essentially all its mass on one key: with the illustrative logits $(8, 2, -2, -8)$ the weights are $(0.9975, 0.0025, 0, 0)$.

The gradient of the softmax at that maximum is $p(1-p) = 0.9975 \times 0.0025 = \mathbf{0.0025}$.

*With scaling.* The same logits divided by 8 become $(1, 0.25, -0.25, -1)$, giving weights $(0.528, 0.249, 0.151, 0.071)$ and a gradient of $0.528 \times 0.472 = \mathbf{0.249}$.

**A factor of 100 in the gradient reaching the queries and keys**, and the unscaled version degrades further as $d_k$ rises — at $d_k = 256$ the spread doubles again.

Two further readings worth having. **The scaled version is not merely more trainable, it is more useful**: a one-hot attention pattern retrieves a single token and throws away the rest, while a soft one blends several, which is what "attend to the subject *and* the auxiliary verb" requires.

And **this is why attention is scaled rather than the inputs being shrunk.** One could normalise $q$ and $k$ to smaller magnitude instead, but their scale is learned and drifts during training; dividing by a constant that matches the dimension is a fix that holds regardless of what the projections learn. The same reasoning appears throughout the module — prefer a structural correction over a tuned one.

## Watch out

- You might think the $\sqrt{d_k}$ is a normalization convention. It is a variance calculation with a specific consequence: without it, larger heads have more saturated softmaxes and therefore smaller gradients, so attention would get *harder* to train as models grew.
- You might think self-attention understands order. It does not — it is permutation equivariant, and a shuffled sentence produces shuffled outputs and nothing else. Every transformer must inject position separately ([3.5](03-05-the-transformer-block.md)), and forgetting it produces a model that trains to a plausible-looking loss and treats language as a bag of words.
- You might think the query, key and value projections could be shared to save parameters. They could, and the model would be strictly weaker: tying key to value forces what makes a token findable to be the same as what it contributes, which is exactly the distinction the mechanism exists to make.

## One-liner

> Each token emits a query, a key and a value; scores are queries against keys, scaled by the square root of the dimension so the softmax stays soft, and the output is the resulting weighted average of values.

## Problems

**P1 (🟢)** A self-attention head has $d_k = 4$. Three tokens produce $q_2 = (1,1,0,0)$ and keys $k_1 = (1,0,0,0)$, $k_2 = (1,1,1,1)$, $k_3 = (0,0,1,1)$, with values $v_1 = (1,0)$, $v_2 = (0,1)$, $v_3 = (1,1)$. (a) Compute the raw and scaled scores for token 2. (b) Compute the attention weights. (c) Compute token 2's output.

**P2 (🟡)** A team builds attention with $d_k = 512$ and omits the scaling. (a) Give the expected standard deviation of the logits, assuming unit-variance components. (b) Explain the training symptom they will observe, being specific about which parameters stop receiving gradient. (c) The team's fix is to lower the learning rate. Evaluate that fix.

**P3 (🔴, optional)** A model processes sequences of $T = 4{,}096$ with $d = 1{,}024$ and $d_k = 64$ per head. (a) Give the number of attention scores per head and the memory to store one attention matrix in 16-bit floats. (b) Compare the $O(T^{2}d_k)$ score cost against the $O(Td^{2})$ projection cost and say which dominates. (c) At what sequence length do they cross, and what does that imply about which sequence lengths the quadratic cost actually matters for?

<details>
<summary>Solutions</summary>

**P1** (a) Raw scores, $q_2 \cdot k_j$:

$$q_2\cdot k_1 = 1, \qquad q_2\cdot k_2 = 1+1 = 2, \qquad q_2\cdot k_3 = 0.$$

Scaled by $\sqrt{d_k} = \sqrt{4} = 2$:

$$(0.5,\ 1.0,\ 0).$$

(b) Exponentiate: $e^{0.5} = 1.6487$, $e^{1.0} = 2.7183$, $e^{0} = 1$, summing to $5.3670$.

$$\alpha = (0.3072,\ 0.5065,\ 0.1863).$$

(c) Output:

$$\text{out}_2 = 0.3072(1,0) + 0.5065(0,1) + 0.1863(1,1) = (0.4935,\ 0.6928).$$

Token 2's query aligns best with $k_2$, which is unsurprising — $k_2$ is the all-ones key and $q_2$ has two positive components, so it matches everything somewhat and $k_2$ most.

**P2** (a) With $d_k = 512$ and unit-variance components, the logits have variance $d_k$ and standard deviation

$$\sqrt{512} = \mathbf{22.6}.$$

So across a row the logits span roughly $\pm 68$ at three standard deviations.

(b) The softmax over logits that far apart is **numerically one-hot**: the largest gets a weight indistinguishable from 1 and the rest indistinguishable from 0. Since $\partial p_i/\partial z_i = p_i(1-p_i)$, the gradient with respect to the logits is about $10^{-30}$ — zero in practice.

Which parameters stop receiving gradient: **$W_Q$ and $W_K$**, because the only path from the loss to them runs through the logits, and that path is now multiplied by a vanishing softmax derivative. $W_V$ still receives gradient, since $V$ enters the output linearly through $AV$ and does not pass through the softmax.

The observable symptom is therefore specific and diagnostic: **the attention pattern freezes at whatever its initialization produced and never changes, while the value projections continue to train.** The model becomes a fixed, essentially random routing of values — it will still reduce its loss somewhat, which is what makes this hard to spot, and it will plateau well above where it should.

(c) **Lowering the learning rate is the wrong fix and will make things worse.** The problem is not that steps are too large; it is that the gradient is zero along the query and key directions. A smaller learning rate multiplies an already-vanishing gradient by a smaller number.

The correct fix is to **divide the logits by $\sqrt{d_k} = 22.6$**, which brings them back to unit variance and restores the softmax gradient to order $0.25$. If for some reason the scaling cannot be added, the alternatives are to shrink the initialization of $W_Q$ and $W_K$ by a factor of $\sqrt{\sqrt{d_k}}$ each so their product has the right scale, or to normalize the queries and keys — both of which are the same correction applied somewhere else, and both are more fragile, because the projections' scale drifts during training while $\sqrt{d_k}$ is a constant.

**P3** (a) Scores per head:

$$T^{2} = 4{,}096^{2} = \mathbf{16{,}777{,}216}.$$

At 2 bytes each:

$$16.78\times10^{6} \times 2 = \mathbf{33.6\ \text{MB}} \text{ per attention matrix}.$$

That is per head, per layer, per example in the batch. A model with 16 heads and 32 layers, materialising all of them, would need $33.6 \times 16 \times 32 = 17.2$ GB **for one example** — which is why memory-efficient attention that never materialises the matrix is not an optimisation but a requirement at this length.

(b) Score cost: $T^{2}d_k = 4{,}096^{2}\times 64 = 1.07\times10^{9}$ multiply-adds per head. With $d/d_k = 16$ heads, $1.72\times10^{10}$ total.

Projection cost: $O(Td^{2})$, and a transformer block has four such projections ($Q$, $K$, $V$, output), so $4 \times 4{,}096 \times 1{,}024^{2} = 1.72\times10^{10}$.

**They are equal here, at about $1.7\times10^{10}$ each.** At $T = 4{,}096$ with $d = 1{,}024$ the two halves of the attention layer cost the same.

(c) Setting $T^{2}d = Td^{2}$ — using $d$ for the total across heads — gives

$$T = d = \mathbf{1{,}024}.$$

So with a model width of 1,024 the quadratic term overtakes the projections at a sequence length of about 1,024, and at 4,096 it is 4 times larger relative to where it started — which is why the two came out equal above only because of the factor of 4 from having four projection matrices.

The implication is worth stating carefully. **For $T \ll d$ the quadratic cost is irrelevant** — at $T = 512$ and $d = 4{,}096$, attention scores are a small fraction of the block's arithmetic, and the model is dominated by the dense projections and the feed-forward sublayer. The quadratic term becomes the binding constraint only when $T$ approaches and exceeds $d$, which for modern widths means sequences of several thousand tokens and up.

That is why long-context work is a distinct engineering problem rather than a general property of transformers: at ordinary lengths the architecture is dense-matrix-bound like any other, and it is only past $T \approx d$ that the $T^{2}$ term starts to set the bill — first in memory, which scales as $T^{2}$ with no $d_k$ to soften it, and then in time.

</details>

## Flashback

**From Lesson 2.2 (building a convolutional network):** A convolutional stack needs several layers to give one unit a wide receptive field, while self-attention connects every position to every other in one layer. (a) Give the number of $3\times3$ convolutional layers needed for a receptive field of 4,096 positions in one dimension, with no downsampling. (b) Give the number of self-attention layers needed for the same reach. (c) State the cost each pays for its answer.

<details>
<summary>Solution</summary>

(a) A 1-D convolution of width 3 with stride 1 adds $k-1 = 2$ to the receptive field per layer, starting at 1:

$$r = 1 + 2n \ge 4{,}096 \implies n \ge 2{,}047.5 \implies \mathbf{2{,}048 \text{ layers}}.$$

Absurd, which is the point. With downsampling the picture changes completely — [2.2](02-02-building-a-convolutional-network.md)'s recursion makes the jump grow geometrically, and about 12 stride-2 steps reach 4,096 — but downsampling destroys resolution, which for a sequence model means losing per-token outputs.

(b) **One.** Self-attention's path length between any two positions is 1 regardless of distance, so a single layer already lets position 1 attend to position 4,096.

(c) What each pays:

**Convolution** pays in **depth**, and depth is sequential in the forward pass and multiplies Jacobians in the backward pass ([2.3](02-03-deep-architectures-and-residual-connections.md)). Its arithmetic is cheap and local — $O(Tkd^{2})$, linear in $T$ — and its memory is linear too. It is the efficient choice whenever the relevant structure really is local.

**Self-attention** pays in **arithmetic and memory**: $O(T^{2}d_k)$ time and $O(T^{2})$ memory for the score matrix, so at $T = 4{,}096$ that is 16.8 million scores per head against a convolution's 4,096 windows. It buys constant path length and full parallelism with that.

The trade is a clean one and worth remembering as the module's summary: **convolution assumes locality and is cheap; attention assumes nothing and is quadratic.** A model that knows its dependencies are local should use the cheap operation, and the reason attention won for language is that linguistic dependencies are not reliably local — the subject of a sentence can be arbitrarily far from its verb, and no fixed window is the right one.

</details>

## Connections

- **Backward:** this is [3.3](03-03-seq2seq-and-the-attention-mechanism.md)'s attention with the query coming from the same sequence and the key and value roles split apart; the path-length argument that motivates it runs through [2.3](02-03-deep-architectures-and-residual-connections.md), [3.1](03-01-rnns-and-backprop-through-time.md) and [3.2](03-02-lstms-grus-and-vanishing-gradients.md).
- **Forward:** [3.5](03-05-the-transformer-block.md) wraps this in multiple heads, a feed-forward sublayer, residual connections and normalization, and supplies the positional information the permutation equivariance makes necessary; [3.6](03-06-full-transformer-architectures.md) adds causal masking and assembles full models.
- **Sideways:** the softmax's $p(1-p)$ saturation is the same vanishing-gradient mechanism as the sigmoid's in [1.1](01-01-from-linear-models-to-the-mlp.md), here caused by input scale rather than depth; and the variance-of-a-dot-product calculation is the sum-of-independent-variables rule of [`prob-stat-refresher` 3.1](../../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md), the same one that produced He initialization in [1.5](01-05-adaptive-optimizers-schedules-and-initialization.md).
