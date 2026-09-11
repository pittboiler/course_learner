# Deep Learning · Lesson 3.6: Full transformer architectures

> ⏱ ~15 min · Module 3: Sequence models & attention · Builds on: [3.5 (the transformer block)](03-05-the-transformer-block.md) · Unlocks: [4.1 (autoencoders and representation learning)](04-01-autoencoders-and-representation-learning.md)

## Why this matters

One block routes and computes. A model is dozens of them, plus a decision about **what each position is allowed to see**.

That decision — bidirectional or causal — is the whole taxonomy. It determines whether the model can be trained by next-token prediction on raw text, which determines whether it can use the entire internet as training data ([4.5](04-05-llms-self-supervision-and-scaling-laws.md)), which is why the causal variant won.

It also creates the asymmetry that dominates the practical engineering of these systems. **Training processes an entire sequence in parallel; generation produces one token at a time.** Everything about serving a language model — caching, batching, latency, memory — follows from that sentence.

## The idea

**Causal masking.** In a decoder, position $t$ must not see positions after it, or the next-token training objective is trivial: the model would read the answer.

The implementation is one line. Before the softmax, set the scores for future positions to $-\infty$. Exponentiating gives zero, so those positions receive exactly no weight and the remaining weights still sum to 1.

**Setting them to $-\infty$ before the softmax, not to zero after it**, is the detail that matters. Zeroing afterwards would leave the row summing to less than 1, so the context vector would shrink at early positions and the whole thing would be miscalibrated.

**Three architectures** follow from what you mask:

**Encoder-only** — no mask, every position sees every other. Trained by masking out random tokens and predicting them. Good at understanding: classification, retrieval, tagging. Cannot generate, because it has no notion of "next".

**Decoder-only** — causal mask throughout. Trained by predicting the next token. Good at generation, and it turns out to be good at everything else too, because any task can be phrased as text continuation. This is the design of essentially every large language model.

**Encoder–decoder** — a bidirectional encoder for the source and a causal decoder for the target, joined by **cross-attention**: the decoder's queries against the encoder's keys and values. This is [3.3](03-03-seq2seq-and-the-attention-mechanism.md)'s architecture with the recurrence removed, and it remains natural for translation and other strict input-to-output mappings.

**The training–inference asymmetry.** At training time the whole target sequence is known, so the model computes all positions at once and the mask does the work of hiding the future — this is **teacher forcing**, and it is what makes transformer training parallel.

At generation time nothing after the current token exists. Each token must be produced, appended, and fed back. So generation is **strictly sequential in the output length**, exactly the property the architecture was designed to escape during training.

The saving grace is the **KV cache**: the keys and values for past tokens do not change when a new token arrives, so cache them. Each new token then attends against the cache rather than recomputing it, turning a cubic cost into a quadratic one — at the price of a cache that grows linearly with context and, at long contexts, dominates memory.

## The formal version

> **Causal mask.** Let $M \in \mathbb{R}^{T\times T}$ with $M_{ij} = 0$ for $j \le i$ and $-\infty$ otherwise. Then
> $$A = \mathrm{softmax}\!\left(\frac{QK^{\top}}{\sqrt{d_k}} + M\right),$$
> so $A_{ij} = 0$ for $j > i$ and each row still sums to 1.

The mask retains $T(T+1)/2$ of the $T^{2}$ entries, just over half, so causal attention costs about half of bidirectional attention — though implementations rarely realise the saving, since dense matrix multiplication is faster than sparse bookkeeping at these sizes.

> **The three families.**

| Family | Mask | Training objective | Strength |
|---|---|---|---|
| Encoder-only (BERT) | none | masked-token prediction | understanding, classification |
| Decoder-only (GPT) | causal | next-token prediction | generation, and general use |
| Encoder–decoder (T5) | none / causal | sequence-to-sequence | strict input-output mappings |

**Why decoder-only won.** Its objective needs no labels at all — any text is a training example, since every token is a prediction target given its prefix. Encoder-only models also use raw text, but their masked-token objective supervises only the 15 percent of positions that are masked, so they extract less signal per token. And a decoder can *do* the other tasks by being asked in words, whereas an encoder cannot generate at all.

> **Cross-attention.** In an encoder–decoder, the decoder has a third sublayer between its self-attention and its feed-forward:
> $$Q = X_{\text{dec}}W_Q, \qquad K = X_{\text{enc}}W_K, \qquad V = X_{\text{enc}}W_V.$$

Queries from the decoder, keys and values from the encoder. **This is exactly [3.3](03-03-seq2seq-and-the-attention-mechanism.md)'s attention**, and it is not masked — the decoder may see the whole source, only its own future is hidden.

> **Teacher forcing.** During training the decoder's input at step $t$ is the *true* token $y_{t-1}$, not the model's own prediction.

This is what allows parallel training, and it creates **exposure bias**: at inference the model conditions on its own outputs, which it never did during training, so one bad token can send a generation off into a region the model has no practice in. It is a real effect, the main reason long generations degrade, and it has no clean fix.

> **KV cache.** At generation step $t$, the keys and values for positions $1..t-1$ are unchanged from the previous step. Caching them means step $t$ computes only $k_t, v_t$ and one row of attention.

$$\text{cache size} = 2 \times L \times T \times d \times (\text{bytes per element}),$$

for $L$ layers, context $T$, model width $d$, with the 2 counting keys and values.

| Model | $L$ | $d$ | $T$ | Cache (16-bit) |
|---|---|---|---|---|
| 7B-class | 32 | 4096 | 4,096 | 2.1 GB |
| 7B-class | 32 | 4096 | 32,768 | 17.2 GB |

**At long contexts the cache exceeds the weights.** A 7-billion-parameter model is 13 GB at 16 bits; its cache at 32k context is 17 GB, per sequence. This is why long-context serving is a memory problem, why techniques that shrink the cache — sharing key and value heads across query heads, quantising the cache — matter so much, and why batch size at inference is limited by cache rather than by weights.

> **Generation cost.** Producing $T$ tokens with a cache costs $O(T^{2}d)$ attention work in total, one $O(td)$ row at step $t$. Without a cache each step recomputes all previous keys and values, giving $O(T^{3}d)$ — a factor of $T/3$ worse.

At $T = 4{,}096$ that factor is about 1,365. **The cache is not an optimization; without it, generation at these lengths is not possible.**

## Picture

![A six-by-six grid whose rows and columns are labelled with the words of a short sentence, representing the attention score matrix. Cells on and below the diagonal are marked as allowed; cells above it are marked minus infinity and highlighted, showing that each position may attend only to itself and earlier positions. Captions note that the masked entries are set to minus infinity before the softmax so they receive exactly zero weight, and that zeroing them after the softmax would leave the row not summing to one. To the right, three boxes summarise encoder-only, decoder-only and encoder-decoder architectures with their masks and uses.](assets/03-06-fig1.svg)

Read the grid by rows. **Row 1 has one allowed cell, row 6 has six** — the first token attends only to itself, the last sees everything. So the context available grows down the sequence, and a model trained this way learns to make do with whatever prefix it has.

The triangle is also the training objective made visible: every row is a separate prediction problem, and a single forward pass over a sequence of length $T$ produces $T$ training signals. That density is why next-token prediction extracts so much from raw text, and it is the arithmetic behind [4.5](04-05-llms-self-supervision-and-scaling-laws.md)'s scaling story.

## Worked examples

**Example 1 — the mask, and why $-\infty$ before rather than zero after.**

Three tokens, with raw scaled scores for position 2 given as $(1.0,\ 2.0,\ 3.0)$ against positions 1, 2, 3.

*Correct — add the mask, then softmax.* Position 2 may see 1 and 2 but not 3, so the masked scores are $(1.0,\ 2.0,\ -\infty)$. Exponentiating: $e^{1} = 2.718$, $e^{2} = 7.389$, $e^{-\infty} = 0$, summing to $10.107$:

$$\alpha = (0.269,\ 0.731,\ 0).$$

The weights sum to 1 and the context is a proper convex combination of positions 1 and 2.

*Incorrect — softmax, then zero.* Unmasked softmax of $(1,2,3)$ is $(0.090,\ 0.245,\ 0.665)$. Zeroing the third gives $(0.090,\ 0.245,\ 0)$, which sums to **0.335**.

The context vector is now scaled down by a factor of three — and by a *different* factor at every position, since the amount of masked-out weight depends on how much future there is. Early positions would be shrunk hardest, and the model would have to learn to compensate for an artefact of the implementation. **Masking before the softmax is not a convention; it is the only version that produces a weighted average.**

**Example 2 — what generation costs, with and without the cache.**

A 7B-class model: $L = 32$ layers, $d = 4096$, generating 4,096 tokens.

*Per-token work.* With a cache, step $t$ computes $q_t, k_t, v_t$ and attends against $t$ cached keys, so the attention work is $O(td)$ per layer and the projections and feed-forward are $O(d^{2})$. Summing over $t$ gives $O(T^{2}d)$ for attention across the whole generation.

*Without a cache*, step $t$ recomputes keys and values for all $t$ previous positions, costing $O(td^{2})$ per layer, and summing gives $O(T^{2}d^{2})$ — or, counting the attention itself, $O(T^{3}d)$. The ratio is about $T/3 \approx 1{,}365$.

*The cache's price.* At 16 bits,

$$2 \times 32 \times 4{,}096 \times 4{,}096 \times 2\ \text{bytes} = 2.1\ \text{GB}.$$

Per sequence. Serving 8 concurrent requests needs 17 GB of cache on top of the model's 13 GB of weights — so **the cache, not the model, sets how many users a device can serve.**

And the asymmetry to sit with: the same model processing a 4,096-token *prompt* does it in one parallel forward pass, while generating 4,096 tokens takes 4,096 sequential passes. Prompt processing is compute-bound and fast; generation is memory-bandwidth-bound and slow, because each step reads the entire weight matrix to produce one token. **This is why time-to-first-token and tokens-per-second are quoted as separate numbers** — they are limited by different resources.

## Watch out

- You might think the causal mask is applied after the softmax. It must be applied before, as $-\infty$ added to the scores; masking afterwards leaves each row summing to less than 1 by a position-dependent amount.
- You might think an encoder-only model can generate by unmasking one position at a time. It cannot do so well: it was trained to fill gaps given both sides, so conditioning on a left context alone is a distribution it never saw. Generation quality is poor and the objective mismatch is fundamental, not a matter of decoding strategy.
- You might think the KV cache is an optimization you can skip for simplicity. Without it, generating $T$ tokens costs a factor of $T/3$ more — about 1,365 times at a 4k context. It is a requirement.

## One-liner

> Mask the future and the model can be trained on raw text by predicting the next token, at the price that training is parallel and generation is not — which is why every serving system is built around a growing cache of keys and values.

## Problems

**P1 (🟢)** A causal self-attention layer processes a sequence of 5 tokens. (a) Give the number of attention scores that are computed, and how many survive the mask. (b) For position 3, state which positions it can attend to. (c) State what the first position's attention distribution must be, and why.

**P2 (🟡)** A model has $L = 40$ layers, $d = 5120$, and serves a context of 8,192 tokens in 16-bit precision. (a) Give the KV cache size for one sequence. (b) The weights are 26 GB. Give the number of concurrent sequences an 80 GB device can serve, and state what limits it. (c) Name two techniques that reduce the cache and say what each trades away.

**P3 (🔴, optional)** A team needs a model for document classification and a model for open-ended generation, and proposes training one decoder-only model for both. (a) State the argument in favour, referring to training data and objectives. (b) State the one concrete disadvantage for the classification task, being specific about what the causal mask costs. (c) State how a decoder-only model is nonetheless used for classification in practice, and what it gives up.

<details>
<summary>Solutions</summary>

**P1** (a) Scores computed: $T^{2} = 5^{2} = \mathbf{25}$ — the full matrix is computed and then masked, since that is faster than computing only the lower triangle.

Surviving the mask: $T(T+1)/2 = 5(6)/2 = \mathbf{15}$, exactly 60 percent. (The fraction tends to $1/2$ as $T$ grows: at $T = 4{,}096$ it is $50.01$ percent.)

(b) Position 3 attends to positions **1, 2 and 3** — everything up to and including itself. Positions 4 and 5 are masked to $-\infty$.

(c) The first position's attention distribution must be $\alpha = (1, 0, 0, 0, 0)$ — **it attends entirely to itself**, because every other position is masked and a softmax row must sum to 1.

So the first token's output is its own value vector, unchanged by attention. The layer does nothing for it beyond the feed-forward sublayer, which is a small but real fact: the first token of a sequence gets no contextual information at all, at any layer. This is one reason models often perform oddly on very short prompts, and why some architectures prepend a dedicated beginning-of-sequence token to give position 1 something to be.

**P2** (a) $$2 \times 40 \times 8{,}192 \times 5{,}120 \times 2\ \text{bytes} = 6.71\times10^{9}\ \text{bytes} = \mathbf{6.7\ \text{GB}}.$$

(b) Available for cache: $80 - 26 = 54$ GB, ignoring activations and framework overhead.

$$\left\lfloor \frac{54}{6.7} \right\rfloor = \mathbf{8 \text{ concurrent sequences}}.$$

What limits it is the **KV cache**, not the weights. The weights are loaded once and shared across all concurrent sequences; the cache is per sequence and grows with each one's context. A device with 54 GB of headroom could hold the weights of a much larger model, and what it cannot hold is many users' caches — which is why inference systems are engineered around cache management rather than around weight storage.

(c) Two techniques:

- **Grouped-query or multi-query attention.** Share one set of key and value heads across several query heads, so the cache stores $g$ key-value pairs instead of $h$. With 8 query heads per key-value group the cache shrinks eightfold. **What it trades away** is representational capacity in the attention: the heads can still ask different questions but must match against the same keys, which costs a little quality — small enough that essentially every recent model does it.

- **Cache quantisation.** Store keys and values in 8-bit or 4-bit rather than 16-bit, halving or quartering the cache. **What it trades away** is numerical precision in the attention scores, which matters more for keys than for values and is usually acceptable at 8 bits and marginal at 4.

A third, structurally different option: **sliding-window or local attention**, which caps the cache at the window size regardless of context length. What it trades away is exact long-range attention — the model can only reach further back through the composition of several layers' windows.

**P3** (a) The argument in favour is about **data and generality**.

The next-token objective needs no labels: every token of every document is a training example, so the model can be trained on the entire available corpus. And it supervises *every* position, whereas a masked-token objective supervises only the 15 percent of positions that are masked — so per token of text, the decoder extracts several times more training signal.

Generality follows: any task expressible in text, including classification, can be posed as a continuation, so one model serves both purposes and the engineering, serving and fine-tuning infrastructure is shared.

(b) The concrete disadvantage is that **the causal mask prevents earlier tokens from seeing later ones**, and classification is inherently bidirectional — the meaning of a document's first sentence often depends on its last.

In an encoder, every token's representation is built from the whole document at every layer. In a decoder, token 1's representation at every layer is built from token 1 alone, token 2's from tokens 1 and 2, and so on. Only the **final** token has seen everything, so a decoder-only classifier is forced to funnel the entire document through one position's representation — which is [3.3](03-03-seq2seq-and-the-attention-mechanism.md)'s bottleneck, reappearing in a new place.

Empirically this shows up as encoder-only models remaining competitive on classification and retrieval at a fraction of the size, which is why they are still deployed for those tasks.

(c) In practice a decoder-only model is used for classification in two ways:

- **Prompting.** Pose the task in text — "Classify the sentiment of the following review: ... The sentiment is" — and read the probability the model assigns to each label token. This requires no training at all and works remarkably well for a large enough model.
- **A classification head on the last token's representation**, fine-tuned on labelled data. This is the direct analogue of [2.4](02-04-transfer-learning-and-fine-tuning.md)'s linear probe.

What it gives up: **the bidirectional representation**, as in (b), plus a great deal of efficiency. A 7-billion-parameter decoder used to classify a sentence does far more arithmetic than a 110-million-parameter encoder doing the same job, and the encoder is often as accurate. The decoder wins when you need one model for many tasks, or when no labelled data exists and prompting is the only option; the encoder wins when the task is fixed, labelled data exists, and inference cost matters.

</details>

## Flashback

**From Lesson 3.4 (self-attention: queries, keys, values):** A decoder-only model has $d = 4096$, $d_k = 128$ per head, and a context of 8,192. (a) Give the number of heads. (b) Give the number of scores computed per layer for one sequence, and the memory to store them all in 16-bit. (c) State why a memory-efficient attention implementation is required here and what it avoids materialising.

<details>
<summary>Solution</summary>

(a) $h = d/d_k = 4096/128 = \mathbf{32 \text{ heads}}$.

(b) Scores per head: $T^{2} = 8{,}192^{2} = 6.71\times10^{7}$. Across 32 heads:

$$32 \times 6.71\times10^{7} = 2.15\times10^{9} \text{ scores per layer}.$$

At 2 bytes each:

$$\mathbf{4.3\ \text{GB per layer, per sequence}}.$$

(c) A memory-efficient implementation is required because that figure is **per layer**: a 40-layer model would need 172 GB to hold every layer's attention matrix simultaneously, and even one layer's 4.3 GB is a large fraction of a device that must also hold 26 GB of weights and a 6.7 GB cache.

What it avoids materialising is **the $T \times T$ attention matrix itself.** The trick is to compute the output $AV$ in tiles: load a block of queries and a block of keys and values, compute that block's scores, accumulate a running softmax normalisation and a running weighted sum, and discard the scores before moving on. The softmax's normaliser can be maintained incrementally, so the full row of scores never has to exist at once.

The result is **exact** — not an approximation — with memory $O(T)$ instead of $O(T^{2})$, and it is usually *faster* as well, because the bottleneck at these sizes is moving data between high-bandwidth memory and the compute units rather than the arithmetic itself. Tiling keeps the working set in fast on-chip memory and reads the inputs once instead of writing and re-reading a multi-gigabyte intermediate.

The arithmetic is still $O(T^{2}d_k)$ — this changes the memory and the constant, not the asymptotic compute — which is why long-context work still needs the sparse and approximate methods of [3.3](03-03-seq2seq-and-the-attention-mechanism.md)'s P3 once $T$ grows far enough.

</details>

## Connections

- **Backward:** each layer is [3.5](03-05-the-transformer-block.md)'s block; cross-attention is [3.3](03-03-seq2seq-and-the-attention-mechanism.md)'s mechanism with the recurrence gone; the quadratic cost and the permutation equivariance that forces positional encoding are [3.4](03-04-self-attention-queries-keys-values.md)'s.
- **Forward:** [4.5](04-05-llms-self-supervision-and-scaling-laws.md) takes the decoder-only design and asks what happens as the model, the data and the compute all grow; the exposure bias noted here is part of why generation quality and training loss come apart.
- **Sideways:** the KV cache is a memoisation of values that cannot change, the same reuse that makes dynamic programming work in [`algorithms` 2.5](../../algorithms/lessons/02-05-dynamic-programming-and-knapsack.md); and the compute-bound versus memory-bandwidth-bound distinction between prompt processing and generation is the roofline reasoning of [`computer-architecture` 4.1](../../computer-architecture/lessons/04-01-caches-and-locality.md).
