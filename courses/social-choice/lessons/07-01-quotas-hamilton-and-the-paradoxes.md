# Social Choice · Lesson 7.1: Quotas, Hamilton, and the paradoxes

> ⏱ ~15 min · Module 7: Apportionment · Builds on: [1.3 Arrow as a map](01-03-arrow-as-a-map.md), [`political-institutions` 1.3](../../political-institutions/lessons/01-03-list-pr-quotas-and-largest-remainders.md) · Unlocks: [7.2 Divisor methods and Balinski–Young](07-02-divisor-methods-and-balinski-young.md)

## Why this matters

The US Constitution apportions House seats among the states by population. A state whose population is worth 4.32 seats must get a whole number of them, and the rule for the fractions moves real seats. The obvious rule, round everyone down and hand the leftover seats to the largest fractions, is Hamilton's method. It is also exactly the Hare largest-remainder count that [`political-institutions` 1.3](../../political-institutions/lessons/01-03-list-pr-quotas-and-largest-remainders.md) uses for party lists, with states for parties and population for votes. This lesson proves that Hamilton's method is as close to exact proportionality as whole seats allow, then shows it doing three things no one would design on purpose. [1.3](01-03-arrow-as-a-map.md) flagged apportionment as Arrow's cousin: the aggregation problem with integers in place of rankings. Here is the first half of its impossibility.

## The idea

Each state has an exact entitlement, its **quota**: its share of the population times the house size. Quotas are almost never whole numbers. Rounding each one to a neighbouring integer seems the least a fair method must do, and Hamilton's method does it.

But Hamilton's method never looks at a quota alone. It ranks *leftover fractions* against each other, and those fractions move at different speeds when anything changes. Add a seat to the house and a big state's quota rises by more than a small state's. Its fraction can lap the small state's, and the small state can lose a seat that a larger house should only have made easier to keep. The first such reversal to be noticed is named after the state it hit.

## The result

**Setting.** States $i = 1, \dots, s$ have populations $p_i > 0$, with total $P = \sum_i p_i$. A house of $h$ seats is to be shared out. An **apportionment** is a vector of non-negative integers $a = (a_1, \dots, a_s)$ with $\sum_i a_i = h$.

**[Quota](../reference.md#quota).** The **standard divisor** is $P/h$, the population per seat. State $i$'s quota is

$$q_i = \frac{h\,p_i}{P} = \frac{p_i}{P/h},$$

with **lower quota** $\lfloor q_i \rfloor$ and **upper quota** $\lceil q_i \rceil$. *In words:* the quota is the number of seats state $i$ would get if seats could be cut into fractions. The quotas sum to $h$.

**[Quota rule](../reference.md#quota-rule).** An apportionment satisfies quota if $\lfloor q_i \rfloor \le a_i \le \lceil q_i \rceil$ for every $i$. *In words:* no state is ever a whole seat or more away from its exact entitlement.

**[Hamilton's method](../reference.md#hamiltons-method).** Give each state $\lfloor q_i \rfloor$. Let $r_i = q_i - \lfloor q_i \rfloor$ be its remainder. The $L = h - \sum_i \lfloor q_i \rfloor$ leftover seats go one each to the $L$ states with the largest remainders. (The step-by-step count is [`political-institutions` 1.3](../../political-institutions/lessons/01-03-list-pr-quotas-and-largest-remainders.md)'s; ties at the cut are ignored throughout.) Alexander Hamilton proposed it in 1792; Congress adopted it, as Vinton's method, in the second half of the nineteenth century.

**Proposition 1.** (a) Hamilton's apportionment satisfies quota. (b) Among all apportionments it uniquely minimizes the total deviation $D(a) = \sum_i |a_i - q_i|$.

*In words:* Hamilton's method is the apportionment closest to exact proportionality, counted in seats state by state.

*Proof.*

1. (a) $\sum_i q_i = h$, so $L = \sum_i r_i$, an integer. Each $r_i < 1$, so if $L > 0$ more than $L$ states have $r_i > 0$. The $L$ largest remainders are therefore all positive. Each of those states rises from $\lfloor q_i \rfloor$ to $\lceil q_i \rceil$; every other state stays at $\lfloor q_i \rfloor$.
2. (b) First, any minimizer satisfies quota. Suppose $a_i > \lceil q_i \rceil$, so $a_i \ge q_i + 1$. Since $\sum_k (a_k - q_k) = 0$, some $j$ has $a_j < q_j$. Move one seat from $i$ to $j$. State $i$'s term falls by exactly 1. State $j$'s term falls by 1 if $a_j + 1 \le q_j$; otherwise it rises by $(a_j + 1 - q_j) - (q_j - a_j) = 1 - 2(q_j - a_j) < 1$. Either way $D$ strictly falls. The case $a_i < \lfloor q_i \rfloor$ is the mirror image (move a seat from some $j$ with $a_j > q_j$ to $i$).
3. So a minimizer has $a_i = \lfloor q_i \rfloor + u_i$ with $u_i \in \{0, 1\}$, $u_i = 0$ whenever $r_i = 0$, and $\sum_i u_i = L$. Then

$$D(a) = \sum_{u_i = 0} r_i + \sum_{u_i = 1} (1 - r_i) = \sum_i r_i + \sum_{u_i = 1} (1 - 2 r_i).$$

4. The first sum is fixed, and each $u_i = 1$ adds $1 - 2r_i$, which is smaller the larger $r_i$ is. So $D$ is minimized exactly by giving the $L$ extra seats to the $L$ largest remainders, which is Hamilton's method. ∎

Now three properties that say how an apportionment should respond to change.

- **House monotonicity.** If $h$ rises to $h + 1$ with populations fixed, no state's $a_i$ falls. A failure is the **[Alabama paradox](../reference.md#alabama-paradox)**.
- **Population monotonicity** (Balinski and Young's form). At a fixed $h$, if populations change from $p$ to $p'$ and state $i$ grows by a strictly larger factor than state $j$ ($p'_i/p_i > p'_j/p_j$), then it is not the case that $i$ loses a seat while $j$ gains one. A failure is the **[population paradox](../reference.md#population-paradox)**.
- **Coherence for new states.** If a new state joins and the house grows by exactly the seats the method then gives it, every old state keeps its delegation. A failure is the **[new-states paradox](../reference.md#new-states-paradox)**.

**Proposition 2.** Hamilton's method satisfies none of the three.

*Proof.* Example 1 below is an Alabama paradox, Example 2 a population paradox, and P1 a new-states paradox. Each is checked by direct computation. ∎

The common cause: every quota is $h p_i / P$, so any change in $h$ or $P$ rescales *all* quotas at once. Adding one seat raises $q_i$ by $p_i/P$, so large states' remainders move fastest and can wrap past a small state's. Hamilton's method then reads the new ranking of remainders, though nothing about the small state has changed.

The names come from US history. After the 1880 census, the Census Office's chief clerk, C. W. Seaton, computed Hamilton apportionments for a range of house sizes. Alabama got 8 seats in a House of 299 and 7 in a House of 300. The other two paradoxes surfaced soon after: Virginia and Maine around 1900, and the admission of Oklahoma in 1907.

**Where the argument is weakest.** Proposition 1 is a theorem, but its benchmark is a choice: closeness is measured by *absolute* seat deviations, state by state. Critics measure fairness by comparing representation per person between pairs of states, and by such measures the divisor methods of [7.2](07-02-divisor-methods-and-balinski-young.md) can do better. The paradoxes are also comparisons across counterfactual houses and censuses, only one of which is ever enacted. A defender of Hamilton can say each census is a separate problem and quota is all fairness asks within it. A critic replies that a rule whose verdict for Alabama depends non-monotonically on an arbitrary house size is not tracking anything about Alabama. The arithmetic settles which property fails. Which property matters more, it leaves open.

## Picture

![Line chart of seats against house size from 4 to 14 for three states with populations 150, 370 and 480 out of 1,000, apportioned by Hamilton's method. The two larger states' seat counts never fall. The smallest state, A, has 2 seats at house size 9 and only 1 at house size 10, then 2 again from 11 on](assets/07-01-fig1.svg)

*Every line should be a staircase that only climbs. State A's dips once: at $h = 10$ the two larger states' remainders both overtake A's.*

## Worked examples

**Example 1 (clean): an Alabama paradox.** States A, B, C have populations 150, 370 and 480 (thousands), so $P = 1{,}000$.

| $h$ | Divisor | Quotas A, B, C | Floors | $L$ | Remainders | Hamilton |
|---|---|---|---|---|---|---|
| 9 | 111.11 | 1.35, 3.33, 4.32 | 1, 3, 4 | 1 | .35, .33, .32 | **2**, 3, 4 |
| 10 | 100 | 1.50, 3.70, 4.80 | 1, 3, 4 | 2 | .50, .70, .80 | **1**, 4, 5 |

At $h = 9$, A's remainder is the largest of three nearly equal ones, and it takes the only leftover seat. The tenth seat raises the quotas by 0.15, 0.37 and 0.48. B's and C's remainders jump to .70 and .80, A's creeps to .50, and the two leftover seats go past A. The house grew, A's population and share did not change, and A lost a seat. Across $h = 4, \dots, 14$ this is the only drop (the figure).

**Example 2 (where Proposition 1 stops): a population paradox.** Keep $h = 9$ and the starting populations above, apportioned 2, 3, 4. A decade later A has grown to 160, C has shrunk to 470, and B has lost a large share of its people, falling to 270. Now $P = 900$ and the divisor is 100.

| | Quotas A, B, C | Floors | $L$ | Remainders | Hamilton |
|---|---|---|---|---|---|
| before | 1.35, 3.33, 4.32 | 1, 3, 4 | 1 | .35, .33, .32 | **2**, 3, **4** |
| after | 1.60, 2.70, 4.70 | 1, 2, 4 | 2 | .60, .70, .70 | **1**, 3, **5** |

A grew (by a factor of 1.067), C shrank (0.979), and a seat moved from A to C: a population paradox in its starkest form. Stranger still, A's *quota* rose from 1.35 to 1.60 and A still lost a seat. B's floor fell from 3 to 2, opening a second leftover seat. The second round of remainders was won by C's .70 and B's .70, and A's .60 came third.

Proposition 1 holds in both rows: each apportionment is the closest one to its own quotas. Closeness within one census says nothing about how the apportionment moves between censuses. That is the gap the paradoxes live in.

## Watch out

- **You might think the Alabama paradox shows that satisfying quota is the problem, but actually it is Hamilton's way of satisfying quota.** Balinski and Young (1975) built a "quota method" that always satisfies quota and is house monotone. What cannot be had together, once there are enough states, is quota and *population* monotonicity: the [Balinski–Young theorem](../reference.md#balinski-young-theorem) of [7.2](07-02-divisor-methods-and-balinski-young.md).
- **You might think the population paradox needs a state's quota to fall, but actually Example 2's loser saw its quota rise.** Hamilton's method compares remainders, and another state's floor dropping changed how many leftover seats there were to compete for. P3 proves what extra hypothesis rules this out.
- **You might think "the new state gets its fair share" means the house grows by its quota.** Quotas are fractional; the house grows by a whole number of seats. Unless that number is exactly the new state's quota at the old divisor, the divisor moves and every old quota is rescaled. P1 shows the consequence.

## One-liner

> Hamilton's method is the closest rounding of the quotas for any one census, but it ranks fractions, and fractions reshuffle whenever the house or the population moves, so seats can flow the wrong way.

## Problems

**P1 (🟢) *(Formal (a)–(b).)*** Four states A, B, C, D have populations 100, 130, 140 and 630 (thousands) and a house of 10 seats.
(a) Find the standard divisor, each quota and the Hamilton apportionment, and confirm it satisfies quota.
(b) A new state E with population 250 joins, and the house grows by 3 seats to 13. Apportion it by Hamilton's method. Does E get 3 seats? Does any old state's delegation change? In one sentence, say why.

**P2 (🟡) *(Formal (a)–(b).)*** (a) Prove that with two states, Hamilton's method never produces an Alabama paradox (ignore ties).
(b) Three states have populations 200, 330 and 470 (thousands). Apportion by Hamilton's method at $h = 6$, 7 and 8, identify the paradox, and say whose remainders overtook whose.

**P3 (🔴, optional) *(Formal (a)–(b).)*** (a) The house has 7 seats. The populations of A, B, C move from 220, 260, 520 to 250, 400, 600. Apportion both by Hamilton's method, compute each state's growth rate, and identify the pair of states that violates population monotonicity.
(b) Prove: at a fixed house size, if state $i$'s quota rises and every other state's quota falls, Hamilton's method does not take a seat from $i$ (assume no remainder ties at the cut). Then say in one line which hypothesis Example 2 shows cannot be dropped.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b).)*

(a) $P = 1{,}000$, standard divisor $P/h = 100$. Quotas 1.0, 1.3, 1.4, 6.3; floors 1, 1, 1, 6 sum to 9, so $L = 1$. Remainders 0, .3, .4, .3: the seat goes to C. **Hamilton: A 1, B 1, C 2, D 6.** Each $a_i$ is $\lfloor q_i \rfloor$ or $\lceil q_i \rceil$ (A's quota is exactly 1, and it gets 1), so quota holds.

(b) $P = 1{,}250$, $h = 13$, divisor $1{,}250/13 \approx 96.15$. Quotas 1.040, 1.352, 1.456, 6.552, 2.600; floors 1, 1, 1, 6, 2 sum to 11, so $L = 2$. Remainders .040, .352, .456, .552, .600: the seats go to E (.600) and D (.552), and C's .456 misses. **Hamilton: A 1, B 1, C 1, D 7, E 3.**

E gets its 3 seats, but **C loses a seat to D**: a new-states paradox. Why: at the old divisor of 100, E's quota is 2.5, so adding 3 seats lowers the divisor and multiplies every old quota by $13{,}000/12{,}500 = 1.04$; D's quota rises by .252 and C's by only .056, so D's remainder overtakes C's.

**Wrong turns:** keeping the old divisor of 100 for the new house. Apportioning E first and then the old states among the remaining 10 seats, which assumes the coherence that fails.

---

**P2** *(Formal (a)–(b).)*

(a) *Proof.*

1. With two states, $q_1 + q_2 = h$ is an integer, so $r_1 + r_2$ is 0 or 1.
2. If $r_1 = r_2 = 0$, both quotas are whole and $a_i = q_i$.
3. Otherwise $r_1 + r_2 = 1$ and $L = 1$, so the seat goes to the state with remainder above $\tfrac12$ (a remainder of exactly $\tfrac12$ is a tie, excluded).
4. In both cases $a_i$ is $q_i$ rounded to the nearest integer.
5. Raising $h$ to $h + 1$ raises $q_i$ by $p_i/P > 0$. Rounding to the nearest integer never decreases when its argument rises. So $a_i(h+1) \ge a_i(h)$ for both states. ∎

(b)

| $h$ | Quotas A, B, C | Floors | $L$ | Remainders | Hamilton |
|---|---|---|---|---|---|
| 6 | 1.20, 1.98, 2.82 | 1, 1, 2 | 2 | .20, .98, .82 | 1, 2, 3 |
| 7 | 1.40, 2.31, 3.29 | 1, 2, 3 | 1 | .40, .31, .29 | **2**, 2, 3 |
| 8 | 1.60, 2.64, 3.76 | 1, 2, 3 | 2 | .60, .64, .76 | **1**, 3, 4 |

From 7 to 8 seats, **A falls from 2 to 1**: an Alabama paradox. Each added seat raises the quotas by 0.20, 0.33 and 0.47. C's remainder (.29 to .76) and B's (.31 to .64) jump past A's (.40 to .60), while the number of leftover seats only rises from 1 to 2.

**Wrong turns:** stopping at $h = 6 \to 7$, where every state holds or gains. In (a), arguing only that the quota rises, without the step that turns Hamilton into nearest-integer rounding when there are two states. That step is where the two-state case differs from three.

---

**P3** *(Formal (a)–(b).)*

(a) Before: $P = 1{,}000$, divisor 142.86, quotas 1.54, 1.82, 3.64; floors 1, 1, 3, so $L = 2$, to B (.82) and C (.64). **Before: 1, 2, 4.** After: $P = 1{,}250$, divisor 178.57, quotas 1.40, 2.24, 3.36; floors 1, 2, 3, so $L = 1$, to A (.40, beating C's .36). **After: 2, 2, 3.**

Growth: A 13.6%, B 53.8%, C 15.4%. **C grew faster than A, yet C lost a seat to A.** The pair (C, A) violates population monotonicity. (B's rapid growth raised the total, shrank A's and C's quotas, and its floor rose from 1 to 2, leaving only one leftover seat.)

(b) *Proof.* Write $f_k = \lfloor q_k \rfloor$, $f'_k = \lfloor q'_k \rfloor$, and likewise $r_k, r'_k$, $L, L'$.

1. Since $q'_i > q_i$, $f'_i \ge f_i$. If $f'_i > f_i$, then $a'_i \ge f'_i \ge f_i + 1 \ge a_i$. Done.
2. So let $f'_i = f_i$; then $r'_i > r_i$. If $a_i = f_i$, then $a'_i \ge f'_i = a_i$. Done.
3. So let $i$ have won a leftover seat before: at most $L - 1$ states had $r_k > r_i$.
4. For $k \ne i$, $q'_k < q_k$, so $f'_k \le f_k$. Let $D = \sum_{k \ne i} (f_k - f'_k) \ge 0$. Then $L' = h - \sum_k f'_k = L + D$.
5. Which $k$ now have $r'_k > r'_i$? If $f'_k = f_k$, then $r'_k < r_k$ and $r'_i > r_i$, so $r'_k > r'_i$ forces $r_k > r_i$: at most $L - 1$ such states. States with $f'_k < f_k$ number at most $D$.
6. So at most $L - 1 + D = L' - 1$ states rank above $i$, and $i$ wins one of the $L'$ leftover seats: $a'_i = f_i + 1 = a_i$. ∎

In Example 2, A's quota rose and A still lost a seat, because C's quota rose too (4.32 to 4.70). **"Every other quota falls" cannot be dropped.**

**Wrong turns:** in (a), comparing growth in seats or in quotas instead of growth in population, which is what the axiom is stated in. In (b), forgetting that a falling floor elsewhere adds a leftover seat; step 4 is the whole proof.

</details>

## Flashback

**From Lesson [6.2](06-02-range-voting-and-majority-judgment.md) (Grading ballots: range voting and majority judgment):** *(Formal (a)–(b).)* Four voters grade J, K, L on the scale Reject 0, Poor 1, Fair 2, Good 3, Very good 4, Excellent 5:

| Voter | J | K | L |
|---|---|---|---|
| 1 | 4 | 0 | 3 |
| 2 | 2 | 3 | 1 |
| 3 | 4 | 5 | 2 |
| 4 | 2 | 3 | 4 |

(a) Find the range ranking and the majority-judgment ranking, giving each candidate's majority grade.

(b) Keep the six words and their order, but attach different numbers to them: any strictly increasing relabelling $f(0) < f(1) < \dots < f(5)$. Give one under which K is the unique range winner. Prove that no such relabelling makes L a range winner, even in a tie, and say in one sentence why none changes the majority-judgment ranking.

<details>
<summary>Solution</summary>

**Accept (b):** any strictly increasing relabelling that gives K a strictly larger total than J and L; the model answer stretches the top gap.

(a) Sorted high to low: J 4, 4, 2, 2; K 5, 3, 3, 0; L 4, 3, 2, 1. Range totals J 12, K 11, L 10, so **range: J ≻ K ≻ L**.

With $n = 4$ the majority grade is the lower middle grade, $r_3$: $\alpha(J) = 2$ (Fair), $\alpha(K) = 3$ (Good), $\alpha(L) = 2$ (Fair). K wins outright. J and L tie at Fair; delete one 2 from each, leaving J 4, 4, 2 and L 4, 3, 1, with middle grades 4 and 3. **Majority judgment: K ≻ J ≻ L**, majority values (3, 3, 0, 5), (2, 4, 2, 4) and (2, 3, 1, 4). It elects the one candidate somebody graded Reject, because three of four voters grade K Good or better.

(b) Make Excellent 7 and leave the rest. Totals: J $4 + 2 + 4 + 2 = 12$, K $0 + 3 + 7 + 3 = 13$, L $3 + 1 + 2 + 4 = 10$. **K wins.** In general the K-minus-J total is $f(0) + 2f(3) + f(5) - 2f(2) - 2f(4)$, which is $-1$ on the original numbers, so widening the gap below Excellent is what rewards K's single top grade.

*L never.* Pair the sorted lists: J 4, 4, 2, 2 against L 4, 3, 2, 1. For every strictly increasing $f$,

$$\text{total}(J) - \text{total}(L) = \big(f(4) - f(3)\big) + \big(f(2) - f(1)\big) > 0,$$

so J beats L under every relabelling, and L cannot even tie for first. ∎

*Majority judgment.* Every step reads a $k$-th highest grade, and a strictly increasing $f$ commutes with taking the $k$-th highest, so each majority value is relabelled term by term and every lexicographic comparison survives: K ≻ J ≻ L for every $f$.

**Wrong turns:** taking the upper middle grade $r_2$ for four voters, which gives J Very good against Good for K and L and wrongly elects J. Thinking a relabelling is a change of ballots: no voter's words or ranking moved, only the arithmetic range voting does on the words.

</details>

## Connections

- **Backward:** the counting is the Hare largest-remainder rule of [`political-institutions` 1.3](../../political-institutions/lessons/01-03-list-pr-quotas-and-largest-remainders.md), whose closing paragraph points here for the Alabama paradox. [1.3](01-03-arrow-as-a-map.md) placed apportionment on the map as Arrow's cousin. Here the "axioms" are quota and three monotonicity properties, and the inputs are populations, not rankings.
- **Forward:** [7.2](07-02-divisor-methods-and-balinski-young.md) replaces "round down, then rank remainders" with "choose a divisor, then round every quotient by one rule". That buys population monotonicity and loses quota, and the [Balinski–Young theorem](../reference.md#balinski-young-theorem) says some such trade is forced.
- **Sideways:** monotonicity failures are not special to seats. Instant runoff can punish extra support ([2.4](02-04-monotonicity-and-participation.md)) through a similar mechanism: a round that reads a ranking of leftovers, elimination order there and remainders here, can reshuffle when an input moves the right way. Party-list counts inherit every paradox here, with votes for population and district magnitude for house size ([`political-institutions` 1.4](../../political-institutions/lessons/01-04-list-pr-divisor-methods.md) for the divisor side).
