# Computational Biology · Lesson 2.5: Substitution models

> ⏱ ~15 min · Module 2: Phylogenetics & evolutionary models · Builds on: [evolution-ecology 2.3](../../evolution-ecology/lessons/02-03-inferring-trees-dating.md) (the Jukes–Cantor correction, stated), [1.2](01-02-substitution-matrices-log-odds.md) (PAM as matrix powers), [2.3](02-03-neighbor-joining.md) (distances) · Unlocks: [2.6](02-06-tree-likelihood-felsenstein-pruning.md) (tree likelihood)

## Why this matters

[Evolution-ecology 2.3](../../evolution-ecology/lessons/02-03-inferring-trees-dating.md) handed you the Jukes–Cantor correction $d = -\tfrac34\ln(1 - \tfrac43 p)$ and showed that uncorrected distances saturate. It didn't say where the formula comes from, and that matters for three reasons. The formula rests on assumptions you should be able to name. Its derivation generalizes to models that relax those assumptions. And the same object — a continuous-time Markov chain on four bases — is the engine inside every likelihood calculation in phylogenetics ([2.6](02-06-tree-likelihood-felsenstein-pruning.md)).

This lesson derives Jukes–Cantor from first principles, then Kimura's two-parameter model, which lets transitions (A↔G, C↔T) happen faster than transversions, as they do in real DNA.

## The idea

Follow **one site** down one lineage. Its base changes now and then, at random moments. The model says how fast each change happens: the rate of A→G, of A→C, and so on. It also assumes the process has no memory, so the chance of changing in the next instant depends only on the current base.

From those rates we want $P_{ij}(t)$, the probability that a site that was base $i$ is base $j$ after time $t$. Two things make it interesting:

- **Multiple hits.** A site can change A→G→A and look unchanged. Or A→G→T and look like one change. The observed fraction of differences $p$ lags behind the true number of substitutions.
- **A ceiling.** Run long enough and the base is scrambled: under Jukes–Cantor, any base with probability $\tfrac14$. Two unrelated sequences still agree at a quarter of sites, so $p$ can never exceed $\tfrac34$.

So $p$ is a *saturating* function of time. Inverting it is how you turn an observed fraction back into substitutions per site. That inverse is the distance correction.

## The formal version

**Continuous-time Markov chain.** A **rate matrix** $Q$ has off-diagonal entries $Q_{ij} \ge 0$ (the rate of $i \to j$), and each row sums to zero ($Q_{ii} = -\sum_{j\ne i} Q_{ij}$). The transition probabilities over time $t$ satisfy $\frac{d}{dt}P(t) = P(t)\,Q$ with $P(0) = I$, so

$$P(t) = e^{Qt}.$$

*In words: the matrix exponential turns instantaneous rates into finite-time probabilities.* The stationary distribution $\pi$ satisfies $\pi Q = 0$. The expected number of substitutions per site in time $t$, the evolutionary **distance**, is $d = -t\sum_i \pi_i Q_{ii}$.

**Jukes–Cantor (JC69).** Every base changes to each of the other three at rate $\alpha$:

$$Q = \begin{pmatrix} -3\alpha & \alpha & \alpha & \alpha\\ \alpha & -3\alpha & \alpha & \alpha\\ \alpha & \alpha & -3\alpha & \alpha\\ \alpha & \alpha & \alpha & -3\alpha\end{pmatrix}, \qquad \pi = \left(\tfrac14,\tfrac14,\tfrac14,\tfrac14\right).$$

*Derivation.* Let $P_0(t)$ be the probability a site is unchanged. It leaves its base at total rate $3\alpha$, and a site currently showing any of the other three bases returns at rate $\alpha$:

$$\frac{dP_0}{dt} = -3\alpha P_0 + \alpha\,(1 - P_0) = \alpha - 4\alpha P_0 .$$

With $P_0(0) = 1$, this linear ODE solves to

$$P_0(t) = \tfrac14 + \tfrac34 e^{-4\alpha t}, \qquad P_{ij}(t) = \tfrac14 - \tfrac14 e^{-4\alpha t}\ \ (i \ne j).$$

The observed fraction of differing sites between a sequence and its descendant is $p = 1 - P_0 = \tfrac34\big(1 - e^{-4\alpha t}\big)$, and the distance is $d = 3\alpha t$. Eliminate $\alpha t$:

$$\boxed{\,d = -\tfrac34\ln\!\Big(1 - \tfrac43\,p\Big)\,}$$

That is the [Jukes–Cantor distance](../reference.md#jukes-cantor-distance). *In words: undo the exponential saturation to recover substitutions per site.* The same formula holds between two leaves separated by total branch length $d$, because the reversible chain can be run from one leaf up to the ancestor and down to the other.

**Kimura two-parameter (K2P).** Transitions occur at rate $\alpha$, and each of the two transversions at rate $\beta$. Let $P$ and $Q$ be the observed fractions of sites differing by a transition and by a transversion (Kimura's traditional letters — this $Q$ is a fraction, not the rate matrix). Then

$$P = \tfrac14 - \tfrac12 e^{-2(\alpha+\beta)t} + \tfrac14 e^{-4\beta t}, \qquad Q = \tfrac12 - \tfrac12 e^{-4\beta t},$$

and with $d = (\alpha + 2\beta)t$,

$$\boxed{\,d = -\tfrac12\ln(1 - 2P - Q) - \tfrac14\ln(1 - 2Q)\,}$$

This is the [Kimura two-parameter distance](../reference.md#kimura-two-parameter-distance). The pieces separate the rates: $4\beta t = -\ln(1 - 2Q)$ and $2(\alpha + \beta)t = -\ln(1 - 2P - Q)$, so $\kappa = \alpha/\beta$ can be estimated too.

**Richer models, briefly.** **GTR** (general time-reversible) allows six exchangeabilities $r_{ij}$ and unequal base frequencies, with $Q_{ij} = r_{ij}\pi_j$. **+Γ** lets each site's rate be multiplied by a gamma-distributed factor, so a few fast sites saturate while most sites stay informative. These have no neat closed-form distances, and they're used inside likelihood ([2.6](02-06-tree-likelihood-felsenstein-pruning.md)).

## Picture

![Left: observed fraction different p plotted against true substitutions per site d from 0 to 2.5. A dashed line p equals d rises steeply; the Jukes–Cantor curve bends over and approaches a dashed ceiling at 0.75. A marked point shows d equal to 1 corresponds to p of about 0.55. Right: under the Kimura model with transitions four times as fast, the transition fraction P rises quickly, peaks near 0.30 and then slowly falls, while the transversion fraction Q rises steadily past it toward 0.5.](assets/02-05-fig1.svg)

On the left, the gap between the dashed line and the curve is the multiple hits. At $d = 1$, one substitution per site on average, only 55 percent of sites look different. On the right, transitions pile up fast and then *decline*. A site that has undergone a transition is later overwritten by transversions, which Jukes–Cantor lumps together. That's why the observed transition/transversion ratio drops with divergence, and why a model that separates them gives better distances.

## Worked examples

**Example 1 (mechanical): check the formula against the matrix exponential.** Take $\alpha t = 0.1$. The closed form gives

$$P_0 = \tfrac14 + \tfrac34 e^{-0.4} = 0.25 + 0.75(0.6703) = 0.7527$$

$$P_{ij} = \tfrac14 - \tfrac14(0.6703) = 0.0824$$

and computing $e^{Qt}$ numerically with $\alpha = 1$, $t = 0.1$ gives the same two values to 16 digits. Now invert: $p = 1 - 0.7527 = 0.2473$, and

$$\begin{aligned}d &= -0.75\ln\!\big(1 - \tfrac43(0.2473)\big) \\ &= -0.75\ln(0.6703) \\ &= -0.75(-0.4) \\ &= 0.300 \\ &= 3\alpha t .\end{aligned}$$

So the observed 24.7 percent corresponds to 30 substitutions per 100 sites. The difference is hidden multiple hits.

**Example 2 (why you'd care): when transitions dominate.** Two aligned sequences differ at 14 percent of sites by transitions and 4 percent by transversions, $P = 0.14$ and $Q = 0.04$.

*Jukes–Cantor*, which sees only $p = 0.18$: $d_{JC} = -0.75\ln(1 - 0.24) = -0.75\ln 0.76 = \mathbf{0.206}$.

*Kimura:*

$$\begin{aligned}d_{K2P} &= -\tfrac12\ln(1 - 0.28 - 0.04) - \tfrac14\ln(1 - 0.08) \\ &= -\tfrac12\ln 0.68 - \tfrac14\ln 0.92 \\ &= 0.1928 + 0.0208 \\ &= \mathbf{0.214}.\end{aligned}$$

*Rates:* $4\beta t = -\ln 0.92 = 0.0834$ gives $\beta t = 0.0208$; $2(\alpha+\beta)t = -\ln 0.68 = 0.3857$ gives $\alpha t = 0.1720$. So $\hat\kappa = \alpha/\beta \approx 8.3$. Transitions happen about eight times faster per possible target, roughly what's seen in mitochondrial DNA.

JC underestimates by about 4 percent here, because the fast transition class saturates sooner than JC's pooled rate assumes. The gap widens with divergence. In a tree it isn't uniform: it shortens the longest branches most and can shift topologies.

## Watch out

- **You might think** $p$ grows linearly with time for small divergences and so needs no correction — **but actually** the correction is already 7 percent at $p = 0.10$ and 43 percent at $p = 0.40$ ([evolution-ecology 2.3](../../evolution-ecology/lessons/02-03-inferring-trees-dating.md)'s table). For tree building the relative error across branches matters, and long branches are hit hardest.
- **You might confuse** $\alpha$ with the distance — **but actually** under JC the total substitution rate per site is $3\alpha$, so $d = 3\alpha t$. Branch lengths in trees are in expected substitutions per site, not in units of $\alpha t$.
- **You might think** a distance near saturation is just a big number — **but actually** its uncertainty explodes. Near $p = \tfrac34$ a tiny change in $p$ moves $d$ enormously, and sampling noise alone can push $p$ past $\tfrac34$, where $d$ is undefined (Problem 3).

## One-liner

> A substitution model is a four-state continuous-time Markov chain with $P(t) = e^{Qt}$; solving it for Jukes–Cantor gives $p = \tfrac34(1 - e^{-4d/3})$, and inverting that — or Kimura's two-rate version — turns saturated observed differences back into substitutions per site.

## Problems

**P1 (🟢)** Under Jukes–Cantor: (a) what fraction of sites differ when $d = 1$ substitution per site? (b) Two sequences differ at 30 percent of sites; what is $d$? (c) What is $\alpha t$ in (b)?

**P2 (🟡)** A 400-site alignment shows 48 sites differing by a transition and 24 by a transversion. (a) Compute $P$, $Q$ and the K2P distance. (b) Compute the JC distance and the percentage by which it underestimates. (c) Estimate $\beta t$, $\alpha t$ and $\kappa = \alpha/\beta$.

**P3 (🔴)** Treat the $L = 1000$ aligned sites as independent, so the observed $p$ has standard error $\sqrt{p(1-p)/L}$. (a) For $p = 0.10$ and for $p = 0.72$, compute the JC distance and the distances at $p \pm 2$ SE. (b) Compare the relative widths of the two intervals. (c) Explain why deep phylogenies are built from slowly evolving genes or from protein sequences.

<details>
<summary>Solutions</summary>

**P1** (a) $p = \tfrac34\big(1 - e^{-4/3}\big) = 0.75(1 - 0.2636) = \mathbf{0.552}$.

(b) $d = -0.75\ln(1 - 0.4) = -0.75\ln 0.6 = \mathbf{0.383}$.

(c) $\alpha t = d/3 = \mathbf{0.128}$.

**P2** (a) $P = 48/400 = \mathbf{0.12}$, $Q = 24/400 = \mathbf{0.06}$.
$d_{K2P} = -\tfrac12\ln(1 - 0.24 - 0.06) - \tfrac14\ln(1 - 0.12) = -\tfrac12\ln 0.70 - \tfrac14\ln 0.88 = 0.1783 + 0.0320 = \mathbf{0.210}$.

(b) $p = 0.18$, $d_{JC} = -0.75\ln 0.76 = \mathbf{0.206}$. Underestimate: $(0.210 - 0.206)/0.210 \approx \mathbf{2}$ percent. Smaller than in Example 2, because the transition bias here is weaker.

(c) $4\beta t = -\ln 0.88 = 0.1278$, so $\beta t = \mathbf{0.0320}$. $2(\alpha + \beta)t = -\ln 0.70 = 0.3567$, so $\alpha t = 0.1783 - 0.0320 = \mathbf{0.1464}$. $\kappa = 0.1464/0.0320 \approx \mathbf{4.6}$. Check: $d = (\alpha + 2\beta)t = 0.1464 + 0.0639 = 0.2103$.

**P3** (a)

| $p$ | SE | $p \pm 2$ SE | $d(p)$ | $d$ at the ends |
|---|---|---|---|---|
| 0.10 | 0.0095 | 0.081 to 0.119 | 0.107 | 0.086 to 0.130 |
| 0.72 | 0.0142 | 0.692 to 0.748 | 2.41 | 1.91 to 4.61 |

(b) At $p = 0.10$ the interval spans about $\pm 20$ percent of $d$. At $p = 0.72$ it runs from 21 percent below to 91 percent above, and it's lopsided, because the upper end is almost at the $p = 0.75$ singularity. A modestly larger sample fluctuation would make $d$ infinite.

(c) The slope $dd/dp = 1/(1 - \tfrac43 p)$ multiplies sampling error, and it blows up near saturation. So a gene that has saturated carries almost no usable distance information, however many sites you have. Slowly evolving genes keep $p$ in the region where the slope is small. Protein sequences have 20 states, so chance agreement is much lower, and they reach saturation far later than DNA.

</details>

## Flashback

**From Lesson 2.3 (Neighbor-joining):** Four taxa have $D_{PQ} = 4$, $D_{PR} = 7$, $D_{PS} = 7$, $D_{QR} = 5$, $D_{QS} = 5$, $D_{RS} = 4$. (a) Compute $R$ and all six $Q$ values. (b) Which pair(s) minimize $Q$? Join P and Q and give their branch lengths. (c) Complete the tree.

<details>
<summary>Solution</summary>

(a) $R_P = 4 + 7 + 7 = 18$, $R_Q = 4 + 5 + 5 = 14$, $R_R = 7 + 5 + 4 = 16$, $R_S = 7 + 5 + 4 = 16$.
$Q(P,Q) = 8 - 32 = -24$; $Q(P,R) = 14 - 34 = -20$; $Q(P,S) = -20$; $Q(Q,R) = 10 - 30 = -20$; $Q(Q,S) = -20$; $Q(R,S) = 8 - 32 = -24$.

(b) P–Q and R–S tie at $-24$. Joining P, Q: $\delta_P = 2 + \tfrac{18 - 14}{4} = \mathbf{3}$ and $\delta_Q = 4 - 3 = \mathbf{1}$.

(c) $D_{UR} = \tfrac12(7 + 5 - 4) = 4$, $D_{US} = \tfrac12(7 + 5 - 4) = 4$, $D_{RS} = 4$. Last three: $\delta_U = \tfrac12(4 + 4 - 4) = 2$, $\delta_R = 2$, $\delta_S = 2$. Tree: **P:3, Q:1, internal edge 2, R:2, S:2**. Check: $D_{PR} = 3 + 2 + 2 = 7$.

</details>

## Connections

- **Backward:** [evolution-ecology 2.3](../../evolution-ecology/lessons/02-03-inferring-trees-dating.md) used the JC formula, its saturation table and $T = d/2\lambda$ without deriving them; [1.2](01-02-substitution-matrices-log-odds.md)'s PAM matrices are the discrete-time version, $M^n$ in place of $e^{Qt}$; corrected distances are what [2.3](02-03-neighbor-joining.md) should be fed.
- **Forward:** [2.6](02-06-tree-likelihood-felsenstein-pruning.md) multiplies $P(t)$ matrices along branches to compute a tree's likelihood; model choice (JC vs K2P vs GTR+Γ) is a likelihood comparison; the Markov chains here reappear as the transition structure of HMMs in [3.1](03-01-markov-chains-to-hmms.md).
- **Sideways:** $P(t) = e^{Qt}$ and its relaxation to a stationary distribution is the master equation of chemical kinetics and the continuous-time Markov chains of [systems-biology 4.3](../../systems-biology/lessons/04-03-stochastic-gene-expression.md); $e^{-4\alpha t}$ is the decay of the modes belonging to $Q$'s non-zero eigenvalue, $-4\alpha$ (with multiplicity three).
