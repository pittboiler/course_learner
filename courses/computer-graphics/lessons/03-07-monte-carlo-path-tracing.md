# Computer Graphics · Lesson 3.7: Monte Carlo Path Tracing

> ⏱ ~15 min · Module 3: The GPU Pipeline, Ray Tracing & Global Illumination · Builds on: [3.6 (the rendering equation)](03-06-radiometry-brdfs-rendering-equation.md), [3.5 (acceleration structures)](03-05-acceleration-structures.md), [`probability-theory` 4.2 (law of large numbers)](../../probability-theory/lessons/04-02-laws-of-large-numbers.md) · Unlocks: [Module 4](04-01-meshes-and-geometry-representations.md), and every physically based renderer

## Why this matters

[3.6](03-06-radiometry-brdfs-rendering-equation.md) wrote down the equation; nobody can solve it in closed form for a real scene. The integral runs over a hemisphere at every point, and the integrand at each point contains the unknown solution at other points. Quadrature on a grid of directions would need thousands of directions per bounce, compounding across bounces — astronomically expensive.

**Monte Carlo** integration escapes that: pick directions *at random*, average, and the answer is right on average with an error that shrinks like $1/\sqrt N$ regardless of dimension. Follow one random direction per bounce and you get a **path tracer** — the algorithm behind every animated feature film since the 2010s. Its images are exactly correct in expectation, and its one visible flaw is **noise**. This lesson is about where the noise comes from, how to shrink it, and what it costs.

## The idea

**Estimate an average by sampling it.** To find the average height of a crowd you don't measure everyone; you measure a random handful. An integral is an average times a size, so it can be estimated the same way: evaluate the integrand at random points and average. The estimate is unbiased — right on average — and its error falls as one over the square root of the number of samples.

**Sample where it matters.** If you know which directions contribute most (directions near the normal, because of the cosine; directions toward a bright light), sample those more often — and divide each sample by how likely it was, so the average stays honest. Good importance sampling can remove most of the noise for free.

**One path per sample.** At the first hit, pick one random direction, trace it, and at *that* hit pick one more, and so on. Each pixel sample is a single path from the eye bouncing through the scene; averaging many paths per pixel integrates over all of them. To avoid infinite paths without biasing the result, terminate randomly and boost the survivors — **Russian roulette**.

## The formal version

**The Monte Carlo estimator.** To estimate $I = \int f(x)\,dx$, draw $X_1, \dots, X_N$ independently from a density $p$ that is positive wherever $f \ne 0$:

$$\hat I_N = \frac{1}{N}\sum_{k=1}^N \frac{f(X_k)}{p(X_k)}, \qquad \mathbb{E}[\hat I_N] = I, \qquad \operatorname{Var}[\hat I_N] = \frac{\sigma^2}{N}, \quad \sigma^2 = \operatorname{Var}\!\left[\frac{f(X)}{p(X)}\right].$$

In words: weight each sample by the inverse of its probability; the average converges to the integral by the law of large numbers ([`probability-theory` 4.2](../../probability-theory/lessons/04-02-laws-of-large-numbers.md)), with standard deviation $\sigma/\sqrt N$. **Halving the noise costs four times the samples.** *(card: [Monte Carlo estimator](../reference.md#monte-carlo-estimator))*

**Importance sampling.** The variance $\sigma^2$ depends on $p$. If $p \propto f$ exactly, every sample returns $I$ and $\sigma = 0$. In practice, choose $p$ roughly proportional to the known factors of $f$. The same reweighting idea is developed for off-policy learning in [`reinforcement-learning` 2.6](../../reinforcement-learning/lessons/02-06-off-policy-learning-importance-sampling.md). *(card: [Importance sampling](../reference.md#importance-sampling))*

**Two hemisphere densities** (with respect to solid angle):

| strategy | $p(\omega)$ | sample it by | estimator for $\int L_i\cos\theta\,d\omega$ |
|---|---|---|---|
| uniform | $\dfrac{1}{2\pi}$ | $\cos\theta = u_1$, $\phi = 2\pi u_2$ | $2\pi\,L_i\cos\theta$ |
| cosine-weighted | $\dfrac{\cos\theta}{\pi}$ | $\cos\theta = \sqrt{u_1}$, $\phi = 2\pi u_2$ | $\pi\,L_i$ |

with $u_1, u_2$ uniform on $[0, 1)$. For a Lambertian surface, cosine-weighted sampling cancels both the BRDF's $1/\pi$ and the cosine: the one-sample estimate of reflected radiance is simply $\rho\,L_i$.

**The path tracing estimator.** At a hit $\mathbf{x}$ seen from direction $\omega_o$, sample one direction $\omega_i \sim p$ and estimate

$$L_o(\mathbf{x}, \omega_o) \approx L_e(\mathbf{x}, \omega_o) + \frac{f_r(\omega_i, \omega_o)\,L_i(\mathbf{x}, \omega_i)\cos\theta_i}{p(\omega_i)},$$

where $L_i$ is itself estimated recursively by tracing the ray. Along a path, the factors $f_r\cos\theta/p$ multiply into a **throughput** $\beta$, and the pixel estimate is $\sum_{\text{bounces}} \beta \cdot L_e$. *(card: [Path tracing](../reference.md#path-tracing))*

**Russian roulette.** At each bounce, continue with probability $q$ and, if continuing, divide the throughput by $q$:

$$\hat L = \begin{cases} \hat L_{\text{continue}}/q & \text{with probability } q \\ 0 & \text{with probability } 1 - q \end{cases} \qquad \mathbb{E}[\hat L] = q\cdot\frac{\mathbb{E}[\hat L_{\text{continue}}]}{q} = \mathbb{E}[\hat L_{\text{continue}}].$$

In words: killing a path randomly is unbiased if the survivors carry the dead paths' share. It adds variance (a sure contribution $X$ becomes $X/q$ or $0$, with variance $X^2(1 - q)/q$), so $q$ is usually set from the throughput: dim paths die, bright ones continue. With constant $q$ the number of bounces is geometric, with mean $1/(1-q)$. *(card: [Russian roulette](../reference.md#russian-roulette))*

**Next-event estimation.** A small light is almost never hit by a randomly sampled direction. So at each bounce also **sample the light directly** — pick a point on it, cast a shadow ray ([3.3](03-03-ray-casting-and-intersection.md)), add its contribution — and don't count a random direction that happens to hit a light (or combine the two strategies with weights). This is [3.3](03-03-ray-casting-and-intersection.md)'s shadow ray made physically correct.

**Cost.** Rays per frame $\approx$ pixels $\times$ samples per pixel $\times$ mean path length $\times$ rays per bounce (one continuation, plus one shadow ray with next-event estimation).

## Picture

![A log-log plot of relative error against samples per estimate from 1 to 1024. A coral line for uniform hemisphere sampling falls from about 100% at one sample, following 1.04 over the square root of N, to about 3% at 1024. A parallel blue line for cosine-weighted sampling runs lower, following 0.577 over the square root of N, from about 58% to under 2%. Coral and blue dots from 2000 simulated estimates each sit on their lines](assets/03-07-fig1.svg)

Both lines have slope $-\tfrac12$ — that is Monte Carlo's fixed exchange rate. Importance sampling doesn't change the slope; it lowers the line. Here the blue line is a factor $1.8$ lower, which is worth $3.2\times$ fewer samples for the same noise.

## Worked examples

**Example 1 (mechanical): the courtyard, sampled two ways.** [3.6](03-06-radiometry-brdfs-rendering-equation.md)'s courtyard floor sees uniform sky radiance $L$ for $\theta < 60°$ and black walls elsewhere; the true irradiance is $E = 0.75\,\pi L$.

*Uniform hemisphere sampling.* Each sample returns $Y = 2\pi L\cos\theta$ if $\theta < 60°$ (i.e. $\cos\theta > 0.5$) and 0 otherwise, with $\cos\theta$ uniform on $[0,1]$:

$$\mathbb{E}[Y] = 2\pi L\int_{0.5}^1 c\,dc = 2\pi L(0.375) = 0.75\,\pi L \ \checkmark, \qquad \mathbb{E}[Y^2] = 4\pi^2L^2\int_{0.5}^1 c^2\,dc = \tfrac{7}{6}\pi^2L^2.$$

$\sigma^2 = \pi^2L^2(1.1667 - 0.5625) = 0.604\,\pi^2L^2$, so $\sigma = 0.777\,\pi L$ and the relative error of one sample is $0.777/0.75 = \mathbf{1.036}$.

*Cosine-weighted sampling.* Each sample returns $Y = \pi L$ if $\theta < 60°$ and 0 otherwise. Under this density $\cos^2\theta$ is uniform, so $P(\cos\theta > 0.5) = P(\cos^2\theta > 0.25) = 0.75$:

$$\mathbb{E}[Y] = 0.75\,\pi L \ \checkmark, \qquad \sigma^2 = \pi^2L^2(0.75)(0.25) = 0.1875\,\pi^2L^2,$$

relative error $0.433/0.75 = \mathbf{0.577}$.

*Samples for 1% error.* $N = (\text{relative error}/0.01)^2$: **10,740** uniform versus **3,334** cosine-weighted. (A simulation of 2000 estimates at each $N$ reproduces both curves in the Picture to within sampling error.) The remaining noise under cosine sampling comes entirely from the walls: a sample either sees sky or doesn't.

**Example 2 (why you'd care): pricing a frame.** A 1080p frame ($2{,}073{,}600$ pixels) at 256 samples per pixel, Russian roulette with constant $q = 0.7$ (mean $1/0.3 = 3.33$ bounces), and next-event estimation (2 rays per bounce):

$$2{,}073{,}600 \times 256 \times 3.33 \times 2 \approx 3.5 \times 10^9 \text{ rays}.$$

At $10^7$ rays per second (a fast CPU) that is **six minutes** per frame; at $10^8$ (a GPU with hardware BVH traversal, [3.5](03-05-acceleration-structures.md)) about 35 seconds. Film renderers spend hours per frame on scenes far more complex than this; real-time path tracers use 1–4 samples per pixel and an AI or statistical **denoiser** to hide the remaining $50\%$-scale noise.

*Why next-event estimation.* Suppose the only light is a small lamp subtending $10^{-3}$ sr near the normal. A cosine-sampled direction hits it with probability about $10^{-3}\cos\theta/\pi \approx 3.2 \times 10^{-4}$ — one path in 3,100. Without direct light sampling, almost every sample returns black and a rare few return a huge value: an image of fireflies. Sampling the lamp directly makes every path see it.

## Watch out

- **You might think** more bounces or more samples make a path tracer "more accurate" in the sense of less biased — **but actually** a correct path tracer (with Russian roulette instead of a hard depth cap) is **unbiased** at any sample count; more samples only reduce **variance**. A hard maximum depth, by contrast, is biased: it systematically darkens scenes with a lot of inter-reflection.
- **You might think** importance sampling means sampling only the important directions — **but actually** $p$ must be non-zero wherever the integrand is non-zero, or those contributions are silently lost and the estimator becomes biased. Dividing by $p$ is what keeps rarely-chosen directions correctly weighted.
- **You might think** Russian roulette reduces noise because it saves time — **but actually** it *adds* noise per path; it reduces noise per unit **time**, by spending the saved work on more paths where they matter. Terminating bright paths early is a false economy.

## One-liner

> Average $f/p$ over random samples and the rendering equation's integral comes out right on average, with noise $\sigma/\sqrt N$ — so sample directions in proportion to what matters, sample lights directly, and end paths by Russian roulette rather than a hard cap.

## Problems

**P1 (🟢)** Estimate $I = \int_0^1 x^2\,dx$ $(= \tfrac13)$.
(a) Uniform samples $x = 0.1, 0.4, 0.7, 0.9$: give the estimate.
(b) Samples drawn from $p(x) = 2x$: $x = 0.3, 0.6, 0.8, 0.95$. Give the estimate.
(c) Compute the per-sample variance under each density. By what factor does importance sampling reduce the samples needed for a given error?

**P2 (🟡)** A test render at 16 samples per pixel shows 8% relative noise in a grey region and takes 90 seconds.
(a) How many samples per pixel for 2% noise, and how long will it take?
(b) Switching from uniform to cosine-weighted hemisphere sampling cuts the per-sample relative error from $1.036$ to $0.577$ for this lighting. How many samples per pixel now give 2%?
(c) A colleague proposes capping every path at 2 bounces "to make it faster and remove noise." What does that do to the image of a white room?

**P3 (🔴)** A path's continuation contributes a value $X$.
(a) Show that Russian roulette with survival probability $q$ gives an unbiased estimate of $X$.
(b) If $X = 1$ exactly (no other randomness), compute the variance with $q = 0.7$.
(c) With constant $q = 0.7$ at every bounce, what is the expected number of bounces per path (counting the first), and the probability that a path makes at least 5?
(d) In a white room (every bounce carries throughput $0.9$), explain why choosing $q$ equal to the current throughput is better than constant $q = 0.5$.

<details>
<summary>Solutions</summary>

**P1**

(a) $f(x) = x^2$, $p = 1$: $\tfrac14(0.01 + 0.16 + 0.49 + 0.81) = \mathbf{0.3675}$.

(b) $f/p = x^2/2x = x/2$: $\tfrac14(0.15 + 0.30 + 0.40 + 0.475) = \mathbf{0.3313}$.

(c) Uniform: $\operatorname{Var}[X^2] = \mathbb{E}[X^4] - \tfrac19 = \tfrac15 - \tfrac19 = \mathbf{0.0889}$.

Importance: $\mathbb{E}_p[(X/2)^2] = \int_0^1 \tfrac{x^2}{4}\cdot 2x\,dx = \tfrac18$, so $\operatorname{Var} = \tfrac18 - \tfrac19 = \mathbf{0.0139}$.

Ratio $0.0889/0.0139 = \mathbf{6.4}$: importance sampling needs $6.4\times$ fewer samples for the same error. (The single estimates in (a) and (b) are one draw each; they illustrate the method, not the variance.)

**P2**

(a) Noise $\propto 1/\sqrt N$: going from 8% to 2% is a factor of 4, so $N$ grows by 16: **256 spp**. Time scales with $N$: $90 \times 16 = $ **1440 s** (24 minutes).

(b) At 16 spp uniform, $8\% = 1.036/\sqrt{16}\times(\text{scene factor})$; the scene factor cancels in ratios. Cosine sampling reduces the per-sample error by $1.036/0.577 = 1.795$, so the sample count for a given error falls by $1.795^2 = 3.22$: $256/3.22 = 79.4$, so **80 spp** (about 450 s).

(c) It **biases** the image dark. In a white room most of the light reaching the camera has bounced many times (each bounce keeps most of it), so truncating at 2 bounces discards a large fraction of the energy. The noise does drop, but only because a real contribution was removed — the result converges, cleanly, to the wrong image.

**P3**

(a) $\mathbb{E}[\hat X] = q\cdot\dfrac{X}{q} + (1 - q)\cdot 0 = X$. ✓

(b) $\hat X = 1/0.7 = 1.4286$ with probability $0.7$, else $0$. $\mathbb{E}[\hat X^2] = 0.7 \times 2.0408 = 1.4286$, so $\operatorname{Var} = 1.4286 - 1 = \mathbf{0.4286}$ $(= (1 - q)/q)$. A zero-variance quantity has become noisy.

(c) The number of bounces is 1 plus a geometric number of continuations: $\mathbb{E} = 1 + q + q^2 + \cdots = 1/(1 - q) = \mathbf{3.33}$. At least 5 bounces requires 4 survivals: $0.7^4 = \mathbf{0.240}$.

(d) With throughput-based $q$, a path whose contribution is still large (throughput near 1 after a few white bounces) almost always continues, so the boosting factor $1/q$ stays near 1 and adds little variance; paths that have become dim die early, where killing them costs little. Constant $q = 0.5$ kills half of the still-bright paths at every bounce and doubles the survivors' weight, injecting large variance exactly where the image's energy is.

</details>

## Flashback

**From Lesson 3.5 (acceleration structures):** A BVH node's box is $[0, 2]^3$. A ray starts at $(-1, 0.5, 3)$ with direction $(1, 0.25, -1)$.
(a) Run the slab test and give the entry and exit parameters and the entry point.
(b) The traversal has already found a hit at $t_{\text{best}} = 2.5$ in a sibling. Must it open this node?
(c) What if $t_{\text{best}}$ had been $0.8$?

<details>
<summary>Solution</summary>

(a) $x$: $(0 + 1)/1 = 1$, $(2 + 1)/1 = 3$, interval $[1, 3]$. $y$: $(0 - 0.5)/0.25 = -2$, $(2 - 0.5)/0.25 = 6$, interval $[-2, 6]$. $z$: $(0 - 3)/(-1) = 3$, $(2 - 3)/(-1) = 1$, interval $[1, 3]$.

$t_{\text{enter}} = \max(1, -2, 1) = \mathbf{1}$, $t_{\text{exit}} = \min(3, 6, 3) = \mathbf{3}$: hit. Entry point: $(-1, 0.5, 3) + 1(1, 0.25, -1) = \mathbf{(0,\ 0.75,\ 2)}$, the corner edge where $x = 0$ meets $z = 2$.

(b) **Yes.** The box is entered at $t = 1 < 2.5$, so it might contain a hit nearer than the current best.

(c) **No.** Everything in the box lies at $t \ge 1 > 0.8$, so nothing inside can beat the current best; the node is pruned without opening it.

</details>

## Connections

- **Backward:** the integrand is [3.6](03-06-radiometry-brdfs-rendering-equation.md)'s rendering equation; each sampled direction is a ray answered by [3.3](03-03-ray-casting-and-intersection.md) and [3.5](03-05-acceleration-structures.md); next-event estimation is [3.3](03-03-ray-casting-and-intersection.md)'s shadow ray with correct weights; convergence is [`probability-theory` 4.2](../../probability-theory/lessons/04-02-laws-of-large-numbers.md)'s law of large numbers, and the $1/\sqrt N$ rate is the central limit theorem of [`probability-theory` 4.5](../../probability-theory/lessons/04-05-central-limit-theorem.md).
- **Forward:** Module 4 supplies the geometry these paths bounce off. The same estimator underlies [`reinforcement-learning` 2.1](../../reinforcement-learning/lessons/02-01-monte-carlo-prediction.md)'s Monte Carlo returns — a path through a scene and an episode through an MDP are both sampled trajectories whose products of weights are averaged.
- **Sideways:** "error $\propto 1/\sqrt N$ independent of dimension" is exactly why Monte Carlo beats quadrature for the infinite-dimensional path integral here, as it does for high-dimensional option pricing in [`mathematical-finance`](../../mathematical-finance/syllabus.md) and randomized counting in [`algorithms` 4.4](../../algorithms/lessons/04-04-randomized-algorithms.md).
