# Political Institutions · Lesson 2.4: Districts and electoral reform

> ⏱ ~15 min · Module 2: What electoral systems do · Builds on: [2.2 District magnitude and thresholds](02-02-district-magnitude-and-thresholds.md), [2.3 Duverger's law, observed](02-03-duvergers-law-observed.md) · Unlocks: [3.1 Parliamentary government](03-01-parliamentary-government.md)

## Why this matters

Lessons 1.1–2.3 took the districts as given and asked what a formula does with the votes inside them. But with single-member districts the lines themselves can decide a majority: the same votes, cut three ways, can give one party anywhere from none of five seats to three. And someone chooses the formula too, usually the people it elected. This lesson covers both choices: who draws the lines and with what effect, and when the winners under a set of rules agree to change them.

## The idea

There are two separate ways a map can tilt an election.

**Malapportionment** is unequal district size: one member for 30,000 people here, one for 105,000 there. No clever drawing is needed. Each rural voter simply counts for more. **Gerrymandering** is drawing lines to waste your opponent's votes, and it works even when every district has exactly the same population. It uses two moves. **Packing** puts the opponent's voters into a few districts they win by huge margins. **Cracking** spreads them thinly across many districts they narrowly lose.

Both work through **[wasted votes](../reference.md#wasted-votes)**, the idea from [2.3](02-03-duvergers-law-observed.md): votes that did not help elect anyone. Under plurality a vote is wasted if it went to a loser, or if it went to a winner who would have won without it. Whoever draws the lines decides how the wasting is shared out.

The third question is about the rules themselves. Electoral laws are usually ordinary statutes, passed by the majority those laws produced. So we should expect reform to be rare, and to happen when the people who write the rules expect to gain from the change.

## The mechanism

1. **Measure malapportionment.** *(Mechanical.)* Let $p_i$ be district $i$'s share of the population and $s_i$ its share of the seats. The Samuels–Snyder index (David Samuels and Richard Snyder, *British Journal of Political Science*, 2001) is

   $$\text{MAL} = \tfrac{1}{2}\sum_i \lvert s_i - p_i \rvert .$$

   *In words:* the share of seats that sit in the wrong place, compared with a perfectly equal map. A second measure is the **smallest share of the population that could elect a majority**. Take the smallest districts that together make up a majority of seats, and halve their combined population share.

   Invented case: Istmark's assembly has 10 single-member districts, 6 rural ones of 30,000 people and 4 urban ones of 105,000. Each district holds $s_i = 10\%$ of the seats. A rural district holds $p_i = 5\%$ of the people and an urban one $17.5\%$, so

   $$\text{MAL} = \tfrac12(6 \times 5 + 4 \times 7.5) = 30\% .$$

   The six rural seats are a majority, but they hold only $30\%$ of the people. So bare majorities in those districts, about $15\%$ of the population, could elect a majority of the assembly. **Empirical:** in Samuels and Snyder's 78-country data, single-member districts go with higher malapportionment in lower chambers. That is a cross-national association, not a causal estimate.

2. **Measure a gerrymander.** *(Mechanical.)* The **[efficiency gap](../reference.md#efficiency-gap)** (Nicholas Stephanopoulos and Eric McGhee, *University of Chicago Law Review*) compares the wasted votes of two parties $B$ and $R$:

   $$\text{EG} = \frac{W_B - W_R}{V},$$

   where $W$ counts every vote cast for a loser plus every winner's vote beyond half the district's total, and $V$ is the total number of votes. *In words:* a positive gap means the map wastes more of $B$'s votes than of $R$'s. Packing raises the packed party's wasted surplus. Cracking raises its wasted losing votes.

3. **Assign the pen.** *(Mechanical, as of 2026.)* Who draws the lines is a design choice in its own right. In the UK, four **[boundary commissions](../reference.md#boundary-commissions)** (England, Scotland, Wales, Northern Ireland) draw 650 constituencies under a statutory rule. Each constituency's electorate "shall be— (a) no less than 95% of the United Kingdom electoral quota, and (b) no more than 105% of that quota" (Parliamentary Constituencies Act 1986, Sch. 2 r. 2, as amended in 2020). Five island seats, two of them on the Isle of Wight, are exempt by name. Canada has a three-member commission for each of its ten provinces, chaired by a judge whom the province's chief justice appoints. Each commission must try to keep districts "within twenty-five per cent more or twenty-five per cent less of the electoral quota for the province" (Electoral Boundaries Readjustment Act, s. 15(2)). In most US states the legislature draws the congressional map as ordinary legislation, and a minority of states use commissions. Whether US federal courts will police such maps is justiciability doctrine, owned by [constitutional-law](../../constitutional-law/syllabus.md).

4. **Change the rules, or not.** *(Empirical.)* Kenneth Benoit's survey ("Electoral Laws as Political Consequences", *Annual Review of Political Science*, 2007) states the **[seat-maximizing view of reform](../reference.md#seat-maximizing-view-of-reform)**. A new electoral law passes when a coalition of parties expects it to win them more seats and has the votes to enact it. Three episodes, with the rule that decided each:
   - **New Zealand.** Under first-past-the-post, National won a majority of seats in 1978 and 1981 with fewer votes nationwide than Labour. A Royal Commission recommended MMP in 1986, but neither major party favoured it. National had promised a referendum, though. An indicative vote in 1992 went nearly 85% for change. A binding one in 1993 chose MMP over first-past-the-post by about 54% to 46%, and the 1996 election was the first under MMP. *Rule that decided:* a binding referendum, whose law took effect automatically once voters approved it.
   - **Japan.** From 1947 the lower house was elected by the single non-transferable vote in districts of one to six seats. After the Liberal Democrats split and lost power in 1993, the new coalition passed a reform in 1994 creating a parallel system: 300 single-member seats plus 200 list seats in 11 regional blocs at its first use in 1996. *Rule that decided:* ordinary legislation, possible only once the long-dominant party had lost its majority.
   - **United Kingdom.** The 2010 Conservative–Liberal Democrat coalition agreement offered a referendum on the alternative vote ([1.2](01-02-ranked-ballots-the-alternative-vote-and-stv.md)), not on PR. In May 2011 voters rejected AV by 67.9% to 32.1%, on a turnout of 42%. *Rule that decided:* a referendum on the narrower reform the larger coalition partner was willing to put to voters.

**Where the evidence is weakest.** There are two places. First, *what a high efficiency gap shows.* The gap is a mechanical fact about a map, but reading it as a gerrymander is an empirical claim. Jowei Chen and Jonathan Rodden argue that when one party's voters are concentrated in cities, neutral, compact maps pack them anyway. Map C below shows the mechanism in miniature. Separating intent from geography needs simulated sets of neutral maps, and that is identification work for [empirical-political-economy](../../empirical-political-economy/syllabus.md). Second, *the seat-maximizing view.* It fits cases where parties control the outcome. Benoit's own tests use Poland's reforms between 1989 and 2001. But it is weakest exactly where reform was most dramatic. New Zealand's change came through a referendum that neither major party wanted. With only a handful of established democracies ever making a major switch, the evidence is a few well-studied cases, not a regularity.

## Three maps

![Three five-by-five grids of precincts. In each, the left two columns are Blue precincts and the right three are Red. Map A splits the grid into five rows, and Red wins all five districts. Map B draws three districts that each take three or four Blue precincts and two that are all Red, and Blue wins three. Map C splits the grid into five columns, and Blue wins two](assets/02-04-fig1.svg)

*Every district in every map has 500 voters, so none is malapportioned. Blue gets 46% of the vote throughout, yet its seats range from 0 to 3.*

## Worked examples

**Example 1 (clean): three maps, one electorate.** Invented numbers. Istmark's capital has 25 precincts of 100 voters each. A Blue precinct votes 70 Blue to 30 Red, and a Red precinct votes 30 to 70. The 10 Blue precincts make up the two western columns. So Blue has $10 \times 70 + 15 \times 30 = 1{,}150$ of $2{,}500$ votes, or 46%. A district with $k$ Blue precincts gives Blue $70k + 30(5-k)$ votes, so Blue wins exactly when $k \ge 3$. In each district, half the votes is 250.

| Map | District votes, Blue–Red | Seats B–R | $W_B$ | $W_R$ | EG |
|---|---|---|---|---|---|
| A (rows) | 230–270 in all five | 0–5 | 1,150 | 100 | +42% |
| B | 270–230 twice, 310–190, 150–350 twice | 3–2 | 400 | 850 | −18% |
| C (columns) | 350–150 twice, 150–350 three times | 2–3 | 650 | 600 | +2% |

Take Map A as a check. Blue loses every district, so all $5 \times 230 = 1{,}150$ of its votes are wasted. Red wastes $270 - 250 = 20$ per district, or 100 in all. That gives $\text{EG} = (1{,}150-100)/2{,}500 = 42\%$ against Blue. Map A **cracks** Blue: 46% everywhere, so it wins nothing. Map B **packs** Red into two 70% districts and spreads Blue just over the line in three. Map C sits near zero, though it packs Blue at 70% in two districts.

**Example 2 (hard): the rule that runs out.** Suppose Istmark adopts UK-style rules: equal electorates within 5%, contiguous districts, and compact shapes. Maps A and C are both five perfect rectangles of exactly 500 voters, so both pass every rule. Map B fails only on compactness. So the equal-size rule does its job, which is preventing malapportionment, but it cannot choose between a 0–5 map and a 2–3 map. Here the rule runs out and discretion takes over. The UK statute lets a commission weigh "local ties" and local-government boundaries "if and to such extent as they think fit". If the ten Blue precincts form one town, a commission keeping the town in as few districts as possible picks C. A commission that reads local ties differently could defend A. What decides, then, is *who holds the pen*: a commission with that discretion, or a legislature whose majority knows Map A gives it every seat.

## Watch out

- **You might think equal-population districts rule out gerrymandering, but actually they rule out only [malapportionment](../reference.md#malapportionment).** All three maps above have equal-sized districts, and they span 0 to 3 Blue seats. The two need different remedies: a quota rule for the first, control over who draws the lines for the second.
- **You might think a large efficiency gap proves a [gerrymander](../reference.md#gerrymandering), but actually the gap is a mechanical fact about a map, and intent is an empirical inference.** Geography alone can pack a party, and with few districts a single close race swings the gap by many points.
- **You might think the winners under plurality never change the rules, but actually the seat-maximizing view predicts reform whenever expected seat gains line up with the power to enact it.** A party may also adopt PR as insurance when it expects to lose under plurality, as Carles Boix argued for the early-twentieth-century adoptions. Referendums can force a change no governing party wants, as New Zealand's did.

## One-liner

> Unequal districts and cleverly drawn equal ones both work by deciding whose votes are wasted, so who holds the pen matters as much as the formula; and rules change mainly when the people who must vote for the change expect to gain from it, or when voters take the decision away from them.

## Problems

**P1 (🟢) *(Formal (a) · Exegetical (b).)*** Invented numbers. An Istmark island council has five single-member districts with populations 10,000, 15,000, 20,000, 25,000 and 30,000. (a) Compute the Samuels–Snyder MAL index, and the smallest share of the population that could elect a council majority. (b) The council redraws to five districts of 20,000 each, and a member declares, "Now the map is fair to every party." In two sentences, say what the redraw does guarantee and what it does not.

**P2 (🟡) *(Formal (a)–(b) · Exegetical (c).)*** Invented numbers. A 16-precinct city, 100 voters per precinct. An **A** precinct votes 75 for party A and 25 for B; a **b** precinct votes 35 for A and 65 for B.

| | col 1 | col 2 | col 3 | col 4 |
|---|---|---|---|---|
| row 1 | A | A | b | b |
| row 2 | A | b | A | b |
| row 3 | A | b | b | A |
| row 4 | A | b | b | b |

Map X makes each row a district; Map Y makes each column a district. (a) Find A's citywide vote share and its seats under each map. (b) Compute the efficiency gap $(W_A - W_B)/V$ for Map Y. (c) In Map Y, which A precincts are packed and which are cracked? One sentence.

**P3 (🔴, optional) *(Exegetical (a) · Evaluative (b).)*** Diagnose. An **invented** memo, not the words of any real person or party:

> "Istmark's Harbour Party has won three straight elections under plurality in 90 single-member districts, the last with 47 seats on 38% of the vote. The two opposition parties have just agreed to run a single candidate in every district. Harbour now proposes list PR in nine 10-seat districts, allocated by D'Hondt, from the next election. The electoral law is an ordinary statute. Harbour's leader says the party is 'giving up its advantage for the sake of fairness.'"

(a) Under the seat-maximizing view, explain in two sentences what seat interest the proposal most plausibly serves, and name one design detail that points the same way. (b) Does the seat-maximizing view settle whether this reform will pass and last? Name the rule that decides passage, and say where the view stops determining the outcome. 100 words or fewer; any verdict passes.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a) — strict · Exegetical (b) — strict)*

(a) The population is 100,000, so the population shares are 10, 15, 20, 25 and 30%. Each seat share is 20%.

$$\text{MAL} = \tfrac12(10 + 5 + 0 + 5 + 10) = 15\% .$$

A majority is 3 of 5 seats. The three smallest districts hold $10 + 15 + 20 = 45\%$ of the population. Bare majorities in those three, about **22.5% of the population**, could elect a majority of the council.

**Must hit, strict (a):**

- MAL = 15%.
- Smallest majority-electing share ≈ 22.5% (45% of the population lives in the three smallest districts, and half of that wins them).

**Must hit, strict (b):**

- It guarantees equal population per seat (MAL = 0): every resident's vote has the same weight in the seat count.
- It does not prevent gerrymandering. Equal districts can still pack or crack a party's voters, so the claim of fairness "to every party" does not follow.

**Wrong turns:** answering 45% for the majority-electing share, which forgets that a party needs only half the voters in each district; treating MAL = 0 as proof of partisan fairness.

---

**P2** *(Formal (a)–(b) — strict · Exegetical (c) — strict)*

(a) There are 7 A precincts and 9 b precincts. A has $7 \times 75 + 9 \times 35 = 840$ of $1{,}600$ votes, or **52.5%**. A district with $k$ A precincts gives A $75k + 35(4-k) = 140 + 40k$ of 400 votes, so A wins when $k \ge 2$.

| Map | $k$ by district | A–B votes | Seats A–B |
|---|---|---|---|
| X (rows) | 2, 2, 2, 1 | 220–180 three times, 180–220 | **3–1** |
| Y (columns) | 4, 1, 1, 1 | 300–100, then 180–220 three times | **1–3** |

(b) Map Y, with half of a district's votes = 200:

| District | A wasted | B wasted |
|---|---|---|
| col 1 (A 300–100) | 100 | 100 |
| col 2 (B 220–180) | 180 | 20 |
| col 3 | 180 | 20 |
| col 4 | 180 | 20 |
| **Total** | **640** | **160** |

$$\text{EG} = \frac{640 - 160}{1{,}600} = 30\% \text{ against A.}$$

(For comparison, Map X gives $(240 - 560)/1{,}600 = -20\%$, against B.)

(c) Column 1's four A precincts are packed into one district A wins 75%–25%. The other three A precincts, (row 1, col 2), (row 2, col 3) and (row 3, col 4), are cracked, one into each of three districts that A loses.

**Must hit, strict:**

- (a) 52.5%; Map X gives A 3–1, Map Y gives A 1–3.
- (b) $W_A = 640$, $W_B = 160$, EG = 30% against A.
- (c) Packed: column 1. Cracked: the three remaining A precincts, one per losing district.

**Wrong turns:** counting all of the winner's votes as wasted, or none of them (only the surplus over 200 is wasted); calling Map X a gerrymander *against* A because it gives B a seat (it favours A: 3 of 4 seats on 52.5%).

---

**P3** *(Exegetical (a) — strict · Evaluative (b) — any verdict)*

**Must hit, strict (a):**

- Insurance. Harbour won under plurality because the opposition was split. A single opposition candidate per district could leave Harbour, at 38%, losing most districts. Under PR it would keep roughly its vote share of seats. So the proposal limits expected losses rather than giving up a secure advantage.
- One design detail, either of: D'Hondt, the divisor method that most favours the largest party ([1.4](01-04-list-pr-divisor-methods.md)); or the 10-seat districts, whose [effective threshold](../reference.md#effective-threshold) of about $75\%/11 \approx 6.8\%$ ([2.2](02-02-district-magnitude-and-thresholds.md)) screens out small parties more than a single national district would. The timing (from the next election) also fits.

**Must hit, any verdict (b):**

- The rule that decides passage: the electoral law is an ordinary statute, so Harbour's legislative majority can enact it alone.
- Where the view runs out: it predicts each party's position but not the outcome beyond the vote. Voters may punish a self-serving change. Seat forecasts may be wrong. A later majority can repeal an ordinary statute. A referendum or public pressure can override party interest, as in New Zealand.
- The evidence that would move the diagnosis: whether Harbour backed PR when it was winning, and whether the details serve the largest party beyond what proportionality needs.

**Wrong turns:** taking the leader's statement as evidence of motive, when the diagnosis rests on the seat arithmetic; treating D'Hondt in 10-seat districts as fully proportional.

**Model answer (b), one of several:** Only passage, not durability. Because the law is an ordinary statute, Harbour's majority decides whether it passes, and the seat-maximizing view correctly predicts that Harbour will vote for it and the newly united opposition against. Beyond that it says little. Voters may punish a rule change that looks self-serving. The opposition, if it wins under the new rules or despite them, can repeal an ordinary statute by the same simple majority. And seat forecasts are guesses. Whether the reform lasts depends on public legitimacy and on who controls the next majority, which the view does not model.

</details>

## Flashback

**From Lesson [2.2](02-02-district-magnitude-and-thresholds.md) (District magnitude and thresholds):** *(Formal (a) · Exegetical (b).)* Find the crux. Invented numbers. The invented country of Thalland elected its 64-seat assembly in single-member districts. A reform kept 64 seats but elected them in four 16-seat districts by D'Hondt, with no legal threshold. Two elections later, the effective number of parties by seats is 3.3. (a) Compute the effective threshold $75\%/(M+1)$ before and after the reform, and the seat-product prediction $N_s \approx (MS)^{1/6}$ before and after. Powers of 2 make it hand-computable. (b) Two **invented** analysts, not real people. X: "The reform caused the fragmentation; the seat product predicted it almost exactly." Y: "The parties were already fragmenting, and the ones that passed the reform chose 16-seat districts because they expected to gain from them." Name the premise on which they disagree, say why the 3.3 cannot settle it, and name one piece of evidence that would move either analyst. 80 words or fewer for (b).

<details>
<summary>Solution</summary>

(a) Before, $M = 1$: $T_{\text{eff}} = 75\%/2 = 37.5\%$, and

$$N_s \approx 64^{1/6} = 2 .$$

After, $M = 16$: $T_{\text{eff}} = 75\%/17 \approx 4.41\%$, and

$$N_s \approx (16 \times 64)^{1/6} = 1024^{1/6} = 2^{10/6} \approx 3.17 .$$

**Must hit, strict (b):**

- The crux is the direction of causation: X holds that magnitude produced the multiparty system, Y that a fragmenting party system produced the choice of magnitude.
- The 3.3 cannot decide it, because both stories predict roughly that number after the reform; a fit to the seat product's average (which has real scatter anyway) is not a test between them.
- Evidence must be something only one story predicts: for example, the effective number of parties *by votes* in the elections before the reform, the timing of new parties' appearance, or whether the reform was imposed by an actor with no seat stake (a court, a citizen-initiated referendum) rather than chosen by the parties that gained.

**Wrong turns:** treating the closeness of 3.3 to 3.17 as confirming X; reading Y as denying the mechanical effect. Y can grant that 16-seat districts cut the effective threshold from 37.5% to about 4.4% and still hold that the fragmentation came first and chose the rule.

**Model answer (b):** They disagree about which way causation runs: X says magnitude made the multiparty system, Y that a multiparty system chose the magnitude. Both predict about 3.3 after the reform, so the fit cannot separate them. Pre-reform vote fragmentation would: if votes were already split among three or more parties under single-member districts, Y gains; if the new parties appeared only after the reform, X does.

</details>

## Connections

- **Backward:** wasted votes and the mechanical effect come from [2.3](02-03-duvergers-law-observed.md). The effective threshold that P3 uses is [2.2](02-02-district-magnitude-and-thresholds.md)'s. The reforms land on systems computed in [1.2](01-02-ranked-ballots-the-alternative-vote-and-stv.md) (AV) and [1.5](01-05-mixed-systems-mmp-and-parallel.md) (MMP and parallel). The MAL index is [2.1](02-01-measuring-outcomes.md)'s Loosemore–Hanby formula with population shares in place of vote shares.
- **Forward:** [3.1](03-01-parliamentary-government.md) begins Module 3, where the seat shares these rules produce decide who governs. [3.2](03-02-forming-governments-coalitions-and-minorities.md) covers the coalitions and minority governments that become routine once a country leaves plurality for PR. [6.3](06-03-direct-democracy.md) classifies referendums, the device that decided two of the three reforms here.
- **Sideways:** Mill backed Hare's quota scheme against the plurality system of his day ([`history-of-political-thought` 6.4](../../history-of-political-thought/lessons/06-04-mill-representative-government.md)), an early reform argument made from outside the parties. US redistricting doctrine is [constitutional-law](../../constitutional-law/syllabus.md)'s. Estimating what reforms actually changed is [empirical-political-economy](../../empirical-political-economy/syllabus.md)'s. The strategic-voting model behind wasted votes is [political-economy](../../political-economy/syllabus.md)'s.
