# Complexity Theory · Lesson 3.2: #P-completeness & parsimonious reductions

> ⏱ ~15 min · Module 3: Counting · Builds on: [3.1 (#P)](03-01-sharp-p-counting-is-harder-than-deciding.md), [1.4 (Cook–Levin)](01-04-cook-levin-computation-is-satisfiability.md) · Unlocks: [3.3 (Toda and approximate counting)](03-03-todas-theorem-and-approximate-counting.md)

## Why this matters

[Lesson 3.1](03-01-sharp-p-counting-is-harder-than-deciding.md) asserted that $\#\text{SAT}$, $\#2\text{SAT}$ and the permanent are all $\#\mathsf{P}$-complete. Two things need supplying before those statements mean anything.

**What does completeness mean for a class of functions?** There is no "many-one reduction" between functions in the obvious sense, because a function's output is a number rather than a yes or no. The right notion has to be built, and there are two competing ones with different strengths.

**Which of the reductions you already know survive?** This is the sharper question, and the answer is unsettling: **most of them do not.** [Lesson 1.5](01-05-reduction-craft-and-how-reductions-break.md)'s SUBSET-SUM reduction multiplies the solution count by a factor that varies from instance to instance. The SAT-to-3SAT clause splitting of [1.4](01-04-cook-levin-computation-is-satisfiability.md) does too. So does 3SAT-to-Independent-Set. Every one of them is a perfectly valid Karp reduction and a perfectly useless counting reduction.

That is worth internalizing beyond this module. **A reduction is a claim about a specific thing being preserved**, and "preserves the answer" and "preserves the number of solutions" are different claims. A published NP-hardness proof gives you the first for free and the second only if someone checked.

## The idea

**The right notion is a bijection on solution sets.** A reduction $f$ from counting problem $\#A$ to counting problem $\#B$ is **parsimonious** if for every $x$, the instance $f(x)$ has *exactly as many* solutions as $x$ does:

$$\#A(x) = \#B(f(x)).$$

Then a counter for $B$ is a counter for $A$: map and read off. Parsimony is usually proved by exhibiting the bijection between the two solution sets, not by counting both and comparing.

**A weaker notion is often enough.** A **weakly parsimonious** reduction comes with a polynomial-time computable function $h$ recovering the original count: $\#A(x) = h\big(x, \#B(f(x))\big)$. Multiplying by a computable factor, or subtracting a computable offset, is fine. What is *not* fine is a factor that depends on the instance in a way you cannot compute — which is precisely the situation with slack variables, where the multiplier depends on how many literals each clause happens to satisfy.

**Cook–Levin is already parsimonious, and that is the bootstrap.** Look again at [1.4](01-04-cook-levin-computation-is-satisfiability.md)'s tableau. Given the input $w$, a certificate $c$ determines the machine's entire computation, hence the entire tableau, hence exactly one satisfying assignment of $\varphi$. Conversely a satisfying assignment describes a legal accepting computation, from which $c$ is read off. **That is a bijection between accepting certificates and satisfying assignments**, so the reduction preserves counts on the nose. $\#\text{SAT}$ is therefore $\#\mathsf{P}$-complete, and everything else follows from it by further parsimonious reductions.

**Why the failures are so common.** Look at what breaks in each case and a pattern appears: the reduction introduces a *choice* that the source instance did not have.

- SUBSET-SUM's slack rows: a clause satisfied by two literals can top up to 3 using either of two slack rows.
- Clause splitting: a long clause satisfied at both ends leaves the chain variables partly free.
- 3SAT to Independent Set: a clause with several true literals offers several vertices to pick.

**In each case the gadget is more permissive than it needed to be for the decision question**, and that extra permissiveness is invisible until you count. Fixing it means designing the gadget so that the intended solution is *unique* given the source solution — a stronger requirement, and the reason parsimonious reductions are harder to build.

## The formal version

**Definition ([parsimonious reduction](../reference.md#parsimonious-reduction)).** A polynomial-time computable $f$ is a parsimonious reduction from $\#A$ to $\#B$ if $\#A(x) = \#B(f(x))$ for all $x$. It is **weakly parsimonious** if there is a polynomial-time $h$ with $\#A(x) = h(x, \#B(f(x)))$.

**Definition ([#P-completeness](../reference.md#sharp-p-completeness)).** $g$ is $\#\mathsf{P}$-hard if every $\#\mathsf{P}$ function is computable in polynomial time given an oracle for $g$ (a **Turing** reduction), and $\#\mathsf{P}$-complete if additionally $g \in \#\mathsf{P}$.

Note the notion of hardness here is Turing rather than many-one, which is the standard convention for function classes and is what lets weakly parsimonious reductions count as hardness proofs. Valiant's theorem for the permanent uses this freedom.

**Theorem ([#SAT is #P-complete](../reference.md#sharp-sat)).**

*Membership.* The verifier "does this assignment satisfy $\varphi$?" runs in linear time, so the count of satisfying assignments is a $\#\mathsf{P}$ function by definition.

*Hardness.* Let $g \in \#\mathsf{P}$ be the count of accepting certificates of a verifier $V$ running in time $n^k$. Apply the Cook–Levin construction of [1.4](01-04-cook-levin-computation-is-satisfiability.md) to $V$ and $x$, producing $\varphi_x$.

**The bijection.** Map each accepting certificate $c$ to the assignment that fills the tableau variables with the actual computation of $V$ on $\langle x, c\rangle$ and the certificate cells with $c$.

- *Well-defined:* $V$ is deterministic, so $c$ determines the whole tableau.
- *Satisfying:* the computation is legal, correctly started and accepting, so all four groups of clauses hold.
- *Injective:* distinct $c$ differ in the certificate cells, which are part of the assignment.
- *Surjective:* a satisfying assignment encodes a legal accepting tableau; read $c$ off its certificate cells, and $V$ accepts $\langle x, c\rangle$.

Hence $g(x) = \#\text{SAT}(\varphi_x)$, exactly. $\blacksquare$

**Theorem ([Valiant, 1979](../reference.md#valiants-theorem)).** Computing the permanent of a $0/1$ matrix is $\#\mathsf{P}$-complete.

*The shape of the proof.* Reduce from $\#3\text{SAT}$. Build a weighted directed graph with a **variable gadget** per variable (a pair of cycles, so a cycle cover must traverse exactly one, encoding true or false) and a **clause gadget** per clause (an interchange structure contributing 0 to the permanent when the clause is unsatisfied and a fixed nonzero amount when it is satisfied). The permanent of the adjacency matrix then equals a fixed constant to the power $m$ times the number of satisfying assignments — **weakly** parsimonious, with $h$ dividing out the known constant.

Negative weights are needed to make the gadgets cancel correctly; a second step converts the weighted problem to the $0/1$ one by simulating weights with paths and working modulo a large prime. That second step is where most of the technical work lives.

**A useful corollary.** $\#2\text{SAT}$ and $\#\text{BIPARTITE-MATCHING}$ are $\#\mathsf{P}$-complete, both by reduction from the permanent, **even though both decision problems are in $\mathsf{P}$.**

## Picture

![Two side-by-side panels, each showing two rounded boxes joined by arrows. In the left panel, labelled parsimonious, four circles in the left box map one to one onto four circles in the right box by four blue arrows. In the right panel, labelled not parsimonious, four circles in the left box map onto seven circles in the right box by coral arrows, with one source having two targets and another having three.](assets/03-02-fig1.svg)

Both panels depict legal Karp reductions. In each, the left instance has solutions exactly when the right one does, so both preserve the *decision* answer perfectly. That is the entirety of what the four-obligation template from [`algorithms` 4.2](../../algorithms/lessons/04-02-the-np-complete-zoo.md) asks for.

The right panel loses the count, and loses it in the worst possible way: the multiplier is **not constant**. One source solution has two images, another has three, a third has one. If the factor were a fixed $k$ you could divide it out and the reduction would be weakly parsimonious; because it varies with the solution, no post-processing recovers the original number.

The measured instance under the figure is the concrete case. Applying the standard 3SAT-to-Independent-Set reduction to the two-clause formula $(x_1 \vee x_2 \vee \lnot x_3) \wedge (\lnot x_1 \vee x_2 \vee x_3)$ gives a graph with **7** independent sets of size $m = 2$, against the formula's **6** satisfying assignments. Not a large discrepancy, and that is the danger — it is easy to miss, and it grows multiplicatively with the number of clauses.

## Worked examples

**Example 1 (mechanical): test three reductions for parsimony.** For each, compute both counts on a small instance.

*(a) 3SAT to Independent Set.* Formula $(x_1\vee x_2\vee \lnot x_3)\wedge(\lnot x_1 \vee x_2 \vee x_3)$, so $m = 2$ and the graph has 6 vertices.

Satisfying assignments: $000, 010, 011, 101, 110, 111$ — **6**.

Independent sets of size 2: one vertex from each clause triangle, with no conflict edge between them. Clause 1 offers $\{x_1, x_2, \lnot x_3\}$, clause 2 offers $\{\lnot x_1, x_2, x_3\}$. Of the $3\times3 = 9$ pairs, two are conflicting ($x_1$ with $\lnot x_1$, and $\lnot x_3$ with $x_3$), leaving **7**.

$7 \ne 6$: **not parsimonious.**

*(b) SAT to 3SAT by clause splitting.* On a single five-literal clause, [Lesson 1.4](01-04-cook-levin-computation-is-satisfiability.md) recorded 31 satisfying assignments becoming 82. **Not parsimonious**, and the multiplier varies between 1 and 4 depending on the assignment.

*(c) The Cook–Levin tableau reduction.* Parsimonious, by the bijection proved above.

**The pattern:** (a) and (b) both introduce a free choice — which satisfying literal to pick, which chain variables to set — while (c) introduces none, because a deterministic computation has exactly one transcript.

**Example 2 (why you'd care): reading a hardness claim correctly.** Suppose a paper proves problem $B$ is NP-hard by reduction from 3SAT, and you want to conclude that $\#B$ is $\#\mathsf{P}$-hard.

You cannot, not without checking. What the paper establishes is that $f$ maps yes to yes and no to no. Whether $\#3\text{SAT}(\varphi) = \#B(f(\varphi))$ is a separate question the paper had no reason to address, and the answer is usually no.

**What to check, in order.** Take the reduction's gadgets one at a time and ask, for a single source solution, how many target solutions it produces.

1. If exactly one, that gadget is fine.
2. If a *fixed* number $k$ independent of the instance, you get a factor $k^{(\text{number of gadgets})}$ — computable, so weakly parsimonious, and the hardness transfers.
3. If a number that depends on which source solution you started from, the reduction is dead for counting and must be redesigned.

Case 3 is what the slack rows and the clause triangles do, and it is the common case.

**Why bother?** Because the counting versions are the ones that show up in inference, in statistical physics, and in reliability analysis, and because $\#\mathsf{P}$-hardness is a *much* stronger statement than NP-hardness — by [Lesson 3.3](03-03-todas-theorem-and-approximate-counting.md)'s Toda theorem it puts the problem above the entire polynomial hierarchy. Citing an NP-hardness proof for a counting claim is a real and common error, and it overstates and understates the truth at the same time.

## Watch out

- **You might think** a valid Karp reduction gives a counting reduction — **but actually** almost none do. The three standard reductions in this course's Module 1 all fail, and each fails for the same reason: a gadget that admits more than one way to realize a single source solution.
- **You might think** non-parsimony can be corrected by dividing out the factor — **but actually** only when the factor is computable from the instance. A factor depending on which solution you are looking at is not recoverable from the total, which is exactly the SUBSET-SUM slack situation.
- **You might think** $\#\mathsf{P}$-completeness uses many-one reductions like NP-completeness — **but actually** the standard definition uses **Turing** reductions, which is what allows Valiant's theorem to divide out its constant and to work modulo a prime. The weaker notion is deliberate and necessary.
- **You might think** a counting problem whose decision version is easy must have an easy counting version, or at least a special structure — **but actually** $\#2\text{SAT}$ and counting bipartite perfect matchings are both complete, and their decision versions are in $\mathsf{NL}$ and $\mathsf{P}$ respectively. **The decision version's tractability carries no information about the counting version.**

## One-liner

> A reduction preserves whatever you proved it preserves — and "there is a solution iff there is a solution" is a strictly weaker claim than "there are the same number of them".

## Problems

**P1 (🟢)** Apply the 3SAT-to-Independent-Set reduction to $\varphi = (x_1 \vee x_2 \vee x_3) \wedge (\lnot x_1 \vee \lnot x_2 \vee x_3)$. (a) Give the number of vertices, the target independent-set size $m$, and the number of conflict edges. (b) Count the independent sets of size $m$ by listing the legal pairs. (c) Count $\varphi$'s satisfying assignments, and state whether the reduction is parsimonious on this instance.

**P2 (🟡)** For each proposed reduction, classify it as parsimonious, weakly parsimonious, or neither, giving the multiplier where one exists.

(a) $\#\text{SAT}$ to $\#\text{SAT}$ by $\varphi \mapsto \varphi \wedge (y \vee \lnot y)$ for a fresh variable $y$.
(b) $\#\text{SAT}$ to $\#\text{SAT}$ by $\varphi \mapsto \varphi \wedge y$ for a fresh variable $y$.
(c) $\#3\text{SAT}$ to $\#\text{VERTEX-COVER}$ via Independent Set and the complement map $(G,k)\mapsto(G, n-k)$, assuming the Independent-Set step is already given.
(d) $\#\text{SAT}$ to $\#\text{DOUBLE-SAT}$ by the Boss problem 1 padding $\varphi \mapsto \varphi \wedge (y \vee \lnot y)$, where DOUBLE-SAT counts assignments only when the formula has at least two.

**P3 (🔴, optional)** Boss problem 1 asks you to prove DOUBLE-SAT NP-complete by the padding reduction $\varphi \mapsto \varphi \wedge (y \vee \lnot y)$ with $y$ fresh. (a) Prove both directions of the decision reduction. (b) Give the exact relationship between the number of satisfying assignments of $\varphi$ and of its image, and state whether the reduction is parsimonious, weakly parsimonious, or neither. (c) State what this costs you: name one thing the reduction proves and one thing it does not.

<details>
<summary>Solutions</summary>

**P1**

(a) Two clauses of three literals give $3m = \mathbf{6}$ vertices, and the target size is $m = \mathbf{2}$. Conflict edges join a literal to its negation across different clauses: clause 1 offers $x_1, x_2, x_3$ and clause 2 offers $\lnot x_1, \lnot x_2, x_3$, so the conflicting pairs are $(x_1,\lnot x_1)$ and $(x_2,\lnot x_2)$ — **2 conflict edges** (plus the $2\times 3 = 6$ triangle edges within clauses).

(b) An independent set of size 2 takes one vertex per triangle with no conflict edge between them. Of the $3\times3 = 9$ cross pairs, the 2 conflicting ones are excluded, leaving $\mathbf{7}$.

(c) $\varphi$ fails only when the first clause is unsatisfied ($x_1=x_2=x_3=0$) or the second is ($x_1=x_2=1, x_3=0$). So $8 - 2 = \mathbf{6}$ satisfying assignments.

$7 \ne 6$, so **not parsimonious on this instance** — and one counterexample is all that is needed, since parsimony is a universally quantified claim.

**P2**

(a) **Weakly parsimonious, multiplier 2.** The clause $(y \vee \lnot y)$ is a tautology, so every satisfying assignment of $\varphi$ extends in exactly two ways ($y$ true or false) and nothing else is added. $h(n) = n/2$ recovers the count.

(b) **Parsimonious.** The conjunct $y$ forces $y$ to be true, so each satisfying assignment of $\varphi$ has exactly one extension. The bijection is "append $y = 1$".

(c) **Parsimonious**, given the premise. The map $(G,k)\mapsto(G,n-k)$ is a bijection between independent sets of size $k$ and vertex covers of size $n-k$, namely $S \mapsto V\setminus S$. So it preserves counts exactly — and the composite inherits the *non*-parsimony of the Independent-Set step, which is the premise's fault, not this step's.

(d) **Weakly parsimonious, multiplier 2** — and the phrasing is a trap worth dismantling.

By (a), the image $\varphi \wedge (y\vee\lnot y)$ has $2\,\#\text{SAT}(\varphi)$ satisfying assignments. The qualifier "only when the formula has at least two" never bites: the padding guarantees that whenever $\varphi$ has one satisfying assignment its image has at least two, so the conditional is satisfied in every case where the count is nonzero. The multiplier is therefore the constant 2, computable, and $h(n) = n/2$ recovers the original.

**The lesson is to check whether a side condition can actually fire** before treating it as a source of instance-dependence. Here it cannot, and what looked like a varying multiplier is a fixed one.

**P3**

(a) *Decision reduction.* Let $\varphi' = \varphi \wedge (y \vee \lnot y)$ with $y$ a variable not in $\varphi$. Note $\varphi'$ is equivalent to $\varphi$ as a function of $\varphi$'s variables, since the added clause is a tautology.

($\Rightarrow$) If $\varphi$ is satisfiable, take a satisfying assignment $\alpha$. Then $\alpha$ extended by $y = 0$ and $\alpha$ extended by $y = 1$ both satisfy $\varphi'$, and they are **distinct** because they differ at $y$. So $\varphi'$ has at least two satisfying assignments and $\varphi' \in$ DOUBLE-SAT.

($\Leftarrow$) If $\varphi'$ has at least two satisfying assignments, it has at least one; restricting it to $\varphi$'s variables satisfies $\varphi$, since the extra clause imposes nothing. So $\varphi$ is satisfiable.

The map is computable in linear time, and DOUBLE-SAT is in NP with the two distinct assignments as certificate. Hence DOUBLE-SAT is NP-complete. $\blacksquare$

(b) $\#\text{SAT}(\varphi') = 2\,\#\text{SAT}(\varphi)$ exactly — every satisfying assignment of $\varphi$ extends in exactly two ways and there are no others. So the reduction is **weakly parsimonious with multiplier 2**, and $h(n) = n/2$ inverts it. It is **not** parsimonious, since $2n \ne n$ for $n > 0$.

(c) *What it proves.* DOUBLE-SAT is NP-complete, so deciding whether a formula has two or more satisfying assignments is exactly as hard as deciding whether it has one.

*What it does not prove.* It does not by itself establish that DOUBLE-SAT's counting version is $\#\mathsf{P}$-hard by a **parsimonious** reduction — you get that here only because the multiplier happens to be the constant 2. Had the padding been "$\varphi$ with each clause given a fresh slack literal", the multiplier would have varied by instance and the counting claim would have failed.

More generally: **the fact that this particular padding survives is luck, not method.** The reason it survives is the same reason Cook–Levin survives — the gadget adds a choice whose number of realizations is the same for every source solution. That is the property to check, every time.

</details>

## Flashback

**From Lesson 3.1 (#P — counting is harder than deciding):** Let $P = \begin{pmatrix}1&0&1\\1&1&0\\1&1&1\end{pmatrix}$. (a) Compute $\mathrm{per}\,P$ and $\det P$ by enumerating the six permutations. (b) State the number of perfect matchings of the corresponding bipartite graph. (c) One sentence: which of the two quantities would you compute for a $1000 \times 1000$ matrix, and what makes the other one hopeless?

<details>
<summary>Solution</summary>

(a) Rows: $P_{1\cdot} = (1,0,1)$, $P_{2\cdot} = (1,1,0)$, $P_{3\cdot} = (1,1,1)$.

| $\sigma$ | product | sign |
|---|---|---|
| $(1,2,3)$ | $1\cdot1\cdot1 = 1$ | $+$ |
| $(1,3,2)$ | $1\cdot0\cdot1 = 0$ | $-$ |
| $(2,1,3)$ | $0\cdot1\cdot1 = 0$ | $-$ |
| $(2,3,1)$ | $0\cdot0\cdot1 = 0$ | $+$ |
| $(3,1,2)$ | $1\cdot1\cdot1 = 1$ | $+$ |
| $(3,2,1)$ | $1\cdot1\cdot1 = 1$ | $-$ |

$$\mathrm{per}\,P = 1 + 1 + 1 = \mathbf{3}, \qquad \det P = +1 + 1 - 1 = \mathbf{1}.$$

Check the determinant by cofactor expansion along the first row: $1(1\cdot1 - 0\cdot1) - 0 + 1(1\cdot1 - 1\cdot1) = 1 - 0 + 0 = 1$. ✓

(b) **3** — the three permutations with product 1, namely $(1,2,3)$, $(3,1,2)$ and $(3,2,1)$.

(c) Compute the **determinant**, in about $10^9$ arithmetic operations by Gaussian elimination; the permanent has no cancellation to exploit, so the best known general method is Ryser's formula at $\Theta(2^n n)$, which at $n = 1000$ is roughly $10^{304}$ operations.

</details>

## Connections

- **Backward:** the bijection making Cook–Levin parsimonious is a property of [1.4](01-04-cook-levin-computation-is-satisfiability.md)'s tableau that lesson flagged and deferred, and the failures catalogued here are exactly the gadgets of [1.5](01-05-reduction-craft-and-how-reductions-break.md), whose slack rows were designed for permissiveness.
- **Forward:** [3.3](03-03-todas-theorem-and-approximate-counting.md) shows what $\#\mathsf{P}$-hardness actually costs you — a counting oracle runs the whole polynomial hierarchy — and then asks which counting problems can be approximated despite being complete.
- **Sideways:** "which structure does this map preserve?" is the question a homomorphism answers in [`abstract-algebra` 2.1](../../abstract-algebra/lessons/02-01-homomorphisms-kernels-images.md) and a functor answers in [`category-theory`](../../category-theory/syllabus.md); a Karp reduction preserves emptiness of the solution set, a parsimonious reduction preserves its cardinality, and the difference is the same kind of difference as between a surjection and a bijection.
