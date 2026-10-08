# Political Economy · Lesson 2.4: Valence and citizen-candidates

> ⏱ ~15 min · Module 2: Electoral competition · Builds on: [2.1 The Downsian spatial model](02-01-the-downsian-spatial-model.md), [2.3 Probabilistic voting](02-03-probabilistic-voting.md) · Unlocks: [2.5 Strategic voting and Duverger's law](02-05-strategic-voting-and-duvergers-law.md), [2.6 Electoral rules compared formally](02-06-electoral-rules-compared-formally.md)

## Why this matters

[2.1](02-01-the-downsian-spatial-model.md) made two identical office-seekers who can commit converge on the median. Real candidates differ, and nobody hands out the two places on the ballot. Give one candidate a non-policy edge and pure equilibrium vanishes or says little. Let citizens choose whether to run, unable to promise anything but their own views, and two candidates stand apart in equilibrium, with the number of candidates itself an equilibrium outcome.

## The idea

**Valence.** Suppose every voter, whatever her ideology, likes candidate A a little more: competence, name recognition, incumbency. If A copies B's platform, policy is a wash and every voter picks A. So B must move away, and then A copies again. Nobody has a resting place, and B's only lever is distance.

**Citizen-candidates.** Now drop commitment: an elected citizen does what she wants, so her platform *is* her ideal point. Running costs something; winning pays something. Two candidates near the median are each tempted to quit, since policy barely changes and quitting saves the cost. Two far apart invite a centrist to enter and win. Equilibrium separation lies between those pressures.

## The models

**Valence setup.** Voters' ideal points $x_i \in [0, 1]$ have a continuous distribution $F$ with positive density and median $x_m$. Candidates $A$ and $B$ simultaneously commit to platforms $q_A, q_B \in [0, 1]$. Voter $i$ gets $-(q_A - x_i)^2 + v$ if $A$ wins and $-(q_B - x_i)^2$ if $B$ wins ([quadratic utility](../reference.md#euclidean-and-quadratic-utility)). The [valence](../reference.md#valence) $v > 0$ is a non-policy advantage every voter values equally. Everything is common knowledge, voting is sincere, and each candidate maximizes either vote share or win probability; the two objectives give different answers.

**Lemma (shifted cutpoint).** Let $d = q_B - q_A > 0$. Voter $i$ votes $A$ iff

$$x_i < \tfrac{q_A + q_B}{2} + \tfrac{v}{2d}.$$

*In words:* valence pushes the indifferent voter into $B$'s half of the line, and the push grows as $B$ crowds $A$.

*Proof.* $-(q_A - x_i)^2 + v > -(q_B - x_i)^2 \iff d\,(q_A + q_B - 2x_i) + v > 0$; divide by $2d$. ∎

$B$ wants the cutpoint as close to $q_A$ as possible. The excess $\tfrac d2 + \tfrac{v}{2d}$ is minimized at $d = \sqrt v$, where it equals $\sqrt v$. So $B$'s best share against $q_A$ is

$$s_B^*(q_A) = \max\{\,1 - F(q_A + \sqrt v),\ F(q_A - \sqrt v)\,\}.$$

*In words:* $B$'s best is to stand $\sqrt v$ to one side of $A$ and take everyone beyond.

**Proposition 1 (vote share: no pure equilibrium).** If both candidates maximize vote share and $\sqrt v < \tfrac12$, the game has no pure-strategy Nash equilibrium.

*Proof.*

1. If $q_A = q_B$, every voter strictly prefers $A$: $B$'s share is 0.
2. Against any $q_A$, $B$ can get a positive share. Because $\sqrt v < \tfrac12$, at least one of $q_A + \sqrt v < 1$ or $q_A - \sqrt v > 0$ holds, and the corresponding term of $s_B^*$ is positive by positive density.
3. If $q_A \ne q_B$, $A$ gains by copying $q_B$ (step 1) unless it already has share 1; then $B$ has 0 and gains by step 2. If $q_A = q_B$, $B$ gains by step 2. Every profile has a profitable deviation. ∎

**Proposition 2 (win probability: degenerate equilibria).** If both maximize the probability of winning, $A$ wins against every $q_B$ iff $|q_A - x_m| < \sqrt v$. The pure equilibria are exactly the profiles with $|q_A - x_m| < \sqrt v$ and $q_B$ arbitrary.

*In words:* the favourite need only be near the median, and the underdog's platform is undetermined because nothing it does matters.

*Proof.* $B$ wins iff its share exceeds $\tfrac12$, which is possible iff $s_B^*(q_A) > \tfrac12$, i.e. $q_A + \sqrt v < x_m$ or $q_A - \sqrt v > x_m$. If $|q_A - x_m| < \sqrt v$, $A$ wins whatever $B$ does, so neither can gain. If $|q_A - x_m| \ge \sqrt v$, $B$ can win or (at equality) tie, so in equilibrium it does; then $A$ gains by moving to $x_m$, where it wins for sure. ∎

Take a uniform electorate with $v = 0.01$, so $\sqrt v = 0.1$. Against $q_A = \tfrac12$, $B$'s best replies are 0.4 and 0.6, each worth 40 percent of the vote. $A$ wins from anywhere in $(0.4, 0.6)$.

So deterministic valence either kills pure equilibrium or leaves it nearly empty. Uncertainty is the usual fix. **Aragones and Palfrey** (2002, *Journal of Economic Theory*) make the median's location uncertain; the favoured candidate wins unless the other is closer by a fixed margin. Pure equilibria generally fail, and in the symmetric mixed equilibrium the favourite takes more moderate positions than the underdog (Example 2). **Groseclose** (2001, *American Journal of Political Science*) adds policy motivation and obtains divergent equilibria, the [policy-motivated](../reference.md#policy-motivated-candidates) logic of 2.1 with an edge.

**Citizen-candidate setup** ([citizen-candidate model](../reference.md#citizen-candidate-model); Osborne and Slivinski, 1996, *Quarterly Journal of Economics*). A continuum of citizens has ideal points with continuous distribution $F$ and unique median $m$. Each simultaneously chooses whether to enter. An entrant runs at her own ideal point (no commitment), pays $c > 0$, and gets $b > 0$ if she wins; every citizen also gets $-|w - a|$, with $a$ her ideal and $w$ the winner's. Voting is sincere (nearest occupied position, split among candidates sharing it); the plurality winner takes office, ties by lottery; if nobody runs, all get $-\infty$. Equilibrium is Nash equilibrium of the entry game.

**Proposition 3 (one candidate; their Proposition 1).** A one-candidate equilibrium exists iff $b \le 2c$. If $c \le b \le 2c$ the candidate is at $m$; if $b < c$ she may be anywhere within $(c - b)/2$ of $m$.

*In words:* a clone entering for a coin-flip at office must not profit ($\tfrac b2 \le c$), and off the median a centrist's sure win must not be worth its cost.

**Proposition 4 (two candidates; their Proposition 2, symmetric case).** Let $F$ have a symmetric, single-peaked density and set $e_p = 2\,(m - F^{-1}(\tfrac13))$. Candidates at $m - \varepsilon$ and $m + \varepsilon$ form an equilibrium iff

$$\varepsilon > 0, \qquad \varepsilon \ge c - \tfrac b2, \qquad \varepsilon \le e_p,$$

with $\varepsilon = e_p$ allowed only if $e_p \le 3c - b$. No other two-candidate configuration is an equilibrium.

*In words:* two candidates sit symmetrically about the median, far enough apart that neither would rather quit and close enough that no centrist can win.

*Proof.*

1. *Symmetry.* A candidate who loses for sure gains by withdrawing: the other candidate wins either way, and she saves $c$. So each wins with probability $\tfrac12$, which needs equal vote shares, which needs positions symmetric about $m$.
2. *Nobody quits.* Staying gives the left candidate $\tfrac12 b + \tfrac12(-2\varepsilon) - c$; quitting gives $-2\varepsilon$. Stay iff $\varepsilon \ge c - \tfrac b2$.
3. *No centrist wins.* A citizen at $m$ who enters takes the voters in $(m - \tfrac\varepsilon2, m + \tfrac\varepsilon2)$. She wins outright iff that mass exceeds each side's, i.e. iff $\varepsilon > e_p$ (at $e_p$ the three shares are $\tfrac13$ each). A winner gets $b - c$ against $-\varepsilon$ from staying out, and $\varepsilon \ge c - \tfrac b2 > c - b$ makes that a gain. So $\varepsilon \le e_p$.
4. *No spoiler.* A losing entrant draws more votes from whichever candidate is nearer her, her favourite, so tipping the race only hurts her. (Their general statement has a spoiler condition that symmetric $F$ satisfies automatically.)

For the uniform on $[0,1]$, $e_p = 2(\tfrac12 - \tfrac13) = \tfrac13$. When $b \le 2c$ and $c - \tfrac b2 \le e_p$ both propositions hold: the same electorate supports one candidate or two, so the number of candidates is an equilibrium object, not a primitive. Osborne and Slivinski also find three-candidate equilibria, including a sure loser who runs only to tip the winner, and the number of candidates falls with $c$ and rises with $b$. **Besley and Coate** (1997, *Quarterly Journal of Economics*) build the same logic with a finite electorate, strategic voting and many policy dimensions; with strategic voting a centrist draws votes only if voters expect her to be viable, so step 3's entry threat can be weaker.

**Where the argument is weakest.** Proposition 1 leans on deterministic voting and common knowledge of $F$. Add the noise of [probabilistic voting](../reference.md#probabilistic-voting) (2.3) or uncertainty about the median (Aragones–Palfrey) and equilibria return, pure or mixed. Proposition 4 leans on two assumptions a critic attacks: no commitment (let candidates promise and Downsian [convergence](../reference.md#convergence) returns) and sincere voting (make it strategic and the entry threats change, as in Besley–Coate). Osborne and Slivinski themselves call the exact ties an artefact of complete information.

## Picture

![Equilibrium positions of two citizen-candidates against the entry cost c, with b equal to 0.2 and uniform voters. Shaded bands above and below the median start at the median for small c, narrow as c rises, keep an outer edge at 1/6 and 5/6, and close at c equal to 13/30. A dashed line marks the example c equal to 0.25.](assets/02-04-fig1.svg)

Each band's inner edge is the "nobody quits" constraint, which tightens as $c$ rises; the outer edge, "no centrist wins," does not move.

## Worked examples

**Example 1 (clean): citizen-candidates on a uniform electorate.** Uniform on $[0,1]$, $b = 0.2$, $c = 0.25$.

- Nobody quits: $\varepsilon \ge c - \tfrac b2 = 0.15$.
- No centrist wins: $\varepsilon \le e_p = \tfrac13$, and the endpoint is allowed because $\tfrac13 \le 3c - b = 0.55$.

So $\varepsilon \in [0.15, \tfrac13]$: left candidate in $[\tfrac16, 0.35]$, right in $[0.65, \tfrac56]$. At $\varepsilon = 0.1$, staying is worth $0.1 - 0.25 - 0.1 = -0.25$, quitting $-0.2$: each would quit. At $\varepsilon = 0.35$, a centrist at $\tfrac12$ takes 0.35 of the vote against 0.325 for each rival, wins, and gets $b - c = -0.05$ instead of $-0.35$: she enters.

Since $b \le 2c$ and $b < c$, a lone candidate anywhere in $[0.475, 0.525]$ is also an equilibrium: same voters, same $b$ and $c$, one candidate or two. A brute-force check of every citizen's entry decision on a fine grid finds exactly these configurations.

**Example 2 (the hypothesis bites): valence under uncertainty.** The median voter is equally likely to sit at 1, 2 or 3; candidates choose among those positions to maximize win probability; $A$ wins unless $B$ is strictly closer to the realized median. $B$'s win probability:

| $A$ at (row), $B$ at (column) | 1 | 2 | 3 |
|---|---|---|---|
| **1** | 0 | 2/3 | 1/3 |
| **2** | 1/3 | 0 | 1/3 |
| **3** | 1/3 | 2/3 | 0 |

Every row has a positive entry ($B$ can always win sometimes) and every column a zero ($A$ can shut $B$ out by copying), so no pure profile is stable. In this constant-sum game ([`grad-game-theory` 1.4](../../grad-game-theory/lessons/01-04-zero-sum-minimax-lp-duality.md)), try $A = (\alpha, 1 - 2\alpha, \alpha)$: $B$ gets $\tfrac{1-\alpha}{3}$ from an extreme and $\tfrac{4\alpha}{3}$ from the centre, equal at $\alpha = \tfrac15$. Likewise $B = (\beta, 1 - 2\beta, \beta)$ equalizes $A$'s rows at $\beta = \tfrac25$. So $A$ plays $(\tfrac15, \tfrac35, \tfrac15)$, $B$ plays $(\tfrac25, \tfrac15, \tfrac25)$, and $B$ wins with probability $\tfrac4{15}$. The favourite stays central three times in five; the underdog goes to an extreme four times in five. Uncertainty restores an equilibrium, and in it the disadvantaged candidate differentiates.

## Watch out

- **You might think** valence is a shift in voters' ideology toward $A$. It is not: $v$ enters every voter's utility equally and moves no ideal point, which is why copying $B$ wins every voter.
- **You might think** "valence destroys equilibrium" is a theorem about elections. It depends on the objective, the hypothesis people drop. Under vote share there is no pure equilibrium; under win probability there is a continuum of them (Proposition 2).
- **You might think** citizen-candidates diverge for 2.1's reason, policy motivation plus uncertainty. There is no uncertainty here: divergence comes from no commitment plus a cost of running, capped by the entry threat.

## One-liner

> A non-policy edge makes the favourite copy and the underdog flee, so pure equilibrium dies unless uncertainty smooths it; candidates who cannot commit settle at a separation wide enough that neither would quit and narrow enough that no centrist can win.

## Problems

**P1 (🟢)** *(Formal (a)–(b).)* Five voters have ideal points 0, 2, 3, 5 and 8 and Euclidean utility $-|q - x_i|$. Candidate $A$ has valence $\tfrac32$: a voter votes $B$ iff $|x_i - q_A| - |x_i - q_B| > \tfrac32$, and $A$ otherwise. Platforms are integers from 0 to 8, chosen simultaneously.

(a) If both maximize vote count, show that no pure-strategy equilibrium exists.
(b) If both maximize the probability of winning (majority of five), find every $q_A$ that beats every $q_B$, and describe all pure equilibria.

**P2 (🟡)** *(Formal.)* Citizens are uniform on $[0, 12]$ in the Osborne–Slivinski model with plurality rule, $b = 4$ and $c = 3$.

(a) Find every $\varepsilon$ for which candidates at $6 - \varepsilon$ and $6 + \varepsilon$ form an equilibrium, and the resulting positions.
(b) At the largest such $\varepsilon$, show that the citizen at 6 prefers to stay out.
(c) Find every one-candidate equilibrium.

**P3 (🔴, optional)** *(Exegetical.)* An invented editorial: "Our district's two candidates stand at 3 and 7 on a ten-point scale. Downs proved that competition drives both candidates to the median, so this gap shows the system is broken. Halve the filing fee and centrists will flood in until the candidates converge." In 120 words or fewer: name the model the editorial relies on and the assumption it treats as fixed; say what the citizen-candidate model says about the gap; and say what that model predicts a lower filing fee does.

<details>
<summary>Solutions</summary>

**P1** *(Formal, strict.)*

(a) Since $|x_i - q_A| - |x_i - q_B|$ is an integer, no voter is ever indifferent, and $B$ wins voter $i$ iff the gap is at least 2.

1. If $q_A = q_B$, every gap is 0 and $A$ gets all five votes.
2. Against any $q_A$, one of the extreme voters (0 or 8) is at least 4 from $q_A$. $B$ placed on that voter wins her (gap at least 4). So $B$ can always get at least one vote.
3. If $q_A \ne q_B$, $A$ can copy $q_B$ and get five. So in equilibrium $A$ has five and $B$ none, which step 2 says $B$ can improve.

Every one of the 81 profiles has a profitable deviation (checked exhaustively).

(b) $A$ wins iff $B$ gets at most 2 votes. If $q_B > q_A$, every voter at or left of $q_A$ is now farther from $B$, so only voters right of $q_A$ can switch; symmetrically for $q_B < q_A$. So $B$'s switchers all lie on one side of $q_A$.

- $q_A = 3$: each side has two voters (0, 2 and 5, 8), so $B$ gets at most 2. Unbeatable.
- $q_A = 2$: rightward, voter 3 has gap at most $|3 - 2| = 1$, so only 5 and 8 can switch; leftward, only 0. At most 2. Unbeatable.
- $q_A = 4$: rightward, only 5 and 8; leftward, voter 3's gap is at most 1, so only 0 and 2. At most 2. Unbeatable.
- $q_A = 1$: $q_B = 3$ wins 3, 5, 8 (gaps 2, 2, 2). $q_A = 5$: $q_B = 3$ wins 0, 2, 3 (gaps 2, 2, 2). Positions 0, 6, 7, 8 are beaten too (the script finds a winning $q_B$ for each).

Unbeatable set: $\{2, 3, 4\}$. The pure equilibria are all 27 profiles with $q_A \in \{2, 3, 4\}$ and any $q_B$: $A$ wins for sure, and $B$ cannot change that.

**Wrong turns:** Answering (b) with "only the median, 3." Valence lets $A$ stray one step. Claiming in (a) that $B$'s best response does not exist: on this grid it always does (against $q_A = 3$, $q_B = 5$ gets two votes); the nonexistence comes from the copy-and-flee cycle, not from open sets.

---

**P2** *(Formal, strict.)*

(a) Median $m = 6$; $e_p = 2(6 - 4) = 4$, since $F^{-1}(\tfrac13) = 4$.

- Nobody quits: $\varepsilon \ge c - \tfrac b2 = 3 - 2 = 1$. (At $\varepsilon = \tfrac12$, staying is worth $2 - 3 - \tfrac12 = -\tfrac32$, quitting $-1$.)
- No centrist wins: $\varepsilon \le 4$; the endpoint is allowed because $4 \le 3c - b = 5$.
- Spoilers never gain (symmetric $F$).

So $\varepsilon \in [1, 4]$: left candidate in $[2, 5]$, right in $[7, 10]$. A brute-force check over $\varepsilon$ in steps of $\tfrac18$ confirms exactly this range.

(b) At $\varepsilon = 4$ (candidates at 2 and 10), a centrist at 6 takes $(4, 8)$, a third of the vote, and so does each rival: a three-way tie. Entering gives $\tfrac13 \cdot 4 - 3 + \tfrac23(-4) = -\tfrac{13}{3}$; staying out gives $-4$. She loses $\tfrac13$ by entering. (A citizen at 5 would draw votes from $(3.5, 7.5)$ and let the candidate at 10 win, which is worse for her.)

(c) $b = 4 \le 2c = 6$, so one exists; $c \le b$, so the candidate must be at 6. Check: a second citizen at 6 entering gets $\tfrac b2 - c = -1$. A lone candidate at 6.5 fails, because the citizen at 6 enters, wins, and gets $b - c = 1$ instead of $-\tfrac12$.

**Wrong turns:** Using $\varepsilon \ge c - b$ (forgetting that a quitter still gets her rival's policy, at distance $2\varepsilon$). Taking $e_p = L/2$ or $L/4$ instead of computing where the centrist's share reaches one third.

---

**P3** *(Exegetical, strict.)*

**Must hit, strict:**

- The editorial uses Downsian convergence ([2.1](02-01-the-downsian-spatial-model.md)), which fixes two candidates exogenously and lets them commit to any platform.
- In the citizen-candidate model, candidates cannot commit and entry is chosen. Distinct positions symmetric about the median are an equilibrium: if the median is 5, half-separation 2 qualifies whenever it lies between $c - \tfrac b2$ and $e_p$. The gap is not evidence of failure.
- A lower fee loosens the lower bound on separation (closer pairs become possible) but does not move $e_p$, so it does not force convergence. Pushing $c$ below $\tfrac b2$ removes one-candidate equilibria, and the number of candidates tends to rise as $c$ falls.

**Wrong turns:** Saying a lower fee makes centrists enter and win: a centrist wins only if separation exceeds $e_p$, which the fee does not change.

**Model answer:** The editorial assumes the Downsian model, with two candidates given and free to commit to any platform. Citizen-candidate models make entry a choice and platforms equal to candidates' own views. Then two candidates symmetric about the median, far enough apart that neither would rather quit and close enough that no centrist could win, are an equilibrium, so a gap is not a malfunction. Cutting the fee relaxes only the "nobody quits" bound: closer pairs become possible, not required, and the centrist's entry threat is unchanged. A lower fee instead tends to raise the number of candidates.

</details>

## Flashback

**From Lesson [2.2](02-02-multidimensional-voting-and-chaos.md) (Multidimensional voting and chaos):** *(Formal (a)–(b) · Exegetical (c).)* An invented memo to a five-member school board that sets two budget lines: "If any budget can survive every majority challenge, it is the average of the members' ideal budgets. The board should adopt the average." The members have Euclidean preferences with ideal points $(3,2)$, $(1,1)$, $(7,4)$, $(3,5)$ and $(3,0)$. (a) Show that no budget beats $c = (3,2)$ by majority. (b) Compute the average of the ideal points and exhibit a budget that beats it, with squared distances. (c) The member at $(7,4)$ moves her ideal to $(11,6)$. In two sentences: what happens to the unbeaten budget and to the average, and what does the memo get wrong?

<details>
<summary>Solution</summary>

(a) Relative to $c$, the members at $(1,1)$ and $(7,4)$ sit at $(-2,-1)$ and $(4,2)$: opposite rays. The members at $(3,5)$ and $(3,0)$ sit at $(0,3)$ and $(0,-2)$: opposite rays. One member is at $c$ and $n = 5$ is odd, so Plott's Corollary puts $c$ in the core. Directly by Theorem 1: any line through $c$ has at most one member of each pair strictly on a given side, and the member at $c$ is on neither side, so at most $2 < \tfrac52$ members lie strictly on one side. No budget beats $c$. (A grid search finds no budget that beats $c$ and no other unbeaten budget.)

(b) The average is $\big(\tfrac{3+1+7+3+3}{5}, \tfrac{2+1+4+5+0}{5}\big) = (3.4, 2.4)$. Squared distances to $(3,2)$ / to $(3.4, 2.4)$:

- member at $(3,2)$: 0 / 0.32
- member at $(1,1)$: 5 / 7.72
- member at $(7,4)$: 20 / 15.52
- member at $(3,5)$: 9 / 6.92
- member at $(3,0)$: 4 / 5.92

Three members prefer $(3,2)$: **it beats the average 3–2.** In Theorem 1's terms, the vertical line $q_1 = 3.4$ through the average has four members strictly to its left.

**Wrong turns:** Citing Proposition 1 to conclude that no budget is unbeaten: it is about three non-collinear voters, and with five, Plott's pairing gives a core. Thinking each pair must sit at equal distances from $c$: opposite rays suffice, and here $(1,1)$ is $\sqrt5$ away while $(7,4)$ is $\sqrt{20}$ away.

**Must hit, strict (c):**

- $(11,6) - (3,2) = (8,4)$ lies on the same ray as $(4,2)$, so the pairing survives and the core stays at $(3,2)$. The average moves to $(4.2, 2.8)$, and $(3,2)$ still beats it 3–2.
- The core depends only on which side of each line through it the members sit, not on how far away they are. It is a median in every direction, which a distance-weighted average generally is not.

**Model answer (c):** The unbeaten budget stays at $(3,2)$, because the moved member is still on the ray opposite $(1,1)$, while the average drifts to $(4.2, 2.8)$ and still loses 3–2. The memo confuses a mean with a median: a majority-proof budget, when one exists, must leave no strict majority on either side of any line through it, which depends on the members' directions from it, not their distances.

</details>

## Connections

- **Backward:** [2.1](02-01-the-downsian-spatial-model.md) showed divergence needs policy motivation plus uncertainty; this lesson adds two more routes, valence asymmetry and endogenous entry without commitment. [2.3](02-03-probabilistic-voting.md)'s smooth vote shares are the noise that rescues equilibrium under valence. Mixed equilibria of constant-sum games are [`grad-game-theory` 1.4](../../grad-game-theory/lessons/01-04-zero-sum-minimax-lp-duality.md)'s.
- **Forward:** [2.5](02-05-strategic-voting-and-duvergers-law.md) replaces sincere with strategic voting, which is exactly the Besley–Coate step, and asks why plurality settles on two candidates. Osborne and Slivinski also show two-candidate elections are more likely under plurality than under a runoff, a comparison [2.6](02-06-electoral-rules-compared-formally.md) generalizes. Choosing candidates on a non-policy quality returns as selection in [4.1](04-01-elections-as-accountability.md).
- **Sideways:** plurality and runoff rules are described in [`political-institutions` 1.1](../../political-institutions/lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md), and the observed two-party regularity in [2.3](../../political-institutions/lessons/02-03-duvergers-law-observed.md). Valence-plus-copying is Bertrand with a quality edge: the high-quality firm matches the rival's price and takes the market, so the rival differentiates.
