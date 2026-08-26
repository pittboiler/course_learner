# Communication Systems · Lesson 3.2: Optimal detection in AWGN

> ⏱ ~15 min · Module 3: Detection, Digital Modulation & BER · Builds on: [3.1 Signal space and the matched filter](03-01-signal-space-matched-filter.md), [`prob-stat-refresher` 4.3](../../prob-stat-refresher/lessons/04-03-hypothesis-testing.md) · Unlocks: [3.3 Binary modulation and BER](03-03-binary-modulation-ber.md), [3.5 QAM and the union bound](03-05-qam-and-union-bound.md)

## Why this matters

[3.1](03-01-signal-space-matched-filter.md) turned the received waveform into a point $\mathbf{r}$ in a $K$-dimensional space, with the $M$ possible transmitted signals sitting at known points $\mathbf{s}_1,\dots,\mathbf{s}_M$. The remaining question is the only one left: **given where $\mathbf{r}$ landed, which $\mathbf{s}_m$ was sent?**

This lesson answers it optimally, and the answer is disarmingly simple — *pick the nearest one*. Everything that follows in the course is a computation of how often "nearest" is wrong, and every such computation reduces to one function, the Gaussian tail $Q(\cdot)$. Get comfortable with $Q$ here; it appears in every remaining lesson of Module 3.

## The idea

The noise cloud around the true signal point is isotropic — round, the same in every direction. So the probability of landing at a particular place falls off with distance from the transmitted point, and *only* with distance. That makes the best guess obvious: whichever signal point is closest to where you landed is the one that most plausibly produced it.

The decision regions that follow are pure geometry. For two points, the boundary is the perpendicular bisector of the line joining them: land on this side, guess $\mathbf{s}_1$; land on that side, guess $\mathbf{s}_2$. For $M$ points, the space divides into $M$ cells, each cell being the set of points closer to its own signal than to any other. (Those cells have a name — the Voronoi tessellation — and they are always convex polytopes bounded by perpendicular bisectors.)

An error happens when noise pushes the received point across a boundary. So the error probability depends on how far the transmitted point sits from the *nearest* boundary — which is half the distance to the *nearest* neighbouring signal. **Minimum distance is the whole story.**

One refinement, then a simplification. If the symbols are not equally likely, or don't have equal energy, "nearest" needs adjusting — a common symbol should get a slightly bigger cell. That is the difference between [MAP and ML detection](../reference.md#ml-and-map-detection). But in practice symbols *are* equally likely — source coding upstream sees to that — and then MAP, ML and minimum-distance are all the same rule.

## The formal version

**The problem.** Observe $\mathbf{r} = \mathbf{s}_m+\mathbf{w}$, where $\mathbf{w}$ has independent $\mathcal{N}(0, N_0/2)$ components. Decide which $m$.

**Likelihood.** Given $\mathbf{s}_m$ was sent, the conditional density of $\mathbf{r}$ is the product of $K$ Gaussians:

$$f(\mathbf{r}\mid\mathbf{s}_m) = \frac{1}{(\pi N_0)^{K/2}}\exp\left(-\frac{\|\mathbf{r}-\mathbf{s}_m\|^2}{N_0}\right).$$

*In words: the probability of landing at $\mathbf{r}$ falls off as a Gaussian in the distance from the transmitted point.*

**MAP rule (minimize error probability).** Choose $m$ maximizing the posterior $P(\mathbf{s}_m\mid\mathbf{r}) \propto f(\mathbf{r}\mid \mathbf{s}_m)P(\mathbf{s}_m)$:

$$\hat m = \arg\max_m\ \left[-\frac{\|\mathbf{r}-\mathbf{s}_m\|^2}{N_0} + \ln P(\mathbf{s}_m)\right].$$

**ML rule (equal priors).** If all $P(\mathbf{s}_m) = 1/M$, the prior term is constant and drops out:

$$\hat m = \arg\max_m f(\mathbf{r}\mid\mathbf{s}_m) = \arg\min_m\|\mathbf{r}-\mathbf{s}_m\|^2 .$$

*In words: with equally likely symbols, maximum likelihood is exactly minimum distance.*

**Equivalent form: the correlation metric.** Expanding the square,

$$\|\mathbf{r}-\mathbf{s}_m\|^2 = \|\mathbf{r}\|^2 - 2\langle\mathbf{r},\mathbf{s}_m\rangle + \|\mathbf{s}_m\|^2 .$$

$\|\mathbf{r}\|^2$ is the same for every $m$, so minimizing distance is equivalent to maximizing

$$\boxed{\;\eta_m = \langle\mathbf{r},\mathbf{s}_m\rangle - \frac{E_m}{2}\;}$$

*In words: correlate the received vector with each candidate and subtract half that candidate's energy.* This is the form receivers actually build — a bank of correlators plus an energy-bias subtraction — and it shows immediately that **for equal-energy constellations the bias vanishes and detection is pure correlation**. Which is why PSK receivers are simpler than QAM receivers.

**Decision regions.** $Z_m = \{\mathbf{r}: \|\mathbf{r}-\mathbf{s}_m\| < \|\mathbf{r}-\mathbf{s}_k\| \ \forall k\ne m\}$. Each $Z_m$ is the intersection of half-planes bounded by perpendicular bisectors, hence convex.

**The Q-function.** Define the tail of the standard normal:

$$Q(x) = \int_x^{\infty}\frac{1}{\sqrt{2\pi}}e^{-u^2/2}du = P(Z>x), \qquad Z\sim\mathcal{N}(0,1).$$

*In words: $Q(x)$ is the probability that a standard Gaussian exceeds $x$.* Properties worth memorizing:

| Fact | Statement |
|---|---|
| Symmetry | $Q(-x) = 1-Q(x)$, $Q(0)=\tfrac12$ |
| Relation to erfc | $Q(x) = \tfrac12\operatorname{erfc}(x/\sqrt2)$ |
| Bound (tight for large $x$) | $Q(x) \le \tfrac12e^{-x^2/2}$ |
| Approximation | $Q(x)\approx \dfrac{e^{-x^2/2}}{x\sqrt{2\pi}}$ for $x\gtrsim3$ |

Useful values: $Q(1)=0.159$, $Q(2)=2.28\times10^{-2}$, $Q(3)=1.35\times10^{-3}$, $Q(4)=3.17\times10^{-5}$, $Q(5)=2.87\times10^{-7}$, $Q(6)=9.87\times10^{-10}$. Note how violently it falls — that steepness is why BER curves are cliffs, and why 1 dB of extra power can buy an order of magnitude in error rate.

**Pairwise error probability — the master formula.** Suppose only two signals existed, $\mathbf{s}_i$ and $\mathbf{s}_j$, at distance $d_{ij}$. An error requires the noise component *along the line joining them* to exceed half that distance. That component is a single $\mathcal{N}(0,N_0/2)$ variable, so

$$\boxed{\;P(\mathbf{s}_i\to\mathbf{s}_j) = Q\!\left(\frac{d_{ij}}{\sqrt{2N_0}}\right) = Q\!\left(\sqrt{\frac{d_{ij}^2}{2N_0}}\right).\;}$$

*In words: the chance of mistaking one signal for another depends only on the distance between them, measured in units of the noise's standard deviation.* Every error probability in the rest of the course is this formula, plus bookkeeping about how many neighbours there are.

**Rotation and translation invariance.** Rotating the whole constellation changes no distance, so it changes no error probability — but it changes the energies $\|\mathbf{s}_m\|^2$ not at all either (rotation preserves norms). **Translating** the constellation also preserves all distances, hence performance, but *does* change the average energy. Consequently the minimum-energy version of any constellation is the one centred at the origin: subtract the mean. This is exactly why polar signalling beats unipolar ([2.3](02-03-line-codes-baseband-pulses.md)) — the unipolar constellation $\{0, A\}$ is a translated version of $\{-A/2, +A/2\}$, with the same distance and twice the energy.

## Picture

![A two-panel figure. Left: two signal points on a line with a perpendicular bisector, Gaussian bells centred on each, and the overlapping tail beyond the boundary shaded to show the error probability. Right: an eight-point constellation with its Voronoi decision regions drawn as a set of wedge-shaped cells, with the minimum distance between two adjacent points marked and half of it marked as the distance to the boundary.](assets/03-02-fig1.svg)

Left is the entire theory in one image: two candidate points, a boundary halfway between, and the shaded tail of the Gaussian that has crossed it. The area of that tail is $Q(d/\sqrt{2N_0})$. Right generalizes it: with many signals the space is carved into cells, and a symbol errs when noise carries it out of its own cell — most easily across the *nearest* wall, at distance $d_{\min}/2$.

## Worked examples

**Example 1 (binary detection from first principles).** Two equally likely signals at $\mathbf{s}_1 = +\sqrt{E_b}$ and $\mathbf{s}_2 = -\sqrt{E_b}$ on a line (antipodal — Example 1 of [3.1](03-01-signal-space-matched-filter.md)). Find the error probability.

*Decision rule.* Equal priors and equal energies, so ML = minimum distance, and the boundary is the perpendicular bisector: the point $r=0$. Decide $\mathbf{s}_1$ if $r>0$.

*Error given $\mathbf{s}_1$ sent.* Then $r = \sqrt{E_b}+w$ with $w\sim\mathcal{N}(0, N_0/2)$. An error means $r<0$:

$$P(e\mid\mathbf{s}_1) = P\big(w < -\sqrt{E_b}\big) = P\left(\frac{w}{\sqrt{N_0/2}} < -\frac{\sqrt{E_b}}{\sqrt{N_0/2}}\right) = Q\left(\frac{\sqrt{E_b}}{\sqrt{N_0/2}}\right) = Q\!\left(\sqrt{\frac{2E_b}{N_0}}\right).$$

By symmetry $P(e\mid\mathbf{s}_2)$ is the same, so

$$P_b = Q\!\left(\sqrt{\frac{2E_b}{N_0}}\right).$$

*Check against the master formula.* $d_{12} = 2\sqrt{E_b}$, so $d^2 = 4E_b$ and

$$Q\!\left(\sqrt{\frac{4E_b}{2N_0}}\right) = Q\!\left(\sqrt{\frac{2E_b}{N_0}}\right)\ \checkmark.$$

*Numbers.* At $E_b/N_0 = 9.6$ dB $= 9.12$: $\sqrt{2(9.12)} = 4.27$, and $Q(4.27)\approx 9.8\times10^{-6}$ — about one error in $10^5$ bits. At 12.6 dB (3 dB more): $\sqrt{2(18.2)} = 6.03$, $Q(6.03)\approx 8\times10^{-10}$. **Three decibels bought four orders of magnitude.** That extreme sensitivity is the shape of every BER curve you will draw.

**Example 2 (unequal priors — when "nearest" is wrong).** Same two points, but now $P(\mathbf{s}_1) = 0.9$ and $P(\mathbf{s}_2)=0.1$. Where should the boundary go?

The MAP rule maximizes $-\dfrac{(r-s_m)^2}{N_0}+\ln P(\mathbf{s}_m)$. Setting the two metrics equal at the boundary $r^*$:

$$-\frac{(r^*-\sqrt{E_b})^2}{N_0}+\ln(0.9) = -\frac{(r^*+\sqrt{E_b})^2}{N_0}+\ln(0.1).$$

Expanding, the $r^{*2}$ and $E_b$ terms cancel:

$$\frac{4r^*\sqrt{E_b}}{N_0} = \ln(0.1)-\ln(0.9) = \ln(1/9) = -2.197,$$

$$r^* = -\frac{2.197\,N_0}{4\sqrt{E_b}} = -0.549\frac{N_0}{\sqrt{E_b}}.$$

The boundary moves **toward the less likely signal**, enlarging the cell of the more likely one — exactly the right instinct. How much it moves depends on the SNR: at $E_b/N_0 = 10$, taking $N_0=1$ so $\sqrt{E_b}=3.16$, we get $r^* = -0.174$, a shift of only 5.5% of the distance from the origin to a signal point.

That smallness is the practical lesson. **At useful SNRs the prior barely matters**, because the likelihood term scales with $E_b/N_0$ while the prior term does not. A 9:1 prior imbalance is worth a 5% boundary shift at 10 dB and less at higher SNR. This is why every practical receiver uses ML and ignores priors — and why source coding, which makes symbols equiprobable anyway, removes even that residue. (The exception is *soft-decision decoding* in [4.4](04-04-convolutional-codes-viterbi.md), where the decoder's evolving belief about earlier bits acts as a strong, data-dependent prior on later ones. There the prior is worth several dB, because it comes from the code structure rather than from symbol statistics.)

## Watch out

- **You might think minimum-distance detection is a heuristic.** It is provably optimal — it minimizes error probability — for equally likely, equal-energy signals in AWGN. Both conditions matter: unequal priors shift the boundary (Example 2), and unequal energies introduce the $-E_m/2$ bias in the correlation metric.
- **You might think the noise variance per coordinate is $N_0$.** It is $N_0/2$. This is the single most common slip in the subject, and it costs exactly 3 dB — enough to change a design decision.
- **You might think $Q(x)$ and $\operatorname{erfc}(x)$ are the same function.** $Q(x) = \tfrac12\operatorname{erfc}(x/\sqrt2)$. Textbooks and software split between the two conventions; check which one your tool uses before trusting a number.
- **You might think you can improve performance by rotating the constellation.** Rotation preserves all distances and all energies, so it changes nothing. *Translation* preserves distances but changes energy — which is why you always centre a constellation at the origin.
- **You might think error probability depends on all the distances.** At useful SNRs it is dominated by $d_{\min}$ alone, because $Q$ falls so steeply that any larger distance contributes a negligible term. Design for minimum distance; count neighbours only as a second-order correction ([3.5](03-05-qam-and-union-bound.md)).

## One-liner

> Pick the nearest signal point; the chance you are wrong is $Q$ of half the distance to your nearest neighbour, measured in noise standard deviations.

## Problems

**P1 (🟢)** Two equally likely signals sit at $\mathbf{s}_1 = (3,0)$ and $\mathbf{s}_2 = (0,4)$ in a signal space with $N_0/2 = 1$. (a) Find their energies and the distance between them. (b) Find the error probability. (c) Translate the constellation so its mean is at the origin; give the new coordinates, energies, and error probability, and comment.

**P2 (🟡)** Three equally likely signals at $\mathbf{s}_1 = (-a, 0)$, $\mathbf{s}_2 = (0,0)$, $\mathbf{s}_3 = (a,0)$ — 3-level PAM. (a) Describe the decision regions. (b) Find $P(e\mid\mathbf{s}_2)$ and $P(e\mid\mathbf{s}_1)$ in terms of $Q$. (c) Find the average symbol error probability. (d) Explain why the *outer* points have lower error probability, and what that suggests about constellation design.

**P3 (🔴)** A binary system has $P(\mathbf{s}_1) = p$ and $P(\mathbf{s}_2)=1-p$, with $\mathbf{s}_{1,2} = \pm\sqrt{E_b}$ and noise variance $N_0/2$. (a) Derive the MAP threshold $r^*$ in general. (b) Write the total error probability with the optimal threshold. (c) Show that as $E_b/N_0\to\infty$ the optimal threshold approaches 0 and quantify the loss from using $r^*=0$ instead. (d) At what $E_b/N_0$ does using the ML threshold instead of the MAP one cost more than 0.1 dB, for $p = 0.9$?

<details>
<summary>Solutions</summary>

**P1** (a) $E_1 = 3^2+0 = 9$; $E_2 = 0+4^2 = 16$.

$$d_{12} = \|(3,-4)\| = \sqrt{9+16} = 5 .$$

(b) $N_0/2 = 1 \Rightarrow N_0 = 2$:

$$P_e = Q\!\left(\frac{d}{\sqrt{2N_0}}\right) = Q\!\left(\frac{5}{\sqrt{4}}\right) = Q(2.5) = 6.21\times10^{-3}.$$

(c) Mean is $\big(\tfrac{3+0}{2}, \tfrac{0+4}{2}\big) = (1.5, 2)$. Subtracting it:

$$\mathbf{s}_1' = (1.5,-2), \qquad \mathbf{s}_2' = (-1.5, 2).$$

Energies: $E_1' = E_2' = 2.25+4 = 6.25$, so the *average* energy fell from $(9+16)/2 = 12.5$ to $6.25$ — **exactly halved**. Distance is unchanged ($\|(3,-4)\|=5$), so $P_e = Q(2.5)$ as before.

Comment: same performance, half the energy. Centring a constellation at the origin is free performance-per-watt, and it is exactly the antipodal-versus-unipolar 3 dB from [2.3](02-03-line-codes-baseband-pulses.md), now visible as a translation. Note also that the centred pair is antipodal ($\mathbf{s}_2' = -\mathbf{s}_1'$), which [3.1](03-01-signal-space-matched-filter.md) P3 showed is optimal.

**P2** (a) One dimension, three points at $-a, 0, a$. Boundaries at the perpendicular bisectors: $r = -a/2$ and $r=+a/2$. So $Z_1 = (-\infty,-a/2)$, $Z_2 = (-a/2, a/2)$, $Z_3 = (a/2,\infty)$.

(b) The noise is $\mathcal{N}(0, N_0/2)$, so with $\sigma = \sqrt{N_0/2}$:

*Inner point:* error if $|w| > a/2$ — **two** ways to be wrong:

$$P(e\mid\mathbf{s}_2) = 2Q\!\left(\frac{a/2}{\sigma}\right) = 2Q\!\left(\frac{a}{2}\sqrt{\frac{2}{N_0}}\right) = 2Q\!\left(\sqrt{\frac{a^2}{2N_0}}\right).$$

*Outer point:* error only if noise pushes inward past $-a/2$ — **one** way:

$$P(e\mid\mathbf{s}_1) = Q\!\left(\sqrt{\frac{a^2}{2N_0}}\right) = P(e\mid\mathbf{s}_3).$$

(c) Averaging over three equally likely symbols:

$$P_e = \frac{1}{3}\left[Q + 2Q + Q\right] = \frac{4}{3}Q\!\left(\sqrt{\frac{a^2}{2N_0}}\right).$$

(General $M$-PAM: $P_e = \dfrac{2(M-1)}{M}Q(\cdot)$; at $M=3$ that is $\tfrac43 Q$ ✓.)

(d) The outer points have only **one** neighbour, so noise can only carry them across one boundary; the inner point is flanked on both sides and has twice the exposure. The design implication: error probability is set by $d_{\min}$ *and* by the **average number of nearest neighbours**. A good constellation minimizes both — pack points at maximum minimum distance while keeping the neighbour count low, which is why hexagonal packings (6 neighbours, best distance) and rectangular QAM (corner points with only 2 neighbours) show up in practice. It also explains why $P_e$ improves slightly for larger $M$-PAM than the naive $2Q$ would suggest: the fraction of "sheltered" outer points is $2/M$.

**P3** (a) Setting the MAP metrics equal:

$$-\frac{(r^*-\sqrt{E_b})^2}{N_0}+\ln p = -\frac{(r^*+\sqrt{E_b})^2}{N_0}+\ln(1-p).$$

The $r^{*2}$ and $E_b$ terms cancel, leaving $\dfrac{4r^*\sqrt{E_b}}{N_0} = \ln\dfrac{1-p}{p}$:

$$\boxed{\ r^* = \frac{N_0}{4\sqrt{E_b}}\ln\frac{1-p}{p}\ }$$

(For $p>1/2$ the log is negative and $r^*<0$: the boundary moves toward the less likely signal ✓.)

(b) $$P_e = p\,P(r<r^*\mid \mathbf{s}_1) + (1-p)P(r>r^*\mid\mathbf{s}_2) = p\,Q\!\left(\frac{\sqrt{E_b}-r^*}{\sigma}\right) + (1-p)Q\!\left(\frac{\sqrt{E_b}+r^*}{\sigma}\right),$$

with $\sigma = \sqrt{N_0/2}$.

(c) $r^*\propto N_0/\sqrt{E_b} = \sqrt{N_0}\cdot\sqrt{N_0/E_b}$. Normalizing by the signal amplitude:

$$\frac{r^*}{\sqrt{E_b}} = \frac{N_0}{4E_b}\ln\frac{1-p}{p} \;\longrightarrow\; 0 \quad\text{as } \frac{E_b}{N_0}\to\infty .$$

So the optimal threshold approaches the ML threshold 0, at rate $1/(E_b/N_0)$.

*Loss from using 0.* With $r^*=0$ the error probability is $Q(\sqrt{2E_b/N_0})$ regardless of $p$ (both conditional errors equal, and the weights sum to 1). With the optimal threshold it is strictly smaller. The difference is second order: shifting the threshold by $\epsilon$ from the optimum changes $P_e$ by $O(\epsilon^2)$, because the optimum is a stationary point.

(d) With $p=0.9$, $\ln(1/9) = -2.197$, so $r^*/\sqrt{E_b} = -0.549\,N_0/E_b$. Write $\gamma = E_b/N_0$ and $\delta = |r^*|/\sqrt{E_b} = 0.549/\gamma$. The MAP error probability is

$$P_e^{\rm MAP} = 0.9\,Q\big(\sqrt{2\gamma}(1+\delta)\big) + 0.1\,Q\big(\sqrt{2\gamma}(1-\delta)\big),$$

versus $P_e^{\rm ML} = Q(\sqrt{2\gamma})$.

Evaluate at a few $\gamma$. At $\gamma = 4$ (6.0 dB): $\delta = 0.137$, $\sqrt{2\gamma} = 2.83$; $P^{\rm MAP} = 0.9\,Q(3.22)+0.1\,Q(2.44) = 0.9(6.4\times10^{-4})+0.1(7.34\times10^{-3}) = 1.31\times10^{-3}$, versus $P^{\rm ML}=Q(2.83)=2.33\times10^{-3}$. The MAP receiver is better by a factor of 1.8 — in dB terms, ML would need about $\gamma = 4.6$ (0.6 dB more) to match it.

At $\gamma = 10$ (10 dB): $\delta = 0.0549$, $\sqrt{2\gamma}=4.47$; $P^{\rm MAP} = 0.9\,Q(4.72)+0.1\,Q(4.23) = 0.9(1.18\times10^{-6})+0.1(1.17\times10^{-5}) = 2.23\times10^{-6}$ versus $P^{\rm ML} = Q(4.47) = 3.9\times10^{-6}$ — still a factor of 1.7, worth roughly 0.25 dB.

At $\gamma=20$ (13 dB): $\delta = 0.0275$, $\sqrt{2\gamma}=6.32$; $P^{\rm MAP} = 0.9Q(6.50)+0.1Q(6.15) = 0.9(4.0\times10^{-11})+0.1(3.9\times10^{-10}) = 7.5\times10^{-11}$ versus $Q(6.32)=1.3\times10^{-10}$ — a factor of 1.7 again, about 0.1 dB.

So the answer: the gap stays near a **constant factor** in probability (roughly $2\sqrt{p(1-p)}$-ish) but shrinks steadily in **dB**, crossing 0.1 dB around $E_b/N_0 \approx 13$ dB. Below about 13 dB a 9:1 prior is worth having; above it, ignore it. Since practical links run at 8–12 dB, the honest summary is that priors are worth a small fraction of a dB — real enough to be measurable, small enough that nobody builds hardware for it, and dwarfed by what an error-correcting code delivers for the same complexity.

</details>

## Flashback

**From Lesson 3.1 (Signal space and the matched filter):** Two signals have equal energy $E$ and correlation coefficient $\rho = 0.5$. (a) Find the distance between them. (b) Find the error probability with ML detection. (c) How much extra energy would an antipodal pair need to do *worse* than this?

<details>
<summary>Solution</summary>

(a) From [3.1](03-01-signal-space-matched-filter.md) P3, $d^2 = 2E(1-\rho) = 2E(0.5) = E$, so $d = \sqrt E$.

(b) $$P_e = Q\!\left(\sqrt{\frac{d^2}{2N_0}}\right) = Q\!\left(\sqrt{\frac{E}{2N_0}}\right).$$

(c) An antipodal pair of energy $E'$ has $d'^2 = 4E'$, giving $Q(\sqrt{2E'/N_0})$. It does worse when $2E'/N_0 < E/(2N_0)$, i.e. $E' < E/4$. So the antipodal pair could operate at **one quarter** the energy (6 dB less) and still match this positively-correlated pair. Correlated signals are wasteful: at $\rho = 0.5$ you are throwing away 6 dB relative to the antipodal optimum, because half of each signal's energy is pointing in the same direction as its rival and contributes nothing to distinguishing them.

</details>

## Connections

- **Backward:** ML detection is the likelihood-ratio test of [`prob-stat-refresher` 4.3](../../prob-stat-refresher/lessons/04-03-hypothesis-testing.md), applied to the geometry built in [3.1](03-01-signal-space-matched-filter.md).
- **Forward:** [3.3](03-03-binary-modulation-ber.md) evaluates $Q(d/\sqrt{2N_0})$ for the standard binary schemes; [3.5](03-05-qam-and-union-bound.md) extends it to many neighbours via the union bound.
- **Sideways:** Voronoi decision regions are the same construction as $k$-nearest-neighbour classification in [`machine-learning`](../../machine-learning/syllabus.md), and the MAP-versus-ML distinction is the Bayesian-versus-frequentist split you meet there too — with the same conclusion that the prior stops mattering once the data is informative enough.
