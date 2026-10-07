# Political Institutions · Lesson 1.5: Mixed systems: MMP and parallel

> ⏱ ~15 min · Module 1: The mechanics of electoral systems · Builds on: [1.1 Anatomy of an electoral system](01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md), [1.4 List PR II: divisor methods](01-04-list-pr-divisor-methods.md) · Unlocks: [2.1 Measuring outcomes](02-01-measuring-outcomes.md), [2.4 Districts and electoral reform](02-04-districts-and-electoral-reform.md)

## Why this matters

Germany, New Zealand and Japan all hand voters two votes: one for a local candidate, one for a party list. On the ballot paper they look alike. In the chamber they do not: one design makes the party vote decide almost everything, the other lets a big win in the districts carry straight into the seat totals. The difference is a single rule, whether the list seats **compensate** for the district seats, and this lesson computes both versions on the same votes.

## The idea

A mixed system runs two tiers at once. The **constituency tier** is single-member plurality, exactly as in [1.1](01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md). The **list tier** is party-list PR, usually allocated by a divisor method from [1.4](01-04-list-pr-divisor-methods.md).

Everything turns on how the two tiers are combined:

- **[Mixed-member proportional](../reference.md#mixed-member-proportional) (MMP)**: the party vote fixes each party's *total* seats. Constituency wins are an advance payment on that total, and list seats pay the balance. *In words:* winning more districts changes *who* sits for your party, not *how many* do.
- **[Parallel](../reference.md#parallel-system) (mixed-member majoritarian)**: the two tiers are counted separately and added. List seats are shared out without looking at the district results. *In words:* two elections on one day, with the totals summed.

Keep the three kinds of claim apart. That MMP's final seats track the party vote, overhang aside, is **mechanical**: it follows from the counting rule. That parallel systems give the largest party a seat bonus is also mechanical *given* a plurality tier where that party leads. Whether either design changes how many parties form, how voters split their tickets, or how governments behave is **empirical**. Whether proportionality is owed to voters is **normative**, a question for [`political-philosophy`](../../political-philosophy/syllabus.md); Mill's case for representing minorities in proportion is read in [`history-of-political-thought` 6.4](../../history-of-political-thought/lessons/06-04-mill-representative-government.md).

## The mechanism

Notation: $S$ is the house size, $c_i$ the constituency seats party $i$ wins, $e_i$ its **entitlement** (seats due on the party vote), $\ell_i$ its list seats.

**MMP**

1. **Two votes.** Each voter casts a constituency vote (plurality) and a party vote.
2. **Qualify.** Parties below the **[legal threshold](../reference.md#legal-threshold)** are dropped from the list count. As of 2026, New Zealand admits a party with 5% of the party vote *or* one electorate seat; Germany's threshold is 5% of second votes, with the exception discussed below.
3. **Entitle.** Allocate all $S$ seats among qualifying parties by the party vote. New Zealand uses the **[Sainte-Laguë method](../reference.md#sainte-lague-method)** (divisors 1, 3, 5, ...). Germany's Federal Elections Act (§5) finds a common divisor and rounds standard-wise, which is Sainte-Laguë in its divisor form ([1.4](01-04-list-pr-divisor-methods.md)).
4. **Top up.** Each party's list seats fill the gap:

$$\ell_i = e_i - c_i$$

5. **Overhang.** If $c_i > e_i$, the party has won more districts than its party vote covers. The difference is an **[overhang](../reference.md#overhang-and-balance-seats)**, and the rule must say what happens to it.

*In words:* compute the proportional answer first, then subtract what each party already won locally.

**Parallel**

1. Count the constituency tier by plurality: $c_i$ seats.
2. Allocate only the list seats $L$ by the party vote: $\ell_i$ seats.
3. Add: $s_i = c_i + \ell_i$. Nothing compensates.

Japan's House of Representatives is the standard case. As of 2026 the Public Offices Election Act fixes 465 members: 289 from single-member districts and 176 from party lists in eleven regional blocs, allocated by **[D'Hondt](../reference.md#dhondt-method)** (Articles 4 and 95-2).

**Three answers to overhang.** All three are in real use or recent memory.

- **Keep it, uncompensated.** The overhanging party keeps its extra district seats and the house grows by that many. This is New Zealand's rule (its nominal 120-seat House can exceed 120). Cost: exact proportionality.
- **Keep it and add balance seats.** Enlarge the house until every party's entitlement covers its district wins. Germany used balance seats from its 2013 election until the 2023 reform. Cost: house size, which grew well past its nominal figure.
- **[Second-vote coverage](../reference.md#second-vote-coverage).** Germany's 2023 reform fixed the Bundestag at 630 seats, with 299 constituencies. Within each Land list, the party's constituency winners are ranked by their share of the first vote, and only as many are seated as the party's second votes cover; the winners with the lowest shares go unseated. Cost: a constituency can elect a winner who never sits.

The reform was litigated. On 30 July 2024 the Federal Constitutional Court (2 BvF 1/23 and others) unanimously upheld coverage. By 7 votes to 1 it held the 5% threshold unconstitutional in its reformed version, which had dropped the old rule letting a party that won three constituencies share in list seats. Until the legislature acts, the threshold applies with that three-constituency exception restored. The 2025 federal election was the first held under these rules.

**Where the rule runs out.** Compensation assumes the *same* party contests both tiers. If a large party's supporters give their party votes to a nominally separate list while still electing its district candidates, the arithmetic sees two parties and stops compensating: a **decoy list**. No divisor can tell a decoy from a genuine ally; that is a legal and political judgment about what counts as one party. Second, coverage solves overhang by leaving districts without a seated winner, and whether that is acceptable is a constitutional question, which Germany's court answered for its own Basic Law only. Third, *empirical*: Shugart and Wattenberg's comparative volume (*Mixed-Member Electoral Systems*) treats mixed systems as a distinct family, and Ferrara, Herron and Nishikawa argue for **contamination**, with district candidacies raising a party's list vote. How large that effect is remains contested.

## Votes and seats

![Grouped bars for four parties, Red, Blue, Green and Gold. Party vote percentages are 41, 29, 18 and 12. Under MMP the 12 seats split 5, 4, 2, 1, close to the votes. Under the parallel system they split 6, 4, 1, 1: Red's bar jumps to 50 percent and Green's falls to about 8 percent](assets/01-05-fig1.svg)

*Same ballots, two counting rules. MMP lets the party vote decide the totals; parallel lets Red's district wins stand on top of its list seats.*

## Worked examples

**Example 1 (clean): Estria, 12 seats.** The invented Republic of Estria has 6 constituencies and 6 list seats, a 5% threshold, and Sainte-Laguë. Party votes (100,000 total): Red 41,000, Blue 29,000, Green 18,000, Gold 12,000. Red wins 4 constituencies, Blue 2.

*MMP.* Allocate all 12 seats on the party vote. Bold marks the 12 largest quotients.

| Party | ÷1 | ÷3 | ÷5 | ÷7 | ÷9 |
|---|---|---|---|---|---|
| Red | **41,000** | **13,667** | **8,200** | **5,857** | **4,556** |
| Blue | **29,000** | **9,667** | **5,800** | **4,143** | 3,222 |
| Green | **18,000** | **6,000** | 3,600 | 2,571 | 2,000 |
| Gold | **12,000** | 4,000 | 2,400 | 1,714 | 1,333 |

The 12th seat goes at 4,143; the next quotient, Gold's 4,000, misses. Entitlements: Red 5, Blue 4, Green 2, Gold 1. Top-up: Red $5-4=1$ list seat, Blue $4-2=2$, Green 2, Gold 1.

*Parallel.* Allocate only the 6 list seats; that is the first six quotients above (cut at Blue's 9,667): Red 2, Blue 2, Green 1, Gold 1. Add the districts: **Red 6, Blue 4, Green 1, Gold 1.**

Red's 41% becomes 42% of seats under MMP and 50% under parallel: one seat short of a majority instead of four. Green loses half its seats. On [2.1](02-01-measuring-outcomes.md)'s Gallagher index the two results score about 4.2 and 10.2. The district results did not change; only the combining rule did.

**Example 2 (hard): an overhang.** Next election, party votes: Red 33,000, Blue 31,000, Green 21,000, Gold 15,000. Red's vote is now efficiently spread and it wins **5 of the 6** constituencies; Blue wins 1.

| Party | ÷1 | ÷3 | ÷5 | ÷7 | ÷9 |
|---|---|---|---|---|---|
| Red | **33,000** | **11,000** | **6,600** | **4,714** | 3,667 |
| Blue | **31,000** | **10,333** | **6,200** | **4,429** | 3,444 |
| Green | **21,000** | **7,000** | 4,200 | 3,000 | 2,333 |
| Gold | **15,000** | **5,000** | 3,000 | 2,143 | 1,667 |

Entitlements: Red 4, Blue 4, Green 2, Gold 2. Red holds 5 districts against an entitlement of 4: an overhang of 1. Now run each rule.

- **Uncompensated (New Zealand).** Red keeps 5; Blue 4 (1 + 3 list), Green 2, Gold 2. House: **13**.
- **Balance seats (Germany before 2023, simplified).** Extend the table until Red's fifth quotient makes the cut. Seat 13 goes to Green (4,200), seat 14 to Red (3,667, ahead of Blue's 3,444). House: **14**, Red 5, Blue 4, Green 3, Gold 2. Green, not Blue, collects the balance seat.
- **Coverage (Germany since 2023).** House stays **12**. Red's five winners took 48%, 44%, 41%, 39% and 35% of their first votes; the 35% winner is not seated, and that constituency sends no constituency member. Red 4, Blue 4, Green 2, Gold 2.

Each rule protects something different: the voters' local choice, the overall proportions, or the fixed size of the house. The count cannot say which matters most; the rule-maker has to choose.

## Watch out

- **You might think MMP is "half proportional" because half its seats are list seats, but actually its *totals* are proportional** (overhang and thresholds aside). The list tier is a correction, not a sample. It is parallel systems whose results sit between plurality and PR, and where they sit depends on the ratio of tiers.
- **You might think "parallel systems favour large parties" is an empirical finding, but actually the seat bonus is mechanical** once a party leads the plurality tier, as Example 1 shows. What is *empirical* is whether that bonus also shrinks the number of parties over time, or alters what voters do; those claims belong to [2.3](02-03-duvergers-law-observed.md), with the strength of the evidence stated there.
- **You might think New Zealand's one-electorate rule and Germany's three-constituency exception are the same, but actually they differ in reach.** New Zealand's admits a party to the list count on one electorate; Germany's, restored by the 2024 judgment pending new legislation, needs three. Both let a regionally concentrated party past a national threshold.

## One-liner

> Two votes on one ballot, two very different chambers: under MMP the party vote fixes the totals and district wins only decide who fills them; under parallel the district results are added on top, and overhang is where you find out what an MMP system values most.

## Problems

**P1 (🟢) *(Formal (a)-(c) · Exegetical (d).)*** Invented numbers. A 7-seat regional assembly in Estria uses MMP with 4 constituencies, 3 list seats and Sainte-Laguë; every party clears the threshold. Party votes: Alba 32,000, Brin 30,000, Cove 23,000, Dara 15,000. Alba wins 3 constituencies, with 41%, 38% and 36% of the first vote; Brin wins 1.

(a) Find each party's entitlement, showing the quotients that decide the 7 seats. (b) Give the final seats and house size if overhang is kept uncompensated, as in New Zealand. (c) Give the final seats under Germany's 2023 second-vote coverage rule, and say which of Alba's winners is unseated. (d) In one sentence each, name what rule (b) gives up and what rule (c) gives up.

**P2 (🟡) *(Exegetical (a)-(b).)*** Find the crux. Estria's electoral commission must choose between MMP and a parallel system, both with 50% constituency seats. **Invented** commissioner A: "Every party's seat share should match its vote share." **Invented** commissioner B: "Voters should be able to hand a clear winner a working majority." (a) A colleague says the dispute is really about local constituency representation. Say in one sentence why that cannot be the crux *between these two designs*. (b) Name the trade-off they actually disagree about, and one piece of evidence that would move either commissioner. 80 words or fewer for (b).

**P3 (🔴, optional) *(Formal (a)-(b) · Exegetical (c).)*** Apply to a hard case. Invented numbers. An Estrian province elects 10 members by MMP, with 5 constituencies and 5 list seats, Sainte-Laguë, and overhang kept uncompensated. Party votes: Ash 46,000, Birch 34,000, Cedar 20,000. Ash wins 4 constituencies, Birch 1.

(a) Allocate the seats. (b) At the next election Ash registers a separate list, "Ash Forward", and its supporters give it all 46,000 party votes while still electing Ash's candidates in the same 4 constituencies; Ash itself gets no party votes. Allocate again, and give the house size. (c) In two sentences: what would Germany's 2023 coverage rule do to this tactic, and where does any counting rule stop being able to settle the case?

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)-(c) · Exegetical (d))*

(a) Sainte-Laguë quotients (bold: the 7 largest).

| Party | ÷1 | ÷3 | ÷5 |
|---|---|---|---|
| Alba | **32,000** | **10,667** | 6,400 |
| Brin | **30,000** | **10,000** | 6,000 |
| Cove | **23,000** | **7,667** | 4,600 |
| Dara | **15,000** | 5,000 | 3,000 |

The 7th seat goes to Cove at 7,667; the next quotient is Alba's 6,400. Entitlements: **Alba 2, Brin 2, Cove 2, Dara 1.**

(b) Alba won 3 districts against an entitlement of 2: overhang 1. Uncompensated: **Alba 3** (all constituency), **Brin 2** (1 constituency + 1 list), **Cove 2** (list), **Dara 1** (list). House size **8**.

(c) Coverage: Alba is covered for 2 seats, so its two strongest winners (41% and 38%) sit and **the 36% winner is unseated**. **Alba 2, Brin 2, Cove 2, Dara 1**; house stays **7**. The 36% constituency sends no constituency member.

**Must hit, strict (a)-(c):**

- Entitlements 2, 2, 2, 1 with the cut at 7,667 above 6,400.
- (b) 3, 2, 2, 1 in a house of 8.
- (c) 2, 2, 2, 1 in a house of 7; the 36% winner is the one dropped.

**Must hit, strict (d):**

- (b) gives up exact proportionality and fixed house size: Alba holds 3 of 8 seats (37.5%) on 32% of the vote.
- (c) gives up the seat of a candidate who won a plurality locally, leaving that constituency without its member.

**Wrong turns:** taking Brin's list seat away to "make room" for Alba's overhang (the uncompensated rule grows the house; it does not shrink anyone else); dropping the Alba winner from the *smallest* constituency rather than the one with the lowest first-vote *share*; allocating only the 3 list seats by Sainte-Laguë, which is the parallel method.

---

**P2** *(Exegetical (a)-(b))*

**Must hit, strict (a):**

- Both designs elect the same 50% of members from single-member constituencies, so local representation is identical between them; it would be the crux between either of them and pure list PR, not between these two.

**Must hit, strict (b):**

- The trade-off: proportional totals (MMP) against a seat bonus for the plurality leader that makes single-party majorities more likely (parallel). Equivalently, whether the district tier should be allowed to change party totals.
- Evidence: something empirical about consequences, for example how often parallel systems actually produce single-party majorities compared with MMP, or whether coalition governments under MMP are less accountable or less durable (the subject of [3.2](03-02-forming-governments-coalitions-and-minorities.md)). If A holds proportionality as a matter of principle, only a normative argument moves A; say so if you claim that.

**Wrong turns:** naming "proportionality vs local representation"; saying MMP *cannot* produce a single-party majority (it can, if one party wins a majority of the party vote); treating B's premise as a factual claim when it is a value about what elections are for.

**Model answer (b):** They disagree about whether the constituency tier should be allowed to change party totals: MMP makes seats track votes, parallel lets a plurality winner's district wins add a seat bonus that makes a working majority likelier. Cross-national evidence on how often parallel systems yield single-party majorities, and on whether those governments are more accountable than coalitions, would move B; A's premise is partly normative and moves only by argument.

---

**P3** *(Formal (a)-(b) · Exegetical (c))*

(a) Sainte-Laguë on 10 seats (bold: the 10 largest).

| Party | ÷1 | ÷3 | ÷5 | ÷7 | ÷9 |
|---|---|---|---|---|---|
| Ash | **46,000** | **15,333** | **9,200** | **6,571** | **5,111** |
| Birch | **34,000** | **11,333** | **6,800** | 4,857 | 3,778 |
| Cedar | **20,000** | **6,667** | 4,000 | 2,857 | 2,222 |

Cut at 5,111; next is Birch's 4,857. Entitlements Ash 5, Birch 3, Cedar 2. Top-up: **Ash 5** (4 + 1 list), **Birch 3** (1 + 2), **Cedar 2** (list). House 10.

(b) The list count now sees Ash Forward with 46,000 votes: the same table, so Ash Forward 5 list seats, Birch 3, Cedar 2. Ash has entitlement 0 and 4 district seats: overhang 4, kept. **Ash 4 + Ash Forward 5 = 9, Birch 3, Cedar 2; house 14.** The Ash camp goes from 50% to 64% of seats on an unchanged 46% of votes.

**Must hit, strict (a)-(b):**

- (a) 5, 3, 2 with the cut at 5,111 above 4,857.
- (b) 9 for the Ash camp, 3, 2, in a house of 14; the gain comes entirely from 4 uncompensated overhang seats.

**Must hit, strict (c):**

- Coverage: Ash's constituency winners have no second-vote coverage (Ash got no party votes), so none is seated; the camp falls back to Ash Forward's 5, and four constituencies have no seated member.
- Where it runs out: the rule counts registered lists, so whether Ash and Ash Forward are "really" one party is a legal and political judgment no divisor can make.

**Wrong turns:** giving Ash Forward fewer seats because "the votes were borrowed" (the count does not know); shrinking Birch or Cedar to absorb the overhang; saying coverage gives Ash Forward Ash's district seats.

**Model answer (c):** Under coverage, Ash's four district winners would be unseated because Ash has no second votes behind them, which wipes out the tactic's gain but leaves four constituencies unrepresented. What no counting rule can settle is whether two lists are one party in disguise; German law adds a related patch elsewhere, seating successful independent candidates outright but disregarding the second votes of their voters (Federal Elections Act §4(2) and §6(2)), and that is a drafting choice, not arithmetic.

</details>

## Flashback

**From Lesson [1.3](01-03-list-pr-quotas-and-largest-remainders.md) (List PR I: quotas and largest remainders):** *(Formal (a) · Exegetical (b).)* Reconstruct. Dunmora (invented) elects a 6-member district by largest remainders, and the published result does not say which quota was used. Votes: Ostrin 58,000, Pell 33,000, Rusk 22,000, Teague 13,000. Seats: Ostrin 3, Pell 2, Rusk 1, Teague 0. (a) Allocate the seats under Hare-LR and under Droop-LR, and say which quota produced the result. (b) Teague's (invented) leader says: "(i) The quota shifted our votes to Pell, the way surplus votes move under STV. (ii) And under the other quota Ostrin would have lost a seat too." Say what is wrong with each claim, one sentence each.

<details>
<summary>Solution</summary>

(a) $V = 126{,}000$, $M = 6$.

Hare: $q_H = 126{,}000/6 = 21{,}000$.

| Party | Votes | Automatic | Remainder | Seats |
|---|---|---|---|---|
| Ostrin | 58,000 | 2 | 16,000 | 3 |
| Pell | 33,000 | 1 | 12,000 | 1 |
| Rusk | 22,000 | 1 | 1,000 | 1 |
| Teague | 13,000 | 0 | 13,000 | 1 |

Four automatic seats leave $L = 2$: Ostrin (16,000) and Teague (13,000). **Hare-LR: 3–1–1–1.**

Droop: $q_D = \lfloor 126{,}000/7 \rfloor + 1 = 18{,}001$.

| Party | Votes | Automatic | Remainder | Seats |
|---|---|---|---|---|
| Ostrin | 58,000 | 3 | 3,997 | 3 |
| Pell | 33,000 | 1 | 14,999 | 2 |
| Rusk | 22,000 | 1 | 3,999 | 1 |
| Teague | 13,000 | 0 | 13,000 | 0 |

Five automatic seats leave $L = 1$: Pell (14,999 beats Teague's 13,000). **Droop-LR: 3–2–1–0, the published result.**

**Must hit, strict (b):**

- (i) No votes move in list PR; the Droop quota is only a lower price per seat. It made Ostrin's third seat automatic ($3 \times 18{,}001 = 54{,}003 \le 58{,}000$), so one seat instead of two reached the remainder round, and Pell's remainder beat Teague's for it.
- (ii) Ostrin wins 3 seats under both quotas; under Hare its third seat comes from the remainder round instead of automatically. The seat that changed hands went from Teague to Pell.

**Wrong turns:** taking the Droop quota as $126{,}000/7 = 18{,}000$ without the added vote (the seats do not change here, but the quota is misstated); assuming Droop must favour the *largest* party because it did in 1.3's Example 2, when here the largest party's total is unchanged and the second party gains; accepting (i) because the Droop quota also appears in STV.

**Model answer (b):** (i) Nothing was transferred: the lower Droop quota let Ostrin buy its third seat outright, which left a single seat for the change round, and Pell's 14,999 leftover votes outbid Teague's 13,000. (ii) Ostrin holds 3 seats either way, winning the third on its 16,000 remainder under Hare, so the only seat that moved is the one Teague lost to Pell.

</details>

## Connections

- **Backward:** the constituency tier is [1.1](01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md)'s plurality count; the entitlement step is [1.4](01-04-list-pr-divisor-methods.md)'s Sainte-Laguë or D'Hondt run on the whole house; party lists come from [1.3](01-03-list-pr-quotas-and-largest-remainders.md).
- **Forward:** [2.1](02-01-measuring-outcomes.md) turns Example 1's gap into a Gallagher index; [2.2](02-02-district-magnitude-and-thresholds.md) treats thresholds as a design variable; [2.4](02-04-districts-and-electoral-reform.md) tells how New Zealand moved to MMP and Japan to a parallel system; [3.2](03-02-forming-governments-coalitions-and-minorities.md) takes up what proportional chambers do to government formation.
- **Sideways:** whether seats are *owed* in proportion to votes is a normative question for [`political-philosophy`](../../political-philosophy/syllabus.md), with Mill's nineteenth-century case for minority representation in [`history-of-political-thought` 6.4](../../history-of-political-thought/lessons/06-04-mill-representative-government.md); the apportionment axioms behind divisor methods belong to [`social-choice`](../../social-choice/syllabus.md), and estimates of contamination and ticket-splitting to [`empirical-political-economy`](../../empirical-political-economy/syllabus.md).
