# Measure Theory · Lesson 1.2: σ-algebras and measurable spaces

> ⏱ ~15 min · Module 1: σ-algebras and the construction of measure · Builds on: [Lesson 1.1](01-01-where-riemann-fails.md) · Unlocks: [Lesson 1.3](01-03-measures-properties.md)

## Why this matters

Lesson 1.1 ended on a promise: to fix the Riemann integral we must **measure the sets first**. But measure *which* sets? You cannot consistently assign a size to *every* subset of $\mathbb{R}$ — Lesson 1.6 builds an explicit set that breaks any translation-invariant, countably-additive measure. So before we ever write down "the size of $E$," we have to pin down the family of sets we are allowed to ask about. That family is a **σ-algebra**, and the demand that it be closed under *countable* — not merely finite — operations is precisely the hook that makes limits and integrals cooperate later. Every measure, every measurable function, every probability event (a probability is just a measure with total mass $1$; the σ-algebra is the collection of *events*) lives on top of this one definition.

## The idea

Think of a σ-algebra as a **bookkeeping system of answerable questions**. Each set $E$ in the family is a yes/no question — "did the outcome land in $E$?" — that we are entitled to assign a size (or probability) to. For the bookkeeping to stay consistent, three closure demands are natural:

- The whole space $X$ must be answerable ("did *anything* happen?" — yes, always).
- If you can ask about $E$, you can ask about its complement $E^c$ ("did the outcome *miss* $E$?").
- If you can ask about each of countably many sets $E_1, E_2, \dots$, you can ask about "did it land in *at least one* of them?" — their union.

The one subtle, load-bearing word is **countable**. A system closed only under *finite* unions is called an *algebra*, and it is not enough: analysis is the study of limits, and a limit is an operation on *infinitely many* terms. If $\{E_n\}$ is an increasing sequence of answerable questions, we need $\bigcup_n E_n$ — the "eventually" event — to be answerable too. Countable closure is exactly the amount of infinity that limits require and that a consistent notion of size can actually deliver.

## The formal version

**Definition (σ-algebra).** Let $X$ be a set. A collection $\mathcal{A}$ of subsets of $X$ is a **σ-algebra on $X$** if:

1. $X \in \mathcal{A}$;
2. **(complements)** if $E \in \mathcal{A}$ then $E^c := X \setminus E \in \mathcal{A}$;
3. **(countable unions)** if $E_1, E_2, \dots \in \mathcal{A}$ then $\bigcup_{n=1}^{\infty} E_n \in \mathcal{A}$.

*In words:* a σ-algebra contains the whole space and never lets you fall out of it by taking complements or by pooling countably many of its members.

From these three axioms everything else follows for free:

**$\varnothing \in \mathcal{A}$.** By (1) $X \in \mathcal{A}$, so by (2) $\varnothing = X^c \in \mathcal{A}$.

**Closed under countable intersections.** Given $E_1, E_2, \dots \in \mathcal{A}$, De Morgan's law gives
$$\bigcap_{n=1}^{\infty} E_n = \Big(\bigcup_{n=1}^{\infty} E_n^{\,c}\Big)^{\!c}.$$
Each $E_n^c \in \mathcal{A}$ by (2); their union is in $\mathcal{A}$ by (3); its complement is in $\mathcal{A}$ by (2) again. So the intersection is in $\mathcal{A}$.

**Closed under finite unions and intersections, and under set difference.** A finite union $E_1 \cup \dots \cup E_k$ is the countable union $E_1 \cup \dots \cup E_k \cup \varnothing \cup \varnothing \cup \cdots$, so it is in $\mathcal{A}$ (and dually for finite intersections); and $E \setminus F = E \cap F^c \in \mathcal{A}$.

*In words:* the three axioms secretly hand you all the boolean operations — complement, countable-and-finite union, countable-and-finite intersection, difference — closed within $\mathcal{A}$.

**Why "countable" is the real content.** A collection satisfying (1), (2), and closure under only *finite* unions is called an **algebra** (or *field*) of sets. Every σ-algebra is an algebra; the converse fails, and the gap is exactly what we need. Example: let $X = \mathbb{N}$ and let $\mathcal{A}$ be all sets that are finite or have finite complement (the "finite/cofinite" algebra). It is closed under complement and finite union — an algebra. But it is **not** a σ-algebra: the even numbers $\{2,4,6,\dots\} = \bigcup_n \{2n\}$ are a countable union of (finite, hence admissible) singletons, yet this set is neither finite nor cofinite, so it escapes $\mathcal{A}$. Finite closure could not see the limit; σ-closure must.

**Definition (measurable space).** A pair $(X, \mathcal{A})$ with $\mathcal{A}$ a σ-algebra on $X$ is a **measurable space**. The members of $\mathcal{A}$ are called **measurable sets**. (No measure has been chosen yet — that arrives in Lesson 1.3. A measurable space is just the *arena* of answerable questions.)

### Generating a σ-algebra

We rarely list a σ-algebra by hand — the interesting ones (like the Borel sets below) are uncountable and un-listable. Instead we *specify a few sets we insist on* and take the smallest σ-algebra containing them. That "smallest" needs justifying: why does a smallest one even exist?

**Proposition (arbitrary intersections of σ-algebras are σ-algebras).** Let $\{\mathcal{A}_i\}_{i \in I}$ be any (possibly uncountable) family of σ-algebras on the same $X$. Then $\mathcal{A} := \bigcap_{i \in I} \mathcal{A}_i = \{E : E \in \mathcal{A}_i \text{ for every } i\}$ is a σ-algebra on $X$.

*Proof.* Check the three axioms.
1. Each $\mathcal{A}_i$ contains $X$, so $X$ lies in every $\mathcal{A}_i$, hence $X \in \mathcal{A}$.
2. If $E \in \mathcal{A}$, then $E \in \mathcal{A}_i$ for every $i$; each $\mathcal{A}_i$ is closed under complement, so $E^c \in \mathcal{A}_i$ for every $i$, hence $E^c \in \mathcal{A}$.
3. If $E_1, E_2, \dots \in \mathcal{A}$, then for each fixed $i$ all the $E_n$ lie in $\mathcal{A}_i$, so $\bigcup_n E_n \in \mathcal{A}_i$; as this holds for every $i$, $\bigcup_n E_n \in \mathcal{A}$. $\blacksquare$

*In words:* being a σ-algebra is a property preserved by intersecting arbitrarily many of them — the closure axioms only ever quantify "for every $i$."

**Definition (generated σ-algebra).** For any collection $\mathcal{E}$ of subsets of $X$, define
$$\sigma(\mathcal{E}) := \bigcap \{\mathcal{A} : \mathcal{A} \text{ is a }\sigma\text{-algebra on } X \text{ and } \mathcal{E} \subseteq \mathcal{A}\}.$$
This is the **σ-algebra generated by $\mathcal{E}$**.

*In words:* $\sigma(\mathcal{E})$ is the smallest σ-algebra containing $\mathcal{E}$ — you take *all* σ-algebras big enough to hold $\mathcal{E}$ and keep only the sets common to every one of them.

Three things make this definition sound, and they are worth stating explicitly:
- **The intersection is over a non-empty family:** the power set $\mathcal{P}(X)$ is itself a σ-algebra containing $\mathcal{E}$, so there is at least one member to intersect.
- **It is a σ-algebra:** immediate from the Proposition.
- **It is genuinely smallest:** it contains $\mathcal{E}$ (every $\mathcal{A}$ in the family does, so their intersection does), and if $\mathcal{B}$ is *any* σ-algebra with $\mathcal{E} \subseteq \mathcal{B}$, then $\mathcal{B}$ is one of the sets being intersected, so $\sigma(\mathcal{E}) \subseteq \mathcal{B}$.

This "intersect everything above and you land on the least element" move is the same trick that defines the span of a set of vectors or the subgroup generated by a subset — a smallest closed object built from below by cutting down from above.

### The Borel σ-algebra

**Definition (Borel σ-algebra).** On $\mathbb{R}$ (with its usual topology), the **Borel σ-algebra** is
$$\mathcal{B}(\mathbb{R}) := \sigma(\{\text{open subsets of } \mathbb{R}\}).$$
Its members are the **Borel sets**.

*In words:* the Borel sets are everything you can build from the open sets by countably many complements, unions, and intersections — open sets, closed sets, and all their countable combinations.

$\mathcal{B}(\mathbb{R})$ is enormous but still far from all of $\mathcal{P}(\mathbb{R})$: it contains every open set, every closed set, every countable set, every interval, and all countable combinations of these — essentially every subset of $\mathbb{R}$ you can *describe*. What matters in practice is that you can generate it from a much smaller, more convenient family. Two standard generators:

**Claim.** $\mathcal{B}(\mathbb{R}) = \sigma(\{(a,b) : a < b\}) = \sigma(\{(a,\infty) : a \in \mathbb{R}\}).$

*Proof sketch (open intervals generate).* Every open $U \subseteq \mathbb{R}$ is a countable union of open intervals: for each $x \in U$ pick a rational-endpoint interval $(p,q) \subseteq U$ containing $x$; only countably many such rational-endpoint intervals exist, and they union to $U$. So every open set lies in $\sigma(\{\text{open intervals}\})$, giving $\mathcal{B}(\mathbb{R}) \subseteq \sigma(\{\text{open intervals}\})$; the reverse inclusion is trivial since intervals are open. *(Rays generate.)* $(a,\infty)$ is open, so $\sigma(\{\text{rays}\}) \subseteq \mathcal{B}(\mathbb{R})$. Conversely, any open interval is reachable from rays by the σ-operations,
$$(a,b) = (a,\infty) \setminus [b,\infty) = (a,\infty) \cap \Big(\bigcap_{n=1}^\infty (b - \tfrac1n,\infty)\Big)^{\!c},$$
using that $[b,\infty) = \bigcap_n (b-\tfrac1n,\infty)$ is a countable intersection of rays. So the two generators agree with $\mathcal{B}(\mathbb{R})$. $\blacksquare$

The upshot — used constantly from Lesson 2.1 on — is that to prove a function is measurable it suffices to check preimages of the rays $(a,\infty)$, because those alone generate all the Borel sets.

## Concrete instance

**(a) The two trivial σ-algebras, and one honest counterexample.** Fix any $X$.

- $\mathcal{A} = \{\varnothing, X\}$ is a σ-algebra — the smallest possible. Check: $X$ is in it; complements swap $\varnothing \leftrightarrow X$; any union of members is $\varnothing$ or $X$. This is $\sigma(\varnothing)$, the σ-algebra generated by nothing.
- $\mathcal{A} = \mathcal{P}(X)$, the power set, is a σ-algebra — the largest possible. Every closure demand holds because *every* subset is already present.
- $\mathcal{A} = \{\varnothing,\, \{1\},\, \{2,3\},\, X\}$ on $X=\{1,2,3\}$: is it one? Test complements: $\{1\}^c = \{2,3\}\in\mathcal{A}$ ✓, $\{2,3\}^c=\{1\}\in\mathcal{A}$ ✓. Test unions: $\{1\}\cup\{2,3\}=X\in\mathcal{A}$ ✓. All boolean combinations stay inside — so **yes**, this is a σ-algebra (on a finite set every union is finite, so it is automatically a σ-algebra iff it is an algebra). By contrast $\{\varnothing, \{1\}, \{2,3\}, X, \{2\}\}$ **fails**: $\{2\}$ is present but its complement $\{1,3\}$ is not.

**(b) The countable / co-countable σ-algebra.** Let $X$ be any set and put
$$\mathcal{A} = \{E \subseteq X : E \text{ is countable, or } E^c \text{ is countable}\}.$$
This *is* a σ-algebra — and the verification is a clean drill in the axioms:
- $X \in \mathcal{A}$ since $X^c = \varnothing$ is countable.
- If $E \in \mathcal{A}$ then $E$ is countable or $E^c$ is; either way $E^c$ is countable or $(E^c)^c = E$ is — so $E^c \in \mathcal{A}$.
- Let $E_1, E_2, \dots \in \mathcal{A}$. **Case 1:** every $E_n$ is countable. Then $\bigcup_n E_n$ is a countable union of countable sets, hence countable, so it is in $\mathcal{A}$. **Case 2:** some $E_{n_0}$ has countable complement. Then $\big(\bigcup_n E_n\big)^c = \bigcap_n E_n^c \subseteq E_{n_0}^c$ is a subset of a countable set, hence countable, so again $\bigcup_n E_n \in \mathcal{A}$.

Contrast this with the finite/cofinite *algebra* from the formal section: swapping "finite" for "countable" is exactly the upgrade that Case 1 needs — a countable union of finite sets can escape "finite," but a countable union of countable sets stays countable. The word "countable" in the axiom and the word "countable" in this family are the same phenomenon, and this is the smallest interesting example of it. (When $X$ is itself countable, this $\mathcal{A}$ collapses to all of $\mathcal{P}(X)$; the family is only *proper* when $X$ is uncountable, e.g. $X=\mathbb{R}$.)

## Worked examples

**Example 1 (verify a candidate — the mechanical drill).** On $X = \{1,2,3,4\}$, is
$$\mathcal{A} = \{\varnothing,\ \{1,2\},\ \{3,4\},\ \{1,2,3,4\}\}$$
a σ-algebra? Run the checklist. (i) $X = \{1,2,3,4\} \in \mathcal{A}$ ✓. (ii) Complements: $\{1,2\}^c = \{3,4\} \in \mathcal{A}$ ✓, $\{3,4\}^c=\{1,2\}\in\mathcal{A}$ ✓, $\varnothing^c = X \in \mathcal{A}$ ✓. (iii) Unions (finite suffices here): $\{1,2\}\cup\{3,4\} = X \in \mathcal{A}$ ✓; every other pairwise union just reproduces a member or $X$. All three axioms hold, so **$\mathcal{A}$ is a σ-algebra**. In fact it is $\sigma(\{\{1,2\}\})$: the smallest σ-algebra forced to contain the single set $\{1,2\}$ must also hold $\{1,2\}^c=\{3,4\}$, plus $\varnothing$ and $X$, and those four sets are already closed.

Now break it minimally: adjoin $\{1\}$ to get $\mathcal{A}' = \mathcal{A} \cup \{\{1\}\}$. This is **not** a σ-algebra — $\{1\}^c = \{2,3,4\} \notin \mathcal{A}'$. Repairing it (throwing in every forced complement and union) balloons the four sets into a sixteen-set collection; that closure process is exactly what $\sigma(\cdot)$ names in one symbol.

**Example 2 (the generated-σ-algebra construction, done concretely).** Take $X = \{1,2,3,4\}$ and $\mathcal{E} = \{\{1\},\{2\}\}$. Find $\sigma(\mathcal{E})$ two ways and watch them agree.

*Top-down (the official definition).* $\sigma(\mathcal{E})$ is the intersection of every σ-algebra on $X$ containing both $\{1\}$ and $\{2\}$. There are many such σ-algebras (the power set is one), but every one of them must also contain: $\varnothing, X$ (axiom 1–2); $\{1\}^c=\{2,3,4\}$ and $\{2\}^c=\{1,3,4\}$ (complements); $\{1\}\cup\{2\}=\{1,2\}$ and its complement $\{3,4\}$ (unions); $\{1\}\cup\{3,4\}=\{1,3,4\}$... continuing until closed. The sets *common to all of them* are precisely the ones **forced** by the axioms — nothing more, nothing less.

*Bottom-up (build the closure).* Start from $\mathcal{E}$ and repeatedly add every complement and union until nothing new appears. You obtain
$$\sigma(\mathcal{E}) = \big\{\varnothing,\ \{1\},\ \{2\},\ \{1,2\},\ \{3,4\},\ \{1,3,4\},\ \{2,3,4\},\ X\big\},$$
eight sets. Verify it is closed: it is generated by the three "atoms" $\{1\},\{2\},\{3,4\}$ (the finest pieces $\mathcal{E}$ can distinguish), and any σ-algebra built from $k$ disjoint atoms covering $X$ has exactly $2^k$ members — here $2^3 = 8$. ✓

The two routes must give the same answer, and do: top-down says "everything forced," bottom-up says "everything reachable," and *forced = reachable* is the content of the smallest-σ-algebra theorem. The bottom-up picture also explains why $\sigma$ is un-listable on $\mathbb{R}$: there the atoms are points, there are uncountably many, and you cannot finish adding.

## Watch out

- **You might think closure under *finite* unions is enough** — but that only makes $\mathcal{A}$ an *algebra*, and analysis needs the countable version. The finite/cofinite algebra on $\mathbb{N}$ misses the even numbers (a countable union of singletons); the whole subject is built to survive limits, and only countable closure survives them.
- **You might think "measurable set" means the set has a size** — but in a *measurable space* $(X,\mathcal{A})$ no measure exists yet. "Measurable" here means only "belongs to $\mathcal{A}$," i.e. "is an answerable question." Size (measure) is a separate object added in Lesson 1.3.
- **You might think $\mathcal{B}(\mathbb{R})$ is all subsets of $\mathbb{R}$, or think it's just the intervals** — neither. It is vastly bigger than the intervals (closed under all countable operations) yet strictly smaller than $\mathcal{P}(\mathbb{R})$: the non-measurable set of Lesson 1.6 is not Borel, and in fact not even Lebesgue-measurable. "Borel" means *describable by countably many set operations from open sets*, no more.
- **You might think you must list a σ-algebra to work with it** — but $\sigma(\mathcal{E})$ lets you *name* it by its generators and reason about all its members at once. You will almost never enumerate $\mathcal{B}(\mathbb{R})$; you will check things on the generators $(a,\infty)$ and let the σ-operations carry the conclusion.

## One-liner

> A σ-algebra is a family of "answerable" sets closed under complement and *countable* union — and the smallest one containing a chosen family $\mathcal{E}$, written $\sigma(\mathcal{E})$, always exists because an intersection of σ-algebras is again a σ-algebra.

## Problems

**P1 (🟢)** Let $X = \{a,b,c\}$. For each collection, decide whether it is a σ-algebra; if not, name the single failing axiom.
(i) $\{\varnothing, \{a\}, \{b,c\}, X\}$.
(ii) $\{\varnothing, \{a\}, \{b\}, X\}$.
(iii) $\{\varnothing, \{a,b\}, \{b,c\}, X\}$.

**P2 (🟡)** Let $(X,\mathcal{A})$ be a measurable space and let $Y \subseteq X$ be a *fixed* subset (not assumed measurable). Define the **trace** $\mathcal{A}_Y := \{E \cap Y : E \in \mathcal{A}\}$. Prove that $\mathcal{A}_Y$ is a σ-algebra *on the set $Y$* (i.e. of subsets of $Y$, with $Y$ playing the role of the whole space). This is the σ-algebra that lets you restrict measure theory to a subspace.

**P3 (🔴, optional)** Prove that if $\mathcal{E} \subseteq \mathcal{F}$ are two collections of subsets of $X$, then $\sigma(\mathcal{E}) \subseteq \sigma(\mathcal{F})$ (monotonicity of generation). Use it to deduce that $\sigma(\sigma(\mathcal{E})) = \sigma(\mathcal{E})$ (idempotence). Then, using the rays-generate-$\mathcal{B}(\mathbb{R})$ fact from the lesson, show that the closed rays $\{[a,\infty) : a\in\mathbb{R}\}$ *also* generate $\mathcal{B}(\mathbb{R})$.

<details>
<summary>Solutions</summary>

**P1** (i) **Yes.** $X$ present; $\{a\}^c=\{b,c\}$ and $\{b,c\}^c=\{a\}$ both present; $\{a\}\cup\{b,c\}=X$ present. All axioms hold (this is $\sigma(\{\{a\}\})$).

(ii) **No** — fails **closure under union**. Both $\{a\}$ and $\{b\}$ are present but $\{a\}\cup\{b\}=\{a,b\}$ is not. (It also fails complements: $\{a\}^c=\{b,c\}\notin$ the collection — either violated axiom is a correct answer, but the union failure is the cleanest.)

(iii) **No** — fails **closure under complement**: $\{a,b\}^c = \{c\}$ is not in the collection. (Equivalently the intersection/union $\{a,b\}\cap\{b,c\}=\{b\}$ is missing, but complement is the first axiom to break.)

**P2** We verify the three σ-algebra axioms for $\mathcal{A}_Y$ as a collection of subsets of $Y$.
1. *Whole space.* Take $E = X \in \mathcal{A}$. Then $X \cap Y = Y \in \mathcal{A}_Y$. So the ambient set $Y$ is in $\mathcal{A}_Y$. ✓
2. *Complements (relative to $Y$).* Let $F \in \mathcal{A}_Y$, say $F = E \cap Y$ with $E \in \mathcal{A}$. The complement of $F$ *within $Y$* is $Y \setminus F = Y \setminus (E \cap Y) = (X \setminus E) \cap Y = E^c \cap Y$. Since $E^c \in \mathcal{A}$, this exhibits $Y\setminus F$ as (a member of $\mathcal{A}$) $\cap\, Y$, so $Y \setminus F \in \mathcal{A}_Y$. ✓ (The key point: we complement inside $Y$, and it corresponds to complementing $E$ inside $X$.)
3. *Countable unions.* Let $F_n = E_n \cap Y \in \mathcal{A}_Y$ with $E_n \in \mathcal{A}$. Then
$$\bigcup_n F_n = \bigcup_n (E_n \cap Y) = \Big(\bigcup_n E_n\Big) \cap Y,$$
by distributivity of intersection over union. Since $\bigcup_n E_n \in \mathcal{A}$ (axiom 3 in $\mathcal{A}$), the union is of the form (member of $\mathcal{A}$)$\,\cap\, Y$, hence in $\mathcal{A}_Y$. ✓

All three hold, so $\mathcal{A}_Y$ is a σ-algebra on $Y$. Note $Y$ itself need not belong to $\mathcal{A}$ — the construction works regardless, which is exactly why the trace is useful for restricting to arbitrary subspaces. $\blacksquare$

**P3** *Monotonicity.* Suppose $\mathcal{E}\subseteq\mathcal{F}$. Then $\sigma(\mathcal{F})$ is a σ-algebra containing $\mathcal{F}$, hence containing $\mathcal{E}$. But $\sigma(\mathcal{E})$ is the *smallest* σ-algebra containing $\mathcal{E}$, so it is contained in every σ-algebra that contains $\mathcal{E}$ — in particular $\sigma(\mathcal{E}) \subseteq \sigma(\mathcal{F})$. $\blacksquare$

*Idempotence.* Let $\mathcal{G} = \sigma(\mathcal{E})$. On one hand $\mathcal{G} \subseteq \sigma(\mathcal{G})$ since any collection is contained in the σ-algebra it generates. On the other hand $\mathcal{G}$ is *itself* a σ-algebra containing $\mathcal{G}$, so it is one of the σ-algebras intersected to form $\sigma(\mathcal{G})$; therefore $\sigma(\mathcal{G}) \subseteq \mathcal{G}$. The two inclusions give $\sigma(\sigma(\mathcal{E})) = \sigma(\mathcal{E})$. $\blacksquare$

*Closed rays generate $\mathcal{B}(\mathbb{R})$.* Write $\mathcal{C} = \{[a,\infty):a\in\mathbb{R}\}$ and recall from the lesson that the open rays $\mathcal{R}=\{(a,\infty)\}$ satisfy $\sigma(\mathcal{R})=\mathcal{B}(\mathbb{R})$. It suffices to show each collection sits inside the σ-algebra generated by the other; then monotonicity forces $\sigma(\mathcal{C})=\sigma(\mathcal{R})=\mathcal{B}(\mathbb{R})$.
- Each closed ray is a countable intersection of open rays: $[a,\infty) = \bigcap_{n=1}^\infty (a - \tfrac1n, \infty)$ (a point $x\ge a$ lies in every term; a point $x<a$ eventually drops out once $\tfrac1n < a-x$). So $\mathcal{C} \subseteq \sigma(\mathcal{R})$, giving $\sigma(\mathcal{C})\subseteq\sigma(\mathcal{R})$ by monotonicity and idempotence.
- Each open ray is a countable union of closed rays: $(a,\infty) = \bigcup_{n=1}^\infty [a + \tfrac1n, \infty)$ (a point $x>a$ enters once $\tfrac1n < x-a$; $x\le a$ never does). So $\mathcal{R}\subseteq\sigma(\mathcal{C})$, giving $\sigma(\mathcal{R})\subseteq\sigma(\mathcal{C})$.
Hence $\sigma(\mathcal{C}) = \sigma(\mathcal{R}) = \mathcal{B}(\mathbb{R})$. $\blacksquare$
The moral, again: to identify a generator it is enough to reach it from — and be reachable by — the standard generators using countably many operations.

</details>

## Connections

- **Backward (Lesson 1.1):** we saw the Riemann integral choke because it cannot handle arbitrary sets or limits. The σ-algebra is the first repair — it fixes *which* sets we are allowed to measure, deliberately stopping short of all of $\mathcal{P}(\mathbb{R})$ so that a consistent size can exist at all (the impossibility is realized in Lesson 1.6).
- **Forward (Lesson 1.3):** a measure is a function $\mu:\mathcal{A}\to[0,\infty]$ defined *on* a σ-algebra; countable additivity of $\mu$ is only meaningful because $\mathcal{A}$ is closed under countable unions. Then Lesson 2.1 defines a measurable function by requiring preimages of Borel sets to be measurable — and thanks to today's generator theorem, checking preimages of the rays $(a,\infty)$ suffices.
- **Sideways ([probability-theory](../../probability-theory/syllabus.md)):** a σ-algebra $\mathcal{F}$ is exactly a collection of **events**, $(X,\mathcal{F})$ is a sample space with its event structure, and a probability is a measure with $\mu(X)=1$. The countable-union axiom is what lets probabilists speak of events like "$A_n$ happens infinitely often" $=\bigcap_N\bigcup_{n\ge N}A_n$.
- **Sideways ([functional-analysis](../../functional-analysis/syllabus.md)):** the Borel σ-algebra is the domain on which Borel measurable functions live; the $L^p$ spaces built later (Module 3) are spaces of measurable functions modulo a.e. equality, and their completeness (Riesz–Fischer) is the rigorous floor under Hilbert-space methods and, via $L^2$, under [fourier-analysis](../../fourier-analysis/syllabus.md).
