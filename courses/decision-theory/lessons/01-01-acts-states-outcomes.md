# Decision Theory · Lesson 1.1: Acts, states, outcomes

> ⏱ ~15 min · Module 1: Expected utility and what it claims · Builds on: [`grad-game-theory` 1.5](../../grad-game-theory/lessons/01-05-expected-utility-vnm-axioms.md), [`prob-stat-refresher` 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md), [`philosophical-method` 4.3](../../philosophical-method/lessons/04-03-finding-the-crux.md) · Unlocks: [1.2 From expected value to expected utility](01-02-from-expected-value-to-expected-utility.md), [2.1 Savage's framework](02-01-savages-framework.md), [4.1 Newcomb's problem](04-01-newcombs-problem.md)

## Why this matters

This course is the philosophy of rational choice with the math switched on. It runs from expected utility and what its theorems claim, through subjective probability and the Allais choices, ambiguity and ignorance, and Newcomb's problem, to aggregating people and the edges of expected value. It takes no side on any contested question. Each dispute is reduced to the axiom someone must give up, which is [finding the crux](../../philosophical-method/lessons/04-03-finding-the-crux.md) done with formulas. You have seen the von Neumann-Morgenstern axioms stated in [`grad-game-theory` 1.5](../../grad-game-theory/lessons/01-05-expected-utility-vnm-axioms.md); here we ask what they show. The course is also the formal partner of [`ethics`](../../ethics/syllabus.md), [`philosophy-of-economics`](../../philosophy-of-economics/syllabus.md) and [`political-philosophy`](../../political-philosophy/syllabus.md). It starts with the simplest tool there is: the table, and the one argument you can run on a table without any probabilities at all.

## The idea

You are giving a talk tomorrow. Should you spend tonight rehearsing? Here is an argument against it:

> Either the talk will go well or it will go badly. If it goes well, I'd rather have had my evening free. If it goes badly, I'd still rather have had my evening free. So whatever happens, skipping rehearsal is better.

Every step sounds right, and the conclusion is plainly silly. The argument has the shape of a **dominance argument**: one option beats another in every possible circumstance, so take it. Dominance arguments are the strongest reasoning in decision theory, because they need no probabilities. When one is valid, nobody, whatever their beliefs or attitude to risk, can rationally refuse it.

The rehearsal argument fails because rehearsing changes *which circumstance you end up in*. "The talk goes well" is not a fixed feature of the world that your choice leaves alone. It is partly what your choice is *for*. Dominance reasoning is valid only when the circumstances are fixed independently of what you do. Whether they are fixed depends on how you described the circumstances in the first place. That is the **partition problem**, and it is the first thing a decision theorist checks.

## The formal version

A [decision matrix](../reference.md#decision-matrix) has three ingredients. This course follows the layout of standard textbooks such as Martin Peterson's *An Introduction to Decision Theory*: acts as rows, states as columns.

- **Acts** $a_1, \dots, a_m$: the options you can choose among.
- **States** $s_1, \dots, s_n$: the ways the world might be, as far as it matters to the outcome. They must be mutually exclusive and jointly exhaustive: exactly one obtains.
- **Outcomes** $o(a_i, s_j)$: what happens if you do $a_i$ and $s_j$ obtains. A utility function $u$ scores outcomes; write $u_{ij} = u(o(a_i, s_j))$.

*In words:* a row is something you might do, a column is a way the world might be, and each cell says how good that combination is.

**[Dominance](../reference.md#dominance).** Act $a$ **strictly dominates** act $b$ if $u(a,s) > u(b,s)$ for every state $s$. It **weakly dominates** $b$ if $u(a,s) \ge u(b,s)$ for every $s$, with strict inequality for at least one $s$.

*In words:* strict means better in every column; weak means never worse and better somewhere.

**The dominance principle.** Never choose a dominated act.

**When it is licensed.** Let $P$ be your probability over states. The states are **act-independent** if $P(s \mid a) = P(s)$ for every act $a$ and state $s$. Then
$$EU(a) = \sum_{s} P(s)\, u(a,s),$$
the [expected utility](../reference.md#expected-utility) of $a$, and
$$EU(a) - EU(b) = \sum_{s} P(s)\,\big[u(a,s) - u(b,s)\big].$$
If $a$ strictly dominates $b$, every bracket is positive, so $EU(a) > EU(b)$ for *every* probability $P$. If $a$ weakly dominates $b$, $EU(a) \ge EU(b)$ for every $P$, strictly whenever $P$ gives positive probability to a state where $a$ does better.

*In words:* with act-independent states, dominance never disagrees with expected utility, whatever your probabilities, which is why it needs none.

**When it is not.** If the states are [act-dependent](../reference.md#act-dependent-states), the relevant weights are $P(s \mid a)$, different for each row. Then the dominated act can have the higher expected utility, because doing it makes its good columns likelier. The bracket argument above no longer goes through: each act's sum uses different weights.

The dominance argument, reconstructed:

1. Exactly one of the states obtains, and which one does not depend on what I choose.
2. In every state, $a$ yields a better outcome than $b$.
3. If I knew which state obtained, I should choose $a$ over $b$.

∴ **C.** I should choose $a$ over $b$.

*In words:* if the world's contribution is fixed and you'd prefer $a$ whatever it turns out to be, prefer $a$ now.

**Where the argument is weakest.** Premise 1, in two ways. First, "does not depend on" is ambiguous. It can mean *causal* independence: my act does not influence the state. Or it can mean *probabilistic* (evidential) independence: learning my act should not change my credence in the state. Usually the two go together. In [Newcomb's problem](../reference.md#newcombs-problem) ([4.1](04-01-newcombs-problem.md)) they split. A reliable predictor has already filled or emptied a box, so the contents are causally fixed, yet your choice is evidence about what the predictor foresaw. Dominance says one thing and expected utility another, and Module 4 is the fight over which notion of independence premise 1 needs. Second, premise 1 is a fact about a *description*. The same decision can be cut into states in many ways, and dominance can hold on one cut and fail on another. A defender of dominance must say which partitions count. The usual answer is "any partition whose states are act-independent", and that just moves the question back to the first ambiguity.

## The case

![Two decision tables for the rehearsal decision. Left table, states talk goes well and talk goes badly: rehearse gives 8 and 0, skip gives 10 and 2, so skip is better in both columns, but the chance of going well is 0.9 if you rehearse and 0.3 if you skip, and expected utility is 7.2 for rehearse against 4.4 for skip. Right table, states well either way, well only if rehearse, badly either way, with chances 0.3, 0.6 and 0.1 whatever you do: rehearse gives 8, 8, 0 and skip gives 10, 2, 2, so neither act is better in every column, and expected utility is again 7.2 against 4.4.](assets/01-01-fig1.svg)

The same decision, cut two ways. Shaded cells mark the better act in each column. On the left, Skip wins every column, but the columns' chances move with the row. On the right, the chances are fixed and no act wins every column. Worked through in Example 2.

## Worked examples

**Example 1 (clean): a café's order.** A café owner must order stock for next week before she knows the weather. Her order cannot change the weather, so the states are act-independent. Profits, in hundreds of dollars:

| | Rain | Mild | Hot |
|---|---|---|---|
| $H$: mostly hot drinks | 8 | 5 | 2 |
| $M$: mixed | 6 | 5 | 4 |
| $C$: mostly cold drinks | 3 | 4 | 6 |
| $W$: mixed, pricier supplier | 6 | 4 | 4 |
| $D$: hot drinks, pricier supplier | 7 | 4 | 1 |

*Strict dominance:* $H$ beats $D$ in every column ($8>7$, $5>4$, $2>1$). *Weak dominance:* $M$ ties $W$ in rain and heat and beats it in mild weather, so $M$ weakly dominates $W$. Check the other pairs and nothing else dominates: $H$, $M$ and $C$ each win some column.

By the result above, $EU(M) - EU(W) = P(\text{mild}) \cdot (5 - 4) = P(\text{mild})$. That is positive unless she is certain the week won't be mild. So $W$ can tie $M$ only on a credence she has no reason to hold, and $D$ can never be best at all. Dominance has cut five options to three, and then it falls silent. Choosing among $H$, $M$ and $C$ needs probabilities. With $P = (0.2,\ 0.5,\ 0.3)$ for rain, mild and hot, the expected profits are 4.7, 4.9 and 4.4, and $M$ wins. That silence is typical. Dominance is the only rule that is beyond dispute, and it rarely decides on its own.

**Example 2 (hard): the rehearsal, repaired.** Utilities: a good talk is worth 10, a bad one 2, and a lost evening costs 2. On the states "goes well / goes badly":

| | Well | Badly |
|---|---|---|
| Rehearse | 8 | 0 |
| Skip | 10 | 2 |

Skip strictly dominates. But your credence that the talk goes well is $P(\text{well} \mid \text{rehearse}) = 0.9$ and $P(\text{well} \mid \text{skip}) = 0.3$. Using the probabilities that go with each row:
$$\begin{aligned} EU(\text{Rehearse}) &= 0.9(8) + 0.1(0) = 7.2, \\ EU(\text{Skip}) &= 0.3(10) + 0.7(2) = 4.4. \end{aligned}$$
Rehearsing wins by 2.8. Premise 1 failed: the states are act-dependent.

*Re-partition.* Cut the world instead by what rehearsing would *do*. These states settle the outcome for both acts at once, and no act of yours changes which one you are in:

- $K_1$: the talk goes well either way;
- $K_2$: it goes well only if you rehearse;
- $K_3$: it goes badly either way.

(A fourth, "well only if you skip", gets probability 0 here.) Matching the conditional chances: $P(K_1) = P(\text{well} \mid \text{skip}) = 0.3$, $P(K_1) + P(K_2) = P(\text{well} \mid \text{rehearse}) = 0.9$, so $P(K_2) = 0.6$ and $P(K_3) = 0.1$. The new rows are Rehearse $(8, 8, 0)$ and Skip $(10, 2, 2)$. Skip wins $K_1$ and $K_3$, Rehearse wins $K_2$, and nothing dominates. Expected utility with these act-independent probabilities is again 7.2 against 4.4. The states $K_i$ are what David Lewis would call [dependency hypotheses](../reference.md#dependency-hypothesis) ([4.3](04-03-causal-decision-theory.md)).

Because the dependence here is plainly causal, every theory in Module 4 agrees on this computation. The case is hard only for the naive dominance argument. It is not yet hard for decision theory.

## Watch out

- **You might think dominance is a weak, uncontroversial rule that can't mislead.** It is uncontroversial only given premise 1. Applied to act-dependent states, it recommends skipping rehearsal, skipping the vaccine and skipping the revision. The validity of the rule lives entirely in the choice of states.
- **You might think a weakly dominated act is never as good as its dominator.** It ties whenever you are certain the states where they differ won't happen ($P(\text{mild}) = 0$ in Example 1). The dominance principle rules it out anyway. That is a small extra commitment beyond expected utility, but one nearly everyone accepts.
- **You might think the re-partition in Example 2 changed the answer.** It changed which *argument* is available, not the expected utilities. Correct accounting gives 7.2 against 4.4 on either cut. What cannot survive the re-cut is the claim that Skip wins *without* probabilities.

## One-liner

> Dominance is the one argument that needs no probabilities, and it is valid only when the columns are fixed independently of the row you choose.

## Problems

**P1 (🟢) *(Formal (a)–(b).)*** Act-independent states $s_1, s_2, s_3$; utilities:

| | $s_1$ | $s_2$ | $s_3$ |
|---|---|---|---|
| $a_1$ | 4 | 7 | 1 |
| $a_2$ | 5 | 7 | 3 |
| $a_3$ | 6 | 2 | 3 |
| $a_4$ | 3 | 6 | 0 |

(a) List every dominance relation, saying for each whether it is strict or weak. Which acts survive the dominance principle?
(b) Writing $p_j = P(s_j)$, show that $EU(a_2) \ge EU(a_1)$ for every probability, and say exactly when they are equal.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** A town is deciding whether to run a vaccination drive ($V$) or not ($N$) before winter. Utilities: the drive costs 10; an outbreak costs 50. A council member argues: "Either there is an outbreak or there isn't. Either way, not running the drive saves 10. So don't run it." The town's health office puts the chance of an outbreak at 0.1 with the drive and 0.5 without.

(a) Write the council member's $2 \times 2$ matrix, confirm that $N$ strictly dominates, and compute each act's expected utility using the chance of an outbreak that goes with each act.
(b) Construct a partition into act-independent states on which $N$ does not dominate $V$, give each state's probability, and confirm that expected utility is unchanged.
(c) In one sentence: which premise of the dominance argument did the council member's matrix violate?

**P3 (🔴, optional) *(Exegetical.)*** An **invented** board memo from a regional newspaper, not the words of any real company:

> "Either our readers stay with us next year or they drift to free competitors. If they stay, a paywall adds subscription revenue on top of what we have. If they drift, a paywall at least earns something from those who remain. Either way we are better off with the paywall. We also asked whether the advertising market will recover. Since the paywall comes out ahead whether or not it does, that question can be set aside."

The memo makes two dominance arguments. Say which one is defective and why, whether the other is acceptable and on what condition, and what the board should compute instead. 120 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b), strict.)*

**Must hit, strict (a):**

- $a_1$ strictly dominates $a_4$: $4>3$, $7>6$, $1>0$.
- $a_2$ strictly dominates $a_4$: $5>3$, $7>6$, $3>0$.
- $a_2$ weakly dominates $a_1$: $5>4$, $7=7$, $3>1$. Not strict, because of the tie in $s_2$.
- No other pair: $a_3$ beats $a_2$ in $s_1$ ($6>5$) but loses in $s_2$; $a_3$ beats $a_1$ and $a_4$ in $s_1$ but loses to both in $s_2$.
- Survivors: $a_2$ and $a_3$.

**Must hit, strict (b):**

$$\begin{aligned} EU(a_2) - EU(a_1) &= (5-4)p_1 + (7-7)p_2 + (3-1)p_3 \\ &= p_1 + 2p_3 \ \ge\ 0. \end{aligned}$$

Equality holds exactly when $p_1 = p_3 = 0$, that is, when $p_2 = 1$.

**Wrong turns:** calling $a_2$ over $a_1$ strict (the $s_2$ column ties). Eliminating $a_3$ because it has the lowest single payoff in $s_2$: dominance compares whole rows, and $a_3$ wins $s_1$. Forgetting $a_1$ over $a_4$ because $a_1$ itself is eliminated: it still dominates $a_4$.

**Model answer:** (a) $a_1 \succ a_4$ and $a_2 \succ a_4$ strictly; $a_2$ weakly dominates $a_1$. Survivors $a_2$, $a_3$. (b) The difference is $p_1 + 2p_3$, which is non-negative and is zero only when $s_2$ is certain.

---

**P2** *(Formal (a)–(b) · Exegetical (c), all strict.)*

(a) States outbreak $O$ and none $Q$:

| | $O$ | $Q$ |
|---|---|---|
| $V$ | $-60$ | $-10$ |
| $N$ | $-50$ | $0$ |

$N$ is better by 10 in each column, so it strictly dominates. With each act's own chance:

$$\begin{aligned} EU(V) &= 0.1(-60) + 0.9(-10) = -6 - 9 = -15, \\ EU(N) &= 0.5(-50) + 0.5(0) = -25. \end{aligned}$$

$V$ is better by 10.

**Accept (b):** any partition whose states fix the outcome for *both* acts, carry the same probability whichever act is chosen, reproduce the chances 0.1 and 0.5, and show no dominance.

(b) Model partition: $K_1$ outbreak either way; $K_2$ outbreak only without the drive; $K_3$ no outbreak either way. "Outbreak only with the drive" gets 0. Then $P(K_1) = 0.1$ (outbreak despite the drive), $P(K_1) + P(K_2) = 0.5$, so $P(K_2) = 0.4$ and $P(K_3) = 0.5$.

| | $K_1$ | $K_2$ | $K_3$ |
|---|---|---|---|
| $V$ | $-60$ | $-10$ | $-10$ |
| $N$ | $-50$ | $-50$ | $0$ |

$N$ wins $K_1$ and $K_3$; $V$ wins $K_2$. No dominance. Expected utility:

$$\begin{aligned} EU(V) &= 0.1(-60) + 0.4(-10) + 0.5(-10) = -15, \\ EU(N) &= 0.1(-50) + 0.4(-50) + 0.5(0) = -25. \end{aligned}$$

(c) Premise 1: whether there is an outbreak depends on whether the drive runs, so the states were act-dependent.

**Wrong turns:** computing (a) with a single unconditional chance of outbreak; then $N$ wins by exactly 10 for every chance, which is just the dominance argument again. In (b), using "outbreak / none" with new numbers, or states such as "vaccine works / fails" that do not fix the outcome under $N$.

---

**P3** *(Exegetical, strict.)*

**Must hit, strict:**

- The reader argument is defective. Whether readers stay or drift is plausibly *caused* by the paywall, so the states are act-dependent and premise 1 fails. Being better in each column then proves nothing.
- The advertising argument is acceptable on condition that the ad market's recovery is independent of one paper's paywall, which is plausible for a market-wide trend. It also needs the paywall to really come out ahead in both ad states.
- Instead: estimate the chance readers stay with and without the paywall and compare expected revenue, or re-partition into act-independent states such as "stay either way", "drift only if paywalled" and "drift either way".

**Wrong turns:** rejecting both arguments because dominance is "too simple"; the ad argument is fine. Concluding the paywall is a mistake: an invalid argument does not make its conclusion false.

**Model answer:** The reader argument fails. Readers' loyalty is something the paywall itself affects, so "stay" and "drift" are act-dependent states, and winning in each column settles nothing; a paywall that drives readers away loses even if it "wins" both columns. The advertising argument is sound if ad recovery is a market-wide fact one paper cannot move, and if the paywall really is ahead in both cases. The board should estimate the chance of keeping readers with and without a paywall and compare expected revenue. Equivalently, it can re-cut the states into "stay either way", "drift only if paywalled" and "drift either way" and weight those.

</details>

## Connections

- **Backward:** the expected-utility sum is the one stated in [`grad-game-theory` 1.5](../../grad-game-theory/lessons/01-05-expected-utility-vnm-axioms.md); this lesson adds the table it sums over. $P(s \mid a)$ is ordinary conditioning from [`prob-stat-refresher` 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md).
- **Forward:** [1.2](01-02-from-expected-value-to-expected-utility.md) fills the cells with utilities rather than money. [2.1](02-01-savages-framework.md) builds act-independence into the framework by defining acts as functions from states to consequences, and its sure-thing principle is state-by-state reasoning grown up. [3.3](03-03-decisions-under-ignorance.md) gives the rules for when dominance falls silent and there are no probabilities. [4.1](04-01-newcombs-problem.md)–[4.3](04-03-causal-decision-theory.md) are the fight over premise 1.
- **Sideways:** iterated deletion of dominated strategies in [`grad-game-theory` 2.1](../../grad-game-theory/lessons/02-01-normal-form-dominance-rationalizability.md) is the same principle with an opponent's strategies as the columns. It is belief-free for the same reason: in a simultaneous game, your choice cannot influence the opponent's. Finding the crux ([`philosophical-method` 4.3](../../philosophical-method/lessons/04-03-finding-the-crux.md)) is the method this course runs on every dispute; here the crux is already visible, and it is what "independent" means.
