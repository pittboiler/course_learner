# How to Read & Write Proofs · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course is technique, not formula. So the thing you look up mid-problem is
the **shape** of an argument: what you're allowed to assume, what you have to
earn, and what the last line has to say. Below: the logical symbols, the handful
of definitions the arguments run on, every proof pattern written out as a
skeleton you can copy, and a "which weapon" table for when the front door is
jammed.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $P, Q, R$ | placeholders for whole statements, not numbers | [1.1](lessons/01-01-statements-connectives-implication.md) |
| $P \land Q$ | "and" — true only when both sides are | [1.1](lessons/01-01-statements-connectives-implication.md) |
| $P \lor Q$ | "or" — always **inclusive**: true when at least one holds, both included | [1.1](lessons/01-01-statements-connectives-implication.md) |
| $\lnot P$ | "not $P$" — flips the truth value | [1.1](lessons/01-01-statements-connectives-implication.md) |
| $P \implies Q$ | "if $P$ then $Q$" — a promise broken only by $P$ true and $Q$ false | [1.1](lessons/01-01-statements-connectives-implication.md) |
| $\equiv$ | logically equivalent — same truth value in every row | [1.1](lessons/01-01-statements-connectives-implication.md) |
| $\mathrm{T}, \mathrm{F}$ | the two entries of a truth table | [1.1](lessons/01-01-statements-connectives-implication.md) |
| $\forall x$ | for every $x$ — one exception kills it | [1.2](lessons/01-02-quantifiers-order-negation.md) |
| $\exists x$ | there is at least one $x$ — one witness proves it | [1.2](lessons/01-02-quantifiers-order-negation.md) |
| $:$ after a quantifier | "such that" — separates the quantifier prefix from the claim | [1.2](lessons/01-02-quantifiers-order-negation.md) |
| $\varepsilon,\ N$ | the error tolerance and the cutoff index in a convergence statement | [1.2](lessons/01-02-quantifiers-order-negation.md) |
| $\mathbb{Z},\ \mathbb{N},\ \mathbb{R}$ | integers, naturals $\{0,1,2,\dots\}$, reals | [1.2](lessons/01-02-quantifiers-order-negation.md) |
| $a \mid b$ | "$a$ divides $b$" — a true/false **claim**, not the number $b/a$ | [2.1](lessons/02-01-direct-proof-definitions.md) |
| $\blacksquare$, $\square$ | end of proof, end of lemma — say you've arrived, don't just stop | [2.1](lessons/02-01-direct-proof-definitions.md) |
| WLOG | "without loss of generality" — the cases I skipped are relabelings of this one | [2.3](lessons/02-03-cases-and-wlog.md) |
| $\lvert x\rvert$ | absolute value — a function *defined* by a case split at $0$ | [2.3](lessons/02-03-cases-and-wlog.md) |
| $x \in A$, $x \notin A$ | $x$ is / is not a member of $A$ | [3.1](lessons/03-01-sets-and-element-method.md) |
| $A \subseteq B$ | every element of $A$ is also in $B$ | [3.1](lessons/03-01-sets-and-element-method.md) |
| $\cup,\ \cap,\ \setminus$ | union (or), intersection (and), difference (in $A$ but not $B$) | [3.1](lessons/03-01-sets-and-element-method.md) |
| $A^c$ | complement — everything in the fixed universe $U$ outside $A$ | [3.1](lessons/03-01-sets-and-element-method.md) |
| $\varnothing$ | the empty set: $x \in \varnothing$ is false for every $x$ | [3.1](lessons/03-01-sets-and-element-method.md) |
| $\iff$ | "if and only if" — both implications hold; two proofs to write | [3.1](lessons/03-01-sets-and-element-method.md) |
| $f : A \to B$ | function with domain $A$ and **declared** codomain $B$ | [3.2](lessons/03-02-functions-injective-surjective-bijective.md) |
| $f(A)$ | the image — the values actually hit, a subset of the codomain | [3.2](lessons/03-02-functions-injective-surjective-bijective.md) |
| $g \circ f$ | composition: do $f$, then $g$ | [3.2](lessons/03-02-functions-injective-surjective-bijective.md) |
| $\mathrm{id}_A$ | the identity function on $A$: $x \mapsto x$ | [3.2](lessons/03-02-functions-injective-surjective-bijective.md) |
| $f^{-1}$ | the two-sided inverse — exists exactly when $f$ is a bijection | [3.2](lessons/03-02-functions-injective-surjective-bijective.md) |
| $P(n)$ | the statement being proved, one copy per integer $n$ | [3.3](lessons/03-03-induction.md) |
| $k$ | the generic index in an inductive step (assume at $k$, earn $k+1$) | [3.3](lessons/03-03-induction.md) |

## Definitions

### Proposition

A sentence that is definitely true or definitely false — no middle, no "depends."
"$7$ is prime" qualifies; "$x > 3$" does not until $x$ is pinned down.

*Introduced:* [1.1](lessons/01-01-statements-connectives-implication.md)

### Implication

A promise, not a cause: "if $P$ happens I guarantee $Q$." The only way to catch
you breaking it is $P$ true with $Q$ false, so $P \implies Q$ is true in the
other three rows.

$$P \implies Q \;\equiv\; \lnot P \lor Q$$

*Introduced:* [1.1](lessons/01-01-statements-connectives-implication.md)

### Vacuous truth

If the hypothesis never happens, the promise was never tested, so it holds for
free. "If $2+2=5$ then the moon is cheese" is a **true** implication.

*Introduced:* [1.1](lessons/01-01-statements-connectives-implication.md)

### Converse, inverse, contrapositive

The three rearrangements of $P \implies Q$. Only one of them is the same claim.

| Name | Statement | Equivalent to the original? |
|---|---|---|
| Converse | $Q \implies P$ | **No** — a genuinely different claim |
| Inverse | $\lnot P \implies \lnot Q$ | **No** (it equals the converse) |
| Contrapositive | $\lnot Q \implies \lnot P$ | **Yes**, always |

*Introduced:* [1.1](lessons/01-01-statements-connectives-implication.md)

### Logical equivalence

Two statements that agree in every row of the truth table — interchangeable
anywhere, which is what licenses proving one instead of the other.

*Introduced:* [1.1](lessons/01-01-statements-connectives-implication.md)

### Universal quantifier

"For every $x$ in the domain, $P(x)$." An unbounded AND: a single exception
destroys it, so you prove it by arguing about an **arbitrary** $x$.

$$\forall x\, P(x)$$

*Introduced:* [1.2](lessons/01-02-quantifiers-order-negation.md)

### Existential quantifier

"For at least one $x$, $P(x)$." An unbounded OR: you prove it by handing over a
single **witness**.

$$\exists x\, P(x)$$

*Introduced:* [1.2](lessons/01-02-quantifiers-order-negation.md)

### Even and odd

An integer is even if it is exactly twice a whole number, odd if it is one more
than that. Every integer is exactly one of the two — which is what makes parity a
legal two-case split.

$$n \text{ even} \iff n = 2k,\qquad n \text{ odd} \iff n = 2k+1 \qquad (k \in \mathbb{Z})$$

*Introduced:* [2.1](lessons/02-01-direct-proof-definitions.md)

### Divisibility

"$a$ divides $b$" means $b$ is a whole number of copies of $a$ — no remainder.
Convert it to the equation before doing anything else.

$$a \mid b \iff b = ak \text{ for some } k \in \mathbb{Z}$$

*Introduced:* [2.1](lessons/02-01-direct-proof-definitions.md)

### Rational

A real number expressible as one integer over another. **Irrational** means no
such expression exists — a nonexistence claim, which is why it is contradiction
bait.

$$x \text{ rational} \iff x = \frac{p}{q},\quad p, q \in \mathbb{Z},\ q \neq 0$$

*Introduced:* [2.1](lessons/02-01-direct-proof-definitions.md)

### Exhaustive cases

A list of cases whose disjunction is always true — they miss nothing. Mandatory.
**Disjoint** (no two can hold at once) is merely good hygiene.

$$C_1 \lor C_2 \lor \cdots \lor C_k \text{ always true}$$

*Introduced:* [2.3](lessons/02-03-cases-and-wlog.md)

### Without loss of generality

A licence to prove one of two mirror-image cases — valid only when relabeling
leaves the claim itself unchanged. Test it by writing the swapped statement and
checking it is the *same* statement.

*Introduced:* [2.3](lessons/02-03-cases-and-wlog.md)

### Subset

Every element of $A$ is also in $B$. Formally a quantified implication, which is
exactly why the element method works on it.

$$A \subseteq B \iff \forall x,\ (x \in A \implies x \in B)$$

*Introduced:* [3.1](lessons/03-01-sets-and-element-method.md)

### Set equality

Two sets are equal exactly when each contains the other — so a set-equality proof
is **two** element chases, one per direction.

$$A = B \iff (A \subseteq B) \land (B \subseteq A)$$

*Introduced:* [3.1](lessons/03-01-sets-and-element-method.md)

### Injective

No two arrows collide: distinct inputs never share an output. Note the direction —
"one output per input" is just what makes $f$ a function at all.

$$\forall x_1, x_2 \in A:\ f(x_1) = f(x_2) \implies x_1 = x_2$$

*Introduced:* [3.2](lessons/03-02-functions-injective-surjective-bijective.md)

### Surjective

No target is missed — every element of the **declared codomain** is an output of
something. A $\forall\exists$ statement, so the preimage may depend on the target.

$$\forall y \in B\ \exists x \in A:\ f(x) = y$$

*Introduced:* [3.2](lessons/03-02-functions-injective-surjective-bijective.md)

### Bijective

Injective and surjective at once — a perfect pairing, each target hit exactly
once. This is what "the two sets have the same size" *means*.

*Introduced:* [3.2](lessons/03-02-functions-injective-surjective-bijective.md)

### Two-sided inverse

A function that undoes $f$ from both sides. It exists precisely when $f$ is a
bijection — surjectivity supplies existence, injectivity supplies uniqueness.

$$g \circ f = \mathrm{id}_A \ \text{ and } \ f \circ g = \mathrm{id}_B \quad\Longleftrightarrow\quad f \text{ is a bijection}$$

*Introduced:* [3.2](lessons/03-02-functions-injective-surjective-bijective.md)

### Inductive hypothesis

The assumption $P(k)$ you are handed inside the inductive step — the fallen domino
you get to lean on. It is *not* $P(k+1)$; that one you must earn.

*Introduced:* [3.3](lessons/03-03-induction.md)

### Well-ordering principle

Every nonempty subset of $\mathbb{N}$ has a least element — you cannot descend
through the naturals forever. This is what induction is secretly running on.

*Introduced:* [3.3](lessons/03-03-induction.md)

## Formulas and rules

### Truth tables

| $P$ | $Q$ | $P \land Q$ | $P \lor Q$ | $\lnot P$ | $P \implies Q$ |
|---|---|---|---|---|---|
| T | T | T | T | F | T |
| T | F | F | T | F | **F** |
| F | T | F | T | T | T |
| F | F | F | F | T | T |

$\land$ needs both, $\lor$ needs at least one, $\implies$ fails in exactly one
row. The two bottom rows of the last column are the vacuous ones.

*From* [1.1](lessons/01-01-statements-connectives-implication.md)

### Rewrite rules you can apply anywhere

$$(P \implies Q) \equiv (\lnot Q \implies \lnot P) \equiv (\lnot P \lor Q)$$
$$\lnot(P \implies Q) \equiv P \land \lnot Q$$
$$\lnot(P \land Q) \equiv \lnot P \lor \lnot Q, \qquad \lnot(P \lor Q) \equiv \lnot P \land \lnot Q$$
$$\lnot(\lnot P) \equiv P$$

Line 1 licenses proof by contrapositive. Line 2 is what contradiction assumes.
Lines 3 (De Morgan) are the same laws that reappear as set identities below.

*From* [1.1](lessons/01-01-statements-connectives-implication.md) *and* [1.2](lessons/01-02-quantifiers-order-negation.md)

### Negating a quantified statement, mechanically

$$\lnot\,\forall x\, P(x) \equiv \exists x\, \lnot P(x), \qquad \lnot\,\exists x\, P(x) \equiv \forall x\, \lnot P(x)$$

**Recipe:** walk left to right, flip every quantifier ($\forall \leftrightarrow \exists$)
keeping the order, then negate the core. If the core is an implication,
it becomes $P \land \lnot Q$ — not an implication any more. Negate a negation to
check you got it right.

| Statement | Negation |
|---|---|
| $\forall x\, \exists y: y > x$ | $\exists x\, \forall y: y \le x$ |
| $\forall \varepsilon > 0\ \exists N\ \forall n > N: \lvert a_n - L\rvert < \varepsilon$ | $\exists \varepsilon > 0\ \forall N\ \exists n > N: \lvert a_n - L\rvert \ge \varepsilon$ |
| $\forall x\, (P(x) \implies Q(x))$ | $\exists x\, (P(x) \land \lnot Q(x))$ |

The second row is convergence and its failure: to show $a_n$ does **not** converge
to $L$, exhibit one specific $\varepsilon$ and show the sequence keeps escaping
the band forever.

*From* [1.2](lessons/01-02-quantifiers-order-negation.md)

### Quantifier order

$$\forall x\, \exists y\, P(x,y) \quad\text{is \emph{not}}\quad \exists y\, \forall x\, P(x,y)$$

Left: each $x$ picks its **own** $y$. Right: **one** $y$ works for every $x$ at
once — strictly stronger, and it implies the left, never the reverse. Same-type
quantifiers do commute ($\forall\forall$, $\exists\exists$). Whenever an $\exists$
sits inside a $\forall$, ask "is this witness allowed to change?" — yes, and that
dependence is usually the whole content of the definition.

*From* [1.2](lessons/01-02-quantifiers-order-negation.md)

### Which technique to reach for

| The claim looks like | Reach for | Because |
|---|---|---|
| "$P \implies Q$" with a usable $P$ | [direct proof](#direct-proof) | you can unfold $P$ into equations and march |
| $Q$ is even/odd/prime/rational and $P$ is opaque (e.g. about $n^2$) | [contrapositive](#proof-by-contrapositive) | $\lnot Q$ hands you a formula to compute with |
| "no such thing exists", "irrational", "infinitely many" | [contradiction](#proof-by-contradiction) | there is nothing to march *toward*; assume it and break it |
| the object behaves differently in different regimes (sign, parity, $\lvert x\rvert$) | [proof by cases](#proof-by-cases) | one chain can't cover every regime |
| "there exists…", "$f$ is surjective", "an inverse exists" | [proof by construction](#proof-by-construction) | a single witness settles an $\exists$ |
| "this claim is false" / "not injective" / "not surjective" | [counterexample](#disproof-by-counterexample) | negating a $\forall$ gives an $\exists$ — produce it |
| "$A \subseteq B$" or "$A = B$" | [element method](#element-method) | subset *is* a quantified implication |
| "for all $n \ge n_0$" | [induction](#induction) | infinitely many cases, finite work |
| $P(k+1)$ breaks into unpredictable smaller pieces | [strong induction](#strong-induction) | the single predecessor isn't enough |

*From* [2.1](lessons/02-01-direct-proof-definitions.md), [2.2](lessons/02-02-contrapositive-and-contradiction.md), [2.3](lessons/02-03-cases-and-wlog.md), [3.1](lessons/03-01-sets-and-element-method.md), [3.2](lessons/03-02-functions-injective-surjective-bijective.md), [3.3](lessons/03-03-induction.md)

### Direct proof

Assume the hypothesis and walk forward; the conclusion has to fall out the far
end on its own.

$$\underbrace{\text{Assume } P.}_{\text{free}} \longrightarrow \underbrace{\text{unfold } P \text{ into equations}}_{\text{definitions}} \longrightarrow \underbrace{\text{algebra}}_{\text{forward only}} \longrightarrow \underbrace{\text{arrive at } Q.}_{\blacksquare}$$

> **Shape.** "Let $m, n$ be even integers. By definition $m = 2a$ and $n = 2b$ for
> some integers $a, b$. Then $m + n = 2(a+b)$. Let $c = a+b$, an integer; then
> $m+n = 2c$, so $m+n$ is even. $\blacksquare$"

The rhythm is **translate → algebra → translate back**. The cleverness, if any,
is only in which algebra.

*From* [2.1](lessons/02-01-direct-proof-definitions.md)

### Proof by contrapositive

Prove the equivalent statement that starts from the friendlier end. You assume
**one** thing ($\lnot Q$), derive $\lnot P$, and stop — nothing absurd happens.

$$\text{To prove } P \implies Q, \text{ prove } \lnot Q \implies \lnot P.$$

> **Shape.** "We prove the equivalent statement: if $n$ is odd then $n^2$ is odd.
> Assume $n = 2k+1$. Then $n^2 = 2(2k^2+2k)+1$, odd. This establishes the
> contrapositive, hence the claim. $\blacksquare$"

*From* [2.2](lessons/02-02-contrapositive-and-contradiction.md)

### Proof by contradiction

Assume the claim is false, reason with total honesty, and hit something
impossible. The assumption is the only thing that could have poisoned the well.

$$\text{To prove } S:\ \text{assume } \lnot S,\ \text{derive } R \land \lnot R,\ \text{conclude } S.$$

When $S$ is itself $P \implies Q$, its negation is $P \land \lnot Q$ — so you
assume **both** the hypothesis and the negated conclusion.

> **Shape.** "Suppose for contradiction $\sqrt2 = p/q$ in lowest terms. Then
> $p^2 = 2q^2$, so $p$ is even, $p = 2m$, so $q^2 = 2m^2$ and $q$ is even too —
> contradicting lowest terms. $\blacksquare$"

*From* [2.2](lessons/02-02-contrapositive-and-contradiction.md)

### Proof by cases

Partition the possibilities, prove the claim in each, then say out loud that the
cases covered everything.

$$C_1 \lor \cdots \lor C_k \text{ exhaustive}, \quad C_i \implies P \text{ for each } i \quad\Longrightarrow\quad P.$$

The stock partitions: every integer is **even or odd**; every real is $x \ge 0$ or
$x < 0$; every real is negative, zero, or positive. Decide deliberately which case
owns the boundary ($\ge$ versus $>$). Use **WLOG** only after checking the
relabeling leaves the claim unchanged, and prefer the *coarsest* partition that
works.

*From* [2.3](lessons/02-03-cases-and-wlog.md)

### Proof by construction

To settle an $\exists$, build the object and verify it. This is the surjectivity
template, the inverse-function construction, and every "such an $x$ exists" in the
course.

> **Shape.** "Let $y \in B$ be arbitrary. Set $x = \frac{y-2}{7}$, which lies in
> $\mathbb{R}$. Then $f(x) = y$. Since $y$ was arbitrary, $f$ is surjective.
> $\blacksquare$"

Two obligations, both easy to skip: the object you built must actually **lie in
the domain**, and you must **verify** it does the job.

*From* [1.2](lessons/01-02-quantifiers-order-negation.md) *and* [3.2](lessons/03-02-functions-injective-surjective-bijective.md)

### Disproof by counterexample

Negate the claim first, then produce what the negation demands. The negation of
$\forall x\, P(x)$ is $\exists x\, \lnot P(x)$ — so **one** explicit object,
fully checked, is a complete disproof.

> **Shape.** "$f(x) = x^2$ on $\mathbb{R}$ is not injective: $f(-1) = 1 = f(1)$
> while $-1 \ne 1$. It is not surjective: $y = -1$ has no preimage, since
> $x^2 \ge 0$ for every real $x$."

*From* [1.2](lessons/01-02-quantifiers-order-negation.md) *and* [3.2](lessons/03-02-functions-injective-surjective-bijective.md)

### Element method

Grab one arbitrary element and let the definitions push it across. This is the
direct proof of [3.1](lessons/03-01-sets-and-element-method.md) aimed at a
membership claim — no new machinery.

> **Shape ($\subseteq$).** "Let $x \in A \cap B$ be arbitrary. By definition of
> $\cap$, $x \in A$ and $x \in B$; in particular $x \in A$. Since $x$ was
> arbitrary, $A \cap B \subseteq A$. $\blacksquare$"
>
> **Shape ($=$).** Do it twice — once each way — and close with "both inclusions
> hold, so the sets are equal."

*From* [3.1](lessons/03-01-sets-and-element-method.md)

### Set operations, by membership

Each operation *is* a logical connective wearing set notation.

| Operation | Membership condition | Connective |
|---|---|---|
| $x \in A \cup B$ | $x \in A$ or $x \in B$ | $\lor$ |
| $x \in A \cap B$ | $x \in A$ and $x \in B$ | $\land$ |
| $x \in A \setminus B$ | $x \in A$ and $x \notin B$ | $\land \lnot$ |
| $x \in A^c$ | $x \notin A$ (inside a fixed universe $U$) | $\lnot$ |
| $x \in \varnothing$ | never | — |

*From* [3.1](lessons/03-01-sets-and-element-method.md)

### Set identities

$$(A \cup B)^c = A^c \cap B^c, \qquad (A \cap B)^c = A^c \cup B^c$$
$$A \cap (B \cup C) = (A \cap B) \cup (A \cap C), \qquad A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$$
$$A \setminus B = A \cap B^c, \qquad A \setminus (B \cup C) = (A \setminus B) \cap (A \setminus C)$$

All of these are the logical rewrite rules above, translated by $\cup = \lor$,
$\cap = \land$, ${}^c = \lnot$. You may chain them *once you have proved them*;
the foundational proof of each is double inclusion.

*From* [3.1](lessons/03-01-sets-and-element-method.md) *and* [3.2](lessons/03-02-functions-injective-surjective-bijective.md)

### Templates for the three function properties

| To prove | Start from | Produce |
|---|---|---|
| injective | arbitrary $x_1, x_2$ with $f(x_1) = f(x_2)$ | $x_1 = x_2$ |
| surjective | arbitrary $y$ in the **declared** codomain $B$ | an $x \in A$ with $f(x) = y$ (solve, then verify) |
| bijective | both of the above | often the inverse formula falls out of the surjectivity solve |
| **not** injective | — | two specific inputs sharing an output |
| **not** surjective | — | one specific target with no preimage |

Building the inverse of a bijection uses the halves for different jobs:
surjectivity says the preimage of $y$ **exists**, injectivity says it is
**unique**, so "the preimage of $y$" names one element and $f^{-1}$ is
well defined.

*From* [3.2](lessons/03-02-functions-injective-surjective-bijective.md)

### Induction

Tip the first domino, then prove that falling propagates.

$$\text{(base) } P(n_0) \quad\text{and}\quad \text{(step) } \forall k \ge n_0:\ P(k) \implies P(k+1) \quad\Longrightarrow\quad \forall n \ge n_0:\ P(n)$$

> **Shape.** "Let $P(n)$ be '$1 + \cdots + n = \tfrac{n(n+1)}{2}$'. *Base* $n=1$:
> both sides equal $1$. *Step:* fix $k \ge 1$ and assume $P(k)$; add $k+1$ to both
> sides to get $\tfrac{(k+1)(k+2)}{2}$, which is $P(k+1)$. By induction $P(n)$
> holds for all $n \ge 1$. $\blacksquare$"

The step is just a direct proof of $P(k) \implies P(k+1)$. Plant the base at the
**first $n$ that actually works** — $2^n > n^2$ starts at $n = 5$, $n! > 2^n$ at
$n = 4$.

*From* [3.3](lessons/03-03-induction.md)

### Strong induction

Same base case, beefier hypothesis: assume $P(n_0), \dots, P(k)$ all at once.

$$\text{(step) } \forall k \ge n_0:\ \big(P(n_0) \land \cdots \land P(k)\big) \implies P(k+1)$$

Reach for it when $P(k+1)$ breaks into pieces that can land **anywhere** earlier —
the flagship being "every integer $\ge 2$ is a product of primes", where
$k+1 = ab$ with $a, b$ unpredictable. Over $\mathbb{N}$, ordinary induction,
strong induction, and well-ordering are equivalent in power.

*From* [3.3](lessons/03-03-induction.md)

### Minimal counterexample

Induction wearing a contradiction jersey, and sometimes the more natural frame.

> **Shape.** "Suppose $P$ fails somewhere. By well-ordering the set of failures
> has a least member $m$. The base case rules out $m = n_0$, and the inductive
> step applied to $m-1$ manufactures a smaller failure — contradicting
> minimality. $\blacksquare$"

*From* [3.3](lessons/03-03-induction.md) *and* [2.2](lessons/02-02-contrapositive-and-contradiction.md)

### Proof-writing hygiene

- **Introduce every variable with "Let…"** before it appears: "let $k$ be the
  integer with $n = 2k$."
- **Give each witness its own name.** Two even numbers are $m = 2a$ and $n = 2b$ —
  writing $2k$ twice secretly forces $m = n$.
- **Quantify honestly:** "for *some* integer $k$" and "for *all* $k$" are
  different claims. Say which.
- **Name the technique in the first line** ("Proof by contrapositive. We prove the
  equivalent statement…") so the reader knows what the last line will be.
- **Never write the conclusion as a justified step** — signposting the goal is
  fine, using it is circular.
- **Close with $\blacksquare$**, and for a case proof close with "these cases are
  exhaustive because…".

*From* [2.1](lessons/02-01-direct-proof-definitions.md) *and* [2.3](lessons/02-03-cases-and-wlog.md)

## Assumed, not taught here

This course teaches *how to argue*; the objects it argues about come from earlier
courses. Every fact below is used without derivation somewhere in the lessons.

| Fact | Where it's taught |
|---|---|
| Integers, the number line, and $\lvert n\rvert$ as distance from $0$ | [arithmetic-number-sense 1.1](../arithmetic-number-sense/lessons/01-01-place-value-and-integers.md) |
| Primes, composites, and "every integer $> 1$ has a prime divisor" (Euclid's proof in 2.2) | [arithmetic-number-sense 1.3](../arithmetic-number-sense/lessons/01-03-factors-primes-divisibility.md) |
| Fractions in lowest terms; rationals closed under $+,-,\times$ (the $\sqrt2$ and $x+r$ proofs) | [arithmetic-number-sense 2.1](../arithmetic-number-sense/lessons/02-01-fractions.md) |
| Parity as "remainder on division by 2", and that every integer is exactly one of even/odd | [discrete-math-intro 4.1](../discrete-math-intro/lessons/04-01-divisibility-parity-modular-arithmetic.md) |
| Expanding $(2k+1)^2$, collecting terms, factoring out a $2$ — the algebra every proof here runs on | [algebra-foundations 3.1](../algebra-foundations/lessons/03-01-exponents-and-polynomial-operations.md), [3.2](../algebra-foundations/lessons/03-02-factoring.md) |
| Radicals and $\sqrt{x^2} = \lvert x\rvert$ | [algebra-foundations 4.3](../algebra-foundations/lessons/04-03-radicals-and-rational-exponents.md) |
| Manipulating inequalities and interval notation (used silently in 2.3 and 3.3) | [algebra-foundations 1.2](../algebra-foundations/lessons/01-02-linear-equations-and-inequalities.md) |
| "Function", domain, range — the vocabulary 3.2 refines into domain/codomain/image | [algebra-foundations 2.1](../algebra-foundations/lessons/02-01-the-function-concept.md), [precalculus 1.1](../precalculus/lessons/01-01-functions-as-objects.md) |
| Composition $g \circ f$ and inverse functions as objects | [precalculus 1.2](../precalculus/lessons/01-02-composition-and-inverses.md) |
| $e^x > 0$ for all real $x$, and $\ln$ as its inverse (3.2's codomain example) | [algebra-foundations 5.2](../algebra-foundations/lessons/05-02-logarithms.md), [precalculus 2.3](../precalculus/lessons/02-03-exponential-and-logarithmic-functions.md) |
| Factorials $n!$ (3.3 P2) | [discrete-math-intro 3.1](../discrete-math-intro/lessons/03-01-counting-rules-and-permutations.md) |
| What a limit *means* informally — the intuition the $\varepsilon$–$N$ statement formalizes | [calc-refresher 2.3](../calc-refresher/lessons/02-03-improper-integrals-and-models.md) |

## Pitfalls

### Implication and its relatives

- $P \implies Q$ carries **no causation** — it is a truth-value promise, so a false hypothesis makes it vacuously true. *([1.1](lessons/01-01-statements-connectives-implication.md))*
- Proving the **converse** does not prove the claim: "square $\implies$ rectangle" is true, its converse false. *([1.1](lessons/01-01-statements-connectives-implication.md))*
- Mathematical "or" is **inclusive** — $P \lor Q$ stays true when both hold. If you mean exclusive, say so. *([1.1](lessons/01-01-statements-connectives-implication.md))*
- An $\iff$ claim is **two** proofs, and the two directions usually want different techniques. *([3.1](lessons/03-01-sets-and-element-method.md), [2.2](lessons/02-02-contrapositive-and-contradiction.md))*

### Quantifiers and negation

- $\lnot \forall x\, P(x)$ is "**some** $x$ fails", not "every $x$ fails" — the single most common negation error. *([1.2](lessons/01-02-quantifiers-order-negation.md))*
- The negation of $P \implies Q$ is $P \land \lnot Q$ — **not** an implication at all, so never write "$P \implies \lnot Q$". *([1.2](lessons/01-02-quantifiers-order-negation.md))*
- $\forall x\,\exists y$ and $\exists y\,\forall x$ are different claims and can have opposite truth values; the inner $\exists$ may depend on the outer $x$. *([1.2](lessons/01-02-quantifiers-order-negation.md))*

### Writing an honest proof

- Never let the conclusion appear as a *justified step* — that is circular, whether in a direct proof or an inductive step. *([2.1](lessons/02-01-direct-proof-definitions.md), [3.3](lessons/03-03-induction.md))*
- Two objects need two witness names: $m = 2a$, $n = 2b$. Reusing $k$ quietly assumes $m = n$. *([2.1](lessons/02-01-direct-proof-definitions.md))*
- $a \mid b$ is a statement, $b/a$ is a number that may not be an integer — convert to $b = ak$ before computing. *([2.1](lessons/02-01-direct-proof-definitions.md))*

### Choosing a technique

- Contrapositive and contradiction are not the same move: count your assumptions — contrapositive assumes only $\lnot Q$, contradiction assumes $P \land \lnot Q$ and needs an actual impossibility. *([2.2](lessons/02-02-contrapositive-and-contradiction.md))*
- If your "contradiction" never uses $P$ and ends by deriving $\lnot P$, you wrote a contrapositive with extra steps — strip the theatrics. *([2.2](lessons/02-02-contrapositive-and-contradiction.md))*
- Don't reach for contradiction reflexively; when a direct or contrapositive proof exists it is shorter and less error-prone. *([2.2](lessons/02-02-contrapositive-and-contradiction.md))*

### Cases and WLOG

- Cases that don't **cover everything** void the proof; the sneaky gap is a boundary value like $x = 0$. Always close with why they're exhaustive. *([2.3](lessons/02-03-cases-and-wlog.md))*
- WLOG is legitimate only when relabeling leaves the claim unchanged — otherwise you skipped a real case, not a redundant one. *([2.3](lessons/02-03-cases-and-wlog.md))*
- More cases is not safer: overlapping or excessive cases invite copy-paste errors. Coarsest partition that works. *([2.3](lessons/02-03-cases-and-wlog.md))*

### Sets

- Proving $A = B$ by "manipulating $A$ into $B$" is only legal once the identities you chain are already proved; the foundational proof is **double inclusion**. *([3.1](lessons/03-01-sets-and-element-method.md))*
- A Venn diagram fixes one arrangement of the circles and can miss disjoint, nested, or equal configurations — it earns a conjecture, not a theorem. *([3.1](lessons/03-01-sets-and-element-method.md))*
- $x \in A$ and $\{x\} \subseteq A$ are different statements; $x \subseteq A$ is a type error. *([3.1](lessons/03-01-sets-and-element-method.md))*

### Functions

- "One-to-one" does **not** mean one output per input — every function has that. Injective means one *input* per output. *([3.2](lessons/03-02-functions-injective-surjective-bijective.md))*
- Assuming $x_1 = x_2$ and deriving $f(x_1) = f(x_2)$ proves nothing; start from **equal outputs**. *([3.2](lessons/03-02-functions-injective-surjective-bijective.md))*
- Surjectivity is a property of the formula **plus the declared codomain** — shrink $B$ to the image and any function becomes onto. *([3.2](lessons/03-02-functions-injective-surjective-bijective.md))*

### Induction

- No base case, no dominoes: the step alone proves nothing ("assume $k = k+1$" propagates happily and is false everywhere). *([3.3](lessons/03-03-induction.md))*
- Check **where** the base belongs — a claim can be false for small $n$ and true forever after ($2^n > n^2$ only from $n = 5$). *([3.3](lessons/03-03-induction.md))*
- Assuming $P(k+1)$ to prove $P(k+1)$ is the classic hidden circularity; you get $P(k)$ (or everything below $k+1$) and must earn the rest. *([3.3](lessons/03-03-induction.md))*
- Strong induction is not a stronger axiom — use it only when the recursion jumps back more than one step. *([3.3](lessons/03-03-induction.md))*
