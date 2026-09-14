# Reinforcement Learning · Lesson 2.1: Monte Carlo prediction

> ⏱ ~15 min · Module 2: Model-Free Prediction & Control · Builds on: [1.5 (policy evaluation and policy iteration)](01-05-policy-evaluation-and-policy-iteration.md), [1.3 (value functions and the Bellman expectation equation)](01-03-value-functions-bellman-expectation.md) · Unlocks: [2.2 (Monte Carlo control)](02-02-monte-carlo-control.md), [2.3 (temporal-difference learning)](02-03-temporal-difference-learning-td0.md)

## Why this matters

Every method in Module 1 needed $p(s'\mid s,a)$. The sweep in [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md) averages over *all* successors weighted by their true probabilities — you cannot take that step without the model. Drop the model and the entire apparatus stops.

Monte Carlo is the most direct possible repair, and it is worth appreciating how little it assumes. $V^\pi(s)$ was *defined* as an expectation, $\mathbb{E}_\pi[G_t \mid S_t = s]$. Expectations are estimated by averages. So: run the policy, record what actually happened, average it. No transition probabilities, no Bellman equation, no bootstrapping — **the definition, used directly.**

This is the first algorithm in the course that would work on a real robot, and getting clear on exactly what it costs — what you give up relative to dynamic programming — sets up everything else in Module 2.

## The idea

To learn what a state is worth, visit it many times and average what you got afterwards.

> Monte Carlo learns from *complete* episodes. It makes no estimate until the episode ends, and then it uses the actual return, not a guess at it.

Two consequences, and they pull in opposite directions:

- **It is unbiased and assumption-free.** The return you observed really is a sample from the distribution whose mean you want. Nothing can be systematically wrong, and the Markov property is never used — MC works on non-Markov problems where the Bellman equation would be invalid.
- **It is high-variance and it has to wait.** A return is a sum of many random rewards, so single samples scatter enormously, and no learning happens until a terminal state is reached. Continuing tasks are simply out of reach.

The word that captures the difference from Module 1: MC uses **sampled** backups where DP used **full** backups. It trades the exactness of an expectation for the ability to compute at all.

## The formal version

**The estimator.** Run $\pi$ to generate episodes. For each episode, compute the return following each time step:

$$G_t = R_{t+1} + \gamma R_{t+2} + \cdots + \gamma^{T-t-1}R_T$$

and estimate $V^\pi(s)$ as the average of the $G_t$ over visits to $s$. *(card: [Monte Carlo prediction](../reference.md#monte-carlo-prediction))*

**Compute the returns backwards.** Never sum each one from scratch. Walk the episode in reverse maintaining $G \leftarrow R_{t+1} + \gamma G$, which gives every $G_t$ in one pass. This recursion is [Lesson 1.1](01-01-the-rl-problem.md)'s one-step split $G_t = R_{t+1} + \gamma G_{t+1}$, and it is the reason MC costs $O(T)$ per episode rather than $O(T^2)$.

**First-visit versus every-visit.** If $s$ occurs several times in one episode, either

- average the return following the **first** visit only in each episode, or
- average the returns following **every** visit.

They differ, and the distinction is real:

| | first-visit | every-visit |
|---|---|---|
| bias | **unbiased** for every $n$ | biased at finite $n$ |
| consistency | converges to $V^\pi$ | converges to $V^\pi$ |
| why | each episode contributes one i.i.d. sample | returns within an episode are correlated |

First-visit is unbiased because the episodes are independent, so its samples are i.i.d. draws from the return distribution and the sample mean of i.i.d. draws is unbiased — this is [`probability-theory` 4.2](../../probability-theory/lessons/04-02-laws-of-large-numbers.md)'s law of large numbers applied directly. Every-visit reuses overlapping suffixes of the same episode; those are neither independent nor identically distributed, so its finite-sample mean is skewed. Both converge as $1/\sqrt{n}$, and in practice every-visit is often preferred because it extracts more data per episode.

**Incremental form.** You do not store returns. Keep a count $N(s)$ and update:

$$N(s) \leftarrow N(s) + 1, \qquad V(s) \leftarrow V(s) + \frac{1}{N(s)}\big[G_t - V(s)\big]$$

In words: nudge the estimate toward the new sample by one over the number of samples. This is exactly the running mean. *(card: [incremental mean](../reference.md#incremental-mean))*

**The constant-$\alpha$ variant** replaces $1/N(s)$ with a fixed $\alpha$:

$$V(s) \leftarrow V(s) + \alpha\big[G_t - V(s)\big]$$

This no longer computes the mean — it computes an exponentially weighted average that **forgets old data at rate $\alpha$**. That is a bug if $V^\pi$ is fixed and a feature if the policy is changing underneath you, which is exactly the situation in [Lesson 2.2](02-02-monte-carlo-control.md). Every update rule from here to the end of the course has this shape: *estimate $\leftarrow$ estimate $+$ step size $\times$ (target $-$ estimate)*, and the methods differ only in what they use as the target.

**What MC requires.** Episodes must terminate, and every state you want to evaluate must be visited infinitely often in the limit. The second condition is easy for prediction and becomes the central difficulty of [Lesson 2.2](02-02-monte-carlo-control.md), where the policy itself decides what gets visited.

## Picture

![Left: a Monte Carlo backup diagram, a single unbranched vertical chain of state circles linked by small reward dots labelled r1 through r4, ending at a square terminal state, annotated that there is no branching, one sampled path, no model and no bootstrapping. Right: a semi-log plot of the running mean of sampled returns against the number of episodes averaged, with a shaded band of two standard errors that narrows from left to right, a dashed line at the true value of minus 27, and a note that single-episode returns ranged from minus 4 to minus 84](assets/02-01-fig1.svg)

Compare the left panel with [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md)'s full backup, which branched over every successor but stopped after one step. Monte Carlo is the opposite extreme: **one branch, followed all the way to the end.** [Lesson 2.3](02-03-temporal-difference-learning-td0.md) takes the remaining corner of that square.

## Worked examples

**Example 1 (mechanical): first-visit and every-visit disagree.** Three episodes over states $A$ and $B$, with $\gamma = 1$. Writing each as (state, reward-received-on-leaving):

- Episode 1: $A\ \tfrac{+1}{\longrightarrow}\ B\ \tfrac{+2}{\longrightarrow}\ A\ \tfrac{+3}{\longrightarrow}\ T$
- Episode 2: $B\ \tfrac{0}{\longrightarrow}\ A\ \tfrac{+4}{\longrightarrow}\ T$
- Episode 3: $A\ \tfrac{-1}{\longrightarrow}\ A\ \tfrac{+2}{\longrightarrow}\ T$

Compute the returns backwards. Episode 1: the last $A$ has $G = 3$; then $B$ has $G = 2 + 3 = 5$; then the first $A$ has $G = 1 + 5 = 6$. Episode 2: $A$ has $G = 4$, $B$ has $G = 0 + 4 = 4$. Episode 3: the second $A$ has $G = 2$, the first has $G = -1 + 2 = 1$.

| | returns used | estimate |
|---|---|---|
| **first-visit** $V(A)$ | $6,\ 4,\ 1$ | $11/3 = \mathbf{3.667}$ |
| **every-visit** $V(A)$ | $6,\ 3,\ 4,\ 1,\ 2$ | $16/5 = \mathbf{3.200}$ |
| $V(B)$, either | $5,\ 4$ | $\mathbf{4.5}$ |

They differ by $0.467$ from the same data. $B$ agrees because it never repeats within an episode — **the two methods can only differ where a state recurs**, and the disagreement is the correlation between a return and the returns of its own suffixes.

**Example 2 (why you'd care): the variance is the real cost.** Take the $3\times3$ gridworld of Module 1 — $-1$ per step, goal in the corner, uniform random policy — where [Lesson 1.3](01-03-value-functions-bellman-expectation.md) computed $V^\pi(\text{far corner}) = -27$ exactly.

Monte Carlo has no model, so it just walks. Here are the first twelve episode returns from the far corner:

$$-5,\ -17,\ -54,\ -4,\ -17,\ -16,\ -12,\ -18,\ -84,\ -9,\ -34,\ -29$$

The mean of the underlying distribution is $-27$ and its standard deviation is about $22$. **One episode finished in 4 steps; another took 84.** No individual sample is close to the answer, and several are off by a factor of three.

What that costs, in episodes:

| episodes | estimate | error |
|---|---|---|
| $1$ | $-5.00$ | $22.00$ |
| $10$ | $-23.60$ | $3.40$ |
| $100$ | $-26.92$ | $0.08$ |
| $1000$ | $-26.15$ | $0.85$ |
| $4000$ | $-27.12$ | $0.12$ |

Note that the error is **not monotone** — the estimate at $100$ episodes happens to be better than at $1000$. That is the nature of $1/\sqrt{n}$: the *typical* error shrinks, any particular run wanders. The standard error is $22/\sqrt{n}$, which is $7.0$ at $n=10$, $2.2$ at $n=100$, and $0.70$ at $n=1000$ — so getting one decimal place right reliably takes on the order of a thousand episodes.

**Compare that to dynamic programming on the same problem: one matrix solve, exact, instantly.** The whole of Module 2 is the price of not knowing $p(s'\mid s,a)$, and this table is the invoice. It is also the motivation for [Lesson 2.3](02-03-temporal-difference-learning-td0.md), which cuts the variance dramatically by refusing to wait for the end of the episode.

## Watch out

- **You might think** Monte Carlo needs the Markov property, since everything in Module 1 did — **but actually** it never uses it. MC estimates $\mathbb{E}[G_t \mid S_t = s]$ by averaging, and that is well defined whatever the state does or does not summarize. This makes MC the method of choice under partial observability, and it is the one clear advantage it holds over every bootstrapping method in this module.
- **You might think** the constant-$\alpha$ update $V \leftarrow V + \alpha(G - V)$ is just a convenient approximation to the running mean — **but actually** it converges to something different. It is an exponentially weighted average with effective memory $1/\alpha$, so it never settles and keeps tracking. For a fixed policy that is worse than $1/N$; for a policy that is still improving it is better, because old returns were generated by a policy that no longer exists.
- **You might think** you can run Monte Carlo on a continuing task by cutting episodes off after $N$ steps — **but actually** truncating introduces a bias: you are averaging $\sum_{k<N}\gamma^k R_{t+k+1}$, which omits the tail, and the omission is systematic rather than noise. It is a legitimate approximation when $\gamma^N$ is negligible, and a silent error when it is not. The honest fix for continuing tasks is bootstrapping, which is the next lesson.

## One-liner

> A value is an expected return, so sample returns and average them — unbiased, model-free, Markov-free, and drowning in variance.

## Problems

**P1 (🟢)** Two episodes with $\gamma = 0.5$, written as (state, reward-on-leaving):

- Episode 1: $X\ \tfrac{+2}{\to}\ Y\ \tfrac{+4}{\to}\ X\ \tfrac{+8}{\to}\ T$
- Episode 2: $Y\ \tfrac{-2}{\to}\ X\ \tfrac{+6}{\to}\ T$

(a) Compute all returns by the backward recursion $G \leftarrow R + \gamma G$.
(b) Give the first-visit estimates of $V(X)$ and $V(Y)$.
(c) Give the every-visit estimate of $V(X)$.
(d) State which of the two estimates of $V(X)$ is unbiased, and why the other is not.

**P2 (🟡)** An agent uses the incremental update $V(s) \leftarrow V(s) + \alpha[G - V(s)]$ with a **constant** $\alpha = 0.1$, starting from $V(s) = 0$, and observes the returns $10, 10, 10, 10$ in that order.

(a) Compute $V(s)$ after each of the four updates.
(b) Compute what the $1/N$ running mean would give after the same four returns.
(c) Write the constant-$\alpha$ estimate after $n$ identical returns $G$ in closed form, and state its limit.
(d) The agent now switches to a better policy whose true value is $20$, and observes $20$ repeatedly. State which of the two update rules adapts faster, and give the reason in terms of the weight each places on the newest sample.

**P3 (🔴)** A state $s$ has the property that every episode visiting it visits it **exactly twice**, and the two returns are strongly positively correlated (the second is always the first minus a fixed constant $c > 0$, discounted).

(a) State whether first-visit MC is unbiased here.
(b) State whether every-visit MC is unbiased here, and if not, in which direction it errs.
(c) Suppose instead you want the smallest *variance* for a fixed number of episodes. Argue which estimator you would prefer, and name the trade-off you are making.
(d) A colleague proposes averaging the two returns within each episode first, then averaging across episodes. State what this estimator converges to and whether it estimates $V^\pi(s)$.

<details>
<summary>Solutions</summary>

**P1**

(a) Backwards, $G \leftarrow R + 0.5\,G$.

*Episode 1:* the second $X$ has $G = 8$. Then $Y$: $G = 4 + 0.5(8) = 8$. Then the first $X$: $G = 2 + 0.5(8) = 6$.

*Episode 2:* $X$ has $G = 6$. Then $Y$: $G = -2 + 0.5(6) = 1$.

| episode | visits, in order | returns |
|---|---|---|
| 1 | $X$, $Y$, $X$ | $6,\ 8,\ 8$ |
| 2 | $Y$, $X$ | $1,\ 6$ |

(b) First-visit $V(X)$: the first visit in episode 1 gave $6$, in episode 2 gave $6$. So $V(X) = \mathbf{6}$.

First-visit $V(Y)$: $8$ and $1$, so $V(Y) = 9/2 = \mathbf{4.5}$.

(c) Every-visit $V(X)$: returns $6, 8, 6$, so $V(X) = 20/3 \approx \mathbf{6.667}$.

(d) **First-visit is unbiased.** Each episode supplies exactly one sample, the episodes are independent and identically distributed, and the sample mean of i.i.d. draws has the right expectation.

Every-visit is not, because within episode 1 the returns $6$ and $8$ come from the same trajectory — the return from the first visit *contains* the return from the second, discounted, since $6 = 2 + 0.5(8)$. They are not independent draws, and the episodes contribute unequal numbers of samples (two from episode 1, one from episode 2), so the average is implicitly reweighted toward episodes that happen to revisit $X$. Both effects vanish as the number of episodes grows, which is why every-visit is still consistent.

**P2**

(a) $V \leftarrow V + 0.1(10 - V)$, starting from $0$:

| update | computation | $V$ |
|---|---|---|
| 1 | $0 + 0.1(10 - 0)$ | $\mathbf{1}$ |
| 2 | $1 + 0.1(10-1)$ | $\mathbf{1.9}$ |
| 3 | $1.9 + 0.1(8.1)$ | $\mathbf{2.71}$ |
| 4 | $2.71 + 0.1(7.29)$ | $\mathbf{3.439}$ |

(b) The running mean of four identical returns of $10$ is $\mathbf{10}$ — reached after the *first* update, since $V \leftarrow 0 + \tfrac11(10 - 0) = 10$ and it never moves again.

(c) Each update leaves a fraction $(1-\alpha)$ of the old error, so after $n$ identical returns

$$V_n = G\big[1 - (1-\alpha)^n\big] = 10\big(1 - 0.9^n\big),$$

which checks against (a): $10(1-0.9^4) = 10(0.3439) = 3.439$ ✓. The limit is $G = \mathbf{10}$, approached geometrically rather than reached.

(d) **The constant-$\alpha$ rule adapts faster** — by a widening margin.

The $1/N$ rule gives the $n$-th sample weight $1/n$, so by the time the policy changes at, say, $n = 500$, a new return moves the estimate by only $1/500$ of the discrepancy. It is still averaging in all 500 returns generated by the *old* policy, which are now simply wrong, and it will take hundreds more samples to wash them out.

The constant-$\alpha$ rule always gives the newest sample weight $\alpha = 0.1$ and discounts a sample from $k$ steps ago by $0.9^k$, so its memory is about $1/\alpha = 10$ returns regardless of how long it has been running. It reaches the new value $20$ within a few dozen samples.

**This is why every control method in this course uses a constant step size**: the policy is changing, so the target is non-stationary, and an estimator that never forgets cannot track it.

**P3**

(a) **Yes, unbiased.** First-visit uses one return per episode and the episodes are i.i.d., so the estimator is a sample mean of i.i.d. draws from the return distribution given $S_t = s$. The internal correlation within an episode is irrelevant because only one sample is taken from each.

(b) **No, biased — and it errs low.** Every-visit averages the first return $G^{(1)}$ and the second $G^{(2)}$ from each episode. By hypothesis the second is the first minus $c$ (after discounting), so $G^{(2)} < G^{(1)}$, and the average of the pair is pulled below $\mathbb{E}[G^{(1)}] = V^\pi(s)$.

Concretely, if $G^{(2)} = G^{(1)} - c$ exactly, the per-episode average is $G^{(1)} - c/2$, so every-visit converges to $V^\pi(s) - c/2$ — **and here it does not even wash out with more episodes**, because the hypothesis makes the correlation structure identical in every episode rather than an artefact of finite samples. (In the usual case, where the number of revisits varies randomly, the bias does vanish asymptotically and every-visit is consistent.)

(c) *Accept criterion: either answer is defensible provided the stated trade-off is correct.*

**Prefer every-visit for lower variance.** It uses twice as many returns from the same number of episodes, and averaging more samples reduces variance — though not by the full factor of two, because the two returns per episode are correlated and correlated samples carry less independent information than their count suggests.

The trade-off is the standard **bias–variance** one: every-visit buys a variance reduction with the bias computed in (b). The right choice depends on which dominates the mean squared error at the sample size you can afford — with few episodes the variance term dominates and every-visit wins; with many, the bias floor of $c/2$ dominates and first-visit wins. This is the same calculus as [`machine-learning` 1.2](../../machine-learning/lessons/01-02-generalization-and-the-bias-variance-tradeoff.md)'s, applied to an estimator rather than a model.

(d) It converges to $\mathbb{E}\!\left[\tfrac12\big(G^{(1)} + G^{(2)}\big)\right] = V^\pi(s) - c/2$ — **the same limit as every-visit**, since every episode contributes exactly two visits and so the two schemes weight the episodes identically.

So it does **not** estimate $V^\pi(s)$. It is a perfectly well-defined quantity — the expected return from an average visit to $s$ — but $V^\pi(s)$ is the expected return from the state *on entering it*, and averaging over visits at different depths within an episode answers a different question. The lesson generalizes: **an estimator is only as good as the population it implicitly samples from**, and "all visits to $s$" is not the same population as "episodes reaching $s$".

</details>

## Flashback

**From Lesson 1.5 (Policy evaluation and policy iteration):** A two-state MDP with $\gamma = 0.5$. In state $1$ the policy takes *wait* with probability $\tfrac12$ (reward $+1$, stays at state $1$) and *go* with probability $\tfrac12$ (reward $-1$, moves to state $2$). State $2$ has a single action with reward $+10$ that terminates.

(a) Run iterative policy evaluation from $V_0 \equiv 0$ for four synchronous sweeps, reporting $V_k(1)$.
(b) Solve for $V^\pi(1)$ exactly.
(c) Compute both action-values at state $1$ and name the greedy action.
(d) Evaluate the improved policy and confirm it is optimal.

<details>
<summary>Solution</summary>

(a) State $2$ terminates, so $V_k(2) = 10$ for all $k \ge 1$, and $V_0(2) = 0$. The sweep at state $1$ is

$$V_{k+1}(1) = \tfrac12\big[1 + 0.5\,V_k(1)\big] + \tfrac12\big[-1 + 0.5\,V_k(2)\big].$$

| $k$ | computation | $V_k(1)$ |
|---|---|---|
| $1$ | $\tfrac12(1+0) + \tfrac12(-1+0)$ | $\mathbf{0}$ |
| $2$ | $\tfrac12(1+0) + \tfrac12(-1+5)$ | $\mathbf{2.5}$ |
| $3$ | $\tfrac12(1+1.25) + \tfrac12(4)$ | $\mathbf{3.125}$ |
| $4$ | $\tfrac12(1+1.5625) + \tfrac12(4)$ | $\mathbf{3.28125}$ |

Note sweep 1 gives exactly $0$: the $+1$ and the $-1$ cancel while both continuations are still $0$, so the first sweep carries no information at all about state $1$. Information has to reach it from the terminal reward, one sweep at a time.

(b) $V^\pi(1) = \tfrac12[1 + 0.5V^\pi(1)] + \tfrac12[-1 + 5] = 0.5 + 0.25V^\pi(1) + 2$, so $0.75V^\pi(1) = 2.5$ and

$$V^\pi(1) = \frac{2.5}{0.75} = \frac{10}{3} \approx \mathbf{3.333}.$$

The sweeps in (a) are converging to this: $0,\ 2.5,\ 3.125,\ 3.28125,\ \dots$, each closing half the remaining gap — which is $\gamma = 0.5$ acting as the contraction modulus of [Lesson 1.6](01-06-value-iteration-and-convergence.md).

(c) $Q^\pi(1,\text{wait}) = 1 + 0.5\left(\tfrac{10}{3}\right) = 1 + \tfrac53 = \tfrac83 \approx 2.667$ and $Q^\pi(1,\text{go}) = -1 + 0.5(10) = 4$.

**Greedy: *go*.** (Check with the identity: $\tfrac12\left(\tfrac83\right) + \tfrac12(4) = \tfrac43 + 2 = \tfrac{10}{3} = V^\pi(1)$ ✓.)

(d) Always-*go*: $V(1) = -1 + 0.5(10) = \mathbf{4}$, an improvement over $10/3$ as the policy improvement theorem promised.

It is optimal: the alternative at state $1$ is now worth $Q(1,\text{wait}) = 1 + 0.5(4) = 3 < 4$, so the policy is greedy with respect to its own value function and therefore satisfies the Bellman optimality equation.

Worth contrasting with [Lesson 1.6](01-06-value-iteration-and-convergence.md)'s flashback, where the *waiting* action won. The structure is identical; only the size of the terminal prize changed. At a reward of $10$ the discounted prize ($5$) beats the standing $+1$; at a reward of $6$ it would not. **Which action is optimal is a quantitative question about $\gamma$ and the reward magnitudes, never a structural one** — which is exactly why an agent has to compute values rather than reason about the shape of the problem.

</details>

## Connections

- **Backward:** the estimator is the definition of $V^\pi$ from [Lesson 1.3](01-03-value-functions-bellman-expectation.md) with the expectation replaced by a sample average, and the backward recursion for returns is [Lesson 1.1](01-01-the-rl-problem.md)'s $G_t = R_{t+1} + \gamma G_{t+1}$. The convergence guarantee is [`probability-theory` 4.2](../../probability-theory/lessons/04-02-laws-of-large-numbers.md)'s law of large numbers, with no contraction argument needed.
- **Forward:** [Lesson 2.2](02-02-monte-carlo-control.md) plugs this estimator into [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md)'s evaluate-improve loop, which forces a switch from $V$ to $Q$ and raises the exploration problem. [Lesson 2.3](02-03-temporal-difference-learning-td0.md) replaces the sampled return $G_t$ with the bootstrapped target $R_{t+1} + \gamma V(S_{t+1})$, trading this lesson's variance for bias, and [Lesson 2.7](02-07-n-step-returns-and-the-lambda-return.md) shows the two are endpoints of a continuum.
- **Sideways:** the estimator here is ordinary Monte Carlo integration, the same tool that prices path-dependent derivatives in [`mathematical-finance`](../../mathematical-finance/syllabus.md) — and the $1/\sqrt{n}$ rate, independent of dimension, is the same property that makes it the method of last resort for high-dimensional integrals throughout [`numerical-analysis`](../../numerical-analysis/syllabus.md).
