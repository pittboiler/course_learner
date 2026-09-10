# Database Systems · Lesson 2.6: Minimal cover & 3NF synthesis

> ⏱ ~15 min · Module 2: Database design & normalization · Builds on: [2.5 (decomposition)](02-05-decomposition-lossless-join-and-dependency-preservation.md), [2.3 (functional dependencies)](02-03-functional-dependencies-closure-and-keys.md) · Unlocks: [3.1 (storage & the buffer manager)](03-01-storage-pages-and-the-buffer-manager.md)

## Why this matters

[2.5](02-05-decomposition-lossless-join-and-dependency-preservation.md) ended on a genuine limitation: the BCNF algorithm can lose a dependency, the loss depends on the arbitrary order in which violations are picked, and for some relations *no* BCNF decomposition preserves everything.

This lesson gives the algorithm with the guarantee. **3NF synthesis always produces a lossless, dependency-preserving decomposition into third normal form.** Always — for every relation and every dependency set. That is a theorem, and it is the practical answer to "how do I normalize this schema" when the answer has to be defensible rather than merely reached.

It works by building *up* from the dependencies rather than splitting *down* from the relation, which is why nothing gets lost: every dependency is put into a table on purpose.

## The idea

Two moves.

First, **clean the dependency set**. A set like $\{A \to BC,\ B \to C,\ A \to B,\ AB \to C,\ AC \to D\}$ says the same thing as $\{A \to B,\ B \to C,\ A \to D\}$ — the extra dependencies are consequences of the others, and the extra attributes on some left sides are along for the ride. A **minimal cover** is the same information with all of that stripped out.

Cleaning is not cosmetic. The synthesis step makes one table per dependency, so redundancy in the dependency set becomes redundant *tables* in the schema.

Second, **synthesize**. Give each dependency of the minimal cover a table containing exactly its attributes, merge the ones sharing a left side, and add a table holding a candidate key if none of the tables already contains one. Done.

Why nothing is lost is now obvious: each dependency was placed inside a table by construction, so each can still be checked there. Why nothing is invented — losslessness — takes the candidate-key table, which is what ties the pieces back together.

## The formal version

> **Cover.** Two dependency sets $F$ and $G$ are **equivalent** ($F \equiv G$) if $F^+ = G^+$: each implies the other. $G$ is a **cover** of $F$ when they are equivalent.

Checking equivalence needs no infinite closure — for each $X \to Y$ in $F$, test $Y \subseteq X^+_G$, and conversely.

> **Extraneous attribute.** In $X \to Y$, an attribute $A \in X$ is extraneous if $(X - A) \to Y$ still follows from $F$; an attribute $B \in Y$ is extraneous if $X \to (Y - B)$ still follows from $F - \{X \to Y\} + \{X \to (Y-B)\}$.

> **Minimal (canonical) cover.** A cover $F_c$ such that: every right side is a single attribute; no left side has an extraneous attribute; and no dependency can be dropped without changing the closure.

> **The algorithm**, three passes in this order:
>
> 1. **Split right sides.** Replace $X \to A_1 A_2 \cdots A_k$ with $k$ dependencies $X \to A_i$. Licensed by the decomposition rule of [2.3](02-03-functional-dependencies-closure-and-keys.md).
> 2. **Strip left sides.** For each $X \to A$ and each $B \in X$ with $|X| > 1$: if $A \in (X - B)^+$ computed under the **current** set, replace $X \to A$ with $(X - B) \to A$.
> 3. **Drop redundant dependencies.** For each $X \to A$ in turn: if $A \in X^+$ computed under the set **without** that dependency, delete it.

Two cautions that decide whether you get the right answer.

**The order of the passes is not negotiable.** Stripping left sides before splitting right sides can strip an attribute that a different right-hand attribute needed.

**Both passes 2 and 3 use the set as it stands, updated after every change.** Testing all candidates against the original set and removing them together will remove too much — if $A \to C$ and $B \to C$ are each redundant given the other, testing both against the original finds both redundant and deletes both, losing $C$ entirely.

A minimal cover is not unique. Different choices in pass 2 and different orders in pass 3 give different covers, all equivalent, sometimes of different sizes.

> **3NF synthesis.** Given $R$ and $F$:
>
> 1. Compute a minimal cover $F_c$.
> 2. For each distinct left side $X$ in $F_c$, create a relation with attributes $X \cup \{A : X \to A \in F_c\}$.
> 3. If no created relation contains a candidate key of $R$, add one relation consisting of any candidate key.
> 4. Delete any relation contained in another.

> **Theorem.** The result is in 3NF, is lossless, and preserves $F$.

Preservation holds because step 2 puts every dependency of $F_c$ inside a relation, and $F_c \equiv F$. Losslessness holds because of step 3 — the candidate-key relation joins to every other along attributes that determine them. Step 3 is the whole reason the result is lossless, which is why it is not optional even when it looks like it adds a pointless table.

## Picture

![The dependency set A to BC, B to C, A to B, AB to C, AC to D reduced through three columns: split right sides, strip left sides with two rewritten dependencies marked, and drop redundant leaving three dependencies, then a panel showing the synthesis into tables ABD and BC](assets/02-06-fig1.svg)

Each pass only removes. The closure of the set is identical in all four columns.

## Worked examples

**Example 1 — computing a minimal cover.**

$$F = \{A \to BC,\ B \to C,\ A \to B,\ AB \to C,\ AC \to D\}$$

**Pass 1, split right sides.** Only $A \to BC$ has more than one attribute:

$$A \to B, \quad A \to C, \quad B \to C, \quad A \to B, \quad AB \to C, \quad AC \to D$$

**Pass 2, strip left sides.** Two dependencies have multi-attribute left sides.

*$AB \to C$:* is $A$ extraneous? Compute $\{B\}^+$ under the current set: $B \to C$ gives $\{B, C\}$, which contains $C$. **Yes** — $B$ alone suffices. Replace with $B \to C$.

*$AC \to D$:* is $C$ extraneous? Compute $\{A\}^+$: $A \to B$ gives $B$, $A \to C$ gives $C$, and now $AC \subseteq \{A,B,C\}$ so $AC \to D$ fires, giving $D$. The closure contains $D$. **Yes.** Replace with $A \to D$.

That second test deserves a second look, because it uses the dependency being tested. That is correct and standard: the question is whether $A \to D$ follows from the current set *as a whole*, and it does — $A$ determines $C$, and $A$ with $C$ determines $D$. The conclusion is sound however it was reached.

$$A \to B, \quad A \to C, \quad B \to C, \quad A \to B, \quad B \to C, \quad A \to D$$

**Pass 3, drop redundant dependencies.** Take them one at a time, each tested against the set without it.

- *$A \to C$:* without it, $\{A\}^+$ is $A \to B$ then $B \to C$, giving $C$. **Redundant, drop.**
- The duplicate copies of $A \to B$ and $B \to C$ are each redundant given the other copy. **Drop one of each.**
- *$A \to B$:* without it, $\{A\}^+ = \{A, D\}$, no $B$. **Keep.**
- *$B \to C$:* without it, $\{B\}^+ = \{B\}$. **Keep.**
- *$A \to D$:* without it, $\{A\}^+ = \{A, B, C\}$. **Keep.**

$$F_c = \{A \to B,\ B \to C,\ A \to D\}$$

Five dependencies to three, and the closure is unchanged.

**Example 2 — synthesizing, and the case BCNF could not handle.**

Continue with $R(A,B,C,D)$ and $F_c$ above. Group by left side: $A \to B$ and $A \to D$ share a left side and merge; $B \to C$ stands alone.

$$R_1(A, B, D) \qquad R_2(B, C)$$

Does any relation contain a candidate key? $\{A\}^+ = R$, so $\{A\}$ is the candidate key, and $A \in R_1$. **No extra table needed.** Neither relation contains the other, so both stay. Two tables, in 3NF, lossless, all three dependencies preserved.

**Now the relation that defeated BCNF.** From [2.5](02-05-decomposition-lossless-join-and-dependency-preservation.md):

$$R(A,B,C,D) \qquad F = \{AB \to C,\ C \to D,\ D \to B\}$$

There, the BCNF algorithm gave $\{C,D\}, \{B,C\}, \{A,C\}$ losing two dependencies when started on $C \to D$, and $\{B,D\}, \{C,D\}, \{A,C\}$ losing one when started on $D \to B$. Order-dependent, and lossy of constraints either way.

Synthesis instead. $F$ is already a minimal cover — every right side is a single attribute; $AB \to C$ has no extraneous attribute, since $\{A\}^+ = \{A\}$ and $\{B\}^+ = \{B\}$; and dropping any one dependency breaks the cycle and shrinks the closure. One table per left side:

$$R_1(A, B, C) \qquad R_2(C, D) \qquad R_3(D, B)$$

The candidate keys are $\{A,B\}$, $\{A,C\}$ and $\{A,D\}$, and $R_1$ contains $\{A,B\}$. No extra table. No relation contains another.

**All three dependencies preserved**, each inside its own table, each enforceable as that table's key constraint. Lossless. And every table is in 3NF.

**What it costs.** $R_1(A,B,C)$ is not in BCNF: the derived dependency $C \to B$ holds in it, and $C$ is not a superkey of $R_1$. So the schema carries a little redundancy — each $C$ value repeats its $B$ — which is exactly the redundancy the BCNF route was chasing away.

**That is the trade, stated plainly.** BCNF removes the redundancy and may lose a constraint. 3NF keeps every constraint and may keep a bounded redundancy. The redundancy is visible, quantifiable and guarded by a preserved dependency; a lost constraint is none of those things. That asymmetry is why 3NF synthesis is the algorithm most textbooks and most practitioners reach for, and why the escape hatch in 3NF's definition was put there deliberately.

**The practical recipe** is to run synthesis, then check each resulting table for BCNF. Any table that is already in BCNF costs nothing. For any table that is not — like $R_1$ here — decide case by case whether the redundancy or the lost constraint is worse. Very often it is neither, because the offending dependency turns out to be one the business does not actually assert.

## Watch out

- **You might think the three passes can be reordered.** They cannot. Splitting right sides must come first, or stripping a left-side attribute may remove one that a not-yet-split right-hand attribute needed.
- **You might think redundancy tests can be batched.** They cannot. Each test uses the set as it stands, and testing several candidates against the original set can find two dependencies each redundant "given the other" and delete both, losing information.
- **You might think a minimal cover is unique.** It is not. Different extraneous-attribute choices and different removal orders give different covers, all equivalent, sometimes of different sizes — so two correct answers to the same exercise can differ.
- **You might think the candidate-key table can be skipped when it looks redundant.** It is what makes the decomposition lossless. Skip it and the pieces may rejoin into spurious tuples, silently, exactly as in [2.5](02-05-decomposition-lossless-join-and-dependency-preservation.md).

## One-liner

> Synthesis builds tables up from a cleaned dependency set instead of splitting them down from the relation, which is why it can promise what BCNF decomposition cannot: lossless, dependency-preserving, every time.

## Problems

**P1 (🟢)** $F = \{A \to B,\ AB \to C,\ A \to C,\ B \to D\}$ over $R(A,B,C,D)$.

(a) Give the result of pass 1.
(b) Give the result of pass 2, naming the extraneous attribute and the closure that proves it.
(c) Give the minimal cover.
(d) Give the 3NF synthesis, and state whether a candidate-key table had to be added.

**P2 (🟡)** $R(\text{course}, \text{room}, \text{time}, \text{instructor}, \text{building})$ with

$$K_1: \text{course} \to \text{instructor} \qquad K_2: \text{room} \to \text{building} \qquad K_3: \text{room}, \text{time} \to \text{course} \qquad K_4: \text{course}, \text{time} \to \text{room}$$

(a) Give every candidate key.
(b) Give the highest normal form, naming each violating dependency.
(c) Give the 3NF synthesis, showing whether a candidate-key table was needed.
(d) State which of your tables, if any, fail BCNF, and for each give the dependency responsible.

**P3 (🔴, optional)** $F = \{AB \to C,\ C \to A,\ BC \to D,\ ACD \to B,\ D \to EG,\ BE \to C,\ CG \to BD,\ CE \to AG\}$ over $R(A,B,C,D,E,G)$.

(a) Compute $\{C, E\}^+$ and $\{B, E\}^+$.
(b) Show that $A$ is extraneous in $ACD \to B$, giving the closure that proves it.
(c) Determine whether $G$ is extraneous in $CE \to AG$, giving the closure that settles it.
(d) Two students hand in different minimal covers of $F$, one with 8 dependencies and one with 9. State whether at most one of them can be correct, and justify your answer with the relevant property of minimal covers.

<details>
<summary>Solutions</summary>

**P1**

(a) Every right side is already a single attribute, so **pass 1 changes nothing**:

$$A \to B, \quad AB \to C, \quad A \to C, \quad B \to D$$

(b) Only $AB \to C$ has a multi-attribute left side. Is $B$ extraneous? Compute $\{A\}^+$ under the current set: $A \to B$ gives $B$, $A \to C$ gives $C$. The closure contains $C$, so **$B$ is extraneous**, and $AB \to C$ becomes $A \to C$.

$$A \to B, \quad A \to C, \quad A \to C, \quad B \to D$$

(c) Pass 3, one at a time. The duplicate $A \to C$ is redundant given the other copy — drop one. Testing what remains: without $A \to B$, $\{A\}^+ = \{A, C\}$, so keep; without $A \to C$, $\{A\}^+ = \{A, B, D\}$, so keep; without $B \to D$, $\{B\}^+ = \{B\}$, so keep.

$$F_c = \{A \to B,\ A \to C,\ B \to D\}$$

(d) Group by left side: $A \to B$ and $A \to C$ merge into $\{A,B,C\}$; $B \to D$ gives $\{B,D\}$.

$$R_1(A, B, C) \qquad R_2(B, D)$$

**No candidate-key table was needed.** The candidate key is $\{A\}$, since $\{A\}^+ = R$, and $A$ is in $R_1$.

**P2**

(a) `time` appears only on left sides, so it is in every candidate key. Testing pairs and triples containing it:

| $X$ | $X^+$ | key? |
|---|---|---|
| $\{\text{room}, \text{time}\}$ | $K_3$ gives course; $K_1$ gives instructor; $K_2$ gives building — all five | **yes** |
| $\{\text{course}, \text{time}\}$ | $K_4$ gives room; then $K_2$ building, $K_1$ instructor — all five | **yes** |
| $\{\text{time}\}$ | $\{\text{time}\}$ | no |
| $\{\text{instructor}, \text{time}\}$, $\{\text{building}, \text{time}\}$ | nothing fires | no |

**Two candidate keys: $\{\text{room}, \text{time}\}$ and $\{\text{course}, \text{time}\}$.** Prime attributes: `room`, `time`, `course`. Non-prime: `instructor`, `building`.

(b) BCNF test on each left side: $\{\text{course}\}^+ = \{\text{course}, \text{instructor}\} \neq R$, and $\{\text{room}\}^+ = \{\text{room}, \text{building}\} \neq R$. So $K_1$ and $K_2$ both violate BCNF. $K_3$ and $K_4$ have superkey left sides and are fine.

3NF test: $K_1$'s right side `instructor` is non-prime, so no escape. **Not in 3NF.**

2NF test: $\{\text{course}\}$ is a proper subset of the candidate key $\{\text{course}, \text{time}\}$, and `instructor` is non-prime — a **partial dependency**. Likewise $\{\text{room}\}$ inside $\{\text{room}, \text{time}\}$ with `building`. **Not in 2NF.**

**Highest normal form: 1NF.**

(c) $F$ is already a minimal cover: every right side is one attribute, neither two-attribute left side has an extraneous member ($\{\text{room}\}^+$ and $\{\text{time}\}^+$ both fall short of `course`, and similarly for $K_4$), and no dependency is implied by the others.

One table per left side:

$$R_1(\text{course}, \text{instructor}) \qquad R_2(\text{room}, \text{building}) \qquad R_3(\text{room}, \text{time}, \text{course}) \qquad R_4(\text{course}, \text{time}, \text{room})$$

$R_3$ and $R_4$ have identical attribute sets, so step 4 deletes one. **No candidate-key table needed** — $R_3$ contains $\{\text{room}, \text{time}\}$.

$$R_1(\text{course}, \text{instructor}) \qquad R_2(\text{room}, \text{building}) \qquad R_3(\text{room}, \text{time}, \text{course})$$

(d) **None of them fails BCNF.**

- $R_1$: the only dependency is $\text{course} \to \text{instructor}$, and `course` is its key.
- $R_2$: likewise with `room`.
- $R_3$: both $K_3$ and $K_4$ hold here, and each left side — $\{\text{room}, \text{time}\}$ and $\{\text{course}, \text{time}\}$ — is a candidate key of $R_3$.

So this schema is in BCNF, is lossless and preserves everything. **Synthesis reached BCNF for free**, which is the common case: the guarantee is only 3NF, but a relation whose troubles are partial and transitive dependencies rather than overlapping-key cycles usually lands in BCNF anyway. It is worth running the check, because when it passes there is no trade to weigh.

**P3**

(a) $\{C, E\}^+$: $C \to A$ gives $A$, so the set is $\{A, C, E\}$; $CE \to AG$ gives $G$, so $\{A, C, E, G\}$; $CG \to BD$ gives $B$ and $D$, so $\{A,B,C,D,E,G\} = R$. **$\{C,E\}^+ = R$.**

$\{B, E\}^+$: $BE \to C$ gives $C$; $C \to A$ gives $A$; now $AB \subseteq$ the set so $AB \to C$ adds nothing new; $BC \to D$ gives $D$; $D \to EG$ gives $G$ ($E$ already present). **$\{B,E\}^+ = R$.**

(b) Testing whether $A$ is extraneous in $ACD \to B$ means asking whether $B \in \{C, D\}^+$ under the full current set.

$\{C,D\}^+$: $C \to A$ gives $A$; $D \to EG$ gives $E$ and $G$; now $CG \to BD$ fires and gives $B$. **$\{C,D\}^+ = R \ni B$**, so **$A$ is extraneous** and $ACD \to B$ reduces to $CD \to B$.

(c) $CE \to AG$ splits in pass 1 into $CE \to A$ and $CE \to G$, so "$G$ extraneous on the right" is really the pass-3 question of whether $CE \to G$ is redundant.

Test it: compute $\{C, E\}^+$ under the set **without** $CE \to G$. $C \to A$ gives $A$, so $\{A, C, E\}$. Now what fires? $AB \to C$ needs $B$; $BC \to D$ needs $B$; $CD \to B$ needs $D$; $D \to EG$ needs $D$; $BE \to C$ needs $B$; $CG \to BD$ needs $G$; $CE \to A$ adds nothing new. **Nothing fires. $\{C,E\}^+ = \{A, C, E\}$, which does not contain $G$.**

So $CE \to G$ is **not** redundant and $G$ is **not** extraneous — the claim in the problem is false, and the closure is the proof. Compare with (a), where $\{C,E\}^+ = R$: that computation used $CE \to AG$ to reach $G$ in the first place, and removing it breaks the chain at exactly that point.

The general warning: a dependency can look redundant because its own consequences appear in the closure. The redundancy test must recompute the closure **with that dependency removed**, and doing otherwise finds every dependency redundant.

(d) **Both can be correct.** Size alone settles nothing.

Minimal covers of one dependency set are not unique, and different covers **can contain different numbers of dependencies**. Pass 2 may strip a different attribute from a multi-attribute left side, and pass 3 removes dependencies in whatever order it visits them — a dependency kept early can render a later one redundant, while the reverse order keeps the other instead.

This very set has covers of both sizes. An 8-dependency one:

$$C \to A,\quad D \to E,\quad D \to G,\quad AB \to C,\quad BC \to D,\quad BE \to C,\quad CE \to G,\quad CG \to B$$

and a 9-dependency one:

$$C \to A,\quad D \to E,\quad D \to G,\quad AB \to C,\quad BC \to D,\quad BE \to C,\quad CD \to B,\quad CE \to G,\quad CG \to D$$

Both are equivalent to $F$, both have single-attribute right sides, neither has an extraneous left-side attribute, and in neither can any dependency be dropped. They differ at the tail: the shorter one keeps $CG \to B$ and reaches $D$ by other routes, while the longer keeps $CG \to D$ and needs $CD \to B$ to recover $B$.

**So the marking procedure is not "count them."** For each submitted cover $G$, run two checks:

1. **Equivalence.** For every $X \to Y$ in $F$, test $Y \subseteq X^+_G$; for every $X \to Y$ in $G$, test $Y \subseteq X^+_F$. A cover that fails this is wrong at any size.
2. **Minimality.** Every right side a single attribute; for each multi-attribute left side, confirm no attribute can be dropped; for each dependency, confirm removing it shrinks the closure.

Either, neither, or both may pass. The one thing forced on every correct answer is the closure $F^+$, which is why equivalence is the check to run first.

There is a related fact worth knowing: finding a cover with the *fewest* dependencies — an **optimal** cover — is a harder problem than finding a minimal one, and the three-pass algorithm makes no attempt at it. It is greedy, and like most greedy reductions it reaches *a* minimum rather than *the* minimum.

</details>

## Flashback

**From Lesson 2.4 (anomalies and the normal forms):** $R(\text{isbn}, \text{title}, \text{author}, \text{author\_dob})$ with $\text{isbn} \to \text{title}, \text{author}$ and $\text{author} \to \text{author\_dob}$.

(a) Give the candidate key and the highest normal form, naming the violating dependency and classifying it as partial or transitive.
(b) Give a two-row instance exhibiting a deletion anomaly, and name the fact lost.

<details>
<summary>Solution</summary>

(a) **Candidate key: $\{\text{isbn}\}$.** It appears only on a left side and its closure reaches all four attributes.

**Highest normal form: 2NF.** The key is a single attribute, so 2NF holds vacuously — there is no proper non-empty subset for a partial dependency to attach to.

The violation is $\text{author} \to \text{author\_dob}$: $\{\text{author}\}^+ = \{\text{author}, \text{author\_dob}\}$ is not all of $R$, so the left side is not a superkey, and `author_dob` is non-prime, so the 3NF escape hatch does not apply. It is a **transitive** dependency — the key determines the author, who determines the date of birth.

(b)

| isbn | title | author | author_dob |
|---|---|---|---|
| 978-1 | Tidewater | Okonjo | 1971-04-02 |
| 978-2 | Saltmarsh | Reyes | 1984-11-30 |

Delete the row for 978-2, because the book goes out of print. **The fact lost is Reyes's date of birth**, which had nothing to do with that book and is now gone from the database entirely.

That is the deletion anomaly in its clearest form: two independent facts — this book exists, and this author was born then — were sharing a row, so removing one removed both. The repair is the synthesis of this lesson, giving $\{\text{isbn}, \text{title}, \text{author}\}$ and $\{\text{author}, \text{author\_dob}\}$, after which an author's details survive the deletion of every book they wrote.

</details>

## Connections

- **Backward:** every step is a closure from [2.3](02-03-functional-dependencies-closure-and-keys.md) — extraneous-attribute tests, redundancy tests and the candidate-key search are all the same three-line loop. This lesson answers the open question [2.5](02-05-decomposition-lossless-join-and-dependency-preservation.md) closed on, and it explains why [2.4](02-04-anomalies-and-the-normal-forms.md)'s definition of 3NF carries a prime-attribute escape hatch that BCNF does not: without it, this theorem would be false.
- **Forward:** Module 2 ends here with a schema that is correct. Module 3 asks what it costs to *query*, starting from [3.1](03-01-storage-pages-and-the-buffer-manager.md) — and the first thing to notice is that normalization has a price, since more tables means more joins ([3.5](03-05-query-operators-and-join-algorithms.md)) and the deliberate reversal of this lesson's work is a real technique.
- **Sideways:** a minimal cover is a minimal generating set for a closure operator, the same idea as a basis: many generating sets, all equivalent, not necessarily the same size, and the non-uniqueness in P3(d) is exactly the non-uniqueness of a spanning set that is not required to be independent in a linear sense. The three passes are a greedy reduction, and like most greedy reductions they reach *a* minimum, not *the* minimum.
