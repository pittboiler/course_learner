# Measure Theory · Lesson 1.6: A non-measurable set

> ⏱ ~15 min · Module 1: σ-algebras and the construction of measure · Builds on: [Lesson 1.5](01-05-lebesgue-measure-rn.md) (translation invariance of Lebesgue measure) · Unlocks: [Lesson 2.1](02-01-measurable-functions.md) (measurable functions)

## Why this matters

We spent five lessons building Lebesgue measure $\lambda$ on $\mathbb{R}^n$ so we could measure *sets first, integrate second*. The natural next hope is that $\lambda$ measures **everything** — that $\lambda(E)$ makes sense for every $E\subseteq\mathbb{R}$. This lesson kills that hope. There is a subset of $[0,1]$ so pathological that assigning it *any* length at all — zero, positive, infinite — contradicts two properties we refuse to give up: **translation invariance** and **countable additivity**. This is not a technicality; it is *the* reason the whole subject is organized around a σ-algebra of "measurable" sets rather than all of $2^{\mathbb{R}}$. It also quietly reveals that the Axiom of Choice has teeth: the offending set cannot be written down, only *chosen* into existence.

## The idea

Here is the whole plot in one breath. Glue two points of $[0,1]$ together whenever they differ by a rational. This shatters $[0,1]$ into a huge pile of clumps (**cosets**), each clump countable and dense. Now reach into every clump and pluck out exactly one point. Collect your plucked points into a set $V$ — a **Vitali set**.

Now slide $V$ around by every rational amount in $[-1,1]$. Two facts fall out:

- **The slid copies never overlap.** Two points of $V$ came from different clumps, so they differ by an *irrational*; sliding by rationals can never make one land on another.
- **The slid copies together cover $[0,1]$, and all of them live inside $[-1,2]$.** Every point of $[0,1]$ is a rational hop from its clump's chosen representative.

So $[0,1]$ is tiled by *countably many disjoint, congruent copies of $V$*, and the whole tiling is trapped between length $1$ and length $3$. If $V$ had a length $\ell$, every copy would also have length $\ell$ (sliding doesn't change length), and countably many of them would add up to $\ell+\ell+\ell+\cdots$. That sum is $0$ if $\ell=0$ and $\infty$ if $\ell>0$ — it can *never* be a finite number between $1$ and $3$. So $V$ has no length. Done.

## The formal version

Fix the interval $[0,1]$ and define a relation on it.

**Definition (the rational-difference relation).** For $x,y\in[0,1]$, write $x\sim y$ iff $x-y\in\mathbb{Q}$.

*In words:* two points are related exactly when they differ by a rational number.

This is an equivalence relation: $x\sim x$ (difference $0$); $x\sim y\Rightarrow y\sim x$ ($\mathbb{Q}$ is closed under negation); and $x\sim y,\ y\sim z\Rightarrow x\sim z$ ($\mathbb{Q}$ is closed under addition). So it partitions $[0,1]$ into disjoint **equivalence classes (cosets)**
$$[x]=\big([0,1]\big)\cap\big(x+\mathbb{Q}\big)=\{\,y\in[0,1]:y-x\in\mathbb{Q}\,\}.$$
Each class is countable (a subset of the countable set $x+\mathbb{Q}$) and dense in $[0,1]$ (the rationals are dense). Since $[0,1]$ is uncountable but each class is countable, there are **uncountably many** classes.

**Definition (Vitali set).** A set $V\subseteq[0,1]$ is a *Vitali set* if it contains **exactly one** element from each equivalence class.

**Where the Axiom of Choice enters — and only here.** We are asked to select one point from each of *uncountably many* nonempty sets, with **no rule** telling us which point to take (the classes are unstructured dense scatters; there is no "smallest" element, no formula). Producing the selection function is *precisely* the content of the Axiom of Choice. This is the single non-constructive step in the entire lesson; everything after it is ordinary bookkeeping.

Now enumerate the rationals in $[-1,1]$:
$$\mathbb{Q}\cap[-1,1]=\{q_0,q_1,q_2,\dots\}\qquad(\text{countably many}),$$
and form the **translates** $V+q_k=\{\,v+q_k:v\in V\,\}$.

**Lemma 1 (disjointness).** If $j\ne k$ then $(V+q_j)\cap(V+q_k)=\varnothing$.

*Proof.* Suppose some point lies in both: $v+q_j=v'+q_k$ with $v,v'\in V$. Then $v-v'=q_k-q_j\in\mathbb{Q}$, so $v\sim v'$ — they belong to the same class. But $V$ has *only one* representative per class, forcing $v=v'$, hence $q_j=q_k$, i.e. $j=k$. Contrapositive gives the claim. $\blacksquare$

*In words:* distinct representatives differ by an irrational, so no rational shift can make two copies collide.

**Lemma 2 (the sandwich).** $\displaystyle [0,1]\ \subseteq\ \bigcup_{k=0}^{\infty}(V+q_k)\ \subseteq\ [-1,2].$

*Proof.* *Right inclusion:* if $v\in V\subseteq[0,1]$ and $q_k\in[-1,1]$, then $v+q_k\in[-1,2]$. *Left inclusion:* take any $x\in[0,1]$. Its class has a representative $v\in V$, so $x-v\in\mathbb{Q}$; and since $x,v\in[0,1]$, we have $x-v\in[-1,1]$. Thus $x-v=q_k$ for some $k$, giving $x=v+q_k\in V+q_k$. $\blacksquare$

*In words:* the copies never poke outside $[-1,2]$, yet together they swallow all of $[0,1]$.

**Theorem (Vitali).** $V$ is not Lebesgue measurable.

*Proof.* Suppose, for contradiction, that $V$ is measurable, with $\lambda(V)=\ell\in[0,\infty]$. Translation invariance of Lebesgue measure (Lesson 1.5) says each translate $V+q_k$ is measurable with the *same* measure: $\lambda(V+q_k)=\lambda(V)=\ell$ for every $k$. Let $U=\bigcup_k (V+q_k)$. The translates are pairwise disjoint (Lemma 1), so **countable additivity** gives
$$\lambda(U)=\sum_{k=0}^{\infty}\lambda(V+q_k)=\sum_{k=0}^{\infty}\ell.$$
Monotonicity applied to the sandwich (Lemma 2) pins $\lambda(U)$ down:
$$1=\lambda([0,1])\le \lambda(U)\le\lambda([-1,2])=3.$$
Now read off the sum $\sum_{k}\ell$ of the single constant $\ell$ over the countably infinite index set:

- if $\ell=0$, then $\sum_k \ell = 0$;
- if $\ell>0$, then $\sum_k \ell = +\infty$.

Neither $0$ nor $\infty$ lies in $[1,3]$ — contradiction. Hence no value of $\ell$ is possible: $V$ is not measurable. $\blacksquare$

**Where countable (not merely finite) additivity enters.** The contradiction lives *entirely* in the step $\lambda(U)=\sum_{k=0}^\infty \ell$: an infinite sum of a fixed constant. With only **finite** additivity you could add up any *finite* batch of translates, but a finite batch never covers $[0,1]$ (you need infinitely many rational shifts), so the lower bound $\lambda(U)\ge 1$ is unreachable and no contradiction appears. Indeed — in one dimension — a *finitely* additive, translation-invariant extension of length to **all** subsets of $\mathbb{R}$ does exist (a theorem of Banach). Countable additivity is the exact property that finitely-additive length lacks and that Vitali's set destroys.

## Picture

![The interval [0,1] partitioned into rational-difference cosets with one representative chosen per coset (the Vitali set V), and the disjoint rational translates V+q tiling into [-1,2].](assets/01-06-fig1.svg)

Top: three sample cosets of $[0,1]$ (each dense, each a different colour); the ringed dot in each is the representative we chose — collect all ringed dots and you have $V$. Bottom: five of the translates $V+q_k$ shown as separate rows. Each row is a rigid slide of the same pattern, so they are congruent; no two rows share a horizontal position (disjointness); and their combined footprint covers the shaded $[0,1]$ while staying inside $[-1,2]$.

## Worked examples

**Example 1 (disjointness is forced by irrationality — a concrete check).** Suppose $\tfrac{\sqrt2}{2}$ and $\tfrac{\sqrt2}{2}-\tfrac13$ were *both* in $V$. Their difference is $\tfrac13\in\mathbb{Q}$, so they satisfy $x\sim y$ — they lie in the *same* coset. A Vitali set keeps only one point per coset, so this pair can never both be chosen; $V$ is built precisely to exclude it. Conversely two *legitimately* distinct members of $V$, say $v=\tfrac{\sqrt2}{2}$ and $v'=\tfrac{1}{\pi}$, have difference $\tfrac{\sqrt2}{2}-\tfrac1\pi\notin\mathbb{Q}$. Shift both by rationals: $v+q_j=v'+q_k$ would force $v-v'=q_k-q_j\in\mathbb{Q}$, impossible. So the copies $V+q_j$ and $V+q_k$ are disjoint — exactly Lemma 1, seen one pair at a time.

**Example 2 (why you'd care — the same clash decides $\lambda(\mathbb{Q})$).** The engine here, *translation invariance plus countable additivity*, is not exotic; it already settles familiar sets. Every singleton has the same measure $c:=\lambda(\{0\})$ by translation invariance. If $c>0$, the countably many disjoint points $\{1,\tfrac12,\tfrac13,\dots\}\subseteq[0,1]$ would give $\lambda([0,1])\ge\sum_n c=\infty$, absurd; so $c=0$. Then $\mathbb{Q}=\bigcup_{q\in\mathbb{Q}}\{q\}$ is a countable disjoint union, and countable additivity yields $\lambda(\mathbb{Q})=\sum_q 0=0$. The *only* difference with Vitali is the direction of the surprise: for $\mathbb{Q}$ the sum $0+0+\cdots$ is harmlessly $0$; for $V$ the very same "constant, summed countably" is trapped against a lower bound of $1$ and has nowhere to go. Same machine, opposite verdicts.

## Watch out

- **You might think** the Vitali set is just weird because it is infinite or dense — **but** density and infiniteness are shared by $\mathbb{Q}\cap[0,1]$, which *is* measurable (measure $0$). The pathology is not the set's size; it is that it meets every coset exactly once, which is only possible via a *non-constructive* choice. You cannot exhibit $V$; you can only prove it exists.
- **You might think** finite additivity would already break, so countable additivity is overkill — **but** no: finitely-additive translation-invariant length on all of $2^{\mathbb{R}}$ exists in dimension $1$. The contradiction needs the *infinite* sum $\ell+\ell+\cdots$ specifically. (In $\mathbb{R}^3$ the Banach–Tarski paradox shows even finite additivity fails — a separate, deeper story.)
- **You might think** the argument shows Lebesgue measure is "broken." **Actually** it shows the opposite: it *forces* the design decision that $\lambda$ lives on a σ-algebra $\mathcal{M}$ strictly smaller than $2^{\mathbb{R}}$. Every set you meet in analysis — open, closed, Borel, $F_\sigma$, $G_\delta$ — is in $\mathcal{M}$; only choice-summoned monsters escape.

## One-liner

> Pick one point per rational-difference coset of $[0,1]$: the resulting set tiles $[0,1]$ by countably many congruent copies, and a length that survives both sliding and countable addition has no room to exist.

## Problems

**P1 (🟡)** Show that every equivalence class $[x]=[0,1]\cap(x+\mathbb{Q})$ is countably infinite and dense in $[0,1]$. Then deduce that the number of distinct classes is uncountable. (This is why the choice in building $V$ is over an *uncountable* index set — the feature that makes the Axiom of Choice essential rather than avoidable.)

**P2 (🟡)** A skeptic proposes "fixing" the paradox by only translating with rationals $q_k\in[0,\tfrac12]$ instead of $[-1,1]$. Show the translates $V+q_k$ are still pairwise disjoint, but that the union now satisfies $\bigcup_k(V+q_k)\subseteq[0,\tfrac32]$ with **no** guarantee it contains $[0,1]$. Explain in one sentence why this makes the contradiction evaporate, and hence why the original argument genuinely needs rationals of *both* signs.

**P3 (🔴)** State precisely, in the proof of Vitali's theorem, (a) the single step that invokes the Axiom of Choice, and (b) the single step that requires *countable* (not merely finite) additivity. For (b), explain concretely what goes wrong with the contradiction if $\lambda$ is only assumed finitely additive.

<details>
<summary>Solutions</summary>

**P1.** *Countable:* $[x]\subseteq x+\mathbb{Q}$, and $x+\mathbb{Q}$ is a bijective image of $\mathbb{Q}$ (via $q\mapsto x+q$), hence countable; a subset of a countable set is countable. *Infinite:* for every rational $q$ with $-x\le q\le 1-x$ the point $x+q$ lies in $[0,1]$ and in $[x]$, and there are infinitely many such $q$ (the rationals are dense in the nondegenerate interval $[-x,1-x]$), so $[x]$ is infinite. *Dense:* given any subinterval $(a,b)\subseteq[0,1]$, density of $\mathbb{Q}$ gives a rational $q\in(a-x,b-x)$, whence $x+q\in(a,b)\cap[x]$; so $[x]$ meets every subinterval. *Uncountably many classes:* the classes partition $[0,1]$, so $[0,1]=\bigsqcup_{\alpha}[x_\alpha]$. If there were only countably many classes, then $[0,1]$ would be a countable union of countable sets, hence countable — contradicting the uncountability of $[0,1]$. So there are uncountably many classes. $\blacksquare$

**P2.** *Disjointness still holds:* Lemma 1 used only that distinct representatives differ irrationally while the shifts $q_j,q_k$ are rational; restricting the shifts to a smaller set of rationals cannot create an overlap. Formally, $v+q_j=v'+q_k\Rightarrow v-v'=q_k-q_j\in\mathbb{Q}\Rightarrow v=v'\Rightarrow q_j=q_k$, unchanged.
*Upper bound:* $v\in[0,1]$ and $q_k\in[0,\tfrac12]$ give $v+q_k\in[0,\tfrac32]$, so $\bigcup_k(V+q_k)\subseteq[0,\tfrac32]$.
*Lower bound fails:* to catch a given $x\in[0,1]$ we need its representative $v$ to satisfy $x-v\in[0,\tfrac12]$, i.e. $x\ge v$ and $x-v\le\tfrac12$. But $v$ was chosen blindly; nothing prevents $v>x$ (then $x-v<0$, not an allowed shift) or $x-v>\tfrac12$. So the union need not contain all of $[0,1]$, and we lose the bound $\lambda(U)\ge1$.
*One-sentence upshot:* with only nonnegative shifts the sandwich collapses to $\sum_k\ell\le\lambda([0,\tfrac32])=\tfrac32$, which $\ell=0$ satisfies happily — no contradiction — so the argument truly needs shifts of both signs to force the lower bound $\lambda(U)\ge1$. $\blacksquare$

**P3.** (a) **Axiom of Choice:** the *construction of $V$ itself* — "$V$ contains exactly one element from each equivalence class." This selects one point from each of uncountably many nonempty, rule-less classes; no other step is non-constructive (the enumeration of $\mathbb{Q}\cap[-1,1]$, the translations, disjointness, and the sandwich are all explicit).
(b) **Countable additivity:** the equality $\lambda(U)=\sum_{k=0}^\infty\lambda(V+q_k)=\sum_{k=0}^\infty\ell$, an infinite sum over the countable index set. *What breaks with only finite additivity:* finite additivity lets you evaluate $\lambda\big(\bigcup_{k\le N}(V+q_k)\big)=(N+1)\ell$ for each finite $N$, but a finite union of translates cannot contain $[0,1]$ (covering $[0,1]$ needs *every* rational shift in $[-1,1]$, infinitely many), so you never obtain the lower bound $\lambda(U)\ge1$. Without that lower bound, $\ell=0$ is consistent and the contradiction disappears — matching the fact that finitely-additive, translation-invariant length does extend to all subsets of $\mathbb{R}$. $\blacksquare$

</details>

## Flashback

**From Lesson 1.5 (translation invariance):** Using only translation invariance and countable additivity of Lebesgue measure $\lambda$ on $\mathbb{R}$, prove that every single point has measure zero, and conclude $\lambda(\mathbb{Q})=0$. (Do not assume $\lambda(\{a\})=0$ — derive it.)

<details>
<summary>Solution</summary>

By translation invariance, $\lambda(\{a\})=\lambda(\{0\})=:c$ for every $a\in\mathbb{R}$ (a singleton is a translate of $\{0\}$). The points $\{1,\tfrac12,\tfrac13,\dots\}$ are pairwise disjoint singletons contained in $[0,1]$, so by monotonicity and countable additivity,
$$1=\lambda([0,1])\ \ge\ \lambda\Big(\bigcup_{n\ge1}\{\tfrac1n\}\Big)=\sum_{n\ge1}\lambda(\{\tfrac1n\})=\sum_{n\ge1}c.$$
If $c>0$ the right side is $+\infty>1$, impossible; hence $c=0$, i.e. $\lambda(\{a\})=0$ for all $a$. Finally $\mathbb{Q}$ is countable, say $\mathbb{Q}=\{r_0,r_1,\dots\}$, a disjoint union of singletons, so countable additivity gives $\lambda(\mathbb{Q})=\sum_k\lambda(\{r_k\})=\sum_k 0=0$. $\blacksquare$

Note the shared engine: *translation invariance makes every copy the same size, and countable additivity sums those copies.* For $\mathbb{Q}$ the common size is $0$ and the sum is a harmless $0$; for the Vitali set the sum is boxed into $[1,3]$ and no common size fits. Same two axioms, one benign and one lethal.

</details>

## Connections

- **Backward:** this is where the machinery of Lessons 1.3–1.5 pays off. Countable additivity (Lesson 1.3) and translation invariance (Lesson 1.5) are the exact two properties the Vitali set cannot survive — and the Carathéodory construction (Lesson 1.4) is precisely what carved out the σ-algebra $\mathcal{M}$ that *excludes* $V$, which is why Lebesgue measure is well defined at all.
- **Forward:** because $\mathcal{M}\ne 2^{\mathbb{R}}$, we can no longer say "every function is integrable." Lesson 2.1 (measurable functions) builds integration only over functions whose level sets $\{f>a\}$ land in $\mathcal{M}$ — the domain restriction the Vitali set forces on us.
- **Sideways (probability):** in [probability-theory](../../probability-theory/syllabus.md) a probability is a measure with total mass $1$, and events are the measurable sets. Vitali's theorem is why "the probability that a uniform point in $[0,1]$ lands in the set $A$" is undefined for some $A$ — not every subset can be an event. Non-measurable sets are exactly the "questions with no probability."
- **Sideways (foundations):** this lesson is the standard textbook exhibit for the *strength* of the Axiom of Choice. Gödel and later Solovay showed that in a set theory without full choice, one can consistently have *every* subset of $\mathbb{R}$ Lebesgue measurable — so the non-measurable set is not a defect of measure theory but a genuine consequence of the choice axiom.
