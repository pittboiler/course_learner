# Discrete Math for Beginners · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course is four small languages that keep showing up together: **logic**
(claims you can judge true or false), **sets** (collections you can combine and
count), **counting** (how many ways, without listing), and **number sense mod
$n$** (keep the remainder, throw away the rest) — plus the first two real proof
moves, direct and induction. Mid-problem, the three things you'll actually come
back here for are the truth table for $P \to Q$, the "which count do I use?"
table, and the handshake lemma. The heavier treatment of every topic below lives
in the Tier 0 course `discrete-mathematics`; where this course deliberately stops
short, the entry says so.

## Notation

Note one clash the course lives with: $P$ means a **proposition** in Module 1, a
**statement about $n$** in an induction ($P(n)$), and the **permutation count**
$P(n,k)$ in Module 3. Context always settles it — the permutation one has two
arguments.

| Symbol | Means | First used |
|---|---|---|
| $P$, $Q$ | propositions — sentences that are definitely true or definitely false | [1.1](lessons/01-01-statements-connectives-truth-tables.md) |
| $\land$, $\lor$, $\lnot$ | and (needs both) · or (needs at least one, both allowed) · not (flips) | [1.1](lessons/01-01-statements-connectives-truth-tables.md) |
| $P \to Q$ | "if $P$ then $Q$" — a promise, broken only when $P$ holds and $Q$ fails | [1.1](lessons/01-01-statements-connectives-truth-tables.md) |
| $\equiv$ | logically equivalent — identical truth-table columns, every row | [1.1](lessons/01-01-statements-connectives-truth-tables.md) |
| $x \in A$, $x \notin A$ | membership: is this one thing inside the set, yes or no | [1.2](lessons/01-02-sets-operations-quantifiers.md) |
| $A \subseteq B$ | subset — every element of $A$ is also in $B$ ($A$ sits inside $B$) | [1.2](lessons/01-02-sets-operations-quantifiers.md) |
| $\cup$, $\cap$, $\setminus$ | union (either) · intersection (both) · difference ($A$ with $B$'s stuff stripped out) | [1.2](lessons/01-02-sets-operations-quantifiers.md) |
| $U$, $A^{c}$ | the universe under discussion, and everything in it outside $A$ | [1.2](lessons/01-02-sets-operations-quantifiers.md) |
| $\varnothing$ | the empty set — zero elements | [1.2](lessons/01-02-sets-operations-quantifiers.md) |
| $\lvert A\rvert$ | how many elements $A$ has | [1.2](lessons/01-02-sets-operations-quantifiers.md) |
| $\mathcal{P}(S)$ | power set — the set of **all** subsets of $S$, $\varnothing$ and $S$ included | [1.2](lessons/01-02-sets-operations-quantifiers.md) |
| $A \times B$ | Cartesian product — every ordered pair, first slot from $A$, second from $B$ | [1.2](lessons/01-02-sets-operations-quantifiers.md) |
| $\forall$, $\exists$ | for all (a giant AND) · there exists (a giant OR) | [1.2](lessons/01-02-sets-operations-quantifiers.md) |
| $(a,b)$ | ordered pair — order matters, so $(1,2) \neq (2,1)$ | [2.1](lessons/02-01-relations-and-functions.md) |
| $R$, $a\,R\,b$ | a relation, and "the pair $(a,b)$ is in it" | [2.1](lessons/02-01-relations-and-functions.md) |
| $f : A \to B$ | a function with domain $A$ and codomain $B$ | [2.1](lessons/02-01-relations-and-functions.md) |
| $\sim$, $[a]$ | an equivalence relation, and the class of everything "the same as" $a$ | [2.1](lessons/02-01-relations-and-functions.md) |
| $\mathbb{Z}$, $\mathbb{R}$ | the integers · the real numbers | [2.1](lessons/02-01-relations-and-functions.md) |
| $a \mid b$, $a \nmid b$ | "$a$ divides $b$" — a true/false **statement**, not the fraction $a/b$ | [2.2](lessons/02-02-first-proof-direct-and-induction.md) |
| $P(n)$, $P(k)$ | the claim being proved, at a specific $n$ (induction) | [2.2](lessons/02-02-first-proof-direct-and-induction.md) |
| $\blacksquare$ | end of proof | [2.2](lessons/02-02-first-proof-direct-and-induction.md) |
| $n!$ | factorial — the number of ways to line up $n$ distinct things ($0! = 1$) | [3.1](lessons/03-01-counting-rules-and-permutations.md) |
| $P(n,k)$ | permutations — **ordered** picks of $k$ from $n$, no repeats | [3.1](lessons/03-01-counting-rules-and-permutations.md) |
| $\binom{n}{k}$ | "$n$ choose $k$" — **unordered** picks of $k$ from $n$, no repeats | [3.2](lessons/03-02-combinations-and-clever-counts.md) |
| $\lceil x\rceil$ | round **up** to a whole number ($\lceil 8.33\rceil = 9$) | [3.2](lessons/03-02-combinations-and-clever-counts.md) |
| $a \bmod n$ | the remainder of $a$ after dividing by $n$ — a **number** in $0,\dots,n-1$ | [4.1](lessons/04-01-divisibility-parity-modular-arithmetic.md) |
| $a \equiv b \pmod{n}$ | $a$ and $b$ sit at the same clock position — a **statement**, not a value | [4.1](lessons/04-01-divisibility-parity-modular-arithmetic.md) |
| $G = (V,E)$ | a graph: its vertices (dots) and its edges (lines) | [4.2](lessons/04-02-a-taste-of-graphs.md) |
| $\{u,v\}$ | an edge — an **unordered** pair, so $\{u,v\}$ and $\{v,u\}$ are the same edge | [4.2](lessons/04-02-a-taste-of-graphs.md) |
| $\deg(v)$ | degree — how many edges stick out of vertex $v$ | [4.2](lessons/04-02-a-taste-of-graphs.md) |

## Definitions

### Proposition

A sentence that is definitely true or definitely false — no maybes, no opinions,
no questions. "$7$ is prime" qualifies; "close the door" does not.

*Introduced:* [1.1](lessons/01-01-statements-connectives-truth-tables.md)

### Conditional

"If $P$ then $Q$" is a promise: it is broken **only** when the hypothesis $P$
happens and the conclusion $Q$ fails. Every other row is true, including both
rows where $P$ is false — those are **vacuously true** (you were never called on
to deliver).

$$P \to Q \ \text{ is false exactly when } P \text{ is true and } Q \text{ is false}$$

*Introduced:* [1.1](lessons/01-01-statements-connectives-truth-tables.md)

### Converse

Swap hypothesis and conclusion. A genuinely **different** claim — it can disagree
with the original ("if prime then odd" is true-ish; "if odd then prime" dies at
$9$).

$$\text{converse of } P \to Q \ \text{ is } \ Q \to P$$

*Introduced:* [1.1](lessons/01-01-statements-connectives-truth-tables.md)

### Contrapositive

Swap **and** negate both. Logically equivalent to the original — same truth value
in every row, which is why proving it counts as proving the original.

$$\lnot Q \to \lnot P \ \equiv\ P \to Q$$

*Introduced:* [1.1](lessons/01-01-statements-connectives-truth-tables.md)

### Set

An unordered bag of distinct things — no repeats, no order. The only question you
can ask it is "is this in you?". Written by **listing** ($A = \{1,2,3\}$) or by
**set-builder** rule ($A = \{\,x : x \text{ is a whole number},\ 1 \le x \le 3\,\}$).

*Introduced:* [1.2](lessons/01-02-sets-operations-quantifiers.md)

### Power set

All the subsets of $S$, collected into one set. Each element is independently in
or out, which is where the $2^{n}$ comes from.

$$\mathcal{P}(S) = \{\,T : T \subseteq S\,\}, \qquad \lvert\mathcal{P}(S)\rvert = 2^{\lvert S\rvert}$$

*Introduced:* [1.2](lessons/01-02-sets-operations-quantifiers.md)

### Cartesian product

Every possible way to pick a first thing from $A$ and a second from $B$ — the
grid of all pairings, and the room every relation lives in.

$$A \times B = \{\,(a,b) : a \in A,\ b \in B\,\}, \qquad \lvert A\times B\rvert = \lvert A\rvert\,\lvert B\rvert$$

*Introduced:* [1.2](lessons/01-02-sets-operations-quantifiers.md)

### Quantifiers

They turn an open sentence into a claim about a whole set. "For all" is a giant
AND — one counterexample kills it. "There exists" is a giant OR — one witness
makes it, and killing it means ruling out everything.

$$\forall x \in U,\ P(x) \qquad\qquad \exists x \in U,\ P(x)$$

*Introduced:* [1.2](lessons/01-02-sets-operations-quantifiers.md)

### Relation

A rule for keeping some pairs of the grid and throwing the rest away — nothing
fancier than a subset of $A \times B$.

$$R \subseteq A \times B, \qquad a\,R\,b \iff (a,b) \in R$$

*Introduced:* [2.1](lessons/02-01-relations-and-functions.md)

### Function

A relation with one discipline imposed: **every input gets exactly one output** —
none left unpaired, none pointing two places. A vending machine, not a lottery.

$$f : A \to B \ \text{ assigns to each } a \in A \text{ exactly one } b = f(a) \in B$$

*Introduced:* [2.1](lessons/02-01-relations-and-functions.md)

### Injective

One-to-one: different inputs never share an output — no collisions.

$$f(a_1) = f(a_2) \ \Rightarrow\ a_1 = a_2$$

*Introduced:* [2.1](lessons/02-01-relations-and-functions.md)

### Surjective

Onto: every element of the codomain actually gets hit — no output wasted.

$$\forall b \in B,\ \exists a \in A \text{ with } f(a) = b$$

*Introduced:* [2.1](lessons/02-01-relations-and-functions.md)

### Bijective

Both injective and surjective — a perfect pairing of $A$ with $B$, one partner
each.

*Introduced:* [2.1](lessons/02-01-relations-and-functions.md)

### Equivalence relation

Math's formal way of saying "the same for my purposes." A relation on a set that
is reflexive, symmetric, and transitive — and any such relation automatically
sorts the set into bins.

$$a \sim a \quad\text{(reflexive)}, \qquad a \sim b \Rightarrow b \sim a \quad\text{(symmetric)}, \qquad a \sim b \text{ and } b \sim c \Rightarrow a \sim c \quad\text{(transitive)}$$

*Introduced:* [2.1](lessons/02-01-relations-and-functions.md)

### Equivalence class

The bin: everything considered the same as $a$. The classes are disjoint and
cover the whole set (a **partition**) — every element lands in exactly one.

$$[a] = \{\,x \in A : x \sim a\,\}$$

*Introduced:* [2.1](lessons/02-01-relations-and-functions.md)

### Even and odd

"Even" in a proof is not a vibe — it is the string "$= 2k$ for some integer $k$."
Every integer is exactly one of the two.

$$n \text{ even} \iff n = 2k, \qquad n \text{ odd} \iff n = 2k+1 \quad (k \in \mathbb{Z})$$

*Introduced:* [2.2](lessons/02-02-first-proof-direct-and-induction.md)

### Divides

$b$ is a whole number of copies of $a$ — nothing left over. A true/false claim,
never a fraction.

$$a \mid b \iff b = a\,m \ \text{ for some integer } m$$

*Introduced:* [2.2](lessons/02-02-first-proof-direct-and-induction.md)

### Direct proof

Replace the words with their definitions, do honest algebra, recognize a
definition again on the other side. That rhythm is nearly every direct proof.

*Introduced:* [2.2](lessons/02-02-first-proof-direct-and-induction.md)

### Mathematical induction

Tip the first domino, then guarantee that any fallen domino topples the next —
and all of them fall, without your ever touching domino 8,000.

$$\text{If } P(1) \text{ and } \big(P(k) \Rightarrow P(k+1) \text{ for all } k \ge 1\big), \text{ then } P(n) \text{ for all } n \ge 1$$

*Introduced:* [2.2](lessons/02-02-first-proof-direct-and-induction.md)

### Permutation

An **ordered** selection with no repeats — fill $k$ labelled slots from $n$
distinct objects, crossing off as you go. Gold-silver-bronze differs from
silver-gold-bronze.

$$P(n,k) = n(n-1)\cdots(n-k+1) = \frac{n!}{(n-k)!}$$

*Introduced:* [3.1](lessons/03-01-counting-rules-and-permutations.md)

### Combination

An **unordered** selection with no repeats — a committee, a hand, a subset. It is
a permutation with the $k!$ internal shuffles divided back out.

$$\binom{n}{k} = \frac{n!}{k!\,(n-k)!} = \frac{P(n,k)}{k!} \qquad (0 \le k \le n)$$

*Introduced:* [3.2](lessons/03-02-combinations-and-clever-counts.md)

### Pigeonhole principle

More pigeons than holes forces a doubled-up hole — no arrangement escapes it, and
no cleverness helps.

$$N \text{ objects into } n \text{ boxes} \ \Rightarrow\ \text{some box holds} \ \ge \left\lceil N/n \right\rceil \ \text{objects}$$

*Introduced:* [3.2](lessons/03-02-combinations-and-clever-counts.md)

### Quotient–remainder theorem

Dividing by $n$ always gives exactly one answer, with the remainder pinned into
$0,1,\dots,n-1$ — even for negative $a$.

$$a = nq + r \ \text{ with } \ 0 \le r < n, \qquad q, r \text{ unique}, \qquad r = a \bmod n$$

*Introduced:* [4.1](lessons/04-01-divisibility-parity-modular-arithmetic.md)

### Congruence mod n

$a$ and $b$ leave the same remainder — they sit at the same clock position. It is
the equivalence relation of Lesson 2.1 made concrete, and its classes are exactly
the $n$ remainders.

$$a \equiv b \pmod{n} \iff n \mid (a-b)$$

*Introduced:* [4.1](lessons/04-01-divisibility-parity-modular-arithmetic.md)

### Graph

The barest model of "things and the connections between them": a dot per thing, a
line per connection. No geometry, no distances — only who is joined to whom.

$$G = (V,E), \qquad \text{each edge an unordered pair } \{u,v\} \text{ of distinct vertices}$$

*Introduced:* [4.2](lessons/04-02-a-taste-of-graphs.md)

### Path and cycle

A path is a walk that never revisits a vertex; a cycle is such a walk that
returns to where it started. Wandering $A, B, A$ is a walk, not a path.

$$\text{path } v_0, v_1, \dots, v_k \ \text{(distinct, consecutive pairs adjacent)}, \qquad \text{cycle } v_0, \dots, v_k, v_0 \ (k \ge 2)$$

*Introduced:* [4.2](lessons/04-02-a-taste-of-graphs.md)

### Handshake lemma

Add up everyone's degree and you have counted every edge twice, once at each end.
So the degree sum is always even, and always exactly twice the edge count.

$$\sum_{v \in V} \deg(v) = 2\,\lvert E\rvert$$

*Introduced:* [4.2](lessons/04-02-a-taste-of-graphs.md)

## Formulas and rules

### The truth tables

Everything in Module 1 is read off these. With $n$ basic propositions there are
$2^{n}$ rows, and any compound statement is fully determined by filling in its
column.

| $P$ | $Q$ | $\lnot P$ | $P \land Q$ | $P \lor Q$ | $P \to Q$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| T | T | F | T | T | T |
| T | F | F | F | T | **F** |
| F | T | T | F | T | T |
| F | F | T | F | F | T |

$\lor$ is **inclusive** — "both" counts as true. The single **F** in the last
column is the entire content of the conditional.

*From* [1.1](lessons/01-01-statements-connectives-truth-tables.md)

### Logical equivalences worth knowing cold

$$\lnot(P \land Q) \equiv \lnot P \lor \lnot Q, \qquad \lnot(P \lor Q) \equiv \lnot P \land \lnot Q \qquad \text{(De Morgan)}$$
$$P \to Q \ \equiv\ \lnot P \lor Q \ \equiv\ \lnot Q \to \lnot P \qquad \text{(implication, and its contrapositive)}$$
$$\lnot(P \to Q) \ \equiv\ P \land \lnot Q \qquad \text{(negating an if–then gives an AND, never another if–then)}$$
$$\lnot\big(\forall x,\ P(x)\big) \equiv \exists x,\ \lnot P(x), \qquad \lnot\big(\exists x,\ P(x)\big) \equiv \forall x,\ \lnot P(x)$$

Negation is a machine: push the $\lnot$ inward, flipping and-to-or and
for-all-to-there-exists at every step, until it lands on the atoms.

*From* [1.1](lessons/01-01-statements-connectives-truth-tables.md) *and* [1.2](lessons/01-02-sets-operations-quantifiers.md)

### Set operations and their logic twins

| Set move | Definition | Logic twin |
|---|---|---|
| $A \cup B$ | $\{\,x : x \in A \text{ or } x \in B\,\}$ | $\lor$ |
| $A \cap B$ | $\{\,x : x \in A \text{ and } x \in B\,\}$ | $\land$ |
| $A \setminus B$ | $\{\,x : x \in A \text{ and } x \notin B\,\}$ | $\land \lnot$ |
| $A^{c}$ | $U \setminus A = \{\,x \in U : x \notin A\,\}$ | $\lnot$ |
| $A \subseteq B$ | for every $x$: $x \in A \to x \in B$ | $\to$ |

De Morgan transfers verbatim, and the Venn picture is the proof:

$$(A \cup B)^{c} = A^{c} \cap B^{c}, \qquad (A \cap B)^{c} = A^{c} \cup B^{c}$$

*From* [1.2](lessons/01-02-sets-operations-quantifiers.md)

### Sizes of built sets

| Object | Size | Why |
|---|---|---|
| $\mathcal{P}(S)$ | $2^{\lvert S\rvert}$ | each element independently in or out |
| $A \times B$ | $\lvert A\rvert\,\lvert B\rvert$ | multiplication rule: pick first, then second |
| $A \cup B$, disjoint | $\lvert A\rvert + \lvert B\rvert$ | addition rule |
| $A \cup B$, general | $\lvert A\rvert + \lvert B\rvert - \lvert A \cap B\rvert$ | inclusion–exclusion: the overlap got counted twice |
| "neither" in $U$ | $\lvert U\rvert - \lvert A \cup B\rvert$ | complement of the union |

Inclusion–exclusion for **three or more** sets is deferred — see
`discrete-mathematics` 3.3.

*From* [1.2](lessons/01-02-sets-operations-quantifiers.md), [3.1](lessons/03-01-counting-rules-and-permutations.md) *and* [3.2](lessons/03-02-combinations-and-clever-counts.md)

### Which count do I use?

Ask two questions and read the cell. **"And" (build one outcome from stages) →
multiply. "Or" (disjoint scenarios) → add.**

| Ordered? | Repeats allowed? | Count of $k$ picks from $n$ |
|---|---|---|
| yes | yes | $n^{k}$ |
| yes | no | $P(n,k) = \dfrac{n!}{(n-k)!}$ |
| no | no | $\binom{n}{k} = \dfrac{n!}{k!\,(n-k)!}$ |
| no | yes | $\binom{n+k-1}{k}$ — **not covered in this course**; see `discrete-mathematics` 3.1 |

Litmus test for the top two rows against the third: *would swapping two chosen
items give a different outcome?* Password, podium, sequence, job titles →
permutation. Committee, hand, subset, topping list → combination.

*From* [3.1](lessons/03-01-counting-rules-and-permutations.md) *and* [3.2](lessons/03-02-combinations-and-clever-counts.md)

### Factorials and small binomial coefficients

| $n$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
|---|---|---|---|---|---|---|---|---|---|
| $n!$ | $1$ | $1$ | $2$ | $6$ | $24$ | $120$ | $720$ | $5040$ | $40320$ |

Pascal's triangle — row $n$, entry $k$, is $\binom{n}{k}$; every interior entry is
the sum of the two above it:

| $n$ | $\binom{n}{0}$ | $\binom{n}{1}$ | $\binom{n}{2}$ | $\binom{n}{3}$ | $\binom{n}{4}$ | $\binom{n}{5}$ | $\binom{n}{6}$ |
|---|---|---|---|---|---|---|---|
| $0$ | $1$ | | | | | | |
| $1$ | $1$ | $1$ | | | | | |
| $2$ | $1$ | $2$ | $1$ | | | | |
| $3$ | $1$ | $3$ | $3$ | $1$ | | | |
| $4$ | $1$ | $4$ | $6$ | $4$ | $1$ | | |
| $5$ | $1$ | $5$ | $10$ | $10$ | $5$ | $1$ | |
| $6$ | $1$ | $6$ | $15$ | $20$ | $15$ | $6$ | $1$ |

*From* [3.1](lessons/03-01-counting-rules-and-permutations.md) *and* [3.2](lessons/03-02-combinations-and-clever-counts.md)

### Binomial-coefficient identities

$$\binom{n}{k} = \binom{n}{n-k} \qquad \text{(choosing whom to take in = choosing whom to leave out)}$$
$$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k} \qquad \text{(Pascal: does the special item get in, or not?)}$$
$$(x+y)^{n} = \sum_{k=0}^{n}\binom{n}{k}x^{k}y^{n-k}, \qquad \sum_{k=0}^{n}\binom{n}{k} = 2^{n}$$
$$P(n,k) = k!\,\binom{n}{k}, \qquad \binom{n}{0} = \binom{n}{n} = 1, \qquad \binom{n}{1} = n$$

**Always cancel before multiplying:** $\binom{n}{k} = \dfrac{n(n-1)\cdots(n-k+1)}{k!}$
uses only $k$ factors on top. $\binom{100}{2} = \dfrac{100 \cdot 99}{2} = 4950$ —
no factorial of 100 anywhere.

*From* [3.2](lessons/03-02-combinations-and-clever-counts.md)

### Sums you're expected to recognize

$$1 + 2 + \cdots + n = \frac{n(n+1)}{2} \qquad\qquad 1 + 3 + 5 + \cdots + (2n-1) = n^{2}$$

Both are proved by induction in Lesson 2.2, and both are standard right-hand
sides for an induction exercise.

*From* [2.2](lessons/02-02-first-proof-direct-and-induction.md)

### Proof templates

| Goal | Template |
|---|---|
| direct proof of "if $P$ then $Q$" | assume $P$, replace each word by its definition, algebra, recognize the definition of $Q$ |
| prove "for all $n \ge 1$, $P(n)$" | **base case** $P(1)$ explicitly, then fix $k \ge 1$, **assume** $P(k)$, derive $P(k+1)$ — usually by peeling off the last term so the hypothesis has something to bite on |
| disprove "for all $x$, $P(x)$" | produce **one** counterexample |
| disprove "there exists $x$ with $P(x)$" | rule out every $x$ — much heavier |
| prove $\sim$ is an equivalence relation | check reflexive, symmetric, transitive, one line each; then describe the classes |
| prove something **impossible** | find a quantity that must be even (or must have a certain remainder) and show the proposal violates it |

*From* [2.2](lessons/02-02-first-proof-direct-and-induction.md), [3.2](lessons/03-02-combinations-and-clever-counts.md) *and* [4.2](lessons/04-02-a-taste-of-graphs.md)

### Modular arithmetic rules

$$a \equiv a' \ \text{ and } \ b \equiv b' \pmod{n} \ \Longrightarrow\ a + b \equiv a' + b' \ \text{ and } \ ab \equiv a'b' \pmod{n}$$

In words: **reduce first, then compute** — you may swap any number for its
remainder before adding or multiplying and get the same clock answer. Addition
and multiplication transfer; **division and cancellation do not** — witness
$2\cdot 3 \equiv 2 \cdot 0 \pmod 6$ while $3 \not\equiv 0 \pmod 6$. Modular
inverses, when they exist, are `discrete-mathematics` 4.3 and `number-theory` 2.2.

Residue facts that settle "is this possible?" questions fast:

| Fact | Use |
|---|---|
| every integer is $\equiv 0$ or $1 \pmod 2$ | parity arguments |
| $x^{2} \equiv 0$ or $1 \pmod 4$ | nothing of the form $4k+3$ is a perfect square |
| $10 \equiv 1 \pmod 9$, so $a \equiv$ its digit sum $\pmod 9$ | check digits, casting out nines |
| powers cycle mod $n$ (e.g. $7^{1},7^{2},7^{3},7^{4} \equiv 7,9,3,1 \pmod{10}$) | last-digit questions, without ever forming the big number |

*From* [4.1](lessons/04-01-divisibility-parity-modular-arithmetic.md)

### Divisibility tests

Used freely in problems and never stated in a lesson — they are all one
congruence in disguise.

| $n$ | $n \mid a$ exactly when |
|---|---|
| $2$ | last digit is even |
| $3$ | digit sum divisible by $3$ |
| $4$ | last two digits form a multiple of $4$ |
| $5$ | last digit is $0$ or $5$ |
| $6$ | divisible by both $2$ and $3$ |
| $8$ | last three digits form a multiple of $8$ |
| $9$ | digit sum divisible by $9$ |
| $10$ | last digit is $0$ |
| $11$ | alternating digit sum divisible by $11$ |

*From* [4.1](lessons/04-01-divisibility-parity-modular-arithmetic.md)

### Graph facts

$$\sum_{v \in V}\deg(v) = 2\,\lvert E\rvert \qquad\Longrightarrow\qquad \text{the number of odd-degree vertices is even}$$

| Fact | Note |
|---|---|
| $\deg(v)$ ranges over $0, 1, \dots, \lvert V\rvert - 1$ | degree $0$ (isolated) and degree $\lvert V\rvert - 1$ (joined to all) cannot both occur |
| a simple graph on $n$ vertices has at most $\binom{n}{2}$ edges | one edge per unordered pair |
| a proposed degree list with an **odd sum** is impossible | five people each shaking exactly three hands: $5 \times 3 = 15$, dead on arrival |

Trees, coloring, Euler and Hamilton paths, and connectivity are the `graph-theory`
course; `discrete-mathematics` 5.2 is the mid-point.

*From* [4.2](lessons/04-02-a-taste-of-graphs.md)

## Assumed, not taught here

This is a Foundations course with no listed prerequisites, but it does lean on
school arithmetic and algebra without re-deriving them. Where the *why* lives:

| Fact | Where it's taught |
|---|---|
| Integers, negatives, and the number line (needed for remainders of negative numbers) | [arithmetic-number-sense 1.1](../arithmetic-number-sense/lessons/01-01-place-value-and-integers.md) |
| Factors, primes, and what "divides evenly" means concretely | [arithmetic-number-sense 1.3](../arithmetic-number-sense/lessons/01-03-factors-primes-divisibility.md) |
| Rounding up / down (the $\lceil\ \rceil$ in generalized pigeonhole) | [arithmetic-number-sense 3.1](../arithmetic-number-sense/lessons/03-01-rounding-and-estimation.md) |
| Cancelling in a fraction (every $\binom{n}{k}$ computation) | [arithmetic-number-sense 2.1](../arithmetic-number-sense/lessons/02-01-fractions.md) |
| Expanding products, exponent rules, $n^{k}$ | [algebra-foundations 3.1](../algebra-foundations/lessons/03-01-exponents-and-polynomial-operations.md) |
| Factoring out a common term (the pivot in every inductive step) | [algebra-foundations 3.2](../algebra-foundations/lessons/03-02-factoring.md) |
| Solving a linear equation for a variable (used to show $2x+1$ is surjective) | [algebra-foundations 1.2](../algebra-foundations/lessons/01-02-linear-equations-and-inequalities.md) |
| Squares are never negative (used to show $x^{2}$ is not surjective onto $\mathbb{R}$) | [algebra-foundations 4.1](../algebra-foundations/lessons/04-01-quadratic-equations.md) |
| Function notation $f(x)$, domain and range as school algebra teaches them | [algebra-foundations 2.1](../algebra-foundations/lessons/02-01-the-function-concept.md) |
| The Pythagorean theorem (the $\sqrt{2}$ diagonal in the pigeonhole geometry problem) | [geometry 2.3](../geometry/lessons/02-03-pythagorean-theorem.md) |
| Sigma notation $\sum$ (handshake lemma, binomial theorem) | [precalculus 3.2](../precalculus/lessons/03-02-sequences-and-sigma-notation.md) |

## Pitfalls

### Conditionals

- A false hypothesis makes $P \to Q$ **true**, not false — a promise you were never called on to keep is unbroken. The only false row is true-hypothesis, false-conclusion. *([1.1](lessons/01-01-statements-connectives-truth-tables.md))*
- The converse is not a restatement — it is an independent claim that can disagree. Confusing a statement with its converse is the single most common logic error. *([1.1](lessons/01-01-statements-connectives-truth-tables.md))*
- Negating "if $P$ then $Q$" gives $P \land \lnot Q$ — an AND, not another if–then. *([2.2](lessons/02-02-first-proof-direct-and-induction.md))*

### Negation

- $\lnot(P \land Q)$ is $\lnot P \lor \lnot Q$, not $\lnot P \land \lnot Q$: the **connective changes**, not just the pieces. Negating a guard condition wrongly is how security holes ship. *([1.1](lessons/01-01-statements-connectives-truth-tables.md))*
- When negating a quantified statement, flip **every** quantifier — don't stop halfway. *([1.2](lessons/01-02-sets-operations-quantifiers.md))*

### Sets and quantifiers

- $\in$ and $\subseteq$ answer different questions: $3 \in \{3,4\}$ but $\{3\} \subseteq \{3,4\}$. Mixing them is a type error. *([1.2](lessons/01-02-sets-operations-quantifiers.md))*
- $\varnothing$ has $0$ elements; $\{\varnothing\}$ has $1$. That's why $\lvert\mathcal{P}(\varnothing)\rvert = 2^{0} = 1$. *([1.2](lessons/01-02-sets-operations-quantifiers.md))*
- Quantifier **order** matters: "$\forall x\, \exists y$" (a possibly different $y$ per $x$) is not "$\exists y\, \forall x$" (one $y$ for everybody). *([1.2](lessons/01-02-sets-operations-quantifiers.md))*

### Relations and functions

- Not every pairing rule is a function: leaving an input **unpaired**, or giving it **two** outputs, disqualifies it. "Exactly one" is the whole rule. *([2.1](lessons/02-01-relations-and-functions.md))*
- Injective and surjective are independent — one is about inputs not colliding, the other about outputs all being used. You can pass either and fail the other. *([2.1](lessons/02-01-relations-and-functions.md))*
- Reflexive plus symmetric does **not** give transitive for free ("friend of" is the standing counterexample). Check all three. *([2.1](lessons/02-01-relations-and-functions.md))*

### Proof

- The inductive hypothesis is not circular: you assume *one* case $P(k)$ to earn *the next*, never $P(n)$ for all $n$. *([2.2](lessons/02-02-first-proof-direct-and-induction.md))*
- Never skip the base case — dominoes toppling each other is useless if none is ever tipped. *([2.2](lessons/02-02-first-proof-direct-and-induction.md))*
- Checking $P(1), P(2), P(3)$ proves $P(1), P(2), P(3)$ and nothing more. A pattern can hold for forty integers and die at the forty-first. *([2.2](lessons/02-02-first-proof-direct-and-induction.md))*
- Unpack definitions **literally**. The proof starts the moment you write "$= 2k$ for some integer $k$." *([2.2](lessons/02-02-first-proof-direct-and-induction.md))*

### Counting

- Multiplying alternatives is the classic wrong turn: disjoint cases **add**. Ask whether you're building one outcome from parts, or choosing between scenarios. *([3.1](lessons/03-01-counting-rules-and-permutations.md))*
- Order matters for permutations and doesn't for combinations — they differ by exactly $k!$. Titles → $P(n,k)$; untitled committee → $\binom{n}{k}$. *([3.1](lessons/03-01-counting-rules-and-permutations.md), [3.2](lessons/03-02-combinations-and-clever-counts.md))*
- Don't compute the giant factorials in $\frac{n!}{(n-k)!}$ or $\frac{n!}{k!(n-k)!}$ — both are short falling products. $P(100,2) = 100 \times 99$. *([3.1](lessons/03-01-counting-rules-and-permutations.md), [3.2](lessons/03-02-combinations-and-clever-counts.md))*
- Adding $\lvert A\rvert + \lvert B\rvert$ for "at least one of $A$, $B$" double-counts the overlap — subtract $\lvert A \cap B\rvert$ once. *([3.2](lessons/03-02-combinations-and-clever-counts.md))*
- For "at least one" questions, counting the **complement** and subtracting is usually shorter than the direct count. *([3.1](lessons/03-01-counting-rules-and-permutations.md))*

### Remainders and divisibility

- Remainders are never negative: $(-7) \bmod 5 = 3$, not $-2$. The theorem pins $r$ to $0 \le r < n$. *([4.1](lessons/04-01-divisibility-parity-modular-arithmetic.md))*
- $a \equiv b \pmod n$ means *same remainder*, not equality — $17 \equiv 5 \pmod{12}$ while $17 \neq 5$. *([4.1](lessons/04-01-divisibility-parity-modular-arithmetic.md))*
- You cannot cancel a common factor on a clock the way you can in $\mathbb{Z}$. Addition and multiplication transfer; division needs care. *([4.1](lessons/04-01-divisibility-parity-modular-arithmetic.md))*
- $a \mid b$ is a statement (true or false); $a/b$ is a number. Don't let them swap places in a line of algebra. *([2.2](lessons/02-02-first-proof-direct-and-induction.md), [4.1](lessons/04-01-divisibility-parity-modular-arithmetic.md))*

### Graphs

- Degree is **local** — it counts immediate neighbors only. A degree-$100$ vertex says nothing about long paths. *([4.2](lessons/04-02-a-taste-of-graphs.md))*
- Not every wished-for degree list exists: sum the degrees and check parity first. *([4.2](lessons/04-02-a-taste-of-graphs.md))*
- Paths and cycles need **distinct** vertices — $A, B, A$ is a walk, not a path. *([4.2](lessons/04-02-a-taste-of-graphs.md))*
