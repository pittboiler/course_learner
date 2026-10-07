# Political Institutions · Lesson 1.3: List PR I: quotas and largest remainders

> ⏱ ~15 min · Module 1: The mechanics of electoral systems · Builds on: [1.1 Anatomy of an electoral system](01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md), [1.2 Ranked ballots: the alternative vote and STV](01-02-ranked-ballots-the-alternative-vote-and-stv.md) · Unlocks: [1.4 List PR II: divisor methods](01-04-list-pr-divisor-methods.md)

## Why this matters

From Helsinki to Madrid, legislatures are elected from party lists in districts that return several members at once. That raises [district magnitude](../reference.md#district-magnitude) $M$ above 1 and creates a problem plurality never faces: votes come in any amount, seats only in whole numbers. A party whose votes are worth 2.6 seats gets 2 or 3, and the rule for the leftover fractions decides real seats, sometimes whether a small party sits in parliament at all. This lesson builds the oldest family of such rules, quotas with largest remainders, and separates two questions every list system answers: how many seats each party wins, and which of its candidates take them.

## The idea

Put a price on a seat, in votes. Call the price the **quota**. Each party buys as many seats as its votes pay for in full. Whatever seats are still unsold go, one each, to the parties with the most change left over: the **largest remainders**.

Two prices are in common use. The **Hare quota** is the obvious one: total votes divided by seats, the price at which the votes would buy every seat exactly. The **Droop quota**, met in [1.2](01-02-ranked-ballots-the-alternative-vote-and-stv.md) as the bar for election under STV, is a little lower. A lower price sells more seats in the first round, so fewer are left for the change round. And the change round is the only one a party with less than a full quota can win. That one observation explains most of this lesson.

The Hare quota is the same quantity Thomas Hare used as his votes-per-seat price in the scheme Mill championed, the ancestor of STV ([`history-of-political-thought` 6.4](../../history-of-political-thought/lessons/06-04-mill-representative-government.md)). And Hamilton's method for sharing US House seats among states, which [`social-choice`](../../social-choice/syllabus.md) studies, is exactly Hare largest remainders with states for parties and population for votes.

## The mechanism

A district elects $M$ members. $V$ is the number of valid votes cast for lists, and party $i$ has $v_i$ of them.

1. **Set the quota.** The **[Hare quota](../reference.md#hare-quota)** and the **[Droop quota](../reference.md#droop-quota)** are

$$q_H = \frac{V}{M}$$

$$q_D = \left\lfloor \frac{V}{M+1} \right\rfloor + 1$$

where $\lfloor x \rfloor$ means $x$ rounded down. *In words:* Hare divides the votes by the seats; Droop divides by one more than the seats and adds a vote. Laws differ on details such as rounding; this course uses these forms.

2. **Hand out automatic seats.** Party $i$ gets $a_i = \lfloor v_i / q \rfloor$ seats, one for every full quota it holds.

3. **Compute remainders.** $r_i = v_i - a_i q$, the votes left after paying for the automatic seats.

4. **Award the leftover seats.** $L = M - \sum_i a_i$ seats remain. They go one each to the $L$ parties with the largest $r_i$. Under Droop, $M+1$ quotas exceed $V$, so at most $M$ seats are automatic and $L$ is never negative.

*In words:* every party pays the same price for its automatic seats, and the seats nobody could afford outright go to whoever came closest. This is the family of **[largest remainder methods](../reference.md#largest-remainder-methods)**; Hare-LR and Droop-LR differ only in step 1.

5. **Fill the seats from the list.** Steps 1–4 say how many seats a party has won. A separate rule, the list type, says which candidates take them. These are the **[closed, open and flexible lists](../reference.md#closed-open-and-flexible-lists)** (rules as of 2026):
   - **Closed:** the party fixes the order and the voter marks only a party. Spain's electoral law gives a Congress list's seats to its candidates "in the order of placement in which they appear" (Organic Law 5/1985, art. 163; the lesson's translation), and voids ballots on which names have been added, struck out or reordered (art. 96).
   - **Flexible:** the party's order stands unless enough voters mark one candidate. In Sweden's Riksdag elections the voter picks a party ballot and may mark one name; a candidate marked on at least 5% of her party's ballots in the constituency is elected ahead of list order (Swedish Election Authority).
   - **Open:** the voter must choose a candidate, and candidates' personal votes alone set the order. Finland works this way: electors vote directly for the person they want elected.

Keep three kinds of claim apart. Steps 1–5 are **mechanical**: they have right answers. That Droop-LR is harder on small parties than Hare-LR is also mechanical, in the sense of step 1: a smaller quota hands out more automatic seats, these go to parties holding full quotas, and so fewer seats reach the remainder round where parties under one quota compete. That open lists make candidates compete on personal reputation, including against their own running mates, is **empirical**: Carey and Shugart ("Incentives to cultivate a personal vote", *Electoral Studies*, 1995) ranked ballot types by this incentive, and the comparative evidence broadly fits but is uneven; [4.3](04-03-parties-organization-and-discipline.md) takes it up. Whether small parties *should* be helped is **normative**, and not argued here.

Germany allocated Bundestag list seats by Hare largest remainders (it calls the method Hare/Niemeyer) at the elections of 1987 to 2005, according to its Federal Returning Officer. Both quota methods are kinder to small parties than D'Hondt, the divisor method [1.4](01-04-list-pr-divisor-methods.md) teaches; [2.1](02-01-measuring-outcomes.md) shows that Hare-LR is the benchmark for proportionality.

**Where the rule runs out.** The formula settles seat counts given the votes and nothing else. The statute must say what counts in $V$ (blank ballots? votes for lists below a [legal threshold](../reference.md#legal-threshold), [2.2](02-02-district-magnitude-and-thresholds.md)?) and how to break a tie between equal remainders, often by lot. The formula does not say which candidates sit; that is step 5's rule. And it is not stable in the house size: adding a seat to a district can cost a party a seat it held, the Alabama paradox, which belongs to [`social-choice`](../../social-choice/syllabus.md). Finally, it cannot stop parties from gaming it. Because every list gets its own remainder, a party can sometimes gain by running as two lists (P3), and nothing in the arithmetic distinguishes a tactical split from a genuine schism.

## Votes and seats

![Horizontal bars for five invented parties, each shown twice, once cut into Hare quotas of 20,000 votes and once into Droop quotas of 17,501 votes. Under Hare, Meadow, Lantern and Compass win leftover seats and the result is 2, 2, 1, 1, 1. Under Droop, Meadow's second seat becomes automatic, Harbour and Lantern win the two leftover seats, Compass gets nothing, and the result is 3, 2, 1, 1, 0](assets/01-03-fig1.svg)

*Example 2's district. Under Droop each block is shorter, so Meadow's second block fits inside its votes and one fewer seat is left over. Compass, with no full quota under either rule, competes only in the remainder round, and that round shrank.*

## Worked examples

**Example 1 (clean): Hare-LR in Cardova's northern district.** Invented country and numbers. $M = 6$, $V = 150{,}000$, so $q_H = 25{,}000$.

| Party | Votes | $v/q_H$ | Automatic | Remainder | Seats |
|---|---|---|---|---|---|
| Harbour | 61,000 | 2.44 | 2 | 11,000 | 2 |
| Meadow | 44,000 | 1.76 | 1 | 19,000 | 2 |
| Forge | 29,000 | 1.16 | 1 | 4,000 | 1 |
| Lantern | 16,000 | 0.64 | 0 | 16,000 | 1 |

Four automatic seats leave $L = 2$; the largest remainders are Meadow's 19,000 and Lantern's 16,000. Result: 2–2–1–1. Notice the prices actually paid: Lantern's seat cost 16,000 votes, Harbour's two cost 30,500 each, because Harbour's 11,000 leftover votes bought nothing. Which two Meadow candidates sit is step 5's question, not this table's.

**Example 2 (hard): the same rule family, two quotas, a different parliament.** Cardova's southern district: $M = 7$, $V = 140{,}000$. Then $q_H = 20{,}000$ and $q_D = \lfloor 140{,}000/8 \rfloor + 1 = 17{,}501$.

| Party | Votes | Hare: auto, remainder | Hare seats | Droop: auto, remainder | Droop seats |
|---|---|---|---|---|---|
| Harbour | 50,000 | 2, 10,000 | 2 | 2, 14,998 | **3** |
| Meadow | 38,000 | 1, 18,000 | 2 | 2, 2,998 | 2 |
| Forge | 29,000 | 1, 9,000 | 1 | 1, 11,499 | 1 |
| Lantern | 12,000 | 0, 12,000 | 1 | 0, 12,000 | 1 |
| Compass | 11,000 | 0, 11,000 | 1 | 0, 11,000 | **0** |

Hare: 4 automatic seats, $L = 3$, to Meadow (18,000), Lantern (12,000) and Compass (11,000). Droop: Meadow's 38,000 now covers two quotas (35,002), so 5 seats are automatic and $L = 2$, to Harbour (14,998) and Lantern (12,000). Compass's 11,000 also trails Forge's 11,499. One seat moves from the smallest party to the largest.

This is where the rule strains. Under Hare, Compass's 11,000 votes buy a seat while Harbour's 10,000 leftover votes buy none, so Harbour's seats cost 25,000 each and Compass's cost 11,000. Defenders of Hare-LR answer that each party's seat count is its exact entitlement $v_i/q_H$ rounded up or down, never off by a whole seat, which is as close to proportional as whole seats allow ([2.1](02-01-measuring-outcomes.md)). Defenders of Droop reply that a lower quota leaves less to the luck of the remainder round. Neither allocation is an arithmetic error: the statute's choice of quota decides, and that choice is a choice about how much the leftover round should matter. Run the same votes through D'Hondt in [1.4](01-04-list-pr-divisor-methods.md) and you get 3–2–2–0–0: Lantern loses its seat too.

## Watch out

- **You might think the seat formula decides who sits in parliament, but actually it decides only how many seats each list wins.** Which candidates fill them is the list type's job. A party can gain a seat and lose its best-known member in the same count.
- **You might think the Droop quota does here what it does in STV ([1.2](01-02-ranked-ballots-the-alternative-vote-and-stv.md)), but actually in list PR it is just a lower price.** No votes transfer, and it guarantees no particular candidate anything; it only changes how many seats are automatic.
- **You might think that because Droop-LR cost Compass its seat, Droop systems must have fewer parties.** The seat transfer in a given count is mechanical. Whether voters then desert small parties and the party system shrinks is empirical, and a well-established cross-national finding is that magnitude ([2.2](02-02-district-magnitude-and-thresholds.md)) matters far more than the quota; [2.3](02-03-duvergers-law-observed.md) separates the two effects.

## One-liner

> Set a price per seat, sell whole seats, give the rest to the biggest change: the quota decides how many seats the change round has left, the list type decides who sits in them.

## Problems

**P1 (🟢) *(Formal (a)-(b) · Exegetical (c).)*** Invented numbers. Cardova's eastern district elects 5 members. Votes: Rowan 49,000, Sable 36,000, Tarn 21,000, Umber 14,000. (a) Allocate the seats by Hare largest remainders, showing the quota, automatic seats and remainders. (b) Repeat with the Droop quota. (c) Which party pays for the switch to Droop, which gains, and what about the quota's size explains it? Two sentences.

**P2 (🟡) *(Exegetical (a)-(c).)*** Diagnose. An **invented** report from an invented newspaper in Cardova; every person and party in it is fictional:

> "Harbour gained a seat in the western district, up from three to four, yet Elena Marsh, its best-known MP, is out. Marsh, whom the party moved from second to fifth on its list after she voted against the budget, was marked by name on 7% of Harbour ballots, behind only the party leader (22%) and Tomas Reed (9%), whom the party had listed sixth. Reed is in. So are the candidates listed second and third, each marked on fewer ballots than Marsh. 'The largest-remainder formula robbed her,' a campaign volunteer said."

(a) Which list type does Cardova use? Name the fact in the report that rules out each of the other two types, and say what you can infer about the size of the personal-vote bar. (b) Say why the volunteer's diagnosis is mistaken, naming the rule that decided Harbour's four seats and the rule that decided Marsh's fate. Two sentences. (c) Would Marsh have been elected under a closed list with the same order? Under an open list? One line each.

**P3 (🔴, optional) *(Formal (a) · Exegetical (b).)*** Apply to a hard case. Invented numbers. A 6-member district uses Hare largest remainders: Ash 67,000, Birch 30,000, Cedar 23,000. (a) Allocate the seats. Then Ash runs as two lists, Ash-North (51,000) and Ash-South (16,000), with the same voters; allocate again and say who gains and loses. (b) Name one rule change that would remove Ash's gain from splitting, and say where any such rule stops determining the outcome. 80 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)-(b) — strict · Exegetical (c) — strict)*

(a) $V = 120{,}000$, $M = 5$, $q_H = 24{,}000$.

| Party | Votes | Automatic | Remainder | Seats |
|---|---|---|---|---|
| Rowan | 49,000 | 2 | 1,000 | 2 |
| Sable | 36,000 | 1 | 12,000 | 1 |
| Tarn | 21,000 | 0 | 21,000 | 1 |
| Umber | 14,000 | 0 | 14,000 | 1 |

Three automatic seats leave $L = 2$: Tarn (21,000) and Umber (14,000). **Hare-LR: 2–1–1–1.**

(b) $q_D = \lfloor 120{,}000/6 \rfloor + 1 = 20{,}001$.

| Party | Votes | Automatic | Remainder | Seats |
|---|---|---|---|---|
| Rowan | 49,000 | 2 | 8,998 | 2 |
| Sable | 36,000 | 1 | 15,999 | 2 |
| Tarn | 21,000 | 1 | 999 | 1 |
| Umber | 14,000 | 0 | 14,000 | 0 |

Four automatic seats leave $L = 1$: Sable (15,999 beats Umber's 14,000). **Droop-LR: 2–2–1–0.**

**Must hit, strict:**

- (a) quota 24,000; automatic 2–1–0–0; remainders 1,000 / 12,000 / 21,000 / 14,000; seats 2–1–1–1.
- (b) quota 20,001; automatic 2–1–1–0; Sable's 15,999 takes the one leftover seat; seats 2–2–1–0.
- (c) Umber loses its seat and Sable gains one. The lower quota lets Tarn's 21,000 buy a seat outright, so only one seat reaches the remainder round, and Umber, with less than a quota, can win only there; Sable's larger remainder takes it.

**Wrong turns:** using $V/(M+1) = 20{,}000$ without the added vote (here it changes nothing in the seats, but the stated quota is wrong); ranking remainders before subtracting the automatic seats, i.e. comparing raw votes; saying Tarn loses, when Tarn keeps one seat under both.

---

**P2** *(Exegetical (a)-(c) — strict)*

**Must hit, strict (a):**

- **Flexible list.** Not closed: Reed, listed sixth, is elected ahead of the candidates listed fourth and fifth, so personal marks can override the party's order. Not open: the candidates listed second and third are in although Marsh has more marks than either, so marks alone do not set the order.
- The bar lies above 7% (Marsh did not clear it) and at or below 9% (Reed did).

**Must hit, strict (b):**

- The quota formula fixed how many seats Harbour won (four, one more than before); the list rule fixed which candidates took them. Marsh lost because the party moved her to fifth and her 7% fell short of the personal-vote bar, so list order placed four others ahead of her. Nothing in the largest-remainder count touched her.

**Must hit, strict (c):**

- Closed list: no. Positions 1–4 are elected and she is fifth.
- Open list: yes. By marks she is third (after the leader and Reed), and Harbour has four seats.

**Wrong turns:** calling it an open list because voters marked names (marks exist in flexible systems too); blaming the quota or remainder rule; answering (c) for the closed list by putting Reed in, when a closed list ignores marks entirely.

**Model answer (b):** The largest-remainder formula decided only that Harbour won four seats in the western district, and it gave the party one more than last time. Who filled them was decided by the flexible list: Reed cleared the personal-vote bar and was elected ahead of list order, the remaining three seats followed the party's order, and Marsh, placed fifth with marks below the bar, missed out.

---

**P3** *(Formal (a) — strict · Exegetical (b) — strict on the moves)*

(a) $V = 120{,}000$, $M = 6$, $q_H = 20{,}000$; splitting leaves $V$, and so the quota, unchanged.

| List | Votes | Automatic | Remainder | Seats |
|---|---|---|---|---|
| Ash | 67,000 | 3 | 7,000 | 3 |
| Birch | 30,000 | 1 | 10,000 | 2 |
| Cedar | 23,000 | 1 | 3,000 | 1 |

Five automatic, $L = 1$, to Birch: **3–2–1.**

| List | Votes | Automatic | Remainder | Seats |
|---|---|---|---|---|
| Ash-North | 51,000 | 2 | 11,000 | 3 |
| Ash-South | 16,000 | 0 | 16,000 | 1 |
| Birch | 30,000 | 1 | 10,000 | 1 |
| Cedar | 23,000 | 1 | 3,000 | 1 |

Four automatic, $L = 2$, to Ash-South (16,000) and Ash-North (11,000). **Ash rises from 3 seats to 4; Birch falls from 2 to 1.** The split gave Ash two remainders instead of one, and both beat Birch's.

**Accept:** any rule change that removes the gain in this district, plus a correct statement of where the rule stops.

**Must hit, strict (b):**

- A rule change that removes the gain. Examples: count lists of the same registered party as one list for the seat count, then share its seats between them; or switch to D'Hondt ([1.4](01-04-list-pr-divisor-methods.md)), under which splitting never gains seats (here Ash gets 4 under D'Hondt whether it splits or not).
- Where the rule stops: any anti-splitting rule must define when two lists are "the same party". The arithmetic cannot tell a tactical split from a real schism, and parties can register nominally separate organizations.

**Wrong turns:** recomputing the quota after the split (the voters and $V$ are the same); proposing the Droop quota as the fix, when Droop-LR can also reward a split in other districts; treating the split as fraud, when on paper it is two lawful lists.

**Model answer (b):** Treat lists filed by the same registered party as one list when counting automatic and remainder seats, then divide its seats among its lists. That gives Ash 67,000 votes and 3 seats again. But the rule only moves the question to registration: if Ash-South registers as a separate party, the law must decide whether it is a genuine new party or a decoy, and nothing in the vote count can settle that.

</details>

## Flashback

**From Lesson [1.1](01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md) (Anatomy of an electoral system: plurality and runoff):** *(Formal (a)-(b).)* Vellmark (invented) elects its assembly under the French National Assembly rules from 1.1: a round-one win needs an absolute majority of votes cast **and** votes equal to at least a quarter of registered voters; a candidate advances with votes equal to 12.5% of registered voters, and if only one candidate reaches that, the runner-up may also stand. (a) A candidate takes 55% of the votes cast in round one. Below what turnout (votes cast as a share of registered voters) does she still fail to win outright? Give the condition for a general share $s$ above 50% first. (b) A Vellmark district has 90,000 registered voters and 36,000 votes cast: K 19,800, L 9,000, M 5,000, N 2,200. Does K win in round one? Who may stand in round two, and which rule sends each finalist through?

<details>
<summary>Solution</summary>

(a) Let $R$ be registered voters and $t$ turnout, so $tR$ votes are cast and the candidate has $s\,tR$. With $s > 0.5$ the majority test passes automatically; the binding test is

$$s\,tR \ge \tfrac{1}{4}R \iff t \ge \frac{1}{4s}.$$

For $s = 0.55$: $t \ge 1/2.2 = 5/11 \approx 45.5\%$. **Below about 45.5% turnout, a 55% candidate is not elected in round one.**

(b) Turnout $= 36{,}000/90{,}000 = 40\%$, below the 45.5% from (a).

| Test | Bar | K (19,800) | L (9,000) | M (5,000) | N (2,200) |
|---|---|---|---|---|---|
| Majority of votes cast | more than 18,000 | yes | no | no | no |
| Quarter of registered | at least 22,500 | **no** | no | no | no |
| Advance: 12.5% of registered | at least 11,250 | yes | no | no | no |

**K is not elected in round one** despite 55% of the votes cast: the quarter-of-registered condition fails. The advancement bar of 11,250 is 31.25% of the votes cast, and only K clears it, so **K and L** stand in round two: K on the 12.5% bar, L only under the runner-up fallback.

**Wrong turns:** declaring K elected because 55% is a majority (that is the presidential reading; the Assembly rule adds the registered-voter condition); measuring the 25% and 12.5% bars against the 36,000 votes cast (9,000 and 4,500), which would wrongly elect K outright or put M through to a *triangulaire*; deciding that K, as the only candidate over the bar, is unopposed in round two.

</details>

## Connections

- **Backward:** [1.1](01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md) fixed the three dials; this lesson turns district magnitude above 1 and adds a fourth choice, the list type. The Droop quota is [1.2](01-02-ranked-ballots-the-alternative-vote-and-stv.md)'s, but here it is a price, not a bar for election with transfers.
- **Forward:** [1.4](01-04-list-pr-divisor-methods.md) replaces quotas with divisors and shows why D'Hondt is harder still on small parties; [1.5](01-05-mixed-systems-mmp-and-parallel.md) uses a list formula to top up constituency seats; [2.1](02-01-measuring-outcomes.md) measures how proportional Hare-LR is; [2.2](02-02-district-magnitude-and-thresholds.md) shows why magnitude matters more than the quota; [4.3](04-03-parties-organization-and-discipline.md) turns the list type into an incentive structure, the [personal vote](../reference.md#personal-vote).
- **Sideways:** Hare's quota and his transfer scheme as Mill defended them are [`history-of-political-thought` 6.4](../../history-of-political-thought/lessons/06-04-mill-representative-government.md). The same arithmetic as Hamilton's apportionment method, the Alabama paradox and the axioms behind it belong to [`social-choice`](../../social-choice/syllabus.md); measuring the effects of list type causally belongs to [`empirical-political-economy`](../../empirical-political-economy/syllabus.md).
