# Discrete Math for Beginners — Syllabus

> Foundations · Tier F · ~8 lessons · Prereqs: none · Roadmap id: `discrete-math-intro`

## Goal

The gentle on-ramp to college math and computer science: the objects and moves that everything digital is built from — logic, sets, functions, counting, and a first honest look at proof. We stay concrete and example-driven; every idea arrives through a small, checkable case before any symbol shows up. This is the beginner sibling of `proofs-primer` (which turns these first proofs into real rigor) and the front door to a future **Computer Science** track — the counting, modular arithmetic, and graphs here are exactly what algorithms, cryptography, and data structures run on.

## Dangerous Checklist

When you finish, you can:

- [ ] Build a truth table for any combination of and/or/not/implies, and read off when a statement is true
- [ ] Tell "if P then Q" apart from its converse, and negate a statement correctly (including "for all" / "there exists")
- [ ] Compute unions, intersections, complements, and differences, and picture them with a Venn diagram
- [ ] List the power set and Cartesian product of small sets, and count how big each must be
- [ ] Decide whether a rule is a function, and whether it is injective (one-to-one) or surjective (onto)
- [ ] Check that a relation is an equivalence relation and describe its classes
- [ ] Write a short direct proof, and run a mathematical induction with a correct base case and step
- [ ] Count with the multiplication and addition rules, permutations, and combinations, and know which to use
- [ ] Apply the pigeonhole principle and light inclusion–exclusion to answer "must there be…" and "how many at least one…" questions
- [ ] Use parity, divisibility, and clock (modular) arithmetic to settle whether something is possible
- [ ] Read a small graph: identify vertices, edges, and degrees, and apply the handshake lemma

## Modules

### Module 1: Logic and sets

The two languages underneath everything else — statements you can judge true or false, and collections you can combine and count.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Statements, connectives, and truth tables | Combine claims with and/or/not, and pin down exactly what "if P then Q" asserts | proposition, $\land\ \lor\ \lnot$, truth table, implication, converse, negation |
| 1.2 | Sets, operations, and quantifiers | Combine and picture collections, build power sets and products, and say "for all" / "there exists" | set membership, $\cup\ \cap\ \setminus$, complement, Venn diagram, subset, power set, Cartesian product, $\forall\ \exists$ |

**Boss problem 1:** Let the universe be $U=\{1,2,\dots,10\}$, with $E$ the even numbers in $U$ and $M$ the multiples of $3$ in $U$. (a) List $E$, $M$, $E\cap M$, $E\cup M$, $E\setminus M$, and say how many elements the power set $\mathcal{P}(E\cap M)$ has. (b) Write "every number in $U$ is even or a multiple of $3$" using a quantifier; decide if it's true, and if not, write its negation and give a counterexample. (c) Verify De Morgan's law $(E\cup M)^{c}=E^{c}\cap M^{c}$ by computing both sides on $U$.

### Module 2: Relations, functions, and a first proof

From ordered pairs to functions, then your first two real proofs — direct and by induction.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Ordered pairs, relations, and functions | See a relation as a set of pairs, spot when it's a function, and test injective/surjective and equivalence | ordered pair, relation, function, domain/codomain, injective, surjective, equivalence relation (reflexive/symmetric/transitive), classes |
| 2.2 | A first proof: direct proof and induction | Prove a simple claim straight from definitions, and prove a formula for all $n$ by induction | definition-unpacking, direct proof, mathematical induction, base case, inductive step |

**Boss problem 2:** On the integers $\mathbb{Z}$, define $a\sim b$ to mean "$a-b$ is even." (a) Prove $\sim$ is an equivalence relation and describe its classes. (b) For $g:\mathbb{Z}\to\mathbb{Z}$ with $g(n)=2n$, decide with a one-line argument whether $g$ is injective and whether it is surjective. (c) Prove by induction that $1+2+\cdots+n=\dfrac{n(n+1)}{2}$ for every integer $n\ge 1$, stating the base case and inductive step explicitly.

### Module 3: Counting and combinatorics

The art of counting without listing — the workhorse of probability, algorithms, and everyday "how many ways?"

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Counting rules and permutations | Choose the multiplication rule vs. the addition rule, and count ordered arrangements | multiplication rule, addition rule, factorial, permutation $P(n,k)$ |
| 3.2 | Combinations, binomial coefficients, and clever counts | Count unordered selections, read $\binom{n}{k}$, and settle "must" and "at least one" questions | combination $\binom{n}{k}$, binomial coefficient, Pascal's identity, pigeonhole principle, inclusion–exclusion (two sets) |

**Boss problem 3:** A class has $12$ students. (a) How many ways can they pick a president, vice-president, and secretary (all different people)? (b) How many ways can they pick a $3$-person committee with no titles? (c) How many of those committees include a specific student, Ana — and check that your answer plus the committees *without* Ana matches part (b) via Pascal's identity $\binom{12}{3}=\binom{11}{2}+\binom{11}{3}$. (d) Each student names one of $4$ favorite ice-cream flavors; use the pigeonhole principle to show some flavor is named by at least $3$ students. (e) If $7$ like math, $6$ like physics, and $3$ like both, how many like at least one — and how many like neither?

### Module 4: Number sense and a taste of graphs

The number facts that power cryptography and hashing, and a first glimpse of the structure — graphs — that computer science is drawn on.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Divisibility, parity, and modular arithmetic | Use even/odd and "remainder after dividing" to prove things impossible or compute on a clock | divisibility, parity, quotient–remainder, congruence $a\equiv b\ (\mathrm{mod}\ n)$, modular addition/multiplication |
| 4.2 | A taste of graphs | Read a graph as dots and lines, count degrees, and use the handshake lemma | vertex, edge, degree, path/cycle, handshake lemma, applications in CS (networks, maps) |

**Boss problem 4:** Six people stand in a circle, positions numbered $0$ through $5$. (a) Everyone shakes hands with their two immediate neighbors; draw the graph, give every vertex's degree, and check the handshake lemma $\sum_v \deg(v)=2\,|E|$. (b) Prove that in *any* handshake graph the number of people who shook an odd number of hands is even (use parity of the degree sum). (c) Explain why it is impossible for exactly *five* people at a party to have each shaken exactly three hands (use divisibility of the degree sum). (d) If instead each person $p$ shakes hands with persons $(p+2)\bmod 6$ and $(p-2)\bmod 6$, describe the resulting graph.

## Sources of truth

- Oscar Levin, *Discrete Mathematics: An Open Introduction* (free online) — primary spine; beginner-paced with exercises.
- Susanna S. Epp, *Discrete Mathematics with Applications* — gold standard for the logic-and-proof chapters.
- Lehman, Leighton & Meyer, *Mathematics for Computer Science* (MIT 6.042 notes, free) — the CS-flavored companion this course points toward.
