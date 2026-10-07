# Political Institutions · Lesson 2.1: Measuring outcomes

> ⏱ ~15 min · Module 2: What electoral systems do · Builds on: [1.3 List PR I: quotas and largest remainders](01-03-list-pr-quotas-and-largest-remainders.md), [1.4 List PR II: divisor methods](01-04-list-pr-divisor-methods.md), [1.5 Mixed systems: MMP and parallel](01-05-mixed-systems-mmp-and-parallel.md) · Unlocks: [2.2 District magnitude and thresholds](02-02-district-magnitude-and-thresholds.md), [2.3 Duverger's law, observed](02-03-duvergers-law-observed.md), [4.4 Party systems](04-04-party-systems.md)

## Why this matters

Every formula in Module 1 turned votes into seats, and none did it exactly. After any election two questions get asked: how far did the seats stray from the votes, and how many parties really matter? Without numbers they get answered with slogans: "a landslide on 39 percent", "the most fragmented parliament ever". This lesson builds the three numbers comparative politics uses, the Loosemore–Hanby index, the Gallagher index and the effective number of parties, and shows what each can and cannot see. Every claim in Module 2 about what magnitude, thresholds or plurality rule "do" is stated in these units.

## The idea

Put each party's vote share next to its seat share. The difference is the party's **gap**: positive if it is over-represented, negative if under. Both columns add to 100, so the gaps add to zero. Every point one party gains, the others lose.

**Disproportionality** summarizes the gaps. The plainest summary adds up what the over-represented parties gained: the share of seats that would have to move to make the result exactly proportional. A second summary squares the gaps before adding, so one party 12 points over counts far more than six parties each 2 points short. The two disagree exactly when the distortion is spread thin.

**Fragmentation** is a different question. Counting the parties with seats overcounts: two giants and eight one-seat parties are not a ten-party system in any sense that matters for forming a government. The effective number of parties weights parties by size and asks: how many *equal-sized* parties would be this concentrated?

## The mechanism

Everything in this section is **mechanical**: definitions, with right answers.

1. **Shares and gaps.** For party $i$, let $v_i$ be its vote share and $s_i$ its seat share, both in percent. Its gap is $d_i = s_i - v_i$. Because $\sum_i v_i = \sum_i s_i = 100$, the gaps satisfy $\sum_i d_i = 0$.

2. **The [Loosemore-Hanby index](../reference.md#loosemore-hanby-index)** (John Loosemore and Victor Hanby, *British Journal of Political Science*, 1971):

$$\mathrm{LH} = \tfrac12 \sum_i \lvert s_i - v_i \rvert .$$

*In words:* the half removes double counting, since every point gained is a point lost elsewhere. LH equals the total gain of the over-represented parties: the percentage of seats that would have to change hands to make the result exact.

3. **The [Gallagher index](../reference.md#gallagher-index)**, or least-squares index, LSq (Michael Gallagher, *Electoral Studies*, 1991):

$$\mathrm{LSq} = \sqrt{\tfrac12 \sum_i (s_i - v_i)^2}.$$

*In words:* square each gap first, so large gaps dominate and small ones barely register. Its defenders argue that LH overstates disproportionality when many small parties each fall a little short. Because the gaps sum to zero, $\mathrm{LSq} \le \mathrm{LH}$ always, with equality only when a single party's gain is a single other party's loss. Both run from 0 (exact) towards 100.

4. **The [effective number of parties](../reference.md#effective-number-of-parties)** (Markku Laakso and Rein Taagepera, *Comparative Political Studies*, 1979). With $p_i$ the shares as fractions,

$$N = \frac{1}{\sum_i p_i^2}.$$

Computed from votes it is $N_v$; from seats, $N_s$. *In words:* $k$ equal parties give exactly $N = k$; unequal parties give less, because squaring makes the big ones weigh more. Economists will recognize $\sum_i p_i^2$ as the Herfindahl–Hirschman concentration index; physicists know $N$ as an inverse participation ratio. Grigorii Golosov (*Party Politics*, 2010) proposed an alternative that scores each party against the largest one; it reports fewer effective parties than Laakso–Taagepera when one party towers over many small ones.

5. **The benchmark.** For given votes and house size, Hare [largest remainders](../reference.md#largest-remainder-methods) ([1.3](01-03-list-pr-quotas-and-largest-remainders.md)) achieves the smallest possible LH and LSq: it gives each party its exact quota, rounded with the fewest total misses. The indices score how far other formulas, small districts and thresholds push a result away from that.

**Where the rule runs out.** The indices are arithmetic on a table, and they see only the table.

- *Who gained.* An LH of 10 is the same number whether the largest party manufactured a majority or the second party gained on the first.
- *Votes never cast.* If a small party's supporters desert it because they expect it to be shut out, its vote share shrinks before the count and the index improves. A low index can be the footprint of strategic voting ([2.3](02-03-duvergers-law-observed.md)'s [psychological effect](../reference.md#mechanical-and-psychological-effects)).
- *How the table was drawn.* Seven 2-percent parties, or one row "others: 14 percent"? A national total, or district by district, where distortions in opposite directions can cancel? Someone decides what counts as a party and at what level, and that decision is not in the formula. Example 2 shows it can reverse a ranking.

The indices also make one **empirical** regularity visible: single-member plurality systems routinely score far higher than national-list PR. That is a robust cross-national pattern, and its main cause, [district magnitude](../reference.md#district-magnitude), is [2.2](02-02-district-magnitude-and-thresholds.md)'s subject. Whether disproportionality wrongs voters is **normative** and is not argued here: Mill called majority-only representation "false democracy" ([`history-of-political-thought` 6.4](../../history-of-political-thought/lessons/06-04-mill-representative-government.md)), and the equal-say argument is [`political-philosophy` 5.1](../../political-philosophy/lessons/05-01-why-democracy.md)'s.

## Votes and seats

![Grouped bar chart for five parties of an invented country. Light bars show vote percent, dark bars seat percent. Rye has 39 percent of votes and 46 of seats, gap plus 7. Tern 28 and 31, plus 3. Vale 16 and 14, minus 2. Wren 11 and 7, minus 4. Ash 6 and 2, minus 4. A legend reports Loosemore-Hanby 10.0 and Gallagher 6.86](assets/02-01-fig1.svg)

*Fennland 2025 (Example 1). The two large parties' gains, 7 and 3 points, are exactly the three small parties' losses. LH adds the gains; Gallagher squares every gap, so Rye's 7 supplies more than half of the summed squares.*

## Worked examples

**Example 1 (clean): Fennland's Assembly.** Invented numbers. Fennland elects a 200-seat Assembly in small multi-member districts.

| Party | Votes | $v_i$ | Seats | $s_i$ | $d_i$ |
|---|---|---|---|---|---|
| Rye | 780,000 | 39 | 92 | 46 | +7 |
| Tern | 560,000 | 28 | 62 | 31 | +3 |
| Vale | 320,000 | 16 | 28 | 14 | −2 |
| Wren | 220,000 | 11 | 14 | 7 | −4 |
| Ash | 120,000 | 6 | 4 | 2 | −4 |
| Total | 2,000,000 | 100 | 200 | 100 | 0 |

$$\mathrm{LH} = \tfrac12(7+3+2+4+4) = 10.$$

Rye and Tern are 10 points over together, so 20 of the 200 seats (14 from Rye, 6 from Tern) would have to move to the three small parties to make the result exact.

$$\mathrm{LSq} = \sqrt{\tfrac12(49+9+4+16+16)} = \sqrt{47} \approx 6.86.$$

$$N_v = \frac{1}{0.39^2+0.28^2+0.16^2+0.11^2+0.06^2} = \frac{1}{0.2718} \approx 3.68.$$

$$N_s = \frac{1}{0.46^2+0.31^2+0.14^2+0.07^2+0.02^2} = \frac{1}{0.3326} \approx 3.01.$$

Five parties won seats, but the Assembly is as concentrated as three equal parties, and the voters' choices looked like 3.7. The fall from $N_v$ to $N_s$ is the formula squeezing the small parties. Yet Rye, at 92 seats, is short of the 101 a majority needs: $N_s$ measures concentration, and whether anyone can govern alone is a separate check on the largest party.

**Example 2 (hard): which region is less proportional?** Invented numbers. Two Fennish regions each elect a 100-seat assembly, so seats are percentages.

- *North:* A 40 percent of votes, 52 seats; B 30, 28; C 20, 14; D 10, 6. Gaps $+12, -2, -6, -4$.
- *South:* E 35, 42; F 30, 37; G 21, 21; seven small parties at 2 percent each, no seats. Gaps $+7, +7, 0$ and seven of $-2$.

| Result | $\sum \lvert d_i \rvert$ | LH | $\sum d_i^2$ | LSq |
|---|---|---|---|---|
| North | 24 | 12 | 200 | 10.00 |
| South, seven small parties | 28 | 14 | 126 | 7.94 |
| South, one "others" row | 28 | 14 | 294 | 12.12 |

LH says South is worse: more seats would have to move. LSq says North is worse: one party is 12 points over, while South's shortfall is spread across seven small misses. Now record South's small parties as one "others" row with 14 percent and no seats, as published tables sometimes do. LH does not move; LSq jumps to 12.12 and South is worse again.

**The rule that decides** is the index's weighting: LH counts every misplaced point equally, LSq makes a large single gap count more. Neither is a mistake. Which region is "more disproportional" is fixed by the choice of index and of grouping convention, not by the votes. Gallagher's defenders say concentrated distortion is what matters; LH's defenders answer that it has the most direct reading (seats to move) and does not change when an analyst merges rows. A reported index should therefore name the index and say how small parties were grouped.

## Watch out

- **You might think LH and LSq are two estimates of one quantity, but actually they are different distances** (the sum of absolute gaps against the root of the summed squares), and they rank elections differently exactly when distortion is concentrated in one case and dispersed in the other.
- **You might think a low index shows voters got the parliament they wanted, but actually that runs a mechanical fact into an empirical claim.** The index compares seats with votes *as cast*. Whether those votes were sincere, and how many were cast strategically, is a separate empirical question ([2.3](02-03-duvergers-law-observed.md)).
- **You might think a large $N_s$ means no party can govern alone, but actually $N$ measures concentration, not majorities.** To know whether a single-party government is possible, look at the largest party's seats directly.

## One-liner

> Disproportionality is a summary of seat–vote gaps (LH adds them, Gallagher squares them, and they disagree when distortion is spread thin), fragmentation is $1/\sum p_i^2$, and none of the three sees who gained, which votes were never cast, or how the table was drawn up.

## Problems

**P1 (🟢) *(Formal (a) · Exegetical (b).)*** Invented numbers. The 100-seat council of a Fennish city:

| Party | Vote % | Seats |
|---|---|---|
| K | 42 | 52 |
| L | 31 | 33 |
| M | 17 | 12 |
| N | 10 | 3 |

(a) Compute LH, LSq, $N_v$ and $N_s$ (two decimals). (b) In one sentence, say what the LH figure means in seats.

**P2 (🟡) *(Formal (a) · Exegetical (b).)*** Diagnose. An **invented** op-ed from a Fennish newspaper, not the words of any real person, after the election to the 150-seat council of Fennland's capital, where Birch won 81 seats, Heron 51, and eight small parties 4, 3, 3, 2, 2, 2, 1 and 1:

> (i) "Ten parties won seats: this is the most fragmented council our capital has ever had." (ii) "With power split ten ways, no party can govern without a coalition." (iii) "Proportional representation always does this to us."

(a) Compute $N_s$. (b) For each of (i), (ii) and (iii), say what kind of claim it is (mechanical or empirical) and whether the seat table settles it. 100 words or fewer.

**P3 (🔴, optional) *(Formal (a) · Evaluative (b).)*** Return to P1's council. Suppose that before the election party K had split into two identical parties, K1 and K2, each winning 21 percent of the votes and 26 seats; nothing else changes. (a) Recompute LH, LSq and $N_s$. (b) LSq has fallen although every voter is represented by the same people as before. State the best case that this is a defect of the Gallagher index and the best reply its defenders would give. 100 words or fewer; any verdict.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a) · Exegetical (b))*

(a) Gaps $d_i = s_i - v_i$: K $+10$, L $+2$, M $-5$, N $-7$ (sum 0).

$$\mathrm{LH} = \tfrac12(10+2+5+7) = 12.00.$$

$$\mathrm{LSq} = \sqrt{\tfrac12(100+4+25+49)} = \sqrt{89} \approx 9.43.$$

$$N_v = \frac{1}{0.1764+0.0961+0.0289+0.0100} = \frac{1}{0.3114} \approx 3.21.$$

$$N_s = \frac{1}{0.2704+0.1089+0.0144+0.0009} = \frac{1}{0.3946} \approx 2.53.$$

**Must hit, strict (b):**

- 12 of the 100 seats (K's 10 surplus plus L's 2) would have to move to M and N to make seat shares equal vote shares.

**Wrong turns:** forgetting the half in LH (reporting 24) or in LSq (reporting $\sqrt{178} \approx 13.34$); using percentages rather than fractions in $N$, which gives a number near 0.0003.

---

**P2** *(Formal (a) · Exegetical (b))*

(a) Seat shares: Birch $81/150 = 0.54$, Heron $51/150 = 0.34$. Squares: $0.2916 + 0.1156 = 0.4072$; the eight small parties add $(16+9+9+4+4+4+1+1)/150^2 = 48/22{,}500 \approx 0.0021$. So $\sum p_i^2 \approx 0.4093$ and $N_s \approx 2.44$.

**Must hit, strict (b):**

- (i) is a mechanical count of parties with any seat. The table supports "ten parties" but not "fragmented": weighted by size the council behaves like about 2.4 equal parties, and "most ever" needs earlier councils' $N_s$, which the table lacks.
- (ii) is mechanical and false: Birch's 81 seats exceed the 76 a majority of 150 needs, so it can govern alone.
- (iii) is empirical, about what PR causes. One seat table, with no vote shares, cannot show the system is proportional or that PR produced the outcome; it needs comparison across elections or systems.

**Wrong turns:** treating $N_s \approx 2.4$ as itself refuting "fragmented" in every sense (it shows two dominant parties, not that small parties are irrelevant to anything); calling (iii) normative because it says "does this to us".

**Model answer (b):** (i) counts every party with a seat, a mechanical fact the table confirms, but an effective number of 2.4 shows seats concentrated in two parties; "most ever" needs past values. (ii) is a mechanical claim the table refutes: Birch's 81 of 150 is a majority. (iii) is an empirical causal claim about PR; a single seat table without votes cannot test it.

---

**P3** *(Formal (a) · Evaluative (b))*

(a) Gaps: K1 $+5$, K2 $+5$, L $+2$, M $-5$, N $-7$.

$$\mathrm{LH} = \tfrac12(5+5+2+5+7) = 12.00.$$

$$\mathrm{LSq} = \sqrt{\tfrac12(25+25+4+25+49)} = \sqrt{64} = 8.00.$$

$$N_s = \frac{1}{2(0.0676)+0.1089+0.0144+0.0009} = \frac{1}{0.2594} \approx 3.86.$$

**Must hit, strict (a):**

- LH 12.00 (unchanged), LSq 8.00 (down from 9.43), $N_s$ 3.86 (up from 2.53).

**Must hit, any verdict (b):**

- The case against: the same voters hold the same seats; an index that moves when one party's row is split is measuring the party list, not representation. LH, which adds absolute gaps, is unaffected by splitting a gap between two parties on the same side.
- The reply for LSq: two parties each 5 points over is genuinely less concentrated distortion than one party 10 points over; no single actor gained 10 points of seat power, and concentrated gains are what turn into majorities.
- Say where the dispute stops: which index is right depends on whether disproportionality matters as a wrong to voters (party-neutral) or through the power it hands a single party, which the arithmetic cannot settle.

**Wrong turns:** reporting that LH falls too; asserting one index is simply correct without stating the other side's reason.

**Model answer (b), one of several:** Against Gallagher: nothing about representation changed, since every voter elected exactly whom they elected before, yet the index improved because a row was split. A measure of disproportionality should be about voters, and LH, unchanged at 12, respects that. For Gallagher: the split does change the politics. One party 10 points over can convert a bonus into control; two parties 5 points over each cannot do so alone. An index that weights concentrated gains tracks the distortion that matters for power. Which is right turns on why disproportionality matters, which the formula cannot decide.

</details>

## Flashback

**From Lesson [1.4](01-04-list-pr-divisor-methods.md) (List PR II: divisor methods):** *(Formal (a) · Exegetical (b).)* Apply to a new case. Invented numbers. A 5-seat district in the invented country of Pellory has three established parties: P 43,000 votes, Q 30,000, R 17,000. A new party, S, enters, and the other parties' votes stay as they are. (a) What is the fewest votes S needs to win a seat under pure Sainte-Laguë (divisors 1, 3, 5, …), and under modified Sainte-Laguë with first divisor 1.4? Name the quotient S must beat in each case. (b) Which party gives up a seat when S breaks in? In two sentences, say why the raised first divisor multiplies S's bar by exactly 1.4 here, and what it does to the allocation among P, Q and R when S stays out.

<details>
<summary>Solution</summary>

(a) The established parties' quotients, in thousands of votes:

| Party | ÷1 | ÷1.4 | ÷3 | ÷5 |
|---|---|---|---|---|
| P | 43 | 30.71 | 14.33 | 8.6 |
| Q | 30 | 21.43 | 10 | 6 |
| R | 17 | 12.14 | 5.67 | 3.4 |

S wins a seat exactly when its first quotient is among the five largest of all quotients, that is, when it beats the fifth-largest of the others'.

- *Pure Sainte-Laguë* (÷1, ÷3, ÷5): the five largest are 43, 30, 17, 14.33 and 10. The cut-off is Q's second quotient, $30{,}000/3 = 10{,}000$. S needs $v_S/1 > 10{,}000$: **10,001 votes**.
- *Modified* (÷1.4, ÷3, ÷5): the five largest are 30.71, 21.43, 14.33, 12.14 and 10. The cut-off is still Q's 10,000. S needs $v_S/1.4 > 10{,}000$, so $v_S > 14{,}000$: **14,001 votes**.

At exactly 10,000 (or 14,000) S would tie Q's quotient, which the formula cannot break; the statute's tie rule would decide.

**Must hit, strict (b):**

- Q gives up its second seat under either rule; with S in, the result is P 2, Q 1, R 1, S 1.
- The quotient S must beat is a seated party's *later* quotient (Q's ÷3), which the first divisor does not touch, so the only quotient the change affects is S's own first one, and the bar rises by exactly that factor.
- With S out, both rules give P 2, Q 2, R 1: the raised divisor changes the order in which the seats are awarded, not who holds them. It brakes entry and is neutral among parties already seated.

**Wrong turns:** taking R's modified first quotient (12,143, the fourth-largest) as the cut-off, which gives 17,000; using D'Hondt's ÷2, which makes the cut-off Q's 15,000; forgetting to divide S's own first quotient by 1.4 and answering 10,001 both times.

**Model answer (b):** Q loses its second seat under either rule. S has to beat Q's 30,000 ÷ 3, a later quotient that the reform leaves alone, so the change bites only on S's own first quotient and the bar rises from 10,000 to 14,000 votes; with S out, both rules give P 2, Q 2, R 1, because the raised divisor brakes only a party's first seat.

</details>

## Connections

- **Backward:** Hare largest remainders from [1.3](01-03-list-pr-quotas-and-largest-remainders.md) is the formula that minimizes both indices; [1.4](01-04-list-pr-divisor-methods.md)'s divisor methods and [1.5](01-05-mixed-systems-mmp-and-parallel.md)'s compensatory top-up can now be scored by how far they move a result from it. Mill's case for representing every minority, the normative ancestor of caring about these numbers, is [`history-of-political-thought` 6.4](../../history-of-political-thought/lessons/06-04-mill-representative-government.md).
- **Forward:** [2.2](02-02-district-magnitude-and-thresholds.md) predicts disproportionality and $N_s$ from district magnitude; [2.3](02-03-duvergers-law-observed.md) reads the fall from $N_v$ to $N_s$ as the mechanical effect and the shrinking of $N_v$ itself as the psychological one; [4.4](04-04-party-systems.md) uses $N$ to classify party systems; [6.4](06-04-majoritarian-and-consensus-democracy.md) uses it again on Lijphart's map. Estimating what institutions *cause* to these numbers is [`empirical-political-economy`](../../empirical-political-economy/syllabus.md)'s job; apportionment axioms are [`social-choice`](../../social-choice/syllabus.md)'s.
- **Sideways:** the gaps $d_i$ form a signed measure on the set of parties with total mass zero, and LH is its positive part, half its total variation, in the sense of [`measure-theory` 4.3](../../measure-theory/lessons/04-03-signed-measures-decomposition.md)'s Jordan decomposition. $N$ is the reciprocal of the Herfindahl–Hirschman index economists use for market concentration.
