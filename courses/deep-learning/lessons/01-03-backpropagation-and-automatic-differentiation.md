# Deep Learning · Lesson 1.3: Backpropagation & automatic differentiation

> ⏱ ~15 min · Module 1: Neural nets, backpropagation & training · Builds on: [`machine-learning` 4.4 (a taste of neural networks)](../../machine-learning/lessons/04-04-a-taste-of-neural-networks.md), [1.1 (from linear models to the MLP)](01-01-from-linear-models-to-the-mlp.md) · Unlocks: [1.4 (SGD, mini-batches & momentum)](01-04-sgd-mini-batches-and-momentum.md)

## Why this matters

[`machine-learning` 4.4](../../machine-learning/lessons/04-04-a-taste-of-neural-networks.md) already ran backpropagation by hand on a 2–2–1 network: forward pass, output error, push $\delta$ back through the transposed weights, gate by the activation derivative, read off the outer products. If that drill is cold, redo it there — it is not repeated here.

What that lesson leaves out is everything that makes backpropagation work on a *real* network. Real networks are not chains. They branch, they merge, they reuse the same weight matrix at a dozen positions ([2.1](02-01-the-convolution-operation.md)) or a thousand time steps ([3.1](03-01-rnns-and-backprop-through-time.md)). None of that is a chain of layers, and the chain-rule-down-a-line picture stops applying.

The right frame is a **computational graph**, and backpropagation is one specific, slightly surprising way of differentiating one. Understanding why it is the right way — and what it costs in memory — is what lets you reason about a 100-billion-parameter model that you will never hand-trace.

## The idea

Write the computation as a directed acyclic graph: inputs and parameters at the sources, elementary operations at the nodes, the scalar loss at the sink. The forward pass evaluates nodes in topological order.

Now differentiate. The multivariable chain rule says that if a node $u$ feeds several consumers, then

$$\frac{\partial L}{\partial u} = \sum_{\text{consumers } c} \frac{\partial L}{\partial c}\,\frac{\partial c}{\partial u}.$$

**Sum over paths.** That single formula is the whole algorithm: sweep the graph in reverse topological order, and each node adds up what its consumers send back.

The surprising part is the direction. There are two ways to apply the chain rule mechanically.

**Forward mode** propagates derivatives with respect to *one input* forward through the graph. One sweep gives you $\partial(\text{everything})/\partial w_i$ for a single $w_i$. To get all $n$ parameters you need $n$ sweeps.

**Reverse mode** propagates derivatives of *one output* backward. One sweep gives you $\partial L/\partial(\text{everything})$ — every parameter at once.

For a function $\mathbb{R}^{n} \to \mathbb{R}^{m}$, forward mode costs $n$ sweeps and reverse mode costs $m$. Deep learning has $n$ in the billions and **$m = 1$**, because the loss is a scalar. That asymmetry is the entire reason backpropagation is reverse mode, and it is why training a model with a hundred million parameters costs about three forward passes rather than a hundred million.

Nothing is free. Reverse mode needs the forward values still available when the backward sweep reaches each node, so **every intermediate activation must be kept in memory** until it is used. For a deep network on a large batch that memory, not the parameters, is what fills the accelerator.

## The formal version

> **Computational graph.** A DAG whose nodes are variables, each computed from its parents by an elementary operation. The forward pass evaluates in topological order; the backward pass visits in reverse topological order.

> **Backward rule.** Write $\bar u = \partial L / \partial u$, the **adjoint** of $u$. Initialise $\bar L = 1$. Then for each node $u$ in reverse topological order,
> $$\bar u = \sum_{c \in \mathrm{children}(u)} \bar c \, \frac{\partial c}{\partial u}.$$

In words: a node's gradient is the sum of its children's gradients, each pushed back through one local derivative. **A node used twice accumulates two contributions** — which is why frameworks *add into* gradient buffers rather than assigning, and why forgetting to zero those buffers between steps is the classic bug.

> **Vector–Jacobian product.** For a node computing $\mathbf{c} = f(\mathbf{u})$, the rule in vector form is
> $$\bar{\mathbf{u}} = J_f^{\top}\,\bar{\mathbf{c}}, \qquad J_f = \frac{\partial \mathbf{c}}{\partial \mathbf{u}}.$$

This is the implementation-level fact worth knowing: **autodiff never builds a Jacobian.** For an affine layer $\mathbf{z} = W\mathbf{a}$, the Jacobian with respect to $\mathbf{a}$ is $W$, and the VJP is just $W^{\top}\bar{\mathbf{z}}$ — one matrix-vector product, not a matrix of size $d_{\text{out}} \times d_{\text{in}}$ built and multiplied. Each operation ships a hand-written VJP, and the framework composes them.

The layer rules of [`machine-learning` 4.4](../../machine-learning/lessons/04-04-a-taste-of-neural-networks.md) are the VJPs of the affine and elementwise nodes:

$$\bar{\mathbf{a}}^{(\ell-1)} = W^{(\ell)\top}\bar{\mathbf{z}}^{(\ell)}, \qquad \bar W^{(\ell)} = \bar{\mathbf{z}}^{(\ell)}\,\mathbf{a}^{(\ell-1)\top}, \qquad \bar{\mathbf{z}}^{(\ell)} = \bar{\mathbf{a}}^{(\ell)} \odot \phi'\!\big(\mathbf{z}^{(\ell)}\big).$$

> **Cost.** Let $F$ be the cost of one forward pass. Reverse mode costs $O(F)$ — in practice between 2 and 3 times $F$ — **independent of the number of parameters**. Forward mode costs $O(nF)$ to obtain all $n$ parameter gradients.

| | forward mode | reverse mode |
|---|---|---|
| One sweep gives | $\partial(\text{all outputs})/\partial(\text{one input})$ | $\partial(\text{one output})/\partial(\text{all inputs})$ |
| Sweeps for $\mathbb{R}^{n}\to\mathbb{R}^{m}$ | $n$ | $m$ |
| Memory | $O(1)$ extra | must store activations |
| Good when | few inputs, many outputs | **many inputs, one output** |

> **Memory.** A network of $L$ layers storing activations of size $A$ per layer for a batch of $B$ examples holds $O(LAB)$ floats through the backward pass.

**Gradient checkpointing** trades that back: keep only every $\sqrt{L}$-th activation and recompute the rest during the backward sweep. Memory falls from $O(L)$ to $O(\sqrt{L})$ — a factor of 5 at $L = 100$ — for roughly one extra forward pass, about 33 percent more time. This is the standard lever when a model will not fit, and it is a pure time-for-space trade of the kind [`algorithms` 1.5](../../algorithms/lessons/01-05-divide-and-conquer-beyond-sorting.md) formalises.

> **Gradient checking.** For a scalar parameter $w$, compare the analytic gradient against the central difference
> $$\frac{L(w + \epsilon) - L(w - \epsilon)}{2\epsilon} = \frac{\partial L}{\partial w} + O(\epsilon^{2}).$$

Use the central difference, not the forward one: its error is $O(\epsilon^{2})$ rather than $O(\epsilon)$. Take $\epsilon \approx 10^{-5}$ in double precision, and remember that too small an $\epsilon$ makes cancellation error dominate ([`numerical-analysis` 1.2](../../numerical-analysis/lessons/01-02-cancellation-error-propagation.md)).

## Picture

![A computational graph drawn left to right. A node w feeds a node u through multiplication by three. From u, two arrows leave: one to a node v that squares it, and one directly to a node y that adds. Node v also feeds y. Node y feeds the loss node L. Forward values are printed above each node. Below the graph, the backward sweep is written out in reverse order, showing that the gradient at u is the sum of a contribution through v and a contribution through the direct branch.](assets/01-03-fig1.svg)

Follow the two arrows leaving $u$. **That fork is the whole point of the graph frame.** In a plain layer chain every node has one consumer and the chain rule is a product; here $u$ has two, so its gradient is a sum, and the backward sweep must wait until *both* consumers have reported before $u$'s gradient is complete.

That waiting condition is exactly "reverse topological order", and it is why frameworks build the graph before differentiating it.

## Worked examples

**Example 1 — a branching graph, forward and backward.**

Let $u = wx$, $v = u^{2}$, $y = v + u$, and $L = \tfrac12(y - t)^{2}$, with $w = 2$, $x = 3$, $t = 40$.

*Forward.* $u = 6$, $v = 36$, $y = 42$, and $L = \tfrac12(42-40)^{2} = 2$.

*Backward*, in reverse topological order:

$$\bar y = y - t = 2, \qquad \bar v = \bar y \cdot 1 = 2.$$

Now $u$, which has two children:

$$\bar u = \underbrace{\bar v \cdot \frac{\partial v}{\partial u}}_{\text{through } v} + \underbrace{\bar y \cdot \frac{\partial y}{\partial u}}_{\text{direct branch}} = 2(2u) + 2(1) = 24 + 2 = 26.$$

$$\bar w = \bar u \cdot \frac{\partial u}{\partial w} = 26 \cdot x = 78.$$

Check it numerically. $L(w) = \tfrac12\big((wx)^{2} + wx - t\big)^{2}$, and the central difference at $w=2$ with $\epsilon = 10^{-6}$ gives $78.0000$. It matches.

**Take only the direct path and you get 6; take only the path through $v$ and you get 72.** Either alone is wrong, and the error is not small. Missing a path is the most common hand-backprop mistake and it is silent — the gradient is merely wrong, not undefined, and training limps rather than crashing.

**Example 2 — a shared weight, which is what convolution and recurrence both are.**

Let $h_1 = wx$ and $h_2 = w h_1$, with loss $L = \tfrac12(h_2 - t)^{2}$. The **same** $w$ is used twice. Take $w = 2$, $x = 3$, $t = 10$: then $h_1 = 6$, $h_2 = 12$, $L = 2$.

The graph has two edges from $w$, so two contributions:

$$\bar h_2 = h_2 - t = 2.$$

*Use 2, the outer one:* $\partial h_2/\partial w = h_1 = 6$, contributing $2 \times 6 = 12$.

*Use 1, through $h_1$:* $\bar h_1 = \bar h_2 \cdot w = 4$, and $\partial h_1/\partial w = x = 3$, contributing $4 \times 3 = 12$.

$$\bar w = 12 + 12 = 24.$$

Check: $L(w) = \tfrac12(w^{2}x - t)^{2}$, so $\partial L/\partial w = (w^{2}x - t)(2wx) = 2 \times 12 = 24$. Confirmed numerically as well.

**This is the entire mechanism of parameter sharing.** A convolutional kernel applied at 900 positions receives 900 gradient contributions that are summed ([2.1](02-01-the-convolution-operation.md)); an RNN's recurrent matrix applied at 50 time steps receives 50 ([3.1](03-01-rnns-and-backprop-through-time.md)). Nothing new is needed — the accumulation rule was already there in the chain rule, and "backpropagation through time" is just this example with more steps.

It also explains why shared weights get *large* gradients: they are summed, not averaged, so a kernel used at many positions sees a gradient roughly proportional to the number of positions. That interacts with learning rates and is one reason normalization ([1.6](01-06-normalization.md)) and gradient clipping ([3.2](03-02-lstms-grus-and-vanishing-gradients.md)) matter more in these architectures.

## Watch out

- You might think backpropagation is a special algorithm for neural networks. It is reverse-mode automatic differentiation, which predates the field and applies to any differentiable program. What is special about neural networks is only that the output is a scalar and the inputs are many, which is precisely the regime reverse mode wins.
- You might think autodiff is symbolic differentiation or finite differences. It is neither. Symbolic differentiation produces expressions that blow up in size; finite differences cost one evaluation per parameter and carry truncation error. Autodiff evaluates exact derivatives numerically, at a constant multiple of the forward cost.
- You might think a node's gradient is ready as soon as one consumer reports. It is not — a branching node must collect from **all** consumers, which is why the sweep follows reverse topological order and why gradient buffers accumulate rather than overwrite.

## One-liner

> Backpropagation is reverse-mode autodiff on a graph: one sweep gives every parameter's gradient because the loss is a scalar, and a node used twice simply adds up what both uses send back.

## Problems

**P1 (🟢)** For the graph $u = wx$, $v = \ln u$, $y = v + 3u$, $L = y^{2}$, with $w = 1$ and $x = 2$: compute the forward values and then every adjoint $\bar y, \bar v, \bar u, \bar w$. State which node branches and how many contributions its gradient collects.

**P2 (🟡)** A model has $n = 10^{8}$ parameters, and one forward pass costs $F$. (a) Give the cost of obtaining all parameter gradients by reverse mode and by forward mode, in units of $F$. (b) Give the ratio. (c) Name one setting in which forward mode is nonetheless the right choice, and say what makes it so.

**P3 (🔴, optional)** A 96-layer transformer trains with activation memory of 1.2 GB per layer at the chosen batch size, against 40 GB of accelerator memory that must also hold parameters and optimizer state. (a) State whether the naive backward pass fits, with the arithmetic. (b) Apply $\sqrt{L}$ gradient checkpointing: give the number of checkpoints, the resulting activation memory, and the extra time cost. (c) The team instead halves the batch size. Compare the two options on memory, on time, and on one effect that is not about resources at all.

<details>
<summary>Solutions</summary>

**P1** *Forward*, with $w = 1$, $x = 2$:

$$u = wx = 2, \qquad v = \ln 2 \approx 0.6931, \qquad y = v + 3u = 0.6931 + 6 = 6.6931, \qquad L = y^{2} \approx 44.80.$$

*Backward:*

$$\bar y = 2y = 13.386, \qquad \bar v = \bar y \cdot 1 = 13.386.$$

$u$ is the branching node — it feeds both $v$ and $y$ — so it collects **two** contributions:

$$\bar u = \bar v \cdot \frac{\partial v}{\partial u} + \bar y \cdot \frac{\partial y}{\partial u} = 13.386 \cdot \frac{1}{u} + 13.386 \cdot 3 = 6.693 + 40.159 = 46.852.$$

$$\bar w = \bar u \cdot x = 46.852 \cdot 2 = 93.70.$$

Check analytically: $L(w) = (\ln(2w) + 6w)^{2}$, so $\partial L/\partial w = 2(\ln(2w)+6w)(1/w + 6)$, which at $w=1$ is $2(6.6931)(7) = 93.70$. It matches.

**P2** (a) **Reverse mode: $O(F)$**, in practice about $2F$ to $3F$, and crucially *independent of $n$* — one forward pass plus one backward sweep yields all $10^{8}$ gradients.

**Forward mode: $nF = 10^{8}F$**, because each sweep yields the derivative with respect to one parameter and there are $10^{8}$ of them.

(b) The ratio is about

$$\frac{10^{8}F}{3F} \approx 3.3 \times 10^{7}.$$

If a reverse-mode training step takes one second, the forward-mode equivalent takes about **a year**. Training as we know it exists because of this factor.

(c) Forward mode wins when there are **few inputs and many outputs**, since its cost scales with the input count. Concretely:

- **Jacobian-vector products** for sensitivity analysis, where you want the effect of perturbing one or two inputs on a whole output vector — the exact mirror of the training case.
- **Computing directional derivatives or Hessian-vector products.** A Hessian-vector product $Hv$ is efficiently obtained as forward-over-reverse: run forward mode through the reverse-mode gradient computation, giving $Hv$ at the cost of a few passes rather than building the $n \times n$ Hessian. This is what makes second-order and curvature-aware methods tractable at all ([`convex-optimization` 4.2](../../convex-optimization/lessons/04-02-newtons-method.md)).
- **Memory-bound settings**, since forward mode stores no activation tape.

**P3** (a) Naive activation memory is

$$96 \times 1.2\ \text{GB} = 115.2\ \text{GB},$$

against 40 GB available, and that is before parameters and optimizer state. **It does not fit**, by a factor of nearly three.

(b) With $\sqrt{L}$ checkpointing at $L = 96$: keep every $\lceil\sqrt{96}\rceil \approx 10$-th layer, so **about 10 checkpoints**. Memory becomes roughly the checkpoints plus one segment being recomputed:

$$(10 + 10) \times 1.2\ \text{GB} = 24\ \text{GB},$$

a reduction of about 4.8 times, which fits with room for parameters and optimizer state.

The time cost is **one extra forward pass** over the segments during the backward sweep. Against a baseline of one forward plus roughly two forward-equivalents of backward, that is about $4/3$, so **roughly 33 percent slower per step**.

(c) Comparison:

| | checkpointing | halving the batch |
|---|---|---|
| Memory | 115 GB to 24 GB | 115 GB to 58 GB — still does not fit |
| Time per step | about 33 percent more | about half, but twice as many steps for the same data |
| Throughput | slightly lower | roughly unchanged, minus efficiency losses |

On resources, **checkpointing wins outright here**: halving the batch does not even solve the problem, and would have to be applied twice to reach 29 GB.

The effect that is not about resources is the one that decides it. **Batch size is a hyperparameter of the optimization, not just a memory knob.** Halving it doubles the gradient noise scale ([1.4](01-04-sgd-mini-batches-and-momentum.md)), which changes the effective regularization, interacts with the learning rate through the linear scaling rule, and alters batch normalization's statistics ([1.6](01-06-normalization.md)) — batch norm computes its mean and variance over the batch, so a smaller batch makes those estimates noisier and can degrade the model outright.

Checkpointing, by contrast, is **mathematically invisible**: it recomputes the same values and produces bit-comparable gradients. The rule this illustrates is worth keeping: prefer the lever that changes the cost without changing the computation, and treat batch size as a modelling decision that happens to have a memory cost.

</details>

## Flashback

**From Lesson 1.1 (from linear models to the MLP):** The reference network has $W^{(1)} = \begin{pmatrix} 2 & -1 \\ -1 & 1.5\end{pmatrix}$, $b^{(1)} = (1, -0.5)^{\top}$, $W^{(2)} = (1, -2)$, $b^{(2)} = 0.5$, ReLU hidden units and a linear output. On $x = (1,2)^{\top}$ the forward pass gave $a^{(1)} = (1, 1.5)^{\top}$ and $\hat y = -1.5$, with target $y = 1$ and loss $L = \tfrac12(\hat y - y)^{2}$. Compute $\bar z^{(2)}$, $\bar W^{(2)}$, $\bar a^{(1)}$, $\bar z^{(1)}$ and $\bar W^{(1)}$ using the VJP rules of this lesson.

<details>
<summary>Solution</summary>

Output first:

$$\bar z^{(2)} = \hat y - y = -1.5 - 1 = -2.5.$$

The output layer's weight gradient is the outer product of the incoming adjoint with the activation it multiplied:

$$\bar W^{(2)} = \bar z^{(2)}\,a^{(1)\top} = -2.5\,(1, 1.5) = (-2.5,\ -3.75), \qquad \bar b^{(2)} = -2.5.$$

Push back through the weight matrix:

$$\bar a^{(1)} = W^{(2)\top}\bar z^{(2)} = \begin{pmatrix}1\\-2\end{pmatrix}(-2.5) = \begin{pmatrix}-2.5\\ 5\end{pmatrix}.$$

Gate by the activation derivative. Both pre-activations $z^{(1)} = (1, 1.5)$ are positive, so $\phi'(z^{(1)}) = (1,1)$ and nothing is zeroed:

$$\bar z^{(1)} = \bar a^{(1)} \odot \phi'(z^{(1)}) = \begin{pmatrix}-2.5\\ 5\end{pmatrix}.$$

Finally the first layer's weights, again an outer product with the input:

$$\bar W^{(1)} = \bar z^{(1)}\,x^{\top} = \begin{pmatrix}-2.5\\ 5\end{pmatrix}(1, 2) = \begin{pmatrix}-2.5 & -5\\ 5 & 10\end{pmatrix}, \qquad \bar b^{(1)} = \begin{pmatrix}-2.5\\ 5\end{pmatrix}.$$

Two things to read off. **The sign of $\bar z^{(2)}$ is $\hat y - y$, not $y - \hat y$** — the prediction is too low, so the gradient is negative and a descent step raises it. And **row 2 of $\bar W^{(1)}$ is larger than row 1**, by a factor of exactly 2, because $W^{(2)}_2 = -2$ carries twice the magnitude back to unit 2. The backward pass inherits the forward pass's weighting, transposed, which is the content of $\bar a^{(\ell-1)} = W^{(\ell)\top}\bar z^{(\ell)}$.

</details>

## Connections

- **Backward:** the layer-level rules are [`machine-learning` 4.4](../../machine-learning/lessons/04-04-a-taste-of-neural-networks.md)'s, re-derived here as the VJPs of two node types; the activation derivative that gates $\bar z^{(\ell)}$ is [1.1](01-01-from-linear-models-to-the-mlp.md)'s table, and its size is what makes deep gradients vanish.
- **Forward:** [1.4](01-04-sgd-mini-batches-and-momentum.md) consumes these gradients; [2.1](02-01-the-convolution-operation.md) and [3.1](03-01-rnns-and-backprop-through-time.md) are both Example 2 at scale, where one parameter is used at many positions and its gradient is the sum over all of them.
- **Sideways:** the reverse sweep requires a topological order, the algorithm of [`algorithms` 3.2](../../algorithms/lessons/03-02-topological-sort-and-strongly-connected-components.md); checkpointing is the time-for-space trade of [`algorithms` 1.5](../../algorithms/lessons/01-05-divide-and-conquer-beyond-sorting.md); and the choice of $\epsilon$ in gradient checking is the truncation-versus-cancellation balance of [`numerical-analysis` 1.2](../../numerical-analysis/lessons/01-02-cancellation-error-propagation.md).
