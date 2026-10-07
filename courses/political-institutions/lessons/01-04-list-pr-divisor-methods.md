# Political Institutions · Lesson 1.4: List PR II: divisor methods

> ⏱ ~15 min · Module 1: The mechanics of electoral systems · Builds on: [1.3 List PR I: quotas and largest remainders](01-03-list-pr-quotas-and-largest-remainders.md) · Unlocks: [1.5 Mixed systems: MMP and parallel](01-05-mixed-systems-mmp-and-parallel.md), [2.1 Measuring outcomes](02-01-measuring-outcomes.md), [2.2 District magnitude and thresholds](02-02-district-magnitude-and-thresholds.md)

## Why this matters

[1.3](01-03-list-pr-quotas-and-largest-remainders.md) handed out seats by a quota and then argued over the leftovers. Most list-PR countries never produce leftovers. They use a **[divisor method](../reference.md#divisor-methods)**, which awards seats one at a time to whichever party has the strongest claim per seat. Spain, the Netherlands and Israel use D'Hondt's version; Norway and Sweden use a modified Sainte-Laguë. The two main methods differ only in the list of numbers you divide by, and that list decides whether the formula leans toward big parties. This lesson computes both and shows where the lean comes from.

## The idea

Run an auction for seats in which each party bids its votes per seat. The next seat goes to the party that, after receiving it, would still have the most votes standing behind each of its seats. A party with 38,000 votes and no seats bids 38,000. Once it holds one seat, its bid for a second is 38,000 ÷ 2 = 19,000, because two seats would share those votes. Repeat until the seats run out. That is **D'Hondt**: divide each party's votes by 1, 2, 3, … and give the seats to the largest quotients.

**Sainte-Laguë** runs the same auction with divisors 1, 3, 5, 7, …. The odd numbers look arbitrary until you see what both methods secretly do. Each finds a single "price" per seat, divides every party's votes by it, and rounds. D'Hondt rounds every party *down*; Sainte-Laguë rounds to the *nearest* whole seat. Rounding down shaves a fraction of a seat off everyone. The price then drops until those seats are handed back, and the big parties collect most of them. Rounding to the nearest seat has no such leak.

## The mechanism

Notation: party $i$ has $v_i$ votes; the district elects $M$ seats (its [district magnitude](../reference.md#district-magnitude)); $V = \sum_i v_i$; party $i$'s vote share is $p_i = v_i/V$ and its **entitlement**, its exactly proportional seat count, is $e_i = M p_i$ (the $v_i/q_H$ of [1.3](01-03-list-pr-quotas-and-largest-remainders.md)); $s_i$ is the seats it wins.

1. **Build the quotient table.** For each party, write $v_i/d_1,\ v_i/d_2,\ \dots$, where $d_1, d_2, \dots$ is the method's divisor sequence.
2. **Award the $M$ seats to the $M$ largest quotients**, all parties pooled. A party's $k$-th seat is won by its $k$-th quotient.
3. **Choose the divisors.** The [D'Hondt method](../reference.md#dhondt-method) uses $1, 2, 3, \dots$; the [Sainte-Laguë method](../reference.md#sainte-lague-method) uses $1, 3, 5, \dots$. [Modified Sainte-Laguë](../reference.md#modified-sainte-lague) raises only the first divisor: Norway's Election Act of 2023 sets 1.4, and Sweden's Elections Act sets 1.2 (by a 2014 amendment), then $3, 5, 7, \dots$ as usual. *In words:* only a party's first seat gets harder to win.
4. **One price, then round.** Pick any number $\lambda$ above the $(M{+}1)$-th largest D'Hondt quotient and no higher than the $M$-th. Then every party's D'Hondt seat count is $s_i = \lfloor v_i/\lambda \rfloor$, its votes divided by the price and rounded down, because $v_i/(s+1) \ge \lambda$ exactly when $v_i/\lambda \ge s+1$. For Sainte-Laguë, take $c$ in the same position among its quotients and set $\mu = 2c$. Since $v_i/(2s+1) \ge c$ exactly when $v_i/\mu \ge s + \tfrac12$, each $s_i$ is $v_i/\mu$ rounded to the nearest whole number. *In words:* the quotient table is just a way of finding the price. In the history of US House apportionment the same two procedures are Jefferson's and Webster's methods; their paradoxes belong to [social-choice](../../social-choice/syllabus.md).
5. **Why D'Hondt leans large (mechanical).** Rounding down strips each party of its fractional part, about half a seat on average. With $n$ parties, about $n/2$ seats are lost to rounding, so $\lambda$ falls until they come back, and they come back in proportion to votes. The net effect, averaged over many elections, is

$$s_i - e_i \approx \frac{n\,p_i - 1}{2}.$$

*In words:* a party bigger than the average party ($p_i > 1/n$) expects a bonus and a smaller one a penalty, each a fraction of a seat. Sainte-Laguë rounds to the nearest seat, so each party's rounding error averages zero whatever its size. Two cautions. This is a rule of thumb about averages (it assumes the fractional parts are spread evenly), not a promise about any one district. And the bonus is roughly constant *in seats*, so it matters most where $M$ is small.

6. **What the raised first divisor does.** Under pure Sainte-Laguë a party's first seat needs $v_i/\mu \ge 0.5$, half a price. Dividing by 1.4 instead raises the bar to $0.7$ of a price (1.2 raises it to $0.6$), while leaving seats after the first exactly as before. *In words:* it brakes the entry of very small parties and stays neutral among parties already seated.

**Where the rule runs out.** The formula takes as given three things that usually decide more than it does: the district magnitude, any [legal threshold](../reference.md#legal-threshold), and the district map. It cannot break a tie between equal quotients, so the statute must: Spain's electoral law gives a tied seat to the party with more total votes and only then draws lots, while the Dutch Elections Act goes straight to lots. And it says nothing about *which* candidates fill a party's seats; that is the list type of [1.3](01-03-list-pr-quotas-and-largest-remainders.md).

## Votes and seats

![Two bar charts of quotients for the four parties of Delmaria's capital district. Top, D'Hondt, dividing by 1, 2 and 3: the seven largest quotients are 38, 32, 21, 19, 16, 12.7 and 10.7 thousand, so A and B win three seats each, C one and D none; C's second quotient of 10.5 just misses. Bottom, Sainte-Laguë, dividing by 1, 3 and 5: the seven largest are 38, 32, 21, 12.7, 10.7, 9 and 7.6, so A wins three, B two, C one and D one](assets/01-04-fig1.svg)

*The dashed line is the cut-off, the seventh-largest quotient. Under D'Hondt it is 10,667 votes and D's 9,000 falls below it. Under Sainte-Laguë, dividing by 3 instead of 2 cuts the big parties' second bars harder, the cut-off drops to 7,600, and D's single bar clears it.*

## Worked examples

**Example 1 (clean): Delmaria's capital district, $M = 7$.** Invented votes: A 38,000, B 32,000, C 21,000, D 9,000 (total 100,000). Entitlements: 2.66, 2.24, 1.47, 0.63. One table serves both methods (thousands of votes):

| Party | ÷1 | ÷2 | ÷3 | ÷5 |
|---|---|---|---|---|
| A | 38 | 19 | 12.67 | 7.6 |
| B | 32 | 16 | 10.67 | 6.4 |
| C | 21 | 10.5 | 7 | 4.2 |
| D | 9 | 4.5 | 3 | 1.8 |

*D'Hondt* (columns ÷1, ÷2, ÷3). The seven largest are 38, 32, 21, 19, 16, 12.67 and 10.67, so **A 3, B 3, C 1, D 0**. The eighth is C's 10.5: B's third seat beat C's second by about 170 votes per seat. Check with one price, $\lambda = 10{,}600$: votes divided by it are 3.58, 3.02, 1.98, 0.85, which round down to 3, 3, 1, 0.

*Sainte-Laguë* (columns ÷1, ÷3, ÷5). The seven largest are 38, 32, 21, 12.67, 10.67, 9 and 7.6, so **A 3, B 2, C 1, D 1**; the eighth is C's 7. Check with $\mu = 14{,}500$: 2.62, 2.21, 1.45, 0.62, which round to 3, 2, 1, 1. (Hare largest remainders from [1.3](01-03-list-pr-quotas-and-largest-remainders.md) happens to agree.)

*Modified Sainte-Laguë.* With first divisor 1.4, D's first quotient is $9{,}000/1.4 \approx 6{,}429$, below C's second quotient of 7,000, so the seat moves: **A 3, B 2, C 2, D 0**. With Sweden's 1.2 it is 7,500, which still beats 7,000, and D keeps its seat. Three formulas, three outcomes, all from the same votes.

Read D'Hondt's result against step 5. A is 0.34 seats over its entitlement and B 0.76 over, while C is 0.47 under and D 0.63 under. The rule of thumb predicts the signs ($+0.26$, $+0.14$, $-0.08$, $-0.32$ for A to D); one district is one draw, so the sizes are lumpy.

**Example 2 (hard): same votes, smaller districts.** Delmarian reformers propose splitting the capital into North (4 seats) and South (3 seats). Suppose each province casts exactly half of every party's vote: A 19,000, B 16,000, C 10,500, D 4,500.

- North, $M=4$. D'Hondt takes 19, 16, 10.5 and A's 9.5; Sainte-Laguë takes 19, 16, 10.5 and A's 6.33. Both give A 2, B 1, C 1.
- South, $M=3$. Both methods take 19, 16 and 10.5: A 1, B 1, C 1.

Totals: **A 3, B 2, C 2, D 0 under either formula.** The choice of formula has stopped mattering, and magnitude now decides. D's 9% is below the [effective threshold](../reference.md#effective-threshold) of roughly $75\%/(M+1)$, which is 15% at $M=4$ and 18.75% at $M=3$ ([2.2](02-02-district-magnitude-and-thresholds.md) develops it). Even who gains moved: C, held to one seat at $M=7$ under both pure methods, now holds two seats on an entitlement of 1.47.

Real designs sit at both ends, as of 2026. **Spain** elects its 350-member Congress of Deputies in 52 districts: each of 50 provinces gets at least two seats, Ceuta and Melilla one each, and seats go by D'Hondt among lists with at least 3% of the district's valid votes (Organic Law 5/1985, arts. 162–163). The mean magnitude is under 7, and in 2023, 27 of the 50 provinces elected five deputies or fewer. That is Example 2's design: D'Hondt's fraction-of-a-seat lean recurs in every small district. **The Netherlands** allocates its 150 seats nationally: full quotas first, then the remaining seats by highest averages (D'Hondt) among lists that reached a full quota, so the only barrier is 1/150 of the vote, about 0.67%. **Israel** also uses one nationwide district for its 120 seats, allocated by a D'Hondt variant, with a 3.25% legal threshold since 2014. In a 150-seat district, D'Hondt's lean is a fraction of a seat in 150. All of this is mechanical. Whether Spain's results are in fact less proportional than the Dutch is an empirical comparison, and [2.1](02-01-measuring-outcomes.md) gives you the index to measure it.

## Watch out

- **You might think Sainte-Laguë favours small parties, but actually it is neutral on average.** It only looks pro-small next to D'Hondt. The raised first divisor of modified Sainte-Laguë tilts it back against the very smallest.
- **You might think "D'Hondt favours large parties" is an empirical finding, but actually it is mechanical**: the arithmetic of rounding down. What that lean does to the *number* of parties over time, whether small parties merge or voters desert them, is an empirical question for [2.3](02-03-duvergers-law-observed.md).
- **You might think the formula is the big lever, but actually magnitude can matter more.** Example 2 erased the difference between the two formulas just by halving the district.

## One-liner

> A divisor method finds one price per seat and rounds: D'Hondt rounds down and hands the leftovers to big parties, Sainte-Laguë rounds to the nearest seat and is neutral on average, and in small districts the magnitude outweighs either.

## Problems

**P1 (🟢) *(Formal (a)–(b).)*** Invented numbers. A 5-seat Delmarian district votes A 45,000, B 25,000, C 18,000, D 12,000. (a) Allocate the seats by D'Hondt and by Sainte-Laguë, showing the quotient table. (b) For each method, give one common divisor that reproduces its allocation (round down for D'Hondt, round to nearest for Sainte-Laguë), and the range of divisors that would work.

**P2 (🟡) *(Formal (a) · Exegetical (b).)*** Apply to a hard case. Delmaria is replacing D'Hondt with pure Sainte-Laguë. In one 5-seat district the polls show Tamar 45,000, Ossa 29,000 and Ferro 26,000. Ferro's strategists propose running as two lists, Ferro North (14,000) and Ferro South (12,000), assuming every Ferro voter follows. (a) Under pure Sainte-Laguë, how many seats does Ferro win unified, and how many split? Does the split still pay if the first divisor is 1.4? (b) In two sentences, say where the counting rule stops determining whether the split pays.

**P3 (🔴, optional) *(Exegetical (a)–(b).)*** Diagnose. An **invented** news report from Delmaria, not the words of any real person or body:

> (i) "Under the new Sainte-Laguë count, Tamar lost a seat in the capital that D'Hondt would have given it, on exactly the same votes." (ii) "The Electoral Commission says the change is worth well under one seat per party per district on average." (iii) "Critics warn the switch will double the number of parties in the assembly within a decade." (iv) "That makes the new law an attack on stable government."

(a) Label each sentence mechanical, empirical or normative. One line each. (b) What can the formula's arithmetic alone say about (iii), and what evidence would settle it? 80 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) — strict)*

(a) Quotient table (thousands); D'Hondt uses ÷1, ÷2, ÷3, Sainte-Laguë ÷1, ÷3, ÷5. Entitlements: A 2.25, B 1.25, C 0.9, D 0.6.

| Party | ÷1 | ÷2 | ÷3 | ÷5 |
|---|---|---|---|---|
| A | 45 | 22.5 | 15 | 9 |
| B | 25 | 12.5 | 8.33 | 5 |
| C | 18 | 9 | 6 | 3.6 |
| D | 12 | 6 | 4 | 2.4 |

D'Hondt: the five largest of ÷1, ÷2, ÷3 are 45, 25, 22.5, 18, 15, so **A 3, B 1, C 1, D 0**. The sixth is B's 12.5, just above D's 12.

Sainte-Laguë: the five largest of ÷1, ÷3, ÷5 are 45, 25, 18, 15, 12, so **A 2, B 1, C 1, D 1**. The sixth is A's 9.

(b) D'Hondt: $\lambda = 14{,}000$ gives 3.21, 1.79, 1.29, 0.86, rounding down to 3, 1, 1, 0. Any $\lambda$ above 12,500 and up to 15,000 works. Sainte-Laguë: $\mu = 20{,}000$ gives 2.25, 1.25, 0.9, 0.6, rounding to 2, 1, 1, 1. Any $\mu$ strictly between 18,000 and 24,000 works (twice the fifth and sixth quotients, 12,000 and 9,000).

**Must hit, strict:**

- D'Hondt 3–1–1–0 and Sainte-Laguë 2–1–1–1, with the quotient table shown.
- A valid divisor for each, with D'Hondt rounding down and Sainte-Laguë rounding to the nearest seat; ranges as above.

**Wrong turns:** using 1, 2, 3 for Sainte-Laguë; using the fifth Sainte-Laguë quotient itself (12,000) as the price without doubling it, which gives A 3.75, rounding to 4 seats.

---

**P2** *(Formal (a) — strict · Exegetical (b) — strict)*

(a) Pure Sainte-Laguë, unified: the quotients are T 45, 15, 9; O 29, 9.67; F 26, 8.67 (thousands). The five largest are 45, 29, 26, 15, 9.67, so T 2, O 2, **Ferro 1**.

Split: T 45, 15, 9; O 29, 9.67; Ferro North 14, 4.67; Ferro South 12, 4. The five largest are 45, 29, 15, 14, 12, so T 2, O 1, **Ferro North 1, Ferro South 1**. Splitting wins Ferro a second seat, taken from Ossa.

First divisor 1.4: unified, the first quotients become T 32.14, O 20.71, F 18.57, and the five largest are 32.14, 20.71, 18.57, 15, 9.67: Ferro 1. Split: Ferro North 10, Ferro South 8.57. The five largest are 32.14, 20.71, 15, 10, 9.67, so Ferro North 1, Ferro South 0: **Ferro 1. The split no longer pays.** (Under the old D'Hondt rule it would have backfired: the five largest are 45, 29, 22.5, 15, 14.5, and Ferro wins nothing.)

**Must hit, strict (a):**

- Pure Sainte-Laguë: 1 seat unified, 2 split.
- First divisor 1.4: 1 seat either way, because each half's first quotient is cut by the raised divisor.

**Must hit, strict (b):**

- The rule fixes seats only *given* each list's votes. Whether the split pays turns on whether Ferro's voters actually divide as planned (a behavioural, empirical question, [2.3](02-03-duvergers-law-observed.md)) and on how the other parties respond.
- It also turns on rules outside the formula: whether the law lets one party register two lists, links them, or applies a threshold that one half might miss. A raised first divisor removes this particular gain mechanically, as (a) shows.

**Wrong turns:** concluding that Sainte-Laguë always rewards splitting (it did here because each half sat just above the price for a first seat); treating the strategists' assumption that every voter follows as part of the counting rule.

**Model answer (b):** The formula settles the seats once the list totals are known, but whether Ferro's voters split 14,000 to 12,000 rather than drifting to Ossa, and whether rivals answer in kind, is behaviour, not arithmetic. Whether the gamble is even available depends on registration and threshold rules the formula does not contain, and a 1.4 first divisor would have removed the gain before anyone voted.

---

**P3** *(Exegetical (a)–(b) — strict)*

**Must hit, strict (a):**

- (i) Mechanical: a recount under both formulas checks it.
- (ii) Mechanical: an average property of the rounding arithmetic (step 5), not an observation of behaviour.
- (iii) Empirical: a prediction about how parties and voters will respond.
- (iv) Normative: it judges the law against a value, stable government, that the course does not adjudicate.

**Must hit, strict (b):**

- The arithmetic alone says the formula moves well under one seat per party per district, so any doubling would have to come through behaviour (new parties forming, voters no longer deserting small ones), not the count.
- Evidence: comparisons of party numbers before and after real formula switches, or across similar countries using each formula, with the strength of that evidence stated ([2.1](02-01-measuring-outcomes.md) supplies the measure of "number of parties").

**Wrong turns:** calling (ii) empirical because a commission said it; calling (iii) mechanical because it mentions the formula.

**Model answer (b):** By itself the switch shifts a fraction of a seat per party per district, so the count cannot double the party system; at most it lowers the bar a small party must clear. A doubling would need new parties and changed voting, which is a behavioural claim. It would be tested by counting effective parties before and after comparable switches elsewhere, and by asking how much else changed at the same time.

</details>

## Flashback

**From Lesson [1.2](01-02-ranked-ballots-the-alternative-vote-and-stv.md) (Ranked ballots: the alternative vote and STV):** *(Formal (a) · Exegetical (b).)* Counterexample. Invented numbers. The invented country of Tarnwick elects two-seat constituencies by STV with the Hare quota. A reform memo claims: "Moving to the Droop quota would change only how many votes a winner needs, never who wins." One Tarnwick constituency:

| Ballots | Ranking |
|---|---|
| 5,600 | X > Y |
| 1,900 | Y only |
| 2,400 | Z only |
| 2,100 | W > Y |

(a) Count it twice, with the whole-pile fractional transfer and the other rules of Lesson 1.2: once with the Hare quota $V/S$, once with the Droop quota. Give each quota, each count's totals and who is elected. (b) In two sentences, name the count at which the two runs part ways, and the rule that decides the second seat in each run.

<details>
<summary>Solution</summary>

(a) $V = 12{,}000$ and $S = 2$.

*Hare quota:* $12{,}000/2 = 6{,}000$.

| Candidate | Count 1 | Count 2 | Count 3 |
|---|---|---|---|
| X | 5,600 | 5,600 | 5,600 (elected) |
| Y | 1,900 | excluded | |
| Z | 2,400 | 2,400 | 2,400 (elected) |
| W | 2,100 | 2,100 | excluded |
| Exhausted | 0 | 1,900 | 4,000 |

- Count 1: no one reaches 6,000. Y is lowest and is excluded; the 1,900 Y-only ballots exhaust.
- Count 2: still no one at quota. W is excluded; the 2,100 W > Y ballots find Y gone and exhaust.
- Count 3: two continuing candidates for two seats, so the stop rule elects **X and Z**, neither of whom reached the quota.

*Droop quota:* $\lfloor 12{,}000/3 \rfloor + 1 = 4{,}001$.

| Candidate | Count 1 | Count 2 | Count 3 |
|---|---|---|---|
| X | 5,600 (elected) | | |
| Y | 1,900 | 3,499 | 5,599 (elected) |
| Z | 2,400 | 2,400 | 2,400 |
| W | 2,100 | 2,100 | excluded |

- Count 1: X is elected with surplus $5{,}600 - 4{,}001 = 1{,}599$, so $\text{TV} = 1{,}599/5{,}600 \approx 0.2855$. Every X ballot names Y next, so Y receives $5{,}600 \times 1{,}599/5{,}600 = 1{,}599$.
- Count 2: no one at quota. W (2,100) is lowest and is excluded; the W > Y ballots go to Y at full value: $3{,}499 + 2{,}100 = 5{,}599$.
- Count 3: Y passes 4,001 and is elected: **X and Y**. Nothing exhausts.

Same ballots, different second winner, so the memo's claim fails.

**Must hit, strict (b):**

- The runs part at count 1. Under Droop, X clears the quota and her surplus lifts Y off the bottom. Under Hare, X is 400 short, so there is no surplus, and Y, lowest on first preferences, is excluded before X's voters' second choices are ever read.
- The second seat: under Droop, W's exclusion and transfer carry Y over the quota; under Hare, the stop rule (continuing candidates no more than seats left) elects Z on 2,400 votes. With $V/S$, two winners could both reach the quota only if no vote went to a loser or exhausted.

**Wrong turns:** electing X at count 1 under Hare because she leads (5,600 is below 6,000); giving Y all 5,600 of X's ballots at full value instead of the 1,599 surplus; under Droop, excluding Y at count 1 before X's surplus is transferred.

**Model answer (b):** The runs part at count 1: Droop's quota of 4,001 elects X at once and moves her 1,599 surplus to Y, while Hare's 6,000 elects no one, so Y is excluded as lowest before X's voters' second preferences count. The second seat then goes, under Droop, to Y, carried over the quota by W's transfers, and under Hare to Z by the stop rule, on 2,400 votes and short of the quota.

</details>

## Connections

- **Backward:** [1.3](01-03-list-pr-quotas-and-largest-remainders.md)'s exact entitlement $v_i/q_H$ reappears here as $e_i$, and its Hare largest remainders matched Sainte-Laguë in Example 1. [1.1](01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md)'s three parts of an electoral system are visible in Example 2: same ballots, same formula, different magnitude, different result.
- **Forward:** [1.5](01-05-mixed-systems-mmp-and-parallel.md) runs these formulas to compute MMP top-ups. [2.1](02-01-measuring-outcomes.md) measures how far an allocation departs from the entitlements, [2.2](02-02-district-magnitude-and-thresholds.md) turns Example 2 into the effective threshold, and [2.3](02-03-duvergers-law-observed.md) asks what voters and parties do in response.
- **Sideways:** the same rounding rules apportion seats among states in [social-choice](../../social-choice/syllabus.md) (Jefferson, Webster, and the Balinski–Young impossibility). Whether proportionality is owed at all is normative: Mill's argument that only proportional representation is "true democracy" is in [`history-of-political-thought` 6.4](../../history-of-political-thought/lessons/06-04-mill-representative-government.md), and the question belongs to [political-philosophy](../../political-philosophy/syllabus.md).
