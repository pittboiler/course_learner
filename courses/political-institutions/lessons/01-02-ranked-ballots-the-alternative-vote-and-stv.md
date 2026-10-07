# Political Institutions · Lesson 1.2: Ranked ballots: the alternative vote and STV

> ⏱ ~15 min · Module 1: The mechanics of electoral systems · Builds on: [1.1 Anatomy of an electoral system: plurality and runoff](01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md) · Unlocks: [1.3 List PR I: quotas and largest remainders](01-03-list-pr-quotas-and-largest-remainders.md)

## Why this matters

Plurality reads only the top mark on a ballot, and a two-round system needs a second trip to the polls ([1.1](01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md)). A ranked ballot collects the whole runoff in one trip. Two counting procedures use it: the **alternative vote** in single-member seats (Australia's House of Representatives) and the **single transferable vote** in multi-member ones (Ireland's Dáil, Malta, Australia's Senate). By the end you can count both by hand and name the rule that decides each step.

## The idea

Think of a ranked ballot as a set of instructions: *give my vote to my first choice; if she is out of the race, or does not need it, pass it on down my list.*

- The **[alternative vote](../reference.md#alternative-vote)** (AV, also "instant runoff") fills one seat. Count first preferences. If no one has a majority, exclude the last-placed candidate and move each of her ballots to its next choice. Repeat until someone has a majority.
- The **[single transferable vote](../reference.md#single-transferable-vote)** (STV) fills several seats. It adds a second kind of move. A candidate who reaches a **quota** is elected, and the votes she does not need, her **surplus**, are passed on, so that her supporters' later choices still count.

STV is old. Thomas Hare's 1859 scheme, which Mill championed ([`history-of-political-thought` 6.4](../../history-of-political-thought/lessons/06-04-mill-representative-government.md)), already had a quota of votes per seat and transfers down each voter's list. Hare's quota was votes ÷ seats. Modern STV uses a smaller one, the Droop quota, for a reason step 2 shows.

Keep three kinds of claim apart in what follows. **Mechanical** claims follow from the counting rules and have right answers. **Empirical** claims are about what the designs are observed to do. **Normative** claims, about whether a design is better, are not argued here.

## The mechanism

Notation: $V$ is the number of valid ballots, $S$ the number of seats (the [district magnitude](../reference.md#district-magnitude), $M$ in [1.1](01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md)), and $t$ a candidate's current vote total.

1. **Ballot.** Voters rank candidates 1, 2, 3, … Under *full preferential* rules every box must be numbered; under *optional preferential* rules a voter may stop anywhere. As of 2026, Australia's House requires a preference for every candidate, and voting in federal elections is compulsory (Australian Electoral Commission).

2. **Quota.** The **[Droop quota](../reference.md#droop-quota)** is

$$q = \left\lfloor \frac{V}{S+1} \right\rfloor + 1 .$$

*In words:* one more than the votes divided by one more than the seats. It is the smallest whole number that $S+1$ candidates cannot all reach, since $(S+1)q > V$, whereas with one vote fewer, $(S+1)(q-1) \le V$, so $S+1$ candidates could all reach it. So the quota can never elect more people than there are seats. With $S = 1$ it is a bare majority, which makes AV simply STV with one seat. Hare's quota, $V/S$, is larger (see Watch out). A useful consequence (mechanical): if more than $k$ quotas of voters rank the same set of candidates above everyone else, at least $k$ of that set are elected, provided the set has at least $k$ members.

3. **First count.** Sort ballots by first preference. Anyone with $t \ge q$ is elected.

4. **[Surplus transfer](../reference.md#surplus-transfer).** An elected candidate's surplus is $t - q$. Every ballot in her pile moves to its next *continuing* candidate at the **transfer value**

$$\text{TV} = \frac{t - q}{t}.$$

*In words:* we cannot tell which of her ballots were the "extra" ones, so all of them move, each at the fraction that is extra. A ballot already carrying a reduced value is multiplied again.

5. **Exclusion.** If no one has reached the quota and no surplus is waiting, exclude the candidate with the fewest votes. Her ballots move to their next continuing candidate at whatever value each currently carries.

6. **Skips and exhaustion.** A transfer skips candidates already elected or excluded. A ballot with no continuing candidate left on it is an **[exhausted ballot](../reference.md#exhausted-ballots)** and leaves the count.

7. **Stop.** Stop when all seats are filled, or when the continuing candidates are no more than the seats left, in which case they are all elected, quota or not. (With one seat left and two candidates, the leader takes it.)

Real counts differ in how they move a surplus. Ireland's Dáil count moves a proportionate number of *whole* ballot papers and, once a winner's pile includes transfers, examines only the parcel she received last (Electoral Act 1992, s.121). The Australian Senate count moves *every* paper at the reduced value (a Gregory-type method, as above). The variant can decide a close seat.

Where it is used, as of 2026. Ireland's Constitution prescribes STV for the Dáil (Art. 16.2.5°) and, in the same words, for the presidency, which is one seat and so in practice AV (Art. 12.2.3°):

> "The voting shall be by secret ballot and on the system of proportional representation by means of the single transferable vote."

Dáil constituencies must return at least three members (Art. 16.2.6°), and the Electoral Reform Act 2022 (s.57) sets three, four or five. Malta's Constitution (Art. 56) also prescribes STV.

**What defenders and critics say.** *AV's defenders:* a voter can rank a minor candidate first without wasting her vote, and the winner holds a majority of the ballots still in play. *Its critics:* every seat is still winner-take-all (mechanical), so seat shares need not track vote shares. Australia's House has long been dominated by two blocs, but that is a single long-running case, not a law. *STV's defenders:* voters, not parties, define the groups that win representation, and voters can choose *among* a party's candidates. *Its critics:* candidates of the same party compete for the same voters. Ireland's heavy culture of constituency service is often blamed on STV, but this is contested (one case, with local political culture confounded; [4.3](04-03-parties-organization-and-discipline.md)). With three to five seats, proportionality is limited by magnitude ([2.2](02-02-district-magnitude-and-thresholds.md)).

Two formal properties are only pointers here. AV and STV are *non-monotonic*: in some profiles, extra first preferences can cost a candidate the seat by changing who is excluded first. That is [`social-choice`](../../social-choice/syllabus.md)'s to construct. And AV can exclude a candidate who would beat every rival head to head (a Condorcet winner, [`political-philosophy` 5.4](../../political-philosophy/lessons/05-04-does-social-choice-wound-democracy.md)).

**Where the rule runs out.** The count is fully determined by the ballots, with three exceptions. The first is ties: the Australian Senate's rules look back to the most recent count at which the tied candidates differed, and failing that draw lots. The second is what voters write. Truncated rankings exhaust, and parties hand out how-to-vote cards to steer later preferences; the rule follows whatever is written. The third is what parties do. How many candidates a party runs, and how evenly it spreads its vote among them, can win or lose a seat, and no counting rule fixes either.

## The count

![A grid of bar charts for the four counts of a three-seat STV election in Northmere, with a dashed quota line at 10,001 in each count. Count 1: Ada 12,500 is over the quota and elected; Ben 5,500, Cleo 9,000, Dara 7,000, Esme 6,000. Count 2: Ben 7,599.16, Cleo 9,000, Dara 7,000, Esme 6,399.84; Esme is excluded. Count 3: Ben 13,999 is elected; Cleo 9,000, Dara 7,000. Count 4: Cleo 10,713.55 passes the quota and is elected; Dara 7,000](assets/01-02-fig1.svg)

*Worked example 1, count by count. Red's 1.8 quotas of first preferences became two seats with Green's transfers; Blue's 1.6 became one.*

## Worked examples

**Example 1 (clean): a three-seat STV count.** Invented numbers. Northmere, a constituency in the invented country of Borelia, elects three members. Parties: Red (Ada, Ben), Blue (Cleo, Dara), Green (Esme).

| Ballots | Ranking |
|---|---|
| 10,500 | Ada > Ben |
| 2,000 | Ada > Esme > Ben |
| 5,500 | Ben > Ada > Esme |
| 9,000 | Cleo > Dara |
| 7,000 | Dara > Cleo |
| 6,000 | Esme > Ben > Cleo |

$V = 40{,}000$ and $S = 3$, so $q = \lfloor 40{,}000/4 \rfloor + 1 = 10{,}001$.

- *Count 1.* Ada has 12,500 and is elected. Her surplus is 2,499, so $\text{TV} = 2{,}499/12{,}500 = 0.19992$. Ben gets $10{,}500 \times 0.19992 = 2{,}099.16$ and Esme $2{,}000 \times 0.19992 = 399.84$.
- *Count 2.* Ben 7,599.16, Cleo 9,000, Dara 7,000, Esme 6,399.84. No one is at quota, so Esme is excluded. Her own 6,000 ballots go to Ben at full value; the 399.84 she received from Ada also go to Ben. Ben now has $7{,}599.16 + 6{,}399.84 = 13{,}999$.
- *Count 3.* Ben is elected with surplus 3,998, so $\text{TV} = 3{,}998/13{,}999 \approx 0.2856$. Only the 6,000 Esme > Ben > Cleo ballots name a continuing candidate: Cleo gets $6{,}000 \times 3{,}998/13{,}999 \approx 1{,}713.55$. The other 2,284.45 exhaust, since Ada is elected and Esme is out.
- *Count 4.* Cleo has 10,713.55 and is elected. The seats go to Ada, Ben and Cleo.

Read it by party. On first preferences Red had 45% (1.8 quotas), Blue 40% (1.6 quotas) and Green 15%. Red won two seats because Green's voters ranked Ben above any Blue candidate. **The rule that decides:** exclusion of the lowest candidate, with transfers that follow the voter's list, not her party.

**Example 2 (hard): a majority of whom?** Southfold, a single-member seat in Borelia, uses AV with *optional* preferences.

| Ballots | Ranking |
|---|---|
| 19,000 | Ruiz only |
| 14,000 | Sato > Tamm |
| 11,000 | Tamm > Sato |
| 3,000 | Ueda > Ruiz |
| 4,000 | Ueda only |

First preferences: Ruiz 19,000, Sato 14,000, Tamm 11,000, Ueda 7,000. A majority of 51,000 is 25,501; no one has it. Ueda is excluded: 3,000 ballots go to Ruiz (22,000) and 4,000 exhaust. Now 47,000 ballots are in play, and a majority needs more than 23,500. Tamm is excluded, and his 11,000 give Sato 25,000. **Sato wins with 53.2% of continuing ballots, but only 49.0% of ballots cast**, and Ruiz, who led the first count, would have won under plurality.

The rule strains on the word "majority": AV guarantees a majority only of the ballots that are still in play. And it runs out on the counterfactual. Had Borelia required full rankings, as Australia's House does, the 4,000 Ueda-only voters would have had to rank the others, and nothing in the count says how.

## Watch out

- You might think AV is a form of proportional representation because it uses transfers, but actually proportionality comes from magnitude. AV fills one seat, so it is a majority formula in the sense of 1.1. STV with $S \ge 3$ is proportional, and only roughly, to the degree its magnitude allows.
- You might think the [Hare quota](../reference.md#hare-quota) $V/S$ and the Droop quota differ by a rounding detail, but actually they differ in what they guarantee. With $V/S$, all $S$ winners can reach the quota only if not one vote ends on a loser or exhausts, so the last seat usually goes to someone short of it. $\lfloor V/(S+1) \rfloor + 1$ is the smallest quota that cannot elect $S+1$ people. List PR uses both ([1.3](01-03-list-pr-quotas-and-largest-remainders.md)).
- You might think "STV produces candidate-centred politics" is a property of the rule, but actually it is an empirical claim. The mechanical fact is only that votes transfer between candidates rather than parties. Whether that drives behaviour is observed, and in one or two countries at that.

## One-liner

> A ranked ballot is a list of instructions: exclude the weakest and pass the vote on (AV), and with several seats also pass on whatever a winner holds above the Droop quota (STV); the count is mechanical, but what voters write and how many candidates parties run are not.

## Problems

**P1 (🟢) *(Formal (a) · Exegetical (b).)*** Invented numbers. Kell, a single-member seat in Borelia, uses AV with full preferences.

| Ballots | Ranking |
|---|---|
| 4,100 | K > N > L > M |
| 3,300 | L > M > N > K |
| 2,100 | M > L > N > K |
| 1,500 | N > M > L > K |

(a) Count the election, showing each round's totals, and name the AV winner and the plurality (FPTP) winner. (b) K's campaign says it "won the most votes". In two sentences, say what the AV rule compares in its final round, and why no ballot exhausts in this count.

**P2 (🟡) *(Formal.)*** Invented numbers. A two-seat constituency in Borelia, counted by STV with the Droop quota and the whole-pile fractional transfer of this lesson.

| Ballots | Ranking |
|---|---|
| 3,000 | F > G |
| 1,000 | F > H |
| 1,200 | G > F > J |
| 1,800 | H |
| 2,000 | J > G |

Give the quota and the transfer value (exactly), then each count's totals. Say who is elected and how many votes exhaust.

**P3 (🔴, optional) *(Exegetical (a)-(b).)*** Diagnose. An **invented** news report about invented parties:

> "Borelia's Unity party took 46% of first preferences in the four-seat Eastmarch constituency yet won a single seat. Unity ran four candidates, who split its vote almost evenly. 'The surplus lottery robbed us,' a Unity organiser said. Unity's own exit poll found that half its voters gave their second preference to the rival Harbour party."

(a) What share of the vote is a Droop quota in a four-seat constituency, and how many seats would 46% guarantee Unity if every Unity voter had ranked all four Unity candidates above everyone else? One line. (b) Does a "surplus lottery" explain the result? Name the rule that decided it and where that rule stops determining the outcome. 100 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a) · Exegetical (b))*

(a) $V = 11{,}000$, so a majority is 5,501.

| Candidate | Round 1 | Round 2 | Round 3 |
|---|---|---|---|
| K | 4,100 | 4,100 | 4,100 |
| L | 3,300 | 3,300 | excluded |
| M | 2,100 | 3,600 | 6,900 |
| N | 1,500 | excluded | |

Round 1: no majority; N is excluded and its 1,500 ballots go to M (N > M). Round 2: L (3,300) is lowest; its ballots go to M (L > M). Round 3: M has 6,900 of 11,000 (62.7%). **AV winner: M. Plurality winner: K** (4,100).

**Must hit, strict (b):**

- In its final round AV compares the two remaining candidates' totals among continuing ballots (here all 11,000), not first preferences. K led only the first count.
- Full preferences mean every ballot ranks all four candidates, so each always names a continuing candidate and none can exhaust.

**Wrong turns:** sending N's ballots to K (misreading the ranking); excluding N and M together in round 1, which is wrong because M, with N's ballots, passes L.

**Model answer (b):** The final round compares M and K on all ballots still in play, and M leads 6,900 to 4,100. K had the most *first* preferences, which is what plurality counts and AV does not. Every ballot ranks all four candidates, so there is always a continuing name on it and nothing exhausts.

---

**P2** *(Formal)*

$V = 9{,}000$ and $S = 2$, so $q = \lfloor 9{,}000/3 \rfloor + 1 = 3{,}001$.

| Candidate | Count 1 | Count 2 | Count 3 |
|---|---|---|---|
| F | 4,000 (elected) | | |
| G | 1,200 | 1,949.25 | excluded |
| H | 1,800 | 2,049.75 | 2,049.75 |
| J | 2,000 | 2,000 | 3,200 (elected) |

- Count 1: F has 4,000, so F is elected with surplus 999. $\text{TV} = 999/4{,}000 = 0.24975$. G gets $3{,}000 \times 0.24975 = 749.25$; H gets $1{,}000 \times 0.24975 = 249.75$.
- Count 2: no one at quota; G (1,949.25) is lowest and is excluded. G's own 1,200 ballots skip F (already elected) and go to J at full value. The 749.25 from F's ballots (F > G) have no further preference and **exhaust**.
- Count 3: J has $2{,}000 + 1{,}200 = 3{,}200 \ge 3{,}001$ and is elected. **Elected: F and J.** Exhausted: 749.25.

**Wrong turns:** using the Hare quota ($9{,}000/2 = 4{,}500$), under which F is not elected at count 1; sending G's own ballots to F instead of skipping to J; giving all 999 surplus votes to G.

---

**P3** *(Exegetical (a)-(b))*

**Must hit, strict (a):**

- With four seats, $q = \lfloor V/5 \rfloor + 1$: just over 20% of the vote. 46% is 2.3 quotas, which guarantees **two** seats to a set of candidates that all those voters rank above everyone else.

**Must hit, strict (b):**

- No surplus arose. With the vote split almost evenly, each Unity candidate had about 11.5%, well below the 20% quota, so there was nothing to transfer, lottery or otherwise.
- The deciding rule is exclusion of the lowest candidate, with transfers that follow each voter's next preference, not her party. Unity candidates were excluded, and half their ballots leaked to Harbour.
- Where it stops: how many candidates Unity ran, how it split its vote, and how its voters ranked are party and voter choices that the count only follows.

**Wrong turns:** accepting the organiser's word "surplus" (surpluses exist only above the quota); blaming the Droop quota, which would have *guaranteed* two seats to a disciplined Unity vote.

**Model answer (b):** No. A surplus exists only once a candidate passes the quota, just over 20% here, and Unity's four candidates each had about 11.5%, so none had a surplus. What decided the seat was exclusion and transfer: as Unity candidates were excluded, their ballots went wherever each voter's next preference pointed, and half pointed to Harbour. Had all Unity voters ranked their four candidates first to fourth, 2.3 quotas would have guaranteed two seats. The rule stops at the party's nomination strategy and its voters' rankings, which the count only follows.

</details>

## Connections

- **Backward:** [1.1](01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md)'s three parts are all here: an ordinal ballot structure, a magnitude of 1 (AV) or more (STV), and a quota-and-transfer formula. AV folds 1.1's two-round runoff into one ballot. Hare's scheme in Mill ([`history-of-political-thought` 6.4](../../history-of-political-thought/lessons/06-04-mill-representative-government.md)) is STV's ancestor.
- **Forward:** the Hare and Droop quotas return in party-list PR ([1.3](01-03-list-pr-quotas-and-largest-remainders.md)). How magnitude limits STV's proportionality is [2.2](02-02-district-magnitude-and-thresholds.md). The UK's 2011 referendum on AV is in [2.4](02-04-districts-and-electoral-reform.md), and the personal vote that STV is said to foster is in [4.3](04-03-parties-organization-and-discipline.md).
- **Sideways:** monotonicity and participation failures of runoff rules are [`social-choice`](../../social-choice/syllabus.md)'s. The Condorcet cycles that any ranked count must sometimes cut through are [`political-philosophy` 5.4](../../political-philosophy/lessons/05-04-does-social-choice-wound-democracy.md)'s. Whether proportional representation is owed to voters is a normative question for [`political-philosophy`](../../political-philosophy/syllabus.md).
