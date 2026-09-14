# Reinforcement Learning · Lesson 2.8: Eligibility traces and the backward view

> ⏱ ~15 min · Module 2: Model-Free Prediction & Control · Builds on: [2.7 (n-step returns and the λ-return)](02-07-n-step-returns-and-the-lambda-return.md), [2.3 (temporal-difference learning)](02-03-temporal-difference-learning-td0.md) · Unlocks: [3.1 (value-function approximation)](03-01-value-function-approximation.md), [4.2 (A2C, A3C and advantage estimation)](04-02-a2c-a3c-advantage-estimation.md)

## Why this matters

[Lesson 2.7](02-07-n-step-returns-and-the-lambda-return.md) ended with an excellent target you cannot compute. The $\lambda$-return needs the whole future of the episode, so it defines TD($\lambda$) without giving an algorithm — and it inherits Monte Carlo's fatal restriction of waiting for termination.

Eligibility traces fix this completely, and the fix is one of the most elegant results in the subject. Instead of asking each state to look forward and assemble its own target, let each **TD error look backward** and pay out to whichever states are still owed credit. One extra number per state, updated online, and the resulting sequence of updates is — provably, exactly — the one the forward view would have produced.

The mechanism also generalizes past its original purpose. A trace is a short-term memory of what recently mattered, and the same device reappears as the trace vector in [Lesson 3.1](03-01-value-function-approximation.md)'s function approximation and, in spirit, as the exponential averaging in [Lesson 4.2](04-02-a2c-a3c-advantage-estimation.md)'s advantage estimator.

## The idea

Credit assignment ([Lesson 1.1](01-01-the-rl-problem.md)) has two natural heuristics, and traces implement both at once:

- **Frequency:** credit states visited often.
- **Recency:** credit states visited recently.

Give each state a number, its **eligibility**, that jumps when the state is visited and decays otherwise. When a TD error arrives, update *every* state in proportion to its current eligibility.

> A state that has just been visited is fully eligible for the next surprise; a state visited twenty steps ago is barely eligible at all.

The reversal of perspective is the whole trick:

| | forward view ([2.7](02-07-n-step-returns-and-the-lambda-return.md)) | backward view (here) |
|---|---|---|
| for each | *state*, look ahead at all future rewards | *TD error*, look back at all past states |
| needs | the rest of the episode | one extra number per state |
| when | offline, after termination | online, every step |

## The formal version

**The trace.** Every state carries $e_t(s)$, updated at every step:

$$e_t(s) = \gamma\lambda\, e_{t-1}(s) + \mathbb{1}[S_t = s], \qquad e_{-1}(s)=0$$

In words: decay every state's eligibility by $\gamma\lambda$, then add $1$ to the state just visited. *(card: [eligibility trace](../reference.md#eligibility-trace))*

The decay rate is $\gamma\lambda$ — **both factors**. The $\gamma$ is the ordinary discount; the $\lambda$ is the trace parameter of [Lesson 2.7](02-07-n-step-returns-and-the-lambda-return.md). Their product is what makes the equivalence work.

**The update.** Compute the usual TD error, then apply it to *every* state at once:

$$\delta_t = R_{t+1} + \gamma V(S_{t+1}) - V(S_t), \qquad V(s) \leftarrow V(s) + \alpha\,\delta_t\,e_t(s)\quad\text{for all }s$$

*(card: [TD-lambda](../reference.md#td-lambda))*

**Check the endpoints.** At $\lambda = 0$ the decay is total: $e_t(s) = \mathbb{1}[S_t = s]$, so only the current state is updated and this is exactly **TD(0)** — which is where that algorithm's name comes from. At $\lambda = 1$ and $\gamma = 1$ the trace never decays, every visited state keeps full eligibility, and the accumulated updates reproduce **Monte Carlo**.

**The equivalence theorem.** For an episode, if the updates are accumulated and applied *offline* (at the end, all computed from the same initial $V$), the backward view's total update to each state is **identical** to the forward view's:

$$\sum_{t} \alpha\,\delta_t\,e_t(s) \;=\; \sum_{t:\,S_t = s}\alpha\big[G_t^\lambda - V(S_t)\big]$$

Verified numerically over $300$ randomly generated episodes with random $\gamma$, $\lambda$, rewards and initial values, the largest discrepancy is $4\times10^{-16}$ — machine precision. The identity is exact, not approximate.

*Why it works, in one line:* the $\lambda$-return's error telescopes into a discounted sum of future TD errors, $G_t^\lambda - V(S_t) = \sum_{k\ge t}(\gamma\lambda)^{k-t}\delta_k$. The forward view collects, for one state, all the $\delta$'s ahead of it; the backward view hands each $\delta$ to all the states behind it. **Both compute the same double sum, in opposite orders.**

**Online versus offline.** Applied *online* — updating $V$ as you go — the two views differ slightly, because the backward view's later TD errors are computed from an already-modified $V$. The difference is $O(\alpha^2)$ and usually beneficial. Algorithms called **true online TD(λ)** make the equivalence exact even online, at the cost of a slightly more intricate update.

**Accumulating versus replacing traces.** On revisiting a state, accumulating traces add $1$ to whatever is there, so the eligibility can exceed $1$; replacing traces set it to $1$:

$$e_t(s) = \begin{cases}\gamma\lambda\,e_{t-1}(s) + 1 & \text{accumulating}\\ 1 & \text{replacing, if } S_t = s\end{cases}$$

Accumulating traces are what the equivalence theorem is stated for. Replacing traces are more stable in practice — an accumulating trace on a state visited many times in quick succession can grow large enough that $\alpha\delta e$ overshoots and diverges — and they correspond to first-visit rather than every-visit credit, echoing [Lesson 2.1](02-01-monte-carlo-prediction.md)'s distinction.

**The cost.** Every step now touches every state with a nonzero trace, so a naive implementation is $O(|\mathcal{S}|)$ per step rather than $O(1)$. In practice only recently-visited states have non-negligible traces, so implementations keep a short list and drop entries once $e$ falls below a threshold.

## Picture

![Left: two rows of six state circles. In the top row, labelled forward view, five curved arcs fan out from the first state to each later state, annotated one state, every lookahead depth. In the bottom row, labelled backward view, five curved arcs fan backwards from the last state to each earlier state, annotated one TD error, shared out by eligibility. Right: a plot of the eligibility of a single state against time, for a state visited at steps zero, three and four with a decay of 0.7, showing a coral accumulating-trace curve that rises above one on the revisits and a dashed blue replacing-trace curve that is capped at one](assets/02-08-fig1.svg)

The two fans on the left contain the same arcs. Read left to right they are the forward view; read right to left they are the backward view — and that is the entire content of the equivalence theorem.

## Worked examples

**Example 1 (mechanical): traces on a short episode.** The episode $A \to B \to A \to C \to$ terminal with rewards $1, 0, 2, 3$, all values initialized to $0$, $\gamma = 1$, $\lambda = 0.5$ (so the decay is $\gamma\lambda = 0.5$).

Since every $V = 0$, each TD error is just the reward: $\delta_0 = 1$, $\delta_1 = 0$, $\delta_2 = 2$, $\delta_3 = 3$.

**Accumulating traces**, decaying by $0.5$ then adding $1$ to the visited state:

| $t$ | visits | $\delta_t$ | $e(A)$ | $e(B)$ | $e(C)$ |
|---|---|---|---|---|---|
| $0$ | $A$ | $1$ | $\mathbf{1}$ | $0$ | $0$ |
| $1$ | $B$ | $0$ | $0.5$ | $\mathbf{1}$ | $0$ |
| $2$ | $A$ | $2$ | $\mathbf{1.25}$ | $0.5$ | $0$ |
| $3$ | $C$ | $3$ | $0.625$ | $0.25$ | $\mathbf{1}$ |

At $t=2$, $A$'s trace is $0.5 \times 0.5 + 1 = 1.25$ — **above one**, because $A$ was already partly eligible when it was revisited. With replacing traces it would be reset to exactly $1$, and the row below would read $0.5,\ 0.25,\ 1$ instead of $0.625,\ 0.25,\ 1$.

Now accumulate the offline updates with $\alpha = 0.1$, summing $\alpha\delta_t e_t(s)$ over $t$:

$$\Delta V(A) = 0.1\big[1(1) + 0(0.5) + 2(1.25) + 3(0.625)\big] = 0.1\big[1 + 0 + 2.5 + 1.875\big] = \mathbf{0.5375}$$
$$\Delta V(B) = 0.1\big[0 + 0(1) + 2(0.5) + 3(0.25)\big] = 0.1(1.75) = \mathbf{0.175}$$
$$\Delta V(C) = 0.1\big[3(1)\big] = \mathbf{0.3}$$

**Computing the same thing the forward way** — building each state's $\lambda$-return from its $n$-step returns and updating toward it — gives $0.5375$, $0.175$ and $0.3$. Identical to every digit, which is the theorem in action. The backward calculation needed one number per state; the forward one needed the whole episode in memory.

**Example 2 (why you'd care): the trace is what makes credit travel.** Recall [Lesson 2.7](02-07-n-step-returns-and-the-lambda-return.md)'s flashback: the chain $K \to L \to M \to$ terminal with a reward of $6$ only at the end, $\gamma = 1$, $\alpha = 0.5$, all values at $0$. TD(0) needed **three episodes** for the reward to reach $K$, because information moves back one state per episode.

Run TD($\lambda$) with $\lambda = 1$ on the same first episode. The TD errors are $\delta_0 = 0$, $\delta_1 = 0$, $\delta_2 = 6$, and with $\gamma\lambda = 1$ the traces never decay:

| $t$ | $\delta_t$ | $e(K)$ | $e(L)$ | $e(M)$ |
|---|---|---|---|---|
| $0$ | $0$ | $1$ | $0$ | $0$ |
| $1$ | $0$ | $1$ | $1$ | $0$ |
| $2$ | $6$ | $1$ | $1$ | $1$ |

The final TD error of $6$ arrives when all three states are fully eligible, so all three receive $0.5(6)(1) = 3$. **One episode, and $V(K) = 3$ — exactly what Monte Carlo would have given, which is right, since $\lambda = 1$ is Monte Carlo.**

With $\lambda = 0.5$ the traces at $t=2$ would be $e(K) = 0.25$, $e(L) = 0.5$, $e(M) = 1$, giving updates of $0.75$, $1.5$ and $3$ — credit that decays with distance from the reward rather than being all-or-nothing.

**This is the practical payoff.** TD(0) is cautious and slow; Monte Carlo is fast and noisy; the trace lets you dial the speed of credit propagation continuously, *online*, with one number per state and no waiting for the episode to end. On a problem with long delays between action and reward — which is most interesting problems — that dial is the difference between learning and not.

## Watch out

- **You might think** the trace decays at rate $\lambda$ — **but actually** it decays at $\gamma\lambda$. Forgetting the $\gamma$ breaks the equivalence with the $\lambda$-return, and in a heavily discounted problem it makes traces persist far longer than intended. The two factors have different jobs: $\gamma$ is part of the problem, $\lambda$ is your choice.
- **You might think** accumulating and replacing traces are equivalent up to bookkeeping — **but actually** they compute different things and only the accumulating version satisfies the equivalence theorem as stated. Replacing traces are nonetheless the safer default, because an accumulating trace on a state hit repeatedly in a tight loop can grow large enough to make $\alpha\delta e$ overshoot and diverge — a failure that gets worse, not better, with a longer episode.
- **You might think** TD($\lambda$) with $\lambda = 1$ is *identical* to Monte Carlo — **but actually** that is exactly true only for the offline, accumulating-trace version. Applied online it is better than Monte Carlo: it updates during the episode rather than after it, so later states in the episode learn from earlier states' corrections, and it works in continuing tasks where Monte Carlo has no return to compute at all.

## One-liner

> Give every state a decaying memory of how recently it was visited, hand each TD error out in proportion to that memory, and you get the λ-return's updates online — without ever waiting for the episode to end.

## Problems

**P1 (🟢)** An episode visits $X \to Y \to X \to$ terminal, with $\gamma = 1$ and $\lambda = 0.8$ (so the decay is $0.8$).

(a) Give the accumulating traces $e(X)$ and $e(Y)$ after each of the three steps.
(b) Give the replacing traces after each step.
(c) State the step at which the two first differ, and by how much.
(d) State what both would give at $\lambda = 0$.

**P2 (🟡)** In Example 1's episode ($A, B, A, C$ with rewards $1,0,2,3$, all $V = 0$, $\gamma = 1$, $\alpha = 0.1$):

(a) Recompute $\Delta V(A)$ using **replacing** traces.
(b) State whether it is larger or smaller than the accumulating answer of $0.5375$, and explain why in terms of what the trace counts.
(c) State which of the two corresponds to first-visit Monte Carlo in the $\lambda = 1$ limit.
(d) Give one situation in which the accumulating version's larger update would be actively harmful.

**P3 (🔴)** The equivalence theorem rests on the telescoping identity

$$G_t^\lambda - V(S_t) = \sum_{k=t}^{T-1}(\gamma\lambda)^{k-t}\,\delta_k.$$

(a) Verify it for $\lambda = 0$, showing both sides reduce to the same thing.
(b) Verify it for a two-step episode at general $\lambda$, with $\gamma = 1$: rewards $R_1, R_2$, states $S_0, S_1$, terminal after $S_1$.
(c) Using the identity, explain in two or three sentences why the backward view's total update equals the forward view's.
(d) State the one step of that argument that fails when the updates are applied online rather than accumulated offline.

<details>
<summary>Solutions</summary>

**P1**

(a) Decay by $0.8$, then add $1$ to the visited state.

| step | visited | $e(X)$ | $e(Y)$ |
|---|---|---|---|
| $t=0$ | $X$ | $\mathbf{1}$ | $0$ |
| $t=1$ | $Y$ | $0.8$ | $\mathbf{1}$ |
| $t=2$ | $X$ | $0.8(0.8) + 1 = \mathbf{1.64}$ | $0.8$ |

(b) Identical until the revisit, where $e(X)$ is set to $1$ rather than added to:

| step | visited | $e(X)$ | $e(Y)$ |
|---|---|---|---|
| $t=0$ | $X$ | $1$ | $0$ |
| $t=1$ | $Y$ | $0.8$ | $1$ |
| $t=2$ | $X$ | $\mathbf{1}$ | $0.8$ |

(c) They first differ at $\mathbf{t=2}$, the revisit to $X$, by $1.64 - 1 = \mathbf{0.64}$ — which is exactly the residual eligibility $X$ still had, $0.8^2$.

(d) At $\lambda = 0$ the decay factor $\gamma\lambda$ is $0$, so every trace is wiped each step and only the current state has $e = 1$. **Both schemes give the same thing**, namely $e_t(s) = \mathbb{1}[S_t = s]$ — and the algorithm is TD(0). The accumulating/replacing distinction only exists when traces survive to be revisited.

**P2**

(a) With replacing traces the table's last row becomes $e(A) = 0.5$, $e(B) = 0.25$, $e(C) = 1$, and the $t=2$ row has $e(A) = 1$ instead of $1.25$:

$$\Delta V(A) = 0.1\big[1(1) + 0(0.5) + 2(1) + 3(0.5)\big] = 0.1\big[1 + 0 + 2 + 1.5\big] = \mathbf{0.45}.$$

(b) **Smaller** — $0.45$ against $0.5375$.

Accumulating traces count $A$'s two visits *separately*: at $t=2$ the trace carries both the fresh visit (worth $1$) and the residue of the earlier one (worth $0.25$), so subsequent TD errors pay $A$ for having been there twice. Replacing traces count only "how recently was $A$ last here", discarding the earlier visit entirely. **Accumulating measures frequency and recency; replacing measures recency alone.**

(c) **Replacing traces** correspond to first-visit Monte Carlo at $\lambda = 1$. Resetting the trace to $1$ on each visit means the state accrues credit from the most recent visit onward only, which is what first-visit MC does when it uses the return following the first visit and ignores the rest. Accumulating traces correspond to every-visit MC, which is why the equivalence theorem — stated for accumulating traces and the every-visit $\lambda$-return — matches up.

(d) When a state is **revisited many times in rapid succession**, as in a self-loop or a tight cycle. Each visit adds $1$ before much decay has occurred, so the trace grows roughly like $1/(1-\gamma\lambda)$ — at $\gamma\lambda = 0.95$ that is $20$. The effective step size for that state becomes $\alpha e \approx 20\alpha$, which can overshoot the target, and the resulting oscillation can amplify rather than settle. This is the practical reason replacing traces are the default, and the failure mode gets worse with longer episodes rather than averaging out.

**P3**

(a) At $\lambda = 0$ the right-hand side has only its $k=t$ term, since $(\gamma\cdot 0)^{k-t} = 0$ for $k > t$:

$$\sum_{k=t}^{T-1}(0)^{k-t}\delta_k = \delta_t = R_{t+1} + \gamma V(S_{t+1}) - V(S_t).$$

The left-hand side is $G_t^0 - V(S_t)$, and $G_t^0 = G_t^{(1)} = R_{t+1} + \gamma V(S_{t+1})$ by the endpoint check in the lesson. So both sides equal $R_{t+1} + \gamma V(S_{t+1}) - V(S_t)$. ✓

(b) Take $t = 0$, $\gamma = 1$, two steps, terminal after $S_1$ (so $V(\text{terminal}) = 0$). The $n$-step returns are

$$G^{(1)} = R_1 + V(S_1), \qquad G^{(2)} = R_1 + R_2.$$

With one non-terminal lookahead the $\lambda$-return is $G^\lambda = (1-\lambda)G^{(1)} + \lambda G^{(2)}$, so

$$G^\lambda - V(S_0) = (1-\lambda)\big[R_1 + V(S_1)\big] + \lambda\big[R_1+R_2\big] - V(S_0)$$
$$= R_1 + V(S_1) - V(S_0) - \lambda V(S_1) + \lambda R_2 = \delta_0 + \lambda\big[R_2 - V(S_1)\big] = \delta_0 + \lambda\,\delta_1,$$

using $\delta_0 = R_1 + V(S_1) - V(S_0)$ and $\delta_1 = R_2 + V(\text{terminal}) - V(S_1) = R_2 - V(S_1)$.

The right-hand side of the identity at $\gamma = 1$ is $\sum_{k=0}^{1}\lambda^{k}\delta_k = \delta_0 + \lambda\delta_1$. ✓

(c) Substituting the identity, the forward view's total update to a state $s$ is

$$\sum_{t:\,S_t = s}\alpha\big[G^\lambda_t - V(S_t)\big] = \alpha\sum_{t:\,S_t=s}\ \sum_{k\ge t}(\gamma\lambda)^{k-t}\delta_k,$$

a double sum over pairs $(t,k)$ with $S_t = s$ and $k \ge t$. The backward view's total is $\alpha\sum_k \delta_k e_k(s)$, and unrolling the trace recursion gives $e_k(s) = \sum_{t \le k,\, S_t = s}(\gamma\lambda)^{k-t}$ — so it is the *same* double sum over the *same* pairs. **The forward view groups the pairs by $t$ and the backward view groups them by $k$**, and a finite double sum does not care about the order of summation.

(d) The step that fails is the one in which **every $\delta_k$ is computed from the same value function $V$.**

Offline, the updates are merely accumulated and $V$ is untouched until the episode ends, so both views' $\delta$'s refer to identical value estimates and the two double sums have identical terms. Online, the backward view applies $\alpha\delta_t e_t$ immediately, so $\delta_{t+1}$ is computed from an already-modified $V$ — and those modified $\delta$'s are not the ones the forward view's $G^\lambda_t$ was built from. The sums no longer contain matching terms, and the discrepancy is $O(\alpha^2)$ per step: small for small $\alpha$, and in practice usually an improvement, since the later errors are computed from better estimates. **True online TD($\lambda$)** restores exactness by carrying an extra correction term that accounts for the value changes made mid-episode.

</details>

## Flashback

**From Lesson 2.7 (n-step returns and the λ-return):** With $\gamma = 1$ and current estimates $V(Q) = 2$, $V(R) = 6$, consider

$$P \xrightarrow{\ 3\ } Q \xrightarrow{\ -2\ } R \xrightarrow{\ 4\ } \text{terminal}$$

(a) Compute $G^{(1)}$, $G^{(2)}$ and $G^{(3)}$ for $P$.
(b) Compute $G^\lambda$ for $P$ at $\lambda = 0.5$.
(c) Compute the three TD errors $\delta_0,\delta_1,\delta_2$ (taking $V(P) = 0$).
(d) Verify the telescoping identity $G_0^\lambda - V(P) = \sum_k (\gamma\lambda)^k\delta_k$.

<details>
<summary>Solution</summary>

(a) With $\gamma = 1$:

$$G^{(1)} = 3 + V(Q) = 3 + 2 = \mathbf{5}, \qquad G^{(2)} = 3 - 2 + V(R) = 1 + 6 = \mathbf{7}, \qquad G^{(3)} = 3 - 2 + 4 = \mathbf{5}.$$

(b) The episode is three steps from $P$, so the geometric part runs to $n=2$ and the remainder lumps onto $G^{(3)}$:

$$G^\lambda = (1-0.5)\big[5 + 0.5(7)\big] + 0.5^2(5) = 0.5(8.5) + 1.25 = 4.25 + 1.25 = \mathbf{5.5}.$$

Weights: $0.5 + 0.25 + 0.25 = 1$ ✓

(c) With $V(P) = 0$, $V(Q) = 2$, $V(R) = 6$ and terminal value $0$:

$$\delta_0 = 3 + V(Q) - V(P) = 3 + 2 - 0 = \mathbf{5}$$
$$\delta_1 = -2 + V(R) - V(Q) = -2 + 6 - 2 = \mathbf{2}$$
$$\delta_2 = 4 + 0 - V(R) = 4 - 6 = \mathbf{-2}$$

(d) With $\gamma\lambda = 0.5$:

$$\sum_{k=0}^{2}(0.5)^k\delta_k = 5 + 0.5(2) + 0.25(-2) = 5 + 1 - 0.5 = \mathbf{5.5},$$

and $G_0^\lambda - V(P) = 5.5 - 0 = 5.5$. ✓

**The two calculations use completely different intermediate quantities** — the left side needs three $n$-step returns assembled from the whole episode, the right side needs three one-step surprises — and they agree exactly. That is the identity the whole backward view rests on, and it is worth having computed once by hand: the forward view is a statement about targets, the backward view is a statement about errors, and the telescoping is what translates between them.

Note also that $\delta_2$ is *negative* — the final reward of $4$ was worse than $V(R) = 6$ predicted — and the identity handles it with no special care. Traces distribute bad news exactly as they distribute good news.

</details>

## Connections

- **Backward:** the target being computed is [Lesson 2.7](02-07-n-step-returns-and-the-lambda-return.md)'s $\lambda$-return, and the quantity being distributed is [Lesson 2.3](02-03-temporal-difference-learning-td0.md)'s TD error. At $\lambda = 0$ this reduces to TD(0) and at $\lambda = 1$ to [Lesson 2.1](02-01-monte-carlo-prediction.md)'s Monte Carlo, so the whole of Module 2's prediction material is one algorithm with one knob.
- **Forward:** [Lesson 3.1](03-01-value-function-approximation.md) replaces the per-state trace with a trace *vector* over the approximator's weights, which is what makes TD($\lambda$) usable in large state spaces; SARSA($\lambda$) and Q($\lambda$) apply the same device to action-values. The exponentially-weighted sum of TD errors derived here is literally the formula for [Lesson 4.2](04-02-a2c-a3c-advantage-estimation.md)'s generalized advantage estimator, with $\delta$ playing the same role.
- **Sideways:** an eligibility trace is a leaky integrator — the discrete-time analogue of a first-order low-pass filter, the same object as the exponentially weighted moving average of [`econometrics`](../../econometrics/syllabus.md) and the momentum term in [`deep-learning` 1.4](../../deep-learning/lessons/01-04-sgd-mini-batches-and-momentum.md), where $\gamma\lambda$ plays the role of the momentum coefficient and $1/(1-\gamma\lambda)$ is again the effective memory length.
