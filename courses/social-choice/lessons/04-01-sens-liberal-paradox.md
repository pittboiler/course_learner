# Social Choice · Lesson 4.1: Sen's liberal paradox

> ⏱ ~15 min · Module 4: Rights and reasons · Builds on: [1.1 Profiles, rules and the majority relation](01-01-profiles-rules-and-the-majority-relation.md), [1.3 Arrow as a map](01-03-arrow-as-a-map.md) · Unlocks: [4.2 Answers to Sen](04-02-answers-to-sen.md)

## Why this matters

Two principles sound unopposable. Some matters are yours to decide: what you read, whether you take up a hobby. And if everyone prefers one outcome to another, society should too. Amartya Sen (1970, "The Impossibility of a Paretian Liberal", *Journal of Political Economy*) proved that, together with an unrestricted domain, these cannot hold at once. [`philosophy-of-economics` 3.2](../../philosophy-of-economics/lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md) stated the paradox and left the proof here. The proof is short, and it shows how little it takes to break aggregation: no IIA, no transitivity, just two people and a cycle.

## The idea

A motorcycle school offers one free place on a weekend course. Either Ana takes it, Bo takes it, or nobody does. Whether Ana takes it, as against leaving it unused, looks like Ana's business. Whether Bo takes it, as against leaving it unused, is Bo's.

Now give them **meddlesome** preferences, preferences about the other person's sphere. Ana loves riding and badly wants to convert Bo, so she would most like Bo to go; failing that she'd go herself rather than waste the place. Bo thinks motorcycles are dangerous. He'd rather nobody went, but if someone must, he'd rather take the risk himself than watch Ana take it.

Respect Ana's right: she prefers going to wasting the place, so "Ana goes" beats "nobody goes". Respect Bo's right: he prefers wasting it to going, so "nobody goes" beats "Bo goes". Respect unanimity: both rank "Bo goes" above "Ana goes". That is a cycle. Whatever society picks, one of its own principles names something better. No option survives.

## The theorem

**Setup.** Individuals $N = \{1, \dots, n\}$ with $n \ge 2$; a finite set of alternatives $A$; individual $i$'s strict ranking $\succ_i$; a profile $\mathbf{P} = (\succ_1, \dots, \succ_n)$. A **collective choice rule** $F$ maps each profile to a complete, reflexive social relation $R = F(\mathbf{P})$ ("at least as good as"), whose strict part is $P$: $x \, P \, y$ iff $x \, R \, y$ and not $y \, R \, x$. (Plain $P$ is the social preference; bold $\mathbf{P}$ is the profile.) The **choice set** from $S \subseteq A$ is

$$C(S) = \{x \in S : x \, R \, y \text{ for all } y \in S\}.$$

*In words:* the options nothing in $S$ strictly beats.

**Social decision function.** $F$ is one if $C(S) \ne \varnothing$ for every nonempty $S \subseteq A$ at every profile. On a finite $A$ this is equivalent to [acyclicity](../reference.md#acyclicity): no $x_1 \, P \, x_2 \, P \cdots P \, x_k \, P \, x_1$ (Sen, *Collective Choice and Social Welfare*, 1970). *In words:* every menu has a best option, which is all you need to choose, and much less than [Arrow's](../reference.md#arrows-theorem) transitivity.

**The conditions.**

- **(U)** [Unrestricted domain](../reference.md#unrestricted-domain): $F$ is defined on every profile of strict rankings. (Sen allows weak orderings; every profile below is strict, so the theorem holds on this smaller domain too.)
- **(WP)** [Weak Pareto](../reference.md#weak-pareto): if $x \succ_i y$ for every $i \in N$, then $x \, P \, y$. *In words:* a unanimous strict preference is society's.
- **(ML)** [Minimal liberalism](../reference.md#minimal-liberalism): there are two distinct individuals $i, j$ and pairs $\{x, y\}$, $\{z, w\}$ such that $i$ is **decisive** over $\{x, y\}$ (if $x \succ_i y$ then $x \, P \, y$, and if $y \succ_i x$ then $y \, P \, x$) and $j$ is decisive over $\{z, w\}$. *In words:* at least two people each get the last word on at least one pair, whichever way they rank it.

**Theorem ([Sen's liberal paradox](../reference.md#sens-liberal-paradox), Sen 1970).** No social decision function satisfies (U), (WP) and (ML).

*In words:* if two people each control one private choice, and unanimity always counts, some profile leaves society with no best option.

**Lemma 1.** If $R$ is complete and $x_1 \, P \, x_2 \, P \cdots P \, x_k \, P \, x_1$, then $C(\{x_1, \dots, x_k\}) = \varnothing$.

*Proof.* Take any $x_t$ and its predecessor on the cycle, $x_{t-1}$ (read $x_0$ as $x_k$). Since $x_{t-1} \, P \, x_t$, by definition not $x_t \, R \, x_{t-1}$. So $x_t \notin C$. Every member is excluded. ∎

**Proof of the theorem.** Suppose $F$ satisfies (U), (WP) and (ML), with $i$ decisive over $\{x, y\}$ and $j$ over $\{z, w\}$. The two pairs either coincide, share exactly one alternative, or are disjoint.

**Case 0: same pair.** Use (U) to pick a profile with $x \succ_i y$ and $y \succ_j x$. Then $i$'s decisiveness gives $x \, P \, y$ and $j$'s gives $y \, P \, x$. But $P$ is asymmetric (by its definition), contradiction.

**Case 1: one shared alternative.** Decisiveness does not care about order within a pair, so name the shared alternative $y$: $i$ controls $\{x, y\}$, $j$ controls $\{y, z\}$, with $x, y, z$ distinct. By (U) choose

- $i$: $z \succ_i x \succ_i y$,
- $j$: $y \succ_j z \succ_j x$,
- every other voter: any ranking with $z$ above $x$.

1. $x \succ_i y$ and $i$ is decisive over $\{x, y\}$, so $x \, P \, y$.
2. $y \succ_j z$ and $j$ is decisive over $\{y, z\}$, so $y \, P \, z$.
3. Every voter, $i$ and $j$ included, ranks $z$ above $x$; by (WP), $z \, P \, x$.
4. So $x \, P \, y \, P \, z \, P \, x$, and by Lemma 1, $C(\{x, y, z\}) = \varnothing$. Contradiction.

Notice that $i$'s ranking is forced: steps 1 and 3 need $x \succ_i y$ and $z \succ_i x$, and transitivity leaves only $z \succ_i x \succ_i y$. Likewise for $j$.

**Case 2: disjoint pairs.** Same idea, one more Pareto edge: that is P2. ∎

**Why only a cycle is needed.** Arrow's proof ([`grad-game-theory` 5.1](../../grad-game-theory/lessons/05-01-social-choice-impossibility.md)) spreads decisiveness from one pair to all pairs, and needs IIA and full transitivity to do it. Sen needs neither. Decisiveness is handed out by (ML) directly, and the contradiction is a single cycle on three or four alternatives at a single profile, so acyclicity is enough. The price is on the other side. (ML) is much stronger than [non-dictatorship](../reference.md#non-dictatorship): if $d$ were a dictator and $j \ne d$ were decisive over $\{z, w\}$, the profile $z \succ_j w$, $w \succ_d z$ would force both $z \, P \, w$ and $w \, P \, z$. In [1.3](01-03-arrow-as-a-map.md)'s terms, Sen changes the input: some individuals' preferences are made to count *more* on some pairs.

**Where the argument is weakest.** (U). The cyclic profile needs [meddlesome preferences](../reference.md#meddlesome-preferences): in Case 1, $i$ ranks $z$ above $x$, an outcome in $j$'s sphere above one in her own, and the cycle exists only because she does. A critic says such preferences should not count on that pair (Julian Blau, 1975), or that rights are not constraints on social *preference* at all (rights as game forms; Gaertner, Pattanaik and Suzumura, 1992). Drop (U) to exclude those profiles and the conflict can disappear: Example 2 counts how few profiles cause it. [4.2](04-02-answers-to-sen.md) states these escapes at full strength.

## Picture

![Left panel: three alternatives, a for Ana takes the place, o for nobody goes, b for Bo takes it. A blue arrow from a to o is Ana's right, a green arrow from o to b is Bo's right, and a red arrow from b to a is the Pareto edge, closing a cycle. Right panel: four alternatives x, y, z, w at the corners of a square, a blue arrow from x to y for one person's right, a green arrow from z to w for the other's, and two dashed lines from y to z and from w to x marking the edges Pareto must supply.](assets/04-01-fig1.svg)

Rights edges come from one person each; the Pareto edge needs everyone. Case 1 needs one Pareto edge, Case 2 two.

## Worked examples

**Example 1: the motorcycle course.** Alternatives $a$ (Ana goes), $b$ (Bo goes), $o$ (nobody). Ana is decisive over $\{a, o\}$, Bo over $\{b, o\}$; this is Case 1 with shared alternative $o$.

- Ana: $b \succ a \succ o$.
- Bo: $o \succ b \succ a$.

Ana's right: $a \succ_{\text{Ana}} o$, so $a \, P \, o$. Bo's right: $o \succ_{\text{Bo}} b$, so $o \, P \, b$. Pareto: both rank $b$ above $a$, so $b \, P \, a$. The cycle is $a \, P \, o \, P \, b \, P \, a$ and the choice set from $\{a, b, o\}$ is empty: $a$ loses to $b$, $b$ to $o$, $o$ to $a$.

**Example 2: how much the domain matters.** Take the **minimal liberal-Paretian rule**: $x \, P \, y$ iff a right or a unanimous preference forces it; every other pair is socially indifferent. With the two rights on different pairs, this $P$ is always asymmetric: a right-holder is one of the unanimous voters, so Pareto never contradicts a right on its own pair. Keep Ana's and Bo's rights and run the rule on all $6 \times 6 = 36$ two-person profiles over $\{a, b, o\}$. A script finds exactly **2** cyclic profiles: Example 1's, and its mirror image (Ana $o \succ a \succ b$, Bo $a \succ b \succ o$). On the other 34 the rule is acyclic, so it is a perfectly good social decision function there.

Now add $n - 2$ people who have no rights. Pareto needs all of them, so a cycle requires every extra voter to agree on the one Pareto pair. If all $6^n$ profiles are equally likely (impartial culture, as in [1.4](01-04-how-often-do-cycles-happen.md)), the share of cyclic profiles is

$$\frac{1}{18}\left(\frac{1}{2}\right)^{n-2},$$

checked by enumeration for $n = 2, 3, 4, 5$: $\tfrac{1}{18}, \tfrac{1}{36}, \tfrac{1}{72}, \tfrac{1}{144}$.

This is where (U) bites. The theorem is an existence claim: one profile in the domain is enough. A rule that misbehaves on 2 of 36 profiles is not a social decision function on the unrestricted domain, however rare those profiles are. And the uniform distribution is only a yardstick. It says nothing about how common meddlesome preferences are among real people, which is an empirical question, not something the theorem decides.

## Watch out

- **You might think** this is Arrow's theorem with liberalism in place of non-dictatorship. **Actually** it uses no IIA and no transitivity, and it holds with two people. Its liberalism condition is strictly stronger than non-dictatorship, which is why it can afford weaker conditions elsewhere.
- **You might think** one person's right already clashes with Pareto. **Actually** the theorem needs *two* right-holders, the hypothesis easiest to lose in a retelling. With one, make that person a dictator: (U), (WP) and her decisiveness hold, and the social relation is transitive (script-checked for two and three people on three alternatives).
- **You might think** Pareto overrides Ana's right on her own pair. **Actually** it never can: Ana is one of the unanimous voters. The clash runs *around* a cycle, through pairs that belong to nobody.

## One-liner

> Give two people the last word on one private pair each, let unanimity count, and allow everyone to care about the other's business: some profile then leaves society with no best option.

## Problems

**P1 (🟢) *(Formal (a)–(b).)*** One free place in a winter sea-swimming course: $k$ (Kit takes it), $l$ (Lou takes it), $z$ (nobody). Kit is decisive over $\{k, z\}$, Lou over $\{l, z\}$; Mo has no rights. Rankings: Kit $z \succ k \succ l$; Lou $k \succ l \succ z$; Mo $k \succ z \succ l$.

(a) List every strict social preference that (ML) and (WP) force, and show that the choice set from $\{k, l, z\}$ is empty.
(b) Mo switches to $l \succ k \succ z$. Under Example 2's minimal liberal-Paretian rule, find the choice set from $\{k, l, z\}$, and show that $P$ is now acyclic but not transitive. In one sentence, say why this does not contradict Sen's theorem.

**P2 (🟡) *(Formal.)*** Complete the proof: Case 2. Individual $i$ is decisive over $\{x, y\}$ and $j$ over $\{z, w\}$, all four distinct. Write down a ranking for $i$, a ranking for $j$, and a condition on every other voter's ranking, and derive a cycle step by step. Then say in one sentence why this case needs two Pareto edges where Case 1 needed one.

**P3 (🔴, optional) *(Exegetical.)*** An **invented** op-ed paragraph:

> "Sen proved that rights and efficiency are always incompatible. Any society that lets people run their own lives must tolerate outcomes everyone agrees are worse."

Say what the theorem actually asserts and identify two ways the paragraph misstates it. 150 words or fewer.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a)–(b), strict.)*

(a) Kit's right: $z \succ_{\text{Kit}} k$, so $z \, P \, k$. Lou's right: $l \succ_{\text{Lou}} z$, so $l \, P \, z$. Pareto on $\{k, l\}$: Kit, Lou and Mo all rank $k$ above $l$, so $k \, P \, l$. Pareto forces nothing else: on $\{k, z\}$ Lou has $k \succ z$ but Kit has $z \succ k$; on $\{l, z\}$ Kit and Mo rank $z$ above $l$ but Lou does not. The cycle is $k \, P \, l \, P \, z \, P \, k$. By Lemma 1, $k$ is beaten by $z$, $l$ by $k$, $z$ by $l$, so $C(\{k, l, z\}) = \varnothing$.

(b) Mo now ranks $l$ above $k$, so the Pareto edge $k \, P \, l$ disappears. The rights edges are unchanged: $z \, P \, k$ and $l \, P \, z$. The minimal rule makes $k$ and $l$ indifferent. Choice set: $k$ is beaten by $z$; $z$ is beaten by $l$; nothing beats $l$. So $C(\{k, l, z\}) = \{l\}$. Acyclic: the only strict edges are $l \, P \, z \, P \, k$, a chain. Not transitive: $l \, P \, z$ and $z \, P \, k$, but not $l \, P \, k$. Sen's theorem says some profile in the unrestricted domain produces a cycle; it does not say every profile does, and (a) is such a profile.

**Wrong turns:** in (a), claiming a Pareto edge on $\{k, z\}$ or $\{l, z\}$ without checking all three voters; forgetting that Mo counts for Pareto. In (b), reading "acyclic" as "transitive": acyclicity is all a social decision function needs, and this $P$ has it without transitivity.

---

**P2** *(Formal, strict.)*

**Accept:** any explicit profile in which the two rights edges and two unanimous preferences form a four-cycle on $\{x, y, z, w\}$, with every other voter's ranking constrained so that both Pareto edges hold.

Model answer. By (U) choose

- $i$: $w \succ_i x \succ_i y \succ_i z$,
- $j$: $y \succ_j z \succ_j w \succ_j x$,
- every other voter: any ranking with $w$ above $x$ and $y$ above $z$ (for example $y \succ z \succ w \succ x$).

1. $x \succ_i y$ and $i$ is decisive over $\{x, y\}$, so $x \, P \, y$.
2. Every voter ranks $y$ above $z$; by (WP), $y \, P \, z$.
3. $z \succ_j w$ and $j$ is decisive over $\{z, w\}$, so $z \, P \, w$.
4. Every voter ranks $w$ above $x$; by (WP), $w \, P \, x$.
5. So $x \, P \, y \, P \, z \, P \, w \, P \, x$, and by Lemma 1, $C(\{x, y, z, w\}) = \varnothing$: contradiction.

Given this orientation both individual rankings are forced: $i$ needs $w \succ x \succ y$ and $y \succ z$, and $j$ needs $y \succ z \succ w$ and $w \succ x$. Why two Pareto edges: the rights edges share no alternative, so a cycle through both must cross from $y$ to $z$ and back from $w$ to $x$, and only unanimity can supply an edge on a pair nobody controls.

**Wrong turns:** fixing only $i$'s and $j$'s rankings and leaving the other $n - 2$ voters free, so (WP) does not apply; choosing rankings for $i$ or $j$ that violate one of the two Pareto edges (each must rank $w$ above $x$ and $y$ above $z$, including the right-holders themselves).

---

**P3** *(Exegetical, strict.)*

**Must hit, strict:**

- What it asserts: no rule defined on every profile (U) can satisfy weak Pareto and minimal liberalism (two people each decisive over one pair) and always leave a best option (acyclicity).
- Misstatement 1, the quantifier: "always incompatible" turns an existence claim into a universal one. The conflict arises at *some* profile, one with meddlesome preferences; on most profiles nothing clashes (Example 2: 2 of 36).
- Misstatement 2, the conclusion: the theorem does not say liberal societies must tolerate Pareto-inferior outcomes. It says the three conditions cannot all hold, and leaves open which to drop: Pareto on meddlesome pairs, the domain, or the preference-based reading of rights (4.2).

**Wrong turns:** "efficiency" read as market efficiency; it is weak Pareto applied to a social ranking. Saying the theorem shows rights should yield: that is a verdict it does not give.

**Model answer, one of several:** Sen's theorem says no social decision function on the unrestricted domain satisfies weak Pareto and minimal liberalism. The paragraph errs twice. "Always" is wrong: the clash needs a particular profile, one where people rank outcomes in each other's spheres above outcomes in their own; most profiles produce no clash. And "must tolerate worse outcomes" picks a resolution the theorem does not pick. It shows only that something must give: Pareto on such profiles, the domain, or the formalization of rights as decisiveness over social preference.

</details>

## Flashback

**From Lesson [3.3](03-03-single-peakedness-black-and-moulin.md) (Single-peakedness: Black and Moulin):** *(Formal (a) · Exegetical (b).)* Three voters are single-peaked on $[0, 10]$ with peaks 2, 5 and 9, and every report must lie in $[0, 10]$. A committee proposes the **mean rule**: the outcome is the average of the three reported peaks.

(a) Find the truthful outcome. Show that the voter with peak 2 gains by reporting 0, and find the report that gives the voter with peak 5 exactly her peak.
(b) The mean rule is peak-only and anonymous. In two sentences: what does Moulin's theorem then tell you about it, and which step of 3.3's strategy-proofness proof fails for it?

<details>
<summary>Solution</summary>

**Worked arithmetic (a):** Truthful outcome $(2 + 5 + 9)/3 = 16/3 \approx 5.33$. The peak-2 voter reports 0: $(0 + 5 + 9)/3 = 14/3 \approx 4.67$. Since $2 < 14/3 < 16/3$, the new outcome lies between her peak and the old one on the same side, so single-peakedness makes it strictly better, whatever her ranking across the peak. The peak-5 voter faces $16/3 > 5$ and wants it lower: $(2 + r + 9)/3 = 5$ gives $r = 4$, and reporting 4 gets her top choice. (The peak-9 voter gains too, by reporting 10: $17/3$.) Under the plain median of peaks the outcome is 5 and no report helps anyone.

**Must hit, strict (b):**

- Moulin's theorem: on the single-peaked domain, a peak-only, anonymous rule is strategy-proof if and only if it is a generalized median with $n + 1$ phantoms. The mean is manipulable, so it is not a generalized median for any placement of phantoms. (The half proved in 3.3 already gives this: every generalized median is strategy-proof.)
- The failing step is the proof's first case: under a generalized median, a voter who reports on her own side of the outcome leaves the counts above and below it unchanged, so nothing moves. Under the mean every report moves the outcome, by a third of the change and in the same direction, so exaggerating toward her own side pulls it toward her peak.

**Wrong turns:** thinking the peak-5 voter cannot gain because she is the median voter: the mean is not 5, and her report shifts it. Arguing the peak-2 voter's gain needs distance-based utility: it uses only the order on one side of her peak. Saying the mean breaks anonymity or peak-onliness: it satisfies both; strategy-proofness is what fails.

**Model answer (b):** Moulin's theorem says a peak-only, anonymous rule on this domain is strategy-proof exactly when it is a generalized median, so the manipulable mean rule is no generalized median, whatever phantoms you add. The proof's first case breaks: a median ignores a report that stays on the voter's own side of the outcome, while the mean follows it, so exaggerating outward drags the outcome toward the exaggerator.

</details>

## Connections

- **Backward:** [1.3](01-03-arrow-as-a-map.md) filed every later result by the axiom it relaxes; Sen drops IIA and transitivity and strengthens non-dictatorship to (ML). Arrow's own proof is [`grad-game-theory` 5.1](../../grad-game-theory/lessons/05-01-social-choice-impossibility.md). The doors version of the paradox is stated in [`philosophy-of-economics` 3.2](../../philosophy-of-economics/lessons/03-02-the-limits-of-pareto-and-the-compensation-tests.md).
- **Forward:** [4.2](04-02-answers-to-sen.md) states the escapes (conditional Pareto, waivable rights and Gibbard's paradox, rights as game forms). [4.3](04-03-the-doctrinal-paradox-and-the-discursive-dilemma.md) and [4.4](04-04-the-list-pettit-impossibility.md) find a second impossibility from locally sensible aggregation, this time over reasons rather than rights.
- **Sideways:** (ML) is a formal cousin of Mill's self-regarding sphere ([`political-philosophy` 3.2](../../political-philosophy/lessons/03-02-mills-harm-principle.md)), and meddlesome preferences are the preferences legal moralism would act on ([3.3](../../political-philosophy/lessons/03-03-paternalism-and-legal-moralism.md)). Whether Pareto should launder such preferences is [`philosophy-of-economics` 1.1](../../philosophy-of-economics/lessons/01-01-welfarism-and-preference-satisfaction.md)'s question.
