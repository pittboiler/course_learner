# Deep Learning · Lesson 4.2: Variational autoencoders

> ⏱ ~15 min · Module 4: Generative models & modern practice · Builds on: [4.1 (autoencoders and representation learning)](04-01-autoencoders-and-representation-learning.md), [`machine-learning` 3.6 (the EM algorithm)](../../machine-learning/lessons/03-06-the-em-algorithm.md) · Unlocks: [4.3 (generative adversarial networks)](04-03-generative-adversarial-networks.md)

## Why this matters

[4.1](04-01-autoencoders-and-representation-learning.md) ended with a gap. An autoencoder's decoder maps codes to data, but nothing says which codes are valid, so sampling $z$ at random produces garbage. The model compresses; it does not generate.

The variational autoencoder closes that gap with one addition: a term that forces the distribution of codes to match a prior you can sample from. Draw $z \sim \mathcal{N}(0,I)$, push it through the decoder, and get a plausible image.

Getting there requires two pieces of machinery that are worth knowing well beyond this lesson. The **evidence lower bound** is the standard way to train any latent-variable model whose likelihood you cannot compute, and it is the same object that underlies EM ([`machine-learning` 3.6](../../machine-learning/lessons/03-06-the-em-algorithm.md)). The **reparameterization trick** is how you backpropagate through a random sample, and it appears anywhere a model has to make a stochastic choice.

## The idea

Model the data as generated in two steps: draw a latent $z$ from a simple prior, then draw $x$ from a decoder $p_\theta(x \mid z)$. The likelihood of an observed $x$ is

$$p_\theta(x) = \int p_\theta(x\mid z)\,p(z)\,dz,$$

an integral over every possible $z$. **It is intractable** — the decoder is a neural network, and there is no closed form.

The fix is to introduce an **encoder** $q_\phi(z\mid x)$ that guesses which $z$ produced this $x$, and to optimise a lower bound on $\log p_\theta(x)$ instead of the thing itself. That bound is the ELBO, and it decomposes into two terms with clean readings:

$$\mathcal{L} = \underbrace{\mathbb{E}_{q}\big[\log p_\theta(x\mid z)\big]}_{\text{reconstruction}} \;-\; \underbrace{D_{\mathrm{KL}}\big(q_\phi(z\mid x)\,\|\,p(z)\big)}_{\text{regularizer}}.$$

**Reconstruct well, and keep your codes near the prior.** The first term is [4.1](04-01-autoencoders-and-representation-learning.md)'s objective; the second is the entire difference, and it is what makes the latent space samplable. Without it the encoder would scatter codes wherever it liked and the prior would be irrelevant.

Now the obstacle. Computing that expectation means sampling $z \sim q_\phi(z\mid x)$, and **you cannot differentiate through a sampling operation.** The gradient needs to reach $\phi$, and the sample sits in the way.

The **reparameterization trick** removes it. Instead of drawing $z$ from a distribution whose parameters you are optimising, draw a parameter-free $\epsilon \sim \mathcal{N}(0,I)$ and compute

$$z = \mu_\phi(x) + \sigma_\phi(x)\odot\epsilon.$$

The sample is exactly as random as before, but $z$ is now a **deterministic, differentiable function** of $\mu$, $\sigma$ and an input $\epsilon$ that carries no parameters. The randomness has been moved off the gradient's path.

## The formal version

> **The model.** $p(z) = \mathcal{N}(0, I)$ and $p_\theta(x\mid z)$ a decoder network. The encoder is $q_\phi(z\mid x) = \mathcal{N}\big(\mu_\phi(x),\ \operatorname{diag}(\sigma_\phi^{2}(x))\big)$.

> **The ELBO.** For any $q$,
> $$\log p_\theta(x) = \underbrace{\mathbb{E}_{q}\!\left[\log\frac{p_\theta(x,z)}{q_\phi(z\mid x)}\right]}_{\mathcal{L}(\theta,\phi;x)} \;+\; D_{\mathrm{KL}}\big(q_\phi(z\mid x)\,\|\,p_\theta(z\mid x)\big).$$

*Derivation.* Start from the identity $\log p_\theta(x) = \mathbb{E}_q[\log p_\theta(x)]$, since $\log p_\theta(x)$ does not depend on $z$. Then

$$\log p_\theta(x) = \mathbb{E}_q\!\left[\log \frac{p_\theta(x,z)}{p_\theta(z\mid x)}\right] = \mathbb{E}_q\!\left[\log\frac{p_\theta(x,z)}{q_\phi(z\mid x)}\right] + \mathbb{E}_q\!\left[\log\frac{q_\phi(z\mid x)}{p_\theta(z\mid x)}\right],$$

where the second term is the KL divergence by definition.

**Since KL is non-negative, $\mathcal{L} \le \log p_\theta(x)$** — hence "lower bound" — and the gap is exactly how wrong the encoder's guess is about the true posterior. Maximising $\mathcal{L}$ therefore does two jobs at once: it pushes up the likelihood and it pushes the encoder toward the true posterior.

> **The useful form.** Splitting $p_\theta(x,z) = p_\theta(x\mid z)p(z)$,
> $$\mathcal{L} = \mathbb{E}_{q}\big[\log p_\theta(x\mid z)\big] - D_{\mathrm{KL}}\big(q_\phi(z\mid x)\,\|\,p(z)\big).$$

> **Closed-form KL for diagonal Gaussians.** For $q = \mathcal{N}(\mu, \operatorname{diag}(\sigma^{2}))$ and $p = \mathcal{N}(0,I)$ in $k$ dimensions,
> $$D_{\mathrm{KL}}(q\,\|\,p) = \frac{1}{2}\sum_{j=1}^{k}\Big(\mu_j^{2} + \sigma_j^{2} - 1 - \log\sigma_j^{2}\Big).$$

**This is why the Gaussian choice is made**: the regularizer has a formula, so only the reconstruction term needs sampling.

*It is minimised at $\mu = 0$, $\sigma = 1$.* Take one dimension and write $f(\mu,\sigma) = \tfrac12(\mu^{2}+\sigma^{2}-1-2\log\sigma)$. Then $\partial f/\partial\mu = \mu$, zero only at $\mu = 0$; and $\partial f/\partial\sigma = \sigma - 1/\sigma$, zero only at $\sigma = 1$ for $\sigma > 0$. The second derivatives are $1$ and $1 + 1/\sigma^{2} > 0$, so it is a minimum, and its value is $\tfrac12(0 + 1 - 1 - 0) = 0$.

| $\mu$ | $\sigma$ | KL |
|---|---|---|
| 0 | 1 | 0 |
| 1 | 1 | 0.500 |
| 0 | 0.5 | 0.318 |
| 0 | 2 | 0.807 |
| 2 | 0.5 | 2.318 |

> **Reparameterization.** Replace $z \sim \mathcal{N}(\mu,\operatorname{diag}(\sigma^{2}))$ by
> $$z = \mu + \sigma \odot \epsilon, \qquad \epsilon \sim \mathcal{N}(0, I),$$
> which has the same distribution and gives $\partial z/\partial\mu = 1$ and $\partial z/\partial\sigma = \epsilon$, both exact.

The alternative — the score-function or REINFORCE estimator — is unbiased but has variance so high that training is impractical for continuous latents. **The reparameterized gradient is low-variance because it differentiates the function rather than reweighting samples**, and that difference is what makes VAEs trainable at all.

> **Posterior collapse.** If the decoder is powerful enough to model $x$ without using $z$, the optimiser can drive $q_\phi(z\mid x) \to p(z)$, making the KL term zero and the latent uninformative.

The model then reconstructs from the decoder alone, the latent carries nothing, and the representation is worthless. Standard mitigations: **KL annealing**, ramping the KL term's weight from 0 during early training; **free bits**, which stop penalising KL below a floor per dimension; and weakening the decoder so it cannot succeed alone.

> **Why samples are blurry.** With a Gaussian likelihood the reconstruction term is a squared error, whose optimum under uncertainty is the **mean** of the plausible outputs. Averaging several sharp possibilities gives a blurry one.

This is a property of the objective, not of the architecture. It is also precisely the weakness [4.3](04-03-generative-adversarial-networks.md) attacks with a different loss.

> **Relation to EM.** [`machine-learning` 3.6](../../machine-learning/lessons/03-06-the-em-algorithm.md)'s EM alternates between setting $q$ to the exact posterior (E step) and maximising over $\theta$ (M step). A VAE does the same two jobs, except that the posterior is **approximated by a network** rather than computed exactly, and both steps are done by gradient descent simultaneously. **A VAE is amortised, approximate EM.**

## Picture

![Two rows of a computational graph. In the upper row, the input passes through an encoder producing mu and sigma, then into a circled stochastic node where z is drawn from the approximate posterior, then into the decoder; a cross marks the stochastic node with the note that the gradient stops there because one cannot differentiate through drawing a sample. In the lower row, the same encoder produces mu and sigma, and a separate arrow brings epsilon drawn from a standard normal into a box computing z as mu plus sigma times epsilon, which then feeds the decoder. Annotations give the two exact derivatives and note that the sample is still random but the randomness enters from outside the computation.](assets/04-02-fig1.svg)

The two rows draw the same distribution over $z$. **What differs is where the randomness enters.**

In the upper row it enters at a node on the path from the encoder to the loss, and a node that draws a sample has no derivative with respect to the distribution's parameters — there is nothing to differentiate. In the lower row it enters as an **input**, alongside $x$, and everything on the path from $\mu$ and $\sigma$ to the loss is ordinary arithmetic that [1.3](01-03-backpropagation-and-automatic-differentiation.md)'s machinery handles without modification.

The move generalises. Whenever a model must sample from a distribution it controls, ask whether the sample can be written as a deterministic function of the parameters and a parameter-free noise source. For Gaussians it can, trivially. For discrete distributions it cannot exactly, which is why discrete latent variables remain harder and need their own approximations.

## Worked examples

**Example 1 — computing the KL term.**

A two-dimensional latent, with the encoder outputting $\mu = (0.5, -1.0)$ and $\sigma = (1.2, 0.4)$ for some input.

Dimension 1: $\tfrac12\big(0.25 + 1.44 - 1 - \log 1.44\big) = \tfrac12(0.69 - 0.3646) = \tfrac12(0.3254) = 0.1627$.

Dimension 2: $\tfrac12\big(1.0 + 0.16 - 1 - \log 0.16\big) = \tfrac12(0.16 + 1.8326) = \tfrac12(1.9926) = 0.9963$.

$$D_{\mathrm{KL}} = 0.1627 + 0.9963 = 1.159 \text{ nats}.$$

Read the two dimensions. The first is barely penalised — its mean is near 0 and its width near 1. The second is penalised nearly six times as hard, and for two separate reasons: **the mean is off-centre** ($\mu^{2} = 1$) and **the distribution is too narrow** ($-\log\sigma^{2} = 1.83$).

That second penalty is the interesting one. A narrow $q$ is a *confident* encoder, and the KL term punishes confidence — it wants the codes for different inputs to overlap. That overlap is exactly what makes the latent space continuous, so that a point between two training images decodes to something between them, and it is why VAEs interpolate smoothly where plain autoencoders do not.

**Example 2 — why you cannot differentiate through a sample, and what the trick does.**

Suppose the loss depends on $z \sim \mathcal{N}(\mu, \sigma^{2})$ and you want $\partial \mathcal{L}/\partial\mu$.

*The naive attempt.* $z$ is produced by a random number generator given $\mu$ and $\sigma$. Ask for $\partial z/\partial\mu$ and there is no answer: $z$ is not a function of $\mu$ at all, it is a draw whose *distribution* depends on $\mu$. An autodiff system reaches the sampling node and has no rule to apply ([1.3](01-03-backpropagation-and-automatic-differentiation.md) needs a local derivative at every node).

*The trick.* Write $z = \mu + \sigma\epsilon$ with $\epsilon$ drawn first, independently of everything. Now

$$\frac{\partial z}{\partial\mu} = 1, \qquad \frac{\partial z}{\partial\sigma} = \epsilon,$$

and by the chain rule

$$\frac{\partial \mathcal{L}}{\partial\mu} = \frac{\partial \mathcal{L}}{\partial z}, \qquad \frac{\partial \mathcal{L}}{\partial\sigma} = \frac{\partial \mathcal{L}}{\partial z}\,\epsilon.$$

Concretely, with $\mu = 2$, $\sigma = 0.5$ and a drawn $\epsilon = 1.4$: $z = 2 + 0.7 = 2.7$, and if $\partial\mathcal{L}/\partial z = 3$ then $\partial\mathcal{L}/\partial\mu = 3$ and $\partial\mathcal{L}/\partial\sigma = 4.2$.

**The distribution of $z$ is unchanged** — $\mu + \sigma\epsilon$ with standard normal $\epsilon$ is exactly $\mathcal{N}(\mu,\sigma^{2})$ — so nothing about the model has been altered. Only the computational graph changed, and that was enough.

The estimator's quality matters as much as its existence. The alternative REINFORCE estimator, $\partial\mathcal{L}/\partial\mu = \mathbb{E}[\mathcal{L}(z)\,\partial\log q(z)/\partial\mu]$, is also unbiased and uses no reparameterization — but it treats the loss as a black-box scalar and reweights samples by it, so its variance grows with the loss's scale and it typically needs orders of magnitude more samples. **Reparameterization works because it lets the gradient see inside $\mathcal{L}$**, and that is the general reason to prefer a pathwise estimator whenever one exists.

## Watch out

- You might think the ELBO is an approximation to the likelihood. It is a **lower bound**, and the gap is $D_{\mathrm{KL}}(q\|p(z\mid x))$ — exactly how wrong the encoder is about the true posterior. Maximising the bound can raise the likelihood or shrink the gap, and reporting the ELBO as though it were the likelihood understates the model.
- You might think a small KL term means the model is working well. A KL of zero means **posterior collapse**: the latent has become independent of the input and carries no information. Watch the KL per dimension, not just the total loss.
- You might think blurry VAE samples indicate an under-trained model. They indicate a Gaussian likelihood, whose squared-error optimum is the mean of the plausible outputs. Training longer makes the blur sharper only insofar as it makes the model more certain; the averaging is in the objective.

## One-liner

> Maximise a lower bound on the likelihood that reads as "reconstruct well and keep your codes near the prior", and make it trainable by writing the sample as a deterministic function of the parameters and a parameter-free noise input.

## Problems

**P1 (🟢)** A VAE has a three-dimensional latent and, for one input, the encoder outputs $\mu = (0, 1, -2)$ and $\sigma = (1, 1, 0.5)$. (a) Compute the KL term for each dimension. (b) Give the total. (c) State which dimension is penalised most and name the two contributions to its penalty.

**P2 (🟡)** Show that the KL term for a single latent dimension is minimised at $\mu = 0$, $\sigma = 1$ and that the minimum value is 0. Then state, in one sentence each, what it would mean for a trained model if every dimension sat exactly at that minimum, and what it would mean if the KL were very large.

**P3 (🔴, optional)** A team trains a VAE with a very powerful autoregressive decoder and reports excellent reconstructions, a KL term near zero, and latent codes that are useless for downstream classification. (a) Name the phenomenon and explain the mechanism. (b) State why the ELBO is not violated — that is, why this is an optimum rather than a failure of optimization. (c) Give two fixes and say what each trades away.

<details>
<summary>Solutions</summary>

**P1** (a) Using $\tfrac12(\mu^{2} + \sigma^{2} - 1 - \log\sigma^{2})$ per dimension:

*Dimension 1*, $\mu = 0$, $\sigma = 1$: $\tfrac12(0 + 1 - 1 - 0) = \mathbf{0}$.

*Dimension 2*, $\mu = 1$, $\sigma = 1$: $\tfrac12(1 + 1 - 1 - 0) = \mathbf{0.5}$.

*Dimension 3*, $\mu = -2$, $\sigma = 0.5$: $\sigma^{2} = 0.25$ and $\log 0.25 = -1.3863$, so

$$\tfrac12(4 + 0.25 - 1 + 1.3863) = \tfrac12(4.6363) = \mathbf{2.318}.$$

(b) Total: $0 + 0.5 + 2.318 = \mathbf{2.818}$ nats.

(c) **Dimension 3**, by a factor of nearly five over dimension 2. Its two contributions:

- **The mean is far from zero:** $\mu^{2} = 4$ contributes 2 to the KL, the larger share.
- **The distribution is too narrow:** $\sigma^{2} - 1 - \log\sigma^{2} = 0.25 - 1 + 1.386 = 0.636$ contributes 0.318.

Note the asymmetry in the width penalty: $\sigma = 0.5$ costs 0.318 while $\sigma = 2$ costs 0.807. Being **too wide is penalised more than being too narrow** by this formula, because $\sigma^{2}$ grows faster than $\log\sigma^{2}$. In practice the binding constraint is usually the opposite — encoders want to be narrow and confident, and the $-\log\sigma^{2}$ term is what stops them.

**P2** Write $f(\mu,\sigma) = \tfrac12\big(\mu^{2}+\sigma^{2}-1-2\log\sigma\big)$ for $\sigma > 0$.

*Stationary points.*

$$\frac{\partial f}{\partial\mu} = \mu = 0 \implies \mu = 0.$$

$$\frac{\partial f}{\partial\sigma} = \frac{1}{2}\left(2\sigma - \frac{2}{\sigma}\right) = \sigma - \frac1\sigma = 0 \implies \sigma^{2} = 1 \implies \sigma = 1,$$

taking the positive root since $\sigma > 0$.

*It is a minimum.* The Hessian is diagonal, with

$$\frac{\partial^{2}f}{\partial\mu^{2}} = 1 > 0, \qquad \frac{\partial^{2}f}{\partial\sigma^{2}} = 1 + \frac{1}{\sigma^{2}} = 2 > 0 \text{ at } \sigma = 1,$$

so both eigenvalues are positive and the point is a strict local minimum. It is global because $f$ is separable and each part is strictly convex on its domain: $\mu^{2}$ is convex, and $\sigma^{2} - 2\log\sigma$ has second derivative $2 + 2/\sigma^{2} > 0$ everywhere.

*The value.*

$$f(0,1) = \tfrac12(0 + 1 - 1 - 0) = \mathbf{0}.$$

Which is as it must be — the KL between two identical distributions is zero, and at $\mu = 0$, $\sigma = 1$ the approximate posterior *is* the prior.

*If every dimension sat exactly there:* the encoder would be producing $\mathcal{N}(0,I)$ for every input, so **the latent would be completely independent of the data** — posterior collapse, and the model would be generating from the decoder alone with the code contributing nothing.

*If the KL were very large:* the encoder would be placing each input's code in a narrow, distant region of latent space, so the codes would be highly informative and the **latent space would have gaps** — regions with no training mass, which decode to nothing sensible. The model would reconstruct well and generate badly, which is a plain autoencoder with extra steps.

**P3** (a) The phenomenon is **posterior collapse**.

The mechanism: an autoregressive decoder $p_\theta(x\mid z) = \prod_t p_\theta(x_t \mid x_{<t}, z)$ can model the data distribution well **using only $x_{<t}$**, ignoring $z$ entirely. If it does, then the reconstruction term $\mathbb{E}_q[\log p_\theta(x\mid z)]$ is already near its maximum regardless of what $q$ produces — so the optimiser is free to reduce the other term, and the cheapest way to do that is to set $q_\phi(z\mid x) = p(z)$ for every $x$, driving the KL to zero.

Once $q$ is input-independent, the latent carries no information about $x$, so a probe on the code performs at chance.

(b) **The ELBO is not violated; this is a genuine optimum.** The bound is

$$\mathcal{L} = \mathbb{E}_q[\log p_\theta(x\mid z)] - D_{\mathrm{KL}}(q_\phi\|p),$$

and the collapsed solution maximises it: the first term is as large as a $z$-ignoring decoder can make it, and the second is exactly 0, its minimum. Any configuration that made the latent informative would pay a positive KL cost for a reconstruction gain that the decoder does not need.

**This is the objective working as specified, not the optimizer failing.** The ELBO is a bound on the *likelihood of the data*, and a model that assigns high likelihood without using its latent has done what was asked. The mismatch is between what we optimised (likelihood) and what we wanted (an informative representation) — a proxy-objective problem of exactly the kind [4.1](04-01-autoencoders-and-representation-learning.md)'s Example 2 describes.

(c) Two fixes:

- **KL annealing (or free bits).** Multiply the KL term by $\beta$ ramped from 0 to 1 over early training, or stop penalising KL below a floor of a few nats per dimension. Early on the model is rewarded for using $z$ and builds a dependence that survives once the full penalty arrives. **What it trades away:** the objective is no longer the ELBO during the ramp, so the bound on the likelihood is not being optimised and the final model is a compromise between two objectives rather than an optimum of either. The schedule is also another hyperparameter to tune, and a badly chosen one collapses anyway.

- **Weaken the decoder** — restrict its context window, or use a non-autoregressive decoder that genuinely cannot model $x$ without $z$. **What it trades away:** likelihood and sample quality. A weaker decoder is a worse model of the data, so you are deliberately handicapping the generative performance to force information through the latent.

The trade is the same in both cases and worth naming: **an informative latent is not free, and the ELBO does not want one.** If the representation is what you are after rather than the density model, a VAE may simply be the wrong tool, and the contrastive or masked objectives of [4.1](04-01-autoencoders-and-representation-learning.md)'s flashback target it directly.

</details>

## Flashback

**From Lesson 1.5 (adaptive optimizers, schedules and initialization):** A VAE's encoder outputs $\log\sigma^{2}$ rather than $\sigma$ directly. (a) Give two reasons this parameterization is used. (b) State what would go wrong if the network output $\sigma$ from a linear layer. (c) Relate this to a choice made elsewhere in the course.

<details>
<summary>Solution</summary>

(a) Two reasons:

- **It enforces positivity for free.** A standard deviation must be positive, but a linear layer's output is any real number. Predicting $\log\sigma^{2}$ and exponentiating means every possible network output maps to a valid $\sigma$, with no clamping, no ReLU, and no risk of a zero or negative width.
- **It matches the scale the loss actually uses.** The KL term contains $-\log\sigma^{2}$ directly, so working in log space makes that contribution linear in the network's output and keeps the gradient well conditioned across the many orders of magnitude $\sigma$ can span — from a confident $10^{-3}$ to a collapsed 1.

(b) If a linear layer output $\sigma$ directly, three things break.

**Negative values.** Nothing stops the layer from producing $\sigma < 0$, which makes $\log\sigma^{2}$ fine but $z = \mu + \sigma\epsilon$ a mirror image and the density meaningless.

**Zero and near-zero values.** As $\sigma \to 0$ the KL term's $-\log\sigma^{2} \to +\infty$ and its gradient $-1/\sigma \to -\infty$. A single step that carries $\sigma$ to or past zero produces an infinite or `NaN` loss, and training dies.

**Poor conditioning.** The useful range of $\sigma$ spans several orders of magnitude, and a linear output covers it on an additive scale, so the same step size is far too coarse near $10^{-3}$ and far too fine near 1 — [1.5](01-05-adaptive-optimizers-schedules-and-initialization.md)'s per-coordinate scaling problem, created unnecessarily by the parameterization.

(c) The same choice appears elsewhere in the course wherever a network must output a constrained quantity: predict the **unconstrained** parameter and map it into the constraint with a fixed function.

The closest analogue is the **logit**. A classifier does not output a probability from a linear layer; it outputs a real-valued logit and applies a sigmoid or softmax ([1.1](01-01-from-linear-models-to-the-mlp.md)), for exactly these reasons — positivity and normalisation for free, and a scale on which the loss is well conditioned. Working in log space also mirrors why cross-entropy is computed from logits rather than from probabilities: the log and the exponential cancel, avoiding the underflow of multiplying many small numbers ([`numerical-analysis` 1.2](../../numerical-analysis/lessons/01-02-cancellation-error-propagation.md)).

The general rule: **let the network produce an unconstrained real number and let a fixed, invertible map impose the constraint.** It removes a class of numerical failure entirely rather than guarding against it.

</details>

## Connections

- **Backward:** the reconstruction term is [4.1](04-01-autoencoders-and-representation-learning.md)'s objective, the ELBO is the bound that also underlies [`machine-learning` 3.6](../../machine-learning/lessons/03-06-the-em-algorithm.md)'s EM with the posterior amortised into a network, and the reparameterized gradient is ordinary reverse-mode autodiff ([1.3](01-03-backpropagation-and-automatic-differentiation.md)) once the sampling node is moved aside.
- **Forward:** [4.3](04-03-generative-adversarial-networks.md) replaces the likelihood objective with a learned discriminator and gets sharp samples at the cost of stability; [4.4](04-04-a-taste-of-diffusion-models.md) can be read as a VAE with a fixed, many-step encoder, which is what makes it both tractable and far better behaved.
- **Sideways:** the KL divergence and its non-negativity are [`information-theory` 1.4](../../information-theory/lessons/01-04-relative-entropy-kl-jensen.md)'s, and the ELBO's derivation is Jensen's inequality applied to the log; the Gaussian algebra is [`prob-stat-refresher` 2.3](../../prob-stat-refresher/lessons/02-03-continuous-distributions.md)'s.
