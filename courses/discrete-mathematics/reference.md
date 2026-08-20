# Discrete Mathematics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Discrete math is the mathematics of things you can count and connect. Five
threads run through it: a **language** (logic and quantifiers) that every later
definition is written in, four **proof moves** plus induction, three
**object-types** (sets, relations, functions), machinery for **counting without
listing**, and two applications of all of it — the **integers** and **graphs**.
Mid-problem, this card is where the truth tables, the Boolean and set laws, the
counting formulas, Pascal's triangle, the gcd/congruence rules, the
recurrence recipe, and the Euler/tree/coloring theorems all live in one place.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\lnot,\ \land,\ \lor$ | not / and / or — $\lor$ is **inclusive** (both counts) | [1.1](lessons/01-01-propositional-logic-boolean-algebra.md) |
| $P \to Q$, $P \Rightarrow Q$ | "if $P$ then $Q$" — a promise, broken only when $P$ holds and $Q$ fails | [1.1](lessons/01-01-propositional-logic-boolean-algebra.md) |
| $P \leftrightarrow Q$ | "$P$ if and only if $Q$" — same truth value | [1.1](lessons/01-01-propositional-logic-boolean-algebra.md) |
| $A \equiv B$ | logically equivalent — identical truth-table columns | [1.1](lessons/01-01-propositional-logic-boolean-algebra.md) |
| $\mathbf T,\ \mathbf F$ | a proposition that's always true / always false | [1.1](lessons/01-01-propositional-logic-boolean-algebra.md) |
| $\forall,\ \exists$ | "for every" / "there exists at least one" | [1.2](lessons/01-02-predicate-logic-quantifiers-negation.md) |
| $P(x)$ | a **predicate** — a sentence with a blank, no truth value until $x$ is named | [1.2](lessons/01-02-predicate-logic-quantifiers-negation.md) |
| $\mathbb N,\ \mathbb Z,\ \mathbb Q,\ \mathbb R$ | naturals, integers, rationals, reals — the domain a quantifier ranges over, and it changes the answer | [1.2](lessons/01-02-predicate-logic-quantifiers-negation.md) |
| $\blacksquare$ | end of proof | [1.3](lessons/01-03-proof-techniques.md) |
| $P(n)$, $n_0$, $k$ | the claim being inducted on, its starting index, the generic step index | [1.4](lessons/01-04-induction-and-strong-induction.md) |
| $x \in A$, $x \notin A$ | is / is not an element of the set $A$ | [2.1](lessons/02-01-sets-and-set-operations.md) |
| $A \subseteq B$ | subset — every element of $A$ is in $B$ | [2.1](lessons/02-01-sets-and-set-operations.md) |
| $\cup,\ \cap,\ \setminus,\ \overline{A}$ | union, intersection, difference, complement (in a universe $U$) | [2.1](lessons/02-01-sets-and-set-operations.md) |
| $\varnothing$ | the empty set — a subset of everything | [2.1](lessons/02-01-sets-and-set-operations.md) |
| $\{x \in \mathbb Z : \ldots\}$ | set-builder: "the $x$ in $\mathbb Z$ such that the condition holds" | [2.1](lessons/02-01-sets-and-set-operations.md) |
| $\mathcal P(S)$ | power set — the set of **all** subsets of $S$ | [2.1](lessons/02-01-sets-and-set-operations.md) |
| $A \times B$ | Cartesian product — the set of **ordered** pairs $(a,b)$ | [2.1](lessons/02-01-sets-and-set-operations.md) |
| $\lvert A\rvert$ | cardinality — how many elements $A$ has | [2.1](lessons/02-01-sets-and-set-operations.md) |
| $a\,R\,b$, $a \sim b$ | "$a$ is related to $b$" — i.e. the pair $(a,b)$ is in the relation | [2.2](lessons/02-02-relations-equivalence-and-order.md) |
| $[a]$ | the equivalence class of $a$ — everything the same as $a$ | [2.2](lessons/02-02-relations-equivalence-and-order.md) |
| $\preceq$, $\prec$ | a partial order, and its strict version | [2.2](lessons/02-02-relations-equivalence-and-order.md) |
| $f : X \to Y$ | a function from domain $X$ to codomain $Y$ | [2.3](lessons/02-03-functions-and-cardinality.md) |
| $f(A)$, $f^{-1}(B)$ | image of a subset of the domain; **preimage** of a subset of the codomain (defined for *any* $f$) | [2.3](lessons/02-03-functions-and-cardinality.md) |
| $f^{-1}$ | the inverse **function** — exists only for a bijection | [2.3](lessons/02-03-functions-and-cardinality.md) |
| $\aleph_0$ | "aleph-null" — the size of $\mathbb N$, the smallest infinity | [2.3](lessons/02-03-functions-and-cardinality.md) |
| $n!$ | factorial — arrangements of $n$ distinct objects; $0! = 1$ | [3.1](lessons/03-01-counting-rules-permutations-combinations.md) |
| $P(n,k)$ | permutations: pick **and order** $k$ from $n$. (Unrelated to the predicate $P(x)$ — context tells them apart.) | [3.1](lessons/03-01-counting-rules-permutations-combinations.md) |
| $\binom{n}{k}$ | "$n$ choose $k$" — pick $k$ from $n$, order ignored | [3.1](lessons/03-01-counting-rules-permutations-combinations.md) |
| $A^c$ | complement of $A$ inside the universe $U$ — the same idea as $\overline{A}$, counting-flavoured | [3.3](lessons/03-03-inclusion-exclusion-and-pigeonhole.md) |
| $\lfloor x\rfloor$, $\lceil x\rceil$ | floor (round **down**) and ceiling (round **up**) to an integer | [3.3](lessons/03-03-inclusion-exclusion-and-pigeonhole.md) |
| $a \mid b$, $a \nmid b$ | "$a$ divides $b$" — a true/false **statement**, not the fraction. Divisor on the **left** | [4.1](lessons/04-01-divisibility-and-primes.md) |
| $q$, $r$ | quotient and remainder from the division algorithm, $a = dq + r$ | [4.1](lessons/04-01-divisibility-and-primes.md) |
| $\gcd(a,b)$, $\operatorname{lcm}(a,b)$ | greatest common divisor, least common multiple | [4.2](lessons/04-02-euclid-gcd-and-bezout.md) |
| $x, y$ in $ax + by$ | Bézout coefficients — how to build the gcd out of $a$ and $b$ | [4.2](lessons/04-02-euclid-gcd-and-bezout.md) |
| $a \equiv b \pmod n$ | congruence: $a$ and $b$ leave the same remainder mod $n$ — a **relation** | [4.3](lessons/04-03-modular-arithmetic-and-congruences.md) |
| $a \bmod n$ | the remainder itself — a **number** in $\{0,\dots,n-1\}$ | [4.3](lessons/04-03-modular-arithmetic-and-congruences.md) |
| $\mathbb Z_n$ | the $n$ residue classes $[0],\dots,[n-1]$ — the number line rolled into a loop | [4.3](lessons/04-03-modular-arithmetic-and-congruences.md) |
| $a^{-1}$ | modular inverse: the class with $a\,a^{-1} \equiv 1 \pmod n$ | [4.3](lessons/04-03-modular-arithmetic-and-congruences.md) |
| $a_n$, $c_i$ | the $n$-th term of a sequence, and the constant coefficients of its recurrence | [5.1](lessons/05-01-recurrence-relations.md) |
| $r_1, r_2$ | roots of the characteristic equation — the sequence's pure growth rates | [5.1](lessons/05-01-recurrence-relations.md) |
| $G = (V,E)$ | a graph: vertex set $V$, edge set $E$ (each edge an unordered pair) | [5.2](lessons/05-02-graphs-paths-connectivity-euler-hamilton.md) |
| $\deg v$ | degree — how many edge-ends stick out of vertex $v$ | [5.2](lessons/05-02-graphs-paths-connectivity-euler-hamilton.md) |
| $K_n$ | complete graph: $n$ vertices, every pair joined | [5.2](lessons/05-02-graphs-paths-connectivity-euler-hamilton.md) |
| $K_{m,n}$ | complete **bipartite** graph: every vertex of one side joined to every vertex of the other | [5.2](lessons/05-02-graphs-paths-connectivity-euler-hamilton.md) |
| $C_n$ | the cycle graph — $n$ vertices in a ring | [5.3](lessons/05-03-trees-and-graph-coloring.md) |
| $\chi(G)$ | chromatic number — fewest colors keeping adjacent vertices different | [5.3](lessons/05-03-trees-and-graph-coloring.md) |

## Definitions

### Proposition

A statement that is definitely true or definitely false — no maybes, no
dependence on an unnamed variable. "$7$ is prime" is one; "$x > 3$" is not.

*Introduced:* [1.1](lessons/01-01-propositional-logic-boolean-algebra.md)

### Logical equivalence

Two compounds that produce the same truth value in *every* row — same column,
same meaning. Equivalently, $A \leftrightarrow B$ is a tautology.

$$A \equiv B \iff (A \leftrightarrow B) \text{ is a tautology}$$

*Introduced:* [1.1](lessons/01-01-propositional-logic-boolean-algebra.md)

### Tautology and contradiction

A tautology is true in every row ($P \lor \lnot P$); a contradiction is false in
every row ($P \land \lnot P$). Everything else is contingent.

*Introduced:* [1.1](lessons/01-01-propositional-logic-boolean-algebra.md)

### Contrapositive, converse, inverse

Three rearrangements of $P \to Q$. Only the contrapositive is guaranteed to mean
the same thing — that's what makes contrapositive proof legal.

$$\text{contrapositive } \lnot Q \to \lnot P \ (\equiv P\to Q), \quad \text{converse } Q \to P, \quad \text{inverse } \lnot P \to \lnot Q$$

The converse and inverse are equivalent to each other, and to neither original.

*Introduced:* [1.1](lessons/01-01-propositional-logic-boolean-algebra.md)

### Predicate

A sentence with a blank in it. It becomes a proposition only once every variable
is either filled in or captured by a quantifier.

*Introduced:* [1.2](lessons/01-02-predicate-logic-quantifiers-negation.md)

### Bound and free variables

A variable a quantifier owns is **bound** (its name is arbitrary); one left
dangling is **free**, and the statement's truth still depends on it. No free
variables = a genuine true-or-false claim.

*Introduced:* [1.2](lessons/01-02-predicate-logic-quantifiers-negation.md)

### Counterexample

One element of the domain where the predicate fails. It kills a $\forall$ claim
outright — which is why a $\forall$ statement's negation is an $\exists$ hunt.

*Introduced:* [1.2](lessons/01-02-predicate-logic-quantifiers-negation.md)

### Proof by contradiction

Assume the claim fails and show that supposition breaks reality: assume
$P \land \lnot Q$, derive some $R \land \lnot R$.

*Introduced:* [1.3](lessons/01-03-proof-techniques.md)

### WLOG

"Without loss of generality" — a *claim of symmetry*: two cases are genuinely
interchangeable, so proving one proves its mirror. It is an argument you owe,
not a case you skip.

*Introduced:* [1.3](lessons/01-03-proof-techniques.md)

### Mathematical induction

Push the first domino, and show each domino knocks the next — then all of them
fall. Base case plus one implication buys you infinitely many claims.

$$P(n_0) \ \text{ and } \ \forall k \ge n_0\,\big(P(k) \to P(k+1)\big) \ \Longrightarrow\ P(n) \text{ for all } n \ge n_0$$

*Introduced:* [1.4](lessons/01-04-induction-and-strong-induction.md)

### Strong induction

Same, but in the step you may lean on **every** earlier case, not just the one
right before. Logically equivalent to ordinary induction — "strong" describes
how much of the hypothesis you *use*.

$$P(n_0) \ \text{ and } \ \forall k \ge n_0\,\Big(\big(P(n_0)\land\cdots\land P(k)\big) \to P(k+1)\Big)$$

Reach for it when case $k+1$ unravels into pieces of unpredictable size
(prime factorization, two-step recurrences).

*Introduced:* [1.4](lessons/01-04-induction-and-strong-induction.md)

### Well-ordering principle

Every nonempty set of nonnegative integers has a least element — there is no
infinite descending staircase in $\mathbb N$. This is the engine both forms of
induction run on: it rules out a *smallest* counterexample.

*Introduced:* [1.4](lessons/01-04-induction-and-strong-induction.md)

### Set

An unordered bag of distinct things. The only question you may ask it is "are you
in?" — no order, no repeats: $\{1,2,3\} = \{3,1,1,2\}$.

*Introduced:* [2.1](lessons/02-01-sets-and-set-operations.md)

### Subset and set equality

$A \subseteq B$ says every element of $A$ is in $B$; $A = B$ means the inclusion
runs **both** ways.

$$A \subseteq B \iff \forall x\,(x \in A \to x \in B), \qquad A = B \iff A \subseteq B \ \text{ and } \ B \subseteq A$$

*Introduced:* [2.1](lessons/02-01-sets-and-set-operations.md)

### Element method

To prove $A \subseteq B$: take one *arbitrary* $x \in A$ and deduce $x \in B$.
Because $x$ was arbitrary, the one argument settles all elements at once — it is
a $\forall$-proof aimed at membership.

*Introduced:* [2.1](lessons/02-01-sets-and-set-operations.md)

### Power set

All subsets of $S$, collected into one set — including $\varnothing$ and $S$.

$$\mathcal P(S) = \{\,T : T \subseteq S\,\}, \qquad \lvert\mathcal P(S)\rvert = 2^{\lvert S\rvert}$$

*Introduced:* [2.1](lessons/02-01-sets-and-set-operations.md)

### Cartesian product

All **ordered** pairs with first coordinate from $A$ and second from $B$. Order
matters here, unlike everywhere else in set land.

$$A \times B = \{(a,b) : a \in A \land b \in B\}, \qquad \lvert A\times B\rvert = \lvert A\rvert\,\lvert B\rvert$$

*Introduced:* [2.1](lessons/02-01-sets-and-set-operations.md)

### Relation

A rule that answers yes/no to "is $a$ related to $b$?" — formally, just the set
of pairs where the answer is yes.

$$R \subseteq A \times A, \qquad a\,R\,b \iff (a,b) \in R$$

*Introduced:* [2.2](lessons/02-02-relations-equivalence-and-order.md)

### Equivalence relation

A relation that behaves like "the same for my purposes": reflexive, symmetric,
and transitive together. Its payoff is that it shatters the set into clean
non-overlapping clumps.

*Introduced:* [2.2](lessons/02-02-relations-equivalence-and-order.md)

### Equivalence class

Everything that is "the same as" $a$, gathered up.

$$[a] = \{\,x \in A : x \sim a\,\}, \qquad [a] = [b] \iff a \sim b$$

*Introduced:* [2.2](lessons/02-02-relations-equivalence-and-order.md)

### Partition

A carve-up of a set into non-empty, pairwise disjoint blocks whose union is
everything. **Fundamental theorem:** the classes of an equivalence relation are
exactly a partition — two classes are identical or disjoint, never overlapping.

*Introduced:* [2.2](lessons/02-02-relations-equivalence-and-order.md)

### Partial order

A consistent "comes before" ranking: reflexive, **antisymmetric**, transitive. A
set carrying one is a **poset**. "Partial" because some pairs may be
**incomparable** — like $2$ and $3$ under divisibility.

$$\text{antisymmetric: } \ a \preceq b \ \land \ b \preceq a \ \Rightarrow\ a = b$$

*Introduced:* [2.2](lessons/02-02-relations-equivalence-and-order.md)

### Function

A rule assigning to **each** input in $X$ **exactly one** output in $Y$ — no
input unassigned, none sent to two places. It's a relation with that extra rule.

*Introduced:* [2.3](lessons/02-03-functions-and-cardinality.md)

### Injective

No collisions: distinct inputs always land on distinct outputs.

$$\forall a,b \in X:\ f(a) = f(b) \Rightarrow a = b$$

*Introduced:* [2.3](lessons/02-03-functions-and-cardinality.md)

### Surjective

No leftovers: every point of the codomain is hit by something.

$$\forall y \in Y\ \ \exists x \in X:\ f(x) = y$$

*Introduced:* [2.3](lessons/02-03-functions-and-cardinality.md)

### Bijective

Both at once — a perfect one-to-one pairing, exactly one arrow per target.
Equivalently, $f$ has a two-sided inverse $f^{-1}$ with $f^{-1}(f(x)) = x$ and
$f(f^{-1}(y)) = y$.

*Introduced:* [2.3](lessons/02-03-functions-and-cardinality.md)

### Cardinality and countability

Two sets have the same size exactly when a bijection exists between them — for
infinite sets there is nothing to count, so this **is** the definition. A set
bijectable with $\mathbb N$ is **countably infinite**, size $\aleph_0$.

*Introduced:* [2.3](lessons/02-03-functions-and-cardinality.md)

### Double counting

Count one set in two different ways; since both tally the same objects, the two
expressions must be equal. A proof technique that beats algebra on identities.

*Introduced:* [3.2](lessons/03-02-binomial-theorem-and-identities.md)

### Complementary counting

When what you want is a mess but its opposite is easy, count the opposite and
subtract: $\lvert A\rvert = \lvert U\rvert - \lvert A^c\rvert$. "At least one X"
is nearly always "total minus no X."

*Introduced:* [3.3](lessons/03-03-inclusion-exclusion-and-pigeonhole.md)

### Divisibility

Multiplication asked backwards: $b$ is a whole number of $a$s stacked up.

$$a \mid b \iff \exists k \in \mathbb Z,\ b = ak \qquad (a \ne 0)$$

*Introduced:* [4.1](lessons/04-01-divisibility-and-primes.md)

### Division algorithm

Dividing always leaves a quotient and a remainder, and the pair is **forced**,
never a choice — the remainder is pinned into $[0,d)$.

$$\forall a \in \mathbb Z,\ \forall d > 0,\ \exists!\, q,r:\quad a = dq + r,\quad 0 \le r < d$$

"$d \mid a$" is exactly the case $r = 0$.

*Introduced:* [4.1](lessons/04-01-divisibility-and-primes.md)

### Prime

An integer $p > 1$ whose only positive divisors are $1$ and $p$; a $p > 1$ that
isn't prime is **composite**. $1$ is deliberately neither — see the pitfall.

*Introduced:* [4.1](lessons/04-01-divisibility-and-primes.md)

### Fundamental Theorem of Arithmetic

Every integer above $1$ is a product of primes, in exactly **one** way up to
order. The prime factorization is a fingerprint.

$$n = p_1^{e_1} p_2^{e_2}\cdots p_k^{e_k} \quad \text{(unique up to reordering)}$$

Existence is a strong induction (split a composite, recurse); uniqueness needs
Euclid's lemma from [4.2](lessons/04-02-euclid-gcd-and-bezout.md).

*Introduced:* [4.1](lessons/04-01-divisibility-and-primes.md)

### Greatest common divisor

The biggest common measuring stick of two integers — the largest $d$ with
$d \mid a$ and $d \mid b$. The **lcm** is the smallest positive integer both
divide.

*Introduced:* [4.2](lessons/04-02-euclid-gcd-and-bezout.md)

### Bézout's identity

The gcd is not just the biggest common divisor — it is the smallest positive
number you can build by adding and subtracting copies of $a$ and $b$.

$$\exists x,y \in \mathbb Z:\quad \gcd(a,b) = ax + by$$

The **extended Euclidean algorithm** produces those $x,y$ by back-substituting
the division chain.

*Introduced:* [4.2](lessons/04-02-euclid-gcd-and-bezout.md)

### Coprime

$\gcd(a,b) = 1$: no shared prime factor. Equivalently, some $ax + by = 1$. It
does *not* mean either number is $1$ — $9$ and $4$ are coprime.

*Introduced:* [4.2](lessons/04-02-euclid-gcd-and-bezout.md)

### Congruence mod n

Sameness-of-remainder. Fix a modulus and two integers count as "the same" when
they differ by a multiple of it.

$$a \equiv b \pmod n \iff n \mid (a - b)$$

This is an equivalence relation; its classes are the **residue classes**
$[a] = \{a + kn : k \in \mathbb Z\}$, and $\mathbb Z_n$ is the set of the $n$ of
them.

*Introduced:* [4.3](lessons/04-03-modular-arithmetic-and-congruences.md)

### Modular inverse

There is no division in $\mathbb Z_n$ — only multiplication by an inverse class,
and it exists exactly when the number shares no factor with the modulus.

$$a\,a^{-1} \equiv 1 \pmod n \quad \text{exists} \iff \gcd(a,n) = 1$$

Bézout builds it: $ax + ny = 1$ makes $x$ the inverse.

*Introduced:* [4.3](lessons/04-03-modular-arithmetic-and-congruences.md)

### Recurrence relation

A sequence folded up: a rule for the next term in terms of earlier ones, plus
**initial conditions** to say which sequence you mean. Solving it means
unfolding it into a **closed form** you can evaluate at $n = 10^6$ directly.

*Introduced:* [5.1](lessons/05-01-recurrence-relations.md)

### Linear homogeneous recurrence with constant coefficients

Each term is a fixed weighted sum of the $k$ terms before it — *linear* (no
squares or products of terms), *homogeneous* (no stray $+7$ or $+n$),
*constant* weights. It needs exactly $k$ initial conditions.

$$a_n = c_1 a_{n-1} + c_2 a_{n-2} + \cdots + c_k a_{n-k}, \qquad c_k \ne 0$$

*Introduced:* [5.1](lessons/05-01-recurrence-relations.md)

### Characteristic equation

Guess $a_n = x^n$, substitute, divide out — the whole recurrence collapses to one
polynomial whose roots are the sequence's surviving growth rates.

$$x^k = c_1 x^{k-1} + c_2 x^{k-2} + \cdots + c_k$$

*Introduced:* [5.1](lessons/05-01-recurrence-relations.md)

### Graph

Dots and the lines joining them, nothing more. $G = (V,E)$ with each edge an
unordered pair $\{u,v\}$ of distinct vertices — **simple** means no loops and no
repeated edges.

*Introduced:* [5.2](lessons/05-02-graphs-paths-connectivity-euler-hamilton.md)

### Walk, path, cycle

A **walk** is any dot-to-dot route along edges; a **path** never reuses a vertex;
a **cycle** is a closed walk of length $\ge 3$ repeating only its start/end.

*Introduced:* [5.2](lessons/05-02-graphs-paths-connectivity-euler-hamilton.md)

### Connected and components

$G$ is **connected** if you can walk between any two vertices. If not, it falls
into islands — its maximal connected pieces, the **components**.

*Introduced:* [5.2](lessons/05-02-graphs-paths-connectivity-euler-hamilton.md)

### Euler circuit

A closed walk using **every edge exactly once**. About edges. Decided by a
five-second glance at the degrees — see the table below.

*Introduced:* [5.2](lessons/05-02-graphs-paths-connectivity-euler-hamilton.md)

### Hamiltonian cycle

A cycle visiting **every vertex exactly once** before returning to start. About
vertices. Looks like Euler's twin; has no known simple criterion, and deciding it
is NP-complete.

*Introduced:* [5.2](lessons/05-02-graphs-paths-connectivity-euler-hamilton.md)

### Tree

Connected with nothing to spare: connected so you can get anywhere, acyclic so
there is exactly **one** way. Add any edge and you make a cycle; delete any edge
and it splits in two.

*Introduced:* [5.3](lessons/05-03-trees-and-graph-coloring.md)

### Leaf and spanning tree

A **leaf** is a degree-1 vertex (a dead end); every tree on $\ge 2$ vertices has
at least two. A **spanning tree** of $G$ is a subgraph that is a tree and touches
every vertex — every connected graph has one.

*Introduced:* [5.3](lessons/05-03-trees-and-graph-coloring.md)

### Chromatic number

The smallest palette that keeps every pair of neighbours differently coloured.

$$\chi(G) = \min\{\,k : G \text{ has a proper } k\text{-coloring}\,\}$$

A graph is **bipartite** when $\chi(G) \le 2$ — its vertices split into two
groups with every edge crossing between them.

*Introduced:* [5.3](lessons/05-03-trees-and-graph-coloring.md)

## Formulas and rules

### Truth tables for the connectives

The definitions of the five connectives. The one row worth burning in: $P \to Q$
is false **only** in row 2.

| $P$ | $Q$ | $\lnot P$ | $P \land Q$ | $P \lor Q$ | $P \to Q$ | $P \leftrightarrow Q$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| T | T | F | T | T | T | T |
| T | F | F | F | T | **F** | F |
| F | T | T | F | T | T | F |
| F | F | T | F | F | T | T |

*From* [1.1](lessons/01-01-propositional-logic-boolean-algebra.md)

### Boolean laws

Every law comes in an and/or dual pair. Read them right-to-left as often as
left-to-right — that's how you *factor* a Boolean expression.

| Law | With $\land$ | With $\lor$ |
|---|---|---|
| Identity | $P \land \mathbf T \equiv P$ | $P \lor \mathbf F \equiv P$ |
| Domination | $P \land \mathbf F \equiv \mathbf F$ | $P \lor \mathbf T \equiv \mathbf T$ |
| Complement | $P \land \lnot P \equiv \mathbf F$ | $P \lor \lnot P \equiv \mathbf T$ |
| Distributive | $P \land (Q \lor R) \equiv (P\land Q)\lor(P\land R)$ | $P \lor (Q \land R) \equiv (P\lor Q)\land(P\lor R)$ |
| Absorption | $P \land (P \lor Q) \equiv P$ | $P \lor (P \land Q) \equiv P$ |
| De Morgan | $\lnot(P\land Q)\equiv \lnot P \lor \lnot Q$ | $\lnot(P\lor Q)\equiv \lnot P \land \lnot Q$ |

Three more workhorses, used constantly:

$$P \to Q \equiv \lnot P \lor Q, \qquad \lnot(P \to Q) \equiv P \land \lnot Q, \qquad \lnot\lnot P \equiv P$$

Also worth keeping: the **redundancy** rewrite $A \lor (\lnot A \land B) \equiv A \lor B$.

*From* [1.1](lessons/01-01-propositional-logic-boolean-algebra.md)

### Negating a quantified statement

March through left to right: **flip every quantifier and negate the core.**

$$\lnot\,\forall x\,P(x) \equiv \exists x\,\lnot P(x), \qquad \lnot\,\exists x\,P(x) \equiv \forall x\,\lnot P(x)$$

$$\lnot\big[\forall x\,\exists y\,P(x,y)\big] \equiv \exists x\,\forall y\,\lnot P(x,y)$$

If the core is an implication, use $\lnot(A\to B)\equiv A \land \lnot B$. Common
cores and their negations: $\lnot(y > x)$ is $y \le x$; $\lnot(\lvert a_n - L\rvert < \varepsilon)$
is $\lvert a_n - L\rvert \ge \varepsilon$.

**Quantifier order is content, not decoration.** $\forall x\,\exists y$ lets $y$
be chosen *after* seeing $x$ (so it may depend on $x$); $\exists y\,\forall x$
demands one witness serving every $x$ at once — strictly stronger, usually false.

*From* [1.2](lessons/01-02-predicate-logic-quantifiers-negation.md)

### Choosing a proof technique

| Shape of the claim | Move | You assume | You derive |
|---|---|---|---|
| $P \Rightarrow Q$, forward algebra is clean | direct | $P$ | $Q$ |
| $Q$ is hard to grab; $\lnot P$ is easy to reach | contrapositive | $\lnot Q$ | $\lnot P$ |
| No handle at all; you want extra ammunition | contradiction | $P \land \lnot Q$ | any $R \land \lnot R$ |
| The situation splits into finitely many kinds | cases | each $C_i$ (**exhaustive**) | $Q$ in each case |
| $Q(n)$ for all $n \ge n_0$, each case built from the last | induction | $P(k)$ | $P(k+1)$ |
| ... and case $k+1$ needs *some* earlier case, not just $k$ | strong induction | $P(n_0)\land\cdots\land P(k)$ | $P(k+1)$ |
| $\forall x\,P(x)$ is **false** | counterexample | — | one $x$ with $\lnot P(x)$ |

Standard unpackings you'll reuse: $n$ even means $n = 2k$; $n$ odd means
$n = 2k+1$; "rational" means $p/q$ **in lowest terms** (the fact you collide with
in the $\sqrt 2$ and $\sqrt 3$ proofs); $a \mid b$ means $b = ak$.

*From* [1.3](lessons/01-03-proof-techniques.md) *and* [1.4](lessons/01-04-induction-and-strong-induction.md)

### Induction template and summation closed forms

Write the base case, state the hypothesis, then **peel off one piece to expose
the case you already assumed** and do a line of algebra.

$$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}, \qquad \sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}, \qquad \sum_{i=1}^{n} (2i-1) = n^2$$

$$\sum_{i=0}^{n-1} 2^i = 2^n - 1, \qquad \sum_{i=0}^{n-1} r^i = \frac{r^n - 1}{r - 1}\ \ (r \ne 1)$$

The last two are the "constant tail" that shows up whenever you unroll a
recurrence like $H_n = 2H_{n-1} + 1$.

*From* [1.4](lessons/01-04-induction-and-strong-induction.md) *and* [5.1](lessons/05-01-recurrence-relations.md)

### Set operations and identities

$$A \cup B = \{x : x\in A \lor x \in B\}, \quad A \cap B = \{x : x \in A \land x \in B\}$$
$$A \setminus B = \{x : x \in A \land x \notin B\}, \quad \overline{A} = U \setminus A$$

Every set law is a Boolean law wearing new clothes — the dictionary is
$\cup \leftrightarrow \lor$, $\cap \leftrightarrow \land$,
$\overline{\ \cdot\ } \leftrightarrow \lnot$, $\subseteq\ \leftrightarrow\ \to$.
So the whole Boolean table above transfers:

$$A \cap (B \cup C) = (A\cap B)\cup(A\cap C), \quad \overline{A \cup B} = \overline{A}\cap\overline{B}, \quad \overline{A\cap B} = \overline{A}\cup\overline{B}$$
$$A \cup (A \cap B) = A, \qquad A \setminus B = A \iff A \cap B = \varnothing$$

Sizes: $\lvert\mathcal P(S)\rvert = 2^{\lvert S\rvert}$ and
$\lvert A \times B\rvert = \lvert A\rvert\lvert B\rvert$.

*From* [2.1](lessons/02-01-sets-and-set-operations.md)

### Testing a relation

Check each property against its **full** definition — never pattern-match a name.

| Property | Statement | Reading |
|---|---|---|
| reflexive | $\forall a,\ a \sim a$ | everything relates to itself — must cover *every* $a$ |
| symmetric | $a \sim b \Rightarrow b \sim a$ | never points one way only |
| antisymmetric | $a \preceq b \land b \preceq a \Rightarrow a = b$ | no two *distinct* things precede each other |
| transitive | $a \sim b \land b \sim c \Rightarrow a \sim c$ | relatedness chains through a middleman |

| Combination | Name | What you get |
|---|---|---|
| reflexive + symmetric + transitive | equivalence relation | a **partition** into classes $[a]$ |
| reflexive + antisymmetric + transitive | partial order (poset) | a ranking, some pairs incomparable |

Canonical instances: congruence mod $n$ (equivalence, classes
$[0],\dots,[n-1]$); divisibility on $\mathbb Z^{+}$ and $\subseteq$ on a power
set (partial orders); $<$ on $\mathbb Z$ (transitive and antisymmetric but
**not** reflexive — a strict order).

*From* [2.2](lessons/02-02-relations-equivalence-and-order.md)

### Proving a function property

| Goal | What you write |
|---|---|
| $f$ injective | "Suppose $f(a) = f(b)$" → algebra → "hence $a = b$" |
| $f$ **not** injective | one explicit collision: $a \ne b$ with $f(a) = f(b)$ |
| $f$ surjective | "Take any $y \in Y$" → solve for $x$ → "and $f(x) = y$" |
| $f$ **not** surjective | one $y$ with empty preimage |
| $f$ bijective | both of the above; the surjectivity algebra hands you $f^{-1}$ |
| $\lvert A\rvert = \lvert B\rvert$ | exhibit a bijection $A \to B$ — that *is* the definition |

On a **finite** set mapping to itself, injective $\Rightarrow$ surjective
$\Rightarrow$ bijective. On infinite sets that collapse fails, and a set can
biject with a proper subset of itself ($n \mapsto 2n$ from $\mathbb N$ onto the
evens).

*From* [2.3](lessons/02-03-functions-and-cardinality.md)

### The counting rules

Ask two questions: *stages or cases?* and *does order matter?*

| Situation | Count | Reading |
|---|---|---|
| disjoint cases ("or") | $\lvert A_1\rvert + \cdots + \lvert A_m\rvert$ | sum rule — non-overlapping buckets add |
| independent stages ("and / then") | $n_1 n_2 \cdots n_k$ | product rule — branchings multiply |
| arrange all $n$ | $n!$ | with $0! = 1$ |
| ordered, no repeats, $k$ of $n$ | $P(n,k) = \dfrac{n!}{(n-k)!} = n(n-1)\cdots(n-k+1)$ | fill $k$ ordered slots |
| unordered, no repeats, $k$ of $n$ | $\dbinom{n}{k} = \dfrac{n!}{k!\,(n-k)!} = \dfrac{P(n,k)}{k!}$ | divide out the $k!$ orderings |
| ordered, repeats allowed | $n^k$ | each of $k$ stages has all $n$ options |
| how many multiples of $d$ up to $N$ | $\lfloor N/d\rfloor$ | floor, always |

*From* [3.1](lessons/03-01-counting-rules-permutations-combinations.md) *and* [3.3](lessons/03-03-inclusion-exclusion-and-pigeonhole.md)

### Binomial theorem and identities

Each coefficient is a count of choices — which $k$ of the $n$ factors donate an
$x$. The exponents always sum to $n$.

$$(x+y)^n = \sum_{k=0}^{n}\binom{n}{k}x^k y^{\,n-k}$$

| Identity | Name | Counting reading |
|---|---|---|
| $\dbinom{n}{k} = \dbinom{n}{n-k}$ | symmetry | choosing what to keep = choosing what to discard |
| $\dbinom{n}{k} = \dbinom{n-1}{k-1} + \dbinom{n-1}{k}$ | Pascal's rule | element $n$ is in your set, or it isn't |
| $\sum_{k=0}^{n}\dbinom{n}{k} = 2^n$ | row sum | count subsets by size, or by in/out decisions |
| $\sum_{k=0}^{n} k\dbinom{n}{k} = n\,2^{n-1}$ | committee-and-chair | pick committee then chair, or chair then the rest |
| $\sum_{i=r}^{n}\dbinom{i}{r} = \dbinom{n+1}{r+1}$ | hockey stick | classify by the **largest** element |

For $(ax + by)^n$, substitute $x \to ax$ and $y \to by$ and let the powers carry
the constants and the signs: the $k$-th term is
$\binom{n}{k}(ax)^k(by)^{\,n-k}$.

*From* [3.2](lessons/03-02-binomial-theorem-and-identities.md)

### Pascal's triangle and small values

Row $n$ holds $\binom{n}{0},\dots,\binom{n}{n}$; each interior entry is the sum
of the two above it. The lessons read coefficients straight off this without
restating it.

| $n$ | Row of $\binom{n}{k}$ | $n!$ | $2^n$ |
|---|---|---|---|
| 0 | 1 | 1 | 1 |
| 1 | 1, 1 | 1 | 2 |
| 2 | 1, 2, 1 | 2 | 4 |
| 3 | 1, 3, 3, 1 | 6 | 8 |
| 4 | 1, 4, 6, 4, 1 | 24 | 16 |
| 5 | 1, 5, 10, 10, 5, 1 | 120 | 32 |
| 6 | 1, 6, 15, 20, 15, 6, 1 | 720 | 64 |
| 7 | 1, 7, 21, 35, 35, 21, 7, 1 | 5040 | 128 |
| 8 | 1, 8, 28, 56, 70, 56, 28, 8, 1 | 40320 | 256 |

*Used from* [3.1](lessons/03-01-counting-rules-permutations-combinations.md) *and* [3.2](lessons/03-02-binomial-theorem-and-identities.md) *onward*

### Inclusion–exclusion

Add the singles, subtract the pairs, add back the triple — the signs alternate
with how many sets you're intersecting.

$$\lvert A \cup B\rvert = \lvert A\rvert + \lvert B\rvert - \lvert A \cap B\rvert$$

$$\lvert A \cup B \cup C\rvert = \lvert A\rvert+\lvert B\rvert+\lvert C\rvert - \lvert A\cap B\rvert-\lvert A\cap C\rvert-\lvert B\cap C\rvert + \lvert A\cap B\cap C\rvert$$

For divisibility sieves the intersections are **lcm** counts, not products:
"divisible by $4$ and $6$" is $\lfloor N/12\rfloor$, since
$\operatorname{lcm}(4,6) = 12$. Products only equal lcms when the numbers are
coprime.

*From* [3.3](lessons/03-03-inclusion-exclusion-and-pigeonhole.md)

### Pigeonhole principle

More pigeons than holes forces a shared hole — existence proved with zero
construction.

$$n+1 \text{ objects into } n \text{ boxes} \ \Rightarrow\ \text{some box holds} \ge 2$$
$$n \text{ objects into } k \text{ boxes} \ \Rightarrow\ \text{some box holds} \ge \left\lceil n/k \right\rceil$$

The whole skill is **naming the boxes**: remainders mod $n$ (two of six integers
share a remainder mod $5$, so their difference is divisible by $5$), regions of a
square, possible degrees in a graph.

*From* [3.3](lessons/03-03-inclusion-exclusion-and-pigeonhole.md)

### Divisibility facts

All of these fall out of one move: write $b = aj$, substitute, factor out $a$.

$$a \mid b \ \land\ a \mid c \ \Rightarrow\ a \mid (b + c) \ \text{ and } \ a \mid (b - c)$$
$$a \mid b \ \Rightarrow\ a \mid bc \quad \text{for any } c, \qquad a \mid b \ \land\ b \mid c \ \Rightarrow\ a \mid c$$

**Euclid's lemma.** If $p$ is prime and $p \mid ab$, then $p \mid a$ or
$p \mid b$. (Consequence: $p \mid n^2 \Rightarrow p \mid n$ — the lemma that
makes $\sqrt p$ irrational for prime $p$, and that makes prime factorization
unique.)

**Euclid's theorem.** There are infinitely many primes: if $p_1,\dots,p_n$ were
all of them, some prime divides $N = p_1\cdots p_n + 1$, hence divides
$N - \prod p_i = 1$ — impossible.

Primes under $60$: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59$.

*From* [4.1](lessons/04-01-divisibility-and-primes.md) *and* [4.2](lessons/04-02-euclid-gcd-and-bezout.md)

### gcd, lcm and the Euclidean algorithm

$$\gcd(a,b)\cdot\operatorname{lcm}(a,b) = \lvert ab\rvert$$

**From factorizations** (expensive but instructive): the gcd takes the **min**
exponent of each shared prime, the lcm the **max** exponent of every prime that
appears. Min plus max equals the sum, which is why the product identity holds.

**Euclidean reduction** (fast, no factoring): replace the bigger number by its
remainder and repeat; the last nonzero remainder is the gcd.

$$\gcd(a,b) = \gcd(b,\ a \bmod b), \qquad \gcd(a,0) = \lvert a\rvert$$

It works because $(a,b)$ and $(b,r)$ have *identical* sets of common divisors. It
takes $O(\log\min(\lvert a\rvert,\lvert b\rvert))$ divisions.

**Extended version:** solve each division line for its remainder, then
back-substitute from the last nonzero one upward until everything is written in
terms of $a$ and $b$. That yields Bézout's $x, y$ — and $x$ is the modular
inverse of $a$ mod $b$ whenever $\gcd(a,b) = 1$.

*From* [4.2](lessons/04-02-euclid-gcd-and-bezout.md)

### Modular arithmetic

Arithmetic survives the chopping into classes, which is your license to **reduce
early and often** and keep every intermediate number small.

$$a \equiv a',\ b \equiv b' \pmod n \ \Longrightarrow\ a + b \equiv a' + b' \ \text{ and } \ ab \equiv a'b' \pmod n$$

| Task | Rule |
|---|---|
| simplify a base | pick the friendliest representative — often $-1$ (e.g. $5 \equiv -1 \pmod 6$) |
| divide by $a$ | multiply by $a^{-1}$; exists iff $\gcd(a,n) = 1$ |
| solve $ax \equiv b \pmod n$ | solvable **iff** $\gcd(a,n) \mid b$; then there are exactly $\gcd(a,n)$ solution classes |
| cancel $k$ from $ka \equiv kb$ | legal **only** if $\gcd(k,n) = 1$ |
| shrink a huge exponent | Fermat: for prime $p$ and $p \nmid a$, $a^{\,p-1} \equiv 1 \pmod p$, so reduce the exponent **mod $p-1$** |
| no theorem available | repeated squaring: square up the binary expansion of the exponent, reducing at each step |

*From* [4.3](lessons/04-03-modular-arithmetic-and-congruences.md)

### Solving a linear recurrence

**Recipe (order 2).** Write the characteristic equation $x^2 = c_1 x + c_2$ →
find its roots (factor, or the quadratic formula; a zero discriminant is the
warning sign) → write the general solution → fit the constants with the initial
conditions → check one extra term against the recurrence.

| Roots of $x^2 - c_1 x - c_2 = 0$ | General solution |
|---|---|
| distinct $r_1 \ne r_2$ | $a_n = A\,r_1^{\,n} + B\,r_2^{\,n}$ |
| double root $r$ | $a_n = (c_1 + c_2 n)\,r^{\,n}$ — the extra factor of $n$ is mandatory |

**Unroll and prove.** For first-order or ad-hoc recurrences: expand a few steps,
spot the pattern, *guess* the closed form, then certify it by induction. Unrolling
suggests; only induction proves. Worked instances worth remembering:
$a_n = 3a_{n-1},\ a_0 = 5 \Rightarrow a_n = 5\cdot3^n$; Tower of Hanoi
$H_n = 2H_{n-1}+1,\ H_1 = 1 \Rightarrow H_n = 2^n - 1$; the domino-tiling count
$t_n = t_{n-1} + t_{n-2}$ is Fibonacci discovered by a last-tile case split.

*From* [5.1](lessons/05-01-recurrence-relations.md)

### Graph facts and the Euler criterion

**Handshake lemma.** Every edge has two ends, so summing degrees double-counts
the edges.

$$\sum_{v \in V}\deg v = 2\lvert E\rvert \qquad \Longrightarrow \qquad \text{the number of odd-degree vertices is even}$$

| Question | Criterion |
|---|---|
| Euler **circuit** (every edge once, closed) | connected **and** every degree even |
| Euler **path/trail** (every edge once, open ends) | connected **and** exactly $0$ or $2$ odd-degree vertices |
| Hamiltonian cycle (every vertex once) | no simple iff is known; NP-complete. Dirac's *sufficient* condition: every degree $\ge n/2$ |

**Complete graph $K_n$:** every degree is $n-1$, and
$\lvert E\rvert = \binom{n}{2} = \dfrac{n(n-1)}{2}$. So $K_n$ has an Euler
circuit exactly when $n$ is **odd**.

*From* [5.2](lessons/05-02-graphs-paths-connectivity-euler-hamilton.md)

### Trees and coloring

**Four equivalent definitions of a tree** — any one may serve, and any *two* of
{connected, acyclic, has $n-1$ edges} force the third:

1. connected and acyclic;
2. connected with exactly $\lvert V\rvert - 1$ edges;
3. a unique path between every pair of vertices;
4. acyclic, and adding any edge creates exactly one cycle.

$$\text{tree on } n \text{ vertices} \ \Longrightarrow\ \lvert E\rvert = n - 1$$

Proved by *peel a leaf, shrink the problem* — the standard induction on trees.

**Bipartite theorem (König).** A graph is 2-colorable **iff** it contains no odd
cycle. Trees, even cycles and grids qualify; any triangle does not.

| Graph | $\chi$ | Why |
|---|---|---|
| any tree / forest | $2$ (or $1$ if edgeless) | acyclic, so vacuously no odd cycle |
| even cycle $C_{2m}$ | $2$ | alternate colors, they meet consistently |
| odd cycle $C_{2m+1}$ | $3$ | alternating fails where the ends meet |
| complete graph $K_n$ | $n$ | every vertex adjacent to every other |
| complete bipartite $K_{m,n}$ | $2$ | edges only ever cross between the two sides |

Coloring **is** scheduling: vertices are exams or variables, edges are conflicts,
colors are time slots or CPU registers. A clique of size $k$ proves
$\chi \ge k$ — that's how you show a coloring is optimal.

*From* [5.3](lessons/05-03-trees-and-graph-coloring.md)

## Assumed, not taught here

This course has no formal prerequisites — it builds its own logic, sets, and
counting from scratch. What it *does* assume is high-school algebra, a handful of
results it states but defers, and a pace that expects you've met this material
once before.

**Prerequisite facts used without derivation:**

| Fact | Where it's taught |
|---|---|
| Sigma notation $\sum$, index shifting, and the closed forms tabulated above | [precalculus 3.2](../precalculus/lessons/03-02-sequences-and-sigma-notation.md) |
| Finite geometric sum $1 + 2 + \cdots + 2^{n-1} = 2^n - 1$ (the unrolled tail in 5.1) | [precalculus 3.3](../precalculus/lessons/03-03-series-and-infinite-geometric-sum.md) |
| Factoring a quadratic, the factor theorem, and the discriminant (characteristic equations in 5.1) | [precalculus 2.1](../precalculus/lessons/02-01-polynomial-functions.md) |
| Function composition and inverses (the anatomy behind injective/surjective/inverse in 2.3) | [precalculus 1.2](../precalculus/lessons/01-02-composition-and-inverses.md) |
| Distance in the plane, $\sqrt{x^2 + y^2}$ (the pigeonhole geometry problem in 3.3) | [precalculus 4.2](../precalculus/lessons/04-02-vectors-parametric-and-polar.md) |
| Second-order constant-coefficient solutions and why a repeated root needs the extra factor of $n$ | [ode-refresher 2.1](../ode-refresher/lessons/02-01-second-order-constant-coefficient.md) |

**Results this course states but defers:**

| Result | Where it's proved |
|---|---|
| Well-ordering, and why it is equivalent to induction (stated as the engine in 1.4) | [mathematical-logic 4.1](../mathematical-logic/lessons/04-01-relations-orderings-well-ordering.md) |
| Countability of $\mathbb Q$ and Cantor's diagonal argument that $\mathbb R$ is uncountable (asserted in 2.3) | [mathematical-logic 4.3](../mathematical-logic/lessons/04-03-cardinals-cantors-theorem.md) |
| The uniqueness half of the Fundamental Theorem of Arithmetic (stated in 4.1, only its lemma proved in 4.2) | [number-theory 1.3](../number-theory/lessons/01-03-primes-and-the-fundamental-theorem.md) |
| Lamé's theorem and the $O(\log)$ bound on the Euclidean algorithm (quoted in 4.2) | [number-theory 1.2](../number-theory/lessons/01-02-euclidean-algorithm-and-bezout.md) |
| Fermat's little theorem (used in 4.3, never proved), and its upgrade to Euler's theorem | [number-theory 3.1](../number-theory/lessons/03-01-fermats-little-theorem.md), [3.2](../number-theory/lessons/03-02-euler-totient-and-theorem.md) |
| Chinese Remainder Theorem, stitching congruences across moduli (mentioned in 4.3) | [number-theory 2.4](../number-theory/lessons/02-04-chinese-remainder-theorem.md) |
| Generating functions, and nonhomogeneous recurrences the characteristic trick can't reach (teased in 5.1) | [combinatorics 3.2](../combinatorics/lessons/03-02-recurrences-generating-functions.md) |
| The general $m$-set inclusion–exclusion formula and the deep pigeonhole applications (3.3 gives two and three sets) | [combinatorics 1.3](../combinatorics/lessons/01-03-inclusion-exclusion.md), [4.2](../combinatorics/lessons/04-02-pigeonhole.md) |
| Why Hamiltonicity has no easy criterion; Dirac's condition (asserted in 5.2) | [graph-theory 1.4](../graph-theory/lessons/01-04-eulerian-hamiltonian.md) |
| Planarity and the four-color theorem for planar maps (mentioned in 5.3) | [graph-theory 3.1](../graph-theory/lessons/03-01-planar-euler-formula.md), [3.3](../graph-theory/lessons/03-03-coloring-chromatic-number.md) |

**If the pace here is too brisk,** the gentler first pass at the same ideas is
the Foundations course `discrete-math-intro`:

| Topic | Gentler version |
|---|---|
| Statements, connectives, truth tables | [discrete-math-intro 1.1](../discrete-math-intro/lessons/01-01-statements-connectives-truth-tables.md) |
| Sets, set operations, quantifiers | [discrete-math-intro 1.2](../discrete-math-intro/lessons/01-02-sets-operations-quantifiers.md) |
| Ordered pairs, relations, functions | [discrete-math-intro 2.1](../discrete-math-intro/lessons/02-01-relations-and-functions.md) |
| A first direct proof and a first induction | [discrete-math-intro 2.2](../discrete-math-intro/lessons/02-02-first-proof-direct-and-induction.md) |
| Sum/product rules, permutations | [discrete-math-intro 3.1](../discrete-math-intro/lessons/03-01-counting-rules-and-permutations.md) |
| Combinations, floor/ceiling, first pigeonhole | [discrete-math-intro 3.2](../discrete-math-intro/lessons/03-02-combinations-and-clever-counts.md) |
| Divisibility, parity, first modular arithmetic | [discrete-math-intro 4.1](../discrete-math-intro/lessons/04-01-divisibility-parity-modular-arithmetic.md) |
| A first taste of graphs | [discrete-math-intro 4.2](../discrete-math-intro/lessons/04-02-a-taste-of-graphs.md) |

## Pitfalls

### Logic and quantifiers

- $P \to Q$ asserts no causation and does not claim $P$ — it is **vacuously true whenever $P$ is false**. *([1.1](lessons/01-01-propositional-logic-boolean-algebra.md))*
- The converse $Q \to P$ is not the original; only the **contrapositive** swaps in for free. *([1.1](lessons/01-01-propositional-logic-boolean-algebra.md))*
- $\lor$ is **inclusive** — "both" counts. Exclusive-or is a different connective you'd have to build. *([1.1](lessons/01-01-propositional-logic-boolean-algebra.md))*
- De Morgan **flips the connective** when the negation moves inside: $\lnot(P\land Q) \equiv \lnot P \lor \lnot Q$, never $\lnot P \land \lnot Q$. The single most common logic error. *([1.1](lessons/01-01-propositional-logic-boolean-algebra.md))*
- $\lnot\forall x\,P(x)$ is "**somebody fails**," not "nobody satisfies." "Not all politicians are honest" is not "all politicians are dishonest." *([1.2](lessons/01-02-predicate-logic-quantifiers-negation.md))*
- $\forall x\,\exists y$ and $\exists y\,\forall x$ are different claims — the second demands one witness for everyone, and is usually false when the first is true. *([1.2](lessons/01-02-predicate-logic-quantifiers-negation.md))*
- A statement with a **free** variable isn't true or false — it's a predicate. Check nothing is dangling before you rule on it. *([1.2](lessons/01-02-predicate-logic-quantifiers-negation.md))*

### Proof

- Contrapositive and contradiction are not the same trick: contrapositive never mentions $P$ being true. If your contradiction proof ends by deriving $\lnot P$, you should have used the cleaner contrapositive. *([1.3](lessons/01-03-proof-techniques.md))*
- "WLOG" is a claim of symmetry you must justify — not a free pass to drop a case. *([1.3](lessons/01-03-proof-techniques.md))*
- One worked example never proves a $\forall$ statement (though one **counterexample** disproves it). Cases prove universals only when the cases are **exhaustive**. *([1.3](lessons/01-03-proof-techniques.md), [1.2](lessons/01-02-predicate-logic-quantifiers-negation.md))*
- The base case is load-bearing, not a formality — "$n = n+1$" survives every inductive step and is false everywhere. A missing base case is how an induction silently fails. *([1.4](lessons/01-04-induction-and-strong-induction.md))*
- Assuming $P(k)$ to get $P(k+1)$ is not circular: you're proving an *implication*, and the base case is what makes the chain unconditional. *([1.4](lessons/01-04-induction-and-strong-induction.md))*
- If the step reaches back two terms, verify **two** base cases (Fibonacci bounds are the standard trap). *([1.4](lessons/01-04-induction-and-strong-induction.md))*

### Sets, relations, functions

- $\in$ and $\subseteq$ are different: $2 \in \{1,2,3\}$ but $\{2\} \subseteq \{1,2,3\}$. And $\varnothing \subseteq S$ always, while $\varnothing \in S$ only if you put it there. *([2.1](lessons/02-01-sets-and-set-operations.md))*
- $A \times B$ holds **ordered** pairs, so $(a,b) \ne (b,a)$ and $A\times B \ne B\times A$ in general. *([2.1](lessons/02-01-sets-and-set-operations.md))*
- "Prove $A = B$" is **two** proofs. Showing only $A \subseteq B$ leaves $B$ possibly larger. *([2.1](lessons/02-01-sets-and-set-operations.md))*
- Symmetric + transitive does **not** give reflexive for free — an element related to nothing is left out. Check reflexivity on its own. *([2.2](lessons/02-02-relations-equivalence-and-order.md))*
- Antisymmetric is not "not symmetric": equality is both. *([2.2](lessons/02-02-relations-equivalence-and-order.md))*
- Equivalence classes are identical or disjoint — never partially overlapping. *([2.2](lessons/02-02-relations-equivalence-and-order.md))*
- Injective and surjective are **independent**, and the declared codomain decides surjectivity: $e^x$ is not onto $\mathbb R$ but is a bijection onto $(0,\infty)$. *([2.3](lessons/02-03-functions-and-cardinality.md))*
- The **preimage** $f^{-1}(B)$ is defined for every function; only the inverse *function* $f^{-1}$ needs a bijection. *([2.3](lessons/02-03-functions-and-cardinality.md))*
- "Same size" for infinite sets means a bijection exists, full stop — "it skips numbers, so it's smaller" is finite intuition that simply fails. *([2.3](lessons/02-03-functions-and-cardinality.md))*

### Counting

- Sum vs. product: buckets **add** ("a coffee or a tea"), stages **multiply** ("a drink then a pastry"). Ask which you're doing before touching a number. *([3.1](lessons/03-01-counting-rules-permutations-combinations.md))*
- "Independent stages" constrains the *count* of options, not *which* options — $P(n,k)$ is still a product rule even though the pool shrinks. *([3.1](lessons/03-01-counting-rules-permutations-combinations.md))*
- $P(n,k)$ and $\binom{n}{k}$ are one formula, not two: $\binom{n}{k} = P(n,k)/k!$. Ask "would relabelling the chosen items first/second/third change the outcome?" *([3.1](lessons/03-01-counting-rules-permutations-combinations.md))*
- The binomial exponents are $x^k y^{\,n-k}$ — they sum to $n$, never $x^k y^k$. *([3.2](lessons/03-02-binomial-theorem-and-identities.md))*
- Let the substitution carry the sign: the term is $\binom{n}{k}x^k(-y)^{\,n-k}$, so an even power eats the minus. Don't tack signs on afterward. *([3.2](lessons/03-02-binomial-theorem-and-identities.md))*
- Subtracting all three pairwise overlaps removes the triple one time too many — **add $\lvert A\cap B\cap C\rvert$ back**. The classic inclusion–exclusion slip. *([3.3](lessons/03-03-inclusion-exclusion-and-pigeonhole.md))*
- In a divisibility sieve, overlaps are **lcm** counts: use $\operatorname{lcm}(4,6) = 12$, not $24$. Products equal lcms only for coprime numbers. *([3.3](lessons/03-03-inclusion-exclusion-and-pigeonhole.md), [5.2](lessons/05-02-graphs-paths-connectivity-euler-hamilton.md))*
- Pigeonhole gives existence, never identity — it never tells you *which* box is full. *([3.3](lessons/03-03-inclusion-exclusion-and-pigeonhole.md))*
- The generalized bound is $\lceil n/k\rceil$, rounded **up**: $10$ pigeons in $3$ boxes forces a box with $4$, not $3.33$. *([3.3](lessons/03-03-inclusion-exclusion-and-pigeonhole.md))*
- Complementary counting fails silently if you mis-measure $U$ — sanity-check $\lvert A\rvert + \lvert A^c\rvert = \lvert U\rvert$. *([3.3](lessons/03-03-inclusion-exclusion-and-pigeonhole.md))*

### Number theory and modular arithmetic

- $a \mid b$ is a **statement**, not the fraction $b/a$, and the divisor sits on the **left**: $3 \mid 12$ true, $12 \mid 3$ false. *([4.1](lessons/04-01-divisibility-and-primes.md))*
- $1$ is excluded from the primes on purpose — otherwise FTA's uniqueness dies, since you could pad any factorization with $1$s. *([4.1](lessons/04-01-divisibility-and-primes.md))*
- You never need factorizations to get a gcd; Euclid is far faster and works on numbers you couldn't factor at all. *([4.2](lessons/04-02-euclid-gcd-and-bezout.md))*
- Bézout's $x, y$ are **not unique** — shifting by $(b/d, -a/d)$ gives another solution. The algorithm returns one of infinitely many. *([4.2](lessons/04-02-euclid-gcd-and-bezout.md))*
- $ax + by = 1$ says $a$ and $b$ are **coprime**, not that either equals $1$. *([4.2](lessons/04-02-euclid-gcd-and-bezout.md))*
- There is no division in $\mathbb Z_n$ — only multiplication by $a^{-1}$, which exists **only** when $\gcd(a,n) = 1$. $2x \equiv 1 \pmod 4$ has no solution. *([4.3](lessons/04-03-modular-arithmetic-and-congruences.md))*
- Reduce the **base** mod $n$; the **exponent** obeys Fermat/Euler and collapses mod $p-1$, not mod $p$. *([4.3](lessons/04-03-modular-arithmetic-and-congruences.md))*
- Cancellation is conditional: $ka \equiv kb \pmod n$ gives $a \equiv b$ only when $\gcd(k,n) = 1$. *([4.3](lessons/04-03-modular-arithmetic-and-congruences.md))*

### Recurrences

- A recurrence without initial conditions solves nothing — an order-$k$ relation needs exactly $k$ seeds, no more and no fewer. *([5.1](lessons/05-01-recurrence-relations.md))*
- A double root does **not** give $c_1 r^n + c_2 r^n$ (that's one constant in disguise). It needs the $n\,r^n$ partner. The number-one error here. *([5.1](lessons/05-01-recurrence-relations.md))*
- "Homogeneous" is a real restriction: a stray $+3$ means solving the homogeneous part first and then hunting a particular solution. *([5.1](lessons/05-01-recurrence-relations.md))*
- Unrolling is a heuristic — three matching terms can lie. Always close with induction. *([5.1](lessons/05-01-recurrence-relations.md))*

### Graphs, trees, coloring

- **Euler is about edges; Hamilton is about vertices.** Neither implies the other, and no simple degree rule decides Hamilton. *([5.2](lessons/05-02-graphs-paths-connectivity-euler-hamilton.md))*
- Even degrees alone don't give an Euler circuit — **connectivity** is doing real work (two disjoint triangles fail). *([5.2](lessons/05-02-graphs-paths-connectivity-euler-hamilton.md))*
- A walk may repeat vertices; a **path** may not, and a cycle repeats only its start/end. Don't call a revisiting route a path. *([5.2](lessons/05-02-graphs-paths-connectivity-euler-hamilton.md))*
- "Connected with $n-1$ edges" is not weaker than "tree" — any **two** of {connected, acyclic, $n-1$ edges} force the third. *([5.3](lessons/05-03-trees-and-graph-coloring.md))*
- Triangle-free does **not** mean 2-colorable: the forbidden thing is an odd cycle of *any* length, and $C_5$ needs three colors. *([5.3](lessons/05-03-trees-and-graph-coloring.md))*
- More edges doesn't mean bigger $\chi$ — $K_{100,100}$ has ten thousand edges and $\chi = 2$. Cliques force colors up, raw edge count doesn't. *([5.3](lessons/05-03-trees-and-graph-coloring.md))*
