# Reinforcement Learning · Lesson 3.4: REINFORCE

> ⏱ ~15 min · Module 3: Function Approximation & Policy Gradients · Builds on: [3.3 (the policy gradient theorem)](03-03-the-policy-gradient-theorem.md), [2.1 (Monte Carlo prediction)](02-01-monte-carlo-prediction.md) · Unlocks: [3.5 (actor–critic methods)](03-05-actor-critic-methods.md), [4.3 (PPO)](04-03-ppo-a-taste.md)

## Why this matters

[Lesson 3.3](03-03-the-policy-gradient-theorem.md) left an expectation that could not quite be computed:

$$\nabla_\theta J(\theta) \propto \mathbb{E}_{\pi_\theta}\big[Q^{\pi_\theta}(S_t,A_t)\nabla_\theta\log\pi_\theta(A_t\mid S_t)\big]$$

Everything in it is available except $Q^{\pi_\theta}$. REINFORCE supplies the most obvious estimate — the **actual return** — and that one substitution gives the first complete policy-gradient algorithm.

It is worth meeting for two reasons beyond its own merits. It is the simplest member of a family that runs all the way to PPO and to the preference optimization used in language-model training, so its update is the skeleton every later method decorates. And it is **almost unusably noisy**, which is the honest motivation for the baseline introduced here and the critic of [Lesson 3.5](03-05-actor-critic-methods.md).

## The idea

$Q^{\pi}(S_t,A_t)$ is by definition $\mathbb{E}[G_t\mid S_t,A_t]$, so a sampled return $G_t$ is an unbiased estimate of it. Substitute:

$$\theta \leftarrow \theta + \alpha\,G_t\,\nabla_\theta\log\pi_\theta(A_t\mid S_t)$$

> Run an episode. For each action taken, push up its log-probability in proportion to the return that followed.

Actions followed by good outcomes become more likely; actions followed by bad ones become less likely. No model, no value function, no arg-max — and it works on continuous action spaces without modification.

The weakness is inherited whole from [Lesson 2.1](02-01-monte-carlo-prediction.md). $G_t$ is a Monte Carlo sample, so it carries the variance of an entire trajectory — and here that variance multiplies a gradient rather than merely an estimate.

## The formal version

**The algorithm.** Generate an episode $S_0,A_0,R_1,\dots,S_{T-1},A_{T-1},R_T$ with $\pi_\theta$. For each $t = 0,\dots,T-1$:

$$G_t = \sum_{k=t+1}^{T}\gamma^{k-t-1}R_k, \qquad \theta \leftarrow \theta + \alpha\,\gamma^{t}\,G_t\,\nabla_\theta\log\pi_\theta(A_t\mid S_t)$$

*(card: [REINFORCE](../reference.md#reinforce))*

The $\gamma^t$ factor is the theorem's discounting of later states and is routinely dropped in practice, which makes the algorithm biased and usually works better — one of several places where the implemented algorithm is not quite the derived one.

**It is unbiased.** $\mathbb{E}[G_t\mid S_t,A_t] = Q^{\pi_\theta}(S_t,A_t)$ exactly, so the update is an unbiased sample of the true gradient. With Robbins–Monro step sizes it converges to a **local** optimum of $J$ — local because $J$ is not concave in $\theta$.

**Why the variance is the problem.** $G_t$ accumulates every random reward to the end of the episode ([Lesson 2.1](02-01-monte-carlo-prediction.md) measured a standard deviation of $22$ against a mean of $27$ on a nine-state gridworld). Here that noise is multiplied by the score and *integrated into the parameters*, so a single unlucky episode can move the policy in a direction the expectation never pointed.

**The baseline.** By [Lesson 3.3](03-03-the-policy-gradient-theorem.md)'s invariance result, subtracting any function of state changes nothing in expectation:

$$\theta \leftarrow \theta + \alpha\big[G_t - b(S_t)\big]\nabla_\theta\log\pi_\theta(A_t\mid S_t)$$

*(card: [baseline](../reference.md#baseline))*

The natural choice is $b(s) \approx V^\pi(s)$, learned alongside by its own gradient-Monte-Carlo update $\mathbf{w}\leftarrow\mathbf{w} + \alpha_w[G_t - \hat V(S_t;\mathbf{w})]\nabla_\mathbf{w}\hat V(S_t;\mathbf{w})$. Then $G_t - \hat V(S_t)$ estimates the **advantage** — *how much better than usual this turned out* — and that, rather than the raw return, is what the policy should respond to.

**Why it matters so much.** Without a baseline the update asks "was the outcome good in absolute terms?" — and if every outcome is good, every action gets reinforced, including the bad ones, just by different amounts that the sampling noise can swamp. With a baseline it asks "was this better than what usually happens here?", which is the question the policy can act on.

## Picture

![Left: two pairs of horizontal bars showing the action probabilities before and after one REINFORCE update, starting equal at 0.50 each and ending at 0.64 and 0.36, with an arrow annotated that the return from taking the first action was good so its probability is pushed up, and a note that the two always move by equal and opposite amounts because they must sum to one. Right: a semi-log plot of the variance of the gradient estimate against a constant added to every reward, with a coral curve rising from thirty to two hundred and fifty-five thousand labelled no baseline, and a flat blue line along the axis labelled with a baseline, exactly zero at every offset, and a note that the expected gradient is unchanged throughout](assets/03-04-fig1.svg)

The right panel is the whole case for the baseline. The two curves describe estimators with **identical means**; only their spread differs, and it differs by four orders of magnitude.

## Worked examples

**Example 1 (mechanical): one REINFORCE step on a bandit.** This module's boss problem. A one-step bandit with two actions and a softmax policy $\pi_\theta(a) = \dfrac{e^{\theta_a}}{e^{\theta_1}+e^{\theta_2}}$, starting from $\theta = (0,0)$ so $\pi = (0.5,\ 0.5)$. The agent samples $a_1$ and receives $R = 1$.

The score for a softmax with linear preferences is $\mathbf{e}_1 - \boldsymbol{\pi}$:

$$\nabla_\theta\log\pi_\theta(a_1) = (1,0) - (0.5,0.5) = (0.5,\ -0.5).$$

With $G = R = 1$ (one step, so the return is the reward), the gradient estimate is

$$R\,\nabla_\theta\log\pi_\theta(a_1) = 1\cdot(0.5,\ -0.5) = \mathbf{(0.5,\ -0.5)},$$

and with $\alpha = 0.1$,

$$\theta \leftarrow (0,0) + 0.1(0.5,\ -0.5) = \mathbf{(0.05,\ -0.05)},$$

giving $\pi(a_1) = \dfrac{e^{0.05}}{e^{0.05}+e^{-0.05}} = 0.525$ — up from $0.5$.

**Now the baseline claim, verified directly.** For any constant $b$,

$$\mathbb{E}_\pi\big[b\,\nabla_\theta\log\pi_\theta(a)\big] = b\sum_a \pi(a)\nabla_\theta\log\pi_\theta(a) = b\sum_a\nabla_\theta\pi_\theta(a) = b\,\nabla_\theta(1) = \mathbf{0}.$$

Concretely at $\boldsymbol{\pi} = (0.5,0.5)$: the scores are $(0.5,-0.5)$ for $a_1$ and $(-0.5,0.5)$ for $a_2$, so $0.5(0.5,-0.5) + 0.5(-0.5,0.5) = (0,0)$, and multiplying by any $b$ leaves it zero. **The baseline cannot bias the gradient, whatever value it takes.**

**Example 2 (why you'd care): the variance, exactly.** Keep the two-action bandit with $\boldsymbol{\pi} = (0.5,0.5)$, and give it deterministic rewards $R(a_1) = 10$ and $R(a_2) = 12$. Look at the first component of the gradient estimate.

*Without a baseline.* Taking $a_1$ (probability $\tfrac12$) gives $10(0.5) = 5$; taking $a_2$ gives $12(-0.5) = -6$. So

$$\mathbb{E} = \tfrac12(5) + \tfrac12(-6) = -0.5, \qquad \operatorname{Var} = \tfrac12(5.5)^2 + \tfrac12(5.5)^2 = \mathbf{30.25}.$$

*With $b = 11$*, the mean reward. Taking $a_1$ gives $(10-11)(0.5) = -0.5$; taking $a_2$ gives $(12-11)(-0.5) = -0.5$.

$$\mathbb{E} = -0.5 \ \ \text{(unchanged)}, \qquad \operatorname{Var} = \mathbf{0}.$$

**Both outcomes now produce the identical gradient.** The estimator has become deterministic while keeping exactly the same mean.

Now the part that should worry you. Add $1000$ to **both** rewards — $1010$ and $1012$. This changes nothing about which action is better, and nothing about the optimal policy. But without a baseline:

$$\mathbb{E} = -0.5 \ \ \text{(still unchanged)}, \qquad \operatorname{Var} = \mathbf{255{,}530.25}.$$

| constant added | $\mathbb{E}[\text{gradient}]$ | Var, no baseline | Var, with baseline |
|---|---|---|---|
| $0$ | $-0.5$ | $30.25$ | $0$ |
| $10$ | $-0.5$ | $110.25$ | $0$ |
| $100$ | $-0.5$ | $3{,}080.25$ | $0$ |
| $1000$ | $-0.5$ | $255{,}530.25$ | $0$ |

**A cosmetic change to the reward scale — no change to the problem — multiplies the gradient variance by 8,447 while leaving the expected gradient untouched.** The signal is the $\pm1$ difference between the two rewards; the noise is the $\sim1000$ they share. Without a baseline the algorithm hunts for a difference of $1$ inside numbers of size $1000$, and the number of episodes it needs grows with the square of that ratio.

This is why the baseline is not an optimization but a necessity, and why "shift your rewards to be zero-mean" is standard advice. It is also why [Lesson 3.5](03-05-actor-critic-methods.md) is worth the extra machinery: a learned $\hat V(s)$ is a *state-dependent* baseline, which removes not just the global offset but the part of the return explained by being in a good state at all.

## Watch out

- **You might think** a baseline biases the gradient toward actions that beat it — **but actually** it changes the expectation by exactly zero, for any function of state. What it changes is the variance. The intuition that "subtracting something must shift the answer" is wrong here because the scores sum to zero across actions, so a state-dependent constant multiplied by them vanishes.
- **You might think** the baseline may depend on the action, since $Q(s,a) - Q(s,a)$ would have zero variance — **but actually** the invariance proof requires $b$ to be constant *across actions* at each state, so that it can be pulled out of $\sum_a$. An action-dependent baseline generally biases the gradient. (Sophisticated methods do use action-dependent baselines, with an explicit correction term to restore unbiasedness.)
- **You might think** REINFORCE is on-policy only by convention — **but actually** the derivation requires the states and actions to be sampled from the current $\pi_\theta$. After a single update the data is stale, so REINFORCE must throw away every episode after one use. That is a brutal sample-efficiency cost and it is exactly what [Lesson 4.3](04-03-ppo-a-taste.md)'s importance ratio exists to relax.

## One-liner

> Push up the log-probability of each action in proportion to the return that followed it — and subtract a baseline first, or the noise will bury the signal.

## Problems

**P1 (🟢)** A softmax policy over two actions has $\theta = (0.4,\ 0)$. The agent takes $a_2$ and receives a return $G = 5$, with $\alpha = 0.2$.

(a) Compute $\pi(a_1)$ and $\pi(a_2)$.
(b) Compute $\nabla_\theta\log\pi(a_2)$.
(c) Perform the REINFORCE update and give the new $\theta$.
(d) Compute the new $\pi(a_2)$ and confirm it rose.

**P2 (🟡)** In the bandit of Example 2 ($\boldsymbol{\pi} = (0.5,0.5)$, rewards $10$ and $12$):

(a) Compute the variance of the first gradient component with a baseline $b = 8$.
(b) Compute it with $b = 14$.
(c) Both differ from the optimum $b = 11$. State which is better and why the variance is not symmetric about... check whether it is.
(d) State the value of $b$ that minimizes the variance here, and whether $b = V^\pi = 11$ is that value.

**P3 (🔴)** An engineer wants to apply REINFORCE to a task whose per-episode returns are all near $1000$, with the best actions worth about $1005$ and the worst about $995$.

(a) Estimate, using Example 2's mechanism, the factor by which the gradient variance exceeds what it would be for the same task with returns centred at zero.
(b) Monte Carlo error falls like $1/\sqrt{n}$. Estimate the factor by which the number of episodes must increase to compensate.
(c) The engineer proposes simply subtracting $1000$ from every reward as a preprocessing step. State whether this fixes the problem, and what it fails to fix.
(d) State what a learned state-dependent baseline $\hat V(s)$ achieves that the constant in (c) does not, and give a concrete situation where the difference is decisive.

<details>
<summary>Solutions</summary>

**P1**

(a) $e^{0.4} = 1.4918$ and $e^0 = 1$, summing to $2.4918$:

$$\pi(a_1) = \frac{1.4918}{2.4918} = \mathbf{0.5987}, \qquad \pi(a_2) = \frac{1}{2.4918} = \mathbf{0.4013}.$$

(b) $\nabla_\theta\log\pi(a_2) = \mathbf{e}_2 - \boldsymbol{\pi} = (0,1) - (0.5987, 0.4013) = \mathbf{(-0.5987,\ 0.5987)}$.

(c) $\theta \leftarrow (0.4,\ 0) + 0.2(5)(-0.5987,\ 0.5987) = (0.4,0) + (-0.5987,\ 0.5987)$

$$= \mathbf{(-0.1987,\ 0.5987)}.$$

(d) $e^{-0.1987} = 0.8198$, $e^{0.5987} = 1.8198$, summing to $2.6396$:

$$\pi(a_2) = \frac{1.8198}{2.6396} = \mathbf{0.6894},$$

up from $0.4013$ — **it rose**, as it must for a positive return.

Note how large the step was: the probability moved by $0.29$ in one update, because $\alpha G = 0.2(5) = 1$ is a big effective step size. **The return multiplies the learning rate**, which is why REINFORCE is so sensitive to reward scale and why P3's problem is serious.

**P2**

(a) With $b = 8$: taking $a_1$ gives $(10-8)(0.5) = 1$; taking $a_2$ gives $(12-8)(-0.5) = -2$.

$$\mathbb{E} = \tfrac12(1) + \tfrac12(-2) = -0.5\ \checkmark, \qquad \operatorname{Var} = \tfrac12(1.5)^2 + \tfrac12(1.5)^2 = \mathbf{2.25}.$$

(b) With $b = 14$: $a_1$ gives $(10-14)(0.5) = -2$; $a_2$ gives $(12-14)(-0.5) = 1$.

$$\mathbb{E} = \tfrac12(-2)+\tfrac12(1) = -0.5\ \checkmark, \qquad \operatorname{Var} = \tfrac12(1.5)^2 + \tfrac12(1.5)^2 = \mathbf{2.25}.$$

(c) **They are equally good — the variance is symmetric about $b = 11$**, and both give $2.25$.

The general formula makes it obvious. With $\boldsymbol{\pi} = (0.5,0.5)$ the first component takes values $(10-b)/2$ and $-(12-b)/2$, so

$$\operatorname{Var}(b) = \tfrac18\big[(10-b)^2 + (12-b)^2\big] - \tfrac1{16}(10-12)^2,$$

a quadratic in $b$ minimized at the average of $10$ and $12$. Since $8$ and $14$ are equidistant from $11$, they give identical variance. (The question's phrasing invited an asymmetry that is not there; checking rather than assuming is the point.)

(d) The quadratic above is minimized at $b^* = \dfrac{10+12}{2} = \mathbf{11}$, giving $\operatorname{Var} = \tfrac18(1+1) - \tfrac1{16}(4) = 0.25 - 0.25 = 0$.

So **yes, here $b^* = V^\pi = 11$**, since with a uniform policy the state value is the mean reward.

That coincidence is special to this symmetric case. In general the variance-minimizing baseline is a *score-weighted* average, $b^* = \dfrac{\mathbb{E}[\|\nabla\log\pi\|^2 G]}{\mathbb{E}[\|\nabla\log\pi\|^2]}$, which is not $V^\pi$. $V^\pi$ is used anyway because it is nearly as good, is interpretable (it makes the multiplier the advantage), and is something you often want to learn regardless.

**P3**

(a) The mechanism is that the estimator's spread scales with the magnitude of the multiplier, so the variance scales with its **square**. The returns are centred at $1000$ with a spread of about $\pm5$; centred at zero they would be about $\pm5$. So the ratio of typical magnitudes is roughly $1000/5 = 200$, and

$$\text{variance factor} \approx 200^2 = \mathbf{40{,}000}.$$

(Example 2's numbers confirm the scaling: $30.25 \to 255{,}530$ for a shift from a magnitude around $11$ to one around $1011$, a factor of $8447 \approx (1011/11)^2 = 8446$.)

(b) Monte Carlo error falls like $1/\sqrt{n}$, so to reduce the standard error by a factor of $\sqrt{40{,}000} = 200$ requires

$$n \times 200^2 = \mathbf{40{,}000\times\text{ as many episodes}}.$$

If the centred version needed a thousand episodes, this one needs forty million. **That is the difference between a tractable experiment and an impossible one, caused entirely by an additive constant.**

(c) **It fixes the constant offset, and it is the right first move** — subtracting $1000$ leaves returns spread around zero, restoring the variance to roughly what the centred task would have.

What it does not fix is any **state-dependent** structure in the returns. If some states are intrinsically worth $1200$ and others $800$, a single constant of $1000$ leaves a residual spread of $\pm200$ that has nothing to do with which action was chosen — and that residual is exactly the noise a policy gradient cannot use. The constant also has to be known in advance, and it is wrong the moment the policy improves and the typical return shifts.

(d) A learned $\hat V(s)$ removes **the part of the return explained by which state you were in**, leaving only the part explained by which action you took.

The decisive situation is a task with states of very different value. Suppose state $s_{\text{good}}$ has $V = 1200$ and $s_{\text{bad}}$ has $V = 800$, and within each state the actions differ by $\pm5$. With the constant baseline of $1000$, an action taken in $s_{\text{good}}$ is reinforced with a multiplier around $+200$ and an action in $s_{\text{bad}}$ with around $-200$ — so **every action taken in the good state is strongly reinforced and every action in the bad state is strongly suppressed, regardless of whether it was a good action.** The policy learns which states are nice, which it cannot control, rather than which actions are nice, which it can.

With $\hat V(s)$ as the baseline the multiplier is the advantage, around $\pm5$ in both states, and the update responds only to the action's own contribution. That is the entire idea of [Lesson 3.5](03-05-actor-critic-methods.md), and it is why "learn a critic" is not an optional refinement.

</details>

## Flashback

**From Lesson 3.3 (The policy gradient theorem):** A softmax policy over three actions has preferences $\theta = (0,\ 0.6,\ -0.6)$.

(a) Compute the three action probabilities.
(b) Compute $\nabla_\theta\log\pi(a_3)$ and verify its components sum to zero.
(c) With $Q(s,a_3) = 4$ and $\alpha = 0.05$, give the updated $\theta$.
(d) Compute the new $\pi(a_3)$ and comment on the size of the change relative to how likely $a_3$ was.

<details>
<summary>Solution</summary>

(a) $e^0 = 1$, $e^{0.6} = 1.8221$, $e^{-0.6} = 0.5488$, summing to $3.3709$:

$$\boldsymbol{\pi} = \left(\frac{1}{3.3709},\ \frac{1.8221}{3.3709},\ \frac{0.5488}{3.3709}\right) = (\mathbf{0.2967},\ \mathbf{0.5405},\ \mathbf{0.1628}).$$

(b) $\nabla_\theta\log\pi(a_3) = \mathbf{e}_3 - \boldsymbol{\pi} = (0,0,1) - (0.2967, 0.5405, 0.1628)$

$$= (\mathbf{-0.2967},\ \mathbf{-0.5405},\ \mathbf{0.8372}).$$

Sum: $-0.2967 - 0.5405 + 0.8372 = \mathbf{0}$ ✓

(c) $\theta \leftarrow (0,\ 0.6,\ -0.6) + 0.05(4)(-0.2967,\ -0.5405,\ 0.8372)$

$$= (0, 0.6, -0.6) + (-0.0593,\ -0.1081,\ 0.1674) = (\mathbf{-0.0593},\ \mathbf{0.4919},\ \mathbf{-0.4326}).$$

(d) $e^{-0.0593} = 0.9424$, $e^{0.4919} = 1.6355$, $e^{-0.4326} = 0.6488$, summing to $3.2267$:

$$\pi(a_3) = \frac{0.6488}{3.2267} = \mathbf{0.2011},$$

up from $0.1628$ — a rise of $0.038$, or about **23% of its previous probability**.

The point worth noticing is where that increase came from. The score's components were $-0.297$, $-0.541$, $+0.837$: the probability mass taken from each rival is proportional to how much it had. So $a_2$, the most likely action, gave up the most ($0.5405 \to 0.5068$), and $a_1$ gave up less. **A softmax update redistributes rather than adds**, and it takes from the rich in proportion to their wealth.

This also explains the brake noted in [Lesson 3.3](03-03-the-policy-gradient-theorem.md): had $a_3$ already been at probability $0.95$, its score component would have been only $0.05$, and the same $Q$ and $\alpha$ would have moved it by a twentieth as much. **A confident policy is a slow-learning one**, which is a stabilizer when the policy is right and a trap when it is wrong.

</details>

## Connections

- **Backward:** the update is [Lesson 3.3](03-03-the-policy-gradient-theorem.md)'s sampling form with $Q^{\pi}$ replaced by [Lesson 2.1](02-01-monte-carlo-prediction.md)'s Monte Carlo return, so it inherits both that estimator's unbiasedness and its variance. The baseline's legitimacy is [Lesson 3.3](03-03-the-policy-gradient-theorem.md)'s invariance result, proved there in two lines.
- **Forward:** [Lesson 3.5](03-05-actor-critic-methods.md) replaces the return with a bootstrapped estimate and the baseline with a learned $\hat V$, which cuts the variance again and allows online updating. [Lesson 4.2](04-02-a2c-a3c-advantage-estimation.md) scales that across parallel workers, and [Lesson 4.3](04-03-ppo-a-taste.md) removes the requirement to discard every episode after a single use.
- **Sideways:** the estimator is the score-function (likelihood-ratio) gradient estimator used throughout simulation optimization and variational inference, where it carries the same name and the same reputation for variance — and the baseline is the *control variate* of Monte Carlo integration, a quantity with known mean subtracted to reduce spread without shifting the answer.
