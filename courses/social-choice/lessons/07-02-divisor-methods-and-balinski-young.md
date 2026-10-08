# Social Choice · Lesson 7.2: Divisor methods and Balinski–Young

> ⏱ ~15 min · Module 7: Apportionment · Builds on: [7.1 Quotas, Hamilton, and the paradoxes](07-01-quotas-hamilton-and-the-paradoxes.md), [`political-institutions` 1.4](../../political-institutions/lessons/01-04-list-pr-divisor-methods.md) · Unlocks: the end of the course (see Closing the course)

## Why this matters

[7.1](07-01-quotas-hamilton-and-the-paradoxes.md) showed Hamilton's method keeping every state within its quota and paying with the Alabama and population paradoxes. The natural repair is to stop ranking leftovers and round every state by one rule. Those are the divisor methods. The US House has used one, Hill–Huntington ("equal proportions"), since Congress adopted it in 1941 after the 1940 census. Divisor methods cure both paradoxes and sometimes give a state a seat count outside its quota. Michel Balinski and H. Peyton Young proved the trade is forced: with four or more states, no method has both properties. It is the course's last impossibility theorem, Arrow's shape with integers in place of rankings.

## The idea

Hamilton fixes the total first and argues over remainders. A divisor method fixes a *price* per seat, divides every population by it, and rounds each result by the same rule. If the rounded numbers add to more than the house, raise the price; if fewer, lower it. A state's seats then depend only on its own population and the common price. That is why a state that gains ground can never lose a seat to the state it gained on.

The classical methods differ only in where they round: Jefferson down, Adams up, Webster to the nearest whole number, Hill–Huntington at the geometric mean of the two neighbouring integers. [`political-institutions` 1.4](../../political-institutions/lessons/01-04-list-pr-divisor-methods.md) counts Jefferson's and Webster's methods as D'Hondt and Sainte-Laguë; here they are rules about states.

Rounding down shaves a fraction off every state, so the price must fall to hand the seats back, and big states collect most of them. That is the bias. Push it far enough and a big state collects a whole seat beyond its quota. That is how quota breaks.

## The result

**Setting.** As in [7.1](07-01-quotas-hamilton-and-the-paradoxes.md): states $1, \dots, s$ with populations $p_i > 0$, total $P$, house size $h$, [quota](../reference.md#quota) $q_i = h p_i / P$, and the [quota rule](../reference.md#quota-rule) $\lfloor q_i \rfloor \le a_i \le \lceil q_i \rceil$.

**Divisor method.** A rounding rule is an increasing sequence of thresholds $\delta(0) < \delta(1) < \cdots$ with $k \le \delta(k) \le k + 1$. A number $x \ge 0$ rounds to $k$ when $\delta(k-1) < x < \delta(k)$, with $\delta(-1) = 0$; exactly at a threshold either neighbour is allowed. The [divisor method](../reference.md#divisor-method) sets

$$a_i = \operatorname{round}(p_i / d), \quad \text{for any divisor } d > 0 \text{ with } \sum_i a_i = h.$$

*In words:* one price per seat for every state, then one rounding rule for every state.

| Method | Threshold $\delta(k)$ | Rounds the quotient |
|---|---|---|
| [Jefferson](../reference.md#jeffersons-method) | $k + 1$ | down |
| Adams | $k$ | up |
| [Webster](../reference.md#websters-method) | $k + \tfrac12$ | to the nearest integer |
| [Hill–Huntington](../reference.md#hill-huntington-method) | $\sqrt{k(k+1)}$ | up iff above the geometric mean |

Adams and Hill–Huntington have $\delta(0) = 0$, so every state gets at least one seat. Seat by seat, each method gives the next seat to the largest $p_i / \delta(a_i)$; for Hill–Huntington that is the Census Bureau's priority value $p/\sqrt{n(n-1)}$ for a state's $n$-th seat.

**Monotonicity.** *House monotone:* raising $h$ never takes a seat from any state. *Population monotone* (Balinski and Young): compare two problems $(p, h)$ and $(p', h')$; if $p'_i / p'_j > p_i / p_j$, it is never the case that $a'_i < a_i$ and $a'_j > a_j$. *In words:* a state that gains ground on another never loses a seat to it. With $h' = h$ this is [7.1](07-01-quotas-hamilton-and-the-paradoxes.md)'s condition, whose failure is the [population paradox](../reference.md#population-paradox).

**Proposition 1.** Every divisor method is population monotone and house monotone.

*Proof.* Let $d, d'$ be working divisors and suppose $a'_i < a_i$ and $a'_j > a_j$.

1. A quotient that rounds to $k$ lies in $[\delta(k-1), \delta(k)]$, and thresholds increase. Since $a'_i \le a_i - 1$: $p'_i/d' \le \delta(a'_i) \le \delta(a_i - 1) \le p_i/d$, so $p'_i/p_i \le d'/d$.
2. Since $a'_j \ge a_j + 1$: $p'_j/d' \ge \delta(a'_j - 1) \ge \delta(a_j) \ge p_j/d$, so $p'_j/p_j \ge d'/d$.
3. Hence $p'_i/p_i \le p'_j/p_j$, that is $p'_i/p'_j \le p_i/p_j$, contradicting the hypothesis. Nothing used $h' = h$.
4. House monotone: if $h' = h + 1$ needed $d' > d$, every quotient would shrink and the total could not exceed $h$. So $d' \le d$, every quotient weakly rises, and no count falls. ∎

**Proposition 2 (one-sided quota).** Jefferson's method never violates lower quota; Adams's never violates upper quota.

*Proof (Jefferson).*

1. If $d > P/h$, then $\sum_i \lfloor p_i/d \rfloor \le \sum_i p_i/d < \sum_i q_i = h$. So any working divisor has $d \le P/h$.
2. Then $p_i/d \ge q_i$, so $a_i = \lfloor p_i/d \rfloor \ge \lfloor q_i \rfloor$. ∎

Adams is the mirror image (P2). Jefferson *can* exceed upper quota (P2), Adams can fall below lower quota, and Webster and Hill–Huntington can do both (Example 2).

**Bias.** Balinski and Young measure bias by averaging seats minus quota over many apportionments. In their analysis Jefferson favours large states, Adams small ones, Hill–Huntington leans slightly small, and Webster is the divisor method that is unbiased. A check on 2,644 random eight-state, 40-seat houses agrees in sign: the largest state averages $+0.39$ seats over quota under Jefferson, $-0.35$ under Adams, $+0.01$ under Webster.

**Theorem 3 ([Balinski–Young](../reference.md#balinski-young-theorem); *Fair Representation*, 1982).** If $s \ge 4$, no apportionment method is population monotone and satisfies the quota rule on every problem.

*In words:* with four or more states, any method that never punishes relative growth will, for some populations and house size, give some state a seat count outside its quota.

The bound is sharp: with three states, Webster's method is known never to violate quota, and a brute-force check of 47,110 three-state houses finds no violation.

*Proof sketch.* (i) Under regularity conditions they state, notably that a more populous state never gets fewer seats, Balinski and Young show the population-monotone methods are exactly the divisor methods. (ii) For every divisor method there is a problem with four states that breaks quota. Example 2 shows the mechanism for Webster: several small states each gain a fraction of a seat from rounding, and the gains add up to a whole seat taken from one large state. Paul Gölz, Dominik Peters and Ariel Procaccia (2022) later removed the order-preservation assumption with a five-state construction.

**Where the argument is weakest.** The contested hypothesis is population monotonicity. Quota's defenders say fairness means each state within a seat of its entitlement, and that population paradoxes are comparisons between counterfactual censuses. Monotonicity's defenders reply that a rule which can move a seat from a growing state to a shrinking one is not tracking population at all. Drop population monotonicity and Balinski and Young's own quota method (1975) keeps quota and house monotonicity ([7.1](07-01-quotas-hamilton-and-the-paradoxes.md)). Drop quota and every divisor method keeps both monotonicities. Drop $s \ge 4$ and Webster has everything. The theorem prices the choice; it does not make it.

## Picture

![Four horizontal number lines from 0 to 5, one per method, each divided into bands labelled with the seat count a quotient in that band receives. Jefferson's bands break at 1, 2, 3, 4 and 5. Webster's break at 0.5, 1.5, 2.5, 3.5 and 4.5. Hill-Huntington's break at 0, 1.41, 2.45, 3.46 and 4.47. Adams's break at 0, 1, 2, 3 and 4. A dashed vertical line at quotient 2.46 falls in band 2 for Jefferson and Webster and band 3 for Hill-Huntington and Adams](assets/07-02-fig1.svg)

*Moving the rounding point left hands seats to every quotient, and small quotients feel it most. Hill–Huntington's threshold sits 0.09 below Webster's between 1 and 2 seats but only 0.03 below between 4 and 5: a small state gets the larger discount.*

## Worked examples

**Example 1 (clean): four methods, four answers.** An invented federation has states A, B, C, D with populations 510, 230, 140 and 120 thousand, $P = 1{,}000$, and $h = 11$. The standard divisor is $P/h \approx 90.91$; quotas are 5.61, 2.53, 1.54, 1.32. At that divisor Webster rounds to 6, 3, 2, 1 (12 seats, one too many), Jefferson floors to 9 and Adams ceils to 13. Adjust each divisor:

| Method | $d$ | Quotients A, B, C, D | Seats | Working range |
|---|---|---|---|---|
| Jefferson | 75 | 6.80, 3.07, 1.87, 1.60 | 6, 3, 1, 1 | 72.86 to 76.67 |
| Webster | 92.5 | 5.51, 2.49, 1.51, 1.30 | 6, 2, 2, 1 | 92 to 92.73 |
| Hill–Huntington | 93.5 | 5.45, 2.46, 1.50, 1.28 | 5, 3, 2, 1 | 93.11 to 93.90 |
| Adams | 116 | 4.40, 1.98, 1.21, 1.03 | 5, 2, 2, 2 | 115 to 120 |

Hill–Huntington's row: 5.45 is below $\sqrt{30} \approx 5.477$, so A rounds down, while B's 2.46 is above $\sqrt 6 \approx 2.449$ and rounds up (the figure's dashed line). All four apportionments satisfy quota; Hamilton's 6, 2, 2, 1 matches Webster. Read the drift down the table: A's seats go 6, 6, 5, 5 and D's 1, 1, 1, 2.

**Example 2 (the hypothesis bites): Webster breaks quota with four states.** Populations 670, 120, 110, 100 thousand, $h = 6$. The standard divisor is $166.67$; quotas 4.02, 0.72, 0.66, 0.60. At that divisor Webster gives 4, 1, 1, 1, one seat too many: the three small states gained $0.28 + 0.34 + 0.40 = 1.02$ seats by rounding up.

Raise $d$. A's quotient drops below 3.5 once $d > 670/3.5 \approx 191.43$; D's stays at or above 0.5 until $d = 200$. Any $d$ between them, say 195, gives 3.44, 0.62, 0.56, 0.51 and **A 3, B 1, C 1, D 1**. A's lower quota is 4. Hill–Huntington and Adams give the same 3, 1, 1, 1; Jefferson gives 5, 1, 0, 0 and Hamilton 4, 1, 1, 0, both within quota.

Webster also breaks the other way: populations 790, 80, 70, 60 with $h = 5$ have quotas 3.95, 0.40, 0.35, 0.30, and Webster ($d = 170$) gives 5, 0, 0, 0, above A's upper quota of 4. Both cases need several small states rounding in the same direction. With only two, their combined gain stays under a seat, which is the intuition behind the three-state result.

## Watch out

- **You might think divisor methods solve apportionment because they avoid both paradoxes, but actually they pay in quota.** Jefferson can only overshoot, Adams can only undershoot, and Webster and Hill–Huntington can do either.
- **You might think Balinski–Young says Webster will break quota in your country, but actually it is an existence claim.** For each population-monotone method, *some* populations and house size break quota. How often real censuses do is an empirical question about real populations.
- **You might drop the hypothesis $s \ge 4$, but with three states the impossibility disappears.** Webster then keeps quota and population monotonicity together.

## One-liner

> A divisor method prices a seat and rounds every state by one rule, so growth is never punished, but rounding errors can pile onto one state; with four or more states, no method has both population monotonicity and quota.

## Problems

**P1 (🟢) *(Formal (a)–(b).)*** An invented federation has four states with populations 590, 330, 190 and 90 thousand and a 10-seat house.

(a) Apportion by Webster's method. Give a working divisor and the full range of working divisors.
(b) Apportion by Hill–Huntington. Which state gains a seat from which, compared with (a), and why does the geometric-mean threshold decide it?

**P2 (🟡) *(Formal (a)–(b).)*** Counterexample, then proof.

(a) Build an apportionment problem with three states and at most four seats in which Jefferson's method gives some state more than its upper quota. Give a working divisor.
(b) Prove that Adams's method never gives a state more than its upper quota.

**P3 (🔴, optional) *(Exegetical (a)–(b).)*** Diagnose. An **invented** memo to the constitutional commission of an invented five-province federation, not the words of any real person or body:

> (i) "Because Webster's method is a divisor method, a province whose population grows faster than another's can never lose a seat to it." (ii) "Balinski and Young proved that Webster's method will put some province outside its quota after our next census." (iii) "Hamilton's method always respects quota, so with five provinces Balinski and Young guarantee that some pair of censuses would hand it a population paradox." (iv) "If we merged into three provinces, Webster's method would give us both properties."

(a) Label each sentence true or false, with a one-line reason. (b) State the Balinski–Young theorem with its hypotheses, in 50 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b).)*

(a) $P = 1{,}200$, standard divisor 120, quotas 4.917, 2.75, 1.583, 0.75. At $d = 120$ Webster gives 5, 3, 2, 1 = 11 seats, one too many, so raise $d$. At $d = 130$: 4.54, 2.54, 1.46, 0.69, which round to **5, 3, 1, 1**. Range: the first state keeps 5 while $590/d > 4.5$, so $d < 131.11$; the third state drops to 1 once $190/d < 1.5$, so $d > 126.67$. The other two states are stable throughout. **Any $126.67 < d < 131.11$ works.** Quota holds.

(b) Thresholds: $\sqrt{20} \approx 4.472$, $\sqrt 6 \approx 2.449$, $\sqrt 2 \approx 1.414$, and 0. At $d = 133$: 4.436, 2.481, 1.429, 0.677, which round to **4, 3, 2, 1** (working range 131.93 to 134.35). **The third state gains a seat from the first.**

Why: the last seat is contested between them. Webster compares $590/4.5 \approx 131.11$ with $190/1.5 \approx 126.67$, and the first state wins. Hill–Huntington compares $590/\sqrt{20} \approx 131.93$ with $190/\sqrt 2 \approx 134.35$, and the third wins. The geometric mean sits 0.086 below the midpoint between 1 and 2 seats but only 0.028 below between 4 and 5, so the small state gets the bigger discount.

**Wrong turns:** stopping at the standard divisor, which gives 11 seats. Comparing Hill–Huntington's quotients with Webster's midpoints.

---

**P2** *(Formal (a)–(b).)*

**Accept:** three states, $h \le 4$, a divisor $d$ for which the floors of $p_i/d$ sum to $h$, and some $a_i > \lceil q_i \rceil$.

(a) **Model answer:** populations 650, 200, 150 thousand, $h = 3$. Standard divisor 333.33; quotas 1.95, 0.60, 0.45; upper quota of the first state is 2. At the standard divisor the floors are 1, 0, 0, so lower $d$. At $d = 210$: 3.10, 0.95, 0.71, which floor to **3, 0, 0** (any $200 < d < 216.67$ works). The first state gets 3 seats against an upper quota of 2. The design: the small states' fractions (0.60 + 0.45 = 1.05) are floored away, and the falling divisor hands a whole seat back to the big state.

(b) *Proof.*

1. If $d < P/h$, then $\sum_i \lceil p_i/d \rceil \ge \sum_i p_i/d > \sum_i q_i = h$. So any working divisor has $d \ge P/h$.
2. Then $p_i/d \le q_i$, so $a_i = \lceil p_i/d \rceil \le \lceil q_i \rceil$. ∎

**Wrong turns:** in (a), comparing the seats with the rounded quota (2) instead of checking a working divisor whose floors sum to $h$. In (b), arguing about one state in isolation; the proof needs the total, which pins $d$ to one side of $P/h$.

---

**P3** *(Exegetical (a)–(b).)*

**Must hit, strict (a):**

- (i) True: Proposition 1. Growing faster raises the province's population relative to the other's.
- (ii) False: the theorem is an existence claim, and it is about methods that never violate quota. It says some problem breaks quota for Webster, not that this census will.
- (iii) True: five is at least four, Hamilton satisfies quota, so it is not population monotone. Some pair of problems (populations, and possibly house sizes) moves a seat against relative growth ([7.1](07-01-quotas-hamilton-and-the-paradoxes.md) builds one at a fixed house size).
- (iv) True: with three states Webster's method satisfies quota, and as a divisor method it is population monotone. The bound $s \ge 4$ is sharp.

**Must hit, strict (b):**

- At least four states.
- No method is both population monotone (a state gaining ground on another never loses a seat to it) and always within quota.
- An existence claim over all problems, for some populations and house size.

**Wrong turns:** reading (ii) as following from the theorem; calling (iv) false because "the theorem says no method has both", forgetting the hypothesis on $s$.

**Model answer (b):** With four or more states, every apportionment method that is population monotone (no state ever loses a seat to a state it gained on) gives some state, for some populations and house size, a seat count outside its quota (Balinski and Young, 1982).

</details>

## Flashback

**From Lesson [6.3](06-03-utilities-in-possibility-out.md) (Utilities in, possibility out):** *(Formal (a) · Exegetical (b).)* Diagnose. An **invented** memo from an invented grant panel, not the words of any real body:

> "Each reviewer's scores are rescaled so that her top proposal gets 1 and her bottom proposal gets 0, and proposals are ranked by the sum. Rescaling erases each reviewer's personal scale, so we make no interpersonal comparison, and Sen's theorem does not touch us. And a proposal that finishes last cannot affect how the others are ranked."

(A reviewer who gives every proposal the same score contributes 0 to each.) Two reviewers score proposals $x, y, z$. Sheet $\mathbf u$: reviewer 1 gives 9, 3, 0 and reviewer 2 gives 4, 8, 0. Sheet $\mathbf v$ is identical except that reviewer 2 now gives $z$ a 6.

(a) Find the panel's ranking under $\mathbf u$ and under $\mathbf v$. Which of 6.3's conditions do the two sheets show the rule violates, and why?

(b) In 100 words or fewer: what in the memo is true, and where does its use of Sen's theorem go wrong?

<details>
<summary>Solution</summary>

(a) Under $\mathbf u$: reviewer 1's scores normalize to $x = 1$, $y = \tfrac13$, $z = 0$; reviewer 2's to $x = \tfrac12$, $y = 1$, $z = 0$. Sums $x = \tfrac32$, $y = \tfrac43$, $z = 0$: **$x \succ y \succ z$**.

Under $\mathbf v$: reviewer 2's range is now 4 to 8, so her scores normalize to $x = 0$, $y = 1$, $z = \tfrac12$; reviewer 1's are unchanged. Sums $x = 1$, $y = \tfrac43$, $z = \tfrac12$: **$y \succ x \succ z$**.

Every reviewer's numbers at $x$ and $y$ are the same in both sheets, yet the verdict on $\{x, y\}$ flips: **IIA fails** (6.3's numerical IIA, and so Arrow's stronger one too). The mechanism: $z$ left reviewer 2's bottom, her span shrank from 8 points to 4, and her normalized stake in $y$ over $x$ doubled from $\tfrac12$ to 1, overtaking reviewer 1's $\tfrac23$ for $x$. Proposal $z$ finishes last both times. (The raw sums, 13 against 11, keep $x \succ y$ on both sheets.)

**Wrong turns:** blaming weak Pareto: the reviewers split on $x$ against $y$, so WP says nothing about that pair. Saying the rule breaks CNC: normalizing cancels any separate $a_i t + b_i$, which is exactly why it respects CNC.

**Must hit, strict (b):**

- True: the rule respects CNC, and it satisfies U (given the flat-reviewer convention), WP and anonymity, hence ND, with three proposals.
- Wrong: those are Theorem 1's hypotheses minus IIA. Respecting CNC brings the rule under Sen's theorem rather than outside it, so the theorem predicts the rule must break IIA, and (a) shows it does.
- "No interpersonal comparison" does not hold: normalizing equates every reviewer's best-to-worst span, a comparability convention that depends on what else is on the slate. That is why the last-place proposal matters.

**Model answer (b):** Rescaling cancels any separate stretch or shift of a reviewer's scores, so the rule respects CNC; it is also Pareto, anonymous and defined on every sheet. But those are Theorem 1's hypotheses. With three proposals, Sen's theorem says such a rule is dictatorial unless it breaks IIA, and this anonymous rule breaks IIA, as (a) shows. The memo has the logic backwards: respecting CNC is what brings it under the theorem. And normalizing is itself a comparison, equating each reviewer's best-to-worst span, so a last-place proposal that sets a span moves the others.

</details>

## Connections

- **Backward:** [7.1](07-01-quotas-hamilton-and-the-paradoxes.md) supplied the quota, Hamilton and the paradoxes; this lesson trades its quota guarantee for monotonicity. The counting of D'Hondt and Sainte-Laguë, and why D'Hondt leans large, is [`political-institutions` 1.4](../../political-institutions/lessons/01-04-list-pr-divisor-methods.md); Proposition 2 is that lean taken to its limit. The dashed arrow of [1.3](01-03-arrow-as-a-map.md)'s map ends here.
- **Forward:** how far a real allocation departs from proportionality is measured in [`political-institutions` 2.1](../../political-institutions/lessons/02-01-measuring-outcomes.md).
- **Sideways:** Balinski–Young has the form of Arrow's theorem ([1.3](01-03-arrow-as-a-map.md)) and Gibbard–Satterthwaite ([3.2](03-02-proving-gibbard-satterthwaite.md)): two reasonable demands, no rule meets both. Michel Balinski is also half of majority judgment ([6.2](06-02-range-voting-and-majority-judgment.md)).

## Closing the course

[1.3](01-03-arrow-as-a-map.md) drew Arrow's theorem as a map of exits. Each one turned out to have a toll. Dropping IIA (Module 2) bought Borda, Copeland and Kemeny, and paid in manipulation ([3.2](03-02-proving-gibbard-satterthwaite.md)) and in runoff rules that punish support ([2.4](02-04-monotonicity-and-participation.md)). Restricting the domain (Module 3) bought transitive majorities and strategy-proof medians, at the price of one-dimensional politics. Rights and reasons (Module 4) produced new impossibilities, Sen's and List–Pettit's, rather than exits. Truth-tracking (Module 5) made majority a nearly perfect detector, under independence assumptions that real bodies break. Richer inputs (Module 6) bought possibility by assuming a common grading language or comparable utilities. And even rounding seats, here, forces a choice between quota and monotonicity. No theorem chose a route; each one priced it. Next: [`political-economy`](../../political-economy/syllabus.md) carries Module 3's domains into electoral competition; [`political-philosophy` 5.1](../../political-philosophy/lessons/05-01-why-democracy.md) and [5.4](../../political-philosophy/lessons/05-04-does-social-choice-wound-democracy.md) ask what all this means for democracy; [`decision-theory` 5.1](../../decision-theory/lessons/05-01-harsanyis-aggregation-theorem.md)–[5.2](../../decision-theory/lessons/05-02-interpersonal-comparison-and-social-welfare-functions.md) own the comparisons Module 6 assumed.
