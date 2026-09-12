# Complexity Theory · Lesson 2.2: The polynomial hierarchy

> ⏱ ~15 min · Module 2: Space complexity & the polynomial hierarchy · Builds on: [2.1 (coNP)](02-01-conp-and-the-shape-of-np.md) · Unlocks: [2.4 (TQBF)](02-04-tqbf-and-pspace-completeness.md), [4.2 (placing BPP)](04-02-amplification-and-placing-bpp.md)

## Why this matters

NP is "there exists a short certificate". coNP is "for all short certificates". The obvious next question is what happens when you need both — *there exists an $X$ such that for all $Y$* — and the answer is a whole tower of classes, one floor per alternation.

This is not a taxonomic exercise. Three things make it load-bearing.

**It classifies problems nothing else can.** "Is this the *smallest* circuit computing $f$?" and "is $k$ the size of the *largest* clique?" are not in NP by any obvious certificate, because optimality is a universal claim about all competitors. They sit naturally one floor up, and the hierarchy is the vocabulary for saying so.

**Collapses are the standard form of evidence.** Almost every "this problem is probably not NP-complete" argument in the literature ends with "otherwise the polynomial hierarchy collapses". [Lesson 2.1](02-01-conp-and-the-shape-of-np.md) gave you the first-floor version for factoring; the general version lives here, and it is what rules out graph isomorphism.

**It is where randomness lands.** BPP, the class of practical randomized algorithms, has no known relationship to NP — but it does sit inside the second level of this hierarchy, which is the strongest placement anyone has. That is [Lesson 4.2](04-02-amplification-and-placing-bpp.md), and this lesson builds the shelf it sits on.

## The idea

Start with a polynomial-time predicate $V(x, y_1, y_2, \dots)$ and put quantifiers in front of it, each ranging over strings of polynomial length.

$$\exists y_1\, V(x,y_1) \quad\text{is NP.} \qquad \forall y_1\, V(x,y_1) \quad\text{is coNP.}$$

$$\exists y_1 \forall y_2\, V(x,y_1,y_2) \quad\text{is } \Sigma_2^p. \qquad \forall y_1 \exists y_2\, V(x,y_1,y_2) \quad\text{is } \Pi_2^p.$$

And so on: $\Sigma_k^p$ has $k$ alternating blocks starting with $\exists$, and $\Pi_k^p$ has $k$ starting with $\forall$. The union over all $k$ is $\mathsf{PH}$.

**What counts is alternations, not quantifiers.** Two consecutive existential blocks merge into one — $\exists y_1 \exists y_2$ is just $\exists (y_1, y_2)$ — so only the *switches* between $\exists$ and $\forall$ add levels. When you meet a new problem, the way to place it is to write its definition in English, read off the quantifier pattern, and count the switches.

Try it on "is $k$ the size of the largest clique in $G$?":

> **there exists** a set $S$ of size $k$ that is a clique, **and for all** sets $T$ of size $k+1$, $T$ is not a clique.

One switch from $\exists$ to $\forall$, so this is in $\Sigma_2^p$. And notice why it is not obviously in NP: the certificate $S$ proves half of it, but the other half is a claim about everything, and nobody knows a short proof of that.

**The second picture: oracles.** There is an equivalent definition that reads completely differently. $\Sigma_2^p = \mathsf{NP}^{\mathsf{NP}}$ — nondeterministic polynomial time with a SAT oracle. The inner quantifier becomes the oracle: guess $S$ nondeterministically, then ask the oracle a single question that settles the $\forall$ part. In general $\Sigma_{k+1}^p = \mathsf{NP}^{\Sigma_k^p}$, and each level is the previous one handed to a machine as a free subroutine. The two definitions agreeing is a theorem, and having both is genuinely useful: quantifiers are better for *placing* a problem, oracles are better for *proving* things about the classes.

**Collapse.** The levels are *not known* to be distinct — not one separation is proved anywhere in the tower. But they are known to be linked: if two adjacent levels ever coincide, every level above them collapses down too. So the hierarchy is either infinite or it stops dead at some finite floor, with nothing in between. Since most people believe it is infinite, "your assumption collapses PH" is read as a reductio.

## The formal version

**Definition ([the polynomial hierarchy](../reference.md#polynomial-hierarchy)).** Set $\Sigma_0^p = \Pi_0^p = \mathsf{P}$. For $k \ge 1$, $A \in \Sigma_k^p$ iff there is a polynomial-time predicate $V$ and a polynomial $p$ with

$$x \in A \iff \exists y_1 \forall y_2 \exists y_3 \cdots Q_k y_k \; V(x, y_1, \dots, y_k),$$

all $|y_i| \le p(|x|)$ and $Q_k$ alternating. $\Pi_k^p = \mathsf{co}\Sigma_k^p$, obtained by starting with $\forall$. Finally

$$\mathsf{PH} = \bigcup_{k \ge 0} \Sigma_k^p.$$

**Basic facts.** $\Sigma_1^p = \mathsf{NP}$ and $\Pi_1^p = \mathsf{coNP}$. Each of $\Sigma_k^p$ and $\Pi_k^p$ is contained in both $\Sigma_{k+1}^p$ and $\Pi_{k+1}^p$ — padding with an unused quantifier is free.

**Theorem ([oracle characterization](../reference.md#ph-oracle-definition)).** For $k \ge 0$, $\Sigma_{k+1}^p = \mathsf{NP}^{\Sigma_k^p}$.

*In words: each level is a nondeterministic machine that may consult, for free, a complete problem from the level below.*

**Theorem ([collapse](../reference.md#ph-collapse)).** If $\Sigma_k^p = \Pi_k^p$ for some $k$, then $\mathsf{PH} = \Sigma_k^p$.

*Proof idea.* Take a $\Sigma_{k+1}^p$ language, written $\exists y_1\,\psi(x,y_1)$ where $\psi$ defines a $\Pi_k^p$ predicate. By hypothesis that predicate is also $\Sigma_k^p$, so rewrite it starting with $\exists$. Now the outer $\exists y_1$ sits next to another $\exists$, and the two merge — one alternation is gone, so the language is in $\Sigma_k^p$. Induct upward. $\blacksquare$

**Corollary.** $\mathsf{P} = \mathsf{NP}$ collapses PH to $\mathsf{P}$; $\mathsf{NP} = \mathsf{coNP}$ collapses it to $\mathsf{NP}$.

**Complete problems.** $\Sigma_k$-SAT — is $\exists \vec y_1 \forall \vec y_2 \cdots \varphi(\vec y_1,\dots,\vec y_k)$ true, for a $k$-block quantified Boolean formula — is $\Sigma_k^p$-complete. Note what happens as $k$ grows without bound: you get [TQBF](02-04-tqbf-and-pspace-completeness.md), which is PSPACE-complete. **PH has complete problems at every level and is not believed to have one overall**, because a complete problem for PH would have to sit at some finite level, collapsing the hierarchy there.

**Placement.** $\mathsf{PH} \subseteq \mathsf{PSPACE}$: evaluate the quantifier tree depth-first, reusing space across siblings. That is Boss problem 2, and the mechanism is the same one [2.4](02-04-tqbf-and-pspace-completeness.md) uses for TQBF.

## Picture

![A tower diagram. At the bottom a grey box P, above it two columns: a blue column of boxes labelled NP equals Sigma one, Sigma two, Sigma three rising upward, and a coral column labelled coNP equals Pi one, Pi two, Pi three. Dashed diagonal lines cross between the columns showing each level contains both below it. Above the columns an ellipsis, then a grey box PH, then a grey box PSPACE. A right-hand margin labels each row with its number of alternations.](assets/02-02-fig1.svg)

Two columns, because each level has an $\exists$-first version and a $\forall$-first version and they are complements of each other. Neither column contains the other at any level — or rather, nobody knows whether either does, and if they ever coincide at one floor the entire tower above that floor flattens onto it.

The dashed diagonals are the containments that make the tower a tower: $\Sigma_k^p \subseteq \Pi_{k+1}^p$ and $\Pi_k^p \subseteq \Sigma_{k+1}^p$, both by adding a dummy quantifier. **Adding an unused quantifier is free, which is why the levels nest; removing a used one is the hard direction and is what a collapse would do.**

The margin count is the practical tool. To place a problem, write its definition as an English sentence, find the quantifier words — *there is*, *every*, *no*, *some*, *the largest*, *the smallest* — and count how many times the kind of quantifier switches. Superlatives are the ones to watch: "the largest" always hides a $\forall$ over all bigger candidates, which is why optimality questions sit a floor above the corresponding existence questions.

## Worked examples

**Example 1 (mechanical): place four problems.** Write each in quantifier form and count alternations.

| problem | quantifier form | level |
|---|---|---|
| SAT | $\exists a : \varphi(a)$ | $\Sigma_1^p = \mathsf{NP}$ |
| TAUTOLOGY | $\forall a : \varphi(a)$ | $\Pi_1^p = \mathsf{coNP}$ |
| EXACT-CLIQUE: is the largest clique exactly $k$? | $\exists S\,[\,|S| = k$ clique$]\ \wedge\ \forall T\,[\,|T| = k{+}1 \Rightarrow$ not a clique$]$ | $\Sigma_2^p$ |
| MIN-FORMULA: is $\varphi$ the shortest formula for its function? | $\forall \psi$ shorter $\exists a : \varphi(a) \ne \psi(a)$ | $\Pi_2^p$ |

The last two repay attention because they look symmetric and are not.

EXACT-CLIQUE is $\exists\forall$, so $\Sigma_2^p$: you exhibit the clique first, then defend it against all larger ones. A conjunction of an NP condition and a coNP condition always lands in $\Sigma_2^p$ this way.

MIN-FORMULA is $\forall\exists$, so $\Pi_2^p$: the outer claim is about *every* shorter formula, and the inner witness is the input on which it differs. **The quantifier order is forced by the mathematics, not chosen** — you cannot exhibit anything first, because the claim is that nothing shorter works.

**Example 2 (why you'd care): ruling out NP-completeness for graph isomorphism.** Graph isomorphism (GI) is in NP — the certificate is the permutation. Is it NP-complete?

The evidence against it runs through this hierarchy. The key fact, which [Lesson 4.3](04-03-interactive-proofs.md) proves, is that graph **non**-isomorphism has a short *interactive* proof. Combined with a theorem of Goldwasser and Sipser turning private-coin protocols into public-coin ones, this places GI in $\mathsf{NP} \cap \mathsf{coAM}$, where AM is essentially "$\Sigma_2^p$ with randomness".

Then the theorem, due to Boppana, Håstad and Zachos: **if an NP-complete problem is in coAM, the polynomial hierarchy collapses to $\Sigma_2^p$.**

So if GI were NP-complete, PH would flatten at the second level. That is not a contradiction — nobody has proved PH is infinite — but it is a large and unexpected consequence, and the community reads it as strong evidence GI is not NP-complete. Babai's 2015 quasipolynomial algorithm points the same way from the algorithmic side.

**The shape of the argument is the thing to take away**, because you will meet it repeatedly: *place the problem or its complement unexpectedly low in the hierarchy, then show NP-completeness would drag the whole tower down.* It is the same move as [2.1](02-01-conp-and-the-shape-of-np.md)'s factoring argument, one floor higher.

## Watch out

- **You might think** more quantifiers means a higher level — **but actually** only *alternations* count. $\exists y_1 \exists y_2 \exists y_3\, V$ is still NP, because the three blocks merge into a single existential over the concatenation.
- **You might think** the levels are known to be distinct, since the hierarchy is drawn as a tower — **but actually** not a single separation is proved anywhere in it. $\mathsf{P} = \mathsf{PH}$ is consistent with everything known, and would follow from $\mathsf{P} = \mathsf{NP}$.
- **You might think** PH has a complete problem, since every level does — **but actually** it almost certainly does not: a PH-complete problem would live at some finite level $k$, and then everything above it would reduce to level $k$, collapsing the hierarchy. **"PH has no complete problem" and "PH is infinite" are the same statement.**
- **You might think** $\Sigma_2^p = \mathsf{NP}^{\mathsf{NP}}$ means "NP problems are easy at this level, so the oracle is doing nothing" — **but actually** the oracle answers *any* SAT question in one step, including questions the machine could not otherwise answer at all, and the extra power is exactly one alternation.
- **You might think** a superlative like "largest" is just an existence claim — **but actually** every optimality statement contains a hidden $\forall$ over all better candidates, which is why EXACT-CLIQUE is a level above CLIQUE. This is the single most common source of misplacement.

## One-liner

> Count the times the quantifier switches; that number is the floor, and any two floors coinciding brings the whole tower down on top of them.

## Problems

**P1 (🟢)** Place each of the following, giving the quantifier form and the tightest level among $\mathsf{P}$, $\Sigma_1^p$, $\Pi_1^p$, $\Sigma_2^p$, $\Pi_2^p$ that the obvious formulation yields.

(a) $\{\langle G, k\rangle : G$ has a vertex cover of size $\le k\}$.
(b) $\{\langle \varphi, \psi\rangle : \varphi$ and $\psi$ are logically equivalent$\}$.
(c) $\{\langle G \rangle : G$ has a unique maximum independent set$\}$.
(d) $\{\langle \varphi\rangle : $ there is an assignment satisfying $\varphi$ in which **every** variable set true appears in at least one clause positively$\}$.

**P2 (🟡)** Prove that if $\mathsf{NP} = \mathsf{coNP}$ then $\mathsf{PH} = \mathsf{NP}$. (a) Give the argument for $\Sigma_2^p \subseteq \mathsf{NP}$ explicitly, showing where the hypothesis is used. (b) State what makes the induction to all levels go through in one sentence.

**P3 (🔴, optional)** Suppose someone proves that a specific problem $A$ is both NP-complete and in $\Pi_2^p \cap \Sigma_2^p$. (a) Does the hierarchy collapse? Answer yes or no with the reason. (b) Now suppose instead they prove $A$ is NP-complete and in $\mathsf{coNP}$. Does it collapse, and to what level? (c) Explain the difference between (a) and (b) in one sentence, in terms of which level the surprising membership is at relative to the completeness.

<details>
<summary>Solutions</summary>

**P1**

(a) $\exists S : |S| \le k$ and $S$ covers every edge. One block, no alternation: $\Sigma_1^p = \mathsf{NP}$.

(b) $\forall a : \varphi(a) = \psi(a)$. One universal block: $\Pi_1^p = \mathsf{coNP}$. (It is coNP-complete, by reduction from TAUTOLOGY with $\psi$ the constant true.)

(c) $\exists S\,\big[S$ is independent, $|S| = k\big] \wedge \forall T \big[T$ independent and $|T| \ge |S| \Rightarrow T = S\big]$, where $k$ is also existentially quantified. The pattern is $\exists\forall$: $\Sigma_2^p$. Uniqueness, like optimality, always contributes a $\forall$.

(d) $\exists a\,[\varphi(a) \wedge \text{(a polynomial-time checkable condition on } a)]$. The inner condition is a property of the assignment and the formula, checkable by one scan, so it is *not* a quantifier. One block: $\Sigma_1^p = \mathsf{NP}$. **The trap is the word "every" in the problem statement**, which ranges over the variables of the given formula — a polynomially sized, explicitly listed set — rather than over exponentially many certificate strings. A universal quantifier over a polynomial-size domain is a loop, not an alternation.

**P2**

(a) Let $A \in \Sigma_2^p$, so $x \in A \iff \exists y_1 \forall y_2\, V(x,y_1,y_2)$ with $V$ polynomial-time and both certificates polynomially bounded.

Fix $x$ and $y_1$ and consider the predicate $\psi(x,y_1) \equiv \forall y_2\, V(x,y_1,y_2)$. As a language in the pair $\langle x, y_1\rangle$ this is in $\mathsf{coNP}$ by definition. **Here is where the hypothesis enters:** $\mathsf{coNP} = \mathsf{NP}$, so that same language is in NP, and therefore has an existential form — there is a polynomial-time $W$ and a polynomial bound with $\psi(x,y_1) \iff \exists z\, W(x,y_1,z)$.

Substituting, $x \in A \iff \exists y_1 \exists z\, W(x,y_1,z) \iff \exists \langle y_1, z\rangle\, W(x,y_1,z)$, a single existential block over a polynomially long string with a polynomial-time predicate. So $A \in \mathsf{NP}$.

(b) The induction goes through because the step just performed is generic: it converts a $\Sigma_{k+1}^p$ formula into a $\Sigma_k^p$ one by rewriting its inner $\Pi_k^p$ part existentially and merging, and the hypothesis $\mathsf{NP} = \mathsf{coNP}$ propagates upward to give $\Sigma_k^p = \Pi_k^p$ at every level by the same substitution.

**P3**

(a) **No.** $\Sigma_2^p \cap \Pi_2^p$ contains all of $\mathsf{NP}$ already — every NP language is in $\Sigma_1^p \subseteq \Sigma_2^p$ and in $\Pi_2^p$ by padding — so the membership is not surprising and carries no information. An NP-complete problem is automatically in that intersection.

(b) **Yes**, to $\mathsf{NP}$. This is exactly [Lesson 2.1](02-01-conp-and-the-shape-of-np.md)'s theorem: an NP-complete problem in coNP gives $\mathsf{NP} = \mathsf{coNP}$, and by P2 the hierarchy then collapses to $\mathsf{NP} = \Sigma_1^p$.

(c) The difference is whether the claimed membership is at a level **below** the problem's completeness or at or above it: a membership below is genuine new information and forces a collapse, while a membership at or above the level where the problem already sits is free and forces nothing. **Completeness for level $k$ plus membership in level $k$'s complement class is what collapses; completeness for level $k$ plus membership in level $k+1$ is a tautology.**

</details>

## Flashback

**From Lesson 2.1 (coNP & the shape of NP):** For each language, say whether the obvious certificate places it in NP, coNP, both or neither, and name the certificate.

(a) $\{\langle G\rangle : G$ is connected$\}$.
(b) $\{\langle G, k\rangle : G$ has chromatic number exactly $k\}$, considering only the "at most $k$" half.
(c) $\{\langle \varphi \rangle : \varphi$ has at least two satisfying assignments$\}$.
(d) $\{\langle N \rangle : N$ is prime$\}$.

<details>
<summary>Solution</summary>

(a) **Both.** Yes-certificate: a spanning tree, checkable by verifying it has $n-1$ edges and no cycle. No-certificate: a proper subset $S$ of vertices with no edge leaving it. Connectivity is in $\mathsf{P}$ by breadth-first search, which is consistent — everything in $\mathsf{P}$ is in both classes.

(b) **NP.** The certificate for "$G$ is $k$-colourable" is the colouring, checked edge by edge. The complement half is not known to be in NP, which is exactly why the *exact* version needs $\Sigma_2^p$ as in this lesson's Example 1.

(c) **NP.** The certificate is the pair of distinct satisfying assignments, checked by evaluating $\varphi$ twice and comparing the two strings. Not known to be in coNP, for the same reason SAT is not. (This is DOUBLE-SAT, the course's Boss problem 1.)

(d) **Both**, and in fact in $\mathsf{P}$. Yes-certificate: a Pratt certificate, a recursively verified witness that some $g$ has order $N-1$ modulo $N$. No-certificate: a nontrivial factor. Primality sat in this lens from 1975 until the AKS algorithm resolved it in 2002 — a clean instance of the pattern that lens membership tends to precede a polynomial algorithm. See [`number-theory` 5.3](../../number-theory/lessons/05-03-primality-testing.md).

</details>

## Connections

- **Backward:** the first floor of the tower is [2.1](02-01-conp-and-the-shape-of-np.md)'s NP and coNP, and the collapse theorem is that lesson's argument iterated — merge two like quantifiers, lose an alternation, induct.
- **Forward:** [2.4](02-04-tqbf-and-pspace-completeness.md) lets $k$ grow with the input instead of staying fixed and lands at PSPACE, and [4.2](04-02-amplification-and-placing-bpp.md) puts BPP inside $\Sigma_2^p$, which is the strongest placement of randomized computation anyone has. [5.2](05-02-karp-lipton-and-the-lower-bound-program.md)'s Karp–Lipton theorem is another collapse-to-$\Sigma_2^p$ result, with a circuit hypothesis instead of a randomness one.
- **Sideways:** the quantifier-counting move is the arithmetical hierarchy of computability theory with polynomial bounds imposed — there $\Sigma_1$ is the recognizable sets and the levels are provably distinct, and the difference is instructive: unbounded quantifiers can be separated by diagonalization, while bounded ones cannot, which is [1.3](01-03-the-hierarchy-theorems.md)'s limitation showing up again.
