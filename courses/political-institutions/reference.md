# Political Institutions · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

The course takes democratic constitutions apart one rule at a time: how votes become seats, how
governments form and fall, what happens inside legislatures, how power is divided between levels and
checked by courts, and how it is delegated to bureaucrats, central banks and voters at referendums. It
takes no side on which design is better. Use the card mid-problem to find a counting rule with its
symbols and a check number ([Formulas and counting rules](#formulas-and-counting-rules)), a real
country's rule with its year ([Country rule tables](#country-rule-tables)), a concept and its evidence
strength, who said what and when ([Scholars and sources](#scholars-and-sources)), or the slide between
two claims ([Pitfalls](#pitfalls)). Two habits carry the whole course: sort every claim into mechanical,
empirical or normative ([three kinds of claim](#three-kinds-of-claim)), and name the rule that decides
and where it runs out. Where the build's checks against the sources corrected the syllabus, the card
follows the lessons ([Conventions](#conventions)).

## Start here

### Three kinds of claim

**Sort every claim before you argue with it.** A **mechanical** claim follows from a rule's text and the
votes, and has a right answer. An **empirical** claim is about what a design is observed to do, and comes
with a strength of evidence. A **normative** claim is about whether a design is better, and is not argued
in this course. Most Watch-out traps are slides from mechanical to empirical or back.

| Kind | Settled by | Examples from the course |
|---|---|---|
| **Mechanical** | the rule's text plus arithmetic | D'Hondt rounds every party down, so it leans to large parties ([1.4](lessons/01-04-list-pr-divisor-methods.md)). Basic Law Art. 67 counts Members, so abstaining is voting no ([3.1](lessons/03-01-parliamentary-government.md)). A UK declaration of incompatibility leaves the statute valid ([5.4](lessons/05-04-weak-form-review-appointments-and-independence.md)). A turnout quorum makes abstention count with No ([6.3](lessons/06-03-direct-democracy.md)). |
| **Empirical** | evidence, with its strength stated | Plurality districts tend to two serious candidates (fairly robust by district, national exceptions; [2.3](lessons/02-03-duvergers-law-observed.md)). Presidential democracies broke down more often (association well documented, cause contested; [3.3](lessons/03-03-presidential-government.md)). Consensus democracies are "kinder, gentler" (correlation in 36 countries; [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)). |
| **Normative** | argument about what ought to be, owned elsewhere | Whether a winner should need a majority ([1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md)); whether proportionality is owed ([1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md)); whether courts should have the last word ([5.3](lessons/05-03-judicial-review-compared.md)). Owned by [`political-philosophy`](../political-philosophy/syllabus.md). |

- **One sentence can carry two kinds.** "Open lists cause rebellion" is empirical even though the list rule
  is mechanical ([4.3](lessons/04-03-parties-organization-and-discipline.md)); "the largest party has a right to govern" is normative dressed as mechanical
  ([3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md)).
- **The rule that decides and where it runs out.** Every lesson names the rule that settles a case and the
  point where politics takes over (withdrawals between rounds, "may" clauses, undefined "normally",
  judgement-coded indices).

*Lessons:* [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md), [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md), [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md), [1.4](lessons/01-04-list-pr-divisor-methods.md), [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md), [2.1](lessons/02-01-measuring-outcomes.md), [2.2](lessons/02-02-district-magnitude-and-thresholds.md), [2.3](lessons/02-03-duvergers-law-observed.md), [2.4](lessons/02-04-districts-and-electoral-reform.md), [3.1](lessons/03-01-parliamentary-government.md), [3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md), [3.3](lessons/03-03-presidential-government.md), [3.4](lessons/03-04-semi-presidential-government.md), [4.1](lessons/04-01-bicameralism.md), [4.2](lessons/04-02-committees-and-agenda-control.md), [4.3](lessons/04-03-parties-organization-and-discipline.md), [4.4](lessons/04-04-party-systems.md), [5.1](lessons/05-01-federal-unitary-devolved.md), [5.2](lessons/05-02-decentralization-in-practice.md), [5.3](lessons/05-03-judicial-review-compared.md), [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md), [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md), [6.2](lessons/06-02-delegation-and-oversight.md), [6.3](lessons/06-03-direct-democracy.md), [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)

## Notation

Symbols in first-appearance order. Several letters are reused across modules with different meanings; the
clashes are flagged.

| Symbol | Means | First used |
|---|---|---|
| $M$ | district magnitude: seats a district elects | [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md) |
| $V$ | valid votes or ballots (in 2.4 and 2.1-style indices, total votes) | [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md) |
| $S$ | seats in the district in 1.2 (same as $M$); **house size** in 1.5 and 2.2 | [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md) |
| $t$ | a candidate's current vote total (STV); **turnout** in the French runoff arithmetic | [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md) |
| $q$, $q_H$, $q_D$ | a quota; Hare quota $V/M$; Droop quota $\lfloor V/(M+1)\rfloor + 1$ | [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md) |
| TV | STV transfer value $(t-q)/t$ | [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md) |
| $v_i$ | party $i$'s votes (1.3, 1.4); its **vote share in percent** in 2.1 | [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md) |
| $a_i$, $r_i$, $L$ | automatic seats, remainder, leftover seats (largest remainders) | [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md) |
| $p_i$ | vote share as a fraction (1.4, 2.1); **population share** in 2.4 | [1.4](lessons/01-04-list-pr-divisor-methods.md) |
| $e_i$ | entitlement: exactly proportional seats $M p_i$ (1.4); seats due on the party vote (1.5) | [1.4](lessons/01-04-list-pr-divisor-methods.md) |
| $s_i$ | seats won (1.4); **seat share in percent** in 2.1 and 2.4 | [1.4](lessons/01-04-list-pr-divisor-methods.md) |
| $\lambda$, $\mu$, $c$ | D'Hondt price; Sainte-Lague price $\mu = 2c$; cut-off Sainte-Lague quotient | [1.4](lessons/01-04-list-pr-divisor-methods.md) |
| $n$ | number of parties (1.4); **members present and voting** (3.3) | [1.4](lessons/01-04-list-pr-divisor-methods.md) |
| $c_i$, $\ell_i$ | constituency seats, list seats (mixed systems) | [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md) |
| $d_i$ | gap $s_i - v_i$ | [2.1](lessons/02-01-measuring-outcomes.md) |
| LH, LSq | Loosemore-Hanby and Gallagher (least-squares) indices | [2.1](lessons/02-01-measuring-outcomes.md) |
| $N$, $N_v$, $N_s$ | effective number of parties, by votes, by seats; ($N$ also a party's **no votes** in the Rice index, 4.3) | [2.1](lessons/02-01-measuring-outcomes.md) |
| $p$ | number of lists competing (2.2); the initiative's **popular percentage** (6.3) | [2.2](lessons/02-02-district-magnitude-and-thresholds.md) |
| $T_{\text{excl}}$, $T_{\text{incl}}$, $T_{\text{eff}}$, $T$, $M^*$ | thresholds of exclusion, inclusion, effective; a legal threshold; crossover magnitude | [2.2](lessons/02-02-district-magnitude-and-thresholds.md) |
| MAL | Samuels-Snyder malapportionment index | [2.4](lessons/02-04-districts-and-electoral-reform.md) |
| EG, $W_B$, $W_R$ | efficiency gap; each party's wasted votes | [2.4](lessons/02-04-districts-and-electoral-reform.md) |
| $b(n)$ | no votes that sustain a veto, $\lfloor n/3\rfloor + 1$ | [3.3](lessons/03-03-presidential-government.md) |
| $R$, $Y$ | Rice index; a party's yes votes (4.3); ($R$ is **regional own revenue** in 5.2) | [4.3](lessons/04-03-parties-organization-and-discipline.md) |
| VFI, $E$, $g$ | vertical fiscal imbalance; regional spending; proportional spending rise; ($E$ is the **electorate** in 6.3) | [5.2](lessons/05-02-decentralization-in-practice.md) |
| $q$ (6.3) | approval quorum as a share of the electorate | [6.3](lessons/06-03-direct-democracy.md) |
| $c$ (6.3) | the initiative's cantonal percentage | [6.3](lessons/06-03-direct-democracy.md) |
| $E_c$, $x_{ck}$, $\bar x_k$, $s_k$, $\sigma_k$ | Lijphart dimension score; country value; mean; standard deviation; sign | [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md) |

## Formulas and counting rules

Every computation the lessons run, in the lessons' own notation, grouped by job. Each block gives the
formula, its symbols, a one-line reading and a small check number taken from a lesson. All of it is
**mechanical**: given the votes and the rule, the answer is fixed. What these numbers are observed to
do to party systems and governments is empirical and lives in the concept entries and
[Debates](#debates). Symbols are collected in [Notation](#notation).

### Quota formulas

**A quota is a price for a seat, in votes.** $V$ = valid votes (or ballots), $M$ = seats in the
district (1.2 writes $S$ for the same number).

$$q_H = \frac{V}{M}$$

$$q_D = \left\lfloor \frac{V}{M+1} \right\rfloor + 1$$

- **Hare** ($q_H$): votes per seat, the price at which the votes would buy every seat exactly. Under
  STV with $V/S$, all $S$ winners can reach it only if no vote ends on a loser or exhausts, so the
  last seat usually goes to someone short of it.
- **Droop** ($q_D$): the smallest whole number that $M+1$ candidates cannot all reach, since
  $(M+1)q_D > V$ while $(M+1)(q_D-1) \le V$. With one seat it is a bare majority. As a share of the
  vote it is just over $1/(M+1)$: 20% plus one vote at four seats, which is also the
  [threshold of exclusion](#thresholds-of-inclusion-and-exclusion).
- **Solid-coalition property (STV, mechanical):** if more than $k$ quotas of voters rank the same set
  of at least $k$ candidates above everyone else, at least $k$ of that set are elected.
- Check: $V = 40{,}000$, $S = 3$ gives $q_D = 10{,}001$ ([1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md)); $V = 140{,}000$, $M = 7$ gives
  $q_H = 20{,}000$ and $q_D = 17{,}501$ ([1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md)).
- Do not drop the "+1": $V/(M+1)$ alone is not the Droop quota, even when the seats come out the same.

*From* [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md), [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md), [2.2](lessons/02-02-district-magnitude-and-thresholds.md). Entries: [Hare quota](#hare-quota), [Droop quota](#droop-quota).

### Largest remainder procedure

**Sell whole seats at the quota price, then give leftover seats to the biggest change.** Party $i$
has $v_i$ votes; $q$ is $q_H$ or $q_D$.

1. Automatic seats: $a_i = \lfloor v_i / q \rfloor$.
2. Remainders: $r_i = v_i - a_i\,q$.
3. Leftover seats: $L = M - \sum_i a_i$, one each to the $L$ largest $r_i$. Ties by statute (often lot).

- Under Droop, $L \ge 0$ always, because $M+1$ quotas exceed $V$.
- A lower quota (Droop) makes more seats automatic and leaves fewer for the remainder round, the
  only round a party below one quota can win.
- Hare-LR gives each party its exact entitlement $v_i/q_H$ rounded up or down, never off by a whole
  seat; it is Hamilton's apportionment method and the formula that minimizes LH and Gallagher for
  given votes and house size ([2.1](lessons/02-01-measuring-outcomes.md)).
- Check ([1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md) Example 1): $M = 6$, $q_H = 25{,}000$; votes 61,000 / 44,000 / 29,000 / 16,000 give
  automatic 2-1-1-0, remainders 11,000 / 19,000 / 4,000 / 16,000, $L = 2$, seats 2-2-1-1.
- Splitting a list can gain seats under largest remainders (each list gets its own remainder).

*From* [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md), [2.1](lessons/02-01-measuring-outcomes.md). Entry: [Largest remainder methods](#largest-remainder-methods).

### Divisor sequences and quotient tables

**Divide each party's votes by a sequence of divisors; the $M$ largest quotients win seats.** A
party's $k$-th seat is won by its $k$-th quotient.

| Method | Divisors | Rounding (one-price form) | Lean |
|---|---|---|---|
| D'Hondt (Jefferson) | 1, 2, 3, 4, ... | down | toward parties above average size |
| Sainte-Lague (Webster) | 1, 3, 5, 7, ... | to nearest | neutral on average |
| Modified Sainte-Lague, Norway | 1.4, 3, 5, 7, ... | nearest, first seat harder | brakes entry of the smallest |
| Modified Sainte-Lague, Sweden | 1.2, 3, 5, 7, ... | nearest, first seat harder | brakes entry, less |

Worked quotient rows ([1.4](lessons/01-04-list-pr-divisor-methods.md) Example 1, Delmaria, $M = 7$, thousands of votes):

| Party | votes | ÷1 | ÷2 | ÷3 | ÷5 |
|---|---|---|---|---|---|
| A | 38 | 38 | 19 | 12.67 | 7.6 |
| B | 32 | 32 | 16 | 10.67 | 6.4 |
| C | 21 | 21 | 10.5 | 7 | 4.2 |
| D | 9 | 9 | 4.5 | 3 | 1.8 |

- D'Hondt (÷1, ÷2, ÷3): seven largest are 38, 32, 21, 19, 16, 12.67, 10.67, so A 3, B 3, C 1, D 0.
- Sainte-Lague (÷1, ÷3, ÷5): seven largest are 38, 32, 21, 12.67, 10.67, 9, 7.6, so A 3, B 2, C 1, D 1.
- Modified, first divisor 1.4: D's first quotient $9/1.4 \approx 6.43$ falls below C's 7, so A 3, B 2,
  C 2, D 0. With 1.2 it is 7.5 and D keeps its seat.
- Ties between equal quotients are settled by statute, not the formula (Spain: more total votes,
  then lots; Netherlands: lots).

*From* [1.4](lessons/01-04-list-pr-divisor-methods.md), [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md). Entries: [Divisor methods](#divisor-methods), [D'Hondt](#dhondt-method),
[Sainte-Lague](#sainte-lague-method), [modified Sainte-Lague](#modified-sainte-lague).

### One-price form of divisor methods

**Every divisor method finds one price per seat, divides, and rounds.** Let $Q_M$ be the $M$-th
largest D'Hondt quotient.

$$s_i = \left\lfloor \frac{v_i}{\lambda} \right\rfloor$$

for any $\lambda$ with $Q_{M+1} < \lambda \le Q_M$ (D'Hondt rounds down). For Sainte-Lague take $c$ in
the same position among its quotients and set $\mu = 2c$; then $s_i$ is $v_i/\mu$ rounded to the nearest
whole number.

- Why: $v_i/(s+1) \ge \lambda$ exactly when $v_i/\lambda \ge s+1$; and $v_i/(2s+1) \ge c$ exactly when
  $v_i/\mu \ge s + \tfrac12$.
- First-seat bar: pure Sainte-Lague needs $v_i/\mu \ge 0.5$; first divisor 1.4 raises it to 0.7 of a
  price, 1.2 to 0.6. Seats after the first are unchanged.
- Check ([1.4](lessons/01-04-list-pr-divisor-methods.md)): $\lambda = 10{,}600$ reproduces D'Hondt's 3-3-1-0; $\mu = 14{,}500$ reproduces
  Sainte-Lague's 3-2-1-1.
- Common slip: using the cut-off Sainte-Lague quotient itself as $\mu$ without doubling it.

*From* [1.4](lessons/01-04-list-pr-divisor-methods.md)

### Rounding bias of DHondt

**Rounding down strips about half a seat from every party; the price falls until those seats come
back, mostly to big parties.** $n$ = number of parties, $p_i$ = vote share, $e_i = M p_i$ = the
**entitlement** (exactly proportional seats; the $v_i/q_H$ of 1.3).

$$s_i - e_i \approx \frac{n\,p_i - 1}{2}$$

- Positive for parties above the average size $1/n$, negative below; each a fraction of a seat.
- Sainte-Lague's rounding error averages zero whatever a party's size.
- A rule of thumb about averages over many elections (it assumes evenly spread fractional parts), not
  a promise for one district. The bonus is roughly constant in seats, so it matters most at small $M$.
- Check ([1.4](lessons/01-04-list-pr-divisor-methods.md)): Delmaria's predicted signs are $+0.26$, $+0.14$, $-0.08$, $-0.32$; actual gaps
  $+0.34$, $+0.76$, $-0.47$, $-0.63$ (one district is one draw).

*From* [1.4](lessons/01-04-list-pr-divisor-methods.md)

### AV count steps

**Exclude the last-placed candidate and pass her ballots on until someone has a majority of the
ballots still in play.** One seat; ranked ballots.

1. Count first preferences. A candidate with more than half of the continuing ballots wins.
2. Otherwise exclude the lowest candidate; move each of her ballots to its next continuing preference.
3. Ballots with no continuing preference [exhaust](#exhausted-ballots) and leave the base.
4. Repeat.

- AV is STV with one seat: the Droop quota for $S = 1$ is a bare majority.
- With optional preferences the winner's majority is of continuing ballots, not of ballots cast
  ([1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md) Example 2: 53.2% of continuing, 49.0% of cast). With full preferences nothing exhausts.

*From* [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md). Entry: [Alternative vote](#alternative-vote).

### STV count steps and transfer value

**A ranked ballot is a list of instructions: elect anyone at quota, pass on surpluses, exclude the
weakest.** $t$ = a candidate's current total, $q$ = Droop quota.

1. Compute $q = \lfloor V/(S+1) \rfloor + 1$.
2. Elect anyone with $t \ge q$.
3. Transfer each surplus $t - q$: every ballot in the winner's pile moves to its next continuing
   candidate at the transfer value TV below (a ballot already carrying a reduced value is
   multiplied again).
4. If no one is at quota and no surplus waits, exclude the lowest; her ballots move at the value each
   currently carries.
5. Skip elected and excluded candidates; ballots with no continuing candidate exhaust.
6. Stop when seats are filled, or when continuing candidates are no more than seats left (all are
   then elected, quota or not; with one seat and two candidates the leader takes it).

$$\text{TV} = \frac{t - q}{t}$$

- Check ([1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md) Example 1): $q = 10{,}001$; Ada's 12,500 gives surplus 2,499 and
  $\text{TV} = 2{,}499/12{,}500 = 0.19992$.
- Variants: the Australian Senate moves every paper at the reduced value; Ireland's Dail moves a
  proportionate number of whole papers, examining only the last parcel received once transfers are in
  the pile (Electoral Act 1992 s.121). The variant can decide a close seat.
- Ties: the Australian Senate looks back to the latest count at which the tied candidates differed,
  then draws lots.

*From* [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md). Entries: [Single transferable vote](#single-transferable-vote),
[Surplus transfer](#surplus-transfer).

### French two-round arithmetic

**The National Assembly's bars are set against registered voters, so turnout moves them.** $t$ =
turnout (votes cast / registered), $R$ = registered voters, $s$ = a candidate's share of votes cast.
Rules as of 2026 (Electoral Code L126, L162).

| Test | Bar |
|---|---|
| Round-one win | more than half of votes cast **and** at least $R/4$ votes |
| Advance to round two | at least $0.125\,R$ votes; if only one qualifies the runner-up may also stand; if none, the top two |
| Round two | plurality; exact tie to the elder candidate |

As a share of votes cast, the advancement bar is

$$\frac{12.5\%}{t}$$

and a candidate with $s > \tfrac12$ of the votes cast wins in round one exactly when

$$t \ge \frac{1}{4s}$$

- Check ([1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md)): 12.5% of registered is 20.8% of votes cast at 60% turnout and 31.25% at 40%.
  Below 50% turnout the quarter-of-registered condition, not the majority, binds.
- The presidential rule (Constitution Art. 7) is different: top two only, after any withdrawals.

*From* [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md). Entry: [Two-round system](#two-round-system).

### MMP top-up arithmetic

**Compute the proportional answer on the whole house first, then subtract what each party won
locally.** $S$ = house size, $c_i$ = constituency seats, $e_i$ = entitlement on the party vote
(by a divisor method over all $S$ seats, among parties past the threshold), $\ell_i$ = list seats.

$$\ell_i = e_i - c_i$$

If $c_i > e_i$, the party has an overhang of

$$c_i - e_i$$

Parallel (no compensation): list seats alone are allocated on the party vote, then

$$s_i = c_i + \ell_i$$

| Overhang rule | What happens | House size | Gives up |
|---|---|---|---|
| Uncompensated (New Zealand) | party keeps extra district seats | grows by the overhang | exact proportionality |
| Balance seats (Germany 2013 to the 2023 reform) | extend the quotient table until every entitlement covers its district wins | grows further | fixed size |
| [Second-vote coverage](#second-vote-coverage) (Germany since 2023) | seat only as many district winners as second votes cover, by first-vote share | fixed (630) | the seat of a local plurality winner |

- Check ([1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md) Example 1): Sainte-Lague on 12 seats gives entitlements 5-4-2-1; with district wins
  4-2-0-0 the list seats are 1-2-2-1. The parallel count on the same votes gives 6-4-1-1.
- A party can win up to its entitlement in districts with its MMP total unchanged; one more win is an
  overhang.
- Allocating MMP entitlements on the list seats alone is the parallel method, not MMP.

*From* [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md). Entries: [Mixed-member proportional](#mixed-member-proportional),
[Parallel system](#parallel-system), [Overhang and balance seats](#overhang-and-balance-seats).

### Disproportionality formulas

**Put each party's seat share beside its vote share and summarize the gaps.** $v_i$, $s_i$ = vote and
seat shares in percent; gap $d_i = s_i - v_i$, and $\sum_i d_i = 0$.

$$\mathrm{LH} = \tfrac12 \sum_i \lvert s_i - v_i \rvert$$

$$\mathrm{LSq} = \sqrt{\tfrac12 \sum_i (s_i - v_i)^2}$$

- **LH** (Loosemore-Hanby) = total gain of the over-represented parties = percent of seats that must
  change hands for exact proportionality. Unchanged when same-sign gaps are split or merged.
- **LSq** (Gallagher, least squares) squares gaps first, so one large gap outweighs many small ones.
- $\mathrm{LSq} \le \mathrm{LH}$ always, equal only when one party's gain is one other party's loss.
  Both run from 0 towards 100.
- Hare largest remainders gives the smallest achievable value of both, for given votes and house size.
- Check ([2.1](lessons/02-01-measuring-outcomes.md) Example 1): gaps $+7, +3, -2, -4, -4$ give LH $= 10$ and LSq $= \sqrt{47} \approx 6.86$.
- Grouping matters for LSq: seven 2-point parties versus one "others" row of 14 points gave 7.94
  versus 12.12 on the same result; LH stayed at 14 ([2.1](lessons/02-01-measuring-outcomes.md) Example 2).
- Common slips: dropping the $\tfrac12$ (in either index); using fractions in one column and percent in
  the other.

*From* [2.1](lessons/02-01-measuring-outcomes.md), [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md). Entries: [Loosemore-Hanby index](#loosemore-hanby-index),
[Gallagher index](#gallagher-index).

### Effective number formulas

**How many equal-sized parties would be this concentrated?** $p_i$ = shares as **fractions** (not
percent), by votes ($N_v$) or by seats ($N_s$).

$$N = \frac{1}{\sum_i p_i^2}$$

- $k$ equal parties give $N = k$; unequal parties give less. $\sum_i p_i^2$ is the
  Herfindahl-Hirschman concentration index.
- Golosov's alternative (2010), below, is lower than Laakso-Taagepera when one party towers over many
  small ones; $p_1$ is the largest party's share.

$$N_G = \sum_i \frac{p_i}{p_i + p_1^2 - p_i^2}$$

- The fall from $N_v$ to $N_s$ is the mechanical squeeze of small parties ([2.3](lessons/02-03-duvergers-law-observed.md)).
- Check ([2.1](lessons/02-01-measuring-outcomes.md)): shares 0.39, 0.28, 0.16, 0.11, 0.06 give $N_v = 1/0.2718 \approx 3.68$.
- $N$ measures concentration, not whether anyone has a majority: check the largest party's seats.
- Common slip: percent instead of fractions gives a number near 0.0003.

*From* [2.1](lessons/02-01-measuring-outcomes.md), [2.2](lessons/02-02-district-magnitude-and-thresholds.md), [2.3](lessons/02-03-duvergers-law-observed.md), [4.4](lessons/04-04-party-systems.md), [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md). Entry:
[Effective number of parties](#effective-number-of-parties).

### Threshold formulas

**A district of $M$ seats sets its own vote barrier.** D'Hondt unless stated; $p$ = number of lists
competing; $T$ = a legal threshold.

$$T_{\text{excl}} = \frac{100\%}{M+1}$$

$$T_{\text{incl}} = \frac{100\%}{M+p-1}$$

$$T_{\text{eff}} \approx \frac{75\%}{M+1}$$

$$M^{*} = \frac{75\%}{T} - 1$$

- **Exclusion:** more than this guarantees a seat whatever rivals do (the Droop quota as a share).
- **Inclusion:** the smallest share that can win, under the most favourable split of rivals (one big
  list just under $M$ times your vote, the rest just below you). Falls as more lists run.
- **Effective:** a rule of thumb for even odds of a first seat. The band between inclusion and
  exclusion is mechanical; the 75 is a calibration. Why 75: with $p = M+1$ lists inclusion is
  $100\%/(2M)$, about half of exclusion, and the midpoint of half and all is three-quarters.
- **Binding barrier:** the larger of $T$ and $T_{\text{eff}}$; $M^*$ is the magnitude where they cross.
- Values ([2.2](lessons/02-02-district-magnitude-and-thresholds.md), [1.4](lessons/01-04-list-pr-divisor-methods.md), [2.4](lessons/02-04-districts-and-electoral-reform.md)):

| $M$ | 3 | 4 | 7 | 9 | 10 | 20 | 120 |
|---|---|---|---|---|---|---|---|
| $T_{\text{excl}}$ | 25% | 20% | 12.5% | 10% | 9.1% | 4.76% | 0.83% |
| $T_{\text{eff}}$ | 18.75% | 15% | 9.4% | 7.5% | 6.8% | 3.57% | 0.62% |

  Crossovers: $M^* = 14$ for 5%, about 22.1 for 3.25%, 24 for 3%, about 9.7 for 7%.
- Inclusion check: $M = 4$ with 5 lists gives 12.5%.
- The effective threshold is district-level: a national vote share does not tell you whether a party
  clears it anywhere.

*From* [2.2](lessons/02-02-district-magnitude-and-thresholds.md), [1.4](lessons/01-04-list-pr-divisor-methods.md), [2.4](lessons/02-04-districts-and-electoral-reform.md). Entries:
[Thresholds of inclusion and exclusion](#thresholds-of-inclusion-and-exclusion),
[Effective threshold](#effective-threshold), [Legal threshold](#legal-threshold).

### Seat product formula

**Two numbers predict the average effective number of seat-winning parties.** $M$ = mean district
magnitude, $S$ = assembly size.

$$N_s \approx (MS)^{1/6}$$

- Doubling $M$ and doubling $S$ have the same predicted effect.
- Checks ([2.2](lessons/02-02-district-magnitude-and-thresholds.md)): 650 single-member seats gives $650^{1/6} \approx 2.94$; $MS = 243 = 3^5$ gives
  about 2.50; $MS = 729 = 3^6$ gives 3; $(5 \times 60)^{1/6} \approx 2.59$.
- **Empirical**, not mechanical: a logically motivated central tendency across many democracies, with
  real scatter; no term for legal thresholds or cleavages. It predicts an effective number, not a
  count of parties.

*From* [2.2](lessons/02-02-district-magnitude-and-thresholds.md). Entry: [Seat product model](#seat-product-model).

### Districting formulas

**Malapportionment is unequal district size; the efficiency gap scores how a map wastes each party's
votes.** $p_i$ = district $i$'s population share, $s_i$ its seat share (percent).

$$\text{MAL} = \tfrac12 \sum_i \lvert s_i - p_i \rvert$$

- Second measure: the **smallest population share that could elect a majority** = half the combined
  population share of the smallest set of districts that makes a seat majority.
- Check ([2.4](lessons/02-04-districts-and-electoral-reform.md)): six rural districts of 30,000 and four urban of 105,000 give MAL $= 30\%$; the six
  rural seats hold 30% of the people, so about 15% of the population could elect a majority.
- MAL is the Loosemore-Hanby formula with population shares in place of vote shares.

$$\text{EG} = \frac{W_B - W_R}{V}$$

- $W$ = a party's wasted votes: every vote for a losing candidate plus every winner's vote beyond half
  the district total. $V$ = total votes. Positive means the map wastes more of $B$'s votes.
- Packing raises the packed party's wasted surplus; cracking raises its wasted losing votes.
- Check ([2.4](lessons/02-04-districts-and-electoral-reform.md)): in Map A, Blue loses five districts 230-270, so $W_B = 1{,}150$, $W_R = 100$,
  $\text{EG} = 1{,}050/2{,}500 = 42\%$ against Blue.
- Common slips: counting all or none of the winner's votes as wasted (only the surplus over half is);
  halving the population of the smallest districts before, rather than after, summing.

*From* [2.4](lessons/02-04-districts-and-electoral-reform.md). Entries: [Malapportionment](#malapportionment), [Efficiency gap](#efficiency-gap),
[Wasted votes](#wasted-votes).

### Majorities and supermajorities in a chamber

**The base decides as much as the fraction: a majority of all members counts abstentions and absences as
no, a majority of votes cast ignores them.** $N$ = members of the body (or votes in it), $n$ = members
present and voting.

A majority of all members is

$$\left\lfloor \frac{N}{2} \right\rfloor + 1$$

Checks: 151 of 300, 211 of 420, 61 of 120, 289 of 577, 35 of the Bundesrat's 69 votes, 9 of 16.

| Rule (as of 2026) | Base | Count needed |
|---|---|---|
| Westminster no-confidence | votes cast | yes > no |
| Basic Law Art. 67 constructive vote; Art. 63(2) election; Art. 68 confidence | all Members | majority of Members (Kanzlermehrheit) |
| France censure (Art. 49 para. 2) and 49-3 | all members | votes *for* censure only; majority of members |
| Spain investiture (Art. 99) | first vote all members; second vote votes cast | absolute majority, then yes > no |
| Sweden investiture (IoG ch. 6 art. 4) | all members | rejected only if more than half vote *against* |
| Bundesrat decisions (Art. 52(3)) | all 69 votes | 35; two-thirds objection is 46 |
| Bundestag override of an objection (Art. 77(4)) | Members | majority of Members; after a two-thirds objection, two-thirds including a majority of Members |
| UK Fixed-term Parliaments Act 2011 (repealed) | all seats including vacant | two-thirds for an early election |
| German Constitutional Court judges (Court Act ss.6 to 7) | Bundestag votes cast and Members; Bundesrat votes | two-thirds of votes cast and a majority of Members; two-thirds |

- Abstention is a no under any all-members rule and harmless under a votes-cast rule; under a
  "votes against" rule (Sweden, French censure) it helps the government.
- Two-thirds of $n$ rounds up: two-thirds of 55 is at least 37; of 400 voting, at least 267.
- Common slip: computing the base from those voting when the text says Members (or the reverse).

*From* [3.1](lessons/03-01-parliamentary-government.md), [3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md), [3.4](lessons/03-04-semi-presidential-government.md), [4.1](lessons/04-01-bicameralism.md), [4.3](lessons/04-03-parties-organization-and-discipline.md), [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md). Entries:
[Confidence and no-confidence](#confidence-and-no-confidence), [Investiture vote](#investiture-vote),
[Consent and objection bills](#consent-and-objection-bills).

### Veto override and cloture arithmetic

**Supermajority gates in the US design and their copies.** $n$ = members present and voting (a quorum
being present), $S$ = senators duly chosen and sworn.

An override needs this many yes votes in each chamber:

$$\left\lceil \tfrac{2}{3}\,n \right\rceil$$

$$b(n) = \left\lfloor \frac{n}{3} \right\rfloor + 1$$

$b(n)$ = the smallest number of no votes that sustains the veto. A president holding one-third plus one of
those voting in either chamber cannot be overridden; absences on the president's side shrink $n$ and lower
the bar.

| Gate (US unless stated) | Base | Needed |
|---|---|---|
| Veto override (Art. I s.7; *Missouri Pacific*, 1919) | present and voting, each House | two-thirds |
| Impeachment conviction (Art. I s.3) | senators present | two-thirds |
| Brazil partial-veto override (Art. 66) | all deputies and senators in joint session | absolute majority |
| Cloture on legislation (Rule XXII, since 1975) | sworn senators $S$ | three-fifths, rounded up (60 of 100) |
| Cloture on a motion to amend the Senate rules | present and voting | two-thirds |
| Cloture on nominations (precedents 2013, 2017) | present and voting | simple majority |
| House discharge petition (Rule XV cl. 2) | total membership | majority (218 of 435) |
| House suspension of the rules (Rule XV cl. 1) | members voting | two-thirds |
| Majority-of-the-majority norm (informal) | majority-party members | more than half (82 of 162) |

- Checks ([3.3](lessons/03-03-presidential-government.md)): $n = 180$ needs 120, veto held by 61; $n = 60$ needs 40, held by 21; $n = 250$ needs 167,
  held by 84. [4.2](lessons/04-02-committees-and-agenda-control.md) P1: with 2 of 90 seats vacant, cloture needs $\lceil 0.6 \times 88 \rceil = 53$.
- Common slips: two-thirds of the whole membership instead of those voting; three-fifths of all seats
  instead of senators sworn; treating the written two-thirds rules-change threshold as settling a change
  made by precedent.

*From* [3.3](lessons/03-03-presidential-government.md), [4.2](lessons/04-02-committees-and-agenda-control.md). Entries: [Veto and override](#veto-and-override), [Cloture](#cloture),
[Discharge petition](#discharge-petition).

### Rice index formula

**A party's margin on one recorded vote as a share of its voting members.** $Y$, $N$ = the party's yes and
no votes; abstentions excluded.

$$R = \frac{\lvert Y - N \rvert}{Y + N}$$

- $R = 1$ unanimous, $R = 0$ an even split.
- Each switch from no to yes moves the margin by 2 and leaves $Y + N$ fixed; each abstention removes a no
  from both, so abstaining rebels raise the index almost as much as whipped ones.
- Check ([4.3](lessons/04-03-parties-organization-and-discipline.md)): 66 yes, 14 no gives $52/80 = 0.65$; 77 yes, 1 no, 2 abstaining gives $76/78 \approx 0.974$.
- Common slip: putting abstainers in the denominator.

*From* [4.3](lessons/04-03-parties-organization-and-discipline.md). Entry: [Rice index](#rice-index).

### Fiscal gearing formula

**How far regions depend on transfers, and how hard a spending choice bites on regional taxes.** $R$ =
regional own-source revenue, $E$ = regional spending, $g$ = proportional spending rise with grants fixed.

$$\mathrm{VFI} = 1 - \frac{R}{E}$$

With grants fixed, own revenue must rise by the proportion

$$\frac{g}{1 - \mathrm{VFI}}$$

- Check ([5.2](lessons/05-02-decentralization-in-practice.md) Example 1): $E = 220$, $R = 66$ give VFI 0.70; a 10% spending rise needs own revenue up
  $22/66 = 33.3\%$, which is $10\%/0.30$.
- Grants $= E - R$ when regions do not borrow.
- Common slips: computing grant over own revenue; leaving an earmarked grant's programme out of $E$; reading
  a falling VFI as decentralization when a central mandate is being paid from own taxes.

*From* [5.2](lessons/05-02-decentralization-in-practice.md), [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md). Entry: [Vertical fiscal imbalance](#vertical-fiscal-imbalance).

### Referendum arithmetic

**Quorums and double majorities change both the threshold and the losing side's best strategy.** $E$ =
electorate, $Y$, $N$ = Yes and No votes cast.

Turnout quorum (Italy Art. 75 style): valid only if more than half the electorate votes, then Yes must beat
No.

$$Y + N > \frac{E}{2}$$

When Yes leads, opponents defeat the measure by staying home: invalidity needs $N \le E/2 - Y$. Exactly half
is not "more than half".

Approval quorum, share $q$: Yes must beat No and reach a share of the whole electorate.

$$Y \ge q\,E$$

Double majority (Swiss Art. 142): popular Yes > No **and** more than half of the cantonal votes, each
canton's popular result deciding its vote (half-cantons count half; 12 of 23 needed; 3 of 6 is a tie, not
a majority).

Initiative versus counter-proposal (Art. 139b(3)), when People and Cantons disagree on the deciding
question: with $p$ and $c$ the initiative's popular and cantonal percentages, the initiative wins iff

$$p + c > 100$$

- Check ([6.3](lessons/06-03-direct-democracy.md) Example 1): $E = 2{,}000{,}000$, Yes 760,000, No 540,000 if all vote: turnout 65%, Yes
  58.5%, repealed; if 300,000 or more opponents abstain (5/9 of them) the vote is invalid; total boycott
  gives 38% turnout and 100% Yes, invalid.
- Check ([6.3](lessons/06-03-direct-democracy.md) Example 2): 51.80% of the people but 2 of 6 cantonal votes (33.33%) gives 85.13 against
  114.87: the counter-proposal wins.
- Flipping a unit: moving $s$ voters from No to Yes shifts that unit's margin by $2s$; a flip that only ties
  the cantonal count fails ([6.3](lessons/06-03-direct-democracy.md) P2).
- Common slips: measuring the quorum against votes cast; treating a cantonal tie as a pass; counting
  half-cantons as full votes.

*From* [6.3](lessons/06-03-direct-democracy.md). Entries: [Turnout quorum](#turnout-quorum), [Approval quorum](#approval-quorum),
[Double majority](#double-majority).

### Lijphart dimension score formula

**Standardize each variable, sign it so that high means consensual, average the five, then rescale.**
$x_{ck}$ = country $c$'s value on variable $k$; $\bar x_k$, $s_k$ = mean and standard deviation across the
36 democracies; $\sigma_k = +1$ if a high value is consensual, $-1$ if majoritarian.

$$E_c = \frac{1}{5}\sum_{k=1}^{5} \sigma_k \, \frac{x_{ck} - \bar x_k}{s_k}$$

The federal-unitary score is the same over variables 6 to 10. Lijphart then rescales each dimension so the 36
scores have a spread of about 1; recomputation from his appendix data reproduces his published scores to
within 0.04.

- Check ([6.4](lessons/06-04-majoritarian-and-consensus-democracy.md) Example 1, 1945 to 2010): UK signed $z$-scores $-0.92, -1.20, -1.01, -0.52, -1.06$ average
  $-0.94$; Switzerland's average $1.48$; dividing by the averages' spread (0.85) gives $-1.11$ and $1.74$,
  against the published $-1.09$ and $1.72$.
- Means used there: effective number of parties 3.19 (SD 1.12); one-party minimal winning cabinets 60.3%
  (30.9); executive dominance 5.35 (2.75); Gallagher 8.55 (6.05); interest-group pluralism 2.02 (0.94).
- The arithmetic is mechanical; the coding of executive dominance for presidential systems is a judgement.

*From* [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md). Entry: [Lijphart's two dimensions](#lijpharts-two-dimensions).

## Country rule tables

Compact lookups of the real rules the lessons cite, **as of 2026** unless a year is given. Only what the
lessons state or the build verified is listed; a blank or "not stated" means the course does not say. Rules
change: check the year before relying on a row. The concept entries carry the detail and the sources.

### Electoral systems by country

| Country | Chamber or office | System | Formula, magnitude, threshold | Lessons |
|---|---|---|---|---|
| US | House | first-past-the-post in most states (a few use runoffs or ranked ballots) | single-member districts; maps drawn by legislatures in most states | [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md), [2.4](lessons/02-04-districts-and-electoral-reform.md) |
| US | Senate; President | two senators per state, directly elected since 1913; president via the Electoral College, four years | | [3.3](lessons/03-03-presidential-government.md), [5.1](lessons/05-01-federal-unitary-devolved.md) |
| UK | House of Commons | first-past-the-post | 650 constituencies, electorates within 95% to 105% of the UK quota; AV rejected in 2011 | [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md), [2.4](lessons/02-04-districts-and-electoral-reform.md) |
| Germany | Bundestag | mixed-member proportional with second-vote coverage (since the 2023 reform) | 630 seats, 299 constituencies; Sainte-Lague in divisor form (Federal Elections Act s.5); 5% of second votes or 3 constituency wins (exception restored 30 July 2024 pending new legislation); Hare/Niemeyer largest remainders used 1987 to 2005; balance seats 2013 to 2023 | [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md), [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md), [2.2](lessons/02-02-district-magnitude-and-thresholds.md) |
| France | President | two-round, top two (Art. 7) | five-year term, at most two consecutive (Art. 6); term cut from seven years by the 2000 referendum | [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md), [3.4](lessons/03-04-semi-presidential-government.md) |
| France | National Assembly | two-round, single-member | round-one win: majority of votes cast and a quarter of registered (L126); advance: 12.5% of registered (L162); round two by plurality, tie to the elder | [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md) |
| France | Senate | indirect election, representing territorial communities (Art. 24) | | [4.1](lessons/04-01-bicameralism.md), [5.1](lessons/05-01-federal-unitary-devolved.md) |
| Netherlands | House of Representatives | national list PR | 150 seats in one national allocation; full quotas, then highest averages (D'Hondt) among lists with a full quota (Kieswet P 6 to P 7); barrier one quota, 1/150; ties by lot | [1.4](lessons/01-04-list-pr-divisor-methods.md), [2.2](lessons/02-02-district-magnitude-and-thresholds.md) |
| Israel | Knesset | national list PR | 120 seats, one district, a D'Hondt variant; 3.25% threshold since 2014 | [1.4](lessons/01-04-list-pr-divisor-methods.md), [2.2](lessons/02-02-district-magnitude-and-thresholds.md) |
| New Zealand | House of Representatives | mixed-member proportional | Sainte-Lague; 5% of party vote or one electorate seat; overhang uncompensated (nominal 120 can be exceeded); adopted by the 1993 referendum, first used 1996 | [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md), [2.4](lessons/02-04-districts-and-electoral-reform.md) |
| Japan | House of Representatives | parallel | 465 = 289 single-member districts + 176 list seats in 11 blocs, D'Hondt; reform 1994, first used 1996 (then 300 + 200); SNTV in 1- to 6-seat districts from 1947 | [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md), [2.4](lessons/02-04-districts-and-electoral-reform.md) |
| Spain | Congress of Deputies | list PR, closed lists | 350 seats in 52 districts (50 provinces with at least 2 seats each; Ceuta and Melilla 1 each); D'Hondt; 3% of valid votes in the district (LOREG arts. 162 to 163); mean magnitude under 7 | [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md), [1.4](lessons/01-04-list-pr-divisor-methods.md), [2.2](lessons/02-02-district-magnitude-and-thresholds.md) |
| Ireland | Dail | STV | constituencies of 3, 4 or 5 seats (Constitution Art. 16.2.5 to 16.2.6; Electoral Reform Act 2022 s.57); surplus by whole papers, last parcel (Electoral Act 1992 s.121) | [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md), [2.2](lessons/02-02-district-magnitude-and-thresholds.md) |
| Ireland | President | STV for one seat, in practice AV (Art. 12.2.3) | | [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md) |
| Australia | House of Representatives | alternative vote | full preferential; compulsory voting in federal elections | [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md) |
| Australia | Senate | STV | Droop quota; every paper moves at the transfer value | [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md) |
| Malta | House | STV | 13 five-member districts (Constitution Art. 56); nearly pure two-party system | [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md), [2.3](lessons/02-03-duvergers-law-observed.md) |
| Sweden | Riksdag | list PR, flexible lists | modified Sainte-Lague, first divisor 1.2 (2014 amendment); personal marks on at least 5% of the party's ballots elect ahead of list order | [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md), [1.4](lessons/01-04-list-pr-divisor-methods.md) |
| Norway | Parliament | list PR | modified Sainte-Lague, first divisor 1.4 (Election Act 2023) | [1.4](lessons/01-04-list-pr-divisor-methods.md) |
| Finland | Parliament | list PR, open lists | voter must choose a candidate | [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md) |
| Turkey | Parliament | list PR | D'Hondt in districts; 7% national threshold (cut from 10% in 2022) | [2.2](lessons/02-02-district-magnitude-and-thresholds.md) |

### Executives, confidence and dissolution

| | UK | Germany | France | US |
|---|---|---|---|---|
| Type | parliamentary (Westminster) | parliamentary | semi-presidential, premier-presidential | presidential |
| Head of government takes office | monarch appoints whoever commands the Commons' confidence; no vote | Bundestag elects the Chancellor by a majority of Members (Art. 63) | president appoints the PM (Art. 8); no investiture vote required | elected separately, fixed four-year term |
| Removal by the legislature | no-confidence by a majority of those voting; by convention resign or seek dissolution | only by electing a successor by a majority of Members, 48 hours after the motion (Art. 67) | censure: one tenth sign, 48 hours, majority of all members, only votes for count (Art. 49 para. 2); government resigns (Art. 50); 49-3 makes a bill a confidence matter | none; impeachment for misconduct, conviction by two-thirds of senators present |
| Removal by the head of state | not stated | no | no: the president terminates only on resignation (Art. 8) | |
| Dissolution | prerogative on the PM's request (DCPA 2022, non-justiciable); automatic after five years | no self-dissolution; after a failed confidence motion the President may dissolve within 21 days (Art. 68); or after a failed election (Art. 63(4)) | president, after consultations; not within a year of the last Assembly election (Art. 12) | none |
| Caretaker | convention | President may require the Chancellor to continue (Art. 69(3)) | not stated | |

Other rules the lessons cite: Spain (Art. 99 falling-bar investiture; Art. 101(2) caretaker; Art. 113
constructive censure); Sweden (negative investiture, IoG ch. 6 art. 4; caretaker art. 11); Norway (no
investiture vote, Art. 12; resignation after no-confidence, Art. 15); Italy (government needs the confidence
of both Houses, Art. 94); Weimar (president-parliamentary, Arts. 53 to 54).

*Lessons:* [3.1](lessons/03-01-parliamentary-government.md), [3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md), [3.3](lessons/03-03-presidential-government.md), [3.4](lessons/03-04-semi-presidential-government.md), [4.1](lessons/04-01-bicameralism.md)

### Second chambers

| Chamber | Composition | If the chambers disagree | Lijphart index (1945 to 2010) |
|---|---|---|---|
| US Senate | two senators per state, directly elected; equal suffrage protected by Art. V | no override; conference committee or traded amendments, else the bill dies | 4.0 |
| German Bundesrat | Land government members, 3 to 6 votes per Land, 69 in all, block vote (Art. 51) | consent bills: absolute veto; objection bills: overridable by a majority of Bundestag Members, or two-thirds after a two-thirds objection (Art. 77(4)) | 4.0 (as coded) |
| UK House of Lords | appointed life peers plus Church of England bishops (hereditary peers removed by a 2026 Act) | money bills law after one month; other Commons bills after rejection in two sessions a year apart (Parliament Acts 1911 and 1949); full veto on extending a Parliament | 2.5 |
| French Senate | indirect election, representing territorial communities (Art. 24) | after joint committee failure the government may give the Assembly the last word (Art. 45); identical texts needed for constitutional amendments (Art. 89) and institutional acts on the Senate (Art. 46) | 3.0 |
| Swiss Council of States | 46 seats, two per canton, one for each of six cantons (Art. 150) | not stated | 4.0 |
| Italian Senate | congruent with the Chamber | both legislate together (Art. 70); government needs both Houses' confidence (Art. 94) | 3.0 |

Also coded: Australia 4.0; Canada, Spain 3.0; Japan, Netherlands 3.0; Ireland 2.0; Israel and New Zealand
unicameral (about 1.0).

*Lessons:* [4.1](lessons/04-01-bicameralism.md), [5.1](lessons/05-01-federal-unitary-devolved.md)

### Judicial review by country

| Country | Type | Who can bring a statute | When | Effect | Override |
|---|---|---|---|---|---|
| US | diffuse, concrete, strong | a litigant with standing, in any court | after enforcement | not applied in the case; precedent spreads it | amendment: two-thirds of each House plus three-quarters of states (Art. V) |
| Germany | concentrated, strong | federal government, a Land government or a quarter of the Bundestag (abstract, Art. 94(1) no. 2); a court (referral, Art. 100(1)); any person (complaint, Art. 94(1) no. 4a) | after promulgation | void or "incompatible", binding on all (Art. 94(4)) | amendment: two-thirds of Bundestag Members and of Bundesrat votes (Art. 79(2)); Art. 79(3) core unamendable |
| France | concentrated, strong | President, PM, either chamber's president, 60 deputies or 60 senators (Art. 61); a litigant via QPC (Art. 61-1, since 1 March 2010) | before promulgation (one month, eight days if urgent); or in later litigation | never promulgated (Art. 62); or repealed from publication or a set date | amendment: identical text in both Houses, then referendum or three-fifths in Congress (Art. 89) |
| UK | none against Acts; weak-form declarations | higher courts (HRA s.4(5)) | in litigation | statute stays valid (s.4(6)) | Parliament or a minister may act, or not |
| Canada | diffuse strike-down plus override | litigants | in litigation | "of no force or effect" (s.52) | express override for ss.2 and 7 to 15, five years, renewable (s.33) |
| New Zealand | weak | | | courts may not invalidate or decline to apply (BORA s.4) | ordinary legislation |
| Japan | diffuse, concrete (Art. 81) | litigants; no abstract review (1952) | in litigation | statutes set aside very rarely | not stated |
| Switzerland | no review of federal acts (Art. 190) | | | courts apply federal acts | |

Judicial appointment rules are tabled under [Judicial appointments](#judicial-appointments).

*Lessons:* [5.3](lessons/05-03-judicial-review-compared.md), [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md), [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)

### Referendum rules by country

| Jurisdiction | Device | Trigger | Decision rule | Legal effect |
|---|---|---|---|---|
| Switzerland | mandatory | every constitutional amendment (Art. 140) | majority of voters and of cantons (Art. 142; 12 of 23 cantonal votes) | binding |
| Switzerland | optional | 50,000 voters or 8 cantons within 100 days (Art. 141) | majority of voters | binding veto |
| Switzerland | initiative | 100,000 voters within 18 months (Art. 139); general proposals drafted by the Assembly (139(4)) | double majority; counter-proposal by sum rule (Art. 139b) | binding |
| Italy | abrogative | 500,000 voters or 5 Regional Councils (Art. 75); excludes tax, budget, amnesty and pardon, treaty ratification | more than half the electorate votes and a majority of valid votes | repeals the law |
| Italy | constitutional (confirmatory) | Art. 138 | majority of valid votes, no quorum | binding |
| UK | authorities' (ad hoc) | Act of Parliament (1975, 2011, 2016) | majority of votes cast | as the Act provides: 2011 binding (PVSCA s.8); 2016 no provision, so "political rather than legal" (*Miller*) |
| California | initiative | 5% (statute) or 8% (constitutional amendment) of last gubernatorial vote (art. II s.8(b)) | majority; between conflicting measures the higher Yes vote prevails (s.10(b)) | binding; legislature may amend an initiative statute only with voter approval unless it permits (s.10(c)) |

*Lessons:* [6.3](lessons/06-03-direct-democracy.md), [5.1](lessons/05-01-federal-unitary-devolved.md), [2.4](lessons/02-04-districts-and-electoral-reform.md)

## Electoral system mechanics

Module 1. How votes become seats: the dials, the counts, and the rules that decide which candidates
fill a party's seats. Arithmetic for each count is in [Formulas and counting rules](#formulas-and-counting-rules).

### Three parts of an electoral system

**An electoral system is a machine with three dials: what the voter may say, how many seats a
district elects, and the rule that turns marks into winners.** The frame goes back to Douglas Rae,
*The Political Consequences of Electoral Laws* (1967).

- **Ballot structure:** *categorical* (one mark) or *ordinal* (a ranking, [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md)).
- **[District magnitude](#district-magnitude)** $M$.
- **Electoral formula:** plurality, majority-runoff, quota-and-transfer, largest remainders, divisor.
- List PR adds a fourth choice, the **list type** ([closed, open, flexible](#closed-open-and-flexible-lists)),
  which decides who fills the seats, not how many.
- The dials are not equally powerful: magnitude does most of the work on proportionality ([2.2](lessons/02-02-district-magnitude-and-thresholds.md)).

*Lessons:* [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md), [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md), [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md), [1.4](lessons/01-04-list-pr-divisor-methods.md)

### District magnitude

**The number of seats a district elects, written $M$ (1.2 writes $S$); $M = 1$ is a single-member
district.** It sets a natural price for a seat of about $1/(M+1)$ of the district vote, so it is the
main driver of proportionality. Rein Taagepera and Matthew Shugart (*Seats and Votes*, 1989) treat it
as the master variable of electoral-system effects.

- AV is $M = 1$; Irish STV is $M = 3$ to 5, which limits STV's proportionality ([1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md)).
- Halving a 7-seat district into 4 and 3 made D'Hondt and Sainte-Lague agree and shut out a 9% party
  ([1.4](lessons/01-04-list-pr-divisor-methods.md) Example 2): magnitude can outweigh the formula.
- Main cause of the robust gap in disproportionality between single-member plurality and national-list
  PR ([2.1](lessons/02-01-measuring-outcomes.md)); input to the [effective threshold](#effective-threshold) and the
  [seat product](#seat-product-model) ([2.2](lessons/02-02-district-magnitude-and-thresholds.md)).
- In the [M plus 1 rule](#m-plus-1-rule), magnitude caps the number of viable candidates ([2.3](lessons/02-03-duvergers-law-observed.md)).

*Lessons:* [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md), [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md), [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md), [1.4](lessons/01-04-list-pr-divisor-methods.md), [2.1](lessons/02-01-measuring-outcomes.md), [2.2](lessons/02-02-district-magnitude-and-thresholds.md)

### Plurality and majority

**A plurality is more votes than any other candidate; an absolute majority is more than half of the
votes cast.** Three candidates on 38%, 34% and 28%: the first has a plurality and no majority.
Plurality and majority formulas differ exactly on what to do with that candidate.

- Later lessons need the same distinction for chamber votes: a majority of **votes cast** versus a
  majority of **all members**, where abstention counts as no ([Majorities and supermajorities in a chamber](#majorities-and-supermajorities-in-a-chamber)).

*Lessons:* [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md)

### First-past-the-post

**Single-member districts, one mark, and whoever has the most votes wins, with no threshold.** It
elects the UK House of Commons and, as of 2026, the US House in most states (a few use runoffs or
ranked ballots). A party's seat total is the number of districts it tops; votes beyond the winning
margin, and every vote for a loser, change nothing.

- **Mechanical:** a national result is a sum of winner-take-all contests, not a share of the national
  vote. 34% can win a seat; a leader can turn 40% of the votes into 80% of the seats in a small example.
- **Empirical:** two-candidate competition in plurality districts is a well-documented tendency
  ([Duverger's law](#duvergers-law)); Canada and India are standard national counterexamples.
- The rule says nothing about two parties; that slide is the course's first pitfall.

*Lessons:* [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md), [2.3](lessons/02-03-duvergers-law-observed.md)

### Two-round system

**Ask for an absolute majority, and if no one has one, vote again among fewer candidates.** France
uses two versions (rules as of 2026).

- **Presidency** (Constitution Art. 7): absolute majority of votes cast in round one, else only the
  top two, "after any withdrawal of better placed candidates", stand in round two. The round-two
  winner has a majority of the votes cast in it.
- **National Assembly** (Electoral Code): round-one win needs an absolute majority of votes cast **and**
  votes equal to at least a quarter of registered voters (L126); advance needs 12.5% of registered
  (L162), and if only one candidate reaches it the runner-up may also stand, if none the top two may;
  round two by plurality, tie to the elder candidate (L126). Three finalists make a *triangulaire*, and
  its winner may lack a majority.
- Turnout moves the field: the bar is $12.5\%/t$ of votes cast ([French two-round arithmetic](#french-two-round-arithmetic)).
- **Where the rule runs out:** the count fixes who *may* stand, not who *will*; withdrawals and
  endorsements between rounds (*désistement*) are bargained.
- Not AV on two days: round-two voters react to round one, candidates withdraw, turnout changes.

*Lessons:* [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md)

### Spoiler effect

**A candidate who cannot win changes who does, by splitting the voters who prefer one rival to the
other.** In [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md) Example 1 the plurality winner on 38% loses a top-two runoff 21,000 to 28,000
once the third candidate's voters can state a second choice. A runoff or a ranked ballot lets those
voters express it; deserting voters avoid it by voting for a front-runner ([2.3](lessons/02-03-duvergers-law-observed.md)).

*Lessons:* [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md), [2.3](lessons/02-03-duvergers-law-observed.md)

### Alternative vote

**One seat, a ranked ballot, and repeated exclusion of the last-placed candidate until someone holds a
majority of the ballots still in play.** Also called instant runoff; it is STV with one seat (the
Droop quota for $S = 1$ is a bare majority). Count steps are in [AV count steps](#av-count-steps).

- Australia's House (as of 2026): full preferential (every box numbered) and compulsory federal voting
  (Australian Electoral Commission). Ireland's presidency is elected by STV for one seat, so in
  practice AV.
- **Majority of whom:** with optional preferences, a majority of continuing ballots, not of ballots
  cast ([1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md) Example 2: 53.2% versus 49.0%).
- Still a majority formula in the 1.1 sense: every seat is winner-take-all, so AV is not proportional.
- **Defenders:** a voter can rank a minor candidate first without wasting her vote; the winner holds a
  majority of ballots in play. **Critics:** seat shares need not track vote shares; Australia's House
  has long had two blocs (one long-running case, not a law).
- Non-monotonic in some profiles, and can exclude a Condorcet winner: properties owned elsewhere
  ([Assumed](#assumed-not-taught-here)).
- The UK rejected AV in its 2011 referendum ([seat-maximizing view](#seat-maximizing-view-of-reform)).

*Lessons:* [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md), [2.4](lessons/02-04-districts-and-electoral-reform.md)

### Single transferable vote

**Ranked ballots in multi-member districts: elect anyone at the Droop quota, pass on surpluses at a
fraction, exclude the weakest and pass on their ballots.** Count steps are in
[STV count steps and transfer value](#stv-count-steps-and-transfer-value).

- Users as of 2026: Ireland's Dail (Constitution Art. 16.2.5; constituencies at least three seats,
  Art. 16.2.6, and three, four or five under the Electoral Reform Act 2022 s.57), Malta (Constitution
  Art. 56; 13 five-member districts), Australia's Senate.
- Ancestor: Thomas Hare's 1859 scheme, championed by Mill, with a votes-per-seat quota and transfers
  down each voter's list.
- **Mechanical:** votes transfer between *candidates*, not parties; with three to five seats
  proportionality is limited by magnitude.
- **Defenders:** voters, not parties, define the groups that win representation, and can choose among
  a party's candidates. **Critics:** co-partisans compete for the same voters; Ireland's heavy culture of
  constituency service is often blamed on STV, contested (one case, local political culture
  confounded).
- Malta under STV has a nearly pure two-party system: PR permits, it does not produce ([2.3](lessons/02-03-duvergers-law-observed.md)).
- For the [personal vote](#personal-vote), voters rank individual candidates, even across parties
  ([4.3](lessons/04-03-parties-organization-and-discipline.md)).
- Non-monotonicity is [`social-choice`](../social-choice/syllabus.md)'s to construct.

*Lessons:* [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md), [2.3](lessons/02-03-duvergers-law-observed.md), [4.3](lessons/04-03-parties-organization-and-discipline.md)

### Droop quota

**The smallest whole number of votes that one more candidate than there are seats could not all
reach: $\lfloor V/(M+1) \rfloor + 1$.** Henry Droop proposed it in the nineteenth century.

- **In STV** it is the bar for election, and it can never elect more people than there are seats. With
  one seat it is a bare majority. The Australian Electoral Commission uses this formula for the Senate.
- **In list PR** it is just a lower price than Hare: more automatic seats, fewer remainder seats, so
  harder on parties below one quota. No votes transfer.
- As a share of the vote it is the [threshold of exclusion](#thresholds-of-inclusion-and-exclusion),
  just over $1/(M+1)$: 20% plus a vote at four seats.
- Solid-coalition property and checks: [Quota formulas](#quota-formulas).

*Lessons:* [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md), [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md), [1.4](lessons/01-04-list-pr-divisor-methods.md), [2.2](lessons/02-02-district-magnitude-and-thresholds.md)

### Hare quota

**Votes divided by seats, $V/M$: the price at which the votes would buy every seat exactly.** Thomas
Hare's original quota, from the scheme Mill championed.

- In STV it is larger than Droop, so all $S$ winners can reach it only if no vote ends on a loser or
  exhausts; the last seat usually goes to someone short of it, by the stop rule ([1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md)).
- In list PR, Hare largest remainders gives each party its entitlement $v_i/q_H$ rounded up or down
  (Hamilton's method) and is the proportionality benchmark ([2.1](lessons/02-01-measuring-outcomes.md)).

*Lessons:* [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md), [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md), [2.1](lessons/02-01-measuring-outcomes.md)

### Surplus transfer

**The votes an elected STV candidate holds above the quota are passed on, so her supporters' later
choices still count.** Surplus $= t - q$; since no one can tell which ballots were the extra ones,
every ballot in her pile moves to its next continuing preference at $\text{TV} = (t-q)/t$, and a ballot
already reduced is multiplied again.

- Variants decide close seats: the Australian Senate moves every paper at the reduced value (a
  Gregory-type method); Ireland's Dail moves a proportionate number of whole papers and, once the pile
  includes transfers, examines only the last parcel received (Electoral Act 1992 s.121).
- No surplus exists below the quota: a party whose candidates each sit well under it lost nothing to a
  "surplus lottery"; exclusion decided ([1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md) P3).

*Lessons:* [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md)

### Exhausted ballots

**A ballot with no continuing candidate left on it leaves the count.** It arises under optional or
truncated preferences, and in STV when later preferences name only elected or excluded candidates.

- In AV it shrinks the base of the "majority".
- In STV it lets the last seats be filled below quota by the stop rule (with one seat left and two
  candidates, the leader takes it; the Australian Senate rule).
- Full preferential voting (Australia's House) rules it out.

*Lessons:* [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md)

### Largest remainder methods

**Set a quota, give each party a seat per full quota, then hand leftover seats to the largest
remainders.** Hare-LR and Droop-LR differ only in the quota. Procedure: [Largest remainder procedure](#largest-remainder-procedure).

- Hare-LR is Hamilton's apportionment method; Germany allocated Bundestag list seats by it
  (Hare/Niemeyer) at the elections of 1987 to 2005 (Federal Returning Officer).
- Hare-LR achieves the smallest possible LH and Gallagher index for given votes and house size ([2.1](lessons/02-01-measuring-outcomes.md)).
- **Where the rule runs out:** the statute decides what counts in $V$ and how to break remainder ties;
  adding a seat can cost a party one (the Alabama paradox, [`social-choice`](../social-choice/syllabus.md));
  splitting a list can gain seats, and the arithmetic cannot tell a tactical split from a schism. Under
  D'Hondt splitting never gains.
- Both quota methods are kinder to small parties than D'Hondt.

*Lessons:* [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md), [2.1](lessons/02-01-measuring-outcomes.md)

### Closed, open and flexible lists

**The list type decides which of a party's candidates take its seats, a separate question from how
many seats it wins.** Rules as of 2026, as verified in [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md):

| Type | Rule | Example |
|---|---|---|
| Closed | party fixes the order; voter marks a party | Spain's Congress (LOREG art. 163: seats in list order; art. 96 voids altered ballots) |
| Flexible | party order stands unless a candidate's personal marks clear a bar | Sweden's Riksdag (marked on at least 5% of her party's ballots in the constituency) |
| Open | voter must choose a candidate; personal votes alone set the order | Finland |

- [4.3](lessons/04-03-parties-organization-and-discipline.md) adds Israel (closed), the Netherlands (flexible) and Brazil (open) for the personal-vote
  ranking; [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md) could not verify those from official sources.
- In all three types the party or its selectorate controls who is on the list.
- **Empirical:** open lists make candidates compete on personal reputation, including against running
  mates (Carey and Shugart 1995; evidence broadly fits, uneven) ([4.3](lessons/04-03-parties-organization-and-discipline.md)).
- A party can gain a seat and lose its best-known member in the same count.

*Lessons:* [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md), [4.3](lessons/04-03-parties-organization-and-discipline.md)

### Divisor methods

**Award seats one at a time to whichever party has the strongest claim per seat: divide each party's
votes by a divisor sequence and give the seats to the largest quotients.** Equivalent to finding one
price per seat and rounding ([One-price form](#one-price-form-of-divisor-methods)).

- D'Hondt rounds down (Jefferson's method); Sainte-Lague rounds to nearest (Webster's). Apportionment
  paradoxes and axioms belong to [`social-choice`](../social-choice/syllabus.md).
- Ties are settled by statute: Spain (LOREG art. 163.1.d) gives a tied seat to the list with more total
  votes, then draws lots; the Dutch Elections Act (Kieswet P 7) draws lots.
- **Where the rule runs out:** magnitude, any legal threshold and the map usually decide more than the
  formula; which candidates sit is the list type's job.

*Lessons:* [1.4](lessons/01-04-list-pr-divisor-methods.md)

### DHondt method

**Divisors 1, 2, 3, ...: every party is rounded down, so the leftover fractions flow to the larger
parties.** On average $s_i - e_i \approx (n p_i - 1)/2$ seats: a bonus above average size, a penalty
below; roughly constant in seats, so it bites hardest at small $M$
([Rounding bias of DHondt](#rounding-bias-of-dhondt)).

- Users as of 2026: Spain's Congress (350 seats in 52 districts, 50 provinces plus Ceuta and Melilla;
  3% of the district's valid vote; LOREG arts. 162 to 163; in 2023, 27 of 50 provinces elected five
  or fewer); the Netherlands (150 seats nationally; full quotas first, then highest averages among lists
  that reached a full quota, Kieswet P 6 to P 7); Israel (120 seats, one national district, 3.25%
  threshold since 2014, a D'Hondt variant); Japan's list blocs (Public Offices Election Act art. 95-2);
  Turkey's districts.
- Under D'Hondt the threshold of exclusion is $100\%/(M+1)$ and of inclusion $100\%/(M+p-1)$ ([2.2](lessons/02-02-district-magnitude-and-thresholds.md)).
- "D'Hondt favours large parties" is **mechanical** (rounding arithmetic); what that does to the number
  of parties over time is empirical ([2.3](lessons/02-03-duvergers-law-observed.md)).
- Splitting a list never gains seats under D'Hondt (checked by simulation in the build; consistent with
  the coalition property in [`social-choice`](../social-choice/syllabus.md)).

*Lessons:* [1.4](lessons/01-04-list-pr-divisor-methods.md), [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md), [2.2](lessons/02-02-district-magnitude-and-thresholds.md)

### Sainte-Lague method

**Divisors 1, 3, 5, 7, ...: every party is rounded to the nearest whole seat, so each party's rounding
error averages zero.** Neutral on average, not pro-small; it only looks pro-small beside D'Hondt. A
party's first seat needs $v_i/\mu \ge 0.5$ of the price.

- Used for MMP entitlements in New Zealand; Germany's Federal Elections Act (s.5) uses a common divisor
  with standard rounding, which is the same method in divisor form.
- Can reward a split list when each half sits just above the price for a first seat ([1.4](lessons/01-04-list-pr-divisor-methods.md) P2); a
  raised first divisor removes that gain.

*Lessons:* [1.4](lessons/01-04-list-pr-divisor-methods.md), [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md)

### Modified Sainte-Lague

**Sainte-Lague with only the first divisor raised, so a party's first seat is harder to win and every
later seat is unchanged.** Norway uses 1.4 (Election Act 2023); Sweden uses 1.2 (Elections Act 2005:837
ch. 14 s. 3, as amended in 2014). Then 3, 5, 7, ... as usual.

- Raises the first-seat bar from 0.5 to 0.7 of a price (1.2: to 0.6). It brakes entry of very small
  parties and stays neutral among parties already seated.
- Check: in [1.4](lessons/01-04-list-pr-divisor-methods.md) Example 1 the 1.4 divisor moves D's seat to C (9,000/1.4 = 6,429 below C's 7,000);
  with 1.2 D keeps it (7,500).

*Lessons:* [1.4](lessons/01-04-list-pr-divisor-methods.md)

### Mixed-member proportional

**Two votes; the party vote fixes each party's total, and constituency wins are an advance payment on
it, with list seats paying the balance.** Winning more districts changes *who* sits for a party, not
*how many*. Arithmetic: [MMP top-up arithmetic](#mmp-top-up-arithmetic).

- **New Zealand** (as of 2026): Sainte-Lague; threshold 5% of the party vote or one electorate seat;
  overhang kept uncompensated, so the nominal 120-seat House can exceed 120. MMP was adopted by the
  1993 referendum and first used in 1996.
- **Germany** (as of 2026): 630 seats, 299 constituencies, Sainte-Lague in divisor form,
  [second-vote coverage](#second-vote-coverage), 5% threshold with the three-constituency exception.
- **Mechanical:** totals track the party vote, overhang and thresholds aside; the list tier is a
  correction, not a sample.
- **Where the rule runs out:** compensation assumes the same party contests both tiers. A **decoy
  list** (supporters give party votes to a nominally separate list while electing the big party's
  district candidates) defeats it, and no divisor can tell a decoy from a genuine ally.
- **Empirical, contested:** contamination (Ferrara, Herron and Nishikawa: district candidacies raise a
  party's list vote); Shugart and Wattenberg treat mixed systems as a distinct family.

*Lessons:* [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md)

### Parallel system

**Two tiers counted separately and added, with no compensation: $s_i = c_i + \ell_i$.** Also called
mixed-member majoritarian. Results sit between plurality and PR, depending on the ratio of tiers.

- **Japan** (as of 2026): 465 members, 289 single-member districts plus 176 list seats in 11 regional
  blocs, D'Hondt (Public Offices Election Act arts. 4, 95-2). Adopted in 1994 and first used in 1996
  (then 300 plus 200).
- The seat bonus to the party leading the plurality tier is **mechanical**; whether it shrinks the
  party system or changes voting is empirical ([2.3](lessons/02-03-duvergers-law-observed.md)).
- [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md) Example 1: the same votes give Red 42% of seats under MMP and 50% under parallel.

*Lessons:* [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md), [2.4](lessons/02-04-districts-and-electoral-reform.md)

### Overhang and balance seats

**An overhang arises when a party wins more constituencies than its party vote entitles it to,
$c_i > e_i$; the rule for what happens next shows what an MMP system values most.**

- **Keep it uncompensated** (New Zealand): the house grows by the overhang. Gives up exact
  proportionality.
- **Add balance seats** (Germany from 2013 until the 2023 reform): extend the quotient table until every
  entitlement covers district wins. Gives up a fixed house size; the balance seat may go to a third
  party ([1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md) Example 2).
- **Second-vote coverage** (Germany since 2023): leave the weakest district winners unseated. Gives up
  a local plurality winner's seat.
- The three rules protect the voters' local choice, the overall proportions, or the house size; the
  count cannot say which matters most.

*Lessons:* [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md)

### Second-vote coverage

**Germany's rule since the 2023 reform: a party's constituency winners are seated only as far as its
second votes cover.** The Bundestag is fixed at 630 seats with 299 constituencies. Within each Land
list, the party's winners are ranked by first-vote share and the lowest-share winners go unseated,
leaving their constituencies without a constituency member.

- The Federal Constitutional Court upheld coverage unanimously on 30 July 2024 (2 BvF 1/23); by 7 to 1
  it struck the reformed 5% threshold, which applies with the three-constituency exception restored until
  new legislation. The 2025 federal election was the first under these rules.
- Defeats a decoy list: winners with no second votes behind them are not seated ([1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md) P3).

*Lessons:* [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md)

### Legal threshold

**A statutory minimum vote share below which a list is dropped from the count.** The barrier a list
actually faces is the larger of the legal and the [effective threshold](#effective-threshold), and
*where* the legal one is measured matters: a national test catches a concentrated party that clears
district arithmetic.

| Country (as of 2026) | Legal threshold |
|---|---|
| Germany | 5% of national second votes, or 3 constituency wins (exception restored by the Federal Constitutional Court, 30 July 2024, 2 BvF 1/23, pending new legislation) |
| New Zealand | 5% of the party vote, or one electorate seat |
| Israel | 3.25% (since 2014), 120 seats in one national district |
| Turkey | 7% nationally (cut from 10% in 2022); seats by D'Hondt in districts |
| Spain | 3% of valid votes within each province (LOREG art. 163.1.a) |
| Netherlands | none beyond one full quota, 1/150 (about 0.67%) |

- Crossover magnitude $M^* = 75\%/T - 1$: 14 for 5%, about 22.1 for 3.25%, 24 for 3%, about 9.7
  for 7%. Spain's 3% can bind only in the very largest provinces; Israel's 3.25% binds about five times
  over its natural 0.62%.
- New Zealand's one-seat rule and Germany's three-constituency exception differ in reach; both let a
  regionally concentrated party past a national threshold. Turkey's rule has no such escape.
- A threshold that never binds changes no allocation when abolished; any change would come through
  behaviour ([2.2](lessons/02-02-district-magnitude-and-thresholds.md) P3).

*Lessons:* [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md), [1.4](lessons/01-04-list-pr-divisor-methods.md), [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md), [2.2](lessons/02-02-district-magnitude-and-thresholds.md)

### Effective threshold

**The vote share that gives a list roughly even odds of a first seat in a district, about
$75\%/(M+1)$.** A rule of thumb sitting inside the mechanical band between the thresholds of
[inclusion and exclusion](#thresholds-of-inclusion-and-exclusion); the 75 is a calibration.

- Arend Lijphart (*Electoral Systems and Party Systems*, 1994) took the midpoint of inclusion and
  exclusion; the 75% version is the one used by Taagepera and by Michael Gallagher.
- Values: $M = 3$: 18.75%; 4: 15%; 7: 9.4%; 9: 7.5%; 10: about 6.8%; 20: 3.57%; 120: 0.62%.
- District-level, not national: a party with 7.8% nationally could win nowhere ([2.2](lessons/02-02-district-magnitude-and-thresholds.md) Example 2).
- Not a guarantee: lists below it can win and above it can lose (that guarantee is the exclusion
  threshold).
- Sainte-Lague and largest remainders lower the bar for small lists.

*Lessons:* [1.4](lessons/01-04-list-pr-divisor-methods.md), [2.2](lessons/02-02-district-magnitude-and-thresholds.md), [2.4](lessons/02-04-districts-and-electoral-reform.md)

## What electoral systems do

Module 2. Measuring outcomes, the thresholds magnitude creates, Duverger's two effects, and who draws
the lines and changes the rules.

### Loosemore-Hanby index

**The total seat-share gain of the over-represented parties: the percentage of seats that would have to
change hands to make the result exactly proportional.** $\mathrm{LH} = \tfrac12\sum_i \lvert s_i - v_i\rvert$
(John Loosemore and Victor Hanby, *British Journal of Political Science*, 1971).

- Counts every misplaced point equally; unchanged when same-sign gaps are split or merged, so it does
  not move when an analyst merges rows.
- Defenders: the most direct reading (seats to move).
- Blind to who gained, to votes never cast, and to how the table was drawn.
- Measure-theory reading: LH is the positive part (half the total variation) of the signed measure of
  gaps ([2.1](lessons/02-01-measuring-outcomes.md) Connections).

*Lessons:* [2.1](lessons/02-01-measuring-outcomes.md)

### Gallagher index

**A least-squares disproportionality index that squares each seat-vote gap, so one large gap outweighs
many small ones.** $\mathrm{LSq} = \sqrt{\tfrac12\sum_i (s_i - v_i)^2}$ (Michael Gallagher, *Electoral
Studies*, 1991).

- $\mathrm{LSq} \le \mathrm{LH}$ always; equal only with one gainer and one loser.
- Sensitive to grouping: seven small parties recorded separately gave 7.94, as one "others" row 12.12
  ([2.1](lessons/02-01-measuring-outcomes.md) Example 2). Splitting one over-represented party into two lowers it although no voter's
  representation changed ([2.1](lessons/02-01-measuring-outcomes.md) P3).
- Defenders: concentrated distortion is what turns into majorities. Critics: an index that moves when a
  row is split measures the party list, not representation.
- Lijphart's disproportionality measure, variable 4 on the executives-parties dimension: 1945 to 2010
  mean 8.55 (UK 11.70, Switzerland 2.55, US 14.28) ([6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)).
- [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md) Example 1 scores MMP about 4.2 and parallel about 10.2 on the same votes.

*Lessons:* [2.1](lessons/02-01-measuring-outcomes.md), [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md), [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)

### Effective number of parties

**How many equal-sized parties would be as concentrated as this result: $N = 1/\sum_i p_i^2$, shares as
fractions.** Markku Laakso and Rein Taagepera (*Comparative Political Studies*, 1979). $N_v$ from votes,
$N_s$ from seats.

- $k$ equal parties give $N = k$; the reciprocal of the Herfindahl-Hirschman index.
- Measures concentration, **not** whether a majority exists: a council with ten seated parties and
  $N_s \approx 2.44$ had a single-party majority ([2.1](lessons/02-01-measuring-outcomes.md) P2).
- Golosov's alternative (*Party Politics*, 2010) scores each party against the largest and reports fewer
  effective parties when one towers over many small ones.
- Uses: $N_v$ to $N_s$ is the mechanical squeeze ([2.3](lessons/02-03-duvergers-law-observed.md)); $N_s$ is what the seat product predicts
  ([2.2](lessons/02-02-district-magnitude-and-thresholds.md)); district versus national values separate the district law from national outcomes ([2.3](lessons/02-03-duvergers-law-observed.md));
  weighs by size, against Sartori's count by function ([4.4](lessons/04-04-party-systems.md)); Lijphart's variable 3, by parliamentary
  seats, 36-country mean 3.19 for 1945 to 2010 (UK 2.16, Switzerland 5.20, Germany 3.09) ([6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)).

*Lessons:* [2.1](lessons/02-01-measuring-outcomes.md), [2.2](lessons/02-02-district-magnitude-and-thresholds.md), [2.3](lessons/02-03-duvergers-law-observed.md), [4.4](lessons/04-04-party-systems.md), [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)

### Thresholds of inclusion and exclusion

**Under D'Hondt in a district of $M$ seats with $p$ lists, more than $100\%/(M+1)$ guarantees a seat
whatever rivals do, and less than $100\%/(M+p-1)$ cannot win however they split.** Both are
**mechanical**. Between them a list's fate depends on how its rivals divide.

- Exclusion = the Droop quota as a share: a quarter to a sixth of the vote in Ireland's three- to
  five-seat constituencies.
- Inclusion's best case: one big rival just under $M$ times your vote takes $M - 1$ seats, the other
  $p - 2$ lists sit just below you. The floor falls as more lists run.
- Example: $M = 4$ gives 20% and, with 5 lists, 12.5%; a list on 19% lost in one district and 14% won in
  another ([2.2](lessons/02-02-district-magnitude-and-thresholds.md) Example 1).

*Lessons:* [2.2](lessons/02-02-district-magnitude-and-thresholds.md)

### Seat product model

**The average effective number of seat-winning parties is about the sixth root of mean district
magnitude times assembly size: $N_s \approx (MS)^{1/6}$.** Rein Taagepera, *Predicting Party Sizes:
The Logic of Simple Electoral Systems* (2007); Matthew Shugart and Rein Taagepera, *Votes from Seats*
(2017).

- **Empirical** central tendency, logically motivated rather than merely fitted; predicts an average,
  and countries scatter around it. No published spread is given in the course.
- Contains no threshold or cleavage term, so a fit cannot credit a threshold, and a country with either
  can sit off the curve without the formula saying why.
- Causation can run backwards: parties choose magnitudes, so an already fragmented system may adopt high
  magnitude ([2.2](lessons/02-02-district-magnitude-and-thresholds.md)).

*Lessons:* [2.2](lessons/02-02-district-magnitude-and-thresholds.md)

### Duvergers law

**Plurality elections in single-member districts favour two parties.** Maurice Duverger, *Les partis
politiques* (1951), who said it came close to a true sociological law.

- Two engines: the [mechanical and psychological effects](#mechanical-and-psychological-effects).
- **Strong at district level** (two serious candidates per seat), with national exceptions (Canada,
  India, the UK): national two-partism needs [party linkage](#party-linkage), which the rule does not
  supply.
- The converse "hypothesis" that PR and runoffs favour multipartism is weaker (William Riker, *APSR*,
  1982): PR permits, it does not produce (Malta: STV, two parties). Clark and Golder (2006): the number
  of parties rises with social diversity only where the system is permissive.
- Real cases ([2.3](lessons/02-03-duvergers-law-observed.md)): UK 2015, UKIP about one vote in eight UK-wide and one seat, while the SNP took
  half the Scottish vote and 56 of 59 Scottish seats; Canada 1993, the Bloc Quebecois won about half the
  Quebec vote, 54 seats and Official Opposition. Concentration shelters a regional party.
- See [Debates](#duvergers-exceptions).

*Lessons:* [2.3](lessons/02-03-duvergers-law-observed.md)

### Mechanical and psychological effects

**The mechanical effect is what the count does to a fixed set of votes within one election; the
psychological effect is what voters, donors and candidates do once they anticipate it.** The first is
arithmetic; the second is **empirical** and can fail.

- Mechanical: under FPTP a party third everywhere wins nothing; the fall from $N_v$ to $N_s$.
- Psychological: desertion of expected losers *in the district*, sharpest where the top two are close
  and the third party's voters could decide between them.
- A third party's vote falling between elections is not the mechanical effect; if strategic, it is the
  psychological one. Results alone cannot separate desertion from lost popularity; first-preference
  surveys, where deserters went, or a simultaneous PR ballot can.
- Strategic desertion shrinks small parties' vote shares before the count, so a low disproportionality
  index can hide it ([2.1](lessons/02-01-measuring-outcomes.md)).
- Germany 2025: CDU and SPD constituency-vote shares exceeded their list-vote shares by 2.9 and 3.7
  points; Greens, FDP and Die Linke the reverse, the pattern desertion predicts (personal appeal feeds
  it too).

*Lessons:* [2.1](lessons/02-01-measuring-outcomes.md), [2.3](lessons/02-03-duvergers-law-observed.md)

### Wasted votes

**Votes that helped elect no one.** Under plurality: every vote for a losing candidate and, in the
efficiency-gap convention, every winner's vote beyond half the district total.

- [2.3](lessons/02-03-duvergers-law-observed.md) counts only votes for losers, the part that drives the psychological effect: spread support
  wastes votes, concentrated support does not.
- [2.4](lessons/02-04-districts-and-electoral-reform.md) counts both parts; whoever draws the lines decides how wasting is shared out (packing raises
  wasted surplus, cracking wasted losing votes).

*Lessons:* [2.3](lessons/02-03-duvergers-law-observed.md), [2.4](lessons/02-04-districts-and-electoral-reform.md)

### M plus 1 rule

**In a district electing $M$ members, strategic desertion tends to leave at most $M + 1$ viable
candidates: two under first-past-the-post.** Gary Cox, *Making Votes Count* (1997).

- Here an empirical regularity, fairly robust at district level with known departures; why it is an
  equilibrium of strategic voting, and when it is not, is [`political-economy`](../political-economy/syllabus.md) 2.5's.
- Desertion is weak where no vote can change the result (a safe regional stronghold), and strong where
  a third party's voters outnumber the gap between the top two ([2.3](lessons/02-03-duvergers-law-observed.md) Example 2).

*Lessons:* [2.3](lessons/02-03-duvergers-law-observed.md)

### Party linkage

**Cross-district coordination: national two-partism needs the same two parties to be the pair in every
district, and plurality does not supply that.** Cox's term. Pradeep Chhibber and Ken Kollman (*The
Formation of National Party Systems*, 2004) argue linkage is stronger when power is centralized
nationally.

- Regional parties break *national*, not district, two-partism; India is the standard case of
  state-level pairs that differ from state to state.

*Lessons:* [2.3](lessons/02-03-duvergers-law-observed.md)

### Malapportionment

**Unequal population per seat, so some voters count for more in the seat count.** No clever drawing is
needed. Measured by the Samuels-Snyder index $\text{MAL} = \tfrac12\sum_i \lvert s_i - p_i\rvert$ (David
Samuels and Richard Snyder, *BJPolS*, 2001) and by the smallest population share that could elect a
majority ([Districting formulas](#districting-formulas)).

- **Empirical:** in Samuels and Snyder's 78-country data, single-member districts go with higher
  lower-chamber malapportionment (a cross-national association, not a causal estimate).
- Equal districts give MAL = 0 but do **not** prevent gerrymandering; the two need different remedies.

*Lessons:* [2.4](lessons/02-04-districts-and-electoral-reform.md)

### Gerrymandering

**Drawing equal-population lines to waste an opponent's votes.** Two moves: **packing** (a few districts
the opponent wins by huge margins) and **cracking** (many districts it narrowly loses).

- [2.4](lessons/02-04-districts-and-electoral-reform.md) Example 1: the same 46% Blue vote gives 0, 3 or 2 of 5 seats under three equal-size maps.
- Equal-size, contiguous, compact rules can still leave both a 0-seat and a 2-seat map legal; then
  discretion ("local ties ... if and to such extent as they think fit", UK) and who holds the pen decide.
- US justiciability of partisan maps is [`constitutional-law`](../constitutional-law/syllabus.md)'s.

*Lessons:* [2.4](lessons/02-04-districts-and-electoral-reform.md)

### Efficiency gap

**The difference between two parties' wasted votes as a share of all votes cast,
$\text{EG} = (W_B - W_R)/V$.** Nicholas Stephanopoulos and Eric McGhee (*University of Chicago Law Review*).
Positive means the map wastes more of $B$'s votes.

- A **mechanical** fact about a map. Reading it as intent is **empirical**: Jowei Chen and Jonathan
  Rodden argue that when one party's voters cluster in cities, neutral compact maps pack them anyway;
  separating intent from geography needs simulated neutral maps
  ([`empirical-political-economy`](../empirical-political-economy/syllabus.md)).
- With few districts a single close race swings it by many points.

*Lessons:* [2.4](lessons/02-04-districts-and-electoral-reform.md)

### Boundary commissions

**Who holds the pen is a design choice in its own right.** As of 2026:

- **UK:** four commissions (England, Scotland, Wales, Northern Ireland), 650 constituencies, each
  electorate within 95% to 105% of the UK electoral quota (Parliamentary Constituencies Act 1986 Sch. 2
  r. 2, as amended 2020); five island seats exempt by name (two on the Isle of Wight); commissions may
  weigh local ties "if and to such extent as they think fit" (r. 5).
- **Canada:** a three-member commission for each of ten provinces, chaired by a judge appointed by the
  province's chief justice; districts within plus or minus 25% of the provincial quota (Electoral
  Boundaries Readjustment Act s. 15(2)).
- **US:** in most states the legislature draws the congressional map as ordinary legislation; a
  minority use commissions.

*Lessons:* [2.4](lessons/02-04-districts-and-electoral-reform.md)

### Seat-maximizing view of reform

**Electoral laws change when a coalition of parties expects to gain seats from the change and has the
votes to enact it.** Kenneth Benoit, "Electoral Laws as Political Consequences", *Annual Review of
Political Science* (2007), tested on Poland's reforms 1989 to 2001. Carles Boix: early-twentieth-century
adoptions of PR as insurance for threatened incumbents.

| Episode | What happened | Rule that decided |
|---|---|---|
| New Zealand | FPTP gave National a seat majority on fewer votes than Labour in 1978 and 1981; Royal Commission recommended MMP (1986); 1992 indicative referendum nearly 85% for change; 1993 binding referendum about 54-46 for MMP; first MMP election 1996 | a binding referendum neither major party wanted |
| Japan | SNTV in 1- to 6-seat districts from 1947; LDP split and lost power 1993; 1994 reform to a parallel system, first used 1996 (300 plus 200 seats, 11 blocs) | ordinary legislation once the dominant party lost its majority |
| UK | 2010 coalition offered a referendum on AV, not PR; rejected 5 May 2011 by 67.9% to 32.1% on 42% turnout | a referendum on the narrower reform the larger partner would allow |

- **Strength:** fits cases where parties control the outcome; weakest where reform was most dramatic
  (New Zealand). A handful of major switches in established democracies: well-studied cases, not a
  regularity.

*Lessons:* [2.4](lessons/02-04-districts-and-electoral-reform.md)

## Executive-legislative relations

Module 3. Two questions sort every executive: who can remove the government, and who can call an
election? Vote-count bases (members versus votes cast) are in
[Majorities and supermajorities in a chamber](#majorities-and-supermajorities-in-a-chamber); country
rules are tabled in [Executives, confidence and dissolution](#executives-confidence-and-dissolution).

### Parliamentary government

**The head of government and cabinet hold office only while the elected chamber tolerates them.**
Walter Bagehot (*The English Constitution*, 1867) called it the near-**fusion** of executive and
legislative power: the cabinet is in effect a committee of the parliamentary majority.

- Two levers pointing opposite ways: [confidence](#confidence-and-no-confidence) (chamber removes
  government) and [dissolution](#dissolution) (government ends the chamber's term).
- Westminster makes removal easy and lets the prime minister pick the election date; Germany makes
  removal hard (agree on a replacement) and elections hard to call.
- **Empirical:** formal defeats are rare; most cabinets end at scheduled elections, coalition breakups
  or resignations (a literature including Laver and Schofield, *Multiparty Government*, 1990). Why
  (deterrence or settling quarrels first) is contested.
- Montesquieu's objection to ministers taken from the legislature is the backdrop
  ([`history-of-political-thought` 5.1](../history-of-political-thought/lessons/05-01-montesquieu-the-spirit-of-the-laws.md)).

*Lessons:* [3.1](lessons/03-01-parliamentary-government.md), [3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md)

### Confidence and no-confidence

**A parliamentary cabinet survives only while the chamber does not vote it out; the rule says who may
pull the trigger and by what count.**

- **Westminster:** an explicit no-confidence motion carried by a simple majority of those voting; by
  convention the prime minister resigns or requests dissolution. 28 March 1979: Callaghan's government
  lost 311 to 310 (Hansard), the only UK government confidence defeat since the 1920s.
- **Germany:** only the [constructive](#constructive-vote-of-no-confidence) route (Art. 67). Leaders can
  attach confidence to a bill: Art. 68(1), a failed confidence motion lets the President dissolve
  within 21 days on the Chancellor's proposal.
- **France:** censure (Art. 49 para. 2) needs one tenth of members' signatures, a 48-hour wait, counts
  only votes in favour, and passes only with a majority of all members; Art. 50 then requires the
  government to resign. Abstention counts for the government.
- **Presidential systems remove the link** ([3.3](lessons/03-03-presidential-government.md)); Italy is the bicameral exception where the
  government needs both Houses' confidence (Art. 94) ([4.1](lessons/04-01-bicameralism.md)).
- **Cohesion:** attaching confidence to a bill fuses party survival with government survival
  ([4.3](lessons/04-03-parties-organization-and-discipline.md) Example 1 lifted a party's Rice index from 0.65 to about 0.97).
- Abstention is a no under an absolute-majority-of-members rule and harmless under a votes-cast rule.

*Lessons:* [3.1](lessons/03-01-parliamentary-government.md), [3.3](lessons/03-03-presidential-government.md), [3.4](lessons/03-04-semi-presidential-government.md), [4.3](lessons/04-03-parties-organization-and-discipline.md)

### Constructive vote of no confidence

**The Bundestag may remove the Chancellor only by electing a successor by a majority of its Members,
in the same act.** Basic Law Art. 67: "only" excludes the ordinary no-confidence motion; removal and
replacement are one act; the President "must comply"; 48 hours between motion and election.

- **Kanzlermehrheit:** a majority of all Members, so abstaining or staying away counts as no.
- 27 April 1972: Rainer Barzel got 247 votes against Brandt, 249 needed of 496 voting Members (governing
  parties' members mostly did not vote). 1 October 1982: Helmut Kohl elected with 256, 249 needed, after
  the Free Democrats left Schmidt's coalition.
- Spain's Constitution Art. 113: a censure motion must name a candidate for prime minister.
- Trade-off: continuity (a merely negative majority cannot topple a chancellor) at the price of a
  possible government without a working majority ([3.1](lessons/03-01-parliamentary-government.md) P2).

*Lessons:* [3.1](lessons/03-01-parliamentary-government.md)

### Dissolution

**The power to end a parliament's term early and force an election; who holds it, and on what
conditions, is the second lever of parliamentary government.**

- **UK:** a royal prerogative exercised on the prime minister's request. The Fixed-term Parliaments Act
  2011 required a two-thirds Commons vote (of seats, including vacant) or a no-confidence vote plus 14
  days without a confidence vote; bypassed by the one-line Early Parliamentary General Election Act 2019
  (election on 12 December). The Dissolution and Calling of Parliament Act 2022: s.1 repeals the 2011
  Act, s.2 revives the prerogative, s.3 makes its use non-justiciable, s.4 dissolves a Parliament
  automatically five years after it first met.
- **Germany:** no self-dissolution. Art. 68: failed confidence motion, then the President **may** dissolve
  within 21 days on the Chancellor's proposal; the right lapses if the Bundestag elects another chancellor
  by a majority of Members. Art. 63(4): after a failed election the President appoints a minority
  chancellor or dissolves. Engineered defeats: Brandt 1972, Kohl December 1982; the Federal Constitutional
  Court let the January 1983 dissolution stand (BVerfGE 62, 1, 16 February 1983).
- **France:** Art. 12, the president may dissolve the National Assembly after consulting the prime
  minister and the presidents of both houses; election in 20 to 40 days; no further dissolution within a
  year of that election.
- **Presidential systems:** none; the president cannot dissolve the legislature ([3.3](lessons/03-03-presidential-government.md)).
- The threat raises the cost of rebellion ([4.3](lessons/04-03-parties-organization-and-discipline.md)).

*Lessons:* [3.1](lessons/03-01-parliamentary-government.md), [3.3](lessons/03-03-presidential-government.md), [3.4](lessons/03-04-semi-presidential-government.md), [4.3](lessons/04-03-parties-organization-and-discipline.md)

### Westminster conventions

**Rules of practice, not statute: the monarch appoints whoever can command the Commons' confidence; a
government defeated on no-confidence resigns or requests dissolution.**

- No investiture vote is required.
- The **Lascelles principles** (1950) on when the sovereign may refuse a dissolution: in abeyance 2011 to
  2022 and generally taken to have revived.
- Non-justiciable for dissolution (DCPA 2022 s.3). The text tells you who decides, not what they will
  decide.
- A budget defeat is a confidence matter by Westminster convention; a constitution that copies only
  Germany's text contains no such rule ([3.1](lessons/03-01-parliamentary-government.md) P2).

*Lessons:* [3.1](lessons/03-01-parliamentary-government.md)

### Investiture vote

**A vote the nominee for head of government must pass (or must not lose) to take office.** The rule is
the guard at the gate after coalition talks.

| Kind | Rule (texts in force 2025) |
|---|---|
| Positive, absolute majority | Germany Art. 63(2): elected by a majority of Members (abstention = no). If no one is elected, within 14 days by majority of Members; then a round won by the most votes, after which the President appoints or dissolves within 7 days (Art. 63(4)) |
| Positive, falling bar | Spain Art. 99: absolute majority, else more yes than no 48 hours later; dissolution if no one is invested within two months of the first vote |
| Negative | Sweden Instrument of Government ch. 6 art. 4: rejected only if more than half of all members vote against (abstention lets the nominee through) |
| None | Norway (King chooses the Council, Art. 12); Westminster; France (Art. 49 para. 1 says the PM *may* seek one) |

- Investiture is a gate, not a guarantee: budgets must still pass ([3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md) Example 2).

*Lessons:* [3.1](lessons/03-01-parliamentary-government.md), [3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md), [3.4](lessons/03-04-semi-presidential-government.md)

### Caretaker government

**The outgoing cabinet keeps running affairs until a successor takes office: the state is never without
a government, only without a new one.**

- Germany Art. 69(3): at the Federal President's request the Chancellor (and ministers) must continue to
  manage affairs until a successor is appointed.
- Spain Art. 101(2) and Sweden IoG ch. 6 art. 11 keep the outgoing government in office automatically.
- Norway Art. 15 limits a government that lost a confidence vote to business required for the proper
  discharge of its duties.
- Elsewhere the limits are convention, not text. The caretaker question does not depend on the
  investiture rule.

*Lessons:* [3.1](lessons/03-01-parliamentary-government.md), [3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md)

### Formateur

**The politician, usually the likely prime minister, who negotiates the programme and the allocation of
ministries after an informateur has mapped which parties are willing to deal.**

- Appointed traditionally by the head of state (Belgium: the King); in the Netherlands, by the House of
  Representatives itself since 2012 (the House's own account).
- Spain: the King consults and nominates through the Speaker (Art. 99); Sweden: the Speaker consults and
  proposes.
- Belgium after the 13 June 2010 election took 541 days until a government was sworn in (December 2011).
- Which coalitions *should* form (minimal winning, Gamson's law, Baron-Ferejohn) is modelled in
  [`political-economy`](../political-economy/syllabus.md) 5.1 to 5.2.

*Lessons:* [3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md)

### Positive and negative parliamentarism

**Positive: a government needs a majority *for* it. Negative: it needs only the absence of a majority
*against* it.** Terms from Torbjorn Bergman's comparative work on formation rules.

- Positive: Germany, Spain. Negative: Sweden (negative investiture vote), Norway (no vote at all); France
  is negatively parliamentary in this sense ([3.4](lessons/03-04-semi-presidential-government.md)).
- **Empirical:** negative rules correlate with more frequent minority governments; few cases, confounded
  by the Scandinavian setting (strong committees, two-bloc politics), and parties may have chosen the
  rules that suit minority government.

*Lessons:* [3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md), [3.4](lessons/03-04-semi-presidential-government.md)

### Coalition agreement

**A written programme, sometimes with dispute rules, signed by coalition partners: a political contract,
not law.** No court enforces it; the sanction is exit and the government's fall.

- Studies of Western European coalitions (Muller and Strom among them) report agreements becoming more
  common and detailed over the post-war decades: a descriptive trend.
- Coalition partners hold ministries and share responsibility; a support party holds none and is bound
  only on what it signed.

*Lessons:* [3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md)

### Minority government

**A cabinet holding fewer than half the seats, surviving because enough of the opposition will not vote
it down.** Often via a support (confidence-and-supply) deal.

- Canada: Liberal-NDP supply-and-confidence agreement of 22 March 2022, planned to June 2025, ended by
  the NDP in September 2024; no NDP minister.
- Kaare Strom (*Minority Government and Majority Rule*, 1990): can be a rational choice where opposition
  parties shape policy through committees without the electoral cost of governing. Contested once
  selection is accounted for.
- **Empirical, fairly consistent (Western Europe):** formation takes longer with more parties and greater
  ideological distance (Martin and Vanberg among others).
- The largest party has no formal claim to govern (mechanical); that it usually leads the talks is an
  empirical pattern.
- A semi-presidential government can also be a tolerated minority ([3.4](lessons/03-04-semi-presidential-government.md) Example 2).

*Lessons:* [3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md), [3.4](lessons/03-04-semi-presidential-government.md)

### Presidential government

**Separate origin and separate survival: voters elect the executive and the legislature separately, each
serves a fixed term, and neither can remove the other for losing support.** Shugart and Carey
(*Presidents and Assemblies*, 1992) add that the president names and directs the cabinet and holds some
constitutional lawmaking power.

- No confidence vote, no dissolution. US removal is impeachment for "Treason, Bribery, or other high Crimes
  and Misdemeanors" (Art. II s.4): House impeaches by majority, conviction by two-thirds of senators
  present. Designed for wrongdoing, not a lost policy fight.
- Conflict is settled by bargaining, vetoes, defaults and the calendar.
- US terms: president four years (Electoral College), House two, Senate six, staggered by thirds.
- Any directly elected president is not enough: if the cabinet needs the assembly's confidence, the system
  is semi-presidential.
- Test both parts: assembly-elected president lacks separate origin; an assembly that can remove the
  president for no stated cause removes separate survival ([3.3](lessons/03-03-presidential-government.md)).

*Lessons:* [3.3](lessons/03-03-presidential-government.md), [3.4](lessons/03-04-semi-presidential-government.md)

### Divided government

**The president's party lacks a majority in one or both chambers.** Mechanically, each side gets a veto
point.

- **Empirical, contested:** David Mayhew (*Divided We Govern*, 1991): about as many major laws in divided
  as unified periods, 1946 to 1990. Sarah Binder (*Stalemate*, 2003): divided government raises the share
  of salient agenda issues left unresolved. The answer turns on the denominator.

*Lessons:* [3.3](lessons/03-03-presidential-government.md)

### Veto and override

**A package veto returns a bill to the legislature, which can override only by a supermajority.** US
Art. I s.7: two-thirds of each House, counted among members present, a quorum being present (*Missouri
Pacific Railway Co. v. Kansas*, 1919). Arithmetic: [Veto override and cloture arithmetic](#veto-override-and-cloture-arithmetic).

- A president holding one-third plus one of those voting in either chamber cannot be overridden; absences
  on the president's side lower the bar.
- **Line-item veto:** the Line Item Veto Act of 1996 was struck down in *Clinton v. City of New York*
  (1998); many US state governors hold one.
- **Brazil** (constitution as amended to 2013, Art. 66): partial veto down to a whole article, paragraph or
  item; a joint session overrides by an absolute majority of deputies and senators.
- If the override fails, the bill dies and the old law stands; the rule says nothing about what follows.

*Lessons:* [3.3](lessons/03-03-presidential-government.md)

### Decree powers

**A proactive power that lets the president move the status quo first; what matters is which side
silence favours.** Mainwaring and Shugart (*Presidentialism and Democracy in Latin America*, 1997)
separate reactive powers (the veto) from proactive ones.

- **Lapse unless approved:** Brazil's provisional measures (Art. 62), in cases of relevance and urgency,
  with force of law, lose effect unless converted within 60 days, extendable once.
- **In force unless rejected:** Argentina's 2006 implementing law kept a necessity-and-urgency decree in
  force unless both chambers rejected it (stated in the past tense; later changes not verified).
- **Budget reversion, same logic:** US Art. I s.9, no appropriation, no spending (a shutdown); Chile, the
  president's budget takes effect if Congress has not dispatched it within 60 days.
- Whoever's preferred outcome is the default holds the stronger hand. Even a lapsing decree is law from
  day one.

*Lessons:* [3.3](lessons/03-03-presidential-government.md), [4.1](lessons/04-01-bicameralism.md)

### Perils of presidentialism

**Juan Linz ("The Perils of Presidentialism", *Journal of Democracy*, 1990) argued that the design itself
endangers democracy.** Three mechanisms: **dual legitimacy** (both branches claim a mandate, no principle
says whose wins), **rigidity** (fixed terms cannot be cut short), **winner-take-all** (one indivisible
prize).

- The raw association (presidential democracies broke down more often post-war) is well documented; its
  cause is contested.
- Critics: Jose Antonio Cheibub (*Presidentialism, Parliamentarism, and Democracy*): presidentialism was
  disproportionately adopted after military rule, which makes any democracy fragile. Mainwaring and
  Shugart: trouble concentrates where fragmented legislatures meet strong presidential legislative powers;
  the design has advantages (identifiable executive, mutual checks).
- See [Debates](#linz-and-his-critics).

*Lessons:* [3.3](lessons/03-03-presidential-government.md)

### Semi-presidential government

**A popularly elected president alongside a prime minister and cabinet who stay in office only while
the assembly does not oppose them.** Maurice Duverger, "A New Political System Model: Semi-Presidential
Government" (1980), required a president with quite considerable powers; Robert Elgie's minimal
definition drops that clause (elected fixed-term president plus PM and cabinet responsible to the
assembly).

- France since 1958 is the standard case. Classify by text (who elects the president, who can dismiss the
  cabinet), not by how powerful the president seems.
- Linz's dual-legitimacy worry reappears inside one executive.

*Lessons:* [3.4](lessons/03-04-semi-presidential-government.md)

### Premier-presidential and president-parliamentary

**Shugart and Carey split semi-presidential systems by one question: who can dismiss the cabinet?**

- **Premier-presidential:** only the assembly. France, Art. 8: the president appoints the PM and
  terminates the appointment only on the government's resignation.
- **President-parliamentary:** both. Weimar Arts. 53 to 54: the Reich President appointed and dismissed
  the Chancellor, who also needed the Reichstag's confidence.
- French presidents replacing PMs at will is a convention resting on a shared majority; under cohabitation
  the text decided.
- **Empirical, moderate, contested:** Elgie (*Semi-Presidentialism: Sub-Types and Democratic Performance*,
  2011), across semi-presidential democracies since 1919, associates president-parliamentary systems with
  poorer democratic performance; few cases, non-random adoption.
- A dismissal power is a second power to fire, not to install: it does not let a president impose a PM on
  a hostile majority ([3.4](lessons/03-04-semi-presidential-government.md) P2).

*Lessons:* [3.4](lessons/03-04-semi-presidential-government.md)

### Cohabitation

**A French president facing an opposing Assembly majority must appoint a prime minister it will not
censure, and the government, not the president, determines and conducts national policy (Art. 20).**

- 1986 to 1988 (Mitterrand-Chirac), 1993 to 1995 (Mitterrand-Balladur), 1997 to 2002 (Chirac-Jospin,
  after Chirac's own dissolution).
- Referendum of 24 September 2000 cut the term from seven to five years (about 73% yes, turnout near 30%);
  a 2001 law put Assembly elections a few weeks after the presidential one from 2002. The June 2024
  dissolution broke the alignment.
- **Empirical, suggestive:** all three cohabitations came before the reform; single country, handful of
  elections.
- Foreign and defence policy are not cleanly divided (Arts. 15, 52 versus 21); practice and bargaining
  decide.
- Hung Assembly: the president picks a PM some bloc will tolerate; survival is censure arithmetic.

*Lessons:* [3.4](lessons/03-04-semi-presidential-government.md)

### Article 49-3

**The French prime minister can make a bill a matter of confidence; it is then "considered passed" unless
a censure motion tabled within 24 hours passes under paragraph 2's rules.** Opponents must defeat the
*government* to defeat the bill.

- Paragraph 2's rules: only votes for censure count, and they must reach a majority of all members, so
  every abstention and absence counts for the government.
- Since the revision of 23 July 2008: unlimited for Finance and Social Security Financing Bills, plus one
  other bill per session.
- No vote on the bill itself takes place.
- Barnier government censured 4 December 2024 by 331 votes after using it on the social security financing
  bill: the first successful censure since 1962.
- Operates in the National Assembly only.

*Lessons:* [3.4](lessons/03-04-semi-presidential-government.md)

## Inside legislatures and party systems

Module 4. Second chambers, the gates inside each chamber, why legislators vote together, and the system
of parties around them. Country second chambers are tabled in [Second chambers](#second-chambers).

### Bicameralism

**A legislature of two chambers, in which a bill normally becomes law only when both pass an identical
text.** What a second chamber does depends on its powers ([symmetry](#symmetric-and-asymmetric-bicameralism)),
its composition ([congruence](#congruent-and-incongruent-bicameralism)) and the stopping rule that ends a
disagreement.

- Procedure: identical text, the [navette](#navette), a joint committee, the stopping rule (bill dies,
  lower house overrides, or the executive decides), and bill-type exceptions (money, regional powers,
  constitutional amendments).
- Equal and different = a second veto; equal and same = a duplicate; weak and different = a revising
  chamber; weak and same = little.
- Root: the mixed constitution's senate (Cicero, Machiavelli) and Montesquieu's chambers checking each
  other ([`history-of-political-thought`](../history-of-political-thought/lessons/02-01-cicero-the-commonwealth-and-natural-law.md)).
  Tsebelis and Money (*Bicameralism*, 1997) model stopping rules as bargaining power.

*Lessons:* [4.1](lessons/04-01-bicameralism.md)

### Symmetric and asymmetric bicameralism

**Symmetric: the chambers have equal or only moderately unequal formal powers and comparable democratic
legitimacy; asymmetric: highly unequal.** Lijphart (*Patterns of Democracy*, 2nd ed. 2012).

| Index of bicameralism, 1945 to 2010 | Type | Countries |
|---|---|---|
| 4.0 strong | symmetric and incongruent | US, Germany (as coded), Switzerland, Australia |
| 3.0 medium | symmetric and congruent | Italy, Japan, Netherlands |
| 3.0 medium | asymmetric and incongruent | France, Canada, Spain |
| 2.5 | between | UK |
| 2.0 weak | asymmetric and congruent | Ireland |
| about 1.0 | unicameral | Israel, New Zealand |

- Germany's 4.0 is a judgement call: the Bundesrat can only delay objection bills.
- France is asymmetric for ordinary law (Art. 45) and symmetric for constitutional amendments (Art. 89)
  and institutional acts relating to the Senate (Art. 46); one score cannot show both.
- **Empirical:** weak formal powers need not mean little influence (Meg Russell, *The Contemporary House of
  Lords*: more assertive after 1999; single-country study; anticipated reactions are hard to count).
- Variable 7 on Lijphart's federal-unitary dimension ([6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)).

*Lessons:* [4.1](lessons/04-01-bicameralism.md), [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)

### Congruent and incongruent bicameralism

**About how the chambers are composed, not who controls them: congruent chambers are chosen in similar
ways and so have similar majorities; incongruent ones are chosen differently.** Equal representation of
regions, regional governments, appointment or indirect election make a chamber incongruent.

- Divided control is likelier under incongruence, but congruent chambers can still split: Italy's
  government needs the confidence of both Houses (Art. 94), and both legislate together (Art. 70).

*Lessons:* [4.1](lessons/04-01-bicameralism.md)

### Navette

**The shuttle of a bill between chambers until both pass an identical text.** France (Art. 45, as of
2026): after two readings in each House (one under the accelerated procedure) the Prime Minister may
convene a joint committee (*commission mixte paritaire*, equal numbers from each House); if it fails, the
Government **may** ask the National Assembly to decide finally.

- Exceptions needing identical texts, so the Senate has a veto: constitutional amendments (Art. 89) and
  institutional acts relating to the Senate (Art. 46).
- Whether the Senate is overridden is the government's political choice.

*Lessons:* [4.1](lessons/04-01-bicameralism.md)

### Conference committee

**A US ad hoc joint committee of House and Senate members that drafts a compromise both chambers must
then pass.** There is no override: if the chambers never agree, the bill dies. Differences are now often
settled instead by amendments traded between chambers. Germany's analogue is the Mediation Committee
(Art. 77(2)).

*Lessons:* [4.1](lessons/04-01-bicameralism.md)

### Consent and objection bills

**The German Bundesrat has an absolute veto over consent bills and only an overridable objection to the
rest.** As of 2026: 69 votes, each Land 3 to 6 by population (Art. 51(2)), cast as a unit by Land
government members; decisions need a majority of **all** votes, 35 (Art. 52(3)), so abstention counts as
no.

- **Consent bills** are named provision by provision (for example Art. 105(3), taxes whose revenue goes to
  the Länder; Art. 84(1)).
- **Objection bills:** an objection by 35 is overridden by a majority of the Bundestag's Members; an
  objection by two-thirds (46) needs two-thirds of the Bundestag including a majority of Members
  (Art. 77(4)). The bill becomes law per Art. 78.
- Abstention by mixed-coalition Länder hurts the government on consent bills and helps it on objection
  bills.
- In 2002 the Federal Constitutional Court held that splitting a measure so only one part needs consent is
  constitutionally unobjectionable.
- Bundesrat members are Land ministers, recalled at will, voting en bloc on cabinet instruction; no fixed
  term.

*Lessons:* [4.1](lessons/04-01-bicameralism.md)

### Parliament Acts 1911 and 1949

**The House of Lords can delay most Commons bills by about a year and money bills by a month, but not
stop them.**

- **Money bills** (certified by the Speaker, 1911 s.1(3)) become law one month after reaching the Lords,
  with or without consent (s.1).
- **Other public bills** from the Commons become law if passed by the Commons in two successive sessions
  and rejected by the Lords in each, provided a year separates the Commons second reading in the first
  session and passage in the second (1911 s.2 as amended by the 1949 Act, which cut three sessions and two
  years to two and one).
- **Excluded:** bills extending a Parliament beyond five years; there the Lords keep a full veto.
- **Salisbury convention** (not law): the Lords do not block government bills carrying out manifesto
  commitments.
- The House of Lords (Hereditary Peers) Act 2026 removed the remaining hereditary peers, so the House is
  appointed life peers plus bishops. Used only a handful of times; works mostly as a threat weighed against
  the timetable.

*Lessons:* [4.1](lessons/04-01-bicameralism.md)

### Committee systems

**Small standing bodies with fixed jurisdictions that examine bills before the floor does; strong when
permanent, ministry-shadowing, and seeing bills before the floor approves their principle.**

- US House: standing committees whose chairs decide whether a bill moves; reported bills reach the floor
  through the Rules Committee's special rule (open, structured or closed); suspension needs two-thirds of
  members voting (Rule XV cl. 1).
- Bundestag: permanent committees roughly shadowing ministries; seats and chairs proportional to groups
  (Rule 12); referral after first reading (Rule 80).
- Westminster: a public bill committee set up per bill after second reading, mirroring party strength;
  select committees scrutinize departments, not bills.
- Westminster's timetable belongs to the government: "government business shall have precedence at every
  sitting" (Standing Order 14, text as of 2022), with 20 opposition days, 35 backbench business days (or
  equivalent) and 13 private members' bill Fridays a session.
- Three readings of Congress, all empirical: distributive (Weingast and Marshall, 1988), informational
  (Krehbiel, *Information and Legislative Organization*, 1991), partisan (Cox and McCubbins).
- How much the rules change what passes rests on few cases and rule-based indices.

*Lessons:* [4.2](lessons/04-02-committees-and-agenda-control.md)

### Negative agenda control

**The power to keep a proposal off the floor, as against positive agenda power, pushing one on.** The
gatekeeper can kill a bill without losing a vote; a floor majority decides passage, not consideration.

- A gate can be a person, a committee, a timetable rule or a supermajority rule for ending debate; each
  chamber's version is in its own entry, and finding which one holds a given bill is the diagnostic skill.
- Because leaders call the votes they expect to win, recorded roll calls overstate cohesion ([4.3](lessons/04-03-parties-organization-and-discipline.md)).
- Agenda-setting under cycling is [`political-philosophy` 5.4](../political-philosophy/lessons/05-04-does-social-choice-wound-democracy.md)'s;
  setter models are [`political-economy`](../political-economy/syllabus.md) 3.5's.

*Lessons:* [4.2](lessons/04-02-committees-and-agenda-control.md), [4.3](lessons/04-03-parties-organization-and-discipline.md)

### Cartel theory

**Majority-party members delegate agenda power to the Speaker, the Rules Committee and the chairs, who
keep off the floor any bill most of the party opposes.** Gary Cox and Mathew McCubbins (*Legislative
Leviathan*, 1993; *Setting the Agenda*, 2005).

- Signature prediction: the majority party is rarely **rolled** (a bill passes over the opposition of most
  of its members).
- **Robust descriptive regularity:** low majority roll rates in the Congresses studied. **Contested
  cause:** if the majority party's median sits near the floor median, rolls are rare with no gatekeeping
  (Krehbiel's challenge).
- See [Debates](#cartel-gatekeeping-or-floor-median).

*Lessons:* [4.2](lessons/04-02-committees-and-agenda-control.md)

### Majority of the majority norm

**The informal "Hastert rule": no floor vote on a bill without the support of most of the majority
party.** Followed by Republican Speakers since the mid-1990s; in no House rule; Speakers have broken it.

- Arithmetic: a majority of a 162-member party is 82.

*Lessons:* [4.2](lessons/04-02-committees-and-agenda-control.md)

### Discharge petition

**The House floor's escape hatch: after 30 legislative days in committee, a motion to discharge goes
forward once signed by a majority of the total membership.** US House Rule XV cl. 2; 218 of a full 435;
the Clerk publishes the signatures.

- Majority-party signers act publicly against their leaders, so declared support can far exceed signatures.
- Successful petitions are rare.

*Lessons:* [4.2](lessons/04-02-committees-and-agenda-control.md)

### Filibuster

**In the US Senate, prolonging debate so no vote occurs, which gives a minority negative agenda control
over legislation, ended only by [cloture](#cloture).** On legislation, 41 of a full 100 senators can hold
the gate shut.

*Lessons:* [4.2](lessons/04-02-committees-and-agenda-control.md)

### Cloture

**The vote that ends Senate debate.** Rule XXII: three-fifths of senators duly chosen and sworn (60 of a
full Senate) since 1975; two-thirds of senators voting from 1917 to 1975; two-thirds of those present and
voting on a motion to amend the Senate rules.

- Nominations need a simple majority, by precedents set by majority vote in 2013 (most nominations) and
  2017 (Supreme Court).
- The precedent route interprets the rule rather than amending it, so the two-thirds requirement is never
  triggered: the written threshold does not settle it.

*Lessons:* [4.2](lessons/04-02-committees-and-agenda-control.md), [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md)

### Candidate selection

**The selectorate decides who runs, and a member who wants renomination must satisfy it.** Reuven Hazan
and Gideon Rahat order selectorates by inclusiveness: party leader, delegates' convention, all members,
primary voters.

- Germany (Federal Elections Act ss.21, 27, as of 2026): constituency candidates and Land-list order chosen
  by secret ballot in a members' or delegates' assembly; national leaders cannot simply write the list.
- US Congress: mostly primaries; no party organization can deny the nomination to a primary winner.
- Open lists pass list *order* to voters; only primaries hand *access* to them.

*Lessons:* [4.3](lessons/04-03-parties-organization-and-discipline.md)

### Party discipline

**The sanctions leaders use to make members vote the party line**: whips' counts, promotion, committee
posts, deselection, withdrawal of the whip (Westminster: the MP stays but sits as an independent). Strongest
when tied to confidence and dissolution.

- Discipline (sanctions) is not cohesion (an observed outcome); see [Rice index](#rice-index).
- Germany's free mandate (Art. 38(1): not bound by orders or instructions) bars legal compulsion only;
  renomination, list rank, promotion and the confidence question remain, and Bundestag groups usually vote
  as blocs.
- Party finance: whoever raises the money holds the lever. Germany: Art. 21 requires public accounting;
  Political Parties Act s.18 allots state funding by votes won, contributions and donations raised. US
  candidates raise most money through their own committees.
- Diermeier and Feddersen (*APSR*, 1998): once bills double as votes on who controls the agenda, coalition
  members vote together.
- US Art. I s.6 bars a member of Congress from executive office: a different career ladder.

*Lessons:* [4.3](lessons/04-03-parties-organization-and-discipline.md)

### Personal vote

**Votes a candidate wins on her own reputation rather than her party's.** John Carey and Matthew Shugart
("Incentives to cultivate a personal vote", *Electoral Studies*, 1995) rank systems by four variables.

- **Ballot:** do leaders control access and order? **Pool:** do her votes count for the whole list?
  **Vote:** does the voter choose a party, or one candidate over co-partisans? **District magnitude:**
  raises the personal vote's value where voters choose among co-partisans, lowers it under closed lists.
- Direction (not a precise ranking): closed list, flexible, open list, STV, primary plus plurality.
- The ranking is a deduction; evidence that legislators respond (constituency service, defection) is
  supportive in many single-country studies, uneven across countries.

*Lessons:* [4.3](lessons/04-03-parties-organization-and-discipline.md), [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md)

### Rice index

**Party cohesion on one recorded vote: the party's margin as a share of its voting members,
$R = \lvert Y - N\rvert/(Y + N)$**, with $Y$ and $N$ the party's yes and no votes, abstentions excluded.
1 is unanimous, 0 an even split.

- Measures cohesion, not discipline: agreement and agenda selection produce the same number.
- Recorded votes are selected by agenda control: withdrawing two losing bills barely moves an average of
  0.97 but hides two policies the party could not pass ([4.3](lessons/04-03-parties-organization-and-discipline.md) Example 2).
- **Empirical:** parliamentary parties vote more cohesively than presidential ones (widely reported,
  large overlaps); US congressional voting has become far more party-line since the 1970s with no
  constitutional change; Krehbiel ("Where's the party?", 1993): shared preferences can mimic party
  strength.

*Lessons:* [4.3](lessons/04-03-parties-organization-and-discipline.md)

### Relevant parties

**Sartori's count by function: a party counts if it has coalition potential (it is, or plausibly could
be, needed for a governing majority) or blackmail potential (its presence changes how governing-oriented
parties compete).** Giovanni Sartori, *Parties and Party Systems* (1976).

- A 5% party that makes and breaks governments is a whole party to Sartori and about a twentieth of one to
  $N$.
- A party with no seats and no leverage is not relevant even if anti-system.
- Distance is measured between the two most extreme *relevant* parties (expert surveys or manifesto
  coding).

*Lessons:* [4.4](lessons/04-04-party-systems.md)

### Anti-system parties

**In Sartori's sense, a party that undermines the legitimacy of the regime itself, not merely of the
incumbents.** Distinguish anti-establishment (against the incumbents), a judgement about the party, not a
count. Relevant anti-system parties on both flanks mark polarized pluralism.

*Lessons:* [4.4](lessons/04-04-party-systems.md)

### Moderate and polarized pluralism

**Sartori's types differ in mechanics, not only number: classify by the count of relevant parties and the
distance between the relevant extremes.**

| Type | Relevant parties | Distance | Competition |
|---|---|---|---|
| Predominant | one wins majorities repeatedly | any | elections remain free |
| Two-party | 2 | usually small | centripetal |
| Moderate pluralism | about 3 to 5 | small | centripetal; two blocs alternate |
| Polarized pluralism | about 6 or more | large, anti-system parties on both flanks | centrifugal |

- Polarized: bilateral oppositions, an occupied centre that governs more or less permanently, flanks that
  outbid it. Leading cases: Weimar Germany, post-war Italy. That it destabilizes democracies rests on a
  handful of cases.
- Centrifugal behaviour shows only over several elections; one election cannot classify it.
- Fragmentation and polarization are separate coordinates.

*Lessons:* [4.4](lessons/04-04-party-systems.md)

### Dominant party system

**A competitive democracy in which one party governs for decades and can still lose.**

- Japan's LDP governed without interruption from 1955 to 1993; Sweden's Social Democrats led every
  government from 1932 to 1976 apart from a few months in 1936, sometimes in coalition.
- Strict test: repeated single-party majorities; looser: long dominance in votes, seats and office (T. J.
  Pempel, *Uncommon Democracies*, 1990).
- Not hegemonic: the LDP lost office in 1993.

*Lessons:* [4.4](lessons/04-04-party-systems.md)

### Cleavages and the freezing hypothesis

**Lipset and Rokkan (*Party Systems and Voter Alignments*, 1967) traced Western European parties to four
cleavages, and claimed the 1960s party systems still reflected those present when mass suffrage arrived.**

- **National revolution:** centre-periphery (nation-building core against regions with their own language
  or identity); state-church (secular state against the church over schooling and morals).
- **Industrial revolution:** land-industry (agrarian against urban commercial interests); owner-worker (the
  class cleavage).
- Mechanism: parties organized when the vote was extended captured the new voters.
- **Freezing** is an empirical claim about a period (the 1920s to the 1960s), not a law; a new party on an
  old cleavage fits the model.
- Filter: Amorim Neto and Cox (*AJPS*, 1997): party numbers rise with social diversity mainly where
  magnitude is high (well replicated; diversity crudely measured).
- Arrow can run backwards: parties mobilize divisions, and incumbents chose PR (Rokkan; Boix, *APSR*, 1999).

*Lessons:* [4.4](lessons/04-04-party-systems.md)

### Dealignment

**Weaker party attachment, more vote-switching, and weaker class and religious voting since about the
1970s** (Russell Dalton and Martin Wattenberg, eds., *Parties without Partisans*, 2000). A broad,
well-documented trend whose size varies by country.

- **Realignment** = voters re-sorting on a new cleavage. Whether green and new-left parties (Inglehart,
  *The Silent Revolution*, 1977) and populist radical-right parties (Cas Mudde, *Populist Radical Right
  Parties in Europe*, 2007) express a new cleavage (Hooghe and Marks: a "transnational" cleavage, openness
  against national closure) or none is contested.

*Lessons:* [4.4](lessons/04-04-party-systems.md)

## Territory and courts

Module 5. Who can take regional powers away, how decentralization works in practice, and who has the
last word on a statute. Country review rules are tabled in [Judicial review by country](#judicial-review-by-country).

### Federalism

**Two levels of government rule the same people, each with a sphere of its own guaranteed by a
constitution neither can rewrite alone.** William Riker (*Federalism: Origin, Operation, Significance*,
1964), paraphrased; Daniel Elazar's shorthand: "self-rule plus shared rule" (the units govern their own
sphere and take part in governing the whole, typically through an upper chamber and a voice in
amendment).

- **Confederation:** a league of states that keep their sovereignty and whose centre acts through them,
  not directly on citizens (the US under the Articles of Confederation).
- Residual powers lie with the units in the US (Tenth Amendment), Germany (Art. 30) and Switzerland
  (Art. 3).
- Normative cases are cited, not argued: Madison's "double security"
  ([`history-of-political-thought` 5.2](../history-of-political-thought/lessons/05-02-the-federalist-faction-and-the-extended-republic.md)),
  the efficiency case ([`public-economics` 8.2](../public-economics/lessons/08-02-assignment-spillovers-and-grants.md)),
  subsidiarity ([`political-philosophy` 6.4](../political-philosophy/lessons/06-04-welfare-property-and-subsidiarity.md);
  Swiss Constitution Art. 5a).
- Lijphart's variable 6 (federalism index 1 to 5) on the federal-unitary dimension ([6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)).

*Lessons:* [5.1](lessons/05-01-federal-unitary-devolved.md), [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)

### Unitary, devolved, federal

**Three questions in order sort a state: is there regional lawmaking, what is its source, and who holds
the key to changing it?** Every answer is mechanical, read off a text.

1. **Regional statutes?** No: unitary, however decentralized its administration (France: Art. 1
   "decentralised basis", Art. 72 elected councils with regulatory powers on terms set by statute).
2. **Source?** Ordinary statute: devolved, revocable by ordinary law (UK; Scotland Act 1998 s.28(7)).
   Constitution: go to step 3.
3. **Can the centre amend the division alone, even by supermajority?** Yes: unitary. No, the units must
   consent (individually, through a territorial chamber, or through their voters): federal.

| Federation (as of 2026) | Lock on the division of powers | Upper chamber |
|---|---|---|
| US | Art. V: three-quarters of states ratify; no state deprived of equal Senate suffrage without its consent | Senate: two per state, directly elected since 1913 |
| Germany | Art. 79(2): two-thirds of the Bundestag and two-thirds of Bundesrat votes; Art. 79(3): division into Länder and their participation in legislation unamendable | Bundesrat: Land government members, 3 to 6 votes per Land, block vote (Art. 51) |
| Switzerland | Arts. 140, 142: mandatory referendum, majority of voters and of cantons | Council of States: 46 seats, two per canton, one each for six cantons (Art. 150) |

- A supermajority of the centre is not the units' consent. A territorial chamber's veto locks nothing
  where the units own no sphere of law (France's Senate, Art. 24, Art. 89): consent is necessary, not
  sufficient, which is why step 1 comes first.
- A territorial chamber is one channel of consent, not a requirement; cantonal voter majorities also
  count ([5.1](lessons/05-01-federal-unitary-devolved.md)).
- Ranks legal entrenchment, not lived autonomy: the test does not say who umpires the existing division
  ([5.3](lessons/05-03-judicial-review-compared.md)), how much units do in practice ([5.2](lessons/05-02-decentralization-in-practice.md)), or how far politics outruns law.

*Lessons:* [5.1](lessons/05-01-federal-unitary-devolved.md)

### Coming-together and holding-together

**Alfred Stepan ("Federalism and Democracy: Beyond the U.S. Model", *Journal of Democracy*, 1999)
distinguished federations by origin.**

- **Coming-together** (US, Switzerland, Australia): prior sovereigns pool sovereignty on equal terms;
  symmetric powers and equal upper-chamber seats.
- **Holding-together** (India, Belgium, Spain, which does not call itself federal): a unitary state
  devolves constitutionally to keep territorially concentrated minorities; asymmetry common.
- **Putting-together** (the Soviet Union): coercive; outside a course that takes democracy as given.
- **Empirical, thin:** the origin-to-symmetry link is a tendency over few cases; International IDEA's
  primer says asymmetry usually, not necessarily, follows holding-together origins. Origin is not the
  lock: once powers sit in a constitution the regions help amend, it is federal.

*Lessons:* [5.1](lessons/05-01-federal-unitary-devolved.md)

### Asymmetric federalism

**Some regions hold constitutional powers or fiscal regimes others lack.** Symmetry is read off the text
(mechanical); its link to origins is empirical and modest.

- **UK:** separate devolution Acts for Scotland, Wales and Northern Ireland; no English legislature.
  Asymmetric by construction.
- **Spain** (as of 2026): 17 autonomous communities and 2 autonomous cities; a fast route to full powers
  (Basque Country, Catalonia, Galicia, Andalusia) and the slower Art. 143 route. The First Additional
  Provision protects the historic rights of the foral territories, so the Basque Country (through its three
  historic territories, under the Economic Agreement) and Navarre (its own Economic Agreement) levy most
  taxes and pay the state a quota for its services there. The quota follows the cost of state services, not
  collections, so they bear their own revenue risk.
- The US, German and Swiss texts give their units the same powers.

*Lessons:* [5.1](lessons/05-01-federal-unitary-devolved.md), [5.2](lessons/05-02-decentralization-in-practice.md)

### Parliamentary sovereignty

**The UK Parliament may make or unmake any law, no Parliament can bind its successors, and no court may
hold an Act invalid.**

- Scotland Act 1998 s.28(7): devolution "does not affect the power of the Parliament of the United
  Kingdom to make laws for Scotland". So s.63A (inserted 2016: permanence, referendum before abolition) is
  a political, not legal, lock on the orthodox view; the "manner and form" view disputes this at the margin.
- UK "judicial review" means review of ministers, agencies and secondary legislation against their
  empowering statutes.
- HRA s.4 declarations are built to respect it: the statute stays valid ([5.4](lessons/05-04-weak-form-review-appointments-and-independence.md)).

*Lessons:* [5.1](lessons/05-01-federal-unitary-devolved.md), [5.2](lessons/05-02-decentralization-in-practice.md), [5.3](lessons/05-03-judicial-review-compared.md), [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md)

### Sewel convention

**Westminster "will not normally legislate with regard to devolved matters without the consent of the
Scottish Parliament".** Scotland Act 1998 s.28(8), inserted by the Scotland Act 2016 s.2; s.28(7)
preserves Westminster's power.

- "It is recognised" and "will not normally" report a practice and an undefined exception; they do not
  say "shall not".
- Consent is given by a legislative consent motion; in practice also sought for bills changing devolved
  powers.
- *Miller* [2017] UKSC 5: a political convention the courts will not enforce. It did not hold that
  Westminster may ignore it.
- The Scottish Parliament withheld consent to the bill that became the EU (Withdrawal) Act 2018 (May
  2018); Westminster enacted it anyway. The Senedd consented after concessions.
- Contrast Germany: a consent bill the Bundesrat rejects does not become law. Shared rule there is a legal
  veto.

*Lessons:* [5.1](lessons/05-01-federal-unitary-devolved.md), [5.2](lessons/05-02-decentralization-in-practice.md)

### Administrative and dual federalism

**The US divides policies between levels; Germany divides functions, with legislation above and
administration below.**

- **Dual (US):** each level runs its own programmes with its own officials; Congress may not commandeer
  state officers (*Printz v. United States*, 1997; doctrine owned by
  [`constitutional-law`](../constitutional-law/syllabus.md)).
- **Administrative (Germany):** Basic Law Art. 83, the Länder "execute federal laws in their own right",
  which is why Land governments care about Bundesrat consent rights over laws they must carry out.

*Lessons:* [5.2](lessons/05-02-decentralization-in-practice.md)

### Vertical fiscal imbalance

**The share of regional spending not paid for by regional taxes: $\mathrm{VFI} = 1 - R/E$**, with $R$
regional own-source revenue and $E$ regional spending (one standard measure; others treat borrowing or
shared taxes differently). Arithmetic and gearing: [Fiscal gearing formula](#fiscal-gearing-formula).

- Transfers close the gap: block grants, conditional or matching grants, formula shares of national taxes,
  equalization.
- Germany: income and corporation tax split equally Federation/Länder (Art. 106(3)); equalization through
  turnover-tax shares (Art. 107(2)); Bundesrat consent for tax laws with Länder revenue (Art. 105(3)).
- **Measures financing, not control:** a shared tax whose rate the region cannot set may be counted as
  "own revenue" while giving no lever at the margin ([5.2](lessons/05-02-decentralization-in-practice.md) P2); an earmarked grant raises the ratio even
  though the centre chose the programme ([5.2](lessons/05-02-decentralization-in-practice.md)).
- **Empirical, contested:** Jonathan Rodden (*Hamilton's Paradox*): regions that depend on transfers and
  can borrow come to expect bailouts (soft budget constraint); comparative cases and correlations,
  suggestive, causal direction contested. History: the US Congress declined to assume the 1841 to 1842
  state defaults; the euro area wrote a no-bailout clause.
- Theory belongs to [`public-economics`](../public-economics/syllabus.md) 8.1 to 8.3.

*Lessons:* [5.2](lessons/05-02-decentralization-in-practice.md)

### Judicial review models

**Every system of constitutional review answers four questions: which courts, triggered how, when, and
with what effect.**

- **American template:** review as a by-product of deciding cases (*Federalist* 78: "the Constitution
  ought to be preferred to the statute"; *Marbury v. Madison*, 1803, doctrine owned by
  [`constitutional-law`](../constitutional-law/syllabus.md)): every court, only inside a case.
- **Kelsenian template:** Austria's 1920 constitution, one dedicated constitutional court outside the
  ordinary judiciary, a "negative legislator" (Hans Kelsen). Followed by Germany (court sitting since
  1951), Italy, Spain and many post-1989 Central European democracies.
- **UK:** off the map ([parliamentary sovereignty](#parliamentary-sovereignty)).
- **Strong form** ([`political-philosophy` 5.2](../political-philosophy/lessons/05-02-majority-rule-vs-rights-judicial-review.md)'s
  definition): a court may decline to apply a statute or modify its effect; the legislature's reply is
  amendment or new judges (US, Germany, France). **Weak form:** the legislature keeps the final word by
  ordinary means (UK, Canada s.33, New Zealand) ([weak-form review](#weak-form-review)).
- The rule that decides in each system is the **standing rule at each door**: who may knock, and when.
- Lijphart's variable 9 (review index 1 to 4); Switzerland sits at the bottom (Art. 190) ([6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)).

*Lessons:* [5.3](lessons/05-03-judicial-review-compared.md), [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md), [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)

### Diffuse and concentrated review

**Diffuse: any court may decline to apply an unconstitutional statute in a case. Concentrated: only a
constitutional court may void a statute, and other courts must refer.**

- Diffuse: US; Japan (Art. 81, 1947; its Supreme Court held in 1952 that it has no abstract review, and
  has set statutes aside only very rarely, explanations contested).
- Concentrated: Germany (Art. 100(1): a court that thinks a statute unconstitutional stays proceedings and
  refers); France.
- About which *courts* review, not who petitions. Same design, very different use: US and Japan.

*Lessons:* [5.3](lessons/05-03-judicial-review-compared.md)

### Abstract and concrete review

**Abstract: named political actors petition with no live dispute. Concrete: the question arises in a
real case.**

- Abstract: Germany Art. 94(1) no. 2 (the federal government, a Land government, or one quarter of the
  Bundestag's members; Art. 93 before the December 2024 amendment); France Art. 61 (the President, the
  Prime Minister, the president of either chamber, 60 deputies or 60 senators; the 60-member route added in
  1974).
- Concrete: US; Germany's referral (Art. 100(1)) and constitutional complaint; France's QPC.
- Abstract review runs on disagreement among office-holders, so a law the major parties share escapes it
  ([5.3](lessons/05-03-judicial-review-compared.md) Example 2).
- **Empirical:** Alec Stone Sweet (*Governing with Judges*, 2000): abstract review pulls courts into
  lawmaking as governments draft with the court in mind (well documented in French and German cases; size
  hard to measure).

*Lessons:* [5.3](lessons/05-03-judicial-review-compared.md)

### A priori and a posteriori review

**A timing axis, separate from abstract and concrete: a priori means before promulgation, a posteriori
means the law is already in force.**

- A priori: France Art. 61 (organic laws automatically; ordinary statutes on referral; the Council rules
  within a month, eight days if urgent; a struck provision "shall be neither promulgated nor implemented",
  Art. 62).
- A posteriori: US, Germany (including its abstract review), France's QPC since 2010.
- Abstract is not a priori: Germany's abstract review targets promulgated statutes; France's a priori
  review is abstract and early.

*Lessons:* [5.3](lessons/05-03-judicial-review-compared.md)

### Constitutional complaint

**Germany's door for individuals: any person alleging that public authority has infringed a basic right
may file with the Federal Constitutional Court.** Basic Law Art. 94(1) no. 4a (Art. 93 before the
amendment in force 28 December 2024).

- Normally after exhausting other remedies (Federal Constitutional Court Act s.90(2)); a complaint directly
  against a statute within one year of its entry into force (s.93(3)).
- The bulk of the court's caseload.
- A successful challenge voids the law or declares it "incompatible"; binding on all courts and authorities
  (Art. 94(4)).

*Lessons:* [5.3](lessons/05-03-judicial-review-compared.md)

### QPC priority question of constitutionality

**France's a posteriori door (*question prioritaire de constitutionnalité*, Art. 61-1): a litigant claims
that a provision applied in her case infringes constitutional rights and freedoms.** Created by the 2008
revision; operating since 1 March 2010.

- Trial court forwards; the Conseil d'Etat or the Cour de cassation filters: the provision must govern the
  dispute, the question must be serious, and the provision must not already have been upheld, unless
  circumstances have changed (used in 2010 for police-custody rules).
- A provision struck is repealed from publication or a later date the Council sets (Art. 62).
- Answers the gap of a priori-only review: gives the burdened litigant her own door.
- The 1971 *Liberté d'association* decision had already extended review to the 1789 Declaration and the
  1946 Preamble without any text changing.

*Lessons:* [5.3](lessons/05-03-judicial-review-compared.md)

### Weak-form review

**The court rules, but the legislature keeps the final word by ordinary means.** Stephen Gardbaum's "new
Commonwealth model" (*The New Commonwealth Model of Constitutionalism*): Canada 1982, New Zealand 1990,
UK 1998; the label "weak-form" is associated above all with Mark Tushnet (*Weak Courts, Strong Rights*).

- **UK:** HRA s.3(1) read compatibly "so far as it is possible to do so" (can be bold: *Ghaidan v
  Godin-Mendoza*, 2004, read a tenant's partner to include same-sex partners); s.4 declaration; s.10
  remedial order. If Parliament does nothing, the statute stands.
- **Canada:** courts strike (s.52, "of no force or effect"), and the
  [notwithstanding clause](#notwithstanding-clause) lets legislatures override for five years at a time.
  The default is reversed relative to the UK.
- **New Zealand**, the weakest: Bill of Rights Act 1990 s.4 forbids courts to invalidate or decline to
  apply; s.6 asks for consistent readings.
- **Where the evidence is weakest:** if governments nearly always comply, weak form collapses into strong
  form with a delay; if legislatures override when it matters, it protects nothing. The UK record fits the
  first worry but cannot say why (political force, or the European Court of Human Rights). Canada's
  "dialogue" reading is contested on the same ground.

*Lessons:* [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md)

### Declaration of incompatibility

**A higher UK court's declaration that primary legislation is incompatible with a Convention right,
which leaves the statute valid and binds no one.** HRA 1998 s.4; courts listed in s.4(5); s.4(6): it
"does not affect the validity, continuing operation or enforcement" of the provision and "is not binding
on the parties".

- Response optional: an Act of Parliament or a ministerial remedial order (s.10, "compelling reasons"), or
  nothing; the government's own report states there is no legal obligation to respond.
- Record (Ministry of Justice report, 2024 to 2025): 63 declarations from October 2000 to July 2025; 13
  overturned on appeal; of 50 standing, 33 addressed (5 by amendments already made, 11 remedial orders, 16
  other legislation, 1 "various measures", the 2007 prisoner-voting declaration closed in 2021), 17 open.
- "Declarations are almost always acted on" is an empirical regularity about one country, not what s.4
  does.

*Lessons:* [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md)

### Notwithstanding clause

**Canadian Charter s.33: Parliament or a provincial legislature may expressly declare that an Act operates
notwithstanding s.2 or ss.7 to 15.** Covers fundamental freedoms (s.2), legal rights (ss.7 to 14) and
equality (s.15); not voting (ss.3 to 5), mobility (s.6) or language rights (ss.16 to 23).

- Lapses after five years (s.33(3)); re-enactable for five more (s.33(4) to (5)).
- Otherwise courts strike: Constitution Act 1982 s.52, "of no force or effect"; Charter s.1 reasonable
  limits is the court's test, applied first, not a second override.
- Quebec's Bill 21 (2019 secularism law) used it pre-emptively; renewed in 2024. Whether a court may still
  *say* a right is violated under a pre-emptive override is a silence in the text.
- A declaration naming a section outside its range is ineffective for that section ([5.4](lessons/05-04-weak-form-review-appointments-and-independence.md)).

*Lessons:* [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md)

### Judicial appointments

**Who picks the judges, by what vote, for how long.** As of 2026:

| Court | Chosen by | Vote | Tenure |
|---|---|---|---|
| US Supreme Court | President nominates; Senate consents (Art. II s.2) | Senate majority (filibuster ended for these nominations in 2017) | "during good Behaviour" (Art. III s.1) |
| German Federal Constitutional Court | Bundestag half, Bundesrat half (Basic Law Art. 93(2)) | two-thirds in each (Court Act ss.6 to 7; in the Bundestag two-thirds of votes cast and a majority of Members); s.7a fallback | 12 years, no re-election, retire at 68 (Art. 93(3), entrenched 2024) |
| UK Supreme Court | selection commission; PM must recommend its choice (Constitutional Reform Act 2005 s.26) | none in Parliament | good behaviour; removal on address of both Houses (s.33) |
| Supreme Court of Canada | Governor in Council (Supreme Court Act s.4(2)) | none | to age 75 (s.9(2)) |

- Composition is Art. 93 since the December 2024 amendment (jurisdiction moved to Art. 94).
- **Mechanical:** a simple majority lets a durable majority fill every vacancy; a supermajority forces the
  blocs to bargain and makes composition insensitive to elections ([5.4](lessons/05-04-weak-form-review-appointments-and-independence.md) P2). In Germany judges are
  commonly identified by nominating party (one-country empirical pattern).

*Lessons:* [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md)

### Judicial independence

**Built from three rules: selection, tenure, removal.** Life tenure or a single non-renewable term removes
the reappointment incentive; salary protection (US Art. III); removal only by impeachment or an address of
both Houses (from the Act of Settlement, enacted 1701, in force 1714).

- Germany gets independence without life tenure: one 12-year term.
- **Empirical:** Robert Dahl (1957): the US Supreme Court is rarely out of line with lawmaking majorities
  for long (classic, debated). Stone Sweet: legislators anticipate review (case studies, suggestive). Tom
  Ginsburg (*Judicial Review in New Democracies*, 2003): "insurance" for framers expecting to lose power
  (East Asian cases; contested as a general claim).
- The same levers apply to agencies and central banks ([6.2](lessons/06-02-delegation-and-oversight.md)) and civil servants ([6.1](lessons/06-01-bureaucracy-merit-and-patronage.md)).

*Lessons:* [5.3](lessons/05-03-judicial-review-compared.md), [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md)

## Bureaucracy, direct democracy and the whole design

Module 6. Who appoints and removes officials, why legislatures delegate and how they keep control,
voters taking decisions back, and Lijphart's map of the whole design. Referendum rules are tabled in
[Referendum rules by country](#referendum-rules-by-country).

### Two rules of a civil service

**A civil service is defined by two rules: who appoints (a politician at discretion, or an open competition
run by someone else) and who can remove (at will, or only for cause by a protected procedure).** A third
variable is depth: how far down the political layer reaches.

- The removal rule mainly fixes whom the official answers to day to day.
- The rules can be set independently: German political civil servants (merit recruitment, removable at
  will); the two can be mixed in either direction.
- Protection against dismissal does not cover postings and promotions, a second channel of control
  ([6.1](lessons/06-01-bureaucracy-merit-and-patronage.md) P1).

*Lessons:* [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md)

### Patronage and merit

**Patronage pairs discretionary appointment with removal at will; merit pairs open competition with
removal only for cause.**

- **UK:** Northcote-Trevelyan Report (published February 1854); Civil Service Commission 1855; now CRaG
  2010 s.10(2): "selection must be on merit on the basis of fair and open competition"; s.7(2) serve the
  administration of the day.
- **US:** spoils system; [Pendleton Act](#pendleton-act) 1883.
- **France:** recruitment by competitive examination (*concours*); the ENA (1945) replaced by the INSP on
  1 January 2022.
- **Evidence:** Dahlstrom, Lapuente and Teorell ("The Merit of Meritocratization", *PRQ*, 2012, 52
  countries): merit *recruitment* associated with less corruption; tenure, salaries and internal promotion
  not significant. Evans and Rauch (*ASR*, 1999): Weberian features and growth. Robust correlations,
  contested direction. Within-country: Xu (*AER*, 2018, British colonial governors), Colonnelli, Prem and
  Teso (*AER*, 2020, Brazil) find patronage costs; Toral (*AJPS*, 2024) finds Brazilian municipal patronage
  can raise accountability. Ting, Snyder, Hirano and Folke: merit as insurance bought by incumbents
  expecting to lose.
- Weakest at the trade-off itself: no good cross-national measure of responsiveness.
- Weber's ideal type is [`social-theory`](../social-theory/syllabus.md) [4.4](../social-theory/lessons/04-04-bureaucracy-rationalization-and-disenchantment.md)'s.

*Lessons:* [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md)

### Neutral competence and responsiveness

**Herbert Kaufman ("Emerging Conflicts in the Doctrines of Public Administration", *APSR*, 1956): neutral
competence is expertise that serves any government; responsiveness (his term was "executive leadership")
is an administration that does what the elected executive wants.** An official who cannot be fired is
hard to capture and hard to steer.

- The crux between merit-heavy and appointee-heavy designs; each side carries an empirical premise about
  how officials behave ([6.1](lessons/06-01-bureaucracy-merit-and-patronage.md) P2).

*Lessons:* [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md)

### Special advisers

**UK political appointees under CRaG 2010: selected personally by a minister and approved by the Prime
Minister.** The appointment ends when the minister leaves office or just after the next general election
(s.15).

- Exempt from merit selection (s.10(3)) and from the duty of objectivity and impartiality (s.7(5)).
- May not authorise spending, manage civil servants, or exercise statutory or prerogative powers (s.8(5)).
- Not Britain's version of US appointees: US appointees run agencies and direct career staff.

*Lessons:* [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md)

### Pendleton Act

**US civil service reform signed 16 January 1883, after President Garfield was shot in 1881 by a
disappointed office-seeker: competitive examinations and no political firing for covered posts, with a
Civil Service Commission.**

- Initially about a tenth of federal jobs; extended by later presidents. Today a career service under
  layers of political appointees, the most senior Senate-confirmed.
- **Schedule F:** 5 U.S.C. 7511(b)(2) exempts positions "of a confidential, policy-determining,
  policy-making or policy-advocating character" from removal protections. Executive order of October 2020
  (EO 13957) created Schedule F; revoked January 2021; reinstated January 2025 (EO 14171); renamed Schedule
  Policy/Career, with an implementing order in June 2026 (EO 14410). Effects not yet measured.
- Changing the removal rule for a band of posts leaves recruitment untouched; the definition of
  "policy-making" is drawn by the executive it constrains ([6.1](lessons/06-01-bureaucracy-merit-and-patronage.md) Example 2).

*Lessons:* [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md)

### Political civil servants

**Germany's hybrid: recruited as career officials on merit, removable into temporary retirement at any
time.** Basic Law Art. 33(2): access to office by aptitude, qualifications and professional achievements;
Art. 33(5): career *Beamte* normally for life. State secretaries and directors-general can be sent into
temporary retirement at any time by the Federal President (Federal Civil Servants Act s.54).

- Shows merit is two rules, not tenure.

*Lessons:* [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md)

### Delegation

**A principal (a legislature) grants an agent (an agency) authority to act for it.** Four reasons:
expertise, workload, blame-shifting (associated with Morris Fiorina), credible commitment. The cost is
[drift](#bureaucratic-and-coalitional-drift).

- The optimal contract is solved in [`grad-micro` 5.4](../grad-micro/lessons/05-04-moral-hazard-principal-agent.md);
  here the contract is a statute.
- Kaare Strom and colleagues (*Delegation and Accountability in Parliamentary Democracies*, 2003):
  parliamentary government as a single chain of delegation, each link with one principal; a US agency has
  two principals, Congress and the President (mechanical; what follows is empirical and contested).
- Accountability, career-concern and capture models are [`political-economy`](../political-economy/syllabus.md)
  Module 4's.

*Lessons:* [6.2](lessons/06-02-delegation-and-oversight.md)

### Bureaucratic and coalitional drift

**Drift is agency policy moving away from what the enacting coalition wanted. Bureaucratic drift comes
from the agency's own aims (remit, capture); coalitional drift from later politicians using the agency to
undo the deal.**

- Insulating against one invites the other: a shield against tomorrow's majority also shields the agency
  from today's (Terry Moe: today's winners insulate because they expect to lose).
- Levers: statutory discretion (Huber and Shipan, *Deliberate Discretion?*, 2002: more detailed laws when
  legislatures distrust the agency's political masters and can afford detail; Epstein and O'Halloran,
  *Delegating Powers*, 1999: Congress delegates less under divided government; both well-documented
  correlations); procedures that "stack the deck" (McCubbins, Noll and Weingast, 1987).
- A new majority unable to replace insulated members is the insulation working, not evidence of
  bureaucratic drift ([6.2](lessons/06-02-delegation-and-oversight.md)).

*Lessons:* [6.2](lessons/06-02-delegation-and-oversight.md)

### Police patrols and fire alarms

**McCubbins and Schwartz (*AJPS*, 1984): a patrol is centralized, active, direct legislative scrutiny of a
sample of agency actions; a fire alarm is a set of rules letting citizens and groups detect and report
violations, after which legislators act.**

- Alarms are cheaper (others pay for detection) and flag what constituents care about; they work only
  where those harmed can detect the harm and reach a forum, so they amplify organized interests and miss
  diffuse or delayed harms. Patrols are costly but can be aimed anywhere.
- UK example: Parliamentary Commissioner Act 1967 s.5, most complaints reach the Ombudsman only via an MP;
  since 2025 victims of crime may complain directly about their treatment as victims.
- A quiet record fits tight control by anticipation and abdication alike (Weingast and Moran, *JPE*, 1983:
  FTC policy shifted with its oversight committee; single agency, disputed).

*Lessons:* [6.2](lessons/06-02-delegation-and-oversight.md)

### Agency independence

**Insulation levers: who appoints; fixed, staggered terms; removal only for cause; multi-member boards; a
budget outside annual appropriation; a mandate in statute or treaty; any override clause.** Each is
mechanical.

- **US, as of 2026:** *Trump v. Slaughter* (2026) held that Congress may not require cause for the
  President to remove officials exercising executive power, overruling *Humphrey's Executor* (1935).
  *Trump v. Cook*, decided the same day (29 June 2026), refused to let the removal of a Federal Reserve
  governor take effect while the case proceeds, treating the Fed's for-cause protection as part of a distinct
  central-banking tradition. The for-cause lever now survives most clearly for the US central bank.
  Doctrine owned by [`constitutional-law`](../constitutional-law/syllabus.md).
- Independence is not unaccountability: insulated agencies still report, and a statute can redesign them.

*Lessons:* [6.2](lessons/06-02-delegation-and-oversight.md)

### Central bank independence

**A commitment device against the inflation bias: a government that sets interest rates is tempted to
create surprise inflation once wages and prices are fixed; people foresee it, so inflation is higher for
no output gain.** Kydland and Prescott; Rogoff's "conservative" central banker; derived in
[`grad-macro` 6.2](../grad-macro/lessons/06-02-policy-rules-taylor-principle.md). Same logic as tying the
sovereign's hands after 1688 ([`history-of-debt` 3.2](../history-of-debt/lessons/03-02-did-1688-make-britain-creditworthy.md)).

| As of 2026 | Bank of England | European Central Bank | Federal Reserve |
|---|---|---|---|
| Legal basis | Bank of England Act 1998, in force 1 June 1998 (announced 6 May 1997) | EU treaties; change needs every member state | Federal Reserve Act, ordinary statute |
| Goal | Treasury specifies price stability (s.12) | price stability by treaty; ECB defines 2% over the medium term, symmetric | "maximum employment, stable prices, and moderate long-term interest rates" (s.2A) |
| Instrument | Monetary Policy Committee | Governing Council | Federal Open Market Committee |
| Tenure | (not stated in the course) | Executive Board eight years, non-renewable | governors 14 years, removable for cause (s.10) |
| Override | Treasury directions in extreme economic circumstances, Governor consulted; void unless both Houses approve within 28 days; 3 months at most (s.19) | none short of treaty change | none; Congress can amend the Act |

- **Evidence:** Cukierman, Webb and Neyapti (1992) index of legal independence; Alesina and Summers (1993):
  in rich democracies more independence goes with lower inflation and no growth loss (robust correlation);
  weak in developing countries, where actual governor turnover predicts more. Causation contested (Adam
  Posen: a strong financial sector produces both).
- Where the text runs out: a ban on *direct* purchases of government debt leaves indirect purchases to a
  court or the bank (the ECB's programmes; Germany's Federal Constitutional Court's May 2020 judgment).
- Lijphart's variable 10 (0 to 1); the UK's value covers only 1945 to 1994 ([6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)).

*Lessons:* [6.2](lessons/06-02-delegation-and-oversight.md), [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md), [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)

### Goal and instrument independence

**Goal independence: the bank chooses its target. Instrument independence: the bank chooses the interest
rate to hit a target someone else sets.**

- ECB: both (it defines price stability itself). Bank of England: instrument only (the Treasury sets the
  target and holds a time-limited reserve power). Fed: goals set by statute, instruments by the FOMC.
- The crux between the two designs: whether the target is a technical choice politicians would corrupt, or
  a political trade-off elected officials should own ([6.2](lessons/06-02-delegation-and-oversight.md) P3).

*Lessons:* [6.2](lessons/06-02-delegation-and-oversight.md)

### Referendum types

**Classify a popular vote by trigger, by what is on the ballot, and by legal effect.** Rules as of 2026:

| Type | Trigger | On the ballot | Example |
|---|---|---|---|
| Mandatory | the constitution | a listed kind of measure | Switzerland: every constitutional amendment (Art. 140) |
| Optional (facultative) | signatures after passage | a law just passed | Switzerland: 50,000 voters or eight cantons within 100 days (Art. 141) |
| Citizens' initiative | signatures | citizens' own text | Switzerland: 100,000 within 18 months (Art. 139); California: 5% (statute) or 8% (constitutional amendment) of the last gubernatorial vote (art. II s.8(b)) |
| Abrogative | signatures or regions | a law in force, to repeal it | Italy: 500,000 voters or five Regional Councils (Art. 75) |
| Authorities' (ad hoc) | government or parliament | a question it chooses | UK 1975, 2011, 2016 |

- The optional referendum is a citizens' **veto** (status quo wins on No); the initiative is citizens'
  **agenda-setting** (new law wins on Yes).
- Gatekeeping: Swiss Federal Assembly invalidates initiatives lacking unity of form or subject matter or
  breaking mandatory international law (Art. 139(3)); Italy excludes tax, budget, amnesty and pardon,
  treaty ratification, and the Constitutional Court rules on admissibility.
- **Empirical:** Neidhart's reading that the optional referendum pushed Swiss parliament toward broad
  compromise and all-party government (single case); Barbara Gamble on minority-rights ballot measures,
  Donovan and Bowler's reply (contested).

*Lessons:* [6.3](lessons/06-03-direct-democracy.md), [2.4](lessons/02-04-districts-and-electoral-reform.md)

### Double majority

**A measure passes only with a majority of voters and a majority of territorial units, each unit's popular
result deciding its vote.** Switzerland Art. 142(2) to (4): 20 full and 6 half cantons give 23 cantonal
votes, 12 needed (11.5 is not a majority). Arithmetic: [Referendum arithmetic](#referendum-arithmetic).

- Initiative versus counter-proposal (Art. 139b(3)): if People and Cantons prefer different proposals on
  the deciding question, the higher sum of popular and cantonal percentages wins; a proposal wins iff
  $p + c > 100$. The text does not say what happens on equal sums. California settles clashes between two
  approved measures by the higher Yes vote (art. II s.10(b)).
- The popular-vote counterpart of a territorial second chamber ([4.1](lessons/04-01-bicameralism.md)); a cantonal-voter lock is a
  federal lock ([5.1](lessons/05-01-federal-unitary-devolved.md)).
- Not a federal amendment rule only: also a decision rule that lets cantons outvote the people.

*Lessons:* [6.3](lessons/06-03-direct-democracy.md), [5.1](lessons/05-01-federal-unitary-devolved.md)

### Turnout quorum

**A result counts only if a set share of the electorate votes.** Italy Art. 75 (abrogative referendum):
more than half of those eligible must vote, and a majority of valid votes must approve. Italy's
confirmatory constitutional referendum (Art. 138) has no quorum.

- **Mechanical incentive:** abstention counts like No, so when Yes leads, opponents do best by boycotting;
  a No vote helps the quorum. As opponents stay home, the Yes share rises and the measure fails.
- **Empirical:** most Italian abrogative referendums since the late 1990s were invalid for low turnout,
  often with lopsided Yes majorities among voters (long run of cases, one country).
- The Venice Commission's *Code of Good Practice on Referendums* (2007) advises against turnout and
  approval quorums; defenders answer that without one a mobilized minority can change the law on low
  turnout (normative dispute).

*Lessons:* [6.3](lessons/06-03-direct-democracy.md)

### Approval quorum

**Yes must beat No and reach a set share of the whole electorate.** A No vote never helps Yes, so a boycott
gains opponents nothing; the cost is that a measure can win most voters and still fail. The Venice
Commission (2007) also advises against it.

*Lessons:* [6.3](lessons/06-03-direct-democracy.md)

### Binding and advisory referendums

**Legal effect is read off the authorizing text, not the vote.**

- **Binding:** UK Parliamentary Voting System and Constituencies Act 2011 s.8: on Yes the minister must
  commence the AV provisions (once a boundary order was made); on No, repeal them.
- **Advisory:** the European Union Referendum Act 2015 required a vote and fixed the question but provided
  no consequences; *Miller* [2017] UKSC 5: the 2016 result's force was "political rather than legal" until
  Parliament acted.
- **Afterlife:** California art. II s.10(c), the legislature may amend or repeal an initiative statute only
  with voter approval, unless the initiative permits.
- "Advisory" is a legal (mechanical) category; political effect is an empirical consequence, and 2016
  shows it can be decisive.

*Lessons:* [6.3](lessons/06-03-direct-democracy.md)

### Majoritarian and consensus democracy

**Lijphart's contrast in answers to "who governs when the people disagree?": majoritarian democracy
concentrates power in the majority (often a plurality); consensus democracy shares, disperses and limits
it.** *Democracies* (1984, 21 countries); *Patterns of Democracy* (1999; 2nd ed. 2012, 36 countries).

- Majoritarian: one-party cabinets, few rival institutions, clean removal. Westminster model: UK,
  pre-1996 New Zealand.
- Consensus: coalitions and PR (shared), two strong chambers and federalism (dispersed), a rigid
  constitution, courts and an independent central bank (limited). Switzerland, Belgium.
- Consociationalism (power sharing in divided societies) belongs to
  [`comparative-politics`](../comparative-politics/syllabus.md).

*Lessons:* [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)

### Lijpharts two dimensions

**Ten variables cluster into an executives-parties dimension (sharing power) and a federal-unitary
dimension (dividing power).** Score: [Lijphart dimension score formula](#lijphart-dimension-score-formula).

| # | Executives-parties (variables 1 to 5) | # | Federal-unitary (variables 6 to 10) |
|---|---|---|---|
| 1 | one-party minimal winning cabinets, % of time | 6 | federalism index, 1 to 5 |
| 2 | executive dominance (mainly cabinet duration; judgement-coded for presidential and collegial executives: US 4.00, France 8.00, Switzerland 1.00) | 7 | bicameralism index, 1 to 4 |
| 3 | effective number of parliamentary parties | 8 | constitutional rigidity, 1 to 4 |
| 4 | Gallagher index | 9 | judicial review, 1 to 4 |
| 5 | interest-group pluralism | 10 | central-bank independence, 0 to 1 |

Scores, 1945 to 2010 (executives-parties, federal-unitary; high = consensus or federal):

| Country | Exec-parties | Federal-unitary | Note |
|---|---|---|---|
| UK | -1.09 | -1.06 | majoritarian on all five EP variables; second-most unitary after NZ; -1.48 on 1981 to 2010 data |
| Switzerland | 1.72 | 1.46 | most consensual on EP; bottom of review index (Art. 190) |
| Germany | 0.78 | 2.41 | consensus side of both; most federal of the 36 |
| US | -0.67 | 2.25 | federal-majoritarian; second most federal |
| New Zealand | -0.47 | -1.67 | EP -0.17 on 1981 to 2010 data after MMP |
| Israel | 1.53 | -0.90 | consensual-unitary |

- Within-group correlations are strong and between-group weak: a robust pattern with mechanisms (PR,
  coalitions, shorter cabinets; a federal bargain needs a chamber, rigidity and an umpire).
- Taagepera (*Political Studies*, 2003): no logical link ties interest groups to the other four; CBI is the
  weakest fit in its group.
- Three of five EP variables (party count, cabinet type, executive dominance) are observed behaviour, not
  rules. A score describes a period, not a country for all time.
- The separation of powers enters only through the judgement-coded executive-dominance number.

*Lessons:* [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)

### Corporatism and interest group pluralism

**Corporatism: employers and unions organized in a few peak associations that bargain with each other and
with government over wages and policy (tripartite concertation). Pluralism: many groups competing for
influence without coordination.** Lijphart's variable 5; a high pluralism index is majoritarian (UK 3.02,
Switzerland 0.88, 1945 to 2010; mean 2.02).

- Behaviour, not a constitutional rule: a constitution can enact PR but not a corporatist bargain.
- Anderson (2001) and Armingeon (2002) find corporatism drives much of the macroeconomic result attributed
  to consensus democracy.
- Curriculum note: no course in the tree owns corporatism; 6.4 defines it in one sentence.

*Lessons:* [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)

### Kinder gentler democracy

**Lijphart's empirical claim: on the executives-parties dimension, controlling for development and
population, consensus democracies do at least as well on macroeconomic management and better on quality
of democracy and "kinder, gentler" outcomes** (welfare and foreign-aid spending, environment, lower
incarceration, less use of the death penalty). Little difference on the federal-unitary dimension, lower
inflation aside.

- **Status:** a correlation in 36 countries; causal reading contested. See
  [Debates](#lijpharts-performance-claims).

*Lessons:* [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)

## Debates

The course's live empirical disputes, each stated at the strength its own side would recognize. None has a
verdict here. For each: the positions, the crux (the single premise one side affirms and the other denies),
the evidence that would move it, and how strong the present evidence is.

### Linz and his critics

- **Linz** ("The Perils of Presidentialism", 1990): presidentialism itself endangers democracy through dual
  legitimacy, rigidity of fixed terms, and winner-take-all; a standoff between branches has no exit but the
  calendar, which tempts decree government or impeachment as a substitute confidence vote.
- **Cheibub:** selection, not design. Presidentialism was disproportionately adopted after military rule,
  and democracies that follow military dictatorships are fragile under any constitution.
- **Mainwaring and Shugart:** trouble concentrates in combinations, fragmented multiparty legislatures plus
  strong presidential legislative powers (decrees, partial vetoes); the design has advantages (identifiable
  executive, mutual checks).
- **Crux:** whether the raw association between presidentialism and breakdown is caused by the
  constitutional form, or by where and when it was adopted and which powers came with it.
- **Evidence that would move it:** breakdown rates comparing presidential and parliamentary democracies with
  the same military legacy, region and party system; case tracing of whether crises unfold through Linz's
  mechanisms (Linz's defenders argue cross-national counts cannot test the mechanisms).
- **Strength:** the raw association is well documented; its cause is contested. Few breakdowns, non-random
  adoption, region and history confounded. Identification belongs to
  [`empirical-political-economy`](../empirical-political-economy/syllabus.md).

*Lessons:* [3.3](lessons/03-03-presidential-government.md), [3.4](lessons/03-04-semi-presidential-government.md)

### Duvergers exceptions

- **District reading:** the law predicts two serious candidates per district (Cox's M plus 1 rule). Canada,
  India and the UK satisfy it district by district; their national multipartism is a failure of
  [party linkage](#party-linkage), outside the law.
- **National reading:** the law predicts national two-party systems, so Canada, India and the UK are
  counterexamples and the law is at most a tendency that regional concentration defeats.
- **The converse:** Riker (1982) separated the strong "law" from the weaker "hypothesis" that PR produces
  multipartism; PR permits, does not produce (Malta), and party numbers rise with social diversity only
  where rules are permissive (Clark and Golder 2006; Amorim Neto and Cox 1997).
- **Crux:** the law's unit, district or nation.
- **Evidence that would move it:** district-level effective numbers of candidates in plurality countries with
  regional parties; persistent three-way district races where voters can tell who trails, or pivotal
  third-party voters who do not desert, would count against even the district reading. Separating desertion
  from lost popularity needs first-preference surveys, where deserters went, or a simultaneous PR ballot.
- **Strength:** the district version is fairly robust; the national version has prominent exceptions; the
  converse is weaker still; the arrow can run backwards (incumbent parties keep plurality).

*Lessons:* [2.3](lessons/02-03-duvergers-law-observed.md), [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md)

### Cartel gatekeeping or floor median

- **Cartel theory** (Cox and McCubbins): the House majority party is rarely rolled because its leaders keep
  off the floor bills most of the party opposes.
- **Floor-median challenge** (Krehbiel): if the majority party's median sits near the chamber median, floor
  majorities rarely oppose the majority party anyway; low roll rates arise with no gatekeeping.
- **Crux:** whether gatekeeping, or the position of the party median, produces the low roll rate.
- **Evidence that would move it:** roll rates when the majority's median sits far from the chamber's;
  evidence on bills that died without a vote (discharge petitions stalled a few signatures short).
- **Strength:** low majority roll rates are a robust descriptive regularity in the Congresses studied; the
  causal reading is contested. The decisive evidence (bills never called) is mostly invisible.

*Lessons:* [4.2](lessons/04-02-committees-and-agenda-control.md)

### Lijpharts performance claims

- **Lijphart:** on the executives-parties dimension, controlling for development and population, consensus
  democracies do at least as well on macroeconomic management and better on quality of democracy and
  "kinder, gentler" outcomes; governments in proportional systems sit closer to the median voter.
- **Common cause** (Anderson 2001; Armingeon 2002): consensus democracies cluster in small, wealthy
  north-west European states with corporatist traditions; corporatism drives much of the macroeconomic
  result, and Anderson found the advantage reversed once corporatism and central banks were removed.
- **Formal versus behavioural** (Roller 2005): roughly a tie for formal institutions, weak signs of kinder
  policy for behavioural consensus. **Taagepera** (2003): the behavioural variables cannot be engineered.
- **Rival value** (Powell 2000): majoritarian clarity of responsibility, voters choosing and removing a
  government directly. This is a value, not a performance statistic.
- **Crux:** whether the association between consensus institutions and kinder outcomes is causal, or both
  come from culture, wealth, region and corporatism.
- **Evidence that would move it:** within-country change after adopting consensus institutions (New Zealand
  after 1996 is one case, suggestive at most); the association surviving controls for region, culture and
  corporatism.
- **Strength:** the two-dimensional clustering is well supported; the causal performance claim is contested;
  little difference on the federal-unitary dimension, lower inflation aside. 36 countries, consensus cases
  bunched in one region.

*Lessons:* [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)

### Delegation versus drift

- **Insulation side:** independence (for-cause removal, fixed terms, own budget) makes commitments credible
  and protects the enacting coalition's deal against coalitional drift; central bank independence goes with
  lower inflation in rich democracies (Alesina and Summers).
- **Control side:** insulation invites bureaucratic drift and capture and shields the agency from today's
  majority as well as tomorrow's (Moe); legislatures keep control through discretion (Huber and Shipan;
  Epstein and O'Halloran), procedure (McCubbins, Noll and Weingast), and patrols or alarms (McCubbins and
  Schwartz).
- **Crux:** whether the main threat to the enacting coalition's policy is the agency's own aims or later
  politicians; insulating against one invites the other.
- **Evidence that would move it:** agency policy tracking oversight committees' membership (Weingast and
  Moran, FTC); whether independent banks cause low inflation or a strong financial sector produces both
  (Posen); governor turnover in developing countries.
- **Strength:** discretion findings are well-documented correlations; the CBI-inflation link is robust in
  rich democracies, weak elsewhere, causally contested; control by anticipation is nearly invisible when it
  works (a quiet agency fits tight control and abdication alike).

*Lessons:* [6.2](lessons/06-02-delegation-and-oversight.md), [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md)

### Merit or responsiveness

- **Merit side:** open competition and for-cause removal buy expertise and frank advice; merit recruitment
  goes with less corruption (Dahlstrom, Lapuente and Teorell, 52 countries); patronage selects less
  competent people (Colonnelli, Prem and Teso) and lowers performance (Xu).
- **Responsiveness side:** the elected executive should be able to steer the machinery; career officials
  can drift from or delay elected priorities; patronage can raise accountability and delivery through
  monitoring and trust (Toral).
- **Crux:** responsiveness against neutral competence (Kaufman), and the empirical premise each side holds
  about how officials behave.
- **Evidence that would move it:** within-country comparisons of programmes run by appointees and career
  managers; implementation speed after transitions.
- **Strength:** cross-national correlations travel but cannot fix direction of cause; within-country designs
  are stronger but may not travel; no good cross-national measure of responsiveness.

*Lessons:* [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md)

### Magnitude or fragmentation first

- **Mechanical-cause side:** high magnitude lowers the effective threshold and raises the predicted $N_s$
  (seat product), so multipartism follows the rules.
- **Reverse-causation side:** parties choose magnitudes and thresholds; an already fragmenting party system
  adopts permissive rules (Rokkan; Boix's PR as insurance; Benoit's seat-maximizing view).
- **Crux:** the direction of causation between rules and party numbers.
- **Evidence that would move it:** vote fragmentation before a reform; timing of new parties; reforms imposed
  by an actor with no seat stake (a court, a citizen-initiated referendum).
- **Strength:** the correlation is robust; how much is causal is open and belongs to
  [`empirical-political-economy`](../empirical-political-economy/syllabus.md).

*Lessons:* [2.2](lessons/02-02-district-magnitude-and-thresholds.md), [2.4](lessons/02-04-districts-and-electoral-reform.md), [4.4](lessons/04-04-party-systems.md)

## Scholars and sources

Every author and text the lessons use, grouped by module in order of first use. Years are as the lessons
give them (or as the build verified them); where the lessons omit a year, so does the card. Modern authors
are paraphrased in the lessons, never quoted.

### Scholars on electoral systems

| Who | Work (year) | Use in the course | Lesson |
|---|---|---|---|
| Douglas Rae | *The Political Consequences of Electoral Laws* (1967) | ballot structure, magnitude, formula frame | [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md) |
| Thomas Hare | STV scheme (1859); quota $V/S$ | ancestor of STV and of the Hare quota | [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md), [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md) |
| John Stuart Mill | *Considerations on Representative Government* (owned by HPT 6.4) | championed Hare; majority-only representation as "false democracy" | [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md), [2.1](lessons/02-01-measuring-outcomes.md) |
| Henry Droop | treatise of 1869 (build-verified; lessons omit the year) | Droop quota | [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md) |
| John Carey and Matthew Shugart | "Incentives to cultivate a personal vote", *Electoral Studies* (1995) | Ballot, Pool, Vote, magnitude | [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md), [4.3](lessons/04-03-parties-organization-and-discipline.md) |
| Matthew Shugart and Martin Wattenberg | *Mixed-Member Electoral Systems* | mixed systems as a distinct family | [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md) |
| Ferrara, Herron and Nishikawa | (title not given) | contamination between tiers (contested) | [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md) |
| John Loosemore and Victor Hanby | *British Journal of Political Science* (1971) | LH index | [2.1](lessons/02-01-measuring-outcomes.md) |
| Michael Gallagher | *Electoral Studies* (1991) | least-squares index; 75% effective threshold | [2.1](lessons/02-01-measuring-outcomes.md), [2.2](lessons/02-02-district-magnitude-and-thresholds.md) |
| Markku Laakso and Rein Taagepera | *Comparative Political Studies* (1979) | effective number of parties | [2.1](lessons/02-01-measuring-outcomes.md), [4.4](lessons/04-04-party-systems.md) |
| Grigorii Golosov | *Party Politics* (2010) | alternative effective number | [2.1](lessons/02-01-measuring-outcomes.md) |
| Rein Taagepera and Matthew Shugart | *Seats and Votes* (1989) | magnitude as master variable | [2.2](lessons/02-02-district-magnitude-and-thresholds.md) |
| Arend Lijphart | *Electoral Systems and Party Systems* (1994) | effective threshold as midpoint of inclusion and exclusion | [2.2](lessons/02-02-district-magnitude-and-thresholds.md) |
| Rein Taagepera | *Predicting Party Sizes: The Logic of Simple Electoral Systems* (2007) | seat product | [2.2](lessons/02-02-district-magnitude-and-thresholds.md) |
| Matthew Shugart and Rein Taagepera | *Votes from Seats* (2017) | seat product | [2.2](lessons/02-02-district-magnitude-and-thresholds.md) |
| Maurice Duverger | *Les partis politiques* (1951) | Duverger's law; mechanical and psychological effects | [2.3](lessons/02-03-duvergers-law-observed.md) |
| Gary Cox | *Making Votes Count* (1997) | M plus 1 rule; party linkage | [2.3](lessons/02-03-duvergers-law-observed.md) |
| Pradeep Chhibber and Ken Kollman | *The Formation of National Party Systems* (2004) | linkage stronger with centralized power; India | [2.3](lessons/02-03-duvergers-law-observed.md) |
| William Riker | "The Two-Party System and Duverger's Law", *APSR* (1982) | law versus hypothesis | [2.3](lessons/02-03-duvergers-law-observed.md) |
| William Clark and Matt Golder | *Comparative Political Studies* (2006) | diversity times permissiveness | [2.3](lessons/02-03-duvergers-law-observed.md) |
| David Samuels and Richard Snyder | *British Journal of Political Science* (2001) | MAL index; 78 countries | [2.4](lessons/02-04-districts-and-electoral-reform.md) |
| Nicholas Stephanopoulos and Eric McGhee | *University of Chicago Law Review* | efficiency gap | [2.4](lessons/02-04-districts-and-electoral-reform.md) |
| Jowei Chen and Jonathan Rodden | (title not given) | geography packs urban voters under neutral maps | [2.4](lessons/02-04-districts-and-electoral-reform.md) |
| Kenneth Benoit | "Electoral Laws as Political Consequences", *Annual Review of Political Science* (2007) | seat-maximizing view; Poland 1989 to 2001 | [2.4](lessons/02-04-districts-and-electoral-reform.md) |
| Carles Boix | *APSR* (1999) | PR adopted as insurance by threatened incumbents | [2.4](lessons/02-04-districts-and-electoral-reform.md), [4.4](lessons/04-04-party-systems.md) |

### Scholars on executives and legislatures

| Who | Work (year) | Use in the course | Lesson |
|---|---|---|---|
| Walter Bagehot | *The English Constitution* (1867) | near-fusion of executive and legislature | [3.1](lessons/03-01-parliamentary-government.md) |
| Laver and Schofield | *Multiparty Government* (1990) | how cabinets end (literature cited) | [3.1](lessons/03-01-parliamentary-government.md) |
| Torbjorn Bergman | comparative work on formation rules | positive and negative parliamentarism | [3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md) |
| Wolfgang Muller and Kaare Strom | studies of Western European coalitions | agreements more common and detailed | [3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md) |
| Lanny Martin and Georg Vanberg | (among others) | formation takes longer with more and more distant parties | [3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md) |
| Kaare Strom | *Minority Government and Majority Rule* (1990) | minority government as rational choice | [3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md) |
| Matthew Shugart and John Carey | *Presidents and Assemblies* (1992) | defining presidentialism; premier-presidential versus president-parliamentary | [3.3](lessons/03-03-presidential-government.md), [3.4](lessons/03-04-semi-presidential-government.md) |
| Scott Mainwaring and Matthew Shugart (eds.) | *Presidentialism and Democracy in Latin America* (1997) | reactive and proactive powers; critique of Linz | [3.3](lessons/03-03-presidential-government.md) |
| David Mayhew | *Divided We Govern* (1991) | major laws 1946 to 1990, divided about as productive | [3.3](lessons/03-03-presidential-government.md) |
| Sarah Binder | *Stalemate* (2003) | share of agenda left unresolved | [3.3](lessons/03-03-presidential-government.md) |
| Juan Linz | "The Perils of Presidentialism", *Journal of Democracy* (1990) | dual legitimacy, rigidity, winner-take-all | [3.3](lessons/03-03-presidential-government.md) |
| Jose Antonio Cheibub | *Presidentialism, Parliamentarism, and Democracy* | military-legacy selection | [3.3](lessons/03-03-presidential-government.md) |
| Maurice Duverger | "A New Political System Model: Semi-Presidential Government" (1980) | semi-presidentialism defined | [3.4](lessons/03-04-semi-presidential-government.md) |
| Robert Elgie | minimal definition; *Semi-Presidentialism: Sub-Types and Democratic Performance* (2011) | subtype and democratic performance | [3.4](lessons/03-04-semi-presidential-government.md) |
| Arend Lijphart | *Patterns of Democracy* (2nd ed. 2012) | symmetry, congruence, index of bicameralism | [4.1](lessons/04-01-bicameralism.md) |
| Meg Russell | *The Contemporary House of Lords: Westminster Bicameralism Revived* | Lords more assertive after 1999 | [4.1](lessons/04-01-bicameralism.md) |
| George Tsebelis and Jeannette Money | *Bicameralism* (1997) | stopping rules as bargaining power | [4.1](lessons/04-01-bicameralism.md) |
| Weingast and Marshall | (1988) | distributive view of committees | [4.2](lessons/04-02-committees-and-agenda-control.md) |
| Keith Krehbiel | *Information and Legislative Organization* (1991); "Where's the party?", *BJPS* (1993) | informational view; floor-median challenge; preferences mimic party strength | [4.2](lessons/04-02-committees-and-agenda-control.md), [4.3](lessons/04-03-parties-organization-and-discipline.md) |
| Gary Cox and Mathew McCubbins | *Legislative Leviathan* (1993); *Setting the Agenda* (2005) | cartel theory | [4.2](lessons/04-02-committees-and-agenda-control.md) |
| Reuven Hazan and Gideon Rahat | (work on selectorates) | inclusiveness scale | [4.3](lessons/04-03-parties-organization-and-discipline.md) |
| Daniel Diermeier and Timothy Feddersen | *APSR* (1998) | confidence procedure and cohesion | [4.3](lessons/04-03-parties-organization-and-discipline.md) |
| Giovanni Sartori | *Parties and Party Systems* (1976) | relevant parties, anti-system parties, polarized pluralism | [4.4](lessons/04-04-party-systems.md) |
| T. J. Pempel (ed.) | *Uncommon Democracies* (1990) | dominant-party systems | [4.4](lessons/04-04-party-systems.md) |
| Seymour Martin Lipset and Stein Rokkan | in *Party Systems and Voter Alignments* (1967) | four cleavages; freezing | [4.4](lessons/04-04-party-systems.md) |
| Octavio Amorim Neto and Gary Cox | *American Journal of Political Science* (1997) | diversity times magnitude | [4.4](lessons/04-04-party-systems.md) |
| Russell Dalton and Martin Wattenberg (eds.) | *Parties without Partisans* (2000) | dealignment | [4.4](lessons/04-04-party-systems.md) |
| Ronald Inglehart | *The Silent Revolution* (1977) | value change and new-left parties | [4.4](lessons/04-04-party-systems.md) |
| Cas Mudde | *Populist Radical Right Parties in Europe* (2007) | radical right | [4.4](lessons/04-04-party-systems.md) |
| Liesbeth Hooghe and Gary Marks | (title not given) | a "transnational" cleavage | [4.4](lessons/04-04-party-systems.md) |

### Scholars on territory, courts, bureaucracy and the whole design

| Who | Work (year) | Use in the course | Lesson |
|---|---|---|---|
| William Riker | *Federalism: Origin, Operation, Significance* (1964) | definition of federalism | [5.1](lessons/05-01-federal-unitary-devolved.md) |
| Daniel Elazar | (no work named) | "self-rule plus shared rule" | [5.1](lessons/05-01-federal-unitary-devolved.md), [5.2](lessons/05-02-decentralization-in-practice.md) |
| Alfred Stepan | "Federalism and Democracy: Beyond the U.S. Model", *Journal of Democracy* (1999) | coming-together, holding-together, putting-together | [5.1](lessons/05-01-federal-unitary-devolved.md) |
| International IDEA | constitution-building primer on federalism | asymmetry usually follows holding-together | [5.1](lessons/05-01-federal-unitary-devolved.md) |
| Jonathan Rodden | *Hamilton's Paradox* | soft budget constraint | [5.2](lessons/05-02-decentralization-in-practice.md) |
| Alexander Hamilton | *Federalist* 78 | constitution preferred to statute | [5.3](lessons/05-03-judicial-review-compared.md) |
| Hans Kelsen | Austria's 1920 constitution | concentrated review; "negative legislator" | [5.3](lessons/05-03-judicial-review-compared.md) |
| Alec Stone Sweet | *Governing with Judges* (2000) | legislators anticipate review | [5.3](lessons/05-03-judicial-review-compared.md), [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md) |
| Tom Ginsburg | *Judicial Review in New Democracies* (2003) | review as insurance | [5.3](lessons/05-03-judicial-review-compared.md), [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md) |
| Stephen Gardbaum | *The New Commonwealth Model of Constitutionalism* | new Commonwealth model | [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md) |
| Mark Tushnet | *Weak Courts, Strong Rights* | "weak-form" label | [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md) |
| Robert Dahl | "Decision-Making in a Democracy" (1957) | Court rarely out of line with majorities for long | [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md) |
| Herbert Kaufman | "Emerging Conflicts in the Doctrines of Public Administration", *APSR* (1956) | neutral competence versus executive leadership | [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md) |
| Max Weber | ideal type of bureaucracy (owned by `social-theory` 4.4) | qualification, salary, career, rules | [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md) |
| Dahlstrom, Lapuente and Teorell | "The Merit of Meritocratization", *PRQ* (2012) | merit recruitment and corruption, 52 countries | [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md) |
| Evans and Rauch | *American Sociological Review* (1999) | Weberian features and growth | [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md) |
| Xu | *American Economic Review* (2018) | patronage among British colonial governors | [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md) |
| Colonnelli, Prem and Teso | *AER* (2020) | connections and public hiring in Brazil | [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md) |
| Toral | *AJPS* (2024) | patronage can raise accountability | [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md) |
| Ting, Snyder, Hirano and Folke | (title not given) | civil service reform as insurance | [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md) |
| Morris Fiorina | (no work named) | blame-shifting | [6.2](lessons/06-02-delegation-and-oversight.md) |
| Terry Moe | (no work named) | politics of bureaucratic structure | [6.2](lessons/06-02-delegation-and-oversight.md) |
| Kaare Strom and colleagues | *Delegation and Accountability in Parliamentary Democracies* (2003) | single chain of delegation | [6.2](lessons/06-02-delegation-and-oversight.md) |
| John Huber and Charles Shipan | *Deliberate Discretion?* (2002) | statutory detail and distrust | [6.2](lessons/06-02-delegation-and-oversight.md) |
| David Epstein and Sharyn O'Halloran | *Delegating Powers* (1999) | less delegation under divided government | [6.2](lessons/06-02-delegation-and-oversight.md) |
| McCubbins, Noll and Weingast | "Administrative Procedures as Instruments of Political Control" (1987) | procedures stack the deck | [6.2](lessons/06-02-delegation-and-oversight.md) |
| Mathew McCubbins and Thomas Schwartz | *American Journal of Political Science* (1984) | police patrols and fire alarms | [6.2](lessons/06-02-delegation-and-oversight.md) |
| Kydland and Prescott; Rogoff | (owned by `grad-macro` 6.2) | inflation bias; conservative central banker | [6.2](lessons/06-02-delegation-and-oversight.md) |
| Cukierman, Webb and Neyapti | *World Bank Economic Review* (1992) | index of legal CBI | [6.2](lessons/06-02-delegation-and-oversight.md) |
| Alberto Alesina and Lawrence Summers | *Journal of Money, Credit and Banking* (1993) | CBI and inflation in rich democracies | [6.2](lessons/06-02-delegation-and-oversight.md) |
| Adam Posen | (no work named) | financial-sector preference critique | [6.2](lessons/06-02-delegation-and-oversight.md) |
| Weingast and Moran | *Journal of Political Economy* (1983) | FTC and its oversight committee | [6.2](lessons/06-02-delegation-and-oversight.md) |
| Leonhard Neidhart | (no work named) | optional referendum and Swiss compromise | [6.3](lessons/06-03-direct-democracy.md) |
| Barbara Gamble; Todd Donovan and Shaun Bowler | (no works named) | ballot measures and minority rights | [6.3](lessons/06-03-direct-democracy.md) |
| Venice Commission | *Code of Good Practice on Referendums* (2007) | advises against turnout and approval quorums | [6.3](lessons/06-03-direct-democracy.md) |
| Arend Lijphart | *Democracies* (1984); *Patterns of Democracy* (1999; 2nd ed. 2012) | two dimensions; kinder, gentler | [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md) |
| Liam Anderson | *Comparative Political Studies* (2001) | corporatism drives the result | [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md) |
| Klaus Armingeon | *European Journal of Political Research* (2002) | corporatism drives the result | [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md) |
| Edeltraud Roller | *The Performance of Democracies* (2005) | roughly a tie for formal institutions | [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md) |
| G. Bingham Powell | *Elections as Instruments of Democracy* (2000) | majoritarian and proportional visions | [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md) |
| Rein Taagepera | *Political Studies* (2003) | interest groups do not fit; behaviour cannot be engineered | [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md) |

### Cases and judgments

| Case | Court, year | Holding as the course uses it | Lesson |
|---|---|---|---|
| *Marbury v. Madison* | US Supreme Court, 1803 | canonical statement of US review (doctrine owned by `constitutional-law`) | [5.3](lessons/05-03-judicial-review-compared.md) |
| *Missouri Pacific Railway Co. v. Kansas* | US Supreme Court, 1919 | override needs two-thirds of members present | [3.3](lessons/03-03-presidential-government.md) |
| *Humphrey's Executor* | US Supreme Court, 1935 | for-cause removal protection upheld; overruled 2026 | [6.2](lessons/06-02-delegation-and-oversight.md) |
| *Printz v. United States* | US Supreme Court, 1997 | Congress may not commandeer state officers | [5.2](lessons/05-02-decentralization-in-practice.md), [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md) |
| *Clinton v. City of New York* | US Supreme Court, 1998 | Line Item Veto Act struck down | [3.3](lessons/03-03-presidential-government.md) |
| *Trump v. Slaughter* | US Supreme Court, 2026 | Congress may not require cause to remove officials exercising executive power | [6.2](lessons/06-02-delegation-and-oversight.md) |
| *Trump v. Cook* | US Supreme Court, 29 June 2026 | removal of a Fed governor not allowed to take effect pending litigation | [6.2](lessons/06-02-delegation-and-oversight.md) |
| *Liberte d'association* | Conseil constitutionnel, 1971 | review extended to the 1789 Declaration and the 1946 Preamble | [5.3](lessons/05-03-judicial-review-compared.md) |
| BVerfGE 62, 1 | Federal Constitutional Court, 16 February 1983 | let the January 1983 dissolution stand | [3.1](lessons/03-01-parliamentary-government.md) |
| splitting bills to avoid consent | Federal Constitutional Court, 2002 | constitutionally unobjectionable | [4.1](lessons/04-01-bicameralism.md) |
| PSPP judgment | Federal Constitutional Court, May 2020 | refused to follow the EU court's approval of an ECB programme | [6.2](lessons/06-02-delegation-and-oversight.md) |
| 2 BvF 1/23 | Federal Constitutional Court, 30 July 2024 | coverage upheld; reformed 5% threshold struck; three-constituency exception restored | [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md), [2.2](lessons/02-02-district-magnitude-and-thresholds.md) |
| *Ghaidan v Godin-Mendoza* | House of Lords, 2004 | bold s.3 reading: same-sex partners | [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md) |
| *Miller* [2017] UKSC 5 | UK Supreme Court, 2017 | Sewel a political convention; 2016 referendum's force "political rather than legal" | [5.2](lessons/05-02-decentralization-in-practice.md), [6.3](lessons/06-03-direct-democracy.md) |
| Japan Supreme Court | 1952 | no abstract review absent a concrete case | [5.3](lessons/05-03-judicial-review-compared.md) |

## Assumed, not taught here

The course uses these without deriving them. Each row points at the course that owns the topic: built
lessons are linked directly, syllabus-only courses through their syllabus.

### Assumed from political theory and philosophy

| Fact or tool | Used in | Where it's taught |
|---|---|---|
| Montesquieu's separation of powers and his objection to ministers taken from the legislature; England's two chambers checking each other | [3.1](lessons/03-01-parliamentary-government.md), [3.3](lessons/03-03-presidential-government.md), [4.1](lessons/04-01-bicameralism.md), [5.3](lessons/05-03-judicial-review-compared.md), [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md) | [`history-of-political-thought` 5.1](../history-of-political-thought/lessons/05-01-montesquieu-the-spirit-of-the-laws.md) |
| *Federalist* 51 (ambition counteracting ambition; "double security"); Madison on faction; republic versus pure democracy | [3.3](lessons/03-03-presidential-government.md), [4.3](lessons/04-03-parties-organization-and-discipline.md), [4.4](lessons/04-04-party-systems.md), [5.1](lessons/05-01-federal-unitary-devolved.md), [6.3](lessons/06-03-direct-democracy.md), [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md) | [`history-of-political-thought` 5.2](../history-of-political-thought/lessons/05-02-the-federalist-faction-and-the-extended-republic.md) |
| Mill: Hare's scheme and minority representation, majority-only representation as "false democracy", an assembly that watches and controls rather than administers, bureaucracy without a popular element | [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md), [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md), [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md), [1.4](lessons/01-04-list-pr-divisor-methods.md), [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md), [2.1](lessons/02-01-measuring-outcomes.md), [2.2](lessons/02-02-district-magnitude-and-thresholds.md), [2.3](lessons/02-03-duvergers-law-observed.md), [2.4](lessons/02-04-districts-and-electoral-reform.md), [3.1](lessons/03-01-parliamentary-government.md), [4.2](lessons/04-02-committees-and-agenda-control.md), [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md) | [`history-of-political-thought` 6.4](../history-of-political-thought/lessons/06-04-mill-representative-government.md) |
| Tocqueville: centralized government versus centralized administration; tyranny of the majority | [5.1](lessons/05-01-federal-unitary-devolved.md), [6.3](lessons/06-03-direct-democracy.md) | [`history-of-political-thought` 6.3](../history-of-political-thought/lessons/06-03-tocqueville-tyranny-of-the-majority-and-soft-despotism.md) |
| Rousseau: sovereignty cannot be represented | [6.3](lessons/06-03-direct-democracy.md) | [`history-of-political-thought` 4.4](../history-of-political-thought/lessons/04-04-rousseau-the-social-contract.md) |
| The mixed constitution: Cicero's blend; Machiavelli's Rome | [4.1](lessons/04-01-bicameralism.md), [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md) | [`history-of-political-thought` 2.1](../history-of-political-thought/lessons/02-01-cicero-the-commonwealth-and-natural-law.md), [3.2](../history-of-political-thought/lessons/03-02-machiavelli-the-discourses.md) |
| What democratic procedures are for; the equal-say argument; the instrumental case for accountable rulers | [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md), [2.1](lessons/02-01-measuring-outcomes.md), [3.1](lessons/03-01-parliamentary-government.md), [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md) | [`political-philosophy` 5.1](../political-philosophy/lessons/05-01-why-democracy.md) |
| Strong- and weak-form review defined; whether courts should have the last word (Waldron's case) | [5.3](lessons/05-03-judicial-review-compared.md), [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md), [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md) | [`political-philosophy` 5.2](../political-philosophy/lessons/05-02-majority-rule-vs-rights-judicial-review.md) |
| Aggregative versus deliberative democracy | [6.3](lessons/06-03-direct-democracy.md) | [`political-philosophy` 5.3](../political-philosophy/lessons/05-03-deliberative-vs-aggregative-democracy.md) |
| Condorcet winners and cycles; agenda-setting under cycling; Riker on whether a vote reveals "the will of the people" | [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md), [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md), [4.2](lessons/04-02-committees-and-agenda-control.md), [6.3](lessons/06-03-direct-democracy.md) | [`political-philosophy` 5.4](../political-philosophy/lessons/05-04-does-social-choice-wound-democracy.md) |
| Subsidiarity | [5.1](lessons/05-01-federal-unitary-devolved.md), [5.2](lessons/05-02-decentralization-in-practice.md) | [`political-philosophy` 6.4](../political-philosophy/lessons/06-04-welfare-property-and-subsidiarity.md) |
| Whether proportionality is owed; whether a representative should follow party, conscience or voters; fused versus separated design (normative questions) | [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md), [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md), [3.1](lessons/03-01-parliamentary-government.md), [4.3](lessons/04-03-parties-organization-and-discipline.md) | [`political-philosophy`](../political-philosophy/syllabus.md) |
| Kelsen's hierarchy of norms; theories of statutory interpretation ("so far as it is possible") | [5.3](lessons/05-03-judicial-review-compared.md), [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md) | [`philosophy-of-law`](../philosophy-of-law/syllabus.md) |
| Weber's ideal type of bureaucracy | [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md) | [`social-theory`](../social-theory/syllabus.md) [4.4](../social-theory/lessons/04-04-bureaucracy-rationalization-and-disenchantment.md) |

### Assumed from economics, game theory and mathematics

| Fact or tool | Used in | Where it's taught |
|---|---|---|
| Plurality as a social choice rule; Gibbard-Satterthwaite (every reasonable rule can be gamed); the median voter result | [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md), [2.3](lessons/02-03-duvergers-law-observed.md), [4.4](lessons/04-04-party-systems.md) | [`grad-game-theory` 5.1](../grad-game-theory/lessons/05-01-social-choice-impossibility.md) |
| Coalitional games; the empty core of the three-player majority game | [3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md) | [`grad-game-theory` 6.1](../grad-game-theory/lessons/06-01-coalitional-games-core.md) |
| Shapley-Shubik voting power (weights 3, 2, 1, quota 4) | [3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md) | [`grad-game-theory` 6.2](../grad-game-theory/lessons/06-02-shapley-value.md) |
| Principal-agent model with hidden action; the optimal contract | [4.3](lessons/04-03-parties-organization-and-discipline.md), [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md), [6.2](lessons/06-02-delegation-and-oversight.md) | [`grad-micro` 5.4](../grad-micro/lessons/05-04-moral-hazard-principal-agent.md) |
| Kydland-Prescott inflation bias; Rogoff's conservative central banker | [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md), [6.2](lessons/06-02-delegation-and-oversight.md), [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md) | [`grad-macro` 6.2](../grad-macro/lessons/06-02-policy-rules-taylor-principle.md) |
| Tiebout sorting | [5.1](lessons/05-01-federal-unitary-devolved.md), [5.2](lessons/05-02-decentralization-in-practice.md) | [`public-economics` 8.1](../public-economics/lessons/08-01-tiebout-voting-with-your-feet.md) |
| Assignment of functions, spillovers, grants and the flypaper effect; the efficiency case for federalism | [5.1](lessons/05-01-federal-unitary-devolved.md), [5.2](lessons/05-02-decentralization-in-practice.md) | [`public-economics` 8.2](../public-economics/lessons/08-02-assignment-spillovers-and-grants.md) |
| Tax competition | [5.1](lessons/05-01-federal-unitary-devolved.md), [5.2](lessons/05-02-decentralization-in-practice.md) | [`public-economics` 8.3](../public-economics/lessons/08-03-tax-competition.md) |
| Credible commitment after 1688; Crown, Lords and Commons as veto players | [3.1](lessons/03-01-parliamentary-government.md), [6.2](lessons/06-02-delegation-and-oversight.md) | [`history-of-debt` 3.2](../history-of-debt/lessons/03-02-did-1688-make-britain-creditworthy.md) |
| Congress declining to assume the 1841 to 1842 state defaults | [5.2](lessons/05-02-decentralization-in-practice.md) | [`history-of-debt` 4.1](../history-of-debt/lessons/04-01-hamiltons-assumption-plan.md) |
| The euro area's no-bailout clause | [5.2](lessons/05-02-decentralization-in-practice.md) | [`history-of-debt` 6.2](../history-of-debt/lessons/06-02-the-eurozone-and-greece.md) |
| Rules versus discretion; Sargent and Wallace's unpleasant arithmetic | [6.2](lessons/06-02-delegation-and-oversight.md) | [`economics-of-debt` 8.1](../economics-of-debt/lessons/08-01-forgiveness-commitment-and-the-fresh-start.md), [5.4](../economics-of-debt/lessons/05-04-fiscal-limits-and-unpleasant-arithmetic.md) |
| Signed measures and the Jordan decomposition (LH as half the total variation of the gaps) | [2.1](lessons/02-01-measuring-outcomes.md) | [`measure-theory` 4.3](../measure-theory/lessons/04-03-signed-measures-decomposition.md) |

### Assumed from courses not yet built

| Fact or tool | Used in | Where it's taught |
|---|---|---|
| Strategic voting as an equilibrium (2.5); setter, veto-player and gridlock-interval models, reversion points (3.5); accountability, career-concern and capture models (Module 4, capture 4.4); coalition formation, minimal winning coalitions, Gamson's law, Baron-Ferejohn (5.1 to 5.2); Downsian convergence | [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md), [2.3](lessons/02-03-duvergers-law-observed.md), [2.4](lessons/02-04-districts-and-electoral-reform.md), [3.1](lessons/03-01-parliamentary-government.md), [3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md), [3.3](lessons/03-03-presidential-government.md), [3.4](lessons/03-04-semi-presidential-government.md), [4.1](lessons/04-01-bicameralism.md), [4.2](lessons/04-02-committees-and-agenda-control.md), [4.3](lessons/04-03-parties-organization-and-discipline.md), [4.4](lessons/04-04-party-systems.md), [5.3](lessons/05-03-judicial-review-compared.md), [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md), [6.2](lessons/06-02-delegation-and-oversight.md), [6.3](lessons/06-03-direct-democracy.md) | [`political-economy`](../political-economy/syllabus.md) |
| Monotonicity and participation failures of AV and STV; scoring-rule properties; Hamilton, Jefferson and Webster apportionment, the Alabama paradox and Balinski-Young; strategic abstention | [1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md), [1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md), [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md), [1.4](lessons/01-04-list-pr-divisor-methods.md), [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md), [2.1](lessons/02-01-measuring-outcomes.md), [2.2](lessons/02-02-district-magnitude-and-thresholds.md), [6.3](lessons/06-03-direct-democracy.md) | [`social-choice`](../social-choice/syllabus.md) |
| US doctrine: *Marbury*, standing and justiciability, redistricting justiciability, separation of powers and the line-item veto, anti-commandeering, removal doctrine | [2.4](lessons/02-04-districts-and-electoral-reform.md), [3.3](lessons/03-03-presidential-government.md), [5.2](lessons/05-02-decentralization-in-practice.md), [5.3](lessons/05-03-judicial-review-compared.md), [5.4](lessons/05-04-weak-form-review-appointments-and-independence.md), [6.2](lessons/06-02-delegation-and-oversight.md), [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md) | [`constitutional-law`](../constitutional-law/syllabus.md) |
| Democratic breakdown (Linz's argument used there); Weimar's collapse; when a division becomes a cleavage; holding-together federalism in divided societies; consociationalism | [3.1](lessons/03-01-parliamentary-government.md), [3.3](lessons/03-03-presidential-government.md), [3.4](lessons/03-04-semi-presidential-government.md), [4.4](lessons/04-04-party-systems.md), [5.1](lessons/05-01-federal-unitary-devolved.md), [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md) | [`comparative-politics`](../comparative-politics/syllabus.md) |
| Identifying institutional effects causally (magnitude, list type, contamination, strategic voting, breakdown, gatekeeping, merit, bailouts, performance) | [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md), [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md), [2.1](lessons/02-01-measuring-outcomes.md), [2.2](lessons/02-02-district-magnitude-and-thresholds.md), [2.3](lessons/02-03-duvergers-law-observed.md), [2.4](lessons/02-04-districts-and-electoral-reform.md), [3.3](lessons/03-03-presidential-government.md), [3.4](lessons/03-04-semi-presidential-government.md), [4.2](lessons/04-02-committees-and-agenda-control.md), [4.4](lessons/04-04-party-systems.md), [5.1](lessons/05-01-federal-unitary-devolved.md), [5.2](lessons/05-02-decentralization-in-practice.md), [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md), [6.4](lessons/06-04-majoritarian-and-consensus-democracy.md) | [`empirical-political-economy`](../empirical-political-economy/syllabus.md) |
| The wage that buys an honest official; merit versus patronage as a selection problem | [6.1](lessons/06-01-bureaucracy-merit-and-patronage.md) | [`institutions-and-development`](../institutions-and-development/syllabus.md) 4.3 |

## Pitfalls

The Watch-out traps of every lesson, deduplicated and grouped by theme. The first group is the course's
signature error.

### Pitfalls on mechanical versus empirical claims

- **"Plurality produces two parties" is part of the rule.** The rule says only that the top vote-getter
  wins; two-candidate competition is an empirical tendency, strong by district, with national exceptions.
  *([1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md), [2.3](lessons/02-03-duvergers-law-observed.md))*
- **"D'Hondt favours large parties" (or "parallel systems give the leader a bonus") is an empirical
  finding.** Both are mechanical: rounding arithmetic, and a plurality tier added without compensation. What
  they do to the number of parties over time is the empirical part. *([1.4](lessons/01-04-list-pr-divisor-methods.md), [1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md))*
- **"STV produces candidate-centred politics" is a property of the rule.** The mechanical fact is only that
  votes transfer between candidates; behaviour is observed, in one or two countries. *([1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md))*
- **Because a quota cost a small party its seat, that quota means fewer parties.** The seat transfer is
  mechanical; whether voters then desert is empirical, and magnitude matters far more than the quota.
  *([1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md))*
- **The mechanical effect explains a third party's falling vote.** The mechanical effect converts votes into
  seats within one election; a vote that falls between elections, if strategic, is the psychological effect.
  *([2.3](lessons/02-03-duvergers-law-observed.md))*
- **A low disproportionality index shows voters got the parliament they wanted.** The index compares seats
  with votes as cast; strategic desertion before the count makes it look better. *([2.1](lessons/02-01-measuring-outcomes.md))*
- **A large efficiency gap proves a gerrymander.** The gap is a fact about the map; intent is an inference,
  and geography alone can pack a party. *([2.4](lessons/02-04-districts-and-electoral-reform.md))*
- **No-confidence votes are how parliamentary governments usually fall.** A mechanical possibility, not a
  frequency; most cabinets end by elections, splits or resignations, and a deterrent that works is never
  fired. *([3.1](lessons/03-01-parliamentary-government.md))*
- **Divided government causes gridlock by definition.** Mechanically it gives each side a veto point;
  whether fewer laws pass is Mayhew's and Binder's empirical dispute. *([3.3](lessons/03-03-presidential-government.md))*
- **The subtype's effect on democracy is settled.** Elgie's association is of moderate strength, few cases,
  non-random adoption. *([3.4](lessons/03-04-semi-presidential-government.md))*
- **"The majority is rarely rolled" proves the cartel theory.** The roll rate is the regularity; the theory
  is one interpretation of it. *([4.2](lessons/04-02-committees-and-agenda-control.md))*
- **A high Rice index proves strong discipline.** It measures an outcome; agreement and agenda selection
  produce the same number. *([4.3](lessons/04-03-parties-organization-and-discipline.md))*
- **"The system is frozen" is a definition.** It is an empirical claim about a period (the 1920s to the
  1960s); a new party on an old cleavage fits the model. *([4.4](lessons/04-04-party-systems.md))*
- **"Coming-together federations are symmetric" is a rule.** Symmetry is read off a text; its link to
  origin is a thin tendency. *([5.1](lessons/05-01-federal-unitary-devolved.md))*
- **Concentrated courts strike down more laws, by design.** The design is silent on use; the US and Japan
  share a design and differ sharply. *([5.3](lessons/05-03-judicial-review-compared.md))*
- **"Declarations are almost always acted on" describes what s.4 does.** Mechanically s.4(6) leaves the
  statute in force and no one must respond; compliance is one country's record. *([5.4](lessons/05-04-weak-form-review-appointments-and-independence.md))*
- **"Merit systems are less corrupt" or "independent central banks deliver low inflation" is part of what
  the rule does.** Both are robust correlations with contested direction of cause; the rule fixes only who
  chooses and who can fire. *([6.1](lessons/06-01-bureaucracy-merit-and-patronage.md), [6.2](lessons/06-02-delegation-and-oversight.md))*
- **"Advisory" means inconsequential.** Legal effect is mechanical (read off the statute); political effect
  is empirical, and 2016 shows it can be decisive. *([6.3](lessons/06-03-direct-democracy.md))*
- **A Lijphart score is a fact about a constitution.** Three of the five first-dimension variables are
  observed behaviour; a score describes a period. *([6.4](lessons/06-04-majoritarian-and-consensus-democracy.md))*

### Pitfalls in the formulas

- **Hare and Droop differ by a rounding detail.** They differ in what they guarantee: $V/S$ can be reached
  by all $S$ winners only if no vote is wasted, while $\lfloor V/(S+1)\rfloor + 1$ is the smallest quota that
  cannot elect $S+1$. Do not drop the "+1". *([1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md), [1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md))*
- **Droop in list PR does what it does in STV.** In list PR it is just a lower price: nothing transfers, and
  it only changes how many seats are automatic. *([1.3](lessons/01-03-list-pr-quotas-and-largest-remainders.md))*
- **A surplus lottery decided the seat.** Surpluses exist only above the quota; with candidates well below
  it, exclusion and transfer decided. *([1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md))*
- **AV is proportional because it uses transfers.** AV fills one seat; proportionality comes from magnitude.
  *([1.2](lessons/01-02-ranked-ballots-the-alternative-vote-and-stv.md))*
- **D'Hondt and Sainte-Lague differ only slightly.** Divisors 1, 2, 3 against 1, 3, 5: round down against
  round to nearest. Sainte-Lague is neutral on average, not pro-small; a raised first divisor brakes only
  the first seat. In the one-price form, $\mu$ is twice the cut-off Sainte-Lague quotient. *([1.4](lessons/01-04-list-pr-divisor-methods.md))*
- **The formula is the big lever.** Halving a district can erase the difference between formulas.
  *([1.4](lessons/01-04-list-pr-divisor-methods.md), [2.2](lessons/02-02-district-magnitude-and-thresholds.md))*
- **MMP is "half proportional" because half its seats are list seats.** Its totals are proportional,
  overhang and thresholds aside; allocating entitlements on the list seats alone is the parallel method.
  *([1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md))*
- **New Zealand's one-electorate rule and Germany's three-constituency exception are the same.** Both let a
  concentrated party past a national threshold; they differ in reach. *([1.5](lessons/01-05-mixed-systems-mmp-and-parallel.md))*
- **LH and Gallagher are two estimates of one quantity.** They are different distances and rank results
  differently when distortion is concentrated in one case and dispersed in the other; both carry a half.
  *([2.1](lessons/02-01-measuring-outcomes.md))*
- **A large effective number means no party can govern alone.** $N$ measures concentration, not majorities;
  compute it from fractions, and say whether it is by votes or by seats ($N_s$ is where governments are made).
  *([2.1](lessons/02-01-measuring-outcomes.md), [4.4](lessons/04-04-party-systems.md))*
- **The effective threshold guarantees a seat.** The guarantee is the exclusion threshold $100\%/(M+1)$; the
  75% figure is an even-odds rule of thumb, divided by $M+1$, not $M$, and it is district-level, not national.
  *([2.2](lessons/02-02-district-magnitude-and-thresholds.md))*
- **$N_s \approx (MS)^{1/6}$ forecasts a given country.** It is an average with real scatter and no
  threshold or cleavage term. *([2.2](lessons/02-02-district-magnitude-and-thresholds.md))*
- **Equal-population districts rule out gerrymandering.** They rule out only malapportionment; the
  majority-electing share is half the population of the smallest majority-forming districts. *([2.4](lessons/02-04-districts-and-electoral-reform.md))*
- **Rice counts abstainers.** Abstentions are excluded from both terms. *([4.3](lessons/04-03-parties-organization-and-discipline.md))*
- **A high VFI shows a centralized state.** VFI measures financing, not control; read the grant design and
  who sets the tax rate. *([5.2](lessons/05-02-decentralization-in-practice.md))*
- **French runoff rules are one rule, and their bars are shares of votes cast.** The presidential rule caps
  the field at two; the Assembly rule sets bars against registered voters, so turnout moves the field.
  *([1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md))*
- **A runoff is AV held on two days.** Round-two voters react, candidates withdraw, turnout changes.
  *([1.1](lessons/01-01-anatomy-of-an-electoral-system-plurality-and-runoff.md))*

### Pitfalls on executives and legislatures

- **247 of 260 votes cast was a majority against Brandt.** Art. 67 counts Members, not votes cast; staying
  away is a no. *([3.1](lessons/03-01-parliamentary-government.md))*
- **The UK's 2011 Act gave Britain presidential-style fixed terms.** An ordinary statute could be bypassed
  by statute (2019) and was repealed (2022). *([3.1](lessons/03-01-parliamentary-government.md))*
- **The largest party "won" and has a right to govern.** A normative claim; no rule gives a seat plurality
  formal power. *([3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md))*
- **A minority government is a coalition that failed; a support deal is a coalition by degree.** Minority
  government may be preferred (Strom); a support party holds no ministries and is bound only on what it
  signed. *([3.2](lessons/03-02-forming-governments-coalitions-and-minorities.md))*
- **Impeachment is the presidential no-confidence vote.** It differs in grounds, threshold and purpose.
  *([3.3](lessons/03-03-presidential-government.md))*
- **Any directly elected president makes a system presidential.** Separate survival is the test.
  *([3.3](lessons/03-03-presidential-government.md))*
- **Semi-presidential means a half-powerful president; France is president-parliamentary because presidents
  replace PMs.** The label is structure, not power; replacement rests on convention and a shared majority.
  *([3.4](lessons/03-04-semi-presidential-government.md))*
- **A chamber with weak formal powers has little influence.** That is an empirical claim (anticipated
  reactions). *([4.1](lessons/04-01-bicameralism.md))*
- **The Bundesrat is Germany's Senate; congruence means the same party controls both chambers.** Bundesrat
  members are Land ministers voting en bloc; congruence is about composition. *([4.1](lessons/04-01-bicameralism.md))*
- **A bill with floor majority support is entitled to a vote; the Hastert rule is a House rule.** Floor
  majorities decide passage, not consideration; the norm is informal. *([4.2](lessons/04-02-committees-and-agenda-control.md))*
- **Germany's free mandate makes members free agents; open lists strip the party of all ballot control.**
  Art. 38(1) bars legal compulsion only; the selectorate still controls access. *([4.3](lessons/04-03-parties-organization-and-discipline.md))*
- **The effective number and Sartori's count measure the same thing; fragmentation and polarization go
  together.** Size against function; two separate coordinates. *([4.4](lessons/04-04-party-systems.md))*

### Pitfalls on territory and courts

- **Federal regions always do more than devolved ones; federal means decentralized.** The categories record
  which rule protects the regions, not how much they do. *([5.1](lessons/05-01-federal-unitary-devolved.md), [5.2](lessons/05-02-decentralization-in-practice.md))*
- **A holding-together federation is just devolution.** Origin is not the lock. *([5.1](lessons/05-01-federal-unitary-devolved.md))*
- **The *Miller* judgment held Westminster may ignore Sewel.** It held only that courts will not enforce it. *([5.2](lessons/05-02-decentralization-in-practice.md))*
- **Abstract review means a priori review.** Separate axes: live dispute or not; in force or not.
  *([5.3](lessons/05-03-judicial-review-compared.md))*
- **A US ruling deletes the statute.** A US court declines to apply it; precedent does the rest.
  *([5.3](lessons/05-03-judicial-review-compared.md))*
- **Canada's override and the UK's declaration are the same device.** The default is reversed. *([5.4](lessons/05-04-weak-form-review-appointments-and-independence.md))*
- **Independence means life tenure.** A single non-renewable term does the same work; a two-thirds rule makes
  composition a bargain, not non-partisan. *([5.4](lessons/05-04-weak-form-review-appointments-and-independence.md))*

### Pitfalls on bureaucracy, referendums and the map

- **Merit means tenure.** Merit is two rules; the corruption finding attaches to recruitment. *([6.1](lessons/06-01-bureaucracy-merit-and-patronage.md))*
- **UK special advisers are Britain's version of US appointees.** They differ in depth and power.
  *([6.1](lessons/06-01-bureaucracy-merit-and-patronage.md))*
- **A fire alarm means no oversight, or less.** A different design with different costs. *([6.2](lessons/06-02-delegation-and-oversight.md))*
- **The Bank of England and the ECB are independent in the same sense.** Only the ECB chooses its own
  target. *([6.2](lessons/06-02-delegation-and-oversight.md))*
- **The optional referendum and the initiative are one device.** Veto against agenda-setting. *([6.3](lessons/06-03-direct-democracy.md))*
- **Turnout and approval quorums are two strengths of one rule.** Their incentives are opposite.
  *([6.3](lessons/06-03-direct-democracy.md))*
- **A consensus democracy has every consensus institution; the two dimensions measure majoritarianism
  twice.** Scores are averages (Switzerland has no review of federal acts), and the dimensions vary
  independently (US, Israel). *([6.4](lessons/06-04-majoritarian-and-consensus-democracy.md))*

---

## Conventions

- **One card per course,** covering every lesson. Quizzes and reviews are open book, so problems ask you to
  *use* these entries, never to recall them.
- **Verdict-neutral and descriptive.** Entries state what a rule does (mechanical), what a design is
  observed to do with the strength of evidence in words (empirical), and what defenders and critics claim;
  no entry records a verdict.
- **Rules are dated.** "As of 2026" marks rules verified in the build; rules change, so check the year.
- **The card follows the lessons where the build's source checks corrected the syllabus.** Notable: the
  French Assembly runoff admits the runner-up (or the top two) when fewer than two reach 12.5% of registered
  voters; Germany's Basic Law was renumbered by an amendment in force 28 December 2024 (Constitutional Court
  jurisdiction now Art. 94, composition Art. 93); Turkey's threshold is 7% since 2022; the 1972 constructive
  motion's candidate was Barzel; the 2023 German rule is coverage, with balance seats from 2013 to 2023;
  Germany's divisor rule is Sainte-Lague in divisor form; Spain has 52 districts (50 provinces plus Ceuta and
  Melilla); the 2008 French revision leaves 49-3 unlimited for finance and social security financing bills;
  the House of Lords (Hereditary Peers) Act 2026 removed the remaining hereditary peers; *Trump v. Slaughter*
  (2026) overruled *Humphrey's Executor*; Germany sits on the consensus side of both Lijphart dimensions in
  his data (0.78, 2.41), not intermediate.
- **Curriculum gap:** no course in the tree owns corporatism; 6.4 defines it in one sentence and this card
  gives it an entry.
- **Boss problems** appear nowhere on this card, in numbers or in outline.
- **Headings are anchors.** Lessons link to `../reference.md#slug`; renaming a `###` heading breaks them.
  Headings are ASCII only, so possessives drop their apostrophes ("Duvergers law") and accents are dropped
  ("Sainte-Lague").
- **No prose dollar signs:** "50,000 euros", "10,000 votes", never the currency symbol.
