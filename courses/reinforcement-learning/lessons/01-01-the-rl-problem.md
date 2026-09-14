# Reinforcement Learning · Lesson 1.1: The RL problem

> ⏱ ~15 min · Module 1: MDPs & Dynamic Programming · Builds on: [`machine-learning`](../../machine-learning/syllabus.md), [`probability-theory`](../../probability-theory/syllabus.md) · Unlocks: [1.2 (Markov decision processes)](01-02-markov-decision-processes.md)

## Why this matters

Every method in [`machine-learning`](../../machine-learning/syllabus.md) was handed the right answer. A labelled example says *the digit is a 7*; the loss measures how far you were from a target somebody already knew. Reinforcement learning removes that. The environment never says what you should have done — it says only how well the thing you actually did turned out.

That single change is not a small one. It creates three problems that have no analogue in supervised learning, and essentially every algorithm in this course is an attack on one of them. Getting clear about what those three problems *are*, before any notation, is the whole job of this lesson — because once you can name them, the rest of the course reads as a sequence of engineering responses rather than a list of update rules.

## The idea

Picture an agent and an environment trading messages forever. The agent sees a **state**, picks an **action**, and gets back two things: a **reward** (one number: how that went) and the next state. Nothing else. No target, no gradient handed down from above, no example of good play.

The **reward hypothesis** is the bet the whole field is built on:

> Everything we mean by a goal can be expressed as the maximization of the expected cumulative sum of a scalar reward.

Not the next reward — the *cumulative* one. That word is doing the work. An agent that maximizes immediate reward is a thermostat. An agent that maximizes the sum over an entire future is something that will accept a loss now to be better off later, which is the only interesting kind.

Three consequences follow immediately, and they are the course:

1. **Feedback is evaluative, not instructive.** You learn the value of the action you took and *nothing* about the ones you didn't. To find out whether the other action was better, you have to try it — and every trial spends a turn you could have spent doing the best thing you already know. That is the **exploration–exploitation** trade-off, and it exists because the feedback is a score, not an answer key.
2. **Reward is delayed.** A move in chess is rewarded twenty moves later. The agent has one number at the end and a whole sequence of decisions to distribute it across — the **credit assignment** problem.
3. **Your data depends on your policy.** A supervised learner gets a fixed dataset. An agent generates its own: change how you act and you visit different states, so the training distribution moves under you. The i.i.d. assumption that underwrites nearly all of [`statistical-learning`](../../statistical-learning/syllabus.md) is simply false here.

## The formal version

**The interaction.** At each step $t = 0, 1, 2, \dots$ the agent observes state $S_t$, takes action $A_t$, and the environment returns reward $R_{t+1}$ and next state $S_{t+1}$. The record of one run is a **trajectory**:

$$S_0,\ A_0,\ R_1,\ S_1,\ A_1,\ R_2,\ S_2,\ \dots$$

In words: state, action, consequence, repeat. The reward is indexed $t+1$ because it arrives *with* the next state — it is part of the environment's reply, not something the agent knew when it chose.

**The return.** What the agent maximizes is not $R_{t+1}$ but the **return**, the discounted sum of everything still to come:

$$G_t \;=\; R_{t+1} + \gamma R_{t+2} + \gamma^2 R_{t+3} + \cdots \;=\; \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

In words: the total future reward, with each step further out counted a little less. The **discount factor** $\gamma \in [0,1]$ sets how much less. *(card: [return](../reference.md#return), [discount-factor](../reference.md#discount-factor))*

**$G_t$ is a random variable, not a number.** This is the single most important thing to hold onto from this lesson. The trajectory is random — the environment's transitions may be stochastic, and the agent's own choices usually are too — so $G_t$ has a distribution. Every quantity in the next four lessons is an expectation of it, and every algorithm in Module 2 is a way of estimating that expectation from samples.

**Why discount at all.** Three separate reasons, and it is worth keeping them apart:

- *Mathematical:* if rewards are bounded by $R_{\max}$ and $\gamma < 1$, then $|G_t| \le R_{\max}/(1-\gamma)$, so the sum converges. With $\gamma = 1$ and an endless stream it need not.
- *Modelling:* a reward you might never collect is worth less, exactly as in the discounting of [`micro-refresher`](../../micro-refresher/syllabus.md) and [`grad-macro`](../../grad-macro/syllabus.md). There $\gamma = 1/(1+r)$ for an interest rate $r$; here it is the same object.
- *Practical:* $\gamma$ sets an effective horizon of roughly $1/(1-\gamma)$ steps. At $\gamma = 0.99$ the agent is planning about a hundred steps ahead; at $\gamma = 0.9$, about ten.

**Episodic vs continuing.** If the interaction ends — a game finishes, a robot falls over — the run is an **episode**, the final state is **terminal**, and $\gamma = 1$ is safe because the sum is finite. If it never ends, the task is **continuing** and you need $\gamma < 1$. A convenient trick unifies them: treat the terminal state as absorbing, with every subsequent reward equal to zero.

## Picture

![Left: a loop between a box labelled agent and a box labelled environment, with an action arrow running from agent down to environment and a reward-and-next-state arrow running back up, captioned one scalar of feedback per step. Right: a timeline of four action circles connected left to right, ending in a box holding a reward of plus ten, with dashed arcs running from every action to that reward and the question which action earned it](assets/01-01-fig1.svg)

The left panel is the definition of the problem; the right panel is why it is hard. Four actions, one number at the end, and the loop gives you no way to tell which of the four deserves it.

## Worked examples

**Example 1 (mechanical): the discount changes which behaviour is better.** Two trajectories, each four steps long.

- **A** — a long haul: rewards $(-1,\, -1,\, -1,\, +10)$.
- **B** — a quick small win: rewards $(+1,\, 0,\, 0,\, 0)$.

Compute $G_0 = \sum_{k=0}^{3}\gamma^k R_{k+1}$ for each. For B this is $1$ at every $\gamma$. For A:

| $\gamma$ | $G_0(\text{A})$ | $G_0(\text{B})$ | better |
|---|---|---|---|
| $0$ | $-1$ | $1$ | B |
| $0.5$ | $-1 - 0.5 - 0.25 + 1.25 = -0.5$ | $1$ | B |
| $0.9$ | $-1 - 0.9 - 0.81 + 7.29 = 4.58$ | $1$ | A |
| $1$ | $7$ | $1$ | A |

**The preference reverses.** The two behaviours are fixed; only $\gamma$ moved, and it changed which one is optimal. Setting $\gamma = 0$ makes the agent **myopic** — it maximizes $R_{t+1}$ alone and will never pay a cost for a later gain.

Solve for the crossover exactly: $-1-\gamma-\gamma^2+10\gamma^3 = 1$, i.e. $10\gamma^3 - \gamma^2 - \gamma - 2 = 0$, whose only root in $(0,1)$ is $\gamma^\star \approx 0.6798$. Below it, patience does not pay; above it, it does. **The discount factor is not a tuning knob for numerical convenience — it is part of the problem statement.** Change it and you have changed what "optimal" means.

**Example 2 (why you'd care): the reward hypothesis has teeth.** You want a cleaning robot to tidy a room, so you reward it $+1$ for each piece of litter deposited in the bin. It learns to knock the bin over, scatter the contents, and re-deposit them forever.

Nothing went wrong with the *algorithm*. The agent maximized the cumulative reward exactly as specified; the specification was wrong. This is **reward hacking**, and the general lesson is sharp:

> The reward defines the goal. It does not *hint* at the goal, and the agent will not infer what you meant.

The fix here is to reward the *state of the room* — litter on the floor, counted each step, with a negative reward — rather than the *event* of depositing. A state-based reward cannot be farmed by generating the event repeatedly. This is worth noticing now because the temptation to hand-shape rewards into "helpful" intermediate bonuses returns in every applied setting, and the failure mode is always this one: a loop the designer did not anticipate that scores well.

## Watch out

- **You might think** reward and return are two words for the same thing — **but actually** $R_{t+1}$ is one step's scalar and $G_t$ is the whole discounted future. Almost every confusing equation in Module 1 becomes clear once you check which of the two a symbol refers to. The agent maximizes $G$; the environment emits $R$.
- **You might think** the agent–environment boundary is the robot's physical skin — **but actually** it is drawn at the **limit of the agent's arbitrary control**. A robot's motors are part of the environment: the agent chooses a torque command, and what the joint actually does is the environment's reply. Anything the agent cannot change at will, including its own body and its own reward function, sits on the environment's side.
- **You might think** a larger $\gamma$ is always better because it is less short-sighted — **but actually** it also raises the variance of any sampled return (more terms contribute) and slows learning, and if the task is genuinely episodic and short, a large $\gamma$ buys nothing. It is a modelling choice with a cost.

## One-liner

> Supervised learning tells you the answer; reinforcement learning only scores the answer you gave — and from that one change follow exploration, credit assignment, and a training distribution that moves when you do.

## Problems

**P1 (🟢)** An episode produces rewards $R_1 = 2$, $R_2 = 0$, $R_3 = -4$, $R_4 = 6$, and then terminates.

(a) Compute $G_0$ at $\gamma = 1$ and at $\gamma = 0.5$.
(b) Compute $G_2$ at $\gamma = 0.5$. (Careful with the indexing: $G_2 = R_3 + \gamma R_4 + \cdots$.)
(c) State which of $G_0$ or $G_2$ the agent would be maximizing when it chooses $A_2$, and why.

**P2 (🟡)** For each situation, name which of the three difficulties — evaluative feedback, delayed reward, or policy-dependent data — is the *primary* obstacle, and give the reason in one sentence.

(a) A drug-trial algorithm must choose a treatment for each arriving patient and only ever observes the outcome of the treatment it gave.
(b) A chess engine wins a game and must decide which of its 40 moves to credit.
(c) An agent trained to drive cautiously has never seen a skid, so it has no data on how to recover from one.

**P3 (🔴)** You are designing a reward for an agent that should learn to ride a bicycle to a goal position.

(a) A colleague proposes $+1$ for every time step the bicycle does not fall. State the behaviour that maximizes this and why it is not what was wanted.
(b) A second proposal adds a bonus for reducing the distance to the goal: reward $= d_t - d_{t+1}$ each step, where $d_t$ is the distance to the goal. Show that on any trajectory from start to goal this sums to a constant, and say what that implies about the behaviour it encourages.
(c) Using (b), explain why *cycling in a small loop* is a genuine risk under a reward of $+1$ for each step the distance decreases, but not under $d_t - d_{t+1}$.
(d) State the general principle these three cases illustrate, in one sentence.

<details>
<summary>Solutions</summary>

**P1**

(a) $\gamma = 1$: $G_0 = 2 + 0 - 4 + 6 = \mathbf{4}$.

$\gamma = 0.5$: $G_0 = 2 + 0.5(0) + 0.25(-4) + 0.125(6) = 2 + 0 - 1 + 0.75 = \mathbf{1.75}$.

(b) $G_2 = R_3 + \gamma R_4 = -4 + 0.5(6) = -4 + 3 = \mathbf{-1}$.

Note that $G_2$ is negative while $G_0$ is positive: the same episode looks good from the start and bad from step 2, because the $+2$ that redeemed it is already in the past and the return only ever looks forward.

(c) **$G_2$.** The action $A_2$ is taken in state $S_2$, and the rewards it can still influence are $R_3, R_4, \dots$ — exactly the terms of $G_2$. $R_1$ and $R_2$ have already been collected and no choice made now can change them.

This is the return's defining property and it is the reason the index is worth being fussy about: **$G_t$ contains only what is still in the agent's power.** Sunk rewards are sunk, the same way sunk costs are irrelevant to a forward-looking optimum in [`micro-refresher`](../../micro-refresher/syllabus.md).

**P2**

(a) **Evaluative feedback.** The trial observes the outcome of the treatment it administered and never learns what would have happened under the alternative, so the only way to learn about the other treatment is to spend a patient on it — the exploration–exploitation trade-off in its starkest form. (This is literally the bandit problem of [Lesson 4.4](04-04-bandits-and-principled-exploration.md), and it is where the problem was first studied.)

(b) **Delayed reward.** A single terminal scalar has to be distributed over 40 decisions, most of which were unremarkable and one or two of which were decisive — the credit assignment problem.

(c) **Policy-dependent data.** The cautious policy never generates skid states, so no amount of further training on its own experience will produce data about them; the training distribution is a consequence of the policy, and it has a hole exactly where the policy never goes. Note the trap this sets: the agent's confidence is highest precisely where its data is absent.

**P3**

*Accept criterion for (a) and (c): any behaviour that scores at least as well as the intended one while failing the designer's actual goal counts as correct.*

(a) **Maximized by riding in circles forever** (or, if the episode is capped, by any stable behaviour that never risks a fall). The reward is $+1$ per surviving step and mentions the goal nowhere, so nothing in it distinguishes reaching the goal from not reaching it — and since approaching a goal usually requires turns and manoeuvres that risk falling, the specified reward actively *penalizes* trying.

(b) Telescoping. Over a trajectory of $T$ steps the total is

$$\sum_{t=0}^{T-1} (d_t - d_{t+1}) = d_0 - d_T,$$

since every interior $d_t$ appears once with each sign. So at $\gamma = 1$ the sum depends only on the start and end distances — **every route from start to goal earns the same total**, and a wandering route earns exactly what a direct one does.

That is the point: the shaping term cannot be farmed, because going backwards costs precisely what going forwards earned. It also means this term alone does not prefer *fast* arrival; you still need the per-step cost (a small negative reward each step) to get that, and then the shaping only redistributes reward over time without changing which trajectory is best. This is the idea behind **potential-based reward shaping**, whose guarantee is exactly this telescoping property: adding $\gamma\Phi(s_{t+1}) - \Phi(s_t)$ for any function $\Phi$ of state leaves the optimal policy unchanged.

(c) Under "$+1$ for each step the distance decreases", the reward is attached to an **event** that can be repeated: ride away from the goal (no reward, but no penalty either) and then ride back toward it (reward). Each lap collects fresh $+1$s, so an infinite loop scores unboundedly better than a single direct approach, which collects the $+1$s only once.

Under $d_t - d_{t+1}$ the same lap collects $+x$ on the way in and $-x$ on the way out, netting zero. **The difference is that the second reward is a function of the state, and the first is a function of the transition's sign only** — throwing away the magnitude is what let the loop profit.

(d) **Reward the state of the world you want, not the events you imagine lead to it** — because any reward attached to a repeatable event is an invitation to repeat it, and the agent optimizes what you wrote rather than what you meant.

</details>

## Connections

- **Backward:** the loss-minimization framing of [`machine-learning` 1.1](../../machine-learning/lessons/01-01-the-learning-problem.md) is the thing being replaced here — the target that made a loss computable is exactly what the environment withholds. Discounting is the same operation as present-value discounting in [`micro-refresher`](../../micro-refresher/syllabus.md), with $\gamma = 1/(1+r)$.
- **Forward:** [Lesson 1.2](01-02-markov-decision-processes.md) turns this informal loop into the Markov decision process, which is the object every later lesson computes with. The return $G_t$ becomes the thing whose expectation [Lesson 1.3](01-03-value-functions-bellman-expectation.md) calls a value function, and Module 2 is entirely about estimating that expectation from samples when the environment's rules are unknown.
- **Sideways:** [`operations-research` 3.4](../../operations-research/lessons/03-04-stochastic-dynamic-programming.md) solves the *planning* version of this problem — the same recursion, but with the transition probabilities handed to you; it is worth reading alongside Module 1, since this course's first six lessons are that lesson's machinery rebuilt with the parts RL needs. [`grad-macro` 1.1](../../grad-macro/lessons/01-01-sequence-vs-recursive.md) does the same recursion again for a consumer choosing consumption over time, where $\gamma$ is a discount rate and the value function is lifetime utility.
