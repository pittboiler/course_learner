# Political Economy · Lesson 2.1: The Downsian spatial model

> ⏱ ~15 min · Module 2: Electoral competition · Builds on: [1.1 From ballots to policy space](01-01-from-ballots-to-policy-space.md), [1.3 Rational ignorance and the swing voter's curse](01-03-rational-ignorance-and-the-swing-voters-curse.md) · Unlocks: [2.2 Multidimensional voting and chaos](02-02-multidimensional-voting-and-chaos.md), [2.3 Probabilistic voting](02-03-probabilistic-voting.md), [2.4 Valence and citizen-candidates](02-04-valence-and-citizen-candidates.md)

## Why this matters

Now the alternatives move: two candidates *choose* platforms to win votes, and the outcome is an equilibrium. The answer, that both crowd onto the median voter, is the benchmark every later lesson in this module breaks: a second dimension (2.2), noisy voters (2.3), valence and entry (2.4), more candidates (2.5). This lesson proves it with every hypothesis visible, then asks which one fails when real parties diverge.

## The idea

Harold Hotelling ("Stability in Competition," *Economic Journal*, 1929) put two sellers on a street of evenly spread customers who buy from the nearer one. Unless the first seller is at the centre, the second does best standing right next to her on the longer side. Both end at the centre. Anthony Downs (*An Economic Theory of Democracy*, 1957) relabelled the street as left–right policy, the customers as voters, the sellers as parties.

The logic is a gap argument: if I am off the median, my rival can stand between me and it and take a majority. Only the median leaves no gap.

Two refinements carry the rest of the lesson. First, what if candidates care about *policy*, not office? If everyone knows where the median voter is, nothing changes: the only way to get any policy is to win, and only the median wins. Second, if candidates are unsure where the median is, moving toward my ideal costs some probability of winning, not the whole election, and the trade-off has an interior solution. Divergence needs both.

## The model

**The game ([Downsian model](../reference.md#downsian-model)).** Voters $i \in N = \{1, \dots, n\}$ have ideal points $x_i \in \mathbb{R}$ and [Euclidean utility](../reference.md#euclidean-and-quadratic-utility) $u_i(q) = -|q - x_i|$ over the policy $q$. Two candidates $A, B$ choose platforms $q_A, q_B$ **simultaneously**; platforms are **binding** (the winner implements her platform); ideal points are **common knowledge**. Each voter votes for the platform she prefers; with two candidates that is weakly dominant. An indifferent voter splits her vote half and half. A candidate maximizes either her **vote share** $v_A$ or her **win probability** $\pi_A$: 1 if $v_A > n/2$, $\tfrac12$ if $v_A = n/2$, 0 otherwise.

Order the ideal points $x_{(1)} \le \dots \le x_{(n)}$ and define the **median interval** $M = [L, R]$ with $L = x_{(\lceil n/2 \rceil)}$, $R = x_{(\lfloor n/2 \rfloor + 1)}$. For odd $n$, $L = R = x_m$, the median ideal point; for even $n$, $M$ runs between the two middle ideal points.

**Lemma 1 (security).** A platform $p \in M$ gets at least $n/2$ votes against any $q$.

*Proof.* If $q = p$, each gets $n/2$. If $q > p$: the at least $\lceil n/2 \rceil$ voters with $x_i \le L$ satisfy $x_i \le p < q$, so each strictly prefers $p$. If $q < p$: the at least $\lceil n/2 \rceil$ voters with $x_i \ge R$ strictly prefer $p$. ∎

**Lemma 2 (outsiders lose).** If $q < L$, then $L$ beats $q$ by a strict majority; if $q > R$, $R$ does.

*Proof.* For $q < L$, the voters with $x_i \ge L$ number at least $n - \lceil n/2 \rceil + 1 = \lfloor n/2 \rfloor + 1 > n/2$, and each has $q < L \le x_i$, so prefers $L$. The other case is the mirror image. ∎

**Theorem 1 ([median voter theorem](../reference.md#median-voter-theorem), electoral form).** Under either objective, $(q_A, q_B)$ is a Nash equilibrium if and only if $q_A, q_B \in M$. For odd $n$, or a continuum of voters whose distribution has a unique median $m$, the unique equilibrium is both candidates at the median.

*In words:* two office-seekers on a line [converge](../reference.md#convergence) to the median voter, or for an even electorate to anywhere between the two middle voters.

*Proof.*

1. *Every pair in $M \times M$ is an equilibrium.* By Lemma 1 each candidate already has $n/2$. A deviator faces an opponent in $M$, who keeps at least $n/2$ (Lemma 1), so the deviator gets at most $n/2$: no gain in share, and no outright win.
2. *Nothing else is.* Suppose $q_A < L$. B could move to $L$ and win more than $n/2$ (Lemma 2), so in equilibrium B's share exceeds $n/2$ and $\pi_B = 1$. Then A has less than $n/2$ and $\pi_A = 0$, but by Lemma 1 A could move into $M$ and get $n/2$ and $\pi_A \ge \tfrac12$. Contradiction. $q_A > R$ is symmetric.
3. *Uniqueness.* For odd $n$, $M = \{x_m\}$. For a continuum with distribution $F$, Lemma 1 holds with mass $\tfrac12$, and $q < m$ wins only the voters left of $(q + m)/2$, a mass $F\big((q + m)/2\big) < \tfrac12$ when the median is unique; so $M = \{m\}$. ∎

The proof never used distances: only that a voter whose ideal point lies beyond both platforms prefers the nearer one. So the theorem holds for any single-peaked preferences ([`social-choice` 3.3](../../social-choice/lessons/03-03-single-peakedness-black-and-moulin.md); the committee version is [`grad-game-theory` 5.1](../../grad-game-theory/lessons/05-01-social-choice-impossibility.md)). Lemma 1 is a security level of a constant-sum game, as in [`grad-game-theory` 1.4](../../grad-game-theory/lessons/01-04-zero-sum-minimax-lp-duality.md). The two objectives agree here because platforms determine the winner; with noisy voters they part ([2.3](02-03-probabilistic-voting.md)).

**[Policy-motivated candidates](../reference.md#policy-motivated-candidates).** Now A and B have their own ideal points $\theta_A < \theta_B$ and care only about the policy implemented: A's payoff is $\pi_A u_A(q_A) + (1 - \pi_A) u_A(q_B)$, with $u_A$ single-peaked at $\theta_A$. Platforms are still binding. This is the Calvert–Wittman model (Donald Wittman, *Journal of Economic Theory*, 1977, and *American Political Science Review*, 1983; Randall Calvert, *American Journal of Political Science*, 1985). The statements below are textbook versions proved here, not either paper's exact hypotheses.

**Theorem 2 (convergence with a known median).** Take a continuum of voters with a known unique median $m$, and $\theta_A < m < \theta_B$. The unique equilibrium is $q_A = q_B = m$.

*Proof.*

1. *$(m, m)$ is an equilibrium.* Any $q \ne m$ loses outright to $m$, so a deviation leaves the policy at $m$.
2. *A sure outcome $p \ne m$ is not.* Say $p < m$. B moves to $m$, wins outright, and gets $m$, which she strictly prefers since $p < m < \theta_B$. The case $p > m$ is symmetric.
3. *A tie between $q_A < q_B$ is not.* A tie means the midpoint is the median, so $q_A < m < q_B$, and any $p \in (q_A, m]$ wins outright. If $u_A(q_A) > u_A(q_B)$, a $p$ just above $q_A$ gives A nearly $u_A(q_A)$ for sure, more than the coin flip $\tfrac12 u_A(q_A) + \tfrac12 u_A(q_B)$. Otherwise $p = m$ gives $u_A(m) > u_A(q_B) \ge$ the coin flip. ∎

*In words:* if everyone knows where the median voter is, ideologues behave exactly like office-seekers, because losing gives the rival everything.

**Divergence.** Let the median be uncertain, uniform on $[\mu - c, \mu + c]$, with quadratic losses $u_A(q) = -(q - \theta_A)^2$. With $q_A < q_B$, A wins iff $m < (q_A + q_B)/2$, so

$$\pi_A = \frac{(q_A + q_B)/2 - (\mu - c)}{2c}, \qquad \frac{\partial \pi_A}{\partial q_A} = \frac{1}{4c}.$$

A's first-order condition balances a higher chance of winning against a worse platform when she wins:

$$\frac{\partial \pi_A}{\partial q_A}\big[u_A(q_A) - u_A(q_B)\big] + \pi_A\, u_A'(q_A) = 0.$$

While the midpoint stays inside the support, try symmetric ideal points $\theta = \mu \mp a$ and platforms $\mu \mp s$. The stake is $(a+s)^2 - (a-s)^2 = 4as$, $\pi_A = \tfrac12$ and $u_A'(q_A) = -2(a - s)$, so $as/c = a - s$:

$$s^* = \frac{ac}{a + c}.$$

*In words:* each candidate moves from her ideal point toward the centre, but stops short, and the gap shrinks to zero as the uncertainty does. Uncertainty alone does nothing: office-seekers facing the same uncertain median still both sit at $\mu$ (each has $\pi = \tfrac12$ there, and any other platform has $\pi < \tfrac12$). Theorem 2 kills divergence without uncertainty; office motivation kills it without policy stakes.

**Where the argument is weakest.** Commitment. Every result above assumes the winner implements her platform. If promises are cheap, voters expect each winner to implement her own ideal point, so the election chooses between two fixed ideal points and nothing pulls anyone to the median. That is the citizen-candidate model of [2.4](02-04-valence-and-citizen-candidates.md), where divergence can be large and the number of candidates is itself an equilibrium object. Theorem 1 also needs one dimension and two candidates: drop the first and the median interval has no analogue ([2.2](02-02-multidimensional-voting-and-chaos.md)); drop the second and there may be no pure equilibrium at all (P3).

## Picture

![Step plot of the number of votes A gets out of seven when B sits at the median 5, as A's platform moves from 0 to 10. Votes are 2 below 1, 2.5 at 1, 3 between 1 and 5, 3.5 exactly at 5, 3 between 5 and 7, 2.5 at 7, and 2 above 7. A dashed line at 3.5 marks a tie. Green dots on the axis mark the voters' ideal points 0, 2, 3, 5, 6, 8 and 10.](assets/02-01-fig1.svg)

Against the median, every other platform loses: the wide plateau at 3 votes sits below the tie line.

## Worked examples

**Example 1 (clean): seven voters.** Ideal points 0, 2, 3, 5, 6, 8, 10, so $x_m = 5$ and Theorem 1 predicts the unique equilibrium $(5, 5)$. Fix B at 5. For $q_A < 5$, A gets the voters left of the midpoint $(q_A + 5)/2$, half a vote for anyone exactly on it:

- $q_A \in (1, 5)$: midpoint in $(3, 5)$, so voters 0, 2, 3, for **3 votes**.
- $q_A = 1$: midpoint 3, voter 3 is indifferent, **2.5**.
- $q_A < 1$: midpoint below 3, **2**.

The right side mirrors it: 3 votes on $(5, 7)$, 2.5 at 7, 2 above 7. At $q_A = 5$ the candidates tie, 3.5 each. So A's best reply to B at 5 is 5 alone, under either objective, and a brute-force search over a quarter-unit grid finds $(5, 5)$ as the only equilibrium for both objectives.

**Example 2 (the hypothesis bites): ideologues and an uncertain median.** A's ideal point is 2, B's is 8, losses are quadratic, and the median is uniform on $[3.5, 6.5]$: $\mu = 5$, $a = 3$, $c = 1.5$. Then

$$s^* = \frac{3 \times 1.5}{3 + 1.5} = 1,$$

so A runs on **4** and B on **6**, each winning with probability $\tfrac12$. A grid search confirms that A's best reply to 6 is 4, B's to 4 is 6, and that iterating best replies from the ideal points 2 and 8 lands on $(4, 6)$. A's equilibrium payoff is $-\tfrac12(4-2)^2 - \tfrac12(6-2)^2 = -10$. Running on her ideal point 2 wins only with probability $\tfrac16$ (payoff $-13.33$); moving to 5 wins with probability $\tfrac23$ but costs too much policy (payoff $-11.33$).

Now remove each ingredient. Shrink the uncertainty to $c = 0.1$ and $s^* = 3/31 \approx 0.097$; at $c = 0$ the platforms meet at 5, as Theorem 2 says. Make the candidates office-seekers with $c = 1.5$ kept, and the grid finds $(5, 5)$ as the only equilibrium.

Finally, both candidates would rather have 5 for sure (payoff $-9$) than the equilibrium coin flip between 4 and 6 (payoff $-10$). Quadratic loss makes them averse to policy risk, yet neither can stay at 5 alone: divergence is a mutual best response both sides regret.

## Watch out

- **You might think** policy-motivated candidates diverge because they care about policy. Actually, with a known median they converge exactly (Theorem 2). Divergence needs policy motivation *and* uncertainty about the median; this is the hypothesis people drop.
- **You might think** polarized platforms show that parties ignore the median voter. In Example 2 both platforms sit inside the median's possible range $[3.5, 6.5]$, well in from the ideal points 2 and 8, and they close up as that range shrinks. Partial convergence ($s^* < a$) is a response to the median, not indifference to it.
- **You might think** "two candidates" is a harmless simplification. With three vote-share-maximizing candidates on a line of uniformly spread voters there is no pure-strategy equilibrium at all (P3); [2.5](02-05-strategic-voting-and-duvergers-law.md) asks why serious candidates number two.

## One-liner

> Two committed office-seekers on a line converge to the median voter; ideologues do too unless they are also unsure where the median is, and then they stop partway.

## Problems

**P1 (🟢)** *(Formal (a)–(c).)* Six voters on $[0, 10]$ have Euclidean preferences with ideal points 1, 3, 4, 6, 8 and 9. Two candidates maximize vote share.

(a) Candidate A stands at 5. Find **every** best reply for B, and B's vote count there.
(b) Find all Nash equilibria. Is $(q_A, q_B) = (5, 3.5)$ one? If not, give A's profitable deviation.
(c) A seventh voter with ideal point 7 joins. What are the equilibria now?

**P2 (🟡)** *(Formal (a)–(b) · Exegetical (c).)* Candidate A has ideal point 1 and B has ideal point 10; both have linear losses $u(q) = -|q - \theta|$, care only about the implemented policy, and commit to platforms. The median voter's ideal point is uniform on $[3, 7]$.

(a) With $q_A < q_B$, write $\pi_A$, show that A's payoff is concave in $q_A$, and solve for the equilibrium platforms.
(b) Replace the support by $[5 - e, 5 + e]$ with $0 < e < 4$. Find the equilibrium and its limit as $e \to 0$.
(c) An invented column says: "Parties at 3 and 7 are so far apart that they plainly ignore the median voter." In two sentences, say what the model of (a) implies about this inference.

**P3 (🔴, optional)** *(Formal (a)–(b).)* Voters are uniformly distributed on $[0, 1]$; three candidates each choose a location to maximize vote share; candidates at the same location split its voters equally.

(a) Prove that there is no pure-strategy Nash equilibrium.
(b) At the profile $(\tfrac13, \tfrac13, \tfrac23)$, give each candidate's share and one profitable deviation.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(c), strict.)*

(a) **Accept:** the open interval $3 < q_B < 7$, with 3 votes.

For $q_B < 5$, B gets voters left of the midpoint $(q_B + 5)/2$. For $q_B \in (3, 5)$ the midpoint lies in $(4, 5)$: voters 1, 3, 4, so **3 votes**. At $q_B = 3$ the midpoint is 4 and voter 4 splits: 2.5. Below 3, at most 2. The right side mirrors this: 3 votes on $(5, 7)$ from voters 6, 8, 9; 2.5 at 7; at most 2 beyond. At $q_B = 5$ it is 3–3. B can never reach 4, because A at 5 lies in the median interval $[4, 6]$ and Lemma 1 guarantees A three votes. So every $q_B \in (3, 7)$ is a best reply, including points like 3.5 that lie outside $[4, 6]$.

(b) $L = x_{(3)} = 4$, $R = x_{(4)} = 6$, so by Theorem 1 the equilibria are exactly the pairs with both platforms in $[4, 6]$ (a quarter-unit grid search finds these 81 pairs and no others). $(5, 3.5)$ is not one: B is best-replying, but A is not. A at 4 against 3.5 has midpoint 3.75 and wins voters 4, 6, 8, 9, for 4 votes instead of 3 (Lemma 2: $3.5 < L$).

(c) Peaks 1, 3, 4, 6, 7, 8, 9: $n = 7$, median 6. The unique equilibrium is $(6, 6)$.

**Wrong turns:** In (a), answering $[4, 6]$, the equilibrium set, instead of the best-reply set: against a fixed rival at 5, B only needs to keep voter 4 or voter 6 on her side. In (b), thinking a best reply by one player makes a profile an equilibrium.

---

**P2** *(Formal (a)–(b) · Exegetical (c).)*

(a) For $1 \le q_A < q_B$ with midpoint in $[3, 7]$:

$$\pi_A = \frac{(q_A + q_B)/2 - 3}{4}.$$

A's payoff is $U_A = -\pi_A (q_A - 1) - (1 - \pi_A)(q_B - 1) = -(q_B - 1) + \pi_A (q_B - q_A)$. Differentiate:

$$\frac{\partial U_A}{\partial q_A} = \frac{q_B - q_A}{8} - \pi_A = \frac{6 - 2q_A}{8},$$

with second derivative $-\tfrac14 < 0$. So A's best reply is $q_A = 3$ for every $q_B \in [3, 10]$ (a grid check finds no better reply anywhere on $[0, 10]$). Symmetrically, $U_B = -(10 - q_A) + \pi_B (q_B - q_A)$ with $\pi_B = 1 - \pi_A$ gives $\partial U_B / \partial q_B = (14 - 2q_B)/8$, so $q_B = 7$. **Equilibrium $(3, 7)$**, each wins with probability $\tfrac12$; a grid search on quarter units finds no other pure equilibrium. Each candidate sits at the edge of the median's support nearest her own ideal point.

(b) The same algebra with lower edge $5 - e$ gives $q_A = 5 - e$ and $q_B = 5 + e$ (the ideal points 1 and 10 lie outside the support, so these are feasible). As $e \to 0$ the platforms converge to 5, the known-median case of Theorem 2. Best-reply iteration for $e = 1, 0.5, 0.1$ confirms $(4, 6)$, $(4.5, 5.5)$, $(4.9, 5.1)$.

**Wrong turns:** Writing A's objective as the win probability alone, which sends both to 5. Forgetting that A's policy loss applies only when A wins, which drops the $\pi_A(q_B - q_A)$ term.

**Must hit, strict (c):**

- In (a) the platforms are set by the median's distribution: they sit at its edges and move with it, so the parties are not ignoring the median voter.
- The gap comes from policy motivation combined with uncertainty about the median; with the median known, the same parties would both run at the median (Theorem 2).

**Model answer (c):** In the model the parties sit at 3 and 7 precisely because they are responding to where the median voter might be: each runs at the edge of the median's possible range, and both platforms would shift if that range shifted. Their distance reflects policy motivation together with uncertainty about the median; if the median were known, the same parties would both run on it.

---

**P3** *(Formal (a)–(b), strict.)*

(a)

1. *A lone extreme candidate moves inward.* Suppose the leftmost occupied location $x$ holds one candidate and the next occupied location is $y > x$. Her share is $(x + y)/2$, strictly increasing in $x$ for $x < y$, so moving slightly right gains. Likewise on the right.
2. So in any equilibrium the leftmost and the rightmost occupied locations each hold at least two candidates. With three candidates that forces a single location: all three at some $p$, each with share $\tfrac13$.
3. A move to $p + \varepsilon$ wins $1 - p - \varepsilon/2$, and a move to $p - \varepsilon$ wins $p - \varepsilon/2$. Since $\max(p, 1 - p) \ge \tfrac12$, one of these exceeds $\tfrac13$ for small $\varepsilon$. Contradiction. ∎

(A check over every profile on a grid of step $\tfrac{1}{24}$ finds a profitable deviation at each one.)

(b) Shares: the two at $\tfrac13$ split $[0, \tfrac12]$, so $\tfrac14$ each; the candidate at $\tfrac23$ gets $\tfrac12$. She is alone at an extreme, so she gains by moving in: at $\tfrac12$ she gets $1 - \tfrac{5}{12} = \tfrac{7}{12} > \tfrac12$.

**Wrong turns:** In (a), checking only symmetric profiles. In (b), saying no one gains because the right candidate already has the most votes: her objective is her share, not her rank.

</details>

## Flashback

**From Lesson [1.3](01-03-rational-ignorance-and-the-swing-voters-curse.md) (Rational ignorance and the swing voter's curse):** *(Formal (a)–(b).)* A referendum has no partisans. Every independent wants the outcome to match the state $\omega \in \{A, B\}$; the common prior is $\mu = \Pr(\omega = A) = \tfrac45$; each independent is informed with probability $q = \tfrac13$, independently, and informed independents vote $\omega$. You are an uninformed independent, and there are $n$ other independents whose uninformed types abstain. Majority rule, coin-flip ties.

(a) For which $n$ is abstaining a best response for you, so that "uninformed independents abstain" is an equilibrium?

(b) Compute $\Pr(\omega = A \mid \text{your A vote is pivotal})$ at $n = 3$ and at $n = 9$, and say what you do in each case.

<details>
<summary>Solution</summary>

(a) Proposition 2's condition $(2\mu - 1)(1-q) \le nq(1-\mu)$ reads $\tfrac35 \cdot \tfrac23 \le n \cdot \tfrac13 \cdot \tfrac15$, that is $\tfrac25 \le \tfrac{n}{15}$, so $\boxed{n \ge 6}$. At $n = 6$ you are exactly indifferent between voting A and abstaining (each gives a correct outcome with probability $\tfrac{697}{729}$); for $n \ge 7$ abstaining is strictly better. Voting B is worse throughout (step 3 of the proof).

(b) Let $k$ be the number of informed others, $P_0 = \Pr(k = 0)$, $P_1 = \Pr(k = 1)$. An A vote is pivotal in state A iff $k = 0$ (margin $d = 0$), and in state B iff $k \in \{0, 1\}$ ($d \in \{0, -1\}$). With $P_1/P_0 = nq/(1-q) = n/2$:

$$\Pr(A \mid \text{piv}) = \frac{\mu P_0}{\mu P_0 + (1-\mu)(P_0 + P_1)} = \frac{\mu}{\mu + (1-\mu)(1 + n/2)}.$$

- $n = 3$: $\frac{4/5}{4/5 + (1/5)(5/2)} = \frac{8}{13} \approx 0.615 > \tfrac12$, so **vote A**. Correct-outcome probabilities: vote A $\tfrac{121}{135} = 0.896$, abstain $\tfrac{23}{27} = 0.852$.
- $n = 9$: $\frac{4/5}{4/5 + (1/5)(11/2)} = \frac{8}{19} \approx 0.421 < \tfrac12$, so **abstain**, although the prior is $\tfrac45$. Abstain $0.987$, vote A $0.983$.

**Wrong turns:** Voting A at every $n$ because the prior favours A: the prior never changes, the pivotal posterior does. Dropping the state-B event $k = 1$, where your A vote turns a one-vote B lead into a tie; that leaves the posterior at $\mu = \tfrac45$ for every $n$. Answering $n > 6$ in (a): at $n = 6$ abstaining is a weak best response.

</details>

## Connections

- **Backward:** the median voter as a Condorcet winner is [`grad-game-theory` 5.1](../../grad-game-theory/lessons/05-01-social-choice-impossibility.md) and Black's theorem [`social-choice` 3.3](../../social-choice/lessons/03-03-single-peakedness-black-and-moulin.md); this lesson turns that committee result into an equilibrium of a game between candidates. [1.1](01-01-from-ballots-to-policy-space.md) supplied the Euclidean and quadratic utilities; Lemma 1 is a security level from [`grad-game-theory` 1.4](../../grad-game-theory/lessons/01-04-zero-sum-minimax-lp-duality.md).
- **Forward:** [2.2](02-02-multidimensional-voting-and-chaos.md) shows that a second dimension destroys the median interval; [2.3](02-03-probabilistic-voting.md) makes voters noisy, so that vote shares respond smoothly to platforms and an equilibrium exists even in many dimensions, where 2.2's majority core is empty; [2.4](02-04-valence-and-citizen-candidates.md) drops commitment and fixed entry; [2.5](02-05-strategic-voting-and-duvergers-law.md) asks why there are two candidates. The decisive median returns for the tax rate in [5.3](05-03-the-meltzer-richard-model.md).
- **Sideways:** Hotelling's street is the founding model of spatial competition in industrial organization, where his own price-and-location conclusion was later shown to fail with linear transport costs (d'Aspremont, Gabszewicz and Thisse, *Econometrica*, 1979). The centripetal pull of two-party competition is described in [`political-institutions` 4.4](../../political-institutions/lessons/04-04-party-systems.md); measuring actual polarization belongs to [`empirical-political-economy`](../../empirical-political-economy/syllabus.md).
