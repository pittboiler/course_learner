# Social Choice · Lesson 1.2: May's theorem

> ⏱ ~15 min · Module 1: The aggregation problem · Builds on: [1.1 Profiles, rules and the majority relation](01-01-profiles-rules-and-the-majority-relation.md) · Unlocks: [1.3 Arrow as a map](01-03-arrow-as-a-map.md)

## Why this matters

A referendum, a bill against the status quo, guilty or not guilty: most real votes are between two options. Majority rule feels like the obvious way to settle them, but "obvious" is not an argument, and real bodies depart from it all the time. Constitutions demand supermajorities, chairs hold casting votes, shareholders vote by weight. Kenneth May proved in 1952 that simple majority is the *only* two-option rule with four mild properties. So every departure gives up at least one of them, and you can say which. This is the course's one clean positive theorem; [1.3](01-03-arrow-as-a-map.md) shows why nothing like it survives at three options.

## The idea

Treat the rule as a black box: everyone's votes go in, and out comes x, y or a tie. Make four demands of it.

1. It always gives an answer.
2. It does not care *who* voted which way, only how many. Take the names off the ballots.
3. It does not care which option happens to be called x. Swap the labels on every ballot and the outcome swaps.
4. If x is winning or tied and some voters move toward x, x wins outright.

Now squeeze. With the names off, the box sees only two numbers: how many voters favour x and how many favour y. With the labels off, an even split looks exactly the same after the swap, so the box must give it the same answer *and* the swapped answer. Only "tie" is its own swap, so an even split is a tie. From a tie, the fourth demand says any nudge toward x elects x. And a lead of any size is just a tie plus a few nudges. That is the whole proof. The formal version makes "a lead is a tie plus nudges" exact.

## The theorem

**Setting.** Two alternatives $x, y$; voters $N = \{1, \dots, n\}$. Voter $i$ reports $D_i \in \{-1, 0, 1\}$: $1$ if $x \succ_i y$, $-1$ if $y \succ_i x$, $0$ if indifferent. A profile is $D = (D_1, \dots, D_n)$, a rule is a function $F$ from profiles to $\{-1, 0, 1\}$: $F(D) = 1$ means society picks $x$, $-1$ picks $y$, $0$ is a social tie. Let $n_+$ be the number of voters with $D_i = 1$ and $n_-$ the number with $D_i = -1$; in [1.1](01-01-profiles-rules-and-the-majority-relation.md)'s notation these are $n(x,y)$ and $n(y,x)$. Write $D' \ge D$ when $D'_i \ge D_i$ for every $i$, and $-D$ for the profile with every vote reversed.

**Simple majority** is $F_{\text{maj}}(D) = \operatorname{sgn}(n_+ - n_-) = \operatorname{sgn}\big(\sum_i D_i\big)$. *In words:* count only voters with a view; the larger side wins, and equal sides tie.

**May's conditions.**

- **[Decisiveness](../reference.md#decisiveness).** $F$ is defined on every profile in $\{-1, 0, 1\}^n$ and returns exactly one value. *In words:* every pattern of votes gets one verdict, and "tie" counts as a verdict.
- **[Anonymity](../reference.md#anonymity).** $F(D_{\sigma(1)}, \dots, D_{\sigma(n)}) = F(D)$ for every permutation $\sigma$ of $N$. *In words:* shuffling the names on the ballots changes nothing.
- **[Neutrality](../reference.md#neutrality).** $F(-D) = -F(D)$. *In words:* if every voter switches sides, society switches sides.
- **[Positive responsiveness](../reference.md#positive-responsiveness).** If $F(D) \in \{0, 1\}$, $D' \ge D$ and $D' \ne D$, then $F(D') = 1$. *In words:* if $x$ is winning or tied and some voters move toward $x$ while nobody moves away, $x$ wins outright.

**[May's theorem](../reference.md#mays-theorem)** (Kenneth May, "A set of independent, necessary and sufficient conditions for simple majority decision", *Econometrica*, 1952). A rule $F$ on $\{-1, 0, 1\}^n$ satisfies decisiveness, anonymity, neutrality and positive responsiveness if and only if $F = F_{\text{maj}}$. *In words:* with two options, majority rule is exactly the rule that always answers, treats voters alike, treats options alike, and lets one vote break a tie.

**Proof that majority has the four properties.**

1. $\operatorname{sgn}\big(\sum_i D_i\big)$ is defined for every profile: decisiveness.
2. A sum does not depend on the order of its terms: anonymity.
3. $\sum_i (-D_i) = -\sum_i D_i$ and $\operatorname{sgn}$ is odd: neutrality.
4. If $F_{\text{maj}}(D) \in \{0, 1\}$ then $\sum_i D_i \ge 0$. If $D' \ge D$ and $D' \ne D$, some entry rose by at least 1 and none fell, so $\sum_i D'_i \ge 1$ and $F_{\text{maj}}(D') = 1$: positive responsiveness.

**Proof that only majority has them.** Let $F$ satisfy all four. Decisiveness makes $F$ a function on the whole of $\{-1, 0, 1\}^n$, so each step below may evaluate $F$ at any profile it builds.

1. *$F$ depends only on $(n_+, n_-)$.* If $D$ and $E$ have the same counts, they contain the same number of $1$s, $0$s and $-1$s, so $E$ is a reordering of $D$: $E_i = D_{\sigma(i)}$ for some permutation $\sigma$. Anonymity gives $F(E) = F(D)$.
2. *Equal counts give a tie.* Suppose $n_+ = n_-$. Reversing every vote turns the counts $(n_+, n_-)$ into $(n_-, n_+)$, which are the same pair. So $F(-D) = F(D)$ by Step 1, while $F(-D) = -F(D)$ by neutrality. Hence $F(D) = -F(D)$, and $F(D) = 0$.
3. *A lead wins.* Suppose $n_+ > n_-$ and let $k = n_+ - n_-$. Build $D^0$ from $D$ by changing $k$ of the $1$s to $0$s. Then $D^0$ has counts $(n_-, n_-)$, so $F(D^0) = 0$ by Step 2. Since $D \ge D^0$ and $D \ne D^0$, positive responsiveness gives $F(D) = 1$.
4. *A deficit loses.* If $n_- > n_+$, then $-D$ has $x$ ahead, so $F(-D) = 1$ by Step 3, and neutrality gives $F(D) = -1$.

Steps 2 to 4 cover every profile, and each agrees with $\operatorname{sgn}(n_+ - n_-)$. ∎

Run Step 3 once. With seven voters and $D = (1, 1, -1, 1, 0, 1, -1)$, $x$ leads $4$ to $2$. Zero out two $x$-votes to get $D^0 = (0, 0, -1, 1, 0, 1, -1)$, a $2$–$2$ tie, so $F(D^0) = 0$; restoring the two votes is a move toward $x$, so $F(D) = 1$.

May's title promises more: the conditions are **independent**, so none follows from the other three. Each rule below keeps three and fails exactly one (checked by script on every one of the 243 five-voter profiles):

| Rule | Fails only |
|---|---|
| Majority, but no decision when everyone is indifferent | decisiveness |
| Casting vote: majority, with the chair's own vote breaking ties | anonymity |
| $x$ needs more than half of all members, abstainers included | neutrality |
| Always declare a tie | positive responsiveness |

**Where the argument is weakest.** Neutrality is the condition critics attack. Many two-option decisions are not between equals: change against the status quo, conviction against acquittal, an amendment against the constitution as it stands. Drop neutrality and the other three conditions still allow every **[supermajority rule](../reference.md#supermajority-rule)** of the form "$x$ wins if and only if at least $q$ voters favour it, otherwise $y$" (checked for every $q$ with up to six voters). So a supermajority is not arbitrary in any other respect: it is exactly the judgment that the options deserve unequal treatment, and May's theorem leaves that judgment open. The second soft spot is the setting itself. May takes the two options as given. Who chose them, and what happens when there are three, lie outside the theorem: pairwise majority then satisfies all four conditions on each pair and can still cycle.

## Picture

![Two triangular grids of dots for eight voters. The horizontal axis counts voters for change x and the vertical axis voters for the status quo y, each from 0 to 8. Left, simple majority: blue dots below the dashed diagonal where x leads, red squares above it, open circles on it for ties, so the picture is a mirror image across the diagonal with colours swapped. Right, absolute majority of the eight members: blue only where at least 5 favour x, red everywhere else, including the diagonal and many points below it, so the mirror symmetry fails.](assets/01-02-fig1.svg)

Each mark is a count pair $(n_+, n_-)$ for eight voters; by Step 1, an anonymous rule is just a colouring of this triangle. Neutrality says reflecting across the dashed line $n_+ = n_-$ swaps blue and red. Simple majority passes that test everywhere and forces ties on the line. The absolute-majority rule fails it at 25 of the 45 pairs: $(2, 1)$ and its mirror $(1, 2)$ are both red.

## Worked examples

**Example 1 (clean): the casting vote.** A five-member committee; member 1 chairs. $F(D) = \operatorname{sgn}\big(\sum_i D_i\big)$ when the sum is nonzero, and $F(D) = D_1$ when it is zero.

- *Decisiveness:* every profile gets a value. Holds.
- *Neutrality:* reversing every vote reverses the sum and, at a zero sum, the chair's vote. Holds.
- *Positive responsiveness:* $F(D) \in \{0, 1\}$ forces $\sum_i D_i \ge 0$ (a negative sum gives $-1$). Any move toward $x$ raises the sum to at least 1, so $F(D') = 1$. Holds.
- *Anonymity:* $(1, -1, 0, 0, 0)$ gives $x$, since the sum is 0 and the chair favours $x$. Swap voters 1 and 2: $(-1, 1, 0, 0, 0)$ has the same counts $(1, 1)$ but gives $y$. Fails.

So by May's theorem the casting vote cannot be majority rule, and it differs exactly at the ties where the chair has a view. Notice what it bought: no ties when the chair has a view. Decisiveness was never at stake, since majority already answers "tie" there. The price of breaking ties is anonymity.

**Example 2 (the hypothesis bites): a majority of the membership.** Seven members. Motion $x$ passes if more than half the membership, at least 4, votes for it; otherwise the status quo $y$ stands. It sounds like majority rule. Take 3 for, 0 against, 4 abstaining: the motion fails, though it won every vote cast.

- *Decisiveness, anonymity:* the outcome depends only on $n_+$. Hold.
- *Positive responsiveness:* $F$ never returns $0$, and $F(D) = 1$ means $n_+ \ge 4$; moves toward $x$ cannot lower $n_+$. Holds.
- *Neutrality:* take $D$ with 2 for, 1 against, 4 abstaining, so $F(D) = -1$. Then $-D$ has 1 for and 2 against, and $F(-D) = -1$ again. Neutrality demands $F(-D) = 1$. Fails.

Exactly one condition fails, so May's theorem certifies that this rule is a status-quo rule, not majority rule: abstainers are counted for $y$. Every "x needs more than such-and-such a share" rule fails neutrality in this way, and the share decides how large the status quo's built-in advantage is.

## Watch out

- **You might think decisiveness means the rule never ties.** It means the rule always returns exactly one of $x$, $y$, tie. Majority ties whenever $n_+ = n_-$ and is still decisive. Removing ties needs a tie-breaker, and a tie-breaker that looks at *who* is on each side costs anonymity (Example 1).
- **You might think May's theorem makes majority rule the answer to any vote.** It is about exactly two options. With three, pairwise majority keeps all four conditions on every pair and can still cycle (the basic cycle is in [`grad-game-theory` 5.1](../../grad-game-theory/lessons/05-01-social-choice-impossibility.md)); [1.3](01-03-arrow-as-a-map.md) shows the failure is transitivity, and [1.4](01-04-how-often-do-cycles-happen.md) measures how often. May also says nothing about how the two options got onto the ballot.
- **You might think a dictatorship fails only anonymity.** With indifference allowed it also fails positive responsiveness: when the dictator is indifferent the result is a tie, and no other voter can move it. Arrow's dictator satisfies every condition but one; May's fails two.

## One-liner

> With two options, treating voters alike, treating options alike and letting one vote break a tie leaves exactly one rule, simple majority, so every supermajority, casting vote or weighting is a named departure from it.

## Problems

**P1 (🟢) *(Formal.)*** A five-party council votes on a motion $x$ against the status quo $y$, with party weights $3, 2, 2, 1, 1$. Each party votes for, against, or abstains. The motion passes if the total weight for it exceeds the total weight against it; otherwise $y$ stands. Which of May's four conditions does the rule satisfy? For each condition it fails, give a pair of profiles that shows the failure.

**P2 (🟡) *(Formal (a) · Exegetical (b).)*** Five voters.
(a) Build a rule that is decisive, anonymous and neutral, is weakly monotone (if $D' \ge D$ then $F(D') \ge F(D)$), and picks $x$ whenever all five voters prefer $x$, but is not positively responsive. Show it has each property and exhibit a failure of positive responsiveness.
(b) In one sentence, say which step of May's proof breaks for your rule.

**P3 (🔴, optional) *(Formal.)*** Suppose nobody may be indifferent: profiles lie in $\{-1, 1\}^n$ with $n$ odd, and positive responsiveness reads "if $F(D) \in \{0, 1\}$ and $D'$ comes from $D$ by switching at least one $-1$ to $1$, then $F(D') = 1$." Step 3 of the proof zeroed out votes, which is now impossible. Prove that decisiveness, anonymity, neutrality and positive responsiveness still force $F = F_{\text{maj}}$ on this domain.

<details>
<summary>Solutions</summary>

**P1** *(Formal.)*

Write profiles in party order. The rule satisfies **decisiveness** and **positive responsiveness**, and fails **anonymity** and **neutrality**.

- *Decisiveness:* every profile gives $x$ or $y$.
- *Positive responsiveness:* the rule never returns a tie, so the condition applies only when $F(D) = 1$, i.e. weight for exceeds weight against. A move toward $x$ either adds weight for or removes weight against, so the motion still passes.
- *Anonymity fails:* $(1, -1, 0, 0, 0)$ has 3 for and 2 against, so $x$; $(-1, 1, 0, 0, 0)$ has the same counts, one party each way, but 2 for and 3 against, so $y$.
- *Neutrality fails:* $(1, -1, -1, 1, 0)$ has weight $3 + 1 = 4$ for and $2 + 2 = 4$ against, a weighted tie, so $y$. Its reversal $(-1, 1, 1, -1, 0)$ is again 4 to 4, so $y$, but neutrality requires $x$. (Everyone abstaining also works: that profile is its own reversal and gives $y$.)

**Wrong turns:** stopping at anonymity because "it's a weighted vote", and missing that ties go to the status quo. Claiming positive responsiveness fails because the weights are unequal: unequal weights never make a move toward $x$ hurt $x$.

---

**P2** *(Formal (a) · Exegetical (b), strict.)*

**Accept:** any rule with all five listed properties, each shown, plus a pair $D' \ge D$, $D' \ne D$, with $F(D) \in \{0, 1\}$ and $F(D') \ne 1$. Constant rules fail the unanimity requirement.

(a) *Margin of two.* Let $m = n_+ - n_-$. Set $F = 1$ if $m \ge 2$, $F = -1$ if $m \le -2$, and $F = 0$ otherwise.

- Decisive: defined everywhere. Anonymous: depends only on counts. Neutral: reversing every vote sends $m$ to $-m$, and the rule is symmetric in $m$.
- Weakly monotone: $D' \ge D$ cannot lower $m$, and $F$ is a nondecreasing function of $m$.
- Unanimity: five votes for $x$ give $m = 5 \ge 2$, so $x$.
- Not positively responsive: $D = (1, -1, 0, 0, 0)$ has $m = 0$, a tie. Raise voter 3: $D' = (1, -1, 1, 0, 0)$ has $m = 1$, still a tie, though positive responsiveness demands $x$.

(b) Step 3 breaks: the tie at $D^0$ still holds, but a lead of one stays a tie, so moving from $D^0$ up to $D$ does not force $x$.

**Wrong turns:** "majority unless the vote is unanimous, then tie" fails positive responsiveness but also fails weak monotonicity and the unanimity requirement. Naming Step 2 in (b): ties still come out as ties; it is the passage from a tie to a win that fails.

---

**P3** *(Formal.)*

1. Anonymity makes $F$ depend only on $a = n_+$, since $n_- = n - a$: write $F(D) = h(a)$ for $a = 0, \dots, n$.
2. Reversing every vote sends $a$ to $n - a$, so neutrality gives $h(n - a) = -h(a)$.
3. Let $m = (n - 1)/2$, so $n - m = m + 1$. Suppose $h(m) \in \{0, 1\}$. Switch one $y$-voter to $x$: positive responsiveness gives $h(m + 1) = 1$. But Step 2 gives $h(m + 1) = h(n - m) = -h(m) \in \{0, -1\}$. Contradiction, so $h(m) = -1$, and then $h(m + 1) = 1$.
4. For $a > m + 1$: take a profile $D$ with $a$ votes for $x$ and switch $a - m - 1$ of them to $y$, giving $D^1$ with $h = h(m + 1) = 1$. Switching them back is a move toward $x$, so positive responsiveness gives $h(a) = 1$.
5. For $a < m$: $n - a > m + 1$, so $h(a) = -h(n - a) = -1$.

So $h(a) = 1$ exactly when $a > n/2$ and $-1$ otherwise, which is $\operatorname{sgn}(n_+ - n_-)$ with no ties possible. ∎ (Checked by script: on three voters, of all $3^8$ functions on $\{-1, 1\}^3$ only majority has the four properties.)

**Wrong turns:** trying to start, as in the original proof, from a tie: with $n$ odd and no abstention there is no tie profile. The work is in Step 3, where neutrality and positive responsiveness together rule out $h(m) \ne -1$ just below the midpoint.

</details>

## Connections

- **Backward:** [1.1](01-01-profiles-rules-and-the-majority-relation.md) defined anonymity and neutrality as invariance under permuting voters and alternatives; here they do all the work of Steps 1 and 2. Step 4 is the "without loss of generality" move of [`proofs-primer` 2.3](../../proofs-primer/lessons/02-03-cases-and-wlog.md), licensed by neutrality.
- **Forward:** [1.3](01-03-arrow-as-a-map.md) applies majority to every pair of three or more options and finds that what breaks is transitivity, not any of May's conditions. Positive responsiveness has a weaker cousin, [monotonicity](../reference.md#monotonicity), which [2.4](02-04-monotonicity-and-participation.md) shows instant runoff can fail. [4.4](04-04-the-list-pettit-impossibility.md)'s systematicity adds neutrality across propositions to independence, and [5.1](05-01-the-condorcet-jury-theorem.md) asks the epistemic question about the same two-option majority: not whether it is fair but whether it is right.
- **Sideways:** [`political-philosophy` 5.4](../../political-philosophy/lessons/05-04-does-social-choice-wound-democracy.md) cites May as the high point before trouble starts at three options. Anonymity and neutrality are a formal rendering of the "equal say" that [`political-philosophy` 5.1](../../political-philosophy/lessons/05-01-why-democracy.md)'s intrinsic justification values; whether an equal say is what matters is that lesson's question, not this one's.
