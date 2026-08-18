# Logic & Set Theory · Lesson 3.2: Building Up — Extensionality to Power Set

> ⏱ ~15 min · Module 3: From Paradox to ZFC · Builds on: [Lesson 3.1](03-01-russells-paradox.md) (Russell's paradox) · Unlocks: [Lesson 3.3](03-03-infinity-replacement-foundation.md) (infinity, replacement, foundation)

## Why this matters

Lesson 3.1 killed the naive dream: you *cannot* wave a property in the air and declare "the set of all things with that property." So how do we get sets at all? The answer that survived — ZFC — is a short list of construction rules, each one a licensed move for building a new set out of sets you already have. Everything downstream is made from these moves: an ordered pair, a Cartesian product, a relation, a function, the real numbers, the whole transfinite tower of Module 4. Miss this lesson and every later object is a magic trick; get it and you can see the girders.

## The idea

Think of set theory after Russell as a **construction kit**, not a wish-granting genie. You are not allowed to summon a set by describing it. You *are* allowed a handful of concrete operations:

- **Extensionality** isn't a construction — it's the *identity rule* that makes the kit coherent: two sets are the same exactly when they have the same members. A set is nothing but its membership list; there is no hidden "label" or "order."
- **Pairing** lets you drop two things you already have into a box: from $a$ and $b$, get $\{a,b\}$.
- **Union** lets you dissolve the inner walls of a box of boxes: from a set whose members are sets, pool all their members together.
- **Power set** lets you collect *all* sub-collections of a set into one new set.
- **Separation** is the tamed ghost of naive comprehension: you may still carve out $\{x : \varphi(x)\}$, but *only from inside a set you already hold*. You can filter an existing set; you cannot conjure one from a predicate alone.

That last restriction is the entire fix for Russell. Naive comprehension let $\varphi$ range over the whole universe; Separation makes $\varphi$ range only over the members of some fixed set $A$. You lose the ability to build the paradoxical set — and, it turns out, you lose nothing you actually needed.

## The formal version

Throughout, everything is a set; $\in$ is the only primitive relation. Each axiom below is followed by its plain-English reading and **one line on what breaks without it**.

**Extensionality.** $\forall A\,\forall B\,\big[\forall x(x\in A \leftrightarrow x\in B) \to A = B\big].$
*In words:* if $A$ and $B$ have exactly the same members, they are equal. Membership determines identity.
*Without it:* "set" loses meaning — $\{a,b\}$ and $\{b,a\}$ could be distinct, and you could never prove two different constructions produced the same set. This is the axiom that makes all the others *well-defined*.

**Empty set / existence.** There is a set $\varnothing$ with no members: $\exists A\,\forall x\,(x\notin A)$.
*In words:* the empty set exists, and by Extensionality it is unique (any two memberless sets have the same members).
*Without it:* you might have no set to start from — the construction kit needs a seed. (In full ZFC this follows from Separation once *any* set exists, and the Axiom of Infinity in 3.3 guarantees one does; we list it here so the bootstrap is honest.)

**Pairing.** $\forall a\,\forall b\,\exists P\,\forall x\,(x\in P \leftrightarrow x=a \lor x=b).$
*In words:* for any $a,b$ there is a set $\{a,b\}$ whose members are exactly $a$ and $b$. Taking $a=b$ gives the singleton $\{a\}$.
*Without it:* you cannot put two given objects into one set — no singletons, no ordered pairs, no way to bootstrap larger sets from smaller ones.

**Union.** $\forall A\,\exists U\,\forall x\,\big[x\in U \leftrightarrow \exists b\,(b\in A \land x\in b)\big].$ We write $U = \bigcup A$.
*In words:* given a set $A$ *of sets*, $\bigcup A$ collects every member of every member of $A$ — it flattens one layer.
*Without it:* you can never merge collections; $A\cup B$ and arbitrary unions simply don't exist as sets.

**Power set.** $\forall A\,\exists P\,\forall x\,\big[x\in P \leftrightarrow x\subseteq A\big].$ We write $P = \mathcal{P}(A)$.
*In words:* $\mathcal{P}(A)$ is the set of *all* subsets of $A$. (Recall $x\subseteq A$ means every member of $x$ is a member of $A$.)
*Without it:* no set of all subsets — so no Cartesian product, no set of relations or functions, no $\mathcal{P}(\mathbb{N})$, and the uncountable infinities of Module 4 never appear.

**Separation (restricted comprehension).** For each formula $\varphi(x)$ (possibly with parameters), $\forall A\,\exists S\,\forall x\,\big[x\in S \leftrightarrow (x\in A \land \varphi(x))\big].$ We write $S = \{x\in A : \varphi(x)\}$.
*In words:* from any set $A$ and any property $\varphi$, you may form the subset of members of $A$ satisfying $\varphi$. The property filters an existing set; it does not create one.
*Without it:* with *unrestricted* comprehension instead ($\{x : \varphi(x)\}$ for any $\varphi$), you get Russell's paradox back (3.1); with *no* comprehension at all, you can't form intersections, set differences, or preimages — you can't carve at all.

The single word that dissolves Russell is the boxed "$x\in A$" clause: you filter *within* $A$, never over the whole universe.

## Concrete instance

Here is the bootstrap, done by hand, citing the axiom for every step. Fix two objects $a,b$ (themselves sets — everything is).

**Build $\{a,b\}$.** Pairing, applied to $a$ and $b$, directly yields the set $\{a,b\}$. Applied to $a$ and $a$, it yields the singleton $\{a\} = \{a,a\}$ (Extensionality collapses the repeat: $x\in\{a,a\}\leftrightarrow x=a$).

**Build $A\cup B$.** You are *not* given union of two sets as an axiom — only $\bigcup$ of a single family. So chain two moves:
1. **Pairing** on $A$ and $B$ gives the two-element family $\{A,B\}$.
2. **Union** on that family gives $\bigcup\{A,B\}$, whose members are exactly the things lying in $A$ *or* in $B$:
$$x\in \bigcup\{A,B\} \iff \exists c\,(c\in\{A,B\}\land x\in c) \iff (x\in A)\lor(x\in B).$$
Define $A\cup B := \bigcup\{A,B\}$. That's the everyday union, assembled from Pairing + Union.

**Build the ordered pair $(a,b)$.** A set is unordered — $\{a,b\}=\{b,a\}$ — so to encode *order* we need a set whose shape distinguishes the first slot. **Kuratowski's definition:**
$$(a,b) \;:=\; \{\{a\},\{a,b\}\}.$$
Construction, all by Pairing: form $\{a\}$ (Pairing on $a,a$); form $\{a,b\}$ (Pairing on $a,b$); then form $\{\{a\},\{a,b\}\}$ (Pairing on those two sets). The point of this particular encoding is the property it satisfies — proved from Extensionality alone:
$$(a,b) = (c,d) \iff a=c \ \text{and}\ b=d.$$
*In words:* the pair remembers which came first. The first coordinate is the element common to both inner sets; the second is what's left over. (You'll prove the load-bearing half in P2.)

So from Pairing, Union, and Extensionality alone we already have unordered pairs, everyday unions, and ordered pairs. Power set and Separation take it the rest of the way — next.

## Worked examples

**Example 1 (Separation blocks Russell).** In 3.1, naive comprehension formed $R = \{x : x\notin x\}$ and asking "$R\in R$?" exploded. Watch what Separation permits instead. Fix *any* set $A$ and form the legal set
$$R_A \;=\; \{x\in A : x\notin x\} \qquad(\text{Separation, }\varphi(x)\equiv x\notin x).$$
Now ask the Russell question of $R_A$: **is $R_A\in R_A$?**

By the defining biconditional, $R_A\in R_A \iff (R_A\in A \ \land\ R_A\notin R_A)$.

- If $R_A\in A$: the clause $R_A\in A$ is true, so the biconditional reduces to $R_A\in R_A \iff R_A\notin R_A$ — a flat contradiction. So $R_A\in A$ is **impossible**.
- Therefore $R_A\notin A$.

No paradox — just a *theorem*: for every set $A$, the set $R_A$ is not a member of $A$. Since $A$ was arbitrary, **no set contains everything** — there is no universal set, and in particular the naive "set of all sets" cannot be formed. Separation gave us the Russell *construction* but, chained to an existing $A$, it only ever proves "$A$ is missing something," never "$\bot$." That is exactly the escape: the guilty step in 3.1 was letting $\varphi$ range over the whole universe; Separation forbids precisely that.

**Example 2 (why Power Set exists — building $A\times B$).** We want the Cartesian product $A\times B = \{(a,b) : a\in A,\ b\in B\}$ to be a genuine *set*. Separation can only carve it out of a set we already have — so which set are all these ordered pairs sitting inside? Trace the layers of $(a,b)=\{\{a\},\{a,b\}\}$ for $a\in A,\ b\in B$:
- $\{a\}$ and $\{a,b\}$ are subsets of $A\cup B$, hence **members of $\mathcal{P}(A\cup B)$**.
- So $(a,b)$ is a set whose members lie in $\mathcal{P}(A\cup B)$ — i.e. $(a,b)\subseteq \mathcal{P}(A\cup B)$, hence $(a,b)\in \mathcal{P}(\mathcal{P}(A\cup B))$.

Every ordered pair drawn from $A$ and $B$ lives in the double power set. Now Separation has a home set to filter:
$$A\times B \;=\; \big\{\, p\in \mathcal{P}(\mathcal{P}(A\cup B)) \;:\; \exists a\,\exists b\,(a\in A\land b\in B\land p=(a,b)) \,\big\}.$$
This uses **Pairing** (for $A\cup B$ and the pairs), **Union**, **Power set** twice, and **Separation** — every construction axiom at once. And it explains why Power Set is not optional: without it there is no ambient set to separate $A\times B$ from, so no products. From here a **relation** from $A$ to $B$ is any subset of $A\times B$ (a member of $\mathcal{P}(A\times B)$), and a **function** is a relation carved by Separation down to those with the single-value property — all of analysis, ultimately, is subsets of products.

## Watch out

- You might think Pairing already gives you $A\cup B$ — but $\{A,B\}$ is a *two-element* set whose members are $A$ and $B$ themselves, not their pooled contents. You must apply **Union** to $\{A,B\}$ to flatten it. $\{A,B\}$ has 2 members; $A\cup B$ generally has many.
- You might think Separation lets you form $\{x : \varphi(x)\}$ — but the "$x\in A$" clause is mandatory and load-bearing. Drop it and you have unrestricted comprehension and Russell's paradox is back. Separation *never* creates a set from a predicate alone; it only filters one you're already holding.
- You might think the ordered pair $(a,b)$ "is" the list $a,b$ — but it's the specific set $\{\{a\},\{a,b\}\}$, chosen only because it happens to satisfy $(a,b)=(c,d)\Rightarrow a=c,b=d$. The encoding is a means to an end; any other set with that property would serve, and we never use the internal braces again.
- You might think two sets could be "equal in size but different," like $\{a,b\}$ vs. $\{b,a\}$ — Extensionality says no: same members, same set. Order and repetition are invisible to $\in$.

## One-liner

> ZFC replaces the genie ("any property is a set") with a construction kit — pair, union, power set, and *filter-what-you-already-have* — and that last restriction is the whole cure for Russell.

## Problems

**P1 (🟢)** Starting from $\varnothing$, build the following, citing the axiom for each step: (a) the singleton $\{\varnothing\}$; (b) the pair $\{\varnothing, \{\varnothing\}\}$. Then use **Extensionality** to prove $\varnothing \neq \{\varnothing\}$.

**P2 (🟡)** Prove the load-bearing half of the ordered-pair property: if $(a,b) = (a,c)$ — that is, $\{\{a\},\{a,b\}\} = \{\{a\},\{a,c\}\}$ — then $b = c$. (Use only Extensionality; mind the case $a=b$.)

**P3 (🔴, optional)** Let $A$ and $B$ be sets. Using Extensionality, Pairing, Union, Power Set, and Separation, prove carefully that the set of all **functions** $f: A\to B$ exists. (Hint: a function is a special subset of $A\times B$; Example 2 built $A\times B$, so which single power set contains every such $f$, and what property $\varphi$ does Separation filter by?)

<details>
<summary>Solutions</summary>

**P1** (a) Apply **Pairing** to $a=\varnothing$ and $b=\varnothing$: this gives a set whose members are exactly $\varnothing$, i.e. $\{\varnothing,\varnothing\}=\{\varnothing\}$ (Extensionality collapses the duplicate). (b) Apply **Pairing** to $a=\varnothing$ and $b=\{\varnothing\}$ (both now exist): this gives $\{\varnothing,\{\varnothing\}\}$, a genuine two-element set.

Inequality: $\varnothing$ has *no* members, while $\{\varnothing\}$ has exactly one member, namely $\varnothing$ (since $\varnothing\in\{\varnothing\}$). So $\varnothing\in\{\varnothing\}$ but $\varnothing\notin\varnothing$. The two sets differ on the membership of $\varnothing$, so by the contrapositive of **Extensionality** (they don't have all the same members) they are unequal: $\varnothing\neq\{\varnothing\}$. $\blacksquare$ (This is the seed of von Neumann's $0=\varnothing$, $1=\{\varnothing\}$ — how the naturals get built in 3.3.)

**P2** Suppose $\{\{a\},\{a,b\}\} = \{\{a\},\{a,c\}\}$. By Extensionality the two sets have the same members. In particular $\{a,c\}$ is a member of the left side, so $\{a,c\} = \{a\}$ or $\{a,c\} = \{a,b\}$.

*Case $a = b$.* Then the left pair is $\{\{a\},\{a,a\}\} = \{\{a\}\}$ — a singleton. Equality forces the right side to be that same singleton, so $\{a,c\}=\{a\}$, which means $c\in\{a\}$, i.e. $c=a=b$. Hence $b=c$.

*Case $a \neq b$ (so $\{a,b\}$ is a genuine 2-element set, and $\{a,c\}\neq\{a\}$ unless $c=a$).* We know $\{a,c\}=\{a\}$ or $\{a,c\}=\{a,b\}$.
- If $\{a,c\}=\{a\}$, then $c=a$, so $\{a,c\}=\{a\}$ has one element while $\{a,b\}$ has two — but $\{a,b\}$ must also appear on the right side and equal $\{a\}$ or $\{a,c\}=\{a\}$, forcing $\{a,b\}=\{a\}$, i.e. $b=a$, contradicting $a\neq b$. So this sub-case can't occur.
- Hence $\{a,c\}=\{a,b\}$. Since $c$ is a member of the left set, $c=a$ or $c=b$; and since $b$ is a member of the right set $\{a,c\}$, $b=a$ or $b=c$. As $b\neq a$, we get $b=c$.

In every case $b=c$. $\blacksquare$

**P3** By Example 2, $A\times B$ exists as a set. A **function** $f:A\to B$ is, formally, a subset $f\subseteq A\times B$ (a set of ordered pairs) satisfying the single-value / totality condition
$$\varphi(f)\ \equiv\ \forall x\big(x\in A \to \exists!\,y\,(y\in B \land (x,y)\in f)\big),$$
where $\exists!$ abbreviates "there is exactly one." Since every such $f$ is a subset of $A\times B$, we have $f\in\mathcal{P}(A\times B)$ — **Power Set** applied to the product gives one set containing *all* candidate functions (and much else). Now **Separation** filters it:
$$B^{A} \;=\; \{\, f\in\mathcal{P}(A\times B) \;:\; \varphi(f)\,\}.$$
This is a legal instance of Separation ($\varphi$ is a formula, $\mathcal{P}(A\times B)$ is an existing set), so the set of all functions $A\to B$ exists. $\blacksquare$ The construction stack is: Pairing/Union $\Rightarrow A\cup B$; Power Set twice $\Rightarrow$ ambient set for pairs; Separation $\Rightarrow A\times B$; Power Set once more $\Rightarrow \mathcal{P}(A\times B)$; Separation again $\Rightarrow B^A$. Nothing was conjured — every layer sat inside a prior set.

</details>

## Flashback

**From Lesson 3.1 (Russell's paradox):** Whitehead and Russell called a set *ordinary* if it is **not** a member of itself, and *extraordinary* otherwise. Suppose naive (unrestricted) comprehension is allowed, and form $O = \{x : x \text{ is ordinary}\}$, the set of all ordinary sets. Ask whether $O$ is ordinary, and derive a contradiction from **both** answers. Which single naive assumption does this refute — and why does the Separation axiom of *this* lesson escape it?

<details>
<summary>Solution</summary>

Unwind the definition: $x$ is ordinary means $x\notin x$, so $O=\{x : x\notin x\}$ and the comprehension gives, for all $x$, $\ x\in O \leftrightarrow x\notin x$. Instantiate at $x=O$:
$$O\in O \ \leftrightarrow\ O\notin O.$$
- If $O$ is ordinary ($O\notin O$): then $O$ satisfies the membership condition, so $O\in O$ — hence $O$ is extraordinary. Contradiction.
- If $O$ is extraordinary ($O\in O$): then $O$ fails the condition $x\notin x$, so $O\notin O$ — hence $O$ is ordinary. Contradiction.

Both cases explode, so $O$ cannot exist. The refuted assumption is **unrestricted comprehension** — the naive rule that *any* property $\varphi$ defines a set $\{x:\varphi(x)\}$. The predicate "is ordinary" is perfectly meaningful; what fails is the belief that a meaningful predicate always cuts out a set.

**Separation escapes** because it only forms $\{x\in A : x\notin x\}$ for an already-given set $A$. As Example 1 showed, running the argument on $R_A$ doesn't yield $\bot$ — it yields the harmless theorem $R_A\notin A$. There is no set of *all* sets to instantiate at, so the self-referential detonation "$x=O$" is never available. $\blacksquare$

</details>

## Connections

- **Backward:** Lesson 3.1 diagnosed unrestricted comprehension as the culprit; Separation is the precise, minimal amputation — keep comprehension, but chain it to an existing set. This lesson turns "here's what's forbidden" into "here's what's allowed, and it's enough."
- **Forward:** Lesson 3.3 adds Infinity (a set that seeds $\mathbb{N}$ via $\varnothing,\{\varnothing\},\dots$ from P1), Replacement (image of a set under a definable operation is a set — the one construction move these axioms *can't* do), and Foundation (no infinite descending $\in$-chains), completing the picture of the cumulative hierarchy $V_\alpha$.
- **Forward:** Power set is the engine of Module 4 — Cantor's theorem (4.3) shows $|A| < |\mathcal{P}(A)|$, so iterating Power Set manufactures strictly larger infinities, and $\mathcal{P}(\mathbb{N})$ is the size of the continuum (4.4).
- **Sideways ([real-analysis](../../real-analysis/syllabus.md), [topology](../../topology/syllabus.md)):** every function, sequence, metric, and open set you'll ever meet is literally one of the subsets-of-products this lesson built — a function $\mathbb{R}\to\mathbb{R}$ is an element of $\mathcal{P}(\mathbb{R}\times\mathbb{R})$ satisfying P3's $\varphi$. The construction kit here is the substrate under all of analysis.
