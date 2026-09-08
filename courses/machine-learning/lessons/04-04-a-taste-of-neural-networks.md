# Machine Learning · Lesson 4.4: A taste of neural networks

> ⏱ ~15 min · Module 4: Evaluation and the road to neural nets · Builds on: [1.5 (logistic regression)](01-05-logistic-regression-and-classification.md), [1.6 (gradient descent)](01-06-gradient-descent-for-learning.md), [2.1 (linear separability)](02-01-the-perceptron-and-linear-separability.md) · Unlocks: [`deep-learning`](../../deep-learning/syllabus.md)

## Why this matters

Neural networks have a reputation for being a different kind of object from everything else in this course. They are not. A network is [1.5's](01-05-logistic-regression-and-classification.md) unit — a linear score pushed through a squashing function — **stacked**, and the only genuinely new mechanic is that the gradient now has to travel back through the stack. That mechanic is backpropagation, it is the chain rule with the intermediate values written down, and you can execute it by hand on a small net in about three minutes.

Doing exactly that is what this lesson is for. Everything the next course spends its time on — depth, initialization, optimizers, architectures — is engineering built on the one computation below. If you can run a forward and a backward pass on paper and say what each number means, nothing in [`deep-learning`](../../deep-learning/syllabus.md) will be structurally surprising; it will only be bigger.

There is also a debt to settle. [2.1](02-01-the-perceptron-and-linear-separability.md) proved that no linear classifier can compute XOR — the course's cleanest impossibility result. This lesson exhibits the smallest machine that can: **two hidden units and six weights**, all integers. Closing that loop is how the course ends.

## The idea

A **unit** takes a linear score and bends it: $a = \phi(w^\top x + b)$, where $\phi$ is a fixed nonlinearity called the **activation**. With $\phi = \sigma$ you have logistic regression's model verbatim. With $\phi(u) = \max(0, u)$ — the [ReLU](../reference.md#relu) — you have the one everybody actually uses, because its derivative is 0 or 1 and never anything in between.

A **layer** is several units reading the same input. And the move that makes a network: **feed one layer's outputs into the next as if they were features.** That is the whole architecture.

Why bother? Because the hidden layer is a **feature map that gets fitted instead of chosen**. [2.4's](02-04-the-kernel-trick.md) kernel also buys you a nonlinear boundary, but you had to pick $\phi$ up front — polynomial, RBF, some $\gamma$. A network learns its own, by gradient descent, from the same loss it is being scored on.

One warning built into the definition. If you drop the activation, stacking buys you nothing:

$$W^{(2)}\bigl(W^{(1)}x + b^{(1)}\bigr) + b^{(2)} = \bigl(W^{(2)}W^{(1)}\bigr)x + \bigl(W^{(2)}b^{(1)} + b^{(2)}\bigr),$$

which is a linear model with a differently-spelled weight matrix. **A hundred affine layers compose to one affine layer.** The nonlinearity is not a detail or a smoothing convenience — it is the only reason depth exists.

Training is [1.6's](01-06-gradient-descent-for-learning.md) gradient descent, unchanged. The only question is how to get the gradient, and the answer is: run forward once keeping every intermediate value, then walk the same graph backwards multiplying local derivatives. That is [backpropagation](../reference.md#backpropagation).

## The formal version

Take a **2–2–1 net**: two inputs, two ReLU hidden units, one identity output, squared loss. Write $W^{(1)}$ for the $2\times2$ hidden weight matrix, $b^{(1)}$ for its bias vector, $W^{(2)}$ for the $1\times2$ output row and $b^{(2)}$ for its scalar bias.

**Forward.**

$$z^{(1)} = W^{(1)}x + b^{(1)}, \qquad a^{(1)} = \phi\bigl(z^{(1)}\bigr), \qquad \hat y = W^{(2)}a^{(1)} + b^{(2)}, \qquad L = \tfrac12(\hat y - y)^2 .$$

*In words:* score, bend, score again, and charge for the miss. The vector $z^{(1)}$ is called the **pre-activation**; keeping it around is what makes the backward pass cheap.

**Backward.** Write $\delta^{(\ell)} = \partial L/\partial z^{(\ell)}$ — the sensitivity of the loss to a layer's pre-activation. Then, with $\odot$ meaning entrywise product:

$$\delta^{(2)} = \hat y - y, \qquad \frac{\partial L}{\partial W^{(2)}} = \delta^{(2)}\bigl(a^{(1)}\bigr)^\top, \qquad \frac{\partial L}{\partial b^{(2)}} = \delta^{(2)},$$

$$\delta^{(1)} = \Bigl(\bigl(W^{(2)}\bigr)^\top \delta^{(2)}\Bigr) \odot \phi'\bigl(z^{(1)}\bigr), \qquad \frac{\partial L}{\partial W^{(1)}} = \delta^{(1)} x^\top, \qquad \frac{\partial L}{\partial b^{(1)}} = \delta^{(1)}.$$

*In words:* the error at the output is the residual; a weight's gradient is **its own layer's $\delta$ times the activation it multiplied**; and to move $\delta$ back one layer you push it through the transposed weight matrix and then gate it by the activation's derivative. Three rules, applied once per layer, in any network.

Two of those deserve a second look.

- $\partial L/\partial W = \delta\, a^\top$ is an **outer product**: every weight's gradient is (how wrong the unit it feeds is) × (how big the input it carried was). A weight that carried a zero contributes nothing.
- The gate $\phi'(z^{(1)})$ is where ReLU earns its keep and where it bites. For $\phi(u)=\max(0,u)$,

$$\phi'(u) = \begin{cases} 1 & u > 0\\ 0 & u < 0\end{cases}$$

so a hidden unit that did not fire multiplies its entire incoming gradient by **exactly zero**. Not "a small number" — zero. Worked example 1 shows what that costs.

**Cost.** One multiply–add per weight, forward. Backward costs two per weight (one for the weight's own gradient, one to push $\delta$ back), so **a full gradient runs at about three times the price of a prediction**, and it is *independent of how many layers you split those weights across* ([`algorithms` 1.1](../../algorithms/lessons/01-01-asymptotic-notation.md) for the notation). A 784–256–10 net has $784(256) + 256(10) = 203{,}264$ weights, so one gradient is roughly $6.1\times10^5$ multiply–adds and one epoch over 60,000 examples is about $3.7\times10^{10}$.

**Memory** is the constraint that actually bites, and it is a direct consequence of "keep the forward values": every $a^{(\ell)}$ must survive until the backward pass reaches it, *for every row in the batch*. At batch 128 and float32 that net stores $128 \times 1050 \times 4 \approx 0.54$ MB of activations against $0.81$ MB of parameters — comparable here, but **doubling the batch doubles one and not the other.** That asymmetry is why "reduce the batch size" is the standard answer to running out of memory, and why it is the wrong knob to reach for first ([4.3](04-03-diagnosing-models-in-practice.md)).

**Universal approximation**, stated once and not proved: *a single hidden layer of sufficient width, with a non-polynomial activation, can approximate any continuous function on a compact set to any accuracy.* Note what it does not say — nothing about how many units, nothing about how much data, and nothing whatever about whether gradient descent will find the weights.

## Picture

![A two-two-one network. Two input nodes carrying 2 and 1 feed two hidden ReLU units; the first has pre-activation 3 and activation 3, the second has pre-activation minus 2 and activation 0 and is drawn in coral as the dead unit. Each edge is labelled with its weight in grey and its gradient in coral. The output node carries 5 against a target of 4, loss 0.5, and output sensitivity 1.](assets/04-04-fig1.svg)

The whole computation on one page. Grey above and on the edges is the forward pass; coral below is the backward pass. Follow the coral backwards from the output: the residual $1$ arrives, splits along the two output weights into $(2, 1)$, and is then gated by the ReLU derivative $(1, 0)$ — at which point the entire lower half of the diagram goes to zero and stays there.

## Worked examples

**Example 1 (mechanical): one forward and one backward pass, by hand.** The net in the Picture:

$$W^{(1)} = \begin{pmatrix} 1 & 1\\ -1 & -1\end{pmatrix},\quad b^{(1)} = (0,\ 1),\quad W^{(2)} = (2,\ 1),\quad b^{(2)} = -1,$$

evaluated at $x = (2,\ 1)$ with target $y = 4$.

*Forward.* Row by row,

$$z^{(1)}_1 = 1(2) + 1(1) + 0 = 3, \qquad z^{(1)}_2 = -1(2) - 1(1) + 1 = -2,$$

so $a^{(1)} = (3,\ 0)$ — the second unit is clipped to zero — and

$$\hat y = 2(3) + 1(0) - 1 = 5, \qquad L = \tfrac12(5-4)^2 = \tfrac12 .$$

*Backward.* Start at the top and apply the three rules.

| quantity | value | where it came from |
|---|---|---|
| $\delta^{(2)}$ | $5 - 4 = 1$ | the residual |
| $\partial L/\partial W^{(2)}$ | $(3,\ 0)$ | $\delta^{(2)}\,a^{(1)}$ |
| $\partial L/\partial b^{(2)}$ | $1$ | $\delta^{(2)}$ |
| $\partial L/\partial a^{(1)}$ | $(2,\ 1)$ | $\bigl(W^{(2)}\bigr)^\top\delta^{(2)}$ |
| $\phi'\bigl(z^{(1)}\bigr)$ | $(1,\ 0)$ | signs of $(3,\ -2)$ |
| $\delta^{(1)}$ | $(2,\ 0)$ | the previous two rows, entrywise |
| $\partial L/\partial b^{(1)}$ | $(2,\ 0)$ | $\delta^{(1)}$ |

and the hidden weight gradient is the outer product $\delta^{(1)}x^\top$:

$$\frac{\partial L}{\partial W^{(1)}} = \begin{pmatrix} 2\\ 0\end{pmatrix}\begin{pmatrix} 2 & 1\end{pmatrix} = \begin{pmatrix} 4 & 2\\ 0 & 0\end{pmatrix}.$$

**The second row is exactly zero, and so is the second entry of every other gradient.** Unit 2 did not fire, so it did not contribute to the prediction, so nothing about it can be blamed for the error — and gradient descent will not move a single one of its three parameters on this example. It is a **dead unit**. Notice this is not floating-point smallness that a smaller learning rate might rescue; it is an algebraic zero, and it will recur on every row where $x_1 + x_2 > 1$.

*One SGD step.* Take $\eta = 0.02$ and update everything at once:

$$W^{(1)} \leftarrow \begin{pmatrix} 0.92 & 0.96\\ -1 & -1\end{pmatrix}, \quad b^{(1)} \leftarrow (-0.04,\ 1), \quad W^{(2)} \leftarrow (1.94,\ 1), \quad b^{(2)} \leftarrow -1.02 .$$

Re-running the forward pass: $z^{(1)} = (2.76,\ -2)$, so $a^{(1)} = (2.76,\ 0)$ and

$$\hat y = 1.94(2.76) - 1.02 = 4.3344, \qquad L = \tfrac12(0.3344)^2 = 0.0559 .$$

The loss fell from $0.5$ to $0.056$ in one step — nearly a factor of nine, because the residual shrank by a factor of three and the loss is quadratic in it. And the second row of $W^{(1)}$ is bit-for-bit unchanged.

**Example 2 (why you'd care): the smallest machine that computes XOR.** [2.1](02-01-the-perceptron-and-linear-separability.md) proved that no $(w, b)$ separates $(0,1)$ and $(1,0)$ from $(0,0)$ and $(1,1)$ — adding the four constraints yields $c > 0$ and $-c > 0$ at once. We do not re-prove it; we defeat it. Take

$$W^{(1)} = \begin{pmatrix} 1 & 1\\ 1 & 1\end{pmatrix},\quad b^{(1)} = (0,\ -1),\quad W^{(2)} = (1,\ -2),\quad b^{(2)} = 0,$$

with ReLU hidden units and an identity output.

| $x$ | $z^{(1)}$ | $a^{(1)}$ | $\hat y = a_1 - 2a_2$ | XOR |
|---|---|---|---|---|
| $(0,0)$ | $(0,\ -1)$ | $(0,\ 0)$ | $0$ | 0 |
| $(0,1)$ | $(1,\ 0)$ | $(1,\ 0)$ | $1$ | 1 |
| $(1,0)$ | $(1,\ 0)$ | $(1,\ 0)$ | $1$ | 1 |
| $(1,1)$ | $(2,\ 1)$ | $(2,\ 1)$ | $0$ | 0 |

Exact, on all four inputs, with six weights and two biases.

**What the hidden layer actually did** is worth more than the table. Both rows of $W^{(1)}$ read the same quantity $s = x_1 + x_2$; the layer has thrown away everything about $x$ except its sum. Then $a_1 = \max(0, s)$ and $a_2 = \max(0, s-1)$, so the output is

$$\hat y = \max(0,\,s) - 2\max(0,\,s-1),$$

a **tent**: rising from 0 to 1 as $s$ goes 0 to 1, falling back to 0 as $s$ goes 1 to 2. XOR is not linearly separable in $x$; it is trivially separable in $s$, where the answer is just "is $s$ near 1?". The hidden layer found the coordinate and the output layer drew the bump.

That is [2.4's](02-04-the-kernel-trick.md) trick with the authorship reversed. The kernel takes a feature map you supplied and evaluates inner products in it cheaply; the network *fits* the map. This one happens to be $x \mapsto s$, discovered — in a real run — by gradient descent from random weights.

## Watch out

- **You might think** a zero gradient means you have converged — **but actually** it can mean a unit has stopped existing. If $z^{(1)}_j < 0$ on *every* training row, unit $j$'s weights and bias receive exactly zero gradient forever, because in a two-layer net those parameters are reachable only through rows where the unit fires. The unit is permanently dead and the loss can be anywhere at all. This is the standard ReLU pathology; the standard responses are careful initialization scaling, smaller learning rates (a large step is what usually pushes a unit's bias off the cliff), and leaky ReLU, which replaces the 0 branch with a small slope precisely so the gradient is never identically zero. Distinguish "dead on this example", which is normal and is what makes ReLU nets sparse, from "dead on every example", which is a bug.
- **You might think** the output error is $y - \hat y$ — **but actually** with $L = \tfrac12(\hat y - y)^2$ it is $\delta^{(2)} = \hat y - y$, which in Example 1 is $+1$, and the descent step therefore *lowers* $\hat y$ from 5 toward 4. Get this backwards and your loss climbs smoothly and convincingly. (Relatedly, ReLU has no derivative at $u = 0$; every library returns 0 there by convention, and the set where it matters has measure zero.)
- **You might think** universal approximation settles the question of what networks can do — **but actually** it is an existence theorem about weights, not about learning. It is silent on the width required (which can be exponential in the input dimension), on the sample size, and on whether any optimizer reaches those weights — and unlike [1.5's](01-05-logistic-regression-and-classification.md) logistic loss, the objective here is **not convex** in the parameters, so [1.6's](01-06-gradient-descent-for-learning.md) guarantees do not transfer ([`convex-optimization` 4.1](../../convex-optimization/lessons/04-01-first-order-methods.md)). A statement about a hypothesis class's richness is exactly the kind of thing that says nothing about generalization on its own — see [`statistical-learning`](../../statistical-learning/syllabus.md) (not yet built; the facts used here are stated where they are used).

## One-liner

> A neural network is [1.5's](01-05-logistic-regression-and-classification.md) unit stacked, backpropagation is the chain rule with the forward values kept, and the whole of it fits in three rules — the residual starts at the output, a weight's gradient is its layer's $\delta$ times the activation it carried, and $\delta$ moves back through the transposed weights and then through the activation's derivative, which for a silent ReLU is zero.

## Problems

**P1 (🟢)** A fresh 2–2–1 net with ReLU hidden units and an identity output:

$$W^{(1)} = \begin{pmatrix} 2 & 1\\ -1 & 1\end{pmatrix},\quad b^{(1)} = (-3,\ -4),\quad W^{(2)} = (1,\ 3),\quad b^{(2)} = 2,$$

on the input $x = (2,\ 3)$ with target $y = 3$. Run the forward pass: give $z^{(1)}$, $a^{(1)}$, $\hat y$ and $L = \tfrac12(\hat y - y)^2$.

**P2 (🟡)** Continue P1 backwards. Give $\delta^{(2)}$, $\partial L/\partial W^{(2)}$, $\partial L/\partial b^{(2)}$, $\partial L/\partial a^{(1)}$, $\phi'(z^{(1)})$, $\delta^{(1)}$, $\partial L/\partial W^{(1)}$ and $\partial L/\partial b^{(1)}$. Then: (a) name any dead unit and say which parameters of the net a gradient step on this example leaves untouched; (b) the output weight $W^{(2)}_2 = 3$ is the largest weight in the net — explain in one sentence why its gradient is nonetheless zero.

**P3 (🔴)** Take Example 2's XOR net and read its output as a class by the rule "predict 1 if $\hat y > \tfrac12$". (a) Confirm the rule classifies all four inputs correctly, and state the margin — the distance from each output to the threshold. (b) Now change $b^{(2)}$ from $0$ to $-\tfrac12$, leaving all six weights and both hidden biases alone. Recompute the four outputs and say exactly which inputs are now misclassified. (c) In two sentences, say what (b) shows about how much slack the construction has, and why that is a reason to *distrust* hand-built weights as evidence of what a network will learn.

<details>
<summary>Solutions</summary>

**P1** Pre-activations first:

$$z^{(1)}_1 = 2(2) + 1(3) - 3 = 4, \qquad z^{(1)}_2 = -1(2) + 1(3) - 4 = -3,$$

so $z^{(1)} = (4,\ -3)$ and $a^{(1)} = \max(0, z^{(1)}) = (4,\ 0)$. Then

$$\hat y = 1(4) + 3(0) + 2 = 6, \qquad L = \tfrac12(6-3)^2 = \tfrac92 = 4.5 .$$

**P2** Applying the three rules in order:

| quantity | value |
|---|---|
| $\delta^{(2)} = \hat y - y$ | $3$ |
| $\partial L/\partial W^{(2)} = \delta^{(2)}a^{(1)}$ | $(12,\ 0)$ |
| $\partial L/\partial b^{(2)}$ | $3$ |
| $\partial L/\partial a^{(1)} = \bigl(W^{(2)}\bigr)^\top\delta^{(2)}$ | $(3,\ 9)$ |
| $\phi'\bigl(z^{(1)}\bigr)$ | $(1,\ 0)$ |
| $\delta^{(1)}$ | $(3,\ 0)$ |
| $\partial L/\partial b^{(1)}$ | $(3,\ 0)$ |

and the outer product

$$\frac{\partial L}{\partial W^{(1)}} = \begin{pmatrix} 3\\ 0\end{pmatrix}\begin{pmatrix} 2 & 3\end{pmatrix} = \begin{pmatrix} 6 & 9\\ 0 & 0\end{pmatrix}.$$

(a) **Hidden unit 2 is dead** on this example: $z^{(1)}_2 = -3 < 0$. A step leaves four parameters exactly unchanged — the second row of $W^{(1)}$, namely $(-1,\ 1)$; the bias $b^{(1)}_2 = -4$; and the output weight $W^{(2)}_2 = 3$. Everything else moves.

(b) Because a weight's gradient is $\delta$ times **the activation it multiplied**, and unit 2's activation is $0$: the weight $W^{(2)}_2$ multiplied nothing, so it contributed nothing to $\hat y$, so it cannot be responsible for any part of the error. Gradient size has nothing to do with weight size — the outer product $\delta^{(1)}x^\top$ makes it a product of *how wrong the destination is* and *how big the signal was*.

(Aside worth noticing: $\partial L/\partial a^{(1)}_2 = 9$ is the largest number in the backward pass. The loss *would* be very sensitive to unit 2's output if unit 2 had one. The ReLU gate discards that sensitivity, which is exactly the information that would tell you to wake the unit up.)

**P3** (a) From Example 2's table, the outputs are $\hat y = 0, 1, 1, 0$ on $(0,0), (0,1), (1,0), (1,1)$, whose XOR labels are $0, 1, 1, 0$. Every output is $\tfrac12$ away from the threshold, so all four are correct and the margin is exactly $\tfrac12$ — the same on all four points, which is what "no slack to spare in either direction" looks like numerically.

(b) Subtracting $\tfrac12$ from $b^{(2)}$ shifts every output down by $\tfrac12$, since $b^{(2)}$ enters $\hat y$ additively and nothing else changed:

| $x$ | $a^{(1)}$ | new $\hat y$ | predicted | XOR |
|---|---|---|---|---|
| $(0,0)$ | $(0,\ 0)$ | $-\tfrac12$ | 0 | 0 |
| $(0,1)$ | $(1,\ 0)$ | $\tfrac12$ | **0** | 1 |
| $(1,0)$ | $(1,\ 0)$ | $\tfrac12$ | **0** | 1 |
| $(1,1)$ | $(2,\ 1)$ | $-\tfrac12$ | 0 | 0 |

The two positives, $(0,1)$ and $(1,0)$, land **exactly on the threshold**, so under the strict rule $\hat y > \tfrac12$ both are misclassified — and the net has degenerated into the constant classifier "always 0", which gets 50 percent on XOR. The negatives are untouched, having fallen from $0$ to $-\tfrac12$, which is further from the boundary, not nearer.

(c) A single bias moved by half a unit — one of eight parameters, changed by an amount equal to the margin — destroys both positive predictions at once, because the margin was $\tfrac12$ in the first place and there was nothing else to spend. Which is the reason to be careful with constructions like this one: **exhibiting weights proves the architecture is expressive enough, and proves nothing about whether it is learnable or stable**, and a hand-built solution sitting on a knife edge is precisely the kind of point an optimizer has no particular reason to find or to stay near.

</details>

## Flashback

**From Lesson 1.5 (Logistic regression and classification):** A default model reports log-odds

$$z = -2.0 + 0.6\,x_{\text{util}} - 0.9\,x_{\text{inc}},$$

with utilisation in units of 10 percentage points and income in units of 10,000 dollars.

(a) Give the odds ratio for each feature and compute $p$ for a borrower at utilisation 3 and income 2.

(b) Separately, fit a one-feature model $p = \sigma(b + wx)$ to $x = (-1,\ 0,\ 2)$, $y = (0,\ 1,\ 1)$. Starting from $\theta = (b, w) = (0,0)$, take one gradient step at $\eta = 1$ using $\nabla L = X^\top(p - y)$, and confirm the log-likelihood improved.

(c) Now the punchline. Rebuild this lesson's net with **one** hidden unit, $\phi = \sigma$, output weight fixed at 1 and output bias fixed at 0. Write down what the network computes, and say what a hidden layer buys you that this does not.

<details>
<summary>Solution</summary>

(a) Exponentiate: $e^{0.6} = 1.8221$ and $e^{-0.9} = 0.4066$. Each extra 10 percentage points of utilisation multiplies the odds of default by $1.82$; each extra 10,000 dollars of income multiplies them by $0.41$, cutting them by about 59 percent. For the borrower,

$$z = -2.0 + 0.6(3) - 0.9(2) = -2.0, \qquad p = \sigma(-2) = 0.1192,$$

odds $e^{-2} = 0.1353$, i.e. about 1 in 8.4.

(b) At $\theta = (0,0)$ every $z_i = 0$, so $p = (\tfrac12, \tfrac12, \tfrac12)$ and $\ell = 3\log\tfrac12 = -2.0794$. The error vector is $p - y = (\tfrac12,\ -\tfrac12,\ -\tfrac12)$, and $X^\top(p-y)$ has one entry per column of $X$ (the ones column, then $x$):

$$\sum_i (p_i - y_i) = -\tfrac12, \qquad \sum_i x_i(p_i-y_i) = -\tfrac12 + 0 - 1 = -\tfrac32 .$$

So $\nabla L = \bigl(-\tfrac12,\ -\tfrac32\bigr)$ and the step $\theta \leftarrow \theta - \eta\nabla L$ at $\eta = 1$ gives $\theta = (0.5,\ 1.5)$. Both rise, as they should: two of three labels are 1, and the 1s sit to the right.

| $x_i$ | $y_i$ | $z_i = 0.5 + 1.5x_i$ | $p_i$ | contribution |
|---|---|---|---|---|
| $-1$ | 0 | $-1.0$ | $0.2689$ | $\log 0.7311 = -0.3133$ |
| $0$ | 1 | $0.5$ | $0.6225$ | $\log 0.6225 = -0.4741$ |
| $2$ | 1 | $3.5$ | $0.9707$ | $\log 0.9707 = -0.0298$ |

Total $\ell = -0.8171$, up from $-2.0794$. ✓

(c) With one hidden unit and the output layer frozen at weight 1, bias 0, the network computes

$$\hat y = 1\cdot\sigma\bigl(w^\top x + b\bigr) + 0 = \sigma\bigl(w^\top x + b\bigr),$$

which **is logistic regression** — the same model, the same parameters, the same decision boundary at $w^\top x + b = 0$. Not an analogy: the identical function. Logistic regression is the one-hidden-unit, frozen-output-layer special case of a neural network, and a network with $k$ hidden units and a trainable output layer is a **linear combination of $k$ logistic regressions** — which, since a linear combination of enough sigmoids can approximate any continuous function, is where universal approximation comes from.

So what does the hidden layer buy? Two things, and they are different. **Width** gives the output layer a basis of nonlinear features to combine instead of the one bent score it gets here. **Trainability of the first layer** means those features are fitted to the loss rather than handed over — the difference between [2.4's](02-04-the-kernel-trick.md) chosen $\phi$ and a learned one.

And what it costs: $\sigma$ of a linear function of $w$ is fine, but $\sigma$ of a linear function of an already-fitted $\sigma$ is not — [1.5's](01-05-logistic-regression-and-classification.md) convexity is gone the moment the first layer's weights become variables, which is why the guarantees stop and the engineering starts.

</details>

## Connections

- **Backward:** the unit is [1.5's](01-05-logistic-regression-and-classification.md) model, verbatim; the optimizer is [1.6's](01-06-gradient-descent-for-learning.md), and its learning-rate question returns with a sharper edge because a step that is too large can kill a ReLU rather than merely overshoot. Example 2 pays off [2.1's](02-01-the-perceptron-and-linear-separability.md) XOR impossibility, and its hidden layer is [2.4's](02-04-the-kernel-trick.md) feature map with the authorship reversed. The diagnosis you would run on a trained net is [4.3's](04-03-diagnosing-models-in-practice.md), unchanged.
- **Forward:** [`deep-learning`](../../deep-learning/syllabus.md) takes exactly these three backward rules and asks what happens when you apply them fifty times — where $\delta$ vanishes or explodes with depth, how initialization scaling keeps activations from collapsing, what Adam and its relatives do to [1.6's](01-06-gradient-descent-for-learning.md) fixed step size, and which architectures (convolutional, recurrent, attention-based) hard-code which structural assumption. It also owns the fact that heavily overparameterised networks flatly contradict [1.2's](01-02-generalization-and-the-bias-variance-tradeoff.md) U-curve — test error falls again past the interpolation threshold, the **double descent** puzzle, whose theory belongs to [`statistical-learning`](../../statistical-learning/syllabus.md) (not yet built).
- **Sideways:** backpropagation is reverse-mode automatic differentiation, which is the same trade every dynamic program makes — store intermediate results to avoid recomputing them ([`algorithms` 2.5](../../algorithms/lessons/02-05-dynamic-programming-and-knapsack.md)), and the memory bill above is that trade's invoice. The composition-of-affine-maps collapse is the reason [1.4's](01-04-regularization-ridge-and-lasso.md) penalised linear models cannot be made expressive by stacking them, and the tent function in Example 2 is a piecewise-linear spline — a ReLU network is exactly a spline whose knots are fitted rather than placed.

## Where this course ends

You can now frame a problem as risk minimization, fit and regularize a linear model, draw a margin, grow and average trees, cluster and compress without labels, run EM, and judge any of it with cross-validation and the right metric. The through-line was [1.2's](01-02-generalization-and-the-bias-variance-tradeoff.md) trade-off, and every method here turned out to be a different knob on it — $\lambda$, $C$, $\gamma$, tree depth, $B$, $k$.

The next knob is width and depth, it behaves unlike any of the others, and it has its own course. Go to [`deep-learning`](../../deep-learning/syllabus.md) for the mechanics and [`statistical-learning`](../../statistical-learning/syllabus.md) for why any of this was ever entitled to work.
