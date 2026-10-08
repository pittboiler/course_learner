# Social Choice · Lesson 4.3: The doctrinal paradox and the discursive dilemma

> ⏱ ~15 min · Module 4: Rights and reasons · Builds on: [4.1 Sen's liberal paradox](04-01-sens-liberal-paradox.md), [1.1 Profiles, rules and the majority relation](01-01-profiles-rules-and-the-majority-relation.md) · Unlocks: [4.4 The List–Pettit impossibility](04-04-the-list-pettit-impossibility.md)

## Why this matters

Courts, tenure committees, central-bank boards and expert panels are not only asked for a verdict. They are asked for reasons, and the reasons are supposed to entail the verdict. Lewis Kornhauser and Lawrence Sager (1986, "Unpacking the Court") showed that a multi-member court can reach opposite results on the same votes depending on whether it decides issue by issue or outcome by outcome. Philip Pettit (2001, "Deliberative Democracy and the Discursive Dilemma") saw the general shape: whenever a group takes majority votes on logically connected propositions, the set it accepts can be inconsistent. This lesson computes the paradox, proves exactly which agendas allow it, and sets up the impossibility theorem of [4.4](04-04-the-list-pettit-impossibility.md).

## The idea

A department's rule: grant tenure if and only if the candidate is excellent in teaching, research and service. Three committee members each think she falls short on exactly one criterion, a different one each. Applying the rule honestly, every member votes no. Now vote on the criteria instead: each one passes 2 to 1. The committee, as a body, holds that she is excellent in all three and that she should not get tenure. No single member could hold that set without contradicting the rule everyone accepts.

You have seen this mechanism before. In a [Condorcet cycle](../reference.md#condorcet-cycle) every voter is transitive and the majority is not, because a *different* majority carries each pairwise comparison. Here every member is consistent and the majority is not, for the same reason: the coalition that accepts teaching is not the one that accepts research.

The group has two ways to get a consistent answer. Vote on the reasons and let the rule derive the outcome: tenure. Or vote on the outcome directly: no tenure, 0 to 3, and no collective reasons at all. Pettit's dilemma is the choice between being responsive to the members on the outcome and being a body that can state reasons for what it does.

## The result

**Setting.** An *agenda* $X$ is a finite set of propositions, closed under negation (if $p \in X$ then $\neg p \in X$, identifying $\neg\neg p$ with $p$). Members $N = \{1, \dots, n\}$. Member $i$'s *judgment set* $J_i \subseteq X$ is the set of propositions she accepts.

- $J$ is **consistent** if some truth assignment makes every proposition in $J$ true. *In words:* the propositions could all hold together.
- $J$ is **complete** if for every $p \in X$ it contains $p$ or $\neg p$. *In words:* it takes a side on every question.

A profile is $(J_1, \dots, J_n)$ with every $J_i$ consistent and complete. **Proposition-wise majority** returns

$$M(J_1, \dots, J_n) = \{\, p \in X : |\{ i : p \in J_i \}| > n/2 \,\}.$$

*In words:* the group accepts whatever more than half its members accept, one proposition at a time. This is [judgment aggregation](../reference.md#judgment-aggregation): the input is a profile of judgment sets instead of a [profile](../reference.md#profile) of rankings. With $n$ odd and complete inputs, $M$ is complete, since exactly one of $p$, $\neg p$ wins. The question is consistency.

The **[doctrinal paradox](../reference.md#doctrinal-paradox)** is Kornhauser and Sager's case: premises plus a conclusion tied to them by a doctrine every member accepts, here $c \leftrightarrow (t \land r \land s)$, so the conclusion can be written $t \land r \land s$. The **[discursive dilemma](../reference.md#discursive-dilemma)** is Pettit's generalization: proposition-wise majority yields an inconsistent set, with no need for a premise/conclusion split; the connecting rule can itself be on the agenda and in dispute (P2). Two consistent procedures:

- **[Premise-based](../reference.md#premise-based-procedure):** designate logically independent premises, take a majority on each, derive the rest by logic.
- **[Conclusion-based](../reference.md#conclusion-based-procedure):** each member reasons privately; take a majority on the conclusion only, and leave the premises collectively undecided.

A set $Y \subseteq X$ is **minimally inconsistent** if it is inconsistent and every proper subset is consistent. On the tenure agenda $\{t, r, s, \neg(t \land r \land s)\}$ is minimally inconsistent with four members; $\{\neg t,\ t \land r \land s\}$ is minimally inconsistent with two. An agenda has the **[median property](../reference.md#median-property)** if every minimally inconsistent subset has at most two members.

**Theorem** (Klaus Nehring and Clemens Puppe, 2007; also Franz Dietrich and Christian List, 2007). Let $n \ge 3$ be odd. Proposition-wise majority returns a consistent set for every profile if and only if $X$ has the median property.

*In words:* the paradox can happen exactly when the agenda contains three or more propositions that are jointly, but not pairwise, incompatible.

*Proof.* (If.)

1. Suppose $X$ has the median property but $M$ is inconsistent at some profile.
2. $M$ is finite, so deleting elements while the set stays inconsistent ends at a minimally inconsistent $Y \subseteq M$.
3. By the median property, $|Y| \le 2$.
4. If $Y = \{a\}$, then $a$ is a contradiction accepted by a majority, so some member accepts it, and her $J_i$ is inconsistent. Contradiction.
5. If $Y = \{a, b\}$, more than $n/2$ members accept $a$ and more than $n/2$ accept $b$. Two subsets of $N$ each larger than $n/2$ must intersect, so some member accepts both, and her $J_i$ is inconsistent. Contradiction.

(Only if, by contrapositive.)

6. Let $Y = \{a_1, \dots, a_k\}$ be minimally inconsistent with $k \ge 3$.
7. For $j = 1, 2, 3$, $Y \setminus \{a_j\}$ is consistent; choose a truth assignment making it true and let $J^{(j)}$ be every proposition in $X$ true under it. $J^{(j)}$ is consistent and complete, and it rejects $a_j$ (otherwise $Y$ would be satisfied) while accepting every other $a_i$.
8. Split $N$ into three blocs of sizes $\lfloor n/3 \rfloor$ or $\lceil n/3 \rceil$; bloc $j$ holds $J^{(j)}$. For odd $n \ge 3$, $\lceil n/3 \rceil < n/2$.
9. Each of $a_1, a_2, a_3$ is rejected by one bloc only, fewer than $n/2$ members, and every other $a_i$ by nobody. So $Y \subseteq M$, and $M$ is inconsistent. ∎

Step 9 is the tenure committee in general form, and steps 4–5 are why two-proposition clashes never survive a vote. A quick corollary: on three alternatives, the propositions "$x$ beats $y$", "$y$ beats $z$", "$z$ beats $x$" are pairwise compatible but jointly violate transitivity, a minimally inconsistent set of size 3. So the theorem predicts the [Condorcet cycle](../reference.md#condorcet-cycle); [4.4](04-04-the-list-pettit-impossibility.md) turns that observation into Arrow's theorem.

**Where the argument is weakest.** The theorem is about one procedure that must take a side on every proposition. A critic attacks the demand that the group hold reasons at all. Many courts announce a disposition by an outcome vote; if a group owes only a verdict, the conclusion-based procedure is consistent by construction and nothing is paradoxical. The dilemma bites only if collective reasons matter, for precedent, accountability or deliberation, and that is Pettit's normative premise, not a theorem. The second target is proposition-by-proposition voting: let the vote on the conclusion depend on the votes about the premises and the inconsistency disappears. [4.4](04-04-the-list-pettit-impossibility.md) shows what that costs.

## Picture

![A grid with three member rows and four columns, teaching, research, service and tenure. Member 1 says no, yes, yes, no; member 2 yes, no, yes, no; member 3 yes, yes, no, no. A dashed line separates the three premise columns from the tenure column. The majority row reads yes 2 to 1 on each premise and no 0 to 3 on tenure. Captions say the premise-based procedure grants tenure, the conclusion-based procedure refuses it, and the majority row is inconsistent.](assets/04-03-fig1.svg)

Read the grid by column and every member is consistent; read the bottom row and the group is not. The premise-based procedure reads left of the dashed line, the conclusion-based procedure reads right of it.

## Worked examples

**Example 1 (clean): the tenure committee, computed.** Profile: member 1 accepts $\neg t, r, s$; member 2 accepts $t, \neg r, s$; member 3 accepts $t, r, \neg s$; each therefore accepts $\neg(t \land r \land s)$.

- Tallies: $t$, $r$, $s$ each 2–1; $t \land r \land s$ 0–3.
- $M = \{t, r, s, \neg(t \land r \land s)\}$: the size-4 minimally inconsistent set itself.
- Premise-based: $t \land r \land s$ follows, so **tenure**. Conclusion-based: **no tenure**, unanimously.

The gap can be as wide as possible. With $k$ criteria and $k$ members, each rejecting a different one, every premise passes $k-1$ to 1 and the conclusion fails 0 to $k$. The premise-based procedure then overrides a unanimous verdict.

On a conjunctive agenda the split runs one way only. If a majority accepts $t \land r \land s$, each of those members accepts $t$, $r$ and $s$, so each premise has a majority. Hence "conclusion yes, premises no" is impossible; only "premises yes, conclusion no" can occur. How often? If each of three members picks one of the 8 consistent complete judgment sets on this agenda uniformly at random, 42 of the $8^3 = 512$ profiles are inconsistent: $21/256 \approx 8.2\%$. Like [impartial culture](../reference.md#impartial-culture), that model says nothing about real committees.

**Example 2 (the hypothesis bites): damages on a line.** A five-judge panel must fix damages. The agenda is $d_1$ "damages exceed 10,000 dollars", $d_2$ "exceed 50,000", $d_3$ "exceed 100,000", with negations, and the background facts $d_3 \Rightarrow d_2 \Rightarrow d_1$ count toward consistency. Every minimally inconsistent set is a pair such as $\{d_3, \neg d_2\}$: the agenda has the median property, so by the theorem the paradox cannot occur.

Judges' estimates, in thousands of dollars: 20, 60, 120, 40, 150. Tallies: $d_1$ 5–0, $d_2$ 3–2, $d_3$ 2–3. The panel accepts $d_1$, $d_2$, $\neg d_3$: consistent, and exactly the judgment set of the median judge (60). That is no accident. On nested thresholds, proposition-wise majority *is* the median judgment, for every profile with 3, 5 or 7 judges (checked exhaustively). The line-like structure that made [single-peaked](../reference.md#single-peaked-preferences) majorities transitive in [3.3](03-03-single-peakedness-black-and-moulin.md) makes judgment majorities consistent here; List (2003) generalizes it as *unidimensional alignment*, the analogue of [3.4](03-04-single-crossing-and-value-restriction.md)'s single-crossing.

Now drop oddness. Four judges at 20, 40, 60 and 120: $d_2$ ties 2–2, neither $d_2$ nor $\neg d_2$ is accepted, and $M$ is incomplete. The theorem's "$n$ odd" was doing work.

## Watch out

- **You might think the paradox needs someone to reason badly.** Every member's set is consistent and applies the doctrine. The inconsistency is manufactured by aggregation, exactly as transitive voters manufacture a cycle.
- **You might think the premise-based procedure is the free fix.** It is consistent, but in Example 1 it grants tenure against a unanimous no, and it treats premises and conclusion by different rules. Which of [4.4](04-04-the-list-pettit-impossibility.md)'s conditions it gives up is the next lesson's business.
- **You might think the theorem holds for any $n$.** Oddness is a hypothesis. With even $n$ ties leave $M$ incomplete, and the "only if" construction can fail: on $\{p, p \to q, q\}$ four members can never make a strict majority accept all of $p$, $p \to q$, $\neg q$, since each member rejects at least one of the three, and four rejections on three propositions put two on one of them, a tie.

## One-liner

> Majorities on connected propositions can be inconsistent exactly when three or more of them clash only jointly, and then a group must choose between answering to its members' verdicts and answering for its reasons.

## Problems

**P1 (🟢) *(Formal (a) · Formal (b).)*** A five-member hospital board dismisses a resident if and only if she falsified records ($p$) or endangered a patient ($q$). Members 1 and 2 accept $p$ and $\neg q$; members 3 and 4 accept $\neg p$ and $q$; member 5 accepts $\neg p$ and $\neg q$. Each applies the doctrine to her own premises.

(a) Tally $p$, $q$ and $p \lor q$. Give the premise-based and conclusion-based verdicts, and name a minimally inconsistent subset of the majority set.
(b) Prove that on the agenda $\{p, q, p \lor q\}$ with any odd $n$, if the premise-based procedure dismisses, so does the conclusion-based procedure. Which split is therefore the only one possible?

**P2 (🟡) *(Formal (a) · Formal (b).)*** An expert panel judges $p$ "the central bank raises rates this year", $p \to q$ "if it raises rates, unemployment rises", and $q$ "unemployment rises", with negations. Recall $p \to q$ is true unless $p$ is true and $q$ false ([`proofs-primer` 1.1](../../proofs-primer/lessons/01-01-statements-connectives-implication.md)).

(a) Give three consistent, complete judgment sets whose proposition-wise majority accepts $p$, $p \to q$ and $\neg q$.
(b) This agenda has four complete inconsistent judgment sets. Prove that for odd $n$, $\{p,\ p \to q,\ \neg q\}$ is the only one proposition-wise majority can ever return.

**P3 (🔴, optional) *(Formal (a) · Exegetical (b).)*** An invented agency memo: "Our five-member panel found the device effective (3–2) and safe (3–2). Approval requires both. The panel's verdict, approval, is therefore what the evidence supports, and it reflects the panel's collective view." Members 1, 2, 3 found it effective; members 1, 4, 5 found it safe.

(a) How many members individually support approval? What does the conclusion-based procedure return?
(b) In 100 words or fewer, name the procedure the memo used and the claims in it that this lesson's results do not license.

<details>
<summary>Solutions</summary>

**P1** *(Formal (a) · Formal (b).)*

(a) $p$: members 1, 2, so 2–3, rejected. $q$: members 3, 4, so 2–3, rejected. $p \lor q$: members 1–4, so 4–1, accepted. Majority set $\{\neg p, \neg q, p \lor q\}$. Premise-based: neither ground holds, so **no dismissal**. Conclusion-based: **dismissal**, 4–1. The whole set $\{\neg p, \neg q, p \lor q\}$ is minimally inconsistent: any two of its members are jointly satisfiable, all three are not.

(b) Suppose the premise-based procedure dismisses. Then a majority accepts $p$ or a majority accepts $q$; say $p$. Each member who accepts $p$ has a consistent complete set, so she accepts $p \lor q$ (if she accepted $\neg(p \lor q)$, she would hold the inconsistent pair $p$, $\neg(p \lor q)$). So more than $n/2$ members accept $p \lor q$ and the conclusion-based procedure dismisses. The only possible split is premise-based acquits, conclusion-based dismisses, the mirror image of the conjunctive case in Example 1.

**Wrong turns:** reporting the premise-based verdict as a tally on $p \lor q$; it is derived from the premise majorities, not counted. In (b), arguing from this one profile; the claim is about every profile, and the argument is the pairwise-clash step of the theorem's proof.

---

**P2** *(Formal (a) · Formal (b).)*

**Accept:** any three consistent complete sets in which each of $p$, $p \to q$, $\neg q$ is accepted by at least two members.

(a) Model answer, the theorem's construction with each member rejecting one of the three:

- Member 1: $p$, $p \to q$, $q$ (rejects $\neg q$).
- Member 2: $p$, $\neg(p \to q)$, $\neg q$ (rejects $p \to q$).
- Member 3: $\neg p$, $p \to q$, $\neg q$ (rejects $p$).

Each is the truth assignment $(p, q) = (T, T)$, $(T, F)$, $(F, F)$, so each is consistent. Tallies: $p$ 2–1, $p \to q$ 2–1, $q$ 1–2. Majority: $\{p, p \to q, \neg q\}$, inconsistent by modus ponens.

(b) The four complete inconsistent sets are $\{p, p \to q, \neg q\}$, $\{p, \neg(p \to q), q\}$, $\{\neg p, \neg(p \to q), q\}$, $\{\neg p, \neg(p \to q), \neg q\}$. Since $\neg(p \to q)$ means "$p$ and not $q$", the last three each contain a two-element inconsistent pair: $\{\neg(p \to q), q\}$ in the second and third, $\{\neg p, \neg(p \to q)\}$ in the third and fourth. By steps 4–5 of the theorem, two majorities intersect, so a majority set never contains an inconsistent pair. The first set's only minimally inconsistent subset is the whole triple, and (a) shows it is reached.

**Wrong turns:** in (a), giving member 2 the set $p$, $p \to q$, $\neg q$: that member is herself inconsistent. In (b), checking a few profiles instead of proving the intersection step.

---

**P3** *(Formal (a) · Exegetical (b), strict.)*

(a) Effective $\{1, 2, 3\}$, safe $\{1, 4, 5\}$: only member 1 finds both, so 1 supports approval and 4 oppose. Conclusion-based: **reject**, 1–4. Premise-based: **approve**.

**Must hit, strict (b):**

- The memo used the premise-based procedure: majorities on each premise, conclusion derived by the doctrine.
- "Reflects the panel's collective view" is false on the conclusion: a majority on each premise does not give a majority on their conjunction, and here four of five members oppose approval.
- "What the evidence supports" is a further, epistemic claim. Which procedure better tracks the truth is a separate question ([5.3](05-03-epistemic-readings-of-aggregation.md)); the counting results here do not settle it either way.

**Wrong turns:** calling the panel's members inconsistent; each set is consistent. Saying the memo miscounted; both 3–2 tallies are right.

**Model answer (b):** The memo applied the premise-based procedure. Its tallies are correct, but only member 1 found the device both effective and safe, so the conclusion-based count is 1–4 against. "Reflects the panel's collective view" is therefore false of the verdict: majorities on each premise need not add up to a majority on the conjunction. "What the evidence supports" is a further claim, that premise-based aggregation tracks truth better, and that is an epistemic question this lesson does not answer.

</details>

## Flashback

**From Lesson [4.1](04-01-sens-liberal-paradox.md) (Sen's liberal paradox):** *(Formal (a)–(b).)* Housemates Jo and Kai share a spare room. It can become Jo's studio ($j$), Kai's gym ($g$), or stay a guest room ($h$). Jo is decisive over $\{j, h\}$ and Kai over $\{g, h\}$. Society uses 4.1's minimal liberal-Paretian rule: $x \, P \, y$ iff a right or a unanimous strict preference forces it, and every other pair is indifferent.

(a) Find every two-person profile (Jo's strict ranking, Kai's strict ranking) at which $P$ cycles on $\{j, g, h\}$, and prove there are no others without checking the 36 profiles one by one.
(b) Add Lee, who holds no rights. How many of the $6^3 = 216$ three-person profiles produce a cycle?

<details>
<summary>Solution</summary>

**Worked answer:**

(a) Sort the edges by pair. On $\{j, h\}$ the only possible strict edge is Jo's verdict: a unanimous preference there includes Jo, so it agrees with her. Likewise $\{g, h\}$ carries Kai's verdict. On $\{g, j\}$ nobody holds a right, so there is an edge only if both agree. A cycle on three alternatives needs a strict edge on all three pairs, so it needs that Pareto edge, and it runs one of two ways.

- $j \, P \, h \, P \, g \, P \, j$: Jo needs $j \succ h$ and $g \succ j$, so Jo is $g \succ j \succ h$. Kai needs $h \succ g$ and $g \succ j$, so Kai is $h \succ g \succ j$.
- $j \, P \, g \, P \, h \, P \, j$: Jo needs $h \succ j$ and $j \succ g$, so Jo is $h \succ j \succ g$. Kai needs $g \succ h$ and $j \succ g$, so Kai is $j \succ g \succ h$.

In each direction the cycle fixes two of each person's comparisons, which share an alternative, so transitivity fixes her whole ranking. Exactly two profiles cycle.

(b) Lee changes no rights edge and can only remove the Pareto edge, never add one, so a cycle needs one of the two pairs from (a) and Lee agreeing on $\{g, j\}$: $g \succ j$ with the first (3 of her 6 rankings), $j \succ g$ with the second (3 more). That is 6 of 216, or $\tfrac{1}{36}$, matching 4.1's $\tfrac{1}{18}\left(\tfrac{1}{2}\right)^{n-2}$ at $n = 3$.

**Wrong turns:** letting a unanimous preference on $\{j, h\}$ overrule Jo; it cannot, since she is part of it. Finding one orientation and stopping at one profile. Thinking Lee can create new cycles: an extra voter only deletes Pareto edges.

</details>

## Connections

- **Backward:** [4.1](04-01-sens-liberal-paradox.md) got an impossibility from a cycle built by different decisive agents over different pairs; here different majorities over different propositions build an inconsistency. The Condorcet cycle of [1.1](01-01-profiles-rules-and-the-majority-relation.md) and [`grad-game-theory` 5.1](../../grad-game-theory/lessons/05-01-social-choice-impossibility.md) is the special case of a size-3 minimally inconsistent set on the preference agenda. Example 2's median judgment is [3.3](03-03-single-peakedness-black-and-moulin.md)'s median voter moved from preferences to judgments.
- **Forward:** [4.4](04-04-the-list-pettit-impossibility.md) proves that the problem is not majority voting's alone: no rule meeting a short list of conditions avoids it on this kind of agenda, and the escape routes are the [List–Pettit impossibility](../reference.md#list-pettit-impossibility)'s conditions dropped one at a time. [5.3](05-03-epistemic-readings-of-aggregation.md) asks which of the two procedures is more likely to be right when there is a fact of the matter.
- **Sideways:** Pettit's case for groups that give reasons belongs to the deliberative side of [`political-philosophy` 5.3](../../political-philosophy/lessons/05-03-deliberative-vs-aggregative-democracy.md). Pooling credences instead of yes/no judgments is [`epistemology` 5.5](../../epistemology/lessons/05-05-bayesian-disagreement-and-higher-order-evidence.md), where averaging probability functions keeps the group coherent but fails to commute with conditionalization.
