# Deep Learning · Lesson 4.5: LLMs, self-supervision & scaling laws

> ⏱ ~15 min · Module 4: Generative models & modern practice · Builds on: [3.6 (full transformer architectures)](03-06-full-transformer-architectures.md), [4.1 (autoencoders and representation learning)](04-01-autoencoders-and-representation-learning.md) · Unlocks: [`reinforcement-learning`](../../reinforcement-learning/syllabus.md)

## Why this matters

[3.6](03-06-full-transformer-architectures.md) built a decoder-only transformer and noted that its objective — predict the next token — needs no labels. This lesson is about what happens when you take that seriously and make the model, the data and the compute very large.

What happens is a **power law**. Test loss falls as a straight line against compute on log-log axes, across six orders of magnitude, with no threshold and no visible plateau. That regularity is the empirical fact the last several years of the field have been built on, and it is unusual enough to be worth understanding precisely: it lets you predict a model's loss before training it, and it tells you how to divide a budget between parameters and data.

It also has real limits, and the honest account includes them. A scaling law predicts *loss*, which is not the same as capability, and nothing in it says the line continues.

## The idea

**Self-supervision is the unlock.** Supervised learning needs labels and labels are scarce. Next-token prediction needs only text, and every token is a training target given its prefix — so a sequence of length $T$ yields $T$ training signals from one forward pass ([3.6](03-06-full-transformer-architectures.md)'s causal mask, read as a triangle of prediction problems). The available data becomes "everything ever written" rather than "everything anyone labelled".

**The objective is harder than it sounds.** To predict the next token well you must model syntax, then facts, then arithmetic, then the structure of arguments — because all of those determine what comes next. The loss is a scalar; the competence required to reduce it is not.

**And the loss falls predictably.** Train models across a wide range of sizes and data budgets, plot test loss against compute, and the points fall on a line in log-log space:

$$L(C) \approx \left(\frac{C_c}{C}\right)^{\alpha}, \qquad \alpha \approx 0.05.$$

Ten times the compute buys about **11 percent** less loss. That sounds unimpressive and compounds: a thousandfold increase is a 30 percent reduction, and in a regime where the difference between usable and unusable is a few percent of loss, it has been enough.

**The budget question has an answer.** Given a fixed compute budget, should you train a large model on little data or a small model on lots? Neither: the compute-optimal choice scales **both together**, roughly as the square root of the budget each, which for a transformer works out to about 20 training tokens per parameter.

Then the part that is genuinely unsettled. As models scale, some capabilities appear to arrive **abruptly** — near-zero performance until a threshold, then rapid improvement. Whether that reflects something real in the model or is an artefact of using all-or-nothing metrics is actively disputed, and the disagreement matters for what anyone should predict.

## The formal version

> **The objective.** For a corpus of token sequences,
> $$L = -\frac{1}{T}\sum_{t=1}^{T} \log p_\theta\big(x_t \mid x_{<t}\big),$$
> the mean cross-entropy in nats per token.

> **Perplexity** is $\exp(L)$, interpretable as the effective number of equally likely choices the model is deciding between.

| Loss (nats) | Perplexity | Bits per token |
|---|---|---|
| 2.30 | 10.0 | 3.32 |
| 1.80 | 6.0 | 2.60 |
| 1.60 | 5.0 | 2.31 |

Bits per token is $L/\ln 2$, and it connects directly to compression: **a language model is a compressor**, and its loss is the length of the code it would assign ([`information-theory` 2.2](../../information-theory/lessons/02-02-source-coding-theorem.md)).

> **Scaling laws.** Over the range studied, and with the other factors not binding,
> $$L(N) \approx \left(\frac{N_c}{N}\right)^{\alpha_N}, \quad L(D) \approx \left(\frac{D_c}{D}\right)^{\alpha_D}, \quad L(C) \approx \left(\frac{C_c}{C}\right)^{\alpha_C},$$
> with $N$ parameters, $D$ training tokens, $C$ compute, and exponents around $\alpha_N \approx 0.076$, $\alpha_D \approx 0.095$, $\alpha_C \approx 0.050$.

**Each law holds only while its factor is the bottleneck.** Grow $N$ with $D$ fixed and the curve bends away from the line as the model starts to overfit the data it has — the laws describe a frontier, not any single run.

> **Training compute.** For a transformer,
> $$C \approx 6ND \text{ FLOPs},$$
> where the 6 counts two floating-point operations per parameter in the forward pass and roughly twice that in the backward.

A worked instance: $N = 7\times10^{10}$ and $D = 1.4\times10^{12}$ gives

$$C = 6(7\times10^{10})(1.4\times10^{12}) = 5.9\times10^{23} \text{ FLOPs}.$$

At an effective $4\times10^{14}$ FLOP/s per accelerator that is about 17,000 accelerator-days, or 17 days on a thousand of them.

> **Compute-optimal scaling (Chinchilla).** Minimising $L$ subject to $C = 6ND$ gives $N \propto C^{1/2}$ and $D \propto C^{1/2}$, so
> $$\frac{D}{N} \approx 20 \text{ tokens per parameter}.$$

**This corrected a widespread error.** Earlier practice built very large models on comparatively little data; the compute-optimal analysis showed that a model *four times smaller* trained on four times more data reaches a lower loss for the same budget — and is four times cheaper to run afterwards. Inference cost scales with $N$ and not with $D$, so the practical optimum for a deployed model sits even further toward more data than the training-optimal point.

> **Emergence.** Some benchmark scores stay near chance across several orders of magnitude and then rise sharply. Whether this is a property of the model or of the metric is disputed: many apparent discontinuities smooth out when the metric is changed from exact-match to a continuous measure such as log-likelihood of the correct answer.

The careful statement: **the underlying loss improves smoothly, and some thresholded measurements of it do not.** That does not settle whether anything qualitatively new appears, and it is a good example of a place where the measurement apparatus shapes the claim.

> **Post-training.** A pretrained model predicts likely continuations, which is not the same as being useful. Two further stages are standard:
> - **Instruction tuning:** supervised fine-tuning on demonstration data, which is [2.4](02-04-transfer-learning-and-fine-tuning.md)'s fine-tuning applied to behaviour rather than to a new task.
> - **Preference optimization:** train on comparisons between outputs, either through a learned reward model and a policy-gradient method or directly. The machinery belongs to [`reinforcement-learning`](../../reinforcement-learning/syllabus.md).

> **What scaling does not give.** Reliable factuality, calibrated uncertainty, robustness to distribution shift, or any guarantee. The loss going down does not make the model right, and a model trained to predict plausible continuations will produce plausible falsehoods — an objective-level property, not a bug to be trained away.

## Picture

![A log-log plot with training compute in FLOPs on the horizontal axis from ten to the eighteenth to ten to the twenty-fourth, and loss in nats on the vertical. A straight blue line descends across the whole range with a slope of minus 0.05, annotated that ten times the compute buys about eleven percent less loss. A dashed horizontal coral line near the bottom marks the irreducible entropy of the data. Captions state that a straight line on log-log axes means a power law, and that the compute-optimal allocation of a tenfold budget increase is the square root of ten times more parameters and the square root of ten times more data, about twenty tokens per parameter.](assets/04-05-fig1.svg)

The straightness is the whole finding. **A power law over six orders of magnitude is a strong regularity**, and it is what makes the economics of the field legible: you can fit the line on small models and predict what a run a thousand times larger will cost and achieve, before committing to it.

The dashed floor matters as much as the slope. Text has irreducible entropy — genuine unpredictability that no model can remove — so the line cannot continue to zero. The measured laws include that offset, and the practical question is always how far above the floor you are, not how low the loss is in absolute terms.

What the picture does not show, and cannot: whether the line continues past its right edge, and what a given loss means for what the model can *do*.

## Worked examples

**Example 1 — budgeting a training run.**

A team has $10^{23}$ FLOPs. How large a model, and how many tokens?

From $C = 6ND$ and the compute-optimal ratio $D = 20N$:

$$10^{23} = 6N(20N) = 120N^{2} \implies N^{2} = 8.3\times10^{20} \implies N = 2.9\times10^{10}.$$

So about **29 billion parameters** trained on $D = 20N = 5.8\times10^{11}$, about **580 billion tokens**.

Now check two alternatives at the same budget.

*A bigger model on less data:* $N = 10^{11}$ forces $D = C/(6N) = 1.7\times10^{11}$, giving $D/N = 1.7$ tokens per parameter. Far below 20, so the model is badly undertrained — this is precisely the regime the pre-Chinchilla generation of models sat in, and they left substantial loss on the table.

*A smaller model on more data:* $N = 10^{10}$ gives $D = 1.7\times10^{12}$, or 170 tokens per parameter. Above the training-optimal ratio, so the loss at fixed budget is slightly worse than the optimum.

But **the second error is the better one to make**, and the reason is not in the scaling law. Inference cost is proportional to $N$ and independent of $D$, so the 10-billion model costs a third as much per query as the 29-billion one for a slightly higher loss. For a model that will serve many requests, the total-cost optimum sits well past the training-optimal point — which is why deployed models are routinely trained far beyond 20 tokens per parameter.

**Example 2 — what a tenfold compute increase actually buys.**

Take $\alpha_C = 0.05$ and a model at loss 1.80 nats, perplexity 6.0.

*Ten times the compute:*

$$L' = 1.80 \times 10^{-0.05} = 1.80(0.891) = 1.604 \text{ nats}, \qquad \text{perplexity } 4.97.$$

A drop of 0.196 nats, or 0.28 bits per token, and the model now chooses among an effective 5 options instead of 6.

*A hundred times:* $L' = 1.80(0.794) = 1.43$ nats, perplexity 4.18.

*A thousand times:* $L' = 1.80(0.708) = 1.27$ nats, perplexity 3.57.

**Three orders of magnitude in compute for a 29 percent reduction in loss.** Stated that way it sounds like a poor return, and the counter-observation is that this is the *only* known lever that reliably works, and that small differences in loss have corresponded to large differences in what models can do.

The honest caveats are three, and each is load-bearing.

**The law describes the frontier, not any run.** Each of those tenfold increases requires scaling $N$ and $D$ together by $\sqrt{10} = 3.16$ each. Scaling only one bends off the line.

**Loss is not capability.** The relationship between a 0.2-nat improvement and any particular downstream task is empirical, varies by task, and is not predicted by the scaling law.

**Nothing guarantees extrapolation.** A power law fitted over $10^{18}$ to $10^{24}$ says nothing about $10^{27}$, and data is finite — the $D$ side of the compute-optimal frontier runs into the quantity of text that exists, which is the constraint currently binding hardest.

## Watch out

- You might think a scaling law predicts capability. It predicts **loss**. The map from loss to what a model can do is empirical, task-dependent, and is exactly where the emergence dispute lives.
- You might think bigger is always better at fixed compute. It is not: past the compute-optimal point the model is undertrained, and a smaller model on more data reaches a lower loss for the same budget — and is cheaper to serve.
- You might think an apparent discontinuity in a benchmark is a discontinuity in the model. Thresholded metrics manufacture sharp curves from smooth underlying improvement. Check whether the effect survives a continuous metric before concluding anything about the model.

## One-liner

> Predict the next token on everything ever written, and the loss falls as a power law in compute — provided you scale parameters and data together, at roughly twenty tokens per parameter.

## Problems

**P1 (🟢)** A model has 13 billion parameters and is trained on 260 billion tokens. (a) Compute the training FLOPs using $C \approx 6ND$. (b) Give the tokens-per-parameter ratio and state whether this is compute-optimal. (c) At $3\times10^{14}$ effective FLOP/s per accelerator, give the accelerator-days.

**P2 (🟡)** A team's model sits at 2.10 nats and they have budget for 30 times more compute. (a) Using $\alpha_C = 0.05$, give the projected loss and perplexity before and after. (b) Give the factor by which $N$ and $D$ should each grow. (c) State two reasons the projection might not hold.

**P3 (🔴, optional)** A benchmark shows near-zero accuracy for models up to $10^{22}$ FLOPs and 60 percent above $10^{23}$, and a paper calls this an emergent capability. (a) State the alternative explanation and the mechanism. (b) Give the specific measurement that would distinguish the two. (c) State what follows for prediction under each explanation.

<details>
<summary>Solutions</summary>

**P1** (a) $$C = 6(1.3\times10^{10})(2.6\times10^{11}) = 6 \times 3.38\times10^{21} = \mathbf{2.03\times10^{22}\ \text{FLOPs}}.$$

(b) $$\frac{D}{N} = \frac{2.6\times10^{11}}{1.3\times10^{10}} = \mathbf{20 \text{ tokens per parameter}},$$

which is **exactly the compute-optimal ratio**. The model is neither undertrained nor over-trained relative to the training-compute frontier.

(Whether it is optimal *overall* is a different question. If the model will serve a large volume of queries, a smaller model on proportionally more data would have a slightly higher loss and a proportionally lower inference cost, and that trade usually favours the smaller model.)

(c) $$\frac{2.03\times10^{22}}{3\times10^{14}} = 6.8\times10^{7}\ \text{seconds} = \frac{6.8\times10^{7}}{86{,}400} \approx \mathbf{780\ \text{accelerator-days}},$$

so about 8 days on 100 accelerators, assuming perfect scaling — which is optimistic, since communication overhead and pipeline bubbles typically cost 10 to 40 percent at this scale.

**P2** (a) With $L' = L \times 30^{-0.05}$:

$$30^{-0.05} = e^{-0.05\ln 30} = e^{-0.05(3.401)} = e^{-0.170} = 0.844.$$

$$L' = 2.10 \times 0.844 = \mathbf{1.77\ \text{nats}}.$$

Perplexity before: $e^{2.10} = \mathbf{8.17}$. After: $e^{1.77} = \mathbf{5.87}$.

So a thirtyfold compute increase takes the model from choosing among about 8 effective options to about 6.

(b) On the compute-optimal frontier, $N \propto C^{1/2}$ and $D \propto C^{1/2}$, so each should grow by

$$\sqrt{30} = \mathbf{5.5\times}.$$

Both together: $5.5 \times 5.5 = 30$, which recovers the compute factor. Growing only the model, or only the data, by 30 would leave the frontier and deliver substantially less than the projected improvement.

(c) Two reasons the projection might not hold:

- **The data may not exist.** Growing $D$ by 5.5 times requires 5.5 times more text of comparable quality, and at current scales the high-quality corpus is close to exhausted. Training on repeated data departs from the law — repetition helps for a few epochs and then stops, so the $D$ side of the frontier is a hard constraint rather than a budget question.
- **The law was fitted over a finite range.** The exponents come from runs spanning a particular window of compute, and a power law is a local description. Nothing guarantees the line continues, and departures at the top end would not be visible in the fit.

Two more worth naming: the exponent $\alpha_C \approx 0.05$ is **architecture- and data-dependent**, so a fit from published models may not transfer to this team's setup; and at this scale the run may be limited by engineering — hardware failures, instability requiring restarts, communication overhead — none of which the compute number captures.

**P3** (a) The alternative explanation is that **the metric, not the model, is discontinuous.**

The mechanism: a benchmark scored by exact match gives zero credit for a nearly-correct answer. Suppose the task requires producing a five-token answer correctly. If the model's per-token accuracy rises smoothly from 0.5 to 0.9, the exact-match score rises as $p^{5}$ — from $0.5^{5} = 3$ percent to $0.9^{5} = 59$ percent. **A smooth, gradual improvement in the underlying quantity becomes a sharp jump in the reported one**, purely because the metric composes several chances to fail.

The same happens with any thresholded or all-or-nothing measure: multiple-choice accuracy, exact numerical match, pass-or-fail unit tests.

(b) The distinguishing measurement is to **re-score the same models on a continuous metric** — for instance the log-likelihood the model assigns to the correct answer, or per-token accuracy, or an edit distance to the correct output.

If those rise **smoothly** across the range where exact-match jumps, the discontinuity is in the metric. If they *also* jump, something in the model changed abruptly and the emergence claim survives. Running this check is cheap, since it uses the same models and the same benchmark, and in many published cases the curves do smooth out.

A complementary check: look for the jump at intermediate scales by evaluating more model sizes between $10^{22}$ and $10^{23}$. A genuine threshold should be sharp at fine resolution; a metric artefact resolves into a steep but continuous curve.

(c) What follows for prediction:

- **If it is a metric artefact**, capability is predictable. The underlying quantity follows the smooth scaling law, so you can fit it on small models and extrapolate, and the apparent jump is a known nonlinearity you can compute through. This is the comfortable case and the one the evidence currently favours for many reported examples.

- **If emergence is real**, capability is *not* predictable from small-scale runs, because a behaviour absent at every tested scale may appear at the next. That is a substantively different situation: the standard practice of validating a design on small models and scaling up would give no information about the capabilities that matter, and there would be no way to know in advance what a larger model will be able to do.

The stakes are why the dispute is worth following carefully rather than treating as terminology. **It is a question about whether the field's main empirical tool — extrapolate from small runs — works for the things people actually care about**, and the answer is currently "for loss, yes; for capabilities, partly, and we cannot fully say which ones".

</details>

## Flashback

**From Lesson 3.6 (full transformer architectures):** A decoder-only model's causal mask produces one prediction target per position. (a) For a 2,048-token sequence, give the number of training signals per forward pass, and compare with a masked-language-model objective that masks 15 percent of tokens. (b) State what this implies about data efficiency. (c) State the one thing the masked objective gets that the causal one does not.

<details>
<summary>Solution</summary>

(a) The causal objective predicts **every** position from its prefix, so a 2,048-token sequence yields

$$\mathbf{2{,}048 \text{ training signals}}$$

from one forward pass.

A masked-language-model objective masks 15 percent of tokens and predicts only those:

$$0.15 \times 2{,}048 \approx \mathbf{307 \text{ signals}},$$

about **6.7 times fewer**, from a forward pass of the same cost.

(b) The causal objective is roughly **6.7 times more data-efficient per unit of compute**, and that ratio understates the advantage in one respect: the masked model must also see each document several times with different masks to extract the signal that the causal model gets in one pass, so the effective gap in wall-clock training is larger still.

This is a substantial part of why decoder-only architectures dominate at scale. When the binding constraint is compute — and on the compute-optimal frontier it is — an objective that extracts seven times more supervision per FLOP is a large advantage, compounding over a training run measured in $10^{23}$ operations.

(c) The masked objective gets **bidirectional context**: when predicting a masked token it sees the text on both sides, so the representation of every position is built from the whole document.

The causal model cannot do this by construction ([3.6](03-06-full-transformer-architectures.md)). Position 1 sees only itself at every layer, and only the final position has seen everything, so the representations of early tokens are built from strictly less information.

That is why encoder-only models remain competitive on classification and retrieval at a fraction of the parameter count — tasks where you have the whole input and want a representation of it, rather than tasks where you must produce the next thing. **The two objectives are not better and worse; they buy different things, and the field chose the one whose advantage compounds with scale.**

</details>

## Connections

- **Backward:** the architecture is [3.6](03-06-full-transformer-architectures.md)'s decoder-only stack, the objective is [4.1](04-01-autoencoders-and-representation-learning.md)'s denoising idea in its most productive form, and the pretrain-then-adapt pattern is [2.4](02-04-transfer-learning-and-fine-tuning.md) at a different scale — with LoRA the standard way to specialise a model this large.
- **Forward:** preference optimization and the policy-gradient machinery behind it belong to [`reinforcement-learning`](../../reinforcement-learning/syllabus.md), which is the natural next course.
- **Sideways:** cross-entropy per token is a code length, so a language model is a compressor and its loss is bounded below by the source's entropy ([`information-theory` 2.2](../../information-theory/lessons/02-02-source-coding-theorem.md)); the compute-optimal allocation is a constrained optimisation of the kind [`convex-optimization` 3.1](../../convex-optimization/lessons/03-01-lagrangian-dual-function.md) formalises, minimising loss subject to $C = 6ND$.

## Closing the course

You began with a linear model and a hidden layer. Twenty-two lessons later the same three ideas are doing all the work.

**Composition beats addition.** A hidden layer buys expressiveness only through its nonlinearity ([1.1](01-01-from-linear-models-to-the-mlp.md)), and depth buys it exponentially where width buys it linearly ([1.2](01-02-universal-approximation.md)). The same argument reappears as receptive-field growth in a convolutional stack ([2.2](02-02-building-a-convolutional-network.md)) and as the compounding of attention layers ([3.6](03-06-full-transformer-architectures.md)).

**Gradients travel a path, and the path's length is what matters.** Every architecture in Modules 2 and 3 is a way of shortening it. Residual connections give depth an identity route ([2.3](02-03-deep-architectures-and-residual-connections.md)); gating gives time an additive one ([3.2](03-02-lstms-grus-and-vanishing-gradients.md)); attention makes the distance between any two positions exactly one ([3.3](03-03-seq2seq-and-the-attention-mechanism.md), [3.4](03-04-self-attention-queries-keys-values.md)). Initialization and normalization are the same concern at a different scale — control the factor the gradient picks up per layer ([1.5](01-05-adaptive-optimizers-schedules-and-initialization.md), [1.6](01-06-normalization.md)).

**An architecture is a hypothesis about the data's symmetry.** Convolution asserts that position does not change meaning ([2.1](02-01-the-convolution-operation.md)); recurrence asserts the same about time ([3.1](03-01-rnns-and-backprop-through-time.md)); attention asserts nothing and pays for it quadratically ([3.4](03-04-self-attention-queries-keys-values.md)). Choosing an architecture is choosing what to share, and it is worth asking whether the assertion is true of your data before adopting it.

Three habits are worth more than any specific architecture.

**Count before you train.** Parameters, output shapes, receptive fields, memory, FLOPs. Most design errors are visible in arithmetic — a receptive field too small for the object ([2.2](02-02-building-a-convolutional-network.md)), an initialization off by $\sqrt 2$ per layer ([1.5](01-05-adaptive-optimizers-schedules-and-initialization.md)), a KV cache larger than the weights ([3.6](03-06-full-transformer-architectures.md)) — and none of them is visible in a loss curve.

**Name the gap before you reach for a cure.** Regularization helps only when the train–test gap is the problem ([1.7](01-07-regularization.md)); a deeper model that trains worse indicts the optimizer, not the capacity ([2.3](02-03-deep-architectures-and-residual-connections.md)); a model that will not train past chance usually has a scaling problem, not a capacity one.

**Watch what the objective actually rewards.** Reconstruction rewards keeping high-variance nuisance ([4.1](04-01-autoencoders-and-representation-learning.md)). A likelihood is mode-covering and an adversarial game is mode-seeking ([4.3](04-03-generative-adversarial-networks.md)). The ELBO does not want an informative latent ([4.2](04-02-variational-autoencoders.md)). A next-token loss rewards plausibility, not truth ([4.5](04-05-llms-self-supervision-and-scaling-laws.md)). In every case the model did exactly what was asked, and the surprise was in the asking.

And the field is not finished. Why over-parameterised networks generalize at all remains open ([`statistical-learning` 5.5](../../statistical-learning/lessons/05-05-why-does-deep-learning-generalize.md)), the quadratic cost of attention at long context is an active constraint, and whether the scaling line continues is a question nobody can answer from the data we have.
