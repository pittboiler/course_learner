# Discrete Mathematics — Syllabus

> Mathematics · Tier 0 · ~16 lessons · Prereqs: none · Roadmap id: `discrete-mathematics`

## Goal

Learn the mathematics of things you can count and connect: logic, sets, counting, number theory, recurrences, and graphs. By the end you can read a formal definition, negate it, prove a claim with the right technique, count a structured set without listing it, reason with congruences, and turn a graph problem into a theorem you can apply. This is the Tier 0 backbone of the CS track and the standard on-ramp to `[graph-theory](../graph-theory/syllabus.md)`, `[combinatorics](../combinatorics/syllabus.md)`, and `[abstract-algebra](../abstract-algebra/syllabus.md)`. Deliberately skipped: the limit/continuity machinery of real analysis (see `[real-analysis](../real-analysis/syllabus.md)`), deep graph theory and full generating-function technique (their own courses), and computability. If the pace here feels brisk, the gentler sibling is `[discrete-math-intro](../discrete-math-intro/syllabus.md)`.

## Dangerous Checklist

When you finish, you can:

- [ ] Build a truth table, prove two propositions logically equivalent, and simplify a Boolean expression
- [ ] Negate any quantified statement — including nested `∀∃` definitions — and say what would refute it
- [ ] Pick the right proof weapon (direct, contrapositive, contradiction, cases) and write a clean argument
- [ ] Run an ordinary induction and a strong induction with a correctly stated base case and hypothesis
- [ ] Prove set identities by the element method and manipulate unions, intersections, and complements
- [ ] Prove a relation is an equivalence relation and describe its classes; recognize a partial order
- [ ] Prove a function injective/surjective/bijective and compare set sizes with bijections
- [ ] Count a structured collection with the sum/product rules, permutations, and combinations — without listing it
- [ ] Expand $(x+y)^n$ and prove combinatorial identities both algebraically and by counting
- [ ] Apply inclusion–exclusion and the pigeonhole principle to counting and existence problems
- [ ] Compute gcds with the Euclidean algorithm, find Bézout coefficients, and solve linear congruences
- [ ] Solve a linear recurrence in closed form and read a small graph/tree for paths, circuits, and connectivity

## Modules

### Module 1: Logic & Proof

The language every later definition is written in, and the four moves that prove almost everything.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Propositional logic & Boolean algebra | Combine claims with connectives, test equivalence, and simplify Boolean expressions | proposition, $\land\ \lor\ \lnot\ \to\ \leftrightarrow$, truth tables, tautology, logical equivalence, De Morgan, Boolean laws |
| 1.2 | Predicate logic: quantifiers & negation | Read and negate statements with $\forall$ and $\exists$, getting nested-quantifier order right | predicate, $\forall,\ \exists$, quantifier order, negating quantifiers, counterexamples |
| 1.3 | Proof techniques: direct, contrapositive, contradiction, cases | Choose and execute the right proof pattern for a given claim | direct proof, contrapositive, proof by contradiction, exhaustive cases, WLOG, $\sqrt 2$ irrational |
| 1.4 | Mathematical induction & strong induction | State a correct base case and inductive step, and know when strong induction is needed | induction, inductive hypothesis, strong induction, well-ordering |

**Boss problem 1:** (a) Show $\lnot(P\to Q)\equiv P\land\lnot Q$ with a truth table. (b) Write the negation of "$\forall n\in\mathbb N,\ \exists m\in\mathbb N,\ m>n$" and state whether the original or its negation is true. (c) Prove by strong induction that every integer $n\ge 2$ is a product of primes.

### Module 2: Sets, Relations & Functions

The three object-types the rest of the course — and most of higher math — is built from.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Sets & set operations | Prove subset and equality claims by the element method and compute with set operations | set, subset, union/intersection/complement, power set, Cartesian product, element method |
| 2.2 | Relations: equivalence & order | Recognize and prove the properties of a relation, and partition a set by an equivalence relation | relation, reflexive/symmetric/transitive, equivalence relation, equivalence classes, partial order |
| 2.3 | Functions: injections, surjections, bijections & cardinality | Prove each function property from its definition and compare set sizes with bijections | function, injection, surjection, bijection, inverse, image/preimage, cardinality, countability (taste) |

**Boss problem 2:** Define $a\sim b \iff 5\mid(a-b)$ on $\mathbb Z$. Prove $\sim$ is an equivalence relation, describe its equivalence classes, and show the map $[a]\mapsto (a\bmod 5)$ is a well-defined bijection onto $\{0,1,2,3,4\}$.

### Module 3: Counting & Combinatorics

Count a structured set by understanding it, not by listing it.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The rules of counting: sum, product, permutations & combinations | Break a counting problem into independent choices and count arrangements vs. selections | sum rule, product rule, permutations $P(n,k)$, combinations $\binom nk$, ordered vs. unordered |
| 3.2 | The binomial theorem & combinatorial identities | Expand $(x+y)^n$ and prove identities both algebraically and by a counting argument | binomial theorem, Pascal's triangle, Pascal's rule, $\sum_k\binom nk=2^n$, double counting |
| 3.3 | Inclusion–exclusion & the pigeonhole principle | Correct for overcounted overlaps and prove existence from a counting bound | inclusion–exclusion, complementary counting, pigeonhole principle, generalized pigeonhole |

**Boss problem 3:** (a) By inclusion–exclusion, count the integers in $\{1,\dots,100\}$ divisible by $2$, $3$, or $5$. (b) Prove $\sum_{k=0}^n\binom nk = 2^n$ by counting subsets of an $n$-element set. (c) Use the pigeonhole principle to show that among any $6$ integers, two have a difference divisible by $5$.

### Module 4: Number Theory & Modular Arithmetic

The integers, their prime skeleton, and arithmetic that wraps around.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Divisibility & primes | Reason about divisibility and use the unique factorization of the integers | divisibility, primes, division algorithm, fundamental theorem of arithmetic, infinitude of primes |
| 4.2 | Euclid's algorithm, gcd & Bézout | Compute gcds fast and write them as integer combinations of the inputs | gcd, lcm, Euclidean algorithm, extended Euclidean algorithm, Bézout's identity, coprimality |
| 4.3 | Modular arithmetic & congruences | Compute in $\mathbb Z_n$, solve linear congruences, and find modular inverses | congruence $\bmod n$, modular arithmetic, modular inverse, linear congruences, Fermat's little theorem (taste) |

**Boss problem 4:** (a) Compute $\gcd(1071,462)$ with the Euclidean algorithm and find integers $x,y$ with $1071x+462y=\gcd$. (b) Solve $7x\equiv 1\pmod{26}$. (c) Compute $3^{100}\bmod 7$ using Fermat's little theorem.

### Module 5: Recurrences, Graphs & Trees

Sequences defined by their own past, and structures made of dots and lines.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Recurrence relations | Model a process with a recurrence and solve linear ones in closed form | recurrence, linear homogeneous recurrence, characteristic equation, repeated roots, generating-function taste |
| 5.2 | Graphs: paths, connectivity, Euler & Hamilton | Model with a graph and decide reachability and traversal questions by theorem | graph, degree, handshake lemma, path/cycle, connectivity, Euler circuit, Hamiltonian cycle |
| 5.3 | Trees & graph coloring | Recognize trees and their edge count, and color a graph with few colors | tree, leaf, spanning tree, $n-1$ edges, graph coloring, chromatic number, bipartite graphs |

**Boss problem 5:** (a) Solve $a_n=a_{n-1}+2a_{n-2}$ with $a_0=2,\ a_1=1$, giving a closed form. (b) Prove a tree on $n$ vertices has exactly $n-1$ edges. (c) Determine whether $K_5$ has an Euler circuit and whether it has a Hamiltonian cycle, justifying each with the relevant theorem.

## Sources of truth

- Rosen, *Discrete Mathematics and Its Applications* (topic coverage, notation, and problem register)
- Lehman, Leighton & Meyer, *Mathematics for Computer Science* / MIT 6.042 (proof style and rigor level; freely available)
- Graham, Knuth & Patashnik, *Concrete Mathematics* (the recurrence and identity taste in Modules 3 and 5)

---

_Note (2026-08-04): expanded to 16 lessons across 5 modules rather than ~12 — full discrete math genuinely spans six topic areas, and each lesson is held to the ~10-min-read budget rather than crammed. Header count left at the mandated "~12"._
