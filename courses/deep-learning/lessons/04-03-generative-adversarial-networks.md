# Deep Learning · Lesson 4.3: Generative adversarial networks

> ⏱ ~15 min · Module 4: Generative models & modern practice · Builds on: [4.2 (variational autoencoders)](04-02-variational-autoencoders.md) · Unlocks: [4.4 (a taste of diffusion models)](04-04-a-taste-of-diffusion-models.md)

## Why this matters

[4.2](04-02-variational-autoencoders.md) ended on a specific complaint: VAE samples are blurry, and the blur comes from the objective. A squared-error reconstruction loss is minimised by the *average* of the plausible outputs, and the average of several sharp images is a smudge.

The adversarial approach attacks exactly that. Instead of specifying a likelihood and hoping it rewards realism, **learn the loss function**. Train a second network to tell real data from generated data, and train the generator to fool it. The generator's objective is then whatever the discriminator currently finds distinguishing — which, unlike squared error, includes sharpness, texture, and every other cue a classifier can pick up.

It works spectacularly and it is unstable, and both facts have the same cause: there is no fixed objective being descended, only two networks chasing each other. Understanding why is worth more than the architecture, because the instability is intrinsic.

## The idea

Two networks with opposing goals.

The **discriminator** $D$ is a classifier: given a sample, output the probability it came from the real data rather than the generator. The **generator** $G$ maps noise $z \sim p(z)$ to a sample and is trained to make $D$ wrong.

They play a minimax game. $D$ maximises its classification accuracy; $G$ minimises it. At equilibrium the generator's distribution equals the data distribution, the discriminator cannot do better than chance, and it outputs $1/2$ everywhere.

**Why this produces sharp samples.** The generator is never told to match pixels. It is told to produce something a *classifier* cannot distinguish — and a classifier notices blur immediately, because blur is a texture statistic no real image has. The loss is adaptive: whatever flaw the generator currently has, the discriminator learns to detect it, and that detection becomes the gradient.

Three things go wrong, and they are all consequences of the same design.

**The naive generator loss saturates.** Early in training $D$ rejects fakes confidently, $D(G(z)) \approx 0$, and the gradient the generator receives is weakest precisely when it is doing worst. The fix is one line — maximise $\log D(G(z))$ instead of minimising $\log(1 - D(G(z)))$ — and it is not optional.

**Mode collapse.** Nothing in the objective requires the generator to cover the data. Producing one very convincing image scores perfectly against a discriminator that has not yet learned to check for diversity, so generators routinely collapse onto a few modes.

**There is no convergence guarantee and no meaningful loss curve.** The two losses move against each other, so neither going down means progress. **You cannot tell whether a GAN is training well by looking at its loss**, which is a genuinely disorienting property for anyone used to the rest of this course.

## The formal version

> **The minimax objective.**
> $$\min_G \max_D\ V(D,G) = \mathbb{E}_{x\sim p_{\text{data}}}\big[\log D(x)\big] + \mathbb{E}_{z\sim p(z)}\big[\log\big(1 - D(G(z))\big)\big].$$

> **The optimal discriminator.** For a fixed $G$ with induced distribution $p_g$,
> $$D^{*}(x) = \frac{p_{\text{data}}(x)}{p_{\text{data}}(x) + p_g(x)}.$$

*Why:* the objective is $\int p_{\text{data}}\log D + p_g\log(1-D)$, and pointwise $a\log D + b\log(1-D)$ is maximised at $D = a/(a+b)$.

> **What the game optimises.** Substituting $D^{*}$,
> $$V(D^{*}, G) = -\log 4 + 2\,\mathrm{JSD}\big(p_{\text{data}}\,\|\,p_g\big),$$
> where JSD is the Jensen–Shannon divergence. It is zero exactly when $p_g = p_{\text{data}}$, at which point $V = -\log 4 \approx -1.386$ and $D^{*} \equiv 1/2$.

**So the generator is minimising a divergence after all** — just one chosen implicitly by the game rather than written down. That is the theoretical content of the construction, and it also exposes its weakness: JSD is **bounded above by $\log 2$**, so when $p_g$ and $p_{\text{data}}$ have disjoint support the divergence sits at its maximum and its gradient with respect to $G$ is uninformative. Early in training the supports are essentially disjoint.

> **The non-saturating trick.** Replace the generator's $\min_G \log(1-D(G(z)))$ by $\max_G \log D(G(z))$.

Both have the same optimum and the same direction of improvement; the difference is the magnitude of the gradient:

| $D(G(z))$ | $\big|\partial \log(1-D)/\partial D\big|$ | $\big|\partial\log D/\partial D\big|$ | ratio |
|---|---|---|---|
| 0.01 | 1.01 | 100 | 99 |
| 0.10 | 1.11 | 10 | 9 |
| 0.50 | 2.00 | 2 | 1 |
| 0.90 | 10.0 | 1.11 | 0.11 |

**The saturating form gives its strongest signal when the generator is already winning and its weakest when it is losing** — exactly backwards. The non-saturating form inverts that. This is the same "give the gradient a strong path where it is needed" principle as [3.2](03-02-lstms-grus-and-vanishing-gradients.md)'s forget-gate initialization.

> **Mode collapse.** The generator may map many $z$ to one output. Nothing in $V$ penalises it: a single perfect sample fools a discriminator that is not currently checking for variety.

Contrast with a likelihood-based model. Maximising $\log p_\theta(x)$ over the data means assigning mass to **every** training point, so ignoring a mode is heavily punished — a likelihood objective is **mode-covering**, and the adversarial objective is **mode-seeking**. That single difference explains why VAEs are blurry and complete while GANs are sharp and may be missing half the distribution.

> **Evaluation.** There is no likelihood to report. Standard proxies are the Inception Score and, more commonly, the **Fréchet Inception Distance**, which compares the mean and covariance of a pretrained network's features on real and generated samples.

FID is a proxy with known failure modes — it is sensitive to the feature extractor, it can be gamed, and a good FID does not guarantee diversity. **The absence of a principled evaluation metric is a real cost of abandoning likelihood**, not a temporary gap.

> **Stabilisation.** Wasserstein GAN replaces JSD with the Earth-mover distance, which is finite and has usable gradients even for disjoint supports; spectral normalization constrains the discriminator's Lipschitz constant; two-timescale updates use different learning rates for $D$ and $G$. All address the same underlying problem — **the discriminator becoming too good too fast, leaving the generator with no signal.**

## Picture

![A plot with the discriminator's output on a generated sample along the horizontal axis from zero to one, and loss on the vertical axis. A coral curve shows the logarithm of one minus D, which is nearly flat and close to zero for small D and plunges only as D approaches one. A blue curve shows the logarithm of D, which plunges steeply toward minus infinity as D approaches zero and flattens near one. A dashed vertical line near D equals 0.05 marks where early training lives. Captions give the slopes at D equals 0.01 as 1.01 and 100, a hundredfold difference in the gradient the generator receives when it is doing worst.](assets/04-03-fig1.svg)

The dashed line is where a freshly initialized generator sits: the discriminator rejects everything it produces, so $D(G(z))$ is near zero.

Look at the two curves there. **The coral curve is flat** — the saturating loss barely changes as the generator improves from hopeless to slightly less hopeless, so it reports almost nothing. **The blue curve is nearly vertical**, so the same improvement registers as a large change in loss and a large gradient.

Both curves share their minimiser and their direction. Only the *scale* of the signal differs, and that scale is the difference between a GAN that trains and one that sits at its initialization.

## Worked examples

**Example 1 — the optimal discriminator and what it reveals.**

Take a three-outcome discrete case: $p_{\text{data}} = (0.5, 0.3, 0.2)$ and $p_g = (0.8, 0.2, 0.0)$.

*The optimal discriminator,* $D^{*} = p_{\text{data}}/(p_{\text{data}} + p_g)$:

$$D^{*} = \left(\frac{0.5}{1.3},\ \frac{0.3}{0.5},\ \frac{0.2}{0.2}\right) = (0.385,\ 0.600,\ 1.000).$$

Read the third entry. **$D^{*} = 1$ on outcome 3**, because the generator never produces it — anything there is certainly real. That is the discriminator detecting a missing mode, and it is the signal that would push the generator to cover it.

*The value of the game.* With $m = (p+q)/2 = (0.65, 0.25, 0.10)$,

$$\mathrm{JSD} = \tfrac12 D_{\mathrm{KL}}(p\|m) + \tfrac12 D_{\mathrm{KL}}(q\|m) = 0.0918,$$

and the identity gives

$$V(D^{*},G) = -\log 4 + 2(0.0918) = -1.386 + 0.184 = -1.203,$$

which matches the direct computation of $\sum p_i \log D^{*}_i + \sum q_i\log(1-D^{*}_i)$ exactly.

**Note that JSD stayed finite even though $p_g$ assigns zero mass where $p_{\text{data}}$ does not.** The KL divergence would have been infinite; JSD is bounded by $\log 2 = 0.693$ because the mixture $m$ is never zero where either is positive. That boundedness is a virtue for stability and a vice for gradients — a divergence that is already at its ceiling cannot indicate which way to move.

**Example 2 — why the loss curves tell you nothing.**

A team trains a GAN and reports: discriminator loss oscillating around 1.35, generator loss oscillating around 0.9, both flat for 50 epochs. Is it working?

**Unanswerable from those numbers.** At the ideal equilibrium $D \equiv 1/2$, so the discriminator's loss is $-\log\tfrac12 \times 2 = 1.386$ — very close to the reported 1.35. But the *same* value arises when both networks are weak and neither has learned anything, and when they are cycling between configurations without converging.

In every other lesson of this course a flat loss at a low value means the model has converged. Here it means one of three incompatible things, and the loss cannot distinguish them.

What you must do instead:

- **Look at samples**, at every epoch, which is why GAN papers are full of image grids.
- **Compute FID** against a held-out set, periodically. It is a proxy, and it is the best available.
- **Check for mode collapse directly** — generate a few thousand samples and measure their diversity, or check whether distinct $z$ values give distinct outputs.

The methodological point generalises beyond GANs. **A loss is only a progress measure when it is a fixed function being descended.** In a two-player game the objective moves, so the loss is a coordinate in a system that may be cycling rather than converging — and the honest response is to evaluate the thing you actually want instead of the number the optimizer reports.

## Watch out

- You might think a falling generator loss means the generator is improving. It may mean the discriminator got worse. The two losses are coupled and neither is a progress measure on its own.
- You might think mode collapse is an optimization failure. It is an objective failure: nothing in the minimax game rewards covering the data distribution, so a collapsed generator can be a legitimate near-optimum against the current discriminator.
- You might think the saturating and non-saturating generator losses are interchangeable because they share a fixed point. They differ by a factor of $100$ in gradient magnitude exactly where training starts, and the original formulation does not train.

## One-liner

> Learn the loss function instead of specifying it: a discriminator supplies whatever gradient distinguishes fake from real, which buys sharpness and costs you a stable objective, a convergence guarantee, and any way to read progress off the loss.

## Problems

**P1 (🟢)** For $p_{\text{data}} = (0.4, 0.4, 0.2)$ and $p_g = (0.6, 0.4, 0.0)$: (a) compute the optimal discriminator at each outcome. (b) State which outcome the discriminator is certain about and what that indicates. (c) State what $D^{*}$ would be everywhere if the generator had converged.

**P2 (🟡)** A generator early in training produces samples the discriminator scores at $D(G(z)) = 0.02$. (a) Give the gradient magnitude with respect to $D$ under both generator losses. (b) Give the ratio and state which loss to use. (c) Explain in one sentence why both losses nonetheless have the same optimum.

**P3 (🔴, optional)** A team's GAN produces sharp, realistic faces, but on inspection roughly 90 percent of samples fall into about a dozen distinct appearances. (a) Name the failure and explain why the objective permits it. (b) Contrast with what a VAE trained on the same data would do, and say which term in [4.2](04-02-variational-autoencoders.md)'s objective prevents it. (c) Give two ways to detect this that the training loss cannot, and one architectural or objective change that helps.

<details>
<summary>Solutions</summary>

**P1** (a) $D^{*} = p_{\text{data}}/(p_{\text{data}}+p_g)$:

$$D^{*}_1 = \frac{0.4}{1.0} = 0.4, \qquad D^{*}_2 = \frac{0.4}{0.8} = 0.5, \qquad D^{*}_3 = \frac{0.2}{0.2} = 1.0.$$

(b) The discriminator is **certain about outcome 3**, where $D^{*} = 1$: the generator assigns it zero probability, so anything observed there is definitely real.

What that indicates is a **missing mode**. Outcome 3 carries 20 percent of the real distribution and the generator never produces it, and the discriminator's certainty is precisely the signal that would push the generator to cover it — assuming the generator can reach that region at all, which is the part mode collapse makes doubtful.

Note also that $D^{*}_2 = 0.5$ exactly: the two distributions agree there, so the discriminator is at chance on outcome 2. The optimal discriminator is a **pointwise readout of where the two distributions differ**, and reading it is the most informative diagnostic available in a GAN.

(c) If the generator had converged, $p_g = p_{\text{data}}$ and

$$D^{*}(x) = \frac{p}{p+p} = \frac{1}{2} \text{ everywhere},$$

with $V = -\log 4 \approx -1.386$ and $\mathrm{JSD} = 0$. **A discriminator reduced to chance everywhere is the definition of success**, which is why "the discriminator is winning" and "the discriminator is losing" are both bad signs and only "the discriminator is at chance, with good samples" is good.

**P2** (a) At $D(G(z)) = 0.02$:

*Saturating*, minimising $\log(1-D)$: $\left|\frac{\partial}{\partial D}\log(1-D)\right| = \frac{1}{1-D} = \frac{1}{0.98} = \mathbf{1.02}$.

*Non-saturating*, maximising $\log D$: $\left|\frac{\partial}{\partial D}\log D\right| = \frac{1}{D} = \frac{1}{0.02} = \mathbf{50}$.

(b) The ratio is $50/1.02 \approx \mathbf{49}$.

**Use the non-saturating form.** The saturating loss delivers a gradient of order 1 exactly when the generator is furthest from acceptable, so it barely moves; the non-saturating form delivers fifty times that, and the ratio grows as $1/D$ as the generator's samples get worse.

There is a second, compounding effect: if $D$'s final layer is a sigmoid, then $D \approx 0.02$ means that sigmoid is saturated, so $\partial D/\partial(\text{logit})$ is small too ([1.1](01-01-from-linear-models-to-the-mlp.md)). The two saturations multiply, which is why the original formulation does not train at all rather than merely training slowly.

(c) Both losses have the same optimum because **they are monotone transformations of the same quantity with respect to what the generator controls**: $\log D$ increases exactly when $\log(1-D)$ decreases, so "make $D(G(z))$ large" is the goal under both. Changing the loss changes the *magnitude* of the gradient at each point, not the sign or the location of the optimum — and for a gradient method the magnitude is what determines whether the optimum is ever reached.

**P3** (a) The failure is **mode collapse**.

The objective permits it because $V(D,G)$ contains no term that rewards coverage. The generator's payoff is $\mathbb{E}_z[\log D(G(z))]$ — the average over its *own* samples of how convincing they are. A generator that produces twelve perfect faces and nothing else scores as well as one producing the full distribution, provided the discriminator does not currently distinguish them.

The discriminator *would* eventually learn to notice, since a distribution concentrated on twelve points is easy to detect. But the training is a two-player game with alternating updates: the generator can move to whichever mode the discriminator is currently weakest on, the discriminator adapts, the generator moves again. **The system can cycle indefinitely without either converging**, which is the underlying reason collapse persists rather than being self-correcting.

(b) A VAE trained on the same data would produce the full range of faces, **blurrily**.

The term that prevents collapse is the **reconstruction term**, $\mathbb{E}_q[\log p_\theta(x\mid z)]$, which is evaluated over the *data* rather than over the model's samples. Every training face must be reconstructible, so the model is penalised for every mode it fails to cover — the likelihood objective is **mode-covering**.

The adversarial objective is **mode-seeking**: it is an expectation over the generator's own output, so ignoring part of the data costs nothing directly. The contrast is exactly the blurry-and-complete versus sharp-and-partial trade this module keeps returning to, and it comes from which distribution the expectation is taken over.

(c) Two detections the training loss cannot provide:

- **Sample diversity statistics.** Generate several thousand samples and measure pairwise distances in a feature space, or cluster them and count occupied clusters. Twelve clusters holding 90 percent of the mass is the finding, stated directly.
- **Nearest-neighbour recall against a held-out set.** For each real held-out image, find the closest generated sample. If large parts of the real set have no close generated neighbour, those regions are uncovered. This is the *recall* half of a precision–recall analysis, and a collapsed generator has high precision and low recall — a distinction FID's single number obscures.

A third: **latent interpolation.** Walk $z$ along a line and decode. A healthy generator produces a smooth traversal; a collapsed one jumps between a few fixed outputs.

Changes that help:

- **Minibatch discrimination**, giving the discriminator access to statistics across a batch rather than judging samples one at a time, so it can detect that a batch lacks variety. This attacks the cause directly: the discriminator could not previously see diversity at all.
- **Wasserstein GAN with a gradient penalty**, which replaces JSD with the Earth-mover distance. Because that distance is finite and differentiable even for disjoint supports, the generator keeps receiving a useful gradient pointing toward uncovered regions rather than sitting against JSD's $\log 2$ ceiling.

What both give up: minibatch discrimination adds a batch dependence to the discriminator, with the train–eval awkwardness of [1.6](01-06-normalization.md); Wasserstein training requires constraining the discriminator's Lipschitz constant, which costs compute and adds its own hyperparameters.

</details>

## Flashback

**From Lesson 4.2 (variational autoencoders):** A VAE and a GAN are trained on the same face dataset. (a) State which produces sharper samples and name the term responsible in each objective. (b) State which covers the data distribution better and why. (c) Name the property a VAE has that a GAN lacks entirely, and one practical consequence.

<details>
<summary>Solution</summary>

(a) **The GAN produces sharper samples.**

In the VAE the responsible term is the **reconstruction term** $\mathbb{E}_q[\log p_\theta(x\mid z)]$, which under a Gaussian likelihood is a squared error. Squared error is minimised by the conditional *mean*, so where the model is uncertain — which edge, which exact texture — it outputs the average of the possibilities, and an average of sharp images is blurry. The blur is in the objective, not the architecture.

In the GAN the responsible term is the **discriminator**. A blurry sample is trivially classifiable as fake, because no real photograph has that texture statistic, so blur is penalised directly and heavily. The generator is optimising against a learned critic that notices exactly the artefacts a hand-written loss ignores.

(b) **The VAE covers the distribution better.**

Its objective is an expectation over the **data**: every training example must be reconstructed, so failing to model a region of the data is penalised in proportion to how much data lives there. That makes it mode-covering.

The GAN's generator objective is an expectation over its **own samples**, so a region it never visits contributes nothing to its loss. That makes it mode-seeking, and mode collapse is the extreme case.

(c) The property the VAE has and the GAN lacks is an **explicit, tractable likelihood bound** — the ELBO — that can be evaluated on any input.

Practical consequences:

- **You can evaluate a VAE on held-out data** and get a number that means something, comparable across models and monotone in the thing you care about. GANs have only proxies such as FID, which are sensitive to the feature extractor and cannot detect mode collapse reliably.
- **You can use a VAE for anomaly detection**, scoring a new input by its ELBO. A GAN has no score to assign to a given $x$ at all — its generator maps noise to samples and cannot run backwards.
- **You can monitor training.** A VAE's ELBO going up is progress; a GAN's losses going anywhere mean nothing, as Example 2 shows.

The honest summary of the module so far: **likelihood buys evaluation, coverage and stability; adversarial training buys sample quality.** [4.4](04-04-a-taste-of-diffusion-models.md) is largely the story of getting both.

</details>

## Connections

- **Backward:** the blur this lesson attacks is [4.2](04-02-variational-autoencoders.md)'s Gaussian likelihood, and the non-saturating fix is the same gradient-path reasoning as [3.2](03-02-lstms-grus-and-vanishing-gradients.md)'s forget-gate initialization — make the signal strongest where the model is worst.
- **Forward:** [4.4](04-04-a-taste-of-diffusion-models.md) recovers sharp samples with a likelihood-based objective and a stable training loop, which is why it displaced GANs for image generation; the mode-covering versus mode-seeking distinction is the right lens for reading that comparison.
- **Sideways:** the minimax formulation is a two-player zero-sum game, the setting of [`grad-game-theory` 1.4](../../grad-game-theory/lessons/01-04-zero-sum-minimax-lp-duality.md), and the absence of convergence guarantees is the general fact that simultaneous gradient dynamics need not converge to a Nash equilibrium; the Jensen–Shannon divergence and its bound by $\log 2$ come from [`information-theory` 1.4](../../information-theory/lessons/01-04-relative-entropy-kl-jensen.md).
