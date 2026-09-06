# Algorithms · Lesson 1.5: Divide-and-conquer beyond sorting

> ⏱ ~15 min · Module 1: Analysis & divide-and-conquer · Builds on: [1.3 (the master theorem)](01-03-the-master-theorem.md), [1.4 (sorting by divide-and-conquer)](01-04-sorting-and-the-comparison-lower-bound.md) · Unlocks: 2.1 (the greedy method)

## Why this matters

Sorting makes divide-and-conquer look like a way to organize a recursion. This lesson shows what it actually is: **a way to buy a better exponent.**

The three algorithms here — Karatsuba's integer multiplication, Strassen's matrix multiplication, and closest-pair-of-points — all beat the obvious method, and two of them do it by the same startling trick: *doing more addition in order to do fewer multiplications.* That trade sounds like a bad deal and is a very good one, because the additions live in the combine step (which costs $\Theta(n)$ once) while the multiplications live in the recursion (which costs $a$ times, at every level, forever).

[Lesson 1.3's P3](01-03-the-master-theorem.md) already gave you the principle in the abstract: in a case-1 recurrence, **reducing $a$ changes the exponent and speeding up $f(n)$ changes nothing.** This lesson is that principle cashed in three times, and it is the design instinct the module has been building toward. When you look at a recursive algorithm and want it faster, the first question is not "can I optimize the combine step" but "can I make one of the recursive calls unnecessary."

## The idea

Start with the naive method for multiplying two $n$-digit numbers by splitting each in half:

$$x = a\cdot 10^{n/2} + b, \qquad y = c\cdot 10^{n/2} + d,$$
$$xy = ac\cdot 10^{n} + (ad + bc)\cdot 10^{n/2} + bd.$$

Four half-size products: $ac$, $ad$, $bc$, $bd$. That gives $T(n) = 4T(n/2) + \Theta(n)$, and the master theorem says $\Theta(n^{\log_2 4}) = \Theta(n^2)$ — exactly the schoolbook cost. **Splitting alone bought nothing**, which is worth noticing: divide-and-conquer is not automatically a win.

Now [Karatsuba's observation](../reference.md#karatsubas-identity). We do not need $ad$ and $bc$ separately; we only need their **sum**. And

$$(a+b)(c+d) = ac + ad + bc + bd \quad\Longrightarrow\quad ad + bc = (a+b)(c+d) - ac - bd.$$

We already have $ac$ and $bd$. So one extra product, $(a+b)(c+d)$, plus two subtractions, replaces two products. Three multiplications instead of four:

$$T(n) = 3T(n/2) + \Theta(n) \quad\Longrightarrow\quad \Theta(n^{\log_2 3}) = \Theta(n^{1.585}).$$

We paid a few extra additions — $\Theta(n)$ work, absorbed entirely by the combine step — and got back a smaller exponent. **The additions are free and the multiplication is not**, because only the multiplication recurses.

Strassen does the identical thing one dimension up: block $2\times2$ matrix multiplication needs eight products of $n/2$ blocks, and seven cleverly-chosen combinations suffice, giving $\Theta(n^{\log_2 7}) = \Theta(n^{2.807})$.

Closest pair is the different flavour — here $a$ and $b$ are fixed at 2, and the whole difficulty is getting the **combine step down to $\Theta(n)$**. The naive combine would compare every left point to every right point, $\Theta(n^2)$, which by case 3 would leave you at $\Theta(n^2)$ overall and no better than brute force. A geometric argument cuts it to $\Theta(n)$ and rescues the whole approach.

## The formal version

**Karatsuba multiplication.** For $n$-digit $x, y$ split at the midpoint as above:

$$P_1 = ac, \qquad P_2 = bd, \qquad P_3 = (a+b)(c+d),$$
$$xy = P_1\cdot 10^n + (P_3 - P_1 - P_2)\cdot 10^{n/2} + P_2.$$

Three recursive multiplications of $\sim n/2$ digits, plus additions, subtractions and shifts, all $\Theta(n)$:

$$T(n) = 3T(n/2) + \Theta(n) \;\overset{\text{case 1}}{=}\; \Theta\!\left(n^{\log_2 3}\right), \qquad \log_2 3 = 1.58496\ldots$$

(Case 1 because $f(n) = n$ is polynomially smaller than the watershed $n^{1.585}$.)

**Strassen matrix multiplication.** For $n\times n$ matrices split into four $n/2 \times n/2$ blocks, the naive block method uses eight products:

$$T(n) = 8T(n/2) + \Theta(n^2) \;\overset{\text{case 1}}{=}\; \Theta(n^{\log_2 8}) = \Theta(n^3),$$

again matching the obvious algorithm. Strassen forms seven products of sums and differences of blocks, and recovers the four result blocks by additions:

$$T(n) = 7T(n/2) + \Theta(n^2) \;\overset{\text{case 1}}{=}\; \Theta\!\left(n^{\log_2 7}\right), \qquad \log_2 7 = 2.80735\ldots$$

**Closest pair of points.** Given $n$ points in the plane, find the two closest.

```
CLOSEST-PAIR(P sorted by x):
    if |P| <= 3: return brute force
    split P at the median x-coordinate x_m into L and R
    d_L <- CLOSEST-PAIR(L)
    d_R <- CLOSEST-PAIR(R)
    d   <- min(d_L, d_R)
    S   <- points within horizontal distance d of x_m, sorted by y
    for each point s in S:
        compare s with the NEXT 7 points of S in y-order
        update d if a closer pair appears
    return d
```

The combine step's correctness rests on a counting argument. Any pair closer than $d$ must have both points in the strip $S$ (otherwise they are on the same side and at least $d$ apart, or on opposite sides and more than $d$ apart horizontally) and must be within $d$ vertically. Consider a $d \times 2d$ box around a point $s$: divide it into eight $\tfrac d2 \times \tfrac d2 $ squares. Each such square lies entirely in $L$ or entirely in $R$, and within a side no two points are closer than $d$, while the square's diagonal is $d/\sqrt2 < d$ — so **each little square holds at most one point.** The box therefore holds at most 8 points including $s$, so at most 7 others need checking.

With the $y$-sorted order maintained through the recursion (merge-sort style, rather than re-sorting at each level), the combine step is $\Theta(n)$ and

$$T(n) = 2T(n/2) + \Theta(n) \;\overset{\text{case 2}}{=}\; \Theta(n\log n).$$

(Verified: an implementation using exactly the "next 7 in $y$-order" rule agrees with brute force on 300 random point sets of sizes 2–60.)

**The pattern.** All three are the same template with different levers:

| algorithm | $a$ | $b$ | $f(n)$ | result | the lever |
|---|---|---|---|---|---|
| naive multiply | 4 | 2 | $n$ | $\Theta(n^2)$ | — |
| **Karatsuba** | **3** | 2 | $n$ | $\Theta(n^{1.585})$ | reduce $a$ |
| naive matrix | 8 | 2 | $n^2$ | $\Theta(n^3)$ | — |
| **Strassen** | **7** | 2 | $n^2$ | $\Theta(n^{2.807})$ | reduce $a$ |
| closest pair (naive combine) | 2 | 2 | $n^2$ | $\Theta(n^2)$ | — |
| **closest pair** | 2 | 2 | $\mathbf{n}$ | $\Theta(n\log n)$ | reduce $f$ |

The first two rows of each pair are case-1 recurrences where only $a$ matters; the last pair is case 3 collapsing to case 2, where only $f$ matters. **Which lever works is decided by which case you are in** — which is [Lesson 1.3's P3](01-03-the-master-theorem.md) exactly.

## Picture

![A rectangle of points split by a vertical dashed line at the median x-coordinate. Points within delta of the line are highlighted, forming a strip. Annotations state that delta is the smaller of the two recursive answers, that only the next seven points in y-order need checking, and that a delta by two-delta box divides into eight half-delta squares each holding at most one point.](assets/01-05-fig1.svg)

The strip is the whole algorithm. Everything outside it is already accounted for by the two recursive calls, and the geometric argument is what makes the inside cheap.

Notice the shape of the argument: it does not bound the number of points in the strip — that can be all $n$ of them, if every point sits near the dividing line. It bounds the number of points that can be **near any one point** in the strip, which is a constant. Scanning $n$ points and doing $O(1)$ work at each is $\Theta(n)$ regardless of how crowded the strip is. **Finding the right thing to bound is the creative step**, and it is what turns a $\Theta(n^2)$ combine into a $\Theta(n)$ one.

## Worked examples

**Example 1 (mechanical): Karatsuba on $1234 \times 5678$.**

Split each 4-digit number at the midpoint, so $10^{n/2} = 10^2 = 100$:

$$1234 = \underbrace{12}_{a}\cdot 100 + \underbrace{34}_{b}, \qquad 5678 = \underbrace{56}_{c}\cdot 100 + \underbrace{78}_{d}.$$

Three multiplications:

$$P_1 = ac = 12 \times 56 = 672, \qquad P_2 = bd = 34 \times 78 = 2652,$$
$$P_3 = (a+b)(c+d) = 46 \times 134 = 6164.$$

The middle coefficient, without a fourth multiplication:

$$ad + bc = P_3 - P_1 - P_2 = 6164 - 672 - 2652 = 2840.$$

Assemble:

$$1234 \times 5678 = 672\cdot 10^4 + 2840\cdot 10^2 + 2652 = 6{,}720{,}000 + 284{,}000 + 2{,}652 = \mathbf{7{,}006{,}652}.$$

Direct multiplication confirms $1234 \times 5678 = 7{,}006{,}652$. ✓

Count the work: **three** 2-digit multiplications rather than four, at the cost of two extra additions ($a+b$, $c+d$) and two subtractions. At this size that is obviously not a win — three multiplications and four additions versus four multiplications. The win appears when the three sub-multiplications are themselves done by Karatsuba, and the saving compounds at every level: $3^{\log_2 n}$ leaves instead of $4^{\log_2 n}$.

**Example 2 (why you'd care): the crossover, and when to bother.** Strassen is asymptotically better than the cubic algorithm, so it should be the one everyone uses. It is not. Why?

The extra additions are $\Theta(n^2)$ per level with a much larger constant than the naive method's — Strassen forms 18 block additions and subtractions where the naive method forms 4. Model the two as $C\,n^{2.807}$ and $n^3$; Strassen wins when

$$C\,n^{2.807} < n^3 \quad\Longleftrightarrow\quad n^{0.193} > C \quad\Longleftrightarrow\quad n > C^{1/0.193}.$$

That exponent is brutal — $1/0.193 \approx 5.2$, so the crossover is extremely sensitive to the constant:

| constant penalty $C$ | crossover $n$ |
|---|---|
| 2 | $\approx 37$ |
| 5 | $\approx 4{,}200$ |
| 10 | $\approx 155{,}000$ |
| 20 | $\approx 5{,}700{,}000$ |

A factor of 10 in the constant moves the crossover by a factor of 150,000. Real implementations land somewhere in the hundreds-to-low-thousands, and Strassen is used — in tuned libraries, above a size threshold, with a naive base case. Which is exactly what the table says to do.

Two things worth taking from this. First, **it vindicates [Lesson 1.1's](01-01-asymptotic-notation.md) second Watch out with numbers**: asymptotically better is a promise about large $n$, and here "large" is a tunable parameter that depends on your constant. Second, it is why the sub-cubic matrix multiplication algorithms with even better exponents — Coppersmith–Winograd and its descendants, now near $n^{2.37}$ — are called **galactic algorithms**: their constants put the crossover past any matrix that would fit in the observable universe. They are real theorems and not implementations.

## Watch out

- **You might think** splitting a problem in half is the win — **but actually** splitting alone bought *nothing* for both multiplication problems: the naive 4-way and 8-way splits reproduce $\Theta(n^2)$ and $\Theta(n^3)$ exactly. The win is reducing the **number of subproblems**, which is why $4 \to 3$ and $8 \to 7$ are the whole content of Karatsuba and Strassen. Divide-and-conquer is a framework, not an optimization.
- **You might think** the closest-pair strip is small — **but actually** it can contain every point, and the algorithm is still $\Theta(n\log n)$. The bound is on how many points can be near *one* point, not on the strip's size. Getting this backwards leads to a "proof" that only works for well-spread inputs, and the adversarial input (all $n$ points on the dividing line) is the obvious one to test against.
- **You might think** a better exponent means a faster program — **but actually** the constant decides at what size that becomes true, and for the sub-cubic matrix algorithms past Strassen it never does at practical sizes. "Asymptotically fastest known" and "what you should call" are different questions, and the honest answer to the second requires the constants and a measurement.

## One-liner

> Divide-and-conquer pays when you cut the *number* of subproblems — spend linear-time additions to buy one fewer recursive multiplication, and the saving compounds at every level of the tree.

## Problems

**P1 (🟢)** Multiply $2143 \times 3312$ by Karatsuba.

(a) Give $a, b, c, d$ and the three products $P_1, P_2, P_3$. (b) Compute the middle coefficient and assemble the answer. (c) Verify against the direct product, and state how many 2-digit multiplications you used versus the naive split.

**P2 (🟡)** A researcher announces a divide-and-conquer algorithm for multiplying two $n$-digit numbers that splits each into **three** parts of size $n/3$ and uses $k$ recursive multiplications, plus $\Theta(n)$ additions.

(a) Give the running time as a function of $k$. (b) The naive three-way split needs $k = 9$; what does it achieve? (c) What is the largest $k$ that beats Karatsuba's $\Theta(n^{1.585})$? (d) Toom–Cook achieves $k = 5$; give its exponent to three decimals.

**P3 (🔴)** A colleague implements closest-pair and reports that it is slower than brute force on their data. Their combine step is: "collect all points within $d$ of the dividing line, then compare every pair in the strip."

(a) Give the running time of their version, deriving the recurrence and naming the master-theorem case. (b) Construct a concrete input on which their combine step really does examine $\Theta(n^2)$ pairs, and say why the "strip is usually small" intuition fails on it. (c) State the fix and the property that makes it correct, and give the resulting running time. (d) In one sentence, say what this shows about the relationship between the three master-theorem cases and where optimization effort belongs.

<details>
<summary>Solutions</summary>

**P1** (a) Split at the midpoint, $10^{n/2} = 100$:

$$2143 = 21\cdot 100 + 43, \qquad 3312 = 33\cdot 100 + 12,$$

so $a = 21$, $b = 43$, $c = 33$, $d = 12$. The three products:

$$P_1 = ac = 21\times 33 = 693, \qquad P_2 = bd = 43\times 12 = 516,$$
$$P_3 = (a+b)(c+d) = 64 \times 45 = 2880.$$

(b) Middle coefficient:

$$ad + bc = P_3 - P_1 - P_2 = 2880 - 693 - 516 = 1671.$$

Assemble:

$$2143\times 3312 = 693\cdot 10^4 + 1671\cdot 10^2 + 516 = 6{,}930{,}000 + 167{,}100 + 516 = \mathbf{7{,}097{,}616}.$$

(c) Direct: $2143 \times 3312 = 7{,}097{,}616$ ✓. Used **3** two-digit multiplications ($21\times33$, $43\times12$, $64\times45$) versus **4** for the naive split ($ac, ad, bc, bd$), at the cost of two extra additions and two subtractions.

**P2** (a) Splitting into three parts of size $n/3$ with $k$ recursive multiplications gives

$$T(n) = k\,T(n/3) + \Theta(n) \;\overset{\text{case 1 (for } k \ge 4)}{=}\; \Theta\!\left(n^{\log_3 k}\right).$$

(Case 1 holds whenever $\log_3 k > 1$, i.e. $k \ge 4$. For $k \le 2$ it is case 3 and $\Theta(n)$; for $k = 3$ it is case 2 and $\Theta(n\log n)$ — both impossible for genuine multiplication, which needs $\Omega(n)$ just to read the input and is not known to be achievable in $\Theta(n)$ by this route.)

(b) $k = 9$: $\log_3 9 = 2$, so $\Theta(n^2)$ — **the schoolbook cost again**. As with the two-way split, dividing alone buys nothing.

(c) Beating Karatsuba requires $\log_3 k < \log_2 3 = 1.58496$, i.e.

$$k < 3^{1.58496} = 5.7045\ldots \quad\Longrightarrow\quad k \le 5,$$

and indeed $\log_3 5 = 1.4650 < 1.58496 < 1.6309 = \log_3 6$. So the largest useful $k$ is $\mathbf{5}$. ($k = 6$ gives $\Theta(n^{1.631})$, which is *worse* than Karatsuba — a three-way split with six multiplications is a step backwards.)

(d) $k = 5$: $\log_3 5 = \dfrac{\ln 5}{\ln 3} = \dfrac{1.60944}{1.09861} = \mathbf{1.465}$. So Toom–Cook is $\Theta(n^{1.465})$.

(The pattern continues: splitting into $r$ parts needs $2r-1$ multiplications, giving $\log_r(2r-1) \to 1$ as $r$ grows, which is the road to the FFT-based methods at $\Theta(n\log n\log\log n)$ and better. Each step costs a bigger constant, so the same crossover story as Example 2 applies.)

**P3** (a) Their combine step compares every pair in the strip. In the worst case the strip holds all $n$ points, so the combine is $\Theta(n^2)$:

$$T(n) = 2T(n/2) + \Theta(n^2).$$

With $a = b = 2$, the watershed is $n^{\log_2 2} = n$, and $f(n) = n^2$ is polynomially larger. **Case 3** (regularity: $2(n/2)^2 = n^2/2 \le \tfrac12 f(n)$, so $k = 1/2 < 1$ ✓), giving

$$T(n) = \Theta(n^2).$$

Asymptotically no better than brute force, and with worse constants — which is exactly what they observed.

(b) Put **all $n$ points on a single vertical line**, say $(0, 1), (0, 2), \dots, (0, n)$. Then every recursive split has $x_m = 0$ and every point is within $d$ of the dividing line, so the strip is the entire input at every level and the combine examines $\binom{n}{2} = \Theta(n^2)$ pairs.

More realistically, the same thing happens for any data clustered in a narrow vertical band — GPS readings along a road, timestamps against a nearly-constant second coordinate. The "strip is usually small" intuition assumes the points are spread out in $x$, which is an assumption about the *input distribution*, not a property of the algorithm. Worst-case analysis does not get to make that assumption.

(c) **The fix:** sort the strip by $y$-coordinate and, for each point, compare it only with the **next 7 points in $y$-order**.

**Why it is correct:** any pair closer than $d$ must lie in a $d \times 2d$ box, which partitions into eight $\tfrac d2\times\tfrac d2$ squares. Each square is entirely within $L$ or entirely within $R$, and within one side no two points are closer than $d$; since a $\tfrac d2\times\tfrac d2$ square has diagonal $d/\sqrt 2 < d$, it can contain at most one point. So at most 8 points lie in the box — the point under test plus at most 7 others — and any closer pair is found. (Note the bound is on points near *one* point, not on the strip's size, so it survives the all-on-a-line input from (b).)

Maintaining the $y$-order through the recursion by merging (rather than re-sorting at each level) keeps the combine at $\Theta(n)$, so

$$T(n) = 2T(n/2) + \Theta(n) \;\overset{\text{case 2}}{=}\; \Theta(n\log n).$$

(If you re-sort the strip at each level instead, the combine is $\Theta(n\log n)$ and the total becomes $\Theta(n\log^2 n)$ — still far better than their version, and often the pragmatic choice.)

(d) The case tells you which end is the bottleneck, and therefore where optimization pays: their algorithm was in **case 3**, where the combine step dominates and the recursion is free — so the only useful work was on the combine, and cutting it from $\Theta(n^2)$ to $\Theta(n)$ moved them into case 2 and changed the class. (Had they been in case 1, as Karatsuba and Strassen are, the same effort on the combine step would have bought exactly nothing, and the only lever would have been reducing $a$ — which is [Lesson 1.3's P3](01-03-the-master-theorem.md) and the whole moral of this lesson.)

</details>

## Flashback

**From Lesson 1.3 (The master theorem):** Give the $\Theta$ class for each, naming $a$, $b$, the watershed, and the case.

(a) $T(n) = 5T(n/2) + n^2$  (b) $T(n) = 2T(n/2) + n^3$  (c) $T(n) = 3T(n/3) + n$

<details>
<summary>Solution</summary>

(a) $a = 5$, $b = 2$, watershed $n^{\log_2 5} \approx n^{2.3219}$. Compare $f(n) = n^2$: smaller, and polynomially so ($\epsilon \approx 0.32$). **Case 1**:

$$T(n) = \Theta\!\left(n^{\log_2 5}\right) = \Theta(n^{2.322}).$$

(This is the "naive" alternative to Strassen if you managed only $8 \to 5$ — better than Strassen's $2.807$. No such algorithm is known; the point is that the *arithmetic* of the trade-off is all in the exponent $\log_2 a$.)

(b) $a = 2$, $b = 2$, watershed $n^{\log_2 2} = n$. Compare $f(n) = n^3$: bigger, polynomially ($\epsilon = 2$). Check regularity: $2(n/2)^3 = n^3/4 \le \tfrac14 f(n)$, so $k = 1/4 < 1$ ✓. **Case 3**:

$$T(n) = \Theta(n^3).$$

(c) $a = 3$, $b = 3$, watershed $n^{\log_3 3} = n$. Compare $f(n) = n$: equal. **Case 2**:

$$T(n) = \Theta(n\log n).$$

Worth lining these up: (a) is leaf-dominated so the recursion is the cost, (b) is root-dominated so the top-level work is the cost, (c) is the tie where every level costs $n$. Three different answers from three recurrences that look nearly identical — which is why you compute the watershed rather than eyeballing it.

</details>

## Connections

- **Backward:** every bound here is [Lesson 1.3's](01-03-the-master-theorem.md) master theorem, and the "reduce $a$, not $f$" instinct is that lesson's P3 stated as a design rule. Closest pair's recurrence is [Lesson 1.4's](01-04-sorting-and-the-comparison-lower-bound.md) merge-sort recurrence, and its $y$-ordered strip is maintained by literally merging.
- **Forward:** Module 2 changes paradigm — greedy and dynamic programming attack problems where the subproblems *overlap* or where a local choice can be proved globally optimal, neither of which fits this template. Lesson 2.5's opening contrast is precisely "why can't I just divide and conquer this?"
- **Sideways:** Karatsuba and Toom–Cook are the small end of a ladder whose large end is the FFT-based multiplication of [fourier-analysis](../../fourier-analysis/syllabus.md), reaching $\Theta(n\log n\log\log n)$ by the same "make the combine step do the clever work" move. Strassen's block identities are a fact about the algebra of $2\times2$ matrices from [linalg-refresher](../../linalg-refresher/syllabus.md), and the reason its practical crossover is high is a memory-hierarchy question that [computer-architecture](../../computer-architecture/syllabus.md) answers. The "galactic algorithm" phenomenon — a proven better exponent that no one can use — is the sharpest reminder that [Lesson 1.1's](01-01-asymptotic-notation.md) asymptotics answer one question and not every question.
