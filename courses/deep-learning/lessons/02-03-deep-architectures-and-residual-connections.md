# Deep Learning · Lesson 2.3: Deep architectures & residual connections

> ⏱ ~15 min · Module 2: Convolutional networks · Builds on: [2.2 (building a convolutional network)](02-02-building-a-convolutional-network.md), [1.6 (normalization)](01-06-normalization.md) · Unlocks: [2.4 (transfer learning and fine-tuning)](02-04-transfer-learning-and-fine-tuning.md)

## Why this matters

[1.2](01-02-universal-approximation.md) argued that depth buys representational power exponentially. [2.2](02-02-building-a-convolutional-network.md) showed that depth is how a convolutional network sees more than a patch. Both say: go deeper.

Then the experiment that everybody ran in 2014 and 2015 said no. Plain stacks got worse past about 20 layers — and worse in **training** error, not just test error. That distinction is the entire lesson, because it rules out overfitting and rules out representation, and leaves exactly one culprit.

The fix is a single line of arithmetic added to each block, and it took networks from 20 layers to 1,000. It is also the structural idea that every transformer uses ([3.5](03-05-the-transformer-block.md)), so it is worth understanding as more than a vision trick.

## The idea

**The degradation problem.** Take a 20-layer network that works and make it 56 layers. Training error goes *up*.

This cannot be overfitting, because overfitting shows up as a train–test gap and the training error itself is worse. And it cannot be a representation failure, by a two-line argument: **the 56-layer network can compute exactly what the 20-layer one computes**, by setting the extra 36 layers to the identity. So a function achieving the shallower network's training error exists in the deeper network's parameter space, and gradient descent does not find it.

That leaves optimization. And the reason is visible in [1.3](01-03-backpropagation-and-automatic-differentiation.md)'s chain rule: the gradient reaching layer 1 is a **product** of every intervening layer's Jacobian. Products of many matrices are badly behaved — a little too small and the result vanishes, a little too large and it explodes — and normalization ([1.6](01-06-normalization.md)) controls the scale of each factor without changing the fact that there are 56 of them.

**The fix.** Have each block compute $y = x + F(x)$ rather than $y = F(x)$. The block learns a *residual*, a correction to its input, rather than a whole transformation.

Two things follow immediately. **The identity is now free**: a block that should do nothing sets $F = 0$, which is easy for gradient descent to find, whereas making a stack of weight layers compute the identity is not. And the derivative becomes

$$\frac{\partial y}{\partial x} = I + \frac{\partial F}{\partial x},$$

so the gradient has a route back that is multiplied by **exactly 1**. Across $L$ blocks the product expands into $2^{L}$ paths of every length, and the shortest one passes through no weight layers at all.

That is the whole mechanism, and it is why the fix is one line.

## The formal version

> **Residual block.** $y = x + F(x, \{W_i\})$, where $F$ is typically two or three convolutions with normalization and activations. When $F$ changes the shape — different channels or a stride — the skip path uses a $1\times1$ convolution to match, called a *projection shortcut*.

> **Gradient flow.** For a stack of $L$ residual blocks with $y_L$ the output and $y_0$ the input,
> $$\frac{\partial y_L}{\partial y_0} = \prod_{\ell=1}^{L}\left(I + \frac{\partial F_\ell}{\partial y_{\ell-1}}\right) = I + \sum_{\ell} \frac{\partial F_\ell}{\partial y_{\ell-1}} + \sum_{\ell < m}(\cdots) + \cdots$$

In words: expanding the product gives $2^{L}$ terms, one per subset of blocks. The term with **no** factors is the identity. So no matter how small the $\partial F$ are, the gradient reaching the input is at least $I$, and vanishing gradients in the [1.1](01-01-from-linear-models-to-the-mlp.md) sense cannot happen.

The contrast with a plain stack is exact:

$$\text{plain: } \prod_{\ell}\frac{\partial F_\ell}{\partial y_{\ell-1}} \qquad \text{residual: } \prod_{\ell}\left(I + \frac{\partial F_\ell}{\partial y_{\ell-1}}\right).$$

**A product of small things is smaller; a product of "one plus small things" is not.**

> **The unravelled view.** A residual network of $L$ blocks behaves like an ensemble of $2^{L}$ paths of varying depth. Empirically, deleting a single block from a trained residual network barely changes its output, while deleting a layer from a plain network destroys it.

This reframes what depth is doing. **A residual network is less a very deep network than a very large collection of shallow ones**, most of the effective paths being much shorter than $L$.

> **The bottleneck block.** For deeper networks, replace two $3\times3$ convolutions with $1\times1 \to 3\times3 \to 1\times1$, squeezing the channel count for the expensive middle layer ([2.1](02-01-the-convolution-operation.md)'s P2 prices this at a 4.8-fold saving).

> **Pre-activation ordering.** Putting normalization and activation *before* the weight layers inside $F$, so that the skip path is a pure identity with nothing on it, trains better at extreme depth. Anything placed on the identity path — a normalization, an activation — reintroduces a factor into the product and undoes part of the benefit.

This is the same argument that makes **pre-norm** transformers more stable than post-norm ones ([1.6](01-06-normalization.md)), and it is the single most portable lesson here: **keep the identity path clean.**

> **Residual stream variance.** Since $y = x + F(x)$ with roughly independent terms, variances add:
> $$\operatorname{Var}(y_L) \approx \operatorname{Var}(y_0) + \sum_{\ell=1}^{L}\operatorname{Var}(F_\ell).$$

So the activation scale grows **linearly in depth**, not exponentially — much gentler than the plain-stack behaviour of [1.5](01-05-adaptive-optimizers-schedules-and-initialization.md), but not nothing at $L = 100$. The standard fixes are to initialize the last normalization layer of each block with $\gamma = 0$, so every block starts as an exact identity, or to scale each branch by $1/\sqrt{L}$.

The architectures, for scale:

| Network | Depth | Parameters | Notes |
|---|---|---|---|
| VGG-19 | 19 | 144 M | plain stack, near the practical limit |
| ResNet-34 | 34 | 21 M | basic blocks |
| ResNet-50 | 50 | 26 M | bottleneck blocks |
| ResNet-152 | 152 | 60 M | still improving with depth |

**ResNet-152 has less than half of VGG-19's parameters and eight times the depth**, and it was the first architecture for which adding layers reliably helped rather than hurt.

## Picture

![Two block diagrams side by side. On the left, a plain block: weight, normalization and activation, weight, normalization, then activation, connected in a single vertical chain. On the right, the same four operations, but a thick line leaves the input before the first weight layer, runs down the side, and joins an addition node after the final normalization; the activation follows the addition. Captions state that the plain block's gradient is a product of four Jacobians while the residual block's derivative is the identity plus the branch derivative, so a route multiplied by exactly one always exists.](assets/02-03-fig1.svg)

The only difference between the two diagrams is the thick line. **That line is not a shortcut for the forward signal so much as a road for the backward one**: whatever the four operations in the branch do to the gradient, the identity path delivers an undiminished copy to the block's input.

Note where the final activation sits — *after* the addition, not inside the branch. Moving it before the addition would put a ReLU on the identity path, which zeroes half the gradient flowing through it and forfeits much of the benefit. These placement details are not stylistic.

## Worked examples

**Example 1 — reading the degradation experiment.**

A team trains plain convolutional networks of 20 and 56 layers on the same data and reports:

| Network | Training error | Test error |
|---|---|---|
| plain-20 | 8.5% | 9.5% |
| plain-56 | 11.2% | 12.8% |
| residual-20 | 8.2% | 9.1% |
| residual-56 | 5.9% | 7.5% |

*What the plain rows rule out.* The 56-layer network's **training** error is worse, so this is not overfitting — overfitting would show a low training error and a high test error. And it is not a capacity problem, since plain-56 contains plain-20 as a special case: set the extra 36 layers to the identity and it computes exactly the shallower function. A configuration with 8.5 percent training error demonstrably exists in plain-56's parameter space.

*So the diagnosis is optimization*: gradient descent cannot find it. This is the reasoning worth transplanting — **when a strictly larger model trains worse, the problem is the optimizer or the parameterization, never capacity.**

*What the residual rows show.* Same depth, same parameter count, one line changed, and 56 layers now beats 20 instead of losing to it. The architecture did not become more expressive; it became **searchable**.

**Example 2 — why the identity path must stay clean.**

Consider a stack of $L = 50$ blocks where each branch's Jacobian has spectral norm about $0.9$ — a mild attenuation, the kind normalization leaves behind.

*Plain stack.* The gradient reaching the input is scaled by

$$0.9^{50} = 5.2 \times 10^{-3},$$

a two-hundredfold attenuation. At $L = 100$ it is $2.7\times10^{-5}$, and at 200 layers it is $10^{-10}$ — gone.

*Residual stack.* The product is $\prod(I + \partial F_\ell)$, whose expansion contains the identity, so the gradient reaching the input is at least $1$ regardless of $L$. The attenuating factors add corrections rather than replacing the signal.

*Now put a normalization on the identity path*, so each block computes $y = \mathrm{Norm}(x + F(x))$ with the normalization's Jacobian having norm about $0.9$ as well. The identity term is no longer identity:

$$\prod_{\ell} 0.9\big(I + \partial F_\ell\big),$$

and the leading term is $0.9^{50}I = 5.2\times10^{-3}I$ — **the same exponential decay the residual connection was added to prevent**, reintroduced by one layer in the wrong place.

This is exactly why post-norm transformers need careful warmup and pre-norm ones do not, and why the original residual block's activation sits after the addition rather than before it. **Anything on the identity path multiplies into the product $L$ times.**

## Watch out

- You might think a deeper network that performs worse is overfitting. Check the *training* error first. If it is also worse, the problem is optimization and no amount of regularization helps — it makes things worse.
- You might think residual connections work by making the network shallower. They do not change the forward computation's depth at all. They change the *derivative* into a sum over paths, most of which are short, which is a statement about the optimization landscape rather than about the function.
- You might think the placement of normalization and activation around the skip is a style question. It is the mechanism: a normalization or activation on the identity path reintroduces a factor into the $L$-fold product, and the difference shows up as a network that will not train past 50 layers.

## One-liner

> A deeper plain network trains worse even though it can represent everything the shallower one can, and adding $x$ to the block's output fixes it by giving the gradient a path multiplied by exactly one.

## Problems

**P1 (🟢)** A residual block computes $y = x + F(x)$ where $F$ is two $3\times3$ convolutions on a $28\times28\times64$ feature map, each preserving shape. (a) Give the block's parameter count, ignoring normalization. (b) State what $F$ must output for the block to compute the identity, and why that is easier for gradient descent than making two convolutions compute the identity directly. (c) State what changes if the block also halves the spatial size and doubles the channels.

**P2 (🟡)** A 100-block residual network has branch Jacobians of spectral norm $\approx 0.95$ each. (a) Give the gradient attenuation for the equivalent plain stack. (b) State why the residual stack does not suffer it, referring to the expansion of the product. (c) The team adds a layer normalization *after* each addition, with Jacobian norm $0.98$. Give the new leading factor and say whether the network still trains at 100 blocks.

**P3 (🔴, optional)** A team builds a 200-block residual network in which each branch is initialized so that $\operatorname{Var}(F_\ell(x)) \approx \operatorname{Var}(x)$. (a) Using the variance-addition rule, give the activation variance at the output relative to the input. (b) State the consequence for the final layer and for numerical range. (c) Give two standard fixes and say which one makes every block start as an exact identity.

<details>
<summary>Solutions</summary>

**P1** (a) Two $3\times3$ convolutions with $C_{\text{in}} = C_{\text{out}} = 64$:

$$2\big(9 \times 64 \times 64 + 64\big) = 2(36{,}864 + 64) = 2 \times 36{,}928 = \mathbf{73{,}856}.$$

The skip path adds nothing, since it is a plain addition when the shapes match.

(b) For $y = x$ the branch must output $F(x) = \mathbf{0}$ — all weights zero will do it, and so will any configuration whose output happens to vanish.

Why that is easier: **zero is a single, reachable point that weight decay actively pulls toward, and gradient descent from a small random initialization starts near it.** Making two convolutions compute the identity directly is a much harder target: the composition $W_2\phi(W_1x)$ must equal $x$ for all $x$, which requires a specific, delicately balanced pair of matrices that a random initialization is nowhere near and that no regularizer pushes toward. The residual reparameterization moves the "do nothing" solution from an awkward point in weight space to the origin.

(c) With a stride-2 branch and 128 output channels, the shapes no longer match: $x$ is $28\times28\times64$ and $F(x)$ is $14\times14\times128$, so they cannot be added.

The skip path needs a **projection shortcut**: a $1\times1$ convolution with stride 2 and 128 output channels, costing $64 \times 128 + 128 = 8{,}320$ parameters. The branch's own cost also changes — the first convolution becomes $64 \to 128$ at stride 2 and the second $128 \to 128$ — giving $9(64)(128)+128 + 9(128)(128)+128 = 73{,}856 + 147{,}584 = 221{,}440$, plus the shortcut.

The important caveat: the projection is no longer an identity, so it contributes a Jacobian factor to the product. This is why downsampling blocks are placed sparingly — typically three or four times in a whole network — and why everything between them keeps a clean additive skip.

**P2** (a) A plain 100-layer stack multiplies 100 Jacobians:

$$0.95^{100} = 5.9 \times 10^{-3},$$

about a 170-fold attenuation. Not fatal on its own, but it compounds with everything else, and at 200 layers it is $3.5\times10^{-5}$.

(b) The residual product is $\prod_{\ell}(I + \partial F_\ell)$. Expanding it gives $2^{100}$ terms, one for each subset of blocks, and **the term corresponding to the empty subset is $I$** — the path that passes through no branch at all. So the gradient reaching the input contains an undiminished copy of the gradient at the output, plus corrections. The attenuating factors of $0.95$ appear only in the correction terms, where they make those terms smaller rather than making the whole thing smaller.

(c) With a normalization after each addition, the block computes $\mathrm{Norm}(x + F(x))$ and its Jacobian is $J_{\text{norm}}(I + \partial F)$. The product over 100 blocks has leading term

$$0.98^{100}\,I = 0.133\,I,$$

a factor of about **7.5 attenuation**.

**It still trains**, comfortably — 0.133 is a mild scaling that the optimizer and the learning rate absorb, nothing like $10^{-5}$. But the property that made residual networks work has been damaged rather than preserved: the identity path is now exponential in depth again, just with a base close to 1. At 500 blocks the same factor is $0.98^{500} = 4.1\times10^{-5}$ and the network is back where it started.

This is precisely the post-norm versus pre-norm distinction. Post-norm works at moderate depth with warmup; pre-norm, which keeps the identity path clean by moving the normalization inside the branch, works at any depth without it.

**P3** (a) Variances add along the residual stream:

$$\operatorname{Var}(y_L) \approx \operatorname{Var}(y_0) + \sum_{\ell=1}^{200}\operatorname{Var}(F_\ell) = \operatorname{Var}(y_0)(1 + 200) = \mathbf{201 \times \operatorname{Var}(y_0)}.$$

So the activation standard deviation grows by $\sqrt{201} \approx 14$ times from input to output. Note this is **linear in depth**, not exponential — far gentler than the plain-stack behaviour of [1.5](01-05-adaptive-optimizers-schedules-and-initialization.md), which is why residual networks tolerate a sloppy initialization at all.

(b) For the **final layer**, its input arrives with 14 times the scale its initialization assumed, so its output logits are correspondingly large, the softmax is saturated, and the initial loss is far from the $\ln K$ that a well-initialized classifier should show. Training starts by spending steps undoing this rather than learning.

For **numerical range**, a factor of 200 in variance is harmless in 32-bit float and starts to matter in 16-bit, where the representable range above 1 is limited; combined with any further growth during training this is a common source of overflow in low-precision residual networks.

(c) Two standard fixes:

- **Scale each branch by $1/\sqrt{L}$**, so the variance contributions sum to $\operatorname{Var}(y_0)(1 + L \cdot \tfrac1L) = 2\operatorname{Var}(y_0)$ regardless of depth. Clean and depth-independent.
- **Initialize the final normalization layer of each block with $\gamma = 0$** ("zero-init residual"), so $F_\ell$ outputs exactly zero at initialization.

**The second makes every block start as an exact identity.** At step zero the whole 200-block network computes $y = x$, so it is precisely equivalent to its own shallowest sub-network, and depth is added gradually as the $\gamma$ values move off zero. This is the more common choice in practice because it also solves (b) — the initial forward pass has the input's variance exactly, so the classifier head sees what it was initialized for — and because it makes the "a deeper network should be at least as good as a shallower one" argument true *at initialization* rather than only in principle.

</details>

## Flashback

**From Lesson 1.6 (normalization):** A residual block is written as $y = \mathrm{BatchNorm}(x + F(x))$, with the normalization applied to the sum. (a) State which of this lesson's design rules this violates. (b) Give the effect on the gradient product over $L$ blocks. (c) State the corrected ordering and name the transformer convention that follows the same rule.

<details>
<summary>Solution</summary>

(a) It violates **keep the identity path clean**. The normalization is applied *after* the addition, so it sits on the route that the skip connection was supposed to leave untouched — the whole block's output, identity contribution included, passes through it.

(b) The block's Jacobian is $J_{\text{BN}}\big(I + \partial F\big)$ rather than $I + \partial F$. Over $L$ blocks the product is

$$\prod_{\ell=1}^{L} J_{\text{BN},\ell}\left(I + \frac{\partial F_\ell}{\partial y_{\ell-1}}\right),$$

whose leading term is $\prod_\ell J_{\text{BN},\ell}$ rather than $I$. **The identity term has been replaced by a product of $L$ normalization Jacobians**, which is exponential in depth with whatever base those Jacobians have. If each has norm $c$, the clean gradient route is scaled by $c^{L}$ — precisely the failure mode residual connections exist to remove, reintroduced by placement.

In practice batch norm's Jacobian is close to but not exactly norm-preserving, so the effect is mild at 20 blocks and decisive at 200. This is why post-norm architectures need learning-rate warmup: early in training the product is at its worst behaved, and warmup buys time for the normalizations to settle.

(c) The corrected ordering is **pre-activation**: put the normalization and activation *inside* the branch, before the weight layers, so the block is

$$y = x + F(x), \qquad F(x) = W_2\,\phi\big(\mathrm{Norm}(W_1\,\phi(\mathrm{Norm}(x)))\big),$$

and the path from $x$ to $y$ through the skip is a bare addition with nothing on it.

The transformer convention that follows the same rule is **pre-norm**: each sublayer computes $x + \mathrm{Sublayer}(\mathrm{LayerNorm}(x))$ rather than $\mathrm{LayerNorm}(x + \mathrm{Sublayer}(x))$ ([3.5](03-05-the-transformer-block.md)). The original transformer was post-norm and required careful warmup; essentially every large model since is pre-norm, for exactly the reason computed in (b).

</details>

## Connections

- **Backward:** the degradation problem is [1.3](01-03-backpropagation-and-automatic-differentiation.md)'s chain rule as a product of many factors, and the reason normalization ([1.6](01-06-normalization.md)) does not solve it is that controlling each factor's scale does not reduce how many factors there are; the identity-argument for why it is not a capacity problem uses [1.2](01-02-universal-approximation.md)'s representation framing.
- **Forward:** [2.4](02-04-transfer-learning-and-fine-tuning.md) fine-tunes networks that exist only because of this fix; [3.5](03-05-the-transformer-block.md) builds every transformer sublayer as a residual block and inherits both the mechanism and the pre-norm placement rule.
- **Sideways:** "a strictly larger model that trains worse indicts the optimizer, not the capacity" is the same reasoning discipline as [`machine-learning` 4.3](../../machine-learning/lessons/04-03-diagnosing-models-in-practice.md)'s train-versus-test diagnosis; the unravelled-ensemble view connects to the averaging argument behind bagging in [`machine-learning` 2.6](../../machine-learning/lessons/02-06-bagging-and-random-forests.md).
