# Logic & Set Theory · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course has exactly one central distinction, and everything else hangs off
it: **syntax** (what you can *derive* by pushing symbols, $\vdash$) versus
**semantics** (what is *true* in every world, $\models$). Soundness and
completeness are the bridge between them; ZFC is the semantic side made honest
after Russell blew it up; incompleteness is the point where the bridge stops
reaching. Use this card to look up which turnstile you're claiming, which ZFC
axiom licenses a construction, and exactly what each big theorem assumes.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $p, q, r$ | propositional **atoms** — opaque true/false bricks, nothing inside | [1.1](lessons/01-01-syntax-connectives.md) |
| $\varphi, \psi, \chi$ | **metavariables**: *our* names for "some formula," not symbols of the logic | [1.1](lessons/01-01-syntax-connectives.md) |
| $\neg, \land, \lor, \to, \leftrightarrow$ | not / and / or (inclusive) / if–then / iff | [1.1](lessons/01-01-syntax-connectives.md) |
| $\mathcal{F}$ | the set of all well-formed formulas | [1.1](lessons/01-01-syntax-connectives.md) |
| $v$, $v(\varphi)$ | a **valuation** (one setting of every atom) and the value it forces on $\varphi$ | [1.2](lessons/01-02-semantics-truth-tables.md) |
| $v \models \varphi$ | "$\varphi$ comes out true under this one valuation" | [1.3](lessons/01-03-entailment-equivalence-normal-forms.md) |
| $\varphi \equiv \psi$ | **logically equivalent** — identical truth-table columns, interchangeable everywhere | [1.3](lessons/01-03-entailment-equivalence-normal-forms.md) |
| $\Gamma$ | a set of premises (Module 1) or of sentences / a theory (Modules 2, 5) | [1.3](lessons/01-03-entailment-equivalence-normal-forms.md) |
| $\Gamma \models \varphi$ | **SEMANTICS — entails.** No world makes all of $\Gamma$ true and $\varphi$ false | [1.3](lessons/01-03-entailment-equivalence-normal-forms.md) |
| $\models \varphi$ | $\varphi$ is a tautology (Module 1) / logically valid (Module 2) — the case $\Gamma = \varnothing$ | [1.3](lessons/01-03-entailment-equivalence-normal-forms.md) |
| $\uparrow$ | NAND: $\varphi \uparrow \psi := \neg(\varphi \land \psi)$ — functionally complete on its own | [1.3](lessons/01-03-entailment-equivalence-normal-forms.md) |
| $\Gamma \vdash \varphi$ | **SYNTAX — proves.** A finite derivation of $\varphi$ whose undischarged assumptions lie in $\Gamma$ | [1.4](lessons/01-04-proof-system-completeness.md) |
| $\nvdash$, $\not\models$ | the negations: no derivation exists / a countermodel exists | [1.4](lessons/01-04-proof-system-completeness.md) |
| $\bot$ | the constant *false*; $\Gamma \vdash \bot$ is exactly "$\Gamma$ is inconsistent" | [1.4](lessons/01-04-proof-system-completeness.md) |
| $\land$I, $\to$E, … | natural-deduction rules: **I**ntroduce a connective, **E**liminate one | [1.4](lessons/01-04-proof-system-completeness.md) |
| $\forall x$, $\exists x$ | for every object in the domain / for at least one | [2.1](lessons/02-01-quantifiers-syntax.md) |
| $\sigma$, $\mathcal{L}$ | a **signature**: the vocabulary of constant, function, and relation symbols | [2.1](lessons/02-01-quantifiers-syntax.md) |
| $t$, $f(t_1,\dots,t_n)$ | **terms** — names for *objects*; never contain a connective or quantifier | [2.1](lessons/02-01-quantifiers-syntax.md) |
| $R(t_1,\dots,t_n)$ | an **atomic formula** — a relation applied to terms; makes a *claim* | [2.1](lessons/02-01-quantifiers-syntax.md) |
| $\varphi[x := t]$ | substitute $t$ for every **free** occurrence of $x$ (only if $t$ is *free for* $x$) | [2.1](lessons/02-01-quantifiers-syntax.md) |
| $\mathcal{M}$, $\mathfrak{A}$ | a **structure** — a world giving every symbol a real meaning | [2.2](lessons/02-02-structures-satisfaction.md) |
| $\lvert\mathcal{M}\rvert$, $M$ | its **domain** (universe): the nonempty set the quantifiers sweep over | [2.2](lessons/02-02-structures-satisfaction.md) |
| $c^{\mathcal{M}}$, $f^{\mathcal{M}}$, $R^{\mathcal{M}}$ | the actual object / function / set of tuples that symbol names in $\mathcal{M}$ | [2.2](lessons/02-02-structures-satisfaction.md) |
| $s$, $s[x \mapsto d]$ | a variable **assignment**, and the same one rewired to park $x$ on $d$ | [2.2](lessons/02-02-structures-satisfaction.md) |
| $\mathcal{M} \models \varphi[s]$ | **satisfaction**: $\varphi$ holds in this world with the free variables parked by $s$ | [2.2](lessons/02-02-structures-satisfaction.md) |
| $\mathcal{M} \models T$ | $\mathcal{M}$ is a **model** of the theory $T$ — every sentence of $T$ is true in it | [2.2](lessons/02-02-structures-satisfaction.md) |
| $\mathrm{Th}(\mathbb{N})$ | the set of *all* first-order sentences true in the standard naturals | [2.4](lessons/02-04-soundness-completeness-fol.md) |
| $\in$, $\notin$ | membership — in ZFC the **only** primitive relation; everything else is defined | [3.1](lessons/03-01-russells-paradox.md) |
| $\{x : P(x)\}$ | naive comprehension — **illegal in ZFC**, this is the shape that exploded | [3.1](lessons/03-01-russells-paradox.md) |
| $\{x \in A : \varphi(x)\}$ | Separation — legal: filter a set you already hold | [3.2](lessons/03-02-extensionality-to-power-set.md) |
| $\varnothing$, $\subseteq$ | the empty set; "every member of the left is a member of the right" | [3.2](lessons/03-02-extensionality-to-power-set.md) |
| $\mathcal{P}(A)$ | power set — the set of *all* subsets of $A$ | [3.2](lessons/03-02-extensionality-to-power-set.md) |
| $\bigcup A$ | union of a *family*: pool the members of the members of $A$ (flattens one layer) | [3.2](lessons/03-02-extensionality-to-power-set.md) |
| $(a,b)$ | Kuratowski ordered pair $\{\{a\},\{a,b\}\}$ — a set that remembers order | [3.2](lessons/03-02-extensionality-to-power-set.md) |
| $B^{A}$ | the set of all functions $A \to B$ | [3.2](lessons/03-02-extensionality-to-power-set.md) |
| $\exists!$ | "there is exactly one" | [3.2](lessons/03-02-extensionality-to-power-set.md) |
| $S(x) = x \cup \{x\}$ | **successor** — the von Neumann "add one" operation | [3.3](lessons/03-03-infinity-replacement-foundation.md) |
| $\omega$ | the least inductive set $\{0,1,2,\dots\}$ — the naturals, and the first limit ordinal | [3.3](lessons/03-03-infinity-replacement-foundation.md) |
| $V_\alpha$, $V$ | stage $\alpha$ of the cumulative hierarchy, and their union — the whole universe | [3.3](lessons/03-03-infinity-replacement-foundation.md) |
| $f$, $\prod_{i\in I} A_i$ | a **choice function**, and the product whose elements *are* the choice functions | [3.4](lessons/03-04-axiom-of-choice.md) |
| $\preceq$ | a well-ordering supplied by AC (not the set's natural order) | [3.4](lessons/03-04-axiom-of-choice.md) |
| $x \mathbin{R} y$ | "$(x,y) \in R$" — a relation is literally its set of yes-pairs | [4.1](lessons/04-01-relations-orderings-well-ordering.md) |
| $(P, \le)$ | a **poset**; $x < y$ means $x \le y$ and $x \ne y$ | [4.1](lessons/04-01-relations-orderings-well-ordering.md) |
| $\alpha, \beta, \gamma, \lambda$ | ordinals; $\lambda$ conventionally a **limit** ordinal | [4.2](lessons/04-02-ordinals-transfinite-induction.md) |
| $\alpha < \beta$ | for ordinals this **is** $\alpha \in \beta$ — size is membership | [4.2](lessons/04-02-ordinals-transfinite-induction.md) |
| $A \approx B$, $\lvert A\rvert$ | equinumerous (a bijection exists); the **cardinality** of $A$ | [4.3](lessons/04-03-cardinals-cantors-theorem.md) |
| $\lvert A\rvert \le \lvert B\rvert$ | an **injection** $A \to B$ exists; strict $<$ adds "and no bijection" | [4.3](lessons/04-03-cardinals-cantors-theorem.md) |
| $\kappa, \lambda$ | cardinals (in Module 4 arithmetic; $\lambda$ is a limit ordinal elsewhere) | [4.4](lessons/04-04-continuum-cardinal-arithmetic.md) |
| $\aleph_0$, $\aleph_1$ | $\lvert\mathbb{N}\rvert$; and the **least** cardinal above it (by definition, not by CH) | [4.4](lessons/04-04-continuum-cardinal-arithmetic.md) |
| $\mathfrak{c} = 2^{\aleph_0}$ | the **continuum**: $\lvert\mathcal{P}(\mathbb{N})\rvert = \lvert\mathbb{R}\rvert$ | [4.4](lessons/04-04-continuum-cardinal-arithmetic.md) |
| $A \sqcup B$ | disjoint union (tag the copies) — what cardinal $+$ is defined on | [4.4](lessons/04-04-continuum-cardinal-arithmetic.md) |
| $\ulcorner \varphi \urcorner$ | the **Gödel number** of $\varphi$ — syntax compressed into one natural number | [5.1](lessons/05-01-incompleteness-first-theorem.md) |
| $\overline{k}$ | the **numeral**: the formal term $S(S(\cdots S(0)))$ naming the number $k$ | [5.1](lessons/05-01-incompleteness-first-theorem.md) |
| $\operatorname{Proof}_T(y,x)$ | "$y$ codes a $T$-proof of the formula coded by $x$" — an arithmetic relation | [5.1](lessons/05-01-incompleteness-first-theorem.md) |
| $\operatorname{Prov}_T(x) $ | $\exists y\,\operatorname{Proof}_T(y,x)$ — "$x$ codes something $T$ proves" | [5.1](lessons/05-01-incompleteness-first-theorem.md) |
| $\operatorname{Con}(T)$ | $\neg\operatorname{Prov}_T(\ulcorner 0 = 1\urcorner)$ — one arithmetic sentence saying "$T$ is consistent" | [5.2](lessons/05-02-second-theorem-undecidability.md) |

**The one distinction to keep straight.** $\vdash$ and $\models$ live in different
worlds and are checked in totally different ways:

| | $\Gamma \vdash \varphi$ (syntax) | $\Gamma \models \varphi$ (semantics) |
|---|---|---|
| reads | "$\Gamma$ **proves** $\varphi$" | "$\Gamma$ **entails** $\varphi$" |
| the object | one **finite** derivation, each line rule-licensed | a claim about **every** valuation / structure |
| how you show it | exhibit the proof | argue over all worlds |
| how you refute it | (hard directly) — use soundness | exhibit **one** countermodel |
| knows about meaning | nothing | everything |

Never write $\models$ or $\vdash$ *inside* a formula: $\varphi \to \psi$ is a
formula with a truth value in each row; $\Gamma \models \varphi$ is a statement
about all rows at once. See [Soundness and completeness](#soundness-and-completeness)
for the bridge.

## Definitions

### Well-formed formula

A legal string: atoms are formulas, and you may negate one or join two with a
binary connective wrapped in its own parentheses — nothing else gets in.

$$p \in \mathcal{F}; \quad \varphi \in \mathcal{F} \Rightarrow \neg\varphi \in \mathcal{F}; \quad \varphi,\psi \in \mathcal{F} \Rightarrow (\varphi \star \psi) \in \mathcal{F}, \ \ \star \in \{\land,\lor,\to,\leftrightarrow\}$$

$\mathcal{F}$ is the **smallest** such set — which is what licenses induction.

*Introduced:* [1.1](lessons/01-01-syntax-connectives.md)

### Unique readability

Every formula parses exactly one way, so "*the* main connective" and "*the* left
subformula" are well-defined. This is what the mandatory parentheses buy.

*Introduced:* [1.1](lessons/01-01-syntax-connectives.md)

### Valuation

One setting of every atom to $T$ or $F$. Extended up the formation tree by
recursion, it forces exactly one value on every formula; $n$ atoms give $2^n$
valuations.

*Introduced:* [1.2](lessons/01-02-semantics-truth-tables.md)

### Tautology

True under **every** valuation (Module 1) — "logically valid" (true in every
structure) is the first-order version.

*Introduced:* [1.2](lessons/01-02-semantics-truth-tables.md)

### Contradiction

False under **every** valuation. $\varphi$ is a tautology iff $\neg\varphi$ is a
contradiction.

*Introduced:* [1.2](lessons/01-02-semantics-truth-tables.md)

### Satisfiable

True under **at least one** valuation — the broad category, which *includes*
tautologies. Only contradictions are unsatisfiable. **Contingent** is the middle
case: true somewhere, false somewhere.

*Introduced:* [1.2](lessons/01-02-semantics-truth-tables.md)

### Logical equivalence

Two formulas no valuation can tell apart — identical truth-table columns, so you
may swap one for the other anywhere.

$$\varphi \equiv \psi \iff \big(v \models \varphi \iff v \models \psi\big) \text{ for every valuation } v$$

*Introduced:* [1.3](lessons/01-03-entailment-equivalence-normal-forms.md)

### Semantic entailment

The conclusion has nowhere to be false while the premises hold.

$$\Gamma \models \varphi \iff \text{every } v \text{ with } v \models \gamma \text{ for all } \gamma \in \Gamma \text{ also has } v \models \varphi$$

Two boundary cases worth memorizing: $\varnothing \models \varphi$ means
$\varphi$ is a tautology, and an **unsatisfiable $\Gamma$ entails everything**,
vacuously.

*Introduced:* [1.3](lessons/01-03-entailment-equivalence-normal-forms.md)

### Normal forms

Standard shapes every formula can be beaten into. A **literal** is an atom or a
negated atom; a **clause** is a disjunction of literals.

- **CNF** = an AND of ORs: $(p \lor \neg q) \land (\neg p \lor r)$.
- **DNF** = an OR of ANDs: $(p \land \neg q) \lor (\neg p \land r)$.

Every formula is equivalent to one of each. A formula's DNF is literally the list
of its satisfying rows.

*Introduced:* [1.3](lessons/01-03-entailment-equivalence-normal-forms.md)

### Functional completeness

A connective set is functionally complete if it can realize **every** truth
function — every possible column of trues and falses, not just the handy ones.
Complete: $\{\neg,\land,\lor\}$, $\{\neg,\land\}$, $\{\neg,\lor\}$, $\{\uparrow\}$.
Not complete: $\{\land,\lor\}$ (monotone — it can never lower a value).

*Introduced:* [1.3](lessons/01-03-entailment-equivalence-normal-forms.md)

### Derivability

There is a finite formal derivation ending in $\varphi$ whose only *undischarged*
assumptions belong to $\Gamma$. Purely mechanical — no world is ever consulted.
When $\Gamma = \varnothing$, $\varphi$ is a **theorem**.

*Introduced:* [1.4](lessons/01-04-proof-system-completeness.md)

### Consistency

$\Gamma \nvdash \bot$: no contradiction is derivable. By completeness this is the
same as **satisfiable** (having a model) — the single most useful restatement in
the course.

*Introduced:* [1.4](lessons/01-04-proof-system-completeness.md), sharpened in [2.4](lessons/02-04-soundness-completeness-fol.md)

### Signature

The vocabulary: constant symbols (arity $0$), function symbols, and relation
symbols, each with its number of slots fixed in advance. Equality $=$ is built in
and never part of the signature.

*Introduced:* [2.1](lessons/02-01-quantifiers-syntax.md)

### Term

A name for an *object*: a variable, a constant, or a function symbol stacked on
terms. **A term contains no relation symbol, connective, or quantifier** and has
no truth value. $x + y$ is a term; $x + y = 0$ is a formula.

*Introduced:* [2.1](lessons/02-01-quantifiers-syntax.md)

### Free vs. bound

An occurrence of $x$ inside the scope of a $\forall x$ or $\exists x$ is
**bound** (owned by the innermost such quantifier); otherwise it is **free**.
These are properties of *occurrences*, not of letters — the same letter can occur
both ways in one formula.

*Introduced:* [2.1](lessons/02-01-quantifiers-syntax.md)

### Sentence

A formula with no free occurrences. Only sentences are flatly true or false in a
structure; a formula with free variables needs an assignment first.

*Introduced:* [2.1](lessons/02-01-quantifiers-syntax.md)

### Free for

$t$ is *free for* $x$ in $\varphi$ when substituting $t$ traps none of $t$'s
variables under a quantifier of $\varphi$. If it isn't, **rename the bound dummy
first** — otherwise the substitution silently changes the meaning
($\exists y\,(x<y)$ becoming $\exists y\,(y<y)$).

*Introduced:* [2.1](lessons/02-01-quantifiers-syntax.md)

### Structure

One honest set with a chosen meaning bolted onto every symbol: a **nonempty**
domain $M$, an element $c^{\mathcal{M}} \in M$ per constant, a function
$f^{\mathcal{M}}: M^n \to M$ per function symbol, a set
$R^{\mathcal{M}} \subseteq M^n$ per relation symbol.

*Introduced:* [2.2](lessons/02-02-structures-satisfaction.md)

### Satisfaction

Tarski's recursion: read the formula off the world clause by clause, with
$\forall x$ meaning "sweep $x$ over the **entire domain**." The clauses are
tabulated in [Tarski's satisfaction clauses](#tarskis-satisfaction-clauses).

*Introduced:* [2.2](lessons/02-02-structures-satisfaction.md)

### Model

$\mathcal{M} \models \sigma$ — the sentence is true in that world. A **theory**
$T$ is a set of sentences, and $\mathcal{M} \models T$ means every one of them
holds. This is the exact content of "$\mathcal{M}$ is a group / a linear order /
a model of ZFC."

*Introduced:* [2.2](lessons/02-02-structures-satisfaction.md)

### Coincidence lemma

$\mathcal{M} \models \varphi[s]$ depends only on the values $s$ gives the **free**
variables of $\varphi$. A sentence has none, so its truth is assignment-free —
this is *why* sentences are the special case.

*Introduced:* [2.2](lessons/02-02-structures-satisfaction.md)

### Domain of discourse

The set your variables range over when you translate English. It is the
structure's carrier $\lvert\mathfrak{A}\rvert$ under a different name; every
quantifier silently ranges over it, so changing it changes the claim.

*Introduced:* [2.3](lessons/02-03-translation-quantifier-order.md)

### Elementary equivalence

Two structures satisfying exactly the same first-order sentences. Not the same as
isomorphic: compactness builds a model of $\mathrm{Th}(\mathbb{N})$ containing a
**nonstandard** element above every numeral, elementarily equivalent to
$\mathbb{N}$ yet not isomorphic to it.

*Introduced:* [2.4](lessons/02-04-soundness-completeness-fol.md)

### Naive comprehension

The dead axiom: "for every property $P$ there is a set $\{x : P(x)\}$." Instantiate
at $P(x) \equiv (x \notin x)$ and you get **Russell's set** $R$ with

$$R \in R \;\leftrightarrow\; R \notin R,$$

which has the unsatisfiable shape $Q \leftrightarrow \neg Q$. The guilty
assumption is *unrestricted* comprehension — not self-membership, not infinity.

*Introduced:* [3.1](lessons/03-01-russells-paradox.md)

### Inductive set

A set containing $\varnothing$ and closed under successor. The Axiom of Infinity
says one exists; **Separation then trims it down** to the least one, $\omega$.

*Introduced:* [3.3](lessons/03-03-infinity-replacement-foundation.md)

### Cumulative hierarchy

The universe stacked in ranked floors, each the power set of the one below.

$$V_0 = \varnothing, \qquad V_{\alpha+1} = \mathcal{P}(V_\alpha), \qquad V_\lambda = \bigcup_{\alpha<\lambda} V_\alpha, \qquad V = \bigcup_\alpha V_\alpha$$

A set's **rank** is the first stage it appears in. Foundation is exactly the
claim that every set lives in some $V_\alpha$.

*Introduced:* [3.3](lessons/03-03-infinity-replacement-foundation.md)

### Choice function

A single function reaching into every box at once: $f(i) \in A_i$ for every
$i \in I$, with each $A_i$ nonempty. Existence for *infinitely many* boxes with
no defining rule is the entire content of AC.

*Introduced:* [3.4](lessons/03-04-axiom-of-choice.md)

### Maximal element

An $m$ with **nothing strictly above it** — not an element above everything (that
is a *greatest* element). A poset can have many maximal elements and no greatest
one. Zorn delivers *a* maximal element.

*Introduced:* [3.4](lessons/03-04-axiom-of-choice.md)

### Partial order

Reflexive, antisymmetric, transitive. Consistent arrangement, but some pairs may
be **incomparable** ($\subseteq$, "divides"). The strict version $x < y$ is
irreflexive and transitive.

*Introduced:* [4.1](lessons/04-01-relations-orderings-well-ordering.md)

### Total order

A partial order in which any two elements compare: for all $x,y$, either
$x \le y$ or $y \le x$. Equivalently, the strict order satisfies **trichotomy**.

*Introduced:* [4.1](lessons/04-01-relations-orderings-well-ordering.md)

### Well-ordering

A total order in which **every nonempty subset has a least element** —
equivalently, no infinite strictly-descending sequence
$x_0 > x_1 > x_2 > \cdots$. That guaranteed floor is exactly the foothold
induction needs. Demanding a *least* element of every nonempty subset already
forces totality, so it need not be assumed separately.

*Introduced:* [4.1](lessons/04-01-relations-orderings-well-ordering.md)

### Least vs. minimal

**Least**: below everything in the subset (unique when it exists, and it forces
comparability). **Minimal**: nothing strictly below it *inside* the subset — a
poset can have several, sitting in incomparable heaps.

*Introduced:* [4.1](lessons/04-01-relations-orderings-well-ordering.md)

### Order isomorphism

A bijection $f: A \to B$ with $x \le_A y \iff f(x) \le_B f(y)$ — a relabeling
that preserves order both ways. An **order type** is an isomorphism class; the
order types of *well*-orderings are the ordinals.

*Introduced:* [4.1](lessons/04-01-relations-orderings-well-ordering.md)

### Ordinal

"Everything below here," made into a set. A set $\alpha$ is an ordinal if it is
**transitive** (every element is also a subset) and **well-ordered by $\in$**.
Then $\alpha < \beta$ just means $\alpha \in \beta$.

$$0 = \varnothing,\quad 1 = \{0\},\quad 2 = \{0,1\},\quad \dots,\quad \omega = \{0,1,2,\dots\}$$

**Theorem (order type):** every well-ordered set is order-isomorphic to exactly
one ordinal.

*Introduced:* [4.2](lessons/04-02-ordinals-transfinite-induction.md)

### Successor and limit ordinal

$\alpha$ is a **successor** if $\alpha = \beta + 1 = \beta \cup \{\beta\}$ for
some $\beta$ (its immediate predecessor). Otherwise a nonzero $\alpha$ is a
**limit**: $\alpha = \sup\{\beta : \beta < \alpha\} = \bigcup\alpha$, with nothing
immediately before it. Every ordinal is exactly one of $0$, a successor, a limit.
"Infinite" and "limit" are unrelated — $\omega + 5$ is a successor.

*Introduced:* [4.2](lessons/04-02-ordinals-transfinite-induction.md)

### Equinumerous

Same size means *pairable one-for-one*: a bijection $A \to B$ exists, written
$A \approx B$ or $\lvert A\rvert = \lvert B\rvert$. For infinite sets, matching a
proper subset is allowed — that *is* the definition of infinite.

*Introduced:* [4.3](lessons/04-03-cardinals-cantors-theorem.md)

### Countable

$A \approx \mathbb{N}$ (countably infinite) or $A$ is finite. Equivalently, its
elements can be listed $a_0, a_1, a_2, \dots$ with each appearing once — the list
*is* the bijection. Otherwise $A$ is **uncountable**.

*Introduced:* [4.3](lessons/04-03-cardinals-cantors-theorem.md)

### Diagonalization

Given any list, build the object that disagrees with row $n$ at position $n$; it
is then on no row. One move, three theorems — Cantor (a missing real), Gödel (an
unprovable truth), Turing (an uncomputable task). The forced diagonal set for a
map $f: A \to \mathcal{P}(A)$ is

$$D = \{\, a \in A : a \notin f(a) \,\}.$$

*Introduced:* [4.3](lessons/04-03-cardinals-cantors-theorem.md); reused in [5.1](lessons/05-01-incompleteness-first-theorem.md), [5.2](lessons/05-02-second-theorem-undecidability.md)

### Continuum Hypothesis

$2^{\aleph_0} = \aleph_1$: the reals sit on the *very next* rung above the
countable — nothing has size strictly between $\lvert\mathbb{N}\rvert$ and
$\lvert\mathbb{R}\rvert$. ZFC proves only $\aleph_1 \le 2^{\aleph_0}$; the rest is
**independent** (see the [big-theorem table](#the-big-theorems-what-each-assumes-and-what-it-rules-out)).

*Introduced:* [4.4](lessons/04-04-continuum-cardinal-arithmetic.md)

### Gödel numbering

An injective, mechanically computable and mechanically decodable map from
expressions (and finite sequences of them, i.e. proofs) to natural numbers,
$\varphi \mapsto \ulcorner\varphi\urcorner$. Once syntax is numbers, a theory can
talk about itself.

*Introduced:* [5.1](lessons/05-01-incompleteness-first-theorem.md)

### Provability predicate

$\operatorname{Prov}_T(x) := \exists y\, \operatorname{Proof}_T(y,x)$, an
*arithmetic* formula meaning "$x$ codes a $T$-provable formula." It exists because
$T$ is effectively axiomatized and strong enough to **represent** the proof
relation:
$m$ codes a $T$-proof of $n$ $\iff$ $T \vdash \operatorname{Proof}_T(\overline m, \overline n)$.

*Introduced:* [5.1](lessons/05-01-incompleteness-first-theorem.md)

### Diagonal lemma

For **every formula $\psi(x)$ with one free variable** there is a sentence $G$
with

$$T \vdash \; G \leftrightarrow \psi(\ulcorner G\urcorner).$$

*In words:* $G$ provably says "$\psi$ holds of my own code." The free variable is
essential — you cannot feed it a closed sentence, which is why it never produces
a flat $G \leftrightarrow \neg G$.

*Introduced:* [5.1](lessons/05-01-incompleteness-first-theorem.md)

### Decidable vs. recursively enumerable

**Decidable (recursive):** an algorithm halts on every input with the correct
yes/no. **Recursively enumerable (semi-decidable):** an algorithm halts with
"yes" on exactly the members, but may run forever on non-members. Decidable $=$
the set *and its complement* are both r.e. First-order validity is r.e. and **not**
decidable.

*Introduced:* [5.2](lessons/05-02-second-theorem-undecidability.md)

## Formulas and rules

### Soundness and completeness

The bridge between the two turnstiles. Both hold for propositional logic
([1.4](lessons/01-04-proof-system-completeness.md)) and for first-order logic
([2.4](lessons/02-04-soundness-completeness-fol.md)).

$$\textbf{Soundness:}\quad \Gamma \vdash \varphi \ \Longrightarrow\ \Gamma \models \varphi \qquad\qquad \textbf{Completeness:}\quad \Gamma \models \varphi \ \Longrightarrow\ \Gamma \vdash \varphi$$

$$\boxed{\ \Gamma \vdash \varphi \iff \Gamma \models \varphi\ } \qquad\text{equivalently}\qquad \boxed{\ \Gamma \text{ consistent} \iff \Gamma \text{ has a model}\ }$$

| Direction | What it buys you |
|---|---|
| Soundness | The rulebook never lies, so a derivation *certifies* entailment — stop checking valuations. Contrapositively: **one countermodel proves $\Gamma \nvdash \varphi$**, without searching any derivations. |
| Completeness | Converts an infinite semantic claim into a **finite** object a person or machine can produce and check. Nothing is true-in-all-models for no provable reason. |
| Both, plus "proofs are finite" | **Compactness** — see below. |

The names: **Post** proved the propositional case; **Gödel's completeness
theorem** (1929 thesis) is the first-order case, and has nothing to do with his
1931 *incompleteness* theorems — completeness is a property of the **logic**,
incompleteness a limitation of a particular **theory**.

*From* [1.3](lessons/01-03-entailment-equivalence-normal-forms.md), [1.4](lessons/01-04-proof-system-completeness.md), [2.4](lessons/02-04-soundness-completeness-fol.md)

### Truth tables for the connectives

| $\varphi$ | $\psi$ | $\neg\varphi$ | $\varphi\land\psi$ | $\varphi\lor\psi$ | $\varphi\to\psi$ | $\varphi\leftrightarrow\psi$ |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| T | T | F | T | T | T | T |
| T | F | F | F | T | **F** | F |
| F | T | T | F | T | T | F |
| F | F | T | F | F | T | T |

The arrow has exactly **one** F, where a true hypothesis meets a false
conclusion; a promise with a false hypothesis is vacuously kept. The $\lor$ is
**inclusive**; exclusive-or is $\neg(\varphi \leftrightarrow \psi)$.

*From* [1.2](lessons/01-02-semantics-truth-tables.md)

### The equivalence toolkit

| Name | Equivalence |
|---|---|
| Double negation | $\neg\neg\varphi \equiv \varphi$ |
| Implication | $\varphi \to \psi \equiv \neg\varphi \lor \psi$ |
| Contrapositive | $\varphi \to \psi \equiv \neg\psi \to \neg\varphi$ |
| Negated implication | $\neg(\varphi \to \psi) \equiv \varphi \land \neg\psi$ |
| Biconditional | $\varphi \leftrightarrow \psi \equiv (\varphi\to\psi)\land(\psi\to\varphi)$ |
| De Morgan | $\neg(\varphi\land\psi) \equiv \neg\varphi\lor\neg\psi$; $\ \neg(\varphi\lor\psi) \equiv \neg\varphi\land\neg\psi$ |
| Distributivity | $\varphi\land(\psi\lor\chi) \equiv (\varphi\land\psi)\lor(\varphi\land\chi)$; $\ \varphi\lor(\psi\land\chi) \equiv (\varphi\lor\psi)\land(\varphi\lor\chi)$ |
| NAND basis | $\neg\varphi \equiv \varphi\uparrow\varphi$; $\ \varphi\land\psi \equiv (\varphi\uparrow\psi)\uparrow(\varphi\uparrow\psi)$ |

**The deduction connection:** $\Gamma \cup \{\psi\} \models \varphi$ iff
$\Gamma \models (\psi \to \varphi)$ — move a premise across the turnstile and pay
with an implication. The syntactic twin (with $\vdash$) is the Deduction Theorem,
which $\to$I implements.

**Converting to CNF (three moves, in order).** 1. Eliminate $\to$ and
$\leftrightarrow$. 2. Push $\neg$ inward with De Morgan and double negation until
it sits only on atoms (negation normal form). 3. Distribute $\lor$ over $\land$.
For **DNF**, distribute $\land$ over $\lor$ in step 3 instead.

*From* [1.3](lessons/01-03-entailment-equivalence-normal-forms.md)

### Natural deduction rules

| Connective | Introduction | Elimination |
|---|---|---|
| $\land$ | from $\varphi$ and $\psi$, infer $\varphi\land\psi$ | from $\varphi\land\psi$, infer $\varphi$ (also $\psi$) |
| $\to$ | assume $\varphi$, derive $\psi$, **discharge**, infer $\varphi\to\psi$ | *modus ponens*: from $\varphi$ and $\varphi\to\psi$, infer $\psi$ |
| $\lor$ | from $\varphi$, infer $\varphi\lor\psi$ | *cases*: from $\varphi\lor\psi$ and subproofs $\varphi\Rightarrow\chi$, $\psi\Rightarrow\chi$, infer $\chi$ |
| $\neg$, $\bot$ | assume $\varphi$, derive $\bot$, discharge, infer $\neg\varphi$ | from $\varphi$ and $\neg\varphi$, infer $\bot$ |

Two more for $\bot$: **$\bot$E (*ex falso*)** — from $\bot$ infer anything; and
**RAA (*reductio*)** — assume $\neg\varphi$, derive $\bot$, discharge, infer
$\varphi$. RAA is the classical rule: it is exactly what makes the system match
the **two-valued** truth tables, and dropping it gives a strictly weaker
(constructive) logic.

For first-order logic, add the two quantifier moves plus equality axioms:

- **Universal instantiation:** from $\forall x\,\varphi$ infer $\varphi[x := t]$ — *provided $t$ is free for $x$*.
- **Universal generalization:** if you derive $\varphi$ with $x$ free in no premise used, infer $\forall x\,\varphi$.

*From* [1.4](lessons/01-04-proof-system-completeness.md), [2.4](lessons/02-04-soundness-completeness-fol.md)

### Tarski's satisfaction clauses

| Formula | $\mathcal{M} \models \cdot\,[s]$ iff |
|---|---|
| term $x$ / $c$ / $f(t_1,\dots,t_n)$ | value is $s(x)$ / $c^{\mathcal{M}}$ / $f^{\mathcal{M}}(t_1^{\mathcal{M}}[s],\dots,t_n^{\mathcal{M}}[s])$ |
| $R(t_1,\dots,t_n)$ | $\big(t_1^{\mathcal{M}}[s],\dots,t_n^{\mathcal{M}}[s]\big) \in R^{\mathcal{M}}$ |
| $t_1 = t_2$ | $t_1^{\mathcal{M}}[s]$ and $t_2^{\mathcal{M}}[s]$ are the same object |
| $\neg\varphi$ | $\mathcal{M} \not\models \varphi[s]$ |
| $\varphi \land \psi$, $\lor$, $\to$, $\leftrightarrow$ | combine the parts by the truth tables above |
| $\forall x\,\varphi$ | for **every** $d \in M$: $\ \mathcal{M} \models \varphi\,[s[x\mapsto d]]$ |
| $\exists x\,\varphi$ | for **some** $d \in M$: $\ \mathcal{M} \models \varphi\,[s[x\mapsto d]]$ |

Quantifiers range over **domain objects**, not over the terms or names of the
language — some elements may have no term naming them.

*From* [2.2](lessons/02-02-structures-satisfaction.md)

### Translating English, and quantifier order

| English | Formal | Trap |
|---|---|---|
| all $A$ are $B$ | $\forall x\,(A(x) \to B(x))$ | with $\land$ it overclaims that everything is an $A$ |
| some $A$ is $B$ | $\exists x\,(A(x) \land B(x))$ | with $\to$ any **non**-$A$ satisfies it vacuously |

**Pair $\forall$ with $\to$, $\exists$ with $\land$.**

$$\forall x\,\exists y\,\varphi \quad(\text{the witness may depend on } x) \qquad\text{vs.}\qquad \exists y\,\forall x\,\varphi \quad(\text{one witness for everybody})$$

$\exists\forall$ is strictly stronger: $\exists y\forall x\,\varphi \models \forall x\exists y\,\varphi$, never the converse. (Analysis lives on this gap: moving $\exists\delta$ outside $\forall x$ turns pointwise into uniform continuity.)

**Negation — push $\neg$ all the way to the atoms**, flipping every quantifier it
passes and De Morgan-ing every connective:

$$\neg\forall x\,\varphi \equiv \exists x\,\neg\varphi, \qquad \neg\exists x\,\varphi \equiv \forall x\,\neg\varphi$$

*From* [2.3](lessons/02-03-translation-quantifier-order.md)

### The ZFC axioms

Everything is a set; $\in$ is the only primitive. Read the third column as *why
the axiom is on the list at all*.

| Axiom | Says | Without it |
|---|---|---|
| **Extensionality** | same members $\Rightarrow$ same set; membership determines identity | "set" loses meaning — order and repetition become visible, nothing else is well-defined |
| **Empty set** | a memberless set exists (unique, by Extensionality) | no seed to start the construction kit from |
| **Pairing** | from $a,b$ get $\{a,b\}$ (and $\{a\}$ when $a=b$) | no singletons, no ordered pairs, no bootstrap |
| **Union** | from a set of sets, pool their members: $\bigcup A$ | no merging — $A \cup B$ and arbitrary unions don't exist |
| **Power set** | $\mathcal{P}(A)$, the set of *all* subsets of $A$ | no Cartesian products, no sets of functions, no uncountable infinities |
| **Separation** (schema) | $\{x \in A : \varphi(x)\}$ — filter a set you already hold | unrestricted: Russell returns; none at all: no intersections, differences, preimages |
| **Infinity** | an **inductive** set exists ($\varnothing \in I$, closed under $S$) | no $\omega$, hence no $\mathbb{N}$, no $\mathbb{R}$, no analysis |
| **Replacement** (schema) | the image of a set under a definable function is a set | no transfinite recursion; can't even prove $V_\omega$ is a set |
| **Foundation** | every nonempty set has an $\in$-minimal member | self-membering sets and infinite descending $\in$-chains survive |
| **Choice** | a choice function exists for any family of nonempty sets | no Zorn, no well-ordering theorem, no basis for every vector space |

Formal statements, for when you need the exact shape:

$$\text{Ext:}\ \forall A\forall B\big[\forall x(x\in A \leftrightarrow x\in B)\to A=B\big] \qquad \text{Pair:}\ \forall a\forall b\exists P\forall x\,(x\in P \leftrightarrow x=a \lor x=b)$$

$$\text{Union:}\ \forall A\exists U\forall x\big[x\in U \leftrightarrow \exists b\,(b\in A \land x\in b)\big] \qquad \text{Pow:}\ \forall A\exists P\forall x\,[x\in P \leftrightarrow x\subseteq A]$$

$$\text{Sep:}\ \forall A\exists S\forall x\big[x\in S \leftrightarrow (x\in A \land \varphi(x))\big] \qquad \text{Inf:}\ \exists I\big(\varnothing\in I \land \forall x(x\in I \to x\cup\{x\}\in I)\big)$$

$$\text{Found:}\ \forall x\big(x\neq\varnothing \to \exists y\,(y\in x \land y\cap x=\varnothing)\big)$$

Separation is a **schema** — one axiom per formula $\varphi$ — because you cannot
quantify over formulas inside the language; same for Replacement. And the single
word that dissolves Russell is the "$x \in A$" clause: for any set $A$,
$R_A = \{x \in A : x \notin x\}$ is legal and proves the harmless theorem
$R_A \notin A$, hence **no set contains all sets**.

*From* [3.2](lessons/03-02-extensionality-to-power-set.md), [3.3](lessons/03-03-infinity-replacement-foundation.md), [3.4](lessons/03-04-axiom-of-choice.md); the diagnosis in [3.1](lessons/03-01-russells-paradox.md)

### What the axioms build

| Object | Recipe | Axioms used |
|---|---|---|
| $A \cup B$ | $\bigcup\{A,B\}$ — pair them, *then* flatten | Pairing + Union |
| ordered pair $(a,b)$ | $\{\{a\},\{a,b\}\}$, with $(a,b)=(c,d) \iff a=c \land b=d$ | Pairing + Extensionality |
| $A \times B$ | separate the pairs out of $\mathcal{P}(\mathcal{P}(A\cup B))$ | Pairing, Union, Power set $\times 2$, Separation |
| relation $A \to B$ | any subset of $A\times B$, i.e. a member of $\mathcal{P}(A\times B)$ | + Power set |
| $B^{A}$ (all functions) | separate $\mathcal{P}(A\times B)$ by "exactly one output per input" | + Separation |
| $\omega$ | separate the least inductive subset out of an inductive $I$ | Infinity + Separation |
| von Neumann naturals | $0=\varnothing$, $\ n+1 = n\cup\{n\}$, so $n = \{0,\dots,n-1\}$ | Empty set + Pairing + Union |
| $V_\alpha$ | transfinite recursion on the ordinals | Power set + **Replacement** |

Two faces of a von Neumann ordinal that make everything tick: $n$ is both an
**element** and a **subset** of every larger one ($2 \in 3$ and $2 \subseteq 3$),
and membership *is* the order.

*From* [3.2](lessons/03-02-extensionality-to-power-set.md), [3.3](lessons/03-03-infinity-replacement-foundation.md)

### AC and its equivalents

$$\text{AC} \iff \text{Zorn's Lemma} \iff \text{Well-Ordering Theorem} \quad(\text{over ZF})$$

| Form | Statement |
|---|---|
| Choice function | every family of nonempty $A_i$ admits $f$ with $f(i) \in A_i$ |
| Right inverse | every surjection $g: X\to Y$ has $s: Y\to X$ with $g\circ s = \operatorname{id}_Y$ |
| Nonempty product | all $A_i$ nonempty $\Rightarrow \prod_{i\in I} A_i \neq \varnothing$ |
| **Zorn's lemma** | a nonempty poset in which **every chain has an upper bound in $P$** has a maximal element |
| **Well-ordering theorem** | every set admits *some* well-ordering (even $\mathbb{R}$ — but no one can write one down) |

**The Zorn template** (run it verbatim; it is the same three moves every time):

1. **Poset of partial gadgets**, ordered by $\subseteq$ or by extension — and check it is nonempty (usually $\varnothing$ works).
2. **Chain hypothesis:** the union of a chain is again a gadget. The reusable trick: *any finite subset of the union already lies inside a single member of the chain*, because a chain is linearly ordered.
3. **Maximal element is the object you wanted:** if it missed something you could extend it, contradicting maximality.

This produces a basis for every vector space, a maximal ideal in every ring with
$1 \neq 0$ (the union stays *proper* because $1$ lies outside every member),
ultrafilters, algebraic closures, and the total extension of a partial order.

*From* [3.4](lessons/03-04-axiom-of-choice.md), [4.1](lessons/04-01-relations-orderings-well-ordering.md)

### Relation properties and the order hierarchy

| Name | Condition (all $x,y,z$) |
|---|---|
| reflexive | $x \mathbin{R} x$ |
| irreflexive | never $x \mathbin{R} x$ |
| symmetric | $x \mathbin{R} y \Rightarrow y \mathbin{R} x$ |
| antisymmetric | $x \mathbin{R} y$ and $y \mathbin{R} x \Rightarrow x = y$ |
| transitive | $x \mathbin{R} y$ and $y \mathbin{R} z \Rightarrow x \mathbin{R} z$ |

$$\text{preorder} \ \subset\ \text{partial order} \ \subset\ \text{total order} \ \subset\ \text{well-order}$$

- preorder $\to$ partial: add **antisymmetry**.
- partial $\to$ total: add **comparability**.
- total $\to$ well: add **every nonempty subset has a least element**.

Worked verdicts to reuse: $(\mathbb{N},<)$ is a well-order (type $\omega$);
$(\mathbb{Z},<)$, $(\mathbb{Q}_{>0},<)$, $(\mathbb{R},<)$ are total but **not**
well-ordered; $(\mathbb{Z}^+, \mid)$ is partial, not total; $\mathbb{N}\times\mathbb{N}$
lexicographically **is** a well-order (type $\omega^2$). Well-ordering is a
property of the **order, not the set** — relist $\mathbb{Z}$ as
$0,1,-1,2,-2,\dots$ and it is well-ordered of type $\omega$.

*From* [4.1](lessons/04-01-relations-orderings-well-ordering.md)

### Induction and recursion principles

| Principle | Cases you must check | Needs |
|---|---|---|
| Ordinary induction on $\mathbb{N}$ | base, successor step | $\mathbb{N}$ well-ordered |
| **Structural induction** on formulas | atoms; $\neg$; each binary $\star$ | $\mathcal{F}$ is the *smallest* closed set |
| **Transfinite induction** on ordinals | $0$; $\varphi(\beta)\Rightarrow\varphi(\beta+1)$; **limit $\lambda$: all $\beta<\lambda$ $\Rightarrow$ $\lambda$** | ordinals well-ordered by $\in$ |
| **Transfinite recursion** (defining $F$) | $F(0)$; $F(\beta+1)$ from $F(\beta)$; $F(\lambda)$ from $\{F(\beta):\beta<\lambda\}$ | **Replacement** |

The **limit case is a genuinely new obligation**: base plus successor covers
$0,1,2,\dots$ and says nothing about $\omega$. ("$\alpha$ is finite" holds at
every finite stage and fails at $\omega$.)

**Ordinal arithmetic** is defined by recursion on the *right* argument, which is
why it is not commutative:

$$\beta+0=\beta, \qquad \beta+(\alpha+1)=(\beta+\alpha)+1, \qquad \beta+\lambda=\sup_{\gamma<\lambda}(\beta+\gamma)$$

$$1+\omega = \sup\{1,2,3,\dots\} = \omega \qquad\text{but}\qquad \omega+1 > \omega \ \ (\text{a successor})$$

*From* [1.1](lessons/01-01-syntax-connectives.md), [4.2](lessons/04-02-ordinals-transfinite-induction.md)

### Cardinal arithmetic

$$\kappa + \lambda = \lvert A \sqcup B\rvert, \qquad \kappa\cdot\lambda = \lvert A\times B\rvert, \qquad \kappa^{\lambda} = \lvert A^{B}\rvert, \qquad 2^{\kappa} = \lvert\mathcal{P}(A)\rvert$$

**Absorption.** If $\kappa$ is infinite and $1 \le \lambda \le \kappa$, then

$$\kappa + \lambda = \kappa\cdot\lambda = \kappa = \max(\kappa,\lambda).$$

Adding and multiplying infinities does nothing. **Exponentiation is the only
escape hatch:** $2^{\kappa} > \kappa$ always (this *is* Cantor's theorem in
arithmetic dress). Cardinal subtraction and division are **undefined** — you may
never cancel.

| Fact | Why |
|---|---|
| $\lvert\mathbb{Z}\rvert = \lvert\mathbb{Q}\rvert = \aleph_0$ | zig-zag $0,1,-1,2,-2,\dots$; snake the diagonals of the numerator/denominator grid |
| $\aleph_0 + \aleph_0 = \aleph_0\cdot\aleph_0 = \aleph_0$ | interleave two lists; pairing map $\pi(m,n) = \frac{(m+n)(m+n+1)}{2}+n$ |
| $\mathfrak{c} = 2^{\aleph_0} = \lvert\mathcal{P}(\mathbb{N})\rvert = \lvert\mathbb{R}\rvert$ | inject both ways (base-3 digits $0/2$; a real is fixed by the rationals below it), then CSB |
| $\mathfrak{c}\cdot\mathfrak{c} = \mathfrak{c}$ | $2^{\aleph_0}\cdot2^{\aleph_0} = 2^{\aleph_0+\aleph_0} = 2^{\aleph_0}$ — the plane has as many points as the line |
| $\aleph_0^{\aleph_0} = 2^{\aleph_0}$ | squeeze: $2^{\aleph_0} \le \aleph_0^{\aleph_0} \le (2^{\aleph_0})^{\aleph_0} = 2^{\aleph_0\cdot\aleph_0} = 2^{\aleph_0}$ |
| $\aleph_1 \le 2^{\aleph_0}$ | all ZFC proves; equality is CH |

Exponent laws used above: $2^{a}\cdot2^{b} = 2^{a+b}$ and $(2^{a})^{b} = 2^{ab}$.

*From* [4.3](lessons/04-03-cardinals-cantors-theorem.md), [4.4](lessons/04-04-continuum-cardinal-arithmetic.md)

### The big theorems — what each assumes and what it rules out

| Theorem | Assumes | Concludes | Rules out |
|---|---|---|---|
| **Compactness** ([1.4](lessons/01-04-proof-system-completeness.md), [2.4](lessons/02-04-soundness-completeness-fol.md)) | $\Gamma$ a set of first-order sentences; only interesting for **infinite** $\Gamma$. Follows from completeness $+$ "proofs are finite" | $\Gamma$ satisfiable $\iff$ every finite subset is satisfiable | any first-order axiomatization of "**finite**"; any *single* sentence axiomatizing "infinite"; second-order logic has no analogue |
| **Löwenheim–Skolem** ([2.4](lessons/02-04-soundness-completeness-fol.md)) | a theory with an **infinite** model | models of *every* infinite cardinality $\ge$ the size of the language (shrink down / blow up) | pinning down cardinality; any infinite structure being first-order **categorical**. Skolem paradox: consistent ZFC has a **countable** model |
| **Cantor's theorem** ([4.3](lessons/04-03-cardinals-cantors-theorem.md)) | nothing — any set $A$ | $\lvert A\rvert < \lvert\mathcal{P}(A)\rvert$, via the forced diagonal set $D=\{a: a\notin f(a)\}$ | a largest cardinal; a set of all sets; any surjection $A \to \mathcal{P}(A)$ |
| **Cantor–Schröder–Bernstein** ([4.3](lessons/04-03-cardinals-cantors-theorem.md)) | injections **both** ways | a bijection exists | ever having to exhibit the bijection yourself |
| **CH independence** (Gödel 1940, Cohen 1963 — [4.4](lessons/04-04-continuum-cardinal-arithmetic.md)) | ZFC consistent | ZFC $\nvdash$ CH **and** ZFC $\nvdash \neg$CH ($L$ makes CH true; forcing makes it false) | settling CH from ZFC — there is no argument to find, not merely none found yet |
| **First incompleteness** ([5.1](lessons/05-01-incompleteness-first-theorem.md)) | $T$ **consistent**, **effectively axiomatized** (r.e. axioms), **sufficiently strong** (interprets arithmetic, $\mathsf{PA}$-grade) | a sentence $G$ with $T \nvdash G$ and $T \nvdash \neg G$; and $G$ is **true** in $\mathbb{N}$ | any complete, effective, arithmetic-capable axiom system. Patching by adding $G$ fails — $T+G$ gets a fresh $G'$ |
| **Second incompleteness** ([5.2](lessons/05-02-second-theorem-undecidability.md)) | the same, plus the derivability conditions (so $T \vdash \operatorname{Con}(T) \to G$ is formalizable inside $T$) | $T \nvdash \operatorname{Con}(T)$ | **Hilbert's program** — self-certification. Does *not* rule out an outside proof: ZFC proves $\operatorname{Con}(\mathsf{PA})$, as does Gentzen's induction up to $\varepsilon_0$ |
| **Church–Turing / Entscheidungsproblem** ([5.2](lessons/05-02-second-theorem-undecidability.md)) | first-order validity; the halting problem reduces to it | validity is **r.e. but undecidable** | a decision procedure for validity. Proof search confirms every valid sentence, but may never halt on an invalid one |

**Where each incompleteness hypothesis is load-bearing** — drop one and complete
theories exist:

| Dropped | Counterexample |
|---|---|
| sufficiently strong | **Presburger arithmetic** $(\mathbb{N},0,1,+,<)$ — no multiplication, so no coding: complete *and* decidable. Also real-closed fields $(\mathbb{R},+,\cdot)$ |
| effectively axiomatized | $\mathrm{Th}(\mathbb{N})$, the set of all arithmetic truths — complete, but its axioms are not listable |
| consistent | an inconsistent theory proves everything, so nothing is left unprovable |

*Rules of thumb:* incompleteness is a **tax on expressive power**, paid exactly
when a theory becomes rich enough to encode its own syntax; and $G$'s
construction is the diagonal lemma aimed at $\psi(x) := \neg\operatorname{Prov}_T(x)$,
so $G$ provably says "I am not provable."

## Assumed, not taught here

This is a Tier 1 course and builds most of its own machinery — but it leans on the
following without deriving them.

| Fact | Where it's taught |
|---|---|
| Ordinary and strong induction on $\mathbb{N}$ (structural and transfinite induction are this, relocated) | [proofs-primer 3.3](../proofs-primer/lessons/03-03-induction.md) |
| Injections, surjections, bijections; composition and inverses (all of Module 4's counting) | [proofs-primer 3.2](../proofs-primer/lessons/03-02-functions-injective-surjective-bijective.md) |
| Everyday set operations $\subseteq, \cup, \cap$, set difference, and the element method | [proofs-primer 3.1](../proofs-primer/lessons/03-01-sets-and-element-method.md) |
| Proof by contradiction and contrapositive (formalized here as RAA and $\neg$I) | [proofs-primer 2.2](../proofs-primer/lessons/02-02-contrapositive-and-contradiction.md) |
| Proof by cases and WLOG (formalized here as the $\lor$E rule) | [proofs-primer 2.3](../proofs-primer/lessons/02-03-cases-and-wlog.md) |
| Informal reading and negation of "for all" / "there exists" | [proofs-primer 1.2](../proofs-primer/lessons/01-02-quantifiers-order-negation.md) |
| Vector space, span, linear independence, basis (the Zorn worked example in 3.4) | [linalg-refresher 1.1](../linalg-refresher/lessons/01-01-vectors-span-linear-combinations.md), [1.2](../linalg-refresher/lessons/01-02-linear-independence-basis-dimension.md) |
| Group axioms and inverses (the group signature used in 2.2 / 2.4 and Boss problem 2) | [abstract-algebra 1.1](../abstract-algebra/lessons/01-01-group-axioms-first-examples.md) |
| Rings with identity; ideals, proper and maximal ideals (the Zorn problem in 3.4) | [abstract-algebra 3.1](../abstract-algebra/lessons/03-01-rings-ring-homomorphisms.md), [3.3](../abstract-algebra/lessons/03-03-ideals-quotient-rings.md) |
| That a real number is pinned down by the rationals below it — the injection $\mathbb{R} \hookrightarrow \mathcal{P}(\mathbb{Q})$ in 4.4 | [real-analysis 1.2](../real-analysis/lessons/01-02-suprema-infima-completeness.md) (least-upper-bound property; the lessons call this the Dedekind cut, which no course here builds explicitly) |
| Decimal expansions and their non-uniqueness ($0.4999\ldots = 0.5000\ldots$), dodged in every diagonal argument | [real-analysis 1.4](../real-analysis/lessons/01-04-countable-and-uncountable.md) |
| Graph colorings and chromatic number (the compactness application in 2.4) | [graph-theory 3.3](../graph-theory/lessons/03-03-coloring-chromatic-number.md) |
| Uniform vs. pointwise convergence — the $\forall\exists$ / $\exists\forall$ swap named in 2.3 | [real-analysis 8.1](../real-analysis/lessons/08-01-pointwise-vs-uniform.md) |

## Pitfalls

### Syntax vs. semantics

- $\vdash$ and $\models$ are **not** two notations for one thing; that they coincide is the *content* of soundness plus completeness, not a definition. Always know which you are claiming. *([1.4](lessons/01-04-proof-system-completeness.md))*
- $\models$ is not a connective. Never write it inside a formula: $\varphi\to\psi$ has a truth value per row, $\Gamma\models\varphi$ is a claim about all rows at once. *([1.3](lessons/01-03-entailment-equivalence-normal-forms.md))*
- The glyph $\models$ does two jobs — mind the left side. A **structure** on the left is satisfaction; a **set of formulas** on the left is entailment. *([2.2](lessons/02-02-structures-satisfaction.md))*
- *Completeness* and *incompleteness* are opposite-flavored and both Gödel's: completeness is about the **logic** ($\vdash$ catches all of $\models$); incompleteness is about a fixed **theory** missing a truth of $\mathbb{N}$. No contradiction. *([1.4](lessons/01-04-proof-system-completeness.md), [2.4](lessons/02-04-soundness-completeness-fol.md), [5.1](lessons/05-01-incompleteness-first-theorem.md))*

### Reading and writing formulas

- Precedence is a *reading* convention in your head; the official formula always carries its parentheses. When in doubt, draw the formation tree. $\neg q \lor r$ and $\neg(q\lor r)$ are different formulas. *([1.1](lessons/01-01-syntax-connectives.md))*
- Keep object language and metalanguage apart: $p$ is a symbol *in* the logic, $\varphi$ is *our* name for an arbitrary formula, and "$p$ is true" is a claim *about* $p$ that syntax alone cannot make. *([1.1](lessons/01-01-syntax-connectives.md))*
- A **term** names an object, a **formula** makes a claim — never interchange them. $\forall x\,(x+y)$ and $S(x=y)$ are category errors. *([2.1](lessons/02-01-quantifiers-syntax.md))*
- "Free" and "bound" describe **occurrences**, not variables; the same letter can be both in one formula. *([2.1](lessons/02-01-quantifiers-syntax.md), [2.2](lessons/02-02-structures-satisfaction.md))*
- Substitution touches only *free* occurrences, and only when the incoming term is **free for** the variable — otherwise rename the bound dummy first or you will silently prove false things. Renaming a bound variable is always harmless; renaming a free one changes everything. *([2.1](lessons/02-01-quantifiers-syntax.md))*

### Truth tables and connectives

- $\varphi \to \psi$ says nothing about causation or relevance; it is false in exactly one row. "If the moon is cheese then $2+2=4$" is **true**. *([1.2](lessons/01-02-semantics-truth-tables.md))*
- $\lor$ is **inclusive**; exclusive-or is $\neg(\varphi\leftrightarrow\psi)$. *([1.2](lessons/01-02-semantics-truth-tables.md))*
- One false row makes a formula *contingent*, not a contradiction — a contradiction is false in **every** row. And "satisfiable" includes tautologies; it only rules out contradictions. *([1.2](lessons/01-02-semantics-truth-tables.md))*

### Normal forms and connective sets

- Distributivity has a direction: $\lor$ over $\land$ for CNF, $\land$ over $\lor$ for DNF. Grab the wrong one and you circle back to where you started. *([1.3](lessons/01-03-entailment-equivalence-normal-forms.md))*
- Normal forms are canonical, not cheap — distributing can blow $n$ conjunctions up into $2^n$ clauses. *([1.3](lessons/01-03-entailment-equivalence-normal-forms.md))*
- $\{\land,\lor\}$ *feels* expressive but is not functionally complete: every such formula is true when all atoms are true, so it can never express $\neg p$. Completeness needs something that can **lower** a value. *([1.3](lessons/01-03-entailment-equivalence-normal-forms.md))*

### Quantifiers

- $\forall$ pairs with $\to$, $\exists$ with $\land$. The $\land$ version of "all $A$ are $B$" overclaims; the $\to$ version of "some $A$ is $B$" is satisfied by irrelevant non-$A$s. *([2.3](lessons/02-03-translation-quantifier-order.md))*
- $\forall x\exists y$ and $\exists y\forall x$ are not stylistic variants — the second demands **one** witness for everybody, and the implication runs one way only. *([2.2](lessons/02-02-structures-satisfaction.md), [2.3](lessons/02-03-translation-quantifier-order.md))*
- Negation must travel through **every** quantifier and connective to the atoms. Flipping only the outermost one leaves you with a formula that isn't the negation. *([2.3](lessons/02-03-translation-quantifier-order.md))*
- $\forall x$ ranges over **domain objects**, not over the language's terms — some elements may have no name. And a bare $\mathcal{M}\models\varphi$ is meaningful only for *sentences*; supply $s$ otherwise. The domain is always **nonempty**. *([2.2](lessons/02-02-structures-satisfaction.md))*

### Compactness and models

- Compactness only bites for **infinite** $\Gamma$; for finite $\Gamma$ it is vacuous. *([2.4](lessons/02-04-soundness-completeness-fol.md))*
- "Every finite subset is satisfiable" does **not** mean one structure fits them all — each may need its own model. Compactness is the non-trivial promise that a *single* model then satisfies the whole infinite set. *([2.4](lessons/02-04-soundness-completeness-fol.md))*
- No infinite structure is first-order categorical: even $\mathrm{Th}(\mathbb{N})$, the complete list of arithmetic truths, has nonstandard models. First-order logic cannot say "and nothing else." *([2.4](lessons/02-04-soundness-completeness-fol.md))*

### Set-theoretic axioms

- The villain in Russell's paradox is **unrestricted comprehension**, not self-membership and not infinity — the derivation uses one axiom instance and pure propositional logic. *([3.1](lessons/03-01-russells-paradox.md))*
- The barber paradox merely shows no such barber exists; comprehension *forced* $R$ to exist, so the only escape is denying the axiom. That asymmetry is the whole point. *([3.1](lessons/03-01-russells-paradox.md))*
- Separation's "$x \in A$" clause is mandatory and load-bearing; drop it and Russell is back. Separation never creates a set from a predicate — it only filters one you hold. *([3.1](lessons/03-01-russells-paradox.md), [3.2](lessons/03-02-extensionality-to-power-set.md))*
- Pairing does **not** give $A\cup B$: $\{A,B\}$ has two members. You must apply Union to it. *([3.2](lessons/03-02-extensionality-to-power-set.md))*
- $(a,b)$ *is* the set $\{\{a\},\{a,b\}\}$, chosen only because it satisfies the pair property; the braces are a means to an end and never used again. Extensionality means order and repetition are invisible to $\in$. *([3.2](lessons/03-02-extensionality-to-power-set.md))*
- Infinity gives you *some* inductive set, possibly full of junk — **Separation** is what trims it to $\omega$. *([3.3](lessons/03-03-infinity-replacement-foundation.md))*
- Replacement is not fancier Separation: Separation only ever returns a *subset*, while Replacement's image can contain sets of far higher rank. Separation shrinks; Replacement launches upward. *([3.3](lessons/03-03-infinity-replacement-foundation.md))*
- Foundation bans **descending** $\in$-chains, not infinite sets. $\omega$ is fine; $0\in1\in2\in\cdots$ is fine; $\cdots\in x_2\in x_1\in x_0$ is not. *([3.3](lessons/03-03-infinity-replacement-foundation.md))*

### The Axiom of Choice

- AC is obvious only for **finitely** many boxes, where ordinary $\exists$-elimination does the job one at a time. Choosing from *one* nonempty set is never AC. *([3.4](lessons/03-04-axiom-of-choice.md))*
- **Maximal is not maximum.** Zorn gives an element with nothing strictly above it, not a top of the whole order. *([3.4](lessons/03-04-axiom-of-choice.md), [4.1](lessons/04-01-relations-orderings-well-ordering.md))*
- The well-ordering theorem asserts a well-order **exists**; it is provably impossible to write one down for $\mathbb{R}$ in ZFC. Existence without construction is the whole flavor of AC — and the price is Banach–Tarski. *([3.4](lessons/03-04-axiom-of-choice.md))*

### Orders

- **Antisymmetric is not "not symmetric."** Equality is both. Orders are antisymmetric; equivalence relations are symmetric. *([4.1](lessons/04-01-relations-orderings-well-ordering.md))*
- **Total $\ne$ well-ordered.** $(\mathbb{R},<)$, $(\mathbb{Z},<)$, $(\mathbb{Q}_{>0},<)$ are all total and none is a well-order — one bad subset (the positive rationals, say) is enough. *([4.1](lessons/04-01-relations-orderings-well-ordering.md), [4.2](lessons/04-02-ordinals-transfinite-induction.md))*
- **Minimal $\ne$ least** in a partial order: several minimal elements can sit in incomparable heaps. *([4.1](lessons/04-01-relations-orderings-well-ordering.md))*

### Ordinals and transfinite induction

- "Infinite" and "limit" are unrelated: $\omega+1, \omega+2, \dots$ are honest successors. A limit is about having **no immediate predecessor**. *([4.2](lessons/04-02-ordinals-transfinite-induction.md))*
- $\omega$ is not "the last natural" or anyone's successor — it is $\sup\{0,1,2,\dots\}$, the least ordinal above all of them. *([4.2](lessons/04-02-ordinals-transfinite-induction.md))*
- The **limit case is a real obligation**, not bookkeeping: base plus successor proves nothing at $\omega$. And a limit-stage definition needs *transfinite* recursion, which leans on Replacement. *([4.2](lessons/04-02-ordinals-transfinite-induction.md))*

### Cardinality and the continuum

- Every subset of a countable set is countable; "countable" includes countably **infinite**; and density is unrelated to cardinality ($\mathbb{Q}$ is dense and countable). *([4.3](lessons/04-03-cardinals-cantors-theorem.md))*
- Cantor's diagonal set requires no cleverness — for *any* $f$, the single set $D = \{a : a \notin f(a)\}$ is forced and automatically missed. *([4.3](lessons/04-03-cardinals-cantors-theorem.md))*
- Absorption is only for $+$ and $\times$. Exponentiation escapes: $2^{\aleph_0} > \aleph_0$, full stop. And absorption is a one-way collapse — there is no cardinal subtraction, so you may never cancel. *([4.4](lessons/04-04-continuum-cardinal-arithmetic.md))*
- $\aleph_1$ and $2^{\aleph_0}$ are **different definitions**: the next cardinal after $\aleph_0$, versus the size of $\mathcal{P}(\mathbb{N})$. That they are equal *is* CH — and CH is proved **independent**, not merely unsolved. *([4.4](lessons/04-04-continuum-cardinal-arithmetic.md))*

### Incompleteness and undecidability

- $G$ is not "neither true nor false" — it is flatly **true** about $\mathbb{N}$. "Undecidable in $T$" means $T$ can't settle it; the gap is between provable-in-$T$ and true-in-$\mathbb{N}$. *([5.1](lessons/05-01-incompleteness-first-theorem.md))*
- You cannot patch the hole by adding $G$ as an axiom: $T+G$ still satisfies all three hypotheses, so it hands you a fresh $G'$. Incompleteness is a permanent property, not a missing brick. *([5.1](lessons/05-01-incompleteness-first-theorem.md))*
- The diagonal lemma needs a formula with **one free variable**. A closed sentence has nothing to substitute into, which is why it never yields $G\leftrightarrow\neg G$; the self-reference always runs *through the arithmetical predicate* $\operatorname{Prov}_T$. *([5.1](lessons/05-01-incompleteness-first-theorem.md))*
- "Sufficiently strong" is load-bearing, not fine print: Presburger arithmetic is consistent, effective, complete, and decidable — because it cannot encode its own syntax. *([5.1](lessons/05-01-incompleteness-first-theorem.md), [5.2](lessons/05-02-second-theorem-undecidability.md))*
- $T \nvdash \operatorname{Con}(T)$ does not make consistency unknowable — only unprovable **from inside $T$**. ZFC proves $\operatorname{Con}(\mathsf{PA})$; what is forbidden is self-certification. *([5.2](lessons/05-02-second-theorem-undecidability.md))*
- **r.e. is not decidable.** First-order validity is semi-decidable: proof search confirms every valid sentence, but on an invalid one it may run forever. Decidability demands a guaranteed halt on *both* answers. *([5.2](lessons/05-02-second-theorem-undecidability.md))*
