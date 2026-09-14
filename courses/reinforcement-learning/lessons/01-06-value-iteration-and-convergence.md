# Reinforcement Learning · Lesson 1.6: Value iteration and why it converges

> ⏱ ~15 min · Module 1: MDPs & Dynamic Programming · Builds on: [1.5 (policy evaluation and policy iteration)](01-05-policy-evaluation-and-policy-iteration.md), [1.4 (optimality and the Bellman optimality equation)](01-04-optimality-bellman-optimality.md) · Unlocks: [2.2 (Monte Carlo control)](02-02-monte-carlo-control.md), [2.3 (temporal-difference learning)](02-03-temporal-difference-learning-td0.md)

## Why this matters

[Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md) ended with a loose end. Truncating policy evaluation to a single sweep collapses the two phases into one update and gives **value iteration** — but the termination proof evaporated, because there is no longer a sequence of policies to count.

The replacement argument is the most important piece of mathematics in Module 1, and it is the one [`operations-research` 3.4](../../operations-research/lessons/03-04-stochastic-dynamic-programming.md) explicitly takes on faith. The Bellman optimality update is a **contraction**: applying it to any two value functions brings them strictly closer together. Everything follows from that one fact — existence of $V^*$, its uniqueness, convergence from any starting point, and a computable error bound at every step.

It also pays forward. The convergence proofs for [TD(0)](02-03-temporal-difference-learning-td0.md) and [Q-learning](02-05-q-learning-off-policy-td-control.md) are stochastic-approximation versions of this same contraction argument, and the *failure* of the contraction is exactly what goes wrong in [Lesson 3.2](03-02-approximate-control-deadly-triad.md)'s deadly triad. Knowing why it works here is what lets you diagnose why it breaks there.

## The idea

Think of a value function as a *point* in $\mathbb{R}^{|\mathcal{S}|}$ — one coordinate per state. The Bellman optimality update is then a map $T$ from points to points.

> $T$ is a shrinking map: it takes any two points and brings them at least a factor $\gamma$ closer.

Apply it repeatedly and every pair of points is squeezed toward each other, so the whole space collapses onto a single point that $T$ leaves alone. That point is the fixed point, and since the Bellman optimality equation says precisely "$V = TV$", the fixed point is $V^*$.

The pleasant consequence is that **the starting point does not matter**. There is no "good initialization" question in exact dynamic programming, and no local optima. Where you start affects only how many sweeps you need.

## The formal version

**The Bellman optimality operator.** Define $T: \mathbb{R}^{|\mathcal{S}|} \to \mathbb{R}^{|\mathcal{S}|}$ by

$$(TV)(s) \;=\; \max_a\left[r(s,a) + \gamma\sum_{s'}p(s'\mid s,a)\,V(s')\right]$$

In words: one sweep of value iteration, applied to a whole value function at once. **Value iteration is just $V_{k+1} = TV_k$.** *(card: [Bellman optimality operator](../reference.md#bellman-optimality-operator))*

Note that $V$ here is any vector of numbers — it need not be the value function of any policy. That freedom is what makes the operator view work.

**The max norm.** Distance is measured by the largest discrepancy at any single state:

$$\lVert V - U\rVert_\infty = \max_{s}\,\lvert V(s) - U(s)\rvert$$

**The contraction theorem.** For any $V, U$:

$$\lVert TV - TU\rVert_\infty \ \le\ \gamma\,\lVert V - U\rVert_\infty$$

*Proof.* Fix a state $s$ and let $a^*$ be the action achieving the max in $(TV)(s)$. Since $(TU)(s)$ is a maximum, it is at least the value that $a^*$ would give it, so

$$(TV)(s) - (TU)(s) \ \le\ \gamma\sum_{s'}p(s'\mid s,a^*)\big[V(s') - U(s')\big]$$

— the reward terms cancel because both use the same action $a^*$. Now bound each bracket by the largest one:

$$\le\ \gamma\sum_{s'}p(s'\mid s,a^*)\,\lVert V - U\rVert_\infty \;=\; \gamma\,\lVert V - U\rVert_\infty,$$

using $\sum_{s'}p(s'\mid s,a^*) = 1$. Swapping the roles of $V$ and $U$ bounds the difference the other way, so $|(TV)(s) - (TU)(s)| \le \gamma\lVert V-U\rVert_\infty$ for every $s$, and taking the max over $s$ gives the claim. $\blacksquare$

**Two steps in that proof are worth naming**, because both reappear later. The first is $\lvert \max_a f(a) - \max_a g(a)\rvert \le \max_a \lvert f(a) - g(a)\rvert$ — a maximum is a *non-expansive* operation, so the $\max$ costs nothing. The second is that the transition probabilities sum to one, so averaging cannot amplify a discrepancy. **The entire contraction comes from $\gamma$, and nothing else** — which is why $\gamma = 1$ has to be handled separately.

**What it buys.** By the Banach fixed-point theorem (a contraction on a complete metric space has exactly one fixed point, and iterates converge to it geometrically from anywhere):

1. **$V^*$ exists and is unique** — as the unique solution of $V = TV$, which is the Bellman optimality equation.
2. **$V_k \to V^*$ from any $V_0$.**
3. **An error bound at every step:** $\lVert V_k - V^*\rVert_\infty \le \gamma^k\,\lVert V_0 - V^*\rVert_\infty$.

The same argument applies verbatim to the policy-evaluation operator $T^\pi$ (replace $\max_a$ with $\sum_a\pi(a\mid s)$ — an average is non-expansive too), which is the convergence proof [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md) postponed.

**A bound you can actually compute.** The bound above needs $\lVert V_0 - V^*\rVert_\infty$, which you do not know. The usable version uses the change between successive sweeps:

$$\lVert V_{k+1} - V^*\rVert_\infty \ \le\ \frac{\gamma}{1-\gamma}\,\lVert V_{k+1} - V_k\rVert_\infty$$

In words: if a sweep barely changed anything, you are nearly done — and the factor $\gamma/(1-\gamma)$ says how much "barely" needs to mean. At $\gamma = 0.99$ that factor is $99$, so a sweep that moves values by $0.01$ still leaves you a whole unit from the answer. **Heavy discounting makes value iteration slow, and the stopping rule must account for it.**

**Policy iteration versus value iteration.** Both converge; they trade differently.

| | policy iteration | value iteration |
|---|---|---|
| cost per round | a full evaluation (many sweeps or a matrix solve) | one sweep |
| rounds needed | few — typically a handful | many, geometric in $\gamma$ |
| terminates exactly? | **yes**, finitely many policies | only in the limit (though the greedy policy is usually optimal long before) |
| stores a policy? | yes | no — read it off at the end |

**The greedy policy is optimal well before the values converge.** That is [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md)'s asymmetry again, and in practice it is why value iteration is run to a loose tolerance.

**What about $\gamma = 1$?** The contraction fails outright — the proof's only source of shrinkage is gone. Convergence can still be recovered for **episodic tasks with proper policies** (termination with probability $1$ from every state, as in [Lesson 1.2](01-02-markov-decision-processes.md), P2). Then the effective horizon is finite, and the gridworld below converges in four sweeps despite $\gamma = 1$. With $\gamma = 1$ and a policy that can loop forever, value iteration diverges, which is the trap [`operations-research` 3.4](../../operations-research/lessons/03-04-stochastic-dynamic-programming.md) warns about.

## Picture

![Left: four horizontal number lines stacked vertically, each representing the space of value functions. On the top line two coral points labelled U and V sit far apart with a bar between them marked d, and a blue dot marks V star between them. Each line below shows the same points after one application of the operator T, drawn closer together with bars marked gamma d, gamma squared d and gamma cubed d, converging on the blue fixed point. Right: a semi-log plot of max-norm error against sweep number, with a straight blue line from twenty down past 0.01 labelled error equals bound starting from V equals zero, crossing 0.01 at sweep 73, and a short coral curve that plunges to zero after three sweeps labelled exact from a warm start](assets/01-06-fig1.svg)

The left panel is the contraction; the right panel is what it costs. A straight line on a log scale is geometric decay, and its slope is $\log\gamma$ — the *only* thing that sets the rate.

## Worked examples

**Example 1 (mechanical): value iteration on the two-state MDP, and the bound is exact.** From $s_1$, *stay* self-loops with reward $0$ and *switch* moves to $s_2$ with reward $+1$; $s_2$ self-loops with reward $+2$. Let $\gamma = 0.9$, and start from $V_0 = (0,0)$.

Each sweep applies $V(s_1) \leftarrow \max\{0 + 0.9V(s_1),\ 1 + 0.9V(s_2)\}$ and $V(s_2) \leftarrow 2 + 0.9V(s_2)$:

| $k$ | $V_k(s_1)$ | $V_k(s_2)$ | $\lVert V_k - V^*\rVert_\infty$ | $\gamma^k\lVert V_0 - V^*\rVert_\infty$ |
|---|---|---|---|---|
| $1$ | $1$ | $2$ | $18$ | $18$ |
| $2$ | $2.8$ | $3.8$ | $16.2$ | $16.2$ |
| $3$ | $4.42$ | $5.42$ | $14.58$ | $14.58$ |
| $4$ | $5.878$ | $6.878$ | $13.122$ | $13.122$ |

with $V^* = (19, 20)$ and $\lVert V_0 - V^*\rVert_\infty = 20$.

**The bound is attained exactly at every step.** The reason is visible in the algebra: $V_k(s_2) = 2(1 + \gamma + \cdots + \gamma^{k-1}) = 20(1-\gamma^k)$, so its error is exactly $20\gamma^k$, and $s_2$ is the state where the max norm is achieved. The geometric decay is not an artefact of a crude proof — for this MDP it is the truth.

Reaching $\lVert V_k - V^*\rVert_\infty < 0.01$ takes **73 sweeps**, which is what the straight line in the figure is showing. At $\gamma = 0.99$ the same accuracy would take roughly $730$.

**Example 2 (why you'd care): the bound is worst-case, and a warm start beats it badly.** Same MDP, but start from $V_0 = (25, 20)$ — a guess that is already right at $s_2$ and $6$ too high at $s_1$. Now $\lVert V_0 - V^*\rVert_\infty = 6$.

- Sweep 1: $V(s_1) = \max\{0.9(25),\ 1 + 0.9(20)\} = \max\{22.5,\ 19\} = 22.5$; $V(s_2) = 2 + 18 = 20$. Error $3.5$; bound $5.4$.
- Sweep 2: $V(s_1) = \max\{0.9(22.5),\ 19\} = \max\{20.25, 19\} = 20.25$. Error $1.25$; bound $4.86$.
- Sweep 3: $V(s_1) = \max\{0.9(20.25),\ 19\} = \max\{18.225,\ 19\} = 19$. **Error $0$**; bound $4.374$.

**Value iteration is exactly correct after three sweeps while the bound still promises only $4.374$.** What happened is visible in the maxes: for the first two sweeps *stay* was winning the arg-max, and once $0.9V(s_1)$ dropped below $19$ the arg-max switched to *switch* — after which $V(s_1) = 1 + 0.9(20)$ is a constant that no longer depends on $V(s_1)$ at all, so the iteration lands on the answer and stops moving.

Two things to take from this. First, **the bound is a guarantee, not a prediction**: it must cover the worst MDP consistent with $\gamma$, and real problems often do far better. Second, the mechanism — errors stop propagating once the arg-max settles — is exactly why the greedy policy stabilizes before the values do, and why the gridworld below finishes in four sweeps flat.

**The gridworld, for contrast.** The $3\times3$ grid with $-1$ per step, $\gamma = 1$ and a terminal goal has no contraction at all. Value iteration from $V_0 \equiv 0$ gives, at the corner: $-1, -2, -3, -4$, and then it stops — **converged exactly in four sweeps**, because each sweep extends correct information one cell further from the goal and the furthest cell is four steps away. Compare this with policy *evaluation* of the random policy on the same grid, which needed roughly $400$ sweeps for four-decimal accuracy. **The $\max$ is what makes it fast**: it lets a single good path carry the value, instead of averaging it against every bad one.

## Watch out

- **You might think** value iteration converges to the true value function of some policy at each step — **but actually** the intermediate $V_k$ are generally the value function of *no policy at all*. In Example 1, $V_2 = (2.8, 3.8)$: no policy in that MDP has that value. They are just iterates converging to $V^*$, and the operator view is what makes that legitimate.
- **You might think** a small change between sweeps means you are close to $V^*$ — **but actually** the gap can be up to $\frac{\gamma}{1-\gamma}$ times the change. At $\gamma = 0.999$ that multiplier is $999$, so "the values moved by less than $10^{-3}$" is compatible with being a full unit away. Use the bound, not the raw change.
- **You might think** the contraction argument needs the environment to be stochastic, or the policy to be anything in particular — **but actually** it uses only two facts: probabilities sum to $1$, and $\gamma < 1$. It holds for deterministic MDPs, for the evaluation operator $T^\pi$, and for the $Q$-function versions of both. When a method in Module 3 diverges, the diagnosis is always that one of these two conditions has been broken — usually by function approximation destroying the non-expansiveness.

## One-liner

> One sweep of the Bellman optimality update pulls any two value functions a factor $\gamma$ closer, so iterating it collapses everything onto the unique fixed point $V^*$ — from any starting guess, at a rate set entirely by the discount.

## Problems

**P1 (🟢)** A one-state MDP has a single state $s$ and two actions: $a$ with reward $3$, $b$ with reward $1$, both self-looping. Take $\gamma = 0.8$.

(a) Write $(TV)(s)$ as an explicit function of $V(s)$.
(b) Run value iteration from $V_0(s) = 0$ for four sweeps.
(c) Compute $V^*(s)$ exactly and verify the error bound $\lVert V_k - V^*\rVert_\infty \le \gamma^k \lVert V_0 - V^*\rVert_\infty$ at $k = 4$.
(d) State whether the bound is tight here, and why.

**P2 (🟡)** Value iteration is run on an MDP with $\gamma = 0.95$. After sweep $k$, the largest change at any state is $\lVert V_{k+1} - V_k\rVert_\infty = 0.02$.

(a) Compute the guaranteed bound on $\lVert V_{k+1} - V^*\rVert_\infty$.
(b) The rewards in this MDP lie in $[0, 1]$. Compute the largest possible value of $V^*$ at any state, and express your answer to (a) as a percentage of that.
(c) How many further sweeps guarantee $\lVert V - V^*\rVert_\infty < 0.01$? (Use the bound from (a) as the new starting distance.)
(d) State one reason the greedy policy might already be optimal despite the remaining error.

**P3 (🔴)** An engineer replaces the $\max$ in the Bellman optimality operator with a **softmax**, defining

$$(T_\beta V)(s) = \frac{1}{\beta}\log \sum_a \exp\!\Big(\beta\big[r(s,a) + \gamma\textstyle\sum_{s'}p(s'\mid s,a)V(s')\big]\Big)$$

for a fixed $\beta > 0$. (This is the "soft" Bellman operator behind maximum-entropy RL.)

(a) State what $T_\beta$ tends to as $\beta \to \infty$, and as $\beta \to 0^+$ with $|\mathcal{A}|$ actions.
(b) The key fact is that log-sum-exp is non-expansive in the max norm: $\lvert \text{lse}_\beta(f) - \text{lse}_\beta(g)\rvert \le \max_a\lvert f(a) - g(a)\rvert$. Using it, adapt this lesson's proof to show $T_\beta$ is a $\gamma$-contraction.
(c) State what therefore exists and is unique, and whether it equals $V^*$.
(d) For a state with two actions whose bracketed quantities are $10$ and $4$, compute $(T_\beta V)(s)$ at $\beta = 1$ and at $\beta = 10$, and say which is closer to the hard max and why.

<details>
<summary>Solutions</summary>

**P1**

(a) Both actions self-loop, so both land back in $s$:

$$(TV)(s) = \max\{3 + 0.8V(s),\ 1 + 0.8V(s)\} = \mathbf{3 + 0.8\,V(s)},$$

since $a$ dominates $b$ at every $V$ — the continuation term is identical, so the larger reward always wins.

(b) From $V_0 = 0$:

| $k$ | $V_k(s)$ |
|---|---|
| $1$ | $3$ |
| $2$ | $3 + 2.4 = 5.4$ |
| $3$ | $3 + 4.32 = 7.32$ |
| $4$ | $3 + 5.856 = \mathbf{8.856}$ |

(c) The fixed point: $V^* = 3 + 0.8V^* \Rightarrow 0.2V^* = 3 \Rightarrow V^*(s) = \mathbf{15}$.

At $k=4$: $\lVert V_4 - V^*\rVert_\infty = |8.856 - 15| = \mathbf{6.144}$. The bound is $\gamma^4\lVert V_0 - V^*\rVert_\infty = 0.8^4(15) = 0.4096(15) = \mathbf{6.144}$. ✓

(d) **Tight — exactly attained.** The reason is the same as Example 1: with only one state, the iteration is a pure geometric series, $V_k = 3(1 + 0.8 + \cdots + 0.8^{k-1}) = 15(1 - 0.8^k)$, so the error is exactly $15 \cdot 0.8^k$. There is no second state whose faster convergence could make the max norm shrink more quickly, and the arg-max never switches, so nothing beats the geometric rate.

**P2**

(a) $\dfrac{\gamma}{1-\gamma}\lVert V_{k+1}-V_k\rVert_\infty = \dfrac{0.95}{0.05}(0.02) = 19 \times 0.02 = \mathbf{0.38}$.

(b) With rewards in $[0,1]$ the largest achievable value is $\dfrac{1}{1-\gamma} = \dfrac{1}{0.05} = \mathbf{20}$. So the remaining error is at most $0.38/20 = \mathbf{1.9\%}$ of the value scale.

This is the honest way to read such a bound: $0.38$ sounds small in isolation, and the relevant comparison is always against the range the values actually span.

(c) Each further sweep multiplies the bound by $\gamma = 0.95$. We need $0.38 \times 0.95^n < 0.01$, i.e. $0.95^n < 0.026316$, so

$$n > \frac{\ln 0.026316}{\ln 0.95} = \frac{-3.6376}{-0.051293} \approx 70.9 \quad\Longrightarrow\quad n = \mathbf{71}\ \text{further sweeps}.$$

Note how expensive the last two decimal places are — seventy-one sweeps to remove an error of $0.38$. That is the $\gamma \to 1$ penalty made concrete.

(d) **Because the greedy policy depends only on the ranking of the action-values, not their magnitudes.** A residual error of $0.38$ changes nothing unless two actions at some state are within about that much of each other; everywhere the best action leads by more, the arg-max is already correct and further sweeps only refine numbers the policy does not consult. This is the [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md) asymmetry once more, and it is why value iteration is usually stopped at a loose tolerance in practice.

**P3**

(a) **As $\beta \to \infty$, $T_\beta \to T$**, the ordinary Bellman optimality operator: log-sum-exp with a large $\beta$ is dominated by the largest term, and $\frac1\beta\log e^{\beta m} = m$.

**As $\beta \to 0^+$**, expand $\frac1\beta\log\sum_a e^{\beta q_a} \to \frac1\beta\log\big(|\mathcal{A}| + \beta\sum_a q_a + O(\beta^2)\big)$, which diverges like $\frac{\log|\mathcal{A}|}{\beta}$ while its finite part tends to the *mean* $\frac{1}{|\mathcal{A}|}\sum_a q_a$. So low $\beta$ averages the actions (plus a constant entropy offset) rather than maximizing — the operator interpolates between the uniform-random policy's evaluation and the optimal one.

(b) Fix $s$ and write $q_V(a) = r(s,a) + \gamma\sum_{s'}p(s'\mid s,a)V(s')$, and likewise $q_U$. Then $(T_\beta V)(s) = \text{lse}_\beta(q_V)$ and $(T_\beta U)(s) = \text{lse}_\beta(q_U)$, so by the stated non-expansiveness,

$$\lvert (T_\beta V)(s) - (T_\beta U)(s)\rvert \ \le\ \max_a \lvert q_V(a) - q_U(a)\rvert.$$

For each $a$ the reward terms cancel, leaving

$$\lvert q_V(a) - q_U(a)\rvert = \gamma\left\lvert \sum_{s'}p(s'\mid s,a)\big[V(s') - U(s')\big]\right\rvert \le \gamma\sum_{s'}p(s'\mid s,a)\lVert V-U\rVert_\infty = \gamma\lVert V - U\rVert_\infty.$$

Taking the max over $a$ and then over $s$ gives $\lVert T_\beta V - T_\beta U\rVert_\infty \le \gamma\lVert V-U\rVert_\infty$. $\blacksquare$

**The proof is this lesson's verbatim, with one substitution:** the only property of $\max$ that was used is non-expansiveness, and log-sum-exp has it too. That is why the argument transplants — and it is worth noticing that the *average* $\sum_a\pi(a\mid s)(\cdot)$ is non-expansive as well, which is the policy-evaluation case.

(c) A **unique fixed point $V_\beta$ exists**, and value iteration with $T_\beta$ converges to it geometrically from any start.

It does **not** equal $V^*$ in general. Since $\text{lse}_\beta(q) \ge \max_a q_a$ always (the sum includes the largest term plus positive others), $T_\beta$ dominates $T$ and $V_\beta \ge V^*$ — the soft operator is optimistic. The excess is the entropy bonus: $V_\beta$ is the optimal value of a modified problem that pays the agent for keeping its policy random, and $V_\beta \to V^*$ as $\beta\to\infty$.

(d) With $q = (10, 4)$:

At $\beta = 1$: $\log(e^{10} + e^{4}) = \log(22026.466 + 54.598) = \log(22081.064) = \mathbf{10.0025}$.

At $\beta = 10$: $\frac{1}{10}\log(e^{100} + e^{40}) = \frac{1}{10}\big[100 + \log(1 + e^{-60})\big] = \mathbf{10.0000}$ to four decimals, since $e^{-60} \approx 8.8\times10^{-27}$.

**$\beta = 10$ is closer to the hard max of $10$.** The general form makes it clear: $\text{lse}_\beta(q) = q_{\max} + \frac1\beta\log\big(1 + \sum_{a\neq\max}e^{-\beta\Delta_a}\big)$ where $\Delta_a > 0$ is the gap to the best action. The excess over the max decays like $e^{-\beta\Delta}/\beta$, so it vanishes fast in both a large $\beta$ and a large action gap. Here the gap is $6$, already big enough that even $\beta = 1$ is within $0.003$ of the max.

</details>

## Flashback

**From Lesson 1.4 (Optimality and the Bellman optimality equation):** A two-state MDP has $\gamma = 0.5$. In state $P$ the actions are *push* (reward $6$, moves to $Q$) and *rest* (reward $1$, stays at $P$). In state $Q$ the only action earns reward $0$ and returns to $P$.

(a) Write both Bellman optimality equations.
(b) Solve them for $V^*(P)$ and $V^*(Q)$, handling the $\max$ by testing each branch and checking consistency.
(c) State the optimal policy.
(d) Verify your answer satisfies both equations exactly.

<details>
<summary>Solution</summary>

(a) $Q$ has one action, so its equation carries no max:

$$V^*(P) = \max\big\{\underbrace{6 + 0.5\,V^*(Q)}_{\text{push}},\ \underbrace{1 + 0.5\,V^*(P)}_{\text{rest}}\big\}, \qquad V^*(Q) = 0 + 0.5\,V^*(P).$$

(b) Substitute the second into the first to get a single equation in $V^*(P)$:

$$V^*(P) = \max\big\{6 + 0.25\,V^*(P),\ \ 1 + 0.5\,V^*(P)\big\}.$$

**Branch 1 — suppose *push* attains the max.** Then $V^*(P) = 6 + 0.25V^*(P)$, so $0.75V^*(P) = 6$ and $V^*(P) = 8$. Check consistency: the *rest* branch would give $1 + 0.5(8) = 5$, and $8 > 5$, so *push* does indeed attain the max. **Consistent.**

**Branch 2 — suppose *rest* attains the max.** Then $V^*(P) = 1 + 0.5V^*(P)$, giving $V^*(P) = 2$. Check: the *push* branch would give $6 + 0.25(2) = 6.5 > 2$, so *push* would have won and the assumption is contradicted. **Inconsistent — discard.**

So $V^*(P) = \mathbf{8}$ and $V^*(Q) = 0.5(8) = \mathbf{4}$.

(c) **Push in $P$**, and in $Q$ the single available action. The agent shuttles $P \to Q \to P$, collecting $6$ every second step.

(d) In $P$: $\max\{6 + 0.5(4),\ 1 + 0.5(8)\} = \max\{8,\ 5\} = 8 = V^*(P)$ ✓. In $Q$: $0 + 0.5(8) = 4 = V^*(Q)$ ✓.

**The branch-testing method is the general recipe for small MDPs**, and it is worth seeing why it is legitimate: the Bellman optimality equation has a unique solution (this lesson's contraction theorem), so a candidate that satisfies every equation *is* the answer, and any branch assumption that contradicts itself can be discarded without further argument. With $|\mathcal{A}|^{|\mathcal{S}|}$ branches it does not scale, which is the whole reason value iteration exists — but on two states it is faster than sweeping, and it gives an exact answer rather than a limit.

</details>

## Connections

- **Backward:** value iteration is [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md)'s policy iteration with evaluation truncated to one sweep, and the fixed-point condition $V = TV$ is [Lesson 1.4](01-04-optimality-bellman-optimality.md)'s Bellman optimality equation rewritten as an operator equation. The max norm's role is the same one it plays throughout [`real-analysis`](../../real-analysis/syllabus.md)'s treatment of the contraction mapping theorem.
- **Forward:** every convergence result in Module 2 is this contraction plus sampling noise — [TD(0)](02-03-temporal-difference-learning-td0.md) converges because its expected update is $T^\pi$ and the step sizes shrink, and [Q-learning](02-05-q-learning-off-policy-td-control.md) because its expected update is $T$. [Lesson 3.2](03-02-approximate-control-deadly-triad.md)'s deadly triad is precisely the loss of this contraction once a function approximator is inserted, and the $\max$ that makes the gridworld finish in four sweeps here is the same $\max$ that creates the overestimation bias of [Lesson 4.1](04-01-deep-q-networks.md).
- **Sideways:** the Banach fixed-point theorem doing the work here is [`real-analysis` 2.4](../../real-analysis/lessons/02-04-cauchy-sequences.md)'s, and it is the same tool [`grad-micro` 1.5](../../grad-micro/lessons/01-05-monotone-comparative-statics-dynamic-programming.md) uses to justify the Bellman equation in economics. The fixed-point iteration is also structurally identical to the dataflow fixed points of [`programming-languages` 7.3](../../programming-languages/lessons/07-03-dataflow-analysis-as-a-fixed-point.md) — with $\gamma < 1$ playing the role a finite lattice plays there: the thing that turns "the limit exists" into "the loop halts".
