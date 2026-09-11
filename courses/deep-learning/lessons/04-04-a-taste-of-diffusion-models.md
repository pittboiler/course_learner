# Deep Learning · Lesson 4.4: A taste of diffusion models

> ⏱ ~15 min · Module 4: Generative models & modern practice · Builds on: [4.2 (variational autoencoders)](04-02-variational-autoencoders.md), [4.3 (generative adversarial networks)](04-03-generative-adversarial-networks.md) · Unlocks: [4.5 (LLMs, self-supervision and scaling laws)](04-05-llms-self-supervision-and-scaling-laws.md)

## Why this matters

Module 4 has traded the same two things against each other twice. VAEs give a likelihood, stable training and complete coverage, and blurry samples ([4.2](04-02-variational-autoencoders.md)). GANs give sharp samples, and no likelihood, no stable training, and no guarantee of coverage ([4.3](04-03-generative-adversarial-networks.md)).

Diffusion models get most of both, and the reason is worth the lesson on its own. **They turn generation into a sequence of very easy problems.** Instead of asking a network to produce an image from noise in one leap, ask it to remove a *little* noise from a *slightly* noisy image — a task so easy it is a plain regression — and then run that a thousand times.

The training objective ends up being three lines, has a fixed target, and needs no adversary. That is why diffusion displaced GANs for image generation within about two years.

## The idea

**Forward: destroy the data, on a schedule you choose.** Take an image and add a small amount of Gaussian noise. Repeat a thousand times. By the end, nothing of the original remains — the result is indistinguishable from pure noise. This process has no parameters; you define it.

**Backward: learn to undo one step.** If you can take a slightly noisy image and produce a slightly less noisy one, then starting from pure noise and applying that map a thousand times gives you a sample. So train a network on exactly that task.

Two facts make this practical, and both are worth seeing clearly.

**You can jump to any noise level in one draw.** Composing Gaussians gives a Gaussian, so there is a closed form for $x_t$ given $x_0$ — no need to simulate the chain. Training a step therefore costs: pick a random $t$, add the corresponding noise in one operation, and ask the network to predict what noise was added.

**The target is the noise, and it is known exactly.** You added it. So the loss is a squared error between the true $\epsilon$ and the network's prediction — a supervised regression with a fixed ground truth, which is about the most stable objective in this course.

Compare with what each alternative does. A GAN's target moves because the discriminator is learning ([4.3](04-03-generative-adversarial-networks.md)). A VAE's decoder must produce a whole image from a code in one shot, so it averages over everything it is uncertain about ([4.2](04-02-variational-autoencoders.md)). **A diffusion model is uncertain about very little at each step**, because the input already contains most of the answer — so the averaging that causes blur has almost nothing to average over.

The price is paid at sampling time: one network evaluation per step, so a thousand where a GAN needs one.

## The formal version

> **Forward (diffusion) process.** With a variance schedule $\beta_1, \dots, \beta_T$,
> $$q(x_t \mid x_{t-1}) = \mathcal{N}\big(\sqrt{1-\beta_t}\,x_{t-1},\ \beta_t I\big).$$

The $\sqrt{1-\beta_t}$ shrinks the signal as the noise is added, which keeps the variance bounded — without it the values would grow without limit.

> **Closed form.** Writing $\alpha_t = 1-\beta_t$ and $\bar\alpha_t = \prod_{s\le t}\alpha_s$,
> $$q(x_t\mid x_0) = \mathcal{N}\big(\sqrt{\bar\alpha_t}\,x_0,\ (1-\bar\alpha_t)I\big), \qquad x_t = \sqrt{\bar\alpha_t}\,x_0 + \sqrt{1-\bar\alpha_t}\,\epsilon,$$
> with $\epsilon \sim \mathcal{N}(0,I)$.

**This is the fact that makes training cheap.** Reaching step 743 costs one Gaussian draw, not 743 sequential steps. Note the form: it is exactly the reparameterization of [4.2](04-02-variational-autoencoders.md), with a schedule-determined mean and variance instead of learned ones.

With a linear schedule from $\beta_1 = 10^{-4}$ to $\beta_T = 0.02$ at $T = 1000$:

| $t$ | $\bar\alpha_t$ | signal $\sqrt{\bar\alpha_t}$ | noise $\sqrt{1-\bar\alpha_t}$ |
|---|---|---|---|
| 1 | 0.9999 | 0.9999 | 0.010 |
| 100 | 0.897 | 0.947 | 0.321 |
| 250 | 0.524 | 0.724 | 0.690 |
| 500 | 0.0786 | 0.280 | 0.960 |
| 1000 | 0.00004 | 0.006 | 1.000 |

By $t = 1000$ the signal is $0.6$ percent of its original amplitude, so $q(x_T)$ is indistinguishable from $\mathcal{N}(0,I)$ — which is what lets sampling start from pure noise.

> **Reverse process.** Learn $p_\theta(x_{t-1}\mid x_t) = \mathcal{N}\big(\mu_\theta(x_t,t),\ \sigma_t^{2}I\big)$. Parameterising $\mu_\theta$ through a noise prediction $\epsilon_\theta$ gives
> $$\mu_\theta(x_t,t) = \frac{1}{\sqrt{\alpha_t}}\left(x_t - \frac{\beta_t}{\sqrt{1-\bar\alpha_t}}\,\epsilon_\theta(x_t,t)\right).$$

> **The training objective.** The full ELBO for this hierarchical model simplifies, under a reweighting, to
> $$\mathcal{L} = \mathbb{E}_{x_0,\ \epsilon,\ t}\Big[\big\|\epsilon - \epsilon_\theta\big(\sqrt{\bar\alpha_t}x_0 + \sqrt{1-\bar\alpha_t}\epsilon,\ t\big)\big\|^{2}\Big].$$

**Read that as an algorithm.** Sample an image, sample a timestep uniformly, sample noise, corrupt, predict the noise, take a squared error. Four lines, one network, no adversary, no posterior to approximate.

> **Why it is a VAE.** A diffusion model is a hierarchical VAE whose encoder $q$ is **fixed** — defined by the noise schedule rather than learned. That removes both of [4.2](04-02-variational-autoencoders.md)'s failure modes at a stroke: there is no posterior to collapse, because $q$ has no parameters, and the latent is never ignored, because it *is* the noisy image.

> **The score view.** Since $x_t = \sqrt{\bar\alpha_t}x_0 + \sqrt{1-\bar\alpha_t}\epsilon$, the gradient of the log density satisfies
> $$\nabla_{x_t}\log q(x_t) \approx -\frac{\epsilon_\theta(x_t,t)}{\sqrt{1-\bar\alpha_t}}.$$

So predicting the noise is, up to scale, **estimating the score** — the direction of steepest increase in log-density. Sampling is then gradient ascent on the log-density with noise injected, which is Langevin dynamics. The two derivations, the variational one and the score one, arrive at the same algorithm.

> **Sampling cost.** $T$ network evaluations per sample. Accelerated samplers — DDIM and its successors — take larger, deterministic steps and produce good samples in 20 to 50 evaluations, a 20- to 50-fold saving.

> **Conditioning.** **Classifier-free guidance** trains one network on both conditional and unconditional prediction (by dropping the condition sometimes) and at sampling time extrapolates:
> $$\tilde\epsilon = \epsilon_\theta(x_t, \varnothing) + w\big(\epsilon_\theta(x_t, c) - \epsilon_\theta(x_t, \varnothing)\big), \qquad w > 1.$$

Pushing past the conditional prediction sharpens adherence to the prompt at the cost of diversity — **a knob that trades exactly the coverage-versus-fidelity axis this module has been circling**, made explicit and tunable rather than being a property of the objective.

## Picture

![A plot against diffusion step from zero to one thousand. A solid blue curve, labelled as the square root of alpha-bar, starts at one and decays to near zero, representing how much of the original signal remains. A dashed coral curve, labelled as the square root of one minus alpha-bar, rises from zero to one, representing the noise. Dashed vertical lines mark the point where the two cross at about step 250, labelled half signal, and the end at step one thousand, labelled pure noise. Captions give the closed form for reaching any step in one draw, note that the training target is the added noise, and state that sampling costs one network evaluation per step.](assets/04-04-fig1.svg)

The two curves cross around $t = 250$, where signal and noise are equal. **Everything to the left of the crossing is a nearly clean image and everything to the right is nearly pure noise**, and the network has to be good at both ends and everywhere between — which is why the timestep $t$ is an input to the network, not just a bookkeeping index.

The shape also explains where a model spends its capacity. Near $t = 0$ the task is to remove a whisper of noise, which is easy and contributes little to the loss. Near $t = T$ the task is to hallucinate structure from noise, which is hard and is where the global composition of the image gets decided. **Different timesteps are different jobs**, and the reweighting hidden in "under a reweighting" above is what balances them — the simplified loss deliberately weights the hard, high-noise steps more than the true ELBO would.

## Worked examples

**Example 1 — corrupting to a given noise level, in one operation.**

Take the linear schedule above and $t = 250$, where $\bar\alpha_{250} = 0.524$.

A pixel with value $x_0 = 0.8$ and a drawn $\epsilon = -1.3$:

$$x_{250} = \sqrt{0.524}(0.8) + \sqrt{0.476}(-1.3) = 0.724(0.8) + 0.690(-1.3) = 0.579 - 0.897 = -0.318.$$

The network receives $x_{250}$ and $t = 250$ and must output an estimate of $\epsilon = -1.3$. **The ground truth is known exactly because we chose it**, which is the whole reason the objective is a plain regression.

Now note what the network does *not* have to do. It is not asked for $x_0$ directly, though it could be — the two parameterizations are related by the closed form, and predicting $\epsilon$ empirically works better, largely because $\epsilon$ has unit variance at every $t$ while $x_0$'s relationship to $x_t$ changes scale enormously across the schedule.

And note the cost of the alternative: simulating the forward chain to reach $t = 250$ would take 250 sequential draws per training example. The closed form makes it one, so a training step costs the same regardless of which timestep it samples.

**Example 2 — pricing the sampling, against the alternatives.**

A model with a 500-million-parameter denoising network, $T = 1000$.

| Model | Network evaluations per sample | Relative cost |
|---|---|---|
| GAN | 1 | 1 |
| VAE | 1 | 1 |
| Diffusion, full | 1,000 | 1,000 |
| Diffusion, DDIM at 50 steps | 50 | 50 |
| Diffusion, distilled | 1–4 | 1–4 |

**Three orders of magnitude**, reduced to one or two by better samplers. That is the trade diffusion makes, and for a long time it was the reason people stayed with GANs.

Why it was worth paying. Training a GAN requires balancing two networks whose objectives move; the failure modes — collapse, oscillation, the discriminator winning — are hard to diagnose and the loss tells you nothing ([4.3](04-03-generative-adversarial-networks.md)). A diffusion model's training is a regression that converges monotonically and whose loss means what it says. **Researcher time is also a cost**, and diffusion moved it from training to sampling, where it is an engineering problem with a straightforward solution: better numerical integrators for the reverse process, and distillation of a many-step sampler into a few-step one.

The honest caveat on the table's last row: distilled few-step samplers trade some quality and diversity for the speed, and the gap to full sampling is real if narrowing. As of now, the compute cost of generation remains diffusion's distinguishing weakness — which matters most for video, where a single sample is thousands of frames.

## Watch out

- You might think the forward process is learned. It is not — it is a fixed schedule you choose, with no parameters. Only the reverse direction is learned, which is exactly why there is no posterior to collapse and no encoder to train.
- You might think a diffusion model generates by denoising an image. It generates by denoising **pure noise**: sampling starts from $\mathcal{N}(0,I)$ and there is no image underneath. Denoising a real photograph is a different task the same network happens to be able to do.
- You might think more sampling steps always give better samples. Beyond a point they do not, and the quality-versus-steps curve flattens — while guidance strength has a much larger effect, trading fidelity to the prompt against diversity.

## One-liner

> Add noise on a fixed schedule you can jump along in one draw, train a network to predict the noise, and generate by removing it a little at a time — sharp like a GAN, stable like a regression, and expensive only when you sample.

## Problems

**P1 (🟢)** Using the schedule above with $\bar\alpha_{500} = 0.0786$: (a) give the coefficients of $x_0$ and $\epsilon$ in $x_{500}$. (b) For $x_0 = -0.4$ and $\epsilon = 0.9$, compute $x_{500}$. (c) State what the network is asked to output and why its target is known exactly.

**P2 (🟡)** Compare training stability across the three generative models in this module. (a) State what the target is in each of a VAE, a GAN and a diffusion model, and whether it moves during training. (b) State which model's training loss is a usable progress measure and which is not. (c) State the single structural reason diffusion training is the most stable of the three.

**P3 (🔴, optional)** A diffusion model is described as "a hierarchical VAE with a fixed encoder". (a) Identify what plays the role of the latent, the encoder and the decoder. (b) State why posterior collapse ([4.2](04-02-variational-autoencoders.md)) cannot occur. (c) State what is given up by fixing the encoder, and why it turns out not to matter much here.

<details>
<summary>Solutions</summary>

**P1** (a) From $x_t = \sqrt{\bar\alpha_t}x_0 + \sqrt{1-\bar\alpha_t}\epsilon$ with $\bar\alpha_{500} = 0.0786$:

$$\sqrt{0.0786} = \mathbf{0.280} \text{ on } x_0, \qquad \sqrt{1-0.0786} = \sqrt{0.9214} = \mathbf{0.960} \text{ on } \epsilon.$$

At the halfway point of the schedule only 28 percent of the signal's amplitude survives — the schedule destroys information far faster than the step index suggests, which is why $\bar\alpha$ and not $t$ is the meaningful coordinate.

(b) $$x_{500} = 0.280(-0.4) + 0.960(0.9) = -0.112 + 0.864 = \mathbf{0.752}.$$

Note how completely the noise dominates: the output's sign is the noise's sign, not the data's.

(c) The network is asked to output an estimate of $\boldsymbol{\epsilon}$ — the noise that was added — given $x_{500}$ and the timestep $t = 500$.

Its target is known exactly because **we drew $\epsilon$ ourselves** when constructing the training example. There is no inference required, no posterior to approximate, and no second network whose opinion defines the target. This is an ordinary supervised regression whose labels are free and exact, which is the structural reason the training is so well behaved.

**P2** (a) The targets:

| Model | Target | Does it move? |
|---|---|---|
| VAE | the input $x$ itself, through reconstruction | **No** — the data is fixed |
| GAN | whatever fools the current discriminator | **Yes** — the discriminator is learning |
| Diffusion | the noise $\epsilon$ that was added | **No** — drawn and known exactly |

(b) **The VAE's and the diffusion model's losses are usable progress measures**; the GAN's is not.

The VAE optimises the ELBO, a lower bound on the data likelihood, so the number going up means the model is better (with the caveat that the bound's tightness also changes). The diffusion model's loss is a squared error against a fixed target, so it behaves like any supervised regression.

The GAN's two losses move against each other and neither indicates progress: the equilibrium value $-\log 4$ is also achieved by two untrained networks, and by two cycling ones ([4.3](04-03-generative-adversarial-networks.md)'s Example 2).

(c) The structural reason: **diffusion training is a supervised regression with a fixed, exactly known target, and it is a sum of many small independent problems.**

Each training step asks the network to do one thing — predict the noise at one timestep for one image — and the answer does not depend on anything else the model has learned, on another network's parameters, or on an approximation. Contrast the VAE, where the reconstruction target is fixed but the *encoder's* posterior approximation is learned simultaneously and can collapse; and the GAN, where the target is another network's current opinion.

There is a second contributor worth naming. **No single step has to be very good.** A denoiser that is slightly wrong at step 743 has 742 further steps to correct the error, so the objective is forgiving in a way that one-shot generation is not — which is the same "many easy problems beat one hard one" idea that makes the whole approach work.

**P3** (a) The correspondence:

- **The latents** are the noisy images $x_1, \dots, x_T$ — a hierarchy of them, one per timestep, each the same dimension as the data rather than a compressed code.
- **The encoder** is the forward diffusion process $q(x_t\mid x_{t-1})$, which maps data to latents. It is Gaussian, has **no parameters**, and is fully specified by the schedule $\beta_1,\dots,\beta_T$.
- **The decoder** is the learned reverse process $p_\theta(x_{t-1}\mid x_t)$, applied $T$ times.

(b) **Posterior collapse cannot occur because there is no posterior to learn.**

In a VAE, collapse means the optimiser drives $q_\phi(z\mid x) \to p(z)$ to zero out the KL term, which it can do because $q_\phi$ has parameters ([4.2](04-02-variational-autoencoders.md)'s P3). Here $q$ is fixed by construction, so there is nothing to drive anywhere.

The second half of the failure is also excluded: in a VAE the decoder can learn to ignore $z$. Here the "latent" $x_t$ *is* the noisy image, and the decoder's entire input is $x_t$ — it cannot ignore it and produce anything at all. **The latent is not an optional side-channel; it is the only channel.**

(c) What is given up is **learned compression.** A VAE's encoder discovers a low-dimensional code adapted to the data; diffusion's latents have the same dimension as the data and are just noisier copies of it. So there is no compact representation to hand to a downstream classifier, no interpretable latent axes, and no dimensionality reduction.

Why it does not matter much here: **the goal was generation, not representation.** For generation, the latent's only job is to provide a distribution you can sample from and a path back to the data, and pure Gaussian noise does both perfectly. Giving up compression costs nothing against that objective, and it buys the stability in (b).

It does matter for the cost, though, and in exactly the expected way: because the latents are full-dimensional, every one of the $T$ network evaluations runs at full data resolution. **Latent diffusion** is the standard answer — run an autoencoder ([4.1](04-01-autoencoders-and-representation-learning.md)) first to compress the image, then diffuse in that smaller space. That recovers the compression benefit, cuts the sampling cost by the compression factor squared or more, and is what makes high-resolution image generation practical.

</details>

## Flashback

**From Lesson 4.2 (variational autoencoders):** A diffusion model's forward step is $x_t = \sqrt{\bar\alpha_t}\,x_0 + \sqrt{1-\bar\alpha_t}\,\epsilon$ with $\epsilon \sim \mathcal{N}(0,I)$. (a) Identify the technique this is an instance of and state its general form. (b) State whether the gradient needs to flow through it here, and why the answer differs from the VAE case. (c) Name one other place in this course where the same construction appears.

<details>
<summary>Solution</summary>

(a) It is the **reparameterization trick**: writing a sample from a distribution as a deterministic function of the distribution's parameters and a parameter-free noise source. The general Gaussian form is

$$z = \mu + \sigma\odot\epsilon, \qquad \epsilon\sim\mathcal{N}(0,I),$$

and here $\mu = \sqrt{\bar\alpha_t}\,x_0$ and $\sigma = \sqrt{1-\bar\alpha_t}$, both determined by the schedule.

(b) **No, the gradient does not need to flow through it here** — and that is the striking difference.

In a VAE, $\mu$ and $\sigma$ are **outputs of the encoder network**, so the gradient must reach them through the sample; reparameterization exists precisely to make that possible ([4.2](04-02-variational-autoencoders.md)).

In diffusion, $\mu$ and $\sigma$ are **fixed constants from the schedule**, with no parameters behind them. Nothing needs differentiating: the expression is used purely as a cheap way to *construct a training example*, not as part of a differentiable path.

So the same algebra serves two different purposes. In the VAE it is a gradient-estimation technique; in diffusion it is a closed-form sampler that lets you reach any noise level in one draw instead of simulating $t$ steps. **The construction was borrowed for its computational convenience, not for its differentiability** — which is a reasonable description of a lot of applied cryptography-adjacent engineering too, and a good reminder that a technique's original motivation need not be its most useful property.

(c) The same construction appears in **dropout** ([1.7](01-07-regularization.md)): the mask $r \sim \mathrm{Bernoulli}(p)$ is drawn independently of the parameters and multiplied in as $\tilde a = (r/p)\odot a$, so the randomness enters as a factor rather than as a node the gradient must pass through. The gradient flows to $a$ unimpeded, gated by the drawn mask.

It also appears implicitly in **mini-batch sampling** ([1.4](01-04-sgd-mini-batches-and-momentum.md)): the batch is drawn independently of the parameters, so the stochastic gradient is an unbiased estimate whose randomness sits outside the differentiated computation. The general pattern — **keep the randomness parameter-free and let it enter as data** — is worth recognising, because the cases where it is impossible, such as discrete latent variables, are exactly the cases that remain hard.

</details>

## Connections

- **Backward:** the forward process is [4.2](04-02-variational-autoencoders.md)'s reparameterization used as a sampler, the model is a hierarchical VAE with a parameter-free encoder, and the sharpness it achieves is what [4.3](04-03-generative-adversarial-networks.md) needed an adversary to get.
- **Forward:** [4.5](04-05-llms-self-supervision-and-scaling-laws.md) closes the module on the other branch of modern generative modelling — autoregressive next-token prediction — and the two branches now dominate images and text respectively, for reasons that come down to whether the data has a natural sequential order.
- **Sideways:** the score interpretation makes sampling a Langevin diffusion, the stochastic dynamics of [`stat-mech` 6.1](../../stat-mech/lessons/06-01-brownian-langevin.md); and the forward process is an Ornstein–Uhlenbeck process discretised, which is why the noise schedule's design is a question about stochastic differential equations rather than about neural networks.
