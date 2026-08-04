# Enumerative & Algebraic Combinatorics — Syllabus

> Mathematics · Tier 1 · ~15 lessons · Prereqs: [proofs-primer](../proofs-primer/syllabus.md) · Roadmap id: `combinatorics`

## Goal

Learn to count — not by cleverness each time, but with a toolkit: the four counting rules and the twelvefold way, binomial machinery, inclusion–exclusion, generating functions as a bookkeeping device, and the discipline of the bijective proof. By the end you can turn "how many?" into a closed form or a generating function, prove combinatorial identities three different ways, and read the first chapter of algebraic combinatorics (posets, Möbius inversion, a taste of symmetric functions). Deliberately skipped: deep graph theory (its own course, `graph-theory`), design theory beyond a mention, and analytic-combinatorics rigor — we get asymptotics honestly but stop short of complex-analytic saddle points.

## Dangerous Checklist

When you finish, you can:

- [ ] Count arrangements and selections with or without order and repetition, and place any counting problem in the twelvefold way
- [ ] Prove a binomial identity three ways — algebraically, by a combinatorial (double-counting) argument, and via generating functions
- [ ] Apply inclusion–exclusion to count surjections, derangements, and objects that must avoid forbidden properties
- [ ] Read a permutation's cycle structure and count permutations by their number of cycles (Stirling first kind)
- [ ] Count set partitions with Stirling numbers of the second kind and Bell numbers, and integer partitions with Ferrers diagrams
- [ ] Prove a partition identity by conjugating a Ferrers diagram or by a generating-function argument
- [ ] Encode a counting sequence as an ordinary or exponential generating function and extract its coefficients
- [ ] Solve a linear or nonlinear recurrence (Fibonacci, Catalan) by generating functions
- [ ] Construct a bijection to prove two finite sets equinumerous, and recognize the family of Catalan objects
- [ ] Deploy the pigeonhole principle and prove small Ramsey bounds, including $R(3,3)=6$
- [ ] Work with a poset: find its chains and antichains and apply Dilworth's theorem
- [ ] Run Möbius inversion on a poset and recognize inclusion–exclusion and number-theoretic Möbius inversion as special cases

## Modules

### Module 1: Counting foundations & inclusion–exclusion

The grammar of counting: four rules that combine into everything, the binomial and multinomial coefficients, and the one principle that handles "avoid all of these at once."

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The four rules & the twelvefold way | Decompose any counting problem into sum/product/bijection/division, and classify balls-in-boxes by order and repetition | sum & product rules, bijection principle, division principle, $n^k$ vs. $n!/(n-k)!$ vs. $\binom{n}{k}$, the twelvefold way |
| 1.2 | Binomial & multinomial coefficients | Prove core identities by algebra, by double counting, and by Pascal's recurrence; extend to several bins | $\binom{n}{k}$, Pascal's rule, Vandermonde, hockey-stick, binomial theorem, $\binom{n}{k_1,\dots,k_m}$, compositions & stars-and-bars |
| 1.3 | Inclusion–exclusion | Count objects satisfying "none of these properties" and apply it to surjections and derangements | inclusion–exclusion formula, complementary counting, derangements $!n$, counting surjections, sieve viewpoint |

**Boss problem 1:** Using inclusion–exclusion, derive a closed formula for the number of surjections from an $n$-set onto a $k$-set, and evaluate it at $n=6,\,k=3$ (you should get $540$). Then compute the number of derangements of $5$ elements ($!5=44$). Explain in one sentence why both are "forbidden-position" counts — a surjection forbids empty target-values, a derangement forbids fixed points.

### Module 2: Permutations & partitions

Two ways to break a set apart — rearranging its elements, and grouping them — each with its own family of numbers.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Permutations & cycle structure | Read a permutation as a product of disjoint cycles and count permutations by their number of cycles | one-line vs. cycle notation, disjoint cycle decomposition, conjugacy & cycle type, Stirling numbers of the first kind $c(n,k)$ |
| 2.2 | Set partitions: Stirling & Bell numbers | Count the ways to partition a set into blocks, with and without a fixed block count | set partition, Stirling numbers of the second kind $S(n,k)$, Bell number $B_n$, recurrence $S(n,k)=k\,S(n-1,k)+S(n-1,k-1)$ |
| 2.3 | Integer partitions & Ferrers diagrams | Count partitions of an integer and prove identities by transforming their diagrams | integer partition, Ferrers/Young diagram, conjugate partition, partitions into distinct vs. odd parts, generating-function preview |

**Boss problem 2:** Prove Euler's theorem that the number of partitions of $n$ into **distinct** parts equals the number into **odd** parts. Give the generating-function proof — show $\prod_{k\ge 1}(1+x^k)=\prod_{k\ge 1}\frac{1}{1-x^{2k-1}}$ by telescoping $1+x^k=\frac{1-x^{2k}}{1-x^k}$ — and verify both counts equal $4$ at $n=6$.

### Module 3: Generating functions

The central trick of the course: hang a counting sequence on the coefficients of a power series, and let algebra do the counting.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Ordinary generating functions | Turn a sequence into a series, and turn products/sums of series back into combinatorial operations | OGF $\sum a_n x^n$, formal power series, geometric & binomial series, convolution = choosing from two piles, extracting coefficients |
| 3.2 | Solving recurrences with generating functions | Convert a recurrence into an algebraic equation for its OGF and read the closed form off | linear recurrences, partial fractions, Fibonacci closed form, quadratic OGF equation, Catalan numbers $C_n=\frac{1}{n+1}\binom{2n}{n}$ |
| 3.3 | Exponential generating functions | Count *labeled* structures where order-of-labels matters, and multiply EGFs to combine them | EGF $\sum a_n \frac{x^n}{n!}$, product rule for labeled structures, $e^x$ and derangement EGF, connection to Bell & Stirling numbers |

**Boss problem 3:** Let $C(x)=\sum_{n\ge 0}C_n x^n$ be the OGF of the Catalan numbers, defined by $C_0=1$ and $C_{n+1}=\sum_{i=0}^{n}C_i\,C_{n-i}$. Show the recurrence gives $C(x)=1+x\,C(x)^2$, solve the quadratic (choosing the root that stays finite at $x=0$), and expand it with the generalized binomial theorem to prove $C_n=\frac{1}{n+1}\binom{2n}{n}$.

### Module 4: Bijective proof, pigeonhole & Ramsey

From formulas to arguments: prove two counts equal by exhibiting a matching, then meet the two theorems that force structure out of size alone.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The art of the bijective proof | Prove an identity by constructing an explicit, invertible correspondence, and recognize the Catalan zoo | bijection principle revisited (from [proofs-primer](../proofs-primer/syllabus.md)), involutions, Dyck paths, balanced parentheses, triangulations, sign-reversing involutions |
| 4.2 | Pigeonhole principle | Force a coincidence from a counting bound, in both its basic and averaging forms | pigeonhole (basic & generalized), averaging argument, Erdős–Szekeres monotone-subsequence theorem |
| 4.3 | Ramsey theory | Show that complete disorder is impossible: large enough structures always contain order | Ramsey numbers $R(s,t)$, two-coloring $K_n$, proof that $R(3,3)=6$, existence via pigeonhole, Ramsey's theorem statement |

**Boss problem 4:** In two parts. (a) Give a bijective proof that a set with $n$ elements has as many even-sized subsets as odd-sized subsets (for $n\ge 1$) — construct a sign-reversing involution, e.g. toggle whether element $1$ is present. (b) Prove $R(3,3)=6$: show every red/blue coloring of the edges of $K_6$ contains a monochromatic triangle (fix a vertex; three of its five edges share a color), and exhibit a 2-coloring of $K_5$ with no monochromatic triangle.

### Module 5: A taste of algebraic combinatorics

Zoom out: counting problems live on ordered structures (posets), and one inversion formula on those structures subsumes both inclusion–exclusion and number-theoretic Möbius inversion.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Posets, lattices, chains & antichains | Model "one object refines another" as a partial order and extract its chains and antichains | partial order, Hasse diagram, Boolean & divisor lattices, chain, antichain, Dilworth's theorem, meet & join |
| 5.2 | Möbius inversion on a poset | Invert a summation over a poset, unifying inclusion–exclusion with the Möbius function of `number-theory` | incidence algebra, Möbius function $\mu$ of a poset, Möbius inversion formula, Boolean-lattice case = inclusion–exclusion, divisor-lattice case = classical $\mu$ |
| 5.3 | A taste of symmetric functions | Meet the ring where many combinatorial identities become one algebraic fact | symmetric polynomials, elementary vs. complete vs. power-sum bases, Young tableaux, Schur functions (statement-level), why they matter (representation theory, connects to `representation-theory`) |

**Boss problem 5:** Show that inclusion–exclusion is Möbius inversion on the Boolean lattice $B_n$: compute $\mu(\varnothing, S)=(-1)^{|S|}$ for the subset lattice and read the inclusion–exclusion formula straight out of the Möbius inversion formula. Then compute the Möbius function on the divisor poset of $12$ and confirm it agrees with the number-theoretic $\mu(d)$ (nonzero only on divisors that are products of distinct primes), naming the bridge to `number-theory` explicitly.

## Sources of truth

- Stanley, *Enumerative Combinatorics* Vol. 1 — for posets, the twelvefold way, and generating-function conventions.
- Wilf, *generatingfunctionology* — for the OGF/EGF machinery and coefficient-extraction style.
- Aigner, *A Course in Enumeration* — general notation and the bijective-proof aesthetic.
- Sagan, *The Symmetric Functions* / Stanley Vol. 2 — the reference for the Module 5 symmetric-functions taste (statement-level only here).

<!-- 2026-08-04: Landed at 15 lessons (target ~14) — Module 5 kept a dedicated symmetric-functions lesson so the algebraic-combinatorics "taste" in the scope isn't crammed into the Möbius lesson. Within the 25% band. -->
