# Deep Learning · Lesson 1.1: From linear models to the MLP

> ⏱ ~15 min · Module 1: Neural nets, backpropagation & training · Builds on: [`machine-learning` 4.4 (a taste of neural networks)](../../machine-learning/lessons/04-04-a-taste-of-neural-networks.md), [`machine-learning` 1.5 (logistic regression)](../../machine-learning/lessons/01-05-logistic-regression-and-classification.md) · Unlocks: [1.2 (universal approximation)](01-02-universal-approximation.md)

## Why this matters

You have already seen the smallest interesting network. [`machine-learning` 4.4](../../machine-learning/lessons/04-04-a-taste-of-neural-networks.md) hand-computed a forward and a backward pass through a 2–2–1 net and built the six weights that compute XOR, closing that course's impossibility result. That arithmetic is not repeated here.

What this course adds is everything that arithmetic does not tell you: **how to choose the shape**. How wide, how deep, which activation, which output head, and what any of those choices costs in parameters and in gradient flow.

This lesson sets up that vocabulary, and one choice in it turns out to matter more than the rest. The activation function's *derivative* is the factor a gradient gets multiplied by at every layer it crosses, so picking sigmoid over ReLU is not a matter of taste — it is the difference between a gradient surviving thirty layers and arriving at $10^{-18}$.

## The idea

A network is a stack of two alternating operations.

**An affine layer** multiplies by a weight matrix and adds a bias: $z = Wa + b$. This is exactly the linear model of [`machine-learning` 1.3](../../machine-learning/lessons/01-03-linear-regression-and-least-squares.md), applied to many outputs at once.

**An activation** applies a fixed, nonlinear function elementwise. It has no parameters.

Stack them: affine, activate, affine, activate, affine. The final affine layer produces the output.

The nonlinearity is not decoration. **Compose two affine maps and you get an affine map** — $W_2(W_1 x + b_1) + b_2 = (W_2W_1)x + (W_2b_1+b_2)$ — so a network with identity activations of any depth is a linear model with extra steps, a point [`statistical-learning` 5.4](../../statistical-learning/lessons/05-04-neural-networks-and-backpropagation.md) makes precisely in terms of its hypothesis class. Every bit of a network's expressive power comes from the activation.

Now the choice that matters. Look at what each activation's *derivative* does, because backpropagation multiplies by one of them per layer ([1.3](01-03-backpropagation-and-automatic-differentiation.md)).

**Sigmoid** squashes to $(0,1)$ and its derivative peaks at $0.25$. Crossing $L$ layers multiplies the gradient by at most $0.25^{L}$, which at $L = 10$ is $10^{-6}$. **Tanh** is better centred and peaks at 1, but saturates at both ends, so a unit pushed into its tail contributes nothing. **ReLU**, $\max(z, 0)$, has derivative exactly 1 where it is active and exactly 0 where it is not — **no shrinkage at all on the active path**.

That is the whole story of why networks got deep. Not new theory, not new hardware alone: a change of activation that stopped multiplying the gradient by a fraction at every step.

The output layer is chosen by the task, and it comes paired with a loss:

- **Regression:** a plain affine output, squared-error loss.
- **Binary classification:** one output through a sigmoid, binary cross-entropy — the logistic regression of [`machine-learning` 1.5](../../machine-learning/lessons/01-05-logistic-regression-and-classification.md) sitting on top of learned features.
- **$K$-class classification:** $K$ outputs through a softmax, cross-entropy.

**A network is a feature learner with a familiar model bolted on the end.** Everything before the last layer exists to produce a representation in which the final linear model works.

## The formal version

> **Definition (multilayer perceptron).** With $a^{(0)} = x$, for $\ell = 1, \dots, L$:
> $$z^{(\ell)} = W^{(\ell)} a^{(\ell-1)} + b^{(\ell)}, \qquad a^{(\ell)} = \phi\big(z^{(\ell)}\big),$$
> where $W^{(\ell)} \in \mathbb{R}^{d_\ell \times d_{\ell-1}}$, $b^{(\ell)} \in \mathbb{R}^{d_\ell}$, and $\phi$ acts elementwise. The last layer usually omits $\phi$ or uses a task-specific output function.

In words: multiply, add, squash, repeat. The widths $d_0, d_1, \dots, d_L$ are the **architecture**; the $W$ and $b$ are the parameters.

> **Parameter count.** A layer from width $d_{\ell-1}$ to $d_\ell$ has $d_{\ell-1}d_\ell$ weights and $d_\ell$ biases, so
> $$\#\text{params} = \sum_{\ell=1}^{L} \big(d_{\ell-1}d_\ell + d_\ell\big).$$

**The products dominate.** A layer's cost is the *product* of its two widths, so for a wide input the first layer usually holds most of the network, and doubling a hidden width roughly quadruples the cost of the layers on either side of it.

> **Activations and their derivatives.**

| $\phi(z)$ | formula | $\phi'(z)$ | maximum of $\phi'$ | range |
|---|---|---|---|---|
| sigmoid | $\dfrac{1}{1+e^{-z}}$ | $\sigma(z)\big(1-\sigma(z)\big)$ | $0.25$ at $z=0$ | $(0,1)$ |
| tanh | $\dfrac{e^{z}-e^{-z}}{e^{z}+e^{-z}}$ | $1 - \tanh^{2}(z)$ | $1$ at $z=0$ | $(-1,1)$ |
| ReLU | $\max(z,0)$ | $1$ if $z>0$, else $0$ | $1$ | $[0,\infty)$ |
| GELU | $z\,\Phi(z)$ | smooth, near 1 for large $z$ | $\approx 1.08$ | $\approx(-0.17,\infty)$ |

ReLU's gradient is exactly zero for $z < 0$, so a unit whose pre-activation is negative on every training example receives no gradient ever and is **dead**. Leaky ReLU, $\max(z, 0.01z)$, and GELU, the smooth version used in transformers ([3.5](03-05-the-transformer-block.md)), both exist to soften that.

> **Output heads.**
> $$\text{softmax}(z)_k = \frac{e^{z_k}}{\sum_{j} e^{z_j}}, \qquad L = -\sum_k y_k \log \text{softmax}(z)_k.$$

The pairing is not arbitrary. For softmax with cross-entropy the gradient at the output collapses to

$$\frac{\partial L}{\partial z} = \hat{y} - y,$$

predicted minus actual — the same clean form as squared error with a linear output, and the reason these two pairings are standard ([`machine-learning` 1.5](../../machine-learning/lessons/01-05-logistic-regression-and-classification.md) derives the binary case).

**The reference network for this module.** Two inputs, two ReLU hidden units, one linear output:

$$W^{(1)} = \begin{pmatrix} 2 & -1 \\ -1 & 1.5\end{pmatrix}, \quad b^{(1)} = \begin{pmatrix} 1 \\ -0.5\end{pmatrix}, \quad W^{(2)} = \begin{pmatrix} 1 & -2\end{pmatrix}, \quad b^{(2)} = 0.5,$$

with training example $x = (1, 2)^{\top}$, target $y = 1$, and loss $L = \tfrac12(\hat y - y)^{2}$. Module 1's boss problem runs a full backward pass on it.

## Picture

![Three side-by-side plots sharing a horizontal axis from minus five to five. Each shows an activation function as a solid blue curve and its derivative as a dashed coral curve. The sigmoid panel shows an S-curve whose derivative is a low bump peaking at one quarter. The tanh panel shows a steeper S-curve whose derivative peaks at one. The ReLU panel shows a hinge whose derivative is a step from zero to one. Captions note the maximum slope in each case and observe that a gradient crossing many layers is multiplied by one derivative per layer.](assets/01-01-fig1.svg)

Ignore the blue curves for a moment and read only the dashed ones. **That dashed curve is the multiplier the gradient picks up at this layer.** Sigmoid's never exceeds a quarter, so ten layers cost a factor of a million. Tanh's reaches one but only in a narrow band around zero. ReLU's is one wherever the unit is on.

The blue curves matter too, but for a different reason: sigmoid and tanh are flat in their tails, and a unit driven into a tail stops learning even though its derivative is nominally positive. Keeping pre-activations in the useful region is the job of initialization ([1.5](01-05-adaptive-optimizers-schedules-and-initialization.md)) and normalization ([1.6](01-06-normalization.md)).

## Worked examples

**Example 1 — a forward pass through the reference network.**

With $x = (1,2)^{\top}$:

$$z^{(1)} = \begin{pmatrix} 2 & -1 \\ -1 & 1.5\end{pmatrix}\begin{pmatrix}1\\2\end{pmatrix} + \begin{pmatrix}1\\-0.5\end{pmatrix} = \begin{pmatrix}2-2\\-1+3\end{pmatrix} + \begin{pmatrix}1\\-0.5\end{pmatrix} = \begin{pmatrix}1\\1.5\end{pmatrix}.$$

Both pre-activations are positive, so ReLU passes them through: $a^{(1)} = (1, 1.5)^{\top}$. Then

$$z^{(2)} = (1)(1) + (-2)(1.5) + 0.5 = 1 - 3 + 0.5 = -1.5, \qquad \hat y = -1.5.$$

The loss is $L = \tfrac12(-1.5 - 1)^{2} = \tfrac12(6.25) = 3.125$.

Both units are alive here, which is worth noticing because it is a fact about *this input*. The same network on $x = (0,0)$ gives $z^{(1)} = (1, -0.5)$, so the second unit is off and any gradient step from that example leaves row 2 of $W^{(1)}$ untouched. **A ReLU network is a different linear model on every input region**, and which units are on is part of what the network computes.

**Example 2 — where the parameters actually live.**

Take a classifier on $28 \times 28$ greyscale images, so $d_0 = 784$, and ten classes.

*A plain linear model*, $784 \to 10$: $784 \times 10 + 10 = 7{,}850$ parameters.

*One hidden layer of 800*, $784 \to 800 \to 10$:

$$(784)(800) + 800 + (800)(10) + 10 = 627{,}200 + 800 + 8{,}000 + 10 = 636{,}010.$$

*Two hidden layers of 256*, $784 \to 256 \to 256 \to 10$:

$$\underbrace{200{,}960}_{\text{layer 1}} + \underbrace{65{,}792}_{\text{layer 2}} + \underbrace{2{,}570}_{\text{output}} = 269{,}322.$$

Three things to read off. **The deeper net has fewer parameters than the shallower one** despite having more layers, because width enters the count as a product and 800 is wide. **Layer 1 is 75 percent of the deep net**, since 784 inputs times 256 units dwarfs everything after it — which is why the input representation is where architectural cleverness pays, and why convolution ([2.1](02-01-the-convolution-operation.md)) attacks exactly this layer. And **the output layer is negligible**, 1 percent, so the cost of adding classes is small.

A useful habit: before reading a paper's results, count its parameters and see where they sit. The distribution across layers usually tells you what the architecture is for.

## Watch out

- You might think adding layers always adds expressive power. Without a nonlinearity it adds none at all — the composite is still affine, and a hundred-layer linear network is a linear model. The activation is the entire source of expressiveness.
- You might think ReLU is strictly better than sigmoid. It is better *inside* a network, for gradient flow. At the output you still want a sigmoid or softmax when you need probabilities, and the right question is always "what does this layer's output have to mean".
- You might think a dead ReLU unit recovers eventually. It does not, on its own: gradient zero means no update, so the pre-activation stays negative and the unit stays dead permanently. Large learning rates cause this by knocking biases far negative in one step, which is one reason [1.5](01-05-adaptive-optimizers-schedules-and-initialization.md)'s schedules matter.

## One-liner

> A network is affine layers alternating with a nonlinearity, and the single most consequential choice is the activation's *derivative*, because backpropagation multiplies by one of them per layer.

## Problems

**P1 (🟢)** For the reference network, compute the forward pass on the input $x = (2, 0)^{\top}$. Give $z^{(1)}$, $a^{(1)}$, $z^{(2)}$ and the loss against $y = 0$. State which hidden units are active and what that implies about which parameters a gradient step on this example can change.

**P2 (🟡)** A team must choose between two architectures for a $1000$-dimensional input and $5$ outputs: (a) $1000 \to 500 \to 500 \to 5$, and (b) $1000 \to 1200 \to 5$. Compute both parameter counts. Then state which layer dominates in each, and give one reason to prefer each architecture that is not about parameter count.

**P3 (🔴, optional)** A network uses sigmoid activations throughout and has 20 hidden layers. (a) Give the best-case factor by which a gradient is scaled in travelling from the loss to the first layer, ignoring the weight matrices. (b) The team replaces sigmoid with tanh and reports that training improves but still stalls around layer 12. Explain what tanh fixed and what it did not. (c) Name the two structural changes from later in this module that address the residual problem, and say in one line what each does.

<details>
<summary>Solutions</summary>

**P1** With $x = (2,0)^{\top}$:

$$z^{(1)} = \begin{pmatrix}2 & -1\\ -1 & 1.5\end{pmatrix}\begin{pmatrix}2\\0\end{pmatrix} + \begin{pmatrix}1\\-0.5\end{pmatrix} = \begin{pmatrix}4\\-2\end{pmatrix} + \begin{pmatrix}1\\-0.5\end{pmatrix} = \begin{pmatrix}5\\-2.5\end{pmatrix}.$$

ReLU gives $a^{(1)} = (5, 0)^{\top}$ — **unit 1 is active, unit 2 is off**.

$$z^{(2)} = (1)(5) + (-2)(0) + 0.5 = 5.5, \qquad L = \tfrac12(5.5 - 0)^{2} = 15.125.$$

What a gradient step can change: unit 2 contributes $a^{(1)}_2 = 0$, and ReLU's derivative there is 0, so

- $\partial L/\partial W^{(2)}_2 = \delta^{(2)} a^{(1)}_2 = 0$ — the output weight on the dead unit gets no gradient;
- row 2 of $W^{(1)}$ and $b^{(1)}_2$ get no gradient either, because the derivative gate is closed.

So a step on this example updates only row 1 of $W^{(1)}$, $b^{(1)}_1$, $W^{(2)}_1$ and $b^{(2)}$ — **five of the nine parameters**. The other four are untouched by this example, though a different example that activates unit 2 would reach them.

**P2** (a) $1000 \to 500 \to 500 \to 5$:

$$(1000)(500)+500 + (500)(500)+500 + (500)(5)+5 = 500{,}500 + 250{,}500 + 2{,}505 = 753{,}505.$$

(b) $1000 \to 1200 \to 5$:

$$(1000)(1200)+1200 + (1200)(5)+5 = 1{,}201{,}200 + 6{,}005 = 1{,}207{,}205.$$

So (b) has about 1.6 times as many parameters despite having one fewer hidden layer.

Dominant layer: in **(a)** the first layer holds 500,500 of 753,505, about 66 percent; in **(b)** the first layer holds 1,201,200 of 1,207,205, about **99.5 percent**. A two-layer net on a wide input is essentially one big matrix.

Reasons not about parameter count:

- **Prefer (a)** for *depth*: two hidden layers compose two nonlinearities, so the function class includes things a single hidden layer needs exponentially many units to express ([1.2](01-02-universal-approximation.md)). Deep nets also tend to learn hierarchical features, which is what makes the intermediate representations reusable ([2.4](02-04-transfer-learning-and-fine-tuning.md)).
- **Prefer (b)** for *optimization and latency*: one hidden layer means one activation derivative between the loss and the input weights, so no depth-related gradient problem arises at all; and the shallower net has a shorter sequential dependency chain, so it is easier to parallelise and lower-latency at inference despite being larger.

**P3** (a) Each sigmoid layer contributes a factor of at most $0.25$, and there are 20 of them, so the gradient reaching layer 1 is scaled by at most

$$0.25^{20} = 2^{-40} \approx 9.1 \times 10^{-13}.$$

And that is the **best** case, attained only if every unit sits exactly at $z = 0$. In practice most units are off-centre and the true factor is far smaller. In 32-bit floating point this is already close to the point where the gradient stops being representable as anything but noise.

(b) **Tanh fixed the systematic shrinkage.** Its derivative peaks at 1 rather than 0.25, so a well-centred unit passes the gradient through undiminished, and it is zero-centred, which removes the bias-drift problem sigmoid's all-positive outputs cause in the following layer.

**It did not fix saturation.** $\tanh'(z) = 1 - \tanh^{2}(z)$ is near 1 only for $|z| \lesssim 1$; at $|z| = 3$ it is about $0.01$. So as soon as some layer's pre-activations drift wide — which they do, because each layer's output scale depends on the previous layer's weights — that layer becomes a near-zero factor again. Stalling at a particular depth is the signature of gradients surviving the first dozen layers and then hitting a saturated one.

(c) The two structural changes:

- **Initialization** ([1.5](01-05-adaptive-optimizers-schedules-and-initialization.md)): scale the initial weights so that activation variance is preserved layer to layer (Xavier for tanh, He for ReLU), which keeps pre-activations in the non-saturating band **at the start** of training.
- **Normalization** ([1.6](01-06-normalization.md)): batch or layer normalization rescales each layer's pre-activations to a controlled mean and variance at every step, which keeps them in the band **throughout** training rather than only at initialization.

The third answer, and the one that scales furthest, is **residual connections** ([2.3](02-03-deep-architectures-and-residual-connections.md)): add an identity path around each block so the gradient has a route to the input that is multiplied by 1 rather than by a chain of derivatives. That is what actually made hundred-layer networks train, and it is a change to the architecture rather than to the activation.

</details>

## Connections

- **Backward:** the affine layer is [`machine-learning` 1.3](../../machine-learning/lessons/01-03-linear-regression-and-least-squares.md)'s linear model widened, the sigmoid output head is its [1.5](../../machine-learning/lessons/01-05-logistic-regression-and-classification.md) logistic unit, and the 2–2–1 hand trace that this course builds on lives in [`machine-learning` 4.4](../../machine-learning/lessons/04-04-a-taste-of-neural-networks.md).
- **Forward:** [1.2](01-02-universal-approximation.md) asks what this class can represent, [1.3](01-03-backpropagation-and-automatic-differentiation.md) computes its gradients as a graph algorithm, and the activation-derivative table here is the quantity those gradients get multiplied by at every layer.
- **Sideways:** "a deep linear network is still linear" is proved as a statement about hypothesis classes in [`statistical-learning` 5.4](../../statistical-learning/lessons/05-04-neural-networks-and-backpropagation.md), and the softmax appears as a convex function in [`convex-optimization` 1.4](../../convex-optimization/lessons/01-04-recognizing-convexity.md) — its log-sum-exp form is the smooth maximum, which is also why it is numerically delicate.
