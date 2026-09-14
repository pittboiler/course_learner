# Reinforcement Learning · Lesson 4.4: Bandits and principled exploration

> ⏱ ~15 min · Module 4: Deep RL & Exploration · Builds on: [2.2 (Monte Carlo control)](02-02-monte-carlo-control.md), [1.1 (the RL problem)](01-01-the-rl-problem.md) · Unlocks: [4.6 (Monte Carlo tree search and self-play)](04-06-monte-carlo-tree-search-and-self-play.md)

## Why this matters

Exploration has been handled by the same crude device since [Lesson 2.2](02-02-monte-carlo-control.md): with probability $\varepsilon$, do something random. [Lesson 2.2](02-02-monte-carlo-control.md)'s flashback already showed the flaw — $\varepsilon$-greedy spends exactly as much effort on an action it knows is terrible as on one that is nearly tied with the best.

This lesson strips the problem to its skeleton — a **multi-armed bandit**, one state, $k$ actions, no dynamics — so that exploration can be studied without anything else in the way. In that setting the question has an exact answer, with matching upper and lower bounds, and the answer is a principle rather than a heuristic: **explore in proportion to your uncertainty, and stop as the uncertainty shrinks.**

The payoff is measurable and large. On the ten-armed problem below, $\varepsilon$-greedy's regret grows linearly for ever at a rate that can be predicted to three decimals, while Thompson sampling's per-pull regret falls by a factor of $260$ over the same run.

## The idea

$k$ arms, each with an unknown mean reward $\mu_i$. Pull one per step. There is no state and no transition — **all that remains of the RL problem is exploration versus exploitation**, which is why it is the right place to study it.

Score a strategy by **regret**: how much worse it did than always pulling the best arm.

> Any strategy that keeps exploring at a fixed rate has regret growing linearly for ever. Any strategy that stops exploring too early gets stuck on the wrong arm. The good strategies explore at a rate that decays exactly as fast as the evidence accumulates.

Two such strategies, from quite different principles:

- **UCB** — *optimism in the face of uncertainty*. Score each arm by an upper confidence bound on its mean and pick the highest. An arm is attractive if it *is* good or if you *don't know yet*, and the second reason evaporates as you gather data.
- **Thompson sampling** — *probability matching*. Keep a posterior over each arm's mean, draw one sample from each, pull the arm with the largest draw. An arm is pulled roughly as often as it is probably the best.

## The formal version

**Regret.** With $\mu^* = \max_i\mu_i$ and $\Delta_i = \mu^* - \mu_i$ the gap of arm $i$:

$$\mathcal{R}(T) = T\mu^* - \mathbb{E}\Big[\sum_{t=1}^{T}\mu_{A_t}\Big] = \sum_i \Delta_i\,\mathbb{E}[N_i(T)]$$

In words: regret is the sum over arms of how bad each is times how often you pulled it. *(card: [regret](../reference.md#regret))*

**$\varepsilon$-greedy has linear regret**, and the constant is computable. It pulls a uniformly random arm a fraction $\varepsilon$ of the time for ever, so once the means are known its per-step regret settles at

$$\frac{\varepsilon}{k}\sum_i \Delta_i = \varepsilon\,\overline{\Delta}.$$

Linear regret means the *average* reward never reaches $\mu^*$ — the agent is permanently paying a fixed tax.

**UCB1.** Pull each arm once, then

$$A_t = \arg\max_i\left(\bar x_i + \sqrt{\frac{2\ln t}{N_i(t)}}\right)$$

*(card: [UCB1](../reference.md#ucb1))*

Read the two terms: $\bar x_i$ is **exploitation**, the bonus is **exploration**. The bonus shrinks as $1/\sqrt{N_i}$ — more data, less uncertainty — and grows as $\sqrt{\ln t}$, so an arm ignored for a long time slowly becomes attractive again. The $\ln t$ is what guarantees no arm is abandoned for ever, and the $\sqrt{\cdot}$ form comes from **Hoeffding's inequality** ([`statistical-learning`](../../statistical-learning/reference.md#hoeffdings-inequality)): it is the width of a confidence interval that holds with probability $1 - t^{-4}$.

UCB1's regret is $O(\ln T)$ — specifically $\sum_{i:\Delta_i>0}\frac{8\ln T}{\Delta_i} + O(1)$.

**Thompson sampling.** Maintain a posterior over each $\mu_i$ (for Bernoulli rewards, a Beta distribution updated by counting successes and failures). Each step, **sample** $\tilde\mu_i$ from each posterior and pull $\arg\max_i\tilde\mu_i$. Also $O(\ln T)$, and usually with a better constant — it is the oldest of these algorithms (1933) and still among the best.

**The lower bound.** Lai and Robbins showed no strategy can do better than logarithmic:

$$\liminf_{T\to\infty}\frac{\mathcal{R}(T)}{\ln T} \ \ge\ \sum_{i:\Delta_i>0}\frac{\Delta_i}{\text{KL}(\mu_i\,\|\,\mu^*)}$$

**So $O(\ln T)$ is optimal, not merely good** — the problem is solved up to constants, which is rare.

## Picture

![Left: three stacked bars giving the UCB1 scores at time four for the module's boss problem, each bar split into a blue observed mean and a coral exploration bonus, with arm 2 tallest at 2.67, arm 1 at 1.68 and arm 3 at 1.67, annotated that arm 2 wins because it has the best mean and a large bonus while arm 1 has more data and so a smaller bonus. Right: a log-log plot of regret added per pull against pulls so far, with a flat coral line for epsilon-greedy, a falling grey line for UCB1, and a steeply falling blue line for Thompson sampling, annotated that a falling line means sublinear regret](assets/04-04-fig1.svg)

The left panel shows the bonus doing its work; the right panel shows what that is worth over a long run. A flat line on the right is a permanent tax.

## Worked examples

**Example 1 (mechanical): UCB1 after four pulls.** This module's boss problem. Three arms have been pulled with these results: arm 1 gave $\{1, 0\}$, arm 2 gave $\{1\}$, arm 3 gave $\{0\}$ — so $t = 4$ pulls in total.

With $\ln 4 = 1.386294$:

| arm | $N_i$ | $\bar x_i$ | bonus $\sqrt{2\ln 4/N_i}$ | UCB score |
|---|---|---|---|---|
| $1$ | $2$ | $0.5$ | $\sqrt{1.386294} = 1.1774$ | $\mathbf{1.6774}$ |
| $2$ | $1$ | $1.0$ | $\sqrt{2.772589} = 1.6651$ | $\mathbf{2.6651}$ |
| $3$ | $1$ | $0.0$ | $1.6651$ | $\mathbf{1.6651}$ |

**Arm 2 is pulled at $t=5$.** It wins on both counts — the best observed mean *and* a large bonus from having been tried once.

Two details worth extracting. Arms $2$ and $3$ have identical bonuses because the bonus depends only on $N_i$, not on what was observed; **the bonus measures ignorance, not promise.** And arm $1$, with twice the data, has a bonus $\sqrt2$ times smaller — which is why arm $3$, despite an observed mean of $0$, scores essentially as high as arm $1$ with its mean of $0.5$. One sample of zero is not evidence.

(A convention note: some texts evaluate the bound at $t=5$, the pull being chosen, rather than $t=4$. Then the scores are $1.7686$, $2.7941$, $1.7941$ — arm 2 still wins, though arms $1$ and $3$ swap order. State which you are using.)

**Example 2 (why you'd care): the three strategies over 200,000 pulls.** Ten Bernoulli arms with means $0.3$ to $0.6$, best arm $0.6$, mean gap $\overline{\Delta} = 0.135$. Averaged over runs, measuring **regret added per pull** in successive windows:

| window | $\varepsilon$-greedy ($\varepsilon = 0.1$) | UCB1 | Thompson |
|---|---|---|---|
| $1$k–$10$k | $0.0220$ | $0.0495$ | $0.0098$ |
| $10$k–$50$k | $0.0152$ | $0.0140$ | $0.0013$ |
| $50$k–$100$k | $0.0135$ | $0.0050$ | $0.00046$ |
| $100$k–$200$k | $\mathbf{0.0135}$ | $\mathbf{0.0023}$ | $\mathbf{0.00023}$ |
| **total regret at $T = 200$k** | $\mathbf{2885}$ | $\mathbf{1579}$ | $\mathbf{248}$ |

Three things to read off, in order of importance.

**$\varepsilon$-greedy flatlines at exactly the predicted value.** Theory says the asymptotic per-step regret is $\varepsilon\overline{\Delta} = 0.1 \times 0.135 = 0.0135$, and the measured figure in both of the last two windows is $0.0135$. It has learned everything there is to learn and is still paying, for ever, because it explores at a rate that does not depend on what it knows.

**UCB and Thompson keep improving.** Their per-pull regret falls roughly by half each time $t$ doubles, which is the signature of $O(\ln T)$ total regret. Thompson ends $260$ times better than where it started and $59$ times better than $\varepsilon$-greedy.

**And the honest caveat: UCB1 is worse than $\varepsilon$-greedy for the first twenty thousand pulls.** At $T = 20$k its cumulative regret is $770$ against $\varepsilon$-greedy's $446$; only later does the crossover happen, and by $T = 200$k it is ahead $1579$ to $2885$. UCB1's bonus is calibrated by a loose Hoeffding bound, so early on it over-explores badly. **An experiment stopped at $T = 20$k would have concluded, wrongly, that $\varepsilon$-greedy is the better algorithm.** Asymptotic superiority is a statement about the limit, and short benchmarks can invert the ranking of a method that is provably optimal and one that is provably not.

## Watch out

- **You might think** UCB's bonus is an estimate of how good an arm might be — **but actually** it is a measure of how *little you know*, and it ignores the observed rewards entirely. Arms $2$ and $3$ above have identical bonuses despite means of $1.0$ and $0.0$. Optimism is allocated by ignorance, which is exactly what makes it efficient: effort goes where information is, not where hope is.
- **You might think** logarithmic regret means the total regret stops growing — **but actually** it grows for ever, just ever more slowly. What converges to $\mu^*$ is the *average* reward per pull. The distinction matters: a logarithmic-regret algorithm still pulls suboptimal arms infinitely often, which is necessary — anything that stops entirely risks being stuck on a wrong estimate.
- **You might think** these guarantees transfer directly to full RL — **but actually** the bandit has one state and no dynamics, so exploring there costs one pull. In an MDP an exploratory action can move you somewhere from which recovery is expensive or impossible (the cliff of [Lesson 2.5](02-05-q-learning-off-policy-td-control.md)), and you must explore *sequences* rather than single actions. UCB-style bonuses are used in deep RL as count-based intrinsic rewards, but the clean optimality result does not survive the move.

## One-liner

> Be optimistic in proportion to your ignorance, and the optimism dies on its own as the evidence arrives — which is what separates logarithmic regret from linear.

## Problems

**P1 (🟢)** Four arms have been pulled: arm 1 five times with mean $0.6$; arm 2 twice with mean $0.8$; arm 3 once with mean $0.2$; arm 4 twice with mean $0.5$. So $t = 10$.

(a) Compute each arm's UCB1 bonus, using $\ln 10 = 2.302585$.
(b) Compute each UCB score and state which arm is pulled next.
(c) State which arm has the largest bonus and why.
(d) State how many further pulls arm 3 would need for its bonus to fall below arm 1's current bonus, holding $t$ fixed at $10$.

**P2 (🟡)** A $\varepsilon$-greedy agent runs on a $5$-armed bandit with gaps $\Delta = (0,\ 0.1,\ 0.2,\ 0.3,\ 0.4)$ and $\varepsilon = 0.2$.

(a) Compute the asymptotic per-step regret.
(b) Compute the expected total regret over $10^5$ steps, assuming the means are learned quickly.
(c) A colleague halves $\varepsilon$ to $0.1$. Compute the new asymptotic per-step regret and state the cost of the change.
(d) State what value of $\varepsilon$ would make the asymptotic regret zero, and why that is not a solution.

**P3 (🔴)** UCB1's bonus $\sqrt{2\ln t/N_i}$ comes from Hoeffding's inequality, which for an average of $n$ i.i.d. variables bounded in $[0,1]$ gives $\mathbb{P}[\bar x - \mu \ge \epsilon] \le e^{-2n\epsilon^2}$.

(a) Set the right-hand side to $t^{-4}$ and solve for $\epsilon$, confirming you recover UCB1's bonus.
(b) State what changing the exponent from $4$ to $2$ would do to the bonus and to the algorithm's behaviour.
(c) Example 2 found UCB1 worse than $\varepsilon$-greedy for the first $20{,}000$ pulls. Using (b), explain the likely cause and a modification that would help.
(d) State why the fix in (c) is not free, in terms of what the Hoeffding bound is guaranteeing.

<details>
<summary>Solutions</summary>

**P1**

(a) The bonus is $\sqrt{2(2.302585)/N_i} = \sqrt{4.60517/N_i}$:

| arm | $N_i$ | bonus |
|---|---|---|
| $1$ | $5$ | $\sqrt{0.921034} = \mathbf{0.9597}$ |
| $2$ | $2$ | $\sqrt{2.302585} = \mathbf{1.5174}$ |
| $3$ | $1$ | $\sqrt{4.60517} = \mathbf{2.1460}$ |
| $4$ | $2$ | $\mathbf{1.5174}$ |

(b) Adding the means:

| arm | $\bar x_i$ | bonus | UCB |
|---|---|---|---|
| $1$ | $0.6$ | $0.9597$ | $1.5597$ |
| $2$ | $0.8$ | $1.5174$ | $\mathbf{2.3174}$ |
| $3$ | $0.2$ | $2.1460$ | $2.3460$ |
| $4$ | $0.5$ | $1.5174$ | $2.0174$ |

**Arm 3 is pulled next**, at $2.3460$, edging out arm 2's $2.3174$.

That is the algorithm's character in one line: arm 3 has the *worst* observed mean ($0.2$) and gets pulled because it has been tried only once, so that mean is worth almost nothing as evidence.

(c) **Arm 3**, because it has the fewest pulls. The bonus depends on $N_i$ alone — it is $\sqrt{2\ln t}$ divided by $\sqrt{N_i}$ — so the least-explored arm always carries the largest bonus, regardless of how it has performed.

(d) Arm 1's current bonus is $0.9597$. Arm 3's bonus after $n$ pulls is $\sqrt{4.60517/n}$, so we need

$$\sqrt{\frac{4.60517}{n}} < 0.9597 \quad\Longrightarrow\quad n > \frac{4.60517}{0.9211} = 5.0.$$

So arm 3 needs **more than 5 pulls**, i.e. $n = 6$ — which is more than arm 1's $5$, as it must be, since at equal $N$ the bonuses are equal and the comparison is decided by which arm has more data.

**P2**

(a) The agent explores uniformly a fraction $\varepsilon$ of the time, so

$$\varepsilon\,\overline{\Delta} = 0.2 \times \frac{0 + 0.1+0.2+0.3+0.4}{5} = 0.2 \times \frac{1.0}{5} = 0.2(0.2) = \mathbf{0.04}.$$

(b) $0.04 \times 10^5 = \mathbf{4000}$.

(c) $0.1 \times 0.2 = \mathbf{0.02}$ per step, so $2000$ over $10^5$ steps — **half the regret asymptotically**.

The cost is the time to learn. With $\varepsilon = 0.1$ each arm is sampled at half the previous rate, so identifying the best arm takes roughly twice as many steps, and during that period the agent is losing far more than $0.02$ per step. This is [Lesson 2.2](02-02-monte-carlo-control.md)'s P3 trade-off exactly: asymptotic tax against time-to-competence, with their product roughly fixed.

(d) $\varepsilon = 0$ gives zero asymptotic regret — the agent would exploit for ever.

It is not a solution because with $\varepsilon = 0$ the agent never explores at all, so it never learns which arm is best, and it locks onto whichever arm happened to look good first — [Lesson 2.2](02-02-monte-carlo-control.md)'s self-sealing trap. Its regret would be linear with a *much worse* constant: $\Delta_{i_0}$ for whichever wrong arm it settled on, potentially $0.4$ per step against $\varepsilon$-greedy's $0.04$.

**The point is that no fixed $\varepsilon$ works**, because the right amount of exploration depends on how much is still unknown, and a constant cannot track that. UCB and Thompson are the answer.

**P3**

(a) Set $e^{-2n\epsilon^2} = t^{-4}$. Taking logarithms:

$$-2n\epsilon^2 = -4\ln t \quad\Longrightarrow\quad \epsilon^2 = \frac{4\ln t}{2n} = \frac{2\ln t}{n} \quad\Longrightarrow\quad \epsilon = \sqrt{\frac{2\ln t}{n}}.$$

With $n = N_i(t)$ this is exactly UCB1's bonus. ✓ **The "2" in the numerator is the confidence level $t^{-4}$ in disguise.**

(b) With exponent $2$ the equation becomes $-2n\epsilon^2 = -2\ln t$, giving $\epsilon = \sqrt{\ln t/n}$ — a bonus smaller by a factor of $\sqrt2 \approx 1.41$.

Behaviourally: **less exploration, faster exploitation.** The confidence intervals are narrower, so an arm's optimism dies sooner and the algorithm commits earlier. The risk is that the bound now fails more often ($t^{-2}$ rather than $t^{-4}$ per arm per step), so occasionally the true mean lies outside the interval and a good arm is wrongly written off.

(c) The likely cause is that **UCB1's bonus is too large at small $t$**, because Hoeffding's inequality is a worst-case bound over all distributions with bounded support. For Bernoulli arms with means near $0.5$ the actual variance is far smaller than the bound assumes, so the intervals are much wider than the data warrants and the algorithm spends thousands of pulls on arms it has already ruled out.

The modification: **shrink the constant.** Using $\sqrt{c\ln t / N_i}$ with $c$ around $0.5$ instead of $2$ is common practice and usually far better empirically. More principled variants tighten the bound with the observed variance (**UCB-V**) or replace Hoeffding with a Bernoulli-specific KL bound (**KL-UCB**), which is close to the Lai–Robbins lower bound rather than a constant factor above it.

(d) Because the Hoeffding bound is what guarantees **the true mean lies below the upper confidence bound with high probability**, and that guarantee is the whole basis of the regret proof. Optimism only works if the optimistic estimate really is an over-estimate; if the bound is too tight, the best arm can be underestimated, drop out of contention, and never be pulled again — turning a logarithmic-regret algorithm into a linear-regret one on unlucky runs.

**So the constant trades average-case speed against worst-case safety.** The empirical improvement from shrinking it is real, and so is the loss of the theorem. KL-UCB is the principled resolution: it keeps a valid bound while making it much tighter, which is why it dominates both — and why "use a tighter concentration inequality" is usually a better move than "use a smaller constant."

</details>

## Flashback

**From Lesson 4.1 (Deep Q-networks):** A DQN minibatch element has $r = 3$, $\gamma = 0.9$, $s'$ non-terminal, $Q(s,a;\theta) = 5.0$, and

$$Q(s',\cdot\,;\theta^-) = (2.0,\ 6.0,\ 4.0), \qquad Q(s',\cdot\,;\theta) = (7.0,\ 5.5,\ 4.5).$$

(a) Compute the DQN target and its TD error.
(b) Compute the Double DQN target and its TD error.
(c) State which is larger and explain the disagreement.
(d) Relate the direction of the disagreement to this lesson's idea of optimism.

<details>
<summary>Solution</summary>

(a) $\max_{a'}Q(s',a';\theta^-) = \max(2.0, 6.0, 4.0) = 6.0$:

$$y = 3 + 0.9(6.0) = 3 + 5.4 = \mathbf{8.4}, \qquad \text{TD error} = 8.4 - 5.0 = \mathbf{3.4}.$$

(b) The online network selects $\arg\max(7.0, 5.5, 4.5) = a_1$; the target network evaluates it at $Q(s',a_1;\theta^-) = 2.0$:

$$y = 3 + 0.9(2.0) = 3 + 1.8 = \mathbf{4.8}, \qquad \text{TD error} = 4.8 - 5.0 = \mathbf{-0.2}.$$

(c) **DQN's target is much larger** — $8.4$ against $4.8$, and the TD errors even have opposite signs ($+3.4$ versus $-0.2$).

The networks disagree completely about $s'$: the online net thinks $a_1$ is best ($7.0$) while the target net rates $a_1$ worst ($2.0$) and prefers $a_2$. DQN takes the target network's maximum with no cross-check, so it believes $s'$ is worth $6.0$. Double DQN insists the action be chosen on one network's evidence and scored on the other's, and under that discipline $s'$ is worth only $2.0$.

**Total disagreement between the two networks is a strong signal that the estimates at $s'$ are noise**, and the two rules respond in opposite ways: DQN treats the noise as good news, Double DQN treats it as a reason for caution.

(d) The direction is the reverse of this lesson's.

UCB's optimism is **deliberate and self-limiting**: the bonus is an explicit, calibrated measure of ignorance that provably shrinks as $\sqrt{2\ln t/N}$, and its purpose is to direct exploration toward arms that have not been tried.

DQN's optimism is **accidental and self-reinforcing**: it is a by-product of taking a maximum over noisy estimates ([Lesson 2.5](02-05-q-learning-off-policy-td-control.md)), it is not calibrated to anything, and it does not shrink on its own — worse, bootstrapping propagates the inflated value backwards to predecessor states, where it becomes the basis of further inflated targets.

**The lesson is that optimism is useful when it is a measured statement about uncertainty and harmful when it is an artefact of the estimator.** UCB engineers the first; Double DQN removes the second. Deep RL methods that add explicit count-based exploration bonuses are attempting to import the first kind into a setting that already suffers from the second.

</details>

## Connections

- **Backward:** the exploration–exploitation trade-off is [Lesson 1.1](01-01-the-rl-problem.md)'s first difficulty, isolated by removing the state and the dynamics; $\varepsilon$-greedy and the GLIE schedules are [Lesson 2.2](02-02-monte-carlo-control.md)'s, now with their cost quantified as linear regret. The Hoeffding bound behind UCB's interval is [`statistical-learning`](../../statistical-learning/reference.md#hoeffdings-inequality)'s.
- **Forward:** [Lesson 4.6](04-06-monte-carlo-tree-search-and-self-play.md)'s UCT is literally UCB applied at every node of a search tree — the single clearest case of this lesson's machinery transferring intact into a sequential setting. Count-based and curiosity-based exploration bonuses in deep RL are attempts to approximate the UCB bonus when states are too numerous to count.
- **Sideways:** the bandit is the formal model of the clinical-trial problem that motivated the whole field in the 1930s, and it is the standard framework for A/B testing and ad selection, where Thompson sampling is the usual production choice. The regret/lower-bound structure is the same optimality argument as the minimax bounds in [`statistical-learning`](../../statistical-learning/syllabus.md) — an algorithm proved optimal by matching a bound that no algorithm can beat.
