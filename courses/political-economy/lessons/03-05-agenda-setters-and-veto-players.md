# Political Economy · Lesson 3.5: Agenda setters and veto players

> ⏱ ~15 min · Module 3: Collective action and the choice of rules · Builds on: [3.4 Constitutions and the choice of rules](03-04-constitutions-and-the-choice-of-rules.md), [2.1 The Downsian spatial model](02-01-the-downsian-spatial-model.md) · Unlocks: [5.1 Legislative bargaining: Baron–Ferejohn](05-01-legislative-bargaining-baron-ferejohn.md), [5.2 Coalition and government formation](05-02-coalition-and-government-formation.md)

## Why this matters

The median voter theorem says the median's ideal beats *every* alternative in a pairwise vote. Real votes are between *one proposal and the status quo*, and someone else wrote the proposal. Once you model who proposes, who can block, and what happens if nothing passes, the median stops being decisive. A school board can win a budget far above what the median voter wants. A Congress with a clear majority for change can leave policy frozen. This lesson solves both, and says exactly which assumptions do the work.

## The idea

Think of an ultimatum. The setter offers a policy; the voter says yes or no; a no means the **reversion point**, whatever happens by default. The voter takes any offer at least as good as the default. So the worse the default is for her, the more the setter can extract. A setter who can make the alternative to her budget a very low one can make a high budget look like a bargain.

Now add more people who must say yes: two chambers, a president, coalition partners. Each one can block. A status quo sitting between the most extreme of them cannot be moved at all, since any move hurts someone with a veto. Policy is stuck not because nobody wants change, but because the people who must agree want it in opposite directions.

## The models

**The setter game** (Thomas Romer and Howard Rosenthal, "Political Resource Allocation, Controlled Agendas, and the Status Quo," *Public Choice*, 1978). Policy is a point on a line. Two players with [Euclidean utility](../reference.md#euclidean-and-quadratic-utility): a setter with ideal $s$ and a decisive voter with ideal $m$, the median of an electorate whose up-or-down vote she decides by the [median voter theorem](../reference.md#median-voter-theorem). Timing, all common knowledge:

1. A [reversion point](../reference.md#reversion-point) $q$ is fixed.
2. The setter proposes one $x$ (closed rule: no amendments, no second offer).
3. The voter accepts ($x$ is enacted) or rejects ($q$ stays). An indifferent voter accepts.

**Proposition 1 ([setter model](../reference.md#setter-model)).** Let $d = |q - m|$ and $A(q) = [m - d,\, m + d]$. The unique subgame-perfect outcome is the point of $A(q)$ closest to $s$. For a setter to the right ($s > m$):

$$x^*(q) = \begin{cases} s, & q \le 2m - s \ \text{ or } \ q \ge s,\\ 2m - q, & 2m - s < q < m,\\ q, & m \le q < s. \end{cases}$$

*In words:* a bad enough default hands the setter her ideal; a milder one gets her the voter's point of indifference; a default between the two of them stays put.

*Proof.* By backward induction ([`grad-game-theory` 3.2](../../grad-game-theory/lessons/03-02-backward-induction-subgame-perfection.md)).

1. The voter accepts $x$ iff $|x - m| \le |q - m|$, that is iff $x \in A(q)$.
2. A proposal outside $A(q)$ yields $q$, and $q \in A(q)$. So the setter in effect chooses a point of $A(q)$, and picks the one nearest $s$: the projection of $s$ onto the interval.
3. If $s \in A(q)$, i.e. $s - m \le |q - m|$, she gets $s$; with $s > m$ this holds iff $q \le 2m - s$ or $q \ge s$.
4. Otherwise $s > m + d$ and the nearest point is $m + d$: that is $2m - q$ when $q < m$, and $q$ itself when $m \le q < s$. ∎

Two consequences. The voter is never worse off than at $q$, because she can always reject. And the setter's take, how far $x^*$ lands from $m$, grows as the default gets worse for the voter, capped at $s$. The reversion point is the setter's weapon. Romer and Rosenthal applied the model to Oregon school-budget referenda, where state law fixed what happened if voters rejected the board's budget.

**[Veto players](../reference.md#veto-players)** (George Tsebelis, *Veto Players: How Political Institutions Work*, 2002). A veto player is an individual or collective actor whose agreement is needed to change the status quo. The [win-set](../reference.md#win-set) $W(q)$ is the set of points other than $q$ that every veto player weakly prefers to $q$. The [unanimity core](../reference.md#unanimity-core) is the set of status quos with $W(q) = \varnothing$.

**Proposition 2.** On a line with Euclidean utility and veto-player ideals $v_1 \le \dots \le v_k$: (a) the unanimity core is $[v_1, v_k]$; (b) for $q > v_k$, $W(q) = [2v_k - q,\, q)$, and symmetrically below $v_1$; (c) adding a veto player never enlarges any win-set, and one whose ideal lies in $[v_1, v_k]$ changes nothing.

*In words:* only the two most extreme veto players matter, and adding blockers can only add stability.

*Proof.* (a) If $v_1 \le q \le v_k$, a move right hurts $v_1$ strictly and a move left hurts $v_k$ strictly. (b) For $q > v_k$, $v_k$ accepts exactly $[2v_k - q, q)$; every $v_i \le v_k$ accepts $[2v_i - q, q)$, which contains it. (c) A win-set is an intersection, so a new member can only shrink it. A new ideal in $[v_1, v_k]$ is farther from any $q$ outside the core than the nearer extreme player, so its acceptance set contains that player's. ∎

With Euclidean preferences in more dimensions the acceptance sets are discs, $W(q)$ is their intersection, and the core is the convex hull of the ideals. When one veto player also sets the agenda, she picks her favourite point of $W(q)$: Proposition 1 with more than one voter.

**[Pivotal politics](../reference.md#gridlock-interval)** (Keith Krehbiel, *Pivotal Politics: A Theory of U.S. Lawmaking*, 1998). Collapse Congress into one 100-member chamber that always votes in full, ideals ordered $x_{(1)} \le \dots \le x_{(100)}$, plus a president at $p$. The median legislator, the 50th at $m = x_{(50)}$, proposes any $x$; ending a filibuster needs 60 votes; passage needs a majority; the president signs or vetoes; an override needs 67. A rightward move from $q$ to $x$ is supported exactly by legislators at or right of $(q + x)/2$, so cloture needs the 41st from the left to agree. Call her the filibuster pivot $f = x_{(41)}$. For leftward moves the filibuster pivot is $f' = x_{(60)}$, and with a president on the right the override pivot is $v = x_{(67)}$.

**Proposition 3.** If $p \ge v$, every $q \in [f, v]$, the gridlock interval, is unchanged; $q < f$ gives $x^* = \min(m,\, 2f - q)$; $q > v$ gives $x^* = \max(m,\, 2v - q)$.

*In words:* change needs the agreement of the pivot on the far side of the move, and between the two binding pivots nothing moves even with a majority for change.

*Proof.*

1. $q \in [f, m]$: a move right hurts $f \le q$, so it is filibustered; the median proposes no move left.
2. $q \in [m, v]$: the median wants a move left. The president, at $p \ge v \ge q$, vetoes it, and $v \ge q$ refuses to override.
3. $q < f$: the president prefers any $x \le m$ to $q$, so only $f$ binds: $x \le 2f - q$. The median takes the point nearest $m$. The majority constraint is implied by cloture.
4. $q > v$: the override route needs $x \ge 2v - q$. The cloture constraint $x \ge 2f' - q$ is weaker since $f' \le v$. A president who signs accepts only $x \ge 2p - q \ge 2v - q$, which adds nothing. ∎

A brute-force check over random 100-member chambers agrees with these formulas.

**Negative agenda control.** A committee at $g < m$ that can refuse to report a bill, whose bill then goes to an open floor that enacts $m$, opens the gates iff $|m - g| \le |q - g|$. Every $q \in (2g - m,\, m]$ is protected; at $q = 2g - m$ the committee is indifferent and opens the gates. With $g = 30$ and $m = 50$, any status quo above 10 and up to 50 survives. That is the formal core of the cartel theory in [`political-institutions` 4.2](../../political-institutions/lessons/04-02-committees-and-agenda-control.md).

**Where the argument is weakest.** All three results assume complete information and a known, exogenous reversion point. With complete information no proposal ever fails, yet budget referenda and bills do fail; later work adds uncertainty about the voter's ideal, and then the setter trades a bigger budget against the risk of rejection. The reversion point is also often chosen: today's enacted policy is tomorrow's status quo, so a forward-looking setter shapes her future leverage. Finally, one dimension is doing quiet work. In two dimensions a "median proposer" is no longer well defined ([2.2](02-02-multidimensional-voting-and-chaos.md)), although the veto-player core survives as a convex hull.

## Picture

![Enacted policy plotted against the status quo for a setter at 80 and a median voter at 50. For status quos from 0 to 20 the outcome is 80; from 20 to 50 it falls along the line 100 minus q, through the point 30, 70; from 50 to 80 it equals the status quo; above 80 it is again 80. A dashed horizontal line marks the voter's ideal at 50 and a dashed diagonal marks no change.](assets/03-05-fig1.svg)

The V shape is the setter's leverage. Only at $q = m$ does the voter get her ideal. The further the default lies below 50, away from the setter, the more she extracts, up to her ideal 80; defaults between 50 and 80 stay put.

## Worked examples

**Example 1 (clean): a budget setter.** A school board at $s = 80$ proposes a budget to a median voter at $m = 50$. The kink is at $2m - s = 20$.

| Reversion $q$ | Region | Outcome | Voter's loss $\lvert x^* - m \rvert$ |
|---|---|---|---|
| 10 | $q \le 20$ | 80 | 30 (40 at $q$) |
| 30 | $20 < q < 50$ | 70 | 20 (20 at $q$) |
| 60 | $50 \le q < 80$ | 60 | 10 (10 at $q$) |
| 90 | $q \ge 80$ | 80 | 30 (40 at $q$) |

At $q = 30$ the voter is indifferent between 30 and 70, both 20 from her ideal, and accepts: the setter gains 40 units over the default. At $q = 10$ the voter strictly gains by accepting 80. The setter is capped by her own ideal.

**Example 2 (the hypothesis bites): a moderate president.** Positions: $x_{(41)} = 30$, median 45, $x_{(60)} = 55$, $x_{(67)} = 65$.

- President at $p = 80 \ge v$. Gridlock interval $[30, 65]$. At $q = 75$, $x^* = \max(45, 130 - 75) = 55$; at $q = 20$, $x^* = \min(45, 60 - 20) = 40$.
- President at $p = 60$, between $f'$ and $v$. Step 2 of the proof fails: the president now accepts left moves from $q > 60$. The interval shrinks to $[30, 60]$, and $q = 62$ moves to $\max(45,\, 120 - 62) = 58$.
- President at $p = 50$, below $f'$. Now the filibuster pivot binds: the interval is $[30, 55]$, and $q = 62$ moves to $\max(45,\, 110 - 62) = 48$.

In general, with $p > m$ the upper end is $\max(f', \min(p, v))$. "Gridlock is $[f, v]$" is a statement about an extreme president.

## Watch out

- **You might think** the median voter's veto protects her, but it only guarantees she does no worse than the reversion point. When the default is bad, the outcome lands as far from her as the setter's own ideal (Example 1).
- **You might think** more veto players always means more gridlock, but one inside the existing core is absorbed and changes nothing (Proposition 2(c)). What matters is the distance between the extreme ones.
- **You might think** the gridlock interval is always $[f, v]$, but that needs the president beyond the veto pivot. A moderate president shrinks it (Example 2). This is the hypothesis people drop.

## One-liner

> Who proposes and what happens if nothing passes decide the outcome as much as who votes: a setter extracts in proportion to how bad the default is, and between the extreme pivots nothing moves.

## Problems

**P1 (🟢)** *(Formal.)* A setter at $s = 2$ proposes to a median voter at $m = 7$; policies lie on $[0, 15]$, Euclidean utility, an indifferent voter accepts.

(a) Give the enacted policy as a function of the reversion point $q$, as a table by region.
(b) Find the outcome for $q = 9$ and for $q = 14$.
(c) For $q \in [7, 15]$, which reversion points leave the voter worst off, and how far from her ideal is the outcome then?

**P2 (🟡)** *(Formal.)* A 100-member chamber, one dimension, the pivotal-politics rules of this lesson (median proposes, cloture 60, override 67, all members vote). Members' positions: 34th from the left at 2, 41st at 3.5, 50th (the proposer) at 5, 60th at 6, 67th at 7.5. The president is at 1.

(a) Which two pivots bound the gridlock interval, and what is it?
(b) Find the outcome for $q = 0.5$ and for $q = 9$.
(c) A new president at 6.5 takes office. Find the new gridlock interval and the outcome for $q = 7$.

**P3 (🔴, optional)** *(Formal.)* Three veto players have ideals 3, 6 and 10 on a line (Euclidean utility); the one at 3 also sets the agenda. An invented memo claims: "Since our minister controls the agenda, any status quo far from her position, such as 9.5, will be pulled toward her."

(a) Show that 9.5 cannot be moved, and find, with proof, every status quo that cannot be moved.
(b) For $q = 14$, find the enacted policy. Recompute after adding a fourth veto player at 8, and instead at 12.

<details>
<summary>Solutions</summary>

**P1** *(Formal, strict.)*

(a) Here $s < m$ and $2m - s = 12$. The voter accepts $x$ iff $|x - 7| \le |q - 7|$; the setter picks the acceptable point nearest 2.

| $q$ | Outcome |
|---|---|
| $q \le 2$ | 2 (the voter prefers 2 to $q$) |
| $2 < q \le 7$ | $q$ (the voter refuses moves left; the setter will not move right) |
| $7 < q < 12$ | $14 - q$ |
| $q \ge 12$ | 2 |

(b) $q = 9$: $14 - 9 = 5$. $q = 14$: 2, since 2 is 5 from the voter and 14 is 7.

(c) On $(7, 12)$ the loss is $q - 7$, rising from 0 to 5; for every $q \ge 12$ the outcome is 2, a loss of 5. So **every $q \in [12, 15]$** is worst, with the outcome 5 from her ideal. The loss is capped at $|s - m| = 5$, because the setter never proposes past her own ideal.

**Wrong turns:** writing the outcome as $2m - q$ for all $q > m$, which for $q = 14$ gives 0, beyond the setter's ideal. Treating $2 < q \le 7$ as movable: there the setter wants left and the voter wants right.

---

**P2** *(Formal, strict.)*

(a) The president is on the left, so he vetoes rightward moves from any $q \ge 1$. A rightward move then needs an override: 67 votes from members at or right of the midpoint, so the 34th member must agree (and the 41st, for cloture, which is weaker). A leftward move pleases the president and needs cloture: the 60th member. The interval is $[x_{(34)}, x_{(60)}]$, that is **$[2, 6]$**.

(b) $q = 0.5$: the president signs only $x \le 1.5$, so anything further needs an override, and the 34th member, at 2, must agree: $x \le 2 \cdot 2 - 0.5 = 3.5$. The proposer at 5 gets **3.5**. $q = 9$: a leftward move needs the 60th member, at 6: $x \ge 12 - 9 = 3$. The proposer gets her ideal, **5**.

(c) The president at 6.5 is right of the median, so rightward moves face only the filibuster pivot at 3.5. For leftward moves, the president lies between the 60th member (6) and the override pivot (7.5), so the upper end is $\max(6, \min(6.5, 7.5)) = 6.5$. New interval **$[3.5, 6.5]$**. At $q = 7$ the president accepts any $x \ge 2 \cdot 6.5 - 7 = 6$, the 60th member any $x \ge 5$; the proposer gets **6**.

**Wrong turns:** using $[x_{(41)}, x_{(67)}]$, the interval for a president on the right. In (c), keeping the override pivot at 7.5 as the upper end: a moderate president signs moves the override pivot would block.

---

**P3** *(Formal, strict.)*

(a) A move right from 9.5 hurts the player at 3; a move left hurts the player at 10. So $W(9.5) = \varnothing$. In general, for $q \in [3, 10]$ any move hurts one of the two extremes strictly, so $W(q)$ is empty. For $q > 10$, $[20 - q, q)$ is accepted by all three; for $q < 3$, $(q, 6 - q]$ is. So the unmovable set is exactly **$[3, 10]$**. The memo confuses agenda control with the power to move: the setter can only choose within $W(q)$.

(b) $q = 14$: the binding player is 10, so $W(14) = [6, 14)$. The setter takes the point nearest 3: **6**. Adding 8: absorbed (inside $[3, 10]$), the outcome stays **6**. Adding 12: now $W(14) = [10, 14)$, the outcome is **10**, and the core grows to $[3, 12]$.

**Wrong turns:** taking the median of the three ideals (6) as the unmovable point; agenda control and the veto pivots replace the median here. Thinking the player at 8 adds stability because there are now four vetoes.

</details>

## Flashback

**From Lesson [3.3](03-03-the-commons-and-common-pool-resources.md) (The commons and common-pool resources):** *(Formal (a)–(c).)* Two herders share a meadow season after season, with common discount factor $\delta$. Each season each either keeps the grazing quota (K) or exceeds it (X), and grazing is observed at the end of the season. A herder's stage payoff is 9 at (K, K), 2 if she keeps while the other exceeds, 14 if she exceeds while the other keeps, and 5 at (X, X). Their association runs *fine-then-forgive*: a herder who exceeded pays a fine $s$ to the association next season, so her payoff that season is $9 - s$, and the quota resumes; a herder who refuses to pay sends both to (X, X) forever, starting that season. An invented memo to the association, whose members discount at $\delta = \tfrac12$: "Our fine of 6 has not stopped overgrazing. Double it to 12 and the quota will hold." (a) Find the $\delta^*$ above which grim trigger sustains the quota. (b) At $\delta = \tfrac12$, show that neither $s = 6$ nor $s = 12$ sustains the quota, name the condition each fails, and show that no fine does. (c) Find every fine that sustains the quota at $\delta = \tfrac34$.

<details>
<summary>Solution</summary>

(a) Exceeding is dominant ($14 > 9$ and $5 > 2$), so the stage Nash equilibrium is (X, X): $v^N = 5$, $v^C = 9$, $v^D = 14$.

$$\delta^* = \frac{v^D - v^C}{v^D - v^N} = \frac{14 - 9}{14 - 5} = \frac{5}{9}.$$

Check at $\delta = 5/9$: conforming gives $9/(4/9) = 81/4$, deviating gives $14 + \tfrac59 \cdot 5/(4/9) = 14 + 25/4 = 81/4$.

(b) Fine-then-forgive must pass two tests.

- *Deterrence:* violating gains $v^D - v^C = 5$ now and costs $s$ next season, so it does not pay iff $\delta s \ge 5$. At $\delta = \tfrac12$: $s \ge 10$.
- *Payment:* from the fine season, paying is worth $v^C/(1-\delta) - s = 18 - s$ and refusing $v^N/(1-\delta) = 10$. She pays iff $s \le (v^C - v^N)/(1-\delta) = 8$.

At $s = 6$ she would pay but is not deterred: violating yields $14 + \tfrac12(18 - 6) = 20 > 18$, the value of conforming. At $s = 12$ the threat deters on paper but is not credible: she would refuse ($18 - 12 = 6 < 10$), so violating yields $14 + \tfrac12 \cdot 10 = 19 > 18$. Any working fine needs $s \ge 10$ and $s \le 8$, which is impossible. That is the lesson's result: a fine exists iff $\delta \ge \delta^*$, and $\tfrac12 < \tfrac59$. Raising the fine cannot fix impatience; past 8 it only turns the fine into grim trigger, which also fails here.

(c) At $\delta = \tfrac34$: $s \ge 5/\tfrac34 = 20/3 \approx 6.67$ and $s \le 4/\tfrac14 = 16$. Every $s \in [20/3,\ 16]$ works. At $s = 20/3$ she is indifferent about violating (36 either way); at $s = 16$ she is indifferent about paying (20 either way). A grid search over fines from 0 to 30 finds exactly this window, and none at $\delta = \tfrac12$.

**Wrong turns:** Treating a bigger fine as always stronger: above $(v^C - v^N)/(1-\delta)$ the violator refuses to pay, and the threat falls back to reversion. Using the sucker payoff 2 as the punishment: refusal sends *both* herders to (X, X), worth 5.

</details>

## Connections

- **Backward:** the median voter theorem of [2.1](02-01-the-downsian-spatial-model.md) assumes open pairwise votes; the setter replaces them with one take-it-or-leave-it offer, the ultimatum game of [`grad-game-theory` 3.2](../../grad-game-theory/lessons/03-02-backward-induction-subgame-perfection.md) in policy space. [3.4](03-04-constitutions-and-the-choice-of-rules.md)'s supermajority thresholds are what create the filibuster and override pivots here.
- **Forward:** [5.1](05-01-legislative-bargaining-baron-ferejohn.md) makes the setter a randomly recognized legislator whose rejected offer leads to a fresh round, and finds proposer power again; [5.2](05-02-coalition-and-government-formation.md) asks which veto players form a government.
- **Sideways:** the institutions themselves (committees, the Rules Committee, cloture, Standing Order 14) are described in [`political-institutions` 4.2](../../political-institutions/lessons/04-02-committees-and-agenda-control.md); vetoes and budget defaults in its [3.3](../../political-institutions/lessons/03-03-presidential-government.md); second chambers as veto players in its [4.1](../../political-institutions/lessons/04-01-bicameralism.md). Madison's checks are [`history-of-political-thought` 5.2](../../history-of-political-thought/lessons/05-02-the-federalist-faction-and-the-extended-republic.md). International win-sets with a ratification constraint are [`conflict-and-bargaining`](../../conflict-and-bargaining/syllabus.md)'s two-level games.
