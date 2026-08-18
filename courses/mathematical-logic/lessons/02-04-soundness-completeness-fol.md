# Logic & Set Theory · Lesson 2.4: Soundness & Gödel's Completeness Theorem

> ⏱ ~15 min · Module 2: First-Order Logic, Models & Completeness · Builds on: [2.3 Translation & Quantifier Order](02-03-translation-quantifier-order.md), [1.4 A Proof System & Its Completeness](01-04-proof-system-completeness.md) · Unlocks: [3.1 Naive Sets & Russell's Paradox](03-01-russells-paradox.md)

## Why this matters

You now have two completely separate notions of "follows." One is about **meaning**: $\Gamma \models \varphi$ says $\varphi$ is true in every structure where all of $\Gamma$ is true — you check it by ranging over all possible worlds. The other is about **symbol-pushing**: $\Gamma \vdash \varphi$ says there is a finite formal derivation of $\varphi$ from $\Gamma$ — you check it by producing a proof. These have no *a priori* reason to agree. Gödel's completeness theorem (his 1929 thesis, not the incompleteness theorems) says that for first-order logic they agree *exactly*. That single fact is why a finite, mechanical, checkable proof can certify a claim about infinitely many structures at once — and its shadow, **compactness**, is the workhorse that builds nonstandard models, infinite objects, and non-axiomatizability results throughout logic, algebra, and analysis.

## The idea

Picture two machines. The **truth machine** takes $\Gamma$ and $\varphi$ and answers "is $\varphi$ forced in every model of $\Gamma$?" — it reasons about all structures, an infinite and semantic thing. The **proof machine** takes $\Gamma$ and $\varphi$ and answers "can I derive $\varphi$ from $\Gamma$ in finitely many rule-applications?" — it shuffles strings, a finite and syntactic thing.

**Soundness** is the easy, sanity-checking direction: the proof machine never lies. If it hands you a derivation, the conclusion really is true in every model. A proof system that failed this would be worthless.

**Completeness** is the deep direction, and it is genuinely surprising: the proof machine never *misses*. If $\varphi$ is forced in every model of $\Gamma$ — no matter how — then there exists a finite formal proof of it. Semantic truth, however abstractly it holds, always leaves a finite paper trail. Nothing is "true in all models for no provable reason."

Put together: **provable $=$ valid.** The two machines are the same machine. And because proofs are *finite* objects that mention only *finitely many* premises, completeness secretly asserts a finiteness principle about satisfiability — that is **compactness**, and it is where all the surprising consequences come from.

## The formal version

Fix a first-order language. Throughout, $\Gamma$ is a set of sentences and $\varphi$ a sentence.

**The proof system (the idea, not every rule).** A first-order proof system takes the propositional proof system of [Lesson 1.4](01-04-proof-system-completeness.md) — its axioms and *modus ponens* (from $\psi$ and $\psi \to \chi$, infer $\chi$) — and bolts on machinery for the quantifiers and equality. The two characteristic moves are:

- **Universal instantiation:** from $\forall x\, \varphi$ infer $\varphi[t/x]$ (substitute any term $t$ for $x$, respecting the capture rules of [Lesson 2.1](02-01-quantifiers-syntax.md)). *If it holds for all $x$, it holds for this particular $t$.*
- **Universal generalization:** if you derive $\varphi$ having assumed *nothing special* about $x$ (formally: $x$ is not free in any premise used), infer $\forall x\, \varphi$. *An arbitrary-but-fixed argument about $x$ proves the universal.*

Plus axioms making $=$ an equivalence relation that respects all functions and predicates. You do not need the exact list — only that $\Gamma \vdash \varphi$ means "$\varphi$ sits at the bottom of a finite derivation whose every line is an axiom, a member of $\Gamma$, or follows from earlier lines by a rule."

**Soundness.**
$$\Gamma \vdash \varphi \quad\Longrightarrow\quad \Gamma \models \varphi.$$
*In words:* anything you can derive from $\Gamma$ is true in every model of $\Gamma$ — the proof system only ever certifies genuine logical consequences.

*Why it's true (sketch).* Induct on the length of the derivation. Each logical axiom is *valid* (true in every structure under every assignment — you can verify this schema by schema), and each rule *preserves truth in a structure*: if a structure $\mathcal{M}$ satisfies the premises of *modus ponens* or instantiation, it satisfies the conclusion; generalization is exactly justified by its side-condition that $x$ was arbitrary. So truth in every model of $\Gamma$ propagates down every line to $\varphi$. $\blacksquare$

**Gödel's Completeness Theorem.**
$$\Gamma \models \varphi \quad\Longrightarrow\quad \Gamma \vdash \varphi.$$
*In words:* if $\varphi$ is a logical consequence of $\Gamma$ — true in **every** structure satisfying $\Gamma$ — then there is a **finite** formal proof of $\varphi$ from $\Gamma$. Every semantic entailment is witnessed syntactically.

Combining the two: $\Gamma \vdash \varphi \iff \Gamma \models \varphi$. For first-order logic, syntax and semantics coincide.

> **Do not confuse this with the *incompleteness* theorems (Module 5).** The names collide but the claims are opposite in flavor. *Completeness* is about the **logic**: the *logical* consequences of any $\Gamma$ are all provable. *Incompleteness* (Lesson 5.1) is about a **particular theory**: no consistent, effectively-axiomatized $\Gamma$ strong enough to encode arithmetic can prove *every true sentence of arithmetic* — there will be a true $\varphi$ with $\Gamma \nvdash \varphi$. No contradiction: the incompleteness $\varphi$ is *not* a logical consequence of $\Gamma$ (it is false in some model of $\Gamma$, a nonstandard one), so completeness never promised a proof of it. Completeness says "$\vdash$ catches all of $\models$"; incompleteness says "$\models$ over a fixed $\Gamma$ can't catch all *truths in the intended model*."

**The equivalent form: consistent $\iff$ satisfiable.** Call $\Gamma$ **consistent** if $\Gamma \nvdash \bot$ (no contradiction is derivable), and **satisfiable** if it has a model. Completeness is logically equivalent to:
$$\Gamma \text{ is consistent} \quad\Longleftrightarrow\quad \Gamma \text{ has a model.}$$
*In words:* a set of axioms is free of formal contradiction exactly when some structure makes it all true.

The ($\Leftarrow$) direction is just soundness (a model makes $\bot$ unsatisfiable, so it blocks any derivation of $\bot$). The ($\Rightarrow$) direction — *every consistent theory has a model* — is the substance, and it repackages completeness: if $\Gamma \models \varphi$ but $\Gamma \nvdash \varphi$, then $\Gamma \cup \{\neg\varphi\}$ is consistent (a derivation of $\bot$ from it would give $\Gamma \vdash \varphi$ by reductio), so it has a model $\mathcal{M}$; but then $\mathcal{M} \models \Gamma$ and $\mathcal{M} \not\models \varphi$, contradicting $\Gamma \models \varphi$. This "model existence" form is how the theorem is actually proved (Henkin's construction builds a model out of the syntax itself).

**Compactness (the corollary that does the work).**
$$\Gamma \text{ is satisfiable} \quad\Longleftrightarrow\quad \text{every finite subset of } \Gamma \text{ is satisfiable.}$$
*In words:* an infinite set of axioms has a model as soon as each of its finite chunks does — satisfiability is a *finite* property.

*Why it is completeness in disguise.* The ($\Rightarrow$) direction is trivial: a model of $\Gamma$ models every subset. For ($\Leftarrow$), argue the contrapositive. Suppose $\Gamma$ has no model. By the consistent-$\iff$-satisfiable form, $\Gamma$ is *inconsistent*: $\Gamma \vdash \bot$. But a derivation is a **finite** string; it cites only finitely many premises, say $\Gamma_0 \subseteq \Gamma$. So $\Gamma_0 \vdash \bot$, i.e. $\Gamma_0$ is inconsistent, so by soundness $\Gamma_0$ has no model. A finite subset already fails. $\blacksquare$ The entire miracle is *proofs are finite* — compactness is that finiteness read on the semantic side.

**Löwenheim–Skolem (a one-paragraph taste).** These theorems say first-order logic is nearsighted about *size*. If a theory has an infinite model, then it has a model of **every** infinite cardinality at least the size of its language: you can always shrink an infinite model down to a countable one (downward Löwenheim–Skolem) or blow it up to any larger cardinal (upward). The unsettling consequence — the **Skolem paradox** — is that ZFC, the set theory of Module 3, *if consistent* has a **countable** model $\mathcal{M}$, even though ZFC proves "there exist uncountable sets." No contradiction: $\mathcal{M}$ contains an element it *believes* is uncountable, and it is right *internally* — the bijection to $\mathbb{N}$ that would witness countability simply is not an element of $\mathcal{M}$. "Uncountable" is a claim about which functions exist, and that is relative to the model.

## Concrete instance

**Claim: finiteness is not first-order axiomatizable.** There is no set $\Sigma$ of first-order sentences whose models are *exactly* the finite structures. Compactness kills it in one stroke.

Work in the empty signature (structures are just bare sets — no relations or functions). For each $n \ge 1$ let $\lambda_{\ge n}$ be the sentence "there exist at least $n$ distinct elements":
$$\lambda_{\ge n} \;:=\; \exists x_1\, \exists x_2 \cdots \exists x_n\; \bigwedge_{1 \le i < j \le n} \neg\,(x_i = x_j).$$
A structure satisfies $\lambda_{\ge n}$ exactly when its domain has $\ge n$ elements.

Now **suppose**, for contradiction, that some $\Sigma$ has the finite structures as its precise class of models. Consider
$$\Gamma \;=\; \Sigma \;\cup\; \{\lambda_{\ge n} : n \ge 1\}.$$

*Every finite subset of $\Gamma$ is satisfiable.* Take any finite $\Delta \subseteq \Gamma$. It contains finitely many of the $\lambda_{\ge n}$; let $N$ be the largest index appearing (take $N=1$ if none do). Pick any **finite** set with $N$ elements — say $\{1, 2, \dots, N\}$. It has $\ge N$ elements, so it satisfies every $\lambda_{\ge n}$ in $\Delta$; and being finite, it is a model of $\Sigma$, so it satisfies the $\Sigma$-part of $\Delta$ too. Hence $\Delta$ has a model. (This step uses only that arbitrarily large *finite* sets exist — which they do.)

*Apply compactness.* Every finite subset of $\Gamma$ is satisfiable, so $\Gamma$ itself is satisfiable: there is a structure $\mathcal{M} \models \Gamma$.

*Extract the contradiction.* Since $\mathcal{M} \models \lambda_{\ge n}$ for **every** $n$, the domain of $\mathcal{M}$ has at least $n$ elements for every $n$ — so $\mathcal{M}$ is **infinite**. But $\mathcal{M} \models \Sigma$, and every model of $\Sigma$ is supposed to be finite. Contradiction.

Therefore no such $\Sigma$ exists: **"being finite" cannot be pinned down by any first-order theory.** The engine is exactly compactness — arbitrarily large finite models are "glued" by the finite-satisfiability of $\Gamma$ into a single infinite model that your would-be axioms can't exclude.

## Worked examples

**Example 1 (soundness as a non-provability tool).** Show that $\{\exists x\, P(x),\; \exists x\, Q(x)\} \nvdash \exists x\,(P(x) \land Q(x))$ — you cannot derive "something is both $P$ and $Q$" from "something is $P$ and something is $Q$."

Directly hunting through all failed proof attempts is hopeless. Instead use soundness *contrapositively*: if the sequent were derivable, soundness would force $\{\exists x\, P(x), \exists x\, Q(x)\} \models \exists x\,(P(x)\land Q(x))$. So it suffices to exhibit **one** model of the premises that falsifies the conclusion. Take domain $\{a, b\}$ with $P$ true only of $a$ and $Q$ true only of $b$. Then $\exists x\,P(x)$ holds (witness $a$), $\exists x\,Q(x)$ holds (witness $b$), but no element is both $P$ and $Q$, so $\exists x\,(P(x)\land Q(x))$ is false. The entailment fails, so by soundness the derivation cannot exist. $\blacksquare$ *This is the everyday use of soundness: a single counter-model certifies un-provability.*

**Example 2 (compactness builds an infinite object).** A graph is **$3$-colorable** if its vertices can be painted with $3$ colors so adjacent vertices differ. Claim: *if every finite subgraph of an infinite graph $G$ is $3$-colorable, then $G$ itself is.*

Set up a first-order language with three unary predicates $R, W, B$ (the colors) and, for the fixed graph $G$, a constant $c_v$ for each vertex $v$. Let $\Gamma$ collect:
- for each vertex $v$: $R(c_v) \lor W(c_v) \lor B(c_v)$, and that at most one holds (a proper coloring assigns one color);
- for each edge $vw$: $\neg(R(c_v)\land R(c_w))$, $\neg(W(c_v)\land W(c_w))$, $\neg(B(c_v)\land B(c_w))$.

A model of $\Gamma$ *is* a proper $3$-coloring of $G$. Any finite subset of $\Gamma$ mentions only finitely many vertices, hence lives inside a finite subgraph — which is $3$-colorable by hypothesis, giving that finite subset a model. By **compactness**, all of $\Gamma$ has a model: a $3$-coloring of the entire infinite $G$. $\blacksquare$ *Finite colorability, glued into global colorability — the same move as the Concrete instance, now building something you want instead of forbidding it.*

## Watch out

- **Completeness $\ne$ incompleteness.** You might think "Gödel proved logic is incomplete." He proved first-order logic is **complete** (1929) *and* that arithmetic theories are **incomplete** (1931). Different objects: completeness is a property of the *consequence relation* ($\vdash$ catches all of $\models$); incompleteness is a limitation of *specific axiom systems* relative to *truth in the standard model*. Both can hold at once, and do.
- **Compactness needs infinitely many sentences to bite.** You might think it says something about a single formula. It is only interesting for *infinite* $\Gamma$: it lets an infinite axiom set inherit a model from its finite pieces. For finite $\Gamma$ it is vacuous.
- **"Every finite subset satisfiable" does not mean one structure fits all the finite subsets in sight.** Each finite subset may need a *different* model (in the finiteness example, subset with max index $N$ used an $N$-element set). Compactness is the non-trivial promise that a *single* model nonetheless satisfies the whole infinite set.
- **Löwenheim–Skolem means no infinite structure is first-order categorical.** You might hope to write down axioms whose *only* model is $(\mathbb{N}, +, \cdot)$ up to isomorphism. Impossible: any theory with an infinite model has models of other cardinalities, and even at the same cardinality, nonstandard ones (Problem 3).

## One-liner

> For first-order logic, provable and valid are the same thing ($\vdash \,=\, \models$) — and because proofs are finite, that identity leaks out as compactness, which conjures infinite models from finite fragments.

## Problems

**P1 (🟢)** Use soundness to show $\{\forall x\,(P(x) \to Q(x)),\; \exists x\, P(x)\} \nvdash \forall x\, Q(x)$. (Find one model of the two premises in which $\forall x\, Q(x)$ fails, then cite soundness.)

**P2 (🟡)** Deduce from the Concrete instance that **infiniteness**, although axiomatizable by the *infinite* scheme $\{\lambda_{\ge n} : n \ge 1\}$, cannot be captured by any single first-order sentence. (Hint: what would the negation of such a sentence axiomatize?)

**P3 (🔴, optional)** Let $\mathrm{Th}(\mathbb{N})$ be the set of *all* first-order sentences true in the standard structure $\mathbb{N} = (\mathbb{N}; 0, S, +, \cdot, <)$. Add a fresh constant symbol $c$ and consider
$$\Gamma = \mathrm{Th}(\mathbb{N}) \;\cup\; \{\, c > \underline{n} : n \in \mathbb{N} \,\},$$
where $\underline{n} = S(S(\cdots S(0)))$ is the numeral for $n$. Use compactness to build a model of $\mathrm{Th}(\mathbb{N})$ containing an element larger than every numeral (a *nonstandard* natural number). What does this say about pinning down $\mathbb{N}$ with first-order axioms?

<details>
<summary>Solutions</summary>

**P1** By soundness, a derivation would force the semantic entailment $\{\forall x\,(P(x)\to Q(x)),\, \exists x\, P(x)\} \models \forall x\, Q(x)$; so one counter-model suffices to rule the derivation out. Take domain $\{a, b\}$ with $P$ true only of $a$, and $Q$ true only of $a$ (so $Q(b)$ is false). Check the premises: $\forall x\,(P(x)\to Q(x))$ holds — the only element with $P$ is $a$, and $Q(a)$ is true, while $P(b)$ is false so the implication holds vacuously at $b$; and $\exists x\, P(x)$ holds (witness $a$). But $\forall x\, Q(x)$ is **false**, since $Q(b)$ fails. The entailment fails, so by soundness the sequent is not derivable. $\blacksquare$

**P2** Suppose, for contradiction, some *single* sentence $\sigma$ had exactly the infinite structures as its models. Then its negation $\neg\sigma$ is a single sentence whose models are exactly the structures that are *not* infinite — i.e. exactly the finite structures. But $\{\neg\sigma\}$ is a (one-element, hence perfectly good) set of first-order sentences axiomatizing finiteness, which the Concrete instance proved impossible. Contradiction. So no single sentence captures infiniteness — you genuinely need the infinite scheme $\{\lambda_{\ge n}\}$. (Equivalently: infiniteness is axiomatizable but not *finitely* axiomatizable.) $\blacksquare$

**P3** Check every finite subset of $\Gamma$ is satisfiable, then invoke compactness. Let $\Delta \subseteq \Gamma$ be finite. Its constraints on $c$ are finitely many, say $c > \underline{n}$ for $n$ in some finite set with maximum $N$. Interpret the new constant $c$ as the actual number $N+1$ inside the *standard* structure $\mathbb{N}$. Then $\mathbb{N}$ (so interpreted) satisfies every $c > \underline{n}$ in $\Delta$ because $N+1 > n$ for each such $n$; and it satisfies every $\mathrm{Th}(\mathbb{N})$-sentence in $\Delta$ because those are true in $\mathbb{N}$ by definition. So $\Delta$ has a model.

Every finite subset is satisfiable, so by **compactness** the whole $\Gamma$ has a model $\mathcal{M}$. Since $\mathcal{M} \models \mathrm{Th}(\mathbb{N})$, it satisfies *exactly the same first-order sentences* as $\mathbb{N}$ (it is elementarily equivalent to $\mathbb{N}$). Yet $\mathcal{M}$ contains the element $c^{\mathcal{M}}$, which satisfies $c > \underline{n}$ for every $n$ — an element **greater than every standard numeral**. So $c^{\mathcal{M}}$ is a nonstandard natural number, and $\mathcal{M} \not\cong \mathbb{N}$.

Upshot: no first-order theory — not even the *complete* theory $\mathrm{Th}(\mathbb{N})$ listing every truth about the naturals — pins $\mathbb{N}$ down up to isomorphism. First-order logic cannot express "and nothing else," which is precisely the gap the incompleteness theorems (Module 5) exploit: the unprovable Gödel sentence is *false* in models like $\mathcal{M}$ and *true* in $\mathbb{N}$. $\blacksquare$

</details>

## Flashback

**From [Lesson 2.3](02-03-translation-quantifier-order.md) (Translation & Quantifier Order):** Work over the domain $\mathbb{R}$ with the usual order $<$. Consider
$$A:\ \forall x\, \exists y\,(y > x), \qquad\qquad B:\ \exists y\, \forall x\,(y > x).$$
(a) Translate $A$ and $B$ into plain English. (b) Which is true over $\mathbb{R}$, and which is false? (c) Write the negation $\neg B$ in **prenex** form — all quantifiers out front, no $\neg$ left in front of a quantifier.

<details>
<summary>Solution</summary>

(a) $A$: "for every real number there is a larger real number." $B$: "there is a real number larger than *every* real number" — a single $y$ that beats all $x$ at once. The only change is the quantifier *order*, and it flips the meaning entirely.

(b) $A$ is **true**: given any $x$, take $y = x + 1$. $B$ is **false**: no real is larger than every real (it would have to be larger than itself). This is the classic $\forall\exists$ vs. $\exists\forall$ asymmetry — swapping the order is not harmless.

(c) Push the negation inward, flipping each quantifier and negating the matrix:
$$\neg B \;=\; \neg\,\exists y\, \forall x\,(y > x) \;\equiv\; \forall y\, \exists x\, \neg\,(y > x) \;\equiv\; \forall y\, \exists x\,(x \ge y).$$
*In words:* for every real $y$ there is a real $x$ with $x \ge y$ — obviously true (take $x = y$), consistent with $B$ being false. $\blacksquare$

</details>

## Connections

- **Backward:** this closes the loop opened in [Lesson 1.4](01-04-proof-system-completeness.md), where you saw soundness and completeness for *propositional* logic; the first-order versions are the same slogan ($\vdash = \models$) with quantifier rules added and compactness now a genuinely powerful tool. The satisfaction relation $\models$ being tested here is Tarski's from [Lesson 2.2](02-02-structures-satisfaction.md).
- **Forward:** the Löwenheim–Skolem / Skolem-paradox thread lands squarely in Module 3 — the set theory ([Lesson 3.1](03-01-russells-paradox.md) onward) whose *own* first-order axioms have surprisingly small models. And the sharp line drawn here between *completeness* and *incompleteness* is exactly the distinction Module 5 ([Lesson 5.1](05-01-incompleteness-first-theorem.md)) turns on; the nonstandard model of Problem 3 is where the Gödel sentence hides.
- **Sideways (computation):** completeness says validity is *semi-decidable* — enumerate all proofs and you will eventually find one for any valid $\varphi$. But [Lesson 5.2](05-02-second-theorem-undecidability.md) and the future `theory-of-computation` course show validity is *not decidable* (the Entscheidungsproblem, via the halting problem): you can confirm validity but can never be sure a non-halting search means invalidity. Completeness and undecidability living together is one of logic's sharpest surprises.
- **Sideways (analysis/algebra):** the compactness argument that conjured an infinite model (Concrete instance) and a nonstandard number (Problem 3) is the same device behind *nonstandard analysis* (infinitesimals as elements above/below all standard reals) and behind many "if all finite pieces work, the whole works" theorems across `real-analysis` and combinatorics.
