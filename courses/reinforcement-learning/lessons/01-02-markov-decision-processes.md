# Reinforcement Learning · Lesson 1.2: Markov decision processes

> ⏱ ~15 min · Module 1: MDPs & Dynamic Programming · Builds on: [1.1 (the RL problem)](01-01-the-rl-problem.md) · Unlocks: [1.3 (value functions and the Bellman expectation equation)](01-03-value-functions-bellman-expectation.md)

## Why this matters

[Lesson 1.1](01-01-the-rl-problem.md) gave a loop, not a mathematical object. To compute anything we have to answer one question: **what is the state?** The honest answer is that the agent's future depends on everything that has ever happened to it — and a function of an unbounded history is not something you can tabulate, approximate, or learn.

The Markov decision process is the assumption that buys you out of this. It says the state can be chosen so that it already contains everything the history would have told you. That assumption is what makes the Bellman equation of [Lesson 1.3](01-03-value-functions-bellman-expectation.md) possible, and it is also the assumption most likely to be quietly false in a real application — which is why this lesson spends as much time on *constructing* a Markov state as on the definition.

[`operations-research` 3.4](../../operations-research/lessons/03-04-stochastic-dynamic-programming.md) already defines the MDP five-tuple and solves one by value iteration; this lesson does not repeat that. What it adds is the part RL cannot take for granted: the Markov property as a **modelling choice you can get wrong**, the policy as a first-class object, and what the process looks like once a policy is fixed.

## The idea

A state is **Markov** if it is a *sufficient statistic of the history*: knowing it makes the past irrelevant to the future.

> The state is a summary you are allowed to keep instead of the whole diary — and it is a valid summary exactly when nothing in the diary would change your forecast.

The chess position is Markov: who moved which pawn thirty moves ago tells you nothing extra about the rest of the game that the current board does not. A single video frame of a moving ball is **not**: the frame shows you where the ball is, and the history would have told you where it is going.

The crucial move, and the one people miss, is that **"Markov" is not a property of the world — it is a property of the state you chose to write down.** The ball's velocity was never missing from the world. It was missing from your state variable. Enlarge the state to two frames and the same physical environment becomes Markov. Almost every "this problem isn't an MDP" is really "I haven't put enough in the state yet."

## The formal version

**The Markov property.**

$$\mathbb{P}\!\left[S_{t+1} = s',\, R_{t+1} = r \mid S_t, A_t\right] \;=\; \mathbb{P}\!\left[S_{t+1} = s',\, R_{t+1} = r \mid S_0,A_0,R_1,\dots,S_t,A_t\right]$$

In words: conditioning on the whole history tells you nothing the current state and action did not already. *(card: [Markov property](../reference.md#markov-property))*

**The MDP.** A Markov decision process is $(\mathcal{S}, \mathcal{A}, p, \gamma)$, where the **dynamics**

$$p(s', r \mid s, a) \;=\; \mathbb{P}\!\left[S_{t+1}=s',\,R_{t+1}=r \mid S_t=s,\, A_t=a\right]$$

is one conditional distribution that specifies the entire environment. Everything else is a marginal of it — the transition probabilities $p(s'\mid s,a) = \sum_r p(s',r\mid s,a)$ and the expected reward $r(s,a) = \sum_{s',r} r\, p(s',r\mid s,a)$. *(card: [Markov decision process](../reference.md#markov-decision-process))*

(The five-tuple form $(\mathcal{S},\mathcal{A},P,R,\gamma)$ used in [`operations-research` 3.4](../../operations-research/lessons/03-04-stochastic-dynamic-programming.md) is the same object with the transition kernel and reward function listed separately. The joint form here allows the reward to be correlated with which next state occurred, and makes the expectations of [Lesson 1.3](01-03-value-functions-bellman-expectation.md) tidier; nothing in the course depends on the choice.)

**The policy.** A **policy** $\pi$ maps states to distributions over actions:

$$\pi(a \mid s) \;=\; \mathbb{P}\!\left[A_t = a \mid S_t = s\right]$$

In words: the agent's entire behaviour, as a rule rather than a plan. Three things about this definition earn their keep:

- It is **stationary** — no dependence on $t$. In a discounted infinite-horizon MDP this costs nothing: [Lesson 1.4](01-04-optimality-bellman-optimality.md) shows a stationary policy is always among the optima.
- It is **stochastic**. Deterministic policies are the special case $\pi(a\mid s) = 1$ for one $a$. We keep the general form because exploration requires randomness, and because the policy-gradient methods of Module 3 differentiate with respect to these probabilities.
- It depends on $s$ **only** — which is legitimate precisely because $s$ is Markov. A policy that needed the history would not be a function on $\mathcal{S}$ at all.

**Fixing a policy collapses the MDP.** Given $\pi$, the agent's choices stop being choices and the whole thing becomes a **Markov reward process** — a Markov chain with rewards attached:

$$p^\pi(s'\mid s) = \sum_a \pi(a\mid s)\, p(s'\mid s,a), \qquad r^\pi(s) = \sum_a \pi(a\mid s)\, r(s,a)$$

In words: average the dynamics over whatever the policy would do. This is the single most useful manoeuvre in Module 1. **Evaluating a policy is not a control problem at all** — it is a question about a Markov chain, which is why [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md) can solve it with linear algebra.

**When the state is not Markov.** If the agent sees an **observation** $O_t$ that does not determine the future, the problem is a **partially observable MDP (POMDP)**. Two standard repairs, both of which are state construction rather than new theory:

1. **Stack a window of recent observations.** The state becomes $(O_{t-k},\dots,O_t)$. This is exactly why [Lesson 4.1](04-01-deep-q-networks.md)'s DQN feeds four consecutive Atari frames to the network instead of one.
2. **Carry a belief state** — a probability distribution over the true underlying state, updated by Bayes' rule each step. The belief is Markov even when the observation is not, at the cost of a continuous state space.

## Picture

![Left panel: a rectangle representing one video frame with a ball in it and two dashed arrows leaving the ball in different directions with a question mark, labelled NOT Markov, captioned observation equals ball position only. Right panel: the same rectangle with the ball drawn at its previous position in grey and its current position in blue, joined by a dashed line, with a single solid arrow showing the determined direction of travel, labelled Markov](assets/01-02-fig1.svg)

Both panels show the same physical situation. Only the choice of state variable differs, and that choice is what decides whether the Bellman equation of the next lesson is available to you.

## Worked examples

**Example 1 (mechanical): a state that fails, and the smallest repair.** A vending machine has one button. The first press dispenses a drink worth $+5$; every press after that returns nothing.

Propose the state $s = \text{“standing at the machine”}$ — a single state. Is it Markov? Test the definition directly: compare two histories that agree on the current state.

- History A: just arrived. $\mathbb{P}[R_{t+1} = +5 \mid S_t = s, A_t = \text{press}] = 1$.
- History B: arrived and already pressed once. $\mathbb{P}[R_{t+1} = +5 \mid S_t = s, A_t = \text{press}] = 0$.

The two conditional distributions differ while the state and action are identical, so **the state is not Markov** — the history contains something the state does not.

The repair is to put the missing fact in: $s \in \{\text{unused}, \text{used}\}$. Now $p(\cdot \mid \text{unused}, \text{press})$ gives $+5$ and moves to *used*; $p(\cdot\mid \text{used},\text{press})$ gives $0$ and stays. Two states, and the property holds.

**This is the general recipe.** Find two histories with the same state but different futures; whatever distinguishes them is what the state is missing. Note the cost: the state space doubled. Markov-ness is bought with state-space size, and Module 3 exists because that bill eventually comes due.

**Example 2 (why you'd care): the same MDP, three policies, three completely different worlds.** Take the two-state MDP from this module's boss problem. From $s_1$, action *stay* self-loops with reward $0$ and action *switch* moves to $s_2$ with reward $+1$; from $s_2$ the single action self-loops with reward $+2$. Let $\gamma = 0.9$.

Fix a policy and read off the induced Markov reward process. Under the uniform random policy in $s_1$ ($\tfrac12$ each):

$$p^\pi(\cdot \mid s_1) = \begin{pmatrix} 0.5 & 0.5\end{pmatrix}, \qquad r^\pi(s_1) = \tfrac12(0) + \tfrac12(1) = 0.5$$

and $s_2$ is absorbing with $r^\pi(s_2) = 2$. The chain has no actions left in it. Solving the resulting linear system (the method is [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md)'s; the arithmetic is $V(s_2) = 2/(1-0.9) = 20$ and $V(s_1) = 0.5 + 0.9[0.5V(s_1) + 0.5(20)]$, giving $0.55\,V(s_1) = 9.5$):

| policy in $s_1$ | $p^\pi(s_1\mid s_1)$ | $r^\pi(s_1)$ | $V^\pi(s_1)$ |
|---|---|---|---|
| always *stay* | $1$ | $0$ | $0$ |
| uniform random | $0.5$ | $0.5$ | $190/11 \approx 17.27$ |
| always *switch* | $0$ | $1$ | $19$ |

**Three numbers spanning the whole range from worthless to optimal, from one MDP.** The environment did not change; only the rule for choosing did. This is the gap that every algorithm in this course is trying to close, and it is worth having a concrete size for it before meeting any of them.

Notice also that *stay* earns reward $0$ forever while *switch* pays $+1$ once — the difference in value is not the difference in immediate reward, it is the $+20$ of everything that comes after. **The dominance of the tail over the first step is the phenomenon $\gamma$ controls.**

## Watch out

- **You might think** a problem either "is" or "isn't" an MDP — **but actually** the Markov property is a property of your chosen state representation, not of the world. Nearly every apparent violation is fixed by enlarging the state, and the real question is never "is it Markov?" but "what must I add, and can I afford it?"
- **You might think** a stochastic policy is a hedge for agents that are unsure — **but actually** in a fully observable MDP some deterministic policy is always optimal ([Lesson 1.4](01-04-optimality-bellman-optimality.md)), so randomness is never needed *at the optimum*. It is needed for exploration on the way there, and it becomes genuinely necessary only in partially observed or multi-agent settings, where committing to one action is exploitable.
- **You might think** $p(s',r\mid s,a)$ being a known function is part of the definition of an MDP — **but actually** the MDP is the *structure* of the problem, and whether you know $p$ is a separate question entirely. Module 1 assumes you know it and plans; Modules 2 onward assume you do not and learn. The object is identical in both cases, which is why the Bellman equations survive the transition intact.

## One-liner

> An MDP is the promise that the present state is a good enough summary of the past — and "Markov" is something you achieve by choosing the state well, not something the world hands you.

## Problems

**P1 (🟢)** For each proposed state, say whether it is Markov and give the reason in one sentence. If it is not, state the smallest addition that repairs it.

(a) In blackjack: the player's current hand total, the dealer's visible card, and whether the player holds a usable ace — in a game dealt from an infinite shoe.
(b) The same, but dealt from a single 52-card deck.
(c) For a car following a road: the car's position on the map.
(d) For an inventory manager: the number of units currently in stock, where demand each day is i.i.d.

**P2 (🟡)** An MDP has states $\{A, B\}$. From $A$: action *left* goes to $A$ with reward $0$ and probability $1$; action *right* goes to $B$ with reward $+4$ with probability $0.5$, and back to $A$ with reward $-2$ with probability $0.5$. State $B$ is terminal.

Let $\pi$ choose *right* with probability $0.8$ and *left* with probability $0.2$ in state $A$.

(a) Compute $p^\pi(A \mid A)$ and $p^\pi(B\mid A)$.
(b) Compute $r^\pi(A)$.
(c) With $\gamma = 1$, compute $V^\pi(A)$ by solving the one-equation linear system $V^\pi(A) = r^\pi(A) + \gamma\, p^\pi(A\mid A)V^\pi(A)$.
(d) The episode is guaranteed to terminate even though $\gamma = 1$. State why, in terms of $p^\pi(A\mid A)$.

**P3 (🔴)** An agent controls a robot down a corridor of five cells. Its observation is what it can see locally: whether there is a wall immediately to its left and to its right. Cells 2 and 4 both have open corridor on both sides and so produce the identical observation "open, open". The goal is in cell 5, and the agent starts in cell 1.

(a) Explain why *no* deterministic policy that is a function of the observation alone can reliably reach the goal.
(b) A colleague proposes making the policy stochastic — move left or right with probability $\tfrac12$ each on seeing "open, open". State whether this reaches the goal, and what it costs.
(c) Give a state construction that makes the problem Markov, and state the size of the resulting state space.
(d) This is the argument the "Watch out" bullet about stochastic policies pointed at. State precisely why the guarantee in [Lesson 1.4](01-04-optimality-bellman-optimality.md) — that some deterministic policy is optimal — does not apply here.

<details>
<summary>Solutions</summary>

**P1**

(a) **Markov.** With an infinite shoe the composition of the remaining deck never changes, so the distribution of the next card is fixed and the listed triple determines everything about the rest of the hand. (This is exactly why blackjack is a standard MDP test problem.)

(b) **Not Markov.** With a finite deck the cards already dealt change the distribution of the next card — two histories reaching the same hand total through different cards face different odds of busting. **The repair:** add a count of the cards already seen (in the limit, the full remaining-deck composition). That this repair is legal, and profitable, is the entire basis of card counting.

(c) **Not Markov.** Position alone does not say how fast the car is going or which way it is pointed, and those determine where it can be next. **The repair:** add velocity and heading — the same enlargement as the ball in the figure above.

(d) **Markov.** Demand is i.i.d., so it carries no information from one day to the next, and the stock level is all that connects today to tomorrow. Note the contrast with (b): the state needs to record history only when history is *informative about the future*, and i.i.d. noise never is.

**P2**

(a) *Left* (probability $0.2$) goes to $A$ for certain. *Right* (probability $0.8$) goes to $B$ with probability $0.5$ and to $A$ with probability $0.5$. So

$$p^\pi(A\mid A) = 0.2(1) + 0.8(0.5) = 0.2 + 0.4 = \mathbf{0.6}, \qquad p^\pi(B\mid A) = 0.8(0.5) = \mathbf{0.4}.$$

These sum to $1$, as they must.

(b) $r(A,\text{left}) = 0$. For *right*, $r(A,\text{right}) = 0.5(+4) + 0.5(-2) = 2 - 1 = 1$. So

$$r^\pi(A) = 0.2(0) + 0.8(1) = \mathbf{0.8}.$$

(c) $V^\pi(A) = 0.8 + 1\cdot(0.6)V^\pi(A)$, so $0.4\,V^\pi(A) = 0.8$ and $V^\pi(A) = \mathbf{2}$.

Sanity check by a different route: the episode ends on the first *right* that succeeds, which takes $1/0.4 = 2.5$ steps in expectation, and each step earns $0.8$ on average — giving $2.5 \times 0.8 = 2$. The agreement is not a coincidence; it is the linear system read forwards instead of solved.

(d) Because $p^\pi(A\mid A) = 0.6 < 1$, the probability of still being in $A$ after $n$ steps is $0.6^n \to 0$. Termination is therefore certain, and the expected number of steps is finite ($2.5$), so the undiscounted return is a finite sum with probability one and $\gamma = 1$ is safe.

**The general condition** is that the policy be **proper** — terminal states are reached with probability $1$ from every state. That is what licenses $\gamma = 1$, and it is why the episodic gridworld in [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md) can use $\gamma=1$ without anything diverging.

**P3**

(a) A deterministic observation-based policy must map "open, open" to a single action, and cells 2 and 4 both produce that observation. So the agent does the same thing in both.

If the policy says *right* in "open, open", it works from cell 2 and also works from cell 4 — fine here. If it says *left*, the agent oscillates and never arrives. But make the goal reachable only by going *left* from cell 2 and *right* from cell 4 (put the goal in cell 3, say) and **no** single action succeeds from both: whichever is chosen, one of the two aliased cells sends the agent the wrong way forever. The information needed to act differently in the two cells exists in the history and is absent from the observation.

(b) **It reaches the goal with probability 1** — the agent performs a random walk on the corridor, and a random walk on a finite line hits every cell eventually. The cost is *time*: it arrives in expected steps that grow like the square of the corridor length rather than linearly, and it has no way to become more efficient, since it can never learn to do something different in cells it cannot distinguish.

This is the useful observation: **under partial observability a stochastic policy can strictly beat every deterministic one.** Randomness stops being a means of exploration and becomes part of the optimal behaviour.

(c) Several answers are acceptable; any construction that distinguishes cells 2 and 4 works.

- *Stack observations:* the state is the last two observations plus the last action. Arriving in cell 2 from cell 1 and arriving in cell 4 from cell 5 give different histories, so the two are distinguished.
- *Carry a step counter or a belief:* track the agent's own position estimate, which for deterministic movement from a known start is just dead reckoning.
- *Cleanest:* make the state the true cell index, $\{1,\dots,5\}$ — **five states**, versus the three distinguishable observations. That is the minimum for this corridor, and the general form of the repair from Example 1.

(d) [Lesson 1.4](01-04-optimality-bellman-optimality.md)'s guarantee is about policies that are functions of the **Markov state**, in a fully observed MDP. Here the policy is a function of the **observation**, which is not a Markov state, so the problem is a POMDP and the theorem's hypothesis fails.

The guarantee is restored the moment you apply (c): as a function of the true cell index, a deterministic optimal policy exists, and it is the obvious one. **Partial observability is what makes randomness genuinely optimal, and state construction is what removes the need for it** — which is the same trade this whole lesson has been making.

</details>

## Connections

- **Backward:** the interaction loop, the return $G_t$ and the discount $\gamma$ are [Lesson 1.1](01-01-the-rl-problem.md)'s; this lesson supplies the state assumption that makes them computable. The conditional distributions here are the conditional expectation machinery of [`probability-theory` 5.1](../../probability-theory/lessons/05-01-conditional-expectation.md) used concretely.
- **Forward:** [Lesson 1.3](01-03-value-functions-bellman-expectation.md) takes the expectation of $G_t$ under a fixed policy and finds it satisfies a recursion — a step that is legal *only* because the state is Markov. The Markov reward process defined here is the object [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md) evaluates, and the frame-stacking repair is what [Lesson 4.1](04-01-deep-q-networks.md) actually does to Atari.
- **Sideways:** [`operations-research` 3.4](../../operations-research/lessons/03-04-stochastic-dynamic-programming.md) treats this same object as a planning problem with known dynamics, and is the right companion read for Module 1. In [`grad-macro` 1.5](../../grad-macro/lessons/01-05-stochastic-dynamic-programming.md) the same structure appears with "state" meaning capital and productivity, and the Markov assumption there is what makes a recursive competitive equilibrium definable at all.
