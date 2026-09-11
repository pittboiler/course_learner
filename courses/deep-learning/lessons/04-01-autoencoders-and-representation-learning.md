# Deep Learning · Lesson 4.1: Autoencoders & representation learning

> ⏱ ~15 min · Module 4: Generative models & modern practice · Builds on: [1.1 (from linear models to the MLP)](01-01-from-linear-models-to-the-mlp.md), [`statistical-learning` 6.1 (principal component analysis)](../../statistical-learning/lessons/06-01-principal-component-analysis.md) · Unlocks: [4.2 (variational autoencoders)](04-02-variational-autoencoders.md)

## Why this matters

Every model so far has been *discriminative*: given $x$, predict $y$. This module turns to the other half — modelling the data itself, learning what $x$ looks like without being told what it means.

The simplest version is an **autoencoder**: compress $x$ through a narrow bottleneck and reconstruct it. Nothing is labelled, the target is the input, and whatever survives the squeeze is by construction the structure the data actually has.

The reason to start here is that it is the smallest complete example of the module's idea, and the reason not to stop here is that a plain autoencoder is a mediocre representation learner. Understanding precisely why is the useful part, and it points directly at the variational version ([4.2](04-02-variational-autoencoders.md)) and at the self-supervised objectives that actually work ([4.5](04-05-llms-self-supervision-and-scaling-laws.md)).

One thing is settled before we start. [`statistical-learning` 6.1](../../statistical-learning/lessons/06-01-principal-component-analysis.md) proves that a **linear** autoencoder trained on squared error computes exactly PCA — same subspace, same minimal error, by Eckart–Young. That result is not repeated. What this lesson is about is what dropping the linearity buys.

## The idea

Two networks back to back. The **encoder** maps $x$ to a code $z$ of lower dimension; the **decoder** maps $z$ back to $\hat x$. Train to minimise $\|x - \hat x\|^{2}$.

If the code is narrower than the input, the network **cannot** simply copy — information must be discarded, and the only way to reconstruct well is to discard the parts that are predictable from the rest. That is the whole mechanism: **the bottleneck is a capacity constraint that forces the model to find structure.**

Now, what does nonlinearity add? Consider data lying on a curve in the plane. It is genuinely one-dimensional — one number, the position along the curve, determines each point. A linear encoder must project onto a straight line, and no line fits a curve, so it loses the curvature and, worse, maps distant points on the curve to nearby points on the line. A nonlinear encoder can use arc length as its coordinate and lose nothing.

**Real data is like the curve, not like the line.** Images of a rotating object trace a curved, low-dimensional manifold in pixel space; so do images of faces, or of handwritten digits. That is the manifold hypothesis, and a nonlinear autoencoder is the direct attempt to exploit it.

Now the problem. **Reconstruction is the wrong objective for representation learning.** A code that reconstructs well has kept whatever has the most pixel variance — lighting, background, position — which is rarely what you care about. And if the bottleneck is wide enough, the network can learn something close to the identity and reconstruct beautifully while learning nothing.

The repairs all work by making the task harder in a way that rewards structure: corrupt the input and ask for the clean version (**denoising**), penalise the code for being active (**sparse**), penalise the encoder for being sensitive (**contractive**). Each is a statement about what kind of structure you want.

## The formal version

> **Autoencoder.** Encoder $f_\theta : \mathbb{R}^{d}\to\mathbb{R}^{k}$, decoder $g_\phi : \mathbb{R}^{k}\to\mathbb{R}^{d}$, objective
> $$\min_{\theta,\phi}\ \frac{1}{n}\sum_{i=1}^{n}\big\|x_i - g_\phi(f_\theta(x_i))\big\|^{2}.$$
> The autoencoder is **undercomplete** when $k < d$ and **overcomplete** when $k \ge d$.

> **The linear case.** With $f(x) = W_1 x$, $g(z) = W_2 z$ and squared error, the optimum spans the top-$k$ principal subspace and achieves error $\sum_{j>k}\lambda_j$. Proved in [`statistical-learning` 6.1](../../statistical-learning/lessons/06-01-principal-component-analysis.md).

Two consequences worth carrying. **Stacking more linear layers changes nothing**, since the composite is still a rank-$k$ linear map — [1.1](01-01-from-linear-models-to-the-mlp.md)'s point about nonlinearity being the whole source of expressiveness, in a new setting. And **the factorisation is not identified**: for any invertible $M$, the pair $(W_2M, M^{-1}W_1)$ gives the same map, so the individual hidden units carry no meaning and are not the principal components.

> **The identity trap.** If $k \ge d$ and the encoder and decoder are unconstrained, the global optimum is the identity map with zero reconstruction error and a useless code.

So an overcomplete autoencoder needs a different constraint — sparsity, noise, or a weight penalty — because the bottleneck is no longer doing the work.

> **Denoising autoencoder.** Corrupt the input, reconstruct the clean one:
> $$\tilde x \sim q(\tilde x \mid x), \qquad \min_{\theta,\phi}\ \mathbb{E}\big\|x - g_\phi(f_\theta(\tilde x))\big\|^{2}.$$

Typical corruptions: Gaussian noise, randomly zeroing a fraction of the inputs, or masking a contiguous patch. **This is the most useful variant**, because copying is no longer available — the model must infer the missing parts from the present ones, which requires knowing how the parts relate.

It is also the direct ancestor of the objectives that work at scale: masking tokens and predicting them ([3.6](03-06-full-transformer-architectures.md)) is a denoising autoencoder over text, and masked image modelling is one over images.

> **Sparse autoencoder.** Add a penalty on the code's activity, $\lambda\|z\|_1$ or a KL penalty pushing each unit's mean activation to a small target.

> **Contractive autoencoder.** Penalise the encoder's Jacobian, $\lambda\|\partial f/\partial x\|_F^{2}$, so the code is insensitive to directions the data does not vary in.

> **Measuring a representation.** Train a linear classifier on the frozen code — a **linear probe** ([2.4](02-04-transfer-learning-and-fine-tuning.md)) — and report its accuracy. Reconstruction error is *not* a measure of representation quality, and the two are frequently anti-correlated.

That last point deserves emphasis. **A perfect reconstruction implies a perfect representation only in the trivial sense that the code contains everything** — including the noise. What you want is a code that has discarded the right things, and the only way to check is to test it on a downstream task.

| Variant | Constraint | What it encourages |
|---|---|---|
| Undercomplete | $k < d$ | keep only what reconstructs best |
| Denoising | corrupted input | model the relationships between parts |
| Sparse | penalty on $\|z\|$ | few active units, more interpretable |
| Contractive | penalty on $\partial f/\partial x$ | insensitivity off the data manifold |

> **What is missing.** An autoencoder gives no way to *generate*. The decoder maps codes to data, but nothing says which codes are valid — pick a random $z$ and the output is usually garbage, because the encoder was never asked to make the code distribution anything in particular.

That gap is exactly what [4.2](04-02-variational-autoencoders.md) fills, by adding a term that forces the code distribution to match a prior you can sample from.

## Picture

![A plot of twelve data points lying along a dashed arc that curves from lower left to lower right through an upper middle. A solid horizontal line through the data's mean represents the best one-dimensional linear code, with short dashed segments showing each point's projection onto it. Annotations note that the linear code discards the curvature, eleven percent of the variance, and that points far apart along the curve land near each other on the line. A side panel explains that the bottleneck forces the network to find structure, that a linear encoder with squared error is exactly PCA, and that everything a deep autoencoder adds comes from dropping the linearity.](assets/04-01-fig1.svg)

The arc is genuinely one-dimensional — one number describes each point exactly. So a one-dimensional code should reconstruct perfectly, and the linear one does not: it keeps 89 percent of the variance and discards the rest as error.

The subtler failure is the one that matters for representation. Look at the two ends of the arc: they are far apart along the curve and project to nearby points on the line. **A linear code destroys the data's own notion of distance**, so a classifier built on it has to separate things the code has already merged. A nonlinear encoder that uses arc length keeps them maximally far apart, which is what makes the code useful downstream rather than merely compact.

## Worked examples

**Example 1 — pricing an autoencoder, and the identity trap.**

MNIST images are $28\times28 = 784$ pixels. Take an encoder $784 \to 256 \to 32$ and a symmetric decoder $32 \to 256 \to 784$.

*Parameters:*

$$\underbrace{784(256)+256}_{200{,}960} + \underbrace{256(32)+32}_{8{,}224} + \underbrace{32(256)+256}_{8{,}448} + \underbrace{256(784)+784}_{201{,}488} = 419{,}120.$$

The code is 32 numbers for 784 pixels, a compression of 24.5 times.

*Now make it overcomplete:* $784 \to 1024 \to 784$, with no constraint. The global optimum is the identity — the encoder can learn $W_1$ with a left inverse and the decoder that inverse, giving **exactly zero reconstruction error and a code that is a linear relabelling of the input.** The model has learned nothing, and its reconstruction metric is perfect.

This is the clearest case of a general hazard: **an objective that can be satisfied by copying will be satisfied by copying.** The fixes are all ways of removing that option — narrow the bottleneck, corrupt the input, or penalise the code.

*What a reasonable $k$ is.* Not a free choice. Too small and genuine structure is lost; too large and the identity trap opens. For MNIST, linear PCA needs about 150 components for 95 percent of the variance, and a nonlinear autoencoder typically reconstructs comparably at $k = 32$ — which is itself a measurement of how much the nonlinearity is worth.

**Example 2 — why reconstruction error misleads, with two models.**

Two autoencoders on the same image dataset:

| Model | Reconstruction MSE | Linear-probe accuracy on the code |
|---|---|---|
| A: wide bottleneck, plain | 0.004 | 61% |
| B: narrow bottleneck, denoising | 0.019 | 84% |

Model A reconstructs almost five times better and its representation is far worse.

*Why.* Reconstruction error is dominated by whatever has the most pixel variance — overall brightness, background colour, the exact position of an object. Model A's wide code spends its capacity on those, because that is what the loss rewards, and they are precisely the nuisance factors a classifier wants removed.

Model B cannot keep them: the bottleneck is narrow, and the denoising task forces it to model how parts of the image *relate* rather than to memorise their values. What survives is object-level structure, which is what a linear probe can use.

**The general lesson is about proxy objectives.** Reconstruction is a proxy for "understanding the data", and like every proxy it can be optimised in ways that do not deliver the thing it stands for. This is why representation quality is measured downstream and never by the training loss — and why the field moved from reconstruction to objectives like contrastive learning and masked prediction, which are *designed* so that solving them requires the structure you want.

A caution on reading such tables: the comparison confounds two changes at once, bottleneck width and the denoising objective. The honest version runs both variants at both widths, and when people do, the denoising objective accounts for most of the gain.

## Watch out

- You might think low reconstruction error means a good representation. It frequently means the opposite: the code has kept high-variance nuisance factors because that is what the loss rewards. Measure with a linear probe on a downstream task.
- You might think stacking more layers makes a linear autoencoder more powerful. It does not — the composite of linear maps is linear, so a ten-layer linear autoencoder is still PCA. The nonlinearity is the entire source of the improvement.
- You might think an autoencoder is a generative model. It is not: it can reconstruct codes the encoder produced, and it says nothing about which codes are valid. Sampling $z$ at random usually decodes to noise, which is the specific gap [4.2](04-02-variational-autoencoders.md) closes.

## One-liner

> Squeeze the data through a bottleneck and reconstruct it, and what survives is structure — but reconstruction rewards keeping whatever has the most variance, which is usually not what you wanted.

## Problems

**P1 (🟢)** An autoencoder for $64\times64$ colour images uses an encoder $12288 \to 512 \to 64$ and a symmetric decoder. (a) Give the total parameter count. (b) Give the compression ratio of the code. (c) State what changes if the code is widened to 16,384 with no other constraint.

**P2 (🟡)** A team's autoencoder achieves near-zero reconstruction error, and the codes are useless for classification. (a) Give the two most likely causes. (b) Give a diagnostic that distinguishes them. (c) Give the fix for each.

**P3 (🔴, optional)** Data lies exactly on a one-dimensional curve embedded in $\mathbb{R}^{2}$, specifically a semicircle of radius 1. (a) State the minimum code dimension for a *nonlinear* autoencoder to reconstruct exactly, and give the code it would use. (b) State the minimum for a linear one and the error at $k=1$, given eigenvalues $\lambda_1 = 0.401$ and $\lambda_2 = 0.049$. (c) State what this implies about choosing $k$ from a PCA scree plot when the data is curved.

<details>
<summary>Solutions</summary>

**P1** (a) A $64\times64$ colour image is $64\times64\times3 = 12{,}288$ values.

| Layer | Parameters |
|---|---|
| $12288 \to 512$ | $12288(512)+512 = 6{,}291{,}968$ |
| $512 \to 64$ | $512(64)+64 = 32{,}832$ |
| $64 \to 512$ | $64(512)+512 = 33{,}280$ |
| $512 \to 12288$ | $512(12288)+12288 = 6{,}303{,}744$ |
| **Total** | **12,661,824** |

Note where the parameters are: the two layers touching the image hold 99.5 percent of them, which is [1.1](01-01-from-linear-models-to-the-mlp.md)'s observation that the layer nearest a wide input dominates — and the reason a convolutional encoder ([2.1](02-01-the-convolution-operation.md)) is used for images in practice.

(b) $12{,}288 / 64 = \mathbf{192\times}$ compression.

(c) With $k = 16{,}384 > d = 12{,}288$ and no constraint, the autoencoder is **overcomplete** and its optimum is the identity: reconstruction error goes to zero and the code carries no more information than the input, arranged differently. **The reconstruction metric improves and the model becomes useless**, which is the identity trap.

To use a code that wide you must add a constraint that copying violates — sparsity, input corruption, or a contractive penalty.

**P2** (a) Two likely causes:

- **The identity trap.** The bottleneck is wide enough (or the encoder–decoder expressive enough) that the model has learned something close to a copy. Near-zero error is the signature.
- **The code has kept the wrong things.** Even with a genuine bottleneck, reconstruction rewards retaining high-variance nuisance factors — brightness, background, position — so the code is informative about the image and uninformative about its content.

(b) A diagnostic that distinguishes them: **compare the code dimension $k$ against the intrinsic dimension of the data, and check whether reconstruction error rises when you shrink $k$.**

If halving $k$ leaves reconstruction error essentially unchanged, the code was carrying redundant capacity and the first cause applies. If halving $k$ raises the error sharply while the probe accuracy stays flat or improves, the bottleneck was already binding and the second cause applies — the model is spending a genuinely scarce code on the wrong features.

A second, sharper diagnostic: **train a linear probe to predict a known nuisance factor** — average brightness, say — from the code. If it succeeds easily, the code is dominated by nuisance variance, which is the second cause directly measured.

(c) Fixes:

- **For the identity trap:** narrow the bottleneck until reconstruction error becomes non-trivial, or keep the width and add a constraint copying cannot satisfy — sparsity on $z$, or a contractive penalty.
- **For the wrong-things problem:** change the objective. **Denoising** is the first thing to try: corrupt the input and reconstruct the clean version, which makes copying unavailable and forces the model to represent relationships between parts. Beyond that, abandon reconstruction — contrastive objectives that pull together two augmentations of the same image, or masked prediction, are designed so that solving them requires semantic structure, and they dominate reconstruction-based methods empirically.

The general principle is worth stating: **if the code is wrong, changing the architecture rarely helps and changing the objective usually does.**

**P3** (a) The minimum nonlinear code dimension is **1**. The semicircle is a one-dimensional manifold, so a single number determines each point exactly — the natural code is the **angle $\theta$** (equivalently, arc length), with the decoder $g(\theta) = (\cos\theta, \sin\theta)$.

Both the encoder $x \mapsto \arctan(x_2/x_1)$ and the decoder are smooth nonlinear functions that a network can approximate to any accuracy ([1.2](01-02-universal-approximation.md)), so the reconstruction error can be driven arbitrarily close to zero at $k=1$.

(b) A linear autoencoder at $k=1$ projects onto a line and achieves error $\lambda_2 = \mathbf{0.049}$ — the discarded eigenvalue. To reconstruct **exactly** it needs $k = 2$, which is the full dimension of the ambient space and therefore no compression at all.

As a fraction, the $k=1$ linear code keeps

$$\frac{\lambda_1}{\lambda_1+\lambda_2} = \frac{0.401}{0.450} = 89.1\%$$

of the variance, and loses 10.9 percent that a one-dimensional nonlinear code would not lose at all.

(c) The implication is that **a scree plot measures linear dimension, not intrinsic dimension, and the two differ whenever the data is curved.**

Here the scree plot shows two non-negligible eigenvalues and would be read as "the data is two-dimensional, or at best one-dimensional with 11 percent error". The truth is that it is exactly one-dimensional. The gap is entirely an artefact of insisting on a linear code.

For strongly curved data the gap can be enormous: points on a circle in $\mathbb{R}^{2}$ have equal eigenvalues, so a scree plot reports dimension 2 with no dominant direction, while the intrinsic dimension is 1. A helix in $\mathbb{R}^{3}$ has three comparable eigenvalues and intrinsic dimension 1.

Practical reading: **use the scree plot to choose $k$ for PCA, and do not use it to decide how many dimensions the data has.** For the latter, use a nonlinear estimate — a correlation-dimension or nearest-neighbour method — or simply train autoencoders at several $k$ and find where the reconstruction error's knee falls.

</details>

## Flashback

**From Lesson 2.4 (transfer learning and fine-tuning):** Two ways to obtain a reusable image representation: train an autoencoder on unlabelled images, or take a supervised classifier trained on a labelled dataset and use its penultimate layer. (a) State the main advantage of each. (b) State which produces better features for a downstream classification task, and why. (c) Name the family of objectives that closed the gap and say what they optimise instead of reconstruction.

<details>
<summary>Solution</summary>

(a) **The autoencoder needs no labels**, so it can use any quantity of raw data — which is by far the larger advantage in domains where labelling is expensive, such as medical imaging or satellite data.

**The supervised classifier's features are shaped by a task**, so they have already been forced to discard whatever does not help distinguish classes. That is exactly the filtering an autoencoder has no reason to perform.

(b) **The supervised classifier's features are better**, usually by a wide margin, and the reason is the one this lesson is about: **reconstruction rewards keeping high-variance nuisance factors** — lighting, pose, background — while classification actively penalises keeping them, since they do not help the label. The supervised objective supplies the information about *what to throw away* that reconstruction cannot.

Historically this was decisive. Autoencoder pretraining was standard around 2006 to 2010 and was abandoned once large labelled datasets made supervised pretraining possible, because supervised features simply transferred better ([2.4](02-04-transfer-learning-and-fine-tuning.md)).

(c) The family that closed the gap is **self-supervised learning**, and it works by inventing a task whose solution requires the structure you want, without labels.

Two branches:

- **Contrastive methods** optimise *agreement between two views of the same example* against disagreement with other examples. Two augmentations of one image — a crop, a colour shift — must produce nearby codes, while different images must not. Because the augmentations deliberately destroy nuisance factors such as colour and position, a code that succeeds must be invariant to them. **The augmentation set is where the "what to discard" information enters**, replacing the label.
- **Masked prediction** hides part of the input and predicts it from the rest — a denoising autoencoder, scaled up and applied to tokens or image patches. This is what trains language models ([3.6](03-06-full-transformer-architectures.md), [4.5](04-05-llms-self-supervision-and-scaling-laws.md)), and its success is the strongest evidence for the framing: the objective is still reconstruction, but of a part that can only be recovered by understanding the whole.

Both now match or exceed supervised pretraining while using unlabelled data, which is why the pretrain-then-adapt pattern of [2.4](02-04-transfer-learning-and-fine-tuning.md) has become the default across every modality.

</details>

## Connections

- **Backward:** the linear case is [`statistical-learning` 6.1](../../statistical-learning/lessons/06-01-principal-component-analysis.md)'s PCA equivalence, and the reason depth helps is [1.1](01-01-from-linear-models-to-the-mlp.md)'s point that only the nonlinearity adds expressiveness; the linear probe used to measure a code is [2.4](02-04-transfer-learning-and-fine-tuning.md)'s feature-extraction setup.
- **Forward:** [4.2](04-02-variational-autoencoders.md) adds a term that makes the code distribution samplable, turning this into a generative model; [4.5](04-05-llms-self-supervision-and-scaling-laws.md) is the denoising idea at scale, where predicting a masked part of the input from the rest is the objective that trains every large model.
- **Sideways:** the manifold hypothesis is the geometric counterpart to the curse of dimensionality in [1.2](01-02-universal-approximation.md) — data does not fill its ambient space, which is why learning in high dimensions is possible at all; and the clustering and mixture models of [`machine-learning` 3.3](../../machine-learning/lessons/03-03-k-means-clustering.md) are the same unsupervised-structure question with a discrete answer instead of a continuous one.
