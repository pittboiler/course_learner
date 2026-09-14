# Reinforcement Learning · Lesson 4.6: Monte Carlo tree search and self-play

> ⏱ ~15 min · Module 4: Deep RL & Exploration · Builds on: [4.4 (bandits and principled exploration)](04-04-bandits-and-principled-exploration.md), [4.5 (model-based RL and planning)](04-05-model-based-rl-and-planning.md) · Unlocks: end of course

## Why this matters

[Lesson 4.5](04-05-model-based-rl-and-planning.md) used a model to manufacture training data, and ran into compounding error: a model good for five steps is useless for fifty. Monte Carlo tree search uses a model completely differently — **not to train, but to think, right now, about the move it is about to make.** The search is thrown away after the move, so a model that is only locally reliable is enough.

This lesson also closes the course, because AlphaZero is where almost every piece assembles. The tree search is [Lesson 4.4](04-04-bandits-and-principled-exploration.md)'s UCB run at every node. The network that guides it is [Lesson 3.1](03-01-value-function-approximation.md)'s function approximation. The training loop — search to get a better policy, train the network toward it, search again — is [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md)'s generalized policy iteration, with the search playing the part of the improvement step.

## The idea

Given a model, you could in principle search the whole game tree. For Go that is $10^{170}$ positions, so you cannot. MCTS searches **asymmetrically**: it spends its budget on the lines that look promising and barely looks at the rest, and the rule for deciding is [Lesson 4.4](04-04-bandits-and-principled-exploration.md)'s.

> Treat every node as a bandit over its children, and run UCB. The tree grows deepest where the moves are best and where the uncertainty is greatest.

One simulation has four phases:

1. **Selection** — from the root, repeatedly pick the child with the highest UCB-style score until reaching a node not yet fully expanded.
2. **Expansion** — add one new child.
3. **Evaluation** — estimate that node's value, either by a random rollout to the end or by asking a value network.
4. **Backup** — propagate the result up the path, updating each node's visit count and mean value.

Repeat thousands of times; play the child of the root with the most visits.

**Self-play** supplies the training data. An agent plays itself, and because both sides improve together it always faces an opponent of its own strength — a curriculum that generates itself, with no human games and no hand-designed opponent.

## The formal version

**UCT — UCB applied in a tree.** At each node, select

$$a = \arg\max_a\left(Q(s,a) + c\sqrt{\frac{\ln N(s)}{N(s,a)}}\right)$$

where $N(s)$ is the node's visit count, $N(s,a)$ the child's, and $Q(s,a)$ the mean outcome of simulations through it. *(card: [UCT](../reference.md#uct))*

**This is literally [Lesson 4.4](04-04-bandits-and-principled-exploration.md)'s UCB1**, with "arm" replaced by "child move" and "reward" by "simulation outcome" — the single cleanest transfer of a bandit result into a sequential setting. The consequence is that the tree deepens preferentially along strong lines, which is what makes an intractable search tractable.

**AlphaZero's variant (PUCT)** folds in a network's prior $P(s,a)$:

$$a = \arg\max_a\left(Q(s,a) + c_{\text{puct}}\,P(s,a)\,\frac{\sqrt{\sum_b N(s,b)}}{1 + N(s,a)}\right)$$

The prior steers the search from the first simulation, before any $Q$ exists — which matters enormously when the branching factor is $250$ and the budget is $1600$ simulations. A network of *some* competence turns an infeasible search into a feasible one.

**The network and the loop.** A single network $f_\theta(s) = (\mathbf{p},\ v)$ outputs a policy prior and a value estimate. Then:

1. Play a game by self-play, running MCTS at every move.
2. Record, at each position, the search's **visit distribution** $\boldsymbol{\pi}$ and the game's eventual result $z$.
3. Train $\theta$ so that $\mathbf{p} \to \boldsymbol{\pi}$ and $v \to z$ — a cross-entropy term plus a squared-error term.
4. Repeat.

**MCTS is a policy improvement operator.** This is the conceptual heart, and it is why the loop works. The network proposes $\mathbf{p}$; the search spends compute refining it and returns $\boldsymbol{\pi}$, which is *better* — it has actually looked ahead. Training the network toward $\boldsymbol{\pi}$ makes next time's proposal better, so next time's search starts from a better place.

**That is [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md)'s evaluate-and-improve loop**, with search as the improvement operator and supervised regression as the way the improvement is absorbed. The wedge diagram from that lesson is the right picture for the whole system.

**No rollouts, and no human data.** AlphaGo used both a rollout policy and human expert games. AlphaZero removed both — evaluation is the value network alone, and training starts from random weights — and played *better*. The general lesson is worth keeping: **the human data was a scaffold, and removing it removed a ceiling.**

**MuZero** goes one step further and does not require the rules. It learns a latent model trained only to predict the quantities the search consumes — reward, value and policy — never the observation itself. This is [Lesson 4.5](04-05-model-based-rl-and-planning.md)'s compounding-error problem attacked at the root: a model that never predicts pixels cannot accumulate pixel error, and it spends no capacity on detail the search does not use.

## Picture

![Four small trees showing one simulation of Monte Carlo tree search. In selection, a highlighted path runs from the root down to a leaf, annotated follow the UCT score down to a leaf. In expansion, one new blue child node is added below that leaf. In evaluation, a dashed line leaves the new node, annotated roll out or ask the value network. In backup, arrows run from the new node back up the path to the root, annotated update N and Q on every node passed. A note says to repeat thousands of times and then play the move with the most visits](assets/04-06-fig1.svg)

The asymmetry is the point. The tree in the figure is three deep on one branch and one deep elsewhere — that shape is what UCT produces, and it is why a search of a few thousand nodes can be worth more than a uniform search of millions.

## Worked examples

**Example 1 (mechanical): selection with and without a prior.** A node has been visited $13$ times, distributed over three children:

| child | $Q$ | $N$ | network prior $P$ |
|---|---|---|---|
| $a$ | $+0.60$ | $8$ | $0.5$ |
| $b$ | $+0.20$ | $3$ | $0.3$ |
| $c$ | $-0.40$ | $2$ | $0.2$ |

**Plain UCT** with $c = 1.4$ and $\ln 13 = 2.5649$:

| child | $Q$ | $U = 1.4\sqrt{\ln 13/N}$ | score |
|---|---|---|---|
| $a$ | $0.60$ | $0.7927$ | $1.3927$ |
| $b$ | $0.20$ | $1.2945$ | $\mathbf{1.4945}$ |
| $c$ | $-0.40$ | $1.5854$ | $1.1854$ |

**UCT selects $b$** — not the best-scoring move, but one whose bonus outweighs the gap, exactly as in [Lesson 4.4](04-04-bandits-and-principled-exploration.md).

**PUCT** with $c_{\text{puct}} = 1.5$ and $\sqrt{13} = 3.6056$, using $U = c_{\text{puct}}P\sqrt{N_{\text{tot}}}/(1+N)$:

| child | $Q$ | $U$ | score |
|---|---|---|---|
| $a$ | $0.60$ | $0.3005$ | $\mathbf{0.9005}$ |
| $b$ | $0.20$ | $0.4056$ | $0.6056$ |
| $c$ | $-0.40$ | $0.3606$ | $-0.0394$ |

**PUCT selects $a$.** Two structural differences explain the switch. The prior $P$ multiplies the bonus, so a move the network dislikes is explored less — the search no longer treats all children as equally worth checking. And the denominator is $1+N$ rather than $\sqrt N$, so the bonus decays faster and $Q$ takes over sooner.

**In short, the network's opinion buys the search permission to ignore most of the board.** With a branching factor of $250$ and a budget of $1600$ simulations, uniform curiosity would spend everything on the first level.

**Example 2 (why you'd care): the search is an improvement operator.** Take the visit counts from Example 1 as the search's output and compare them with the prior that seeded it:

| child | network prior $P$ | search policy $\boldsymbol{\pi}$ (visits/total) |
|---|---|---|
| $a$ | $0.500$ | $8/13 = \mathbf{0.615}$ |
| $b$ | $0.300$ | $3/13 = 0.231$ |
| $c$ | $0.200$ | $2/13 = 0.154$ |

**The search moved probability toward $a$, the child with the highest $Q$.** It did so not because it was told to, but because UCT kept returning to $a$ once the bonuses had decayed — visit counts are where the search chose to spend its attention, and attention follows value.

So $\boldsymbol{\pi}$ is a better policy than $\mathbf{p}$: it incorporates everything the lookahead discovered. Training the network toward $\boldsymbol{\pi}$ is exactly [Lesson 1.4](01-04-optimality-bellman-optimality.md)'s policy improvement step, with the search playing the role of the greedy operator and regression playing the role of "adopt the improved policy".

**Why this closes the loop rather than merely nudging it.** Each iteration, the search adds real information (lookahead) that the network then absorbs; the better network makes the next search sharper, which adds more information. The improvement is compounding rather than incremental, and it is the mechanism that took AlphaZero from random weights to superhuman Go in hours of self-play — **with no human games, and no component that had not appeared somewhere in this course.**

The honest boundary: this works when a **perfect model is available** (the rules of the game) or can be learned in a form the search tolerates (MuZero). In a domain with no simulator and messy dynamics, MCTS is much harder to apply, which is why robotics leans on the model-free methods of Modules 3 and 4 instead.

## Watch out

- **You might think** MCTS needs a good evaluation function to work, since random rollouts seem hopeless — **but actually** plain UCT with uniformly random rollouts plays respectable Go, because the *tree* does the work: averaging noisy rollouts over thousands of simulations extracts a usable signal, and the selection rule concentrates them where it matters. A value network makes it far stronger; it is not what makes it function.
- **You might think** the move played should be the one with the highest $Q$ — **but actually** AlphaZero plays the most-*visited* child. Visit count is the more robust statistic: a child visited twice may have a high $Q$ from two lucky simulations, while a child visited eight hundred times has a mean the search has genuinely tested. **High $Q$ with low $N$ is an untested claim**, and the same reasoning as [Lesson 4.4](04-04-bandits-and-principled-exploration.md)'s "one sample of zero is not evidence".
- **You might think** self-play must produce a strictly improving player, since it always trains against its current self — **but actually** self-play can cycle: a policy that beats the current opponent may lose to an earlier one, and in non-transitive games (rock-paper-scissors and its many disguises) training can go round in circles indefinitely. AlphaZero's domains are close enough to transitive that this does not bite; in general it does, which is why league-based and population-based training exist.

## One-liner

> Run a bandit at every node of the tree, and the search becomes a policy improvement operator good enough to train the network that guides it.

## Problems

**P1 (🟢)** A node has $20$ visits across three children: $a$ with $Q = 0.3$, $N = 12$; $b$ with $Q = 0.5$, $N = 5$; $c$ with $Q = -0.1$, $N = 3$. Use plain UCT with $c = 1.0$ and $\ln 20 = 2.9957$.

(a) Compute each child's exploration bonus.
(b) Compute each UCT score and state which is selected.
(c) State which child would be played if the search stopped now, under the most-visits rule.
(d) State whether (b) and (c) name the same child, and why that is not a contradiction.

**P2 (🟡)** AlphaZero runs $1600$ simulations per move in Go, where the branching factor is about $250$.

(a) State how many children of the root could be visited even once if the search were uniform.
(b) State what fraction of legal moves that is.
(c) Explain how the network prior $P(s,a)$ changes this picture.
(d) State what happens to the search's quality if the prior is confidently wrong, and which term limits the damage.

**P3 (🔴)** MCTS is claimed to be a policy improvement operator: the visit distribution $\boldsymbol{\pi}$ is a better policy than the prior $\mathbf{p}$ that seeded it.

(a) State the sense in which "better" is meant, and what would have to be true for the claim to fail.
(b) Consider a search budget of exactly one simulation. State what $\boldsymbol{\pi}$ looks like and whether the claim holds.
(c) Consider an infinite budget with a perfect model. State what $\boldsymbol{\pi}$ converges to.
(d) Using (b) and (c), explain why the AlphaZero training loop needs the search budget to be in a particular range, and what goes wrong at each extreme.

<details>
<summary>Solutions</summary>

**P1**

(a) The bonus is $\sqrt{2.9957/N}$:

| child | $N$ | bonus |
|---|---|---|
| $a$ | $12$ | $\sqrt{0.2496} = \mathbf{0.4996}$ |
| $b$ | $5$ | $\sqrt{0.5991} = \mathbf{0.7740}$ |
| $c$ | $3$ | $\sqrt{0.9986} = \mathbf{0.9993}$ |

(b) Adding $Q$:

| child | $Q$ | bonus | score |
|---|---|---|---|
| $a$ | $0.3$ | $0.4996$ | $0.7996$ |
| $b$ | $0.5$ | $0.7740$ | $\mathbf{1.2740}$ |
| $c$ | $-0.1$ | $0.9993$ | $0.8993$ |

**$b$ is selected**, with the highest $Q$ and a substantial bonus.

(c) Under the most-visits rule the move played is **$a$**, with $12$ visits against $b$'s $5$.

(d) They name **different** children, and that is not a contradiction because the two rules answer different questions.

Selection asks *where should the next simulation go?* — and the answer is wherever the combination of promise and uncertainty is greatest, which here is $b$. Playing asks *which move do I actually trust?* — and the answer is the one the search has tested most, which is $a$.

Over further simulations $b$'s bonus will shrink as its count rises, and if its $Q$ holds up it will overtake $a$ in visits too. The disagreement is a snapshot of a search that has not finished. **Selection is exploratory by design; the final choice must not be**, which is why the exploration bonus appears in one rule and not the other.

**P2**

(a) At most $\mathbf{1600}$ — one simulation can visit at most one new root child, so a uniform search could touch every child once only if the budget matched the branching factor. Here $1600 > 250$, so in principle all $250$ could be visited, about $6$ times each.

(b) $250/250 = \mathbf{100\%}$ of legal moves, at roughly $6$ simulations apiece.

**And six simulations per move is worthless in Go**, where the difference between a good and a losing move may not surface for twenty plies. The budget is enough to touch everything and enough to evaluate nothing.

(c) The prior multiplies the exploration bonus, so moves the network considers implausible receive a small bonus and are effectively never selected. The search concentrates its $1600$ simulations on perhaps five to twenty candidate moves, giving each enough depth to be genuinely assessed.

**The prior converts a uniform-and-useless allocation into a focused-and-informative one.** This is the single most important reason AlphaZero's search is strong at a budget that sounds tiny.

(d) If the prior is confidently wrong — it puts almost all its mass on bad moves — the search will mostly explore those, and the best move may receive very few simulations. Quality degrades sharply, and in the worst case the correct move is never seriously considered.

The term that limits the damage is $Q(s,a)$. Unlike the prior, $Q$ is computed from actual simulations, so as the favoured moves are explored and found wanting their $Q$ falls and the selection rule turns elsewhere. The bonus also keeps every move's score from collapsing to zero, since $P(s,a) > 0$ for all legal moves under a softmax output.

**So a wrong prior costs simulations, not correctness — given enough budget.** With a small budget it can cost correctness too, which is exactly why the training loop's early iterations use a large number of simulations relative to the network's competence.

**P3**

(a) "Better" means **higher expected value when the resulting move is played** — $\boldsymbol{\pi}$ should score at least as well as $\mathbf{p}$ against the same opponent, in the sense of [Lesson 1.4](01-04-optimality-bellman-optimality.md)'s policy ordering.

The claim would fail if the search's evaluations were *worse* than the prior's implicit judgement — for instance if the value network were badly miscalibrated in the positions the search reaches, so that lookahead actively misinforms. A search that looks ahead with a broken model is worse than not looking ahead, and this is the same failure as [Lesson 4.5](04-05-model-based-rl-and-planning.md)'s model exploitation.

(b) With one simulation, exactly one child is visited once and every other has $N = 0$. So

$$\boldsymbol{\pi} = (0,\dots,1,\dots,0),$$

a deterministic policy concentrated on whichever child PUCT picked first — which, with all $Q$ at zero, is the child with the largest prior $P$.

**The claim holds only trivially.** $\boldsymbol{\pi}$ is the arg-max of $\mathbf{p}$, so it is "greedy with respect to the prior" but has incorporated no lookahead at all. Worse, training toward it is training toward a hardened version of the network's existing belief — a positive feedback loop with no new information, which will make the policy more confident without making it better.

(c) With an infinite budget and a perfect model, UCT's bonuses drive every child's count to infinity while the visit proportions concentrate on the best move. In the limit $\boldsymbol{\pi}$ converges to the **optimal move** — the arg-max of the true $Q^*$ — so the search becomes an exact minimax solver and $\boldsymbol{\pi}$ is the optimal policy.

(d) The budget must be **large enough to add real information and small enough to be affordable at every move of every self-play game.**

*Too small* (the (b) extreme): the search returns essentially the network's own prior, sharpened. Training on it is self-confirmation — the network becomes more certain of whatever it already believed, and the loop stops improving. This is the failure to watch for, because it looks like convergence: the loss falls, the policy sharpens, and strength plateaus.

*Too large* (toward the (c) extreme): each move becomes enormously expensive, so far fewer self-play games are generated per unit of compute. The network sees a small number of very high-quality targets instead of many good ones, and the bottleneck shifts from search quality to data quantity.

**The sweet spot is where the search is a genuine improvement over the network but cheap enough to run millions of times** — AlphaZero's $800$–$1600$ simulations per move. That trade is the same one [Lesson 4.5](04-05-model-based-rl-and-planning.md) framed for planning steps: computation converts into policy quality at a rate that saturates, and the right amount is set by what the alternative use of the compute would buy.

</details>

## Flashback

**From Lesson 4.4 (Bandits and principled exploration):** Three arms have been pulled: arm 1 four times with mean $0.7$; arm 2 once with mean $0.1$; arm 3 three times with mean $0.5$. So $t = 8$, and $\ln 8 = 2.0794$.

(a) Compute each arm's UCB1 bonus.
(b) Compute each UCB score and state which arm is pulled next.
(c) Arm 2's observed mean is the worst by a wide margin. Explain why it is nonetheless competitive.
(d) State how many pulls arm 2 would need, at fixed $t = 8$, for its score to fall below arm 1's current score.

<details>
<summary>Solution</summary>

(a) The bonus is $\sqrt{2(2.0794)/N} = \sqrt{4.1589/N}$:

| arm | $N$ | bonus |
|---|---|---|
| $1$ | $4$ | $\sqrt{1.0397} = \mathbf{1.0197}$ |
| $2$ | $1$ | $\sqrt{4.1589} = \mathbf{2.0393}$ |
| $3$ | $3$ | $\sqrt{1.3863} = \mathbf{1.1774}$ |

(b) Adding the means:

| arm | $\bar x$ | bonus | UCB |
|---|---|---|---|
| $1$ | $0.7$ | $1.0197$ | $1.7197$ |
| $2$ | $0.1$ | $2.0393$ | $\mathbf{2.1393}$ |
| $3$ | $0.5$ | $1.1774$ | $1.6774$ |

**Arm 2 is pulled next.**

(c) Because its mean of $0.1$ rests on **a single observation**, and one sample is almost no evidence. The bonus quantifies that: at $N = 1$ it is $2.04$, twice arm 1's, which is UCB's way of saying the true mean could plausibly be anywhere in a wide interval around $0.1$.

Arm 1's mean of $0.7$ is backed by four samples, so its interval is narrower and its optimistic estimate is only $1.72$. **UCB is not comparing observed performance; it is comparing plausible best cases**, and a nearly-untested arm has a very high plausible best case.

(d) Arm 1's current score is $1.7197$. Arm 2's score after $n$ pulls (assuming its mean stays at $0.1$) is $0.1 + \sqrt{4.1589/n}$, so we need

$$0.1 + \sqrt{\frac{4.1589}{n}} < 1.7197 \quad\Longrightarrow\quad \sqrt{\frac{4.1589}{n}} < 1.6197 \quad\Longrightarrow\quad n > \frac{4.1589}{2.6234} = 1.585.$$

So **$n = 2$ pulls** suffice — one more pull, and arm 2 drops out of contention (its score becomes $0.1 + \sqrt{2.0794} = 1.542 < 1.720$).

That speed is the algorithm working as designed: a bad arm is cheap to rule out, because the bonus falls as $1/\sqrt N$ and the first few samples shrink it fastest. UCB spends a small, bounded number of pulls confirming that a bad arm is bad, and the $\ln t$ growth then keeps it from being forgotten for ever — which is precisely the balance that turns linear regret into logarithmic.

</details>

## Connections

- **Backward:** UCT is [Lesson 4.4](04-04-bandits-and-principled-exploration.md)'s UCB1 applied at each node, the network is [Lesson 3.1](03-01-value-function-approximation.md)'s function approximation, the model is [Lesson 4.5](04-05-model-based-rl-and-planning.md)'s — used for decision-time search rather than for generating training data — and the training loop is [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md)'s generalized policy iteration with search as the improvement operator.
- **Forward:** beyond this course, MCTS with learned models is the basis of MuZero and of the search-augmented reasoning systems built on language models, where the "moves" are reasoning steps and the value network scores partial solutions.
- **Sideways:** the asymmetric tree is the same idea as branch-and-bound in [`operations-research`](../../operations-research/syllabus.md) — expand the promising subtree, prune the rest — with a statistical bound in place of a deterministic one; and self-play as a source of ever-harder opponents is the same curriculum-generating dynamic as adversarial training in [`deep-learning`](../../deep-learning/syllabus.md), including its failure mode of cycling rather than improving.

## Closing the course

The whole of this course is one idea followed to its consequences. **Value now equals reward now plus discounted value next** — [Lesson 1.3](01-03-value-functions-bellman-expectation.md)'s Bellman equation — and every method here is that equation under a different set of restrictions:

| what you are denied | what you get |
|---|---|
| nothing — the model is known | dynamic programming ([1.5](01-05-policy-evaluation-and-policy-iteration.md), [1.6](01-06-value-iteration-and-convergence.md)) |
| the model | Monte Carlo ([2.1](02-01-monte-carlo-prediction.md)), TD ([2.3](02-03-temporal-difference-learning-td0.md)), Q-learning ([2.5](02-05-q-learning-off-policy-td-control.md)) |
| a small enough state space for a table | function approximation ([3.1](03-01-value-function-approximation.md)), and the deadly triad ([3.2](03-02-approximate-control-deadly-triad.md)) |
| a value function that determines a good policy | policy gradients ([3.3](03-03-the-policy-gradient-theorem.md)–[3.5](03-05-actor-critic-methods.md)) |
| stability | DQN's tricks ([4.1](04-01-deep-q-networks.md)), PPO's clip ([4.3](04-03-ppo-a-taste.md)) |
| cheap samples | planning and search ([4.5](04-05-model-based-rl-and-planning.md), [4.6](04-06-monte-carlo-tree-search-and-self-play.md)) |

Three themes recur often enough to be worth naming as the things to carry away.

**Bias against variance, decided empirically.** It appears as MC versus TD, as the choice of $n$ or $\lambda$, as the critic versus the return, as the model versus real experience. In every case the theory tells you the direction of the trade and not where the optimum is, and in every case the measured optimum was interior — never at either end.

**Exploration is a resource allocation problem, not a noise source.** $\varepsilon$-greedy treats it as noise and pays linear regret for ever ([4.4](04-04-bandits-and-principled-exploration.md)). Optimism proportional to uncertainty pays logarithmic regret, and the same principle scales from a three-armed bandit to the root of a Go tree.

**The agent generates its own data, and that is what makes this hard.** It is why a greedy policy seals its own blind spot ([2.2](02-02-monte-carlo-control.md)), why the state distribution $\mu$ decides what a function approximator learns ([3.1](03-01-value-function-approximation.md)), why off-policy training is a leg of the deadly triad ([3.2](03-02-approximate-control-deadly-triad.md)), and why a policy-gradient step that is too large may be unrecoverable ([4.3](04-03-ppo-a-taste.md)). Every hard problem in the course traces back to [Lesson 1.1](01-01-the-rl-problem.md)'s third difficulty.

Where to go next: Sutton & Barto for the tabular and approximation theory in full, *Spinning Up in Deep RL* for implementations that actually run, and Lattimore & Szepesvári for the bandit material, whose proofs are the most complete in the subject. The [reference card](../reference.md) collects every definition, update rule and pitfall from these twenty-five lessons in one place.
