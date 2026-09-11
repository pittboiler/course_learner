# Deep Learning · Lesson 3.5: The transformer block

> ⏱ ~15 min · Module 3: Sequence models & attention · Builds on: [3.4 (self-attention: queries, keys, values)](03-04-self-attention-queries-keys-values.md), [2.3 (deep architectures and residual connections)](02-03-deep-architectures-and-residual-connections.md), [1.6 (normalization)](01-06-normalization.md) · Unlocks: [3.6 (full transformer architectures)](03-06-full-transformer-architectures.md)

## Why this matters

[3.4](03-04-self-attention-queries-keys-values.md) gave one attention head. A transformer is not one head — it is a **block**, repeated dozens of times, and the block contains four things besides the attention: multiple heads, a position-wise feed-forward sublayer, residual connections, and normalization.

Three of those four are ideas this course has already established. Residual connections are [2.3](02-03-deep-architectures-and-residual-connections.md), normalization is [1.6](01-06-normalization.md), and the placement rule — keep the identity path clean — is the same in both places. That is the payoff of having built the course this way: **the transformer is not a new set of ideas, it is an assembly of ones you have.**

The genuinely new pieces are multi-head attention, which is cheaper than it looks, and positional encoding, which exists because [3.4](03-04-self-attention-queries-keys-values.md)'s operation cannot tell one order from another. There is also one fact about the block that surprises people: **two-thirds of a transformer's parameters are not in the attention at all.**

## The idea

**Multiple heads.** One attention head computes one weighting of the sequence. But a token often needs several different relations at once — its syntactic subject, its coreferent, the topic of the paragraph — and a single softmax-weighted average has to blend them into one.

So run $h$ heads in parallel, each with its own $W_Q, W_K, W_V$, each of width $d/h$ rather than $d$. Concatenate the outputs and pass them through one more projection.

The cost is the point: $h$ heads of width $d/h$ do **the same total arithmetic** as one head of width $d$, because the work is linear in the head width and there are $h$ of them. Multi-head attention is free, measured against single-head attention of the same model width, and it buys $h$ separate attention patterns.

**Position.** Self-attention is permutation equivariant, so the model must be told where each token sits. The original solution adds a fixed pattern of sines and cosines at many frequencies to the input embeddings; alternatives learn the position vectors, or — the modern default — rotate the queries and keys by a position-dependent angle so that the *attention score* depends only on relative position.

**The feed-forward sublayer.** After attention, each position independently passes through a two-layer MLP that expands the width by four and contracts it back. It has no interaction between positions at all — it is a $1\times1$ convolution in the sense of [2.1](02-01-the-convolution-operation.md).

This is where most of the parameters live, and it is worth internalising the split: the attention sublayer costs $4d^{2}$ and the feed-forward sublayer $8d^{2}$, so **the block is one-third attention and two-thirds MLP.**

**Wrapping.** Each sublayer is a residual block: $x + \mathrm{Sublayer}(\mathrm{LayerNorm}(x))$. Layer norm rather than batch norm, for the reasons in [1.6](01-06-normalization.md), and *inside* the branch rather than after the addition, for the reason in [2.3](02-03-deep-architectures-and-residual-connections.md).

## The formal version

> **Multi-head attention.** With $h$ heads and $d_k = d_v = d/h$:
> $$\mathrm{head}_i = \mathrm{Attention}(XW_Q^{(i)},\, XW_K^{(i)},\, XW_V^{(i)}),$$
> $$\mathrm{MHA}(X) = \big[\mathrm{head}_1;\ \cdots;\ \mathrm{head}_h\big]\,W_O,$$
> with $W_Q^{(i)}, W_K^{(i)}, W_V^{(i)} \in \mathbb{R}^{d\times d/h}$ and $W_O \in \mathbb{R}^{d\times d}$.

Parameters: the $h$ copies of each projection stack into a single $d\times d$ matrix, so $W_Q, W_K, W_V, W_O$ together cost $4d^{2}$ — **independent of $h$.** Choosing 8 heads or 16 changes neither the parameter count nor the arithmetic, only how the $d$ dimensions are partitioned into independent attention patterns.

> **Sinusoidal positional encoding.**
> $$PE(\mathrm{pos}, 2i) = \sin\!\left(\frac{\mathrm{pos}}{10000^{2i/d}}\right), \qquad PE(\mathrm{pos}, 2i+1) = \cos\!\left(\frac{\mathrm{pos}}{10000^{2i/d}}\right),$$
> added to the token embeddings.

The frequencies form a geometric series from 1 down to $1/10000$, so early dimensions oscillate every few positions and late ones vary slowly over thousands. **The construction is a positional binary-like code in continuous form**, and it has the property that $PE(\mathrm{pos}+k)$ is a fixed linear function of $PE(\mathrm{pos})$ — a rotation — which lets the model represent relative offsets.

| Position | first four dimensions (at $d=8$) |
|---|---|
| 0 | $0,\ 1,\ 0,\ 1$ |
| 1 | $0.841,\ 0.540,\ 0.100,\ 0.995$ |
| 2 | $0.909,\ -0.416,\ 0.199,\ 0.980$ |
| 10 | $-0.544,\ -0.839,\ 0.841,\ 0.540$ |

The alternatives: **learned absolute** embeddings, simple and unable to extrapolate past the trained length; and **rotary (RoPE)**, which rotates $q$ and $k$ by an angle proportional to position, so that $q_i^{\top}k_j$ depends only on $i - j$. RoPE is the current default in large language models, for its relative-position property and its better extrapolation.

> **Feed-forward sublayer.**
> $$\mathrm{FFN}(x) = W_2\,\phi(W_1 x + b_1) + b_2, \qquad W_1 \in \mathbb{R}^{4d\times d},\ W_2 \in \mathbb{R}^{d\times 4d},$$
> applied independently at every position, with $\phi$ usually GELU.

Parameters: $4d^{2} + 4d^{2} = 8d^{2}$.

> **The block.** With pre-norm ordering,
> $$x' = x + \mathrm{MHA}\big(\mathrm{LayerNorm}(x)\big), \qquad y = x' + \mathrm{FFN}\big(\mathrm{LayerNorm}(x')\big).$$

> **Parameter count per block:** $4d^{2}$ (attention) $+\ 8d^{2}$ (feed-forward) $= \mathbf{12d^{2}}$, plus negligible biases and normalization gains.

| $d$ | per block | 12 blocks | 24 blocks |
|---|---|---|---|
| 512 | 3.1 M | 37.7 M | 75.5 M |
| 768 | 7.1 M | 85.0 M | 170 M |
| 1024 | 12.6 M | 151 M | 302 M |

A check against a real model: BERT-base has $d = 768$ and 12 layers, giving $84.9$ M in the blocks, plus a $30{,}522 \times 768 = 23.4$ M embedding matrix — $108$ M in total, against the 110 M usually quoted. **The $12d^{2}L$ rule plus the embedding is a good estimate for any transformer.**

> **Why layer norm and not batch norm.** Sequence lengths vary within a batch, generation runs with a batch of one, and batch statistics over padded positions are meaningless ([1.6](01-06-normalization.md)). Layer norm is per-token and has no train–eval mode.

> **Pre-norm versus post-norm.** Post-norm — the original — computes $\mathrm{LayerNorm}(x + \mathrm{Sublayer}(x))$, putting a normalization on the identity path. By [2.3](02-03-deep-architectures-and-residual-connections.md)'s argument the gradient's clean route is then multiplied by $L$ normalization Jacobians, and the model needs learning-rate warmup to train at all. Pre-norm keeps the path clean and is the modern default.

## Picture

![A vertical block diagram. Input tokens plus positional encoding enter at the top. A residual branch leaves the main line, passes through a layer normalization and a multi-head attention box, and rejoins at an addition node; a thick line carries the identity around it. A second residual branch does the same with a layer normalization and a feed-forward box that expands the width by four and contracts it. The output continues to the next block. A right-hand column notes that multi-head attention runs h heads of width d over h in parallel for the same total arithmetic, gives the parameter split of four d squared for attention against eight d squared for the feed-forward sublayer, and observes that pre-norm keeps the residual path clean.](assets/03-05-fig1.svg)

Two residual blocks stacked, and nothing else. **Every structural element in the diagram is something you have already seen** — the skip from [2.3](02-03-deep-architectures-and-residual-connections.md), the normalization from [1.6](01-06-normalization.md) placed inside the branch for the reason established there, the attention from [3.4](03-04-self-attention-queries-keys-values.md), and a two-layer MLP from [1.1](01-01-from-linear-models-to-the-mlp.md).

The right-hand column has the fact worth carrying away. Attention gets the attention, and **the feed-forward sublayer is two-thirds of the weights.** Whatever a transformer stores — and the evidence suggests it stores a great deal of factual knowledge — most of the storage is in those position-wise MLPs, not in the attention patterns.

## Worked examples

**Example 1 — pricing a block, and finding where the weights are.**

Take $d = 512$ with $h = 8$ heads, so $d_k = 64$ per head.

*Attention.* Four $512\times512$ matrices — $W_Q$, $W_K$, $W_V$ stacked across heads, plus $W_O$:

$$4 \times 512^{2} = 1{,}048{,}576.$$

*Feed-forward.* $W_1$ is $2048\times512$ and $W_2$ is $512\times2048$:

$$2 \times 4 \times 512^{2} = 2{,}097{,}152.$$

*Block total:* $3{,}145{,}728 = 12d^{2}$, of which attention is 33 percent and the feed-forward sublayer 67 percent.

Now vary the head count. With $h = 16$, each head has $d_k = 32$; with $h = 4$, each has $d_k = 128$. **The parameter count is $4d^{2}$ in every case** — the head count only partitions the same matrices differently.

So what does $h$ trade? More heads means more independent attention patterns and less capacity per pattern. Too few and the model must blend distinct relations into one weighting; too many and each head has too few dimensions to distinguish keys — recall from [3.4](03-04-self-attention-queries-keys-values.md) that $d_k$ enters the score's variance, and a head of width 4 has almost no room to encode what it is looking for. Values between 8 and 64 are standard, with $d_k$ typically held near 64 to 128.

**Example 2 — estimating a model's size from its shape.**

A model is described as 32 layers, $d = 4096$, vocabulary 32,000. How many parameters?

*Blocks:* $12 d^{2} L = 12 \times 4096^{2} \times 32 = 6.44\times10^{9}$.

*Embeddings:* $32{,}000 \times 4096 = 1.31\times10^{8}$, and again for the output projection if it is not tied to the input embedding.

*Total:* about $6.6$ billion, so this is a "7B" model in the usual loose labelling.

The estimate is useful in both directions. Given a parameter count and a depth you can recover the width, and given the width you can predict the memory: at 2 bytes per parameter the weights are 13 GB, and training with AdamW needs gradients plus two optimizer states as well ([1.5](01-05-adaptive-optimizers-schedules-and-initialization.md)), so roughly $4\times$ that before a single activation is stored.

Two caveats on the $12d^{2}L$ rule. It **omits the embeddings**, which matter for small models — at $d = 768$ and 12 layers the embedding is 22 percent of the total, and at $d = 4096$ and 32 layers it is 2 percent. And it assumes the standard $4\times$ feed-forward expansion; models using a gated feed-forward with three matrices instead of two run closer to $16d^{2}$ per block, so the rule underestimates them by a third.

## Watch out

- You might think more heads costs more parameters. It does not — the per-head projections stack into the same $d\times d$ matrices, so the attention sublayer is $4d^{2}$ whatever $h$ is. What changes is how many independent patterns the same capacity supports.
- You might think attention is where a transformer's capacity lives. Two-thirds of the weights are in the position-wise feed-forward sublayers, which do no mixing between positions at all. Attention routes; the MLP computes.
- You might think positional encoding is a minor detail. Without it the block is permutation equivariant and the model is a bag-of-words model with extra steps — it will train, produce a plausible loss curve, and be unable to distinguish "dog bites man" from "man bites dog".

## One-liner

> A transformer block is two residual sublayers — multi-head attention to route information between positions, and a position-wise MLP to compute on it — and the MLP holds two-thirds of the weights.

## Problems

**P1 (🟢)** A transformer has $d = 1024$, $h = 16$, and 24 layers, with a vocabulary of 50,000 and untied input and output embeddings. (a) Give $d_k$ per head. (b) Give the parameter count of one block, split into attention and feed-forward. (c) Give the total for the model including both embedding matrices.

**P2 (🟡)** A team replaces the 8-head attention in a $d = 512$ model with a single head of width 512. (a) State the change in parameter count and in arithmetic. (b) State what capability is lost and give a concrete linguistic example. (c) The team then tries 128 heads. State the problem, referring to [3.4](03-04-self-attention-queries-keys-values.md)'s scaling analysis.

**P3 (🔴, optional)** A model is trained with learned absolute positional embeddings for sequences up to 512 tokens, and is then applied to a 2,000-token document. (a) State what happens and why. (b) State what would happen with sinusoidal encodings instead, and whether it would work well. (c) Name the encoding that handles this best and state the property that makes it do so.

<details>
<summary>Solutions</summary>

**P1** (a) $d_k = d/h = 1024/16 = \mathbf{64}$.

(b) Attention: $4d^{2} = 4 \times 1024^{2} = \mathbf{4{,}194{,}304}$.

Feed-forward: $8d^{2} = \mathbf{8{,}388{,}608}$.

Block total: $12d^{2} = 12{,}582{,}912$, about 12.6 M.

(c) Blocks: $12{,}582{,}912 \times 24 = 301{,}989{,}888$, about 302 M.

Embeddings, two of them at $50{,}000 \times 1024 = 51{,}200{,}000$ each: $102{,}400{,}000$.

$$\text{Total} \approx 302\text{M} + 102\text{M} = \mathbf{404\ \text{million}}.$$

Note the embeddings are a quarter of the model here. **Tying the input and output embedding matrices**, which is common, would save 51 M — a real saving at this scale and a negligible one at $d = 8192$.

**P2** (a) **No change to either.** The parameter count is $4d^{2}$ regardless of head count, and the arithmetic is the same: one head of width 512 does $T^{2}\times 512$ score multiply-adds, and eight heads of width 64 do $8 \times T^{2} \times 64 = T^{2}\times 512$. Multi-head is a partition of the same computation.

(b) What is lost is **the ability to attend to several things at once for different reasons.** A single softmax produces one weighting per token, so if a token needs both its syntactic head and its coreferent, the single head must split its weight between them and the resulting value is a blend of the two.

Concretely, in "The **trophy** did not fit in the **suitcase** because **it** was too large", resolving *it* requires attending to *trophy* (the coreferent) while the verb agreement and the clause structure require attending to *because* and to the main verb. One head averages all of these into a single context vector; eight heads can keep them separate and let the feed-forward sublayer combine them afterwards. Empirically, trained models do specialise heads this way — some track syntactic dependencies, some track positional offsets, some attend almost entirely to a single delimiter token.

(c) With $h = 128$ and $d = 512$, each head has $d_k = 4$.

The problem is capacity per head, and [3.4](03-04-self-attention-queries-keys-values.md) gives the mechanism: the attention score is a dot product in $d_k$ dimensions, so with $d_k = 4$ a head has four numbers in which to express both what it is looking for and what each token offers. **Four dimensions cannot distinguish many distinct keys** — the scores across a long sequence will be dominated by a few directions and the head will attend almost uniformly or almost identically for every query.

There is a second, subtler issue. The scaling $\sqrt{d_k} = 2$ is small, so the logits are barely damped, but that is not the binding constraint; the constraint is representational. In practice head width is held near 64 to 128 and the head count is set as $d/d_k$, which is why wider models have more heads rather than narrower ones.

**P3** (a) **It fails outright.** Learned absolute positional embeddings are a lookup table with one row per position, trained for positions 0 to 511. Position 512 has no row. The implementation either raises an index error or, if the table was allocated larger, returns an untrained random vector — so the model produces confident nonsense for every token past 511.

This is not a degradation but a hard boundary, and it is why models with learned positions advertise a fixed maximum context length.

(b) Sinusoidal encodings are a **formula, not a table**, so they are defined at every position and the model runs without error at 2,000 tokens.

**It would not work well.** The model has only ever seen the sinusoidal patterns for positions 0 to 511, and the patterns at position 1,500 are outside that range in the slow-varying dimensions — the low-frequency components at $d/10000$ scale have simply never taken those values during training. The attention layers have no learned behaviour for them. In practice quality degrades substantially past the trained length, though it degrades rather than failing, which is a meaningful difference.

(c) **Rotary positional embedding (RoPE)** handles this best. It rotates the query and key vectors by an angle proportional to position, with the consequence that the attention score

$$q_i^{\top}k_j \quad \text{depends only on } i - j,$$

the **relative** offset, not on the absolute positions.

That is the property that makes it extrapolate: a model that has learned how to attend at a relative distance of 40 tokens applies the same learned behaviour whether those tokens are at positions 10 and 50 or at 1,960 and 2,000. Absolute schemes must learn each position separately; a relative scheme learns each *offset* once.

RoPE is not unlimited — the highest-frequency rotations still wrap in ways the model has not seen at very long distances, and extending a model's context typically requires interpolating or rescaling the rotation frequencies plus a short fine-tune. But the relative property is what makes such extension cheap, and it is why RoPE displaced both alternatives.

</details>

## Flashback

**From Lesson 1.6 (normalization):** A transformer block uses post-norm ordering, $\mathrm{LayerNorm}(x + \mathrm{Sublayer}(x))$, and the team finds that a 48-layer model diverges in the first few hundred steps unless they add a long warmup. (a) Explain the divergence using the gradient-product argument. (b) State the change that removes the need for warmup. (c) State why batch norm is not an option here regardless of placement.

<details>
<summary>Solution</summary>

(a) Post-norm puts a layer normalization **on the identity path**. Each block's Jacobian is therefore $J_{\mathrm{LN}}\big(I + \partial\mathrm{Sublayer}\big)$ rather than $I + \partial\mathrm{Sublayer}$, so over 48 blocks — 96 sublayers — the product's leading term is $\prod J_{\mathrm{LN}}$ rather than $I$ ([2.3](02-03-deep-architectures-and-residual-connections.md)).

That product is exponential in depth. Early in training, before the normalizations have settled, its magnitude is poorly controlled and can be well away from 1 in either direction, so gradients reaching the early layers are either negligible or enormous. With a normal learning rate the first few updates are correspondingly wrong, the model's activations blow up, and the run diverges.

**Warmup works by making the steps tiny while the product is worst behaved**, buying time for the normalizations and the weights to reach a regime where the Jacobians are near 1. It is a workaround, not a fix — which is why the required warmup length grows with depth.

(b) Switch to **pre-norm**: $x + \mathrm{Sublayer}(\mathrm{LayerNorm}(x))$, with the normalization inside the branch. The identity path is then a bare addition, the product over blocks retains an exact $I$ term, and the gradient reaching the input is bounded below regardless of depth.

Pre-norm models train without warmup, tolerate much larger learning rates, and scale to hundreds of layers. The cost is a small one: the residual stream's variance grows with depth ([2.3](02-03-deep-architectures-and-residual-connections.md)'s P3), so a final layer normalization is added before the output head to bring it back.

(c) Batch norm is unusable for three independent reasons, none of which placement affects ([1.6](01-06-normalization.md)):

- **Variable sequence lengths.** Batches contain sequences padded to a common length, so batch statistics at a given position would pool real tokens with padding, with an effective sample size that varies wildly by position.
- **Generation with a batch of one.** Autoregressive decoding processes one sequence at a time; batch norm would fall back to running statistics accumulated over a training distribution that does not match the generation context, and in training mode the variance over a single example is zero.
- **Train–eval mismatch.** Batch norm behaves differently in the two modes by design, so a model's output for a token would depend on what else is in its batch — unacceptable when the output is a token that will be fed back in.

Layer norm has none of these: it normalizes each token over its own features, so a batch of one behaves exactly like a batch of a thousand and training matches inference exactly.

</details>

## Connections

- **Backward:** the block is two of [2.3](02-03-deep-architectures-and-residual-connections.md)'s residual blocks with [1.6](01-06-normalization.md)'s layer norm placed inside the branch, wrapping [3.4](03-04-self-attention-queries-keys-values.md)'s attention and [1.1](01-01-from-linear-models-to-the-mlp.md)'s MLP; the feed-forward sublayer is a $1\times1$ convolution in the sense of [2.1](02-01-the-convolution-operation.md).
- **Forward:** [3.6](03-06-full-transformer-architectures.md) stacks these blocks into encoders and decoders and adds causal masking; [4.5](04-05-llms-self-supervision-and-scaling-laws.md) scales the same block to hundreds of layers and thousands of dimensions and asks what the loss does as it grows.
- **Sideways:** the sinusoidal encoding is a Fourier basis over position, the frequency decomposition of [`signals-systems` 2.2](../../signals-systems/lessons/02-02-fourier-series-periodic-signals.md), with the geometric frequency spacing chosen so that nearby positions differ in the fast dimensions and distant ones in the slow.
