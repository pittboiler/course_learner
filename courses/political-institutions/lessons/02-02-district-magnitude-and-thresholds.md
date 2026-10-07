# Political Institutions · Lesson 2.2: District magnitude and thresholds

> ⏱ ~15 min · Module 2: What electoral systems do · Builds on: [1.4 List PR II: divisor methods](01-04-list-pr-divisor-methods.md), [1.5 Mixed systems: MMP and parallel](01-05-mixed-systems-mmp-and-parallel.md), [2.1 Measuring outcomes](02-01-measuring-outcomes.md) · Unlocks: [2.3 Duverger's law, observed](02-03-duvergers-law-observed.md), [2.4 Districts and electoral reform](02-04-districts-and-electoral-reform.md)

## Why this matters

Run D'Hondt in a three-seat district and a party needs about a fifth of the vote to be safe. Run the identical formula on a 120-seat national list and well under 1% will do. The formula has not changed; the number of seats it divides has. Rein Taagepera and Matthew Shugart (*Seats and Votes*, 1989) made that number, **district magnitude**, the master variable of electoral systems, and most of the disproportionality [2.1](02-01-measuring-outcomes.md) measured traces back to it. This lesson computes the thresholds magnitude creates, sets them beside the thresholds parliaments write into law, and asks how much of a party system two numbers can predict.

## The idea

A district with $M$ seats sells its seats at a price of roughly one $(M+1)$th of the vote. Below that price a party may still get lucky; above it, nothing the other parties do can keep it out. Nobody legislates this price. It falls out of the arithmetic, so it is called a **natural** or **effective** threshold.

A **legal** threshold is different: a line written into statute, such as Germany's 5% of the national party vote, below which a list is simply dropped from the count.

A party faces whichever barrier is higher. In small districts the natural threshold dwarfs any plausible legal one, and the law is decoration. In one big national district the natural threshold almost vanishes, and the law is the only barrier left.

## The mechanism

Notation: $M$ = seats in the district ([district magnitude](../reference.md#district-magnitude)), $V$ = valid votes, $p$ = number of lists competing. Formula: [D'Hondt](../reference.md#dhondt-method) unless stated.

1. **Threshold of exclusion (mechanical).** A list with more than $V/(M+1)$ votes is guaranteed a seat:
$$T_{\text{excl}} = \frac{100\%}{M+1}$$
Proof sketch: if list $X$ with $x > V/(M+1)$ votes won nothing, every seat went to a quotient above $x$, so a rival holding $k$ seats has more than $kx$ votes. The rivals together would hold more than $Mx$, and the total would exceed $V$. *In words:* above one $(M+1)$th of the vote, no arrangement of rivals can shut you out. It is the Droop quota of [1.2](01-02-ranked-ballots-the-alternative-vote-and-stv.md) read as a share: in Ireland's three- to five-seat STV constituencies, a quarter to a sixth of the vote.

2. **Threshold of inclusion (mechanical).** This is the smallest share that *can* win, if rivals split as favourably as possible. Under D'Hondt it is
$$T_{\text{incl}} = \frac{100\%}{M+p-1}$$
The best case: one big list just short of $M$ times your vote takes $M-1$ seats, and the other $p-2$ lists each sit just below you. *In words:* below this share you lose however lucky you are, and the floor falls as more lists run.

3. **[Effective threshold](../reference.md#effective-threshold) (a rule of thumb).** Between the two thresholds lies a band where a list's fate depends on how the others split. Arend Lijphart (*Electoral Systems and Party Systems*, 1994) took the midpoint. The simpler version now standard, used by Taagepera and by Michael Gallagher, is
$$T_{\text{eff}} \approx \frac{75\%}{M+1}$$
Where the 75 comes from: with $p = M+1$ lists the inclusion threshold is $100\%/(2M)$, about half the exclusion threshold, and halfway between half and all of it is three-quarters. Read $T_{\text{eff}}$ as the share that gives a list roughly even odds of a first seat. The band is mechanical; the 75 is a calibration. Sainte-Laguë and largest remainders lower the bar for small lists ([1.4](01-04-list-pr-divisor-methods.md)).

4. **[Legal threshold](../reference.md#legal-threshold) (mechanical).** As of 2026:
   - **Germany:** 5% of the national second vote, or three constituency wins, the exception the Federal Constitutional Court restored in 2024 ([1.5](01-05-mixed-systems-mmp-and-parallel.md)).
   - **Israel:** 3.25%, with all 120 Knesset seats filled from one national district.
   - **Turkey:** cut from 10% to 7% in 2022. It is measured nationally, though seats are allocated by D'Hondt district by district.
   - **Spain:** 3% of the valid vote, applied inside each province (Electoral Law, art. 163.1.a).
   - **The Netherlands:** no separate threshold. All 150 seats are allocated nationally, and a list needs one full quota, 1/150 of the vote.

5. **Which binds.** The barrier a list actually faces is the larger of $T_{\text{legal}}$ and $T_{\text{eff}}$. Setting $75\%/(M+1) = T$ gives the crossover magnitude
$$M^{*} = \frac{75\%}{T} - 1$$
For 5%, $M^{*} = 14$. Spain's 3% can bind only in provinces above about 24 seats, which means only the very largest. Israel's natural threshold is $75\%/121 \approx 0.62\%$, so its legal 3.25% binds roughly five times over.

6. **The [seat product](../reference.md#seat-product-model) (empirical).** Taagepera (*Predicting Party Sizes*, 2007), and then Shugart and Taagepera (*Votes from Seats*, 2017), predict the [effective number of parties](../reference.md#effective-number-of-parties) by seats from two numbers. These are mean magnitude $M$ and assembly size $S$:
$$N_s \approx (MS)^{1/6}$$
A 650-seat assembly of single-member districts gives $650^{1/6} \approx 2.94$. Doubling $M$ and doubling $S$ have the same predicted effect. *Strength:* a robust central tendency across many democracies, and logically motivated, not just fitted. But it predicts an average, and individual countries scatter around it. Taagepera's own subtitle, *The Logic of Simple Electoral Systems*, flags its scope, and the formula contains nothing but $M$ and $S$.

**Where the evidence is weakest.** Three places. First, the 75 is a calibration, not a theorem: the true even-odds point moves with the number of lists, the formula and the geography of a party's support. Second, the seat product has no term for legal thresholds or for the social cleavages of [4.4](04-04-party-systems.md), so a country with either can sit well off the curve, and the formula cannot say why. Third, causation can run backwards. Parties choose magnitudes and thresholds ([2.4](02-04-districts-and-electoral-reform.md)), so an already fragmented party system may adopt high magnitude, not result from it. The correlation is robust; how much of it is causal is [`empirical-political-economy`](../../empirical-political-economy/syllabus.md)'s question.

## Thresholds and magnitude

![Log-log chart of vote share needed against district magnitude from 1 to 200. A dashed black curve shows the exclusion threshold 100 percent over M plus 1, and a solid blue curve below it the effective threshold 75 percent over M plus 1, marked at M equals 4, 15 percent, and at M equals 120, 0.62 percent. Horizontal lines mark legal thresholds of 7 percent for Turkey, 5 percent for Germany and 3.25 percent for Israel, each crossing the blue curve at M of about 9.7, 14 and 22.1](assets/02-02-fig1.svg)

*Left of a crossing dot the district's own arithmetic is the higher barrier; right of it the law is. Each legal line is drawn as if applied inside one district. Turkey and Germany actually measure theirs nationally, which is what Example 2 is about.*

## Worked examples

**Example 1 (clean): the band in two Galdorian districts.** Invented numbers. The invented country of Galdoria elects four seats per district by D'Hondt, so $T_{\text{excl}} = 20\%$ and $T_{\text{eff}} = 15\%$. Each district casts 100,000 votes; winning quotients are in bold.

*North:*

| List | Votes | ÷1 | ÷2 | ÷3 |
|---|---|---|---|---|
| Rowan | 41,000 | **41,000** | **20,500** | 13,667 |
| Sedge | 40,000 | **40,000** | **20,000** | 13,333 |
| Vetch | 19,000 | 19,000 | 9,500 | 6,333 |

*South:*

| List | Votes | ÷1 | ÷2 | ÷3 | ÷4 |
|---|---|---|---|---|---|
| Rowan | 52,000 | **52,000** | **26,000** | **17,333** | 13,000 |
| Vetch | 14,000 | **14,000** | 7,000 | 4,667 | 3,500 |
| Sedge | 13,500 | 13,500 | 6,750 | 4,500 | 3,375 |
| Thorn | 11,000 | 11,000 | 5,500 | 3,667 | 2,750 |
| Furze | 9,500 | 9,500 | 4,750 | 3,167 | 2,375 |

Vetch wins nothing in North with 19% and a seat in South with 14%. Both shares sit inside the band: below the 20% guarantee, above South's inclusion floor of $100\%/(4+5-1) = 12.5\%$. Inside the band, the rule that decides is the divisor sequence applied to how the *rivals* split. North's two evenly matched rivals both get second quotients above 19,000. South's runaway leader takes three seats and then runs out: its fourth quotient, 13,000, falls below Vetch's 14,000.

**Example 2 (hard): national law, district arithmetic.** Galdoria's assembly has 70 seats: ten seven-seat districts allocated by D'Hondt ($T_{\text{eff}} = 75\%/8 \approx 9.4\%$), plus a 7% *national* legal threshold. Thorn polls 8,000 of 100,000 in eight districts like Ellis below, and 7,000 in the other two. Furze runs only in those two, its home districts, with 29,000 in each.

*Ellis (7 seats):*

| List | Votes | ÷1 | ÷2 | ÷3 | ÷4 |
|---|---|---|---|---|---|
| Rowan | 40,000 | **40,000** | **20,000** | **13,333** | 10,000 |
| Sedge | 31,000 | **31,000** | **15,500** | 10,333 | 7,750 |
| Vetch | 21,000 | **21,000** | **10,500** | 7,000 | 5,250 |
| Thorn | 8,000 | 8,000 | 4,000 | 2,667 | 2,000 |

In a home district (Rowan 34,000, Furze 29,000, Sedge 19,000, Vetch 11,000, Thorn 7,000), Furze's 29,000 and 14,500 are among the top seven quotients. The last winning quotient is Vetch's 11,000, and Furze would take two seats. Nationally:

| List | Votes | Share | Seats, no legal threshold | Seats, 7% national threshold |
|---|---|---|---|---|
| Rowan | 388,000 | 38.8% | 30 | 32 |
| Sedge | 286,000 | 28.6% | 18 | 20 |
| Vetch | 190,000 | 19.0% | 18 | 18 |
| Thorn | 78,000 | 7.8% | 0 | 0 |
| Furze | 58,000 | 5.8% | 4 | 0 |

Thorn clears the law and fails the arithmetic. With four lists in Ellis its inclusion floor is $100\%/(7+4-1) = 10\%$, so 8% cannot win however the others split. Furze clears the arithmetic and fails the law, and its four seats pass to Rowan and Sedge. The rule that decides is *where the threshold is measured*: a national test catches the concentrated party, while the district arithmetic catches the diffuse one. Germany's three-constituency exception is a designed escape for exactly Furze's profile; Turkey's rule has none. The seat product predicts $(7 \times 70)^{1/6} \approx 2.81$ parties. The threshold outcome gives $N_s = 2.80$ and the no-threshold outcome 3.13, a difference the formula cannot see. **Where the rule runs out:** the arithmetic fixes this election only. Whether Thorn and Furze merge or ally next time, and whether Thorn's voters desert it ([2.3](02-03-duvergers-law-observed.md)), is politics.

## Watch out

- **You might think the effective threshold is the share that guarantees a seat, but actually that is the exclusion threshold, $100\%/(M+1)$.** The 75% figure is an even-odds rule of thumb with an empirical calibration; lists below it can win (Vetch at 14%) and lists above it can lose (Vetch at 19%).
- **You might think a national vote share tells you whether a party clears the natural threshold, but actually the natural threshold is a district-level quantity.** Thorn had 7.8% nationally and could not win a seat anywhere.
- **You might think $N_s \approx (MS)^{1/6}$ forecasts a given country, but actually it is an average across systems.** The magnitudes are mechanical inputs; the 1/6 power is an empirical regularity with real scatter.

## One-liner

> A district of $M$ seats charges about $75\%/(M+1)$ of the vote for a first seat and guarantees one above $100\%/(M+1)$; a legal threshold matters only where it is higher than that, and only where it is measured.

## Problems

**P1 (🟢) *(Formal (a)–(b) · Exegetical (c).)*** (a) For D'Hondt districts of $M = 3$ and $M = 9$, compute the exclusion threshold and the effective threshold. (b) An invented assembly has 81 seats. Use the seat product to estimate $N_s$ if it is elected in 27 three-seat districts, and if it is elected in nine nine-seat districts. Powers of 3 make this hand-computable. (c) For each of the three kinds of number you computed, say in one line whether it is mechanical or an empirical regularity.

**P2 (🟡) *(Formal (a) · Exegetical (b)–(c).)*** Apply to a hard case. Galdoria's capital district elects 20 members by D'Hondt and applies a legal threshold of 5% of the district's valid vote. The Ash list polls 4%. (a) Compute the district's effective and exclusion thresholds, and Ash's inclusion threshold if 4 lists compete and if 7 do. (b) Which threshold binds, and what is Ash's result? One sentence. (c) Parliament cuts the legal threshold to 3%. Does Ash now win a seat? Say what the rules settle and where they stop determining the outcome. 80 words or fewer.

**P3 (🔴, optional) *(Exegetical.)*** Diagnose. An **invented** memo to an invented Galdorian committee, not the words of any real person or body. Galdoria's regional assemblies have 60 seats each, elected in twelve five-seat districts by D'Hondt, with a legal threshold of 3% of the district vote.

> (i) "Our 3% threshold is the reason only three parties sit in the regional assemblies. (ii) Abolish it and small parties will flood in. (iii) The seat product predicts about 2.6 parties for assemblies like ours and we have three, which proves the threshold is doing its job."

For each sentence, name the error in one or two sentences, using numbers where they help. 120 words or fewer in total.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b) · Exegetical (c))*

(a)

| $M$ | $T_{\text{excl}} = 100\%/(M+1)$ | $T_{\text{eff}} = 75\%/(M+1)$ |
|---|---|---|
| 3 | 25% | 18.75% |
| 9 | 10% | 7.5% |

(b) Three-seat districts: $MS = 3 \times 81 = 243 = 3^5$, so $N_s \approx 3^{5/6} \approx 2.50$. Nine-seat districts: $MS = 9 \times 81 = 729 = 3^6$, so $N_s \approx 3$. Tripling magnitude at fixed assembly size raises the prediction by a factor of $3^{1/6} \approx 1.2$.

**Must hit, strict (c):**

- Exclusion threshold: mechanical, a guarantee that follows from the D'Hondt arithmetic.
- Effective threshold: a rule of thumb. It sits inside a mechanical band, but the 75 is an empirical calibration of the even-odds point.
- Seat product: an empirical regularity, an average across systems, not a forecast for this assembly.

**Wrong turns:** using $75\%/M$ (giving 25% and 8.3%); calling the effective threshold the vote share that guarantees a seat; reading 2.50 as "two or three parties will win seats". $N_s$ is an effective number ([2.1](02-01-measuring-outcomes.md)), not a count.

---

**P2** *(Formal (a) · Exegetical (b)–(c))*

(a) $T_{\text{eff}} = 75\%/21 \approx 3.57\%$; $T_{\text{excl}} = 100\%/21 \approx 4.76\%$. Inclusion: with 4 lists, $100\%/(20+4-1) = 100\%/23 \approx 4.35\%$; with 7 lists, $100\%/26 \approx 3.85\%$.

**Must hit, strict (b):**

- The 5% legal threshold binds. It is above every natural threshold here, even exclusion, and Ash at 4% is struck from the count by law and wins nothing.

**Must hit, strict (c):**

- At 3% the law no longer binds (4% > 3%). Ash is above the effective threshold but below the exclusion threshold, so no seat is guaranteed.
- With only 4 lists, Ash cannot win: 4% is below the inclusion floor of 4.35%. With 7 lists and a favourable split it can. One checked case: a list on 79,900 of 100,000 votes takes 19 seats, and its 20th quotient (3,995) falls below Ash's 4,000. Five other lists all poll under 4,000.
- Where it stops: the outcome turns on how many lists run and how their votes split, which the thresholds do not fix.

**Wrong turns:** "4% > 3.57%, so Ash wins": the effective threshold is an even-odds point, not a guarantee. Applying the legal threshold to the national vote when the problem sets it per district.

**Model answer (c):** Cutting the threshold removes the legal bar, since 4% exceeds 3%, but it does not seat Ash. At 4% Ash is above the even-odds point (3.57%) and below the guarantee (4.76%). If only four lists run it cannot win, because the floor is 4.35%. With seven or more and one dominant rival, it can. The rules settle the band; the rival lists' number and split settle the seat.

---

**P3** *(Exegetical)*

**Must hit, strict:**

- (i) Confuses a legal with an effective threshold. In five-seat districts $T_{\text{eff}} = 75\%/6 = 12.5\%$ and $T_{\text{excl}} \approx 16.7\%$. The 3% line never binds; magnitude keeps small parties out.
- (ii) Abolishing a threshold that never binds changes no seat allocation mechanically. Any change would come through behaviour, such as voters or new entrants responding to the news, which is a psychological effect ([2.3](02-03-duvergers-law-observed.md)), not this rule.
- (iii) The seat product uses only $M$ and $S$: $(5 \times 60)^{1/6} = 300^{1/6} \approx 2.59$. It contains no threshold term, so a fit to it cannot show the threshold working. It is also an average with scatter, and "three parties sit" is a raw count, not $N_s$.

**Wrong turns:** accepting (iii) because 3 is close to 2.6; saying abolition would let parties above 3% in, when below 12.5% they face the natural threshold anyway.

**Model answer:** (i) The binding barrier is the district's natural threshold, about 12.5% in five-seat districts, so the 3% line does no work. (ii) Removing a non-binding threshold changes no allocation; any influx would have to come from changed behaviour, not from the rule. (iii) The seat product, $300^{1/6} \approx 2.6$, is computed from magnitude and assembly size alone. A match cannot credit a threshold that is not in the formula, and three seated parties is a count, not an effective number.

</details>

## Flashback

**From Lesson [1.5](01-05-mixed-systems-mmp-and-parallel.md) (Mixed systems: MMP and parallel):** *(Formal (a)–(b) · Exegetical (c).)* Invented numbers. The invented Republic of Merrovia elects an 8-seat assembly: 5 single-member constituencies plus 3 list seats, with list seats allocated by Sainte-Laguë and no legal threshold. The party vote is the same in both scenarios: Larch 38,000, Heath 30,000, Moss 20,000, Ivy 12,000. In Scenario A, Larch wins 3 constituencies and Heath 2. In Scenario B, Larch wins 2, Heath 2 and Moss 1. (a) Give every party's seats in both scenarios under MMP, showing the quotients that decide the entitlements. (b) Give every party's seats in both scenarios under a parallel system. (c) In three sentences or fewer: what did the move from A to B change under each design, and what is the largest number of constituencies Larch can win with its MMP total unchanged? Name what a win beyond that creates.

<details>
<summary>Solution</summary>

(a) MMP allocates all 8 seats on the party vote. Sainte-Laguë quotients (bold: the 8 largest):

| Party | ÷1 | ÷3 | ÷5 |
|---|---|---|---|
| Larch | **38,000** | **12,667** | **7,600** |
| Heath | **30,000** | **10,000** | 6,000 |
| Moss | **20,000** | **6,667** | 4,000 |
| Ivy | **12,000** | 4,000 | 2,400 |

The 8th seat goes to Moss at 6,667; the next quotient is Heath's 6,000. Entitlements: **Larch 3, Heath 2, Moss 2, Ivy 1.** List seats fill each gap, $\ell_i = e_i - c_i$:

| Party | A: constituency + list | B: constituency + list | Total, both |
|---|---|---|---|
| Larch | 3 + 0 | 2 + 1 | 3 |
| Heath | 2 + 0 | 2 + 0 | 2 |
| Moss | 0 + 2 | 1 + 1 | 2 |
| Ivy | 0 + 1 | 0 + 1 | 1 |

(b) Parallel allocates only the 3 list seats: the three largest quotients, 38,000, 30,000 and 20,000, give Larch, Heath and Moss one each (next is Larch's 12,667). Add the constituencies. **A: Larch 4, Heath 3, Moss 1, Ivy 0. B: Larch 3, Heath 3, Moss 2, Ivy 0.**

**Must hit, strict (c):**

- Under MMP the move changed only *who* sits: one Larch member and one Moss member swap between constituency and list, and the totals stay 3, 2, 2, 1. Under parallel it moved a seat from Larch to Moss, because district wins are added on top of the list seats.
- Larch can win up to **3** constituencies, its entitlement. A fourth would be an **overhang** seat, and the overhang rule (keep it uncompensated, add balance seats, or leave the winner unseated under coverage) then decides the totals.

**Wrong turns:** allocating the MMP entitlements on the 3 list seats alone, which is the parallel method; in Scenario B, adding Moss's constituency win on top of its 2 MMP seats (3 in total) instead of counting it against them; answering "five" for (c) on the reasoning that district wins never change MMP totals, which forgets overhang.

**Model answer (c):** Under MMP the move from A to B only changed which Larch and Moss members sit for constituencies and which come from the list, while under parallel it shifted a seat from Larch to Moss because district wins add straight to the totals. Larch can win 3 constituencies, its entitlement, without changing its MMP total; a fourth win creates an overhang, and the overhang rule decides what happens next.

</details>

## Connections

- **Backward:** the exclusion threshold is the Droop quota of [1.2](01-02-ranked-ballots-the-alternative-vote-and-stv.md) and [1.3](01-03-list-pr-quotas-and-largest-remainders.md) read as a vote share; the quotient tables are [1.4](01-04-list-pr-divisor-methods.md)'s; Germany's threshold and its court-restored exception are [1.5](01-05-mixed-systems-mmp-and-parallel.md)'s; $N_s$ is [2.1](02-01-measuring-outcomes.md)'s effective number of parties.
- **Forward:** $M = 1$ is the limiting case [2.3](02-03-duvergers-law-observed.md) studies as Duverger's mechanical effect; [2.4](02-04-districts-and-electoral-reform.md) asks who chooses the magnitudes and why; [4.4](04-04-party-systems.md) adds the cleavages the seat product leaves out.
- **Sideways:** Mill's enthusiasm for Hare's national quota ([`history-of-political-thought` 6.4](../../history-of-political-thought/lessons/06-04-mill-representative-government.md)) is magnitude pushed to its limit, the whole assembly as one district. Apportionment paradoxes belong to [`social-choice`](../../social-choice/syllabus.md). Whether proportionality is owed to voters is a normative question for [`political-philosophy`](../../political-philosophy/syllabus.md), and the causal effect of magnitude is [`empirical-political-economy`](../../empirical-political-economy/syllabus.md)'s.
