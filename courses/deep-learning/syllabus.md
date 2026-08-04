# Deep Learning — Syllabus

> Computer Science · Tier 2 · ~22 lessons · Prereqs: [machine-learning](../machine-learning/syllabus.md) · Roadmap id: `deep-learning`

## Goal

Turn the machine-learning toolkit into deep networks: understand *why* stacking differentiable layers works, *how* gradients flow through them, and *what* architecture to reach for given the structure of your data — grids (CNNs), sequences (RNNs, transformers), or a distribution you want to sample from (VAEs, GANs, diffusion). You will be able to reason about a network's parameter count, gradient flow, and failure modes from first principles, and read a modern paper without the architecture diagram feeling like a black box. This course deliberately skips distributed-training and hardware engineering, and never teaches a specific framework's API — every idea is derived, not imported.

## Dangerous Checklist

When you finish, you can:

- [ ] Hand-compute a forward pass and one full backpropagation step through a small multilayer perceptron
- [ ] Explain what the universal approximation theorem does and does not promise
- [ ] Derive the update rules for SGD, momentum, and Adam, and say what each fixes
- [ ] Diagnose vanishing/exploding gradients and pick an initialization or normalization scheme that helps
- [ ] Choose regularization (weight decay, dropout, augmentation, early stopping) to close a train/test gap you can name
- [ ] Compute output shapes, receptive fields, and parameter counts through a convolutional stack
- [ ] Explain why residual connections let networks go deep, in terms of gradient flow
- [ ] Compute the output of a self-attention head by hand and justify the $\sqrt{d_k}$ scaling
- [ ] Contrast RNN, CNN, and transformer as three answers to "how do I share parameters across position?"
- [ ] Derive the VAE evidence lower bound and explain the reparameterization trick
- [ ] Compare the training objectives of autoencoders, VAEs, GANs, and diffusion and say what each optimizes
- [ ] Read a scaling-laws plot and predict roughly how loss moves with model size, data, and compute

## Modules

### Module 1: Neural nets, backpropagation & training

The whole course in miniature: build the multilayer perceptron, learn how gradients flow backward through it, and assemble the machinery that makes training actually converge.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | From linear models to the MLP | Explain what a hidden layer with a nonlinearity buys you over a linear model | affine layer, activation function, hidden units, depth vs width |
| 1.2 | Universal approximation | State precisely what a wide-enough network can represent — and what that guarantee omits | universal approximation theorem, representation vs learnability, curse of dimensionality |
| 1.3 | Backpropagation & automatic differentiation | Compute gradients through any network by walking a computational graph backward | chain rule, computational graph, reverse-mode autodiff, local gradients |
| 1.4 | SGD, mini-batches & momentum | Derive stochastic gradient descent and explain why momentum accelerates it | loss landscape, stochastic vs batch gradients, momentum, mini-batch noise |
| 1.5 | Adaptive optimizers, schedules & initialization | Derive Adam and choose an initialization that keeps activations well-scaled | RMSProp, Adam, learning-rate schedules, Xavier/He initialization |
| 1.6 | Normalization | Explain how batch/layer norm stabilize training and where each belongs | internal covariate shift, batch norm, layer norm, train/eval behavior |
| 1.7 | Regularization | Pick a regularizer to close a named train/test gap | weight decay, dropout, data augmentation, early stopping |

**Boss problem 1:** Take the fixed 2-input, 2-hidden-unit, 1-output ReLU network specified in the lesson (weights, biases, and one training example given). Compute the forward pass, the scalar squared-error loss, and every weight/bias gradient by backpropagation. Then show algebraically why initializing *all* weights to the same value freezes the two hidden units into identical twins, and state which single ingredient from this module breaks that symmetry.

### Module 2: Convolutional networks

Swap the fully-connected layer for one that exploits the grid structure of images — weight sharing and locality — and learn why the resulting networks can go very deep.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The convolution operation | Explain convolution as a locally-connected, weight-shared layer and count its parameters | kernels, weight sharing, locality, stride & padding |
| 2.2 | Building a convolutional network | Compute output shapes and receptive fields through a conv/pool stack | channels, pooling, feature maps, receptive field |
| 2.3 | Deep architectures & residual connections | Explain why plain deep nets degrade and how residual connections fix gradient flow | VGG-style stacks, degradation problem, skip/residual connections |
| 2.4 | Transfer learning & fine-tuning | Reuse a pretrained backbone and decide what to freeze vs retrain | feature extraction, fine-tuning, frozen layers, domain shift |

**Boss problem 2:** A $32\times32\times3$ image passes through: conv ($5\times5$, 16 filters, stride 1, no padding) → $2\times2$ max-pool → conv ($3\times3$, 32 filters, stride 1, padding 1) → $2\times2$ max-pool → flatten → dense to 10 outputs. Compute the spatial shape after every stage, the number of *learnable* parameters in each convolutional and dense layer, and the receptive field (in input pixels) of one neuron in the second conv layer. Then state how many parameters a single dense layer directly from the raw image to 10 outputs would need, and explain in one sentence what convolution bought you.

### Module 3: Sequence models & attention

Data with order — text, audio, time series — needs parameters shared across *time*. Start with recurrence, hit its gradient problems, then replace it wholesale with attention and the transformer.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | RNNs & backprop through time | Unroll a recurrent net and compute gradients across time steps | hidden state, parameter sharing across time, backprop through time |
| 3.2 | LSTMs, GRUs & vanishing gradients | Explain why long-range gradients vanish and how gating fixes it | vanishing/exploding gradients, gating, cell state, LSTM/GRU |
| 3.3 | Seq2seq & the attention mechanism | Explain attention as a learned, content-based weighted average | encoder–decoder, alignment, context vector, soft attention |
| 3.4 | Self-attention: queries, keys, values | Compute a self-attention head and justify the $\sqrt{d_k}$ scaling | query/key/value, scaled dot-product, softmax weights |
| 3.5 | The transformer block | Assemble multi-head attention, positional encoding, and the feed-forward sublayer | multi-head attention, positional encoding, residual + layer norm, FFN |
| 3.6 | Full transformer architectures | Contrast encoder–decoder vs decoder-only and explain causal masking | encoder/decoder stacks, causal mask, autoregressive generation |

**Boss problem 3:** Given a 2-token sequence with the explicit query, key, and value vectors from the lesson (dimension $d_k = 2$), compute one scaled dot-product self-attention head by hand: the raw scores, the scaled-and-softmaxed attention weights, and the output vector for each token. Then argue two things: why the $\sqrt{d_k}$ factor is there (what breaks in the softmax without it as $d_k$ grows), and why a transformer needs positional encoding when an RNN does not.

### Module 4: Generative models & modern practice

From discriminating to *generating*: learn to model the data distribution itself — autoencoders, VAEs, GANs, a taste of diffusion — and end on the self-supervised pretraining and scaling laws behind today's large models.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Autoencoders & representation learning | Explain how a bottleneck forces a useful compressed representation | encoder/decoder, bottleneck, reconstruction loss, learned features |
| 4.2 | Variational autoencoders | Derive the ELBO and explain why the reparameterization trick is needed | latent variable model, ELBO, KL term, reparameterization trick |
| 4.3 | Generative adversarial networks | Explain the minimax game and the failure modes it invites | generator vs discriminator, minimax objective, mode collapse |
| 4.4 | A taste of diffusion models | Explain generation as learning to reverse a gradual noising process | forward/reverse process, denoising, score-based intuition |
| 4.5 | LLMs, self-supervision & scaling laws | Explain how next-token prediction plus scale yields general models | self-supervised pretraining, next-token loss, scaling laws, emergence |

**Boss problem 4:** For a VAE whose approximate posterior is a diagonal Gaussian $q(z\mid x)=\mathcal{N}(\mu,\operatorname{diag}(\sigma^2))$ and whose prior is $p(z)=\mathcal{N}(0, I)$, derive the closed-form KL-divergence term of the ELBO for a single latent dimension, and show it is minimized at $\mu=0,\ \sigma=1$. Then write the reparameterization $z = \mu + \sigma\odot\epsilon$, state the distribution of $\epsilon$, and explain in one sentence why sampling $z$ this way — rather than directly from $q$ — is what lets gradients reach $\mu$ and $\sigma$. Finally, in one line each, say what the *autoencoder*, the *GAN*, and the *diffusion model* optimize instead.

## Sources of truth

- Goodfellow, Bengio & Courville, *Deep Learning* — primary notation and rigor level (backprop, optimization, regularization).
- Bishop & Bishop, *Deep Learning: Foundations and Concepts* — modern framing of transformers and generative models.
- Zhang et al., *Dive into Deep Learning* (d2l.ai) — worked shapes, receptive-field and parameter-count conventions.
- Vaswani et al., "Attention Is All You Need," and Kingma & Welling on VAEs — canonical statements for the Module 3–4 architectures.
