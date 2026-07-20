# How to Read & Write Proofs — Syllabus

> Tier 0 · 8 lessons · Prereqs: none · Roadmap id: `proofs-primer`

## Goal

Turn "I can follow a proof if it's spelled out" into "I can read a dense proof and write a correct one myself." You'll learn the language mathematicians actually argue in (logic and quantifiers), the handful of proof patterns that cover almost everything, and the three object-types — sets, functions, the natural numbers — that analysis and topology are built on. This is the on-ramp to `real-analysis` and `topology`: by the end you can read an ε–δ statement, negate it, and prove or disprove a claim about it. Deliberately skipped: formal logic beyond what a working proof needs (no natural-deduction systems, no model theory), and axiomatic set theory (we use sets naively, the way analysis does).

## Dangerous Checklist

When you finish, you can:

- [ ] Translate an English mathematical claim into symbols (and back), getting the quantifier order right
- [ ] Negate any statement, including nested-quantifier ones like the definition of a limit
- [ ] Tell a statement apart from its converse, contrapositive, and inverse — and know which is equivalent
- [ ] Write a clean direct proof by unpacking definitions and chaining implications
- [ ] Choose the right weapon — direct, contrapositive, or contradiction — for a given claim
- [ ] Split a proof into exhaustive cases and use "without loss of generality" honestly
- [ ] Prove two sets equal by the element method, and manipulate unions/intersections/complements
- [ ] Prove a function injective, surjective, or bijective, and construct its inverse
- [ ] Run an induction (and a strong induction) with a correctly stated base case and inductive step
- [ ] Read a proof critically: find the load-bearing step, and spot a gap or a circular argument

## Modules

### Module 1: The language of mathematics

Before you can prove a statement you have to know exactly what it claims — and what would refute it.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Statements, connectives, and implication | Read and combine claims with and/or/not, and pin down what "if P then Q" really asserts | proposition, $\land\ \lor\ \lnot$, truth tables, implication, converse vs. contrapositive vs. inverse |
| 1.2 | Quantifiers, order, and negation | Handle "for all" and "there exists", including the order that flips meaning, and negate any statement | $\forall,\ \exists$, quantifier order, negating quantifiers, reading an ε–δ / ε–N statement |

**Boss problem 1:** Take the textbook definition "the sequence $a_n$ converges to $L$" ($\forall \varepsilon>0\ \exists N\ \forall n>N:\ |a_n-L|<\varepsilon$). Translate it to plain English, write its negation both symbolically and in English, and use the negation to say precisely what "does **not** converge to $L$" means.

### Module 2: Core proof techniques

The four patterns that, combined, prove almost everything you'll meet.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Direct proof: unpacking definitions | Prove "P ⟹ Q" by expanding definitions and chaining forward to the conclusion | direct proof, using definitions (even/odd, divisibility), proof-writing hygiene |
| 2.2 | Contrapositive and contradiction | Recognize when to flip a statement or assume the opposite, and do it cleanly | proof by contrapositive, proof by contradiction, √2 irrational, infinitude of primes |
| 2.3 | Proof by cases and "without loss of generality" | Break a claim into exhaustive cases and use symmetry to avoid redundant work | exhaustive cases, WLOG, triangle inequality by cases |

**Boss problem 2:** Prove that for every integer $n$, $n^2$ is even **iff** $n$ is even — picking the right technique for each direction — then use it to prove $\sqrt{2}$ is irrational by contradiction. Explain why the contrapositive was the natural choice for one direction.

### Module 3: The objects you prove things about

Sets, functions, and the natural numbers — the raw material of every later course.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Sets and the element method | Prove subset and set-equality claims by chasing an arbitrary element | subset, set equality, union/intersection/complement, De Morgan, element method |
| 3.2 | Functions: injective, surjective, bijective | Prove each property from its definition and build an inverse for a bijection | injection, surjection, bijection, image/preimage, inverse function |
| 3.3 | Induction and strong induction | State a base case and inductive step correctly, and know when strong induction is needed | mathematical induction, inductive hypothesis, strong induction, well-ordering |

**Boss problem 3:** Prove that a function $f:A\to B$ has a two-sided inverse **iff** it is a bijection; then prove by induction that a set with $n$ elements has exactly $2^n$ subsets. Name where the bijection idea and the induction meet (a subset ↔ its indicator function).

## Sources of truth

- Velleman, *How to Prove It* (technique register and problem style)
- Hammack, *Book of Proof* (definitions, set/function conventions — freely available)
- Tao, *Analysis I* (the rigor level Module 1's ε–δ reading is aiming you toward)
