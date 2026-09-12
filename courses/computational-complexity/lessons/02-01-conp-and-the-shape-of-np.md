# Complexity Theory · Lesson 2.1: coNP & the shape of NP

> ⏱ ~15 min · Module 2: Space complexity & the polynomial hierarchy · Builds on: [1.2 (NP and nondeterministic time)](01-02-np-ntime-and-nondeterministic-time.md), [1.6 (Ladner and self-reducibility)](01-06-ladner-self-reducibility-search-vs-decision.md) · Unlocks: [2.2 (the polynomial hierarchy)](02-02-the-polynomial-hierarchy.md)

## Why this matters

The definition of NP has a lopsidedness built into it that is easy to read past. A yes-instance comes with a short proof; a no-instance comes with nothing. "This formula is satisfiable" has a one-line certificate. "This formula is unsatisfiable" has no known short proof at all.

That asymmetry is not a quirk of the definition — it is a real and consequential feature, and taking it seriously produces a second class, coNP, a second open question, and the tool that explains why the two most famous unclassified problems in the subject are unclassified. [Lesson 1.6](01-06-ladner-self-reducibility-search-vs-decision.md) claimed that factoring is almost certainly not NP-complete because it lives in $\mathsf{NP} \cap \mathsf{coNP}$. This lesson proves the theorem behind that claim.

There is also a practical reading. Every time you ask a solver to prove something *impossible* — this schedule has no feasible solution, this circuit can never reach a bad state, this program has no execution that deadlocks — you are asking a coNP question, and the absence of short proofs is why those runs take so much longer than the ones that find a witness.

## The idea

For a language $A$, write $\overline{A}$ for its complement. Then

$$\mathsf{coNP} = \{\, \overline{A} : A \in \mathsf{NP} \,\}.$$

Read that carefully, because the "co" is misleading in a specific way: **coNP is not "the languages not in NP".** It is the set of *complements* of NP languages, and a language can perfectly well be in both. $\mathsf{P}$ is in both, since complementing a deterministic decider is free.

The useful reformulation is in terms of proofs. $A \in \mathsf{NP}$ means yes-instances have short certificates. $A \in \mathsf{coNP}$ means **no**-instances have short certificates. So:

| | short proof of yes | short proof of no |
|---|---|---|
| SAT | the satisfying assignment | none known |
| TAUTOLOGY | none known | a falsifying assignment |
| FACTORING (decision) | the factor | a primality certificate |
| $\mathsf{P}$ | run the algorithm | run the algorithm |

A problem in $\mathsf{NP} \cap \mathsf{coNP}$ has short proofs **both ways**, which classical combinatorics calls a *good characterization*: a theorem of the form "either there is an $X$, or there is a $Y$, and never both". Hall's marriage theorem is one; linear programming duality is another. Historically, finding a good characterization for a problem was almost always the step just before finding a polynomial algorithm for it — which is a heuristic rather than a theorem, but a strikingly reliable one.

**And now the theorem that does the work.** If any NP-complete problem were also in coNP, then $\mathsf{NP} = \mathsf{coNP}$. The proof is one line of reduction-chasing, and the contrapositive is the classification tool: anything you can place in $\mathsf{NP} \cap \mathsf{coNP}$ is probably not NP-complete, because NP-completeness would collapse two classes nobody believes are equal.

## The formal version

**Definition ([coNP](../reference.md#conp)).** $\mathsf{coNP} = \{\overline{A} : A \in \mathsf{NP}\}$. Equivalently, $A \in \mathsf{coNP}$ iff there is a polynomial $p$ and a polynomial-time $V$ with

$$w \in A \iff \forall\, c,\ |c| \le p(|w|),\ V(\langle w, c\rangle) = \text{accept}.$$

*In words: NP replaces its existential quantifier with a universal one. Everything else is identical.*

**Definition.** $\text{TAUTOLOGY} = \{\langle\varphi\rangle : \text{every assignment satisfies } \varphi\}$, and $\text{UNSAT} = \overline{\text{SAT}}$. Both are **coNP-complete**: they are in coNP, and every coNP language reduces to them (apply the Cook–Levin reduction of [1.4](01-04-cook-levin-computation-is-satisfiability.md) to the complement and negate).

**Theorem ([completeness transfers to complements](../reference.md#conp-collapse-theorem)).** If some NP-complete language $B$ lies in $\mathsf{coNP}$, then $\mathsf{NP} = \mathsf{coNP}$.

*Proof.* Let $A \in \mathsf{NP}$. By completeness $A \le_p B$, so $\overline{A} \le_p \overline{B}$ — the same reduction function works, since $x \in A \iff f(x) \in B$ gives $x \notin A \iff f(x) \notin B$. Now $B \in \mathsf{coNP}$ means $\overline{B} \in \mathsf{NP}$, and $\mathsf{NP}$ is closed downward under $\le_p$, so $\overline{A} \in \mathsf{NP}$, that is, $A \in \mathsf{coNP}$. Hence $\mathsf{NP} \subseteq \mathsf{coNP}$, and complementing both sides gives equality. $\blacksquare$

**Corollary ([the classification tool](../reference.md#np-intersect-conp)).** If $A \in \mathsf{NP} \cap \mathsf{coNP}$ and $A$ is NP-complete, then $\mathsf{NP} = \mathsf{coNP}$. So placing a problem in $\mathsf{NP} \cap \mathsf{coNP}$ is evidence — conditional on $\mathsf{NP} \ne \mathsf{coNP}$ — that it is not NP-complete.

**Theorem ([factoring is in the intersection](../reference.md#factoring-in-np-intersect-conp)).** $\text{FACT} = \{\langle N, k\rangle : N \text{ has a prime factor} \le k\}$ is in $\mathsf{NP}\cap\mathsf{coNP}$.

*Proof.* In NP: the certificate is a prime factor $p \le k$ together with a primality certificate for $p$ (Pratt certificates are short, and in any case primality is in $\mathsf{P}$ by AKS). In coNP: the certificate for a **no** is the *complete* prime factorization $N = p_1^{e_1}\cdots p_r^{e_r}$ with primality certificates for each $p_i$; the verifier multiplies out, checks the product is $N$, and checks every $p_i > k$. Uniqueness of factorization is what makes this a proof — the factorization exhibited is the only one, so if all its primes exceed $k$ there is no small factor. $\blacksquare$

**Two open questions, and their relationship.**

$$\mathsf{P} = \mathsf{NP} \;\Longrightarrow\; \mathsf{NP} = \mathsf{coNP}, \qquad\text{but the converse is not known.}$$

*Proof of the implication:* if $\mathsf{P} = \mathsf{NP}$ then $\mathsf{NP}$ is closed under complement because $\mathsf{P}$ is. So $\mathsf{NP} \ne \mathsf{coNP}$ would immediately give $\mathsf{P} \ne \mathsf{NP}$ — it is a **strictly harder** thing to prove, and it is also open.

## Picture

![Two overlapping ellipses of equal size, the left one blue and labelled NP listing SAT, CLIQUE and HAMPATH in its outer crescent, the right one coral and labelled coNP listing TAUTOLOGY, UNSAT and NO-CLIQUE in its outer crescent. Their intersection is a dashed grey region labelled NP and coNP, containing factoring and linear programming, and inside that a small solid ellipse labelled P.](assets/02-01-fig1.svg)

The picture is drawn the way almost everyone believes the world is: two classes that overlap without either containing the other. Nothing in it is proved. If $\mathsf{NP} = \mathsf{coNP}$ the two ellipses coincide; if $\mathsf{P} = \mathsf{NP}$ everything collapses to the small one in the middle.

The region worth staring at is the dashed lens. **Everything in it has a good characterization** — a short proof available whichever way the answer goes — and historically that is where problems sit shortly before someone finds a polynomial algorithm. Linear programming was in this lens from the 1950s, by duality, and the ellipsoid method moved it into $\mathsf{P}$ in 1979. Primality was in it by Pratt's certificates from 1975 and moved into $\mathsf{P}$ in 2002.

Factoring is still there, and it has been for fifty years. **The whole of RSA is a bet that this particular problem is the exception to that historical pattern.**

## Worked examples

**Example 1 (mechanical): classify four languages.** For each, say which of NP and coNP it is in as far as the obvious certificates establish, and name the certificate.

| language | in NP? | in coNP? |
|---|---|---|
| $\{\langle G,k\rangle : G$ has a clique of size $\ge k\}$ | **yes** — the $k$ vertices | not known — ruling out all $\binom{n}{k}$ sets has no short proof |
| $\{\langle G,k\rangle : G$ has **no** clique of size $\ge k\}$ | not known | **yes** — a no-instance has a clique to exhibit |
| $\{\langle G \rangle : G$ is bipartite$\}$ | **yes** — the 2-colouring | **yes** — an odd cycle |
| $\{\langle\varphi\rangle : \varphi$ is a tautology$\}$ | not known | **yes** — a falsifying assignment |

Row three is the interesting one. Bipartiteness is in the lens, by König's theorem: a graph is bipartite **iff** it has no odd cycle, so there is a short proof each way. And sure enough, bipartiteness is in $\mathsf{P}$ — breadth-first search two-colours the graph or finds the odd cycle. The good characterization came first historically and the algorithm fell out of it, which is the pattern the picture describes.

**Example 2 (why you'd care): why nobody expects factoring to be NP-complete.** Suppose someone announced a proof that FACT is NP-complete. What would follow?

By the theorem, since $\text{FACT} \in \mathsf{coNP}$ and FACT is NP-complete, $\mathsf{NP} = \mathsf{coNP}$. Unpack what that means: **unsatisfiability would have short proofs.** For every unsatisfiable formula there would be a polynomially long certificate of its unsatisfiability, checkable in polynomial time. Fifty years of proof-complexity research has produced exponential lower bounds for every proof system anyone has proposed — resolution, cutting planes, bounded-depth Frege — and nobody expects such certificates to exist.

So the announcement would be one of the largest results in the field, far larger than a classification of factoring. **That is what "evidence against NP-completeness" means here**: not a proof, but the observation that the classification would drag a much bigger and much less believable theorem along with it.

The same argument, run through a different class, is what keeps graph isomorphism out of the NP-complete club — there the collapse is of the polynomial hierarchy rather than of NP and coNP, and [Lesson 2.2](02-02-the-polynomial-hierarchy.md) builds the machinery for it.

## Watch out

- **You might think** coNP means "not in NP" — **but actually** it means "complement of something in NP", and the two classes overlap in at least all of $\mathsf{P}$. A language in coNP may well also be in NP; that is the interesting case, not a contradiction.
- **You might think** coNP-complete problems are in coNP the way NP-complete ones are in NP, so SAT is coNP-complete too — **but actually** SAT is coNP-complete only if $\mathsf{NP} = \mathsf{coNP}$. The complete problems for the two classes are different: SAT and TAUTOLOGY, and nothing is known to be complete for both.
- **You might think** $\mathsf{NP} \ne \mathsf{coNP}$ and $\mathsf{P} \ne \mathsf{NP}$ are the same conjecture — **but actually** the first implies the second and not conversely, so it is strictly stronger. Proving $\mathsf{NP} \ne \mathsf{coNP}$ would settle P versus NP as a corollary.
- **You might think** FACT being in $\mathsf{NP}\cap\mathsf{coNP}$ makes it a good foundation for cryptography — **but actually** it says nothing about cryptography, which needs hardness on *random* instances. The lens tells you what factoring is not (probably not NP-complete); the security assumption is a separate and much stronger claim, made precisely in [`cryptography` 1.4](../../cryptography/lessons/01-04-computational-security-and-pseudorandomness.md).

## One-liner

> NP certifies its yes-answers and coNP certifies its no-answers, and any problem that can do both is probably not NP-complete — which is the only handle anyone has on factoring and graph isomorphism.

## Problems

**P1 (🟢)** For each language, state whether the obvious certificate places it in NP, in coNP, in both, or in neither, and name the certificate where one exists.

(a) $\{\langle G\rangle : G$ has an Eulerian circuit$\}$.
(b) $\{\langle \varphi \rangle : \varphi$ is **not** satisfiable$\}$.
(c) $\{\langle A, b\rangle : $ the linear system $Ax \le b$ has a real solution$\}$.
(d) $\{\langle M, w, 1^t\rangle : $ the deterministic TM $M$ rejects $w$ within $t$ steps$\}$.

**P2 (🟡)** Prove that if $\mathsf{NP} \ne \mathsf{coNP}$ then $\mathsf{P} \ne \mathsf{NP}$. Then give a one-sentence explanation of why the converse implication is not available, referring to what would have to be constructed.

**P3 (🔴, optional)** A colleague proposes that $\text{TAUTOLOGY} \in \mathsf{NP}$, with this certificate: "the sequence of resolution steps proving the negation unsatisfiable". (a) Say in one sentence what would have to be true of that certificate for the argument to work. (b) State what is actually known about it, and name the consequence if the colleague were right. (c) Construct the general principle: what does a short-proof-system result for a coNP-complete problem always imply?

<details>
<summary>Solutions</summary>

**P1**

(a) **Both**, and in fact in $\mathsf{P}$. Yes-certificate: the circuit itself. No-certificate: a vertex of odd degree, or a witness that the graph is disconnected. Euler's theorem — a connected graph has an Eulerian circuit iff every vertex has even degree — is exactly a good characterization, and it yields a linear-time algorithm.

(b) **coNP only** as far as the obvious certificate goes. This is UNSAT, the complement of SAT; a no-instance (a satisfiable formula) is certified by a satisfying assignment. Whether it is also in NP is precisely the $\mathsf{NP} = \mathsf{coNP}$ question.

(c) **Both.** Yes-certificate: a feasible $x$ — and one of polynomial bit-length exists, by the theory of basic feasible solutions. No-certificate: a Farkas vector $y \ge 0$ with $y^{\mathsf T}A = 0$ and $y^{\mathsf T}b < 0$. Farkas' lemma is the good characterization, and linear programming is in $\mathsf{P}$.

(d) **Both**, and in $\mathsf{P}$. With $t$ written in unary the input has length at least $t$, so simply simulating $M$ for $t$ steps is polynomial in the input length; no certificate is needed in either direction. (With $t$ in binary this would be a completely different problem.)

**P2**

*Proof.* Suppose $\mathsf{P} = \mathsf{NP}$. Let $A \in \mathsf{NP}$. Then $A \in \mathsf{P}$, so some deterministic polynomial-time machine $M$ decides $A$; swapping $M$'s accept and reject states gives a deterministic polynomial-time machine deciding $\overline{A}$, so $\overline{A} \in \mathsf{P} = \mathsf{NP}$, meaning $A \in \mathsf{coNP}$. Hence $\mathsf{NP} \subseteq \mathsf{coNP}$, and taking complements gives $\mathsf{coNP} \subseteq \mathsf{NP}$, so the classes are equal.

That establishes $\mathsf{P} = \mathsf{NP} \Rightarrow \mathsf{NP} = \mathsf{coNP}$; the contrapositive is the claim. $\blacksquare$

*Why not the converse.* To go from $\mathsf{NP} = \mathsf{coNP}$ to $\mathsf{P} = \mathsf{NP}$ you would need to turn the short *unsatisfiability proofs* that the hypothesis supplies into an algorithm that **finds** them, and nothing in the hypothesis provides that — it asserts certificates exist, not that they are constructible in polynomial time, which is the same gap as between NP and P in the first place.

**P3**

(a) The resolution refutation would have to be **polynomially long** in the size of $\varphi$, and checkable in polynomial time. Checkability is fine — each resolution step is verified locally. Length is the entire question.

(b) Resolution refutations are known to require **exponential** length in the worst case: Haken's 1985 lower bound for the pigeonhole principle gives $2^{\Omega(n)}$, and stronger bounds are known for random 3CNF formulas. So this certificate is not polynomially bounded and the argument fails.

If the colleague were right — if some proof system gave polynomially long refutations for all unsatisfiable formulas — then $\text{TAUTOLOGY} \in \mathsf{NP}$, and since TAUTOLOGY is coNP-complete, the theorem of this lesson gives $\mathsf{coNP} \subseteq \mathsf{NP}$ and hence $\mathsf{NP} = \mathsf{coNP}$.

(c) *The general principle.* $\mathsf{NP} = \mathsf{coNP}$ **if and only if** there exists a propositional proof system in which every tautology has a polynomially long proof. One direction is the argument above; the other takes the NP certificate for TAUTOLOGY and reads it *as* a proof system.

This is the Cook–Reckhow programme, and it converts a complexity question into a concrete mathematical one: prove superpolynomial lower bounds for stronger and stronger proof systems, and if you ever reach *all* of them you have separated NP from coNP. Progress has been real but slow, which is a fair summary of the whole field.

</details>

## Flashback

**From Lesson 1.5 (reduction craft & how reductions break):** A colleague proposes to show PARTITION $=\{$ a multiset of positive integers that can be split into two parts of equal sum $\}$ is NP-hard by reducing from SUBSET-SUM as follows:

> Given $\langle S, T\rangle$ with $S = \{a_1,\dots,a_n\}$, output the multiset $S$ itself.

(a) Name the failure mode. (b) Give a concrete instance with at most four numbers on which the reduction gives the wrong answer, stating both answers. (c) State what the correct reduction adds.

<details>
<summary>Solution</summary>

(a) The map **ignores the target $T$**, so it cannot preserve the answer in both directions — failure mode 2, a missing converse, and in the starkest possible form: the output does not depend on half the input.

(b) Take $S = \{1, 2, 4\}$ with $T = 3$.

- SUBSET-SUM answer: **yes** — the subset $\{1,2\}$ sums to 3.
- The reduction outputs $\{1,2,4\}$, whose total is 7. An odd total cannot be split into two equal halves, so PARTITION answers **no**.

A yes-instance maps to a no-instance. Note that picking the instance carelessly hides the bug: at $S = \{1,2,3\}$, $T = 1$ both problems answer yes, so a single lucky test proves nothing. **Choose the instance where the ignored input actually matters** — here, one whose total is odd.

(c) The correct reduction must **encode $T$ into the numbers**. Standard construction: let $\Sigma = \sum a_i$ and output $S \cup \{2\Sigma - T,\ \Sigma + T\}$. The new total is $4\Sigma$, so each part must sum to $2\Sigma$; the two added numbers exceed $\Sigma$ so they cannot share a part, and the part containing $2\Sigma - T$ must be completed by an original subset summing to $T$. Both directions then follow, and the numbers stay polynomial in the input's numeric values — which, as [Lesson 1.5](01-05-reduction-craft-and-how-reductions-break.md) notes, is why PARTITION inherits only *weak* NP-hardness.

</details>

## Connections

- **Backward:** the asymmetry this lesson exploits was built into [1.2](01-02-np-ntime-and-nondeterministic-time.md)'s definition — the existential quantifier over certificates — and the reduction-chasing in the main theorem is [`algorithms` 4.1](../../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md)'s closure property applied to complements.
- **Forward:** [2.2](02-02-the-polynomial-hierarchy.md) iterates the existential-versus-universal move and gets an infinite tower, of which NP and coNP are just the first floor. [4.4](04-04-arithmetization-sumcheck-and-ip-equals-pspace.md) delivers the surprise that coNP problems *do* have short interactive proofs, which is not the same as short certificates and is exactly why interaction is a genuinely new resource.
- **Sideways:** "good characterization" is a combinatorics idea before it is a complexity one — König's theorem in [`graph-theory` 2.4](../../graph-theory/lessons/02-04-konig-covers.md) and the max-flow min-cut theorem in [4.1](../../graph-theory/lessons/04-01-flow-networks-maxflow-mincut.md) are both min-max theorems that put their problem in the lens, and both were followed by polynomial algorithms. Linear programming duality in [`convex-optimization` 3.1](../../convex-optimization/lessons/03-01-lagrangian-dual-function.md) is the continuous version of the same phenomenon.
