# Reinforcement Learning · Lesson 1.3: Value functions and the Bellman expectation equation

> ⏱ ~15 min · Module 1: MDPs & Dynamic Programming · Builds on: [1.2 (Markov decision processes)](01-02-markov-decision-processes.md), [1.1 (the RL problem)](01-01-the-rl-problem.md) · Unlocks: [1.4 (optimality and the Bellman optimality equation)](01-04-optimality-bellman-optimality.md), [1.5 (policy evaluation and policy iteration)](01-05-policy-evaluation-and-policy-iteration.md)

## Why this matters

[Lesson 1.2](01-02-markov-decision-processes.md) showed that fixing a policy turns an MDP into a Markov reward process. So the first question to ask is not "what should I do?" but the easier one: **given that I behave this way, how good is my situation?** Answer that and improvement becomes almost free — [Lesson 1.4](01-04-optimality-bellman-optimality.md) shows that acting greedily with respect to an *evaluation* is already an improvement.

Two things arrive in this lesson and both are load-bearing for the rest of the course. The first is the **Bellman expectation equation**: value now equals immediate reward plus discounted value next. [`operations-research` 3.4](../../operations-research/lessons/03-04-stochastic-dynamic-programming.md) wrote the version with a $\max$ in it, which characterizes the *best* policy; the version here has no $\max$, holds for *any* policy, and is **linear** — which is exactly what makes it solvable.

The second is the **action-value function $Q$**, and it deserves a warning label. It looks like a minor variant of $V$. It is the reason Module 2 is possible at all.

## The idea

The value of a state is the expected return from it. That is the whole definition; the content is in the recursion.

> Your situation is worth what you collect next, plus what the situation you land in is worth.

Split the future at the first step. Everything after that first step is just "the value of wherever I ended up" — because the state is Markov, and so the tail of the trajectory depends on nothing else. **The Markov property is what lets the infinite sum fold into a one-step equation**, and that folding is the single technique underneath every algorithm in this course.

Now the second idea. A value function $V$ scores *states*. But an agent has to choose *actions*, and $V(s)$ alone cannot tell it which action to take — to compare two actions you must know which states they lead to, and that is the environment's model $p(s'\mid s,a)$. So define $Q(s,a)$: the value of committing to action $a$ right now and behaving normally afterwards. **$Q$ stores the comparison instead of requiring you to compute it.** An agent holding $Q$ picks the best action by reading off a row; an agent holding $V$ needs a model of the world.

## The formal version

**The two value functions.** For a policy $\pi$:

$$V^\pi(s) = \mathbb{E}_\pi\!\left[G_t \mid S_t = s\right], \qquad\qquad Q^\pi(s,a) = \mathbb{E}_\pi\!\left[G_t \mid S_t = s,\, A_t = a\right]$$

In words: $V^\pi(s)$ is the expected return from $s$ when following $\pi$; $Q^\pi(s,a)$ is the expected return from $s$ when you take $a$ first — even if $\pi$ would not have — and follow $\pi$ from then on. The subscript $\pi$ on the expectation means the actions are drawn from $\pi$. *(card: [state-value function](../reference.md#state-value-function), [action-value function](../reference.md#action-value-function))*

**The two are each other's averages.** These two identities are used constantly and are worth reading until they are obvious:

$$V^\pi(s) = \sum_a \pi(a\mid s)\,Q^\pi(s,a) \qquad\qquad Q^\pi(s,a) = r(s,a) + \gamma \sum_{s'} p(s'\mid s,a)\, V^\pi(s')$$

In words: a state's value is the average of its action-values under whatever the policy does (first); an action's value is its immediate reward plus the discounted average value of where it takes you (second). The first averages over the *agent's* choice, the second over the *environment's*.

**The Bellman expectation equation.** Substitute either identity into the other. Putting the second into the first:

$$\boxed{\;V^\pi(s) = \sum_a \pi(a\mid s)\left[r(s,a) + \gamma \sum_{s'} p(s'\mid s,a)\,V^\pi(s')\right]\;}$$

and putting the first into the second:

$$\boxed{\;Q^\pi(s,a) = r(s,a) + \gamma \sum_{s'} p(s'\mid s,a) \sum_{a'} \pi(a'\mid s')\,Q^\pi(s',a')\;}$$

In words, both say the same thing: **value now = reward now + discounted value next**, averaged over everything random in between. *(card: [Bellman expectation equation](../reference.md#bellman-expectation-equation))*

**Why this is a genuinely different equation from the one in `operations-research` 3.4.** That lesson's Bellman equation has $\max_a$ where this one has $\sum_a \pi(a\mid s)$. The difference is not cosmetic:

| | Bellman *expectation* (here) | Bellman *optimality* ([1.4](01-04-optimality-bellman-optimality.md), and OR 3.4) |
|---|---|---|
| holds for | any policy $\pi$ | the optimal policy only |
| combines actions by | averaging under $\pi$ | maximizing |
| is | **linear** in $V$ | nonlinear (the $\max$) |
| solved by | linear algebra, in one step | iteration |

**The matrix form, and why it settles existence.** Using the induced MRP of [Lesson 1.2](01-02-markov-decision-processes.md), stack the values into a vector:

$$V^\pi = r^\pi + \gamma P^\pi V^\pi \qquad\Longrightarrow\qquad V^\pi = (I - \gamma P^\pi)^{-1} r^\pi$$

In words: $|\mathcal{S}|$ equations in $|\mathcal{S}|$ unknowns, solvable directly. The inverse exists whenever $\gamma < 1$: $P^\pi$ is a stochastic matrix so its eigenvalues have modulus at most $1$, hence every eigenvalue of $\gamma P^\pi$ has modulus at most $\gamma < 1$, so $1$ is not an eigenvalue and $I - \gamma P^\pi$ is nonsingular. **The value function of a policy exists, is unique, and is computable in closed form.** ([Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md) explains why we nevertheless iterate instead.)

**Why $Q$ is the one that matters.** Compare how each supports a decision:

$$\underbrace{\arg\max_a\ \Big[r(s,a) + \gamma\textstyle\sum_{s'} p(s'\mid s,a) V(s')\Big]}_{\text{needs the model } p \text{ and } r} \qquad\text{versus}\qquad \underbrace{\arg\max_a\ Q(s,a)}_{\text{needs nothing}}$$

In Module 1 we have the model, so the distinction is cosmetic. From [Lesson 2.2](02-02-monte-carlo-control.md) onward we do not, and the left-hand expression becomes uncomputable while the right-hand one still works. **That is why every model-free control algorithm in this course — SARSA, Q-learning, DQN — learns $Q$ and not $V$.** Worth knowing the price: $Q$ is a table of size $|\mathcal{S}|\times|\mathcal{A}|$ rather than $|\mathcal{S}|$.

## Picture

![Two backup diagrams. Left, the state-value backup: a hollow circle for state s at the top branches down to two solid dots for actions, weighted by the policy, and each action branches to two hollow circles for next states, weighted by the transition probabilities. Right, the action-value backup: a solid dot for the state-action pair at the top branches to two hollow next-state circles, and each of those branches to solid dots for the next actions](assets/01-03-fig1.svg)

Read a backup diagram top-down as one application of the equation: each layer is one average, and the value at the root is the average of the values at the leaves plus the rewards on the edges. **The two diagrams differ only in where you start** — at a state, or at a choice already made.

## Worked examples

**Example 1 (mechanical): both equations on the two-state MDP.** From $s_1$, *stay* self-loops with reward $0$ and *switch* moves to $s_2$ with reward $+1$; $s_2$ self-loops with reward $+2$. Let $\gamma = 0.9$ and let $\pi$ be uniform random in $s_1$.

Start where the recursion bottoms out. $s_2$ has one action, so

$$V^\pi(s_2) = 2 + 0.9\,V^\pi(s_2) \quad\Longrightarrow\quad V^\pi(s_2) = \frac{2}{0.1} = 20.$$

Now $s_1$, using the boxed $V$ equation:

$$V^\pi(s_1) = \tfrac12\big[0 + 0.9\,V^\pi(s_1)\big] + \tfrac12\big[1 + 0.9(20)\big] = 0.45\,V^\pi(s_1) + 9.5$$

so $0.55\,V^\pi(s_1) = 9.5$ and $V^\pi(s_1) = 190/11 \approx 17.273$.

Now the action-values, from the second identity:

$$Q^\pi(s_1,\text{stay}) = 0 + 0.9\left(\tfrac{190}{11}\right) = \tfrac{171}{11} \approx 15.545, \qquad Q^\pi(s_1,\text{switch}) = 1 + 0.9(20) = 19.$$

**Check them against the first identity:** $\tfrac12(171/11) + \tfrac12(19) = \tfrac{171 + 209}{22} = \tfrac{380}{22} = \tfrac{190}{11}$. This matches $V^\pi(s_1)$ exactly, and it is worth making a habit of — the two identities are a free consistency check on any value computation you do by hand.

**Example 2 (why you'd care): the evaluation already contains the improvement.** Look again at the two action-values just computed. Under $\pi$ the agent plays *stay* half the time, yet

$$Q^\pi(s_1,\text{switch}) = 19 > 15.545 = Q^\pi(s_1,\text{stay}).$$

So the policy is choosing a worse-valued action half the time, and $Q^\pi$ says so *in the numbers the current policy itself generated*. Act greedily — always *switch* — and the value rises from $17.273$ to $19$, which [Lesson 1.4](01-04-optimality-bellman-optimality.md) will confirm is $V^*(s_1)$: **one round of evaluate-then-be-greedy went straight from a mediocre policy to the optimal one.**

Now the same phenomenon in the gridworld that carries the rest of this module. A $3\times3$ grid, the goal at the bottom-right corner, every move costing $-1$, bumping a wall leaving you where you are, $\gamma = 1$. Under the uniform random policy, solving $(I-\gamma P^\pi)^{-1}r^\pi$ gives

| $-27$ | $-25$ | $-22.5$ |
|---|---|---|
| $-25$ | $-21.5$ | $-16$ |
| $-22.5$ | $-16$ | $0$ |

Because every step costs exactly $-1$ and $\gamma = 1$, these values read directly as **minus the expected number of steps to the goal** — a random walker needs $27$ steps from the far corner. Now take the cell directly left of the goal, at value $-16$, and expand its action-values with $Q^\pi(s,a) = -1 + V^\pi(s')$:

$$Q^\pi = \{\text{right}: -1,\ \ \text{down}: -17,\ \ \text{up}: -22.5,\ \ \text{left}: -23.5\}$$

The right action is worth $-1$ — one step and done — against a state value of $-16$. **The random policy is squandering fifteen steps standing next to the goal, and its own $Q^\pi$ says exactly which action fixes it.** That gap between $\max_a Q^\pi(s,a)$ and $V^\pi(s)$ is the raw material of policy improvement, and it is what the next two lessons harvest.

## Watch out

- **You might think** $Q^\pi(s,a)$ means "the value of $a$ if the agent always played $a$" — **but actually** it is $a$ **once**, then $\pi$ forever. It is the value of a single deviation, not of a changed policy. Forgetting this is the most common error in reading $Q$ tables: in Example 1, $Q^\pi(s_1,\text{stay}) = 15.545$ is the value of staying once and then reverting to coin-flipping, not the value of staying forever (which is $0$).
- **You might think** the Bellman expectation equation is something to *derive* each time from the definition of the return — **but actually** it is a fixed identity that holds for every policy in every MDP, and the derivation is one line: split $G_t = R_{t+1} + \gamma G_{t+1}$, take expectations, and use the Markov property to write $\mathbb{E}[G_{t+1}\mid S_t] = \mathbb{E}[V^\pi(S_{t+1})\mid S_t]$. **That last step is where the Markov property is spent**, and it is the only place it is needed.
- **You might think** that because $V^\pi = (I-\gamma P^\pi)^{-1}r^\pi$ solves the problem in closed form, iterative methods are a workaround for people without a linear-algebra library — **but actually** the inverse costs $O(|\mathcal{S}|^3)$ and requires knowing $P^\pi$. Both conditions fail in practice: the state space is enormous, and from Module 2 onward $P^\pi$ is unknown. The closed form is a proof of existence, not an algorithm.

## One-liner

> Value now equals reward now plus discounted value next — and storing that number per *action* rather than per *state* is what lets an agent act without a model of the world.

## Problems

**P1 (🟢)** An MDP has states $\{X, Y\}$ and $\gamma = 0.5$. From $X$, the policy takes action $u$ with probability $0.6$ (reward $2$, always to $Y$) and action $d$ with probability $0.4$ (reward $0$, always to $X$). State $Y$ is absorbing with reward $1$ every step forever.

(a) Compute $V^\pi(Y)$.
(b) Compute $Q^\pi(X,u)$ and $Q^\pi(X,d)$ in terms of $V^\pi(X)$, then solve the Bellman expectation equation for $V^\pi(X)$.
(c) Verify your answer with the identity $V^\pi(X) = \sum_a \pi(a\mid X)Q^\pi(X,a)$.
(d) State which action is greedy at $X$ and by how much it beats the other.

**P2 (🟡)** In the $3\times3$ gridworld of Example 2 (goal bottom-right, $-1$ per move, walls leave you in place, $\gamma = 1$, uniform random policy), the value table is the one printed above.

(a) Compute all four action-values $Q^\pi(s,a)$ for the **centre** cell, whose value is $-21.5$.
(b) Verify that their average is $-21.5$.
(c) Name the greedy action(s) at the centre, and state the improvement in value over $V^\pi$ there.
(d) The top-left corner has $V^\pi = -27$ and its two greedy actions are *down* and *right*, each worth $-26$. The improvement there is $1$, versus your answer in (c). Explain in one sentence why the improvement is smaller in the corner than in the centre.

**P3 (🔴)** A policy $\pi$ is **uniformly random over all actions** in an MDP where, in some state $s$, every action leads to the same next-state distribution and earns the same expected reward — the actions are genuinely interchangeable.

(a) State what this implies about $Q^\pi(s,a)$ across actions, and about the gap $\max_a Q^\pi(s,a) - V^\pi(s)$.
(b) Now suppose this holds in **every** state of the MDP. State what $V^\pi$ equals for every policy $\pi$, and what this says about the control problem in such an MDP.
(c) A colleague concludes that the gap $\max_a Q^\pi(s,a) - V^\pi(s)$ is therefore a useful measure of "how much decision-making matters" at state $s$. Give one MDP where this gap is zero at every state under the *optimal* policy but large under a poor one, and explain what that shows about interpreting the gap.
(d) Using (c), state what the gap is actually a property of.

<details>
<summary>Solutions</summary>

**P1**

(a) $Y$ is absorbing with reward $1$ forever, so

$$V^\pi(Y) = 1 + 0.5\,V^\pi(Y) \quad\Longrightarrow\quad V^\pi(Y) = \frac{1}{1-0.5} = \mathbf{2}.$$

(b) Using $Q^\pi(s,a) = r(s,a) + \gamma\sum_{s'}p(s'\mid s,a)V^\pi(s')$:

$$Q^\pi(X,u) = 2 + 0.5(2) = \mathbf{3}, \qquad Q^\pi(X,d) = 0 + 0.5\,V^\pi(X).$$

The Bellman expectation equation at $X$:

$$V^\pi(X) = 0.6(3) + 0.4\big(0.5\,V^\pi(X)\big) = 1.8 + 0.2\,V^\pi(X)$$

so $0.8\,V^\pi(X) = 1.8$ and $V^\pi(X) = \mathbf{2.25}$.

(c) With $V^\pi(X) = 2.25$ we get $Q^\pi(X,d) = 0.5(2.25) = 1.125$. Then

$$0.6(3) + 0.4(1.125) = 1.8 + 0.45 = 2.25 = V^\pi(X). \checkmark$$

(d) **$u$ is greedy**, with $Q^\pi(X,u) - Q^\pi(X,d) = 3 - 1.125 = \mathbf{1.875}$.

Note that $Q^\pi(X,u) = 3 > 2.25 = V^\pi(X)$: the greedy action is worth more than the state itself, which is only possible because the policy dilutes it with the worse action $40\%$ of the time.

**P2**

(a) Label the centre $c$. Each action costs $-1$ and moves one cell; read the destination's value off the table ($V^\pi(\text{top-middle}) = -25$, $V^\pi(\text{middle-left}) = -25$, $V^\pi(\text{bottom-middle}) = -16$, $V^\pi(\text{middle-right}) = -16$):

| action | destination | $Q^\pi(c,a) = -1 + V^\pi(s')$ |
|---|---|---|
| up | top-middle, $-25$ | $\mathbf{-26}$ |
| left | middle-left, $-25$ | $\mathbf{-26}$ |
| down | bottom-middle, $-16$ | $\mathbf{-17}$ |
| right | middle-right, $-16$ | $\mathbf{-17}$ |

(b) $\tfrac14(-26 - 26 - 17 - 17) = \tfrac14(-86) = \mathbf{-21.5} = V^\pi(c)$. ✓

(c) **Greedy actions: *down* and *right***, tied at $-17$. The improvement is

$$\max_a Q^\pi(c,a) - V^\pi(c) = -17 - (-21.5) = \mathbf{4.5}.$$

In the units of this gridworld that is four and a half steps saved, just from refusing to move away from the goal.

(d) **Because the corner's four actions are much more alike than the centre's.** From the top-left corner, *up* and *left* bump into walls and leave the agent where it was ($Q = -28$) while *down* and *right* move one step closer ($Q = -26$) — a spread of $2$. From the centre the spread is $9$, because two actions move toward the goal and two move away, and the goal is close enough for that to matter. **The size of the improvement tracks how differently the available actions turn out, not how bad the current policy is.**

**P3**

(a) All the action-values are equal: $Q^\pi(s,a) = r + \gamma\sum_{s'}p(s'\mid s)V^\pi(s')$, with no dependence on $a$. Since $V^\pi(s)$ is an average of identical numbers it equals that common value, so

$$\max_a Q^\pi(s,a) - V^\pi(s) = 0.$$

**Being greedy at $s$ changes nothing**, which is right: the actions are interchangeable, so there is nothing to choose.

(b) If it holds everywhere, no policy's choices affect anything, so **$V^\pi$ is the same function for every $\pi$** — the MDP has collapsed to a Markov *reward* process with no decisions in it. There is no control problem: every policy is optimal, and the only remaining task is prediction.

(c) *Accept criterion: any MDP in which the optimal policy's greedy gap is zero everywhere while some other policy has a positive gap somewhere.*

The two-state MDP of Example 1 does it. Under the **optimal** policy (always *switch*), $V^*(s_1) = 19$ and the action-values are $Q^*(s_1,\text{switch}) = 1 + 0.9(20) = 19$ and $Q^*(s_1,\text{stay}) = 0 + 0.9(19) = 17.1$, so

$$\max_a Q^{\pi^*}(s_1,a) - V^{\pi^*}(s_1) = 19 - 19 = 0.$$

Under the **uniform random** policy the same quantity was $19 - 17.273 = 1.727$, computed in Example 1.

Same MDP, same state, same set of available actions — and the gap is $0$ under one policy and positive under another. So the gap is not measuring anything about how much the *decision at $s$* matters.

(The zero at the optimum is no accident: it is the definition of optimality, and [Lesson 1.4](01-04-optimality-bellman-optimality.md) makes it the Bellman optimality equation. A policy with a positive gap anywhere is, by that equation, not optimal.)

(d) **The gap is a property of the policy, not of the state** — it measures how far *this* policy is from being greedy with respect to its own value function, which is precisely how much room is left for improvement. It falls to zero exactly when the policy is optimal, which makes it a useful *stopping test* for the algorithms of [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md), and useless as a measure of a state's intrinsic importance.

</details>

## Flashback

**From Lesson 1.2 (Markov decision processes):** A thermostat controls a heater in a room. Its sensor reports only `cold` or `warm`. The heater has *hysteresis*: once switched on it stays on for exactly two time steps regardless of what the controller asks, and only then accepts a new command.

(a) State whether the sensor reading alone is a Markov state, and justify it by exhibiting two histories that share the reading but differ in what happens next.
(b) Give the smallest repair, and the size of the resulting state space.
(c) With the repaired state space, suppose the policy switches the heater on with probability $0.3$ whenever it is free to choose. Write $p^\pi(s'\mid s)$ for the state in which the sensor says `cold` and the heater is free.

<details>
<summary>Solution</summary>

(a) **Not Markov.** Two histories with the same reading `cold`:

- *History A:* the heater has been off for a long time. The controller commands "on"; the heater switches on, and the room begins warming.
- *History B:* the heater was switched on one step ago and is still locked. The controller commands "off"; nothing happens, because the lock has one step left to run, and the room keeps warming regardless.

The reading is `cold` in both and the commanded action can be the same, yet the next state distributions differ — in A the command takes effect, in B it is ignored. So the history contains something the reading does not: **how much of the lock remains**.

(b) Augment the state with the heater's remaining lock time, which takes values $\{0, 1, 2\}$ — $0$ meaning free to accept a command. Two sensor readings times three lock values gives $2 \times 3 = \mathbf{6}$ states.

(One can trim this: the lock counts down deterministically, so if you prefer, the pair (heater on/off, steps remaining) carries the same information. Any representation that records the remaining lock is acceptable; the essential point is that a *counter* is the missing ingredient, exactly as the vending machine needed a *flag*.)

(c) Write the state as (reading, lock). The state in question is $(\texttt{cold}, 0)$ — free to choose. With probability $0.3$ the controller switches the heater on, which sets the lock to $2$; with probability $0.7$ it leaves it off and the lock stays $0$.

The sensor reading at the next step is the room's doing, not the controller's, so let $q$ be the probability the room reads `warm` next step given the heater is now on, and $q_0$ the corresponding probability given it is off. Then

$$p^\pi\big((\texttt{warm},2) \mid (\texttt{cold},0)\big) = 0.3\,q, \qquad p^\pi\big((\texttt{cold},2)\mid(\texttt{cold},0)\big) = 0.3(1-q),$$
$$p^\pi\big((\texttt{warm},0)\mid(\texttt{cold},0)\big) = 0.7\,q_0, \qquad p^\pi\big((\texttt{cold},0)\mid(\texttt{cold},0)\big) = 0.7(1-q_0),$$

and zero to every other state. The four probabilities sum to $0.3(q + 1 - q) + 0.7(q_0 + 1 - q_0) = 0.3 + 0.7 = 1$, as required.

This is the averaging step $p^\pi(s'\mid s) = \sum_a \pi(a\mid s)p(s'\mid s,a)$ done concretely: the policy's randomness ($0.3/0.7$) and the environment's randomness ($q$, $q_0$) multiply, and the action disappears from the result. **Once the lock is in the state, the controller's rule is a function of the state alone and the process is a Markov chain** — which is exactly the precondition this lesson's equation needs.

</details>

## Connections

- **Backward:** the return $G_t$ whose expectation is taken here is [Lesson 1.1](01-01-the-rl-problem.md)'s, and the folding of the infinite sum into a one-step recursion is legal only because of [Lesson 1.2](01-02-markov-decision-processes.md)'s Markov property. The matrix form is the induced Markov reward process of that lesson, written in vector notation.
- **Forward:** [Lesson 1.4](01-04-optimality-bellman-optimality.md) replaces the policy average with a maximum and gets the optimality equation; [Lesson 1.5](01-05-policy-evaluation-and-policy-iteration.md) turns the boxed equation into the iterative algorithm that computes $V^\pi$ without a matrix inverse. The whole of Module 2 estimates these same two functions from samples instead of solving for them, and every algorithm there — [TD(0)](02-03-temporal-difference-learning-td0.md), [SARSA](02-04-sarsa-on-policy-td-control.md), [Q-learning](02-05-q-learning-off-policy-td-control.md) — is this equation turned into an update rule.
- **Sideways:** in [`grad-macro` 1.2](../../grad-macro/lessons/01-02-principle-of-optimality.md) the same recursion is Bellman's principle of optimality for a consumer, with $V$ the value of entering a period holding a given amount of capital; the linear-system solution here is the economist's "solving the functional equation" with a finite state space.
