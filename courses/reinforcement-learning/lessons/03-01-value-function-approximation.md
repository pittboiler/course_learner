# Reinforcement Learning · Lesson 3.1: Value-function approximation

> ⏱ ~15 min · Module 3: Function Approximation & Policy Gradients · Builds on: [2.8 (eligibility traces)](02-08-eligibility-traces-backward-view.md), [2.3 (temporal-difference learning)](02-03-temporal-difference-learning-td0.md) · Unlocks: [3.2 (control with approximation and the deadly triad)](03-02-approximate-control-deadly-triad.md), [4.1 (deep Q-networks)](04-01-deep-q-networks.md)

## Why this matters

Every algorithm so far stores one number per state. Backgammon has about $10^{20}$ states; a camera image has more states than there are atoms in the observable universe. The table is not merely large — it is the wrong data structure, and not because of memory.

The real problem is that **a table cannot generalize.** Each entry is learned independently, so visiting one state teaches you nothing about any other, and in a large space you will never visit most states even once. What is needed is a function that *shares* what it learns: see a few states, infer the rest.

That change is what makes RL applicable to anything real, and it is also where the theory of Modules 1 and 2 starts to fail. Convergence guarantees weaken, the objective being optimized becomes ambiguous, and [Lesson 3.2](03-02-approximate-control-deadly-triad.md) shows that a natural combination of methods can diverge outright. This lesson sets up the machinery honestly, including what it costs.

## The idea

Replace the table $V(s)$ with a parameterized function

$$\hat V(s; \mathbf{w}) \approx V^\pi(s), \qquad \mathbf{w}\in\mathbb{R}^d,\ \ d \ll |\mathcal{S}|$$

and learn $\mathbf{w}$ instead. With $d \ll |\mathcal{S}|$, **updating one state necessarily moves others** — which is the whole point, and also the whole difficulty.

> A table has one dial per state and can fit anything. An approximator has a few dials and must compromise; the interesting question is what it compromises *toward*.

Two consequences follow immediately, and both are new:

- **Exactness is off the table.** $V^\pi$ generally is not representable, so the goal shifts from "find $V^\pi$" to "find the best available approximation". That requires saying what *best* means.
- **Errors interact.** Reducing the error at one state can increase it at another. There is no longer any such thing as fixing one state.

## The formal version

**The objective.** Weight each state's squared error by how often the policy visits it:

$$\overline{\text{VE}}(\mathbf{w}) = \sum_s \mu(s)\big[V^\pi(s) - \hat V(s;\mathbf{w})\big]^2$$

where $\mu(s)$ is the **on-policy distribution** — the fraction of time steps spent in $s$ under $\pi$. *(card: [mean squared value error](../reference.md#mean-squared-value-error))*

The weighting is not a technicality; it decides the answer. States the agent rarely visits contribute almost nothing, so the approximator is free to be badly wrong there. That is usually the right trade for prediction — and it is the source of the trouble in [Lesson 3.2](03-02-approximate-control-deadly-triad.md), where the states being *evaluated* are not the ones being *visited*.

**Gradient Monte Carlo.** With the true target $G_t$ available, this is ordinary stochastic gradient descent on $\overline{\text{VE}}$:

$$\mathbf{w} \leftarrow \mathbf{w} + \alpha\big[G_t - \hat V(S_t;\mathbf{w})\big]\nabla_\mathbf{w}\hat V(S_t;\mathbf{w})$$

Since $G_t$ is an unbiased sample of $V^\pi(S_t)$ and does not depend on $\mathbf{w}$, the standard SGD guarantees of [`machine-learning` 1.6](../../machine-learning/lessons/01-06-gradient-descent-for-learning.md) apply: with Robbins–Monro step sizes it converges to a local optimum of $\overline{\text{VE}}$, and for linear approximators to the global one.

**Semi-gradient TD(0).** Substitute the bootstrapped target:

$$\mathbf{w} \leftarrow \mathbf{w} + \alpha\big[\underbrace{R_{t+1} + \gamma\hat V(S_{t+1};\mathbf{w})}_{\text{depends on }\mathbf{w}} - \hat V(S_t;\mathbf{w})\big]\nabla_\mathbf{w}\hat V(S_t;\mathbf{w})$$

*(card: [semi-gradient TD](../reference.md#semi-gradient-td))*

**The name matters.** The target now depends on $\mathbf{w}$, so a true gradient of the squared error would have to differentiate it too. The update above ignores that dependence — it treats the target as a constant. Hence *semi*-gradient: **it is not the gradient of any objective function.** The consequences are real:

- it is not guaranteed to converge in general, and [Lesson 3.2](03-02-approximate-control-deadly-triad.md) exhibits divergence;
- but it learns faster than the true-gradient alternative, and it works in continuing tasks and online — which is why it is what everyone uses.

(The true-gradient alternative, *residual gradient*, does converge but is slow and needs two independent samples of the next state. It is a known cure that is worse than the disease.)

**The linear case.** With features $\mathbf{x}(s)\in\mathbb{R}^d$ and $\hat V(s;\mathbf{w}) = \mathbf{w}^\top\mathbf{x}(s)$, the gradient is just the feature vector, $\nabla_\mathbf{w}\hat V(s;\mathbf{w}) = \mathbf{x}(s)$, so the update is

$$\mathbf{w} \leftarrow \mathbf{w} + \alpha\,\delta_t\,\mathbf{x}(S_t).$$

Linear semi-gradient TD(0) **does** converge on-policy, not to the minimizer of $\overline{\text{VE}}$ but to a nearby point called the **TD fixed point** $\mathbf{w}_{\text{TD}}$, which satisfies

$$\overline{\text{VE}}(\mathbf{w}_{\text{TD}}) \le \frac{1}{1-\gamma}\min_{\mathbf{w}}\overline{\text{VE}}(\mathbf{w}).$$

In words: bootstrapping costs you at most a factor of $1/(1-\gamma)$ over the best possible fit. That is a *weak* guarantee — at $\gamma = 0.99$ the factor is $100$ — but it is a guarantee, and it is the strongest one available once the table is gone.

**Where features come from.** Common constructions, all producing a linear model in a nonlinear feature space: **state aggregation** (partition the states; one binary feature per group — the simplest case, used below), **polynomial** or **Fourier** bases, **radial basis functions**, and **tile coding** (several overlapping offset grids, giving fast sparse updates). A neural network, as in [Lesson 4.1](04-01-deep-q-networks.md), learns the features instead of having them specified — which buys expressiveness and forfeits the convergence guarantee above.

**Eligibility traces carry over.** [Lesson 2.8](02-08-eligibility-traces-backward-view.md)'s per-state trace becomes a **trace vector** with the same shape as $\mathbf{w}$:

$$\mathbf{e}_t = \gamma\lambda\,\mathbf{e}_{t-1} + \nabla_\mathbf{w}\hat V(S_t;\mathbf{w}), \qquad \mathbf{w} \leftarrow \mathbf{w} + \alpha\,\delta_t\,\mathbf{e}_t$$

Identical in structure, with the feature vector in place of the indicator — which is exactly what the indicator was in the tabular case.

## Picture

![A plot of value against state for a thousand-state random walk, showing the smooth true value function rising from about minus 0.92 to plus 0.92 and a ten-step staircase approximation from state aggregation tracking it closely, annotated that each tread is the visitation-weighted mean of its group rather than its midpoint, so the end treads lean inward. Below, a strip showing how often each state is visited, clipped because the start state spikes far higher, with a note that the objective weights errors by this distribution so the ends matter least](assets/03-01-fig1.svg)

The staircase is the best a ten-parameter model can do, and the gap between it and the curve is **irreducible** — no amount of data closes it. That is the permanent change function approximation makes.

## Worked examples

**Example 1 (mechanical): a linear update by hand.** Two features, $\mathbf{x}(s) = (1,\ s)$ — an intercept and the state index. Current weights $\mathbf{w} = (0.5,\ 0.1)$, $\gamma = 0.9$, $\alpha = 0.01$. The agent moves from $s = 3$ to $s' = 5$ with reward $R = 2$.

$$\hat V(3) = 0.5 + 0.1(3) = 0.8, \qquad \hat V(5) = 0.5 + 0.1(5) = 1.0$$
$$\delta = R + \gamma\hat V(5) - \hat V(3) = 2 + 0.9(1.0) - 0.8 = \mathbf{2.1}$$
$$\mathbf{w} \leftarrow (0.5,\ 0.1) + 0.01(2.1)(1,\ 3) = (0.5 + 0.021,\ 0.1 + 0.063) = \mathbf{(0.521,\ 0.163)}.$$

**Notice what just happened to every other state.** The slope rose by $0.063$, so $\hat V(10)$ went from $1.5$ to $2.151$ — a state the agent has never visited, updated by more than the one it did visit ($\hat V(3)$: $0.8 \to 1.010$). Generalization is not a side effect; it *is* the mechanism, and it cuts both ways.

**Example 2 (why you'd care): the objective decides the answer.** A random walk on $1000$ states. From any state the agent jumps to one of the $100$ states on either side with equal probability; falling off the left end gives $-1$, off the right gives $+1$; $\gamma = 1$. Solving exactly gives a smooth, slightly S-shaped $V^\pi$ running from $-0.922$ to $+0.922$.

Now approximate it with **state aggregation**: ten groups of a hundred states, one weight each. Run gradient Monte Carlo with a $1/N$ step size for $300{,}000$ episodes:

| group | learned $w$ | $\mu$-weighted mean of $V^\pi$ | plain mean of $V^\pi$ |
|---|---|---|---|
| $1$ (states 1–100) | $-0.8292$ | $-0.8301$ | $-0.8456$ |
| $2$ | $-0.6502$ | $-0.6516$ | $-0.6603$ |
| $5$ | $-0.0963$ | $-0.0928$ | $-0.0943$ |
| $10$ (states 901–1000) | $0.8269$ | $0.8301$ | $0.8456$ |

**The learned weights match the visitation-weighted group means to within $0.004$, not the plain means.** That is $\overline{\text{VE}}$ made visible: within group 1, the states nearest the left edge have the most negative values but are visited least, so the fit ignores them and the tread sits above the group's midpoint. The theory predicted a $\mu$-weighted average and that is exactly what the algorithm delivered.

The residual error is $\sqrt{\overline{\text{VE}}} = 0.054$ — **and it does not go to zero.** A step function cannot be a smooth curve; more episodes reduce the noise around the staircase, never the staircase itself. So there are two error sources now, and only one of them is fixable:

| source | shrinks with more data? |
|---|---|
| estimation error — noise in $\mathbf{w}$ | **yes**, like $1/\sqrt{n}$ |
| approximation error — the staircase | **no**, fixed by the feature set |

This is the bias–variance decomposition of [`machine-learning` 1.2](../../machine-learning/lessons/01-02-generalization-and-the-bias-variance-tradeoff.md) arriving in reinforcement learning, with the feature set playing the role of model capacity. Adding groups lowers the staircase error and raises the noise; the right number is a modelling decision, not something the algorithm finds for you.

## Watch out

- **You might think** semi-gradient TD is performing gradient descent on the error between $\hat V$ and $V^\pi$ — **but actually** it is not descending any objective at all. It ignores the target's dependence on $\mathbf{w}$, which is why the tidy guarantees of [`machine-learning` 1.6](../../machine-learning/lessons/01-06-gradient-descent-for-learning.md) do not transfer and why [Lesson 3.2](03-02-approximate-control-deadly-triad.md) can exhibit divergence. Calling it "TD with a network" hides exactly the thing that breaks.
- **You might think** a more expressive approximator is always safer, since it can represent more — **but actually** the convergence guarantee above holds for *linear* approximators and is lost for nonlinear ones. A neural network can represent $V^\pi$ far better and can also diverge where a linear model would not, so expressiveness and stability are in tension rather than aligned.
- **You might think** $\mu$ is a technical detail in the definition of the objective — **but actually** it determines what is learned. Two agents with identical features and identical data, differing only in which states they spend time in, converge to different weights. When the behaviour policy stops matching the policy being evaluated — that is, off-policy learning — $\mu$ becomes the wrong weighting entirely, which is one of the three legs of the deadly triad.

## One-liner

> Swap the table for a function with fewer knobs than states, and learning stops being "look up and fix" and starts being "fit a compromise" — weighted by wherever the agent actually spends its time.

## Problems

**P1 (🟢)** Features $\mathbf{x}(s) = (1,\ s,\ s^2)$, weights $\mathbf{w} = (0,\ 1,\ -0.1)$, $\gamma = 1$, $\alpha = 0.05$. The agent moves from $s = 2$ to $s' = 4$ with reward $R = 1$.

(a) Compute $\hat V(2)$ and $\hat V(4)$.
(b) Compute the TD error $\delta$.
(c) Perform the semi-gradient TD update and give the new $\mathbf{w}$.
(d) Compute $\hat V(2)$ after the update and state whether the error at $s=2$ got smaller.

**P2 (🟡)** In Example 2's setting, a colleague proposes using $100$ groups of $10$ states instead of $10$ groups of $100$.

(a) State what happens to the approximation error (the staircase).
(b) State what happens to the estimation error at a fixed number of episodes, and why.
(c) At the extreme of $1000$ groups of $1$ state, state what the method becomes and what both error terms equal.
(d) Explain in one sentence why the extreme in (c) is not what you want for a state space of $10^{20}$.

**P3 (🔴)** Consider a two-state problem, $s_1$ and $s_2$, with a **single** weight and features $x(s_1) = 1$, $x(s_2) = 2$, so $\hat V(s_1) = w$ and $\hat V(s_2) = 2w$. The true values are $V^\pi(s_1) = 1$ and $V^\pi(s_2) = 1$ — which this approximator cannot represent, since it forces $\hat V(s_2) = 2\hat V(s_1)$.

(a) Write $\overline{\text{VE}}(w)$ for a visitation distribution $\mu(s_1) = p$, $\mu(s_2) = 1-p$.
(b) Minimize it to find $w^*$ as a function of $p$.
(c) Evaluate $w^*$ at $p = 0.5$ and at $p = 0.9$, and state what changed and why.
(d) State what this shows about the claim "the algorithm learns the value function".

<details>
<summary>Solutions</summary>

**P1**

(a) $\mathbf{x}(2) = (1,2,4)$ and $\mathbf{x}(4) = (1,4,16)$:

$$\hat V(2) = 0 + 1(2) - 0.1(4) = 2 - 0.4 = \mathbf{1.6}$$
$$\hat V(4) = 0 + 1(4) - 0.1(16) = 4 - 1.6 = \mathbf{2.4}$$

(b) $\delta = R + \gamma\hat V(4) - \hat V(2) = 1 + 2.4 - 1.6 = \mathbf{1.8}$.

(c) The linear update is $\mathbf{w} \leftarrow \mathbf{w} + \alpha\delta\,\mathbf{x}(2)$:

$$\mathbf{w} \leftarrow (0,\ 1,\ -0.1) + 0.05(1.8)(1,\ 2,\ 4) = (0,1,-0.1) + (0.09,\ 0.18,\ 0.36)$$
$$= \mathbf{(0.09,\ 1.18,\ 0.26)}.$$

(d) $\hat V(2) = 0.09 + 1.18(2) + 0.26(4) = 0.09 + 2.36 + 1.04 = \mathbf{3.49}$.

The estimate moved **from $1.6$ toward the target of $3.4$** ($= R + \gamma\hat V(4)$), so yes, the error at $s = 2$ shrank — though it overshot slightly, landing at $3.49$ against a target of $3.4$, because $\alpha\|\mathbf{x}(2)\|^2 = 0.05(1 + 4 + 16) = 1.05 > 1$.

**That overshoot is worth noticing.** For linear TD the step is stable only if $\alpha\|\mathbf{x}\|^2 < 1$, so feature vectors with large norms force small step sizes. It is the standard reason to normalize features, and the reason tile coding divides $\alpha$ by the number of active tiles.

**P2**

(a) **It falls.** With $100$ groups the staircase has ten times as many treads, each spanning ten states rather than a hundred, so it tracks the smooth curve far more closely. In the limit of fine enough groups the approximation error goes to zero.

(b) **It rises.** The same number of episodes is now spread over ten times as many parameters, so each weight is estimated from roughly a tenth as many visits and its sampling noise is about $\sqrt{10} \approx 3.2$ times larger.

This is the trade-off in its purest form: **capacity buys bias and costs variance**, and the total error is minimized somewhere in between.

(c) It becomes **the tabular method** of Module 2 — one weight per state, with $\mathbf{x}(s)$ the one-hot indicator, so no state's update touches any other.

Approximation error is **zero** (a table can represent any value function exactly). Estimation error is **maximal** for a given number of episodes, since nothing is shared and each state must be learned from its own visits alone.

This also shows the tabular case was a special case of function approximation all along, sitting at one end of the capacity axis.

(d) **Because with $10^{20}$ states you will never visit the overwhelming majority of them even once, so a method that cannot generalize has nothing to say about them** — the estimation error at every unvisited state is the full range of the value function, and no amount of experience changes that.

**P3**

(a) With $\hat V(s_1) = w$, $\hat V(s_2) = 2w$ and both true values equal to $1$:

$$\overline{\text{VE}}(w) = p(1 - w)^2 + (1-p)(1 - 2w)^2.$$

(b) Differentiate and set to zero:

$$\frac{d\overline{\text{VE}}}{dw} = -2p(1-w) - 4(1-p)(1-2w) = 0.$$

Dividing by $-2$: $p(1-w) + 2(1-p)(1-2w) = 0$, so $p - pw + 2 - 2p - 4w + 4pw = 0$, giving $(2 - p) = w(4 - 3p)$ and

$$\boxed{\,w^* = \frac{2-p}{4-3p}\,}$$

(c) At $p = 0.5$: $w^* = \dfrac{1.5}{2.5} = \mathbf{0.6}$, so $\hat V(s_1) = 0.6$ and $\hat V(s_2) = 1.2$.

At $p = 0.9$: $w^* = \dfrac{1.1}{1.3} = \mathbf{0.846}$, so $\hat V(s_1) = 0.846$ and $\hat V(s_2) = 1.692$.

**The visitation distribution changed and the learned value function changed with it** — nothing about the environment, the rewards, the true values or the features moved. At $p = 0.9$ the agent spends nine-tenths of its time in $s_1$, so the fit bends to get $s_1$ nearly right ($0.846$ against a truth of $1$) and lets $s_2$ be badly wrong ($1.692$ against $1$). At $p = 0.5$ the errors are shared more evenly.

(Sanity check at the extremes: $p \to 1$ gives $w^* \to 1$, exactly right at $s_1$; $p \to 0$ gives $w^* \to 0.5$, exactly right at $s_2$.)

(d) **It shows the claim is not well posed.** With function approximation there is no "the value function" to learn — $V^\pi$ is not representable, and what the algorithm converges to depends on the objective, which depends on $\mu$, which depends on the policy's behaviour.

So the honest statement is: *the algorithm finds the best representable approximation under the weighting induced by where the agent goes.* Two agents in the identical environment with identical features learn different functions if they spend their time differently.

This is not a pathology to be engineered away — it is usually the right behaviour, since accuracy is most valuable where the agent actually is. But it becomes a genuine problem the moment the states being *updated* stop matching the states being *visited*, which is precisely what off-policy learning does and precisely why [Lesson 3.2](03-02-approximate-control-deadly-triad.md)'s triad is deadly.

</details>

## Flashback

**From Lesson 2.8 (Eligibility traces and the backward view):** An episode visits $M \to N \to M \to$ terminal with rewards $2, 0, 4$, all values initialized to $0$, $\gamma = 1$, $\lambda = 0.5$, $\alpha = 0.1$.

(a) Give the three TD errors.
(b) Give the accumulating traces after each step.
(c) Compute the total offline update $\Delta V(M)$ and $\Delta V(N)$.
(d) State what $\Delta V(M)$ would be with replacing traces, and which is larger.

<details>
<summary>Solution</summary>

(a) All values start at $0$ and the terminal value is $0$, so each TD error is just its reward:

$$\delta_0 = 2 + 0 - 0 = \mathbf{2}, \qquad \delta_1 = 0 + 0 - 0 = \mathbf{0}, \qquad \delta_2 = 4 + 0 - 0 = \mathbf{4}.$$

(b) Decay by $\gamma\lambda = 0.5$, then add $1$ to the visited state:

| $t$ | visited | $e(M)$ | $e(N)$ |
|---|---|---|---|
| $0$ | $M$ | $\mathbf{1}$ | $0$ |
| $1$ | $N$ | $0.5$ | $\mathbf{1}$ |
| $2$ | $M$ | $0.5(0.5) + 1 = \mathbf{1.25}$ | $0.5$ |

(c) Summing $\alpha\delta_t e_t(s)$ over the episode:

$$\Delta V(M) = 0.1\big[2(1) + 0(0.5) + 4(1.25)\big] = 0.1\big[2 + 0 + 5\big] = \mathbf{0.7}$$
$$\Delta V(N) = 0.1\big[2(0) + 0(1) + 4(0.5)\big] = 0.1(2) = \mathbf{0.2}$$

(d) With replacing traces, $e(M)$ at $t=2$ is reset to $1$ rather than accumulating to $1.25$:

$$\Delta V(M) = 0.1\big[2(1) + 0 + 4(1)\big] = 0.1(6) = \mathbf{0.6},$$

which is **smaller** than the accumulating $0.7$. The difference, $0.1 \times 4 \times 0.25 = 0.1$, is exactly the leftover eligibility from $M$'s first visit that accumulating traces preserve and replacing traces discard.

Worth connecting forward: in this lesson's setting the trace becomes a *vector* $\mathbf{e}$ with one component per weight rather than per state, and the indicator $\mathbb{1}[S_t = s]$ that was added on each visit becomes the feature vector $\mathbf{x}(S_t)$. The tabular case here is the special instance where $\mathbf{x}$ is one-hot — so this whole calculation is already the general algorithm, written in the coordinate system where the features happen to be indicators.

</details>

## Connections

- **Backward:** the semi-gradient update is [Lesson 2.3](02-03-temporal-difference-learning-td0.md)'s TD(0) with $\nabla\hat V$ in place of the table lookup, and the trace vector is [Lesson 2.8](02-08-eligibility-traces-backward-view.md)'s trace with the feature vector in place of the indicator. The optimization machinery is [`machine-learning` 1.6](../../machine-learning/lessons/01-06-gradient-descent-for-learning.md)'s stochastic gradient descent, with the crucial caveat that the semi-gradient is not a gradient.
- **Forward:** [Lesson 3.2](03-02-approximate-control-deadly-triad.md) applies this to control and shows the combination that diverges; [Lesson 4.1](04-01-deep-q-networks.md) replaces the linear model with a neural network and adds the engineering that makes that survivable. The policy gradient of [Lesson 3.3](03-03-the-policy-gradient-theorem.md) parameterizes the *policy* the way this lesson parameterizes the value, and [Lesson 3.5](03-05-actor-critic-methods.md) uses both at once.
- **Sideways:** the $\overline{\text{VE}}$ objective is weighted least squares, and the approximation/estimation split is the bias–variance decomposition of [`machine-learning` 1.2](../../machine-learning/lessons/01-02-generalization-and-the-bias-variance-tradeoff.md) — with one difference that matters: in supervised learning the data distribution is given, while here the agent generates it, so $\mu$ is a consequence of the policy rather than a fact about the world.
