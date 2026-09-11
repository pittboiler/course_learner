# Deep Learning · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Deep learning is the business of stacking differentiable layers, getting gradients through the stack, and choosing an architecture that matches the structure of the data. This card holds what you would otherwise hunt for mid-problem: every shape and parameter-count formula, the optimizer and initialization rules with their constants, the attention and transformer arithmetic, the generative-model objectives, and the failure modes each architecture invites.

## Scope and ownership

Three built courses touch this material closely. The split is deliberate, and the neighbouring card is often worth having open too.

| Topic | Owned by | Note |
|---|---|---|
| The learning problem, bias–variance, gradient descent, linear and logistic regression, ridge and lasso, **the 2–2–1 hand trace of forward and backward propagation** | [`machine-learning`](../machine-learning/syllabus.md), especially [4.4](../machine-learning/lessons/04-04-a-taste-of-neural-networks.md) | that lesson does the arithmetic drill and explicitly cedes architectures, initialization and training dynamics here; [1.3](lessons/01-03-backpropagation-and-automatic-differentiation.md) owns the **graph** view — reverse versus forward mode, vector–Jacobian products, shared-weight accumulation, memory and checkpointing |
| Networks as a **hypothesis class**: the universal approximation theorem and its three silences, VC dimension of order $WL\log W$, the excess-risk decomposition | [`statistical-learning` 5.4](../statistical-learning/lessons/05-04-neural-networks-and-backpropagation.md) | [1.2](lessons/01-02-universal-approximation.md) owns the **constructive** side — the ReLU bump, the curse of dimensionality, and the depth-versus-width separation |
| **Why deep learning generalizes**: double descent, interpolation, implicit bias, the randomization experiment | [`statistical-learning` 5.5](../statistical-learning/lessons/05-05-why-does-deep-learning-generalize.md) | this course takes generalization as an empirical fact and works on the engineering; the open question lives there |
| PCA, and the theorem that a **linear** autoencoder with squared error is exactly PCA | [`statistical-learning` 6.1](../statistical-learning/lessons/06-01-principal-component-analysis.md) | [4.1](lessons/04-01-autoencoders-and-representation-learning.md) owns the **nonlinear** case and what a bottleneck buys |
| The EM algorithm and mixture models | [`machine-learning` 3.6](../machine-learning/lessons/03-06-the-em-algorithm.md) | [4.2](lessons/04-02-variational-autoencoders.md) owns the **amortised, approximate** version: the ELBO with a learned encoder and the reparameterization trick |
| Convolution as an LTI operation, with the kernel flip, the convolution theorem and frequency response | [`signals-systems` 1.5](../signals-systems/lessons/01-05-convolution-discrete-time.md) | [2.1](lessons/02-01-the-convolution-operation.md) owns convolution as a **learned, weight-shared layer** — and notes that deep learning's version is cross-correlation, with no flip |
| Convexity, duality, first-order methods and their convergence rates | [`convex-optimization`](../convex-optimization/syllabus.md) | [1.4](lessons/01-04-sgd-mini-batches-and-momentum.md) owns the **stochastic, non-convex** setting: mini-batch noise, saddle points, momentum as an accelerator |
| Entropy, KL divergence, cross-entropy, source coding | [`information-theory`](../information-theory/syllabus.md) | used here without re-derivation, in the ELBO, the JSD identity, and the loss-as-code-length reading |
| Policy gradients, reward models, anything with a reward signal | [`reinforcement-learning`](../reinforcement-learning/syllabus.md) | [4.5](lessons/04-05-llms-self-supervision-and-scaling-laws.md) names preference optimization and hands off |
| Everything else here | **this course** | |

**Convention warnings**, because two cards may be open at once.

- **$W$ is overloaded and the collision is standard.** Here it is a weight matrix. In [`statistical-learning` 5.4](../statistical-learning/lessons/05-04-neural-networks-and-backpropagation.md) it is the total parameter *count* in the VC bound $WL\log W$. Context always disambiguates.
- **"Convolution" here means cross-correlation** — the kernel is not flipped. Harmless for learned kernels, and a real trap when comparing against an analytical filter from [`signals-systems`](../signals-systems/syllabus.md).
- **$\alpha$ is a KL weight, a scaling-law exponent, an attention weight, and a noise-schedule term**, depending on the module. They are unrelated.
- **$d$ is the model width in Module 3 and the data dimension in Module 4.** $d_k$ is always the per-head key dimension.
- **"Regularization" here means the engineering tools** — dropout, weight decay, augmentation, early stopping. The statistical theory of why it works is [`statistical-learning`](../statistical-learning/syllabus.md)'s.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $W^{(\ell)}, b^{(\ell)}$ | weight matrix and bias of layer $\ell$ | [1.1](lessons/01-01-from-linear-models-to-the-mlp.md) |
| $z^{(\ell)}, a^{(\ell)}$ | pre-activation and post-activation of layer $\ell$ | [1.1](lessons/01-01-from-linear-models-to-the-mlp.md) |
| $\phi$ | the activation function, applied elementwise | [1.1](lessons/01-01-from-linear-models-to-the-mlp.md) |
| $d_\ell$ | the width of layer $\ell$; $d_0$ is the input dimension | [1.1](lessons/01-01-from-linear-models-to-the-mlp.md) |
| $\odot$ | elementwise (Hadamard) product | [1.3](lessons/01-03-backpropagation-and-automatic-differentiation.md) |
| $\bar u$ | the adjoint $\partial L/\partial u$ — what backpropagation carries | [1.3](lessons/01-03-backpropagation-and-automatic-differentiation.md) |
| $J_f$ | the Jacobian of $f$; a VJP is $J_f^{\top}\bar c$ | [1.3](lessons/01-03-backpropagation-and-automatic-differentiation.md) |
| $\eta$ | the learning rate | [1.4](lessons/01-04-sgd-mini-batches-and-momentum.md) |
| $B$ | mini-batch size | [1.4](lessons/01-04-sgd-mini-batches-and-momentum.md) |
| $\beta$ (Module 1) | the momentum coefficient | [1.4](lessons/01-04-sgd-mini-batches-and-momentum.md) |
| $\kappa$ | condition number, $\Lambda/\mu$, of the curvature | [1.4](lessons/01-04-sgd-mini-batches-and-momentum.md) |
| $m_t, v_t$ | Adam's first and second moment estimates | [1.5](lessons/01-05-adaptive-optimizers-schedules-and-initialization.md) |
| $\beta_1, \beta_2$ | Adam's decay rates, 0.9 and 0.999 by default | [1.5](lessons/01-05-adaptive-optimizers-schedules-and-initialization.md) |
| $\gamma, \beta$ (norm) | the learnable scale and shift of a normalization layer | [1.6](lessons/01-06-normalization.md) |
| $\lambda$ | the weight-decay coefficient | [1.7](lessons/01-07-regularization.md) |
| $p$ (dropout) | the **keep** probability; inverted dropout scales by $1/p$ | [1.7](lessons/01-07-regularization.md) |
| $K, S, P$ | convolution kernel size, stride, padding | [2.1](lessons/02-01-the-convolution-operation.md) |
| $C_{\text{in}}, C_{\text{out}}$ | input and output channel counts | [2.1](lessons/02-01-the-convolution-operation.md) |
| $r_\ell, j_\ell$ | receptive field and jump after layer $\ell$ | [2.2](lessons/02-02-building-a-convolutional-network.md) |
| $F(x)$ | the residual branch, so the block is $x + F(x)$ | [2.3](lessons/02-03-deep-architectures-and-residual-connections.md) |
| $r$ (LoRA) | the rank of the low-rank adaptation | [2.4](lessons/02-04-transfer-learning-and-fine-tuning.md) |
| $h_t$ | a recurrent hidden state at time $t$ | [3.1](lessons/03-01-rnns-and-backprop-through-time.md) |
| $W_h, W_x$ | recurrent and input weight matrices | [3.1](lessons/03-01-rnns-and-backprop-through-time.md) |
| $T$ | sequence length | [3.1](lessons/03-01-rnns-and-backprop-through-time.md) |
| $c_t$ | the LSTM cell state — the long-term memory | [3.2](lessons/03-02-lstms-grus-and-vanishing-gradients.md) |
| $f_t, i_t, o_t$ | LSTM forget, input and output gates | [3.2](lessons/03-02-lstms-grus-and-vanishing-gradients.md) |
| $z_t, r_t$ | GRU update and reset gates | [3.2](lessons/03-02-lstms-grus-and-vanishing-gradients.md) |
| $e_{ij}, \alpha_{ij}$ | attention score and attention weight | [3.3](lessons/03-03-seq2seq-and-the-attention-mechanism.md) |
| $c_i$ | the context vector at decoder step $i$ | [3.3](lessons/03-03-seq2seq-and-the-attention-mechanism.md) |
| $Q, K, V$ | query, key and value matrices | [3.4](lessons/03-04-self-attention-queries-keys-values.md) |
| $d_k, d_v$ | key and value dimensions per head | [3.4](lessons/03-04-self-attention-queries-keys-values.md) |
| $h$ (Module 3) | the number of attention heads | [3.5](lessons/03-05-the-transformer-block.md) |
| $d$ (Module 3) | the model width, so $d_k = d/h$ | [3.5](lessons/03-05-the-transformer-block.md) |
| $L$ (Module 3) | the number of transformer blocks | [3.5](lessons/03-05-the-transformer-block.md) |
| $M$ | the causal mask, $0$ or $-\infty$ | [3.6](lessons/03-06-full-transformer-architectures.md) |
| $f_\theta, g_\phi$ | encoder and decoder of an autoencoder | [4.1](lessons/04-01-autoencoders-and-representation-learning.md) |
| $k$ (Module 4) | the code or latent dimension | [4.1](lessons/04-01-autoencoders-and-representation-learning.md) |
| $q_\phi(z\mid x)$ | the approximate posterior, the VAE's encoder | [4.2](lessons/04-02-variational-autoencoders.md) |
| $\mathcal{L}$ (VAE) | the evidence lower bound | [4.2](lessons/04-02-variational-autoencoders.md) |
| $\epsilon$ | a standard normal draw, used for reparameterization and as the diffusion target | [4.2](lessons/04-02-variational-autoencoders.md), [4.4](lessons/04-04-a-taste-of-diffusion-models.md) |
| $D, G$ | the GAN's discriminator and generator | [4.3](lessons/04-03-generative-adversarial-networks.md) |
| $p_g$ | the distribution the generator induces | [4.3](lessons/04-03-generative-adversarial-networks.md) |
| $\beta_t, \alpha_t, \bar\alpha_t$ | diffusion variance schedule, $1-\beta_t$, and the cumulative product | [4.4](lessons/04-04-a-taste-of-diffusion-models.md) |
| $N, D, C$ | parameters, training tokens, training compute | [4.5](lessons/04-05-llms-self-supervision-and-scaling-laws.md) |

## Definitions

### Multilayer perceptron

Affine layers alternating with an elementwise nonlinearity. The nonlinearity is the entire source of expressiveness: a composition of affine maps is affine.

$$z^{(\ell)} = W^{(\ell)}a^{(\ell-1)} + b^{(\ell)}, \qquad a^{(\ell)} = \phi(z^{(\ell)}).$$

*Introduced:* [1.1](lessons/01-01-from-linear-models-to-the-mlp.md)

### Activation function

A fixed, parameter-free nonlinearity. What matters for training is its **derivative**, because backpropagation multiplies by one per layer crossed.

*Introduced:* [1.1](lessons/01-01-from-linear-models-to-the-mlp.md)

### Dead ReLU

A unit whose pre-activation is negative on every example. ReLU's derivative there is exactly zero, so the unit receives no gradient and never recovers. Caused by large steps knocking a bias far negative.

*Introduced:* [1.1](lessons/01-01-from-linear-models-to-the-mlp.md)

### Universal approximation

A wide-enough one-hidden-layer network approximates any continuous function on a compact set to any accuracy. **Existential in the width**, and silent on learnability and generalization — see [`statistical-learning` 5.4](../statistical-learning/lessons/05-04-neural-networks-and-backpropagation.md).

*Introduced:* [1.2](lessons/01-02-universal-approximation.md)

### Depth–width separation

There are functions a depth-$k$ ReLU network computes with $O(k)$ units that any one-hidden-layer network needs $\Omega(2^{k})$ units to match. Proved by counting linear pieces: depth **composes**, width **adds**.

*Introduced:* [1.2](lessons/01-02-universal-approximation.md)

### Curse of dimensionality

Tiling $[0,1]^{d}$ to accuracy $\epsilon$ needs $(1/\epsilon)^{d}$ cells, so the bump construction behind universal approximation is unusable past a handful of dimensions. Real networks work by exploiting structure instead.

*Introduced:* [1.2](lessons/01-02-universal-approximation.md)

### Computational graph

A DAG of elementary operations. The forward pass evaluates in topological order; the backward pass visits in **reverse** topological order, and a node with several consumers **accumulates** their contributions.

*Introduced:* [1.3](lessons/01-03-backpropagation-and-automatic-differentiation.md)

### Reverse-mode automatic differentiation

One backward sweep yields the derivative of one scalar output with respect to **every** input, at $O(1)$ forward passes. Forward mode gives one input's effect on every output and costs $n$ sweeps. Deep learning has many parameters and one loss, which is why backpropagation is reverse mode.

*Introduced:* [1.3](lessons/01-03-backpropagation-and-automatic-differentiation.md)

### Vector–Jacobian product

The implementation of a backward step: $\bar{\mathbf u} = J_f^{\top}\bar{\mathbf c}$, computed without ever forming $J_f$. For an affine layer it is $W^{\top}\bar z$.

*Introduced:* [1.3](lessons/01-03-backpropagation-and-automatic-differentiation.md)

### Gradient checkpointing

Store only every $\sqrt{L}$-th activation and recompute the rest during the backward sweep. Memory falls from $O(L)$ to $O(\sqrt L)$ for about one extra forward pass, and the gradients are bit-comparable.

*Introduced:* [1.3](lessons/01-03-backpropagation-and-automatic-differentiation.md)

### Mini-batch gradient

An unbiased estimate of the full gradient from $B$ random examples, with standard deviation $\sigma/\sqrt{B}$. The noise is a **regularizer**: it prevents settling into sharp minima.

*Introduced:* [1.4](lessons/01-04-sgd-mini-batches-and-momentum.md)

### Momentum

Accumulate a velocity, $v_{t+1} = \beta v_t + g_t$, and step along it. Oscillating components cancel and consistent ones add, giving an effective step of $\eta/(1-\beta)$ and turning a condition number $\kappa$ into $\sqrt\kappa$.

*Introduced:* [1.4](lessons/01-04-sgd-mini-batches-and-momentum.md)

### Saddle point

A critical point with mixed Hessian eigenvalue signs. In high dimensions these vastly outnumber local minima, so a loss plateau is usually a saddle being escaped rather than a minimum being stuck in.

*Introduced:* [1.4](lessons/01-04-sgd-mini-batches-and-momentum.md)

### Linear scaling rule

Multiply the batch size by $k$ and multiply the learning rate by $k$, with warmup. Holds over a useful range and breaks at very large batches, where the noise regularizer has been removed.

*Introduced:* [1.4](lessons/01-04-sgd-mini-batches-and-momentum.md)

### Adam

Momentum plus a per-coordinate division by the running root-mean-square gradient, with bias correction. Its step along a coordinate with a steady gradient is $\eta$ **regardless of that gradient's magnitude**, which is why one learning rate works across a whole network.

*Introduced:* [1.5](lessons/01-05-adaptive-optimizers-schedules-and-initialization.md)

### Bias correction

Adam's moments start at zero and are biased low by $1-\beta^{t}$. Dividing by that factor fixes it; omitting it makes the first step about 3.2 times too large, and worse through the first dozen steps.

*Introduced:* [1.5](lessons/01-05-adaptive-optimizers-schedules-and-initialization.md)

### He initialization

$\operatorname{Var}(w) = 2/n_{\text{in}}$ for ReLU networks. The factor of 2 compensates exactly for ReLU discarding half the units, so the mean squared activation is preserved layer to layer.

*Introduced:* [1.5](lessons/01-05-adaptive-optimizers-schedules-and-initialization.md)

### Xavier initialization

$\operatorname{Var}(w) = 2/(n_{\text{in}}+n_{\text{out}})$, for symmetric activations such as tanh, balancing the forward and backward passes.

*Introduced:* [1.5](lessons/01-05-adaptive-optimizers-schedules-and-initialization.md)

### Symmetry breaking

If every weight in a layer is initialized identically, every unit computes the same function and receives the same gradient forever, so the layer has the capacity of one unit. Random initialization is the only thing that prevents it.

*Introduced:* [1.5](lessons/01-05-adaptive-optimizers-schedules-and-initialization.md)

### Batch normalization

Standardise each feature over the batch, then scale and shift by learnable $\gamma, \beta$. **One example's output depends on its batch-mates**, hence running statistics at evaluation and degradation at small batch sizes.

*Introduced:* [1.6](lessons/01-06-normalization.md)

### Layer normalization

Standardise each example over its own features. No batch dependence, no train–eval mode, identical for a batch of one — which is why it is used in transformers and recurrent models.

*Introduced:* [1.6](lessons/01-06-normalization.md)

### Scale invariance

With normalization after a linear layer, $W \mapsto aW$ leaves the function unchanged and scales the gradient by $1/a$. So weight magnitude acts as an implicit per-layer learning rate, and weight decay on such a layer **raises** the effective rate rather than regularizing.

*Introduced:* [1.6](lessons/01-06-normalization.md)

### Weight decay

Shrink parameters toward zero each step. Identical to L2 for SGD; **not** identical for Adam, where folding it into the gradient makes it pass through the adaptive scaling.

*Introduced:* [1.7](lessons/01-07-regularization.md), and see [`machine-learning` 1.4](../machine-learning/lessons/01-04-regularization-ridge-and-lasso.md)

### AdamW

Apply weight decay directly to the parameters, outside the adaptive division. The default for transformers, and the reason $\lambda$ must be retuned upward by one to two orders of magnitude when switching from Adam.

*Introduced:* [1.7](lessons/01-07-regularization.md)

### Dropout

Zero each unit independently with probability $1-p$ at training time and scale survivors by $1/p$ (inverted dropout), so the expectation matches evaluation. Approximately an ensemble over $2^{n}$ thinned subnetworks.

*Introduced:* [1.7](lessons/01-07-regularization.md)

### Early stopping

Stop at the validation minimum. On a quadratic it is equivalent to L2 with $\alpha \approx 1/(\eta t)$ — **training time is a regularization hyperparameter**, and more steps means less effective penalty.

*Introduced:* [1.7](lessons/01-07-regularization.md)

### Data augmentation

Enlarge the training set with label-preserving transformations. The only regularizer that adds information rather than removing capacity, and the only one whose validity is domain knowledge rather than mathematics.

*Introduced:* [1.7](lessons/01-07-regularization.md)

### Convolution (as a layer)

A dense layer with two constraints: **locality** (connect only to a nearby patch) and **weight sharing** (use the same kernel at every position). Deep learning's version is cross-correlation — no kernel flip.

*Introduced:* [2.1](lessons/02-01-the-convolution-operation.md)

### Translation equivariance

$\mathrm{Conv}(T_\delta X) = T_\delta \mathrm{Conv}(X)$: shift the input and the feature map shifts with it. **Not** invariance, which requires a pooling or aggregation step that discards position.

*Introduced:* [2.1](lessons/02-01-the-convolution-operation.md)

### 1x1 convolution

A kernel of size 1: no spatial extent, mixes channels only. A dense layer applied identically at every position, used to change channel counts cheaply before an expensive $3\times3$.

*Introduced:* [2.1](lessons/02-01-the-convolution-operation.md)

### Receptive field

How large a patch of the original input one unit sees. Grows by $(k-1)j$ per layer, where the **jump** $j$ multiplies by the stride — so plain convolutions grow it linearly and downsampling grows it geometrically.

*Introduced:* [2.2](lessons/02-02-building-a-convolutional-network.md)

### Pooling

Parameter-free downsampling by taking the maximum or mean of each window. Modern architectures often use a strided convolution instead, which learns what to keep.

*Introduced:* [2.2](lessons/02-02-building-a-convolutional-network.md)

### Global average pooling

Average each channel over all positions, giving one number per channel. Removes the dense head's parameters, makes the network accept any input size, and converts equivariance into invariance by discarding position.

*Introduced:* [2.2](lessons/02-02-building-a-convolutional-network.md)

### Degradation problem

Plain stacks past about 20 layers have **higher training error** than shallower ones. Not overfitting (training error is worse) and not capacity (the deeper net contains the shallower one by setting layers to the identity) — therefore optimization.

*Introduced:* [2.3](lessons/02-03-deep-architectures-and-residual-connections.md)

### Residual connection

$y = x + F(x)$, so $\partial y/\partial x = I + \partial F/\partial x$. Across $L$ blocks the product expands into $2^{L}$ paths, one of which is the pure identity — the gradient always has a route multiplied by exactly 1.

*Introduced:* [2.3](lessons/02-03-deep-architectures-and-residual-connections.md)

### Keep the identity path clean

Any normalization or activation placed **on** the skip connection reintroduces a factor into the $L$-fold product and forfeits the benefit. This is why pre-norm beats post-norm and why the block's final activation sits after the addition.

*Introduced:* [2.3](lessons/02-03-deep-architectures-and-residual-connections.md)

### Bottleneck block

$1\times1 \to 3\times3 \to 1\times1$, squeezing the channel count for the expensive middle layer. About 4.8 times cheaper than two plain $3\times3$ convolutions at the same input and output shape, with two extra nonlinearities.

*Introduced:* [2.3](lessons/02-03-deep-architectures-and-residual-connections.md)

### Transfer learning

Reuse a pretrained backbone and replace the head. Works because early layers learn generic features that transfer across tasks and domains, while late layers specialise.

*Introduced:* [2.4](lessons/02-04-transfer-learning-and-fine-tuning.md)

### Catastrophic forgetting

Continuing training at a normal learning rate on a small new dataset destroys the pretrained features before the new task supplies enough signal to replace them. Mitigated by low learning rates, warmup, freezing, and training the new head first.

*Introduced:* [2.4](lessons/02-04-transfer-learning-and-fine-tuning.md)

### LoRA

Learn a low-rank correction $W + BA$ with rank $r \ll d$, training $2dr$ parameters instead of $d^{2}$. One frozen base model then serves many tasks by swapping small adapters.

*Introduced:* [2.4](lessons/02-04-transfer-learning-and-fine-tuning.md)

### Recurrent neural network

$h_t = \phi(W_h h_{t-1} + W_x x_t + b)$, with the same matrices at every step. Parameter count is independent of $T$; computation is strictly sequential in $T$.

*Introduced:* [3.1](lessons/03-01-rnns-and-backprop-through-time.md)

### Backpropagation through time

Unroll the recurrence into a feedforward graph and apply reverse-mode autodiff. Not a new algorithm — it is the shared-weight accumulation rule with $T$ terms instead of two.

*Introduced:* [3.1](lessons/03-01-rnns-and-backprop-through-time.md)

### Vanishing and exploding gradients

$\partial h_T/\partial h_t$ is a product of $T-t$ Jacobians, so it decays or blows up geometrically. **Explosion is fixed by clipping; vanishing is not fixable**, because a gradient of $10^{-8}$ carries no information.

*Introduced:* [3.1](lessons/03-01-rnns-and-backprop-through-time.md)

### Truncated BPTT

Process in chunks of $k$ steps, carrying the hidden state forward but **detaching** it from the graph at each boundary. Bounds memory at $O(k)$; makes dependencies longer than $k$ unlearnable, which costs little because they had already vanished.

*Introduced:* [3.1](lessons/03-01-rnns-and-backprop-through-time.md)

### LSTM

A cell state updated additively, $c_t = f_t\odot c_{t-1} + i_t\odot\tilde c_t$, read out through an output gate. The Jacobian along the cell path is $\operatorname{diag}(f_t)$ — **no weight matrix** — so the decay rate is something the network chooses.

*Introduced:* [3.2](lessons/03-02-lstms-grus-and-vanishing-gradients.md)

### GRU

The simplification: no separate cell state, and the forget and input gates tied as $(1-z_t, z_t)$. Three gate computations instead of four, so 25 percent fewer parameters.

*Introduced:* [3.2](lessons/03-02-lstms-grus-and-vanishing-gradients.md)

### Forget-gate bias initialization

Set $b_f$ to 1 or 2 so the gate starts near 0.9 rather than 0.5. Start the model in the signal-preserving configuration and let it learn to deviate — the same principle as zero-initialized residual branches.

*Introduced:* [3.2](lessons/03-02-lstms-grus-and-vanishing-gradients.md)

### Attention

A differentiable lookup: score each source position against a query, softmax the scores, and take the weighted average of values. The context is a **convex combination** of the source states, so it cannot manufacture anything new.

*Introduced:* [3.3](lessons/03-03-seq2seq-and-the-attention-mechanism.md)

### Gradient path length

The number of operations a gradient traverses between two positions. RNN: $|i-j|$. Residual or gated: shorter. Attention: **1**. An architecture's ability to learn a dependency is governed by this, not by the positions' distance in the data.

*Introduced:* [3.3](lessons/03-03-seq2seq-and-the-attention-mechanism.md)

### Query, key, value

Three learned projections of the same input, giving each token three roles: what it is looking for, what it offers as a label, and what it contributes when attended to. Separating key from value is the point — findable and useful are different things.

*Introduced:* [3.4](lessons/03-04-self-attention-queries-keys-values.md)

### Scaled dot-product attention

$$\mathrm{softmax}\!\left(\frac{QK^{\top}}{\sqrt{d_k}}\right)V.$$

The $\sqrt{d_k}$ is a variance calculation: a dot product of $d_k$ unit-variance components has standard deviation $\sqrt{d_k}$, and without the division the softmax saturates and its gradient collapses.

*Introduced:* [3.4](lessons/03-04-self-attention-queries-keys-values.md)

### Permutation equivariance

$\mathrm{Attention}(PX) = P\,\mathrm{Attention}(X)$ for any permutation $P$. Self-attention treats a sequence as a **set**, which is why positional encoding is mandatory rather than optional.

*Introduced:* [3.4](lessons/03-04-self-attention-queries-keys-values.md)

### Multi-head attention

$h$ heads of width $d/h$ in parallel, concatenated and projected. **Costs the same parameters and arithmetic as one head of width $d$** — the head count only partitions the same capacity into independent attention patterns.

*Introduced:* [3.5](lessons/03-05-the-transformer-block.md)

### Positional encoding

Position information added to the input, since attention has none. Sinusoidal (a fixed multi-frequency code), learned absolute (cannot extrapolate), or rotary — which rotates $q$ and $k$ so the score depends only on $i-j$, and extrapolates best.

*Introduced:* [3.5](lessons/03-05-the-transformer-block.md)

### Feed-forward sublayer

A two-layer MLP applied independently at every position, expanding the width by 4 and contracting. **Two-thirds of a transformer's parameters** live here, not in the attention.

*Introduced:* [3.5](lessons/03-05-the-transformer-block.md)

### Pre-norm

$x + \mathrm{Sublayer}(\mathrm{LayerNorm}(x))$, with the normalization inside the residual branch. Trains at any depth without warmup; post-norm puts a normalization on the identity path and needs it.

*Introduced:* [3.5](lessons/03-05-the-transformer-block.md)

### Causal mask

Add $-\infty$ to the scores for future positions **before** the softmax, so they receive exactly zero weight and each row still sums to 1. Masking after the softmax leaves rows summing to less than 1 by a position-dependent amount.

*Introduced:* [3.6](lessons/03-06-full-transformer-architectures.md)

### Teacher forcing

Feed the true previous token during training rather than the model's own prediction, which is what makes transformer training parallel. Creates **exposure bias**: at inference the model conditions on its own outputs, a distribution it never trained on.

*Introduced:* [3.6](lessons/03-06-full-transformer-architectures.md)

### KV cache

Cache keys and values for past tokens during generation, since they do not change. Turns an $O(T^{3})$ generation into $O(T^{2})$ — a factor of $T/3$, about 1,365 at a 4k context — at the cost of memory linear in context.

*Introduced:* [3.6](lessons/03-06-full-transformer-architectures.md)

### Autoencoder

Encoder to a code, decoder back, trained on reconstruction. The bottleneck is a capacity constraint that forces the model to discard what is predictable from the rest.

*Introduced:* [4.1](lessons/04-01-autoencoders-and-representation-learning.md)

### Identity trap

An overcomplete autoencoder's global optimum is the identity map: zero reconstruction error, useless code. Any objective satisfiable by copying will be satisfied by copying.

*Introduced:* [4.1](lessons/04-01-autoencoders-and-representation-learning.md)

### Denoising autoencoder

Corrupt the input and reconstruct the clean version, so copying is unavailable and the model must learn how the parts relate. The ancestor of masked-token and masked-image objectives.

*Introduced:* [4.1](lessons/04-01-autoencoders-and-representation-learning.md)

### Linear probe

Train a linear classifier on a frozen representation and report its accuracy. The standard way to measure a representation, because **reconstruction error is not one** and the two are frequently anti-correlated.

*Introduced:* [4.1](lessons/04-01-autoencoders-and-representation-learning.md), and see [2.4](lessons/02-04-transfer-learning-and-fine-tuning.md)

### Evidence lower bound

$\log p_\theta(x) = \mathcal{L} + D_{\mathrm{KL}}(q_\phi \| p_\theta(z\mid x))$, so $\mathcal L \le \log p_\theta(x)$ and the gap is exactly how wrong the encoder is about the true posterior. Reads as "reconstruct well, keep your codes near the prior".

*Introduced:* [4.2](lessons/04-02-variational-autoencoders.md)

### Reparameterization trick

Write the sample as a deterministic function of the parameters and a parameter-free noise source, $z = \mu + \sigma\odot\epsilon$. Moves the randomness off the gradient's path; gives exact, low-variance derivatives where the score-function estimator gives high-variance ones.

*Introduced:* [4.2](lessons/04-02-variational-autoencoders.md)

### Posterior collapse

The encoder drives $q_\phi(z\mid x) \to p(z)$, zeroing the KL term and making the latent uninformative. **An optimum of the ELBO, not an optimization failure** — it happens when the decoder can model the data without $z$.

*Introduced:* [4.2](lessons/04-02-variational-autoencoders.md)

### Mode-covering and mode-seeking

A likelihood objective is an expectation over the **data**, so ignoring a mode is punished — it is mode-covering, and blurry. An adversarial objective is an expectation over the model's **own samples**, so ignoring a mode costs nothing — mode-seeking, and sharp.

*Introduced:* [4.3](lessons/04-03-generative-adversarial-networks.md)

### Minimax objective

$\min_G\max_D\ \mathbb{E}_{p_{\text{data}}}[\log D(x)] + \mathbb{E}_{p(z)}[\log(1-D(G(z)))]$. At the optimal $D$ this equals $-\log 4 + 2\,\mathrm{JSD}(p_{\text{data}}\|p_g)$, so the generator minimises a Jensen–Shannon divergence.

*Introduced:* [4.3](lessons/04-03-generative-adversarial-networks.md)

### Non-saturating loss

Maximise $\log D(G(z))$ instead of minimising $\log(1-D(G(z)))$. Same optimum, but the gradient is $1/D$ instead of $1/(1-D)$ — about 100 times larger exactly when the generator is losing, which is early training.

*Introduced:* [4.3](lessons/04-03-generative-adversarial-networks.md)

### Mode collapse

The generator maps many $z$ to few outputs. Nothing in the minimax objective penalises it, so it is a near-optimum rather than a bug, and the training loss cannot detect it.

*Introduced:* [4.3](lessons/04-03-generative-adversarial-networks.md)

### Diffusion forward process

Add Gaussian noise on a fixed, parameter-free schedule. Composing Gaussians gives a closed form, so **any noise level is reachable in one draw** — which is what makes training cheap.

*Introduced:* [4.4](lessons/04-04-a-taste-of-diffusion-models.md)

### Noise prediction objective

Train $\epsilon_\theta(x_t, t)$ to predict the noise that was added, by squared error. A supervised regression with an exactly known, fixed target: no adversary, no posterior, no moving objective.

*Introduced:* [4.4](lessons/04-04-a-taste-of-diffusion-models.md)

### Classifier-free guidance

Extrapolate past the conditional prediction, $\tilde\epsilon = \epsilon_\theta(\varnothing) + w(\epsilon_\theta(c) - \epsilon_\theta(\varnothing))$ with $w > 1$. Sharpens adherence to the condition at the cost of diversity — the coverage-versus-fidelity trade made into a tunable knob.

*Introduced:* [4.4](lessons/04-04-a-taste-of-diffusion-models.md)

### Self-supervised pretraining

Train on an objective derived from the data itself. Next-token prediction yields one training signal per position — about 6.7 times more per forward pass than masking 15 percent of tokens — which is why it scales.

*Introduced:* [4.5](lessons/04-05-llms-self-supervision-and-scaling-laws.md)

### Scaling law

Test loss falls as a power of parameters, data or compute: a straight line on log-log axes. Each law holds only while its factor is the bottleneck, so the laws describe a **frontier**, not any single run.

*Introduced:* [4.5](lessons/04-05-llms-self-supervision-and-scaling-laws.md)

### Compute-optimal scaling

Minimising loss subject to $C = 6ND$ gives $N \propto C^{1/2}$ and $D \propto C^{1/2}$, so about **20 training tokens per parameter**. Inference cost scales with $N$ only, so the deployment optimum lies further toward more data.

*Introduced:* [4.5](lessons/04-05-llms-self-supervision-and-scaling-laws.md)

### Emergence

An abrupt rise in a benchmark score with scale. Disputed: thresholded metrics manufacture sharp curves from smooth underlying improvement, and many reported cases smooth out under a continuous metric.

*Introduced:* [4.5](lessons/04-05-llms-self-supervision-and-scaling-laws.md)

## Formulas and rules

### Shapes and parameter counts

| Layer | Output shape | Parameters |
|---|---|---|
| Dense $d_{\text{in}} \to d_{\text{out}}$ | $d_{\text{out}}$ | $d_{\text{in}}d_{\text{out}} + d_{\text{out}}$ |
| Conv, kernel $K$, stride $S$, pad $P$ | $\left\lfloor\dfrac{H+2P-K}{S}\right\rfloor + 1$ per spatial axis | $K^{2}C_{\text{in}}C_{\text{out}} + C_{\text{out}}$ |
| Pooling $K$, stride $S$ | same formula as conv | 0 |
| Global average pool | $C$ | 0 |
| RNN | $d$ | $dn + d^{2} + d$ |
| GRU | $d$ | $3(dn + d^{2} + d)$ |
| LSTM | $d$ | $4(dn + d^{2} + d)$ |
| Transformer block, width $d$ | $T \times d$ | $12d^{2}$ (attention $4d^{2}$, FFN $8d^{2}$) |

**Convolutional parameters do not depend on the spatial size**; convolutional *compute* does. Recurrent parameters do not depend on $T$; recurrent compute and memory do.

*From* [1.1](lessons/01-01-from-linear-models-to-the-mlp.md), [2.1](lessons/02-01-the-convolution-operation.md), [2.2](lessons/02-02-building-a-convolutional-network.md), [3.1](lessons/03-01-rnns-and-backprop-through-time.md), [3.2](lessons/03-02-lstms-grus-and-vanishing-gradients.md), [3.5](lessons/03-05-the-transformer-block.md)

### Common convolution configurations

| $K$ | $S$ | $P$ | Effect |
|---|---|---|---|
| 3 | 1 | 1 | size preserved |
| 3 | 1 | 0 | shrinks by 2 |
| 3 | 2 | 1 | halves |
| 1 | 1 | 0 | channels only |
| 7 | 2 | 3 | halves, large receptive field |

Size-preserving padding for odd $K$ is $P = (K-1)/2$.

*From* [2.1](lessons/02-01-the-convolution-operation.md)

### Receptive field recursion

$$r_\ell = r_{\ell-1} + (k_\ell - 1)\,j_{\ell-1}, \qquad j_\ell = j_{\ell-1}\,s_\ell, \qquad r_0 = j_0 = 1.$$

Plain $3\times3$ convolutions add 2 per layer; after a stride-2 step they add 4, then 8. **Only striding changes the growth rate.** A dilation of $d$ replaces $(k-1)$ by $(k-1)d$.

*From* [2.2](lessons/02-02-building-a-convolutional-network.md)

### Activations and their derivatives

| $\phi$ | $\phi'$ | $\max\phi'$ | Range |
|---|---|---|---|
| sigmoid $\sigma(z)$ | $\sigma(1-\sigma)$ | 0.25 | $(0,1)$ |
| $\tanh z$ | $1-\tanh^{2}z$ | 1 | $(-1,1)$ |
| $\mathrm{ReLU}(z)$ | 1 if $z>0$, else 0 | 1 | $[0,\infty)$ |
| GELU | smooth | $\approx 1.08$ | $\approx(-0.17,\infty)$ |

Softmax with cross-entropy gives $\partial L/\partial z = \hat y - y$; so does a linear output with squared error.

*From* [1.1](lessons/01-01-from-linear-models-to-the-mlp.md)

### Backpropagation rules

$$\bar u = \sum_{c\in\mathrm{children}(u)} \bar c\,\frac{\partial c}{\partial u} \qquad\text{(accumulate over all consumers)}$$

$$\bar{\mathbf a}^{(\ell-1)} = W^{(\ell)\top}\bar{\mathbf z}^{(\ell)}, \qquad \bar W^{(\ell)} = \bar{\mathbf z}^{(\ell)}\mathbf a^{(\ell-1)\top}, \qquad \bar{\mathbf z}^{(\ell)} = \bar{\mathbf a}^{(\ell)}\odot\phi'(\mathbf z^{(\ell)}).$$

Gradient check with the **central** difference, error $O(\epsilon^{2})$:

$$\frac{L(w+\epsilon)-L(w-\epsilon)}{2\epsilon}, \qquad \epsilon \approx 10^{-5}.$$

*From* [1.3](lessons/01-03-backpropagation-and-automatic-differentiation.md)

### Optimizers

| Method | Update |
|---|---|
| SGD | $\theta \leftarrow \theta - \eta g$ |
| Momentum | $v \leftarrow \beta v + g$; $\theta \leftarrow \theta - \eta v$ |
| RMSProp | $v \leftarrow \rho v + (1-\rho)g^{2}$; $\theta \leftarrow \theta - \eta g/(\sqrt v + \epsilon)$ |
| Adam | $m \leftarrow \beta_1 m + (1-\beta_1)g$; $v \leftarrow \beta_2 v + (1-\beta_2)g^{2}$; $\hat m = m/(1-\beta_1^{t})$, $\hat v = v/(1-\beta_2^{t})$; $\theta \leftarrow \theta - \eta\hat m/(\sqrt{\hat v}+\epsilon)$ |
| AdamW | Adam, then $\theta \leftarrow \theta - \eta\lambda\theta$ separately |

Defaults: $\beta_1 = 0.9$, $\beta_2 = 0.999$, $\epsilon = 10^{-8}$, $\eta = 10^{-3}$ for Adam; $\eta$ between $10^{-2}$ and 1 for SGD.

*From* [1.4](lessons/01-04-sgd-mini-batches-and-momentum.md), [1.5](lessons/01-05-adaptive-optimizers-schedules-and-initialization.md), [1.7](lessons/01-07-regularization.md)

### Optimization arithmetic

| Quantity | Formula | Note |
|---|---|---|
| Mini-batch gradient noise | $\sigma/\sqrt B$ | cost is linear in $B$, noise reduction only $\sqrt B$ |
| Momentum effective step | $\eta/(1-\beta)$ | 10 at $\beta=0.9$, 100 at $\beta=0.99$ |
| GD contraction on a quadratic | $(\kappa-1)/(\kappa+1)$ | |
| Momentum contraction | $(\sqrt\kappa-1)/(\sqrt\kappa+1)$ | the $\sqrt{}$ is the whole gain |
| Stability limit | $\eta < 2/\Lambda$ | exceeding it diverges in the steep direction |
| Adam bias-correction ratio | $\sqrt{1-\beta_2^{t}}/(1-\beta_1^{t})$ | 0.316 at $t=1$; uncorrected step is 3.2 times too large |
| Steps to reduce error by $10^{-3}$ | $\ln(10^{-3})/\ln(\text{factor})$ | 345 for GD at $\kappa=100$, 34 with momentum |

*From* [1.4](lessons/01-04-sgd-mini-batches-and-momentum.md), [1.5](lessons/01-05-adaptive-optimizers-schedules-and-initialization.md)

### Initialization

$$\operatorname{Var}(z) = n\operatorname{Var}(w)\operatorname{Var}(a).$$

| Scheme | $\operatorname{Var}(w)$ | For |
|---|---|---|
| Xavier / Glorot | $2/(n_{\text{in}}+n_{\text{out}})$ | tanh, symmetric activations |
| He | $2/n_{\text{in}}$ | ReLU |

Biases to zero. The factor of 2 in He compensates for $\mathbb{E}[\mathrm{ReLU}(z)^{2}] = \tfrac12\mathbb{E}[z^{2}]$.

Measured mean squared activation through 25 ReLU layers of width 512:

| $\operatorname{Var}(w)$ | layer 5 | layer 15 | layer 25 |
|---|---|---|---|
| $1/n$ | $3.3\times10^{-2}$ | $3.4\times10^{-5}$ | $3.4\times10^{-8}$ |
| $2/n$ (He) | 0.89 | 0.44 | 0.46 |
| $3/n$ | 10.0 | 800 | $3.1\times10^{4}$ |

*From* [1.5](lessons/01-05-adaptive-optimizers-schedules-and-initialization.md)

### Learning-rate schedules

| Schedule | Rule |
|---|---|
| Step decay | $\eta \leftarrow \gamma\eta$ every $k$ epochs |
| Cosine | $\eta_t = \eta_{\min} + \tfrac12(\eta_{\max}-\eta_{\min})(1+\cos(\pi t/T))$ |
| Warmup | ramp $0 \to \eta_{\max}$ over the first $T_w$ steps |

Cosine multipliers at the quarter, half and three-quarter points: 0.854, 0.5, 0.146.

*From* [1.5](lessons/01-05-adaptive-optimizers-schedules-and-initialization.md)

### Normalization

$$\hat x = \frac{x - \mu}{\sqrt{\sigma^{2}+\epsilon}}, \qquad y = \gamma\hat x + \beta.$$

| Norm | Averages over | Batch-dependent | Home |
|---|---|---|---|
| Batch | batch (and spatial positions), per feature | yes | convolutional networks |
| Layer | features, per example | no | transformers, RNNs |
| Group | channel groups, per example | no | small-batch vision |
| RMSNorm | features, per example, **no centring** | no | large language models |

Relative standard error of a variance from $B$ samples: $\sqrt{2/(B-1)}$ — 141 percent at $B=2$, 25 percent at $B=32$, 9 percent at $B=256$.

*From* [1.6](lessons/01-06-normalization.md)

### Which regularizer for which gap

| Symptom | Reach for |
|---|---|
| Training loss near zero, large validation gap | more data, augmentation, weight decay, dropout |
| Gap appears only late | early stopping, faster learning-rate decay |
| **Both losses high** | **none of these** — underfitting; add capacity or train longer |
| Confident but wrong | label smoothing, temperature calibration |
| Validation noisy | larger batch, lower learning rate, check batch-norm statistics |

Exclude from weight decay: all biases, normalization $\gamma$ and $\beta$, usually positional embeddings.

*From* [1.7](lessons/01-07-regularization.md)

### Residual and gated gradient paths

| Construction | Jacobian along the easy path | Strength |
|---|---|---|
| Plain stack | $\prod_\ell \partial F_\ell$ | decays geometrically |
| Residual | $\prod_\ell (I + \partial F_\ell)$ | contains $I$; bounded below |
| LSTM cell | $\prod_k \operatorname{diag}(f_k)$ | decays at a **learned** rate |
| Attention | direct edge, weight $\alpha_{ij}$ | path length 1 |

Residual stream variance grows **linearly** in depth: $\operatorname{Var}(y_L) \approx \operatorname{Var}(y_0) + \sum_\ell\operatorname{Var}(F_\ell)$. Fixes: scale branches by $1/\sqrt L$, or zero-initialize each block's last normalization.

*From* [2.3](lessons/02-03-deep-architectures-and-residual-connections.md), [3.2](lessons/03-02-lstms-grus-and-vanishing-gradients.md), [3.3](lessons/03-03-seq2seq-and-the-attention-mechanism.md)

### Sequence-model gradient attenuation

Attenuation over distance $k$ is (per-step factor)$^{k}$. Usable range at a $10^{-3}$ threshold:

| Per-step factor | Range |
|---|---|
| 0.85 (plain RNN) | 43 steps |
| 0.90 | 66 steps |
| 0.97 (LSTM forget gate) | 227 steps |
| attention | unbounded — path length is 1 |

*From* [3.1](lessons/03-01-rnns-and-backprop-through-time.md), [3.2](lessons/03-02-lstms-grus-and-vanishing-gradients.md)

### Attention arithmetic

$$\mathrm{Attention}(Q,K,V) = \mathrm{softmax}\!\left(\frac{QK^{\top}}{\sqrt{d_k}} + M\right)V.$$

| Quantity | Value |
|---|---|
| Logit standard deviation without scaling | $\sqrt{d_k}$ |
| Softmax gradient at the max | $p(1-p)$ |
| Unscaled at $d_k=64$ | $\approx 0.0025$ |
| Scaled | $\approx 0.25$ |
| Scores per head | $T^{2}$ |
| Attention time | $O(T^{2}d_k)$ |
| Attention memory if materialised | $O(T^{2})$ |
| Causal mask keeps | $T(T+1)/2$, about half |

Score functions: dot $s^{\top}h$; scaled dot $s^{\top}h/\sqrt d$; general $s^{\top}Wh$; additive $v^{\top}\tanh(W_1s + W_2h)$.

*From* [3.3](lessons/03-03-seq2seq-and-the-attention-mechanism.md), [3.4](lessons/03-04-self-attention-queries-keys-values.md), [3.6](lessons/03-06-full-transformer-architectures.md)

### Path length and parallelism

| Architecture | Path between positions $i,j$ | Sequential steps |
|---|---|---|
| RNN | $|i-j|$ | $O(T)$ |
| Convolution, kernel $k$ | $O(\log_k|i-j|)$ with dilation | $O(1)$ |
| Self-attention | $O(1)$ | $O(1)$ |

*From* [3.4](lessons/03-04-self-attention-queries-keys-values.md)

### Transformer sizing

$$\#\text{params} \approx 12d^{2}L + V d \quad (+\ Vd \text{ again if embeddings are untied}).$$

| $d$ | per block | 12 blocks | 24 blocks |
|---|---|---|---|
| 512 | 3.1 M | 37.7 M | 75.5 M |
| 768 | 7.1 M | 85.0 M | 170 M |
| 1024 | 12.6 M | 151 M | 302 M |

Head count does not change the parameter count: $d_k = d/h$, and the per-head projections stack into the same $d\times d$ matrices. Keep $d_k$ near 64 to 128.

KV cache: $2\,L\,T\,d \times$ bytes per element. At $L=32$, $d=4096$, 16-bit: 2.1 GB at $T=4096$, 17.2 GB at $T = 32768$.

*From* [3.5](lessons/03-05-the-transformer-block.md), [3.6](lessons/03-06-full-transformer-architectures.md)

### Generative model objectives

| Model | Optimises | Sharp? | Covers modes? | Likelihood? | Sampling cost |
|---|---|---|---|---|---|
| Autoencoder | reconstruction error | no | n/a — not generative | no | 1 |
| VAE | ELBO: reconstruction $-$ KL | no | yes | bound | 1 |
| GAN | $-\log 4 + 2\,\mathrm{JSD}$ via a learned $D$ | yes | no | no | 1 |
| Diffusion | $\mathbb{E}\|\epsilon - \epsilon_\theta(x_t,t)\|^{2}$ | yes | yes | bound | $T$, or 20–50 |
| Autoregressive | next-token cross-entropy | yes | yes | exact | $T$ tokens |

*From* [4.1](lessons/04-01-autoencoders-and-representation-learning.md)–[4.5](lessons/04-05-llms-self-supervision-and-scaling-laws.md)

### VAE algebra

$$\mathcal{L} = \mathbb{E}_{q}[\log p_\theta(x\mid z)] - D_{\mathrm{KL}}(q_\phi(z\mid x)\,\|\,p(z)).$$

$$D_{\mathrm{KL}}\big(\mathcal{N}(\mu,\operatorname{diag}\sigma^{2})\,\|\,\mathcal{N}(0,I)\big) = \frac12\sum_j\big(\mu_j^{2}+\sigma_j^{2}-1-\log\sigma_j^{2}\big),$$

minimised at $\mu=0$, $\sigma=1$, where it equals 0.

| $\mu$ | $\sigma$ | KL |
|---|---|---|
| 0 | 1 | 0 |
| 1 | 1 | 0.500 |
| 0 | 0.5 | 0.318 |
| 0 | 2 | 0.807 |
| 2 | 0.5 | 2.318 |

Reparameterize as $z = \mu + \sigma\odot\epsilon$ with $\epsilon\sim\mathcal N(0,I)$, giving $\partial z/\partial\mu = 1$ and $\partial z/\partial\sigma = \epsilon$. Encoders output $\log\sigma^{2}$, not $\sigma$.

*From* [4.2](lessons/04-02-variational-autoencoders.md)

### GAN algebra

$$D^{*}(x) = \frac{p_{\text{data}}(x)}{p_{\text{data}}(x)+p_g(x)}, \qquad V(D^{*},G) = -\log 4 + 2\,\mathrm{JSD}(p_{\text{data}}\|p_g).$$

At convergence $D^{*}\equiv\tfrac12$ and $V = -\log 4 \approx -1.386$.

Generator gradient magnitudes:

| $D(G(z))$ | saturating $1/(1-D)$ | non-saturating $1/D$ | ratio |
|---|---|---|---|
| 0.01 | 1.01 | 100 | 99 |
| 0.10 | 1.11 | 10 | 9 |
| 0.50 | 2.00 | 2 | 1 |

*From* [4.3](lessons/04-03-generative-adversarial-networks.md)

### Diffusion algebra

$$q(x_t\mid x_{t-1}) = \mathcal{N}\big(\sqrt{1-\beta_t}x_{t-1},\ \beta_t I\big), \qquad \alpha_t = 1-\beta_t, \qquad \bar\alpha_t = \prod_{s\le t}\alpha_s,$$

$$x_t = \sqrt{\bar\alpha_t}\,x_0 + \sqrt{1-\bar\alpha_t}\,\epsilon \qquad\text{(any } t \text{ in one draw)}.$$

Linear schedule, $\beta$ from $10^{-4}$ to $0.02$ over $T=1000$:

| $t$ | $\bar\alpha_t$ | signal | noise |
|---|---|---|---|
| 1 | 0.9999 | 0.9999 | 0.010 |
| 100 | 0.897 | 0.947 | 0.321 |
| 250 | 0.524 | 0.724 | 0.690 |
| 500 | 0.0786 | 0.280 | 0.960 |
| 1000 | 0.00004 | 0.006 | 1.000 |

Score relation: $\nabla_{x_t}\log q(x_t) \approx -\epsilon_\theta(x_t,t)/\sqrt{1-\bar\alpha_t}$.

*From* [4.4](lessons/04-04-a-taste-of-diffusion-models.md)

### Scaling laws

$$L(C) \approx \left(\frac{C_c}{C}\right)^{\alpha_C}, \qquad \alpha_N \approx 0.076, \quad \alpha_D \approx 0.095, \quad \alpha_C \approx 0.050.$$

$$C \approx 6ND \text{ FLOPs}, \qquad \frac{D}{N} \approx 20 \text{ (compute-optimal)}, \qquad N, D \propto C^{1/2}.$$

| Compute multiplier | Loss factor | $N$ and $D$ each grow by |
|---|---|---|
| 10 | 0.891 | 3.16 |
| 30 | 0.844 | 5.48 |
| 100 | 0.794 | 10 |
| 1000 | 0.708 | 31.6 |

Perplexity is $e^{L}$; bits per token is $L/\ln 2$.

*From* [4.5](lessons/04-05-llms-self-supervision-and-scaling-laws.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| The learning problem, empirical risk, train/validation/test | [`machine-learning` 1.1](../machine-learning/lessons/01-01-the-learning-problem.md) |
| Bias–variance decomposition | [`machine-learning` 1.2](../machine-learning/lessons/01-02-generalization-and-the-bias-variance-tradeoff.md) |
| Linear regression and least squares | [`machine-learning` 1.3](../machine-learning/lessons/01-03-linear-regression-and-least-squares.md) |
| Ridge and lasso as shrinkage | [`machine-learning` 1.4](../machine-learning/lessons/01-04-regularization-ridge-and-lasso.md) |
| Logistic regression, the sigmoid, cross-entropy | [`machine-learning` 1.5](../machine-learning/lessons/01-05-logistic-regression-and-classification.md) |
| Gradient descent and step-size choice | [`machine-learning` 1.6](../machine-learning/lessons/01-06-gradient-descent-for-learning.md) |
| Diagnosing models: train-versus-test reasoning | [`machine-learning` 4.3](../machine-learning/lessons/04-03-diagnosing-models-in-practice.md) |
| One forward and backward pass on a 2–2–1 net | [`machine-learning` 4.4](../machine-learning/lessons/04-04-a-taste-of-neural-networks.md) |
| The EM algorithm | [`machine-learning` 3.6](../machine-learning/lessons/03-06-the-em-algorithm.md) |
| Networks as a hypothesis class; UAT's silences; VC dimension | [`statistical-learning` 5.4](../statistical-learning/lessons/05-04-neural-networks-and-backpropagation.md) |
| Double descent, interpolation, implicit bias | [`statistical-learning` 5.5](../statistical-learning/lessons/05-05-why-does-deep-learning-generalize.md) |
| PCA, and the linear-autoencoder equivalence | [`statistical-learning` 6.1](../statistical-learning/lessons/06-01-principal-component-analysis.md) |
| Inductive bias and no free lunch | [`statistical-learning` 1.4](../statistical-learning/lessons/01-04-no-free-lunch-and-inductive-bias.md) |
| Convexity, first-order methods, acceleration, Lagrangian duality | [`convex-optimization` 4.1](../convex-optimization/lessons/04-01-first-order-methods.md), [3.1](../convex-optimization/lessons/03-01-lagrangian-dual-function.md) |
| Newton's method and Hessian-vector products | [`convex-optimization` 4.2](../convex-optimization/lessons/04-02-newtons-method.md) |
| Entropy, KL divergence, Jensen's inequality | [`information-theory` 1.4](../information-theory/lessons/01-04-relative-entropy-kl-jensen.md) |
| Source coding: loss as code length | [`information-theory` 2.2](../information-theory/lessons/02-02-source-coding-theorem.md) |
| Variance of sums, standard error, sampling distributions | [`prob-stat-refresher` 3.1](../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md), [3.2](../prob-stat-refresher/lessons/03-02-sums-and-law-of-large-numbers.md) |
| Gaussian distributions and their algebra | [`prob-stat-refresher` 2.3](../prob-stat-refresher/lessons/02-03-continuous-distributions.md) |
| Discrete convolution with the kernel flip; frequency response | [`signals-systems` 1.5](../signals-systems/lessons/01-05-convolution-discrete-time.md) |
| Difference equations, first-order filters, time constants | [`signals-systems` 4.3](../signals-systems/lessons/04-03-difference-equations-realizations.md) |
| Fourier series as a frequency basis | [`signals-systems` 2.2](../signals-systems/lessons/02-02-fourier-series-periodic-signals.md) |
| Asymptotic notation; time–memory trade-offs; topological sort | [`algorithms` 1.1](../algorithms/lessons/01-01-asymptotic-notation.md), [1.5](../algorithms/lessons/01-05-divide-and-conquer-beyond-sorting.md), [3.2](../algorithms/lessons/03-02-topological-sort-and-strongly-connected-components.md) |
| Memoisation and dynamic programming | [`algorithms` 2.5](../algorithms/lessons/02-05-dynamic-programming-and-knapsack.md) |
| Floating-point range, roundoff, cancellation | [`numerical-analysis` 1.1](../numerical-analysis/lessons/01-01-floating-point-roundoff.md), [1.2](../numerical-analysis/lessons/01-02-cancellation-error-propagation.md) |
| Memory hierarchy; compute- versus bandwidth-bound | [`computer-architecture` 4.1](../computer-architecture/lessons/04-01-caches-and-locality.md) |
| Zero-sum games and minimax | [`grad-game-theory` 1.4](../grad-game-theory/lessons/01-04-zero-sum-minimax-lp-duality.md) |
| Langevin dynamics and stochastic differential equations | [`stat-mech` 6.1](../stat-mech/lessons/06-01-brownian-langevin.md) |
| Policy gradients and reward models | [`reinforcement-learning`](../reinforcement-learning/syllabus.md) |

## Pitfalls

### Depth, width and expressiveness

- Stacking layers without a nonlinearity adds nothing: the composite of affine maps is affine, at any depth.
  *([1.1](lessons/01-01-from-linear-models-to-the-mlp.md), [4.1](lessons/04-01-autoencoders-and-representation-learning.md))*
- Universal approximation does not make architecture unimportant — every architecture is universal, so all that distinguishes them is how many parameters and how much data they need.
  *([1.2](lessons/01-02-universal-approximation.md))*
- More linear regions is capacity, not quality, and capacity counts have failed as predictors of deep-network performance.
  *([1.2](lessons/01-02-universal-approximation.md))*
- Depth is not free: beyond a point plain stacks train **worse**, and the fix is architectural rather than a matter of more layers.
  *([1.2](lessons/01-02-universal-approximation.md), [2.3](lessons/02-03-deep-architectures-and-residual-connections.md))*

### Gradients and scale

- A gradient crossing $L$ layers is multiplied by one activation derivative per layer; sigmoid's cap of 0.25 costs $10^{-6}$ over ten layers.
  *([1.1](lessons/01-01-from-linear-models-to-the-mlp.md))*
- An initialization off by $\sqrt2$ per layer kills a 25-layer network before the first step — $2^{-25} \approx 3\times10^{-8}$.
  *([1.5](lessons/01-05-adaptive-optimizers-schedules-and-initialization.md))*
- Initializing all weights identically is the one starting point that cannot work: every unit in the layer stays identical forever.
  *([1.5](lessons/01-05-adaptive-optimizers-schedules-and-initialization.md))*
- A dead ReLU never recovers, because zero gradient means no update.
  *([1.1](lessons/01-01-from-linear-models-to-the-mlp.md))*
- Gradient clipping fixes explosion and does nothing for vanishing; a gradient of $10^{-8}$ cannot be rescued.
  *([3.1](lessons/03-01-rnns-and-backprop-through-time.md))*
- A bigger hidden state does not extend an RNN's memory: the decay is $\|W_h\|^{k}$ and the size does not appear.
  *([3.1](lessons/03-01-rnns-and-backprop-through-time.md), [3.2](lessons/03-02-lstms-grus-and-vanishing-gradients.md))*
- Anything placed **on** a residual identity path multiplies into the $L$-fold product and undoes the benefit.
  *([2.3](lessons/02-03-deep-architectures-and-residual-connections.md), [3.5](lessons/03-05-the-transformer-block.md))*

### Optimizers and hyperparameters

- $\eta$ and $\beta$ are not independent: the effective step is $\eta/(1-\beta)$, so raising momentum from 0.9 to 0.99 multiplies the step by ten.
  *([1.4](lessons/01-04-sgd-mini-batches-and-momentum.md))*
- Adam's $\eta = 10^{-3}$ does not transfer to SGD, which wants two to three orders of magnitude more.
  *([1.5](lessons/01-05-adaptive-optimizers-schedules-and-initialization.md))*
- Omitting Adam's bias correction makes the first steps 3 to 6 times too large, producing a loss spike that then "recovers".
  *([1.5](lessons/01-05-adaptive-optimizers-schedules-and-initialization.md))*
- Gradient noise is a regularizer: removing it with very large batches hurts test accuracy unless you compensate elsewhere.
  *([1.4](lessons/01-04-sgd-mini-batches-and-momentum.md))*
- A loss plateau in high dimensions is usually a saddle, not a local minimum, and the fixes differ.
  *([1.4](lessons/01-04-sgd-mini-batches-and-momentum.md))*

### Normalization and regularization

- Freezing a batch-norm layer's parameters does not freeze its behaviour — it must also be in evaluation mode, or it recomputes statistics from the new data.
  *([1.6](lessons/01-06-normalization.md), [2.4](lessons/02-04-transfer-learning-and-fine-tuning.md))*
- Batch norm with a batch of 1 divides by $\sqrt\epsilon$ and outputs $\beta$ for every feature.
  *([1.6](lessons/01-06-normalization.md))*
- "Internal covariate shift" is not the mechanism; scale invariance and a smoother loss surface are the better account.
  *([1.6](lessons/01-06-normalization.md))*
- Weight decay on a normalized layer does not regularize the function — it raises the effective learning rate, and more so as $\|W\|$ shrinks.
  *([1.6](lessons/01-06-normalization.md), [1.7](lessons/01-07-regularization.md))*
- With Adam, weight decay folded into the gradient is applied **least** to the parameters with the largest gradients. Use AdamW.
  *([1.5](lessons/01-05-adaptive-optimizers-schedules-and-initialization.md), [1.7](lessons/01-07-regularization.md))*
- Regularization helps only when the *gap* is the problem; adding it to an underfitting model makes things strictly worse.
  *([1.7](lessons/01-07-regularization.md))*
- Dropout without the $1/p$ scaling makes training-time activations $p$ times the evaluation-time ones, compounding per layer.
  *([1.7](lessons/01-07-regularization.md))*
- Augmentation must be label-preserving, and which transformations are is domain knowledge, not mathematics.
  *([1.7](lessons/01-07-regularization.md))*

### Convolution and architecture

- Convolution gives **equivariance**, not invariance; a plain stack with a flatten at the end is not translation-invariant.
  *([2.1](lessons/02-01-the-convolution-operation.md))*
- Adding convolutional layers adds a constant to the receptive field; only striding or dilation changes its growth rate.
  *([2.2](lessons/02-02-building-a-convolutional-network.md))*
- A receptive field smaller than the object you are detecting is a structural failure that the loss curve cannot show — compute it before training.
  *([2.2](lessons/02-02-building-a-convolutional-network.md))*
- A bigger kernel is the expensive way to see more context: two $3\times3$ beat one $5\times5$ on parameters and add a nonlinearity.
  *([2.1](lessons/02-01-the-convolution-operation.md), [2.2](lessons/02-02-building-a-convolutional-network.md))*
- Weight sharing asserts that position does not change meaning. On data where it does — a fixed-schema table — convolution is simply the wrong inductive bias.
  *([2.1](lessons/02-01-the-convolution-operation.md))*
- When a strictly larger model trains worse, the problem is the optimizer or the parameterization, never capacity.
  *([2.3](lessons/02-03-deep-architectures-and-residual-connections.md))*

### Transfer and fine-tuning

- Fine-tuning at the original learning rate destroys the features you were trying to reuse.
  *([2.4](lessons/02-04-transfer-learning-and-fine-tuning.md))*
- A distant domain with little data calls for *more* freezing, not less: early layers transfer regardless, and the data cannot support millions of trainable parameters.
  *([2.4](lessons/02-04-transfer-learning-and-fine-tuning.md))*
- Train the new head first, before unfreezing anything: a randomly initialized head sends large, meaningless gradients into the backbone on step one, when the pretrained features are most valuable.
  *([2.4](lessons/02-04-transfer-learning-and-fine-tuning.md))*

### Sequences and attention

- Backpropagation through time is not a separate algorithm; treating it as one obscures that convolution obeys the same accumulation rule.
  *([3.1](lessons/03-01-rnns-and-backprop-through-time.md))*
- Truncated BPTT requires **detaching** the carried hidden state; forgetting to is the classic unbounded-memory bug.
  *([3.1](lessons/03-01-rnns-and-backprop-through-time.md))*
- The $\sqrt{d_k}$ is not a convention: without it, larger heads have more saturated softmaxes and therefore smaller gradients, so attention would get harder to train as models grew.
  *([3.4](lessons/03-04-self-attention-queries-keys-values.md))*
- Self-attention has no notion of order; without positional encoding the model is a bag of words that trains to a plausible loss.
  *([3.4](lessons/03-04-self-attention-queries-keys-values.md), [3.5](lessons/03-05-the-transformer-block.md))*
- More heads costs no parameters and no arithmetic — it partitions the same capacity. Too many leaves each head too few dimensions to distinguish keys.
  *([3.5](lessons/03-05-the-transformer-block.md))*
- Attention gets the attention, and two-thirds of a transformer's weights are in the position-wise feed-forward sublayers.
  *([3.5](lessons/03-05-the-transformer-block.md))*
- The causal mask must be added as $-\infty$ **before** the softmax; zeroing after leaves rows summing to less than 1.
  *([3.6](lessons/03-06-full-transformer-architectures.md))*
- The KV cache is a requirement, not an optimization: without it, generating $T$ tokens costs a factor of $T/3$ more.
  *([3.6](lessons/03-06-full-transformer-architectures.md))*

### Generative models

- Low reconstruction error often means a worse representation, because the code has kept high-variance nuisance factors.
  *([4.1](lessons/04-01-autoencoders-and-representation-learning.md))*
- An objective satisfiable by copying will be satisfied by copying — the identity trap.
  *([4.1](lessons/04-01-autoencoders-and-representation-learning.md))*
- An autoencoder is not a generative model: nothing says which codes are valid, so random $z$ decodes to noise.
  *([4.1](lessons/04-01-autoencoders-and-representation-learning.md))*
- The ELBO is a lower bound, not the likelihood, and the gap is how wrong the encoder is about the true posterior.
  *([4.2](lessons/04-02-variational-autoencoders.md))*
- A KL term near zero is posterior collapse, not success — and it is an **optimum** of the ELBO, not an optimization failure.
  *([4.2](lessons/04-02-variational-autoencoders.md))*
- VAE blur is in the objective: a squared-error likelihood is minimised by the mean of the plausible outputs.
  *([4.2](lessons/04-02-variational-autoencoders.md), [4.3](lessons/04-03-generative-adversarial-networks.md))*
- A GAN's loss is not a progress measure: the equilibrium value is also produced by two untrained networks and by two cycling ones.
  *([4.3](lessons/04-03-generative-adversarial-networks.md))*
- Mode collapse is an objective failure, not an optimization one — nothing in the minimax game rewards covering the data.
  *([4.3](lessons/04-03-generative-adversarial-networks.md))*
- The saturating and non-saturating generator losses share a fixed point and differ by a factor of 100 in gradient exactly where training starts.
  *([4.3](lessons/04-03-generative-adversarial-networks.md))*
- A diffusion model's forward process is **fixed**, not learned, which is why there is no posterior to collapse.
  *([4.4](lessons/04-04-a-taste-of-diffusion-models.md))*
- More sampling steps stop helping well before guidance strength does; the latter trades fidelity against diversity.
  *([4.4](lessons/04-04-a-taste-of-diffusion-models.md))*

### Scale and evaluation

- A scaling law predicts **loss**, not capability; the map between them is empirical and task-dependent.
  *([4.5](lessons/04-05-llms-self-supervision-and-scaling-laws.md))*
- At fixed compute, bigger is not better past the compute-optimal point — a smaller model on more data reaches a lower loss and is cheaper to serve.
  *([4.5](lessons/04-05-llms-self-supervision-and-scaling-laws.md))*
- A thresholded metric manufactures sharp curves from smooth improvement; check a continuous metric before calling anything emergent.
  *([4.5](lessons/04-05-llms-self-supervision-and-scaling-laws.md))*
- A power law fitted over six orders of magnitude says nothing about the seventh, and the data side of the frontier is finite.
  *([4.5](lessons/04-05-llms-self-supervision-and-scaling-laws.md))*

---

## Conventions

- **One card per course**, covering every lesson. The linter checks that every
  lesson file is cited somewhere on this card.
- **Intuition first**, same as lessons: a plain-English line before any formula.
- **Headings are anchors.** Renaming a `###` breaks inbound lesson links.
- **No prose dollar signs** — write "10 dollars", not the symbol.
- Length is not capped the way a lesson's is: this is a lookup surface, not a
  read-through.
