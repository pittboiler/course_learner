# Complexity Theory · Lesson 1.6: Ladner, self-reducibility & search vs decision

> ⏱ ~15 min · Module 1: Time, hierarchy & NP-completeness · Builds on: [1.3 (the hierarchy theorems)](01-03-the-hierarchy-theorems.md), [1.5 (reduction craft)](01-05-reduction-craft-and-how-reductions-break.md) · Unlocks: [2.1 (coNP)](02-01-conp-and-the-shape-of-np.md), [3.2 (parsimonious reductions)](03-02-sharp-p-completeness-and-parsimonious-reductions.md)

## Why this matters

Module 1 has left two loose ends, and both are the kind that a careful reader notices and a careless one does not.

**First: is that all there is?** Every NP problem you have met is either in P or NP-complete. It is tempting to conclude that NP has exactly two floors. Ladner's theorem says no — if $\mathsf{P} \ne \mathsf{NP}$ then there is a language in NP that is in neither, and in fact an infinite hierarchy of them. This matters practically, because the two most commercially important problems in the area, factoring and graph isomorphism, are both candidates for that middle floor, and neither has ever been placed.

**Second: does the decision framing throw away what you wanted?** Everything in this course is a yes/no question, and nobody actually wants a yes. They want the satisfying assignment, the clique, the schedule. [`algorithms` 4.1](../../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md) waves this away with "you can usually find the object by asking a few more questions". This lesson proves it for SAT, exactly, with a count: **$n$ queries**. The technique is called self-reducibility, and it is why the whole subject can be about decision problems without loss.

## The idea

**Search from decision.** Suppose you have an oracle that answers "is this formula satisfiable?" and you want an actual satisfying assignment for $\varphi$ on variables $x_1, \dots, x_n$.

Ask: *is $\varphi$ with $x_1$ set to true still satisfiable?* If yes, commit to $x_1 = \text{true}$ and continue with the simplified formula. If no — and $\varphi$ was satisfiable to begin with — then every satisfying assignment has $x_1$ false, so commit to that instead. Repeat for $x_2$, and so on.

After $n$ queries every variable is fixed, and the invariant "the current partial assignment extends to a satisfying assignment" has been maintained at every step. So the final assignment satisfies $\varphi$.

The property making this work has a name: SAT is **downward self-reducible** — an instance can be solved using answers about strictly smaller instances of the same problem. Substituting a value for a variable produces a genuinely smaller formula, and that is all the argument needs. **It is not a general fact about NP-complete problems**; it happens to hold for all the natural ones, and nobody knows how to prove it must.

**The middle floor.** Ladner's construction is the hierarchy theorem's technique with a twist. Take SAT and *sabotage* it on a thinly-spread set of input lengths: define a language $L$ that agrees with SAT when a certain function $f(n)$ is even, and is empty when $f(n)$ is odd.

Tune $f$ by delayed diagonalization. It grows so slowly, and switches so rarely, that:

- $L$ cannot be in P, because on the SAT-like stretches it would give a polynomial algorithm for SAT on infinitely many lengths, and the construction is arranged to defeat each polynomial-time machine in turn on such a stretch;
- $L$ cannot be NP-complete, because a reduction from SAT would have to squeeze the SAT instances into the empty stretches, and those stretches are arranged to be too long for any fixed polynomial to escape.

The result is a language that is too sparse to be complete and too dense to be easy. It is also, and this is worth saying plainly, **a completely artificial object** — like the hierarchy theorem's diagonal language, it is defined by what it is not. Nobody has ever exhibited a natural NP-intermediate problem, and proving one exists would require settling P versus NP first.

## The formal version

**Theorem ([Ladner](../reference.md#ladners-theorem)).** If $\mathsf{P} \ne \mathsf{NP}$, then there exists $L \in \mathsf{NP}$ that is neither in $\mathsf{P}$ nor NP-complete. Such languages are called **NP-intermediate**.

*Construction sketch.* Define $L = \{\, w \in \text{SAT} : f(|w|) \text{ is even} \,\}$, where $f$ is computed as follows: $f(n)$ is the smallest $k \le \log\log n$ such that a specified condition indexed by $k$ has been "defeated" within $n$ steps of searching. The alternating conditions are, for even $k$, "machine $M_{k/2}$ decides $L$ in polynomial time" and for odd $k$, "reduction $R_{(k-1)/2}$ reduces SAT to $L$". Because $f$ is non-decreasing and computable in polynomial time, and increments only when a counterexample has been found, each machine and each reduction is defeated in turn, and $f \to \infty$ if and only if $\mathsf{P} \ne \mathsf{NP}$.

Strengthened by Ladner in the same paper: the intermediate degrees are **infinite and densely ordered** — between any two there is another. $\blacksquare$

**Definition ([downward self-reducibility](../reference.md#self-reducibility)).** $A$ is downward self-reducible if there is a polynomial-time algorithm deciding $x \in A$ using queries to $A$ on inputs strictly shorter than $x$.

**Theorem ([search reduces to decision for SAT](../reference.md#search-to-decision)).** Given an oracle for SAT, a satisfying assignment for a satisfiable formula $\varphi$ on $n$ variables can be found with **$n$ oracle queries** and polynomial additional work.

*Proof.* Maintain a partial assignment $\alpha$, initially empty, with the invariant that $\varphi|_\alpha$ is satisfiable. For $i = 1, \dots, n$: query whether $\varphi|_{\alpha, x_i = 1}$ is satisfiable. If yes, set $\alpha(x_i) = 1$; if no, set $\alpha(x_i) = 0$. The invariant is preserved in the first case immediately, and in the second because $\varphi|_\alpha$ was satisfiable while $\varphi|_{\alpha,x_i=1}$ is not, so every satisfying extension has $x_i = 0$. After $n$ steps $\alpha$ is total and $\varphi|_\alpha$ is satisfiable, that is, true. $\blacksquare$

**Corollary ([search and decision stand or fall together](../reference.md#search-vs-decision)).** $\mathsf{P} = \mathsf{NP}$ if and only if satisfying assignments can be *found* in polynomial time.

*In words: the decision framing of this whole course costs nothing. If deciding is easy, finding is easy.*

**Where the candidates sit.**

| problem | best known | why it is not believed NP-complete |
|---|---|---|
| FACTORING (as a decision problem) | sub-exponential, $2^{O((\log N)^{1/3}(\log\log N)^{2/3})}$ | it is in $\mathsf{NP} \cap \mathsf{coNP}$; an NP-complete problem there would give $\mathsf{NP} = \mathsf{coNP}$ ([2.1](02-01-conp-and-the-shape-of-np.md)) |
| GRAPH ISOMORPHISM | quasipolynomial, $2^{O((\log n)^{c})}$ (Babai, 2015) | NP-completeness would collapse the polynomial hierarchy to its second level ([2.2](02-02-the-polynomial-hierarchy.md)) |

Neither has been shown NP-intermediate — that would require proving $\mathsf{P} \ne \mathsf{NP}$ — but both would be, if they are neither easy nor complete.

## Picture

![On the left, a large grey ellipse labelled NP containing two smaller ellipses: a blue one labelled P at lower left, and a coral one at upper right labelled NP-complete listing SAT, CLIQUE and HAMPATH. The crescent of NP outside both is annotated NP-intermediate, with a note naming Ladner's language and the two unplaced candidates. On the right, a coral staircase plot rising in four steps against axes labelled input length n and f of n, each tread annotated alternately behave like SAT and behave like the empty set.](assets/01-06-fig1.svg)

The left panel is what Ladner's theorem buys: the crescent is non-empty, conditional on $\mathsf{P} \ne \mathsf{NP}$. Without that hypothesis the picture collapses — if $\mathsf{P} = \mathsf{NP}$ then all three regions coincide and every nontrivial NP problem is complete.

The right panel is how the crescent gets populated, and the shape is the content. The treads get **longer** as you go right, and that is deliberate: each tread must be long enough that the previous stage's diagonalization has had time to find its counterexample, and long enough that no fixed polynomial can map across it. A staircase with even treads would not work.

Note what happens on each kind of tread. On a "behave like SAT" tread the language is as hard as SAT, which is what stops it being in P. On a "behave like the empty set" tread it is trivial, which is what stops it being NP-complete — a reduction from SAT would map long SAT instances into a region where the answer is always no. **Neither property alone is hard to arrange; the difficulty is arranging both at once, and that is exactly what the delayed diagonalization does.**

## Worked examples

**Example 1 (mechanical): find a satisfying assignment with $n$ queries.** Let

$$\varphi = (x_1 \vee x_2 \vee x_3) \wedge (\lnot x_1 \vee \lnot x_2) \wedge (\lnot x_2 \vee \lnot x_3) \wedge (x_1 \vee \lnot x_3).$$

Its satisfying assignments are $010$, $100$ and $101$ (writing $x_1x_2x_3$), but the algorithm does not know that — it sees only an oracle's yes and no.

| query | question | answer | commit |
|---|---|---|---|
| 0 | is $\varphi$ satisfiable? | yes | — |
| 1 | is $\varphi$ with $x_1 = 1$ satisfiable? | yes | $x_1 = 1$ |
| 2 | is $\varphi$ with $x_1 = 1, x_2 = 1$ satisfiable? | **no** | $x_2 = 0$ |
| 3 | is $\varphi$ with $x_1 = 1, x_2 = 0, x_3 = 1$ satisfiable? | yes | $x_3 = 1$ |

Result: $101$. Check it against $\varphi$: clause 1 has $x_1$; clause 2 has $\lnot x_2$; clause 3 has $\lnot x_2$; clause 4 has $x_1$. ✓

Two things to notice. Query 2 came back **no**, and the algorithm used that as information rather than as failure — the no is what proves $x_2$ must be 0. And the algorithm found $101$ rather than $010$ or $100$ purely because it tries 1 before 0; a different tie-breaking rule would find a different assignment, which is why this procedure finds *a* solution and not a canonical one.

**Example 2 (why you'd care): what an NP-intermediate factoring would mean.** Suppose someone proved FACTORING is NP-intermediate — neither in P nor NP-complete.

*The immediate consequence.* Proving it at all requires proving $\mathsf{P} \ne \mathsf{NP}$ on the way, since if $\mathsf{P} = \mathsf{NP}$ there is no middle. So this is not a result anyone will have soon.

*The cryptographic reading.* RSA rests on factoring being hard, and it is often defended with "factoring is a hard problem, like all the NP-complete ones". That defence is confused in both directions. Factoring is almost certainly **not** NP-complete — it sits in $\mathsf{NP} \cap \mathsf{coNP}$, because both a factorization and a primality certificate are short and checkable, and an NP-complete problem in $\mathsf{coNP}$ would force $\mathsf{NP} = \mathsf{coNP}$, which is believed false. So factoring is probably *easier* than SAT.

*And that is the uncomfortable part.* Cryptography does not want its problems to be NP-complete; NP-hardness is a worst-case statement and a cipher needs the *average* instance to be hard. What it wants is a problem that is hard on random instances, which is a different and stronger requirement that NP-completeness does not supply. **The classification that matters for security is not the one this module builds** — which is why [`cryptography` 1.4](../../cryptography/lessons/01-04-computational-security-and-pseudorandomness.md) defines hardness in terms of a distribution and a success probability instead.

## Watch out

- **You might think** Ladner's theorem exhibits an interesting problem in the middle — **but actually** it exhibits a construction. The language is defined as "SAT, sabotaged on stretches chosen to defeat the $k$-th machine", and it is of no interest except as an existence proof. All the natural candidates remain unclassified.
- **You might think** every NP-complete problem is downward self-reducible, so search always reduces to decision — **but actually** that is open. It holds for every natural NP-complete problem and the proofs are ad hoc; there is no theorem covering NP-complete problems in general.
- **You might think** the search-to-decision argument needs the oracle to answer honestly about arbitrary formulas — **but actually** that is exactly what it needs, and it is the reason the count is $n$ rather than 1. Each query is about a *different* formula, so you cannot batch them, and an oracle answering only the original question would be useless.
- **You might think** factoring being in $\mathsf{NP} \cap \mathsf{coNP}$ makes it easy — **but actually** it only makes it unlikely to be NP-complete. $\mathsf{NP} \cap \mathsf{coNP}$ contains everything in P and is not known to contain anything else that is easy; the best classical factoring algorithm is still sub-exponential rather than polynomial.

## One-liner

> If $\mathsf{P} \ne \mathsf{NP}$ then NP has a middle floor, nobody can name anything on it, and meanwhile self-reducibility means the decision-problem framing costs you nothing at all.

## Problems

**P1 (🟢)** Run the search-to-decision procedure on $\psi = (x_1 \vee x_2) \wedge (\lnot x_1 \vee x_3) \wedge (\lnot x_2 \vee \lnot x_3)$, trying 1 before 0 at each variable. (a) Give the table of queries, answers and commitments. (b) Give the assignment found and verify it. (c) Give the total number of oracle queries used, excluding the initial satisfiability check.

**P2 (🟡)** For each statement, say whether it follows from Ladner's theorem, contradicts it, or is independent of it, with a one-clause reason.

(a) If $\mathsf{P} = \mathsf{NP}$, every language in NP except $\emptyset$ and $\Sigma^*$ is NP-complete.
(b) Graph isomorphism is NP-intermediate.
(c) There are infinitely many pairwise non-equivalent degrees of hardness strictly between P and NP-complete.
(d) There is a language in NP that is neither in P nor NP-complete.

**P3 (🔴, optional)** A colleague claims: "Self-reducibility shows that if $\mathsf{P} = \mathsf{NP}$ we could not only decide SAT quickly but *count* its satisfying assignments quickly, since we can find them one at a time." (a) Give the flaw, with a specific formula on $n$ variables where the proposed method fails badly and state how many assignments it has. (b) State what the claim would need instead. (c) The claim is nevertheless *true* — counting is in polynomial time if $\mathsf{P} = \mathsf{NP}$ — but for a different reason. Name the reason in one sentence. (Forward reference: [Lesson 3.3](03-03-todas-theorem-and-approximate-counting.md).)

<details>
<summary>Solutions</summary>

**P1**

(a) The satisfying assignments of $\psi$ are $010$ and $101$ (writing $x_1x_2x_3$), but the procedure sees only oracle answers.

| query | question | answer | commit |
|---|---|---|---|
| 1 | is $\psi$ with $x_1 = 1$ satisfiable? | yes | $x_1 = 1$ |
| 2 | is $\psi$ with $x_1 = 1, x_2 = 1$ satisfiable? | no | $x_2 = 0$ |
| 3 | is $\psi$ with $x_1 = 1, x_2 = 0, x_3 = 1$ satisfiable? | yes | $x_3 = 1$ |

Query 2 answers no because $x_1 = 1$ forces $x_3 = 1$ through the clause $(\lnot x_1 \vee x_3)$, and then $x_2 = 1$ together with $x_3 = 1$ falsifies $(\lnot x_2 \vee \lnot x_3)$.

(b) The assignment found is $\mathbf{101}$. Verify clause by clause: $(x_1 \vee x_2)$ is satisfied by $x_1$; $(\lnot x_1 \vee x_3)$ by $x_3$; $(\lnot x_2 \vee \lnot x_3)$ by $\lnot x_2$. ✓

Note the procedure reached $101$ and not $010$, purely because it tries 1 first at $x_1$. Both are satisfying assignments and the algorithm has no preference between them beyond its tie-breaking rule.

(c) **3 queries**, one per variable, matching the theorem's bound of $n$.

**P2**

(a) **Follows** (as the contrapositive of the theorem's hypothesis, and directly): if $\mathsf{P} = \mathsf{NP}$ then every nontrivial language in NP is NP-complete, because any $A$ can be reduced to any nontrivial $B$ by *solving* $A$ in polynomial time and outputting a fixed yes- or no-instance of $B$. The two trivial languages are excluded because they have no instance of one of the two kinds to output.

(b) **Independent.** Ladner guarantees *some* intermediate language exists; it says nothing about which. Proving graph isomorphism intermediate would in particular prove $\mathsf{P} \ne \mathsf{NP}$, so it is far beyond the theorem.

(c) **Follows**, from Ladner's strengthened version: the intermediate degrees are infinite and densely ordered, so between any two there is a third.

(d) **Independent as stated**, and this is the trap. The theorem's conclusion is conditional on $\mathsf{P} \ne \mathsf{NP}$; stated unconditionally it is unknown, because if $\mathsf{P} = \mathsf{NP}$ it is false by part (a).

**P3**

(a) The flaw is that finding assignments one at a time takes one pass per assignment, and there can be exponentially many. Concretely, take $\varphi = (x_1 \vee \lnot x_1)$ conjoined with nothing else over $n$ variables — or more simply any tautology on $n$ variables, which has $\mathbf{2^n}$ satisfying assignments. Enumerating them one per pass, at $n$ queries each, takes $n2^n$ queries, which is exponential. **The method's cost is proportional to the answer, and the answer can be exponentially large.**

(b) The claim would need an algorithm whose running time is polynomial in the *input length*, independent of how large the count is. Producing a number of magnitude $2^n$ is fine — it has only $n$ bits — but producing it must not require $2^n$ steps.

(c) Because with $\mathsf{P} = \mathsf{NP}$ the whole polynomial hierarchy collapses to $\mathsf{P}$, and counting can be done by **binary search on the count using a language in the hierarchy**: the question "does $\varphi$ have at least $k$ satisfying assignments?" is in NP with the $k$ assignments as certificate, so $n$ queries of that form pin the count down bit by bit. [Lesson 3.3](03-03-todas-theorem-and-approximate-counting.md) shows the converse direction is much stranger — a counting oracle is strong enough to run the entire hierarchy.

</details>

## Flashback

**From Lesson 1.3 (the hierarchy theorems):** Consider the pair $f(n) = n$ and $g(n) = n\log n$. (a) Does the **space** hierarchy theorem give $\mathrm{SPACE}(n) \subsetneq \mathrm{SPACE}(n\log n)$? (b) Does the **time** hierarchy theorem give $\mathrm{TIME}(n) \subsetneq \mathrm{TIME}(n\log n)$? Give the quantity you check in each case, and explain the difference in one sentence.

<details>
<summary>Solution</summary>

(a) **Yes.** The space version needs only $f = o(g)$, and $f/g = n/(n\log n) = 1/\log n \to 0$. So $\mathrm{SPACE}(n) \subsetneq \mathrm{SPACE}(n \log n)$.

(b) **No.** The time version needs $f\log f = o(g)$, and here $f \log f = n\log n$, so

$$\frac{f\log f}{g} = \frac{n\log n}{n\log n} = 1,$$

a constant, which does not tend to zero. The theorem is silent — it does not claim the classes are equal, only that this technique does not separate them.

*The difference.* The extra $\log$ in the time version is the cost of universal simulation: stepping another machine requires locating its state and head among the cells at every step, and that lookup is logarithmic, whereas simulating tape *cells* costs only a constant factor of extra space. So a whole $\log$ factor of the time budget is consumed before any diagonalization happens, and exactly that much extra is needed before a separation appears.

</details>

## Connections

- **Backward:** the construction is [1.3](01-03-the-hierarchy-theorems.md)'s diagonalization delayed over stretches of input lengths rather than applied at every length, and it inherits that technique's weakness — the language it produces is an artefact, not a discovery.
- **Forward:** [2.1](02-01-conp-and-the-shape-of-np.md) makes precise the $\mathsf{NP} \cap \mathsf{coNP}$ argument that keeps factoring out of the NP-complete class, and [2.2](02-02-the-polynomial-hierarchy.md) supplies the hierarchy-collapse argument that does the same for graph isomorphism. [3.2](03-02-sharp-p-completeness-and-parsimonious-reductions.md) reuses self-reducibility to extract a solution from a counting oracle.
- **Sideways:** the "hard but probably not complete" position is exactly the one [`cryptography` 3.2](../../cryptography/lessons/03-02-diffie-hellman-key-exchange.md) and [3.3](../../cryptography/lessons/03-03-rsa-encryption.md) build on, and the distinction between worst-case and average-case hardness that Example 2 raises is the reason [`cryptography` 1.4](../../cryptography/lessons/01-04-computational-security-and-pseudorandomness.md) defines security against a distribution rather than against a worst case.
