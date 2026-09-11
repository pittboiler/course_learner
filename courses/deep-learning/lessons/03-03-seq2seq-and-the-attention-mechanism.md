# Deep Learning · Lesson 3.3: Seq2seq & the attention mechanism

> ⏱ ~15 min · Module 3: Sequence models & attention · Builds on: [3.2 (LSTMs, GRUs and vanishing gradients)](03-02-lstms-grus-and-vanishing-gradients.md), [3.1 (RNNs and backprop through time)](03-01-rnns-and-backprop-through-time.md) · Unlocks: [3.4 (self-attention: queries, keys, values)](03-04-self-attention-queries-keys-values.md)

## Why this matters

Translation is the task that broke the architecture. Input and output have different lengths, no alignment is given, and the model must produce the whole target from the whole source.

The natural design — encode the source into a vector, decode the target from it — works, and then fails in a way that is easy to state: **one fixed-size vector has to carry an entire sentence.** Translation quality falls as the source gets longer, and it falls for an information-theoretic reason no amount of training fixes.

Attention was invented to widen that bottleneck, and it turned out to be a far more general idea than its motivation. Within three years it had eaten the architecture it was invented to patch ([3.4](03-04-self-attention-queries-keys-values.md)), and it is now the core operation of essentially every large model.

## The idea

The encoder–decoder is two recurrent networks. The encoder reads the source and its final hidden state $v$ is a summary. The decoder starts from $v$ and generates the target one token at a time, feeding each output back as the next input.

**The bottleneck is $v$.** A 20-word sentence and a 2-word sentence get the same number of floats. Worse, the encoder has to decide what to keep *before* seeing what the decoder will need, and by [3.2](03-02-lstms-grus-and-vanishing-gradients.md) the early source words have to survive the whole recurrence to reach it.

Attention's move is simple: **do not summarise — keep everything.** Retain all encoder hidden states $h_1, \dots, h_T$, and at every decoder step build a *fresh* summary tailored to that step.

How? Score each encoder state against the decoder's current state, turn the scores into weights with a softmax, and take the weighted average:

$$\alpha_{ij} = \frac{\exp(e_{ij})}{\sum_k \exp(e_{ik})}, \qquad c_i = \sum_j \alpha_{ij}h_j.$$

So the decoder, when producing its third word, computes what it wants from the source *now* and pulls exactly that. Producing the fourth word, it looks somewhere else.

Three consequences, all large.

**The bottleneck is gone.** The information available to the decoder grows with the source length instead of being capped.

**The gradient path is length 1.** Every decoder step connects directly to every encoder state, so the gradient from output $i$ to input $j$ crosses one weighted edge rather than $|i-j|$ recurrent steps. [3.1](03-01-rnns-and-backprop-through-time.md)'s exponential attenuation does not apply.

**The weights are interpretable.** Plot $\alpha_{ij}$ as a matrix and you see which source words each target word used — a soft alignment, learned without ever being supervised.

## The formal version

> **Encoder–decoder.** Encoder: $h_j = \mathrm{RNN}_{\text{enc}}(h_{j-1}, x_j)$ for $j = 1..T$. Without attention the decoder is initialised from $v = h_T$ and runs $s_i = \mathrm{RNN}_{\text{dec}}(s_{i-1}, y_{i-1})$, with $y_i$ sampled from a softmax over $s_i$.

> **Attention.** At decoder step $i$:
> $$e_{ij} = \mathrm{score}(s_{i-1}, h_j), \qquad \alpha_{ij} = \mathrm{softmax}_j(e_{ij}), \qquad c_i = \sum_{j=1}^{T}\alpha_{ij}h_j,$$
> and the decoder uses $c_i$ alongside $s_{i-1}$ and $y_{i-1}$ to produce $s_i$.

In words: **attention is a differentiable lookup.** A hard lookup would pick one $h_j$; the softmax makes it a weighted average, which is differentiable and therefore trainable. The weights sum to 1, so the context is a convex combination of the encoder states — it lives in their convex hull and cannot manufacture anything new.

> **Score functions.**

| Name | Formula | Parameters |
|---|---|---|
| Dot product | $s^{\top}h$ | none |
| Scaled dot product | $s^{\top}h/\sqrt{d}$ | none |
| General (Luong) | $s^{\top}Wh$ | $d\times d$ |
| Additive (Bahdanau) | $v^{\top}\tanh(W_1 s + W_2 h)$ | $2d^{2} + d$ |

Additive attention came first and works when the two vectors have different dimensions. **Dot-product attention won** because it is a single matrix multiplication — no extra parameters, and it maps onto hardware built for exactly that operation. The $\sqrt{d}$ scaling is derived in [3.4](03-04-self-attention-queries-keys-values.md).

> **Cost.** Attention computes $T$ scores per decoder step, so $O(T_{\text{src}}T_{\text{tgt}})$ scores in total, each $O(d)$. Against a plain encoder–decoder's $O((T_{\text{src}}+T_{\text{tgt}})d^{2})$, this is extra work that is **fully parallel across $j$** — every score for a given step is independent.

> **Gradient path length.** Without attention, the gradient from decoder step $i$ to encoder step $j$ traverses $(T - j) + i$ recurrent steps and is attenuated accordingly. With attention there is a direct edge weighted by $\alpha_{ij}$, so the path length is 1.

This is the property that matters most, and it is worth stating as the general principle: **an architecture's ability to learn a dependency is governed by the length of the gradient path between the two positions, not by their distance in the data.** Residual connections shortened the path through depth ([2.3](02-03-deep-architectures-and-residual-connections.md)), gating shortened it through time ([3.2](03-02-lstms-grus-and-vanishing-gradients.md)), and attention makes it constant.

> **Soft alignment.** The matrix $\alpha$ is $T_{\text{tgt}}\times T_{\text{src}}$ with rows summing to 1. For translation between similar languages it is close to diagonal; where word order differs it visibly crosses, and those crossings match the reordering a linguist would annotate — learned purely from sentence pairs.

## Picture

![Two diagrams. The upper one shows an encoder chain of four hidden states feeding a single boxed vector, which then feeds a decoder chain of three states; the single vector is highlighted and captioned as the bottleneck through which everything the source said must pass. The lower one shows the same encoder and decoder chains, but with several lines of differing thickness running directly from each encoder state to a decoder state, the thickness representing the attention weight. Captions note that each decoder step forms its own weighted average of all encoder states and that the gradient path from any output to any input has length one.](assets/03-03-fig1.svg)

The upper diagram has exactly one edge between the two halves. The lower one has $T_{\text{src}} \times T_{\text{tgt}}$ of them, weighted.

**The line thicknesses are the model's output, not the designer's choice** — they are recomputed from the content at every step, so the same architecture attends to different source positions for different target words and for different sentences. That is the difference between attention and a fixed connection pattern like convolution's, and it is what makes one mechanism serve translation, summarisation and question answering without modification.

## Worked examples

**Example 1 — one attention step by hand.**

Three encoder states in two dimensions, and a decoder state:

$$h_1 = (1,0), \quad h_2 = (0,1), \quad h_3 = (1,1), \qquad s = (1, 0.5).$$

*Scores*, using the dot product:

$$e_1 = (1)(1)+(0)(0.5) = 1, \qquad e_2 = (0)(1)+(1)(0.5) = 0.5, \qquad e_3 = (1)(1)+(1)(0.5) = 1.5.$$

*Softmax.* Exponentiate: $e^{1} = 2.718$, $e^{0.5} = 1.649$, $e^{1.5} = 4.482$, summing to $8.849$.

$$\alpha = (0.307,\ 0.186,\ 0.507).$$

*Context.*

$$c = 0.307(1,0) + 0.186(0,1) + 0.507(1,1) = (0.814,\ 0.693).$$

Two things to read. **$h_3$ dominates** because it aligns best with $s$ — the dot product is a similarity, so attention retrieves by content. And **$c$ lies inside the triangle spanned by the three $h$ vectors**, since the weights are non-negative and sum to 1. Attention selects and blends; it cannot invent a direction the encoder did not produce.

A useful check on intuition: if $s$ were $(10, 5)$ — the same direction, ten times longer — the scores would be $10, 5, 15$ and the softmax would give $(0.0066, 0.0000, 0.9933)$, essentially a hard selection of $h_3$. **The magnitude of the query controls how sharp the attention is**, which is exactly the issue the $\sqrt{d_k}$ scaling of [3.4](03-04-self-attention-queries-keys-values.md) exists to manage.

**Example 2 — why the bottleneck fails, and by how much.**

A plain encoder–decoder with $d = 512$ hidden units encodes any source sentence into 512 floats.

A 40-word sentence, with a vocabulary of 32,000 and even a generous estimate of redundancy, carries on the order of several hundred bits of content. The 512-float vector has ample raw capacity in principle — but the encoder must decide **what to keep before knowing what will be asked**, and it must route early words through 40 recurrent steps to get them there ([3.2](03-02-lstms-grus-and-vanishing-gradients.md)'s attenuation).

The empirical signature is sharp. Translation quality for plain encoder–decoders is flat up to about 20 source words and then **degrades steadily**, while the attention version stays flat well past 60. Reversing the source sentence — a trick that was standard before attention — helped measurably, which tells you the problem was distance from the summary rather than capacity: reversal puts the *first* source words nearest the decoder, and the first words are where translation starts.

That the trick worked at all is the diagnosis. **A model whose quality depends on which end of the input you put nearest the output has a path-length problem, not a capacity problem**, and attention solves path length directly.

Cost of the fix: $T_{\text{src}}T_{\text{tgt}}$ scores instead of none. For a 40-word source and 45-word target that is 1,800 dot products of dimension 512, about 900,000 multiply-adds per layer — trivial next to the recurrence's own arithmetic, and entirely parallel across $j$.

## Watch out

- You might think attention replaces the recurrence. In this lesson it does not — the encoder and decoder are still RNNs, and attention is a connection between them. Removing the recurrence entirely is [3.4](03-04-self-attention-queries-keys-values.md), and it was not obvious that it would work.
- You might think the attention weights explain the model's reasoning. They show which positions contributed to the context vector, which is genuinely informative and is not an explanation. A low weight does not mean a position had no influence, since information also flows through the recurrence.
- You might think a softmax over encoder states is a lookup. It is a **weighted average**, so the context is always inside the convex hull of the encoder states. If the decoder needs something none of the encoder states encodes, attention cannot produce it.

## One-liner

> Stop summarising the source into one vector and instead let every output step compute its own content-weighted average of all of it, which removes the bottleneck and makes the gradient path between any two positions length 1.

## Problems

**P1 (🟢)** Four encoder states $h_1 = (2,0)$, $h_2 = (0,2)$, $h_3 = (1,1)$, $h_4 = (-1,1)$ and a decoder state $s = (1,1)$. (a) Compute the dot-product scores. (b) Compute the attention weights. (c) Compute the context vector, and state which encoder state dominates and why.

**P2 (🟡)** A translation model handles 20-word sentences well and degrades badly at 60 words. (a) Name the two distinct mechanisms causing this in a plain encoder–decoder, and say which lesson each comes from. (b) State why reversing the source sentence helps, and what that tells you about the diagnosis. (c) State what attention fixes and what it does not.

**P3 (🔴, optional)** A team adds attention to a summarisation model with a 2,000-token source and a 100-token summary, hidden dimension 512. (a) Give the number of attention scores computed per layer for one example, and the multiply-add count. (b) Compare with the encoder recurrence's own cost and say which dominates. (c) State the scaling problem this creates when the source grows to 100,000 tokens, and name one class of remedy.

<details>
<summary>Solutions</summary>

**P1** (a) Dot products with $s = (1,1)$:

$$e_1 = 2+0 = 2, \quad e_2 = 0+2 = 2, \quad e_3 = 1+1 = 2, \quad e_4 = -1+1 = 0.$$

(b) Exponentiate: $e^{2} = 7.389$ three times and $e^{0} = 1$, summing to $23.167$.

$$\alpha = \left(\frac{7.389}{23.167},\ \frac{7.389}{23.167},\ \frac{7.389}{23.167},\ \frac{1}{23.167}\right) = (0.319,\ 0.319,\ 0.319,\ 0.043).$$

(c) Context:

$$c = 0.319(2,0) + 0.319(0,2) + 0.319(1,1) + 0.043(-1,1) = (0.914,\ 0.999).$$

Computing the first coordinate: $0.638 + 0 + 0.319 - 0.043 = 0.914$. The second: $0 + 0.638 + 0.319 + 0.043 = 1.000$.

**No single state dominates** — the first three tie at weight 0.319 because they all have dot product 2 with $s$, and the fourth is suppressed at 0.043 because it is nearly orthogonal to $s$. This is the instructive case: attention scores measure **alignment with the query**, not magnitude or any intrinsic property, so $h_1$ and $h_3$ score equally despite having different lengths. The resulting context points close to $s$'s own direction, which is what content-based retrieval looks like.

**P2** (a) Two mechanisms:

- **The fixed-size bottleneck.** The entire source must be represented in one $d$-dimensional vector regardless of length, and the encoder must choose what to keep before knowing what the decoder will need. This lesson.
- **Gradient and information attenuation through the recurrence.** Early source words must survive 60 recurrent steps to reach the summary vector, and both the forward signal and the backward gradient decay along the way — [3.1](03-01-rnns-and-backprop-through-time.md)'s matrix-power problem, mitigated but not removed by gating ([3.2](03-02-lstms-grus-and-vanishing-gradients.md)).

(b) Reversing the source puts the **first** source words closest to the encoder's final state, and therefore closest to where the decoder starts. Since translation typically begins with the material at the start of the sentence, the words the decoder needs first are now the ones least attenuated.

What it tells you: **the problem is path length, not capacity.** If the 512-dimensional vector were simply too small, reordering the input could not help — the same amount of information would have to fit either way. That a permutation of the input changes the result means the model's difficulty is with *distance between related positions*, which is exactly what attention shortens.

(c) **Attention fixes** the bottleneck, since the decoder sees all $T$ encoder states rather than a summary, and the path length, since every decoder step connects directly to every encoder state.

**It does not fix** the sequential computation — the encoder is still an RNN and its $T$ steps still run in order, so training time still scales with source length in a way parallel hardware cannot reduce. Nor does it fix the encoder's own internal attenuation: $h_j$ itself is still computed by a recurrence and still summarises its own prefix imperfectly. Both remaining problems are what [3.4](03-04-self-attention-queries-keys-values.md) removes by discarding the recurrence.

**P3** (a) Scores are one per (source, target) pair:

$$2{,}000 \times 100 = \mathbf{200{,}000 \text{ scores}}.$$

Each is a dot product in dimension 512, so

$$200{,}000 \times 512 = \mathbf{1.024\times10^{8} \text{ multiply-adds}}.$$

(b) The encoder recurrence costs roughly $O(Td^{2})$ per layer — for an LSTM, four gate computations each $d \times (d + n)$:

$$2{,}000 \times 4 \times 512 \times 1{,}024 \approx 4.2\times10^{9} \text{ multiply-adds}.$$

**The recurrence dominates**, by a factor of about 40. At these lengths attention is cheap, which is why it was adopted without much concern about its cost.

(c) At 100,000 source tokens the score count becomes $100{,}000 \times 100 = 10^{7}$, still manageable for an encoder–decoder — but the real problem appears in **self**-attention ([3.4](03-04-self-attention-queries-keys-values.md)), where every position attends to every other and the count is $T^{2}$ rather than $T_{\text{src}}T_{\text{tgt}}$:

$$(10^{5})^{2} = 10^{10} \text{ scores per head per layer},$$

with the same figure in memory if the attention matrix is materialised. That is the quadratic wall, and it is the central scaling constraint of modern sequence models.

Classes of remedy:

- **Sparse or local attention** — restrict each position to a window, a strided pattern, or a set of global tokens, giving $O(T\sqrt{T})$ or $O(T)$.
- **Low-rank or kernel approximations** — approximate the softmax so the product can be reassociated, giving linear cost.
- **Memory-efficient exact attention** — never materialise the $T\times T$ matrix, computing it in tiles so memory is $O(T)$ while the arithmetic stays quadratic. This is the approach that dominates in practice, because it changes the constant and the memory without approximating anything.
- **Retrieval** — keep a short attended context and fetch the rest from an external store, changing the problem rather than the operation.

</details>

## Flashback

**From Lesson 3.1 (RNNs and backprop through time):** In a plain encoder–decoder, the gradient from decoder step 5 must reach encoder step 2 of a 40-word source. (a) Count the recurrent steps the gradient traverses. (b) With a per-step factor of 0.95, give the attenuation. (c) Give the corresponding figure with attention and state what changed.

<details>
<summary>Solution</summary>

(a) The gradient travels from decoder step 5 back to the start of the decoder — 5 steps — then through the summary vector into the encoder's final state, and back along the encoder from step 40 to step 2 — 38 steps. Total:

$$5 + 38 = \mathbf{43 \text{ recurrent steps}}.$$

(b) At 0.95 per step:

$$0.95^{43} = \mathbf{0.11}.$$

About a ninefold attenuation. Not catastrophic at this length, which is why plain encoder–decoders worked at all on short sentences — and at 100 source words the same calculation gives $0.95^{103} = 5.2\times10^{-3}$, and at 200 words $3.0\times10^{-5}$.

(c) With attention there is a **direct edge** from decoder step 5 to encoder state $h_2$, weighted by $\alpha_{5,2}$. The gradient path is

$$\mathbf{1 \text{ step}},$$

attenuated only by the attention weight itself, which is a number the model chooses and will make large precisely when that connection matters.

What changed is that **distance stopped appearing in the exponent.** In (b) the attenuation is $0.95^{\text{distance}}$; with attention it is $\alpha$, independent of how far apart the two positions are. That is the same structural move as [2.3](02-03-deep-architectures-and-residual-connections.md)'s identity path and [3.2](03-02-lstms-grus-and-vanishing-gradients.md)'s cell highway — shorten the gradient path rather than improve the per-step factor — and it is the strongest version of the three, because the path length becomes constant rather than merely shorter.

One honest qualification: the encoder state $h_2$ is itself computed by two recurrent steps from the input, so the path from the *loss* to the *input embedding* at position 2 is 3 rather than 1. Attention removes the long-range part, not every recurrence.

</details>

## Connections

- **Backward:** the bottleneck this fixes is a consequence of [3.1](03-01-rnns-and-backprop-through-time.md)'s fixed-size hidden state, and the path-length argument is [2.3](02-03-deep-architectures-and-residual-connections.md)'s and [3.2](03-02-lstms-grus-and-vanishing-gradients.md)'s idea taken to its limit.
- **Forward:** [3.4](03-04-self-attention-queries-keys-values.md) asks what happens if a sequence attends to *itself* and drops the recurrence, which turns this auxiliary mechanism into the whole architecture; the quadratic cost priced in P3 is the constraint that shapes [3.6](03-06-full-transformer-architectures.md) and [4.5](04-05-llms-self-supervision-and-scaling-laws.md).
- **Sideways:** the softmax-weighted average is a differentiable relaxation of a hard lookup, the same "make the discrete choice soft so it can be trained" move as the soft assignments of [`machine-learning` 3.6](../../machine-learning/lessons/03-06-the-em-algorithm.md)'s E step; the alignment matrix is the same object as a translation alignment in classical statistical machine translation, learned here as a by-product rather than estimated directly.
